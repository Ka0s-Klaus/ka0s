# Visualización de Lead Time en Metabase (Heatmap)

Este documento describe cómo configurar una visualización de **Mapa de Calor (Heatmap)** en Metabase para analizar el "Lead Time" (tiempo de ejecución) de los workflows de GitHub Actions, utilizando los datos ingestados en MongoDB.

## 1. Requisitos Previos
*   Tener configurada la conexión a MongoDB en Metabase.
*   Haber ejecutado el workflow `add-doc-to-db.yml` al menos una vez con la nueva lógica que calcula `duration_seconds`.

## 2. Estructura de Datos
Los documentos en la colección `inspector.col_json` ahora incluyen los siguientes campos clave para el análisis:
*   `data.name`: Nombre del Workflow.
*   `duration_seconds`: Duración total de la ejecución en segundos.
*   `lead_time_minutes`: Duración en minutos (para facilitar la lectura).
*   `import_date`: Fecha de ingesta (aproximación de la fecha de ejecución).
*   `data.conclusion`: Estado final (`success`, `failure`).

## 3. Crear la Pregunta (Query) en Metabase

### Paso A: Selección de Datos
1.  Crea una nueva **Pregunta**.
2.  Selecciona la base de datos **Mongo** (o como se llame tu conexión).
3.  Elige la colección `inspector.col_json` (o `audit.col_json` según tu configuración).

### Paso B: Filtrado y Agregación
1.  **Filtrar**:
    *   `data.name` no es nulo.
    *   `duration_seconds` es mayor que 0.
    *   (Opcional) `data.conclusion` es `success` (si solo te interesan ejecuciones exitosas).

2.  **Resumir (Summarize)**:
    *   Métrica: **Promedio (Average)** de `duration_seconds`.
    *   Agrupado por (Group by):
        1.  `data.name` (Nombre del Workflow).
        2.  `import_date` (o `data.createdAt`) -> Configurar granularidad: **Día** o **Semana**.

### Paso C: Visualización
1.  Haz clic en **Visualización**.
2.  Selecciona **Cuadrícula (Grid)** inicialmente para ver los datos.
3.  Cambia a **Mapa de Calor (Heatmap)** o **Tabla Pivotante**.
    *   **Eje X**: Fecha (`import_date`).
    *   **Eje Y**: Workflow (`data.name`).
    *   **Valor**: Promedio de Duración.

## 4. Interpretación
*   **Colores más oscuros/calientes**: Indican tiempos de ejecución más largos (cuellos de botella).
*   **Tendencia horizontal**: Si un workflow específico se vuelve más oscuro con el tiempo, su rendimiento está degradándose.
*   **Comparativa vertical**: Permite identificar rápidamente qué workflows son los más lentos del sistema.

## 5. Ejemplo de Consulta Nativa (Mongo Shell)
Si prefieres usar una "Pregunta Nativa" en Metabase:

```javascript
[
    {
        "$match": {
            "duration_seconds": { "$exists": true, "$gt": 0 }
        }
    },
    {
        "$group": {
            "_id": {
                "workflow": "$data.name",
                "date": { 
                    "$dateToString": { "format": "%Y-%m-%d", "date": "$import_date" } 
                }
            },
            "avg_duration": { "$avg": "$duration_seconds" }
        }
    },
    {
        "$sort": { "_id.date": 1 }
    }
]
```
