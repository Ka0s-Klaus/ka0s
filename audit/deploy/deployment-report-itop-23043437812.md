Deployment Report: core/b2b/core-services/itop
Date: Fri Mar 13 09:01:53 UTC 2026
Trigger: push by jh0ny2k2
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                    READY   STATUS        RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
itop-5b7bb7447d-l6qds   0/1     Terminating   0          22h   172.16.209.52   k8-node-20   <none>           <none>

>>> Services Status:
NAME   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
itop   ClusterIP   10.103.185.4   <none>        80/TCP    35d

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS     AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80, 443   32d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
itop-5b7bb7447d-l6qds Terminating
--- Description for itop-5b7bb7447d-l6qds ---
    ReadOnly:   false
  itop-web-branding:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      itop-web-branding-m95mhdthm6
    Optional:  false
  kube-api-access-lk4kl:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age               From     Message
  ----     ------     ----              ----     -------
  Normal   Killing    61s               kubelet  Stopping container itop
  Warning  Unhealthy  6s (x6 over 56s)  kubelet  Readiness probe failed: dial tcp 172.16.209.52:80: connect: connection refused
--- Logs for itop-5b7bb7447d-l6qds (Current) ---
[pod/itop-5b7bb7447d-l6qds/init-itop-files] Config file exists, preserving configuration...
[pod/itop-5b7bb7447d-l6qds/init-itop-files] cp: cannot stat '/var/www/html/env-production': No such file or directory
[pod/itop-5b7bb7447d-l6qds/init-itop-files] Setting correct app_root_url in config-itop.php...
[pod/itop-5b7bb7447d-l6qds/init-itop-files] Applying custom branding...
[pod/itop-5b7bb7447d-l6qds/init-itop-files] sed: no input files
[pod/itop-5b7bb7447d-l6qds/init-itop-files] sed: no input files
[pod/itop-5b7bb7447d-l6qds/init-itop-files] sed: no input files
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:47:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:48:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:48:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:49:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:49:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:50:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:50:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:51:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:51:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:52:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:52:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:53:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:53:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:54:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:54:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:55:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:55:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:56:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:56:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:57:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:57:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletSummary HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletList HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletCount&style=count HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletSummary HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletSummary HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletSummary HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletCount&style=count HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletCount&style=count HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletCount&style=count HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php? HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletCount&style=count HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:13 +0000] "POST /pages/ajax.render.php?operation=refreshDashletCount&style=count HTTP/1.1" 401 286 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:15 +0000] "GET /pages/UI.php?login_again=1773392295149 HTTP/1.1" 200 2565 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:15 +0000] "GET /css/font-awesome/images/custom_logo.png HTTP/1.1" 404 357 "https://itsm.ka0s.io/pages/UI.php?login_again=1773392295149" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:58:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:58:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:23 +0000] "POST /pages/UI.php?login_again=1773392295149 HTTP/1.1" 307 318 "https://itsm.ka0s.io/pages/UI.php?login_again=1773392295149" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:23 +0000] "POST /pages/UI.php HTTP/1.1" 200 47167 "https://itsm.ka0s.io/pages/UI.php?login_again=1773392295149" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:24 +0000] "POST /pages/ajax.render.php HTTP/1.1" 200 974 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.74.42 - - [13/Mar/2026:08:58:25 +0000] "GET /pages/UI.php?route=itopnewsroom.fetch_unread_messages&callback=jQuery37108367606028703675_1773392304360&_=1773392304362 HTTP/1.1" 200 301 "https://itsm.ka0s.io/pages/UI.php" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3.1 Safari/605.1.15"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:59:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:08:59:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:09:00:20 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] [apache-access] 172.16.64.148 - - [13/Mar/2026:09:00:21 +0000] "GET /webservices/rest.php HTTP/1.1" 200 421 "-" "-"
[pod/itop-5b7bb7447d-l6qds/itop] *** Shutting down runit daemon (PID 24)...
[pod/itop-5b7bb7447d-l6qds/itop] *** Running /etc/my_init.post_shutdown.d/10_syslog-ng.shutdown...
[pod/itop-5b7bb7447d-l6qds/itop] Mar 13 09:00:57 itop-5b7bb7447d-l6qds syslog-ng[14]: syslog-ng shutting down; version='4.3.1'
[pod/itop-5b7bb7447d-l6qds/itop] *** Init system aborted.
[pod/itop-5b7bb7447d-l6qds/itop] *** Killing all processes...
--> Checking Endpoints for Service itop...
WARNING: Service itop has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
