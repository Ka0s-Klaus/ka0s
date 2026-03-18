Deployment Report: core/b2b/core-services/postgresql
Date: Wed Mar 18 08:35:28 UTC 2026
Trigger: push by asantacana1970
Namespace: postgresql
---------------------------------------------------
>>> Pods Status:
NAME                            READY   STATUS    RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
postgres-validation-job-h27rt   0/1     Pending   0          2m59s   <none>          <none>       <none>           <none>
postgresql-0                    2/2     Running   0          32m     172.16.209.53   k8-node-20   <none>           <none>

>>> Services Status:
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)              AGE
postgresql   ClusterIP   10.104.163.236   <none>        5432/TCP,10050/TCP   15d

>>> Ingress Status:
No resources found in postgresql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
postgres-validation-job-h27rt Pending
--- Description for postgres-validation-job-h27rt ---
  Ready                       False 
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-lsg26:
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
  Type     Reason            Age                    From               Message
  ----     ------            ----                   ----               -------
  Warning  FailedScheduling  4m9s                   default-scheduler  0/4 nodes are available: 1 node(s) had untolerated taint {restricted: true}, 1 node(s) were unschedulable, 2 Too many pods. preemption: 0/4 nodes are available: 2 No preemption victims found for incoming pod, 2 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  2m32s (x2 over 3m52s)  default-scheduler  0/4 nodes are available: 1 node(s) had untolerated taint {restricted: true}, 1 node(s) were unschedulable, 2 Too many pods. preemption: 0/4 nodes are available: 2 No preemption victims found for incoming pod, 2 Preemption is not helpful for scheduling.
  Normal   Scheduled         10s                    default-scheduler  Successfully assigned postgresql/postgres-validation-job-h27rt to k8-node-20
--- Logs for postgres-validation-job-h27rt (Current) ---
Error from server (BadRequest): container "check-db" in pod "postgres-validation-job-h27rt" is waiting to start: ContainerCreating
Failed to fetch current logs
--> Checking Endpoints for Service postgresql...
✅ Endpoints found: 172.16.209.53
=== Verification Successful (with possible warnings) ===
