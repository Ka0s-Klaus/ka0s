Deployment Report: core/b2b/core-services/anythingllm
Date: Mon Mar 23 08:51:38 UTC 2026
Trigger: push by asantacana1970
Namespace: anythingllm
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS              RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
anythingllm-5b7dc9dd7f-qhs5n   1/1     Running             0          14m   172.16.209.5   k8-node-20   <none>           <none>
pull-nomic-embed-text-ds6gg    0/1     ContainerCreating   0          0s    <none>         k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
anythingllm   ClusterIP   10.107.160.163   <none>        3001/TCP   45h

>>> Ingress Status:
NAME                  CLASS    HOSTS                 ADDRESS         PORTS   AGE
anythingllm-ingress   <none>   anythingllm.ka0s.io   192.168.1.250   80      45h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: anythingllm ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
pull-nomic-embed-text-ds6gg ContainerCreating
--- Description for pull-nomic-embed-text-ds6gg ---
  PodReadyToStartContainers   False 
  Initialized                 True 
  Ready                       False 
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-29kkg:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  0s    default-scheduler  Successfully assigned anythingllm/pull-nomic-embed-text-ds6gg to k8-node-20
--- Logs for pull-nomic-embed-text-ds6gg (Current) ---
Error from server (BadRequest): container "pull-model" in pod "pull-nomic-embed-text-ds6gg" is waiting to start: ContainerCreating
Failed to fetch current logs
--> Checking Endpoints for Service anythingllm...
✅ Endpoints found: 172.16.209.5
=== Verification Successful (with possible warnings) ===
