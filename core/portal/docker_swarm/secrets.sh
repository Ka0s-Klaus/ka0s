#!/bin/bash

# Crea los secretos de Docker Swarm para Backstage
# Ejecuta este script desde el directorio donde están los archivos de los secretos

# Variables de nombres de secretos
POSTGRES_SECRET="POSTGRES_PASSWORD"
BACKEND_SECRET="BACKEND_SECRET"
FRONTEND_SECRET="FRONTEND_SECRET"
SSL_CERT_SECRET="SSL_CERT"
SSL_KEY_SECRET="SSL_KEY"

# Crea el secreto para la contraseña de PostgreSQL
docker secret create "$POSTGRES_SECRET" ./postgres_password.txt

# Crea el secreto para el backend
docker secret create "$BACKEND_SECRET" ./backend_secret.txt

# Crea el secreto para el frontend
docker secret create "$FRONTEND_SECRET" ./frontend_secret.txt

# Crea el secreto para el certificado SSL
docker secret create "$SSL_CERT_SECRET" ./core.ka0s.io.crt

# Crea el secreto para la clave SSL
docker secret create "$SSL_KEY_SECRET" ./core.ka0s.io.pem

# Muestra los secretos creados
echo "Se han creado los siguientes secretos:"
docker secret ls