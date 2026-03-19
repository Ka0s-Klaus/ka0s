import json
import os
import subprocess
import sys
from pathlib import Path


def run_case(repo_root: Path, case: dict) -> tuple[bool, str]:
    mode = case.get("mode")
    query = case.get("query")
    must_contain = case.get("must_contain") or []

    if not isinstance(query, str) or not query.strip():
        return False, "query inválida"

    cmd = [sys.executable, "core/ai/inference/query.py"]
    if mode == "offline":
        cmd.append("--offline")
    cmd.append(query)

    env = dict(os.environ)
    env["PYTHONIOENCODING"] = "utf-8"
    proc = subprocess.run(
        cmd,
        cwd=str(repo_root),
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        env=env,
        timeout=120,
    )
    out = (proc.stdout or "")

    if proc.returncode != 0:
        err = (proc.stderr or "").strip()
        return False, f"returncode={proc.returncode} stderr={err[-800:]}"

    missing = [s for s in must_contain if s not in out]
    if missing:
        return False, f"faltan strings: {missing}"
    return True, "ok"


def main() -> int:
    repo_root = Path(__file__).resolve().parents[3]
    cases: list[dict] = []

    cases_path = Path(__file__).with_name("eval_cases.json")
    if cases_path.exists():
        loaded = json.loads(cases_path.read_text(encoding="utf-8"))
        if isinstance(loaded, list):
            cases.extend([c for c in loaded if isinstance(c, dict)])

    suites_dir = Path(__file__).with_name("suites")
    if suites_dir.exists() and suites_dir.is_dir():
        for p in sorted(suites_dir.glob("*.json")):
            loaded = json.loads(p.read_text(encoding="utf-8"))
            if isinstance(loaded, list):
                cases.extend([c for c in loaded if isinstance(c, dict)])

    if not isinstance(cases, list) or not cases:
        print("No hay casos de evaluación")
        return 2

    failures: list[str] = []
    for case in cases:
        name = case.get("name") or "(sin nombre)"
        ok, msg = run_case(repo_root, case)
        status = "PASS" if ok else "FAIL"
        print(f"{status} {name}: {msg}")
        if not ok:
            failures.append(f"{name}: {msg}")

    if failures:
        print("\nResumen de fallos:")
        for f in failures:
            print(f"- {f}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
