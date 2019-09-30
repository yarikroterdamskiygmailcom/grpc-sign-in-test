// package: com.freeje.api.client
// file: com/freeje/api/client/sms.proto

var com_freeje_api_client_sms_pb = require("../../../../com/freeje/api/client/sms_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SMS = (function () {
  function SMS() {}
  SMS.serviceName = "com.freeje.api.client.SMS";
  return SMS;
}());

SMS.Send = {
  methodName: "Send",
  service: SMS,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_sms_pb.SmsMessage,
  responseType: com_freeje_api_client_sms_pb.SmsMessage
};

SMS.Pull = {
  methodName: "Pull",
  service: SMS,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_api_client_sms_pb.SmsPull,
  responseType: com_freeje_api_client_sms_pb.SmsMessage
};

exports.SMS = SMS;

function SMSClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SMSClient.prototype.send = function send(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SMS.Send, {
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

SMSClient.prototype.pull = function pull(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SMS.Pull, {
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

exports.SMSClient = SMSClient;

