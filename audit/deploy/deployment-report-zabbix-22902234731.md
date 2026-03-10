Deployment Report: core/b2b/core-services/zabbix
Date: Tue Mar 10 12:23:16 UTC 2026
Trigger: push by asantacana1970
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS        RESTARTS         AGE   IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running       7 (8d ago)       55d   172.16.74.6     k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running       4 (8d ago)       41d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running       22 (27h ago)     41d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running       46 (4h27m ago)   41d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running       28 (27h ago)     33d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-w9k54   1/1     Running       0                7s    172.16.74.25    k8-manager   <none>           <none>
zabbix-web-859dbc8d55-n7ngn      1/1     Running       0                7s    172.16.209.22   k8-node-20   <none>           <none>
zabbix-web-cf6f48b78-gjrnc       1/1     Terminating   0                16m   172.16.64.142   k8-node-40   <none>           <none>

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
zabbix-web-cf6f48b78-gjrnc Terminating
--- Description for zabbix-web-cf6f48b78-gjrnc ---
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
  Normal  Scheduled  16m   default-scheduler  Successfully assigned zabbix/zabbix-web-cf6f48b78-gjrnc to k8-node-40
  Normal  Pulling    16m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     16m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.448s (1.448s including waiting). Image size: 78005565 bytes.
  Normal  Created    16m   kubelet            Created container: init-zabbix-web-branding
  Normal  Started    16m   kubelet            Started container init-zabbix-web-branding
  Normal  Pulling    16m   kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal  Pulled     16m   kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.382s (6.533s including waiting). Image size: 78005565 bytes.
  Normal  Created    16m   kubelet            Created container: zabbix-web
  Normal  Started    16m   kubelet            Started container zabbix-web
  Normal  Killing    1s    kubelet            Stopping container zabbix-web
--- Logs for zabbix-web-cf6f48b78-gjrnc (Current) ---
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery/LICENSE': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/jquery-ui.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/LICENSE': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.browsertab.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.scrollable.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widgets-data.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/functions.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.rpc.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.event.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.dialogue.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.sandbox.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-area.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.menu-item.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/layout.mode.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.severities.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-select.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.geomaps.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-bar-gauge.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/defines.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-color-picker.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notifications.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.expandable.subfilter.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notification.collection.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.curl.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csvggraph.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.checkbox-list.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.select.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/init.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.dashboard.page.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-box.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.coverride.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.tags.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/browsers.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-form-event.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/gtlc.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.crangecontrol.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.pattern-select.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csuggest.js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart3.php': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart4.php': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./httpdetails.php': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve times of '/work/.': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve ownership of '/work/.': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/init-zabbix-web-branding] cp: can't preserve permissions of '/work/.': Operation not permitted
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:17 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 190 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:17 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 188 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:18 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:18 +0000] "POST /zabbix.php?action=widget.tophosts.view HTTP/1.1" 200 7238 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:18 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 181 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:18 +0000] "POST /zabbix.php?action=widget.problems.view HTTP/1.1" 200 102858 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:18 +0000] "POST /zabbix.php?action=widget.problemsbysv.view HTTP/1.1" 200 342186 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:21 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:26 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:31 +0000] "POST /zabbix.php?action=dashboard.config.hash HTTP/1.1" 200 68 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:31 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:36 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:41 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:43 +0000] "POST /zabbix.php?action=widget.svggraph.view HTTP/1.1" 200 6653 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:46 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:51 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:22:56 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:01 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:06 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:11 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 200 561 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 189 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 200 189 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026-03-10 12:23:16,697 WARN received SIGTERM indicating exit request
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026-03-10 12:23:16,697 WARN received SIGTERM indicating exit request
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026-03-10 12:23:16,697 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026-03-10 12:23:16,697 INFO waiting for nginx, php-fpm84 to die
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] [10-Mar-2026 12:23:16] NOTICE: Terminating ...
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026/03/10 12:23:16 [error] 28#28: *13 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=notifications.get&output=ajax HTTP/1.1" 502 157 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026/03/10 12:23:16 [error] 28#28: *12 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /zabbix.php?action=widget.tophosts.view HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.tophosts.view HTTP/1.1" 502 157 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026/03/10 12:23:16 [error] 28#28: *19 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /zabbix.php?action=widget.item.view HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.item.view HTTP/1.1" 502 157 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026/03/10 12:23:16 [error] 27#27: *334 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /zabbix.php?action=widget.problems.view HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.problems.view HTTP/1.1" 502 157 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026/03/10 12:23:16 [error] 28#28: *15 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /zabbix.php?action=widget.geomap.view HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.geomap.view HTTP/1.1" 502 157 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026/03/10 12:23:16 [error] 27#27: *126 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /zabbix.php?action=widget.gauge.view HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026/03/10 12:23:16 [error] 28#28: *21 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /zabbix.php?action=widget.problemsbysv.view HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.problemsbysv.view HTTP/1.1" 502 157 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 502 157 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026/03/10 12:23:16 [error] 27#27: *260 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /zabbix.php?action=widget.gauge.view HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 502 157 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026/03/10 12:23:16 [error] 30#30: *8 recv() failed (104: Connection reset by peer) while reading response header from upstream, client: 172.16.74.56, server: zabbix, request: "POST /zabbix.php?action=widget.gauge.view HTTP/1.1", upstream: "fastcgi://unix:/tmp/php-fpm.sock:", host: "noc.ka0s.io", referrer: "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 172.16.74.56 - - [10/Mar/2026:12:23:16 +0000] "POST /zabbix.php?action=widget.gauge.view HTTP/1.1" 502 157 "https://noc.ka0s.io/zabbix.php?action=dashboard.view&dashboardid=1&from=now-5m&to=now" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15" "192.168.1.10"
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] [10-Mar-2026 12:23:16] NOTICE: exiting, bye-bye!
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026-03-10 12:23:16,818 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026-03-10 12:23:16,818 INFO stopped: php-fpm84 (exit status 0)
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026-03-10 12:23:16,850 INFO stopped: nginx (exit status 0)
[pod/zabbix-web-cf6f48b78-gjrnc/zabbix-web] 2026-03-10 12:23:16,850 INFO stopped: nginx (exit status 0)
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
