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

## 4. Estándares de Implementación

### 4.1. Nomenclatura de Archivos de Salida
Para garantizar la trazabilidad y unicidad de los artefactos generados por los workflows (logs, reportes, estadísticas), se DEBE seguir estrictamente el siguiente formato de nomenclatura:

`AAAAMMDD_HHMMSS_WorkflowID_nombre_del_servicio.extension`

**Componentes:**
1.  **Timestamp**: `AAAAMMDD_HHMMSS` (AñoMesDía_HoraMinutoSegundo).
    *   *Fuente*: `date +%Y%m%d_%H%M%S` (en shell) o equivalente en otros lenguajes.
    *   *Propósito*: Ordenación cronológica natural.
2.  **Workflow ID**: `WorkflowID` (Identificador único de la ejecución).
    *   *Fuente*: `${{ github.run_id }}` (Contexto de GitHub Actions).
    *   *Propósito*: Enlace directo a la ejecución específica en GitHub Actions para depuración.
3.  **Nombre del Servicio**: `nombre_del_servicio` (Descripción breve del contenido).
    *   *Ejemplos*: `cluster-report`, `mdlint`, `security-audit`.
    *   *Propósito*: Identificación rápida del tipo de artefacto.

**Ejemplo de Implementación en Workflow:**

```yaml
- name: Calculate Timestamp
  id: calculate-timestamp
  run: echo "TIMESTAMP=$(date +'%Y%m%d_%H%M%S')" >> $GITHUB_ENV

- name: Generate Report
  run: |
    FILENAME="${{ env.TIMESTAMP }}_${{ github.run_id }}_my-service-report.md"
    ./generate-report.sh > "$FILENAME"
```

## Principios de Diseño
- **Seguridad**: Uso estricto de secretos (`${{ secrets }}`) y permisos mínimos.
- **Modularidad**: Preferencia por Actions locales sobre pasos `run:` extensos.
- **GitOps**: Los workflows reaccionan a eventos del repositorio (Push, Issue, Schedule) para alterar el estado del sistema real.
