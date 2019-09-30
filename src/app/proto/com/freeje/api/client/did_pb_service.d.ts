// package: com.freeje.api.client
// file: com/freeje/api/client/did.proto

import * as com_freeje_api_client_did_pb from "../../../../com/freeje/api/client/did_pb";
import * as com_freeje_common_pb from "../../../../com/freeje/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DIDListAvailableLocalities = {
  readonly methodName: string;
  readonly service: typeof DID;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_common_pb.RequestMode;
  readonly responseType: typeof com_freeje_api_client_did_pb.DidLocality;
};

type DIDListAvailableNumbers = {
  readonly methodName: string;
  readonly service: typeof DID;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_api_client_did_pb.DidLocality;
  readonly responseType: typeof com_freeje_api_client_did_pb.DidOffer;
};

type DIDRequestNumber = {
  readonly methodName: string;
  readonly service: typeof DID;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_did_pb.DidOffer;
  readonly responseType: typeof com_freeje_api_client_did_pb.DidRequest;
};

type DIDReleaseNumber = {
  readonly methodName: string;
  readonly service: typeof DID;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_did_pb.DidNumber;
  readonly responseType: typeof com_freeje_common_pb.Empty;
};

type DIDGetNumbers = {
  readonly methodName: string;
  readonly service: typeof DID;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_common_pb.RequestMode;
  readonly responseType: typeof com_freeje_api_client_did_pb.DidNumber;
};

type DIDGetBasket = {
  readonly methodName: string;
  readonly service: typeof DID;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_common_pb.RequestMode;
  readonly responseType: typeof com_freeje_api_client_did_pb.OfferBasket;
};

type DIDRemoveBasket = {
  readonly methodName: string;
  readonly service: typeof DID;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_did_pb.OfferBasket;
  readonly responseType: typeof com_freeje_api_client_did_pb.OfferBasket;
};

type DIDAddBasket = {
  readonly methodName: string;
  readonly service: typeof DID;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_did_pb.DidOffer;
  readonly responseType: typeof com_freeje_api_client_did_pb.OfferBasket;
};

export class DID {
  static readonly serviceName: string;
  static readonly ListAvailableLocalities: DIDListAvailableLocalities;
  static readonly ListAvailableNumbers: DIDListAvailableNumbers;
  static readonly RequestNumber: DIDRequestNumber;
  static readonly ReleaseNumber: DIDReleaseNumber;
  static readonly GetNumbers: DIDGetNumbers;
  static readonly GetBasket: DIDGetBasket;
  static readonly RemoveBasket: DIDRemoveBasket;
  static readonly AddBasket: DIDAddBasket;
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

export class DIDClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listAvailableLocalities(requestMessage: com_freeje_common_pb.RequestMode, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_did_pb.DidLocality>;
  listAvailableNumbers(requestMessage: com_freeje_api_client_did_pb.DidLocality, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_did_pb.DidOffer>;
  requestNumber(
    requestMessage: com_freeje_api_client_did_pb.DidOffer,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_did_pb.DidRequest|null) => void
  ): UnaryResponse;
  requestNumber(
    requestMessage: com_freeje_api_client_did_pb.DidOffer,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_did_pb.DidRequest|null) => void
  ): UnaryResponse;
  releaseNumber(
    requestMessage: com_freeje_api_client_did_pb.DidNumber,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.Empty|null) => void
  ): UnaryResponse;
  releaseNumber(
    requestMessage: com_freeje_api_client_did_pb.DidNumber,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.Empty|null) => void
  ): UnaryResponse;
  getNumbers(requestMessage: com_freeje_common_pb.RequestMode, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_did_pb.DidNumber>;
  getBasket(requestMessage: com_freeje_common_pb.RequestMode, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_did_pb.OfferBasket>;
  removeBasket(
    requestMessage: com_freeje_api_client_did_pb.OfferBasket,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_did_pb.OfferBasket|null) => void
  ): UnaryResponse;
  removeBasket(
    requestMessage: com_freeje_api_client_did_pb.OfferBasket,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_did_pb.OfferBasket|null) => void
  ): UnaryResponse;
  addBasket(
    requestMessage: com_freeje_api_client_did_pb.DidOffer,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_did_pb.OfferBasket|null) => void
  ): UnaryResponse;
  addBasket(
    requestMessage: com_freeje_api_client_did_pb.DidOffer,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_did_pb.OfferBasket|null) => void
  ): UnaryResponse;
}

