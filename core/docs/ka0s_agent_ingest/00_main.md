# Ka0s Agent Ingest - Estrategia Modular

Este módulo es responsable de ingerir y vectorizar el conocimiento del repositorio Ka0s para alimentar la memoria del Agente IA.

## Estrategia de Ingesta Modular

Para evitar timeouts y sobrecargas en la base de datos vectorial, hemos dividido el proceso de ingesta en 4 módulos independientes. Esto permite actualizar solo la parte del conocimiento que ha cambiado.

### Módulos Disponibles

| Módulo | Contenido | Rutas | Workflow | Trigger |
| :--- | :--- | :--- | :--- | :--- |
| **skills** | Capacidades y Reglas del Agente | `.trae/skills/`, `.trae/rules/` | `kaos-agent-ingest-skills.yaml` | Push a `.trae/**` |
| **docs** | Documentación Oficial | `core/docs/` | `kaos-agent-ingest-docs.yaml` | Push a `core/docs/**` |
| **infra** | Definiciones de Kubernetes | `core/b2b/`, `.github/workflows/` | `kaos-agent-ingest-infra.yaml` | Push a `core/b2b/**` |
| **code** | Código Fuente (Python, Shell) | `core/**/*.py`, `core/**/*.sh` | *(Manual Only)* | Manual |

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
    "docs": ["core/docs/**/*.md"],
    "skills": [".trae/skills/**/*.md"],
    "infra": ["core/b2b/**/*.yaml"],
    ...
}
```

Esto garantiza que el agente siempre tenga la información más crítica (Skills y Reglas) actualizada al instante, mientras que la documentación masiva o el código pueden actualizarse en segundo plano.
