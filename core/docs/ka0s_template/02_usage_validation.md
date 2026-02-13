# Uso y Validación de Plantillas

Esta guía explica cómo utilizar la plantilla base para crear nuevos workflows en Ka0s.

## 1. Instanciación de un Nuevo Workflow

No empieces desde un archivo en blanco. Sigue estos pasos:

1.  **Copiar la Plantilla**:
    ```bash
    cp core/templates/workflow/basic-template.yaml .github/workflows/mi-nuevo-proceso.yml
    ```

2.  **Personalizar Metadatos**:
    *   Edita `name`: `[Ka0s] Mi Nuevo Proceso`.
    *   Edita `env.KAOS_MODULE`: `[Ka0S] Process Name`.

3.  **Definir Triggers (`on`)**:
    *   ¿Es manual? Mantén `workflow_dispatch`.
    *   ¿Es automático? Configura `push` (paths/branches) o `schedule`.

4.  **Implementar Lógica (`core-execution`)**:
    *   Sustituye el paso "Main Logic" por tus scripts o acciones.
    *   **Importante**: Usa siempre `runs-on: swarm-runners-scaleset`.

## 2. Reglas de Validación

Antes de subir tu nuevo workflow, verifica:

*   [ ] **Permisos Mínimos**: ¿Has ajustado `permissions:` a lo estrictamente necesario?
*   [ ] **Secretos**: ¿Usas `${{ secrets.VAR }}` en lugar de hardcodear valores?
*   [ ] **Idempotencia**: ¿Puede tu workflow correr dos veces sin romper nada?
*   [ ] **Limpieza**: ¿El paso `end-workflow` está presente y configurado con `if: always()`?

## 3. Ejemplo de Implementación

Si quisieras hacer un workflow que compruebe la salud de un servicio web:

```yaml
jobs:
  core-execution:
    steps:
      - name: Check Health
        run: |
          curl -f https://mi-servicio.ka0s.io/health || exit 1
```
