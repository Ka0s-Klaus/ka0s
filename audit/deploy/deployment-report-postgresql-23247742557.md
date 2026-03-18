Deployment Report: core/b2b/core-services/postgresql
Date: Wed Mar 18 13:46:28 UTC 2026
Trigger: push by ka0score
Namespace: postgresql
---------------------------------------------------
>>> Pods Status:
NAME                            READY   STATUS      RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
postgres-validation-job-kkmkm   0/1     Completed   0          9s    172.16.209.32   k8-node-20   <none>           <none>
postgresql-0                    2/2     Running     0          17m   172.16.146.60   k8-node-30   <none>           <none>

>>> Services Status:
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)              AGE
postgresql   ClusterIP   10.104.163.236   <none>        5432/TCP,10050/TCP   16d

>>> Ingress Status:
No resources found in postgresql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service postgresql...
✅ Endpoints found: 172.16.146.60
=== Verification Successful (with possible warnings) ===
