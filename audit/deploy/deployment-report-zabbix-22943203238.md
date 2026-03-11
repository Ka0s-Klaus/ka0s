Deployment Report: core/b2b/core-services/zabbix
Date: Wed Mar 11 08:19:18 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS       AGE     IP              NODE         NOMINATED NODE   READINESS GATES
zabbix-agent-6fftl               1/1     Running       4 (9d ago)     42d     192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (47h ago)   42d     192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       46 (24h ago)   42d     192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (47h ago)   34d     192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-74f5d887b5-j8nhf   1/1     Running       0              16h     172.16.64.148   k8-node-40   <none>           <none>
zabbix-web-84b4997b5f-x6tbw      1/1     Terminating   0              9m23s   172.16.64.154   k8-node-40   <none>           <none>
zabbix-web-859684d448-hm75z      1/1     Running       0              27s     172.16.64.158   k8-node-40   <none>           <none>

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
zabbix-web-84b4997b5f-x6tbw Terminating
--- Description for zabbix-web-84b4997b5f-x6tbw ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-40
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  9m23s  default-scheduler  Successfully assigned zabbix/zabbix-web-84b4997b5f-x6tbw to k8-node-40
  Normal  Pulling    9m23s  kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     9m21s  kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.45s (1.45s including waiting). Image size: 78005565 bytes.
  Normal  Created    9m21s  kubelet            Created container: init-zabbix-web-branding
  Normal  Started    9m21s  kubelet            Started container init-zabbix-web-branding
  Normal  Pulling    8m57s  kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     8m55s  kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.452s (1.452s including waiting). Image size: 78005565 bytes.
  Normal  Created    8m55s  kubelet            Created container: zabbix-web
  Normal  Started    8m54s  kubelet            Started container zabbix-web
  Normal  Killing    1s     kubelet            Stopping container zabbix-web
--- Logs for zabbix-web-84b4997b5f-x6tbw (Current) ---
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery/LICENSE': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/jquery-ui.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/LICENSE': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.browsertab.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.scrollable.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widgets-data.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/functions.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.rpc.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.event.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.dialogue.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.sandbox.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-area.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.menu-item.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/layout.mode.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.severities.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-select.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.geomaps.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-bar-gauge.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/defines.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-color-picker.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notifications.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.expandable.subfilter.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notification.collection.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.curl.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csvggraph.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.checkbox-list.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.select.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/init.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.dashboard.page.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-box.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.coverride.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.tags.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/browsers.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-form-event.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/gtlc.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.crangecontrol.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.pattern-select.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csuggest.js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart3.php': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart4.php': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./httpdetails.php': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve times of '/work/.': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve ownership of '/work/.': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/init-zabbix-web-branding] cp: can't preserve permissions of '/work/.': Operation not permitted
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:11:43 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:11:43 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:11:45 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:11:45 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:11:46 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:11:47 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:11:48 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:03 +0000] "GET /zabbix HTTP/1.1" 404 153 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:03 +0000] "GET /zabbix HTTP/1.1" 404 153 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:03 +0000] "GET /zab HTTP/1.1" 404 153 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:03 +0000] "GET /zabbix.ph HTTP/1.1" 404 153 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:03 +0000] "GET /za HTTP/1.1" 404 153 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:03 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:04 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:04 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:04 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:04 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:04 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:05 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:05 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:05 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:17 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:17 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:12:18 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 917 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:54 +0000] "GET /zabbix.php HTTP/1.1" 200 1539 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:54 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:55 +0000] "GET /zabbix.php?action=da HTTP/1.1" 200 1539 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:55 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:55 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:55 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:55 +0000] "GET /zabbix.php?a HTTP/1.1" 200 1539 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:56 +0000] "GET /zabbix.php?action=d HTTP/1.1" 200 1539 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:56 +0000] "GET / HTTP/1.1" 200 6038 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:56 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:56 +0000] "GET /zabbix.php?actio HTTP/1.1" 200 1539 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:56 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:56 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:56 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:58 +0000] "GET /zabbix.php?action HTTP/1.1" 200 1539 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 172.16.74.56 - - [11/Mar/2026:08:13:58 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 2006 "-" "Mozilla/5.0 (compatible)" "192.168.1.10"
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 2026-03-11 08:19:18,204 WARN received SIGTERM indicating exit request
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 2026-03-11 08:19:18,204 WARN received SIGTERM indicating exit request
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 2026-03-11 08:19:18,204 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 2026-03-11 08:19:18,204 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] [11-Mar-2026 08:19:18] NOTICE: Terminating ...
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] [11-Mar-2026 08:19:18] NOTICE: exiting, bye-bye!
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 2026-03-11 08:19:18,244 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 2026-03-11 08:19:18,244 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 2026-03-11 08:19:18,277 INFO stopped: nginx (exit status 0)
[pod/zabbix-web-84b4997b5f-x6tbw/zabbix-web] 2026-03-11 08:19:18,277 INFO stopped: nginx (exit status 0)
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
