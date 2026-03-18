import os
import argparse
import psycopg2
import requests
import logging
import json
import re
from pathlib import Path
from typing import List, Dict, Any

# Configuration
POSTGRES_HOST = os.getenv("POSTGRES_HOST") or "localhost"
POSTGRES_PORT = os.getenv("POSTGRES_PORT") or "5433"
POSTGRES_DB = os.getenv("POSTGRES_DB") or "ka0s_memory"
POSTGRES_USER = os.getenv("POSTGRES_USER") or "ka0s_ai"
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD") or "change_me_in_production_vector_db_123!"

OLLAMA_HOST = os.getenv("OLLAMA_HOST") or "localhost"
OLLAMA_PORT = os.getenv("OLLAMA_PORT") or "11435"
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL") or "nomic-embed-text"
GENERATION_MODEL = os.getenv("GENERATION_MODEL") or "deepseek-r1:8b" # Or llama3:latest

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

def search_context(query_embedding: List[float], limit: int = 5) -> List[Dict[str, Any]]:
    conn = get_db_connection()
    if not conn:
        return []
    
    try:
        cur = conn.cursor()
        # Cosine similarity search using pgvector (<=> is distance, so we order by it ASC)
        cur.execute("""
            SELECT source, content, 1 - (embedding <=> %s::vector) as similarity
            FROM kaos_memory
            WHERE 1 - (embedding <=> %s::vector) > 0.35  -- Filter low relevance at DB level
            ORDER BY embedding <=> %s::vector
            LIMIT %s;
        """, (json.dumps(query_embedding), json.dumps(query_embedding), json.dumps(query_embedding), limit))
        
        results = [{"source": row[0], "content": row[1], "similarity": row[2]} for row in cur.fetchall()]
        cur.close()
        conn.close()
        return results
    except Exception as e:
        logger.error(f"Search failed: {e}")
        return []

def generate_answer(query: str, context: List[Dict[str, Any]]) -> str:
    # 1. Check for similarity threshold (Safety Net)
    # If the best context has low similarity, it's likely irrelevant.
    # We use a loose threshold (0.4) because cosine similarity distributions vary.
    if not context or context[0]['similarity'] < 0.4:
        logger.warning(f"Low confidence context found. Top score: {context[0]['similarity'] if context else 0}")
        return "Lo siento, no dispongo de suficiente información en mi base de conocimientos actual para responder a tu pregunta con precisión. 🙇‍♂️\n\nPrueba a reformularla o consulta la documentación oficial en `core/docs`."

    url = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/generate"
    
    context_str = "\n\n".join([f"--- Source: {r['source']} (Score: {r['similarity']:.2f}) ---\n{r['content']}" for r in context])
    
    prompt = f"""
    You are **Ka0s Agent**, the expert AI engineer for the Ka0s Framework.
    
    ### 🛡️ Core Directive: HONESTY & ACCURACY
    You must answer the User Question based **ONLY** on the provided Context.
    
    ### 🚫 Strict Prohibitions
    - **DO NOT INVENT** information, commands, or file paths not present in the Context.
    - **DO NOT HALLUCINATE** features or services.
    - If the Context does not contain the answer, you **MUST** reply exactly:
      "... disculpa pero no dispongo de suficiente información como para contestar tu pregunta. Siento no haberte sido de ayuda."
    
    ### 📝 Style Guidelines
    - **Tone**: Professional, Technical, Helpful.
    - **Format**: Use Markdown (bold for key terms, code blocks for commands).
    - **Language**: Answer in the SAME language as the User Question (Español/English).
    
    ### 🧠 Context (Knowledge Base)
    {context_str}
    
    ### 👤 User Question
    {query}
    
    ### 🤖 Your Answer:
    """
    
    payload = {
        "model": GENERATION_MODEL,
        "prompt": prompt,
        "stream": False,
        "options": {
            "temperature": 0.1,  # Low temp for factual answers
            "top_k": 20          # Restricted vocabulary for precision
        }
    }
    
    try:
        response = requests.post(url, json=payload, timeout=600)
        response.raise_for_status()
        return response.json().get("response", "Error: Empty response from LLM")
    except Exception as e:
        logger.error(f"Generation failed: {e}")
        return f"Error generating answer: {e}"


def find_repo_files(query: str, repo_root: str, max_hits: int = 40) -> List[str]:
    tokens = [t for t in re.split(r"\W+", query.lower()) if len(t) >= 4]
    if not tokens:
        return []
    root = Path(repo_root)

    core_services = root / "core" / "b2b" / "core-services"
    if core_services.exists():
        for t in tokens:
            svc_dir = core_services / t
            if svc_dir.exists() and svc_dir.is_dir():
                files = [str(p.relative_to(root)).replace("\\", "/") for p in svc_dir.rglob("*") if p.is_file()]
                files.sort()
                return files[:max_hits]

    ignore_parts = {
        ".git",
        ".venv",
        "node_modules",
        "__pycache__",
        ".pytest_cache",
        "dist",
        "build",
    }
    stopwords = {
        "puedes",
        "podrias",
        "podrías",
        "mostrar",
        "mostrarme",
        "ficheros",
        "archivo",
        "archivos",
        "despliegue",
        "deployment",
        "service",
        "services",
        "yaml",
        "yml",
    }
    tokens = [t for t in tokens if t not in stopwords]
    if not tokens:
        return []

    candidates: List[tuple[int, str]] = []
    for p in root.rglob("*"):
        if not p.is_file():
            continue
        rel = p.relative_to(root)
        parts = set(rel.parts)
        if parts & ignore_parts:
            continue
        rel_str = str(rel).lower().replace("\\", "/")
        hits = sum(1 for tok in tokens if tok in rel_str)
        if hits:
            candidates.append((hits, rel_str))
            if len(candidates) >= 500:
                break

    candidates.sort(key=lambda x: (-x[0], x[1]))
    return [p for _, p in candidates[:max_hits]]

def main():
    parser = argparse.ArgumentParser(description="Ka0s Agent Inference CLI")
    parser.add_argument("query", type=str, help="The question to ask the agent")
    args = parser.parse_args()
    
    query = args.query
    logger.info(f"Processing query: {query}")
    
    # 1. Embed Query
    query_embedding = generate_embedding(query)
    if not query_embedding:
        repo_root = os.getenv("GITHUB_WORKSPACE") or os.getcwd()
        matches = find_repo_files(query, repo_root=repo_root)
        if matches:
            print("Ficheros relevantes encontrados en el repositorio:\n" + "\n".join([f"- {m}" for m in matches]))
            return
        print("Error: Could not embed query.")
        return

    # 2. Retrieve Context
    context = search_context(query_embedding)
    logger.info(f"Retrieved {len(context)} relevant context chunks.")

    if not context or context[0]["similarity"] < 0.4:
        repo_root = os.getenv("GITHUB_WORKSPACE") or os.getcwd()
        matches = find_repo_files(query, repo_root=repo_root)
        if matches:
            print("Ficheros relevantes encontrados en el repositorio:\n" + "\n".join([f"- {m}" for m in matches]))
            return
    
    # 3. Generate Answer
    answer = generate_answer(query, context)
    
    # Output solely the answer for the caller to capture
    print(answer)

if __name__ == "__main__":
    main()
