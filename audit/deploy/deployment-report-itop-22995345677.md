Deployment Report: core/b2b/core-services/itop
Date: Thu Mar 12 09:33:48 UTC 2026
Trigger: push by jh0ny2k2
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                    READY   STATUS    RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
itop-646bb646c9-gff79   1/1     Running   0          37s   172.16.209.7   k8-node-20   <none>           <none>

>>> Services Status:
NAME   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
itop   ClusterIP   10.103.185.4   <none>        80/TCP    34d

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS     AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80, 443   31d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service itop...
✅ Endpoints found: 172.16.209.7
=== Verification Successful (with possible warnings) ===
