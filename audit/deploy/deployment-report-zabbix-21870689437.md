Deployment Report: core/b2b/core-services/zabbix
Date: Tue Feb 10 15:19:48 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS    RESTARTS        AGE     IP             NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running   6 (27h ago)     27d     172.16.74.30   k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running   3 (2d6h ago)    13d     192.168.1.10   k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running   3 (2d6h ago)    13d     192.168.1.20   k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running   24 (94m ago)    13d     192.168.1.30   k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running   11 (144m ago)   5d21h   192.168.1.40   k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running   2 (27h ago)     6d      172.16.74.35   k8-manager   <none>           <none>
zabbix-web-677b9f7b9c-sljl8      1/1     Running   3 (2d6h ago)    12d     172.16.74.42   k8-manager   <none>           <none>

>>> Services Status:
NAME            TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
postgresql      ClusterIP      10.102.133.214   <none>          5432/TCP       27d
zabbix-agent    ClusterIP      None             <none>          10050/TCP      26d
zabbix-server   ClusterIP      10.96.9.144      <none>          10051/TCP      27d
zabbix-web      LoadBalancer   10.102.145.85    192.168.1.241   80:31123/TCP   27d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      2d3h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service zabbix...
Error from server (NotFound): endpoints "zabbix" not found
