# Guía de Uso y Validación: iTop Actions

## 1. Configuración de Triggers
Para conectar un ticket de iTop con una acción:
*   Definir el `trigger` en la configuración de iTop.
*   Mapear los parámetros necesarios (ej. `hostname`, `service_id`).

## 2. Validación
*   **En iTop**: Verificar que el ticket muestra el log de ejecución.
*   **En GitHub**: Verificar la pestaña "Actions" para ver el workflow disparado.

## 3. Resolución de Problemas
Si la acción no se dispara:
1.  Verificar credenciales (PAT) en iTop.
2.  Revisar logs de iTop para errores de conexión.
3.  Confirmar que el workflow existe en la rama `main`.
