# Guía del Script: `system-update.sh`

## 1. Propósito

El script `system-update.sh` es el motor de actualización del clúster. Diseñado para ejecutarse desde el nodo `k8-manager`, orquesta la actualización secuencial del sistema operativo (Ubuntu) en todos los nodos de la infraestructura Kubernetes.

## 2. Funcionalidad

El script realiza las siguientes acciones de forma automatizada:

1.  **Preparación**:
    *   Crea un directorio temporal para logs.
    *   Verifica e instala `sshpass` si es necesario (requerido para nodos con autenticación por contraseña).

2.  **Actualización Secuencial**:
    *   **Local (k8-manager)**: Ejecuta `apt update && apt upgrade -y` localmente.
    *   **Remoto (k8-node-20)**: Conecta vía SSH (puerto 6666, clave RSA) y actualiza.
    *   **Remoto (k8-node-30 y k8-node-40)**: Conecta vía SSH (puerto 22, contraseña con `sshpass`) y actualiza.

3.  **Logging**:
    *   Captura toda la salida estándar y de error.
    *   Genera un fichero de log único y consolidado con timestamps.

## 3. Uso y Parámetros

Este script está pensado para ser invocado por el workflow de GitHub, pero puede ejecutarse manualmente en el `k8-manager` si se tienen los permisos adecuados.

```bash
./system-update.sh [RESULTS_DIR] [SUDO_PASS] [WORKER_SSH_PASS]
```

*   **`RESULTS_DIR`**: Directorio donde guardar el log (por defecto `/tmp/results`).
*   **`SUDO_PASS`**: Contraseña para elevar privilegios con `sudo`.
*   **`WORKER_SSH_PASS`**: Contraseña SSH para los nodos que no usan clave (30 y 40).

## 4. Estructura de Nodos Soportada

El script tiene "hardcoded" la lógica de conexión específica para tu topología actual:

| Nodo | IP | Método de Conexión |
| :--- | :--- | :--- |
| **k8-manager** | Local | Ejecución directa |
| **k8-node-20** | `192.168.1.20` | SSH Key (`~/.ssh/k8-node-20`), Puerto 6666 |
| **k8-node-30** | `192.168.1.30` | SSH Password (`sshpass`), Puerto 22 |
| **k8-node-40** | `192.168.1.40` | SSH Password (`sshpass`), Puerto 22 |

## 5. Salida

Al finalizar, el script indicará la ubicación del fichero de log generado, por ejemplo:
`Log saved to: /tmp/results/system_update_20260129_144500.log`
