Deployment Report: core/b2b/core-services/postgresql
Date: Thu Mar 12 10:27:45 UTC 2026
Trigger: push by asantacana1970
Namespace: postgresql
---------------------------------------------------
>>> Pods Status:
NAME                            READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
postgres-validation-job-t66vj   0/1     Completed   0          9s      172.16.209.48   k8-node-20   <none>           <none>
postgresql-0                    1/1     Running     0          8m32s   172.16.209.1    k8-node-20   <none>           <none>

>>> Services Status:
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
postgresql   ClusterIP   10.104.163.236   <none>        5432/TCP   9d

>>> Ingress Status:
No resources found in postgresql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service postgresql...
✅ Endpoints found: 172.16.209.1
=== Verification Successful (with possible warnings) ===
