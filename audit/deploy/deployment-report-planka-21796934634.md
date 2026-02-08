Deployment Report: core/b2b/core-services/planka
Date: Sun Feb  8 10:53:58 UTC 2026
Trigger: push by santakloud
Namespace: planka
---------------------------------------------------
>>> Pods Status:
NAME                       READY   STATUS        RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
planka-7858f7cf99-5b64h    0/1     Terminating   0          4m1s   172.16.209.2    k8-node-20   <none>           <none>
planka-db-6dc6cdd8-ltklz   1/1     Running       0          11m    172.16.209.63   k8-node-20   <none>           <none>
planka-fc7bbcf8b-rm5bp     1/1     Running       0          3s     172.16.209.33   k8-node-20   <none>           <none>

>>> Services Status:
NAME        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
planka      LoadBalancer   10.98.251.148   192.168.1.244   80:30735/TCP   11m
planka-db   ClusterIP      10.110.100.85   <none>          5432/TCP       11m

>>> Ingress Status:
No resources found in planka namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: planka ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Service planka for External IP: 192.168.1.244...
✅ Service planka is assigned to IP 192.168.1.244.
--> Checking Endpoints for Service planka...
✅ Endpoints found: 172.16.209.33
=== Verification Successful ===
