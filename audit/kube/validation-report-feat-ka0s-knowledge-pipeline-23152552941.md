# Kubernetes Manifest Validation Report
- **Generated at**: Mon Mar 16 15:49:15 UTC 2026
- **Commit**: 06f56401672bef6437a221d05bae06e18a9f310a
- **Date**: Mon Mar 16 15:49:15 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/ka0s-knowledge
```
2026-03-16T15:49:15Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-16T15:49:15Z	INFO	[checks-client] Need to update the checks bundle
2026-03-16T15:49:15Z	INFO	[checks-client] Downloading the checks bundle...
235.65 KiB / 235.65 KiB [------------------------------------------------------] 100.00% ? p/s 200ms2026-03-16T15:49:17Z	INFO	Detected config files	num=5

Report Summary

┌────────────────────────┬────────────┬───────────────────┐
│         Target         │    Type    │ Misconfigurations │
├────────────────────────┼────────────┼───────────────────┤
│ cronjobs.yaml          │ kubernetes │        12         │
├────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml         │ kubernetes │         0         │
├────────────────────────┼────────────┼───────────────────┤
│ priority-classes.yaml  │ kubernetes │         0         │
├────────────────────────┼────────────┼───────────────────┤
│ scripts-configmap.yaml │ kubernetes │         1         │
├────────────────────────┼────────────┼───────────────────┤
│ spool-pvc.yaml         │ kubernetes │         0         │
└────────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


cronjobs.yaml (kubernetes)
==========================
Tests: 33 (SUCCESSES: 21, FAILURES: 12)
Failures: 12 (HIGH: 12, CRITICAL: 0)

KSV-0014 (HIGH): Container 'loader' of CronJob 'knowledge-loader' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 cronjobs.yaml:239-257
────────────────────────────────────────
 239 ┌           priorityClassName: ka0s-offline-low
 240 │           restartPolicy: Never
 241 │           containers:
 242 │             - name: loader
 243 │               image: python:3.11-slim
 244 │               command: ["/bin/sh", "-lc"]
 245 │               args:
 246 │                 - |
 247 └                   pip install --no-cache-dir psycopg2-binary && python /scripts/load_spool.py
 ...   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'producer' of CronJob 'knowledge-producer-mongo' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 cronjobs.yaml:18-62
────────────────────────────────────────
  18 ┌             - name: producer
  19 │               image: python:3.11-slim
  20 │               command: ["/bin/sh", "-lc"]
  21 │               args:
  22 │                 - |
  23 │                   pip install --no-cache-dir requests pymongo && python /scripts/produce_mongo.py
  24 │               env:
  25 │                 - name: SOURCE
  26 └                   value: mongo
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'producer' of CronJob 'knowledge-producer-mysql' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 cronjobs.yaml:166-212
────────────────────────────────────────
 166 ┌           restartPolicy: Never
 167 │           containers:
 168 │             - name: producer
 169 │               image: python:3.11-slim
 170 │               command: ["/bin/sh", "-lc"]
 171 │               args:
 172 │                 - |
 173 │                   pip install --no-cache-dir requests mysql-connector-python && python /scripts/produce_mysql.py
 174 └               env:
 ...   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'producer' of CronJob 'knowledge-producer-postgresql' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 cronjobs.yaml:89-139
────────────────────────────────────────
  89 ┌           containers:
  90 │             - name: producer
  91 │               image: python:3.11-slim
  92 │               command: ["/bin/sh", "-lc"]
  93 │               args:
  94 │                 - |
  95 │                   pip install --no-cache-dir requests psycopg2-binary && python /scripts/produce_postgresql.py
  96 │               env:
  97 └                 - name: SOURCE
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container knowledge-loader in ka0s-knowledge namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:239-257
────────────────────────────────────────
 239 ┌           priorityClassName: ka0s-offline-low
 240 │           restartPolicy: Never
 241 │           containers:
 242 │             - name: loader
 243 │               image: python:3.11-slim
 244 │               command: ["/bin/sh", "-lc"]
 245 │               args:
 246 │                 - |
 247 └                   pip install --no-cache-dir psycopg2-binary && python /scripts/load_spool.py
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): container knowledge-producer-mongo in ka0s-knowledge namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:18-62
────────────────────────────────────────
  18 ┌             - name: producer
  19 │               image: python:3.11-slim
  20 │               command: ["/bin/sh", "-lc"]
  21 │               args:
  22 │                 - |
  23 │                   pip install --no-cache-dir requests pymongo && python /scripts/produce_mongo.py
  24 │               env:
  25 │                 - name: SOURCE
  26 └                   value: mongo
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container knowledge-producer-mysql in ka0s-knowledge namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:166-212
────────────────────────────────────────
 166 ┌           restartPolicy: Never
 167 │           containers:
 168 │             - name: producer
 169 │               image: python:3.11-slim
 170 │               command: ["/bin/sh", "-lc"]
 171 │               args:
 172 │                 - |
 173 │                   pip install --no-cache-dir requests mysql-connector-python && python /scripts/produce_mysql.py
 174 └               env:
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): container knowledge-producer-postgresql in ka0s-knowledge namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:89-139
────────────────────────────────────────
  89 ┌           containers:
  90 │             - name: producer
  91 │               image: python:3.11-slim
  92 │               command: ["/bin/sh", "-lc"]
  93 │               args:
  94 │                 - |
  95 │                   pip install --no-cache-dir requests psycopg2-binary && python /scripts/produce_postgresql.py
  96 │               env:
  97 └                 - name: SOURCE
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): cronjob knowledge-loader in ka0s-knowledge namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:235-264
────────────────────────────────────────
 235 ┌   jobTemplate:
 236 │     spec:
 237 │       template:
 238 │         spec:
 239 │           priorityClassName: ka0s-offline-low
 240 │           restartPolicy: Never
 241 │           containers:
 242 │             - name: loader
 243 └               image: python:3.11-slim
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): cronjob knowledge-producer-mongo in ka0s-knowledge namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:14-69
────────────────────────────────────────
  14 ┌         spec:
  15 │           priorityClassName: ka0s-offline-low
  16 │           restartPolicy: Never
  17 │           containers:
  18 │             - name: producer
  19 │               image: python:3.11-slim
  20 │               command: ["/bin/sh", "-lc"]
  21 │               args:
  22 └                 - |
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): cronjob knowledge-producer-mysql in ka0s-knowledge namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:162-219
────────────────────────────────────────
 162 ┌     spec:
 163 │       template:
 164 │         spec:
 165 │           priorityClassName: ka0s-offline-low
 166 │           restartPolicy: Never
 167 │           containers:
 168 │             - name: producer
 169 │               image: python:3.11-slim
 170 └               command: ["/bin/sh", "-lc"]
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): cronjob knowledge-producer-postgresql in ka0s-knowledge namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:85-146
────────────────────────────────────────
  85 ┌       template:
  86 │         spec:
  87 │           priorityClassName: ka0s-offline-low
  88 │           restartPolicy: Never
  89 │           containers:
  90 │             - name: producer
  91 │               image: python:3.11-slim
  92 │               command: ["/bin/sh", "-lc"]
  93 └               args:
  ..   
────────────────────────────────────────



scripts-configmap.yaml (kubernetes)
===================================
Tests: 23 (SUCCESSES: 22, FAILURES: 1)
Failures: 1 (HIGH: 1, CRITICAL: 0)

KSV-0109 (HIGH): ConfigMap 'knowledge-pipeline-scripts' in 'ka0s-knowledge' namespace stores secrets in key(s) or value(s) '{"        password"}'
════════════════════════════════════════
Storing secrets in configMaps is unsafe

See https://avd.aquasec.com/misconfig/ksv-0109
────────────────────────────────────────


```
