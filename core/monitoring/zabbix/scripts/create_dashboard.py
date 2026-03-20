#!/usr/bin/env python3
import requests
import json
import os
import sys

# Configuración
ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
# Ensure URL is not empty string if env var exists but is empty
if not ZABBIX_URL:
    print("Error: ZABBIX_URL environment variable is set but empty.")
    sys.exit(1)

ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

class ZabbixDashboardManager:
    def __init__(self, url, user, password):
        self.url = url
        # Handle empty strings from empty secrets by falling back to defaults
        self.user = user if user else 'Admin'
        self.password = password if password else 'zabbix'
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
            print(f"Error connecting to Zabbix API: {e}\nParams: {json.dumps(params, indent=2)}")
            sys.exit(1)

    def log(self, msg):
        try:
            with open("/tmp/dashboard.log", "a") as f:
                f.write(f"{msg}\n")
        except:
            pass
        print(msg)

    def login(self):
        self.log(f"Authenticating to {self.url}...")
        self.auth_token = self._post("user.login", {"username": self.user, "password": self.password})
        self.log("Authentication successful.")

    def resolve_item_id(self, host_name, item_key):
        # Helper to find itemid by host and key
        hosts = self._post("host.get", {"filter": {"host": [host_name]}, "output": ["hostid"]})
        if not hosts:
            self.log(f"Warning: Host '{host_name}' not found.")
            return None
        
        items = self._post("item.get", {
            "hostids": hosts[0]['hostid'],
            "search": {"key_": item_key},
            "output": ["itemid"]
        })
        
        if not items:
            self.log(f"Warning: Item '{item_key}' not found on host '{host_name}'.")
            return None
            
        return items[0]['itemid']

    def resolve_widgets(self, widgets):
        """Recursively resolve dynamic fields in widgets."""
        resolved_widgets = []
        for widget in widgets:
            # Deep copy to avoid modifying original
            new_widget = widget.copy()
            
            # Resolve fields
            if 'fields' in new_widget:
                new_fields = []
                for field in new_widget['fields']:
                    # Check if this field needs resolution
                    if 'resolve_item' in field:
                        resolver = field['resolve_item']
                        host = resolver.get('host')
                        key = resolver.get('key')
                        
                        self.log(f"Resolving item: {host} -> {key}")
                        item_id = self.resolve_item_id(host, key)
                        
                        if item_id:
                            # Replace with actual itemid field structure for Zabbix
                            # Default to "itemid" if target_field not specified
                            target_name = resolver.get('target_field', 'itemid')
                            
                            new_fields.append({
                                "type": 4, # Type 4 is for Item ID in Zabbix 6.4+
                                "name": target_name, 
                                "value": int(item_id)
                            })
                        else:
                            self.log(f"Skipping field due to resolution failure: {host}:{key}")
                    else:
                        new_fields.append(field)
                new_widget['fields'] = new_fields
                
            resolved_widgets.append(new_widget)
        return resolved_widgets

    def deploy_dashboard(self, dashboard_file):
        if not self.auth_token:
            self.login()

        with open(dashboard_file, 'r') as f:
            dash_def = json.load(f)

        self.log(f"Deploying dashboard: {dash_def['name']}")

        # Resolve dynamic fields
        widgets = self.resolve_widgets(dash_def.get('widgets', []))
        
        # Prepare params
        params = {
            "name": dash_def['name'],
            # "width": dash_def.get('width', 12), # Removed in Zabbix 6.4/7.0
            # "height": dash_def.get('height', 8), # Removed in Zabbix 6.4/7.0
            "pages": [
                {
                    "widgets": widgets
                }
            ]
        }

        # Check if dashboard exists
        existing = self._post("dashboard.get", {
            "search": {"name": dash_def['name']},
            "output": ["dashboardid"]
        })

        if existing:
            dashboard_id = existing[0]['dashboardid']
            self.log(f"Dashboard exists (ID: {dashboard_id}). Updating...")
            params["dashboardid"] = dashboard_id
            self._post("dashboard.update", params)
            self.log("Dashboard updated successfully.")
        else:
            self.log("Creating new dashboard...")
            result = self._post("dashboard.create", params)
            self.log(f"Dashboard created (ID: {result['dashboardids'][0]}).")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 create_dashboard.py <dashboard_json_file>")
        sys.exit(1)
        
    manager = ZabbixDashboardManager(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    manager.deploy_dashboard(sys.argv[1])
