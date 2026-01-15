# db-list.py - Listador de Recursos MongoDB

## 📄 Propósito
Obtener un inventario estructurado de:
- Bases de datos no del sistema
- Colecciones por base
- Usuarios y sus roles

## 🛠️ Requisitos Técnicos
```python
# Versiones compatibles
Python >= 3.8
PyMongo >= 4.0
```

## 🚀 Ejecución Básica
```bash
export MONGO_SUPERUSER_CONNECTION='mongodb+srv://user:pass@cluster.example.com/admin?tls=true'
python3 db-list.py
```

## 🗃️ Extracción de Datos
```json
{
  "databases": [
    {
      "name": "ventas",
      "collections": ["transacciones", "clientes"]
    }
  ],
  "users": [
    {
      "user": "reportes",
      "roles": ["read"],
      "db": "ventas"
    }
  ]
}
```

## 🛑 Códigos de Error
| Código | Significado | Acción Recomendada |
|--------|-------------|---------------------|
| 1 | Variable no definida | Verificar secrets en GitHub |
| 2 | Error de conexión | Validar URI y acceso de red |
| 3 | Error genérico | Revisar logs de ejecución |

## 🔄 Integración con GitHub Actions
```yaml
- name: Auditoría MongoDB
  run: |
    echo "MONGO_SUPERUSER_CONNECTION=${{ secrets.AUDIT_MONGO_URI }}" >> $GITHUB_ENV
    python3 db-list.py > mongo_audit_$(date +%s).json
```

## 🔒 Consideraciones de Seguridad
- 🔐 Conexión TLS obligatoria
- 📄 Registrar solo metadatos, nunca credenciales
- ⏱️ Timeout de 5s para prevenir bloqueos

## 📊 Métricas Recopiladas
| Métrica | Descripción |
|---------|-------------|
| db_count | Número de bases de datos |
| exec_time | Tiempo total de ejecución |
| api_time | Tiempo respuesta MongoDB |

## 📚 Referencias
- [MongoDB usersInfo Command](https://docs.mongodb.com/manual/reference/command/usersInfo/)
- [PyMongo Database Operations](https://pymongo.readthedocs.io/en/stable/tutorial.html)
