# Módulo Ka0s Execution - Integración

## El Cerebro de Ka0s
Si **Core** es el cuerpo (infraestructura) y **Inspector** son los ojos (auditoría), **Execution** es el cerebro.

### Interacción con Módulos
*   Invoca a **Ka0s Core** para desplegar infraestructura.
*   Dispara a **Ka0s Lint** para validar código antes de ejecutar.
*   Es monitoreado por **Ka0s Inspector** post-ejecución.

Su diseño modular permite "conectar" nuevos módulos (como `ka0s_mongo` o `ka0s_itop`) simplemente añadiéndolos a la lista de ejecución, sin reescribir la lógica de orquestación.
