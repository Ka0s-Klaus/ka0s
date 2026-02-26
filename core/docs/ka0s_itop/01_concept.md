# Concepto y Arquitectura: Integración iTop

## 1. Visión General
Este módulo integra la herramienta ITSM **iTop** con **GitHub Actions**, permitiendo que los eventos en la gestión de servicios disparen automatizaciones en el repositorio.

## 2. Flujo de Trabajo
1.  **Evento en iTop**: Un ticket cambia de estado o se crea una solicitud.
2.  **Trigger Webhook/API**: iTop invoca a GitHub Actions.
3.  **Ejecución Ka0s**: Se ejecutan workflows específicos (ej. aprovisionamiento, remediación).
4.  **Retroalimentación**: GitHub Actions actualiza el ticket en iTop con el resultado.

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
