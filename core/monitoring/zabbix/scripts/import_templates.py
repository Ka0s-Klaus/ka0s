#!/usr/bin/env python3
import requests
import json
import os
import sys
import glob

ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

class ZabbixTemplateImporter:
    def __init__(self, url, user, password):
        self.url = url
        self.user = user
        self.password = password
        self.auth_token = None
        self.request_id = 1

    def _post(self, method, params):
        payload = {
            "jsonrpc": "2.0",
            "method": method,
            "params": params,
            "id": self.request_id
        }
        
        headers = {'Content-Type': 'application/json'}
        if self.auth_token:
            headers['Authorization'] = f"Bearer {self.auth_token}"
            
        try:
            response = requests.post(self.url, data=json.dumps(payload), headers=headers, timeout=30)
            response.raise_for_status()
            result = response.json()
            self.request_id += 1
            
            if 'error' in result:
                raise Exception(f"API Error: {result['error']}")
            
            return result.get('result')
        except Exception as e:
            print(f"Error connecting to Zabbix API: {e}")
            return None

    def login(self):
        print(f"Authenticating to {self.url}...")
        self.auth_token = self._post("user.login", {"username": self.user, "password": self.password})
        if self.auth_token:
            print("Authentication successful.")
        else:
            print("Authentication failed.")
            sys.exit(1)

    def import_template(self, file_path):
        if not self.auth_token:
            self.login()

        print(f"Importing template: {file_path}")
        try:
            with open(file_path, 'r') as f:
                yaml_content = f.read()
        except Exception as e:
            print(f"Failed to read file {file_path}: {e}")
            return False

        # Parameters for Zabbix API configuration.import
        params = {
            "format": "yaml",
            "rules": {
                "templates": {
                    "createMissing": True,
                    "updateExisting": True
                },
                "items": {
                    "createMissing": True,
                    "updateExisting": True
                },
                "triggers": {
                    "createMissing": True,
                    "updateExisting": True
                },
                "graphs": {
                    "createMissing": True,
                    "updateExisting": True
                },
                "httptests": {
                    "createMissing": True,
                    "updateExisting": True
                },
                "discoveryRules": {
                    "createMissing": True,
                    "updateExisting": True
                },
                "templateLinkage": {
                    "createMissing": True
                },
                "valueMaps": {
                    "createMissing": True,
                    "updateExisting": True
                }
            },
            "source": yaml_content
        }

        result = self._post("configuration.import", params)
        if result is not None:
            print(f"Successfully imported: {os.path.basename(file_path)}")
            return True
        else:
            print(f"Failed to import: {os.path.basename(file_path)}")
            return False

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 import_templates.py <path_to_yaml_file_or_directory>")
        sys.exit(1)
        
    target = sys.argv[1]
    importer = ZabbixTemplateImporter(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    
    if os.path.isfile(target):
        importer.import_template(target)
    elif os.path.isdir(target):
        print(f"Scanning directory {target} for YAML files...")
        yaml_files = glob.glob(os.path.join(target, '*.yaml')) + glob.glob(os.path.join(target, '*.yml'))
        
        success_count = 0
        for f in yaml_files:
            if importer.import_template(f):
                success_count += 1
                
        print(f"\nImport summary: {success_count}/{len(yaml_files)} templates imported successfully.")
    else:
        print(f"Error: {target} is not a valid file or directory.")
        sys.exit(1)
