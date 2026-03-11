Deployment Report: core/b2b/core-services/zabbix
Date: Wed Mar 11 08:26:59 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS       RESTARTS       AGE    IP              NODE         NOMINATED NODE   READINESS GATES
zabbix-agent-6fftl               1/1     Running      4 (9d ago)     42d    192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running      22 (47h ago)   42d    192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running      46 (24h ago)   42d    192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running      28 (47h ago)   34d    192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-74f5d887b5-j8nhf   1/1     Running      0              16h    172.16.64.148   k8-node-40   <none>           <none>
zabbix-web-74657997c6-jr4xt      0/1     Init:Error   1 (35s ago)    60s    172.16.64.156   k8-node-40   <none>           <none>
zabbix-web-859684d448-hm75z      1/1     Running      0              8m8s   172.16.64.158   k8-node-40   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
zabbix-agent    ClusterIP   None            <none>        10050/TCP   54d
zabbix-server   ClusterIP   10.96.9.144     <none>        10051/TCP   56d
zabbix-web      ClusterIP   10.102.145.85   <none>        80/TCP      56d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      30d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
zabbix-web-74657997c6-jr4xt Init:Error
--- Description for zabbix-web-74657997c6-jr4xt ---
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-40
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  61s                default-scheduler  Successfully assigned zabbix/zabbix-web-74657997c6-jr4xt to k8-node-40
  Normal   Pulled     58s                kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.495s (1.495s including waiting). Image size: 78005565 bytes.
  Normal   Pulling    35s (x2 over 60s)  kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal   Pulled     34s                kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.453s (1.453s including waiting). Image size: 78005565 bytes.
  Normal   Created    33s (x2 over 58s)  kubelet            Created container: init-zabbix-web-branding
  Normal   Started    33s (x2 over 57s)  kubelet            Started container init-zabbix-web-branding
  Warning  BackOff    12s                kubelet            Back-off restarting failed container init-zabbix-web-branding in pod zabbix-web-74657997c6-jr4xt_zabbix(b6b8921d-4308-4e8d-91ec-8602a70a0cb6)
--- Logs for zabbix-web-74657997c6-jr4xt (Current) ---
[pod/zabbix-web-74657997c6-jr4xt/init-zabbix-web-branding] sh: % !important;height:60px !important;margin-bottom:20px !important;}\n: invalid format
Error from server (BadRequest): container "zabbix-web" in pod "zabbix-web-74657997c6-jr4xt" is waiting to start: PodInitializing
Failed to fetch current logs
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
