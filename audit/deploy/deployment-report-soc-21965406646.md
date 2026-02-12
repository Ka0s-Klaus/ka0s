Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 21:51:57 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS             RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running            6 (23h ago)     2d6h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running            4 (23h ago)     2d6h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running            0               2d6h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running            4 (22h ago)     2d6h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-f59ddcfc4-x57mw   1/1     Running            0               112m    172.16.146.29   k8-node-30   <none>           <none>
wazuh-indexer-0                   1/1     Running            0               20m     172.16.146.14   k8-node-30   <none>           <none>
wazuh-manager-678cb6d87f-49djh    1/1     Running            0               5h12m   172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-v2-7h4pd      0/1     CrashLoopBackOff   5 (3m58s ago)   23m     172.16.146.18   k8-node-30   <none>           <none>
wazuh-setup-job-w57f8             0/1     Completed          0               23m     172.16.146.44   k8-node-30   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   7h27m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        7h27m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        7h27m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   7h27m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d9h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-f59ddcfc4-x57mw ---
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:47:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:47:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:47:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:47:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:47:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:47:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:48:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:49:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:50:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f59ddcfc4-x57mw/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T21:51:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74) [netty-common-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.Thread.run(Thread.java:1583) [?:?]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:51,365][WARN ][o.o.h.AbstractHttpServerTransport] [wazuh-indexer-0] caught exception while handling client http traffic, closing connection Netty4HttpChannel{localAddress=/172.16.146.14:9200, remoteAddress=/172.16.209.36:48370}
[pod/wazuh-indexer-0/wazuh-indexer] io.netty.handler.codec.DecoderException: javax.net.ssl.SSLHandshakeException: Received fatal alert: bad_certificate
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:500) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:290) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1357) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:868) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:796) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKeysPlain(NioEventLoop.java:697) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:660) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:998) [netty-common-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74) [netty-common-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.Thread.run(Thread.java:1583) [?:?]
[pod/wazuh-indexer-0/wazuh-indexer] Caused by: javax.net.ssl.SSLHandshakeException: Received fatal alert: bad_certificate
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:130) ~[?:?]
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:51,711][WARN ][o.o.m.f.FsHealthService  ] [wazuh-indexer-0] health check of [/var/lib/wazuh-indexer/nodes/0] took [5806ms] which is above the warn threshold of [5s]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:53,661][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:53,792][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:53,794][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:53,796][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:53,798][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:56,292][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:56,850][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:56,852][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T21:51:56,855][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-security-init-v2-7h4pd CrashLoopBackOff
--- Description for wazuh-security-init-v2-7h4pd ---
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
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  23m                   default-scheduler  Successfully assigned soc/wazuh-security-init-v2-7h4pd to k8-node-30
  Normal   Started    4m6s (x6 over 20m)    kubelet            Started container security-init
  Warning  BackOff    90s (x18 over 9m12s)  kubelet            Back-off restarting failed container security-init in pod wazuh-security-init-v2-7h4pd_soc(ec8f32a9-476f-438e-a32c-1f1888f637a7)
  Normal   Pulled     76s (x7 over 22m)     kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal   Created    27s (x7 over 20m)     kubelet            Created container: security-init
--- Logs for wazuh-security-init-v2-7h4pd (Current) ---
[pod/wazuh-security-init-v2-7h4pd/security-init] unable to retrieve container logs for containerd://b95e10f2c555382b72c33f9347d0306fdbec1095359c8c0a60926c986afa64e3--- Logs for wazuh-security-init-v2-7h4pd (Previous) ---
[pod/wazuh-security-init-v2-7h4pd/security-init] unable to retrieve container logs for containerd://b95e10f2c555382b72c33f9347d0306fdbec1095359c8c0a60926c986afa64e3