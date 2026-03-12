# Reporte Diario de Lead Time

## Descripción
Este documento describe el sistema automatizado para la generación, almacenamiento y visualización del "Lead Time" de los workflows de GitHub Actions en Ka0s.

## Definición de Lead Time
En el contexto de Ka0s, el **Lead Time** se define como el tiempo transcurrido desde que un workflow es creado (`createdAt`) hasta que finaliza su ejecución (`updatedAt`).

> **Fórmula**: `Lead Time = updatedAt - createdAt`

## Arquitectura del Sistema

### 1. Ingesta de Datos
*   **Fuente**: Archivos JSON generados por `audit/inspector`.
*   **Proceso**: El workflow `[Ka0s] Autom add docs to MongoDB` ejecuta el script `add-doc-to-db.py` cada 6 horas.
*   **Transformación**: Durante la ingesta, se calcula el campo `lead_time_minutes` y se almacena en la colección `inspector.col_json`.

### 2. Generación del Reporte
*   **Workflow**: `[Ka0s] Generate Daily Lead Time Report` (`.github/workflows/generate-lead-time-report.yml`).
*   **Frecuencia**: Diaria a las 23:55 UTC.
*   **Runner**: `swarm-runners-scaleset` (Acceso a red interna).
*   **Script**: `devops/core/mongo/scripts/generate-lead-time-report.py`.
*   **Salida**: Archivo Markdown en `audit/lead_time/AAAAMMDD_HHMMSS_RunID_lead-time-report.md`.

### 3. Visualización (Metabase)
Se ha configurado un dashboard en Metabase para visualizar la evolución del Lead Time mediante un mapa de calor.

*   **Query Nativa MongoDB**:
    ```javascript
    [
      { "$match": { "lead_time_minutes": { "$exists": true, "$ne": null }, "data.conclusion": "success" } },
      { "$group": { "_id": { "workflow": "$data.name", "date": { "$dateToString": { "format": "%Y-%m-%d", "date": { "$dateFromString": { "dateString": "$data.createdAt" } } } } }, "avg_lead_time": { "$avg": "$lead_time_minutes" } } },
      { "$sort": { "_id.date": 1 } }
    ]
    ```

## Ubicación de Archivos
*   **Reportes Generados**: [`audit/lead_time/`](../../audit/lead_time/)
*   **Script de Generación**: [`generate-lead-time-report.py`](../../devops/core/mongo/scripts/generate-lead-time-report.py)
*   **Workflow**: [`generate-lead-time-report.yml`](../../.github/workflows/generate-lead-time-report.yml)
