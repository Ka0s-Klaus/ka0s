# Integración en el Ecosistema

## Dependencias
- Acción local: `.github/actions/ssh-exec` para ejecución remota segura.
- Script de auditoría: `devops/core/k8s/audit-failed-pods.sh`.
- Post-proceso: `devops/core/k8s/process-failed-pods.py` (opcional, iTop).

## Interoperabilidad
- iTop: si `ITOP_URL` y credenciales están presentes, se valida conectividad y se procesan tickets a partir de `failed_pods.json`.
- Inspector: al finalizar, se invoca `inspector.yml` para registrar evidencias de la ejecución.

## Seguridad
- Principio de mínimo privilegio en `permissions` del workflow.
- Secretos requeridos para SSH e iTop se obtienen desde `secrets`/`vars` del repositorio.
- Evidencias inmutables bajo `audit/kube/`.

## Runners
- Recomendado `swarm-runners-scaleset` (self-hosted) con acceso a la red del clúster.

## Consumidores
- Dashboards o pipelines de reporte que analicen `audit/kube/failed_pods.json`.

