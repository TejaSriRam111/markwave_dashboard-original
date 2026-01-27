import shutil
import os
import sys

stack = sys.argv[1]

os.makedirs(".github/workflows", exist_ok=True)

if stack == "markwave_react":
    shutil.copy(
        "templates/markwave_react.yml",
        ".github/workflows/ci.yml"
    )
else:
    raise Exception("Unsupported repository type")

print("CI pipeline generated")
