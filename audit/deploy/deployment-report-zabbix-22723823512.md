Deployment Report: core/b2b/core-services/zabbix
Date: Thu Mar  5 15:01:43 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS              RESTARTS         AGE   IP             NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running             7 (3d6h ago)     50d   172.16.74.6    k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running             4 (3d6h ago)     36d   192.168.1.10   k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running             21 (7d16h ago)   36d   192.168.1.20   k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running             45 (17d ago)     36d   192.168.1.30   k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running             27 (3d3h ago)    28d   192.168.1.40   k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running             5 (3d6h ago)     28d   172.16.74.62   k8-manager   <none>           <none>
zabbix-web-677b9f7b9c-sljl8      1/1     Running             4 (3d6h ago)     35d   172.16.74.20   k8-manager   <none>           <none>
zabbix-web-77c4b56ff4-zsm5q      0/1     ContainerCreating   0                60s   <none>         k8-node-20   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
postgresql      ClusterIP   10.102.133.214   <none>        5432/TCP    50d
zabbix-agent    ClusterIP   None             <none>        10050/TCP   48d
zabbix-server   ClusterIP   10.96.9.144      <none>        10051/TCP   50d
zabbix-web      ClusterIP   10.102.145.85    <none>        80/TCP      50d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      25d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
zabbix-web-77c4b56ff4-zsm5q ContainerCreating
--- Description for zabbix-web-77c4b56ff4-zsm5q ---
Volumes:
  zabbix-web-branding:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      zabbix-web-branding
    Optional:  false
  kube-api-access-trtr5:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason       Age                From               Message
  ----     ------       ----               ----               -------
  Normal   Scheduled    60s                default-scheduler  Successfully assigned zabbix/zabbix-web-77c4b56ff4-zsm5q to k8-node-20
  Warning  FailedMount  29s (x7 over 61s)  kubelet            MountVolume.SetUp failed for volume "zabbix-web-branding" : configmap "zabbix-web-branding" not found
--- Logs for zabbix-web-77c4b56ff4-zsm5q (Current) ---
Error from server (BadRequest): container "zabbix-web" in pod "zabbix-web-77c4b56ff4-zsm5q" is waiting to start: ContainerCreating
Failed to fetch current logs
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
