Deployment Report: core/b2b/core-services/ingress-nginx
Date: Mon Feb  9 08:54:12 UTC 2026
Trigger: push by santakloud
Namespace: ingress-nginx
---------------------------------------------------
>>> Pods Status:
NAME                                        READY   STATUS      RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
ingress-nginx-admission-create-xvdwb        0/1     Completed   0          21h   172.16.74.55   k8-manager   <none>           <none>
ingress-nginx-admission-patch-s482f         0/1     Completed   0          21h   172.16.74.29   k8-manager   <none>           <none>
ingress-nginx-controller-85d4ccf649-zqln5   1/1     Running     0          14s   172.16.74.9    k8-manager   <none>           <none>

>>> Services Status:
NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.107.218.204   192.168.1.250   80:31217/TCP,443:30093/TCP   21h
ingress-nginx-controller-admission   ClusterIP      10.98.154.157    <none>          443/TCP                      21h

>>> Ingress Status:
No resources found in ingress-nginx namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ingress-nginx ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ingress-nginx...
Error from server (NotFound): endpoints "ingress-nginx" not found
