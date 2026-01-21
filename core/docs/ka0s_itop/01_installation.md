# 🚀 Instalación y Despliegue de iTop

Esta guía cubre el proceso para desplegar iTop en su clúster Kubernetes.

## Requisitos Previos

*   Un clúster Kubernetes activo (KIND, Minikube, etc.).
*   Acceso al espacio de nombres `itop`.
*   Base de datos MariaDB desplegada (incluida en el manifiesto).

## Paso 1: Aplicar Manifiestos

Ejecute el siguiente comando desde la raíz del proyecto para desplegar todos los componentes (Namespace, Base de Datos, Frontend iTop):

```bash
kubectl apply -k core/b2b/core-services/itop
```

## Paso 2: Verificar el Despliegue

Espere unos minutos a que los pods se inicien. Puede comprobar el estado con:

```bash
kubectl get pods -n itop
```

Debe ver algo similar a esto:

| NAME | READY | STATUS | RESTARTS | AGE |
| :--- | :--- | :--- | :--- | :--- |
| `mysql-xxx` | 1/1 | Running | 0 | 2m |
| `itop-xxx` | 1/1 | Running | 0 | 2m |

## Paso 3: Acceder a la Interfaz Web

Una vez que los pods estén en `Running`, iTop estará accesible. Si usa un NodePort o LoadBalancer, verifique la IP y puerto:

```bash
kubectl get svc -n itop
```

Debería ver el servicio `itop` (LoadBalancer) y `mysql` (ClusterIP).
