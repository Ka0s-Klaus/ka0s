#!/bin/bash
# Script para configurar iTop con URL dinámica (HTTP/HTTPS y cualquier puerto)
# Uso: ./fix-url.sh

NAMESPACE="itop"
DEPLOYMENT="itop"
CONFIG_FILE="/var/www/html/conf/production/config-itop.php"

# Inyectamos código PHP dinámico para que iTop detecte automáticamente el protocolo y puerto.
# Usamos HTTP_HOST si existe (web), o fallback a la URL externa por defecto (CLI/Cron).
DYNAMIC_URL_PHP="(isset(\$_SERVER['HTTP_HOST']) ? (isset(\$_SERVER['HTTPS']) && \$_SERVER['HTTPS'] === 'on' ? 'https' : 'http') . '://' . \$_SERVER['HTTP_HOST'] . '/' : 'https://itsm.ka0s.io:8080/')"

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

echo "🔧 Modificando app_root_url para ser DINÁMICA..."

# Creamos un archivo temporal con el sed command para evitar problemas de escaping con comillas simples/dobles en bash
# La idea es reemplazar: 'app_root_url' => '...', por 'app_root_url' => CODIGO_PHP,
# Note: Usamos s|pattern|replacement| para evitar conflictos con /

kubectl exec -n $NAMESPACE $POD -- sed -i "s|'app_root_url' => .*|'app_root_url' => $DYNAMIC_URL_PHP,|" $CONFIG_FILE

echo "✅ Configuración actualizada."
echo "🔎 Verificación (debe mostrar código PHP):"
kubectl exec -n $NAMESPACE $POD -- grep "'app_root_url'" $CONFIG_FILE

echo "🔄 Reiniciando el despliegue para limpiar cachés..."
kubectl rollout restart deployment/$DEPLOYMENT -n $NAMESPACE

echo "🎉 Listo! iTop ahora responderá dinámicamente a:"
echo "   - https://itsm.ka0s.io:8080 (Externo)"
echo "   - http://192.168.1.240 (Interno)"
