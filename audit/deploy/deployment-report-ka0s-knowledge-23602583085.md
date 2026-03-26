Deployment Report: core/b2b/core-services/ka0s-knowledge
Date: Thu Mar 26 15:25:23 UTC 2026
Trigger: push by asantacana1970
Namespace: ka0s-knowledge
---------------------------------------------------
>>> Pods Status:
NAME                                    READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
mongo-vectorize-json-29575630-wjx29     0/1     Completed   0          15m     172.16.209.47   k8-node-20   <none>           <none>
mongo-vectorize-json-29575640-pws8h     0/1     Completed   0          5m23s   172.16.209.59   k8-node-20   <none>           <none>
mongo-vectorize-log-29575620-qr2wp      0/1     Completed   0          25m     172.16.209.34   k8-node-20   <none>           <none>
mongo-vectorize-log-29575635-sr7fs      0/1     Completed   0          10m     172.16.209.8    k8-node-20   <none>           <none>
mongo-vectorize-server-29575620-htbnr   0/1     Completed   0          25m     172.16.209.63   k8-node-20   <none>           <none>
mongo-vectorize-server-29575640-8d486   0/1     Completed   0          5m23s   172.16.209.4    k8-node-20   <none>           <none>

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
