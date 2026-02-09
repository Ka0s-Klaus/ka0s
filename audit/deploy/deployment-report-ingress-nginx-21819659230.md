Deployment Report: core/b2b/core-services/ingress-nginx
Date: Mon Feb  9 09:34:05 UTC 2026
Trigger: push by santakloud
Namespace: ingress-nginx
---------------------------------------------------
>>> Pods Status:
NAME                                        READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
ingress-nginx-admission-create-xvdwb        0/1     Completed   0          22h     172.16.74.55    k8-manager   <none>           <none>
ingress-nginx-admission-patch-s482f         0/1     Completed   0          22h     172.16.74.29    k8-manager   <none>           <none>
ingress-nginx-controller-5dfb55cbbd-9p44p   1/1     Running     0          5m22s   172.16.209.61   k8-node-20   <none>           <none>

>>> Services Status:
NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.107.218.204   192.168.1.250   80:31217/TCP,443:30093/TCP   22h
ingress-nginx-controller-admission   ClusterIP      10.98.154.157    <none>          443/TCP                      22h

>>> Ingress Status:
No resources found in ingress-nginx namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ingress-nginx ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ingress-nginx...
Error from server (NotFound): endpoints "ingress-nginx" not found
