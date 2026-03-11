Deployment Report: core/b2b/core-services/zabbix
Date: Wed Mar 11 07:58:04 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS       AGE   IP              NODE         NOMINATED NODE   READINESS GATES
zabbix-agent-6fftl               1/1     Running       4 (8d ago)     42d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (47h ago)   42d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       46 (24h ago)   42d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (47h ago)   34d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-74f5d887b5-j8nhf   1/1     Running       0              16h   172.16.64.148   k8-node-40   <none>           <none>
zabbix-web-579cd6b6bb-r7c7q      1/1     Terminating   0              24m   172.16.64.149   k8-node-40   <none>           <none>
zabbix-web-9458f8d4b-plnq5       1/1     Running       0              28s   172.16.64.150   k8-node-40   <none>           <none>

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
zabbix-web-579cd6b6bb-r7c7q Terminating
--- Description for zabbix-web-579cd6b6bb-r7c7q ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-40
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  24m   default-scheduler  Successfully assigned zabbix/zabbix-web-579cd6b6bb-r7c7q to k8-node-40
  Normal  Pulling    24m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     24m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.483s (1.483s including waiting). Image size: 78005565 bytes.
  Normal  Created    24m   kubelet            Created container: init-zabbix-web-branding
  Normal  Started    24m   kubelet            Started container init-zabbix-web-branding
  Normal  Pulling    23m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     23m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.429s (1.429s including waiting). Image size: 78005565 bytes.
  Normal  Created    23m   kubelet            Created container: zabbix-web
  Normal  Started    23m   kubelet            Started container zabbix-web
  Normal  Killing    1s    kubelet            Stopping container zabbix-web
--- Logs for zabbix-web-579cd6b6bb-r7c7q (Current) ---
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery/LICENSE': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/jquery-ui.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/LICENSE': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.browsertab.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.scrollable.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widgets-data.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/functions.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.rpc.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.event.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.dialogue.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.sandbox.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-area.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.menu-item.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/layout.mode.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.severities.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-select.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.geomaps.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-bar-gauge.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/defines.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-color-picker.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notifications.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.expandable.subfilter.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notification.collection.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.curl.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csvggraph.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.checkbox-list.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.select.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/init.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.dashboard.page.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-box.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.coverride.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.tags.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/browsers.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-form-event.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/gtlc.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.crangecontrol.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.pattern-select.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csuggest.js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart3.php': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart4.php': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./httpdetails.php': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve times of '/work/.': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve ownership of '/work/.': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/init-zabbix-web-branding] cp: can't preserve permissions of '/work/.': Operation not permitted
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:10 +0000] "POST /zabbix.php?action=widget.tophosts.view HTTP/1.1" 200 7206 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:11 +0000] "POST /zabbix.php?action=widget.problemsbysv.view HTTP/1.1" 200 342169 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:11 +0000] "POST /zabbix.php?action=widget.problems.view HTTP/1.1" 200 102849 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:11 +0000] "GET /zabbix.php?action=dashboard.list HTTP/1.1" 200 5977 "http://noc.ka0s.io/zabbix.php?action=dashboard.view" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:11 +0000] "GET /jsLoader.php?ver=7.4.7&lang=en_US&files%5B0%5D=layout.mode.js&files%5B1%5D=servercheck.js&files%5B2%5D=class.software-version-check.js HTTP/1.1" 304 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:11 +0000] "GET /jsLoader.php?lang=en_US&ver=7.4.7&showGuiMessaging=1 HTTP/1.1" 304 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:11 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:14 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 571 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:15 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now HTTP/1.1" 200 10978 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:15 +0000] "GET /chart2.php?graphid=8176&width=780&height=300&legend=1&from=now-1h&to=now&resolve_macros=1&profileIdx=web.dashboard.filter&profileIdx2=414&outer=1&widget_view=1&_=xpt5lu5a&onlyHeight=1 HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:15 +0000] "GET /chart2.php?graphid=8177&width=780&height=300&legend=1&from=now-1h&to=now&resolve_macros=1&profileIdx=web.dashboard.filter&profileIdx2=414&outer=1&widget_view=1&_=xpt5lu5a&onlyHeight=1 HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:15 +0000] "GET /chart2.php?graphid=8178&width=780&height=300&legend=1&from=now-1h&to=now&resolve_macros=1&profileIdx=web.dashboard.filter&profileIdx2=414&outer=1&widget_view=1&_=xpt5lu5b&onlyHeight=1 HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:15 +0000] "POST /zabbix.php?action=widget.item.view HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:15 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:15 +0000] "GET /jsLoader.php?ver=7.4.7&lang=en_US&files%5B0%5D=d3.js&files%5B1%5D=class.cnavtree.js&files%5B2%5D=flickerfreescreen.js&files%5B3%5D=gtlc.js&files%5B4%5D=layout.mode.js&files%5B5%5D=leaflet.js&files%5B6%5D=leaflet.markercluster.js&files%5B7%5D=class.geomaps.js&files%5B8%5D=servercheck.js&files%5B9%5D=class.software-version-check.js HTTP/1.1" 304 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:15 +0000] "GET /jsLoader.php?lang=en_US&ver=7.4.7&showGuiMessaging=1 HTTP/1.1" 304 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:20 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 571 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:20 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:20 +0000] "POST /zabbix.php?action=timeselector.update&type=11 HTTP/1.1" 200 229 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:21 +0000] "POST /zabbix.php?action=widget.graph.view HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:21 +0000] "POST /zabbix.php?action=widget.graph.view HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:21 +0000] "POST /zabbix.php?action=widget.graph.view HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:21 +0000] "POST /zabbix.php?action=widget.item.view HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:21 +0000] "POST /zabbix.php?action=widget.item.view HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:21 +0000] "POST /zabbix.php?action=widget.graph.view HTTP/1.1" 499 0 "http://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=414&from=now-1h&to=now" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:21 +0000] "GET /zabbix.php?action=softwareversioncheck.get HTTP/1.1" 200 66 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:22 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 73 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:24 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:26 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:32 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:32 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 73 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:36 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:41 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:44 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 73 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:47 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:49 +0000] "POST /zabbix.php?action=dashboard.config.hash HTTP/1.1" 200 68 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:51 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:55 +0000] "POST /jsrpc.php?output=json-rpc HTTP/1.1" 200 73 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:57:56 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 172.16.74.56 - - [11/Mar/2026:07:58:02 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 558 "http://noc.ka0s.io/zabbix.php?action=dashboard.list" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 2026-03-11 07:58:05,015 WARN received SIGTERM indicating exit request
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 2026-03-11 07:58:05,015 WARN received SIGTERM indicating exit request
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 2026-03-11 07:58:05,016 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 2026-03-11 07:58:05,016 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] [11-Mar-2026 07:58:05] NOTICE: Terminating ...
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] [11-Mar-2026 07:58:05] NOTICE: exiting, bye-bye!
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 2026-03-11 07:58:05,093 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 2026-03-11 07:58:05,093 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 2026-03-11 07:58:05,123 INFO stopped: nginx (exit status 0)
[pod/zabbix-web-579cd6b6bb-r7c7q/zabbix-web] 2026-03-11 07:58:05,123 INFO stopped: nginx (exit status 0)
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
