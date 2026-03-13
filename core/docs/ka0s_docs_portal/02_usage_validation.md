# Uso y Validación: Ka0s Docs Portal

## Acceso al Portal

El portal está disponible públicamente en:
- **URL**: [https://docs.ka0s.io](https://docs.ka0s.io)

## Validación de Funcionamiento

Para verificar que el portal está operando correctamente dentro del clúster:

### 1. Verificar el Estado del Pod

```bash
kubectl get pods -n docs-portal -l app=docs-portal
```

**Salida esperada:**
```
NAME                           READY   STATUS    RESTARTS   AGE
docs-portal-xxxxxxxxxx-xxxxx   1/1     Running   0          2h
```

### 2. Verificar Logs de Inicialización (Git Clone)

Si el portal no carga contenido actualizado, verifica si el clonado del repositorio fue exitoso:

```bash
kubectl logs -n docs-portal -l app=docs-portal -c git-clone
```

### 3. Verificar Logs del Servicio MkDocs

```bash
kubectl logs -n docs-portal -l app=docs-portal -c docs-portal
```

**Salida esperada:**
```
INFO    -  Building documentation...
INFO    -  Cleaning site directory
INFO    -  Documentation built in 0.42 seconds
INFO    -  [12:00:00] Serving on http://0.0.0.0:8000/
```

## Características Avanzadas

### 1. Etiquetado de Secciones (Metadata)

Para organizar automáticamente el contenido en el menú lateral, utilizamos **Front Matter** (bloque YAML al inicio del archivo).

**Ejemplo:**
```yaml
---
section: Multimedia
---
# Título del Documento
```

Esto indica que el documento pertenece a la sección "Multimedia".

### 2. Soporte para Diagramas (Mermaid)

El portal soporta nativamente la renderización de diagramas **Mermaid**.

**Ejemplo de uso en Markdown:**

    ```mermaid
    graph TD
        A[Cliente] --> B(Load Balancer)
        B --> C{Router}
        C -->|/api| D[API Service]
        C -->|/docs| E[Docs Portal]
    ```

Esto se renderizará automáticamente como un gráfico interactivo.

### 3. Multimedia y Videos

Para incluir videos `.mov` o `.mp4`, consulta la [Guía Multimedia](./04_multimedia_guide.md).

## Actualización de Contenido

El despliegue actual utiliza un modelo de "Pull al inicio". Para actualizar el contenido reflejado en el portal:
1.  Realizar cambios en `core/docs/` y hacer push a `main`.
2.  Reiniciar el pod para forzar un nuevo clonado del repositorio:
    ```bash
    kubectl rollout restart deployment/docs-portal -n docs-portal
    ```
