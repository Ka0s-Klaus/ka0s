import sys
import os
import json
from typing import Dict, Any, List

# Adjust path to import core
current_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.abspath(os.path.join(current_dir, "../../../"))
if project_root not in sys.path:
    sys.path.append(project_root)

try:
    from core.lib.itop import ItopClient, ItopApiError
except ImportError:
    print("Error: Could not import 'core.lib.itop'.")
    sys.exit(1)

def save_to_file(data: List[Dict[str, Any]], filename: str):
    if not data:
        return
    filepath = os.path.join("compliance/itil/identities", filename)
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"Saved {len(data)} objects to {filepath}")

def main():
    try:
        client = ItopClient()
        print(f"Using iTop API URL: {client.session.endpoint}")
    except Exception as e:
        print(f"Failed to initialize ItopClient: {e}")
        sys.exit(1)

    classes_to_export = [
        ("Person", "01_persons.json"),
        ("Team", "02_teams.json"),
        ("User", "03_user_accounts.json"),
        ("UserProfile", "04_user_profiles.json"),
        ("lnkPersonToTeam", "05_person_team_links.json") # Added link table export
    ]
    
    files_content = {}
    
    for class_name, filename in classes_to_export:
        print(f"Exporting {class_name}...")
        try:
            objects = client.find(class_name, oql=f"SELECT {class_name}", output_fields="*")
            
            formatted_objects = []
            for obj in objects:
                 formatted_objects.append({
                     "class": class_name,
                     "fields": obj.get("fields", {})
                 })
            
            if filename not in files_content:
                files_content[filename] = []
            files_content[filename].extend(formatted_objects)
            
        except ItopApiError as e:
            print(f"Error exporting {class_name}: {e}")
        except Exception as e:
            print(f"Unexpected error exporting {class_name}: {e}")

    for filename, content in files_content.items():
        save_to_file(content, filename)

if __name__ == "__main__":
    main()
