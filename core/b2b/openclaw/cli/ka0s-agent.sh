#!/bin/bash
# ka0s-agent: CLI Wrapper for Ka0s AI Agent (OpenClaw)
# Usage: ./ka0s-agent.sh "Your prompt here"

set -e

NAMESPACE="openclaw"
POD_NAME="openclaw-0" # StatefulSet always uses predictable names
CONTAINER="openclaw"

# Check if arguments are provided
if [ -z "$1" ]; then
    echo "Usage: $0 \"Your prompt here\""
    exit 1
fi

PROMPT="$1"

echo "🦞 Sending prompt to Ka0s Agent..."

# Execute the command inside the pod
# We use 'openclaw agent' command which is built-in
kubectl exec -it -n "$NAMESPACE" "$POD_NAME" -c "$CONTAINER" -- \
    openclaw agent --message "$PROMPT" --thinking high

echo ""
echo "✅ Task completed."
