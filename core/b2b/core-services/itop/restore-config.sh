#!/bin/bash
# Script para RESTAURAR la configuración de iTop a su estado original
# Uso: ./restore-config.sh

NAMESPACE="itop"
DEPLOYMENT="itop"
CONFIG_FILE="/var/www/html/conf/production/config-itop.php"

echo "🔍 Buscando pod de iTop..."
POD=$(kubectl get pod -n $NAMESPACE -l app=itop -o jsonpath="{.items[0].metadata.name}")

if [ -z "$POD" ]; then
  echo "❌ Error: No se encontró ningún pod de iTop en ejecución."
  exit 1
fi

echo "🎯 Pod encontrado: $POD"

echo "📝 Verificando si existe backup..."
kubectl exec -n $NAMESPACE $POD -- ls ${CONFIG_FILE}.bak > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "🔙 Restaurando desde backup..."
    kubectl exec -n $NAMESPACE $POD -- cp ${CONFIG_FILE}.bak $CONFIG_FILE
else
    echo "⚠️ No se encontró backup (.bak). Intentando revertir app_root_url a valor vacío..."
    kubectl exec -n $NAMESPACE $POD -- sed -i "s|'app_root_url' => .*|'app_root_url' => '',|" $CONFIG_FILE
fi

echo "✅ Configuración restaurada."
echo "🔎 Verificación:"
kubectl exec -n $NAMESPACE $POD -- grep "'app_root_url'" $CONFIG_FILE

echo "🔄 Reiniciando el despliegue..."
kubectl rollout restart deployment/$DEPLOYMENT -n $NAMESPACE

echo "🎉 iTop restaurado a la configuración original."
