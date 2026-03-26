import subprocess
import json
import re
from typing import Dict, List
from mcp.server.fastmcp import FastMCP

# Initialize FastMCP server
mcp = FastMCP("Ka0s GitHub CLI MCP Server")


def parse_github_url(url: str) -> Dict[str, str]:
    """Extract repository and run ID from a GitHub Actions run URL."""
    # Example: https://github.com/ka0s-klaus/ka0s/actions/runs/123456789
    match = re.search(r'github\.com/([^/]+/[^/]+)/actions/runs/(\d+)', url)
    if not match:
        raise ValueError(
            "URL inválida. Formato: https://github.com/o/r/actions/runs/id"
        )
    
    return {
        "repo": match.group(1),
        "run_id": match.group(2)
    }


def run_gh_command(args: List[str]) -> str:
    """Run a GitHub CLI command and return its output."""
    try:
        result = subprocess.run(
            ["gh"] + args,
            capture_output=True,
            text=True,
            check=True
        )
        return result.stdout
    except subprocess.CalledProcessError as e:
        error_msg = f"Error ejecutando 'gh {' '.join(args)}':\n{e.stderr}"
        raise RuntimeError(error_msg)
    except FileNotFoundError:
        raise RuntimeError("La CLI de GitHub ('gh') no está en el PATH.")


@mcp.tool()
def get_gh_run_status(url: str) -> str:
    """
    Obtiene el estado y conclusión de una ejecución (run) de GitHub Actions.
    
    Args:
        url: URL completa de la ejecución de GitHub Actions
    """
    try:
        parsed = parse_github_url(url)
        repo = parsed["repo"]
        run_id = parsed["run_id"]
        
        args = [
            "run", "view", run_id, 
            "-R", repo, 
            "--json", "status,conclusion,name,jobs"
        ]
        output = run_gh_command(args)
        
        # Format the output slightly for the LLM to read easily
        data = json.loads(output)
        return json.dumps(data, indent=2)
    except Exception as e:
        return f"Error: {str(e)}"


@mcp.tool()
def get_gh_run_logs(url: str, failed_only: bool = True) -> str:
    """
    Obtiene los logs de una ejecución (run) de GitHub Actions para análisis.
    
    Args:
        url: URL completa de la ejecución de GitHub Actions.
        failed_only: Si es True, retorna solo los logs de pasos fallidos.
    """
    try:
        parsed = parse_github_url(url)
        repo = parsed["repo"]
        run_id = parsed["run_id"]
        
        args = ["run", "view", run_id, "-R", repo]
        if failed_only:
            args.append("--log-failed")
        else:
            args.append("--log")
            
        output = run_gh_command(args)
        
        # Limit output to last 8000 characters to avoid context overflow
        if len(output) > 8000:
            output = "...(logs truncados)...\n" + output[-8000:]
            
        return output
    except Exception as e:
        return f"Error: {str(e)}"


@mcp.tool()
def execute_gh_command(args: List[str]) -> str:
    """
    Ejecuta cualquier comando de la CLI de GitHub (gh).
    
    Permite al agente realizar cualquier acción soportada por la CLI:
    gestionar PRs, issues, repositorios, releases, workflows, etc.
    
    Args:
        args: Lista de argumentos del comando gh (ej. ["issue", "list"]).
              NO incluir "gh" en la lista.
    """
    try:
        if any(arg in ["--interactive", "-i"] for arg in args):
            return "Error: Los comandos interactivos no están soportados."
            
        output = run_gh_command(args)
        
        if len(output) > 15000:
            output = "...(salida truncada)...\n" + output[-15000:]
            
        return output if output.strip() else "Comando ejecutado con éxito."
    except Exception as e:
        return f"Error: {str(e)}"


if __name__ == "__main__":
    mcp.run()
