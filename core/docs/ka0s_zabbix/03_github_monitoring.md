# 🐙 Monitorización de GitHub

Zabbix puede conectarse a GitHub para mostrar métricas sobre el desarrollo, pull requests y acciones.

## Configuración del Host

Para ver estadísticas de su repositorio:

1.  En el menú lateral izquierdo, vaya a **Data collection** (Recolección de datos) > **Hosts**.
2.  Haga clic en el botón **Create host** (arriba a la derecha).
3.  **Host name**: Ponga un nombre descriptivo (ej. `GitHub Repositorio`).
4.  **Templates**: En el campo "Templates", escriba `Template GitHub Repository Metrics` y selecciónelo.
5.  **Host groups**: Seleccione o escriba `Applications`.
6.  **Interfaces**: No es necesaria una interfaz para este tipo de monitorización (es pasiva/HTTP), pero si se le pide, puede añadir una de tipo "Agent" con IP `127.0.0.1`.

## Configuración de Macros (Credenciales)

Vaya a la pestaña llamada **Macros**, seleccione "Inherited and host macros" y rellene estos 3 campos obligatorios:

| Macro | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `{$GITHUB.API.TOKEN}` | Su Token personal de acceso (PAT) de GitHub. | `ghp_xxxxxxxxxxxx` |
| `{$GITHUB.REPO.OWNER}` | El nombre del usuario u organización dueño del repositorio. | `Ka0s-Klaus` |
| `{$GITHUB.REPO.NAME}` | El nombre del repositorio. | `ka0s` |

Finalmente, haga clic en el botón azul **Add**.
