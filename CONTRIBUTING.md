# Guía de Contribución a Ka0s

¡Gracias por tu interés en contribuir a Ka0s! Somos un proyecto impulsado por la comunidad y valoramos cada aporte.

## 🚀 Cómo Empezar

1.  **Fork** del repositorio.
2.  **Clona** tu fork localmente.
3.  Crea una **Rama (Branch)** para tu contribución.

### Convención de Ramas
Usamos un formato estándar para facilitar la identificación:
- `feature/nombre-funcionalidad`
- `fix/nombre-bug`
- `docs/nombre-documento`
- `chore/mantenimiento`

## 🛠 Proceso de Desarrollo

### Normas de Calidad (Normas Ka0s)
Antes de enviar tu código, asegúrate de cumplir con nuestras [Normas de Desarrollo](.trae/rules/normas.md):
1.  **Verificación**: Todo cambio debe incluir pruebas (tests o scripts de validación).
2.  **Docs Vivos**: Si tocas código, actualiza la documentación. Si añades docs en `core/docs`, ejecuta `.github/scripts/update-docs-index.py`.
3.  **Inmutabilidad**: No se permiten cambios manuales en producción.
4.  **Auditoría**: Cualquier plan de acción debe documentarse en `audit/trash/` como Markdown.

### Commits
Usamos [Conventional Commits](https://www.conventionalcommits.org/):
- `feat: añade nueva integración con iTop`
- `fix: corrige error en workflow de deploy`
- `docs: actualiza README`

## 📬 Enviando un Pull Request (PR)

1.  Haz Push de tu rama a tu fork.
2.  Abre un PR hacia la rama `main` del repositorio original.
3.  Completa la plantilla del PR describiendo tus cambios y las pruebas realizadas.
4.  Espera la revisión de los maintainers.

## 🤝 Código de Conducta
Se espera que todos los contribuyentes sean respetuosos y constructivos.
