// package: com.freeje.api.client
// file: com/freeje/api/client/call.proto

import * as com_freeje_api_client_call_pb from "../../../../com/freeje/api/client/call_pb";
import * as com_freeje_common_pb from "../../../../com/freeje/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CallRoute = {
  readonly methodName: string;
  readonly service: typeof Call;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_common_pb.VoipCall;
  readonly responseType: typeof com_freeje_common_pb.VoipCall;
};

type CallConfirm = {
  readonly methodName: string;
  readonly service: typeof Call;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_common_pb.VoipCall;
  readonly responseType: typeof com_freeje_common_pb.VoipCall;
};

type CallReject = {
  readonly methodName: string;
  readonly service: typeof Call;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_common_pb.VoipCall;
  readonly responseType: typeof com_freeje_common_pb.VoipCall;
};

type CallHangup = {
  readonly methodName: string;
  readonly service: typeof Call;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_common_pb.VoipCall;
  readonly responseType: typeof com_freeje_common_pb.VoipCall;
};

export class Call {
  static readonly serviceName: string;
  static readonly Route: CallRoute;
  static readonly Confirm: CallConfirm;
  static readonly Reject: CallReject;
  static readonly Hangup: CallHangup;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CallClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  route(
    requestMessage: com_freeje_common_pb.VoipCall,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.VoipCall|null) => void
  ): UnaryResponse;
  route(
    requestMessage: com_freeje_common_pb.VoipCall,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.VoipCall|null) => void
  ): UnaryResponse;
  confirm(
    requestMessage: com_freeje_common_pb.VoipCall,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.VoipCall|null) => void
  ): UnaryResponse;
  confirm(
    requestMessage: com_freeje_common_pb.VoipCall,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.VoipCall|null) => void
  ): UnaryResponse;
  reject(
    requestMessage: com_freeje_common_pb.VoipCall,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.VoipCall|null) => void
  ): UnaryResponse;
  reject(
    requestMessage: com_freeje_common_pb.VoipCall,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.VoipCall|null) => void
  ): UnaryResponse;
  hangup(
    requestMessage: com_freeje_common_pb.VoipCall,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.VoipCall|null) => void
  ): UnaryResponse;
  hangup(
    requestMessage: com_freeje_common_pb.VoipCall,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.VoipCall|null) => void
  ): UnaryResponse;
}

