# Feedback humano: circuito Good/Bad

## Objetivo
Cerrar el loop entre:
- Respuesta del agente en una issue.
- Evaluación humana (buena/mala).
- Evidencia trazable en el repo.
- Acción concreta para mejorar (promoción a batería, o ajuste del router/casos).

Este circuito está pensado para **iteración rápida** en issues y para **evitar regresiones** convirtiendo lo aprendido en tests.

## Dónde aplica
- Issues (no PRs).
- Recomendado para Eval Cards: issues con label `ka0s-agent-eval`.

## Comandos
Escribe el comando como primera línea de tu comentario.

- Bueno:
  - `/feedback good`
  - `/feedback good : <notas>`
- Malo:
  - `/feedback bad`
  - `/feedback bad : <notas>`

Opcional:
- `/feedback good promote : <notas>` marca que ya está listo para promoción (aun así, el paso de promoción sigue siendo añadir `ka0s-agent-promote-eval`).

## Qué se genera
Al recibir `/feedback ...` se ejecuta el workflow `.github/workflows/kaos-agent-feedback.yml` y genera un archivo en:
- `audit/feedback/<timestamp>_<run_id>_issue-<n>_<good|bad>.md`

Ese archivo incluye:
- Repo/issue/run/time.
- Autor del feedback.
- Rating y notas.
- Título + cuerpo de la issue (la pregunta).
- La última respuesta del agente (comentario de `github-actions` que contiene “Ka0s Agent”).

## Flujo completo
1) Crear/usar una Eval Card (issue con label `ka0s-agent-eval`).
2) Dejar que el agente responda.
3) Comentar `/feedback good|bad : ...`.
4) El workflow:
   - Genera `audit/feedback/...md`.
   - Lo sube a una rama `feedback/issue-<n>-<run_id>`.
   - Responde en la issue con:
     - Ruta de evidencia.
     - Link de PR (ver siguiente sección).

## Limitación conocida: PRs desde GitHub Actions
En este repo, GitHub Actions **no puede crear PRs** (restricción “createPullRequest”).

Por eso el workflow hace fallback:
- Si no puede crear PR automáticamente, deja un link directo a:
  - `https://github.com/<org>/<repo>/pull/new/<branch>`

Ese link abre el formulario para crear el PR manualmente, con la rama ya subida y la evidencia lista.

## Guía de uso (prueba programada)
Cuando hagamos la prueba:
- En una issue con label `ka0s-agent-eval`, publicar:
  - `/feedback good : ok`.
  - `/feedback bad : falta X`.
- Verificar en la issue que el bot devuelve:
  - `Evidencia: audit/feedback/...`
  - `PR: https://github.com/.../pull/new/feedback/issue-...`
- Abrir el PR desde ese link y comprobar que contiene exactamente 1 archivo en `audit/feedback/`.

## Archivos de referencia
- Workflow: `.github/workflows/kaos-agent-feedback.yml`
- Script: `.github/scripts/capture-agent-feedback.py`
- Template Eval Card: `.github/ISSUE_TEMPLATE/agent_eval_card.yml`

