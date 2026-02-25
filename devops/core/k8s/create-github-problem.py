import os
import json
import subprocess
import sys


def main():
    failed_pods_file = os.environ.get('FAILED_PODS_FILE')
    if not failed_pods_file:
        print("Error: FAILED_PODS_FILE environment variable not set.")
        sys.exit(1)

    if not os.path.exists(failed_pods_file):
        print(f"Warning: FAILED_PODS_FILE not found at {failed_pods_file}. "
              "Assuming no failures.")
        sys.exit(0)

    try:
        with open(failed_pods_file, 'r') as f:
            # Check if file is empty
            content = f.read().strip()
            if not content:
                print("Failed pods file is empty.")
                return
            pods = json.loads(content)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in failed pods file: {e}")
        sys.exit(1)

    if not pods:
        print("No failed pods found.")
        return

    # Ensure labels exist
    labels = {
        "itop-problem": {
            "color": "d73a4a",
            "desc": "Problem detected by iTop/Audit"
        },
        "triage": {
            "color": "fbca04",
            "desc": "Needs triage"
        },
        "automated": {
            "color": "5319e7",
            "desc": "Created by automation"
        }
    }

    for label, info in labels.items():
        try:
            # Check if label exists first to avoid error spam in logs
            subprocess.run(["gh", "label", "view", label],
                           check=True, capture_output=True)
        except subprocess.CalledProcessError:
            print(f"Label '{label}' not found. Attempting to create...")
            try:
                subprocess.run([
                    "gh", "label", "create", label,
                    "--color", info["color"],
                    "--description", info["desc"],
                    "--force"
                ], check=True, capture_output=True)
                print(f"Created label '{label}'.")
            except subprocess.CalledProcessError as e:
                print(f"Warning: Could not create label '{label}': {e}")

    print(f"Found {len(pods)} failed pods. Processing...")

    for pod in pods:
        metadata = pod.get('metadata', {})
        status = pod.get('status', {})
        namespace = metadata.get('namespace', 'unknown')
        name = metadata.get('name', 'unknown')
        phase = status.get('phase', 'Unknown')

        pod_identifier = f"{namespace}/{name}"
        title = f"[PROBLEM]: Pod {pod_identifier} Failed"

        # Check existing issues
        # Using gh issue list --search "in:title [PROBLEM]: ..."
        cmd_check = [
            "gh", "issue", "list",
            "--search", f"{title} in:title",
            "--state", "open",
            "--json", "number"
        ]

        try:
            result = subprocess.run(
                cmd_check, capture_output=True, text=True, check=True
            )
            existing_issues = json.loads(result.stdout)
        except subprocess.CalledProcessError as e:
            print(f"Error checking issues for {pod_identifier}: {e}")
            continue
        except json.JSONDecodeError:
            print(f"Error decoding gh output for {pod_identifier}")
            continue

        if existing_issues:
            print(f"Issue already exists for {pod_identifier}: "
                  f"#{existing_issues[0]['number']}")
            continue

        # Construct Body mimicking the Issue Form structure
        conditions_md = ""
        for cond in status.get('conditions', []):
            if cond.get('status') != 'True':
                msg = cond.get('message', 'No message')
                reason = cond.get('reason', 'No reason')
                conditions_md += f"- **{cond.get('type')}**: {reason} - {msg}\n"

        body = f"""
### Organizacion (mandatory en iTop)
Ka0s Inc

### Solicitante (Caller en iTop, opcional)
Ka0s Bot

### Origen
Portal

### Impacto (mandatory)
Service

### Urgencia (mandatory)
medium

### Servicio / CI (nombre visible en iTop)
{pod_identifier}

### Descripción (mandatory)
El pod `{name}` en el namespace `{namespace}` ha fallado.
**Estado actual:** `{phase}`

**Condiciones:**
{conditions_md}

### Hipótesis
Detectado automáticamente por auditoría de pods.

### Plan de Investigación
1. `kubectl describe pod {name} -n {namespace}`
2. `kubectl logs {name} -n {namespace}`
"""

        # Create Issue
        cmd_create = [
            "gh", "issue", "create",
            "--title", title,
            "--label", "itop-problem,triage,automated",
            "--body", body
        ]

        try:
            subprocess.run(cmd_create, check=True)
            print(f"Created issue for {pod_identifier}")
        except subprocess.CalledProcessError as e:
            print(f"Error creating issue for {pod_identifier}: {e}")


if __name__ == "__main__":
    main()
