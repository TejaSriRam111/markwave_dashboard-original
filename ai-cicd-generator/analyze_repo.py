import os
import json

def detect_stack():
    if os.path.exists("package.json"):
        with open("package.json") as f:
            data = json.load(f)

        deps = data.get("dependencies", {})
        if "react" in deps:
            return "markwave_react"

    return "unknown"

if __name__ == "__main__":
    stack = detect_stack()
    print(stack)
