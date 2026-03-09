Deployment Report: core/b2b/core-services/zabbix
Date: Mon Mar  9 10:44:02 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS        AGE   IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running       7 (7d2h ago)    54d   172.16.74.6     k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running       4 (7d2h ago)    40d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (129m ago)   40d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       45 (21d ago)    40d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (127m ago)   32d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running       5 (7d2h ago)    32d   172.16.74.62    k8-manager   <none>           <none>
zabbix-web-667dfdf998-zqqxb      1/1     Running       0               4s    172.16.209.50   k8-node-20   <none>           <none>
zabbix-web-75c4645cb4-wspw7      1/1     Terminating   0               22m   172.16.209.6    k8-node-20   <none>           <none>

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
zabbix-web-75c4645cb4-wspw7 Terminating
--- Description for zabbix-web-75c4645cb4-wspw7 ---
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
  Normal  Scheduled  22m   default-scheduler  Successfully assigned zabbix/zabbix-web-75c4645cb4-wspw7 to k8-node-20
  Normal  Pulling    22m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     22m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 717ms (718ms including waiting). Image size: 78005565 bytes.
  Normal  Created    22m   kubelet            Created container: init-zabbix-web-branding
  Normal  Started    22m   kubelet            Started container init-zabbix-web-branding
  Normal  Pulling    22m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     22m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 648ms (648ms including waiting). Image size: 78005565 bytes.
  Normal  Created    22m   kubelet            Created container: zabbix-web
  Normal  Started    22m   kubelet            Started container zabbix-web
  Normal  Killing    1s    kubelet            Stopping container zabbix-web
--- Logs for zabbix-web-75c4645cb4-wspw7 (Current) ---
[pod/zabbix-web-75c4645cb4-wspw7/init-zabbix-web-branding] failed to try resolving symlinks in path "/var/log/pods/zabbix_zabbix-web-75c4645cb4-wspw7_aa02fcf6-6fc6-4ab1-971b-98869fdc53f6/init-zabbix-web-branding/0.log": lstat /var/log/pods/zabbix_zabbix-web-75c4645cb4-wspw7_aa02fcf6-6fc6-4ab1-971b-98869fdc53f6/init-zabbix-web-branding/0.log: no such file or directory[pod/zabbix-web-75c4645cb4-wspw7/zabbix-web] unable to retrieve container logs for containerd://4220246e3a1bc2c2dcab5f967ca54e2f30d7ddd03b789f295580eba3349296d1--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
