# Ka0s SSH Connect - Concepto

## Descripción
`ssh-connect` es un **meta-workflow** y una **composite action** diseñada para abstraer la complejidad de conectarse de forma segura a servidores remotos.

## Problema que Resuelve
Evita duplicar la lógica de `install sshpass -> add host key -> ssh command` en cada workflow. Centraliza la seguridad y el manejo de errores de conexión.

## Arquitectura
Funciona inyectando scripts locales en el servidor remoto, ejecutándolos y recuperando los resultados (archivos/logs) de vuelta al runner de GitHub.
