Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 15:45:23 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS         AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running            0                58s   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running            0                58s   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running            0                58s   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  0/2     PodInitializing    0                56s   192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-2bvkc      0/1     Init:1/2           0                62s   172.16.74.45    k8-manager   <none>           <none>
wazuh-dashboard-58ccf49468-pct2c   0/1     CrashLoopBackOff   15 (3m36s ago)   56m   172.16.209.23   k8-node-20   <none>           <none>
wazuh-indexer-0                    1/1     Running            0                10m   172.16.209.9    k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     1/1     Running            0                56m   172.16.209.7    k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      3h19m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             3h19m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   3h19m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   3h19m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-jd2pk PodInitializing
wazuh-cert-generator-v7-2bvkc Init:1/2
wazuh-dashboard-58ccf49468-pct2c CrashLoopBackOff
--- Description for wazuh-agent-jd2pk ---
Tolerations:                 node.kubernetes.io/disk-pressure:NoSchedule op=Exists
                             node.kubernetes.io/memory-pressure:NoSchedule op=Exists
                             node.kubernetes.io/network-unavailable:NoSchedule op=Exists
                             node.kubernetes.io/not-ready:NoExecute op=Exists
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  61s   default-scheduler  Successfully assigned soc/wazuh-agent-jd2pk to k8-node-30
  Normal  Pulling    52s   kubelet            Pulling image "busybox"
  Normal  Pulled     41s   kubelet            Successfully pulled image "busybox" in 11.357s (11.357s including waiting). Image size: 2222260 bytes.
  Normal  Created    37s   kubelet            Created container: config-init
  Normal  Started    36s   kubelet            Started container config-init
  Normal  Pulling    27s   kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal  Pulled     14s   kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 12.61s (12.61s including waiting). Image size: 74848715 bytes.
  Normal  Created    8s    kubelet            Created container: wazuh-agent
  Normal  Started    2s    kubelet            Started container wazuh-agent
  Normal  Pulling    3s    kubelet            Pulling image "jasonish/suricata:latest"
--- Logs for wazuh-agent-jd2pk (Current) ---
[pod/wazuh-agent-jd2pk/config-init] Detecting interface...
[pod/wazuh-agent-jd2pk/config-init] Detected interface: enp0s25
[pod/wazuh-agent-jd2pk/config-init] Generating Suricata config...
[pod/wazuh-agent-jd2pk/config-init] Config verification:
[pod/wazuh-agent-jd2pk/config-init]   - interface: enp0s25
Error from server (BadRequest): container "wazuh-agent" in pod "wazuh-agent-jd2pk" is waiting to start: PodInitializing
Failed to fetch current logs
--- Logs for wazuh-agent-jd2pk (Previous) ---
Error from server (BadRequest): previous terminated container "config-init" in pod "wazuh-agent-jd2pk" not found
Failed to fetch previous logs
--- Description for wazuh-cert-generator-v7-2bvkc ---
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  72s   default-scheduler  Successfully assigned soc/wazuh-cert-generator-v7-2bvkc to k8-manager
  Normal  Pulling    71s   kubelet            Pulling image "busybox"
  Normal  Pulled     70s   kubelet            Successfully pulled image "busybox" in 651ms (651ms including waiting). Image size: 2222260 bytes.
  Normal  Created    70s   kubelet            Created container: config-writer
  Normal  Started    70s   kubelet            Started container config-writer
  Normal  Pulled     69s   kubelet            Container image "debian:bookworm-slim" already present on machine
  Normal  Created    69s   kubelet            Created container: generator
  Normal  Started    68s   kubelet            Started container generator
--- Logs for wazuh-cert-generator-v7-2bvkc (Current) ---
[pod/wazuh-cert-generator-v7-2bvkc/generator] Preparing to unpack .../14-libpsl5_0.21.2-1_amd64.deb ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Unpacking libpsl5:amd64 (0.21.2-1) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Selecting previously unselected package librtmp1:amd64.
[pod/wazuh-cert-generator-v7-2bvkc/generator] Preparing to unpack .../15-librtmp1_2.4+20151223.gitfa8646d.1-2+b2_amd64.deb ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Unpacking librtmp1:amd64 (2.4+20151223.gitfa8646d.1-2+b2) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Selecting previously unselected package libssh2-1:amd64.
[pod/wazuh-cert-generator-v7-2bvkc/generator] Preparing to unpack .../16-libssh2-1_1.10.0-3+b1_amd64.deb ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Unpacking libssh2-1:amd64 (1.10.0-3+b1) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Selecting previously unselected package libcurl4:amd64.
[pod/wazuh-cert-generator-v7-2bvkc/generator] Preparing to unpack .../17-libcurl4_7.88.1-10+deb12u14_amd64.deb ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Unpacking libcurl4:amd64 (7.88.1-10+deb12u14) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Selecting previously unselected package curl.
[pod/wazuh-cert-generator-v7-2bvkc/generator] Preparing to unpack .../18-curl_7.88.1-10+deb12u14_amd64.deb ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Unpacking curl (7.88.1-10+deb12u14) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Selecting previously unselected package libldap-common.
[pod/wazuh-cert-generator-v7-2bvkc/generator] Preparing to unpack .../19-libldap-common_2.5.13+dfsg-5_all.deb ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Unpacking libldap-common (2.5.13+dfsg-5) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Selecting previously unselected package libsasl2-modules:amd64.
[pod/wazuh-cert-generator-v7-2bvkc/generator] Preparing to unpack .../20-libsasl2-modules_2.1.28+dfsg-10_amd64.deb ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Unpacking libsasl2-modules:amd64 (2.1.28+dfsg-10) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Selecting previously unselected package publicsuffix.
[pod/wazuh-cert-generator-v7-2bvkc/generator] Preparing to unpack .../21-publicsuffix_20230209.2326-1_all.deb ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Unpacking publicsuffix (20230209.2326-1) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libkeyutils1:amd64 (1.6.3-2) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libpsl5:amd64 (0.21.2-1) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libbrotli1:amd64 (1.0.9-2+b6) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libssl3:amd64 (3.0.18-1~deb12u2) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libnghttp2-14:amd64 (1.52.0-1+deb12u2) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up krb5-locales (1.20.1-2+deb12u4) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libldap-common (2.5.13+dfsg-5) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libkrb5support0:amd64 (1.20.1-2+deb12u4) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libsasl2-modules-db:amd64 (2.1.28+dfsg-10) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up librtmp1:amd64 (2.4+20151223.gitfa8646d.1-2+b2) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libk5crypto3:amd64 (1.20.1-2+deb12u4) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libsasl2-2:amd64 (2.1.28+dfsg-10) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libssh2-1:amd64 (1.10.0-3+b1) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libkrb5-3:amd64 (1.20.1-2+deb12u4) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up openssl (3.0.18-1~deb12u2) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up publicsuffix (20230209.2326-1) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libsasl2-modules:amd64 (2.1.28+dfsg-10) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up libldap-2.5-0:amd64 (2.5.13+dfsg-5) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] Setting up ca-certificates (20230311+deb12u1) ...
[pod/wazuh-cert-generator-v7-2bvkc/generator] debconf: unable to initialize frontend: Dialog
[pod/wazuh-cert-generator-v7-2bvkc/generator] debconf: (TERM is not set, so the dialog frontend is not usable.)
[pod/wazuh-cert-generator-v7-2bvkc/generator] debconf: falling back to frontend: Readline
[pod/wazuh-cert-generator-v7-2bvkc/generator] debconf: unable to initialize frontend: Readline
[pod/wazuh-cert-generator-v7-2bvkc/generator] debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.36.0 /usr/local/share/perl/5.36.0 /usr/lib/x86_64-linux-gnu/perl5/5.36 /usr/share/perl5 /usr/lib/x86_64-linux-gnu/perl-base /usr/lib/x86_64-linux-gnu/perl/5.36 /usr/share/perl/5.36 /usr/local/lib/site_perl) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
[pod/wazuh-cert-generator-v7-2bvkc/generator] debconf: falling back to frontend: Teletype
[pod/wazuh-cert-generator-v7-2bvkc/generator] Updating certificates in /etc/ssl/certs...
[pod/wazuh-cert-generator-v7-2bvkc/generator] 142 added, 0 removed; done.
Error from server (BadRequest): container "uploader" in pod "wazuh-cert-generator-v7-2bvkc" is waiting to start: PodInitializing
Failed to fetch current logs
--- Logs for wazuh-cert-generator-v7-2bvkc (Previous) ---
Error from server (BadRequest): previous terminated container "config-writer" in pod "wazuh-cert-generator-v7-2bvkc" not found
Failed to fetch previous logs
--- Description for wazuh-dashboard-58ccf49468-pct2c ---
  kube-api-access-77zpc:
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
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  56m                   default-scheduler  Successfully assigned soc/wazuh-dashboard-58ccf49468-pct2c to k8-node-20
  Normal   Pulling    56m                   kubelet            Pulling image "wazuh/wazuh-dashboard:4.14.2"
  Normal   Pulled     56m                   kubelet            Successfully pulled image "wazuh/wazuh-dashboard:4.14.2" in 24.381s (24.381s including waiting). Image size: 444184713 bytes.
  Normal   Created    39m (x9 over 56m)     kubelet            Created container: wazuh-dashboard
  Normal   Started    39m (x9 over 56m)     kubelet            Started container wazuh-dashboard
  Normal   Pulled     3m54s (x15 over 55m)  kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Warning  BackOff    45s (x252 over 55m)   kubelet            Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-58ccf49468-pct2c_soc(d7f8af46-296d-4d2d-b11e-4ec3b0eb3756)
--- Logs for wazuh-dashboard-58ccf49468-pct2c (Current) ---
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] node:internal/fs/utils:351
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     throw err;
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     ^
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] 
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Error: ENOENT: no such file or directory, open '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.openSync (node:fs:596:3)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.readFileSync (node:fs:464:35)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at readYaml (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:37:52)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at exports.getConfigFromFiles (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:62:22)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at exports.loadConfiguration (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/config_loader.js:43:38)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at module.exports (/usr/share/wazuh-dashboard/src/apm.js:54:15)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.<anonymous> (/usr/share/wazuh-dashboard/src/cli/dist.js:33:18)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module._compile (node:internal/modules/cjs/loader:1356:14)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module.load (node:internal/modules/cjs/loader:1197:32) {
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   errno: -2,
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   syscall: 'open',
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   code: 'ENOENT',
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   path: '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] }
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] 
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Node.js v18.19.0
--- Logs for wazuh-dashboard-58ccf49468-pct2c (Previous) ---
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] node:internal/fs/utils:351
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     throw err;
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     ^
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] 
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Error: ENOENT: no such file or directory, open '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.openSync (node:fs:596:3)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.readFileSync (node:fs:464:35)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at readYaml (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:37:52)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at exports.getConfigFromFiles (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:62:22)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at exports.loadConfiguration (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/config_loader.js:43:38)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at module.exports (/usr/share/wazuh-dashboard/src/apm.js:54:15)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.<anonymous> (/usr/share/wazuh-dashboard/src/cli/dist.js:33:18)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module._compile (node:internal/modules/cjs/loader:1356:14)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module.load (node:internal/modules/cjs/loader:1197:32) {
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   errno: -2,
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   syscall: 'open',
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   code: 'ENOENT',
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   path: '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] }
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] 
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Node.js v18.19.0
