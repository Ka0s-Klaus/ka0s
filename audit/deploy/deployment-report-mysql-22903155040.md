Deployment Report: core/b2b/core-services/mysql
Date: Tue Mar 10 12:49:05 UTC 2026
Trigger: push by asantacana1970
Namespace: mysql
---------------------------------------------------
>>> Pods Status:
NAME                    READY   STATUS    RESTARTS   AGE   IP       NODE     NOMINATED NODE   READINESS GATES
mysql-5b8fb689c-9dw4n   0/1     Pending   0          57s   <none>   <none>   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
mysql   ClusterIP   None         <none>        3306/TCP   25m

>>> Ingress Status:
No resources found in mysql namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mysql ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
mysql-5b8fb689c-9dw4n Pending
--- Description for mysql-5b8fb689c-9dw4n ---
Volumes:
  mysql-persistent-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  mysql-pvc
    ReadOnly:   false
  kube-api-access-wzcpn:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-30
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  57s   default-scheduler  0/4 nodes are available: 1 node(s) had untolerated taint {restricted: true}, 3 node(s) didn't match Pod's node affinity/selector. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
--- Logs for mysql-5b8fb689c-9dw4n (Current) ---
--> Checking Endpoints for Service mysql...
WARNING: Service mysql has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
