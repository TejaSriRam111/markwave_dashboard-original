import subprocess
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))

def run(cmd, cwd=None):
    subprocess.run(cmd, shell=True, check=True, cwd=cwd)

# Detect stack
stack = subprocess.check_output(
    "python analyze_repo.py",
    shell=True,
    cwd=SCRIPT_DIR
).decode().strip()

print(f"Detected stack: {stack}")

# Generate pipeline
run(f"python generate_pipeline.py {stack}", cwd=SCRIPT_DIR)

# Commit from repo root
run("git status", cwd=REPO_ROOT)
run("git add .github/workflows/ci.yml", cwd=REPO_ROOT)
run('git commit -m "AI: Generate CI pipeline for MarkWave Dashboard"', cwd=REPO_ROOT)
run("git push", cwd=REPO_ROOT)

print(" AI CI/CD pipeline generated and pushed successfully")
