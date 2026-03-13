import os
import sys  # Added sys for exit codes
import glob
import psycopg2
import requests
import logging
import hashlib
from typing import List

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

import argparse

# Define patterns per module
MODULES = {
    "docs": [
        "core/docs/**/*.md",
        "README.md"
    ],
    "skills": [
        ".trae/skills/**/SKILL.md",
        ".trae/rules/**/*.md"
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
    "audit": [
        "audit/**/*.md",
        "audit/**/*.json",
        "audit/**/*.log"
    ],
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
    args = parser.parse_args()

    PATTERNS = get_patterns(args.module)
    print(f"🚀 Starting ingestion for module: {args.module}")
    print(f"📂 Patterns: {PATTERNS}")
    
else:
    # Default for imports or testing
    PATTERNS = []

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

import hashlib

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
    Checks if target DB exists. If not, connects to 'postgres' and creates it.
    """
    conn = get_db_connection()
    if conn:
        conn.close()
        return # DB exists and is accessible

    logger.warning(f"Database {POSTGRES_DB} does not exist. Attempting to create it...")
    
    # Connect to default 'postgres' DB to issue CREATE DATABASE
    try:
        sys_conn = psycopg2.connect(
            host=POSTGRES_HOST,
            port=POSTGRES_PORT,
            database="postgres",
            user=POSTGRES_USER,
            password=POSTGRES_PASSWORD
        )
        sys_conn.autocommit = True
        cur = sys_conn.cursor()
        cur.execute(f"CREATE DATABASE {POSTGRES_DB};")
        cur.close()
        sys_conn.close()
        logger.info(f"Database {POSTGRES_DB} created successfully.")
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
                embedding vector(768),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            CREATE INDEX IF NOT EXISTS idx_kaos_memory_source ON kaos_memory(source);
            CREATE INDEX IF NOT EXISTS idx_kaos_memory_hash ON kaos_memory(content_hash);
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


def generate_embedding(text: str) -> List[float]:
    url = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/embeddings"
    payload = {
        "model": EMBEDDING_MODEL,
        "prompt": text
    }
    
    try:
        response = requests.post(url, json=payload, timeout=30)
        response.raise_for_status()
        return response.json()["embedding"]
    except Exception as e:
        logger.error(f"Embedding generation failed: {e}")
        return []


def calculate_hash(content: str) -> str:
    return hashlib.md5(content.encode('utf-8')).hexdigest()

def process_file(file_path: str):
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
    ensure_model()
    init_db()
    
    # REMOVED: TRUNCATE TABLE kaos_memory; 
    # We now use incremental updates based on hash
    
    total_files = 0
    for pattern in PATTERNS:
        files = glob.glob(pattern, recursive=True)
        logger.info(f"Found {len(files)} files for pattern: {pattern}")
        for f in files:
            # Skip hidden files or generated artifacts if necessary
            if "node_modules" in f or "__pycache__" in f:
                continue
            process_file(f)
            total_files += 1
            
    logger.info(f"Ingestion complete. Total files processed: {total_files}")

if __name__ == "__main__":
    run_ingestion()
