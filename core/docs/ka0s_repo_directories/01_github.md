# `.github/`: workflows, actions y plantillas

## Propósito
Este directorio contiene la automatización del repositorio:
- Workflows de GitHub Actions.
- Actions reutilizables (composición).
- Scripts de soporte.
- Plantillas de issues.

## Subdirectorios clave
- `.github/workflows/`: CI/CD, auditorías, operaciones y agente.
- `.github/actions/`: building blocks reutilizables por workflows.
- `.github/scripts/`: scripts ejecutados por workflows.
- `.github/ISSUE_TEMPLATE/`: formularios y plantillas de issues.

## Patrones Ka0s
- Los workflows dejan evidencia en `audit/`.
- La lógica grande se mueve a `.github/actions/` o `.github/scripts/`.
- Los workflows del agente se disparan por labels/issue events.

## Referencias
- Workflows: `.github/workflows/kaos.yml`, `.github/workflows/ci-core-validate.yml`, `.github/workflows/deploy-docs-portal.yml`.
- Agente: `.github/workflows/kaos-agent-issue-responder.yaml`, `.github/workflows/kaos-agent-eval.yml`, `.github/workflows/kaos-agent-feedback.yml`.
- Scripts: `.github/scripts/update-docs-index.py`.

