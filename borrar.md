# Descargar la clave GPG y configurar el repositorio estable
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

ERROR (dkms apport): kernel package linux-headers-6.8.1-1042-realtime is not supported
Error! Bad return status for module build on kernel: 6.8.1-1042-realtime (x86_64)
Consult /var/lib/dkms/nvidia/535.288.01/build/make.log for more information.
dpkg: error al procesar el paquete nvidia-dkms-535 (--configure):
 el subproceso instalado paquete nvidia-dkms-535 script post-installation devolvió el código de salida de error 10
Configurando libcurl3t64-gnutls:amd64 (8.5.0-2ubuntu10.8) ...
dpkg: problemas de dependencias impiden la configuración de nvidia-driver-535:
 nvidia-driver-535 depende de nvidia-dkms-535 (<= 535.288.01-1); sin embargo:
 El paquete `nvidia-dkms-535' no está configurado todavía.
 nvidia-driver-535 depende de nvidia-dkms-535 (>= 535.288.01); sin embargo:
 El paquete `nvidia-dkms-535' no está configurado todavía.

dpkg: error al procesar el paquete nvidia-driver-535 (--configure):
 problemas de dependencias - se deja sin configurar
No se escribió un informe «apport» porque el mensaje de error indica que es un mensaje de error asociado a un fallo previo.
                                                                                                                           Configurando curl (8.5.0-2ubuntu10.8) ...
Procesando disparadores para man-db (2.12.0-4build2) ...
Procesando disparadores para libc-bin (2.39-0ubuntu8.7) ...
Procesando disparadores para initramfs-tools (0.142ubuntu25.8) ...
update-initramfs: Generating /boot/initrd.img-6.8.1-1042-realtime
Se encontraron errores al procesar:
 nvidia-dkms-535
 nvidia-driver-535
needrestart is being skipped since dpkg has failed
N: Some packages may have been kept back due to phasing.
E: Sub-process /usr/bin/dpkg returned an error code (1)