# Metrics Server (v0.7.0)

Componente esencial para habilitar las métricas de CPU y Memoria en el Dashboard de Kubernetes y permitir el auto-escalado (HPA).

## Configuración Especial

Se ha añadido el parche `--kubelet-insecure-tls` para permitir su funcionamiento en entornos con certificados autofirmados o clusters locales, evitando el error `x509: certificate signed by unknown authority`.

## Despliegue

```bash
kubectl apply -k .
```

Una vez desplegado, espera unos minutos y ejecuta:

```bash
kubectl top nodes
```
Si devuelve valores de CPU/RAM, el sistema está funcionando.
