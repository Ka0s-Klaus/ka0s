# Validación de Uso

Para verificar que el servicio está operativo y aceptando conexiones vectoriales:

## 1. Verificar Pod
```bash
kubectl get pods -n postgresql-ia
# Debe estar en estado Running (1/1)
```

## 2. Verificar Conexión
```bash
kubectl exec -it -n postgresql-ia postgresql-ia-0 -- psql -U ka0s_ai -d ka0s_memory -c "\dx"
# Debe listar la extensión 'vector'
```

## 3. Verificar Logs
```bash
kubectl logs -n postgresql-ia postgresql-ia-0
# Buscar "database system is ready to accept connections"
```
