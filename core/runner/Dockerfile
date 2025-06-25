FROM ubuntu:24.04
ENV TZ=Europe/Madrid

# Actualiza y configura el entorno
RUN apt-get update && \
export DEBIAN_FRONTEND=noninteractive && \
ln -fs /usr/share/zoneinfo/$TZ /etc/localtime && \
apt-get install -y --no-install-recommends python3 pip bc libicu74 libc6 libgcc-s1 liblttng-ust1 libssl3 libstdc++6 libunwind8 zlib1g ca-certificates tzdata apt-utils apt-transport-https curl tar wget git jq gnupg gh && \
dpkg-reconfigure --frontend noninteractive tzdata && \
apt-get upgrade -y
 
# Agrega el usuario y configura sudo
RUN mkdir actions-runner && cd actions-runner && \
useradd -m -s /bin/bash kaos && echo 'kaos:PASSWORD' | chpasswd && \
usermod -aG sudo kaos && echo 'kaos ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
chown -R kaos:kaos /actions-runner && \
chmod -R 755 /actions-runner && \
curl -o actions-runner-linux-x64-2.324.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.324.0/actions-runner-linux-x64-2.324.0.tar.gz && \
tar xzf ./actions-runner-linux-x64-2.324.0.tar.gz
 
USER kaos
WORKDIR /home/kaos
CMD ["bash"]
 