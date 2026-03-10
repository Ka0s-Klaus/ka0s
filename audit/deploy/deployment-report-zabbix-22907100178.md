Deployment Report: core/b2b/core-services/zabbix
Date: Tue Mar 10 14:20:52 UTC 2026
Trigger: push by asantacana1970
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS         AGE   IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running       7 (8d ago)       55d   172.16.74.6     k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running       4 (8d ago)       41d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (29h ago)     41d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       46 (6h25m ago)   41d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (29h ago)     33d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-4gs8k   1/1     Running       0                8s    172.16.74.9     k8-manager   <none>           <none>
zabbix-web-859dbc8d55-lrs9h      1/1     Running       0                8s    172.16.209.36   k8-node-20   <none>           <none>
zabbix-web-d9665bc-thsrl         1/1     Terminating   0                37m   172.16.64.145   k8-node-40   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
postgresql      ClusterIP   10.102.133.214   <none>        5432/TCP    55d
zabbix-agent    ClusterIP   None             <none>        10050/TCP   53d
zabbix-server   ClusterIP   10.96.9.144      <none>        10051/TCP   55d
zabbix-web      ClusterIP   10.102.145.85    <none>        80/TCP      55d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      30d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
zabbix-web-d9665bc-thsrl Terminating
--- Description for zabbix-web-d9665bc-thsrl ---
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
  Normal  Scheduled  37m   default-scheduler  Successfully assigned zabbix/zabbix-web-d9665bc-thsrl to k8-node-40
  Normal  Pulling    37m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     37m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 2.157s (3.651s including waiting). Image size: 78005565 bytes.
  Normal  Created    37m   kubelet            Created container: init-zabbix-web-branding
  Normal  Started    37m   kubelet            Started container init-zabbix-web-branding
  Normal  Pulling    36m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     36m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.404s (1.404s including waiting). Image size: 78005565 bytes.
  Normal  Created    36m   kubelet            Created container: zabbix-web
  Normal  Started    36m   kubelet            Started container zabbix-web
  Normal  Killing    1s    kubelet            Stopping container zabbix-web
--- Logs for zabbix-web-d9665bc-thsrl (Current) ---
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery/LICENSE': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/jquery-ui.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/LICENSE': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.browsertab.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.scrollable.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widgets-data.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/functions.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.rpc.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.event.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.dialogue.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.sandbox.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-area.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.menu-item.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/layout.mode.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.severities.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-select.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.geomaps.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-bar-gauge.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/defines.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-color-picker.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notifications.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.expandable.subfilter.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notification.collection.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.curl.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csvggraph.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.checkbox-list.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.select.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/init.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.dashboard.page.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-box.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.coverride.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.tags.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/browsers.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-form-event.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/gtlc.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.crangecontrol.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.pattern-select.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csuggest.js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart3.php': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart4.php': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./httpdetails.php': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve times of '/work/.': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve ownership of '/work/.': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/init-zabbix-web-branding] cp: can't preserve permissions of '/work/.': Operation not permitted
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:00 +0000] "POST /zabbix.php?action=widget.problems.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:01 +0000] "POST /zabbix.php?action=widget.item.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:01 +0000] "POST /zabbix.php?action=widget.tophosts.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:01 +0000] "POST /zabbix.php?action=widget.clock.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:01 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:01 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:02 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:02 +0000] "POST /zabbix.php?action=widget.systeminfo.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:02 +0000] "POST /zabbix.php?action=widget.geomap.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:02 +0000] "POST /zabbix.php?action=widget.problemsbysv.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:03 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:03 +0000] "POST /zabbix.php?action=widget.hostavail.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:03 +0000] "POST /zabbix.php?action=widget.svggraph.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:03 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:04 +0000] "POST /zabbix.php?action=widget.problems.view HTTP/1.1" 200 705 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:05 +0000] "POST /zabbix.php?action=widget.tophosts.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:05 +0000] "POST /zabbix.php?action=widget.item.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:05 +0000] "POST /zabbix.php?action=widget.clock.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:05 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:06 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:06 +0000] "POST /zabbix.php?action=widget.systeminfo.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:06 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:06 +0000] "POST /zabbix.php?action=widget.problemsbysv.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:06 +0000] "POST /zabbix.php?action=widget.geomap.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:06 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 282 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:07 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:07 +0000] "POST /zabbix.php?action=widget.hostavail.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:07 +0000] "POST /zabbix.php?action=widget.svggraph.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:07 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:07 +0000] "POST /zabbix.php?action=widget.problems.view HTTP/1.1" 200 47 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:10 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 282 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:15 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 282 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:17 +0000] "GET /zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now HTTP/1.1" 200 915 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:17 +0000] "GET /assets/styles/blue-theme.css?1773150263 HTTP/1.1" 200 50055 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:21 +0000] "GET /index.php?request=zabbix.php%3Faction%3Ddashboard.view%26dashboardid%3D1%26from%3Dnow-5m%26to%3Dnow HTTP/1.1" 200 2170 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:21 +0000] "GET /assets/img/touch-icon-192x192.png HTTP/1.1" 200 1334 "https://noc.ka0s.io/index.php?request=zabbix.php%3Faction%3Ddashboard.view%26dashboardid%3D1%26from%3Dnow-5m%26to%3Dnow" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:32 +0000] "POST /index.php HTTP/1.1" 200 2219 "https://noc.ka0s.io/index.php?request=zabbix.php%3Faction%3Ddashboard.view%26dashboardid%3D1%26from%3Dnow-5m%26to%3Dnow" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:36 +0000] "GET / HTTP/1.1" 200 2103 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:37 +0000] "GET /assets/styles/blue-theme.css?1773150263 HTTP/1.1" 200 50055 "http://noc.ka0s.io/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 172.16.74.56 - - [10/Mar/2026:14:20:51 +0000] "POST /index.php HTTP/1.1" 200 2152 "http://noc.ka0s.io/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" "192.168.1.10"
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 2026-03-10 14:20:51,949 WARN received SIGTERM indicating exit request
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 2026-03-10 14:20:51,949 WARN received SIGTERM indicating exit request
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 2026-03-10 14:20:51,950 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 2026-03-10 14:20:51,950 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] [10-Mar-2026 14:20:51] NOTICE: Terminating ...
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] [10-Mar-2026 14:20:51] NOTICE: exiting, bye-bye!
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 2026-03-10 14:20:52,062 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 2026-03-10 14:20:52,062 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 2026-03-10 14:20:52,105 INFO stopped: nginx (exit status 0)
[pod/zabbix-web-d9665bc-thsrl/zabbix-web] 2026-03-10 14:20:52,105 INFO stopped: nginx (exit status 0)
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
