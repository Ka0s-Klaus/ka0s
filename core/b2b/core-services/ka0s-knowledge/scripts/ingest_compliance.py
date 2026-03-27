import hashlib
import json
import logging
import os
import sys
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional, Tuple

import psycopg2
import requests
from bson import ObjectId
from pymongo import MongoClient
from pymongo.collection import Collection
from pymongo.cursor import Cursor
from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter

logger = logging.getLogger("ka0s.ingest_compliance")


@dataclass(frozen=True)
class MongoConfig:
    uri: Optional[str]
    host: str
    port: int
    username: str
    password: str
    auth_db: str
    db_allowlist: Optional[List[str]]
    db_blocklist: List[str]
    collection_allowlist: Optional[List[str]]


@dataclass(frozen=True)
class PgConfig:
    host: str
    port: int
    db: str
    user: str
    password: str


@dataclass(frozen=True)
class OllamaConfig:
    host: str
    port: int
    model: str


@dataclass(frozen=True)
class RunConfig:
    batch_size: int
    max_docs: Optional[int]
    sleep_seconds_per_doc: float
    chunk_chars: int
    chunk_overlap: int
    max_chunks_per_doc: Optional[int]


def _env_list(name: str) -> Optional[List[str]]:
    raw = os.getenv(name)
    if not raw:
        return None
    items = [x.strip() for x in raw.split(",")]
    return [x for x in items if x]


def load_configs() -> Tuple[MongoConfig, PgConfig, OllamaConfig, RunConfig]:
    mongo_uri = os.getenv("MONGO_URI")
    mongo_password = os.getenv("MONGO_PASSWORD")
    if not mongo_uri and not mongo_password:
        raise ValueError("Missing env var: MONGO_URI or MONGO_PASSWORD")

    pg_password = os.getenv("POSTGRES_PASSWORD")
    if not pg_password:
        raise ValueError("Missing env var: POSTGRES_PASSWORD")

    mongo = MongoConfig(
        uri=mongo_uri,
        host=os.getenv("MONGO_HOST", "mongo.mongo.svc.cluster.local"),
        port=int(os.getenv("MONGO_PORT", "27017")),
        username=os.getenv("MONGO_USER", "root"),
        password=mongo_password or "",
        auth_db=os.getenv("MONGO_AUTH_DB", "admin"),
        db_allowlist=_env_list("MONGO_DB_ALLOWLIST"),
        db_blocklist=_env_list("MONGO_DB_BLOCKLIST") or ["admin", "local", "config"],
        collection_allowlist=_env_list("MONGO_COLLECTION_ALLOWLIST"),
    )

    pg = PgConfig(
        host=os.getenv("POSTGRES_HOST", "postgresql-ia.postgresql-ia.svc.cluster.local"),
        port=int(os.getenv("POSTGRES_PORT", "5432")),
        db=os.getenv("POSTGRES_DB", "ka0s_memory"),
        user=os.getenv("POSTGRES_USER", "ka0s_ai"),
        password=pg_password,
    )

    ollama = OllamaConfig(
        host=os.getenv("OLLAMA_HOST", "ollama.ollama.svc.cluster.local"),
        port=int(os.getenv("OLLAMA_PORT", "11434")),
        model=os.getenv("EMBEDDING_MODEL", "nomic-embed-text"),
    )

    run = RunConfig(
        batch_size=max(1, int(os.getenv("BATCH_SIZE", "10"))),
        max_docs=int(os.getenv("MAX_DOCS", "0")) or None,
        sleep_seconds_per_doc=float(os.getenv("SLEEP_SECONDS_PER_DOC", "0.25")),
        chunk_chars=max(256, int(os.getenv("CHUNK_CHARS", "1000"))),
        chunk_overlap=max(0, int(os.getenv("CHUNK_OVERLAP", "200"))),
        max_chunks_per_doc=int(os.getenv("MAX_CHUNKS_PER_DOC", "0")) or None,
    )

    return mongo, pg, ollama, run


def setup_logging() -> None:
    level = os.getenv("LOG_LEVEL", "INFO").upper()
    logging.basicConfig(
        level=level,
        format="%(asctime)s %(levelname)s %(name)s %(message)s",
    )


def pg_connect(cfg: PgConfig):
    return psycopg2.connect(
        host=cfg.host,
        port=cfg.port,
        database=cfg.db,
        user=cfg.user,
        password=cfg.password,
        connect_timeout=5,
    )


def ensure_pg_schema(cfg: PgConfig) -> None:
    conn = pg_connect(cfg)
    try:
        with conn:
            with conn.cursor() as cur:
                cur.execute("CREATE EXTENSION IF NOT EXISTS vector;")
                cur.execute(
                    """
                    CREATE TABLE IF NOT EXISTS kaos_memory (
                        id SERIAL PRIMARY KEY,
                        source TEXT NOT NULL,
                        content TEXT NOT NULL,
                        embedding vector(768),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                    """
                )
                cur.execute("ALTER TABLE kaos_memory ADD COLUMN IF NOT EXISTS content_hash TEXT;")
                cur.execute("CREATE INDEX IF NOT EXISTS idx_kaos_memory_hash ON kaos_memory(content_hash);")

                cur.execute(
                    """
                    DELETE FROM kaos_memory a
                    USING kaos_memory b
                    WHERE a.id < b.id AND a.source = b.source;
                    """
                )

                cur.execute(
                    "CREATE UNIQUE INDEX IF NOT EXISTS ux_kaos_memory_source ON kaos_memory(source);"
                )
                cur.execute("DROP INDEX IF EXISTS idx_kaos_memory_source;")

                cur.execute(
                    """
                    CREATE TABLE IF NOT EXISTS kaos_mongo_ingest_state (
                        db_name TEXT NOT NULL,
                        collection_name TEXT NOT NULL,
                        last_id TEXT,
                        docs_processed BIGINT NOT NULL DEFAULT 0,
                        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        PRIMARY KEY (db_name, collection_name)
                    );
                    """
                )
    finally:
        conn.close()


def mongo_connect(cfg: MongoConfig) -> MongoClient:
    if cfg.uri:
        return MongoClient(cfg.uri, serverSelectionTimeoutMS=5000)

    uri = f"mongodb://{cfg.username}:{cfg.password}@{cfg.host}:{cfg.port}/?authSource={cfg.auth_db}&directConnection=true"
    return MongoClient(uri, serverSelectionTimeoutMS=5000)


def list_target_dbs(client: MongoClient, cfg: MongoConfig) -> List[str]:
    all_dbs = [d for d in client.list_database_names() if d not in cfg.db_blocklist]
    if cfg.db_allowlist:
        return [d for d in all_dbs if d in cfg.db_allowlist]
    return all_dbs


def list_target_collections(db, cfg: MongoConfig) -> List[str]:
    cols = db.list_collection_names()
    if cfg.collection_allowlist:
        return [c for c in cols if c in cfg.collection_allowlist]
    return cols


def chunk_text(text: str, chunk_chars: int, overlap_chars: int = 0) -> List[str]:
    if not text:
        return []
    if chunk_chars <= 0:
        return [text]
    
    # Compliance Splitting: Use Markdown Header splitting
    headers_to_split_on = [
        ("#", "Header 1"),
        ("##", "Header 2"),
        ("###", "Header 3"),
    ]
    markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on=headers_to_split_on)
    
    try:
        md_header_splits = markdown_splitter.split_text(text)
        # Further split chunks if they are still too large
        char_splitter = RecursiveCharacterTextSplitter(
            chunk_size=chunk_chars, chunk_overlap=overlap_chars
        )
        final_splits = char_splitter.split_documents(md_header_splits)
        
        # Reconstruct text from document page_content and metadata
        return [f"Context: {doc.metadata}\n{doc.page_content}" for doc in final_splits]
    except Exception as e:
        logger.warning(f"Failed Markdown parsing, falling back to char splitter: {e}")
        char_splitter = RecursiveCharacterTextSplitter(
            chunk_size=chunk_chars, chunk_overlap=overlap_chars
        )
        return char_splitter.split_text(text)


def md5_text(text: str) -> str:
    return hashlib.md5(text.encode("utf-8")).hexdigest()


def doc_to_text(db_name: str, collection_name: str, doc: Dict[str, Any]) -> str:
    doc_id = str(doc.get("_id", ""))
    database_id = str(doc.get("databaseId", ""))
    workflow_db_id = str(doc.get("workflowDatabaseId", ""))
    
    header = f"source=mongo db={db_name} collection={collection_name} id={doc_id}"
    if database_id:
        header += f" databaseId={database_id}"
    if workflow_db_id:
        header += f" workflowDatabaseId={workflow_db_id}"
    header += "\n"

    if isinstance(doc.get("content"), str) and doc["content"].strip():
        body = doc["content"]
        if isinstance(doc.get("filename"), str):
            header = f"{header.strip()} filename={doc['filename']}\n"
        return header + "\n" + body

    if isinstance(doc.get("data"), (dict, list)):
        try:
            body = json.dumps(doc["data"], ensure_ascii=False, sort_keys=True)
        except Exception:
            body = str(doc["data"])
        return header + "\n" + body

    safe_doc = {k: v for k, v in doc.items() if k not in {"_id"}}
    try:
        body = json.dumps(safe_doc, ensure_ascii=False, default=str, sort_keys=True)
    except Exception:
        body = str(safe_doc)
    return header + "\n" + body


def ollama_embed(cfg: OllamaConfig, text: str) -> List[float]:
    url = f"http://{cfg.host}:{cfg.port}/api/embeddings"
    payload = {"model": cfg.model, "prompt": text}
    retries = 3

    for attempt in range(retries):
        try:
            resp = requests.post(url, json=payload, timeout=60)
            resp.raise_for_status()
            data = resp.json()
            emb = data.get("embedding")
            if not isinstance(emb, list):
                raise ValueError("Invalid embedding response")
            return emb
        except Exception as e:
            if attempt == retries - 1:
                logger.error("Embedding error (final): %s", e)
                return []
            backoff = 2**attempt
            logger.warning("Embedding error (%s/%s): %s; retrying in %ss", attempt + 1, retries, e, backoff)
            time.sleep(backoff)

    return []


def pg_get_state(conn, db_name: str, collection_name: str) -> Optional[str]:
    with conn.cursor() as cur:
        cur.execute(
            "SELECT last_id FROM kaos_mongo_ingest_state WHERE db_name=%s AND collection_name=%s",
            (db_name, collection_name),
        )
        row = cur.fetchone()
        if not row:
            return None
        return row[0]


def pg_set_state(conn, db_name: str, collection_name: str, last_id: str, docs_processed_inc: int) -> None:
    with conn.cursor() as cur:
        cur.execute(
            """
            INSERT INTO kaos_mongo_ingest_state (db_name, collection_name, last_id, docs_processed, updated_at)
            VALUES (%s, %s, %s, %s, CURRENT_TIMESTAMP)
            ON CONFLICT (db_name, collection_name)
            DO UPDATE SET
                last_id = EXCLUDED.last_id,
                docs_processed = kaos_mongo_ingest_state.docs_processed + EXCLUDED.docs_processed,
                updated_at = CURRENT_TIMESTAMP;
            """,
            (db_name, collection_name, last_id, docs_processed_inc),
        )


def pg_upsert_chunk(conn, source: str, chunk: str, content_hash: str, embedding: List[float]) -> None:
    with conn.cursor() as cur:
        cur.execute(
            """
            INSERT INTO kaos_memory (source, content, content_hash, embedding)
            VALUES (%s, %s, %s, %s)
            ON CONFLICT (source)
            DO UPDATE SET
                content = EXCLUDED.content,
                content_hash = EXCLUDED.content_hash,
                embedding = EXCLUDED.embedding,
                created_at = CURRENT_TIMESTAMP;
            """,
            (source, chunk, content_hash, embedding),
        )


def pg_chunk_is_current(conn, source: str, content_hash: str) -> bool:
    with conn.cursor() as cur:
        cur.execute(
            "SELECT 1 FROM kaos_memory WHERE source=%s AND content_hash=%s AND embedding IS NOT NULL LIMIT 1",
            (source, content_hash),
        )
        return cur.fetchone() is not None


def mongo_cursor_for_collection(col: Collection, last_id: Optional[str], batch_size: int) -> Cursor:
    query: Dict[str, Any] = {}
    if last_id:
        if len(last_id) == 24:
            try:
                query = {"_id": {"$gt": ObjectId(last_id)}}
            except Exception:
                query = {"_id": {"$gt": last_id}}
        else:
            query = {"_id": {"$gt": last_id}}
    return col.find(query, sort=[("_id", 1)], batch_size=batch_size)


def vectorize_collection(
    mongo_client: MongoClient,
    mongo_cfg: MongoConfig,
    pg_cfg: PgConfig,
    ollama_cfg: OllamaConfig,
    run_cfg: RunConfig,
    db_name: str,
    collection_name: str,
) -> int:
    pg_conn = pg_connect(pg_cfg)
    docs_done = 0
    try:
        pg_conn.autocommit = False
        last_id = pg_get_state(pg_conn, db_name, collection_name)

        db = mongo_client[db_name]
        col = db[collection_name]

        cursor = mongo_cursor_for_collection(col, last_id, run_cfg.batch_size)
        for doc in cursor:
            if run_cfg.max_docs is not None and docs_done >= run_cfg.max_docs:
                break

            doc_id = str(doc.get("_id", ""))
            text = doc_to_text(db_name, collection_name, doc)
            chunks = chunk_text(text, run_cfg.chunk_chars, run_cfg.chunk_overlap)
            if run_cfg.max_chunks_per_doc is not None:
                chunks = chunks[: run_cfg.max_chunks_per_doc]

            with pg_conn:
                for i, chunk in enumerate(chunks):
                    if not chunk.strip():
                        continue
                    source = f"mongo://{db_name}/{collection_name}/{doc_id}#chunk{i}"
                    chunk_hash = md5_text(chunk)
                    if pg_chunk_is_current(pg_conn, source, chunk_hash):
                        continue
                    embedding = ollama_embed(ollama_cfg, chunk)
                    if not embedding:
                        continue
                    pg_upsert_chunk(pg_conn, source, chunk, chunk_hash, embedding)

                pg_set_state(pg_conn, db_name, collection_name, doc_id, 1)

            logger.info("Processed %s.%s doc=%s chunks=%s", db_name, collection_name, doc_id, len(chunks))

            docs_done += 1
            if run_cfg.sleep_seconds_per_doc > 0:
                time.sleep(run_cfg.sleep_seconds_per_doc)

        return docs_done
    finally:
        pg_conn.close()


def run() -> int:
    setup_logging()
    mongo_cfg, pg_cfg, ollama_cfg, run_cfg = load_configs()

    retries = 5
    for attempt in range(retries):
        try:
            ensure_pg_schema(pg_cfg)
            break
        except Exception as e:
            if attempt == retries - 1:
                logger.error("Postgres schema init failed (final): %s", e)
                return 3
            backoff = 2**attempt
            logger.warning(
                "Postgres schema init failed (%s/%s): %s; retrying in %ss",
                attempt + 1,
                retries,
                e,
                backoff,
            )
            time.sleep(backoff)

    mongo_client = mongo_connect(mongo_cfg)
    try:
        mongo_client.admin.command("ping")
    except Exception as e:
        logger.error("Mongo connection failed: %s", e)
        return 2

    started = datetime.now(timezone.utc)
    logger.info(
        "Starting mongo vectorization: mongo=%s:%s postgres=%s:%s db=%s batch=%s sleep=%.2fs max_docs=%s",
        mongo_cfg.host,
        mongo_cfg.port,
        pg_cfg.host,
        pg_cfg.port,
        pg_cfg.db,
        run_cfg.batch_size,
        run_cfg.sleep_seconds_per_doc,
        run_cfg.max_docs,
    )

    total_docs = 0
    for db_name in list_target_dbs(mongo_client, mongo_cfg):
        db = mongo_client[db_name]
        for collection_name in list_target_collections(db, mongo_cfg):
            logger.info("Vectorizing %s.%s", db_name, collection_name)
            done = vectorize_collection(
                mongo_client,
                mongo_cfg,
                pg_cfg,
                ollama_cfg,
                run_cfg,
                db_name,
                collection_name,
            )
            total_docs += done
            logger.info("Done %s.%s docs=%s (total=%s)", db_name, collection_name, done, total_docs)

            if run_cfg.max_docs is not None and total_docs >= run_cfg.max_docs:
                break
        if run_cfg.max_docs is not None and total_docs >= run_cfg.max_docs:
            break

    elapsed = (datetime.now(timezone.utc) - started).total_seconds()
    logger.info("Finished. total_docs=%s elapsed=%.1fs", total_docs, elapsed)
    return 0


if __name__ == "__main__":
    try:
        sys.exit(run())
    except ValueError as e:
        setup_logging()
        logger.error("Config error: %s", e)
        sys.exit(1)
