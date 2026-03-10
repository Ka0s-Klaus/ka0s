# Plan de Migración de Zabbix a k8-node-40

Este plan detalla los pasos para migrar Zabbix al nodo `k8-node-40` de forma segura y persistente.

## ✅ Estado del Nodo
`k8-node-40` está en estado **Ready** (IP: 192.168.1.40). Es seguro proceder.

## 1. Preparación del Nodo

Ejecuta estos comandos para asegurar que el nodo acepta cargas:

```bash
# Asegurar que el nodo acepta cargas
kubectl uncordon k8-node-40

# (Opcional) Aplicar Taint para que solo Zabbix corra aquí
# kubectl taint nodes k8-node-40 dedicated=zabbix:NoSchedule
```

## 2. Migración de Datos (CRÍTICO)

Zabbix usa volúmenes `hostPath`. Debes mover los datos manualmente al `k8-node-40` antes de iniciar los pods.

Desde `k8-manager` (o donde estén los datos actualmente):

```bash
# 1. Detener Zabbix para evitar inconsistencias
kubectl scale deployment zabbix-server --replicas=0 -n zabbix
kubectl scale deployment zabbix-web --replicas=0 -n zabbix
# Si postgres corre aparte en el namespace zabbix:
# kubectl scale deployment postgresql --replicas=0 -n zabbix 

# 2. Crear directorios en el destino
ssh root@192.168.1.40 "mkdir -p /mnt/data/zabbix/postgresql /mnt/data/zabbix-server"

# 3. Copiar datos (Requiere acceso SSH/scp)
# Ajusta las rutas origen según tu configuración real en k8-manager
scp -r /mnt/data/zabbix/postgresql/* root@192.168.1.40:/mnt/data/zabbix/postgresql/
scp -r /mnt/data/zabbix-server/* root@192.168.1.40:/mnt/data/zabbix-server/

# 4. Verificar permisos en destino
ssh root@192.168.1.40 "chown -R 999:999 /mnt/data/zabbix/postgresql" # UID típico de Postgres
ssh root@192.168.1.40 "chown -R 101:101 /mnt/data/zabbix-server"     # UID típico de Zabbix
```

## 3. Aplicar Manifiestos Modificados

Una vez copiados los datos y preparado el nodo, aplica los nuevos manifiestos que fuerzan la ejecución en `k8-node-40`.

```bash
kubectl apply -k .
```
