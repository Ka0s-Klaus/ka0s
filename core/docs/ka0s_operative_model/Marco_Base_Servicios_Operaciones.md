# MARCO BASE DE SERVICIOS

## OPERACIONES DE PLATAFORMAS

**OnPremise | Cloud Pública | Cloud Privada**

**Documento Base:** Servicios, Alcances, Exclusiones y Matriz de Responsabilidades  
**Versión:** 1.0  
**Fecha:** 28 de enero de 2026

---

## TABLA DE CONTENIDOS

1. INFORMACIÓN DEL DOCUMENTO  
   1.1 Propósito  
   1.2 Alcance  
2. DEFINICIONES Y TÉRMINOS  
3. SERVICIOS DE OPERACIONES  
   3.1 Gestión de Infraestructura  
   3.2 Gestión de Red y Conectividad  
   3.3 Almacenamiento y Backup  
   3.4 Seguridad y Cumplimiento  
   3.5 Plataformas de Contenedores  
   3.6 Monitorización y Observabilidad  
   3.7 Gestión de Incidentes  
   3.8 Automatización y Orquestación  
4. EXCLUSIONES DEL SERVICIO  
5. RESPONSABILIDADES DEL CLIENTE  
6. MATRIZ DE RESPONSABILIDADES (RACI)  
7. NIVELES DE SERVICIO (SLA)  
8. GOBIERNO Y GESTIÓN  
9. REVISIÓN Y ACTUALIZACIONES  

---

## 1. INFORMACIÓN DEL DOCUMENTO

### 1.1 Propósito

Este documento establece el marco de referencia completo para los servicios de operaciones de plataformas tecnológicas. Proporciona una base estandarizada que define servicios prestados, alcances, exclusiones y responsabilidades, aplicable a entornos OnPremise, Cloud Pública y Cloud Privada. Su objetivo es servir como plantilla base para acuerdos de servicio específicos con clientes.

### 1.2 Alcance

- Infraestructura física y virtualizada (OnPremise)
- Plataformas Cloud públicas (AWS, Azure, GCP)
- Plataformas Cloud privadas (OpenStack, VMware, etc.)
- Gestión de contenedores y orquestación
- Redes, almacenamiento y seguridad
- Monitorización, automatización y soporte
- Gestión de incidentes y cambios

---

## 2. DEFINICIONES Y TÉRMINOS

| Término | Definición |
|---|---|
| OnPremise | Infraestructura ubicada físicamente en instalaciones del cliente o datacenter dedicado |
| Cloud Pública | Servicios cloud de proveedores públicos (AWS, Azure, GCP) con infraestructura compartida |
| Cloud Privada | Infraestructura cloud dedicada a una organización, OnPremise o alojada |
| IaaS | Infrastructure as a Service - Recursos de computación, almacenamiento y red virtualizados |
| CaaS | Containers as a Service - Gestión de contenedores y orquestación (Kubernetes) |
| SLA | Service Level Agreement - Acuerdo de nivel de servicio |
| RTO | Recovery Time Objective - Tiempo máximo de recuperación de servicio |
| RPO | Recovery Point Objective - Pérdida máxima de datos aceptable |

---

## 3. SERVICIOS DE OPERACIONES

### 3.1 Gestión de Infraestructura

#### 3.1.1 OnPremise

- Gestión de servidores físicos (instalación, configuración, mantenimiento)
- Administración de hipervisores (VMware ESXi, Hyper-V, KVM, Proxmox)
- Provisión y gestión de máquinas virtuales
- Configuración de alta disponibilidad y clustering
- Gestión de recursos (CPU, memoria, almacenamiento)
- Mantenimiento preventivo y correctivo de hardware

#### 3.1.2 Cloud Pública

- Gestión de cuentas y suscripciones (AWS, Azure, GCP)
- Provisión de instancias compute (EC2, VMs, Compute Engine)
- Configuración de grupos de autoescalado
- Implementación de arquitecturas multi-región
- Optimización de costes y rightsizing

#### 3.1.3 Cloud Privada

- Despliegue y gestión de OpenStack, VMware vCloud
- Gestión de proyectos y tenants
- Configuración de catálogos de servicios
- Integración con sistemas corporativos (LDAP, AD)

### 3.2 Gestión de Red y Conectividad

- Diseño y configuración de arquitecturas de red
- Gestión de VLANs, subredes y enrutamiento
- Configuración de VPN y conectividad híbrida
- Gestión de balanceadores de carga
- Configuración de DNS y CDN
- Gestión de firewalls y políticas de red

### 3.3 Almacenamiento y Backup

- Aprovisionamiento de almacenamiento (bloque, archivo, objeto)
- Gestión de SANs y NAS (OnPremise)
- Configuración de snapshots y clones
- Diseño e implementación de estrategias de backup
- Backup de infraestructura y recuperación
- Pruebas periódicas de DR (Disaster Recovery)

### 3.4 Seguridad y Cumplimiento

- Gestión de identidades y accesos (IAM)
- Aplicación de parches de seguridad de SO base
- Configuración de cifrado (reposo y tránsito)
- Gestión de certificados SSL/TLS
- Auditorías de seguridad y vulnerabilidades
- Compliance (GDPR, ISO 27001, SOC 2)

### 3.5 Plataformas de Contenedores

- Despliegue y gestión de clústeres Kubernetes
- Gestión de container registry
- Configuración de namespaces y RBAC
- Gestión de ingress controllers y service mesh
- Escaneo de vulnerabilidades en imágenes

### 3.6 Monitorización y Observabilidad

- Implementación de herramientas de monitorización
- Configuración de alertas proactivas
- Gestión centralizada de logs
- Dashboards y reporting de métricas

### 3.7 Gestión de Incidentes

- Recepción y registro de incidentes 24/7
- Clasificación y priorización según SLA
- Resolución y escalado estructurado
- Post-mortem y documentación de incidentes

### 3.8 Automatización y Orquestación

- Infrastructure as Code (Terraform, CloudFormation)
- Gestión de configuración (Ansible, Puppet)
- Automatización de tareas repetitivas
- Auto-remediation de incidencias comunes

---

## 4. EXCLUSIONES DEL SERVICIO

Las siguientes actividades están fuera del alcance del servicio de operaciones:

### 4.1 Desarrollo y Aplicaciones

- Desarrollo o modificación de código
- Debugging de lógica de aplicación
- Diseño de arquitectura de aplicaciones

### 4.2 Bases de Datos a Nivel de Aplicación

- Diseño de esquemas y modelos de datos
- Desarrollo de stored procedures y triggers
- Optimización de queries de aplicación

### 4.3 Usuario Final

- Soporte a estaciones de trabajo
- Gestión de aplicaciones de ofimática
- Formación de usuarios finales

### 4.4 Licenciamiento

- Adquisición de licencias de software
- Negociación con proveedores

---

## 5. RESPONSABILIDADES DEL CLIENTE

### 5.1 Generales

- Proporcionar requisitos precisos y completos
- Designar puntos de contacto autorizados
- Aprobar cambios significativos

### 5.2 Aplicaciones

- Desarrollo y testing de aplicaciones
- Gestión de configuraciones de aplicación
- Monitorización a nivel de aplicación

### 5.3 Datos

- Responsabilidad sobre datos de negocio
- Definición de políticas de retención
- Backup de datos de aplicación

### 5.4 Seguridad de Aplicación

- Implementación de controles en código
- Testing de seguridad (SAST, DAST)
- Gestión de vulnerabilidades de aplicación

---

## 6. MATRIZ DE RESPONSABILIDADES (RACI)

**R = Responsable | A = Aprobador | C = Consultado | I = Informado**

| Actividad | Operaciones | Cliente |
|---|---|---|
| **INFRAESTRUCTURA** |  |  |
| Aprovisionamiento de servidores/VMs | R, A | C, I |
| Parches de seguridad de SO base | R, A | I |
| Configuración de alta disponibilidad | R, A | C, I |
| Dimensionamiento de recursos | R, C | A, C |
| **APLICACIONES** |  |  |
| Instalación de aplicaciones | C | R, A |
| Desarrollo de código | - | R, A |
| Configuración de aplicaciones | C | R, A |
| Monitorización de aplicaciones | C, I | R, A |
| **RED Y CONECTIVIDAD** |  |  |
| Diseño de arquitectura de red | R, A | C, I |
| Configuración de firewalls | R, A | C, I |
| Gestión de balanceadores de carga | R, A | C, I |
| Configuración de VPN | R, A | C, I |
| **ALMACENAMIENTO Y BACKUP** |  |  |
| Provisión de almacenamiento | R, A | C, I |
| Backup de infraestructura | R, A | I |
| Backup de datos de aplicación | C | R, A |
| Definición de políticas de retención | R, C | A, C |
| **SEGURIDAD** |  |  |
| Gestión de IAM (infraestructura) | R, A | C, I |
| Seguridad de aplicaciones | C, I | R, A |
| Gestión de certificados SSL/TLS | R, A | C, I |
| Auditorías de seguridad | R, A | C, I |
| **MONITORIZACIÓN** |  |  |
| Monitorización de infraestructura | R, A | I |
| Monitorización de aplicaciones | C, I | R, A |
| Configuración de alertas | R, A | C, I |
| **CONTENEDORES (CaaS)** |  |  |
| Gestión de clúster Kubernetes | R, A | I |
| Desarrollo de imágenes Docker | - | R, A |
| Creación de manifiestos YAML | C | R, A |
| Escaneo de vulnerabilidades | R, A | I |

---

## 7. NIVELES DE SERVICIO (SLA)

| Severidad | Descripción | Tiempo Respuesta |
|---|---|---|
| Crítica | Servicio completamente inoperativo | < 1 hora |
| Alta | Funcionalidad principal afectada | < 4 horas |
| Media | Funcionalidad secundaria afectada | < 1 día laboral |
| Baja | Consultas o mejoras | < 3 días laborales |

---

## 8. GOBIERNO Y GESTIÓN

### 8.1 Canales de Comunicación

- Sistema de ticketing para solicitudes e incidencias
- Email del equipo de operaciones
- Canal de comunicación para emergencias

### 8.2 Reuniones de Servicio

- Revisión mensual de servicio con cliente
- Revisión trimestral de SLA y métricas
- Reuniones de planificación de cambios

### 8.3 Documentación y Reporting

- Documentación técnica actualizada
- Informes mensuales de operaciones
- Reportes de incidentes y cambios

---

## 9. REVISIÓN Y ACTUALIZACIONES

Este documento será revisado trimestralmente y actualizado según cambios en tecnología, servicios o requisitos del cliente.
