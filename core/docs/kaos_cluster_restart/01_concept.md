# Reinicio Controlado del Cluster

Este módulo permite reiniciar todo el cluster de Kubernetes de manera secuencial y segura, asegurando la continuidad del servicio mediante la evacuación de cargas (draining) antes de reiniciar cada nodo.

## Arquitectura del Proceso

El script de orquestación (`cluster-restart.sh`) se ejecuta en el nodo Manager y realiza las siguientes acciones iterativamente sobre cada Worker:

1.  **Drain**: Evacúa los Pods del nodo (`kubectl drain`). Esto fuerza a Kubernetes a reprogramar los Pods en otros nodos disponibles.
2.  **Reboot**: Conecta vía SSH al nodo y ejecuta `reboot`.
3.  **Wait**: Espera activamente a que el nodo reporte estado `Ready` nuevamente.
4.  **Uncordon**: Marca el nodo como programable nuevamente (`kubectl uncordon`).

Finalmente, programa el reinicio del propio **Manager** (`shutdown -r +1`) para permitir que el script finalice limpiamente y envíe los logs antes de perder la conexión.

## Flujo de Trabajo

1.  **Ejecución**: Se dispara manualmente desde GitHub Actions (`kaos-cluster-restart.yml`).
2.  **Seguridad**: Requiere confirmación explícita (`RESTART`).
3.  **Auditoría**: Los logs de la operación se guardan en `audit/restart/`.

## Consideraciones
- **Alta Disponibilidad**: Asegúrate de tener al menos 2 réplicas de tus servicios críticos para que el tráfico se balancee al otro nodo durante el reinicio de uno.
- **Tiempos**: El proceso completo puede tomar entre 5 y 15 minutos dependiendo de la velocidad de reinicio del hardware.
