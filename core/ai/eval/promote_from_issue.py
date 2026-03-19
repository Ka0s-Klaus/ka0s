import argparse
import json
import os
import re
from pathlib import Path


def _extract_section(body: str, header: str) -> str:
    pattern = re.compile(rf"^###\s+{re.escape(header)}\s*$", re.IGNORECASE | re.MULTILINE)
    m = pattern.search(body)
    if not m:
        return ""
    start = m.end()
    next_header = re.search(r"^###\s+.+$", body[start:], re.MULTILINE)
    end = start + next_header.start() if next_header else len(body)
    return body[start:end].strip()


def _parse_must_contain(section: str) -> list[str]:
    out: list[str] = []
    for raw in section.splitlines():
        s = raw.strip()
        if not s:
            continue
        s = re.sub(r"^[-*]\s+", "", s)
        s = s.strip()
        if not s:
            continue
        out.append(s)
    seen: set[str] = set()
    deduped: list[str] = []
    for s in out:
        if s in seen:
            continue
        seen.add(s)
        deduped.append(s)
    return deduped


def _load_json_list(path: Path) -> list[dict]:
    if not path.exists():
        return []
    payload = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(payload, list):
        return []
    return [x for x in payload if isinstance(x, dict)]


def _save_json_list(path: Path, items: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--suite", required=True, choices=["docs", "skills", "rules", "general"])
    parser.add_argument("--issue-number", required=True, type=int)
    args = parser.parse_args()

    issue_title = os.environ.get("ISSUE_TITLE", "").strip()
    issue_body = os.environ.get("ISSUE_BODY", "").strip()
    if not issue_body:
        return 2

    suite = args.suite
    issue_number = args.issue_number

    question = _extract_section(issue_body, "Pregunta") or _extract_section(issue_body, "Question")
    mode = (_extract_section(issue_body, "Mode") or _extract_section(issue_body, "Modo") or "offline").strip().lower()
    if mode not in {"offline", "rag"}:
        mode = "offline"

    must = _extract_section(issue_body, "Debe contener (must_contain)")
    if not must:
        must = _extract_section(issue_body, "Debe contener")
    if not must:
        must = _extract_section(issue_body, "Must contain")

    must_contain = _parse_must_contain(must)

    if not question:
        question = issue_title

    query = (issue_title + "\n\n" + question).strip() if issue_title else question
    name = f"issue_{issue_number}_{suite}"

    case = {
        "name": name,
        "query": query,
        "mode": mode,
        "must_contain": must_contain,
    }

    repo_root = Path(__file__).resolve().parents[3]
    if suite == "general":
        target = repo_root / "core" / "ai" / "eval" / "eval_cases.json"
    else:
        target = repo_root / "core" / "ai" / "eval" / "suites" / f"{suite}.json"

    cases = _load_json_list(target)
    replaced = False
    for i, c in enumerate(cases):
        if c.get("name") == name:
            cases[i] = case
            replaced = True
            break
    if not replaced:
        cases.append(case)

    _save_json_list(target, cases)
    print(str(target.relative_to(repo_root)).replace("\\", "/"))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

