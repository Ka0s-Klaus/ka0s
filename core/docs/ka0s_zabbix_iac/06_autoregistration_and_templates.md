# 06 - Zabbix Auto-Registration y Gestión de Templates como Código

## Concepto
Dentro de la filosofía **Ka0s (Zabbix as Code)**, la intervención manual en la interfaz web de Zabbix para registrar nuevos nodos o asignarles templates rompe el principio de automatización. 

Para solucionar esto, hemos implementado dos herramientas fundamentales en `core/monitoring/zabbix/scripts/`:
1. **Importación programática de Templates** (`import_templates.py`).
2. **Creación de reglas de Auto-registro** (`setup_autoregistration.py`).

Al combinar ambas, logramos que cuando se despliega un nuevo pod en Kubernetes (ej. MongoDB) con un contenedor *sidecar* de Zabbix Agent 2, este se registre automáticamente en Zabbix, se asigne a un grupo y se le aplique el template correcto sin interacción humana.

---

## 1. Importación de Templates (`import_templates.py`)
Este script permite inyectar o actualizar archivos YAML de configuración de Templates directamente usando la API de Zabbix.

### Uso
```bash
# Importar un template específico
python3 core/monitoring/zabbix/scripts/import_templates.py "core/monitoring/zabbix/templates/Template DB MongoDB Node by Zabbix Agent 2.yaml"

# Importar un directorio entero
python3 core/monitoring/zabbix/scripts/import_templates.py core/monitoring/zabbix/templates/
```
*Nota: Este script resuelve de forma transparente el bug de la API de Zabbix 7.0 donde el parámetro `updateExisting` en `templateLinkage` causaba errores.*

---

## 2. Auto-registro de Hosts (`setup_autoregistration.py`)
Zabbix permite configurar **Actions** (Event source: Auto-registration). Cuando un agente activo se comunica por primera vez con el servidor, envía un campo llamado `HostMetadata` (definido en la variable de entorno `ZBX_METADATA` del pod). 

El script `setup_autoregistration.py` crea programáticamente la regla que intercepta ese metadato y toma decisiones.

### Uso
```bash
# Sintaxis básica
python3 setup_autoregistration.py <metadata_string> <host_group> <template_name>

# Sintaxis avanzada (Inyección de Macros)
python3 setup_autoregistration.py <metadata_string> <host_group> <template_name> [MACRO1=VALOR1] [MACRO2=VALOR2]...

# Ejemplo: Registrar automáticamente nodos de MongoDB con credenciales
python3 core/monitoring/zabbix/scripts/setup_autoregistration.py \
    "mongo" \
    "Databases" \
    "MongoDB node by Zabbix agent 2" \
    MONGODB.CONNSTRING="tcp://localhost:27017" \
    MONGODB.USER="root" \
    MONGODB.PASSWORD="mipasswordsecreto"
```

### Inyección de Macros (Evitar errores de "Unauthorized")
Muchos templates oficiales (como bases de datos) requieren que el Host tenga configuradas **User Macros** (ej. `{$MONGODB.USER}`) para poder autenticarse contra el servicio. Si el auto-registro crea el host sin estas macros, el template enviará peticiones vacías y los ítems quedarán en estado *Unsupported*. 

El script permite pasar argumentos clave-valor al final del comando. El script formateará automáticamente la clave envolviéndola en la sintaxis de macro de Zabbix `{$CLAVE}` y creará la operación en la regla de auto-registro para que el Host nazca con las credenciales listas.

### Flujo Operativo (Ejemplo MongoDB)
1. Desplegamos el pod `mongo-0` con el sidecar de Zabbix Agent 2, inyectando `ZBX_METADATA=mongo`.
2. El agente arranca y envía un latido activo al servidor Zabbix.
3. Zabbix recibe el latido, lee `HostMetadata: mongo`.
4. La regla de auto-registro (creada por nuestro script) se activa.
5. Zabbix añade automáticamente el host `mongo-0`.
6. Zabbix mete el host en el grupo `Databases`.
7. Zabbix le asigna el template `MongoDB node by Zabbix agent 2`.
8. ¡El monitoreo comienza inmediatamente!

---

## 3. Resolución sobre Dashboards
Muchos de los templates oficiales de Zabbix (como el de MongoDB, PostgreSQL, etc.) ya incluyen **Dashboards integrados** de altísima calidad y exhaustividad.

**Recomendación de Ka0s:**
- **No reinventar la rueda:** Si el template oficial trae un dashboard (como el *MongoDB: Overview* que viene en el template de MongoDB), **se debe usar ese por defecto**.
- **Dashboards personalizados (`.json`):** Solo deben crearse y mantenerse si representan una vista agregada de alto nivel (ej. un panel que cruce métricas de MongoDB + Backend + Frontend en una sola pantalla para uso de Negocio o Nivel C). 
- Los dashboards unitarios de componentes específicos (ej. `mongo_dashboard.json`) quedan obsoletos a favor del estándar que inyecta el template oficial.