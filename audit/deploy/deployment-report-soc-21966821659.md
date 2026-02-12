Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 22:37:29 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (24h ago)   2d6h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (23h ago)   2d6h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0             2d6h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (23h ago)   2d6h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-5fb9dd66c9-rnz5g   1/1     Terminating         0             39m     172.16.74.46    k8-manager   <none>           <none>
wazuh-dashboard-79dc76c44b-rfhqr   1/1     Running             0             1s      172.16.74.48    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Terminating         0             65m     172.16.146.14   k8-node-30   <none>           <none>
wazuh-manager-678cb6d87f-49djh     1/1     Running             0             5h58m   172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-v3-5svw7       0/1     ContainerCreating   0             1s      <none>          k8-node-30   <none>           <none>
wazuh-setup-job-qwkcj              0/1     ContainerCreating   0             1s      <none>          k8-node-30   <none>           <none>

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
--- Logs for wazuh-dashboard-5fb9dd66c9-rnz5g ---
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:33:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:34:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:469) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	... 16 more
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:07,793][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:07,796][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:07,799][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:07,803][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:10,293][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:10,295][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:10,298][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:10,301][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:12,796][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:12,800][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:12,806][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:12,810][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:15,295][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:15,298][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:15,301][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:15,303][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:17,798][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:17,801][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:17,810][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:17,816][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,178][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for actiongroups while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,225][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for config while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,225][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for internalusers while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,226][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for roles while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,227][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for rolesmapping while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:20,297][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:20,298][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:20,300][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:20,301][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:22,799][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:23,003][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:23,007][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:23,010][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:25,299][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:25,301][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:25,302][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:25,304][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:27,802][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:27,804][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:27,806][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:27,808][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,501][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh-indexer-0] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,502][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh-indexer-0] Closing DebugSink
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,502][INFO ][o.o.n.Node               ] [wazuh-indexer-0] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,527][INFO ][o.o.n.Node               ] [wazuh-indexer-0] stopped
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,527][INFO ][o.o.n.Node               ] [wazuh-indexer-0] closing ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,537][INFO ][o.o.s.a.i.AuditLogImpl   ] [wazuh-indexer-0] Closing AuditLogImpl
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,551][INFO ][o.o.n.Node               ] [wazuh-indexer-0] closed
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
wazuh-dashboard-5fb9dd66c9-rnz5g Terminating
wazuh-indexer-0 Terminating
wazuh-security-init-v3-5svw7 ContainerCreating
wazuh-setup-job-qwkcj ContainerCreating
--- Description for wazuh-dashboard-5fb9dd66c9-rnz5g ---
    SecretName:  wazuh-dashboard-certs
    Optional:    false
  kube-api-access-4tw2w:
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
  Normal  Scheduled  39m   default-scheduler  Successfully assigned soc/wazuh-dashboard-5fb9dd66c9-rnz5g to k8-manager
  Normal  Pulled     39m   kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Normal  Created    39m   kubelet            Created container: wazuh-dashboard
  Normal  Started    39m   kubelet            Started container wazuh-dashboard
  Normal  Killing    1s    kubelet            Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-5fb9dd66c9-rnz5g (Current) ---
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:35:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:36:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:37:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
--- Description for wazuh-indexer-0 ---
  wazuh-indexer-conf:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-indexer-conf
    Optional:  false
  kube-api-access-7j4gr:
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
  Normal  Created  60m   kubelet  Created container: wazuh-indexer
  Normal  Started  60m   kubelet  Started container wazuh-indexer
  Normal  Killing  3s    kubelet  Stopping container wazuh-indexer
--- Logs for wazuh-indexer-0 (Current) ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:469) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	... 16 more
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:07,793][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:07,796][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:07,799][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:07,803][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:10,293][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:10,295][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:10,298][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:10,301][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:12,796][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:12,800][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:12,806][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:12,810][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:15,295][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:15,298][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:15,301][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:15,303][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:17,798][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:17,801][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:17,810][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:17,816][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,178][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for actiongroups while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,225][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for config while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,225][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for internalusers while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,226][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for roles while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:19,227][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for rolesmapping while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:20,297][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:20,298][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:20,300][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:20,301][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:22,799][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:23,003][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:23,007][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:23,010][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:25,299][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:25,301][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:25,302][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:25,304][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:27,802][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:27,804][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:27,806][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:27,808][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,501][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh-indexer-0] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,502][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh-indexer-0] Closing DebugSink
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,502][INFO ][o.o.n.Node               ] [wazuh-indexer-0] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,527][INFO ][o.o.n.Node               ] [wazuh-indexer-0] stopped
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,527][INFO ][o.o.n.Node               ] [wazuh-indexer-0] closing ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,537][INFO ][o.o.s.a.i.AuditLogImpl   ] [wazuh-indexer-0] Closing AuditLogImpl
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:37:28,551][INFO ][o.o.n.Node               ] [wazuh-indexer-0] closed
--- Description for wazuh-security-init-v3-5svw7 ---
  PodScheduled                True 
Volumes:
  wazuh-indexer-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-6fsqn:
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
  Normal  Scheduled  2s    default-scheduler  Successfully assigned soc/wazuh-security-init-v3-5svw7 to k8-node-30
--- Logs for wazuh-security-init-v3-5svw7 (Current) ---
Error from server (BadRequest): container "security-init" in pod "wazuh-security-init-v3-5svw7" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Description for wazuh-setup-job-qwkcj ---
  PodScheduled                True 
Volumes:
  config-volume:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-setup-config
    Optional:  false
  kube-api-access-ct9v6:
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
  Normal  Scheduled  3s    default-scheduler  Successfully assigned soc/wazuh-setup-job-qwkcj to k8-node-30
--- Logs for wazuh-setup-job-qwkcj (Current) ---
Error from server (BadRequest): container "setup" in pod "wazuh-setup-job-qwkcj" is waiting to start: ContainerCreating
Failed to fetch current logs
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
