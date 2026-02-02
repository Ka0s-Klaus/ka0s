# Guía de Uso y Validación: Workflow Ka0s

## 1. Triggers y Ejecución
El workflow principal se activa automáticamente bajo condiciones específicas:
*   **Eventos**: `push`
*   **Ramas**: `H*` (Hotfix), `F*` (Feature), `RN*` (Release Note)
*   **Rutas**: Archivos con extensiones soportadas (`.html`, `.js`, `.yaml`, `.yml`, `.json`, `.md`, `.py`)

## 2. Proceso de Ejecución (Job Core)
El job `job-core` ejecuta los siguientes pasos críticos:
1.  **Checkout**: Obtiene el código fuente.
2.  **Validación**: Verifica que las extensiones sean válidas para procesar.
3.  **Creación JSON**: Genera un archivo de estado en `core/outputs/` con información detallada del evento.
4.  **Persistencia**: Sube los artefactos generados al repositorio para trazabilidad.
5.  **Activación de Módulos**: Llama condicionalmente a otros workflows (ej. `kaos-lint-json`, `kaos-lint-yaml`) si se detectan archivos correspondientes.

## 3. Manejo de Estados
*   **Éxito**: Notifica la finalización correcta y permite el paso al siguiente stage (Inspector).
*   **Fallo**: Crea un Issue o notificación de error si el procesamiento falla.
*   **Finalización**: Cierra el ciclo y dispara el `kaos_inspector` para análisis profundo.
