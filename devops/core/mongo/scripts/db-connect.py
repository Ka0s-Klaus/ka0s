import os
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure, ConfigurationError

try:
    # Obtener cadena de conexión del entorno
    connection_string = os.environ['MONGO_SUPERUSER_CONNECTION']
    
    # Intentar conexión con timeout de 5 segundos
    client = MongoClient(connection_string, serverSelectionTimeoutMS=5000)
    
    # Verificar conexión
    client.admin.command('ping')
    print("✅ Conexión exitosa a MongoDB")
    print(f"Detalles: {connection_string.split('@')[-1].split('?')[0]}")
    
except KeyError:
    print("❌ Error: Variable MONGO_SUPERUSER_CONNECTION no está definida")
    print("Solución: Verificar secrets en GitHub Actions")

except ConfigurationError as e:
    print(f"❌ Error en cadena de conexión: {str(e)}")
    print("Solución: Validar formato de MongoDB URI")

except ConnectionFailure:
    print("❌ No se pudo conectar al cluster")
    print("Posibles causas:")
    print("- Credenciales incorrectas")
    print("- Problemas de red/firewall")
    print("- Cluster no disponible")

except Exception as e:
    print(f"❌ Error inesperado: {str(e)}")

finally:
    if 'client' in locals():
        client.close()