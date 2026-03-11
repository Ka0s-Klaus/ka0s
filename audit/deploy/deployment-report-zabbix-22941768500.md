Deployment Report: core/b2b/core-services/zabbix
Date: Wed Mar 11 07:34:26 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS       AGE   IP              NODE         NOMINATED NODE   READINESS GATES
zabbix-agent-6fftl               1/1     Running       4 (8d ago)     42d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (46h ago)   42d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       46 (23h ago)   42d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (46h ago)   34d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-74f5d887b5-j8nhf   1/1     Running       0              16h   172.16.64.148   k8-node-40   <none>           <none>
zabbix-web-579cd6b6bb-r7c7q      1/1     Running       0              30s   172.16.64.149   k8-node-40   <none>           <none>
zabbix-web-6455cd665-svk5s       1/1     Terminating   0              16h   172.16.64.128   k8-node-40   <none>           <none>

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
zabbix-web-6455cd665-svk5s Terminating
--- Description for zabbix-web-6455cd665-svk5s ---
    SizeLimit:  <unset>
  zabbix-web-branding:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      zabbix-web-branding
    Optional:  false
  kube-api-access-p4t59:
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
--- Logs for zabbix-web-6455cd665-svk5s (Current) ---
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery/LICENSE': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/jquery-ui.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/LICENSE': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.browsertab.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.scrollable.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widgets-data.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/functions.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.rpc.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.event.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.dialogue.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.sandbox.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-area.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.menu-item.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/layout.mode.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.severities.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-select.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.geomaps.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-bar-gauge.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/defines.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-color-picker.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notifications.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.expandable.subfilter.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notification.collection.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.curl.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csvggraph.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.checkbox-list.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.select.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/init.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.dashboard.page.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-box.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.coverride.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.tags.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/browsers.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-form-event.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/gtlc.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.crangecontrol.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.pattern-select.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csuggest.js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart3.php': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart4.php': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./httpdetails.php': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve times of '/work/.': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve ownership of '/work/.': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/init-zabbix-web-branding] cp: can't preserve permissions of '/work/.': Operation not permitted
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:13 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:13 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:13 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:13 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:14 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:19 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:19 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:23 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:24 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:24 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:29 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:31 +0000] "POST /zabbix.php?action=profile.update&output=ajax HTTP/1.1" 200 5 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:34 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:34 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:34 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:39 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:43 +0000] "GET /zabbix.php?action=dashboard.list HTTP/1.1" 200 5977 "http://noc.ka0s.io/zabbix.php?action=dashboard.view" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:43 +0000] "GET /jsLoader.php?ver=7.4.7&lang=en_US&files%5B0%5D=layout.mode.js&files%5B1%5D=servercheck.js&files%5B2%5D=class.software-version-check.js HTTP/1.1" 304 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:43 +0000] "GET /jsLoader.php?lang=en_US&ver=7.4.7&showGuiMessaging=1 HTTP/1.1" 304 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:43 +0000] "GET /favicon.ico HTTP/1.1" 304 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:43 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:45 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:49 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:49 +0000] "GET /zabbix.php?action=softwareversioncheck.get HTTP/1.1" 200 64 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:49 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 73 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:53 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:54 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:55 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:58 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:33:59 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 73 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:00 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:03 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:06 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:08 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:10 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 73 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:13 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:17 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 74 "https://noc.ka0s.io/zabbix.php?action=user.list" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:18 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:21 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 73 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:34:23 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 2026-03-11 07:34:26,851 WARN received SIGTERM indicating exit request
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 2026-03-11 07:34:26,851 WARN received SIGTERM indicating exit request
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 2026-03-11 07:34:26,852 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 2026-03-11 07:34:26,852 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] [11-Mar-2026 07:34:26] NOTICE: Terminating ...
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] [11-Mar-2026 07:34:26] NOTICE: exiting, bye-bye!
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 2026-03-11 07:34:26,965 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 2026-03-11 07:34:26,965 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 2026-03-11 07:34:27,002 INFO stopped: nginx (exit status 0)
[pod/zabbix-web-6455cd665-svk5s/zabbix-web] 2026-03-11 07:34:27,002 INFO stopped: nginx (exit status 0)
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
