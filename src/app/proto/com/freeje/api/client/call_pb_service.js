// package: com.freeje.api.client
// file: com/freeje/api/client/call.proto

var com_freeje_api_client_call_pb = require("../../../../com/freeje/api/client/call_pb");
var com_freeje_common_pb = require("../../../../com/freeje/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Call = (function () {
  function Call() {}
  Call.serviceName = "com.freeje.api.client.Call";
  return Call;
}());

Call.Route = {
  methodName: "Route",
  service: Call,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_common_pb.VoipCall,
  responseType: com_freeje_common_pb.VoipCall
};

Call.Confirm = {
  methodName: "Confirm",
  service: Call,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_common_pb.VoipCall,
  responseType: com_freeje_common_pb.VoipCall
};

Call.Reject = {
  methodName: "Reject",
  service: Call,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_common_pb.VoipCall,
  responseType: com_freeje_common_pb.VoipCall
};

Call.Hangup = {
  methodName: "Hangup",
  service: Call,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_common_pb.VoipCall,
  responseType: com_freeje_common_pb.VoipCall
};

exports.Call = Call;

function CallClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CallClient.prototype.route = function route(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Call.Route, {
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

CallClient.prototype.confirm = function confirm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Call.Confirm, {
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

CallClient.prototype.reject = function reject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Call.Reject, {
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

CallClient.prototype.hangup = function hangup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Call.Hangup, {
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

exports.CallClient = CallClient;

