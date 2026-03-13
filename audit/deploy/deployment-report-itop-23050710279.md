Deployment Report: core/b2b/core-services/itop
Date: Fri Mar 13 12:26:56 UTC 2026
Trigger: push by jh0ny2k2
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                   READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
itop-665b6c8d6-cwck2   0/1     Running   0          31s   172.16.209.30   k8-node-20   <none>           <none>

>>> Services Status:
NAME   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
itop   ClusterIP   10.103.185.4   <none>        80/TCP    35d

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS     AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80, 443   33d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service itop...
WARNING: Service itop has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
