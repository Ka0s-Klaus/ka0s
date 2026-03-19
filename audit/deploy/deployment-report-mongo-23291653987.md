Deployment Report: core/b2b/core-services/mongo
Date: Thu Mar 19 11:11:00 UTC 2026
Trigger: push by ka0score
Namespace: mongo
---------------------------------------------------
>>> Pods Status:
NAME      READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
mongo-0   1/1     Running   0          10m   172.16.209.38   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)               AGE
mongo   ClusterIP   10.102.57.180   <none>        27017/TCP,10050/TCP   16d

>>> Ingress Status:
No resources found in mongo namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mongo ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service mongo...
✅ Endpoints found: 172.16.209.38
=== Verification Successful (with possible warnings) ===
