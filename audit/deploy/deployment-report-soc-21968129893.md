Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 23:38:46 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             8 (50m ago)     2d7h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             6 (49m ago)     2d7h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0               2d7h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (24h ago)     2d7h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-79dc76c44b-rfhqr   1/1     Running             0               61m     172.16.74.48    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0               24m     172.16.146.8    k8-node-30   <none>           <none>
wazuh-manager-678cb6d87f-49djh     1/1     Running             1 (50m ago)     6h59m   172.16.209.40   k8-node-20   <none>           <none>
wazuh-security-init-v3-5svw7       1/1     Running             4 (2m24s ago)   61m     172.16.146.50   k8-node-30   <none>           <none>
wazuh-setup-job-rfc5q              0/1     ContainerCreating   0               0s      <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   9h
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        9h
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        9h
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   9h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d11h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-79dc76c44b-rfhqr ---
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:34:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:35:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:42Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:36:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:37:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T23:38:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:23,613][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:23,616][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:23,618][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:26,110][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:27,460][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:27,463][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:27,465][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:28,347][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for actiongroups while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:28,349][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for config while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:28,349][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for internalusers while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:28,349][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for roles while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:28,350][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for rolesmapping while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:28,610][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:28,613][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:28,615][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:28,617][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:31,110][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:31,113][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:31,115][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:31,117][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:33,611][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:33,614][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:33,616][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:33,622][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:35,034][WARN ][o.o.m.f.FsHealthService  ] [wazuh-indexer-0] health check of [/var/lib/wazuh-indexer/nodes/0] took [7003ms] which is above the warn threshold of [5s]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:36,111][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:36,114][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:36,116][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:36,118][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:38,612][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:38,615][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:38,619][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:38,622][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:41,114][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:41,117][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:41,119][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:41,122][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:41,348][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for actiongroups while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:41,351][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for config while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:41,352][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for internalusers while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:41,356][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for roles while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:41,356][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for rolesmapping while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:43,614][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:43,617][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:43,620][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:43,624][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:46,116][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:46,118][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:46,121][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T23:38:46,124][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
wazuh-setup-job-rfc5q ContainerCreating
--- Description for wazuh-setup-job-rfc5q ---
  config-volume:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-setup-config
    Optional:  false
  kube-api-access-g695l:
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
  Normal  Scheduled  1s    default-scheduler  Successfully assigned soc/wazuh-setup-job-rfc5q to k8-manager
  Normal  Pulled     0s    kubelet            Container image "ubuntu:22.04" already present on machine
  Normal  Created    0s    kubelet            Created container: setup
--- Logs for wazuh-setup-job-rfc5q (Current) ---
Error from server (BadRequest): container "setup" in pod "wazuh-setup-job-rfc5q" is waiting to start: ContainerCreating
Failed to fetch current logs
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
