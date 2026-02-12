Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 20:05:56 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running             6 (21h ago)   2d4h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running             4 (21h ago)   2d4h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running             0             2d4h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running             4 (21h ago)   2d4h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-f59ddcfc4-x57mw   1/1     Running             0             6m46s   172.16.146.29   k8-node-30   <none>           <none>
wazuh-indexer-0                   1/1     Terminating         0             92m     172.16.209.22   k8-node-20   <none>           <none>
wazuh-manager-678cb6d87f-49djh    1/1     Running             0             3h26m   172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-v2-fr2xb      0/1     ContainerCreating   0             0s      <none>          k8-node-30   <none>           <none>
wazuh-setup-job-xh86m             0/1     ContainerCreating   0             0s      <none>          k8-node-30   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   5h41m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        5h41m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        5h41m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   5h41m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d7h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-f59ddcfc4-x57mw ---
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:01:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:01:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:01:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:01:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:01:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:01:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:02:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:03:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:04:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:05:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] unable to retrieve container logs for containerd://c9bd40ebbaec2b7188a2e5d41d23bc6348a2c218267127ae201472f6f99a4a55Error from server (BadRequest): container "fix-permissions" in pod "wazuh-indexer-0" is waiting to start: PodInitializing
Failed to fetch logs
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-indexer-0 Init:0/2
wazuh-security-init-v2-fr2xb ContainerCreating
wazuh-setup-job-xh86m ContainerCreating
--- Description for wazuh-indexer-0 ---
    ClaimName:  wazuh-indexer-data-v2
    ReadOnly:   false
  wazuh-indexer-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-52r6m:
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  0s    default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-30
--- Logs for wazuh-indexer-0 (Current) ---
Error from server (BadRequest): container "increase-vm-max-map" in pod "wazuh-indexer-0" is waiting to start: PodInitializing
Failed to fetch current logs
--- Logs for wazuh-indexer-0 (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-indexer" in pod "wazuh-indexer-0" not found
Failed to fetch previous logs
--- Description for wazuh-security-init-v2-fr2xb ---
  PodScheduled                True 
Volumes:
  wazuh-indexer-certs:
    Type:        Secret (a volume populated by a Secret)
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  2s    default-scheduler  Successfully assigned soc/wazuh-security-init-v2-fr2xb to k8-node-30
--- Logs for wazuh-security-init-v2-fr2xb (Current) ---
Error from server (BadRequest): container "security-init" in pod "wazuh-security-init-v2-fr2xb" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-security-init-v2-fr2xb (Previous) ---
Error from server (BadRequest): previous terminated container "security-init" in pod "wazuh-security-init-v2-fr2xb" not found
Failed to fetch previous logs
--- Description for wazuh-setup-job-xh86m ---
  PodScheduled                True 
Volumes:
  config-volume:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-setup-config
    Optional:  false
  kube-api-access-jxxmg:
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  3s    default-scheduler  Successfully assigned soc/wazuh-setup-job-xh86m to k8-node-30
--- Logs for wazuh-setup-job-xh86m (Current) ---
Error from server (BadRequest): container "setup" in pod "wazuh-setup-job-xh86m" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-setup-job-xh86m (Previous) ---
Error from server (BadRequest): previous terminated container "setup" in pod "wazuh-setup-job-xh86m" not found
Failed to fetch previous logs
