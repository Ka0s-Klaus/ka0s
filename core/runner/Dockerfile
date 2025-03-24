FROM ubuntu:25.04
ENV TZ=Europe/Madrid

# Actualiza y configura el entorno
RUN apt-get update && \
    export DEBIAN_FRONTEND=noninteractive && \
    ln -fs /usr/share/zoneinfo/$TZ /etc/localtime && \
    apt-get install -y --no-install-recommends tzdata apt-utils apt-transport-https curl wget git jq gnupg gh && \
    dpkg-reconfigure --frontend noninteractive tzdata && \
    apt-get upgrade -y

# Agrega el usuario y configura sudo
RUN mkdir actions-runner &&  cd actions-runner && \
    useradd -m -s /bin/bash kaos && echo 'kaos:PASSWORD' | chpasswd && \
    usermod -aG sudo kaos && echo 'kaos ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    chown -R kaos:kaos /actions-runner && \
    chmod -R 755 /actions-runner && \
    curl -o actions-runner-linux-x64-2.323.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.323.0/actions-runner-linux-x64-2.323.0.tar.gz && \
    tar xzf ./actions-runner-linux-x64-2.323.0.tar.gz

USER kaos
WORKDIR /home/kaos
CMD ["bash"]