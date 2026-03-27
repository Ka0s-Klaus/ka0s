Deployment Report: core/b2b/core-services/ka0s-knowledge
Date: Fri Mar 27 13:39:10 UTC 2026
Trigger: push by asantacana1970
Namespace: ka0s-knowledge
---------------------------------------------------
>>> Pods Status:
NAME                                      READY   STATUS      RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
mongo-vectorize-json-29576960-bzsqt       0/1     Completed   0          19m    172.16.209.36   k8-node-20   <none>           <none>
mongo-vectorize-json-29576970-rq8pv       0/1     Completed   0          9m8s   172.16.209.31   k8-node-20   <none>           <none>
mongo-vectorize-k8config-29576955-hllvn   0/1     Completed   0          24m    172.16.209.20   k8-node-20   <none>           <none>
mongo-vectorize-k8config-29576970-765l6   0/1     Completed   0          9m8s   172.16.209.49   k8-node-20   <none>           <none>
mongo-vectorize-log-29576955-2xn4k        0/1     Completed   0          24m    172.16.209.22   k8-node-20   <none>           <none>
mongo-vectorize-log-29576970-gz9zc        0/1     Completed   0          9m8s   172.16.209.35   k8-node-20   <none>           <none>
mongo-vectorize-server-29576940-445jz     0/1     Completed   0          39m    172.16.209.28   k8-node-20   <none>           <none>
mongo-vectorize-server-29576960-dkd4p     0/1     Completed   0          19m    172.16.209.54   k8-node-20   <none>           <none>

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
