# Ka0s Lint JSON - Uso y Validación

## Cómo Usar la Acción
Para integrar Ka0s Lint JSON en un workflow, utiliza la cláusula `uses` apuntando al directorio de la acción local.

### Ejemplo de Implementación
```yaml
jobs:
  lint-json:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Lint JSON File
        uses: ./.github/actions/kaos-lint-json
        with:
          file_path: 'path/to/file.json'
          fix: 'false'  # Set to 'true' para habilitar Self-Healing
          path_resume: 'kaos_output/lint-results.txt'
```

### Parámetros (Inputs)
| Input | Descripción | Requerido | Default |
| :--- | :--- | :--- | :--- |
| `file_path` | Ruta relativa al archivo JSON a validar. | Sí | N/A |
| `fix` | Habilita el modo Self-Healing (`true`/`false`). | No | `false` |
| `prettier_config` | Ruta al archivo de configuración de Prettier. | No | `compliance/json/.prettierrc.json` |
| `path_resume` | Ruta donde se escribirá el log de resultados. | Sí | N/A |

## Validación de Funcionalidad
La funcionalidad de esta acción se valida automáticamente a través del workflow **Ka0s Compliance Test Suite** (`.github/workflows/kaos-compliance-test.yml`).

### Metodología de Prueba
El test suite ejecuta la acción contra dos tipos de archivos controlados ubicados en `core/test/`:
1.  **Positive Test (`correct-file.json`)**:
    *   Archivo con sintaxis y estilo perfectos.
    *   **Resultado Esperado**: Éxito (Success).
2.  **Negative Test (`failed-file.json`)**:
    *   Archivo con errores de sintaxis intencionales.
    *   **Resultado Esperado**: Fallo (Failure).
    *   *Nota*: El test suite verifica que la acción *falle* correctamente cuando debe hacerlo.

### Verificación Manual
Para verificar manualmente:
1.  Ejecuta el workflow de compliance:
    ```bash
    gh workflow run "Ka0s Compliance Test Suite"
    ```
2.  Revisa los logs del job `test-json` para confirmar que las validaciones y el reporte de errores funcionan según lo esperado.
