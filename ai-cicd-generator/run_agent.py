import subprocess

def run(cmd):
    subprocess.run(cmd, shell=True, check=True)

stack = subprocess.check_output("python analyze_repo.py", shell=True).decode().strip()

run(f"python generate_pipeline.py {stack}")

run("git add .github/workflows/ci.yml")
run('git commit -m "AI: Generate CI pipeline for MarkWave Dashboard"')
run("git push")

print("✅ CI/CD pipeline generated and pushed")
