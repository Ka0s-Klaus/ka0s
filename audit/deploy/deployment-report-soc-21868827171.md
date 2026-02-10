Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 14:27:49 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS                  RESTARTS        AGE     IP             NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-25q24                  0/2     CrashLoopBackOff        6 (113s ago)    9m38s   192.168.1.30   k8-node-30   <none>           <none>
wazuh-agent-clwnk                  0/2     Pending                 0               9m40s   <none>         <none>       <none>           <none>
wazuh-agent-ghrtj                  0/2     CrashLoopBackOff        6 (3m48s ago)   9m38s   192.168.1.10   k8-manager   <none>           <none>
wazuh-agent-qbmch                  0/2     CrashLoopBackOff        6 (3m27s ago)   9m39s   192.168.1.40   k8-node-40   <none>           <none>
wazuh-cert-generator-lcc2w         0/1     Init:ImagePullBackOff   0               121m    172.16.74.52   k8-manager   <none>           <none>
wazuh-cert-generator-v2-bp7ft      0/1     Init:ImagePullBackOff   0               112m    172.16.74.57   k8-manager   <none>           <none>
wazuh-cert-generator-v5-8mmmw      0/1     Init:CrashLoopBackOff   4 (38s ago)     2m15s   172.16.74.15   k8-manager   <none>           <none>
wazuh-dashboard-549c8f7698-gm6pb   0/1     ContainerCreating       0               121m    <none>         k8-node-20   <none>           <none>
wazuh-dashboard-7b69bfc8f4-85dx7   0/1     ContainerCreating       0               116m    <none>         k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Init:0/2                0               121m    <none>         k8-node-20   <none>           <none>
wazuh-manager-bc9d8bfc6-fmq7l      0/1     Init:0/1                0               116m    <none>         k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      121m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             121m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   121m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   121m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-25q24 CrashLoopBackOff
wazuh-agent-clwnk Pending
wazuh-agent-ghrtj CrashLoopBackOff
wazuh-agent-qbmch CrashLoopBackOff
wazuh-cert-generator-lcc2w Init:ImagePullBackOff
wazuh-cert-generator-v2-bp7ft Init:ImagePullBackOff
wazuh-cert-generator-v5-8mmmw Init:CrashLoopBackOff
wazuh-dashboard-549c8f7698-gm6pb ContainerCreating
wazuh-dashboard-7b69bfc8f4-85dx7 ContainerCreating
wazuh-indexer-0 Init:0/2
wazuh-manager-bc9d8bfc6-fmq7l Init:0/1
--- Description for wazuh-agent-25q24 ---
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  9m39s                   default-scheduler  Successfully assigned soc/wazuh-agent-25q24 to k8-node-30
  Normal   Pulling    9m36s                   kubelet            Pulling image "busybox"
  Normal   Pulled     9m26s                   kubelet            Successfully pulled image "busybox" in 9.918s (9.918s including waiting). Image size: 2222260 bytes.
  Normal   Created    9m22s                   kubelet            Created container: config-init
  Normal   Started    9m20s                   kubelet            Started container config-init
  Normal   Pulled     9m                      kubelet            Successfully pulled image "jasonish/suricata:latest" in 9.049s (9.049s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     8m41s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.946s (7.946s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    8m19s (x3 over 9m11s)   kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulling    8m17s (x3 over 9m9s)    kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     8m8s                    kubelet            Successfully pulled image "jasonish/suricata:latest" in 8.882s (8.882s including waiting). Image size: 141495340 bytes.
  Normal   Created    8m6s (x3 over 8m56s)    kubelet            Created container: suricata
  Normal   Started    8m5s (x3 over 8m55s)    kubelet            Started container suricata
  Warning  Failed     7m33s (x4 over 9m9s)    kubelet            Error: ErrImagePull
  Warning  Failed     7m33s (x4 over 9m9s)    kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  BackOff    6m54s (x6 over 8m33s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-25q24_soc(a75df06f-f86c-44df-ba72-6e2587d9ff63)
  Normal   BackOff    4m25s (x23 over 8m49s)  kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
  Warning  Failed     3m57s (x25 over 8m49s)  kubelet            Error: ImagePullBackOff
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
  Type     Reason            Age                   From               Message
  ----     ------            ----                  ----               -------
  Warning  FailedScheduling  9m41s                 default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  6m6s (x5 over 9m39s)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Description for wazuh-agent-ghrtj ---
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  9m39s                   default-scheduler  Successfully assigned soc/wazuh-agent-ghrtj to k8-manager
  Normal   Pulling    9m38s                   kubelet            Pulling image "busybox"
  Normal   Pulled     9m38s                   kubelet            Successfully pulled image "busybox" in 633ms (634ms including waiting). Image size: 2222260 bytes.
  Normal   Created    9m38s                   kubelet            Created container: config-init
  Normal   Started    9m37s                   kubelet            Started container config-init
  Normal   Pulled     9m36s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 618ms (618ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled     9m34s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 706ms (706ms including waiting). Image size: 141495340 bytes.
  Normal   Pulling    9m18s (x3 over 9m36s)   kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulling    9m18s (x2 over 9m37s)   kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Created    9m17s (x3 over 9m36s)   kubelet            Created container: suricata
  Normal   Started    9m17s (x3 over 9m36s)   kubelet            Started container suricata
  Normal   Pulled     9m17s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 663ms (663ms including waiting). Image size: 141495340 bytes.
  Warning  BackOff    8m21s (x7 over 9m33s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-ghrtj_soc(e62e528d-efb7-48aa-9118-36ad0392eea2)
  Warning  Failed     8m8s (x4 over 9m36s)    kubelet            Error: ErrImagePull
  Warning  Failed     8m8s (x4 over 9m36s)    kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Normal   BackOff    4m31s (x28 over 9m35s)  kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
  Warning  Failed     4m31s (x28 over 9m35s)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-agent-qbmch ---
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  9m40s                   default-scheduler  Successfully assigned soc/wazuh-agent-qbmch to k8-node-40
  Normal   Pulling    9m40s                   kubelet            Pulling image "busybox"
  Normal   Pulled     9m39s                   kubelet            Successfully pulled image "busybox" in 1.228s (1.228s including waiting). Image size: 2222260 bytes.
  Normal   Created    9m39s                   kubelet            Created container: config-init
  Normal   Started    9m38s                   kubelet            Started container config-init
  Normal   Pulled     9m35s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.796s (1.796s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     9m32s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.658s (1.658s including waiting). Image size: 141495340 bytes.
  Normal   Started    9m12s (x3 over 9m34s)   kubelet            Started container suricata
  Normal   Pulled     9m12s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.647s (1.647s including waiting). Image size: 141495340 bytes.
  Normal   Created    9m12s (x3 over 9m35s)   kubelet            Created container: suricata
  Normal   Pulling    8m45s (x3 over 9m38s)   kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulling    8m44s (x4 over 9m37s)   kubelet            Pulling image "jasonish/suricata:latest"
  Warning  Failed     8m2s (x4 over 9m37s)    kubelet            Error: ErrImagePull
  Warning  BackOff    8m2s (x8 over 9m30s)    kubelet            Back-off restarting failed container suricata in pod wazuh-agent-qbmch_soc(6895f362-ced9-4656-b426-5c53fcc2e682)
  Warning  Failed     8m2s (x4 over 9m37s)    kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Normal   BackOff    4m30s (x26 over 9m33s)  kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
  Warning  Failed     4m30s (x26 over 9m33s)  kubelet            Error: ImagePullBackOff
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
  Type     Reason   Age                   From     Message
  ----     ------   ----                  ----     -------
  Normal   BackOff  75s (x527 over 121m)  kubelet  Back-off pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed   75s (x527 over 121m)  kubelet  Error: ImagePullBackOff
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
  Type     Reason   Age                     From     Message
  ----     ------   ----                    ----     -------
  Normal   BackOff  2m27s (x482 over 112m)  kubelet  Back-off pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed   2m27s (x482 over 112m)  kubelet  Error: ImagePullBackOff
--- Description for wazuh-cert-generator-v5-8mmmw ---
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
  Normal   Scheduled  2m16s                 default-scheduler  Successfully assigned soc/wazuh-cert-generator-v5-8mmmw to k8-manager
  Normal   Pulling    2m16s                 kubelet            Pulling image "busybox"
  Normal   Pulled     2m15s                 kubelet            Successfully pulled image "busybox" in 692ms (692ms including waiting). Image size: 2222260 bytes.
  Normal   Created    2m15s                 kubelet            Created container: config-writer
  Normal   Started    2m15s                 kubelet            Started container config-writer
  Normal   Pulled     41s (x5 over 2m14s)   kubelet            Container image "wazuh/wazuh-certs-generator:0.0.4" already present on machine
  Normal   Created    41s (x5 over 2m14s)   kubelet            Created container: generator
  Normal   Started    41s (x5 over 2m14s)   kubelet            Started container generator
  Warning  BackOff    12s (x11 over 2m10s)  kubelet            Back-off restarting failed container generator in pod wazuh-cert-generator-v5-8mmmw_soc(1839c726-4fe0-4b51-849f-d0c9fbb7246b)
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
  Type     Reason       Age                  From     Message
  ----     ------       ----                 ----     -------
  Warning  FailedMount  84s (x67 over 121m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Type     Reason       Age                  From     Message
  ----     ------       ----                 ----     -------
  Warning  FailedMount  39s (x65 over 116m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Type     Reason       Age                  From     Message
  ----     ------       ----                 ----     -------
  Warning  FailedMount  83s (x67 over 121m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-indexer-certs" not found
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
  Type     Reason       Age                  From     Message
  ----     ------       ----                 ----     -------
  Warning  FailedMount  20m (x55 over 116m)  kubelet  MountVolume.SetUp failed for volume "auth-certs" : secret "wazuh-manager-certs" not found
  Warning  FailedMount  38s (x65 over 116m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-manager-certs" not found
