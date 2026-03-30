import os

# Configuración de base de datos
DB_HOST = os.getenv("PG_HOST", "localhost")
DB_PORT = os.getenv("PG_PORT", "5433")
DB_USER = os.getenv("PG_USER", "ka0s_ai")
DB_PASS = os.getenv("PG_PASSWORD", "change_me_in_production_vector_db_123!")
DB_NAME = os.getenv("PG_DB", "ka0s_memory")
DB_DSN = f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# Configuración de Ollama
OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://localhost")
OLLAMA_PORT = os.getenv("OLLAMA_PORT", "11434")

if not OLLAMA_HOST.startswith("http"):
    OLLAMA_HOST = f"http://{OLLAMA_HOST}"

# Asegurar que el puerto se incluya si no está ya en el host
if f":{OLLAMA_PORT}" not in OLLAMA_HOST:
    OLLAMA_HOST = f"{OLLAMA_HOST}:{OLLAMA_PORT}"

LLM_MODEL = os.getenv("GENERATION_MODEL", os.getenv("OLLAMA_MODEL", "llama3.1:8b"))
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", os.getenv("OLLAMA_EMBEDDING_MODEL", "nomic-embed-text"))
