# Plantilla Base para Workflows de GitHub Actions

Esta plantilla (`basic-template.yaml`) proporciona una estructura estandarizada para crear workflows en el ecosistema Ka0s, siguiendo las mejores prácticas recomendadas por GitHub Actions.

## Estructura General
- **Activadores (`on`)**: Permite ejecutar el workflow manualmente (`workflow_dispatch`), por cambios en archivos relevantes (`push`) y de forma programada (`schedule`).
- **Permisos (`permissions`)**: Define los permisos mínimos necesarios para operar con repositorios, acciones e issues.
- **Variables de entorno (`env`)**: Centraliza variables clave para trazabilidad y configuración.
- **Jobs**:
  - `job-core`: Paso principal donde se ejecuta el proceso.
  - `handle-success`: Gestiona el éxito del workflow y notifica en GitHub Issues.
  - `handle-failure`: Gestiona errores y notifica en GitHub Issues.
  - `end-workflow`: Finaliza el workflow y puede disparar otros procesos (ej. ejecución de inspector).

## Uso
1. **Copia la plantilla** en tu workflow y personaliza los pasos de ejecución principal (`Main Execution`).
2. **Agrega o modifica variables de entorno** según las necesidades de tu proceso.
3. **Incluye pasos adicionales** en `job-core` para instalar dependencias, ejecutar scripts, validar resultados, etc.
4. **Utiliza los jobs de manejo de éxito y error** para mantener trazabilidad y comunicación automática en issues.
5. **Adapta los activadores** (`on`) para ajustarse a los eventos relevantes de tu repositorio.

## Recomendaciones
- Mantén la configuración de permisos lo más restrictiva posible.
- Centraliza la gestión de secretos usando `secrets` de GitHub.
- Documenta cada paso y variable para facilitar el mantenimiento.
- Sube siempre los resultados relevantes como artefactos o archivos al repositorio.
- Unifica los mensajes y lógica de comentarios en issues para facilitar la auditoría.
- Actualiza la plantilla conforme evolucione el ecosistema Ka0s y las mejores prácticas de GitHub Actions.

## Referencias
- [Documentación oficial de GitHub Actions](https://docs.github.com/en/actions)
- [Guía de sintaxis de workflows](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

Esta plantilla está pensada para ser el punto de partida de cualquier workflow en Ka0s. Personalízala según tus necesidades y mantén la estandarización para facilitar la colaboración y el mantenimiento.