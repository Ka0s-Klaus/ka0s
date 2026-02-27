# Concepto: Enrutamiento Automático de Proyectos

## Objetivo
Automatizar la asignación y clasificación inicial de **Issues** en el Proyecto de Organización **Ka0sC0re** (Proyecto #4), eliminando la necesidad de intervención manual por parte de los desarrolladores o gestores.

## Problema
GitHub Issue Templates no permite asignar nativamente:
1.  **Proyectos V2 (Beta)**: Solo permite Proyectos clásicos.
2.  **Estado Inicial (Columna)**: Los issues siempre entran en "Todo" o "No Status" por defecto.

## Solución: Workflow `project-routing.yml`
Se ha implementado un flujo de trabajo que reacciona a la creación de nuevos issues (`issues: [opened]`) y utiliza la **GitHub CLI (`gh`)** para interactuar con la API de Proyectos de la organización.

### Lógica de Enrutamiento
El sistema detecta el tipo de Issue basándose en las etiquetas (`labels`) asignadas por la plantilla y mueve el ítem a la columna correspondiente en el tablero Kanban.

| Etiqueta (Label) | Tipo de Issue | Columna Destino (Status) |
| :--- | :--- | :--- |
| `itop-incident` | Incidencia | **Issues** |
| `itop-problem` | Problema | **Problems** |
| `itop-change` | Cambio | **Changes** |
| `itop-request` | Solicitud | **Request** |
| *(otros)* | *(cualquiera)* | *(Inbox / No Status)* |

## Beneficios
1.  **Organización Inmediata**: Los tickets aparecen en su carril correcto desde el segundo cero.
2.  **Visibilidad**: El equipo de Ka0sC0re tiene una visión clara de la carga de trabajo por tipo.
3.  **Estandarización**: Se evitan errores humanos en la clasificación inicial.
