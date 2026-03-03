# Visualización de Lead Time en Metabase (Heatmap)

Esta guía detalla los pasos exactos para crear un Dashboard en Metabase que visualice el **Lead Time** (tiempo de ejecución) de tus workflows de GitHub Actions utilizando un Mapa de Calor.

## 1. Conexión a Datos

Asegúrate de que Metabase está conectado correctamente a MongoDB con los siguientes parámetros (verificados en `mongo-secret`):
*   **Database Name**: `inspector`
*   **Authentication Database**: `admin`
*   **User**: `root`
*   **Password**: ``

## 2. Crear la Pregunta Base (Query)

1.  En Metabase, haz clic en **+ Nuevo** > **Pregunta**.
2.  Selecciona tu base de datos (ej. `Ka0s Inspector`) > Colección **`col_json`**.

### Filtrado Inicial (Opcional pero recomendado)
Para limpiar el ruido, añade estos filtros:
*   `Duration Seconds` **no está vacío**.
*   `Data` -> `Conclusion` **es** `success` (si solo quieres medir tiempos de éxito).

### Resumir (La clave del Heatmap)
En la sección **"Resumir"** (Summarize):
1.  **Métrica**: Elige **Promedio** (Average) de **`Lead Time Minutes`**.
    *   *Nota: Usamos minutos para que la escala sea legible.*
2.  **Agrupar por** (Group by):
    *   Primera agrupación: **`Data` -> `Name`** (Esto pondrá los nombres de los workflows en el eje Y).
    *   Segunda agrupación: **`Data` -> `Created At`** (o `Import Date`).
    *   **Importante**: Al lado del campo de fecha, cambia la granularidad de "Día" a **"Día del mes"** o **"Semana"** según la densidad de datos que prefieras.

## 3. Configurar la Visualización

Una vez tengas la tabla de resultados:
1.  Haz clic en el botón **Visualización** (abajo a la izquierda).
2.  Selecciona **Cuadrícula** (Grid) si no sale por defecto, y luego cambia a **Pivot Table** (Tabla Dinámica).
    *   Las tablas dinámicas en Metabase suelen funcionar mejor como base para heatmaps de matriz.
3.  Para un **Heatmap real**:
    *   Si tienes muchos datos, la opción **"Cuadrícula"** con **formato condicional** es lo más efectivo.
    *   Ve a **Configuración** de la visualización -> **Formato condicional**.
    *   Añade una regla: "Si `Promedio de Lead Time Minutes` es alto -> Color Rojo".
    *   Metabase coloreará las celdas automáticamente creando el efecto de mapa de calor.

## 4. Guardar en Dashboard

1.  Haz clic en **Guardar**.
2.  Dale un nombre: "Evolución de Lead Time por Workflow".
3.  Te preguntará si quieres añadirlo a un Dashboard. Di que **Sí**.
4.  Crea un nuevo Dashboard llamado **"Ka0s DevOps Metrics"**.

## 5. Interpretación del Gráfico

*   **Eje Vertical (Y)**: Tus workflows (ej. `CI Node`, `Deploy Prod`).
*   **Eje Horizontal (X)**: La línea de tiempo (Días/Semanas).
*   **Celdas**: El color indica cuánto tardó.
    *   **Verde/Claro**: Rápido (Lead Time bajo).
    *   **Rojo/Oscuro**: Lento (Lead Time alto -> Posible degradación).

---

## Anexo: Consulta Nativa (MongoDB)
Si prefieres ir al grano con una consulta nativa (Native Query) en Metabase, pega esto:

```javascript
[
  {
    "$match": {
      "lead_time_minutes": { "$exists": true, "$ne": null },
      "data.conclusion": "success"
    }
  },
  {
    "$group": {
      "_id": {
        "workflow": "$data.name",
        "date": {
          "$dateToString": { "format": "%Y-%m-%d", "date": { "$dateFromString": { "dateString": "$data.createdAt" } } }
        }
      },
      "avg_lead_time": { "$avg": "$lead_time_minutes" }
    }
  },
  {
    "$sort": { "_id.date": 1 }
  }
]
```
