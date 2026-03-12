Deployment Report: core/b2b/core-services/postgresql-ia
Date: Thu Mar 12 10:31:20 UTC 2026
Trigger: push by asantacana1970
Namespace: postgresql-ia
---------------------------------------------------
>>> Pods Status:
NAME              READY   STATUS    RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-ia-0   0/1     Running   0          2m26s   172.16.209.16   k8-node-20   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
postgresql-ia   ClusterIP   10.101.83.59   <none>        5432/TCP   11m

>>> Ingress Status:
No resources found in postgresql-ia namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql-ia ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service postgresql-ia...
WARNING: Service postgresql-ia has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
