Deployment Report: core/b2b/core-services/planka
Date: Mon Feb  9 10:55:02 UTC 2026
Trigger: push by santakloud
Namespace: planka
---------------------------------------------------
>>> Pods Status:
NAME                         READY   STATUS    RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
planka-db-6f8857ffc9-rkd5t   1/1     Running   1 (23h ago)   23h   172.16.209.9    k8-node-20   <none>           <none>
planka-fc7bbcf8b-rm5bp       1/1     Running   0             24h   172.16.209.33   k8-node-20   <none>           <none>

>>> Services Status:
NAME        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
planka      ClusterIP   10.98.251.148   <none>        80/TCP     24h
planka-db   ClusterIP   10.110.100.85   <none>        5432/TCP   24h

>>> Ingress Status:
NAME             CLASS   HOSTS            ADDRESS         PORTS   AGE
planka-ingress   nginx   planka.ka0s.io   192.168.1.250   80      33m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: planka ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service planka...
✅ Endpoints found: 172.16.209.33
=== Verification Successful ===
