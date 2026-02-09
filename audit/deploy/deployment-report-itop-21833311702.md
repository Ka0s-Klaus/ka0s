Deployment Report: core/b2b/core-services/itop
Date: Mon Feb  9 16:46:57 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-b8kfk   0/1     Completed   0          4m23s   172.16.74.33    k8-manager   <none>           <none>
itop-677bffb8d8-bzq9v         1/1     Running     0          154m    172.16.209.41   k8-node-20   <none>           <none>
mysql-6d89499c7c-kqvv5        1/1     Running     0          154m    172.16.209.17   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
itop    ClusterIP   10.103.185.4    <none>        80/TCP     3d8h
mysql   ClusterIP   10.110.39.171   <none>        3306/TCP   3d8h

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS     AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80, 443   29h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service itop...
✅ Endpoints found: 172.16.209.41
=== Verification Successful ===
