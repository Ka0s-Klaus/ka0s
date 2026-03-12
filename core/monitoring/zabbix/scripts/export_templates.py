#!/usr/bin/env python3
import requests
import json
import os
import sys
# import yaml # Not needed as Zabbix returns raw string

# Configuración desde variables de entorno
ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
# Fallback si está vacío
if not ZABBIX_URL:
    print("Error: ZABBIX_URL environment variable is set but empty.")
    sys.exit(1)

ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')
OUTPUT_DIR = os.getenv('OUTPUT_DIR', 'core/monitoring/zabbix/templates')

class ZabbixTemplateExporter:
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
            sys.exit(1)

    def login(self):
        print(f"Authenticating to {self.url}...")
        self.auth_token = self._post("user.login", {"username": self.user, "password": self.password})
        print("Authentication successful.")

    def export_all_templates(self):
        if not self.auth_token:
            self.login()

        print("Fetching template list...")
        templates = self._post("template.get", {
            "output": ["templateid", "host", "name"],
            # Optional: Filter only used templates or by group
        })
        
        total = len(templates)
        print(f"Found {total} templates. Starting export...")

        for idx, tmpl in enumerate(templates):
            template_id = tmpl['templateid']
            template_name = tmpl['name']
            # Sanitize filename
            safe_name = "".join([c if c.isalnum() or c in (' ', '-', '_', '.') else '_' for c in template_name])
            filename = os.path.join(OUTPUT_DIR, f"{safe_name}.yaml")
            
            print(f"[{idx+1}/{total}] Exporting: {template_name}")
            
            # Export in YAML format
            export_data = self._post("configuration.export", {
                "options": {
                    "templates": [template_id]
                },
                "format": "yaml"
            })
            
            with open(filename, 'w') as f:
                f.write(export_data)

        print(f"Export completed. {total} templates saved to {OUTPUT_DIR}")

if __name__ == "__main__":
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
    
    exporter = ZabbixTemplateExporter(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    exporter.export_all_templates()
