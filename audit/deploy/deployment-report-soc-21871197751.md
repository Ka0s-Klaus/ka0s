Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 15:32:57 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS        AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-2zz85                  1/2     Error              1 (27s ago)     56s   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-622x6                  2/2     Running            2 (15s ago)     57s   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-67sx4                  0/2     PodInitializing    0               55s   192.168.1.30    k8-node-30   <none>           <none>
wazuh-agent-82b4v                  1/2     Error              1 (33s ago)     56s   192.168.1.20    k8-node-20   <none>           <none>
wazuh-cert-generator-v7-62v5x      0/1     Completed          0               60s   172.16.74.60    k8-manager   <none>           <none>
wazuh-dashboard-58ccf49468-pct2c   0/1     CrashLoopBackOff   13 (83s ago)    43m   172.16.209.23   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     CrashLoopBackOff   7 (3m15s ago)   14m   172.16.209.58   k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     0/1     Init:0/1           0               43m   172.16.209.7    k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      3h6m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             3h6m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   3h6m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   3h6m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-2zz85 Error
wazuh-agent-82b4v Error
wazuh-dashboard-58ccf49468-pct2c CrashLoopBackOff
wazuh-indexer-0 CrashLoopBackOff
wazuh-manager-648d6f9b5d-zn8tz Init:0/1
--- Description for wazuh-agent-2zz85 ---
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  57s                default-scheduler  Successfully assigned soc/wazuh-agent-2zz85 to k8-node-40
  Normal   Pulling    56s                kubelet            Pulling image "busybox"
  Normal   Pulled     55s                kubelet            Successfully pulled image "busybox" in 1.244s (1.244s including waiting). Image size: 2222260 bytes.
  Normal   Created    55s                kubelet            Created container: config-init
  Normal   Started    54s                kubelet            Started container config-init
  Normal   Pulling    53s                kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     52s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 1.549s (1.549s including waiting). Image size: 74848715 bytes.
  Normal   Created    51s                kubelet            Created container: wazuh-agent
  Normal   Started    51s                kubelet            Started container wazuh-agent
  Normal   Pulled     50s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.61s (1.61s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    27s (x2 over 51s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Created    25s (x2 over 49s)  kubelet            Created container: suricata
  Normal   Started    25s (x2 over 49s)  kubelet            Started container suricata
  Normal   Pulled     25s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.731s (1.731s including waiting). Image size: 141495340 bytes.
  Warning  BackOff    3s                 kubelet            Back-off restarting failed container suricata in pod wazuh-agent-2zz85_soc(da85d767-2f81-4683-beeb-e63612e4efb7)
--- Logs for wazuh-agent-2zz85 (Current) ---
[pod/wazuh-agent-2zz85/config-init] Detecting interface...
[pod/wazuh-agent-2zz85/config-init] Detected interface: enp2s0
[pod/wazuh-agent-2zz85/config-init] Generating Suricata config...
[pod/wazuh-agent-2zz85/config-init] Config verification:
[pod/wazuh-agent-2zz85/config-init]   - interface: enp2s0
[pod/wazuh-agent-2zz85/wazuh-agent] [s6-init] making user provided files available at /var/run/s6/etc...exited 0.
[pod/wazuh-agent-2zz85/wazuh-agent] [s6-init] ensuring user provided files have correct perms...exited 0.
[pod/wazuh-agent-2zz85/wazuh-agent] [fix-attrs.d] applying ownership & permissions fixes...
[pod/wazuh-agent-2zz85/wazuh-agent] [fix-attrs.d] done.
[pod/wazuh-agent-2zz85/wazuh-agent] [cont-init.d] executing container initialization scripts...
[pod/wazuh-agent-2zz85/wazuh-agent] [cont-init.d] 0-wazuh-init: executing... 
[pod/wazuh-agent-2zz85/wazuh-agent] No Wazuh configuration files to mount...
[pod/wazuh-agent-2zz85/wazuh-agent] ossec.conf configuration
[pod/wazuh-agent-2zz85/wazuh-agent] sed: cannot rename /var/ossec/etc/sedLvlkKm: Device or resource busy
[pod/wazuh-agent-2zz85/wazuh-agent] sed: cannot rename /var/ossec/etc/sed6Z3eer: Device or resource busy
[pod/wazuh-agent-2zz85/wazuh-agent] sed: cannot rename /var/ossec/etc/sed3tU1pT: Device or resource busy
[pod/wazuh-agent-2zz85/wazuh-agent] sed: cannot rename /var/ossec/etc/sedo7bp0G: Device or resource busy
[pod/wazuh-agent-2zz85/wazuh-agent] sed: cannot rename /var/ossec/etc/sedsHn5LN: Device or resource busy
[pod/wazuh-agent-2zz85/wazuh-agent] [cont-init.d] 0-wazuh-init: exited 1.
[pod/wazuh-agent-2zz85/wazuh-agent] [cont-init.d] 1-agent: executing... 
[pod/wazuh-agent-2zz85/suricata]   Capture and IPS:
[pod/wazuh-agent-2zz85/suricata] 	-F <bpf filter file>                 : bpf filter file
[pod/wazuh-agent-2zz85/suricata] 	-k [all|none]                        : force checksum check (all) or disabled it (none)
[pod/wazuh-agent-2zz85/suricata] 	-i <dev or ip>                       : run in pcap live mode
[pod/wazuh-agent-2zz85/suricata] 	--pcap[=<dev>]                       : run in pcap mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-2zz85/suricata] 	--pcap-buffer-size                   : size of the pcap buffer value from 0 - 2147483647
[pod/wazuh-agent-2zz85/suricata] 	-q <qid[:qid]>                       : run in inline nfqueue mode (use colon to specify a range of queues)
[pod/wazuh-agent-2zz85/suricata] 	--af-packet[=<dev>]                  : run in af-packet mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-2zz85/suricata] 	--dpdk                               : run in dpdk mode, uses interfaces from suricata.yaml
[pod/wazuh-agent-2zz85/suricata] 	--reject-dev <dev>                   : send reject packets from this interface
[pod/wazuh-agent-2zz85/suricata] 
[pod/wazuh-agent-2zz85/suricata]   Capture Files:
[pod/wazuh-agent-2zz85/suricata] 	-r <path>                            : run in pcap file/offline mode
[pod/wazuh-agent-2zz85/suricata] 	--pcap-file-continuous               : when running in pcap mode with a directory, continue checking directory for pcaps until interrupted
[pod/wazuh-agent-2zz85/suricata] 	--pcap-file-delete                   : when running in replay mode (-r with directory or file), will delete pcap files that have been processed when done
[pod/wazuh-agent-2zz85/suricata] 	--pcap-file-recursive                : will descend into subdirectories when running in replay mode (-r)
[pod/wazuh-agent-2zz85/suricata] 	--pcap-file-buffer-size              : set read buffer size (setvbuf)
[pod/wazuh-agent-2zz85/suricata] 	--erf-in <path>                      : process an ERF file
[pod/wazuh-agent-2zz85/suricata] 
[pod/wazuh-agent-2zz85/suricata]   Detection:
[pod/wazuh-agent-2zz85/suricata] 	-s <path>                            : path to signature file loaded in addition to suricata.yaml settings (optional)
[pod/wazuh-agent-2zz85/suricata] 	-S <path>                            : path to signature file loaded exclusively (optional)
[pod/wazuh-agent-2zz85/suricata] 	--disable-detection                  : disable detection engine
[pod/wazuh-agent-2zz85/suricata] 	--engine-analysis                    : print reports on analysis of different sections in the engine and exit.
[pod/wazuh-agent-2zz85/suricata] 	                                       Please have a look at the conf parameter engine-analysis on what reports
[pod/wazuh-agent-2zz85/suricata] 	                                       can be printed
[pod/wazuh-agent-2zz85/suricata] 
[pod/wazuh-agent-2zz85/suricata]   Firewall:
[pod/wazuh-agent-2zz85/suricata] 	--firewall                           : enable firewall mode
[pod/wazuh-agent-2zz85/suricata] 	--firewall-rules-exclusive=<path>    : path to firewall rule file loaded exclusively
[pod/wazuh-agent-2zz85/suricata] 
[pod/wazuh-agent-2zz85/suricata]   Info:
[pod/wazuh-agent-2zz85/suricata] 	-V                                   : display Suricata version
[pod/wazuh-agent-2zz85/suricata] 	--list-keywords[=all|csv|<kword>]    : list keywords implemented by the engine
[pod/wazuh-agent-2zz85/suricata] 	--list-runmodes                      : list supported runmodes
[pod/wazuh-agent-2zz85/suricata] 	--list-app-layer-protos              : list supported app layer protocols
[pod/wazuh-agent-2zz85/suricata] 	--list-app-layer-hooks               : list supported app layer hooks for use in rules
[pod/wazuh-agent-2zz85/suricata] 	--list-app-layer-frames              : list supported app layer frames for use with 'frame' keyword
[pod/wazuh-agent-2zz85/suricata] 	--dump-config                        : show the running configuration
[pod/wazuh-agent-2zz85/suricata] 	--dump-features                      : display provided features
[pod/wazuh-agent-2zz85/suricata] 	--build-info                         : display build information
[pod/wazuh-agent-2zz85/suricata] 
[pod/wazuh-agent-2zz85/suricata]   Testing:
[pod/wazuh-agent-2zz85/suricata] 	--simulate-ips                       : force engine into IPS mode. Useful for QA
[pod/wazuh-agent-2zz85/suricata] 
[pod/wazuh-agent-2zz85/suricata] 
[pod/wazuh-agent-2zz85/suricata] To run Suricata with default configuration on interface eth0 with signature file "signatures.rules", run the command as:
[pod/wazuh-agent-2zz85/suricata] 
[pod/wazuh-agent-2zz85/suricata] /usr/bin/suricata -c suricata.yaml -s signatures.rules -i eth0 
[pod/wazuh-agent-2zz85/suricata] 
--- Logs for wazuh-agent-2zz85 (Previous) ---
Error from server (BadRequest): previous terminated container "config-init" in pod "wazuh-agent-2zz85" not found
Failed to fetch previous logs
--- Description for wazuh-agent-82b4v ---
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  58s                default-scheduler  Successfully assigned soc/wazuh-agent-82b4v to k8-node-20
  Normal   Pulling    58s                kubelet            Pulling image "busybox"
  Normal   Pulled     57s                kubelet            Successfully pulled image "busybox" in 632ms (632ms including waiting). Image size: 2222260 bytes.
  Normal   Created    57s                kubelet            Created container: config-init
  Normal   Started    57s                kubelet            Started container config-init
  Normal   Pulling    57s                kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     56s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 617ms (617ms including waiting). Image size: 74848715 bytes.
  Normal   Created    56s                kubelet            Created container: wazuh-agent
  Normal   Started    56s                kubelet            Started container wazuh-agent
  Normal   Pulled     56s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 648ms (648ms including waiting). Image size: 141495340 bytes.
  Normal   Created    33s (x2 over 55s)  kubelet            Created container: suricata
  Normal   Started    33s (x2 over 55s)  kubelet            Started container suricata
  Normal   Pulled     33s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 696ms (696ms including waiting). Image size: 141495340 bytes.
  Warning  BackOff    12s                kubelet            Back-off restarting failed container suricata in pod wazuh-agent-82b4v_soc(4b9eb026-2f8b-4edb-ac3d-c4d32e9b82ba)
  Normal   Pulling    1s (x3 over 56s)   kubelet            Pulling image "jasonish/suricata:latest"
--- Logs for wazuh-agent-82b4v (Current) ---
[pod/wazuh-agent-82b4v/wazuh-agent] [s6-init] making user provided files available at /var/run/s6/etc...exited 0.
[pod/wazuh-agent-82b4v/wazuh-agent] [s6-init] ensuring user provided files have correct perms...exited 0.
[pod/wazuh-agent-82b4v/wazuh-agent] [fix-attrs.d] applying ownership & permissions fixes...
[pod/wazuh-agent-82b4v/wazuh-agent] [fix-attrs.d] done.
[pod/wazuh-agent-82b4v/wazuh-agent] [cont-init.d] executing container initialization scripts...
[pod/wazuh-agent-82b4v/wazuh-agent] [cont-init.d] 0-wazuh-init: executing... 
[pod/wazuh-agent-82b4v/wazuh-agent] No Wazuh configuration files to mount...
[pod/wazuh-agent-82b4v/wazuh-agent] ossec.conf configuration
[pod/wazuh-agent-82b4v/wazuh-agent] sed: cannot rename /var/ossec/etc/sedW3f00b: Device or resource busy
[pod/wazuh-agent-82b4v/wazuh-agent] sed: cannot rename /var/ossec/etc/sedoydnRm: Device or resource busy
[pod/wazuh-agent-82b4v/wazuh-agent] sed: cannot rename /var/ossec/etc/sed3HMlZu: Device or resource busy
[pod/wazuh-agent-82b4v/wazuh-agent] sed: cannot rename /var/ossec/etc/sedd1zaL1: Device or resource busy
[pod/wazuh-agent-82b4v/wazuh-agent] sed: cannot rename /var/ossec/etc/sedgA6tvf: Device or resource busy
[pod/wazuh-agent-82b4v/wazuh-agent] [cont-init.d] 0-wazuh-init: exited 1.
[pod/wazuh-agent-82b4v/wazuh-agent] [cont-init.d] 1-agent: executing... 
[pod/wazuh-agent-82b4v/suricata]   Capture and IPS:
[pod/wazuh-agent-82b4v/suricata] 	-F <bpf filter file>                 : bpf filter file
[pod/wazuh-agent-82b4v/suricata] 	-k [all|none]                        : force checksum check (all) or disabled it (none)
[pod/wazuh-agent-82b4v/suricata] 	-i <dev or ip>                       : run in pcap live mode
[pod/wazuh-agent-82b4v/suricata] 	--pcap[=<dev>]                       : run in pcap mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-82b4v/suricata] 	--pcap-buffer-size                   : size of the pcap buffer value from 0 - 2147483647
[pod/wazuh-agent-82b4v/suricata] 	-q <qid[:qid]>                       : run in inline nfqueue mode (use colon to specify a range of queues)
[pod/wazuh-agent-82b4v/suricata] 	--af-packet[=<dev>]                  : run in af-packet mode, no value select interfaces from suricata.yaml
[pod/wazuh-agent-82b4v/suricata] 	--dpdk                               : run in dpdk mode, uses interfaces from suricata.yaml
[pod/wazuh-agent-82b4v/suricata] 	--reject-dev <dev>                   : send reject packets from this interface
[pod/wazuh-agent-82b4v/suricata] 
[pod/wazuh-agent-82b4v/suricata]   Capture Files:
[pod/wazuh-agent-82b4v/suricata] 	-r <path>                            : run in pcap file/offline mode
[pod/wazuh-agent-82b4v/suricata] 	--pcap-file-continuous               : when running in pcap mode with a directory, continue checking directory for pcaps until interrupted
[pod/wazuh-agent-82b4v/suricata] 	--pcap-file-delete                   : when running in replay mode (-r with directory or file), will delete pcap files that have been processed when done
[pod/wazuh-agent-82b4v/suricata] 	--pcap-file-recursive                : will descend into subdirectories when running in replay mode (-r)
[pod/wazuh-agent-82b4v/suricata] 	--pcap-file-buffer-size              : set read buffer size (setvbuf)
[pod/wazuh-agent-82b4v/suricata] 	--erf-in <path>                      : process an ERF file
[pod/wazuh-agent-82b4v/suricata] 
[pod/wazuh-agent-82b4v/suricata]   Detection:
[pod/wazuh-agent-82b4v/suricata] 	-s <path>                            : path to signature file loaded in addition to suricata.yaml settings (optional)
[pod/wazuh-agent-82b4v/suricata] 	-S <path>                            : path to signature file loaded exclusively (optional)
[pod/wazuh-agent-82b4v/suricata] 	--disable-detection                  : disable detection engine
[pod/wazuh-agent-82b4v/suricata] 	--engine-analysis                    : print reports on analysis of different sections in the engine and exit.
[pod/wazuh-agent-82b4v/suricata] 	                                       Please have a look at the conf parameter engine-analysis on what reports
[pod/wazuh-agent-82b4v/suricata] 	                                       can be printed
[pod/wazuh-agent-82b4v/suricata] 
[pod/wazuh-agent-82b4v/suricata]   Firewall:
[pod/wazuh-agent-82b4v/suricata] 	--firewall                           : enable firewall mode
[pod/wazuh-agent-82b4v/suricata] 	--firewall-rules-exclusive=<path>    : path to firewall rule file loaded exclusively
[pod/wazuh-agent-82b4v/suricata] 
[pod/wazuh-agent-82b4v/suricata]   Info:
[pod/wazuh-agent-82b4v/suricata] 	-V                                   : display Suricata version
[pod/wazuh-agent-82b4v/suricata] 	--list-keywords[=all|csv|<kword>]    : list keywords implemented by the engine
[pod/wazuh-agent-82b4v/suricata] 	--list-runmodes                      : list supported runmodes
[pod/wazuh-agent-82b4v/suricata] 	--list-app-layer-protos              : list supported app layer protocols
[pod/wazuh-agent-82b4v/suricata] 	--list-app-layer-hooks               : list supported app layer hooks for use in rules
[pod/wazuh-agent-82b4v/suricata] 	--list-app-layer-frames              : list supported app layer frames for use with 'frame' keyword
[pod/wazuh-agent-82b4v/suricata] 	--dump-config                        : show the running configuration
[pod/wazuh-agent-82b4v/suricata] 	--dump-features                      : display provided features
[pod/wazuh-agent-82b4v/suricata] 	--build-info                         : display build information
[pod/wazuh-agent-82b4v/suricata] 
[pod/wazuh-agent-82b4v/suricata]   Testing:
[pod/wazuh-agent-82b4v/suricata] 	--simulate-ips                       : force engine into IPS mode. Useful for QA
[pod/wazuh-agent-82b4v/suricata] 
[pod/wazuh-agent-82b4v/suricata] 
[pod/wazuh-agent-82b4v/suricata] To run Suricata with default configuration on interface eth0 with signature file "signatures.rules", run the command as:
[pod/wazuh-agent-82b4v/suricata] 
[pod/wazuh-agent-82b4v/suricata] /usr/bin/suricata -c suricata.yaml -s signatures.rules -i eth0 
[pod/wazuh-agent-82b4v/suricata] 
[pod/wazuh-agent-82b4v/config-init] Detecting interface...
[pod/wazuh-agent-82b4v/config-init] Detected interface: enp1s0
[pod/wazuh-agent-82b4v/config-init] Generating Suricata config...
[pod/wazuh-agent-82b4v/config-init] Config verification:
[pod/wazuh-agent-82b4v/config-init]   - interface: enp1s0
--- Logs for wazuh-agent-82b4v (Previous) ---
Error from server (BadRequest): previous terminated container "config-init" in pod "wazuh-agent-82b4v" not found
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
  Normal   Scheduled  43m                    default-scheduler  Successfully assigned soc/wazuh-dashboard-58ccf49468-pct2c to k8-node-20
  Normal   Pulling    43m                    kubelet            Pulling image "wazuh/wazuh-dashboard:4.14.2"
  Normal   Pulled     43m                    kubelet            Successfully pulled image "wazuh/wazuh-dashboard:4.14.2" in 24.381s (24.381s including waiting). Image size: 444184713 bytes.
  Normal   Created    27m (x9 over 43m)      kubelet            Created container: wazuh-dashboard
  Normal   Started    27m (x9 over 43m)      kubelet            Started container wazuh-dashboard
  Warning  BackOff    3m10s (x184 over 43m)  kubelet            Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-58ccf49468-pct2c_soc(d7f8af46-296d-4d2d-b11e-4ec3b0eb3756)
  Normal   Pulled     89s (x13 over 43m)     kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
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
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  14m                  default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Normal   Pulling    14m                  kubelet            Pulling image "busybox"
  Normal   Pulled     14m                  kubelet            Successfully pulled image "busybox" in 835ms (835ms including waiting). Image size: 2222260 bytes.
  Normal   Created    14m                  kubelet            Created container: fix-permissions
  Normal   Started    14m                  kubelet            Started container fix-permissions
  Normal   Pulling    14m                  kubelet            Pulling image "busybox"
  Normal   Pulled     14m                  kubelet            Successfully pulled image "busybox" in 638ms (638ms including waiting). Image size: 2222260 bytes.
  Normal   Created    14m                  kubelet            Created container: increase-vm-max-map
  Normal   Started    14m                  kubelet            Started container increase-vm-max-map
  Normal   Started    12m (x5 over 14m)    kubelet            Started container wazuh-indexer
  Normal   Created    11m (x6 over 14m)    kubelet            Created container: wazuh-indexer
  Warning  BackOff    4m4s (x44 over 14m)  kubelet            Back-off restarting failed container wazuh-indexer in pod wazuh-indexer-0_soc(afe4d53f-661b-4e6f-aabc-c00dde9da8e7)
  Normal   Pulled     3m23s (x8 over 14m)  kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
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
[pod/wazuh-indexer-0/wazuh-indexer] uncaught exception in thread [main]
[pod/wazuh-indexer-0/wazuh-indexer] 	at org.opensearch.bootstrap.OpenSearch.init(OpenSearch.java:181) ~[opensearch-2.19.4.jar:2.19.4]
[pod/wazuh-indexer-0/wazuh-indexer] 	... 6 more
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
  Normal  Scheduled  43m   default-scheduler  Successfully assigned soc/wazuh-manager-648d6f9b5d-zn8tz to k8-node-20
  Normal  Pulling    43m   kubelet            Pulling image "busybox"
  Normal  Pulled     43m   kubelet            Successfully pulled image "busybox" in 803ms (23.663s including waiting). Image size: 2222260 bytes.
  Normal  Created    43m   kubelet            Created container: wait-for-indexer
  Normal  Started    43m   kubelet            Started container wait-for-indexer
--- Logs for wazuh-manager-648d6f9b5d-zn8tz (Current) ---
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
[pod/wazuh-manager-648d6f9b5d-zn8tz/wait-for-indexer] waiting for wazuh-indexer
Error from server (BadRequest): container "wazuh-manager" in pod "wazuh-manager-648d6f9b5d-zn8tz" is waiting to start: PodInitializing
Failed to fetch current logs
--- Logs for wazuh-manager-648d6f9b5d-zn8tz (Previous) ---
Error from server (BadRequest): previous terminated container "wait-for-indexer" in pod "wazuh-manager-648d6f9b5d-zn8tz" not found
Failed to fetch previous logs
