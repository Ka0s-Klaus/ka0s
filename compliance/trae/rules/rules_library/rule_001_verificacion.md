# Regla 001: Verificación (Done)

Ninguna tarea termina sin prueba explícita. El "Done" en Ka0s significa "Probado y Validado".

## Requisitos por Tipo de Tarea
- **Código**: Tests unitarios obligatorios o scripts de validación (`.github/scripts/`).
- **Infraestructura**: Lint (`yamllint`, `kubeval`) o ejecución en modo `dry-run` requerida.
- **Documentación**: Verificar generación de índices y renderizado local (`mkdocs build`).
- **Fixes (Bugs)**:
    1.  Reproducir el error (test que falla).
    2.  Arreglar el código.
    3.  Verificar la solución (test que pasa).

## Evidencia
Toda prueba debe dejar rastro en la salida de la terminal o en un log de ejecución.
