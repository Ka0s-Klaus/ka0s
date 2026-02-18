# Concepto y Arquitectura: Audit Failed Pods

## Descripción General
El workflow identifica Pods en estados no saludables (por ejemplo, `CrashLoopBackOff`, `Pending`, `Error`, `Evicted`) y persiste un reporte JSON en el repositorio para auditoría.

## Disparadores
- Manual: `workflow_dispatch`.
- Programado: cada 30 minutos (`*/30 * * * *`).

## Arquitectura Técnica
- Runner: `swarm-runners-scaleset`.
- Orquestación: [audit-pods.yml](file:///Users/santale/ka0s-klaus/ka0s/.github/workflows/audit-pods.yml).
- Ejecución Remota: acción local `ssh-exec` para invocar el script en un host con acceso al clúster.
- Script Núcleo: `devops/core/k8s/audit-failed-pods.sh` recolecta Pods no saludables y genera `failed_pods.json`.
- Persistencia: commit de `audit/kube/failed_pods.json` si hay cambios.
- Integración Opcional: verificación de conectividad a iTop y post-proceso con `process-failed-pods.py`.
- Observabilidad: al cierre, dispara el inspector para auditar la ejecución.

## Variables y Secretos
- Entorno global:
  - `KAOS_MODULE`: "[Ka0S] Audit Pods".
  - `KAOS_CODE`: `${{ github.run_id }}`.
- Acción SSH (`with`):
  - `host`, `port`, `username`, `key`, `pass`, `use-sudo`.
- iTop (opcionales según integración):
  - `ITOP_URL`, `ITOP_API_USER`, `ITOP_API_PASSWORD`, `ITOP_ORIGIN`.

## Flujo Resumido
1. Checkout del repositorio.
2. Ejecución remota del script de auditoría mediante SSH.
3. Commit de resultados si cambia `audit/kube/failed_pods.json`.
4. Comprobación de conectividad iTop y procesamiento de tickets.
5. Disparo del Inspector para cerrar la auditoría.

