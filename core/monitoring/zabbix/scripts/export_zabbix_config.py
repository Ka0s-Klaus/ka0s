#!/usr/bin/env python3
import requests
import json
import yaml
import os
import sys
from datetime import datetime

# Configuración
ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')
OUTPUT_DIR = os.getenv('OUTPUT_DIR', 'core/monitoring/zabbix/configs')

class ZabbixAPI:
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
            "id": self.request_id,
            "auth": self.auth_token
        }
        headers = {'Content-Type': 'application/json'}
        try:
            response = requests.post(self.url, data=json.dumps(payload), headers=headers, timeout=30)
            print(f"DEBUG: Response status: {response.status_code}")
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
        print(f"Authenticating to {self.url} as {self.user}...")
        self.auth_token = self._post("user.login", {"username": self.user, "password": self.password})
        print("Authentication successful.")

    def export_configuration(self):
        if not self.auth_token:
            self.login()

        print("Exporting Hosts...")
        # Get all hosts
        hosts = self._post("host.get", {
            "output": ["host", "name", "description", "status"],
            "selectInterfaces": ["ip", "dns", "useip", "port", "type", "main"],
            "selectParentTemplates": ["name"],
            "selectTags": "extend",
            "selectMacros": "extend"
        })

        # Save Hosts
        hosts_file = os.path.join(OUTPUT_DIR, "hosts.yaml")
        with open(hosts_file, 'w') as f:
            yaml.dump(hosts, f, default_flow_style=False, sort_keys=False)
        print(f"Saved {len(hosts)} hosts to {hosts_file}")

        print("Exporting Templates...")
        # Get all templates
        templates = self._post("template.get", {
            "output": ["host", "name", "description"],
            "selectGroups": ["name"]
        })
        
        # Save Templates Summary (Full export uses configuration.export which is XML/JSON string)
        templates_file = os.path.join(OUTPUT_DIR, "templates_list.yaml")
        with open(templates_file, 'w') as f:
            yaml.dump(templates, f, default_flow_style=False, sort_keys=False)
        print(f"Saved list of {len(templates)} templates to {templates_file}")

        # Full XML Export of Everything (Backup)
        print("Generating Full Configuration Backup (XML)...")
        # Get IDs for export
        host_ids = [h['hostid'] for h in hosts]
        template_ids = [t['templateid'] for t in templates]
        
        if host_ids or template_ids:
            export_data = self._post("configuration.export", {
                "options": {
                    "hosts": host_ids,
                    "templates": template_ids,
                    "groups": [] # All groups linked to hosts/templates are exported automatically
                },
                "format": "xml"
            })
            
            backup_file = os.path.join(OUTPUT_DIR, f"full_backup_{datetime.now().strftime('%Y%m%d')}.xml")
            with open(backup_file, 'w') as f:
                f.write(export_data)
            print(f"Full XML backup saved to {backup_file}")

if __name__ == "__main__":
    with open("debug_zabbix.log", "w") as f:
        f.write("Starting script...\n")
    
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
    
    zabbix = ZabbixAPI(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    zabbix.export_configuration()
