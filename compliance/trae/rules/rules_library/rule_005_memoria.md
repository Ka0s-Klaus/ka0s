# Regla 005: Persistencia de Contexto (Memoria)

Garantizar que el conocimiento generado en una sesión no se pierda al cerrar el contexto del agente.

## Mandato de Cierre
Al finalizar una sesión de desarrollo significativa (diseño, configuración, implementación compleja), DEBES generar un **Registro de Sesión**.

## Especificaciones
- **Disparador**: Comando verbal "Ejecuta el protocolo de cierre de sesión".
- **Ruta**: `audit/trash/conversations/AAAAMMDD_HHMMSS.md`.
- **Plantilla**: Usar `core/docs/templates/session_log_template.md`.

## Uso
Antes de iniciar una nueva tarea compleja, el agente DEBE consultar esta carpeta (`audit/trash/conversations/`) para recuperar contexto previo relevante y evitar duplicidad de esfuerzos.
