# Flujo de Ingesta Continua (Nightly Ingest)

Este documento describe el proceso automatizado para mantener actualizada la memoria del Agente Ka0s.

## Objetivo
Garantizar que el Agente de IA tenga siempre acceso a la última versión de:
1.  **Reglas** (`.trae/rules`): Normativas y estándares del proyecto.
2.  **Habilidades** (`.trae/skills`): Capacidades técnicas disponibles.
3.  **Documentación** (`core/docs`): Conocimiento arquitectónico y operativo.

## Arquitectura del Flujo

### Trigger
- **Programado**: Todos los días a las 03:00 UTC (Cron: `0 3 * * *`).
- **Manual**: Vía `workflow_dispatch` para actualizaciones bajo demanda.

### Ejecución
El workflow se ejecuta en runners dentro del cluster (`swarm-runners-scaleset`) para tener acceso directo a los servicios internos:
- **PostgreSQL IA**: `postgresql-ia.postgresql-ia.svc.cluster.local` (Puerto 5432).
- **Ollama**: `ollama.ollama.svc.cluster.local` (Puerto 11434).

### Proceso
1.  **Checkout**: Obtiene la última versión de la rama `main`.
2.  **Setup**: Prepara entorno Python e instala dependencias (`psycopg2-binary`, `requests`).
3.  **Ingesta**: Ejecuta el script `core/ai/memory/ingest_local.py` (configurado vía variables de entorno).
    - Trunca la tabla de memoria para evitar duplicados.
    - Lee todos los archivos markdown relevantes.
    - Genera embeddings usando Ollama (`nomic-embed-text`).
    - Almacena vectores y contenido en PostgreSQL.
4.  **Reporte**: Genera un archivo markdown en `audit/ingest/` con el log de la ejecución.
5.  **Commit**: Sube el reporte al repositorio para auditoría histórica.

## Formato del Reporte
Los reportes se guardan en `audit/ingest/` con el siguiente formato de nombre:
`YYYYMMDD_HHMMSS_<WorkflowID>_ka0s-agent-ingest.md`

Contenido:
- Fecha y hora.
- ID de ejecución y Actor.
- Log completo de la consola del script de ingesta.
- Estado final (✅ Éxito / ❌ Fallo).

## Mantenimiento
Si el workflow falla:
1.  Se crea automáticamente un Issue en GitHub con la etiqueta `itop-incident`.
2.  Revisar los logs del workflow en la pestaña "Actions".
3.  Verificar conectividad entre el runner y los servicios (Postgres/Ollama).
4.  Verificar que el modelo `nomic-embed-text` esté disponible en Ollama.
