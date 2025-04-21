# Módulo Core para el despliegue de Ka0s

Este módulo permite desplegar las siguientas parte de Ka0s de manera personalizada:

- Instalación de docker personalizada
- Implementación de los runners personalizados (dependencias de Organizacion de GitHub)
- Despliegue por defecto de Wazuh (necesita de una personalización posterior)
- Despliegue por defecto de ELK (algunas funcionalidaddes requieren de licencia)
- Personalización de la monitorización base del agente de wazuh en el host donde se ubica docker
- Despliegue y personalización del gestor de docker (en ka0s por defecto usamos la última versión de Portainer)

Recomendaciones:

- Disponer de Codacy a nivel de cuenta de organización de GitHub
- Disponer de NewRelic o similar para la monitorización
- Añadir el servidor al servicio ubuntu.com/pro/attach

Opcional:

- Disponer de un mecanismo de Registry para alojar las imagenes peronalizadas
