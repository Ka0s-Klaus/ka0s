#!/bin/bash

# Configuración de conexión
HOST="192.168.1.50"
ADMIN_USER="kaossupport"
ADMIN_PASS="ojNzdFAf2jrK38Bf7qc"
DB_NAME="db_inspector"
DB_USER="db_inspector"
DB_PASS="${1:-}"

# Directorio con los JSON
JSON_DIR="/Users/santale/ka0s-klaus/ka0s/core/outputs/i"

# Crear base de datos y usuario (si no existe)
mongo "mongodb://${ADMIN_USER}:${ADMIN_PASS}@${HOST}:27017/admin" <<EOF
use ${DB_NAME}
db.createUser({
  user: "${DB_USER}",
  pwd: "${DB_PASS}",
  roles: [ { role: "dbOwner", db: "${DB_NAME}" } ]
})
EOF

# Función para verificar duplicados
check_duplicate() {
  local file="\$1"
  local dbid=$(jq -r '.databaseId' "\$file")
  mongo --quiet "mongodb://${ADMIN_USER}:${ADMIN_PASS}@${HOST}:27017/${DB_NAME}" --eval "db.inspector_results.count({databaseId: \$dbid})"
}

# Procesar todos los JSON
find "\$JSON_DIR" -name "*.json" | while read -r json_file; do
  if [[ -f "\$json_file" ]]; then
    if [[ $(check_duplicate "\$json_file") -eq 0 ]]; then
      echo "Importando: \$(basename "\$json_file")"
      mongoimport --host \$HOST --username \$ADMIN_USER --password \$ADMIN_PASS \
        --authenticationDatabase admin \
        --db \$DB_NAME \
        --collection inspector_results \
        --file "\$json_file" --jsonArray
    else
      echo "Saltando duplicado: \$(basename "\$json_file")"
    fi
  fi
done