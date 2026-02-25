import os
import re

WORKFLOWS_DIR = ".github/workflows"
OUTPUT_FILE = "audit/trash/workflow_improvements.md"
TEMPLATE_REF = "core/templates/workflow/basic-template.yaml"

def analyze_file(filepath):
    issues = []
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # 1. Check Permissions
    # Buscamos 'permissions:' y luego 'issues: write'
    if "permissions:" not in content:
        issues.append("⚠️ **Permissions**: Falta bloque `permissions`. Definir explícitamente (least privilege).")
    elif "issues: write" not in content and "issues: read" not in content:
        # Nota: 'issues: read' podría no ser suficiente si queremos crear issues, pero 'write' es lo ideal.
        issues.append("⚠️ **Permissions**: Falta `issues: write`. Requerido para reportar incidencias.")

    # 2. Check KAOS_MODULE
    if "KAOS_MODULE:" not in content:
        issues.append("ℹ️ **Env**: Falta variable `KAOS_MODULE`. Necesaria para estandarización de logs.")

    # 3. Check handle-failure job
    # Buscamos 'handle-failure:' como clave de job (al principio de línea con indentación)
    if not re.search(r'^\s+handle-failure:', content, re.MULTILINE):
        issues.append("🔴 **Job**: Falta `handle-failure`. Crítico para reporte automático de incidencias.")
    else:
        # Si existe, verificamos si usa la creación de issue con [INCIDENT]
        if "[INCIDENT]" not in content:
             issues.append("🟠 **Logic**: `handle-failure` existe pero no usa el formato estándar `[INCIDENT]` del template `incident.yml`.")

    # 4. Check end-workflow job
    if not re.search(r'^\s+end-workflow:', content, re.MULTILINE):
        issues.append("🟠 **Job**: Falta `end-workflow`. Necesario para auditoría y trigger de `inspector.yml`.")

    return issues

def main():
    lines = []
    lines.append("# Auditoría de Mejoras para Workflows de GitHub Actions")
    lines.append("")
    lines.append(f"**Fecha:** 2026-02-25")
    lines.append(f"**Base de comparación:** `{TEMPLATE_REF}`")
    lines.append("")
    lines.append("Este documento lista las discrepancias encontradas en los workflows actuales respecto a la plantilla base, enfocándose en la robustez ante fallos y la trazabilidad.")
    lines.append("")
    lines.append("---")
    lines.append("")

    files = sorted([f for f in os.listdir(WORKFLOWS_DIR) if f.endswith('.yml') or f.endswith('.yaml')])
    
    issues_count = 0
    
    for filename in files:
        if filename in ["inspector.yml", "kaos.yml"]: 
            continue # Skip inspector and base kaos workflow if needed, though checking kaos.yml is good.
        
        filepath = os.path.join(WORKFLOWS_DIR, filename)
        file_issues = analyze_file(filepath)
        
        if file_issues:
            issues_count += 1
            lines.append(f"## 📄 {filename}")
            for issue in file_issues:
                lines.append(f"- [ ] {issue}")
            lines.append("")
    
    if issues_count == 0:
        lines.append("✅ **Excelente**: Todos los workflows cumplen con los estándares de la plantilla.")

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w') as f:
        f.write('\n'.join(lines))
    
    print(f"Reporte generado en: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
