Deployment Report: core/b2b/core-services/mongoman
Date: Mon Mar  2 21:45:39 UTC 2026
Trigger: push by santakloud
Namespace: mongo
---------------------------------------------------
>>> Pods Status:
NAME                       READY   STATUS    RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
mongo-0                    1/1     Running   0          67m    172.16.209.34   k8-node-20   <none>           <none>
mongoman-fb6d7c6cb-94fnt   1/1     Running   0          2m1s   172.16.209.19   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
mongo      ClusterIP   None            <none>        27017/TCP   53d
mongoman   ClusterIP   10.107.31.207   <none>        80/TCP      2m1s

>>> Ingress Status:
NAME               CLASS   HOSTS                 ADDRESS         PORTS     AGE
mongoman-ingress   nginx   mongo-admin.ka0s.io   192.168.1.250   80, 443   2m1s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mongo ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service mongoman...
✅ Endpoints found: 172.16.209.19
=== Verification Successful (with possible warnings) ===
