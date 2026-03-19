Deployment Report: core/b2b/core-services/llama-server
Date: Thu Mar 19 07:56:44 UTC 2026
Trigger: push by ka0score
Namespace: llama-server
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS    RESTARTS      AGE   IP            NODE         NOMINATED NODE   READINESS GATES
llama-server-8f9cd4bf9-8qkj7   1/1     Running   2 (28m ago)   30m   172.16.74.1   k8-manager   <none>           <none>

>>> Services Status:
NAME           TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE
llama-server   ClusterIP   10.99.4.163   <none>        8080/TCP   42h

>>> Ingress Status:
No resources found in llama-server namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: llama-server ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service llama-server...
✅ Endpoints found: 172.16.74.1
=== Verification Successful (with possible warnings) ===
