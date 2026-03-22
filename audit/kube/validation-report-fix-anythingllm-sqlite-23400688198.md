# Kubernetes Manifest Validation Report
- **Generated at**: Sun Mar 22 10:03:27 UTC 2026
- **Commit**: ad608b069250241206cdf66371dacae024fa3c94
- **Date**: Sun Mar 22 10:03:27 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/anythingllm
```
2026-03-22T10:03:27Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-22T10:03:27Z	INFO	[checks-client] Need to update the checks bundle
2026-03-22T10:03:27Z	INFO	[checks-client] Downloading the checks bundle...
234.65 KiB / 234.65 KiB [------------------------------------------------------] 100.00% ? p/s 200ms2026-03-22T10:03:29Z	INFO	Detected config files	num=6

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
 deployment.yaml:38-78
────────────────────────────────────────
  38 ┌         - name: anythingllm
  39 │           image: mintplexlabs/anythingllm:latest
  40 │           imagePullPolicy: Always
  41 │           ports:
  42 │             - containerPort: 3001
  43 │           env:
  44 │             - name: STORAGE_DIR
  45 │               value: /app/server/storage
  46 └             - name: LLM_PROVIDER
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'anythingllm' of Deployment 'anythingllm' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 deployment.yaml:38-78
────────────────────────────────────────
  38 ┌         - name: anythingllm
  39 │           image: mintplexlabs/anythingllm:latest
  40 │           imagePullPolicy: Always
  41 │           ports:
  42 │             - containerPort: 3001
  43 │           env:
  44 │             - name: STORAGE_DIR
  45 │               value: /app/server/storage
  46 └             - name: LLM_PROVIDER
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'init-storage' of Deployment 'anythingllm' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 deployment.yaml:25-36
────────────────────────────────────────
  25 ┌         - name: init-storage
  26 │           image: busybox:1.36
  27 │           command: ["/bin/sh", "-lc"]
  28 │           args:
  29 │             - |
  30 │               set -eu
  31 │               mkdir -p /data/storage /data/collector/hotdir /data/collector/outputs
  32 │               touch /data/storage/anythingllm.db
  33 └               chmod -R 0777 /data/storage /data/collector
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container anythingllm in anythingllm namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 deployment.yaml:25-36
────────────────────────────────────────
  25 ┌         - name: init-storage
  26 │           image: busybox:1.36
  27 │           command: ["/bin/sh", "-lc"]
  28 │           args:
  29 │             - |
  30 │               set -eu
  31 │               mkdir -p /data/storage /data/collector/hotdir /data/collector/outputs
  32 │               touch /data/storage/anythingllm.db
  33 └               chmod -R 0777 /data/storage /data/collector
  ..   
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
