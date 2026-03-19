Deployment Report: core/b2b/core-services/zabbix
Date: Thu Mar 19 11:11:35 UTC 2026
Trigger: push by ka0score
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
zabbix-agent-kjdrk               1/1     Running   0          12m   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-swdq2               1/1     Running   0          12m   192.168.1.10    k8-manager   <none>           <none>
zabbix-server-74f5d887b5-j8nhf   1/1     Running   0          8d    172.16.64.148   k8-node-40   <none>           <none>
zabbix-web-57bc989d45-fq5gm      1/1     Running   0          45h   172.16.64.164   k8-node-40   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
zabbix-agent    ClusterIP   None            <none>        10050/TCP   62d
zabbix-server   ClusterIP   10.96.9.144     <none>        10051/TCP   64d
zabbix-web      ClusterIP   10.102.145.85   <none>        80/TCP      64d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      38d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
