Deployment Report: core/b2b/core-services/metabase
Date: Mon Mar  2 19:24:59 UTC 2026
Trigger: push by santakloud
Namespace: metabase
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS    RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
metabase-5cfc5bb76b-9d26w   0/1     Running   0          61s     172.16.74.17    k8-manager   <none>           <none>
metabase-86f54686ff-wzc72   1/1     Running   0          3h10m   172.16.209.27   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
metabase   ClusterIP   10.104.238.93   <none>        80/TCP    5h11m

>>> Ingress Status:
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   5h11m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: metabase ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service metabase...
✅ Endpoints found: 172.16.209.27
=== Verification Successful (with possible warnings) ===
