Deployment Report: core/b2b/core-services/planka
Date: Sun Feb  8 10:50:59 UTC 2026
Trigger: push by santakloud
Namespace: planka
---------------------------------------------------
>>> Pods Status:
NAME                       READY   STATUS             RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
planka-7858f7cf99-5b64h    0/1     ErrImagePull       0          61s     172.16.209.2    k8-node-20   <none>           <none>
planka-db-6dc6cdd8-ltklz   1/1     Running            0          8m50s   172.16.209.63   k8-node-20   <none>           <none>
planka-f767d9668-4c6lw     0/1     ImagePullBackOff   0          8m50s   172.16.209.38   k8-node-20   <none>           <none>

>>> Services Status:
NAME        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
planka      LoadBalancer   10.98.251.148   192.168.1.244   80:30735/TCP   8m51s
planka-db   ClusterIP      10.110.100.85   <none>          5432/TCP       8m50s

>>> Ingress Status:
No resources found in planka namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: planka ===
--> Checking Pods status...
ERROR: The following pods are not ready:
planka-7858f7cf99-5b64h ErrImagePull
planka-f767d9668-4c6lw ImagePullBackOff
--- Description for planka-7858f7cf99-5b64h ---
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  61s                default-scheduler  Successfully assigned planka/planka-7858f7cf99-5b64h to k8-node-20
  Normal   Pulled     61s                kubelet            Container image "postgres:14-alpine" already present on machine
  Normal   Created    61s                kubelet            Created container: wait-for-db
  Normal   Started    61s                kubelet            Started container wait-for-db
  Normal   Pulling    23s (x3 over 60s)  kubelet            Pulling image "ghcr.io/plankanban/planka:master"
  Warning  Failed     22s (x3 over 60s)  kubelet            Failed to pull image "ghcr.io/plankanban/planka:master": rpc error: code = NotFound desc = failed to pull and unpack image "ghcr.io/plankanban/planka:master": failed to resolve image: ghcr.io/plankanban/planka:master: not found
  Warning  Failed     22s (x3 over 60s)  kubelet            Error: ErrImagePull
  Normal   BackOff    8s (x3 over 59s)   kubelet            Back-off pulling image "ghcr.io/plankanban/planka:master"
  Warning  Failed     8s (x3 over 59s)   kubelet            Error: ImagePullBackOff
--- Description for planka-f767d9668-4c6lw ---
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  8m49s                   default-scheduler  Successfully assigned planka/planka-f767d9668-4c6lw to k8-node-20
  Normal   Pulled     8m49s                   kubelet            Container image "postgres:14-alpine" already present on machine
  Normal   Created    8m49s                   kubelet            Created container: wait-for-db
  Normal   Started    8m49s                   kubelet            Started container wait-for-db
  Normal   Pulling    5m49s (x5 over 8m44s)   kubelet            Pulling image "ghcr.io/plankanban/planka:master"
  Warning  Failed     5m48s (x5 over 8m43s)   kubelet            Failed to pull image "ghcr.io/plankanban/planka:master": rpc error: code = NotFound desc = failed to pull and unpack image "ghcr.io/plankanban/planka:master": failed to resolve image: ghcr.io/plankanban/planka:master: not found
  Warning  Failed     5m48s (x5 over 8m43s)   kubelet            Error: ErrImagePull
  Normal   BackOff    3m45s (x19 over 8m18s)  kubelet            Back-off pulling image "ghcr.io/plankanban/planka:master"
  Warning  Failed     3m30s (x20 over 8m18s)  kubelet            Error: ImagePullBackOff
