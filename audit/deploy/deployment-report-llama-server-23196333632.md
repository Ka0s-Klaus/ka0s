Deployment Report: core/b2b/core-services/llama-server
Date: Tue Mar 17 13:25:51 UTC 2026
Trigger: push by asantacana1970
Namespace: llama-server
---------------------------------------------------
>>> Pods Status:
NAME                            READY   STATUS    RESTARTS   AGE   IP       NODE     NOMINATED NODE   READINESS GATES
llama-server-6566dfdf7c-kz9mg   0/1     Pending   0          60s   <none>   <none>   <none>           <none>

>>> Services Status:
NAME           TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE
llama-server   ClusterIP   10.99.4.163   <none>        8080/TCP   61s

>>> Ingress Status:
No resources found in llama-server namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: llama-server ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
llama-server-6566dfdf7c-kz9mg Pending
--- Description for llama-server-6566dfdf7c-kz9mg ---
  PodScheduled   False 
Volumes:
  models:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  llama-models-pvc
    ReadOnly:   false
  kube-api-access-ln4zg:
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
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  61s   default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
--- Logs for llama-server-6566dfdf7c-kz9mg (Current) ---
--> Checking Endpoints for Service llama-server...
WARNING: Service llama-server has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
