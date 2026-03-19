# RCA: Ka0s Agent Promote Eval Case (run 23319140412)

Run:
- https://github.com/Ka0s-Klaus/ka0s/actions/runs/23319140412
  - Job: `promote` (67826135317)

Fallo:
- Step: `Promote Issue to Eval Case`
- Error:
```text
warning: here-document at line 3 delimited by end-of-file (wanted `PY')
syntax error: unexpected end of file
Process completed with exit code 2.
```

Causa raíz:
- El step usa un heredoc `python - <<'PY'` dentro de `run: |`.
- En GitHub Actions, el script está indentado (espacios) por YAML, por lo que el terminador `PY` no queda al inicio de línea.
- Bash no reconoce el fin del heredoc y termina el script con error.

Fix:
- Evitar heredoc en ese step (usar `python -c` o un script `.py`).
- Pasar `GITHUB_TOKEN` explícitamente al entorno del step.

