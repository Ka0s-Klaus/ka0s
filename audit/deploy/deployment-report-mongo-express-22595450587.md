Deployment Report: core/b2b/core-services/mongo-express
Date: Mon Mar  2 21:01:12 UTC 2026
Trigger: push by santakloud
Namespace: mongo
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS             RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
mongo-0                          1/1     Running            0          23m   172.16.209.34   k8-node-20   <none>           <none>
mongo-express-6c9756d677-ww94r   0/1     ImagePullBackOff   0          60s   172.16.74.25    k8-manager   <none>           <none>

>>> Services Status:
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
mongo           ClusterIP   None             <none>        27017/TCP   53d
mongo-express   ClusterIP   10.111.174.173   <none>        8081/TCP    61s

>>> Ingress Status:
NAME                    CLASS   HOSTS                 ADDRESS         PORTS     AGE
mongo-express-ingress   nginx   mongo-admin.ka0s.io   192.168.1.250   80, 443   60s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mongo ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
mongo-express-6c9756d677-ww94r ImagePullBackOff
--- Description for mongo-express-6c9756d677-ww94r ---
Volumes:
  kube-api-access-fm4sj:
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
  Normal   Scheduled  60s                default-scheduler  Successfully assigned mongo/mongo-express-6c9756d677-ww94r to k8-manager
  Warning  Failed     27s                kubelet            Failed to pull image "mongo-express:1.0.2-20": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/mongo-express:1.0.2-20": failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com/registry-v2/docker/registry/v2/blobs/sha256/c6/c6389604d11ffa3b080a5dc390ee48f080dc3d6ba840f4ee700d55db6026460d/data?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f1baa2dd9b876aeb89efebbfc9e5d5f4%2F20260302%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260302T210014Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=d9689c4c4bfd413c54d03f627ea1cb8b4687943c9bc138589d04fccb225b58ed": dial tcp 172.64.66.1:443: i/o timeout
  Warning  Failed     27s                kubelet            Error: ErrImagePull
  Normal   BackOff    27s                kubelet            Back-off pulling image "mongo-express:1.0.2-20"
  Warning  Failed     27s                kubelet            Error: ImagePullBackOff
  Normal   Pulling    12s (x2 over 60s)  kubelet            Pulling image "mongo-express:1.0.2-20"
--- Logs for mongo-express-6c9756d677-ww94r (Current) ---
Error from server (BadRequest): container "mongo-express" in pod "mongo-express-6c9756d677-ww94r" is waiting to start: trying and failing to pull image
Failed to fetch current logs
--> Checking Endpoints for Service mongo-express...
WARNING: Service mongo-express has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
