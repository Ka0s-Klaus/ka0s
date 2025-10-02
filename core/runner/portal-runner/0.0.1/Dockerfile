FROM ubuntu:latest
ENV TZ=Europe/Madrid
USER root
ARG NODE_VERSION=22 # este parametro se puede definir en el momento de construir la imagen

# Añadimos datos al metadata
LABEL maintainer="ka0s@ka0s.io"
LABEL description="Esta es una imagen de Ka0s C0re Project."

# Instalar dependencias
RUN apt-get update && \
    apt-get install -y --no-install-recommends jq python3 pip bc ca-certificates \
    tzdata apt-utils apt-transport-https curl wget git gnupg gh && \
    openssl && \
    dpkg-reconfigure --frontend noninteractive tzdata

# Actualiza y configura el entorno
RUN apt-get update && \
    export DEBIAN_FRONTEND=noninteractive && \
    ln -fs /usr/share/zoneinfo/$TZ /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata && \
    apt-get upgrade -y

# Crear usuario kaos y su directorio de trabajo
RUN useradd -m -s /bin/bash kaos && \
    mkdir -p /app && \
    chown -R kaos:kaos /app

# Añadimos la instalacion de Node mediante NVM...
# install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# set env
ENV NVM_DIR=/root/.nvm

# install node
RUN bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION"

USER kaos
# Cerramos la configuracion
CMD ["bash"]