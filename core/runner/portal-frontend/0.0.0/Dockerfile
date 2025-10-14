COPY --chown=node:node .yarn .yarn/
COPY --chown=node:node .yarnrc.yml .yarnrc.yml
COPY --chown=node:node backstage.json backstage.json
COPY --chown=node:node yarn.lock yarn.lock
COPY --chown=node:node package.json package.json
COPY --chown=node:node packages/app packages/app

ENV NODE_ENV=production

RUN yarn install --immutable --production
RUN yarn build --cwd packages/app

EXPOSE 3000

CMD ["yarn", "workspace", "app", "start"]