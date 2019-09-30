// package: com.freeje.api.client
// file: com/freeje/api/client/did.proto

import * as jspb from "google-protobuf";
import * as com_freeje_common_pb from "../../../../com/freeje/common_pb";

export class DidLocality extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DidLocality.AsObject;
  static toObject(includeInstance: boolean, msg: DidLocality): DidLocality.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DidLocality, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DidLocality;
  static deserializeBinaryFromReader(message: DidLocality, reader: jspb.BinaryReader): DidLocality;
}

export namespace DidLocality {
  export type AsObject = {
    id: string,
    prefix: string,
    country: string,
    label: string,
  }
}

export class DidRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DidRequest): DidRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DidRequest;
  static deserializeBinaryFromReader(message: DidRequest, reader: jspb.BinaryReader): DidRequest;
}

export namespace DidRequest {
  export type AsObject = {
    id: string,
  }
}

export class OfferBasket extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasOffer(): boolean;
  clearOffer(): void;
  getOffer(): DidOffer | undefined;
  setOffer(value?: DidOffer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfferBasket.AsObject;
  static toObject(includeInstance: boolean, msg: OfferBasket): OfferBasket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfferBasket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfferBasket;
  static deserializeBinaryFromReader(message: OfferBasket, reader: jspb.BinaryReader): OfferBasket;
}

export namespace OfferBasket {
  export type AsObject = {
    id: string,
    offer?: DidOffer.AsObject,
  }
}

export class DidOffer extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getNumber(): string;
  setNumber(value: string): void;

  getType(): com_freeje_common_pb.PhoneTypeMap[keyof com_freeje_common_pb.PhoneTypeMap];
  setType(value: com_freeje_common_pb.PhoneTypeMap[keyof com_freeje_common_pb.PhoneTypeMap]): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): com_freeje_common_pb.DidPrice | undefined;
  setPrice(value?: com_freeje_common_pb.DidPrice): void;

  clearRequirementsList(): void;
  getRequirementsList(): Array<com_freeje_common_pb.DocumentTypeMap[keyof com_freeje_common_pb.DocumentTypeMap]>;
  setRequirementsList(value: Array<com_freeje_common_pb.DocumentTypeMap[keyof com_freeje_common_pb.DocumentTypeMap]>): void;
  addRequirements(value: com_freeje_common_pb.DocumentTypeMap[keyof com_freeje_common_pb.DocumentTypeMap], index?: number): com_freeje_common_pb.DocumentTypeMap[keyof com_freeje_common_pb.DocumentTypeMap];

  clearFeaturesList(): void;
  getFeaturesList(): Array<com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap]>;
  setFeaturesList(value: Array<com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap]>): void;
  addFeatures(value: com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap], index?: number): com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap];

  clearDocumentIdsList(): void;
  getDocumentIdsList(): Array<string>;
  setDocumentIdsList(value: Array<string>): void;
  addDocumentIds(value: string, index?: number): string;

  getNotes(): string;
  setNotes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DidOffer.AsObject;
  static toObject(includeInstance: boolean, msg: DidOffer): DidOffer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DidOffer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DidOffer;
  static deserializeBinaryFromReader(message: DidOffer, reader: jspb.BinaryReader): DidOffer;
}

export namespace DidOffer {
  export type AsObject = {
    id: string,
    number: string,
    type: com_freeje_common_pb.PhoneTypeMap[keyof com_freeje_common_pb.PhoneTypeMap],
    price?: com_freeje_common_pb.DidPrice.AsObject,
    requirementsList: Array<com_freeje_common_pb.DocumentTypeMap[keyof com_freeje_common_pb.DocumentTypeMap]>,
    featuresList: Array<com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap]>,
    documentIdsList: Array<string>,
    notes: string,
  }
}

export class DidNumber extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getNumber(): string;
  setNumber(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getPayedTill(): number;
  setPayedTill(value: number): void;

  getCreatedms(): number;
  setCreatedms(value: number): void;

  getLocality(): string;
  setLocality(value: string): void;

  getType(): com_freeje_common_pb.PhoneTypeMap[keyof com_freeje_common_pb.PhoneTypeMap];
  setType(value: com_freeje_common_pb.PhoneTypeMap[keyof com_freeje_common_pb.PhoneTypeMap]): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): com_freeje_common_pb.DidPrice | undefined;
  setPrice(value?: com_freeje_common_pb.DidPrice): void;

  getNotes(): string;
  setNotes(value: string): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap]>;
  setFeaturesList(value: Array<com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap]>): void;
  addFeatures(value: com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap], index?: number): com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap];

  getStatus(): com_freeje_common_pb.DidStatusMap[keyof com_freeje_common_pb.DidStatusMap];
  setStatus(value: com_freeje_common_pb.DidStatusMap[keyof com_freeje_common_pb.DidStatusMap]): void;

  getIncomplete(): boolean;
  setIncomplete(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DidNumber.AsObject;
  static toObject(includeInstance: boolean, msg: DidNumber): DidNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DidNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DidNumber;
  static deserializeBinaryFromReader(message: DidNumber, reader: jspb.BinaryReader): DidNumber;
}

export namespace DidNumber {
  export type AsObject = {
    id: string,
    number: string,
    label: string,
    country: string,
    payedTill: number,
    createdms: number,
    locality: string,
    type: com_freeje_common_pb.PhoneTypeMap[keyof com_freeje_common_pb.PhoneTypeMap],
    price?: com_freeje_common_pb.DidPrice.AsObject,
    notes: string,
    featuresList: Array<com_freeje_common_pb.NumberFeatureMap[keyof com_freeje_common_pb.NumberFeatureMap]>,
    status: com_freeje_common_pb.DidStatusMap[keyof com_freeje_common_pb.DidStatusMap],
    incomplete: boolean,
  }
}

