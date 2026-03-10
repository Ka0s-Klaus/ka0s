Deployment Report: core/b2b/core-services/zabbix
Date: Tue Mar 10 15:27:07 UTC 2026
Trigger: push by asantacana1970
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS         AGE   IP              NODE         NOMINATED NODE   READINESS GATES
zabbix-agent-6fftl               1/1     Running       4 (8d ago)       41d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (30h ago)     41d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       46 (7h31m ago)   41d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (30h ago)     33d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-56ns5   1/1     Terminating   0                31m   172.16.74.18    k8-manager   <none>           <none>
zabbix-server-74f5d887b5-hl9wh   0/1     Error         1 (18s ago)      29s   172.16.64.147   k8-node-40   <none>           <none>
zabbix-web-557974c4b9-nwlsl      1/1     Terminating   0                41s   172.16.209.51   k8-node-20   <none>           <none>
zabbix-web-6455cd665-svk5s       1/1     Running       0                29s   172.16.64.128   k8-node-40   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
zabbix-agent    ClusterIP   None            <none>        10050/TCP   54d
zabbix-server   ClusterIP   10.96.9.144     <none>        10051/TCP   55d
zabbix-web      ClusterIP   10.102.145.85   <none>        80/TCP      55d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      30d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
zabbix-server-554759d44b-56ns5 Terminating
zabbix-server-74f5d887b5-hl9wh Error
zabbix-web-557974c4b9-nwlsl Terminating
--- Description for zabbix-server-554759d44b-56ns5 ---
    Optional:  false
  kube-api-access-bztjl:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              node-role.kubernetes.io/control-plane=
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  31m   default-scheduler  Successfully assigned zabbix/zabbix-server-554759d44b-56ns5 to k8-manager
  Normal  Pulling    31m   kubelet            Pulling image "zabbix/zabbix-server-pgsql:latest"
  Normal  Pulled     31m   kubelet            Successfully pulled image "zabbix/zabbix-server-pgsql:latest" in 711ms (711ms including waiting). Image size: 27688968 bytes.
  Normal  Created    31m   kubelet            Created container: zabbix-server
  Normal  Started    31m   kubelet            Started container zabbix-server
  Normal  Killing    25s   kubelet            Stopping container zabbix-server
--- Logs for zabbix-server-554759d44b-56ns5 (Current) ---
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     62:20260310:152703.070 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     64:20260310:152703.071 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     64:20260310:152703.072 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     35:20260310:152703.074 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     35:20260310:152703.074 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     48:20260310:152703.076 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     61:20260310:152703.077 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     48:20260310:152703.078 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     45:20260310:152703.080 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     45:20260310:152703.080 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     68:20260310:152703.081 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     68:20260310:152703.081 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     37:20260310:152703.081 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     37:20260310:152703.082 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     61:20260310:152703.084 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     25:20260310:152703.086 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     36:20260310:152703.087 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     34:20260310:152703.087 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     34:20260310:152703.088 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     63:20260310:152703.088 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     63:20260310:152703.088 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     36:20260310:152703.088 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     41:20260310:152705.008 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     41:20260310:152705.008 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     44:20260310:152705.259 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     44:20260310:152705.259 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     26:20260310:152705.500 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     26:20260310:152705.500 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     43:20260310:152706.303 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     43:20260310:152706.304 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     42:20260310:152707.300 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     42:20260310:152707.301 database is down: reconnecting in 10 seconds
[pod/zabbix-server-554759d44b-56ns5/zabbix-server]     25:20260310:152708.095 [Z3001] connection to database 'zabbix' failed: [0] could not translate host name "postgresql" to address: Name has no usable address
[pod/zabbix-server-554759d44b-56ns5/zabbix-server] 
--- Description for zabbix-server-74f5d887b5-hl9wh ---
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              kubernetes.io/hostname=k8-node-40
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  29s                default-scheduler  Successfully assigned zabbix/zabbix-server-74f5d887b5-hl9wh to k8-node-40
  Normal   Pulled     27s                kubelet            Successfully pulled image "zabbix/zabbix-server-pgsql:latest" in 1.468s (1.468s including waiting). Image size: 27688968 bytes.
  Normal   Pulling    17s (x2 over 28s)  kubelet            Pulling image "zabbix/zabbix-server-pgsql:latest"
  Normal   Created    15s (x2 over 27s)  kubelet            Created container: zabbix-server
  Normal   Started    15s (x2 over 26s)  kubelet            Started container zabbix-server
  Normal   Pulled     15s                kubelet            Successfully pulled image "zabbix/zabbix-server-pgsql:latest" in 1.42s (1.42s including waiting). Image size: 27688968 bytes.
  Warning  BackOff    8s                 kubelet            Back-off restarting failed container zabbix-server in pod zabbix-server-74f5d887b5-hl9wh_zabbix(4daaad17-ab38-4c10-9742-2bae1897de84)
--- Logs for zabbix-server-74f5d887b5-hl9wh (Current) ---
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] ERROR:  current transaction is aborted, commands ignored until end of transaction block
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] Skipping /var/lib/zabbix/ssl/ssl_ca/, can't write
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] Starting Zabbix Server. Zabbix 7.4.7 (revision b033bea).
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] Press Ctrl+C to exit.
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server] 
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 Starting Zabbix Server. Zabbix 7.4.7 (revision b033bea).
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 ****** Enabled features ******
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 SNMP monitoring:           YES
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 IPMI monitoring:           YES
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 Web monitoring:            YES
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 VMware monitoring:         YES
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 SMTP authentication:       YES
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 ODBC:                      YES
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 SSH support:               YES
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 IPv6 support:              YES
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 TLS support:               YES
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 ******************************
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.546 using configuration file: /etc/zabbix/zabbix_server.conf
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.600 [Z3005] query failed: [0] PGRES_FATAL_ERROR:ERROR:  permission denied for table users
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]  [select userid from users limit 1]
[pod/zabbix-server-74f5d887b5-hl9wh/zabbix-server]      1:20260310:152659.600 cannot use database "zabbix": database is not a Zabbix database
--- Description for zabbix-web-557974c4b9-nwlsl ---
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
  Normal  Scheduled  42s   default-scheduler  Successfully assigned zabbix/zabbix-web-557974c4b9-nwlsl to k8-node-20
  Normal  Pulling    41s   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     41s   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 668ms (668ms including waiting). Image size: 78005565 bytes.
  Normal  Created    41s   kubelet            Created container: init-zabbix-web-branding
  Normal  Started    41s   kubelet            Started container init-zabbix-web-branding
  Normal  Pulling    37s   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     36s   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 665ms (665ms including waiting). Image size: 78005565 bytes.
  Normal  Created    36s   kubelet            Created container: zabbix-web
  Normal  Started    36s   kubelet            Started container zabbix-web
  Normal  Killing    2s    kubelet            Stopping container zabbix-web
--- Logs for zabbix-web-557974c4b9-nwlsl (Current) ---
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] ** Deploying Zabbix web-interface (Nginx) with PostgreSQL database
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] ** Using POSTGRES_USER variable from ENV
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] ** Using POSTGRES_PASSWORD variable from ENV
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] ********************
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] * DB_SERVER_HOST: postgresql
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] * DB_SERVER_PORT: 5432
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] * DB_SERVER_PORT: 5432
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] * DB_SERVER_DBNAME: zabbix
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] * DB_SERVER_SCHEMA: public
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] ********************
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] **** PostgreSQL server is not available. Waiting 5 seconds...
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] **** PostgreSQL server is not available. Waiting 5 seconds...
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] **** PostgreSQL server is not available. Waiting 5 seconds...
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] **** PostgreSQL server is not available. Waiting 5 seconds...
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] **** PostgreSQL server is not available. Waiting 5 seconds...
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] **** PostgreSQL server is not available. Waiting 5 seconds...
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] **** PostgreSQL server is not available. Waiting 5 seconds...
[pod/zabbix-web-557974c4b9-nwlsl/zabbix-web] **** PostgreSQL server is not available. Waiting 5 seconds...
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/kk': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/tr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/tr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/tr': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sk/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sk/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sk': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/vi/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/vi/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/vi': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/en_GB/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/en_GB/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/en_GB': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/pt_BR/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/pt_BR/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/pt_BR': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/da/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/da/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/da': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/nb_NO/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/nb_NO/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/nb_NO': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/hr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/hr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/hr': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fr': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/README': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fa/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fa/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fa': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/ja/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/ja/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/ja': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sr': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/lv/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/lv/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/lv': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sv_SE/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sv_SE/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sv_SE': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./imgstore.php': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./host_prototypes.php': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve times of '/work/.': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/.': Operation not permitted
[pod/zabbix-web-557974c4b9-nwlsl/init-zabbix-web-branding] cp: can't preserve permissions of '/work/.': Operation not permitted
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
