# Dockerfile para el frontend de Backstage
FROM node:22-bookworm-slim
WORKDIR /app
EXPOSE 3000
COPY preinstall-deps.sh /app/preinstall-deps.sh
RUN chmod +x /app/preinstall-deps.sh
CMD ["sh", "-c", "/app/preinstall-deps.sh && yarn workspace app start"]