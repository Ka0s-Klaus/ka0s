# packages/backend/Dockerfile

# --- Etapa 1: Selección de la versión de Node.js ---
# Usamos una versión de Node.js compatible con Backstage (18 o 20),
# basada en una imagen ligera de Debian (Bullseye).
FROM node:18-bullseye-slim

# --- Etapa 2: Instalación de dependencias del sistema operativo ---
# Yarn necesita algunos paquetes como 'git' para funcionar correctamente.
# 'dumb-init' es una buena práctica para gestionar procesos en contenedores.
RUN apt-get update && \
    apt-get install -y --no-install-recommends libsqlite3-dev python3 build-essential git && \
    npm install -g --no-update-notifier --no-fund yarn && \
    yarn global add --no-update-notifier --no-fund dumb-init

# --- Etapa 3: Preparación del entorno de la aplicación ---
# Establecemos el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copiamos los ficheros de definición de paquetes y el lockfile.
# Esto aprovecha la caché de Docker: si estos ficheros no cambian,
# no se volverán a descargar todas las dependencias.
COPY yarn.lock package.json packages/backend/package.json ./
COPY packages/app/package.json ./packages/app/

# --- Etapa 4: Instalación de dependencias de producción ---
# Usamos 'yarn install --frozen-lockfile' que es la forma recomendada
# para CI/CD y entornos de construcción, asegurando que se usan las
# versiones exactas del 'yarn.lock'.
# '--production' evita instalar las devDependencies, que no necesitamos en la imagen final.
RUN yarn install --frozen-lockfile --production --network-concurrency 1

# --- Etapa 5: Construcción del esqueleto del backend ---
# Copiamos el resto de los ficheros de configuración y código del backend.
COPY packages/backend/ ./

# --- Etapa 6: Construcción del frontend y empaquetado ---
# Aquí ocurre la magia:
# 1. Copiamos el código fuente del frontend.
# 2. Lo construimos, generando los ficheros estáticos.
# 3. Movemos esos ficheros estáticos a la carpeta 'public' del backend.
#    De esta forma, el backend podrá servirlos.
COPY packages/app/ ./packages/app/
RUN yarn workspace app build && \
    mv packages/app/dist public

# --- Etapa 7: Definición del comando de ejecución ---
# Usamos 'dumb-init' para iniciar correctamente el proceso de Node.js.
# El comando 'yarn start' ejecuta el script definido en 'packages/backend/package.json',
# que a su vez inicia el servidor de backend.
# El backend se ejecutará en modo 'production' por defecto.
CMD ["dumb-init", "yarn", "start"]
