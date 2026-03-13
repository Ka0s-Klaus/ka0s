# Kubernetes Manifest Validation Report
- **Date**: Fri Mar 13 08:43:01 UTC 2026

## Service: core/b2b/core-services/itop
### 1. Kubeconform (Structure)
```bash
Summary: 7 resources found in 7 files - Valid: 6, Invalid: 0, Errors: 0, Skipped: 1
```
### 2. Trivy (Security)
```bash
2026-03-13T08:43:02Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-13T08:43:02Z	INFO	[checks-client] Need to update the checks bundle
2026-03-13T08:43:02Z	INFO	[checks-client] Downloading the checks bundle...
235.65 KiB / 235.65 KiB [--------------------------------------------------------->] 100.00% ? p/s ?235.65 KiB / 235.65 KiB [-----------------------------------------------] 100.00% 5.89 MiB p/s 200ms2026-03-13T08:43:05Z	INFO	Detected config files	num=6

Report Summary

┌──────────────────────┬────────────┬───────────────────┐
│        Target        │    Type    │ Misconfigurations │
├──────────────────────┼────────────┼───────────────────┤
│ ingress.yaml         │ kubernetes │         0         │
├──────────────────────┼────────────┼───────────────────┤
│ itop-deployment.yaml │ kubernetes │         5         │
├──────────────────────┼────────────┼───────────────────┤
│ itop-pv.yaml         │ kubernetes │         0         │
├──────────────────────┼────────────┼───────────────────┤
│ itop-pvc.yaml        │ kubernetes │         0         │
├──────────────────────┼────────────┼───────────────────┤
│ itop-service.yaml    │ kubernetes │         0         │
├──────────────────────┼────────────┼───────────────────┤
│ namespace.yaml       │ kubernetes │         0         │
└──────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


itop-deployment.yaml (kubernetes)
=================================
Tests: 26 (SUCCESSES: 21, FAILURES: 5)
Failures: 5 (HIGH: 5, CRITICAL: 0)

KSV-0014 (HIGH): Container 'init-itop-files' of Deployment 'itop' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 itop-deployment.yaml:24-89
────────────────────────────────────────
  24 ┌         - name: init-itop-files
  25 │           image: vbkunin/itop:latest-base
  26 │           command: 
  27 │             - 'sh'
  28 │             - '-c'
  29 │             - |
  30 │               if [ ! -f /web-data/conf/production/config-itop.php ]; then
  31 │                 echo "Initializing iTop files..."
  32 └                 cp -r /var/www/html/. /web-data/
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'itop' of Deployment 'itop' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 itop-deployment.yaml:91-123
────────────────────────────────────────
  91 ┌         - name: itop
  92 │           image: vbkunin/itop:latest-base
  93 │           resources:
  94 │             requests:
  95 │               memory: "1Gi"
  96 │               cpu: "500m"
  97 │             limits:
  98 │               memory: "2Gi"
  99 └               cpu: "2000m"
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): container itop in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:91-123
────────────────────────────────────────
  91 ┌         - name: itop
  92 │           image: vbkunin/itop:latest-base
  93 │           resources:
  94 │             requests:
  95 │               memory: "1Gi"
  96 │               cpu: "500m"
  97 │             limits:
  98 │               memory: "2Gi"
  99 └               cpu: "2000m"
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): container itop in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:24-89
────────────────────────────────────────
  24 ┌         - name: init-itop-files
  25 │           image: vbkunin/itop:latest-base
  26 │           command: 
  27 │             - 'sh'
  28 │             - '-c'
  29 │             - |
  30 │               if [ ! -f /web-data/conf/production/config-itop.php ]; then
  31 │                 echo "Initializing iTop files..."
  32 └                 cp -r /var/www/html/. /web-data/
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment itop in itop namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:20-130
────────────────────────────────────────
  20 ┌     spec:
  21 │       nodeSelector:
  22 │         kubernetes.io/hostname: k8-node-20
  23 │       initContainers:
  24 │         - name: init-itop-files
  25 │           image: vbkunin/itop:latest-base
  26 │           command: 
  27 │             - 'sh'
  28 └             - '-c'
  ..   
────────────────────────────────────────


```
