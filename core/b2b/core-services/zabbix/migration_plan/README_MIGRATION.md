# Plan de Migración de Zabbix a k8-node-30

Este plan detalla los pasos para migrar Zabbix al nodo `k8-node-30` de forma segura y persistente.

## ⚠️ Estado Crítico del Nodo
Actualmente, `k8-node-30` está en estado **NotReady** y no responde a ping.
**NO APLICAR estos cambios hasta que el nodo esté operativo y conectado.**

## 1. Preparación del Nodo (Cuando esté Online)

Ejecuta estos comandos para preparar el nodo y asegurar que sea exclusivo para Zabbix (opcional, si quieres exclusividad):

```bash
# 1. Asegurar que el nodo acepta cargas
kubectl uncordon k8-node-30

# 2. Aplicar Taint para que solo Zabbix corra aquí (Opcional pero recomendado para aislamiento)
kubectl taint nodes k8-node-30 dedicated=zabbix:NoSchedule
```

## 2. Migración de Datos (CRÍTICO)

Zabbix usa volúmenes `hostPath` (`/mnt/data/...`). Estos datos residen físicamente en el nodo actual (`k8-manager`).
Debes moverlos manualmente al `k8-node-30` antes de iniciar los pods.

Desde `k8-manager` (o donde estén los datos actualmente):

```bash
# 1. Detener Zabbix para evitar inconsistencias
kubectl scale deployment zabbix-server --replicas=0 -n zabbix
kubectl scale deployment zabbix-web --replicas=0 -n zabbix
kubectl scale deployment postgresql --replicas=0 -n zabbix # Si postgres corre aparte

# 2. Crear directorios en el destino
ssh root@192.168.1.30 "mkdir -p /mnt/data/zabbix/postgresql /mnt/data/zabbix-server"

# 3. Copiar datos (Requiere acceso SSH/scp)
# Ajusta las rutas origen según tu configuración real en k8-manager
scp -r /mnt/data/zabbix/postgresql/* root@192.168.1.30:/mnt/data/zabbix/postgresql/
scp -r /mnt/data/zabbix-server/* root@192.168.1.30:/mnt/data/zabbix-server/

# 4. Verificar permisos en destino
ssh root@192.168.1.30 "chown -R 999:999 /mnt/data/zabbix/postgresql" # UID típico de Postgres
ssh root@192.168.1.30 "chown -R 101:101 /mnt/data/zabbix-server"     # UID típico de Zabbix
```

## 3. Aplicar Manifiestos Modificados

Una vez copiados los datos y preparado el nodo, aplica los nuevos manifiestos que fuerzan la ejecución en `k8-node-30`.

```bash
kubectl apply -k .
```

(Asegúrate de reemplazar los archivos originales con los de esta carpeta `migration_plan` o editar los originales).
