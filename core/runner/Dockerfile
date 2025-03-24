FROM ubuntu:25.04
ENV TZ=Europe/Madrid

# Actualiza y configura el entorno
RUN apt-get update && \
    export DEBIAN_FRONTEND=noninteractive && \
    ln -fs /usr/share/zoneinfo/$TZ /etc/localtime && \
    apt-get install -y --no-install-recommends tzdata apt-utils apt-transport-https curl wget git jq gnupg && \
    dpkg-reconfigure --frontend noninteractive tzdata && \
    apt-get upgrade -y

# Implementa la cli de GH
RUN VERSION=`wget --no-check-certificate "https://api.github.com/repos/cli/cli/releases/latest" | grep '"tag_name"' | sed -E 's/.*"([^"]+)".*/\1/' | cut -c2-` && \
    wget https://github.com/cli/cli/releases/download/v${VERSION}/gh_${VERSION}_linux_amd64.tar.gz && \
    tar xvf gh_${VERSION}_linux_amd64.tar.gz && \
    cp gh_${VERSION}_linux_amd64/bin/gh /usr/local/bin/

# Actualizamos los repos
RUN wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
    dpkg -i packages-microsoft-prod.deb && \
    rm packages-microsoft-prod.deb && \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends dotnet-sdk-6.0 aspnetcore-runtime-6.0 dotnet-runtime-6.0 

# Actualiza DoNete
RUN wget https://dot.net/v1/dotnet-install.sh && \
    chmod +x dotnet-install.sh && \
    ./dotnet-install.sh -c 6.0

# Creamos el directorio y descargamos el runner
#RUN mkdir actions-runner && cd actions-runner && \
#    curl -o actions-runner-linux-x64-2.320.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.320.0/actions-runner-linux-x64-2.320.0.tar.gz && \
#    tar xzf ./actions-runner-linux-x64-2.320.0.tar.gz

# Agrega el usuario y configura sudo
RUN useradd -m -s /bin/bash kaos && echo 'kaos:PASSWORD' | chpasswd && \
    usermod -aG sudo kaos && echo 'kaos ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    chown -R kaos:kaos /actions-runner && \
    chmod -R 755 /actions-runner

USER kaos
# Ejecuto la conexion con github
# esta parte hay que ejecutarla en el interior del docker (requeire respuestas) /actions-runner/config.sh --url https://github.com/SantaKa0S --token TOKEN \
# --name string          Name of the runner to configure (default myrunner)
# --runnergroup string   Name of the runner group to add this runner to (defaults to the default runner group)
# --labels string        Extra labels in addition to the default: 'self-hosted,Linux,X64'
# --work string          Relative runner work directory (default _work)

'./config.sh --url https://github.com/Ka0s-Klaus --token BO7XQANZQNAMWUIVKEMSWI3HUD7IS --name ka0s-runner-1 --runnergroup ka0s --labels ka0s-runner-1 --work  _work'

WORKDIR /home/kaos
CMD ["bash"]