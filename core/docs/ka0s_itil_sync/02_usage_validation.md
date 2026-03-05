# Ka0s ITIL Sync - Uso y Validación

## Flujo de Trabajo
1.  Editar archivos de configuración en `compliance/itil/`:
    *   `contacts.yaml`: Definición de equipos y miembros.
    *   `service_catalog.yaml`: Definición de servicios y subcategorías.
2.  Crear Pull Request con los cambios.
3.  Al hacer merge a `main`, el workflow se activa automáticamente.

## Estructura de Archivos

### contacts.yaml
```yaml
teams:
  - name: "SRE Team"
    org_id: "Ka0s Corp"
    status: "active"
    members:
      - email: "alice@ka0s.io"
        role: "Lead"
      - email: "bob@ka0s.io"
        role: "Member"
```

### service_catalog.yaml
```yaml
services:
  - name: "K8s Platform"
    org_id: "Ka0s Corp"
    status: "production"
    subcategories:
      - name: "Cluster Provisioning"
        type: "service_request"
      - name: "Node Failure"
        type: "incident"
```

## Validación
*   Verificar en la pestaña "Actions" de GitHub que el workflow `[Ka0s] ITIL Config Sync` se ha ejecutado correctamente (verde).
*   Verificar en iTop que los objetos se han creado o actualizado.
