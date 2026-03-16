# Ka0s Agent Knowledge Pipeline (DB Embeddings)

Este módulo define una arquitectura **limpia** y **estratégica** para alimentar el agente Ka0s con conocimiento procedente de bases de datos (PostgreSQL de monitorización, MongoDB de auditoría y MySQL de ITIL), sin degradar la capacidad de respuesta del agente.

## Objetivo

- Mantener el agente respondiendo con baja latencia.
- Ejecutar ingestiones largas (hasta 24h) de manera aislada, controlada e incremental.
- Persistir embeddings en `postgresql-ia` (pgvector) con versionado y trazabilidad.

## Alcance

- Fuentes: `postgresql` (monitorización), `mongo` (auditoría/ejecuciones) y `mysql` (ITIL).
- Almacén vectorial: `postgresql-ia` (pgvector).
- Modelos: Ollama en Kubernetes.

## Documentos

- [01_concept.md](01_concept.md)
- [02_usage_validation.md](02_usage_validation.md)
- [03_technical.md](03_technical.md)
- [04_targets.md](04_targets.md)
