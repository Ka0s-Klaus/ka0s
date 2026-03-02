Deployment Report: core/b2b/core-services/storage-system
Date: Mon Mar  2 12:37:10 UTC 2026
Trigger: workflow_dispatch by santakloud
Namespace: storage-system
---------------------------------------------------
>>> Pods Status:
NAME                                      READY   STATUS      RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
nfs-client-provisioner-7bc7b6d5dd-t9ntd   1/1     Running     0          30m   172.16.209.1   k8-node-20   <none>           <none>
nfs-validation-job-5vxcp                  0/1     Completed   0          5s    172.16.74.49   k8-manager   <none>           <none>

>>> Services Status:
No resources found in storage-system namespace.

>>> Ingress Status:
No resources found in storage-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: storage-system ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service storage-system...
ℹ️  Service 'storage-system' not found in namespace 'storage-system'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
