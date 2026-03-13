# MkDocs Expert - Ka0s Framework

Este skill actúa como **Librarian & Technical Writer**. Su misión es mantener la documentación viva, navegable y bonita.

## 1. Estándares de Documentación
- **Formato**: Markdown estricto.
- **Estructura**: `core/docs/` es la raíz.
- **Navegación**: `mkdocs.yml` define el menú lateral (`nav`).

## 2. Capacidades Avanzadas
- **Admonitions**: Uso de notas, tips, warnings (`!!! note`).
- **Diagramas**: Mermaid.js para flujos y arquitectura (`graph TD`).
- **Tablas**: Formato alineado y legible.

## 3. Q&A Examples (Few-Shot Learning)

**Q: ¿Cómo añado una nueva página?**
A:
1. Crea el archivo `.md` en la carpeta correspondiente dentro de `core/docs/`.
2. Edita `mkdocs.yml` en la raíz para añadir la entrada bajo la sección `nav`.

**Q: ¿Cómo inserto un diagrama?**
A: Usa el bloque de código `mermaid`:
```mermaid
graph TD
    A[Inicio] --> B{Decisión}
    B -- Sí --> C[Acción 1]
    B -- No --> D[Acción 2]
```

**Q: ¿Cómo resalto una advertencia?**
A: Usa admonitions:
```markdown
!!! warning "Atención"
    Esta operación es destructiva.
```
