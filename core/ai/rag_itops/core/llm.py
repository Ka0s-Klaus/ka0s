import logging
import re
from typing import List

import requests

from .config import EMBEDDING_MODEL, LLM_MODEL, OLLAMA_HOST
from ..roles import AVAILABLE_ROLES, get_role_prompt
from ..tools.registry import AVAILABLE_TOOLS, execute_tool

logger = logging.getLogger("rag_itops.llm")

_EN_MARKERS = {
    "the",
    "and",
    "or",
    "is",
    "are",
    "was",
    "were",
    "this",
    "that",
    "these",
    "those",
    "here",
    "some",
    "key",
    "points",
    "possible",
    "reasons",
    "could",
    "should",
    "to",
    "of",
    "in",
    "for",
    "with",
    "when",
    "while",
    "check",
    "verify",
    "workflow",
    "logs",
    "issue",
    "error",
    "fails",
    "failure",
}

_ES_MARKERS = {
    "el",
    "la",
    "los",
    "las",
    "y",
    "o",
    "es",
    "son",
    "fue",
    "eran",
    "esto",
    "esta",
    "estas",
    "estos",
    "aqui",
    "aquí",
    "algunos",
    "puntos",
    "posibles",
    "razones",
    "podria",
    "podría",
    "deberia",
    "debería",
    "para",
    "de",
    "en",
    "con",
    "cuando",
    "mientras",
    "comprobar",
    "verificar",
    "flujo",
    "logs",
    "issue",
    "error",
    "fallo",
    "fallos",
}


def _tokenize_lang(text: str) -> List[str]:
    pattern = r"[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+"
    return re.findall(pattern, (text or "").lower())


def _looks_english(text: str) -> bool:
    lowered = (text or "").lower()
    if "this is a log" in lowered or "here are some key points" in lowered:
        return True

    tokens = _tokenize_lang(text)
    if not tokens:
        return False

    en = sum(1 for t in tokens if t in _EN_MARKERS)
    es = sum(1 for t in tokens if t in _ES_MARKERS)

    return en >= 6 and en > es * 2


def _rewrite_to_spanish(text: str, system_prompt: str) -> str:
    user_prompt = (
        "Reescribe el texto en español manteniendo el significado y la estructura. "
        "No traduzcas nombres propios, modelos, endpoints, comandos ni URLs. "
        "Si hay bloques delimitados por ``` o secciones de logs, conserva su contenido literal. "
        "Devuelve únicamente el texto final reescrito.\n\n"
        f"TEXTO:\n{text}"
    )

    response = requests.post(
        f"{OLLAMA_HOST}/api/chat",
        json={
            "model": LLM_MODEL,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            "stream": False,
            "options": {"temperature": 0.0},
        },
        timeout=None,
    )
    response.raise_for_status()
    return response.json().get("message", {}).get("content", "").strip() or text


def _ensure_spanish(text: str, system_prompt: str) -> str:
    if not text:
        return text
    if not _looks_english(text):
        return text
    try:
        rewritten = _rewrite_to_spanish(text, system_prompt)
        return rewritten
    except Exception:
        return text


def embed_query(query: str) -> List[float]:
    """Genera el vector embedding para la pregunta usando nomic-embed-text."""
    logger.info(f"Generando embedding para la query con {EMBEDDING_MODEL}...")
    try:
        response = requests.post(
            f"{OLLAMA_HOST}/api/embeddings",
            json={"model": EMBEDDING_MODEL, "prompt": query},
            timeout=None  # Espera indefinida para evitar fallos por lentitud
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
        logger.info("Detectando rol para la pregunta...")
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
            timeout=None  # Espera indefinida
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
            timeout=None  # Espera indefinida
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
                timeout=None  # Espera indefinida
            )
            final_response.raise_for_status()
            content = final_response.json().get("message", {}).get(
                "content", "Error al generar la respuesta final."
            )
            return _ensure_spanish(content, system_prompt)
            
        else:
            # El modelo no necesitó herramientas
            logger.info("El LLM generó la respuesta directamente sin herramientas.")
            return _ensure_spanish(response_message.get("content", "Respuesta vacía."), system_prompt)

    except Exception as e:
        logger.error(f"Error generando respuesta: {e}")
        return f"⚠️ Error interno al contactar con el LLM: {str(e)}"
