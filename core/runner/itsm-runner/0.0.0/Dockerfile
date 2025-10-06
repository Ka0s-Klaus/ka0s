FROM ghcr.io/actions/actions-runner:latest
ENV TZ=Europe/Madrid
USER root

# Añadimos datos al metadata
LABEL maintainer="ka0s@ka0s.io"
LABEL description="Esta es una imagen de ejemplo con software adicional para ser usada en Ka0s C0re."

# Instalar dependencias
RUN apt-get update && \
    apt-get install -y --no-install-recommends net-tools nano acl jq python3 pip bc ca-certificates \
    tzdata apt-utils apt-transport-https curl wget git gnupg gh && \
    openssl && \
    dpkg-reconfigure --frontend noninteractive tzdata

# Actualiza y configura el entorno
RUN apt-get update && \
    export DEBIAN_FRONTEND=noninteractive && \
    ln -fs /usr/share/zoneinfo/$TZ /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata && \
    apt-get upgrade -y

USER runner
WORKDIR /home/runner
CMD ["bash"]