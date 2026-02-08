Deployment Report: core/b2b/core-services/ingress-nginx
Date: Sun Feb  8 11:52:37 UTC 2026
Trigger: push by santakloud
Namespace: ingress-nginx
---------------------------------------------------
>>> Pods Status:
NAME                                       READY   STATUS      RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
ingress-nginx-admission-create-xvdwb       0/1     Completed   0          23m   172.16.74.55   k8-manager   <none>           <none>
ingress-nginx-admission-patch-s482f        0/1     Completed   0          23m   172.16.74.29   k8-manager   <none>           <none>
ingress-nginx-controller-d8c96cf68-8wclx   1/1     Running     0          13s   172.16.74.17   k8-manager   <none>           <none>

>>> Services Status:
NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.107.218.204   <pending>     80:31217/TCP,443:30093/TCP   23m
ingress-nginx-controller-admission   ClusterIP      10.98.154.157    <none>        443/TCP                      23m

>>> Ingress Status:
No resources found in ingress-nginx namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ingress-nginx ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ingress-nginx...
Error from server (NotFound): endpoints "ingress-nginx" not found
