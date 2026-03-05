# Ka0s ITIL Sync

## Descripción
Este módulo automatiza la sincronización de la configuración ITIL (Equipos, Personas, Catálogo de Servicios, SLAs) desde archivos YAML definidos en el repositorio hacia la CMDB de iTop.

## Objetivo
Mantener la CMDB como "Single Source of Truth" pero gestionada mediante prácticas de **Configuration as Code** (GitOps).

## Alcance
*   **Contactos**: Sincronización de Equipos (`Team`) y Personas (`Person`).
*   **Catálogo**: Sincronización de Servicios (`Service`) y Subcategorías (`ServiceSubcategory`).
*   **SLAs**: (Roadmap) Sincronización de acuerdos de nivel de servicio.
