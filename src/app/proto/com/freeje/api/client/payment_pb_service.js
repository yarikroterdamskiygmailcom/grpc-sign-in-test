// package: com.freeje.api.client
// file: com/freeje/api/client/payment.proto

var com_freeje_api_client_payment_pb = require("../../../../com/freeje/api/client/payment_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Payment = (function () {
  function Payment() {}
  Payment.serviceName = "com.freeje.api.client.Payment";
  return Payment;
}());

Payment.Methods = {
  methodName: "Methods",
  service: Payment,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_api_client_payment_pb.Method,
  responseType: com_freeje_api_client_payment_pb.Method
};

Payment.CreateInvoice = {
  methodName: "CreateInvoice",
  service: Payment,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_payment_pb.Invoice,
  responseType: com_freeje_api_client_payment_pb.Invoice
};

exports.Payment = Payment;

function PaymentClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PaymentClient.prototype.methods = function methods(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Payment.Methods, {
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

PaymentClient.prototype.createInvoice = function createInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Payment.CreateInvoice, {
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

exports.PaymentClient = PaymentClient;

