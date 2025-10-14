FROM node:18-bullseye-slim
WORKDIR /app
COPY --chown=node:node .yarn .yarn
COPY --chown=node:node .yarnrc.yml .yarnrc.yml
COPY --chown=node:node backstage.json backstage.json
COPY --chown=node:node package.json package.json
COPY --chown=node:node yarn.lock yarn.lock
COPY --chown=node:node packages/app packages/app
RUN yarn install --immutable
RUN yarn build --cwd packages/app
CMD ["yarn", "start", "--cwd", "packages/app"]