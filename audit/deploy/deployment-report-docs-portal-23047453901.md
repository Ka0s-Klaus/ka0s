Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 13 11:15:26 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
docs-portal-5766b79fcf-zwcv8   1/1     Running       0          18s   172.16.74.46   k8-manager   <none>           <none>
docs-portal-66cf5df9b7-qss7z   1/1     Terminating   0          13m   172.16.74.7    k8-manager   <none>           <none>

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
docs-portal-66cf5df9b7-qss7z Terminating
--- Description for docs-portal-66cf5df9b7-qss7z ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                 From               Message
  ----     ------                           ----                ----               -------
  Normal   Scheduled                        13m                 default-scheduler  Successfully assigned docs-portal/docs-portal-66cf5df9b7-qss7z to k8-manager
  Normal   Pulling                          13m                 kubelet            Pulling image "alpine/git"
  Normal   Pulled                           13m                 kubelet            Successfully pulled image "alpine/git" in 830ms (830ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          13m                 kubelet            Created container: git-clone
  Normal   Started                          13m                 kubelet            Started container git-clone
  Normal   Pulling                          13m                 kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           13m                 kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 652ms (652ms including waiting). Image size: 61822408 bytes.
  Normal   Created                          13m                 kubelet            Created container: docs-portal
  Normal   Started                          13m                 kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  18s (x16 over 13m)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          11s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-66cf5df9b7-qss7z (Current) ---
[pod/docs-portal-66cf5df9b7-qss7z/git-clone] Cloning into '/repo'...
[pod/docs-portal-66cf5df9b7-qss7z/git-clone] Updating files:  37% (1374/3622)Updating files:  38% (1377/3622)Updating files:  39% (1413/3622)Updating files:  40% (1449/3622)Updating files:  41% (1486/3622)Updating files:  42% (1522/3622)Updating files:  43% (1558/3622)Updating files:  44% (1594/3622)Updating files:  44% (1624/3622)Updating files:  45% (1630/3622)Updating files:  46% (1667/3622)Updating files:  47% (1703/3622)Updating files:  48% (1739/3622)Updating files:  49% (1775/3622)Updating files:  50% (1811/3622)Updating files:  51% (1848/3622)Updating files:  52% (1884/3622)Updating files:  53% (1920/3622)Updating files:  54% (1956/3622)Updating files:  55% (1993/3622)Updating files:  56% (2029/3622)Updating files:  57% (2065/3622)Updating files:  58% (2101/3622)Updating files:  59% (2137/3622)Updating files:  60% (2174/3622)Updating files:  60% (2175/3622)Updating files:  61% (2210/3622)Updating files:  62% (2246/3622)Updating files:  63% (2282/3622)Updating files:  64% (2319/3622)Updating files:  65% (2355/3622)Updating files:  66% (2391/3622)Updating files:  67% (2427/3622)Updating files:  68% (2463/3622)Updating files:  69% (2500/3622)Updating files:  70% (2536/3622)Updating files:  71% (2572/3622)Updating files:  72% (2608/3622)Updating files:  73% (2645/3622)Updating files:  74% (2681/3622)Updating files:  75% (2717/3622)Updating files:  76% (2753/3622)Updating files:  76% (2783/3622)Updating files:  77% (2789/3622)Updating files:  78% (2826/3622)Updating files:  79% (2862/3622)Updating files:  80% (2898/3622)Updating files:  81% (2934/3622)Updating files:  82% (2971/3622)Updating files:  83% (3007/3622)Updating files:  84% (3043/3622)Updating files:  85% (3079/3622)Updating files:  86% (3115/3622)Updating files:  87% (3152/3622)Updating files:  88% (3188/3622)Updating files:  89% (3224/3622)Updating files:  90% (3260/3622)Updating files:  91% (3297/3622)Updating files:  92% (3333/3622)Updating files:  93% (3369/3622)Updating files:  94% (3405/3622)Updating files:  95% (3441/3622)Updating files:  96% (3478/3622)Updating files:  97% (3514/3622)Updating files:  98% (3550/3622)Updating files:  99% (3586/3622)Updating files:  99% (3601/3622)Updating files: 100% (3622/3622)Updating files: 100% (3622/3622), done.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '03_integration.md', but the target 'ka0s_delete_ns/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/00_main.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_docker/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docker/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_docs_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docs_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_execution/00_main.md' contains a link './03_integration.md', but the target 'ka0s_execution/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_github_sync_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_github_sync_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_gpu_enablement/00_main.md' contains a link '03_integration.md', but the target 'ka0s_gpu_enablement/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_html/00_main.md' contains a link './03_integration.md', but the target 'ka0s_html/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_init/00_main.md' contains a link './03_integration.md', but the target 'ka0s_init/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_inspector/00_main.md' contains a link './03_integration.md', but the target 'ka0s_inspector/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_issue_templates/00_main.md' contains a link './03_integration.md', but the target 'ka0s_issue_templates/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_itil_sync/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itil_sync/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_json/00_main.md' contains a link './03_integration.md', but the target 'ka0s_json/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_kubectl_tunnel/00_main.md' contains a link './03_integration.md', but the target 'ka0s_kubectl_tunnel/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_lz/00_main.md' contains a link './03_integration.md', but the target 'ka0s_lz/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_md/00_main.md' contains a link './03_integration.md', but the target 'ka0s_md/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_metabase/00_main.md' contains a link './03_integration.md', but the target 'ka0s_metabase/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_mongo/00_main.md' contains a link './03_integration.md', but the target 'ka0s_mongo/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] INFO    -  Doc file 'ka0s_onboarding/00_main.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../ka0s_architecture/README.md', but the target 'ka0s_architecture/README.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_project_routing/00_main.md' contains a link '03_integration.md', but the target 'ka0s_project_routing/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_release/00_main.md' contains a link './03_integration.md', but the target 'ka0s_release/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_remediation/00_main.md' contains a link './03_integration.md', but the target 'ka0s_remediation/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] INFO    -  Doc file 'ka0s_reports/00_main.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link './03_integration.md', but the target 'ka0s_security/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_self_service_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_self_service_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_ssh_connect/00_main.md' contains a link './03_integration.md', but the target 'ka0s_ssh_connect/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_summary/00_main.md' contains a link './03_integration.md', but the target 'ka0s_summary/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link './03_integration.md', but the target 'ka0s_template/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_version/00_main.md' contains a link './03_integration.md', but the target 'ka0s_version/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'ka0s_yaml/00_main.md' contains a link './03_integration.md', but the target 'ka0s_yaml/03_integration.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '01_overview.md', but the target 'kaos_cluster_restart/01_overview.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '02_usage.md', but the target 'kaos_cluster_restart/02_usage.md' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] INFO    -  Documentation built in 20.19 seconds
[pod/docs-portal-66cf5df9b7-qss7z/docs-portal] INFO    -  [11:03:01] Serving on http://0.0.0.0:8000/
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.74.46
=== Verification Successful (with possible warnings) ===
