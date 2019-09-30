// package: com.freeje.api.client
// file: com/freeje/api/client/payment.proto

import * as com_freeje_api_client_payment_pb from "../../../../com/freeje/api/client/payment_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PaymentMethods = {
  readonly methodName: string;
  readonly service: typeof Payment;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_api_client_payment_pb.Method;
  readonly responseType: typeof com_freeje_api_client_payment_pb.Method;
};

type PaymentCreateInvoice = {
  readonly methodName: string;
  readonly service: typeof Payment;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_payment_pb.Invoice;
  readonly responseType: typeof com_freeje_api_client_payment_pb.Invoice;
};

export class Payment {
  static readonly serviceName: string;
  static readonly Methods: PaymentMethods;
  static readonly CreateInvoice: PaymentCreateInvoice;
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

export class PaymentClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  methods(requestMessage: com_freeje_api_client_payment_pb.Method, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_payment_pb.Method>;
  createInvoice(
    requestMessage: com_freeje_api_client_payment_pb.Invoice,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_payment_pb.Invoice|null) => void
  ): UnaryResponse;
  createInvoice(
    requestMessage: com_freeje_api_client_payment_pb.Invoice,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_payment_pb.Invoice|null) => void
  ): UnaryResponse;
}

