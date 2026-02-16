# Detallaremos el uso de las variables y sus contenidos

## ORGS

## REPO

### Auditoría automática de secretos

Ka0s incluye un mecanismo de auditoría para los secretos definidos en el repositorio y su uso real en los flujos de trabajo y scripts.

- Script de auditoría: `.github/scripts/check-secrets-usage.py`.
- Workflow asociado: `Ka0s Secrets Audit` (`.github/workflows/ka0s-secrets-audit.yml`).

La auditoría realiza las siguientes comprobaciones:

- Lista los secretos definidos en GitHub para el repositorio.
- Detecta los secretos usados en:
  - Workflows de GitHub (`.github/workflows`).
  - Acciones locales (`.github/actions`).
  - Scripts de soporte (`.github/scripts`).
  - Scripts DevOps (`devops/`).
- Calcula y muestra:
  - Secrets definidos pero sin uso detectado.
  - Secrets usados en código pero no definidos en GitHub.

#### Ejecución del workflow

- Desde la pestaña **Actions** de GitHub, seleccionar `Ka0s Secrets Audit`.
- Lanzar la ejecución manualmente mediante `Run workflow`.

El resultado se muestra en los logs del job e incluye un resumen en formato JSON para posibles integraciones adicionales.
