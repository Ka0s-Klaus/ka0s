# Arquitectura: Compliance (Estándares y Gobernanza)

## Descripción General

El directorio `compliance/` actúa como la **Oficina de Estándares y Gobernanza** de Ka0s. Su propósito es centralizar todas las reglas de validación, estilos de código y definiciones de activación de módulos que aseguran la calidad y coherencia del proyecto. No contiene lógica de ejecución, sino las "leyes" que los pipelines deben hacer cumplir.

## Componentes Principales

### 1. Definición de Núcleo (`core/`)
Contiene el archivo `core.json`, que actúa como el registro maestro de módulos del sistema. Define qué componentes (como `audit-host`, `workflow-stats`) están activos o inactivos, permitiendo una gestión dinámica de las capacidades del sistema sin modificar el código de los workflows.

### 2. Estándares por Lenguaje (`html/`, `json/`, `markdown/`, `yaml/`)
Cada subdirectorio define las reglas específicas para un formato de archivo:
- **Reglas de Linter**: Archivos de configuración como `.prettierrc.json` o `.htmllintrc`.
- **Documentación**: Guías de estilo (`README.md`) que explican a los desarrolladores cómo deben escribir el código para pasar las validaciones.

## Integración con Automatización

Este directorio es consumido intensivamente por los workflows de Integración Continua (CI):
- **Workflows de Linting**: `htmllint.yml`, `jsonlint.yml`, etc., leen estas configuraciones para validar Pull Requests.
- **Suite de Tests**: El workflow `kaos-compliance-test.yml` utiliza estos estándares para verificar que las propias acciones de validación funcionan correctamente (metatesting).

## Flujo de Trabajo
1. Un desarrollador sube código.
2. GitHub Actions inicia los procesos de validación.
3. Las herramientas (Prettier, linters) cargan las reglas desde `compliance/<lenguaje>/`.
4. Si el código viola alguna regla definida aquí, el pipeline falla.
