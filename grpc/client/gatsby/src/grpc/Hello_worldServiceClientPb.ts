/**
 * @fileoverview gRPC-Web generated client stub for hello_world
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as hello_world_pb from './hello_world_pb';


export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSayHello = new grpcWeb.MethodDescriptor(
    '/hello_world.Greeter/SayHello',
    grpcWeb.MethodType.UNARY,
    hello_world_pb.HelloRequest,
    hello_world_pb.HelloReply,
    (request: hello_world_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    hello_world_pb.HelloReply.deserializeBinary
  );

  sayHello(
    request: hello_world_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<hello_world_pb.HelloReply>;

  sayHello(
    request: hello_world_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: hello_world_pb.HelloReply) => void): grpcWeb.ClientReadableStream<hello_world_pb.HelloReply>;

  sayHello(
    request: hello_world_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: hello_world_pb.HelloReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/hello_world.Greeter/SayHello',
        request,
        metadata || {},
        this.methodDescriptorSayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/hello_world.Greeter/SayHello',
    request,
    metadata || {},
    this.methodDescriptorSayHello);
  }

}

