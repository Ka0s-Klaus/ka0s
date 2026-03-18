Deployment Report: core/b2b/core-services/docs-portal
Date: Wed Mar 18 23:13:27 UTC 2026
Trigger: push by ka0score
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-67fb6774b8-cdjb7   1/1     Terminating   0          26m   172.16.146.16   k8-node-30   <none>           <none>
docs-portal-7ffd94d4c8-4zhdn   1/1     Running       0          26s   172.16.146.31   k8-node-30   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    15d

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   15d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-564d48f4db-mtvss Init:0/1
docs-portal-67fb6774b8-cdjb7 Terminating
--- Description for docs-portal-564d48f4db-mtvss ---
  kube-api-access-f4m2x:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-30
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             restricted=true:NoSchedule
Events:
  Type     Reason                           Age              From               Message
  ----     ------                           ----             ----               -------
  Normal   Scheduled                        8s               default-scheduler  Successfully assigned docs-portal/docs-portal-564d48f4db-mtvss to k8-node-30
  Normal   Pulling                          8s               kubelet            Pulling image "alpine/git"
  Normal   Pulled                           6s               kubelet            Successfully pulled image "alpine/git" in 1.473s (1.473s including waiting). Image size: 37148396 bytes.
  Normal   Created                          6s               kubelet            Created container: git-clone
  Normal   Started                          6s               kubelet            Started container git-clone
  Warning  FailedToRetrieveImagePullSecret  4s (x3 over 9s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
--- Logs for docs-portal-564d48f4db-mtvss (Current) ---
[pod/docs-portal-564d48f4db-mtvss/git-clone] Cloning into '/repo'...
Error from server (BadRequest): container "docs-portal" in pod "docs-portal-564d48f4db-mtvss" is waiting to start: PodInitializing
Failed to fetch current logs
--- Description for docs-portal-67fb6774b8-cdjb7 ---
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-30
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             restricted=true:NoSchedule
Events:
  Type     Reason                           Age                 From               Message
  ----     ------                           ----                ----               -------
  Normal   Scheduled                        27m                 default-scheduler  Successfully assigned docs-portal/docs-portal-67fb6774b8-cdjb7 to k8-node-30
  Normal   Pulling                          27m                 kubelet            Pulling image "alpine/git"
  Normal   Pulled                           27m                 kubelet            Successfully pulled image "alpine/git" in 2.195s (2.893s including waiting). Image size: 37148396 bytes.
  Normal   Created                          27m                 kubelet            Created container: git-clone
  Normal   Started                          27m                 kubelet            Started container git-clone
  Normal   Pulling                          26m                 kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           26m                 kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 1.533s (1.533s including waiting). Image size: 61822408 bytes.
  Normal   Created                          26m                 kubelet            Created container: docs-portal
  Normal   Started                          26m                 kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  85s (x26 over 27m)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          24s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-67fb6774b8-cdjb7 (Current) ---
[pod/docs-portal-67fb6774b8-cdjb7/git-clone] Cloning into '/repo'...
[pod/docs-portal-67fb6774b8-cdjb7/git-clone] Updating files: 100% (1498/1498)Updating files: 100% (1498/1498), done.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '03_integration.md', but the target 'ka0s_delete_ns/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/00_main.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_docker/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docker/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_docs_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docs_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_execution/00_main.md' contains a link './03_integration.md', but the target 'ka0s_execution/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_github_sync_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_github_sync_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_gpu_enablement/00_main.md' contains a link '03_integration.md', but the target 'ka0s_gpu_enablement/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_html/00_main.md' contains a link './03_integration.md', but the target 'ka0s_html/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_init/00_main.md' contains a link './03_integration.md', but the target 'ka0s_init/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_inspector/00_main.md' contains a link './03_integration.md', but the target 'ka0s_inspector/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_issue_templates/00_main.md' contains a link './03_integration.md', but the target 'ka0s_issue_templates/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_itil_sync/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itil_sync/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_json/00_main.md' contains a link './03_integration.md', but the target 'ka0s_json/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_kubectl_tunnel/00_main.md' contains a link './03_integration.md', but the target 'ka0s_kubectl_tunnel/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_lz/00_main.md' contains a link './03_integration.md', but the target 'ka0s_lz/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_md/00_main.md' contains a link './03_integration.md', but the target 'ka0s_md/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_metabase/00_main.md' contains a link './03_integration.md', but the target 'ka0s_metabase/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_mongo/00_main.md' contains a link './03_integration.md', but the target 'ka0s_mongo/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] INFO    -  Doc file 'ka0s_onboarding/00_main.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../ka0s_architecture/README.md', but the target 'ka0s_architecture/README.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_project_routing/00_main.md' contains a link '03_integration.md', but the target 'ka0s_project_routing/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_release/00_main.md' contains a link './03_integration.md', but the target 'ka0s_release/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_remediation/00_main.md' contains a link './03_integration.md', but the target 'ka0s_remediation/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] INFO    -  Doc file 'ka0s_reports/00_main.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link './03_integration.md', but the target 'ka0s_security/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_self_service_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_self_service_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_ssh_connect/00_main.md' contains a link './03_integration.md', but the target 'ka0s_ssh_connect/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_summary/00_main.md' contains a link './03_integration.md', but the target 'ka0s_summary/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link './03_integration.md', but the target 'ka0s_template/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_version/00_main.md' contains a link './03_integration.md', but the target 'ka0s_version/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'ka0s_yaml/00_main.md' contains a link './03_integration.md', but the target 'ka0s_yaml/03_integration.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '01_overview.md', but the target 'kaos_cluster_restart/01_overview.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '02_usage.md', but the target 'kaos_cluster_restart/02_usage.md' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] INFO    -  Documentation built in 43.22 seconds
[pod/docs-portal-67fb6774b8-cdjb7/docs-portal] INFO    -  [22:47:57] Serving on http://0.0.0.0:8000/
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.146.26
=== Verification Successful (with possible warnings) ===
