# Uso y Validación

## Uso (Operación)

### Modos de ejecución

1. **Ingesta completa por fuente** (first run)
   - Recorre toda la base de datos.
   - Genera spool y carga.

2. **Ingesta incremental por fuente** (operación diaria/semanal)
   - Solo procesa entidades nuevas o modificadas.

3. **Re-embedding por cambio de modelo** (migración controlada)
   - Recalcula embeddings manteniendo convivencias por versión.

### Inputs operativos

- `source`: `mongo` | `postgresql-monitoring` | `mysql-itil`
- `mode`: `full` | `incremental` | `reembed`
- `run_id`: timestamp + hash corto

### Salidas

- Spool en PVC:
  - `manifest.json` (metadatos de ejecución)
  - `vectors.*` (registros con embeddings + metadata)
- PostgreSQL-IA:
  - tabla vectorial con UPSERT idempotente

## Validación (Done)

### Checks de pipeline (por cada run)

1. **Sanidad de la fuente**
   - Conectividad a DB.
   - Conteos base (colecciones/tablas objetivo).

2. **Sanidad de normalización**
   - Muestreo de documentos normalizados.
   - Validación de filtrado (PII/secrets si aplica).

3. **Sanidad de embeddings**
   - Validar dimensión del vector.
   - Latencia media y ratio de errores.

4. **Sanidad de carga**
   - UPSERT sin duplicados.
   - Conteos esperados vs insertados.

5. **No-impacto en el agente**
   - SLO de query estable durante la ingesta.

## Observabilidad

### Métricas mínimas

- `chunks_processed_total`
- `embedding_requests_total` + `embedding_errors_total`
- `loader_rows_upserted_total`
- `ollama_embed_latency_ms` y `ollama_gen_latency_ms`
- `pgvector_query_latency_ms`

### Evidencias

- Logs estructurados en `audit/` (no en raíz).
- `manifest.json` por ejecución en el spool.

## Controles de seguridad

- Secrets de DB via Kubernetes Secrets.
- El spool no debe contener credenciales.
- Normalización con allowlist de campos (especialmente ITIL).

