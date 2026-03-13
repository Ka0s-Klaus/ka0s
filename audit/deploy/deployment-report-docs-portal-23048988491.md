Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 13 11:43:10 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-6d74fdc4c5-lf4qc   0/1     Terminating   0          11m     172.16.209.45   k8-node-20   <none>           <none>
docs-portal-7c8ff89bb5-zqzt8   0/1     Init:0/1      0          61s     <none>          k8-node-20   <none>           <none>
docs-portal-f6fbf8549-f4fdq    1/1     Running       0          3m22s   172.16.74.37    k8-manager   <none>           <none>

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
docs-portal-6d74fdc4c5-lf4qc Terminating
docs-portal-7c8ff89bb5-zqzt8 Init:0/1
--- Description for docs-portal-6d74fdc4c5-lf4qc ---
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
  Type     Reason                           Age                   From               Message
  ----     ------                           ----                  ----               -------
  Normal   Scheduled                        11m                   default-scheduler  Successfully assigned docs-portal/docs-portal-6d74fdc4c5-lf4qc to k8-node-20
  Normal   Pulling                          11m                   kubelet            Pulling image "alpine/git"
  Normal   Pulled                           10m                   kubelet            Successfully pulled image "alpine/git" in 15.891s (42.51s including waiting). Image size: 37148396 bytes.
  Normal   Created                          10m                   kubelet            Created container: git-clone
  Normal   Started                          10m                   kubelet            Started container git-clone
  Warning  FailedToRetrieveImagePullSecret  8m15s (x5 over 11m)   kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          3m3s (x2 over 7m33s)  kubelet            Stopping container git-clone
  Warning  FailedKillPod                    3m3s                  kubelet            error killing pod: [failed to "KillContainer" for "git-clone" with KillContainerError: "rpc error: code = DeadlineExceeded desc = context deadline exceeded", failed to "KillPodSandbox" for "37c13c6d-364f-419a-b75a-e8aa1766bbf9" with KillPodSandboxError: "rpc error: code = DeadlineExceeded desc = context deadline exceeded"]
--- Logs for docs-portal-6d74fdc4c5-lf4qc (Current) ---
[pod/docs-portal-6d74fdc4c5-lf4qc/git-clone] Cloning into '/repo'...
[pod/docs-portal-6d74fdc4c5-lf4qc/git-clone] Updating files:  53% (1973/3721)Updating files:  54% (2010/3721)Updating files:  55% (2047/3721)Updating files:  56% (2084/3721)Updating files:  57% (2121/3721)Updating files:  58% (2159/3721)Updating files:  59% (2196/3721)Updating files:  60% (2233/3721)Updating files:  61% (2270/3721)Updating files:  62% (2308/3721)Updating files:  63% (2345/3721)Updating files:  64% (2382/3721)Updating files:  65% (2419/3721)Updating files:  66% (2456/3721)Updating files:  67% (2494/3721)Updating files:  68% (2531/3721)Updating files:  69% (2568/3721)Updating files:  70% (2605/3721)Updating files:  71% (2642/3721)Updating files:  72% (2680/3721)Updating files:  73% (2717/3721)Updating files:  74% (2754/3721)Updating files:  75% (2791/3721)Updating files:  76% (2828/3721)Updating files:  77% (2866/3721)Updating files:  78% (2903/3721)Updating files:  79% (2940/3721)Updating files:  80% (2977/3721)Updating files:  81% (3015/3721)Updating files:  82% (3052/3721)Updating files:  83% (3089/3721)Updating files:  83% (3095/3721)Updating files:  84% (3126/3721)Updating files:  85% (3163/3721)Updating files:  86% (3201/3721)Updating files:  87% (3238/3721)Updating files:  88% (3275/3721)Updating files:  89% (3312/3721)Updating files:  90% (3349/3721)Updating files:  91% (3387/3721)Updating files:  92% (3424/3721)Updating files:  93% (3461/3721)Updating files:  94% (3498/3721)Updating files:  95% (3535/3721)Updating files:  96% (3573/3721)Updating files:  97% (3610/3721)Updating files:  98% (3647/3721)Updating files:  99% (3684/3721)Updating files: 100% (3721/3721)Updating files: 100% (3721/3721), done.
Error from server (BadRequest): container "docs-portal" in pod "docs-portal-6d74fdc4c5-lf4qc" is waiting to start: PodInitializing
Failed to fetch current logs
--- Description for docs-portal-7c8ff89bb5-zqzt8 ---
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:     
    SizeLimit:  <unset>
  kube-api-access-5kvnd:
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
  Normal   Scheduled                        68s   default-scheduler  Successfully assigned docs-portal/docs-portal-7c8ff89bb5-zqzt8 to k8-node-20
  Warning  FailedToRetrieveImagePullSecret  68s   kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Pulling                          58s   kubelet            Pulling image "alpine/git"
  Normal   Pulled                           31s   kubelet            Successfully pulled image "alpine/git" in 26.881s (26.881s including waiting). Image size: 37148396 bytes.
--- Logs for docs-portal-7c8ff89bb5-zqzt8 (Current) ---
Error from server (BadRequest): container "git-clone" in pod "docs-portal-7c8ff89bb5-zqzt8" is waiting to start: PodInitializing
Failed to fetch current logs
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.74.37
=== Verification Successful (with possible warnings) ===
