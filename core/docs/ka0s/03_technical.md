# Integración en el Ecosistema

## 1. Estructura del Workspace
El módulo `ka0s` es la raíz que conecta todos los componentes del repositorio:
*   `core/`: Contiene la lógica central, documentación y scripts.
*   `.github/workflows/`: Contiene las definiciones de automatización.
*   `core/outputs/`: Directorio donde `ka0s.yml` deposita los resultados de ejecución.

## 2. Gestión de Secretos y Variables
Para operar, Ka0s requiere una configuración precisa de secretos y variables de entorno:
*   **Secrets**: Credenciales críticas (tokens, claves SSH, contraseñas). Ver `secrets.md` para la lista completa.
*   **Vars**: Configuraciones no sensibles (rutas, flags de feature). Ver `variables.md`.

## 3. Interconexión Modular
El orquestador no realiza el trabajo pesado por sí mismo, sino que integra módulos especializados:
*   Si detecta JSON -> Invoca `kaos_json`
*   Si detecta YAML -> Invoca `kaos_yaml`
*   Si detecta Markdown -> Invoca `kaos_md`
*   Al finalizar -> Invoca `kaos_inspector`

Esta arquitectura desacoplada permite mantener y escalar cada módulo de forma independiente.
