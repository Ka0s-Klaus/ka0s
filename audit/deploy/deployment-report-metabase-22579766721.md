Deployment Report: core/b2b/core-services/metabase
Date: Mon Mar  2 14:14:25 UTC 2026
Trigger: push by santakloud
Namespace: metabase
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS                       RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
metabase-57dfc75568-kgs7r   0/1     CreateContainerConfigError   0          60s   172.16.209.52   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
metabase   ClusterIP   10.104.238.93   <none>        80/TCP    60s

>>> Ingress Status:
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   61s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: metabase ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
metabase-57dfc75568-kgs7r CreateContainerConfigError
--- Description for metabase-57dfc75568-kgs7r ---
  PodScheduled                True 
Volumes:
  kube-api-access-ttngr:
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
  Normal   Scheduled  60s                default-scheduler  Successfully assigned metabase/metabase-57dfc75568-kgs7r to k8-node-20
  Normal   Pulling    60s                kubelet            Pulling image "metabase/metabase:v0.50.23"
  Normal   Pulled     50s                kubelet            Successfully pulled image "metabase/metabase:v0.50.23" in 10.521s (10.521s including waiting). Image size: 514169031 bytes.
  Warning  Failed     13s (x5 over 50s)  kubelet            Error: secret "metabase-db-secret" not found
  Normal   Pulled     13s (x4 over 49s)  kubelet            Container image "metabase/metabase:v0.50.23" already present on machine
--- Logs for metabase-57dfc75568-kgs7r (Current) ---
Error from server (BadRequest): container "metabase" in pod "metabase-57dfc75568-kgs7r" is waiting to start: CreateContainerConfigError
Failed to fetch current logs
--> Checking Endpoints for Service metabase...
WARNING: Service metabase has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
