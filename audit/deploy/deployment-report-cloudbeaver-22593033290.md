Deployment Report: core/b2b/core-services/cloudbeaver
Date: Mon Mar  2 19:53:45 UTC 2026
Trigger: push by santakloud
Namespace: cloudbeaver
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
cloudbeaver-67b5b5d678-nbtpt   0/1     Running   0          60s   172.16.209.19   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
cloudbeaver   ClusterIP   10.105.40.153   <none>        80/TCP    61s

>>> Ingress Status:
NAME                  CLASS   HOSTS              ADDRESS         PORTS     AGE
cloudbeaver-ingress   nginx   db-admin.ka0s.io   192.168.1.250   80, 443   60s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: cloudbeaver ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service cloudbeaver...
WARNING: Service cloudbeaver has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
