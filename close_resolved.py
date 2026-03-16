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
        cmd = f'gh run list --workflow="{workflow_name}" --limit 1 --json conclusion -q ".[0].conclusion"'
        conclusion = run_cmd(cmd)
        
        if conclusion == "success":
            print(f"Closing #{number} ({workflow_name}) as latest run is success...")
            comment = "La última ejecución del workflow ha sido exitosa (servicio iTop restaurado). Se procede a cerrar la incidencia automáticamente."
            run_cmd(f'gh issue close {number} -c "{comment}"')
        else:
            print(f"Issue #{number} ({workflow_name}) is still {conclusion}")
    elif "Pruebas" in title:
        print(f"Closing test issue #{number}")
        run_cmd(f'gh issue close {number} -c "Cierre de incidencia de prueba."')
