# Módulo Ka0s Audit Failed Pods

Automatización para detectar y registrar Pods en estado anómalo en el clúster Kubernetes, con trazabilidad y opcional integración con iTop.

## Índice de Documentación

1.  [Concepto y Arquitectura](./01_concept.md)
2.  [Guía de Uso y Validación](./02_usage_validation.md)
3.  [Integración en el Ecosistema](./03_integration.md)

## Componentes Clave

| Componente | Tipo | Ubicación |
| :--- | :--- | :--- |
| Workflow | GitHub Actions | [.github/workflows/audit-pods.yml](file:///Users/santale/ka0s-klaus/ka0s/.github/workflows/audit-pods.yml) |
| Acción SSH | Local Action | .github/actions/ssh-exec |
| Script Auditoría | Bash | [devops/core/k8s/audit-failed-pods.sh](file:///Users/santale/ka0s-klaus/ka0s/devops/core/k8s/audit-failed-pods.sh) |
| Post-Proceso iTop | Python | [devops/core/k8s/process-failed-pods.py](file:///Users/santale/ka0s-klaus/ka0s/devops/core/k8s/process-failed-pods.py) |
| Evidencias | JSON | audit/kube/failed_pods.json |

