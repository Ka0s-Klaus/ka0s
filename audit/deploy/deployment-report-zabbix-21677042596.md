Deployment Report: core/b2b/core-services/zabbix
Date: Wed Feb  4 15:17:59 UTC 2026
Trigger: push by santakloud
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS        AGE     IP             NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running       3 (7h17m ago)   21d     172.16.74.48   k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running       2 (7h17m ago)   7d22h   192.168.1.10   k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       2 (7h16m ago)   7d22h   192.168.1.20   k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       6 (7h8m ago)    7d22h   192.168.1.30   k8-node-30   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running       0               2s      172.16.74.21   k8-manager   <none>           <none>
zabbix-server-754f556659-d9tpz   0/1     Terminating   6               8m51s   172.16.74.19   k8-manager   <none>           <none>
zabbix-web-677b9f7b9c-sljl8      1/1     Running       2 (7h17m ago)   6d5h    172.16.74.28   k8-manager   <none>           <none>

>>> Services Status:
NAME            TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
postgresql      ClusterIP      10.102.133.214   <none>          5432/TCP       21d
zabbix-agent    ClusterIP      None             <none>          10050/TCP      19d
zabbix-server   ClusterIP      10.96.9.144      <none>          10051/TCP      21d
zabbix-web      LoadBalancer   10.102.145.85    192.168.1.241   80:31123/TCP   21d

>>> Ingress Status:
No resources found in zabbix namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service zabbix...
Error from server (NotFound): endpoints "zabbix" not found
