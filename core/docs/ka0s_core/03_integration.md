# Módulo Ka0s Core - Integración

## Rol en el Ecosistema
Ka0s Core no es un módulo aislado; es el cimiento sobre el que corren todos los demás servicios.

### Dependencias
*   **Ka0s Init**: Prepara el sistema operativo antes de que Core tome el control.
*   **Ka0s Inspector**: Audita las operaciones realizadas por los runners desplegados por Core.

### Estrategia de Actualización
El módulo está diseñado para ser idempotente. Ejecutar el despliegue sobre una instalación existente debería actualizar los componentes (ej. nueva versión de Portainer) sin perder la configuración persistente.

## Seguridad y Cumplimiento
*   **Agnóstico**: Funciona independientemente del proveedor de nube (AWS, Azure, On-Premise).
*   **Modularidad**: Puedes desactivar componentes (ej. `wazuh: false`) si ya dispones de soluciones corporativas externas.
