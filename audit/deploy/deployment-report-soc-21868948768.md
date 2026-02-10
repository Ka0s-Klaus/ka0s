Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 14:31:18 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS                  RESTARTS        AGE     IP             NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-25q24                  0/2     Terminating             6 (5m22s ago)   13m     192.168.1.30   k8-node-30   <none>           <none>
wazuh-agent-8b9c9                  0/2     Pending                 0               0s      <none>         <none>       <none>           <none>
wazuh-agent-ghrtj                  0/2     Terminating             7               13m     192.168.1.10   k8-manager   <none>           <none>
wazuh-agent-qbmch                  0/2     Terminating             7               13m     192.168.1.40   k8-node-40   <none>           <none>
wazuh-cert-generator-lcc2w         0/1     Init:ImagePullBackOff   0               124m    172.16.74.52   k8-manager   <none>           <none>
wazuh-cert-generator-v2-bp7ft      0/1     Init:ImagePullBackOff   0               115m    172.16.74.57   k8-manager   <none>           <none>
wazuh-cert-generator-v5-8mmmw      0/1     Init:CrashLoopBackOff   5 (2m42s ago)   5m44s   172.16.74.15   k8-manager   <none>           <none>
wazuh-cert-generator-v6-pvhq9      0/1     Init:0/2                0               0s      <none>         k8-manager   <none>           <none>
wazuh-dashboard-549c8f7698-gm6pb   0/1     ContainerCreating       0               124m    <none>         k8-node-20   <none>           <none>
wazuh-dashboard-7b69bfc8f4-85dx7   0/1     ContainerCreating       0               120m    <none>         k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Init:0/2                0               124m    <none>         k8-node-20   <none>           <none>
wazuh-manager-bc9d8bfc6-fmq7l      0/1     Init:0/1                0               120m    <none>         k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      124m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             124m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   124m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   124m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-25q24 Terminating
wazuh-agent-8b9c9 Pending
wazuh-agent-ghrtj Terminating
wazuh-agent-lc2lz Init:0/1
wazuh-cert-generator-lcc2w Init:ImagePullBackOff
wazuh-cert-generator-v2-bp7ft Init:ImagePullBackOff
wazuh-cert-generator-v5-8mmmw Init:CrashLoopBackOff
wazuh-cert-generator-v6-pvhq9 Init:0/2
wazuh-dashboard-549c8f7698-gm6pb ContainerCreating
wazuh-dashboard-7b69bfc8f4-85dx7 ContainerCreating
wazuh-indexer-0 Init:0/2
wazuh-manager-bc9d8bfc6-fmq7l Init:0/1
--- Description for wazuh-agent-25q24 ---
Events:
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  13m                   default-scheduler  Successfully assigned soc/wazuh-agent-25q24 to k8-node-30
  Normal   Pulling    13m                   kubelet            Pulling image "busybox"
  Normal   Pulled     12m                   kubelet            Successfully pulled image "busybox" in 9.918s (9.918s including waiting). Image size: 2222260 bytes.
  Normal   Created    12m                   kubelet            Created container: config-init
  Normal   Started    12m                   kubelet            Started container config-init
  Normal   Pulled     12m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 9.049s (9.049s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     12m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.946s (7.946s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    11m (x3 over 12m)     kubelet            Pulling image "wazuh/wazuh-agent:4.9.0"
  Normal   Pulling    11m (x3 over 12m)     kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     11m                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 8.882s (8.882s including waiting). Image size: 141495340 bytes.
  Normal   Created    11m (x3 over 12m)     kubelet            Created container: suricata
  Normal   Started    11m (x3 over 12m)     kubelet            Started container suricata
  Warning  Failed     11m (x4 over 12m)     kubelet            Error: ErrImagePull
  Warning  Failed     11m (x4 over 12m)     kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0: not found
  Warning  BackOff    10m (x6 over 12m)     kubelet            Back-off restarting failed container suricata in pod wazuh-agent-25q24_soc(a75df06f-f86c-44df-ba72-6e2587d9ff63)
  Normal   BackOff    3m (x46 over 12m)     kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0"
  Warning  Failed     2m34s (x48 over 12m)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-agent-8b9c9 ---
  kube-api-access-p7vsn:
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
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  2s    default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  0s    default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Description for wazuh-agent-ghrtj ---
Error from server (NotFound): pods "wazuh-agent-ghrtj" not found
--- Description for wazuh-agent-lc2lz ---
  kube-api-access-f78rj:
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  1s    default-scheduler  Successfully assigned soc/wazuh-agent-lc2lz to k8-node-40
  Normal  Pulling    1s    kubelet            Pulling image "busybox"
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
  Normal   BackOff  4m45s (x527 over 124m)  kubelet  Back-off pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed   4m45s (x527 over 124m)  kubelet  Error: ImagePullBackOff
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
  Normal   BackOff  51s (x504 over 115m)  kubelet  Back-off pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed   51s (x504 over 115m)  kubelet  Error: ImagePullBackOff
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
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  5m47s                  default-scheduler  Successfully assigned soc/wazuh-cert-generator-v5-8mmmw to k8-manager
  Normal   Pulling    5m47s                  kubelet            Pulling image "busybox"
  Normal   Pulled     5m46s                  kubelet            Successfully pulled image "busybox" in 692ms (692ms including waiting). Image size: 2222260 bytes.
  Normal   Created    5m46s                  kubelet            Created container: config-writer
  Normal   Started    5m46s                  kubelet            Started container config-writer
  Normal   Pulled     2m47s (x6 over 5m45s)  kubelet            Container image "wazuh/wazuh-certs-generator:0.0.4" already present on machine
  Normal   Created    2m47s (x6 over 5m45s)  kubelet            Created container: generator
  Normal   Started    2m47s (x6 over 5m45s)  kubelet            Started container generator
  Warning  BackOff    24s (x26 over 5m41s)   kubelet            Back-off restarting failed container generator in pod wazuh-cert-generator-v5-8mmmw_soc(1839c726-4fe0-4b51-849f-d0c9fbb7246b)
--- Description for wazuh-cert-generator-v6-pvhq9 ---
    SizeLimit:  <unset>
  kube-api-access-nmshz:
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
  Normal  Scheduled  3s    default-scheduler  Successfully assigned soc/wazuh-cert-generator-v6-pvhq9 to k8-manager
  Normal  Pulling    3s    kubelet            Pulling image "busybox"
  Normal  Pulled     2s    kubelet            Successfully pulled image "busybox" in 669ms (669ms including waiting). Image size: 2222260 bytes.
  Normal  Created    2s    kubelet            Created container: config-writer
  Normal  Started    2s    kubelet            Started container config-writer
  Normal  Pulling    1s    kubelet            Pulling image "debian:bookworm-slim"
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
  Warning  FailedMount  4m55s (x67 over 125m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Type     Reason       Age                 From     Message
  ----     ------       ----                ----     -------
  Warning  FailedMount  5s (x67 over 120m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Warning  FailedMount  4m54s (x67 over 125m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-indexer-certs" not found
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
  Type     Reason       Age                   From     Message
  ----     ------       ----                  ----     -------
  Warning  FailedMount  4m8s (x65 over 120m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-manager-certs" not found
  Warning  FailedMount  4s (x67 over 120m)    kubelet  MountVolume.SetUp failed for volume "auth-certs" : secret "wazuh-manager-certs" not found
