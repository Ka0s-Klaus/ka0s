# Ejemplo mínimo de Workflow Ka0s

Este ejemplo muestra cómo crear un workflow mínimo conforme a la plantilla base y a los estándares de seguridad 2025 de Ka0s.

## Ejemplo básico (sin commits)

```yaml
name: "[Ka0s] Example Minimal"

on:
  workflow_dispatch:

permissions:
  contents: read

env:
  KAOS_MODULE: "[Ka0S] Example Minimal"
  KAOS_CODE: ${{ github.run_id }}
  KAOS_ACTOR: ${{ github.actor }}

jobs:
  core-execution:
    name: Core Execution
    runs-on: swarm-runners-scaleset
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install GH CLI
        uses: ./.github/actions/install-gh-cli

      - name: Do Work
        run: echo "Hello Ka0s $KAOS_CODE"

  handle-success:
    name: Handle Success
    needs: [core-execution]
    if: success()
    runs-on: swarm-runners-scaleset
    steps:
      - name: Notify Success
        run: echo "✅ $KAOS_MODULE completado correctamente."

  handle-failure:
    name: Handle Failure
    needs: [core-execution]
    if: failure()
    runs-on: swarm-runners-scaleset
    permissions:
      issues: write
      contents: read
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install GH CLI
        uses: ./.github/actions/install-gh-cli
      - name: Create Incident Issue
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          gh issue create \
            --title "[INCIDENT]: Fallo en workflow ${{ github.workflow }}" \
            --label "itop-incident,triage,automated" \
            --body "Módulo: ${{ env.KAOS_MODULE }} | Run: ${{ github.run_id }} | Actor: ${{ github.actor }}"

  end-workflow:
    needs: [handle-success, handle-failure]
    if: always()
    runs-on: swarm-runners-scaleset
    permissions:
      actions: write
      contents: read
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install GH CLI
        uses: ./.github/actions/install-gh-cli
      - name: Trigger Inspector
        env:
          GH_TOKEN: ${{ github.token }}
        run: |
          gh workflow run inspector.yml \
            -f workflow_name="${{ github.workflow }}" \
            -f run_id="${{ github.run_id }}" \
            -f status="${{ job.status }}"
```

## Variación con commits de evidencias

Si necesitas subir artefactos (p. ej., reportes de auditoría), eleva permisos solo en el job que hace commit:

```yaml
jobs:
  core-execution:
    runs-on: swarm-runners-scaleset
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Commit & Push Results
        if: success()
        run: |
          git config --global user.name "${{ secrets.KAOS_BOT_NAME || 'Ka0s Bot' }}"
          git config --global user.email "${{ secrets.KAOS_BOT_EMAIL || 'bot@ka0s.io' }}"
          # git add audit/outputs/*
          if ! git diff --staged --quiet; then
            git commit -m "chore(ka0s): evidencias ${{ env.KAOS_MODULE }} run ${{ env.KAOS_CODE }} [skip ci]"
            git push origin HEAD:${{ github.ref_name }}
          else
            echo "No hay cambios para subir."
          fi
```

## Referencias

- Plantilla base: [basic-template.yaml](file:///Users/yolandabecerro/CodigoKa0s/ka0s/core/templates/workflow/basic-template.yaml)
- Estándares de uso: [02_usage_validation.md](file:///Users/yolandabecerro/CodigoKa0s/ka0s/core/docs/ka0s_template/02_usage_validation.md)
- Integración técnica: [03_integration.md](file:///Users/yolandabecerro/CodigoKa0s/ka0s/core/docs/ka0s_template/03_integration.md)
