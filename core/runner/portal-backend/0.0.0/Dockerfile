# Dockerfile para el backend de Backstage
FROM node:22-bookworm-slim
WORKDIR /app
# No copies redundantes, solo instala dependencias si es necesario
RUN yarn install --production || true
EXPOSE 7007
CMD ["yarn", "workspace", "backend", "start"]