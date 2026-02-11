Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 09:37:06 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS        RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running       4 (10h ago)   17h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running       2 (10h ago)   17h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running       0             17h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running       2 (19m ago)   17h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v9-q4jq8    0/1     Completed     0             22s     172.16.74.34    k8-manager   <none>           <none>
wazuh-dashboard-d6dc86cd5-gckbb   1/1     Terminating   0             9m57s   172.16.74.28    k8-manager   <none>           <none>
wazuh-dashboard-f885b6567-cndcj   1/1     Running       0             23s     172.16.74.45    k8-manager   <none>           <none>
wazuh-indexer-0                   1/1     Running       0             22s     172.16.209.13   k8-node-20   <none>           <none>
wazuh-manager-5b5bc55b98-scdgm    1/1     Running       0             18s     172.16.209.57   k8-node-20   <none>           <none>
wazuh-security-init-v7-4cwn2      1/1     Running       0             22s     172.16.74.58    k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      21h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             21h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   21h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   21h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-d6dc86cd5-gckbb ---
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:32:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:33:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:34:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:01,004][INFO ][o.o.t.TransportService   ] [wazuh.indexer] Remote clusters initialized successfully.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:01,421][INFO ][o.o.c.c.Coordinator      ] [wazuh.indexer] setting initial configuration to VotingConfiguration{xLQWpSboQOeMZxc3V7hckQ}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:01,796][INFO ][o.o.c.s.MasterService    ] [wazuh.indexer] Tasks batched with key: org.opensearch.cluster.coordination.JoinHelper, count:3 and sample tasks: elected-as-cluster-manager ([1] nodes joined)[{wazuh.indexer}{xLQWpSboQOeMZxc3V7hckQ}{-hzLtkD0RHmFqqBDApflCA}{172.16.209.13}{172.16.209.13:9300}{dimr}{shard_indexing_pressure_enabled=true} elect leader, _BECOME_CLUSTER_MANAGER_TASK_, _FINISH_ELECTION_], term: 1, version: 1, delta: cluster-manager node changed {previous [], current [{wazuh.indexer}{xLQWpSboQOeMZxc3V7hckQ}{-hzLtkD0RHmFqqBDApflCA}{172.16.209.13}{172.16.209.13:9300}{dimr}{shard_indexing_pressure_enabled=true}]}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:01,912][INFO ][o.o.c.c.CoordinationState] [wazuh.indexer] cluster UUID set to [fpmZhJvHSVC69HHNToOPtA]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:01,964][INFO ][o.o.c.s.ClusterApplierService] [wazuh.indexer] cluster-manager node changed {previous [], current [{wazuh.indexer}{xLQWpSboQOeMZxc3V7hckQ}{-hzLtkD0RHmFqqBDApflCA}{172.16.209.13}{172.16.209.13:9300}{dimr}{shard_indexing_pressure_enabled=true}]}, term: 1, version: 1, reason: Publication{term=1, version=1}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:01,972][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:01,973][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:01,974][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Cluster is not recovered yet.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:01,995][INFO ][o.o.i.i.ManagedIndexCoordinator] [wazuh.indexer] Cache cluster manager node onClusterManager time: 1770802621995
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,004][WARN ][o.o.p.c.s.h.ConfigOverridesClusterSettingHandler] [wazuh.indexer] Config override setting update called with empty string. Ignoring.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,012][INFO ][o.o.d.PeerFinder         ] [wazuh.indexer] setting findPeersInterval to [1s] as node commission status = [true] for local node [{wazuh.indexer}{xLQWpSboQOeMZxc3V7hckQ}{-hzLtkD0RHmFqqBDApflCA}{172.16.209.13}{172.16.209.13:9300}{dimr}{shard_indexing_pressure_enabled=true}]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,019][INFO ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] publish_address {172.16.209.13:9200}, bound_addresses {[::]:9200}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,020][INFO ][o.o.n.Node               ] [wazuh.indexer] started
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,021][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Will not attempt to create index .opendistro_security and default configs if they are absent. Use securityadmin to initialize cluster
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,022][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Background init thread started. Install default config?: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,023][INFO ][o.o.s.OpenSearchSecurityPlugin] [wazuh.indexer] 0 OpenSearch Security modules loaded so far: []
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,024][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Wait for cluster to be available ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,048][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Node added: [xLQWpSboQOeMZxc3V7hckQ]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,053][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Add data node to version hash ring: xLQWpSboQOeMZxc3V7hckQ
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,055][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] All nodes with known version: {xLQWpSboQOeMZxc3V7hckQ=ADNodeInfo{version=2.19.4, isEligibleDataNode=true}}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,055][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Rebuild hash ring for realtime with cooldown, nodeChangeEvents size 0
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,056][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Build version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,057][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] Start migrating AD data
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,058][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] AD job index doesn't exist, no need to migrate
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,058][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Init version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,069][INFO ][o.o.g.GatewayService     ] [wazuh.indexer] recovered [0] indices into cluster_state
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,104][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/zm-RiCDESsydivv5040rng]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,229][INFO ][o.o.c.m.MetadataCreateIndexService] [wazuh.indexer] [.opensearch-observability] creating index, cause [api], templates [], shards [1]/[0]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,304][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/zm-RiCDESsydivv5040rng]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,579][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.opensearch-observability][0]]]).
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:02,654][INFO ][o.o.o.i.ObservabilityIndex] [wazuh.indexer] observability:Index .opensearch-observability creation Acknowledged
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,036][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,037][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,038][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,039][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,039][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,040][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,040][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,041][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,041][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:03,042][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:04,517][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:04,554][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:04,562][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:04,566][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:06,445][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:06,912][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:06,920][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:06,925][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:06,929][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-d6dc86cd5-gckbb Terminating
--- Description for wazuh-dashboard-d6dc86cd5-gckbb ---
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-2kg5c:
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
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  10m    default-scheduler  Successfully assigned soc/wazuh-dashboard-d6dc86cd5-gckbb to k8-manager
  Normal  Pulled     9m59s  kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Normal  Created    9m59s  kubelet            Created container: wazuh-dashboard
  Normal  Started    9m59s  kubelet            Started container wazuh-dashboard
  Normal  Killing    24s    kubelet            Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-d6dc86cd5-gckbb (Current) ---
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:35:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:36:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--- Logs for wazuh-dashboard-d6dc86cd5-gckbb (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-d6dc86cd5-gckbb" not found
Failed to fetch previous logs
