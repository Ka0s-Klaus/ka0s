Deployment Report: core/b2b/core-services/docs-portal
Date: Wed Mar 11 15:18:57 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-5f586d9f4f-bgjls   1/1     Terminating   1 (40m ago)   3h21m   172.16.74.12    k8-manager   <none>           <none>
docs-portal-66b6f4987d-sdfqb   1/1     Running       0             13s     172.16.209.50   k8-node-20   <none>           <none>
docs-portal-78465697d4-ts2tm   1/1     Terminating   0             44s     172.16.209.55   k8-node-20   <none>           <none>

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
docs-portal-5f586d9f4f-bgjls Error
docs-portal-78465697d4-ts2tm Terminating
--- Description for docs-portal-5f586d9f4f-bgjls ---
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                    From     Message
  ----     ------                           ----                   ----     -------
  Warning  FailedToRetrieveImagePullSecret  46m (x129 over 3h21m)  kubelet  Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   SandboxChanged                   40m (x2 over 40m)      kubelet  Pod sandbox changed, it will be killed and re-created.
  Normal   Pulling                          39m                    kubelet  Pulling image "alpine/git"
  Normal   Pulled                           39m                    kubelet  Successfully pulled image "alpine/git" in 708ms (708ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          39m                    kubelet  Created container: git-clone
  Normal   Started                          39m                    kubelet  Started container git-clone
  Normal   Pulling                          39m                    kubelet  Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           39m                    kubelet  Successfully pulled image "squidfunk/mkdocs-material:latest" in 694ms (694ms including waiting). Image size: 61822408 bytes.
  Normal   Created                          39m                    kubelet  Created container: docs-portal
  Normal   Started                          39m                    kubelet  Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  4m38s (x32 over 40m)   kubelet  Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          31s                    kubelet  Stopping container docs-portal
--- Logs for docs-portal-5f586d9f4f-bgjls (Current) ---
[pod/docs-portal-5f586d9f4f-bgjls/docs-portal] unable to retrieve container logs for containerd://cbedbc904d094098d3e15ee39ed8c00e9145bf1665128f98c67d39a5f843b552[pod/docs-portal-5f586d9f4f-bgjls/git-clone] unable to retrieve container logs for containerd://547c82a2bbb880e06d26e998630d70757a768157125442efe64b6dfeed9943b0--- Description for docs-portal-78465697d4-ts2tm ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        44s                default-scheduler  Successfully assigned docs-portal/docs-portal-78465697d4-ts2tm to k8-node-20
  Normal   Pulling                          44s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           44s                kubelet            Successfully pulled image "alpine/git" in 679ms (680ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          44s                kubelet            Created container: git-clone
  Normal   Started                          44s                kubelet            Started container git-clone
  Normal   Pulling                          33s                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Warning  FailedToRetrieveImagePullSecret  32s (x5 over 45s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Pulled                           32s                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 626ms (626ms including waiting). Image size: 61822408 bytes.
  Normal   Created                          32s                kubelet            Created container: docs-portal
  Normal   Started                          32s                kubelet            Started container docs-portal
  Normal   Killing                          2s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-78465697d4-ts2tm (Current) ---
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_summary/01_concept.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_summary/02_usage_validation.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_summary/03_integration.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_summary/legacy_workflow.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_template/01_concept.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_template/02_usage_validation.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_template/03_integration.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_template/04_example.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_template/legacy_info.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_version/01_concept.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_version/02_usage_validation.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_version/03_integration.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_version/legacy_workflow.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_watchdog_node_health/01_concept.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_watchdog_node_health/02_usage_validation.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_watchdog_node_health/03_integration.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_yaml/01_concept.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_yaml/02_usage_validation.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_yaml/03_integration.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_yaml/legacy_workflow.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_zabbix_iac/02_automation_architecture.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_zabbix_iac/03_usage_guide.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - ka0s_zabbix_iac/04_automation_roadmap.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - kaos_cluster_restart/01_overview.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - kaos_cluster_restart/02_usage.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - openclaw/01_concept.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal]   - openclaw/02_architecture.md
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'README.md' contains a link './ka0s_release/kaos-klaus.md', but the target 'ka0s_release/kaos-klaus.md' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s/ka0s.md' contains a link '../imgs/workflow-kaos.png', but the target 'imgs/workflow-kaos.png' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] INFO    -  Doc file 'ka0s/ka0s_kaizen.md' contains an absolute link '/core/docs/ka0s/ka0s_metodologia.md', it was left as is.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_dashboard/legacy_user.md' contains a link '../imgs/Portada_Documentacion_Ka0s_Dashboard.png', but the target 'imgs/Portada_Documentacion_Ka0s_Dashboard.png' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/ka0s_delete_ns.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/ka0s_docs_portal.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/ka0s_docs_portal.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_onboarding/ka0s_onboarding.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] INFO    -  Doc file 'ka0s_onboarding/ka0s_onboarding.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] INFO    -  Doc file 'ka0s_reports/lead_time_report.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_reports/lead_time_report.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_reports/lead_time_report.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_security/ka0s_security.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_security/ka0s_security.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-78465697d4-ts2tm/docs-portal] INFO    -  Documentation built in 7.28 seconds
[pod/docs-portal-78465697d4-ts2tm/docs-portal] INFO    -  [15:18:38] Serving on http://0.0.0.0:8000/
[pod/docs-portal-78465697d4-ts2tm/git-clone] Cloning into '/repo'...
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.209.50
=== Verification Successful (with possible warnings) ===
