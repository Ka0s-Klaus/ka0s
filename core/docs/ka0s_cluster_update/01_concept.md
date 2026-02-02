# Ka0s Cluster System Update - Concepto

## Descripción General
Este módulo automatiza el mantenimiento y actualización del sistema operativo de los nodos del clúster Kubernetes.

## Arquitectura "Bastion Host"
Utiliza un enfoque de seguridad donde:
1.  El runner de GitHub conecta **solo** al nodo manager (`k8-manager`).
2.  Desde el manager, se utiliza un script (`system-update.sh`) para saltar a los nodos workers.
3.  Esto minimiza la superficie de ataque, ya que solo un puerto SSH necesita estar expuesto o accesible desde el runner.

## Flujo de Datos
`Runner` -> `SSH` -> `Manager` -> `SSH Interno` -> `Workers (Node 20, 30, 40)`
