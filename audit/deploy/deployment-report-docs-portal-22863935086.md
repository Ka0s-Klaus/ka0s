Deployment Report: core/b2b/core-services/docs-portal
Date: Mon Mar  9 16:38:43 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-5756bd9bf8-jzkfj   1/1     Running       0          9s    172.16.209.54   k8-node-20   <none>           <none>
docs-portal-6854f8cdf6-wnv78   1/1     Terminating   0          24m   172.16.209.31   k8-node-20   <none>           <none>
docs-portal-74f876f896-j5lwd   1/1     Terminating   0          36s   172.16.209.63   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    6d5h

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   6d5h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-6854f8cdf6-wnv78 Terminating
docs-portal-74f876f896-j5lwd Terminating
--- Description for docs-portal-6854f8cdf6-wnv78 ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                 From               Message
  ----     ------                           ----                ----               -------
  Normal   Scheduled                        24m                 default-scheduler  Successfully assigned docs-portal/docs-portal-6854f8cdf6-wnv78 to k8-node-20
  Normal   Pulling                          24m                 kubelet            Pulling image "alpine/git"
  Normal   Pulled                           24m                 kubelet            Successfully pulled image "alpine/git" in 630ms (630ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          24m                 kubelet            Created container: git-clone
  Normal   Started                          24m                 kubelet            Started container git-clone
  Normal   Pulling                          24m                 kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           24m                 kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 747ms (747ms including waiting). Image size: 61776678 bytes.
  Normal   Created                          24m                 kubelet            Created container: docs-portal
  Normal   Started                          24m                 kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  96s (x23 over 24m)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          26s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-6854f8cdf6-wnv78 (Current) ---
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_self_service_portal/03_integration.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_ssh_connect/01_concept.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_ssh_connect/02_usage_validation.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_ssh_connect/03_integration.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_ssh_connect/legacy_workflow.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_summary/01_concept.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_summary/02_usage_validation.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_summary/03_integration.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_summary/legacy_workflow.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_template/01_concept.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_template/02_usage_validation.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_template/03_integration.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_template/04_example.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_template/legacy_info.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_version/01_concept.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_version/02_usage_validation.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_version/03_integration.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_version/legacy_workflow.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_watchdog_node_health/01_concept.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_watchdog_node_health/02_usage_validation.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_watchdog_node_health/03_integration.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_yaml/01_concept.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_yaml/02_usage_validation.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_yaml/03_integration.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - ka0s_yaml/legacy_workflow.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - kaos_cluster_restart/01_overview.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal]   - kaos_cluster_restart/02_usage.md
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'README.md' contains a link './ka0s_release/kaos-klaus.md', but the target 'ka0s_release/kaos-klaus.md' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s/ka0s.md' contains a link '../imgs/workflow-kaos.png', but the target 'imgs/workflow-kaos.png' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] INFO    -  Doc file 'ka0s/ka0s_kaizen.md' contains an absolute link '/core/docs/ka0s/ka0s_metodologia.md', it was left as is.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_dashboard/legacy_user.md' contains a link '../imgs/Portada_Documentacion_Ka0s_Dashboard.png', but the target 'imgs/Portada_Documentacion_Ka0s_Dashboard.png' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/ka0s_docs_portal.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/ka0s_docs_portal.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_onboarding/ka0s_onboarding.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] INFO    -  Doc file 'ka0s_onboarding/ka0s_onboarding.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] INFO    -  Doc file 'ka0s_reports/lead_time_report.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_reports/lead_time_report.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_reports/lead_time_report.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_security/ka0s_security.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_security/ka0s_security.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] INFO    -  Documentation built in 6.62 seconds
[pod/docs-portal-6854f8cdf6-wnv78/docs-portal] INFO    -  [16:14:17] Serving on http://0.0.0.0:8000/
[pod/docs-portal-6854f8cdf6-wnv78/git-clone] Cloning into '/repo'...
--- Description for docs-portal-74f876f896-j5lwd ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        36s                default-scheduler  Successfully assigned docs-portal/docs-portal-74f876f896-j5lwd to k8-node-20
  Normal   Pulling                          35s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           34s                kubelet            Successfully pulled image "alpine/git" in 645ms (645ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          34s                kubelet            Created container: git-clone
  Normal   Started                          34s                kubelet            Started container git-clone
  Normal   Pulling                          27s                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Warning  FailedToRetrieveImagePullSecret  26s (x5 over 35s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Pulled                           26s                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 646ms (646ms including waiting). Image size: 61776678 bytes.
  Normal   Created                          26s                kubelet            Created container: docs-portal
  Normal   Started                          26s                kubelet            Started container docs-portal
  Normal   Killing                          1s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-74f876f896-j5lwd (Current) ---
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_self_service_portal/03_integration.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_ssh_connect/01_concept.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_ssh_connect/02_usage_validation.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_ssh_connect/03_integration.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_ssh_connect/legacy_workflow.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_summary/01_concept.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_summary/02_usage_validation.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_summary/03_integration.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_summary/legacy_workflow.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_template/01_concept.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_template/02_usage_validation.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_template/03_integration.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_template/04_example.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_template/legacy_info.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_version/01_concept.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_version/02_usage_validation.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_version/03_integration.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_version/legacy_workflow.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_watchdog_node_health/01_concept.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_watchdog_node_health/02_usage_validation.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_watchdog_node_health/03_integration.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_yaml/01_concept.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_yaml/02_usage_validation.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_yaml/03_integration.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - ka0s_yaml/legacy_workflow.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - kaos_cluster_restart/01_overview.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal]   - kaos_cluster_restart/02_usage.md
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'README.md' contains a link './ka0s_release/kaos-klaus.md', but the target 'ka0s_release/kaos-klaus.md' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s/ka0s.md' contains a link '../imgs/workflow-kaos.png', but the target 'imgs/workflow-kaos.png' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] INFO    -  Doc file 'ka0s/ka0s_kaizen.md' contains an absolute link '/core/docs/ka0s/ka0s_metodologia.md', it was left as is.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_dashboard/legacy_user.md' contains a link '../imgs/Portada_Documentacion_Ka0s_Dashboard.png', but the target 'imgs/Portada_Documentacion_Ka0s_Dashboard.png' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/ka0s_docs_portal.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/ka0s_docs_portal.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_onboarding/ka0s_onboarding.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] INFO    -  Doc file 'ka0s_onboarding/ka0s_onboarding.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] INFO    -  Doc file 'ka0s_reports/lead_time_report.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_reports/lead_time_report.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_reports/lead_time_report.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_security/ka0s_security.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_security/ka0s_security.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-74f876f896-j5lwd/docs-portal] INFO    -  Documentation built in 6.67 seconds
[pod/docs-portal-74f876f896-j5lwd/docs-portal] INFO    -  [16:38:27] Serving on http://0.0.0.0:8000/
[pod/docs-portal-74f876f896-j5lwd/git-clone] Cloning into '/repo'...
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.209.54
=== Verification Successful (with possible warnings) ===
