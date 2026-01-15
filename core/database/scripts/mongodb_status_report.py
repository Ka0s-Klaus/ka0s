import os
import json
from datetime import datetime, timedelta
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

def generate_mongodb_report():
    try:
        # Obtener conexión desde variables de entorno
        conn_str = os.environ['MONGO_SUPERUSER_CONNECTION']
        report_path = os.environ.get('REPORT_PATH')
        report_filename = os.environ.get('REPORT_FILENAME', f'mongodb_status_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json')
        
        # Conectar a MongoDB
        client = MongoClient(conn_str, serverSelectionTimeoutMS=5000)
        
        # Obtener información del servidor
        server_status = client.admin.command('serverStatus')
        
        # Obtener lista de bases de datos
        databases = client.list_database_names()
        
        # Configurar periodo para actividad de usuarios (últimas 24 horas)
        end_time = datetime.now()
        start_time = end_time - timedelta(days=1)
        
        # Generar reporte
        report = {
            'metadata': {
                'generated_at': datetime.now().isoformat(),
                'mongodb_version': server_status.get('version'),
                'host': server_status.get('host'),
                'report_period': {
                    'start': start_time.isoformat(),
                    'end': end_time.isoformat()
                }
            },
            'server_status': {
                'uptime': server_status.get('uptime'),
                'connections': server_status.get('connections'),
                'memory': server_status.get('mem'),
                'network': server_status.get('network')
            },
            'databases': []
        }
        
        # Procesar cada base de datos
        for db_name in databases:
            if db_name in ['admin', 'local', 'config']:
                continue
                
            db = client[db_name]
            db_report = {
                'name': db_name,
                'collections': [],
                'users': [],
                'stats': db.command('dbStats')
            }
            
            # Obtener colecciones
            collections = db.list_collection_names()
            for collection_name in collections:
                collection = db[collection_name]
                coll_report = {
                    'name': collection_name,
                    'count': collection.estimated_document_count(),
                    'indexes': [],
                    'stats': db.command('collStats', collection_name)
                }
                
                # Obtener índices
                indexes = collection.index_information()
                for index_name, index_info in indexes.items():
                    coll_report['indexes'].append({
                        'name': index_name,
                        'key': index_info['key'],
                        'unique': index_info.get('unique', False)
                    })
                
                db_report['collections'].append(coll_report)
            
            # Obtener actividad de usuarios
            try:
                user_activity = db.command('aggregate', 1, pipeline=[
                    {'$currentOp': {'allUsers': True, 'idleSessions': True}},
                    {'$match': {
                        'active': True,
                        'lastSeen': {
                            '$gte': start_time,
                            '$lte': end_time
                        }
                    }}
                ])
                db_report['user_activity'] = user_activity.get('cursor', {}).get('firstBatch', [])
            except Exception as e:
                db_report['user_activity_error'] = str(e)
            
            report['databases'].append(db_report)
        
        # Guardar reporte
        os.makedirs(report_path, exist_ok=True)
        with open(os.path.join(report_path, report_filename), 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"✅ Reporte generado exitosamente: {os.path.join(report_path, report_filename)}")
        return 0
        
    except KeyError as e:
        print(f"❌ Variable de entorno faltante: {str(e)}")
        return 1
    except ConnectionFailure as e:
        print(f"❌ Error de conexión a MongoDB: {str(e)}")
        return 2
    except Exception as e:
        print(f"❌ Error inesperado: {str(e)}")
        return 3
    finally:
        if 'client' in locals():
            client.close()

if __name__ == '__main__':
    exit(generate_mongodb_report())