import psycopg2
from typing import List
from .config import DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME
import logging

logger = logging.getLogger("rag_itops.search")

def search_context(query_embedding: List[float], limit: int = 5) -> List[str]:
    """
    Busca fragmentos relevantes en PostgreSQL (pgvector) usando cosine similarity.
    """
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASS,
            dbname=DB_NAME
        )
        cur = conn.cursor()
        
        # Búsqueda por similitud (<-> es distancia L2, <=> es cosine similarity en pgvector)
        # Asumiendo que usamos <=> para cosine similarity como dicta el estándar de RAG
        cur.execute(
            "SELECT content FROM kaos_memory ORDER BY embedding <=> %s::vector LIMIT %s;", 
            (query_embedding, limit)
        )
        
        docs = [row[0] for row in cur.fetchall()]
        cur.close()
        conn.close()
        
        logger.info(f"Se encontraron {len(docs)} fragmentos de contexto.")
        return docs
    except Exception as e:
        logger.error(f"Error buscando contexto en PostgreSQL: {e}")
        return []
