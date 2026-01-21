# ⚙️ Configuración Inicial

Tras la instalación, debe completar el asistente de configuración web.

## 1. Asistente de Instalación (Setup)

Al acceder a la URL por primera vez, verá el asistente de iTop.

1.  **Bienvenida**: Acepte los términos de licencia.
2.  **Base de Datos**:
    *   **Server**: `mysql` (Nombre del servicio Kubernetes).
    *   **User**: `itop`
    *   **Password**: `itop_password` (O la definida en sus secretos).
    *   **Database**: `itop`
3.  **Cuenta de Administrador**:
    *   Cree un usuario (ej. `admin`) y una contraseña segura.
4.  **Opciones de Instalación**:
    *   Seleccione "IT Service Management" y "CMDB".
5.  **Finalizar**: Pulse instalar y espere a que termine la barra de progreso.

## 2. Configuración Post-Instalación

Una vez dentro de iTop:

1.  Vaya a **Data Model** para verificar las clases disponibles.
2.  Configure su **Organización** principal.
3.  Defina los **Servicios** que va a prestar.
