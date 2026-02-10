Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 15:51:47 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS         AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running            0                7m21s   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running            0                7m21s   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running            0                7m21s   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running            0                7m19s   192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-2bvkc      0/1     Completed          0                7m25s   172.16.74.45    k8-manager   <none>           <none>
wazuh-dashboard-58ccf49468-pct2c   0/1     CrashLoopBackOff   16 (4m54s ago)   62m     172.16.209.23   k8-node-20   <none>           <none>
wazuh-dashboard-948f56664-hvv6q    0/1     Pending            0                60s     <none>          <none>       <none>           <none>
wazuh-indexer-0                    1/1     Running            0                16m     172.16.209.9    k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     1/1     Running            0                62m     172.16.209.7    k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      3h25m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             3h25m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   3h25m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   3h25m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-58ccf49468-pct2c CrashLoopBackOff
wazuh-dashboard-948f56664-hvv6q Pending
--- Description for wazuh-dashboard-58ccf49468-pct2c ---
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-dashboard-certs
    Optional:    false
  kube-api-access-77zpc:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason   Age                   From     Message
  ----     ------   ----                  ----     -------
  Normal   Created  45m (x9 over 62m)     kubelet  Created container: wazuh-dashboard
  Normal   Started  45m (x9 over 62m)     kubelet  Started container wazuh-dashboard
  Normal   Pulled   4m58s (x16 over 62m)  kubelet  Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Warning  BackOff  2m3s (x274 over 62m)  kubelet  Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-58ccf49468-pct2c_soc(d7f8af46-296d-4d2d-b11e-4ec3b0eb3756)
--- Logs for wazuh-dashboard-58ccf49468-pct2c (Current) ---
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] node:internal/fs/utils:351
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     throw err;
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     ^
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] 
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Error: ENOENT: no such file or directory, open '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.openSync (node:fs:596:3)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.readFileSync (node:fs:464:35)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at readYaml (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:37:52)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at exports.getConfigFromFiles (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:62:22)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at exports.loadConfiguration (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/config_loader.js:43:38)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at module.exports (/usr/share/wazuh-dashboard/src/apm.js:54:15)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.<anonymous> (/usr/share/wazuh-dashboard/src/cli/dist.js:33:18)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module._compile (node:internal/modules/cjs/loader:1356:14)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module.load (node:internal/modules/cjs/loader:1197:32) {
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   errno: -2,
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   syscall: 'open',
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   code: 'ENOENT',
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   path: '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] }
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] 
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Node.js v18.19.0
--- Logs for wazuh-dashboard-58ccf49468-pct2c (Previous) ---
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] node:internal/fs/utils:351
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     throw err;
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     ^
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] 
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Error: ENOENT: no such file or directory, open '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.openSync (node:fs:596:3)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.readFileSync (node:fs:464:35)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at readYaml (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:37:52)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at exports.getConfigFromFiles (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:62:22)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at exports.loadConfiguration (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/config_loader.js:43:38)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at module.exports (/usr/share/wazuh-dashboard/src/apm.js:54:15)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Object.<anonymous> (/usr/share/wazuh-dashboard/src/cli/dist.js:33:18)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module._compile (node:internal/modules/cjs/loader:1356:14)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]     at Module.load (node:internal/modules/cjs/loader:1197:32) {
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   errno: -2,
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   syscall: 'open',
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   code: 'ENOENT',
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard]   path: '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] }
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] 
[pod/wazuh-dashboard-58ccf49468-pct2c/wazuh-dashboard] Node.js v18.19.0
--- Description for wazuh-dashboard-948f56664-hvv6q ---
    Optional:    false
  dashboard-conf:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-5cb6d:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason            Age                From               Message
  ----     ------            ----               ----               -------
  Warning  FailedScheduling  61s                default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't match Pod's node affinity/selector, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  19s (x2 over 43s)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) didn't match Pod's node affinity/selector, 2 node(s) were unschedulable. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Logs for wazuh-dashboard-948f56664-hvv6q (Current) ---
--- Logs for wazuh-dashboard-948f56664-hvv6q (Previous) ---
