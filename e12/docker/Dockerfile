# Fixture E12: a Dockerfile.
FROM alpine:3.21
RUN adduser -D app
USER app
WORKDIR /app
COPY greeting.txt .
CMD ["cat", "greeting.txt"]
