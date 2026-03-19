Deployment Report: core/b2b/core-services/openclaw
Date: Thu Mar 19 11:11:14 UTC 2026
Trigger: push by ka0score
Namespace: openclaw
---------------------------------------------------
>>> Pods Status:
NAME         READY   STATUS             RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
openclaw-0   0/1     CrashLoopBackOff   6 (2m52s ago)   9m22s   172.16.209.16   k8-node-20   <none>           <none>

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
openclaw-0 CrashLoopBackOff
--- Description for openclaw-0 ---
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  9m25s                   default-scheduler  Successfully assigned openclaw/openclaw-0 to k8-node-20
  Normal   Pulled     9m24s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 743ms (743ms including waiting). Image size: 1005496535 bytes.
  Normal   Pulled     9m17s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 706ms (706ms including waiting). Image size: 1005496535 bytes.
  Normal   Pulled     8m53s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 691ms (691ms including waiting). Image size: 1005496535 bytes.
  Normal   Pulled     8m16s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 770ms (770ms including waiting). Image size: 1005496535 bytes.
  Normal   Pulled     7m26s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 948ms (948ms including waiting). Image size: 1005496535 bytes.
  Normal   Created    5m48s (x6 over 9m24s)   kubelet            Created container: openclaw
  Normal   Pulled     5m48s                   kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 1.169s (1.169s including waiting). Image size: 1005496535 bytes.
  Normal   Started    5m47s (x6 over 9m24s)   kubelet            Started container openclaw
  Warning  BackOff    4m10s (x26 over 9m13s)  kubelet            Back-off restarting failed container openclaw in pod openclaw-0_openclaw(5a45a4a7-3d48-42a2-8a62-0ce3ab4d752f)
  Normal   Pulling    3m2s (x7 over 9m25s)    kubelet            Pulling image "ghcr.io/openclaw/openclaw:latest"
  Normal   Pulled     3m1s                    kubelet            Successfully pulled image "ghcr.io/openclaw/openclaw:latest" in 832ms (832ms including waiting). Image size: 1005496535 bytes.
--- Logs for openclaw-0 (Current) ---
[pod/openclaw-0/openclaw] Invalid config at /home/node/.openclaw/openclaw.json:\n- agent: agent.* was moved; use agents.defaults (and tools.* for tool/elevated/exec settings) instead (auto-migrated on load).
[pod/openclaw-0/openclaw] │
[pod/openclaw-0/openclaw] ◇  Compatibility config keys detected ───────────────────────────────╮
[pod/openclaw-0/openclaw] │                                                                    │
[pod/openclaw-0/openclaw] │  - agent: agent.* was moved; use agents.defaults (and tools.* for  │
[pod/openclaw-0/openclaw] │    tool/elevated/exec settings) instead (auto-migrated on load).   │
[pod/openclaw-0/openclaw] │                                                                    │
[pod/openclaw-0/openclaw] ├────────────────────────────────────────────────────────────────────╯
[pod/openclaw-0/openclaw] │
[pod/openclaw-0/openclaw] ◇  Doctor changes ─────────────────╮
[pod/openclaw-0/openclaw] │                                  │
[pod/openclaw-0/openclaw] │  Moved agent → agents.defaults.  │
[pod/openclaw-0/openclaw] │                                  │
[pod/openclaw-0/openclaw] ├──────────────────────────────────╯
[pod/openclaw-0/openclaw] │
[pod/openclaw-0/openclaw] ◇  Doctor ─────────────────────────────────────────────────────────╮
[pod/openclaw-0/openclaw] │                                                                  │
[pod/openclaw-0/openclaw] │  Run "openclaw doctor --fix" to apply compatibility migrations.  │
[pod/openclaw-0/openclaw] │                                                                  │
[pod/openclaw-0/openclaw] ├──────────────────────────────────────────────────────────────────╯
[pod/openclaw-0/openclaw] Config invalid
[pod/openclaw-0/openclaw] File: ~/.openclaw/openclaw.json
[pod/openclaw-0/openclaw] Problem:
[pod/openclaw-0/openclaw]   - agent: agent.* was moved; use agents.defaults (and tools.* for tool/elevated/exec settings) instead (auto-migrated on load).
[pod/openclaw-0/openclaw] Legacy config keys detected:
[pod/openclaw-0/openclaw]   - agent: agent.* was moved; use agents.defaults (and tools.* for tool/elevated/exec settings) instead (auto-migrated on load).
[pod/openclaw-0/openclaw] 
[pod/openclaw-0/openclaw] Run: openclaw doctor --fix
[pod/openclaw-0/openclaw] Gateway service disabled.
[pod/openclaw-0/openclaw] Start with: openclaw gateway install
[pod/openclaw-0/openclaw] Start with: openclaw gateway
[pod/openclaw-0/openclaw] Start with: systemctl --user start openclaw-gateway.service
[pod/openclaw-0/openclaw] Start with: systemd user services are unavailable; install/enable systemd or run the gateway under your supervisor.
[pod/openclaw-0/openclaw] Start with: If you're in a container, run the gateway in the foreground instead of `openclaw gateway`.
--> Checking Endpoints for Service openclaw...
WARNING: Service openclaw has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
