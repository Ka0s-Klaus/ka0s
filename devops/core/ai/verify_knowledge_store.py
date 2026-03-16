import os
import sys
from typing import Any, Dict, List, Tuple

import psycopg2


def _env(name: str, default: str | None = None) -> str | None:
    v = os.environ.get(name)
    if v is None:
        return default
    v = v.strip()
    return v if v else default


def _connect() -> psycopg2.extensions.connection:
    host = _env("POSTGRES_IA_HOST") or _env("DB_HOST") or _env("POSTGRES_HOST")
    port = int(_env("POSTGRES_IA_PORT") or _env("DB_PORT") or _env("POSTGRES_PORT") or "5432")
    db = _env("POSTGRES_IA_DB") or _env("DB_NAME") or _env("POSTGRES_DB")
    user = _env("POSTGRES_IA_USER") or _env("DB_USER") or _env("POSTGRES_USER")
    password = _env("POSTGRES_IA_PASSWORD") or _env("DB_PASSWORD") or _env("POSTGRES_PASSWORD")
    if not host or not db or not user or not password:
        raise RuntimeError("Faltan env vars de conexión a Postgres IA")
    return psycopg2.connect(host=host, port=port, dbname=db, user=user, password=password)


def _table_exists(cur, name: str) -> bool:
    cur.execute("SELECT to_regclass(%s)", (f"public.{name}",))
    return cur.fetchone()[0] is not None


def _print_kv(title: str, rows: List[Tuple[Any, ...]]) -> None:
    print(title)
    for r in rows:
        print("  -", " | ".join(str(x) for x in r))


def main() -> None:
    conn = _connect()
    cur = conn.cursor()

    try:
        if _table_exists(cur, "kaos_memory"):
            cur.execute("SELECT COUNT(*) FROM kaos_memory")
            total = cur.fetchone()[0]
            _print_kv("kaos_memory", [("rows", total)])
            cur.execute(
                """
                SELECT split_part(source, '#', 1) AS src, COUNT(*)
                FROM kaos_memory
                GROUP BY 1
                ORDER BY 2 DESC
                LIMIT 20
                """
            )
            _print_kv("kaos_memory top sources", cur.fetchall())
        else:
            _print_kv("kaos_memory", [("missing", True)])

        if _table_exists(cur, "kaos_vectors"):
            cur.execute("SELECT COUNT(*) FROM kaos_vectors")
            total = cur.fetchone()[0]
            _print_kv("kaos_vectors", [("rows", total)])
            cur.execute(
                """
                SELECT source, embedding_model, embedding_dim, COUNT(*)
                FROM kaos_vectors
                GROUP BY 1,2,3
                ORDER BY 4 DESC
                """
            )
            _print_kv("kaos_vectors by source/model/dim", cur.fetchall())
            cur.execute(
                """
                SELECT source, MAX(updated_at) AS last_updated
                FROM kaos_vectors
                GROUP BY 1
                ORDER BY 2 DESC
                """
            )
            _print_kv("kaos_vectors last updated", cur.fetchall())
        else:
            _print_kv("kaos_vectors", [("missing", True)])
    finally:
        cur.close()
        conn.close()


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"ERROR: {e}")
        sys.exit(1)

