import os
import argparse
import psycopg2
import requests
import logging
import json
from typing import List, Dict, Any, Optional

# Configuration
# Support both DB_ and POSTGRES_ prefixes, prioritizing DB_ (same convention as ingest_local.py)
POSTGRES_HOST = os.getenv("DB_HOST") or os.getenv("POSTGRES_HOST") or "localhost"
POSTGRES_PORT = os.getenv("DB_PORT") or os.getenv("POSTGRES_PORT") or "5433"
POSTGRES_DB = os.getenv("DB_NAME") or os.getenv("POSTGRES_DB") or "ka0s_memory"
POSTGRES_USER = os.getenv("DB_USER") or os.getenv("POSTGRES_USER") or "ka0s_ai"
POSTGRES_PASSWORD = os.getenv("DB_PASSWORD") or os.getenv("POSTGRES_PASSWORD")

OLLAMA_HOST = os.getenv("OLLAMA_HOST") or "localhost"
OLLAMA_PORT = os.getenv("OLLAMA_PORT") or "11435"
OLLAMA_EMBED_HOST = os.getenv("OLLAMA_EMBED_HOST") or OLLAMA_HOST
OLLAMA_EMBED_PORT = os.getenv("OLLAMA_EMBED_PORT") or OLLAMA_PORT
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL") or "nomic-embed-text"
GENERATION_MODEL = os.getenv("GENERATION_MODEL") or "deepseek-r1:8b" # Or llama3:latest

MIN_SIMILARITY_DB = float(os.getenv("MIN_SIMILARITY_DB") or "0.35")
MIN_SIMILARITY_ANSWER = float(os.getenv("MIN_SIMILARITY_ANSWER") or "0.40")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def get_db_connection():
    try:
        if not POSTGRES_PASSWORD:
            raise RuntimeError("POSTGRES_PASSWORD/DB_PASSWORD no está configurado")
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
    url = f"http://{OLLAMA_EMBED_HOST}:{OLLAMA_EMBED_PORT}/api/embeddings"
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


def _table_exists(cur, table: str) -> bool:
    cur.execute("SELECT to_regclass(%s);", (f"public.{table}",))
    return cur.fetchone()[0] is not None


def _search_kaos_memory(cur, query_embedding: List[float], limit: int) -> List[Dict[str, Any]]:
    cur.execute(
        """
        SELECT source, content, 1 - (embedding <=> %s::vector) as similarity
        FROM kaos_memory
        WHERE vector_dims(embedding) = %s
          AND 1 - (embedding <=> %s::vector) > %s
        ORDER BY embedding <=> %s::vector
        LIMIT %s;
        """,
        (
            json.dumps(query_embedding),
            len(query_embedding),
            json.dumps(query_embedding),
            MIN_SIMILARITY_DB,
            json.dumps(query_embedding),
            limit,
        ),
    )
    return [
        {"source": row[0], "content": row[1], "similarity": float(row[2]), "store": "kaos_memory"}
        for row in cur.fetchall()
    ]


def _search_kaos_vectors(cur, query_embedding: List[float], limit: int) -> List[Dict[str, Any]]:
    cur.execute(
        """
        SELECT
          source,
          record_id,
          chunk_id,
          content,
          1 - (embedding <=> %s::vector) as similarity
        FROM kaos_vectors
        WHERE embedding_model = %s
          AND embedding_dim = %s
          AND 1 - (embedding <=> %s::vector) > %s
        ORDER BY embedding <=> %s::vector
        LIMIT %s;
        """,
        (
            json.dumps(query_embedding),
            EMBEDDING_MODEL,
            len(query_embedding),
            json.dumps(query_embedding),
            MIN_SIMILARITY_DB,
            json.dumps(query_embedding),
            limit,
        ),
    )
    results: List[Dict[str, Any]] = []
    for row in cur.fetchall():
        source, record_id, chunk_id, content, sim = row
        synthetic_source = f"{source}:{record_id}#chunk{chunk_id}"
        results.append(
            {
                "source": synthetic_source,
                "content": content,
                "similarity": float(sim),
                "store": "kaos_vectors",
            }
        )
    return results

def search_context(query_embedding: List[float], limit: int = 5) -> List[Dict[str, Any]]:
    conn = get_db_connection()
    if not conn:
        return []
    
    try:
        cur = conn.cursor()

        stores: List[List[Dict[str, Any]]] = []
        if _table_exists(cur, "kaos_memory"):
            stores.append(_search_kaos_memory(cur, query_embedding, limit))
        if _table_exists(cur, "kaos_vectors"):
            stores.append(_search_kaos_vectors(cur, query_embedding, limit))

        results: List[Dict[str, Any]] = []
        for chunk_list in stores:
            results.extend(chunk_list)
        results.sort(key=lambda r: r.get("similarity", 0), reverse=True)
        results = results[:limit]

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
    if not context or context[0]['similarity'] < MIN_SIMILARITY_ANSWER:
        logger.warning(f"Low confidence context found. Top score: {context[0]['similarity'] if context else 0}")
        return "... disculpa pero no dispongo de suficiente información como para contestar tu pregunta. Siento no haberte sido de ayuda."

    url = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/generate"
    
    context_str = "\n\n".join(
        [
            f"--- Source: {r['source']} (Store: {r.get('store','?')}, Score: {r['similarity']:.2f}) ---\n{r['content']}"
            for r in context
        ]
    )
    
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

def main():
    parser = argparse.ArgumentParser(description="Ka0s Agent Inference CLI")
    parser.add_argument("query", type=str, help="The question to ask the agent")
    args = parser.parse_args()
    
    query = args.query
    logger.info(f"Processing query: {query}")
    
    # 1. Embed Query
    query_embedding = generate_embedding(query)
    if not query_embedding:
        print("Error: Could not embed query.")
        return

    # 2. Retrieve Context
    context = search_context(query_embedding)
    logger.info(f"Retrieved {len(context)} relevant context chunks.")
    
    # 3. Generate Answer
    answer = generate_answer(query, context)
    
    # Output solely the answer for the caller to capture
    print(answer)

if __name__ == "__main__":
    main()
