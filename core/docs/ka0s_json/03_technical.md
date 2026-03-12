# Ka0s Lint JSON - Integración en el Ecosistema Ka0s

## Rol en la Estrategia de Calidad (Quality Gates)
Ka0s Lint JSON es un componente fundamental de la capa de **Compliance** del proyecto. No es solo una herramienta de formateo, sino un guardián de la calidad que se integra en múltiples puntos del ciclo de vida del software.

### Integración en Workflows de Producción
Actualmente, esta acción se utiliza en:
*   **Ka0s JSON Compliance**: Workflow dedicado a validar todos los archivos JSON del repositorio periódicamente o ante cambios (Push/PR).
*   **Ka0s Compliance Test Suite**: Workflow de regresión que asegura que la propia herramienta de linting funcione correctamente.

## Estandarización
Al centralizar la lógica de linting en `.github/actions/kaos-lint-json`, garantizamos que:
1.  **Consistencia**: Todos los workflows usan la misma versión de `jsonlint` y `prettier` con la misma configuración.
2.  **Mantenibilidad**: Si decidimos cambiar las reglas de estilo (ej. cambiar indentación de 2 a 4 espacios), solo necesitamos actualizar la configuración en un lugar, y la acción propagará el cambio a todo el ecosistema.
3.  **Seguridad**: La ejecución controlada evita la inyección de scripts maliciosos a través de archivos JSON manipulados, ya que el parser valida la estructura antes de cualquier procesamiento.

## Flujo de Trabajo Recomendado
1.  **Desarrollo Local**: El desarrollador crea/edita un JSON.
2.  **Commit/Push**: Se dispara el workflow de compliance.
3.  **Validación**: `kaos-lint-json` verifica el archivo.
    *   Si hay errores de estilo y `fix: true` está activo (en ramas permitidas), se corrige automáticamente y se puede hacer commit de los cambios (dependiendo de la configuración del workflow invocador).
    *   Si hay errores de sintaxis, el pipeline se detiene, impidiendo que código roto llegue a producción (Main/Staging).
