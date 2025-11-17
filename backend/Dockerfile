FROM golang:1.25-alpine

RUN apk add --no-cache git build-base

WORKDIR /app

# 依存キャッシュ
COPY go.mod go.sum ./
RUN go mod download

# Air（ホットリロード）
RUN go install github.com/air-verse/air@latest

COPY . .

EXPOSE 8080
CMD ["air", "-c", ".air.toml"]
