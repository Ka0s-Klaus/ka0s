# CLI Usage Guide

## Command Line Interface (ka0s-agent)

For quick interactions without opening a web browser, we provide a CLI wrapper script located at `core/b2b/openclaw/cli/ka0s-agent.sh`.

### Setup
Make the script executable:
```bash
chmod +x core/b2b/openclaw/cli/ka0s-agent.sh
```

### Usage
Simply pass your prompt as an argument:

```bash
./core/b2b/openclaw/cli/ka0s-agent.sh "Diagnose the status of the 'monitoring' namespace"
```

### How it works
The script uses `kubectl exec` to run the native `openclaw agent` command directly inside the running pod. This ensures:
1.  **Security**: Uses Kubernetes RBAC authentication (no extra API keys needed).
2.  **Context**: Runs within the cluster network, allowing direct access to internal services.
3.  **Persistence**: The agent's memory is updated with this interaction.
