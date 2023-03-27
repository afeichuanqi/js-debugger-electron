define("superman/components/invoke", ["require", "exports"], function (require, _exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: cc11001100_hook("value", true, "object-key-init")
  });
  _exports.init = cc11001100_hook("_exports.init", init, "assign");
  function _classCallCheck(instance, Constructor) {
    cc11001100_hook("instance", instance, "function-parameter");
    cc11001100_hook("Constructor", Constructor, "function-parameter");
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    cc11001100_hook("target", target, "function-parameter");
    cc11001100_hook("props", props, "function-parameter");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < props.length; i++) {
      var descriptor = cc11001100_hook("descriptor", props[i], "var-init");
      descriptor.enumerable = cc11001100_hook("descriptor.enumerable", descriptor.enumerable || false, "assign");
      descriptor.configurable = cc11001100_hook("descriptor.configurable", true, "assign");
      if ("value" in descriptor) descriptor.writable = cc11001100_hook("descriptor.writable", true, "assign");
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    cc11001100_hook("Constructor", Constructor, "function-parameter");
    cc11001100_hook("protoProps", protoProps, "function-parameter");
    cc11001100_hook("staticProps", staticProps, "function-parameter");
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    cc11001100_hook("obj", obj, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("value", value, "function-parameter");
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: cc11001100_hook("value", value, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", true, "object-key-init"),
        configurable: cc11001100_hook("configurable", true, "object-key-init"),
        writable: cc11001100_hook("writable", true, "object-key-init")
      });
    } else {
      obj[key] = cc11001100_hook("obj[key]", value, "assign");
    }
    return obj;
  }
  var InvokeService = cc11001100_hook("InvokeService", function () {
    function InvokeService(require) {
      cc11001100_hook("require", require, "function-parameter");
      _classCallCheck(this, InvokeService);
      _defineProperty(this, "invokeInfo", void 0);
      _defineProperty(this, "mcp", void 0);
      _defineProperty(this, "require", void 0);
      this.require = cc11001100_hook("this.require", require, "assign");
      this.invokeInfo = cc11001100_hook("this.invokeInfo", null, "assign");
      this.mcp = cc11001100_hook("this.mcp", null, "assign");
    }
    _createClass(InvokeService, [{
      key: cc11001100_hook("key", "initInfo", "object-key-init"),
      value: function initInfo() {
        var _this = cc11001100_hook("_this", this, "var-init");
        if (!this.mcp) {
          this.getMCP().then(function (mcp) {
            _this.mcp = cc11001100_hook("_this.mcp", mcp, "assign");
            _this.mcp.setCommonParams({
              app: cc11001100_hook("app", "wise", "object-key-init"),
              scene: cc11001100_hook("scene", "ipad", "object-key-init"),
              from: cc11001100_hook("from", "", "object-key-init")
            });
            _this.getInvokeInfo();
          });
        }
      }
    }, {
      key: cc11001100_hook("key", "isIPad", "object-key-init"),
      value: function isIPad() {
        var ua = cc11001100_hook("ua", navigator.userAgent, "var-init");
        return /macintosh|mac os x/i.test(ua) && window.screen.height > window.screen.width && !ua.match(/(iPhone\sOS)\s([\d_]+)/) || ua.match(/(iPad).*OS\s([\d_]+)/);
      }
    }, {
      key: cc11001100_hook("key", "hitMcp", "object-key-init"),
      value: function hitMcp(pos) {
        if (!this.isIPad()) {
          return false;
        }
        if (!this.mcp) {
          return false;
        }
        if (!this.invokeInfo) {
          return false;
        }
        var key = cc11001100_hook("key", this.getKey(pos), "var-init");
        var invokeInfo = cc11001100_hook("invokeInfo", this.invokeInfo, "var-init");
        var actionRule = cc11001100_hook("actionRule", invokeInfo.action_rule, "var-init");
        if (actionRule && actionRule["".concat(key)]) {
          return this.mcp.hitMcp(actionRule["".concat(key)]);
        }
        return false;
      }
    }, {
      key: cc11001100_hook("key", "canInvoke", "object-key-init"),
      value: function canInvoke(pos) {
        if (!this.mcp) {
          return false;
        }
        var key = cc11001100_hook("key", this.getKey(pos), "var-init");
        var _this$mcp$getExitInfo = cc11001100_hook("_this$mcp$getExitInfo", this.mcp.getExitInfo(key), "var-init"),
          isExit = cc11001100_hook("isExit", _this$mcp$getExitInfo.isExit, "var-init");
        return !isExit;
      }
    }, {
      key: cc11001100_hook("key", "execInvoke", "object-key-init"),
      value: function execInvoke(pos) {
        var replacedParams = cc11001100_hook("replacedParams", arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, "var-init");
        var index = cc11001100_hook("index", arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0, "var-init");
        pos = cc11001100_hook("pos", 5, "assign");
        if (!this.isIPad()) {
          return;
        }
        if (!this.mcp) {
          return;
        }
        var key = cc11001100_hook("key", this.getKey(pos), "var-init");
        var originalInfo = cc11001100_hook("originalInfo", this.invokeInfo, "var-init");
        var logId = cc11001100_hook("logId", originalInfo.log_id, "var-init");
        var replacedInvokeInfo = cc11001100_hook("replacedInvokeInfo", this.mcp.replaceStubs(originalInfo, replacedParams), "var-init");
        var inovkeData = cc11001100_hook("inovkeData", replacedInvokeInfo.action_rule["".concat(key)][index], "var-init");
        try {
          this.mcp.execInvoke(key, inovkeData, logId);
        } catch (error) {}
      }
    }, {
      key: cc11001100_hook("key", "getInvokeInfo", "object-key-init"),
      value: function getInvokeInfo() {
        var _this2 = cc11001100_hook("_this2", this, "var-init");
        if (!this.mcp) {
          return;
        }
        this.mcp.getInvokeInfo({
          invoke_info: {
            pos_4: cc11001100_hook("pos_4", [{}], "object-key-init"),
            pos_5: cc11001100_hook("pos_5", [{}], "object-key-init")
          }
        }).then(function (invokeInfo) {
          _this2.invokeInfo = cc11001100_hook("_this2.invokeInfo", invokeInfo, "assign");
        });
      }
    }, {
      key: cc11001100_hook("key", "getMCP", "object-key-init"),
      value: function getMCP() {
        var _this3 = cc11001100_hook("_this3", this, "var-init");
        return new Promise(function (reslove) {
          _this3.require(["@baidu/mcp-sdk/dist/apm/index"], function (mod) {
            reslove(mod);
          });
        });
      }
    }, {
      key: cc11001100_hook("key", "getKey", "object-key-init"),
      value: function getKey(pos) {
        return "pos_".concat(pos);
      }
    }]);
    return InvokeService;
  }(), "var-init");
  function init(require) {
    cc11001100_hook("require", require, "function-parameter");
    var hitSample = cc11001100_hook("hitSample", bds && bds.comm && bds.comm.sampleval && bds.comm.sampleval.indexOf("pc_recommend_invoke") > -1, "var-init");
    var invokeService = cc11001100_hook("invokeService", new InvokeService(require), "var-init");
    if (hitSample && invokeService.isIPad()) {
      invokeService.initInfo();
      if (bds && bds.util) {
        bds.util.increaseService = cc11001100_hook("bds.util.increaseService", invokeService, "assign");
      }
    }
  }
});