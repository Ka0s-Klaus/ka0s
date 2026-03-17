Deployment Report: core/b2b/core-services/mysql
Date: Tue Mar 17 08:12:46 UTC 2026
Trigger: push by asantacana1970
Namespace: mysql
---------------------------------------------------
>>> Pods Status:
NAME                     READY   STATUS    RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
mysql-6cb94c9b87-9lx84   2/2     Running   0          2m4s   172.16.146.39   k8-node-30   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)              AGE
mysql   ClusterIP   None         <none>        3306/TCP,10050/TCP   6d19h

>>> Ingress Status:
No resources found in mysql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mysql ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service mysql...
✅ Endpoints found: 172.16.146.39
=== Verification Successful (with possible warnings) ===
