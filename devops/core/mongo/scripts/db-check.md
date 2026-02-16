# db-check.py - Verificador de Salud MongoDB

## 🔍 Propósito
Monitoreo básico de disponibilidad y estado de conexión a MongoDB

## 🛠️ Requisitos Técnicos
```python
# Versiones compatibles
Python >= 3.8
PyMongo >= 3.12

## 🚀 Ejecución Básica
```bash
export MONGO_SUPERUSER_CONNECTION='mongodb+srv://user:pass@cluster.example.com/admin?tls=true'
python3 db-check.py

## 🧪 Casos de Prueba
| Escenario | Comando | Salida Esperada |
|----------|---------|-----------------|
| Conexión exitosa | `python3 db-check.py` | `✅ MongoDB reachable - 192ms` |
| Credenciales inválidas | `python3 db-check.py` | `❌ Authentication failed (code 18)` |
| Cluster caído | `python3 db-check.py` | `❌ Server selection timeout` |

## 📊 Métricas Recopiladas
```json
{
  "status": "success",
  "response_time": 158,
  "server_version": "5.0.9",
  "protocol": "TLS 1.3",
  "last_check": "2024-03-15T14:30:00Z"
}
```

## 🛑 Códigos de Error
| Código | Significado | Acción Recomendada |
|--------|-------------|---------------------|
| 6 | Host no encontrado | Verificar DNS/resolución de nombres |
| 18 | Autenticación fallida | Rotar credenciales |
| 16500 | Timeout de escritura | Aumentar `serverSelectionTimeoutMS` |

## 🔄 Integración con GitHub Actions
```yaml
- name: Health Check MongoDB
  run: |
    echo "MONGO_SUPERUSER_CONNECTION=${{ secrets.STAGING_MONGO_URI }}" >> $GITHUB_ENV
    python db-check.py || exit 1
  timeout-minutes: 2
```

## 🔒 Consideraciones de Seguridad
- 🛡️ Usar siempre conexiones encriptadas (TLS)
- 🔄 Rotar credenciales cada 90 días
- 📝 Registrar solo códigos de error, nunca credenciales

## 📚 Recursos
- [MongoDB Error Codes](https://github.com/mongodb/mongo/blob/master/src/mongo/base/error_codes.yml)
- [PyMongo Troubleshooting](https://pymongo.readthedocs.io/en/stable/faq.html)
