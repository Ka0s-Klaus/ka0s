Deployment Report: core/b2b/core-services/zabbix
Date: Tue Mar 10 08:08:39 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS                  RESTARTS       AGE   IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running                 7 (8d ago)     55d   172.16.74.6     k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running                 4 (8d ago)     41d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running                 22 (23h ago)   41d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running                 46 (12m ago)   41d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running                 28 (23h ago)   33d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running                 5 (8d ago)     33d   172.16.74.62    k8-manager   <none>           <none>
zabbix-web-59bf56df6b-dbt97      0/1     Init:CrashLoopBackOff   2 (21s ago)    60s   172.16.209.43   k8-node-20   <none>           <none>
zabbix-web-6549d84c95-cnm6r      1/1     Running                 0              16h   172.16.209.50   k8-node-20   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
postgresql      ClusterIP   10.102.133.214   <none>        5432/TCP    55d
zabbix-agent    ClusterIP   None             <none>        10050/TCP   53d
zabbix-server   ClusterIP   10.96.9.144      <none>        10051/TCP   55d
zabbix-web      ClusterIP   10.102.145.85    <none>        80/TCP      55d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      29d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
zabbix-web-59bf56df6b-dbt97 Init:CrashLoopBackOff
--- Description for zabbix-web-59bf56df6b-dbt97 ---
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  61s                default-scheduler  Successfully assigned zabbix/zabbix-web-59bf56df6b-dbt97 to k8-node-20
  Normal   Pulled     60s                kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 682ms (683ms including waiting). Image size: 78005565 bytes.
  Normal   Pulled     51s                kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 657ms (657ms including waiting). Image size: 78005565 bytes.
  Normal   Pulling    30s (x3 over 61s)  kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal   Created    29s (x3 over 60s)  kubelet            Created container: init-zabbix-web-branding
  Normal   Started    29s (x3 over 60s)  kubelet            Started container init-zabbix-web-branding
  Normal   Pulled     29s                kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 983ms (983ms including waiting). Image size: 78005565 bytes.
  Warning  BackOff    7s (x3 over 41s)   kubelet            Back-off restarting failed container init-zabbix-web-branding in pod zabbix-web-59bf56df6b-dbt97_zabbix(101ce08d-eab9-4cad-ab9a-69fe3e0204ac)
--- Logs for zabbix-web-59bf56df6b-dbt97 (Current) ---
Error from server (BadRequest): container "zabbix-web" in pod "zabbix-web-59bf56df6b-dbt97" is waiting to start: PodInitializing
Failed to fetch current logs
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
