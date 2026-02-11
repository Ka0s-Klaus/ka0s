Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 08:33:55 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS        RESTARTS     AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running       4 (9h ago)   16h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running       2 (9h ago)   16h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running       0            16h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running       0            16h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-d65gl      0/1     Completed     0            5m23s   172.16.209.11   k8-node-20   <none>           <none>
wazuh-dashboard-6d645769fd-nrfpv   1/1     Terminating   0            5m26s   172.16.74.16    k8-manager   <none>           <none>
wazuh-dashboard-dc9db56cf-xq965    1/1     Running       0            2s      172.16.74.37    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running       0            5m23s   172.16.209.6    k8-node-20   <none>           <none>
wazuh-manager-65bdf7bbd7-fx6w8     1/1     Running       0            3m31s   172.16.209.49   k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      20h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             20h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   20h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   20h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-6d645769fd-nrfpv ---
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:30:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,040][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,041][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,041][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,042][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,042][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,042][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,043][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,043][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,043][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:24,043][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,045][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,046][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,046][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,047][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,047][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,047][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,048][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,048][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,048][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:37,048][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:49,564][INFO ][o.o.j.s.JobSweeper       ] [wazuh.indexer] Running full sweep
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:49,864][INFO ][o.o.i.i.PluginVersionSweepCoordinator] [wazuh.indexer] Canceling sweep ism plugin version job
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,051][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,051][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,052][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,052][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,052][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,053][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,053][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,053][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,054][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:33:50,054][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-6d645769fd-nrfpv Terminating
--- Description for wazuh-dashboard-6d645769fd-nrfpv ---
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-9j4lm:
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
  Normal  Scheduled  5m28s  default-scheduler  Successfully assigned soc/wazuh-dashboard-6d645769fd-nrfpv to k8-manager
  Normal  Pulled     5m28s  kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Normal  Created    5m27s  kubelet            Created container: wazuh-dashboard
  Normal  Started    5m27s  kubelet            Started container wazuh-dashboard
  Normal  Killing    3s     kubelet            Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-6d645769fd-nrfpv (Current) ---
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:31:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:32:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:33:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--- Logs for wazuh-dashboard-6d645769fd-nrfpv (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-6d645769fd-nrfpv" not found
Failed to fetch previous logs
