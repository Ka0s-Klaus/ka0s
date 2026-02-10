Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 14:36:09 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS       AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-8b9c9                  0/2     CrashLoopBackOff   4 (20s ago)    4m52s   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-dj4f8                  0/2     CrashLoopBackOff   5 (27s ago)    4m46s   192.168.1.30    k8-node-30   <none>           <none>
wazuh-agent-lc2lz                  0/2     CrashLoopBackOff   5 (99s ago)    4m51s   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-qrrgs                  0/2     CrashLoopBackOff   5 (106s ago)   4m51s   192.168.1.10    k8-manager   <none>           <none>
wazuh-cert-generator-v6-pvhq9      0/1     Completed          0              4m52s   172.16.74.27    k8-manager   <none>           <none>
wazuh-dashboard-7b69bfc8f4-85dx7   0/1     CrashLoopBackOff   4 (16s ago)    125m    172.16.209.42   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Pending            0              2m9s    <none>          <none>       <none>           <none>
wazuh-manager-bc9d8bfc6-fmq7l      1/1     Running            3 (29s ago)    124m    172.16.209.33   k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      129m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             129m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   129m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   129m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-8b9c9 CrashLoopBackOff
wazuh-agent-dj4f8 CrashLoopBackOff
wazuh-agent-lc2lz CrashLoopBackOff
wazuh-agent-qrrgs CrashLoopBackOff
wazuh-dashboard-7b69bfc8f4-85dx7 CrashLoopBackOff
wazuh-indexer-0 Pending
--- Description for wazuh-agent-8b9c9 ---
  Warning  FailedScheduling  4m52s                  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  4m49s (x2 over 4m51s)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 3 node(s) didn't satisfy plugin(s) [NodeAffinity]. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Normal   Scheduled         2m10s                  default-scheduler  Successfully assigned soc/wazuh-agent-8b9c9 to k8-node-20
  Warning  FailedMount       2m10s                  kubelet            MountVolume.SetUp failed for volume "wazuh-agent-conf" : failed to sync configmap cache: timed out waiting for the condition
  Normal   Pulling           2m9s                   kubelet            Pulling image "busybox"
  Normal   Created           111s                   kubelet            Created container: config-init
  Normal   Started           111s                   kubelet            Started container config-init
  Normal   Pulled            111s                   kubelet            Successfully pulled image "busybox" in 638ms (17.823s including waiting). Image size: 2222260 bytes.
  Normal   Pulled            106s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 619ms (620ms including waiting). Image size: 141495340 bytes.
  Normal   Pulled            105s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 640ms (640ms including waiting). Image size: 141495340 bytes.
  Normal   Created           92s (x3 over 106s)     kubelet            Created container: suricata
  Normal   Pulled            92s                    kubelet            Successfully pulled image "jasonish/suricata:latest" in 655ms (655ms including waiting). Image size: 141495340 bytes.
  Normal   Started           92s (x3 over 106s)     kubelet            Started container suricata
  Normal   BackOff           81s (x5 over 105s)     kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulling           69s (x3 over 107s)     kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulling           68s (x4 over 107s)     kubelet            Pulling image "jasonish/suricata:latest"
  Warning  Failed            22s (x4 over 107s)     kubelet            Error: ErrImagePull
  Warning  Failed            22s (x4 over 107s)     kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Warning  Failed            21s (x9 over 105s)     kubelet            Error: ImagePullBackOff
  Warning  BackOff           21s (x7 over 104s)     kubelet            Back-off restarting failed container suricata in pod wazuh-agent-8b9c9_soc(4da042f0-b671-4e3d-b0ed-a1db9accc438)
--- Description for wazuh-agent-dj4f8 ---
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  4m47s                  default-scheduler  Successfully assigned soc/wazuh-agent-dj4f8 to k8-node-30
  Normal   Pulling    4m43s                  kubelet            Pulling image "busybox"
  Normal   Pulled     4m38s                  kubelet            Successfully pulled image "busybox" in 4.787s (4.787s including waiting). Image size: 2222260 bytes.
  Normal   Created    4m36s                  kubelet            Created container: config-init
  Normal   Started    4m36s                  kubelet            Started container config-init
  Normal   Pulled     4m22s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.942s (7.942s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     4m6s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 7.959s (7.959s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    3m48s (x3 over 4m31s)  kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulling    3m46s (x3 over 4m30s)  kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Pulled     3m38s                  kubelet            Successfully pulled image "jasonish/suricata:latest" in 8.555s (8.555s including waiting). Image size: 141495340 bytes.
  Normal   Created    3m36s (x3 over 4m19s)  kubelet            Created container: suricata
  Normal   Started    3m35s (x3 over 4m17s)  kubelet            Started container suricata
  Normal   BackOff    3m21s (x6 over 4m3s)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  Failed     2m54s (x4 over 4m30s)  kubelet            Error: ErrImagePull
  Warning  Failed     2m54s (x4 over 4m30s)  kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Warning  BackOff    2m30s (x6 over 4m)     kubelet            Back-off restarting failed container suricata in pod wazuh-agent-dj4f8_soc(61cad851-3824-466c-b86c-2fa6c88f60c5)
  Warning  Failed     2m18s (x11 over 4m3s)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-agent-lc2lz ---
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  4m51s                   default-scheduler  Successfully assigned soc/wazuh-agent-lc2lz to k8-node-40
  Normal   Pulling    4m51s                   kubelet            Pulling image "busybox"
  Normal   Pulled     4m50s                   kubelet            Successfully pulled image "busybox" in 1.286s (1.286s including waiting). Image size: 2222260 bytes.
  Normal   Created    4m50s                   kubelet            Created container: config-init
  Normal   Started    4m49s                   kubelet            Started container config-init
  Normal   Pulled     4m46s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.771s (1.771s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     4m43s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.667s (1.667s including waiting). Image size: 141495340 bytes.
  Normal   Pulling    4m25s (x3 over 4m48s)   kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Created    4m23s (x3 over 4m46s)   kubelet            Created container: suricata
  Normal   Started    4m23s (x3 over 4m45s)   kubelet            Started container suricata
  Normal   Pulled     4m23s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 1.804s (1.804s including waiting). Image size: 141495340 bytes.
  Normal   BackOff    4m7s (x6 over 4m45s)    kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulling    3m54s (x3 over 4m48s)   kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  Failed     3m23s (x10 over 4m45s)  kubelet            Error: ImagePullBackOff
  Warning  BackOff    3m23s (x7 over 4m41s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-lc2lz_soc(bebbb5bf-7179-43f5-bd9d-974f44c0ff6a)
  Warning  Failed     3m7s (x4 over 4m48s)    kubelet            Error: ErrImagePull
  Warning  Failed     3m7s (x4 over 4m48s)    kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
--- Description for wazuh-agent-qrrgs ---
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  4m51s                   default-scheduler  Successfully assigned soc/wazuh-agent-qrrgs to k8-manager
  Normal   Pulling    4m51s                   kubelet            Pulling image "busybox"
  Normal   Pulled     4m50s                   kubelet            Successfully pulled image "busybox" in 644ms (644ms including waiting). Image size: 2222260 bytes.
  Normal   Created    4m50s                   kubelet            Created container: config-init
  Normal   Started    4m50s                   kubelet            Started container config-init
  Normal   Pulled     4m43s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 636ms (5.591s including waiting). Image size: 141495340 bytes.
  Normal   Pulled     4m42s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 658ms (658ms including waiting). Image size: 141495340 bytes.
  Normal   Pulling    4m25s (x3 over 4m49s)   kubelet            Pulling image "jasonish/suricata:latest"
  Normal   Created    4m24s (x3 over 4m43s)   kubelet            Created container: suricata
  Normal   Started    4m24s (x3 over 4m43s)   kubelet            Started container suricata
  Normal   Pulled     4m24s                   kubelet            Successfully pulled image "jasonish/suricata:latest" in 638ms (638ms including waiting). Image size: 141495340 bytes.
  Normal   BackOff    4m12s (x6 over 4m42s)   kubelet            Back-off pulling image "wazuh/wazuh-agent:4.9.0-1"
  Normal   Pulling    4m (x3 over 4m50s)      kubelet            Pulling image "wazuh/wazuh-agent:4.9.0-1"
  Warning  BackOff    3m29s (x7 over 4m40s)   kubelet            Back-off restarting failed container suricata in pod wazuh-agent-qrrgs_soc(de4d890c-bc33-45f5-8ac9-7170ab037fda)
  Warning  Failed     3m16s (x4 over 4m49s)   kubelet            Error: ErrImagePull
  Warning  Failed     3m16s (x4 over 4m49s)   kubelet            Failed to pull image "wazuh/wazuh-agent:4.9.0-1": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/wazuh/wazuh-agent:4.9.0-1": failed to resolve image: docker.io/wazuh/wazuh-agent:4.9.0-1: not found
  Warning  Failed     3m14s (x10 over 4m42s)  kubelet            Error: ImagePullBackOff
--- Description for wazuh-dashboard-7b69bfc8f4-85dx7 ---
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
  Warning  FailedMount  4m54s (x67 over 125m)  kubelet  MountVolume.SetUp failed for volume "certificates" : secret "wazuh-dashboard-certs" not found
  Normal   Pulling      2m52s                  kubelet  Pulling image "wazuh/wazuh-dashboard:4.9.0"
  Normal   Pulled       2m17s                  kubelet  Successfully pulled image "wazuh/wazuh-dashboard:4.9.0" in 26.518s (35.323s including waiting). Image size: 361920544 bytes.
  Normal   Created      24s (x5 over 2m16s)    kubelet  Created container: wazuh-dashboard
  Normal   Started      24s (x5 over 2m16s)    kubelet  Started container wazuh-dashboard
  Normal   Pulled       24s (x4 over 2m9s)     kubelet  Container image "wazuh/wazuh-dashboard:4.9.0" already present on machine
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
  Type     Reason            Age    From               Message
  ----     ------            ----   ----               -------
  Warning  FailedScheduling  2m10s  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't match Pod's node affinity/selector, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  105s   default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't match Pod's node affinity/selector, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
