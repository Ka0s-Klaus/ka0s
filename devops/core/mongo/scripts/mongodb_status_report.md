# mongodb_status_report.py - Generador de Reportes de Estado MongoDB

## 🔍 Propósito

Genera un reporte completo del estado de un servidor MongoDB incluyendo:
- Estado del servidor
- Bases de datos y sus estadísticas
- Colecciones e índices
- Actividad de usuarios en las últimas 24 horas

## 🛠️ Requisitos Técnicos

```python
# Versiones compatibles
Python >= 3.8
PyMongo >= 4.0
```

## 🚀 Ejecución Básica
```bash
export MONGO_SUPERUSER_CONNECTION='mongodb+srv://user:pass@cluster.example.com/admin?tls=true'
export REPORT_PATH='./reports'
python3 mongodb_status_report.py
```

## 🧪 Casos de Prueba
| Escenario | Comando | Salida Esperada |
|----------|---------|-----------------|
| Ejecución exitosa | `python3 mongodb_status_report.py` | `✅ Reporte generado exitosamente: ./reports/mongodb_status_YYYYMMDD_HHMMSS.json` |
| Conexión fallida | `python3 mongodb_status_report.py` | `❌ Error de conexión a MongoDB: ...` |
| Variable faltante | `python3 mongodb_status_report.py` | `❌ Variable de entorno faltante: MONGO_SUPERUSER_CONNECTION` |

## 📊 Métricas Recopiladas
```json
{
  "metadata": {
    "generated_at": "2023-11-15T12:00:00",
    "mongodb_version": "6.0.5",
    "host": "mongodb01.example.com"
  },
  "server_status": {
    "uptime": 123456,
    "connections": {
      "current": 25,
      "available": 512
    },
    "memory": {
      "resident": 1024,
      "virtual": 2048
    }
  },
  "databases": [
    {
      "name": "mi_db",
      "collections": [
        {
          "name": "mi_coleccion",
          "count": 1000,
          "indexes": [
            {
              "name": "_id_",
              "key": {"_id": 1},
              "unique": true
            }
          ]
        }
      ]
    }
  ]
}
```

## 🛑 Códigos de Error

| Código | Significado | Acción Recomendada |
|--------|-------------|---------------------|
| 1 | Variable faltante | Verificar variables de entorno |
| 2 | Error conexión | Chequear URI MongoDB |
| 3 | Error inesperado | Verificar logs detallados |

## 🔄 Integración con GitHub Actions

```yaml
- name: Generar Reporte MongoDB
  env:
    MONGO_SUPERUSER_CONNECTION: ${{ secrets.MONGO_SUPERUSER_CONNECTION }}
    REPORT_PATH: './reports'
  run: python3 core/database/scripts/mongodb_status_report.py
```

## 🔒 Consideraciones de Seguridad

- 🔐 Requiere credenciales de superusuario
- 📁 Reportes almacenados localmente
- ⏱ Periodo de actividad: últimas 24 horas

## 📚 Recursos

- [MongoDB serverStatus](https://www.mongodb.com/docs/manual/reference/command/serverStatus/)
- [MongoDB currentOp](https://www.mongodb.com/docs/manual/reference/command/currentOp/)

## ⚠️ Excepciones
- Las bases de datos del sistema (admin, local, config) no se incluyen en el reporte
- La actividad de usuarios solo incluye operaciones activas
- Los índices se muestran con su estructura pero sin estadísticas de uso
```

La documentación sigue el mismo formato que `add-doc-to-db.md` pero adaptada a la funcionalidad específica del script de reportes de estado de MongoDB.
        