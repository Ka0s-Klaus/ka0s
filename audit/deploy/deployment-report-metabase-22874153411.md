Deployment Report: core/b2b/core-services/metabase
Date: Mon Mar  9 20:50:46 UTC 2026
Trigger: push by asantacana1970
Namespace: metabase
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS    RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
metabase-7855b777d5-q879n   1/1     Running   0          104s   172.16.209.29   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
metabase   ClusterIP   10.104.238.93   <none>        80/TCP    7d6h

>>> Ingress Status:
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   7d6h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: metabase ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service metabase...
✅ Endpoints found: 172.16.209.29
=== Verification Successful (with possible warnings) ===
