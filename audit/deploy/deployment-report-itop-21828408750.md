Deployment Report: core/b2b/core-services/itop
Date: Mon Feb  9 14:13:01 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS      RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-94cxl   0/1     Completed   0          37s   172.16.74.56    k8-manager   <none>           <none>
itop-677bffb8d8-bzq9v         1/1     Running     0          35s   172.16.209.41   k8-node-20   <none>           <none>
mysql-6d89499c7c-kqvv5        1/1     Running     0          35s   172.16.209.17   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.103.185.4    192.168.1.243   80:30455/TCP   3d5h
mysql   ClusterIP      10.110.39.171   <none>          3306/TCP       3d5h

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS   AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80      26h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Service itop for External IP: 192.168.1.243...
✅ Service itop is assigned to IP 192.168.1.243.
--> Checking Endpoints for Service itop...
✅ Endpoints found: 172.16.209.41
=== Verification Successful ===
