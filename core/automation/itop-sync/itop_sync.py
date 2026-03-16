import os
import json
import argparse
import requests
import sys
import urllib3
from typing import Dict, Any

# Suppress InsecureRequestWarning
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


# iTop API Configuration
ITOP_URL = os.getenv("ITOP_URL", "http://localhost/webservices/rest.php")
ITOP_USER = os.getenv("ITOP_USER", "admin")
ITOP_PASSWORD = os.getenv("ITOP_PASSWORD", "admin")
ITOP_API_VERSION = "1.3"


def itop_request(operation: str, data: Dict[str, Any]) -> Dict[str, Any]:
    """Sends a request to the iTop REST API."""
    payload = {
        "version": ITOP_API_VERSION,
        "json_data": json.dumps({
            "operation": operation,
            **data
        })
    }

    try:
        response = requests.post(
            ITOP_URL, 
            data=payload, 
            auth=(ITOP_USER, ITOP_PASSWORD), 
            verify=False
        )
        response.raise_for_status()
        
        # Debugging: Print raw response content if JSON decode fails
        try:
            result = response.json()
        except json.JSONDecodeError:
            print(f"Failed to decode JSON. Status: {response.status_code}")
            # Print first 500 chars
            print(f"Raw Response: {response.text[:500]}...")
            return None

        if result.get("code") != 0:
            print(f"Error in iTop request: {result.get('message')}")
            if "output" in result:
                print(f"Output: {result['output']}")
            return None

        return result
    except requests.exceptions.RequestException as e:
        print(f"HTTP Request failed: {e}")
        return None


def find_object(class_name: str, key_fields: Dict[str, Any]) -> str:
    """Finds an object in iTop by key fields using OQL."""
    conditions = []
    for field, value in key_fields.items():
        if isinstance(value, dict) and "name" in value:
            # Handle foreign key reference by name: field->name = 'value'
            safe_value = value["name"].replace("'", "\\'")
            conditions.append(f"{field}->name = '{safe_value}'")
        elif isinstance(value, str):
            # Simple string field
            safe_value = value.replace("'", "\\'")
            conditions.append(f"{field} = '{safe_value}'")
        else:
            # Skip complex fields that are not simple name references for now
            continue

    if not conditions:
        return None

    oql = f"SELECT {class_name} WHERE {' AND '.join(conditions)}"

    data = {
        "class": class_name,
        "key": oql,
        "output_fields": "id"
    }

    result = itop_request("core/get", data)
    if result and result.get("objects"):
        # Return the first matching object ID
        for key in result["objects"]:
            # This is usually the ID
            return result["objects"][key]["key"]

    return None


def sync_object(obj_def: Dict[str, Any]):
    """Synchronizes a single object definition with iTop."""
    class_name = obj_def.get("class")
    fields = obj_def.get("fields", {})
    # key_fields are used to identify the object for updates
    key_fields = obj_def.get("key_fields", {})

    if not class_name or not fields:
        print("Invalid object definition: missing class or fields")
        return

    # If no explicit key_fields, try to infer from 'name' if present
    if not key_fields and "name" in fields:
        key_fields = {"name": fields["name"]}

    if not key_fields:
        msg = f"Cannot sync {class_name}: no key_fields provided"
        print(msg)
        return

    print(f"Syncing {class_name} identified by {key_fields}...")

    existing_id = find_object(class_name, key_fields)

    if existing_id:
        print(f"  Found existing object ID: {existing_id}. Updating...")
        data = {
            "class": class_name,
            "key": existing_id,
            "fields": fields
        }
        result = itop_request("core/update", data)
    else:
        print("  Object not found. Creating...")
        data = {
            "class": class_name,
            "fields": fields
        }
        result = itop_request("core/create", data)

    if result:
        print(f"  Success: {result.get('message')}")
    else:
        print("  Failed.")


def process_file(file_path: str):
    """Reads a JSON file and processes its contents."""
    print(f"Processing file: {file_path}")
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)

        if isinstance(data, list):
            for item in data:
                sync_object(item)
        elif isinstance(data, dict):
            sync_object(data)
        else:
            print("Invalid JSON format: expected list or dict")

    except Exception as e:
        print(f"Error processing file {file_path}: {e}")


def main():
    parser = argparse.ArgumentParser(
        description="Sync JSON definitions to iTop"
    )
    parser.add_argument("path", help="Path to JSON file or directory")
    args = parser.parse_args()

    if os.path.isfile(args.path):
        process_file(args.path)
    elif os.path.isdir(args.path):
        # Process files in alphabetical order to respect dependencies
        files = sorted(
            [f for f in os.listdir(args.path) if f.endswith(".json")]
        )
        for f in files:
            process_file(os.path.join(args.path, f))
    else:
        print(f"Path not found: {args.path}")
        sys.exit(1)


if __name__ == "__main__":
    main()
