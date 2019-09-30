// package: com.freeje
// file: com/freeje/common.proto

import * as jspb from "google-protobuf";

export class PushId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushId.AsObject;
  static toObject(includeInstance: boolean, msg: PushId): PushId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushId;
  static deserializeBinaryFromReader(message: PushId, reader: jspb.BinaryReader): PushId;
}

export namespace PushId {
  export type AsObject = {
    id: string,
    provider: string,
  }
}

export class PhoneNumber extends jspb.Message {
  getNumber(): string;
  setNumber(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getCreatedms(): number;
  setCreatedms(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneNumber.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneNumber): PhoneNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneNumber;
  static deserializeBinaryFromReader(message: PhoneNumber, reader: jspb.BinaryReader): PhoneNumber;
}

export namespace PhoneNumber {
  export type AsObject = {
    number: string,
    label: string,
    createdms: number,
  }
}

export class RequestMode extends jspb.Message {
  getStreamed(): boolean;
  setStreamed(value: boolean): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMode.AsObject;
  static toObject(includeInstance: boolean, msg: RequestMode): RequestMode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestMode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestMode;
  static deserializeBinaryFromReader(message: RequestMode, reader: jspb.BinaryReader): RequestMode;
}

export namespace RequestMode {
  export type AsObject = {
    streamed: boolean,
    id: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class VoipCall extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDialnumber(): string;
  setDialnumber(value: string): void;

  getSipserver(): string;
  setSipserver(value: string): void;

  getWssserver(): string;
  setWssserver(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoipCall.AsObject;
  static toObject(includeInstance: boolean, msg: VoipCall): VoipCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoipCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoipCall;
  static deserializeBinaryFromReader(message: VoipCall, reader: jspb.BinaryReader): VoipCall;
}

export namespace VoipCall {
  export type AsObject = {
    id: string,
    dialnumber: string,
    sipserver: string,
    wssserver: string,
  }
}

export class Document extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): DocumentTypeMap[keyof DocumentTypeMap];
  setType(value: DocumentTypeMap[keyof DocumentTypeMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    id: string,
    type: DocumentTypeMap[keyof DocumentTypeMap],
    data: Uint8Array | string,
  }
}

export class ReportRequestOptions extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getBasedate(): number;
  setBasedate(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportRequestOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ReportRequestOptions): ReportRequestOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportRequestOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportRequestOptions;
  static deserializeBinaryFromReader(message: ReportRequestOptions, reader: jspb.BinaryReader): ReportRequestOptions;
}

export namespace ReportRequestOptions {
  export type AsObject = {
    userid: string,
    basedate: number,
    duration: number,
  }
}

export class FinanceOperation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getStamp(): number;
  setStamp(value: number): void;

  getReason(): FinanceOperation.ReasonMap[keyof FinanceOperation.ReasonMap];
  setReason(value: FinanceOperation.ReasonMap[keyof FinanceOperation.ReasonMap]): void;

  getType(): FinanceOperation.TypeMap[keyof FinanceOperation.TypeMap];
  setType(value: FinanceOperation.TypeMap[keyof FinanceOperation.TypeMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIncomplete(): boolean;
  setIncomplete(value: boolean): void;

  getBalance(): number;
  setBalance(value: number): void;

  getLockedfunds(): number;
  setLockedfunds(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getAuthorname(): string;
  setAuthorname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinanceOperation.AsObject;
  static toObject(includeInstance: boolean, msg: FinanceOperation): FinanceOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinanceOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinanceOperation;
  static deserializeBinaryFromReader(message: FinanceOperation, reader: jspb.BinaryReader): FinanceOperation;
}

export namespace FinanceOperation {
  export type AsObject = {
    id: string,
    userid: string,
    stamp: number,
    reason: FinanceOperation.ReasonMap[keyof FinanceOperation.ReasonMap],
    type: FinanceOperation.TypeMap[keyof FinanceOperation.TypeMap],
    description: string,
    incomplete: boolean,
    balance: number,
    lockedfunds: number,
    amount: number,
    authorname: string,
  }

  export interface ReasonMap {
    CALL: 0;
    PAYMENT: 1;
    CORRECTION: 2;
    NUMBER: 3;
    PAYCHECK: 4;
  }

  export const Reason: ReasonMap;

  export interface TypeMap {
    REGULAR: 0;
    LOCK_FUNDS: 1;
    UNLOCK_FUNDS: 2;
  }

  export const Type: TypeMap;
}

export class DidPrice extends jspb.Message {
  getSetupFee(): number;
  setSetupFee(value: number): void;

  getMonthlyFee(): number;
  setMonthlyFee(value: number): void;

  getIncomingRate(): number;
  setIncomingRate(value: number): void;

  getIncomingInterval(): number;
  setIncomingInterval(value: number): void;

  getOutgoingRate(): number;
  setOutgoingRate(value: number): void;

  getOutgoingInterval(): number;
  setOutgoingInterval(value: number): void;

  getOutgoingSms(): number;
  setOutgoingSms(value: number): void;

  getIncomingSms(): number;
  setIncomingSms(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DidPrice.AsObject;
  static toObject(includeInstance: boolean, msg: DidPrice): DidPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DidPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DidPrice;
  static deserializeBinaryFromReader(message: DidPrice, reader: jspb.BinaryReader): DidPrice;
}

export namespace DidPrice {
  export type AsObject = {
    setupFee: number,
    monthlyFee: number,
    incomingRate: number,
    incomingInterval: number,
    outgoingRate: number,
    outgoingInterval: number,
    outgoingSms: number,
    incomingSms: number,
  }
}

export class SearchPeriod extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: SearchPeriod): SearchPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchPeriod;
  static deserializeBinaryFromReader(message: SearchPeriod, reader: jspb.BinaryReader): SearchPeriod;
}

export namespace SearchPeriod {
  export type AsObject = {
    from: number,
    duration: number,
  }
}

export class SearchFilter extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): string;
  setValue(value: string): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): SearchPeriod | undefined;
  setPeriod(value?: SearchPeriod): void;

  getOptionsCase(): SearchFilter.OptionsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SearchFilter): SearchFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchFilter;
  static deserializeBinaryFromReader(message: SearchFilter, reader: jspb.BinaryReader): SearchFilter;
}

export namespace SearchFilter {
  export type AsObject = {
    value: string,
    period?: SearchPeriod.AsObject,
  }

  export enum OptionsCase {
    OPTIONS_NOT_SET = 0,
    VALUE = 1,
    PERIOD = 2,
  }
}

export class ExceptionMeta extends jspb.Message {
  getCode(): ExceptionCodeMap[keyof ExceptionCodeMap];
  setCode(value: ExceptionCodeMap[keyof ExceptionCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExceptionMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ExceptionMeta): ExceptionMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExceptionMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExceptionMeta;
  static deserializeBinaryFromReader(message: ExceptionMeta, reader: jspb.BinaryReader): ExceptionMeta;
}

export namespace ExceptionMeta {
  export type AsObject = {
    code: ExceptionCodeMap[keyof ExceptionCodeMap],
  }
}

export class AccountAgreement extends jspb.Message {
  getAccepted(): number;
  setAccepted(value: number): void;

  getIsEuResident(): boolean;
  setIsEuResident(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAgreement.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAgreement): AccountAgreement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountAgreement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAgreement;
  static deserializeBinaryFromReader(message: AccountAgreement, reader: jspb.BinaryReader): AccountAgreement;
}

export namespace AccountAgreement {
  export type AsObject = {
    accepted: number,
    isEuResident: boolean,
  }
}

export interface PhoneTypeMap {
  FIXED_LINE: 0;
  MOBILE: 1;
  TOLL_FREE: 2;
}

export const PhoneType: PhoneTypeMap;

export interface CallDirectionMap {
  OUTGOING: 0;
  INCOMING: 1;
}

export const CallDirection: CallDirectionMap;

export interface CallMediaMap {
  SIP: 0;
  FREEJE: 1;
  EXTERNAL: 2;
  INTERNAL: 3;
}

export const CallMedia: CallMediaMap;

export interface DocumentTypeMap {
  ID_SCAN: 0;
  ID: 1;
  PHOTO: 8;
  NAME: 9;
  ADDRESS_SCAN: 16;
  ADDRESS: 17;
  DELETED_DOC: 1073741824;
}

export const DocumentType: DocumentTypeMap;

export interface NumberFeatureMap {
  VOICE: 0;
  SMS: 1;
  SMS_OUT: 3;
  FAX: 4;
  VOICE_OUT: 5;
}

export const NumberFeature: NumberFeatureMap;

export interface DidStatusMap {
  SETUP: 0;
  READY: 1;
  ERROR: 2;
  DELETED_DID: 1073741824;
}

export const DidStatus: DidStatusMap;

export interface ExceptionCodeMap {
  NUMBER_DOES_NOT_EXISTS: 0;
  INVALID_NUMBER: 1;
  AUTH_ERROR: 2;
  PARAMETERS_ERROR: 3;
  NUMBER_ALREADY_ON_DELETION: 4;
  INVALID_NUMBER_ID: 5;
  ACCOUNT_NOT_ACTIVE: 6;
  DOCUMENTS_REQUIRE: 7;
  RELEASE_ERROR: 8;
  NOT_ENOUGH_MONEY: 9;
  BAD_NUMBER: 10;
  LONG_TEXT_MESSAGE: 11;
  SMS_NOT_SUPPORTED: 12;
  SERVICE_ERROR: 13;
}

export const ExceptionCode: ExceptionCodeMap;

