// package: com.freeje.api.client
// file: com/freeje/api/client/profile.proto

import * as com_freeje_api_client_profile_pb from "../../../../com/freeje/api/client/profile_pb";
import * as com_freeje_common_pb from "../../../../com/freeje/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProfileListPhones = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_common_pb.RequestMode;
  readonly responseType: typeof com_freeje_common_pb.PhoneNumber;
};

type ProfileLinkPhone = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_profile_pb.PhoneToken;
  readonly responseType: typeof com_freeje_common_pb.Empty;
};

type ProfileUnlinkPhone = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_common_pb.PhoneNumber;
  readonly responseType: typeof com_freeje_common_pb.Empty;
};

type ProfileLinkPushId = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_common_pb.PushId;
  readonly responseType: typeof com_freeje_common_pb.Empty;
};

type ProfileUpdateAccessCredentials = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_profile_pb.AccessCredentials;
  readonly responseType: typeof com_freeje_api_client_profile_pb.AccessCredentials;
};

type ProfileListAccessCredentials = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_common_pb.RequestMode;
  readonly responseType: typeof com_freeje_api_client_profile_pb.AccessCredentials;
};

type ProfileRevokeAccessCredentials = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_profile_pb.AccessCredentials;
  readonly responseType: typeof com_freeje_api_client_profile_pb.AccessCredentials;
};

type ProfileSelf = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_common_pb.RequestMode;
  readonly responseType: typeof com_freeje_api_client_profile_pb.AccountProfile;
};

type ProfileBuildFinanceReport = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_common_pb.ReportRequestOptions;
  readonly responseType: typeof com_freeje_common_pb.FinanceOperation;
};

type ProfileSetName = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_api_client_profile_pb.AccountProfile;
  readonly responseType: typeof com_freeje_api_client_profile_pb.AccountProfile;
};

type ProfileGetProfileDocuments = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof com_freeje_common_pb.RequestMode;
  readonly responseType: typeof com_freeje_api_client_profile_pb.ProfileDocument;
};

type ProfileGetProfileDocument = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_profile_pb.ProfileDocument;
  readonly responseType: typeof com_freeje_api_client_profile_pb.ProfileDocument;
};

type ProfileUpdateProfileDocument = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_profile_pb.ProfileDocument;
  readonly responseType: typeof com_freeje_api_client_profile_pb.ProfileDocument;
};

type ProfileDeleteProfileDocument = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_api_client_profile_pb.ProfileDocument;
  readonly responseType: typeof com_freeje_api_client_profile_pb.ProfileDocument;
};

type ProfileAcceptAgreement = {
  readonly methodName: string;
  readonly service: typeof Profile;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof com_freeje_common_pb.AccountAgreement;
  readonly responseType: typeof com_freeje_common_pb.AccountAgreement;
};

export class Profile {
  static readonly serviceName: string;
  static readonly ListPhones: ProfileListPhones;
  static readonly LinkPhone: ProfileLinkPhone;
  static readonly UnlinkPhone: ProfileUnlinkPhone;
  static readonly LinkPushId: ProfileLinkPushId;
  static readonly UpdateAccessCredentials: ProfileUpdateAccessCredentials;
  static readonly ListAccessCredentials: ProfileListAccessCredentials;
  static readonly RevokeAccessCredentials: ProfileRevokeAccessCredentials;
  static readonly Self: ProfileSelf;
  static readonly BuildFinanceReport: ProfileBuildFinanceReport;
  static readonly SetName: ProfileSetName;
  static readonly GetProfileDocuments: ProfileGetProfileDocuments;
  static readonly GetProfileDocument: ProfileGetProfileDocument;
  static readonly UpdateProfileDocument: ProfileUpdateProfileDocument;
  static readonly DeleteProfileDocument: ProfileDeleteProfileDocument;
  static readonly AcceptAgreement: ProfileAcceptAgreement;
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

export class ProfileClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listPhones(requestMessage: com_freeje_common_pb.RequestMode, metadata?: grpc.Metadata): ResponseStream<com_freeje_common_pb.PhoneNumber>;
  linkPhone(
    requestMessage: com_freeje_api_client_profile_pb.PhoneToken,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.Empty|null) => void
  ): UnaryResponse;
  linkPhone(
    requestMessage: com_freeje_api_client_profile_pb.PhoneToken,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.Empty|null) => void
  ): UnaryResponse;
  unlinkPhone(
    requestMessage: com_freeje_common_pb.PhoneNumber,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.Empty|null) => void
  ): UnaryResponse;
  unlinkPhone(
    requestMessage: com_freeje_common_pb.PhoneNumber,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.Empty|null) => void
  ): UnaryResponse;
  linkPushId(
    requestMessage: com_freeje_common_pb.PushId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.Empty|null) => void
  ): UnaryResponse;
  linkPushId(
    requestMessage: com_freeje_common_pb.PushId,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.Empty|null) => void
  ): UnaryResponse;
  updateAccessCredentials(
    requestMessage: com_freeje_api_client_profile_pb.AccessCredentials,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.AccessCredentials|null) => void
  ): UnaryResponse;
  updateAccessCredentials(
    requestMessage: com_freeje_api_client_profile_pb.AccessCredentials,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.AccessCredentials|null) => void
  ): UnaryResponse;
  listAccessCredentials(requestMessage: com_freeje_common_pb.RequestMode, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_profile_pb.AccessCredentials>;
  revokeAccessCredentials(
    requestMessage: com_freeje_api_client_profile_pb.AccessCredentials,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.AccessCredentials|null) => void
  ): UnaryResponse;
  revokeAccessCredentials(
    requestMessage: com_freeje_api_client_profile_pb.AccessCredentials,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.AccessCredentials|null) => void
  ): UnaryResponse;
  self(requestMessage: com_freeje_common_pb.RequestMode, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_profile_pb.AccountProfile>;
  buildFinanceReport(requestMessage: com_freeje_common_pb.ReportRequestOptions, metadata?: grpc.Metadata): ResponseStream<com_freeje_common_pb.FinanceOperation>;
  setName(requestMessage: com_freeje_api_client_profile_pb.AccountProfile, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_profile_pb.AccountProfile>;
  getProfileDocuments(requestMessage: com_freeje_common_pb.RequestMode, metadata?: grpc.Metadata): ResponseStream<com_freeje_api_client_profile_pb.ProfileDocument>;
  getProfileDocument(
    requestMessage: com_freeje_api_client_profile_pb.ProfileDocument,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.ProfileDocument|null) => void
  ): UnaryResponse;
  getProfileDocument(
    requestMessage: com_freeje_api_client_profile_pb.ProfileDocument,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.ProfileDocument|null) => void
  ): UnaryResponse;
  updateProfileDocument(
    requestMessage: com_freeje_api_client_profile_pb.ProfileDocument,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.ProfileDocument|null) => void
  ): UnaryResponse;
  updateProfileDocument(
    requestMessage: com_freeje_api_client_profile_pb.ProfileDocument,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.ProfileDocument|null) => void
  ): UnaryResponse;
  deleteProfileDocument(
    requestMessage: com_freeje_api_client_profile_pb.ProfileDocument,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.ProfileDocument|null) => void
  ): UnaryResponse;
  deleteProfileDocument(
    requestMessage: com_freeje_api_client_profile_pb.ProfileDocument,
    callback: (error: ServiceError|null, responseMessage: com_freeje_api_client_profile_pb.ProfileDocument|null) => void
  ): UnaryResponse;
  acceptAgreement(
    requestMessage: com_freeje_common_pb.AccountAgreement,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.AccountAgreement|null) => void
  ): UnaryResponse;
  acceptAgreement(
    requestMessage: com_freeje_common_pb.AccountAgreement,
    callback: (error: ServiceError|null, responseMessage: com_freeje_common_pb.AccountAgreement|null) => void
  ): UnaryResponse;
}

