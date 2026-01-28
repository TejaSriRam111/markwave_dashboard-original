import subprocess
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))

def run(cmd, cwd=None, allow_fail=False):
    try:
        subprocess.run(cmd, shell=True, check=True, cwd=cwd)
        return True
    except subprocess.CalledProcessError:
        if allow_fail:
            return False
        raise

# 1. Detect stack
stack = subprocess.check_output(
    "python analyze_repo.py",
    shell=True,
    cwd=SCRIPT_DIR
).decode().strip()

print(f"Detected stack: {stack}")

# 2. Generate pipeline
run(f"python generate_pipeline.py {stack}", cwd=SCRIPT_DIR)

# 3. Git operations
run("git add .github/workflows/ci.yml", cwd=REPO_ROOT)

# Check if there is anything to commit
has_changes = run("git diff --cached --quiet", cwd=REPO_ROOT, allow_fail=True)

if has_changes is False:
    print("No changes detected. CI/CD pipeline already up to date.")
else:
    run('git commit -m "AI: Generate CI pipeline for MarkWave Dashboard"', cwd=REPO_ROOT)
    run("git push", cwd=REPO_ROOT)
    print("AI CI/CD pipeline committed and pushed successfully")
