#!/bin/bash

# Security Audit Script for Kubernetes Workloads
# Checks for: Privileged Containers, Root Users, HostPath Volumes, 'latest' tags.

OUTPUT_FILE="${1:-k8s-security-audit.md}"

echo "# Kubernetes Security Audit Report" > "$OUTPUT_FILE"
echo "Date: $(date)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 1. Privileged Containers" >> "$OUTPUT_FILE"
echo "Pods running with 'privileged: true' (Full host access):" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
kubectl get pods -A -o json | jq -r '
  .items[] | select(.spec.containers[].securityContext.privileged == true) 
  | "\(.metadata.namespace) / \(.metadata.name)"' >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 2. Containers Running as Root" >> "$OUTPUT_FILE"
echo "Pods not enforcing 'runAsNonRoot: true':" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
# Note: This is a basic check. It checks if runAsNonRoot is explicitly set to true.
kubectl get pods -A -o json | jq -r '
  .items[] | select(.spec.securityContext.runAsNonRoot != true and (.spec.containers[].securityContext.runAsNonRoot != true)) 
  | "\(.metadata.namespace) / \(.metadata.name)"' | head -n 20 >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
echo "*(List truncated to first 20)*" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 3. HostPath Volume Usage" >> "$OUTPUT_FILE"
echo "Pods mounting host filesystem paths:" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
kubectl get pods -A -o json | jq -r '
  .items[] | select(.spec.volumes[].hostPath != null) 
  | "\(.metadata.namespace) / \(.metadata.name)"' | sort | uniq >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 4. Usage of ':latest' Image Tag" >> "$OUTPUT_FILE"
echo "Deployments using mutable ':latest' tag:" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
kubectl get pods -A -o json | jq -r '
  .items[] | .spec.containers[] | select(.image | endswith(":latest")) 
  | "\(.image)"' | sort | uniq >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"

echo "Audit completed. Report saved to $OUTPUT_FILE"
