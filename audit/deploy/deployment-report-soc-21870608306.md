Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 15:18:32 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS         AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-5w2ls                  1/2     CrashLoopBackOff   7 (15s ago)      15m   192.168.1.30    k8-node-30   <none>           <none>
wazuh-agent-84kjf                  1/2     CrashLoopBackOff   7 (89s ago)      15m   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-wsnxx                  1/2     CrashLoopBackOff   7 (2m16s ago)    15m   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-zrxbd                  1/2     CrashLoopBackOff   7 (84s ago)      15m   192.168.1.40    k8-node-40   <none>           <none>
wazuh-cert-generator-v6-glhjk      0/1     Completed          0                61s   172.16.74.31    k8-manager   <none>           <none>
wazuh-dashboard-58ccf49468-pct2c   0/1     CrashLoopBackOff   10 (2m23s ago)   29m   172.16.209.23   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Error              7                11m   172.16.209.26   k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     0/1     Init:0/1           0                29m   172.16.209.7    k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      172m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             172m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   172m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   172m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-5w2ls CrashLoopBackOff
wazuh-agent-84kjf CrashLoopBackOff
wazuh-agent-wsnxx CrashLoopBackOff
wazuh-agent-zrxbd CrashLoopBackOff
wazuh-dashboard-58ccf49468-pct2c CrashLoopBackOff
wazuh-indexer-0 Init:0/2
wazuh-manager-648d6f9b5d-zn8tz Init:0/1
--- Description for wazuh-agent-5w2ls ---
Events:
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  15m                   default-scheduler  Successfully assigned soc/wazuh-agent-5w2ls to k8-node-30
  Normal   Pulling    15m                   kubelet            Pulling image "busybox"
  Normal   Pulled     15m                   kubelet            Successfully pulled image "busybox" in 4.849s (4.849s including waiting). Image size: 2222260 bytes.
  Normal   Created    15m                   kubelet            Created container: config-init
  Normal   Started    15m                   kubelet            Started container config-init
  Normal   Pulling    15m                   kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     15m                   kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 6.324s (6.324s including waiting). Image size: 74848715 bytes.
  Normal   Started    15m                   kubelet            Started container wazuh-agent
  Normal   Created    15m                   kubelet            Created container: wazuh-agent
  Normal   Pulled     14m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 6.334s (6.335s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     14m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 5.787s (5.787s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     13m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 6.884s (6.884s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     12m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 6.195s (6.195s including waiting). Image size: 141495340 bytes.
  Normal   Created    12m (x4 over 14m)     kubelet            Created container: suricata
  Normal   Started    12m (x4 over 14m)     kubelet            Started container suricata
  Warning  BackOff    3m51s (x35 over 13m)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-5w2ls_soc(4ae14453-e814-405e-b98f-d2f8745b1667)
  Normal   Pulling    47s (x8 over 15m)     kubelet            Pulling image "jasonish/suricata:latest"
--- Description for wazuh-agent-84kjf ---
Events:
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  15m                   default-scheduler  Successfully assigned soc/wazuh-agent-84kjf to k8-node-20
  Normal   Pulling    15m                   kubelet            Pulling image "busybox"
  Normal   Pulled     15m                   kubelet            Successfully pulled image "busybox" in 657ms (657ms including waiting). Image size: 2222260 bytes.
  Normal   Created    15m                   kubelet            Created container: config-init
  Normal   Started    15m                   kubelet            Started container config-init
  Normal   Pulling    15m                   kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Started    15m                   kubelet            Started container wazuh-agent
  Normal   Created    15m                   kubelet            Created container: wazuh-agent
  Normal   Pulled     15m                   kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 729ms (730ms including waiting). Image size: 74848715 bytes.
  Normal   Pulled     15m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 649ms (649ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     14m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 781ms (781ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     14m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 664ms (664ms including waiting). Image size: 141495340 bytes.
  Normal   Created    13m (x4 over 15m)     kubelet            Created container: suricata
  Normal   Started    13m (x4 over 15m)     kubelet            Started container suricata
  Normal   Pulled     13m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 668ms (668ms including waiting). Image size: 141495340 bytes.
  Warning  BackOff    4m19s (x40 over 14m)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-84kjf_soc(202488f2-a9cf-4f7c-adca-407ced85e95b)
  Normal   Pulling    113s (x8 over 15m)    kubelet            Pulling image "jasonish/suricata:latest"
--- Description for wazuh-agent-wsnxx ---
Events:
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  15m                   default-scheduler  Successfully assigned soc/wazuh-agent-wsnxx to k8-manager
  Normal   Pulling    15m                   kubelet            Pulling image "busybox"
  Normal   Pulled     15m                   kubelet            Successfully pulled image "busybox" in 631ms (631ms including waiting). Image size: 2222260 bytes.
  Normal   Created    15m                   kubelet            Created container: config-init
  Normal   Started    15m                   kubelet            Started container config-init
  Normal   Pulling    15m                   kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     15m                   kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 725ms (725ms including waiting). Image size: 74848715 bytes.
  Normal   Created    15m                   kubelet            Created container: wazuh-agent
  Normal   Started    15m                   kubelet            Started container wazuh-agent
  Normal   Pulled     15m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 619ms (619ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     15m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 642ms (642ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     14m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 690ms (690ms including waiting). Image size: 141495340 bytes.
  Normal   Created    13m (x4 over 15m)     kubelet            Created container: suricata
  Normal   Pulled     13m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 653ms (653ms including waiting). Image size: 141495340 bytes.
  Normal   Started    13m (x4 over 15m)     kubelet            Started container suricata
  Warning  BackOff    4m52s (x40 over 14m)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-wsnxx_soc(6bd1e289-a3af-487b-be12-909ca63023b2)
  Normal   Pulling    2m39s (x8 over 15m)   kubelet            Pulling image "jasonish/suricata:latest"
--- Description for wazuh-agent-zrxbd ---
Events:
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  15m                   default-scheduler  Successfully assigned soc/wazuh-agent-zrxbd to k8-node-40
  Normal   Pulling    15m                   kubelet            Pulling image "busybox"
  Normal   Pulled     15m                   kubelet            Successfully pulled image "busybox" in 1.286s (1.286s including waiting). Image size: 2222260 bytes.
  Normal   Created    15m                   kubelet            Created container: config-init
  Normal   Started    15m                   kubelet            Started container config-init
  Normal   Pulling    15m                   kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     15m                   kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 1.476s (1.476s including waiting). Image size: 74848715 bytes.
  Normal   Started    15m                   kubelet            Started container wazuh-agent
  Normal   Created    15m                   kubelet            Created container: wazuh-agent
  Normal   Pulled     15m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.781s (1.781s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     15m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.821s (1.821s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     14m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.87s (1.87s including waiting). Image size: 141495340 bytes.
  Normal   Created    13m (x4 over 15m)     kubelet            Created container: suricata
  Normal   Started    13m (x4 over 15m)     kubelet            Started container suricata
  Normal   Pulled     13m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.613s (1.613s including waiting). Image size: 141495340 bytes.
  Warning  BackOff    4m30s (x38 over 14m)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-zrxbd_soc(e2f0d1f8-6ab5-43bc-a3d4-79164ef6891d)
  Normal   Pulling    111s (x8 over 15m)    kubelet            Pulling image "jasonish/suricata:latest"
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
  Normal   Scheduled  29m                    default-scheduler  Successfully assigned soc/wazuh-dashboard-58ccf49468-pct2c to k8-node-20
  Normal   Pulling    29m                    kubelet            Pulling image "wazuh/wazuh-dashboard:4.14.2"
  Normal   Pulled     29m                    kubelet            Successfully pulled image "wazuh/wazuh-dashboard:4.14.2" in 24.381s (24.381s including waiting). Image size: 444184713 bytes.
  Normal   Created    12m (x9 over 29m)      kubelet            Created container: wazuh-dashboard
  Normal   Started    12m (x9 over 29m)      kubelet            Started container wazuh-dashboard
  Warning  BackOff    3m51s (x114 over 28m)  kubelet            Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-58ccf49468-pct2c_soc(d7f8af46-296d-4d2d-b11e-4ec3b0eb3756)
  Normal   Pulled     2m29s (x10 over 28m)   kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
--- Description for wazuh-indexer-0 ---
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  3s    default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Normal  Pulling    3s    kubelet            Pulling image "busybox"
  Normal  Pulled     2s    kubelet            Successfully pulled image "busybox" in 835ms (835ms including waiting). Image size: 2222260 bytes.
  Normal  Created    2s    kubelet            Created container: fix-permissions
  Normal  Started    2s    kubelet            Started container fix-permissions
  Normal  Pulling    2s    kubelet            Pulling image "busybox"
  Normal  Pulled     1s    kubelet            Successfully pulled image "busybox" in 638ms (638ms including waiting). Image size: 2222260 bytes.
  Normal  Created    1s    kubelet            Created container: increase-vm-max-map
  Normal  Started    1s    kubelet            Started container increase-vm-max-map
  Normal  Pulled     1s    kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal  Created    1s    kubelet            Created container: wazuh-indexer
  Normal  Started    1s    kubelet            Started container wazuh-indexer
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
  Normal  Scheduled  29m   default-scheduler  Successfully assigned soc/wazuh-manager-648d6f9b5d-zn8tz to k8-node-20
  Normal  Pulling    29m   kubelet            Pulling image "busybox"
  Normal  Pulled     29m   kubelet            Successfully pulled image "busybox" in 803ms (23.663s including waiting). Image size: 2222260 bytes.
  Normal  Created    29m   kubelet            Created container: wait-for-indexer
  Normal  Started    29m   kubelet            Started container wait-for-indexer
