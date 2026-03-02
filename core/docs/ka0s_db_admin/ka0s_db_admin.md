# Módulo: Ka0s DB Admin (CloudBeaver)

Este módulo documenta la implementación y uso de **CloudBeaver** como herramienta de administración de bases de datos centralizada para el clúster Kubernetes de Ka0s.

## Índice de Documentación

1.  [Concepto y Arquitectura](01_concept.md)
    *   Visión general de CloudBeaver.
    *   Integración con PostgreSQL Centralizado.
    *   Seguridad y Acceso.
2.  [Uso y Validación](02_usage_validation.md)
    *   Acceso a la interfaz web.
    *   **Guía de Conexión a Bases de Datos**.
    *   Validación del despliegue.
3.  [Integración Técnica](03_integration.md)
    *   Detalles del despliegue (StatefulSet, Service, Ingress).
    *   Gestión de configuración y secretos.

## Componentes Clave

| Componente | Tipo | Descripción | Ubicación |
| :--- | :--- | :--- | :--- |
| **CloudBeaver** | StatefulSet | Servidor de administración de BBDD. | `core/b2b/core-services/cloudbeaver/deployment.yaml` |
| **Service** | Service | Servicio interno (ClusterIP). | `core/b2b/core-services/cloudbeaver/service.yaml` |
| **Ingress** | Ingress | Exposición HTTPS (`db-admin.ka0s.io`). | `core/b2b/core-services/cloudbeaver/ingress.yaml` |
| **Config** | ConfigMap | Configuración del servidor. | `core/b2b/core-services/cloudbeaver/configmap.yaml` |
