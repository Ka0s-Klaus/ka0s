FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++

# Copiar archivos de configuración y dependencias desde la raíz del repo
COPY --chown=node:node core/portal/portal/.yarn .yarn
COPY --chown=node:node core/portal/portal/.yarnrc.yml .yarnrc.yml
COPY --chown=node:node core/portal/portal/backstage.json backstage.json
COPY --chown=node:node core/portal/portal/package.json package.json
COPY --chown=node:node core/portal/portal/yarn.lock yarn.lock

# Copiar el código fuente del backend
COPY --chown=node:node core/portal/portal/packages/backend packages/backend

RUN yarn install --immutable
RUN yarn build --cwd packages/backend

EXPOSE 7007
USER node
CMD ["yarn", "start", "--cwd", "packages/backend"]
