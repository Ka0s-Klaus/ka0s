import os
import json
import requests
import sys
import argparse

# Configuración por defecto (puede ser sobreescrita por variables de entorno)
ITOP_URL = os.getenv('ITOP_URL', 'https://itsm.ka0s.io/webservices/rest.php')
ITOP_USER = os.getenv('ITOP_USER')
ITOP_PASSWORD = os.getenv('ITOP_PASSWORD')
ITOP_API_VERSION = '1.3'

# Mapeo de campos FK a clases para resolución automática
FK_MAPPING = {
    'org_id': 'Organization',
    'location_id': 'Location',
    'team_id': 'Team',
    'person_id': 'Person',
    # Puede ser Server, VirtualMachine, etc. FunctionalCI es la base.
    'system_id': 'FunctionalCI',
    'cluster_id': 'Farm',
    'osfamily_id': 'OSFamily',
    'osversion_id': 'OSVersion',
    'brand_id': 'Brand',
    'model_id': 'Model',
    'networkdevicetype_id': 'NetworkDeviceType',
    'iosversion_id': 'IOSVersion',
    'software_id': 'Software',
    'softwarelicence_id': 'SoftwareLicence'
}


def log(msg):
    print(f"[CMDB-Ingest] {msg}")


def get_itop_object(class_name, name):
    """
    Busca un objeto en iTop por su nombre (u otra clave reconciliable).
    Retorna el ID si existe, o None.
    """
    params = {
        'version': ITOP_API_VERSION,
        'auth_user': ITOP_USER,
        'auth_pwd': ITOP_PASSWORD,
        'json_data': json.dumps({
            'operation': 'core/get',
            'class': class_name,
            'key': f"SELECT {class_name} WHERE name = '{name}'",
            'output_fields': 'id'
        })
    }
    
    try:
        response = requests.post(ITOP_URL, data=params)
        response.raise_for_status()
        data = response.json()
        
        if data['code'] == 0:
            objects = data.get('objects')
            if objects:
                # Retorna el primer ID encontrado
                for key in objects:
                    return objects[key]['fields']['id']
        else:
            log(f"Error buscando {class_name} '{name}': {data['message']}")
            
    except Exception as e:
        log(f"Excepción buscando {class_name} '{name}': {e}")
    
    return None


def resolve_fks(fields):
    """
    Recorre los campos y si encuentra una FK mapeada con valor string, intenta resolverla al ID.
    """
    resolved_fields = fields.copy()
    for field, value in fields.items():
        if field in FK_MAPPING and isinstance(value, str):
            target_class = FK_MAPPING[field]
            # Caso especial: system_id puede referenciar Server, pero FunctionalCI cubre la mayoría
            # Si es system_id, intentamos buscar en FunctionalCI
            
            log(f"Resolviendo FK {field}='{value}' ({target_class})...")
            obj_id = get_itop_object(target_class, value)
            
            if obj_id:
                resolved_fields[field] = obj_id
                log(f"  -> Resuelto a ID {obj_id}")
            else:
                log(
                    f"  -> NO ENCONTRADO. Se enviará el nombre original "
                    f"(puede fallar si iTop no lo reconcilia)."
                )
                # Nota: Algunas versiones de iTop aceptan {"name": "valor"}
                # para creación inline o lookup.
                # Aquí dejamos el string original por si acaso la API lo maneja.

    return resolved_fields


def create_or_update_ci(data):
    """
    Crea o actualiza un CI en iTop.
    """
    class_name = data.get('class')
    fields = data.get('fields')
    
    if not class_name or not fields:
        log("JSON inválido: falta 'class' o 'fields'")
        return False

    # Resolver claves foráneas
    fields = resolve_fks(fields)
    
    # Preparamos la operación
    # Usamos core/create con politica de reconciliación si es posible, 
    # pero iTop REST API standard usa core/create para nuevos y core/update para existentes.
    # Una estrategia robusta es intentar core/get primero para ver si existe.
    
    # Asumimos que el campo 'name' es la clave principal para reconciliar (común en CMDB)
    name = fields.get('name')
    existing_id = None
    
    if name:
        existing_id = get_itop_object(class_name, name)
    
    operation = 'core/create'
    json_payload = {
        'operation': operation,
        'class': class_name,
        'fields': fields
    }
    
    if existing_id:
        log(f"El CI {class_name} '{name}' ya existe (ID {existing_id})...")
        json_payload['operation'] = 'core/update'
        json_payload['key'] = existing_id
    else:
        log(f"Creando nuevo CI {class_name} '{name}'...")

    params = {
        'version': ITOP_API_VERSION,
        'auth_user': ITOP_USER,
        'auth_pwd': ITOP_PASSWORD,
        'json_data': json.dumps(json_payload)
    }

    try:
        response = requests.post(ITOP_URL, data=params)
        response.raise_for_status()
        res_data = response.json()

        if res_data['code'] == 0:
            objects = res_data.get('objects')
            if objects:
                # Obtener el ID del objeto creado/actualizado
                obj_key = list(objects.keys())[0]
                obj_id = objects[obj_key]['fields']['id']
                log(f"Éxito: {class_name} '{name}' procesado. ID: {obj_id}")
                return True
            else:
                log("Advertencia: Operación exitosa pero sin objetos retornados.")
                return True
        else:
            log(f"Error iTop: {res_data['message']}")
            # Si falla, imprimimos detalles para debug
            if 'errors' in res_data:
                log(f"Detalles: {res_data['errors']}")
            return False

    except Exception as e:
        log(f"Excepción de conexión: {e}")
        return False



def main():
    parser = argparse.ArgumentParser(
        description='Ingesta de CMDB a iTop desde JSONs'
    )
    parser.add_argument(
        '--dir',
        default='devops/core/cmdb',
        help='Directorio con archivos JSON'
    )
    args = parser.parse_args()

    if not ITOP_USER or not ITOP_PASSWORD:
        log("Error: Variables ITOP_USER e ITOP_PASSWORD son requeridas.")
        sys.exit(1)

    target_dir = args.dir
    if not os.path.exists(target_dir):
        log(f"Error: El directorio {target_dir} no existe.")
        sys.exit(1)

    log(f"Iniciando ingesta desde {target_dir}...")
    
    files = sorted([f for f in os.listdir(target_dir) if f.endswith('.json')])
    
    success_count = 0
    fail_count = 0
    
    for filename in files:
        filepath = os.path.join(target_dir, filename)
        log(f"Procesando {filename}...")
        
        try:
            with open(filepath, 'r') as f:
                data = json.load(f)
                if create_or_update_ci(data):
                    success_count += 1
                else:
                    fail_count += 1
        except Exception as e:
            log(f"Error leyendo {filename}: {e}")
            fail_count += 1
            
    log(f"Resumen: {success_count} procesados correctamente, {fail_count} fallidos.")
    
    if fail_count > 0:
        sys.exit(1)

if __name__ == "__main__":
    main()
