#!/usr/bin/env python3
import requests
import json
import os
import sys

# Configuración
ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

class ZabbixDashboardManager:
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
            response = requests.post(self.url, data=json.dumps(payload), headers=headers, timeout=10)
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

    def resolve_item_id(self, host_name, item_key):
        # Helper to find itemid by host and key
        hosts = self._post("host.get", {"filter": {"host": [host_name]}, "output": ["hostid"]})
        if not hosts:
            print(f"Warning: Host '{host_name}' not found.")
            return None
        
        items = self._post("item.get", {
            "hostids": hosts[0]['hostid'],
            "search": {"key_": item_key},
            "output": ["itemid"]
        })
        
        if not items:
            print(f"Warning: Item '{item_key}' not found on host '{host_name}'.")
            return None
            
        return items[0]['itemid']

    def deploy_dashboard(self, dashboard_file):
        if not self.auth_token:
            self.login()

        with open(dashboard_file, 'r') as f:
            dash_def = json.load(f)

        print(f"Deploying dashboard: {dash_def['name']}")

        # Resolve dynamic fields if needed (Example logic)
        # In a real scenario, we would parse widgets and replace "item_key" placeholders with real Item IDs
        # For this PoC, we assume simple creation or update

        # Check if dashboard exists
        existing = self._post("dashboard.get", {
            "search": {"name": dash_def['name']},
            "output": ["dashboardid"]
        })

        widgets = dash_def.get('widgets', [])
        
        # Prepare params
        params = {
            "name": dash_def['name'],
            "width": dash_def.get('width', 12),
            "height": dash_def.get('height', 8),
            "pages": [
                {
                    "widgets": widgets
                }
            ]
        }

        if existing:
            dashboard_id = existing[0]['dashboardid']
            print(f"Dashboard exists (ID: {dashboard_id}). Updating...")
            params["dashboardid"] = dashboard_id
            self._post("dashboard.update", params)
            print("Dashboard updated successfully.")
        else:
            print("Creating new dashboard...")
            result = self._post("dashboard.create", params)
            print(f"Dashboard created (ID: {result['dashboardids'][0]}).")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 create_dashboard.py <dashboard_json_file>")
        sys.exit(1)
        
    manager = ZabbixDashboardManager(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    manager.deploy_dashboard(sys.argv[1])
