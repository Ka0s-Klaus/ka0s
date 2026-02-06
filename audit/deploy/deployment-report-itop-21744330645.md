Deployment Report: core/b2b/core-services/itop
Date: Fri Feb  6 08:46:04 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS      RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-z65qc   0/1     Completed   0          36s   172.16.64.163   k8-node-40   <none>           <none>
itop-64676894dc-f7fr9         1/1     Running     0          35s   172.16.209.56   k8-node-20   <none>           <none>
mysql-6c885b98c4-lhd4q        1/1     Running     0          16m   172.16.209.44   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.103.185.4    192.168.1.243   80:30455/TCP   16m
mysql   ClusterIP      10.110.39.171   <none>          3306/TCP       16m

>>> Ingress Status:
No resources found in itop namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Service itop for External IP: 192.168.1.243...
✅ Service itop is assigned to IP 192.168.1.243.
--> Checking Endpoints for Service itop...
✅ Endpoints found: 172.16.209.56
=== Verification Successful ===
