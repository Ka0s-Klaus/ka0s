#!/usr/bin/env python3
import requests
import json
import csv
import os
import sys
from datetime import datetime

# Configuración desde variables de entorno
ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')
OUTPUT_DIR = os.getenv('OUTPUT_DIR', '/Users/santale/ka0s-klaus/ka0s/core/monitoring/zabbix/inventary')

class ZabbixInventory:
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
            # payload["auth"] = self.auth_token # REMOVED: sending in header only
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

    def get_full_inventory(self):
        if not self.auth_token:
            self.login()

        print("Fetching full inventory...")
        
        # 1. Hosts
        hosts = self._post("host.get", {
            "output": ["hostid", "host", "name", "status", "description"],
            "selectInterfaces": ["ip", "dns", "useip", "port", "type", "main"],
            "selectParentTemplates": ["name"],
            "selectTags": "extend",
            "selectGroups": ["name"],
            "selectInventory": "extend"
        })
        
        # 2. Templates
        templates = self._post("template.get", {
            "output": ["templateid", "host", "name", "description"],
            "selectGroups": ["name"]
        })

        # 3. Host Groups
        groups = self._post("hostgroup.get", {
            "output": ["groupid", "name"]
        })

        # 4. Proxies
        # Zabbix 7.0 uses 'name' instead of 'host'
        proxies = self._post("proxy.get", {
            "output": ["proxyid", "name"]
        })

        self.save_reports(hosts, templates, groups, proxies)

    def save_reports(self, hosts, templates, groups, proxies):
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        
        # Reporte 1: Resumen General (JSON)
        summary = {
            "generated_at": timestamp,
            "counts": {
                "hosts": len(hosts),
                "templates": len(templates),
                "host_groups": len(groups),
                "proxies": len(proxies)
            },
            "hosts_by_status": {
                "monitored": len([h for h in hosts if h['status'] == '0']),
                "unmonitored": len([h for h in hosts if h['status'] == '1'])
            }
        }
        
        with open(os.path.join(OUTPUT_DIR, f"inventory_summary_{timestamp}.json"), 'w') as f:
            json.dump(summary, f, indent=2)

        # Reporte 2: Inventario Detallado de Hosts (CSV)
        csv_file = os.path.join(OUTPUT_DIR, f"hosts_inventory_{timestamp}.csv")
        with open(csv_file, 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['Host ID', 'Visible Name', 'Hostname', 'Status', 'IP Address', 'Templates', 'Groups', 'Tags'])
            
            for host in hosts:
                # Process Interfaces (Get primary IP)
                ip = "N/A"
                for iface in host.get('interfaces', []):
                    if iface['main'] == '1':
                        ip = iface['ip'] if iface['useip'] == '1' else iface['dns']
                        break
                
                # Process Templates
                tmps = ", ".join([t['name'] for t in host.get('parentTemplates', [])])
                
                # Process Groups
                grps = ", ".join([g['name'] for g in host.get('groups', [])])
                
                # Process Tags
                tags = ", ".join([f"{t['tag']}:{t['value']}" for t in host.get('tags', [])])
                
                status_str = "Enabled" if host['status'] == '0' else "Disabled"
                
                writer.writerow([
                    host['hostid'],
                    host['name'],
                    host['host'],
                    status_str,
                    ip,
                    tmps,
                    grps,
                    tags
                ])
        
        print(f"Inventory saved to {OUTPUT_DIR}")
        print(f"- Summary: inventory_summary_{timestamp}.json")
        print(f"- Hosts CSV: hosts_inventory_{timestamp}.csv")

if __name__ == "__main__":
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
    
    inventory = ZabbixInventory(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    inventory.get_full_inventory()
