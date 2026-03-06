# Ka0s Self Service Portal - Diseño Técnico

## 1. Arquitectura de Alto Nivel

El sistema sigue una arquitectura de microservicios o modular, separando claramente el Frontend, el Backend y la capa de Datos.

```mermaid
graph TD
    User[Usuario] -->|HTTPS| FE[Frontend (React/Next.js)]
    FE -->|REST API| BE[Backend API (Python/Node)]
    BE -->|Auth| IDP[Identity Provider / Auth Service]
    BE -->|Read/Write| DB[(MongoDB - Service Catalog)]
    BE -->|Trigger| K8s[Kubernetes / ArgoCD]
    BE -->|Trigger| GH[GitHub Actions]
```

## 2. Componentes del Sistema

### 2.1 Frontend (La Cara del Portal)
*   **Tecnología**: React.js o Next.js para una experiencia SPA (Single Page Application).
*   **Estilo**: TailwindCSS para diseño rápido y consistente.
*   **Funcionalidad**:
    *   Renderizado dinámico de formularios basados en la definición del servicio (JSON Schema).
    *   Gestión de estado local para la sesión del usuario.

### 2.2 Backend (El Orquestador)
*   **Tecnología**: Python (FastAPI) o Node.js (Express/NestJS).
*   **Responsabilidades**:
    *   **Autenticación**: Validar credenciales y emitir tokens JWT.
    *   **Autorización**: Middleware para verificar permisos (RBAC) antes de ejecutar acciones.
    *   **Proxy de Servicios**: Reenviar peticiones a los ejecutores reales (GitHub Actions, K8s API, iTop).

### 2.3 Mecánica Dinámica (Service Catalog)
La "magia" del portal reside en su capacidad de definir servicios como datos, no como código duro.
Cada servicio se define en la base de datos (MongoDB) con un esquema como:

```json
{
  "id": "restart-pod",
  "name": "Reiniciar Pod",
  "description": "Reinicia un pod específico en un namespace.",
  "icon": "refresh",
  "roles_allowed": ["admin", "operator"],
  "input_schema": {
    "type": "object",
    "properties": {
      "namespace": { "type": "string", "enum": ["default", "prod"] },
      "pod_name": { "type": "string" }
    },
    "required": ["namespace", "pod_name"]
  },
  "execution_target": "github_action",
  "execution_config": {
    "repo": "ka0s-ops",
    "workflow": "restart-pod.yml"
  }
}
```

El Frontend lee esta definición y genera automáticamente el formulario de entrada.

## 3. Seguridad y Login (RBAC)

### 3.1 Flujo de Autenticación
1.  Usuario ingresa credenciales.
2.  Backend valida contra base de datos de usuarios o LDAP/AD.
3.  Si es válido, retorna **JWT (JSON Web Token)** firmado.
4.  El JWT contiene los `claims` del usuario: `{"sub": "user1", "roles": ["dev", "viewer"]}`.

### 3.2 Control de Acceso (RBAC)
*   **Nivel de Ruta**: El Backend protege endpoints (ej. `/api/admin/*` requiere rol `admin`).
*   **Nivel de Servicio**: Antes de listar un servicio en el catálogo, el backend filtra por los roles del usuario.
    *   *Si el servicio requiere "admin" y el usuario es "dev", el servicio ni siquiera aparece en su lista.*

## 4. Modelo de Datos (MongoDB)

*   **Collection `users`**: Credenciales (hashed), perfil, roles.
*   **Collection `services`**: Definiciones de los servicios disponibles.
*   **Collection `audit_log`**: Registro inmutable de quién hizo qué y cuándo.
