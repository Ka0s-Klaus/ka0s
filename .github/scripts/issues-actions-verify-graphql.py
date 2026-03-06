import argparse
import json
import subprocess
import sys
from pathlib import Path


def _run(cmd):
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        msg = res.stderr.strip() or "gh api graphql failed"
        raise RuntimeError(msg)
    return res.stdout


def _graphql(owner, name):
    query = """
query($owner: String!, $name: String!, $cursor: String) {
  repository(owner: $owner, name: $name) {
    issues(
      first: 100,
      states: OPEN,
      after: $cursor,
      orderBy: {field: CREATED_AT, direction: DESC}
    ) {
      nodes {
        number
        comments(last: 1) {
          nodes {
            body
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
""".strip()

    cursor = None
    out = []
    while True:
        cmd = [
            "gh",
            "api",
            "graphql",
            "-f",
            f"query={query}",
            "-f",
            f"owner={owner}",
            "-f",
            f"name={name}",
        ]
        if cursor:
            cmd.extend(["-f", f"cursor={cursor}"])

        raw = _run(cmd)
        data = json.loads(raw)
        issues = data["data"]["repository"]["issues"]
        out.extend(issues["nodes"])

        page = issues["pageInfo"]
        if not page["hasNextPage"]:
            break
        cursor = page["endCursor"]

    return out


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", default="Ka0s-Klaus/ka0s")
    parser.add_argument("--out", required=True)
    args = parser.parse_args()

    if "/" not in args.repo:
        raise SystemExit("Invalid --repo. Expected OWNER/REPO")

    owner, name = args.repo.split("/", 1)
    issues = _graphql(owner, name)

    expected_prefix = "### Informe de acciones (tácticas/estratégicas) — Ka0s"
    ok = 0
    bad = []

    for it in issues:
        nodes = (it.get("comments") or {}).get("nodes") or []
        last_body = (nodes[0].get("body") if nodes else "") or ""
        if last_body.lstrip().startswith(expected_prefix):
            ok += 1
        else:
            bad.append({"number": it.get("number")})

    payload = {"repo": args.repo, "total": len(issues), "ok": ok, "bad": bad}
    Path(args.out).write_text(
        json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    if bad:
        print(f"Total: {len(issues)}  OK: {ok}  BAD: {len(bad)}")
        sys.exit(2)

    print(f"Total: {len(issues)}  OK: {ok}  BAD: 0")


if __name__ == "__main__":
    main()
