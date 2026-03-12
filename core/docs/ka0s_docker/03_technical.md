# Módulo Ka0s Docker - Integración

## Relación con Core
Docker es una dependencia dura para:
*   **Ka0s Core**: Para levantar runners y servicios de observabilidad.
*   **Ka0s Execution**: Muchos pasos de CI/CD corren dentro de contenedores.

## Seguridad
*   Configuración de daemon seguro (TLS si aplica).
*   Gestión de usuarios en el grupo `docker`.
