import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))

def detect_stack():
    package_json = os.path.join(REPO_ROOT, "package.json")
    if os.path.isfile(package_json):
        return "markwave_react"
    return "unknown"

if __name__ == "__main__":
    print(detect_stack())
