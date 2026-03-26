# Diseño Arquitectónico: Servidor MCP para CLI de GitHub (Fase Inicial)

## Contexto
El objetivo de este documento es definir el diseño e implementación de las "manos" para el agente LLM desplegado en el ecosistema Ka0s (Ollama + PostgreSQL VectorDB + AnythingLLM). Se requiere que el agente tenga la capacidad de ejecutar comandos de la CLI de GitHub (`gh`) cuando se le pregunte sobre el estado o fallos de ejecuciones de GitHub Actions, proporcionando una URL como entrada.

La solución adoptada es la implementación de un **Model Context Protocol (MCP) Server**, que es el estándar actual para conectar modelos de IA con herramientas externas de manera segura e interoperable.

## Objetivos
- **Capacidad 1**: Leer el estado de una ejecución de GitHub Actions (`gh run view`).
- **Capacidad 2**: Extraer los logs de una ejecución para análisis de errores (`gh run view --log` / `--log-failed`).
- **Capacidad 3 (Full CLI)**: Proveer una interfaz general para ejecutar **cualquier** comando disponible en la documentación oficial de la CLI de GitHub (`https://cli.github.com/manual/`), permitiendo al agente gestionar issues, PRs, repositorios, releases, etc.

## Arquitectura del MCP Server

### 1. Ubicación y Estructura
El servidor MCP se implementará en Python y residirá en el directorio `core/ai/mcp/github-cli/`.

```text
core/ai/mcp/github-cli/
├── __init__.py
├── main.py              # Entrypoint del servidor MCP (Stdio / SSE)
├── tools/               # Lógica de herramientas (ejecución subprocess)
│   ├── run_view.py
│   └── run_logs.py
├── requirements.txt     # Dependencias (mcp, pydantic, etc.)
└── README.md            # Instrucciones de uso e instalación
```

### 2. Definición de Herramientas (Tools)

#### A. `get_gh_run_status`
- **Descripción**: Obtiene un resumen del estado de un workflow run.
- **Parámetros**:
  - `url` (string): La URL del GitHub Action run (ej. `https://github.com/ka0s-klaus/ka0s/actions/runs/123456`).
- **Ejecución interna**:
  - Extrae el ID del run y el repositorio desde la URL.
  - Ejecuta: `gh run view <RUN_ID> -R <REPO> --json status,conclusion,name,jobs`
  - Retorna el JSON estructurado al modelo.

#### B. `get_gh_run_logs`
- **Descripción**: Obtiene los logs de una ejecución fallida para que el modelo identifique el error.
- **Parámetros**:
  - `url` (string): La URL del GitHub Action run.
  - `failed_only` (boolean): Si es `true`, extrae solo los logs fallidos (recomendado por defecto para ahorrar tokens).
- **Ejecución interna**:
  - Extrae el ID y el repo.
  - Ejecuta: `gh run view <RUN_ID> -R <REPO> --log-failed` (o `--log` si es `false`).
  - Limita la salida (head/tail) si es muy extensa para no desbordar el contexto del LLM.

### 3. Implementación Tecnológica
- **SDK**: Se utilizará el SDK oficial de MCP para Python (`mcp`).
- **Transporte**: `stdio` para ejecución local directa o `SSE` (Server-Sent Events) si se despliega como servicio persistente.
- **Integración con CLI**: Uso de la librería `subprocess` de Python, capturando `stdout` y `stderr`.

### 4. Seguridad y Autenticación
- El servidor MCP dependerá del contexto de autenticación de la CLI de GitHub en la máquina host donde se ejecute (usando el token ya configurado por `gh auth login`).
- Todas las herramientas en esta fase inicial están estrictamente limitadas a comandos `view` (lectura).

## Siguientes Pasos (Ejecución)
1. **Validación del Diseño**: Confirmar si el enfoque de MCP Server encaja con la infraestructura de cliente actual (ej. si se consumirá desde Claude Desktop, Cline/Trae, o un servidor custom AnythingLLM/OpenWebUI).
2. **Creación del Proyecto**: Generar el código base en `core/ai/mcp/github-cli/`.
3. **Pruebas Locales**: Validar que el servidor expone las tools correctamente usando el inspector MCP o un cliente local.
4. **Despliegue/Integración**: Integrar el MCP en el ecosistema Ka0s.
