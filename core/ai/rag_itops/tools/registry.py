import subprocess
import logging
from typing import Dict, Any, List

logger = logging.getLogger("rag_itops.tools")

# Definición de las "Manos" del Agente (Formato compatible con Ollama/OpenAI Tool Calling)
AVAILABLE_TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "github_cli_read",
            "description": "Ejecuta comandos de lectura de GitHub CLI ('gh issue list', 'gh issue view <id>', 'gh pr list') para obtener el contexto de incidentes, issues o pull requests.",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "description": "El subcomando de gh (ej. 'issue view 5214', 'issue list --search \"error\"'). NO incluir 'gh' al principio."
                    }
                },
                "required": ["command"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_kubernetes_pods",
            "description": "Ejecuta 'kubectl get pods' en un namespace específico para ver el estado de los servicios. Usar para investigar incidentes de infraestructura.",
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
            "name": "get_github_action_logs",
            "description": "Descarga y muestra los logs de un workflow fallido de GitHub Actions dado su Run ID. Usar esto cuando se pide diagnosticar un CI/CD fallido.",
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

def execute_tool(name: str, args: Dict[str, Any]) -> str:
    """Ejecuta de forma segura la herramienta solicitada por el LLM."""
    logger.info(f"🛠️ Ejecutando herramienta: {name} con argumentos: {args}")
    
    try:
        if name == "github_cli_read":
            subcmd = args.get("command", "").split()
            # Validación de seguridad básica (Evitar inyección)
            if any(unsafe in subcmd for unsafe in [";", "|", "&", ">", "<"]):
                logger.warning("Intento de inyección de comandos bloqueado.")
                return "Error: Comando inseguro bloqueado por políticas de seguridad."
                
            cmd = ["gh"] + subcmd
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
            if result.returncode != 0:
                return f"Error ejecutando gh: {result.stderr}"
            return result.stdout or "Comando ejecutado sin salida."

        elif name == "get_kubernetes_pods":
            ns = args.get("namespace", "default")
            cmd = ["kubectl", "get", "pods", "-n", ns]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
            if result.returncode != 0:
                return f"Error ejecutando kubectl: {result.stderr}"
            return result.stdout or "No se encontraron pods."
            
        elif name == "get_github_action_logs":
            run_id = args.get("run_id")
            cmd = ["gh", "run", "view", str(run_id), "--log-failed"]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
            if result.returncode != 0:
                # Fallback: intentar ver todos los logs resumidos
                cmd_fallback = ["gh", "run", "view", str(run_id), "--log"]
                res_fall = subprocess.run(cmd_fallback, capture_output=True, text=True, timeout=15)
                if res_fall.returncode != 0:
                     return f"Error obteniendo logs de GitHub: {res_fall.stderr}"
                lines = res_fall.stdout.splitlines()[-100:]
                return "\n".join(lines)
            
            lines = result.stdout.splitlines()[-100:]
            return "\n".join(lines)
            
        else:
            return f"Error: Herramienta desconocida '{name}'."
            
    except subprocess.TimeoutExpired:
        return "Error: La ejecución de la herramienta excedió el tiempo límite (Timeout)."
    except Exception as e:
        return f"Error inesperado al ejecutar la herramienta: {str(e)}"
