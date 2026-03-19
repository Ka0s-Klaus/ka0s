Deployment Report: core/b2b/core-services/ka0s-knowledge
Date: Thu Mar 19 12:03:00 UTC 2026
Trigger: push by ka0score
Namespace: ka0s-knowledge
---------------------------------------------------
>>> Pods Status:
NAME                                  READY   STATUS      RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
mongo-vectorize-29565350-rrv4q        0/1     Completed   0          13m   172.16.209.11   k8-node-20   <none>           <none>
mongo-vectorize-29565360-42lnw        0/1     Completed   0          3m    172.16.209.45   k8-node-20   <none>           <none>
mongo-vectorize-manual-130247-vnlk2   0/1     Completed   0          14s   172.16.209.16   k8-node-20   <none>           <none>

>>> Services Status:
No resources found in ka0s-knowledge namespace.

>>> Ingress Status:
No resources found in ka0s-knowledge namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ka0s-knowledge ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ka0s-knowledge...
ℹ️  Service 'ka0s-knowledge' not found in namespace 'ka0s-knowledge'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
