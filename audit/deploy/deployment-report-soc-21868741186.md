Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 14:25:34 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS                  RESTARTS        AGE     IP             NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-25q24                  0/2     CrashLoopBackOff        5 (2m38s ago)   7m24s   192.168.1.30   k8-node-30   <none>           <none>
wazuh-agent-clwnk                  0/2     Pending                 0               7m26s   <none>         <none>       <none>           <none>
wazuh-agent-ghrtj                  0/2     CrashLoopBackOff        6 (94s ago)     7m24s   192.168.1.10   k8-manager   <none>           <none>
wazuh-agent-qbmch                  0/2     CrashLoopBackOff        6 (73s ago)     7m25s   192.168.1.40   k8-node-40   <none>           <none>
wazuh-cert-generator-lcc2w         0/1     Init:ErrImagePull       0               119m    172.16.74.52   k8-manager   <none>           <none>
wazuh-cert-generator-v2-bp7ft      0/1     Init:ImagePullBackOff   0               110m    172.16.74.57   k8-manager   <none>           <none>
wazuh-cert-generator-v5-8mmmw      0/1     Init:0/2                0               1s      <none>         k8-manager   <none>           <none>
wazuh-dashboard-549c8f7698-gm6pb   0/1     ContainerCreating       0               119m    <none>         k8-node-20   <none>           <none>
wazuh-dashboard-7b69bfc8f4-85dx7   0/1     ContainerCreating       0               114m    <none>         k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Init:0/2                0               119m    <none>         k8-node-20   <none>           <none>
wazuh-manager-bc9d8bfc6-fmq7l      0/1     Init:0/1                0               114m    <none>         k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      119m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             119m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   119m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   119m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-25q24 CrashLoopBackOff
wazuh-agent-clwnk Pending
wazuh-agent-ghrtj CrashLoopBackOff
wazuh-agent-qbmch CrashLoopBackOff
wazuh-cert-generator-lcc2w Init:ErrImagePull
wazuh-cert-generator-v2-bp7ft Init:ImagePullBackOff
wazuh-cert-generator-v5-8mmmw Init:0/2
wazuh-dashboard-549c8f7698-gm6pb ContainerCreating
wazuh-dashboard-7b69bfc8f4-85dx7 ContainerCreating
wazuh-indexer-0 Init:0/2
wazuh-manager-bc9d8bfc6-fmq7l Init:0/1
--- Description for wazuh-agent-25q24 ---
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  7m25s                   default-scheduler  Successfully assigned soc/wazuh-agent-25q24 to k8-node-30
  Normal   Pulling    7m22s                   kubelet            Pulling image "busybox"
  Normal   Pulled     7m12s                   kubelet            Successfully pulled image "busybox" in 9.918s (9.918s including waiting). Image size: 2222260 bytes.
  Normal   Created    7m8s                    kubelet            Created container: config-init
  Normal   Started    7m6s                    kubelet            Started container config-init
  Normal   Pulled     6m46s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 9.049s (9.049s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     6m27s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.946s (7.946s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    6m5s (x3 over 6m57s)    kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulling    6m3s (x3 over 6m55s)    kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     5m54s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 8.882s (8.882s including waiting). Image size: 141495340 bytes.
  Normal   Created    5m52s (x3 over 6m42s)   kubelet            Created container: suricata
  Normal   Started    5m51s (x3 over 6m41s)   kubelet            Started container suricata
  Warning  Failed     5m19s (x4 over 6m55s)   kubelet            Error: ErrImagePull
  Warning  Failed     5m19s (x4 over 6m55s)   kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  BackOff    4m40s (x6 over 6m19s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-25q24_soc(a75df06f-f86c-44df-ba72-6e2587d9ff63)
  Normal   BackOff    2m11s (x23 over 6m35s)  kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
  Warning  Failed     103s (x25 over 6m35s)   kubelet            Error: ImagePullBackOff
--- Description for wazuh-agent-clwnk ---
  kube-api-access-m75kp:
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
  Warning  FailedScheduling  7m27s                  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  3m53s (x5 over 7m25s)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Description for wazuh-agent-ghrtj ---
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  7m25s                   default-scheduler  Successfully assigned soc/wazuh-agent-ghrtj to k8-manager
  Normal   Pulling    7m24s                   kubelet            Pulling image "busybox"
  Normal   Pulled     7m24s                   kubelet            Successfully pulled image "busybox" in 633ms (634ms including waiting). Image size: 2222260 bytes.
  Normal   Created    7m24s                   kubelet            Created container: config-init
  Normal   Started    7m23s                   kubelet            Started container config-init
  Normal   Pulled     7m22s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 618ms (618ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     7m20s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 706ms (706ms including waiting). Image size: 141495340 bytes.
  Normal   Pulling    7m4s (x3 over 7m22s)    kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulling    7m4s (x2 over 7m23s)    kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Created    7m3s (x3 over 7m22s)    kubelet            Created container: suricata
  Normal   Started    7m3s (x3 over 7m22s)    kubelet            Started container suricata
  Normal   Pulled     7m3s                    kubelet            Successfully pulled image "jasonish/suricata:latest" in 663ms (663ms including waiting). Image size: 141495340 bytes.
  Warning  BackOff    6m7s (x7 over 7m19s)    kubelet            Back-off restarting failed container suricata in pod wazuh-agent-ghrtj_soc(e62e528d-efb7-48aa-9118-36ad0392eea2)
  Warning  Failed     5m54s (x4 over 7m22s)   kubelet            Error: ErrImagePull
  Warning  Failed     5m54s (x4 over 7m22s)   kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Normal   BackOff    2m17s (x28 over 7m21s)  kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
  Warning  Failed     2m17s (x28 over 7m21s)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-agent-qbmch ---
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  7m26s                   default-scheduler  Successfully assigned soc/wazuh-agent-qbmch to k8-node-40
  Normal   Pulling    7m26s                   kubelet            Pulling image "busybox"
  Normal   Pulled     7m25s                   kubelet            Successfully pulled image "busybox" in 1.228s (1.228s including waiting). Image size: 2222260 bytes.
  Normal   Created    7m25s                   kubelet            Created container: config-init
  Normal   Started    7m24s                   kubelet            Started container config-init
  Normal   Pulled     7m21s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.796s (1.796s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     7m18s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.658s (1.658s including waiting). Image size: 141495340 bytes.
  Normal   Started    6m58s (x3 over 7m20s)   kubelet            Started container suricata
  Normal   Pulled     6m58s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.647s (1.647s including waiting). Image size: 141495340 bytes.
  Normal   Created    6m58s (x3 over 7m21s)   kubelet            Created container: suricata
  Normal   Pulling    6m31s (x3 over 7m24s)   kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulling    6m30s (x4 over 7m23s)   kubelet            Pulling image "jasonish/suricata:latest"
  Warning  Failed     5m48s (x4 over 7m23s)   kubelet            Error: ErrImagePull
  Warning  BackOff    5m48s (x8 over 7m16s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-qbmch_soc(6895f362-ced9-4656-b426-5c53fcc2e682)
  Warning  Failed     5m48s (x4 over 7m23s)   kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Normal   BackOff    2m16s (x26 over 7m19s)  kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
  Warning  Failed     2m16s (x26 over 7m19s)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-cert-generator-lcc2w ---
Volumes:
  shared-certs:
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:     
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
  Type     Reason   Age                     From     Message
  ----     ------   ----                    ----     -------
  Normal   BackOff  4m7s (x505 over 119m)   kubelet  Back-off pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed   3m56s (x506 over 119m)  kubelet  Error: ImagePullBackOff
--- Description for wazuh-cert-generator-v2-bp7ft ---
Volumes:
  shared-certs:
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:     
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
  Type     Reason   Age                   From     Message
  ----     ------   ----                  ----     -------
  Normal   BackOff  13s (x482 over 110m)  kubelet  Back-off pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed   13s (x482 over 110m)  kubelet  Error: ImagePullBackOff
--- Description for wazuh-cert-generator-v5-8mmmw ---
    Medium:     
    SizeLimit:  <unset>
  kube-api-access-7pkcn:
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
  Normal  Scheduled  2s    default-scheduler  Successfully assigned soc/wazuh-cert-generator-v5-8mmmw to k8-manager
  Normal  Pulling    2s    kubelet            Pulling image "busybox"
  Normal  Pulled     1s    kubelet            Successfully pulled image "busybox" in 692ms (692ms including waiting). Image size: 2222260 bytes.
  Normal  Created    1s    kubelet            Created container: config-writer
  Normal  Started    1s    kubelet            Started container config-writer
--- Description for wazuh-dashboard-549c8f7698-gm6pb ---
  PodScheduled                True 
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
  Type     Reason       Age                    From     Message
  ----     ------       ----                   ----     -------
  Warning  FailedMount  3m14s (x65 over 119m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
--- Description for wazuh-dashboard-7b69bfc8f4-85dx7 ---
  PodScheduled                True 
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
  Type     Reason       Age                    From     Message
  ----     ------       ----                   ----     -------
  Warning  FailedMount  2m29s (x63 over 114m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
--- Description for wazuh-indexer-0 ---
    ClaimName:  wazuh-indexer-pvc
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
  Type     Reason       Age                    From     Message
  ----     ------       ----                   ----     -------
  Warning  FailedMount  3m13s (x65 over 119m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-indexer-certs" not found
--- Description for wazuh-manager-bc9d8bfc6-fmq7l ---
    Optional:    false
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
  Type     Reason       Age                    From     Message
  ----     ------       ----                   ----     -------
  Warning  FailedMount  18m (x55 over 114m)    kubelet  MountVolume.SetUp failed for volume "auth-certs" : secret "wazuh-manager-certs" not found
  Warning  FailedMount  2m27s (x63 over 114m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-manager-certs" not found
