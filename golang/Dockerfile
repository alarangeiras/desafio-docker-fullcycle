FROM golang:1.16-alpine3.13 as builder

WORKDIR /app

COPY main.go .
COPY go.mod .

RUN CGO_ENABLED=0 go build -o dist/full_cycle

FROM scratch

COPY --from=builder /app/dist/full_cycle /

ENTRYPOINT ["./full_cycle"]