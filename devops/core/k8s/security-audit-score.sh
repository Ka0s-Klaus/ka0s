#!/bin/bash

# Security Audit Score Calculation
# Reads audit/kube/metrics.env and appends score to report.

OUTPUT_FILE="${1:-k8s-security-audit.md}"
METRICS_FILE="audit/kube/metrics.env"
VIOLATIONS_FILE="audit/kube/violations.md"

if [ ! -f "$METRICS_FILE" ]; then
  echo "Metrics file not found!"
  exit 1
fi

source "$METRICS_FILE"

# Default values if missing
TOTAL_PODS=${TOTAL_PODS:-0}
COUNT_PRIV=${COUNT_PRIV:-0}
COUNT_ROOT=${COUNT_ROOT:-0}
COUNT_HOSTPATH=${COUNT_HOSTPATH:-0}
COUNT_LATEST=${COUNT_LATEST:-0}

COUNT_NS_TOTAL=${COUNT_NS_TOTAL:-0}
COUNT_NS_NOPOL=${COUNT_NS_NOPOL:-0}

# Scoring Logic
# Total Checks = (Pods * 4) + (Namespaces)
# We ignore RBAC/Wildcards in total checks for simplicity as total Roles count is not exported, 
# but we deduct points for violations if we used a point system.
# Let's use strict compliance %:
# Passed = (TotalPods - Priv) + (TotalPods - Root) + (TotalPods - HostPath) + (TotalPods - Latest) + (TotalNs - NoPol)

TOTAL_CHECKS=$(( (TOTAL_PODS * 4) + COUNT_NS_TOTAL ))

if [ "$TOTAL_CHECKS" -eq 0 ]; then
  SCORE=0
else
  PASSED_CHECKS=$(( (TOTAL_PODS - COUNT_PRIV) + (TOTAL_PODS - COUNT_ROOT) + (TOTAL_PODS - COUNT_HOSTPATH) + (TOTAL_PODS - COUNT_LATEST) + (COUNT_NS_TOTAL - COUNT_NS_NOPOL) ))
  
  # Ensure passed checks doesn't go negative if logic is weird (shouldn't happen)
  if [ "$PASSED_CHECKS" -lt 0 ]; then PASSED_CHECKS=0; fi

  SCORE=$(( (PASSED_CHECKS * 100) / TOTAL_CHECKS ))
fi

echo "" >> "$OUTPUT_FILE"
echo "## 10. Security Compliance Score" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "### Global Score: **${SCORE}%**" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "| Category | Total Audited | Violations | Compliance |" >> "$OUTPUT_FILE"
echo "|---|---|---|---|" >> "$OUTPUT_FILE"

# Helper for row percentage
calc_pct() {
  local total=$1
  local bad=$2
  if [ "$total" -eq 0 ]; then echo "N/A"; else
    echo "$(( ((total - bad) * 100) / total ))%"; 
  fi
}

echo "| Pod Security (Privileged) | $TOTAL_PODS | $COUNT_PRIV | $(calc_pct $TOTAL_PODS $COUNT_PRIV) |" >> "$OUTPUT_FILE"
echo "| Pod Security (Root User) | $TOTAL_PODS | $COUNT_ROOT | $(calc_pct $TOTAL_PODS $COUNT_ROOT) |" >> "$OUTPUT_FILE"
echo "| Pod Security (HostPath) | $TOTAL_PODS | $COUNT_HOSTPATH | $(calc_pct $TOTAL_PODS $COUNT_HOSTPATH) |" >> "$OUTPUT_FILE"
echo "| Best Practices (Tags) | $TOTAL_PODS | $COUNT_LATEST | $(calc_pct $TOTAL_PODS $COUNT_LATEST) |" >> "$OUTPUT_FILE"
echo "| Network Policies | $COUNT_NS_TOTAL | $COUNT_NS_NOPOL | $(calc_pct $COUNT_NS_TOTAL $COUNT_NS_NOPOL) |" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 11. Detailed Violations Log" >> "$OUTPUT_FILE"
echo "Full list of resources violating security best practices:" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

if [ -f "$VIOLATIONS_FILE" ]; then
  cat "$VIOLATIONS_FILE" >> "$OUTPUT_FILE"
  rm "$VIOLATIONS_FILE"
else
  echo "No violations data found." >> "$OUTPUT_FILE"
fi

echo "Scoring completed."
