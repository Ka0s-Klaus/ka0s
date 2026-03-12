import os
import glob
import psycopg2
import requests
import logging
import time
from typing import List

# Configuration
POSTGRES_HOST = os.getenv("POSTGRES_HOST", "postgresql.postgresql.svc.cluster.local")
POSTGRES_DB = os.getenv("POSTGRES_DB", "ka0s_db")
POSTGRES_USER = os.getenv("POSTGRES_USER", "ka0s_admin")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
OLLAMA_HOST = os.getenv("OLLAMA_HOST", "ollama.ollama.svc.cluster.local")
OLLAMA_PORT = os.getenv("OLLAMA_PORT", "11434")
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "nomic-embed-text")

# Paths
RULES_PATH = "/ka0s/.trae/rules/**/*.md"
SKILLS_PATH = "/ka0s/.trae/skills/**/*.md"
DOCS_PATH = "/ka0s/core/docs/**/*.md"

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def get_db_connection():
    try:
        conn = psycopg2.connect(
            host=POSTGRES_HOST,
            database=POSTGRES_DB,
            user=POSTGRES_USER,
            password=POSTGRES_PASSWORD
        )
        return conn
    except Exception as e:
        logger.error(f"Failed to connect to DB: {e}")
        return None


def init_db():
    conn = get_db_connection()
    if not conn:
        return
    
    cur = conn.cursor()
    try:
        # Enable vector extension
        cur.execute("CREATE EXTENSION IF NOT EXISTS vector;")
        
        # Create memory table
        cur.execute("""
            CREATE TABLE IF NOT EXISTS kaos_memory (
                id SERIAL PRIMARY KEY,
                source TEXT NOT NULL,
                content TEXT NOT NULL,
                embedding vector(768),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)
        
        conn.commit()
        logger.info("Database initialized successfully.")
    except Exception as e:
        logger.error(f"DB Initialization error: {e}")
        conn.rollback()
    finally:
        cur.close()
        conn.close()


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
        logger.error(f"Embedding generation failed for text segment: {e}")
        return []


def process_file(file_path: str):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        chunks = [content[i:i+2000] for i in range(0, len(content), 2000)]
        
        conn = get_db_connection()
        if not conn:
            return

        cur = conn.cursor()
        
        for i, chunk in enumerate(chunks):
            if not chunk.strip():
                continue
                
            embedding = generate_embedding(chunk)
            if not embedding:
                continue
            
            cur.execute(
                "INSERT INTO kaos_memory (source, content, embedding) VALUES (%s, %s, %s)",
                (f"{file_path}#chunk{i}", chunk, embedding)
            )
        
        conn.commit()
        cur.close()
        conn.close()
        logger.info(f"Processed file: {file_path}")
        
    except Exception as e:
        logger.error(f"Error processing file {file_path}: {e}")


def run_ingestion():
    # 1. Initialize DB
    init_db()
    
    # 2. Clear old data? Or handle upserts?
    # For MVP: Clear all to ensure freshness (Warning: expensive on large datasets)
    conn = get_db_connection()
    if conn:
        cur = conn.cursor()
        cur.execute("TRUNCATE TABLE kaos_memory;")
        conn.commit()
        conn.close()
        logger.info("Memory table truncated for fresh ingestion.")

    # 3. Ingest Rules
    rule_files = glob.glob(RULES_PATH, recursive=True)
    logger.info(f"Found {len(rule_files)} rule files.")
    for f in rule_files:
        process_file(f)

    # 4. Ingest Skills
    skill_files = glob.glob(SKILLS_PATH, recursive=True)
    logger.info(f"Found {len(skill_files)} skill files.")
    for f in skill_files:
        process_file(f)

    # 5. Ingest Docs
    doc_files = glob.glob(DOCS_PATH, recursive=True)
    logger.info(f"Found {len(doc_files)} doc files.")
    for f in doc_files:
        process_file(f)

    logger.info("Ingestion complete.")


if __name__ == "__main__":
    # Wait for DB and Ollama to be ready (naive wait)
    time.sleep(10)
    run_ingestion()
