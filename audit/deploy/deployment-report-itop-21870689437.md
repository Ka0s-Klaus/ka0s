Deployment Report: core/b2b/core-services/itop
Date: Tue Feb 10 15:19:40 UTC 2026
Trigger: push by jh0ny2k2
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS              RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-lz9v9   0/1     ContainerCreating   0          1s    <none>          k8-manager   <none>           <none>
itop-677bffb8d8-bzq9v         1/1     Running             0          25h   172.16.209.41   k8-node-20   <none>           <none>
mysql-6d89499c7c-kqvv5        1/1     Running             0          25h   172.16.209.17   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
itop    ClusterIP   10.103.185.4    <none>        80/TCP     4d6h
mysql   ClusterIP   10.110.39.171   <none>        3306/TCP   4d6h

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS     AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80, 443   2d3h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service itop...
✅ Endpoints found: 172.16.209.41
=== Verification Successful ===
