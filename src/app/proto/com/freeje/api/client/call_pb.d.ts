// package: com.freeje.api.client
// file: com/freeje/api/client/call.proto

import * as jspb from "google-protobuf";
import * as com_freeje_common_pb from "../../../../com/freeje/common_pb";

export class RegistrationCredentials extends jspb.Message {
  getSipuri(): string;
  setSipuri(value: string): void;

  getWssuri(): string;
  setWssuri(value: string): void;

  getLogin(): string;
  setLogin(value: string): void;

  getPassowrd(): string;
  setPassowrd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationCredentials.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationCredentials): RegistrationCredentials.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationCredentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationCredentials;
  static deserializeBinaryFromReader(message: RegistrationCredentials, reader: jspb.BinaryReader): RegistrationCredentials;
}

export namespace RegistrationCredentials {
  export type AsObject = {
    sipuri: string,
    wssuri: string,
    login: string,
    passowrd: string,
  }
}

