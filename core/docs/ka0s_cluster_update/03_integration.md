# Ka0s Cluster System Update - Integración

## Gestión de Secretos
Requiere un conjunto estricto de credenciales:
*   `KAOS_SSH_KEY_PRIV`: Para el salto inicial al Manager.
*   `KAOS_SSH_PASS`: Sudo password.
*   `KAOS_WORKER_SSH_PASS`: Password para movimiento lateral a workers.

## Dependencias
*   Requiere que el script `system-update.sh` esté presente en el repositorio y sea desplegado o inyectado en el manager.
*   Se integra con el módulo de **Auditoría** al persistir logs en el repo.
