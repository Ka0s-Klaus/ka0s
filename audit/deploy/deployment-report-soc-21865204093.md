Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 12:41:12 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS                  RESTARTS        AGE     IP             NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-4jl5f                  0/2     CrashLoopBackOff        5 (2m41s ago)   5m49s   192.168.1.10   k8-manager   <none>           <none>
wazuh-agent-57wn7                  0/2     CrashLoopBackOff        5 (2m42s ago)   5m50s   192.168.1.40   k8-node-40   <none>           <none>
wazuh-agent-5mlhm                  0/2     Pending                 0               5m50s   <none>         <none>       <none>           <none>
wazuh-agent-w6tth                  0/2     CrashLoopBackOff        5 (92s ago)     5m47s   192.168.1.30   k8-node-30   <none>           <none>
wazuh-cert-generator-lcc2w         0/1     Init:ImagePullBackOff   0               14m     172.16.74.52   k8-manager   <none>           <none>
wazuh-cert-generator-v2-bp7ft      0/1     Init:ImagePullBackOff   0               5m51s   172.16.74.57   k8-manager   <none>           <none>
wazuh-dashboard-549c8f7698-gm6pb   0/1     ContainerCreating       0               14m     <none>         k8-node-20   <none>           <none>
wazuh-dashboard-7b69bfc8f4-85dx7   0/1     ContainerCreating       0               10m     <none>         k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Init:0/2                0               14m     <none>         k8-node-20   <none>           <none>
wazuh-manager-bc9d8bfc6-fmq7l      0/1     Init:0/1                0               10m     <none>         k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      14m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             14m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   14m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   14m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-4jl5f CrashLoopBackOff
wazuh-agent-57wn7 CrashLoopBackOff
wazuh-agent-5mlhm Pending
wazuh-agent-w6tth CrashLoopBackOff
wazuh-cert-generator-lcc2w Init:ImagePullBackOff
wazuh-cert-generator-v2-bp7ft Init:ImagePullBackOff
wazuh-dashboard-549c8f7698-gm6pb ContainerCreating
wazuh-dashboard-7b69bfc8f4-85dx7 ContainerCreating
wazuh-indexer-0 Init:0/2
wazuh-manager-bc9d8bfc6-fmq7l Init:0/1
--- Description for wazuh-agent-4jl5f ---
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  5m49s                  default-scheduler  Successfully assigned soc/wazuh-agent-4jl5f to k8-manager
  Normal   Pulled     5m47s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 854ms (854ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     5m45s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 861ms (861ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     5m29s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 858ms (858ms including waiting). Image size: 141495340 bytes.
  Normal   Pulling    5m (x3 over 5m48s)     kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulling    5m (x4 over 5m48s)     kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     4m59s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 888ms (888ms including waiting). Image size: 141495340 bytes.
  Normal   Created    4m58s (x4 over 5m47s)  kubelet            Created container: suricata
  Normal   Started    4m58s (x4 over 5m46s)  kubelet            Started container suricata
  Warning  BackOff    4m23s (x8 over 5m44s)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-4jl5f_soc(0ced86af-05b4-4a47-b908-5c2e1e710d7d)
  Warning  Failed     4m11s (x4 over 5m48s)  kubelet            Error: ErrImagePull
  Warning  Failed     4m11s (x4 over 5m48s)  kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  Failed     35s (x26 over 5m46s)   kubelet            Error: ImagePullBackOff
  Normal   BackOff    35s (x26 over 5m46s)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
--- Description for wazuh-agent-57wn7 ---
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  5m50s                  default-scheduler  Successfully assigned soc/wazuh-agent-57wn7 to k8-node-40
  Normal   Pulled     5m46s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.729s (1.729s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     5m43s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.839s (1.839s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     5m24s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.888s (1.888s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    4m57s (x3 over 5m49s)  kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulling    4m56s (x4 over 5m48s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     4m54s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.763s (1.763s including waiting). Image size: 141495340 bytes.
  Normal   Created    4m54s (x4 over 5m46s)  kubelet            Created container: suricata
  Normal   Started    4m54s (x4 over 5m46s)  kubelet            Started container suricata
  Warning  BackOff    4m23s (x7 over 5m42s)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-57wn7_soc(aa9661e0-f869-42e8-8ab7-ed8eaf01a460)
  Warning  Failed     4m8s (x4 over 5m48s)   kubelet            Error: ErrImagePull
  Warning  Failed     4m8s (x4 over 5m48s)   kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  Failed     40s (x26 over 5m45s)   kubelet            Error: ImagePullBackOff
  Normal   BackOff    40s (x26 over 5m45s)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
--- Description for wazuh-agent-5mlhm ---
  kube-api-access-dlbck:
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
  Type     Reason            Age                    From               Message
  ----     ------            ----                   ----               -------
  Warning  FailedScheduling  5m50s                  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  5m47s (x2 over 5m49s)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Description for wazuh-agent-w6tth ---
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  5m48s                  default-scheduler  Successfully assigned soc/wazuh-agent-w6tth to k8-node-30
  Normal   Pulled     5m36s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.95s (7.95s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     5m17s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.279s (7.279s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    4m59s (x3 over 5m46s)  kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulled     4m48s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 8.711s (8.711s including waiting). Image size: 141495340 bytes.
  Normal   Created    4m46s (x3 over 5m34s)  kubelet            Created container: suricata
  Normal   Started    4m46s (x3 over 5m34s)  kubelet            Started container suricata
  Normal   Pulling    4m23s (x4 over 5m44s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     4m13s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 9.058s (9.058s including waiting). Image size: 141495340 bytes.
  Warning  Failed     4m6s (x4 over 5m44s)   kubelet            Error: ErrImagePull
  Warning  Failed     4m6s (x4 over 5m44s)   kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  BackOff    3m35s (x4 over 4m37s)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-w6tth_soc(e6c5765b-45a4-4886-9ddc-f26aaef33529)
  Normal   BackOff    45s (x24 over 5m26s)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
  Warning  Failed     33s (x25 over 5m26s)   kubelet            Error: ImagePullBackOff
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
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  14m                   default-scheduler  Successfully assigned soc/wazuh-cert-generator-lcc2w to k8-manager
  Normal   Pulling    11m (x5 over 14m)     kubelet            Pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed     11m (x5 over 14m)     kubelet            Failed to pull image "wazuh/wazuh-certs-tool:4.7.2": failed to pull and unpack image "docker.io/wazuh/wazuh-certs-tool:4.7.2": failed to resolve image: pull access denied, repository does not exist or may require authorization: server message: insufficient_scope: authorization failed
  Warning  Failed     11m (x5 over 14m)     kubelet            Error: ErrImagePull
  Normal   BackOff    4m40s (x41 over 14m)  kubelet            Back-off pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed     4m27s (x42 over 14m)  kubelet            Error: ImagePullBackOff
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
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  5m51s                  default-scheduler  Successfully assigned soc/wazuh-cert-generator-v2-bp7ft to k8-manager
  Normal   Pulling    2m49s (x5 over 5m50s)  kubelet            Pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed     2m49s (x5 over 5m50s)  kubelet            Failed to pull image "wazuh/wazuh-certs-tool:4.9.0": failed to pull and unpack image "docker.io/wazuh/wazuh-certs-tool:4.9.0": failed to resolve image: pull access denied, repository does not exist or may require authorization: server message: insufficient_scope: authorization failed
  Warning  Failed     2m49s (x5 over 5m50s)  kubelet            Error: ErrImagePull
  Normal   BackOff    44s (x21 over 5m49s)   kubelet            Back-off pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed     44s (x21 over 5m49s)   kubelet            Error: ImagePullBackOff
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
  Normal   Scheduled    14m                 default-scheduler  Successfully assigned soc/wazuh-dashboard-549c8f7698-gm6pb to k8-node-20
  Warning  FailedMount  32s (x15 over 14m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Type     Reason       Age                  From               Message
  ----     ------       ----                 ----               -------
  Normal   Scheduled    10m                  default-scheduler  Successfully assigned soc/wazuh-dashboard-7b69bfc8f4-85dx7 to k8-node-20
  Warning  FailedMount  109s (x12 over 10m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Normal   Scheduled    14m                 default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Warning  FailedMount  31s (x15 over 14m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-indexer-certs" not found
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
  Type     Reason       Age                  From               Message
  ----     ------       ----                 ----               -------
  Normal   Scheduled    10m                  default-scheduler  Successfully assigned soc/wazuh-manager-bc9d8bfc6-fmq7l to k8-node-20
  Warning  FailedMount  108s (x12 over 10m)  kubelet            MountVolume.SetUp failed for volume "auth-certs" : secret "wazuh-manager-certs" not found
  Warning  FailedMount  108s (x12 over 10m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-manager-certs" not found
