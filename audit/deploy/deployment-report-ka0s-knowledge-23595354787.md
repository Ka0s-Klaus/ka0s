Deployment Report: core/b2b/core-services/ka0s-knowledge
Date: Thu Mar 26 12:54:41 UTC 2026
Trigger: push by asantacana1970
Namespace: ka0s-knowledge
---------------------------------------------------
>>> Pods Status:
NAME                                  READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
mongo-vectorize-json-29575480-kn5gc   0/1     Completed   0          14m     172.16.209.42   k8-node-20   <none>           <none>
mongo-vectorize-json-29575490-gpbmq   0/1     Completed   0          4m39s   172.16.209.60   k8-node-20   <none>           <none>
mongo-vectorize-log-29575470-lfsms    0/1     Completed   0          24m     172.16.209.23   k8-node-20   <none>           <none>
mongo-vectorize-log-29575485-tgzfx    0/1     Completed   0          9m39s   172.16.209.3    k8-node-20   <none>           <none>

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
