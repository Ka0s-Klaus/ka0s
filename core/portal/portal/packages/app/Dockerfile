# Dockerfile para el frontend de Backstage
FROM node:22-bookworm-slim

WORKDIR /app

COPY .yarn ./.yarn
COPY .yarnrc.yml ./
COPY backstage.json ./
COPY yarn.lock package.json ./
COPY packages/app ./packages/app

ENV NODE_ENV=production

RUN yarn install --immutable --production
RUN yarn build --cwd packages/app

EXPOSE 3000

CMD ["yarn", "workspace", "app", "start"]