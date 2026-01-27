import os
import json

# Move to repo root (one level up)
REPO_ROOT = os.path.abspath(os.path.join(os.getcwd(), ".."))

def detect_stack():
    package_json = os.path.join(REPO_ROOT, "package.json")

    if os.path.exists(package_json):
        with open(package_json, "r", encoding="utf-8") as f:
            data = json.load(f)

        deps = data.get("dependencies", {})
        dev_deps = data.get("devDependencies", {})

        if "react" in deps or "react" in dev_deps:
            return "markwave_react"

    return "unknown"

if __name__ == "__main__":
    print(detect_stack())
