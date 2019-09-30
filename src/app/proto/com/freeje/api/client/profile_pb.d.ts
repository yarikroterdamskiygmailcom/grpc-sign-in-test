// package: com.freeje.api.client
// file: com/freeje/api/client/profile.proto

import * as jspb from "google-protobuf";
import * as com_freeje_common_pb from "../../../../com/freeje/common_pb";
import * as com_freeje_api_client_did_pb from "../../../../com/freeje/api/client/did_pb";

export class SipAccess extends jspb.Message {
  getSipUri(): string;
  setSipUri(value: string): void;

  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SipAccess.AsObject;
  static toObject(includeInstance: boolean, msg: SipAccess): SipAccess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SipAccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SipAccess;
  static deserializeBinaryFromReader(message: SipAccess, reader: jspb.BinaryReader): SipAccess;
}

export namespace SipAccess {
  export type AsObject = {
    sipUri: string,
    login: string,
    password: string,
  }
}

export class WebAccess extends jspb.Message {
  getWssUri(): string;
  setWssUri(value: string): void;

  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebAccess.AsObject;
  static toObject(includeInstance: boolean, msg: WebAccess): WebAccess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebAccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebAccess;
  static deserializeBinaryFromReader(message: WebAccess, reader: jspb.BinaryReader): WebAccess;
}

export namespace WebAccess {
  export type AsObject = {
    wssUri: string,
    login: string,
    password: string,
  }
}

export class ApiAccess extends jspb.Message {
  getApiUri(): string;
  setApiUri(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiAccess.AsObject;
  static toObject(includeInstance: boolean, msg: ApiAccess): ApiAccess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiAccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiAccess;
  static deserializeBinaryFromReader(message: ApiAccess, reader: jspb.BinaryReader): ApiAccess;
}

export namespace ApiAccess {
  export type AsObject = {
    apiUri: string,
    token: string,
  }
}

export class AccessCredentials extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasSip(): boolean;
  clearSip(): void;
  getSip(): SipAccess | undefined;
  setSip(value?: SipAccess): void;

  hasWeb(): boolean;
  clearWeb(): void;
  getWeb(): WebAccess | undefined;
  setWeb(value?: WebAccess): void;

  hasApi(): boolean;
  clearApi(): void;
  getApi(): ApiAccess | undefined;
  setApi(value?: ApiAccess): void;

  getCreatedms(): number;
  setCreatedms(value: number): void;

  getLastusagems(): number;
  setLastusagems(value: number): void;

  getValidms(): number;
  setValidms(value: number): void;

  getTemp(): boolean;
  setTemp(value: boolean): void;

  clearIpListList(): void;
  getIpListList(): Array<string>;
  setIpListList(value: Array<string>): void;
  addIpList(value: string, index?: number): string;

  getTypeCase(): AccessCredentials.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessCredentials.AsObject;
  static toObject(includeInstance: boolean, msg: AccessCredentials): AccessCredentials.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccessCredentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessCredentials;
  static deserializeBinaryFromReader(message: AccessCredentials, reader: jspb.BinaryReader): AccessCredentials;
}

export namespace AccessCredentials {
  export type AsObject = {
    id: string,
    sip?: SipAccess.AsObject,
    web?: WebAccess.AsObject,
    api?: ApiAccess.AsObject,
    createdms: number,
    lastusagems: number,
    validms: number,
    temp: boolean,
    ipListList: Array<string>,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    SIP = 2,
    WEB = 3,
    API = 4,
  }
}

export class AccountProfile extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhoto(): string;
  setPhoto(value: string): void;

  getName(): string;
  setName(value: string): void;

  getFunds(): number;
  setFunds(value: number): void;

  getTariffid(): string;
  setTariffid(value: string): void;

  getTariffname(): string;
  setTariffname(value: string): void;

  hasAgreement(): boolean;
  clearAgreement(): void;
  getAgreement(): com_freeje_common_pb.AccountAgreement | undefined;
  setAgreement(value?: com_freeje_common_pb.AccountAgreement): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountProfile.AsObject;
  static toObject(includeInstance: boolean, msg: AccountProfile): AccountProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountProfile;
  static deserializeBinaryFromReader(message: AccountProfile, reader: jspb.BinaryReader): AccountProfile;
}

export namespace AccountProfile {
  export type AsObject = {
    id: string,
    email: string,
    photo: string,
    name: string,
    funds: number,
    tariffid: string,
    tariffname: string,
    agreement?: com_freeje_common_pb.AccountAgreement.AsObject,
  }
}

export class ProfileDocument extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getUpdatedms(): number;
  setUpdatedms(value: number): void;

  getType(): com_freeje_common_pb.DocumentTypeMap[keyof com_freeje_common_pb.DocumentTypeMap];
  setType(value: com_freeje_common_pb.DocumentTypeMap[keyof com_freeje_common_pb.DocumentTypeMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileDocument.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileDocument): ProfileDocument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileDocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileDocument;
  static deserializeBinaryFromReader(message: ProfileDocument, reader: jspb.BinaryReader): ProfileDocument;
}

export namespace ProfileDocument {
  export type AsObject = {
    id: string,
    label: string,
    updatedms: number,
    type: com_freeje_common_pb.DocumentTypeMap[keyof com_freeje_common_pb.DocumentTypeMap],
    data: Uint8Array | string,
  }
}

export class ProvisionMessage extends jspb.Message {
  getStamp(): number;
  setStamp(value: number): void;

  clearPhonesList(): void;
  getPhonesList(): Array<com_freeje_common_pb.PhoneNumber>;
  setPhonesList(value: Array<com_freeje_common_pb.PhoneNumber>): void;
  addPhones(value?: com_freeje_common_pb.PhoneNumber, index?: number): com_freeje_common_pb.PhoneNumber;

  clearDidsList(): void;
  getDidsList(): Array<com_freeje_api_client_did_pb.DidNumber>;
  setDidsList(value: Array<com_freeje_api_client_did_pb.DidNumber>): void;
  addDids(value?: com_freeje_api_client_did_pb.DidNumber, index?: number): com_freeje_api_client_did_pb.DidNumber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProvisionMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProvisionMessage): ProvisionMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProvisionMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProvisionMessage;
  static deserializeBinaryFromReader(message: ProvisionMessage, reader: jspb.BinaryReader): ProvisionMessage;
}

export namespace ProvisionMessage {
  export type AsObject = {
    stamp: number,
    phonesList: Array<com_freeje_common_pb.PhoneNumber.AsObject>,
    didsList: Array<com_freeje_api_client_did_pb.DidNumber.AsObject>,
  }
}

export class PhoneToken extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneToken.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneToken): PhoneToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneToken;
  static deserializeBinaryFromReader(message: PhoneToken, reader: jspb.BinaryReader): PhoneToken;
}

export namespace PhoneToken {
  export type AsObject = {
    token: string,
  }
}

