# Ka0s Agent Ingest - Estrategia Modular

Este módulo es responsable de ingerir y vectorizar el conocimiento del repositorio Ka0s para alimentar la memoria del Agente IA.

## Estrategia de Ingesta Modular

Para evitar timeouts y sobrecargas en la base de datos vectorial, hemos dividido el proceso de ingesta en 4 módulos independientes. Esto permite actualizar solo la parte del conocimiento que ha cambiado.

### Módulos Disponibles

| Módulo | Contenido | Rutas | Workflow | Trigger |
| :--- | :--- | :--- | :--- | :--- |
| **skills** | Capacidades y Reglas del Agente | `compliance/trae/skills/`, `compliance/trae/rules/` | `kaos-agent-ingest.yaml` | Push a `compliance/trae/**` |
| **docs** | Documentación Oficial | `core/docs/`, `README.md` | `kaos-agent-ingest.yaml` | Push a `core/docs/**` |
| **infra** | Definiciones de Kubernetes | `core/b2b/`, `.github/workflows/` | `kaos-agent-ingest.yaml` | Push a `core/b2b/**` |
| **audit** | Registros de Auditoría | `audit/**/*.json`, `audit/**/*.log` | `kaos-agent-ingest.yaml` | Schedule |
| **compliance** | Reglas de Cumplimiento | `compliance/**/*.md`, `compliance/**/*.json` | `kaos-agent-ingest.yaml` | Push a `compliance/**` |
| **devops** | Scripts de Operaciones | `devops/**/*.sh`, `devops/**/*.py` | `kaos-agent-ingest.yaml` | Push a `devops/**` |
| **github** | Automatizaciones | `.github/**/*.yml`, `.github/**/*.yaml` | `kaos-agent-ingest.yaml` | Push a `.github/**` |
| **code** | Código Fuente (Python, Shell) | `core/**/*.py`, `core/**/*.sh` | `kaos-agent-ingest.yaml` | Manual |

## Pipeline de Ingesta Unificado

El repositorio utiliza un único workflow consolidado `kaos-agent-ingest.yaml` que:
1.  **Detecta Cambios**: Identifica qué módulo ha cambiado (skills, docs, infra, etc.) basándose en el commit.
2.  **Optimiza Recursos**: Utiliza caché de `pip` y evita instalar dependencias pesadas de ML (PyTorch, Transformers) ya que utiliza Ollama vía API HTTP.
3.  **Estándar**: Utiliza `swarm-runners-scaleset` para la ejecución, alineándose con la arquitectura de runners de Ka0s.
4.  **Validación**: Realiza un "Pre-scan" de archivos antes de iniciar la ingesta para facilitar la depuración de rutas.

## Requisitos (DB y Embeddings)

- **PostgreSQL (vector DB)**: `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` y `DB_PASSWORD`.
- **Secret requerido en GitHub**: `POSTGRES_IA_PASSWORD` (fallback soportado: `POSTGRES_PASSWORD`).
- **Ollama (embeddings)**: `OLLAMA_HOST` y `OLLAMA_PORT` accesibles desde los runners.

## Uso Manual

Puedes ejecutar la ingesta localmente o en un entorno de desarrollo usando el script `ingest_local.py` con el argumento `--module`:

```bash
# Ingerir solo Skills (Rápido ~30s)
python core/ai/memory/ingest_local.py --module skills

# Ingerir Documentación (~2m)
python core/ai/memory/ingest_local.py --module docs

# Ingerir Infraestructura (~5m)
python core/ai/memory/ingest_local.py --module infra

# Ingerir Todo (Cuidado: Puede tardar >10m)
python core/ai/memory/ingest_local.py --module all
```

## Arquitectura

El script utiliza `argparse` para seleccionar el conjunto de patrones `glob` a procesar.

```python
MODULES = {
    "docs": ["core/docs/**/*.md", "README.md"],
    "skills": ["compliance/trae/skills/**/SKILL.md", "compliance/trae/rules/**/*.md"],
    "infra": ["core/b2b/**/*.yaml", "core/b2b/**/*.json", "core/b2b/**/*.xml"],
    ...
}
```

Esto garantiza que el agente siempre tenga la información más crítica (Skills y Reglas) actualizada al instante, mientras que la documentación masiva o el código pueden actualizarse en segundo plano.
