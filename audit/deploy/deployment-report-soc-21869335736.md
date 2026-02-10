Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 14:44:09 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS        AGE    IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-6sgv5                  1/2     ErrImagePull       3 (35s ago)     2m     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-hkw6m                  1/2     ImagePullBackOff   1 (23s ago)     119s   192.168.1.30    k8-node-30   <none>           <none>
wazuh-agent-l777c                  0/2     CrashLoopBackOff   2 (20s ago)     2m     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-r5ffw                  1/2     ImagePullBackOff   3 (33s ago)     2m     192.168.1.10    k8-manager   <none>           <none>
wazuh-cert-generator-v6-m94jh      0/1     Completed          0               2m1s   172.16.74.11    k8-manager   <none>           <none>
wazuh-dashboard-7b69bfc8f4-85dx7   0/1     CrashLoopBackOff   6 (3m51s ago)   133m   172.16.209.42   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Pending            0               10m    <none>          <none>       <none>           <none>
wazuh-manager-bc9d8bfc6-fmq7l      0/1     CrashLoopBackOff   6 (84s ago)     132m   172.16.209.33   k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      137m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             137m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   137m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   137m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-6sgv5 ErrImagePull
wazuh-agent-hkw6m ImagePullBackOff
wazuh-agent-l777c CrashLoopBackOff
wazuh-agent-r5ffw ImagePullBackOff
wazuh-dashboard-7b69bfc8f4-85dx7 CrashLoopBackOff
wazuh-indexer-0 Pending
wazuh-manager-bc9d8bfc6-fmq7l CrashLoopBackOff
--- Description for wazuh-agent-6sgv5 ---
Events:
  Type     Reason     Age                 From               Message
  ----     ------     ----                ----               -------
  Normal   Scheduled  2m1s                default-scheduler  Successfully assigned soc/wazuh-agent-6sgv5 to k8-node-20
  Normal   Pulling    2m1s                kubelet            Pulling image "busybox"
  Normal   Pulled     2m                  kubelet            Successfully pulled image "busybox" in 612ms (612ms including waiting). Image size: 2222260 bytes.
  Normal   Created    2m                  kubelet            Created container: config-init
  Normal   Started    2m                  kubelet            Started container config-init
  Normal   Pulled     118s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 661ms (661ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     97s                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 632ms (632ms including waiting). Image size: 141495340 bytes.
  Normal   Pulling    75s (x3 over 2m)    kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulling    59s (x3 over 119s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Created    58s (x3 over 118s)  kubelet            Created container: suricata
  Normal   Started    58s (x3 over 118s)  kubelet            Started container suricata
  Normal   Pulled     58s                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.013s (1.013s including waiting). Image size: 141495340 bytes.
  Normal   BackOff    57s (x6 over 118s)  kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  BackOff    24s (x2 over 37s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-6sgv5_soc(cc2a7535-0657-4062-be51-1b764f88c2f4)
  Warning  Failed     8s (x4 over 119s)   kubelet            Error: ErrImagePull
  Warning  Failed     8s (x4 over 119s)   kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Warning  Failed     7s (x11 over 118s)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-agent-hkw6m ---
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                 From               Message
  ----     ------     ----                ----               -------
  Normal   Scheduled  2m2s                default-scheduler  Successfully assigned soc/wazuh-agent-hkw6m to k8-node-30
  Normal   Pulling    119s                kubelet            Pulling image "busybox"
  Normal   Pulled     114s                kubelet            Successfully pulled image "busybox" in 4.293s (4.293s including waiting). Image size: 2222260 bytes.
  Normal   Created    112s                kubelet            Created container: config-init
  Normal   Started    112s                kubelet            Started container config-init
  Normal   Pulled     99s                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 6.808s (6.808s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    24s (x2 over 106s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     17s                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.434s (7.434s including waiting). Image size: 141495340 bytes.
  Normal   Created    14s (x2 over 97s)   kubelet            Created container: suricata
  Normal   Started    14s (x2 over 96s)   kubelet            Started container suricata
  Normal   BackOff    14s (x6 over 96s)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  Failed     14s (x6 over 96s)   kubelet            Error: ImagePullBackOff
  Normal   Pulling    2s (x4 over 106s)   kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  Failed     1s (x4 over 106s)   kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Warning  Failed     1s (x4 over 106s)   kubelet            Error: ErrImagePull
--- Description for wazuh-agent-l777c ---
Events:
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  2m3s                 default-scheduler  Successfully assigned soc/wazuh-agent-l777c to k8-node-40
  Normal   Pulling    2m3s                 kubelet            Pulling image "busybox"
  Normal   Pulled     2m2s                 kubelet            Successfully pulled image "busybox" in 1.211s (1.211s including waiting). Image size: 2222260 bytes.
  Normal   Created    2m1s                 kubelet            Created container: config-init
  Normal   Started    2m1s                 kubelet            Started container config-init
  Normal   Pulled     118s                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.646s (1.646s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     85s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 6.623s (6.623s including waiting). Image size: 141495340 bytes.
  Normal   Started    85s (x2 over 117s)   kubelet            Started container suricata
  Normal   Pulling    69s (x3 over 2m)     kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulling    48s (x3 over 119s)   kubelet            Pulling image "jasonish/suricata:latest"
  Normal   BackOff    48s (x7 over 117s)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Created    46s (x3 over 117s)   kubelet            Created container: suricata
  Normal   Pulled     46s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.635s (1.635s including waiting). Image size: 141495340 bytes.
  Warning  Failed     23s (x10 over 117s)  kubelet            Error: ImagePullBackOff
  Warning  Failed     8s (x4 over 119s)    kubelet            Error: ErrImagePull
  Warning  Failed     8s (x4 over 119s)    kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Warning  BackOff    8s (x3 over 62s)     kubelet            Back-off restarting failed container suricata in pod wazuh-agent-l777c_soc(6637cd06-19f7-460c-8577-abf43f6d08c1)
--- Description for wazuh-agent-r5ffw ---
Events:
  Type     Reason     Age                 From               Message
  ----     ------     ----                ----               -------
  Normal   Scheduled  2m4s                default-scheduler  Successfully assigned soc/wazuh-agent-r5ffw to k8-manager
  Normal   Pulling    2m3s                kubelet            Pulling image "busybox"
  Normal   Pulled     2m2s                kubelet            Successfully pulled image "busybox" in 627ms (1.063s including waiting). Image size: 2222260 bytes.
  Normal   Created    2m2s                kubelet            Created container: config-init
  Normal   Started    2m2s                kubelet            Started container config-init
  Normal   Pulled     2m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 630ms (630ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     98s                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 689ms (689ms including waiting). Image size: 141495340 bytes.
  Normal   Started    98s (x2 over 2m)    kubelet            Started container suricata
  Normal   Pulling    77s (x3 over 2m1s)  kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulling    56s (x3 over 2m1s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   BackOff    56s (x7 over 119s)  kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Created    55s (x3 over 2m)    kubelet            Created container: suricata
  Normal   Pulled     55s                 kubelet            Successfully pulled image "jasonish/suricata:latest" in 889ms (890ms including waiting). Image size: 141495340 bytes.
  Warning  Failed     24s (x4 over 2m1s)  kubelet            Error: ErrImagePull
  Warning  Failed     24s (x4 over 2m1s)  kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Warning  BackOff    24s (x4 over 72s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-r5ffw_soc(d49af6ab-8af7-48b4-b2f3-3d7abc8b4c14)
  Warning  Failed     7s (x12 over 119s)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-dashboard-7b69bfc8f4-85dx7 ---
  kube-api-access-4c7r8:
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
  Type     Reason       Age                  From     Message
  ----     ------       ----                 ----     -------
  Warning  FailedMount  12m (x67 over 133m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
  Normal   Pulling      10m                  kubelet  Pulling image "wazuh/wazuh-dashboard:4.9.0"
  Normal   Pulled       10m                  kubelet  Successfully pulled image "wazuh/wazuh-dashboard:4.9.0" in 26.518s (35.323s including waiting). Image size: 361920544 bytes.
  Normal   Created      4m3s (x7 over 10m)   kubelet  Created container: wazuh-dashboard
  Normal   Pulled       4m3s (x6 over 10m)   kubelet  Container image "wazuh/wazuh-dashboard:4.9.0" already present on machine
  Normal   Started      4m2s (x7 over 10m)   kubelet  Started container wazuh-dashboard
  Warning  BackOff      3m3s (x30 over 10m)  kubelet  Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-7b69bfc8f4-85dx7_soc(89d103ca-97df-4a33-825c-e3e6525c1511)
--- Description for wazuh-indexer-0 ---
    ReadOnly:   false
  certificates:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-56gf5:
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
  Type     Reason            Age                    From               Message
  ----     ------            ----                   ----               -------
  Warning  FailedScheduling  10m                    default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't match Pod's node affinity/selector, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  7m52s (x2 over 9m48s)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't match Pod's node affinity/selector, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Description for wazuh-manager-bc9d8bfc6-fmq7l ---
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason       Age                     From     Message
  ----     ------       ----                    ----     -------
  Warning  FailedMount  17m (x65 over 133m)     kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-manager-certs" not found
  Warning  FailedMount  12m (x67 over 133m)     kubelet  MountVolume.SetUp failed for volume "auth-certs" : secret "wazuh-manager-certs" not found
  Normal   Pulling      10m                     kubelet  Pulling image "busybox"
  Normal   Pulled       10m                     kubelet  Successfully pulled image "busybox" in 653ms (33.777s including waiting). Image size: 2222260 bytes.
  Normal   Created      10m                     kubelet  Created container: wait-for-indexer
  Normal   Started      10m                     kubelet  Started container wait-for-indexer
  Normal   Pulling      10m                     kubelet  Pulling image "wazuh/wazuh-manager:4.9.0"
  Normal   Pulled       9m56s                   kubelet  Successfully pulled image "wazuh/wazuh-manager:4.9.0" in 19.766s (19.766s including waiting). Image size: 597728007 bytes.
  Warning  BackOff      2m56s (x22 over 9m10s)  kubelet  Back-off restarting failed container wazuh-manager in pod wazuh-manager-bc9d8bfc6-fmq7l_soc(ad3237b4-c597-44b6-843d-1b136ea722e9)
  Normal   Created      110s (x7 over 9m56s)    kubelet  Created container: wazuh-manager
  Normal   Started      110s (x7 over 9m56s)    kubelet  Started container wazuh-manager
  Normal   Pulled       110s (x6 over 9m33s)    kubelet  Container image "wazuh/wazuh-manager:4.9.0" already present on machine
