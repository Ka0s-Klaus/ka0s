Deployment Report: core/b2b/core-services/zabbix
Date: Tue Mar 31 15:52:38 UTC 2026
Trigger: push by ka0score
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS    RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
zabbix-agent-kjdrk               1/1     Running   2 (9d ago)    12d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-swdq2               1/1     Running   3 (32h ago)   12d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-vqh6t               1/1     Running   0             11d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-65c5d5b99b-68djq   1/1     Running   0             48m   172.16.209.38   k8-node-20   <none>           <none>
zabbix-web-8f6f86664-nxp6b       1/1     Running   2 (42m ago)   52m   172.16.209.50   k8-node-20   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
zabbix-agent    ClusterIP   None            <none>        10050/TCP   75d
zabbix-server   ClusterIP   10.96.9.144     <none>        10051/TCP   76d
zabbix-web      ClusterIP   10.102.145.85   <none>        80/TCP      76d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      51d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
