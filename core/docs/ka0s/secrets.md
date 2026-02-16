# Detallaremos el uso de las variables y sus contenidos

## ORGS

## REPO

### Auditoría automática de secretos

Ka0s incluye un mecanismo de auditoría para los secretos definidos en el repositorio y su uso en los flujos de trabajo publicados.

- Workflow asociado: `Ka0s Secrets Audit` (`.github/workflows/ka0s-secrets-audit.yml`).

La auditoría realiza las siguientes comprobaciones:

- Lista los secretos definidos en GitHub para el repositorio.
- Detecta los secretos usados en los workflows de GitHub (`.github/workflows`).
- Calcula y muestra los secrets definidos pero sin uso detectado en los workflows.

#### Ejecución del workflow

- Desde la pestaña **Actions** de GitHub, seleccionar `Ka0s Secrets Audit`.
- Lanzar la ejecución manualmente mediante `Run workflow`.

El resultado se muestra en los logs del job e incluye el listado de secretos definidos y los que no se usan en los workflows.
