# Estrategia de Selección de Workflows mediante el Catálogo de Servicios

Esta guía define el método estándar para "elegir" qué automatización ejecutar al crear un ticket en iTop. En lugar de depender de texto libre en el título, utilizaremos la estructura nativa de **Servicios** y **Subcategorías** de iTop.

## Concepto

Mapearemos las **Subcategorías de Servicio** de iTop directamente a **Workflows de GitHub**.

| Selección en iTop (Subcategoría) | Disparador (OQL) | Acción (Webhook) | Workflow GitHub |
| :--- | :--- | :--- | :--- |
| `Desplegar VM` | `...WHERE name='Desplegar VM'` | Webhook A | `deploy-vm.yml` |
| `Reset Password` | `...WHERE name='Reset Password'` | Webhook B | `reset-pass.yml` |
| `Alta Usuario` | `...WHERE name='Alta Usuario'` | Webhook C | `create-user.yml` |

---

## Paso 1: Definir el Catálogo de Servicios

1.  Ve a **Administración de Servicios > Servicios**.
2.  Crea un nuevo Servicio (o usa uno existente), por ejemplo: `Automatización Cloud`.
3.  Ve a la pestaña **Subcategorías** y crea las opciones que dispararán acciones:
    *   `Desplegar Servidor Linux`
    *   `Limpiar Logs`
    *   `Backup bajo demanda`

## Paso 2: Crear el Disparador Específico (Trigger)

Necesitamos que iTop sepa distinguir cuándo ejecutar una acción u otra. Usaremos un filtro OQL que verifique la subcategoría seleccionada.

1.  Ve a **Herramientas de Administración > Notificaciones > Disparadores**.
2.  Crea un **Nuevo Disparador**:
    *   **Tipo**: `on entering a state` (al entrar en un estado).
    *   **Estado**: `new` (o `assigned`, según tu proceso).
    *   **Clase**: `UserRequest`.
    *   **Descripción**: `Disparo Automático - Despliegue Linux`.

3.  **Filtro OQL**:
    Esta consulta une la petición con su subcategoría y filtra por el nombre exacto.

    ```sql
    SELECT UserRequest AS r
    JOIN ServiceSubcategory AS s ON r.servicesubcategory_id = s.id
    WHERE s.name = 'Desplegar Servidor Linux'
    ```

## Paso 3: Configurar la Acción Webhook

Cada disparador llamará a una **Acción Webhook** diferente (o a la misma con diferentes parámetros).

1.  Crea una **Acción Webhook** para este flujo.
2.  En la configuración de la URL, apunta al workflow específico de GitHub que maneja esta tarea.
    *   **URL**: `https://api.github.com/repos/ORG/REPO/actions/workflows/deploy-linux.yml/dispatches`

## Ventajas de este Método

1.  **Experiencia de Usuario (UX)**: El usuario selecciona de un menú desplegable claro, no tiene que recordar códigos como `[A]`.
2.  **Seguridad**: Solo se ejecutan workflows predefinidos y aprobados en el catálogo.
3.  **Escalabilidad**: Puedes tener cientos de automatizaciones sin que se crucen entre ellas, simplemente añadiendo subcategorías.
4.  **Reporting**: Puedes sacar informes en iTop de cuántas veces se ha ejecutado cada automatización (contando tickets por subcategoría).

---

## Ejemplo de Flujo Completo

1.  El usuario abre el Portal de Usuario.
2.  Selecciona "Nuevo Requerimiento".
3.  Elige Servicio: `Automatización` -> Subcategoría: `Desplegar Servidor Linux`.
4.  En la descripción pone: `cpu: 2, ram: 4GB` (usando el sistema de parámetros que configuramos anteriormente).
5.  Al dar a "Crear", iTop detecta la subcategoría `Desplegar Servidor Linux`.
6.  Dispara el webhook hacia `deploy-linux.yml`.
7.  GitHub ejecuta el despliegue y devuelve la solución al ticket.
