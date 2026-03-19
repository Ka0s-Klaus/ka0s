Deployment Report: core/b2b/core-services/openclaw
Date: Thu Mar 19 11:27:41 UTC 2026
Trigger: push by ka0score
Namespace: openclaw
---------------------------------------------------
>>> Pods Status:
NAME         READY   STATUS             RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
openclaw-0   0/1     CrashLoopBackOff   5 (2m27s ago)   7m48s   172.16.209.15   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)            AGE
openclaw   ClusterIP   10.101.236.82   <none>        80/TCP,18791/TCP   46h

>>> Ingress Status:
NAME               CLASS    HOSTS              ADDRESS         PORTS     AGE
openclaw-ingress   <none>   openclaw.ka0s.io   192.168.1.250   80, 443   46h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: openclaw ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
openclaw-0 CrashLoopBackOff
--- Description for openclaw-0 ---
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  7m48s                   default-scheduler  Successfully assigned openclaw/openclaw-0 to k8-node-20
  Normal   Pulled     7m46s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 764ms (764ms including waiting). Image size: 1005496535 bytes.
  Normal   Pulled     7m5s                    kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 858ms (858ms including waiting). Image size: 1005496535 bytes.
  Normal   Pulled     6m11s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 1.78s (1.78s including waiting). Image size: 1005496535 bytes.
  Normal   Pulled     5m3s                    kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 1.022s (1.022s including waiting). Image size: 1005496535 bytes.
  Warning  Unhealthy  4m27s (x2 over 7m7s)    kubelet            Liveness probe failed: dial tcp 172.16.209.15:18789: connect: connection refused
  Warning  BackOff    3m56s (x9 over 6m29s)   kubelet            Back-off restarting failed container openclaw in pod openclaw-0_openclaw(8c24becd-281c-41bb-b861-7dcf293808f3)
  Normal   Pulled     3m43s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 896ms (896ms including waiting). Image size: 1005496535 bytes.
  Normal   Killing    3m7s                    kubelet            Container openclaw failed liveness probe, will be restarted
  Normal   Created    3m5s (x6 over 7m46s)    kubelet            Created container: openclaw
  Normal   Pulling    3m5s (x6 over 7m47s)    kubelet            Pulling image "ghcr.io/openclaw/openclaw:latest"
  Normal   Pulled     3m5s                    kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 732ms (732ms including waiting). Image size: 1005496535 bytes.
  Normal   Started    3m4s (x6 over 7m46s)    kubelet            Started container openclaw
  Warning  Unhealthy  2m33s (x19 over 7m34s)  kubelet            Readiness probe failed: dial tcp 172.16.209.15:18789: connect: connection refused
--- Logs for openclaw-0 (Current) ---
[pod/openclaw-0/openclaw] 2026-03-19T11:25:14.703+00:00 Gateway failed to start: Error: EBUSY: resource busy or locked, rename '/home/node/.openclaw/openclaw.json.13.45381eae-4245-4bd9-b70b-f4b0adb75a6a.tmp' -> '/home/node/.openclaw/openclaw.json'
--> Checking Endpoints for Service openclaw...
WARNING: Service openclaw has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
