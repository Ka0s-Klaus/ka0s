# Kubernetes Manifest Validation Report
- **Generated at**: Mon Feb  9 09:15:27 UTC 2026
- **Commit**: 3f8b59f48c24da5e943b21b44f36d01d3e2e1b80
- **Date**: Mon Feb  9 09:15:27 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/itop
```
2026-02-09T09:15:27Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-02-09T09:15:27Z	INFO	[checks-client] Need to update the checks bundle
2026-02-09T09:15:27Z	INFO	[checks-client] Downloading the checks bundle...
235.65 KiB / 235.65 KiB [------------------------------------------------------] 100.00% ? p/s 200ms2026-02-09T09:15:31Z	INFO	Detected config files	num=10

Report Summary

┌─────────────────────────────┬────────────┬───────────────────┐
│           Target            │    Type    │ Misconfigurations │
├─────────────────────────────┼────────────┼───────────────────┤
│ database-deployment.yaml    │ kubernetes │         3         │
├─────────────────────────────┼────────────┼───────────────────┤
│ database-pv.yaml            │ kubernetes │         0         │
├─────────────────────────────┼────────────┼───────────────────┤
│ database-pvc.yaml           │ kubernetes │         0         │
├─────────────────────────────┼────────────┼───────────────────┤
│ database-service.yaml       │ kubernetes │         0         │
├─────────────────────────────┼────────────┼───────────────────┤
│ fix-db-permissions-job.yaml │ kubernetes │         3         │
├─────────────────────────────┼────────────┼───────────────────┤
│ itop-deployment.yaml        │ kubernetes │         5         │
├─────────────────────────────┼────────────┼───────────────────┤
│ itop-pv.yaml                │ kubernetes │         0         │
├─────────────────────────────┼────────────┼───────────────────┤
│ itop-pvc.yaml               │ kubernetes │         0         │
├─────────────────────────────┼────────────┼───────────────────┤
│ itop-service.yaml           │ kubernetes │         0         │
├─────────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml              │ kubernetes │         0         │
└─────────────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


database-deployment.yaml (kubernetes)
=====================================
Tests: 24 (SUCCESSES: 21, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'mysql' of Deployment 'mysql' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 database-deployment.yaml:24-56
────────────────────────────────────────
  24 ┌         - name: mysql
  25 │           image: mysql:5.7
  26 │           resources:
  27 │             requests:
  28 │               memory: "512Mi"
  29 │               cpu: "500m"
  30 │             limits:
  31 │               memory: "1Gi"
  32 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container mysql in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 database-deployment.yaml:24-56
────────────────────────────────────────
  24 ┌         - name: mysql
  25 │           image: mysql:5.7
  26 │           resources:
  27 │             requests:
  28 │               memory: "512Mi"
  29 │               cpu: "500m"
  30 │             limits:
  31 │               memory: "1Gi"
  32 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment mysql in itop namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 database-deployment.yaml:20-60
────────────────────────────────────────
  20 ┌     spec:
  21 │       nodeSelector:
  22 │         kubernetes.io/hostname: k8-node-20
  23 │       containers:
  24 │         - name: mysql
  25 │           image: mysql:5.7
  26 │           resources:
  27 │             requests:
  28 └               memory: "512Mi"
  ..   
────────────────────────────────────────



fix-db-permissions-job.yaml (kubernetes)
========================================
Tests: 24 (SUCCESSES: 21, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'fix-permissions' of Job 'fix-mysql-permissions' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 fix-db-permissions-job.yaml:14-18
────────────────────────────────────────
  14 ┌       - name: fix-permissions
  15 │         image: mysql:5.7
  16 │         command: ["/bin/bash", "-c"]
  17 │         args:
  18 └           - |
────────────────────────────────────────


KSV-0118 (HIGH): container fix-mysql-permissions in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 fix-db-permissions-job.yaml:14-18
────────────────────────────────────────
  14 ┌       - name: fix-permissions
  15 │         image: mysql:5.7
  16 │         command: ["/bin/bash", "-c"]
  17 │         args:
  18 └           - |
────────────────────────────────────────


KSV-0118 (HIGH): job fix-mysql-permissions in itop namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 fix-db-permissions-job.yaml:12-28
────────────────────────────────────────
  12 ┌     spec:
  13 │       containers:
  14 │       - name: fix-permissions
  15 │         image: mysql:5.7
  16 │         command: ["/bin/bash", "-c"]
  17 │         args:
  18 │           - |
  19 │             echo "Waiting for MySQL to be ready..."
  20 └             # Wait loop to ensure DB is up
  ..   
────────────────────────────────────────



itop-deployment.yaml (kubernetes)
=================================
Tests: 26 (SUCCESSES: 21, FAILURES: 5)
Failures: 5 (HIGH: 5, CRITICAL: 0)

KSV-0014 (HIGH): Container 'init-itop-files' of Deployment 'itop' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 itop-deployment.yaml:24-38
────────────────────────────────────────
  24 ┌         - name: init-itop-files
  25 │           image: vbkunin/itop:latest-base
  26 │           command: 
  27 │             - 'sh'
  28 │             - '-c'
  29 │             - |
  30 │               cp -r /var/www/html/. /web-data/ && \
  31 │               if [ -f /web-data/conf/production/config-itop.php ]; then \
  32 └                  echo "Modifying config-itop.php..." && \
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'itop' of Deployment 'itop' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 itop-deployment.yaml:40-72
────────────────────────────────────────
  40 ┌         - name: itop
  41 │           image: vbkunin/itop:latest-base
  42 │           resources:
  43 │             requests:
  44 │               memory: "512Mi"
  45 │               cpu: "500m"
  46 │             limits:
  47 │               memory: "1Gi"
  48 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container itop in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:40-72
────────────────────────────────────────
  40 ┌         - name: itop
  41 │           image: vbkunin/itop:latest-base
  42 │           resources:
  43 │             requests:
  44 │               memory: "512Mi"
  45 │               cpu: "500m"
  46 │             limits:
  47 │               memory: "1Gi"
  48 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container itop in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:24-38
────────────────────────────────────────
  24 ┌         - name: init-itop-files
  25 │           image: vbkunin/itop:latest-base
  26 │           command: 
  27 │             - 'sh'
  28 │             - '-c'
  29 │             - |
  30 │               cp -r /var/www/html/. /web-data/ && \
  31 │               if [ -f /web-data/conf/production/config-itop.php ]; then \
  32 └                  echo "Modifying config-itop.php..." && \
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment itop in itop namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:20-76
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
