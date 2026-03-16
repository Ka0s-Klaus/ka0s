import json
import subprocess
import re
import time

def run_cmd(cmd):
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout.strip()

with open('issues.json') as f:
    issues = json.load(f)

# Collect unique failing workflows
failing_workflows = set()

for issue in issues:
    title = issue['title']
    match = re.match(r'\[INCIDENT\]: Fallo en workflow (.+)', title)
    if match:
        workflow_name = match.group(1).strip()
        cmd = f'gh run list --workflow="{workflow_name}" --limit 1 --json conclusion -q ".[0].conclusion"'
        conclusion = run_cmd(cmd)
        if conclusion != "success":
            failing_workflows.add(workflow_name)

print("Workflows to re-trigger:", failing_workflows)

for wf in failing_workflows:
    print(f"Triggering {wf}...")
    run_cmd(f'gh workflow run "{wf}"')

print("Waiting 30 seconds for workflows to start and finish...")
time.sleep(30)
