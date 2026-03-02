Deployment Report: core/b2b/core-services/postgresql
Date: Mon Mar  2 13:05:51 UTC 2026
Trigger: push by santakloud
Namespace: postgresql
---------------------------------------------------
>>> Pods Status:
NAME                            READY   STATUS        RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
postgres-validation-job-lbnh5   1/1     Terminating   4 (52s ago)   2m    172.16.209.49   k8-node-20   <none>           <none>
postgresql-0                    1/1     Running       1 (15m ago)   16m   172.16.74.3     k8-manager   <none>           <none>

>>> Services Status:
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
postgresql   ClusterIP   10.104.163.236   <none>        5432/TCP   16m

>>> Ingress Status:
No resources found in postgresql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
postgres-validation-job-lbnh5 Terminating
--- Description for postgres-validation-job-lbnh5 ---
  kube-api-access-6lgqz:
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
  Type     Reason       Age                 From               Message
  ----     ------       ----                ----               -------
  Normal   Scheduled    2m1s                default-scheduler  Successfully assigned postgresql/postgres-validation-job-lbnh5 to k8-node-20
  Warning  FailedMount  2m                  kubelet            MountVolume.SetUp failed for volume "kube-api-access-6lgqz" : failed to sync configmap cache: timed out waiting for the condition
  Warning  BackOff      14s (x7 over 107s)  kubelet            Back-off restarting failed container check-db in pod postgres-validation-job-lbnh5_postgresql(731542ff-891a-4160-ae3f-82a29e8e6193)
  Normal   Pulled       3s (x5 over 119s)   kubelet            Container image "postgres:16-alpine" already present on machine
  Normal   Created      3s (x5 over 119s)   kubelet            Created container: check-db
  Normal   Started      3s (x5 over 119s)   kubelet            Started container check-db
  Normal   Killing      1s                  kubelet            Stopping container check-db
--- Logs for postgres-validation-job-lbnh5 (Current) ---
[pod/postgres-validation-job-lbnh5/check-db] Waiting for PostgreSQL to be ready...
[pod/postgres-validation-job-lbnh5/check-db] postgresql:5432 - accepting connections
[pod/postgres-validation-job-lbnh5/check-db] Database is ready. Waiting 5s for stability...
--> Checking Endpoints for Service postgresql...
✅ Endpoints found: 172.16.74.3
=== Verification Successful (with possible warnings) ===
