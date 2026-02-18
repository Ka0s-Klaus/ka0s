import os
import sys
import json
import requests

# --- Configuración y Carga de Datos ---
ITOP_URL = os.environ.get("ITOP_URL")
ITOP_API_USER = os.environ.get("ITOP_API_USER")
ITOP_API_PASSWORD = os.environ.get("ITOP_API_PASSWORD")
ITOP_API_VERSION = "1.3" # Versión de la API REST de iTop

EVENT_NAME = os.environ.get("GITHUB_EVENT_NAME")
EVENT_ACTION = os.environ.get("GITHUB_EVENT_ACTION")
ISSUE_PAYLOAD = json.loads(os.environ.get("GITHUB_ISSUE_PAYLOAD", "{}"))
COMMENT_PAYLOAD = json.loads(os.environ.get("GITHUB_COMMENT_PAYLOAD", "{}"))
REPO_NAME = os.environ.get("GITHUB_REPO_FULL_NAME")

# --- Funciones de la API de iTop ---

def itop_api_call(operation, class_name, key, fields=None):
    """Función genérica para realizar llamadas a la API REST de iTop."""
    api_url = f"{ITOP_URL}/webservices/rest.php?version={ITOP_API_VERSION}"
    
    payload = {
        "operation": operation,
        "class": class_name,
        "key": key,
        "output_fields": "id, private_log",
    }
    if fields:
        payload["fields"] = fields

    try:
        response = requests.post(
            api_url,
            auth=(ITOP_API_USER, ITOP_API_PASSWORD),
            data={"json_payload": json.dumps(payload)},
            timeout=30
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error en la llamada a la API de iTop: {e}")
        if e.response:
            print(f"Respuesta de iTop: {e.response.text}")
        sys.exit(1)

def find_itop_incident_by_github_ref(github_ref):
    """Busca un incidente en iTop usando la referencia de GitHub en el log."""
    print(f"Buscando incidente con referencia: {github_ref}")
    # Usamos OQL para buscar en el log. Esto es menos eficiente que un campo dedicado.
    query = f"SELECT Incident WHERE private_log LIKE '%{github_ref}%'"
    response = itop_api_call("core/get", "Incident", {"oql": query})
    
    if response and "objects" in response and response["objects"]:
        incident_key = list(response["objects"].keys())[0]
        incident_data = response["objects"][incident_key]["fields"]
        print(f"Incidente encontrado: ID {incident_data['id']}")
        return incident_data
    print("No se encontró un incidente existente.")
    return None

def create_itop_incident(issue_data, github_ref):
    """Crea un nuevo incidente en iTop."""
    print("Creando nuevo incidente en iTop...")
    # Mapeo de campos (simplificado)
    description = (
        f"Incidente creado desde GitHub Issue.\n\n"
        f"URL: {issue_data['html_url']}\n\n"
        f"--- DESCRIPCIÓN ---\n{issue_data['body']}"
    )
    
    fields = {
        "org_id": "SELECT Organization WHERE name = 'Ka0s Inc'", # IMPORTANTE: Ajusta tu organización
        "caller_id": "SELECT Person WHERE email = 'asantacana@kyndryl.com'", # IMPORTANTE: Ajusta un llamante genérico
        "title": issue_data['title'],
        "description": description,
        "status": "new",
        "impact": "3", # Nivel medio por defecto
        "urgency": "3", # Nivel medio por defecto
        "private_log": f"{{'message': 'Referencia de GitHub: {github_ref}'}}" # Añadimos la referencia
    }
    
    response = itop_api_call("core/create", "Incident", key={}, fields=fields)
    print(f"Incidente creado con éxito. Respuesta: {response}")

def update_itop_incident(incident_id, updates):
    """Actualiza un incidente existente en iTop."""
    print(f"Actualizando incidente {incident_id} con: {updates}")
    itop_api_call("core/update", "Incident", key={"id": incident_id}, fields=updates)
    print("Incidente actualizado con éxito.")

def add_comment_to_itop_incident(incident_id, comment_data):
    """Añade un comentario al log del incidente."""
    print(f"Añadiendo comentario al incidente {incident_id}")
    comment_text = (
        f"Nuevo comentario desde GitHub por @{comment_data['user']['login']}:\n\n"
        f"{comment_data['body']}"
    )
    update_itop_incident(incident_id, {"private_log": f"{{'message': '{comment_text}'}}"})


# --- Lógica Principal del Workflow ---

def main():
    """Punto de entrada del script."""
    if not all([ITOP_URL, ITOP_API_USER, ITOP_API_PASSWORD]):
        print("Error: Faltan secretos de iTop (ITOP_URL, ITOP_API_USER, ITOP_API_PASSWORD).")
        sys.exit(1)

    issue_number = ISSUE_PAYLOAD.get("number")
    if not issue_number:
        print("No se encontró número de issue. Saliendo.")
        return

    github_ref = f"github_ref:{REPO_NAME}/issues/{issue_number}"
    
    # Busca el incidente existente
    incident = find_itop_incident_by_github_ref(github_ref)
    incident_id = incident['id'] if incident else None

    # --- Flujo basado en el evento de GitHub ---
    
    if EVENT_NAME == "issues":
        if EVENT_ACTION == "opened":
            if not incident:
                create_itop_incident(ISSUE_PAYLOAD, github_ref)
            else:
                print("La issue se ha abierto, pero ya existe un incidente asociado. No se toma acción.")
        
        elif EVENT_ACTION == "edited":
            if incident:
                updates = {"title": ISSUE_PAYLOAD['title']}
                update_itop_incident(incident_id, updates)
            else:
                print("Se ha editado una issue no sincronizada. Ignorando.")

        elif EVENT_ACTION == "closed":
            if incident:
                updates = {"status": "resolved"} # Mapeo: closed -> resolved
                update_itop_incident(incident_id, updates)
            else:
                print("Se ha cerrado una issue no sincronizada. Ignorando.")

    elif EVENT_NAME == "issue_comment" and EVENT_ACTION == "created":
        if incident:
            add_comment_to_itop_incident(incident_id, COMMENT_PAYLOAD)
        else:
            print("Comentario en una issue no sincronizada. Ignorando.")

if __name__ == "__main__":
    main()
