Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 14:56:29 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-2lq9x                  1/2     Error              2 (45s ago)     89s     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-kbrrt                  1/2     Error              0               71s     192.168.1.30    k8-node-30   <none>           <none>
wazuh-agent-tr5jz                  1/2     Error              2 (40s ago)     90s     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-vfrdf                  2/2     Running            2 (29s ago)     84s     192.168.1.40    k8-node-40   <none>           <none>
wazuh-cert-generator-v6-sdbmm      0/1     Completed          0               90s     172.16.74.51    k8-manager   <none>           <none>
wazuh-dashboard-58ccf49468-pct2c   0/1     CrashLoopBackOff   6 (58s ago)     7m20s   172.16.209.23   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     CrashLoopBackOff   5 (2m28s ago)   6m12s   172.16.209.4    k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     0/1     Init:0/1           0               7m18s   172.16.209.7    k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      150m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             150m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   150m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   150m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-2lq9x Error
wazuh-agent-kbrrt Error
wazuh-agent-tr5jz Error
wazuh-dashboard-58ccf49468-pct2c CrashLoopBackOff
wazuh-indexer-0 CrashLoopBackOff
wazuh-manager-648d6f9b5d-zn8tz Init:0/1
--- Description for wazuh-agent-2lq9x ---
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  89s                default-scheduler  Successfully assigned soc/wazuh-agent-2lq9x to k8-manager
  Normal   Pulling    90s                kubelet            Pulling image "busybox"
  Normal   Pulled     89s                kubelet            Successfully pulled image "busybox" in 756ms (1.136s including waiting). Image size: 2222260 bytes.
  Normal   Created    89s                kubelet            Created container: config-init
  Normal   Started    88s                kubelet            Started container config-init
  Normal   Pulling    88s                kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Started    87s                kubelet            Started container wazuh-agent
  Normal   Created    87s                kubelet            Created container: wazuh-agent
  Normal   Pulled     87s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 610ms (610ms including waiting). Image size: 74848715 bytes.
  Normal   Pulled     86s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 637ms (638ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     66s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 645ms (645ms including waiting). Image size: 141495340 bytes.
  Normal   Pulling    30s (x3 over 87s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     30s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 705ms (705ms including waiting). Image size: 141495340 bytes.
  Normal   Created    29s (x3 over 86s)  kubelet            Created container: suricata
  Normal   Started    29s (x3 over 86s)  kubelet            Started container suricata
  Warning  BackOff    12s (x2 over 44s)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-2lq9x_soc(7729f2a9-9c9f-4272-987f-f4353d236b62)
--- Description for wazuh-agent-kbrrt ---
                             node.kubernetes.io/not-ready:NoExecute op=Exists
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type    Reason     Age               From               Message
  ----    ------     ----              ----               -------
  Normal  Scheduled  71s               default-scheduler  Successfully assigned soc/wazuh-agent-kbrrt to k8-node-30
  Normal  Pulling    63s               kubelet            Pulling image "busybox"
  Normal  Pulled     58s               kubelet            Successfully pulled image "busybox" in 4.976s (4.976s including waiting). Image size: 2222260 bytes.
  Normal  Created    56s               kubelet            Created container: config-init
  Normal  Started    56s               kubelet            Started container config-init
  Normal  Pulling    51s               kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal  Pulled     44s               kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 6.663s (6.663s including waiting). Image size: 74848715 bytes.
  Normal  Created    41s               kubelet            Created container: wazuh-agent
  Normal  Started    41s               kubelet            Started container wazuh-agent
  Normal  Pulled     32s               kubelet            Successfully pulled image "jasonish/suricata:latest" in 9.51s (9.51s including waiting). Image size: 141495340 bytes.
  Normal  Created    30s               kubelet            Created container: suricata
  Normal  Started    30s               kubelet            Started container suricata
  Normal  Pulling    4s (x2 over 41s)  kubelet            Pulling image "jasonish/suricata:latest"
--- Description for wazuh-agent-tr5jz ---
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  90s                default-scheduler  Successfully assigned soc/wazuh-agent-tr5jz to k8-node-20
  Normal   Pulling    90s                kubelet            Pulling image "busybox"
  Normal   Pulled     89s                kubelet            Successfully pulled image "busybox" in 997ms (998ms including waiting). Image size: 2222260 bytes.
  Normal   Created    89s                kubelet            Created container: config-init
  Normal   Started    89s                kubelet            Started container config-init
  Normal   Pulling    88s                kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     86s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 1.29s (1.29s including waiting). Image size: 74848715 bytes.
  Normal   Created    86s                kubelet            Created container: wazuh-agent
  Normal   Started    85s                kubelet            Started container wazuh-agent
  Normal   Pulled     84s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.163s (1.163s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     62s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 675ms (675ms including waiting). Image size: 141495340 bytes.
  Normal   Pulling    30s (x3 over 85s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Created    29s (x3 over 84s)  kubelet            Created container: suricata
  Normal   Started    29s (x3 over 83s)  kubelet            Started container suricata
  Normal   Pulled     29s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 653ms (653ms including waiting). Image size: 141495340 bytes.
  Warning  BackOff    8s (x2 over 40s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-tr5jz_soc(483a4fd6-b057-4b56-9f1a-f183577253e5)
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
  Normal   Scheduled  7m20s                 default-scheduler  Successfully assigned soc/wazuh-dashboard-58ccf49468-pct2c to k8-node-20
  Normal   Pulling    7m20s                 kubelet            Pulling image "wazuh/wazuh-dashboard:4.14.2"
  Normal   Pulled     6m55s                 kubelet            Successfully pulled image "wazuh/wazuh-dashboard:4.14.2" in 24.381s (24.381s including waiting). Image size: 444184713 bytes.
  Warning  BackOff    76s (x26 over 6m47s)  kubelet            Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-58ccf49468-pct2c_soc(d7f8af46-296d-4d2d-b11e-4ec3b0eb3756)
  Normal   Created    62s (x7 over 6m55s)   kubelet            Created container: wazuh-dashboard
  Normal   Started    62s (x7 over 6m55s)   kubelet            Started container wazuh-dashboard
  Normal   Pulled     62s (x6 over 6m50s)   kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
--- Description for wazuh-indexer-0 ---
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  6m12s                  default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Normal   Pulling    6m12s                  kubelet            Pulling image "busybox"
  Normal   Pulled     6m11s                  kubelet            Successfully pulled image "busybox" in 681ms (681ms including waiting). Image size: 2222260 bytes.
  Normal   Created    6m11s                  kubelet            Created container: fix-permissions
  Normal   Started    6m11s                  kubelet            Started container fix-permissions
  Normal   Pulling    6m11s                  kubelet            Pulling image "busybox"
  Normal   Pulled     6m8s                   kubelet            Successfully pulled image "busybox" in 640ms (3.068s including waiting). Image size: 2222260 bytes.
  Normal   Created    6m8s                   kubelet            Created container: increase-vm-max-map
  Normal   Started    6m7s                   kubelet            Started container increase-vm-max-map
  Normal   Pulling    6m7s                   kubelet            Pulling image "wazuh/wazuh-indexer:4.14.2"
  Normal   Pulled     5m48s                  kubelet            Successfully pulled image "wazuh/wazuh-indexer:4.14.2" in 18.797s (18.797s including waiting). Image size: 1031181416 bytes.
  Normal   Created    4m1s (x5 over 5m48s)   kubelet            Created container: wazuh-indexer
  Normal   Started    4m (x5 over 5m48s)     kubelet            Started container wazuh-indexer
  Normal   Pulled     2m35s (x5 over 5m41s)  kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Warning  BackOff    10s (x24 over 5m36s)   kubelet            Back-off restarting failed container wazuh-indexer in pod wazuh-indexer-0_soc(0f1230b4-e1d6-4de3-9d6f-d33e79c7f251)
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
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  7m19s  default-scheduler  Successfully assigned soc/wazuh-manager-648d6f9b5d-zn8tz to k8-node-20
  Normal  Pulling    7m18s  kubelet            Pulling image "busybox"
  Normal  Pulled     6m54s  kubelet            Successfully pulled image "busybox" in 803ms (23.663s including waiting). Image size: 2222260 bytes.
  Normal  Created    6m54s  kubelet            Created container: wait-for-indexer
  Normal  Started    6m54s  kubelet            Started container wait-for-indexer
