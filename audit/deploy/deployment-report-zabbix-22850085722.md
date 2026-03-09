Deployment Report: core/b2b/core-services/zabbix
Date: Mon Mar  9 10:54:54 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS        AGE   IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running       7 (7d2h ago)    54d   172.16.74.6     k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running       4 (7d2h ago)    40d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (139m ago)   40d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       45 (21d ago)    40d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (138m ago)   32d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running       5 (7d2h ago)    32d   172.16.74.62    k8-manager   <none>           <none>
zabbix-web-667dfdf998-zqqxb      1/1     Terminating   0               10m   172.16.209.50   k8-node-20   <none>           <none>
zabbix-web-689dfd5745-8cswj      1/1     Running       0               6s    172.16.209.13   k8-node-20   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
postgresql      ClusterIP   10.102.133.214   <none>        5432/TCP    54d
zabbix-agent    ClusterIP   None             <none>        10050/TCP   52d
zabbix-server   ClusterIP   10.96.9.144      <none>        10051/TCP   54d
zabbix-web      ClusterIP   10.102.145.85    <none>        80/TCP      54d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      28d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
zabbix-web-667dfdf998-zqqxb Terminating
--- Description for zabbix-web-667dfdf998-zqqxb ---
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  10m   default-scheduler  Successfully assigned zabbix/zabbix-web-667dfdf998-zqqxb to k8-node-20
  Normal  Pulling    10m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     10m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 665ms (665ms including waiting). Image size: 78005565 bytes.
  Normal  Created    10m   kubelet            Created container: init-zabbix-web-branding
  Normal  Started    10m   kubelet            Started container init-zabbix-web-branding
  Normal  Pulling    10m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     10m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 694ms (694ms including waiting). Image size: 78005565 bytes.
  Normal  Created    10m   kubelet            Created container: zabbix-web
  Normal  Started    10m   kubelet            Started container zabbix-web
  Normal  Killing    1s    kubelet            Stopping container zabbix-web
--- Logs for zabbix-web-667dfdf998-zqqxb (Current) ---
[pod/zabbix-web-667dfdf998-zqqxb/init-zabbix-web-branding] unable to retrieve container logs for containerd://9c46c636aaf0598abb61458e81958e8cd451dbe9d553c009201407f2f2b25b7f[pod/zabbix-web-667dfdf998-zqqxb/zabbix-web] unable to retrieve container logs for containerd://5670844ba504d0f16c8d67570e7ed1030cfc710b40bcf8b33ad53a91e904a8a4--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
