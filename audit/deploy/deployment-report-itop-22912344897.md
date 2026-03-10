Deployment Report: core/b2b/core-services/itop
Date: Tue Mar 10 16:18:25 UTC 2026
Trigger: push by jh0ny2k2
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                    READY   STATUS     RESTARTS   AGE   IP       NODE         NOMINATED NODE   READINESS GATES
itop-567b4974bf-68989   0/1     Init:0/1   0          57s   <none>   k8-node-20   <none>           <none>

>>> Services Status:
NAME   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
itop   ClusterIP   10.103.185.4   <none>        80/TCP    32d

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS     AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80, 443   30d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
itop-567b4974bf-68989 Init:0/1
--- Description for itop-567b4974bf-68989 ---
    ReadOnly:   false
  itop-web-branding:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      itop-web-branding
    Optional:  false
  kube-api-access-bd8ng:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason       Age                From               Message
  ----     ------       ----               ----               -------
  Normal   Scheduled    58s                default-scheduler  Successfully assigned itop/itop-567b4974bf-68989 to k8-node-20
  Warning  FailedMount  26s (x7 over 58s)  kubelet            MountVolume.SetUp failed for volume "itop-web-branding" : configmap "itop-web-branding" not found
--- Logs for itop-567b4974bf-68989 (Current) ---
Error from server (BadRequest): container "init-itop-files" in pod "itop-567b4974bf-68989" is waiting to start: PodInitializing
Failed to fetch current logs
--> Checking Endpoints for Service itop...
WARNING: Service itop has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
