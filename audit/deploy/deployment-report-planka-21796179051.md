Deployment Report: core/b2b/core-services/planka
Date: Sun Feb  8 10:13:21 UTC 2026
Trigger: push by santakloud
Namespace: planka
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS        RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
planka-66ddf7bf8c-vx2g8     0/1     Terminating   0          38m     172.16.146.52   k8-node-30   <none>           <none>
planka-69874d7bf9-nqqnt     0/1     Init:0/1      0          61s     <none>          k8-node-30   <none>           <none>
planka-6cb85b59d4-b6fqv     0/1     Init:1/2      0          2m34s   172.16.146.21   k8-node-30   <none>           <none>
planka-db-f6fdc6fcc-wsgs9   1/1     Running       0          27m     172.16.146.1    k8-node-30   <none>           <none>

>>> Services Status:
NAME        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
planka      LoadBalancer   10.97.249.37    192.168.1.244   80:30497/TCP   38m
planka-db   ClusterIP      10.105.250.18   <none>          5432/TCP       38m

>>> Ingress Status:
No resources found in planka namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: planka ===
--> Checking Pods status...
ERROR: The following pods are not ready:
planka-66ddf7bf8c-vx2g8 Terminating
planka-69874d7bf9-nqqnt Init:0/1
planka-6cb85b59d4-b6fqv Init:1/2
--- Description for planka-66ddf7bf8c-vx2g8 ---
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason                  Age                 From               Message
  ----     ------                  ----                ----               -------
  Normal   Scheduled               38m                 default-scheduler  Successfully assigned planka/planka-66ddf7bf8c-vx2g8 to k8-node-30
  Warning  FailedCreatePodSandBox  35m                 kubelet            Failed to create pod sandbox: rpc error: code = Unknown desc = failed to setup network for sandbox "74e4431ae15efda2328ef1951e592ebda45f440f4c7f34bff1d5c2113c90ef4f": plugin type="calico" failed (add): error getting ClusterInformation: Get "https://10.96.0.1:443/apis/crd.projectcalico.org/v1/clusterinformations/default": dial tcp 10.96.0.1:443: i/o timeout
  Warning  FailedCreatePodSandBox  33m                 kubelet            Failed to create pod sandbox: rpc error: code = Unknown desc = failed to setup network for sandbox "d4b259caaf56d341cbd60fbe0d79872df30204ff63dfa013a47330fe89d5733e": plugin type="calico" failed (add): error getting ClusterInformation: Get "https://10.96.0.1:443/apis/crd.projectcalico.org/v1/clusterinformations/default": dial tcp 10.96.0.1:443: i/o timeout
  Warning  FailedCreatePodSandBox  30m                 kubelet            Failed to create pod sandbox: rpc error: code = Unknown desc = failed to setup network for sandbox "15756149f6b125b5baa0162febc39f213467e91223a7f14f3ff6b72c7e4e6792": plugin type="calico" failed (add): error getting ClusterInformation: Get "https://10.96.0.1:443/apis/crd.projectcalico.org/v1/clusterinformations/default": dial tcp 10.96.0.1:443: i/o timeout
  Warning  FailedCreatePodSandBox  26m                 kubelet            Failed to create pod sandbox: rpc error: code = DeadlineExceeded desc = context deadline exceeded
  Warning  FailedCreatePodSandBox  24m (x11 over 26m)  kubelet            Failed to create pod sandbox: rpc error: code = Unknown desc = failed to reserve sandbox name "planka-66ddf7bf8c-vx2g8_planka_6e9d7e65-8910-49b6-96f4-12bc8bc40953_0": name "planka-66ddf7bf8c-vx2g8_planka_6e9d7e65-8910-49b6-96f4-12bc8bc40953_0" is reserved for "4325aa5be84fd36d62a1c7ce079dc181472d77cc489b8828ee4e111514c77530"
  Normal   Pulling                 22m                 kubelet            Pulling image "postgres:14-alpine"
  Normal   Pulled                  11m                 kubelet            Successfully pulled image "postgres:14-alpine" in 1m4.136s (11m14.474s including waiting). Image size: 108556583 bytes.
  Normal   Created                 11m                 kubelet            Created container: wait-for-db
  Normal   Started                 10m                 kubelet            Started container wait-for-db
  Normal   Pulling                 4m8s                kubelet            Pulling image "ghcr.io/plankanban/planka:master"
--- Description for planka-69874d7bf9-nqqnt ---
  PodScheduled                True 
Volumes:
  planka-data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  planka-data-pvc
    ReadOnly:   false
  kube-api-access-7w87b:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  62s   default-scheduler  Successfully assigned planka/planka-69874d7bf9-nqqnt to k8-node-30
--- Description for planka-6cb85b59d4-b6fqv ---
    ClaimName:  planka-data-pvc
    ReadOnly:   false
  kube-api-access-wr787:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  2m36s  default-scheduler  Successfully assigned planka/planka-6cb85b59d4-b6fqv to k8-node-30
  Normal  Pulled     2m10s  kubelet            Container image "postgres:14-alpine" already present on machine
  Normal  Created    112s   kubelet            Created container: wait-for-db
  Normal  Started    108s   kubelet            Started container wait-for-db
  Normal  Pulling    82s    kubelet            Pulling image "busybox:latest"
