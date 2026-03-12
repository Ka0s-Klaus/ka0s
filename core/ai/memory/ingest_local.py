import os
import glob
import psycopg2
import requests
import logging
import time
from typing import List

# Configuration
# Localhost because we will port-forward
POSTGRES_HOST = "localhost"
POSTGRES_PORT = "5433" 
POSTGRES_DB = "ka0s_memory"
POSTGRES_USER = "ka0s_ai"
POSTGRES_PASSWORD = "change_me_in_production_vector_db_123!" # From secret.yaml

OLLAMA_HOST = "localhost"
OLLAMA_PORT = "11435"
EMBEDDING_MODEL = "nomic-embed-text" # Ensure this model is pulled in Ollama!

# Paths relative to where the script is run (project root)
RULES_PATH = ".trae/rules/**/*.md"
SKILLS_PATH = ".trae/skills/**/*.md"
DOCS_PATH = "core/docs/**/*.md"

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def get_db_connection():
    try:
        conn = psycopg2.connect(
            host=POSTGRES_HOST,
            port=POSTGRES_PORT,
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

def ensure_model():
    url = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/pull"
    payload = {"name": EMBEDDING_MODEL}
    try:
        logger.info(f"Ensuring model {EMBEDDING_MODEL} exists...")
        response = requests.post(url, json=payload, stream=True)
        for line in response.iter_lines():
            if line:
                logger.debug(line)
        logger.info(f"Model {EMBEDDING_MODEL} ready.")
    except Exception as e:
        logger.error(f"Failed to pull model: {e}")

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
    ensure_model()
    init_db()
    
    conn = get_db_connection()
    if conn:
        cur = conn.cursor()
        cur.execute("TRUNCATE TABLE kaos_memory;")
        conn.commit()
        conn.close()
        logger.info("Memory table truncated for fresh ingestion.")

    rule_files = glob.glob(RULES_PATH, recursive=True)
    logger.info(f"Found {len(rule_files)} rule files.")
    for f in rule_files:
        process_file(f)

    skill_files = glob.glob(SKILLS_PATH, recursive=True)
    logger.info(f"Found {len(skill_files)} skill files.")
    for f in skill_files:
        process_file(f)

    doc_files = glob.glob(DOCS_PATH, recursive=True)
    logger.info(f"Found {len(doc_files)} doc files.")
    for f in doc_files:
        process_file(f)
        
    logger.info("Ingestion complete.")

if __name__ == "__main__":
    run_ingestion()
