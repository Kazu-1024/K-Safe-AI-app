FROM node:20-alpine

WORKDIR /app

# 依存関係のインストールをキャッシュするために、package.jsonを先にコピー
COPY package*.json ./
RUN npm install

COPY . .

# VITE開発サーバーを起動。--hostで外部からのアクセスを許可。
CMD ["npm", "run", "dev", "--", "--host"]