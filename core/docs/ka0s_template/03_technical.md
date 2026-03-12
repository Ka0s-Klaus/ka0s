# Integración Técnica

Detalles técnicos sobre la infraestructura que soporta las plantillas de Ka0s.

## Infraestructura de Ejecución (Runners)
Ka0s estandariza el uso de runners auto-hospedados para todas las automatizaciones.

*   **`swarm-runners-scaleset`**:
    *   Grupo de runners desplegados dentro del cluster Kubernetes (ARC - Actions Runner Controller).
    *   **Uso**: Obligatorio para todos los workflows del repositorio, incluyendo CI, CD y auditorías.
    *   **Ventaja**: Latencia cero y acceso directo a la red del cluster.

> Nota: El uso de `ubuntu-latest` (GitHub Hosted) está deshabilitado por la constitución Ka0s para garantizar control y seguridad de ejecución.

## Gestión de Secretos y Variables
La plantilla asume la existencia de ciertos secretos y variables a nivel de organización o repositorio.

### Variables de Entorno Estándar (`env`)
El sistema inyecta o espera las siguientes variables para contexto:
*   `KAOS_MODULE`: Identificador único del proceso.
*   `KAOS_CODE`: Correlación universal de ejecución (`github.run_id`).
*   `KAOS_ACTOR`: Usuario que dispara la ejecución (`github.actor`).

### Secretos Comunes
*   `KAOS_WORKER_SSH_KEY`: Llave privada para conectar a nodos vía SSH.
*   `KAOS_WORKER_SSH_PASS`: Contraseña para elevación de privilegios (sudo) en nodos.
*   `GITHUB_TOKEN` (preferido): Token automático para operaciones de GitHub (issues, `gh workflow run`, etc.).
*   OIDC con nubes (AWS/Azure/GCP) en lugar de llaves de larga duración.

## Ciclo de Vida y Notificaciones
La integración del ciclo de vida se basa en la dependencia de jobs.

*   **Mecanismo**: `needs: [job-core]` + `if: success()` o `if: failure()`.
*   **Acciones Futuras**: Está planificado migrar la lógica repetitiva de estos pasos a **Composite Actions** (`.github/actions/kaos-notify-success` y `kaos-notify-failure`) para centralizar el formato de los mensajes y canales de notificación (Slack, Email, Issue).
