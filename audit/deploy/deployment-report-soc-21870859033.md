Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 15:23:56 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS         AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-5w2ls                  1/2     Error              8 (5m40s ago)    20m     192.168.1.30    k8-node-30   <none>           <none>
wazuh-agent-84kjf                  1/2     CrashLoopBackOff   8 (91s ago)      20m     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-wsnxx                  1/2     CrashLoopBackOff   8 (2m18s ago)    20m     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-zrxbd                  1/2     CrashLoopBackOff   8 (77s ago)      20m     192.168.1.40    k8-node-40   <none>           <none>
wazuh-cert-generator-v6-glhjk      0/1     Completed          0                6m26s   172.16.74.31    k8-manager   <none>           <none>
wazuh-dashboard-58ccf49468-pct2c   0/1     CrashLoopBackOff   11 (2m36s ago)   34m     172.16.209.23   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     CrashLoopBackOff   5 (2m8s ago)     5m25s   172.16.209.58   k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     0/1     Init:0/1           0                34m     172.16.209.7    k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      177m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             177m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   177m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   177m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-5w2ls Error
wazuh-agent-84kjf CrashLoopBackOff
wazuh-agent-wsnxx CrashLoopBackOff
wazuh-agent-zrxbd CrashLoopBackOff
wazuh-dashboard-58ccf49468-pct2c CrashLoopBackOff
wazuh-indexer-0 CrashLoopBackOff
wazuh-manager-648d6f9b5d-zn8tz Init:0/1
--- Description for wazuh-agent-5w2ls ---
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  20m                   default-scheduler  Successfully assigned soc/wazuh-agent-5w2ls to k8-node-30
  Normal   Pulling    20m                   kubelet            Pulling image "busybox"
  Normal   Pulled     20m                   kubelet            Successfully pulled image "busybox" in 4.849s (4.849s including waiting). Image size: 2222260 bytes.
  Normal   Created    20m                   kubelet            Created container: config-init
  Normal   Started    20m                   kubelet            Started container config-init
  Normal   Pulling    20m                   kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     20m                   kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 6.324s (6.324s including waiting). Image size: 74848715 bytes.
  Normal   Started    20m                   kubelet            Started container wazuh-agent
  Normal   Created    20m                   kubelet            Created container: wazuh-agent
  Normal   Pulled     20m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 6.334s (6.335s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     19m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 5.787s (5.787s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     19m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 6.884s (6.884s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     18m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 6.195s (6.195s including waiting). Image size: 141495340 bytes.
  Normal   Created    18m (x4 over 20m)     kubelet            Created container: suricata
  Normal   Started    18m (x4 over 20m)     kubelet            Started container suricata
  Warning  BackOff    4m12s (x56 over 19m)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-5w2ls_soc(4ae14453-e814-405e-b98f-d2f8745b1667)
  Normal   Pulling    37s (x9 over 20m)     kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     30s (x2 over 6m3s)    kubelet            (combined from similar events): Successfully pulled image "jasonish/suricata:latest" in 6.943s (6.943s including waiting). Image size: 141495340 bytes.
--- Logs for wazuh-agent-5w2ls (Current) ---
[pod/wazuh-agent-5w2ls/config-init] Detecting interface...
[pod/wazuh-agent-5w2ls/config-init] Detected interface: enp0s25
[pod/wazuh-agent-5w2ls/config-init] Generating Suricata config...
[pod/wazuh-agent-5w2ls/config-init] Config verification:
[pod/wazuh-agent-5w2ls/config-init]   - interface: enp0s25
[pod/wazuh-agent-5w2ls/wazuh-agent] Started wazuh-execd...
[pod/wazuh-agent-5w2ls/wazuh-agent] Started wazuh-agentd...
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:22 wazuh-syscheckd: INFO: (6678): No directory provided for syscheck to monitor.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:22 wazuh-syscheckd: INFO: (6001): File integrity monitoring disabled.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:22 rootcheck: INFO: Rootcheck disabled.
[pod/wazuh-agent-5w2ls/wazuh-agent] Started wazuh-syscheckd...
[pod/wazuh-agent-5w2ls/wazuh-agent] Started wazuh-logcollector...
[pod/wazuh-agent-5w2ls/wazuh-agent] Started wazuh-modulesd...
[pod/wazuh-agent-5w2ls/wazuh-agent] Completed.
[pod/wazuh-agent-5w2ls/wazuh-agent] [cont-init.d] 1-agent: exited 0.
[pod/wazuh-agent-5w2ls/wazuh-agent] [cont-init.d] done.
[pod/wazuh-agent-5w2ls/wazuh-agent] [services.d] starting services
[pod/wazuh-agent-5w2ls/wazuh-agent] [services.d] done.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:22 wazuh-modulesd: INFO: Started (pid: 260).
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:22 wazuh-modulesd:agent-upgrade: INFO: (8153): Module Agent Upgrade started.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:22 wazuh-modulesd:control: INFO: Starting control thread.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:23 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/syslog'.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:23 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/auth.log'.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:23 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/dpkg.log'.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:23 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/kern.log'.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:23 wazuh-logcollector: ERROR: (1103): Could not open file '/var/log/suricata/eve.json' due to [(2)-(No such file or directory)].
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:23 wazuh-logcollector: INFO: (1950): Analyzing file: '/var/log/suricata/eve.json'.
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:06:23 wazuh-logcollector: INFO: Started (pid: 252).
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:07:45 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:07:50 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:09:14 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:09:24 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:10:49 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:11:04 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:12:28 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:12:48 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:14:12 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:14:37 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:16:01 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:16:31 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:17:55 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:18:30 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:19:54 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:20:34 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:21:58 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/wazuh-agent] 
[pod/wazuh-agent-5w2ls/wazuh-agent] 2026/02/10 15:22:43 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-5w2ls/suricata]   Capture and IPS:
[pod/wazuh-agent-5w2ls/suricata] 	-F <bpf filter file>                 : bpf filter file
[pod/wazuh-agent-5w2ls/suricata] 	-k [all|none]                        : force checksum check (all) or disabled it (none)
[pod/wazuh-agent-5w2ls/suricata] 	-i <dev or ip>                       : run in pcap live mode
[pod/wazuh-agent-5w2ls/suricata] 	--pcap[=<dev>]                       : run in pcap mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-5w2ls/suricata] 	--pcap-buffer-size                   : size of the pcap buffer value from 0 - 2147483647
[pod/wazuh-agent-5w2ls/suricata] 	-q <qid[:qid]>                       : run in inline nfqueue mode (use colon to specify a range of queues)
[pod/wazuh-agent-5w2ls/suricata] 	--af-packet[=<dev>]                  : run in af-packet mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-5w2ls/suricata] 	--dpdk                               : run in dpdk mode, uses interfaces from suricata.yaml
[pod/wazuh-agent-5w2ls/suricata] 	--reject-dev <dev>                   : send reject packets from this interface
[pod/wazuh-agent-5w2ls/suricata] 
[pod/wazuh-agent-5w2ls/suricata]   Capture Files:
[pod/wazuh-agent-5w2ls/suricata] 	-r <path>                            : run in pcap file/offline mode
[pod/wazuh-agent-5w2ls/suricata] 	--pcap-file-continuous               : when running in pcap mode with a directory, continue checking directory for pcaps until interrupted
[pod/wazuh-agent-5w2ls/suricata] 	--pcap-file-delete                   : when running in replay mode (-r with directory or file), will delete pcap files that have been processed when done
[pod/wazuh-agent-5w2ls/suricata] 	--pcap-file-recursive                : will descend into subdirectories when running in replay mode (-r)
[pod/wazuh-agent-5w2ls/suricata] 	--pcap-file-buffer-size              : set read buffer size (setvbuf)
[pod/wazuh-agent-5w2ls/suricata] 	--erf-in <path>                      : process an ERF file
[pod/wazuh-agent-5w2ls/suricata] 
[pod/wazuh-agent-5w2ls/suricata]   Detection:
[pod/wazuh-agent-5w2ls/suricata] 	-s <path>                            : path to signature file loaded in addition to suricata.yaml settings (optional)
[pod/wazuh-agent-5w2ls/suricata] 	-S <path>                            : path to signature file loaded exclusively (optional)
[pod/wazuh-agent-5w2ls/suricata] 	--disable-detection                  : disable detection engine
[pod/wazuh-agent-5w2ls/suricata] 	--engine-analysis                    : print reports on analysis of different sections in the engine and exit.
[pod/wazuh-agent-5w2ls/suricata] 	                                       Please have a look at the conf parameter engine-analysis on what reports
[pod/wazuh-agent-5w2ls/suricata] 	                                       can be printed
[pod/wazuh-agent-5w2ls/suricata] 
[pod/wazuh-agent-5w2ls/suricata]   Firewall:
[pod/wazuh-agent-5w2ls/suricata] 	--firewall                           : enable firewall mode
[pod/wazuh-agent-5w2ls/suricata] 	--firewall-rules-exclusive=<path>    : path to firewall rule file loaded exclusively
[pod/wazuh-agent-5w2ls/suricata] 
[pod/wazuh-agent-5w2ls/suricata]   Info:
[pod/wazuh-agent-5w2ls/suricata] 	-V                                   : display Suricata version
[pod/wazuh-agent-5w2ls/suricata] 	--list-keywords[=all|csv|<kword>]    : list keywords implemented by the engine
[pod/wazuh-agent-5w2ls/suricata] 	--list-runmodes                      : list supported runmodes
[pod/wazuh-agent-5w2ls/suricata] 	--list-app-layer-protos              : list supported app layer protocols
[pod/wazuh-agent-5w2ls/suricata] 	--list-app-layer-hooks               : list supported app layer hooks for use in rules
[pod/wazuh-agent-5w2ls/suricata] 	--list-app-layer-frames              : list supported app layer frames for use with 'frame' keyword
[pod/wazuh-agent-5w2ls/suricata] 	--dump-config                        : show the running configuration
[pod/wazuh-agent-5w2ls/suricata] 	--dump-features                      : display provided features
[pod/wazuh-agent-5w2ls/suricata] 	--build-info                         : display build information
[pod/wazuh-agent-5w2ls/suricata] 
[pod/wazuh-agent-5w2ls/suricata]   Testing:
[pod/wazuh-agent-5w2ls/suricata] 	--simulate-ips                       : force engine into IPS mode. Useful for QA
[pod/wazuh-agent-5w2ls/suricata] 
[pod/wazuh-agent-5w2ls/suricata] 
[pod/wazuh-agent-5w2ls/suricata] To run Suricata with default configuration on interface eth0 with signature file "signatures.rules", run the command as:
[pod/wazuh-agent-5w2ls/suricata] 
[pod/wazuh-agent-5w2ls/suricata] /usr/bin/suricata -c suricata.yaml -s signatures.rules -i eth0 
[pod/wazuh-agent-5w2ls/suricata] 
--- Logs for wazuh-agent-5w2ls (Previous) ---
Error from server (BadRequest): previous terminated container "config-init" in pod "wazuh-agent-5w2ls" not found
Failed to fetch previous logs
--- Description for wazuh-agent-84kjf ---
Events:
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  20m                   default-scheduler  Successfully assigned soc/wazuh-agent-84kjf to k8-node-20
  Normal   Pulling    20m                   kubelet            Pulling image "busybox"
  Normal   Pulled     20m                   kubelet            Successfully pulled image "busybox" in 657ms (657ms including waiting). Image size: 2222260 bytes.
  Normal   Created    20m                   kubelet            Created container: config-init
  Normal   Started    20m                   kubelet            Started container config-init
  Normal   Pulling    20m                   kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Started    20m                   kubelet            Started container wazuh-agent
  Normal   Created    20m                   kubelet            Created container: wazuh-agent
  Normal   Pulled     20m                   kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 729ms (730ms including waiting). Image size: 74848715 bytes.
  Normal   Pulled     20m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 649ms (649ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     20m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 781ms (781ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     19m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 664ms (664ms including waiting). Image size: 141495340 bytes.
  Normal   Created    18m (x4 over 20m)     kubelet            Created container: suricata
  Normal   Started    18m (x4 over 20m)     kubelet            Started container suricata
  Normal   Pulled     18m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 668ms (668ms including waiting). Image size: 141495340 bytes.
  Warning  BackOff    4m39s (x61 over 19m)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-84kjf_soc(202488f2-a9cf-4f7c-adca-407ced85e95b)
  Normal   Pulling    114s (x9 over 20m)    kubelet            Pulling image "jasonish/suricata:latest"
--- Logs for wazuh-agent-84kjf (Current) ---
[pod/wazuh-agent-84kjf/config-init] Detecting interface...
[pod/wazuh-agent-84kjf/config-init] Detected interface: enp1s0
[pod/wazuh-agent-84kjf/config-init] Generating Suricata config...
[pod/wazuh-agent-84kjf/config-init] Config verification:
[pod/wazuh-agent-84kjf/config-init]   - interface: enp1s0
[pod/wazuh-agent-84kjf/wazuh-agent] Started wazuh-agentd...
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-syscheckd: INFO: (6678): No directory provided for syscheck to monitor.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-syscheckd: INFO: (6001): File integrity monitoring disabled.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 rootcheck: INFO: Rootcheck disabled.
[pod/wazuh-agent-84kjf/wazuh-agent] Started wazuh-syscheckd...
[pod/wazuh-agent-84kjf/wazuh-agent] Started wazuh-logcollector...
[pod/wazuh-agent-84kjf/wazuh-agent] Started wazuh-modulesd...
[pod/wazuh-agent-84kjf/wazuh-agent] Completed.
[pod/wazuh-agent-84kjf/wazuh-agent] [cont-init.d] 1-agent: exited 0.
[pod/wazuh-agent-84kjf/wazuh-agent] [cont-init.d] done.
[pod/wazuh-agent-84kjf/wazuh-agent] [services.d] starting services
[pod/wazuh-agent-84kjf/wazuh-agent] [services.d] done.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-modulesd: INFO: Started (pid: 263).
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-modulesd:agent-upgrade: INFO: (8153): Module Agent Upgrade started.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-modulesd:control: INFO: Starting control thread.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/syslog'.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/auth.log'.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/dpkg.log'.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/kern.log'.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-logcollector: ERROR: (1103): Could not open file '/var/log/suricata/eve.json' due to [(2)-(No such file or directory)].
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-logcollector: INFO: (1950): Analyzing file: '/var/log/suricata/eve.json'.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:06:14 wazuh-logcollector: INFO: Started (pid: 254).
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:07:37 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:07:42 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:09:06 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:09:16 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:10:40 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:10:55 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:12:19 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:12:39 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:12:57 wazuh-logcollector: WARNING: Target 'agent' message queue is full (1024). Log lines may be lost.
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:14:03 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:14:28 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:15:52 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:16:22 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:17:46 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:18:21 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:19:45 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:20:25 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:21:49 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/wazuh-agent] 
[pod/wazuh-agent-84kjf/wazuh-agent] 2026/02/10 15:22:34 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-84kjf/suricata]   Capture and IPS:
[pod/wazuh-agent-84kjf/suricata] 	-F <bpf filter file>                 : bpf filter file
[pod/wazuh-agent-84kjf/suricata] 	-k [all|none]                        : force checksum check (all) or disabled it (none)
[pod/wazuh-agent-84kjf/suricata] 	-i <dev or ip>                       : run in pcap live mode
[pod/wazuh-agent-84kjf/suricata] 	--pcap[=<dev>]                       : run in pcap mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-84kjf/suricata] 	--pcap-buffer-size                   : size of the pcap buffer value from 0 - 2147483647
[pod/wazuh-agent-84kjf/suricata] 	-q <qid[:qid]>                       : run in inline nfqueue mode (use colon to specify a range of queues)
[pod/wazuh-agent-84kjf/suricata] 	--af-packet[=<dev>]                  : run in af-packet mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-84kjf/suricata] 	--dpdk                               : run in dpdk mode, uses interfaces from suricata.yaml
[pod/wazuh-agent-84kjf/suricata] 	--reject-dev <dev>                   : send reject packets from this interface
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Capture Files:
[pod/wazuh-agent-84kjf/suricata] 	-r <path>                            : run in pcap file/offline mode
[pod/wazuh-agent-84kjf/suricata] 	--pcap-file-continuous               : when running in pcap mode with a directory, continue checking directory for pcaps until interrupted
[pod/wazuh-agent-84kjf/suricata] 	--pcap-file-delete                   : when running in replay mode (-r with directory or file), will delete pcap files that have been processed when done
[pod/wazuh-agent-84kjf/suricata] 	--pcap-file-recursive                : will descend into subdirectories when running in replay mode (-r)
[pod/wazuh-agent-84kjf/suricata] 	--pcap-file-buffer-size              : set read buffer size (setvbuf)
[pod/wazuh-agent-84kjf/suricata] 	--erf-in <path>                      : process an ERF file
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Detection:
[pod/wazuh-agent-84kjf/suricata] 	-s <path>                            : path to signature file loaded in addition to suricata.yaml settings (optional)
[pod/wazuh-agent-84kjf/suricata] 	-S <path>                            : path to signature file loaded exclusively (optional)
[pod/wazuh-agent-84kjf/suricata] 	--disable-detection                  : disable detection engine
[pod/wazuh-agent-84kjf/suricata] 	--engine-analysis                    : print reports on analysis of different sections in the engine and exit.
[pod/wazuh-agent-84kjf/suricata] 	                                       Please have a look at the conf parameter engine-analysis on what reports
[pod/wazuh-agent-84kjf/suricata] 	                                       can be printed
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Firewall:
[pod/wazuh-agent-84kjf/suricata] 	--firewall                           : enable firewall mode
[pod/wazuh-agent-84kjf/suricata] 	--firewall-rules-exclusive=<path>    : path to firewall rule file loaded exclusively
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Info:
[pod/wazuh-agent-84kjf/suricata] 	-V                                   : display Suricata version
[pod/wazuh-agent-84kjf/suricata] 	--list-keywords[=all|csv|<kword>]    : list keywords implemented by the engine
[pod/wazuh-agent-84kjf/suricata] 	--list-runmodes                      : list supported runmodes
[pod/wazuh-agent-84kjf/suricata] 	--list-app-layer-protos              : list supported app layer protocols
[pod/wazuh-agent-84kjf/suricata] 	--list-app-layer-hooks               : list supported app layer hooks for use in rules
[pod/wazuh-agent-84kjf/suricata] 	--list-app-layer-frames              : list supported app layer frames for use with 'frame' keyword
[pod/wazuh-agent-84kjf/suricata] 	--dump-config                        : show the running configuration
[pod/wazuh-agent-84kjf/suricata] 	--dump-features                      : display provided features
[pod/wazuh-agent-84kjf/suricata] 	--build-info                         : display build information
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Testing:
[pod/wazuh-agent-84kjf/suricata] 	--simulate-ips                       : force engine into IPS mode. Useful for QA
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata] To run Suricata with default configuration on interface eth0 with signature file "signatures.rules", run the command as:
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata] /usr/bin/suricata -c suricata.yaml -s signatures.rules -i eth0 
[pod/wazuh-agent-84kjf/suricata] 
--- Logs for wazuh-agent-84kjf (Previous) ---
[pod/wazuh-agent-84kjf/suricata]   Capture and IPS:
[pod/wazuh-agent-84kjf/suricata] 	-F <bpf filter file>                 : bpf filter file
[pod/wazuh-agent-84kjf/suricata] 	-k [all|none]                        : force checksum check (all) or disabled it (none)
[pod/wazuh-agent-84kjf/suricata] 	-i <dev or ip>                       : run in pcap live mode
[pod/wazuh-agent-84kjf/suricata] 	--pcap[=<dev>]                       : run in pcap mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-84kjf/suricata] 	--pcap-buffer-size                   : size of the pcap buffer value from 0 - 2147483647
[pod/wazuh-agent-84kjf/suricata] 	-q <qid[:qid]>                       : run in inline nfqueue mode (use colon to specify a range of queues)
[pod/wazuh-agent-84kjf/suricata] 	--af-packet[=<dev>]                  : run in af-packet mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-84kjf/suricata] 	--dpdk                               : run in dpdk mode, uses interfaces from suricata.yaml
[pod/wazuh-agent-84kjf/suricata] 	--reject-dev <dev>                   : send reject packets from this interface
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Capture Files:
[pod/wazuh-agent-84kjf/suricata] 	-r <path>                            : run in pcap file/offline mode
[pod/wazuh-agent-84kjf/suricata] 	--pcap-file-continuous               : when running in pcap mode with a directory, continue checking directory for pcaps until interrupted
[pod/wazuh-agent-84kjf/suricata] 	--pcap-file-delete                   : when running in replay mode (-r with directory or file), will delete pcap files that have been processed when done
[pod/wazuh-agent-84kjf/suricata] 	--pcap-file-recursive                : will descend into subdirectories when running in replay mode (-r)
[pod/wazuh-agent-84kjf/suricata] 	--pcap-file-buffer-size              : set read buffer size (setvbuf)
[pod/wazuh-agent-84kjf/suricata] 	--erf-in <path>                      : process an ERF file
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Detection:
[pod/wazuh-agent-84kjf/suricata] 	-s <path>                            : path to signature file loaded in addition to suricata.yaml settings (optional)
[pod/wazuh-agent-84kjf/suricata] 	-S <path>                            : path to signature file loaded exclusively (optional)
[pod/wazuh-agent-84kjf/suricata] 	--disable-detection                  : disable detection engine
[pod/wazuh-agent-84kjf/suricata] 	--engine-analysis                    : print reports on analysis of different sections in the engine and exit.
[pod/wazuh-agent-84kjf/suricata] 	                                       Please have a look at the conf parameter engine-analysis on what reports
[pod/wazuh-agent-84kjf/suricata] 	                                       can be printed
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Firewall:
[pod/wazuh-agent-84kjf/suricata] 	--firewall                           : enable firewall mode
[pod/wazuh-agent-84kjf/suricata] 	--firewall-rules-exclusive=<path>    : path to firewall rule file loaded exclusively
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Info:
[pod/wazuh-agent-84kjf/suricata] 	-V                                   : display Suricata version
[pod/wazuh-agent-84kjf/suricata] 	--list-keywords[=all|csv|<kword>]    : list keywords implemented by the engine
[pod/wazuh-agent-84kjf/suricata] 	--list-runmodes                      : list supported runmodes
[pod/wazuh-agent-84kjf/suricata] 	--list-app-layer-protos              : list supported app layer protocols
[pod/wazuh-agent-84kjf/suricata] 	--list-app-layer-hooks               : list supported app layer hooks for use in rules
[pod/wazuh-agent-84kjf/suricata] 	--list-app-layer-frames              : list supported app layer frames for use with 'frame' keyword
[pod/wazuh-agent-84kjf/suricata] 	--dump-config                        : show the running configuration
[pod/wazuh-agent-84kjf/suricata] 	--dump-features                      : display provided features
[pod/wazuh-agent-84kjf/suricata] 	--build-info                         : display build information
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata]   Testing:
[pod/wazuh-agent-84kjf/suricata] 	--simulate-ips                       : force engine into IPS mode. Useful for QA
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata] To run Suricata with default configuration on interface eth0 with signature file "signatures.rules", run the command as:
[pod/wazuh-agent-84kjf/suricata] 
[pod/wazuh-agent-84kjf/suricata] /usr/bin/suricata -c suricata.yaml -s signatures.rules -i eth0 
[pod/wazuh-agent-84kjf/suricata] 
Error from server (BadRequest): previous terminated container "config-init" in pod "wazuh-agent-84kjf" not found
Failed to fetch previous logs
--- Description for wazuh-agent-wsnxx ---
Events:
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  20m                  default-scheduler  Successfully assigned soc/wazuh-agent-wsnxx to k8-manager
  Normal   Pulling    20m                  kubelet            Pulling image "busybox"
  Normal   Pulled     20m                  kubelet            Successfully pulled image "busybox" in 631ms (631ms including waiting). Image size: 2222260 bytes.
  Normal   Created    20m                  kubelet            Created container: config-init
  Normal   Started    20m                  kubelet            Started container config-init
  Normal   Pulling    20m                  kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     20m                  kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 725ms (725ms including waiting). Image size: 74848715 bytes.
  Normal   Created    20m                  kubelet            Created container: wazuh-agent
  Normal   Started    20m                  kubelet            Started container wazuh-agent
  Normal   Pulled     20m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 619ms (619ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     20m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 642ms (642ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     20m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 690ms (690ms including waiting). Image size: 141495340 bytes.
  Normal   Created    19m (x4 over 20m)    kubelet            Created container: suricata
  Normal   Pulled     19m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 653ms (653ms including waiting). Image size: 141495340 bytes.
  Normal   Started    19m (x4 over 20m)    kubelet            Started container suricata
  Normal   Pulling    2m40s (x9 over 20m)  kubelet            Pulling image "jasonish/suricata:latest"
  Warning  BackOff    14s (x84 over 20m)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-wsnxx_soc(6bd1e289-a3af-487b-be12-909ca63023b2)
--- Logs for wazuh-agent-wsnxx (Current) ---
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:03:12 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:03:22 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:03:23 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:03:38 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:03:39 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:03:59 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:04:00 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:04:25 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:04:26 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:04:56 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:04:57 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:05:32 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:05:33 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:06:13 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:06:14 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:06:59 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:07:00 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:07:50 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:07:51 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:08:46 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:08:47 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:09:47 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:09:48 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:10:48 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:10:49 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:11:49 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:11:50 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:12:50 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:12:51 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:13:51 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:13:52 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:14:14 wazuh-logcollector: WARNING: Target 'agent' message queue is full (1024). Log lines may be lost.
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:14:52 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:14:53 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:15:53 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:15:54 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:16:54 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:16:55 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:17:55 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:17:57 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:18:57 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:18:58 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:19:58 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:19:59 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:20:59 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:21:00 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:22:00 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:22:01 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:23:01 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-wsnxx/wazuh-agent] 2026/02/10 15:23:02 wazuh-agentd: ERROR: (1208): Unable to connect to enrollment service at '[10.109.153.22]:1515'
[pod/wazuh-agent-wsnxx/suricata]   Capture and IPS:
[pod/wazuh-agent-wsnxx/suricata] 	-F <bpf filter file>                 : bpf filter file
[pod/wazuh-agent-wsnxx/suricata] 	-k [all|none]                        : force checksum check (all) or disabled it (none)
[pod/wazuh-agent-wsnxx/suricata] 	-i <dev or ip>                       : run in pcap live mode
[pod/wazuh-agent-wsnxx/suricata] 	--pcap[=<dev>]                       : run in pcap mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-wsnxx/suricata] 	--pcap-buffer-size                   : size of the pcap buffer value from 0 - 2147483647
[pod/wazuh-agent-wsnxx/suricata] 	-q <qid[:qid]>                       : run in inline nfqueue mode (use colon to specify a range of queues)
[pod/wazuh-agent-wsnxx/suricata] 	--af-packet[=<dev>]                  : run in af-packet mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-wsnxx/suricata] 	--dpdk                               : run in dpdk mode, uses interfaces from suricata.yaml
[pod/wazuh-agent-wsnxx/suricata] 	--reject-dev <dev>                   : send reject packets from this interface
[pod/wazuh-agent-wsnxx/suricata] 
[pod/wazuh-agent-wsnxx/suricata]   Capture Files:
[pod/wazuh-agent-wsnxx/suricata] 	-r <path>                            : run in pcap file/offline mode
[pod/wazuh-agent-wsnxx/suricata] 	--pcap-file-continuous               : when running in pcap mode with a directory, continue checking directory for pcaps until interrupted
[pod/wazuh-agent-wsnxx/suricata] 	--pcap-file-delete                   : when running in replay mode (-r with directory or file), will delete pcap files that have been processed when done
[pod/wazuh-agent-wsnxx/suricata] 	--pcap-file-recursive                : will descend into subdirectories when running in replay mode (-r)
[pod/wazuh-agent-wsnxx/suricata] 	--pcap-file-buffer-size              : set read buffer size (setvbuf)
[pod/wazuh-agent-wsnxx/suricata] 	--erf-in <path>                      : process an ERF file
[pod/wazuh-agent-wsnxx/suricata] 
[pod/wazuh-agent-wsnxx/suricata]   Detection:
[pod/wazuh-agent-wsnxx/suricata] 	-s <path>                            : path to signature file loaded in addition to suricata.yaml settings (optional)
[pod/wazuh-agent-wsnxx/suricata] 	-S <path>                            : path to signature file loaded exclusively (optional)
[pod/wazuh-agent-wsnxx/suricata] 	--disable-detection                  : disable detection engine
[pod/wazuh-agent-wsnxx/suricata] 	--engine-analysis                    : print reports on analysis of different sections in the engine and exit.
[pod/wazuh-agent-wsnxx/suricata] 	                                       Please have a look at the conf parameter engine-analysis on what reports
[pod/wazuh-agent-wsnxx/suricata] 	                                       can be printed
[pod/wazuh-agent-wsnxx/suricata] 
[pod/wazuh-agent-wsnxx/suricata]   Firewall:
[pod/wazuh-agent-wsnxx/suricata] 	--firewall                           : enable firewall mode
[pod/wazuh-agent-wsnxx/suricata] 	--firewall-rules-exclusive=<path>    : path to firewall rule file loaded exclusively
[pod/wazuh-agent-wsnxx/suricata] 
[pod/wazuh-agent-wsnxx/suricata]   Info:
[pod/wazuh-agent-wsnxx/suricata] 	-V                                   : display Suricata version
[pod/wazuh-agent-wsnxx/suricata] 	--list-keywords[=all|csv|<kword>]    : list keywords implemented by the engine
[pod/wazuh-agent-wsnxx/suricata] 	--list-runmodes                      : list supported runmodes
[pod/wazuh-agent-wsnxx/suricata] 	--list-app-layer-protos              : list supported app layer protocols
[pod/wazuh-agent-wsnxx/suricata] 	--list-app-layer-hooks               : list supported app layer hooks for use in rules
[pod/wazuh-agent-wsnxx/suricata] 	--list-app-layer-frames              : list supported app layer frames for use with 'frame' keyword
[pod/wazuh-agent-wsnxx/suricata] 	--dump-config                        : show the running configuration
[pod/wazuh-agent-wsnxx/suricata] 	--dump-features                      : display provided features
[pod/wazuh-agent-wsnxx/suricata] 	--build-info                         : display build information
[pod/wazuh-agent-wsnxx/suricata] 
[pod/wazuh-agent-wsnxx/suricata]   Testing:
[pod/wazuh-agent-wsnxx/suricata] 	--simulate-ips                       : force engine into IPS mode. Useful for QA
[pod/wazuh-agent-wsnxx/suricata] 
[pod/wazuh-agent-wsnxx/suricata] 
[pod/wazuh-agent-wsnxx/suricata] To run Suricata with default configuration on interface eth0 with signature file "signatures.rules", run the command as:
[pod/wazuh-agent-wsnxx/suricata] 
[pod/wazuh-agent-wsnxx/suricata] /usr/bin/suricata -c suricata.yaml -s signatures.rules -i eth0 
[pod/wazuh-agent-wsnxx/suricata] 
[pod/wazuh-agent-wsnxx/config-init] Detecting interface...
[pod/wazuh-agent-wsnxx/config-init] Detected interface: enp0s31f6
[pod/wazuh-agent-wsnxx/config-init] Generating Suricata config...
[pod/wazuh-agent-wsnxx/config-init] Config verification:
[pod/wazuh-agent-wsnxx/config-init]   - interface: enp0s31f6
--- Logs for wazuh-agent-wsnxx (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-agent" in pod "wazuh-agent-wsnxx" not found
Failed to fetch previous logs
--- Description for wazuh-agent-zrxbd ---
Events:
  Type     Reason     Age                 From               Message
  ----     ------     ----                ----               -------
  Normal   Scheduled  20m                 default-scheduler  Successfully assigned soc/wazuh-agent-zrxbd to k8-node-40
  Normal   Pulling    20m                 kubelet            Pulling image "busybox"
  Normal   Pulled     20m                 kubelet            Successfully pulled image "busybox" in 1.286s (1.286s including waiting). Image size: 2222260 bytes.
  Normal   Created    20m                 kubelet            Created container: config-init
  Normal   Started    20m                 kubelet            Started container config-init
  Normal   Pulling    20m                 kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     20m                 kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 1.476s (1.476s including waiting). Image size: 74848715 bytes.
  Normal   Started    20m                 kubelet            Started container wazuh-agent
  Normal   Created    20m                 kubelet            Created container: wazuh-agent
  Normal   Pulled     20m                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.781s (1.781s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     20m                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.821s (1.821s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     19m                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.87s (1.87s including waiting). Image size: 141495340 bytes.
  Normal   Created    18m (x4 over 20m)   kubelet            Created container: suricata
  Normal   Started    18m (x4 over 20m)   kubelet            Started container suricata
  Normal   Pulled     18m                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.613s (1.613s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    103s (x9 over 20m)  kubelet            Pulling image "jasonish/suricata:latest"
  Warning  BackOff    0s (x80 over 20m)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-zrxbd_soc(e2f0d1f8-6ab5-43bc-a3d4-79164ef6891d)
--- Logs for wazuh-agent-zrxbd (Current) ---
[pod/wazuh-agent-zrxbd/config-init] Detecting interface...
[pod/wazuh-agent-zrxbd/config-init] Detected interface: enp2s0
[pod/wazuh-agent-zrxbd/config-init] Generating Suricata config...
[pod/wazuh-agent-zrxbd/config-init] Config verification:
[pod/wazuh-agent-zrxbd/config-init]   - interface: enp2s0
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:57 wazuh-syscheckd: INFO: (6001): File integrity monitoring disabled.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:57 rootcheck: INFO: Rootcheck disabled.
[pod/wazuh-agent-zrxbd/wazuh-agent] Started wazuh-syscheckd...
[pod/wazuh-agent-zrxbd/wazuh-agent] Started wazuh-logcollector...
[pod/wazuh-agent-zrxbd/wazuh-agent] Started wazuh-modulesd...
[pod/wazuh-agent-zrxbd/wazuh-agent] Completed.
[pod/wazuh-agent-zrxbd/wazuh-agent] [cont-init.d] 1-agent: exited 0.
[pod/wazuh-agent-zrxbd/wazuh-agent] [cont-init.d] done.
[pod/wazuh-agent-zrxbd/wazuh-agent] [services.d] starting services
[pod/wazuh-agent-zrxbd/wazuh-agent] [services.d] done.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:57 wazuh-modulesd: INFO: Started (pid: 263).
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:57 wazuh-modulesd:agent-upgrade: INFO: (8153): Module Agent Upgrade started.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:57 wazuh-modulesd:control: INFO: Starting control thread.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:58 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/syslog'.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:58 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/auth.log'.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:58 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/dpkg.log'.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:58 wazuh-logcollector: INFO: (1950): Analyzing file: '/host/var/log/kern.log'.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:58 wazuh-logcollector: ERROR: (1103): Could not open file '/var/log/suricata/eve.json' due to [(2)-(No such file or directory)].
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:58 wazuh-logcollector: INFO: (1950): Analyzing file: '/var/log/suricata/eve.json'.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:05:58 wazuh-logcollector: INFO: Started (pid: 254).
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:07:20 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:07:25 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:08:49 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:08:59 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:10:23 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:10:38 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:12:02 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:12:22 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:13:46 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:14:11 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:15:35 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:16:05 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:17:29 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:18:04 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:18:34 wazuh-logcollector: WARNING: Target 'agent' message queue is full (1024). Log lines may be lost.
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:19:28 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:20:08 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:21:32 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:22:17 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 2026/02/10 15:23:42 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-zrxbd/wazuh-agent] 
[pod/wazuh-agent-zrxbd/suricata]   Capture and IPS:
[pod/wazuh-agent-zrxbd/suricata] 	-F <bpf filter file>                 : bpf filter file
[pod/wazuh-agent-zrxbd/suricata] 	-k [all|none]                        : force checksum check (all) or disabled it (none)
[pod/wazuh-agent-zrxbd/suricata] 	-i <dev or ip>                       : run in pcap live mode
[pod/wazuh-agent-zrxbd/suricata] 	--pcap[=<dev>]                       : run in pcap mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-zrxbd/suricata] 	--pcap-buffer-size                   : size of the pcap buffer value from 0 - 2147483647
[pod/wazuh-agent-zrxbd/suricata] 	-q <qid[:qid]>                       : run in inline nfqueue mode (use colon to specify a range of queues)
[pod/wazuh-agent-zrxbd/suricata] 	--af-packet[=<dev>]                  : run in af-packet mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-zrxbd/suricata] 	--dpdk                               : run in dpdk mode, uses interfaces from suricata.yaml
[pod/wazuh-agent-zrxbd/suricata] 	--reject-dev <dev>                   : send reject packets from this interface
[pod/wazuh-agent-zrxbd/suricata] 
[pod/wazuh-agent-zrxbd/suricata]   Capture Files:
[pod/wazuh-agent-zrxbd/suricata] 	-r <path>                            : run in pcap file/offline mode
[pod/wazuh-agent-zrxbd/suricata] 	--pcap-file-continuous               : when running in pcap mode with a directory, continue checking directory for pcaps until interrupted
[pod/wazuh-agent-zrxbd/suricata] 	--pcap-file-delete                   : when running in replay mode (-r with directory or file), will delete pcap files that have been processed when done
[pod/wazuh-agent-zrxbd/suricata] 	--pcap-file-recursive                : will descend into subdirectories when running in replay mode (-r)
[pod/wazuh-agent-zrxbd/suricata] 	--pcap-file-buffer-size              : set read buffer size (setvbuf)
[pod/wazuh-agent-zrxbd/suricata] 	--erf-in <path>                      : process an ERF file
[pod/wazuh-agent-zrxbd/suricata] 
[pod/wazuh-agent-zrxbd/suricata]   Detection:
[pod/wazuh-agent-zrxbd/suricata] 	-s <path>                            : path to signature file loaded in addition to suricata.yaml settings (optional)
[pod/wazuh-agent-zrxbd/suricata] 	-S <path>                            : path to signature file loaded exclusively (optional)
[pod/wazuh-agent-zrxbd/suricata] 	--disable-detection                  : disable detection engine
[pod/wazuh-agent-zrxbd/suricata] 	--engine-analysis                    : print reports on analysis of different sections in the engine and exit.
[pod/wazuh-agent-zrxbd/suricata] 	                                       Please have a look at the conf parameter engine-analysis on what reports
[pod/wazuh-agent-zrxbd/suricata] 	                                       can be printed
[pod/wazuh-agent-zrxbd/suricata] 
[pod/wazuh-agent-zrxbd/suricata]   Firewall:
[pod/wazuh-agent-zrxbd/suricata] 	--firewall                           : enable firewall mode
[pod/wazuh-agent-zrxbd/suricata] 	--firewall-rules-exclusive=<path>    : path to firewall rule file loaded exclusively
[pod/wazuh-agent-zrxbd/suricata] 
[pod/wazuh-agent-zrxbd/suricata]   Info:
[pod/wazuh-agent-zrxbd/suricata] 	-V                                   : display Suricata version
[pod/wazuh-agent-zrxbd/suricata] 	--list-keywords[=all|csv|<kword>]    : list keywords implemented by the engine
[pod/wazuh-agent-zrxbd/suricata] 	--list-runmodes                      : list supported runmodes
[pod/wazuh-agent-zrxbd/suricata] 	--list-app-layer-protos              : list supported app layer protocols
[pod/wazuh-agent-zrxbd/suricata] 	--list-app-layer-hooks               : list supported app layer hooks for use in rules
[pod/wazuh-agent-zrxbd/suricata] 	--list-app-layer-frames              : list supported app layer frames for use with 'frame' keyword
[pod/wazuh-agent-zrxbd/suricata] 	--dump-config                        : show the running configuration
[pod/wazuh-agent-zrxbd/suricata] 	--dump-features                      : display provided features
[pod/wazuh-agent-zrxbd/suricata] 	--build-info                         : display build information
[pod/wazuh-agent-zrxbd/suricata] 
[pod/wazuh-agent-zrxbd/suricata]   Testing:
[pod/wazuh-agent-zrxbd/suricata] 	--simulate-ips                       : force engine into IPS mode. Useful for QA
[pod/wazuh-agent-zrxbd/suricata] 
[pod/wazuh-agent-zrxbd/suricata] 
[pod/wazuh-agent-zrxbd/suricata] To run Suricata with default configuration on interface eth0 with signature file "signatures.rules", run the command as:
[pod/wazuh-agent-zrxbd/suricata] 
[pod/wazuh-agent-zrxbd/suricata] /usr/bin/suricata -c suricata.yaml -s signatures.rules -i eth0 
[pod/wazuh-agent-zrxbd/suricata] 
--- Logs for wazuh-agent-zrxbd (Previous) ---
Error from server (BadRequest): previous terminated container "config-init" in pod "wazuh-agent-zrxbd" not found
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
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  34m                    default-scheduler  Successfully assigned soc/wazuh-dashboard-58ccf49468-pct2c to k8-node-20
  Normal   Pulling    34m                    kubelet            Pulling image "wazuh/wazuh-dashboard:4.14.2"
  Normal   Pulled     34m                    kubelet            Successfully pulled image "wazuh/wazuh-dashboard:4.14.2" in 24.381s (24.381s including waiting). Image size: 444184713 bytes.
  Normal   Created    18m (x9 over 34m)      kubelet            Created container: wazuh-dashboard
  Normal   Started    18m (x9 over 34m)      kubelet            Started container wazuh-dashboard
  Warning  BackOff    4m14s (x138 over 34m)  kubelet            Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-58ccf49468-pct2c_soc(d7f8af46-296d-4d2d-b11e-4ec3b0eb3756)
  Normal   Pulled     2m42s (x11 over 34m)   kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
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
--- Description for wazuh-indexer-0 ---
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  5m28s                  default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Normal   Pulling    5m28s                  kubelet            Pulling image "busybox"
  Normal   Pulled     5m27s                  kubelet            Successfully pulled image "busybox" in 835ms (835ms including waiting). Image size: 2222260 bytes.
  Normal   Created    5m27s                  kubelet            Created container: fix-permissions
  Normal   Started    5m27s                  kubelet            Started container fix-permissions
  Normal   Pulling    5m27s                  kubelet            Pulling image "busybox"
  Normal   Pulled     5m26s                  kubelet            Successfully pulled image "busybox" in 638ms (638ms including waiting). Image size: 2222260 bytes.
  Normal   Created    5m26s                  kubelet            Created container: increase-vm-max-map
  Normal   Started    5m26s                  kubelet            Started container increase-vm-max-map
  Normal   Started    3m42s (x5 over 5m26s)  kubelet            Started container wazuh-indexer
  Normal   Pulled     2m17s (x6 over 5m26s)  kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal   Created    2m17s (x6 over 5m26s)  kubelet            Created container: wazuh-indexer
  Warning  BackOff    7s (x22 over 5m16s)    kubelet            Back-off restarting failed container wazuh-indexer in pod wazuh-indexer-0_soc(afe4d53f-661b-4e6f-aabc-c00dde9da8e7)
--- Logs for wazuh-indexer-0 (Current) ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.SslSettingsManager.loadConfigurations(SslSettingsManager.java:145) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.SslSettingsManager.buildSslContexts(SslSettingsManager.java:101) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.SslSettingsManager.<init>(SslSettingsManager.java:88) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.OpenSearchSecuritySSLPlugin.<init>(OpenSearchSecuritySSLPlugin.java:249) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.OpenSearchSecurityPlugin.<init>(OpenSearchSecurityPlugin.java:326) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.plugins.PluginsService.loadPlugin(PluginsService.java:809) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.plugins.PluginsService.loadBundle(PluginsService.java:757) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.plugins.PluginsService.loadBundles(PluginsService.java:551) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.plugins.PluginsService.<init>(PluginsService.java:197) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.node.Node.<init>(Node.java:524) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.node.Node.<init>(Node.java:451) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.Bootstrap$5.<init>(Bootstrap.java:242) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.Bootstrap.setup(Bootstrap.java:242) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.Bootstrap.init(Bootstrap.java:404) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.OpenSearch.init(OpenSearch.java:181) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	... 6 more
[pod/wazuh-indexer-0/wazuh-indexer] uncaught exception in thread [main]
[pod/wazuh-indexer-0/wazuh-indexer] java.lang.IllegalStateException: failed to load plugin class [org.opensearch.security.OpenSearchSecurityPlugin]
[pod/wazuh-indexer-0/wazuh-indexer] Likely root cause: OpenSearchException[Unable to read the file /usr/share/wazuh-indexer/config/certs/indexer-key.pem. Please make sure this files exists and is readable regarding to permissions]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.config.SslCertificatesLoader.resolvePath(SslCertificatesLoader.java:170)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.config.SslCertificatesLoader.buildPemKeyStoreConfiguration(SslCertificatesLoader.java:159)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.config.SslCertificatesLoader.loadConfiguration(SslCertificatesLoader.java:93)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.SslSettingsManager.loadConfigurations(SslSettingsManager.java:145)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.SslSettingsManager.buildSslContexts(SslSettingsManager.java:101)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.SslSettingsManager.<init>(SslSettingsManager.java:88)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.ssl.OpenSearchSecuritySSLPlugin.<init>(OpenSearchSecuritySSLPlugin.java:249)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.security.OpenSearchSecurityPlugin.<init>(OpenSearchSecurityPlugin.java:326)
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.plugins.PluginsService.loadPlugin(PluginsService.java:809)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.plugins.PluginsService.loadBundle(PluginsService.java:757)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.plugins.PluginsService.loadBundles(PluginsService.java:551)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.plugins.PluginsService.<init>(PluginsService.java:197)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.node.Node.<init>(Node.java:524)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.node.Node.<init>(Node.java:451)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.Bootstrap$5.<init>(Bootstrap.java:242)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.Bootstrap.setup(Bootstrap.java:242)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.Bootstrap.init(Bootstrap.java:404)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.OpenSearch.init(OpenSearch.java:181)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.OpenSearch.execute(OpenSearch.java:172)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.cli.EnvironmentAwareCommand.execute(EnvironmentAwareCommand.java:104)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.cli.Command.mainWithoutErrorHandling(Command.java:138)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.cli.Command.main(Command.java:101)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.OpenSearch.main(OpenSearch.java:138)
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.OpenSearch.main(OpenSearch.java:104)
[pod/wazuh-indexer-0/wazuh-indexer] For complete error details, refer to the log at /var/log/wazuh-indexer/wazuh-cluster.log
--- Logs for wazuh-indexer-0 (Previous) ---
Error from server (BadRequest): previous terminated container "fix-permissions" in pod "wazuh-indexer-0" not found
Failed to fetch previous logs
--- Description for wazuh-manager-648d6f9b5d-zn8tz ---
    SecretName:  wazuh-manager-certs
    Optional:    false
  kube-api-access-fgbzr:
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  34m   default-scheduler  Successfully assigned soc/wazuh-manager-648d6f9b5d-zn8tz to k8-node-20
  Normal  Pulling    34m   kubelet            Pulling image "busybox"
  Normal  Pulled     34m   kubelet            Successfully pulled image "busybox" in 803ms (23.663s including waiting). Image size: 2222260 bytes.
  Normal  Created    34m   kubelet            Created container: wait-for-indexer
  Normal  Started    34m   kubelet            Started container wait-for-indexer
--- Logs for wazuh-manager-648d6f9b5d-zn8tz (Current) ---
Error from server (BadRequest): container "wazuh-manager" in pod "wazuh-manager-648d6f9b5d-zn8tz" is waiting to start: PodInitializing
Failed to fetch current logs
--- Logs for wazuh-manager-648d6f9b5d-zn8tz (Previous) ---
Error from server (BadRequest): previous terminated container "wait-for-indexer" in pod "wazuh-manager-648d6f9b5d-zn8tz" not found
Failed to fetch previous logs
