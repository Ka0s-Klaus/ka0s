Deployment Report: core/b2b/core-services/ka0s-knowledge
Date: Wed Mar 18 12:58:30 UTC 2026
Trigger: push by ka0score
Namespace: ka0s-knowledge
---------------------------------------------------
>>> Pods Status:
NAME                                            READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
mongo-vectorize-29563970-nmkdx                  0/1     Completed   0          8m31s   172.16.209.62   k8-node-20   <none>           <none>
mongo-vectorize-opt-test-20260318134558-ksxlf   0/1     Completed   0          12m     172.16.209.61   k8-node-20   <none>           <none>

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
