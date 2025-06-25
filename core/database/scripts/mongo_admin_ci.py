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
    report = inicializar_reporte()
    client = None

    try:
        # Configuración inicial
        params = obtener_parametros()
        report['metadata']['parameters'] = params

        # Conexión y operaciones
        with MongoClient(os.environ['MONGO_SUPERUSER_CONNECTION']) as client:
            operaciones_mongodb(client, report)

    except Exception as e:
        registrar_error(report, e)
    finally:
        if client:
            client.close()
        generar_reporte(reporte=report)

# Funciones auxiliares

def operaciones_mongodb(client, report):
    try:
        db = client[report['metadata']['parameters']['db_name']]
        crear_coleccion_si_no_existe(db, report)
        crear_usuario(db, report)
    except Exception as e:
        raise RuntimeError(f"Error en operaciones MongoDB: {str(e)}")


def generar_reporte(reporte):
    # Lógica simplificada de generación de reporte
    report_path = os.path.join(
        os.environ.get('REPORT_PATH', './'),
        os.environ.get('REPORT_FILENAME', 'mongo_operations_report.json')
    )
    with open(report_path, 'w') as f:
        json.dump(reporte, f, indent=2)