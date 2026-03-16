import json
import subprocess
import re

def run_cmd(cmd):
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout.strip()

with open('issues.json') as f:
    issues = json.load(f)

for issue in issues:
    title = issue['title']
    number = issue['number']
    
    match = re.match(r'\[INCIDENT\]: Fallo en workflow (.+)', title)
    if match:
        workflow_name = match.group(1).strip()
        
        # Get latest run conclusion
        cmd = f'gh run list --workflow="{workflow_name}" --limit 1 --json conclusion -q ".[0].conclusion"'
        conclusion = run_cmd(cmd)
        
        print(f"Issue #{number}: Workflow '{workflow_name}' -> Latest run: {conclusion}")
    else:
        print(f"Issue #{number}: Not a workflow incident ('{title}')")
