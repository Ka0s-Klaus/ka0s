Deployment Report: core/b2b/core-services/docs-portal
Date: Thu Mar 12 07:00:15 UTC 2026
Trigger: push by ka0score
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-75bc698fb4-r4wwx   1/1     Terminating   0          75s   172.16.209.35   k8-node-20   <none>           <none>
docs-portal-7ffcfc9d5-dnbw2    1/1     Running       0          13s   172.16.209.22   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    8d

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   8d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-75bc698fb4-r4wwx Terminating
--- Description for docs-portal-75bc698fb4-r4wwx ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        75s                default-scheduler  Successfully assigned docs-portal/docs-portal-75bc698fb4-r4wwx to k8-node-20
  Normal   Pulling                          75s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           74s                kubelet            Successfully pulled image "alpine/git" in 615ms (615ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          74s                kubelet            Created container: git-clone
  Normal   Started                          74s                kubelet            Started container git-clone
  Normal   Pulling                          66s                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           66s                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 626ms (626ms including waiting). Image size: 61822408 bytes.
  Normal   Created                          66s                kubelet            Created container: docs-portal
  Normal   Started                          66s                kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  65s (x5 over 75s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          1s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-75bc698fb4-r4wwx (Current) ---
[pod/docs-portal-75bc698fb4-r4wwx/git-clone] Cloning into '/repo'...
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_summary/03_integration.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_summary/legacy_workflow.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_template/01_concept.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_template/02_usage_validation.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_template/03_integration.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_template/04_example.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_template/legacy_info.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_version/01_concept.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_version/02_usage_validation.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_version/03_integration.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_version/legacy_workflow.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_watchdog_node_health/01_concept.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_watchdog_node_health/02_usage_validation.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_watchdog_node_health/03_integration.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_yaml/01_concept.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_yaml/02_usage_validation.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_yaml/03_integration.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_yaml/legacy_workflow.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_zabbix_iac/02_automation_architecture.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_zabbix_iac/03_usage_guide.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - ka0s_zabbix_iac/04_automation_roadmap.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - kaos_cluster_restart/01_overview.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - kaos_cluster_restart/02_usage.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - openclaw/01_concept.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - openclaw/02_architecture.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - openclaw/04_cli_usage.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal]   - windows_nodes/02_script.md
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'README.md' contains a link './ka0s_release/kaos-klaus.md', but the target 'ka0s_release/kaos-klaus.md' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s/ka0s.md' contains a link '../imgs/workflow-kaos.png', but the target 'imgs/workflow-kaos.png' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] INFO    -  Doc file 'ka0s/ka0s_kaizen.md' contains an absolute link '/core/docs/ka0s/ka0s_metodologia.md', it was left as is.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_dashboard/legacy_user.md' contains a link '../imgs/Portada_Documentacion_Ka0s_Dashboard.png', but the target 'imgs/Portada_Documentacion_Ka0s_Dashboard.png' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/ka0s_docs_portal.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/ka0s_docs_portal.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_onboarding/ka0s_onboarding.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] INFO    -  Doc file 'ka0s_onboarding/ka0s_onboarding.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] INFO    -  Doc file 'ka0s_reports/lead_time_report.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_reports/lead_time_report.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_reports/lead_time_report.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_security/ka0s_security.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_security/ka0s_security.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] INFO    -  Documentation built in 7.56 seconds
[pod/docs-portal-75bc698fb4-r4wwx/docs-portal] INFO    -  [06:59:22] Serving on http://0.0.0.0:8000/
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.209.22
=== Verification Successful (with possible warnings) ===
