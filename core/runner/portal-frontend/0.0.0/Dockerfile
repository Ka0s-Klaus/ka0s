COPY .yarn .yarn/
COPY .yarnrc.yml .yarnrc.yml
COPY backstage.json backstage.json
COPY yarn.lock yarn.lock
COPY package.json package.json
COPY packages/app packages/app

ENV NODE_ENV=production

RUN yarn install --immutable --production
RUN yarn build --cwd packages/app

EXPOSE 3000

CMD ["yarn", "workspace", "app", "start"]