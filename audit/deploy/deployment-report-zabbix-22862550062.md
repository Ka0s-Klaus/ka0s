Deployment Report: core/b2b/core-services/zabbix
Date: Mon Mar  9 16:07:13 UTC 2026
Trigger: push by asantacana1970
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS         AGE     IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running       7 (7d8h ago)     54d     172.16.74.6     k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running       4 (7d8h ago)     40d     192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (7h32m ago)   40d     192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       45 (21d ago)     40d     192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (7h30m ago)   32d     192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running       5 (7d8h ago)     33d     172.16.74.62    k8-manager   <none>           <none>
zabbix-web-6549d84c95-cnm6r      1/1     Running       0                18s     172.16.209.50   k8-node-20   <none>           <none>
zabbix-web-859dbc8d55-827h7      1/1     Terminating   0                4h47m   172.16.209.29   k8-node-20   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
postgresql      ClusterIP   10.102.133.214   <none>        5432/TCP    54d
zabbix-agent    ClusterIP   None             <none>        10050/TCP   53d
zabbix-server   ClusterIP   10.96.9.144      <none>        10051/TCP   54d
zabbix-web      ClusterIP   10.102.145.85    <none>        80/TCP      54d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      29d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
zabbix-web-859dbc8d55-827h7 Terminating
--- Description for zabbix-web-859dbc8d55-827h7 ---
    Medium:     
    SizeLimit:  <unset>
  zabbix-web-branding:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      zabbix-web-branding
    Optional:  false
  kube-api-access-27257:
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
  Normal  Killing  1s    kubelet  Stopping container zabbix-web
--- Logs for zabbix-web-859dbc8d55-827h7 (Current) ---
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/kk': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/tr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/tr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/tr': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sk/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sk/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sk': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/vi/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/vi/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/vi': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/en_GB/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/en_GB/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/en_GB': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/pt_BR/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/pt_BR/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/pt_BR': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/da/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/da/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/da': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/nb_NO/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/nb_NO/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/nb_NO': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/hr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/hr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/hr': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fr': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/README': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fa/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fa/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fa': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/ja/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/ja/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/ja': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sr': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/lv/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/lv/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/lv': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sv_SE/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sv_SE/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sv_SE': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./imgstore.php': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./host_prototypes.php': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve times of '/work/.': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve ownership of '/work/.': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/init-zabbix-web-branding] cp: can't preserve permissions of '/work/.': Operation not permitted
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:04:50 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:04:52 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:04:53 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:04:57 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:01 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:04 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:08 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:12 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:15 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:19 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:23 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:26 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:30 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:34 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:37 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:41 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:45 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:48 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:52 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:52 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:56 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:05:59 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:03 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:07 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:10 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:14 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:18 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:21 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:25 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:29 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:32 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:36 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:40 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:43 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:47 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:51 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:52 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:54 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:06:58 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:07:02 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:07:05 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 75 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:07:09 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 76 "http://noc.ka0s.io/zabbix.php?action=mediatype.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 2026-03-09 16:07:13,252 WARN received SIGTERM indicating exit request
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 2026-03-09 16:07:13,252 WARN received SIGTERM indicating exit request
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 2026-03-09 16:07:13,252 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 2026-03-09 16:07:13,252 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] [09-Mar-2026 16:07:13] NOTICE: Terminating ...
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 2026/03/09 16:07:13 [error] 28#28: *4401 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /jsrpc.php?output=json-rpc HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "http://noc.ka0s.io/zabbix.php?action=dashboard.list"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] 172.16.74.56 - - [09/Mar/2026:16:07:13 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 502 559 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-827h7/zabbix-web] [09-Mar-2026 16:07:13] NOTICE: exiting, bye-bye!
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
