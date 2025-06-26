import os
import json
from datetime import datetime
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure, OperationFailure

try:
    # Obtener parámetros del entorno
    conn_str = os.environ['MONGO_SUPERUSER_CONNECTION']
    db_name = os.environ['MONGO_NEW_DB']
    report_filename = os.environ['REPORT_FILENAME_DB']
    report_path = os.environ['REPORT_PATH']
    
    client = MongoClient(conn_str, serverSelectionTimeoutMS=5000)
    
    log = {
        'timestamp': datetime.now().isoformat(),
        'operations': [],
        'errors': []
    }

    # Paso 1: Verificar conexión
    client.admin.command('ping')
    log['operations'].append({'step': 1, 'status': 'success', 'description': 'Conexión establecida'})

    # Paso 2: Crear base de datos
    if db_name not in client.list_database_names():
        client[db_name].command('create')
        log['operations'].append({'step': 2, 'status': 'success', 'description': f'Base de datos {db_name} creada'})
    else:
        log['operations'].append({'step': 2, 'status': 'skipped', 'description': f'Base de datos {db_name} ya existe'})

    # Guardar reporte
    os.makedirs(report_path, exist_ok=True)
    with open(os.path.join(report_path, report_filename), 'w') as f:
        json.dump(log, f, indent=2)
    
    print(f"✅ Base de datos {db_name} creada/verificada")
    exit(0)

except KeyError as e:
    print(f"❌ Variable no definida: {str(e)}")
    exit(1)
except ConnectionFailure as e:
    print(f"❌ Error de conexión: {str(e)}")
    exit(2)
except OperationFailure as e:
    print(f"❌ Error de operación: {str(e)}")
    exit(3)
except Exception as e:
    print(f"❌ Error inesperado: {str(e)}")
    exit(4)
finally:
    if 'client' in locals():
        client.close()