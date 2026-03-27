import logging
from mcp.server.fastmcp import FastMCP
import subprocess

# Configuración del Logger
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("mcp-server")

# Inicializar FastMCP
mcp = FastMCP("Ka0s DevSecOps Agent")

@mcp.tool()
def get_kubernetes_pods(namespace: str = "default") -> str:
    """Ejecuta 'kubectl get pods' en un namespace específico para ver el estado de los servicios. Usar para investigar incidentes o CrashLoopBackOff."""
    logger.info(f"🛠️ Ejecutando herramienta: get_kubernetes_pods con namespace: {namespace}")
    try:
        cmd = ["kubectl", "get", "pods", "-n", namespace]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
        if result.returncode != 0:
            return f"Error ejecutando kubectl: {result.stderr}"
        return result.stdout or "No se encontraron pods."
    except subprocess.TimeoutExpired:
        return "Error: La ejecución de la herramienta excedió el tiempo límite (Timeout)."
    except Exception as e:
        return f"Error inesperado: {str(e)}"

@mcp.tool()
def github_cli_read(command: str) -> str:
    """Ejecuta comandos de lectura de GitHub CLI ('gh issue list', 'gh pr list') para obtener el contexto de incidentes o tareas pendientes."""
    logger.info(f"🛠️ Ejecutando herramienta: github_cli_read con comando: {command}")
    try:
        subcmd = command.split()
        # Validación de seguridad básica (Evitar inyección)
        if any(unsafe in subcmd for unsafe in [";", "|", "&", ">", "<"]):
            return "Error: Comando inseguro bloqueado."
            
        cmd = ["gh"] + subcmd
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
        if result.returncode != 0:
            return f"Error ejecutando gh: {result.stderr}"
        return result.stdout or "Comando ejecutado sin salida."
    except subprocess.TimeoutExpired:
        return "Error: La ejecución de la herramienta excedió el tiempo límite (Timeout)."
    except Exception as e:
        return f"Error inesperado: {str(e)}"

if __name__ == "__main__":
    logger.info("Iniciando servidor MCP Ka0s DevSecOps...")
    mcp.run()
