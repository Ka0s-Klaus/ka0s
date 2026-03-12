import os
import glob
import psycopg2
import requests
import logging
import time
from typing import List

# Configuration
# Defaults for local development (port-forwarding)
# Can be overridden by environment variables for CI/CD (K8s Service DNS)
POSTGRES_HOST = os.getenv("POSTGRES_HOST") or "localhost"
POSTGRES_PORT = os.getenv("POSTGRES_PORT") or "5433"
POSTGRES_DB = os.getenv("POSTGRES_DB") or "ka0s_memory"
POSTGRES_USER = os.getenv("POSTGRES_USER") or "ka0s_ai"
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD") or "change_me_in_production_vector_db_123!"

OLLAMA_HOST = os.getenv("OLLAMA_HOST") or "localhost"
OLLAMA_PORT = os.getenv("OLLAMA_PORT") or "11435"
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL") or "nomic-embed-text"

# Paths relative to where the script is run (project root)
# Ingestion Strategy: Full Knowledge Base (Code + Docs + Config)
PATTERNS = [
    ".trae/rules/**/*.md",       # Reglas y Estándares
    ".trae/skills/**/*.md",      # Habilidades del Agente
    "core/**/*.md",              # Documentación Técnica
    "core/**/*.yaml",            # Infraestructura (K8s, Helm)
    "core/**/*.yml",             # Workflows y Config
    "core/**/*.json",            # Schemas y Configuraciones
    "core/**/*.sql",             # Definiciones de Base de Datos
    "core/**/*.py",              # Lógica de Negocio y Scripts
    "core/**/*.sh",              # Scripts de Operaciones
    ".github/workflows/*.yaml",  # CI/CD Pipelines
    ".github/ISSUE_TEMPLATE/*.yml" # Plantillas de Procesos
]

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
