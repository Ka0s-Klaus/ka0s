# Kubernetes Manifest Validation Report
- **Generated at**: Sun Mar 15 16:50:24 UTC 2026
- **Commit**: 5487dc73540975d98b8a535dd5530d4cad2a5091
- **Date**: Sun Mar 15 16:50:24 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/ka0s-knowledge
```
2026-03-15T16:50:24Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-15T16:50:24Z	INFO	[checks-client] Need to update the checks bundle
2026-03-15T16:50:24Z	INFO	[checks-client] Downloading the checks bundle...
235.65 KiB / 235.65 KiB [------------------------------------------------------] 100.00% ? p/s 200ms2026-03-15T16:50:26Z	INFO	Detected config files	num=5

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
 cronjobs.yaml:181-199
────────────────────────────────────────
 181 ┌           priorityClassName: ka0s-offline-low
 182 │           restartPolicy: Never
 183 │           containers:
 184 │             - name: loader
 185 │               image: python:3.11-slim
 186 │               command: ["/bin/sh", "-lc"]
 187 │               args:
 188 │                 - |
 189 └                   pip install --no-cache-dir psycopg2-binary && python /scripts/load_spool.py
 ...   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'producer' of CronJob 'knowledge-producer-mongo' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 cronjobs.yaml:18-46
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
 cronjobs.yaml:128-154
────────────────────────────────────────
 128 ┌           restartPolicy: Never
 129 │           containers:
 130 │             - name: producer
 131 │               image: python:3.11-slim
 132 │               command: ["/bin/sh", "-lc"]
 133 │               args:
 134 │                 - |
 135 │                   pip install --no-cache-dir requests mysql-connector-python && python /scripts/produce_mysql.py
 136 └               env:
 ...   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'producer' of CronJob 'knowledge-producer-postgresql' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 cronjobs.yaml:73-101
────────────────────────────────────────
  73 ┌           containers:
  74 │             - name: producer
  75 │               image: python:3.11-slim
  76 │               command: ["/bin/sh", "-lc"]
  77 │               args:
  78 │                 - |
  79 │                   pip install --no-cache-dir requests psycopg2-binary && python /scripts/produce_postgresql.py
  80 │               env:
  81 └                 - name: SOURCE
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container knowledge-loader in ka0s-knowledge namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:181-199
────────────────────────────────────────
 181 ┌           priorityClassName: ka0s-offline-low
 182 │           restartPolicy: Never
 183 │           containers:
 184 │             - name: loader
 185 │               image: python:3.11-slim
 186 │               command: ["/bin/sh", "-lc"]
 187 │               args:
 188 │                 - |
 189 └                   pip install --no-cache-dir psycopg2-binary && python /scripts/load_spool.py
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): container knowledge-producer-mongo in ka0s-knowledge namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:18-46
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
 cronjobs.yaml:128-154
────────────────────────────────────────
 128 ┌           restartPolicy: Never
 129 │           containers:
 130 │             - name: producer
 131 │               image: python:3.11-slim
 132 │               command: ["/bin/sh", "-lc"]
 133 │               args:
 134 │                 - |
 135 │                   pip install --no-cache-dir requests mysql-connector-python && python /scripts/produce_mysql.py
 136 └               env:
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): container knowledge-producer-postgresql in ka0s-knowledge namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:73-101
────────────────────────────────────────
  73 ┌           containers:
  74 │             - name: producer
  75 │               image: python:3.11-slim
  76 │               command: ["/bin/sh", "-lc"]
  77 │               args:
  78 │                 - |
  79 │                   pip install --no-cache-dir requests psycopg2-binary && python /scripts/produce_postgresql.py
  80 │               env:
  81 └                 - name: SOURCE
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): cronjob knowledge-loader in ka0s-knowledge namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:177-206
────────────────────────────────────────
 177 ┌   jobTemplate:
 178 │     spec:
 179 │       template:
 180 │         spec:
 181 │           priorityClassName: ka0s-offline-low
 182 │           restartPolicy: Never
 183 │           containers:
 184 │             - name: loader
 185 └               image: python:3.11-slim
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): cronjob knowledge-producer-mongo in ka0s-knowledge namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:14-53
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
 cronjobs.yaml:124-161
────────────────────────────────────────
 124 ┌     spec:
 125 │       template:
 126 │         spec:
 127 │           priorityClassName: ka0s-offline-low
 128 │           restartPolicy: Never
 129 │           containers:
 130 │             - name: producer
 131 │               image: python:3.11-slim
 132 └               command: ["/bin/sh", "-lc"]
 ...   
────────────────────────────────────────


KSV-0118 (HIGH): cronjob knowledge-producer-postgresql in ka0s-knowledge namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 cronjobs.yaml:69-108
────────────────────────────────────────
  69 ┌       template:
  70 │         spec:
  71 │           priorityClassName: ka0s-offline-low
  72 │           restartPolicy: Never
  73 │           containers:
  74 │             - name: producer
  75 │               image: python:3.11-slim
  76 │               command: ["/bin/sh", "-lc"]
  77 └               args:
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
### Scanning: core/b2b/core-services/ollama-embed
```
2026-03-15T16:50:27Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-15T16:50:27Z	INFO	[checks-client] Using existing checks from cache	path="/home/runner/.cache/trivy/policy/content"
2026-03-15T16:50:28Z	INFO	Detected config files	num=4

Report Summary

┌──────────────────────────────┬────────────┬───────────────────┐
│            Target            │    Type    │ Misconfigurations │
├──────────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml               │ kubernetes │         0         │
├──────────────────────────────┼────────────┼───────────────────┤
│ ollama-embed-deployment.yaml │ kubernetes │         3         │
├──────────────────────────────┼────────────┼───────────────────┤
│ ollama-embed-pvc.yaml        │ kubernetes │         0         │
├──────────────────────────────┼────────────┼───────────────────┤
│ ollama-embed-service.yaml    │ kubernetes │         0         │
└──────────────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


ollama-embed-deployment.yaml (kubernetes)
=========================================
Tests: 24 (SUCCESSES: 21, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'ollama' of Deployment 'ollama-embed' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 ollama-embed-deployment.yaml:21-41
────────────────────────────────────────
  21 ┌         - name: ollama
  22 │           image: ollama/ollama:latest
  23 │           ports:
  24 │             - containerPort: 11434
  25 │           env:
  26 │             - name: OLLAMA_KEEP_ALIVE
  27 │               value: "24h"
  28 │             - name: OLLAMA_HOST
  29 └               value: "0.0.0.0"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container ollama-embed in ollama-embed namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 ollama-embed-deployment.yaml:21-41
────────────────────────────────────────
  21 ┌         - name: ollama
  22 │           image: ollama/ollama:latest
  23 │           ports:
  24 │             - containerPort: 11434
  25 │           env:
  26 │             - name: OLLAMA_KEEP_ALIVE
  27 │               value: "24h"
  28 │             - name: OLLAMA_HOST
  29 └               value: "0.0.0.0"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment ollama-embed in ollama-embed namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 ollama-embed-deployment.yaml:17-45
────────────────────────────────────────
  17 ┌     spec:
  18 │       nodeSelector:
  19 │         kubernetes.io/hostname: k8-node-20
  20 │       containers:
  21 │         - name: ollama
  22 │           image: ollama/ollama:latest
  23 │           ports:
  24 │             - containerPort: 11434
  25 └           env:
  ..   
────────────────────────────────────────


```
### Scanning: core/b2b/core-services/ollama-gen
```
2026-03-15T16:50:28Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-15T16:50:28Z	INFO	[checks-client] Using existing checks from cache	path="/home/runner/.cache/trivy/policy/content"
2026-03-15T16:50:30Z	INFO	Detected config files	num=4

Report Summary

┌────────────────────────────┬────────────┬───────────────────┐
│           Target           │    Type    │ Misconfigurations │
├────────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml             │ kubernetes │         0         │
├────────────────────────────┼────────────┼───────────────────┤
│ ollama-gen-deployment.yaml │ kubernetes │         3         │
├────────────────────────────┼────────────┼───────────────────┤
│ ollama-gen-pvc.yaml        │ kubernetes │         0         │
├────────────────────────────┼────────────┼───────────────────┤
│ ollama-gen-service.yaml    │ kubernetes │         0         │
└────────────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


ollama-gen-deployment.yaml (kubernetes)
=======================================
Tests: 24 (SUCCESSES: 21, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'ollama' of Deployment 'ollama-gen' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 ollama-gen-deployment.yaml:21-37
────────────────────────────────────────
  21 ┌         - name: ollama
  22 │           image: ollama/ollama:latest
  23 │           ports:
  24 │             - containerPort: 11434
  25 │           env:
  26 │             - name: OLLAMA_KEEP_ALIVE
  27 │               value: "24h"
  28 │             - name: OLLAMA_HOST
  29 └               value: "0.0.0.0"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container ollama-gen in ollama-gen namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 ollama-gen-deployment.yaml:21-37
────────────────────────────────────────
  21 ┌         - name: ollama
  22 │           image: ollama/ollama:latest
  23 │           ports:
  24 │             - containerPort: 11434
  25 │           env:
  26 │             - name: OLLAMA_KEEP_ALIVE
  27 │               value: "24h"
  28 │             - name: OLLAMA_HOST
  29 └               value: "0.0.0.0"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment ollama-gen in ollama-gen namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 ollama-gen-deployment.yaml:17-41
────────────────────────────────────────
  17 ┌     spec:
  18 │       nodeSelector:
  19 │         kubernetes.io/hostname: k8-manager
  20 │       containers:
  21 │         - name: ollama
  22 │           image: ollama/ollama:latest
  23 │           ports:
  24 │             - containerPort: 11434
  25 └           env:
  ..   
────────────────────────────────────────


```
