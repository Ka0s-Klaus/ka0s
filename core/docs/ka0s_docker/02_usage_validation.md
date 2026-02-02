# Módulo Ka0s Docker - Uso

## Comandos Comunes
Aunque gestionado automáticamente, puedes validar el estado en los nodos:
```bash
systemctl status docker
docker ps
```

## Validación
*   Verificar que el servicio `portainer` esté corriendo en el puerto 9443.
*   Confirmar que los runners de GitHub pueden levantar contenedores (Docker-in-Docker o socket binding).
