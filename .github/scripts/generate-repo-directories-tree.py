from __future__ import annotations

from collections import defaultdict
from pathlib import Path


def find_repo_root(start: Path) -> Path:
    p = start
    for _ in range(8):
        if (p / "core").exists() and (p / ".github").exists():
            return p
        if p.parent == p:
            break
        p = p.parent
    return start


def should_ignore_dir(path: Path) -> bool:
    ignore = {
        ".git",
        ".venv",
        "node_modules",
        "__pycache__",
        ".pytest_cache",
        ".mypy_cache",
        ".ruff_cache",
        ".idea",
        ".vscode",
    }
    return any(part in ignore for part in path.parts)


def collect_directories(repo_root: Path) -> list[str]:
    dirs: list[str] = []
    for p in repo_root.rglob("*"):
        if not p.is_dir():
            continue
        if should_ignore_dir(p):
            continue
        try:
            rel = p.relative_to(repo_root).as_posix()
        except Exception:
            continue
        if not rel or rel == ".":
            continue
        dirs.append(rel)
    return sorted(set(dirs))


def render_markdown(dirs: list[str]) -> str:
    groups: dict[str, list[str]] = defaultdict(list)
    for d in dirs:
        top = d.split("/", 1)[0]
        groups[top].append(d)

    lines: list[str] = []
    lines.append("# Árbol de directorios (generado)")
    lines.append("")
    lines.append(f"Total directorios (sin ignorados): {len(dirs)}")
    lines.append("")
    for top in sorted(groups.keys()):
        lines.append(f"## {top}/")
        lines.append("")
        for d in groups[top]:
            lines.append(f"- `{d}/`")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def main() -> int:
    repo_root = find_repo_root(Path(__file__).resolve())
    dirs = collect_directories(repo_root)

    out_path = repo_root / "core" / "docs" / "ka0s_repo_directories_tree" / "01_tree.md"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(render_markdown(dirs), encoding="utf-8")
    print(str(out_path))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

