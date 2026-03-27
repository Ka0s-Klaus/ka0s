import os
import sys
import logging
import requests
import subprocess
from typing import Dict, Any

# Configuración del Logger
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("agent-inference")

OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://localhost:11434")
# El modelo recomendado para tool calling suele ser llama3.1 o qwen2.5
MODEL = os.getenv("OLLAMA_MODEL", "llama3.1")

# 1. Definición de Herramientas (MCP-like Specification)
# Estas son las "manos" del agente, que le indicamos al modelo que puede usar.
TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "get_kubernetes_pods",
            "description": "Ejecuta 'kubectl get pods' en un namespace específico para ver el estado de los servicios. Usar para investigar incidentes o CrashLoopBackOff.",
            "parameters": {
                "type": "object",
                "properties": {
                    "namespace": {
                        "type": "string",
                        "description": "El namespace de Kubernetes (ej. 'default', 'kube-system'). Si no se especifica, usa 'default'."
                    }
                },
                "required": ["namespace"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "github_cli_read",
            "description": "Ejecuta comandos de lectura de GitHub CLI ('gh issue list', 'gh pr list') para obtener el contexto de incidentes o tareas pendientes.",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "description": "El subcomando de gh (ej. 'issue list --state open', 'pr status'). NO incluir 'gh' al principio."
                    }
                },
                "required": ["command"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_github_action_logs",
            "description": "Descarga y muestra los logs de un workflow fallido de GitHub Actions dado su Run ID. Usar esto cuando se pide diagnosticar una Issue que menciona un Run ID.",
            "parameters": {
                "type": "object",
                "properties": {
                    "run_id": {
                        "type": "string",
                        "description": "El ID numérico de la ejecución del workflow (ej. '23642271681')."
                    }
                },
                "required": ["run_id"]
            }
        }
    }
]

# 2. Implementación Real de las Herramientas (Manos)
def execute_tool(name: str, args: Dict[str, Any]) -> str:
    """Ejecuta de forma segura la herramienta solicitada por el LLM."""
    logger.info(f"🛠️ Ejecutando herramienta: {name} con argumentos: {args}")
    
    try:
        if name == "get_kubernetes_pods":
            ns = args.get("namespace", "default")
            # En un entorno real, esto se ejecutaría en un runner efímero o con RBAC estricto
            cmd = ["kubectl", "get", "pods", "-n", ns]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
            if result.returncode != 0:
                return f"Error ejecutando kubectl: {result.stderr}"
            return result.stdout or "No se encontraron pods."

        elif name == "github_cli_read":
            subcmd = args.get("command", "").split()
            # Validación de seguridad básica (Evitar inyección)
            if any(unsafe in subcmd for unsafe in [";", "|", "&", ">", "<"]):
                return "Error: Comando inseguro bloqueado."
                
            cmd = ["gh"] + subcmd
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
            if result.returncode != 0:
                return f"Error ejecutando gh: {result.stderr}"
            return result.stdout or "Comando ejecutado sin salida."
            
        elif name == "get_github_action_logs":
            run_id = args.get("run_id")
            # Usamos gh cli para ver los logs de los jobs fallidos
            cmd = ["gh", "run", "view", str(run_id), "--log-failed"]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
            if result.returncode != 0:
                # Si falla, intentamos ver todos los logs resumidos
                cmd_fallback = ["gh", "run", "view", str(run_id), "--log"]
                res_fall = subprocess.run(cmd_fallback, capture_output=True, text=True, timeout=15)
                if res_fall.returncode != 0:
                     return f"Error obteniendo logs de GitHub: {res_fall.stderr}"
                # Truncamos a las últimas 100 líneas para no saturar contexto
                lines = res_fall.stdout.splitlines()[-100:]
                return "\n".join(lines)
            
            # Si tiene éxito pero el log es muy largo, nos quedamos con el final
            lines = result.stdout.splitlines()[-100:]
            return "\n".join(lines)
            
        else:
            return f"Error: Herramienta desconocida '{name}'."
            
    except subprocess.TimeoutExpired:
        return "Error: La ejecución de la herramienta excedió el tiempo límite (Timeout)."
    except Exception as e:
        return f"Error inesperado: {str(e)}"

# 3. Bucle de Razonamiento del Agente (Cerebro)
def chat_with_agent(prompt: str):
    logger.info(f"🧠 Iniciando razonamiento para: '{prompt}'")
    
    messages = [
        {
            "role": "system",
            "content": "Eres un ingeniero DevSecOps experto en Ka0s. Tu objetivo es ayudar a los usuarios respondiendo preguntas sobre la infraestructura o diagnosticando problemas. "
                       "REGLA DE ORO: SIEMPRE DEBES RESPONDER EN ESPAÑOL, sin importar el idioma de los logs o del prompt del usuario. "
                       "Usa las herramientas disponibles si necesitas buscar información en tiempo real. "
                       "Si el usuario menciona un 'Run ID' o 'Job ID' de GitHub Actions, DEBES usar la herramienta get_github_action_logs para leer los errores reales antes de responder."
        },
        {"role": "user", "content": prompt}
    ]
    
    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS,
        "stream": False
    }

    try:
        # Paso 1: Pedir al modelo que analice el prompt
        logger.info("📡 Contactando a Ollama (api/chat)...")
        response = requests.post(f"{OLLAMA_HOST}/api/chat", json=payload, timeout=60)
        response.raise_for_status()
        data = response.json()
        
        response_message = data.get("message", {})
        
        # Paso 2: Verificar si el modelo decidió usar una herramienta
        if "tool_calls" in response_message:
            tool_calls = response_message["tool_calls"]
            messages.append(response_message) # Añadir la decisión al historial
            
            for tool_call in tool_calls:
                func_name = tool_call["function"]["name"]
                func_args = tool_call["function"]["arguments"]
                
                # Ejecutar la herramienta (Manos)
                tool_result = execute_tool(func_name, func_args)
                
                # Añadir el resultado al contexto
                messages.append({
                    "role": "tool",
                    "content": tool_result,
                    "name": func_name
                })
            
            # Paso 3: Devolver los resultados al modelo para generar la respuesta final
            logger.info("📡 Devolviendo resultados de herramientas a Ollama...")
            payload["messages"] = messages
            payload.pop("tools", None) # Opcional: quitar tools para forzar la respuesta final
            
            final_response = requests.post(f"{OLLAMA_HOST}/api/chat", json=payload, timeout=60)
            final_response.raise_for_status()
            final_data = final_response.json()
            
            logger.info("✅ Respuesta final generada.")
            # Forzar escritura estándar a stdout sin buffers para que '>>' o 'tee' en bash lo capture bien
            print(final_data["message"]["content"], flush=True)
            
        else:
            # El modelo no necesitó herramientas
            logger.info("✅ El modelo respondió directamente sin usar herramientas.")
            print(response_message.get("content", ""), flush=True)

    except requests.exceptions.RequestException as e:
        logger.error(f"Error de comunicación con Ollama: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.stdout.write("Uso: python query.py 'Tu consulta aquí'\n")
        sys.stdout.flush()
        sys.exit(1)
        
    user_query = " ".join(sys.argv[1:])
    chat_with_agent(user_query)
