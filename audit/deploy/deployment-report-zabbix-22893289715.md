Deployment Report: core/b2b/core-services/zabbix
Date: Tue Mar 10 08:19:29 UTC 2026
Trigger: push by jh0ny2k2
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS     RESTARTS       AGE   IP              NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running    7 (8d ago)     55d   172.16.74.6     k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running    4 (8d ago)     41d   192.168.1.10    k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running    22 (23h ago)   41d   192.168.1.20    k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running    46 (23m ago)   41d   192.168.1.30    k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running    28 (23h ago)   33d   192.168.1.40    k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running    5 (8d ago)     33d   172.16.74.62    k8-manager   <none>           <none>
zabbix-web-6549d84c95-cnm6r      1/1     Running    0              16h   172.16.209.50   k8-node-20   <none>           <none>
zabbix-web-68c556475c-9qr66      0/1     Init:0/1   2 (21s ago)    61s   172.16.64.182   k8-node-40   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
postgresql      ClusterIP   10.102.133.214   <none>        5432/TCP    55d
zabbix-agent    ClusterIP   None             <none>        10050/TCP   53d
zabbix-server   ClusterIP   10.96.9.144      <none>        10051/TCP   55d
zabbix-web      ClusterIP   10.102.145.85    <none>        80/TCP      55d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      29d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
zabbix-web-68c556475c-9qr66 Init:0/1
--- Description for zabbix-web-68c556475c-9qr66 ---
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
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  61s                default-scheduler  Successfully assigned zabbix/zabbix-web-68c556475c-9qr66 to k8-node-40
  Normal   Pulled     45s                kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 15.18s (15.18s including waiting). Image size: 78005565 bytes.
  Normal   Pulled     32s                kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.354s (1.354s including waiting). Image size: 78005565 bytes.
  Warning  BackOff    20s                kubelet            Back-off restarting failed container init-zabbix-web-branding in pod zabbix-web-68c556475c-9qr66_zabbix(5c3ebc24-37d1-4e54-b67b-8aec97accb3d)
  Normal   Pulling    10s (x3 over 60s)  kubelet            Pulling image "zabbix/zabbix-web-nginx-pgsql:latest"
  Normal   Created    8s (x3 over 44s)   kubelet            Created container: init-zabbix-web-branding
  Normal   Started    8s (x3 over 44s)   kubelet            Started container init-zabbix-web-branding
  Normal   Pulled     8s                 kubelet            Successfully pulled image "zabbix/zabbix-web-nginx-pgsql:latest" in 1.325s (1.325s including waiting). Image size: 78005565 bytes.
--- Logs for zabbix-web-68c556475c-9qr66 (Current) ---
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery/LICENSE': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQuery': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/jquery-ui.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI/LICENSE': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors/jQueryUI': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/vendors': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.browsertab.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.scrollable.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widgets-data.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/functions.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.rpc.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.event.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.dialogue.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-edit.sandbox.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-area.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.menu-item.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/layout.mode.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.severities.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-select.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.geomaps.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-bar-gauge.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.event-hub.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/defines.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/component.z-color-picker.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notifications.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.expandable.subfilter.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.notification.collection.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.curl.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csvggraph.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.checkbox-list.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.select.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/init.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.dashboard.page.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.text-box.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.coverride.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.tags.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/browsers.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-form-event.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/gtlc.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.crangecontrol.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.widget-field.pattern-select.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js/class.csuggest.js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./js': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart3.php': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./chart4.php': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/./httpdetails.php': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve times of '/work/.': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve ownership of '/work/.': Operation not permitted
[pod/zabbix-web-68c556475c-9qr66/init-zabbix-web-branding] cp: can't preserve permissions of '/work/.': Operation not permitted
Error from server (BadRequest): container "zabbix-web" in pod "zabbix-web-68c556475c-9qr66" is waiting to start: PodInitializing
Failed to fetch current logs
--> Checking Endpoints for Service zabbix...
ℹ️  Service 'zabbix' not found in namespace 'zabbix'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
