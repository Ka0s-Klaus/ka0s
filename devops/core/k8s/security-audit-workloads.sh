#!/bin/bash

# Security Audit Script for Kubernetes Workloads
# Checks for: Privileged Containers, Root Users, HostPath Volumes, 'latest' tags.

OUTPUT_FILE="${1:-k8s-security-audit.md}"
METRICS_FILE="audit/kube/metrics.env"
mkdir -p audit/kube

echo "# Kubernetes Security Audit Report" > "$OUTPUT_FILE"
echo "Date: $(date)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Collect Metrics
TOTAL_PODS=$(kubectl get pods -A --no-headers 2>/dev/null | wc -l | tr -d ' ')
echo "TOTAL_PODS=$TOTAL_PODS" > "$METRICS_FILE"

echo "## 1. Privileged Containers" >> "$OUTPUT_FILE"
echo "Pods running with 'privileged: true' (Full host access):" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
PRIV_PODS=$(kubectl get pods -A -o json | jq -r '.items[] | select(.spec.containers[].securityContext.privileged == true) | "\(.metadata.namespace)/\(.metadata.name)"')
echo "$PRIV_PODS" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
COUNT_PRIV=$(echo "$PRIV_PODS" | grep -v '^$' | wc -l | tr -d ' ')
echo "COUNT_PRIV=$COUNT_PRIV" >> "$METRICS_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 2. Containers Running as Root" >> "$OUTPUT_FILE"
echo "Pods not enforcing 'runAsNonRoot: true':" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
ROOT_PODS=$(kubectl get pods -A -o json | jq -r '.items[] | select(.spec.securityContext.runAsNonRoot != true and (.spec.containers[].securityContext.runAsNonRoot != true)) | "\(.metadata.namespace)/\(.metadata.name)"')
echo "$ROOT_PODS" | head -n 20 >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
COUNT_ROOT=$(echo "$ROOT_PODS" | grep -v '^$' | wc -l | tr -d ' ')
echo "COUNT_ROOT=$COUNT_ROOT" >> "$METRICS_FILE"
echo "*(List truncated to first 20)*" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 3. HostPath Volume Usage" >> "$OUTPUT_FILE"
echo "Pods mounting host filesystem paths:" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
HOSTPATH_PODS=$(kubectl get pods -A -o json | jq -r '.items[] | select(.spec.volumes[].hostPath != null) | "\(.metadata.namespace)/\(.metadata.name)"')
echo "$HOSTPATH_PODS" | sort | uniq >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
COUNT_HOSTPATH=$(echo "$HOSTPATH_PODS" | grep -v '^$' | sort | uniq | wc -l | tr -d ' ')
echo "COUNT_HOSTPATH=$COUNT_HOSTPATH" >> "$METRICS_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 4. Usage of ':latest' Image Tag" >> "$OUTPUT_FILE"
echo "Deployments using mutable ':latest' tag:" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
LATEST_PODS=$(kubectl get pods -A -o json | jq -r '.items[] | .spec.containers[] | select(.image | endswith(":latest")) | "\(.image)"')
echo "$LATEST_PODS" | sort | uniq >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
COUNT_LATEST=$(echo "$LATEST_PODS" | grep -v '^$' | sort | uniq | wc -l | tr -d ' ')
echo "COUNT_LATEST=$COUNT_LATEST" >> "$METRICS_FILE"

echo "Audit completed. Report saved to $OUTPUT_FILE"
