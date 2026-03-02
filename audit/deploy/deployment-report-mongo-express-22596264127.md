Deployment Report: core/b2b/core-services/mongo-express
Date: Mon Mar  2 21:23:22 UTC 2026
Trigger: push by santakloud
Namespace: mongo
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS             RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
mongo-0                          1/1     Running            0          45m   172.16.209.34   k8-node-20   <none>           <none>
mongo-express-6486f7f4fd-mxmcz   0/1     ImagePullBackOff   0          16m   172.16.209.40   k8-node-20   <none>           <none>
mongo-express-66f49f976b-2jfr5   0/1     ImagePullBackOff   0          61s   172.16.209.12   k8-node-20   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
mongo           ClusterIP   None             <none>        27017/TCP   53d
mongo-express   ClusterIP   10.111.174.173   <none>        8081/TCP    23m

>>> Ingress Status:
NAME                    CLASS   HOSTS                 ADDRESS         PORTS     AGE
mongo-express-ingress   nginx   mongo-admin.ka0s.io   192.168.1.250   80, 443   23m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mongo ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
mongo-express-6486f7f4fd-mxmcz ImagePullBackOff
mongo-express-66f49f976b-2jfr5 ImagePullBackOff
--- Description for mongo-express-6486f7f4fd-mxmcz ---
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                 From               Message
  ----     ------     ----                ----               -------
  Normal   Scheduled  16m                 default-scheduler  Successfully assigned mongo/mongo-express-6486f7f4fd-mxmcz to k8-node-20
  Warning  Failed     16m                 kubelet            Failed to pull image "mongo-express:1.0.2": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/mongo-express:1.0.2": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/87/870141b735e7d896bde590765c341cdc64fb6d3284b5f6a81f70ec936e4d0b83/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210641Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=645c0b8ad751c85ae6dd030dfb69ca747f473f71d6fcb71dd9494598c4c7ccc6": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     15m                 kubelet            Failed to pull image "mongo-express:1.0.2": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/mongo-express:1.0.2": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/87/870141b735e7d896bde590765c341cdc64fb6d3284b5f6a81f70ec936e4d0b83/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210727Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=62816962eea1c3778102d0a552d09e30af9278d216f5dd11f0e3b9deeba0418f": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     14m                 kubelet            Failed to pull image "mongo-express:1.0.2": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/mongo-express:1.0.2": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/87/870141b735e7d896bde590765c341cdc64fb6d3284b5f6a81f70ec936e4d0b83/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210826Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=ad14b05094d82f83a307705295ce14ebf8ec8e5aa1a80df7366e1d301453521c": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     13m                 kubelet            Failed to pull image "mongo-express:1.0.2": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/mongo-express:1.0.2": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/87/870141b735e7d896bde590765c341cdc64fb6d3284b5f6a81f70ec936e4d0b83/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210948Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=66b0a9946e70c92398fee5899791a1bff00b3659569581c12b1cef7743dcf463": dial tcp 172.64.66.1:443: i/o timeout
  Normal   Pulling    11m (x5 over 16m)   kubelet            Pulling image "mongo-express:1.0.2"
  Warning  Failed     11m (x5 over 16m)   kubelet            Error: ErrImagePull
  Warning  Failed     11m                 kubelet            Failed to pull image "mongo-express:1.0.2": failed to pull and unpack image "docker.io/library/mongo-express:1.0.2": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/87/870141b735e7d896bde590765c341cdc64fb6d3284b5f6a81f70ec936e4d0b83/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T211147Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=0cd38d0a7bb60d78239a3167084845070c1d4dd04d87daac0523f710fda191ed": dial tcp 172.64.66.1:443: i/o timeout
  Normal   BackOff    93s (x47 over 16m)  kubelet            Back-off pulling image "mongo-express:1.0.2"
  Warning  Failed     63s (x49 over 16m)  kubelet            Error: ImagePullBackOff
--- Logs for mongo-express-6486f7f4fd-mxmcz (Current) ---
Error from server (BadRequest): container "mongo-express" in pod "mongo-express-6486f7f4fd-mxmcz" is waiting to start: trying and failing to pull image
Failed to fetch current logs
--- Description for mongo-express-66f49f976b-2jfr5 ---
Volumes:
  kube-api-access-72t9q:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  61s                default-scheduler  Successfully assigned mongo/mongo-express-66f49f976b-2jfr5 to k8-node-20
  Warning  Failed     28s                kubelet            Failed to pull image "mongo-express:latest": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/mongo-express:latest": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/87/870141b735e7d896bde590765c341cdc64fb6d3284b5f6a81f70ec936e4d0b83/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T212225Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=cbe2ca345a6056a7d0cc37498f403920d53da898accf784f7e96ecb1579e9249": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     28s                kubelet            Error: ErrImagePull
  Normal   BackOff    28s                kubelet            Back-off pulling image "mongo-express:latest"
  Warning  Failed     28s                kubelet            Error: ImagePullBackOff
  Normal   Pulling    13s (x2 over 60s)  kubelet            Pulling image "mongo-express:latest"
--- Logs for mongo-express-66f49f976b-2jfr5 (Current) ---
Error from server (BadRequest): container "mongo-express" in pod "mongo-express-66f49f976b-2jfr5" is waiting to start: trying and failing to pull image
Failed to fetch current logs
--> Checking Endpoints for Service mongo-express...
WARNING: Service mongo-express has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
