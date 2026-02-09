Deployment Report: core/b2b/core-services/metrics-server
Date: Mon Feb  9 12:57:11 UTC 2026
Trigger: push by santakloud
Namespace: kube-system
---------------------------------------------------
>>> Pods Status:
NAME                                 READY   STATUS    RESTARTS       AGE     IP             NODE         NOMINATED NODE   READINESS GATES
coredns-668d6bf9bc-blvkl             1/1     Running   3 (27h ago)    52d     172.16.74.54   k8-manager   <none>           <none>
coredns-668d6bf9bc-l86hn             1/1     Running   3 (27h ago)    52d     172.16.74.50   k8-manager   <none>           <none>
etcd-k8-manager                      1/1     Running   36 (27h ago)   52d     192.168.1.10   k8-manager   <none>           <none>
kube-apiserver-k8-manager            1/1     Running   50 (27h ago)   52d     192.168.1.10   k8-manager   <none>           <none>
kube-controller-manager-k8-manager   1/1     Running   63 (38m ago)   52d     192.168.1.10   k8-manager   <none>           <none>
kube-proxy-kblfg                     1/1     Running   2 (27h ago)    4d19h   192.168.1.40   k8-node-40   <none>           <none>
kube-proxy-p9gdf                     1/1     Running   3 (27h ago)    32d     192.168.1.30   k8-node-30   <none>           <none>
kube-proxy-t4sv5                     1/1     Running   5 (27h ago)    52d     192.168.1.20   k8-node-20   <none>           <none>
kube-proxy-zwsjt                     1/1     Running   3 (27h ago)    52d     192.168.1.10   k8-manager   <none>           <none>
kube-scheduler-k8-manager            1/1     Running   64             52d     192.168.1.10   k8-manager   <none>           <none>
metrics-server-b9bcd6d7c-2t4mz       1/1     Running   0              2m25s   172.16.74.63   k8-manager   <none>           <none>

>>> Services Status:
NAME             TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE
kube-dns         ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP,9153/TCP   52d
metrics-server   ClusterIP   10.106.204.195   <none>        443/TCP                  19d

>>> Ingress Status:
No resources found in kube-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: kube-system ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service metrics-server...
✅ Endpoints found: 172.16.74.63
=== Verification Successful ===
