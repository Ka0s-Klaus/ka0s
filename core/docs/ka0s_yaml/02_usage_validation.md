# Ka0s Lint YAML - Uso y Validación

## Cómo Usar la Acción
Esta acción está diseñada para ser invocada desde cualquier workflow que manipule o verifique archivos YAML.

### Ejemplo de Implementación
```yaml
jobs:
  lint-yaml:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Lint YAML Configuration
        uses: ./.github/actions/kaos-lint-yaml
        with:
          file_path: 'core/config/settings.yaml'
          fix: 'false'
          yamllint_config: 'core/config/kaos-yamllint-config.yaml'
          path_resume: 'kaos_output/yaml-lint.log'
```

### Parámetros (Inputs)
| Input | Descripción | Requerido | Default |
| :--- | :--- | :--- | :--- |
| `file_path` | Ruta al archivo YAML. | Sí | N/A |
| `fix` | Activa corrección automática. | No | `false` |
| `yamllint_config` | Configuración de reglas para yamllint. | No | `core/config/kaos-yamllint-config.yaml` |
| `prettier_config` | Configuración de estilo para prettier. | No | `compliance/yaml/.prettierrc.json` |
| `path_resume` | Archivo de salida para logs. | Sí | N/A |

## Validación de Funcionalidad
Validada por **Ka0s Compliance Test Suite** (`.github/workflows/kaos-compliance-test.yml`).

### Casos de Prueba (`core/test/`)
1.  **YAML Correcto (`correct-file.yaml`)**:
    *   Cumple estrictamente con las reglas de `yamllint` y el estilo de `prettier`.
    *   **Resultado**: Paso exitoso del job `test-yaml`.
2.  **YAML Incorrecto (`failed-file.yaml`)**:
    *   Contiene errores de sintaxis (ej. indentación inválida).
    *   **Resultado**: La acción reporta el error y sale con código 1. El test suite verifica que este fallo ocurra.

### Ejecución Manual
```bash
# Ejecutar test suite
gh workflow run "Ka0s Compliance Test Suite"

# Ver logs específicos de YAML
gh run view <run-id> --job test-yaml --log
```
