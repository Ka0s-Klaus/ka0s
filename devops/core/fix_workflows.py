import os
import re
import yaml

WORKFLOWS_DIR = ".github/workflows"

def read_yaml(path):
    with open(path, "r") as f:
        return yaml.safe_load(f), f.read()

def write_yaml(path, data):
    with open(path, "w") as f:
        yaml.safe_dump(data, f, sort_keys=False)

def detect_core_job(jobs):
    for k in jobs.keys():
        if k not in ["handle-success", "handle-failure", "end-workflow"]:
            return k
    return None

def job_has_git_push(job):
    steps = job.get("steps", [])
    for s in steps:
        for key in ("run",):
            if key in s and isinstance(s[key], str) and "git push" in s[key]:
                return True
    return False

def ensure_env(block):
    if block is None:
        block = {}
    if "KAOS_CODE" not in block:
        block["KAOS_CODE"] = "${{ github.run_id }}"
    return block

def ensure_permissions_root(doc):
    perms = doc.get("permissions")
    if not isinstance(perms, dict) or perms.get("contents") != "read" or len(perms) != 1:
        doc["permissions"] = {"contents": "read"}

def ensure_runs_on_swarm(job):
    job["runs-on"] = "swarm-runners-scaleset"

def ensure_handle_success(doc, core_job):
    jobs = doc.setdefault("jobs", {})
    if "handle-success" not in jobs:
        jobs["handle-success"] = {
            "name": "Handle Success",
            "needs": [core_job] if core_job else [],
            "if": "success()",
            "runs-on": "swarm-runners-scaleset",
            "steps": [
                {"name": "Notify Success", "run": "echo \"✅ Workflow ${{ env.KAOS_MODULE }} completado correctamente.\""}
            ],
        }

def ensure_handle_failure(doc, core_job):
    jobs = doc.setdefault("jobs", {})
    jf = jobs.get("handle-failure")
    if jf is None:
        jf = {
            "name": "Handle Failure",
            "needs": [core_job] if core_job else [],
            "if": "failure()",
            "runs-on": "swarm-runners-scaleset",
            "permissions": {"issues": "write", "contents": "read"},
            "steps": [
                {"name": "Checkout Code", "uses": "actions/checkout@v4", "with": {"fetch-depth": 0}},
                {"name": "Install GH CLI", "uses": ".github/actions/install-gh-cli"},
                {
                    "name": "Create Incident Issue",
                    "env": {"GH_TOKEN": "${{ secrets.GITHUB_TOKEN }}"},
                    "run": "gh issue create --title \"[INCIDENT]: Fallo en workflow ${{ github.workflow }}\" --label \"itop-incident,triage,automated\" --body \"### Organización\nKa0s\n\n### Solicitante\n@${{ github.actor }}\n\n### Estado\nNew\n\n### Impacto\nService\n\n### Urgencia\nMedium\n\n### Servicio / CI afectado\nGitHub Actions / ${{ github.workflow }}\n\n### Descripción\nEl workflow **${{ github.workflow }}** ha fallado durante su ejecución.\n\n**Detalles Técnicos:**\n- **Módulo**: ${{ env.KAOS_MODULE }}\n- **Run ID**: ${{ github.run_id }}\n- **Commit**: ${{ github.sha }}\n- **Branch/Ref**: ${{ github.ref_name }}\n- **Actor**: ${{ github.actor }}\n\n### Pasos / Evidencias\nLogs de ejecución: https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}\n\"",
                },
            ],
        }
        jobs["handle-failure"] = jf
    if "needs" in jf:
        needs = jf["needs"]
        if isinstance(needs, list):
            jf["needs"] = [n for n in needs if n != "handle-success"]
            if core_job and core_job not in jf["needs"]:
                jf["needs"].insert(0, core_job)
        else:
            jf["needs"] = [core_job] if core_job else []
    jf["if"] = "failure()"
    ensure_runs_on_swarm(jf)
    perms = jf.get("permissions", {})
    perms.setdefault("issues", "write")
    perms.setdefault("contents", "read")
    jf["permissions"] = perms

def ensure_end_workflow(doc):
    jobs = doc.setdefault("jobs", {})
    je = jobs.get("end-workflow")
    if je is None:
        je = {
            "needs": ["handle-success", "handle-failure"],
            "if": "always()",
            "runs-on": "swarm-runners-scaleset",
            "permissions": {"actions": "write", "contents": "read"},
            "steps": [
                {"name": "Checkout Repository", "uses": "actions/checkout@v4", "with": {"fetch-depth": 0}},
                {"name": "Install GH CLI", "uses": ".github/actions/install-gh-cli"},
                {
                    "name": "Trigger Inspector",
                    "env": {"GH_TOKEN": "${{ github.token }}"},
                    "run": "gh workflow run inspector.yml -f workflow_name=\"${{ github.workflow }}\" -f run_id=\"${{ github.run_id }}\" -f status=\"${{ job.status }}\"",
                },
            ],
        }
        jobs["end-workflow"] = je
    else:
        je["if"] = "always()"
        ensure_runs_on_swarm(je)
        if "needs" in je:
            needs = je["needs"]
            if isinstance(needs, list):
                for n in ["handle-success", "handle-failure"]:
                    if n not in needs:
                        needs.append(n)
            else:
                je["needs"] = ["handle-success", "handle-failure"]
        perms = je.get("permissions", {})
        perms.setdefault("actions", "write")
        perms.setdefault("contents", "read")
        je["permissions"] = perms

def process_file(path):
    try:
        doc, raw = read_yaml(path)
    except Exception:
        return False
    changed = False
    if not isinstance(doc, dict) or "jobs" not in doc:
        return False

    before = yaml.safe_dump(doc, sort_keys=False)

    ensure_permissions_root(doc)
    doc["env"] = ensure_env(doc.get("env"))
    jobs = doc.get("jobs", {})
    core_job = detect_core_job(jobs)
    if core_job and isinstance(jobs.get(core_job), dict):
        ensure_runs_on_swarm(jobs[core_job])
        if job_has_git_push(jobs[core_job]):
            perms = jobs[core_job].get("permissions", {})
            perms["contents"] = "write"
            jobs[core_job]["permissions"] = perms
    ensure_handle_success(doc, core_job)
    ensure_handle_failure(doc, core_job)
    ensure_end_workflow(doc)

    after = yaml.safe_dump(doc, sort_keys=False)
    changed = before != after
    if changed:
        write_yaml(path, doc)
    return changed

def main():
    files = [f for f in os.listdir(WORKFLOWS_DIR) if f.endswith((".yml", ".yaml"))]
    modified = []
    for fname in files:
        if fname in ["inspector.yml", "kaos.yml"]:
            continue
        p = os.path.join(WORKFLOWS_DIR, fname)
        if process_file(p):
            modified.append(fname)
    print("Modified:", ", ".join(modified))

if __name__ == "__main__":
    main()
