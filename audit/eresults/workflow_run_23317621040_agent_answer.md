2026-03-19 22:33:59,266 - INFO - Processing query: ¿Por qué ha fallado https://github.com/Ka0s-Klaus/ka0s/actions/runs/23317621040 ?\n\nWorkflow: Ka0s Audit Failed Pods -> iTop\nStep fallido: Commit Results\n\nContexto (logs):\n2026-03-19T21:24:30.3520321Z git pull --rebase\n2026-03-19T21:24:30.9523788Z error: cannot pull with rebase: You have unstaged changes.\n2026-03-19T21:24:30.9527017Z error: Please commit or stash them.\n2026-03-19T21:24:30.9547140Z ##[error]Process completed with exit code 128.
## Diagnóstico
- El step está ejecutando `git pull --rebase` con cambios locales sin commitear (working tree sucio).
- En este workflow, esos cambios los genera el propio job antes del pull (artefactos en `audit/`).
- Git bloquea el rebase y termina con exit code `128`.

## Qué pasarle al agente
- Sí: el texto del error + el nombre del workflow/job/step o el link del Run.
- Mejor: pega también 20-40 líneas alrededor del fallo (para saber el step exacto).

## Fix recomendado (repo)
- Workflow: `.github/workflows/audit-pods.yml` (step `Commit Results`).
- Solución: hacer autostash antes del `pull --rebase` y restaurar después.

### Ejemplo
- `git stash push -u` → `git pull --rebase` → `git stash pop` → `git add/commit/push`.

