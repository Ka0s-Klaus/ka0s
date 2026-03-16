# Ka0s iTop Core Module

This module serves as the central integration hub between Ka0s and iTop ITSM.

## Architecture

The module consists of:
1.  **Python SDK (`core/lib/itop`)**: A unified library for interacting with iTop's REST API.
2.  **Automation Workflows**: GitHub Actions for syncing CMDB, Identities, and Service Management data.
3.  **Infrastructure**: Kubernetes deployment configurations for running iTop in a cloud-native environment.

## Key Features

*   **Idempotent Synchronization**: Ensures data consistency without duplication.
*   **Identity Management**: Syncs People, Teams, and User Accounts from GitOps definitions.
*   **Service Catalog Management**: Defines Services, SLAs, and Contracts as Code.
*   **CMDB Ingestion**: Automatically discovers and registers Kubernetes resources as CIs.

## Usage

See the sub-documents for detailed guides:
*   [01_concept.md](./01_concept.md) - Conceptual overview
*   [02_usage_validation.md](./02_usage_validation.md) - How to validate configurations
*   [03_technical.md](./03_technical.md) - Technical implementation details
