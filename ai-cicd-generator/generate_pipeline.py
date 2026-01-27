import os
import shutil
import sys

stack = sys.argv[1]

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))
WORKFLOW_DIR = os.path.join(REPO_ROOT, ".github", "workflows")

os.makedirs(WORKFLOW_DIR, exist_ok=True)

if stack == "markwave_react":
    shutil.copy(
        os.path.join(SCRIPT_DIR, "templates", "markwave_react.yml"),
        os.path.join(WORKFLOW_DIR, "ci.yml")
    )
else:
    raise Exception("Unsupported repository type")

print("CI/CD pipeline generated successfully")
