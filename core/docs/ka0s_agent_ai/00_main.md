# Ka0s Agent AI

El módulo **Ka0s Agent AI** es la evolución cognitiva del framework Ka0s. Permite a los usuarios interactuar con la plataforma utilizando lenguaje natural para obtener soporte, realizar consultas técnicas y ejecutar diagnósticos.

## Arquitectura

El agente utiliza una arquitectura RAG (Retrieval-Augmented Generation) que combina:
1.  **Memoria Vectorial**: Base de datos Postgres con extensión `pgvector` que almacena el conocimiento del proyecto.
2.  **Inferencia Local**: Modelos LLM (como `qwen2:1.5b`) ejecutados en Kubernetes mediante Ollama.
3.  **Integración GitOps**: Flujos de trabajo automatizados en GitHub Actions.

### Diagrama de Flujo

```mermaid
graph TD
    User[Usuario] -->|Crea Issue| GH[GitHub Issue]
    GH -->|Webhook| Action[GitHub Action: Issue Responder]
    Action -->|Consulta| Script[Inference Script (query.py)]
    Script -->|Busca Contexto| DB[(Postgres Vector DB)]
    Script -->|Genera Respuesta| LLM[Ollama (Qwen2)]
    LLM --> Script
    Script -->|Comenta| GH
```

## Componentes Clave

### 1. Ingestión de Conocimiento (`ingest_local.py`)
Este script es el "cerebro" que lee y procesa toda la información del repositorio para alimentar la memoria del agente.

*   **Fuentes de Datos**:
    *   Documentación (`core/docs/**/*.md`)
    *   Reglas y Skills (`.trae/**/*.md`)
    *   Código Fuente (`core/**/*.py`, `core/**/*.sh`)
    *   Infraestructura (`core/**/*.yaml`, `core/**/*.json`)
    *   Workflows (`.github/**/*.yaml`)

*   **Proceso**:
    1.  Escanea recursivamente los archivos definidos en `PATTERNS`.
    2.  Divide el contenido en chunks manejables.
    3.  Genera embeddings usando `nomic-embed-text`.
    4.  Almacena los vectores en Postgres.

### 2. Motor de Inferencia (`query.py`)
El script encargado de responder a las preguntas del usuario.

*   **Modelo**: `qwen2:1.5b` (Optimizado para CPU y razonamiento ligero).
*   **Prompt Engineering**:
    *   Detección automática de idioma (Español/Inglés).
    *   Instrucciones estrictas para usar Markdown.
    *   Priorización del contexto RAG sobre el conocimiento general.

### 3. Interfaz de Usuario (GitHub Issues)
La interacción principal ocurre en las Issues de GitHub.

*   **Template**: `.github/ISSUE_TEMPLATE/ask_agent.yml` facilita la creación de preguntas.
*   **Etiqueta**: `ka0s-agent` (o `kaos-agent`) dispara el workflow.
*   **Feedback**: El agente comenta en el mismo hilo con la respuesta y enlaces a los logs de ejecución.

## Flujos de Trabajo (Workflows)

| Workflow | Archivo | Descripción | Disparador |
| :--- | :--- | :--- | :--- |
| **Agent Issue Responder** | `kaos-agent-issue-responder.yaml` | Responde automáticamente a preguntas en Issues. | Issue con label `ka0s-agent` |
| **Agent Query** | `kaos-agent-query.yaml` | Permite consultas manuales via `workflow_dispatch`. | Manual |
| **Agent Ingest** | `kaos-agent-ingest.yaml` | Actualiza la base de datos de conocimiento. | Manual / Programado |

## Guía de Uso

### Para Usuarios
1.  Ve a la pestaña **Issues** en GitHub.
2.  Haz clic en **New Issue**.
3.  Selecciona **Ask Ka0s Agent**.
4.  Escribe tu pregunta y envía.
5.  Espera unos minutos a que el agente responda en los comentarios.

### Para Administradores
*   **Actualizar Conocimiento**: Ejecuta el workflow `Ka0s Agent Ingest` después de cambios significativos en el código o documentación.
*   **Cambiar Modelo**: Modifica la variable `GENERATION_MODEL` en los workflows y en `query.py` si necesitas más potencia (ej. `llama3.1:8b`) o velocidad (`qwen2:0.5b`).

## Solución de Problemas

### El agente no responde
1.  Verifica que la issue tenga la etiqueta `ka0s-agent` o `kaos-agent`.
2.  Revisa los logs de GitHub Actions del workflow `Ka0s Agent Issue Responder`.
3.  Asegúrate de que los pods de `ollama` y `postgres-ia` estén corriendo en el cluster.

### La respuesta es incorrecta
1.  Verifica si la información necesaria existe en el repositorio.
2.  Ejecuta `Ka0s Agent Ingest` para refrescar la memoria.
3.  Si persiste, considera ajustar el prompt en `core/ai/inference/query.py`.
