Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 08:30:27 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS      RESTARTS     AGE    IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running     4 (9h ago)   16h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running     2 (9h ago)   16h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running     0            16h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running     0            16h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-d65gl      0/1     Completed   0            115s   172.16.209.11   k8-node-20   <none>           <none>
wazuh-dashboard-6d645769fd-nrfpv   1/1     Running     0            118s   172.16.74.16    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running     0            115s   172.16.209.6    k8-node-20   <none>           <none>
wazuh-manager-65bdf7bbd7-fx6w8     1/1     Running     0            3s     172.16.209.49   k8-node-20   <none>           <none>

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
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"applicationConfig\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"cspHandler\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"dataSource\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"visTypeXy\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"workspace\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["warning","config","deprecation"],"pid":55,"message":"\"opensearch.requestHeadersWhitelist\" is deprecated and has been replaced by \"opensearch.requestHeadersAllowlist\""}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","dynamic-config-service"],"pid":55,"message":"registering middleware to inject context to AsyncLocalStorage"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-system"],"pid":55,"message":"Setting up [51] plugins: [usageCollection,opensearchDashboardsUsageCollection,mapsLegacy,opensearchDashboardsLegacy,share,opensearchUiShared,legacyExport,expressions,data,savedObjects,queryEnhancements,embeddable,dataExplorer,home,dashboard,visualizations,visTypeVega,visTypeTable,visTypeMarkdown,visBuilder,visTypeTimeline,visAugmenter,tileMap,regionMap,inputControlVis,ganttChartDashboards,visualize,apmOss,management,indexPatternManagement,dataSourceManagement,alertingDashboards,reportsDashboards,customImportMapDashboards,indexManagementDashboards,anomalyDetectionDashboards,notificationsDashboards,console,advancedSettings,bfetch,charts,visTypeVislib,visTypeTimeseries,visTypeMetric,visTypeTagcloud,discover,savedObjectsManagement,securityDashboards,wazuhCore,wazuhCheckUpdates,wazuh]"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:49Z","tags":["info","plugins","queryEnhancements"],"pid":55,"message":"queryEnhancements: Setup complete"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:49Z","tags":["info","dynamic-config-service"],"pid":55,"message":"initiating start()"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:49Z","tags":["info","dynamic-config-service"],"pid":55,"message":"finished start()"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:50Z","tags":["info","savedobjects-service"],"pid":55,"message":"Waiting until all OpenSearch nodes are compatible with OpenSearch Dashboards before starting saved objects migrations..."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:50Z","tags":["error","savedobjects-service"],"pid":55,"message":"Unable to retrieve version information from OpenSearch nodes."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:29:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
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
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,969][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,969][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,969][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,969][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,970][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,970][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,970][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,970][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,970][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:08,970][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,972][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,972][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,973][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,973][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,974][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,974][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,975][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,975][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,976][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:30:21,976][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
