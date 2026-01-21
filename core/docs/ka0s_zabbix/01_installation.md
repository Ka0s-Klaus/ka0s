# 🚀 Instalación y Despliegue

Esta guía describe cómo desplegar los componentes de Zabbix en su clúster Kubernetes.

## Requisitos Previos

*   Tener acceso a la consola de comandos de su sistema (Terminal).
*   Tener configurado el acceso a su clúster (`kubectl`) con permisos de administrador.

## Procedimiento de Despliegue

Siga estos pasos estrictamente para activar el sistema.

### 1. Aplicar Manifiestos
Copie y pegue el siguiente comando en su terminal y pulse Enter. Esto instalará todo lo necesario automáticamente (Base de datos, Servidor, Agentes, Web):

```bash
kubectl apply -k core/b2b/core-services/zabbix
```

### 2. Esperar el Arranque
> ⏳ **Nota Importante**: Espere unos minutos (2-5 min) hasta que todos los componentes arranquen por completo. La base de datos necesita inicializarse antes de que el servidor pueda arrancar.

### 3. Verificación
Para asegurarse de que todo ha ido bien, ejecute:

```bash
kubectl get pods -n zabbix
```

Debe ver una lista de "pods". Asegúrese de que en la columna **STATUS** todos digan `Running`:
*   `zabbix-web-xxx`: La interfaz gráfica.
*   `zabbix-server-xxx`: El cerebro del sistema.
*   `zabbix-agent-xxx`: Los vigilantes (uno por cada nodo).
*   `postgres-xxx`: La base de datos interna.

Si alguno muestra `Error`, `CrashLoopBackOff` o se queda en `Pending` por mucho tiempo, consulte la sección de [Solución de Problemas](06_troubleshooting.md).
