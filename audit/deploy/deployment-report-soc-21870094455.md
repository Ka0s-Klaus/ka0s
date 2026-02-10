Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 15:03:56 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-5w2ls                  2/2     Running            0               55s     192.168.1.30    k8-node-30   <none>           <none>
wazuh-agent-84kjf                  2/2     Running            1 (12s ago)     36s     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-wsnxx                  2/2     Running            2 (15s ago)     57s     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-zrxbd                  1/2     Error              1 (27s ago)     56s     192.168.1.40    k8-node-40   <none>           <none>
wazuh-cert-generator-v6-sdbmm      0/1     Completed          0               8m57s   172.16.74.51    k8-manager   <none>           <none>
wazuh-dashboard-58ccf49468-pct2c   0/1     CrashLoopBackOff   7 (3m13s ago)   14m     172.16.209.23   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     CrashLoopBackOff   7 (110s ago)    13m     172.16.209.4    k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     0/1     Init:0/1           0               14m     172.16.209.7    k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      157m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             157m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   157m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   157m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-zrxbd Error
wazuh-dashboard-58ccf49468-pct2c CrashLoopBackOff
wazuh-indexer-0 CrashLoopBackOff
wazuh-manager-648d6f9b5d-zn8tz Init:0/1
--- Description for wazuh-agent-zrxbd ---
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  57s                default-scheduler  Successfully assigned soc/wazuh-agent-zrxbd to k8-node-40
  Normal   Pulling    56s                kubelet            Pulling image "busybox"
  Normal   Pulled     55s                kubelet            Successfully pulled image "busybox" in 1.286s (1.286s including waiting). Image size: 2222260 bytes.
  Normal   Created    55s                kubelet            Created container: config-init
  Normal   Started    55s                kubelet            Started container config-init
  Normal   Pulling    53s                kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     52s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 1.476s (1.476s including waiting). Image size: 74848715 bytes.
  Normal   Created    51s                kubelet            Created container: wazuh-agent
  Normal   Started    51s                kubelet            Started container wazuh-agent
  Normal   Pulled     49s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.781s (1.781s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    27s (x2 over 51s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Created    25s (x2 over 49s)  kubelet            Created container: suricata
  Normal   Started    25s (x2 over 49s)  kubelet            Started container suricata
  Normal   Pulled     25s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.821s (1.821s including waiting). Image size: 141495340 bytes.
  Warning  BackOff    3s                 kubelet            Back-off restarting failed container suricata in pod wazuh-agent-zrxbd_soc(e2f0d1f8-6ab5-43bc-a3d4-79164ef6891d)
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
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  14m                  default-scheduler  Successfully assigned soc/wazuh-dashboard-58ccf49468-pct2c to k8-node-20
  Normal   Pulling    14m                  kubelet            Pulling image "wazuh/wazuh-dashboard:4.14.2"
  Normal   Pulled     14m                  kubelet            Successfully pulled image "wazuh/wazuh-dashboard:4.14.2" in 24.381s (24.381s including waiting). Image size: 444184713 bytes.
  Warning  BackOff    4m9s (x47 over 14m)  kubelet            Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-58ccf49468-pct2c_soc(d7f8af46-296d-4d2d-b11e-4ec3b0eb3756)
  Normal   Created    3m17s (x8 over 14m)  kubelet            Created container: wazuh-dashboard
  Normal   Pulled     3m17s (x7 over 14m)  kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Normal   Started    3m16s (x8 over 14m)  kubelet            Started container wazuh-dashboard
--- Description for wazuh-indexer-0 ---
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  13m                  default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Normal   Pulling    13m                  kubelet            Pulling image "busybox"
  Normal   Pulled     13m                  kubelet            Successfully pulled image "busybox" in 681ms (681ms including waiting). Image size: 2222260 bytes.
  Normal   Created    13m                  kubelet            Created container: fix-permissions
  Normal   Started    13m                  kubelet            Started container fix-permissions
  Normal   Pulling    13m                  kubelet            Pulling image "busybox"
  Normal   Pulled     13m                  kubelet            Successfully pulled image "busybox" in 640ms (3.068s including waiting). Image size: 2222260 bytes.
  Normal   Created    13m                  kubelet            Created container: increase-vm-max-map
  Normal   Started    13m                  kubelet            Started container increase-vm-max-map
  Normal   Pulling    13m                  kubelet            Pulling image "wazuh/wazuh-indexer:4.14.2"
  Normal   Pulled     13m                  kubelet            Successfully pulled image "wazuh/wazuh-indexer:4.14.2" in 18.797s (18.797s including waiting). Image size: 1031181416 bytes.
  Normal   Created    11m (x5 over 13m)    kubelet            Created container: wazuh-indexer
  Normal   Started    11m (x5 over 13m)    kubelet            Started container wazuh-indexer
  Warning  BackOff    3m2s (x45 over 13m)  kubelet            Back-off restarting failed container wazuh-indexer in pod wazuh-indexer-0_soc(0f1230b4-e1d6-4de3-9d6f-d33e79c7f251)
  Normal   Pulled     116s (x7 over 13m)   kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
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
  Normal  Scheduled  14m   default-scheduler  Successfully assigned soc/wazuh-manager-648d6f9b5d-zn8tz to k8-node-20
  Normal  Pulling    14m   kubelet            Pulling image "busybox"
  Normal  Pulled     14m   kubelet            Successfully pulled image "busybox" in 803ms (23.663s including waiting). Image size: 2222260 bytes.
  Normal  Created    14m   kubelet            Created container: wait-for-indexer
  Normal  Started    14m   kubelet            Started container wait-for-indexer
