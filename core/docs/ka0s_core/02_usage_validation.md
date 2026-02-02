# Módulo Ka0s Core - Guía de Uso

## Prerrequisitos
Antes de desplegar el core, asegúrate de cumplir con los siguientes requisitos:
*   Acceso root o sudo al host destino (Ubuntu Server 22.04/24.04 recomendado).
*   Token de GitHub (PAT) con permisos para registrar runners.
*   Licencias necesarias si se activan funcionalidades premium de ELK.

## Flujo de Despliegue
El despliegue se orquesta mediante `ka0s.yml` (Iniciador), que invoca los sub-módulos necesarios.

### Configuración Típica
```yaml
kaos:
  core:
    docker:
      version: "latest"
      manager: "portainer"
    observability:
      wazuh: true
      elk: true
    runners:
      count: 2
      labels: ["kaos-core", "ubuntu"]
```

## Validación Post-Despliegue
1.  **Docker**: Verificar estado `systemctl status docker`.
2.  **Portainer**: Acceder a `https://<HOST-IP>:9443` y configurar admin.
3.  **Runners**: Verificar en GitHub Settings > Actions > Runners que los agentes estén "Idle".
