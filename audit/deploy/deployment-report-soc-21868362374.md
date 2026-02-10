Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 14:15:49 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS                  RESTARTS         AGE    IP             NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-kvcjd                  0/2     CrashLoopBackOff        20 (2m30s ago)   81m    192.168.1.40   k8-node-40   <none>           <none>
wazuh-agent-mxkvx                  0/2     Pending                 0                81m    <none>         <none>       <none>           <none>
wazuh-agent-pwcvp                  1/2     ImagePullBackOff        14 (5m29s ago)   67m    192.168.1.30   k8-node-30   <none>           <none>
wazuh-agent-w7nr4                  0/2     CrashLoopBackOff        20 (102s ago)    81m    192.168.1.10   k8-manager   <none>           <none>
wazuh-cert-generator-lcc2w         0/1     Init:ImagePullBackOff   0                109m   172.16.74.52   k8-manager   <none>           <none>
wazuh-cert-generator-v2-bp7ft      0/1     Init:ImagePullBackOff   0                100m   172.16.74.57   k8-manager   <none>           <none>
wazuh-cert-generator-v4-nn77f      0/1     Init:0/2                0                1s     <none>         k8-manager   <none>           <none>
wazuh-dashboard-549c8f7698-gm6pb   0/1     ContainerCreating       0                109m   <none>         k8-node-20   <none>           <none>
wazuh-dashboard-7b69bfc8f4-85dx7   0/1     ContainerCreating       0                104m   <none>         k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Init:0/2                0                109m   <none>         k8-node-20   <none>           <none>
wazuh-manager-bc9d8bfc6-fmq7l      0/1     Init:0/1                0                104m   <none>         k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      109m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             109m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   109m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   109m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-kvcjd CrashLoopBackOff
wazuh-agent-mxkvx Pending
wazuh-agent-pwcvp Error
wazuh-agent-w7nr4 CrashLoopBackOff
wazuh-cert-generator-lcc2w Init:ImagePullBackOff
wazuh-cert-generator-v2-bp7ft Init:ImagePullBackOff
wazuh-cert-generator-v4-nn77f Init:0/2
wazuh-dashboard-549c8f7698-gm6pb ContainerCreating
wazuh-dashboard-7b69bfc8f4-85dx7 ContainerCreating
wazuh-indexer-0 Init:0/2
wazuh-manager-bc9d8bfc6-fmq7l Init:0/1
--- Description for wazuh-agent-kvcjd ---
  kube-api-access-mvkf6:
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
  Type     Reason   Age                  From     Message
  ----     ------   ----                 ----     -------
  Normal   BackOff  59s (x373 over 80m)  kubelet  Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  Failed   47s (x374 over 80m)  kubelet  Error: ImagePullBackOff
--- Description for wazuh-agent-mxkvx ---
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
  Warning  FailedScheduling  59m (x55 over 81m)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  55m                 default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  20m (x74 over 50m)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Description for wazuh-agent-pwcvp ---
                             node.kubernetes.io/not-ready:NoExecute op=Exists
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason   Age                  From     Message
  ----     ------   ----                 ----     -------
  Normal   Pulled   58m                  kubelet  Successfully pulled image "jasonish/suricata:latest" in 2m12.602s (2m12.602s including waiting). Image size: 141495340 bytes.
  Normal   Pulled   51m                  kubelet  Successfully pulled image "jasonish/suricata:latest" in 1m58.024s (1m58.024s including waiting). Image size: 141495340 bytes.
  Normal   Pulling  51m (x4 over 60m)    kubelet  Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulled   50m                  kubelet  Successfully pulled image "jasonish/suricata:latest" in 37.852s (37.852s including waiting). Image size: 141495340 bytes.
  Normal   Started  49m (x3 over 55m)    kubelet  Started container suricata
  Normal   Pulling  49m (x4 over 60m)    kubelet  Pulling image "jasonish/suricata:latest"
  Warning  Failed   48m (x5 over 60m)    kubelet  Error: ErrImagePull
  Warning  BackOff  48m (x4 over 49m)    kubelet  Back-off restarting failed container suricata in pod wazuh-agent-pwcvp_soc(d77190a2-5ca3-4d42-92ca-0acdc7e7dcbe)
  Normal   Pulled   46m                  kubelet  Successfully pulled image "jasonish/suricata:latest" in 22.814s (22.814s including waiting). Image size: 141495340 bytes.
  Warning  Failed   25m (x10 over 60m)   kubelet  Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Normal   Created  16m (x12 over 56m)   kubelet  Created container: suricata
  Normal   BackOff  62s (x221 over 55m)  kubelet  Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  Failed   9s (x225 over 55m)   kubelet  Error: ImagePullBackOff
--- Description for wazuh-agent-w7nr4 ---
  kube-api-access-r8x89:
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
  Type     Reason   Age                  From     Message
  ----     ------   ----                 ----     -------
  Normal   BackOff  77s (x374 over 81m)  kubelet  Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  Failed   77s (x374 over 81m)  kubelet  Error: ImagePullBackOff
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
  Normal   BackOff  4m22s (x461 over 109m)  kubelet  Back-off pulling image "wazuh/wazuh-certs-tool:4.7.2"
  Warning  Failed   4m8s (x462 over 109m)   kubelet  Error: ImagePullBackOff
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
  Normal   BackOff  21s (x437 over 100m)  kubelet  Back-off pulling image "wazuh/wazuh-certs-tool:4.9.0"
  Warning  Failed   21s (x437 over 100m)  kubelet  Error: ImagePullBackOff
--- Description for wazuh-cert-generator-v4-nn77f ---
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
  Normal  Scheduled  4s    default-scheduler  Successfully assigned soc/wazuh-cert-generator-v4-nn77f to k8-manager
  Normal  Pulling    4s    kubelet            Pulling image "busybox"
  Normal  Pulled     3s    kubelet            Successfully pulled image "busybox" in 647ms (647ms including waiting). Image size: 2222260 bytes.
  Normal  Created    3s    kubelet            Created container: config-writer
  Normal  Started    3s    kubelet            Started container config-writer
  Normal  Pulled     2s    kubelet            Container image "wazuh/wazuh-certs-generator:0.0.4" already present on machine
  Normal  Created    2s    kubelet            Created container: generator
  Normal  Started    2s    kubelet            Started container generator
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
  Warning  FailedMount  3m40s (x60 over 109m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Warning  FailedMount  2m56s (x58 over 104m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
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
  Warning  FailedMount  3m40s (x60 over 109m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-indexer-certs" not found
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
  Warning  FailedMount  9m (x55 over 104m)     kubelet  MountVolume.SetUp failed for volume "auth-certs" : secret "wazuh-manager-certs" not found
  Warning  FailedMount  2m54s (x58 over 104m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-manager-certs" not found
