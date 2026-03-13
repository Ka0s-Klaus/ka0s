Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 13 11:26:56 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-5cc5c94d6b-wz2hr   0/1     Terminating   0          5m35s   172.16.209.35   k8-node-20   <none>           <none>
docs-portal-7f479c546d-6qtfz   0/1     Init:0/1      0          60s     <none>          k8-node-20   <none>           <none>
docs-portal-b459878df-t4c5v    1/1     Running       0          90s     172.16.74.53    k8-manager   <none>           <none>

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
docs-portal-5cc5c94d6b-wz2hr Terminating
docs-portal-7f479c546d-6qtfz Init:0/1
--- Description for docs-portal-5cc5c94d6b-wz2hr ---
    SizeLimit:  <unset>
  kube-api-access-h9xgp:
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
  Type     Reason                           Age    From               Message
  ----     ------                           ----   ----               -------
  Normal   Scheduled                        5m36s  default-scheduler  Successfully assigned docs-portal/docs-portal-5cc5c94d6b-wz2hr to k8-node-20
  Warning  FailedToRetrieveImagePullSecret  5m36s  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Pulling                          4m56s  kubelet            Pulling image "alpine/git"
  Normal   Pulled                           4m2s   kubelet            Successfully pulled image "alpine/git" in 53.594s (53.594s including waiting). Image size: 37148396 bytes.
  Warning  Failed                           2m2s   kubelet            Error: context deadline exceeded
  Warning  FailedKillPod                    1s     kubelet            error killing pod: failed to "KillPodSandbox" for "4a605c59-219b-4972-81be-90bcc5ec4b51" with KillPodSandboxError: "rpc error: code = DeadlineExceeded desc = context deadline exceeded"
--- Logs for docs-portal-5cc5c94d6b-wz2hr (Current) ---
Error from server (BadRequest): container "git-clone" in pod "docs-portal-5cc5c94d6b-wz2hr" is waiting to start: PodInitializing
Failed to fetch current logs
--- Description for docs-portal-7f479c546d-6qtfz ---
Volumes:
  repo-volume:
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:     
    SizeLimit:  <unset>
  kube-api-access-fs6rk:
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
  Normal   Scheduled                        61s   default-scheduler  Successfully assigned docs-portal/docs-portal-7f479c546d-6qtfz to k8-node-20
  Warning  FailedToRetrieveImagePullSecret  60s   kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
--- Logs for docs-portal-7f479c546d-6qtfz (Current) ---
Error from server (BadRequest): container "git-clone" in pod "docs-portal-7f479c546d-6qtfz" is waiting to start: PodInitializing
Failed to fetch current logs
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.74.53
=== Verification Successful (with possible warnings) ===
