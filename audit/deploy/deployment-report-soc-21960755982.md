Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 19:35:56 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS      RESTARTS      AGE    IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running     6 (21h ago)   2d3h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running     4 (20h ago)   2d3h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running     0             2d3h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running     4 (20h ago)   2d3h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-77877699b7-dr9xc   1/1     Running     0             62m    172.16.74.21    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running     0             62m    172.16.209.22   k8-node-20   <none>           <none>
wazuh-manager-678cb6d87f-49djh     1/1     Running     0             176m   172.16.209.36   k8-node-20   <none>           <none>
wazuh-setup-job-f7wvn              0/1     Completed   0             22m    172.16.146.49   k8-node-30   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   5h11m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        5h11m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        5h11m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   5h11m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d7h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-77877699b7-dr9xc ---
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:31:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:31:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:31:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:31:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:31:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:32:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:37Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:57Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:33:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:02Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:17Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:22Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:37Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:57Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:34:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:02Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:17Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:22Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:37Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-77877699b7-dr9xc/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T19:35:57Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/javax.net.ssl.SSLEngine.unwrap(SSLEngine.java:679) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler$SslEngineType$3.unwrap(SslHandler.java:308) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.unwrap(SslHandler.java:1486) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decodeJdkCompatible(SslHandler.java:1377) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decode(SslHandler.java:1428) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:530) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:469) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	... 16 more
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:39,560][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:39,562][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:39,564][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:39,566][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:42,062][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:42,065][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:42,067][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:42,070][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:44,562][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:44,564][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:44,566][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:44,568][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,081][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,081][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,081][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,081][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,081][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,081][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,081][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,081][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,081][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:46,082][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:47,063][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:47,065][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:47,067][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:47,069][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:49,563][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:49,565][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:49,567][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:49,570][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:52,066][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:52,069][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:52,072][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:52,075][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:54,568][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:54,572][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:54,576][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:54,579][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:57,071][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:57,074][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:57,077][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T19:35:57,079][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
