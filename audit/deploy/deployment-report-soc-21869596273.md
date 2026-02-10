Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 14:50:35 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-8d4wf                  1/2     RunContainerError   0             86s     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-lbn5r                  0/2     PodInitializing     0             65s     192.168.1.30    k8-node-30   <none>           <none>
wazuh-agent-s4zg6                  0/2     CrashLoopBackOff    4 (8s ago)    86s     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-xxs4v                  1/2     CrashLoopBackOff    5 (31s ago)   84s     192.168.1.10    k8-manager   <none>           <none>
wazuh-cert-generator-v6-m94jh      0/1     Completed           0             8m28s   172.16.74.11    k8-manager   <none>           <none>
wazuh-dashboard-58ccf49468-pct2c   0/1     Error               3 (39s ago)   87s     172.16.209.23   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     PodInitializing     0             19s     172.16.209.4    k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     0/1     Init:0/1            0             85s     172.16.209.7    k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      144m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             144m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   144m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   144m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-8d4wf RunContainerError
wazuh-agent-lbn5r PodInitializing
wazuh-agent-s4zg6 CrashLoopBackOff
wazuh-agent-xxs4v CrashLoopBackOff
wazuh-dashboard-58ccf49468-pct2c Error
wazuh-indexer-0 PodInitializing
wazuh-manager-648d6f9b5d-zn8tz Init:0/1
--- Description for wazuh-agent-8d4wf ---
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason            Age                From               Message
  ----     ------            ----               ----               -------
  Warning  FailedScheduling  88s                default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  67s (x2 over 86s)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Normal   Scheduled         21s                default-scheduler  Successfully assigned soc/wazuh-agent-8d4wf to k8-node-20
  Normal   Pulling           21s                kubelet            Pulling image "busybox"
  Normal   Started           20s                kubelet            Started container config-init
  Normal   Created           20s                kubelet            Created container: config-init
  Normal   Pulled            20s                kubelet            Successfully pulled image "busybox" in 644ms (644ms including waiting). Image size: 2222260 bytes.
  Normal   Pulled            16s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 2.892s (3.432s including waiting). Image size: 74848715 bytes.
  Normal   Created           16s                kubelet            Created container: wazuh-agent
  Warning  Failed            16s                kubelet            Error: failed to create containerd task: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error mounting "/var/lib/kubelet/pods/214813c3-7792-4e96-89ca-9c9e342f5101/volumes/kubernetes.io~empty-dir/suricata-logs" to rootfs at "/var/log/suricata": create mountpoint for /var/log/suricata mount: make mountpoint "/var/log/suricata": mkdirat /run/containerd/io.containerd.runtime.v2.task/k8s.io/wazuh-agent/rootfs/var/log/suricata: read-only file system
  Normal   Pulling           16s                kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulling           15s (x2 over 20s)  kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled            15s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 641ms (933ms including waiting). Image size: 141495340 bytes.
  Normal   Created           15s                kubelet            Created container: suricata
  Normal   Started           15s                kubelet            Started container suricata
--- Description for wazuh-agent-lbn5r ---
QoS Class:                   Burstable
Node-Selectors:              <none>
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
  Normal  Scheduled  68s   default-scheduler  Successfully assigned soc/wazuh-agent-lbn5r to k8-node-30
  Normal  Pulling    65s   kubelet            Pulling image "busybox"
  Normal  Pulled     59s   kubelet            Successfully pulled image "busybox" in 6.01s (6.01s including waiting). Image size: 2222260 bytes.
  Normal  Created    57s   kubelet            Created container: config-init
  Normal  Started    56s   kubelet            Started container config-init
  Normal  Pulling    52s   kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal  Pulled     9s    kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 42.74s (42.74s including waiting). Image size: 74848715 bytes.
  Normal  Created    7s    kubelet            Created container: wazuh-agent
--- Description for wazuh-agent-s4zg6 ---
  ----     ------     ----               ----               -------
  Normal   Scheduled  88s                default-scheduler  Successfully assigned soc/wazuh-agent-s4zg6 to k8-node-40
  Normal   Pulling    87s                kubelet            Pulling image "busybox"
  Normal   Pulled     86s                kubelet            Successfully pulled image "busybox" in 1.243s (1.243s including waiting). Image size: 2222260 bytes.
  Normal   Created    86s                kubelet            Created container: config-init
  Normal   Started    86s                kubelet            Started container config-init
  Normal   Pulled     67s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 17.719s (17.719s including waiting). Image size: 74848715 bytes.
  Normal   Pulled     60s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.747s (1.747s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     58s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 1.519s (1.519s including waiting). Image size: 74848715 bytes.
  Normal   Pulled     42s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 1.564s (1.564s including waiting). Image size: 74848715 bytes.
  Normal   Pulling    37s (x2 over 62s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Started    35s (x2 over 60s)  kubelet            Started container suricata
  Normal   Created    35s (x2 over 60s)  kubelet            Created container: suricata
  Normal   Pulled     35s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.667s (1.667s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    13s (x4 over 85s)  kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     12s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 1.5s (1.5s including waiting). Image size: 74848715 bytes.
  Warning  Failed     11s (x4 over 62s)  kubelet            Error: failed to create containerd task: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error mounting "/var/lib/kubelet/pods/521aed9d-0ae1-4c69-8c37-26d00d674967/volumes/kubernetes.io~empty-dir/suricata-logs" to rootfs at "/var/log/suricata": create mountpoint for /var/log/suricata mount: make mountpoint "/var/log/suricata": mkdirat /run/containerd/io.containerd.runtime.v2.task/k8s.io/wazuh-agent/rootfs/var/log/suricata: read-only file system
  Normal   Created    11s (x4 over 66s)  kubelet            Created container: wazuh-agent
  Warning  BackOff    9s (x8 over 56s)   kubelet            Back-off restarting failed container wazuh-agent in pod wazuh-agent-s4zg6_soc(521aed9d-0ae1-4c69-8c37-26d00d674967)
  Warning  BackOff    9s (x3 over 11s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-s4zg6_soc(521aed9d-0ae1-4c69-8c37-26d00d674967)
--- Description for wazuh-agent-xxs4v ---
  ----     ------     ----               ----               -------
  Normal   Scheduled  88s                default-scheduler  Successfully assigned soc/wazuh-agent-xxs4v to k8-manager
  Normal   Pulling    88s                kubelet            Pulling image "busybox"
  Normal   Pulled     87s                kubelet            Successfully pulled image "busybox" in 683ms (683ms including waiting). Image size: 2222260 bytes.
  Normal   Created    87s                kubelet            Created container: config-init
  Normal   Started    87s                kubelet            Started container config-init
  Normal   Pulled     78s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 7.807s (7.807s including waiting). Image size: 74848715 bytes.
  Normal   Pulled     77s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 673ms (673ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     75s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 629ms (630ms including waiting). Image size: 74848715 bytes.
  Normal   Pulled     61s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 659ms (659ms including waiting). Image size: 74848715 bytes.
  Normal   Started    57s (x2 over 76s)  kubelet            Started container suricata
  Normal   Created    57s (x2 over 77s)  kubelet            Created container: suricata
  Normal   Pulled     57s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 678ms (678ms including waiting). Image size: 141495340 bytes.
  Warning  Failed     35s (x4 over 77s)  kubelet            Error: failed to create containerd task: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error mounting "/var/lib/kubelet/pods/73d9f8fc-f46c-4f6a-9bc1-760a306d4845/volumes/kubernetes.io~empty-dir/suricata-logs" to rootfs at "/var/log/suricata": create mountpoint for /var/log/suricata mount: make mountpoint "/var/log/suricata": mkdirat /run/containerd/io.containerd.runtime.v2.task/k8s.io/wazuh-agent/rootfs/var/log/suricata: read-only file system
  Normal   Created    35s (x4 over 78s)  kubelet            Created container: wazuh-agent
  Normal   Pulling    35s (x4 over 86s)  kubelet            Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal   Pulled     35s                kubelet            Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 665ms (665ms including waiting). Image size: 74848715 bytes.
  Normal   Pulling    20s (x3 over 77s)  kubelet            Pulling image "jasonish/suricata:latest"
  Warning  BackOff    1s (x11 over 75s)  kubelet            Back-off restarting failed container wazuh-agent in pod wazuh-agent-xxs4v_soc(73d9f8fc-f46c-4f6a-9bc1-760a306d4845)
  Warning  BackOff    1s (x3 over 35s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-xxs4v_soc(73d9f8fc-f46c-4f6a-9bc1-760a306d4845)
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
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  90s                default-scheduler  Successfully assigned soc/wazuh-dashboard-58ccf49468-pct2c to k8-node-20
  Normal   Pulling    90s                kubelet            Pulling image "wazuh/wazuh-dashboard:4.14.2"
  Normal   Pulled     65s                kubelet            Successfully pulled image "wazuh/wazuh-dashboard:4.14.2" in 24.381s (24.381s including waiting). Image size: 444184713 bytes.
  Normal   Created    17s (x4 over 65s)  kubelet            Created container: wazuh-dashboard
  Normal   Started    17s (x4 over 65s)  kubelet            Started container wazuh-dashboard
  Normal   Pulled     17s (x3 over 60s)  kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Warning  BackOff    1s (x5 over 57s)   kubelet            Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-58ccf49468-pct2c_soc(d7f8af46-296d-4d2d-b11e-4ec3b0eb3756)
--- Description for wazuh-indexer-0 ---
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
  Normal  Scheduled  23s   default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Normal  Pulling    23s   kubelet            Pulling image "busybox"
  Normal  Pulled     22s   kubelet            Successfully pulled image "busybox" in 681ms (681ms including waiting). Image size: 2222260 bytes.
  Normal  Created    22s   kubelet            Created container: fix-permissions
  Normal  Started    22s   kubelet            Started container fix-permissions
  Normal  Pulling    22s   kubelet            Pulling image "busybox"
  Normal  Pulled     19s   kubelet            Successfully pulled image "busybox" in 640ms (3.068s including waiting). Image size: 2222260 bytes.
  Normal  Created    19s   kubelet            Created container: increase-vm-max-map
  Normal  Started    18s   kubelet            Started container increase-vm-max-map
  Normal  Pulling    18s   kubelet            Pulling image "wazuh/wazuh-indexer:4.14.2"
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
  Normal  Scheduled  89s   default-scheduler  Successfully assigned soc/wazuh-manager-648d6f9b5d-zn8tz to k8-node-20
  Normal  Pulling    89s   kubelet            Pulling image "busybox"
  Normal  Pulled     65s   kubelet            Successfully pulled image "busybox" in 803ms (23.663s including waiting). Image size: 2222260 bytes.
  Normal  Created    65s   kubelet            Created container: wait-for-indexer
  Normal  Started    65s   kubelet            Started container wait-for-indexer
