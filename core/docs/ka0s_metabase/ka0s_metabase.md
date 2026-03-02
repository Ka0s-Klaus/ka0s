# Módulo Ka0s Metabase

Documentación oficial sobre el despliegue y operación de Metabase en Ka0s.

## Índice de Documentación

1.  [**Concepto y Arquitectura**](./01_concept.md)
    *   Arquitectura del servicio.
    *   Integración con PostgreSQL centralizado.
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
    *   Acceso a la interfaz web.
    *   Configuración inicial (Admin).
    *   Validación de estado y logs.
3.  [**Integración Técnica**](./03_integration.md)
    *   Configuración de Deployment.
    *   Gestión de Secretos.
    *   Ingress y Seguridad.

## Componentes Clave

| Componente | Tipo | Descripción | Ubicación |
| :--- | :--- | :--- | :--- |
| **Metabase Deployment** | Deployment | Despliegue de la aplicación (v0.58.8). | `core/b2b/core-services/metabase/deployment.yaml` |
| **Metabase Service** | Service | Servicio interno (ClusterIP). | `core/b2b/core-services/metabase/service.yaml` |
| **Metabase Ingress** | Ingress | Exposición HTTPS (`metabase.ka0s.io`). | `core/b2b/core-services/metabase/ingress.yaml` |
| **DB Secret** | Secret | Credenciales de conexión a PostgreSQL. | `metabase-db-secret` (namespace `metabase`) |
