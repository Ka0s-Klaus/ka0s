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
*   **Zabbix**: Integración bidireccional vía API token (ver `core/b2b/core-services/zabbix/README.md`).

## 🔐 Usuario API (para integraciones)

### Crear usuario desde la UI
1. Crear el contacto: `Configuration Management → Contacts → Persons → New`.
2. Crear la cuenta local: `Administration → User accounts → New (Local user)`.
3. Asignar perfiles:
   - Incluir `REST Services User` para permitir el acceso a la API REST.
4. Guardar el login y password del usuario de integración en un gestor de secretos.

### Validar acceso por consola (Basic Auth)
```bash
curl -sS -X POST \
  -u "${ITOP_USER}:${ITOP_PASSWORD}" \
  --data-urlencode 'json_data={"operation":"core/get","class":"Person","key":"SELECT Person","output_fields":"id,friendlyname","limit":1}' \
  "${ITOP_URL}/webservices/rest.php?version=1.3"
```

### Token (si está habilitado)
Si el módulo de autenticación por token está instalado y `allowed_login_types` lo permite, la API puede aceptar token.
En ese caso, el valor del token debe copiarse al momento de crearlo/refrescarlo en la UI (no suele ser recuperable después).

### Crear usuario por API (automatización)
En este repo hay un script para crear (idempotente) el `Person` + `UserLocal` y asignar perfiles para consumo de API:

```bash
python3 devops/core/itop/create-itop-api-user.py
```

Y un workflow on-demand para ejecutarlo desde GitHub Actions:
- `.github/workflows/itop-create-api-user.yml`

### Ejecutar el workflow para crear usuario API en iTop
Workflow: [itop-create-api-user.yml](file:///c:/Users/JhonathanChaves/Desktop/ka0s/.github/workflows/itop-create-api-user.yml)

1. Ir a `GitHub → Actions`.
2. Seleccionar el workflow `iTop Create API User`.
3. Click en `Run workflow`.
4. Completar el input obligatorio `target_org_name` y ejecutar.

Secretos/variables requeridos:
- `ITOP_URL` (o `vars.ITOP_URL`)
- `ITOP_API_USER` y `ITOP_API_PASSWORD` (usuario con permisos para crear cuentas y con perfil `REST Services User`)
- `ITOP_TARGET_PASSWORD` (password del nuevo usuario de integración)
