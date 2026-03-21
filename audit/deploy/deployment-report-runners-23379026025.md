Deployment Report: core/b2b/core-services/runners
Date: Sat Mar 21 11:50:57 UTC 2026
Trigger: push by ka0score
Namespace: actions-runner-system
---------------------------------------------------
>>> Pods Status:
NAME                                        READY   STATUS        RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
gha-rs-controller-7dbd968c-p8wzb            1/1     Running       1 (28h ago)   2d13h   172.16.74.60    k8-manager   <none>           <none>
swarm-runners-scaleset-884475f5-listener    1/1     Terminating   0             28h     172.16.209.10   k8-node-20   <none>           <none>
swarm-runners-scaleset-97tpt-runner-7k42v   1/1     Running       0             5m30s   172.16.209.8    k8-node-20   <none>           <none>
swarm-runners-scaleset-97tpt-runner-9kwjv   1/1     Running       0             102s    172.16.209.44   k8-node-20   <none>           <none>
swarm-runners-scaleset-97tpt-runner-c7dl2   1/1     Running       0             3m16s   172.16.209.50   k8-node-20   <none>           <none>

>>> Services Status:
No resources found in actions-runner-system namespace.

>>> Ingress Status:
No resources found in actions-runner-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: actions-runner-system ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
swarm-runners-scaleset-884475f5-listener Terminating
--- Description for swarm-runners-scaleset-884475f5-listener ---
  PodScheduled                True 
Volumes:
  listener-config:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  swarm-runners-scaleset-884475f5-listener-config
    Optional:    false
  kube-api-access-fdv8b:
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
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  1s    kubelet  Stopping container listener
--- Logs for swarm-runners-scaleset-884475f5-listener (Current) ---
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.listener	Getting next message	{"lastMessageID": 100006140}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.listener	Processing message	{"messageId": 100006141, "messageType": "RunnerScaleSetJobMessages"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.listener	New runner scale set statistics.	{"statistics": {"totalAvailableJobs":0,"totalAcquiredJobs":0,"totalAssignedJobs":2,"totalRunningJobs":2,"totalRegisteredRunners":3,"totalBusyRunners":2,"totalIdleRunners":1}}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.listener	Job started message received.	{"RequestId": 0, "RunnerId": 54170}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.listener	Deleting last message	{"lastMessageID": 100006141}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.worker.kubernetesworker	Updating job info for the runner	{"runnerName": "swarm-runners-scaleset-97tpt-runner-c7dl2", "ownerName": "Ka0s-Klaus", "repoName": "ka0s", "workflowRef": "Ka0s-Klaus/ka0s/.github/workflows/cd-core-services.yml@refs/heads/main", "workflowRunId": 23379026025, "jobDisplayName": "Deploy Changed Services", "requestId": 0}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.worker.kubernetesworker	Updating ephemeral runner with merge patch	{"json": "{\"status\":{\"jobDisplayName\":\"Deploy Changed Services\",\"jobRepositoryName\":\"Ka0s-Klaus/ka0s\",\"jobWorkflowRef\":\"Ka0s-Klaus/ka0s/.github/workflows/cd-core-services.yml@refs/heads/main\",\"workflowRunId\":23379026025}}"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.worker.kubernetesworker	Ephemeral runner status updated with the merge patch successfully.
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.worker.kubernetesworker	Calculated target runner count	{"assigned job": 2, "decision": 3, "min": 1, "max": 15, "currentRunnerCount": 3, "jobsCompleted": 0}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.worker.kubernetesworker	Compare	{"original": "{\"metadata\":{\"creationTimestamp\":null},\"spec\":{\"replicas\":-1,\"patchID\":-1,\"ephemeralRunnerSpec\":{\"metadata\":{\"creationTimestamp\":null},\"spec\":{\"containers\":null}}},\"status\":{\"currentReplicas\":0,\"pendingEphemeralRunners\":0,\"runningEphemeralRunners\":0,\"failedEphemeralRunners\":0}}", "patch": "{\"metadata\":{\"creationTimestamp\":null},\"spec\":{\"replicas\":3,\"patchID\":3831,\"ephemeralRunnerSpec\":{\"metadata\":{\"creationTimestamp\":null},\"spec\":{\"containers\":null}}},\"status\":{\"currentReplicas\":0,\"pendingEphemeralRunners\":0,\"runningEphemeralRunners\":0,\"failedEphemeralRunners\":0}}"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.worker.kubernetesworker	Preparing EphemeralRunnerSet update	{"json": "{\"spec\":{\"patchID\":3831,\"replicas\":3}}"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.worker.kubernetesworker	Ephemeral runner set scaled.	{"namespace": "actions-runner-system", "name": "swarm-runners-scaleset-97tpt", "replicas": 3}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:04Z	INFO	listener-app.listener	Getting next message	{"lastMessageID": 100006141}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:54Z	INFO	listener-app.worker.kubernetesworker	Calculated target runner count	{"assigned job": 0, "decision": 3, "min": 1, "max": 15, "currentRunnerCount": 3, "jobsCompleted": 0}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:54Z	INFO	listener-app.worker.kubernetesworker	Compare	{"original": "{\"metadata\":{\"creationTimestamp\":null},\"spec\":{\"replicas\":-1,\"patchID\":-1,\"ephemeralRunnerSpec\":{\"metadata\":{\"creationTimestamp\":null},\"spec\":{\"containers\":null}}},\"status\":{\"currentReplicas\":0,\"pendingEphemeralRunners\":0,\"runningEphemeralRunners\":0,\"failedEphemeralRunners\":0}}", "patch": "{\"metadata\":{\"creationTimestamp\":null},\"spec\":{\"replicas\":3,\"patchID\":3832,\"ephemeralRunnerSpec\":{\"metadata\":{\"creationTimestamp\":null},\"spec\":{\"containers\":null}}},\"status\":{\"currentReplicas\":0,\"pendingEphemeralRunners\":0,\"runningEphemeralRunners\":0,\"failedEphemeralRunners\":0}}"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:54Z	INFO	listener-app.worker.kubernetesworker	Preparing EphemeralRunnerSet update	{"json": "{\"spec\":{\"patchID\":3832,\"replicas\":3}}"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:54Z	INFO	listener-app.worker.kubernetesworker	Ephemeral runner set scaled.	{"namespace": "actions-runner-system", "name": "swarm-runners-scaleset-97tpt", "replicas": 3}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:54Z	INFO	listener-app.listener	Getting next message	{"lastMessageID": 100006141}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:57Z	ERROR	listener-app	Retryable client error	{"error": "Get \"https://broker.actions.githubusercontent.com/scalesets/message?lastMessageId=100006141\": context canceled", "method": "GET", "url": "https://broker.actions.githubusercontent.com/scalesets/message?lastMessageId=100006141", "error": "request failed"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] github.com/actions/actions-runner-controller/github/actions.(*clientLogger).Error
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	github.com/actions/actions-runner-controller/github/actions/client.go:77
[pod/swarm-runners-scaleset-884475f5-listener/listener] github.com/hashicorp/go-retryablehttp.(*Client).Do
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	github.com/hashicorp/go-retryablehttp@v0.7.7/client.go:718
[pod/swarm-runners-scaleset-884475f5-listener/listener] github.com/hashicorp/go-retryablehttp.(*RoundTripper).RoundTrip
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	github.com/hashicorp/go-retryablehttp@v0.7.7/roundtripper.go:47
[pod/swarm-runners-scaleset-884475f5-listener/listener] net/http.send
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	net/http/client.go:259
[pod/swarm-runners-scaleset-884475f5-listener/listener] net/http.(*Client).send
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	net/http/client.go:180
[pod/swarm-runners-scaleset-884475f5-listener/listener] net/http.(*Client).do
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	net/http/client.go:724
[pod/swarm-runners-scaleset-884475f5-listener/listener] net/http.(*Client).Do
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	net/http/client.go:590
[pod/swarm-runners-scaleset-884475f5-listener/listener] github.com/actions/actions-runner-controller/github/actions.(*Client).Do
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	github.com/actions/actions-runner-controller/github/actions/client.go:274
[pod/swarm-runners-scaleset-884475f5-listener/listener] github.com/actions/actions-runner-controller/github/actions.(*Client).GetMessage
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	github.com/actions/actions-runner-controller/github/actions/client.go:578
[pod/swarm-runners-scaleset-884475f5-listener/listener] github.com/actions/actions-runner-controller/cmd/ghalistener/listener.(*Listener).getMessage
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	github.com/actions/actions-runner-controller/cmd/ghalistener/listener/listener.go:272
[pod/swarm-runners-scaleset-884475f5-listener/listener] github.com/actions/actions-runner-controller/cmd/ghalistener/listener.(*Listener).Listen
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	github.com/actions/actions-runner-controller/cmd/ghalistener/listener/listener.go:163
[pod/swarm-runners-scaleset-884475f5-listener/listener] github.com/actions/actions-runner-controller/cmd/ghalistener/app.(*App).Run.func1
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	github.com/actions/actions-runner-controller/cmd/ghalistener/app/app.go:124
[pod/swarm-runners-scaleset-884475f5-listener/listener] golang.org/x/sync/errgroup.(*Group).Go.func1
[pod/swarm-runners-scaleset-884475f5-listener/listener] 	golang.org/x/sync@v0.10.0/errgroup/errgroup.go:78
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:57Z	INFO	listener-app.listener	Deleting message session
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:57Z	INFO	listener-app	refreshing token	{"githubConfigUrl": "https://github.com/Ka0s-Klaus/ka0s"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:57Z	INFO	listener-app	getting access token for GitHub App auth	{"accessTokenURL": "https://api.github.com/app/installations/103064135/access_tokens"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:58Z	INFO	listener-app	getting runner registration token	{"registrationTokenURL": "https://api.github.com/repos/Ka0s-Klaus/ka0s/actions/runners/registration-token"}
[pod/swarm-runners-scaleset-884475f5-listener/listener] 2026-03-21T11:50:58Z	INFO	listener-app	getting Actions tenant URL and JWT	{"registrationURL": "https://api.github.com/actions/runner-registration"}
--> Checking Endpoints for Service runners...
ℹ️  Service 'runners' not found in namespace 'actions-runner-system'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
