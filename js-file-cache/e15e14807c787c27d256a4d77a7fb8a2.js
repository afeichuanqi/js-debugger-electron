define("@baidu/Boxjs-amd/dist/components/cache/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/core/invoke"), "var-init");
  return {
    "delete": function (c, b, v) {
      var B = cc11001100_hook("B", {
        key: cc11001100_hook("key", c, "object-key-init"),
        data: cc11001100_hook("data", encodeURIComponent(JSON.stringify(b)), "object-key-init")
      }, "var-init");
      return a("storage/delete", B, v);
    },
    get: function (c, b, v) {
      var B = cc11001100_hook("B", {
        key: cc11001100_hook("key", c, "object-key-init"),
        domain: cc11001100_hook("domain", b, "object-key-init")
      }, "var-init");
      return a("storage/get", B, v);
    },
    set: function (c, b, v, B) {
      var j = cc11001100_hook("j", {
        key: cc11001100_hook("key", c, "object-key-init"),
        data: cc11001100_hook("data", JSON.stringify(b), "object-key-init"),
        trustedDomains: cc11001100_hook("trustedDomains", v, "object-key-init")
      }, "var-init");
      return a("storage/set", j, B);
    }
  };
}), define("@baidu/Boxjs-amd/dist/components/data/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function (require) {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var b = cc11001100_hook("b", "", "var-init"),
      module = cc11001100_hook("module", "", "var-init");
    "toggle" === c ? (b = cc11001100_hook("b", a.name, "assign"), module = cc11001100_hook("module", a.type, "assign")) : (b = cc11001100_hook("b", a.name.split("-")[1], "assign"), module = cc11001100_hook("module", a.name.split("-")[0], "assign"));
    var v = cc11001100_hook("v", b.substring(0, 1).toUpperCase(), "var-init"),
      B = cc11001100_hook("B", b.substring(1), "var-init"),
      j = cc11001100_hook("j", c + v + B, "var-init"),
      h = cc11001100_hook("h", [module, j].join("/"), "var-init");
    return h;
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/core/invoke"), "var-init");
  return {
    get: function (b) {
      var v = cc11001100_hook("v", a(b, "get"), "var-init");
      return c(v, b.data, b.abtest);
    },
    set: function (b) {
      var v = cc11001100_hook("v", a(b, "set"), "var-init");
      return c(v, b.data, b.abtest);
    },
    toggle: function (b) {
      var v = cc11001100_hook("v", a(b, "toggle"), "var-init"),
        B = cc11001100_hook("B", 0, "var-init");
      b.status && (B = cc11001100_hook("B", (parseInt(b.status, 10) + 1) % 2, "assign"));
      var j = cc11001100_hook("j", b.data || {}, "var-init");
      return j.status = cc11001100_hook("j.status", B + "", "assign"), c(v, j, b.abtest);
    }
  };
}), define("@baidu/Boxjs-amd/dist/components/device/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/core/invoke"), "var-init");
  return {
    cuid: function (c) {
      var b = cc11001100_hook("b", "utils/getCUID", "var-init");
      return a(b, {}, c);
    },
    info: function (c, b) {
      var v = cc11001100_hook("v", {}, "var-init"),
        B = cc11001100_hook("B", [], "var-init"),
        j = cc11001100_hook("j", "", "var-init"),
        h = cc11001100_hook("h", "", "var-init");
      switch ("string" == typeof c ? (h = cc11001100_hook("h", c, "assign"), B.push(c)) : (h = cc11001100_hook("h", c[0], "assign"), B = cc11001100_hook("B", c, "assign")), h) {
        case "netInfo":
          j = cc11001100_hook("j", "utils/getDeviceInfo", "assign"), v = cc11001100_hook("v", {
            keys: cc11001100_hook("keys", B, "object-key-init")
          }, "assign");
          break;
        case "screenInfo":
          j = cc11001100_hook("j", "utils/getScreenInfo", "assign"), v = cc11001100_hook("v", {
            keys: cc11001100_hook("keys", B, "object-key-init")
          }, "assign");
          break;
        case "platformInfo":
          j = cc11001100_hook("j", "utils/getPlatformInfo", "assign");
      }
      return a(j, v, b);
    },
    location: function (c, b) {
      var v = cc11001100_hook("v", {
          coor_type: cc11001100_hook("coor_type", c, "object-key-init")
        }, "var-init"),
        B = cc11001100_hook("B", "utils/location", "var-init");
      return a(B, v, b);
    }
  };
}), define("@baidu/Boxjs-amd/dist/components/event/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function (require) {
  function a(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var v = cc11001100_hook("v", "datachannel/" + b, "var-init"),
      B = cc11001100_hook("B", a.data || {}, "var-init");
    return B.name = cc11001100_hook("B.name", a.name, "assign"), c(v, B, a.abtest);
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/core/invoke"), "var-init");
  return {
    fire: function (c) {
      return a(c, "sendbroadcast");
    },
    on: function (c) {
      return a(c, "register");
    },
    off: function (c) {
      return a(c, "unregister");
    }
  };
}), define("@baidu/Boxjs-amd/dist/components/log/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/core/invoke"), "var-init"),
    c = cc11001100_hook("c", {
      durationDisappear: cc11001100_hook("durationDisappear", "ubc/duration/disappear", "object-key-init"),
      durationAppear: cc11001100_hook("durationAppear", "ubc/duration/appear", "object-key-init"),
      reliableLog: cc11001100_hook("reliableLog", "utils/onReliableLog", "object-key-init"),
      performanceFlowEvent: cc11001100_hook("performanceFlowEvent", "utils/onPerformanceFlowEvent", "object-key-init"),
      ubcReport: cc11001100_hook("ubcReport", "utils/ubcReport", "object-key-init"),
      feedReport: cc11001100_hook("feedReport", "feed/report", "object-key-init"),
      channelStatistics: cc11001100_hook("channelStatistics", "channelStatistics/action", "object-key-init")
    }, "var-init");
  return function (b) {
    var v = cc11001100_hook("v", c[b.name] || b.name, "var-init");
    return a(v, b.data, b.abtest);
  };
}), define("@baidu/Boxjs-amd/dist/components/media/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function (require) {
  function a(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var v = cc11001100_hook("v", [b, a.type].join("/"), "var-init");
    return c(v, a.data, a.abtest);
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/core/invoke"), "var-init");
  return {
    video: function (c) {
      return a(c, "video");
    },
    tts: function (c) {
      return a(c, "tts");
    }
  };
}), define("@baidu/Boxjs-amd/dist/components/net/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/core/invoke"), "var-init");
  return {
    download: function (c) {
      var b = cc11001100_hook("b", c.name.split("-"), "var-init"),
        module = cc11001100_hook("module", b[0], "var-init"),
        v = cc11001100_hook("v", b[1] || "", "var-init");
      return v = cc11001100_hook("v", [module, v].join("/"), "assign"), a(v, c.data, c.abtest);
    },
    prefetch: function (c) {
      var b = cc11001100_hook("b", [c.name, "prefetch"].join("/"), "var-init");
      return a(b, c.data, c.abtest);
    },
    request: function (c) {
      return a("net/request", c, c.abtest);
    }
  };
}), define("@baidu/Boxjs-amd/dist/components/ui/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function (require) {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var b = cc11001100_hook("b", a.name.split("-"), "var-init"),
      v = cc11001100_hook("v", "", "var-init");
    if (b[1]) {
      var B = cc11001100_hook("B", b[1].substring(0, 1).toUpperCase(), "var-init"),
        j = cc11001100_hook("j", b[1].substring(1), "var-init"),
        h = cc11001100_hook("h", c + B + j, "var-init");
      v = cc11001100_hook("v", [b[0], h].join("/"), "assign");
    } else v = cc11001100_hook("v", [a.name, c].join("/"), "assign");
    return v;
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/core/invoke"), "var-init");
  return {
    open: function (b) {
      var v = cc11001100_hook("v", b.data || {}, "var-init"),
        B = cc11001100_hook("B", a(b, "open"), "var-init");
      return b.style && (v.style = cc11001100_hook("v.style", b.style, "assign")), c(B, v, b.abtest);
    },
    close: function (b) {
      var v = cc11001100_hook("v", a(b, "close"), "var-init");
      return c(v, {}, b.abtest);
    },
    update: function (b) {
      var v = cc11001100_hook("v", a(b, "update"), "var-init");
      return c(v, b.data, b.abtest);
    }
  };
}), define("@baidu/Boxjs-amd/dist/components/view/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/core/invoke"), "var-init");
  return {
    open: function (c) {
      var b = cc11001100_hook("b", c.name, "var-init"),
        v = cc11001100_hook("v", c.type || "", "var-init"),
        B = cc11001100_hook("B", c.data, "var-init"),
        j = cc11001100_hook("j", [b, "open"].join("/"), "var-init");
      return c.style && (B.style = cc11001100_hook("B.style", c.style, "assign")), ("easybrowse" === b || "browser" === b) && (B.newbrowser = cc11001100_hook("B.newbrowser", c.newbrowser || c.data.newbrowser || "0", "assign"), B.type = cc11001100_hook("B.type", v, "assign")), "hybrid" === v && (j = cc11001100_hook("j", [b, v].join("/"), "assign")), a(j, B, c.abtest);
    },
    close: function (c) {
      var b = cc11001100_hook("b", [c.name, "close"].join("/"), "var-init");
      return a(b, {}, c.abtest);
    },
    update: function (c) {
      var b = cc11001100_hook("b", [c.name, "update"].join("/"), "var-init");
      return a(b, c.data, c.abtest);
    }
  };
}), define("@baidu/Boxjs-amd/dist/core/BDPolyfill/filter", ["require"], function () {
  return {};
}), define("@baidu/Boxjs-amd/dist/core/BDPolyfill/index", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/android/invokeApp", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/ios/invokeApp", "@baidu/Boxjs-amd/dist/core/BDPolyfill/parser", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend", "@baidu/Boxjs-amd/dist/utils/postMessageUser"], function (require) {
  function a(a, b, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    var B = cc11001100_hook("B", [], "var-init");
    for (var i in b) B.push(i + "=" + b[i]);
    if (v) {
      var j = cc11001100_hook("j", "_bdbox_js_" + c.getId(), "var-init");
      window[j] = cc11001100_hook("window[j]", function () {
        v.apply(window, [].slice.call(arguments, 0));
      }, "assign"), B.push("func=" + j);
    }
    B = cc11001100_hook("B", "baiduboxapp://" + a + "?" + B.join("&"), "assign"), window.webkit.messageHandlers.BBAMNPJSBridge.postMessage(B);
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    b = cc11001100_hook("b", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/android/invokeApp"), "var-init"),
    v = cc11001100_hook("v", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/ios/invokeApp"), "var-init"),
    B = cc11001100_hook("B", require("@baidu/Boxjs-amd/dist/core/BDPolyfill/parser"), "var-init"),
    j = cc11001100_hook("j", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend"), "var-init"),
    h = cc11001100_hook("h", require("@baidu/Boxjs-amd/dist/utils/postMessageUser"), "var-init");
  return function (g, y, w) {
    var _ = cc11001100_hook("_", "", "var-init"),
      P = cc11001100_hook("P", g.split("/"), "var-init"),
      module = cc11001100_hook("module", P[0], "var-init"),
      k = cc11001100_hook("k", P[1], "var-init"),
      O = cc11001100_hook("O", c.isIOS ? "ios" : c.isAndroid ? "android" : "", "var-init"),
      C = cc11001100_hook("C", B(module, k, y, O), "var-init"),
      S = cc11001100_hook("S", C ? C.thunk : void 0, "var-init");
    if (c.isFunction(w) ? _ = cc11001100_hook("_", c.cbWithoutCache(w, S), "assign") : w && (_ = cc11001100_hook("_", w, "assign")), C) {
      var A = cc11001100_hook("A", {}, "var-init");
      if (c.isObject(C.data) ? c.isArray(C.data) ? y = cc11001100_hook("y", C.data || [], "assign") : (y = cc11001100_hook("y", y || {}, "assign"), j(y, C.data)) : y = cc11001100_hook("y", C.data, "assign"), "ios" !== O || C.noParams) A = cc11001100_hook("A", y, "assign");else {
        C.action && (A = cc11001100_hook("A", {
          action: cc11001100_hook("action", C.action, "object-key-init")
        }, "assign"));
        var I = cc11001100_hook("I", C.paramName || "params", "var-init");
        y && c.isObject(y) && "{}" !== JSON.stringify(y) && (A[I] = cc11001100_hook("A[I]", encodeURIComponent(JSON.stringify(y)), "assign")), y && c.isString(y) && y.length && (A[I] = cc11001100_hook("A[I]", encodeURIComponent(y), "assign")), C.next && (A.next = cc11001100_hook("A.next", C.next, "assign"));
      }
      switch (c.isObject(C.extData) && j(A, C.extData), O) {
        case "ios":
          C.data && C.data.shareSuccessCB && (A.successcallback = cc11001100_hook("A.successcallback", C.data.shareSuccessCB, "assign")), C.data && C.data.shareErrorCB && (A.errorcallback = cc11001100_hook("A.errorcallback", C.data.shareErrorCB, "assign")), h.indexOf(window.searchboxBoxjsId) > -1 ? "callShare" === C.module ? a(C.module, A) : a(C.module, A, _) : C.hasCB === !1 ? v(C.module, A) : v(C.module, A, _);
          break;
        case "android":
          var N = cc11001100_hook("N", [], "var-init");
          if (c.isString(A) && A) N.push(A);else if (c.isObject(A) && !c.isArray(A) && "{}" !== JSON.stringify(A)) N.push(JSON.stringify(A));else if (c.isArray(A) && "[]" !== JSON.stringify(A)) for (var i = cc11001100_hook("i", 0, "var-init"); i < A.length; i++) N.push(A[i]);
          if (C.callbackKey && "func" === C.callbackKey ? N.push(C.data.func) : C.tchasOwncallback ? N.push("onLogSuccess") : (C.hasCB !== !1 && C.async !== !1 && N.push(_), C.data && C.data.shareSuccessCB && N.push(C.data.shareSuccessCB), C.data && C.data.shareErrorCB && N.push(C.data.shareErrorCB)), N.length <= 0) var re = cc11001100_hook("re", b(C.module, C.action), "var-init");else var re = cc11001100_hook("re", b(C.module, C.action, N), "var-init");
          C.async === !1 && window[_](re);
      }
      C.hasCB === !1 && window[_](JSON.stringify(c.sdkError.COMMAND_SUCCESS));
    } else window[_](JSON.stringify(c.sdkError.COMMAND_NOT_EXIST));
  };
}), define("@baidu/Boxjs-amd/dist/core/BDPolyfill/parser", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend", "@baidu/Boxjs-amd/dist/core/BDPolyfill/filter", "@baidu/Boxjs-amd/dist/utils/platform"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend"), "var-init"),
    b = cc11001100_hook("b", require("@baidu/Boxjs-amd/dist/core/BDPolyfill/filter"), "var-init"),
    v = cc11001100_hook("v", require("@baidu/Boxjs-amd/dist/utils/platform"), "var-init");
  return function (module, B, j, h) {
    var g = cc11001100_hook("g", b[module + "/" + B], "var-init"),
      y = cc11001100_hook("y", {}, "var-init"),
      w = cc11001100_hook("w", v.boxType, "var-init"),
      _ = cc11001100_hook("_", h, "var-init");
    "main" !== w && (h = cc11001100_hook("h", [h, w].join(""), "assign"));
    var P = cc11001100_hook("P", g[h], "var-init");
    if (P) {
      var k = cc11001100_hook("k", P.filter || g[_].filter || {}, "var-init"),
        O = cc11001100_hook("O", P.thunk || g[_].thunk, "var-init"),
        y = cc11001100_hook("y", {
          module: cc11001100_hook("module", module, "object-key-init"),
          action: cc11001100_hook("action", B, "object-key-init"),
          data: cc11001100_hook("data", j, "object-key-init"),
          extData: {},
          hasCB: cc11001100_hook("hasCB", P.hasCB || g[_].hasCB, "object-key-init"),
          callbackKey: cc11001100_hook("callbackKey", k.callbackKey || "", "object-key-init")
        }, "var-init");
      return k && a.isFunction(k) && c(y, k(module, B, j)), O && a.isFunction(O) && (y.thunk = cc11001100_hook("y.thunk", O, "assign")), y;
    }
  };
}), define("@baidu/Boxjs-amd/dist/core/invoke", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/core/schemeSplicer", "@baidu/Boxjs-amd/dist/core/versionMap", "@baidu/Boxjs-amd/dist/core/BDPolyfill/index", "@baidu/Boxjs-amd/dist/utils/versionTools", "@baidu/Boxjs-amd/dist/thirdParty/log", "@baidu/Boxjs-amd/dist/utils/platform"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", "", "var-init"),
      b = cc11001100_hook("b", "", "var-init"),
      B = cc11001100_hook("B", {}, "var-init");
    if (v.isObject(a)) c = cc11001100_hook("c", a.errCode >= 0 ? a.errCode : +a.status, "assign"), b = cc11001100_hook("b", a.errMsg || a.message, "assign"), B = cc11001100_hook("B", a.data, "assign");else {
      try {
        a = cc11001100_hook("a", JSON.parse(a), "assign");
      } catch (e) {
        console.log(e);
      }
      c = cc11001100_hook("c", +a.status || a, "assign"), B = cc11001100_hook("B", a.data || arguments[1], "assign");
    }
    return {
      errCode: cc11001100_hook("errCode", c, "object-key-init"),
      errMsg: cc11001100_hook("errMsg", b, "object-key-init"),
      data: cc11001100_hook("data", B || {}, "object-key-init")
    };
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var i in a) "number" == typeof a[i] ? a[i] = cc11001100_hook("a[i]", "" + a[i], "assign") : "object" == typeof a[i] && (a[i] = cc11001100_hook("a[i]", c(a[i]), "assign"));
    return a;
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.callback && "function" == typeof a.callback) var b = cc11001100_hook("b", a.callback, "var-init");
    var v = cc11001100_hook("v", JSON.stringify(a), "var-init"),
      B = cc11001100_hook("B", JSON.parse(v), "var-init");
    return B.callback = cc11001100_hook("B.callback", b, "assign"), c(B);
  }
  var v = cc11001100_hook("v", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    B = cc11001100_hook("B", require("@baidu/Boxjs-amd/dist/core/schemeSplicer"), "var-init"),
    j = cc11001100_hook("j", require("@baidu/Boxjs-amd/dist/core/versionMap"), "var-init"),
    h = cc11001100_hook("h", require("@baidu/Boxjs-amd/dist/core/BDPolyfill/index"), "var-init"),
    g = cc11001100_hook("g", require("@baidu/Boxjs-amd/dist/utils/versionTools"), "var-init"),
    y = cc11001100_hook("y", require("@baidu/Boxjs-amd/dist/thirdParty/log"), "var-init"),
    w = cc11001100_hook("w", require("@baidu/Boxjs-amd/dist/utils/platform"), "var-init");
  return w.versionCompare, w.boxVersion, function (c, w, _) {
    var P = cc11001100_hook("P", j[c], "var-init"),
      k = cc11001100_hook("k", Math.floor(100 * Math.random()), "var-init");
    if ("swan" === window.searchboxBoxjsId && w && !w.cancelNumTostr && (w = cc11001100_hook("w", b(w), "assign")), c.match("Sync")) {
      if (!c) return v.sdkError.COMMAND_NOT_EXIST;
      if (!v.isBoxApp()) return v.sdkError.NOT_IN_BDBOX;
      var O = cc11001100_hook("O", "", "var-init"),
        C = function () {},
        S = cc11001100_hook("S", g.getWhoCanHandle(c), "var-init");
      O = cc11001100_hook("O", "old" === S ? h(c, w || {}, C) : "new" === S ? B(c, w || {}, C, P) : v.sdkError.COMMAND_NOT_EXIST, "assign");
      var A = cc11001100_hook("A", a(O), "var-init");
      return A = cc11001100_hook("A", P.thunk ? P.thunk(A) : A, "assign"), 0 === A.errCode ? (6 === k && y(window.searchboxBoxjsId, "succ_" + c), A.data) : (y(window.searchboxBoxjsId, "fail_" + c, A), A);
    }
    return new Promise(function (b, j) {
      if (!c) return void j(v.sdkError.COMMAND_NOT_EXIST);
      if (!v.isBoxApp()) return void j(v.sdkError.NOT_IN_BDBOX);
      var O = function (v) {
          var B = cc11001100_hook("B", a(v), "var-init");
          0 === B.errCode ? (6 === k && y(window.searchboxBoxjsId, "succ_" + c), b(B.data)) : (y(window.searchboxBoxjsId, "fail_" + c, B), j({
            errCode: cc11001100_hook("errCode", B.errCode, "object-key-init"),
            errMsg: cc11001100_hook("errMsg", B.errMsg, "object-key-init")
          }));
        },
        C = cc11001100_hook("C", g.getWhoCanHandle(c), "var-init");
      "old" === C ? h(c, w || {}, O) : "new" === C ? B(c, w || {}, O, P, _) : j(v.sdkError.COMMAND_NOT_EXIST);
    });
  };
}), define("@baidu/Boxjs-amd/dist/core/schemeSplicer", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/utils/platform", "@baidu/Boxjs-amd/dist/utils/postMessageUser"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", document.createElement("iframe"), "var-init"),
      b = cc11001100_hook("b", document.body || document.getElementsByTagName("body")[0], "var-init");
    c.style.display = cc11001100_hook("c.style.display", "none", "assign"), c.src = cc11001100_hook("c.src", a, "assign"), b.appendChild(c), setTimeout(function () {
      b.removeChild(c), c = cc11001100_hook("c", null, "assign");
    }, 0);
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", window.Bdbox_android_jsbridge, "var-init");
    if (!c || !c.dispatch) {
      var re = cc11001100_hook("re", window.prompt("BdboxApp:" + JSON.stringify({
        obj: cc11001100_hook("obj", "Bdbox_android_jsbridge", "object-key-init"),
        func: cc11001100_hook("func", "dispatch", "object-key-init"),
        args: cc11001100_hook("args", [a], "object-key-init")
      })), "var-init");
      return re;
    }
    c.dispatch(a);
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    window.webkit.messageHandlers.BBAMNPJSBridge.postMessage(a);
  }
  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    window.webkit.messageHandlers.BBAMNPJSBridgeWebViewComponent.postMessage(a);
  }
  function B(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", window.Bdbox_aiapps_jsbridge, "var-init");
    return c.dispatch(a);
  }
  function j(a) {
    cc11001100_hook("a", a, "function-parameter");
    var re = cc11001100_hook("re", window.prompt("BdboxApp:" + JSON.stringify({
      obj: cc11001100_hook("obj", "mnp", "object-key-init"),
      func: cc11001100_hook("func", "dispatch", "object-key-init"),
      args: cc11001100_hook("args", [a], "object-key-init")
    })), "var-init");
    return re;
  }
  var h = cc11001100_hook("h", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    g = cc11001100_hook("g", require("@baidu/Boxjs-amd/dist/utils/platform"), "var-init"),
    y = cc11001100_hook("y", require("@baidu/Boxjs-amd/dist/utils/postMessageUser"), "var-init"),
    w = cc11001100_hook("w", g.versionCompare, "var-init"),
    _ = cc11001100_hook("_", g.boxVersion, "var-init");
  return function (g, P, k, O, C) {
    var S = cc11001100_hook("S", [], "var-init"),
      A = cc11001100_hook("A", "", "var-init"),
      I = cc11001100_hook("I", "", "var-init"),
      N = cc11001100_hook("N", O.hasCB === !1 ? !1 : !0, "var-init"),
      M = cc11001100_hook("M", P.useCompontentBridge, "var-init"),
      W = cc11001100_hook("W", {}, "var-init"),
      D = cc11001100_hook("D", "v" + O.v + "/" + g, "var-init"),
      E = cc11001100_hook("E", {}, "var-init"),
      T = cc11001100_hook("T", P && P.func ? P.func : null, "var-init"),
      C = cc11001100_hook("C", C ? C : !1, "var-init");
    D.match("swan/launch") && P.from && (S.push("from=" + P.from), P.from = cc11001100_hook("P.from", void 0, "assign")), "{}" !== JSON.stringify(P) && (W = cc11001100_hook("W", {
      params: cc11001100_hook("params", encodeURIComponent(JSON.stringify(P)), "object-key-init")
    }, "assign")), O.filter ? (E = cc11001100_hook("E", O.filter(P), "assign"), P = cc11001100_hook("P", E.data || W, "assign"), E.action && (D = cc11001100_hook("D", "v" + O.v + "/" + E.module + "/" + E.action, "assign")), O.schemeNoV && (D = cc11001100_hook("D", E.module + "/" + E.action, "assign"))) : P = cc11001100_hook("P", W, "assign");
    for (var i in P) S.push(i + "=" + P[i]);
    if (h.isFunction(k) ? I = cc11001100_hook("I", h.cbWithoutCache(k, O.thunk), "assign") : k && (I = cc11001100_hook("I", k, "assign")), E.tchasOwncallback && (I = cc11001100_hook("I", "onLogSuccess", "assign")), N && S.push("callback=" + I), C && S.push("abtest=" + encodeURIComponent(JSON.stringify(C))), E.callbackKey && S.push(E.callbackKey + "=" + T), A = cc11001100_hook("A", window.searchboxBoxjsId && "swan" !== window.searchboxBoxjsId ? "baiduboxapp://" + D + "?" + S.join("&") + "&upgrade=0&oauthType=" + window.searchboxBoxjsId : "baiduboxapp://" + D + "?" + S.join("&") + "&upgrade=0", "assign"), D.match("Sync")) {
      var re = cc11001100_hook("re", {}, "var-init");
      if (re = cc11001100_hook("re", h.isAndroid ? B(A) : j(A), "assign")) try {
        return JSON.parse(re);
      } catch (e) {
        return h.sdkError.COMMAND_FAIL;
      }
    } else if (h.isAndroid && w(_, "9.0") >= 0) {
      var re = cc11001100_hook("re", c(A), "var-init");
      if (re) try {
        re = cc11001100_hook("re", JSON.parse(re), "assign"), re && "false" === re.result && window[I](h.sdkError.COMMAND_FAIL);
      } catch (e) {
        window[I](h.sdkError.COMMAND_FAIL);
      }
    } else M ? v(A) : y.indexOf(window.searchboxBoxjsId) > -1 ? b(A) : a(A);
    N || k(h.sdkError.COMMAND_SUCCESS);
  };
}), define("@baidu/Boxjs-amd/dist/core/versionMap", ["require"], function () {
  return {};
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/android/invokeApp", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion"], function (require) {
  function a(a, j, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("j", j, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    if (h && !b.isArray(h) && (h = cc11001100_hook("h", Array.prototype.slice.call(arguments, 0).slice(2), "assign")), window[a] && window[a][j]) {
      var g = cc11001100_hook("g", window[a][j].apply(window[a], h), "var-init");
      return {
        error: cc11001100_hook("error", 0, "object-key-init"),
        result: cc11001100_hook("result", g, "object-key-init"),
        __from: cc11001100_hook("__from", "js", "object-key-init")
      };
    }
    var y = cc11001100_hook("y", B(), "var-init");
    if (v(y, 4.8) >= 0 || b.$isLiteBox()) {
      var w = cc11001100_hook("w", c(a, j, h), "var-init");
      return w = cc11001100_hook("w", w ? JSON.parse(w) : {}, "assign"), w.__from = cc11001100_hook("w.__from", "app", "assign"), w;
    }
    if ("4.7.1" === y || "4.7" == y) {
      var _ = cc11001100_hook("_", c(a, j, h), "var-init");
      return {
        error: cc11001100_hook("error", 0, "object-key-init"),
        result: cc11001100_hook("result", _, "object-key-init"),
        __from: cc11001100_hook("__from", "app4.7", "object-key-init")
      };
    }
    return {
      error: cc11001100_hook("error", 200, "object-key-init")
    };
  }
  function c(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    if (!b.$isBox() && !b.$isLiteBox()) return {
      error: cc11001100_hook("error", 201, "object-key-init")
    };
    if (!b.$isAndroid()) return {
      error: cc11001100_hook("error", 202, "object-key-init")
    };
    var B = cc11001100_hook("B", {
      obj: cc11001100_hook("obj", a, "object-key-init"),
      func: cc11001100_hook("func", c, "object-key-init"),
      args: cc11001100_hook("args", v ? v : [], "object-key-init")
    }, "var-init");
    try {
      return window.prompt("BdboxApp:" + JSON.stringify(B));
    } catch (e) {
      return {
        error: cc11001100_hook("error", 201, "object-key-init")
      };
    }
  }
  var b = cc11001100_hook("b", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    v = cc11001100_hook("v", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare"), "var-init"),
    B = cc11001100_hook("B", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion"), "var-init");
  return require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion"), a;
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  function a(c, B, h) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    for (var g in B) h && (b(B[g]) || v(B[g])) ? (b(B[g]) && !b(c[g]) && (c[g] = cc11001100_hook("c[g]", {}, "assign")), v(B[g]) && !v(c[g]) && (c[g] = cc11001100_hook("c[g]", [], "assign")), a(c[g], B[g], h)) : j(B[g]) || (c[g] = cc11001100_hook("c[g]", B[g], "assign"));
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    b = cc11001100_hook("b", c.isPlainObject, "var-init"),
    v = cc11001100_hook("v", c.isArray, "var-init"),
    B = cc11001100_hook("B", c.isBoolean, "var-init"),
    j = cc11001100_hook("j", c.isUndefined, "var-init");
  return function (b) {
    var v,
      j = cc11001100_hook("j", c.emptyArr.slice.call(arguments, 1), "var-init");
    return B(b) && (v = cc11001100_hook("v", b, "assign"), b = cc11001100_hook("b", j.shift(), "assign")), j.forEach(function (c) {
      a(b, c, v);
    }), b;
  };
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/ios/invokeApp", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init");
  return function (c, b, v) {
    if (c && (a.$isBox() || a.$isLiteBox())) {
      var B = cc11001100_hook("B", [], "var-init");
      if (a.isFunction(b)) v = cc11001100_hook("v", b, "assign");else for (var i in b) B.push(i + "=" + b[i]);
      if (a.isFunction(v)) {
        var j = cc11001100_hook("j", "_bdbox_js_" + a.getId(), "var-init");
        window[j] = cc11001100_hook("window[j]", function () {
          v.apply(window, [].slice.call(arguments, 0));
        }, "assign"), B.push("func=" + j);
      } else v && B.push("func=" + v);
      B = cc11001100_hook("B", "baiduboxapp://" + c + "?" + B.join("&"), "assign");
      var h = cc11001100_hook("h", document.createElement("iframe"), "var-init");
      h.style.display = cc11001100_hook("h.style.display", "none", "assign"), h.src = cc11001100_hook("h.src", B, "assign");
      var g = cc11001100_hook("g", document.body || document.getElementsByTagName("body")[0], "var-init");
      g.appendChild(h), setTimeout(function () {
        g.removeChild(h), h = cc11001100_hook("h", null, "assign");
      }, 0);
    }
  };
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/detect", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", {
      name: cc11001100_hook("name", "unknown", "object-key-init"),
      version: cc11001100_hook("version", 0, "object-key-init")
    }, "var-init");
    this === window || this.os || (this.os = cc11001100_hook("this.os", c, "assign")), a = cc11001100_hook("a", a || navigator.userAgent, "assign");
    var b = cc11001100_hook("b", {
      Weibo: cc11001100_hook("Weibo", /weibo/i, "object-key-init"),
      Wechat: cc11001100_hook("Wechat", /micromessenger\//i, "object-key-init"),
      QQ: cc11001100_hook("QQ", /QQ\//, "object-key-init")
    }, "var-init");
    for (var i in b) b.hasOwnProperty(i) && (c["is" + i] = cc11001100_hook("c[\"is\" + i]", b[i].test(a), "assign"));
    c.isUC = cc11001100_hook("c.isUC", a.match(/UC/) || window.ucweb || window.ucbrowser, "assign");
    var v = cc11001100_hook("v", a.match(/Windows Phone ([\d.]+)/), "var-init");
    if (v) return c.win10 = cc11001100_hook("c.win10", !0, "assign"), c.version = cc11001100_hook("c.version", v[1], "assign"), c.name = cc11001100_hook("c.name", "win10", "assign"), c;
    var B = cc11001100_hook("B", a.match(/(Android);?\s+([\d.]+)?/), "var-init");
    if (B) return c.android = cc11001100_hook("c.android", !0, "assign"), c.version = cc11001100_hook("c.version", B[2], "assign"), c.name = cc11001100_hook("c.name", "android", "assign"), c;
    var j = cc11001100_hook("j", a.match(/(iPad).*OS\s([\d_]+)/), "var-init"),
      h = cc11001100_hook("h", a.match(/(iPod)(.*OS\s([\d_]+))?/), "var-init"),
      g = cc11001100_hook("g", !j && a.match(/(iPhone\sOS)\s([\d_]+)/), "var-init");
    return g && !h ? (c.ios = cc11001100_hook("c.ios", c.iphone = cc11001100_hook("c.iphone", !0, "assign"), "assign"), c.version = cc11001100_hook("c.version", g[2].replace(/_/g, "."), "assign"), c.name = cc11001100_hook("c.name", "ios", "assign"), c) : j ? (c.ios = cc11001100_hook("c.ios", c.ipad = cc11001100_hook("c.ipad", !0, "assign"), "assign"), c.name = cc11001100_hook("c.name", "ios", "assign"), c.version = cc11001100_hook("c.version", j[2].replace(/_/g, "."), "assign"), c) : h ? (c.name = cc11001100_hook("c.name", "ios", "assign"), c.ios = cc11001100_hook("c.ios", c.ipod = cc11001100_hook("c.ipod", !0, "assign"), "assign"), c.version = cc11001100_hook("c.version", h[3] ? h[3].replace(/_/g, ".") : null, "assign"), c) : c;
  }
  var c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init");
  return a.apply(c), a;
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getInfoVersion", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    c = function () {
      var b = cc11001100_hook("b", 0, "var-init");
      if (a.$isInfoBox()) {
        var v,
          B = cc11001100_hook("B", navigator.userAgent, "var-init");
        (v = cc11001100_hook("v", /baiduboxapp\/([\d+.]+)/.exec(B), "assign")) && (b = cc11001100_hook("b", v[1], "assign"));
      }
      return c = cc11001100_hook("c", function () {
        return b;
      }, "assign"), b;
    };
  return c;
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    c = function () {
      var b = cc11001100_hook("b", 0, "var-init");
      if (a.$isLiteBox()) {
        var v,
          B = cc11001100_hook("B", navigator.userAgent, "var-init");
        (v = cc11001100_hook("v", /baiduboxapp\/([\d+.]+)/.exec(B), "assign")) && (b = cc11001100_hook("b", v[1], "assign"));
      }
      return c = cc11001100_hook("c", function () {
        return b;
      }, "assign"), b;
    };
  return c;
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getProVersion", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    c = function () {
      var b = cc11001100_hook("b", 0, "var-init");
      if (a.$isProBox()) {
        var v,
          B = cc11001100_hook("B", navigator.userAgent, "var-init");
        (v = cc11001100_hook("v", /baiduboxapp\/([\d+.]+)/.exec(B), "assign")) && (b = cc11001100_hook("b", v[1], "assign"));
      }
      return c = cc11001100_hook("c", function () {
        return b;
      }, "assign"), b;
    };
  return c;
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    c = function () {
      var b = cc11001100_hook("b", 0, "var-init");
      if (window.baiduboxapp_version) b = cc11001100_hook("b", window.baiduboxapp_version, "assign");else if (a.$isBox()) {
        var v,
          B = cc11001100_hook("B", navigator.userAgent, "var-init");
        (v = cc11001100_hook("v", /([\d+.]+)_(?:diordna|enohpi)_/.exec(B), "assign")) ? (v = cc11001100_hook("v", v[1].split("."), "assign"), b = cc11001100_hook("b", v.reverse().join("."), "assign")) : (v = cc11001100_hook("v", /baiduboxapp\/([\d+.]+)/.exec(B), "assign")) && (b = cc11001100_hook("b", v[1], "assign"));
      }
      return c = cc11001100_hook("c", function () {
        return b;
      }, "assign"), b;
    };
  return c;
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/queryToJson", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  return require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), function (a) {
    var c = cc11001100_hook("c", a.split("?"), "var-init"),
      b = cc11001100_hook("b", c[1] ? c[1] : c[0], "var-init"),
      v = cc11001100_hook("v", b.split("&"), "var-init"),
      B = cc11001100_hook("B", {}, "var-init");
    return v.forEach(function (a) {
      if (a = cc11001100_hook("a", a.split("="), "assign"), a[0].length > 0) {
        var c = cc11001100_hook("c", "", "var-init");
        try {
          c = cc11001100_hook("c", decodeURIComponent(a[1]) || "", "assign");
        } catch (e) {}
        B[a[0]] = cc11001100_hook("B[a[0]]", c, "assign");
      }
    }), B;
  };
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  var a = cc11001100_hook("a", (require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), function (a, c) {
    c += cc11001100_hook("c", "", "assign"), a += cc11001100_hook("a", "", "assign");
    for (var b = cc11001100_hook("b", a.split("."), "var-init"), v = cc11001100_hook("v", c.split("."), "var-init"), i = cc11001100_hook("i", 0, "var-init"), B = cc11001100_hook("B", Math.max(b.length, v.length), "var-init"); B > i; i++) {
      if (b[i] && !v[i] && parseInt(b[i]) > 0 || parseInt(b[i]) > parseInt(v[i])) return 1;
      if (v[i] && !b[i] && parseInt(v[i]) > 0 || parseInt(b[i]) < parseInt(v[i])) return -1;
    }
    return 0;
  }), "var-init");
  return a;
}), define("@baidu/Boxjs-amd/dist/thirdParty/log", ["require"], function () {
  function a() {
    var a = cc11001100_hook("a", "", "var-init");
    return /\biPhone\b|\biPad\b/.test(B) && !/android/i.test(B) ? a = cc11001100_hook("a", "ios", "assign") : /android/i.test(B) ? a = cc11001100_hook("a", "android", "assign") : /windows/i.test(B) && (a = cc11001100_hook("a", "windows", "assign")), a;
  }
  function c() {
    var a = cc11001100_hook("a", "", "var-init"),
      c = cc11001100_hook("c", "", "var-init");
    if (c == /([\d+.]+)_(?:diordna|enohpi)_/.exec(B)) try {
      c = cc11001100_hook("c", c[1].split("."), "assign"), c = cc11001100_hook("c", c.reverse(), "assign"), a = cc11001100_hook("a", c.join("."), "assign");
    } catch (e) {
      console.log("获取ios手百版本无匹配，原始字符为：" + B);
    } else if (c == /baiduboxapp\/([\d]+([.][\d]+){1,3})/.exec(B)) try {
      a = cc11001100_hook("a", c[1], "assign");
    } catch (e) {
      console.log("获取android手百版本无匹配，原始字符为：" + B);
    }
    return a;
  }
  function b() {
    var a = cc11001100_hook("a", c(), "var-init");
    if (null == a || "string" != typeof a) return a;
    var b = cc11001100_hook("b", /^\d+\.\d+/, "var-init"),
      v = cc11001100_hook("v", "", "var-init");
    return b.test(a) && (v = cc11001100_hook("v", a.match(b), "assign"), v.length) ? v[0] : a;
  }
  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.common && a.cusData && a.type) {
      var c = cc11001100_hook("c", a.common, "var-init"),
        b = cc11001100_hook("b", a.cusData, "var-init"),
        v = cc11001100_hook("v", {
          pv: cc11001100_hook("pv", 1, "object-key-init"),
          jserr: cc11001100_hook("jserr", 1, "object-key-init"),
          event: cc11001100_hook("event", 2, "object-key-init"),
          custom_err: cc11001100_hook("custom_err", 1, "object-key-init"),
          perf: cc11001100_hook("perf", 2, "object-key-init")
        }, "var-init"),
        B = function (a) {
          var c = cc11001100_hook("c", {
            pv: cc11001100_hook("pv", 0, "object-key-init"),
            jserr: cc11001100_hook("jserr", 0, "object-key-init"),
            custom_err: cc11001100_hook("custom_err", 0, "object-key-init"),
            perf: cc11001100_hook("perf", 1, "object-key-init")
          }, "var-init");
          return "event" === a.type ? a.cusData.evt && a.cusData.evt.match(/^c_\w*/) ? 0 : 1 : c[a.type];
        },
        j = cc11001100_hook("j", window.location.protocol, "var-init");
      "http:" !== j && (j = cc11001100_hook("j", "https:", "assign"));
      var h = cc11001100_hook("h", j + "//m.baidu.com/tcbox?service=bdbox&action=pblog&", "var-init"),
        g = cc11001100_hook("g", {
          type: cc11001100_hook("type", B(a), "object-key-init"),
          timestamp: cc11001100_hook("timestamp", +Date.now(), "object-key-init"),
          id: cc11001100_hook("id", 10092, "object-key-init"),
          content: {
            from: cc11001100_hook("from", "whole", "object-key-init"),
            type: cc11001100_hook("type", "0", "object-key-init"),
            value: cc11001100_hook("value", "0", "object-key-init"),
            page: cc11001100_hook("page", b.id, "object-key-init"),
            source: cc11001100_hook("source", b.name, "object-key-init"),
            platform: cc11001100_hook("platform", c.platform, "object-key-init")
          }
        }, "var-init");
      if (b.errCode && (g.content.type = cc11001100_hook("g.content.type", "-1", "assign"), g.content.value = cc11001100_hook("g.content.value", b.errCode, "assign")), B(a)) if ("event" === a.type) g.content.duration = cc11001100_hook("g.content.duration", parseInt(b.msg) / 1e3, "assign");else {
        var y = cc11001100_hook("y", [], "var-init"),
          w = cc11001100_hook("w", {
            id: cc11001100_hook("id", "", "object-key-init"),
            d: cc11001100_hook("d", "", "object-key-init"),
            info: {}
          }, "var-init");
        for (var _ in b) w.id = cc11001100_hook("w.id", _, "assign"), w.d = cc11001100_hook("w.d", b[_], "assign"), y.push(w), w = cc11001100_hook("w", {
          id: cc11001100_hook("id", "", "object-key-init"),
          d: cc11001100_hook("d", "", "object-key-init"),
          info: {}
        }, "assign");
        g.content.part = cc11001100_hook("g.content.part", y, "assign");
      }
      var P = cc11001100_hook("P", {
        appid: cc11001100_hook("appid", 1, "object-key-init"),
        dataid: cc11001100_hook("dataid", 2, "object-key-init"),
        cateid: cc11001100_hook("cateid", 99, "object-key-init"),
        actionid: cc11001100_hook("actionid", v[a.type], "object-key-init"),
        actiontype: cc11001100_hook("actiontype", "0", "object-key-init"),
        actiondata: cc11001100_hook("actiondata", g, "object-key-init")
      }, "var-init");
      h += cc11001100_hook("h", "data=" + encodeURIComponent(JSON.stringify(P)), "assign"), setTimeout(function () {
        var a = cc11001100_hook("a", document.createElement("img"), "var-init");
        a.onload = cc11001100_hook("a.onload", a.onerror = cc11001100_hook("a.onerror", a.onabort = cc11001100_hook("a.onabort", function () {
          a = cc11001100_hook("a", null, "assign");
        }, "assign"), "assign"), "assign"), a.src = cc11001100_hook("a.src", h, "assign");
      });
    }
  }
  var B = cc11001100_hook("B", navigator.userAgent, "var-init");
  return window.log = cc11001100_hook("window.log", function (B, j, h) {
    var g = cc11001100_hook("g", {
        hybridVersion: cc11001100_hook("hybridVersion", window.hybridVersion || "0", "object-key-init"),
        platform: cc11001100_hook("platform", a() || "other", "object-key-init"),
        boxV: cc11001100_hook("boxV", b() || "0", "object-key-init"),
        boxVersion: cc11001100_hook("boxVersion", c() || "0", "object-key-init"),
        page_id: cc11001100_hook("page_id", "301_" + B, "object-key-init"),
        network: cc11001100_hook("network", "", "object-key-init"),
        cuid: cc11001100_hook("cuid", "", "object-key-init")
      }, "var-init"),
      y = cc11001100_hook("y", {
        evt: cc11001100_hook("evt", "c_" + j, "object-key-init"),
        msg: cc11001100_hook("msg", "jssdk_" + j, "object-key-init"),
        name: cc11001100_hook("name", j, "object-key-init"),
        id: cc11001100_hook("id", B, "object-key-init")
      }, "var-init");
    h && (y.errCode = cc11001100_hook("y.errCode", h.errCode + "", "assign")), v({
      common: cc11001100_hook("common", g, "object-key-init"),
      cusData: cc11001100_hook("cusData", y, "object-key-init"),
      type: cc11001100_hook("type", "event", "object-key-init")
    });
  }, "assign");
}), define("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", ["require"], function () {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return B.cleanObj.toString.call(a).slice(8, -1) === c;
  }
  var c = cc11001100_hook("c", +new Date(), "var-init"),
    b = cc11001100_hook("b", (c + "").slice(-3), "var-init"),
    v = cc11001100_hook("v", navigator.userAgent, "var-init"),
    B = cc11001100_hook("B", {
      isBoxApp: function (a) {
        return a = cc11001100_hook("a", a || "", "assign"), / baiduboxapp\//i.test(v) === !1 ? !1 : v.indexOf(a + " baiduboxapp") < 0 ? !1 : !0;
      },
      isBox: cc11001100_hook("isBox", / baiduboxapp\//i.test(v) && !/ (lite|info) baiduboxapp/.test(v), "object-key-init"),
      $isBox: function () {
        var a = cc11001100_hook("a", window.navigator || {}, "var-init"),
          c = cc11001100_hook("c", a.userAgent, "var-init");
        return / baiduboxapp\//i.test(c) && !/ (lite|info) baiduboxapp/.test(c);
      },
      isLiteBox: cc11001100_hook("isLiteBox", / (lite|info) baiduboxapp\//i.test(v), "object-key-init"),
      $isLiteBox: function () {
        var a = cc11001100_hook("a", window.navigator || {}, "var-init"),
          c = cc11001100_hook("c", a.userAgent, "var-init");
        return / (lite|info) baiduboxapp\//i.test(c);
      },
      isInfoBox: cc11001100_hook("isInfoBox", / info baiduboxapp\//i.test(v), "object-key-init"),
      $isInfoBox: function () {
        var a = cc11001100_hook("a", window.navigator || {}, "var-init"),
          c = cc11001100_hook("c", a.userAgent, "var-init");
        return / info baiduboxapp\//i.test(c);
      },
      isProBox: cc11001100_hook("isProBox", / pro baiduboxapp\//i.test(v), "object-key-init"),
      $isProBox: function () {
        var a = cc11001100_hook("a", window.navigator || {}, "var-init"),
          c = cc11001100_hook("c", a.userAgent, "var-init");
        return / pro baiduboxapp\//i.test(c);
      },
      isIOS: cc11001100_hook("isIOS", /(iPhone|iPod|iPad)/.test(v), "object-key-init"),
      $isIOS: function () {
        var a = cc11001100_hook("a", window.navigator || {}, "var-init");
        return /(iPhone|iPod|iPad)/.test(a.userAgent);
      },
      isAndroid: cc11001100_hook("isAndroid", /(Android);?[\s\/]+([\d.]+)?/.test(v), "object-key-init"),
      $isAndroid: function () {
        var a = cc11001100_hook("a", window.navigator || {}, "var-init");
        return /(Android);?[\s\/]+([\d.]+)?/.test(a.userAgent);
      },
      getId: function () {
        return b++;
      },
      emptyArr: cc11001100_hook("emptyArr", [], "object-key-init"),
      emptyFn: function () {},
      cleanObj: {},
      byId: function (a) {
        return B.isString(a) ? document.getElementById(a) : a;
      },
      toArray: function (a) {
        return B.emptyArr.slice.call(a);
      },
      $: function (a, c) {
        return c = cc11001100_hook("c", c && 1 === c.nodeType ? c : document, "assign"), B.toArray(c.querySelectorAll(a));
      }
    }, "var-init");
  return "Function,String,Array,Number,RegExp".replace(/[^, ]+/g, function (t) {
    B["is" + t] = cc11001100_hook("B[\"is\" + t]", function (s) {
      return a(s, t);
    }, "assign");
  }), B.isBoolean = cc11001100_hook("B.isBoolean", function (a) {
    return a === !0 || a === !1;
  }, "assign"), B.isObject = cc11001100_hook("B.isObject", function (a) {
    return "object" == typeof a;
  }, "assign"), B.isUndefined = cc11001100_hook("B.isUndefined", function (a) {
    return void 0 === a;
  }, "assign"), B.isWindow = cc11001100_hook("B.isWindow", function (a) {
    return null != a && a == a.window;
  }, "assign"), B.isPlainObject = cc11001100_hook("B.isPlainObject", function (a) {
    return B.isObject(a) && !B.isWindow(a) && Object.getPrototypeOf(a) == Object.prototype;
  }, "assign"), B.cbWithoutCache = cc11001100_hook("B.cbWithoutCache", function (a, c) {
    var b = cc11001100_hook("b", "_bdbox_js_" + B.getId(), "var-init");
    return window[b] = cc11001100_hook("window[b]", function (b) {
      try {
        b = cc11001100_hook("b", B.isString(b) ? JSON.parse(b) : b, "assign");
      } catch (e) {
        console.log("native callback params json parse error");
      }
      a(c && B.isFunction(c) ? c(b) : b);
    }, "assign"), b;
  }, "assign"), B.sdkError = cc11001100_hook("B.sdkError", {
    COMMAND_NOT_EXIST: {
      errCode: cc11001100_hook("errCode", 901, "object-key-init"),
      errMsg: cc11001100_hook("errMsg", "不存在此端能力", "object-key-init")
    },
    NOT_IN_BDBOX: {
      errCode: cc11001100_hook("errCode", 902, "object-key-init"),
      errMsg: cc11001100_hook("errMsg", "手百外无法调用端能力", "object-key-init")
    },
    COMMAND_FAIL: {
      errCode: cc11001100_hook("errCode", 903, "object-key-init"),
      errMsg: cc11001100_hook("errMsg", "端能力调用失败", "object-key-init")
    },
    COMMAND_SUCCESS: {
      errCode: cc11001100_hook("errCode", 0, "object-key-init"),
      errMsg: cc11001100_hook("errMsg", "调用成功", "object-key-init")
    }
  }, "assign"), B;
}), define("@baidu/Boxjs-amd/dist/utils/platform", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getInfoVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getProVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/detect"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "var-init"),
    c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare"), "var-init"),
    b = cc11001100_hook("b", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion"), "var-init"),
    v = cc11001100_hook("v", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getInfoVersion"), "var-init"),
    B = cc11001100_hook("B", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion"), "var-init"),
    j = cc11001100_hook("j", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getProVersion"), "var-init"),
    h = cc11001100_hook("h", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/detect").apply(a), "var-init");
  return {
    versionCompare: cc11001100_hook("versionCompare", c, "object-key-init"),
    isIOS: cc11001100_hook("isIOS", a.isIOS, "object-key-init"),
    isAndroid: cc11001100_hook("isAndroid", a.isAndroid, "object-key-init"),
    os: cc11001100_hook("os", a.isIOS ? "ios" : a.isAndroid ? "android" : "none", "object-key-init"),
    osVersion: cc11001100_hook("osVersion", h.version, "object-key-init"),
    isBox: cc11001100_hook("isBox", a.isBoxApp(), "object-key-init"),
    boxType: cc11001100_hook("boxType", a.isProBox ? "pro" : a.isInfoBox ? "info" : a.isLiteBox ? "lite" : "main", "object-key-init"),
    boxVersion: cc11001100_hook("boxVersion", j() || v() || B() || b(), "object-key-init")
  };
}), define("@baidu/Boxjs-amd/dist/utils/postMessageUser", ["require"], function () {
  return ["swan"];
}), define("@baidu/Boxjs-amd/dist/utils/versionTools", ["require", "@baidu/Boxjs-amd/dist/core/BDPolyfill/filter", "@baidu/Boxjs-amd/dist/core/versionMap", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/utils/platform", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/queryToJson"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/Boxjs-amd/dist/core/BDPolyfill/filter"), "var-init"),
    c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/core/versionMap"), "var-init"),
    b = cc11001100_hook("b", (require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), require("@baidu/Boxjs-amd/dist/utils/platform")), "var-init"),
    v = cc11001100_hook("v", b.versionCompare, "var-init"),
    B = cc11001100_hook("B", b.boxVersion, "var-init"),
    j = cc11001100_hook("j", {}, "var-init");
  return j.queryToJson = cc11001100_hook("j.queryToJson", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/queryToJson"), "assign"), j.platform = cc11001100_hook("j.platform", b.os, "assign"), j.canInvokeNew = cc11001100_hook("j.canInvokeNew", function (a) {
    var h = cc11001100_hook("h", c[a], "var-init"),
      g = cc11001100_hook("g", h.versionRange, "var-init"),
      y = cc11001100_hook("y", j.platform, "var-init"),
      w = cc11001100_hook("w", b.boxType, "var-init");
    if ("main" !== w) y = cc11001100_hook("y", [y, w].join(""), "assign"), g = cc11001100_hook("g", h[y + "VersionRange"], "assign");else if (!g) {
      if (h.notSupport) return !0;
      g = cc11001100_hook("g", h[y + "VersionRange"], "assign");
    }
    var _ = cc11001100_hook("_", g[0], "var-init"),
      P = cc11001100_hook("P", g[1], "var-init"),
      k = cc11001100_hook("k", v(B, _) >= 0, "var-init"),
      O = cc11001100_hook("O", !!P && v(B, P) <= 0, "var-init");
    return !k || P && !O || h.notSupport && !(h.notSupport.indexOf(y) < 0) ? !1 : !0;
  }, "assign"), j.canInvokeOld = cc11001100_hook("j.canInvokeOld", function (c) {
    var h = cc11001100_hook("h", j.platform, "var-init"),
      g = cc11001100_hook("g", a[c], "var-init"),
      y = cc11001100_hook("y", b.boxType, "var-init");
    if (!g) return !1;
    "main" !== y && (h = cc11001100_hook("h", [h, y].join(""), "assign"));
    var w = cc11001100_hook("w", g[h], "var-init");
    if (!w) return !1;
    var _ = cc11001100_hook("_", w.versionRange, "var-init"),
      P = cc11001100_hook("P", !1, "var-init"),
      k = cc11001100_hook("k", "", "var-init"),
      O = cc11001100_hook("O", "", "var-init"),
      C = cc11001100_hook("C", !1, "var-init"),
      S = cc11001100_hook("S", !1, "var-init");
    return !_ || _ && 0 === _.length ? P = cc11001100_hook("P", !0, "assign") : (k = cc11001100_hook("k", _[0], "assign"), O = cc11001100_hook("O", _[1], "assign"), C = cc11001100_hook("C", !!k && v(B, k) >= 0, "assign"), S = cc11001100_hook("S", !O || !!O && v(B, O) <= 0, "assign")), P || S && C ? !0 : !1;
  }, "assign"), j.getWhoCanHandle = cc11001100_hook("j.getWhoCanHandle", function (a) {
    var b = cc11001100_hook("b", c[a], "var-init");
    return b && (b = cc11001100_hook("b", b.v, "assign")), !b && j.canInvokeOld(a) ? "old" : b && j.canInvokeNew(a) ? "new" : b && !j.canInvokeNew(a) && j.canInvokeOld(a) ? "old" : void 0;
  }, "assign"), j;
}), define("@baidu/Boxjs-amd/index", ["require", "@baidu/Boxjs-amd/dist/components/cache/index", "@baidu/Boxjs-amd/dist/components/data/index", "@baidu/Boxjs-amd/dist/components/device/index", "@baidu/Boxjs-amd/dist/components/event/index", "@baidu/Boxjs-amd/dist/components/log/index", "@baidu/Boxjs-amd/dist/components/media/index", "@baidu/Boxjs-amd/dist/components/net/index", "@baidu/Boxjs-amd/dist/components/ui/index", "@baidu/Boxjs-amd/dist/components/view/index", "@baidu/Boxjs-amd/dist/core/BDPolyfill/filter", "@baidu/Boxjs-amd/dist/core/versionMap", "@baidu/Boxjs-amd/dist/core/invoke", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend", "@baidu/Boxjs-amd/dist/utils/platform", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function (require) {
  function a() {
    var a = cc11001100_hook("a", {}, "var-init"),
      c = cc11001100_hook("c", require("@baidu/Boxjs-amd/dist/utils/platform"), "var-init");
    return Object.keys(c).forEach(function (b) {
      var v = cc11001100_hook("v", c[b], "var-init");
      a[b] = cc11001100_hook("a[b]", function () {
        return "versionCompare" === b ? v(arguments[0], arguments[1]) : v;
      }, "assign");
    }), a;
  }
  var c = cc11001100_hook("c", {}, "var-init");
  return c.h5API = cc11001100_hook("c.h5API", {}, "assign"), c.cache = cc11001100_hook("c.cache", require("@baidu/Boxjs-amd/dist/components/cache/index"), "assign"), c.data = cc11001100_hook("c.data", require("@baidu/Boxjs-amd/dist/components/data/index"), "assign"), c.device = cc11001100_hook("c.device", require("@baidu/Boxjs-amd/dist/components/device/index"), "assign"), c.event = cc11001100_hook("c.event", require("@baidu/Boxjs-amd/dist/components/event/index"), "assign"), c.log = cc11001100_hook("c.log", require("@baidu/Boxjs-amd/dist/components/log/index"), "assign"), c.media = cc11001100_hook("c.media", require("@baidu/Boxjs-amd/dist/components/media/index"), "assign"), c.net = cc11001100_hook("c.net", require("@baidu/Boxjs-amd/dist/components/net/index"), "assign"), c.ui = cc11001100_hook("c.ui", require("@baidu/Boxjs-amd/dist/components/ui/index"), "assign"), c.view = cc11001100_hook("c.view", require("@baidu/Boxjs-amd/dist/components/view/index"), "assign"), c.filter = cc11001100_hook("c.filter", require("@baidu/Boxjs-amd/dist/core/BDPolyfill/filter"), "assign"), c.versionMap = cc11001100_hook("c.versionMap", require("@baidu/Boxjs-amd/dist/core/versionMap"), "assign"), c.invoke = cc11001100_hook("c.invoke", require("@baidu/Boxjs-amd/dist/core/invoke"), "assign"), c.extend = cc11001100_hook("c.extend", require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend"), "assign"), c.platform = cc11001100_hook("c.platform", require("@baidu/Boxjs-amd/dist/utils/platform"), "assign"), c.$ = cc11001100_hook("c.$", require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), "assign"), c.platform = cc11001100_hook("c.platform", a(), "assign"), c;
}), define("@baidu/Boxjs-amd", ["@baidu/Boxjs-amd/index"], function (mod) {
  return mod;
});