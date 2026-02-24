import os
import sys
import json
import argparse
import requests
import datetime

# Configuration
ITOP_URL = os.environ.get('ITOP_URL', '').rstrip('/')
ITOP_USER = os.environ.get('ITOP_API_USER')
ITOP_PASSWORD = os.environ.get('ITOP_API_PASSWORD')
ITOP_VERSION = "1.3"  # REST API Version
ORG_NAME = os.environ.get('ITOP_ORIGIN', 'Demo')  # Default Organization

# Audit Log Container
AUDIT_LOGS = []

def log(msg):
    print(f"[iTop Sync] {msg}")


def get_itop_class_definition(class_name):
    """
    Helper to check class definition if needed (not used in simple sync but good for debugging)
    """
    pass


def call_itop(operation, data, comment=None):
    """
    Generic function to call iTop REST API
    """
    payload = {
        'operation': operation,
        'class': data.get('class'),
        'comment': comment or f"Automated sync from GitHub Actions {datetime.datetime.now()}",
        'output_fields': data.get('output_fields', 'id, friendlyname'),
        'version': ITOP_VERSION
    }

    # For core/get, we use key (OQL or ID)
    if operation == 'core/get':
        payload['key'] = data.get('key')
    # For core/create or core/update, we use fields
    elif operation in ['core/create', 'core/update']:
        if 'key' in data:
            payload['key'] = data['key']
        payload['fields'] = data.get('fields', {})

    try:
        response = requests.post(
            ITOP_URL + '/webservices/rest.php',
            auth=(ITOP_USER, ITOP_PASSWORD),
            data={'json_data': json.dumps(payload)}
        )
        response.raise_for_status()
        return response.json()
    except Exception as e:
        log(f"Error calling iTop: {e}")
        if 'response' in locals():
            log(f"Response: {response.text}")
        sys.exit(1)


def get_organization_id(org_name):
    """
    Resolves Organization Name to ID using OQL
    """
    oql = f"SELECT Organization WHERE name = '{org_name}'"
    data = {
        'class': 'Organization',
        'key': oql
    }
    resp = call_itop('core/get', data)
    objects = resp.get('objects')
    
    if not objects:
        log(f"Organization '{org_name}' not found. Cannot proceed.")
        sys.exit(1)
    
    # Return the first key (ID)
    for key, val in objects.items():
        return key
    return None


def sync_service(service_name, org_id, status='production'):
    """
    Syncs a single service to iTop
    """
    # 1. Search if exists
    # Using ApplicationSolution as the CI Class for Services
    # Adjust 'ApplicationSolution' to 'WebApplication' or 'FunctionalCI' if model differs
    ci_class = 'ApplicationSolution' 
    
    oql = f"SELECT {ci_class} WHERE name = '{service_name}' AND org_id = {org_id}"
    
    search_data = {
        'class': ci_class,
        'key': oql
    }
    
    resp = call_itop('core/get', search_data)
    objects = resp.get('objects')
    
    fields = {
        'name': service_name,
        'org_id': org_id,
        'status': status,
        'description': (
            f"Microservice managed by Ka0s CI/CD.\n"
            f"Last Sync: {datetime.datetime.now()}\nRepo: Ka0s"
        ),
        # 'business_criticity': 'medium', # Optional defaults
        # 'move2production': datetime.date.today().isoformat() # Optional
    }

    if not objects:
        log(f"🔍 Service '{service_name}' NOT FOUND in iTop. Proceeding to CREATE...")
        create_data = {
            'class': ci_class,
            'fields': fields
        }
        create_resp = call_itop('core/create', create_data)
        if create_resp.get('code') == 0:
            obj_keys = list(create_resp['objects'].keys())
            log(f"✅ Successfully CREATED {service_name} (ID: {obj_keys[0]})")
        else:
            log(f"❌ Failed to create {service_name}: {create_resp.get('message')}")
    else:
        # Update existing
        ci_id = list(objects.keys())[0]
        log(f"🔍 Service '{service_name}' FOUND in iTop (ID: {ci_id}). Proceeding to UPDATE...")
        
        update_data = {
            'class': ci_class,
            'key': ci_id,
            'fields': fields
        }
        update_resp = call_itop('core/update', update_data)
        if update_resp.get('code') == 0:
            log(f"✅ Successfully UPDATED {service_name} (ID: {ci_id})")
        else:
            log(f"❌ Failed to update {service_name}: {update_resp.get('message')}")


def main():
    parser = argparse.ArgumentParser(description='Sync Services to iTop CMDB')
    parser.add_argument(
        '--services', required=True, 
        help='Comma separated list of service names'
    )
    parser.add_argument(
        '--status', default='production', 
        help='Target status (production, implementation, obsolete)'
    )
    parser.add_argument(
        '--delete', action='store_true', 
        help='If set, marks services as obsolete instead of production'
    )
    
    args = parser.parse_args()
    
    if not ITOP_URL or not ITOP_USER or not ITOP_PASSWORD:
        log("Missing environment variables (ITOP_URL, ITOP_API_USER, ITOP_API_PASSWORD)")
        sys.exit(1)
        
    org_id = get_organization_id(ORG_NAME)
    log(f"Using Organization ID: {org_id} for '{ORG_NAME}'")
    
    services = [s.strip() for s in args.services.split(',') if s.strip()]
    
    target_status = args.status
    if args.delete:
        target_status = 'obsolete'
        
    for service in services:
        sync_service(service, org_id, target_status)


if __name__ == "__main__":
    main()
