Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 13:00:24 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS                  RESTARTS        AGE     IP             NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-kvcjd                  0/2     CrashLoopBackOff        5 (2m4s ago)    5m36s   192.168.1.40   k8-node-40   <none>           <none>
wazuh-agent-mxkvx                  0/2     Pending                 0               5m58s   <none>         <none>       <none>           <none>
wazuh-agent-w6tth                  0/2     Terminating             7 (12m ago)     25m     192.168.1.30   k8-node-30   <none>           <none>
wazuh-agent-w7nr4                  0/2     CrashLoopBackOff        5 (2m38s ago)   5m57s   192.168.1.10   k8-manager   <none>           <none>
wazuh-cert-generator-lcc2w         0/1     Init:ImagePullBackOff   0               34m     172.16.74.52   k8-manager   <none>           <none>
wazuh-cert-generator-v2-bp7ft      0/1     Init:ImagePullBackOff   0               25m     172.16.74.57   k8-manager   <none>           <none>
wazuh-cert-generator-v4-jrdjc      0/1     Init:0/2                0               2s      <none>         k8-node-20   <none>           <none>
wazuh-dashboard-549c8f7698-gm6pb   0/1     ContainerCreating       0               34m     <none>         k8-node-20   <none>           <none>
wazuh-dashboard-7b69bfc8f4-85dx7   0/1     ContainerCreating       0               29m     <none>         k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Init:0/2                0               34m     <none>         k8-node-20   <none>           <none>
wazuh-manager-bc9d8bfc6-fmq7l      0/1     Init:0/1                0               29m     <none>         k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      34m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             34m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   34m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   34m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-kvcjd CrashLoopBackOff
wazuh-agent-mxkvx Pending
wazuh-agent-w6tth Terminating
wazuh-agent-w7nr4 CrashLoopBackOff
wazuh-cert-generator-lcc2w Init:ImagePullBackOff
wazuh-cert-generator-v2-bp7ft Init:ImagePullBackOff
wazuh-cert-generator-v4-jrdjc Init:1/2
wazuh-dashboard-549c8f7698-gm6pb ContainerCreating
wazuh-dashboard-7b69bfc8f4-85dx7 ContainerCreating
wazuh-indexer-0 Init:0/2
wazuh-manager-bc9d8bfc6-fmq7l Init:0/1
--- Description for wazuh-agent-kvcjd ---
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  5m38s                  default-scheduler  Successfully assigned soc/wazuh-agent-kvcjd to k8-node-40
  Normal   Pulling    5m36s                  kubelet            Pulling image "busybox"
  Normal   Pulled     5m33s                  kubelet            Successfully pulled image "busybox" in 3.022s (3.022s including waiting). Image size: 2222260 bytes.
  Normal   Created    5m31s                  kubelet            Created container: config-init
  Normal   Started    5m30s                  kubelet            Started container config-init
  Normal   Pulled     5m23s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 3.239s (3.239s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     5m18s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 2.427s (2.427s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     4m59s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 2.054s (2.054s including waiting). Image size: 141495340 bytes.
  Normal   Started    4m58s (x3 over 5m22s)  kubelet            Started container suricata
  Normal   Created    4m58s (x3 over 5m23s)  kubelet            Created container: suricata
  Normal   Pulling    4m33s (x3 over 5m28s)  kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulling    4m32s (x4 over 5m27s)  kubelet            Pulling image "jasonish/suricata:latest"
  Warning  BackOff    3m53s (x7 over 5m17s)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-kvcjd_soc(d7a096e6-a891-4eb3-9a1c-66a505f67e8e)
  Warning  Failed     3m41s (x4 over 5m27s)  kubelet            Error: ErrImagePull
  Warning  Failed     3m41s (x4 over 5m27s)  kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Normal   BackOff    26s (x26 over 5m22s)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  Failed     26s (x26 over 5m22s)   kubelet            Error: ImagePullBackOff
--- Description for wazuh-agent-mxkvx ---
  kube-api-access-7zfwg:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
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
  Type     Reason            Age                 From               Message
  ----     ------            ----                ----               -------
  Warning  FailedScheduling  6m1s                default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  5m44s (x2 over 6m)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Description for wazuh-agent-w6tth ---
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  25m                   default-scheduler  Successfully assigned soc/wazuh-agent-w6tth to k8-node-30
  Normal   Pulled     24m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.95s (7.95s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     24m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.279s (7.279s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    24m (x3 over 25m)     kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulled     24m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 8.711s (8.711s including waiting). Image size: 141495340 bytes.
  Normal   Created    24m (x3 over 24m)     kubelet            Created container: suricata
  Normal   Started    24m (x3 over 24m)     kubelet            Started container suricata
  Normal   Pulling    23m (x4 over 25m)     kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     23m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 9.058s (9.058s including waiting). Image size: 141495340 bytes.
  Warning  Failed     23m (x4 over 25m)     kubelet            Error: ErrImagePull
  Warning  Failed     23m (x4 over 25m)     kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  BackOff    22m (x4 over 23m)     kubelet            Back-off restarting failed container suricata in pod wazuh-agent-w6tth_soc(e6c5765b-45a4-4886-9ddc-f26aaef33529)
  Normal   BackOff    10m (x70 over 24m)    kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
  Warning  Failed     9m51s (x71 over 24m)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-agent-w7nr4 ---
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  6m1s                   default-scheduler  Successfully assigned soc/wazuh-agent-w7nr4 to k8-manager
  Normal   Pulling    6m1s                   kubelet            Pulling image "busybox"
  Normal   Pulled     6m                     kubelet            Successfully pulled image "busybox" in 857ms (857ms including waiting). Image size: 2222260 bytes.
  Normal   Created    6m                     kubelet            Created container: config-init
  Normal   Started    6m                     kubelet            Started container config-init
  Normal   Pulled     5m58s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 859ms (859ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     5m56s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 812ms (812ms including waiting). Image size: 141495340 bytes.
  Normal   Pulling    5m41s (x3 over 5m59s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Created    5m40s (x3 over 5m58s)  kubelet            Created container: suricata
  Normal   Pulled     5m40s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 875ms (875ms including waiting). Image size: 141495340 bytes.
  Normal   Started    5m39s (x3 over 5m58s)  kubelet            Started container suricata
  Warning  Failed     5m13s (x3 over 5m59s)  kubelet            Error: ErrImagePull
  Warning  Failed     5m13s (x3 over 5m59s)  kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Normal   Pulling    5m13s (x3 over 6m)     kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  BackOff    4m33s (x8 over 5m55s)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-w7nr4_soc(45480a4d-dc12-4fb4-8d65-b9d26bed29b8)
  Normal   BackOff    58s (x28 over 5m58s)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  Failed     58s (x28 over 5m58s)   kubelet            Error: ImagePullBackOff
--- Description for wazuh-cert-generator-lcc2w ---
    SizeLimit:  <unset>
  kube-api-access-dq6dk:
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
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  34m                    default-scheduler  Successfully assigned soc/wazuh-cert-generator-lcc2w to k8-manager
  Normal   Pulling    30m (x5 over 34m)      kubelet            Pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed     30m (x5 over 33m)      kubelet            Failed to pull image "wazuh/wazuh-certs-tool:4.7.2": failed to pull and unpack image "docker.io/wazuh/wazuh-certs-tool:4.7.2": failed to resolve image: pull access denied, repository does not exist or may require authorization: server message: insufficient_scope: authorization failed
  Warning  Failed     30m (x5 over 33m)      kubelet            Error: ErrImagePull
  Normal   BackOff    4m5s (x129 over 33m)   kubelet            Back-off pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed     3m52s (x130 over 33m)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-cert-generator-v2-bp7ft ---
    SizeLimit:  <unset>
  kube-api-access-9nv8q:
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
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  25m                   default-scheduler  Successfully assigned soc/wazuh-cert-generator-v2-bp7ft to k8-manager
  Normal   Pulling    22m (x5 over 25m)     kubelet            Pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed     22m (x5 over 25m)     kubelet            Failed to pull image "wazuh/wazuh-certs-tool:4.9.0": failed to pull and unpack image "docker.io/wazuh/wazuh-certs-tool:4.9.0": failed to resolve image: pull access denied, repository does not exist or may require authorization: server message: insufficient_scope: authorization failed
  Warning  Failed     22m (x5 over 25m)     kubelet            Error: ErrImagePull
  Normal   BackOff    5m8s (x87 over 25m)   kubelet            Back-off pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed     4m57s (x88 over 25m)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-cert-generator-v4-jrdjc ---
    SizeLimit:  <unset>
  kube-api-access-hhcq9:
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
  Normal  Scheduled  8s    default-scheduler  Successfully assigned soc/wazuh-cert-generator-v4-jrdjc to k8-node-20
  Normal  Pulling    8s    kubelet            Pulling image "busybox"
  Normal  Pulled     7s    kubelet            Successfully pulled image "busybox" in 882ms (882ms including waiting). Image size: 2222260 bytes.
  Normal  Created    7s    kubelet            Created container: config-writer
  Normal  Started    7s    kubelet            Started container config-writer
  Normal  Pulling    5s    kubelet            Pulling image "wazuh/wazuh-certs-generator:0.0.4"
--- Description for wazuh-dashboard-549c8f7698-gm6pb ---
Volumes:
  certificates:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-dashboard-certs
    Optional:    false
  kube-api-access-bnfs5:
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
  Type     Reason       Age                 From               Message
  ----     ------       ----                ----               -------
  Normal   Scheduled    34m                 default-scheduler  Successfully assigned soc/wazuh-dashboard-549c8f7698-gm6pb to k8-node-20
  Warning  FailedMount  94s (x24 over 34m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
--- Description for wazuh-dashboard-7b69bfc8f4-85dx7 ---
Volumes:
  certificates:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-dashboard-certs
    Optional:    false
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
  Type     Reason       Age                 From               Message
  ----     ------       ----                ----               -------
  Normal   Scheduled    29m                 default-scheduler  Successfully assigned soc/wazuh-dashboard-7b69bfc8f4-85dx7 to k8-node-20
  Warning  FailedMount  49s (x22 over 29m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
--- Description for wazuh-indexer-0 ---
    ReadOnly:   false
  certificates:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-x4lrz:
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
  Type     Reason       Age                 From               Message
  ----     ------       ----                ----               -------
  Normal   Scheduled    34m                 default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Warning  FailedMount  94s (x24 over 34m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-indexer-certs" not found
--- Description for wazuh-manager-bc9d8bfc6-fmq7l ---
  auth-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-manager-certs
    Optional:    false
  kube-api-access-txctm:
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
  Type     Reason       Age                   From               Message
  ----     ------       ----                  ----               -------
  Normal   Scheduled    29m                   default-scheduler  Successfully assigned soc/wazuh-manager-bc9d8bfc6-fmq7l to k8-node-20
  Warning  FailedMount  8m57s (x18 over 29m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-manager-certs" not found
  Warning  FailedMount  2m51s (x21 over 29m)  kubelet            MountVolume.SetUp failed for volume "auth-certs" : secret "wazuh-manager-certs" not found
