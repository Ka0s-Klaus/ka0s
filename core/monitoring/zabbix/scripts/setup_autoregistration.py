#!/usr/bin/env python3
import requests
import json
import os
import sys

ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

class ZabbixAutoRegistration:
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

    def get_or_create_hostgroup(self, group_name):
        groups = self._post("hostgroup.get", {
            "filter": {"name": [group_name]},
            "output": ["groupid"]
        })
        
        if groups:
            return groups[0]['groupid']
            
        print(f"Creating host group '{group_name}'...")
        result = self._post("hostgroup.create", {"name": group_name})
        return result['groupids'][0]

    def get_template_id(self, template_name):
        templates = self._post("template.get", {
            "filter": {"host": [template_name]},
            "output": ["templateid"]
        })
        
        if templates:
            return templates[0]['templateid']
        print(f"Error: Template '{template_name}' not found!")
        return None

    def setup_action(self, metadata_value, group_name, template_name, macros=None):
        if not self.auth_token:
            self.login()

        group_id = self.get_or_create_hostgroup(group_name)
        template_id = self.get_template_id(template_name)
        
        if not template_id:
            sys.exit(1)

        action_name = f"Auto-registration: {metadata_value}"
        
        # Check if action already exists
        existing_actions = self._post("action.get", {
            "filter": {"name": [action_name], "eventsource": 2}, # 2 = Auto-registration
            "output": ["actionid"]
        })

        # Define operations
        operations = [
            {"operationtype": 2},  # Add host
            {"operationtype": 4, "opgroup": [{"groupid": group_id}]},  # Add to host group
            {"operationtype": 6, "optemplate": [{"templateid": template_id}]}  # Link to template
        ]

        # Define the action parameters
        action_params = {
            "name": action_name,
            "eventsource": 2, # Auto-registration
            "status": 0, # Enabled
            "filter": {
                "evaltype": 0, # AND/OR
                "conditions": [
                    {
                        "conditiontype": 24, # Host metadata
                        "operator": 2, # like
                        "value": metadata_value
                    }
                ]
            },
            "operations": operations
        }

        if existing_actions:
            action_id = existing_actions[0]['actionid']
            print(f"Action '{action_name}' already exists (ID: {action_id}). Updating...")
            action_params['actionid'] = action_id
            self._post("action.update", action_params)
            print("Action updated successfully.")
        else:
            print(f"Creating action '{action_name}'...")
            result = self._post("action.create", action_params)
            print(f"Action created successfully (ID: {result['actionids'][0]}).")

# Mapeo de prefijos según el template
MACRO_PREFIX_MAP = {
    "MongoDB node by Zabbix agent 2": "MONGODB",
    "MySQL by Zabbix agent 2": "MYSQL",
    "PostgreSQL by Zabbix agent 2": "PG"
}

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python3 setup_autoregistration.py <metadata_string> <host_group> <template_name> [macro1=value1 macro2=value2...]")
        print("Example: python3 setup_autoregistration.py mongo Databases \"MongoDB node by Zabbix agent 2\"")
        sys.exit(1)
        
    metadata = sys.argv[1]
    group = sys.argv[2]
    template = sys.argv[3]
    
    manager = ZabbixAutoRegistration(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    
    macros = []
    if len(sys.argv) > 4:
        # Auto-detectar prefijo de macro basado en el template
        prefix = MACRO_PREFIX_MAP.get(template, "")
        
        for arg in sys.argv[4:]:
            if '=' in arg:
                key, value = arg.split('=', 1)
                # Si el usuario ya incluyó el prefijo, lo dejamos. Si no, lo añadimos.
                if prefix and not key.startswith(prefix + "."):
                    macro_name = f"{{${prefix}.{key}}}"
                else:
                    macro_name = f"{{${key}}}"
                    
                macros.append({"macro": macro_name, "value": value})
                
    manager.setup_action(metadata, group, template, macros)
