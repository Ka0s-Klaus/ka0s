# Ka0s Workflow Statistics - Uso

## Generación de Reportes
Se ejecuta diariamente (`0 0 * * *`).
Genera archivos JSON y CSV en `audit/workflows/`.

## Validación
Para validar, puedes descargar el último reporte generado y verificar que los datos coincidan con la pestaña "Insights" de GitHub, pero con mucho mayor nivel de detalle (por job/step).
