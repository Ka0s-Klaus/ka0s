# Kubernetes Manifest Validation Report
- **Generated at**: Sat Mar 21 11:41:23 UTC 2026
- **Commit**: b0ca8e4796945939a7b497e1eed6e4a2ce31a0f0
- **Date**: Sat Mar 21 11:41:23 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/anythingllm
```
2026-03-21T11:41:23Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-21T11:41:23Z	INFO	[checks-client] Need to update the checks bundle
2026-03-21T11:41:23Z	INFO	[checks-client] Downloading the checks bundle...
234.65 KiB / 234.65 KiB [--------------------------------------------------------->] 100.00% ? p/s ?234.65 KiB / 234.65 KiB [-----------------------------------------------] 100.00% 3.32 MiB p/s 300ms2026-03-21T11:41:26Z	INFO	Detected config files	num=6

Report Summary

┌───────────────────────────────┬────────────┬───────────────────┐
│            Target             │    Type    │ Misconfigurations │
├───────────────────────────────┼────────────┼───────────────────┤
│ deployment.yaml               │ kubernetes │         4         │
├───────────────────────────────┼────────────┼───────────────────┤
│ ingress.yaml                  │ kubernetes │         0         │
├───────────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml                │ kubernetes │         0         │
├───────────────────────────────┼────────────┼───────────────────┤
│ pull-embedding-model-job.yaml │ kubernetes │         3         │
├───────────────────────────────┼────────────┼───────────────────┤
│ pvc.yaml                      │ kubernetes │         0         │
├───────────────────────────────┼────────────┼───────────────────┤
│ service.yaml                  │ kubernetes │         0         │
└───────────────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


deployment.yaml (kubernetes)
============================
Tests: 24 (SUCCESSES: 20, FAILURES: 4)
Failures: 4 (HIGH: 4, CRITICAL: 0)

KSV-0005 (HIGH): Container 'anythingllm' of Deployment 'anythingllm' should not include 'SYS_ADMIN' in 'securityContext.capabilities.add'
════════════════════════════════════════
SYS_ADMIN gives the processes running inside the container privileges that are equivalent to root.

See https://avd.aquasec.com/misconfig/ksv-0005
────────────────────────────────────────
 deployment.yaml:36-76
────────────────────────────────────────
  36 ┌         - name: anythingllm
  37 │           image: mintplexlabs/anythingllm:latest
  38 │           imagePullPolicy: Always
  39 │           ports:
  40 │             - containerPort: 3001
  41 │           env:
  42 │             - name: STORAGE_DIR
  43 │               value: /app/server/storage
  44 └             - name: LLM_PROVIDER
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'anythingllm' of Deployment 'anythingllm' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 deployment.yaml:36-76
────────────────────────────────────────
  36 ┌         - name: anythingllm
  37 │           image: mintplexlabs/anythingllm:latest
  38 │           imagePullPolicy: Always
  39 │           ports:
  40 │             - containerPort: 3001
  41 │           env:
  42 │             - name: STORAGE_DIR
  43 │               value: /app/server/storage
  44 └             - name: LLM_PROVIDER
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'init-storage' of Deployment 'anythingllm' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 deployment.yaml:25-34
────────────────────────────────────────
  25 ┌         - name: init-storage
  26 │           image: busybox:1.36
  27 │           command: ["/bin/sh", "-lc"]
  28 │           args:
  29 │             - |
  30 │               set -eu
  31 │               mkdir -p /data/storage /data/collector/hotdir /data/collector/outputs
  32 │           volumeMounts:
  33 │             - name: data
  34 └               mountPath: /data
────────────────────────────────────────


KSV-0118 (HIGH): container anythingllm in anythingllm namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 deployment.yaml:25-34
────────────────────────────────────────
  25 ┌         - name: init-storage
  26 │           image: busybox:1.36
  27 │           command: ["/bin/sh", "-lc"]
  28 │           args:
  29 │             - |
  30 │               set -eu
  31 │               mkdir -p /data/storage /data/collector/hotdir /data/collector/outputs
  32 │           volumeMounts:
  33 │             - name: data
  34 └               mountPath: /data
────────────────────────────────────────



pull-embedding-model-job.yaml (kubernetes)
==========================================
Tests: 24 (SUCCESSES: 21, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'pull-model' of Job 'pull-nomic-embed-text' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 pull-embedding-model-job.yaml:20-24
────────────────────────────────────────
  20 ┌         - name: pull-model
  21 │           image: curlimages/curl:latest
  22 │           command: ["/bin/sh", "-lc"]
  23 │           args:
  24 └             - |
────────────────────────────────────────


KSV-0118 (HIGH): container pull-nomic-embed-text in anythingllm namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 pull-embedding-model-job.yaml:20-24
────────────────────────────────────────
  20 ┌         - name: pull-model
  21 │           image: curlimages/curl:latest
  22 │           command: ["/bin/sh", "-lc"]
  23 │           args:
  24 └             - |
────────────────────────────────────────


KSV-0118 (HIGH): job pull-nomic-embed-text in anythingllm namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 pull-embedding-model-job.yaml:15-24
────────────────────────────────────────
  15 ┌     spec:
  16 │       nodeSelector:
  17 │         kubernetes.io/hostname: k8-node-20
  18 │       restartPolicy: OnFailure
  19 │       containers:
  20 │         - name: pull-model
  21 │           image: curlimages/curl:latest
  22 │           command: ["/bin/sh", "-lc"]
  23 │           args:
  24 └             - |
────────────────────────────────────────


```
### Scanning: core/b2b/core-services/ollama
```
2026-03-21T11:41:26Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-21T11:41:26Z	INFO	[checks-client] Using existing checks from cache	path="/home/runner/.cache/trivy/policy/content"
2026-03-21T11:41:29Z	INFO	Detected config files	num=6

Report Summary

┌────────────────────────┬────────────┬───────────────────┐
│         Target         │    Type    │ Misconfigurations │
├────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml         │ kubernetes │         0         │
├────────────────────────┼────────────┼───────────────────┤
│ ollama-deployment.yaml │ kubernetes │         3         │
├────────────────────────┼────────────┼───────────────────┤
│ ollama-ingress.yaml    │ kubernetes │         0         │
├────────────────────────┼────────────┼───────────────────┤
│ ollama-pvc.yaml        │ kubernetes │         0         │
├────────────────────────┼────────────┼───────────────────┤
│ ollama-service.yaml    │ kubernetes │         0         │
├────────────────────────┼────────────┼───────────────────┤
│ pull-model-job.yaml    │ kubernetes │         3         │
└────────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


ollama-deployment.yaml (kubernetes)
===================================
Tests: 24 (SUCCESSES: 21, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'ollama' of Deployment 'ollama' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 ollama-deployment.yaml:21-43
────────────────────────────────────────
  21 ┌       - name: ollama
  22 │         image: ollama/ollama:latest
  23 │         ports:
  24 │         - containerPort: 11434
  25 │         env:
  26 │         - name: OLLAMA_NUM_PARALLEL
  27 │           value: "4"
  28 │         - name: OLLAMA_MAX_QUEUE
  29 └           value: "10"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container ollama in ollama namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 ollama-deployment.yaml:21-43
────────────────────────────────────────
  21 ┌       - name: ollama
  22 │         image: ollama/ollama:latest
  23 │         ports:
  24 │         - containerPort: 11434
  25 │         env:
  26 │         - name: OLLAMA_NUM_PARALLEL
  27 │           value: "4"
  28 │         - name: OLLAMA_MAX_QUEUE
  29 └           value: "10"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment ollama in ollama namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 ollama-deployment.yaml:17-48
────────────────────────────────────────
  17 ┌     spec:
  18 │       nodeSelector:
  19 │         ka0s.io/ollama-node: "true"
  20 │       containers:
  21 │       - name: ollama
  22 │         image: ollama/ollama:latest
  23 │         ports:
  24 │         - containerPort: 11434
  25 └         env:
  ..   
────────────────────────────────────────



pull-model-job.yaml (kubernetes)
================================
Tests: 24 (SUCCESSES: 21, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'pull-model' of Job 'pull-llama3-2' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 pull-model-job.yaml:12-16
────────────────────────────────────────
  12 ┌       - name: pull-model
  13 │         image: curlimages/curl:latest
  14 │         command: ["/bin/sh", "-c"]
  15 │         args:
  16 └         - |
────────────────────────────────────────


KSV-0118 (HIGH): container pull-llama3-2 in ollama namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 pull-model-job.yaml:12-16
────────────────────────────────────────
  12 ┌       - name: pull-model
  13 │         image: curlimages/curl:latest
  14 │         command: ["/bin/sh", "-c"]
  15 │         args:
  16 └         - |
────────────────────────────────────────


KSV-0118 (HIGH): job pull-llama3-2 in ollama namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 pull-model-job.yaml:8-24
────────────────────────────────────────
   8 ┌     spec:
   9 │       nodeSelector:
  10 │         ka0s.io/ollama-node: "true"
  11 │       containers:
  12 │       - name: pull-model
  13 │         image: curlimages/curl:latest
  14 │         command: ["/bin/sh", "-c"]
  15 │         args:
  16 └         - |
  ..   
────────────────────────────────────────


```
### Scanning: core/b2b/core-services/runners
```
2026-03-21T11:41:29Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-21T11:41:29Z	INFO	[checks-client] Using existing checks from cache	path="/home/runner/.cache/trivy/policy/content"
2026-03-21T11:41:31Z	ERROR	[helm scanner] Failed to render Chart files	file_path="charts/gha-runner-scale-set" err="execution error at (gha-runner-scale-set/templates/manager_role_binding.yaml:17:11): No gha-rs-controller deployment found using label (app.kubernetes.io/part-of=gha-rs-controller). Consider setting controllerServiceAccount.name in values.yaml to be explicit if you think the discovery is wrong."
2026-03-21T11:41:32Z	INFO	Detected config files	num=5

Report Summary

┌─────────────────────────────┬────────────┬───────────────────┐
│           Target            │    Type    │ Misconfigurations │
├─────────────────────────────┼────────────┼───────────────────┤
│ manifest-runnerset.yaml     │ kubernetes │         0         │
├─────────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml              │ kubernetes │         0         │
├─────────────────────────────┼────────────┼───────────────────┤
│ rendered/00-crds.yaml       │ kubernetes │         0         │
├─────────────────────────────┼────────────┼───────────────────┤
│ rendered/10-controller.yaml │ kubernetes │         3         │
├─────────────────────────────┼────────────┼───────────────────┤
│ rendered/20-runnerset.yaml  │ kubernetes │         0         │
└─────────────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


rendered/10-controller.yaml (kubernetes)
========================================
Tests: 36 (SUCCESSES: 33, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'manager' of Deployment 'gha-rs-controller' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 rendered/10-controller.yaml:264-287
────────────────────────────────────────
 264 ┌         app.kubernetes.io/namespace: actions-runner-system
 265 │         app.kubernetes.io/instance: actions-runner-controller
 266 │     spec:
 267 │       serviceAccountName: gha-rs-controller
 268 │       containers:
 269 │       - name: manager
 270 │         image: "ghcr.io/actions/gha-runner-scale-set-controller:0.10.1"
 271 │         imagePullPolicy: IfNotPresent
 272 └         args:
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): container gha-rs-controller in actions-runner-system namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 rendered/10-controller.yaml:264-287
────────────────────────────────────────
 264 ┌         app.kubernetes.io/namespace: actions-runner-system
 265 │         app.kubernetes.io/instance: actions-runner-controller
 266 │     spec:
 267 │       serviceAccountName: gha-rs-controller
 268 │       containers:
 269 │       - name: manager
 270 │         image: "ghcr.io/actions/gha-runner-scale-set-controller:0.10.1"
 271 │         imagePullPolicy: IfNotPresent
 272 └         args:
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): deployment gha-rs-controller in actions-runner-system namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 rendered/10-controller.yaml:261-291
────────────────────────────────────────
 261 ┌         app.kubernetes.io/component: controller-manager
 262 │         app.kubernetes.io/version: 0.10.1
 263 │         app.kubernetes.io/name: gha-rs-controller
 264 │         app.kubernetes.io/namespace: actions-runner-system
 265 │         app.kubernetes.io/instance: actions-runner-controller
 266 │     spec:
 267 │       serviceAccountName: gha-rs-controller
 268 │       containers:
 269 └       - name: manager
 ...   
────────────────────────────────────────


```
