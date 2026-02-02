#!/bin/bash

# Security Audit Script using Trivy
# Checks for: Vulnerabilities (CVEs), Misconfigurations (Compliance), and Secrets.

OUTPUT_FILE="${1:-k8s-trivy-audit.md}"

echo "" >> "$OUTPUT_FILE"
echo "# Parte 3: Escaneo de Vulnerabilidades y Compliance (Trivy)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Check if trivy is installed
if ! command -v trivy &> /dev/null; then
    echo "Trivy not found. Installing..."
    curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sudo sh -s -- -b /usr/local/bin
fi

echo "## 8. Resumen de Vulnerabilidades (Cluster)" >> "$OUTPUT_FILE"
echo "Escaneo de vulnerabilidades críticas y altas en el clúster:" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"

# Run Trivy K8s scan
# We limit to High/Critical severities to keep the report readable
# We focus on the summary first
trivy k8s --report summary --severity HIGH,CRITICAL --scanners vuln,misconfig,secret cluster >> "$OUTPUT_FILE"

echo '```' >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 9. Top 10 Vulnerabilidades Críticas" >> "$OUTPUT_FILE"
echo "Detalle de las vulnerabilidades más críticas encontradas:" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
# More detailed scan but limited output? 
# Using json output to parse might be better, but for now let's append a text table for specific workloads if needed.
# For this "overview" report, the summary above is often enough, but let's try to list images with most critical CVEs.
trivy k8s --format json --severity CRITICAL --scanners vuln cluster | jq -r '
  .Resources[]? 
  | select(.Results[]?.Vulnerabilities != null)
  | {
      Namespace: .Namespace, 
      Name: .Name, 
      Criticals: (.Results[]? | select(.Class == "os-pkgs" or .Class == "lang-pkgs") | .Vulnerabilities[]? | select(.Severity == "CRITICAL") | .VulnerabilityID)
    }
' | jq -s 'group_by(.Name) | map({Name: .[0].Name, Namespace: .[0].Namespace, Count: length}) | sort_by(.Count) | reverse | .[:10]' >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"

echo "Trivy Audit completed. Report updated in $OUTPUT_FILE"
