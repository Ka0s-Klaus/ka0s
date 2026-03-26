Deployment Report: core/b2b/core-services/anythingllm
Date: Thu Mar 26 10:48:11 UTC 2026
Trigger: push by asantacana1970
Namespace: anythingllm
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS            RESTARTS      AGE    IP              NODE         NOMINATED NODE   READINESS GATES
anythingllm-5b7dc9dd7f-qhs5n   1/1     Running           1 (41h ago)   3d2h   172.16.209.5    k8-node-20   <none>           <none>
anythingllm-85cfbbb9bb-6k29w   0/1     PodInitializing   0             60s    172.16.74.0     k8-manager   <none>           <none>
pull-nomic-embed-text-lrhhx    0/1     Completed         0             60s    172.16.209.61   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
anythingllm   ClusterIP   10.107.160.163   <none>        3001/TCP   4d22h

>>> Ingress Status:
NAME                  CLASS    HOSTS                 ADDRESS         PORTS   AGE
anythingllm-ingress   <none>   anythingllm.ka0s.io   192.168.1.250   80      4d22h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: anythingllm ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
anythingllm-85cfbbb9bb-6k29w PodInitializing
--- Description for anythingllm-85cfbbb9bb-6k29w ---
    ReadOnly:   false
  kube-api-access-v9zld:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-manager
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  61s   default-scheduler  Successfully assigned anythingllm/anythingllm-85cfbbb9bb-6k29w to k8-manager
  Normal  Pulling    59s   kubelet            Pulling image "busybox:1.36"
  Normal  Pulled     56s   kubelet            Successfully pulled image "busybox:1.36" in 2.571s (2.571s including waiting). Image size: 2217006 bytes.
  Normal  Created    56s   kubelet            Created container: init-storage
  Normal  Started    56s   kubelet            Started container init-storage
  Normal  Pulling    54s   kubelet            Pulling image "mintplexlabs/anythingllm:latest"
--- Logs for anythingllm-85cfbbb9bb-6k29w (Current) ---
Error from server (BadRequest): container "anythingllm" in pod "anythingllm-85cfbbb9bb-6k29w" is waiting to start: PodInitializing
Failed to fetch current logs
--> Checking Endpoints for Service anythingllm...
✅ Endpoints found: 172.16.209.5
=== Verification Successful (with possible warnings) ===
