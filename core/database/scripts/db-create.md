# db-create.py - Creador de Bases de Datos MongoDB

## 📄 Propósito
Creación automatizada de bases de datos MongoDB con:
- Registro detallado de operaciones
- Manejo de errores estructurado
- Integración con flujos CI/CD

## 🛠️ Requisitos Técnicos
```python
# Versiones compatibles
Python >= 3.9
PyMongo >= 4.2
```

## 🚀 Ejecución Básica
```bash
export MONGO_SUPERUSER_CONNECTION='mongodb+srv://user:pass@cluster.example.com/admin?tls=true'
export MONGO_NEW_DB=mi_nueva_db
python3 db-create.py
```

## 🗂️ Ejemplo de Reporte
```json
{
  "timestamp": "2024-03-18T12:34:56.789Z",
  "operations": [
    {"step": 1, "status": "success", "description": "Conexión establecida"},
    {"step": 2, "status": "success", "description": "Base de datos mi_nueva_db creada"}
  ]
}
```

## 🛑 Códigos de Error
| Código | Significado | Acción Recomendada |
|--------|-------------|---------------------|
| 1 | Variable faltante | Verificar variables de entorno |
| 2 | Error de conexión | Validar URI y firewall |
| 3 | Error de permisos | Verificar credenciales |
| 4 | Error inesperado | Revisar stacktrace |

## 🔄 Integración con GitHub Actions
```yaml
- name: Crear Base de Datos
  run: |
    echo "MONGO_SUPERUSER_CONNECTION=${{ secrets.PROD_MONGO_URI }}" >> $GITHUB_ENV
    echo "MONGO_NEW_DB=app_production" >> $GITHUB_ENV
    python3 db-create.py
```

## 🔒 Seguridad Avanzada
- 🔐 Validación TLS 1.3 obligatoria
- ⏱️ Timeout de operación: 8 segundos
- 📁 Reportes almacenados en ruta segura: `/audit/mongodb`

## ⚙️ Parámetros Configurables
| Variable | Descripción | Valor por Defecto |
|----------|-------------|--------------------|
| `REPORT_FILENAME_DB` | Nombre archivo reporte | `mongo_ops_<timestamp>.json` |
| `MONGO_OPERATION_TIMEOUT` | Tiempo máximo por operación | 8000 (ms) |

## 📚 Referencias Técnicas
- [MongoDB createCommand](https://docs.mongodb.com/manual/reference/command/create/)
- [PyMongo Timeouts Configuration](https://pymongo.readthedocs.io/en/stable/examples/timeouts.html)
