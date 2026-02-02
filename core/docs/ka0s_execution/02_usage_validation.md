# Módulo Ka0s Execution - Uso

## Configuración
La ejecución se configura típicamente a través de matrices en GitHub Actions o definiciones en `ka0s.yml`.

### Ejemplo de Definición de Ejecución
```yaml
execution:
  strategy: matrix
  parallel: true
  jobs:
    - name: "build-core"
      runner: "ubuntu-latest"
    - name: "test-integration"
      needs: ["build-core"]
```

## Validación
Verifica la pestaña "Actions" en GitHub. Un flujo de ejecución correcto mostrará un grafo de dependencias (DAG) que coincide con la lógica definida, con trabajos ejecutándose en paralelo donde sea posible.
