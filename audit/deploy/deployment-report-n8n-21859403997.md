Deployment Report: core/b2b/core-services/n8n
Date: Tue Feb 10 09:35:18 UTC 2026
Trigger: push by santakloud
Namespace: n8n
---------------------------------------------------
>>> Pods Status:
NAME                   READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
n8n-6f66788f78-k9kwx   1/1     Running   0          25s   172.16.209.53   k8-node-20   <none>           <none>

>>> Services Status:
NAME   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
n8n    ClusterIP   10.101.63.45   <none>        5678/TCP   5m15s

>>> Ingress Status:
NAME          CLASS   HOSTS         ADDRESS         PORTS     AGE
n8n-ingress   nginx   n8n.ka0s.io   192.168.1.250   80, 443   5m14s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: n8n ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service n8n...
✅ Endpoints found: 172.16.209.53
=== Verification Successful ===
