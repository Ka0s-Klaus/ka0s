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
