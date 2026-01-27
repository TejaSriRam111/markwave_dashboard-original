import os

def detect_stack():
    if os.path.exists("package.json"):
        return "node"
    if os.path.exists("requirements.txt"):
        return "python"
    if os.path.exists("pom.xml"):
        return "java"
    return "unknown"

if __name__ == "__main__":
    stack = detect_stack()
    print(f"DETECTED_STACK={stack}")
