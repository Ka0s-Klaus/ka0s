# Regla 008: Scripting Seguro (Python/Bash)

Estándares para scripts de automatización en `.github/scripts/` o `devops/`.

## 1. Python
- **Type Hinting**: Obligatorio en firmas de función.
- **Linter**: Debe pasar `flake8` o cumplir PEP8.
- **Errores**: Manejo explícito de excepciones (`try/except`). No dejar fallar silenciosamente.

## 2. Bash
- **Header**: `#!/bin/bash` y `set -e` (o `set -euo pipefail`) al inicio para detener ejecución ante errores.
- **Variables**: Siempre entre comillas `"$VAR"` para evitar word splitting.

## 3. Credenciales
- **PROHIBIDO**: Hardcodear passwords o tokens.
- **Método**: Usar variables de entorno (`os.environ`, `$ENV_VAR`) inyectadas desde Secrets.
