import argparse
import json
import os
import re
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path


@dataclass(frozen=True)
class Feedback:
    rating: str
    promote: bool
    notes: str


def parse_feedback_command(comment_body: str) -> Feedback:
    body = (comment_body or "").strip()
    first_line = body.splitlines()[0].strip() if body else ""

    m = re.match(r"^/feedback\s+(good|bad)(?:\s+(promote))?(?:\s*:\s*(.*))?$", first_line, re.IGNORECASE)
    if not m:
        raise ValueError("Comando inválido. Usa: /feedback good|bad [promote] [: notas]")

    rating = m.group(1).lower()
    promote = (m.group(2) or "").lower() == "promote"
    notes = (m.group(3) or "").strip()
    return Feedback(rating=rating, promote=promote, notes=notes)


def gh_api_get(url: str, token: str) -> dict:
    req = urllib.request.Request(
        url,
        headers={
            "Accept": "application/vnd.github+json",
            "Authorization": f"Bearer {token}",
            "X-GitHub-Api-Version": "2022-11-28",
        },
        method="GET",
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        payload = resp.read().decode("utf-8", errors="replace")
    return json.loads(payload)


def select_agent_comment(comments: list[dict]) -> dict | None:
    for c in reversed(comments or []):
        if not isinstance(c, dict):
            continue
        user = c.get("user")
        login = user.get("login") if isinstance(user, dict) else ""
        body = c.get("body") or ""
        if login == "github-actions" and "Ka0s Agent" in body:
            return c
    return None


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", required=True)
    parser.add_argument("--issue-number", required=True, type=int)
    parser.add_argument("--comment-body", required=True)
    parser.add_argument("--comment-author", required=True)
    parser.add_argument("--run-id", required=True)
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()

    token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
    if not token:
        raise SystemExit("Falta GH_TOKEN/GITHUB_TOKEN")

    fb = parse_feedback_command(args.comment_body)
    repo = args.repo
    issue_number = args.issue_number
    api_base = f"https://api.github.com/repos/{repo}"

    issue = gh_api_get(f"{api_base}/issues/{issue_number}", token)
    comments = gh_api_get(f"{api_base}/issues/{issue_number}/comments?per_page=100", token)
    agent_comment = select_agent_comment(comments if isinstance(comments, list) else [])

    title = issue.get("title") or ""
    issue_body = issue.get("body") or ""
    labels = [l.get("name") for l in issue.get("labels", []) if isinstance(l, dict) and l.get("name")]

    now = datetime.now(timezone.utc)
    stamp = now.strftime("%Y%m%d_%H%M%S")
    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    file_name = f"{stamp}_{args.run_id}_issue-{issue_number}_{fb.rating}.md"
    out_path = out_dir / file_name

    parts: list[str] = []
    parts.append("# Ka0s Agent Feedback")
    parts.append("")
    parts.append(f"- Repo: `{repo}`")
    parts.append(f"- Issue: `#{issue_number}`")
    parts.append(f"- Run ID: `{args.run_id}`")
    parts.append(f"- Fecha (UTC): `{now.isoformat()}`")
    parts.append(f"- Autor feedback: `{args.comment_author}`")
    parts.append(f"- Rating: `{fb.rating}`")
    parts.append(f"- Promote: `{str(fb.promote).lower()}`")
    if labels:
        parts.append(f"- Labels: {', '.join(f'`{x}`' for x in labels)}")
    parts.append("")
    parts.append("## Título")
    parts.append(title)
    parts.append("")
    parts.append("## Pregunta")
    parts.append(issue_body.strip())
    parts.append("")
    parts.append("## Notas")
    parts.append(fb.notes if fb.notes else "(sin notas)")
    parts.append("")
    parts.append("## Última respuesta del agente")
    if agent_comment:
        parts.append((agent_comment.get("body") or "").strip())
    else:
        parts.append("(no encontrada)")

    out_path.write_text("\n".join(parts).strip() + "\n", encoding="utf-8")
    print(str(out_path).replace("\\", "/"))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

