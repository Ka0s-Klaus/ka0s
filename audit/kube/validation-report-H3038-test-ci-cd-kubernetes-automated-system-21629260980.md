# Kubernetes Manifest Validation Report
- **Generated at**: Tue Feb  3 11:58:57 UTC 2026
- **Commit**: c38e25b34600d8cf231747ec3edbbe0e7d34be09
- **Date**: Tue Feb  3 11:58:57 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/itop
```
2026-02-03T11:58:57Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-02-03T11:58:57Z	INFO	[checks-client] Need to update the checks bundle
2026-02-03T11:58:57Z	INFO	[checks-client] Downloading the checks bundle...
235.65 KiB / 235.65 KiB [------------------------------------------------------] 100.00% ? p/s 200ms2026-02-03T11:59:00Z	INFO	Detected config files	num=10

Report Summary

┌──────────────────────────┬────────────┬───────────────────┐
│          Target          │    Type    │ Misconfigurations │
├──────────────────────────┼────────────┼───────────────────┤
│ database-deployment.yaml │ kubernetes │         3         │
├──────────────────────────┼────────────┼───────────────────┤
│ database-pv.yaml         │ kubernetes │         0         │
├──────────────────────────┼────────────┼───────────────────┤
│ database-pvc.yaml        │ kubernetes │         0         │
├──────────────────────────┼────────────┼───────────────────┤
│ database-service.yaml    │ kubernetes │         0         │
├──────────────────────────┼────────────┼───────────────────┤
│ ingress.yaml             │ kubernetes │         0         │
├──────────────────────────┼────────────┼───────────────────┤
│ itop-deployment.yaml     │ kubernetes │         5         │
├──────────────────────────┼────────────┼───────────────────┤
│ itop-pv.yaml             │ kubernetes │         0         │
├──────────────────────────┼────────────┼───────────────────┤
│ itop-pvc.yaml            │ kubernetes │         0         │
├──────────────────────────┼────────────┼───────────────────┤
│ itop-service.yaml        │ kubernetes │         0         │
├──────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml           │ kubernetes │         0         │
└──────────────────────────┴────────────┴───────────────────┘
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
 database-deployment.yaml:20-52
────────────────────────────────────────
  20 ┌         - name: mysql
  21 │           image: mysql:5.7
  22 │           resources:
  23 │             requests:
  24 │               memory: "512Mi"
  25 │               cpu: "500m"
  26 │             limits:
  27 │               memory: "1Gi"
  28 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container mysql in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 database-deployment.yaml:20-52
────────────────────────────────────────
  20 ┌         - name: mysql
  21 │           image: mysql:5.7
  22 │           resources:
  23 │             requests:
  24 │               memory: "512Mi"
  25 │               cpu: "500m"
  26 │             limits:
  27 │               memory: "1Gi"
  28 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment mysql in itop namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 database-deployment.yaml:18-56
────────────────────────────────────────
  18 ┌     spec:
  19 │       containers:
  20 │         - name: mysql
  21 │           image: mysql:5.7
  22 │           resources:
  23 │             requests:
  24 │               memory: "512Mi"
  25 │               cpu: "500m"
  26 └             limits:
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
 itop-deployment.yaml:20-25
────────────────────────────────────────
  20 ┌         - name: init-itop-files
  21 │           image: vbkunin/itop:latest-base
  22 │           command: ['sh', '-c', 'cp -r /var/www/html/. /web-data/ && chown -R 33:33 /web-data']
  23 │           volumeMounts:
  24 │             - name: itop-web-persistent-storage
  25 └               mountPath: /web-data
────────────────────────────────────────


KSV-0014 (HIGH): Container 'itop' of Deployment 'itop' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 itop-deployment.yaml:27-61
────────────────────────────────────────
  27 ┌         - name: itop
  28 │           image: vbkunin/itop:latest-base
  29 │           resources:
  30 │             requests:
  31 │               memory: "256Mi"
  32 │               cpu: "200m"
  33 │             limits:
  34 │               memory: "512Mi"
  35 └               cpu: "500m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container itop in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:27-61
────────────────────────────────────────
  27 ┌         - name: itop
  28 │           image: vbkunin/itop:latest-base
  29 │           resources:
  30 │             requests:
  31 │               memory: "256Mi"
  32 │               cpu: "200m"
  33 │             limits:
  34 │               memory: "512Mi"
  35 └               cpu: "500m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container itop in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:20-25
────────────────────────────────────────
  20 ┌         - name: init-itop-files
  21 │           image: vbkunin/itop:latest-base
  22 │           command: ['sh', '-c', 'cp -r /var/www/html/. /web-data/ && chown -R 33:33 /web-data']
  23 │           volumeMounts:
  24 │             - name: itop-web-persistent-storage
  25 └               mountPath: /web-data
────────────────────────────────────────


KSV-0118 (HIGH): deployment itop in itop namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:18-65
────────────────────────────────────────
  18 ┌     spec:
  19 │       initContainers:
  20 │         - name: init-itop-files
  21 │           image: vbkunin/itop:latest-base
  22 │           command: ['sh', '-c', 'cp -r /var/www/html/. /web-data/ && chown -R 33:33 /web-data']
  23 │           volumeMounts:
  24 │             - name: itop-web-persistent-storage
  25 │               mountPath: /web-data
  26 └       containers:
  ..   
────────────────────────────────────────


```
