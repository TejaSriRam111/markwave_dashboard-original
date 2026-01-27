import subprocess

def run(cmd):
    subprocess.run(cmd, shell=True, check=True)

def commit():
    run("git add .github/workflows/ci.yml")
    run('git commit -m "AI: Auto-generate CI/CD pipeline"')
    run("git push")

if __name__ == "__main__":
    commit()
