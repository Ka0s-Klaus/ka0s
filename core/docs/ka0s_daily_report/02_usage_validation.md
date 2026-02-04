# 02. Uso y Validación

## Ejecución Automática
El workflow está programado mediante cron:
```yaml
schedule:
  - cron: '0 0 * * *'
```
Esto garantiza que cada día, al inicio de la jornada (UTC), el reporte se genere sin intervención humana.

## Ejecución Manual (On-Demand)
Si necesitas generar un reporte *ahora mismo* (por ejemplo, antes o después de una intervención crítica):

1.  Ve a la pestaña **Actions** en GitHub.
2.  Selecciona el workflow **Daily Cluster Status Report**.
3.  Haz clic en **Run workflow**.

## Validación de Resultados
El éxito del proceso se valida por la existencia del fichero generado.

1.  Navega en el repositorio a la carpeta `audit/daily-reports/`.
2.  Debe existir un fichero con la fecha de hoy: `report-YYYY-MM-DD.md`.
3.  El contenido debe estar en formato Markdown renderizable y contener las 4 secciones principales.

### Ejemplo de Salida Esperada
```markdown
# 📊 Ka0s Cluster Daily Report - 2025-02-04

## 🖥️ Estado de los Nodos
| Nombre | Estado | Roles | Versión |
|--------|--------|-------|---------|
| k8-manager | Ready | control-plane | v1.32.11 |
...
```
