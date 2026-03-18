# Embedding y CronJob (Mongo → pgvector)

## Diagrama

```mermaid
flowchart LR
  subgraph K8s[Cluster Kubernetes]
    subgraph NSK[Namespace: ka0s-knowledge]
      CJ[CronJob: mongo-vectorize\n(schedule */10)]
      J[Job]
      P[Pod\npython:3.11-slim]
      CM[ConfigMap: mongo-vectorize-scripts\n(mongo_ingest.py + requirements.txt)]
      S[Secret: knowledge-sources\n(MONGO_URI, POSTGRES_IA_*)]
    end

    subgraph NSM[Namespace: mongo]
      M[(MongoDB Service)]
    end

    subgraph NSO[Namespace: ollama]
      O[(Ollama Service\n/api/embeddings)]
    end

    subgraph NSPG[Namespace: postgresql-ia]
      PG[(PostgreSQL + pgvector\nDB: ka0s_memory)]
    end
  end

  CJ -->|crea| J -->|lanza| P
  CM -->|monta /config| P
  S -->|inyecta env| P

  P -->|lee documentos\n(inspector.col_json)| M
  P -->|prompt chunk\n→ embedding| O
  P -->|INSERT vector| PG
  P -->|UPSERT estado| PG
```

## Qué hace el embedding (en pocas palabras)

- El pod lee documentos de Mongo (por defecto filtrado a `inspector.col_json`).
- Convierte cada documento a texto y lo trocea en chunks.
- Por cada chunk llama a Ollama (`/api/embeddings`) para obtener un vector.
- Guarda el chunk + su vector en Postgres (tabla `kaos_memory`) usando pgvector.

## Qué controla el CronJob

- Frecuencia: `*/10 * * * *` (cada 10 minutos).
- Ritmo: `MAX_DOCS` limita docs por ejecución y `SLEEP_SECONDS_PER_DOC` mete pausa.
- Progreso: guarda `last_id` y `docs_processed` por colección en `kaos_mongo_ingest_state`.

