define("@baidu/Boxjs-search/dist/components/data/eventListener", ["require"], function () {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return void 0 === a ? !1 : (c = cc11001100_hook("c", $.extend({
      name: cc11001100_hook("name", a, "object-key-init"),
      key: cc11001100_hook("key", "default", "object-key-init"),
      callback: cc11001100_hook("callback", "function" == typeof c ? c : null, "object-key-init"),
      promise: cc11001100_hook("promise", !1, "object-key-init")
    }, "object" == typeof c ? c : {}), "assign"), g[a] = cc11001100_hook("g[a]", g[a] || {}, "assign"), g[a][c.key] = cc11001100_hook("g[a][c.key]", {
      callback: cc11001100_hook("callback", c.callback, "object-key-init"),
      promise: cc11001100_hook("promise", c.promise, "object-key-init")
    }, "assign"), c);
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "object" == typeof a && a.name && a.key ? (delete g[a.name][a.key], !0) : !1;
  }
  var g = cc11001100_hook("g", {}, "var-init");
  return window.addEventListener("baiduboxapp_callback", function (e) {
    var a = cc11001100_hook("a", e.callback, "var-init"),
      c = cc11001100_hook("c", e.data, "var-init");
    if ("string" == typeof c && 0 === c.indexOf("{") && window.JSON && JSON.parse) try {
      c = cc11001100_hook("c", JSON.parse(c), "assign");
    } catch (e) {
      console.log(e);
    }
    for (var v in g[a]) {
      var h = cc11001100_hook("h", g[a][v], "var-init");
      try {
        h.callback.call(h, c, e);
      } catch (e) {
        console.log(e);
      }
    }
  }), {
    regist: cc11001100_hook("regist", a, "object-key-init"),
    unregist: cc11001100_hook("unregist", c, "object-key-init")
  };
}), define("@baidu/Boxjs-search/dist/components/data/index", ["require", "@baidu/Boxjs-amd", "@baidu/Boxjs-search/dist/components/data/eventListener"], function (require) {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var g = cc11001100_hook("g", "", "var-init"),
      module = cc11001100_hook("module", "", "var-init");
    "toggle" === c ? (g = cc11001100_hook("g", a.name, "assign"), module = cc11001100_hook("module", a.type, "assign")) : (g = cc11001100_hook("g", a.name.split("-")[1], "assign"), module = cc11001100_hook("module", a.name.split("-")[0], "assign"));
    var v = cc11001100_hook("v", g.substring(0, 1).toUpperCase(), "var-init"),
      h = cc11001100_hook("h", g.substring(1), "var-init"),
      R = cc11001100_hook("R", c + v + h, "var-init"),
      b = cc11001100_hook("b", [module, R].join("/"), "var-init");
    return b;
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd").invoke, "var-init"),
    g = cc11001100_hook("g", require("@baidu/Boxjs-search/dist/components/data/eventListener"), "var-init");
  return function (v) {
    var h = cc11001100_hook("h", a(v, "set"), "var-init");
    return "browser-tcStatisticData" === v.name ? new Promise(function (a, R) {
      g.regist("onLogSuccess", function (c) {
        !c || c.status && "0" !== c.status ? R({
          errCode: cc11001100_hook("errCode", c.status || "1000", "object-key-init"),
          errMsg: cc11001100_hook("errMsg", "", "object-key-init")
        }) : a({});
      }), c(h, v.data);
    }) : c(h, v.data, v.abtest);
  };
}), define("@baidu/Boxjs-search/dist/components/media/index", ["require", "@baidu/Boxjs-amd"], function (require) {
  function a(a, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    var v = cc11001100_hook("v", [g, a.type].join("/"), "var-init");
    return c(v, a.data, a.abtest);
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd").invoke, "var-init");
  return {
    audio: function (c) {
      return a(c, "audio");
    },
    voice: function (c) {
      return a(c, "voice");
    },
    live: function (c) {
      return a(c, "live");
    }
  };
}), define("@baidu/Boxjs-search/dist/core/filter", ["require", "@baidu/Boxjs-amd"], function (require) {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a) return "";
    var g = cc11001100_hook("g", "", "var-init");
    return $.each(a, function (a, v) {
      "object" === $.type(v) && (v = cc11001100_hook("v", JSON.stringify(v), "assign")), g += cc11001100_hook("g", c ? "&" + a + "=" + v : "&" + encodeURIComponent(a) + "=" + encodeURIComponent(v), "assign");
    }), g.slice(1);
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd"), "var-init"),
    g = cc11001100_hook("g", c.$, "var-init"),
    v = cc11001100_hook("v", c.platform, "var-init"),
    h = cc11001100_hook("h", v.versionCompare, "var-init"),
    R = cc11001100_hook("R", v.boxVersion, "var-init");
  return {
    "utils/openShareBox": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["5.3.5"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "callShare", "object-key-init"),
            action: cc11001100_hook("action", "", "object-key-init"),
            paramName: cc11001100_hook("paramName", "options", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "5.3.5.0", "object-key-init")
            }
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["5.3.5"], "object-key-init"),
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        filter: function (module, a, c) {
          var d = cc11001100_hook("d", {
            imageUrl: cc11001100_hook("imageUrl", c.iconUrl, "object-key-init"),
            title: cc11001100_hook("title", c.title, "object-key-init"),
            content: cc11001100_hook("content", c.content, "object-key-init"),
            linkUrl: cc11001100_hook("linkUrl", c.linkUrl, "object-key-init"),
            mediaType: cc11001100_hook("mediaType", c.mediaType, "object-key-init"),
            channel: cc11001100_hook("channel", c.pannel, "object-key-init"),
            shareSuccessCB: cc11001100_hook("shareSuccessCB", c.shareSuccessCB || "console.log", "object-key-init"),
            shareErrorCB: cc11001100_hook("shareErrorCB", c.shareErrorCB || "console.log", "object-key-init")
          }, "var-init");
          return "audio" === c.type ? d.type = cc11001100_hook("d.type", "2", "assign") : "image" === c.type ? (d.type = cc11001100_hook("d.type", "3", "assign"), d.linkUrl = cc11001100_hook("d.linkUrl", c.linkUrl || c.imageUrl, "assign")) : d.type = cc11001100_hook("d.type", "video" === c.type ? "4" : "1", "assign"), {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "callShare", "object-key-init"),
            data: cc11001100_hook("data", d, "object-key-init")
          };
        }
      }
    },
    "utils/getDeviceInfo": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        versionRange: cc11001100_hook("versionRange", ["7.3"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "utils", "object-key-init"),
            action: cc11001100_hook("action", "getDeviceInfo", "object-key-init")
          };
        },
        thunk: function (a) {
          return {
            status: cc11001100_hook("status", "1" === a.errno ? 0 : parseInt(a.errno, 10), "object-key-init"),
            data: cc11001100_hook("data", a.data, "object-key-init"),
            message: cc11001100_hook("message", a.errmsg, "object-key-init")
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["7.3"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "getDeviceInfo", "object-key-init")
          };
        },
        thunk: function (a) {
          return {
            status: cc11001100_hook("status", "1" === a.errno ? 0 : parseInt(a.errno, 10), "object-key-init"),
            data: cc11001100_hook("data", a.data, "object-key-init"),
            message: cc11001100_hook("message", a.errmsg, "object-key-init")
          };
        }
      }
    },
    "voice/play": {
      android: {
        versionRange: cc11001100_hook("versionRange", ["8.0"], "object-key-init"),
        filter: function (module, a, c) {
          return c.source_app = cc11001100_hook("c.source_app", c.source_app || "6|8.6", "assign"), {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "startVoice", "object-key-init"),
            data: cc11001100_hook("data", c, "object-key-init"),
            callbackKey: cc11001100_hook("callbackKey", "func", "object-key-init")
          };
        },
        thunk: function (a) {
          return a && 0 === a.status_code || a && 0 === a.status ? {
            status: cc11001100_hook("status", 0, "object-key-init"),
            data: {
              data: cc11001100_hook("data", a.data, "object-key-init")
            },
            message: cc11001100_hook("message", "", "object-key-init")
          } : {
            message: cc11001100_hook("message", "voice fail from jssdk message", "object-key-init"),
            status: cc11001100_hook("status", a.status_code || 1, "object-key-init")
          };
        }
      }
    },
    "currentWindow/close": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        supportFrame: cc11001100_hook("supportFrame", ["search"], "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["8.2"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "apppage", "object-key-init"),
            action: cc11001100_hook("action", "closeSimpleBrowseView", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "8.2.0.0", "object-key-init")
            }
          };
        }
      },
      android: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["8.2"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "closeWindow", "object-key-init")
          };
        }
      }
    },
    "toast/open": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        versionRange: cc11001100_hook("versionRange", ["6.0"], "object-key-init"),
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        filter: function (module, a, c) {
          return {
            module: cc11001100_hook("module", "utils", "object-key-init"),
            action: cc11001100_hook("action", "toast", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "6.0.0.0", "object-key-init")
            },
            data: cc11001100_hook("data", c.message, "object-key-init"),
            paramName: cc11001100_hook("paramName", "string", "object-key-init")
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["4.0"], "object-key-init"),
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        filter: function (module, a, c) {
          return {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "toast", "object-key-init"),
            data: cc11001100_hook("data", c.message, "object-key-init"),
            paramName: cc11001100_hook("paramName", "string", "object-key-init")
          };
        }
      }
    },
    "utils/openImage": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init"),
        filter: function (module, a, c) {
          return c.type = cc11001100_hook("c.type", "0", "assign"), {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "lightImage", "object-key-init"),
            data: cc11001100_hook("data", c, "object-key-init")
          };
        }
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init"),
        filter: function (module, a, c) {
          return c.type = cc11001100_hook("c.type", "0", "assign"), {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "lightImage", "object-key-init"),
            data: cc11001100_hook("data", c, "object-key-init")
          };
        }
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        versionRange: cc11001100_hook("versionRange", ["6.2"], "object-key-init"),
        filter: function (module, a, c) {
          return c.type = cc11001100_hook("c.type", "0", "assign"), c.index = cc11001100_hook("c.index", c.index || 0, "assign"), {
            module: cc11001100_hook("module", "utils", "object-key-init"),
            action: cc11001100_hook("action", "image", "object-key-init"),
            data: cc11001100_hook("data", c, "object-key-init")
          };
        },
        thunk: function () {
          return {
            status: cc11001100_hook("status", 0, "object-key-init"),
            message: cc11001100_hook("message", "", "object-key-init"),
            data: cc11001100_hook("data", "", "object-key-init")
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["6.1"], "object-key-init"),
        filter: function (module, a, c) {
          return c.type = cc11001100_hook("c.type", "0", "assign"), h(R, "7.4") >= 0 ? {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "lightImage", "object-key-init"),
            data: cc11001100_hook("data", c, "object-key-init")
          } : {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "image", "object-key-init"),
            data: cc11001100_hook("data", c, "object-key-init")
          };
        },
        thunk: function () {
          return {
            status: cc11001100_hook("status", 0, "object-key-init"),
            message: cc11001100_hook("message", "", "object-key-init")
          };
        }
      }
    },
    "account/openLoginDialog": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        versionRange: cc11001100_hook("versionRange", ["5.5"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "account", "object-key-init"),
            action: cc11001100_hook("action", "logindialog", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "5.5.0.0", "object-key-init")
            }
          };
        },
        thunk: function (a) {
          return {
            status: cc11001100_hook("status", a, "object-key-init"),
            message: cc11001100_hook("message", "", "object-key-init")
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["5.5"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "Bdbox_android_account", "object-key-init"),
            action: cc11001100_hook("action", "loginDialog", "object-key-init")
          };
        },
        thunk: function (a) {
          return {
            status: cc11001100_hook("status", a, "object-key-init"),
            message: cc11001100_hook("message", "", "object-key-init")
          };
        }
      }
    },
    "search/openAR": {
      ios: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["3.8"], "object-key-init"),
        filter: function (module, a, c) {
          return c.arValue.arKey = cc11001100_hook("c.arValue.arKey", c.arValue.arKey.replace(" ", ""), "assign"), {
            module: cc11001100_hook("module", "imagesearch", "object-key-init"),
            action: cc11001100_hook("action", "", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "3.8.0.0", "object-key-init")
            },
            data: cc11001100_hook("data", c, "object-key-init")
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["3.8"], "object-key-init"),
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        filter: function (module, a, c) {
          c.arValue.arKey = cc11001100_hook("c.arValue.arKey", c.arValue.arKey.replace(" ", ""), "assign");
          var g = cc11001100_hook("g", ["intent:widgetid://com.baidu.searchbox/-1#Intent;", "action=com.baidu.searchbox.action.ar_invoke;", "category=android.intent.category.LAUNCHER;", "component=com.baidu.searchbox/.CodeScannerActivity;", "launchFlags=0x10000000;", "S.arValue=" + encodeURIComponent(JSON.stringify(c.arValue)), "S.jsup=" + JSON.stringify(c.logParams), ";end"], "var-init");
          return {
            module: cc11001100_hook("module", "Bdbox_android_send_intent", "object-key-init"),
            action: cc11001100_hook("action", "send", "object-key-init"),
            data: cc11001100_hook("data", g.join(""), "object-key-init")
          };
        }
      }
    },
    "search/openCamera": {
      ios: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["3.8"], "object-key-init"),
        filter: function (module, c, g) {
          return {
            module: cc11001100_hook("module", "imagesearch", "object-key-init"),
            action: cc11001100_hook("action", "imagesearch", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "3.8.0.0", "object-key-init")
            },
            data: cc11001100_hook("data", encodeURIComponent(JSON.stringify(g.params)), "object-key-init"),
            args: cc11001100_hook("args", encodeURIComponent(a(g.args, !0)), "object-key-init"),
            paramName: cc11001100_hook("paramName", "params", "object-key-init")
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["3.8"], "object-key-init"),
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        filter: function (module, a, c) {
          var g = cc11001100_hook("g", ["intent:widgetid://com.baidu.searchbox/-1#Intent;", "action=com.baidu.searchbox.action.MAIN;", "category=android.intent.category.LAUNCHER;", "component=com.baidu.searchbox/.CodeScannerActivity;", "launchFlags=0x10000000;", "S.from=7;", "S.source_app=" + c.args.source_app + ";", "S.referer=" + c.args.referer + ";", "S.imageSearch_type=" + c.args.imageSearch_type + ";", "S.cameraPosition=" + c.args.cameraPosition + ";", "S.jsup=" + c.args.jsup, ";end"], "var-init");
          return {
            module: cc11001100_hook("module", "Bdbox_android_send_intent", "object-key-init"),
            action: cc11001100_hook("action", "send", "object-key-init"),
            data: cc11001100_hook("data", g.join(""), "object-key-init")
          };
        }
      }
    },
    "video/play": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.3"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["7.3"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "video", "object-key-init"),
            action: cc11001100_hook("action", "invokePlayer", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "7.3.0.0", "object-key-init")
            }
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["7.3"], "object-key-init"),
        supportFrame: cc11001100_hook("supportFrame", ["video"], "object-key-init"),
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "Bdbox_android_capi_video", "object-key-init"),
            action: cc11001100_hook("action", "invokePlayer", "object-key-init")
          };
        }
      }
    },
    "search/getSpeedLogData": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        versionRange: cc11001100_hook("versionRange", ["4.7"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "getSpeedLogData", "object-key-init"),
            action: cc11001100_hook("action", "", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "4.7.0.0", "object-key-init")
            }
          };
        },
        thunk: function (a) {
          return {
            status: cc11001100_hook("status", 0 === a.error ? 0 : 1, "object-key-init"),
            message: cc11001100_hook("message", "", "object-key-init"),
            data: cc11001100_hook("data", a.result, "object-key-init")
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["4.8"], "object-key-init"),
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "bd_searchbox_interface", "object-key-init"),
            action: cc11001100_hook("action", "getSpeedLogData", "object-key-init"),
            async: cc11001100_hook("async", !1, "object-key-init")
          };
        },
        thunk: function (a) {
          return {
            status: cc11001100_hook("status", 0 === a.error ? 0 : 1, "object-key-init"),
            message: cc11001100_hook("message", "", "object-key-init"),
            data: cc11001100_hook("data", a.result, "object-key-init")
          };
        }
      }
    },
    "browser/setTcStatisticData": {
      android: {
        versionRange: cc11001100_hook("versionRange", ["8.6"], "object-key-init"),
        filter: function (module, a, c) {
          return {
            module: cc11001100_hook("module", "Bdbox_android_tc", "object-key-init"),
            action: cc11001100_hook("action", "setTcStatisticData", "object-key-init"),
            data: cc11001100_hook("data", c.url, "object-key-init"),
            tchasOwncallback: cc11001100_hook("tchasOwncallback", !0, "object-key-init")
          };
        }
      }
    },
    "searchFrame/setConfig": {
      ios: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["7.5"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "searchFrame", "object-key-init"),
            action: cc11001100_hook("action", "config", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "7.5.0.0", "object-key-init")
            }
          };
        }
      },
      android: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["7.5"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "Bdbox_android_searchFrame", "object-key-init"),
            action: cc11001100_hook("action", "config", "object-key-init")
          };
        }
      }
    },
    "interface/setQuery": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["5.5"], "object-key-init"),
        filter: function (module, a, c) {
          return {
            module: cc11001100_hook("module", "setQuery", "object-key-init"),
            action: cc11001100_hook("action", "", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "5.5.0.0", "object-key-init")
            },
            data: cc11001100_hook("data", c, "object-key-init")
          };
        }
      },
      android: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["4.0"], "object-key-init"),
        supportFrame: cc11001100_hook("supportFrame", ["search"], "object-key-init"),
        filter: function (module, a, c) {
          var d = cc11001100_hook("d", [JSON.stringify(c)], "var-init");
          return {
            module: cc11001100_hook("module", "Bdbox_android_common", "object-key-init"),
            action: cc11001100_hook("action", "setQuery", "object-key-init"),
            data: cc11001100_hook("data", d, "object-key-init")
          };
        }
      }
    },
    "searchFrame/getAsyncPageState": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["7.5"], "object-key-init"),
        filter: function (module, a, c) {
          return c.url && (c.url = cc11001100_hook("c.url", encodeURIComponent(c.url), "assign")), {
            module: cc11001100_hook("module", "searchFrame", "object-key-init"),
            action: cc11001100_hook("action", "asyncPageState", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "7.5.0.0", "object-key-init")
            },
            data: cc11001100_hook("data", c, "object-key-init")
          };
        }
      },
      android: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["7.5"], "object-key-init"),
        filter: function (module, a, c) {
          return c.url && (c.url = cc11001100_hook("c.url", encodeURIComponent(c.url), "assign")), {
            module: cc11001100_hook("module", "Bdbox_android_searchFrame", "object-key-init"),
            action: cc11001100_hook("action", "asyncPageState", "object-key-init"),
            data: cc11001100_hook("data", c, "object-key-init")
          };
        }
      }
    },
    "baiduwallet/open": {
      ios: {
        noParams: cc11001100_hook("noParams", !0, "object-key-init"),
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["8.0"], "object-key-init"),
        filter: function () {
          var a = cc11001100_hook("a", {
              type: cc11001100_hook("type", "3", "object-key-init"),
              link_addr: cc11001100_hook("link_addr", "104", "object-key-init")
            }, "var-init"),
            c = cc11001100_hook("c", {
              url: cc11001100_hook("url", "baiduwallet?param=" + encodeURIComponent(JSON.stringify(a)), "object-key-init"),
              plugin_id: cc11001100_hook("plugin_id", "box.plugin.walletsdk", "object-key-init")
            }, "var-init");
          return {
            module: cc11001100_hook("module", "invokePlug", "object-key-init"),
            action: cc11001100_hook("action", "open", "object-key-init"),
            data: cc11001100_hook("data", c, "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "8.0.0.0", "object-key-init")
            }
          };
        }
      },
      android: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["5.3"], "object-key-init"),
        filter: function () {
          var a = cc11001100_hook("a", {
            intent: cc11001100_hook("intent", "intent:#Intent;action=com.baidu.searchbox.wallet.action.WALLET_VIEW;l.service_id=64;end", "object-key-init"),
            min_v: cc11001100_hook("min_v", "16788229", "object-key-init"),
            mode: cc11001100_hook("mode", "0", "object-key-init")
          }, "var-init");
          return {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "command", "object-key-init"),
            data: cc11001100_hook("data", JSON.stringify(a), "object-key-init")
          };
        }
      }
    },
    "easybrowse/open": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        noParams: cc11001100_hook("noParams", !0, "object-key-init"),
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["5.3"], "object-key-init"),
        filter: function (module, a, c) {
          var v = cc11001100_hook("v", {
              openurl: cc11001100_hook("openurl", encodeURIComponent(c.url), "object-key-init"),
              minver: cc11001100_hook("minver", "5.3.0.0", "object-key-init"),
              isla: cc11001100_hook("isla", 0, "object-key-init"),
              opentype: cc11001100_hook("opentype", 1, "object-key-init"),
              append: cc11001100_hook("append", 0, "object-key-init"),
              rbtnstyle: cc11001100_hook("rbtnstyle", 2, "object-key-init")
            }, "var-init"),
            h = cc11001100_hook("h", {}, "var-init");
          if ("h5" === c.type && delete c.type, $.each(c, function (a, c) {
            "url" !== c && "style" !== c && (c = cc11001100_hook("c", h[c] || c, "assign"), v[c] = cc11001100_hook("v[c]", a, "assign"));
          }), g.isObject(c.style)) {
            if (h.color = cc11001100_hook("h.color", "barcolor", "assign"), c.style.toolbaricons && c.style.toolbaricons.tids) var R = cc11001100_hook("R", JSON.stringify({
              toolids: cc11001100_hook("toolids", c.style.toolbaricons.tids, "object-key-init")
            }), "var-init");
            c.toolbar = cc11001100_hook("c.toolbar", R, "assign"), delete c.style, delete c.url, $.each(c.style, function (a, c) {
              c = cc11001100_hook("c", h[c] || c, "assign"), v[c] = cc11001100_hook("v[c]", a, "assign");
            });
          }
          return v.appid && (v.isla = cc11001100_hook("v.isla", 1, "assign")), {
            module: cc11001100_hook("module", "easybrowse", "object-key-init"),
            action: cc11001100_hook("action", "", "object-key-init"),
            data: cc11001100_hook("data", v, "object-key-init"),
            noParams: cc11001100_hook("noParams", !0, "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "5.3.0.0", "object-key-init")
            }
          };
        }
      },
      android: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["5.3"], "object-key-init"),
        filter: function (module, a, c) {
          var g = cc11001100_hook("g", ["S.bdsb_light_start_url=" + encodeURIComponent(c.url)], "var-init");
          "comments" === c.type ? g.push("component=com.baidu.searchbox/.home.feed.FeedCommentActivity") : "video" === c.type ? g.push("component=com.baidu.searchbox/.home.feed.ShortVideoDetailActivity") : "tags" === c.type ? g.push("component=com.baidu.searchbox/.xsearch.UserSubscribeCenterActivity") : "h5" === c.type ? g.push("component=com.baidu.searchbox/.lightbrowser.LightBrowserActivity") : "lockscreen" === c.type && g.push("component=com.baidu.searchbox/.lockscreen.LockScreenContentDetail");
          var v = cc11001100_hook("v", c.min_v, "var-init");
          delete c.min_v;
          var h = cc11001100_hook("h", encodeURIComponent(JSON.stringify({
            toolids: cc11001100_hook("toolids", c.style.toolbaricons.tids, "object-key-init")
          })), "var-init");
          g.push("S.toolbaricons=" + h), c.menumode && g.push("S.menumode=" + c.menumode), c.context && g.push("S.context=" + c.context), c.slog && g.push("S.slog=" + c.slog), g = cc11001100_hook("g", g.join(";"), "assign");
          var R = cc11001100_hook("R", {
            intent: cc11001100_hook("intent", "intent:#Intent;" + g + ";end", "object-key-init"),
            min_v: cc11001100_hook("min_v", v && "" !== v ? v : "16783629", "object-key-init"),
            mode: cc11001100_hook("mode", "0", "object-key-init")
          }, "var-init");
          return {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "command", "object-key-init"),
            data: cc11001100_hook("data", JSON.stringify(R), "object-key-init")
          };
        }
      }
    },
    "utils/ubcReport": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["7.3"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "utils", "object-key-init"),
            action: cc11001100_hook("action", "ubcReport", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "7.3.0.0", "object-key-init")
            }
          };
        }
      },
      android: {
        hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
        versionRange: cc11001100_hook("versionRange", ["7.3"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "ubcEvent", "object-key-init"),
            extData: {
              min_v: cc11001100_hook("min_v", "16789504", "object-key-init")
            }
          };
        }
      }
    },
    "utils/location": {
      androidlite: {
        versionRange: cc11001100_hook("versionRange", ["2.2.2"], "object-key-init")
      },
      androidinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.0"], "object-key-init")
      },
      iosinfo: {
        versionRange: cc11001100_hook("versionRange", ["1.1"], "object-key-init")
      },
      ios: {
        versionRange: cc11001100_hook("versionRange", ["6.0"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "utils", "object-key-init"),
            action: cc11001100_hook("action", "getCurrentLocation", "object-key-init"),
            extData: {
              minver: cc11001100_hook("minver", "6.0.0.0", "object-key-init")
            }
          };
        },
        thunk: function (a) {
          if ("401" === a.status) return {
            status: cc11001100_hook("status", a.status, "object-key-init"),
            message: cc11001100_hook("message", a.message, "object-key-init")
          };
          var c = cc11001100_hook("c", a.coords, "var-init");
          return {
            status: cc11001100_hook("status", a.result, "object-key-init"),
            data: cc11001100_hook("data", c || "", "object-key-init")
          };
        }
      },
      android: {
        versionRange: cc11001100_hook("versionRange", ["6.3"], "object-key-init"),
        filter: function () {
          return {
            module: cc11001100_hook("module", "Bdbox_android_utils", "object-key-init"),
            action: cc11001100_hook("action", "location", "object-key-init")
          };
        },
        thunk: function (a) {
          return {
            status: cc11001100_hook("status", 0 === a.st ? 0 : a.st, "object-key-init"),
            data: cc11001100_hook("data", a, "object-key-init"),
            message: cc11001100_hook("message", 0 === a.st ? "" : "调用失败", "object-key-init")
          };
        }
      }
    }
  };
}), define("@baidu/Boxjs-search/dist/core/versionMap", ["require", "@baidu/Boxjs-amd"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.split("?"), "var-init"),
      g = cc11001100_hook("g", c[1] ? c[1] : c[0], "var-init"),
      v = cc11001100_hook("v", g.split("&"), "var-init"),
      h = cc11001100_hook("h", {}, "var-init");
    return v.forEach(function (a) {
      if (a = cc11001100_hook("a", a.split("="), "assign"), a[0].length > 0) {
        var c = cc11001100_hook("c", "", "var-init");
        try {
          c = cc11001100_hook("c", decodeURIComponent(a[1]) || "", "assign");
        } catch (e) {
          c = cc11001100_hook("c", a[1], "assign");
        }
        h[a[0]] = cc11001100_hook("h[a[0]]", c, "assign");
      }
    }), h;
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd"), "var-init"),
    g = cc11001100_hook("g", c.$, "var-init"),
    v = cc11001100_hook("v", c.extend, "var-init");
  return {
    "utils/getWifiVideoAutoplay": {
      v: cc11001100_hook("v", 24, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.6"], "object-key-init")
    },
    "utils/getDeviceInfo": {
      v: cc11001100_hook("v", 19, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.3"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "utils", "object-key-init"),
          action: cc11001100_hook("action", "getNetworkType", "object-key-init"),
          data: {}
        };
      }
    },
    "browser/open": {
      v: cc11001100_hook("v", 1, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["8.2"], "object-key-init"),
      iosinfoVersionRange: cc11001100_hook("iosinfoVersionRange", ["1.1"], "object-key-init"),
      androidliteVersionRange: cc11001100_hook("androidliteVersionRange", ["2.2.2"], "object-key-init"),
      androidinfoVersionRange: cc11001100_hook("androidinfoVersionRange", ["1.0"], "object-key-init"),
      filter: function (a) {
        for (var c in a) a[c] = cc11001100_hook("a[c]", encodeURIComponent(g.isObject(a[c]) ? JSON.stringify(a[c]) : a[c]), "assign");
        return {
          data: cc11001100_hook("data", a, "object-key-init")
        };
      }
    },
    "voice/play": {
      v: cc11001100_hook("v", 6, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["8.5"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["android"], "object-key-init"),
      filter: function (a) {
        a.source_app = cc11001100_hook("a.source_app", a.source_app || "6|8.6", "assign");
        var c = cc11001100_hook("c", [], "var-init");
        for (var i in a) c.push(i + "=" + a[i]);
        c = cc11001100_hook("c", c.join("&"), "assign");
        var g = cc11001100_hook("g", {
          plugin_id: cc11001100_hook("plugin_id", "box.plugin.voicesearch", "object-key-init"),
          url: cc11001100_hook("url", "args=" + encodeURIComponent(c), "object-key-init")
        }, "var-init");
        return {
          module: cc11001100_hook("module", "vendor/speech", "object-key-init"),
          action: cc11001100_hook("action", "open", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(g)), "object-key-init")
          },
          callbackKey: cc11001100_hook("callbackKey", "func", "object-key-init")
        };
      }
    },
    "currentWindow/close": {
      v: cc11001100_hook("v", 11, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["9.1"], "object-key-init"),
      iosinfoVersionRange: cc11001100_hook("iosinfoVersionRange", ["1.1"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "browser", "object-key-init"),
          action: cc11001100_hook("action", "closeWindow", "object-key-init")
        };
      }
    },
    "toast/open": {
      v: cc11001100_hook("v", 11, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["9.1"], "object-key-init"),
      iosinfoVersionRange: cc11001100_hook("iosinfoVersionRange", ["1.1"], "object-key-init"),
      filter: function (a) {
        if (a.style) {
          var c = cc11001100_hook("c", a.style, "var-init");
          for (var g in c) "style" !== g && (a[g] = cc11001100_hook("a[g]", c[g], "assign"));
          c.style && (a.style = cc11001100_hook("a.style", c.style, "assign"));
        }
        return {
          action: cc11001100_hook("action", "showToast", "object-key-init"),
          module: cc11001100_hook("module", "utils", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "account/openLoginDialog": {
      v: cc11001100_hook("v", 26, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.9"], "object-key-init"),
      filter: function (a) {
        return a.third_login && (a.showThirdLogin = cc11001100_hook("a.showThirdLogin", a.third_login, "assign"), delete a.third_login), a.login_type && (a.loginType = cc11001100_hook("a.loginType", a.login_type, "assign"), delete a.login_type), a.func && (a.loginCallback = cc11001100_hook("a.loginCallback", a.func, "assign"), delete a.func), a.tpl && (a.loginSource = cc11001100_hook("a.loginSource", a.tpl, "assign"), delete a.tpl), {
          module: cc11001100_hook("module", "account", "object-key-init"),
          action: cc11001100_hook("action", "login", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "shortcut/openCreate": {
      v: cc11001100_hook("v", 30, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.9"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "shortcut", "object-key-init"),
          action: cc11001100_hook("action", "createShortcut", "object-key-init")
        };
      }
    },
    "app/open": {
      v: cc11001100_hook("v", 7, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["8.6"], "object-key-init"),
      iosinfoVersionRange: cc11001100_hook("iosinfoVersionRange", ["3.7.5"], "object-key-init"),
      androidliteVersionRange: cc11001100_hook("androidliteVersionRange", ["3.6"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "vendor/ad", "object-key-init"),
          action: cc11001100_hook("action", "deeplink", "object-key-init")
        };
      }
    },
    "utils/getAppInfo": {
      v: cc11001100_hook("v", 16, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.0"], "object-key-init"),
      iosinfoVersionRange: cc11001100_hook("iosinfoVersionRange", ["3.5"], "object-key-init"),
      androidliteVersionRange: cc11001100_hook("androidliteVersionRange", ["3.6"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "utils", "object-key-init"),
          action: cc11001100_hook("action", "queryScheme", "object-key-init")
        };
      }
    },
    "searchFrame/setChangeTab": {
      v: cc11001100_hook("v", 12, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["9.1"], "object-key-init"),
      iosinfoVersionRange: cc11001100_hook("iosinfoVersionRange", ["1.1"], "object-key-init"),
      filter: function (a) {
        for (var i in a) a[i] = cc11001100_hook("a[i]", encodeURIComponent(a[i]), "assign");
        return {
          module: cc11001100_hook("module", "searchframe", "object-key-init"),
          action: cc11001100_hook("action", "changetab", "object-key-init"),
          data: cc11001100_hook("data", a, "object-key-init")
        };
      }
    },
    "swan/open": {
      v: cc11001100_hook("v", 22, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.5"], "object-key-init"),
      schemeNoV: cc11001100_hook("schemeNoV", !0, "object-key-init"),
      filter: function (c) {
        if ("{}" === JSON.stringify(c)) return {
          module: cc11001100_hook("module", "swan", "object-key-init"),
          action: cc11001100_hook("action", "open", "object-key-init"),
          data: {}
        };
        var g = cc11001100_hook("g", "", "var-init"),
          h = cc11001100_hook("h", c.url.match(/^http(s)?:\/\/(.*?)\//), "var-init");
        g = cc11001100_hook("g", h ? c.url.match("smartapps.cn/webmapp/") ? c.url.split("smartapps.cn/webmapp/")[1] : c.url.split(h[0])[1] : "/" === c.url.substring(0, 1) ? c.url.substring(1) : c.url, "assign");
        var R = cc11001100_hook("R", g.split("?")[0], "var-init"),
          b = cc11001100_hook("b", {}, "var-init");
        b = cc11001100_hook("b", g.indexOf("?") > -1 ? a(c.url) : c.params || {}, "assign");
        var y = cc11001100_hook("y", {
            from: cc11001100_hook("from", c.from || b.from || "", "object-key-init"),
            ext: cc11001100_hook("ext", c.ext || b.ext || {}, "object-key-init")
          }, "var-init"),
          C = cc11001100_hook("C", {
            _baiduboxapp: cc11001100_hook("_baiduboxapp", encodeURIComponent(JSON.stringify(y)), "object-key-init")
          }, "var-init"),
          B = cc11001100_hook("B", c.appId || c.appKey, "var-init");
        if (B && (B = cc11001100_hook("B", B.indexOf("--0") > -1 ? B.substring(0, B.length - 2) : B, "assign"), B = cc11001100_hook("B", B.replace(/\w-/g, function (a) {
          return a.substring(0, 1).toUpperCase();
        }), "assign")), R && R.length > 0) {
          for (var S in b) b[S] = cc11001100_hook("b[S]", encodeURIComponent(b[S]), "assign");
          v(C, b);
        }
        return {
          module: cc11001100_hook("module", "swan/" + B, "object-key-init"),
          action: cc11001100_hook("action", R, "object-key-init"),
          data: cc11001100_hook("data", C, "object-key-init")
        };
      }
    },
    "swangame/open": {
      v: cc11001100_hook("v", 22, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.13.5"], "object-key-init"),
      schemeNoV: cc11001100_hook("schemeNoV", !0, "object-key-init"),
      filter: function (c) {
        if ("{}" === JSON.stringify(c)) return {
          module: cc11001100_hook("module", "swangame", "object-key-init"),
          action: cc11001100_hook("action", "open", "object-key-init"),
          data: {}
        };
        var g = cc11001100_hook("g", "", "var-init"),
          h = cc11001100_hook("h", c.url.match(/^http(s)?:\/\/(.*?)\//), "var-init");
        g = cc11001100_hook("g", h ? c.url.match("smartapps.cn/webmapp/") ? c.url.split("smartapps.cn/webmapp/")[1] : c.url.split(h[0])[1] : "/" === c.url.substring(0, 1) ? c.url.substring(1) : c.url, "assign");
        var R = cc11001100_hook("R", g.split("?")[0], "var-init"),
          b = cc11001100_hook("b", {}, "var-init");
        b = cc11001100_hook("b", g.indexOf("?") > -1 ? a(c.url) : c.params || {}, "assign");
        var y = cc11001100_hook("y", {
            from: cc11001100_hook("from", b.from || c.from || "", "object-key-init"),
            ext: cc11001100_hook("ext", b.ext || c.ext || {}, "object-key-init")
          }, "var-init"),
          C = cc11001100_hook("C", {
            _baiduboxapp: cc11001100_hook("_baiduboxapp", encodeURIComponent(JSON.stringify(y)), "object-key-init")
          }, "var-init"),
          B = cc11001100_hook("B", c.appId || c.appKey, "var-init");
        if (B && (B = cc11001100_hook("B", B.indexOf("--0") > -1 ? B.substring(0, B.length - 2) : B, "assign"), B = cc11001100_hook("B", B.replace(/\w-/g, function (a) {
          return a.substring(0, 1).toUpperCase();
        }), "assign")), R && R.length > 0) {
          for (var S in b) b[S] = cc11001100_hook("b[S]", encodeURIComponent(b[S]), "assign");
          v(C, b);
        }
        return {
          module: cc11001100_hook("module", "swangame/" + B, "object-key-init"),
          action: cc11001100_hook("action", R, "object-key-init"),
          data: cc11001100_hook("data", C, "object-key-init")
        };
      }
    },
    "browser/setTcStatisticData": {
      v: cc11001100_hook("v", 7, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["8.6"], "object-key-init"),
      iosinfoVersionRange: cc11001100_hook("iosinfoVersionRange", ["1.1"], "object-key-init"),
      liteVersionRange: cc11001100_hook("liteVersionRange", ["2.3"], "object-key-init"),
      androidinfoVersionRange: cc11001100_hook("androidinfoVersionRange", ["1.1"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["android"], "object-key-init"),
      filter: function (a) {
        return {
          data: {
            url: cc11001100_hook("url", encodeURIComponent(a.url), "object-key-init")
          },
          tchasOwncallback: cc11001100_hook("tchasOwncallback", !0, "object-key-init")
        };
      }
    },
    "audio/play": {
      v: cc11001100_hook("v", 20, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.3.6"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "audio", "object-key-init"),
          action: cc11001100_hook("action", "invokeGlobalAudioPlayer", "object-key-init")
        };
      }
    },
    "toast/close": {
      v: cc11001100_hook("v", 11, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["9.1"], "object-key-init"),
      iosinfoVersionRange: cc11001100_hook("iosinfoVersionRange", ["1.1"], "object-key-init"),
      filter: function () {
        return {
          action: cc11001100_hook("action", "dismissToast", "object-key-init"),
          module: cc11001100_hook("module", "utils", "object-key-init")
        };
      }
    },
    "download/getStatus": {
      v: cc11001100_hook("v", 14, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["9.3"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["ios"], "object-key-init"),
      filter: function (a) {
        return a.type = cc11001100_hook("a.type", "batchgetdownloadstatus", "assign"), {
          action: cc11001100_hook("action", "app", "object-key-init"),
          module: cc11001100_hook("module", "download", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "apk/start": {
      v: cc11001100_hook("v", 14, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["9.3"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["ios"], "object-key-init"),
      filter: function (a) {
        return a.type = cc11001100_hook("a.type", "startdownload", "assign"), {
          action: cc11001100_hook("action", "app", "object-key-init"),
          module: cc11001100_hook("module", "download", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "apk/cancel": {
      v: cc11001100_hook("v", 14, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["9.3"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["ios"], "object-key-init"),
      filter: function (a) {
        return a.type = cc11001100_hook("a.type", "canceldownload", "assign"), {
          action: cc11001100_hook("action", "app", "object-key-init"),
          module: cc11001100_hook("module", "download", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "install/apk": {
      v: cc11001100_hook("v", 14, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["9.3"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["ios"], "object-key-init"),
      filter: function (a) {
        return a.type = cc11001100_hook("a.type", "installapk", "assign"), {
          action: cc11001100_hook("action", "app", "object-key-init"),
          module: cc11001100_hook("module", "download", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "apk/open": {
      v: cc11001100_hook("v", 14, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["9.3"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["ios"], "object-key-init"),
      filter: function (a) {
        return a.type = cc11001100_hook("a.type", "openapk", "assign"), {
          action: cc11001100_hook("action", "app", "object-key-init"),
          module: cc11001100_hook("module", "download", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "datachannel/register": {
      v: cc11001100_hook("v", 5, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["8.4"], "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
      filter: function (a) {
        a.action = cc11001100_hook("a.action", "tts" === a.name ? "com.baidu.channel.tts.statuschange" : "com.baidu.channel." + a.name, "assign"), delete a.name;
        for (var c in a) g.isObject(a[c]) && (a[c] = cc11001100_hook("a[c]", JSON.stringify(a[c]), "assign"));
        return {
          data: cc11001100_hook("data", a, "object-key-init")
        };
      }
    },
    "datachannel/unregister": {
      v: cc11001100_hook("v", 5, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["8.4"], "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !1, "object-key-init"),
      filter: function (a) {
        a.action = cc11001100_hook("a.action", "com.baidu.channel." + a.name, "assign"), delete a.name;
        for (var c in a) g.isObject(a[c]) && (a[c] = cc11001100_hook("a[c]", JSON.stringify(a[c]), "assign"));
        return {
          data: cc11001100_hook("data", a, "object-key-init")
        };
      }
    },
    "browser/getParams": {
      v: cc11001100_hook("v", 34, "object-key-init"),
      iosVersionRange: cc11001100_hook("iosVersionRange", ["10.13.7"], "object-key-init"),
      androidVersionRange: cc11001100_hook("androidVersionRange", ["11.0"], "object-key-init")
    },
    "browser/setWiseFeedbackStatus": {
      v: cc11001100_hook("v", 34, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.13"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "browser", "object-key-init"),
          action: cc11001100_hook("action", "wiseFeedbackStatus", "object-key-init")
        };
      }
    },
    "swan/setPreloadSwanCore": {
      v: cc11001100_hook("v", 34, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.13"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "swan", "object-key-init"),
          action: cc11001100_hook("action", "preloadSwanCore", "object-key-init")
        };
      }
    },
    "browser/setNotifiyAsyncLoadFinish": {
      v: cc11001100_hook("v", 35, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.13"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["android"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "browser", "object-key-init"),
          action: cc11001100_hook("action", "notifiyAsyncLoadFinish", "object-key-init"),
          data: cc11001100_hook("data", a, "object-key-init")
        };
      }
    },
    "browser/getCheckBackgroundWindow": {
      v: cc11001100_hook("v", 37, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.2"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["android"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "browser", "object-key-init"),
          action: cc11001100_hook("action", "checkBackgroundWindow", "object-key-init")
        };
      }
    },
    "invokeVideoLandingPage/open": {
      v: cc11001100_hook("v", 43, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.5"], "object-key-init"),
      filter: function () {
        return {
          module: cc11001100_hook("module", "browserVideo", "object-key-init"),
          action: cc11001100_hook("action", "invokeVideoLandingPage", "object-key-init")
        };
      }
    },
    "invokePoiLandingPage/open": {
      v: cc11001100_hook("v", 44, "object-key-init"),
      hasCB: cc11001100_hook("hasCB", !0, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.6"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "browser", "object-key-init"),
          action: cc11001100_hook("action", "invokePoiLandingPage", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "speech/getFinishVoiceStreamingTransport": {
      v: cc11001100_hook("v", 41, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.3"], "object-key-init"),
      notSupport: cc11001100_hook("notSupport", ["ios"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "speech", "object-key-init"),
          action: cc11001100_hook("action", "finishVoiceStreamingTransport", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "swan/downloadPackages": {
      v: cc11001100_hook("v", 42, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.3.5"], "object-key-init"),
      filter: function (a) {
        return {
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "searchframe/setConfig": {
      v: cc11001100_hook("v", 43, "object-key-init"),
      iosVersionRange: cc11001100_hook("iosVersionRange", ["11.6"], "object-key-init"),
      androidVersionRange: cc11001100_hook("androidVersionRange", ["11.5"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "searchframe", "object-key-init"),
          action: cc11001100_hook("action", "config", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "imageBrowser/setAppend": {
      v: cc11001100_hook("v", 44, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.6"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "imageBrowser", "object-key-init"),
          action: cc11001100_hook("action", "append", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "imageBrowser/setPosition": {
      v: cc11001100_hook("v", 44, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.6"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "imageBrowser", "object-key-init"),
          action: cc11001100_hook("action", "position", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "searchframe/setUpdateImagePosition": {
      v: cc11001100_hook("v", 44, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.6"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "searchframe", "object-key-init"),
          action: cc11001100_hook("action", "updateImagePosition", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "searchframe/openImageLandingPage": {
      v: cc11001100_hook("v", 44, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.6"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "searchframe", "object-key-init"),
          action: cc11001100_hook("action", "invokeImageLandingPage", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "live/openTieba": {
      v: cc11001100_hook("v", 33, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["10.12.0"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "live", "object-key-init"),
          action: cc11001100_hook("action", "enterTiebaRoom", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    },
    "video/prefetch": {
      v: cc11001100_hook("v", 45, "object-key-init"),
      versionRange: cc11001100_hook("versionRange", ["11.7"], "object-key-init"),
      filter: function (a) {
        return {
          module: cc11001100_hook("module", "search", "object-key-init"),
          action: cc11001100_hook("action", "videoPrefetch", "object-key-init"),
          data: {
            params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(a)), "object-key-init")
          }
        };
      }
    }
  };
}), define("@baidu/Boxjs-search/index", ["require", "@baidu/Boxjs-amd", "@baidu/Boxjs-search/dist/core/filter", "@baidu/Boxjs-search/dist/core/versionMap", "@baidu/Boxjs-search/dist/components/data/index", "@baidu/Boxjs-search/dist/components/media/index"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd"), "var-init"),
    c = cc11001100_hook("c", a.filter, "var-init"),
    g = cc11001100_hook("g", a.versionMap, "var-init"),
    v = cc11001100_hook("v", a.extend, "var-init"),
    h = cc11001100_hook("h", require("@baidu/Boxjs-search/dist/core/filter"), "var-init"),
    R = cc11001100_hook("R", require("@baidu/Boxjs-search/dist/core/versionMap"), "var-init");
  return a.data.set = cc11001100_hook("a.data.set", require("@baidu/Boxjs-search/dist/components/data/index"), "assign"), v(a.media, require("@baidu/Boxjs-search/dist/components/media/index")), v(c, h), v(g, R), window.searchboxBoxjsId = cc11001100_hook("window.searchboxBoxjsId", "search", "assign"), a;
}), define("@baidu/Boxjs-search", ["@baidu/Boxjs-search/index"], function (mod) {
  return mod;
});