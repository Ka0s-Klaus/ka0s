# iTop - ITSM & CMDB

**Rol**: Gestión de Servicios de TI (ITSM) y Base de Datos de Gestión de Configuración (CMDB).

iTop es la herramienta donde se modela toda la infraestructura, incidencias y cambios del proyecto Ka0s.

## 🚀 Funcionalidades
*   **Inventario**: Registro de todos los nodos, servicios y aplicaciones.
*   **Helpdesk**: Gestión de tickets e incidencias.
*   **Relaciones**: Mapa de dependencias entre servicios.

## 📡 Accesibilidad

*   **Dominio**: `https://itsm.ka0s.io`
*   **Ingress**: Configurado en `ingress.yaml` con terminación TLS.

## 🛠️ Guía de Despliegue

### Opción A: Automático (GitOps)
Commit y Push a `main` dispara el pipeline de despliegue.

### Opción B: Manual
```bash
kubectl apply -k core/b2b/core-services/itop
```

## ⚙️ Notas de Infraestructura
*   **Base de Datos**: Utiliza una instancia dedicada (ver `database-deployment.yaml`).
*   **Persistencia**: Volúmenes persistentes configurados para DB y adjuntos.
