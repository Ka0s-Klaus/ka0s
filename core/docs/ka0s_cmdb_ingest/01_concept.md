# Ka0s CMDB Ingestion: Concepto y Estrategia

## 1. Introducción
Este módulo implementa el concepto de **"Infraestructura como Código" (IaC)** aplicado a la CMDB de iTop. Permite definir Elementos de Configuración (CIs) en archivos JSON dentro del repositorio y sincronizarlos automáticamente con la CMDB.

## 2. Objetivos
*   **Centralización**: Mantener las definiciones de CIs en el repositorio Git (`devops/core/cmdb`).
*   **Automatización**: Poblar la CMDB sin intervención manual en la interfaz gráfica de iTop.
*   **Trazabilidad**: Control de cambios en los CIs mediante el historial de Git.
*   **Relaciones Inteligentes**: Resolución automática de claves foráneas por nombre.

## 3. Estructura de Datos
Los archivos JSON deben ubicarse en `devops/core/cmdb` y seguir las plantillas definidas en `core/templates/cmdb`.

### Ejemplo (Servidor):
```json
{
  "description": "Servidor de Base de Datos",
  "class": "Server",
  "fields": {
    "name": "db-prod-01",
    "org_id": "Ka0s Corp",
    "status": "production",
    "managementip": "10.0.0.5"
  }
}
```
