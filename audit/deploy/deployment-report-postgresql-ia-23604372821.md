Deployment Report: core/b2b/core-services/postgresql-ia
Date: Thu Mar 26 16:02:39 UTC 2026
Trigger: push by asantacana1970
Namespace: postgresql-ia
---------------------------------------------------
>>> Pods Status:
NAME              READY   STATUS    RESTARTS       AGE    IP             NODE         NOMINATED NODE   READINESS GATES
postgresql-ia-0   2/2     Running   4 (4d6h ago)   7d5h   172.16.209.6   k8-node-20   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)              AGE
postgresql-ia   ClusterIP   10.101.83.59   <none>        5432/TCP,10050/TCP   14d

>>> Ingress Status:
No resources found in postgresql-ia namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql-ia ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service postgresql-ia...
✅ Endpoints found: 172.16.209.6
=== Verification Successful (with possible warnings) ===
