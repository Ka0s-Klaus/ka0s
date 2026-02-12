Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 23:02:46 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS        RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running       8 (14m ago)   2d7h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running       6 (13m ago)   2d7h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running       0             2d7h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running       4 (24h ago)   2d7h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-79dc76c44b-rfhqr   1/1     Running       0             25m     172.16.74.48    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Terminating   0             23m     172.16.146.4    k8-node-30   <none>           <none>
wazuh-manager-678cb6d87f-49djh     1/1     Running       1 (14m ago)   6h23m   172.16.209.40   k8-node-20   <none>           <none>
wazuh-security-init-v3-5svw7       1/1     Running       0             25m     172.16.146.50   k8-node-30   <none>           <none>
wazuh-setup-job-qwkcj              0/1     Completed     0             25m     172.16.146.42   k8-node-30   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   8h
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        8h
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        8h
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   8h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d10h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-79dc76c44b-rfhqr ---
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:37Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:57Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:58:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:02Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:22Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:37Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:57Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:59:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:02Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:17Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:22Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:37Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:00:57Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:02Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:17Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:22Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:57Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:01:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:02Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:17Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:37Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:02:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:29,941][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:29,946][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,087][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,088][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,088][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,089][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,089][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,090][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,090][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,090][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,091][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,091][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,086][WARN ][o.o.m.f.FsHealthService  ] [wazuh-indexer-0] health check of [/var/lib/wazuh-indexer/nodes/0] took [6804ms] which is above the warn threshold of [5s]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,432][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,439][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,447][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,454][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:35,000][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:35,006][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:35,053][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:35,062][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:37,435][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:37,439][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:37,444][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:37,452][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:39,936][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:39,939][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:39,943][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:39,946][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:42,437][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:42,440][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:42,444][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:42,448][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,093][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,093][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,093][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,095][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:44,939][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:44,946][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:44,951][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:44,957][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:45,961][INFO ][o.o.n.Node               ] [wazuh-indexer-0] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:45,961][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh-indexer-0] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:45,962][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh-indexer-0] Closing DebugSink
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
wazuh-indexer-0 Terminating
--- Description for wazuh-indexer-0 ---
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  23m    default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-30
  Normal  Pulling    22m    kubelet            Pulling image "busybox"
  Normal  Pulled     14m    kubelet            Successfully pulled image "busybox" in 2m0.135s (8m4.099s including waiting). Image size: 2222260 bytes.
  Normal  Created    14m    kubelet            Created container: increase-vm-max-map
  Normal  Started    14m    kubelet            Started container increase-vm-max-map
  Normal  Pulling    13m    kubelet            Pulling image "busybox"
  Normal  Pulled     10m    kubelet            Successfully pulled image "busybox" in 1m5.328s (3m18.712s including waiting). Image size: 2222260 bytes.
  Normal  Created    9m42s  kubelet            Created container: fix-permissions
  Normal  Started    8m41s  kubelet            Started container fix-permissions
  Normal  Pulled     7m55s  kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal  Created    6m36s  kubelet            Created container: wazuh-indexer
  Normal  Started    5m56s  kubelet            Started container wazuh-indexer
  Normal  Killing    2s     kubelet            Stopping container wazuh-indexer
--- Logs for wazuh-indexer-0 (Current) ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:29,941][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:29,946][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,087][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,088][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,088][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,089][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,089][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,090][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,090][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,090][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,091][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:30,091][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,086][WARN ][o.o.m.f.FsHealthService  ] [wazuh-indexer-0] health check of [/var/lib/wazuh-indexer/nodes/0] took [6804ms] which is above the warn threshold of [5s]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,432][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,439][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,447][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:32,454][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:35,000][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:35,006][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:35,053][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:35,062][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:37,435][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:37,439][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:37,444][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:37,452][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:39,936][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:39,939][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:39,943][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:39,946][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:42,437][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:42,440][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:42,444][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:42,448][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,093][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,093][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,093][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:43,095][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:44,939][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:44,946][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:44,951][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:44,957][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:45,961][INFO ][o.o.n.Node               ] [wazuh-indexer-0] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:45,961][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh-indexer-0] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:02:45,962][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh-indexer-0] Closing DebugSink
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
