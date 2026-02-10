Deployment Report: core/b2b/core-services/n8n
Date: Tue Feb 10 09:31:04 UTC 2026
Trigger: push by santakloud
Namespace: n8n
---------------------------------------------------
>>> Pods Status:
NAME                  READY   STATUS             RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
n8n-d5848fcbd-jnqcq   0/1     CrashLoopBackOff   2 (28s ago)   60s   172.16.209.42   k8-node-20   <none>           <none>

>>> Services Status:
NAME   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
n8n    ClusterIP   10.101.63.45   <none>        5678/TCP   61s

>>> Ingress Status:
NAME          CLASS   HOSTS         ADDRESS         PORTS     AGE
n8n-ingress   nginx   n8n.ka0s.io   192.168.1.250   80, 443   60s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: n8n ===
--> Checking Pods status...
ERROR: The following pods are not ready:
n8n-d5848fcbd-jnqcq CrashLoopBackOff
--- Description for n8n-d5848fcbd-jnqcq ---
  kube-api-access-gp4vg:
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
  Type     Reason            Age                From               Message
  ----     ------            ----               ----               -------
  Warning  FailedScheduling  60s                default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  54s                default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
  Normal   Scheduled         52s                default-scheduler  Successfully assigned n8n/n8n-d5848fcbd-jnqcq to k8-node-20
  Normal   Pulled            32s (x3 over 51s)  kubelet            Container image "n8nio/n8n:latest" already present on machine
  Normal   Created           31s (x3 over 51s)  kubelet            Created container: n8n
  Normal   Started           31s (x3 over 51s)  kubelet            Started container n8n
  Warning  BackOff           11s (x4 over 42s)  kubelet            Back-off restarting failed container n8n in pod n8n-d5848fcbd-jnqcq_n8n(2b6f42d8-1fc1-42eb-a0b4-d506ff025dcd)
