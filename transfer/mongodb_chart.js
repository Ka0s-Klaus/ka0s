{
  "title": "GitHub Code Activity Dashboard",
  "description": "Visualización de actividad de desarrollo diaria",
  "layout": {
    "grid": {
      "columns": 12,
      "rows": 8
    }
  },
  "charts": [
    // 1. KPIs SUPERIORES
    {
      "name": "Total Líneas Añadidas (7 días)",
      "type": "number",
      "position": {"x": 0, "y": 0, "w": 3, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"date": -1}},
          {"$limit": 7},
          {"$group": {"_id": null, "total": {"$sum": "$additions"}}}
        ]
      },
      "format": {"prefix": "+", "suffix": " líneas"}
    },
    {
      "name": "Ratio Adiciones/Eliminaciones",
      "type": "number",
      "position": {"x": 3, "y": 0, "w": 3, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"date": -1}},
          {"$limit": 7},
          {"$group": {
            "_id": null,
            "additions": {"$sum": "$additions"},
            "deletions": {"$sum": "$deletions"}
          }},
          {"$project": {
            "ratio": {"$cond": [
              {"$eq": ["$deletions", 0]},
              0,
              {"$divide": ["$additions", "$deletions"]}
            ]}
          }}
        ]
      },
      "format": {"decimalPlaces": 2}
    },
    {
      "name": "Commits Promedio/Día",
      "type": "number",
      "position": {"x": 6, "y": 0, "w": 3, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"date": -1}},
          {"$limit": 7},
          {"$group": {
            "_id": null,
            "avg": {"$avg": "$commits"}
          }}
        ]
      },
      "format": {"decimalPlaces": 1}
    },
    {
      "name": "Archivos Modificados (7 días)",
      "type": "number",
      "position": {"x": 9, "y": 0, "w": 3, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"date": -1}},
          {"$limit": 7},
          {"$group": {"_id": null, "total": {"$sum": "$changed_files"}}}
        ]
      }
    },

    // 2. GRÁFICOS PRINCIPALES
    {
      "name": "Cambios Diarios de Código",
      "type": "line",
      "position": {"x": 0, "y": 2, "w": 12, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"date": 1}},
          {"$limit": 30},
          {"$project": {
            "date": 1,
            "additions": 1,
            "deletions": 1,
            "net_changes": {"$subtract": ["$additions", "$deletions"]}
          }}
        ]
      },
      "xAxis": {"field": "date", "label": "Fecha"},
      "yAxis": {"label": "Líneas de Código"},
      "series": [
        {"field": "additions", "label": "Adiciones", "color": "#4CAF50"},
        {"field": "deletions", "label": "Eliminaciones", "color": "#F44336"},
        {"field": "net_changes", "label": "Cambio Neto", "color": "#2196F3"}
      ]
    },
    {
      "name": "Actividad por Tipo",
      "type": "bar",
      "position": {"x": 0, "y": 4, "w": 6, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"date": -1}},
          {"$limit": 14},
          {"$project": {
            "date": 1,
            "commits": 1,
            "changed_files": 1
          }}
        ]
      },
      "xAxis": {"field": "date", "label": "Fecha"},
      "yAxis": {"label": "Cantidad"},
      "series": [
        {"field": "commits", "label": "Commits", "color": "#FF9800"},
        {"field": "changed_files", "label": "Archivos Modificados", "color": "#9C27B0"}
      ]
    },
    {
      "name": "Distribución de Cambios",
      "type": "pie",
      "position": {"x": 6, "y": 4, "w": 3, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"date": -1}},
          {"$limit": 7},
          {"$group": {
            "_id": null,
            "additions": {"$sum": "$additions"},
            "deletions": {"$sum": "$deletions"}
          }},
          {"$project": {
            "additions": 1,
            "deletions": 1
          }}
        ]
      },
      "categoryField": "_id",
      "valueField": "value",
      "series": [
        {"name": "Adiciones", "value": "$additions", "color": "#4CAF50"},
        {"name": "Eliminaciones", "value": "$deletions", "color": "#F44336"}
      ]
    },
    {
      "name": "Eficiencia de Código",
      "type": "scatter",
      "position": {"x": 9, "y": 4, "w": 3, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"date": -1}},
          {"$limit": 30},
          {"$project": {
            "date": 1,
            "additions_per_commit": {"$divide": ["$additions", "$commits"]},
            "files_per_commit": {"$divide": ["$changed_files", "$commits"]}
          }}
        ]
      },
      "xAxis": {"field": "files_per_commit", "label": "Archivos/Commit"},
      "yAxis": {"field": "additions_per_commit", "label": "Líneas/Commit"},
      "colorField": "date"
    },

    // 3. DATOS ADICIONALES
    {
      "name": "Top Días de Actividad",
      "type": "table",
      "position": {"x": 0, "y": 6, "w": 6, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"net_changes": -1}},
          {"$limit": 5},
          {"$project": {
            "Fecha": "$date",
            "Adiciones": "$additions",
            "Eliminaciones": "$deletions",
            "Cambio Neto": {"$subtract": ["$additions", "$deletions"]},
            "Commits": "$commits",
            "Archivos": "$changed_files"
          }}
        ]
      },
      "columns": [
        {"field": "Fecha", "header": "Fecha"},
        {"field": "Adiciones", "header": "Adiciones"},
        {"field": "Eliminaciones", "header": "Eliminaciones"},
        {"field": "Cambio Neto", "header": "Neto"},
        {"field": "Commits", "header": "Commits"},
        {"field": "Archivos", "header": "Archivos"}
      ]
    },
    {
      "name": "Tendencia Semanal",
      "type": "area",
      "position": {"x": 6, "y": 6, "w": 6, "h": 2},
      "query": {
        "collection": "code_changes",
        "pipeline": [
          {"$match": {"org": "mi-organizacion", "repo": "mi-repositorio"}},
          {"$sort": {"date": 1}},
          {"$group": {
            "_id": {"$dateToString": {"format": "%Y-%U", "date": {"$toDate": {"$concat": ["$date", "T00:00:00Z"]}}}},
            "avg_additions": {"$avg": "$additions"},
            "avg_deletions": {"$avg": "$deletions"}
          }},
          {"$sort": {"_id": 1}},
          {"$project": {
            "Semana": "$_id",
            "Adiciones Promedio": "$avg_additions",
            "Eliminaciones Promedio": "$avg_deletions"
          }}
        ]
      },
      "xAxis": {"field": "Semana", "label": "Semana (Año-Número)"},
      "yAxis": {"label": "Líneas de Código"},
      "series": [
        {"field": "Adiciones Promedio", "label": "Adiciones", "color": "#4CAF50"},
        {"field": "Eliminaciones Promedio", "label": "Eliminaciones", "color": "#F44336"}
      ]
    }
  ],
  "filters": [
    {
      "name": "Rango de Fechas",
      "type": "date",
      "field": "date",
      "collection": "code_changes",
      "position": "top",
      "width": "full"
    },
    {
      "name": "Repositorio",
      "type": "dropdown",
      "field": "repo",
      "collection": "code_changes",
      "position": "top",
      "width": "half"
    }
  ],
  "theme": {
    "colors": ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0", "#F44336"],
    "background": "#F5F7FA",
    "font": "Roboto, sans-serif"
  }
}