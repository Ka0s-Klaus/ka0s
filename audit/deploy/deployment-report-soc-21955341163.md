Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 16:36:01 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (18h ago)   2d      192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (17h ago)   2d      192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0             2d      192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (17h ago)   2d      192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-59cb58d8f5-vm9j5   1/1     Running             0             125m    172.16.209.46   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Pending             0             10m     <none>          <none>       <none>           <none>
wazuh-manager-55759f75b4-dst9k     1/1     Running             0             118m    172.16.209.16   k8-node-20   <none>           <none>
wazuh-security-init-s8hmg          1/1     Running             0             4h36m   172.16.74.55    k8-manager   <none>           <none>
wazuh-security-init-v2-8jfh9       1/1     Running             0             125m    172.16.74.34    k8-manager   <none>           <none>
wazuh-setup-job-mdk9m              0/1     ContainerCreating   0             1s      <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   131m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        131m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        131m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   131m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d4h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-59cb58d8f5-vm9j5 ---
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:29:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:30:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:31:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T16:32:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
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
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-indexer-0 Pending
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
  Warning  FailedScheduling  10m                   default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't find available persistent volumes to bind, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  2m26s (x13 over 10m)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't find available persistent volumes to bind, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Logs for wazuh-indexer-0 (Current) ---
--- Logs for wazuh-indexer-0 (Previous) ---
