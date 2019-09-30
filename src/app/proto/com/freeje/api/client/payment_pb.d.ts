// package: com.freeje.api.client
// file: com/freeje/api/client/payment.proto

import * as jspb from "google-protobuf";

export class Method extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRequest(): string;
  setRequest(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getFinalAmount(): number;
  setFinalAmount(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getType(): string;
  setType(value: string): void;

  getRate(): number;
  setRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Method.AsObject;
  static toObject(includeInstance: boolean, msg: Method): Method.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Method, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Method;
  static deserializeBinaryFromReader(message: Method, reader: jspb.BinaryReader): Method;
}

export namespace Method {
  export type AsObject = {
    id: string,
    description: string,
    request: string,
    amount: number,
    finalAmount: number,
    currency: string,
    type: string,
    rate: number,
  }
}

export class Invoice extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPayId(): string;
  setPayId(value: string): void;

  getRequest(): string;
  setRequest(value: string): void;

  getProduct(): string;
  setProduct(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getFinalAmount(): number;
  setFinalAmount(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getActionUrl(): string;
  setActionUrl(value: string): void;

  getActionMethod(): string;
  setActionMethod(value: string): void;

  getParametersMap(): jspb.Map<string, string>;
  clearParametersMap(): void;
  getRate(): number;
  setRate(value: number): void;

  getSuccessUrl(): string;
  setSuccessUrl(value: string): void;

  getFailUrl(): string;
  setFailUrl(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    id: string,
    payId: string,
    request: string,
    product: string,
    amount: number,
    finalAmount: number,
    currency: string,
    actionUrl: string,
    actionMethod: string,
    parametersMap: Array<[string, string]>,
    rate: number,
    successUrl: string,
    failUrl: string,
    name: string,
    url: string,
  }
}

