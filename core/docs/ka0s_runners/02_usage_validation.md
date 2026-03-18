# Uso y Validación

## Despliegue

El despliegue es automático vía GitOps. Cualquier cambio en `core/b2b/core-services/runners/` en la rama `main` dispara el workflow de CD.

### Despliegue Manual (Debugging)

Si necesitas probar cambios localmente (requiere acceso al clúster y Helm instalado):

```bash
# 1. Asegúrate de tener las credenciales (si no existen ya en el clúster)
# Nota: En local, deberás crear el secreto 'controller-manager' manualmente si no existe.

# 2. Renderizar y aplicar con Kustomize (que invoca a Helm internamente)
kubectl kustomize core/b2b/core-services/runners/ --enable-helm | kubectl apply -f -
```

## Verificación del Estado

Para comprobar que el sistema de runners está saludable:

```bash
# Verificar pods del controlador y listeners
kubectl get pods -n actions-runner-system

# Verificar el estado del ScaleSet (debe mostrar los runners actuales)
kubectl get autoscalingrunnersets -n actions-runner-system
```

## Validación de Escalado (Load Testing)

Para asegurar que los runners escalan correctamente hasta el límite configurado (ej. 15 o 25), utilizamos un workflow de prueba de carga: `verify-runner-scaling.yml`.

### Ejecutar Test de Escalado

1.  Ve a la pestaña "Actions" en el repositorio GitHub.
2.  Selecciona el workflow **"Verify Runner Scaling"**.
3.  Ejecútalo manualmente (`workflow_dispatch`).
    *   Puedes configurar el número de trabajos paralelos (default: 10) para forzar el escalado.

### Observabilidad durante el Test

Mientras el workflow se ejecuta, observa cómo crecen los pods en el clúster:

```bash
watch kubectl get pods -n actions-runner-system
```

Deberías ver cómo se crean pods `swarm-runners-scaleset-xxxxx` hasta alcanzar el número de trabajos encolados o el `maxRunners` configurado.
