# ELK Stack (Elasticsearch, Logstash, Kibana)

**Rol**: Sistema Centralizado de Logs.

Este módulo despliega la pila ELK completa para la recolección, almacenamiento y visualización de logs de todo el cluster Ka0s.

## 🚀 Componentes

1.  **Elasticsearch**: Motor de búsqueda y analítica. Almacena los logs.
2.  **Logstash**: Pipeline de procesamiento de datos. Ingiere y transforma logs.
3.  **Kibana**: Interfaz de visualización.

## 🛠️ Guía de Despliegue

### Opción A: Automático (GitOps)
El despliegue se gestiona automáticamente mediante **GitHub Actions** al hacer push a `main` con cambios en este directorio.

### Opción B: Manual
```bash
kubectl apply -k core/b2b/core-services/elk
```

## 📡 Accesibilidad

*   **Kibana**: Expuesto vía Servicio (Revisar `kibana-service.yaml`).
    *   Comando para ver IP/Puerto: `kubectl get svc -n elk kibana`

## ⚙️ Configuración
*   **Logstash**: Configurado mediante `logstash-configmap.yaml` para parsear logs de contenedores.
*   **Persistencia**: Elasticsearch utiliza StatefulSets para garantizar la persistencia de datos.
