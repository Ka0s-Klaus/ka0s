Deployment Report: core/b2b/core-services/itop
Date: Tue Mar 10 15:25:59 UTC 2026
Trigger: push by asantacana1970
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                    READY   STATUS    RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
itop-84f79fbd77-hc4dc   1/1     Running   0          37s   172.16.209.8   k8-node-20   <none>           <none>

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
✅ Endpoints found: 172.16.209.8
=== Verification Successful (with possible warnings) ===
