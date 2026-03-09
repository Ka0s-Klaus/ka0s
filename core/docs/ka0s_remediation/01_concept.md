# Ka0s Remediation

Este módulo define los procesos y herramientas para la remediación automática y asistida de incidentes en la plataforma Ka0s.

## Concepto

La remediación en Ka0s no es solo "reiniciar cosas". Es un flujo estructurado que:
1.  **Diagnostica**: Recopila evidencias (logs, métricas) antes de actuar.
2.  **Ejecuta**: Aplica una corrección predefinida y probada (idempotente).
3.  **Verifica**: Confirma que la salud del sistema se ha restaurado.
4.  **Reporta**: Registra la acción en la Issue o Ticket correspondiente (GitHub/iTop).

## Tipos de Remediación

### 1. Remediación Asistida (Triggered)
Ejecutada por un operador humano o desde un sistema externo (iTop) mediante `workflow_dispatch`.
*   **Caso de Uso**: Un operador de iTop recibe una alerta, valida, y pulsa un botón que dispara el workflow de GitHub.

### 2. Autoremediación (Autonomous) - *Próximamente*
Ejecutada automáticamente por el sistema al detectar condiciones específicas (ej. etiqueta `auto-remediate` en una Issue).
*   **Caso de Uso**: Prometheus detecta `HighCPU`, crea una alerta -> Issue -> GitHub Actions detecta la etiqueta y ejecuta el script de limpieza.

## Componentes

*   **Workflows**: Ubicados en `.github/workflows/remediation-*.yml`.
*   **Scripts**: Ubicados en `devops/remediation/`. Scripts idempotentes (Bash/Python).
*   **Runner**: Ejecutados en `swarm-runners-scaleset` para tener acceso a la red interna (SSH a nodos).
