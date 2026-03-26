Deployment Report: core/b2b/core-services/anythingllm
Date: Thu Mar 26 10:56:16 UTC 2026
Trigger: push by asantacana1970
Namespace: anythingllm
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS      RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
anythingllm-6f6755fc95-6wnf7   0/1     Pending     0          60s    <none>          <none>       <none>           <none>
anythingllm-85cfbbb9bb-6k29w   1/1     Running     0          9m5s   172.16.74.0     k8-manager   <none>           <none>
pull-nomic-embed-text-xnj5w    0/1     Completed   0          60s    172.16.209.31   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
anythingllm   ClusterIP   10.107.160.163   <none>        3001/TCP   4d23h

>>> Ingress Status:
NAME                  CLASS    HOSTS                 ADDRESS         PORTS   AGE
anythingllm-ingress   <none>   anythingllm.ka0s.io   192.168.1.250   80      4d23h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: anythingllm ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
anythingllm-6f6755fc95-6wnf7 Pending
--- Description for anythingllm-6f6755fc95-6wnf7 ---
Volumes:
  data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  anythingllm-pvc
    ReadOnly:   false
  kube-api-access-s4kbk:
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
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  60s   default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) had untolerated taint {restricted: true}, 2 node(s) didn't match Pod's node affinity/selector. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  54s   default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) had untolerated taint {restricted: true}, 2 node(s) didn't match Pod's node affinity/selector. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Logs for anythingllm-6f6755fc95-6wnf7 (Current) ---
--> Checking Endpoints for Service anythingllm...
✅ Endpoints found: 172.16.74.0
=== Verification Successful (with possible warnings) ===
