Deployment Report: core/b2b/core-services/anythingllm
Date: Thu Mar 26 10:38:43 UTC 2026
Trigger: push by asantacana1970
Namespace: anythingllm
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS      RESTARTS      AGE    IP              NODE         NOMINATED NODE   READINESS GATES
anythingllm-5b7dc9dd7f-qhs5n   1/1     Running     1 (41h ago)   3d2h   172.16.209.5    k8-node-20   <none>           <none>
anythingllm-767c8b757f-kvw5t   0/1     Pending     0             66s    <none>          <none>       <none>           <none>
pull-nomic-embed-text-cbzjc    0/1     Completed   0             66s    172.16.209.37   k8-node-20   <none>           <none>

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
anythingllm-767c8b757f-kvw5t Pending
--- Description for anythingllm-767c8b757f-kvw5t ---
Volumes:
  data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  anythingllm-pvc
    ReadOnly:   false
  kube-api-access-gwkcn:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  81s   default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) had untolerated taint {restricted: true}, 2 node(s) didn't match Pod's node affinity/selector. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  77s   default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) had untolerated taint {restricted: true}, 2 node(s) didn't match Pod's node affinity/selector. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Logs for anythingllm-767c8b757f-kvw5t (Current) ---
--> Checking Endpoints for Service anythingllm...
✅ Endpoints found: 172.16.209.5
=== Verification Successful (with possible warnings) ===
