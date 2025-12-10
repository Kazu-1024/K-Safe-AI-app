FROM golang:1.24-bookworm AS base

RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 依存キャッシュ
COPY go.mod go.sum ./
RUN go mod download

#開発用環境（ホットリロード）
FROM base AS dev

# Air（ホットリロード）
RUN go install github.com/air-verse/air@v1.61.0

COPY . .

CMD ["air", "-c", ".air.toml"]

# 本番用builder
FROM base AS builder

COPY . .

RUN go build -ldflags "-s -w" -o main cmd/server/main.go

# 本番用環境
FROM gcr.io/distroless/static-debian12 AS prod

WORKDIR /

COPY --from=builder /app/main /main

USER nonroot:nonroot

EXPOSE 8080

CMD ["/main"]

