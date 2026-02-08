Deployment Report: core/b2b/core-services/planka
Date: Sun Feb  8 10:43:09 UTC 2026
Trigger: push by santakloud
Namespace: planka
---------------------------------------------------
>>> Pods Status:
NAME                       READY   STATUS             RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
planka-db-6dc6cdd8-ltklz   1/1     Running            0          60s   172.16.209.63   k8-node-20   <none>           <none>
planka-f767d9668-4c6lw     0/1     ImagePullBackOff   0          60s   172.16.209.38   k8-node-20   <none>           <none>

>>> Services Status:
NAME        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
planka      LoadBalancer   10.98.251.148   192.168.1.244   80:30735/TCP   61s
planka-db   ClusterIP      10.110.100.85   <none>          5432/TCP       60s

>>> Ingress Status:
No resources found in planka namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: planka ===
--> Checking Pods status...
ERROR: The following pods are not ready:
planka-f767d9668-4c6lw ImagePullBackOff
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
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  59s                default-scheduler  Successfully assigned planka/planka-f767d9668-4c6lw to k8-node-20
  Normal   Pulled     59s                kubelet            Container image "postgres:14-alpine" already present on machine
  Normal   Created    59s                kubelet            Created container: wait-for-db
  Normal   Started    59s                kubelet            Started container wait-for-db
  Normal   BackOff    28s                kubelet            Back-off pulling image "ghcr.io/plankanban/planka:master"
  Warning  Failed     28s                kubelet            Error: ImagePullBackOff
  Normal   Pulling    13s (x3 over 54s)  kubelet            Pulling image "ghcr.io/plankanban/planka:master"
  Warning  Failed     12s (x3 over 53s)  kubelet            Failed to pull image "ghcr.io/plankanban/planka:master": rpc error: code = NotFound desc = failed to pull and unpack image "ghcr.io/plankanban/planka:master": failed to resolve image: ghcr.io/plankanban/planka:master: not found
  Warning  Failed     12s (x3 over 53s)  kubelet            Error: ErrImagePull
