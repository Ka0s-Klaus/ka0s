# Ka0s Cluster Restart Module

Módulo para el mantenimiento y reinicio controlado de la infraestructura del cluster.

## Contenido
- [Visión General y Arquitectura](01_overview.md)
- [Guía de Uso y Troubleshooting](02_usage.md)

## Recursos
- **Workflow**: [.github/workflows/kaos-cluster-restart.yml](../../../.github/workflows/kaos-cluster-restart.yml)
- **Script**: [devops/core/k8s/cluster-restart.sh](../../../devops/core/k8s/cluster-restart.sh)

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
