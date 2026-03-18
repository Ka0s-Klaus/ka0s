# Monitorización del CronJob `mongo-vectorize`

## 1) Estado en Kubernetes (CronJob → Job → Pod)

### Ver configuración y último schedule

```bash
kubectl -n ka0s-knowledge get cronjob mongo-vectorize -o wide
kubectl -n ka0s-knowledge describe cronjob mongo-vectorize
```

### Ver ejecuciones (Jobs) del CronJob

Kubernetes etiqueta los Jobs creados por un CronJob con `cronjob-name=mongo-vectorize`.

```bash
kubectl -n ka0s-knowledge get job -l cronjob-name=mongo-vectorize --sort-by=.metadata.creationTimestamp
```

### Ver Pods de una ejecución concreta

```bash
JOB_NAME=$(kubectl -n ka0s-knowledge get job -l cronjob-name=mongo-vectorize \
  --sort-by=.metadata.creationTimestamp -o jsonpath='{.items[-1].metadata.name}')

kubectl -n ka0s-knowledge get pods -l job-name=$JOB_NAME -o wide
kubectl -n ka0s-knowledge describe pod -l job-name=$JOB_NAME
```

### Logs (seguimiento “en tiempo real”)

```bash
kubectl -n ka0s-knowledge logs -f job/$JOB_NAME
```

Logs útiles a buscar:

- `Starting mongo vectorization ...`
- `Vectorizing inspector.col_json`
- `Processed inspector.col_json doc=... chunks=...`
- `Finished. total_docs=... elapsed=...`

### Eventos (fallos de imagen, DNS, permisos, etc.)

```bash
kubectl -n ka0s-knowledge get events --sort-by=.lastTimestamp | tail -n 50
```

## 2) Progreso funcional (Postgres)

El vectorizador guarda el progreso en `postgresql-ia`:

- Tabla de vectores/chunks: `kaos_memory`
- Tabla de estado incremental: `kaos_mongo_ingest_state`

### Comprobar progreso de `inspector.col_json`

```bash
kubectl -n postgresql-ia exec postgresql-ia-0 -c postgresql -- \
  psql -U ka0s_ai -d ka0s_memory -c \
  "SELECT docs_processed, last_id, updated_at FROM kaos_mongo_ingest_state WHERE db_name='inspector' AND collection_name='col_json';"
```

### Comprobar cuántos chunks hay en `kaos_memory`

```bash
kubectl -n postgresql-ia exec postgresql-ia-0 -c postgresql -- \
  psql -U ka0s_ai -d ka0s_memory -c \
  "SELECT count(*) FROM kaos_memory WHERE source LIKE 'mongo://inspector/col_json/%';"
```

## 3) Señales de salud recomendadas (SLO/alertas)

### Señales mínimas

- **Job fallido**: `status.failed > 0` o `LastSuccessfulTime` demasiado antiguo.
- **Tiempo de ejecución**: duración del Job anormalmente alta (posible atasco).
- **Sin progreso**: `docs_processed` no crece entre dos schedules.

### Umbrales prácticos (ejemplo)

- `LastSuccessfulTime` > 30 min ⇒ alerta.
- `docs_processed` sin cambios en 2 ejecuciones ⇒ alerta.

## 4) Consejos para “debug rápido”

- Si el Pod se queda en `ImagePullBackOff`: revisar `describe pod` y el campo `Events`.
- Si hay errores de red/DNS: revisar si resuelven `mongo.mongo.svc.cluster.local`, `ollama.ollama.svc.cluster.local`, `postgresql-ia.postgresql-ia.svc.cluster.local`.
- Si el Job “corre” pero no inserta: mirar logs de `Embedding error` (Ollama) o fallos en Postgres.

