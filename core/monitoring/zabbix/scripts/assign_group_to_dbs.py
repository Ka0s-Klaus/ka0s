#!/usr/bin/env python3
import requests
import json
import os
import sys

ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

TARGET_GROUP = "Ka0s Services"

# Hosts de DB conocidos
DB_HOSTS_PATTERNS = [
    "mongo-0",
    "postgresql-0",
    "postgresql-ia-0",
    "mysql-",
    "PostgreSQL Metrics",
    "PostgreSQL Vectorial",
    "MongoDB Audit",
    "MySQL Itil"
]

class ZabbixGroupAssigner:
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
        print(f"Group '{name}' not found, creating...")
        return self._post("hostgroup.create", {"name": name})['groupids'][0]

    def get_hosts_by_pattern(self, patterns):
        all_hosts = self._post("host.get", {
            "output": ["hostid", "host", "name"],
            "selectGroups": "extend"
        })
        matched_hosts = []
        
        for h in all_hosts:
            # Removed 'groups' check as host.get without selectGroups might not return it if empty?
            # Actually with selectGroups='extend', it returns [] if no groups.
            # But let's be safe and just print what we see for debugging
            # print(f"Checking host: {h['name']} ({h['host']})")
            
            for p in patterns:
                # Use host OR name to match
                if p.lower() in h['host'].lower() or p.lower() in h['name'].lower():
                    matched_hosts.append(h)
                    break
        return matched_hosts

    def assign_group(self, host, group_id):
        # Check if already in group
        current_groups = host.get('groups', [])
        current_group_ids = [g['groupid'] for g in current_groups]
        
        if group_id in current_group_ids:
            print(f"Host {host['host']} is already in group {TARGET_GROUP}.")
            return

        print(f"Adding host {host['host']} to group {TARGET_GROUP}...")
        
        # Append new group to existing list
        new_groups = [{"groupid": gid} for gid in current_group_ids]
        new_groups.append({"groupid": group_id})
        
        self._post("host.update", {
            "hostid": host['hostid'],
            "groups": new_groups
        })
        print("Success.")

if __name__ == "__main__":
    assigner = ZabbixGroupAssigner(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    assigner.login()
    
    group_id = assigner.get_group_id(TARGET_GROUP)
    hosts = assigner.get_hosts_by_pattern(DB_HOSTS_PATTERNS)
    
    print(f"Found {len(hosts)} database hosts to update.")
    
    for h in hosts:
        assigner.assign_group(h, group_id)
