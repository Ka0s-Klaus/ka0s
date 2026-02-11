# Catálogo de Servicios de Operaciones – Versión 1.5 (Final para Firma)

**Fecha:**
**Autor:**

---

## Índice

1. Alcance y Propósito (v1.5)
2. Servicios – Paquete Final para Firma
3. Anexo DORA – Final
4. Matriz de Costes (Opcional)
5. Firmas y Aprobaciones

---

## 1. Alcance y Propósito (v1.5)

Esta versión incluye:

- SLA/SLO definitivos por servicio, con ventanas de mantenimiento y excepciones
  claramente indicadas.
- Checklists de aceptación (“go/no-go”) por servicio, listos para firma.
- Paquete de importación iTop (CSV) para categorías, estados y catálogo inicial
  de SRs.
- Anexo DORA final: plantillas de informe post-prueba y de notificación.
- Matriz de costes (opcional) por unidad de medida.

---

## 2. Servicios – Paquete Final para Firma

---

## 2.1 Host (SO Windows / Linux)

### Ámbito técnico

- Windows Server 2016–2022
- Linux (RHEL / Ubuntu / SUSE)
- Integración AD / SSH / Agentes

---

### SLA / SLO (24x7)

- **Sev1:** MTTA ≤ 15 min | MTTR ≤ 4h
- **Sev2:** MTTA ≤ 30 min | MTTR ≤ 8h
- **Sev3:** MTTA ≤ 4h | Resolución ≤ 3 días hábiles

**Disponibilidad mensual objetivo:** ≥ 99.9%
*(excluye ventanas de mantenimiento planificadas y causas de fuerza mayor)*

---

### SLA / SLO (8x5)

- **Sev1:** MTTA ≤ 60 min | MTTR: siguiente día hábil
- **Sev2:** MTTA ≤ 2h | MTTR ≤ 2 días hábiles
- **Sev3:** MTTA ≤ 4h | Resolución ≤ 4 días hábiles

**Disponibilidad mensual objetivo:** ≥ 99.5%
*(excluye ventanas de mantenimiento planificadas y causas de fuerza mayor)*

---

### Ventanas de mantenimiento

- Ventana mensual: **1ª semana (02:00–05:00 CET)**
- Urgentes fuera de ciclo: previa aprobación **CAB / ECAB**

---

### En / Fuera de alcance (para firma)

| Ámbito | Detalle |
| --- | --- |
| En alcance | Patching mensual/trimestral; Hardening benchmark; Gestión de servicios críticos; Integración monitoring/CMDB |
| Fuera de alcance | Desarrollo de apps; EUC; Diseños arquitectónicos mayores |

---

### Catálogo de SRs estándar

- Alta CMDB
- Aplicación de parches
- Hardening baseline
- Alta de monitorización

---

### Checklist de aceptación (go / no-go)

1. Health-check inicial y post-parcheo OK
2. Hardening mínimo cumplido
3. Servicios críticos operativos
4. CMDB actualizada
5. Evidencias adjuntas en iTop

---

### Firmas

Service Owner (Proveedor): ____________________________ Fecha: ____ / ____ / ______
Representante del Cliente: _____________________________ Fecha: ____ / ____ / ______

---

## 2.2 IaaS (Compute / Storage / Network)

### Ámbito técnico

- Azure / AWS / GCP / vSphere / Hyper-V
- VNET / VPC / VLAN / NSG
- Discos / Snapshots / Replicación

*(SLA/SLO 24x7 y 8x5 idénticos a Host)*

---

### Ventanas de mantenimiento

- Ventana quincenal: **Domingo 00:00–04:00 CET**
- Cambios disruptivos sólo en ventanas pactadas

---

### En / Fuera de alcance (para firma)

| Ámbito | Detalle |
| --- | --- |
| En alcance | Provision estándar de VMs; Red básica; Storage y backup policy; Etiquetado FinOps |
| Fuera de alcance | Redes complejas (BGP/EVPN, SD-WAN); Migraciones masivas; Optimización avanzada sin acuerdo |

---

### Catálogo de SRs estándar

- Creación de VM estándar
- Rightsizing
- Reglas de red
- Snapshot preventivo

---

### Checklist de aceptación (go / no-go)

1. VM accesible y monitorizada
2. Red / seguridad validadas
3. Etiquetado FinOps completo
4. CMDB con relaciones
5. Evidencias en iTop

---

### Firmas

Service Owner (Proveedor): ____________________________ Fecha: ____ / ____ / ______
Representante del Cliente: _____________________________ Fecha: ____ / ____ / ______

---

## 2.3 CaaS (Kubernetes)

### Ámbito técnico

- AKS / EKS / GKE / On-Prem
- RBAC / NetworkPolicy
- Ingress / WAF / Secrets / ConfigMaps

---

### Ventanas de mantenimiento

- Ventana mensual: **Sáb 22:00–02:00 CET**
- Parcheo de nodos por lotes con **cordon / drain**

---

### En / Fuera de alcance (para firma)

| Ámbito | Detalle |
| --- | --- |
| En alcance | Namespaces y quotas/limits; Policies de seguridad; Deploys con blueprints aprobados; Monitoring del cluster |
| Fuera de alcance | Desarrollo de microservicios; CI/CD del cliente; Registries externos no autorizados |

---

### Catálogo de SRs estándar

- Alta de namespace
- Blueprint deployment
- Parcheo de nodos
- Integración de monitorización

---

### Checklist de aceptación (go / no-go)

1. Namespace y quotas OK
2. Policies aplicadas
3. Despliegue saludable
4. Alertas SLO configuradas
5. CMDB actualizada

---

### Firmas

Service Owner (Proveedor): ____________________________ Fecha: ____ / ____ / ______
Representante del Cliente: _____________________________ Fecha: ____ / ____ / ______

---

## 2.4 Backup & Restore

### Ámbito técnico

- Veeam / Commvault y nativos cloud
- Retenciones y cifrado
- Restore de prueba semestral

---

### SLA adicional

- **Éxito de backups ≥ 98%**

---

### Ventanas de mantenimiento

- Ventanas nocturnas por entorno (00:00–06:00 CET)
- Restores de prueba: planificados y comunicados

---

### En / Fuera de alcance (para firma)

| Ámbito | Detalle |
| --- | --- |
| En alcance | Definir/operar políticas; Seguimiento de éxito; Restore de prueba; Reporting |
| Fuera de alcance | Backup de SaaS fuera del alcance; DFIR avanzado; Gestión de licencias del cliente |

---

### Catálogo de SRs estándar

- Alta de política
- Restore test
- Ajuste de retención
- Reporte de éxito

---

### Checklist de aceptación (go / no-go)

1. Éxito de backup ≥ 98%
2. Restore de prueba verificado
3. Evidencias registradas
4. CMDB asociada
5. Alertas operativas configuradas

---

## 2.5 Monitorización y Observabilidad

### Ámbito técnico

- Prometheus / Grafana
- Azure Monitor / Log Analytics
- Alertas SLO-driven / MIM

---

### Ventanas de mantenimiento

- **2º miércoles de mes 01:00–03:00 CET**

---

### En / Fuera de alcance (para firma)

| Ámbito | Detalle |
| --- | --- |
| En alcance | Onboarding de recursos; Alertas por severidad; Dashboards base; Gestión de escalados |
| Fuera de alcance | APM avanzado de apps del cliente; Herramientas no homologadas; SRE de producto |

---

### Checklist de aceptación (go / no-go)

1. Métricas y logs llegando
2. Alertas probadas
3. Dashboard publicado
4. Incidente automático en iTop
5. Ruido bajo umbral acordado

---

## 3. Anexo DORA – Final

### 3.1 Plantilla de informe post-prueba de resiliencia

Campos sugeridos:

- Servicio
- Fecha
- Tipo de prueba (restore / failover)
- Alcance
- Resultados
- Tiempos (RTO / RPO)
- Incidencias encontradas
- Acciones correctivas
- Evidencias adjuntas
- Aprobaciones

---

### 3.2 Plantilla de notificación de incidente significativo

Campos sugeridos:

- Severidad
- Fecha / Hora detección
- Impacto
- Sistemas afectados
- Causa probable
- Acciones tomadas
- Tiempo de recuperación
- Comunicación realizada
- Próximos pasos

---

## 4. Matriz de Costes (Opcional)

| Servicio | Unidad de medida |
| --- | --- |
| Host | por host / mes |
| IaaS | por VM / mes o vCPU / GB / mes |
| CaaS | por clúster / nodo / mes |
| Backup | por TB protegido / mes |
| Monitorización | por recurso monitorizado / mes |

---

## 5. Firmas y Aprobaciones

Service Owner (Proveedor): ____________________________ Fecha: ____ / ____ / ______
Representante del Cliente: _____________________________ Fecha: ____ / ____ / ______
