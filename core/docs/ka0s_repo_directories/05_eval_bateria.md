# Batería de pruebas del agente (eval)

## Objetivo
Validar de forma repetible que el Ka0s Agent responde correctamente a preguntas frecuentes (incluyendo estructura del repo y directorios) y que no rompe comportamientos ya fijados.

## Dónde vive
- Casos base: `core/ai/eval/eval_cases.json`.
- Suites: `core/ai/eval/suites/*.json`.
- Runner: `core/ai/eval/run_eval.py`.

## Qué valida
Cada caso define:
- `query`: la pregunta que se hace al agente.
- `mode`: normalmente `offline` para respuestas deterministas o basadas en repo/reglas.
- `must_contain`: substrings que deben aparecer en la salida.

## Cómo ejecutar (local)
Desde la raíz del repo:
- `python core/ai/eval/run_eval.py`

El runner ejecuta `core/ai/inference/query.py` para cada caso y falla si falta algún `must_contain`.

## Cómo ampliar la batería
1) Añade un caso en una suite nueva o existente (preferible por tema): `core/ai/eval/suites/<tema>.json`.
2) Mantén queries cortas y específicas.
3) Usa `must_contain` con rutas clave del repo y headers del formato esperado.
4) Ejecuta `python core/ai/eval/run_eval.py` y guarda evidencia en `audit/eresults/`.

