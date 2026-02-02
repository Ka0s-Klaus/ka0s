# Lista de Tareas de Seguridad Kubernetes (Automatizables)

Basado en la [Documentación Oficial de Seguridad de Kubernetes](https://kubernetes.io/docs/concepts/security/) y los estándares de Pod Security.

## 1. Auditoría de Workloads (Pod Security Standards)
Estas tareas verifican que las aplicaciones desplegadas no violen los principios de aislamiento y mínimo privilegio.

*   **Detección de Contenedores Privilegiados**: Identificar pods con `securityContext.privileged: true`. Estos pods tienen acceso casi total al nodo host.
*   **Ejecución como Root**: Detectar pods que no fuerzan `runAsNonRoot: true` o que se ejecutan con UID 0.
*   **Uso de HostPath**: Identificar volúmenes `hostPath` que exponen el sistema de archivos del nodo al pod.
*   **Capabilities Excesivas**: Detectar pods que añaden capacidades de kernel Linux innecesarias (ej. `NET_ADMIN`, `SYS_ADMIN`).

## 2. Auditoría de Control de Acceso (RBAC)
Verificación del principio de "Least Privilege" en el acceso a la API.

*   **Roles con Wildcards (`*`)**: Detectar Roles o ClusterRoles que otorgan acceso a `*` (todos los recursos) o `*` (todos los verbos).
*   **ServiceAccounts con ClusterAdmin**: Listar ServiceAccounts (no usuarios humanos) que tienen el rol `cluster-admin`.
*   **ServiceAccount Automount**: Detectar pods que montan el token de API por defecto innecesariamente (`automountServiceAccountToken: true`).

## 3. Seguridad del Plano de Control (Control Plane)
Configuraciones que deben validarse en los nodos master/manager (requiere acceso SSH o revisión de flags del API Server).

*   **Autenticación Anónima**: Verificar que `--anonymous-auth` esté configurado a `false`.
*   **Cifrado de Secretos (Etcd)**: Verificar si la configuración de `EncryptionConfiguration` está activa para cifrar secretos en reposo.
*   **Audit Logging**: Confirmar que los logs de auditoría están habilitados y activos.

## 4. Seguridad de Red
*   **Aislamiento de Namespaces**: Identificar namespaces que no tienen ninguna `NetworkPolicy` aplicada (tráfico abierto por defecto).

## 5. Vulnerabilidades e Imágenes
*   **Uso de Tags `latest`**: Detectar despliegues que usan la etiqueta `:latest` (práctica insegura por falta de inmutabilidad).
*   **Imágenes desde Registros No Confiables**: Validar que las imágenes provengan de registros aprobados.
