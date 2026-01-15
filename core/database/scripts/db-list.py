import os
import json
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

try:
    # Obtener conexión del entorno
    conn_str = os.environ['MONGO_SUPERUSER_CONNECTION']
    client = MongoClient(conn_str, serverSelectionTimeoutMS=5000)
    
    # Obtener lista de bases de datos
    databases = client.list_database_names()
    
    result = {
        'databases': [],
        'users': []
    }

    # Recorrer cada base de datos
    for db_name in databases:
        if db_name in ['admin', 'local', 'config']:
            continue

        db = client[db_name]
        
        # Colecciones
        collections = db.list_collection_names()
        
        # Usuarios y roles
        users_info = db.command('usersInfo')
        
        result['databases'].append({
            'name': db_name,
            'collections': collections
        })
        
        for user in users_info['users']:
            result['users'].append({
                'user': user['user'],
                'roles': user['roles'],
                'db': db_name
            })

    print(json.dumps(result, indent=2))
    print("Ready report MongoDB!")
    
except KeyError:
    print("❌ MONGO_SUPERUSER_CONNECTION no está definida")
    exit(1)
except ConnectionFailure as e:
    print(f"❌ Error de conexión: {str(e)}")
    exit(2)
except Exception as e:
    print(f"❌ Error inesperado: {str(e)}")
    exit(3)
finally:
    client.close()