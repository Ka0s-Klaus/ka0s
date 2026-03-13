Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 13 12:21:23 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-5b6f8c77b4-n5pf9   1/1     Terminating   0          2m22s   172.16.209.28   k8-node-20   <none>           <none>
docs-portal-db6bcb979-cxkp4    1/1     Running       0          59s     172.16.209.51   k8-node-20   <none>           <none>

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
docs-portal-5b6f8c77b4-n5pf9 Terminating
--- Description for docs-portal-5b6f8c77b4-n5pf9 ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                  From               Message
  ----     ------                           ----                 ----               -------
  Normal   Scheduled                        2m23s                default-scheduler  Successfully assigned docs-portal/docs-portal-5b6f8c77b4-n5pf9 to k8-node-20
  Normal   Pulling                          2m23s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           2m22s                kubelet            Successfully pulled image "alpine/git" in 698ms (698ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          2m22s                kubelet            Created container: git-clone
  Normal   Started                          2m22s                kubelet            Started container git-clone
  Normal   Pulling                          2m1s                 kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           2m                   kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 817ms (817ms including waiting). Image size: 61822408 bytes.
  Normal   Created                          2m                   kubelet            Created container: docs-portal
  Normal   Started                          119s                 kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  52s (x6 over 2m24s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          3s                   kubelet            Stopping container docs-portal
--- Logs for docs-portal-5b6f8c77b4-n5pf9 (Current) ---
[pod/docs-portal-5b6f8c77b4-n5pf9/git-clone] Cloning into '/repo'...
[pod/docs-portal-5b6f8c77b4-n5pf9/git-clone] Updating files:  78% (3020/3847)Updating files:  79% (3040/3847)Updating files:  80% (3078/3847)Updating files:  81% (3117/3847)Updating files:  82% (3155/3847)Updating files:  83% (3194/3847)Updating files:  84% (3232/3847)Updating files:  85% (3270/3847)Updating files:  86% (3309/3847)Updating files:  87% (3347/3847)Updating files:  88% (3386/3847)Updating files:  89% (3424/3847)Updating files:  90% (3463/3847)Updating files:  91% (3501/3847)Updating files:  92% (3540/3847)Updating files:  93% (3578/3847)Updating files:  94% (3617/3847)Updating files:  95% (3655/3847)Updating files:  96% (3694/3847)Updating files:  97% (3732/3847)Updating files:  98% (3771/3847)Updating files:  99% (3809/3847)Updating files: 100% (3847/3847)Updating files: 100% (3847/3847), done.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '03_integration.md', but the target 'ka0s_delete_ns/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/00_main.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_docker/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docker/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_docs_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docs_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_execution/00_main.md' contains a link './03_integration.md', but the target 'ka0s_execution/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_github_sync_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_github_sync_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_gpu_enablement/00_main.md' contains a link '03_integration.md', but the target 'ka0s_gpu_enablement/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_html/00_main.md' contains a link './03_integration.md', but the target 'ka0s_html/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_init/00_main.md' contains a link './03_integration.md', but the target 'ka0s_init/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_inspector/00_main.md' contains a link './03_integration.md', but the target 'ka0s_inspector/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_issue_templates/00_main.md' contains a link './03_integration.md', but the target 'ka0s_issue_templates/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_itil_sync/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itil_sync/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_json/00_main.md' contains a link './03_integration.md', but the target 'ka0s_json/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_kubectl_tunnel/00_main.md' contains a link './03_integration.md', but the target 'ka0s_kubectl_tunnel/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_lz/00_main.md' contains a link './03_integration.md', but the target 'ka0s_lz/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_md/00_main.md' contains a link './03_integration.md', but the target 'ka0s_md/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_metabase/00_main.md' contains a link './03_integration.md', but the target 'ka0s_metabase/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_mongo/00_main.md' contains a link './03_integration.md', but the target 'ka0s_mongo/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] INFO    -  Doc file 'ka0s_onboarding/00_main.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../ka0s_architecture/README.md', but the target 'ka0s_architecture/README.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_project_routing/00_main.md' contains a link '03_integration.md', but the target 'ka0s_project_routing/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_release/00_main.md' contains a link './03_integration.md', but the target 'ka0s_release/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_remediation/00_main.md' contains a link './03_integration.md', but the target 'ka0s_remediation/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] INFO    -  Doc file 'ka0s_reports/00_main.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link './03_integration.md', but the target 'ka0s_security/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_self_service_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_self_service_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_ssh_connect/00_main.md' contains a link './03_integration.md', but the target 'ka0s_ssh_connect/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_summary/00_main.md' contains a link './03_integration.md', but the target 'ka0s_summary/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link './03_integration.md', but the target 'ka0s_template/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_version/00_main.md' contains a link './03_integration.md', but the target 'ka0s_version/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'ka0s_yaml/00_main.md' contains a link './03_integration.md', but the target 'ka0s_yaml/03_integration.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '01_overview.md', but the target 'kaos_cluster_restart/01_overview.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '02_usage.md', but the target 'kaos_cluster_restart/02_usage.md' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] INFO    -  Documentation built in 26.74 seconds
[pod/docs-portal-5b6f8c77b4-n5pf9/docs-portal] INFO    -  [12:19:57] Serving on http://0.0.0.0:8000/
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.209.51
=== Verification Successful (with possible warnings) ===
