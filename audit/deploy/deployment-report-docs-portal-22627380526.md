Deployment Report: core/b2b/core-services/docs-portal
Date: Tue Mar  3 14:26:13 UTC 2026
Trigger: push by santakloud
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-75b9b4f869-lsqtf   1/1     Running       0          16s   172.16.209.44   k8-node-20   <none>           <none>
docs-portal-7dc5dfd8b4-t6dnn   1/1     Terminating   0          16s   172.16.209.32   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    3h20m

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   3h20m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-7dc5dfd8b4-t6dnn Terminating
--- Description for docs-portal-7dc5dfd8b4-t6dnn ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age               From               Message
  ----     ------                           ----              ----               -------
  Normal   Scheduled                        16s               default-scheduler  Successfully assigned docs-portal/docs-portal-7dc5dfd8b4-t6dnn to k8-node-20
  Normal   Pulling                          15s               kubelet            Pulling image "alpine/git"
  Normal   Pulled                           13s               kubelet            Successfully pulled image "alpine/git" in 1.949s (1.949s including waiting). Image size: 37148396 bytes.
  Normal   Created                          13s               kubelet            Created container: git-clone
  Normal   Started                          13s               kubelet            Started container git-clone
  Normal   Pulling                          9s                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Warning  FailedToRetrieveImagePullSecret  2s (x5 over 16s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Pulled                           2s                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 6.508s (6.508s including waiting). Image size: 61775004 bytes.
  Normal   Created                          2s                kubelet            Created container: docs-portal
  Normal   Started                          2s                kubelet            Started container docs-portal
  Normal   Killing                          0s                kubelet            Stopping container docs-portal
--- Logs for docs-portal-7dc5dfd8b4-t6dnn (Current) ---
[pod/docs-portal-7dc5dfd8b4-t6dnn/git-clone] Cloning into '/repo'...
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.209.44
=== Verification Successful (with possible warnings) ===
