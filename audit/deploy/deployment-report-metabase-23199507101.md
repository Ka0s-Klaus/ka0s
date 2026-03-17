Deployment Report: core/b2b/core-services/metabase
Date: Tue Mar 17 14:34:27 UTC 2026
Trigger: push by asantacana1970
Namespace: metabase
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS    RESTARTS   AGE     IP             NODE         NOMINATED NODE   READINESS GATES
metabase-5db769bcc8-jjt2v   1/1     Running   0          2m10s   172.16.209.1   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
metabase   ClusterIP   10.104.238.93   <none>        80/TCP    15d

>>> Ingress Status:
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   15d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: metabase ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service metabase...
✅ Endpoints found: 172.16.209.1
=== Verification Successful (with possible warnings) ===
