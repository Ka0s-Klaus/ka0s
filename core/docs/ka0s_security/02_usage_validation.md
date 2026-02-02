# Guía de Uso y Validación: Workflow de Seguridad

## 1. Ejecución del Workflow
El workflow `kaos-security-audit.yml` es el punto de entrada principal.

### Triggers
*   **Manual**: Desde la pestaña "Actions" de GitHub -> "Ka0s Security Audit" -> "Run workflow".
*   **Programado**: Ejecución automática cada lunes a las 08:00 UTC (Cron: `0 8 * * 1`).

## 2. Interpretación del Reporte
El sistema genera un artefacto llamado `k8s-security-report` y guarda el reporte en el repositorio en la ruta `audit/kube/report-YYYYMMDD-HHMM.md`.

El reporte contiene las siguientes secciones:

1.  **Privileged Containers**: Lista de pods peligrosos (ROJO). Requieren atención inmediata.
2.  **Containers Running as Root**: Pods que deberían usar `runAsNonRoot`.
3.  **HostPath Volume Usage**: Montajes que exponen el nodo.
4.  **Usage of ':latest'**: Despliegues no deterministas.
5.  **ServiceAccounts con 'cluster-admin'**: Potenciales puertas traseras RBAC.
6.  **Roles con Permisos Wildcard**: Roles demasiado permisivos.
7.  **Namespaces sin NetworkPolicies**: Áreas de red no segmentadas.

## 3. Validación
Para verificar que el sistema funciona:
1.  Ejecuta el workflow.
2.  Descarga el artefacto.
3.  Si el clúster es seguro, las secciones deberían estar vacías o contener "None".
4.  Si hay hallazgos, crea tareas en el backlog para remediarlos.
