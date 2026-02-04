# Planka - Project Management

**Rol**: Gestión de Proyectos (Kanban).

Planka es una alternativa Open Source a Trello, utilizada para la gestión ágil de tareas dentro del equipo Ka0s.

## 🚀 Funcionalidades
*   Tableros Kanban.
*   Tarjetas con etiquetas, fechas de vencimiento y asignados.
*   Actualizaciones en tiempo real.

## 🛠️ Guía de Despliegue

### Opción A: Automático (GitOps)
Commit y Push a `main`.

### Opción B: Manual
```bash
kubectl apply -k core/b2b/core-services/planka
```

## ⚙️ Configuración
*   **Base de Datos**: Requiere PostgreSQL (configurado en manifiestos adjuntos).
