Deployment Report: core/b2b/core-services/anythingllm
Date: Sat Mar 21 11:50:48 UTC 2026
Trigger: push by ka0score
Namespace: anythingllm
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS      RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
anythingllm-57899558c4-t2k9b   1/1     Running     0          54s   172.16.209.1    k8-node-20   <none>           <none>
pull-nomic-embed-text-ft9zn    0/1     Completed   0          54s   172.16.209.20   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
anythingllm   ClusterIP   10.107.160.163   <none>        3001/TCP   55s

>>> Ingress Status:
NAME                  CLASS    HOSTS                 ADDRESS         PORTS   AGE
anythingllm-ingress   <none>   anythingllm.ka0s.io   192.168.1.250   80      55s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: anythingllm ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service anythingllm...
✅ Endpoints found: 172.16.209.1
=== Verification Successful (with possible warnings) ===
