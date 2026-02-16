# Guía de Uso y Validación de Plantillas

Esta guía explica cómo utilizar la plantilla base para crear nuevos workflows en Ka0s.

## 1. Crear un Nuevo Workflow
Para crear una nueva automatización, no empieces desde un archivo en blanco.

1.  **Copiar la Plantilla**:
    Copia el archivo `core/templates/workflow/basic-template.yaml` a `.github/workflows/tu-nuevo-workflow.yml`.

2.  **Personalizar Metadatos**:
    Edita las variables de entorno al inicio del archivo:
    ```yaml
    env:
      KAOS_MODULE: "nombre-de-tu-modulo" # Ej: "node-update"
      KAOS_AREA: "area-funcional"        # Ej: "infra/k8s"
    ```

3.  **Implementar Lógica (`job-core`)**:
    Localiza el job `job-core` y reemplaza los pasos de ejemplo con tu lógica.
    *   Mantén los pasos de `Checkout` y configuración de entorno.
    *   Si tu lógica es compleja (>10 líneas de script), **extraela** a un script en `.github/scripts/` y llámalo desde el workflow.

4.  **Conectar Ciclo de Vida**:
    Asegúrate de que `handle-success` y `handle-failure` sigan dependiendo (`needs`) de `job-core`.

## 2. Checklist de Calidad
Antes de subir tu workflow, verifica:

*   [ ] **Permisos**: ¿Has definido `permissions`? (Por defecto `contents: read`).
*   [ ] **Runners**: ¿Usas `runs-on: swarm-runners-scaleset` para tareas internas o `ubuntu-latest` solo si no requiere acceso al cluster?
*   [ ] **Secretos**: ¿Usas `${{ secrets.NOMBRE }}`? Nunca hardcodees credenciales.
*   [ ] **Idempotencia**: ¿Qué pasa si el workflow corre dos veces seguidas? (No debería romper nada).
*   [ ] **Limpieza**: ¿Has borrado los comentarios explicativos de la plantilla?

## 3. Validación
Para probar tu workflow sin afectar producción:
1.  Usa el trigger `workflow_dispatch` para lanzarlo manualmente en una rama de prueba.
2.  Verifica que se generen los logs en la pestaña "Actions".
3.  Comprueba que el ciclo de vida (`handle-success`/`failure`) se activa correctamente según el resultado.
