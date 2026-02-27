# Integración Técnica: Project Routing

## Componentes del Sistema

### 1. Workflow de GitHub Actions
*   **Archivo**: `.github/workflows/project-routing.yml`
*   **Disparador**: `issues: [opened]`
*   **Ejecutor**: `ubuntu-latest` (no requiere runners self-hosted complejos para esta tarea ligera).

### 2. Autenticación y Permisos
*   **Token**: `KAOS_REPO_TOKEN` (o fallback a `GITHUB_TOKEN`).
*   **Scope Requerido**: `project:write` (o equivalente en Fine-Grained Tokens para la Organización).
*   **Permiso del Workflow**:
    ```yaml
    permissions:
      issues: read
      repository-projects: write
      actions: write
    ```

### 3. Configuración del Proyecto (Project V2)
El script utiliza IDs fijos obtenidos de la API de GitHub GraphQL para el proyecto **Ka0sC0re**.

*   **Project ID**: `PVT_kwDOC79-F84AxdYh` (#4)
*   **Campo Status**: `PVTSSF_lADOC79-F84AxdYhzgnkTfg`

#### Mapeo de Opciones (Single Select)
| Nombre Columna | ID Opción (`SingleSelectOptionId`) |
| :--- | :--- |
| **Issues** | `493fe49c` |
| **Problems** | `e74f7166` |
| **Changes** | `f3009b5e` |
| **Request** | `b97b75b7` |

### 4. Estructura del Script
El paso `Route Issue to Project` realiza dos llamadas principales a la CLI `gh`:
1.  `gh project item-add`: Añade el Issue al proyecto (estado inicial nulo).
2.  `gh project item-edit`: Actualiza el campo `Status` si se detecta una etiqueta conocida (`itop-*`).

### 5. Manejo de Errores
*   Si `gh project item-add` falla (ej. token inválido), el workflow termina con error.
*   Si no se encuentra una etiqueta conocida, el issue se añade pero se imprime un aviso "No matching label found".
