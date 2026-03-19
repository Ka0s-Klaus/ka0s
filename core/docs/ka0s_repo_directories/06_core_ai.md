# `core/ai/`: agente, evaluación y memoria

## Propósito
Centraliza la parte “inteligente” del proyecto:
- Entrada de inferencia del agente.
- Batería de evaluación (regresión).
- Memoria/ingest para pipeline de conocimiento.

## Subdirectorios clave
- `core/ai/inference/`: entrypoint del agente (`query.py`).
- `core/ai/eval/`: eval cases, suites y runner.
- `core/ai/memory/`: ingesta + cronjob/pipeline.
- `core/ai/capabilities/`: registro de capacidades.

## Archivos clave
- `core/ai/inference/query.py`
- `core/ai/eval/run_eval.py`
- `core/ai/eval/eval_cases.json`
- `core/ai/eval/suites/*.json`
- `core/ai/capabilities/registry.json`

