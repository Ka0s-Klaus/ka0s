# RCA: run 23319831479 (Ka0s Agent Promote Eval Case)

Run:
- https://github.com/Ka0s-Klaus/ka0s/actions/runs/23319831479

Estado:
- Workflow: `Ka0s Agent Promote Eval Case`
- Job: `promote` (id `67828426560`)
- Step fallido: `Run Offline Eval`

Causa raíz:
- `core/ai/eval/run_eval.py` ejecuta `core/ai/inference/query.py`.
- En el runner no está instalada la dependencia `psycopg2`, por lo que `query.py` falla al importar:
  - `ModuleNotFoundError: No module named 'psycopg2'`

Impacto:
- Se marcan como FAIL múltiples casos de eval (todos los que invocan `query.py`).
- Los steps `Create PR` y `Comment Back` quedan `skipped`.

Fix:
- Añadir `pip install psycopg2-binary requests` antes de `python core/ai/eval/run_eval.py`.

