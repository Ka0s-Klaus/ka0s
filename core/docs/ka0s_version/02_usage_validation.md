# Ka0s Version Manager - Uso

## Flujo Automático
Al hacer merge de un PR a `main`:
1.  El workflow analiza los commits.
2.  Calcula la nueva versión.
3.  Genera un Tag de Git.
4.  Actualiza el `CHANGELOG.md`.

## Validación
Verifica la pestaña "Tags" o "Releases" en GitHub tras un merge exitoso. Deberías ver la nueva versión inmediatamente.
