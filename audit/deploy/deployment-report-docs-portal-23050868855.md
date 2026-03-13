Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 13 12:30:53 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-67b778f57b-rmf2x   1/1     Terminating   0          4m    172.16.209.52   k8-node-20   <none>           <none>
docs-portal-6fc7b8d5c4-vrxng   1/1     Running       0          16s   172.16.74.39    k8-manager   <none>           <none>
docs-portal-79fd6cc795-4nfqf   0/1     Terminating   0          25s   172.16.209.59   k8-node-20   <none>           <none>
docs-portal-c8dc5f9dd-2pt2b    1/1     Terminating   0          59s   172.16.209.39   k8-node-20   <none>           <none>

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
docs-portal-67b778f57b-rmf2x Terminating
docs-portal-79fd6cc795-4nfqf Terminating
docs-portal-c8dc5f9dd-2pt2b Terminating
--- Description for docs-portal-67b778f57b-rmf2x ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age               From               Message
  ----     ------                           ----              ----               -------
  Normal   Scheduled                        4m                default-scheduler  Successfully assigned docs-portal/docs-portal-67b778f57b-rmf2x to k8-node-20
  Normal   Pulling                          3m59s             kubelet            Pulling image "alpine/git"
  Normal   Pulled                           3m58s             kubelet            Successfully pulled image "alpine/git" in 1.255s (1.255s including waiting). Image size: 37148396 bytes.
  Normal   Created                          3m58s             kubelet            Created container: git-clone
  Normal   Started                          3m57s             kubelet            Started container git-clone
  Normal   Pulling                          3m41s             kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           3m40s             kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 737ms (737ms including waiting). Image size: 61822408 bytes.
  Normal   Created                          3m40s             kubelet            Created container: docs-portal
  Normal   Started                          3m40s             kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  85s (x7 over 4m)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          28s               kubelet            Stopping container docs-portal
--- Logs for docs-portal-67b778f57b-rmf2x (Current) ---
[pod/docs-portal-67b778f57b-rmf2x/git-clone] Cloning into '/repo'...
[pod/docs-portal-67b778f57b-rmf2x/git-clone] Updating files:  78% (3031/3858)Updating files:  79% (3048/3858)Updating files:  80% (3087/3858)Updating files:  81% (3125/3858)Updating files:  82% (3164/3858)Updating files:  83% (3203/3858)Updating files:  84% (3241/3858)Updating files:  85% (3280/3858)Updating files:  86% (3318/3858)Updating files:  87% (3357/3858)Updating files:  88% (3396/3858)Updating files:  89% (3434/3858)Updating files:  90% (3473/3858)Updating files:  91% (3511/3858)Updating files:  92% (3550/3858)Updating files:  93% (3588/3858)Updating files:  94% (3627/3858)Updating files:  95% (3666/3858)Updating files:  96% (3704/3858)Updating files:  97% (3743/3858)Updating files:  98% (3781/3858)Updating files:  99% (3820/3858)Updating files: 100% (3858/3858)Updating files: 100% (3858/3858), done.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '03_integration.md', but the target 'ka0s_delete_ns/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../.github/workflows/kaos-delete-namespace.yml', but the target '../../.github/workflows/kaos-delete-namespace.yml' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_delete_ns/00_main.md' contains a link '../../../devops/core/k8s/force-delete-namespace.sh', but the target '../../devops/core/k8s/force-delete-namespace.sh' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] INFO    -  Doc file 'ka0s_delete_ns/00_main.md' contains an unrecognized relative link '../../../audit/trash/', it was left as is.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_docker/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docker/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_docs_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_docs_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../../b2b/core-services/docs-portal/', it was left as is.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] INFO    -  Doc file 'ka0s_docs_portal/00_main.md' contains an unrecognized relative link '../', it was left as is. Did you mean '../README.md'?
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_execution/00_main.md' contains a link './03_integration.md', but the target 'ka0s_execution/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_github_sync_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_github_sync_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_gpu_enablement/00_main.md' contains a link '03_integration.md', but the target 'ka0s_gpu_enablement/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_html/00_main.md' contains a link './03_integration.md', but the target 'ka0s_html/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_init/00_main.md' contains a link './03_integration.md', but the target 'ka0s_init/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_inspector/00_main.md' contains a link './03_integration.md', but the target 'ka0s_inspector/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_issue_templates/00_main.md' contains a link './03_integration.md', but the target 'ka0s_issue_templates/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_itil_sync/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itil_sync/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_itop/00_main.md' contains a link './03_integration.md', but the target 'ka0s_itop/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_json/00_main.md' contains a link './03_integration.md', but the target 'ka0s_json/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_kubectl_tunnel/00_main.md' contains a link './03_integration.md', but the target 'ka0s_kubectl_tunnel/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_lz/00_main.md' contains a link './03_integration.md', but the target 'ka0s_lz/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_md/00_main.md' contains a link './03_integration.md', but the target 'ka0s_md/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_metabase/00_main.md' contains a link './03_integration.md', but the target 'ka0s_metabase/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_mongo/00_main.md' contains a link './03_integration.md', but the target 'ka0s_mongo/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] INFO    -  Doc file 'ka0s_onboarding/00_main.md' contains an unrecognized relative link '../../../.github/ISSUE_TEMPLATE', it was left as is.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_onboarding/00_main.md' contains a link '../ka0s_architecture/README.md', but the target 'ka0s_architecture/README.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_onboarding/03_contribution_flow.md' contains a link '../../../.trae/rules/normas.md', but the target '../../.trae/rules/normas.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_project_routing/00_main.md' contains a link '03_integration.md', but the target 'ka0s_project_routing/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_release/00_main.md' contains a link './03_integration.md', but the target 'ka0s_release/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_remediation/00_main.md' contains a link './03_integration.md', but the target 'ka0s_remediation/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] INFO    -  Doc file 'ka0s_reports/00_main.md' contains an unrecognized relative link '../../audit/lead_time/', it was left as is.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../devops/core/mongo/scripts/generate-lead-time-report.py', but the target '../devops/core/mongo/scripts/generate-lead-time-report.py' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_reports/00_main.md' contains a link '../../.github/workflows/generate-lead-time-report.yml', but the target '../.github/workflows/generate-lead-time-report.yml' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link './03_integration.md', but the target 'ka0s_security/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-workloads.sh', but the target '../devops/core/k8s/security-audit-workloads.sh' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_security/00_main.md' contains a link '../../devops/core/k8s/security-audit-rbac-net.sh', but the target '../devops/core/k8s/security-audit-rbac-net.sh' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_self_service_portal/00_main.md' contains a link './03_integration.md', but the target 'ka0s_self_service_portal/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_ssh_connect/00_main.md' contains a link './03_integration.md', but the target 'ka0s_ssh_connect/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_summary/00_main.md' contains a link './03_integration.md', but the target 'ka0s_summary/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link './03_integration.md', but the target 'ka0s_template/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_template/00_main.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_version/00_main.md' contains a link './03_integration.md', but the target 'ka0s_version/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'ka0s_yaml/00_main.md' contains a link './03_integration.md', but the target 'ka0s_yaml/03_integration.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '01_overview.md', but the target 'kaos_cluster_restart/01_overview.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '02_usage.md', but the target 'kaos_cluster_restart/02_usage.md' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/00_main.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] INFO    -  Documentation built in 37.40 seconds
[pod/docs-portal-67b778f57b-rmf2x/docs-portal] INFO    -  [12:27:56] Serving on http://0.0.0.0:8000/
--- Description for docs-portal-79fd6cc795-4nfqf ---
  kube-api-access-dxvzn:
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
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        25s                default-scheduler  Successfully assigned docs-portal/docs-portal-79fd6cc795-4nfqf to k8-node-20
  Normal   Pulling                          24s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           24s                kubelet            Successfully pulled image "alpine/git" in 767ms (767ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          23s                kubelet            Created container: git-clone
  Normal   Started                          23s                kubelet            Started container git-clone
  Warning  FailedToRetrieveImagePullSecret  22s (x3 over 25s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          16s                kubelet            Stopping container git-clone
--- Logs for docs-portal-79fd6cc795-4nfqf (Current) ---
[pod/docs-portal-79fd6cc795-4nfqf/git-clone] unable to retrieve container logs for containerd://f5773766ea3d047c12fde1ad413dc7b1366c3e0ae4cce3a07e22b6aaa3d56099Error from server (BadRequest): container "docs-portal" in pod "docs-portal-79fd6cc795-4nfqf" is waiting to start: PodInitializing
Failed to fetch current logs
--- Description for docs-portal-c8dc5f9dd-2pt2b ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        59s                default-scheduler  Successfully assigned docs-portal/docs-portal-c8dc5f9dd-2pt2b to k8-node-20
  Normal   Pulling                          59s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           58s                kubelet            Successfully pulled image "alpine/git" in 769ms (769ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          58s                kubelet            Created container: git-clone
  Normal   Started                          58s                kubelet            Started container git-clone
  Normal   Pulling                          31s                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           30s                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 1.023s (1.023s including waiting). Image size: 61822408 bytes.
  Normal   Created                          30s                kubelet            Created container: docs-portal
  Normal   Started                          30s                kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  29s (x5 over 59s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          2s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-c8dc5f9dd-2pt2b (Current) ---
[pod/docs-portal-c8dc5f9dd-2pt2b/git-clone] Cloning into '/repo'...
[pod/docs-portal-c8dc5f9dd-2pt2b/git-clone] Updating files:  78% (3041/3862)Updating files:  79% (3051/3862)Updating files:  80% (3090/3862)Updating files:  81% (3129/3862)Updating files:  82% (3167/3862)Updating files:  83% (3206/3862)Updating files:  84% (3245/3862)Updating files:  85% (3283/3862)Updating files:  86% (3322/3862)Updating files:  87% (3360/3862)Updating files:  88% (3399/3862)Updating files:  89% (3438/3862)Updating files:  90% (3476/3862)Updating files:  91% (3515/3862)Updating files:  92% (3554/3862)Updating files:  93% (3592/3862)Updating files:  94% (3631/3862)Updating files:  95% (3669/3862)Updating files:  96% (3708/3862)Updating files:  97% (3747/3862)Updating files:  98% (3785/3862)Updating files:  99% (3824/3862)Updating files: 100% (3862/3862)Updating files: 100% (3862/3862), done.
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_remediation/04_autoremediation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_remediation_high_load/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_security/01_concept.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_security/01_security_checklist.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_security/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_security/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_self_service_portal/01_concept.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_self_service_portal/01_design.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_self_service_portal/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_self_service_portal/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_ssh_connect/01_concept.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_ssh_connect/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_ssh_connect/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_ssh_connect/legacy_workflow.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_summary/01_concept.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_summary/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_summary/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_summary/legacy_workflow.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_template/01_concept.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_template/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_template/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_template/04_example.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_template/legacy_info.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_version/01_concept.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_version/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_version/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_version/legacy_workflow.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_watchdog_node_health/01_concept.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_watchdog_node_health/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_watchdog_node_health/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_yaml/01_concept.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_yaml/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_yaml/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_yaml/legacy_workflow.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_zabbix_iac/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_zabbix_iac/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - ka0s_zabbix_iac/04_automation_roadmap.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - kaos_cluster_restart/01_concept.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - kaos_cluster_restart/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - openclaw/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - openclaw/03_technical.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - openclaw/04_cli_usage.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal]   - windows_nodes/02_usage_validation.md
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal] WARNING -  Doc file 'README.md' contains a link './ka0s_release/kaos-klaus.md', but the target 'ka0s_release/kaos-klaus.md' is not found among documentation files.
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal] WARNING -  Doc file 'k8s-audits/00_main.md' contains a link './03_integration.md', but the target 'k8s-audits/03_integration.md' is not found among documentation files.
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal] WARNING -  Doc file 'ka0s/00_main.md' contains a link './03_integration.md', but the target 'ka0s/03_integration.md' is not found among documentation files.
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal] WARNING -  Doc file 'ka0s/00_main.md' contains a link '../imgs/workflow-kaos.png', but the target 'imgs/workflow-kaos.png' is not found among documentation files.
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal] INFO    -  Doc file 'ka0s/ka0s_kaizen.md' contains an absolute link '/core/docs/ka0s/ka0s_metodologia.md', it was left as is.
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal] WARNING -  Doc file 'ka0s_audit_pods/00_main.md' contains a link './03_integration.md', but the target 'ka0s_audit_pods/03_integration.md' is not found among documentation files.
[pod/docs-portal-c8dc5f9dd-2pt2b/docs-portal] WARNING -  Doc file 'ka0s_ci_cd_k8s/00_main.md' contains a link './03_integration.md', but the target 'ka0s_ci_cd_k8s/03_integration.md' is not found among documentation files.
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.74.39
=== Verification Successful (with possible warnings) ===
