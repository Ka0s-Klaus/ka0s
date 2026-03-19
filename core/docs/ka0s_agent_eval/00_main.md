# Ka0s Agent: Batería de pruebas y mejora iterativa

## Objetivo
Iterar pregunta a pregunta (issue a issue) hasta que el agente responda con calidad constante, y convertir cada mejora en un **caso de evaluación** para evitar regresiones.

## Flujo recomendado (Issue Driven)
1) Crear una issue con etiqueta `ka0s-agent` para que el agente responda.
2) Editar la misma issue refinando la pregunta/criterios hasta estar satisfecho.
3) Cuando esté OK, promover esa issue a un caso de evaluación (suite).
4) CI valida que las respuestas offline deterministas siguen pasando.

## Suites de evaluación
Los casos se agrupan por intención para escalar el entrenamiento de forma ordenada.

- `core/ai/eval/eval_cases.json`: casos generales (pocos, de alto valor).
- `core/ai/eval/suites/rules.json`: preguntas sobre reglas/políticas.
- `core/ai/eval/suites/skills.json`: preguntas sobre skills (cómo aplicar, límites, rutas).
- `core/ai/eval/suites/docs.json`: preguntas sobre `core/docs` y documentación viva.

Cada caso debe incluir:
- `name`: identificador estable.
- `query`: texto de la pregunta.
- `mode`: `offline` para no depender de infra.
- `must_contain`: strings mínimos que deben aparecer (rutas, reglas, nombres de workflows).

## Reglas de oro (para respuestas “entrenables”)
- Pedir **rutas exactas** del repo (ayuda a validar).
- Pedir **evidencia en audit/** cuando aplique.
- Pedir **verificación mínima** (lint/dry-run/workflow_dispatch).

## Validación
- Local: `python core/ai/eval/run_eval.py`
- CI: `.github/workflows/kaos-agent-eval.yml`

