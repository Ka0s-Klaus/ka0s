import sys
import os
import json
import argparse
from typing import Dict, Any

# Adjust path to import core
current_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.abspath(os.path.join(current_dir, "../../../"))
if project_root not in sys.path:
    sys.path.append(project_root)

try:
    from core.lib.itop import ItopClient, ItopApiError, ItopConnectionError, ItopError
except ImportError:
    print("Error: Could not import 'core.lib.itop'. Check your PYTHONPATH or project structure.")
    sys.exit(1)

def process_file(client: ItopClient, file_path: str):
    print(f"Processing file: {file_path}")
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)

        if isinstance(data, list):
            for item in data:
                res = client.sync(item)
                print(f"  {res['status'].title()}: {res.get('class')} ({res.get('id')})")
        elif isinstance(data, dict):
            res = client.sync(data)
            print(f"  {res['status'].title()}: {res.get('class')} ({res.get('id')})")
        else:
            print("Invalid JSON format: expected list or dict")

    except ItopError as e:
        print(f"  iTop Error processing {file_path}: {e}")
    except Exception as e:
        print(f"  Error processing file {file_path}: {e}")

def main():
    parser = argparse.ArgumentParser(description="Sync JSON definitions to iTop (v2 SDK)")
    parser.add_argument("path", help="Path to JSON file or directory")
    args = parser.parse_args()

    try:
        client = ItopClient()
        # Mask password in logs if present in URL (unlikely but good practice)
        # Note: Session stores credentials separately, so endpoint usually doesn't have them
        print(f"Using iTop API URL: {client.session.endpoint}")

        if os.path.isfile(args.path):
            process_file(client, args.path)
        elif os.path.isdir(args.path):
            files = sorted([f for f in os.listdir(args.path) if f.endswith(".json")])
            for f in files:
                process_file(client, os.path.join(args.path, f))
        else:
            print(f"Path not found: {args.path}")
            sys.exit(1)

    except ItopConnectionError as e:
        print(f"Critical Connection Error: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
