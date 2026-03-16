Deployment Report: core/b2b/core-services/itop
Date: Mon Mar 16 10:56:44 UTC 2026
Trigger: push by jh0ny2k2
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                    READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
itop-8596795665-qwt49   1/1     Running   0          37s   172.16.209.17   k8-node-20   <none>           <none>

>>> Services Status:
NAME   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
itop   ClusterIP   10.103.185.4   <none>        80/TCP    38d

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS     AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80, 443   35d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service itop...
✅ Endpoints found: 172.16.209.17
=== Verification Successful (with possible warnings) ===
