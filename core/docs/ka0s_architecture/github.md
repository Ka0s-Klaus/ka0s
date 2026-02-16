# Arquitectura: .github (Motor de Automatización)

## Descripción General

El directorio `.github/` actúa como el **Sistema Nervioso y Motor de Automatización** de Ka0s. Aprovechando la potencia de GitHub Actions, transforma un repositorio estático en una plataforma dinámica capaz de auto-gestionarse, desplegarse y auditarse. Sigue estrictamente los principios de **"Everything as Code"**.

## Estructura de Automatización

### 1. Workflows (`.github/workflows/`) - Los Orquestadores
Son los archivos YAML que definen *cuándo* y *qué* debe ejecutarse. Se clasifican en:
- **CI/CD**: `ci-k8s-validate.yml`, `cd-core-services.yml` (validación y despliegue).
- **Auditoría**: `audit-cluster-status.yml`, `inspector.yml` (observabilidad activa).
- **Operaciones**: `kaos-cluster-restart.yml`, `ops-node-management.yml` (gestión de infraestructura).
- **Gobernanza**: `kaos.yml`, `execution.yml` (gestión del propio repo y issues).

### 2. Actions Locales (`.github/actions/`) - Las Habilidades
Para mantener los workflows limpios (DRY - Don't Repeat Yourself), la lógica compleja se encapsula en "Composite Actions":
- **`ssh-exec`**: Abstracción segura para ejecutar comandos en nodos remotos.
- **`install-gh-cli`**: Configuración de herramientas comunes.
- **`kaos-lint-*`**: Acciones modulares para validación de sintaxis.

### 3. Scripts (`.github/scripts/`) - Las Herramientas
Scripts auxiliares (Python, Bash) invocados por los workflows para tareas que exceden la complejidad de un comando de una línea en YAML.
- Ejemplos: `generate-cluster-report.sh`, `update-docs-index.py`.

## Principios de Diseño
- **Seguridad**: Uso estricto de secretos (`${{ secrets }}`) y permisos mínimos.
- **Modularidad**: Preferencia por Actions locales sobre pasos `run:` extensos.
- **GitOps**: Los workflows reaccionan a eventos del repositorio (Push, Issue, Schedule) para alterar el estado del sistema real.
