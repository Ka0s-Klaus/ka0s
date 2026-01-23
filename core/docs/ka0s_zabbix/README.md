# 📘 Manual de Monitorización (Zabbix)

Bienvenido a la documentación del sistema de monitorización. Este documento es el punto de entrada para entender y gestionar el sistema que vigila la salud de su infraestructura tecnológica.

## 🧐 ¿Qué es esto?

Este módulo instala **Zabbix**, una herramienta que actúa como un "vigilante" de sus servidores y aplicaciones las 24 horas del día.

*   **🛡️ Vigila**: Comprueba constantemente que todo funcione correctamente (servidores, bases de datos, aplicaciones).
*   **🚨 Avisa**: Si algo falla (por ejemplo, si un servidor se apaga o va muy lento), le envía una alerta inmediata o crea un ticket de soporte automáticamente.
*   **📊 Muestra**: Le ofrece gráficas y paneles visuales para ver el estado de salud de su sistema de un vistazo.

## 📚 Índice de Documentación

Para facilitar la lectura, hemos dividido el manual en las siguientes secciones detalladas:

1.  [Instalación y Despliegue](01_installation.md): Pasos para instalar Zabbix en su clúster Kubernetes.
2.  [Acceso y Configuración Inicial](02_web_configuration.md): Cómo entrar al panel de control y cambiar la contraseña.
3.  [Monitorización de GitHub](03_github_monitoring.md): Ver estadísticas de sus repositorios y código.
4.  [Monitorización de MongoDB](04_mongodb_monitoring.md): Vigilar el estado de su base de datos.
5.  [Integración con iTop](05_itop_integration.md): Conectar Zabbix con su sistema de tickets.
6.  [Solución de Problemas](06_troubleshooting.md): Guía rápida para resolver errores comunes.
7.  [Mantenimiento](07_maintenance.md): Cómo actualizar, reiniciar o desinstalar el sistema.
8.  [Monitorización de Servicios K8s](08_k8s_services_monitoring.md): Cómo obtener gráficas de los servicios del clúster.
