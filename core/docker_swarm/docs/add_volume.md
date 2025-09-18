# Añadir Volumenes al cluster Swarm con NFS

## Creamos y compartimos el volumen

sudo mkdir -p /mnt/kaos_storage/mongodb
sudo chown nobody:nogroup /mnt/kaos_storage/mongodb
sudo chmod 777 /mnt/kaos_storage/mongodb
sudo exportfs -a
sudo nano /etc/exports
sudo systemctl restart nfs-kernel-server

## Asignamos el volumen creado a Swarm y nodos

docker volume create \
  --driver local \
  --opt type=nfs \
  --opt o=addr=192.168.1.52,rw \
  --opt device=:/mnt/kaos_storage/prometheus \
  prometheus_data
