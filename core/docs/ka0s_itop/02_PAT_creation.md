
### 3. Creación del Personal Access Token (PAT)

Aquí se detalla cómo generar el token de acceso necesario.

```markdown:%2FUsers%2Fsantale%2Fka0s-klaus%2Fka0s%2Fcore%2Fdocs%2Fka0s_itop%2F02_github_pat.md
# Paso 2: Creación del Personal Access Token (PAT) en GitHub

Para que iTop pueda autenticarse en la API de GitHub y disparar el workflow, se necesita un Personal Access Token (PAT).

## Pasos para crear el PAT

1.  **Ve a la configuración de desarrollador en GitHub**:
    -   Haz clic en tu foto de perfil en la esquina superior derecha.
    -   Selecciona **Settings**.
    -   En el menú de la izquierda, desplázate hacia abajo y haz clic en **Developer settings**.

2.  **Genera un nuevo token**:
    -   Ve a **Personal access tokens** > **Tokens (classic)**.
    -   Haz clic en **Generate new token** (o **Generate new token (classic)**).

3.  **Configura el token**:
    -   **Note**: Dale un nombre descriptivo, como `itop_integration`.
    -   **Expiration**: Define una fecha de expiración (se recomienda por seguridad).
    -   **Select scopes**: Selecciona el scope `repo`. Esto le dará al token los permisos necesarios para acceder al repositorio y disparar workflows.

4.  **Guarda el token**:
    -   Haz clic en **Generate token**.
    -   **¡Importante!** Copia el token inmediatamente y guárdalo en un lugar seguro. No podrás volver a verlo después de abandonar la página.

Este token se usará en la configuración del webhook en iTop para autenticar la llamada a la API de GitHub.
