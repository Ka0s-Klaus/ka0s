import os
import json
from datetime import datetime
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure, OperationFailure
import hashlib

def get_file_hash(filepath):
    with open(filepath, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()

try:
    conn_str = os.environ['MONGO_SUPERUSER_CONNECTION']
    report_filename = os.environ['REPORT_FILENAME_DB']
    report_path = os.environ['REPORT_PATH']
    scan_root = os.environ['REPORT_SCAN']
    
    client = MongoClient(conn_str, serverSelectionTimeoutMS=5000)
    
    log = {
        'timestamp': datetime.now().isoformat(),
        'databases_created': 0,
        'collections_created': 0,
        'documents_inserted': 0,
        'errors': []
    }

    # Recorrer directorio audit
    for root, dirs, files in os.walk(scan_root):
        print(f"[DEBUG] Procesamos el directorio: {scan_root}")
        if root == scan_root:  # Saltar el directorio raíz
            continue
            
        db_name = os.path.basename(root)
        print(f"[DEBUG] Comprobamos el nombre DB: {db_name}")
        # Crear DB si no existe
        if db_name not in client.list_database_names():
            print(f"[DEBUG] Si no existe la creamos: {db_name}")
            temp_col = client[db_name]['_init_temp']
            print(f"[DEBUG] DB Creada: {db_name}")
            temp_col.insert_one({'__init__': True})
            temp_col.drop()
            log['databases_created'] += 1
            print(f"[DEBUG] Logs creados: {db_name}")
        
        # Eliminar esta sección que borra colecciones existentes
        # Procesar extensiones como strings
        extensions = {str(os.path.splitext(f)[1][1:]) or 'no_extension' for f in files if os.path.isfile(os.path.join(root, f))}
        print(f"[DEBUG] Extensiones procesadas: {extensions}")
        
        for ext in extensions:
            print(f"[DEBUG] Tipo de ext: {type(ext)}, Valor: {ext}")
            collection_name = f'col_{ext}'
            print(f"[DEBUG] Creando colección: {collection_name}")
            collection = client[db_name][collection_name]
            
            # Eliminar esta parte que borra documentos existentes
            # Solo insertar documentos nuevos basados en hash
            for file in [f for f in files if f.endswith(f'.{ext}')]:
                file_path = os.path.join(root, file)
                try:
                    file_hash = get_file_hash(file_path)
                    
                    if not collection.find_one({'hash': file_hash}):
                        with open(file_path, 'r') as f:
                            content = f.read()
                            
                        collection.insert_one({
                            'filename': file,
                            'content': content,
                            'hash': file_hash,
                            'import_date': datetime.now()
                        })
                        log['documents_inserted'] += 1
                except Exception as e:
                    log['errors'].append(f"Error en {file_path}: {str(e)}")

    # Guardar reporte
    os.makedirs(report_path, exist_ok=True)
    with open(os.path.join(report_path, report_filename), 'w') as f:
        json.dump(log, f, indent=2)
    
    # Eliminar solo archivos del directorio
    try:
        if os.path.exists(scan_root):
            for root, _, files in os.walk(scan_root):
                for file in files:
                    if os.path.basename(file) == 'README.md':
                        continue  # Saltar README.md
                    file_path = os.path.join(root, file)
                    os.remove(file_path)
            print(f"[DEBUG] Archivos eliminados en: {scan_root}")
    except Exception as e:
        log['errors'].append(f"Error eliminando archivos: {str(e)}")
    
    print(f"✅ Proceso completado: {log['documents_inserted']} documentos insertados")
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
except ValueError as e:
    print(f"❌ {str(e)}")
    exit(5)
finally:
    if 'client' in locals():
        client.close()