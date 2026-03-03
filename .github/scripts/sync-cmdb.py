#!/usr/bin/env python3
import os
import json
import sys
import requests
import glob
from typing import Dict, Any, List

# Configuración desde variables de entorno
ITOP_URL = os.getenv('ITOP_URL')
ITOP_USER = os.getenv('ITOP_USER')
ITOP_PASSWORD = os.getenv('ITOP_PASSWORD')
CMDB_DIR = os.getenv('CMDB_DIR', 'devops/core/cmdb')

if not all([ITOP_URL, ITOP_USER, ITOP_PASSWORD]):
    print("Error: Faltan variables de entorno requeridas (ITOP_URL, ITOP_USER, ITOP_PASSWORD)")
    sys.exit(1)

def itop_request(operation: str, class_name: str, fields: Dict[str, Any], key: str = None) -> Dict[str, Any]:
    """
    Realiza una petición a la API REST de iTop.
    """
    data = {
        "operation": operation,
        "class": class_name,
        "comment": "Actualizado via GitHub Actions (Ka0s Automation)",
        "output_fields": "id, friendlyname"
    }
    
    if operation == 'core/create':
        data["fields"] = fields
    elif operation == 'core/update':
        if not key:
             raise ValueError("Operation core/update requires a key")
        data["key"] = key
        data["fields"] = fields
    elif operation == 'core/get':
        data["key"] = key

    payload = {
        "auth_user": ITOP_USER,
        "auth_pwd": ITOP_PASSWORD,
        "json_data": json.dumps(data)
    }

    try:
        response = requests.post(f"{ITOP_URL}/webservices/rest.php", data=payload)
        response.raise_for_status()
        result = response.json()
        
        if result.get('code') != 0:
            print(f"Error iTop API ({operation} {class_name}): {result.get('message')}")
            # Si el error es que no existe el objeto en update, lo manejaremos fuera
            return result
            
        return result
    except Exception as e:
        print(f"Excepción conectando a iTop: {str(e)}")
        sys.exit(1)

def process_file(file_path: str):
    """
    Procesa un archivo JSON individual.
    """
    print(f"Procesando: {file_path}")
    try:
        with open(file_path, 'r') as f:
            ci_data = json.load(f)
    except json.JSONDecodeError as e:
        print(f"Error: JSON inválido en {file_path}: {e}")
        return False

    class_name = ci_data.get('class')
    fields = ci_data.get('fields')
    
    if not class_name or not fields:
        print(f"Error: Estructura inválida en {file_path}. Requiere 'class' y 'fields'.")
        return False

    # Nombre del objeto para reconciliación
    ci_name = fields.get('name')
    if not ci_name:
         print(f"Error: El campo 'name' es obligatorio en 'fields' para {file_path}")
         return False

    # Estrategia de Reconciliación: Buscar por nombre (OQL)
    # iTop permite buscar por clave si la clave es el nombre, o usando OQL.
    # Para simplificar, intentaremos un core/get con OQL primero.
    
    oql = f"SELECT {class_name} WHERE name='{ci_name}'"
    check_data = {
        "operation": "core/get",
        "class": class_name,
        "key": oql,
        "output_fields": "id"
    }
    
    payload = {
        "auth_user": ITOP_USER,
        "auth_pwd": ITOP_PASSWORD,
        "json_data": json.dumps(check_data)
    }
    
    response = requests.post(f"{ITOP_URL}/webservices/rest.php", data=payload)
    check_result = response.json()
    
    exists = False
    ci_id = None
    
    if check_result.get('code') == 0 and check_result.get('objects'):
        # Existe -> Update
        objects = check_result.get('objects')
        if objects:
            # Tomamos el primer ID (debería ser único por nombre en teoría, o tomamos el primero)
            first_key = list(objects.keys())[0]
            ci_id = objects[first_key]['key']
            exists = True

    if exists:
        print(f"El CI '{ci_name}' ({class_name}) existe (ID: {ci_id}). Actualizando...")
        # Eliminamos campos que no deben actualizarse si existen (como claves primarias si las hubiera, pero name suele ser editable)
        # Nota: En iTop algunos campos pueden ser inmutables.
        res = itop_request('core/update', class_name, fields, key=ci_id)
    else:
        print(f"El CI '{ci_name}' ({class_name}) NO existe. Creando...")
        res = itop_request('core/create', class_name, fields)

    if res.get('code') == 0:
        print(f"Éxito: {res.get('message')}")
        return True
    else:
        print(f"Fallo: {res.get('message')}")
        return False

def main():
    # Buscar archivos JSON recursivamente en CMDB_DIR
    files = glob.glob(os.path.join(CMDB_DIR, '**/*.json'), recursive=True)
    
    if not files:
        print(f"No se encontraron archivos JSON en {CMDB_DIR}")
        return

    print(f"Encontrados {len(files)} archivos para procesar.")
    
    success_count = 0
    error_count = 0
    
    # Ordenar archivos para procesar dependencias (simple orden alfabético por ahora)
    # Idealmente: Org -> Location -> Persona -> Server -> App
    # Nombrando los archivos como 01_org, 02_loc ayuda.
    files.sort()

    for file_path in files:
        if process_file(file_path):
            success_count += 1
        else:
            error_count += 1

    print(f"\nResumen: {success_count} exitosos, {error_count} fallidos.")
    
    if error_count > 0:
        sys.exit(1)

if __name__ == "__main__":
    main()
