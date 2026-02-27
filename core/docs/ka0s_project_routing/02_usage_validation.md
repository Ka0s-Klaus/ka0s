# Validación de Uso: Enrutamiento de Proyectos

## Escenarios de Prueba

### 1. Creación de Incidencia (Incident)
**Objetivo**: Verificar que una nueva incidencia se asigna a la columna "Issues".

1.  Ir a **Issues** > **New Issue**.
2.  Seleccionar plantilla **Incident**.
3.  Rellenar título y descripción mínimos.
4.  Enviar Issue.
5.  **Verificación**:
    - Ir a **Projects** > **Ka0sC0re**.
    - Comprobar que el Issue aparece en la columna **Issues**.

### 2. Creación de Cambio (Change)
**Objetivo**: Verificar que un nuevo cambio se asigna a la columna "Changes".

1.  Crear Issue con plantilla **Change**.
2.  **Verificación**:
    - Comprobar que el Issue aparece en la columna **Changes**.

### 3. Creación de Solicitud (Request)
**Objetivo**: Verificar que una nueva solicitud se asigna a la columna "Request".

1.  Crear Issue con plantilla **Service Request**.
2.  **Verificación**:
    - Comprobar que el Issue aparece en la columna **Request**.

### 4. Issue Genérico
**Objetivo**: Verificar el comportamiento por defecto.

1.  Crear Issue "en blanco" (sin plantilla o sin etiquetas `itop-*`).
2.  **Verificación**:
    - El Issue debe añadirse al proyecto pero permanecer en **No Status** (Inbox).

## Troubleshooting

Si el workflow falla:
1.  Revisar pestaña **Actions** > **Project Routing**.
2.  Verificar que el secreto `KAOS_REPO_TOKEN` tiene permisos `write` sobre los proyectos de la organización.
3.  Confirmar que los IDs de columnas (`OPT_ISSUES`, etc.) no han cambiado en el Proyecto (si se borran y recrean columnas, los IDs cambian).
