# 🗂️ Modelo de Datos (CMDB)

La CMDB de iTop es el corazón del sistema. Aquí registramos todos los activos.

## Estructura Principal

### Organizaciones
Entidades jerárquicas que poseen los activos (ej. "MiEmpresa", "Cliente A").

### Contactos
*   **Personas**: Usuarios con nombre, email y teléfono.
*   **Equipos**: Grupos de personas (ej. "Soporte Nivel 1").

### Infraestructura (Physical Devices)
*   **Server**: Servidores físicos.
*   **Network Device**: Routers, Switches.
*   **PC / Tablet**: Equipos de usuario.

### Virtualización
*   **Hypervisor**: El host físico (ej. ESXi).
*   **Virtual Machine**: Las máquinas virtuales.

### Software
*   **Web Server**: Apache, Nginx.
*   **Database Server**: MySQL, Oracle.
*   **Middleware**: JBoss, Tomcat.

## Relaciones

Lo más importante en iTop son las relaciones:
*   Un **Servidor** *aloja* una **Máquina Virtual**.
*   Una **Base de Datos** *depende de* un **Servidor Web**.
*   Un **Contacto** *es responsable de* un **Servicio**.
