Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 08:23:04 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS     AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (9h ago)   40h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (9h ago)   40h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0            40h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (9h ago)   40h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-65f848cf6c-ngxp4   1/1     Running             0            39m     172.16.74.59    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0            8m34s   172.16.209.8    k8-node-20   <none>           <none>
wazuh-manager-65657fb74c-rjbff     1/1     Running             0            8m31s   172.16.209.26   k8-node-20   <none>           <none>
wazuh-security-init-zjx8k          0/1     ContainerCreating   0            0s      <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      43h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             28m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   43h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   43h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-65f848cf6c-ngxp4 ---
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:18:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:18:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:19:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:20:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:21:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:22:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:23:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:23:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.Thread.run(Thread.java:1583) [?:?]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:41,376][WARN ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] caught exception while handling client http traffic, closing connection Netty4HttpChannel{localAddress=/172.16.209.8:9200, remoteAddress=/172.16.209.26:45582}
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,920][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,921][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,921][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,921][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,922][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,922][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,922][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,922][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,922][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:22:53,923][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:23:05,431][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
