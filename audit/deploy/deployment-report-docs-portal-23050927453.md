Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 13 12:33:43 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-59ddd8685f-xfdrg   0/1     Terminating   0          37s    <none>          k8-node-20   <none>           <none>
docs-portal-795d54d5fc-tlgmz   1/1     Running       0          16s    172.16.74.46    k8-manager   <none>           <none>
docs-portal-7cd5754646-7bpjw   1/1     Terminating   0          118s   172.16.209.47   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    10d

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   10d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-59ddd8685f-xfdrg Terminating
docs-portal-7cd5754646-7bpjw Terminating
--- Description for docs-portal-59ddd8685f-xfdrg ---
Volumes:
  repo-volume:
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:     
    SizeLimit:  <unset>
  kube-api-access-9x84p:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age   From               Message
  ----     ------                           ----  ----               -------
  Normal   Scheduled                        36s   default-scheduler  Successfully assigned docs-portal/docs-portal-59ddd8685f-xfdrg to k8-node-20
  Warning  FailedToRetrieveImagePullSecret  36s   kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
--- Logs for docs-portal-59ddd8685f-xfdrg (Current) ---
Error from server (BadRequest): container "git-clone" in pod "docs-portal-59ddd8685f-xfdrg" is waiting to start: PodInitializing
Failed to fetch current logs
--- Description for docs-portal-7cd5754646-7bpjw ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                 From               Message
  ----     ------                           ----                ----               -------
  Normal   Scheduled                        118s                default-scheduler  Successfully assigned docs-portal/docs-portal-7cd5754646-7bpjw to k8-node-20
  Normal   Pulling                          109s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           90s                 kubelet            Successfully pulled image "alpine/git" in 15.657s (18.602s including waiting). Image size: 37148396 bytes.
  Normal   Created                          81s                 kubelet            Created container: git-clone
  Normal   Started                          81s                 kubelet            Started container git-clone
  Normal   Pulling                          60s                 kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           59s                 kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 774ms (774ms including waiting). Image size: 61822408 bytes.
  Normal   Created                          59s                 kubelet            Created container: docs-portal
  Normal   Started                          59s                 kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  58s (x5 over 119s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          1s                  kubelet            Stopping container docs-portal
--- Logs for docs-portal-7cd5754646-7bpjw (Current) ---
[pod/docs-portal-7cd5754646-7bpjw/git-clone] Cloning into '/repo'...
[pod/docs-portal-7cd5754646-7bpjw/git-clone] Updating files:  78% (3030/3864)Updating files:  79% (3053/3864)Updating files:  80% (3092/3864)Updating files:  81% (3130/3864)Updating files:  82% (3169/3864)Updating files:  83% (3208/3864)Updating files:  84% (3246/3864)Updating files:  85% (3285/3864)Updating files:  86% (3324/3864)Updating files:  87% (3362/3864)Updating files:  88% (3401/3864)Updating files:  89% (3439/3864)Updating files:  90% (3478/3864)Updating files:  91% (3517/3864)Updating files:  92% (3555/3864)Updating files:  93% (3594/3864)Updating files:  94% (3633/3864)Updating files:  95% (3671/3864)Updating files:  96% (3710/3864)Updating files:  97% (3749/3864)Updating files:  98% (3787/3864)Updating files:  99% (3826/3864)Updating files: 100% (3864/3864)Updating files: 100% (3864/3864), done.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '03_integration.md', but the target 'ka0s_delete_ns/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/00_main.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_docker/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docker/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_docs_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docs_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_execution/00_main.md' contains a link './03_integration.md', but the target 'ka0s_execution/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_github_sync_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_github_sync_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_gpu_enablement/00_main.md' contains a link '03_integration.md', but the target 'ka0s_gpu_enablement/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_html/00_main.md' contains a link './03_integration.md', but the target 'ka0s_html/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_init/00_main.md' contains a link './03_integration.md', but the target 'ka0s_init/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_inspector/00_main.md' contains a link './03_integration.md', but the target 'ka0s_inspector/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_issue_templates/00_main.md' contains a link './03_integration.md', but the target 'ka0s_issue_templates/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_itil_sync/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itil_sync/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_json/00_main.md' contains a link './03_integration.md', but the target 'ka0s_json/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_kubectl_tunnel/00_main.md' contains a link './03_integration.md', but the target 'ka0s_kubectl_tunnel/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_lz/00_main.md' contains a link './03_integration.md', but the target 'ka0s_lz/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_md/00_main.md' contains a link './03_integration.md', but the target 'ka0s_md/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_metabase/00_main.md' contains a link './03_integration.md', but the target 'ka0s_metabase/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_mongo/00_main.md' contains a link './03_integration.md', but the target 'ka0s_mongo/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] INFO    -  Doc file 'ka0s_onboarding/00_main.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../ka0s_architecture/README.md', but the target 'ka0s_architecture/README.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_project_routing/00_main.md' contains a link '03_integration.md', but the target 'ka0s_project_routing/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_release/00_main.md' contains a link './03_integration.md', but the target 'ka0s_release/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_remediation/00_main.md' contains a link './03_integration.md', but the target 'ka0s_remediation/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] INFO    -  Doc file 'ka0s_reports/00_main.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link './03_integration.md', but the target 'ka0s_security/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_self_service_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_self_service_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_ssh_connect/00_main.md' contains a link './03_integration.md', but the target 'ka0s_ssh_connect/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_summary/00_main.md' contains a link './03_integration.md', but the target 'ka0s_summary/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link './03_integration.md', but the target 'ka0s_template/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_version/00_main.md' contains a link './03_integration.md', but the target 'ka0s_version/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'ka0s_yaml/00_main.md' contains a link './03_integration.md', but the target 'ka0s_yaml/03_integration.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '01_overview.md', but the target 'kaos_cluster_restart/01_overview.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '02_usage.md', but the target 'kaos_cluster_restart/02_usage.md' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] INFO    -  Documentation built in 30.76 seconds
[pod/docs-portal-7cd5754646-7bpjw/docs-portal] INFO    -  [12:33:20] Serving on http://0.0.0.0:8000/
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.74.46
=== Verification Successful (with possible warnings) ===
