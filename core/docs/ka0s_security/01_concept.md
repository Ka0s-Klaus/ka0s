# Concepto y Arquitectura: Ka0s Security Audit

## 1. Visión General
El módulo de seguridad de Ka0s (`ka0s_security`) implementa una estrategia de **Seguridad Ofensiva Automatizada** para entornos Kubernetes. Su objetivo es detectar configuraciones inseguras, violaciones de privilegios y brechas en la red antes de que puedan ser explotadas.

## 2. Pilares de Auditoría
El sistema se basa en los estándares oficiales de Kubernetes (Pod Security Standards) y CIS Benchmarks, cubriendo tres áreas críticas:

### 2.1 Workloads (Cargas de Trabajo)
Verifica que las aplicaciones desplegadas sigan el principio de mínimo privilegio:
*   **No Privileged**: Contenedores sin acceso root al host.
*   **No Root User**: Procesos ejecutándose con UIDs restringidos.
*   **Filesystem Isolation**: Prohibición de montar directorios sensibles del nodo (`hostPath`).
*   **Inmutabilidad**: Prohibición de tags mutables (`:latest`).

### 2.2 RBAC (Control de Acceso)
Audita la configuración de identidades y permisos:
*   **ServiceAccounts**: Detección de cuentas de servicio con permisos de `cluster-admin`.
*   **Wildcards**: Identificación de roles con permisos excesivos (`*`) que violan el principio de *Least Privilege*.

### 2.3 Networking (Redes)
Evalúa el aislamiento de tráfico:
*   **NetworkPolicies**: Detección de namespaces sin políticas de red (Zero Trust fallido).

### 2.4 Vulnerability Scanning (CVEs)
Analiza los artefactos en ejecución para detectar vulnerabilidades conocidas:
*   **Imágenes**: Escaneo de paquetes de sistema y dependencias de lenguaje en busca de CVEs críticos y altos.
*   **Compliance**: Verificación de configuraciones contra estándares de seguridad (NSA/CISA).

## 3. Arquitectura Técnica
*   **Ejecución Remota Segura**: Utiliza un túnel SSH efímero (`kubectl-tunnel`) para conectar GitHub Actions con el clúster privado sin exponer la API a internet.
*   **Modularidad**: Scripts independientes (`bash`) para cada dominio de seguridad, orquestados por un workflow central.
