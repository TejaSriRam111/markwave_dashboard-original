import os
import json

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))

def detect_stack():
    package_json = os.path.join(REPO_ROOT, "package.json")

    if not os.path.exists(package_json):
        return "unknown"

    with open(package_json, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Convert entire package.json to string for robust detection
    package_text = json.dumps(data).lower()

    if "react" in package_text:
        return "markwave_react"

    return "node"

if __name__ == "__main__":
    print(detect_stack())
