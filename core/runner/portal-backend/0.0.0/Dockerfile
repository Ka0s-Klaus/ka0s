# Dockerfile para el backend de Backstage
FROM node:22-bookworm-slim
WORKDIR /app
EXPOSE 7007
CMD ["sh", "-c", "if [ ! -f /app/package.json ] || [ ! -d /app/packages/backend ]; then echo 'ERROR: El volumen /app no está correctamente poblado. Faltan package.json o packages/backend.'; ls -l /app; exit 1; fi; yarn workspace backend start"]