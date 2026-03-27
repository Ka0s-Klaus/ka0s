Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 27 20:24:12 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-6fdd6b6cc7-87pw7   1/1     Running       0          17s    172.16.146.17   k8-node-30   <none>           <none>
docs-portal-75cf99cf57-ffqjc   1/1     Terminating   0          35s    172.16.146.52   k8-node-30   <none>           <none>
docs-portal-b9d699689-gbk9x    1/1     Terminating   0          138m   172.16.146.1    k8-node-30   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    24d

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   24d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-75cf99cf57-ffqjc Terminating
docs-portal-b9d699689-gbk9x Terminating
--- Description for docs-portal-75cf99cf57-ffqjc ---
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-30
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             restricted=true:NoSchedule
Events:
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        35s                default-scheduler  Successfully assigned docs-portal/docs-portal-75cf99cf57-ffqjc to k8-node-30
  Normal   Pulling                          34s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           32s                kubelet            Successfully pulled image "alpine/git" in 1.884s (1.884s including waiting). Image size: 37148396 bytes.
  Normal   Created                          32s                kubelet            Created container: git-clone
  Normal   Started                          32s                kubelet            Started container git-clone
  Normal   Pulling                          22s                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           20s                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 1.893s (1.893s including waiting). Image size: 61844112 bytes.
  Normal   Created                          20s                kubelet            Created container: docs-portal
  Normal   Started                          20s                kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  19s (x5 over 36s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          2s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-75cf99cf57-ffqjc (Current) ---
[pod/docs-portal-75cf99cf57-ffqjc/git-clone] Cloning into '/repo'...
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] 
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │  ⚠  Warning from the Material for MkDocs team[0m
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │[0m
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │[0m  MkDocs 2.0, the underlying framework of Material for MkDocs,
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │[0m  will introduce backward-incompatible changes, including:
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │[0m
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │  × [0mAll plugins will stop working – the plugin system has been removed
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │  × [0mAll theme overrides will break – the theming system has been rewritten
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │  × [0mNo migration path exists – existing projects cannot be upgraded
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │  × [0mClosed contribution model – community members can't report bugs
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │  × [0mCurrently unlicensed – unsuitable for production use
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │[0m
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │[0m  Our full analysis:
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │[0m
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [31m │[0m  [4mhttps://squidfunk.github.io/mkdocs-material/blog/2026/02/18/mkdocs-2.0/[0m
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] [0m
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] INFO    -  Building documentation...
[pod/docs-portal-75cf99cf57-ffqjc/docs-portal] INFO    -  Cleaning site directory
--- Description for docs-portal-b9d699689-gbk9x ---
  repo-volume:
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:     
    SizeLimit:  <unset>
  kube-api-access-jqmhm:
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
  Type     Reason                           Age                    From     Message
  ----     ------                           ----                   ----     -------
  Warning  FailedToRetrieveImagePullSecret  3m8s (x113 over 138m)  kubelet  Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          20s                    kubelet  Stopping container docs-portal
--- Logs for docs-portal-b9d699689-gbk9x (Current) ---
[pod/docs-portal-b9d699689-gbk9x/git-clone] Cloning into '/repo'...
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '03_integration.md', but the target 'ka0s_delete_ns/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/00_main.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_docker/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docker/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_docs_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docs_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_execution/00_main.md' contains a link './03_integration.md', but the target 'ka0s_execution/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_github_sync_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_github_sync_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_gpu_enablement/00_main.md' contains a link '03_integration.md', but the target 'ka0s_gpu_enablement/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_html/00_main.md' contains a link './03_integration.md', but the target 'ka0s_html/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_init/00_main.md' contains a link './03_integration.md', but the target 'ka0s_init/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_inspector/00_main.md' contains a link './03_integration.md', but the target 'ka0s_inspector/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_issue_templates/00_main.md' contains a link './03_integration.md', but the target 'ka0s_issue_templates/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_itil_sync/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itil_sync/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_json/00_main.md' contains a link './03_integration.md', but the target 'ka0s_json/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_kubectl_tunnel/00_main.md' contains a link './03_integration.md', but the target 'ka0s_kubectl_tunnel/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_lz/00_main.md' contains a link './03_integration.md', but the target 'ka0s_lz/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_md/00_main.md' contains a link './03_integration.md', but the target 'ka0s_md/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_metabase/00_main.md' contains a link './03_integration.md', but the target 'ka0s_metabase/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_mongo/00_main.md' contains a link './03_integration.md', but the target 'ka0s_mongo/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] INFO    -  Doc file 'ka0s_onboarding/00_main.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../ka0s_architecture/README.md', but the target 'ka0s_architecture/README.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_project_routing/00_main.md' contains a link '03_integration.md', but the target 'ka0s_project_routing/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_release/00_main.md' contains a link './03_integration.md', but the target 'ka0s_release/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_remediation/00_main.md' contains a link './03_integration.md', but the target 'ka0s_remediation/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] INFO    -  Doc file 'ka0s_reports/00_main.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link './03_integration.md', but the target 'ka0s_security/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_self_service_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_self_service_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_ssh_connect/00_main.md' contains a link './03_integration.md', but the target 'ka0s_ssh_connect/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_summary/00_main.md' contains a link './03_integration.md', but the target 'ka0s_summary/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link './03_integration.md', but the target 'ka0s_template/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_version/00_main.md' contains a link './03_integration.md', but the target 'ka0s_version/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'ka0s_yaml/00_main.md' contains a link './03_integration.md', but the target 'ka0s_yaml/03_integration.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '01_overview.md', but the target 'kaos_cluster_restart/01_overview.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '02_usage.md', but the target 'kaos_cluster_restart/02_usage.md' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-b9d699689-gbk9x/docs-portal] INFO    -  Documentation built in 55.21 seconds
[pod/docs-portal-b9d699689-gbk9x/docs-portal] INFO    -  [18:07:17] Serving on http://0.0.0.0:8000/
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.146.17
=== Verification Successful (with possible warnings) ===
