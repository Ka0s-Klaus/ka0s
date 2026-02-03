# Kubernetes Manifest Validation Report
- **Branch**: H3038-test-ci-cd-kubernetes-automated-system
- **Commit**: 2f44f7f62a2a3f32364cebaec0278c51bb3acae6
- **Date**: Tue Feb  3 10:40:44 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
Scanning directory: core/b2b/core-services/itop
```
2026-02-03T10:40:45Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-02-03T10:40:45Z	INFO	[checks-client] Need to update the checks bundle
2026-02-03T10:40:45Z	INFO	[checks-client] Downloading the checks bundle...
235.65 KiB / 235.65 KiB [--------------------------------------------------------->] 100.00% ? p/s ?235.65 KiB / 235.65 KiB [-----------------------------------------------] 100.00% 1.71 MiB p/s 300ms2026-02-03T10:40:50Z	INFO	Detected config files	num=9

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
 database-deployment.yaml:20-35
────────────────────────────────────────
  20 ┌         - name: mysql
  21 │           image: mysql:5.7
  22 │           env:
  23 │             - name: MYSQL_ROOT_PASSWORD
  24 │               value: "admin"
  25 │             - name: MYSQL_DATABASE
  26 │               value: "itop"
  27 │             - name: MYSQL_USER
  28 └               value: "admin"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container mysql in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 database-deployment.yaml:20-35
────────────────────────────────────────
  20 ┌         - name: mysql
  21 │           image: mysql:5.7
  22 │           env:
  23 │             - name: MYSQL_ROOT_PASSWORD
  24 │               value: "admin"
  25 │             - name: MYSQL_DATABASE
  26 │               value: "itop"
  27 │             - name: MYSQL_USER
  28 └               value: "admin"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment mysql in itop namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 database-deployment.yaml:18-39
────────────────────────────────────────
  18 ┌     spec:
  19 │       containers:
  20 │         - name: mysql
  21 │           image: mysql:5.7
  22 │           env:
  23 │             - name: MYSQL_ROOT_PASSWORD
  24 │               value: "admin"
  25 │             - name: MYSQL_DATABASE
  26 └               value: "itop"
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
 itop-deployment.yaml:21-26
────────────────────────────────────────
  21 ┌         - name: init-itop-files
  22 │           image: vbkunin/itop:3.2.0-base
  23 │           command: ['sh', '-c', 'cp -r /var/www/html/. /web-data/ && chown -R 33:33 /web-data']
  24 │           volumeMounts:
  25 │             - name: itop-web-persistent-storage
  26 └               mountPath: /web-data
────────────────────────────────────────


KSV-0014 (HIGH): Container 'itop' of Deployment 'itop' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 itop-deployment.yaml:28-43
────────────────────────────────────────
  28 ┌         - name: itop
  29 │           image: vbkunin/itop:3.2.0-base
  30 │           ports:
  31 │             - containerPort: 80
  32 │           env:
  33 │             - name: ITOP_DB_HOST
  34 │               value: "mysql"
  35 │             - name: ITOP_DB_NAME
  36 └               value: "itop"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container itop in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:21-26
────────────────────────────────────────
  21 ┌         - name: init-itop-files
  22 │           image: vbkunin/itop:3.2.0-base
  23 │           command: ['sh', '-c', 'cp -r /var/www/html/. /web-data/ && chown -R 33:33 /web-data']
  24 │           volumeMounts:
  25 │             - name: itop-web-persistent-storage
  26 └               mountPath: /web-data
────────────────────────────────────────


KSV-0118 (HIGH): container itop in itop namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:28-43
────────────────────────────────────────
  28 ┌         - name: itop
  29 │           image: vbkunin/itop:3.2.0-base
  30 │           ports:
  31 │             - containerPort: 80
  32 │           env:
  33 │             - name: ITOP_DB_HOST
  34 │               value: "mysql"
  35 │             - name: ITOP_DB_NAME
  36 └               value: "itop"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment itop in itop namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 itop-deployment.yaml:19-47
────────────────────────────────────────
  19 ┌     spec:
  20 │       initContainers:
  21 │         - name: init-itop-files
  22 │           image: vbkunin/itop:3.2.0-base
  23 │           command: ['sh', '-c', 'cp -r /var/www/html/. /web-data/ && chown -R 33:33 /web-data']
  24 │           volumeMounts:
  25 │             - name: itop-web-persistent-storage
  26 │               mountPath: /web-data
  27 └       containers:
  ..   
────────────────────────────────────────


```
