Deployment Report: core/b2b/core-services/cloudbeaver
Date: Mon Mar  2 21:54:04 UTC 2026
Trigger: push by santakloud
Namespace: cloudbeaver
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS    RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
cloudbeaver-7c94b5f4fb-sdkjz   1/1     Running   0          110m   172.16.209.11   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
cloudbeaver   ClusterIP   10.105.40.153   <none>        80/TCP    121m

>>> Ingress Status:
NAME                  CLASS   HOSTS              ADDRESS         PORTS     AGE
cloudbeaver-ingress   nginx   db-admin.ka0s.io   192.168.1.250   80, 443   121m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: cloudbeaver ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service cloudbeaver...
✅ Endpoints found: 172.16.209.11
=== Verification Successful (with possible warnings) ===
