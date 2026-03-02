Deployment Report: core/b2b/core-services/mongo
Date: Mon Mar  2 20:50:59 UTC 2026
Trigger: push by santakloud
Namespace: mongo
---------------------------------------------------
>>> Pods Status:
NAME      READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
mongo-0   1/1     Running   0          13m   172.16.209.34   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)     AGE
mongo   ClusterIP   None         <none>        27017/TCP   53d

>>> Ingress Status:
No resources found in mongo namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mongo ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service mongo...
✅ Endpoints found: 172.16.209.34
=== Verification Successful (with possible warnings) ===
