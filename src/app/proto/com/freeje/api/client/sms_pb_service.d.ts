// package: com.freeje.api.client
// file: com/freeje/api/client/sms.proto

import * as com_freeje_api_client_sms_pb from "../../../../com/freeje/api/client/sms_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SMSSend = {
  readonly methodName: string;
  readonly service: typeof SMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_sms_pb.SmsMessage;
  readonly responseType: typeof com_freeje_api_client_sms_pb.SmsMessage;
};

type SMSPull = {
  readonly methodName: string;
  readonly service: typeof SMS;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_api_client_sms_pb.SmsPull;
  readonly responseType: typeof com_freeje_api_client_sms_pb.SmsMessage;
};

export class SMS {
  static readonly serviceName: string;
  static readonly Send: SMSSend;
  static readonly Pull: SMSPull;
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

export class SMSClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  send(
    requestMessage: com_freeje_api_client_sms_pb.SmsMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_sms_pb.SmsMessage|null) => void
  ): UnaryResponse;
  send(
    requestMessage: com_freeje_api_client_sms_pb.SmsMessage,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_sms_pb.SmsMessage|null) => void
  ): UnaryResponse;
  pull(requestMessage: com_freeje_api_client_sms_pb.SmsPull, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_sms_pb.SmsMessage>;
}

