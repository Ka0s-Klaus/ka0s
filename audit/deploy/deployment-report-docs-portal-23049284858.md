Deployment Report: core/b2b/core-services/docs-portal
Date: Fri Mar 13 11:49:18 UTC 2026
Trigger: push by asantacana1970
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-54fb7f446-8wh69    1/1     Terminating   0          95s    172.16.74.55    k8-manager   <none>           <none>
docs-portal-7c8ff89bb5-zqzt8   1/1     Terminating   0          7m8s   172.16.209.17   k8-node-20   <none>           <none>
docs-portal-85998799ff-n7rk5   1/1     Running       0          18s    172.16.74.28    k8-manager   <none>           <none>

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
docs-portal-54fb7f446-8wh69 Terminating
docs-portal-7c8ff89bb5-zqzt8 Terminating
--- Description for docs-portal-54fb7f446-8wh69 ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        96s                default-scheduler  Successfully assigned docs-portal/docs-portal-54fb7f446-8wh69 to k8-manager
  Normal   Pulling                          95s                kubelet            Pulling image "alpine/git"
  Normal   Pulled                           94s                kubelet            Successfully pulled image "alpine/git" in 653ms (653ms including waiting). Image size: 37148396 bytes.
  Normal   Created                          94s                kubelet            Created container: git-clone
  Normal   Started                          94s                kubelet            Started container git-clone
  Normal   Pulling                          77s                kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           76s                kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 671ms (671ms including waiting). Image size: 61822408 bytes.
  Normal   Created                          76s                kubelet            Created container: docs-portal
  Normal   Started                          76s                kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  15s (x6 over 96s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          1s                 kubelet            Stopping container docs-portal
--- Logs for docs-portal-54fb7f446-8wh69 (Current) ---
[pod/docs-portal-54fb7f446-8wh69/git-clone] Cloning into '/repo'...
[pod/docs-portal-54fb7f446-8wh69/git-clone] Updating files:  42% (1625/3784)Updating files:  43% (1628/3784)Updating files:  44% (1665/3784)Updating files:  45% (1703/3784)Updating files:  46% (1741/3784)Updating files:  47% (1779/3784)Updating files:  48% (1817/3784)Updating files:  49% (1855/3784)Updating files:  50% (1892/3784)Updating files:  51% (1930/3784)Updating files:  52% (1968/3784)Updating files:  53% (2006/3784)Updating files:  54% (2044/3784)Updating files:  55% (2082/3784)Updating files:  56% (2120/3784)Updating files:  57% (2157/3784)Updating files:  58% (2195/3784)Updating files:  59% (2233/3784)Updating files:  60% (2271/3784)Updating files:  61% (2309/3784)Updating files:  62% (2347/3784)Updating files:  63% (2384/3784)Updating files:  64% (2422/3784)Updating files:  65% (2460/3784)Updating files:  66% (2498/3784)Updating files:  67% (2536/3784)Updating files:  68% (2574/3784)Updating files:  69% (2611/3784)Updating files:  70% (2649/3784)Updating files:  71% (2687/3784)Updating files:  72% (2725/3784)Updating files:  73% (2763/3784)Updating files:  74% (2801/3784)Updating files:  75% (2838/3784)Updating files:  76% (2876/3784)Updating files:  77% (2914/3784)Updating files:  78% (2952/3784)Updating files:  79% (2990/3784)Updating files:  80% (3028/3784)Updating files:  81% (3066/3784)Updating files:  82% (3103/3784)Updating files:  82% (3131/3784)Updating files:  83% (3141/3784)Updating files:  84% (3179/3784)Updating files:  85% (3217/3784)Updating files:  86% (3255/3784)Updating files:  87% (3293/3784)Updating files:  88% (3330/3784)Updating files:  89% (3368/3784)Updating files:  90% (3406/3784)Updating files:  91% (3444/3784)Updating files:  92% (3482/3784)Updating files:  93% (3520/3784)Updating files:  94% (3557/3784)Updating files:  95% (3595/3784)Updating files:  96% (3633/3784)Updating files:  97% (3671/3784)Updating files:  98% (3709/3784)Updating files:  99% (3747/3784)Updating files: 100% (3784/3784)Updating files: 100% (3784/3784), done.
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 'mkdocs_material_extensions' is deprecated and will no longer be
[pod/docs-portal-54fb7f446-8wh69/docs-portal] supported moving forward. This is the last release.
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 118, in twemoji
[pod/docs-portal-54fb7f446-8wh69/docs-portal]     return _patch_index(options)
[pod/docs-portal-54fb7f446-8wh69/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 68, in _deprecated_func
[pod/docs-portal-54fb7f446-8wh69/docs-portal]     warnings.warn(
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal] INFO    -  DeprecationWarning: 'materialx.emoji.twemoji' is deprecated.
[pod/docs-portal-54fb7f446-8wh69/docs-portal] Material emoji logic has been officially moved into mkdocs-material
[pod/docs-portal-54fb7f446-8wh69/docs-portal] version 9.4. Please use Material's 'material.extensions.emoji.twemoji'
[pod/docs-portal-54fb7f446-8wh69/docs-portal] instead of 'materialx.emoji.twemoji' in your 'mkdocs.yml' file.
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal] ```
[pod/docs-portal-54fb7f446-8wh69/docs-portal] markdown_extensions:
[pod/docs-portal-54fb7f446-8wh69/docs-portal]   - pymdownx.emoji:
[pod/docs-portal-54fb7f446-8wh69/docs-portal]       emoji_index: !!python/name:material.extensions.emoji.twemoji
[pod/docs-portal-54fb7f446-8wh69/docs-portal]       emoji_generator: !!python/name:material.extensions.emoji.to_svg
[pod/docs-portal-54fb7f446-8wh69/docs-portal] ```
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 'mkdocs_material_extensions' is deprecated and will no longer be
[pod/docs-portal-54fb7f446-8wh69/docs-portal] supported moving forward. This is the last release.
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 118, in twemoji
[pod/docs-portal-54fb7f446-8wh69/docs-portal]     return _patch_index(options)
[pod/docs-portal-54fb7f446-8wh69/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 68, in _deprecated_func
[pod/docs-portal-54fb7f446-8wh69/docs-portal]     warnings.warn(
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal] INFO    -  DeprecationWarning: 'materialx.emoji.twemoji' is deprecated.
[pod/docs-portal-54fb7f446-8wh69/docs-portal] Material emoji logic has been officially moved into mkdocs-material
[pod/docs-portal-54fb7f446-8wh69/docs-portal] version 9.4. Please use Material's 'material.extensions.emoji.twemoji'
[pod/docs-portal-54fb7f446-8wh69/docs-portal] instead of 'materialx.emoji.twemoji' in your 'mkdocs.yml' file.
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal] ```
[pod/docs-portal-54fb7f446-8wh69/docs-portal] markdown_extensions:
[pod/docs-portal-54fb7f446-8wh69/docs-portal]   - pymdownx.emoji:
[pod/docs-portal-54fb7f446-8wh69/docs-portal]       emoji_index: !!python/name:material.extensions.emoji.twemoji
[pod/docs-portal-54fb7f446-8wh69/docs-portal]       emoji_generator: !!python/name:material.extensions.emoji.to_svg
[pod/docs-portal-54fb7f446-8wh69/docs-portal] ```
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 'mkdocs_material_extensions' is deprecated and will no longer be
[pod/docs-portal-54fb7f446-8wh69/docs-portal] supported moving forward. This is the last release.
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 118, in twemoji
[pod/docs-portal-54fb7f446-8wh69/docs-portal]     return _patch_index(options)
[pod/docs-portal-54fb7f446-8wh69/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 68, in _deprecated_func
[pod/docs-portal-54fb7f446-8wh69/docs-portal]     warnings.warn(
[pod/docs-portal-54fb7f446-8wh69/docs-portal] 
[pod/docs-portal-54fb7f446-8wh69/docs-portal] INFO    -  Documentation built in 54.05 seconds
[pod/docs-portal-54fb7f446-8wh69/docs-portal] INFO    -  [11:49:05] Serving on http://0.0.0.0:8000/
--- Description for docs-portal-7c8ff89bb5-zqzt8 ---
  Type     Reason                           Age                    From               Message
  ----     ------                           ----                   ----               -------
  Normal   Scheduled                        7m10s                  default-scheduler  Successfully assigned docs-portal/docs-portal-7c8ff89bb5-zqzt8 to k8-node-20
  Normal   Pulled                           6m33s                  kubelet            Successfully pulled image "alpine/git" in 26.881s (26.881s including waiting). Image size: 37148396 bytes.
  Warning  Failed                           4m33s                  kubelet            Error: context deadline exceeded
  Normal   Pulled                           4m27s                  kubelet            Successfully pulled image "alpine/git" in 5.943s (5.943s including waiting). Image size: 37148396 bytes.
  Normal   Pulled                           4m10s                  kubelet            Successfully pulled image "alpine/git" in 3.965s (3.965s including waiting). Image size: 37148396 bytes.
  Normal   Pulled                           3m53s                  kubelet            Successfully pulled image "alpine/git" in 6.017s (6.018s including waiting). Image size: 37148396 bytes.
  Warning  Failed                           3m35s (x4 over 4m27s)  kubelet            Error: failed to reserve container name "git-clone_docs-portal-7c8ff89bb5-zqzt8_docs-portal_47c02756-74bf-42f0-ad86-5b3d9d49c47e_0": name "git-clone_docs-portal-7c8ff89bb5-zqzt8_docs-portal_47c02756-74bf-42f0-ad86-5b3d9d49c47e_0" is reserved for "9f63f96e3aa12e6a6a5297724a6657c3b6aeff993c9c1ac46bd8f04a3f054290"
  Normal   Pulled                           3m35s                  kubelet            Successfully pulled image "alpine/git" in 3.676s (3.676s including waiting). Image size: 37148396 bytes.
  Normal   Pulling                          3m22s (x6 over 7m)     kubelet            Pulling image "alpine/git"
  Normal   Pulled                           3m20s                  kubelet            Successfully pulled image "alpine/git" in 967ms (2.093s including waiting). Image size: 37148396 bytes.
  Normal   Created                          3m20s                  kubelet            Created container: git-clone
  Normal   Started                          3m20s                  kubelet            Started container git-clone
  Normal   Pulling                          2m37s                  kubelet            Pulling image "squidfunk/mkdocs-material:latest"
  Normal   Pulled                           2m35s                  kubelet            Successfully pulled image "squidfunk/mkdocs-material:latest" in 1.479s (1.837s including waiting). Image size: 61822408 bytes.
  Normal   Created                          2m34s                  kubelet            Created container: docs-portal
  Normal   Started                          2m34s                  kubelet            Started container docs-portal
  Warning  FailedToRetrieveImagePullSecret  113s (x10 over 7m10s)  kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   Killing                          77s                    kubelet            Stopping container docs-portal
--- Logs for docs-portal-7c8ff89bb5-zqzt8 (Current) ---
[pod/docs-portal-7c8ff89bb5-zqzt8/git-clone] Cloning into '/repo'...
[pod/docs-portal-7c8ff89bb5-zqzt8/git-clone] Updating files:  59% (2247/3780)Updating files:  60% (2268/3780)Updating files:  61% (2306/3780)Updating files:  62% (2344/3780)Updating files:  63% (2382/3780)Updating files:  64% (2420/3780)Updating files:  65% (2457/3780)Updating files:  66% (2495/3780)Updating files:  67% (2533/3780)Updating files:  68% (2571/3780)Updating files:  69% (2609/3780)Updating files:  70% (2646/3780)Updating files:  71% (2684/3780)Updating files:  72% (2722/3780)Updating files:  73% (2760/3780)Updating files:  74% (2798/3780)Updating files:  75% (2835/3780)Updating files:  76% (2873/3780)Updating files:  77% (2911/3780)Updating files:  78% (2949/3780)Updating files:  79% (2987/3780)Updating files:  80% (3024/3780)Updating files:  81% (3062/3780)Updating files:  82% (3100/3780)Updating files:  83% (3138/3780)Updating files:  84% (3176/3780)Updating files:  85% (3213/3780)Updating files:  86% (3251/3780)Updating files:  87% (3289/3780)Updating files:  88% (3327/3780)Updating files:  89% (3365/3780)Updating files:  90% (3402/3780)Updating files:  91% (3440/3780)Updating files:  92% (3478/3780)Updating files:  93% (3516/3780)Updating files:  94% (3554/3780)Updating files:  95% (3591/3780)Updating files:  96% (3629/3780)Updating files:  97% (3667/3780)Updating files:  98% (3705/3780)Updating files:  99% (3743/3780)Updating files: 100% (3780/3780)Updating files: 100% (3780/3780), done.
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 'mkdocs_material_extensions' is deprecated and will no longer be
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] supported moving forward. This is the last release.
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 118, in twemoji
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]     return _patch_index(options)
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 68, in _deprecated_func
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]     warnings.warn(
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] INFO    -  DeprecationWarning: 'materialx.emoji.twemoji' is deprecated.
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] Material emoji logic has been officially moved into mkdocs-material
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] version 9.4. Please use Material's 'material.extensions.emoji.twemoji'
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] instead of 'materialx.emoji.twemoji' in your 'mkdocs.yml' file.
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] ```
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] markdown_extensions:
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]   - pymdownx.emoji:
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]       emoji_index: !!python/name:material.extensions.emoji.twemoji
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]       emoji_generator: !!python/name:material.extensions.emoji.to_svg
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] ```
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 'mkdocs_material_extensions' is deprecated and will no longer be
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] supported moving forward. This is the last release.
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 118, in twemoji
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]     return _patch_index(options)
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 68, in _deprecated_func
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]     warnings.warn(
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] INFO    -  DeprecationWarning: 'materialx.emoji.twemoji' is deprecated.
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] Material emoji logic has been officially moved into mkdocs-material
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] version 9.4. Please use Material's 'material.extensions.emoji.twemoji'
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] instead of 'materialx.emoji.twemoji' in your 'mkdocs.yml' file.
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] ```
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] markdown_extensions:
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]   - pymdownx.emoji:
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]       emoji_index: !!python/name:material.extensions.emoji.twemoji
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]       emoji_generator: !!python/name:material.extensions.emoji.to_svg
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] ```
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 'mkdocs_material_extensions' is deprecated and will no longer be
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] supported moving forward. This is the last release.
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 118, in twemoji
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]     return _patch_index(options)
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]   File "/usr/local/lib/python3.11/site-packages/materialx/emoji.py", line 68, in _deprecated_func
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal]     warnings.warn(
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] 
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] INFO    -  Documentation built in 44.61 seconds
[pod/docs-portal-7c8ff89bb5-zqzt8/docs-portal] INFO    -  [11:47:41] Serving on http://0.0.0.0:8000/
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.74.28
=== Verification Successful (with possible warnings) ===
