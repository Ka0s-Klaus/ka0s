FROM node:18-bullseye-slim
WORKDIR /app
COPY --chown=node:node ../../../portal/portal/.yarn .yarn
COPY --chown=node:node ../../../portal/portal/.yarnrc.yml .yarnrc.yml
COPY --chown=node:node ../../../portal/portal/backstage.json backstage.json
COPY --chown=node:node ../../../portal/portal/package.json package.json
COPY --chown=node:node ../../../portal/portal/yarn.lock yarn.lock
COPY --chown=node:node ../../../portal/portal/packages/backend packages/backend
RUN yarn install --immutable
RUN yarn build --cwd packages/backend
USER node
CMD ["yarn", "start", "--cwd", "packages/backend"]
