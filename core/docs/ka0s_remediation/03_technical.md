# Integración y Desarrollo

Para añadir una nueva capacidad de remediación al framework Ka0s:

## 1. Crear el Script de Remediación
Crea un script en `devops/remediation/`. Debe aceptar argumentos estándar y generar logs estructurados.

**Ejemplo (`restart-service.sh`):**
```bash
#!/bin/bash
SERVICE=$1
LOG_FILE=$2

echo "[INFO] Iniciando reinicio de $SERVICE..." >> $LOG_FILE
systemctl restart $SERVICE
if systemctl is-active --quiet $SERVICE; then
  echo "[OK] Servicio reiniciado correctamente." >> $LOG_FILE
else
  echo "[ERROR] Fallo al reiniciar servicio." >> $LOG_FILE
  exit 1
fi
```

## 2. Crear el Workflow
Crea un archivo `.github/workflows/remediation-<nombre>.yml`.

### Plantilla Base
Usa `remediation-high-load.yml` como referencia. Asegúrate de incluir:
*   `workflow_dispatch` con inputs claros.
*   Paso de generación de nombre de log único.
*   Uso de `ssh-exec` para correr el script en el nodo remoto.
*   Lógica de reporte a Issue (comentario con `gh issue comment`).
*   Manejo de éxito/fallo (`handle-success`, `handle-failure`).

## 3. Registrar en Documentación
Actualiza este módulo de documentación para incluir la nueva capacidad.

## 4. (Opcional) Vincular a iTop
Configura el disparador en iTop para llamar a este nuevo workflow mediante webhook o script PHP.
