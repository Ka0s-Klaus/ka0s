Deployment Report: core/b2b/core-services/itop
Date: Wed Feb  4 15:28:54 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                     READY   STATUS    RESTARTS        AGE   IP              NODE         NOMINATED NODE   READINESS GATES
itop-564949d45d-gcd5p    1/1     Running   0               97s   172.16.209.62   k8-node-20   <none>           <none>
mysql-644c696dd-ldrd8    1/1     Running   2 (7h27m ago)   27h   172.16.209.41   k8-node-20   <none>           <none>
mysql-6c885b98c4-8h68b   0/1     Running   1 (7s ago)      97s   172.16.209.17   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.104.199.34   192.168.1.240   80:31509/TCP   20d
mysql   ClusterIP      None            <none>          3306/TCP       44d

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   27h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Service itop for External IP: 192.168.1.240...
✅ Service itop is assigned to IP 192.168.1.240.
--> Checking Endpoints for Service itop...
✅ Endpoints found: 172.16.209.62
=== Verification Successful ===
