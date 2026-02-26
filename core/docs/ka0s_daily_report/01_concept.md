# 01. Concepto

## Filosofía de "Observabilidad Asíncrona"

En Ka0s, creemos que no basta con saber qué está pasando *ahora* (para eso tenemos Grafana/Zabbix); también necesitamos saber qué pasó *ayer* o *la semana pasada* para entender la evolución del sistema.

Este reporte diario cumple tres funciones críticas:

1.  **Auditoría Pasiva**: Genera evidencia documental de que los sistemas estaban parcheados y funcionales en una fecha dada.
2.  **Detección de "Drift"**: Al comparar reportes de días consecutivos, es fácil ver cuándo un nodo empezó a fallar o cuándo se dispararon las alertas de seguridad.
3.  **Accesibilidad**: Democratiza el acceso al estado del cluster. No hace falta saber usar `kubectl` o tener acceso a la VPN; basta con tener acceso al repositorio de GitHub para ver cómo está la salud del sistema.

## Alcance del Reporte

El reporte cubre las "4 Dimensiones Doradas" del estado estático:
*   **Infraestructura**: Salud de los Nodos (Ready/NotReady).
*   **Consumo**: Top de consumo de CPU/Memoria (para capacity planning).
*   **Estabilidad**: Pods que no están en estado `Running` (CrashLoopBackOff, Error).
*   **Seguridad**: Resumen de vulnerabilidades detectadas por Trivy.

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
