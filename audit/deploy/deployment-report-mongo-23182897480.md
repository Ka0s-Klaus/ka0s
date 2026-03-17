Deployment Report: core/b2b/core-services/mongo
Date: Tue Mar 17 07:18:00 UTC 2026
Trigger: push by asantacana1970
Namespace: mongo
---------------------------------------------------
>>> Pods Status:
NAME      READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
mongo-0   2/2     Running   0          99s   172.16.209.47   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)               AGE
mongo   ClusterIP   10.102.57.180   <none>        27017/TCP,10050/TCP   14d

>>> Ingress Status:
No resources found in mongo namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mongo ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service mongo...
✅ Endpoints found: 172.16.209.47
=== Verification Successful (with possible warnings) ===
