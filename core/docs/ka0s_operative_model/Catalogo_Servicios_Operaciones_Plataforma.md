# Catálogo y Alcances de Servicios de Operaciones de Plataforma (On‑Prem / Cloud)

**Versión:** 1.0
**Fecha:**
**Autor:**

---

## Índice

1. Resumen Ejecutivo
2. Alcance del Servicio
3. Catálogo de Servicios de Operaciones
4. Niveles de Servicio (SLA/SLO) y Medición
5. Modelo Operativo e ITIL con iTop
6. Seguridad, Cumplimiento y Continuidad (incluye DORA)
7. Requisitos, Suposiciones y Dependencias
8. Modelo de Gobierno y Reporting
9. Mantenimiento, Ventanas y Versiones
10. Escalados y Contactos
11. Matriz RACI (General)
12. Catálogo de Solicitudes (SR) Estándar
13. Checklists de Aterrizaje
14. Riesgos Comunes y Mitigaciones

---

## 1. Resumen Ejecutivo

Este documento define el modelo de servicios gestionados de operaciones para
plataformas on‑prem y cloud (pública/privada), estableciendo alcance,
exclusiones, SLAs/SLOs, responsabilidades (RACI), seguridad y gobierno. Se
contemplan horarios de atención **24x7** y **8x5** y el uso de **iTop** como
herramienta ITSM.

---

## 2. Alcance del Servicio

### 2.1 En alcance

- Gestión de incidentes, requerimientos y problemas (ITIL) mediante iTop.
- Monitorización proactiva y observabilidad (métricas, logs, trazas).
- Gestión de cambios (normal, estándar, urgente) y ventanas.
- Gestión de capacidad y rendimiento.
- Backup & Restore y Continuidad/DR (pruebas periódicas).
- Patching de SO y plataformas base; hardening.
- CMDB/Inventario y control de configuración.
- Seguridad operativa: AV/EDR, parches críticos, respuesta inicial SOC.
- Soporte 24x7 y 8x5 (según modalidad).
- Gestión de proveedores (L2/L3 fabricantes).

#### 2.1.1 Específico Cloud

- Operación de landing zone (IAM, políticas, RBAC).
- Etiquetado y gobernanza (tags, policy compliance).
- FinOps (presupuestos, alertas, rightsizing, RI/SP).
- Seguridad cloud (CSPM, redes, WAF, KMS/Key Vault, secretos).
- Automatización IaC de cambios estándar.
- Catálogo de servicios cloud (plantillas/blueprints).

#### 2.1.2 Específico On‑Prem

- Gestión de hardware (RMA) y firmwares.
- Operación de virtualización (vSphere/Hyper‑V/KVM).
- Redes y seguridad perimetral (VLANs, firewalls, balanceadores).
- Almacenamiento y SAN (LUNs, cuotas, snapshots, replicación).

### 2.2 Fuera de alcance

- Desarrollo de aplicaciones o cambios en código.
- Diseños arquitectónicos mayores y proyectos transformacionales.
- Gestión SOC avanzada/DFIR (más allá de nivel 1).
- Licenciamiento y compliance del software del cliente.
- Operación de aplicaciones SaaS no administradas.
- Soporte de End‑User Computing salvo pacto.
- Servicios profesionales de migración compleja/replatforming.
- Gestión de datos (modelado/calidad) más allá de la plataforma.

---

## 3. Catálogo de Servicios de Operaciones

Cada servicio se documenta con la siguiente ficha:

| Campo                         | Descripción                                           |
| ----------------------------- | ----------------------------------------------------- |
| Nombre del servicio           | Ej.: Operación de Kubernetes                          |
| Descripción                   | Resumen del servicio                                  |
| Ámbito técnico                | Tecnologías/versiones soportadas                      |
| Ambientes                     | DEV / TEST / PROD                                     |
| Horario                       | 24x7 / 8x5                                            |
| SLA/SLO                       | Disponibilidad, MTTA, MTTR, éxito de backups, cambios |
| Inputs del cliente            | Prerequisitos y accesos                               |
| Entregables                   | Informes, dashboards, evidencias                      |
| Catálogo de SRs               | Solicitudes estándar vinculadas                       |
| En alcance / Fuera de alcance | Listados específicos                                  |
| RACI específico               | Si difiere del general                                |
| Precios / Unidades (opcional) | Nodo, vCPU, GB/mes, suscripción                       |

---

## 4. Niveles de Servicio (SLA/SLO) y Medición

**Definiciones:**

- Disponibilidad mensual (excluye ventanas)
- MTTA, MTTR
- Tasa de cambios
- Éxito de backups
- Drift de configuración
- Ahorro cloud (FinOps)
- Score de seguridad

**Severidades y objetivos:**

- Sev1: MTTA ≤ 15 min, MTTR ≤ 4h
- Sev2: MTTA ≤ 30 min, MTTR ≤ 8h
- Sev3: MTTA ≤ 4h, MTTR ≤ 2 días
- Sev4: Respuesta ≤ 1 día

**Fuentes de evidencia:** herramientas de monitorización, iTop (ITSM), backup,
FinOps.
**Informes:** semanal y mensual.

---

## 5. Modelo Operativo e ITIL con iTop

- **Incidentes:** desde detección (monitoring) a cierre; MIM y comunicaciones.
- **Problemas:** RCA, 5 porqués, KEDB.
- **Cambios:** CAB/ECAB, plantillas estándar, backout plan.
- **Solicitudes de Servicio:** catálogo, aprobaciones y SLAs.
- **Conocimiento:** KB, runbooks, playbooks automatizados.
- **CMDB:** descubrimiento, relaciones, auditorías.
- **Automatización:** IaC / Ansible / Runbooks para cambios repetibles.

---

## 6. Seguridad, Cumplimiento y Continuidad (incluye DORA)

- Modelo de responsabilidades compartidas para On‑Prem y Cloud.
- Identidades y accesos: RBAC / ABAC, PAM, MFA.
- Vulnerabilidades: escaneo periódico, priorización CVSS y remediación.
- Backups y DR: RPO/RTO por servicio, pruebas planificadas y evidencias.
- Cumplimiento: CIS, ISO 27001, NIST, GDPR y DORA.
- Seguridad cloud: políticas, CSPM, cifrado en reposo y en tránsito.

---

## 7. Requisitos, Suposiciones y Dependencias

**Prerequisitos del cliente:** accesos, contactos, inventario, cuentas cloud,
tagging, integración con iTop y herramientas de monitorización/backup.

**Suposiciones:** conectividad estable, licencias vigentes, colaboración de
terceros.

**Dependencias:** fabricantes, equipos de desarrollo, SOC, redes corporativas.

---

## 8. Modelo de Gobierno y Reporting

- **Comités:** Operativo (semanal), Táctico (mensual), Estratégico (trimestral).
- **KPIs y CSFs:** SLA, calidad de cambios, postura de seguridad, costes cloud
  vs presupuesto, disponibilidad por servicio.
- Gestión de riesgos y plan de mejora continua.
- Catálogo de decisiones (ADR operacionales).

---

## 9. Mantenimiento, Ventanas y Versiones

- Política de parches: ciclos mensuales/trimestrales y urgentes.
- Versionado de plataformas y EoL/EoS (roadmap de upgrades).
- Calendario de ventanas y comunicación de impactos.

---

## 10. Escalados y Contactos

- Matriz de escalado N1/N2/N3 con horarios 24x7 y 8x5.
- Canales: iTop, puente de conferencias, chat de incidentes mayores.

---

## 11. Matriz RACI (General)

| Actividad / Proceso                 | CLT | SOW | OPS | SEC | ARC | PRV |
| ----------------------------------- | --- | --- | --- | --- | --- | --- |
| Gestión de Incidentes (N1/N2)       | I   | A   | R   | C   | I   | C   |
| Gestión de Incidentes Mayores (MIM) | I   | A   | R   | C   | C   | I   |
| Gestión de Problemas (RCA/KEDB)     | C   | A   | R   | C   | C   | I   |
| Gestión de Cambios Estándar         | I   | A   | R   | C   | C   | I   |
| Gestión de Cambios Normales (CAB)   | C   | A   | R   | C   | C   | I   |
| Patching SO / Plataforma            | I   | A   | R   | C   | I   | C   |
| Gestión de Vulnerabilidades         | I   | A   | R   | R   | C   | C   |
| Backup / Restore                    | I   | A   | R   | C   | I   | C   |
| DR / BCP (pruebas)                  | C   | A   | R   | C   | C   | I   |
| Monitorización & Observabilidad     | I   | A   | R   | C   | C   | I   |
| CMDB / Inventario                   | C   | A   | R   | I   | C   | I   |
| Seguridad Cloud / Posture           | I   | A   | R   | R   | C   | I   |
| Gestión de Costes Cloud (FinOps)    | R   | A   | C   | I   | C   | I   |
| Gestión de Identidades y Accesos    | C   | A   | R   | R   | C   | I   |
| Redes y Seguridad Perimetral        | C   | A   | R   | R   | C   | I   |
| Gestión de Proveedores              | I   | A   | R   | I   | I   | R   |
| Gobierno y Reporting                | C   | A   | R   | I   | C   | I   |

---

## 12. Catálogo de Solicitudes (SR) Estándar

### Cloud

- Alta de suscripción / proyecto
- Alta de cuenta / rol
- Creación de VNET / VPC
- Despliegue de VM / AKS / EKS
- Alta de base de datos PaaS
- Modificación de NSG / SG
- Creación de backup policy
- Etiquetado masivo
- Alerta de presupuesto

### On‑Prem

- Alta de VM
- Provisión de LUN
- Creación de VLAN
- Regla de firewall
- Alta en balanceador
- Alta de backup job
- Solicitud de snapshot
- Aprovisionamiento de certificados

### Transversales

- Acceso temporal privilegiado (PAM)
- Alta de monitorización
- Consulta de coste / consumo
- Solicitud de informe
- Programación de ventana de mantenimiento

---

## 13. Checklists de Aterrizaje

### Cloud

- Subscriptions / Accounts con políticas y RBAC mínimo.
- Redes base (hub/spoke), DNS, conectividad híbrida.
- Etiquetado mínimo y budget alerts.
- Posture baseline (políticas, CIS), SIEM/SOC integrados.
- Backups por entorno y pruebas de restore.
- Monitorización conectada a SLAs.

### On‑Prem

- CMDB inicial y health‑checks.
- Integración monitoring + alerting + on‑call.
- Calendario de parches y ventanas.
- Procedimientos de backup / restore validados.
- Accesos operativos seguros (Bastion, PAM, MFA).
- DR runbook y pruebas planificadas.

---

## 14. Riesgos Comunes y Mitigaciones

- **CMDB no fiable:** auditoría inicial + reconciliación mensual.
- **Alert fatigue:** tuning de umbrales y deduplicación.
- **Shadow IT / tags ausentes:** políticas de denegación + tagging obligatorio.
- **Costes cloud variables:** budgeting + rightsizing + schedules + RI/SP.
- **Ventanas de cambio insuficientes:** calendario + CAB ágil.
