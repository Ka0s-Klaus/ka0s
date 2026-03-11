# Concepto: Monitoring as Code (Zabbix IaC)

## Visión General

En la plataforma Ka0s, la monitorización no es una tarea manual de "point-and-click", sino un componente de infraestructura gobernado por código. Adoptamos la filosofía **Infrastructure as Code (IaC)** para Zabbix, permitiendo versionar, auditar y automatizar toda la configuración de observabilidad.

## ¿Por qué Zabbix y no Nagios?

Aunque Nagios utiliza archivos de configuración de texto plano (lo cual parece ideal para IaC), su arquitectura es **estática**. En entornos dinámicos como Kubernetes, donde los contenedores son efímeros, Nagios requiere reconfiguraciones y reinicios constantes.

**Zabbix** (versiones 6.0/7.0+) ofrece una arquitectura superior para IaC moderno:
1.  **API Restful Robusta**: Permite la manipulación programática de todos los objetos (Hosts, Templates, Dashboards).
2.  **Importación/Exportación YAML/JSON**: Formatos nativos legibles por humanos y máquinas.
3.  **Auto-Discovery (LLD)**: Capacidad intrínseca de descubrir y monitorizar recursos dinámicos sin intervención manual.
4.  **Separación de Estado y Configuración**: La configuración vive en la base de datos pero se alimenta vía API, permitiendo cambios en caliente sin reinicios.

## Beneficios Clave
*   **Versionado (GitOps)**: Todo cambio en la monitorización (umbral de alerta, nuevo gráfico) queda registrado en Git.
*   **Reproducibilidad**: Capacidad de levantar un entorno de monitorización idéntico en minutos (Disaster Recovery).
*   **Consistencia**: Eliminación de "configuration drift" y errores humanos.
*   **Automatización**: Creación automática de dashboards para nuevos servicios desplegados.
