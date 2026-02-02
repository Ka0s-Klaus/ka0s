# Ka0s Lint Markdown - Uso y Validación

## Cómo Usar la Acción
Ideal para workflows de documentación o CI general.

### Ejemplo de Implementación
```yaml
jobs:
  lint-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Lint Documentation
        uses: ./.github/actions/kaos-lint-md
        with:
          file_path: 'README.md'
          fix: 'true' # Recomendado para docs, auto-corrige formato
          path_resume: 'kaos_output/md-lint.txt'
```

### Parámetros (Inputs)
| Input | Descripción | Requerido | Default |
| :--- | :--- | :--- | :--- |
| `file_path` | Ruta al archivo Markdown. | Sí | N/A |
| `fix` | Activa corrección automática. | No | `false` |
| `markdownlint_config` | Configuración de reglas (json/yaml). | No | Default de la herramienta |
| `prettier_config` | Configuración de estilo. | No | `compliance/md/.prettierrc.json` |
| `path_resume` | Archivo de reporte. | Sí | N/A |

## Validación de Funcionalidad
Validada por **Ka0s Compliance Test Suite**.

### Casos de Prueba (`core/test/`)
1.  **Markdown Correcto (`correct-file.md`)**:
    *   Archivo bien estructurado, sin errores de linter.
    *   **Resultado**: Éxito.
2.  **Markdown Incorrecto (`failed-file.md`)**:
    *   Contiene violaciones flagrantes (ej. saltos de encabezados H1 a H3, HTML roto).
    *   **Resultado**: Fallo controlado detectado por el test suite.

### Verificación
El job `test-markdown` en el workflow de compliance ejecuta estas pruebas. Revisa los logs para confirmar que `markdownlint` está reportando los errores correctamente.
