#!/usr/bin/env python3
import json
import os
import pathlib
import re
import sys
import urllib.request


DEFAULT_SCAN_DIRS = [
    ".github/workflows",
    ".github/actions",
    ".github/scripts",
    "devops",
]


def get_repo_secrets():
    token = os.environ.get("GITHUB_TOKEN")
    repo = os.environ.get("GITHUB_REPOSITORY")
    if not token or not repo:
        message = (
            "::error::GITHUB_TOKEN and "
            "GITHUB_REPOSITORY are required"
        )
        print(message, file=sys.stderr)
        sys.exit(1)
    owner, name = repo.split("/", 1)
    url = (
        f"https://api.github.com/repos/{owner}/{name}/actions/secrets"
        "?per_page=100"
    )
    request = urllib.request.Request(
        url,
        headers={
            "Authorization": f"Bearer {token}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    )
    with urllib.request.urlopen(request) as response:
        data = json.load(response)
    return {item["name"] for item in data.get("secrets", [])}


def find_used_secrets(paths):
    pattern = re.compile(r"secrets\.([A-Z0-9_]+)")
    used = set()
    for base in paths:
        base_path = pathlib.Path(base)
        if not base_path.exists():
            continue
        for path in base_path.rglob("*"):
            if not path.is_file():
                continue
            suffix = path.suffix.lower()
            if suffix in {
                ".png",
                ".jpg",
                ".jpeg",
                ".gif",
                ".ico",
                ".pdf",
                ".pptx",
            }:
                continue
            try:
                text = path.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                continue
            for name in pattern.findall(text):
                used.add(name)
    return used


def main():
    scan_paths = sys.argv[1:] or DEFAULT_SCAN_DIRS
    defined = get_repo_secrets()
    used = find_used_secrets(scan_paths)
    unused = sorted(defined - used)
    undefined = sorted(used - defined)

    print("## Secrets definidos en GitHub")
    for name in sorted(defined):
        print(f"- {name}")

    print()
    print("## Secrets usados en código y workflows")
    for name in sorted(used):
        print(f"- {name}")

    print()
    print("## Secrets definidos pero sin uso detectado")
    if unused:
        for name in unused:
            print(f"- {name}")
    else:
        print("- (ninguno)")

    print()
    print("## Secrets usados pero no definidos en GitHub")
    if undefined:
        for name in undefined:
            print(f"- {name}")
    else:
        print("- (ninguno)")

    summary = {
        "defined": sorted(defined),
        "used": sorted(used),
        "unused": unused,
        "undefined": undefined,
    }

    print()
    print("## JSON")
    print(json.dumps(summary, indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
