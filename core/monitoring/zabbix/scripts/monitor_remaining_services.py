#!/usr/bin/env python3
import requests
import json
import os
import sys

ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

# Servicios detectados en el clúster sin sidecar de Zabbix
SERVICES = [
    {
        "host": "CloudBeaver",
        "dns": "10.105.40.153",
        "group": "Ka0s Services",
        "template": "TCP Service",
        "port": "80"
    },
    {
        "host": "Docs Portal",
        "dns": "10.104.15.70",
        "group": "Ka0s Services",
        "template": "TCP Service",
        "port": "80"
    },
    {
        "host": "iTop",
        "dns": "10.103.185.4",
        "group": "Ka0s Services",
        "template": "TCP Service",
        "port": "80"
    },
    {
        "host": "Metabase",
        "dns": "10.104.238.93",
        "group": "Ka0s Services",
        "template": "TCP Service",
        "port": "80"
    },
    {
        "host": "Ollama",
        "dns": "10.103.245.188",
        "group": "Ka0s Services",
        "template": "TCP Service",
        "port": "11434"
    },
    {
        "host": "Ingress Nginx",
        "dns": "ingress-nginx-controller-metrics.ingress-nginx.svc.cluster.local",
        "port": "10254",
        "group": "Ka0s Infrastructure",
        "template": "Nginx by HTTP"
    }
]

class ZabbixServiceMonitor:
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
                # Ignore duplicate host error, treat as success
                if 'already exists' in result['error']['data']:
                    print(f"  Warning: {result['error']['data']}")
                    return {'hostids': ['existing']}
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

    def get_group_id(self, name):
        groups = self._post("hostgroup.get", {"filter": {"name": [name]}})
        if groups:
            return groups[0]['groupid']
        print(f"Creating host group '{name}'...")
        res = self._post("hostgroup.create", {"name": name})
        return res['groupids'][0] if res else None

    def get_template_id(self, name):
        # Buscar template por nombre exacto o aproximado
        templates = self._post("template.get", {"filter": {"host": [name]}})
        if not templates:
            # Fallback a "HTTP Service" genérico si no se encuentra el específico
            print(f"Template '{name}' not found, trying 'HTTP Service'...")
            templates = self._post("template.get", {"filter": {"host": ["HTTP Service"]}})
            
        if templates:
            return templates[0]['templateid']
        raise Exception(f"Template '{name}' not found")

    def create_host(self, svc):
        if not self.auth_token:
            self.login()

        print(f"\nProcessing {svc['host']}...")
        
        try:
            group_id = self.get_group_id(svc['group'])
            template_id = self.get_template_id(svc.get('template', 'HTTP Service'))
            
            if not group_id or not template_id:
                print("Skipping: Missing Group or Template ID")
                return

            port = svc.get('port', "80")
            
            # Simple HTTP Agent Host
            result = self._post("host.create", {
                "host": svc['host'],
                "groups": [{"groupid": group_id}],
                "templates": [{"templateid": template_id}],
                "interfaces": [{
                    "type": 1, # Agent (Required by Zabbix even for simple checks)
                    "main": 1,
                    "useip": 0,
                    "ip": "",
                    "dns": svc['dns'],
                    "port": port
                }],
                "inventory_mode": 1
            })
            
            if result:
                print(f"Host '{svc['host']}' configured successfully.")
                
        except Exception as e:
            print(f"Failed to create host {svc['host']}: {e}")

if __name__ == "__main__":
    monitor = ZabbixServiceMonitor(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    for svc in SERVICES:
        monitor.create_host(svc)
