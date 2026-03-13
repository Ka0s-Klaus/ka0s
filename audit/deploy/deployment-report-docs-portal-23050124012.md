Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 13 12:10:23 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-5b6b7b48cb-9ffmn   1/1     Running       0          17s    172.16.74.27    k8-manager   <none>           <none>
docs-portal-6bcb5b7578-2rksc   0/1     Terminating   0          42s    172.16.209.23   k8-node-20   <none>           <none>
docs-portal-8449bcf4c7-gbc4n   1/1     Terminating   0          82s    172.16.74.13    k8-manager   <none>           <none>
docs-portal-867885bcd4-xnntn   0/1     Terminating   0          112s   172.16.209.38   k8-node-20   <none>           <none>

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
docs-portal-6bcb5b7578-2rksc Terminating
docs-portal-8449bcf4c7-gbc4n Terminating
docs-portal-867885bcd4-xnntn Terminating
--- Description for docs-portal-6bcb5b7578-2rksc ---
  kube-api-access-4pbdd:
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
  Normal   Scheduled                        42s                default-scheduler  Successfully assigned docs-portal/docs-portal-6bcb5b7578-2rksc to k8-node-20
  Normal   Pulling                          37s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           33s                kubelet            Successfully pulled image "alpine/git" in 3.398s (3.398s including waiting). Image size: 37148396 bytes.
  Normal   Created                          33s                kubelet            Created container: git-clone
  Normal   Started                          32s                kubelet            Started container git-clone
  Warning  FailedToRetrieveImagePullSecret  30s (x3 over 43s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          18s                kubelet            Stopping container git-clone
--- Logs for docs-portal-6bcb5b7578-2rksc (Current) ---
Error from server (BadRequest): container "docs-portal" in pod "docs-portal-6bcb5b7578-2rksc" is waiting to start: PodInitializing
Failed to fetch current logs
--- Description for docs-portal-8449bcf4c7-gbc4n ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        82s                default-scheduler  Successfully assigned docs-portal/docs-portal-8449bcf4c7-gbc4n to k8-manager
  Normal   Pulling                          82s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           81s                kubelet            Successfully pulled image "alpine/git" in 648ms (648ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          81s                kubelet            Created container: git-clone
  Normal   Started                          81s                kubelet            Started container git-clone
  Normal   Pulling                          66s                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           66s                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 636ms (636ms including waiting). Image size: 61822408 bytes.
  Normal   Created                          66s                kubelet            Created container: docs-portal
  Warning  FailedToRetrieveImagePullSecret  65s (x5 over 83s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Started                          65s                kubelet            Started container docs-portal
  Normal   Killing                          2s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-8449bcf4c7-gbc4n (Current) ---
[pod/docs-portal-8449bcf4c7-gbc4n/git-clone] Cloning into '/repo'...
[pod/docs-portal-8449bcf4c7-gbc4n/git-clone] Updating files:  42% (1629/3833)Updating files:  43% (1649/3833)Updating files:  44% (1687/3833)Updating files:  45% (1725/3833)Updating files:  46% (1764/3833)Updating files:  47% (1802/3833)Updating files:  48% (1840/3833)Updating files:  49% (1879/3833)Updating files:  50% (1917/3833)Updating files:  51% (1955/3833)Updating files:  52% (1994/3833)Updating files:  53% (2032/3833)Updating files:  54% (2070/3833)Updating files:  55% (2109/3833)Updating files:  56% (2147/3833)Updating files:  57% (2185/3833)Updating files:  58% (2224/3833)Updating files:  59% (2262/3833)Updating files:  60% (2300/3833)Updating files:  61% (2339/3833)Updating files:  62% (2377/3833)Updating files:  63% (2415/3833)Updating files:  64% (2454/3833)Updating files:  65% (2492/3833)Updating files:  66% (2530/3833)Updating files:  67% (2569/3833)Updating files:  68% (2607/3833)Updating files:  69% (2645/3833)Updating files:  70% (2684/3833)Updating files:  71% (2722/3833)Updating files:  72% (2760/3833)Updating files:  73% (2799/3833)Updating files:  74% (2837/3833)Updating files:  75% (2875/3833)Updating files:  76% (2914/3833)Updating files:  77% (2952/3833)Updating files:  78% (2990/3833)Updating files:  79% (3029/3833)Updating files:  80% (3067/3833)Updating files:  81% (3105/3833)Updating files:  82% (3144/3833)Updating files:  83% (3182/3833)Updating files:  84% (3220/3833)Updating files:  85% (3259/3833)Updating files:  85% (3267/3833)Updating files:  86% (3297/3833)Updating files:  87% (3335/3833)Updating files:  88% (3374/3833)Updating files:  89% (3412/3833)Updating files:  90% (3450/3833)Updating files:  91% (3489/3833)Updating files:  92% (3527/3833)Updating files:  93% (3565/3833)Updating files:  94% (3604/3833)Updating files:  95% (3642/3833)Updating files:  96% (3680/3833)Updating files:  97% (3719/3833)Updating files:  98% (3757/3833)Updating files:  99% (3795/3833)Updating files: 100% (3833/3833)Updating files: 100% (3833/3833), done.
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 'mkdocs_material_extensions' is deprecated and will no longer be
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] supported moving forward. This is the last release.
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 118, in twemoji
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]     return _patch_index(options)
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 68, in _deprecated_func
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]     warnings.warn(
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] INFO    -  DeprecationWarning: 'materialx.emoji.twemoji' is deprecated.
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] Material emoji logic has been officially moved into mkdocs-material
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] version 9.4. Please use Material's 'material.extensions.emoji.twemoji'
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] instead of 'materialx.emoji.twemoji' in your 'mkdocs.yml' file.
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] ```
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] markdown_extensions:
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]   - pymdownx.emoji:
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]       emoji_index: !!python/name:material.extensions.emoji.twemoji
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]       emoji_generator: !!python/name:material.extensions.emoji.to_svg
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] ```
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 'mkdocs_material_extensions' is deprecated and will no longer be
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] supported moving forward. This is the last release.
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 118, in twemoji
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]     return _patch_index(options)
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 68, in _deprecated_func
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]     warnings.warn(
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] INFO    -  DeprecationWarning: 'materialx.emoji.twemoji' is deprecated.
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] Material emoji logic has been officially moved into mkdocs-material
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] version 9.4. Please use Material's 'material.extensions.emoji.twemoji'
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] instead of 'materialx.emoji.twemoji' in your 'mkdocs.yml' file.
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] ```
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] markdown_extensions:
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]   - pymdownx.emoji:
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]       emoji_index: !!python/name:material.extensions.emoji.twemoji
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]       emoji_generator: !!python/name:material.extensions.emoji.to_svg
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] ```
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 'mkdocs_material_extensions' is deprecated and will no longer be
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] supported moving forward. This is the last release.
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 118, in twemoji
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]     return _patch_index(options)
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 68, in _deprecated_func
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal]     warnings.warn(
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] 
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] INFO    -  Documentation built in 53.29 seconds
[pod/docs-portal-8449bcf4c7-gbc4n/docs-portal] INFO    -  [12:10:20] Serving on http://0.0.0.0:8000/
--- Description for docs-portal-867885bcd4-xnntn ---
  kube-api-access-64h4f:
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
  Type     Reason                           Age                  From               Message
  ----     ------                           ----                 ----               -------
  Normal   Scheduled                        112s                 default-scheduler  Successfully assigned docs-portal/docs-portal-867885bcd4-xnntn to k8-node-20
  Normal   Pulling                          112s                 kubelet            Pulling image "alpine/git"
  Normal   Pulled                           111s                 kubelet            Successfully pulled image "alpine/git" in 746ms (746ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          111s                 kubelet            Created container: git-clone
  Normal   Started                          111s                 kubelet            Started container git-clone
  Warning  FailedToRetrieveImagePullSecret  110s (x3 over 113s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          83s                  kubelet            Stopping container git-clone
--- Logs for docs-portal-867885bcd4-xnntn (Current) ---
Error from server (BadRequest): container "docs-portal" in pod "docs-portal-867885bcd4-xnntn" is waiting to start: PodInitializing
Failed to fetch current logs
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.74.27
=== Verification Successful (with possible warnings) ===
