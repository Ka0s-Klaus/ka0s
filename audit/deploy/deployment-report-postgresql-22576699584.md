Deployment Report: core/b2b/core-services/postgresql
Date: Mon Mar  2 12:48:56 UTC 2026
Trigger: push by santakloud
Namespace: postgresql
---------------------------------------------------
>>> Pods Status:
NAME                            READY   STATUS              RESTARTS   AGE   IP       NODE         NOMINATED NODE   READINESS GATES
postgres-validation-job-nnnz4   0/1     ContainerCreating   0          0s    <none>   k8-node-20   <none>           <none>
postgresql-0                    0/1     Pending             0          0s    <none>   <none>       <none>           <none>

>>> Services Status:
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
postgresql   ClusterIP   10.104.163.236   <none>        5432/TCP   0s

>>> Ingress Status:
No resources found in postgresql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
postgres-validation-job-nnnz4 ContainerCreating
postgresql-0 Pending
--- Description for postgres-validation-job-nnnz4 ---
  Initialized                 True 
  Ready                       False 
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-8dlmm:
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
  Normal  Scheduled  0s    default-scheduler  Successfully assigned postgresql/postgres-validation-job-nnnz4 to k8-node-20
  Normal  Pulling    1s    kubelet            Pulling image "postgres:16-alpine"
--- Logs for postgres-validation-job-nnnz4 (Current) ---
Error from server (BadRequest): container "check-db" in pod "postgres-validation-job-nnnz4" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Description for postgresql-0 ---
Volumes:
  postgres-data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  postgres-data-postgresql-0
    ReadOnly:   false
  kube-api-access-f4wvz:
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
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  1s    default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
  Normal   Scheduled         0s    default-scheduler  Successfully assigned postgresql/postgresql-0 to k8-manager
--- Logs for postgresql-0 (Current) ---
Error from server (BadRequest): container "postgresql" in pod "postgresql-0" is waiting to start: ContainerCreating
Failed to fetch current logs
--> Checking Endpoints for Service postgresql...
WARNING: Service postgresql has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
