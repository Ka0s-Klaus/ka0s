# Integración en el Ecosistema

## 1. Instalación de Dependencias
A diferencia de versiones anteriores que dependían de acciones de terceros (como `azure/setup-kubectl`), esta versión es **autocontenida y nativa**:

*   **Kubectl**: Se descarga directamente desde `dl.k8s.io` usando `curl`.
*   **SSH**: Utiliza el cliente `ssh` estándar de Linux disponible en el runner.

## 2. Requisitos de Red
Para que esta acción funcione, es imperativo que el entorno de ejecución tenga visibilidad de red hacia el servidor SSH (`host`).

*   **Recomendación**: Usar `runs-on: swarm-runners-scaleset` para garantizar que el tráfico se origine desde dentro de la red confiable o VPN permitida.

## 3. Gestión de Kubeconfig
La acción manipula el archivo `~/.kube/config` del runner:
1.  Descarga el config remoto.
2.  Reemplaza la dirección del servidor por `127.0.0.1`.
3.  Configura `insecure-skip-tls-verify=true` porque el certificado SSL del clúster no coincidirá con `localhost`.

> **Nota de Seguridad**: El archivo kubeconfig generado es válido solo durante la sesión del runner y se destruye al finalizar el job.
