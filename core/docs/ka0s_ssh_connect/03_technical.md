# Ka0s SSH Connect - Integración

## Piedra Angular de Ka0s
Este módulo es utilizado por casi todos los workflows operativos:
*   **Cluster Update**: Lo usa para saltar al manager.
*   **Deployments**: Lo usa para reiniciar servicios en prod.
*   **Auditoría**: Lo usa para extraer logs del sistema.

## Seguridad
Maneja claves SSH privadas (`KAOS_SSH_KEY_PRIV`) y passwords (`KAOS_SSH_PASS`). Asegura que las claves se limpien del runner después de su uso.
