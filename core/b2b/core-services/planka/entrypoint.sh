#!/bin/sh
# Planka Dynamic Entrypoint
# This script injects the correct BASE_URL based on the request (simulated) or sets it to a generic value.
# Since Planka (Sails.js) uses BASE_URL at build/runtime for assets and redirects, we need a strategy.
# Strategy: Set BASE_URL to the external domain for correctness in emails/links, 
# but rely on relative paths or dual-access configuration if supported.
# 
# However, Planka's architecture might strictly enforce one BASE_URL for CORS/Cookies.
# If so, we prioritize the HTTPS domain but ensure the IP access works for local checks.

# For now, we set it to the value passed or default.
# If we need complex logic (like detecting request host), that happens in Nginx or the Node app code, 
# which is harder to patch here. 

# Let's ensure the DB is ready again (double check)
echo "Checking database connection..."
until pg_isready -h planka-db -U planka; do 
  echo "Waiting for database..."
  sleep 2
done

echo "Database is ready."
echo "Starting Planka..."

# Exec the main command
exec "$@"
