# Targets (Fuentes) y Reglas de Normalización

## Objetivo

Reducir tiempo de ingesta y evitar introducir ruido o datos sensibles en la memoria vectorial.

Este módulo está diseñado para funcionar con:

- MongoDB (`mongo.mongo.svc.cluster.local`)
- PostgreSQL de monitorización (`postgresql.postgresql.svc.cluster.local`)
- MySQL ITIL (`mysql.mysql.svc.cluster.local`)

## Variables de selección (Targets)

### Mongo

- `MONGO_DB`: base de datos a procesar.
- `MONGO_COLLECTIONS`:
  - `*` para todas las colecciones (se excluyen `system.*` automáticamente).
  - Lista CSV para incluir solo ciertas colecciones.
- `MONGO_COLLECTIONS_EXCLUDE`: lista CSV para excluir colecciones.

### PostgreSQL

- `PG_SCHEMA`: esquema (default `public`).
- `PG_TABLES`:
  - `*` para todas las tablas del esquema.
  - Lista CSV para incluir solo ciertas tablas.
- `PG_TABLES_EXCLUDE`: lista CSV para excluir tablas.

### MySQL

- `MYSQL_DB`: base de datos (schema) a procesar.
- `MYSQL_TABLES`:
  - `*` para todas las tablas.
  - Lista CSV para incluir solo ciertas tablas.
- `MYSQL_TABLES_EXCLUDE`: lista CSV para excluir tablas.

## Variables de filtrado de campos (Normalización)

Estas variables permiten controlar qué campos entran al texto antes de chunking/embeddings:

- `*_ALLOW_FIELDS` (CSV): si se define, solo se mantienen esos campos.
- `*_DENY_FIELDS` (CSV): siempre se eliminan esos campos.

Notas:

- En SQL, el filtrado se aplica sobre el JSON serializado del registro.
- Recomendación: para ITIL (MySQL), usar `ALLOW_FIELDS` cuando el esquema esté identificado.

## Cómo descubrir los targets (operativo)

### Mongo

Desde un pod con acceso a Mongo:

```bash
mongosh "$MONGO_URI" --eval "db.getSiblingDB('<db>').getCollectionNames()"
```

### PostgreSQL

```sql
SELECT table_schema, table_name
FROM information_schema.tables
WHERE table_type='BASE TABLE'
ORDER BY table_schema, table_name;
```

### MySQL

```sql
SHOW DATABASES;
USE <db>;
SHOW TABLES;
DESCRIBE <table>;
```

## Recomendación de enfoque

### Modo recomendado cuando quieres "todo"

- Mantener `*_TABLES` / `*_COLLECTIONS` en `*`.
- Usar `MODE=auto`:
  - Primera ejecución: `full` (bootstrap) y crea estado en el spool.
  - Siguientes ejecuciones: `incremental` (solo cambios).

### Tablas sin watermark

En PostgreSQL/MySQL, si una tabla no tiene el campo `*_WATERMARK_FIELD` (por defecto `updated_at`), se ingesta en modo full la primera vez y se marca como `no_watermark_tables` para no re-fullscan en modo incremental.

### Guardarraíles (opcional pero recomendado)

Para evitar ejecuciones interminables en un primer bootstrap gigante:

- Mongo: `MAX_DOCS_PER_RUN`, `MAX_CHUNKS_PER_RUN`
- SQL: `MAX_ROWS_PER_TABLE`, `MAX_ROWS_PER_RUN`, `MAX_CHUNKS_PER_RUN`

Por defecto están a `0` (sin límite). Se pueden activar temporalmente y luego volver a `0`.

### Cuando conviene usar targets explícitos

- Añadir `*_EXCLUDE` para tablas/colecciones de alta cardinalidad o ruido.
- Para ITIL: preferir `ALLOW_FIELDS` por entidad (incidente, cambio, problema, CI, servicio).
