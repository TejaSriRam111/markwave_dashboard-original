import os

print("=== DEBUG START ===")

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
print("SCRIPT_DIR:", SCRIPT_DIR)

REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))
print("REPO_ROOT:", REPO_ROOT)

print("Contents of REPO_ROOT:")
print(os.listdir(REPO_ROOT))

package_json = os.path.join(REPO_ROOT, "package.json")
print("Looking for:", package_json)
print("Exists:", os.path.exists(package_json))
print("Is file:", os.path.isfile(package_json))

print("=== DEBUG END ===")

if os.path.isfile(package_json):
    print("markwave_react")
else:
    print("unknown")
