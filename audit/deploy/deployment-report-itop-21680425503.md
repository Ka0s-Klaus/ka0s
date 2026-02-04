Deployment Report: core/b2b/core-services/itop
Date: Wed Feb  4 16:55:07 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS      RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-pgdhv   0/1     Completed   0             3m50s   172.16.146.34   k8-node-30   <none>           <none>
itop-564949d45d-gcd5p         1/1     Running     0             87m     172.16.209.62   k8-node-20   <none>           <none>
mysql-6c885b98c4-8h68b        1/1     Running     2 (85m ago)   87m     172.16.209.17   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
itop    ClusterIP   10.104.199.34   <none>        80/TCP     20d
mysql   ClusterIP   None            <none>        3306/TCP   44d

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   29h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Service itop for External IP: 192.168.1.240...
ERROR: Service itop does NOT have the expected IP 192.168.1.240.
Current ExternalIPs: 
Current LoadBalancer IP: null
