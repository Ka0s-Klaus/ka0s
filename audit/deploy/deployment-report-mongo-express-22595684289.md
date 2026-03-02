Deployment Report: core/b2b/core-services/mongo-express
Date: Mon Mar  2 21:07:39 UTC 2026
Trigger: push by santakloud
Namespace: mongo
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS             RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
mongo-0                          1/1     Running            0          29m     172.16.209.34   k8-node-20   <none>           <none>
mongo-express-6486f7f4fd-mxmcz   0/1     ImagePullBackOff   0          60s     172.16.209.40   k8-node-20   <none>           <none>
mongo-express-6c9756d677-ww94r   0/1     ImagePullBackOff   0          7m27s   172.16.74.25    k8-manager   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
mongo           ClusterIP   None             <none>        27017/TCP   53d
mongo-express   ClusterIP   10.111.174.173   <none>        8081/TCP    7m28s

>>> Ingress Status:
NAME                    CLASS   HOSTS                 ADDRESS         PORTS     AGE
mongo-express-ingress   nginx   mongo-admin.ka0s.io   192.168.1.250   80, 443   7m27s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mongo ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
mongo-express-6486f7f4fd-mxmcz ImagePullBackOff
mongo-express-6c9756d677-ww94r ImagePullBackOff
--- Description for mongo-express-6486f7f4fd-mxmcz ---
Volumes:
  kube-api-access-5gwfq:
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
  Normal   Scheduled  60s                default-scheduler  Successfully assigned mongo/mongo-express-6486f7f4fd-mxmcz to k8-node-20
  Warning  Failed     29s                kubelet            Failed to pull image "mongo-express:1.0.2": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/mongo-express:1.0.2": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/87/870141b735e7d896bde590765c341cdc64fb6d3284b5f6a81f70ec936e4d0b83/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210641Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=645c0b8ad751c85ae6dd030dfb69ca747f473f71d6fcb71dd9494598c4c7ccc6": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     29s                kubelet            Error: ErrImagePull
  Normal   BackOff    29s                kubelet            Back-off pulling image "mongo-express:1.0.2"
  Warning  Failed     29s                kubelet            Error: ImagePullBackOff
  Normal   Pulling    15s (x2 over 61s)  kubelet            Pulling image "mongo-express:1.0.2"
--- Logs for mongo-express-6486f7f4fd-mxmcz (Current) ---
Error from server (BadRequest): container "mongo-express" in pod "mongo-express-6486f7f4fd-mxmcz" is waiting to start: trying and failing to pull image
Failed to fetch current logs
--- Description for mongo-express-6c9756d677-ww94r ---
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  7m28s                  default-scheduler  Successfully assigned mongo/mongo-express-6c9756d677-ww94r to k8-manager
  Warning  Failed     6m55s                  kubelet            Failed to pull image "mongo-express:1.0.2-20": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/mongo-express:1.0.2-20": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/c6/c6389604d11ffa3b080a5dc390ee48f080dc3d6ba840f4ee700d55db6026460d/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210014Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=d9689c4c4bfd413c54d03f627ea1cb8b4687943c9bc138589d04fccb225b58ed": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     6m8s                   kubelet            Failed to pull image "mongo-express:1.0.2-20": failed to pull and unpack image "docker.io/library/mongo-express:1.0.2-20": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/c6/c6389604d11ffa3b080a5dc390ee48f080dc3d6ba840f4ee700d55db6026460d/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210102Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=eb0850ef71dfde90067cd812b1edb45e22e0716d7a2b242badc15e6829f95a47": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     5m14s                  kubelet            Failed to pull image "mongo-express:1.0.2-20": failed to pull and unpack image "docker.io/library/mongo-express:1.0.2-20": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/c6/c6389604d11ffa3b080a5dc390ee48f080dc3d6ba840f4ee700d55db6026460d/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210156Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=da05511ca1d837aafa363c53fc235a9f5b28bf23205c1dace7f1ace9ac41e9ae": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     3m49s                  kubelet            Failed to pull image "mongo-express:1.0.2-20": failed to pull and unpack image "docker.io/library/mongo-express:1.0.2-20": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/c6/c6389604d11ffa3b080a5dc390ee48f080dc3d6ba840f4ee700d55db6026460d/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210321Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=ad18b733ac5df6d94a87d787c221dd20e8e2674548413237afb6f9816e22772d": dial tcp 172.64.66.1:443: i/o timeout
  Normal   Pulling    2m25s (x5 over 7m28s)  kubelet            Pulling image "mongo-express:1.0.2-20"
  Warning  Failed     113s (x5 over 6m55s)   kubelet            Error: ErrImagePull
  Warning  Failed     113s                   kubelet            Failed to pull image "mongo-express:1.0.2-20": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/mongo-express:1.0.2-20": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/c6/c6389604d11ffa3b080a5dc390ee48f080dc3d6ba840f4ee700d55db6026460d/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210517Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=c73308b215d61a23654e8f3b25d4543975dd84746b615a344df58b81ed620c3c": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     49s (x16 over 6m55s)   kubelet            Error: ImagePullBackOff
  Normal   BackOff    7s (x19 over 6m55s)    kubelet            Back-off pulling image "mongo-express:1.0.2-20"
--- Logs for mongo-express-6c9756d677-ww94r (Current) ---
Error from server (BadRequest): container "mongo-express" in pod "mongo-express-6c9756d677-ww94r" is waiting to start: trying and failing to pull image
Failed to fetch current logs
--> Checking Endpoints for Service mongo-express...
WARNING: Service mongo-express has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
