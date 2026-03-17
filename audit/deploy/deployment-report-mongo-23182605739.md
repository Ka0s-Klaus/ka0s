Deployment Report: core/b2b/core-services/mongo
Date: Tue Mar 17 07:08:06 UTC 2026
Trigger: push by asantacana1970
Namespace: mongo
---------------------------------------------------
>>> Pods Status:
NAME      READY   STATUS        RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
mongo-0   1/1     Terminating   0          7d18h   172.16.209.42   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)               AGE
mongo   ClusterIP   10.102.57.180   <none>        27017/TCP,10050/TCP   14d

>>> Ingress Status:
No resources found in mongo namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: mongo ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
mongo-0 Terminating
--- Description for mongo-0 ---
  PodScheduled                True 
Volumes:
  mongo-persistent-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  mongo-persistent-storage-mongo-0
    ReadOnly:   false
  kube-api-access-6x9d2:
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
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  1s    kubelet  Stopping container mongo
--- Logs for mongo-0 (Current) ---
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:07:58.550+00:00"},"s":"I",  "c":"NETWORK",  "id":22943,   "ctx":"listener","msg":"Connection accepted","attr":{"remote":"192.168.1.20:49564","uuid":"77a1e892-b418-458d-8eed-5815d0c2b777","connectionId":101290,"connectionCount":1}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:07:58.551+00:00"},"s":"I",  "c":"NETWORK",  "id":22944,   "ctx":"conn101290","msg":"Connection ended","attr":{"remote":"192.168.1.20:49564","uuid":"77a1e892-b418-458d-8eed-5815d0c2b777","connectionId":101290,"connectionCount":0}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.186+00:00"},"s":"I",  "c":"CONTROL",  "id":23377,   "ctx":"SignalHandler","msg":"Received signal","attr":{"signal":15,"error":"Terminated"}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.186+00:00"},"s":"I",  "c":"CONTROL",  "id":23378,   "ctx":"SignalHandler","msg":"Signal was sent by kill(2)","attr":{"pid":0,"uid":0}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.189+00:00"},"s":"I",  "c":"CONTROL",  "id":23381,   "ctx":"SignalHandler","msg":"will terminate after current cmd ends"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.192+00:00"},"s":"I",  "c":"REPL",     "id":4784900, "ctx":"SignalHandler","msg":"Stepping down the ReplicationCoordinator for shutdown","attr":{"waitTimeMillis":15000}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.210+00:00"},"s":"I",  "c":"REPL",     "id":4794602, "ctx":"SignalHandler","msg":"Attempting to enter quiesce mode"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.210+00:00"},"s":"I",  "c":"COMMAND",  "id":4784901, "ctx":"SignalHandler","msg":"Shutting down the MirrorMaestro"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.210+00:00"},"s":"I",  "c":"SHARDING", "id":4784902, "ctx":"SignalHandler","msg":"Shutting down the WaitForMajorityService"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.215+00:00"},"s":"I",  "c":"CONTROL",  "id":4784903, "ctx":"SignalHandler","msg":"Shutting down the LogicalSessionCache"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.230+00:00"},"s":"I",  "c":"NETWORK",  "id":20562,   "ctx":"SignalHandler","msg":"Shutdown: going to close listening sockets"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.231+00:00"},"s":"I",  "c":"NETWORK",  "id":23017,   "ctx":"listener","msg":"removing socket file","attr":{"path":"/tmp/mongodb-27017.sock"}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.231+00:00"},"s":"I",  "c":"NETWORK",  "id":4784905, "ctx":"SignalHandler","msg":"Shutting down the global connection pool"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.232+00:00"},"s":"I",  "c":"CONTROL",  "id":4784906, "ctx":"SignalHandler","msg":"Shutting down the FlowControlTicketholder"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.232+00:00"},"s":"I",  "c":"-",        "id":20520,   "ctx":"SignalHandler","msg":"Stopping further Flow Control ticket acquisitions."}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.233+00:00"},"s":"I",  "c":"CONTROL",  "id":4784908, "ctx":"SignalHandler","msg":"Shutting down the PeriodicThreadToAbortExpiredTransactions"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.234+00:00"},"s":"I",  "c":"REPL",     "id":4784909, "ctx":"SignalHandler","msg":"Shutting down the ReplicationCoordinator"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.234+00:00"},"s":"I",  "c":"SHARDING", "id":4784910, "ctx":"SignalHandler","msg":"Shutting down the ShardingInitializationMongoD"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.235+00:00"},"s":"I",  "c":"REPL",     "id":4784911, "ctx":"SignalHandler","msg":"Enqueuing the ReplicationStateTransitionLock for shutdown"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.235+00:00"},"s":"I",  "c":"-",        "id":4784912, "ctx":"SignalHandler","msg":"Killing all operations for shutdown"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.235+00:00"},"s":"I",  "c":"-",        "id":4695300, "ctx":"SignalHandler","msg":"Interrupted all currently running operations","attr":{"opsKilled":3}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.235+00:00"},"s":"I",  "c":"TENANT_M", "id":5093807, "ctx":"SignalHandler","msg":"Shutting down all TenantMigrationAccessBlockers on global shutdown"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.235+00:00"},"s":"I",  "c":"COMMAND",  "id":4784913, "ctx":"SignalHandler","msg":"Shutting down all open transactions"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.235+00:00"},"s":"I",  "c":"REPL",     "id":4784914, "ctx":"SignalHandler","msg":"Acquiring the ReplicationStateTransitionLock for shutdown"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.235+00:00"},"s":"I",  "c":"INDEX",    "id":4784915, "ctx":"SignalHandler","msg":"Shutting down the IndexBuildsCoordinator"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.235+00:00"},"s":"I",  "c":"REPL",     "id":4784916, "ctx":"SignalHandler","msg":"Reacquiring the ReplicationStateTransitionLock for shutdown"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.235+00:00"},"s":"I",  "c":"REPL",     "id":4784917, "ctx":"SignalHandler","msg":"Attempting to mark clean shutdown"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.236+00:00"},"s":"I",  "c":"NETWORK",  "id":4784918, "ctx":"SignalHandler","msg":"Shutting down the ReplicaSetMonitor"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.237+00:00"},"s":"I",  "c":"SHARDING", "id":4784921, "ctx":"SignalHandler","msg":"Shutting down the MigrationUtilExecutor"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.240+00:00"},"s":"I",  "c":"ASIO",     "id":22582,   "ctx":"MigrationUtil-TaskExecutor","msg":"Killing all outstanding egress activity."}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.240+00:00"},"s":"I",  "c":"COMMAND",  "id":4784923, "ctx":"SignalHandler","msg":"Shutting down the ServiceEntryPoint"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.240+00:00"},"s":"I",  "c":"CONTROL",  "id":4784927, "ctx":"SignalHandler","msg":"Shutting down the HealthLog"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.240+00:00"},"s":"I",  "c":"CONTROL",  "id":4784928, "ctx":"SignalHandler","msg":"Shutting down the TTL monitor"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.241+00:00"},"s":"I",  "c":"INDEX",    "id":3684100, "ctx":"SignalHandler","msg":"Shutting down TTL collection monitor thread"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.241+00:00"},"s":"I",  "c":"INDEX",    "id":3684101, "ctx":"SignalHandler","msg":"Finished shutting down TTL collection monitor thread"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.241+00:00"},"s":"I",  "c":"CONTROL",  "id":4784929, "ctx":"SignalHandler","msg":"Acquiring the global lock for shutdown"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.241+00:00"},"s":"I",  "c":"CONTROL",  "id":4784930, "ctx":"SignalHandler","msg":"Shutting down the storage engine"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.242+00:00"},"s":"I",  "c":"STORAGE",  "id":22320,   "ctx":"SignalHandler","msg":"Shutting down journal flusher thread"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.243+00:00"},"s":"I",  "c":"STORAGE",  "id":22321,   "ctx":"SignalHandler","msg":"Finished shutting down journal flusher thread"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.243+00:00"},"s":"I",  "c":"STORAGE",  "id":22322,   "ctx":"SignalHandler","msg":"Shutting down checkpoint thread"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.243+00:00"},"s":"I",  "c":"STORAGE",  "id":22323,   "ctx":"SignalHandler","msg":"Finished shutting down checkpoint thread"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.243+00:00"},"s":"I",  "c":"STORAGE",  "id":22261,   "ctx":"SignalHandler","msg":"Timestamp monitor shutting down"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.244+00:00"},"s":"I",  "c":"STORAGE",  "id":20282,   "ctx":"SignalHandler","msg":"Deregistering all the collections"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.245+00:00"},"s":"I",  "c":"STORAGE",  "id":22317,   "ctx":"SignalHandler","msg":"WiredTigerKVEngine shutting down"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.245+00:00"},"s":"I",  "c":"STORAGE",  "id":22318,   "ctx":"SignalHandler","msg":"Shutting down session sweeper thread"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.245+00:00"},"s":"I",  "c":"STORAGE",  "id":22319,   "ctx":"SignalHandler","msg":"Finished shutting down session sweeper thread"}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.246+00:00"},"s":"I",  "c":"STORAGE",  "id":4795902, "ctx":"SignalHandler","msg":"Closing WiredTiger","attr":{"closeConfig":"leak_memory=true,"}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.271+00:00"},"s":"I",  "c":"STORAGE",  "id":22430,   "ctx":"SignalHandler","msg":"WiredTiger message","attr":{"message":"[1773731286:271662][1:0x7b9d8b496700], close_ckpt: [WT_VERB_CHECKPOINT_PROGRESS] saving checkpoint snapshot min: 30755, snapshot max: 30755 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 7"}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.765+00:00"},"s":"I",  "c":"STORAGE",  "id":22430,   "ctx":"SignalHandler","msg":"WiredTiger message","attr":{"message":"[1773731286:765278][1:0x7b9d8b496700], WT_CONNECTION.close: [WT_VERB_RECOVERY_PROGRESS] shutdown checkpoint has successfully finished and ran for 513 milliseconds"}}
[pod/mongo-0/mongo] {"t":{"$date":"2026-03-17T07:08:06.766+00:00"},"s":"I",  "c":"STORAGE",  "id":22430,   "ctx":"SignalHandler","msg":"WiredTiger message","attr":{"message":"[1773731286:766014][1:0x7b9d8b496700], WT_CONNECTION.close: [WT_VERB_RECOVERY_PROGRESS] shutdown was completed successfully and took 519ms, including 0ms for the rollback to stable, and 513ms for the checkpoint."}}
--> Checking Endpoints for Service mongo...
WARNING: Service mongo has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
