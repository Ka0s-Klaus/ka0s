Deployment Report: core/b2b/core-services/ingress-nginx
Date: Sun Feb  8 11:50:44 UTC 2026
Trigger: push by santakloud
Namespace: ingress-nginx
---------------------------------------------------
>>> Pods Status:
NAME                                        READY   STATUS      RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
ingress-nginx-admission-create-xvdwb        0/1     Completed   0          21m   172.16.74.55   k8-manager   <none>           <none>
ingress-nginx-admission-patch-s482f         0/1     Completed   0          21m   172.16.74.29   k8-manager   <none>           <none>
ingress-nginx-controller-6d59d95796-hn2w7   1/1     Running     0          21m   172.16.74.61   k8-manager   <none>           <none>

>>> Services Status:
NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.107.218.204   <pending>     80:31217/TCP,443:30093/TCP   21m
ingress-nginx-controller-admission   ClusterIP      10.98.154.157    <none>        443/TCP                      21m

>>> Ingress Status:
No resources found in ingress-nginx namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ingress-nginx ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ingress-nginx...
Error from server (NotFound): endpoints "ingress-nginx" not found
