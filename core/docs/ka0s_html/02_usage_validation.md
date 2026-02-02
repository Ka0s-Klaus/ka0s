# Ka0s Lint HTML - Uso y Validación

## Cómo Usar la Acción
Se utiliza en workflows que generen o verifiquen artefactos HTML.

### Ejemplo de Implementación
```yaml
jobs:
  lint-html:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Lint HTML Report
        uses: ./.github/actions/kaos-lint-html
        with:
          file_path: 'reports/dashboard.html'
          fix: 'true'
          path_resume: 'kaos_output/html-lint.txt'
```

### Parámetros (Inputs)
| Input | Descripción | Requerido | Default |
| :--- | :--- | :--- | :--- |
| `file_path` | Ruta al archivo HTML. | Sí | N/A |
| `fix` | Activa corrección automática. | No | `false` |
| `prettier_config` | Configuración de estilo. | No | `compliance/html/.prettierrc.json` |
| `path_resume` | Archivo de reporte. | Sí | N/A |

## Validación de Funcionalidad
Validada por **Ka0s Compliance Test Suite**.

### Casos de Prueba (`core/test/`)
1.  **HTML Correcto (`correct-file.html`)**:
    *   HTML válido con etiquetas cerradas y `<!DOCTYPE html>`.
    *   **Resultado**: Pasa la validación.
2.  **HTML Incorrecto (`failed-file.html`)**:
    *   Errores estructurales (ej. `<div>` sin cerrar).
    *   **Resultado**: La acción falla, el test suite confirma el fallo esperado.

### Verificación
Observa el job `test-html` en la ejecución del workflow de compliance. Verifica que `htmlhint` detecte los errores en el archivo fallido.
