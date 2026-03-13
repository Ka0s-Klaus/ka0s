Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 13 12:36:24 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-5d67cc6947-cbv9g   0/1     Terminating   0          90s     172.16.209.49   k8-node-20   <none>           <none>
docs-portal-76c57849bb-bxs9g   0/1     Init:0/1      0          61s     172.16.209.22   k8-node-20   <none>           <none>
docs-portal-795d54d5fc-tlgmz   1/1     Running       0          2m57s   172.16.74.46    k8-manager   <none>           <none>

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
docs-portal-5d67cc6947-cbv9g Terminating
docs-portal-76c57849bb-bxs9g Init:0/1
--- Description for docs-portal-5d67cc6947-cbv9g ---
  kube-api-access-ncpdd:
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
  Normal   Scheduled                        91s   default-scheduler  Successfully assigned docs-portal/docs-portal-5d67cc6947-cbv9g to k8-node-20
  Warning  FailedToRetrieveImagePullSecret  91s   kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Pulling                          47s   kubelet            Pulling image "alpine/git"
  Normal   Pulled                           45s   kubelet            Successfully pulled image "alpine/git" in 877ms (1.812s including waiting). Image size: 37148396 bytes.
  Normal   Created                          45s   kubelet            Created container: git-clone
  Normal   Started                          45s   kubelet            Started container git-clone
  Normal   Killing                          44s   kubelet            Stopping container git-clone
--- Logs for docs-portal-5d67cc6947-cbv9g (Current) ---
[pod/docs-portal-5d67cc6947-cbv9g/git-clone] Cloning into '/repo'...
[pod/docs-portal-5d67cc6947-cbv9g/git-clone] Updating files:  69% (2699/3868)Updating files:  70% (2708/3868)Updating files:  71% (2747/3868)Updating files:  72% (2785/3868)Updating files:  73% (2824/3868)Updating files:  74% (2863/3868)Updating files:  75% (2901/3868)Updating files:  76% (2940/3868)Updating files:  77% (2979/3868)Updating files:  78% (3018/3868)Updating files:  79% (3056/3868)Updating files:  80% (3095/3868)Updating files:  81% (3134/3868)Updating files:  82% (3172/3868)Updating files:  83% (3211/3868)Updating files:  84% (3250/3868)Updating files:  85% (3288/3868)Updating files:  86% (3327/3868)Updating files:  87% (3366/3868)Updating files:  88% (3404/3868)Updating files:  89% (3443/3868)Updating files:  90% (3482/3868)Updating files:  91% (3520/3868)Updating files:  92% (3559/3868)Updating files:  93% (3598/3868)Updating files:  94% (3636/3868)Updating files:  95% (3675/3868)Updating files:  96% (3714/3868)Updating files:  97% (3752/3868)Updating files:  98% (3791/3868)Updating files:  99% (3830/3868)Updating files: 100% (3868/3868)Updating files: 100% (3868/3868), done.
Error from server (BadRequest): container "docs-portal" in pod "docs-portal-5d67cc6947-cbv9g" is waiting to start: PodInitializing
Failed to fetch current logs
--- Description for docs-portal-76c57849bb-bxs9g ---
    SizeLimit:  <unset>
  kube-api-access-5l744:
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
  Normal   Scheduled                        62s                default-scheduler  Successfully assigned docs-portal/docs-portal-76c57849bb-bxs9g to k8-node-20
  Normal   Pulling                          48s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           47s                kubelet            Successfully pulled image "alpine/git" in 993ms (993ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          47s                kubelet            Created container: git-clone
  Normal   Started                          46s                kubelet            Started container git-clone
  Warning  FailedToRetrieveImagePullSecret  45s (x3 over 63s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
--- Logs for docs-portal-76c57849bb-bxs9g (Current) ---
[pod/docs-portal-76c57849bb-bxs9g/git-clone] Cloning into '/repo'...
[pod/docs-portal-76c57849bb-bxs9g/git-clone] Updating files:  70% (2730/3868)Updating files:  71% (2747/3868)Updating files:  72% (2785/3868)Updating files:  73% (2824/3868)Updating files:  74% (2863/3868)Updating files:  75% (2901/3868)Updating files:  76% (2940/3868)Updating files:  77% (2979/3868)Updating files:  78% (3018/3868)Updating files:  79% (3056/3868)Updating files:  80% (3095/3868)Updating files:  81% (3134/3868)Updating files:  82% (3172/3868)Updating files:  83% (3211/3868)Updating files:  84% (3250/3868)Updating files:  85% (3288/3868)Updating files:  86% (3327/3868)Updating files:  87% (3366/3868)Updating files:  88% (3404/3868)Updating files:  89% (3443/3868)Updating files:  90% (3482/3868)Updating files:  91% (3520/3868)Updating files:  92% (3559/3868)Updating files:  93% (3598/3868)Updating files:  94% (3636/3868)Updating files:  95% (3675/3868)Updating files:  96% (3714/3868)Updating files:  97% (3752/3868)Updating files:  98% (3791/3868)Updating files:  99% (3830/3868)Updating files: 100% (3868/3868)Updating files: 100% (3868/3868), done.
Error from server (BadRequest): container "docs-portal" in pod "docs-portal-76c57849bb-bxs9g" is waiting to start: PodInitializing
Failed to fetch current logs
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.74.46
=== Verification Successful (with possible warnings) ===
