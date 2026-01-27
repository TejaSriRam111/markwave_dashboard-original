import subprocess

def run(cmd):
    subprocess.run(cmd, shell=True, check=True)

# Detect stack
stack = subprocess.check_output(
    "python analyze_repo.py",
    shell=True
).decode().strip()

print(f"Detected stack: {stack}")

# Generate pipeline
run(f"python generate_pipeline.py {stack}")

# Commit and push from repo root
run("cd .. && git add .github/workflows/ci.yml")
run('cd .. && git commit -m "AI: Generate CI pipeline for MarkWave Dashboard"')
run("cd .. && git push")

print("✅ AI CI/CD generation completed")
