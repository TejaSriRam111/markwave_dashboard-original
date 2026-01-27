import shutil
import os
import sys

stack = sys.argv[1]

REPO_ROOT = os.path.abspath(os.path.join(os.getcwd(), ".."))
WORKFLOW_DIR = os.path.join(REPO_ROOT, ".github", "workflows")

os.makedirs(WORKFLOW_DIR, exist_ok=True)

if stack == "markwave_react":
    shutil.copy(
        "templates/markwave_react.yml",
        os.path.join(WORKFLOW_DIR, "ci.yml")
    )
else:
    raise Exception("Unsupported repository type")

print("CI/CD pipeline generated successfully")
