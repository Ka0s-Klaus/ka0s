# Ka0s Agent AI - Arquitectura y Flujo de Trabajo

Este documento describe la arquitectura, componentes y flujos de trabajo del Agente de Inteligencia Artificial DevSecOps del entorno Ka0s.

## 1. Concepto y Visión

El Agente Ka0s no es un simple chatbot, sino un sistema **activo** diseñado para asistir en operaciones de infraestructura, resolución de incidentes (troubleshooting) y consultas sobre normativas internas.

El agente se apoya en tres pilares fundamentales:
1. **Memoria (RAG):** Ingesta de la "Constitución Ka0s" y documentación técnica en una base de datos vectorial (PGVector) para proporcionar contexto normativo y técnico fiable.
2. **Cerebro (LLM):** Modelos locales (Ollama) como `llama3.2:7b` que razonan utilizando el paradigma **ReAct** (Reason + Act).
3. **Manos (Tool Calling / MCP):** Capacidad de ejecutar herramientas reales (ej. `kubectl`, `gh cli`) mediante el estándar Model Context Protocol (FastMCP) para leer el estado del clúster antes de diagnosticar.

## 2. Componentes Principales

### 2.1 Motor de Inferencia (`core/ai/inference/query.py`)
Es el punto de entrada para las consultas al agente (usado por el workflow `kaos-agent-query.yaml`).
- **Función:** Recibe una pregunta, inyecta un *System Prompt* restrictivo (que fuerza el uso del idioma Español y el uso de herramientas) y orquesta la comunicación con la API `/api/chat` de Ollama.
- **Flujo:** Si el modelo decide que necesita datos en vivo, este script intercepta la petición (Tool Call), ejecuta el subproceso correspondiente, captura la salida y se la devuelve al modelo para que genere la respuesta final informada.

### 2.2 Servidor de Herramientas MCP (`core/ai/tools/server.py`)
Implementación de un servidor MCP estándar utilizando el framework `FastMCP`.
- **Función:** Desacoplar las "habilidades" del motor de inferencia. Expone endpoints estandarizados que cualquier cliente MCP (como Claude Desktop o nuestro propio motor) puede consumir.
- **Herramientas Actuales:**
  - `get_kubernetes_pods`: Para leer el estado de los servicios.
  - `github_cli_read`: Para consultar issues y PRs.

### 2.3 Agentes Especializados (`core/ai/agents/incident_solver.py`)
Scripts diseñados para tareas específicas que requieren múltiples pasos de razonamiento.
- **Ejemplo (Incident Solver):** Diseñado para diagnosticar incidentes en Kubernetes. Implementa un bucle `for` (hasta 5 iteraciones) donde el modelo puede ejecutar múltiples herramientas de forma secuencial (ej. primero buscar pods, luego leer los logs del pod que falla) antes de emitir un diagnóstico final.

## 3. Integración con GitHub Actions

El agente está integrado de forma nativa en el pipeline de CI/CD a través del workflow `.github/workflows/kaos-agent-query.yaml`.

**Flujo de Ejecución del Workflow:**
1. El usuario dispara el workflow proporcionando una pregunta.
2. El runner (`swarm-runners-scaleset`) se levanta y verifica que los modelos necesarios (`llama3.2:7b`) estén disponibles en el pod de Ollama.
3. Ejecuta `core/ai/inference/query.py` pasándole la pregunta del usuario.
4. El script formatea la respuesta final limpia (sin prefijos como "🤖 Agente DevSecOps:" para no ensuciar el markdown) y la guarda en `audit/response/`.
5. El workflow hace un commit automático de la respuesta en el repositorio para mantener un registro auditable de la interacción.

## 4. Gestión del Idioma y Guardrails

Una de las particularidades de los modelos locales (como Llama 3.2 7B) es su tendencia a cambiar al inglés cuando leen logs o salidas de comandos en ese idioma. 

Para mitigar esto, se ha implementado un mecanismo de **Guardrails** en el *System Prompt*:
```python
"REGLA DE ORO: SIEMPRE DEBES RESPONDER EN ESPAÑOL, sin importar el idioma de los logs o del prompt del usuario."
```
Esto fuerza al modelo a mantener la coherencia lingüística en su diagnóstico final.

## 5. Próximos Pasos (Evolución)

1. **Memoria Episódica:** Integrar la base de datos vectorial directamente en `query.py` para inyectar "experiencias previas" de resolución de incidentes.
2. **Herramientas de Acción (State-changing):** Evolucionar de herramientas *Read-Only* a herramientas de remediación (ej. reiniciar un deployment), añadiendo un paso de validación humana (Human-in-the-Loop) vía Slack/Teams.
3. **Orquestación Avanzada:** Migrar el bucle de razonamiento manual hacia un framework de grafos como **LangGraph** para manejar flujos de agente más complejos y resilientes a fallos.