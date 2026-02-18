import os
import sys
import json
import requests
from datetime import datetime

# --- Configuración y Carga de Datos ---
# (Esta parte no cambia)
ITOP_URL = os.environ.get("ITOP_URL")
ITOP_API_USER = os.environ.get("ITOP_API_USER")
ITOP_API_PASSWORD = os.environ.get("ITOP_API_PASSWORD")
ITOP_API_VERSION = "1.3"

EVENT_NAME = os.environ.get("GITHUB_EVENT_NAME")
EVENT_ACTION = os.environ.get("GITHUB_EVENT_ACTION")
ISSUE_PAYLOAD = json.loads(os.environ.get("GITHUB_ISSUE_PAYLOAD", "{}"))
COMMENT_PAYLOAD = json.loads(os.environ.get("GITHUB_COMMENT_PAYLOAD", "{}"))
REPO_NAME = os.environ.get("GITHUB_REPO_FULL_NAME")

# Objeto para el log de auditoría
audit_log = {
    "timestamp_utc": datetime.utcnow().isoformat(),
    "github_event": f"{EVENT_NAME}/{EVENT_ACTION}",
    "status": "success",
    "actions": [],
    "error_message": None
}

# --- Funciones de la API de iTop ---

def itop_api_call(operation, class_name, key, fields=None):
    """Función genérica para realizar llamadas a la API REST de iTop con verificación de errores mejorada."""
    api_url = f"{ITOP_URL}/webservices/rest.php?version={ITOP_API_VERSION}"
    
    payload = {
        "operation": operation,
        "class": class_name,
        "key": key,
        "output_fields": "id, private_log",
    }
    if fields:
        payload["fields"] = fields

    # Preparamos el detalle de la acción para el log de auditoría
    action_detail = {
        "step": f"itop_api_call/{operation}",
        "request_payload": payload
    }

    try:
        from requests.packages.urllib3.exceptions import InsecureRequestWarning
        requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
        
        response = requests.post(
            api_url,
            auth=(ITOP_API_USER, ITOP_API_PASSWORD),
            data={"json_payload": json.dumps(payload)},
            timeout=30,
            verify=False
        )
        response.raise_for_status()  # Esto captura errores HTTP (4xx, 5xx)
        
        response_data = response.json()
        action_detail["response_data"] = response_data

        # --- NUEVA VERIFICACIÓN DE ERRORES LÓGICOS DE ITOP ---
        # Si la respuesta no contiene 'objects' pero sí 'code' y 'message', es un error de iTop.
        if "objects" not in response_data and "code" in response_data and response_data["code"] != 0:
            error_message = f"iTop API Error: {response_data.get('message', 'No message')}"
            raise requests.exceptions.HTTPError(error_message) # Forzamos una excepción para ser capturada abajo

        audit_log["actions"].append(action_detail)
        return response_data

    except requests.exceptions.RequestException as e:
        audit_log["status"] = "error"
        # Si el error ya tiene un mensaje (como el que forzamos arriba), lo usamos.
        error_message_str = str(e)
        audit_log["error_message"] = error_message_str
        
        # Añadimos la respuesta completa al log si está disponible
        if hasattr(e, 'response') and e.response is not None:
            try:
                audit_log["error_details"] = e.response.json()
            except json.JSONDecodeError:
                audit_log["error_details"] = e.response.text
        else:
            # Si no hay objeto response, puede que el error venga de nuestra verificación manual
            if "iTop API Error" in error_message_str:
                 audit_log["error_details"] = action_detail.get("response_data")

        print(json.dumps(audit_log))
        sys.exit(1)


def find_itop_incident_by_github_ref(github_ref):
    """Busca un incidente en iTop usando la referencia de GitHub en el log."""
    action_detail = {"step": "find_incident", "github_ref": github_ref}
    query = f"SELECT Incident WHERE private_log LIKE '%{github_ref}%'"
    response = itop_api_call("core/get", "Incident", {"oql": query})
    
    if response and "objects" in response and response["objects"]:
        incident_key = list(response["objects"].keys())[0]
        incident_data = response["objects"][incident_key]["fields"]
        action_detail["result"] = "found"
        action_detail["incident_id"] = incident_data['id']
        audit_log["actions"].append(action_detail)
        return incident_data
    
    action_detail["result"] = "not_found"
    audit_log["actions"].append(action_detail)
    return None

def create_itop_incident(issue_data, github_ref):
    """Crea un nuevo incidente en iTop."""
    action_detail = {"step": "create_incident"}
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
        "impact": "3",
        "urgency": "3",
        "private_log": f"{{'message': 'Referencia de GitHub: {github_ref}'}}"
    }
    
    response = itop_api_call("core/create", "Incident", key={}, fields=fields)
    created_incident_key = list(response["objects"].keys())[0]
    created_incident_id = response["objects"][created_incident_key]["fields"]["id"]
    action_detail["result"] = "success"
    action_detail["incident_id"] = created_incident_id
    audit_log["actions"].append(action_detail)

def update_itop_incident(incident_id, updates):
    """Actualiza un incidente existente en iTop."""
    action_detail = {"step": "update_incident", "incident_id": incident_id, "updates": updates}
    itop_api_call("core/update", "Incident", key={"id": incident_id}, fields=updates)
    action_detail["result"] = "success"
    audit_log["actions"].append(action_detail)

def add_comment_to_itop_incident(incident_id, comment_data):
    """Añade un comentario al log del incidente."""
    action_detail = {"step": "add_comment", "incident_id": incident_id}
    comment_text = (
        f"Nuevo comentario desde GitHub por @{comment_data['user']['login']}:\n\n"
        f"{comment_data['body']}"
    )
    # Escapamos JSON para el log de iTop
    escaped_comment = json.dumps(comment_text)
    update_itop_incident(incident_id, {"private_log": f"{{'message': {escaped_comment}}}"})
    action_detail["result"] = "success"
    audit_log["actions"].append(action_detail)

# --- Lógica Principal del Workflow ---

def main():
    """Punto de entrada del script."""
    if not all([ITOP_URL, ITOP_API_USER, ITOP_API_PASSWORD]):
        audit_log["status"] = "error"
        audit_log["error_message"] = "Faltan secretos de iTop (ITOP_URL, ITOP_API_USER, ITOP_API_PASSWORD)."
        print(json.dumps(audit_log))
        sys.exit(1)

    # Para comentarios, el payload de la issue está en un nivel diferente
    if EVENT_NAME == "issue_comment":
        issue_payload_source = ISSUE_PAYLOAD
    else:
        issue_payload_source = ISSUE_PAYLOAD

    issue_number = issue_payload_source.get("number")
    if not issue_number:
        audit_log["status"] = "skipped"
        audit_log["error_message"] = "El evento no contenía un número de issue."
        print(json.dumps(audit_log))
        return

    github_ref = f"github_ref:{REPO_NAME}/issues/{issue_number}"
    audit_log["github_ref"] = github_ref
    
    # --- LÓGICA DE AUTO-REPARACIÓN ---
    
    # 1. Siempre buscamos el incidente primero.
    incident = find_itop_incident_by_github_ref(github_ref)

    # 2. Si el incidente NO existe, y el evento NO es la apertura de una issue ya cerrada, lo creamos.
    #    Esto evita crear un incidente en iTop para una issue que se creó y cerró antes de que la integración existiera.
    if not incident and issue_payload_source.get("state") == "open":
        audit_log["actions"].append({
            "step": "auto_repair",
            "result": "incident_not_found_creating_it",
            "trigger_event": EVENT_NAME
        })
        create_itop_incident(issue_payload_source, github_ref)
        # Después de crearlo, lo volvemos a buscar para tener su ID y continuar con la acción original si es necesario.
        incident = find_itop_incident_by_github_ref(github_ref)

    # Si después de intentar crearlo sigue sin existir (porque la issue estaba cerrada), paramos.
    if not incident:
        audit_log["status"] = "skipped"
        audit_log["actions"].append({
            "step": "final_check",
            "result": "incident_does_not_exist_and_cannot_be_created_skipping"
        })
        print(json.dumps(audit_log))
        return

    incident_id = incident['id']

    # --- Flujo basado en el evento de GitHub ---
    
    # Ya hemos manejado 'opened' con la lógica de creación anterior.
    # Ahora solo procesamos las acciones sobre un incidente que YA existe.
    
    if EVENT_NAME == "issues":
        if EVENT_ACTION == "edited":
            # El título es el único campo que actualizamos en una edición por ahora.
            update_itop_incident(incident_id, {"title": issue_payload_source['title']})

        elif EVENT_ACTION == "closed":
            # Mapeo: closed (GitHub) -> resolved (iTop)
            update_itop_incident(incident_id, {"status": "resolved"})

    elif EVENT_NAME == "issue_comment" and EVENT_ACTION == "created":
        add_comment_to_itop_incident(incident_id, COMMENT_PAYLOAD)
    
    # Imprimir el log de auditoría final en formato JSON
    print(json.dumps(audit_log))

if __name__ == "__main__":
    main()
