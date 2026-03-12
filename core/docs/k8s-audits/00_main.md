# Ka0s Kubernetes Audits

Este módulo agrupa los flujos de trabajo diseñados para la auditoría exhaustiva, inspección de servicios y recolección de logs en los clústeres de Kubernetes gestionados por Ka0s.

## Índice de Documentación

1.  [**Concepto y Arquitectura**](./01_concept.md)
    *   Filosofía de Observabilidad.
    *   Arquitectura de los tres flujos.
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
    *   Cómo ejecutar auditorías manuales.
    *   Cómo validar los reportes generados.
3.  [**Integración Técnica**](./03_integration.md)
    *   Detalles de implementación (scripts y workflows).
    *   Estructura de directorios de auditoría.

## Componentes Clave

| Componente | Tipo | Descripción | Ubicación |
| :--- | :--- | :--- | :--- |
| **Full Infrastructure Audit** | Workflow | Auditoría completa del clúster (Semanal). | `.github/workflows/full-infrastructure-audit.yml` |
| **Service Audit** | Workflow | Inspección profunda de un servicio específico (Manual). | `.github/workflows/audit-service.yml` |
| **Log Collection** | Workflow | Recolección horaria de logs de todos los servicios. | `.github/workflows/collect-service-logs.yml` |
