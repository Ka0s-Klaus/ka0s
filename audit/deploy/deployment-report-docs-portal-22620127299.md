Deployment Report: core/b2b/core-services/docs-portal
Date: Tue Mar  3 11:06:39 UTC 2026
Trigger: push by santakloud
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS         RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-648b979548-n2665   0/1     ErrImagePull   0          60s   172.16.209.30   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    61s

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   61s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-648b979548-n2665 ErrImagePull
--- Description for docs-portal-648b979548-n2665 ---
  kube-api-access-vwvqf:
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
  Type     Reason                           Age                From               Message
  ----     ------                           ----               ----               -------
  Normal   Scheduled                        60s                default-scheduler  Successfully assigned docs-portal/docs-portal-648b979548-n2665 to k8-node-20
  Normal   Pulling                          17s (x3 over 60s)  kubelet            Pulling image "ghcr.io/ka0s-klaus/ka0s-docs:latest"
  Warning  Failed                           17s (x3 over 60s)  kubelet            Failed to pull image "ghcr.io/ka0s-klaus/ka0s-docs:latest": failed to pull and unpack image "ghcr.io/ka0s-klaus/ka0s-docs:latest": failed to resolve image: failed to authorize: failed to fetch anonymous token: unexpected status from GET request to https://ghcr.io/token?scope=repository%3Aka0s-klaus%2Fka0s-docs%3Apull&service=ghcr.io: 403 Forbidden
  Warning  Failed                           17s (x3 over 60s)  kubelet            Error: ErrImagePull
  Warning  FailedToRetrieveImagePullSecret  3s (x7 over 61s)   kubelet            Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
  Normal   BackOff                          3s (x4 over 60s)   kubelet            Back-off pulling image "ghcr.io/ka0s-klaus/ka0s-docs:latest"
  Warning  Failed                           3s (x4 over 60s)   kubelet            Error: ImagePullBackOff
--- Logs for docs-portal-648b979548-n2665 (Current) ---
Error from server (BadRequest): container "docs-portal" in pod "docs-portal-648b979548-n2665" is waiting to start: image can't be pulled
Failed to fetch current logs
--> Checking Endpoints for Service docs-portal...
WARNING: Service docs-portal has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
