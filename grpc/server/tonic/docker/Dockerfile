FROM rust:1.62.1-bullseye
RUN apt-get update && apt-get install -y protobuf-compiler

RUN cargo install protoc-gen-tonic
ARG GRPCWEB_VERSION=1.3.1
RUN curl -sSL https://github.com/grpc/grpc-web/releases/download/${GRPCWEB_VERSION}/protoc-gen-grpc-web-${GRPCWEB_VERSION}-linux-x86_64 -o /usr/local/bin/protoc-gen-grpc-web && \
    chmod +x /usr/local/bin/protoc-gen-grpc-web
