Deployment Report: core/b2b/core-services/zabbix
Date: Mon Mar  9 10:21:58 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running       7 (7d2h ago)    54d     172.16.74.6     k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running       4 (7d2h ago)    40d     192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (107m ago)   40d     192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       45 (21d ago)    40d     192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (105m ago)   32d     192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running       5 (7d2h ago)    32d     172.16.74.62    k8-manager   <none>           <none>
zabbix-web-75c4645cb4-wspw7      1/1     Running       0               5s      172.16.209.6    k8-node-20   <none>           <none>
zabbix-web-77c4b56ff4-87jj5      1/1     Terminating   1 (107m ago)    2d23h   172.16.209.13   k8-node-20   <none>           <none>

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
zabbix-web-77c4b56ff4-87jj5 Terminating
--- Description for zabbix-web-77c4b56ff4-87jj5 ---
  PodScheduled                True 
Volumes:
  zabbix-web-branding:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      zabbix-web-branding
    Optional:  false
  kube-api-access-j8vbh:
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
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  0s    kubelet  Stopping container zabbix-web
--- Logs for zabbix-web-77c4b56ff4-87jj5 (Current) ---
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:09 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:13 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:14 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:19 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:24 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:24 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:29 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:34 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:35 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:39 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:44 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:46 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:49 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:54 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:57 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:18:59 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:04 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:08 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:09 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:14 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:19 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:19 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:24 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:30 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:41 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:51 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:19:52 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:20:03 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:20:14 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:20:25 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:20:36 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:20:47 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:20:51 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:20:58 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:21:09 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:21:20 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:21:31 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:21:42 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:21:51 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 172.16.74.56 - - [09/Mar/2026:10:21:53 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 2026-03-09 10:21:58,605 WARN received SIGTERM indicating exit request
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 2026-03-09 10:21:58,605 WARN received SIGTERM indicating exit request
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 2026-03-09 10:21:58,606 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 2026-03-09 10:21:58,606 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] [09-Mar-2026 10:21:58] NOTICE: Terminating ...
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] [09-Mar-2026 10:21:58] NOTICE: exiting, bye-bye!
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 2026-03-09 10:21:58,661 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 2026-03-09 10:21:58,661 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 2026-03-09 10:21:58,683 INFO stopped: nginx (exit status 0)
[pod/zabbix-web-77c4b56ff4-87jj5/zabbix-web] 2026-03-09 10:21:58,683 INFO stopped: nginx (exit status 0)
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
