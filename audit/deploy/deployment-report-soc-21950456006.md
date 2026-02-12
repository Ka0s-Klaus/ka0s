Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 14:25:57 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS      RESTARTS      AGE     IP             NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running     6 (15h ago)   46h     192.168.1.20   k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running     4 (15h ago)   46h     192.168.1.40   k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running     0             46h     192.168.1.10   k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running     4 (15h ago)   46h     192.168.1.30   k8-node-30   <none>           <none>
wazuh-dashboard-7fbd59fd8-tmkhw   0/1     Error       3 (30s ago)   62s     172.16.74.37   k8-manager   <none>           <none>
wazuh-manager-6969d7d459-fcb5p    0/1     Pending     0             61s     <none>         <none>       <none>           <none>
wazuh-security-init-s8hmg         1/1     Running     0             146m    172.16.74.55   k8-manager   <none>           <none>
wazuh-setup-job-6phbb             0/1     Completed   0             3m56s   172.16.209.5   k8-node-20   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   62s
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        62s
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        62s
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   62s

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d1h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-7fbd59fd8-tmkhw ---
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] node:internal/fs/utils:351
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     throw err;
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     ^
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] 
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] Error: ENOENT: no such file or directory, open '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Object.openSync (node:fs:596:3)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Object.readFileSync (node:fs:464:35)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at readYaml (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:37:52)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at exports.getConfigFromFiles (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:62:22)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at exports.loadConfiguration (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/config_loader.js:43:38)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at module.exports (/usr/share/wazuh-dashboard/src/apm.js:54:15)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Object.<anonymous> (/usr/share/wazuh-dashboard/src/cli/dist.js:33:18)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Module._compile (node:internal/modules/cjs/loader:1356:14)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Module.load (node:internal/modules/cjs/loader:1197:32) {
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]   errno: -2,
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]   syscall: 'open',
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]   code: 'ENOENT',
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]   path: '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] }
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] 
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] Node.js v18.19.0
--> Debugging: Checking for Wazuh Indexer Logs...
error: error executing jsonpath "{.items[0].metadata.name}": Error executing template: array index out of bounds: index 0, length 0. Printing more information for debugging the template:
	template was:
		{.items[0].metadata.name}
	object given to jsonpath engine was:
		map[string]interface {}{"apiVersion":"v1", "items":[]interface {}{}, "kind":"List", "metadata":map[string]interface {}{"resourceVersion":""}}


No wazuh-indexer pod found.
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-7fbd59fd8-tmkhw Error
wazuh-manager-6969d7d459-fcb5p Pending
--- Description for wazuh-dashboard-7fbd59fd8-tmkhw ---
    SecretName:  wazuh-dashboard-certs
    Optional:    false
  kube-api-access-psmzp:
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
  Type     Reason     Age               From               Message
  ----     ------     ----              ----               -------
  Normal   Scheduled  62s               default-scheduler  Successfully assigned soc/wazuh-dashboard-7fbd59fd8-tmkhw to k8-manager
  Normal   Pulled     6s (x4 over 62s)  kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Normal   Created    6s (x4 over 62s)  kubelet            Created container: wazuh-dashboard
  Normal   Started    6s (x4 over 61s)  kubelet            Started container wazuh-dashboard
  Warning  BackOff    2s (x4 over 51s)  kubelet            Back-off restarting failed container wazuh-dashboard in pod wazuh-dashboard-7fbd59fd8-tmkhw_soc(e009e05c-c571-403d-883d-3995ef97f808)
--- Logs for wazuh-dashboard-7fbd59fd8-tmkhw (Current) ---
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] node:internal/fs/utils:351
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     throw err;
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     ^
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] 
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] Error: ENOENT: no such file or directory, open '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Object.openSync (node:fs:596:3)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Object.readFileSync (node:fs:464:35)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at readYaml (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:37:52)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at exports.getConfigFromFiles (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/utils/read_config.js:62:22)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at exports.loadConfiguration (/usr/share/wazuh-dashboard/node_modules/@osd/apm-config-loader/target/config_loader.js:43:38)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at module.exports (/usr/share/wazuh-dashboard/src/apm.js:54:15)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Object.<anonymous> (/usr/share/wazuh-dashboard/src/cli/dist.js:33:18)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Module._compile (node:internal/modules/cjs/loader:1356:14)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]     at Module.load (node:internal/modules/cjs/loader:1197:32) {
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]   errno: -2,
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]   syscall: 'open',
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]   code: 'ENOENT',
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard]   path: '/usr/share/wazuh-dashboard/config/opensearch_dashboards.yml'
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] }
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] 
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] Node.js v18.19.0
--- Logs for wazuh-dashboard-7fbd59fd8-tmkhw (Previous) ---
[pod/wazuh-dashboard-7fbd59fd8-tmkhw/wazuh-dashboard] unable to retrieve container logs for containerd://2c444451c2d2b4c7630660a3ae09f09bdb2b473f4d4bf8f2810718172d527152--- Description for wazuh-manager-6969d7d459-fcb5p ---
    ClaimName:  wazuh-manager-data
    ReadOnly:   false
  wazuh-manager-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-manager-certs
    Optional:    false
  kube-api-access-l2vl6:
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
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  63s   default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
--- Logs for wazuh-manager-6969d7d459-fcb5p (Current) ---
--- Logs for wazuh-manager-6969d7d459-fcb5p (Previous) ---
