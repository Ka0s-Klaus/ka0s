#!/bin/bash

# Script de utilidad para probar el acceso a la API de Kubernetes usando el Token del Dashboard
# Uso: ./test-api-access.sh

# 1. Obtener la URL de la API (Asumimos ejecución desde dentro de la red o con acceso a la IP)
# Si es desde fuera, usa la IP externa del LoadBalancer o el dominio.
API_URL="https://kubernetes.default.svc" # Interno
# API_URL="https://192.168.1.10:6443" # Externo (Ejemplo IP Manager)

# 2. Obtener el Token del ServiceAccount admin-user
echo "🔑 Obteniendo Token de admin-user..."
TOKEN=$(kubectl -n kubernetes-dashboard create token admin-user)

if [ -z "$TOKEN" ]; then
    echo "❌ Error: No se pudo obtener el token. Verifica que el usuario 'admin-user' existe."
    exit 1
fi

echo "✅ Token obtenido correctamente."

# 3. Realizar una petición de prueba (Listar Nodos)
echo "📡 Conectando a la API de Kubernetes para listar nodos..."

# Nota: -k ignora certificados autofirmados (inseguro, pero útil para pruebas)
curl -s -k -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    "https://192.168.1.10:6443/api/v1/nodes" | grep "name" | head -n 5

echo ""
echo "---"
echo "ℹ️  Para usar este token en tus scripts o Postman:"
echo "Header: Authorization: Bearer <TOKEN>"
echo "Token: $TOKEN"
