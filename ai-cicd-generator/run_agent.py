import subprocess
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))

def run(cmd, cwd=None):
    return subprocess.run(cmd, shell=True, cwd=cwd)

# 1. Detect stack
stack = subprocess.check_output(
    "python analyze_repo.py",
    shell=True,
    cwd=SCRIPT_DIR
).decode().strip()

print(f"Detected stack: {stack}")

# 2. Generate CI/CD pipeline
subprocess.run(
    f"python generate_pipeline.py {stack}",
    shell=True,
    cwd=SCRIPT_DIR,
    check=True
)

# 3. Stage generated file
subprocess.run(
    "git add .github/workflows/ci.yml",
    shell=True,
    cwd=REPO_ROOT,
    check=True
)

# 4. Check if anything is staged
status = subprocess.run(
    "git diff --cached --quiet",
    shell=True,
    cwd=REPO_ROOT
)

if status.returncode == 0:
    print("No changes detected. CI/CD pipeline already up to date.")
else:
    subprocess.run(
        'git commit -m "AI: Generate CI pipeline for MarkWave Dashboard"',
        shell=True,
        cwd=REPO_ROOT,
        check=True
    )
    subprocess.run(
        "git push",
        shell=True,
        cwd=REPO_ROOT,
        check=True
    )
    print("AI CI/CD pipeline committed and pushed successfully")
