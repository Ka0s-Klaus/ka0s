Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 18:33:04 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS        RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running       6 (20h ago)   2d2h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running       4 (19h ago)   2d2h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running       0             2d2h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running       4 (19h ago)   2d2h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-59cb58d8f5-vm9j5   1/1     Terminating   0             4h2m    172.16.209.46   k8-node-20   <none>           <none>
wazuh-dashboard-77877699b7-dr9xc   1/1     Running       0             2s      172.16.74.21    k8-manager   <none>           <none>
wazuh-indexer-0                    0/1     Pending       0             127m    <none>          <none>       <none>           <none>
wazuh-manager-678cb6d87f-49djh     1/1     Running       0             113m    172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-s8hmg          1/1     Running       0             6h34m   172.16.74.55    k8-manager   <none>           <none>
wazuh-security-init-v2-8jfh9       1/1     Running       0             4h2m    172.16.74.34    k8-manager   <none>           <none>
wazuh-setup-job-xh44b              0/1     Completed     0             3m51s   172.16.74.45    k8-manager   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   4h8m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        4h8m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        4h8m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   4h8m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d6h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-59cb58d8f5-vm9j5 ---
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:27:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:28:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:33:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-59cb58d8f5-vm9j5 Terminating
wazuh-indexer-0 Pending
--- Description for wazuh-dashboard-59cb58d8f5-vm9j5 ---
    Name:      wazuh-dashboard-config
    Optional:  false
  wazuh-dashboard-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-dashboard-certs
    Optional:    false
  kube-api-access-rf8gn:
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
  Normal  Killing  1s    kubelet  Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-59cb58d8f5-vm9j5 (Current) ---
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:29:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:30:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:31:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:32:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:33:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
--- Logs for wazuh-dashboard-59cb58d8f5-vm9j5 (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-59cb58d8f5-vm9j5" not found
Failed to fetch previous logs
--- Description for wazuh-indexer-0 ---
    ClaimName:  wazuh-indexer-data-v2
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
  Type     Reason            Age                  From               Message
  ----     ------            ----                 ----               -------
  Warning  FailedScheduling  30m (x50 over 127m)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't find available persistent volumes to bind, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Logs for wazuh-indexer-0 (Current) ---
--- Logs for wazuh-indexer-0 (Previous) ---
