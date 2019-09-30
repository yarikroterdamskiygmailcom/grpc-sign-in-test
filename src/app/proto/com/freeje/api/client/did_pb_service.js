// package: com.freeje.api.client
// file: com/freeje/api/client/did.proto

var com_freeje_api_client_did_pb = require("../../../../com/freeje/api/client/did_pb");
var com_freeje_common_pb = require("../../../../com/freeje/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DID = (function () {
  function DID() {}
  DID.serviceName = "com.freeje.api.client.DID";
  return DID;
}());

DID.ListAvailableLocalities = {
  methodName: "ListAvailableLocalities",
  service: DID,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_common_pb.RequestMode,
  responseType: com_freeje_api_client_did_pb.DidLocality
};

DID.ListAvailableNumbers = {
  methodName: "ListAvailableNumbers",
  service: DID,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_api_client_did_pb.DidLocality,
  responseType: com_freeje_api_client_did_pb.DidOffer
};

DID.RequestNumber = {
  methodName: "RequestNumber",
  service: DID,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_did_pb.DidOffer,
  responseType: com_freeje_api_client_did_pb.DidRequest
};

DID.ReleaseNumber = {
  methodName: "ReleaseNumber",
  service: DID,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_did_pb.DidNumber,
  responseType: com_freeje_common_pb.Empty
};

DID.GetNumbers = {
  methodName: "GetNumbers",
  service: DID,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_common_pb.RequestMode,
  responseType: com_freeje_api_client_did_pb.DidNumber
};

DID.GetBasket = {
  methodName: "GetBasket",
  service: DID,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_common_pb.RequestMode,
  responseType: com_freeje_api_client_did_pb.OfferBasket
};

DID.RemoveBasket = {
  methodName: "RemoveBasket",
  service: DID,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_did_pb.OfferBasket,
  responseType: com_freeje_api_client_did_pb.OfferBasket
};

DID.AddBasket = {
  methodName: "AddBasket",
  service: DID,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_did_pb.DidOffer,
  responseType: com_freeje_api_client_did_pb.OfferBasket
};

exports.DID = DID;

function DIDClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DIDClient.prototype.listAvailableLocalities = function listAvailableLocalities(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DID.ListAvailableLocalities, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

DIDClient.prototype.listAvailableNumbers = function listAvailableNumbers(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DID.ListAvailableNumbers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

DIDClient.prototype.requestNumber = function requestNumber(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DID.RequestNumber, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DIDClient.prototype.releaseNumber = function releaseNumber(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DID.ReleaseNumber, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DIDClient.prototype.getNumbers = function getNumbers(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DID.GetNumbers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

DIDClient.prototype.getBasket = function getBasket(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DID.GetBasket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

DIDClient.prototype.removeBasket = function removeBasket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DID.RemoveBasket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DIDClient.prototype.addBasket = function addBasket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DID.AddBasket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.DIDClient = DIDClient;

