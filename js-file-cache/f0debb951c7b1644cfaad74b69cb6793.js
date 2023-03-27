var __createBinding = cc11001100_hook("__createBinding", this && this.__createBinding || (Object.create ? function (o, m, a, c) {
    void 0 === c && (c = cc11001100_hook("c", a, "assign")), Object.defineProperty(o, c, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return m[a];
      }
    });
  } : function (o, m, a, c) {
    void 0 === c && (c = cc11001100_hook("c", a, "assign")), o[c] = cc11001100_hook("o[c]", m[a], "assign");
  }), "var-init"),
  __exportStar = cc11001100_hook("__exportStar", this && this.__exportStar || function (m, exports) {
    for (var p in m) "default" === p || Object.prototype.hasOwnProperty.call(exports, p) || __createBinding(exports, m, p);
  }, "var-init"),
  __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": cc11001100_hook("default", mod, "object-key-init")
    };
  }, "var-init");
define("@baidu/invoke-box/index", ["require", "exports", "@baidu/invoke-box/src/invoke", "@baidu/invoke-box/src/getScheme", "@baidu/invoke-box/src/getControlByPos", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils", "@baidu/wise-invoke-popup", "@baidu/wise-invoke-panel", "@baidu/wise-invoke-prompt"], function (require, exports, a, c, v, h, b) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.MODE = cc11001100_hook("exports.MODE", exports.APP = cc11001100_hook("exports.APP", exports.getControlByPos = cc11001100_hook("exports.getControlByPos", exports.getScheme = cc11001100_hook("exports.getScheme", exports.invoke = cc11001100_hook("exports.invoke", exports.renderPrompt = cc11001100_hook("exports.renderPrompt", exports.renderPanel = cc11001100_hook("exports.renderPanel", exports.renderPopup = cc11001100_hook("exports.renderPopup", void 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), a = cc11001100_hook("a", __importDefault(a), "assign"), c = cc11001100_hook("c", __importDefault(c), "assign"), v = cc11001100_hook("v", __importDefault(v), "assign"), exports.invoke = cc11001100_hook("exports.invoke", a.default, "assign"), exports.getScheme = cc11001100_hook("exports.getScheme", c.default, "assign"), exports.getControlByPos = cc11001100_hook("exports.getControlByPos", v.default, "assign"), Object.defineProperty(exports, "APP", {
    enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
    get: function () {
      return h.APP;
    }
  }), Object.defineProperty(exports, "MODE", {
    enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
    get: function () {
      return h.MODE;
    }
  }), __exportStar(b, exports), exports.renderPopup = cc11001100_hook("exports.renderPopup", require("@baidu/wise-invoke-popup"), "assign"), exports.renderPanel = cc11001100_hook("exports.renderPanel", require("@baidu/wise-invoke-panel"), "assign"), exports.renderPrompt = cc11001100_hook("exports.renderPrompt", require("@baidu/wise-invoke-prompt"), "assign");
}), define("@baidu/invoke-box/src/base64", ["require", "exports"], function (require, exports) {
  "use strict";

  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return window.btoa(a);
    } catch (e) {
      a = cc11001100_hook("a", String(a), "assign");
      for (var c, h, b, k, i = cc11001100_hook("i", 0, "var-init"), g = cc11001100_hook("g", "", "var-init"), _ = cc11001100_hook("_", a.length % 3, "var-init"); i < a.length;) {
        if ((h = cc11001100_hook("h", a.charCodeAt(i++), "assign")) > 255 || (b = cc11001100_hook("b", a.charCodeAt(i++), "assign")) > 255 || (k = cc11001100_hook("k", a.charCodeAt(i++), "assign")) > 255) throw new TypeError('Failed to execute "btoa" on "Window": The string to be encoded contains characters outside of the Latin1 range.');
        c = cc11001100_hook("c", h << 16 | b << 8 | k, "assign"), g += cc11001100_hook("g", v.charAt(c >> 18 & 63) + v.charAt(c >> 12 & 63) + v.charAt(c >> 6 & 63) + v.charAt(63 & c), "assign");
      }
      return _ ? g.slice(0, _ - 3) + "===".substring(_) : g;
    }
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", "", "var-init");
    try {
      c = cc11001100_hook("c", window.atob(a), "assign");
    } catch (e) {
      if (a = cc11001100_hook("a", String(a).replace(/[\t\n\f\r ]+/g, ""), "assign"), !h.test(a)) throw new TypeError('Failed to execute "atob" on "Window": The string to be decoded is not correctly encoded.');
      a += cc11001100_hook("a", "==".slice(2 - (3 & a.length)), "assign");
      for (var b, k, g, i = cc11001100_hook("i", 0, "var-init"); i < a.length;) b = cc11001100_hook("b", v.indexOf(a.charAt(i++)) << 18 | v.indexOf(a.charAt(i++)) << 12 | (k = cc11001100_hook("k", v.indexOf(a.charAt(i++)), "assign")) << 6 | (g = cc11001100_hook("g", v.indexOf(a.charAt(i++)), "assign")), "assign"), c += cc11001100_hook("c", 64 === k ? String.fromCharCode(b >> 16 & 255) : 64 === g ? String.fromCharCode(b >> 16 & 255, b >> 8 & 255) : String.fromCharCode(b >> 16 & 255, b >> 8 & 255, 255 & b), "assign");
    }
    return c;
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.atob = cc11001100_hook("exports.atob", exports.btoa = cc11001100_hook("exports.btoa", void 0, "assign"), "assign");
  var v = cc11001100_hook("v", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", "var-init"),
    h = cc11001100_hook("h", /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, "var-init");
  exports.btoa = cc11001100_hook("exports.btoa", a, "assign"), exports.atob = cc11001100_hook("exports.atob", c, "assign");
}), define("@baidu/invoke-box/src/consts", ["require", "exports", "@baidu/invoke-box/src/base64"], function (require, exports, a) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.XCX = cc11001100_hook("exports.XCX", exports.PRIVATE_SCENE = cc11001100_hook("exports.PRIVATE_SCENE", exports.ANDROID_MARKET = cc11001100_hook("exports.ANDROID_MARKET", exports.SCENE = cc11001100_hook("exports.SCENE", exports.LITE_ULINK = cc11001100_hook("exports.LITE_ULINK", exports.LITE_STORE_POPUP = cc11001100_hook("exports.LITE_STORE_POPUP", exports.LITE_STORE = cc11001100_hook("exports.LITE_STORE", exports.APP_STORE_POPUP = cc11001100_hook("exports.APP_STORE_POPUP", exports.APP_STORE = cc11001100_hook("exports.APP_STORE", exports.APP_INFO = cc11001100_hook("exports.APP_INFO", exports.BACK = cc11001100_hook("exports.BACK", exports.SUCCESS = cc11001100_hook("exports.SUCCESS", exports.FAIL = cc11001100_hook("exports.FAIL", exports.MODE = cc11001100_hook("exports.MODE", exports.APP = cc11001100_hook("exports.APP", void 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), exports.APP = cc11001100_hook("exports.APP", {
    BD_LITE: cc11001100_hook("BD_LITE", 1, "object-key-init"),
    CRAFT: cc11001100_hook("CRAFT", 2, "object-key-init"),
    BD: cc11001100_hook("BD", 3, "object-key-init"),
    LITE: cc11001100_hook("LITE", 4, "object-key-init"),
    IQY: cc11001100_hook("IQY", 5, "object-key-init"),
    HAOKAN: cc11001100_hook("HAOKAN", 6, "object-key-init"),
    TIEBA: cc11001100_hook("TIEBA", 7, "object-key-init"),
    KDD: cc11001100_hook("KDD", 8, "object-key-init"),
    BABY: cc11001100_hook("BABY", 9, "object-key-init"),
    QUANMIN: cc11001100_hook("QUANMIN", 10, "object-key-init"),
    MAP: cc11001100_hook("MAP", 12, "object-key-init"),
    NM: cc11001100_hook("NM", 13, "object-key-init"),
    WEIBO: cc11001100_hook("WEIBO", 14, "object-key-init"),
    FLOW: cc11001100_hook("FLOW", 15, "object-key-init"),
    LIBRARY: cc11001100_hook("LIBRARY", 16, "object-key-init"),
    TOMAS: cc11001100_hook("TOMAS", 17, "object-key-init"),
    WEPOD: cc11001100_hook("WEPOD", 18, "object-key-init")
  }, "assign"), exports.MODE = cc11001100_hook("exports.MODE", {
    INDEX: cc11001100_hook("INDEX", 1, "object-key-init"),
    OPEN_URL: cc11001100_hook("OPEN_URL", 3, "object-key-init"),
    WISE_OPEN_URL: cc11001100_hook("WISE_OPEN_URL", 4, "object-key-init"),
    CAMERA: cc11001100_hook("CAMERA", 5, "object-key-init"),
    XCX: cc11001100_hook("XCX", 6, "object-key-init"),
    DOWNLOAD_PAGE: cc11001100_hook("DOWNLOAD_PAGE", 7, "object-key-init"),
    VOICE: cc11001100_hook("VOICE", 8, "object-key-init"),
    EASY_BROWER: cc11001100_hook("EASY_BROWER", 9, "object-key-init"),
    NA_VIDEO: cc11001100_hook("NA_VIDEO", 10, "object-key-init"),
    TTS: cc11001100_hook("TTS", 12, "object-key-init"),
    MISSION: cc11001100_hook("MISSION", 13, "object-key-init")
  }, "assign"), exports.FAIL = cc11001100_hook("exports.FAIL", {
    INVOKE_URL: cc11001100_hook("INVOKE_URL", 1, "object-key-init"),
    DEFAULT_URL: cc11001100_hook("DEFAULT_URL", 2, "object-key-init"),
    APPSTORE: cc11001100_hook("APPSTORE", 3, "object-key-init"),
    NO_CHANGE: cc11001100_hook("NO_CHANGE", 4, "object-key-init"),
    NA_URL: cc11001100_hook("NA_URL", 5, "object-key-init"),
    INVOKE_XCX: cc11001100_hook("INVOKE_XCX", 6, "object-key-init"),
    DOWNLOAD_URL: cc11001100_hook("DOWNLOAD_URL", 7, "object-key-init")
  }, "assign"), exports.SUCCESS = cc11001100_hook("exports.SUCCESS", {
    INVOKE_URL: cc11001100_hook("INVOKE_URL", 1, "object-key-init"),
    DEFAULT_URL: cc11001100_hook("DEFAULT_URL", 2, "object-key-init"),
    NO_CHANGE: cc11001100_hook("NO_CHANGE", 3, "object-key-init"),
    INVOKE_XCX: cc11001100_hook("INVOKE_XCX", 4, "object-key-init")
  }, "assign"), exports.BACK = cc11001100_hook("exports.BACK", {
    NONE: cc11001100_hook("NONE", 4, "object-key-init"),
    QUERY: cc11001100_hook("QUERY", 1, "object-key-init"),
    URL: cc11001100_hook("URL", 2, "object-key-init"),
    SCHEME: cc11001100_hook("SCHEME", 3, "object-key-init")
  }, "assign"), exports.APP_INFO = cc11001100_hook("exports.APP_INFO", {
    1: {
      scheme: cc11001100_hook("scheme", "baiduboxapp", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.searchbox", "object-key-init")
    },
    2: {
      scheme: cc11001100_hook("scheme", "baiduboxapp", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.searchbox", "object-key-init")
    },
    3: {
      scheme: cc11001100_hook("scheme", "baiduboxapp", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.searchbox", "object-key-init")
    },
    4: {
      scheme: cc11001100_hook("scheme", "baiduboxlite", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.searchbox.lite", "object-key-init")
    },
    5: {
      scheme: cc11001100_hook("scheme", "iqiyi", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.qiyi.video", "object-key-init")
    },
    6: {
      scheme: cc11001100_hook("scheme", "baiduhaokan", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.haokan", "object-key-init")
    },
    7: {
      scheme: cc11001100_hook("scheme", "com.baidu.tieba", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.tieba", "object-key-init")
    },
    8: {
      scheme: cc11001100_hook("scheme", "baiduboxmission", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.searchbox.mission", "object-key-init")
    },
    9: {
      scheme: cc11001100_hook("scheme", "askmybaby", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.mbaby", "object-key-init")
    },
    10: {
      scheme: cc11001100_hook("scheme", "bdminivideo", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.minivideo", "object-key-init")
    },
    12: {
      scheme: cc11001100_hook("scheme", "baidumap", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.BaiduMap", "object-key-init")
    },
    13: {
      scheme: cc11001100_hook("scheme", "lemon", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.lemon", "object-key-init")
    },
    14: {
      scheme: cc11001100_hook("scheme", "sinaweibo", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.sina.weibo", "object-key-init")
    },
    15: {
      scheme: cc11001100_hook("scheme", "flowlocal", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.flowsns.flow", "object-key-init")
    },
    16: {
      scheme: cc11001100_hook("scheme", "bdwenku", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.wenku", "object-key-init")
    },
    17: {
      scheme: cc11001100_hook("scheme", "tomas", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.searchbox.tomas", "object-key-init")
    },
    18: {
      scheme: cc11001100_hook("scheme", "bdwepod", "object-key-init"),
      pkg: cc11001100_hook("pkg", "com.baidu.wepod", "object-key-init")
    }
  }, "assign"), exports.APP_STORE = cc11001100_hook("exports.APP_STORE", "https://apps.apple.com/cn/app/id382201985", "assign"), exports.APP_STORE_POPUP = cc11001100_hook("exports.APP_STORE_POPUP", "https://itunes.apple.com/cn/app/id382201985", "assign"), exports.LITE_STORE = cc11001100_hook("exports.LITE_STORE", "https://apps.apple.com/cn/app/id1281873118", "assign"), exports.LITE_STORE_POPUP = cc11001100_hook("exports.LITE_STORE_POPUP", "https://itunes.apple.com/cn/app/id1281873118", "assign"), exports.LITE_ULINK = cc11001100_hook("exports.LITE_ULINK", "https://wakeup.baidu.com/baiduboxlite/scheme?scheme=", "assign"), exports.SCENE = cc11001100_hook("exports.SCENE", {
    PRIVATE: cc11001100_hook("PRIVATE", 1, "object-key-init")
  }, "assign"), exports.ANDROID_MARKET = cc11001100_hook("exports.ANDROID_MARKET", {
    xiaomi: {
      reg: cc11001100_hook("reg", /\(.*Android.*(MI|Mi|Redmi).*\)/, "object-key-init"),
      scheme: cc11001100_hook("scheme", "mimarket://details?id=${0}&back=true", "object-key-init")
    },
    samsung: {
      reg: cc11001100_hook("reg", /\(.*Android.*(SAMSUNG|SM-).*\)/, "object-key-init"),
      scheme: cc11001100_hook("scheme", "samsungapps://ProductDetail/${0}", "object-key-init")
    },
    huawei: {
      reg: cc11001100_hook("reg", /\(.*Android.*(HUAWEI|HONOR).*\)/i, "object-key-init"),
      scheme: cc11001100_hook("scheme", "appmarket://details?id=${0}", "object-key-init")
    },
    oppo: {
      reg: cc11001100_hook("reg", /.*(OPPO|heytap|p[a-z][a-z][a-z]\d0).*/i, "object-key-init"),
      scheme: cc11001100_hook("scheme", "oppomarket://details?packagename=${0}", "object-key-init"),
      downloadFirst: cc11001100_hook("downloadFirst", !0, "object-key-init")
    },
    vivo: {
      reg: cc11001100_hook("reg", /.*Android.*(vivo|v\d\d\d\d[a-z]?a).*/i, "object-key-init"),
      scheme: cc11001100_hook("scheme", "vivomarket://details?id=${0}", "object-key-init")
    }
  }, "assign"), exports.PRIVATE_SCENE = cc11001100_hook("exports.PRIVATE_SCENE", {
    CONTINUE_INVOKE: cc11001100_hook("CONTINUE_INVOKE", 1, "object-key-init"),
    INVOKE_URL: cc11001100_hook("INVOKE_URL", 2, "object-key-init"),
    DEFAULT_URL: cc11001100_hook("DEFAULT_URL", 3, "object-key-init"),
    NO_CHANGE: cc11001100_hook("NO_CHANGE", 4, "object-key-init")
  }, "assign");
  var c = cc11001100_hook("c", a.atob("c3dhbg=="), "var-init"),
    v = cc11001100_hook("v", a.atob("c3dhbnViYw=="), "var-init");
  exports.XCX = cc11001100_hook("exports.XCX", {
    PREFIX: cc11001100_hook("PREFIX", c, "object-key-init"),
    TOKEN: cc11001100_hook("TOKEN", v, "object-key-init")
  }, "assign");
}), define("@baidu/invoke-box/src/getControlByPos", ["require", "exports"], function (require, exports) {
  "use strict";

  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return "number" == typeof a && c && c.rule && +c.rule[a] && c.control && c.control[a] ? c.control[a] : void 0;
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.default = cc11001100_hook("exports.default", a, "assign");
}), define("@baidu/invoke-box/src/getScheme", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils"], function (require, exports, a, c) {
  "use strict";

  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.matrix || (a.matrix = cc11001100_hook("a.matrix", "main", "assign")), y[a.matrix] || y.main;
  }
  function h(c, v, h) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    return c.iosScheme && (c.iosScheme = cc11001100_hook("c.iosScheme", v + "&simple=1&next=" + encodeURIComponent(c.iosScheme), "assign")), h && h === a.APP.BD ? c.androidCommand && "string" == typeof c.androidCommand && (c.androidCommand = cc11001100_hook("c.androidCommand", v + "&next=" + encodeURIComponent(c.androidCommand), "assign")) : c.androidCommand && "string" == typeof c.androidCommand && (c.androidCommand = cc11001100_hook("c.androidCommand", v + "&next=" + encodeURIComponent(c.androidCommand), "assign")), c;
  }
  function b(c, v, h, b) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return c && c === a.BACK.NONE ? a.BACK.NONE : c && c === a.BACK.QUERY && v ? a.BACK.QUERY : c && c === a.BACK.URL && h ? a.BACK.URL : c && c === a.BACK.SCHEME && b ? a.BACK.SCHEME : v && a.BACK.QUERY || h && a.BACK.URL || b && a.BACK.SCHEME;
  }
  function k(v, k, g) {
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("k", k, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    var _ = cc11001100_hook("_", k.backQuery, "var-init"),
      w = cc11001100_hook("w", "object" == typeof k.backQueryMore ? c.stringifyQuery(k.backQueryMore) : "", "var-init"),
      P = cc11001100_hook("P", k.backURL, "var-init"),
      O = cc11001100_hook("O", k.backScheme, "var-init"),
      S = cc11001100_hook("S", +k.backType, "var-init"),
      I = cc11001100_hook("I", b(S, _, P, O), "var-init");
    if (I === a.BACK.QUERY) {
      var U = cc11001100_hook("U", "" + g + "://v1/browser/open?url=" + encodeURIComponent("search://" + encodeURIComponent(_) + (w ? "?" + w : "")) + "&newwindow=0&upgrade=1&append=1&fromwise=1", "var-init");
      return h(v, U);
    }
    if (I === a.BACK.URL) {
      var E = cc11001100_hook("E", "" + g + "://v1/browser/open?url=" + encodeURIComponent(P) + "&newwindow=0&upgrade=1&append=1&fromwise=1", "var-init");
      return h(v, E, k.app);
    }
    return I === a.BACK.SCHEME && g === y.main ? h(v, O, k.app) : v;
  }
  function g(h, b, g) {
    cc11001100_hook("h", h, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    if (h) {
      b = cc11001100_hook("b", b || {}, "assign"), g = cc11001100_hook("g", g || v(b), "assign");
      var y = cc11001100_hook("y", ("mission" === b.matrix || "lite" === b.matrix, {}), "var-init"),
        w = cc11001100_hook("w", b.ext, "var-init"),
        P = cc11001100_hook("P", void 0 === w ? {} : w, "var-init"),
        O = cc11001100_hook("O", b.invokeURL || "", "var-init");
      if (P.isFeatureNeedBack) return _(b, g);
      switch (+h) {
        case a.MODE.INDEX:
          y.iosScheme = cc11001100_hook("y.iosScheme", y.androidCommand = cc11001100_hook("y.androidCommand", "baiduboxapp://v11/appTab/select?item=home&params=" + encodeURIComponent(JSON.stringify({
            ceiling: cc11001100_hook("ceiling", "0", "object-key-init")
          })), "assign"), "assign");
          break;
        case a.MODE.OPEN_URL:
          var S = cc11001100_hook("S", encodeURIComponent(O), "var-init"),
            I = cc11001100_hook("I", g + "://v1/browser/open?url=" + S + "&newwindow=0&simple=1&fromwise=1", "var-init");
          b.privateTips && (I += cc11001100_hook("I", "&privateTips=" + encodeURIComponent(b.privateTips), "assign")), y.iosScheme = cc11001100_hook("y.iosScheme", y.androidCommand = cc11001100_hook("y.androidCommand", I, "assign"), "assign");
          break;
        case a.MODE.CAMERA:
          var U = cc11001100_hook("U", JSON.stringify(b.jsup || {}), "var-init"),
            E = cc11001100_hook("E", b.searchType && b.searchType.toUpperCase() || "GENERAL", "var-init"),
            C = cc11001100_hook("C", b.searchSubType || E, "var-init"),
            A = cc11001100_hook("A", b.cameraPosition || 0, "var-init");
          y.iosScheme = cc11001100_hook("y.iosScheme", g + "://imagesearch?action=imagesearch&args=" + encodeURIComponent(["source_app=BROWSER", "referer=" + encodeURIComponent(window.location.href), "jsup=" + U, "imageSearch_type=" + E, "imageSearch_subtype=" + C, "cameraPosition=" + A].join("&")), "assign"), y.androidCommand = cc11001100_hook("y.androidCommand", g + "://browser/imageSearch?&params=" + encodeURIComponent(JSON.stringify({
            from: cc11001100_hook("from", b.cameraFrom || 27, "object-key-init"),
            imageSearch_type: cc11001100_hook("imageSearch_type", E, "object-key-init"),
            imageSearch_mode: cc11001100_hook("imageSearch_mode", C, "object-key-init"),
            jsup: cc11001100_hook("jsup", U, "object-key-init")
          })), "assign");
          break;
        case a.MODE.XCX:
          if (!b.appKey) throw "Missing required parameter(s): appKey!";
          var R = cc11001100_hook("R", "" + g + "://" + a.XCX.PREFIX + "/" + b.appKey + O + (O.indexOf("?") < 0 ? "?" : "") + (/\?\S+/.test(O) ? "&" : "") + "_baiduboxapp=" + encodeURIComponent(JSON.stringify({
            from: cc11001100_hook("from", b.xcxFrom || "", "object-key-init"),
            ext: cc11001100_hook("ext", c.extend({
              token: cc11001100_hook("token", a.XCX.TOKEN, "object-key-init"),
              url: cc11001100_hook("url", O, "object-key-init")
            }, b.extLogContent || {}), "object-key-init")
          })) + "&upgrade=0&fromwise=1", "var-init");
          y.iosScheme = cc11001100_hook("y.iosScheme", y.androidCommand = cc11001100_hook("y.androidCommand", R, "assign"), "assign");
          break;
        case a.MODE.VOICE:
          var L = cc11001100_hook("L", "baiduboxapp://voicesearch?opennewwindow&caller=wise_search&args=", "var-init"),
            D = cc11001100_hook("D", b.browserid + "|" + b.browserVersion, "var-init"),
            N = cc11001100_hook("N", ["source_app=" + D, "referer=" + window.location.href].join("&"), "var-init");
          L += cc11001100_hook("L", encodeURIComponent(N), "assign"), y.iosScheme = cc11001100_hook("y.iosScheme", L, "assign"), y.androidCommand = cc11001100_hook("y.androidCommand", 'baiduboxapp://speech/startVoiceSearch?&params={"voiceSource":"' + (b.voiceSource || "home_naver_long") + '"}', "assign");
          break;
        case a.MODE.EASY_BROWER:
          var B = cc11001100_hook("B", {
            type: cc11001100_hook("type", "hybrid", "object-key-init"),
            upgrade: cc11001100_hook("upgrade", "1", "object-key-init"),
            tpl_id: cc11001100_hook("tpl_id", "landing_app.html", "object-key-init"),
            newbrowser: cc11001100_hook("newbrowser", "1", "object-key-init")
          }, "var-init");
          c.extend(B, b.easyBrowerParams);
          var T = cc11001100_hook("T", ("hybrid" === B.type ? "&ch_url=" : "&url=") + encodeURIComponent(O), "var-init"),
            M = cc11001100_hook("M", "" + g + "://v1/easybrowse/" + ("hybrid" === B.type ? "hybrid" : "open") + "?upgrade=" + B.upgrade + "&tpl_id=" + B.tpl_id + "&context=" + encodeURIComponent(JSON.stringify(B.context || "")) + T + "&commentInfo=" + encodeURIComponent(JSON.stringify(B.commentInfo || "")) + "&newbrowser=" + B.newbrowser + "&style=" + JSON.stringify(B.style || "") + "&type=" + B.type + "&slog=" + encodeURIComponent(JSON.stringify(B.slog || "")), "var-init");
          y.iosScheme = cc11001100_hook("y.iosScheme", y.androidCommand = cc11001100_hook("y.androidCommand", M, "assign"), "assign");
          break;
        case a.MODE.NA_VIDEO:
          if (!b.naVideoParams) throw "Missing required parameter(s): naVideoParams!";
          var F = cc11001100_hook("F", b.naVideoParams, "var-init"),
            j = cc11001100_hook("j", F.videoInfo, "var-init");
          if (j && j.ext && j.ext.clarityUrl && j.ext.clarityUrl[0] && j.ext.clarityUrl[0].url) try {
            F.videoInfo.ext.clarityUrl[0].url = cc11001100_hook("F.videoInfo.ext.clarityUrl[0].url", decodeURIComponent(j.ext.clarityUrl[0].url), "assign");
          } catch (K) {}
          var H = cc11001100_hook("H", "" + g + "://v8/video/invokeVideoLandingPage?params=" + encodeURIComponent(JSON.stringify(F)), "var-init");
          y.iosScheme = cc11001100_hook("y.iosScheme", y.androidCommand = cc11001100_hook("y.androidCommand", H, "assign"), "assign");
      }
      return y = cc11001100_hook("y", k(y, b, g), "assign");
    }
  }
  function _(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", a.featureScheme, "var-init"),
      h = cc11001100_hook("h", {
        iosScheme: cc11001100_hook("iosScheme", v, "object-key-init"),
        androidCommand: cc11001100_hook("androidCommand", v, "object-key-init")
      }, "var-init");
    return h = cc11001100_hook("h", k(h, a, c), "assign");
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.dealBackScheme = cc11001100_hook("exports.dealBackScheme", exports.getBackType = cc11001100_hook("exports.getBackType", exports.addBackScheme = cc11001100_hook("exports.addBackScheme", exports.getProtocolHeader = cc11001100_hook("exports.getProtocolHeader", void 0, "assign"), "assign"), "assign"), "assign");
  var y = cc11001100_hook("y", {
    main: cc11001100_hook("main", "baiduboxapp", "object-key-init"),
    lite: cc11001100_hook("lite", "baiduboxlite", "object-key-init"),
    info: cc11001100_hook("info", "baiduinfoapp", "object-key-init"),
    pro: cc11001100_hook("pro", "baiduboxpro", "object-key-init"),
    mission: cc11001100_hook("mission", "baiduboxmission", "object-key-init")
  }, "var-init");
  exports.getProtocolHeader = cc11001100_hook("exports.getProtocolHeader", v, "assign"), exports.addBackScheme = cc11001100_hook("exports.addBackScheme", h, "assign"), exports.getBackType = cc11001100_hook("exports.getBackType", b, "assign"), exports.dealBackScheme = cc11001100_hook("exports.dealBackScheme", k, "assign"), exports.default = cc11001100_hook("exports.default", g, "assign");
});
var __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": cc11001100_hook("default", mod, "object-key-init")
  };
}, "var-init");
define("@baidu/invoke-box/src/getStaticWordIntoClipBoard", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/getScheme", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/base64"], function (require, exports, a, c, v, h) {
  "use strict";

  function b(b, k, g, _) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("k", k, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("_", _, "function-parameter");
    if (+b.fail === a.FAIL.APPSTORE) {
      var y;
      y = cc11001100_hook("y", "string" == typeof b.iosScheme || "string" == typeof b.androidCommand ? {
        iosScheme: cc11001100_hook("iosScheme", b.iosScheme, "object-key-init"),
        androidCommand: cc11001100_hook("androidCommand", b.androidCommand, "object-key-init")
      } : c.default(b.mode, v.extend({}, b, {
        backURL: cc11001100_hook("backURL", "", "object-key-init"),
        backQuery: cc11001100_hook("backQuery", "", "object-key-init")
      })), "assign");
      var w = cc11001100_hook("w", y.iosScheme, "var-init");
      v.ua.isAndroid() && "string" == typeof y.androidCommand && (w = cc11001100_hook("w", y.androidCommand, "assign"));
      var P = cc11001100_hook("P", {
        p1: cc11001100_hook("p1", _, "object-key-init"),
        p2: cc11001100_hook("p2", k, "object-key-init"),
        p3: cc11001100_hook("p3", g, "object-key-init"),
        p4: cc11001100_hook("p4", v.getTokenP4(b.browserid), "object-key-init"),
        scheme: cc11001100_hook("scheme", w.replace(/baidubox.*\:\/\//, ""), "object-key-init")
      }, "var-init");
      b.stoken && (P.ngis = cc11001100_hook("P.ngis", b.stoken, "assign"));
      var O = cc11001100_hook("O", JSON.stringify(P), "var-init");
      O = cc11001100_hook("O", b.mode === a.MODE.MISSION ? "3.s:/^SaOfBQ4esC^" + h.btoa(O) : "1.fu:/" + (b.stoken ? "^vYLe8x7PQw^" : "^quCYkpfnQq^") + h.btoa(O), "assign"), v.copyToClipBoard(O);
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.staticWordIntoClipBoard = cc11001100_hook("exports.staticWordIntoClipBoard", void 0, "assign"), c = cc11001100_hook("c", __importDefault(c), "assign"), exports.staticWordIntoClipBoard = cc11001100_hook("exports.staticWordIntoClipBoard", b, "assign");
});
var __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": cc11001100_hook("default", mod, "object-key-init")
  };
}, "var-init");
define("@baidu/invoke-box/src/invoke", ["require", "exports", "@baidu/invoke-box/src/invokeTomas", "@baidu/invoke-box/src/invokeHaoKan", "@baidu/invoke-box/src/invokeHaoKanNew", "@baidu/invoke-box/src/invokeBD", "@baidu/invoke-box/src/invokeBaby", "@baidu/invoke-box/src/invokeQuanmin", "@baidu/invoke-box/src/invokeMap", "@baidu/invoke-box/src/invokeNingMeng", "@baidu/invoke-box/src/invokeWeibo", "@baidu/invoke-box/src/invokeFlow", "@baidu/invoke-box/src/invokeTiebaNew", "@baidu/invoke-box/src/invokeWeiboNew", "@baidu/invoke-box/src/invokeIQYNew", "@baidu/invoke-box/src/invokeLibraryNew", "@baidu/invoke-box/src/invokeWepod", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils"], function (require, exports, a, c, v, h, b, k, g, _, y, w, P, O, S, I, U, E, C) {
  "use strict";

  function A(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a) {
      var c = cc11001100_hook("c", {
        invoke_url: cc11001100_hook("invoke_url", "invokeURL", "object-key-init"),
        default_url: cc11001100_hook("default_url", "defaultURL", "object-key-init"),
        appkey: cc11001100_hook("appkey", "appKey", "object-key-init"),
        app_multi: cc11001100_hook("app_multi", "appMulti", "object-key-init"),
        activity_id: cc11001100_hook("activity_id", "activityId", "object-key-init"),
        light_store: cc11001100_hook("light_store", "lightStore", "object-key-init")
      }, "var-init");
      for (var v in c) c.hasOwnProperty(v) && a[v] && (a[c[v]] = cc11001100_hook("a[c[v]]", a[v], "assign"));
    }
  }
  function R(C, A) {
    cc11001100_hook("C", C, "function-parameter");
    cc11001100_hook("A", A, "function-parameter");
    var R = function () {
      return void 0;
    };
    switch (+C.app) {
      case E.APP.CRAFT:
        break;
      case E.APP.IQY:
        S.default(C);
        break;
      case E.APP.LITE:
        h.default(C, A);
        break;
      case E.APP.HAOKAN:
        C.ext && C.ext.isNew ? v.default(C) : c.default(C);
        break;
      case E.APP.TIEBA:
        P.default(C);
        break;
      case E.APP.KDD:
        h.default(C, A);
        break;
      case E.APP.BABY:
        b.default(C);
        break;
      case E.APP.QUANMIN:
        k.default(C);
        break;
      case E.APP.MAP:
        g.default(C);
        break;
      case E.APP.NM:
        _.default(C);
        break;
      case E.APP.WEIBO:
        (R = cc11001100_hook("R", C.ext && C.ext.isNew ? O.default : y.default, "assign"))(C);
        break;
      case E.APP.FLOW:
        w.default(C);
        break;
      case E.APP.LIBRARY:
        I.default(C);
        break;
      case E.APP.TOMAS:
        a.default(C);
        break;
      case E.APP.WEPOD:
        U.default(C);
        break;
      default:
        h.default(C, A);
    }
  }
  function L(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a && "object" == typeof a) if (a.isPrivate = cc11001100_hook("a.isPrivate", C.isPrivateMode(), "assign"), a.app = cc11001100_hook("a.app", a.app ? +a.app : "", "assign"), a.mode = cc11001100_hook("a.mode", a.mode ? +a.mode : "", "assign"), a.fail = cc11001100_hook("a.fail", a.fail ? +a.fail : "", "assign"), a.success = cc11001100_hook("a.success", a.success ? +a.success : "", "assign"), a.ext = cc11001100_hook("a.ext", C.parseJson(a.ext), "assign"), a.scene = cc11001100_hook("a.scene", C.parseJson(a.invoke_scene), "assign"), A(a), A(a.ext), a.appMulti) {
      for (var v = cc11001100_hook("v", a.appMulti.split("_"), "var-init"), h = cc11001100_hook("h", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < v.length; i++) {
        var b = cc11001100_hook("b", v[i].split(":"), "var-init");
        h.push(C.extend({}, a, {
          app: cc11001100_hook("app", b[0] ? +b[0] : "", "object-key-init"),
          mode: cc11001100_hook("mode", b[1] ? +b[1] : "", "object-key-init")
        }));
      }
      if (h[1] && (h[0].fail = cc11001100_hook("h[0].fail", 4, "assign")), R(h[0], c), h[1]) {
        C.extend(h[1], a.ext);
        var k = cc11001100_hook("k", Date.now(), "var-init"),
          g = cc11001100_hook("g", a.waitTime || 100, "var-init");
        setTimeout(function () {
          Date.now() - k < g + 200 && R(h[1], c);
        }, g);
      }
    } else {
      if (C.extend(a, a.ext), C.isBox()) {
        var _ = cc11001100_hook("_", C.parseJson(a.bdParams), "var-init");
        C.extend(a, _);
      }
      R(a, c);
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.invokeApp = cc11001100_hook("exports.invokeApp", exports.transCamel = cc11001100_hook("exports.transCamel", void 0, "assign"), "assign"), a = cc11001100_hook("a", __importDefault(a), "assign"), c = cc11001100_hook("c", __importDefault(c), "assign"), v = cc11001100_hook("v", __importDefault(v), "assign"), h = cc11001100_hook("h", __importDefault(h), "assign"), b = cc11001100_hook("b", __importDefault(b), "assign"), k = cc11001100_hook("k", __importDefault(k), "assign"), g = cc11001100_hook("g", __importDefault(g), "assign"), _ = cc11001100_hook("_", __importDefault(_), "assign"), y = cc11001100_hook("y", __importDefault(y), "assign"), w = cc11001100_hook("w", __importDefault(w), "assign"), P = cc11001100_hook("P", __importDefault(P), "assign"), O = cc11001100_hook("O", __importDefault(O), "assign"), S = cc11001100_hook("S", __importDefault(S), "assign"), I = cc11001100_hook("I", __importDefault(I), "assign"), U = cc11001100_hook("U", __importDefault(U), "assign"), exports.transCamel = cc11001100_hook("exports.transCamel", A, "assign"), exports.invokeApp = cc11001100_hook("exports.invokeApp", R, "assign"), exports.default = cc11001100_hook("exports.default", L, "assign");
});
var __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": cc11001100_hook("default", mod, "object-key-init")
  };
}, "var-init");
define("@baidu/invoke-box/src/invokeBD", ["require", "exports", "@baidu/invoke-box/src/getScheme", "@baidu/invoke-box/src/getStaticWordIntoClipBoard", "@baidu/invoke-box/src/openXCX", "@baidu/invoke-box/src/invokeMarket", "@baidu/invoke-box/src/scene", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/logargs"], function (require, exports, a, c, v, h, b, k, g, _) {
  "use strict";

  function y(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.successCallback && "function" == typeof a.successCallback && a.successCallback();
    var c;
    switch (+a.success) {
      case k.SUCCESS.INVOKE_URL:
        c = cc11001100_hook("c", a.invokeURL, "assign");
        break;
      case k.SUCCESS.DEFAULT_URL:
        c = cc11001100_hook("c", a.originFailURL || a.failUrl, "assign");
        break;
      case k.SUCCESS.NO_CHANGE:
    }
    g.isValidURL(c) && (window.location.href = cc11001100_hook("window.location.href", c, "assign"));
  }
  function w(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", "function" == typeof a, "var-init"),
      h = cc11001100_hook("h", "function" == typeof c, "var-init");
    if (window.OpenBox) return void (v && a());
    var b = cc11001100_hook("b", document.createElement("script"), "var-init");
    b.src = cc11001100_hook("b.src", "//s.bdstatic.com/common/openjs/openBox.js?_v=" + g.getFormatTime(), "assign"), b.async = cc11001100_hook("b.async", !0, "assign"), b.onload = cc11001100_hook("b.onload", b.onreadystatechange = cc11001100_hook("b.onreadystatechange", function () {
      this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState ? h && c("Failed to loading openbox script!") : (b.onload = cc11001100_hook("b.onload", b.onreadystatechange = cc11001100_hook("b.onreadystatechange", null, "assign"), "assign"), b = cc11001100_hook("b", null, "assign"), v && a());
    }, "assign"), "assign"), b.onerror = cc11001100_hook("b.onerror", function () {
      b.onerror = cc11001100_hook("b.onerror", null, "assign"), b = cc11001100_hook("b", null, "assign"), h && c("Failed to loading openbox script!");
    }, "assign");
    var k = cc11001100_hook("k", document.getElementsByTagName("head")[0], "var-init");
    k.appendChild(b);
  }
  function P(a, c, v, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    if (a && !c.test(a)) return a;
    var b = cc11001100_hook("b", "", "var-init"),
      k = cc11001100_hook("k", {}, "var-init");
    if (a) {
      var _ = cc11001100_hook("_", /#\S*/g, "var-init");
      b = cc11001100_hook("b", a.match(_), "assign"), b = cc11001100_hook("b", b ? b[0] : "", "assign"), a = cc11001100_hook("a", a.replace(_, ""), "assign");
      var y = cc11001100_hook("y", /\?(\S*)/, "var-init"),
        w = cc11001100_hook("w", a.match(y), "var-init");
      w = cc11001100_hook("w", w ? w[1] : "", "assign"), a = cc11001100_hook("a", a.replace(y, ""), "assign");
      for (var P = cc11001100_hook("P", w.split("&"), "var-init"), i = cc11001100_hook("i", 0, "var-init"), O = cc11001100_hook("O", P.length, "var-init"); O > i; i++) {
        var S = cc11001100_hook("S", P[i].split("="), "var-init");
        S[0] && (k[S[0]] = cc11001100_hook("k[S[0]]", S[1], "assign"));
      }
    } else a = cc11001100_hook("a", v, "assign");
    g.extend(k, h);
    var I = cc11001100_hook("I", [], "var-init");
    for (var U in k) k.hasOwnProperty(U) && I.push(U + "=" + k[U]);
    return a + "?" + I.join("&") + b;
  }
  function O(v, b) {
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var y = cc11001100_hook("y", v.union && "0" !== v.union ? v.union : "", "var-init"),
      w = cc11001100_hook("w", v.from || "", "var-init"),
      O = cc11001100_hook("O", v.channel || "", "var-init");
    c.staticWordIntoClipBoard(v, y, w, O);
    var U = cc11001100_hook("U", v.invokeURL, "var-init");
    if (U && !new RegExp("[?&]ivk_p2=").test(U)) {
      var E = cc11001100_hook("E", U.split("#"), "var-init");
      U = cc11001100_hook("U", "" + E[0] + (~E[0].indexOf("?") ? "&" : "?") + "ivk_p2=" + (y || "") + (E[1] ? "#" : "") + (E[1] || ""), "assign");
    }
    var C = cc11001100_hook("C", {}, "var-init");
    C = cc11001100_hook("C", v.copyTokenData ? v.copyTokenData : +v.mode === k.MODE.OPEN_URL && v.invokeURL ? {
      url: cc11001100_hook("url", v.activityId ? encodeURIComponent(U) : U, "object-key-init"),
      activity_id: cc11001100_hook("activity_id", v.activityId || 220, "object-key-init")
    } : +v.mode === k.MODE.XCX ? {
      activity_id: cc11001100_hook("activity_id", v.activityId || 227, "object-key-init"),
      url: cc11001100_hook("url", v.appKey + U, "object-key-init")
    } : +v.mode === k.MODE.CAMERA ? {
      url: cc11001100_hook("url", encodeURIComponent(a.default(v.mode, g.extend({}, v, {
        backURL: cc11001100_hook("backURL", "", "object-key-init"),
        backQuery: cc11001100_hook("backQuery", "", "object-key-init")
      })).iosScheme.split("imagesearch?caller=graph&")[1]), "object-key-init"),
      activity_id: cc11001100_hook("activity_id", 281, "object-key-init")
    } : +v.mode === k.MODE.VOICE ? g.ua.isIOS() ? {
      url: cc11001100_hook("url", a.default(v.mode, g.extend({}, v, {
        backURL: cc11001100_hook("backURL", "", "object-key-init"),
        backQuery: cc11001100_hook("backQuery", "", "object-key-init")
      })).iosScheme.split("baiduboxapp://")[1], "object-key-init"),
      activity_id: cc11001100_hook("activity_id", 364, "object-key-init")
    } : {
      url: cc11001100_hook("url", 'speech/startVoiceSearch?&params={"voiceSource"="wisevoice"}&callback=', "object-key-init"),
      activity_id: cc11001100_hook("activity_id", 364, "object-key-init")
    } : {
      url: cc11001100_hook("url", "wise_" + O + "_" + y + "_" + w, "object-key-init"),
      activity_id: cc11001100_hook("activity_id", 168, "object-key-init")
    }, "assign");
    var A,
      R = cc11001100_hook("R", I(b, "INTOMARKET"), "var-init"),
      L = cc11001100_hook("L", parseInt(R) + 1, "var-init");
    if (S(b, "INTOMARKET", L), 1 === +v.fail && v.invokeURL && /^https?:\/\//i.test(v.invokeURL)) A = cc11001100_hook("A", v.invokeURL, "assign");else if (+v.app === k.APP.KDD) {
      var D = cc11001100_hook("D", v.kddParams || {}, "var-init");
      A = cc11001100_hook("A", v.defaultURL || "https://haokan.baidu.com/activity/h5/chaihongbao?productid=6&inviteCode=B36CCC5X010&pd=" + (D.pd || "") + "&tab=guide&source=" + (D.source || "") + "&idfrom=" + (D.idfrom || ""), "assign");
    } else if (+v.app === k.APP.LITE || +v.ext.appMarket === k.APP.LITE) {
      var N = cc11001100_hook("N", v.liteParams || {}, "var-init");
      A = cc11001100_hook("A", v.defaultURL || "https://eopa.baidu.com/page/litetwtj-oA8Aiml9?idfrom=" + (N.idfrom || "") + "&type=" + (N.type || "") + "&nid=" + (N.nid || ""), "assign");
    } else A = cc11001100_hook("A", P(v.defaultURL, /^https?:\/\/boxer.baidu.com\/scheme/, "https://boxer.baidu.com/scheme", {
      source: cc11001100_hook("source", w, "object-key-init"),
      channel: cc11001100_hook("channel", O, "object-key-init"),
      p1: cc11001100_hook("p1", O, "object-key-init"),
      p2: cc11001100_hook("p2", y, "object-key-init"),
      p3: cc11001100_hook("p3", w, "object-key-init"),
      p4: cc11001100_hook("p4", g.getTokenP4(v.browserid), "object-key-init"),
      tokenData: cc11001100_hook("tokenData", encodeURIComponent(encodeURIComponent(JSON.stringify(C))), "object-key-init")
    }), "assign");
    var B;
    if (g.ua.isUC() || g.isSupportULink() && +v.fail === k.FAIL.APPSTORE && (B = cc11001100_hook("B", A, "assign"), A = cc11001100_hook("A", 1 === +v.ext.lightStore ? +v.ext.appMarket === k.APP.LITE ? k.LITE_STORE_POPUP : k.APP_STORE_POPUP : +v.ext.appMarket === k.APP.LITE ? k.LITE_STORE : k.APP_STORE, "assign"), L > 1 && (A = cc11001100_hook("A", v.invokeURL, "assign"))), +v.fail === k.FAIL.DOWNLOAD_URL && v.ext.downloadUrl && (v.ext.isForceDownload || window.page && window.page.comm && "" === window.page.comm.tanet) && (A = cc11001100_hook("A", v.ext.downloadUrl, "assign")), g.ua.isIOS() && +v.app === k.APP.BD_LITE && v.ext.isDBLite) {
      var T = cc11001100_hook("T", A, "var-init"),
        M = cc11001100_hook("M", a.default(v.mode, v, "baiduboxlite").iosScheme, "var-init");
      A = cc11001100_hook("A", k.LITE_ULINK + encodeURIComponent(_.addLogargs(M, v)), "assign"), A = cc11001100_hook("A", A + "&target=" + encodeURIComponent(T), "assign");
    }
    var F = cc11001100_hook("F", (navigator.userAgent, {
      from: cc11001100_hook("from", w, "object-key-init"),
      channel: cc11001100_hook("channel", O, "object-key-init"),
      notUseIdm: cc11001100_hook("notUseIdm", +v.app !== k.APP.BD_LITE, "object-key-init"),
      failUrl: cc11001100_hook("failUrl", A, "object-key-init"),
      failCallback: function () {
        var a = cc11001100_hook("a", +v.fail, "var-init");
        L > 1 && 3 === a && (a = cc11001100_hook("a", 1, "assign")), 4 !== a && (3 === a ? h.default(A, v) : window.location.href = cc11001100_hook("window.location.href", A, "assign"));
      },
      copyTokenData: cc11001100_hook("copyTokenData", C, "object-key-init"),
      extLog: {
        ext_content: cc11001100_hook("ext_content", g.extend({
          from: cc11001100_hook("from", y, "object-key-init"),
          browserid: cc11001100_hook("browserid", v.browserid || "", "object-key-init"),
          qid: cc11001100_hook("qid", v.qid || "", "object-key-init"),
          sids: cc11001100_hook("sids", g.getCookie("H_WISE_SIDS") || "", "object-key-init"),
          timestamp: cc11001100_hook("timestamp", new Date().getTime(), "object-key-init"),
          isPrivate: cc11001100_hook("isPrivate", v.isPrivate, "object-key-init")
        }, v.extLogContent), "object-key-init")
      },
      iosForceScheme: cc11001100_hook("iosForceScheme", 4 === +v.fail, "object-key-init")
    }), "var-init");
    1 === +v.passScheme && (F.failUrlWidthScheme = cc11001100_hook("F.failUrlWidthScheme", !0, "assign")), B && (F.originFailURL = cc11001100_hook("F.originFailURL", B, "assign"));
    var j = cc11001100_hook("j", +v.fail === k.FAIL.APPSTORE ? k.MODE.INDEX : v.mode, "var-init");
    return v.iosScheme || (v.iosScheme = cc11001100_hook("v.iosScheme", function (c) {
      var h = cc11001100_hook("h", c && c.protocolHeader, "var-init");
      return a.default(j, v, h).iosScheme;
    }, "assign")), v.androidCommand || (v.androidCommand = cc11001100_hook("v.androidCommand", function (c) {
      var h = cc11001100_hook("h", c && c.protocolHeader, "var-init");
      return a.default(j, v, h).androidCommand;
    }, "assign")), g.extend(F, v);
  }
  function S(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    if (a) {
      var h,
        b = cc11001100_hook("b", sessionStorage.getItem(c), "var-init"),
        k = cc11001100_hook("k", a + ":[\\d]*", "var-init"),
        re = cc11001100_hook("re", new RegExp(k, "g", "i"), "var-init"),
        g = cc11001100_hook("g", v || 1, "var-init");
      h = cc11001100_hook("h", re.test(b) ? b.replace(re, a + ":" + g) : b ? b + "_" + a + ":" + g : a + ":" + g, "assign"), sessionStorage.setItem(c, h);
    }
  }
  function I(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a) {
      var c = cc11001100_hook("c", c, "var-init"),
        v = cc11001100_hook("v", sessionStorage.getItem(c), "var-init"),
        h = cc11001100_hook("h", new RegExp(a + ":(\\d+)", "ig").exec(v), "var-init");
      return h ? +h[1] : 0;
    }
    return 0;
  }
  function U(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.invokeURL, "var-init");
    return a.from && (c = cc11001100_hook("c", g.addQuery(c, "rfrom", a.from), "assign")), a.channel && (c = cc11001100_hook("c", g.addQuery(c, "rchannel", a.channel), "assign")), a.rqid && (c = cc11001100_hook("c", g.addQuery(c, "rqid", a.rqid), "assign")), c;
  }
  function E() {
    this.isReady = cc11001100_hook("this.isReady", !1, "assign"), this.readyCallbacks = cc11001100_hook("this.readyCallbacks", [], "assign"), this.init();
  }
  function C(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.ext, "var-init");
    c && c.isFeatureNeedBack && (a.iosScheme || a.androidCommand) && (a.featureScheme = cc11001100_hook("a.featureScheme", a.iosScheme || a.androidCommand, "assign"), a.androidCommand = cc11001100_hook("a.androidCommand", a.iosScheme = cc11001100_hook("a.iosScheme", null, "assign"), "assign"));
  }
  function A(c, h) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    if (c && "object" == typeof c && (!c.app || +c.app === k.APP.BD_LITE || +c.app === k.APP.BD || +c.app === k.APP.KDD || +c.app === k.APP.LITE)) {
      if (c.app && +c.app === k.APP.KDD && (c.matrix = cc11001100_hook("c.matrix", "mission", "assign"), c.iosForceScheme = cc11001100_hook("c.iosForceScheme", !0, "assign")), c.app && +c.app === k.APP.LITE && (c.matrix = cc11001100_hook("c.matrix", "lite", "assign")), c.invokeURL && (c.invokeURL = cc11001100_hook("c.invokeURL", U(c), "assign")), c.mode && +c.mode === k.MODE.WISE_OPEN_URL && c.invokeURL) return void (window.location.href = cc11001100_hook("window.location.href", c.invokeURL, "assign"));
      if (C(c), g.isBox() && c.mode && +c.mode === k.MODE.XCX) return v.default(c);
      if (g.isBox() && c.mode && +c.mode === k.MODE.EASY_BROWER) {
        var _ = cc11001100_hook("_", a.default(c.mode, c).iosScheme, "var-init");
        return g.normalInvoke(_);
      }
      var w = cc11001100_hook("w", new E(), "var-init");
      if (c.app && c.mode && (c = cc11001100_hook("c", O(c, h), "assign")), c.ext && 1 === +c.ext.disableInvoke && c.failUrl) {
        var P;
        P = cc11001100_hook("P", c.ext.appMarket && k.APP_INFO[c.ext.appMarket] ? k.APP_INFO[c.ext.appMarket] : k.APP_INFO[1], "assign");
        var S = cc11001100_hook("S", "https://mo.baidu.com/mo/home", "var-init");
        return void g.invokeMarket(P.pkg, S, 500);
      }
      b.default(c) && (g.registerPagehideListener(c, y), w.ready(function () {
        w.openBox.open(c);
      }));
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.normalizeInvokeUrl = cc11001100_hook("exports.normalizeInvokeUrl", exports.getSessionVal = cc11001100_hook("exports.getSessionVal", exports.setPosSession = cc11001100_hook("exports.setPosSession", exports.normalizeOpenBoxOptions = cc11001100_hook("exports.normalizeOpenBoxOptions", exports.joinFailUrlArgs = cc11001100_hook("exports.joinFailUrlArgs", exports.getOpenBoxApi = cc11001100_hook("exports.getOpenBoxApi", exports.invokeSuccessCallback = cc11001100_hook("exports.invokeSuccessCallback", void 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), a = cc11001100_hook("a", __importDefault(a), "assign"), v = cc11001100_hook("v", __importDefault(v), "assign"), h = cc11001100_hook("h", __importDefault(h), "assign"), b = cc11001100_hook("b", __importDefault(b), "assign"), exports.invokeSuccessCallback = cc11001100_hook("exports.invokeSuccessCallback", y, "assign"), exports.getOpenBoxApi = cc11001100_hook("exports.getOpenBoxApi", w, "assign"), exports.joinFailUrlArgs = cc11001100_hook("exports.joinFailUrlArgs", P, "assign"), exports.normalizeOpenBoxOptions = cc11001100_hook("exports.normalizeOpenBoxOptions", O, "assign"), exports.setPosSession = cc11001100_hook("exports.setPosSession", S, "assign"), exports.getSessionVal = cc11001100_hook("exports.getSessionVal", I, "assign"), exports.normalizeInvokeUrl = cc11001100_hook("exports.normalizeInvokeUrl", U, "assign"), E.prototype = cc11001100_hook("E.prototype", {
    constructor: cc11001100_hook("constructor", E, "object-key-init"),
    init: function () {
      var a = cc11001100_hook("a", this, "var-init");
      w(function () {
        a.openBox = cc11001100_hook("a.openBox", window.OpenBox(), "assign"), a.isReady = cc11001100_hook("a.isReady", !0, "assign"), a.doReadyCallbacks();
      }, function (a) {
        throw a;
      });
    },
    doReadyCallbacks: function () {
      for (var a = cc11001100_hook("a", this.readyCallbacks, "var-init"), i = cc11001100_hook("i", 0, "var-init"), c = cc11001100_hook("c", a.length, "var-init"); c > i; i++) a[i].call(this);
      this.readyCallbacks = cc11001100_hook("this.readyCallbacks", [], "assign");
    },
    ready: function (a) {
      "function" == typeof a && (this.isReady ? a.call(this) : this.readyCallbacks.push(a));
    }
  }, "assign"), exports.default = cc11001100_hook("exports.default", A, "assign");
}), define("@baidu/invoke-box/src/invokeBaby", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils"], function (require, exports, a, c) {
  "use strict";

  function v(c) {
    cc11001100_hook("c", c, "function-parameter");
    if (c.iosScheme || c.androidCommand) return c.iosScheme || c.androidCommand;
    var v = cc11001100_hook("v", c.mode, "var-init"),
      h = cc11001100_hook("h", c.from || "", "var-init"),
      b = cc11001100_hook("b", c.bbParams || {}, "var-init"),
      k = cc11001100_hook("k", "&source=" + h, "var-init");
    if (v === a.MODE.OPEN_URL) {
      var g = cc11001100_hook("g", b.page, "var-init"),
        y = cc11001100_hook("y", b.query, "var-init");
      if (g) return _ + "?page=" + g + (y ? "&" + y : "") + k;
      if (c.invokeURL) return _ + "?page=webview&id=" + encodeURIComponent(c.invokeURL) + k;
    }
    return _ + "?page=index" + k;
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.bbParams || {}, "var-init");
    return c.downloadUrl || "https://baobao.baidu.com/pinpai?from=" + a.channel;
  }
  function b(c) {
    cc11001100_hook("c", c, "function-parameter");
    return c.fail && +c.fail === a.FAIL.INVOKE_URL && c.invokeURL ? c.invokeURL : c.defaultURL ? c.defaultURL : h(c);
  }
  function k(c) {
    cc11001100_hook("c", c, "function-parameter");
    var h = cc11001100_hook("h", c.fail ? +c.fail : "", "var-init"),
      k = cc11001100_hook("k", {
        scheme: cc11001100_hook("scheme", v(c), "object-key-init"),
        failCallback: function () {}
      }, "var-init");
    return h && h !== a.FAIL.INVOKE_URL && h !== a.FAIL.DEFAULT_URL || (k.failCallback = cc11001100_hook("k.failCallback", function () {
      location.href = cc11001100_hook("location.href", b(c), "assign");
    }, "assign")), k;
  }
  function g(v) {
    cc11001100_hook("v", v, "function-parameter");
    if (+v.mode === a.MODE.DOWNLOAD_PAGE) return void (location.href = cc11001100_hook("location.href", h(v), "assign"));
    var b = cc11001100_hook("b", k(v), "var-init");
    c.normalInvoke(b.scheme, b.failCallback);
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.getFailUrl = cc11001100_hook("exports.getFailUrl", exports.getDefDownloadUrl = cc11001100_hook("exports.getDefDownloadUrl", exports.getScheme = cc11001100_hook("exports.getScheme", void 0, "assign"), "assign"), "assign");
  var _ = cc11001100_hook("_", "askmybaby://com.baidu.mbaby/", "var-init");
  exports.getScheme = cc11001100_hook("exports.getScheme", v, "assign"), exports.getDefDownloadUrl = cc11001100_hook("exports.getDefDownloadUrl", h, "assign"), exports.getFailUrl = cc11001100_hook("exports.getFailUrl", b, "assign"), exports.default = cc11001100_hook("exports.default", g, "assign");
});
var __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": cc11001100_hook("default", mod, "object-key-init")
  };
}, "var-init");
define("@baidu/invoke-box/src/invokeBase", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/openXCX"], function (require, exports, a, c, v) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.InvokeBase = cc11001100_hook("exports.InvokeBase", void 0, "assign"), v = cc11001100_hook("v", __importDefault(v), "assign");
  var h = cc11001100_hook("h", function () {
    function h(a) {
      cc11001100_hook("a", a, "function-parameter");
      this.options = cc11001100_hook("this.options", a, "assign");
    }
    return h.prototype.getFailUrl = cc11001100_hook("h.prototype.getFailUrl", function (c) {
      var v = cc11001100_hook("v", c.fail, "var-init"),
        h = cc11001100_hook("h", c.invokeURL, "var-init"),
        b = cc11001100_hook("b", c.defaultURL, "var-init");
      return +v === a.FAIL.INVOKE_URL && h ? h : b ? b : "";
    }, "assign"), h.prototype.transformDeepLink = cc11001100_hook("h.prototype.transformDeepLink", function (a, v, h, b) {
      if (!a) return a;
      var k = cc11001100_hook("k", c.getDeepLinkCallback(h, b), "var-init"),
        g = cc11001100_hook("g", c.getDeepLinkInvokeScheme(a, k, v), "var-init");
      return g;
    }, "assign"), h.prototype.invokeXCX = cc11001100_hook("h.prototype.invokeXCX", function (a) {
      v.default(a);
    }, "assign"), h.prototype.getInvokeXCXOptions = cc11001100_hook("h.prototype.getInvokeXCXOptions", function (a, c) {
      return {
        app: cc11001100_hook("app", c, "object-key-init"),
        appKey: cc11001100_hook("appKey", a.xcxAppKey, "object-key-init"),
        invokeURL: cc11001100_hook("invokeURL", a.xcxUrl || "", "object-key-init"),
        xcxFrom: cc11001100_hook("xcxFrom", a.xcxFrom, "object-key-init"),
        ext: cc11001100_hook("ext", a.xcxExt, "object-key-init")
      };
    }, "assign"), h.prototype.invokeSeccessHandler = cc11001100_hook("h.prototype.invokeSeccessHandler", function () {}, "assign"), h.prototype.invokeFailHandler = cc11001100_hook("h.prototype.invokeFailHandler", function () {
      var c = cc11001100_hook("c", this.options, "var-init"),
        v = cc11001100_hook("v", c.xcxParams, "var-init"),
        h = cc11001100_hook("h", c.app, "var-init"),
        b = cc11001100_hook("b", c.fail, "var-init");
      if (+b !== a.FAIL.NO_CHANGE) {
        if (v) {
          var k = cc11001100_hook("k", this.getInvokeXCXOptions(v, +h), "var-init");
          return void this.invokeXCX(k);
        }
        var g = cc11001100_hook("g", this.getFailUrl(this.options), "var-init");
        location.href = cc11001100_hook("location.href", g, "assign");
      }
    }, "assign"), h.prototype.invokeInBox = cc11001100_hook("h.prototype.invokeInBox", function (a, v, h, b) {
      var k = cc11001100_hook("k", this, "var-init");
      void 0 === v && (v = cc11001100_hook("v", "", "assign")), void 0 === h && (h = cc11001100_hook("h", function () {
        return k.invokeSeccessHandler();
      }, "assign")), void 0 === b && (b = cc11001100_hook("b", function () {
        return k.invokeFailHandler();
      }, "assign"));
      var g = cc11001100_hook("g", this.transformDeepLink(a, v, h, b), "var-init");
      c.normalInvoke(g);
    }, "assign"), h.prototype.invokeApp = cc11001100_hook("h.prototype.invokeApp", function (a, v) {
      var h = cc11001100_hook("h", this, "var-init");
      void 0 === v && (v = cc11001100_hook("v", "", "assign")), c.isBox() && c.isAppInstalled(+this.options.app, function (c) {
        return c ? void h.invokeInBox(a, v) : void h.invokeFailHandler();
      }), this.invokeOutBox(a);
    }, "assign"), h.prototype.invokeOutBox = cc11001100_hook("h.prototype.invokeOutBox", function (a, v) {
      var h = cc11001100_hook("h", this, "var-init");
      void 0 === v && (v = cc11001100_hook("v", function () {
        return h.invokeFailHandler();
      }, "assign")), c.normalInvoke(a, v);
    }, "assign"), h;
  }(), "var-init");
  exports.InvokeBase = cc11001100_hook("exports.InvokeBase", h, "assign");
});
var __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": cc11001100_hook("default", mod, "object-key-init")
  };
}, "var-init");
define("@baidu/invoke-box/src/invokeFlow", ["require", "exports", "@baidu/invoke-box/src/invokeMarket", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function (require, exports, a, c, v) {
  "use strict";

  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.scheme) return a.scheme;
    var v;
    return v = cc11001100_hook("v", c.isSupportULink() ? y : _, "assign");
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", {
      scheme: cc11001100_hook("scheme", h(a), "object-key-init"),
      failCallback: function () {
        k(a);
      }
    }, "var-init");
    return c;
  }
  function k(c) {
    cc11001100_hook("c", c, "function-parameter");
    var h = cc11001100_hook("h", "https://www.newflowsns.com/?pkgId=1024243c", "var-init"),
      b = cc11001100_hook("b", +c.fail, "var-init");
    b !== v.FAIL.NO_CHANGE && (b === v.FAIL.APPSTORE && a.default(h, c), window.location.href = cc11001100_hook("window.location.href", h, "assign"));
  }
  function g(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", b(a), "var-init"),
      h = cc11001100_hook("h", a.waitTime || 200, "var-init");
    c.normalInvoke(v.scheme, function () {
      k(a);
    }, h);
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.failHandler = cc11001100_hook("exports.failHandler", exports.normalizeOptions = cc11001100_hook("exports.normalizeOptions", exports.getScheme = cc11001100_hook("exports.getScheme", void 0, "assign"), "assign"), "assign"), a = cc11001100_hook("a", __importDefault(a), "assign");
  var _ = cc11001100_hook("_", "flowlocal://main", "var-init"),
    y = cc11001100_hook("y", "https://awake.newflowsns.com/growth/ulink?scheme=flowlocal%3A%2F%2Fmain&target=https%3A%2F%2Fapps.apple.com%2Fcn%2Fapp%2Fflow%25E6%2596%25B0%25E6%25B5%2581-%25E6%25BD%25AE%25E6%25B5%2581%25E7%2594%259F%25E6%25B4%25BB-%25E9%259A%258F%25E6%2597%25B6%25E8%25AE%25B0%25E5%25BD%2595%2Fid1368037582", "var-init");
  exports.getScheme = cc11001100_hook("exports.getScheme", h, "assign"), exports.normalizeOptions = cc11001100_hook("exports.normalizeOptions", b, "assign"), exports.failHandler = cc11001100_hook("exports.failHandler", k, "assign"), exports.default = cc11001100_hook("exports.default", g, "assign");
}), define("@baidu/invoke-box/src/invokeHaoKan", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils", "@searchfe/user-agent"], function (require, exports, a, c) {
  "use strict";

  function v(c) {
    cc11001100_hook("c", c, "function-parameter");
    if (c.fail && +c.fail === a.FAIL.INVOKE_URL) {
      if (c.hkParams && c.hkParams.tcUrl) return c.hkParams.tcUrl;
      if (c.invokeURL) return c.invokeURL;
    }
    if (c.defaultURL) return c.defaultURL;
    var v = cc11001100_hook("v", "https://haokan.baidu.com/download", "var-init");
    return v + "?tab=" + (c.hkParams.tab || "") + "&tag=" + (c.hkParams.tag || "") + "&source=" + (c.hkParams.source || "");
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", c.getParamByKeyFromURL("oword"), "var-init"),
      h = cc11001100_hook("h", v || c.getParamByKeyFromURL("word"), "var-init");
    if (h) {
      var b = cc11001100_hook("b", /\?.*query=([^&?#]*)/, "var-init");
      if (!b.test(a)) {
        var k = cc11001100_hook("k", a.indexOf("?") ? "&" : "?", "var-init");
        a += cc11001100_hook("a", k + "query=" + h, "assign");
      }
    }
    return a;
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", "baiduhaokan://search/result/?keyword=", "var-init"),
      v = cc11001100_hook("v", "https://sv.baidu.com/web/search/apppage?keyword=", "var-init");
    if ("h5" === a.backUrlType) var h = cc11001100_hook("h", "" + v + encodeURIComponent(a.backQuery) + "&tab=" + a.hkParams.tab + "&tag=" + a.hkParams.tag + "&source=" + a.hkParams.source + "&sfrom=" + a.hkParams.sfrom + "&showTitleBar=" + a.hkParams.showTitleBar, "var-init");else var h = cc11001100_hook("h", "" + c + encodeURIComponent(a.backQuery) + "&tab=" + a.hkParams.tab + "&tag=" + a.hkParams.tag + "&source=" + a.hkParams.source, "var-init");
    return encodeURIComponent(h);
  }
  function k(c, v) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    var h = cc11001100_hook("h", c.hkParams, "var-init"),
      k = cc11001100_hook("k", "tab=" + h.tab + "&tag=" + h.tag + "&source=" + h.source, "var-init"),
      g = cc11001100_hook("g", "baiduhaokan://home/index/?" + k + "&channel=" + h.channel + "&vid=" + h.vid + "&coin=" + h.coin + "&auto_play_index=" + h.auto_play_index + "&ext=" + h.ext + "&ext_content=" + h.ext_content, "var-init");
    if (c.mode === a.MODE.OPEN_URL) switch (v) {
      case "video":
        g = cc11001100_hook("g", "baiduhaokan://video/details/?url_key=" + h.url_key + "&" + k + "&coin=" + h.coin + "&vid=" + h.vid + "&ext_content=" + h.ext_content, "assign");
        break;
      case "topicvideoset":
        g = cc11001100_hook("g", "baiduhaokan://video/topicvideoset/?topic_id=" + h.topic_id + "&vid=" + h.vid + "&topic_distingtype=" + h.topic_distingtype + "&tab=" + h.tab + "&tag=" + h.tag + "&source=" + h.source, "assign");
        break;
      case "index":
        break;
      case "webview":
        g = cc11001100_hook("g", "baiduhaokan://webview/?url_key=" + h.url_key + "&" + k, "assign");
    }
    return c.hasSearchBox && (g += cc11001100_hook("g", "&show_search_box=" + c.hkParams.show_search_box, "assign")), c.backQuery && (g += cc11001100_hook("g", "&back_url=" + b(c), "assign")), g;
  }
  function g(g) {
    cc11001100_hook("g", g, "function-parameter");
    var P,
      O = cc11001100_hook("O", g.channel || "", "var-init"),
      S = cc11001100_hook("S", g.from || "", "var-init");
    switch (g.hkParams = cc11001100_hook("g.hkParams", g.hkParams || {}, "assign"), g.mode) {
      case a.MODE.OPEN_URL:
        P = cc11001100_hook("P", g.hkParams.page || "video", "assign");
        break;
      case a.MODE.INDEX:
        P = cc11001100_hook("P", g.hkParams.page || "index", "assign");
    }
    if (P) {
      var I = cc11001100_hook("I", c.extend({
        url_key: cc11001100_hook("url_key", "", "object-key-init"),
        tab: cc11001100_hook("tab", "", "object-key-init"),
        tag: cc11001100_hook("tag", "", "object-key-init"),
        source: cc11001100_hook("source", S || "", "object-key-init"),
        coin: cc11001100_hook("coin", 0, "object-key-init"),
        vid: cc11001100_hook("vid", "", "object-key-init"),
        channel: cc11001100_hook("channel", "recommend", "object-key-init"),
        auto_play_index: cc11001100_hook("auto_play_index", 0, "object-key-init"),
        ext: cc11001100_hook("ext", "", "object-key-init"),
        ext_content: cc11001100_hook("ext_content", "", "object-key-init"),
        target: cc11001100_hook("target", "", "object-key-init"),
        sfrom: cc11001100_hook("sfrom", 8, "object-key-init"),
        show_search_box: cc11001100_hook("show_search_box", 1, "object-key-init"),
        showTitleBar: cc11001100_hook("showTitleBar", 0, "object-key-init")
      }, g.hkParams), "var-init");
      g.backQuery && (I.back_url = cc11001100_hook("I.back_url", b(g), "assign")), !I.url_key && g.invokeURL && (I.url_key = cc11001100_hook("I.url_key", encodeURIComponent(g.invokeURL), "assign")), g.hkParams = cc11001100_hook("g.hkParams", I, "assign");
      var U = cc11001100_hook("U", h(v(g)), "var-init");
      I.target || (I.target = cc11001100_hook("I.target", encodeURIComponent(U), "assign")), I.ext_content || (I.ext_content = cc11001100_hook("I.ext_content", encodeURIComponent(JSON.stringify(c.extend({
        baiduid: cc11001100_hook("baiduid", g.baiduid || c.getBaiduId(), "object-key-init"),
        baiducuid: cc11001100_hook("baiducuid", c.getCookie("BAIDUCUID") || "", "object-key-init"),
        qid: cc11001100_hook("qid", g.qid || "", "object-key-init"),
        applid: cc11001100_hook("applid", g.applid || "", "object-key-init"),
        sid: cc11001100_hook("sid", g.sid || "", "object-key-init"),
        timestamp: cc11001100_hook("timestamp", new Date().getTime(), "object-key-init")
      }, g.extLogContent))), "assign")), g.hkParams = cc11001100_hook("g.hkParams", I, "assign");
      var E = cc11001100_hook("E", {
          page: cc11001100_hook("page", P, "object-key-init"),
          launchType: {
            ios: cc11001100_hook("ios", +g.fail === a.FAIL.APPSTORE ? "store" : "link", "object-key-init"),
            android: cc11001100_hook("android", +g.fail === a.FAIL.APPSTORE ? "store" : "scheme", "object-key-init")
          },
          param: cc11001100_hook("param", I, "object-key-init"),
          timeout: cc11001100_hook("timeout", 200, "object-key-init"),
          clipboardTxt: cc11001100_hook("clipboardTxt", y(k(g, P)), "object-key-init"),
          pkgs: {
            android: cc11001100_hook("android", "https://cdn-haokanapk.baidu.com/haokanapk/apk/baiduhaokan" + (O ? O : "1021176d") + ".apk", "object-key-init"),
            ios: cc11001100_hook("ios", "https://apps.apple.com/cn/app/id1092031003?mt=8", "object-key-init"),
            yyb: cc11001100_hook("yyb", "http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.haokan", "object-key-init")
          },
          landPage: cc11001100_hook("landPage", U, "object-key-init")
        }, "var-init"),
        C = cc11001100_hook("C", k(g, P), "var-init");
      if (c.isBox() || w.isTomas()) {
        E.launchType = cc11001100_hook("E.launchType", {
          ios: cc11001100_hook("ios", "scheme", "object-key-init"),
          android: cc11001100_hook("android", "scheme", "object-key-init")
        }, "assign");
        var A;
        if (g.boxCallback) A = cc11001100_hook("A", c.getDeepLinkInvokeScheme(C, g.boxCallback), "assign");else {
          var R = function () {
              var c = cc11001100_hook("c", g.success || a.SUCCESS.NO_CHANGE, "var-init");
              +c !== a.SUCCESS.NO_CHANGE && +c === a.SUCCESS.DEFAULT_URL && (location.href = cc11001100_hook("location.href", U, "assign"));
            },
            L = function () {
              var v = cc11001100_hook("v", g.fail || a.FAIL.DEFAULT_URL, "var-init");
              if (+v !== a.FAIL.NO_CHANGE) {
                if (+v === a.FAIL.APPSTORE) {
                  var h = cc11001100_hook("h", c.extend({}, g), "var-init");
                  h.hkParams.tab = cc11001100_hook("h.hkParams.tab", "guide", "assign"), h.hkParams.tag = cc11001100_hook("h.hkParams.tag", "guide", "assign"), h.hkParams.source = cc11001100_hook("h.hkParams.source", "hk_ddc-0-matrix", "assign"), _(k(h, P));
                  var b = cc11001100_hook("b", w.isIOS() ? "ios" : "android", "var-init");
                  return void (location.href = cc11001100_hook("location.href", E.pkgs[b], "assign"));
                }
                location.href = cc11001100_hook("location.href", U, "assign");
              }
            },
            D = cc11001100_hook("D", c.getDeepLinkCallback(R, L), "var-init");
          A = cc11001100_hook("A", c.getDeepLinkInvokeScheme(C, D), "assign");
        }
        return void c.normalInvoke(A);
      }
      var L = function () {
        return g.fail === a.FAIL.NO_CHANGE ? 1 : 2;
      };
      _(C), window.launchHK ? window.launchHK.launch && window.launchHK.launch(E, L) : c.loadScript("//b.bdstatic.com/searchbox/icms/other/js/hk_launch.min.js?v=20190521", function () {
        window.launchHK.launch && window.launchHK.launch(E, L);
      }, function (a) {
        throw a;
      });
    }
  }
  function _(a) {
    cc11001100_hook("a", a, "function-parameter");
    c.copyToClipBoard(y(a));
  }
  function y(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "#" + a + "#";
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.getScheme = cc11001100_hook("exports.getScheme", exports.getBackQueryScheme = cc11001100_hook("exports.getBackQueryScheme", exports.addQueryIntoURL = cc11001100_hook("exports.addQueryIntoURL", exports.getFailUrl = cc11001100_hook("exports.getFailUrl", void 0, "assign"), "assign"), "assign"), "assign");
  var w = cc11001100_hook("w", require("@searchfe/user-agent"), "var-init");
  exports.getFailUrl = cc11001100_hook("exports.getFailUrl", v, "assign"), exports.addQueryIntoURL = cc11001100_hook("exports.addQueryIntoURL", h, "assign"), exports.getBackQueryScheme = cc11001100_hook("exports.getBackQueryScheme", b, "assign"), exports.getScheme = cc11001100_hook("exports.getScheme", k, "assign"), exports.default = cc11001100_hook("exports.default", g, "assign");
});
var __extends = cc11001100_hook("__extends", this && this.__extends || function () {
    var a = function (d, c) {
      return (a = cc11001100_hook("a", Object.setPrototypeOf || {
        __proto__: cc11001100_hook("__proto__", [], "object-key-init")
      } instanceof Array && function (d, a) {
        d.__proto__ = cc11001100_hook("d.__proto__", a, "assign");
      } || function (d, a) {
        for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = cc11001100_hook("d[p]", a[p], "assign"));
      }, "assign"))(d, c);
    };
    return function (d, c) {
      function v() {
        this.constructor = cc11001100_hook("this.constructor", d, "assign");
      }
      if ("function" != typeof c && null !== c) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      a(d, c), d.prototype = cc11001100_hook("d.prototype", null === c ? Object.create(c) : (v.prototype = cc11001100_hook("v.prototype", c.prototype, "assign"), new v()), "assign");
    };
  }(), "var-init"),
  __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": cc11001100_hook("default", mod, "object-key-init")
    };
  }, "var-init");
define("@baidu/invoke-box/src/invokeHaoKanNew", ["require", "exports", "@baidu/invoke-box/src/invokeBase", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils", "@searchfe/user-agent"], function (require, exports, a, c, v, h) {
  "use strict";

  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    new k(a).invoke(a);
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.InvokeHaoKan = cc11001100_hook("exports.InvokeHaoKan", void 0, "assign"), h = cc11001100_hook("h", __importDefault(h), "assign");
  var k = cc11001100_hook("k", function (a) {
    function b(c) {
      cc11001100_hook("c", c, "function-parameter");
      var v = cc11001100_hook("v", a.call(this, c) || this, "var-init");
      return v.options = cc11001100_hook("v.options", c, "assign"), v;
    }
    return __extends(b, a), b.prototype.invoke = cc11001100_hook("b.prototype.invoke", function (a) {
      var b = cc11001100_hook("b", a.mode, "var-init"),
        k = cc11001100_hook("k", (a.channel, a.fail, a.hkParams.page), "var-init");
      if (k = cc11001100_hook("k", this.setPageParam(b), "assign")) {
        var g = cc11001100_hook("g", this.dealHkParams(a), "var-init"),
          _ = cc11001100_hook("_", this.setLaunchOptions(k, g), "var-init"),
          y = cc11001100_hook("y", this.getScheme(a, k), "var-init");
        if (v.isBox() || h.default.isTomas()) {
          _.launchType = cc11001100_hook("_.launchType", {
            ios: cc11001100_hook("ios", "scheme", "object-key-init"),
            android: cc11001100_hook("android", "scheme", "object-key-init")
          }, "assign");
          var w,
            P = cc11001100_hook("P", void 0, "var-init"),
            O = cc11001100_hook("O", void 0, "var-init");
          if (a.boxCallback) P = cc11001100_hook("P", v.getDeepLinkInvokeScheme(y, a.boxCallback), "assign");else {
            O = cc11001100_hook("O", function () {
              var v = cc11001100_hook("v", a.success || c.SUCCESS.NO_CHANGE, "var-init");
              +v !== c.SUCCESS.NO_CHANGE && +v === c.SUCCESS.DEFAULT_URL && (location.href = cc11001100_hook("location.href", this.getFinalFailUrl(), "assign"));
            }, "assign");
            var S = cc11001100_hook("S", this, "var-init");
            w = cc11001100_hook("w", function () {
              var b = cc11001100_hook("b", a.fail || c.FAIL.DEFAULT_URL, "var-init");
              if (+b !== c.FAIL.NO_CHANGE) {
                if (+b === c.FAIL.APPSTORE) {
                  var g = cc11001100_hook("g", v.extend({}, a), "var-init");
                  g.hkParams.tab = cc11001100_hook("g.hkParams.tab", "guide", "assign"), g.hkParams.tag = cc11001100_hook("g.hkParams.tag", "guide", "assign"), g.hkParams.source = cc11001100_hook("g.hkParams.source", "hk_ddc-0-matrix", "assign"), S.copySchemeToClipboard(S.getScheme(g, k));
                  var y = cc11001100_hook("y", h.default.isIOS() ? "ios" : "android", "var-init");
                  return void (location.href = cc11001100_hook("location.href", _.pkgs[y], "assign"));
                }
                location.href = cc11001100_hook("location.href", S.getFinalFailUrl(), "assign");
              }
            }, "assign");
            var I = cc11001100_hook("I", v.getDeepLinkCallback(O, w), "var-init");
            P = cc11001100_hook("P", v.getDeepLinkInvokeScheme(y, I), "assign");
          }
          return void v.normalInvoke(P);
        }
        var U = function () {
          return a.fail === c.FAIL.NO_CHANGE ? 1 : 2;
        };
        this.copySchemeToClipboard(y), window.launchHK ? window.launchHK.launch && window.launchHK.launch(_, U) : v.loadScript("//b.bdstatic.com/searchbox/icms/other/js/hk_launch.min.js?v=20190521", function () {
          window.launchHK.launch && window.launchHK.launch(_, U);
        }, function (a) {
          throw a;
        });
      }
    }, "assign"), b.prototype.getFailUrl = cc11001100_hook("b.prototype.getFailUrl", function (a) {
      var v = cc11001100_hook("v", a.fail, "var-init"),
        h = cc11001100_hook("h", a.invokeURL, "var-init"),
        b = cc11001100_hook("b", a.defaultURL, "var-init"),
        k = cc11001100_hook("k", a.hkParams, "var-init"),
        g = cc11001100_hook("g", k.tcUrl, "var-init"),
        _ = cc11001100_hook("_", k.tab, "var-init"),
        y = cc11001100_hook("y", k.tag, "var-init"),
        w = cc11001100_hook("w", k.source, "var-init");
      if (v && +v === c.FAIL.INVOKE_URL) {
        if (g) return g;
        if (h) return h;
      }
      return b ? b : void this.downloadPageUrl(_, y, w);
    }, "assign"), b.prototype.downloadPageUrl = cc11001100_hook("b.prototype.downloadPageUrl", function (a, c, v) {
      var h = cc11001100_hook("h", "https://haokan.baidu.com/download", "var-init");
      return h + "?tab=" + (a || "") + "&tag=" + (c || "") + "&source=" + (v || "");
    }, "assign"), b.prototype.addQueryIntoURL = cc11001100_hook("b.prototype.addQueryIntoURL", function (a) {
      var c = cc11001100_hook("c", v.getParamByKeyFromURL("oword"), "var-init"),
        h = cc11001100_hook("h", c || v.getParamByKeyFromURL("word"), "var-init");
      if (h) {
        var b = cc11001100_hook("b", /\?.*query=([^&?#]*)/, "var-init");
        if (!b.test(a)) {
          var k = cc11001100_hook("k", a.indexOf("?") ? "&" : "?", "var-init");
          a += cc11001100_hook("a", k + "query=" + h, "assign");
        }
      }
      return a;
    }, "assign"), b.prototype.getBackQueryScheme = cc11001100_hook("b.prototype.getBackQueryScheme", function (a) {
      var c = cc11001100_hook("c", "baiduhaokan://search/result/?keyword=", "var-init"),
        v = cc11001100_hook("v", "https://sv.baidu.com/web/search/apppage?keyword=", "var-init");
      if ("h5" === a.backUrlType) var h = cc11001100_hook("h", "" + v + encodeURIComponent(a.backQuery) + "&tab=" + a.hkParams.tab + "&tag=" + a.hkParams.tag + "&source=" + a.hkParams.source + "&sfrom=" + a.hkParams.sfrom + "&showTitleBar=" + a.hkParams.showTitleBar, "var-init");else var h = cc11001100_hook("h", "" + c + encodeURIComponent(a.backQuery) + "&tab=" + a.hkParams.tab + "&tag=" + a.hkParams.tag + "&source=" + a.hkParams.source, "var-init");
      return encodeURIComponent(h);
    }, "assign"), b.prototype.getLogArgs = cc11001100_hook("b.prototype.getLogArgs", function (a) {
      var c = cc11001100_hook("c", a.tab, "var-init"),
        v = cc11001100_hook("v", a.tag, "var-init"),
        h = cc11001100_hook("h", a.source, "var-init");
      return "tab=" + c + "&tag=" + v + "&source=" + h;
    }, "assign"), b.prototype.getScheme = cc11001100_hook("b.prototype.getScheme", function (a, v) {
      var h = cc11001100_hook("h", a.hkParams, "var-init"),
        b = cc11001100_hook("b", this.getLogArgs(h), "var-init"),
        k = cc11001100_hook("k", "baiduhaokan://home/index/?" + b + "&channel=" + h.channel + "&vid=" + h.vid + "&coin=" + h.coin + "&auto_play_index=" + h.auto_play_index + "&ext=" + h.ext + "&ext_content=" + h.ext_content, "var-init");
      if (a.mode === c.MODE.OPEN_URL) switch (v) {
        case "video":
          k = cc11001100_hook("k", "baiduhaokan://video/details/?url_key=" + h.url_key + "&" + b + "&coin=" + h.coin + "&vid=" + h.vid + "&ext_content=" + h.ext_content, "assign");
          break;
        case "topicvideoset":
          k = cc11001100_hook("k", "baiduhaokan://video/topicvideoset/?topic_id=" + h.topic_id + "&vid=" + h.vid + "&topic_distingtype=" + h.topic_distingtype + "&tab=" + h.tab + "&tag=" + h.tag + "&source=" + h.source, "assign");
          break;
        case "index":
          break;
        case "webview":
          k = cc11001100_hook("k", "baiduhaokan://webview/?url_key=" + h.url_key + "&" + b, "assign");
      }
      return a.hasSearchBox && (k += cc11001100_hook("k", "&show_search_box=" + a.hkParams.show_search_box, "assign")), a.backQuery && (k += cc11001100_hook("k", "&back_url=" + this.getBackQueryScheme(a), "assign")), k;
    }, "assign"), b.prototype.dealHkParams = cc11001100_hook("b.prototype.dealHkParams", function (a) {
      var c = cc11001100_hook("c", a.from, "var-init"),
        h = cc11001100_hook("h", void 0 === c ? "" : c, "var-init"),
        b = cc11001100_hook("b", a.hkParams, "var-init"),
        k = cc11001100_hook("k", a.backQuery, "var-init"),
        g = cc11001100_hook("g", a.invokeURL, "var-init"),
        _ = cc11001100_hook("_", a.baiduid, "var-init"),
        y = cc11001100_hook("y", a.qid, "var-init"),
        w = cc11001100_hook("w", a.sid, "var-init"),
        P = cc11001100_hook("P", a.applid, "var-init"),
        O = cc11001100_hook("O", a.extLogContent, "var-init"),
        S = cc11001100_hook("S", v.extend({
          url_key: cc11001100_hook("url_key", "", "object-key-init"),
          tab: cc11001100_hook("tab", "", "object-key-init"),
          tag: cc11001100_hook("tag", "", "object-key-init"),
          source: cc11001100_hook("source", h, "object-key-init"),
          coin: cc11001100_hook("coin", 0, "object-key-init"),
          vid: cc11001100_hook("vid", "", "object-key-init"),
          channel: cc11001100_hook("channel", "recommend", "object-key-init"),
          auto_play_index: cc11001100_hook("auto_play_index", 0, "object-key-init"),
          ext: cc11001100_hook("ext", "", "object-key-init"),
          ext_content: cc11001100_hook("ext_content", "", "object-key-init"),
          target: cc11001100_hook("target", "", "object-key-init"),
          sfrom: cc11001100_hook("sfrom", 8, "object-key-init"),
          show_search_box: cc11001100_hook("show_search_box", 1, "object-key-init"),
          showTitleBar: cc11001100_hook("showTitleBar", 0, "object-key-init")
        }, b), "var-init"),
        I = cc11001100_hook("I", S.url_key, "var-init"),
        U = cc11001100_hook("U", S.back_url, "var-init"),
        E = cc11001100_hook("E", S.target, "var-init"),
        C = cc11001100_hook("C", S.ext_content, "var-init");
      k && (U = cc11001100_hook("U", this.getBackQueryScheme(a), "assign")), !I && g && (I = cc11001100_hook("I", encodeURIComponent(g), "assign")), a.hkParams = cc11001100_hook("a.hkParams", S, "assign");
      var A = cc11001100_hook("A", this.getFinalFailUrl(), "var-init");
      E || (E = cc11001100_hook("E", encodeURIComponent(A), "assign")), C || (C = cc11001100_hook("C", encodeURIComponent(JSON.stringify(v.extend({
        baiduid: cc11001100_hook("baiduid", _ || v.getBaiduId(), "object-key-init"),
        baiducuid: cc11001100_hook("baiducuid", v.getCookie("BAIDUCUID") || "", "object-key-init"),
        qid: cc11001100_hook("qid", y || "", "object-key-init"),
        applid: cc11001100_hook("applid", P || "", "object-key-init"),
        sid: cc11001100_hook("sid", w || "", "object-key-init"),
        timestamp: cc11001100_hook("timestamp", new Date().getTime(), "object-key-init")
      }, O))), "assign")), a.hkParams = cc11001100_hook("a.hkParams", S, "assign");
    }, "assign"), b.prototype.getFinalFailUrl = cc11001100_hook("b.prototype.getFinalFailUrl", function () {
      return this.addQueryIntoURL(this.getFailUrl(this.options));
    }, "assign"), b.prototype.setPageParam = cc11001100_hook("b.prototype.setPageParam", function (a) {
      var v = cc11001100_hook("v", this.options.hkParams.page, "var-init");
      switch (a) {
        case c.MODE.OPEN_URL:
          return v = cc11001100_hook("v", v || "video", "assign");
        case c.MODE.INDEX:
          return v = cc11001100_hook("v", v || "index", "assign");
        default:
          return v;
      }
    }, "assign"), b.prototype.setLaunchOptions = cc11001100_hook("b.prototype.setLaunchOptions", function (a, v) {
      var h = cc11001100_hook("h", this.options, "var-init"),
        b = cc11001100_hook("b", h.fail, "var-init"),
        k = cc11001100_hook("k", h.channel, "var-init"),
        g = cc11001100_hook("g", {
          page: cc11001100_hook("page", a, "object-key-init"),
          launchType: {
            ios: cc11001100_hook("ios", +b === c.FAIL.APPSTORE ? "store" : "link", "object-key-init"),
            android: cc11001100_hook("android", +b === c.FAIL.APPSTORE ? "store" : "scheme", "object-key-init")
          },
          param: cc11001100_hook("param", v, "object-key-init"),
          timeout: cc11001100_hook("timeout", 200, "object-key-init"),
          clipboardTxt: cc11001100_hook("clipboardTxt", this.makeToken(this.getScheme(this.options, a)), "object-key-init"),
          pkgs: {
            android: cc11001100_hook("android", "https://cdn-haokanapk.baidu.com/haokanapk/apk/baiduhaokan" + (k ? k : "1021176d") + ".apk", "object-key-init"),
            ios: cc11001100_hook("ios", "https://apps.apple.com/cn/app/id1092031003?mt=8", "object-key-init"),
            yyb: cc11001100_hook("yyb", "http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.haokan", "object-key-init")
          },
          landPage: cc11001100_hook("landPage", this.getFinalFailUrl(), "object-key-init")
        }, "var-init");
      return g;
    }, "assign"), b.prototype.copySchemeToClipboard = cc11001100_hook("b.prototype.copySchemeToClipboard", function (a) {
      v.copyToClipBoard(this.makeToken(a));
    }, "assign"), b.prototype.makeToken = cc11001100_hook("b.prototype.makeToken", function (a) {
      return "#" + a + "#";
    }, "assign"), b;
  }(a.InvokeBase), "var-init");
  exports.InvokeHaoKan = cc11001100_hook("exports.InvokeHaoKan", k, "assign"), exports.default = cc11001100_hook("exports.default", b, "assign");
});
var __extends = cc11001100_hook("__extends", this && this.__extends || function () {
    var a = function (d, c) {
      return (a = cc11001100_hook("a", Object.setPrototypeOf || {
        __proto__: cc11001100_hook("__proto__", [], "object-key-init")
      } instanceof Array && function (d, a) {
        d.__proto__ = cc11001100_hook("d.__proto__", a, "assign");
      } || function (d, a) {
        for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = cc11001100_hook("d[p]", a[p], "assign"));
      }, "assign"))(d, c);
    };
    return function (d, c) {
      function v() {
        this.constructor = cc11001100_hook("this.constructor", d, "assign");
      }
      if ("function" != typeof c && null !== c) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      a(d, c), d.prototype = cc11001100_hook("d.prototype", null === c ? Object.create(c) : (v.prototype = cc11001100_hook("v.prototype", c.prototype, "assign"), new v()), "assign");
    };
  }(), "var-init"),
  __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": cc11001100_hook("default", mod, "object-key-init")
    };
  }, "var-init");
define("@baidu/invoke-box/src/invokeIQYNew", ["require", "exports", "@baidu/invoke-box/src/invokeBase", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/getScheme"], function (require, exports, a, c, v, h) {
  "use strict";

  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.invokeURL, "var-init");
    /^https?:\/\/(www|tw|m).iqiyi.com/.test(c) && new k(a).invoke();
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.InvokeIQY = cc11001100_hook("exports.InvokeIQY", void 0, "assign"), h = cc11001100_hook("h", __importDefault(h), "assign");
  var k = cc11001100_hook("k", function (a) {
    function b(c) {
      cc11001100_hook("c", c, "function-parameter");
      var v = cc11001100_hook("v", a.call(this, c) || this, "var-init");
      return v.options = cc11001100_hook("v.options", c, "assign"), v;
    }
    return __extends(b, a), b.prototype.invoke = cc11001100_hook("b.prototype.invoke", function () {
      this.scheme = cc11001100_hook("this.scheme", this.getScheme(), "assign"), this.invokeApp(this.scheme);
    }, "assign"), b.prototype.invokeFailHandler = cc11001100_hook("b.prototype.invokeFailHandler", function () {
      var a = cc11001100_hook("a", this.options, "var-init"),
        c = cc11001100_hook("c", a.failCallback, "var-init"),
        v = cc11001100_hook("v", a.xcxParams, "var-init"),
        h = cc11001100_hook("h", a.app, "var-init"),
        b = cc11001100_hook("b", a.failUrl, "var-init"),
        k = cc11001100_hook("k", a.invokeURL, "var-init"),
        g = cc11001100_hook("g", a.iqyParams, "var-init"),
        _ = cc11001100_hook("_", void 0 === g ? {} : g, "var-init"),
        y = cc11001100_hook("y", _.tcUrl, "var-init"),
        w = cc11001100_hook("w", void 0 === y ? k : y, "var-init");
      return "function" == typeof c ? c.call(this.options, this.scheme) : v ? this.invokeXCX(this.getInvokeXCXOptions(v, +h)) : location.href = cc11001100_hook("location.href", b || this.formatUrl(w), "assign");
    }, "assign"), b.prototype.getScheme = cc11001100_hook("b.prototype.getScheme", function () {
      return c.isSupportULink() && !c.isBox() ? this.getUlink() : this.getAndroidScheme();
    }, "assign"), b.prototype.getAndroidScheme = cc11001100_hook("b.prototype.getAndroidScheme", function () {
      var a = cc11001100_hook("a", this.options, "var-init"),
        b = cc11001100_hook("b", a.invokeURL, "var-init"),
        k = cc11001100_hook("k", a.sidIQY, "var-init"),
        g = cc11001100_hook("g", void 0 === k ? "" : k, "var-init"),
        _ = cc11001100_hook("_", a.iosPkg, "var-init"),
        y = cc11001100_hook("y", a.androidPkg, "var-init"),
        w = cc11001100_hook("w", a.subtype, "var-init"),
        P = cc11001100_hook("P", a.from, "var-init"),
        O = cc11001100_hook("O", (c.ua.isIOS() ? _ : y) || "", "var-init"),
        S = cc11001100_hook("S", h.default(v.MODE.OPEN_URL, {
          invokeURL: cc11001100_hook("invokeURL", window.location.href, "object-key-init")
        }).iosScheme, "var-init"),
        I = cc11001100_hook("I", "iqiyi://mobile/webview?url=" + encodeURIComponent(b) + "&sid=" + g + "&package=" + O + "&deeplink=", "var-init");
      return "" + I + encodeURIComponent(S) + "&ftype=27&subtype=" + (w || P || "");
    }, "assign"), b.prototype.getUlink = cc11001100_hook("b.prototype.getUlink", function () {
      var a = cc11001100_hook("a", this.options.invokeURL, "var-init"),
        c = cc11001100_hook("c", void 0 === a ? "" : a, "var-init");
      if (c.includes("pluginParam=")) return "";
      var v = cc11001100_hook("v", "http://m.iqiyi.com/app/register_business?pluginParams=", "var-init");
      return "" + v + encodeURIComponent(encodeURIComponent(JSON.stringify(this.getPluginParam())));
    }, "assign"), b.prototype.getPluginParam = cc11001100_hook("b.prototype.getPluginParam", function () {
      var a = cc11001100_hook("a", this.options.invokeURL, "var-init"),
        c = cc11001100_hook("c", encodeURIComponent(a) + "&subtype=" + this.getSubtype() + "&ftype=27", "var-init");
      return {
        biz_id: cc11001100_hook("biz_id", "100", "object-key-init"),
        biz_plugin: cc11001100_hook("biz_plugin", "com.qiyi.iphone", "object-key-init"),
        biz_params: {
          biz_sub_id: cc11001100_hook("biz_sub_id", 202, "object-key-init"),
          biz_params: cc11001100_hook("biz_params", "url=" + c, "object-key-init")
        }
      };
    }, "assign"), b.prototype.getSubtype = cc11001100_hook("b.prototype.getSubtype", function () {
      var a = cc11001100_hook("a", this.options.invokeURL, "var-init"),
        c = cc11001100_hook("c", void 0 === a ? "" : a, "var-init"),
        v = cc11001100_hook("v", /ivk\_sa\=([a-zA-Z0-9_]*)/, "var-init"),
        h = cc11001100_hook("h", c.match(v), "var-init");
      return h && h[1] ? h[1] : "";
    }, "assign"), b.prototype.formatUrl = cc11001100_hook("b.prototype.formatUrl", function (a) {
      if (/^baiduboxapp:\/\//gi.test(a)) {
        for (var c = cc11001100_hook("c", a.substring(0, a.indexOf("searchParams")), "var-init"), v = cc11001100_hook("v", a.split("?")[1].split("&"), "var-init"), h = cc11001100_hook("h", {}, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < v.length; i++) h[v[i].split("=")[0]] = cc11001100_hook("h[v[i].split(\"=\")[0]]", v[i].split("=")[1], "assign");
        var b = cc11001100_hook("b", void 0, "var-init");
        try {
          b = cc11001100_hook("b", JSON.parse(decodeURIComponent(h.searchParams)), "assign");
        } catch (e) {}
        if (b && b.url) return c + "searchParams=" + encodeURIComponent(JSON.stringify({
          url: cc11001100_hook("url", b.url, "object-key-init")
        }));
      }
      return a;
    }, "assign"), b;
  }(a.InvokeBase), "var-init");
  exports.InvokeIQY = cc11001100_hook("exports.InvokeIQY", k, "assign"), exports.default = cc11001100_hook("exports.default", b, "assign");
});
var __extends = cc11001100_hook("__extends", this && this.__extends || function () {
  var a = function (d, c) {
    return (a = cc11001100_hook("a", Object.setPrototypeOf || {
      __proto__: cc11001100_hook("__proto__", [], "object-key-init")
    } instanceof Array && function (d, a) {
      d.__proto__ = cc11001100_hook("d.__proto__", a, "assign");
    } || function (d, a) {
      for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = cc11001100_hook("d[p]", a[p], "assign"));
    }, "assign"))(d, c);
  };
  return function (d, c) {
    function v() {
      this.constructor = cc11001100_hook("this.constructor", d, "assign");
    }
    if ("function" != typeof c && null !== c) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
    a(d, c), d.prototype = cc11001100_hook("d.prototype", null === c ? Object.create(c) : (v.prototype = cc11001100_hook("v.prototype", c.prototype, "assign"), new v()), "assign");
  };
}(), "var-init");
define("@baidu/invoke-box/src/invokeLibraryNew", ["require", "exports", "@baidu/invoke-box/src/invokeBase", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function (require, exports, a, c, v) {
  "use strict";

  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    new b(a).invoke();
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.InvokeLibrary = cc11001100_hook("exports.InvokeLibrary", void 0, "assign");
  var b = cc11001100_hook("b", function (a) {
    function h(c) {
      cc11001100_hook("c", c, "function-parameter");
      var v = cc11001100_hook("v", a.call(this, c) || this, "var-init");
      return v.options = cc11001100_hook("v.options", c, "assign"), v.BASE_SCHEME = cc11001100_hook("v.BASE_SCHEME", "bdwenku://wenku/operation?type=108&doc_id=", "assign"), v.U_SCHEME = cc11001100_hook("v.U_SCHEME", "https://tanbi.baidu.com/iosulink/wenku/operation?type=108&doc_id=", "assign"), v.extraParams = cc11001100_hook("v.extraParams", ["callbackname", "refer"], "assign"), v;
    }
    return __extends(h, a), h.prototype.invoke = cc11001100_hook("h.prototype.invoke", function () {
      var a = cc11001100_hook("a", "6.7.5.6", "var-init");
      c.ua.isIOS() || (a = cc11001100_hook("a", 6756, "assign"));
      var v = cc11001100_hook("v", this.getScheme(), "var-init");
      v = cc11001100_hook("v", this.addExtraParams(v), "assign"), v = cc11001100_hook("v", this.addBackScheme(v), "assign"), this.invokeApp(v, a);
    }, "assign"), h.prototype.getScheme = cc11001100_hook("h.prototype.getScheme", function () {
      var a = cc11001100_hook("a", this.options.docId || this.getDocId(), "var-init"),
        v = cc11001100_hook("v", "" + (c.isSupportULink() ? this.U_SCHEME : this.BASE_SCHEME) + a, "var-init");
      return v;
    }, "assign"), h.prototype.invokeSeccessHandler = cc11001100_hook("h.prototype.invokeSeccessHandler", function () {
      var a = cc11001100_hook("a", this.options, "var-init"),
        h = cc11001100_hook("h", a.success, "var-init"),
        b = cc11001100_hook("b", a.xcxParams, "var-init"),
        k = cc11001100_hook("k", a.invokeURL, "var-init"),
        g = cc11001100_hook("g", a.defaultURL, "var-init"),
        _ = cc11001100_hook("_", a.app, "var-init");
      +h === v.SUCCESS.INVOKE_XCX && c.isObject(b) ? this.invokeXCX(this.getInvokeXCXOptions(b, +_)) : +h === v.SUCCESS.INVOKE_URL && k ? window.location.href = cc11001100_hook("window.location.href", k, "assign") : +h === v.SUCCESS.DEFAULT_URL && g && (window.location.href = cc11001100_hook("window.location.href", g, "assign"));
    }, "assign"), h.prototype.addExtraParams = cc11001100_hook("h.prototype.addExtraParams", function (a) {
      var c = cc11001100_hook("c", this.options.ext, "var-init"),
        v = cc11001100_hook("v", this.extraParams.filter(function (a) {
          return !!c[a];
        }).map(function (a) {
          return a + "=" + encodeURI(c[a]);
        }).join("&"), "var-init");
      return v ? a + "&" + v : "" + a;
    }, "assign"), h.prototype.addBackScheme = cc11001100_hook("h.prototype.addBackScheme", function (a) {
      var v = cc11001100_hook("v", window.location.href, "var-init");
      if (!c.isBox()) return a;
      var h = cc11001100_hook("h", "baiduboxapp://v1/browser/open?url=" + v + "&newwindow=0&upgrade=1&append=1&fromwise=1", "var-init");
      return a + "&next=" + encodeURIComponent(h);
    }, "assign"), h.prototype.getDocId = cc11001100_hook("h.prototype.getDocId", function () {
      var a = cc11001100_hook("a", this.options.invokeURL, "var-init"),
        c = cc11001100_hook("c", "", "var-init");
      if (a) {
        var v = cc11001100_hook("v", /view\/(.*)[?|\/]/.exec(a), "var-init");
        null === v && (v = cc11001100_hook("v", /view\/(.*)/.exec(a), "assign")), v && v.length > 1 && (c = cc11001100_hook("c", v[1], "assign"));
      }
      return c;
    }, "assign"), h;
  }(a.InvokeBase), "var-init");
  exports.InvokeLibrary = cc11001100_hook("exports.InvokeLibrary", b, "assign"), exports.default = cc11001100_hook("exports.default", h, "assign");
}), define("@baidu/invoke-box/src/invokeMap", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils", "@searchfe/user-agent"], function (require, exports, a, c) {
  "use strict";

  function v(v) {
    cc11001100_hook("v", v, "function-parameter");
    var b = cc11001100_hook("b", v.mode, "var-init"),
      k = cc11001100_hook("k", v.from || "", "var-init"),
      g = cc11001100_hook("g", v.mapParams || {}, "var-init"),
      _ = cc11001100_hook("_", "source=" + k, "var-init"),
      y = cc11001100_hook("y", P + "/show?" + _, "var-init");
    if (b === a.MODE.OPEN_URL) {
      var w = cc11001100_hook("w", g.type, "var-init"),
        O = cc11001100_hook("O", g.params || {}, "var-init");
      if (Object.keys(O).forEach(function (a) {
        try {
          O[a] = cc11001100_hook("O[a]", decodeURIComponent(O[a]), "assign");
        } catch (e) {}
      }), w) {
        var I = cc11001100_hook("I", "index" === w ? P : P + "/" + w, "var-init");
        y = cc11001100_hook("y", I + "?" + (O ? c.stringifyQuery(O) + "&" : "") + _, "assign");
      }
    }
    return !c.isBox() && c.isSupportULink() ? h(v.defaultURL, y) : y + "&bdlog=" + encodeURIComponent(JSON.stringify(S));
  }
  function h(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return O + "cburl=" + (a ? encodeURIComponent(a) : "") + "&openapi=" + encodeURIComponent(c) + "&bdlog=" + encodeURIComponent(JSON.stringify(S));
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.mapParams || {}, "var-init");
    if (a.defaultURL) return a.defaultURL;
    var v = cc11001100_hook("v", "http://map.baidu.com/zt/client/index", "var-init");
    return v + "?source=" + (c.source || "");
  }
  function k(c) {
    cc11001100_hook("c", c, "function-parameter");
    var h = cc11001100_hook("h", 0, "var-init"),
      k = cc11001100_hook("k", c.fail ? +c.fail : h, "var-init"),
      g = cc11001100_hook("g", c.waitTime || 100, "var-init"),
      _ = cc11001100_hook("_", {
        scheme: cc11001100_hook("scheme", v(c), "object-key-init"),
        failCallback: function () {},
        pkgs: {
          android: cc11001100_hook("android", I, "object-key-init"),
          ios: cc11001100_hook("ios", U, "object-key-init")
        }
      }, "var-init");
    return k && k !== a.FAIL.INVOKE_URL && k !== a.FAIL.DEFAULT_URL || (_.failCallback = cc11001100_hook("_.failCallback", function () {
      location.href = cc11001100_hook("location.href", b(c), "assign");
    }, "assign")), k === a.FAIL.APPSTORE && (_.failCallback = cc11001100_hook("_.failCallback", function () {
      var a = cc11001100_hook("a", w.isIOS() ? "ios" : "android", "var-init");
      location.href = cc11001100_hook("location.href", _.pkgs[a], "assign"), setTimeout(function () {
        location.href = cc11001100_hook("location.href", b(c), "assign");
      }, g);
    }, "assign")), _;
  }
  function g(a) {
    cc11001100_hook("a", a, "function-parameter");
    var h = cc11001100_hook("h", v(a), "var-init");
    h += cc11001100_hook("h", "&open_from=baiduapp", "assign");
    var b = cc11001100_hook("b", c.getDeepLinkCallback(function () {}, function () {
        location.href = cc11001100_hook("location.href", a.defaultURL, "assign");
      }), "var-init"),
      k = cc11001100_hook("k", c.getDeepLinkInvokeScheme(h, b), "var-init");
    c.normalInvoke(k);
  }
  function _(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", a.NAURL, "var-init"),
      h = cc11001100_hook("h", c.getDeepLinkCallback(function () {}, function () {}), "var-init"),
      b = cc11001100_hook("b", c.getDeepLinkInvokeScheme(v, h), "var-init");
    c.normalInvoke(b);
  }
  function y(v) {
    cc11001100_hook("v", v, "function-parameter");
    var h = cc11001100_hook("h", k(v), "var-init"),
      b = cc11001100_hook("b", v.waitTime || 100, "var-init");
    return c.isBox() ? void c.isAppInstalled(v.app, function (c) {
      if (c) g(v);else {
        if (+v.fail === a.FAIL.APPSTORE && !v.defaultURL) {
          var b = cc11001100_hook("b", w.isIOS() ? "ios" : "android", "var-init");
          location.href = cc11001100_hook("location.href", h.pkgs[b], "assign");
        }
        +v.fail === a.FAIL.NA_URL && v.NAURL ? _(v) : location.href = cc11001100_hook("location.href", v.defaultURL, "assign");
      }
    }) : void c.normalInvoke(h.scheme, h.failCallback, b);
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.invokeNa = cc11001100_hook("exports.invokeNa", exports.invokeInBox = cc11001100_hook("exports.invokeInBox", exports.normalizeOptions = cc11001100_hook("exports.normalizeOptions", exports.getFailUrl = cc11001100_hook("exports.getFailUrl", exports.makeUlink = cc11001100_hook("exports.makeUlink", exports.getScheme = cc11001100_hook("exports.getScheme", void 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
  var w = cc11001100_hook("w", require("@searchfe/user-agent"), "var-init"),
    P = cc11001100_hook("P", "baidumap://map", "var-init"),
    O = cc11001100_hook("O", "https://clientmap.baidu.com/map/maplink.php?", "var-init"),
    S = cc11001100_hook("S", {
      baiduid: cc11001100_hook("baiduid", c.getBaiduId(), "object-key-init")
    }, "var-init"),
    I = cc11001100_hook("I", "market://details?id=com.baidu.BaiduMap", "var-init"),
    U = cc11001100_hook("U", "https://itunes.apple.com/cn/app/id452186370?ls=1&mt=8", "var-init");
  exports.getScheme = cc11001100_hook("exports.getScheme", v, "assign"), exports.makeUlink = cc11001100_hook("exports.makeUlink", h, "assign"), exports.getFailUrl = cc11001100_hook("exports.getFailUrl", b, "assign"), exports.normalizeOptions = cc11001100_hook("exports.normalizeOptions", k, "assign"), exports.invokeInBox = cc11001100_hook("exports.invokeInBox", g, "assign"), exports.invokeNa = cc11001100_hook("exports.invokeNa", _, "assign"), exports.default = cc11001100_hook("exports.default", y, "assign");
}), define("@baidu/invoke-box/src/invokeMarket", ["require", "exports", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function (require, exports, a, c) {
  "use strict";

  function v(v, h) {
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var b = cc11001100_hook("b", +h.ext.appMarket || +h.app || c.APP.BD, "var-init"),
      k = cc11001100_hook("k", c.APP_INFO[b] ? c.APP_INFO[b].pkg : c.APP_INFO[c.APP.BD].pkg, "var-init"),
      g = cc11001100_hook("g", {
        xiaomi: {
          reg: cc11001100_hook("reg", /\(.*Android.*(MI|Mi|Redmi).*\)/, "object-key-init"),
          scheme: cc11001100_hook("scheme", "mimarket://details?id=" + k + "&back=true", "object-key-init")
        },
        samsung: {
          reg: cc11001100_hook("reg", /\(.*Android.*(SAMSUNG|SM-).*\)/, "object-key-init"),
          scheme: cc11001100_hook("scheme", "samsungapps://ProductDetail/" + k, "object-key-init")
        },
        huawei: {
          reg: cc11001100_hook("reg", /\(.*Android.*(HUAWEI|HONOR).*\)/i, "object-key-init"),
          scheme: cc11001100_hook("scheme", "appmarket://details?id=" + k, "object-key-init")
        },
        oppo: {
          reg: cc11001100_hook("reg", /\(.*Android.*OPPO.*\)/, "object-key-init"),
          scheme: cc11001100_hook("scheme", "oppomarket://details?packagename=" + k, "object-key-init")
        },
        def: {
          reg: cc11001100_hook("reg", /\(.*Android.*\)/, "object-key-init"),
          scheme: cc11001100_hook("scheme", "market://details?id=" + k, "object-key-init")
        }
      }, "var-init"),
      _ = cc11001100_hook("_", 300, "var-init");
    for (var y in g) if (g.hasOwnProperty(y)) {
      var w = cc11001100_hook("w", g[y], "var-init");
      if (w.reg.test(navigator.userAgent)) {
        a.normalInvoke(w.scheme, function () {
          v && (window.location.href = cc11001100_hook("window.location.href", v, "assign"));
        }, _);
        break;
      }
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.default = cc11001100_hook("exports.default", v, "assign");
});
var __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": cc11001100_hook("default", mod, "object-key-init")
  };
}, "var-init");
define("@baidu/invoke-box/src/invokeNingMeng", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/invokeMarket"], function (require, exports, a, c, v) {
  "use strict";

  function h(c) {
    cc11001100_hook("c", c, "function-parameter");
    if (c.fail && +c.fail === a.FAIL.INVOKE_URL && c.invokeURL) return c.invokeURL;
    if (c.defaultURL) return c.defaultURL;
    var v = cc11001100_hook("v", "https://lemon.baidu.com/guide?flowSrcId=503&dd=1", "var-init");
    return v;
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", a.nmParams || {}, "var-init"),
      h = cc11001100_hook("h", {
        source: cc11001100_hook("source", 1, "object-key-init"),
        type: cc11001100_hook("type", 13, "object-key-init"),
        info: {}
      }, "var-init"),
      b = cc11001100_hook("b", {}, "var-init");
    a.invokeURL && (b = cc11001100_hook("b", {
      type: cc11001100_hook("type", 15, "object-key-init"),
      info: {
        id: cc11001100_hook("id", a.invokeURL, "object-key-init")
      }
    }, "assign"));
    var k = cc11001100_hook("k", {}, "var-init");
    c.isBox() && (k = cc11001100_hook("k", {
      source: cc11001100_hook("source", 3, "object-key-init"),
      info: {
        from: cc11001100_hook("from", "baidu_app", "object-key-init")
      }
    }, "assign"));
    var g = cc11001100_hook("g", c.extendDeeply(h, b, v, k), "var-init"),
      _ = cc11001100_hook("_", "lemon://share?type=" + g.type + "&info=" + JSON.stringify(g.info) + "&source=" + g.source, "var-init");
    return _;
  }
  function k(b) {
    cc11001100_hook("b", b, "function-parameter");
    var k = cc11001100_hook("k", h(b), "var-init"),
      g = cc11001100_hook("g", +b.fail, "var-init");
    if (g !== a.FAIL.NO_CHANGE) if (g !== a.FAIL.APPSTORE) window.location.href = cc11001100_hook("window.location.href", k, "assign");else if (c.ua.isIOS()) {
      var _ = cc11001100_hook("_", "https://apps.apple.com/cn/app/id1347066247", "var-init");
      location.href = cc11001100_hook("location.href", _, "assign");
    } else v.default(k, b);
  }
  function g(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", b(a), "var-init"),
      h = cc11001100_hook("h", a.waitTime || 200, "var-init");
    c.normalInvoke(v, function () {
      k(a);
    }, h);
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.failHandler = cc11001100_hook("exports.failHandler", exports.makeScheme = cc11001100_hook("exports.makeScheme", exports.getFailUrl = cc11001100_hook("exports.getFailUrl", void 0, "assign"), "assign"), "assign"), v = cc11001100_hook("v", __importDefault(v), "assign"), exports.getFailUrl = cc11001100_hook("exports.getFailUrl", h, "assign"), exports.makeScheme = cc11001100_hook("exports.makeScheme", b, "assign"), exports.failHandler = cc11001100_hook("exports.failHandler", k, "assign"), exports.default = cc11001100_hook("exports.default", g, "assign");
}), define("@baidu/invoke-box/src/invokeQuanmin", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils"], function (require, exports, a, c) {
  "use strict";

  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.qmParams, "var-init"),
      v = cc11001100_hook("v", "https://quanmin.baidu.com/mvideo/view/quanmin", "var-init");
    return c.downloadUrl || "" + v + "?tab=" + (c.tab || "") + "&tag=" + (c.tag || "") + "&pd=" + (c.pd || "") + "&channel=" + (c.channel || "") + "&source=" + (c.source || "");
  }
  function h(c) {
    cc11001100_hook("c", c, "function-parameter");
    return c.fail && +c.fail === a.FAIL.INVOKE_URL && c.invokeURL ? c.invokeURL : c.defaultURL ? c.defaultURL : v(c);
  }
  function b(c) {
    cc11001100_hook("c", c, "function-parameter");
    if (c.iosScheme || c.androidCommand) return c.iosScheme || c.androidCommand;
    var v = cc11001100_hook("v", c.qmParams || {}, "var-init"),
      h = cc11001100_hook("h", v.page, "var-init"),
      b = cc11001100_hook("b", "source=" + v.source + "&tab=" + v.tab + "&tag=" + v.tag, "var-init"),
      k = cc11001100_hook("k", "bdminivideo://home/index?" + b, "var-init");
    if (c.mode === a.MODE.OPEN_URL) {
      switch (h) {
        case "video":
          k = cc11001100_hook("k", "bdminivideo://video/details?params=" + encodeURIComponent(JSON.stringify({
            vid: cc11001100_hook("vid", v.vid, "object-key-init")
          })) + "&" + b, "assign");
      }
      !h && c.invokeURL && (k = cc11001100_hook("k", "bdminivideo://webview?params=" + encodeURIComponent(JSON.stringify({
        url_key: cc11001100_hook("url_key", v.url_key || c.invokeURL, "object-key-init")
      })) + "&" + b, "assign"));
    }
    return k;
  }
  function k(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "https://vv.baidu.com/feedvideoui/ulink?scheme=" + encodeURIComponent(b(a)) + "&target=" + encodeURIComponent(h(a));
  }
  function g(g) {
    cc11001100_hook("g", g, "function-parameter");
    var _ = cc11001100_hook("_", g.channel || "", "var-init"),
      y = cc11001100_hook("y", g.from || "", "var-init");
    g.qmParams = cc11001100_hook("g.qmParams", g.qmParams || {}, "assign");
    var w = cc11001100_hook("w", c.extend({
      url_key: cc11001100_hook("url_key", "", "object-key-init"),
      tab: cc11001100_hook("tab", "act", "object-key-init"),
      tag: cc11001100_hook("tag", "sbldyzbdlzbpd", "object-key-init"),
      pd: cc11001100_hook("pd", "1023133u", "object-key-init"),
      channel: cc11001100_hook("channel", _ || "1023063m", "object-key-init"),
      source: cc11001100_hook("source", y || "act-1023133u-0", "object-key-init")
    }, g.qmParams), "var-init");
    g.qmParams = cc11001100_hook("g.qmParams", w, "assign");
    var P = cc11001100_hook("P", b(g), "var-init"),
      O = cc11001100_hook("O", {
        action: {
          app: cc11001100_hook("app", "Minivideo", "object-key-init"),
          type: cc11001100_hook("type", "invoke", "object-key-init"),
          scheme: cc11001100_hook("scheme", P, "object-key-init"),
          ulink: cc11001100_hook("ulink", k(g), "object-key-init"),
          pkgName: cc11001100_hook("pkgName", "com.baidu.minivideo", "object-key-init"),
          timeOut: cc11001100_hook("timeOut", 1e3, "object-key-init")
        },
        downloadInfo: {
          pkgurl: cc11001100_hook("pkgurl", h(g), "object-key-init")
        }
      }, "var-init");
    if (+g.mode === a.MODE.DOWNLOAD_PAGE) return void (location.href = cc11001100_hook("location.href", v(g), "assign"));
    var S = cc11001100_hook("S", g.fail ? +g.fail : "", "var-init");
    S && S !== a.FAIL.INVOKE_URL && S !== a.FAIL.DEFAULT_URL && delete O.downloadInfo, c.copyToClipBoard("#" + P + "#"), window.rmbgrowthbox ? window.rmbgrowthbox.Invoke && new window.rmbgrowthbox.Invoke().go(O) : c.loadScript("//b.bdstatic.com/searchbox/icms/other/js/rmbgrowthbox.min.js", function () {
      window.rmbgrowthbox.Invoke && new window.rmbgrowthbox.Invoke().go(O);
    }, function (a) {
      throw a;
    });
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.getUl = cc11001100_hook("exports.getUl", exports.getScheme = cc11001100_hook("exports.getScheme", exports.getFailUrl = cc11001100_hook("exports.getFailUrl", exports.getDefDownloadUrl = cc11001100_hook("exports.getDefDownloadUrl", void 0, "assign"), "assign"), "assign"), "assign"), exports.getDefDownloadUrl = cc11001100_hook("exports.getDefDownloadUrl", v, "assign"), exports.getFailUrl = cc11001100_hook("exports.getFailUrl", h, "assign"), exports.getScheme = cc11001100_hook("exports.getScheme", b, "assign"), exports.getUl = cc11001100_hook("exports.getUl", k, "assign"), exports.default = cc11001100_hook("exports.default", g, "assign");
});
var __extends = cc11001100_hook("__extends", this && this.__extends || function () {
    var a = function (d, c) {
      return (a = cc11001100_hook("a", Object.setPrototypeOf || {
        __proto__: cc11001100_hook("__proto__", [], "object-key-init")
      } instanceof Array && function (d, a) {
        d.__proto__ = cc11001100_hook("d.__proto__", a, "assign");
      } || function (d, a) {
        for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = cc11001100_hook("d[p]", a[p], "assign"));
      }, "assign"))(d, c);
    };
    return function (d, c) {
      function v() {
        this.constructor = cc11001100_hook("this.constructor", d, "assign");
      }
      if ("function" != typeof c && null !== c) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      a(d, c), d.prototype = cc11001100_hook("d.prototype", null === c ? Object.create(c) : (v.prototype = cc11001100_hook("v.prototype", c.prototype, "assign"), new v()), "assign");
    };
  }(), "var-init"),
  __assign = cc11001100_hook("__assign", this && this.__assign || function () {
    return __assign = cc11001100_hook("__assign", Object.assign || function (t) {
      for (var s, i = cc11001100_hook("i", 1, "var-init"), n = cc11001100_hook("n", arguments.length, "var-init"); n > i; i++) {
        s = cc11001100_hook("s", arguments[i], "assign");
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = cc11001100_hook("t[p]", s[p], "assign"));
      }
      return t;
    }, "assign"), __assign.apply(this, arguments);
  }, "var-init");
define("@baidu/invoke-box/src/invokeTiebaNew", ["require", "exports", "@baidu/invoke-box/src/invokeBase", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function (require, exports, a, c, v) {
  "use strict";

  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", new b(a), "var-init");
    c.invoke();
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.InvokeTieba = cc11001100_hook("exports.InvokeTieba", void 0, "assign");
  var b = cc11001100_hook("b", function (a) {
    function h(c) {
      cc11001100_hook("c", c, "function-parameter");
      var v = cc11001100_hook("v", a.call(this, c) || this, "var-init");
      return v.options = cc11001100_hook("v.options", c, "assign"), v.invokeScheme = cc11001100_hook("v.invokeScheme", "com.baidu.tieba://unidispatch/", "assign"), v.dealUrl(v.options), v;
    }
    return __extends(h, a), h.prototype.invoke = cc11001100_hook("h.prototype.invoke", function () {
      var a = cc11001100_hook("a", this, "var-init");
      return c.isBox() ? void c.isAppInstalled(+this.options.app, function (c) {
        if (c) {
          var v = cc11001100_hook("v", a.getScheme(a.options.url, a.options.from), "var-init");
          return void a.invokeInBox(v);
        }
        a.invokeFailHandler();
      }) : +this.options.mode === v.MODE.DOWNLOAD_PAGE ? void (location.href = cc11001100_hook("location.href", this.getDefDownloadUrl(this.options), "assign")) : void this.tbWakeup();
    }, "assign"), h.prototype.tbWakeup = cc11001100_hook("h.prototype.tbWakeup", function () {
      var a = cc11001100_hook("a", this, "var-init");
      return window.tbwakeup ? void (window.tbwakeup.init && window.tbwakeup.init(this.launchOptions(this.options))) : void c.loadScript("//b.bdstatic.com/searchbox/icms/other/js/launch_tieba.js", function () {
        return window.tbwakeup.init && window.tbwakeup.init(a.launchOptions(a.options));
      }, function (a) {
        throw a;
      });
    }, "assign"), h.prototype.getDefDownloadUrl = cc11001100_hook("h.prototype.getDefDownloadUrl", function (a) {
      var c = cc11001100_hook("c", a.tbParams, "var-init"),
        v = cc11001100_hook("v", void 0 === c ? {} : c, "var-init");
      return v.downloadUrl || "https://tieba.baidu.com/mo/q/activityDiversion/download?fr=bpushTopBannerOpenApp&obj_locate=" + a.page + "_" + a.locate + "&obj_source=no_refer";
    }, "assign"), h.prototype.dealUrl = cc11001100_hook("h.prototype.dealUrl", function (a) {
      a.url = cc11001100_hook("a.url", a.tbParams && a.tbParams.originUrl || a.invokeURL, "assign"), a.url = cc11001100_hook("a.url", a.url.replace("tieba.baidu.com/g/", "tieba.baidu.com/p/"), "assign");
    }, "assign"), h.prototype.getScheme = cc11001100_hook("h.prototype.getScheme", function (a, v) {
      var h = cc11001100_hook("h", this.urlTransformParams(a), "var-init"),
        b = cc11001100_hook("b", this.getPathAndMissionId(h), "var-init"),
        k = cc11001100_hook("k", b[0], "var-init"),
        g = cc11001100_hook("g", b[1], "var-init");
      return h.param.extdata = cc11001100_hook("h.param.extdata", JSON.stringify(this.getExtData(v, +g)), "assign"), "" + this.invokeScheme + k + "?" + c.stringifyQuery(h.param);
    }, "assign"), h.prototype.urlTransformParams = cc11001100_hook("h.prototype.urlTransformParams", function (a) {
      var v = cc11001100_hook("v", this.getDefaultTiebaUrlParams(), "var-init"),
        h = cc11001100_hook("h", a.split("#")[0].split("?"), "var-init"),
        b = cc11001100_hook("b", h[0].replace(/^https?:\/\//, ""), "var-init"),
        k = cc11001100_hook("k", h[1] || "", "var-init"),
        g = cc11001100_hook("g", c.parseQuery(k), "var-init"),
        _ = cc11001100_hook("_", /^tieba\.baidu\.com/gi.test(b) && /\/p\/(\d+)|\/f$|\/f\/$|\/mo\/q\/(posts|item|newtopic)/gi.exec(b), "var-init");
      return _ && _[1] ? (v.page = cc11001100_hook("v.page", "pb", "assign"), v.param.tid = cc11001100_hook("v.param.tid", _[1], "assign")) : _ && (/\d+/.test(g.kz) || /\d+/.test(g.tid)) ? (v.page = cc11001100_hook("v.page", "pb", "assign"), v.param.tid = cc11001100_hook("v.param.tid", g.kz || g.tid, "assign")) : _ && g.kw ? (v.page = cc11001100_hook("v.page", "frs", "assign"), v.param.kw = cc11001100_hook("v.param.kw", g.kw, "assign")) : _ && g.topic_id ? (v.page = cc11001100_hook("v.page", "topicdetail", "assign"), v.param.topic_name = cc11001100_hook("v.param.topic_name", g.topic_name, "assign"), v.param.topic_id = cc11001100_hook("v.param.topic_id", g.topic_id, "assign")) : _ && g.item_id ? (v.page = cc11001100_hook("v.page", "item", "assign"), v.param.item_id = cc11001100_hook("v.param.item_id", g.item_id, "assign")) : /^[^\/]+($|\/$)/.test(b) ? v.page = cc11001100_hook("v.page", "index", "assign") : (v.page = cc11001100_hook("v.page", "other", "assign"), v.path = cc11001100_hook("v.path", "tbwebview", "assign"), v.param.url = cc11001100_hook("v.param.url", a, "assign")), v;
    }, "assign"), h.prototype.getExtData = cc11001100_hook("h.prototype.getExtData", function (a, c) {
      var v = cc11001100_hook("v", {
        activityid: cc11001100_hook("activityid", 1111, "object-key-init"),
        missionid: cc11001100_hook("missionid", c, "object-key-init"),
        activitysource: cc11001100_hook("activitysource", "shoubai", "object-key-init")
      }, "var-init");
      return a && (v.activityid = cc11001100_hook("v.activityid", a, "assign")), v;
    }, "assign"), h.prototype.getPathAndMissionId = cc11001100_hook("h.prototype.getPathAndMissionId", function (a) {
      var c = cc11001100_hook("c", a.path, "var-init"),
        v = cc11001100_hook("v", a.page, "var-init"),
        h = cc11001100_hook("h", 3, "var-init"),
        b = cc11001100_hook("b", v, "var-init");
      switch (v) {
        case "index":
          b = cc11001100_hook("b", "homepage", "assign");
          break;
        case "pb":
          h = cc11001100_hook("h", 1, "assign");
          break;
        case "frs":
          h = cc11001100_hook("h", 2, "assign");
          break;
        case "topicdetail":
          h = cc11001100_hook("h", 3, "assign");
          break;
        case "item":
          h = cc11001100_hook("h", 4, "assign");
          break;
        case "other":
          b = cc11001100_hook("b", c, "assign");
      }
      return [b, h];
    }, "assign"), h.prototype.launchOptions = cc11001100_hook("h.prototype.launchOptions", function (a) {
      var c = cc11001100_hook("c", a.from, "var-init"),
        h = cc11001100_hook("h", a.fail, "var-init"),
        b = cc11001100_hook("b", a.mode, "var-init"),
        k = cc11001100_hook("k", a.url, "var-init"),
        g = cc11001100_hook("g", this.getDefaultTiebaUrlParams(), "var-init"),
        _ = cc11001100_hook("_", h === v.FAIL.APPSTORE, "var-init"),
        y = cc11001100_hook("y", this.getDeafultLaunchOptions(c, _, g), "var-init");
      return b === v.MODE.OPEN_URL && (y = cc11001100_hook("y", __assign(__assign({}, y), this.urlTransformParams(k)), "assign")), this.dealFailLaunchOptions(y, +h, k), y = cc11001100_hook("y", __assign(__assign(__assign({}, y), a), {
        from: cc11001100_hook("from", "bpush", "object-key-init")
      }), "assign"), y.locate = cc11001100_hook("y.locate", y.page + "_" + y.locate, "assign"), y;
    }, "assign"), h.prototype.getDeafultLaunchOptions = cc11001100_hook("h.prototype.getDeafultLaunchOptions", function (a, c, v) {
      return __assign({
        locate: cc11001100_hook("locate", a || "", "object-key-init"),
        ios9DownUrl: cc11001100_hook("ios9DownUrl", "", "object-key-init"),
        noDownload: cc11001100_hook("noDownload", !0, "object-key-init"),
        callManufacturer: cc11001100_hook("callManufacturer", c, "object-key-init"),
        failBack: function () {},
        waitTime: cc11001100_hook("waitTime", 300, "object-key-init")
      }, v);
    }, "assign"), h.prototype.getDefaultTiebaUrlParams = cc11001100_hook("h.prototype.getDefaultTiebaUrlParams", function () {
      return {
        page: cc11001100_hook("page", "index", "object-key-init"),
        path: cc11001100_hook("path", "", "object-key-init"),
        param: {
          query: cc11001100_hook("query", this.options.backQuery, "object-key-init")
        }
      };
    }, "assign"), h.prototype.dealFailLaunchOptions = cc11001100_hook("h.prototype.dealFailLaunchOptions", function (a, c, h) {
      if (c && c !== v.FAIL.INVOKE_URL && c !== v.FAIL.DEFAULT_URL) c === v.FAIL.NO_CHANGE && (a.path = cc11001100_hook("a.path", a.path || ("index" === a.page ? "homepage" : a.page) || "", "assign"), a.page = cc11001100_hook("a.page", "other", "assign"));else {
        var b = cc11001100_hook("b", this.getFailUrl(this.options) || this.getDefDownloadUrl(this.options), "var-init");
        "other" !== a.path && (a.ios9DownUrl = cc11001100_hook("a.ios9DownUrl", c === v.FAIL.INVOKE_URL ? h.split("#")[0].split("?")[1] || "" : b.split("#")[0].split("?")[1] || "", "assign")), a.failBack = cc11001100_hook("a.failBack", function () {
          return location.href = cc11001100_hook("location.href", b, "assign");
        }, "assign");
      }
    }, "assign"), h;
  }(a.InvokeBase), "var-init");
  exports.InvokeTieba = cc11001100_hook("exports.InvokeTieba", b, "assign"), exports.default = cc11001100_hook("exports.default", h, "assign");
});
var __extends = cc11001100_hook("__extends", this && this.__extends || function () {
    var a = function (d, c) {
      return (a = cc11001100_hook("a", Object.setPrototypeOf || {
        __proto__: cc11001100_hook("__proto__", [], "object-key-init")
      } instanceof Array && function (d, a) {
        d.__proto__ = cc11001100_hook("d.__proto__", a, "assign");
      } || function (d, a) {
        for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = cc11001100_hook("d[p]", a[p], "assign"));
      }, "assign"))(d, c);
    };
    return function (d, c) {
      function v() {
        this.constructor = cc11001100_hook("this.constructor", d, "assign");
      }
      if ("function" != typeof c && null !== c) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      a(d, c), d.prototype = cc11001100_hook("d.prototype", null === c ? Object.create(c) : (v.prototype = cc11001100_hook("v.prototype", c.prototype, "assign"), new v()), "assign");
    };
  }(), "var-init"),
  __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": cc11001100_hook("default", mod, "object-key-init")
    };
  }, "var-init");
define("@baidu/invoke-box/src/invokeTomas", ["require", "exports", "@baidu/invoke-box/src/invokeBase", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/invokeMarket", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/getStaticWordIntoClipBoard"], function (require, exports, a, c, v, h, b) {
  "use strict";

  function k(a) {
    cc11001100_hook("a", a, "function-parameter");
    new g(a).invoke();
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.InvokeTomas = cc11001100_hook("exports.InvokeTomas", void 0, "assign"), v = cc11001100_hook("v", __importDefault(v), "assign");
  var g = cc11001100_hook("g", function (a) {
    function k(c) {
      cc11001100_hook("c", c, "function-parameter");
      var v = cc11001100_hook("v", a.call(this, c) || this, "var-init");
      return v.options = cc11001100_hook("v.options", c, "assign"), v.iosAppStore = cc11001100_hook("v.iosAppStore", "https://apps.apple.com/cn/app/id1546173008", "assign"), v.iosUniversalLink = cc11001100_hook("v.iosUniversalLink", "https://wakeup.baidu.com/tomas/scheme", "assign"), v.scheme = cc11001100_hook("v.scheme", {}, "assign"), v;
    }
    return __extends(k, a), k.prototype.invoke = cc11001100_hook("k.prototype.invoke", function () {
      var a = cc11001100_hook("a", this.getScheme(this.options), "var-init");
      this.options.iosScheme = cc11001100_hook("this.options.iosScheme", this.options.androidCommand = cc11001100_hook("this.options.androidCommand", a, "assign"), "assign");
      var v = cc11001100_hook("v", this.options.union && "0" !== this.options.union ? this.options.union : "", "var-init"),
        h = cc11001100_hook("h", this.options.from || "", "var-init"),
        k = cc11001100_hook("k", this.options.channel || "", "var-init");
      b.staticWordIntoClipBoard(this.options, v, h, k), this.options.fail === c.FAIL.APPSTORE && (this.options.mode = cc11001100_hook("this.options.mode", c.MODE.INDEX, "assign"), a = cc11001100_hook("a", this.getScheme(this.options), "assign"), this.options.iosScheme = cc11001100_hook("this.options.iosScheme", this.options.androidCommand = cc11001100_hook("this.options.androidCommand", a, "assign"), "assign")), this.invokeApp(a);
    }, "assign"), k.prototype.invokeTomasXCX = cc11001100_hook("k.prototype.invokeTomasXCX", function () {
      var a = cc11001100_hook("a", this.options, "var-init"),
        v = cc11001100_hook("v", a.appKey, "var-init"),
        h = cc11001100_hook("h", a.invokeURL, "var-init"),
        b = cc11001100_hook("b", "tomas://" + c.XCX.PREFIX + "/" + v + "/" + h, "var-init");
      return b;
    }, "assign"), k.prototype.invokeFailHandler = cc11001100_hook("k.prototype.invokeFailHandler", function () {
      var a = cc11001100_hook("a", this.options.fail, "var-init");
      if (!h.ua.isIOS()) {
        var b = cc11001100_hook("b", this.getFailUrl(this.options), "var-init");
        a === c.FAIL.APPSTORE && v.default(b, this.options);
      }
    }, "assign"), k.prototype.getScheme = cc11001100_hook("k.prototype.getScheme", function (a) {
      var v = cc11001100_hook("v", a.mode, "var-init"),
        b = cc11001100_hook("b", a.defaultURL, "var-init"),
        k = cc11001100_hook("k", a.invokeURL, "var-init"),
        g = cc11001100_hook("g", h.parseJson(a.ext), "var-init"),
        _ = cc11001100_hook("_", g.logTomas, "var-init"),
        y = cc11001100_hook("y", g && g.extTomas || {}, "var-init"),
        w = cc11001100_hook("w", y.voiceFrom, "var-init"),
        P = cc11001100_hook("P", void 0 === w ? "home_icon" : w, "var-init"),
        O = cc11001100_hook("O", y.path, "var-init"),
        S = cc11001100_hook("S", void 0 === O ? "" : O, "var-init"),
        I = cc11001100_hook("I", y.auto_resume, "var-init"),
        U = cc11001100_hook("U", void 0 === I ? "1" : I, "var-init"),
        E = cc11001100_hook("E", y.item, "var-init"),
        C = cc11001100_hook("C", void 0 === E ? "home" : E, "var-init"),
        A = cc11001100_hook("A", "", "var-init");
      return v === c.MODE.INDEX ? A = cc11001100_hook("A", "tomas://v11/appTab/select?item=" + C + "&upgrade=1", "assign") : v === c.MODE.OPEN_URL ? A = cc11001100_hook("A", "tomas://v1/browser/open?url=" + encodeURIComponent(a.invokeURL), "assign") : v === c.MODE.XCX ? A = cc11001100_hook("A", this.invokeTomasXCX(), "assign") : v === c.MODE.VOICE ? A = cc11001100_hook("A", h.ua.isIOS() ? "tomas://voicesearch?opennewwindow=1&caller=" + S + "&minver=3.8.0.0&?&params=" + encodeURIComponent('{"voiceSource":' + S + ',"voiceFrom":' + P + "}") : "tomas://speech/startVoiceSearch?&params=" + encodeURIComponent('{"voiceSource":' + S + ',"voiceFrom":' + P + "}"), "assign") : v === c.MODE.TTS ? A = cc11001100_hook("A", h.ua.isIOS() ? "tomas://v11/appTab/select?item=" + C : "tomas://" + C + "/openfullplayer?params=" + encodeURIComponent('{auto_resume":' + U + "}"), "assign") : v === c.MODE.MISSION && (A = cc11001100_hook("A", "tomas://v1/easybrowse/open?zoomswitch=0&newbrowser=1&url=" + encodeURIComponent(k || b), "assign")), A ? (A += cc11001100_hook("A", "&needlog=1&logargs=" + encodeURIComponent(JSON.stringify(_)), "assign"), h.ua.isIOS() && h.isSupportULink() ? this.iosUniversalLink + "?scheme=" + encodeURIComponent(A) + "&target=" + this.iosAppStore : A) : void 0;
    }, "assign"), k;
  }(a.InvokeBase), "var-init");
  exports.InvokeTomas = cc11001100_hook("exports.InvokeTomas", g, "assign"), exports.default = cc11001100_hook("exports.default", k, "assign");
}), define("@baidu/invoke-box/src/invokeWeibo", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils"], function (require, exports, a, c) {
  "use strict";

  function v(c) {
    cc11001100_hook("c", c, "function-parameter");
    if (c.scheme) return c.scheme;
    var v = cc11001100_hook("v", c.mode, "var-init"),
      h = cc11001100_hook("h", c.wbParams, "var-init");
    if (v === a.MODE.OPEN_URL) {
      var b = cc11001100_hook("b", "", "var-init"),
        g = cc11001100_hook("g", {
          lfid: cc11001100_hook("lfid", h.lfid, "object-key-init"),
          luicode: cc11001100_hook("luicode", h.luicode, "object-key-init"),
          launchid: cc11001100_hook("launchid", h.launchid, "object-key-init"),
          WM: cc11001100_hook("WM", h.WM, "object-key-init")
        }, "var-init");
      switch (h.type) {
        case "profile":
          b = cc11001100_hook("b", k + "userinfo", "assign"), g.uid = cc11001100_hook("g.uid", h.uid, "assign");
          break;
        case "detail":
          b = cc11001100_hook("b", k + "detail", "assign"), g.mblogid = cc11001100_hook("g.mblogid", h.mid, "assign");
          break;
        case "search":
          b = cc11001100_hook("b", k + "searchall", "assign"), g.containerid = cc11001100_hook("g.containerid", h.containerid, "assign"), g.q = cc11001100_hook("g.q", encodeURIComponent(h.query), "assign"), g.extparam = cc11001100_hook("g.extparam", h.extparam, "assign");
      }
      var _ = cc11001100_hook("_", "?", "var-init"),
        y = cc11001100_hook("y", [], "var-init");
      for (var w in g) y.push(w + "=" + g[w]);
      return _ += cc11001100_hook("_", y.join("&"), "assign"), b + _;
    }
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", {
      scheme: cc11001100_hook("scheme", v(a), "object-key-init"),
      failCallback: function () {}
    }, "var-init");
    return c;
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", h(a), "var-init"),
      b = cc11001100_hook("b", a.waitTime || 200, "var-init");
    c.normalInvoke(v.scheme, function () {}, b);
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.normalizeOptions = cc11001100_hook("exports.normalizeOptions", exports.getScheme = cc11001100_hook("exports.getScheme", void 0, "assign"), "assign");
  var k = cc11001100_hook("k", "sinaweibo://", "var-init");
  exports.getScheme = cc11001100_hook("exports.getScheme", v, "assign"), exports.normalizeOptions = cc11001100_hook("exports.normalizeOptions", h, "assign"), exports.default = cc11001100_hook("exports.default", b, "assign");
});
var __extends = cc11001100_hook("__extends", this && this.__extends || function () {
  var a = function (d, c) {
    return (a = cc11001100_hook("a", Object.setPrototypeOf || {
      __proto__: cc11001100_hook("__proto__", [], "object-key-init")
    } instanceof Array && function (d, a) {
      d.__proto__ = cc11001100_hook("d.__proto__", a, "assign");
    } || function (d, a) {
      for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = cc11001100_hook("d[p]", a[p], "assign"));
    }, "assign"))(d, c);
  };
  return function (d, c) {
    function v() {
      this.constructor = cc11001100_hook("this.constructor", d, "assign");
    }
    if ("function" != typeof c && null !== c) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
    a(d, c), d.prototype = cc11001100_hook("d.prototype", null === c ? Object.create(c) : (v.prototype = cc11001100_hook("v.prototype", c.prototype, "assign"), new v()), "assign");
  };
}(), "var-init");
define("@baidu/invoke-box/src/invokeWeiboNew", ["require", "exports", "@baidu/invoke-box/src/invokeBase", "@baidu/invoke-box/src/consts"], function (require, exports, a, c) {
  "use strict";

  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    new h(a).invoke();
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.InvokeWeibo = cc11001100_hook("exports.InvokeWeibo", void 0, "assign");
  var h = cc11001100_hook("h", function (a) {
    function v(c) {
      cc11001100_hook("c", c, "function-parameter");
      var v = cc11001100_hook("v", a.call(this, c) || this, "var-init");
      return v.options = cc11001100_hook("v.options", c, "assign"), v.BASE_SCHEME = cc11001100_hook("v.BASE_SCHEME", "sinaweibo://", "assign"), v.type2SchemeHead = cc11001100_hook("v.type2SchemeHead", new Map([["profile", "userinfo"], ["detail", "detail"], ["search", "searchall"]]), "assign"), v;
    }
    return __extends(v, a), v.prototype.invoke = cc11001100_hook("v.prototype.invoke", function () {
      this.invokeApp(this.getScheme(this.options));
    }, "assign"), v.prototype.getSchemeHead = cc11001100_hook("v.prototype.getSchemeHead", function (a) {
      return "" + this.BASE_SCHEME + this.type2SchemeHead.get(a);
    }, "assign"), v.prototype.getExtraParams = cc11001100_hook("v.prototype.getExtraParams", function (a) {
      var c = cc11001100_hook("c", {
        lfid: cc11001100_hook("lfid", a.lfid, "object-key-init"),
        luicode: cc11001100_hook("luicode", a.luicode, "object-key-init"),
        launchid: cc11001100_hook("launchid", a.launchid, "object-key-init"),
        WM: cc11001100_hook("WM", a.WM, "object-key-init")
      }, "var-init");
      switch (a.type) {
        case "profile":
          c.uid = cc11001100_hook("c.uid", a.uid, "assign");
          break;
        case "detail":
          c.mblogid = cc11001100_hook("c.mblogid", a.mid, "assign");
          break;
        case "search":
          c.containerid = cc11001100_hook("c.containerid", a.containerid, "assign"), c.q = cc11001100_hook("c.q", encodeURIComponent(a.query), "assign"), c.extparam = cc11001100_hook("c.extparam", a.extparam, "assign");
      }
      return c;
    }, "assign"), v.prototype.getScheme = cc11001100_hook("v.prototype.getScheme", function (a) {
      if (a.scheme) return a.scheme;
      var v = cc11001100_hook("v", this.options, "var-init"),
        h = cc11001100_hook("h", v.mode, "var-init"),
        b = cc11001100_hook("b", v.wbParams, "var-init");
      if (h === c.MODE.OPEN_URL) {
        var k = cc11001100_hook("k", this.getSchemeHead(b.type), "var-init"),
          g = cc11001100_hook("g", this.getExtraParams(b), "var-init");
        return k + "?" + Object.keys(g).map(function (a) {
          return a + "=" + g[a];
        }).join("&");
      }
    }, "assign"), v;
  }(a.InvokeBase), "var-init");
  exports.InvokeWeibo = cc11001100_hook("exports.InvokeWeibo", h, "assign"), exports.default = cc11001100_hook("exports.default", v, "assign");
});
var __extends = cc11001100_hook("__extends", this && this.__extends || function () {
    var a = function (d, c) {
      return (a = cc11001100_hook("a", Object.setPrototypeOf || {
        __proto__: cc11001100_hook("__proto__", [], "object-key-init")
      } instanceof Array && function (d, a) {
        d.__proto__ = cc11001100_hook("d.__proto__", a, "assign");
      } || function (d, a) {
        for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = cc11001100_hook("d[p]", a[p], "assign"));
      }, "assign"))(d, c);
    };
    return function (d, c) {
      function v() {
        this.constructor = cc11001100_hook("this.constructor", d, "assign");
      }
      if ("function" != typeof c && null !== c) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      a(d, c), d.prototype = cc11001100_hook("d.prototype", null === c ? Object.create(c) : (v.prototype = cc11001100_hook("v.prototype", c.prototype, "assign"), new v()), "assign");
    };
  }(), "var-init"),
  __importDefault = cc11001100_hook("__importDefault", this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": cc11001100_hook("default", mod, "object-key-init")
    };
  }, "var-init");
define("@baidu/invoke-box/src/invokeWepod", ["require", "exports", "@baidu/invoke-box/src/invokeBase", "@searchfe/user-agent", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/invokeMarket"], function (require, exports, a, c, v, h) {
  "use strict";

  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    new k(a).invoke();
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.InvokeWepod = cc11001100_hook("exports.InvokeWepod", void 0, "assign"), c = cc11001100_hook("c", __importDefault(c), "assign"), h = cc11001100_hook("h", __importDefault(h), "assign");
  var k = cc11001100_hook("k", function (a) {
    function b(c) {
      cc11001100_hook("c", c, "function-parameter");
      var v = cc11001100_hook("v", a.call(this, c) || this, "var-init");
      return v.options = cc11001100_hook("v.options", c, "assign"), v.BASE_SCHEME = cc11001100_hook("v.BASE_SCHEME", "bdwepod://", "assign"), v.UL_SCHEME = cc11001100_hook("v.UL_SCHEME", "https://ulinkmvideo.baidu.com/wisedrama/system/wepodulink", "assign"), v.iosAppStore = cc11001100_hook("v.iosAppStore", "https://apps.apple.com/cn/app/id1541812473", "assign"), v;
    }
    return __extends(b, a), b.prototype.invoke = cc11001100_hook("b.prototype.invoke", function () {
      var a = cc11001100_hook("a", this.getScheme(this.options), "var-init");
      this.invokeApp(a);
    }, "assign"), b.prototype.invokeFailHandler = cc11001100_hook("b.prototype.invokeFailHandler", function () {
      var a = cc11001100_hook("a", this.options.fail, "var-init"),
        b = cc11001100_hook("b", this.getFailUrl(this.options), "var-init");
      a === v.FAIL.APPSTORE && (c.default.isIOS() && (b = cc11001100_hook("b", this.iosAppStore, "assign")), h.default(b, this.options));
    }, "assign"), b.prototype.getScheme = cc11001100_hook("b.prototype.getScheme", function (a) {
      if (a.scheme) return a.scheme;
      var v = cc11001100_hook("v", this.getAndroidScheme(a), "var-init");
      return c.default.isIOS() ? this.UL_SCHEME + "?scheme=" + encodeURIComponent(v) + "&target=" + encodeURIComponent(this.iosAppStore) : v;
    }, "assign"), b.prototype.getAndroidScheme = cc11001100_hook("b.prototype.getAndroidScheme", function (a) {
      var c = cc11001100_hook("c", a.ext, "var-init"),
        v = cc11001100_hook("v", c.launchChannel, "var-init"),
        h = cc11001100_hook("h", c.downChannel, "var-init");
      return this.BASE_SCHEME + "?params=" + encodeURIComponent(JSON.stringify(this.getParams(a))) + "&source=" + this.getParams(a) + "&tag=&tab=&launchChannel=" + v + "&downChannel=" + h;
    }, "assign"), b.prototype.getParams = cc11001100_hook("b.prototype.getParams", function (a) {
      var c = cc11001100_hook("c", a.ext.source, "var-init");
      return {
        source: cc11001100_hook("source", c, "object-key-init")
      };
    }, "assign"), b;
  }(a.InvokeBase), "var-init");
  exports.InvokeWepod = cc11001100_hook("exports.InvokeWepod", k, "assign"), exports.default = cc11001100_hook("exports.default", b, "assign");
});
var __assign = cc11001100_hook("__assign", this && this.__assign || function () {
  return __assign = cc11001100_hook("__assign", Object.assign || function (t) {
    for (var s, i = cc11001100_hook("i", 1, "var-init"), n = cc11001100_hook("n", arguments.length, "var-init"); n > i; i++) {
      s = cc11001100_hook("s", arguments[i], "assign");
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = cc11001100_hook("t[p]", s[p], "assign"));
    }
    return t;
  }, "assign"), __assign.apply(this, arguments);
}, "var-init");
define("@baidu/invoke-box/src/logargs", ["require", "exports", "@baidu/invoke-box/src/utils"], function (require, exports, a) {
  "use strict";

  function c() {
    var c = cc11001100_hook("c", window.location.href, "var-init"),
      v = cc11001100_hook("v", a.parseQuery(c) || {}, "var-init");
    return 1 === +v.isBdboxShare;
  }
  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", {
      name: cc11001100_hook("name", "unknown", "object-key-init"),
      version: cc11001100_hook("version", 0, "object-key-init")
    }, "var-init");
    a = cc11001100_hook("a", a || navigator.userAgent, "assign");
    var v = cc11001100_hook("v", {
      Weibo: cc11001100_hook("Weibo", /weibo/i, "object-key-init"),
      Wechat: cc11001100_hook("Wechat", /micromessenger\//i, "object-key-init"),
      QQ: cc11001100_hook("QQ", /QQ\//, "object-key-init")
    }, "var-init");
    for (var i in v) v.hasOwnProperty(i) && (c["is" + i] = cc11001100_hook("c[\"is\" + i]", v[i].test(a), "assign"));
    var h = cc11001100_hook("h", window, "var-init");
    c.isUC = cc11001100_hook("c.isUC", a.match(/UC/) || h.ucweb || h.ucbrowser, "assign");
    var b = cc11001100_hook("b", a.match(/Windows Phone ([\d.]+)/), "var-init");
    if (b) return c.win10 = cc11001100_hook("c.win10", !0, "assign"), c.version = cc11001100_hook("c.version", b[1], "assign"), c.name = cc11001100_hook("c.name", "win10", "assign"), c;
    var k = cc11001100_hook("k", a.match(/(Android);?\s+([\d.]+)?/), "var-init");
    if (k) return c.android = cc11001100_hook("c.android", !0, "assign"), c.version = cc11001100_hook("c.version", k[2], "assign"), c.name = cc11001100_hook("c.name", "android", "assign"), c;
    var g = cc11001100_hook("g", a.match(/(iPad).*OS\s([\d_]+)/), "var-init"),
      _ = cc11001100_hook("_", a.match(/(iPod)(.*OS\s([\d_]+))?/), "var-init"),
      y = cc11001100_hook("y", !g && a.match(/(iPhone\sOS)\s([\d_]+)/), "var-init");
    return y && !_ ? (c.ios = cc11001100_hook("c.ios", c.iphone = cc11001100_hook("c.iphone", !0, "assign"), "assign"), c.version = cc11001100_hook("c.version", y[2].replace(/_/g, "."), "assign"), c.name = cc11001100_hook("c.name", "ios", "assign"), c) : g ? (c.ios = cc11001100_hook("c.ios", c.ipad = cc11001100_hook("c.ipad", !0, "assign"), "assign"), c.name = cc11001100_hook("c.name", "ios", "assign"), c.version = cc11001100_hook("c.version", g[2].replace(/_/g, "."), "assign"), c) : _ ? (c.name = cc11001100_hook("c.name", "ios", "assign"), c.ios = cc11001100_hook("c.ios", c.ipod = cc11001100_hook("c.ipod", !0, "assign"), "assign"), c.version = cc11001100_hook("c.version", _[3] ? _[3].replace(/_/g, ".") : null, "assign"), c) : c;
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", window.navigator.userAgent, "var-init"),
      v = cc11001100_hook("v", {}, "var-init");
    a.ios ? v = cc11001100_hook("v", exports.appRegsIOS, "assign") : a.android && (v = cc11001100_hook("v", exports.appRegsAndroid, "assign"));
    var h = cc11001100_hook("h", exports.appRegsCommon, "var-init");
    for (var b in h) h.hasOwnProperty(b) && (v[b] = cc11001100_hook("v[b]", h[b], "assign"));
    for (var i in v) if (v.hasOwnProperty(i) && v[i].test(c) && (a.ios || "safari" !== i)) return i;
    if (a.ios) {
      if (/\bsafari\/\d{3}\.\d$/i.test(c) && /\bAppleWebKit\/\d{3}\.\d\.\d/i.test(c)) return "safari";
      if (/\bsafari\/\d{4}\.\d{2}$/i.test(c)) return "liebaobrowser";
    } else if (a.android && /\bChrome\//i.test(c)) return "chrome";
    return "other";
  }
  function b(c) {
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", c.extLogContent, "var-init"),
      h = cc11001100_hook("h", void 0 === v ? {} : v, "var-init"),
      b = cc11001100_hook("b", c.browserid, "var-init"),
      k = cc11001100_hook("k", void 0 === b ? "" : b, "var-init"),
      g = cc11001100_hook("g", c.qid, "var-init"),
      _ = cc11001100_hook("_", void 0 === g ? "" : g, "var-init"),
      y = cc11001100_hook("y", c.union && "0" !== c.union ? c.union : "", "var-init"),
      w = cc11001100_hook("w", {
        from: cc11001100_hook("from", y, "object-key-init"),
        browserid: cc11001100_hook("browserid", k, "object-key-init"),
        qid: cc11001100_hook("qid", _, "object-key-init"),
        qidsids: cc11001100_hook("qidsids", a.getCookie("H_WISE_SIDS") || "", "object-key-init"),
        timestamp: cc11001100_hook("timestamp", new Date().getTime(), "object-key-init"),
        isPrivate: cc11001100_hook("isPrivate", c.isPrivate, "object-key-init")
      }, "var-init");
    return {
      ext_content: cc11001100_hook("ext_content", __assign(__assign({}, w), h), "object-key-init")
    };
  }
  function k(k, g) {
    cc11001100_hook("k", k, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    var _ = cc11001100_hook("_", g.from, "var-init"),
      y = cc11001100_hook("y", void 0 === _ ? "other" : _, "var-init"),
      w = cc11001100_hook("w", g.channel, "var-init"),
      P = cc11001100_hook("P", void 0 === w ? "" : w, "var-init"),
      O = cc11001100_hook("O", b(g), "var-init"),
      S = cc11001100_hook("S", v(), "var-init"),
      I = cc11001100_hook("I", h(S), "var-init"),
      U = cc11001100_hook("U", {
        source: cc11001100_hook("source", y, "object-key-init"),
        from: cc11001100_hook("from", "openbox", "object-key-init"),
        page: cc11001100_hook("page", I, "object-key-init"),
        type: cc11001100_hook("type", c() ? "share" : "", "object-key-init"),
        value: cc11001100_hook("value", "", "object-key-init"),
        channel: cc11001100_hook("channel", P, "object-key-init"),
        extlog: cc11001100_hook("extlog", O, "object-key-init"),
        baiduId: cc11001100_hook("baiduId", a.getBaiduId() || "", "object-key-init")
      }, "var-init");
    return k + "&needlog=1&logargs=" + encodeURIComponent(JSON.stringify(U));
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.addLogargs = cc11001100_hook("exports.addLogargs", exports.getExtlog = cc11001100_hook("exports.getExtlog", exports.getAppName = cc11001100_hook("exports.getAppName", exports.detect = cc11001100_hook("exports.detect", exports.appRegsAndroid = cc11001100_hook("exports.appRegsAndroid", exports.appRegsIOS = cc11001100_hook("exports.appRegsIOS", exports.appRegsCommon = cc11001100_hook("exports.appRegsCommon", void 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), exports.appRegsCommon = cc11001100_hook("exports.appRegsCommon", {
    sinaweibo: cc11001100_hook("sinaweibo", /\bweibo\b/i, "object-key-init"),
    weixin: cc11001100_hook("weixin", /micromessenger\//i, "object-key-init"),
    qq: cc11001100_hook("qq", /\bQQ\//, "object-key-init"),
    qzone: cc11001100_hook("qzone", /Qzone\//, "object-key-init"),
    qqbrowser: cc11001100_hook("qqbrowser", /MQQBrowser\//i, "object-key-init"),
    uc: cc11001100_hook("uc", /UCBrowser\//i, "object-key-init"),
    baidubrowser: cc11001100_hook("baidubrowser", /baidubrowser\//, "object-key-init"),
    sougoubrowser: cc11001100_hook("sougoubrowser", /\bSogouMobileBrowser\//i, "object-key-init"),
    search360: cc11001100_hook("search360", /\bmso_app\b/i, "object-key-init"),
    sougousearch: cc11001100_hook("sougousearch", /\bSogousearch\//i, "object-key-init"),
    quark: cc11001100_hook("quark", /\bQuark\//i, "object-key-init"),
    b2345: cc11001100_hook("b2345", /\bMb2345Browser\//i, "object-key-init")
  }, "assign"), exports.appRegsIOS = cc11001100_hook("exports.appRegsIOS", {
    chrome: cc11001100_hook("chrome", /\bCriOS\/([\d.]+)/, "object-key-init"),
    firefox: cc11001100_hook("firefox", /\bFxiOS\//i, "object-key-init"),
    maxthon: cc11001100_hook("maxthon", /\bMXiOS\//i, "object-key-init")
  }, "assign"), exports.appRegsAndroid = cc11001100_hook("exports.appRegsAndroid", {
    firefox: cc11001100_hook("firefox", /\bFirefox\//i, "object-key-init"),
    opera: cc11001100_hook("opera", /\bOPR\//i, "object-key-init"),
    dolphinbrowser: cc11001100_hook("dolphinbrowser", /\bDolphinBrowserCN\//i, "object-key-init"),
    liebaobrowser: cc11001100_hook("liebaobrowser", /\bliebao/i, "object-key-init"),
    ebrowser: cc11001100_hook("ebrowser", /\bebrowser\//i, "object-key-init"),
    lebrowser: cc11001100_hook("lebrowser", /\blebrowser\//i, "object-key-init"),
    huohoubrowser: cc11001100_hook("huohoubrowser", /\bHuohouBrowser\//i, "object-key-init"),
    vivobrowser: cc11001100_hook("vivobrowser", /\bVivoBrowser\//i, "object-key-init"),
    oppobrowser: cc11001100_hook("oppobrowser", /\bOppoBrowser\//i, "object-key-init"),
    miuibrowser: cc11001100_hook("miuibrowser", /MiuiBrowser\//i, "object-key-init"),
    samsungbrowser: cc11001100_hook("samsungbrowser", /\bSamsungBrowser\//i, "object-key-init"),
    jinlibrowser: cc11001100_hook("jinlibrowser", /\bGNBR\//i, "object-key-init"),
    letvbrowser: cc11001100_hook("letvbrowser", /\bEUI\sBrowser/i, "object-key-init"),
    meizubrowser: cc11001100_hook("meizubrowser", /\bMZBrowser/i, "object-key-init")
  }, "assign"), exports.detect = cc11001100_hook("exports.detect", v, "assign"), exports.getAppName = cc11001100_hook("exports.getAppName", h, "assign"), exports.getExtlog = cc11001100_hook("exports.getExtlog", b, "assign"), exports.addLogargs = cc11001100_hook("exports.addLogargs", k, "assign");
}), define("@baidu/invoke-box/src/openXCX", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/base64"], function (require, exports, a, c, v) {
  "use strict";

  function h(h) {
    cc11001100_hook("h", h, "function-parameter");
    if (!h || "object" != typeof h) return !1;
    if (!c.isBox()) return !1;
    var b = cc11001100_hook("b", +h.app, "var-init"),
      k = cc11001100_hook("k", +h.mode, "var-init");
    if (b !== a.APP.LIBRARY && b !== a.APP.TIEBA && b !== a.APP.IQY && (b !== a.APP.BD || k !== a.MODE.XCX)) return !1;
    var g = cc11001100_hook("g", v.atob("QGJhaWR1L3NtYXJ0YXBw"), "var-init");
    require([g], function (v) {
      var b = cc11001100_hook("b", h.ext && !c.isEmptyObject(h.ext) ? h.ext : c.extend({
        token: cc11001100_hook("token", a.XCX.TOKEN, "object-key-init"),
        url: cc11001100_hook("url", h.invokeURL, "object-key-init")
      }, h.extLogContent || {}), "var-init");
      v({
        appKey: cc11001100_hook("appKey", h.appKey, "object-key-init"),
        url: cc11001100_hook("url", h.invokeURL, "object-key-init"),
        from: cc11001100_hook("from", h.xcxFrom || "", "object-key-init"),
        ext: cc11001100_hook("ext", b, "object-key-init")
      });
    });
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.default = cc11001100_hook("exports.default", h, "assign");
}), define("@baidu/invoke-box/src/scene", ["require", "exports", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils"], function (require, exports, a, c) {
  "use strict";

  function v(v, h) {
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var b = cc11001100_hook("b", a.PRIVATE_SCENE, "var-init");
    if (!v.isPrivate || +h === b.CONTINUE_INVOKE) return !0;
    var k;
    switch (+h) {
      case b.INVOKE_URL:
        k = cc11001100_hook("k", v.invokeURL, "assign");
        break;
      case b.DEFAULT_URL:
        k = cc11001100_hook("k", v.failUrl, "assign");
        break;
      case b.NO_CHANGE:
    }
    c.isValidURL(k) && (window.location.href = cc11001100_hook("window.location.href", k, "assign"));
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", a.scene, "var-init");
    if (c.isEmptyObject(v)) return !0;
    var h = cc11001100_hook("h", !0, "var-init");
    return void 0 !== v[b] && (h = cc11001100_hook("h", k[b](a, v[b]), "assign")), h;
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.privateSceneHandler = cc11001100_hook("exports.privateSceneHandler", void 0, "assign");
  var b = cc11001100_hook("b", a.SCENE.PRIVATE, "var-init"),
    k = cc11001100_hook("k", {}, "var-init");
  k[b] = cc11001100_hook("k[b]", v, "assign"), exports.privateSceneHandler = cc11001100_hook("exports.privateSceneHandler", v, "assign"), exports.default = cc11001100_hook("exports.default", h, "assign");
}), define("@baidu/invoke-box/src/utils", ["require", "exports", "@baidu/invoke-box/src/consts", "@searchfe/user-agent", "@baidu/get-app-info"], function (require, exports, a) {
  "use strict";

  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "[object Object]" === Object.prototype.toString.call(a);
  }
  function v() {
    var a;
    if (window.webkitRequestFileSystem) window.webkitRequestFileSystem(window.TEMPORARY, 1, function () {
      a = cc11001100_hook("a", !1, "assign");
    }, function () {
      a = cc11001100_hook("a", !0, "assign");
    });else try {
      if (window.localStorage) if (/Safari/.test(window.navigator.userAgent)) {
        if (window.safariIncognito) a = cc11001100_hook("a", !0, "assign");else try {
          window.openDatabase(null, null, null, null), window.localStorage.setItem("test", 1);
        } catch (e) {
          a = cc11001100_hook("a", !0, "assign");
        }
      } else try {
        window.localStorage.setItem("test", 1);
      } catch (e) {
        a = cc11001100_hook("a", !0, "assign");
      }
    } catch (e) {
      console.error("localStorage error:", e);
    }
    if ("undefined" == typeof a) {
      a = cc11001100_hook("a", !1, "assign");
      try {
        window.localStorage && window.localStorage.removeItem("test");
      } catch (e) {}
    }
    return function () {
      return a;
    };
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var v = cc11001100_hook("v", [], "var-init"), h = cc11001100_hook("h", 1, "var-init"); h < arguments.length; h++) v[h - 1] = cc11001100_hook("v[h - 1]", arguments[h], "assign");
    var b = cc11001100_hook("b", arguments.length, "var-init");
    if (2 > b || null == a) return a;
    for (var k = cc11001100_hook("k", 1, "var-init"); b > k; k++) {
      var g = cc11001100_hook("g", arguments[k], "var-init");
      if (c(g)) {
        for (var _ in g) g.hasOwnProperty(_) && (a[_] = cc11001100_hook("a[_]", g[_], "assign"));
        var y = cc11001100_hook("y", ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], "var-init");
        if (!{
          toString: cc11001100_hook("toString", null, "object-key-init")
        }.propertyIsEnumerable("toString")) for (var w = cc11001100_hook("w", 0, "var-init"), P = cc11001100_hook("P", y.length, "var-init"); P > w; w++) _ = cc11001100_hook("_", y[w], "assign"), g.hasOwnProperty(_) && (a[_] = cc11001100_hook("a[_]", g[_], "assign"));
      }
    }
    return a;
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var v = cc11001100_hook("v", [], "var-init"), h = cc11001100_hook("h", 1, "var-init"); h < arguments.length; h++) v[h - 1] = cc11001100_hook("v[h - 1]", arguments[h], "assign");
    var k = cc11001100_hook("k", arguments.length, "var-init");
    if (2 > k || null == a) return a;
    for (var g = cc11001100_hook("g", 1, "var-init"); k > g; g++) {
      var _ = cc11001100_hook("_", arguments[g], "var-init");
      if (c(_)) for (var y in _) _.hasOwnProperty(y) && (a[y] = cc11001100_hook("a[y]", c(_[y]) ? b({}, a[y], _[y]) : _[y], "assign"));
    }
    return a;
  }
  function k(a) {
    cc11001100_hook("a", a, "function-parameter");
    a || (a = cc11001100_hook("a", new Date(), "assign"));
    var c = cc11001100_hook("c", a.getFullYear(), "var-init"),
      m = cc11001100_hook("m", a.getMonth() + 1, "var-init");
    10 > m && (m = cc11001100_hook("m", "0" + m, "assign"));
    var d = cc11001100_hook("d", a.getDate(), "var-init");
    10 > d && (d = cc11001100_hook("d", "0" + d, "assign"));
    var v = cc11001100_hook("v", a.getHours(), "var-init");
    return 10 > v && (v = cc11001100_hook("v", "0" + v, "assign")), c + "-" + m + "-" + d + "-" + v;
  }
  function g(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    var h = cc11001100_hook("h", "function" == typeof c, "var-init"),
      b = cc11001100_hook("b", "function" == typeof v, "var-init"),
      k = cc11001100_hook("k", document.createElement("script"), "var-init");
    k.src = cc11001100_hook("k.src", a, "assign"), k.async = cc11001100_hook("k.async", !0, "assign");
    var g = cc11001100_hook("g", "Failed to loading script: " + a, "var-init");
    k.onload = cc11001100_hook("k.onload", k.onreadystatechange = cc11001100_hook("k.onreadystatechange", function () {
      this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState ? b && v(g) : (k.onload = cc11001100_hook("k.onload", k.onreadystatechange = cc11001100_hook("k.onreadystatechange", null, "assign"), "assign"), k = cc11001100_hook("k", null, "assign"), h && c());
    }, "assign"), "assign"), k.onerror = cc11001100_hook("k.onerror", function () {
      k.onerror = cc11001100_hook("k.onerror", null, "assign"), k = cc11001100_hook("k", null, "assign"), b && v(g);
    }, "assign");
    var _ = cc11001100_hook("_", document.getElementsByTagName("head")[0], "var-init");
    _.appendChild(k);
  }
  function _() {
    var a = cc11001100_hook("a", window.navigator || {}, "var-init"),
      c = cc11001100_hook("c", a.userAgent, "var-init");
    return / baiduboxapp\//i.test(c) && !/ (lite|info|mission) baiduboxapp/.test(c);
  }
  function y(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", document.createElement("input"), "var-init");
    c.setAttribute("readonly", ""), c.value = cc11001100_hook("c.value", a, "assign"), document.body.appendChild(c), c.select(), c.setSelectionRange(0, c.value.length), c.removeAttribute("readonly");
    try {
      document.execCommand("copy");
    } catch (v) {}
    try {
      c.blur();
    } catch (v) {}
    c.remove();
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.replace(/^\?/, "").split("&"), "assign");
    var c,
      v,
      h = cc11001100_hook("h", {}, "var-init");
    return a.forEach(function (a) {
      a = cc11001100_hook("a", a.split("="), "assign"), c = cc11001100_hook("c", a[0], "assign"), v = cc11001100_hook("v", a.length >= 2 ? a[1] : "", "assign");
      try {
        v && (v = cc11001100_hook("v", decodeURIComponent(v), "assign"));
      } catch (e) {}
      h[c] ? (Array.isArray(h[c]) || (h[c] = cc11001100_hook("h[c]", [h[c]], "assign")), h[c].push(v)) : h[c] = cc11001100_hook("h[c]", v, "assign");
    }), h;
  }
  function P(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", [], "var-init");
    return Object.keys(a).forEach(function (v) {
      var h = cc11001100_hook("h", a[v], "var-init");
      Array.isArray(h) || (h = cc11001100_hook("h", [h], "assign")), h.forEach(function (a) {
        "" !== a && c.push(v + "=" + encodeURIComponent(a));
      });
    }), c.join("&");
  }
  function O(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", a || function () {}, "assign"), c = cc11001100_hook("c", c || 100, "assign");
    var v = cc11001100_hook("v", Date.now(), "var-init");
    setTimeout(function () {
      Date.now() - v < c + 200 && a();
    }, c);
  }
  function S(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    if (void 0 === v && (v = cc11001100_hook("v", 200, "assign")), !_() && U()) window.location.href = cc11001100_hook("window.location.href", a, "assign");else if (!_() && exports.ua.isAndroid() && exports.ua.getChromeVersion()[0] > 55) window.location.href = cc11001100_hook("window.location.href", a, "assign");else {
      var h = cc11001100_hook("h", document.createElement("iframe"), "var-init");
      h.style.display = cc11001100_hook("h.style.display", "none", "assign"), h.src = cc11001100_hook("h.src", a, "assign"), document.body.appendChild(h), setTimeout(function () {
        document.body.removeChild(h), h = cc11001100_hook("h", null, "assign");
      }, 0);
    }
    O(c, v);
  }
  function I(c, v) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    return v = cc11001100_hook("v", "function" == typeof v ? v : function () {}, "assign"), _() && a.APP_INFO[c] ? void X.getAppInfo(a.APP_INFO[c]).then(function (a) {
      return a && 0 === +a.result ? v(!0) : void v(!1);
    }).catch(function () {
      v(!1);
    }) : v(!1);
  }
  function U() {
    return exports.ua.isIOS() && exports.ua.iOSVersion()[0] >= 9;
  }
  function E() {
    var a = cc11001100_hook("a", ["webkit", "moz", "ms", "o"], "var-init");
    if ("hidden" in document) return "hidden";
    for (var i = cc11001100_hook("i", 0, "var-init"), c = cc11001100_hook("c", a.length, "var-init"); c > i; i++) if (a[i] + "Hidden" in document) return a[i] + "Hidden";
    return null;
  }
  function C(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", E(), "var-init");
    if (v) {
      var h = cc11001100_hook("h", v.replace(/hidden/i, "") + "visibilitychange", "var-init"),
        b = function (a) {
          document.removeEventListener(h, a), document.removeEventListener("baiduboxappvisibilitychange", a);
        },
        k = function () {
          document[v] && c(a), b(k);
        };
      setTimeout(function () {
        b(k);
      }, 1500), document.addEventListener(h, k, !1), document.addEventListener("baiduboxappvisibilitychange", k, !1);
    }
  }
  function A(a) {
    cc11001100_hook("a", a, "function-parameter");
    if ("object" == typeof a) return a;
    var c = cc11001100_hook("c", {}, "var-init");
    if (a && "string" == typeof a) try {
      c = cc11001100_hook("c", JSON.parse(a), "assign");
    } catch (e) {}
    return c;
  }
  function R(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var c in a) if (a.hasOwnProperty(c)) return !1;
    return !0;
  }
  function L(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a && /https?:\/\//gi.test(a);
  }
  function D() {
    var a = cc11001100_hook("a", {}, "var-init");
    if (!window.location.search) return a;
    for (var c = cc11001100_hook("c", window.location.search.slice(1).split("&"), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < c.length; i++) {
      var v = cc11001100_hook("v", c[i].split("="), "var-init");
      a[v[0]] = cc11001100_hook("a[v[0]]", v[1], "assign");
    }
    return a;
  }
  function N(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? D()[a] : "";
  }
  function B(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 === arguments.length) return document.cookie;
    var c = cc11001100_hook("c", new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)").exec(document.cookie), "var-init");
    return c ? c[1] : null;
  }
  function T() {
    return B("BAIDUID") ? B("BAIDUID").split(":FG")[0] : "";
  }
  function M(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    var h = cc11001100_hook("h", {
      appUrl: cc11001100_hook("appUrl", a, "object-key-init")
    }, "var-init");
    return v && (h.minVersion = cc11001100_hook("h.minVersion", v, "assign")), "baiduboxapp://v7/vendor/ad/deeplink?params=" + encodeURIComponent(JSON.stringify(h)) + "&callback=" + c;
  }
  function F(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    return v = cc11001100_hook("v", v || "invokeDeepLinkCallback" + new Date().getTime().toString(32), "assign"), window[v] = cc11001100_hook("window[v]", function (v) {
      try {
        if (v && 0 === +JSON.parse(v).status) return void ("function" == typeof a && a());
        "function" == typeof c && c();
      } catch (e) {}
    }, "assign"), v;
  }
  function j(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    var h = cc11001100_hook("h", a.indexOf("?") > 0 ? "&" : "?", "var-init");
    return new RegExp("[?&]" + c + "=").test(a) ? a : a + h + c + "=" + v;
  }
  function K(c, v, h) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var b,
      k,
      h = cc11001100_hook("h", h || 200, "var-init");
    Object.keys(a.ANDROID_MARKET).forEach(function (v) {
      var h = cc11001100_hook("h", a.ANDROID_MARKET[v], "var-init");
      h.reg.test(window.navigator.userAgent) && (b = cc11001100_hook("b", h.scheme.replace("${0}", c), "assign"), k = cc11001100_hook("k", h.downloadFirst || !1, "assign"));
    }), b && (window.location.href = cc11001100_hook("window.location.href", b, "assign")), setTimeout(function () {
      window.location.href = cc11001100_hook("window.location.href", v, "assign");
    }, h);
  }
  function H(a) {
    cc11001100_hook("a", a, "function-parameter");
    return JSON.stringify({
      browserid: cc11001100_hook("browserid", a || "", "object-key-init"),
      baiduid: cc11001100_hook("baiduid", T(), "object-key-init")
    });
  }
  Object.defineProperty(exports, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  }), exports.getTokenP4 = cc11001100_hook("exports.getTokenP4", exports.invokeMarket = cc11001100_hook("exports.invokeMarket", exports.addQuery = cc11001100_hook("exports.addQuery", exports.getDeepLinkCallback = cc11001100_hook("exports.getDeepLinkCallback", exports.getDeepLinkInvokeScheme = cc11001100_hook("exports.getDeepLinkInvokeScheme", exports.getBaiduId = cc11001100_hook("exports.getBaiduId", exports.getCookie = cc11001100_hook("exports.getCookie", exports.getParamByKeyFromURL = cc11001100_hook("exports.getParamByKeyFromURL", exports.getParamsFromURL = cc11001100_hook("exports.getParamsFromURL", exports.isValidURL = cc11001100_hook("exports.isValidURL", exports.isEmptyObject = cc11001100_hook("exports.isEmptyObject", exports.parseJson = cc11001100_hook("exports.parseJson", exports.registerPagehideListener = cc11001100_hook("exports.registerPagehideListener", exports.getHiddenProp = cc11001100_hook("exports.getHiddenProp", exports.isSupportULink = cc11001100_hook("exports.isSupportULink", exports.isAppInstalled = cc11001100_hook("exports.isAppInstalled", exports.normalInvoke = cc11001100_hook("exports.normalInvoke", exports.invokeFail = cc11001100_hook("exports.invokeFail", exports.stringifyQuery = cc11001100_hook("exports.stringifyQuery", exports.parseQuery = cc11001100_hook("exports.parseQuery", exports.copyToClipBoard = cc11001100_hook("exports.copyToClipBoard", exports.isBox = cc11001100_hook("exports.isBox", exports.loadScript = cc11001100_hook("exports.loadScript", exports.getFormatTime = cc11001100_hook("exports.getFormatTime", exports.extendDeeply = cc11001100_hook("exports.extendDeeply", exports.extend = cc11001100_hook("exports.extend", exports.isPrivateMode = cc11001100_hook("exports.isPrivateMode", exports.isObject = cc11001100_hook("exports.isObject", exports.ua = cc11001100_hook("exports.ua", void 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), exports.ua = cc11001100_hook("exports.ua", require("@searchfe/user-agent"), "assign");
  var X = cc11001100_hook("X", require("@baidu/get-app-info"), "var-init");
  exports.isObject = cc11001100_hook("exports.isObject", c, "assign"), exports.isPrivateMode = cc11001100_hook("exports.isPrivateMode", v, "assign"), exports.extend = cc11001100_hook("exports.extend", h, "assign"), exports.extendDeeply = cc11001100_hook("exports.extendDeeply", b, "assign"), exports.getFormatTime = cc11001100_hook("exports.getFormatTime", k, "assign"), exports.loadScript = cc11001100_hook("exports.loadScript", g, "assign"), exports.isBox = cc11001100_hook("exports.isBox", _, "assign"), exports.copyToClipBoard = cc11001100_hook("exports.copyToClipBoard", y, "assign"), exports.parseQuery = cc11001100_hook("exports.parseQuery", w, "assign"), exports.stringifyQuery = cc11001100_hook("exports.stringifyQuery", P, "assign"), exports.invokeFail = cc11001100_hook("exports.invokeFail", O, "assign"), exports.normalInvoke = cc11001100_hook("exports.normalInvoke", S, "assign"), exports.isAppInstalled = cc11001100_hook("exports.isAppInstalled", I, "assign"), exports.isSupportULink = cc11001100_hook("exports.isSupportULink", U, "assign"), exports.getHiddenProp = cc11001100_hook("exports.getHiddenProp", E, "assign"), exports.registerPagehideListener = cc11001100_hook("exports.registerPagehideListener", C, "assign"), exports.parseJson = cc11001100_hook("exports.parseJson", A, "assign"), exports.isEmptyObject = cc11001100_hook("exports.isEmptyObject", R, "assign"), exports.isValidURL = cc11001100_hook("exports.isValidURL", L, "assign"), exports.getParamsFromURL = cc11001100_hook("exports.getParamsFromURL", D, "assign"), exports.getParamByKeyFromURL = cc11001100_hook("exports.getParamByKeyFromURL", N, "assign"), exports.getCookie = cc11001100_hook("exports.getCookie", B, "assign"), exports.getBaiduId = cc11001100_hook("exports.getBaiduId", T, "assign"), exports.getDeepLinkInvokeScheme = cc11001100_hook("exports.getDeepLinkInvokeScheme", M, "assign"), exports.getDeepLinkCallback = cc11001100_hook("exports.getDeepLinkCallback", F, "assign"), exports.addQuery = cc11001100_hook("exports.addQuery", j, "assign"), exports.invokeMarket = cc11001100_hook("exports.invokeMarket", K, "assign"), exports.getTokenP4 = cc11001100_hook("exports.getTokenP4", H, "assign");
}), define("@baidu/invoke-box", ["@baidu/invoke-box/index"], function (mod) {
  return mod;
});