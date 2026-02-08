# Planka - Kanban Board for Ka0s

Despliegue de **Planka**, una herramienta de gestión de proyectos Kanban moderna y eficiente (React + Redux + Sails.js).

## 🚀 Arquitectura
Este despliegue consta de:
1.  **PostgreSQL 14**: Base de datos dedicada (`planka-db`) con persistencia local.
    *   **Afinidad**: Configurado para ejecutarse exclusivamente en `k8-node-20` (Performance).
    *   **Recursos**: Limitado para evitar sobrecarga (Max 512Mi RAM).
2.  **Planka Server**: Aplicación principal expuesta vía LoadBalancer.
    *   **Afinidad**: Preferencia por `k8-node-20`.
    *   **Recursos**: Limitado (Max 1Gi RAM).
3.  **Almacenamiento**: Volúmenes persistentes para avatares, fondos y adjuntos.

## 📋 Acceso y Credenciales

### URLs de Acceso
*   **IP Directa (HTTP/HTTPS)**: `http://192.168.1.244`
*   **Dominio (HTTPS)**: `https://planka.ka0s.io` (Requiere configuración DNS local/global apuntando a la IP 192.168.1.244)

### Credenciales de Administrador (Por defecto)
Estas credenciales se generan automáticamente en el primer despliegue gracias a las variables de entorno.

| Campo | Valor |
|-------|-------|
| **Email** | `admin@ka0s.io` |
| **Username** | `admin` |
| **Password** | `demo` |

> **Nota**: Se recomienda cambiar la contraseña inmediatamente después del primer inicio de sesión.

## ⚙️ Administración
Planka es una herramienta minimalista. No cuenta con un "Panel de Administración" separado (tipo `/admin`).
Las funciones administrativas se encuentran integradas en la interfaz de usuario:
1.  Haz clic en tu **Avatar** (esquina inferior).
2.  Busca la opción **Users** para gestionar cuentas de usuarios.
3.  La gestión de **Proyectos** y **Tableros** se realiza desde la vista principal.

## 🛠️ Despliegue y Mantenimiento
El despliegue se gestiona automáticamente vía **GitHub Actions** (`cd-core-services.yml`).

### Comandos Manuales
```bash
# Aplicar configuración
kubectl apply -k .

# Verificar estado
kubectl get pods -n planka
kubectl get svc -n planka
```

### Resource Quotas (Protección de Nodos)
Se han implementado cuotas estrictas en el namespace `planka` para proteger la estabilidad del clúster (especialmente nodos 30/40):
*   **CPU Limit**: 2 Cores
*   **Memory Limit**: 4Gi
*   **Node Affinity**: Forzado a nodos de alto rendimiento (`k8-node-20`).

## 🔒 Seguridad
- Secretos gestionados en `planka-secret.yaml` (Base64/Opaque).
- `TRUST_PROXY` habilitado para manejo correcto de cabeceras tras LoadBalancer.
- Base de datos aislada sin exposición externa directa.
