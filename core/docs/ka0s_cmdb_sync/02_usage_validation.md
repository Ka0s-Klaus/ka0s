# Ka0s CMDB Sync: Uso y Validación

## 1. Uso Automático (CI/CD)
La sincronización se invoca automáticamente tras un despliegue exitoso en el flujo `cd-core-services.yml`. No requiere intervención manual.

### Inputs Automáticos
- **services**: Lista de servicios modificados en el commit (detectados por `git diff`).
- **status**: Por defecto `production`.

### 1.2. Sincronización Programada (Full Sync)
Adicionalmente, existe un flujo programado `itop-cmdb-full-sync.yml` que se ejecuta diariamente a las **02:00 UTC**.
- **Objetivo**: Detectar "Drift" (desviaciones) y asegurar que servicios desplegados manualmente o fuera del CD también se registren.
- **Lógica**:
    1.  Escanea el clúster usando `kubectl`.
    2.  Ignora namespaces de sistema (`kube-system`, `cattle-system`, etc.).
    3.  Sincroniza todos los servicios encontrados con estado `production`.

## 2. Uso Manual (Workflow Dispatch)
Es posible ejecutar la sincronización manualmente desde la pestaña "Actions" de GitHub para correcciones o bajas.

### Pasos
1.  Ir a **Actions** -> **Ka0s CMDB Sync -> iTop**.
2.  Clic en **Run workflow**.
3.  **Services**: Nombres de los servicios separados por comas (ej. `elk, itop`).
4.  **Status**: Seleccionar el estado deseado.
    - `production`: Para dar de alta o actualizar.
    - `obsolete`: Para dar de baja lógica un servicio.

## 3. Validación de Resultados

### 3.1. En GitHub Actions
Revisar los logs del job `sync-cmdb`.
- ✅ `Successfully CREATED service ...`
- ✅ `Successfully UPDATED service ...`
- ❌ `Failed to ...`

### 3.2. En iTop
1.  Acceder a la consola de iTop.
2.  Buscar en **Configuration Management** -> **Application Solutions**.
3.  Verificar que el servicio aparece con la Organización correcta y la fecha de "Last Sync" actualizada en la descripción.

### 3.3. Auditoría
Verificar la generación de ficheros en `audit/cmdb/` en el repositorio.
Ejemplo de contenido:
```json
[
  {
    "timestamp": "2023-10-27T10:00:00.123456",
    "service": "elk",
    "operation": "update",
    "status": "success",
    "id": "154",
    "message": "Service updated successfully"
  }
]
```
