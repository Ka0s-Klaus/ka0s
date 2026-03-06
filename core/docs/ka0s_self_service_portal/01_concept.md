# Ka0s Self Service Portal - Concepto

## 1. Visión General
El **Ka0s Self Service Portal** es la interfaz unificada de acceso para usuarios y operadores dentro del ecosistema Ka0s. Su objetivo es democratizar el acceso a los servicios de infraestructura y operaciones mediante un catálogo dinámico y seguro.

Este portal elimina la necesidad de intervenciones manuales para tareas repetitivas, permitiendo a los usuarios consumir servicios (como despliegues, accesos, reportes) de manera autónoma.

## 2. Objetivos Principales
*   **Autoservicio**: Permitir que los usuarios ejecuten tareas predefinidas sin intervención del equipo de operaciones.
*   **Catálogo Dinámico**: La lista de servicios disponibles se genera en tiempo real basada en configuraciones y permisos, sin necesidad de redesplegar el portal para añadir nuevos items.
*   **Seguridad y RBAC**: Acceso granular basado en roles. Un usuario solo ve y ejecuta lo que su rol le permite.
*   **Experiencia de Usuario (UX)**: Interfaz moderna, responsiva y fácil de usar.

## 3. Alcance
El portal abarcará:
1.  **Dashboard Personalizado**: Vista resumen de servicios y estado.
2.  **Catálogo de Servicios**: Lista filtrable y buscable de acciones disponibles (ej. "Crear Namespace", "Reiniciar Pod", "Solicitar Acceso").
3.  **Gestión de Identidad**: Login seguro e integración con proveedores de identidad.
4.  **Historial de Actividad**: Registro de acciones realizadas por el usuario.

## 4. Principios de Diseño
*   **API First**: El frontend consume una API REST/GraphQL desacoplada.
*   **Stateless**: El portal no guarda estado de sesión en el servidor (uso de JWT).
*   **Extensibilidad**: Añadir un nuevo servicio debe ser tan simple como añadir una entrada en la base de datos o configuración.
