import argparse
import json
import subprocess
import sys
from pathlib import Path


def _run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", default="Ka0s-Klaus/ka0s")
    parser.add_argument("--snapshot", required=True)
    parser.add_argument("--out")
    args = parser.parse_args()

    snapshot_path = Path(args.snapshot)
    issues = json.loads(snapshot_path.read_text(encoding="utf-8"))
    nums = [i["number"] for i in issues]

    ok = 0
    bad = []
    expected_prefix = "### Informe de acciones (tácticas/estratégicas) — Ka0s"

    for n in nums:
        res = _run(
            [
                "gh",
                "issue",
                "view",
                "-R",
                args.repo,
                str(n),
                "--json",
                "comments",
                "--jq",
                "(.comments[-1].body // \"\")",
            ]
        )

        if res.returncode != 0:
            bad.append({"number": n, "reason": res.stderr.strip()})
            continue

        body = (res.stdout or "").lstrip()
        if body.startswith(expected_prefix):
            ok += 1
        else:
            bad.append(
                {
                    "number": n,
                    "reason": "último comentario no coincide con el informe",
                }
            )

    print(f"Issues en snapshot: {len(nums)}")
    print(f"Verificadas OK (informe como último comentario): {ok}")
    print(f"No verificadas: {len(bad)}")

    if bad:
        for item in bad[:25]:
            print(f"- #{item['number']}: {item['reason']}")
        if args.out:
            Path(args.out).write_text(
                json.dumps(
                    {
                        "snapshot": str(snapshot_path),
                        "total": len(nums),
                        "ok": ok,
                        "bad": bad,
                    },
                    ensure_ascii=False,
                    indent=2,
                ),
                encoding="utf-8",
            )
        sys.exit(2)

    if args.out:
        Path(args.out).write_text(
            json.dumps(
                {
                    "snapshot": str(snapshot_path),
                    "total": len(nums),
                    "ok": ok,
                    "bad": [],
                },
                ensure_ascii=False,
                indent=2,
            ),
            encoding="utf-8",
        )


if __name__ == "__main__":
    main()
