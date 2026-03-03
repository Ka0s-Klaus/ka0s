Deployment Report: core/b2b/core-services/docs-portal
Date: Tue Mar  3 14:39:01 UTC 2026
Trigger: push by santakloud
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-579c4f97d9-nq8tv   1/1     Running       0          7s    172.16.209.3    k8-node-20   <none>           <none>
docs-portal-75b9b4f869-lsqtf   1/1     Terminating   0          13m   172.16.209.44   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    3h33m

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   3h33m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-75b9b4f869-lsqtf Terminating
--- Description for docs-portal-75b9b4f869-lsqtf ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        13m                default-scheduler  Successfully assigned docs-portal/docs-portal-75b9b4f869-lsqtf to k8-node-20
  Normal   Pulling                          13m                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           13m                kubelet            Successfully pulled image "alpine/git" in 653ms (2.439s including waiting). Image size: 37148396 bytes.
  Normal   Created                          13m                kubelet            Created container: git-clone
  Normal   Started                          13m                kubelet            Started container git-clone
  Normal   Pulling                          12m                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           12m                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 633ms (7.136s including waiting). Image size: 61775004 bytes.
  Normal   Created                          12m                kubelet            Created container: docs-portal
  Normal   Started                          12m                kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  3s (x15 over 13m)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          2s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-75b9b4f869-lsqtf (Current) ---
[pod/docs-portal-75b9b4f869-lsqtf/git-clone] Cloning into '/repo'...
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/basic-template.yaml', but the target '../templates/workflow/basic-template.yaml' is not found among documentation files.
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  Doc file 'ka0s_template/ka0s_template.md' contains a link '../../templates/workflow/README.md', but the target '../templates/workflow/README.md' is not found among documentation files.
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../.github/workflows/kaos-cluster-restart.yml', but the target '../../.github/workflows/kaos-cluster-restart.yml' is not found among documentation files.
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  Doc file 'kaos_cluster_restart/kaos_cluster_restart.md' contains a link '../../../devops/core/k8s/cluster-restart.sh', but the target '../../devops/core/k8s/cluster-restart.sh' is not found among documentation files.
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] INFO    -  Documentation built in 6.42 seconds
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] INFO    -  [14:26:22] Serving on http://0.0.0.0:8000/
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:28:53] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:28:54] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:29:50] "GET /core/imgs/kaos.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:29:50] "GET /core/imgs/workflow-kaos.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:30:36] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:32:44] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:32:44] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:32:47] "GET /core/imgs/kaos.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:32:47] "GET /core/imgs/workflow-kaos.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:32:47] "GET /core/imgs/kaos.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:32:47] "GET /core/imgs/workflow-kaos.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:02] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:02] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:03] "GET /core/imgs/kaos.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:03] "GET /core/imgs/workflow-kaos.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:03] "GET /core/imgs/kaos.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:03] "GET /core/imgs/workflow-kaos.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:05] "GET /core/imgs/kaos.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:05] "GET /core/imgs/workflow-kaos.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:21] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:21] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:22] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:25] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:39] "GET /core/imgs/kaos-core.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:39] "GET /core/imgs/ka0s-dashboard.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/ka0s-branch.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/ka0s-inspector.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/ka0s-info.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/ka0s-inspector-human.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/kaos-core.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/ka0s-dashboard.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/ka0s-branch.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/ka0s-inspector.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/ka0s-info.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:33:40] "GET /core/imgs/ka0s-inspector-human.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:34:09] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:34:10] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:34:17] "GET /core/imgs/workflow-kaos.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:34:17] "GET /core/imgs/kaos.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:34:17] "GET /core/imgs/workflow-kaos.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:34:17] "GET /core/imgs/kaos.jpeg HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:34:18] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:34:18] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
[pod/docs-portal-75b9b4f869-lsqtf/docs-portal] WARNING -  [14:34:34] "GET /imgs/ka0s-roadmap.png HTTP/1.1" code 404
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.209.3
=== Verification Successful (with possible warnings) ===
