# Ka0s Remediation Module

Este módulo centraliza la documentación sobre las capacidades de **Autoremediación** y **Remediación Asistida** del framework Ka0s.

## Índice

1.  **[Concepto](./01_concept.md)**: Filosofía y arquitectura de la remediación.
2.  **[Uso y Validación](./02_usage_validation.md)**: Cómo ejecutar y verificar remediaciones.
3.  **[Integración](./03_integration.md)**: Guía para desarrolladores (crear nuevos scripts/workflows).

## Estado Actual

| Capacidad | Estado | Workflow |
|-----------|--------|----------|
| **High Load / CPU** | ✅ Disponible | `remediation-high-load.yml` |
| **Disk Cleanup** | 🚧 En Desarrollo | `remediation-disk-cleanup.yml` |
| **Pod Restart** | 📅 Planificado | `remediation-pod-restart.yml` |

> **Nota**: Este módulo es crítico para la estrategia de "Self-Healing Infrastructure" de Ka0s.
