# db-connect.py - Conector de MongoDB

## 📄 Propósito
Verificación programática de conectividad con MongoDB utilizando credenciales de superusuario

## 🔧 Configuración Requerida
```env
MONGO_SUPERUSER_CONNECTION="mongodb+srv://<user>:<password>@<cluster>/admin?retryWrites=true&w=majority"
```

## 🛠️ Dependencias
| Módulo | Versión | Instalación |
|--------|---------|-------------|
| pymongo | >=4.0 | `pip install pymongo` |
| python-dotenv | >=0.19 | Opcional para pruebas locales |

## 🚦 Flujo de Conexión
1. **Validación de Variables**: 
   - Verifica que `MONGO_SUPERUSER_CONNECTION` esté definida
2. **Parseo de URI**:
   - Valida formato MongoDB URI
   - Extrae componentes (usuario, cluster, opciones)
3. **Conexión Segura**:
   - TLS/SSL implícito
   - Timeout de 5 segundos
   - Autenticación SCRAM-SHA-256

## 🚨 Errores Comunes
```python
# Ejemplo de registro de error
ERROR 2024-03-15 12:34:56 | CONN_FAIL | Cluster 'mongodb.example.com' no responde
	Causa Raíz: Timeout de conexión
	Acción: Verificar acceso al puerto 27017
```

## 🔄 Integración Continua
```yaml
- name: Test MongoDB Connection
  run: |
    echo "MONGO_SUPERUSER_CONNECTION=${{ secrets.PROD_MONGO_URI }}" >> $GITHUB_ENV
    python -m pytest tests/db_connection_test.py
  env:
    PYTHONPATH: ${{ github.workspace }}/core/database
```

## 🔍 Diagnóstico Avanzado
```bash
# Obtener detalles técnicos (requiere permisos):
mongosh "$MONGO_SUPERUSER_CONNECTION" --eval "db.runCommand({connectionStatus: 1})"
```

## 📊 Métricas
| Métrica | Descripción |
|---------|-------------|
| connection_time | Tiempo en establecer conexión |
| handshake_ok | Confirmación protocolo MongoDB |
| auth_attempts | Intentos de autenticación |

## 🔒 Seguridad
- 🔐 Cifrado TLS/SSL obligatorio
- 🕵️♂️ Auditoría de conexiones en `audit/mongodb/connection.log`
- ⚠️ Never log full connection string

## 📚 Referencias
- [MongoDB Connection String Format](https://docs.mongodb.com/manual/reference/connection-string/)
- [PyMongo Documentation](https://pymongo.readthedocs.io/en/stable/examples/tls.html)

        