# Stage 1: Build (host compila dependencias y artefactos)
FROM node:20-bookworm AS builder
WORKDIR /app
COPY . .
RUN corepack enable && yarn install --immutable
RUN yarn tsc
RUN yarn build:backend
RUN yarn build --cwd packages/app

# Stage 2: Producción Backend
FROM node:20-bookworm-slim AS backend
WORKDIR /app
RUN apt-get update && apt-get install -y python3 g++ build-essential libsqlite3-dev && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/packages/backend/dist ./packages/backend/dist
COPY --from=builder /app/packages/backend/package.json ./packages/backend/package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/backstage.json ./backstage.json
ENV NODE_ENV=production
EXPOSE 7007
USER node
CMD ["yarn", "start", "--cwd", "packages/backend"]

# Stage 3: Producción Frontend
FROM node:20-bookworm-slim AS frontend
WORKDIR /app
RUN apt-get update && apt-get install -y python3 g++ build-essential libc6-dev && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/packages/app/dist ./packages/app/dist
COPY --from=builder /app/packages/app/package.json ./packages/app/package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/backstage.json ./backstage.json
ENV NODE_ENV=production
EXPOSE 3000
USER node
CMD ["yarn", "start", "--cwd", "packages/app"]