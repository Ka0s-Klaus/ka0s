#!/usr/bin/env python3
import json
import os
import sys
import requests
from kubernetes import client, config

# Configuración Zabbix
ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

# Namespaces a ignorar por defecto
IGNORED_NAMESPACES = [
    'kube-system', 'calico-apiserver', 'calico-system',
    'tigera-operator', 'local-path-storage'
]


class ZabbixK8sMonitor:
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
            response = requests.post(
                self.url,
                data=json.dumps(payload),
                headers=headers,
                timeout=10
            )
            response.raise_for_status()
            result = response.json()
            self.request_id += 1

            if 'error' in result:
                # Ignore duplicate host error, treat as success but return flag
                if 'already exists' in result['error']['data']:
                    return {'hostids': ['existing'], 'error': 'already_exists'}
                print(f"API Error: {result['error']}")
                return None

            return result.get('result')
        except Exception as e:
            print(f"Error connecting to Zabbix API: {e}")
            return None

    def login(self):
        print(f"Authenticating to {self.url}...")
        # Try with 'username' (Zabbix >= 7.0)
        params = {"username": self.user, "password": self.password}
        self.auth_token = self._post("user.login", params)
        if not self.auth_token:
            print("Failed login with 'username', trying 'user'")
            params_old = {"user": self.user, "password": self.password}
            self.auth_token = self._post("user.login", params_old)

        if self.auth_token:
            print("Authentication successful.")
        else:
            sys.exit(1)

    def get_k8s_services(self):
        try:
            # Try in-cluster config first, then fallback to kubeconfig
            try:
                config.load_incluster_config()
            except config.ConfigException:
                try:
                    config.load_kube_config()
                except config.ConfigException:
                    print("Error: Could not load K8s config")
                    sys.exit(1)

            v1 = client.CoreV1Api()
            ret = v1.list_service_for_all_namespaces(watch=False)
            
            # Use ApiClient to sanitize for serialization (to dict/json)
            # This returns camelCase keys matching K8s API
            api_client = client.ApiClient()
            return api_client.sanitize_for_serialization(ret)

        except Exception as e:
            print(f"Error getting k8s services: {e}")
            sys.exit(1)

    def get_group_id(self, name):
        groups = self._post("hostgroup.get", {"filter": {"name": [name]}})
        if groups:
            return groups[0]['groupid']
        print(f"Creating host group '{name}'...")
        res = self._post("hostgroup.create", {"name": name})
        return res['groupids'][0] if res else None

    def get_hostgroup(self, group_name):
        """Busca el ID de un HostGroup por nombre"""
        response = self._post(
            "hostgroup.get",
            {
                "output": "extend",
                "filter": {
                    "name": [group_name]
                }
            }
        )
        if response and len(response) > 0:
            return response[0]["groupid"]
        return None

    def get_or_create_hostgroup(self, group_name):
        """Obtiene o crea un HostGroup"""
        group_id = self.get_hostgroup(group_name)
        if group_id:
            print(f"Found HostGroup '{group_name}' with ID: {group_id}")
            return group_id
            
        print(f"Creating HostGroup '{group_name}'...")
        response = self._post(
            "hostgroup.create",
            {
                "name": group_name
            }
        )
        if response and "groupids" in response:
            group_id = response["groupids"][0]
            print(f"Created HostGroup '{group_name}' with ID: {group_id}")
            return group_id
            
        print(f"Failed to create HostGroup '{group_name}'")
        return None

    def ensure_base_template(self):
        template_name = "K8s Basic Service"

        # Check if exists
        templates = self._post("template.get", {
            "filter": {"host": [template_name]},
            "output": ["templateid"]
        })

        if templates:
            return templates[0]['templateid']

        print(f"Creating base template '{template_name}'...")
        
        # Ensure template group exists (Zabbix 6.2+ uses Template groups, older uses Host groups)
        # We'll use the get_or_create_hostgroup to ensure we have a valid group for the template
        group_id = self.get_or_create_hostgroup("Templates/Kubernetes")
        if not group_id:
            group_id = self.get_or_create_hostgroup("Templates")
            
        if not group_id:
            print("Failed to get/create a group for the template")
            return None

        # Create Template
        res = self._post("template.create", {
            "host": template_name,
            "groups": [{"groupid": group_id}]
        })

        if not res:
            return None

        template_id = res['templateids'][0]

        # Create Item: TCP Check
        self._post("item.create", {
            "name": "Service TCP Status",
            "key_": "net.tcp.service[tcp,,{$PORT}]",
            "hostid": template_id,
            "type": 3,  # Simple check
            "value_type": 3,  # Numeric unsigned
            "interfaceid": 0,
            "delay": "1m",
            "history": "7d"
        })

        # Create Item: Response Time
        self._post("item.create", {
            "name": "Service Response Time",
            "key_": "net.tcp.service.perf[tcp,,{$PORT}]",
            "hostid": template_id,
            "type": 3,
            "value_type": 0,  # Numeric float
            "units": "s",
            "delay": "1m",
            "history": "7d"
        })

        # Create Trigger
        self._post("trigger.create", {
            "description": "Service {HOST.NAME} is down",
            "expression": (
                f"last(/{template_name}/"
                f"net.tcp.service[tcp,,{{$PORT}}])=0"
            ),
            "priority": 3  # Average
        })

        return template_id

    def get_template_id(self, template_name):
        res = self._post("template.get", {
            "output": ["templateid"],
            "filter": {"host": [template_name]}
        })
        if res:
            return res[0]['templateid']
        else:
            # Si no existe, usamos el base
            print(f"Template '{template_name}' not found, ensuring 'K8s Basic Service' exists...")
            return self.ensure_base_template()

    def create_host(self, service):
        # Soportar tanto formato crudo de k8s como diccionario simple
        if 'metadata' in service:
            metadata = service['metadata']
            spec = service['spec']
            ns = metadata['namespace']
            name = metadata['name']
            ports = spec.get('ports', [])
        else:
            metadata = {}
            ns = service.get('namespace')
            name = service.get('name')
            ports = [{"port": 80}]  # Default port

        if ns in IGNORED_NAMESPACES:
            return None

        # Determine ports
        if not ports:
            return None

        # Prioritize HTTP/80/443, otherwise take first TCP
        target_port = ports[0]['port']
        for p in ports:
            if p['port'] in [80, 443, 8080]:
                target_port = p['port']
                break

        host_name = f"{ns}-{name}"
        dns_name = f"{name}.{ns}.svc.cluster.local"

        # Check annotations for overrides
        annotations = metadata.get('annotations', {})
        # Default to TCP
        template_name = annotations.get('zabbix/template', 'TCP Service')
        if target_port in [80, 443, 8080]:
            if 'zabbix/template' not in annotations:
                template_name = 'HTTP Service'

        print(f"Processing Service: {host_name} ({dns_name}:{target_port})")

        group_id = self.get_or_create_hostgroup("Kubernetes Services")
        template_id = self.get_template_id(template_name)

        if not group_id or not template_id:
            print(f"Cannot create host: missing template_id={template_id} or host_group_id={group_id}")
            return None

        # Create Host
        params = {
            "host": host_name,
            "groups": [{"groupid": group_id}],
            "templates": [{"templateid": template_id}],
            "interfaces": [{
                "type": 1,
                "main": 1,
                "useip": 1,
                "ip": service.get('cluster_ip', '127.0.0.1') if 'cluster_ip' in service else service.get('spec', {}).get('clusterIP', '127.0.0.1'),
                "dns": "",
                "port": str(target_port)
            }],
            "macros": [
                {"macro": "{$PORT}", "value": str(target_port)}
            ],
            "inventory_mode": 1
        }

        res = self._post("host.create", params)

        host_id = None
        if res:
            if 'hostids' in res:
                host_id = res['hostids'][0]
                if host_id == 'existing':
                    # Get existing host ID
                    existing = self._post(
                        "host.get",
                        {"filter": {"host": [host_name]}}
                    )
                    if existing:
                        host_id = existing[0]['hostid']
                        print(f"Host '{host_name}' exists (ID: {host_id}).")
                        
                        # Update macros if needed (optional)
                        self._post("host.update", {
                            "hostid": host_id,
                            "macros": [
                                {"macro": "{$PORT}", "value": str(target_port)}
                            ]
                        })
                else:
                    print(f"Host '{host_name}' created (ID: {host_id}).")

        return {
            "host_name": host_name,
            "host_id": host_id,
            "template_name": template_name,
            "port": target_port
        }

    def resolve_item_id(self, host_id, key_pattern):
        # Generic search
        items = self._post("item.get", {
            "hostids": host_id,
            "output": ["itemid", "key_"]
        })

        if not items:
            return None

        base_key = key_pattern.split('[')[0]
        for item in items:
            if base_key in item['key_']:
                return item['itemid']

        return None

    def create_dashboard(self, host_info):
        """Creates a dashboard for the given host"""
        host_name = host_info.get('host_name', f"k8s-{host_info.get('namespace')}-{host_info.get('name')}")
        host_id = host_info.get('host_id')
        template_name = host_info.get('template_name', '')

        if not host_id:
            return

        name = host_info.get('name', host_name.split('-')[-1])
        ns = host_info.get('namespace', host_name.split('-')[0])
        
        dashboard_name = f"Service: {ns}/{name}"

        # Define Widgets based on template
        widgets = []

        check_key = "net.tcp.service[tcp"
        perf_key = "net.tcp.service.perf[tcp"

        if "HTTP" in template_name:
            check_key = "net.tcp.service[http"
            perf_key = "net.tcp.service.perf[http"

        # Resolve Item IDs
        check_item = self.resolve_item_id(host_id, check_key)
        perf_item = self.resolve_item_id(host_id, perf_key)

        x = 0
        y = 0

        if check_item:
            widgets.append({
                "type": "plaintext",
                "name": "Service Status",
                "x": x, "y": y, "width": 6, "height": 3,
                "fields": [
                    {"type": 4, "name": "itemid", "value": int(check_item)}
                ]
            })
            x += 6

        if perf_item:
            widgets.append({
                "type": "svggraph",  # Use svggraph (modern) instead of graph
                "name": "Response Time",
                "x": 0, "y": 3, "width": 12, "height": 5,
                "fields": [
                    {
                        "type": 4,
                        "name": "ds.0.itemids.0",
                        "value": int(perf_item)
                    },
                    {"type": 1, "name": "ds.0.color", "value": "FF0000"},
                    {"type": 0, "name": "ds.0.type", "value": 0}  # Line
                ]
            })

        if not widgets:
            print(f"No suitable items for dashboard on host {host_name}")
            return

        params = {
            "name": dashboard_name,
            "pages": [{"widgets": widgets}]
        }

        # Check existing dashboard
        existing = self._post("dashboard.get", {
            "search": {"name": dashboard_name},
            "output": ["dashboardid"]
        })

        if existing:
            params["dashboardid"] = existing[0]['dashboardid']
            self._post("dashboard.update", params)
            print(f"Dashboard '{dashboard_name}' updated.")
        else:
            self._post("dashboard.create", params)
            print(f"Dashboard '{dashboard_name}' created.")

    def sync_from_json(self, json_path="core/monitoring/zabbix/data/k8s_services_lld.json"):
        """Syncs Kubernetes services to Zabbix using a JSON file."""
        print(f"Loading services from {json_path}...")
        try:
            with open(json_path, 'r') as f:
                data = json.load(f)
                services_data = data.get("data", [])
        except FileNotFoundError:
            print(f"Error: {json_path} not found. Check workflow.")
            return
        
        hostgroup_id = self.get_or_create_hostgroup("Kubernetes Services")
        if not hostgroup_id:
            print("Failed to get or create hostgroup.")
            return

        for svc in services_data:
            svc_name = svc.get("{#SERVICE}")
            namespace = svc.get("{#NAMESPACE}")
            cluster_ip = svc.get("{#CLUSTERIP}")
            
            if not svc_name or not namespace:
                continue
                
            print(f"Processing service {svc_name} in namespace {namespace}...")
            
            ip = cluster_ip if cluster_ip and cluster_ip != "None" else "127.0.0.1"
            
            host_info = self.create_host(
                {
                    "name": svc_name,
                    "namespace": namespace,
                    "cluster_ip": ip
                }
            )
            
            if host_info and host_info.get("host_id"):
                host_id = host_info["host_id"]
                dashboard_name = f"Service Overview: {svc_name}"
                print(f"Creating dashboard '{dashboard_name}'...")
                self.create_dashboard(host_info)
        
        print("Sync completed.")


if __name__ == "__main__":
    if not all([ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS]):
        print("Error: Faltan variables de entorno para Zabbix")
        sys.exit(1)

    monitor = ZabbixK8sMonitor(ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS)
    monitor.login()
    
    json_file = "core/monitoring/zabbix/data/k8s_services_lld.json"
    if len(sys.argv) > 1:
        json_file = sys.argv[1]
        
    monitor.sync_from_json(json_file)
