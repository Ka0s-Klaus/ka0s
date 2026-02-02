# Ka0s Cluster System Update - Guía de Uso

## Ejecución Manual
1.  Ir a **Actions** > **Ka0s Cluster System Update**.
2.  Ejecutar `workflow_dispatch`.

## Validación
*   **Logs**: Se genera un log consolidado en `audit/hosts/` con el detalle de los paquetes actualizados (`apt update/upgrade`).
*   **Verificación**: Revisa el archivo generado `system_update_YYYYMMDD.log` para confirmar que todos los nodos respondieron "OK".

## Solución de Problemas
*   **Timeout**: Si un nodo tarda mucho, verifica la conexión VPN/Red.
*   **Auth Fail**: Verifica que `KAOS_WORKER_SSH_PASS` sea correcto para los nodos que usan password.
