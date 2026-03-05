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
SSL_VERIFY_ENV = os.environ.get('ITOP_SSL_VERIFY', '').strip().lower()
# Default: verify SSL unless explicitly set to 'false'
ITOP_SSL_VERIFY = False if SSL_VERIFY_ENV == 'false' else True

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
    payload = {
        'operation': operation,
        'class': data.get('class'),
        'comment': comment or f"Automated sync from GitHub Actions {datetime.datetime.now()}",
        'output_fields': data.get('output_fields', 'id, friendlyname'),
    }

    # For core/get, we use key (OQL or ID)
    if operation == 'core/get':
        payload['key'] = data.get('key')
    # For core/create or core/update, we use fields
    elif operation in ['core/create', 'core/update']:
        if 'key' in data:
            payload['key'] = data['key']
        payload['fields'] = data.get('fields', {})

    response = None
    try:
        user = ITOP_USER or ''
        pwd = ITOP_PASSWORD or ''
        endpoint = f"{ITOP_URL}/webservices/rest.php?version={ITOP_VERSION}"
        response = requests.post(
            endpoint,
            auth=(user, pwd),
            data={'json_data': json.dumps(payload)},
            verify=ITOP_SSL_VERIFY
        )
        response.raise_for_status()
        data = response.json()
        if isinstance(data, dict) and data.get('code', 0) != 0:
            log(f"iTop returned error code {data.get('code')}: {data.get('message')}")
        return data
    except Exception as e:
        log(f"Error calling iTop: {e}")
        if response is not None:
            log(f"Response: {response.text}")
        sys.exit(1)


def get_organization_id(org_name):
    oql = f"SELECT Organization WHERE name = '{org_name}'"
    data = {
        'class': 'Organization',
        'key': oql
    }
    resp = call_itop('core/get', data)
    objects = resp.get('objects')
    
    if not objects:
        try:
            all_resp = call_itop('core/get', {'class': 'Organization', 'key': 'SELECT Organization', 'output_fields': 'id,name'})
            names = []
            objs = all_resp.get('objects') or {}
            for _, v in objs.items():
                fields = (v or {}).get('fields') or {}
                n = fields.get('name')
                if n:
                    names.append(n)
            if names:
                log(f"Organization '{org_name}' not found. Available: {', '.join(names)}")
            else:
                log(f"Organization '{org_name}' not found and no organizations listed.")
        except Exception:
            log(f"Organization '{org_name}' not found. Listing failed.")
        sys.exit(1)
    
    # Return the first key (ID)
    for key, val in objects.items():
        # Keys can be like "Organization::1" -> extract numeric id
        if isinstance(key, str) and '::' in key:
            return key.split('::')[-1]
        return str(key)
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
