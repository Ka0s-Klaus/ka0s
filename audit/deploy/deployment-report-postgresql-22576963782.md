Deployment Report: core/b2b/core-services/postgresql
Date: Mon Mar  2 12:58:28 UTC 2026
Trigger: workflow_dispatch by santakloud
Namespace: postgresql
---------------------------------------------------
>>> Pods Status:
NAME           READY   STATUS    RESTARTS        AGE     IP            NODE         NOMINATED NODE   READINESS GATES
postgresql-0   1/1     Running   1 (8m20s ago)   9m32s   172.16.74.3   k8-manager   <none>           <none>

>>> Services Status:
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
postgresql   ClusterIP   10.104.163.236   <none>        5432/TCP   9m32s

>>> Ingress Status:
No resources found in postgresql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service postgresql...
✅ Endpoints found: 172.16.74.3
=== Verification Successful (with possible warnings) ===
