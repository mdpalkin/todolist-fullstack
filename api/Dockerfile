FROM node:20-slim AS base

WORKDIR /usr/src/app

# Установка необходимых зависимостей
RUN apt-get update && apt-get install -y openssl

# Development stage
FROM base AS development
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD ["pnpm", "start:dev"]

# Production stage
FROM base AS production
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD ["pnpm", "start:prod"]