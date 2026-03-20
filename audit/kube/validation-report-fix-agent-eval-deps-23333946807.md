# Kubernetes Manifest Validation Report
- **Generated at**: Fri Mar 20 07:56:04 UTC 2026
- **Commit**: 9b97656124f0e17ec71126996b356d19c43024e2
- **Date**: Fri Mar 20 07:56:04 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/runners
```
2026-03-20T07:56:05Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-20T07:56:05Z	INFO	[checks-client] Need to update the checks bundle
2026-03-20T07:56:05Z	INFO	[checks-client] Downloading the checks bundle...
234.65 KiB / 234.65 KiB [--------------------------------------------------------->] 100.00% ? p/s ?234.65 KiB / 234.65 KiB [-----------------------------------------------] 100.00% 4.83 MiB p/s 200ms2026-03-20T07:56:08Z	ERROR	[helm scanner] Failed to render Chart files	file_path="charts/gha-runner-scale-set" err="execution error at (gha-runner-scale-set/templates/manager_role_binding.yaml:17:11): No gha-rs-controller deployment found using label (app.kubernetes.io/part-of=gha-rs-controller). Consider setting controllerServiceAccount.name in values.yaml to be explicit if you think the discovery is wrong."
2026-03-20T07:56:08Z	INFO	Detected config files	num=5

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
