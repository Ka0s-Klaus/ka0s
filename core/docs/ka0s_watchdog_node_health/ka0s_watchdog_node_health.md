# Watchdog - Node Health

El módulo **Watchdog Node Health** es un sistema de vigilancia proactiva diseñado para detectar anomalías en los nodos del cluster Kubernetes y tomar acciones correctivas automáticas para preservar la integridad del sistema.

Este componente actúa como un "sistema inmune", aislando nodos enfermos antes de que afecten a las cargas de trabajo críticas.

## Componentes Principales

| Componente | Tipo | Ubicación | Descripción |
| :--- | :--- | :--- | :--- |
| `watchdog-node-health.yml` | Workflow | `.github/workflows/` | Orquestador principal que se ejecuta periódicamente. |
| `watchdog-disk-pressure.py` | Script | `.github/scripts/` | Lógica de detección de la condición `DiskPressure`. |
| `ops-node-management.yml` | Workflow | `.github/workflows/` | Actuador que ejecuta la operación de aislamiento (`cordon`). |

## Flujo de Trabajo

1.  **Detección**: El workflow se ejecuta cada hora (cron) y lanza el script de Python.
2.  **Análisis**: El script consulta la API de Kubernetes para verificar el estado de los nodos.
3.  **Decisión**: Si se detecta un nodo con `DiskPressure=True`, se marca como "Enfermo".
4.  **Reacción**: El Watchdog invoca automáticamente el workflow de operaciones para poner el nodo en cuarentena (`cordon`).
5.  **Auditoría**: Al finalizar una ejecución exitosa (haya o no nodos enfermos), se desencadena automáticamente una auditoría completa del cluster (`audit-cluster-status.yml`) para generar una "foto" del estado post-análisis.

## Referencias

*   [Kubernetes Node Conditions](https://kubernetes.io/docs/concepts/architecture/nodes/#condition)
*   [GitHub Actions: Workflow Dispatch](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)
