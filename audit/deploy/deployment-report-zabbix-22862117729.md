Deployment Report: core/b2b/core-services/zabbix
Date: Mon Mar  9 15:56:05 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS    RESTARTS         AGE     IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running   7 (7d7h ago)     54d     172.16.74.6     k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running   4 (7d7h ago)     40d     192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running   22 (7h21m ago)   40d     192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running   45 (21d ago)     40d     192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running   28 (7h19m ago)   32d     192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running   5 (7d7h ago)     33d     172.16.74.62    k8-manager   <none>           <none>
zabbix-web-859dbc8d55-827h7      1/1     Running   0                4h36m   172.16.209.29   k8-node-20   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
postgresql      ClusterIP   10.102.133.214   <none>        5432/TCP    54d
zabbix-agent    ClusterIP   None             <none>        10050/TCP   53d
zabbix-server   ClusterIP   10.96.9.144      <none>        10051/TCP   54d
zabbix-web      ClusterIP   10.102.145.85    <none>        80/TCP      54d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      29d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
