import subprocess
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))

def run(cmd):
    subprocess.run(cmd, shell=True, check=True)

# Detect stack
stack = subprocess.check_output(
    "python analyze_repo.py",
    shell=True,
    cwd=SCRIPT_DIR
).decode().strip()

print(f"Detected stack: {stack}")

# Generate pipeline
run(f"python generate_pipeline.py {stack}")

# Commit from repo root
run("git add .github/workflows/ci.yml")
run('git commit -m "AI: Generate CI pipeline for MarkWave Dashboard"')
run("git push")

print("✅ AI agent completed successfully")
