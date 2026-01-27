import os
import json

# Always point to repo root (parent of ai-cicd-generator)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))

def detect_stack():
    package_json = os.path.join(REPO_ROOT, "package.json")

    if not os.path.exists(package_json):
        return "unknown"

    with open(package_json, "r", encoding="utf-8") as f:
        data = json.load(f)

    deps = data.get("dependencies", {})
    dev_deps = data.get("devDependencies", {})

    if "react" in deps or "react" in dev_deps:
        return "markwave_react"

    return "node"

if __name__ == "__main__":
    print(detect_stack())
