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

    try:
        # Bloque principal correctamente indentado (4 espacios)
        client = MongoClient(os.environ['MONGO_SUPERUSER_CONNECTION'])
        
        # Operaciones con la base de datos
        db_name = os.environ['MONGO_NEW_DB']
        if db_name not in client.list_database_names():
            client[db_name].command('create')

        # Bloque interno correctamente anidado
        try:
            db = client[db_name]
            collection_name = os.environ.get('MONGO_COLLECTION_NAME', 'default_collection')
            if collection_name not in db.list_collection_names():
                db.create_collection(collection_name)
        except Exception as e:
            print(f"Error creando colección: {e}")

    except Exception as e:
        print(f"Error general: {e}")
    finally:
        client.close()
        print("Proceso completado")

    print("\n[INICIO] Ejecutando script de configuración MongoDB")
    print(f"Parámetros recibidos:\n- DB: {os.environ['MONGO_NEW_DB']}\n- Usuario: {os.environ['MONGO_NEW_USER']}\n- Colección: {os.environ.get('MONGO_COLLECTION_NAME')}")

    try:
        # Conexión mejorada
        print("\n[PASO 1] Conectando a MongoDB...")
        client = MongoClient(os.environ['MONGO_SUPERUSER_CONNECTION'],
                            serverSelectionTimeoutMS=5000,
                            authMechanism='SCRAM-SHA-256')
        client.server_info()
        print("✅ Conexión exitosa")

        # Creación/Verificación de DB
        print(f"\n[PASO 2] Verificando base de datos '{db_name}'")
        if db_name in client.list_database_names():
            print(f"⚠️  Base de datos ya existe. Usando: {db_name}")
        else:
            client[db_name].command('create')
            print(f"✅ Base de datos creada: {db_name}")

        # Creación de colección
        print(f"\n[PASO 3] Creando colección '{collection_name}'")
        db = client[db_name]
        if collection_name not in db.list_collection_names():
            db.create_collection(collection_name)
            print(f"✅ Colección creada: {collection_name}")
        else:
            print(f"⚠️  Colección ya existe. Usando: {collection_name}")

    except Exception as e:
        print(f"\n❌ ERROR CRÍTICO: {str(e)}")
        raise

    finally:
        print("\n[FINAL] Generando reporte...")
        print(f"📄 Ruta del reporte: {report_path}")

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

        try:
            # Recoger y registrar parámetros
            params = {
                'db_name': os.environ['MONGO_NEW_DB'],
                'collection': os.environ.get('MONGO_COLLECTION_NAME', 'default_collection'),
                'user': os.environ['MONGO_NEW_USER']
            }
            report['metadata']['parameters'] = params

            client = MongoClient(os.environ['MONGO_SUPERUSER_CONNECTION'])
            report['metadata']['mongo_server'] = {
                'host': client.HOST,
                'port': client.PORT,
                'version': client.server_info()['version']
            }

            # Verificación de base de datos
            if db_name in existing_dbs:
                report['operations'].append({
                    'type': 'check_db',
                    'status': 'exists',
                    'message': f'Base de datos {db_name} ya existe',
                    'timestamp': datetime.now().isoformat()
                })
            else:
                # Crear nueva base de datos
                report['operations'].append({
                    'type': 'create_db', 
                    'status': 'success',
                    'timestamp': datetime.now().isoformat()
                })

            # Verificación de colección
            try:
                if collection_name in new_db.list_collection_names():
                    report['errors'].append(f'Colección {collection_name} ya existe en {db_name}')
                else:
                    new_db.create_collection(collection_name)
                    report['operations'].append({
                        'type': 'create_collection',
                        'status': 'success',
                        'timestamp': datetime.now().isoformat()
                    })
            except Exception as e:
                report['errors'].append(str(e))

            # Obtener variables actualizadas del workflow
            try:
                connection_string = os.environ['MONGO_SUPERUSER_CONNECTION']  # Nombre corregido
                db_name = os.environ['MONGO_NEW_DB']
                collection_name = os.environ.get('MONGO_COLLECTION_NAME', 'default_collection')
                username = os.environ['MONGO_NEW_USER']
                password = os.environ['MONGO_NEW_PASS']  # Nombre actualizado

            except KeyError as e:
                report['errors'].append(f"Falta variable de entorno: {e}")
                return report

            # Creación de usuario con variables actualizadas
            admin_db.command('createUser', username,
                            pwd=password,
                            roles=[
                                {'role': 'dbOwner', 'db': db_name},
                                {'role': 'readWrite', 'db': db_name}
                            ])
        except Exception as e:
            report['errors'].append({
                'type': 'critical',
                'message': str(e),
                'stack_trace': traceback.format_exc()
            })
        finally:
            # Generación garantizada del reporte
            report['metadata']['end_time'] = datetime.now().isoformat()
            
            # Cálculo de duración
            report['metadata']['duration'] = (
                datetime.fromisoformat(report['metadata']['end_time']) -
                datetime.fromisoformat(report['metadata']['start_time'])
            ).total_seconds()

            # Bloque try para guardar reporte DEBE estar al mismo nivel
            try:
                report_path = os.path.join(
                    os.environ.get('REPORT_PATH', './'),
                    os.environ.get('REPORT_FILENAME', 'mongo_operations_report.json')
                )
                os.makedirs(os.path.dirname(report_path), exist_ok=True)
                with open(report_path, 'w') as f:
                    json.dump(report, f, indent=2, default=str)
            except Exception as e:
                print(f"Error generando reporte: {e}")
            
            return 0 if not report['errors'] else 1