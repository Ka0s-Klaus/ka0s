# Dockerfile para el frontend de Backstage
FROM node:22-bookworm-slim

WORKDIR /app

COPY --chown=node:node .yarn ./.yarn
COPY --chown=node:node .yarnrc.yml ./
COPY --chown=node:node backstage.json ./
COPY --chown=node:node yarn.lock package.json ./
COPY --chown=node:node packages/app ./packages/app

ENV NODE_ENV=production

RUN yarn install --immutable --production
RUN yarn build --cwd packages/app

EXPOSE 3000

CMD ["yarn", "workspace", "app", "start"]