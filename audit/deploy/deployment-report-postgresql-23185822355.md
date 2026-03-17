Deployment Report: core/b2b/core-services/postgresql
Date: Tue Mar 17 08:47:39 UTC 2026
Trigger: push by asantacana1970
Namespace: postgresql
---------------------------------------------------
>>> Pods Status:
NAME                            READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
postgres-validation-job-bmp7r   0/1     Completed   0          10s     172.16.209.60   k8-node-20   <none>           <none>
postgresql-0                    2/2     Running     0          2m42s   172.16.209.37   k8-node-20   <none>           <none>

>>> Services Status:
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)              AGE
postgresql   ClusterIP   10.104.163.236   <none>        5432/TCP,10050/TCP   14d

>>> Ingress Status:
No resources found in postgresql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service postgresql...
✅ Endpoints found: 172.16.209.37
=== Verification Successful (with possible warnings) ===
