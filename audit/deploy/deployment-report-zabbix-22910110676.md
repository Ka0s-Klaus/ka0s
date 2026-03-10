Deployment Report: core/b2b/core-services/zabbix
Date: Tue Mar 10 15:26:33 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS         AGE   IP              NODE         NOMINATED NODE   READINESS GATES
zabbix-agent-6fftl               1/1     Running       4 (8d ago)       41d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (30h ago)     41d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       46 (7h30m ago)   41d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (30h ago)     33d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-56ns5   1/1     Running       0                30m   172.16.74.18    k8-manager   <none>           <none>
zabbix-web-557974c4b9-nwlsl      1/1     Running       0                7s    172.16.209.51   k8-node-20   <none>           <none>
zabbix-web-859dbc8d55-lrs9h      1/1     Terminating   0                65m   172.16.209.36   k8-node-20   <none>           <none>

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
zabbix-web-859dbc8d55-lrs9h Terminating
--- Description for zabbix-web-859dbc8d55-lrs9h ---
    Medium:     
    SizeLimit:  <unset>
  zabbix-web-branding:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      zabbix-web-branding
    Optional:  false
  kube-api-access-pfl9z:
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
--- Logs for zabbix-web-859dbc8d55-lrs9h (Current) ---
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/kk': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/tr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/tr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/tr': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sk/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sk/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sk': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/vi/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/vi/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/vi': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/en_GB/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/en_GB/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/en_GB': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/pt_BR/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/pt_BR/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/pt_BR': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/da/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/da/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/da': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/nb_NO/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/nb_NO/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/nb_NO': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/hr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/hr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/hr': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fr': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/README': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fa/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fa/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/fa': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/ja/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/ja/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/ja': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sr/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sr/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sr': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/lv/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/lv/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/lv': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sv_SE/LC_MESSAGES/frontend.mo': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sv_SE/LC_MESSAGES': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale/sv_SE': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./locale': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./imgstore.php': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./host_prototypes.php': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve times of '/work/.': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve ownership of '/work/.': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/init-zabbix-web-branding] cp: can't preserve permissions of '/work/.': Operation not permitted
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:24:54 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 73 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:24:55 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:00 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:05 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:05 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:12 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:15 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:20 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.tophosts.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.problemsbysv.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=dashboard.config.hash HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.geomap.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.svggraph.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.clock.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.item.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.systeminfo.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.problems.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:23 +0000] "POST /zabbix.php?action=widget.hostavail.view HTTP/1.1" 200 702 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:25 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:26 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 702 "https://noc.ka0s.io/index.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:30 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:35 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:40 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:44 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:50 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:25:55 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:26:00 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:26:05 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:26:10 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:26:15 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:26:20 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:26:25 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 172.16.74.56 - - [10/Mar/2026:15:26:30 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 702 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 2026-03-10 15:26:33,565 WARN received SIGTERM indicating exit request
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 2026-03-10 15:26:33,565 WARN received SIGTERM indicating exit request
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 2026-03-10 15:26:33,566 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 2026-03-10 15:26:33,566 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] [10-Mar-2026 15:26:33] NOTICE: Terminating ...
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] [10-Mar-2026 15:26:33] NOTICE: exiting, bye-bye!
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 2026-03-10 15:26:33,603 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 2026-03-10 15:26:33,603 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 2026-03-10 15:26:33,620 INFO stopped: nginx (exit status 0)
[pod/zabbix-web-859dbc8d55-lrs9h/zabbix-web] 2026-03-10 15:26:33,620 INFO stopped: nginx (exit status 0)
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
