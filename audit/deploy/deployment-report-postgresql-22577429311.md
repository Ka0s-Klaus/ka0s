Deployment Report: core/b2b/core-services/postgresql
Date: Mon Mar  2 13:11:44 UTC 2026
Trigger: push by santakloud
Namespace: postgresql
---------------------------------------------------
>>> Pods Status:
NAME                            READY   STATUS        RESTARTS      AGE    IP              NODE         NOMINATED NODE   READINESS GATES
postgres-validation-job-swrrc   1/1     Terminating   4 (59s ago)   2m1s   172.16.209.35   k8-node-20   <none>           <none>
postgresql-0                    1/1     Running       1 (21m ago)   22m    172.16.74.3     k8-manager   <none>           <none>

>>> Services Status:
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
postgresql   ClusterIP   10.104.163.236   <none>        5432/TCP   22m

>>> Ingress Status:
No resources found in postgresql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: postgresql ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
postgres-validation-job-swrrc Terminating
--- Description for postgres-validation-job-swrrc ---
Volumes:
  kube-api-access-m86lt:
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
  Type     Reason     Age                 From               Message
  ----     ------     ----                ----               -------
  Normal   Scheduled  2m                  default-scheduler  Successfully assigned postgresql/postgres-validation-job-swrrc to k8-node-20
  Warning  BackOff    20s (x7 over 108s)  kubelet            Back-off restarting failed container check-db in pod postgres-validation-job-swrrc_postgresql(165c7e61-38ba-43b8-ab1c-aee40c5be169)
  Normal   Pulled     5s (x5 over 2m)     kubelet            Container image "postgres:16-alpine" already present on machine
  Normal   Created    5s (x5 over 2m)     kubelet            Created container: check-db
  Normal   Started    5s (x5 over 2m)     kubelet            Started container check-db
  Normal   Killing    3s                  kubelet            Stopping container check-db
--- Logs for postgres-validation-job-swrrc (Current) ---
[pod/postgres-validation-job-swrrc/check-db] Waiting for PostgreSQL to be ready...
[pod/postgres-validation-job-swrrc/check-db] postgresql:5432 - accepting connections
[pod/postgres-validation-job-swrrc/check-db] Database is ready. Waiting 5s for stability...
--> Checking Endpoints for Service postgresql...
✅ Endpoints found: 172.16.74.3
=== Verification Successful (with possible warnings) ===
