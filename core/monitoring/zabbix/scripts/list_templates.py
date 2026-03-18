#!/usr/bin/env python3
import json
import os
import requests
import sys

ZABBIX_URL = os.getenv('ZABBIX_URL', 'http://localhost:8080/api_jsonrpc.php')
ZABBIX_USER = os.getenv('ZABBIX_USER', 'Admin')
ZABBIX_PASS = os.getenv('ZABBIX_PASS', 'zabbix')

def get_templates():
    payload = {
        "jsonrpc": "2.0",
        "method": "template.get",
        "params": {
            "output": ["templateid", "name"]
        },
        "id": 1
    }
    
    # Login
    auth_payload = {
        "jsonrpc": "2.0",
        "method": "user.login",
        "params": {"username": ZABBIX_USER, "password": ZABBIX_PASS},
        "id": 0
    }
    
    try:
        # Auth
        resp = requests.post(ZABBIX_URL, json=auth_payload)
        auth = resp.json().get('result')
        if not auth:
            print("Login failed")
            return

        # Get Templates
        headers = {'Content-Type': 'application/json', 'Authorization': f"Bearer {auth}"}
        resp = requests.post(ZABBIX_URL, json=payload, headers=headers)
        templates = resp.json().get('result', [])
        
        for t in templates:
            print(f"{t['templateid']}: {t['name']}")
            
    except Exception as e:
        print(e)

if __name__ == "__main__":
    get_templates()
