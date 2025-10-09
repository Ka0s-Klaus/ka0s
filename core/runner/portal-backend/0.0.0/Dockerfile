# Dockerfile para el backend de Backstage
FROM node:22-bookworm-slim
WORKDIR /app
COPY .yarn ./.yarn
COPY .yarnrc.yml ./
COPY backstage.json ./
COPY yarn.lock package.json ./
COPY packages/backend ./packages/backend
ENV NODE_ENV=production
RUN yarn install --immutable --production
RUN yarn build --cwd packages/backend
EXPOSE 7007
CMD ["yarn", "workspace", "backend", "start"]