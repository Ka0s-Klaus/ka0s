Deployment Report: core/b2b/core-services/cluster-maintenance
Date: Tue Mar 31 07:26:21 UTC 2026
Trigger: push by ka0score
Namespace: kube-system
---------------------------------------------------
>>> Pods Status:
NAME                                 READY   STATUS    RESTARTS        AGE    IP              NODE         NOMINATED NODE   READINESS GATES
coredns-668d6bf9bc-blvkl             1/1     Running   11 (23h ago)    102d   172.16.74.60    k8-manager   <none>           <none>
coredns-668d6bf9bc-l86hn             1/1     Running   10 (23h ago)    102d   172.16.74.19    k8-manager   <none>           <none>
etcd-k8-manager                      1/1     Running   43 (23h ago)    102d   192.168.1.10    k8-manager   <none>           <none>
intel-gpu-plugin-6t4c4               1/1     Running   7 (23h ago)     19d    172.16.74.46    k8-manager   <none>           <none>
intel-gpu-plugin-dzswv               1/1     Running   1 (11d ago)     19d    172.16.64.165   k8-node-40   <none>           <none>
intel-gpu-plugin-rhhjl               1/1     Running   8 (8d ago)      19d    172.16.209.14   k8-node-20   <none>           <none>
kube-apiserver-k8-manager            1/1     Running   61 (23h ago)    102d   192.168.1.10    k8-manager   <none>           <none>
kube-controller-manager-k8-manager   1/1     Running   132 (23h ago)   102d   192.168.1.10    k8-manager   <none>           <none>
kube-proxy-kblfg                     1/1     Running   15 (11d ago)    54d    192.168.1.40    k8-node-40   <none>           <none>
kube-proxy-p9gdf                     1/1     Running   12 (8d ago)     82d    192.168.1.30    k8-node-30   <none>           <none>
kube-proxy-t4sv5                     1/1     Running   32 (8d ago)     102d   192.168.1.20    k8-node-20   <none>           <none>
kube-proxy-zwsjt                     1/1     Running   10 (23h ago)    102d   192.168.1.10    k8-manager   <none>           <none>
kube-scheduler-k8-manager            1/1     Running   132 (23h ago)   102d   192.168.1.10    k8-manager   <none>           <none>
metrics-server-8f4f477fc-246x9       1/1     Running   27 (23h ago)    13d    172.16.74.27    k8-manager   <none>           <none>

>>> Services Status:
NAME             TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE
kube-dns         ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP,9153/TCP   102d
metrics-server   ClusterIP   10.106.204.195   <none>        443/TCP                  68d

>>> Ingress Status:
No resources found in kube-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: kube-system ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service cluster-maintenance...
ℹ️  Service 'cluster-maintenance' not found in namespace 'kube-system'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
