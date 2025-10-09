# Dockerfile para el frontend de Backstage
FROM node:22-bookworm-slim
WORKDIR /app
# No copies redundantes, solo instala dependencias si es necesario
RUN yarn install --production || true
EXPOSE 3000
CMD ["yarn", "workspace", "app", "start"]