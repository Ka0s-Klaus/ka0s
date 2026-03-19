# `core/b2b/`: despliegues y servicios core

## Propósito
Manifiestos de infraestructura y despliegues (principalmente Kubernetes) para servicios core del ecosistema Ka0s.

## Estructura típica
- `core/b2b/core-services/<servicio>/`: namespace, deployment/statefulset, service, ingress, kustomize.

## Ejemplos en este repo
- `core/b2b/core-services/docs-portal/`
- `core/b2b/core-services/itop/`
- `core/b2b/core-services/runners/`

## Patrón Ka0s
- Cada servicio suele tener `README.md` y manifests declarativos.
- Las operaciones se automatizan desde `.github/workflows/`.

