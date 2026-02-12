Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 18:29:14 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (19h ago)   2d2h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (19h ago)   2d2h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0             2d2h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (19h ago)   2d2h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-59cb58d8f5-vm9j5   1/1     Running             0             3h59m   172.16.209.46   k8-node-20   <none>           <none>
wazuh-indexer-0                    0/1     Pending             0             123m    <none>          <none>       <none>           <none>
wazuh-manager-678cb6d87f-49djh     1/1     Running             0             109m    172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-s8hmg          1/1     Running             0             6h30m   172.16.74.55    k8-manager   <none>           <none>
wazuh-security-init-v2-8jfh9       1/1     Running             0             3h59m   172.16.74.34    k8-manager   <none>           <none>
wazuh-setup-job-xh44b              0/1     ContainerCreating   0             1s      <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   4h4m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        4h4m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        4h4m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   4h4m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d6h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-59cb58d8f5-vm9j5 ---
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:22:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:22:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:22:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:22:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:22:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:22:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:23:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:24:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:32Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:25:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T18:26:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
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
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-indexer-0 Pending
wazuh-setup-job-xh44b ContainerCreating
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
  Warning  FailedScheduling  26m (x50 over 123m)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't find available persistent volumes to bind, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Logs for wazuh-indexer-0 (Current) ---
--- Logs for wazuh-indexer-0 (Previous) ---
--- Description for wazuh-setup-job-xh44b ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-setup-config
    Optional:  false
  kube-api-access-7h7r7:
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
  Normal  Scheduled  2s    default-scheduler  Successfully assigned soc/wazuh-setup-job-xh44b to k8-manager
  Normal  Pulled     2s    kubelet            Container image "ubuntu:22.04" already present on machine
  Normal  Created    2s    kubelet            Created container: setup
  Normal  Started    1s    kubelet            Started container setup
--- Logs for wazuh-setup-job-xh44b (Current) ---
[pod/wazuh-setup-job-xh44b/setup] Installing dependencies...
[pod/wazuh-setup-job-xh44b/setup] Get:1 http://security.ubuntu.com/ubuntu jammy-security InRelease [129 kB]
[pod/wazuh-setup-job-xh44b/setup] Get:2 http://archive.ubuntu.com/ubuntu jammy InRelease [270 kB]
[pod/wazuh-setup-job-xh44b/setup] Get:3 http://security.ubuntu.com/ubuntu jammy-security/restricted amd64 Packages [6468 kB]
[pod/wazuh-setup-job-xh44b/setup] Get:4 http://security.ubuntu.com/ubuntu jammy-security/main amd64 Packages [3708 kB]
[pod/wazuh-setup-job-xh44b/setup] Get:5 http://security.ubuntu.com/ubuntu jammy-security/universe amd64 Packages [1298 kB]
[pod/wazuh-setup-job-xh44b/setup] Get:6 http://security.ubuntu.com/ubuntu jammy-security/multiverse amd64 Packages [62.6 kB]
--- Logs for wazuh-setup-job-xh44b (Previous) ---
Error from server (BadRequest): previous terminated container "setup" in pod "wazuh-setup-job-xh44b" not found
Failed to fetch previous logs
