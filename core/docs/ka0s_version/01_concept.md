# Ka0s Version Manager - Concepto

## Descripción
Automatización del Versionado Semántico (SemVer). Elimina la gestión manual de tags y releases.

## Lógica de Versión
Calcula la siguiente versión basándose en el tipo de rama o etiquetas del Pull Request:
*   `fix/` -> Patch (+0.0.1)
*   `feat/` -> Minor (+0.1.0)
*   `release/` -> Major (+1.0.0)

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
