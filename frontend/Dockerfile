FROM node:20-bookworm-slim AS base
WORKDIR /app
COPY package*.json ./
# CI用のクリーンインストール
RUN npm ci

# 開発用環境
FROM base AS dev
COPY . .
CMD ["npm", "run", "dev", "--", "--host"]

# 本番用環境
FROM base AS builder
COPY . .
RUN npm run build

# Nginx
FROM nginx:alpine AS prod
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]