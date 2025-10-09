# Dockerfile para el frontend de Backstage
FROM node:22-bookworm-slim
WORKDIR /app
EXPOSE 3000
CMD ["sh", "-c", "if [ ! -f /app/package.json ] || [ ! -d /app/packages/app ]; then echo 'ERROR: El volumen /app no está correctamente poblado. Faltan package.json o packages/app.'; ls -l /app; exit 1; fi; yarn install --production && yarn workspace app start"]