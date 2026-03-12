# Concepto

El servicio `postgresql-ia` actúa como la **Memoria a Largo Plazo** del sistema de IA de Ka0s.
Almacena:
1.  **Embeddings**: Representaciones vectoriales de documentos, reglas y skills.
2.  **Metadatos**: Fuente, fecha de ingesta, hash de contenido.
3.  **Historial**: Conversaciones pasadas (opcional).

## Arquitectura
- **Namespace**: `postgresql-ia`
- **Aislamiento**: Separación total de `ka0s_core` (Main DB).
- **Seguridad**: Credenciales rotadas en Secret `postgres-ia-secret`.
