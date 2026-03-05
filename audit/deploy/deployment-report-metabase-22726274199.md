Deployment Report: core/b2b/core-services/metabase
Date: Thu Mar  5 15:57:53 UTC 2026
Trigger: workflow_dispatch by ka0score
Namespace: metabase
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS    RESTARTS   AGE     IP             NODE         NOMINATED NODE   READINESS GATES
metabase-5cfc5bb76b-9d26w   1/1     Running   0          2d20h   172.16.74.17   k8-manager   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
metabase   ClusterIP   10.104.238.93   <none>        80/TCP    3d1h

>>> Ingress Status:
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   3d1h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: metabase ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service metabase...
✅ Endpoints found: 172.16.74.17
=== Verification Successful (with possible warnings) ===
