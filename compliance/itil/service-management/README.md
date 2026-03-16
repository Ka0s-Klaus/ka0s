# iTop Service Management Automation

This folder contains JSON definitions for iTop Service Management objects.
The objects are processed in alphabetical order of the filenames to ensure dependencies are met (e.g., Organization before Service).

## Structure

- `01_organizations.json`: Defines Organizations (Providers and Customers).
- `02_services.json`: Defines Service Families and Services.
- `03_service_subcategories.json`: Defines Service Subcategories.
- `04_contracts.json`: Defines Customer Contracts.
- `05_slas.json`: Defines SLAs and SLTs.
- `06_delivery_models.json`: Defines Delivery Models.

## Usage

To synchronize these definitions with your iTop instance, use the `itop_sync.py` script located in `core/automation/itop-sync/`.

### Prerequisites

- Python 3
- `requests` library (`pip install -r core/automation/itop-sync/requirements.txt`)
- iTop instance accessible via network
- iTop user with REST API access

### Execution

Set the following environment variables:

```bash
export ITOP_URL="https://your-itop-url/webservices/rest.php"
export ITOP_USER="your-username"
export ITOP_PASSWORD="your-password"
```

Run the synchronization script:

```bash
python3 core/automation/itop-sync/itop_sync.py compliance/itil/service-management
```

## JSON Format

Each file should contain a list of objects or a single object.
Example:

```json
[
  {
    "class": "Service",
    "fields": {
      "name": "Web Hosting",
      "org_id": {"name": "Ka0s Corp"},
      "servicefamily_id": {"name": "IT Services"},
      "status": "production"
    }
  }
]
```

**Key Fields**: The script attempts to identify objects by their `name` field automatically. If an object requires composite keys (e.g., `ServiceSubcategory` needing `name` + `service_id`), ensure the names are unique or extend the script to support explicit `key_fields`.
