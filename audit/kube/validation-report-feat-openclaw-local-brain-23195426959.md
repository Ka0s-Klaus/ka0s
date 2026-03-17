# Kubernetes Manifest Validation Report
- **Generated at**: Tue Mar 17 13:01:36 UTC 2026
- **Commit**: f2e7e19fffdf71981871314fea0fbb713711270d
- **Date**: Tue Mar 17 13:01:36 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/llama-server
```
2026-03-17T13:01:36Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-17T13:01:36Z	INFO	[checks-client] Need to update the checks bundle
2026-03-17T13:01:36Z	INFO	[checks-client] Downloading the checks bundle...
234.65 KiB / 234.65 KiB [------------------------------------------------------] 100.00% ? p/s 200ms2026-03-17T13:01:38Z	INFO	Detected config files	num=5

Report Summary

┌────────────────────┬────────────┬───────────────────┐
│       Target       │    Type    │ Misconfigurations │
├────────────────────┼────────────┼───────────────────┤
│ deployment.yaml    │ kubernetes │         3         │
├────────────────────┼────────────┼───────────────────┤
│ namespace.yaml     │ kubernetes │         0         │
├────────────────────┼────────────┼───────────────────┤
│ networkpolicy.yaml │ kubernetes │         0         │
├────────────────────┼────────────┼───────────────────┤
│ pvc.yaml           │ kubernetes │         0         │
├────────────────────┼────────────┼───────────────────┤
│ service.yaml       │ kubernetes │         0         │
└────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


deployment.yaml (kubernetes)
============================
Tests: 24 (SUCCESSES: 21, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'llama-server' of Deployment 'llama-server' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 deployment.yaml:21-44
────────────────────────────────────────
  21 ┌         - name: llama-server
  22 │           image: ghcr.io/ggml-org/llama.cpp:server
  23 │           imagePullPolicy: Always
  24 │           args:
  25 │             - --host
  26 │             - 0.0.0.0
  27 │             - --port
  28 │             - "8080"
  29 └             - --model
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container llama-server in llama-server namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 deployment.yaml:21-44
────────────────────────────────────────
  21 ┌         - name: llama-server
  22 │           image: ghcr.io/ggml-org/llama.cpp:server
  23 │           imagePullPolicy: Always
  24 │           args:
  25 │             - --host
  26 │             - 0.0.0.0
  27 │             - --port
  28 │             - "8080"
  29 └             - --model
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment llama-server in llama-server namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 deployment.yaml:19-48
────────────────────────────────────────
  19 ┌     spec:
  20 │       containers:
  21 │         - name: llama-server
  22 │           image: ghcr.io/ggml-org/llama.cpp:server
  23 │           imagePullPolicy: Always
  24 │           args:
  25 │             - --host
  26 │             - 0.0.0.0
  27 └             - --port
  ..   
────────────────────────────────────────


```
### Scanning: core/b2b/core-services/openclaw
```
2026-03-17T13:01:38Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-17T13:01:38Z	INFO	[checks-client] Using existing checks from cache	path="/home/runner/.cache/trivy/policy/content"
2026-03-17T13:01:39Z	INFO	Detected config files	num=7

Report Summary

┌────────────────────┬────────────┬───────────────────┐
│       Target       │    Type    │ Misconfigurations │
├────────────────────┼────────────┼───────────────────┤
│ configmap.yaml     │ kubernetes │         0         │
├────────────────────┼────────────┼───────────────────┤
│ ingress.yaml       │ kubernetes │         0         │
├────────────────────┼────────────┼───────────────────┤
│ namespace.yaml     │ kubernetes │         0         │
├────────────────────┼────────────┼───────────────────┤
│ networkpolicy.yaml │ kubernetes │         0         │
├────────────────────┼────────────┼───────────────────┤
│ pvc.yaml           │ kubernetes │         0         │
├────────────────────┼────────────┼───────────────────┤
│ service.yaml       │ kubernetes │         0         │
├────────────────────┼────────────┼───────────────────┤
│ statefulset.yaml   │ kubernetes │         2         │
└────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


statefulset.yaml (kubernetes)
=============================
Tests: 24 (SUCCESSES: 22, FAILURES: 2)
Failures: 2 (HIGH: 2, CRITICAL: 0)

KSV-0014 (HIGH): Container 'openclaw' of StatefulSet 'openclaw' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 statefulset.yaml:24-79
────────────────────────────────────────
  24 ┌         - name: openclaw
  25 │           image: ghcr.io/openclaw/openclaw:latest
  26 │           imagePullPolicy: Always
  27 │           command: ["openclaw", "gateway", "start", "--foreground"]
  28 │           env:
  29 │             - name: OPENCLAW_CONFIG_PATH
  30 │               value: /home/node/.openclaw/openclaw.json
  31 │           ports:
  32 └             - name: http
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container openclaw in openclaw namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 statefulset.yaml:24-79
────────────────────────────────────────
  24 ┌         - name: openclaw
  25 │           image: ghcr.io/openclaw/openclaw:latest
  26 │           imagePullPolicy: Always
  27 │           command: ["openclaw", "gateway", "start", "--foreground"]
  28 │           env:
  29 │             - name: OPENCLAW_CONFIG_PATH
  30 │               value: /home/node/.openclaw/openclaw.json
  31 │           ports:
  32 └             - name: http
  ..   
────────────────────────────────────────


```
