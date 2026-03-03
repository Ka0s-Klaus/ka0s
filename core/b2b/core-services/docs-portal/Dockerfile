# Etapa 1: Construcción
FROM python:3.10-alpine AS builder

WORKDIR /app

# Instalar dependencias
COPY mkdocs.yml .
RUN pip install mkdocs-material

# Copiar documentación
# Asumiendo que el contexto de build es la raíz del repo
COPY core/docs ./core/docs

# Construir sitio estático
RUN mkdocs build

# Etapa 2: Servidor Web
FROM nginx:alpine

# Copiar sitio generado desde la etapa de construcción
COPY --from=builder /app/site /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
