# Guía del Script de Auditoría: `kube-audit.sh`

## 1. Propósito

El script `kube-audit.sh` está diseñado para realizar una auditoría exhaustiva de un clúster de Kubernetes. Se conecta al clúster, extrae información detallada sobre todos los recursos (tanto a nivel de clúster como por cada `namespace`) y guarda los resultados en ficheros JSON estructurados.

## 2. Funcionalidad

El script realiza las siguientes acciones en el host remoto (que debe tener acceso al clúster de Kubernetes):

1.  **Configuración de `kubectl`**: Exporta la variable de entorno `KUBECONFIG` para apuntar a `/etc/kubernetes/admin.conf`. Esto es crucial para que `kubectl` pueda autenticarse contra la API del clúster cuando se ejecuta con `sudo`.
2.  **Preparación del Directorio**: Limpia y crea un directorio de resultados (por defecto `/tmp/results`).
3.  **Auditoría de Recursos Globales**: Obtiene en formato JSON los recursos que no pertenecen a un `namespace` específico, como `nodes`, `namespaces`, `persistentvolumes`, `clusterroles`, etc.
4.  **Auditoría de Recursos por Namespace**: 
    a. Obtiene una lista de todos los `namespaces` del clúster.
    b. Itera sobre cada `namespace` y crea una subcarpeta para él.
    c. Dentro de cada `namespace`, obtiene en formato JSON todos los recursos importantes como `pods`, `services`, `deployments`, `secrets`, `configmaps`, etc.
5.  **Finalización**: Muestra un mensaje de éxito y lista el contenido del directorio de resultados para confirmar que los ficheros se han generado.

## 3. Cómo Ejecutarlo

Para lanzar una auditoría de Kubernetes, ejecuta el workflow `Ka0s C0re SSH Host Connect` desde la pestaña "Actions" de GitHub con los siguientes parámetros:

*   **`script-path`**: `devops/core/k8s/kube-audit.sh`
*   **`script-args`**: (Dejar en blanco)
*   **`results-path`**: `audit/kube/`

Tras la ejecución, la carpeta `audit/kube/` en tu repositorio contendrá una estructura de directorios y ficheros JSON que representan el estado completo de tu clúster de Kubernetes en ese momento.