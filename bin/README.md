# Herramientas de Proyecto

Este directorio contiene scripts y binarios para facilitar el desarrollo y la gestión del proyecto.

## kubectl

Se ha incluido un script para descargar y configurar `kubectl` localmente, evitando dependencias del sistema.

### Instalación

Ejecuta el script de configuración una vez:

```bash
./bin/setup-kubectl.sh
```

### Uso

Puedes usar el binario directamente:

```bash
./bin/kubectl get pods
```

O añadir el directorio al PATH en tu sesión actual:

```bash
export PATH="$(pwd)/bin:$PATH"
kubectl get pods
```
