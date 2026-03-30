import requests
import logging
import sys
import os
from typing import List

# Añadir el directorio padre al sys.path para importaciones
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from core.config import OLLAMA_HOST, LLM_MODEL, EMBEDDING_MODEL
from roles import AVAILABLE_ROLES, get_role_prompt
from tools.registry import AVAILABLE_TOOLS, execute_tool

logger = logging.getLogger("rag_itops.llm")

def embed_query(query: str) -> List[float]:
    """Genera el vector embedding para la pregunta usando nomic-embed-text."""
    logger.info(f"Generando embedding para la query con {EMBEDDING_MODEL}...")
    try:
        response = requests.post(
            f"{OLLAMA_HOST}/api/embeddings",
            json={"model": EMBEDDING_MODEL, "prompt": query},
            timeout=600  # Aumentado para tolerar arranques lentos
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
            timeout=600  # Aumentado para tolerar arranques lentos (cold starts)
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
    Genera la respuesta final usando el system prompt del rol detectado, el contexto RAG,
    y permite al modelo ejecutar herramientas (Tool Calling) antes de responder.
    """
    system_prompt = get_role_prompt(role)
    
    context_str = "\n\n---\n\n".join(context) if context else "No se encontró información en la base de datos."
    
    final_prompt = f"""CONTEXTO RECUPERADO DE LA BASE DE DATOS DOCUMENTAL:
{context_str}

INSTRUCCIONES ADICIONALES PARA EL ROL:
Si la pregunta incluye una URL a una issue de GitHub o requiere comprobar el estado de un cluster,
DEBES usar las herramientas disponibles (github_cli_read, get_kubernetes_pods, etc.) para obtener el contexto real ANTES de dar tu respuesta final.

PREGUNTA DEL USUARIO:
{query}

Responde a la pregunta basándote en el contexto recuperado y en el resultado de las herramientas que decidas ejecutar."""

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": final_prompt}
    ]
    
    try:
        logger.info(f"Iniciando ciclo de razonamiento (RAG + Tools) con rol {role}...")
        
        # Primera llamada al LLM (puede devolver una respuesta o decidir usar una herramienta)
        response = requests.post(
            f"{OLLAMA_HOST}/api/chat",
            json={
                "model": LLM_MODEL,
                "messages": messages,
                "tools": AVAILABLE_TOOLS,
                "stream": False,
                "options": {
                    "temperature": 0.2
                }
            },
            timeout=600
        )
        response.raise_for_status()
        data = response.json()
        response_message = data.get("message", {})
        
        # Bucle de Tool Calling
        if "tool_calls" in response_message:
            tool_calls = response_message["tool_calls"]
            logger.info(f"El LLM ha decidido usar {len(tool_calls)} herramientas.")
            
            # Añadimos la intención del modelo al historial
            messages.append(response_message)
            
            for tool_call in tool_calls:
                func_name = tool_call["function"]["name"]
                func_args = tool_call["function"]["arguments"]
                
                # Ejecutar la herramienta real
                tool_result = execute_tool(func_name, func_args)
                
                # Añadir el resultado de la herramienta al contexto para el LLM
                messages.append({
                    "role": "tool",
                    "content": tool_result,
                    "name": func_name
                })
            
            # Segunda llamada al LLM con los resultados de las herramientas
            logger.info("Devolviendo resultados de herramientas al LLM para la respuesta final...")
            final_response = requests.post(
                f"{OLLAMA_HOST}/api/chat",
                json={
                    "model": LLM_MODEL,
                    "messages": messages,
                    "stream": False,
                    "options": {"temperature": 0.2}
                },
                timeout=600
            )
            final_response.raise_for_status()
            return final_response.json().get("message", {}).get("content", "Error al generar la respuesta final.")
            
        else:
            # El modelo no necesitó herramientas
            logger.info("El LLM generó la respuesta directamente sin herramientas.")
            return response_message.get("content", "Respuesta vacía.")

    except Exception as e:
        logger.error(f"Error generando respuesta: {e}")
        return f"⚠️ Error interno al contactar con el LLM: {str(e)}"
