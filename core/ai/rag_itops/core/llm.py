import requests
import logging
from typing import List
from .config import OLLAMA_HOST, LLM_MODEL, EMBEDDING_MODEL
from ..roles import AVAILABLE_ROLES, get_role_prompt

logger = logging.getLogger("rag_itops.llm")

def embed_query(query: str) -> List[float]:
    """Genera el vector embedding para la pregunta usando nomic-embed-text."""
    logger.info(f"Generando embedding para la query con {EMBEDDING_MODEL}...")
    try:
        response = requests.post(
            f"{OLLAMA_HOST}/api/embeddings",
            json={"model": EMBEDDING_MODEL, "prompt": query},
            timeout=30
        )
        response.raise_for_status()
        return response.json().get("embedding", [])
    except Exception as e:
        logger.error(f"Error generando embedding: {e}")
        return []

def detectar_rol(query: str) -> str:
    """
    Clasifica la pregunta en uno de los roles disponibles.
    Usa temperature 0 para mayor determinismo y max_tokens bajo para rapidez.
    """
    roles_str = ", ".join(AVAILABLE_ROLES.keys())
    
    prompt = f"""Clasifica la siguiente pregunta del usuario en UNO de estos roles: {roles_str}.
    Responde ÚNICAMENTE con el nombre del rol en minúsculas. Si no encaja en ninguno, responde 'devops' por defecto.
    
    Pregunta: {query}
    Rol:"""
    
    try:
        logger.info(f"Detectando rol para la pregunta...")
        response = requests.post(
            f"{OLLAMA_HOST}/api/generate",
            json={
                "model": LLM_MODEL,
                "prompt": prompt,
                "stream": False,
                "options": {
                    "temperature": 0.0,
                    "num_predict": 10
                }
            },
            timeout=30
        )
        response.raise_for_status()
        detected_role = response.json().get("response", "").strip().lower()
        
        # Limpieza por si el LLM responde con algo extra
        for role in AVAILABLE_ROLES.keys():
            if role in detected_role:
                logger.info(f"Rol detectado automáticamente: {role}")
                return role
                
        logger.warning(f"Rol no detectado claramente ('{detected_role}'), usando 'devops' por defecto.")
        return "devops"
    except Exception as e:
        logger.error(f"Error detectando rol: {e}")
        return "devops"

def generate_answer(query: str, context: List[str], role: str) -> str:
    """
    Genera la respuesta final usando el system prompt del rol detectado y el contexto.
    """
    system_prompt = get_role_prompt(role)
    
    context_str = "\n\n---\n\n".join(context) if context else "No se encontró información en la base de datos."
    
    final_prompt = f"""CONTEXTO RECUPERADO DE LA BASE DE DATOS:
{context_str}

PREGUNTA DEL USUARIO:
{query}

Responde a la pregunta basándote estrictamente en el contexto recuperado y siguiendo las reglas de tu rol."""

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": final_prompt}
    ]
    
    try:
        logger.info(f"Generando respuesta con rol {role}...")
        response = requests.post(
            f"{OLLAMA_HOST}/api/chat",
            json={
                "model": LLM_MODEL,
                "messages": messages,
                "stream": False,
                "options": {
                    "temperature": 0.2
                }
            },
            timeout=120
        )
        response.raise_for_status()
        return response.json().get("message", {}).get("content", "Error al extraer el contenido del mensaje.")
    except Exception as e:
        logger.error(f"Error generando respuesta: {e}")
        return f"⚠️ Error interno al contactar con el LLM: {str(e)}"
