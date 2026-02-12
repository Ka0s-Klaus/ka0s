Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 22:08:21 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (23h ago)   2d6h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (23h ago)   2d6h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0             2d6h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (23h ago)   2d6h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-5fb9dd66c9-rnz5g   1/1     Running             0             10m     172.16.74.46    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0             36m     172.16.146.14   k8-node-30   <none>           <none>
wazuh-manager-678cb6d87f-49djh     1/1     Running             0             5h29m   172.16.209.36   k8-node-20   <none>           <none>
wazuh-security-init-v2-fpfgj       0/1     ContainerCreating   0             0s      <none>          k8-node-30   <none>           <none>
wazuh-setup-job-tpgmt              0/1     ContainerCreating   0             0s      <none>          k8-node-30   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   7h43m
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        7h43m
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        7h43m
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   7h43m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d9h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-5fb9dd66c9-rnz5g ---
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:04:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:05:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:06:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:07:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:08:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:08:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:08:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:08:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:08:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:08:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:08:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:08:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-5fb9dd66c9-rnz5g/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T22:08:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:16,840][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:16,843][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:16,846][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:16,849][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:16,947][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for actiongroups while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:16,948][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for config while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:16,948][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for internalusers while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:16,949][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for roles while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:16,949][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for rolesmapping while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:19,339][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:19,341][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:19,343][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:19,346][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:21,839][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:21,841][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:21,843][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T22:08:21,846][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-security-init-v2-fpfgj ContainerCreating
wazuh-setup-job-tpgmt ContainerCreating
--- Description for wazuh-security-init-v2-fpfgj ---
  PodScheduled                True 
Volumes:
  wazuh-indexer-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-bl2nl:
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
  Normal  Scheduled  1s    default-scheduler  Successfully assigned soc/wazuh-security-init-v2-fpfgj to k8-node-30
--- Logs for wazuh-security-init-v2-fpfgj (Current) ---
Error from server (BadRequest): container "security-init" in pod "wazuh-security-init-v2-fpfgj" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-security-init-v2-fpfgj (Previous) ---
Error from server (BadRequest): previous terminated container "security-init" in pod "wazuh-security-init-v2-fpfgj" not found
Failed to fetch previous logs
--- Description for wazuh-setup-job-tpgmt ---
  PodScheduled                True 
Volumes:
  config-volume:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-setup-config
    Optional:  false
  kube-api-access-2vv6d:
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
  Normal  Scheduled  1s    default-scheduler  Successfully assigned soc/wazuh-setup-job-tpgmt to k8-node-30
--- Logs for wazuh-setup-job-tpgmt (Current) ---
Error from server (BadRequest): container "setup" in pod "wazuh-setup-job-tpgmt" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-setup-job-tpgmt (Previous) ---
Error from server (BadRequest): previous terminated container "setup" in pod "wazuh-setup-job-tpgmt" not found
Failed to fetch previous logs
