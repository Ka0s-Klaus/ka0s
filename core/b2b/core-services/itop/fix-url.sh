#!/bin/bash
# Script para corregir la URL base de iTop cuando se usa tras un proxy/NAT con cambio de puerto
# Uso: ./fix-url.sh

NAMESPACE="itop"
DEPLOYMENT="itop"
CONFIG_FILE="/var/www/html/conf/production/config-itop.php"
NEW_URL="https://itsm.ka0s.io:8080/"

echo "🔍 Buscando pod de iTop..."
POD=$(kubectl get pod -n $NAMESPACE -l app=itop -o jsonpath="{.items[0].metadata.name}")

if [ -z "$POD" ]; then
  echo "❌ Error: No se encontró ningún pod de iTop en ejecución."
  exit 1
fi

echo "🎯 Pod encontrado: $POD"

echo "📝 Verificando archivo de configuración..."
kubectl exec -n $NAMESPACE $POD -- ls $CONFIG_FILE > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Error: No se encuentra $CONFIG_FILE dentro del pod."
    exit 1
fi

echo "📦 Creando backup de la configuración..."
kubectl exec -n $NAMESPACE $POD -- cp $CONFIG_FILE ${CONFIG_FILE}.bak

echo "🔧 Modificando app_root_url a $NEW_URL..."
# Usamos sed para reemplazar la línea completa de app_root_url
kubectl exec -n $NAMESPACE $POD -- sed -i "s|'app_root_url' => .*|'app_root_url' => '$NEW_URL',|" $CONFIG_FILE

echo "✅ Configuración actualizada."
echo "🔎 Verificación:"
kubectl exec -n $NAMESPACE $POD -- grep "'app_root_url'" $CONFIG_FILE

echo "🔄 Reiniciando el despliegue para aplicar cambios (limpieza de caché)..."
kubectl rollout restart deployment/$DEPLOYMENT -n $NAMESPACE

echo "🎉 Listo! iTop ahora debería generar enlaces con el puerto 8080."
