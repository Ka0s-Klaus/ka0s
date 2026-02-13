Deployment Report: core/b2b/core-services/soc
Date: Fri Feb 13 07:00:46 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             8 (8h ago)    2d15h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             6 (8h ago)    2d15h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0             2d15h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (32h ago)   2d15h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-79dc76c44b-rfhqr   1/1     Running             0             8h      172.16.74.48    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0             7h46m   172.16.146.8    k8-node-30   <none>           <none>
wazuh-manager-678cb6d87f-49djh     1/1     Running             1 (8h ago)    14h     172.16.209.40   k8-node-20   <none>           <none>
wazuh-security-init-v3-djqz5       0/1     ContainerCreating   0             1s      <none>          k8-node-20   <none>           <none>
wazuh-setup-job-mvj4d              0/1     ContainerCreating   0             1s      <none>          k8-node-20   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   16h
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        16h
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        16h
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   16h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d18h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-79dc76c44b-rfhqr ---
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:56:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:56:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:56:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:56:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:56:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:56:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:56:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:56:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:56:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:57:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:58:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T06:59:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-79dc76c44b-rfhqr/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-13T07:00:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:39,222][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:39,232][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:39,244][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:39,249][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:41,723][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:41,725][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:41,729][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:41,733][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:44,223][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:44,225][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:44,227][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:44,229][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:44,284][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for actiongroups while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:44,285][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for config while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:44,286][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for internalusers while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:44,286][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for roles while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:44,286][WARN ][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh-indexer-0] No data for rolesmapping while retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST]  (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:46,723][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:46,726][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:46,728][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:46,730][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-13T07:00:47,335][ERROR][o.o.s.a.BackendRegistry  ] [wazuh-indexer-0] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
