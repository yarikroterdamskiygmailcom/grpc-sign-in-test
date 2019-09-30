// package: com.freeje.api.client
// file: com/freeje/api/client/profile.proto

var com_freeje_api_client_profile_pb = require("../../../../com/freeje/api/client/profile_pb");
var com_freeje_common_pb = require("../../../../com/freeje/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Profile = (function () {
  function Profile() {}
  Profile.serviceName = "com.freeje.api.client.Profile";
  return Profile;
}());

Profile.ListPhones = {
  methodName: "ListPhones",
  service: Profile,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_common_pb.RequestMode,
  responseType: com_freeje_common_pb.PhoneNumber
};

Profile.LinkPhone = {
  methodName: "LinkPhone",
  service: Profile,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_profile_pb.PhoneToken,
  responseType: com_freeje_common_pb.Empty
};

Profile.UnlinkPhone = {
  methodName: "UnlinkPhone",
  service: Profile,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_common_pb.PhoneNumber,
  responseType: com_freeje_common_pb.Empty
};

Profile.LinkPushId = {
  methodName: "LinkPushId",
  service: Profile,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_common_pb.PushId,
  responseType: com_freeje_common_pb.Empty
};

Profile.UpdateAccessCredentials = {
  methodName: "UpdateAccessCredentials",
  service: Profile,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_profile_pb.AccessCredentials,
  responseType: com_freeje_api_client_profile_pb.AccessCredentials
};

Profile.ListAccessCredentials = {
  methodName: "ListAccessCredentials",
  service: Profile,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_common_pb.RequestMode,
  responseType: com_freeje_api_client_profile_pb.AccessCredentials
};

Profile.RevokeAccessCredentials = {
  methodName: "RevokeAccessCredentials",
  service: Profile,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_profile_pb.AccessCredentials,
  responseType: com_freeje_api_client_profile_pb.AccessCredentials
};

Profile.Self = {
  methodName: "Self",
  service: Profile,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_common_pb.RequestMode,
  responseType: com_freeje_api_client_profile_pb.AccountProfile
};

Profile.BuildFinanceReport = {
  methodName: "BuildFinanceReport",
  service: Profile,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_common_pb.ReportRequestOptions,
  responseType: com_freeje_common_pb.FinanceOperation
};

Profile.SetName = {
  methodName: "SetName",
  service: Profile,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_api_client_profile_pb.AccountProfile,
  responseType: com_freeje_api_client_profile_pb.AccountProfile
};

Profile.GetProfileDocuments = {
  methodName: "GetProfileDocuments",
  service: Profile,
  requestStream: false,
  responseStream: true,
  requestType: com_freeje_common_pb.RequestMode,
  responseType: com_freeje_api_client_profile_pb.ProfileDocument
};

Profile.GetProfileDocument = {
  methodName: "GetProfileDocument",
  service: Profile,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_profile_pb.ProfileDocument,
  responseType: com_freeje_api_client_profile_pb.ProfileDocument
};

Profile.UpdateProfileDocument = {
  methodName: "UpdateProfileDocument",
  service: Profile,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_profile_pb.ProfileDocument,
  responseType: com_freeje_api_client_profile_pb.ProfileDocument
};

Profile.DeleteProfileDocument = {
  methodName: "DeleteProfileDocument",
  service: Profile,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_api_client_profile_pb.ProfileDocument,
  responseType: com_freeje_api_client_profile_pb.ProfileDocument
};

Profile.AcceptAgreement = {
  methodName: "AcceptAgreement",
  service: Profile,
  requestStream: false,
  responseStream: false,
  requestType: com_freeje_common_pb.AccountAgreement,
  responseType: com_freeje_common_pb.AccountAgreement
};

exports.Profile = Profile;

function ProfileClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProfileClient.prototype.listPhones = function listPhones(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Profile.ListPhones, {
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

ProfileClient.prototype.linkPhone = function linkPhone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Profile.LinkPhone, {
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

ProfileClient.prototype.unlinkPhone = function unlinkPhone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Profile.UnlinkPhone, {
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

ProfileClient.prototype.linkPushId = function linkPushId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Profile.LinkPushId, {
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

ProfileClient.prototype.updateAccessCredentials = function updateAccessCredentials(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Profile.UpdateAccessCredentials, {
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

ProfileClient.prototype.listAccessCredentials = function listAccessCredentials(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Profile.ListAccessCredentials, {
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

ProfileClient.prototype.revokeAccessCredentials = function revokeAccessCredentials(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Profile.RevokeAccessCredentials, {
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

ProfileClient.prototype.self = function self(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Profile.Self, {
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

ProfileClient.prototype.buildFinanceReport = function buildFinanceReport(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Profile.BuildFinanceReport, {
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

ProfileClient.prototype.setName = function setName(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Profile.SetName, {
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

ProfileClient.prototype.getProfileDocuments = function getProfileDocuments(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Profile.GetProfileDocuments, {
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

ProfileClient.prototype.getProfileDocument = function getProfileDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Profile.GetProfileDocument, {
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

ProfileClient.prototype.updateProfileDocument = function updateProfileDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Profile.UpdateProfileDocument, {
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

ProfileClient.prototype.deleteProfileDocument = function deleteProfileDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Profile.DeleteProfileDocument, {
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

ProfileClient.prototype.acceptAgreement = function acceptAgreement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Profile.AcceptAgreement, {
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

exports.ProfileClient = ProfileClient;

