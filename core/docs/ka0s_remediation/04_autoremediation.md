# Autoremediación (Auto-Remediation)

La **Autoremediación** es la capacidad de Ka0s para detectar problemas y ejecutar correcciones sin intervención humana directa, basándose en etiquetas de Issues.

## Flujo de Trabajo

1.  **Detección**: Un sistema de monitoreo (Prometheus/Zabbix) o un humano detecta un problema y crea una Issue en GitHub.
2.  **Etiquetado**: Se añade una etiqueta específica a la Issue, siguiendo el patrón `auto-remediate:<tipo>`.
3.  **Disparo**: GitHub Actions detecta la etiqueta y ejecuta `issue-auto-remediation.yml`.
4.  **Enrutamiento**: El workflow analiza la etiqueta y llama al workflow de remediación específico (ej. `remediation-high-load.yml`).
5.  **Ejecución**: Se aplica la corrección (SSH, kubectl, etc.).
6.  **Feedback**: El bot comenta en la Issue con el resultado.

## Etiquetas Soportadas

| Etiqueta | Acción | Workflow Destino | Parámetros por Defecto |
| :--- | :--- | :--- | :--- |
| `auto-remediate:high-load` | Diagnóstico de CPU/RAM y limpieza de procesos zombie | `remediation-high-load.yml` | Nodo: `k8-manager` |
| `auto-remediate:restart-pod` | *[Planificado]* Reinicia Pods en CrashLoopBackOff | - | - |
| `auto-remediate:clean-disk` | *[Planificado]* Limpieza de imágenes Docker antiguas | - | - |

## Configuración

El workflow principal es `.github/workflows/issue-auto-remediation.yml`.

### Lógica de Enrutamiento
```yaml
- name: Identify Remediation Target
  run: |
    LABEL_NAME="${{ github.event.label.name }}"
    REMEDIATION_TYPE=${LABEL_NAME#auto-remediate:}
    # ... lógica switch/case para disparar workflows hijos
```

> **Nota**: Para que esto funcione, el token `GITHUB_TOKEN` debe tener permisos de `actions: write` para poder disparar otros workflows.
