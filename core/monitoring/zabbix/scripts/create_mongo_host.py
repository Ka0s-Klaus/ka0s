#!/usr/bin/env python3
import requests
import json
import os
import sys

ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

class ZabbixHostCreator:
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

    def get_group_id(self, name):
        groups = self._post("hostgroup.get", {"filter": {"name": [name]}})
        if groups:
            return groups[0]['groupid']
        # Create if not exists
        print(f"Creating host group '{name}'...")
        return self._post("hostgroup.create", {"name": name})['groupids'][0]

    def get_template_id(self, name):
        templates = self._post("template.get", {"filter": {"host": [name]}})
        if templates:
            return templates[0]['templateid']
        raise Exception(f"Template '{name}' not found")

    def create_host(self, host_name, group_name, template_name, interface_dns, macros):
        if not self.auth_token:
            self.login()

        # Check if host exists
        existing = self._post("host.get", {"filter": {"host": [host_name]}})
        if existing:
            print(f"Host '{host_name}' already exists. Updating macros...")
            # Reuse update logic logic or just inform
            # Ideally we should update it, but let's stick to creation focus for now
            # We can use the update_host_macros script for updates
            return existing[0]['hostid']

        group_id = self.get_group_id(group_name)
        template_id = self.get_template_id(template_name)

        print(f"Creating host '{host_name}'...")
        result = self._post("host.create", {
            "host": host_name,
            "groups": [{"groupid": group_id}],
            "templates": [{"templateid": template_id}],
            "interfaces": [{
                "type": 1, # Agent
                "main": 1,
                "useip": 0, # Use DNS
                "ip": "",
                "dns": interface_dns,
                "port": "10050"
            }],
            "macros": macros,
            "inventory_mode": 1 # Automatic
        })
        
        print(f"Host created successfully (ID: {result['hostids'][0]})")
        return result['hostids'][0]

if __name__ == "__main__":
    # Hardcoded for this task to be fast and specific
    HOST_NAME = "mongo-0"
    GROUP_NAME = "Databases"
    TEMPLATE_NAME = "MongoDB node by Zabbix agent 2"
    INTERFACE_DNS = "mongo-0.mongo.mongo.svc.cluster.local"
    
    # Macros from previous steps
    MACROS = [
        {"macro": "{$MONGODB.CONNSTRING}", "value": "tcp://localhost:27017"},
        {"macro": "{$MONGODB.USER}", "value": "root"},
        {"macro": "{$MONGODB.PASSWORD}", "value": "vqhdW8eMRHjW3I3RXZjNUA9B5EUpjARXfaXjGxGnAns="}
    ]

    creator = ZabbixHostCreator(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    try:
        creator.create_host(HOST_NAME, GROUP_NAME, TEMPLATE_NAME, INTERFACE_DNS, MACROS)
    except Exception as e:
        print(f"Error: {e}")
