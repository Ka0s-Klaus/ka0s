# Ka0s GitHub CLI MCP Server

Este servidor implementa el protocolo MCP (Model Context Protocol) para proporcionar capacidades (tools) a los agentes de IA (ej. Ollama + AnythingLLM/Claude Desktop) para interactuar con la CLI de GitHub (`gh`).

## Herramientas Disponibles (Tools)

- `get_gh_run_status`: Devuelve el estado y la conclusión de una ejecución de GitHub Actions proporcionando su URL.
- `get_gh_run_logs`: Devuelve los logs de una ejecución de GitHub Actions (por defecto, solo los fallidos) para análisis de errores.

## Requisitos

- Python 3.10+
- GitHub CLI (`gh`) instalada y autenticada en el host (`gh auth login`).
- Dependencias instaladas (`pip install -r requirements.txt`).

## Instalación y Uso

1. Instalar dependencias:
   ```bash
   pip install -r requirements.txt
   ```

2. Integrar con tu cliente MCP. Ejemplo de configuración en Claude Desktop (`claude_desktop_config.json`):
   ```json
   {
     "mcpServers": {
       "ka0s-github": {
         "command": "python",
         "args": ["/ruta/absoluta/a/ka0s/core/ai/mcp/github-cli/main.py"]
       }
     }
   }
   ```

## Notas de Seguridad
Este servidor está diseñado en una fase inicial como **Read-Only**. No proporciona herramientas para modificar repositorios, disparar workflows ni alterar configuraciones. Todo se ejecuta bajo los permisos del token de `gh` configurado en la máquina local.
