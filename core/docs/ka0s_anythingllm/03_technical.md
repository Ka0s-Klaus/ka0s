# Detalles técnicos (Manifiestos y cambios)

## Estado deseado (IaC)

Cambios implementados inicialmente en la PR:

- `https://github.com/Ka0s-Klaus/ka0s/pull/5107`

El despliegue de AnythingLLM vive en:

- `core/b2b/core-services/anythingllm/`

Archivos principales:

- `kustomization.yaml`: entrada Kustomize.
- `namespace.yaml`: `Namespace` `anythingllm`.
- `deployment.yaml`: `Deployment` y configuración de entorno.
- `service.yaml`: `Service` ClusterIP `anythingllm:3001`.
- `pvc.yaml`: PVC RWX sobre `StorageClass` `nfs-client`.
- `ingress.yaml`: host `anythingllm.ka0s.io`.
- `pull-embedding-model-job.yaml`: Job de pull del modelo de embedding en Ollama.

## Nodo y scheduling

- AnythingLLM: `nodeSelector: kubernetes.io/hostname: k8-node-20`.
- Job de pull del embedding: ejecuta en `k8-node-20` (es CPU/IO, no requiere GPU).

## Persistencia

Se monta un PVC `ReadWriteMany` para persistir:

- `/app/server/storage`
- `/app/collector/hotdir`
- `/app/collector/outputs`

StorageClass:

- `nfs-client` (provisioner NFS del `storage-system`).

## Concurrencia y límites de entrada

El Ingress aplica límites básicos:

- `nginx.ingress.kubernetes.io/limit-connections: "3"`
- `nginx.ingress.kubernetes.io/limit-rps: "5"`

Estos valores están alineados con el objetivo: máximo ~3 concurrentes.

## Integración con Ollama (variables)

AnythingLLM se configura para usar Ollama por Service DNS interno:

- `OLLAMA_BASE_PATH=http://ollama.ollama.svc.cluster.local:11434`
- `EMBEDDING_BASE_PATH=http://ollama.ollama.svc.cluster.local:11434`

Modelo de embeddings:

- `EMBEDDING_MODEL_PREF=nomic-embed-text:latest`

## Ajustes aplicados en Ollama

En el Deployment de Ollama se ajustaron:

- `OLLAMA_NUM_PARALLEL=4`
- `OLLAMA_MAX_QUEUE=10`
- `OLLAMA_KEEP_ALIVE=60m`
- `OLLAMA_FLASH_ATTENTION=1`

## Ajuste de ARC runners (FinOps)

Se limitó la concurrencia máxima de runners:

- `maxRunners: 10`

## Referencias

- Workflow CD Core Services: `.github/workflows/cd-core-services.yml`
- Storage System (NFS provisioner): `core/b2b/core-services/storage-system/`
