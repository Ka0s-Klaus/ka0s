#!/usr/bin/env python3
import requests
import json
import os
import sys

ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

class ZabbixHostUpdater:
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
        self.auth_token = self._post("user.login", {"username": self.user, "password": self.password})

    def get_host_id(self, host_name):
        hosts = self._post("host.get", {
            "filter": {"host": [host_name]},
            "output": ["hostid"]
        })
        
        if hosts:
            return hosts[0]['hostid']
        print(f"Error: Host '{host_name}' not found!")
        return None

    def update_host_macros(self, host_name, macros):
        if not self.auth_token:
            self.login()

        host_id = self.get_host_id(host_name)
        if not host_id:
            sys.exit(1)

        # Get existing macros to preserve them or update them
        existing_macros = self._post("usermacro.get", {
            "hostids": host_id,
            "output": "extend"
        })
        
        # Convert existing macros to a dict for easy lookup
        current_macros_map = {m['macro']: m for m in existing_macros}
        
        # Prepare the update list
        macros_to_update = []
        
        for new_macro in macros:
            macro_name = new_macro['macro']
            macro_value = new_macro['value']
            
            if macro_name in current_macros_map:
                # Update existing macro
                macros_to_update.append({
                    "hostmacroid": current_macros_map[macro_name]['hostmacroid'],
                    "value": macro_value
                })
                print(f"Updating macro {macro_name} for host {host_name}...")
            else:
                # Create new macro (requires host.update with macros parameter or usermacro.create)
                # It is safer/easier to use usermacro.create for new ones
                print(f"Creating macro {macro_name} for host {host_name}...")
                self._post("usermacro.create", {
                    "hostid": host_id,
                    "macro": macro_name,
                    "value": macro_value
                })

        # Apply updates
        if macros_to_update:
             # usermacro.update requires a list of macros with hostmacroid
            for m in macros_to_update:
                self._post("usermacro.update", m)
        
        print(f"Host '{host_name}' macros updated successfully.")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 update_host_macros.py <host_name> <macro1=value1> [macro2=value2...]")
        sys.exit(1)
        
    host_name = sys.argv[1]
    
    macros = []
    for arg in sys.argv[2:]:
        if '=' in arg:
            key, value = arg.split('=', 1)
            # Ensure it starts with {$
            if not key.startswith("{$"):
                key = f"{{${key}}}"
            macros.append({"macro": key, "value": value})
            
    updater = ZabbixHostUpdater(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    updater.update_host_macros(host_name, macros)
