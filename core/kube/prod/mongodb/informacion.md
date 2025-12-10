apiVersion: apps/v1
kind: ReplicaSet
metadata:
  annotations:
    argocd.argoproj.io/tracking-id: mongodb-kaos-prod:apps/Deployment:kaos-prod/mongodb-kaos
    deployment.kubernetes.io/desired-replicas: '1'
    deployment.kubernetes.io/max-replicas: '2'
    deployment.kubernetes.io/revision: '4'
  creationTimestamp: '2025-10-16T11:39:45Z'
  generation: 1
  labels:
    app.kubernetes.io/component: mongodb
    app.kubernetes.io/instance: mongodb-kaos
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: mongodb-kaos
    app.kubernetes.io/version: 8.0.13
    helm.sh/chart: mongodb-16.5.45
    pod-template-hash: 5cf454479b
  name: mongodb-kaos-5cf454479b
  namespace: kaos-prod
  ownerReferences:
    - apiVersion: apps/v1
      blockOwnerDeletion: true
      controller: true
      kind: Deployment
      name: mongodb-kaos
      uid: 298934fb-e29a-448d-ae24-fdc36bf644fb
  resourceVersion: '1762909974336079010'
  uid: 4a9cc87f-f20e-4e63-bb68-0bac24b37254
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/component: mongodb
      app.kubernetes.io/instance: mongodb-kaos
      app.kubernetes.io/name: mongodb-kaos
      pod-template-hash: 5cf454479b
  template:
    metadata:
      creationTimestamp: null
      labels:
        app.kubernetes.io/component: mongodb
        app.kubernetes.io/instance: mongodb-kaos
        app.kubernetes.io/managed-by: Helm
        app.kubernetes.io/name: mongodb-kaos
        app.kubernetes.io/version: 8.0.13
        helm.sh/chart: mongodb-16.5.45
        pod-template-hash: 5cf454479b
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - podAffinityTerm:
                labelSelector:
                  matchLabels:
                    app.kubernetes.io/component: mongodb
                    app.kubernetes.io/instance: mongodb-kaos
                    app.kubernetes.io/name: mongodb-kaos
                topologyKey: kubernetes.io/hostname
              weight: 1
      automountServiceAccountToken: false
      containers:
        - env:
            - name: BITNAMI_DEBUG
              value: 'false'
            - name: MONGODB_EXTRA_USERNAMES
              value: usuario1
            - name: MONGODB_EXTRA_DATABASES
              value: ryze
            - name: MONGODB_EXTRA_PASSWORDS_FILE
              value: /opt/bitnami/mongodb/secrets/mongodb-passwords
            - name: MONGODB_ROOT_USER
              value: root
            - name: MONGODB_ROOT_PASSWORD_FILE
              value: /opt/bitnami/mongodb/secrets/mongodb-root-password
            - name: ALLOW_EMPTY_PASSWORD
              value: 'no'
            - name: MONGODB_SYSTEM_LOG_VERBOSITY
              value: '0'
            - name: MONGODB_DISABLE_SYSTEM_LOG
              value: 'no'
            - name: MONGODB_DISABLE_JAVASCRIPT
              value: 'no'
            - name: MONGODB_ENABLE_JOURNAL
              value: 'yes'
            - name: MONGODB_PORT_NUMBER
              value: '27017'
            - name: MONGODB_ENABLE_IPV6
              value: 'no'
            - name: MONGODB_ENABLE_DIRECTORY_PER_DB
              value: 'no'
          image: >-
            europe-docker.pkg.dev/mm-platform-sre-prod/container-images-public/bitnamilegacy/mongodb:8.0.13-debian-12-r0
          imagePullPolicy: IfNotPresent
          livenessProbe:
            exec:
              command:
                - /bitnami/scripts/ping-mongodb.sh
            failureThreshold: 6
            initialDelaySeconds: 30
            periodSeconds: 20
            successThreshold: 1
            timeoutSeconds: 10
          name: mongodb
          ports:
            - containerPort: 27017
              name: mongodb
              protocol: TCP
          readinessProbe:
            exec:
              command:
                - /bitnami/scripts/readiness-probe.sh
            failureThreshold: 6
            initialDelaySeconds: 5
            periodSeconds: 10
            successThreshold: 1
            timeoutSeconds: 5
          resources:
            limits:
              cpu: 750m
              ephemeral-storage: 2Gi
              memory: 768Mi
            requests:
              cpu: 500m
              ephemeral-storage: 50Mi
              memory: 512Mi
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop:
                - ALL
            privileged: false
            readOnlyRootFilesystem: true
            runAsGroup: 1001
            runAsNonRoot: true
            runAsUser: 1001
            seLinuxOptions: {}
            seccompProfile:
              type: RuntimeDefault
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /tmp
              name: empty-dir
              subPath: tmp-dir
            - mountPath: /opt/bitnami/mongodb/conf
              name: empty-dir
              subPath: app-conf-dir
            - mountPath: /opt/bitnami/mongodb/tmp
              name: empty-dir
              subPath: app-tmp-dir
            - mountPath: /opt/bitnami/mongodb/logs
              name: empty-dir
              subPath: app-logs-dir
            - mountPath: /.mongodb
              name: empty-dir
              subPath: mongosh-home
            - mountPath: /bitnami/mongodb
              name: datadir
            - mountPath: /bitnami/scripts
              name: common-scripts
            - mountPath: /opt/bitnami/mongodb/secrets
              name: mongodb-secrets
      dnsPolicy: ClusterFirst
      enableServiceLinks: true
      initContainers:
        - args:
            - '-ec'
            - |
              ln -sf /dev/stdout "/opt/bitnami/mongodb/logs/mongodb.log"
          command:
            - /bin/bash
          image: >-
            europe-docker.pkg.dev/mm-platform-sre-prod/container-images-public/bitnamilegacy/mongodb:8.0.13-debian-12-r0
          imagePullPolicy: IfNotPresent
          name: log-dir
          resources:
            limits:
              cpu: 750m
              ephemeral-storage: 2Gi
              memory: 768Mi
            requests:
              cpu: 500m
              ephemeral-storage: 50Mi
              memory: 512Mi
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop:
                - ALL
            privileged: false
            readOnlyRootFilesystem: true
            runAsGroup: 1001
            runAsNonRoot: true
            runAsUser: 1001
            seLinuxOptions: {}
            seccompProfile:
              type: RuntimeDefault
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /opt/bitnami/mongodb/logs
              name: empty-dir
              subPath: app-logs-dir
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext:
        fsGroup: 1001
        fsGroupChangePolicy: Always
      serviceAccount: mongodb-kaos
      serviceAccountName: mongodb-kaos
      terminationGracePeriodSeconds: 30
      volumes:
        - emptyDir: {}
          name: empty-dir
        - configMap:
            defaultMode: 360
            name: mongodb-kaos-common-scripts
          name: common-scripts
        - name: mongodb-secrets
          secret:
            defaultMode: 420
            secretName: mongodb-kaos
        - name: datadir
          persistentVolumeClaim:
            claimName: mongodb-kaos
status:
  availableReplicas: 1
  fullyLabeledReplicas: 1
  observedGeneration: 1
  readyReplicas: 1
  replicas: 1