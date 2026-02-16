# Integración Técnica

Detalles técnicos sobre la infraestructura que soporta las plantillas de Ka0s.

## Infraestructura de Ejecución (Runners)
Ka0s utiliza una infraestructura híbrida, pero priorizamos runners auto-hospedados para operaciones sobre el cluster.

*   **`swarm-runners-scaleset`**:
    *   Grupo de runners desplegados dentro del cluster Kubernetes (ARC - Actions Runner Controller).
    *   **Uso**: Obligatorio para cualquier workflow que interactúe con `kubectl`, redes internas o servicios desplegados.
    *   **Ventaja**: Latencia cero y acceso directo a la red del cluster.

*   **`ubuntu-latest`** (GitHub Hosted):
    *   Runners estándar de GitHub.
    *   **Uso**: Solo para linters, validaciones de código estático (MD, YAML) o tareas que no tocan infraestructura.

## Gestión de Secretos y Variables
La plantilla asume la existencia de ciertos secretos y variables a nivel de organización o repositorio.

### Variables de Entorno Estándar (`env`)
El sistema inyecta o espera las siguientes variables para contexto:
*   `KAOS_MODULE`: Identificador único del proceso.
*   `KAOS_AREA`: Agrupación lógica (ej. `security`, `maintenance`, `ci/cd`).

### Secretos Comunes
*   `KAOS_WORKER_SSH_KEY`: Llave privada para conectar a nodos vía SSH.
*   `KAOS_WORKER_SSH_PASS`: Contraseña para elevación de privilegios (sudo) en nodos.
*   `GH_TOKEN` / `GITHUB_TOKEN`: Token automático para operaciones de Git (commit, push, issues).

## Ciclo de Vida y Notificaciones
La integración del ciclo de vida se basa en la dependencia de jobs.

*   **Mecanismo**: `needs: [job-core]` + `if: success()` o `if: failure()`.
*   **Acciones Futuras**: Está planificado migrar la lógica repetitiva de estos pasos a **Composite Actions** (`.github/actions/kaos-notify-success` y `kaos-notify-failure`) para centralizar el formato de los mensajes y canales de notificación (Slack, Email, Issue).
