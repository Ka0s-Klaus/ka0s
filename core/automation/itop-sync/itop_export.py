import os
import json
import requests
import urllib3
from typing import Dict, Any, List

# Suppress InsecureRequestWarning
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# iTop API Configuration
BASE_URL = os.getenv(
    "ITOP_URL", "http://localhost/webservices/rest.php"
).rstrip('/')
if not BASE_URL.endswith(".php"):
    ITOP_URL = f"{BASE_URL}/webservices/rest.php"
else:
    ITOP_URL = BASE_URL

ITOP_USER = os.getenv("ITOP_USER", "admin")
ITOP_PASSWORD = os.getenv("ITOP_PASSWORD", "admin")
ITOP_API_VERSION = "1.3"


def itop_request(operation: str, data: Dict[str, Any]) -> Dict[str, Any]:
    """Sends a request to the iTop REST API."""
    payload = {
        "version": ITOP_API_VERSION,
        "auth_user": ITOP_USER,
        "auth_pwd": ITOP_PASSWORD,
        "json_data": json.dumps({
            "operation": operation,
            **data
        })
    }

    try:
        response = requests.post(
            ITOP_URL, 
            data=payload, 
            verify=False
        )
        response.raise_for_status()
        
        try:
            result = response.json()
        except json.JSONDecodeError:
            print(f"Failed to decode JSON. Status: {response.status_code}")
            # Print first 500 chars
            print(f"Raw Response: {response.text[:500]}...")
            return None

        if result.get("code") != 0:
            print(f"Error in iTop request: {result.get('message')}")
            return None
            
        return result
    except requests.exceptions.RequestException as e:
        print(f"HTTP Request failed: {e}")
        return None


def export_class(class_name: str, fields: str = "*") -> List[Dict[str, Any]]:
    """Exports all objects of a given class from iTop."""
    print(f"Exporting class: {class_name}...")
    oql = f"SELECT {class_name}"
    data = {
        "class": class_name,
        "key": oql,
        "output_fields": fields
    }
    
    result = itop_request("core/get", data)
    if not result or not result.get("objects"):
        print(f"No objects found for {class_name}")
        return []
    
    exported_objects = []
    for key, obj_data in result["objects"].items():
        # Clean up fields to match sync format
        fields_data = obj_data.get("fields", {})

        # We need to process foreign keys to be sync-friendly
        # (e.g., {"name": "Value"} instead of "123")
        # For simplicity in this initial export, we keep raw values
        # but this might need manual adjustment
        # Ideally, we should resolve IDs to names for readability
        # and portability

        # Special handling for org_id and other key references
        # Ensure we export the friendly name if available in the structure
        # (iTop often returns detailed structures)
        # However, without deep inspection, raw export is the safest start.

        exported_objects.append({
            "class": class_name,
            "fields": fields_data
        })

    return exported_objects


def save_to_file(data: List[Dict[str, Any]], filename: str):
    """Saves data to a JSON file."""
    if not data:
        return
        
    filepath = os.path.join("compliance/itil/service-management", filename)
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"Saved {len(data)} objects to {filepath}")

def main():
    # Classes to export in order
    classes_to_export = [
        ("Organization", "01_organizations.json"),
        ("ServiceFamily", "02_services.json"),  # Will append Service later
        ("Service", "02_services.json"),
        ("ServiceSubcategory", "03_service_subcategories.json"),
        ("CustomerContract", "04_contracts.json"),
        ("SLA", "05_slas.json"),  # Will append SLT later
        ("SLT", "05_slas.json"),
        ("DeliveryModel", "06_delivery_models.json")
    ]

    # Group by filename
    files_content = {}
    
    for class_name, filename in classes_to_export:
        objects = export_class(class_name)
        if filename not in files_content:
            files_content[filename] = []
        files_content[filename].extend(objects)
        
    for filename, content in files_content.items():
        save_to_file(content, filename)

if __name__ == "__main__":
    main()
