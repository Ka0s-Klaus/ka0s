# Dockerfile para el frontend de Backstage
FROM node:22-bookworm-slim
EXPOSE 3000
WORKDIR /app
CMD ["sh", "-c", "./preinstall-deps.sh && yarn workspace app start"]