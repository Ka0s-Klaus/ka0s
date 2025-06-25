import os
from pymongo import MongoClient
import json
from datetime import datetime

def crear_entorno_mongo():
    # Obtener parámetros de GitHub Actions
    connection_string = os.environ['MONGO_SUPERUSER_CONNECTION']
    nueva_db = os.environ['MONGO_NEW_DB']
    nuevo_usuario = os.environ['MONGO_NEW_USER']
    nueva_pass = os.environ['MONGO_NEW_PASS']
    existing_dbs = os.environ['MONGO_EXISTING_DB']

    try:
        # Conexión básica
        client = MongoClient(connection_string)
        
        # Crear base de datos y colección
        db = client[nueva_db]
        db.create_collection('registros')
        
        # Crear usuario básico
        db.command('createUser', nuevo_usuario, pwd=nueva_pass, roles=[{'role': 'dbOwner', 'db': nueva_db}])
        
        # Generar reporte mínimo
        with open('mongo_report.txt', 'w') as f:
            f.write(f'Base de datos {nueva_db} creada\nUsuario {nuevo_usuario} configurado')
        
        return 0
    except Exception as e:
        print(f'Error: {str(e)}')
        return 1
    finally:
        client.close()

def main():
    report = {
        'metadata': {
            'start_time': datetime.now().isoformat(),
            'script_version': '1.2',
            'parameters': {}
        },
        'operations': [],
        'errors': [],
        'statistics': {}
    }

    print("\n[INICIO] Ejecutando script de configuración MongoDB")
    print(f"Parámetros recibidos:\n- DB: {os.environ['MONGO_NEW_DB']}\n- Usuario: {os.environ['MONGO_NEW_USER']}\n- Colección: {os.environ.get('MONGO_COLLECTION_NAME')}")

    try:
        # Conexión mejorada con controles
        print("\n[PASO 1] Conectando a MongoDB...")
        client = MongoClient(os.environ['MONGO_SUPERUSER_CONNECTION'],
                             serverSelectionTimeoutMS=5000,
                             authMechanism='SCRAM-SHA-256')
        client.server_info()
        print("✅ Conexión exitosa")

        # Creación/Verificación de DB
        db_name = os.environ['MONGO_NEW_DB']
        print(f"\n[PASO 2] Verificando base de datos '{db_name}'")
        
        if db_name in client.list_database_names():
            print(f"⚠️  Base de datos ya existe. Usando: {db_name}")
        else:
            client[db_name].command('create')
            print(f"✅ Base de datos creada: {db_name}")

        # Creación de colección
        collection_name = os.environ.get('MONGO_COLLECTION_NAME', 'default_collection')
        print(f"\n[PASO 3] Creando colección '{collection_name}'")
        
        db = client[db_name]
        if collection_name in db.list_collection_names():
            print(f"⚠️  Colección ya existe. Usando: {collection_name}")
        else:
            db.create_collection(collection_name)
            print(f"✅ Colección creada: {collection_name}")

        # Creación de usuario
        print(f"\n[PASO 4] Creando usuario '{os.environ['MONGO_NEW_USER']}'")
        db.command('createUser', os.environ['MONGO_NEW_USER'],
                   pwd=os.environ['MONGO_NEW_PASS'],
                   roles=[{'role': 'dbOwner', 'db': db_name}])
        print("✅ Usuario creado con éxito")

    except Exception as e:
        print(f"\n❌ ERROR CRÍTICO: {str(e)}")
        report['errors'].append(str(e))
    finally:
        if 'client' in locals():
            client.close()
        print("\n[FINAL] Generando reporte...")
        
        # En la sección de parámetros del reporte
        report_data = {
            'metadata': {
                'report_filename': os.environ['REPORT_FILENAME'],
                'report_path': os.environ.get('REPORT_PATH', './')
            },
        }
        
        # En la generación del archivo
        try:
            report_path = os.path.join(
                os.environ.get('REPORT_PATH', './'), 
                os.environ['REPORT_FILENAME']
            )
            with open(report_path, 'w') as f:
                json.dump(report_data, f)
        except Exception as e:
            print(f"❌ Error guardando reporte: {str(e)}")