# Ka0s Lint Markdown - Integración en el Ecosistema Ka0s

## Documentación como Código
En Ka0s, tratamos la documentación con la misma rigurosidad que el código fuente. **Ka0s Lint Markdown** es la herramienta que hace cumplir esta filosofía.

## Integración en el Ciclo de Vida
1.  **Escritura**: Los ingenieros escriben documentación en `core/docs/`.
2.  **Pull Request**: Al abrir un PR con cambios en `.md`:
    *   El workflow **Ka0s Markdown Lint** se dispara.
    *   Invoca esta acción compuesta.
    *   Verifica que los nuevos documentos cumplan con las guías de estilo.
3.  **Merge**: Solo se permite el merge si la documentación está "limpia".

## Beneficios para el Proyecto
*   **Legibilidad**: Asegura que todos los documentos (`README.md`, guías técnicas) se vean igual, independientemente de quién los escribió.
*   **Renderizado Correcto**: Al validar la sintaxis, garantizamos que los archivos se rendericen correctamente en la interfaz web de GitHub (tablas bien formadas, enlaces funcionales).
*   **Automatización**: Reduce la carga en la revisión de código (Code Review), ya que los revisores humanos no tienen que señalar errores de formato triviales; el linter lo hace (o lo corrige) por ellos.
