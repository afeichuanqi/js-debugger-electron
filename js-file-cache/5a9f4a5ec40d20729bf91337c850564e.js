function _typeof(obj) {
  "@babel/helpers - typeof";

  cc11001100_hook("obj", obj, "function-parameter");
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = cc11001100_hook("_typeof", function _typeof(obj) {
      return typeof obj;
    }, "assign");
  } else {
    _typeof = cc11001100_hook("_typeof", function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, "assign");
  }
  return _typeof(obj);
}
define("superman/components/aging-tools", ["require", "exports", "@baidu/aging-tools-pc", "superman/lib/event"], function (require, _exports, AgingTool, _event) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: cc11001100_hook("value", true, "object-key-init")
  });
  _exports.Tools = cc11001100_hook("_exports.Tools", void 0, "assign");
  AgingTool = cc11001100_hook("AgingTool", _interopRequireWildcard(AgingTool), "assign");
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = cc11001100_hook("cache", new WeakMap(), "var-init");
    _getRequireWildcardCache = cc11001100_hook("_getRequireWildcardCache", function _getRequireWildcardCache() {
      return cache;
    }, "assign");
    return cache;
  }
  function _interopRequireWildcard(obj) {
    cc11001100_hook("obj", obj, "function-parameter");
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": cc11001100_hook("default", obj, "object-key-init")
      };
    }
    var cache = cc11001100_hook("cache", _getRequireWildcardCache(), "var-init");
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = cc11001100_hook("newObj", {}, "var-init");
    var hasPropertyDescriptor = cc11001100_hook("hasPropertyDescriptor", Object.defineProperty && Object.getOwnPropertyDescriptor, "var-init");
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = cc11001100_hook("desc", hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null, "var-init");
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = cc11001100_hook("newObj[key]", obj[key], "assign");
        }
      }
    }
    newObj["default"] = cc11001100_hook("newObj[\"default\"]", obj, "assign");
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
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
  var reMakeEvent = cc11001100_hook("reMakeEvent", {
    on: function on(eventId, cb) {
      (0, _event.on)("aging-tools", eventId, cb);
    },
    fire: function fire(eventId, data) {
      (0, _event.fire)("aging-tools", eventId, {
        data: cc11001100_hook("data", data, "object-key-init")
      });
    },
    off: function off(eventId, cb) {
      (0, _event.un)("aging-tools", eventId, cb);
    }
  }, "var-init");
  var addEventListener = function addEventListener(dom, eventName, fn) {
    dom.addEventListener ? dom.addEventListener(eventName, fn) : dom.attachEvent("on" + eventName, fn);
  };
  var removeEventListener = function removeEventListener(dom, eventName, fn) {
    dom.removeEventListener ? dom.removeEventListener(eventName, fn) : dom.detachEvent("on" + eventName, fn);
  };
  var errLog = function errLog(e) {
    var message = cc11001100_hook("message", e.message, "var-init"),
      colno = cc11001100_hook("colno", e.colno, "var-init"),
      lineno = cc11001100_hook("lineno", e.lineno, "var-init"),
      filename = cc11001100_hook("filename", e.filename, "var-init");
    if (/\.baidu\.com\/wza\//g.test(filename)) {
      (0, _event.fire)("superman:aging-tools", "new_aria_script_error", {
        filename: cc11001100_hook("filename", filename, "object-key-init"),
        lineno: cc11001100_hook("lineno", lineno, "object-key-init"),
        colno: cc11001100_hook("colno", colno, "object-key-init"),
        message: cc11001100_hook("message", message, "object-key-init")
      });
    }
  };
  var loadAriaScript = function loadAriaScript(callBack) {
    if (document.querySelector("#new_aria_service")) {
      callBack && callBack();
      return;
    }
    var now = cc11001100_hook("now", new Date().getTime(), "var-init");
    var url = cc11001100_hook("url", "https://www.baidu.com/wza/aria.js?appid=c890648bf4dd00d05eb9751dd0548c30", "var-init");
    var script = cc11001100_hook("script", document.createElement("script"), "var-init");
    script.src = cc11001100_hook("script.src", url, "assign");
    script.id = cc11001100_hook("script.id", "new_aria_service", "assign");
    script.setAttribute("charset", "utf-8");
    var seccuss = function seccuss() {
      (0, _event.fire)("superman:aging-tools", "new_aria_script_load", {
        isLoad: cc11001100_hook("isLoad", 1, "object-key-init"),
        cost: cc11001100_hook("cost", new Date().getTime() - now, "object-key-init")
      });
      callBack && callBack();
    };
    var fail = function fail() {
      (0, _event.fire)("superman:aging-tools", "new_aria_script_load", {
        isLoad: cc11001100_hook("isLoad", 0, "object-key-init"),
        cost: cc11001100_hook("cost", new Date().getTime() - now, "object-key-init")
      });
    };
    addEventListener(script, "load", seccuss);
    addEventListener(script, "error", fail);
    addEventListener(window, "error", errLog);
    document.body.appendChild(script);
    var page = cc11001100_hook("page", document.querySelector("#aging-total-page"), "var-init");
    if (page) {
      document.body.removeChild(page);
    }
  };
  var openAgingTools = function openAgingTools() {
    loadAriaScript(function () {
      var aria = cc11001100_hook("aria", window.aria, "var-init");
      var status = cc11001100_hook("status", aria && aria.status() || false, "var-init");
      if (status && aria) {
        aria.end();
        (0, _event.fire)("superman:aging-tools", "new_aria_service", {
          show: cc11001100_hook("show", 0, "object-key-init")
        });
      } else if (aria) {
        reMakeEvent.fire("aging-tools.close", "new_aria_not_close");
        aria.start();
        (0, _event.fire)("superman:aging-tools", "new_aria_service", {
          show: cc11001100_hook("show", 1, "object-key-init")
        });
      }
      reMakeEvent.fire("tts.close", "new_aria_not_close");
    });
  };
  var Tools = cc11001100_hook("Tools", function () {
    function Tools() {
      _classCallCheck(this, Tools);
      _defineProperty(this, "tool", void 0);
    }
    _createClass(Tools, [{
      key: cc11001100_hook("key", "init", "object-key-init"),
      value: function init() {
        if (!s_session.agingVoice) {
          if (/new_aria=1/g.test(document.cookie)) {
            var ariaData;
            try {
              var ariaLSStr = cc11001100_hook("ariaLSStr", localStorage.getItem("aria"), "var-init");
              if (ariaLSStr) {
                ariaData = cc11001100_hook("ariaData", JSON.parse(ariaLSStr), "assign");
              }
            } catch (e) {}
            if (ariaData && ariaData.status) {
              loadAriaScript();
            }
            $(".aging-entry").on("click", openAgingTools);
            addEventListener(window, "keyup", function (e) {
              if (e.code && e.code.toLocaleLowerCase() === "backquote" && e.altKey && e.ctrlKey) {
                openAgingTools();
              }
            });
            reMakeEvent.on("aging-tools.close", function (e) {
              (!e || e.data !== "new_aria_not_close") && window.aria && window.aria.end();
            });
            reMakeEvent.on("tts.close", function (e) {
              (!e || e.data !== "new_aria_not_close") && window.aria && window.aria.end();
            });
            return;
          }
        }
        var bigTextDom = cc11001100_hook("bigTextDom", null, "var-init");
        var sWrap = cc11001100_hook("sWrap", $("#s_wrap"), "var-init");
        if (sWrap.height()) {
          bigTextDom = cc11001100_hook("bigTextDom", $("#s_wrap"), "assign");
        } else {
          bigTextDom = cc11001100_hook("bigTextDom", $("#wrapper"), "assign");
        }
        $(window).on("aging-tools.close", function () {
          reMakeEvent.fire("aging-tools.close", undefined);
        });
        reMakeEvent.on("tts.close", function () {
          $(window).trigger("tts.close", undefined);
        });
        var data = cc11001100_hook("data", {
          rootDom: cc11001100_hook("rootDom", "#wrapper", "object-key-init"),
          entry: cc11001100_hook("entry", $(".aging-entry"), "object-key-init"),
          scaleDom: cc11001100_hook("scaleDom", ["#wrapper"], "object-key-init"),
          from: cc11001100_hook("from", "index", "object-key-init"),
          bigTextDom: cc11001100_hook("bigTextDom", bigTextDom, "object-key-init"),
          disableVoice: cc11001100_hook("disableVoice", s_session.agingVoice === "1" ? s_session.agingVoice : "", "object-key-init"),
          newType: cc11001100_hook("newType", "1", "object-key-init"),
          logService: function logService(clickType) {
            (0, _event.fire)("superman:aging-tools", "toolClick", {
              clickType: cc11001100_hook("clickType", clickType, "object-key-init")
            });
          },
          event: cc11001100_hook("event", reMakeEvent, "object-key-init")
        }, "var-init");
        this.createMeet(data);
      }
    }, {
      key: cc11001100_hook("key", "createMeet", "object-key-init"),
      value: function createMeet(data) {
        var Tool = cc11001100_hook("Tool", AgingTool["default"], "var-init");
        this.tool = cc11001100_hook("this.tool", new Tool({
          data: cc11001100_hook("data", data, "object-key-init")
        }), "assign");
        this.tool.attach($("body")[0]);
      }
    }, {
      key: cc11001100_hook("key", "destroy", "object-key-init"),
      value: function destroy() {
        var aria = cc11001100_hook("aria", window.aria, "var-init");
        if (aria) {
          aria.end();
          delete window["aria"];
        }
        removeEventListener(window, "error", errLog);
        var ariaScript = cc11001100_hook("ariaScript", document.querySelector("#new_aria_service"), "var-init");
        ariaScript && document.body.removeChild(ariaScript);
        this.tool && this.tool.detached && this.tool.detached();
      }
    }]);
    return Tools;
  }(), "var-init");
  _exports.Tools = cc11001100_hook("_exports.Tools", Tools, "assign");
});