FROM ghcr.io/actions/actions-runner:latest
ENV TZ=Europe/Madrid
USER root


# Añadir repositorio oficial de MongoDB
RUN apt-get update && \
    apt-get install -y wget gnupg && \
    curl -fsSL https://pgp.mongodb.com/server-7.0.asc | gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor && \
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse"  | tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Añadir repositorio oficial de trivy
RUN wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor | tee /usr/share/keyrings/trivy.gpg > /dev/null &&\
    echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb generic main" | tee -a /etc/apt/sources.list.d/trivy.list &&\
    apt-get update &&\
    apt-get install trivy

# Añadimos datos al metadata
LABEL maintainer="ka0s@ka0s.io"
LABEL description="Esta es una imagen de ejemplo con software adicional para ser usada en Ka0s C0re."

# Instalar dependencias
RUN apt-get update && \
    apt-get install -y --no-install-recommends mongodb-org-tools jq python3 pip bc ca-certificates \
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
 