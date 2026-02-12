Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 20:20:27 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS             RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running            6 (21h ago)     2d4h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running            4 (21h ago)     2d4h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running            0               2d4h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running            4 (21h ago)     2d4h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-f59ddcfc4-x57mw   1/1     Running            0               21m     172.16.146.29   k8-node-30   <none>           <none>
wazuh-indexer-0                   1/1     Terminating        0               14m     172.16.146.10   k8-node-30   <none>           <none>
wazuh-manager-678cb6d87f-49djh    1/1     Running            0               3h41m   172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-v2-fr2xb      0/1     CrashLoopBackOff   5 (2m39s ago)   14m     172.16.146.38   k8-node-30   <none>           <none>
wazuh-setup-job-xh86m             0/1     Completed          0               14m     172.16.146.59   k8-node-30   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   5h55m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        5h55m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        5h55m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   5h55m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d7h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-f59ddcfc4-x57mw ---
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:16:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:17:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:18:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:19:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:20:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:117) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:370) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert$AlertConsumer.consume(Alert.java:287) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.TransportContext.dispatch(TransportContext.java:209) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLTransport.decode(SSLTransport.java:172) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.decode(SSLEngineImpl.java:736) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.readRecord(SSLEngineImpl.java:691) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.unwrap(SSLEngineImpl.java:506) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.unwrap(SSLEngineImpl.java:482) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/javax.net.ssl.SSLEngine.unwrap(SSLEngine.java:679) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler$SslEngineType$3.unwrap(SslHandler.java:308) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.unwrap(SslHandler.java:1486) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decodeJdkCompatible(SslHandler.java:1377) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decode(SslHandler.java:1428) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:530) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:469) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	... 16 more
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:17,958][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:17,960][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:17,963][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:17,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,460][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,464][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,469][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,473][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,760][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,760][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,760][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,760][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,761][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,761][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,761][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,761][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,762][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,762][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:22,961][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:22,964][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:22,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:22,969][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:25,461][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:25,464][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:25,467][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:25,470][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,176][INFO ][o.o.n.Node               ] [wazuh.indexer] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,249][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh.indexer] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,250][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh.indexer] Closing DebugSink
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,281][INFO ][o.o.n.Node               ] [wazuh.indexer] stopped
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,282][INFO ][o.o.n.Node               ] [wazuh.indexer] closing ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,295][INFO ][o.o.s.a.i.AuditLogImpl   ] [wazuh.indexer] Closing AuditLogImpl
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,301][INFO ][o.o.n.Node               ] [wazuh.indexer] closed
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-indexer-0 Terminating
wazuh-security-init-v2-fr2xb CrashLoopBackOff
--- Description for wazuh-indexer-0 ---
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  14m    default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-30
  Normal  Pulling    13m    kubelet            Pulling image "busybox"
  Normal  Pulled     12m    kubelet            Successfully pulled image "busybox" in 1m28.961s (1m28.961s including waiting). Image size: 2222260 bytes.
  Normal  Created    12m    kubelet            Created container: increase-vm-max-map
  Normal  Started    11m    kubelet            Started container increase-vm-max-map
  Normal  Pulling    11m    kubelet            Pulling image "busybox"
  Normal  Pulled     10m    kubelet            Successfully pulled image "busybox" in 51.473s (1m14.893s including waiting). Image size: 2222260 bytes.
  Normal  Created    10m    kubelet            Created container: fix-permissions
  Normal  Started    10m    kubelet            Started container fix-permissions
  Normal  Pulled     9m48s  kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal  Created    9m33s  kubelet            Created container: wazuh-indexer
  Normal  Started    9m24s  kubelet            Started container wazuh-indexer
  Normal  Killing    1s     kubelet            Stopping container wazuh-indexer
--- Logs for wazuh-indexer-0 (Current) ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:117) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:370) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert$AlertConsumer.consume(Alert.java:287) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.TransportContext.dispatch(TransportContext.java:209) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLTransport.decode(SSLTransport.java:172) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.decode(SSLEngineImpl.java:736) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.readRecord(SSLEngineImpl.java:691) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.unwrap(SSLEngineImpl.java:506) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.unwrap(SSLEngineImpl.java:482) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/javax.net.ssl.SSLEngine.unwrap(SSLEngine.java:679) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler$SslEngineType$3.unwrap(SslHandler.java:308) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.unwrap(SslHandler.java:1486) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decodeJdkCompatible(SslHandler.java:1377) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decode(SslHandler.java:1428) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:530) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:469) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	... 16 more
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:17,958][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:17,960][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:17,963][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:17,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,460][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,464][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,469][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,473][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,760][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,760][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,760][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,760][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,761][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,761][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,761][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,761][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,762][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:20,762][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:22,961][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:22,964][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:22,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:22,969][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:25,461][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:25,464][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:25,467][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:25,470][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,176][INFO ][o.o.n.Node               ] [wazuh.indexer] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,249][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh.indexer] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,250][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh.indexer] Closing DebugSink
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,281][INFO ][o.o.n.Node               ] [wazuh.indexer] stopped
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,282][INFO ][o.o.n.Node               ] [wazuh.indexer] closing ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,295][INFO ][o.o.s.a.i.AuditLogImpl   ] [wazuh.indexer] Closing AuditLogImpl
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:20:27,301][INFO ][o.o.n.Node               ] [wazuh.indexer] closed
--- Logs for wazuh-indexer-0 (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-indexer" in pod "wazuh-indexer-0" not found
Failed to fetch previous logs
--- Description for wazuh-security-init-v2-fr2xb ---
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-6cbsx:
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
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  14m                  default-scheduler  Successfully assigned soc/wazuh-security-init-v2-fr2xb to k8-node-30
  Normal   Pulled     2m58s (x6 over 13m)  kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal   Created    2m48s (x6 over 12m)  kubelet            Created container: security-init
  Normal   Started    2m45s (x6 over 12m)  kubelet            Started container security-init
  Warning  BackOff    3s (x22 over 6m13s)  kubelet            Back-off restarting failed container security-init in pod wazuh-security-init-v2-fr2xb_soc(94cdc368-e802-46ec-8a15-1e19ca33a261)
--- Logs for wazuh-security-init-v2-fr2xb (Current) ---
[pod/wazuh-security-init-v2-fr2xb/security-init] Waiting for Indexer...
[pod/wazuh-security-init-v2-fr2xb/security-init] OpenSearch Security not initialized.Indexer is up. Running securityadmin.sh...
[pod/wazuh-security-init-v2-fr2xb/security-init] Security Admin v7
[pod/wazuh-security-init-v2-fr2xb/security-init] Will connect to wazuh-indexer:9200 ... done
[pod/wazuh-security-init-v2-fr2xb/security-init] Connected as "CN=admin,O=Wazuh,L=California,C=US"
[pod/wazuh-security-init-v2-fr2xb/security-init] ERR: "CN=admin,O=Wazuh,L=California,C=US" is not an admin user
[pod/wazuh-security-init-v2-fr2xb/security-init] Seems you use a client certificate but this one is not registered as admin_dn
[pod/wazuh-security-init-v2-fr2xb/security-init] Make sure opensearch.yml on all nodes contains:
[pod/wazuh-security-init-v2-fr2xb/security-init] plugins.security.authcz.admin_dn:
[pod/wazuh-security-init-v2-fr2xb/security-init]   - ""CN=admin,O=Wazuh,L=California,C=US""
--- Logs for wazuh-security-init-v2-fr2xb (Previous) ---
[pod/wazuh-security-init-v2-fr2xb/security-init] Waiting for Indexer...
[pod/wazuh-security-init-v2-fr2xb/security-init] OpenSearch Security not initialized.Indexer is up. Running securityadmin.sh...
[pod/wazuh-security-init-v2-fr2xb/security-init] Security Admin v7
[pod/wazuh-security-init-v2-fr2xb/security-init] Will connect to wazuh-indexer:9200 ... done
[pod/wazuh-security-init-v2-fr2xb/security-init] Connected as "CN=admin,O=Wazuh,L=California,C=US"
[pod/wazuh-security-init-v2-fr2xb/security-init] ERR: "CN=admin,O=Wazuh,L=California,C=US" is not an admin user
[pod/wazuh-security-init-v2-fr2xb/security-init] Seems you use a client certificate but this one is not registered as admin_dn
[pod/wazuh-security-init-v2-fr2xb/security-init] Make sure opensearch.yml on all nodes contains:
[pod/wazuh-security-init-v2-fr2xb/security-init] plugins.security.authcz.admin_dn:
[pod/wazuh-security-init-v2-fr2xb/security-init]   - ""CN=admin,O=Wazuh,L=California,C=US""
