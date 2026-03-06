# Ka0s Self Service Portal - Uso y Validación

## 1. Guía de Usuario

### 1.1 Acceso al Portal
1.  Navegar a la URL del portal (ej. `https://portal.ka0s.io`).
2.  Ingresar credenciales en la pantalla de Login.
3.  Si las credenciales son correctas, se cargará el **Dashboard**.

### 1.2 Ejecutar un Servicio
1.  En el **Catálogo de Servicios**, buscar la tarea deseada (ej. "Provisionar Base de Datos").
2.  Hacer clic en la tarjeta del servicio.
3.  Completar el formulario dinámico que aparece (los campos varían según el servicio).
4.  Confirmar la acción.
5.  Observar el estado de la solicitud en la sección "Mis Actividades".

## 2. Validación y Pruebas (QA)

### 2.1 Pruebas de Seguridad (Security Testing)
*   **Intento de Acceso No Autorizado**: Intentar acceder a endpoints de API sin token JWT. Debe retornar `401 Unauthorized`.
*   **Escalada de Privilegios**: Intentar ejecutar una acción de "Admin" con un usuario "Viewer". Debe retornar `403 Forbidden`.
*   **Inyección en Formularios**: Validar que los inputs del formulario dinámico se sanean correctamente en el Backend.

### 2.2 Pruebas Funcionales
*   **Renderizado Dinámico**: Crear un servicio de prueba con un campo nuevo en MongoDB y verificar que aparece en el Frontend sin recargar el código.
*   **Ejecución End-to-End**: Disparar una acción simple (ej. "Echo Hello World") y verificar que el GitHub Action correspondiente se ejecutó.

### 2.3 Métricas de Éxito
*   Tiempo de carga del catálogo < 200ms.
*   Tasa de error en login < 0.1%.
*   Adopción: % de tickets manuales reemplazados por el portal.
