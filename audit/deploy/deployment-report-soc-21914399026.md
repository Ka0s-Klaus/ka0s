Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 16:54:28 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS        RESTARTS        AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running       4 (18h ago)     25h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running       2 (18h ago)     25h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running       0               25h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running       2 (7h37m ago)   25h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-rc2bk        1/1     Running       0               40s   172.16.209.29   k8-node-20   <none>           <none>
wazuh-dashboard-579d87bb6b-9k9sz   1/1     Running       0               41s   172.16.74.58    k8-manager   <none>           <none>
wazuh-dashboard-9d47c57d6-m7n59    1/1     Terminating   0               12m   172.16.74.1     k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running       0               32s   172.16.209.21   k8-node-20   <none>           <none>
wazuh-manager-565968f5d7-xrfjm     1/1     Running       0               31s   172.16.209.45   k8-node-20   <none>           <none>
wazuh-security-init-qr8hg          1/1     Running       0               40s   172.16.209.37   k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      28h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             28h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   28h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   28h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-579d87bb6b-9k9sz ---
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:21Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"applicationConfig\" is disabled."}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:21Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"cspHandler\" is disabled."}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:21Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"dataSource\" is disabled."}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:21Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"workspace\" is disabled."}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:21Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"visTypeXy\" is disabled."}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:21Z","tags":["warning","config","deprecation"],"pid":54,"message":"\"opensearch.requestHeadersWhitelist\" is deprecated and has been replaced by \"opensearch.requestHeadersAllowlist\""}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:21Z","tags":["info","dynamic-config-service"],"pid":54,"message":"registering middleware to inject context to AsyncLocalStorage"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:21Z","tags":["info","plugins-system"],"pid":54,"message":"Setting up [51] plugins: [mapsLegacy,usageCollection,opensearchDashboardsUsageCollection,opensearchDashboardsLegacy,share,opensearchUiShared,legacyExport,embeddable,expressions,data,savedObjects,queryEnhancements,home,dashboard,visualizations,visTypeVega,visTypeTable,visTypeTimeline,visTypeMarkdown,visBuilder,visAugmenter,tileMap,regionMap,inputControlVis,ganttChartDashboards,visualize,apmOss,management,indexPatternManagement,dataSourceManagement,indexManagementDashboards,reportsDashboards,customImportMapDashboards,alertingDashboards,anomalyDetectionDashboards,notificationsDashboards,console,advancedSettings,dataExplorer,bfetch,charts,visTypeVislib,visTypeTimeseries,visTypeTagcloud,visTypeMetric,discover,savedObjectsManagement,securityDashboards,wazuhCore,wazuhCheckUpdates,wazuh]"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:21Z","tags":["info","plugins","queryEnhancements"],"pid":54,"message":"queryEnhancements: Setup complete"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:22Z","tags":["info","dynamic-config-service"],"pid":54,"message":"initiating start()"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:22Z","tags":["info","dynamic-config-service"],"pid":54,"message":"finished start()"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:22Z","tags":["info","savedobjects-service"],"pid":54,"message":"Waiting until all OpenSearch nodes are compatible with OpenSearch Dashboards before starting saved objects migrations..."}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:23Z","tags":["error","savedobjects-service"],"pid":54,"message":"Unable to retrieve version information from OpenSearch nodes."}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:20,543][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Rebuild hash ring for realtime with cooldown, nodeChangeEvents size 0
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:20,543][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Build version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:20,544][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] Start migrating AD data
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:20,545][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] AD job index doesn't exist, no need to migrate
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:20,545][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Init version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:20,562][INFO ][o.o.g.GatewayService     ] [wazuh.indexer] recovered [0] indices into cluster_state
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:20,587][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/283IJA0wQqCUuR6JJ8lRGw]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:20,749][INFO ][o.o.c.m.MetadataCreateIndexService] [wazuh.indexer] [.opensearch-observability] creating index, cause [api], templates [], shards [1]/[0]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:20,883][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/283IJA0wQqCUuR6JJ8lRGw]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,165][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.opensearch-observability][0]]]).
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,231][INFO ][o.o.o.i.ObservabilityIndex] [wazuh.indexer] observability:Index .opensearch-observability creation Acknowledged
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,511][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,512][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,512][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,512][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,512][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,512][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,513][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,513][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,513][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:21,513][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:23,278][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:23,371][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:23,378][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:23,383][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:24,147][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:24,168][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:24,172][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:25,575][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:25,580][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:25,586][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:25,591][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:26,628][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:26,636][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:26,639][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:26,643][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:28,076][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:28,086][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:28,153][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:28,158][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:29,130][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:29,135][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:29,143][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:29,146][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:30,498][INFO ][o.o.m.a.MLModelAutoReDeployer] [wazuh.indexer] Index not found, not performing auto reloading!
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:30,499][INFO ][o.o.m.c.MLCommonsClusterManagerEventListener] [wazuh.indexer] Starting ML sync up job...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:30,575][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:30,579][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:30,585][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:54:30,593][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-9d47c57d6-m7n59 Terminating
--- Description for wazuh-dashboard-9d47c57d6-m7n59 ---
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-xzv7f:
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
  Normal  Scheduled  12m   default-scheduler  Successfully assigned soc/wazuh-dashboard-9d47c57d6-m7n59 to k8-manager
  Normal  Pulled     12m   kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Normal  Created    12m   kubelet            Created container: wazuh-dashboard
  Normal  Started    12m   kubelet            Started container wazuh-dashboard
  Normal  Killing    32s   kubelet            Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-9d47c57d6-m7n59 (Current) ---
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:51:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:51:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:52:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:53:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-9d47c57d6-m7n59/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:54:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--- Logs for wazuh-dashboard-9d47c57d6-m7n59 (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-9d47c57d6-m7n59" not found
Failed to fetch previous logs
