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
define("superman/components/video-meet", ["require", "exports", "@baidu/video-meeting", "superman/components/guide_tips", "superman/lib/event"], function (require, _exports, Meet, GuideTips, Event) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: cc11001100_hook("value", true, "object-key-init")
  });
  _exports.VideoMeet = cc11001100_hook("_exports.VideoMeet", void 0, "assign");
  Meet = cc11001100_hook("Meet", _interopRequireWildcard(Meet), "assign");
  GuideTips = cc11001100_hook("GuideTips", _interopRequireWildcard(GuideTips), "assign");
  Event = cc11001100_hook("Event", _interopRequireWildcard(Event), "assign");
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
  var VideoMeet = cc11001100_hook("VideoMeet", function () {
    function VideoMeet() {
      _classCallCheck(this, VideoMeet);
      _defineProperty(this, "status", void 0);
      _defineProperty(this, "isInit", void 0);
      _defineProperty(this, "bsToken", void 0);
      this.status = cc11001100_hook("this.status", 0, "assign");
      this.isInit = cc11001100_hook("this.isInit", false, "assign");
      this.bsToken = cc11001100_hook("this.bsToken", $("#bsToken").val(), "assign");
    }
    _createClass(VideoMeet, [{
      key: cc11001100_hook("key", "lessThanIE9", "object-key-init"),
      value: function lessThanIE9() {
        var userAgent = cc11001100_hook("userAgent", navigator.userAgent, "var-init");
        var isIE = cc11001100_hook("isIE", userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1, "var-init");
        if (isIE) {
          var reIE = cc11001100_hook("reIE", new RegExp("MSIE (\\d+\\.\\d+);"), "var-init");
          reIE.test(userAgent);
          var fIEVersion = cc11001100_hook("fIEVersion", parseFloat(RegExp["$1"]), "var-init");
          if (fIEVersion <= 9) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: cc11001100_hook("key", "init", "object-key-init"),
      value: function init(options) {
        var entry = cc11001100_hook("entry", $(".video-meet-entry"), "var-init");
        if (this.lessThanIE9()) {
          entry.remove();
          return;
        }
        var isLogin = cc11001100_hook("isLogin", bds.comm.username || options && options.isLogin, "var-init");
        var _this = cc11001100_hook("_this", this, "var-init");
        if (bds.comm.sid && bds.comm.sid === "10001") {
          this.status = cc11001100_hook("this.status", 2, "assign");
        }
        if (options && options.status) {
          _this.status = cc11001100_hook("_this.status", options.status, "assign");
        } else {
          _this.status = cc11001100_hook("_this.status", 1, "assign");
        }
        var toast = cc11001100_hook("toast", $(".video-meet-toast"), "var-init");
        entry.on("mouseenter", function (e) {
          if ($(".v-container").length === 0 || $(".v-container").parent().css("display") === "none") {
            GuideTips.close({
              id: cc11001100_hook("id", "s_side_wrapper", "object-key-init"),
              type: cc11001100_hook("type", "left", "object-key-init"),
              ls: cc11001100_hook("ls", "hide_guide_meet_new", "object-key-init"),
              red_dot: cc11001100_hook("red_dot", $(".video-meet-entry .c-icon"), "object-key-init")
            });
            toast.show();
          }
        }).on("mousedown mouseleave", function (e) {
          toast.hide();
        });
        if (!_this.isInit) {
          entry.on("click.init", function (e) {
            GuideTips.close({
              id: cc11001100_hook("id", "video-meet-entry", "object-key-init"),
              type: cc11001100_hook("type", "left", "object-key-init"),
              ls: cc11001100_hook("ls", "hide_guide_meet_new", "object-key-init"),
              red_dot: cc11001100_hook("red_dot", $(".video-meet-entry .c-icon"), "object-key-init")
            });
            _this.createMeet({
              status: cc11001100_hook("status", _this.status, "object-key-init"),
              entry: cc11001100_hook("entry", entry, "object-key-init"),
              showViews: cc11001100_hook("showViews", true, "object-key-init"),
              bsToken: cc11001100_hook("bsToken", _this.bsToken, "object-key-init"),
              isLogin: cc11001100_hook("isLogin", isLogin, "object-key-init"),
              event: cc11001100_hook("event", Event, "object-key-init")
            });
            _this.isInit = cc11001100_hook("_this.isInit", true, "assign");
            entry.off("click.init");
            e.stopPropagation();
          });
          if (options && options.backflow === 1) {
            _this.createMeet({
              status: cc11001100_hook("status", _this.status, "object-key-init"),
              showViews: cc11001100_hook("showViews", true, "object-key-init"),
              type: cc11001100_hook("type", "backflow", "object-key-init"),
              meetInfo: cc11001100_hook("meetInfo", options.meetInfo, "object-key-init"),
              isLogin: cc11001100_hook("isLogin", isLogin, "object-key-init"),
              flowType: cc11001100_hook("flowType", options.flowType || "", "object-key-init"),
              event: cc11001100_hook("event", Event, "object-key-init")
            });
            _this.isInit = cc11001100_hook("_this.isInit", true, "assign");
          }
        }
      }
    }, {
      key: cc11001100_hook("key", "createMeet", "object-key-init"),
      value: function createMeet(data) {
        var meetObj = cc11001100_hook("meetObj", Meet["default"], "var-init");
        var meet = cc11001100_hook("meet", new meetObj({
          data: cc11001100_hook("data", data, "object-key-init")
        }), "var-init");
        meet.attach($("#wrapper")[0]);
      }
    }]);
    return VideoMeet;
  }(), "var-init");
  _exports.VideoMeet = cc11001100_hook("_exports.VideoMeet", VideoMeet, "assign");
});