# Módulo Core para el despliegue de Ka0s

Este módulo permite desplegar las siguientas parte de Ka0s de manera personalizada:

- Instalación de docker personalizada
- Implementación de los runners personalizados (dependencias de Organizacion de GitHub)
- Despliegue por defecto de Wazuh (necesita de una personalización posterior)
- Despliegue por defecto de ELK (algunas funcionalidaddes requieren de licencia)
- Personalización de la monitorización base del agente de wazuh en el host donde se ubica docker
- Despliegue y personalización del gestor de docker (en ka0s por defecto usamos la última versión de Portainer)

Recomendaciones:

- Disponer de Codacy a nivel de cuenta de organización de GitHub
- Disponer de NewRelic o similar para la monitorización
- Añadir el servidor al servicio ubuntu.com/pro/attach

Opcional:

- Disponer de un mecanismo de Registry para alojar las imagenes peronalizadas

## Pasos a seguir

- Instalación del servidor
Para la instalación del servidor (en el momento de escribir este documento) hemos utilizado una versión mínima de la imagen de ubuntu server 24.04.1 LTS, con las siguientes opciones:

>- Instalación base de ubuntu server (personalización de ip's)
>- Conexión a Ubuntu Pro
>- Usuario por defecto kaos / 'CHANGEPASSWORD'
>- OpenSSH

- Configuración de OpenSSH

>- Conectamos con el servidor remoto via ssh

```Shell
    ssh username@hostname
````

>- Configuramos las opciones de la SSH-KEY para establecer la conexión

```Shell
    ssh-keygen -C "your_option_email"
    Generating public/private ed25519 key pair.
    Enter file in which to save the key (/Users/santale/.ssh/id_ed25519): your_cert_name
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in your_cert_name
    Your public key has been saved in your_cert_name.pub
    The key fingerprint is:
    SHA256:59nGhN/mMAdWhIAYKKl0Rc251pN8BTN7ltAtFqqs574 your_option_email
    The key's randomart image is:
    +--[ED25519 256]--+
    |   .o++o...*oo+  |
    | .o.. .+.   B*.. |
    |....    + .oo+o  |
    |.      o.=.oo.   |
    |      . So= +    |
    |        .o B o   |
    |       . .o B +  |
    |        o  . *   |
    |        .E.   .  |
    +----[SHA256]-----+

    ssh-copy-id -i ~/.ssh/your_cert_name.pub username@hostname
    /usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "your_cert_name.pub"
    /usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are    already installed
    /usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to     install the new keys
    username@hostname's password: 

    Number of key(s) added:        1

    Now try logging into the machine, with:   "ssh 'username@hostname'"
    and check to make sure that only the key(s) you wanted were added.

    ssh -i your_cert_name username@hostname

    username@hostname:~$ sudo nano /etc/ssh/sshd_config
    # This is the sshd server system-wide configuration file.  See
    # sshd_config(5) for more information.

    # This sshd was compiled with PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/   games

    # The strategy used for options in the default sshd_config shipped with
    # OpenSSH is to specify options with their default value where
    # possible, but leave them commented.  Uncommented options override the
    # default value.

    Include /etc/ssh/sshd_config.d/*.conf

    Port 1712 #recomended
    #AddressFamily any
    ListenAddress your_ip_server
    # To disable tunneled clear text passwords, change to no here!
    #PasswordAuthentication yes
    PasswordAuthentication no
    PermitEmptyPasswords no
    PermitRootLogin no
    KbdInteractiveAuthentication no
    X11Forwarding no
    PrintMotd no
    ClientAliveInterval 180
    .......

    ssh -i your_cert_name username@hostname -p 1712
    username@hostname:~$
````

>- Vamos a instalar lo estrictamente necesario para poder gestionarlo [DOCKER](https://docs.docker.com/engine/install/ubuntu/)

```Shell
    ssh -i your_cert_name username@hostname -p 1712 

    for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    # Add the repository to Apt sources:
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download. docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update

    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

    sudo usermod -aG docker kaos

    change password

    curl -s https://packages.wazuh.com/key/GPG-KEY-WAZUH | gpg --no-default-keyring --keyring gnupg-ring:/usr/share/keyrings/wazuh.gpg --import && chmod 644 /usr/share/keyrings/wazuh.gpg

    [sudo] password for kaos: 
    gpg: keyring '/usr/share/keyrings/wazuh.gpg' created
    gpg: directory '/root/.gnupg' created
    gpg: /root/.gnupg/trustdb.gpg: trustdb created
    gpg: key 96B3EE5F29111145: public key "Wazuh.com (Wazuh Signing Key) <support@wazuh.com>" imported
    gpg: Total number processed: 1
    gpg:               imported: 1

    echo "deb [signed-by=/usr/share/keyrings/wazuh.gpg] https://packages.wazuh.com/4.x/apt/ stable main" | tee -a /etc/apt/sources.list.d/wazuh.list

    deb [signed-by=/usr/share/keyrings/wazuh.gpg] https://packages.wazuh.com/4.x/apt/ stable main

    apt-get update

    deb https://packages.wazuh.com/4.x/apt/ stable main

    WAZUH_MANAGER="10.0.0.2" apt-get install wazuh-agent

    systemctl daemon-reload
    systemctl enable wazuh-agent
    systemctl start wazuh-agent

    sudo apt-get install gh git -y
    gh version 2.45.0 (2024-11-21 Ubuntu 2.45.0-1ubuntu0.2+esm1)
    https://github.com/cli/cli/releases/tag/v2.45.0

    git version 2.43.0

    sudo docker run -d \
            -p 9001:9001 \
            --name portainer_agent \
            --restart=always \
            -v /var/run/docker.sock:/var/run/docker.sock \
            -v /var/lib/docker/volumes:/var/lib/docker/volumes \
            -v /:/host \
            portainer/agent:2.25.1
````

>- Solicitar un runner nuevo

```Shell
    "docker run -t --name core-2 github-runner:25.04 /bin/bash -c '/actions-runner/config.sh --url https://github.com/Ka0s-Klaus --token BO7XQAMV7OZ65AIAGECOWULHVOBQ4 --name core-3 --runnergroup core --labels core-3 --work _work'"
```

>- Con esta parte deberiamos de tener el control de nuestro nodo de docker donde vamos a personalizar cada una de las acciones independinetes a la hora de añadir los runners. Lo primero es copiar el ficher de docker file de despliegue en el propio host para añadir la imagen personalizada como github-runner:latest

```shell
    scp -i kaosmaster -J kaos@master.ka0s.io -P 1712 ka0s/core/runner/Dockerfile ./
    mandamos el fichero al servidor

"docker exec -d core-3 'cd /actions-runner/ && ./config.sh --url https://github.com/Ka0s-Klaus --token BO7XQAMV7OZ65AIAGECOWULHVOBQ4 --name core-3 --runnergroup core --labels core-3 --work _work'"
```
