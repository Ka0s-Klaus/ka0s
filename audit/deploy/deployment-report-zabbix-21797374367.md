Deployment Report: core/b2b/core-services/zabbix
Date: Sun Feb  8 11:31:24 UTC 2026
Trigger: push by santakloud
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS    RESTARTS       AGE     IP             NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running   4 (144m ago)   25d     172.16.74.30   k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running   3 (144m ago)   11d     192.168.1.10   k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running   3 (141m ago)   11d     192.168.1.20   k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running   16 (41m ago)   11d     192.168.1.30   k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running   9 (139m ago)   3d18h   192.168.1.40   k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running   1 (144m ago)   3d20h   172.16.74.35   k8-manager   <none>           <none>
zabbix-web-677b9f7b9c-sljl8      1/1     Running   3 (144m ago)   10d     172.16.74.42   k8-manager   <none>           <none>

>>> Services Status:
NAME            TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
postgresql      ClusterIP      10.102.133.214   <none>          5432/TCP       25d
zabbix-agent    ClusterIP      None             <none>          10050/TCP      23d
zabbix-server   ClusterIP      10.96.9.144      <none>          10051/TCP      25d
zabbix-web      LoadBalancer   10.102.145.85    192.168.1.241   80:31123/TCP   25d

>>> Ingress Status:
NAME             CLASS   HOSTS            ADDRESS   PORTS   AGE
zabbix-ingress   nginx   zabbix.ka0s.io             80      1s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service zabbix...
Error from server (NotFound): endpoints "zabbix" not found
