# Metabase Service

Metabase is an open source business intelligence tool. It lets you ask questions about your data and displays answers in formats that make sense, whether that's a bar graph or a detailed table.

## Deployment

This service is deployed using **GitOps**. The database is hosted in the centralized PostgreSQL service.

## Prerequisites

- **PostgreSQL Database**: Must be created before deployment.
  - Run the `ops-postgres-manager.yml` workflow with `action=create-db`, `db_name=metabase`, `db_user=metabase_user`, `target_namespace=metabase`.
  - This creates the `metabase-db-secret` in the `metabase` namespace.

## Access

- URL: https://metabase.ka0s.io
- Login: Setup on first access.

## Configuration

- **Database**: PostgreSQL
- **Host**: `postgresql.postgresql`
- **Port**: `5432`
- **User/Pass**: From `metabase-db-secret`

## Troubleshooting

If the pod is crashing, check logs:
```bash
kubectl logs -n metabase -l app=metabase
```
Common issues:
- Database connection failed (check secret, check postgresql service).
- Memory limits (Metabase is Java-based, needs memory).
