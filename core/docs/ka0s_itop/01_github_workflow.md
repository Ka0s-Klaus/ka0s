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