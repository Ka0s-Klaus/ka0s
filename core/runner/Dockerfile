FROM ubuntu:24.04
ENV TZ=Europe/Madrid
 
# Update base system first
RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates apt-transport-https tzdata && \
    bc curl wget git python3 pip \
        libc6 libgcc-s1 libicu74 liblttng-ust1 \
        libssl3 libstdc++6 libunwind8 zlib1g \
        jq gnupg gh apt-utils && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
 
# Set timezone
RUN ln -fs /usr/share/zoneinfo/$TZ /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata

# Install GitHub Runner
RUN mkdir actions-runner &&  cd actions-runner && \
    useradd -m -s /bin/bash kaos && echo 'kaos:PASSWORD' | chpasswd && \
    usermod -aG sudo kaos && echo 'kaos ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    chown -R kaos:kaos /actions-runner && \
    chmod -R 755 /actions-runner && \
    curl -o actions-runner-linux-x64-2.324.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.324.0/actions-runner-linux-x64-2.324.0.tar.gz && \
    tar xzf ./actions-runner-linux-x64-2.324.0.tar.gz
 
USER kaos
WORKDIR /home/kaos
CMD ["bash"]