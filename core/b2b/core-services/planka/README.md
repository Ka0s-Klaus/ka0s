# Planka - Kanban Board for Ka0s

Despliegue de **Planka**, una herramienta de gestión de proyectos Kanban moderna y eficiente (React + Redux + Sails.js).

## 🚀 Arquitectura
Este despliegue consta de:
1.  **PostgreSQL 14**: Base de datos dedicada (`planka-db`) con persistencia local.
2.  **Planka Server**: Aplicación principal expuesta vía LoadBalancer.
3.  **Almacenamiento**: Volúmenes persistentes para avatares, fondos y adjuntos.

## 📋 Configuración
| Variable | Valor | Descripción |
|----------|-------|-------------|
| URL | `http://planka.ka0s.io` | Acceso Web (apunta al LoadBalancer IP) |
| DB | `postgresql://planka-db` | Base de datos interna |
| User Default | `admin` / `demo` | Credenciales iniciales |

## 🛠️ Despliegue
El despliegue se gestiona automáticamente vía **GitHub Actions** (`cd-core-services.yml`) al detectar cambios en este directorio.

### Comandos Manuales
```bash
# Aplicar configuración
kubectl apply -k .

# Verificar estado
kubectl get pods -n planka
kubectl get svc -n planka
```

## 🔒 Seguridad
- Secretos gestionados en `planka-secret.yaml` (Base64/Opaque).
- Conexión a DB interna (no expuesta).
- Acceso Web vía LoadBalancer (IP dedicada).
