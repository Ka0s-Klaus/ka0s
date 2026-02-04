#!/bin/bash
set -e

# Configuración
REPORT_DIR="audit/daily-reports"
DATE=$(date +%Y-%m-%d)
TIMESTAMP=$(date +%H-%M-%S)
REPORT_FILE="${REPORT_DIR}/report-${DATE}.md"
mkdir -p "$REPORT_DIR"

# Función para encabezados
section() {
    echo "" >> "$REPORT_FILE"
    echo "## $1" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
}

# Inicio del Reporte
echo "# 📊 Ka0s Cluster Daily Report - $DATE" > "$REPORT_FILE"
echo "**Generado a las:** $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# 1. Estado de los Nodos
section "🖥️ Estado de los Nodos"
echo "| Nombre | Estado | Roles | Versión | Edad |" >> "$REPORT_FILE"
echo "|--------|--------|-------|---------|------|" >> "$REPORT_FILE"
kubectl get nodes --no-headers | awk '{printf "| %s | %s | %s | %s | %s |\n", $1, $2, $3, $5, $4}' >> "$REPORT_FILE"

# 2. Uso de Recursos (Si Metrics Server funciona)
section "📈 Uso de Recursos (Top Nodes)"
if kubectl top nodes &> /dev/null; then
    echo "\`\`\`" >> "$REPORT_FILE"
    kubectl top nodes >> "$REPORT_FILE"
    echo "\`\`\`" >> "$REPORT_FILE"
else
    echo "⚠️ Metrics API no disponible." >> "$REPORT_FILE"
fi

# 3. Pods con Problemas (No Running/Completed)
section "⚠️ Pods en Estado Crítico"
PROBLEMATIC_PODS=$(kubectl get pods -A --no-headers | grep -v "Running" | grep -v "Completed" || true)

if [ -z "$PROBLEMATIC_PODS" ]; then
    echo "✅ Todos los pods están saludables." >> "$REPORT_FILE"
else
    echo "Se han detectado pods con problemas:" >> "$REPORT_FILE"
    echo "\`\`\`" >> "$REPORT_FILE"
    echo "$PROBLEMATIC_PODS" >> "$REPORT_FILE"
    echo "\`\`\`" >> "$REPORT_FILE"
fi

# 4. Resumen de Seguridad (Trivy)
section "🛡️ Seguridad (Trivy Reports)"
if kubectl get crd vulnerabilityreports.aquasecurity.github.io &> /dev/null; then
    REPORT_COUNT=$(kubectl get vulnerabilityreports.aquasecurity.github.io -A --no-headers | wc -l)
    echo "- **Total de Reportes Generados**: $REPORT_COUNT" >> "$REPORT_FILE"
    
    # Intentar obtener resumen de severidades críticas (si existen herramientas jsonpath, sino simple listado)
    echo "- **Pods Escaneados Recientemente**:" >> "$REPORT_FILE"
    echo "\`\`\`" >> "$REPORT_FILE"
    kubectl get vulnerabilityreports.aquasecurity.github.io -A --no-headers | head -n 10 | awk '{print $1, $2, $3}' >> "$REPORT_FILE"
    echo "\`\`\`" >> "$REPORT_FILE"
    echo "*(Mostrando primeros 10 reportes)*" >> "$REPORT_FILE"
else
    echo "⚠️ Trivy Operator no parece estar instalado o no ha generado CRDs." >> "$REPORT_FILE"
fi

# 5. Eventos de Advertencia (Última hora aprox)
section "📢 Eventos de Advertencia (Warning)"
echo "\`\`\`" >> "$REPORT_FILE"
kubectl get events -A --field-selector type=Warning --sort-by='.lastTimestamp' | tail -n 20 >> "$REPORT_FILE"
echo "\`\`\`" >> "$REPORT_FILE"

echo "" >> "$REPORT_FILE"
echo "---" >> "$REPORT_FILE"
echo "Reporte generado automáticamente por Ka0s CI/CD" >> "$REPORT_FILE"

echo "✅ Reporte generado en: $REPORT_FILE"
