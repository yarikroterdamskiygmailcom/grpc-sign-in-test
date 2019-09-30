// package: com.freeje.api.client
// file: com/freeje/api/client/sms.proto

import * as jspb from "google-protobuf";

export class SmsPullPeriod extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsPullPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: SmsPullPeriod): SmsPullPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsPullPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsPullPeriod;
  static deserializeBinaryFromReader(message: SmsPullPeriod, reader: jspb.BinaryReader): SmsPullPeriod;
}

export namespace SmsPullPeriod {
  export type AsObject = {
    from: number,
    duration: number,
  }
}

export class SmsPullId extends jspb.Message {
  getLastKnownId(): number;
  setLastKnownId(value: number): void;

  getContinuous(): boolean;
  setContinuous(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsPullId.AsObject;
  static toObject(includeInstance: boolean, msg: SmsPullId): SmsPullId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsPullId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsPullId;
  static deserializeBinaryFromReader(message: SmsPullId, reader: jspb.BinaryReader): SmsPullId;
}

export namespace SmsPullId {
  export type AsObject = {
    lastKnownId: number,
    continuous: boolean,
  }
}

export class SmsPull extends jspb.Message {
  hasFromId(): boolean;
  clearFromId(): void;
  getFromId(): SmsPullId | undefined;
  setFromId(value?: SmsPullId): void;

  hasFromPeriod(): boolean;
  clearFromPeriod(): void;
  getFromPeriod(): SmsPullPeriod | undefined;
  setFromPeriod(value?: SmsPullPeriod): void;

  getModeCase(): SmsPull.ModeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsPull.AsObject;
  static toObject(includeInstance: boolean, msg: SmsPull): SmsPull.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsPull, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsPull;
  static deserializeBinaryFromReader(message: SmsPull, reader: jspb.BinaryReader): SmsPull;
}

export namespace SmsPull {
  export type AsObject = {
    fromId?: SmsPullId.AsObject,
    fromPeriod?: SmsPullPeriod.AsObject,
  }

  export enum ModeCase {
    MODE_NOT_SET = 0,
    FROM_ID = 1,
    FROM_PERIOD = 2,
  }
}

export class SmsMessage extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getId(): number;
  setId(value: number): void;

  getSrc(): string;
  setSrc(value: string): void;

  getDst(): string;
  setDst(value: string): void;

  getText(): string;
  setText(value: string): void;

  getStamp(): number;
  setStamp(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getParts(): number;
  setParts(value: number): void;

  getType(): SmsMessage.TypeMap[keyof SmsMessage.TypeMap];
  setType(value: SmsMessage.TypeMap[keyof SmsMessage.TypeMap]): void;

  getStatus(): SmsMessage.StatusMap[keyof SmsMessage.StatusMap];
  setStatus(value: SmsMessage.StatusMap[keyof SmsMessage.StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SmsMessage): SmsMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsMessage;
  static deserializeBinaryFromReader(message: SmsMessage, reader: jspb.BinaryReader): SmsMessage;
}

export namespace SmsMessage {
  export type AsObject = {
    accountId: string,
    id: number,
    src: string,
    dst: string,
    text: string,
    stamp: number,
    price: number,
    parts: number,
    type: SmsMessage.TypeMap[keyof SmsMessage.TypeMap],
    status: SmsMessage.StatusMap[keyof SmsMessage.StatusMap],
  }

  export interface TypeMap {
    INBOUND: 0;
    OUTBOUND: 1;
  }

  export const Type: TypeMap;

  export interface StatusMap {
    PENDING: 0;
    DELIVERED: 1;
  }

  export const Status: StatusMap;
}

