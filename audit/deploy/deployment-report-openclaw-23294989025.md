Deployment Report: core/b2b/core-services/openclaw
Date: Thu Mar 19 12:33:28 UTC 2026
Trigger: push by ka0score
Namespace: openclaw
---------------------------------------------------
>>> Pods Status:
NAME         READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
openclaw-0   1/1     Running   0          40m   172.16.209.32   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)            AGE
openclaw   ClusterIP   10.101.236.82   <none>        80/TCP,18791/TCP   47h

>>> Ingress Status:
NAME               CLASS    HOSTS              ADDRESS         PORTS     AGE
openclaw-ingress   <none>   openclaw.ka0s.io   192.168.1.250   80, 443   47h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: openclaw ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service openclaw...
✅ Endpoints found: 172.16.209.32
=== Verification Successful (with possible warnings) ===
