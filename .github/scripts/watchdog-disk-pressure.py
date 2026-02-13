#!/usr/bin/env python3
"""
Script to detect Kubernetes nodes with DiskPressure condition.
"""

import json
import subprocess
import sys


def get_nodes_with_disk_pressure():
    """
    Query Kubernetes nodes and return a list of nodes where DiskPressure is True.
    """
    try:
        # Execute kubectl command to get nodes in JSON format
        result = subprocess.run(
            ["kubectl", "get", "nodes", "-o", "json"],
            capture_output=True,
            text=True,
            check=True
        )
        nodes_data = json.loads(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error executing kubectl: {e}", file=sys.stderr)
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON output: {e}", file=sys.stderr)
        sys.exit(1)

    affected_nodes = []

    for node in nodes_data.get("items", []):
        name = node["metadata"]["name"]
        conditions = node.get("status", {}).get("conditions", [])

        for condition in conditions:
            # Check for DiskPressure
            if (condition["type"] == "DiskPressure" and
                    condition["status"] == "True"):
                affected_nodes.append(name)
                # print(f"Node {name} has DiskPressure!", file=sys.stderr)
                break

    return affected_nodes


if __name__ == "__main__":
    nodes = get_nodes_with_disk_pressure()
    if nodes:
        # Print nodes separated by newline for easy processing in bash
        for node_name in nodes:
            print(node_name)
