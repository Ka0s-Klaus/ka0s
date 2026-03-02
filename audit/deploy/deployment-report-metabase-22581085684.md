Deployment Report: core/b2b/core-services/metabase
Date: Mon Mar  2 14:48:38 UTC 2026
Trigger: push by santakloud
Namespace: metabase
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS    RESTARTS        AGE   IP              NODE         NOMINATED NODE   READINESS GATES
metabase-57dfc75568-kgs7r   0/1     Running   9 (6m16s ago)   35m   172.16.209.52   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
metabase   ClusterIP   10.104.238.93   <none>        80/TCP    35m

>>> Ingress Status:
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   35m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: metabase ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
metabase-57dfc75568-kgs7r Error
--- Description for metabase-57dfc75568-kgs7r ---
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  35m                   default-scheduler  Successfully assigned metabase/metabase-57dfc75568-kgs7r to k8-node-20
  Normal   Pulling    35m                   kubelet            Pulling image "metabase/metabase:v0.50.23"
  Normal   Pulled     35m                   kubelet            Successfully pulled image "metabase/metabase:v0.50.23" in 10.521s (10.521s including waiting). Image size: 514169031 bytes.
  Warning  Failed     33m (x8 over 35m)     kubelet            Error: secret "metabase-db-secret" not found
  Normal   Created    24m (x6 over 33m)     kubelet            Created container: metabase
  Normal   Started    24m (x6 over 33m)     kubelet            Started container metabase
  Warning  BackOff    4m58s (x87 over 30m)  kubelet            Back-off restarting failed container metabase in pod metabase-57dfc75568-kgs7r_metabase(9f43c879-29d3-473d-8fdc-3f74853a14f1)
  Normal   Pulled     76s (x17 over 35m)    kubelet            Container image "metabase/metabase:v0.50.23" already present on machine
  Warning  Unhealthy  4s (x20 over 32m)     kubelet            Readiness probe failed: HTTP probe failed with statuscode: 503
--- Logs for metabase-57dfc75568-kgs7r (Current) ---
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.sql.SqlUtils.toSQLException(SqlUtils.java:118)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutPooledConnection(C3P0PooledConnectionPool.java:692)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.c3p0.impl.AbstractPoolBackedDataSource.getConnection(AbstractPoolBackedDataSource.java:140)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at clojure.java.jdbc$get_connection.invokeStatic(jdbc.clj:372)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at clojure.java.jdbc$get_connection.invoke(jdbc.clj:274)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at clojure.java.jdbc$db_query_with_resultset_STAR_.invokeStatic(jdbc.clj:1111)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at clojure.java.jdbc$db_query_with_resultset_STAR_.invoke(jdbc.clj:1093)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at clojure.java.jdbc$query.invokeStatic(jdbc.clj:1182)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at clojure.java.jdbc$query.invoke(jdbc.clj:1144)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at clojure.java.jdbc$query.invokeStatic(jdbc.clj:1160)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at clojure.java.jdbc$query.invoke(jdbc.clj:1144)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at metabase.driver.sql_jdbc.connection$can_connect_with_spec_QMARK_.invokeStatic(connection.clj:348)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at metabase.driver.sql_jdbc.connection$can_connect_with_spec_QMARK_.invoke(connection.clj:345)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at clojure.lang.Var.invoke(Var.java:384)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at metabase.db.setup$verify_db_connection$fn__53175.invoke(setup.clj:115)
[pod/metabase-57dfc75568-kgs7r/metabase] 	... 32 more
[pod/metabase-57dfc75568-kgs7r/metabase] Caused by: com.mchange.v2.resourcepool.CannotAcquireResourceException: A ResourcePool could not acquire a resource from its primary factory or source.
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.awaitAvailable(BasicResourcePool.java:1507)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.prelimCheckoutResource(BasicResourcePool.java:644)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.checkoutResource(BasicResourcePool.java:554)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutAndMarkConnectionInUse(C3P0PooledConnectionPool.java:758)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutPooledConnection(C3P0PooledConnectionPool.java:685)
[pod/metabase-57dfc75568-kgs7r/metabase] 	... 45 more
[pod/metabase-57dfc75568-kgs7r/metabase] Caused by: org.postgresql.util.PSQLException: FATAL: no pg_hba.conf entry for host "172.16.209.52", user "metabase_user", database "metabase", no encryption
[pod/metabase-57dfc75568-kgs7r/metabase] 	at org.postgresql.core.v3.ConnectionFactoryImpl.doAuthentication(ConnectionFactoryImpl.java:698)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at org.postgresql.core.v3.ConnectionFactoryImpl.tryConnect(ConnectionFactoryImpl.java:207)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:262)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at org.postgresql.core.ConnectionFactory.openConnection(ConnectionFactory.java:54)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at org.postgresql.jdbc.PgConnection.<init>(PgConnection.java:273)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at org.postgresql.Driver.makeConnection(Driver.java:446)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at org.postgresql.Driver.connect(Driver.java:298)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at java.sql/java.sql.DriverManager.getConnection(Unknown Source)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at java.sql/java.sql.DriverManager.getConnection(Unknown Source)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at metabase.db.data_source.DataSource.getConnection(data_source.clj:78)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.c3p0.WrapperConnectionPoolDataSource.getPooledConnection(WrapperConnectionPoolDataSource.java:161)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool$1PooledConnectionResourcePoolManager.acquireResource(C3P0PooledConnectionPool.java:213)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.doAcquire(BasicResourcePool.java:1176)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.doAcquireAndDecrementPendingAcquiresWithinLockOnSuccess(BasicResourcePool.java:1163)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.access$700(BasicResourcePool.java:44)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool$ScatteredAcquireTask.run(BasicResourcePool.java:1908)
[pod/metabase-57dfc75568-kgs7r/metabase] 	at com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread.run(ThreadPoolAsynchronousRunner.java:696)
[pod/metabase-57dfc75568-kgs7r/metabase] 	Suppressed: org.postgresql.util.PSQLException: FATAL: no pg_hba.conf entry for host "172.16.209.52", user "metabase_user", database "metabase", no encryption
[pod/metabase-57dfc75568-kgs7r/metabase] 		at org.postgresql.core.v3.ConnectionFactoryImpl.doAuthentication(ConnectionFactoryImpl.java:698)
[pod/metabase-57dfc75568-kgs7r/metabase] 		at org.postgresql.core.v3.ConnectionFactoryImpl.tryConnect(ConnectionFactoryImpl.java:207)
[pod/metabase-57dfc75568-kgs7r/metabase] 		at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:271)
[pod/metabase-57dfc75568-kgs7r/metabase] 		... 14 more
[pod/metabase-57dfc75568-kgs7r/metabase] 2026-03-02 14:48:37,723 INFO metabase.core :: Metabase Shutting Down ...
[pod/metabase-57dfc75568-kgs7r/metabase] 2026-03-02 14:48:37,723 INFO metabase.server :: Shutting Down Embedded Jetty Webserver
[pod/metabase-57dfc75568-kgs7r/metabase] 2026-03-02 14:48:37,732 WARN db.liquibase :: ()
[pod/metabase-57dfc75568-kgs7r/metabase] 2026-03-02 14:48:37,733 INFO metabase.core :: Metabase Shutdown COMPLETE
--> Checking Endpoints for Service metabase...
WARNING: Service metabase has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
