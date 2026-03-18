Deployment Report: core/b2b/core-services/docs-portal
Date: Wed Mar 18 23:52:29 UTC 2026
Trigger: push by ka0score
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-5998cbd6-bfcg5     1/1     Running       0          32s   172.16.146.11   k8-node-30   <none>           <none>
docs-portal-7c67444c98-xc75s   1/1     Terminating   0          26m   172.16.146.33   k8-node-30   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    15d

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   15d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.146.11
=== Verification Successful (with possible warnings) ===
