Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 21:28:54 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running             6 (22h ago)   2d5h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running             4 (22h ago)   2d5h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running             0             2d5h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running             4 (22h ago)   2d5h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-f59ddcfc4-x57mw   1/1     Running             0             89m     172.16.146.29   k8-node-30   <none>           <none>
wazuh-indexer-0                   1/1     Terminating         0             67m     172.16.146.22   k8-node-30   <none>           <none>
wazuh-manager-678cb6d87f-49djh    1/1     Running             0             4h49m   172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-v2-7h4pd      0/1     ContainerCreating   0             0s      <none>          k8-node-30   <none>           <none>
wazuh-setup-job-w57f8             0/1     ContainerCreating   0             0s      <none>          k8-node-30   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   7h3m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        7h3m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        7h3m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   7h3m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d9h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-f59ddcfc4-x57mw ---
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:24:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:24:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:24:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:24:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:24:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:25:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:26:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:27:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:28:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,196][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,196][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,197][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,197][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,197][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:37,960][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:37,962][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:37,965][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:37,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:40,462][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:40,464][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:40,465][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:40,466][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:42,963][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:42,965][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:42,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:42,968][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:45,465][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:45,466][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:45,468][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:45,469][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:47,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:47,968][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:47,970][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:47,971][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,197][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:50,469][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:50,470][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:50,472][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:50,474][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:52,969][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:52,971][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:52,973][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:52,974][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:53,996][INFO ][o.o.n.Node               ] [wazuh.indexer] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:53,999][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh.indexer] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,000][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh.indexer] Closing DebugSink
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,039][INFO ][o.o.n.Node               ] [wazuh.indexer] stopped
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,039][INFO ][o.o.n.Node               ] [wazuh.indexer] closing ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,065][INFO ][o.o.s.a.i.AuditLogImpl   ] [wazuh.indexer] Closing AuditLogImpl
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,078][INFO ][o.o.n.Node               ] [wazuh.indexer] closed
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-indexer-0 Terminating
wazuh-security-init-v2-7h4pd ContainerCreating
wazuh-setup-job-w57f8 ContainerCreating
--- Description for wazuh-indexer-0 ---
    ClaimName:  wazuh-indexer-data-v2
    ReadOnly:   false
  wazuh-indexer-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-67mfk:
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
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  4s    kubelet  Stopping container wazuh-indexer
--- Logs for wazuh-indexer-0 (Current) ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,196][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,196][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,197][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,197][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:36,197][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:37,960][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:37,962][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:37,965][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:37,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:40,462][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:40,464][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:40,465][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:40,466][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:42,963][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:42,965][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:42,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:42,968][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:45,465][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:45,466][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:45,468][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:45,469][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:47,966][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:47,968][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:47,970][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:47,971][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,197][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:49,198][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:50,469][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:50,470][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:50,472][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:50,474][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:52,969][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:52,971][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:52,973][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:52,974][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:53,996][INFO ][o.o.n.Node               ] [wazuh.indexer] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:53,999][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh.indexer] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,000][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh.indexer] Closing DebugSink
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,039][INFO ][o.o.n.Node               ] [wazuh.indexer] stopped
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,039][INFO ][o.o.n.Node               ] [wazuh.indexer] closing ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,065][INFO ][o.o.s.a.i.AuditLogImpl   ] [wazuh.indexer] Closing AuditLogImpl
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:28:54,078][INFO ][o.o.n.Node               ] [wazuh.indexer] closed
--- Logs for wazuh-indexer-0 (Previous) ---
Error from server (BadRequest): previous terminated container "fix-permissions" in pod "wazuh-indexer-0" not found
Failed to fetch previous logs
--- Description for wazuh-security-init-v2-7h4pd ---
  PodScheduled                True 
Volumes:
  wazuh-indexer-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-4vzn6:
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
  Normal  Scheduled  3s    default-scheduler  Successfully assigned soc/wazuh-security-init-v2-7h4pd to k8-node-30
--- Logs for wazuh-security-init-v2-7h4pd (Current) ---
Error from server (BadRequest): container "security-init" in pod "wazuh-security-init-v2-7h4pd" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-security-init-v2-7h4pd (Previous) ---
Error from server (BadRequest): previous terminated container "security-init" in pod "wazuh-security-init-v2-7h4pd" not found
Failed to fetch previous logs
--- Description for wazuh-setup-job-w57f8 ---
  PodScheduled                True 
Volumes:
  config-volume:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-setup-config
    Optional:  false
  kube-api-access-j9ckg:
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
  Normal  Scheduled  4s    default-scheduler  Successfully assigned soc/wazuh-setup-job-w57f8 to k8-node-30
--- Logs for wazuh-setup-job-w57f8 (Current) ---
Error from server (BadRequest): container "setup" in pod "wazuh-setup-job-w57f8" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-setup-job-w57f8 (Previous) ---
Error from server (BadRequest): previous terminated container "setup" in pod "wazuh-setup-job-w57f8" not found
Failed to fetch previous logs
