Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 16:39:19 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS        RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running       6 (18h ago)   2d      192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running       4 (17h ago)   2d      192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running       0             2d      192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running       4 (17h ago)   2d      192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-59cb58d8f5-vm9j5   1/1     Running       0             129m    172.16.209.46   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Pending       0             14m     <none>          <none>       <none>           <none>
wazuh-manager-55759f75b4-dst9k     1/1     Terminating   0             121m    172.16.209.16   k8-node-20   <none>           <none>
wazuh-manager-678cb6d87f-49djh     1/1     Running       0             2s      172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-s8hmg          1/1     Running       0             4h40m   172.16.74.55    k8-manager   <none>           <none>
wazuh-security-init-v2-8jfh9       1/1     Running       0             129m    172.16.74.34    k8-manager   <none>           <none>
wazuh-setup-job-mdk9m              0/1     Completed     0             3m19s   172.16.74.20    k8-manager   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   134m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        134m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        134m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   134m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d4h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-59cb58d8f5-vm9j5 ---
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:33:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:34:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:35:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:36:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:37:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:38:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:39:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:39:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:39:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:39:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:39:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:39:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-indexer-0 Pending
wazuh-manager-55759f75b4-dst9k Terminating
--- Description for wazuh-indexer-0 ---
    ReadOnly:   false
  wazuh-indexer-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-n5f7x:
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
  Type     Reason            Age                   From               Message
  ----     ------            ----                  ----               -------
  Warning  FailedScheduling  14m                   default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't find available persistent volumes to bind, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  5m45s (x13 over 13m)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't find available persistent volumes to bind, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Logs for wazuh-indexer-0 (Current) ---
--- Logs for wazuh-indexer-0 (Previous) ---
--- Description for wazuh-manager-55759f75b4-dst9k ---
    ClaimName:  wazuh-manager-data-v2
    ReadOnly:   false
  wazuh-manager-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-manager-certs
    Optional:    false
  kube-api-access-ssh77:
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
  Normal  Killing  3s    kubelet  Stopping container wazuh-manager
--- Logs for wazuh-manager-55759f75b4-dst9k (Current) ---
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:32:36.141Z	INFO	[publisher_pipeline_output]	pipeline/output.go:145	Attempting to reconnect to backoff(elasticsearch(https://wazuh-indexer:9200)) with 151 reconnect attempt(s)
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:32:36.141Z	INFO	[publisher]	pipeline/retry.go:213	retryer: send wait signal to consumer
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:32:36.141Z	INFO	[publisher]	pipeline/retry.go:217	  done
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:33:25.379Z	ERROR	[publisher_pipeline_output]	pipeline/output.go:154	Failed to connect to backoff(elasticsearch(https://wazuh-indexer:9200)): Get "https://wazuh-indexer:9200": dial tcp 10.104.200.35:9200: connect: connection refused
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:33:25.379Z	INFO	[publisher_pipeline_output]	pipeline/output.go:145	Attempting to reconnect to backoff(elasticsearch(https://wazuh-indexer:9200)) with 152 reconnect attempt(s)
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:33:25.379Z	INFO	[publisher]	pipeline/retry.go:213	retryer: send wait signal to consumer
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:33:25.379Z	INFO	[publisher]	pipeline/retry.go:217	  done
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:34:07.037Z	ERROR	[publisher_pipeline_output]	pipeline/output.go:154	Failed to connect to backoff(elasticsearch(https://wazuh-indexer:9200)): Get "https://wazuh-indexer:9200": dial tcp 10.104.200.35:9200: connect: connection refused
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:34:07.037Z	INFO	[publisher_pipeline_output]	pipeline/output.go:145	Attempting to reconnect to backoff(elasticsearch(https://wazuh-indexer:9200)) with 153 reconnect attempt(s)
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:34:07.037Z	INFO	[publisher]	pipeline/retry.go:213	retryer: send wait signal to consumer
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:34:07.037Z	INFO	[publisher]	pipeline/retry.go:217	  done
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:34:48.088Z	ERROR	[publisher_pipeline_output]	pipeline/output.go:154	Failed to connect to backoff(elasticsearch(https://wazuh-indexer:9200)): Get "https://wazuh-indexer:9200": dial tcp 10.104.200.35:9200: connect: connection refused
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:34:48.088Z	INFO	[publisher_pipeline_output]	pipeline/output.go:145	Attempting to reconnect to backoff(elasticsearch(https://wazuh-indexer:9200)) with 154 reconnect attempt(s)
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:34:48.088Z	INFO	[publisher]	pipeline/retry.go:213	retryer: send wait signal to consumer
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:34:48.088Z	INFO	[publisher]	pipeline/retry.go:217	  done
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:35:34.117Z	ERROR	[publisher_pipeline_output]	pipeline/output.go:154	Failed to connect to backoff(elasticsearch(https://wazuh-indexer:9200)): Get "https://wazuh-indexer:9200": dial tcp 10.104.200.35:9200: connect: connection refused
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:35:34.117Z	INFO	[publisher_pipeline_output]	pipeline/output.go:145	Attempting to reconnect to backoff(elasticsearch(https://wazuh-indexer:9200)) with 155 reconnect attempt(s)
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:35:34.117Z	INFO	[publisher]	pipeline/retry.go:213	retryer: send wait signal to consumer
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:35:34.117Z	INFO	[publisher]	pipeline/retry.go:217	  done
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:36:24.950Z	ERROR	[publisher_pipeline_output]	pipeline/output.go:154	Failed to connect to backoff(elasticsearch(https://wazuh-indexer:9200)): Get "https://wazuh-indexer:9200": dial tcp 10.104.200.35:9200: connect: connection refused
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:36:24.951Z	INFO	[publisher_pipeline_output]	pipeline/output.go:145	Attempting to reconnect to backoff(elasticsearch(https://wazuh-indexer:9200)) with 156 reconnect attempt(s)
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:36:24.951Z	INFO	[publisher]	pipeline/retry.go:213	retryer: send wait signal to consumer
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:36:24.951Z	INFO	[publisher]	pipeline/retry.go:217	  done
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:37:08.134Z	ERROR	[publisher_pipeline_output]	pipeline/output.go:154	Failed to connect to backoff(elasticsearch(https://wazuh-indexer:9200)): Get "https://wazuh-indexer:9200": dial tcp 10.104.200.35:9200: connect: connection refused
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:37:08.134Z	INFO	[publisher_pipeline_output]	pipeline/output.go:145	Attempting to reconnect to backoff(elasticsearch(https://wazuh-indexer:9200)) with 157 reconnect attempt(s)
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:37:08.134Z	INFO	[publisher]	pipeline/retry.go:213	retryer: send wait signal to consumer
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:37:08.134Z	INFO	[publisher]	pipeline/retry.go:217	  done
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:37:54.865Z	ERROR	[publisher_pipeline_output]	pipeline/output.go:154	Failed to connect to backoff(elasticsearch(https://wazuh-indexer:9200)): Get "https://wazuh-indexer:9200": dial tcp 10.104.200.35:9200: connect: connection refused
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:37:54.865Z	INFO	[publisher_pipeline_output]	pipeline/output.go:145	Attempting to reconnect to backoff(elasticsearch(https://wazuh-indexer:9200)) with 158 reconnect attempt(s)
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:37:54.865Z	INFO	[publisher]	pipeline/retry.go:213	retryer: send wait signal to consumer
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:37:54.865Z	INFO	[publisher]	pipeline/retry.go:217	  done
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:38:41.863Z	ERROR	[publisher_pipeline_output]	pipeline/output.go:154	Failed to connect to backoff(elasticsearch(https://wazuh-indexer:9200)): Get "https://wazuh-indexer:9200": dial tcp 10.104.200.35:9200: connect: connection refused
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:38:41.863Z	INFO	[publisher_pipeline_output]	pipeline/output.go:145	Attempting to reconnect to backoff(elasticsearch(https://wazuh-indexer:9200)) with 159 reconnect attempt(s)
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:38:41.863Z	INFO	[publisher]	pipeline/retry.go:213	retryer: send wait signal to consumer
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:38:41.863Z	INFO	[publisher]	pipeline/retry.go:217	  done
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.770Z	INFO	beater/filebeat.go:515	Stopping filebeat
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.770Z	INFO	beater/crawler.go:148	Stopping Crawler
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.770Z	INFO	beater/crawler.go:158	Stopping 1 inputs
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.770Z	INFO	[crawler]	beater/crawler.go:163	Stopping input: 9132358592892857476
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.770Z	INFO	input/input.go:136	input ticker stopped
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.770Z	INFO	beater/crawler.go:178	Crawler stopped
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.770Z	INFO	[registrar]	registrar/registrar.go:132	Stopping Registrar
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.770Z	INFO	[registrar]	registrar/registrar.go:166	Ending Registrar
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.770Z	INFO	[registrar]	registrar/registrar.go:137	Registrar stopped
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] 2026-02-12T16:39:19.773Z	INFO	instance/beat.go:461	filebeat stopped.
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] Filebeat exited. code=0
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] [cont-finish.d] executing container finish scripts...
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] [cont-finish.d] done.
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] [s6-finish] waiting for services.
[pod/wazuh-manager-55759f75b4-dst9k/wazuh-manager] [s6-finish] sending all processes the TERM signal.
--- Logs for wazuh-manager-55759f75b4-dst9k (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-manager" in pod "wazuh-manager-55759f75b4-dst9k" not found
Failed to fetch previous logs
