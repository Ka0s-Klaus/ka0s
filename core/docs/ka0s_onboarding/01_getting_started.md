# Primeros Pasos y Requisitos Técnicos

Bienvenido al equipo de ingeniería de Ka0s. Este documento detalla los requisitos técnicos estrictos para operar en nuestro ecosistema.

## 1. Filosofía del Entorno
Ka0s es un framework "Code-First". No dependemos de UIs mágicas; dependemos de CLI, ficheros de configuración y automatización. Tu entorno local debe ser un espejo funcional de los principios que aplicamos en producción.

## 2. Prerrequisitos del Sistema (Host)

Antes de clonar nada, asegura tener las siguientes herramientas instaladas y en el PATH:

### Sistema Base
*   **OS**: macOS (Recomendado/Soportado oficialmente), Linux (Ubuntu/Debian). Windows soportado solo vía WSL2.
*   **Shell**: `zsh` o `bash` (v5+).

### Lenguajes y Runtimes
*   **Python**: v3.10+ (Requerido para scripts de automatización en `.github/scripts`).
    ```bash
    python3 --version
    ```
*   **Node.js**: v18+ (Requerido para validaciones de markdown y herramientas de frontend).
*   **Docker**: Docker Desktop o Rancher Desktop. Debe estar corriendo para pruebas de contenedores locales.

### CLIs Críticas
*   **Git**: v2.30+. Configurado con clave SSH/GPG firmada.
*   **GitHub CLI (`gh`)**: Esencial para interactuar con Issues, PRs y Actions desde la terminal.
    ```bash
    brew install gh
    gh auth login
    ```
*   **Kubectl**: Para interactuar con los clusters (si tienes permisos).
*   **Trae CLI / VSCode CLI**: Para gestión del entorno de desarrollo.

## 3. Acceso y Clonado

### Autenticación
Ka0s impone el uso de **SSH** para todas las operaciones de Git.
1.  Genera tu par de claves SSH (ED25519 recomendado).
2.  Añade la clave pública a tu perfil de GitHub.
3.  Configura tu firma GPG para commits verificados (Obligatorio para Maintainers).

### Clonado del Repositorio
```bash
# Estructura de directorios recomendada
mkdir -p ~/workspace/ka0s-ecosystem
cd ~/workspace/ka0s-ecosystem

# Clonar recursivamente (aunque actualmente no usamos submodules, es buena práctica)
git clone git@github.com:Ka0s-Klaus/ka0s.git
cd ka0s
```

## 4. Mapa Mental del Proyecto
Al entrar en `ka0s/`, verás una estructura que impone orden:

*   **`.github/`**: El cerebro de la automatización. Aquí viven los workflows de CI/CD.
*   **`core/`**: El corazón del framework.
    *   `docs/`: La fuente de verdad (donde estás leyendo esto).
    *   `b2b/`: Definiciones de infraestructura y servicios.
    *   `templates/`: Modelos reutilizables.
*   **`audit/`**: La memoria del sistema. Logs, reportes y evidencias inmutables.
