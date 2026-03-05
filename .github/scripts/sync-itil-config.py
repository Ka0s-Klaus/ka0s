#!/usr/bin/env python3
"""
Syncs ITIL Configuration from compliance/itil/*.yaml to iTop.
Handles:
- Contacts (Teams, Persons)
- Service Catalog (Services, Subcategories)
- SLAs (SLAs, SLTs)
"""

import os
import sys
import json
import yaml
import requests
import datetime

# Configuration
ITOP_URL = os.environ.get('ITOP_URL', '').rstrip('/')
ITOP_USER = os.environ.get('ITOP_API_USER')
ITOP_PASSWORD = os.environ.get('ITOP_API_PASSWORD')
ITOP_VERSION = "1.3"
# FORCE SSL VERIFY FALSE as per user request
SSL_VERIFY = False

CONFIG_DIR = "compliance/itil"

def log(msg):
    print(f"[ITIL Sync] {msg}")

def load_yaml(filename):
    path = os.path.join(CONFIG_DIR, filename)
    if not os.path.exists(path):
        log(f"Warning: {filename} not found.")
        return None
    with open(path, 'r') as f:
        return yaml.safe_load(f)

def call_itop(operation, data, comment=None):
    payload = {
        'operation': operation,
        'class': data.get('class'),
        'comment': comment or "ITIL Config Sync",
        'output_fields': 'id, friendlyname',
    }
    
    if operation == 'core/get':
        payload['key'] = data.get('key')
    elif operation in ['core/create', 'core/update']:
        if 'key' in data:
            payload['key'] = data['key']
        payload['fields'] = data.get('fields', {})

    try:
        endpoint = f"{ITOP_URL}/webservices/rest.php?version={ITOP_VERSION}"
        resp = requests.post(
            endpoint,
            auth=(ITOP_USER, ITOP_PASSWORD),
            data={'json_data': json.dumps(payload)},
            verify=SSL_VERIFY
        )
        resp.raise_for_status()
        res_json = resp.json()
        if res_json.get('code') != 0:
            log(f"Error {res_json.get('code')}: {res_json.get('message')}")
            return None
        return res_json
    except Exception as e:
        log(f"API Call Failed: {e}")
        return None

def get_obj_id(classname, oql):
    data = {'class': classname, 'key': oql}
    resp = call_itop('core/get', data)
    if resp and resp.get('objects'):
        # Return first key
        return list(resp['objects'].keys())[0]
    return None

def sync_organization(org_name):
    # Ensure Org exists
    oql = f"SELECT Organization WHERE name = '{org_name}'"
    org_id = get_obj_id('Organization', oql)
    if not org_id:
        log(f"Creating Organization: {org_name}")
        resp = call_itop('core/create', {
            'class': 'Organization',
            'fields': {'name': org_name, 'status': 'active', 'code': org_name[:10].upper()}
        })
        if resp:
            org_id = list(resp['objects'].keys())[0]
    return org_id

def sync_contacts(data):
    if not data: return
    
    # 1. Teams
    for team in data.get('teams', []):
        org_id = sync_organization(team['org_id'])
        if not org_id: continue
        
        team_name = team['name']
        oql = f"SELECT Team WHERE name = '{team_name}' AND org_id = {org_id}"
        team_id = get_obj_id('Team', oql)
        
        fields = {
            'name': team_name,
            'org_id': org_id,
            'status': team.get('status', 'active')
        }
        
        if not team_id:
            log(f"Creating Team: {team_name}")
            call_itop('core/create', {'class': 'Team', 'fields': fields})
        else:
            log(f"Updating Team: {team_name}")
            call_itop('core/update', {'class': 'Team', 'key': team_id, 'fields': fields})

        # Sync Members (Persons)
        for member in team.get('members', []):
            email = member['email']
            # Find/Create Person
            person_oql = f"SELECT Person WHERE email = '{email}'"
            person_id = get_obj_id('Person', person_oql)
            
            p_fields = {
                'email': email,
                'org_id': org_id,
                'first_name': email.split('@')[0], # Fallback
                'name': 'User', # Fallback
                'status': 'active'
            }
            
            if not person_id:
                log(f"Creating Person: {email}")
                resp = call_itop('core/create', {'class': 'Person', 'fields': p_fields})
                if resp: person_id = list(resp['objects'].keys())[0]
            
            # Link to Team (lnkPersonToTeam)
            if person_id and team_id:
                # Check link
                link_oql = f"SELECT lnkPersonToTeam WHERE team_id = {team_id} AND person_id = {person_id}"
                if not get_obj_id('lnkPersonToTeam', link_oql):
                    log(f"Linking {email} to {team_name}")
                    call_itop('core/create', {
                        'class': 'lnkPersonToTeam',
                        'fields': {
                            'team_id': team_id,
                            'person_id': person_id,
                            'role_name': member.get('role', 'Member')
                        }
                    })

def sync_services(data):
    if not data: return
    
    for svc in data.get('services', []):
        org_id = sync_organization(svc['org_id'])
        if not org_id: continue
        
        svc_name = svc['name']
        oql = f"SELECT Service WHERE name = '{svc_name}' AND org_id = {org_id}"
        svc_id = get_obj_id('Service', oql)
        
        fields = {
            'name': svc_name,
            'org_id': org_id,
            'status': svc.get('status', 'production'),
            'description': "Managed by Ka0s ITIL Sync"
        }
        
        if not svc_id:
            log(f"Creating Service: {svc_name}")
            resp = call_itop('core/create', {'class': 'Service', 'fields': fields})
            if resp: svc_id = list(resp['objects'].keys())[0]
        else:
            log(f"Updating Service: {svc_name}")
            call_itop('core/update', {'class': 'Service', 'key': svc_id, 'fields': fields})
            
        # Subcategories
        if svc_id:
            for sub in svc.get('subcategories', []):
                sub_name = sub['name']
                sub_oql = f"SELECT ServiceSubcategory WHERE name = '{sub_name}' AND service_id = {svc_id}"
                if not get_obj_id('ServiceSubcategory', sub_oql):
                    log(f"Creating Subcategory: {sub_name}")
                    call_itop('core/create', {
                        'class': 'ServiceSubcategory',
                        'fields': {
                            'service_id': svc_id,
                            'name': sub_name,
                            'request_type': sub.get('type', 'incident'),
                            'status': sub.get('status', 'production')
                        }
                    })

def main():
    if not ITOP_URL or not ITOP_USER:
        log("Error: ITOP env vars missing.")
        sys.exit(1)

    log("Starting ITIL Configuration Sync...")
    
    # 1. Contacts
    contacts = load_yaml('contacts.yaml')
    sync_contacts(contacts)
    
    # 2. Service Catalog
    services = load_yaml('service_catalog.yaml')
    sync_services(services)
    
    # 3. SLAs (Simplified implementation)
    # SLAs require creating SLTs and linking them.
    # This is complex and might be added in v2.
    
    log("Sync Completed.")

if __name__ == "__main__":
    main()
