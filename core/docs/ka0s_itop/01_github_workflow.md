# Paso 1: Configuración del Workflow de GitHub

Para que un workflow de GitHub Actions pueda ser disparado por un evento externo como una llamada desde iTop, es necesario configurarlo con el evento `workflow_dispatch`.

Este evento expone un endpoint en la API de GitHub que permite la ejecución manual del workflow y la posibilidad de pasarle parámetros (`inputs`).

## Ejemplo de Workflow

A continuación se muestra un ejemplo basado en el fichero <mcfile name="itop-triggered-workflow.yml" path="/Users/santale/ka0s-klaus/ka0s/.github/workflows/itop-triggered-workflow.yml"></mcfile> de este repositorio:

```yaml
name: iTop Triggered Workflow

on:
  workflow_dispatch:
    inputs:
      itop_ticket_id:
        description: 'ID del ticket de iTop'
        required: true
        default: 'N/A'
      itop_ticket_title:
        description: 'Título del ticket de iTop'
        required: true
        default: 'N/A'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Muestra la información del ticket
        run: |
          echo "Workflow disparado desde iTop."
          echo "ID del Ticket: ${{ github.event.inputs.itop_ticket_id }}"
          echo "Título del Ticket: ${{ github.event.inputs.itop_ticket_title }}"
```

## Workflow de sincronización desde GitHub hacia iTop (`github-sync-itop.yml`)

Además del disparo directo desde iTop, Ka0s incluye un flujo que observa la actividad de Issues en GitHub y la replica hacia iTop de forma automática.

### Disparadores

Definidos en <mcfile name="github-sync-itop.yml" path="/Users/santale/ka0s-klaus/ka0s/.github/workflows/github-sync-itop.yml"></mcfile>:

```yaml
on:
  issues:
    types: [opened, edited, closed]
  issue_comment:
    types: [created]
```

Esto permite que cualquier creación/edición/cierre de Issue, así como nuevos comentarios, generen un evento de sincronización hacia iTop.

### Job Principal (`sync-to-itop`)

- Runner: `swarm-runners-scaleset`.
- Pasos clave:
  - `actions/checkout@v4` con `GITHUB_TOKEN`.
  - `actions/setup-python@v4` (Python 3.10).
  - Instalación de dependencias (`pip install requests`).
  - Ejecución del script `.github/scripts/github-sync-itop.py`, que:
    - Lee los detalles del evento (`issue`, `comment`, `repository`).
    - Llama a la API de iTop usando `ITOP_URL`, `ITOP_API_USER`, `ITOP_API_PASSWORD`.
    - Escribe un resultado estructurado en `result.json`.

Variables de entorno principales del paso de sincronización:

- `ITOP_URL`: URL base de iTop.
- `ITOP_API_USER` / `ITOP_API_PASSWORD`: credenciales del usuario API.
- `GITHUB_EVENT_NAME`: tipo de evento (`issues` o `issue_comment`).
- `GITHUB_EVENT_ACTION`: acción concreta (ej. `opened`, `edited`, `closed`, `created`).
- `GITHUB_ISSUE_PAYLOAD`: payload completo del Issue.
- `GITHUB_COMMENT_PAYLOAD`: payload del comentario (si existe).
- `GITHUB_REPO_FULL_NAME`: repositorio origen `<owner>/<repo>`.

### Auditoría y evidencias (`audit/sync`)

Tras la ejecución del script, el workflow:

1. Comprueba si `result.json` existe y tiene contenido.
2. Usa `jq` para extraer `github_ref` del JSON y derivar el número de Issue.
3. Mueve el fichero a `audit/sync/<timestamp>_issue_<ISSUE>.json`.
4. Realiza commit automático del nuevo fichero bajo `audit/sync/` usando la identidad de bot (`KAOS_BOT_NAME`/`KAOS_BOT_EMAIL`).

Este diseño garantiza trazabilidad completa de todas las sincronizaciones entre GitHub e iTop.
