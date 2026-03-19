Deployment Report: core/b2b/core-services/storage-system
Date: Thu Mar 19 09:48:38 UTC 2026
Trigger: push by ka0score
Namespace: storage-system
---------------------------------------------------
>>> Pods Status:
NAME                                      READY   STATUS              RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
nfs-client-provisioner-7d57d5f4ff-dlhvh   1/1     Terminating         0          10m   172.16.209.38   k8-node-20   <none>           <none>
nfs-validation-job-nwm6k                  0/1     ContainerCreating   0          10m   <none>          k8-node-20   <none>           <none>

>>> Services Status:
No resources found in storage-system namespace.

>>> Ingress Status:
No resources found in storage-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: storage-system ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
nfs-client-provisioner-7d57d5f4ff-dlhvh Terminating
nfs-validation-job-nwm6k ContainerCreating
--- Description for nfs-client-provisioner-7d57d5f4ff-dlhvh ---
    Path:      /mnt/k8s-storage
    ReadOnly:  false
  kube-api-access-8c2kj:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason        Age    From               Message
  ----     ------        ----   ----               -------
  Normal   Scheduled     10m    default-scheduler  Successfully assigned storage-system/nfs-client-provisioner-7d57d5f4ff-dlhvh to k8-node-20
  Normal   Pulled        10m    kubelet            Container image "registry.k8s.io/sig-storage/nfs-subdir-external-provisioner:v4.0.2" already present on machine
  Normal   Created       10m    kubelet            Created container: nfs-client-provisioner
  Normal   Started       10m    kubelet            Started container nfs-client-provisioner
  Warning  NodeNotReady  4m24s  node-controller    Node is not ready
--- Logs for nfs-client-provisioner-7d57d5f4ff-dlhvh (Current) ---
Error from server: Get "https://192.168.1.20:10250/containerLogs/storage-system/nfs-client-provisioner-7d57d5f4ff-dlhvh/nfs-client-provisioner?tailLines=50": dial tcp 192.168.1.20:10250: connect: no route to host
Failed to fetch current logs
--- Description for nfs-validation-job-nwm6k ---
    ClaimName:  nfs-validation-pvc
    ReadOnly:   false
  kube-api-access-blhtr:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason       Age                   From               Message
  ----     ------       ----                  ----               -------
  Normal   Scheduled    10m                   default-scheduler  Successfully assigned storage-system/nfs-validation-job-nwm6k to k8-node-20
  Warning  FailedMount  6m34s (x10 over 10m)  kubelet            MountVolume.SetUp failed for volume "pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba" : mount failed: exit status 32
Mounting command: mount
Mounting arguments: -t nfs 192.168.1.40:/mnt/k8s-storage/storage-system-nfs-validation-pvc-pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba /var/lib/kubelet/pods/974beb12-d41b-47b5-bd9e-cf413d5a1302/volumes/kubernetes.io~nfs/pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba
Output: mount.nfs: mounting 192.168.1.40:/mnt/k8s-storage/storage-system-nfs-validation-pvc-pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba failed, reason given by server: No such file or directory
--- Logs for nfs-validation-job-nwm6k (Current) ---
Error from server: Get "https://192.168.1.20:10250/containerLogs/storage-system/nfs-validation-job-nwm6k/validation?tailLines=50": dial tcp 192.168.1.20:10250: connect: no route to host
Failed to fetch current logs
--> Checking Endpoints for Service storage-system...
ℹ️  Service 'storage-system' not found in namespace 'storage-system'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
