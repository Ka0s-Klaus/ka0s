Deployment Report: core/b2b/core-services/anythingllm
Date: Sat Mar 21 12:49:39 UTC 2026
Trigger: push by ka0score
Namespace: anythingllm
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
anythingllm-57899558c4-t2k9b   0/1     Terminating   16         59m   172.16.209.1    k8-node-20   <none>           <none>
anythingllm-8696684ff9-68dwj   1/1     Running       0          7s    172.16.209.61   k8-node-20   <none>           <none>
pull-nomic-embed-text-z9p2c    0/1     Completed     0          7s    172.16.209.56   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
anythingllm   ClusterIP   10.107.160.163   <none>        3001/TCP   59m

>>> Ingress Status:
NAME                  CLASS    HOSTS                 ADDRESS         PORTS   AGE
anythingllm-ingress   <none>   anythingllm.ka0s.io   192.168.1.250   80      59m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: anythingllm ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
anythingllm-57899558c4-t2k9b Error
--- Description for anythingllm-57899558c4-t2k9b ---
Error from server (NotFound): pods "anythingllm-57899558c4-t2k9b" not found
--- Logs for anythingllm-57899558c4-t2k9b (Current) ---
error: error from server (NotFound): pods "anythingllm-57899558c4-t2k9b" not found in namespace "anythingllm"
Failed to fetch current logs
--> Checking Endpoints for Service anythingllm...
✅ Endpoints found: 172.16.209.61
=== Verification Successful (with possible warnings) ===
