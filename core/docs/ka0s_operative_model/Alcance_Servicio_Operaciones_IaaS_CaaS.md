# ALCANCE DEL SERVICIO DE OPERACIONES

## Gestión de Infraestructura (IaaS) y Contenedores (CaaS)

**Versión:** 1.0

---

## 1. INTRODUCCIÓN

El presente documento define el alcance del servicio de operaciones para la
gestión de infraestructuras como servicio (IaaS) y contenedores como servicio
(CaaS), estableciendo claramente las responsabilidades del equipo de
operaciones, las exclusiones del servicio y las responsabilidades que
corresponden al cliente.

---

## 2. ALCANCE DEL SERVICIO - IaaS

### 2.1 Gestión de Infraestructura

- Aprovisionamiento y desaprovisionamiento de recursos de computación (VMs,
  instancias)
- Gestión de almacenamiento (volúmenes, discos, snapshots)
- Configuración y mantenimiento de redes virtuales, subredes y grupos de
  seguridad
- Gestión de balanceadores de carga a nivel de infraestructura
- Configuración de autoescalado de recursos de infraestructura

---

### 2.2 Monitorización y Alertas

- Supervisión de disponibilidad y rendimiento de recursos IaaS
- Configuración de alertas para métricas de infraestructura (CPU, memoria,
  disco, red)
- Análisis de logs a nivel de infraestructura
- Reporting de incidencias relacionadas con la infraestructura

---

### 2.3 Seguridad y Cumplimiento

- Aplicación de parches de seguridad a nivel de hipervisor y sistema operativo
  base
- Gestión de políticas de firewall a nivel de infraestructura
- Configuración de cifrado de datos en reposo y en tránsito
- Gestión de copias de seguridad y recuperación ante desastres de la
  infraestructura
- Auditorías periódicas de configuración de seguridad

---

### 2.4 Mantenimiento y Optimización

- Actualizaciones programadas de plataforma IaaS
- Optimización de costes mediante análisis de uso de recursos
- Recomendaciones de mejora de arquitectura
- Gestión de capacidad y planificación

---

## 3. ALCANCE DEL SERVICIO - CaaS

### 3.1 Gestión de Plataforma de Contenedores

- Despliegue y mantenimiento del clúster de orquestación (Kubernetes, OpenShift,
  etc.)
- Gestión de nodos del clúster (worker nodes, master nodes)
- Configuración de namespaces y cuotas de recursos
- Gestión de networking del clúster (CNI, service mesh)
- Configuración de ingress controllers y load balancers

---

### 3.2 Gestión de Registry y Contenedores

- Gestión de container registry corporativo
- Escaneo de vulnerabilidades en imágenes de contenedores
- Políticas de retención de imágenes
- Gestión de permisos y control de acceso al registry

---

### 3.3 Monitorización y Observabilidad

- Monitorización del estado del clúster y sus componentes
- Recopilación de métricas de contenedores y pods
- Gestión de logs centralizados de la plataforma
- Configuración de alertas sobre el rendimiento del clúster
- Dashboards de visualización de estado y métricas

---

### 3.4 Seguridad y Políticas

- Implementación de RBAC (Role-Based Access Control)
- Gestión de secretos y configuraciones sensibles
- Aplicación de políticas de seguridad de pods (Pod Security Policies / Pod
  Security Standards)
- Network policies para aislamiento de tráfico
- Actualizaciones de seguridad de la plataforma de orquestación

---

### 3.5 Backup y Continuidad

- Backup de configuraciones del clúster (etcd, manifiestos)
- Estrategias de recuperación ante desastres
- Gestión de volúmenes persistentes y su backup

---

## 4. EXCLUSIONES DEL SERVICIO

### 4.1 Exclusiones Generales

- Desarrollo, programación o modificación de código de aplicaciones
- Soporte a nivel de aplicación o debugging de código
- Gestión de bases de datos (excepto aprovisionamiento de infraestructura)
- Configuración de aplicaciones específicas del cliente
- Formación o capacitación del personal del cliente

---

### 4.2 Exclusiones Específicas de IaaS

- Instalación y configuración de software de aplicación dentro de las VMs
- Mantenimiento de sistemas operativos de nivel usuario (excepto parches de
  seguridad base)
- Personalización de imágenes de sistema operativo
- Migración de datos entre diferentes proveedores cloud

---

### 4.3 Exclusiones Específicas de CaaS

- Desarrollo de Dockerfiles o manifiestos de aplicación (deployments, services)
- Optimización de aplicaciones para entornos contenerizados
- Debugging de contenedores o aplicaciones dentro de pods
- Gestión de pipelines CI/CD (solo infraestructura base, no configuración de
  pipelines)
- Soporte a frameworks o lenguajes específicos de aplicación

---

## 5. RESPONSABILIDADES DEL CLIENTE

### 5.1 Responsabilidades Generales

- Proporcionar requisitos claros y detallados para el aprovisionamiento de
  recursos
- Aprobar cambios significativos en la infraestructura antes de su
  implementación
- Mantener actualizada la documentación de sus aplicaciones y arquitecturas
- Notificar cambios en los requisitos de servicio con antelación razonable
- Cumplir con las políticas de seguridad y uso establecidas

---

### 5.2 Responsabilidades en IaaS

- Gestión y actualización de aplicaciones instaladas en las VMs
- Configuración de aplicaciones y middleware
- Gestión de usuarios y permisos a nivel de aplicación
- Backup de datos de aplicación (el servicio solo cubre backup de
  infraestructura)
- Licenciamiento de software ejecutado en la infraestructura

---

### 5.3 Responsabilidades en CaaS

- Desarrollo y mantenimiento de imágenes de contenedor de aplicaciones
- Creación y gestión de manifiestos de deployment (YAML / Helm charts)
- Definición de límites y requests de recursos para sus aplicaciones
- Configuración de health checks y readiness probes
- Gestión del ciclo de vida de sus aplicaciones (despliegues, rollbacks)
- Monitorización y logging a nivel de aplicación

---

## 6. MATRIZ DE RESPONSABILIDADES

La siguiente matriz resume la distribución de responsabilidades entre el equipo
de operaciones y el cliente:

| Componente / Actividad                   | Operaciones | Cliente |
| ---------------------------------------- | ----------- | ------- |
| **INFRAESTRUCTURA (IaaS)**               |             |         |
| Aprovisionamiento de VMs / Instancias    | ✓           | -       |
| Parches de SO base                       | ✓           | -       |
| Instalación de aplicaciones              | -           | ✓       |
| Backup de infraestructura                | ✓           | -       |
| Backup de datos de aplicación            | -           | ✓       |
| **CONTENEDORES (CaaS)**                  |             |         |
| Gestión del clúster Kubernetes           | ✓           | -       |
| Desarrollo de imágenes Docker            | -           | ✓       |
| Escaneo de vulnerabilidades en imágenes  | ✓           | -       |
| Creación de manifiestos (YAML / Helm)    | -           | ✓       |
| Gestión de RBAC y políticas de seguridad | ✓           | -       |
| Monitorización de aplicaciones           | -           | ✓       |

**Leyenda:**
✓ = Responsable
- = No aplica

---

## 7. MODELO DE SOPORTE

### 7.1 Canales de Comunicación

- Sistema de ticketing centralizado para solicitudes y gestión de incidencias
- Email de contacto del equipo de operaciones
- Canal de comunicación para incidencias críticas (Slack / Teams)

---

### 7.2 Tiempos de Respuesta

| Severidad | Descripción                        | Tiempo de Respuesta |
| --------- | ---------------------------------- | ------------------- |
| Crítica   | Servicio completamente inoperativo | < 1 hora            |
| Alta      | Funcionalidad principal afectada   | < 4 horas           |
| Media     | Funcionalidad secundaria afectada  | < 1 día laboral     |
| Baja      | Consultas generales o mejoras      | < 3 días laborales  |

---

## 8. REVISIÓN Y ACTUALIZACIONES

Este documento será revisado periódicamente y actualizado según sea necesario
para reflejar:

- Cambios en la tecnología y mejores prácticas
- Nuevos servicios o modificaciones en el alcance
- Feedback del cliente y lecciones aprendidas
- Cambios regulatorios o de cumplimiento

La frecuencia de revisión recomendada es **trimestral**, o según se requiera por
cambios significativos en el servicio.

---

## 9. APROBACIONES

Las partes firmantes reconocen haber leído y aceptado el contenido de este
documento:

### Equipo de Operaciones

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
Firma

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
Fecha

### Representante del Cliente

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
Firma

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
Fecha
