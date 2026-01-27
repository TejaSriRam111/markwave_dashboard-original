import shutil

def generate(stack):
    if stack == "node":
        shutil.copy("templates/node.yml", ".github/workflows/ci.yml")
    elif stack == "python":
        shutil.copy("templates/python.yml", ".github/workflows/ci.yml")
    else:
        raise Exception("Unsupported stack")

if __name__ == "__main__":
    import os
    stack = os.environ.get("STACK")
    os.makedirs(".github/workflows", exist_ok=True)
    generate(stack)
