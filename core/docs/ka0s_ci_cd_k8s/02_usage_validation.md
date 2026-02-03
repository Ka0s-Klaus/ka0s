# Uso y Validación del Sistema CI/CD

Esta guía explica cómo interactuar con el sistema de automatización como desarrollador.

## 1. Crear y Validar Cambios (CI)

Como desarrollador, tu flujo de trabajo es el siguiente:

1.  **Crear Rama**: Crea una rama para tu feature o fix.
    ```bash
    git checkout -b feat/mi-nuevo-servicio
    ```
2.  **Modificar Código**: Edita los archivos YAML en `core/b2b/core-services/<tu-servicio>/`.
3.  **Push**: Sube los cambios.
    ```bash
    git push origin feat/mi-nuevo-servicio
    ```
4.  **Verificación Automática**:
    *   Ve a la pestaña **Actions** en GitHub.
    *   Busca el workflow **"CI Kubernetes Validation"**.
    *   Si todo es correcto, el workflow pasará en verde.
    *   **Importante**: El sistema hará un commit automático en tu rama añadiendo el informe de validación en `audit/kube/`. Haz `git pull` para bajártelo.

## 2. Desplegar a Producción (CD)

Una vez tu rama ha pasado el CI y ha sido aprobada:

1.  **Merge a Main**: Fusiona tu Pull Request a la rama `main`.
2.  **Despliegue Automático**:
    *   Esto disparará el workflow **"CD Core Services Deploy"**.
    *   El sistema detectará tu servicio modificado y aplicará los cambios.
3.  **Verificación de Despliegue**:
    *   Revisa el log del workflow en GitHub Actions.
    *   Busca la sección "Running Advanced Verification".
    *   El sistema generará un informe final en `audit/deploy/` y lo subirá a la rama `main`.

## 3. Interpretación de Informes de Auditoría

### Informe de CI (`audit/kube/`)
Contiene el resultado del escaneo de **Trivy**. Busca secciones de "High" o "Critical" vulnerabilities.
*   **Ejemplo**:
    ```markdown
    # Kubernetes Manifest Validation Report
    ## Trivy Configuration Check
    ### Scanning: core/b2b/core-services/itop
    Running Trivy on core/b2b/core-services/itop...
    ...
    ```

### Informe de CD (`audit/deploy/`)
Contiene la evidencia del despliegue exitoso.
*   **Ejemplo**:
    ```markdown
    Deployment Report: core/b2b/core-services/itop
    Date: Tue Feb 3 ...
    Namespace: itop
    ---------------------------------------------------
    >>> Pods Status:
    itop-xyz   1/1     Running   ...
    
    >>> Advanced Verification Results:
    === Starting Kubernetes Deployment Verification ===
    ✅ All pods are Running or Completed.
    ✅ Service itop is assigned to IP 192.168.1.240.
    ✅ Endpoints found: 172.16.x.x
    ```

## 4. Resolución de Problemas Comunes

*   **Error "No kustomization.yaml found"**: Asegúrate de que tu servicio tiene este archivo en la raíz de su carpeta.
*   **Error de Validación IP**: Si tu servicio no requiere IP externa, asegúrate de no definirla en la llamada de verificación o de que el script la ignore si está vacía.
*   **Despliegue bloqueado (Rollout)**: Si el CD falla por timeout, revisa los logs de los pods (`kubectl logs`) o eventos (`kubectl get events`). El CD hace un rollback implícito al no completarse (dependiendo de la configuración de kustomize/kubectl).
