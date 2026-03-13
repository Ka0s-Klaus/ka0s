Deployment Report: core/b2b/core-services/zabbix
Date: Fri Mar 13 08:31:05 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS         AGE     IP              NODE         NOMINATED NODE   READINESS GATES
zabbix-agent-6fftl               1/1     Running       5 (41h ago)      44d     192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (3d23h ago)   44d     192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       46 (3d ago)      44d     192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (3d23h ago)   36d     192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-74f5d887b5-j8nhf   1/1     Running       0                2d16h   172.16.64.148   k8-node-40   <none>           <none>
zabbix-web-55b5b55c59-r2rhw      1/1     Terminating   0                23h     172.16.64.160   k8-node-40   <none>           <none>
zabbix-web-57bc989d45-ck587      1/1     Running       0                50s     172.16.64.166   k8-node-40   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
zabbix-agent    ClusterIP   None            <none>        10050/TCP   56d
zabbix-server   ClusterIP   10.96.9.144     <none>        10051/TCP   58d
zabbix-web      ClusterIP   10.102.145.85   <none>        80/TCP      58d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      32d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
zabbix-web-55b5b55c59-r2rhw Terminating
--- Description for zabbix-web-55b5b55c59-r2rhw ---
    SizeLimit:  <unset>
  zabbix-web-branding:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      zabbix-web-branding
    Optional:  false
  kube-api-access-l6cjw:
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
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  1s    kubelet  Stopping container zabbix-web
--- Logs for zabbix-web-55b5b55c59-r2rhw (Current) ---
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:23:15 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:23:26 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:23:37 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:23:48 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:23:59 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:24:08 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 557 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:24:10 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:24:21 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:24:32 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:24:43 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:24:54 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:25:05 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:25:08 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 557 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:25:16 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:25:27 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:25:38 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:25:49 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:26:00 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:26:08 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 557 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:26:11 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:26:22 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:26:33 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:26:44 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:26:55 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:27:06 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:27:08 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 557 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:27:17 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:27:28 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:27:39 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:27:50 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:28:01 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:28:08 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 557 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:28:12 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:28:23 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:28:34 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:28:45 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:28:56 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:29:07 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:29:08 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 557 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:29:18 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:29:29 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:29:40 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:29:51 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:30:02 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:30:08 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 557 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:30:13 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:30:24 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:30:35 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:30:46 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-55b5b55c59-r2rhw/zabbix-web] 172.16.74.42 - - [13/Mar/2026:08:30:57 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
