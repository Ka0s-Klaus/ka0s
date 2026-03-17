# CLI Usage Guide

## Command Line Interface (ka0s-agent)

Para preparar el despliegue (prerequisitos fuera de Git) y lanzar despliegues con el flujo de CD, usa el script:

`core/b2b/core-services/runners/openclaw-bootstrap.sh`

### Setup
```bash
chmod +x core/b2b/core-services/runners/openclaw-bootstrap.sh
```

### Usage
#### 1) Crear/actualizar el secret de Basic Auth (Ingress)

```bash
./core/b2b/core-services/runners/openclaw-bootstrap.sh create-basic-auth-secret
```

Esto crea/actualiza `openclaw-basic-auth` en el namespace `openclaw`.

#### 2) Subir el modelo GGUF al PVC del runtime local

```bash
./core/b2b/core-services/runners/openclaw-bootstrap.sh upload-gguf ./ka0s-local.gguf
```

Esto copia el fichero a `/models/ka0s-local.gguf` dentro del PVC `llama-models-pvc` (namespace `llama-server`).

#### 3) Lanzar el despliegue vía GitHub Actions (workflow_dispatch)

```bash
./core/b2b/core-services/runners/openclaw-bootstrap.sh trigger-deploy llama-server --ref feat/openclaw-local-brain
./core/b2b/core-services/runners/openclaw-bootstrap.sh trigger-deploy openclaw --ref feat/openclaw-local-brain
```

#### 4) Esperar el último run del workflow

```bash
./core/b2b/core-services/runners/openclaw-bootstrap.sh watch-latest --ref feat/openclaw-local-brain
```

### How it works
El script separa dos planos:

1. **Prerrequisitos fuera de Git**: secret del Ingress y carga del GGUF al PVC.
2. **GitOps/CD**: dispara el workflow `cd-core-services.yml` con `force_service=` y espera su resultado.
