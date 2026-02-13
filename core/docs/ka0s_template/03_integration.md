# Integración Técnica y Detalles de Implementación

Este documento detalla los componentes técnicos que soportan las plantillas de Ka0s.

## Infraestructura de Ejecución

### Runners: `swarm-runners-scaleset`
Nuestras plantillas están optimizadas para ejecutarse en el cluster de runners auto-escalables.
*   **Ventaja**: Acceso a la red interna (Kubernetes, Bases de Datos) sin exponer puertos.
*   **Requisito**: No usar `ubuntu-latest` para tareas que requieran acceso a infraestructura interna.

## Gestión de Identidad (GitOps)

Los workflows a menudo necesitan escribir en el repositorio (logs, auditoría). La plantilla incluye la configuración estándar de git:

```yaml
git config --global user.name "${{ secrets.KAOS_BOT_NAME }}"
git config --global user.email "${{ secrets.KAOS_BOT_EMAIL }}"
```

### Mecanismo de Reintento (Retry)
Dado que múltiples workflows pueden intentar escribir en el repo simultáneamente, la plantilla implementa un bucle `until` para el `git push`.
*   **Lógica**: Si el push falla (por conflicto), hace `git pull --rebase` y reintenta hasta 5 veces.

## Integración con Issues

El job `end-workflow` tiene lógica inteligente para detectar si la ejecución pertenece a una tarea específica (rama `feat/123-tarea`).
*   **Extracción**: `grep` del número en la rama.
*   **Acción**: Comenta en la issue asociada usando `gh issue comment`.
*   **Token**: Utiliza `${{ github.token }}` automáticamente.
