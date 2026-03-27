import os
import sys  # Added sys for exit codes
import glob
import psycopg2
import requests
import logging
import hashlib
import argparse
import time
from typing import List
import json  # Added json for caching

# Configuration
# Support both DB_ and POSTGRES_ prefixes, prioritizing DB_ as used in workflows
POSTGRES_HOST = os.getenv("DB_HOST") or os.getenv("POSTGRES_HOST") or "localhost"
POSTGRES_PORT = os.getenv("DB_PORT") or os.getenv("POSTGRES_PORT") or "5433"
POSTGRES_DB = os.getenv("DB_NAME") or os.getenv("POSTGRES_DB") or "ka0s_memory"
POSTGRES_USER = os.getenv("DB_USER") or os.getenv("POSTGRES_USER") or "ka0s_ai"
POSTGRES_PASSWORD = os.getenv("DB_PASSWORD") or os.getenv("POSTGRES_PASSWORD") or "change_me_in_production_vector_db_123!"

OLLAMA_HOST = os.getenv("OLLAMA_HOST") or "localhost"
OLLAMA_PORT = os.getenv("OLLAMA_PORT") or "11435"
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL") or "nomic-embed-text"

# Paths relative to where the script is run (project root)
# Ingestion Strategy: Modular & Argument Driven
# Usage: python ingest_local.py --module [docs|skills|infra|code|audit|compliance|devops|github|all]

def is_ignored(filepath: str) -> bool:
    ignored_patterns = [
        "node_modules",
        "__pycache__",
        "audit/",         # Excluded entirely as it's ingested via CronJobs
        "site_build/",    # Excluded entirely as it's ingested via CronJobs
        ".log"
    ]
    for pattern in ignored_patterns:
        if pattern in filepath:
            return True
    return False

from semantic_chunker import semantic_chunk

def chunk_content(content: str, file_path: str, max_chunk_size=2000) -> List[str]:
    """
    Semantic line-aware chunking to avoid breaking code/JSON in the middle of a line.
    """
    return semantic_chunk(content, file_path, max_chunk_size)

def process_file_to_cache(file_path: str, cache_file: str):
    """
    Process file, generate embeddings, and append to a JSONL cache file.
    Does NOT connect to DB.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        chunks = chunk_content(content, file_path)
        
        with open(cache_file, 'a', encoding='utf-8') as cf:
            for i, chunk in enumerate(chunks):
                if not chunk.strip():
                    continue
                
                chunk_source = f"{file_path}#chunk{i}"
                chunk_payload = f"source: {chunk_source}\n{chunk}"
                chunk_hash = calculate_hash(chunk_payload)
                
                # Check against DB only for hash to skip processing if possible? 
                # Ideally, we want to avoid DB here. But to be incremental, we need to know what's in DB.
                # Optimization: We can download all hashes from DB once at start of script.
                if chunk_hash in EXISTING_HASHES:
                    logger.debug(f"Skipping unchanged chunk: {chunk_source}")
                    continue

                embedding = generate_embedding(chunk_payload)
                if not embedding:
                    continue
                
                metadata = {
                    "file_path": file_path,
                    "file_type": os.path.splitext(file_path)[1].lower(),
                    "chunk_index": i
                }

                record = {
                    "source": chunk_source,
                    "content": chunk_payload,
                    "content_hash": chunk_hash,
                    "metadata": metadata,
                    "embedding": embedding
                }
                cf.write(json.dumps(record) + "\n")
                
        logger.info(f"Processed file to cache: {file_path}")
        
    except Exception as e:
        logger.error(f"Error processing file {file_path}: {e}")

def load_existing_hashes():
    """
    Load all content_hashes from DB into a global set for fast lookup.
    """
    global EXISTING_HASHES
    EXISTING_HASHES = set()
    
    conn = get_db_connection()
    if not conn:
        logger.warning("Could not connect to DB to load existing hashes. Full ingestion will run.")
        return

    try:
        cur = conn.cursor()
        # Check if table exists first
        cur.execute("SELECT to_regclass('public.kaos_memory');")
        if not cur.fetchone()[0]:
             logger.info("Table kaos_memory does not exist yet. Empty hash set.")
             return

        logger.info("Loading existing hashes from DB...")
        cur.execute("SELECT content_hash FROM kaos_memory")
        rows = cur.fetchall()
        for r in rows:
            EXISTING_HASHES.add(r[0])
        logger.info(f"Loaded {len(EXISTING_HASHES)} existing hashes.")
        cur.close()
        conn.close()
    except Exception as e:
        logger.error(f"Error loading hashes: {e}")

def ingest_from_cache(cache_file: str):
    """
    Read JSONL cache file and bulk insert into DB.
    """
    if not os.path.exists(cache_file):
        logger.info("No cache file found (no new content).")
        return

    logger.info(f"Starting bulk ingestion from {cache_file}...")
    
    conn = get_db_connection()
    if not conn:
        logger.critical("Failed to connect to DB for bulk ingestion.")
        return
        
    cur = conn.cursor()
    count = 0
    try:
        with open(cache_file, 'r', encoding='utf-8') as f:
            for line in f:
                record = json.loads(line)
                
                # Deduplication: Delete old version if source exists (since we have new content for it)
                # Note: We rely on hash check in process_file_to_cache to avoid re-ingesting identical content.
                # If we are here, it means content is new or changed (hash mismatch).
                cur.execute("DELETE FROM kaos_memory WHERE source = %s", (record['source'],))
                
                metadata_json = json.dumps(record.get('metadata', {}))
                cur.execute(
                    "INSERT INTO kaos_memory (source, content, content_hash, metadata, embedding) VALUES (%s, %s, %s, %s, %s)",
                    (record['source'], record['content'], record['content_hash'], metadata_json, record['embedding'])
                )
                count += 1
                if count % 100 == 0:
                    conn.commit()
                    logger.info(f"Committed {count} records...")
        
        conn.commit()
        logger.info(f"Bulk ingestion complete. Total records inserted: {count}")
    except Exception as e:
        logger.error(f"Error during bulk ingestion: {e}")
        conn.rollback()
    finally:
        cur.close()
        conn.close()
        # Clean up cache file
        if os.path.exists(cache_file):
            os.remove(cache_file)

# Global set for hashes
EXISTING_HASHES = set()

# Define patterns per module
MODULES = {
    "docs": [
        "core/docs/**/*.md",
        "README.md"
    ],
    "skills": [
        "compliance/trae/skills/**/SKILL.md",
        "compliance/trae/rules/**/*.md"
    ],
    "infra": [
        "core/b2b/**/*.yaml",
        "core/b2b/**/*.json",
        "core/b2b/**/*.xml"
    ],
    "code": [
        "core/**/*.py",
        "core/**/*.sh",
        "core/**/*.sql"
    ],
    # Audit is handled by external CronJobs, removing from GitHub Actions ingestion
    "compliance": [
        "compliance/**/*.json",
        "compliance/**/*.md"
    ],
    "devops": [
        "devops/**/*.md",
        "devops/**/*.sh",
        "devops/**/*.py",
        "devops/**/*.json"
    ],
    "github": [
        ".github/**/*.yml",
        ".github/**/*.yaml",
        ".github/**/*.py",
        ".github/**/*.sh",
        ".github/**/*.md"
    ]
}


def get_patterns(module_name):
    if module_name == "all":
        all_patterns = []
        for p in MODULES.values():
            all_patterns.extend(p)
        return all_patterns
    return MODULES.get(module_name, [])


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Ka0s Knowledge Ingestion')
    parser.add_argument(
        '--module', 
        type=str, 
        default='all', 
        choices=['docs', 'skills', 'infra', 'code', 'audit', 'compliance', 'devops', 'github', 'all'],
        help='Specific module to ingest to prevent timeouts'
    )
    parser.add_argument(
        '--files',
        type=str,
        nargs='*',
        help='Specific files to ingest (overrides --module)'
    )
    args = parser.parse_args()

    if args.files:
        PATTERNS = args.files
        print(f"🚀 Starting ingestion for specific files: {args.files}")
    else:
        PATTERNS = get_patterns(args.module)
        print(f"🚀 Starting ingestion for module: {args.module}")
        print(f"📂 Patterns: {PATTERNS}")
    
else:
    # Default for imports or testing
    PATTERNS = []

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def get_db_connection(db_name=None):
    """
    Connect to PostgreSQL.
    If db_name is provided, connects to that specific DB.
    Otherwise uses POSTGRES_DB from env.
    """
    target_db = db_name or POSTGRES_DB
    try:
        conn = psycopg2.connect(
            host=POSTGRES_HOST,
            port=POSTGRES_PORT,
            database=target_db,
            user=POSTGRES_USER,
            password=POSTGRES_PASSWORD
        )
        return conn
    except psycopg2.OperationalError as e:
        # Handle "database does not exist" specifically
        if f'database "{target_db}" does not exist' in str(e):
            return None
        logger.critical(f"Failed to connect to DB {target_db} at {POSTGRES_HOST}:{POSTGRES_PORT}: {e}")
        sys.exit(1)
    except Exception as e:
        logger.critical(f"Unexpected DB connection error: {e}")
        sys.exit(1)

def ensure_database_exists():
    """
    Checks if target DB exists. If not, connects to 'template1' and creates it.
    """
    conn = get_db_connection()
    if conn:
        conn.close()
        return # DB exists and is accessible

    logger.warning(f"Database {POSTGRES_DB} does not exist. Attempting to create it...")
    
    # Try connecting to maintenance DBs in order: template1 -> postgres -> user_db
    maintenance_dbs = ["template1", "postgres", POSTGRES_USER]
    
    sys_conn = None
    for db in maintenance_dbs:
        try:
            logger.info(f"Attempting to connect to maintenance DB: {db}")
            sys_conn = psycopg2.connect(
                host=POSTGRES_HOST,
                port=POSTGRES_PORT,
                database=db,
                user=POSTGRES_USER,
                password=POSTGRES_PASSWORD
            )
            break
        except Exception as e:
            logger.warning(f"Could not connect to maintenance DB {db}: {e}")
            
    if not sys_conn:
        logger.critical("Failed to connect to ANY maintenance database. Cannot create target DB.")
        sys.exit(1)

    try:
        sys_conn.autocommit = True
        cur = sys_conn.cursor()
        # Check if DB exists to avoid race conditions
        cur.execute(f"SELECT 1 FROM pg_database WHERE datname = '{POSTGRES_DB}'")
        if not cur.fetchone():
            cur.execute(f"CREATE DATABASE {POSTGRES_DB};")
            logger.info(f"Database {POSTGRES_DB} created successfully.")
        else:
            logger.info(f"Database {POSTGRES_DB} already exists (race condition handled).")
            
        cur.close()
        sys_conn.close()
    except Exception as e:
        logger.critical(f"Failed to auto-create database {POSTGRES_DB}: {e}")
        sys.exit(1)

def init_db():
    ensure_database_exists()
    conn = get_db_connection()
    
    cur = conn.cursor()
    try:
        # Enable vector extension
        cur.execute("CREATE EXTENSION IF NOT EXISTS vector;")
        
        # Create memory table with hash for incremental updates
        cur.execute("""
            CREATE TABLE IF NOT EXISTS kaos_memory (
                id SERIAL PRIMARY KEY,
                source TEXT NOT NULL,
                content TEXT NOT NULL,
                content_hash TEXT,
                metadata JSONB DEFAULT '{}'::jsonb,
                embedding vector(768),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            CREATE INDEX IF NOT EXISTS idx_kaos_memory_source ON kaos_memory(source);
            CREATE INDEX IF NOT EXISTS idx_kaos_memory_hash ON kaos_memory(content_hash);
            CREATE INDEX IF NOT EXISTS idx_kaos_memory_metadata ON kaos_memory USING GIN (metadata);
            CREATE INDEX IF NOT EXISTS idx_kaos_memory_embedding ON kaos_memory USING hnsw (embedding vector_cosine_ops);
        """)
        
        conn.commit()
        logger.info("Database schema initialized successfully.")
    except Exception as e:
        logger.critical(f"DB Initialization error: {e}")
        conn.rollback()
        sys.exit(1)
    finally:
        cur.close()
        conn.close()


def ensure_model():
    url = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/pull"
    payload = {"name": EMBEDDING_MODEL}
    try:
        logger.info(f"Ensuring model {EMBEDDING_MODEL} exists...")
        response = requests.post(url, json=payload, stream=True, timeout=300)
        for line in response.iter_lines():
            if line:
                logger.debug(line)
        logger.info(f"Model {EMBEDDING_MODEL} ready.")
    except Exception as e:
        logger.error(f"Failed to pull model: {e}")
        # Non-critical if model already exists, but warning


import time

def generate_embedding(text: str) -> List[float]:
    url = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/embeddings"
    payload = {
        "model": EMBEDDING_MODEL,
        "prompt": text
    }
    
    retries = 3
    for attempt in range(retries):
        try:
            response = requests.post(url, json=payload, timeout=60) # Increased timeout
            response.raise_for_status()
            return response.json()["embedding"]
        except Exception as e:
            if attempt < retries - 1:
                wait_time = 2 ** attempt # Exponential backoff
                logger.warning(f"Embedding generation failed (Attempt {attempt+1}/{retries}): {e}. Retrying in {wait_time}s...")
                time.sleep(wait_time)
            else:
                logger.error(f"Embedding generation failed after {retries} attempts: {e}")
                return []



def calculate_hash(content: str) -> str:
    return hashlib.md5(content.encode('utf-8')).hexdigest()

def process_file(file_path: str):
    """
    Deprecated: Direct ingestion. Use process_file_to_cache instead.
    Kept for reference or single-file debugging.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        chunks = [content[i:i+2000] for i in range(0, len(content), 2000)]
        
        conn = get_db_connection()
        cur = conn.cursor()
        
        for i, chunk in enumerate(chunks):
            if not chunk.strip():
                continue
            
            chunk_source = f"{file_path}#chunk{i}"
            chunk_hash = calculate_hash(chunk)
            
            # Check if chunk exists and is unchanged
            cur.execute("SELECT id FROM kaos_memory WHERE source = %s AND content_hash = %s", (chunk_source, chunk_hash))
            if cur.fetchone():
                logger.debug(f"Skipping unchanged chunk: {chunk_source}")
                continue
                
            # If changed or new, delete old version first (deduplication)
            cur.execute("DELETE FROM kaos_memory WHERE source = %s", (chunk_source,))
            
            embedding = generate_embedding(chunk)
            if not embedding:
                continue
            
            cur.execute(
                "INSERT INTO kaos_memory (source, content, content_hash, embedding) VALUES (%s, %s, %s, %s)",
                (chunk_source, chunk, chunk_hash, embedding)
            )
        
        conn.commit()
        cur.close()
        conn.close()
        logger.info(f"Processed file: {file_path}")
        
    except Exception as e:
        logger.error(f"Error processing file {file_path}: {e}")


def run_ingestion():
    # 1. Discover files first (Debugging purpose)
    # This block allows us to verify file discovery even if DB connection fails later
    total_found = 0
    all_files = []
    
    logger.info(f"🔍 Pre-scan for module patterns: {PATTERNS}")
    
    for pattern in PATTERNS:
        files = glob.glob(pattern, recursive=True)
        # Filter out ignored files immediately
        valid_files = [f for f in files if not is_ignored(f)]
        
        count = len(valid_files)
        logger.info(f"📂 Found {count} valid files for pattern: {pattern}")
        if count > 0:
            # Print first 3 files as sample
            sample = valid_files[:3]
            logger.info(f"   Sample: {sample}")
        total_found += count
        all_files.extend(valid_files)
        
    if total_found == 0:
        logger.warning("⚠️ No files found in pre-scan. Check paths or git checkout.")
        return # Nothing to do

    logger.info(f"✅ Pre-scan complete. Total candidates: {total_found}")

    ensure_model()
    init_db()
    load_existing_hashes() # Pre-load hashes from DB
    
    # Track valid sources to clean up deleted files
    valid_sources_in_scan = set(all_files)
    
    cache_file = "ingest_cache.jsonl"
    if os.path.exists(cache_file):
        os.remove(cache_file)
        
    total_files = 0
    for f in all_files:
        process_file_to_cache(f, cache_file) # Changed to use cache
        total_files += 1
            
    logger.info(f"Processing complete. Ingesting to DB...")
    ingest_from_cache(cache_file) # Bulk insert
    
    # ---------------------------------------------------------
    # Handle Deleted Files (Sync DB with Filesystem)
    # ---------------------------------------------------------
    conn = get_db_connection()
    if conn:
        try:
            cur = conn.cursor()
            # Fetch all sources currently in the DB
            cur.execute("SELECT DISTINCT source FROM kaos_memory")
            db_sources = [row[0] for row in cur.fetchall()]
            
            deleted_count = 0
            for db_source in db_sources:
                # 'source' format is 'path/to/file.ext#chunk0'
                base_file_path = db_source.split('#')[0]
                
                # Check if this db_source belongs to the current PATTERNS being scanned
                # A simple way: if base_file_path is not in valid_sources_in_scan, 
                # but we are scanning 'all' or its prefix matches our module, we should delete it.
                # To be safe, we only delete if we are sure it's missing.
                # Since we expanded all PATTERNS into valid_sources_in_scan, 
                # any file that *would* match the pattern but is NOT in valid_sources_in_scan
                # means it was deleted or ignored.
                
                # We need to know if base_file_path falls under the current module's purview.
                # Let's check if it matches any of the glob patterns we used.
                import fnmatch
                matches_current_scope = any(fnmatch.fnmatch(base_file_path, p) for p in PATTERNS)
                
                if matches_current_scope and base_file_path not in valid_sources_in_scan:
                    logger.info(f"🗑️ Deleting obsolete DB entries for: {base_file_path}")
                    cur.execute("DELETE FROM kaos_memory WHERE source LIKE %s", (f"{base_file_path}#%",))
                    deleted_count += 1
            
            conn.commit()
            if deleted_count > 0:
                logger.info(f"✅ Cleanup complete. Deleted obsolete chunks for {deleted_count} files.")
            cur.close()
            conn.close()
        except Exception as e:
            logger.error(f"Failed to clean up deleted files: {e}")
            if conn: conn.rollback()

    logger.info(f"Ingestion complete. Total files processed: {total_files}")

if __name__ == "__main__":
    run_ingestion()
