Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 20:28:07 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running             6 (21h ago)   2d4h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running             4 (21h ago)   2d4h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running             0             2d4h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running             4 (21h ago)   2d4h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-f59ddcfc4-x57mw   1/1     Running             0             28m     172.16.146.29   k8-node-30   <none>           <none>
wazuh-indexer-0                   1/1     Running             0             6m46s   172.16.146.22   k8-node-30   <none>           <none>
wazuh-manager-678cb6d87f-49djh    1/1     Running             0             3h48m   172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-v2-5zd42      0/1     ContainerCreating   0             0s      <none>          k8-node-30   <none>           <none>
wazuh-setup-job-jd6t9             0/1     ContainerCreating   0             0s      <none>          k8-node-30   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   6h3m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        6h3m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        6h3m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   6h3m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d8h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-f59ddcfc4-x57mw ---
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:23:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:24:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:25:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:26:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:27:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:28:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:28:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T20:28:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:46,514][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:46,515][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:46,516][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:46,517][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:48,191][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:48,194][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:48,197][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:48,200][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:50,689][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:50,693][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:50,696][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:50,699][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:53,192][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:53,195][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:53,198][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:53,201][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:55,692][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:55,695][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:55,698][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:55,702][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:58,195][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:58,198][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:58,201][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:58,204][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,519][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,520][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,520][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,520][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,521][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,521][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,521][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,521][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,522][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:27:59,522][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:00,697][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:00,702][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:00,707][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:00,711][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:03,197][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:03,199][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:03,202][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:03,205][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:05,699][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:05,705][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:05,711][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:05,715][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:08,200][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:08,203][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:08,207][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T20:28:08,211][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-security-init-v2-5zd42 ContainerCreating
wazuh-setup-job-jd6t9 ContainerCreating
--- Description for wazuh-security-init-v2-5zd42 ---
  PodScheduled                True 
Volumes:
  wazuh-indexer-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-crns5:
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
  Normal  Scheduled  1s    default-scheduler  Successfully assigned soc/wazuh-security-init-v2-5zd42 to k8-node-30
--- Logs for wazuh-security-init-v2-5zd42 (Current) ---
Error from server (BadRequest): container "security-init" in pod "wazuh-security-init-v2-5zd42" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-security-init-v2-5zd42 (Previous) ---
Error from server (BadRequest): previous terminated container "security-init" in pod "wazuh-security-init-v2-5zd42" not found
Failed to fetch previous logs
--- Description for wazuh-setup-job-jd6t9 ---
  PodScheduled                True 
Volumes:
  config-volume:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-setup-config
    Optional:  false
  kube-api-access-fmxnb:
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
  Normal  Scheduled  1s    default-scheduler  Successfully assigned soc/wazuh-setup-job-jd6t9 to k8-node-30
--- Logs for wazuh-setup-job-jd6t9 (Current) ---
Error from server (BadRequest): container "setup" in pod "wazuh-setup-job-jd6t9" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-setup-job-jd6t9 (Previous) ---
Error from server (BadRequest): previous terminated container "setup" in pod "wazuh-setup-job-jd6t9" not found
Failed to fetch previous logs
