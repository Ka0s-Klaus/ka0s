# Despliegue de MongoDB con Kustomize

Este directorio contiene los manifiestos de Kubernetes y la configuración de Kustomize para desplegar una instancia de MongoDB como un `StatefulSet`.

## Prerrequisitos

- `kubectl` (versión 1.14+ que incluye Kustomize).
- Un clúster de Kubernetes activo y configurado en tu `kubeconfig`.
- Un `StorageClass` compatible con `ReadWriteOnce` disponible en el clúster (en este caso, se usa `local-path`).

## Estructura de Ficheros

- `namespace.yaml`: Define el `Namespace` `mongo` donde se desplegarán todos los recursos.
- `mongo-secret.yaml`: Contiene la contraseña de `root` para MongoDB, codificada en Base64.
- `mongo-storage.yaml`: Define el `PersistentVolume` y el `StorageClass` para la persistencia de datos.
- `mongo-statefulset.yaml`: Define el `StatefulSet` que gestiona el Pod de MongoDB.
- `mongo-service.yaml`: Expone el `StatefulSet` de MongoDB como un servicio de red dentro del clúster.
- `kustomization.yaml`: Orquesta el despliegue de todos los recursos anteriores.

## Despliegue

Para desplegar MongoDB, sitúate en el directorio raíz del proyecto y ejecuta el siguiente comando:

```bash
kubectl apply -k core/b2b/core-services/mongo
```

## Verificacion

Una vez aplicado, puedes verificar que el Pod de MongoDB se está ejecutando correctamente:

```bash
kubectl get pods -n mongo
```

Se debería ver un Pod llamado mongo-0 en estado Running . También se puede verificar el servicio y el volumen persistente:

```bash
# Verificar el servicio
kubectl get service -n mongo
 
# Verificar el PersistentVolumeClaim
kubectl get pvc -n mongo
```

## Limpieza

Para eliminar todos los recursos creados por esta configuración, se puede emplear usar el mismo kustomization.yaml con el comando delete :

```bash
kubectl delete -k core/b2b/core-services/mongo
```