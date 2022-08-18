protoc -I=../../proto hello_world.proto --js_out=import_style=commonjs:../../client/gatsby/src/grpc --grpc-web_out=import_style=typescript,mode=grpcweb:../../client/gatsby/src/grpc
