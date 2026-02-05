Deployment Report: core/b2b/core-services/itop
Date: Thu Feb  5 09:48:46 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-fvz6k   0/1     Completed   0          5m27s   172.16.209.50   k8-node-20   <none>           <none>
itop-7d4569cf76-df6nv         1/1     Running     0          5m27s   172.16.209.25   k8-node-20   <none>           <none>
mysql-6c885b98c4-lxxs8        1/1     Running     0          5m27s   172.16.209.6    k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
itop    ClusterIP   10.102.203.241   <none>        80/TCP     5m28s
mysql   ClusterIP   10.106.214.58    <none>        3306/TCP   5m27s

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   5m27s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Service itop for External IP: 192.168.1.240...
ERROR: Service itop does NOT have the expected IP 192.168.1.240.
Current ExternalIPs: 
Current LoadBalancer IP: null
