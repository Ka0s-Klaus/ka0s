Deployment Report: core/b2b/core-services/openclaw
Date: Thu Mar 19 11:17:30 UTC 2026
Trigger: push by ka0score
Namespace: openclaw
---------------------------------------------------
>>> Pods Status:
NAME         READY   STATUS   RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
openclaw-0   0/1     Error    4 (85s ago)   4m39s   172.16.209.50   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)            AGE
openclaw   ClusterIP   10.101.236.82   <none>        80/TCP,18791/TCP   45h

>>> Ingress Status:
NAME               CLASS    HOSTS              ADDRESS         PORTS     AGE
openclaw-ingress   <none>   openclaw.ka0s.io   192.168.1.250   80, 443   45h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: openclaw ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
openclaw-0 Error
--- Description for openclaw-0 ---
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  4m40s                 default-scheduler  Successfully assigned openclaw/openclaw-0 to k8-node-20
  Normal   Pulled     4m38s                 kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 845ms (845ms including waiting). Image size: 1005496535 bytes.
  Normal   Pulled     3m55s                 kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 776ms (776ms including waiting). Image size: 1005496535 bytes.
  Warning  Unhealthy  3m20s (x2 over 4m)    kubelet            Liveness probe failed: dial tcp 172.16.209.50:18789: connect: connection refused
  Normal   Pulled     3m5s                  kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 830ms (830ms including waiting). Image size: 1005496535 bytes.
  Normal   Pulled     2m4s                  kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 940ms (940ms including waiting). Image size: 1005496535 bytes.
  Warning  BackOff    54s (x7 over 3m18s)   kubelet            Back-off restarting failed container openclaw in pod openclaw-0_openclaw(62639411-6567-41d0-9675-ecebbc937186)
  Normal   Pulling    43s (x5 over 4m39s)   kubelet            Pulling image "ghcr.io/openclaw/openclaw:latest"
  Normal   Created    42s (x5 over 4m38s)   kubelet            Created container: openclaw
  Normal   Started    42s (x5 over 4m38s)   kubelet            Started container openclaw
  Normal   Pulled     42s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 821ms (821ms including waiting). Image size: 1005496535 bytes.
  Warning  Unhealthy  10s (x16 over 4m26s)  kubelet            Readiness probe failed: dial tcp 172.16.209.50:18789: connect: connection refused
--- Logs for openclaw-0 (Current) ---
[pod/openclaw-0/openclaw] 2026-03-19T11:17:23.503+00:00 Gateway start blocked: set gateway.mode=local (current: unset) or pass --allow-unconfigured.
[pod/openclaw-0/openclaw] 2026-03-19T11:17:23.517+00:00 Config write audit: /home/node/.openclaw/logs/config-audit.jsonl
--> Checking Endpoints for Service openclaw...
WARNING: Service openclaw has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
