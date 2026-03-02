#!/bin/bash
set -e

ACTION=$1
DB_NAME=$2
DB_USER=$3
TARGET_NS=$4
PG_NS="postgresql"
PG_POD_SELECTOR="app=postgresql"
PG_ADMIN_USER="ka0s_admin"

if [ -z "$ACTION" ] || [ -z "$DB_NAME" ] || [ -z "$DB_USER" ]; then
  echo "Usage: $0 <create-db|drop-db> <db_name> <db_user> [target_namespace]"
  exit 1
fi

echo "🔍 Finding PostgreSQL Pod..."
PG_POD=$(kubectl get pods -n $PG_NS -l $PG_POD_SELECTOR -o jsonpath='{.items[0].metadata.name}')

if [ -z "$PG_POD" ]; then
  echo "❌ PostgreSQL Pod not found in namespace $PG_NS"
  exit 1
fi

echo "✅ Found PostgreSQL Pod: $PG_POD"

if [ "$ACTION" == "create-db" ]; then
  if [ -z "$TARGET_NS" ]; then
    echo "❌ Target namespace required for create-db"
    exit 1
  fi

  # Generate Secure Password
  DB_PASSWORD=$(openssl rand -base64 16 | tr -dc 'a-zA-Z0-9' | head -c 16)
  
  echo "🚀 Creating Database '$DB_NAME' and User '$DB_USER'..."
  
  # Create User and Database (Idempotent-ish check via SQL)
  # We execute this inside the pod
  # Connect to default 'postgres' database for administrative tasks
  kubectl exec -i $PG_POD -n $PG_NS -- psql -U $PG_ADMIN_USER -d postgres <<EOF
DO \$\$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '$DB_USER') THEN
    CREATE ROLE $DB_USER WITH LOGIN PASSWORD '$DB_PASSWORD';
  ELSE
    ALTER ROLE $DB_USER WITH PASSWORD '$DB_PASSWORD';
  END IF;
END
\$\$;

SELECT 'CREATE DATABASE $DB_NAME'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$DB_NAME')\gexec

GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
ALTER DATABASE $DB_NAME OWNER TO $DB_USER;
EOF

  if [ $? -eq 0 ]; then
    echo "✅ Database and User created/updated successfully."
    
    # Create Secret in Target Namespace
    echo "📦 Creating Kubernetes Secret in namespace '$TARGET_NS'..."
    
    # Ensure namespace exists
    kubectl create namespace $TARGET_NS --dry-run=client -o yaml | kubectl apply -f -
    
    # Create Secret
    SECRET_NAME="${DB_NAME}-db-secret"
    
    kubectl create secret generic $SECRET_NAME \
      --namespace=$TARGET_NS \
      --from-literal=DB_HOST="postgresql.postgresql.svc.cluster.local" \
      --from-literal=DB_PORT="5432" \
      --from-literal=DB_NAME="$DB_NAME" \
      --from-literal=DB_USER="$DB_USER" \
      --from-literal=DB_PASSWORD="$DB_PASSWORD" \
      --dry-run=client -o yaml | kubectl apply -f -
      
    echo "✅ Secret '$SECRET_NAME' created in '$TARGET_NS'"
    echo "::notice::Database Credentials stored in Secret: $SECRET_NAME (Namespace: $TARGET_NS)"
    
  else
    echo "❌ Failed to execute SQL commands."
    exit 1
  fi

elif [ "$ACTION" == "drop-db" ]; then
  echo "⚠️  Dropping Database '$DB_NAME' and User '$DB_USER'..."
  
  kubectl exec -i $PG_POD -n $PG_NS -- psql -U $PG_ADMIN_USER -d postgres <<EOF
DROP DATABASE IF EXISTS $DB_NAME;
DROP ROLE IF EXISTS $DB_USER;
EOF
  echo "✅ Database dropped."
fi
