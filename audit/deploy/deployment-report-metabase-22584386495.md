Deployment Report: core/b2b/core-services/metabase
Date: Mon Mar  2 16:07:18 UTC 2026
Trigger: push by santakloud
Namespace: metabase
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS    RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
metabase-74d498ccc9-9fm2c   0/1     Running   0             60s     172.16.209.60   k8-node-20   <none>           <none>
metabase-7d56757658-cqmw4   0/1     Running   3 (26s ago)   5m47s   172.16.74.42    k8-manager   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
metabase   ClusterIP   10.104.238.93   <none>        80/TCP    113m

>>> Ingress Status:
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   113m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: metabase ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service metabase...
WARNING: Service metabase has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
