# Requerimientos para la correcta funcionalidad del módulo
En relación a accesos adicionales y auditoría FinOps, todos los proveedores de Cloud tienen los mismos requerimientos, pero os indicamos el detalle de los permisos para cada uno de ellos:

## GCP

- roles/owner en la cuenta de facturación
- roles/billing.admin para gestión de costos
- roles/recommender.admin para usar las recomendaciones de la API
- roles/monitoring.admin para la gestión de la monitorización de los recursos
- en función de lo que queréis que se audite los roles están determinados en esta url: https://cloud.google.com/logging/docs/audit?hl=es-419e
- en función de la observabilidad los roles están determinados en esta url: https://cloud.google.com/stackdriver/docs/scopes/configure?hl=es-419

## AWS

- AWSBillingReadOnlyAccess : Permite acceso de solo lectura a facturación y reportes
- CostManagementServiceRolePolicy : Para integración con servicios de optimización
- CrossAccountCostManagementRole : Acceso entre cuentas para consolidar costos
- en el caso de que queráis activar monitorización, auditoría y observabilidad, tendríamos que solicitar el acceso a cada uno de los recursos.

## OCI

- CostManagementRead : Permiso para análisis de costos
- BudgetManagement : Administración de presupuestos
- UsageReportViewer : Acceso a reportes detallados
- en el caso de que queráis activar monitorización, auditoría y observabilidad, tendríamos que solicitar el acceso a cada uno de los recursos.