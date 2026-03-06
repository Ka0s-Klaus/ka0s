Deployment Report: core/b2b/core-services/metrics-server
Date: Fri Mar  6 09:51:08 UTC 2026
Trigger: push by ka0score
Namespace: kube-system
---------------------------------------------------
>>> Pods Status:
NAME                                 READY   STATUS        RESTARTS         AGE   IP              NODE         NOMINATED NODE   READINESS GATES
coredns-668d6bf9bc-blvkl             1/1     Running       4 (4d1h ago)     77d   172.16.74.16    k8-manager   <none>           <none>
coredns-668d6bf9bc-l86hn             1/1     Running       4 (4d1h ago)     77d   172.16.74.59    k8-manager   <none>           <none>
etcd-k8-manager                      1/1     Running       37 (4d1h ago)    77d   192.168.1.10    k8-manager   <none>           <none>
kube-apiserver-k8-manager            1/1     Running       55 (4d1h ago)    77d   192.168.1.10    k8-manager   <none>           <none>
kube-controller-manager-k8-manager   1/1     Running       96 (4d1h ago)    77d   192.168.1.10    k8-manager   <none>           <none>
kube-proxy-kblfg                     1/1     Running       13 (3d22h ago)   29d   192.168.1.40    k8-node-40   <none>           <none>
kube-proxy-p9gdf                     1/1     Running       9 (18d ago)      57d   192.168.1.30    k8-node-30   <none>           <none>
kube-proxy-t4sv5                     1/1     Running       23 (8d ago)      77d   192.168.1.20    k8-node-20   <none>           <none>
kube-proxy-zwsjt                     1/1     Running       4 (4d1h ago)     77d   192.168.1.10    k8-manager   <none>           <none>
kube-scheduler-k8-manager            1/1     Running       97 (4d1h ago)    77d   192.168.1.10    k8-manager   <none>           <none>
metrics-server-8f4f477fc-h86mb       1/1     Running       0                23s   172.16.209.38   k8-node-20   <none>           <none>
metrics-server-b9bcd6d7c-2t4mz       1/1     Terminating   16 (4d1h ago)    24d   172.16.74.47    k8-manager   <none>           <none>

>>> Services Status:
NAME             TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE
kube-dns         ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP,9153/TCP   77d
metrics-server   ClusterIP   10.106.204.195   <none>        443/TCP                  44d

>>> Ingress Status:
No resources found in kube-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: kube-system ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
metrics-server-b9bcd6d7c-2t4mz Terminating
--- Description for metrics-server-b9bcd6d7c-2t4mz ---
  PodScheduled                True 
Volumes:
  tmp-dir:
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:     
    SizeLimit:  <unset>
  kube-api-access-zwgb6:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/os=linux
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  0s    kubelet  Stopping container metrics-server
--- Logs for metrics-server-b9bcd6d7c-2t4mz (Current) ---
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.305583       1 handler.go:275] Adding GroupVersion metrics.k8s.io v1beta1 to ResourceManager
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.420410       1 configmap_cafile_content.go:202] "Starting controller" name="client-ca::kube-system::extension-apiserver-authentication::client-ca-file"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.420446       1 shared_informer.go:311] Waiting for caches to sync for client-ca::kube-system::extension-apiserver-authentication::client-ca-file
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.420907       1 configmap_cafile_content.go:202] "Starting controller" name="client-ca::kube-system::extension-apiserver-authentication::requestheader-client-ca-file"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.420928       1 shared_informer.go:311] Waiting for caches to sync for client-ca::kube-system::extension-apiserver-authentication::requestheader-client-ca-file
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.421304       1 requestheader_controller.go:169] Starting RequestHeaderAuthRequestController
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.421717       1 shared_informer.go:311] Waiting for caches to sync for RequestHeaderAuthRequestController
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.422177       1 dynamic_serving_content.go:132] "Starting controller" name="serving-cert::/tmp/apiserver.crt::/tmp/apiserver.key"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.425306       1 secure_serving.go:213] Serving securely on [::]:4443
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.428002       1 tlsconfig.go:240] "Starting DynamicServingCertificateController"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.520587       1 shared_informer.go:318] Caches are synced for client-ca::kube-system::extension-apiserver-authentication::client-ca-file
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.521285       1 shared_informer.go:318] Caches are synced for client-ca::kube-system::extension-apiserver-authentication::requestheader-client-ca-file
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0302 08:03:46.522883       1 shared_informer.go:318] Caches are synced for RequestHeaderAuthRequestController
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 08:03:56.413475       1 scraper.go:147] "Failed to scrape node, timeout to access kubelet" err="Get \"https://192.168.1.20:10250/metrics/resource\": context deadline exceeded" node="k8-node-20" timeout="10s"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 08:03:56.425783       1 scraper.go:147] "Failed to scrape node, timeout to access kubelet" err="Get \"https://192.168.1.30:10250/metrics/resource\": context deadline exceeded" node="k8-node-30" timeout="10s"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 08:03:56.435208       1 scraper.go:147] "Failed to scrape node, timeout to access kubelet" err="Get \"https://192.168.1.40:10250/metrics/resource\": context deadline exceeded" node="k8-node-40" timeout="10s"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:21:01.441439       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: connection refused" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:21:26.418961       1 scraper.go:147] "Failed to scrape node, timeout to access kubelet" err="Get \"https://192.168.1.40:10250/metrics/resource\": context deadline exceeded" node="k8-node-40" timeout="10s"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:21:35.552080       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: no route to host" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:21:48.544128       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: no route to host" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:22:02.241331       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: no route to host" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:22:16.411135       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: connection refused" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:22:31.412454       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: connection refused" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:22:46.408287       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: connection refused" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:23:01.411039       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: connection refused" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:23:16.424039       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: connection refused" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:23:31.420367       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: connection refused" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:23:46.438674       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: connection refused" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0302 11:24:01.415945       1 scraper.go:149] "Failed to scrape node" err="Get \"https://192.168.1.40:10250/metrics/resource\": dial tcp 192.168.1.40:10250: connect: connection refused" node="k8-node-40"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] E0303 11:41:56.427512       1 scraper.go:147] "Failed to scrape node, timeout to access kubelet" err="Get \"https://192.168.1.20:10250/metrics/resource\": context deadline exceeded" node="k8-node-20" timeout="10s"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0306 09:51:08.084549       1 object_count_tracker.go:151] "StorageObjectCountTracker pruner is exiting"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0306 09:51:08.084568       1 requestheader_controller.go:183] Shutting down RequestHeaderAuthRequestController
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0306 09:51:08.084589       1 configmap_cafile_content.go:223] "Shutting down controller" name="client-ca::kube-system::extension-apiserver-authentication::client-ca-file"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0306 09:51:08.084608       1 configmap_cafile_content.go:223] "Shutting down controller" name="client-ca::kube-system::extension-apiserver-authentication::requestheader-client-ca-file"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0306 09:51:08.084715       1 dynamic_serving_content.go:146] "Shutting down controller" name="serving-cert::/tmp/apiserver.crt::/tmp/apiserver.key"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0306 09:51:08.084754       1 tlsconfig.go:255] "Shutting down DynamicServingCertificateController"
[pod/metrics-server-b9bcd6d7c-2t4mz/metrics-server] I0306 09:51:08.086377       1 secure_serving.go:258] Stopped listening on [::]:4443
--> Checking Endpoints for Service metrics-server...
✅ Endpoints found: 172.16.209.38
=== Verification Successful (with possible warnings) ===
