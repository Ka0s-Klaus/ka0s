import os
import json
from datetime import datetime
from pymongo import MongoClient
from urllib.parse import quote_plus

REPORT_FILE = os.getenv('REPORT_PATH', 'mongo_operations_report.json')

def log_operation(stage, status, details=None):
    entry = {
        'timestamp': datetime.utcnow().isoformat(),
        'stage': stage,
        'status': status,
        'details': details
    }
    
    with open(REPORT_FILE, 'a') as f:
        f.write(json.dumps(entry) + '\n')

def crear_entorno_mongo():
    try:
        # Obtener variables de GitHub Actions
        connection_string = os.environ['MONGO_SUPERUSER_CONNECTION']
        nueva_db = os.environ['MONGO_NEW_DB']
        nuevo_usuario = os.environ['MONGO_NEW_USER']
        nueva_pass = os.environ['MONGO_NEW_PASS']

        # Parsear connection string
        client = MongoClient(connection_string)
        
        log_operation('connection', 'success', {'db': client.address})

        # Crear base de datos y colección
        db = client[nueva_db]
        db.create_collection('system_logs')
        log_operation('db_creation', 'success', {'db_name': nueva_db})

        # Crear usuario con roles
        db.command(
            'createUser',
            nuevo_usuario,
            pwd=nueva_pass,
            roles=[
                {'role': 'dbOwner', 'db': nueva_db},
                {'role': 'readWriteAnyDatabase', 'db': 'admin'}
            ]
        )
        log_operation('user_creation', 'success', {'username': nuevo_usuario})

        # Generar salida para GitHub Actions
        print(f'::set-output name=report_path::{REPORT_FILE}')
        return 0

    except Exception as e:
        error_details = str(e)
        log_operation('general_error', 'failed', {'error': error_details})
        print(f'::error::{error_details}')
        return 1
    finally:
        client.close()

if __name__ == '__main__':
    exit_code = crear_entorno_mongo()
    exit(exit_code)