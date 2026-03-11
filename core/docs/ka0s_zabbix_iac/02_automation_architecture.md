# Arquitectura de Automatización Zabbix

Esta sección detalla cómo Ka0s implementa la gestión automatizada de Zabbix, eliminando la necesidad de acceder a la consola web para tareas administrativas.

## Componentes de Automatización

La arquitectura se basa en scripts Python que interactúan con la Zabbix API, orquestados por GitHub Actions o CronJobs de Kubernetes.

### 1. Gestión de Hosts (Servidores y Pods)
**Objetivo**: Que ningún servidor o pod escape a la monitorización.

*   **Método 1: Auto-Registration (Agentes)**
    *   Los agentes Zabbix (en nodos o sidecars) se inician con `ServerActive=zabbix-server`.
    *   Al conectar, envían metadata (Hostname, IP, MetadataItems).
    *   **Acción Automática**: Zabbix Server detecta el nuevo agente, crea el Host, lo asigna al grupo correcto (ej. `Kubernetes Nodes`) y le vincula el Template adecuado (ej. `Linux by Zabbix agent`).
    
*   **Método 2: Discovery Rules (Network)**
    *   Zabbix escanea rangos de IP internos del clúster (`10.42.0.0/16`) para encontrar servicios expuestos.

### 2. Gestión de Templates y Métricas
**Objetivo**: Definir "qué monitorizar" mediante código YAML.

*   **Flujo**:
    1.  El ingeniero define/edita un Template en `core/monitoring/zabbix/templates/my_app_template.yaml`.
    2.  Al hacer Push a Git, un pipeline valida la sintaxis YAML.
    3.  El pipeline ejecuta `zabbix_import_template.py` que sube el cambio a la API.
*   **Alcance**:
    *   Items (Métricas: CPU, RAM, Hits).
    *   Triggers (Alertas: CPU > 80%).
    *   Gráficos (Visualización a nivel de Host).

### 3. Gestión de Dashboards (Visualización Global)
**Objetivo**: Crear paneles de control ejecutivos y operativos automáticamente.

*   **Dashboards as Code**:
    *   Los Dashboards se definen como archivos JSON en `core/monitoring/zabbix/dashboards/`.
    *   Ejemplo: `cluster_overview.json` define la disposición de widgets, mapas y gráficos agregados.
*   **Automatización**:
    *   Script `zabbix_dashboard_manager.py` lee los JSON y usa `dashboard.create` o `dashboard.update`.
    *   **Widgets Dinámicos**: El script puede generar widgets basados en etiquetas. Ej: "Crea un gráfico apilado con todos los hosts que tengan tag `env:production`".

### 4. Gestión de Mapas de Red
**Objetivo**: Visualizar la topología de la infraestructura.

*   **Generación Procedural**:
    *   Script que consulta la API de Kubernetes para obtener la relación Nodo <-> Pod <-> Servicio.
    *   Usa `map.create` de Zabbix API para dibujar los iconos y enlaces (Links) automáticamente, actualizando el mapa cada hora.

## Resumen de Capacidades Automatizables

| Componente | Manual (Consola) | Automatizado (Código) | Herramienta |
| :--- | :--- | :--- | :--- |
| **Alta de Hosts** | Click "Create Host", IP, Template... | Automático al arrancar agente | Auto-Registration |
| **Templates** | Editor visual de Items/Triggers | Archivos YAML/XML en Git | API Import |
| **Dashboards** | Drag & Drop de Widgets | Definición JSON estandarizada | API Dashboard |
| **Usuarios** | Gestión de usuarios y permisos | Sincronización LDAP/AD | API User |
| **Mantenimiento** | Crear periodos de mantenimiento | Script pre-deployment | API Maintenance |

---

## Flujo de Trabajo Recomendado

1.  **Diseño Local**: Usar un entorno de desarrollo para crear el primer prototipo de Template/Dashboard visualmente.
2.  **Exportación**: Usar `export_zabbix_config.py` para bajar el YAML/JSON.
3.  **Commit**: Guardar en Git (`core/monitoring/zabbix/...`).
4.  **Despliegue**: El pipeline aplica la configuración a Producción.
5.  **Evolución**: Futuros cambios pequeños se hacen editando el YAML directamente.
