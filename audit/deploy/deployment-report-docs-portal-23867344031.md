Deployment Report: core/b2b/core-services/docs-portal
Date: Wed Apr  1 19:44:57 UTC 2026
Trigger: push by ka0score
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-684db4b8d-vwrb5    1/1     Running       0          17s     172.16.146.53   k8-node-30   <none>           <none>
docs-portal-77c9c77f99-c4xk7   1/1     Terminating   0          2m55s   172.16.146.54   k8-node-30   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    29d

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   29d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-77c9c77f99-c4xk7 Terminating
--- Description for docs-portal-77c9c77f99-c4xk7 ---
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-30
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             restricted=true:NoSchedule
Events:
  Type     Reason                           Age                  From               Message
  ----     ------                           ----                 ----               -------
  Normal   Scheduled                        2m56s                default-scheduler  Successfully assigned docs-portal/docs-portal-77c9c77f99-c4xk7 to k8-node-30
  Normal   Pulling                          2m54s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           2m52s                kubelet            Successfully pulled image "alpine/git" in 1.974s (1.974s including waiting). Image size: 37148396 bytes.
  Normal   Created                          2m52s                kubelet            Created container: git-clone
  Normal   Started                          2m51s                kubelet            Started container git-clone
  Normal   Pulling                          2m43s                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           2m41s                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 1.639s (1.64s including waiting). Image size: 61844112 bytes.
  Normal   Created                          2m40s                kubelet            Created container: docs-portal
  Normal   Started                          2m40s                kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  12s (x7 over 2m55s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          2s                   kubelet            Stopping container docs-portal
--- Logs for docs-portal-77c9c77f99-c4xk7 (Current) ---
[pod/docs-portal-77c9c77f99-c4xk7/git-clone] Cloning into '/repo'...
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_kubectl_tunnel/00_main.md' contains a link './03_integration.md', but the target 'ka0s_kubectl_tunnel/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_lz/00_main.md' contains a link './03_integration.md', but the target 'ka0s_lz/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_md/00_main.md' contains a link './03_integration.md', but the target 'ka0s_md/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_metabase/00_main.md' contains a link './03_integration.md', but the target 'ka0s_metabase/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_mongo/00_main.md' contains a link './03_integration.md', but the target 'ka0s_mongo/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_onboarding/00_main.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../ka0s_architecture/README.md', but the target 'ka0s_architecture/README.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_project_routing/00_main.md' contains a link '03_integration.md', but the target 'ka0s_project_routing/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_release/00_main.md' contains a link './03_integration.md', but the target 'ka0s_release/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_remediation/00_main.md' contains a link './03_integration.md', but the target 'ka0s_remediation/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_reports/00_main.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link './03_integration.md', but the target 'ka0s_security/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_self_service_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_self_service_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_ssh_connect/00_main.md' contains a link './03_integration.md', but the target 'ka0s_ssh_connect/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_summary/00_main.md' contains a link './03_integration.md', but the target 'ka0s_summary/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link './03_integration.md', but the target 'ka0s_template/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_version/00_main.md' contains a link './03_integration.md', but the target 'ka0s_version/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'ka0s_yaml/00_main.md' contains a link './03_integration.md', but the target 'ka0s_yaml/03_integration.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '01_overview.md', but the target 'kaos_cluster_restart/01_overview.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '02_usage.md', but the target 'kaos_cluster_restart/02_usage.md' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/01_architecture.md' contains a link '#1-qué-es-rag', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/01_architecture.md' contains a link '#6-flujo-de-auto-detección-de-rol', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/01_architecture.md' contains a link '#8-integración-con-github-actions', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/01_architecture.md' contains a link '#10-cómo-ampliar-el-sistema', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/01_architecture.md' contains a link '#11-evolución-de-script-a-biblioteca-modular', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/01_architecture.md' contains a link '#12-visión-publicación-en-pypi', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/04_roles_overview.md' contains a link '#1-ingeniería-de-software', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/04_roles_overview.md' contains a link '#4-producto-y-diseño', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/05_roles_full.md' contains a link '#1-ingeniería-de-software', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/05_roles_full.md' contains a link '#5-producto-y-diseño', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/05_roles_full.md' contains a link '#7-gestión-y-agilidad', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/06_roles_relationship.md' contains a link '#1-ingeniería-de-software', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/06_roles_relationship.md' contains a link '#5-producto-y-diseño', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/06_roles_relationship.md' contains a link '#7-gestión-y-agilidad', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/07_query_flow.md' contains a link '#1-qué-es-rag', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/07_query_flow.md' contains a link '#6-flujo-de-auto-detección-de-rol', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/07_query_flow.md' contains a link '#8-integración-con-github-actions', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Doc file 'ka0s_agent_ai/07_query_flow.md' contains a link '#10-cómo-ampliar-el-sistema', but there is no such anchor on this page.
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  Documentation built in 47.62 seconds
[pod/docs-portal-77c9c77f99-c4xk7/docs-portal] INFO    -  [19:43:15] Serving on http://0.0.0.0:8000/
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.146.53
=== Verification Successful (with possible warnings) ===
