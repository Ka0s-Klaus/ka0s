Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 09:21:31 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS        RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running       4 (10h ago)   17h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running       2 (10h ago)   17h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running       0             17h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  0/2     Unknown       0             17h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v8-x54md     0/1     Error         2 (21s ago)   26s   172.16.74.1     k8-manager   <none>           <none>
wazuh-dashboard-869db555bf-hkv2z   1/1     Running       0             27s   172.16.74.48    k8-manager   <none>           <none>
wazuh-dashboard-c4765547-46h4h     1/1     Terminating   0             38m   172.16.74.22    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running       0             25s   172.16.209.47   k8-node-20   <none>           <none>
wazuh-manager-66b7cf95bd-trqxn     1/1     Running       0             22s   172.16.209.16   k8-node-20   <none>           <none>
wazuh-security-init-v5-m7jtw       1/1     Running       0             26s   172.16.74.46    k8-manager   <none>           <none>

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
--- Logs for wazuh-dashboard-869db555bf-hkv2z ---
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:20Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"applicationConfig\" is disabled."}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:20Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"cspHandler\" is disabled."}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:20Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"dataSource\" is disabled."}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:20Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"visTypeXy\" is disabled."}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:20Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"workspace\" is disabled."}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:21Z","tags":["warning","config","deprecation"],"pid":55,"message":"\"opensearch.requestHeadersWhitelist\" is deprecated and has been replaced by \"opensearch.requestHeadersAllowlist\""}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:21Z","tags":["info","dynamic-config-service"],"pid":55,"message":"registering middleware to inject context to AsyncLocalStorage"}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:21Z","tags":["info","plugins-system"],"pid":55,"message":"Setting up [51] plugins: [usageCollection,opensearchDashboardsUsageCollection,opensearchDashboardsLegacy,mapsLegacy,opensearchUiShared,share,legacyExport,embeddable,expressions,data,savedObjects,queryEnhancements,home,dashboard,visualizations,visTypeTimeline,visTypeVega,visTypeTable,visTypeMarkdown,visBuilder,visAugmenter,tileMap,regionMap,inputControlVis,ganttChartDashboards,visualize,apmOss,management,indexPatternManagement,dataSourceManagement,reportsDashboards,indexManagementDashboards,customImportMapDashboards,anomalyDetectionDashboards,alertingDashboards,notificationsDashboards,console,advancedSettings,dataExplorer,charts,visTypeMetric,visTypeVislib,visTypeTimeseries,visTypeTagcloud,discover,savedObjectsManagement,securityDashboards,wazuhCore,wazuhCheckUpdates,wazuh,bfetch]"}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:21Z","tags":["info","plugins","queryEnhancements"],"pid":55,"message":"queryEnhancements: Setup complete"}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:22Z","tags":["info","dynamic-config-service"],"pid":55,"message":"initiating start()"}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:22Z","tags":["info","dynamic-config-service"],"pid":55,"message":"finished start()"}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:22Z","tags":["info","savedobjects-service"],"pid":55,"message":"Waiting until all OpenSearch nodes are compatible with OpenSearch Dashboards before starting saved objects migrations..."}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:22Z","tags":["error","savedobjects-service"],"pid":55,"message":"Unable to retrieve version information from OpenSearch nodes."}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-869db555bf-hkv2z/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:25,838][INFO ][o.o.t.TransportService   ] [wazuh.indexer] Remote clusters initialized successfully.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:26,466][INFO ][o.o.c.c.Coordinator      ] [wazuh.indexer] setting initial configuration to VotingConfiguration{-R-nezK1Tlq1Tsct7krj2g}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:27,262][INFO ][o.o.c.s.MasterService    ] [wazuh.indexer] Tasks batched with key: org.opensearch.cluster.coordination.JoinHelper, count:3 and sample tasks: elected-as-cluster-manager ([1] nodes joined)[{wazuh.indexer}{-R-nezK1Tlq1Tsct7krj2g}{8pBrR1zJQpmC1jiooN2POA}{172.16.209.47}{172.16.209.47:9300}{dimr}{shard_indexing_pressure_enabled=true} elect leader, _BECOME_CLUSTER_MANAGER_TASK_, _FINISH_ELECTION_], term: 1, version: 1, delta: cluster-manager node changed {previous [], current [{wazuh.indexer}{-R-nezK1Tlq1Tsct7krj2g}{8pBrR1zJQpmC1jiooN2POA}{172.16.209.47}{172.16.209.47:9300}{dimr}{shard_indexing_pressure_enabled=true}]}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:27,635][INFO ][o.o.c.c.CoordinationState] [wazuh.indexer] cluster UUID set to [jsoAOcdKSc2WE6QzE8W-bg]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,010][INFO ][o.o.c.s.ClusterApplierService] [wazuh.indexer] cluster-manager node changed {previous [], current [{wazuh.indexer}{-R-nezK1Tlq1Tsct7krj2g}{8pBrR1zJQpmC1jiooN2POA}{172.16.209.47}{172.16.209.47:9300}{dimr}{shard_indexing_pressure_enabled=true}]}, term: 1, version: 1, reason: Publication{term=1, version=1}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,032][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,033][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,033][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Cluster is not recovered yet.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,058][INFO ][o.o.i.i.ManagedIndexCoordinator] [wazuh.indexer] Cache cluster manager node onClusterManager time: 1770801688058
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,066][WARN ][o.o.p.c.s.h.ConfigOverridesClusterSettingHandler] [wazuh.indexer] Config override setting update called with empty string. Ignoring.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,074][INFO ][o.o.d.PeerFinder         ] [wazuh.indexer] setting findPeersInterval to [1s] as node commission status = [true] for local node [{wazuh.indexer}{-R-nezK1Tlq1Tsct7krj2g}{8pBrR1zJQpmC1jiooN2POA}{172.16.209.47}{172.16.209.47:9300}{dimr}{shard_indexing_pressure_enabled=true}]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,078][INFO ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] publish_address {172.16.209.47:9200}, bound_addresses {[::]:9200}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,078][INFO ][o.o.n.Node               ] [wazuh.indexer] started
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,079][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Will not attempt to create index .opendistro_security and default configs if they are absent. Use securityadmin to initialize cluster
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,080][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Background init thread started. Install default config?: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,081][INFO ][o.o.s.OpenSearchSecurityPlugin] [wazuh.indexer] 0 OpenSearch Security modules loaded so far: []
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,081][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Wait for cluster to be available ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,245][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Node added: [-R-nezK1Tlq1Tsct7krj2g]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,260][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Add data node to version hash ring: -R-nezK1Tlq1Tsct7krj2g
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,264][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] All nodes with known version: {-R-nezK1Tlq1Tsct7krj2g=ADNodeInfo{version=2.19.4, isEligibleDataNode=true}}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,264][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Rebuild hash ring for realtime with cooldown, nodeChangeEvents size 0
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,265][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Build version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,266][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] Start migrating AD data
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,267][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] AD job index doesn't exist, no need to migrate
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,268][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Init version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,283][INFO ][o.o.g.GatewayService     ] [wazuh.indexer] recovered [0] indices into cluster_state
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,304][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/4bunwXOYTl6vU6VYw94yYw]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,418][INFO ][o.o.c.m.MetadataCreateIndexService] [wazuh.indexer] [.opensearch-observability] creating index, cause [api], templates [], shards [1]/[0]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:28,780][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/4bunwXOYTl6vU6VYw94yYw]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,092][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,093][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,093][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,094][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,095][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,095][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,096][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,096][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,097][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,097][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:29,984][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.opensearch-observability][0]]]).
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:30,121][INFO ][o.o.o.i.ObservabilityIndex] [wazuh.indexer] observability:Index .opensearch-observability creation Acknowledged
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:30,157][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:30,220][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:30,224][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:30,228][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:32,481][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:32,489][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:32,495][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:32,501][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:21:33,023][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-jd2pk Unknown
wazuh-certs-generator-v8-x54md Error
wazuh-dashboard-c4765547-46h4h Terminating
--- Description for wazuh-agent-jd2pk ---
    SizeLimit:  <unset>
  kube-api-access-8bn5t:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/disk-pressure:NoSchedule op=Exists
                             node.kubernetes.io/memory-pressure:NoSchedule op=Exists
                             node.kubernetes.io/network-unavailable:NoSchedule op=Exists
                             node.kubernetes.io/not-ready:NoExecute op=Exists
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type    Reason          Age   From     Message
  ----    ------          ----  ----     -------
  Normal  SandboxChanged  3m8s  kubelet  Pod sandbox changed, it will be killed and re-created.
--- Logs for wazuh-agent-jd2pk (Current) ---
[pod/wazuh-agent-jd2pk/config-init] unable to retrieve container logs for containerd://b6826e5c4b290f886d6d15e2b8a5211c2378820f1de6404651491a011bff2ad3[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:04:32 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:05:56 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:06:56 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:08:20 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:09:20 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:10:45 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:11:45 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:13:09 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:14:09 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:15:33 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:16:33 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:17:57 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:18:57 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:20:21 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:21:21 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:22:45 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:23:45 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:25:09 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:26:09 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:27:33 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:28:33 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:29:57 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:30:57 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:32:21 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:33:21 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:34:45 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:35:45 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:37:09 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:38:09 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:39:33 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:40:33 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:41:57 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:42:57 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/dns-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/files.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/http2-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/http-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/ipsec-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/kerberos-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/modbus-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/mqtt-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/nfs-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/ntp-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/quic-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/rfb-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/smb-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/smtp-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/ssh-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/stream-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/tls-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loaded 435 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Disabled 15 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Enabled 0 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Modified 0 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Dropped 0 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Enabled 0 rules for flowbit dependencies.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Creating directory /var/lib/suricata/rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Backing up current rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Writing rules to /var/lib/suricata/rules/suricata.rules: total: 435; enabled: 373; added: 435; removed 0; modified: 0
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Writing /var/lib/suricata/rules/classification.config
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Testing with suricata -T.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:18 - <Info> -- Running suricatasc -c reload-rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:18 - <Error> -- Reload command failed: b'Unable to connect socket to /var/run/suricata/suricata-command.socket: ioerror: `No such file or directory (os error 2)`\n'
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:18 - <Info> -- Done.
[pod/wazuh-agent-jd2pk/suricata] Launching Suricata...
[pod/wazuh-agent-jd2pk/suricata] Notice: suricata: This is Suricata version 8.0.3 RELEASE running in SYSTEM mode
[pod/wazuh-agent-jd2pk/suricata] Info: cpu: CPUs/cores online: 4
[pod/wazuh-agent-jd2pk/suricata] Info: suricata: Setting engine mode to IDS mode by default
[pod/wazuh-agent-jd2pk/suricata] Info: suricata: No 'host-mode': suricata is in IDS mode, using default setting 'sniffer-only'
[pod/wazuh-agent-jd2pk/suricata] Info: logopenfile: eve-log output device (regular) initialized: eve.json
[pod/wazuh-agent-jd2pk/suricata] Warning: output-json-alert: Found deprecated eve-log.alert flag "http", this flag has no effect
[pod/wazuh-agent-jd2pk/suricata] Warning: output-json-alert: Found deprecated eve-log.alert flag "tls", this flag has no effect
[pod/wazuh-agent-jd2pk/suricata] Warning: output-json-alert: Found deprecated eve-log.alert flag "ssh", this flag has no effect
[pod/wazuh-agent-jd2pk/suricata] Warning: output-json-alert: Found deprecated eve-log.alert flag "smtp", this flag has no effect
[pod/wazuh-agent-jd2pk/suricata] Warning: counters: stats are enabled but no loggers are active
[pod/wazuh-agent-jd2pk/suricata] Info: detect: 1 rule files processed. 373 rules successfully loaded, 0 rules failed, 0 rules skipped
[pod/wazuh-agent-jd2pk/suricata] Info: threshold-config: Threshold config parsed: 0 rule(s) found
[pod/wazuh-agent-jd2pk/suricata] Info: detect: 373 signatures processed. 0 are IP-only rules, 0 are inspecting packet payload, 191 inspect application layer, 110 are decoder event only
[pod/wazuh-agent-jd2pk/suricata] Info: runmodes: enp0s25: creating 4 threads
[pod/wazuh-agent-jd2pk/suricata] Info: ioctl: enp0s25: MTU 1500
[pod/wazuh-agent-jd2pk/suricata] Notice: threads: Threads created -> W: 4 FM: 1 FR: 1   Engine started.
[pod/wazuh-agent-jd2pk/suricata] Notice: suricata: Signal Received.  Stopping engine.
[pod/wazuh-agent-jd2pk/suricata] Info: suricata: time elapsed 25066.496s
--- Logs for wazuh-agent-jd2pk (Previous) ---
Error from server (BadRequest): previous terminated container "config-init" in pod "wazuh-agent-jd2pk" not found
Failed to fetch previous logs
--- Description for wazuh-certs-generator-v8-x54md ---
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
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  32s                default-scheduler  Successfully assigned soc/wazuh-certs-generator-v8-x54md to k8-manager
  Normal   Pulled     30s                kubelet            Successfully pulled image "bitnami/kubectl:latest" in 692ms (692ms including waiting). Image size: 76128966 bytes.
  Normal   Pulled     28s                kubelet            Successfully pulled image "bitnami/kubectl:latest" in 608ms (608ms including waiting). Image size: 76128966 bytes.
  Normal   Pulling    10s (x3 over 31s)  kubelet            Pulling image "bitnami/kubectl:latest"
  Normal   Created    9s (x3 over 30s)   kubelet            Created container: cert-generator
  Normal   Started    9s (x3 over 30s)   kubelet            Started container cert-generator
  Warning  BackOff    9s (x3 over 26s)   kubelet            Back-off restarting failed container cert-generator in pod wazuh-certs-generator-v8-x54md_soc(feb2bbd7-e3aa-4c1a-8ce1-92984f49f7b4)
  Normal   Pulled     9s                 kubelet            Successfully pulled image "bitnami/kubectl:latest" in 797ms (797ms including waiting). Image size: 76128966 bytes.
--- Logs for wazuh-certs-generator-v8-x54md (Current) ---
[pod/wazuh-certs-generator-v8-x54md/cert-generator] >>> Wazuh Cert Generator v8 <<<
[pod/wazuh-certs-generator-v8-x54md/cert-generator] mkdir: cannot create directory '/certs': Permission denied
--- Logs for wazuh-certs-generator-v8-x54md (Previous) ---
[pod/wazuh-certs-generator-v8-x54md/cert-generator] unable to retrieve container logs for containerd://f1d088a731c015109a9bb86c06b7164b55150340fa58d2e37834260c6ab15a64--- Description for wazuh-dashboard-c4765547-46h4h ---
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-cxsz5:
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
  Normal  Scheduled  38m   default-scheduler  Successfully assigned soc/wazuh-dashboard-c4765547-46h4h to k8-manager
  Normal  Pulled     38m   kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Normal  Created    38m   kubelet            Created container: wazuh-dashboard
  Normal  Started    38m   kubelet            Started container wazuh-dashboard
  Normal  Killing    32s   kubelet            Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-c4765547-46h4h (Current) ---
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:19:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:20:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:21:37Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: unable to verify the first certificate"}
--- Logs for wazuh-dashboard-c4765547-46h4h (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-c4765547-46h4h" not found
Failed to fetch previous logs
