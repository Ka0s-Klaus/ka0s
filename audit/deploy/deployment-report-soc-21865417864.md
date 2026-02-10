Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 12:46:42 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS                  RESTARTS        AGE   IP             NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-4jl5f                  0/2     Error                   7 (5m19s ago)   11m   192.168.1.10   k8-manager   <none>           <none>
wazuh-agent-57wn7                  0/2     Error                   7 (5m21s ago)   11m   192.168.1.40   k8-node-40   <none>           <none>
wazuh-agent-5mlhm                  0/2     Pending                 0               11m   <none>         <none>       <none>           <none>
wazuh-agent-w6tth                  0/2     CrashLoopBackOff        6 (4m1s ago)    11m   192.168.1.30   k8-node-30   <none>           <none>
wazuh-cert-generator-lcc2w         0/1     Init:ImagePullBackOff   0               20m   172.16.74.52   k8-manager   <none>           <none>
wazuh-cert-generator-v2-bp7ft      0/1     Init:ErrImagePull       0               11m   172.16.74.57   k8-manager   <none>           <none>
wazuh-cert-generator-v3-w9dtt      0/1     Init:0/2                0               0s    <none>         k8-manager   <none>           <none>
wazuh-dashboard-549c8f7698-gm6pb   0/1     ContainerCreating       0               20m   <none>         k8-node-20   <none>           <none>
wazuh-dashboard-7b69bfc8f4-85dx7   0/1     ContainerCreating       0               15m   <none>         k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Init:0/2                0               20m   <none>         k8-node-20   <none>           <none>
wazuh-manager-bc9d8bfc6-fmq7l      0/1     Init:0/1                0               15m   <none>         k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      20m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             20m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   20m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   20m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-4jl5f Error
wazuh-agent-57wn7 Error
wazuh-agent-5mlhm Pending
wazuh-agent-w6tth CrashLoopBackOff
wazuh-cert-generator-lcc2w Init:ImagePullBackOff
wazuh-cert-generator-v2-bp7ft Init:ErrImagePull
wazuh-cert-generator-v3-w9dtt Init:0/2
wazuh-dashboard-549c8f7698-gm6pb ContainerCreating
wazuh-dashboard-7b69bfc8f4-85dx7 ContainerCreating
wazuh-indexer-0 Init:0/2
wazuh-manager-bc9d8bfc6-fmq7l Init:0/1
--- Description for wazuh-agent-4jl5f ---
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  11m                  default-scheduler  Successfully assigned soc/wazuh-agent-4jl5f to k8-manager
  Normal   Pulled     11m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 854ms (854ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     11m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 861ms (861ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     11m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 858ms (858ms including waiting). Image size: 141495340 bytes.
  Normal   Pulling    10m (x3 over 11m)    kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulling    10m (x4 over 11m)    kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     10m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 888ms (888ms including waiting). Image size: 141495340 bytes.
  Normal   Created    10m (x4 over 11m)    kubelet            Created container: suricata
  Normal   Started    10m (x4 over 11m)    kubelet            Started container suricata
  Warning  BackOff    9m54s (x8 over 11m)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-4jl5f_soc(0ced86af-05b4-4a47-b908-5c2e1e710d7d)
  Warning  Failed     9m42s (x4 over 11m)  kubelet            Error: ErrImagePull
  Warning  Failed     9m42s (x4 over 11m)  kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  Failed     76s (x48 over 11m)   kubelet            Error: ImagePullBackOff
  Normal   BackOff    76s (x48 over 11m)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
--- Description for wazuh-agent-57wn7 ---
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  11m                  default-scheduler  Successfully assigned soc/wazuh-agent-57wn7 to k8-node-40
  Normal   Pulled     11m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.729s (1.729s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     11m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.839s (1.839s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     10m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.888s (1.888s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    10m (x3 over 11m)    kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulling    10m (x4 over 11m)    kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     10m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.763s (1.763s including waiting). Image size: 141495340 bytes.
  Normal   Created    10m (x4 over 11m)    kubelet            Created container: suricata
  Normal   Started    10m (x4 over 11m)    kubelet            Started container suricata
  Warning  BackOff    9m54s (x7 over 11m)  kubelet            Back-off restarting failed container suricata in pod wazuh-agent-57wn7_soc(aa9661e0-f869-42e8-8ab7-ed8eaf01a460)
  Warning  Failed     9m39s (x4 over 11m)  kubelet            Error: ErrImagePull
  Warning  Failed     9m39s (x4 over 11m)  kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  Failed     67s (x49 over 11m)   kubelet            Error: ImagePullBackOff
  Normal   BackOff    67s (x49 over 11m)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
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
  Type     Reason            Age                From               Message
  ----     ------            ----               ----               -------
  Warning  FailedScheduling  11m                default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  11m (x2 over 11m)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Description for wazuh-agent-w6tth ---
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  11m                  default-scheduler  Successfully assigned soc/wazuh-agent-w6tth to k8-node-30
  Normal   Pulled     11m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.95s (7.95s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     10m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.279s (7.279s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    10m (x3 over 11m)    kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulled     10m                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 8.711s (8.711s including waiting). Image size: 141495340 bytes.
  Normal   Created    10m (x3 over 11m)    kubelet            Created container: suricata
  Normal   Started    10m (x3 over 11m)    kubelet            Started container suricata
  Normal   Pulling    9m54s (x4 over 11m)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     9m44s                kubelet            Successfully pulled image "jasonish/suricata:latest" in 9.058s (9.058s including waiting). Image size: 141495340 bytes.
  Warning  Failed     9m37s (x4 over 11m)  kubelet            Error: ErrImagePull
  Warning  Failed     9m37s (x4 over 11m)  kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  BackOff    9m6s (x4 over 10m)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-w6tth_soc(e6c5765b-45a4-4886-9ddc-f26aaef33529)
  Warning  Failed     69s (x47 over 10m)   kubelet            Error: ImagePullBackOff
  Normal   BackOff    69s (x47 over 10m)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
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
  Type     Reason     Age                 From               Message
  ----     ------     ----                ----               -------
  Normal   Scheduled  20m                 default-scheduler  Successfully assigned soc/wazuh-cert-generator-lcc2w to k8-manager
  Normal   Pulling    17m (x5 over 20m)   kubelet            Pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed     17m (x5 over 20m)   kubelet            Failed to pull image "wazuh/wazuh-certs-tool:4.7.2": failed to pull and unpack image "docker.io/wazuh/wazuh-certs-tool:4.7.2": failed to resolve image: pull access denied, repository does not exist or may require authorization: server message: insufficient_scope: authorization failed
  Warning  Failed     17m (x5 over 20m)   kubelet            Error: ErrImagePull
  Normal   BackOff    18s (x86 over 20m)  kubelet            Back-off pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed     4s (x87 over 20m)   kubelet            Error: ImagePullBackOff
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
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  11m                  default-scheduler  Successfully assigned soc/wazuh-cert-generator-v2-bp7ft to k8-manager
  Normal   Pulling    8m20s (x5 over 11m)  kubelet            Pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed     8m20s (x5 over 11m)  kubelet            Failed to pull image "wazuh/wazuh-certs-tool:4.9.0": failed to pull and unpack image "docker.io/wazuh/wazuh-certs-tool:4.9.0": failed to resolve image: pull access denied, repository does not exist or may require authorization: server message: insufficient_scope: authorization failed
  Warning  Failed     8m20s (x5 over 11m)  kubelet            Error: ErrImagePull
  Normal   BackOff    76s (x43 over 11m)   kubelet            Back-off pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed     76s (x43 over 11m)   kubelet            Error: ImagePullBackOff
--- Description for wazuh-cert-generator-v3-w9dtt ---
    Medium:     
    SizeLimit:  <unset>
  kube-api-access-5dmdk:
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
  Normal  Scheduled  2s    default-scheduler  Successfully assigned soc/wazuh-cert-generator-v3-w9dtt to k8-manager
  Normal  Pulling    1s    kubelet            Pulling image "busybox"
  Normal  Pulled     0s    kubelet            Successfully pulled image "busybox" in 799ms (799ms including waiting). Image size: 2222260 bytes.
  Normal  Created    0s    kubelet            Created container: config-writer
  Normal  Started    0s    kubelet            Started container config-writer
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
  Type     Reason       Age                  From               Message
  ----     ------       ----                 ----               -------
  Normal   Scheduled    20m                  default-scheduler  Successfully assigned soc/wazuh-dashboard-549c8f7698-gm6pb to k8-node-20
  Warning  FailedMount  119s (x17 over 20m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Normal   Scheduled    15m                 default-scheduler  Successfully assigned soc/wazuh-dashboard-7b69bfc8f4-85dx7 to k8-node-20
  Warning  FailedMount  74s (x15 over 15m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Type     Reason       Age                  From               Message
  ----     ------       ----                 ----               -------
  Normal   Scheduled    20m                  default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Warning  FailedMount  118s (x17 over 20m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-indexer-certs" not found
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
  Normal   Scheduled    15m                   default-scheduler  Successfully assigned soc/wazuh-manager-bc9d8bfc6-fmq7l to k8-node-20
  Warning  FailedMount  5m18s (x13 over 15m)  kubelet            MountVolume.SetUp failed for volume "certificates" : secret "wazuh-manager-certs" not found
  Warning  FailedMount  3m16s (x14 over 15m)  kubelet            MountVolume.SetUp failed for volume "auth-certs" : secret "wazuh-manager-certs" not found
