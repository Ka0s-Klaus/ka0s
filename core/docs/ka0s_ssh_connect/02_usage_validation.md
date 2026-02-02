# Ka0s SSH Connect - Uso

## Inputs Requeridos
*   `script-path`: Ruta relativa del script en el repo (ej. `scripts/audit.sh`).
*   `results-path`: Dónde guardar los artefactos recuperados.

## Ejemplo de Llamada
```yaml
uses: ./.github/actions/ssh-exec
with:
  script-path: 'core/check_disk.sh'
```

## Validación
Si el paso finaliza en verde, la conexión fue exitosa y el script retornó código de salida 0. Revisa los artefactos subidos al run.
