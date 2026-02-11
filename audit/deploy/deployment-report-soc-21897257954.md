Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 08:11:14 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS      RESTARTS     AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running     4 (9h ago)   16h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running     2 (9h ago)   16h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running     0            16h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running     0            16h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-2hx8p      0/1     Completed   0            9m49s   172.16.74.49    k8-manager   <none>           <none>
wazuh-dashboard-7c976c74f8-54rsl   1/1     Running     0            16h     172.16.74.9     k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running     2 (9h ago)   16h     172.16.209.14   k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     1/1     Running     2 (9h ago)   17h     172.16.209.38   k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      19h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             19h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   19h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   19h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging SOC: Dumping Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-7c976c74f8-54rsl ---
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:07:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:08:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:09:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:10:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:11:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:11:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:11:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:11:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:11:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:11:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:11:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--> Debugging SOC: Dumping Wazuh Indexer Logs (tail)...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74) [netty-common-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.Thread.run(Thread.java:1583) [?:?]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:10,049][WARN ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] caught exception while handling client http traffic, closing connection Netty4HttpChannel{localAddress=/172.16.209.14:9200, remoteAddress=/172.16.209.38:49468}
[pod/wazuh-indexer-0/wazuh-indexer] io.netty.handler.codec.DecoderException: javax.net.ssl.SSLHandshakeException: Received fatal alert: bad_certificate
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:500) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:290) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,717][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,717][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:11:15,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
