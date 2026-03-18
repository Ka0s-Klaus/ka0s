Deployment Report: core/b2b/core-services/storage-system
Date: Wed Mar 18 13:48:32 UTC 2026
Trigger: push by ka0score
Namespace: storage-system
---------------------------------------------------
>>> Pods Status:
NAME                                      READY   STATUS              RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
nfs-client-provisioner-7db5ffb877-bvjlx   1/1     Running             0          32m   172.16.146.46   k8-node-30   <none>           <none>
nfs-validation-job-w65wg                  0/1     ContainerCreating   0          37m   <none>          k8-node-20   <none>           <none>

>>> Services Status:
No resources found in storage-system namespace.

>>> Ingress Status:
No resources found in storage-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: storage-system ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
nfs-validation-job-w65wg ContainerCreating
--- Description for nfs-validation-job-w65wg ---
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason       Age   From               Message
  ----     ------       ----  ----               -------
  Normal   Scheduled    37m   default-scheduler  Successfully assigned storage-system/nfs-validation-job-w65wg to k8-node-20
  Warning  FailedMount  37m   kubelet            MountVolume.SetUp failed for volume "pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba" : mount failed: exit status 32
Mounting command: mount
Mounting arguments: -t nfs 192.168.1.40:/mnt/k8s-storage/storage-system-nfs-validation-pvc-pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba /var/lib/kubelet/pods/bd0daeed-87ee-45b1-ae67-f0473d5bb0cc/volumes/kubernetes.io~nfs/pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba
Output: Created symlink /run/systemd/system/remote-fs.target.wants/rpc-statd.service → /usr/lib/systemd/system/rpc-statd.service.
mount.nfs: mounting 192.168.1.40:/mnt/k8s-storage/storage-system-nfs-validation-pvc-pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba failed, reason given by server: No such file or directory
  Warning  FailedMount  85s (x24 over 37m)  kubelet  MountVolume.SetUp failed for volume "pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba" : mount failed: exit status 32
Mounting command: mount
Mounting arguments: -t nfs 192.168.1.40:/mnt/k8s-storage/storage-system-nfs-validation-pvc-pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba /var/lib/kubelet/pods/bd0daeed-87ee-45b1-ae67-f0473d5bb0cc/volumes/kubernetes.io~nfs/pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba
Output: mount.nfs: mounting 192.168.1.40:/mnt/k8s-storage/storage-system-nfs-validation-pvc-pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba failed, reason given by server: No such file or directory
--- Logs for nfs-validation-job-w65wg (Current) ---
Error from server (BadRequest): container "validation" in pod "nfs-validation-job-w65wg" is waiting to start: ContainerCreating
Failed to fetch current logs
--> Checking Endpoints for Service storage-system...
ℹ️  Service 'storage-system' not found in namespace 'storage-system'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
