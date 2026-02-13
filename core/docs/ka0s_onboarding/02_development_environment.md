# Entorno de Desarrollo (Local Development Environment)

Un entorno de desarrollo estandarizado reduce el "works on my machine" a cero.

## 1. Configuración del Editor (Trae / VSCode)

Recomendamos encarecidamente usar **Trae** o **VSCode** con las siguientes configuraciones. El proyecto incluye una carpeta `.vscode` (o equivalente) sugerida, pero asegúrate de tener estas extensiones:

### Extensiones Obligatorias
*   **YAML** (Red Hat): Para validación de esquemas de K8s y GitHub Actions.
*   **Markdown All in One**: Para mantener la documentación sana.
*   **Python**: Para soporte de intellisense en scripts.
*   **EditorConfig**: Para respetar los estilos de indentación definidos en `.editorconfig`.

### Configuración del Workspace
Asegúrate de que tu editor respete:
*   Indentación: 2 espacios para YAML/JSON/JS, 4 espacios para Python.
*   Final de línea: LF (Unix style).
*   Trim trailing whitespace: Activado.

## 2. Herramientas de Calidad (Linters)

Ka0s utiliza varios linters que se ejecutan en CI. Para evitar fallos en el pipeline, ejecútalos localmente.

### Markdown (`markdownlint`)
Usamos reglas estrictas para la documentación.
```bash
# Ejecutar linter sobre docs
npx markdownlint-cli "core/docs/**/*.md"
```

### YAML (`yamllint`)
Crítico para Kubernetes y GitHub Actions.
```bash
# Usando la configuración del proyecto
yamllint -c core/config/kaos-yamllint-config.yaml .
```

### Python (`pylint` / `flake8`)
Para los scripts de automatización.
```bash
pylint .github/scripts/*.py
```

## 3. Scripts de Utilidad

En `.github/scripts/` encontrarás herramientas que te hacen la vida más fácil. No reinventes la rueda.

*   **`update-docs-index.py`**:
    *   *Uso*: `python3 .github/scripts/update-docs-index.py`
    *   *Cuándo*: SIEMPRE que añadas, borres o muevas un archivo Markdown en `core/docs`. Actualiza los índices automáticamente.

*   **`generate-cluster-report.sh`**:
    *   *Uso*: Genera una "foto" del estado actual del cluster (requiere acceso a kubectl).

## 4. Pre-commit Hooks (Recomendado)

Aunque no imponemos hooks automáticos (todavía), se recomienda configurar un pre-commit local para ejecutar los linters antes de hacer push.

```bash
# Ejemplo simple en .git/hooks/pre-commit
#!/bin/sh
echo "Running Linters..."
yamllint -c core/config/kaos-yamllint-config.yaml .
if [ $? -ne 0 ]; then
 echo "YAML Lint failed!"
 exit 1
fi
```
