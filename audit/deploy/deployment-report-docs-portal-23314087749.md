Deployment Report: core/b2b/core-services/docs-portal
Date: Thu Mar 19 19:56:35 UTC 2026
Trigger: push by ka0score
Namespace: docs-portal
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
docs-portal-5998cbd6-bfcg5     1/1     Running   0          20h   172.16.146.11   k8-node-30   <none>           <none>
docs-portal-5c889f8fc9-tx57k   0/1     Pending   0          60s   <none>          <none>       <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
docs-portal   ClusterIP   10.104.15.70   <none>        80/TCP    16d

>>> Ingress Status:
NAME                  CLASS    HOSTS          ADDRESS         PORTS     AGE
docs-portal-ingress   <none>   docs.ka0s.io   192.168.1.250   80, 443   16d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: docs-portal ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
docs-portal-5c889f8fc9-tx57k Pending
--- Description for docs-portal-5c889f8fc9-tx57k ---
Volumes:
  repo-volume:
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:     
    SizeLimit:  <unset>
  kube-api-access-gphmx:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-30
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
                             restricted=true:NoSchedule
Events:
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  60s   default-scheduler  0/4 nodes are available: 2 node(s) didn't match Pod's node affinity/selector, 2 node(s) had untolerated taint {ka0s.io/no-new-pods: true}. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
--- Logs for docs-portal-5c889f8fc9-tx57k (Current) ---
--> Checking Endpoints for Service docs-portal...
✅ Endpoints found: 172.16.146.11
=== Verification Successful (with possible warnings) ===
