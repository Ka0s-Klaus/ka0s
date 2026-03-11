Deployment Report: core/b2b/core-services/itop
Date: Wed Mar 11 07:25:18 UTC 2026
Trigger: push by asantacana1970
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                    READY   STATUS    RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
itop-8499cdf84f-6cfg2   1/1     Running   0          8m45s   172.16.209.59   k8-node-20   <none>           <none>

>>> Services Status:
NAME   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
itop   ClusterIP   10.103.185.4   <none>        80/TCP    32d

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS     AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80, 443   30d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service itop...
✅ Endpoints found: 172.16.209.59
=== Verification Successful (with possible warnings) ===
