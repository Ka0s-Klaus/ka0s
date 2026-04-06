Deployment Report: core/b2b/core-services/runners
Date: Mon Apr  6 20:24:09 UTC 2026
Trigger: push by asantacana1970
Namespace: actions-runner-system
---------------------------------------------------
>>> Pods Status:
NAME                                             READY   STATUS              RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
gha-rs-controller-7dbd968c-p8wzb                 1/1     Running             3 (7d12h ago)   18d     172.16.74.32    k8-manager   <none>           <none>
gha-rs-controller-ka0s-866d687b85-m5w69          1/1     Running             0               4m23s   172.16.209.53   k8-node-20   <none>           <none>
swarm-runners-scaleset-884475f5-listener         1/1     Running             0               9h      172.16.209.52   k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-884475f5-listener    1/1     Running             0               4m22s   172.16.209.13   k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-5hrd8   0/1     ContainerCreating   0               3s      <none>          k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj   0/1     ContainerCreating   0               2s      <none>          k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-dfgbx   0/1     Completed           0               21s     172.16.209.51   k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-fp5qt   1/1     Running             0               20s     172.16.209.63   k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-j8wx2   0/1     ContainerCreating   0               5s      <none>          k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-nqpmk   1/1     Running             0               20s     172.16.209.54   k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-q2m84   1/1     Running             0               47s     172.16.209.57   k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-t82kb   0/1     ContainerCreating   0               3s      <none>          k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-tm8mr   1/1     Running             0               21s     172.16.209.19   k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-wtq2m   1/1     Running             0               5s      172.16.209.43   k8-node-20   <none>           <none>
swarm-runners-scaleset-ka0s-p5l6k-runner-z5rvc   1/1     Running             0               47s     172.16.209.50   k8-node-20   <none>           <none>

>>> Services Status:
No resources found in actions-runner-system namespace.

>>> Ingress Status:
No resources found in actions-runner-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: actions-runner-system ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
swarm-runners-scaleset-b84z5-runner-7bh8k ContainerCreating
swarm-runners-scaleset-b84z5-runner-twx7c ContainerCreating
swarm-runners-scaleset-b84z5-runner-xh8t9 ContainerCreating
swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj ContainerCreating
--- Description for swarm-runners-scaleset-b84z5-runner-7bh8k ---
  Initialized                 True 
  Ready                       False 
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-29tn9:
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  1s    default-scheduler  Successfully assigned actions-runner-system/swarm-runners-scaleset-b84z5-runner-7bh8k to k8-node-20
  Normal  Pulled     0s    kubelet            Container image "ghcr.io/actions/actions-runner@sha256:b57864c9fcda15ea4a270446aa9cfb108b819a26f6e71fc515f6caf6c27989c6" already present on machine
--- Logs for swarm-runners-scaleset-b84z5-runner-7bh8k (Current) ---
Error from server (BadRequest): container "runner" in pod "swarm-runners-scaleset-b84z5-runner-7bh8k" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Description for swarm-runners-scaleset-b84z5-runner-twx7c ---
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-ghvp9:
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  2s    default-scheduler  Successfully assigned actions-runner-system/swarm-runners-scaleset-b84z5-runner-twx7c to k8-node-20
  Normal  Pulled     1s    kubelet            Container image "ghcr.io/actions/actions-runner@sha256:b57864c9fcda15ea4a270446aa9cfb108b819a26f6e71fc515f6caf6c27989c6" already present on machine
  Normal  Created    1s    kubelet            Created container: runner
  Normal  Started    0s    kubelet            Started container runner
--- Logs for swarm-runners-scaleset-b84z5-runner-twx7c (Current) ---
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO CommandSettings] Flag 'check': 'False'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO CommandSettings] Command 'configure': 'False'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO CommandSettings] Command 'remove': 'False'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO CommandSettings] Command 'warmup': 'False'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO CommandSettings] Env arg 'jitconfig': '***'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Bin': '/home/runner/bin'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Root': '/home/runner'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Saved 438 bytes to '/home/runner/.runner'.
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Bin': '/home/runner/bin'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Root': '/home/runner'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Saved 225 bytes to '/home/runner/.credentials'.
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Bin': '/home/runner/bin'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Root': '/home/runner'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Saved 1631 bytes to '/home/runner/.credentials_rsaparams'.
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] No proxy settings were found based on environmental variables (http_proxy/https_proxy/HTTP_PROXY/HTTPS_PROXY)
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Bin': '/home/runner/bin'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Root': '/home/runner'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known config file 'Credentials': '/home/runner/.credentials'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Bin': '/home/runner/bin'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Root': '/home/runner'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known config file 'Runner': '/home/runner/.runner'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Adding extra user agent 'actions-runner-controller/0.10.1' to all HTTP requests.
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationManager] LoadSettings
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsConfigured()
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsConfigured: True
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationManager] Is configured: True
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] Read setting file: 438 chars
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationManager] Settings Loaded
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsServiceConfigured()
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsServiceConfigured: False
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO CommandSettings] Command 'run': 'True'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsConfigured()
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsConfigured: True
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationManager] Is configured: True
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Could not parse the argument value '' for StartupType. Defaulting to Manual
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Set runner startup type - Manual
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO CommandSettings] Flag 'once': 'False'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO CommandSettings] Flag 'once': 'False'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] RunAsync
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Bin': '/home/runner/bin'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Root': '/home/runner'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Work': '/home/runner/_work'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Validating directory permissions for: '/home/runner/_work'
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationManager] LoadMigratedSettings
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsMigratedConfigured()
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsMigratedConfigured: False
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Failed to load migrated settings: No migrated configuration found.
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Falling back to original .runner settings
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Using BrokerMessageListener
[pod/swarm-runners-scaleset-b84z5-runner-twx7c/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener] Using provided settings
--- Description for swarm-runners-scaleset-b84z5-runner-xh8t9 ---
  ContainersReady             True 
  PodScheduled                True 
Volumes:
  kube-api-access-rprpq:
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  3s    default-scheduler  Successfully assigned actions-runner-system/swarm-runners-scaleset-b84z5-runner-xh8t9 to k8-node-20
  Normal  Pulled     2s    kubelet            Container image "ghcr.io/actions/actions-runner@sha256:b57864c9fcda15ea4a270446aa9cfb108b819a26f6e71fc515f6caf6c27989c6" already present on machine
  Normal  Created    2s    kubelet            Created container: runner
  Normal  Started    1s    kubelet            Started container runner
--- Logs for swarm-runners-scaleset-b84z5-runner-xh8t9 (Current) ---
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Root': '/home/runner'
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Work': '/home/runner/_work'
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Validating directory permissions for: '/home/runner/_work'
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationManager] LoadMigratedSettings
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsMigratedConfigured()
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] IsMigratedConfigured: False
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Failed to load migrated settings: No migrated configuration found.
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Falling back to original .runner settings
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO Runner] Using BrokerMessageListener
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener] Using provided settings
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener] {
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener]   "AgentId": 167,
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener]   "AgentName": "swarm-runners-scaleset-b84z5-runner-xh8t9",
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener]   "PoolId": 1,
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener]   "DisableUpdate": true,
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener]   "Ephemeral": true,
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener]   "ServerUrl": "https://pipelinesghubeus24.actions.githubusercontent.com/lK7fnXZQXwyRfRaFHenj51ap3ZAg2OrguEiGnSHjpjkcKqw1dM/",
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener]   "WorkFolder": "_work",
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener]   "UseV2Flow": true,
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener]   "ServerUrlV2": "https://broker.actions.githubusercontent.com/"
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener] }
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener] Loading Credentials
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] HasCredentials()
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] stored True
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO CredentialManager] GetCredentialProvider
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO CredentialManager] Creating type OAuth
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO CredentialManager] Creating credential type: OAuth
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Bin': '/home/runner/bin'
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Root': '/home/runner'
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known config file 'RSACredentials': '/home/runner/.credentials_rsaparams'
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:12Z INFO RSAFileKeyManager] Loading RSA key parameters from file /home/runner/.credentials_rsaparams
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO BrokerMessageListener] Attempt to create session.
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO BrokerMessageListener] Connecting to the Broker Server...
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO ConfigurationStore] HasCredentials()
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO ConfigurationStore] stored True
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO CredentialManager] GetCredentialProvider
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO CredentialManager] Creating type OAuth
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO CredentialManager] Creating credential type: OAuth
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO RSAFileKeyManager] Loading RSA key parameters from file /home/runner/.credentials_rsaparams
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO BrokerMessageListener] VssConnection created
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO BrokerMessageListener] Connecting to the Runner server...
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO RunnerServer] EstablishVssConnection
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO RunnerServer] Establish connection with 100 seconds timeout.
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO GitHubActionsService] Starting operation Location.GetConnectionData
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO RunnerServer] EstablishVssConnection
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO RunnerServer] Establish connection with 60 seconds timeout.
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO GitHubActionsService] Starting operation Location.GetConnectionData
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO RunnerServer] EstablishVssConnection
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO RunnerServer] Establish connection with 60 seconds timeout.
[pod/swarm-runners-scaleset-b84z5-runner-xh8t9/runner] [RUNNER 2026-04-06 20:24:13Z INFO GitHubActionsService] Starting operation Location.GetConnectionData
--- Description for swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj ---
  PodScheduled                True 
Volumes:
  kube-api-access-5fgn6:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  7s    default-scheduler  Successfully assigned actions-runner-system/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj to k8-node-20
  Normal  Pulling    5s    kubelet            Pulling image "ghcr.io/actions/actions-runner:latest"
  Normal  Pulled     4s    kubelet            Successfully pulled image "ghcr.io/actions/actions-runner:latest" in 796ms (1.594s including waiting). Image size: 543804759 bytes.
  Normal  Created    4s    kubelet            Created container: runner
  Normal  Started    3s    kubelet            Started container runner
--- Logs for swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj (Current) ---
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO HostContext] Well known directory 'Work': '/home/runner/_work'
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO Runner] Validating directory permissions for: '/home/runner/_work'
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO ConfigurationManager] LoadMigratedSettings
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO ConfigurationStore] IsMigratedConfigured()
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO ConfigurationStore] IsMigratedConfigured: False
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO Runner] Failed to load migrated settings: No migrated configuration found.
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO Runner] Falling back to original .runner settings
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO Runner] Using BrokerMessageListener
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener] Using provided settings
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener] {
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener]   "AgentId": 63728,
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener]   "AgentName": "swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj",
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener]   "PoolId": 1,
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener]   "DisableUpdate": true,
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener]   "Ephemeral": true,
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener]   "ServerUrl": "https://pipelinesghubeus5.actions.githubusercontent.com/3BC21rPaLQu1TgZCSA3wUKVunFnlFj9yblnHVVy0LRw9blavEZ/",
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener]   "WorkFolder": "_work",
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener]   "UseV2Flow": true,
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener]   "ServerUrlV2": "https://broker.actions.githubusercontent.com/"
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener] }
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO BrokerMessageListener] Loading Credentials
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO ConfigurationStore] HasCredentials()
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO ConfigurationStore] stored True
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO CredentialManager] GetCredentialProvider
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:11Z INFO CredentialManager] Creating type OAuth
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO CredentialManager] Creating credential type: OAuth
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Bin': '/home/runner/bin'
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known directory 'Root': '/home/runner'
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO HostContext] Well known config file 'RSACredentials': '/home/runner/.credentials_rsaparams'
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO RSAFileKeyManager] Loading RSA key parameters from file /home/runner/.credentials_rsaparams
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener] Attempt to create session.
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener] Connecting to the Broker Server...
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] HasCredentials()
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO ConfigurationStore] stored True
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO CredentialManager] GetCredentialProvider
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO CredentialManager] Creating type OAuth
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO CredentialManager] Creating credential type: OAuth
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO RSAFileKeyManager] Loading RSA key parameters from file /home/runner/.credentials_rsaparams
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener] VssConnection created
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO BrokerMessageListener] Connecting to the Runner server...
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO RunnerServer] EstablishVssConnection
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO RunnerServer] Establish connection with 100 seconds timeout.
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO GitHubActionsService] Starting operation Location.GetConnectionData
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO RunnerServer] EstablishVssConnection
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO RunnerServer] Establish connection with 60 seconds timeout.
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO GitHubActionsService] Starting operation Location.GetConnectionData
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO RunnerServer] EstablishVssConnection
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO RunnerServer] Establish connection with 60 seconds timeout.
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:12Z INFO GitHubActionsService] Starting operation Location.GetConnectionData
[pod/swarm-runners-scaleset-ka0s-p5l6k-runner-6jbpj/runner] [RUNNER 2026-04-06 20:24:15Z INFO GitHubActionsService] Finished operation Location.GetConnectionData
--> Checking Endpoints for Service runners...
ℹ️  Service 'runners' not found in namespace 'actions-runner-system'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
