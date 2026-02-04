# Guía de Uso y Validación

## Pasos para Eliminar un Namespace

1.  **Identificar el Namespace**: Asegúrate de tener el nombre exacto (ej. `itop-test`).
2.  **Lanzar Workflow**:
    ```bash
    gh workflow run kaos-delete-namespace.yml -f namespace=itop-test -f confirm=DELETE
    ```
3.  **Verificar Ejecución**:
    - El job `delete-namespace` debe finalizar en verde.
    - El job `trigger-cluster-status` debe iniciarse automáticamente después.

## Validación de Resultados

### 1. Verificar Informe de Eliminación
Revisa la carpeta `audit/trash/` en el repositorio. Deberías ver un archivo nuevo:
`delete-report-itop-test-20260204-XXXXXX.md`

Ejemplo de contenido esperado:
```markdown
# Ka0s Deletion Report: itop-test
...
## 2. Proceso de Eliminación de Recursos
pod "itop-xyz" deleted
service "itop" deleted
...
✅ Namespace eliminado correctamente de forma estándar.
```

### 2. Verificar Estado del Cluster
Tras la eliminación, el workflow dispara `audit-cluster-status.yml`. Revisa `audit/kube/cluster-dashboard-....html` para confirmar que el namespace ya no aparece en la lista de recursos y que el cluster sigue saludable.
