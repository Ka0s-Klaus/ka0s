import argparse
import sys
from pathlib import Path


REPLACEMENTS = [
    ("actions/checkout@v3", "actions/checkout@v6"),
    ("actions/checkout@v4", "actions/checkout@v6"),
    ("actions/setup-python@v4", "actions/setup-python@v6"),
    ("actions/setup-python@v5", "actions/setup-python@v6"),
    ("actions/upload-artifact@v4", "actions/upload-artifact@v6"),
    ("actions/download-artifact@v4", "actions/download-artifact@v7"),
    ("actions/cache@v4", "actions/cache@v5"),
    ("actions/cache/restore@v4", "actions/cache/restore@v5"),
    ("actions/cache/save@v4", "actions/cache/save@v5"),
]


def _collect_targets(repo_root: Path) -> list[Path]:
    targets: list[Path] = []
    workflows_dir = repo_root / ".github" / "workflows"
    if workflows_dir.exists():
        for p in workflows_dir.rglob("*"):
            if p.is_file() and p.suffix in {".yml", ".yaml"}:
                targets.append(p)

    template = repo_root / ".github" / "workflow-template.yml"
    if template.exists():
        targets.append(template)

    return sorted(set(targets))


def _rewrite_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    updated = original
    for src, dst in REPLACEMENTS:
        updated = updated.replace(src, dst)

    if updated == original:
        return False

    path.write_text(updated, encoding="utf-8")
    return True


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo-root", default=".")
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    targets = _collect_targets(repo_root)
    changed: list[str] = []

    for p in targets:
        original = p.read_text(encoding="utf-8")
        updated = original
        for src, dst in REPLACEMENTS:
            updated = updated.replace(src, dst)

        if updated != original:
            if args.check:
                changed.append(str(p.relative_to(repo_root)))
            else:
                p.write_text(updated, encoding="utf-8")
                changed.append(str(p.relative_to(repo_root)))

    if changed:
        print("Actualizados:")
        for p in changed:
            print(f"- {p}")
        if args.check:
            sys.exit(2)
    else:
        print("Sin cambios")


if __name__ == "__main__":
    main()

