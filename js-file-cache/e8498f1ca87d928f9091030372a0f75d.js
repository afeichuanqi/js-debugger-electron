/*!
 * aria v4.6.13
 * (c) Licensed under the GPL3.0 license.  
 * Copyright 2022 All Rights Reserved
 * license-cnwza-cn 
 * elease time : Wed Mar 01 2023 02:10:44 GMT+0800 (中国标准时间)
 */
var mainversion = cc11001100_hook("mainversion", 4, "var-init"); /*! For license information please see aria.js.LICENSE.txt */
!function (e) {
  var t = cc11001100_hook("t", {}, "var-init");
  function n(r) {
    cc11001100_hook("r", r, "function-parameter");
    if (t[r]) return t[r].exports;
    var i = cc11001100_hook("i", t[r] = cc11001100_hook("t[r]", {
      i: cc11001100_hook("i", r, "object-key-init"),
      l: cc11001100_hook("l", !1, "object-key-init"),
      exports: {}
    }, "assign"), "var-init");
    return e[r].call(i.exports, i, i.exports, n), i.l = cc11001100_hook("i.l", !0, "assign"), i.exports;
  }
  n.m = cc11001100_hook("n.m", e, "assign"), n.c = cc11001100_hook("n.c", t, "assign"), n.d = cc11001100_hook("n.d", function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: cc11001100_hook("get", r, "object-key-init")
    });
  }, "assign"), n.r = cc11001100_hook("n.r", function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: cc11001100_hook("value", "Module", "object-key-init")
    }), Object.defineProperty(e, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }, "assign"), n.t = cc11001100_hook("n.t", function (e, t) {
    if (1 & t && (e = cc11001100_hook("e", n(e), "assign")), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = cc11001100_hook("r", Object.create(null), "var-init");
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      value: cc11001100_hook("value", e, "object-key-init")
    }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
      return e[t];
    }.bind(null, i));
    return r;
  }, "assign"), n.n = cc11001100_hook("n.n", function (e) {
    var t = cc11001100_hook("t", e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    }, "var-init");
    return n.d(t, "a", t), t;
  }, "assign"), n.o = cc11001100_hook("n.o", function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, "assign"), n.p = cc11001100_hook("n.p", "/", "assign"), n(n.s = cc11001100_hook("n.s", 136, "assign"));
}([function (e, t, n) {
  n(66);
  var r = cc11001100_hook("r", n(67), "var-init"),
    i = cc11001100_hook("i", {
      "[object String]": cc11001100_hook("[object String]", "string", "object-key-init"),
      "[object Boolean]": cc11001100_hook("[object Boolean]", "boolean", "object-key-init"),
      "[object Undefined]": cc11001100_hook("[object Undefined]", "undefined", "object-key-init"),
      "[object Number]": cc11001100_hook("[object Number]", "number", "object-key-init"),
      "[object Object]": cc11001100_hook("[object Object]", "object", "object-key-init"),
      "[object Error]": cc11001100_hook("[object Error]", "error", "object-key-init"),
      "[object Function]": cc11001100_hook("[object Function]", "function", "object-key-init"),
      "[object Date]": cc11001100_hook("[object Date]", "date", "object-key-init"),
      "[object Array]": cc11001100_hook("[object Array]", "array", "object-key-init"),
      "[object RegExp]": cc11001100_hook("[object RegExp]", "regexp", "object-key-init"),
      "[object Null]": cc11001100_hook("[object Null]", "null", "object-key-init"),
      "[object Arguments]": cc11001100_hook("[object Arguments]", "arguments", "object-key-init"),
      "[object Window]": cc11001100_hook("[object Window]", "window", "object-key-init"),
      "[object HTMLDocument]": cc11001100_hook("[object HTMLDocument]", "document", "object-key-init"),
      "[object NodeList]": cc11001100_hook("[object NodeList]", "array", "object-key-init"),
      "[object HTMLCollection]": cc11001100_hook("[object HTMLCollection]", "array", "object-key-init")
    }, "var-init");
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    return i[Object.prototype.toString.call(e)] || (e instanceof Node && 1 == e.nodeType ? "element" : "");
  }
  function a(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e && e.jTool && (e = cc11001100_hook("e", e.nodeList, "assign"));
    var n = cc11001100_hook("n", o(e), "var-init");
    if ("array" === n || "nodeList" === n || "arguments" === n) for (var r = cc11001100_hook("r", Array.prototype.slice.call(e, 0, e.length), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) {
      var a = cc11001100_hook("a", r[i], "var-init");
      t.call(a, i, a);
    } else if ("object" === n) for (var i in e) if (!1 === t.call(e[i], i, e[i])) break;
  }
  var s = cc11001100_hook("s", {
    getBrowserInfo: function () {
      var e,
        t = cc11001100_hook("t", navigator.userAgent.toLowerCase(), "var-init"),
        n = cc11001100_hook("n", "", "var-init"),
        r = cc11001100_hook("r", "", "var-init");
      if (t.indexOf("msie") > 0) {
        n = cc11001100_hook("n", "IE", "assign"), r = cc11001100_hook("r", "" + t.match(/msie [\d.]+;/gi), "assign");
      } else if (t.indexOf("trident") > 0) n = cc11001100_hook("n", "IE", "assign"), r = cc11001100_hook("r", 11, "assign");else if (t.indexOf("edge") > 0) n = cc11001100_hook("n", "IE", "assign"), r = cc11001100_hook("r", 12, "assign");else if (t.indexOf("firefox") > 0) {
        n = cc11001100_hook("n", "firefox", "assign"), r = cc11001100_hook("r", "" + t.match(/firefox\/[\d.]+/gi), "assign");
      } else if (t.indexOf("chrome") > 0) {
        n = cc11001100_hook("n", "chrome", "assign"), r = cc11001100_hook("r", "" + t.match(/chrome\/[\d.]+/gi), "assign");
      } else if (t.indexOf("safari") > 0 && t.indexOf("chrome") < 0) {
        n = cc11001100_hook("n", "safari", "assign"), r = cc11001100_hook("r", "" + t.match(/version\/[\d.]+/gi), "assign");
      } else if (t.indexOf("opera") >= 0) {
        n = cc11001100_hook("n", "opera", "assign"), r = cc11001100_hook("r", "" + t.match(/version\/[\d.]+/gi), "assign");
      } else {
        if ("Netscape" == navigator.appName) {
          try {
            r = cc11001100_hook("r", t.split(";")[7].replace(/[ ]/g, "").match(/[\d\.]/g).toString().replace(/[,]/g, ""), "assign");
          } catch (i) {
            r = cc11001100_hook("r", "11", "assign");
          }
          n = cc11001100_hook("n", "IE", "assign");
        }
      }
      return e = cc11001100_hook("e", (r + "").replace(/[^0-9.]/gi, ""), "assign"), {
        browser: cc11001100_hook("browser", n, "object-key-init"),
        version: cc11001100_hook("version", parseInt(e), "object-key-init")
      };
    },
    language: cc11001100_hook("language", (navigator.browserLanguage || navigator.language).toLowerCase(), "object-key-init")
  }, "var-init");
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (null == e || e == undefined || "" == e) return 0;
    for (var t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", -1, "var-init"), r = cc11001100_hook("r", e.length, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r; i++) t += cc11001100_hook("t", (n = cc11001100_hook("n", e.charCodeAt(i), "assign")) >= 0 && n <= 128 ? 1 : 2, "assign");
    return t;
  }
  function c(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (!e) return "";
    var r = cc11001100_hook("r", t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "var-init");
    return e.replace(new RegExp(r, "g"), n);
  }
  var u = cc11001100_hook("u", {
    toJson: function (e) {
      for (var t = cc11001100_hook("t", {}, "var-init"), n = cc11001100_hook("n", (e = cc11001100_hook("e", e || location.search.substring(1), "assign")).split("&"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) {
        var i = cc11001100_hook("i", n[r].indexOf("="), "var-init");
        if (-1 !== i) {
          var o = cc11001100_hook("o", n[r].substring(0, i), "var-init"),
            a = cc11001100_hook("a", n[r].substring(i + 1), "var-init");
          a = cc11001100_hook("a", decodeURIComponent(a), "assign");
          try {
            t[o] = cc11001100_hook("t[o]", JSON.parse(a), "assign");
          } catch (s) {
            t[o] = cc11001100_hook("t[o]", a, "assign");
          }
        }
      }
      return t;
    },
    val: function (e, t) {
      if (t = cc11001100_hook("t", t || location.search.substring(1), "assign"), !new RegExp("(^|/?|&)" + e + "=([^&]*)(/s|&|$)", "i").test(t)) return "";
      try {
        return JSON.parse(RegExp.$2);
      } catch (n) {
        return RegExp.$2;
      }
    }
  }, "var-init");
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) {
      return e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", e.toString(), "assign")).replace(/<script[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), "assign")).replace(/aria-[a-zA-z]+=\"(.*?)\"/gi, ""), "assign")).replace("  ", ""), "assign")).replace("  ", ""), "assign")).replace("  ", ""), "assign")).replace(/<style[^<]*(?:(?!<\/script>)<[^<]*)*<\/style>/gi, ""), "assign")).replace(/ /g, "acaicaele"), "assign")).replace(/<</g, "《"), "assign")).replace(/>>/g, "》"), "assign")).replace(/<[a-zA-Z]\/?[^>]*>|(\n|\t|\r)|(\s)/g, ""), "assign")).replace(/acaicaele/g, " "), "assign")).trim(), "assign");
    }
  }
  var f = cc11001100_hook("f", null, "var-init");
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (null == e || void 0 === e) return "";
    return e = cc11001100_hook("e", e.trim().replace(/\\|\/|\?|\？|\,|\，|\*|\"|\“|\”|\'|\-|\‘|\’|\<|\>|\{|\}|\[|\]|\【|\】|\：|\:|\、|\^|\$|\!|\~|\`|\•|\|/g, ""), "assign");
  }
  e.exports = cc11001100_hook("e.exports", {
    addEventListener: function (e, t, n, r) {
      if (e) try {
        e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent("on" + t, n.bind(e));
      } catch (i) {}
    },
    removeEventListener: function (e, t, n) {
      e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n.bind(e));
    },
    isWindow: function (e) {
      return null !== e && e === e.window;
    },
    noop: function () {},
    type: cc11001100_hook("type", o, "object-key-init"),
    isEmptyObject: function (e) {
      var t = cc11001100_hook("t", !0, "var-init");
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t = cc11001100_hook("t", !1, "assign"));
      return t;
    },
    each: cc11001100_hook("each", a, "object-key-init"),
    createDOM: function (e) {
      var t = cc11001100_hook("t", document.createElement("div"), "var-init");
      return t.innerHTML = cc11001100_hook("t.innerHTML", e, "assign"), t.childNodes;
    },
    getStyle: function (e, t) {
      try {
        return t ? window.getComputedStyle(e)[t] : window.getComputedStyle(e);
      } catch (n) {
        return null;
      }
    },
    browser: cc11001100_hook("browser", s, "object-key-init"),
    genID: function (e) {
      return e || (e = cc11001100_hook("e", 4, "assign")), "aria" + Number(Math.random().toString().substr(3, e) + Date.now()).toString(36);
    },
    splitBylength: function (e, t) {
      var n = cc11001100_hook("n", e.split(/([,，。；;])/), "var-init"),
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", "", "var-init");
      do {
        for (var o = cc11001100_hook("o", 0, "var-init"); o < n.length; o++) if (i += cc11001100_hook("i", n[o], "assign"), o < n.length - 1 && (i += cc11001100_hook("i", n[o += cc11001100_hook("o", 1, "assign")], "assign")), l(i) > 80 || o == n.length - 1 || o < n.length - 1 && l(i) + l(n[o + 1]) > 106) {
          n.splice(0, o + 1), p(i).length > 1 && r.push(i), i = cc11001100_hook("i", "", "assign");
          break;
        }
      } while (n.length > 0);
      return r;
    },
    replaceAll: cc11001100_hook("replaceAll", c, "object-key-init"),
    formatString: function () {
      if (arguments.length < 1) return null;
      for (var e = cc11001100_hook("e", arguments[0], "var-init"), t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var n = cc11001100_hook("n", "{" + (t - 1) + "}", "var-init");
        e = cc11001100_hook("e", c(e, n, arguments[t]), "assign");
      }
      return e;
    },
    toPascalCase: function (e) {
      return e && e.length ? 1 === e.length ? e.charAt(0).toUpperCase() : e.charAt(0).toUpperCase() + e.substr(1) : e;
    },
    toCamelCase: function (e) {
      return e && e.length ? 1 === e.length ? e.charAt(0).toLowerCase() : e.charAt(0).toLowerCase() + e.substr(1) : e;
    },
    queryString: cc11001100_hook("queryString", u, "object-key-init"),
    formatBoolean: function (e) {
      return void 0 === e ? e : Boolean(e);
    },
    formatInt: function (e) {
      return void 0 === e ? 0 : parseInt(e);
    },
    reMoveHtml: cc11001100_hook("reMoveHtml", d, "object-key-init"),
    formatStrToRead: function (e, t) {
      var n;
      if (e) return t && (e = cc11001100_hook("e", c(d(e), ",,", ","), "assign"), e = cc11001100_hook("e", c(e, ",,", ","), "assign")), e.length > 1 && ("," === e.substr(0, 1) && (e = cc11001100_hook("e", e.substr(1, e.length), "assign")), "," === e.substr(e.length - 1, 1) && (e = cc11001100_hook("e", e.substr(0, e.length - 1), "assign"))), n = cc11001100_hook("n", {
        lt: cc11001100_hook("lt", "<", "object-key-init"),
        gt: cc11001100_hook("gt", ">", "object-key-init"),
        nbsp: cc11001100_hook("nbsp", " ", "object-key-init"),
        amp: cc11001100_hook("amp", "&", "object-key-init"),
        quot: cc11001100_hook("quot", '"', "object-key-init")
      }, "assign"), e = cc11001100_hook("e", e.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (e, t) {
        return n[t];
      }), "assign");
    },
    strToObj: function (e) {
      if (void 0 === e) return e;
      try {
        return JSON.parse(e);
      } catch (t) {
        return {};
      }
    },
    HtmlElemRoles: {
      moveoverBesides: cc11001100_hook("moveoverBesides", ["div", "ul", "table", "tr", "html", "body"], "object-key-init"),
      noregion: cc11001100_hook("noregion", ["option", "radiobox", "checkbox"], "object-key-init"),
      heading: cc11001100_hook("heading", ["h1", "h2", "h3", "h4", "h5", "h6", "h7"], "object-key-init"),
      textbox: cc11001100_hook("textbox", ["text", "tel", "date"], "object-key-init"),
      dialog: cc11001100_hook("dialog", ["alert", "alertdialog", "dialog", "confirm"], "object-key-init"),
      mobileDoubleInre: cc11001100_hook("mobileDoubleInre", ["combobox", "select", "select-one", "select-multiple", "input", "textarea", "a", "button", "checkbox", "radio", "tab", "menu"], "object-key-init"),
      select: cc11001100_hook("select", ["combobox", "select", "select-one", "select-multiple"], "object-key-init"),
      foucsable0: cc11001100_hook("foucsable0", ["0", "region", "combobox", "select", "select-one", "select-multiple", "input", "textarea", "a", "button", "checkbox", "group", "heading", "log", "menu", "menubar", "option", "radio", "radiogroup", "row"], "object-key-init"),
      foucsable1: cc11001100_hook("foucsable1", ["tablistbox", "alert", "alertdialog", "dialog", "dd", "dt", "confirm", "application", "grid", "gridcell", "menuitem", "menuitemcheckbox", "menuitemradio", "presentation", "tr", "td", "th", "li"], "object-key-init")
    },
    stopBubble: function (e) {
      (e = cc11001100_hook("e", e || window.event, "assign")) && (e && e.stopPropagation ? e.stopPropagation() : e.cancelBubble = cc11001100_hook("e.cancelBubble", !0, "assign"));
    },
    stopDefault: function (e) {
      if (e = cc11001100_hook("e", e || window.event, "assign")) return e && e.preventDefault ? e.preventDefault() : e.returnValue = cc11001100_hook("e.returnValue", !1, "assign"), !1;
    },
    arrToSizzle: function (e) {
      var t = cc11001100_hook("t", e.toString(), "var-init");
      return a(e, function (e, n) {
        t += cc11001100_hook("t", ",[role='" + n + "']", "assign");
      }), t;
    },
    triggerEvent: function (e, t) {
      if (document.createEvent) {
        var n = cc11001100_hook("n", document.createEvent("HTMLEvents"), "var-init");
        n.initEvent(t, !0, !0), n.eventName = cc11001100_hook("n.eventName", t, "assign"), e.dispatchEvent(n);
      } else {
        var r = cc11001100_hook("r", document.createEventObject(), "var-init");
        r.eventType = cc11001100_hook("r.eventType", t, "assign"), r.eventName = cc11001100_hook("r.eventName", t, "assign"), e.fireEvent("on" + r.eventType, r);
      }
    },
    colorRgbToHex: function (e) {
      var t = cc11001100_hook("t", e, "var-init");
      if (/^(rgb|RGB)/.test(t)) {
        for (var n = cc11001100_hook("n", t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), "var-init"), r = cc11001100_hook("r", "#", "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) {
          var o = cc11001100_hook("o", Number(n[i]).toString(16), "var-init");
          o.length < 2 && (o = cc11001100_hook("o", "0" + o, "assign")), r += cc11001100_hook("r", o, "assign");
        }
        return 7 !== r.length && (r = cc11001100_hook("r", t, "assign")), r;
      }
      if (/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) {
        var a = cc11001100_hook("a", t.replace(/#/, "").split(""), "var-init");
        if (6 === a.length) return t;
        if (3 === a.length) {
          for (var s = cc11001100_hook("s", "#", "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < a.length; l += cc11001100_hook("l", 1, "assign")) s += cc11001100_hook("s", a[l] + a[l], "assign");
          return s;
        }
      }
      return t;
    },
    colorHexToRgb: function (e) {
      if ((e = cc11001100_hook("e", e.toLowerCase(), "assign")) && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)) {
        if (4 === e.length) {
          for (var t = cc11001100_hook("t", "#", "var-init"), n = cc11001100_hook("n", 1, "var-init"); n < 4; n += cc11001100_hook("n", 1, "assign")) t += cc11001100_hook("t", e.slice(n, n + 1).concat(e.slice(n, n + 1)), "assign");
          e = cc11001100_hook("e", t, "assign");
        }
        for (var r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 1, "var-init"); i < 7; i += cc11001100_hook("i", 2, "assign")) r.push(parseInt("0x" + e.slice(i, i + 2)));
        return "RGB(" + r.join(",") + ")";
      }
      return e;
    },
    isMobile: function () {
      if (null != f) return f;
      for (var e = cc11001100_hook("e", navigator.userAgent, "var-init"), t = cc11001100_hook("t", ["2.0 MMP", "240320", "AvantGo", "BlackBerry", "Blazer", "Cellphone", "Danger", "DoCoMo", "Elaine/3.0", "EudoraWeb", "hiptop", "IEMobile", "KYOCERA/WX310K", "LG/U990", "MIDP-2.0", "MMEF20", "MOT-V", "NetFront", "Newt", "Nintendo Wii", "Nitro", "Nokia", "Opera Mini", "Opera Mobi", "Miui", "Palm", "Playstation Portable", "portalmmm", "Proxinet", "ProxiNet", "SHARP-TQ-GX10", "Small", "SonyEricsson", "Symbian OS", "SymbianOS", "TS21i-10", "UP.Browser", "UP.Link", "Windows CE", "WinWAP", "Android", "iPhone", "Windows Phone", "HTC"], "var-init"), n = cc11001100_hook("n", !1, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) if (e.indexOf(t[r]) > 0) {
        n = cc11001100_hook("n", !0, "assign");
        break;
      }
      var i = cc11001100_hook("i", window.screen.width, "var-init"),
        o = cc11001100_hook("o", window.screen.height, "var-init");
      return i < 500 && o < 800 && (n = cc11001100_hook("n", !0, "assign")), f = cc11001100_hook("f", n, "assign"), n;
    },
    toCssCamelCase: function (e) {
      return e.replace(/[A-Z]/g, function (e) {
        return "-" + e.toLowerCase();
      });
    },
    isIE: function () {
      return navigator.userAgent.toLowerCase().indexOf("trident") > -1;
    },
    hasScrollbar: function () {
      return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
    },
    getMouseOffset: function (e) {
      var t = cc11001100_hook("t", document.documentElement.scrollTop || document.body.scrollTop, "var-init");
      return {
        x: cc11001100_hook("x", (document.documentElement.scrollLeft || document.body.scrollLeft) + e.clientX, "object-key-init"),
        y: cc11001100_hook("y", t + e.clientY, "object-key-init")
      };
    },
    isElementInViewport: function (e) {
      var t = cc11001100_hook("t", e.getBoundingClientRect(), "var-init");
      return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
    },
    scroll: function h(e, t) {
      var n = cc11001100_hook("n", t - e, "var-init"),
        r = cc11001100_hook("r", e, "var-init");
      setTimeout(function () {
        var i = cc11001100_hook("i", Math.ceil(n / 10), "var-init");
        r += cc11001100_hook("r", i, "assign"), window.scrollTo(r, e), n > 10 || n < -10 ? h(r, t) : window.scrollTo(r, t);
      }, 1);
    },
    isFF: function () {
      return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    },
    appendCss: function (e, t, n, i) {
      var o = cc11001100_hook("o", e.getElementById(t), "var-init");
      if (o) o.innerHTML = cc11001100_hook("o.innerHTML", n, "assign");else try {
        (o = cc11001100_hook("o", e.createElement("style"), "assign")).setAttribute("type", "text/css"), o.id = cc11001100_hook("o.id", t, "assign"), o.innerHTML = cc11001100_hook("o.innerHTML", n, "assign"), i || o.setAttribute("isaria", "true"), r.getContainerDom(e).appendChild(o);
      } catch (a) {}
    },
    getLength: cc11001100_hook("getLength", l, "object-key-init"),
    replaceSpChar: cc11001100_hook("replaceSpChar", p, "object-key-init"),
    getContainerDom: cc11001100_hook("getContainerDom", r.getContainerDom, "object-key-init"),
    getPosition_Iframe: function (e) {
      var t = cc11001100_hook("t", e.view, "var-init");
      if (!t) return {
        x: cc11001100_hook("x", e.clientX, "object-key-init"),
        y: cc11001100_hook("y", e.clientY, "object-key-init")
      };
      if (t == window || !t.parent) return {
        x: cc11001100_hook("x", e.clientX, "object-key-init"),
        y: cc11001100_hook("y", e.clientY, "object-key-init")
      };
      for (var n = cc11001100_hook("n", t.parent, "var-init"), r = cc11001100_hook("r", t.location, "var-init"), i = cc11001100_hook("i", null, "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); null != n && void 0 !== n;) {
        for (var s = cc11001100_hook("s", 0, "var-init"); s < n.frames.length; s++) if (r == n.frames[s].location) {
          i = cc11001100_hook("i", n.frames[s].frameElement, "assign");
          break;
        }
        if (i) do {
          o += cc11001100_hook("o", i.offsetLeft - i.scrollLeft || 0, "assign"), a += cc11001100_hook("a", i.offsetTop - i.scrollTop || 0, "assign"), i = cc11001100_hook("i", i.offsetParent, "assign");
        } while (i);
        if (n == window) break;
        r = cc11001100_hook("r", n.location, "assign"), n = cc11001100_hook("n", n.parent, "assign");
      }
      return {
        x: cc11001100_hook("x", o + e.clientX - (document.documentElement.scrollLeft || 0), "object-key-init"),
        y: cc11001100_hook("y", a + e.clientY - document.documentElement.scrollTop || 0, "object-key-init")
      };
    },
    sort1: function (e) {
      for (var t = cc11001100_hook("t", 0, "var-init"); t < e.length - 1; t++) for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length - 1 - t; n++) if (e[n] > e[n + 1]) {
        var r = cc11001100_hook("r", e[n], "var-init");
        e[n] = cc11001100_hook("e[n]", e[n + 1], "assign"), e[n + 1] = cc11001100_hook("e[n + 1]", r, "assign");
      }
      return e;
    },
    getStyleSheetFromId: function (e, t) {
      t || (t = cc11001100_hook("t", document, "assign"));
      for (var n = cc11001100_hook("n", t.styleSheets, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) {
        var i = cc11001100_hook("i", n[r], "var-init");
        if (i.ownerNode && ownerNode.ownerNode.id == e) return i;
      }
    },
    IsIos: function () {
      return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /macintosh|mac os x/i.test(navigator.userAgent);
    },
    DevLog: function (e) {}
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(65), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(22), "var-init"),
    a = function (e, t) {
      var n;
      if (e) {
        if (i.isWindow(e)) n = cc11001100_hook("n", [e], "assign"), t = cc11001100_hook("t", undefined, "assign");else if (e instanceof HTMLElement) n = cc11001100_hook("n", [e], "assign"), t = cc11001100_hook("t", undefined, "assign");else if (e instanceof NodeList || e instanceof Array) n = cc11001100_hook("n", e, "assign"), t = cc11001100_hook("t", undefined, "assign");else if (e.jTool) n = cc11001100_hook("n", e.nodeList, "assign"), t = cc11001100_hook("t", undefined, "assign");else if (/<.+>/.test(e)) n = cc11001100_hook("n", i.createDOM(e), "assign"), t = cc11001100_hook("t", undefined, "assign");else {
          if (t) "string" == typeof t ? t = cc11001100_hook("t", s(t), "assign") : t instanceof HTMLElement ? t = cc11001100_hook("t", [t], "assign") : t instanceof NodeList || (t.jTool ? t = cc11001100_hook("t", t.nodeList, "assign") : "document" == i.type(t) || (t = cc11001100_hook("t", undefined, "assign")));else try {
            n = cc11001100_hook("n", s(e), "assign");
          } catch (l) {
            n = cc11001100_hook("n", [e], "assign");
          }
          if (t) if (n = cc11001100_hook("n", [], "assign"), "document" == i.type(t)) try {
            n = cc11001100_hook("n", t.querySelectorAll(e), "assign");
          } catch (l) {
            n = cc11001100_hook("n", [e], "assign");
          } else i.each(t, function (t, r) {
            try {
              i.each(r.querySelectorAll(e), function (e, t) {
                t && n.push(t);
              });
            } catch (l) {}
          });
        }
      } else e = cc11001100_hook("e", null, "assign");
      return n && 0 !== n.length || (n = cc11001100_hook("n", [], "assign")), this.jTool = cc11001100_hook("this.jTool", !0, "assign"), this.context = cc11001100_hook("this.context", t || document, "assign"), this.nodeList = cc11001100_hook("this.nodeList", n, "assign"), this.length = cc11001100_hook("this.length", this.nodeList ? this.nodeList.length : 0, "assign"), this.querySelector = cc11001100_hook("this.querySelector", e, "assign"), a.prototype.extend = cc11001100_hook("a.prototype.extend", o, "assign"), a.prototype.extend(n), this.length > 0 ? (this.aria = cc11001100_hook("this.aria", r(this, a), "assign"), this.firstNode = cc11001100_hook("this.firstNode", this.nodeList[0], "assign")) : (this.aria = cc11001100_hook("this.aria", {}, "assign"), this.firstNode = cc11001100_hook("this.firstNode", null, "assign")), this;
    };
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", document.querySelectorAll(e) || [], "var-init");
    return l(document, function (n) {
      for (var r = cc11001100_hook("r", n.querySelectorAll(e), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) {
        var o = cc11001100_hook("o", r[i], "var-init");
        t.push(o);
      }
    }), t;
  }
  function l(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e || (e = cc11001100_hook("e", document, "assign"));
    for (var n = cc11001100_hook("n", e.getElementsByTagName("iframe"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) try {
      var o = cc11001100_hook("o", n[r].getAttribute("id"), "var-init");
      o || (o = cc11001100_hook("o", i.genID(), "assign"), n[r].setAttribute("id", o));
      var a = cc11001100_hook("a", n[r].contentWindow.document, "var-init");
      if (!a.body) continue;
      t && "function" == typeof t && t(a, n[r]), l(a, t);
    } catch (s) {}
  }
  e.exports = cc11001100_hook("e.exports", a, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(12), "var-init"),
    i = cc11001100_hook("i", n(22), "var-init"),
    o = cc11001100_hook("o", n(14), "var-init"),
    a = cc11001100_hook("a", n(0), "var-init"),
    s = cc11001100_hook("s", n(4), "var-init"),
    l = cc11001100_hook("l", r.keys.runtime, "var-init"),
    c = cc11001100_hook("c", r.keys.data, "var-init"),
    u = cc11001100_hook("u", r.keys.userSettings, "var-init"),
    d = cc11001100_hook("d", [], "var-init"),
    f = cc11001100_hook("f", {
      loadPy: function () {
        var e = cc11001100_hook("e", document.getElementById("ariapy"), "var-init");
        e || ((e = cc11001100_hook("e", document.createElement("script"), "assign")).setAttribute("id", "ariapy"), e.setAttribute("charset", "UTF-8"), e.setAttribute("data-for", "result"), e.setAttribute("crossorigin", "anonymous"), e.src = cc11001100_hook("e.src", f.road + "public/pinyin.min.js?v=" + decodeURI(document.location.hostname), "assign"), document.querySelector("head").appendChild(e));
      },
      hostEnable: {
        get highlight() {
          if (f.Theme) return f.Theme.highlight.enable;
        },
        get mouseover() {
          if (f.Theme) return f.Theme.mouseover.enable;
        },
        get focus() {
          if (f.Theme) return f.Theme.focus.enable;
        },
        get region() {
          if (f.Theme) return f.Theme.region.enable;
        },
        get voice() {
          return o.get(c.settings.voice.enable);
        },
        get shortCutIcon() {
          return o.get(c.settings.shortCutIcon);
        },
        get fontScal() {
          return o.get(c.settings.scale) >= 0;
        },
        get enable() {
          return o.get(c.settings.enable);
        }
      },
      init: function (e) {
        var t = cc11001100_hook("t", o.get(l.settings.root), "var-init"),
          n = cc11001100_hook("n", i(!0, e, t), "var-init");
        o.set(l.settings.root, n), s.wapChangeViewPort(!!e["wapChangeViewPort"] && e["wapChangeViewPort"]);
      },
      clear: function () {
        o.remove(r.keys.data.root), o.remove(r.keys.runtime.root);
      },
      clearAll: function () {
        o.remove(r.keys.base);
      },
      reset: function () {
        var e = cc11001100_hook("e", o.get(u.voice.root), "var-init");
        o.set(u.root, {}), e.rate = cc11001100_hook("e.rate", 1, "assign"), o.set(u.voice.root, e), s.clearAll(), this.mouseten = cc11001100_hook("this.mouseten", !1, "assign");
      },
      className: {
        region: cc11001100_hook("region", "ariaregion", "object-key-init"),
        highlight: cc11001100_hook("highlight", "ariahighlight", "object-key-init"),
        focus: cc11001100_hook("focus", "ariafocus", "object-key-init")
      },
      get serviceVersion() {
        return o.get(c.serviceVersion) || 0;
      },
      get golabFixedCss() {
        return o.get(l.settings.golabFixedCss);
      },
      get golabCss() {
        return o.get(l.settings.golabCss);
      },
      get focusTheme() {
        return o.get(l.settings.focusTheme);
      },
      get useOldFixed() {
        return !!window.ariaForceOldfixed || o.get(l.settings.useOldFixed);
      },
      get oldFixedCss() {
        return o.get(l.settings.oldFixedCss);
      },
      get golabSkipScale() {
        return o.get(l.settings.golabSkipScale);
      },
      get golabReplaceBg() {
        return o.get(l.settings.golabReplaceBg);
      },
      get golabSkipAll() {
        return o.get(l.settings.golabSkipAll);
      },
      get golabFocus() {
        return o.get(l.settings.golabFocus);
      },
      get golabRegion1() {
        return o.get(l.settings.golabRegion1);
      },
      get golabRegion2() {
        return o.get(l.settings.golabRegion2);
      },
      get golabRegion3() {
        return o.get(l.settings.golabRegion3);
      },
      get golabRegion4() {
        return o.get(l.settings.golabRegion4);
      },
      get golabSkipTheme() {
        return o.get(l.settings.golabSkipTheme);
      },
      get elementFilter() {
        return o.get(l.settings.elementFilter);
      },
      get topfixed() {
        var e = cc11001100_hook("e", s.fixed, "var-init");
        return void 0 === e && (e = cc11001100_hook("e", o.get(u.topfixed), "assign")), void 0 === e && (e = cc11001100_hook("e", o.get(c.settings.topfixed), "assign"), o.set(u.topfixed, e), s.fixed = cc11001100_hook("s.fixed", e, "assign")), e;
      },
      set topfixed(e) {
        o.set(u.topfixed, e), s.fixed = cc11001100_hook("s.fixed", e, "assign");
      },
      get minZoom() {
        var e = cc11001100_hook("e", o.get(l.settings.minZoom), "var-init");
        return 0 == e && (e = cc11001100_hook("e", .5, "assign")), e;
      },
      get maxZoom() {
        var e = cc11001100_hook("e", o.get(l.settings.maxZoom), "var-init");
        return 0 == e && (e = cc11001100_hook("e", .5, "assign")), e;
      },
      get py() {
        return o.get(u.py);
      },
      set py(e) {
        o.set(u.py, e);
      },
      get big5() {
        return o.get(u.big5);
      },
      set big5(e) {
        o.set(u.big5, e);
      },
      get canRead() {
        return o.get(u.canRead);
      },
      set canRead(e) {
        o.set(u.canRead, e);
      },
      get iconType() {
        var e = cc11001100_hook("e", o.get(c.settings.iconType), "var-init");
        return void 0 !== e && 0 != e || (e = cc11001100_hook("e", 1, "assign")), e;
      },
      get themeRoad() {
        return this.road + "public/theme/" + this.iconType;
      },
      get readsrc() {
        return o.get(u.readsrc);
      },
      set readsrc(e) {
        o.set(u.readsrc, e);
      },
      get readtype() {
        return "undefined" != typeof s.readtype && s.readtype;
      },
      set readtype(e) {
        s.readtype = cc11001100_hook("s.readtype", e, "assign");
      },
      get oldFixedStatus() {
        return "undefined" != typeof s.oldFixedStatus && s.oldFixedStatus;
      },
      set oldFixedStatus(e) {
        s.oldFixedStatus = cc11001100_hook("s.oldFixedStatus", e, "assign");
      },
      get leftfixed() {
        return o.get(u.leftfixed);
      },
      set leftfixed(e) {
        o.set(u.leftfixed, e);
      },
      get bigpoint() {
        return o.get(u.bigpoint);
      },
      set bigpoint(e) {
        o.set(u.bigpoint, e);
      },
      get reticle() {
        return o.get(l.settings.reticle);
      },
      set reticle(e) {
        o.set(l.settings.reticle, e);
      },
      set conf(e) {
        "object" != typeof e && (e = cc11001100_hook("e", JSON.parse(e), "assign")), o.set(c.conf.root, e);
      },
      get golbalElems() {
        return o.get(c.golbalElems);
      },
      get conf() {
        return o.get(c.conf.root);
      },
      get curpageConf() {
        var e,
          t = cc11001100_hook("t", top.location.href, "var-init"),
          n = cc11001100_hook("n", o.get(c.conf.root), "var-init");
        if (n) return "object" != typeof n && (n = cc11001100_hook("n", JSON.parse(n), "assign")), (e = cc11001100_hook("e", n.filter(function (e) {
          return e.name == t;
        }), "assign")).length > 0 ? e[0] : void 0;
      },
      confQuerySelector: function (e) {
        if (e) {
          var t = cc11001100_hook("t", e.key, "var-init");
          if (t) {
            switch (e.type) {
              case 1:
                var n = cc11001100_hook("n", t.split(" "), "var-init");
                t = cc11001100_hook("t", "#" === n[0].substr(0, 1) ? n[0] : "#" + n[0], "assign");
                for (var r = cc11001100_hook("r", 1, "var-init"); r < n.length; r++) {
                  (o = cc11001100_hook("o", n[r], "assign")).length > 0 && (t += cc11001100_hook("t", ":is(", "assign"), t += cc11001100_hook("t", "#" === o.substr(0, 1) ? o : "#" + o, "assign"), t += cc11001100_hook("t", ")", "assign"));
                }
                return t;
              case 2:
                var i = cc11001100_hook("i", t.split(" "), "var-init");
                t = cc11001100_hook("t", "." === i[0].substr(0, 1) ? i[0] : "." + i[0], "assign");
                for (r = cc11001100_hook("r", 1, "assign"); r < i.length; r++) {
                  var o;
                  (o = cc11001100_hook("o", i[r], "assign")).length > 0 && (t += cc11001100_hook("t", ":is(", "assign"), t += cc11001100_hook("t", "." === o.substr(0, 1) ? o : "." + o, "assign"), t += cc11001100_hook("t", ")", "assign"));
                }
                return t;
            }
            return t;
          }
        }
      },
      get shortCutIcon() {
        return o.get(l.settings.shortCutIcon);
      },
      set shortCutIcon(e) {
        o.set(l.settings.shortCutIcon, e);
      },
      get scale() {
        var e = cc11001100_hook("e", o.get(u.scale) || s.scale, "var-init");
        return e || (e = cc11001100_hook("e", o.get(c.settings.scale), "assign"), o.set(u.scale, e), s.scale = cc11001100_hook("s.scale", e, "assign")), e;
      },
      set scale(e) {
        e = cc11001100_hook("e", parseFloat(e), "assign"), o.set(u.scale, e), s.scale = cc11001100_hook("s.scale", e, "assign");
      },
      get callback() {
        return o.get(l.callback);
      },
      set callback(e) {
        o.set(l.callback, e);
      },
      get road() {
        return o.get(r.keys.road);
      },
      set road(e) {
        o.set(r.keys.road, e);
      },
      get ariaPointerRead() {
        return o.get(u.ariaPointerRead);
      },
      set ariaPointerRead(e) {
        o.set(u.ariaPointerRead, e);
      },
      get bodyfont() {
        var e = cc11001100_hook("e", o.get(l.settings.bodyfont), "var-init");
        return e ? (e > 24 && (e = cc11001100_hook("e", 24, "assign")), e) : ((e = cc11001100_hook("e", parseInt(a.getStyle(document.body)["font-size"], 10), "assign")) > 24 && (e = cc11001100_hook("e", 24, "assign")), o.set(l.settings.bodyfont, e), e);
      },
      get inFrame() {
        return window.self !== top;
      },
      get data() {
        return o.get(r.keys.data.root);
      },
      set data(e) {
        o.set(r.keys.data.root, e);
      },
      get appid() {
        return o.get(l.appid);
      },
      set appid(e) {
        o.set(l.appid, e);
      },
      get serviceUrl() {
        return o.get(l.serviceUrl);
      },
      set serviceUrl(e) {
        o.set(l.serviceUrl, e);
      },
      get fileUrl() {
        return o.get(l.fileUrl) || o.get(l.serviceUrl);
      },
      get pageDisOldFixed() {
        if ("true" == document.body.getAttribute("aria-disOldFixed")) return !0;
        var e = cc11001100_hook("e", this.curpageConf, "var-init");
        return e && e.value ? e.value.disOldFixed : void 0;
      },
      wapForceOldFixed: function (e) {
        return !!window.isAriaDev || (void 0 === e ? s.wapForceOldFixed() : void o.set(l.settings.wapForceOldFixed, e));
      },
      loadData: function (e) {
        if (void 0 === e) return o.get(u.loadData);
        o.set(u.loadData, e);
      },
      get root() {
        return o.get(l.root);
      },
      get settingsRoot() {
        return o.get(l.settings.root);
      },
      voice: {
        set enable(e) {
          o.set(u.voice.enable, e);
        },
        get enable() {
          var e = cc11001100_hook("e", o.get(u.voice.enable), "var-init");
          return void 0 === e || null == e ? o.get(c.settings.voice.enable) : e;
        },
        get maxRate() {
          var e = cc11001100_hook("e", o.get(r.keys.runtime.settings.voice.maxRate), "var-init");
          return e < 2 && (e = cc11001100_hook("e", 3, "assign")), e;
        },
        get minRate() {
          var e = cc11001100_hook("e", o.get(r.keys.runtime.settings.voice.minRate), "var-init");
          return e <= .5 && (e = cc11001100_hook("e", .5, "assign")), e;
        },
        get rate() {
          var e = cc11001100_hook("e", o.get(u.voice.rate), "var-init");
          return void 0 !== e && null != e || (e = cc11001100_hook("e", o.get(c.settings.voice.rate), "assign"), o.set(u.voice.rate, e)), e;
        },
        set rate(e) {
          o.set(u.voice.rate, e);
        }
      },
      highlight: {
        set enable(e) {
          o.set(l.settings.highlight.enable, e), o.set(l.settings.highlight.isActive, e);
        },
        get enable() {
          return o.get(l.settings.highlight.enable);
        },
        get rate() {
          return o.get(l.settings.highlight.rate);
        },
        set rate(e) {
          o.set(l.settings.highlight.rate, e);
        },
        get mode() {
          return o.get(l.settings.highlight.mode);
        },
        set mode(e) {
          o.set(l.settings.highlight.mode, e);
        }
      },
      get padding() {
        return o.get(l.settings.padding);
      },
      set padding(e) {
        o.set(l.settings.padding, e);
      },
      get spacing() {
        return o.get(l.settings.spacing);
      },
      set spacing(e) {
        o.set(l.settings.spacing, e);
      },
      get tellerMode() {
        return o.get(l.settings.tellerMode);
      },
      set tellerMode(e) {
        o.set(l.settings.tellerMode, e);
      },
      get mobileToolPosition() {
        return o.get(l.settings.mobileToolPosition);
      },
      get mobileToolSelectedColor() {
        return o.get(l.settings.mobileToolSelectedColor);
      },
      get mobileCss() {
        return o.get(l.settings.mobileCss);
      },
      get wapUseConfigPage() {
        return o.get(l.settings.wapUseConfigPage);
      },
      get disabledRegion() {
        return o.get(l.settings.disabledRegion);
      },
      get disabledInMobile() {
        return o.get(l.settings.disabledInMobile);
      },
      get disabledAutoReign() {
        return o.get(l.settings.disabledAutoReign);
      },
      get wapChangeFontSize() {
        return o.get(l.settings.wapChangeFontSize);
      },
      get endRefresh() {
        return o.get(l.settings.endRefresh);
      },
      get disabledAllStData() {
        return o.get(l.settings.disabledAllStData);
      },
      get pcOldFixedUrl() {
        return o.get(l.settings.pcOldFixedUrl);
      },
      get wapOldFixedUrl() {
        return o.get(l.settings.wapOldFixedUrl);
      },
      get useOldFixedInMobile() {
        return o.get(l.settings.useOldFixedInMobile);
      },
      get skipAutoFix() {
        return o.get(l.settings.skipAutoFix);
      },
      get showFixBtnInToolBar() {
        return o.get(l.settings.showFixBtnInToolBar);
      },
      get useAutoFixBase() {
        return o.get(l.settings.useAutoFixBase);
      },
      get wapUseAutoFixBase() {
        return o.get(l.settings.wapUseAutoFixBase);
      },
      get useAutoFixedBtn() {
        return o.get(l.settings.useAutoFixedBtn);
      },
      newPcCss: function (e) {
        if (void 0 === e) return o.get(r.keys.pcCss) || "";
        o.set(r.keys.pcCss, e);
      },
      newMobileCss: function (e) {
        if (void 0 === e) return o.get(r.keys.mobileCss) || "";
        o.set(r.keys.mobileCss, e);
      },
      get status() {
        return void 0 !== s.status() && s.status();
      },
      set status(e) {
        s.status(e);
      },
      get mousemode() {
        return s.mousemode;
      },
      set mousemode(e) {
        s.mousemode = cc11001100_hook("s.mousemode", e, "assign");
      },
      get mouseten() {
        return s.mouseten;
      },
      set mouseten(e) {
        s.mouseten = cc11001100_hook("s.mouseten", e, "assign");
      },
      get bigsrc() {
        return s.bigsrc;
      },
      set bigsrc(e) {
        s.bigsrc = cc11001100_hook("s.bigsrc", e, "assign");
      },
      get ThemeIndex() {
        return s.theme();
      },
      get ThemeNext() {
        var e = cc11001100_hook("e", s.theme(), "var-init"),
          t = cc11001100_hook("t", f.Themes, "var-init");
        return e < t.length - 1 ? e += cc11001100_hook("e", 1, "assign") : e = cc11001100_hook("e", 0, "assign"), t[e];
      },
      ThemeToNext: function () {
        var e = cc11001100_hook("e", s.theme(), "var-init");
        f.Theme = cc11001100_hook("f.Theme", e + 1, "assign");
      },
      set Theme(e) {
        var t = cc11001100_hook("t", f.Themes, "var-init");
        if ("number" == typeof e) return e >= t.length && (e = cc11001100_hook("e", 0, "assign")), void s.theme(e);
        if ("" != e) for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
          t[n].name == e && s.theme(n);
        } else s.theme(0);
      },
      get Theme() {
        var e = cc11001100_hook("e", s.theme(), "var-init");
        if (!(e < 0)) {
          var t = cc11001100_hook("t", f.Themes, "var-init");
          return t.length > 0 && t.length >= e ? t[e] : void 0;
        }
      },
      checkSetTheme: function () {
        var e = cc11001100_hook("e", f.Theme, "var-init");
        return !(!e || !e.name || "default" == e.name);
      },
      getThemes: function () {
        return this.Themes;
      },
      get Themes() {
        if (d.length > 0) return d;
        var e = cc11001100_hook("e", o.get(r.keys.data.themes), "var-init");
        if (void 0 === e || null == e) return [];
        for (var t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) {
          var n = cc11001100_hook("n", e[t], "var-init");
          d.push(n.value);
        }
        return d;
      },
      get defaultLanguage() {
        return o.get(l.settings.defaultLanguage);
      },
      set defaultLanguage(e) {
        o.set(l.settings.defaultLanguage, e);
      },
      get Language() {
        var e = cc11001100_hook("e", this.defaultLanguage, "var-init");
        if (e) return o.get(r.keys.data.languages)[e];
      },
      get Languages() {
        return o.get(r.keys.data.languages);
      },
      getText: function (e) {
        var t = cc11001100_hook("t", this.Language, "var-init");
        if (t) return t[e];
      },
      set closeShortIcon(e) {
        o.set(l.settings.closeShortIcon, e);
      },
      get closeShortIcon() {
        return o.get(l.settings.closeShortIcon);
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", f, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init");
  function i(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    e || (e = cc11001100_hook("e", document, "assign"));
    var o = cc11001100_hook("o", e.getElementsByTagName("iframe"), "var-init");
    void 0 === n && (n = cc11001100_hook("n", 0, "assign"));
    for (var a = cc11001100_hook("a", 0, "var-init"); a < o.length; a++) try {
      var s = cc11001100_hook("s", o[a].getAttribute("id"), "var-init");
      s || (s = cc11001100_hook("s", r.genID(), "assign"), o[a].setAttribute("id", s));
      var l = cc11001100_hook("l", o[a].contentWindow.document, "var-init");
      if (!l.body) continue;
      t && "function" == typeof t && t(l, o[a], n + 1), i(l, t, n + 1);
    } catch (c) {}
  }
  e.exports = cc11001100_hook("e.exports", {
    getAll: cc11001100_hook("getAll", i, "object-key-init"),
    getAllCorsWin: function (e, t) {
      for (var n = cc11001100_hook("n", (t = cc11001100_hook("t", t || self.document, "assign")).getElementsByTagName("iframe"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) try {
        var o = cc11001100_hook("o", n[r].contentWindow.document, "var-init");
        if (!o.body) continue;
        i(e, o);
      } catch (a) {
        e(n[r].contentWindow);
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r;
  r = cc11001100_hook("r", "file:" == document.location.protocol ? n(69) : n(31), "assign");
  var i = cc11001100_hook("i", {
    status: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "Status"), "var-init");
        return void 0 !== t && "undefined" != t && JSON.parse(t);
      }
      r.setCookie(window.ariaSdkName + "Status", e);
    },
    get bigsrc() {
      var e = cc11001100_hook("e", r.getCookie(window.ariaSdkName + "Bigsrc"), "var-init");
      if (void 0 !== e && "undefined" != e) return JSON.parse(e);
    },
    set bigsrc(e) {
      r.setCookie(window.ariaSdkName + "Bigsrc", e);
    },
    get defaultTheme() {
      return r.getCookie(window.ariaSdkName + "DefaultTheme");
    },
    set defaultTheme(e) {
      r.setCookie(window.ariaSdkName + "DefaultTheme", e);
    },
    get fixed() {
      var e = cc11001100_hook("e", r.getCookie(window.ariaSdkName + "Fixed"), "var-init");
      if (void 0 !== e && "undefined" != e) return JSON.parse(e);
    },
    set fixed(e) {
      r.setCookie(window.ariaSdkName + "Fixed", e);
    },
    get mousemode() {
      var e = cc11001100_hook("e", r.getCookie(window.ariaSdkName + "Mousemode"), "var-init");
      if (void 0 !== e && "undefined" != e) return JSON.parse(e);
    },
    set mousemode(e) {
      r.setCookie(window.ariaSdkName + "Mousemode", e);
    },
    get mouseten() {
      var e = cc11001100_hook("e", r.getCookie(window.ariaSdkName + "Mouseten"), "var-init");
      if (void 0 !== e && "undefined" != e) return JSON.parse(e);
    },
    set mouseten(e) {
      r.setCookie(window.ariaSdkName + "Mouseten", e);
    },
    get oldFixedStatus() {
      var e = cc11001100_hook("e", r.getCookie(window.ariaSdkName + "oldFixedStatus"), "var-init");
      if (void 0 !== e && "undefined" != e) return JSON.parse(e);
    },
    set oldFixedStatus(e) {
      r.setCookie(window.ariaSdkName + "oldFixedStatus", e);
    },
    get scale() {
      var e = cc11001100_hook("e", r.getCookie(window.ariaSdkName + "Scale"), "var-init");
      return void 0 !== e && "undefined" != e ? JSON.parse(e) : 1;
    },
    set scale(e) {
      r.setCookie(window.ariaSdkName + "Scale", e);
    },
    get readtype() {
      var e = cc11001100_hook("e", r.getCookie(window.ariaSdkName + "Readtype"), "var-init");
      if (void 0 !== e && "undefined" != e) return JSON.parse(e);
    },
    set readtype(e) {
      r.setCookie(window.ariaSdkName + "Readtype", e);
    },
    OnBoardingFixed: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "OnBoardingFixed"), "var-init");
        return void 0 !== t && "undefined" != t && JSON.parse(t);
      }
      r.setCookie(window.ariaSdkName + "OnBoardingFixed", e);
    },
    theme: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "theme"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : 0;
      }
      r.setCookie(window.ariaSdkName + "theme", e);
    },
    fontScale: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "fontScale"), "var-init");
        return void 0 !== t && "undefined" != t && "false" != t && "true" != t ? JSON.parse(t) : (this.fontScale(1), 1);
      }
      r.setCookie(window.ariaSdkName + "fontScale", e);
    },
    loadData: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "loadData"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : null;
      }
      r.setCookie(window.ariaSdkName + "loadData", e);
    },
    checkAutoFixedBtn: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "checkAutoFixedBtn"), "var-init");
        return void 0 !== t && "undefined" != t && JSON.parse(t);
      }
      r.setCookie(window.ariaSdkName + "checkAutoFixedBtn", e);
    },
    wapForceOldFixed: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "wapForceOldFixed"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : null;
      }
      r.setCookie(window.ariaSdkName + "wapForceOldFixed", e);
    },
    wapChangeViewPort: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "wapChangeViewPort"), "var-init");
        return void 0 !== t && "undefined" != t && JSON.parse(t);
      }
      r.setCookie(window.ariaSdkName + "wapChangeViewPort", e);
    },
    ariaBtnPosition: function (e) {
      if (!e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "ariaBtnPosition"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : void 0;
      }
      r.setCookie(window.ariaSdkName + "ariaBtnPosition", e);
    },
    ariaMobileUseType: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "ariaMobileUseType"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : 0;
      }
      r.setCookie(window.ariaSdkName + "ariaMobileUseType", e);
    },
    afProp: function (e, t) {
      if (void 0 === t) {
        var n = cc11001100_hook("n", r.getCookie(window.ariaSdkName + e), "var-init");
        return void 0 !== n && "undefined" != n ? JSON.parse(n) : 100;
      }
      r.setCookie(window.ariaSdkName + e, t);
    },
    brightness: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "brightness"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : 100;
      }
      r.setCookie(window.ariaSdkName + "brightness", e);
    },
    contrast: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "contrast"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : 100;
      }
      r.setCookie(window.ariaSdkName + "contrast", e);
    },
    grayscale: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "grayscale"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : 0;
      }
      r.setCookie(window.ariaSdkName + "grayscale", e);
    },
    sepia: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "sepia"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : 0;
      }
      r.setCookie(window.ariaSdkName + "sepia", e);
    },
    mode: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "thememode"), "var-init");
        return void 0 !== t && "undefined" != t ? JSON.parse(t) : 1;
      }
      r.setCookie(window.ariaSdkName + "thememode", e);
    },
    customMode: function (e) {
      if (void 0 === e) {
        var t = cc11001100_hook("t", r.getCookie(window.ariaSdkName + "themecustomMode"), "var-init");
        return void 0 !== t && "undefined" != t ? t : "default";
      }
      r.setCookie(window.ariaSdkName + "themecustomMode", e);
    },
    clearAll: function () {
      r.devareCookie(window.ariaSdkName + "Bigsrc"), r.devareCookie(window.ariaSdkName + "Readtype"), r.devareCookie(window.ariaSdkName + "Fixed"), r.devareCookie(window.ariaSdkName + "Mouseten"), r.devareCookie(window.ariaSdkName + "Scale"), r.devareCookie(window.ariaSdkName + "Mousemode"), r.devareCookie(window.ariaSdkName + "DefaultTheme"), r.devareCookie(window.ariaSdkName + "theme"), r.devareCookie(window.ariaSdkName + "ariaBtnPosition"), r.devareCookie(window.ariaSdkName + "fontScale"), r.devareCookie(window.ariaSdkName + "wapChangeViewPort"), r.devareCookie(window.ariaSdkName + "brightness"), r.devareCookie(window.ariaSdkName + "contrast"), r.devareCookie(window.ariaSdkName + "grayscale"), r.devareCookie(window.ariaSdkName + "sepia"), r.devareCookie(window.ariaSdkName + "thememode");
    }
  }, "var-init");
  e.exports = cc11001100_hook("e.exports", i, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", n(87), "var-init"),
    o = cc11001100_hook("o", n(1), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    play: function (e) {
      if (window.ariaUseAppTTS) if ("string" != typeof e && (e = cc11001100_hook("e", new o(e).aria.lastText, "assign")), window.webkit != undefined) {
        if (null != window.webkit.messageHandlers.textToSpeech) return void window.webkit.messageHandlers.textToSpeech.postMessage(e);
      } else if ("undefined" != typeof OldFix & "function" == typeof OldFix.textToSpeech) return void OldFix.textToSpeech(e);
      1 == r.readtype || "string" == typeof e ? i.startSingle(e) : i.startContinu(e);
    },
    stop: cc11001100_hook("stop", i.stop, "object-key-init"),
    start: cc11001100_hook("start", i.start, "object-key-init"),
    end: cc11001100_hook("end", i.end, "object-key-init"),
    isOpenVoice: cc11001100_hook("isOpenVoice", i.isOpenVoice, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", n(2), "var-init"),
    o = cc11001100_hook("o", n(1), "var-init"),
    a = cc11001100_hook("a", n(3), "var-init"),
    s = cc11001100_hook("s", n(84), "var-init"),
    l = cc11001100_hook("l", n(34), "var-init"),
    c = cc11001100_hook("c", n(96), "var-init"),
    u = cc11001100_hook("u", n(97), "var-init"),
    d = cc11001100_hook("d", n(98), "var-init"),
    f = cc11001100_hook("f", n(99), "var-init"),
    p = cc11001100_hook("p", n(50), "var-init"),
    h = cc11001100_hook("h", n(4), "var-init"),
    g = cc11001100_hook("g", n(15), "var-init"),
    m = cc11001100_hook("m", n(25), "var-init"),
    v = cc11001100_hook("v", n(9), "var-init"),
    b = cc11001100_hook("b", n(23), "var-init"),
    y = cc11001100_hook("y", n(24), "var-init"),
    w = cc11001100_hook("w", n(39), "var-init"),
    x = cc11001100_hook("x", n(9), "var-init");
  function S() {
    return new Promise(function (e, t) {
      var n = cc11001100_hook("n", "", "var-init");
      if ("undefined" != typeof ariadDev && (n += cc11001100_hook("n", "[aria-region]{outline: 2px solid #ff6c00;}", "assign")), i.golabCss && (n += cc11001100_hook("n", i.golabCss, "assign")), h.oldFixedStatus || r.isMobile() && i.wapForceOldFixed()) r.isMobile() ? i.useOldFixedInMobile ? w.loadPcCss().then(function (t) {
        n += cc11001100_hook("n", t, "assign"), w.loadMobileCss().then(function (t) {
          n += cc11001100_hook("n", t, "assign");
          var r = cc11001100_hook("r", i.curpageConf, "var-init");
          r && r.value.pageCss && (n += cc11001100_hook("n", r.value.pageCss, "assign")), e(n);
        });
      }) : w.loadMobileCss().then(function (t) {
        n += cc11001100_hook("n", t, "assign");
        var r = cc11001100_hook("r", i.curpageConf, "var-init");
        r && r.value.pageCss && (n += cc11001100_hook("n", r.value.pageCss, "assign")), e(n);
      }) : w.loadPcCss().then(function (t) {
        n += cc11001100_hook("n", t, "assign");
        var r = cc11001100_hook("r", i.curpageConf, "var-init");
        r && r.value.pageCss && (n += cc11001100_hook("n", r.value.pageCss, "assign")), e(n);
      });else {
        var o = cc11001100_hook("o", i.curpageConf, "var-init");
        o && o.value.pageCss && (n += cc11001100_hook("n", o.value.pageCss, "assign")), e(n);
      }
    });
  }
  function C(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "", "var-init"),
      n = cc11001100_hook("n", e.getElementById("golabFixedCss"), "var-init");
    n && (n.textContent = cc11001100_hook("n.textContent", "", "assign")), r.isMobile() ? i.wapUseAutoFixBase && (t += cc11001100_hook("t", s.createGlobal(e), "assign")) : i.useAutoFixBase && (t += cc11001100_hook("t", s.createGlobal(e), "assign")), r.appendCss(e, "golabFixedCss", t);
  }
  function k(e) {
    cc11001100_hook("e", e, "function-parameter");
    new o(e.body).find("#golabFixedCss").remove();
  }
  function T(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "body.UseInMobile ", "var-init"),
      n = cc11001100_hook("n", [], "var-init");
    return n.push(t + "." + e), n.push(t + "li." + e), n.push(t + "[role='" + e + "']"), n.push(t + "a." + e), n.push(t + "a." + e + ":link"), n.push(t + "td." + e), n.push(t + "span." + e), n.push(t + "dd." + e), n.push(t + "p." + e), n.join(",");
  }
  function A() {
    var e = cc11001100_hook("e", parseFloat(i.scale), "var-init"),
      t = cc11001100_hook("t", "", "var-init");
    if (t += cc11001100_hook("t", "input[type='checkbox'],input[type='radio'] {min-height:  1em !important;min-width:  1em !important;}", "assign"), r.isMobile()) {
      var n = cc11001100_hook("n", document.getElementById("ariabodyscale"), "var-init");
      if (n && n.textContent.length > 200) return;
      if (e = cc11001100_hook("e", h.fontScale(), "assign"), i.wapChangeFontSize && i.status && "" != e) {
        var o = cc11001100_hook("o", h.fontScale() * g.getDprScale(), "var-init"),
          s = cc11001100_hook("s", 26 * g.getDprScale(), "var-init");
        t += cc11001100_hook("t", "body.useOldFixed *:not(.skipAutoFix) {font-size:1em !important;}", "assign"), t += cc11001100_hook("t", T("ariafonttitle") + ",body.UseInMobile h3,body.UseInMobile h4,body.UseInMobile h5,body.UseInMobile .title{font-size:" + (22 * o > s ? s : (22 * o).toFixed(2)) + "px !important;line-height:2 !important;font-weight:500;}", "assign"), t += cc11001100_hook("t", T("ariafontcontent") + ",body{font-size:" + (18 * o > s ? s : (18 * o).toFixed(2)) + "px !important;line-height:2 !important}", "assign"), t += cc11001100_hook("t", T("ariabigtitle") + ",body.UseInMobile h1,body.UseInMobile h2{font-size:" + (28 * o > s ? s : (28 * o).toFixed(2)) + "px !important;line-height:2 !important;font-weight:500;}", "assign");
      }
    } else i.status && 1 != e && (t += cc11001100_hook("t", function () {
      var e = cc11001100_hook("e", i.scale, "var-init");
      if (1 == e) return "";
      var t = cc11001100_hook("t", "body {", "var-init");
      return t += cc11001100_hook("t", "zoom:" + e + "  !important;", "assign"), t += cc11001100_hook("t", "-moz-transform-origin: 0 0;", "assign"), t += cc11001100_hook("t", "-moz-transform: scale(" + e + ") ;", "assign"), t += cc11001100_hook("t", "}", "assign"), r.isIE() || (t += cc11001100_hook("t", ".noscale{", "assign"), t += cc11001100_hook("t", "zoom:" + (e = cc11001100_hook("e", parseFloat(1 / e).toFixed(10), "assign")) + "  !important;", "assign"), t += cc11001100_hook("t", "transform-origin: 0 0;", "assign"), t += cc11001100_hook("t", "-moz-transform: scale(" + e + ")  !important;", "assign"), t += cc11001100_hook("t", "-moz-transform-origin: 0 0;", "assign"), t += cc11001100_hook("t", "-o-transform: scale(" + e + ")  !important;", "assign"), t += cc11001100_hook("t", "-o-transform-origin: 0 0;", "assign"), t += cc11001100_hook("t", "}", "assign")), t;
    }(), "assign"), r.isFF() && (t += cc11001100_hook("t", "#ariaToptoolbar.main-menu,#accscreen.expanded{position:absolute !important;}", "assign")));
    t += cc11001100_hook("t", function () {
      var e = cc11001100_hook("e", "", "var-init");
      if (!r.isMobile()) {
        var t = cc11001100_hook("t", i.scale, "var-init");
        t || (t = cc11001100_hook("t", 1, "assign"));
        var n = cc11001100_hook("n", parseFloat(1 / t).toFixed(3), "var-init");
        e += cc11001100_hook("e", ".ariabodytopfiexed { padding-top:" + (100 * n).toFixed(2) + "px !important;}", "assign"), e += cc11001100_hook("e", ".noscale{", "assign"), r.isFF() || r.isIE() || (e += cc11001100_hook("e", "zoom:" + n + " !important;", "assign")), e += cc11001100_hook("e", "transform-origin: 0 0;", "assign"), e += cc11001100_hook("e", "-o-transform: scale(" + n + ")  !important;", "assign"), e += cc11001100_hook("e", "-o-transform-origin: 0 0;", "assign"), e += cc11001100_hook("e", "}", "assign"), t > 1 && (e += cc11001100_hook("e", "body{overflow-x:auto !important;}", "assign"));
      }
      return e;
    }(), "assign"), r.appendCss(document, "ariabodyscale", t), r.isIE() || a.getAll(document, function (e) {
      r.appendCss(e, "ariabodyscale", t);
    });
    var l = cc11001100_hook("l", (document.documentElement.scrollWidth - document.documentElement.offsetWidth) / 2, "var-init"),
      c = cc11001100_hook("c", (document.documentElement.scrollWidth - document.documentElement.clientWidth) / 2, "var-init");
    c > l && (l = cc11001100_hook("l", c, "assign")), window.scrollTo(l, function () {
      var e = cc11001100_hook("e", 0, "var-init");
      document.documentElement && document.documentElement.scrollTop ? e = cc11001100_hook("e", document.documentElement.scrollTop, "assign") : document.body && (e = cc11001100_hook("e", document.body.scrollTop, "assign"));
      return e;
    }());
  }
  function E(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    new o(e.body).find("#ariacss").remove(), r.appendCss(e, "ariacss", t);
  }
  function O(e) {
    cc11001100_hook("e", e, "function-parameter");
    e || (e = cc11001100_hook("e", document, "assign")), b.initCorsCss(e).then(function () {
      S().then(function (t) {
        i.oldFixedStatus && y.start(), v.start(e), window.ariaFromApp || (u.tsearch(e), l.dynamicRotationchar(e), c.havle(e), f.tlogo(e), d.RegionListCss(e)), _(), C(e), E(e, t), i.oldFixedStatus && p.setIframeHeight(e), A();
      });
    });
  }
  function _() {
    if (h.status() ? new o("#ariafocusstyle").remove() : F(), h.status() && 0 == new o("#ariaiconstyle").length) {
      var e = cc11001100_hook("e", i.themeRoad + "/css/font.min.css?v=" + decodeURI(document.location.hostname), "var-init");
      new o(document.querySelector("head")).append('<link type="text/css" isaria="true" rel="stylesheet" id="ariaiconstyle" data-for="result" crossOrigin="anonymous" href="' + e + '"></link>');
    }
  }
  function F() {
    N(document), a.getAll(document, function (e) {
      N(e);
    });
  }
  function N(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.querySelector("#ariafocusstyle"), "var-init");
    t || ((t = cc11001100_hook("t", e.createElement("style"), "assign")).media = cc11001100_hook("(t = e.createElement(\"style\")).media", "screen", "assign"), t.id = cc11001100_hook("t.id", "ariafocusstyle", "assign"), t.setAttribute("data-for", "result"), t.setAttribute("isaria", "true")), t.textContent = cc11001100_hook("t.textContent", ":focus{outline:none !important;}body.useOldFixed [aria-fixedOldHidden=true],.ariaHide{display:none !important;}", "assign"), e.querySelector("head").insertBefore(t, e.querySelector("head").firstChild);
  }
  e.exports = cc11001100_hook("e.exports", {
    start: cc11001100_hook("start", O, "object-key-init"),
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), x.end(), new o(e.body).find("style[isaria],link[isaria]").remove(), k(e);
    },
    setSettingTheme: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), b.initCorsCss(e).then(function () {
        S().then(function (t) {
          C(e), E(e, t), v.doEventForce(e), i.oldFixedStatus && p.setIframeHeight(e);
        });
      });
    },
    setBodyTran: cc11001100_hook("setBodyTran", A, "object-key-init"),
    setMouseb: function (e) {
      e || (e = cc11001100_hook("e", document, "assign"));
      var t = cc11001100_hook("t", "\n *,a {\n", "var-init");
      t += cc11001100_hook("t", "cursor: url(" + i.themeRoad + "/images/allaw.cur), auto !important;\n", "assign"), t += cc11001100_hook("t", "}\n", "assign"), r.appendCss(e, "ariatoolbarstylemouse", t);
    },
    removeMouseb: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new o(e).find("#ariatoolbarstylemouse").remove();
    },
    seGolabFixedCss: cc11001100_hook("seGolabFixedCss", C, "object-key-init"),
    removeGolabFixedCss: cc11001100_hook("removeGolabFixedCss", k, "object-key-init"),
    moveDown: function (e, t) {
      if (e && 0 != e.length) {
        for (var n = cc11001100_hook("n", "", "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length; i++) {
          var o = cc11001100_hook("o", e[i], "var-init");
          n += cc11001100_hook("n", " body.ariabodytopfiexed .ariamovedown" + o + " {", "assign"), n += cc11001100_hook("n", "top:" + (o + 100) + "px !important; ", "assign"), n += cc11001100_hook("n", "position:absolute !important; ", "assign"), n += cc11001100_hook("n", "}", "assign");
        }
        r.appendCss(t, "ariamovedown", n);
      }
    },
    moveUp: function (e, t) {
      if (e && 0 != e.length) {
        for (var n = cc11001100_hook("n", "", "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length; i++) {
          var o = cc11001100_hook("o", e[i], "var-init");
          n += cc11001100_hook("n", " body.ariabodybottomfiexed .ariamoveup" + o + " {", "assign"), n += cc11001100_hook("n", "bottom:" + (o + 150) + "px !important; ", "assign"), n += cc11001100_hook("n", "position:absolute !important; ", "assign"), n += cc11001100_hook("n", "}", "assign");
        }
        r.appendCss(t, "ariamoveup", n);
      }
    },
    addariaiconstyle: cc11001100_hook("addariaiconstyle", _, "object-key-init"),
    initResize: function () {
      (i.oldFixedStatus || r.isMobile() && i.wapForceOldFixed()) && (p.setIframeHeight(document), m.start(), l.dynamicRotationchar(document), c.havle(document), u.tsearch(document), f.tlogo(document), d.RegionListCss(document), a.getAll(document, function (e) {
        l.dynamicRotationchar(e), c.havle(e), u.tsearch(e), f.tlogo(e), d.RegionListCss(e), O(e);
      }), A()), i.pageDisOldFixed && y.removeOldfixed();
    },
    resetBodyTran: function () {
      r.appendCss(document, "ariabodyscale", ""), r.isIE() || a.getAll(document, function (e) {
        r.appendCss(e, "ariabodyscale", "");
      });
    },
    noBorderAll: cc11001100_hook("noBorderAll", F, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r,
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init"),
    a = cc11001100_hook("a", n(0), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    breakEvents: function (e, t) {
      try {
        if ("true" == e.ariaAttr("skipall") || "body" == e.aria.role || "iframe" == e.aria.role) return !0;
      } catch (n) {
        return !0;
      }
      return !1;
    },
    breakEventsFirst: function (e) {
      return 1 != e.target.nodeType || 9 == e.target.nodeType && 2 == o.readtype || "HTML" == e.target.nodeName || "BODY" == e.target.nodeName;
    },
    viewDocument: function (e) {
      try {
        return e.target.ownerDocument;
      } catch (t) {}
    },
    realPlayElem: function (e) {
      if (e.aria.atomic) return e.aria.atomicElem;
      if (e.ariaAttr("label") || "a" == e.aria.role || "SELECT" == e.firstNode.nodeType) return e;
      if (0 != e.length) {
        if ([].indexOf.call(a.HtmlElemRoles.foucsable0, e.aria.role) > -1) return e;
        var t = cc11001100_hook("t", e.parent(), "var-init");
        if ("a" == t.aria.role) return t.aria.atomic || (e.attr("title") && !t.attr("title") && t.attr("title", e.attr("title")), e.attr("alt") && !t.attr("alt") && t.attr("alt", e.attr("alt")), e.attr("aria-label") && !t.attr("aria-label") && t.attr("aria-label", e.attr("aria-label"))), t;
        if (e.find("*:not(script):not(style)").length < 2) return e;
        var n = cc11001100_hook("n", e.childNodes(), "var-init");
        if (0 == n.length) return e;
        if (1 == o.readtype) for (var r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) {
          if (3 == n[r].nodeType) return e;
        }
        if (1 == n.length && "A" == n[0].nodeName) return new i(n[0]);
        if (3 == n[0].nodeType) return new i(n[0]);
        var s = cc11001100_hook("s", ["ul", "li"], "var-init");
        return [].indexOf.call(s, e.aria.nodeName) > -1 && [].indexOf.call(["A", "H1", "H2", "H3", "H4", "H5"], n[0].nodeName) > -1 ? new i(n[0]) : (s = cc11001100_hook("s", ["td", "li", "dd", "label", "span", "a", "p", "img", "h1", "h2", "h3", "h4", "h5", "h6"], "assign"), [].indexOf.call(s, e.aria.role) > -1 ? e : void 0);
      }
    },
    CenterScale: function (e, t) {
      r || (r = cc11001100_hook("r", o.Language, "assign")), new i(".ariaBigCenterScale").remove(), t || (t = cc11001100_hook("t", 2, "assign"));
      var n = cc11001100_hook("n", document.createElement("div"), "var-init");
      n.classList.add("ariaBigCenterScale"), n.setAttribute("role", "dialog"), n.setAttribute("tabindex", 0), n.setAttribute("aria-label", e.aria.lastText + "," + r["keyESCExist"]);
      var s = cc11001100_hook("s", document.createElement("div"), "var-init");
      s.classList.add("ariablackground"), n.appendChild(s);
      var l = cc11001100_hook("l", e.firstNode.cloneNode(!0), "var-init");
      l.classList.add("ariaCloneDom"), l.removeAttribute("aria-isCenterScale"), n.appendChild(l), a.getContainerDom().appendChild(n);
      var c = cc11001100_hook("c", new i(".ariaCloneDom"), "var-init"),
        u = cc11001100_hook("u", c.width(), "var-init");
      0 == u && (u = cc11001100_hook("u", e.width(), "assign"));
      var d = cc11001100_hook("d", c.height(), "var-init");
      0 == d && (d = cc11001100_hook("d", e.height(), "assign"));
      var f = cc11001100_hook("f", isNaN(u) || 0 == u ? 2 : window.innerWidth / t / u, "var-init"),
        p = cc11001100_hook("p", isNaN(d) || 0 == d ? 2 : window.innerHeight / t / d, "var-init");
      return f = cc11001100_hook("f", f > p ? p : f, "assign"), "IMG" != l.nodeName ? (l.style["zoom"] = cc11001100_hook("l.style[\"zoom\"]", f, "assign"), a.isFF() && (l.style["transform"] = cc11001100_hook("l.style[\"transform\"]", "scale(" + f + ")", "assign"))) : u * f > 400 ? c.css({
        width: cc11001100_hook("width", u * f, "object-key-init"),
        height: cc11001100_hook("height", d * f, "object-key-init")
      }) : c.css({
        width: cc11001100_hook("width", 400, "object-key-init"),
        height: cc11001100_hook("height", "auto", "object-key-init")
      }), setTimeout(function () {
        n.focus();
      }, 150), !0;
    },
    removeCenterScale: function () {
      new i(".ariaBigCenterScale").remove();
    },
    consolLog: function (e, t) {}
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(15), "var-init"),
    i = cc11001100_hook("i", n(3), "var-init"),
    o = cc11001100_hook("o", n(1), "var-init"),
    a = cc11001100_hook("a", n(0), "var-init"),
    s = cc11001100_hook("s", {}, "var-init");
  s.prefix = cc11001100_hook("s.prefix", {
    useOldFixed: function (e) {
      return void 0 === e && (e = cc11001100_hook("e", document, "assign")), a.isMobile() ? e == document ? "body.UseInMobile " : "body.UseInMobile.ariaiframe " : e == document ? "body.useOldFixed " : "body.useOldFixed.ariaiframe ";
    }
  }, "assign");
  var l = cc11001100_hook("l", "", "var-init");
  l += cc11001100_hook("l", s.prefix.useOldFixed(document) + " {", "assign"), l += cc11001100_hook("l", "  width: 100%;", "assign"), l += cc11001100_hook("l", "  min-width: 80% !important;", "assign"), l += cc11001100_hook("l", "  Letter-spacing: 1px;", "assign"), l += cc11001100_hook("l", "  overflow-x: hidden;", "assign"), l += cc11001100_hook("l", "  }", "assign"), l += cc11001100_hook("l", "", "assign"), l += cc11001100_hook("l", "html,body," + s.prefix.useOldFixed(document) + " *:not(.skipAutoFix) {", "assign"), l += cc11001100_hook("l", "  min-width: 0 !important;", "assign"), l += cc11001100_hook("l", "}", "assign"), s.bodyStyle = cc11001100_hook("s.bodyStyle", l, "assign");
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", e.styleSheets, "var-init"), n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", ["openWinLayerDIV", "ariaToptoolbar", "accscreen", "ariatoolcss"], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) {
      var o = cc11001100_hook("o", t[i], "var-init"),
        a = cc11001100_hook("a", o.ownerNode, "var-init");
      try {
        [].indexOf.call(r, a.id) < 0 && "true" != a.getAttribute("isaria") && n.push(o);
      } catch (s) {}
    }
    return n;
  }
  function u(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) {
      var i = cc11001100_hook("i", t[r], "var-init");
      try {
        if (!i.cssRules) continue;
      } catch (d) {
        continue;
      }
      for (var o = cc11001100_hook("o", 0, "var-init"); o < i.cssRules.length; o++) try {
        if (i.cssRules[o].type == CSSRule.STYLE_RULE || (i.cssRules[o].type, CSSRule.MEDIA_RULE), e && "function" == typeof e) {
          var l = cc11001100_hook("l", e(i.cssRules[o]), "var-init");
          if (l && l.length > 0) {
            l = cc11001100_hook("l", l.split(","), "assign");
            for (var c = cc11001100_hook("c", 0, "var-init"); c < l.length; c++) {
              var u = cc11001100_hook("u", l[c].replace(s.prefix.useOldFixed(), "").trim(), "var-init");
              f(u) && n.indexOf(u) < 0 && u.length > 0 && n.push(u);
            }
          }
        }
      } catch (d) {}
    }
    return n = cc11001100_hook("n", a.sort1(n), "assign");
  }
  function d(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return a.each(n, function (n, r) {
      if (e && "function" == typeof e) {
        var i = cc11001100_hook("i", e(r), "var-init");
        if (i && i.length > 0) {
          i = cc11001100_hook("i", i.split(","), "assign");
          for (var o = cc11001100_hook("o", 0, "var-init"); o < i.length; o++) {
            var a = cc11001100_hook("a", i[o].replace(s.prefix.useOldFixed(), "").replace(".skipAutoFix", "").trim(), "var-init");
            t.indexOf(a) < 0 && f(a) && a.length > 0 && (a.indexOf(".") > -1 || a.indexOf("#") > -1) && t.push(a);
          }
        }
      }
    }), t;
  }
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    return ("string" != typeof e || !("*" == e || e.indexOf("__vconsole") > -1 || e.indexOf(".CodeMirror") > -1 || e.toLowerCase().indexOf(".clearfix") > -1)) && !([].indexOf.call(["openWinLayerDIV", "ariaToptoolbar", "accscreen", "ariatoolcss", "#__vconsole"], e.id) > -1);
  }
  function p(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return t ? "/*自动开始" + e + "*/\r\n" : "\r\n/*" + e + "结束*/";
  }
  l += cc11001100_hook("l", "  height:auto;", "assign"), s.bodyChild = cc11001100_hook("s.bodyChild", "{  overflow: hidden;  width: 80% !important;  margin: 0 auto;  box-sizing: border-box;  max-width: 1400px;  min-width: 300px;  Letter-spacing: 1px;  }", "assign"), s.singleCol = cc11001100_hook("s.singleCol", function () {
    return "  width:100%; clear: both;float:none;overflow:hidden;height:auto;";
  }, "assign"), s.height = cc11001100_hook("s.height", function (e) {
    var t = cc11001100_hook("t", "", "var-init");
    return t += cc11001100_hook("t", "  {", "assign"), t += cc11001100_hook("t", "  line-height: " + 2 * e + "px;", "assign"), t += cc11001100_hook("t", "  min-height: " + 2 * e + "px;", "assign"), t += cc11001100_hook("t", "}", "assign");
  }, "assign"), s.fontsize = cc11001100_hook("s.fontsize", function (e, t, n) {
    var r = cc11001100_hook("r", "", "var-init"),
      i = cc11001100_hook("i", "", "var-init");
    return n && (i = cc11001100_hook("i", "   ", "assign")), r += cc11001100_hook("r", i + "  {", "assign"), r += cc11001100_hook("r", i + "  font-size: " + e + "px !important;", "assign"), r += cc11001100_hook("r", i + "  Letter-spacing: 1px;", "assign"), r += cc11001100_hook("r", i + "  line-height: " + 2 * e + "px;", "assign"), r += cc11001100_hook("r", i + "  min-height: " + 2 * e + "px;", "assign"), t && t > 0 && (r += cc11001100_hook("r", i + "  font-weight: " + t + ";", "assign")), r += cc11001100_hook("r", i + "}", "assign");
  }, "assign"), s.setAutoHide = cc11001100_hook("s.setAutoHide", function () {}, "assign"), s.padding = cc11001100_hook("s.padding", "{  padding:0 10px;}", "assign"), s.marginTop = cc11001100_hook("s.marginTop", "{  margin-top:10px;}", "assign"), s.marginBottom = cc11001100_hook("s.marginBottom", "{  margin-bottom:10px;}", "assign"), s.media = cc11001100_hook("s.media", function (e, t) {
    return "@media screen and (max-width: " + t + "px) and (min-width:" + e + "px)";
  }, "assign"), s.create = cc11001100_hook("s.create", function (e, t, n) {
    "object" != typeof n && (n = cc11001100_hook("n", [], "assign")), void 0 === t && (i.getAll(document, function (t) {
      r = cc11001100_hook("r", c(t), "assign"), n = cc11001100_hook("n", u(e, r, n), "assign");
    }), t = cc11001100_hook("t", document, "assign"));
    var r = cc11001100_hook("r", c(t), "var-init");
    return n = cc11001100_hook("n", u(e, r, n), "assign"), n = cc11001100_hook("n", g(n), "assign");
  }, "assign"), s.createElemStyle = cc11001100_hook("s.createElemStyle", function (e, t, n) {
    t || (t = cc11001100_hook("t", [], "assign")), void 0 === n && (i.getAll(document, function (n) {
      r = cc11001100_hook("r", new o(n.body).find("[style]"), "assign"), t = cc11001100_hook("t", d(e, t, r), "assign");
    }), n = cc11001100_hook("n", document, "assign"));
    var r = cc11001100_hook("r", new o(n.body).find("[style]"), "var-init");
    return t = cc11001100_hook("t", d(e, t, r), "assign"), t = cc11001100_hook("t", g(t), "assign");
  }, "assign"), s.spaceSize = cc11001100_hook("s.spaceSize", 10, "assign"), s.CommontStyle = cc11001100_hook("s.CommontStyle", function (e) {
    e || (e = cc11001100_hook("e", new o("#ariaSelector").val(), "assign"));
    var t = cc11001100_hook("t", h(e), "var-init"),
      n = cc11001100_hook("n", "", "var-init"),
      r = cc11001100_hook("r", document.getElementById("ariaMarginDelete").checked, "var-init"),
      i = cc11001100_hook("i", document.getElementById("ariaMarginTop").checked, "var-init"),
      a = cc11001100_hook("a", document.getElementById("ariaMarginBottom").checked, "var-init"),
      l = cc11001100_hook("l", document.getElementById("ariaMarginLeft").checked, "var-init"),
      c = cc11001100_hook("c", document.getElementById("ariaMarginRight").checked, "var-init");
    r && (n += cc11001100_hook("n", "margin:0 !important;", "assign")), i && (n += cc11001100_hook("n", "margin-top:" + s.spaceSize + "px !important;", "assign")), a && (n += cc11001100_hook("n", "margin-bottom:" + s.spaceSize + "px !important;", "assign")), l && (n += cc11001100_hook("n", "margin-left:" + s.spaceSize + "px !important;", "assign")), c && (n += cc11001100_hook("n", "margin-right:" + s.spaceSize + "px !important;", "assign"));
    var u = cc11001100_hook("u", document.getElementById("ariaPaddDelete").checked, "var-init"),
      d = cc11001100_hook("d", document.getElementById("ariaPaddingLeft").checked, "var-init"),
      f = cc11001100_hook("f", document.getElementById("ariaPaddingRight").checked, "var-init"),
      g = cc11001100_hook("g", document.getElementById("ariaPaddingTop").checked, "var-init"),
      m = cc11001100_hook("m", document.getElementById("ariaPaddingBottom").checked, "var-init");
    u && (n += cc11001100_hook("n", "padding:0 !important;", "assign")), d && (n += cc11001100_hook("n", "padding-left:" + s.spaceSize + "px !important;", "assign")), f && (n += cc11001100_hook("n", "padding-right:" + s.spaceSize + "px !important;", "assign")), g && (n += cc11001100_hook("n", "padding-top:" + s.spaceSize + "px !important;", "assign")), m && (n += cc11001100_hook("n", "padding-bottom:" + s.spaceSize + "px !important;", "assign"));
    var v = cc11001100_hook("v", document.getElementById("ariaWidth100").checked, "var-init"),
      b = cc11001100_hook("b", new o("#ariaWidth").val(), "var-init"),
      y = cc11001100_hook("y", document.getElementById("ariaHideScroll").checked, "var-init"),
      w = cc11001100_hook("w", document.getElementById("ariaHeightAuto").checked, "var-init"),
      x = cc11001100_hook("x", new o("#ariaHeight").val(), "var-init"),
      S = cc11001100_hook("S", document.getElementById("ariaLineHeightAuto").checked, "var-init"),
      C = cc11001100_hook("C", new o("#ariaLineHeight").val(), "var-init");
    v ? n += cc11001100_hook("n", "width:100% !important;", "assign") : b && (n += cc11001100_hook("n", "width:" + b + "px !important;", "assign")), w ? n += cc11001100_hook("n", "height:auto;", "assign") : x && (n += cc11001100_hook("n", "height:" + x + "px !important;", "assign")), S ? n += cc11001100_hook("n", "line-height:150%;", "assign") : C && (n += cc11001100_hook("n", "line-height:" + C + " !important;", "assign")), y && (n += cc11001100_hook("n", "overflow:hidden;", "assign"));
    var k = cc11001100_hook("k", document.getElementById("ariaFloatDelete").checked, "var-init"),
      T = cc11001100_hook("T", document.getElementById("ariaFloatLeft").checked, "var-init");
    k && (n += cc11001100_hook("n", "float:none !important;", "assign")), document.getElementById("ariaFloatRight").checked && (n += cc11001100_hook("n", "float:right !important;", "assign")), T && (n += cc11001100_hook("n", "float:left !important;", "assign"));
    var A = cc11001100_hook("A", document.getElementById("ariaBackgroundTran").checked, "var-init"),
      E = cc11001100_hook("E", document.getElementById("ariaBackgroundColorTran").checked, "var-init"),
      O = cc11001100_hook("O", document.getElementById("ariaBackgroundFixed").checked, "var-init"),
      _ = cc11001100_hook("_", new o("#ariaBgColor").val(), "var-init");
    switch (A && (n += cc11001100_hook("n", "background: none !important;", "assign")), E && (n += cc11001100_hook("n", "background-color: transparent !important;", "assign")), O && (n += cc11001100_hook("n", "background-size: 100% 100% !important;", "assign")), new o("#ariaBackgroundPosition").val()) {
      case 1:
        n += cc11001100_hook("n", "background-position-x: -20px !important;", "assign");
        break;
      case 2:
        n += cc11001100_hook("n", "background-position-x: 20px !important;", "assign");
        break;
      case 3:
        n += cc11001100_hook("n", "background-position-y: -20px !important;", "assign");
        break;
      case 4:
        n += cc11001100_hook("n", "background-position-y: 20px !important;", "assign");
    }
    _ && (n += cc11001100_hook("n", "background-color:" + _ + ";", "assign"));
    var F = cc11001100_hook("F", document.getElementById("ariaPostionAbs").checked, "var-init");
    if (F) {
      n += cc11001100_hook("n", "position:absolute;", "assign");
      var N = cc11001100_hook("N", new o("#ariaPostionAbsTop").val(), "var-init");
      N && N.length > 0 && (n += cc11001100_hook("n", "top:" + N + "px !important;", "assign"));
      var M = cc11001100_hook("M", new o("#ariaPostionAbsBottom").val(), "var-init");
      M && M.length > 0 && (n += cc11001100_hook("n", "bottom:" + M + "px !important;", "assign"));
      var I = cc11001100_hook("I", new o("#ariaPostionAbsLeft").val(), "var-init");
      I && I.length > 0 && (n += cc11001100_hook("n", "left:" + I + "px !important;", "assign"));
      var P = cc11001100_hook("P", new o("#ariaPostionAbsRight").val(), "var-init");
      P && P.length > 0 && (n += cc11001100_hook("n", "right:" + P + "px !important;", "assign"));
    }
    var j = cc11001100_hook("j", document.getElementById("ariaHalveShadow").checked, "var-init"),
      L = cc11001100_hook("L", document.getElementById("ariaHalveLine").checked, "var-init"),
      R = cc11001100_hook("R", document.getElementById("ariaHideElem").checked, "var-init");
    document.getElementById("ariaNotHideElem").checked && (n += cc11001100_hook("n", "display:block !important;", "assign")), R && (n += cc11001100_hook("n", "display:none !important;", "assign")), L && (n += cc11001100_hook("n", "    border: none;", "assign")), j && (n += cc11001100_hook("n", "    box-shadow: 0px 8px 10px -1px rgb(203 180 134 / 42%);", "assign"), n += cc11001100_hook("n", "    border-radius: 6px;", "assign")), n.length > 0 && (n = cc11001100_hook("n", s.prefix.useOldFixed() + "  " + e + "{" + n, "assign"), n += cc11001100_hook("n", "}", "assign")), document.getElementById("ariaHalveMouseOver").checked && (n += cc11001100_hook("n", s.prefix.useOldFixed() + "  " + e + " a:hover {", "assign"), n += cc11001100_hook("n", "    color: #bd1a2d !important;", "assign"), n += cc11001100_hook("n", "    background-color: #fff !important;", "assign"), n += cc11001100_hook("n", "    border: 4px solid #bd1a2d;", "assign"), n += cc11001100_hook("n", "}", "assign")), L && (n += cc11001100_hook("n", s.prefix.useOldFixed() + "  " + e + ":after {", "assign"), n += cc11001100_hook("n", '    content: "";', "assign"), n += cc11001100_hook("n", "    width: 1px;", "assign"), n += cc11001100_hook("n", "    height: 36px;", "assign"), n += cc11001100_hook("n", "    background: #fff;", "assign"), n += cc11001100_hook("n", "    position: absolute;", "assign"), n += cc11001100_hook("n", "    top: 50%;", "assign"), n += cc11001100_hook("n", "    margin-top: -18px;", "assign"), n += cc11001100_hook("n", "    right: 0;", "assign"), n += cc11001100_hook("n", "    filter: alpha(opacity=20);", "assign"), n += cc11001100_hook("n", "    -moz-opacity: 0.2;", "assign"), n += cc11001100_hook("n", "    opacity: 0.2;", "assign"), n += cc11001100_hook("n", "}", "assign"));
    var B = cc11001100_hook("B", "", "var-init");
    return L && (B += cc11001100_hook("B", s.prefix.useOldFixed() + "  " + e + ":after {", "assign"), B += cc11001100_hook("B", "    height: 18px;", "assign"), B += cc11001100_hook("B", "    margin-top: -9px;", "assign"), B += cc11001100_hook("B", "}", "assign")), F && t.length > 0 && (B += cc11001100_hook("B", s.prefix.useOldFixed() + "  " + t.cssPath(window.isFuzzy) + "{", "assign"), B += cc11001100_hook("B", "position:relative;", "assign"), B += cc11001100_hook("B", "}", "assign")), B.length > 0 && (n += cc11001100_hook("n", "@media (max-width:768px) {", "assign"), n += cc11001100_hook("n", B, "assign"), n += cc11001100_hook("n", "}", "assign")), n.length > 0 && (n = cc11001100_hook("n", p(e, !0) + n, "assign"), n += cc11001100_hook("n", p(e, !1), "assign")), n;
  }, "assign"), s.clearStyle = cc11001100_hook("s.clearStyle", function (e, t) {
    return e = cc11001100_hook("e", e.replace(/\/\*([自动开始])[^结束]*结束\*\//g, ""), "assign");
  }, "assign");
  var h = function (e) {
      return window.CurSizzle.parent();
    },
    g = function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
        var r = cc11001100_hook("r", e[n], "var-init"),
          i = cc11001100_hook("i", r.trim().substring(r.length - 3), "var-init"),
          o = cc11001100_hook("o", r.trim().substring(r.length - 4), "var-init");
        " li" == i && (t.push(r + ">a"), t.push(r + ">span"), t.push(r + ">a>span")), " div" == o && (t.push(r + ">a"), t.push(r + ">span"), t.push(r + ">a>span"));
      }
      return t = cc11001100_hook("t", e.concat(t), "assign");
    };
  s.RealSizePx = cc11001100_hook("s.RealSizePx", function (e, t, n) {
    if (0 == e.length) return 0;
    if (t || (t = cc11001100_hook("t", "fontSize", "assign")), (e = cc11001100_hook("e", e.split("!")[0], "assign")).indexOf("px") > -1) return e = cc11001100_hook("e", e.replace("px", ""), "assign"), parseFloat(e);
    if (e.indexOf("rem") > -1) {
      var i = cc11001100_hook("i", r.getDprScale(), "var-init");
      return e = cc11001100_hook("e", e.replace("rem", ""), "assign"), 10 / i * parseFloat(e);
    }
    if (e.indexOf("em") > -1) {
      if (n) return n.jTool && n.length > 0 && (n = cc11001100_hook("n", n.firstNode, "assign")), window.getComputedStyle(n)[t];
      var o = cc11001100_hook("o", parseInt(window.getComputedStyle(document.querySelector("body")).fontSize, 10) || 16, "var-init");
      return (e = cc11001100_hook("e", parseFloat(e.replace("em", "")), "assign")) * o;
    }
  }, "assign"), s.width100ScreenWidth = cc11001100_hook("s.width100ScreenWidth", 1025, "assign"), e.exports = cc11001100_hook("e.exports", s, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", (n(0), n(3)), "var-init"),
    a = cc11001100_hook("a", n(23), "var-init"),
    s = cc11001100_hook("s", n(104), "var-init"),
    l = cc11001100_hook("l", n(52), "var-init"),
    c = cc11001100_hook("c", n(107), "var-init"),
    u = cc11001100_hook("u", n(109), "var-init"),
    d = cc11001100_hook("d", window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, "var-init");
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.some(function (e) {
      var t = cc11001100_hook("t", Array.prototype.slice.call(e.addedNodes, 0, e.addedNodes.length), "var-init"),
        n = cc11001100_hook("n", Array.prototype.slice.call(e.removedNodes, 0, e.removedNodes.length), "var-init");
      return t.concat(n), t.some(function (e) {
        var t = cc11001100_hook("t", e.parentNode, "var-init");
        return 1 == e.nodeType && [].indexOf.call(["STYLE", "LINK"], e.nodeName) > -1 && "true" != e.getAttribute("isaria") && !new i(e).hasClass("ariareader--cors") || t && 3 == e.nodeType && [].indexOf.call(["STYLE", "LINK"], t.nodeName) > -1 && "true" != t.getAttribute("isaria") && !new i(t).hasClass("ariareader--cors");
      });
    }) && setTimeout(function () {
      try {
        g(e[0].addedNodes[0].ownerDocument);
      } catch (t) {}
    }, 350);
  }
  var p = cc11001100_hook("p", new Map(), "var-init");
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new i(e.body).aria.id, "var-init");
    p.has(t) && (p.get(t).disconnect(), p["delete"](t));
  }
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    v(e);
  }
  var m = cc11001100_hook("m", new Map(), "var-init");
  function v(e) {
    cc11001100_hook("e", e, "function-parameter");
    e || (e = cc11001100_hook("e", document, "assign")), h(e), a.initCorsCss(e).then(function () {
      var t = cc11001100_hook("t", u.getTheme(), "var-init");
      if (r.status) {
        if (!r.checkSetTheme()) return b(), void setTimeout(function () {
          c.createStaticStyleOverrides(t, e);
        }, 350);
        s.setInlineData(t, e), c.createStaticStyleOverrides(t, e), c.createOverrideBgColor(t, e), new i(e.body).addClass("useAriaTheme"), function (e) {
          var t = cc11001100_hook("t", new i(e.body).aria.id, "var-init");
          if (!p.has(t)) {
            var n = cc11001100_hook("n", new d(f), "var-init");
            n.observe(e.head, {
              childList: cc11001100_hook("childList", !0, "object-key-init"),
              subtree: cc11001100_hook("subtree", !0, "object-key-init"),
              attributes: cc11001100_hook("attributes", !0, "object-key-init"),
              attributeFilter: cc11001100_hook("attributeFilter", ["link"], "object-key-init")
            }), p.set(t, n);
          }
        }(e);
      }
    });
  }
  function b() {
    var e = cc11001100_hook("e", u.getTheme(), "var-init");
    m.clear(), l.clearColorModificationCache(), y(document), c.createStaticStyleOverrides(e, document), o.getAll(document, function (t) {
      y(t), c.createStaticStyleOverrides(e, t);
    });
  }
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    h(e), s.end(e), new i(e.body).removeClass("useAriaTheme"), new i(e).find(".ariareader--override,.ariareader--user-agent").remove();
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function () {
      g(document), o.getAll(document, function (e) {
        g(e);
      });
    },
    end: cc11001100_hook("end", b, "object-key-init"),
    doEventForce: cc11001100_hook("doEventForce", v, "object-key-init"),
    doEventForceAll: function () {
      v(document), o.getAll(document, function (e) {
        v(e);
      });
    }
  }, "assign");
},, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", {
      val: function (e, t) {
        return t = cc11001100_hook("t", t || location.search.substring(1), "assign"), new RegExp("(^|/?|&)" + e + "=([^&]*)(/s|&|$)", "i").test(t) ? RegExp.$2 : "";
      }
    }, "var-init");
  function o() {
    return window.ariaSdkName + "scripts";
  }
  function a(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", {
      success: cc11001100_hook("success", !1, "object-key-init")
    }, "var-init");
    n.road = cc11001100_hook("n.road", e.substr(0, t + 1), "assign"), n.appid = cc11001100_hook("n.appid", i.val("ariaappid", location.href) || i.val("appid", e), "assign"), window.ariaAppId = cc11001100_hook("window.ariaAppId", n.appid, "assign");
    var r = cc11001100_hook("r", i.val("callback", e), "var-init");
    r && r.length > 0 && (n.callback = cc11001100_hook("n.callback", r, "assign"));
    var o = cc11001100_hook("o", i.val("initcallback", e), "var-init");
    o && o.length > 0 && (n.initcallback = cc11001100_hook("n.initcallback", o, "assign"));
    var a = cc11001100_hook("a", i.val("endcallback", e), "var-init");
    return a && a.length > 0 && (n.endcallback = cc11001100_hook("n.endcallback", a, "assign")), n.success = cc11001100_hook("n.success", !0, "assign"), n;
  }
  function s() {
    if (i.val("ariaappid", location.href) && (window.ariaAppId = cc11001100_hook("window.ariaAppId", i.val("ariaappid", location.href), "assign"), window.ariaJsUrl = cc11001100_hook("window.ariaJsUrl", "//p.cnwza.cn/dist/aria.js", "assign")), window.ariaAppId && window.ariaJsUrl) return (s = cc11001100_hook("s", window.ariaJsUrl.indexOf("/" + window.ariaSdkName + ".js"), "assign")) <= 0 && (s = cc11001100_hook("s", window.ariaJsUrl.indexOf("/_" + window.ariaSdkName + ".js"), "assign")), {
      appid: cc11001100_hook("appid", window.ariaAppId, "object-key-init"),
      road: cc11001100_hook("road", window.ariaJsUrl.substr(0, s + 1), "object-key-init"),
      success: cc11001100_hook("success", !0, "object-key-init")
    };
    var e = cc11001100_hook("e", document.scripts, "var-init"),
      t = cc11001100_hook("t", window.ariaSdkName + ".", "var-init"),
      n = cc11001100_hook("n", document.getElementById(o()), "var-init");
    if (null != n) return (s = cc11001100_hook("s", n.src.indexOf("/" + t), "assign")) <= 0 && (s = cc11001100_hook("s", n.src.indexOf("/_" + t), "assign")), a(n.src, s);
    for (var r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) try {
      var s,
        l = cc11001100_hook("l", e[r], "var-init");
      if ((s = cc11001100_hook("s", l.src.indexOf("/" + t), "assign")) <= 0 && (s = cc11001100_hook("s", l.src.indexOf("/_" + t), "assign")), s <= 0 && (s = cc11001100_hook("s", l.src.indexOf("/ariaEdit.js"), "assign")), null !== l.src && s > -1) return l.id = cc11001100_hook("l.id", o(), "assign"), a(l.src, s);
    } catch (c) {}
    return {
      success: cc11001100_hook("success", !1, "object-key-init")
    };
  }
  var l = cc11001100_hook("l", null, "var-init");
  var c = cc11001100_hook("c", {
    en: cc11001100_hook("en", "welcome {0},Blind users use operation intelligent guidance, press the shortcut key Ctrl + Alt + R; To read the detailed operation instructions, press the shortcut key Ctrl + Alt + question mark", "object-key-init"),
    "zh-CN": cc11001100_hook("zh-CN", "欢迎进入 {0},盲人用户使用操作智能引导，请按快捷键Ctrl+Alt+R；阅读详细操作说明请按快捷键Ctrl+Alt+问号键。", "object-key-init"),
    mobileen: cc11001100_hook("mobileen", "Link, barrier free mode, screen reading software service channel", "object-key-init"),
    "mobilezh-CN": cc11001100_hook("mobilezh-CN", "链接，无障碍模式读屏软件服务通道。", "object-key-init")
  }, "var-init");
  function u() {
    for (var e, t = cc11001100_hook("t", document.querySelector("head").querySelectorAll("meta[http-equiv]"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
      var i = cc11001100_hook("i", t[n], "var-init"),
        o = cc11001100_hook("o", i.getAttribute("http-equiv"), "var-init");
      if (!o && "content-language" == o.toLocaleLowerCase()) {
        e = cc11001100_hook("e", i.getAttribute("content"), "assign");
        break;
      }
    }
    return e = cc11001100_hook("e", (e = cc11001100_hook("e", e || "zh-CN", "assign")).indexOf("en") > -1 ? "en" : "zh-CN", "assign"), r.isMobile() && (e = cc11001100_hook("e", "mobile" + e, "assign")), e;
  }
  e.exports = cc11001100_hook("e.exports", {
    keys: function () {
      var e = cc11001100_hook("e", s().appid, "var-init");
      window.ariaAppId = cc11001100_hook("window.ariaAppId", e, "assign");
      var t = function () {
          return window.ariaSdkName + "/" + e;
        },
        n = function () {
          return t() + "/runtime/settings";
        },
        r = function () {
          return t() + "/data/settings";
        },
        i = function () {
          return t() + "/runtime";
        },
        o = function () {
          return t() + "/data";
        },
        a = cc11001100_hook("a", window.ariaSdkName + "/userSettings", "var-init");
      return {
        base: cc11001100_hook("base", window.ariaSdkName, "object-key-init"),
        status: cc11001100_hook("status", window.ariaSdkName + "/status", "object-key-init"),
        corsCss: cc11001100_hook("corsCss", t() + "/corsCss", "object-key-init"),
        pcCss: cc11001100_hook("pcCss", t() + "/pcCss", "object-key-init"),
        mobileCss: cc11001100_hook("mobileCss", t() + "/mobileCss", "object-key-init"),
        userSettings: {
          root: cc11001100_hook("root", a, "object-key-init"),
          defaultTheme: cc11001100_hook("defaultTheme", a + "/defaultTheme", "object-key-init"),
          scale: cc11001100_hook("scale", a + "/scale", "object-key-init"),
          ariaPointerRead: cc11001100_hook("ariaPointerRead", a + "/ariaPointerRead", "object-key-init"),
          bigpoint: cc11001100_hook("bigpoint", a + "/bigpoint", "object-key-init"),
          leftfixed: cc11001100_hook("leftfixed", a + "/leftfixed", "object-key-init"),
          topfixed: cc11001100_hook("topfixed", a + "/fixed", "object-key-init"),
          readtype: cc11001100_hook("readtype", a + "/readtype", "object-key-init"),
          readsrc: cc11001100_hook("readsrc", a + "/readsrc", "object-key-init"),
          checkHasOldFixed: cc11001100_hook("checkHasOldFixed", a + "/checkHasOldFixed", "object-key-init"),
          loadData: cc11001100_hook("loadData", a + "/loadData", "object-key-init"),
          voice: {
            root: cc11001100_hook("root", a + "/voice", "object-key-init"),
            enable: cc11001100_hook("enable", a + "/voice/enable", "object-key-init"),
            rate: cc11001100_hook("rate", a + "/voice/rate", "object-key-init")
          },
          mousemode: cc11001100_hook("mousemode", a + "/mousemode", "object-key-init"),
          mouseten: cc11001100_hook("mouseten", a + "/mouseten", "object-key-init"),
          py: cc11001100_hook("py", a + "/py", "object-key-init"),
          big5: cc11001100_hook("big5", a + "/big5", "object-key-init"),
          bigsrc: cc11001100_hook("bigsrc", a + "/bigsrc", "object-key-init"),
          canRead: cc11001100_hook("canRead", a + "/canRead", "object-key-init"),
          brightness: cc11001100_hook("brightness", a + "/brightness", "object-key-init"),
          contrast: cc11001100_hook("contrast", a + "/contrast", "object-key-init"),
          grayscale: cc11001100_hook("grayscale", a + "/grayscale", "object-key-init")
        },
        road: cc11001100_hook("road", t() + "/road", "object-key-init"),
        root: cc11001100_hook("root", t(), "object-key-init"),
        runtime: {
          root: cc11001100_hook("root", i(), "object-key-init"),
          serviceUrl: cc11001100_hook("serviceUrl", i() + "/serviceUrl", "object-key-init"),
          fileUrl: cc11001100_hook("fileUrl", i() + "/fileUrl", "object-key-init"),
          cssServerUrl: cc11001100_hook("cssServerUrl", i() + "/cssServerUrl", "object-key-init"),
          security: cc11001100_hook("security", i() + "/security", "object-key-init"),
          appid: cc11001100_hook("appid", i() + "/appid", "object-key-init"),
          callback: cc11001100_hook("callback", i() + "/callback", "object-key-init"),
          settings: {
            root: cc11001100_hook("root", n(), "object-key-init"),
            highlight: {
              root: cc11001100_hook("root", n() + "/highlight", "object-key-init"),
              enable: cc11001100_hook("enable", n() + "/highlight/enable", "object-key-init"),
              rate: cc11001100_hook("rate", n() + "/highlight/rate", "object-key-init"),
              mode: cc11001100_hook("mode", n() + "/highlight/mode", "object-key-init")
            },
            voice: {
              root: cc11001100_hook("root", n() + "/voice", "object-key-init"),
              enable: cc11001100_hook("enable", n() + "/voice/enable", "object-key-init"),
              maxRate: cc11001100_hook("maxRate", n() + "/voice/maxRate", "object-key-init"),
              minRate: cc11001100_hook("minRate", n() + "/voice/minRate", "object-key-init"),
              rate: cc11001100_hook("rate", n() + "/voice/rate", "object-key-init")
            },
            curregion: {
              id: cc11001100_hook("id", n() + "/curregion/id", "object-key-init")
            },
            golabSkipScale: cc11001100_hook("golabSkipScale", n() + "/golabSkipScale", "object-key-init"),
            golabSkipAll: cc11001100_hook("golabSkipAll", n() + "/golabSkipAll", "object-key-init"),
            golabSkipTheme: cc11001100_hook("golabSkipTheme", n() + "/golabSkipTheme", "object-key-init"),
            golabFocus: cc11001100_hook("golabFocus", n() + "/golabFocus", "object-key-init"),
            golabRegion1: cc11001100_hook("golabRegion1", n() + "/golabRegion1", "object-key-init"),
            golabRegion2: cc11001100_hook("golabRegion2", n() + "/golabRegion2", "object-key-init"),
            golabRegion3: cc11001100_hook("golabRegion3", n() + "/golabRegion3", "object-key-init"),
            golabRegion4: cc11001100_hook("golabRegion4", n() + "/golabRegion4", "object-key-init"),
            golabReplaceBg: cc11001100_hook("golabReplaceBg", n() + "/golabReplaceBg", "object-key-init"),
            tellerMode: cc11001100_hook("tellerMode", n() + "/tellerMode", "object-key-init"),
            defaultLanguage: cc11001100_hook("defaultLanguage", n() + "/defaultLanguage", "object-key-init"),
            shortCutIcon: cc11001100_hook("shortCutIcon", n() + "/shortCutIcon", "object-key-init"),
            css: cc11001100_hook("css", n() + "/css", "object-key-init"),
            closeShortIcon: cc11001100_hook("closeShortIcon", n() + "/closeShortIcon", "object-key-init"),
            bodyfont: cc11001100_hook("bodyfont", n() + "/bodyfont", "object-key-init"),
            reticle: cc11001100_hook("reticle", n() + "/reticle", "object-key-init"),
            spacing: cc11001100_hook("spacing", n() + "/spacing", "object-key-init"),
            padding: cc11001100_hook("padding", n() + "/padding", "object-key-init"),
            maxZoom: cc11001100_hook("maxZoom", n() + "/maxZoom", "object-key-init"),
            minZoom: cc11001100_hook("minZoom", n() + "/minZoom", "object-key-init"),
            focusTheme: cc11001100_hook("focusTheme", n() + "/focusTheme", "object-key-init"),
            useOldFixed: cc11001100_hook("useOldFixed", n() + "/useOldFixed", "object-key-init"),
            oldFixedCss: cc11001100_hook("oldFixedCss", n() + "/oldFixedCss", "object-key-init"),
            defaultTheme: cc11001100_hook("defaultTheme", n() + "/defaultTheme", "object-key-init"),
            scale: cc11001100_hook("scale", n() + "/scale", "object-key-init"),
            golabFixedCss: cc11001100_hook("golabFixedCss", n() + "/golabFixedCss", "object-key-init"),
            golabCss: cc11001100_hook("golabCss", n() + "/golabCss", "object-key-init"),
            iconType: cc11001100_hook("iconType", n() + "/iconType", "object-key-init"),
            pageDesc: cc11001100_hook("pageDesc", n() + "/pageDesc", "object-key-init"),
            mobileToolPosition: cc11001100_hook("mobileToolPosition", n() + "/mobileToolPosition", "object-key-init"),
            mobileToolSelectedColor: cc11001100_hook("mobileToolSelectedColor", n() + "/mobileToolSelectedColor", "object-key-init"),
            mobileCss: cc11001100_hook("mobileCss", n() + "/mobileCss", "object-key-init"),
            useOldFixedInMobile: cc11001100_hook("useOldFixedInMobile", n() + "/useOldFixedInMobile", "object-key-init"),
            wapOldFixedUrl: cc11001100_hook("wapOldFixedUrl", r() + "/wapOldFixedUrl", "object-key-init"),
            pcOldFixedUrl: cc11001100_hook("pcOldFixedUrl", r() + "/pcOldFixedUrl", "object-key-init"),
            skipAutoFix: cc11001100_hook("skipAutoFix", r() + "/skipAutoFix", "object-key-init"),
            showFixBtnInToolBar: cc11001100_hook("showFixBtnInToolBar", r() + "/showFixBtnInToolBar", "object-key-init"),
            useAutoFixBase: cc11001100_hook("useAutoFixBase", r() + "/useAutoFixBase", "object-key-init"),
            wapUseAutoFixBase: cc11001100_hook("wapUseAutoFixBase", r() + "/wapUseAutoFixBase", "object-key-init"),
            wapUseConfigPage: cc11001100_hook("wapUseConfigPage", r() + "/wapUseConfigPage", "object-key-init"),
            wapChangeViewPort: cc11001100_hook("wapChangeViewPort", r() + "/wapChangeViewPort", "object-key-init"),
            elementFilter: cc11001100_hook("elementFilter", r() + "/elementFilter", "object-key-init"),
            wapForceOldFixed: cc11001100_hook("wapForceOldFixed", r() + "/wapForceOldFixed", "object-key-init"),
            disabledRegion: cc11001100_hook("disabledRegion", r() + "/disabledRegion", "object-key-init"),
            disabledInMobile: cc11001100_hook("disabledInMobile", r() + "/disabledInMobile", "object-key-init"),
            disabledAutoReign: cc11001100_hook("disabledAutoReign", r() + "/disabledAutoReign", "object-key-init"),
            disabledAllStData: cc11001100_hook("disabledAllStData", r() + "/disabledAllStData", "object-key-init"),
            loadData: cc11001100_hook("loadData", r() + "/loadData", "object-key-init"),
            wapChangeFontSize: cc11001100_hook("wapChangeFontSize", r() + "/wapChangeFontSize", "object-key-init"),
            endRefresh: cc11001100_hook("endRefresh", r() + "/endRefresh", "object-key-init"),
            useAutoFixedBtn: cc11001100_hook("useAutoFixedBtn", r() + "/useAutoFixedBtn", "object-key-init")
          }
        },
        data: {
          root: cc11001100_hook("root", o(), "object-key-init"),
          serviceVersion: cc11001100_hook("serviceVersion", o() + "/serviceVersion", "object-key-init"),
          languages: cc11001100_hook("languages", o() + "/languages", "object-key-init"),
          themes: cc11001100_hook("themes", o() + "/theme", "object-key-init"),
          golbalElems: cc11001100_hook("golbalElems", o() + "/golbalElems", "object-key-init"),
          roles: cc11001100_hook("roles", o() + "/roles", "object-key-init"),
          conf: {
            root: cc11001100_hook("root", o() + "/conf", "object-key-init"),
            region: cc11001100_hook("region", o() + "/conf/region", "object-key-init")
          },
          settings: {
            root: cc11001100_hook("root", r(), "object-key-init"),
            enable: cc11001100_hook("enable", r() + "/enable", "object-key-init"),
            topfixed: cc11001100_hook("topfixed", r() + "/fixed", "object-key-init"),
            highlight: {
              root: cc11001100_hook("root", r() + "/highlight", "object-key-init"),
              enable: cc11001100_hook("enable", r() + "/highlight/enable", "object-key-init"),
              rate: cc11001100_hook("rate", r() + "/highlight/rate", "object-key-init"),
              mode: cc11001100_hook("mode", r() + "/highlight/mode", "object-key-init")
            },
            voice: {
              root: cc11001100_hook("root", r() + "/voice", "object-key-init"),
              enable: cc11001100_hook("enable", r() + "/voice/enable", "object-key-init"),
              rate: cc11001100_hook("rate", r() + "/voice/rate", "object-key-init")
            },
            tellerMode: cc11001100_hook("tellerMode", r() + "/tellerMode", "object-key-init"),
            defaultTheme: cc11001100_hook("defaultTheme", r() + "/defaultTheme", "object-key-init"),
            defaultLanguage: cc11001100_hook("defaultLanguage", r() + "/defaultLanguage", "object-key-init"),
            shortCutIcon: cc11001100_hook("shortCutIcon", r() + "/shortCutIcon", "object-key-init"),
            scale: cc11001100_hook("scale", r() + "/scale", "object-key-init"),
            golabFixedCss: cc11001100_hook("golabFixedCss", r() + "/golabFixedCss", "object-key-init"),
            golabCss: cc11001100_hook("golabCss", r() + "/golabCss", "object-key-init"),
            iconType: cc11001100_hook("iconType", r() + "/iconType", "object-key-init"),
            spacing: cc11001100_hook("spacing", r() + "/spacing", "object-key-init")
          }
        }
      };
    },
    getAppid: cc11001100_hook("getAppid", s, "object-key-init"),
    queryString: cc11001100_hook("queryString", i, "object-key-init"),
    AppIdChangeAddListen: function (e) {
      l = cc11001100_hook("l", setInterval(function () {
        var t = cc11001100_hook("t", s().appid, "var-init");
        window.ariaAppId != t && e && "function" == typeof e && (window.ariaAppId = cc11001100_hook("window.ariaAppId", t, "assign"), e());
      }, 1500), "assign");
    },
    AppIdChangeRemoveListen: function () {
      clearInterval(l), l = cc11001100_hook("l", null, "assign");
    },
    addWelcomeContent: function () {
      var e = cc11001100_hook("e", u(), "var-init"),
        t = cc11001100_hook("t", c[e], "var-init");
      if (t) {
        t = cc11001100_hook("t", t.replace("{0}", document.title), "assign");
        var n = cc11001100_hook("n", document.querySelector("#ariaTipText"), "var-init");
        n || ((n = cc11001100_hook("n", document.createElement("a"), "assign")).id = cc11001100_hook("(n = document.createElement(\"a\")).id", "ariaTipText", "assign"), n.setAttribute("role", "pagedescription"), n.setAttribute("aria-label", t), n.setAttribute("aria-atomic", "true"), n.setAttribute("href", "javascript:void(0)"), n.classList.add("skipAutoFix"), n.style.width = cc11001100_hook("n.style.width", "1px", "assign"), n.style.height = cc11001100_hook("n.style.height", "1px", "assign"), r.isMobile() && n.setAttribute("onclick", "aria.wzaStart();"), n.innerHTML = cc11001100_hook("n.innerHTML", "<img src style='width:1px !important;height:1px !important;position:absolute;top:0;'>", "assign"), document.body.insertBefore(n, document.body.firstElementChild));
      }
    },
    welcomeContent: cc11001100_hook("welcomeContent", c, "object-key-init"),
    getLanguageName: cc11001100_hook("getLanguageName", u, "object-key-init"),
    inApp: function () {
      var e = cc11001100_hook("e", navigator.userAgent.toLowerCase(), "var-init");
      return null != e.match(/Android/i) ? null == e.match(/browser/i) : null != e.match(/iPhone/i) ? null == e.match(/safari/i) : null == e.match(/macintosh/i) && null == e.match(/windows/i);
    },
    getScriptsId: cc11001100_hook("getScriptsId", o, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(14), "var-init"),
    i = cc11001100_hook("i", n(11), "var-init"),
    o = cc11001100_hook("o", i.keys(), "var-init"),
    a = cc11001100_hook("a", "/api/services/Accessibility", "var-init"),
    s = cc11001100_hook("s", r.get(o.runtime.fileUrl), "var-init"),
    l = cc11001100_hook("l", r.get(o.runtime.serviceUrl), "var-init"),
    c = cc11001100_hook("c", {
      data: {
        config: cc11001100_hook("config", a + "/Configuration/GetAll", "object-key-init"),
        curconf: cc11001100_hook("curconf", a + "/Configuration/GetConf", "object-key-init"),
        security: cc11001100_hook("security", a + "/Security/Get", "object-key-init"),
        ttsurl: cc11001100_hook("ttsurl", a + "/TTS/Create", "object-key-init"),
        mp3: cc11001100_hook("mp3", a + "/TTS/mp3", "object-key-init"),
        corsCss: cc11001100_hook("corsCss", a + "/Theme/CorsCss", "object-key-init"),
        wapForceOldFixed: cc11001100_hook("wapForceOldFixed", a + "/Configuration/checkHasOldFixed", "object-key-init"),
        loadData: cc11001100_hook("loadData", a + "/Configuration/checkLoadData", "object-key-init"),
        showMobileOldFixedBtn: cc11001100_hook("showMobileOldFixedBtn", a + "/Configuration/CheckAutoFixedBtn", "object-key-init"),
        loadPcCss: cc11001100_hook("loadPcCss", a + "/Configuration/loadPcCss", "object-key-init"),
        loadMobileCss: cc11001100_hook("loadMobileCss", a + "/Configuration/loadMobileCss", "object-key-init")
      },
      get serviceUrl() {
        if (l) return l;
        var e = cc11001100_hook("e", location.protocol + "://" + location.host + ":" + location.port, "var-init"),
          t = cc11001100_hook("t", r.get(o.runtime.serviceUrl), "var-init");
        return null != t && (l = cc11001100_hook("l", t, "assign")), null != t ? t : e;
      },
      get fileUrl() {
        return s || (s = cc11001100_hook("s", r.get(o.runtime.fileUrl) || this.serviceUrl, "assign"));
      },
      get cssServerUrl() {
        var e = cc11001100_hook("e", r.get(o.runtime.cssServerUrl), "var-init");
        return null != e ? e : this.serviceUrl;
      },
      set serviceUrl(e) {
        r.set(o.runtime.serviceUrl, e);
      },
      get config() {
        return this.serviceUrl + c.data.config;
      },
      get loadData() {
        return this.serviceUrl + c.data.loadData;
      },
      get loadPcCss() {
        return this.serviceUrl + c.data.loadPcCss;
      },
      get loadMobileCss() {
        return this.serviceUrl + c.data.loadMobileCss;
      },
      get checkHasOldFixed() {
        return this.serviceUrl + c.data.checkHasOldFixed;
      },
      get curconf() {
        return this.serviceUrl + c.data.curconf;
      },
      get security() {
        return this.serviceUrl + c.data.security;
      },
      get ttsurl() {
        return this.fileUrl + c.data.ttsurl;
      },
      get mp3() {
        return this.fileUrl + c.data.mp3;
      },
      get corsCss() {
        return this.cssServerUrl + c.data.corsCss;
      },
      get checkAutoFixedBtn() {
        return this.serviceUrl + c.data.showMobileOldFixedBtn;
      },
      get wapForceOldFixed() {
        return this.serviceUrl + c.data.wapForceOldFixed;
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", {
    keys: cc11001100_hook("keys", o, "object-key-init"),
    api: cc11001100_hook("api", c, "object-key-init"),
    elem: {
      shortCutIcon: cc11001100_hook("shortCutIcon", "aria-shortCutIcon", "object-key-init")
    },
    getAppid: cc11001100_hook("getAppid", i.getAppid, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(2), "var-init"),
    o = cc11001100_hook("o", n(17), "var-init"),
    a = cc11001100_hook("a", n(18), "var-init"),
    s = cc11001100_hook("s", n(3), "var-init");
  function l() {}
  o.registerEvent(a.startService, l, 0), e.exports = cc11001100_hook("e.exports", {
    setFontSize: cc11001100_hook("setFontSize", l, "object-key-init"),
    setClass: function (e, t) {
      if (t || (t = cc11001100_hook("t", document, "assign")), e.aria.setFocusClass(), 0 != e.length) {
        var n,
          o = cc11001100_hook("o", e.aria.regionElem, "var-init");
        n = cc11001100_hook("n", i.className.region, "assign"), new r(document).find("." + n).removeClass(n), new r(document).find("[aria-regionActive]").removeAttr("aria-regionActive"), s.getAll(document, function (e) {
          new r(e).find("[aria-regionActive]").removeAttr("aria-regionActive"), new r(e).find("." + n).removeClass(n);
        }), o && o.length > 0 && e.aria.canSetClass && (o.addClass(i.className.region), o.ariaAttr("regionActive", "true"));
      }
    }
  }, "assign");
}, function (e, t) {
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (null === e) return "null";
    if (e != e) return "nan";
    if ("function" == typeof Array.isArray) {
      if (Array.isArray(e)) return "array";
    } else if ("[object Array]" === Object.prototype.toString.call(e)) return "array";
    return (typeof e).toLowerCase();
  }
  var r = function () {
    this.name = cc11001100_hook("this.name", "Store", "assign");
  };
  function i(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return e || (e = cc11001100_hook("e", {}, "assign")), e[t[r]] || (e[t[r]] = cc11001100_hook("e[t[r]]", {}, "assign")), r >= t.length - 1 ? (void 0 === n ? delete e[t[r]] : e[t[r]] = cc11001100_hook("e[t[r]]", n, "assign"), e) : (i(e[t[r]], t, n, r + 1), e);
  }
  var o = cc11001100_hook("o", null, "var-init");
  r.prototype = cc11001100_hook("r.prototype", {
    init: function (e) {
      return this.store = cc11001100_hook("this.store", window[e], "assign"), this;
    },
    set: function (e, t) {
      if ("object" == typeof e && (e = cc11001100_hook("e", e["root"], "assign")), null != e) {
        var r = cc11001100_hook("r", e.split("/"), "var-init"),
          a = cc11001100_hook("a", this.get(r[0]), "var-init");
        switch (a || (a = cc11001100_hook("a", {}, "assign")), r.length > 1 && (a = cc11001100_hook("a", i(a, r, t, 1), "assign")), n(a)) {
          case "object":
          case "array":
            this.store.setItem(r[0], JSON.stringify(a));
            break;
          default:
            this.store.setItem(r[0], a);
        }
        o = cc11001100_hook("o", a, "assign");
      }
    },
    get: function (e) {
      if (e) {
        var t = cc11001100_hook("t", e.split("/"), "var-init");
        o || (o = cc11001100_hook("o", JSON.parse(this.store.getItem(t[0])), "assign"));
        var n = cc11001100_hook("n", o, "var-init");
        if (null == n) return null;
        for (var r = cc11001100_hook("r", 1, "var-init"); r < t.length; r++) {
          if (null == (n = cc11001100_hook("n", n[t[r]], "assign"))) break;
        }
        return n;
      }
    },
    getAll: function () {
      var e = cc11001100_hook("e", JSON.parse(JSON.stringify(this.store)), "var-init"),
        t = cc11001100_hook("t", {}, "var-init"),
        r = cc11001100_hook("r", "", "var-init");
      for (var i in e) {
        try {
          r = cc11001100_hook("r", "number" === n(+(r = cc11001100_hook("r", e[i], "assign"))) ? r : JSON.parse(r), "assign");
        } catch (o) {}
        t[i] = cc11001100_hook("t[i]", r, "assign");
      }
      return t;
    },
    remove: function (e) {
      this.set(e, undefined);
    },
    clear: function () {
      this.store.clear();
    }
  }, "assign");
  var a = cc11001100_hook("a", new r().init("localStorage"), "var-init");
  new r().init("sessionStorage");
  e.exports = cc11001100_hook("e.exports", a, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(4), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    checkViewport: function () {
      if (r.wapChangeViewPort()) {
        var e = cc11001100_hook("e", new i("[name='viewport']"), "var-init");
        if (0 == e.length) {
          var t = cc11001100_hook("t", document.createElement("meta"), "var-init");
          document.querySelector("head").appendChild(t), t.id = cc11001100_hook("t.id", "viewport", "assign"), t.setAttribute("name", "viewport"), t.content = cc11001100_hook("t.content", "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no", "assign");
        } else for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
          var o = cc11001100_hook("o", e[n], "var-init"),
            a = cc11001100_hook("a", o.getAttribute("content"), "var-init");
          (void 0 === a || 0 == a.trim().length || r.wapChangeViewPort() || window.ariaFromApp) && (o.content = cc11001100_hook("o.content", "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no", "assign"));
        }
      }
    },
    checkCompatible: function () {
      var e = cc11001100_hook("e", document.querySelector("head").querySelector("[http-equiv='X-UA-Compatible']"), "var-init");
      e && (e.content = cc11001100_hook("e.content", "IE=10,chrome=1", "assign"));
    },
    setDprScale: function (e) {
      var t = cc11001100_hook("t", document.querySelector("html").getAttribute("data-dpr"), "var-init");
      e && t && "1" != t && (e.style.fontSize = cc11001100_hook("e.style.fontSize", 18 * parseFloat(t), "assign"));
    },
    getDprScale: function () {
      var e = cc11001100_hook("e", window.document, "var-init"),
        t = cc11001100_hook("t", (e.documentElement, e.querySelector("meta[name='viewport']")), "var-init"),
        n = cc11001100_hook("n", e.querySelector("meta[name='flexible']"), "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", 1, "var-init");
      if (t) {
        var o = cc11001100_hook("o", t.getAttribute("content").match(/initial-scale=([d.]+)/), "var-init");
        o && (i = cc11001100_hook("i", parseFloat(o[1]), "assign"), r = cc11001100_hook("r", parseInt(1 / i), "assign"));
      } else if (n) {
        var a = cc11001100_hook("a", n.getAttribute("content"), "var-init");
        if (a) {
          var s = cc11001100_hook("s", a.match(/initial-dpr=([d.]+)/), "var-init"),
            l = cc11001100_hook("l", a.match(/maximum-dpr=([d.]+)/), "var-init");
          s && (r = cc11001100_hook("r", parseFloat(s[1]), "assign"), i = cc11001100_hook("i", parseFloat((1 / r).toFixed(2)), "assign")), l && (r = cc11001100_hook("r", parseFloat(l[1]), "assign"), i = cc11001100_hook("i", parseFloat((1 / r).toFixed(2)), "assign"));
        }
      }
      return i;
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(22), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init");
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", {
      url: cc11001100_hook("url", null, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      data: cc11001100_hook("data", null, "object-key-init"),
      headers: {},
      async: cc11001100_hook("async", !0, "object-key-init"),
      xhrFields: {},
      beforeSend: cc11001100_hook("beforeSend", i.noop, "object-key-init"),
      complete: cc11001100_hook("complete", i.noop, "object-key-init"),
      success: cc11001100_hook("success", i.noop, "object-key-init"),
      error: cc11001100_hook("error", i.noop, "object-key-init")
    }, "var-init");
    if ((e = cc11001100_hook("e", r(t, e), "assign")).url) {
      var n;
      e.data = cc11001100_hook("e.data", e.data || {}, "assign");
      try {
        n = cc11001100_hook("n", window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), "assign");
      } catch (a) {}
      var o = cc11001100_hook("o", new Promise(function (t, r) {
        var s = cc11001100_hook("s", "", "var-init");
        "GET" === e.type.toUpperCase() && ((s = cc11001100_hook("s", function () {
          var t = cc11001100_hook("t", "", "var-init");
          return "object" === i.type(e.data) ? (i.each(e.data, function (e, n) {
            void 0 !== n && ("" !== t && (t += cc11001100_hook("t", "&", "assign")), t += cc11001100_hook("t", e + "=" + n, "assign"));
          }), t) : e.data;
        }(), "assign")) && (e.url = cc11001100_hook("e.url", e.url + (-1 === e.url.indexOf("?") ? "?" : "&") + s, "assign")), s = cc11001100_hook("s", null, "assign"));
        try {
          n.open(e.type, e.url, e.async);
        } catch (a) {}
        for (var l in e.xhrFields) n[l] = cc11001100_hook("n[l]", e.xhrFields[l], "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < e.headers.length; c++) {
          var u = cc11001100_hook("u", e.headers[c], "var-init");
          n.setRequestHeader(u.name, u.value);
        }
        "POST" === e.type.toUpperCase() && (n.setRequestHeader("Content-Type", "application/json;charset=utf-8"), s = cc11001100_hook("s", JSON.stringify(e.data), "assign")), e.beforeSend(n), n.responseType || (n.responseType = cc11001100_hook("n.responseType", "text", "assign"));
        try {
          n.send(s);
        } catch (a) {}
        e.async ? (n.onload = cc11001100_hook("n.onload", function () {
          if (200 === n.status) {
            var i = cc11001100_hook("i", {}, "var-init");
            try {
              i = cc11001100_hook("i", JSON.parse(n.responseJSON || n.response || n.responseText), "assign");
            } catch (a) {
              i = cc11001100_hook("i", n.responseJSON || n.response || n.responseText, "assign");
            }
            o.done && "function" == typeof o.done && o.done(i), e.success && e.success(i, n.status), t && "function" == typeof t && t(i);
          } else r && "function" == typeof r && r(n, n.status);
        }, "assign"), n.onerror = cc11001100_hook("n.onerror", function () {
          e.error && e.error(n, n.status), r && "function" == typeof r && r(n, n.status);
        }, "assign")) : 200 === n.status ? (o.done && "function" == typeof o.done && o.done(n.responseJSON || n.response || n.responseText), e.success && e.success(n.response, n.status), t(n.response || n.responseText)) : (e.error && e.error(n, n.status), r && "function" == typeof r && r(n, n.status));
      }), "var-init");
      return o;
    }
  }
  function a(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return o({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      headers: {
        "Content-Type": cc11001100_hook("Content-Type", "text/html", "object-key-init")
      },
      xhrFields: {
        responseType: cc11001100_hook("responseType", "text", "object-key-init"),
        mimeType: cc11001100_hook("mimeType", "text/html", "object-key-init")
      },
      success: cc11001100_hook("success", t, "object-key-init")
    });
  }
  e.exports = cc11001100_hook("e.exports", {
    ajax: cc11001100_hook("ajax", o, "object-key-init"),
    post: function (e, t, n) {
      return o({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", "POST", "object-key-init"),
        data: cc11001100_hook("data", t, "object-key-init"),
        success: cc11001100_hook("success", n, "object-key-init")
      });
    },
    get: function (e, t, n) {
      return o({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        data: cc11001100_hook("data", t, "object-key-init"),
        success: cc11001100_hook("success", n, "object-key-init")
      });
    },
    getHTML: cc11001100_hook("getHTML", a, "object-key-init"),
    jsonp: function (e, t) {
      var n,
        r = cc11001100_hook("r", document.createElement("script"), "var-init");
      return "object" == typeof e && (e = cc11001100_hook("e", (t = cc11001100_hook("t", e, "assign")).url, "assign"), delete t.url), e = cc11001100_hook("e", e + (e.indexOf("?") > 0 ? "&" : "?") + function (e) {
        var t = cc11001100_hook("t", [], "var-init");
        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&");
      }(t.data), "assign"), new Promise(function (i, o) {
        r.onerror = cc11001100_hook("r.onerror", function (e) {
          return t.error && t.error(e), o("出错了");
        }, "assign"), n = cc11001100_hook("n", ("jsonp_" + Math.random()).replace(".", ""), "assign"), window[n] = cc11001100_hook("window[n]", function (e) {
          return document.head.removeChild(r), t.success && t.success(e), i(e);
        }, "assign"), r.src = cc11001100_hook("r.src", e + (e.indexOf("?") >= 0 ? "&" : "?") + (t.callback ? t.callback : "callback") + "=" + n, "assign"), document.head.append(r);
      });
    },
    whenGetText: function (e, t) {
      Promise.all(e.map(function (e) {
        return a(e).then(function (e) {
          return e;
        }, function (e) {
          return "";
        });
      })).then(function (e) {
        t && "function" == typeof t && t(e);
      });
    },
    getCss: function (e, t) {
      return o({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        xhrFields: {
          responseType: cc11001100_hook("responseType", "text", "object-key-init"),
          mimeType: cc11001100_hook("mimeType", "text/css", "object-key-init")
        },
        success: cc11001100_hook("success", t, "object-key-init")
      });
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", n(18), "var-init"),
    o = cc11001100_hook("o", [], "var-init");
  e.exports = cc11001100_hook("e.exports", {
    registerEvent: function (e, t, n) {
      "object" == typeof e && o.push(e), o.push({
        name: cc11001100_hook("name", e, "object-key-init"),
        event: cc11001100_hook("event", t, "object-key-init"),
        priority: cc11001100_hook("priority", n, "object-key-init")
      });
    },
    execEvent: function (e, t) {
      if (e) {
        for (var n = cc11001100_hook("n", !1, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < 10; i++) {
          var a = cc11001100_hook("a", o.filter(function (t) {
            return t.name == e && t.priority == i;
          }), "var-init");
          r.each(a, function (e, i) {
            var o = cc11001100_hook("o", i, "var-init");
            o && o.event && "function" == typeof o.event && (n = cc11001100_hook("n", "array" == r.type(t) ? n || o.event.apply(this, t) : n || o.event.call(this, t), "assign"));
          });
        }
        return n;
      }
    },
    eventNames: cc11001100_hook("eventNames", i, "object-key-init"),
    removeRegisterEvent: function (e) {
      for (var t = cc11001100_hook("t", o.length, "var-init"); t < 0; t--) {
        o[t].name == e && o.splice(t, 1);
      }
    }
  }, "assign");
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", {
    globalListen: cc11001100_hook("globalListen", "globalListen", "object-key-init"),
    voicePlay: cc11001100_hook("voicePlay", "voicePlay", "object-key-init"),
    click: cc11001100_hook("click", "click", "object-key-init"),
    focusIn: cc11001100_hook("focusIn", "focusIn", "object-key-init"),
    blur: cc11001100_hook("blur", "blur", "object-key-init"),
    globalStart: cc11001100_hook("globalStart", "globalStart", "object-key-init"),
    globalEnd: cc11001100_hook("globalEnd", "globalEnd", "object-key-init"),
    startService: cc11001100_hook("startService", "startService", "object-key-init"),
    endService: cc11001100_hook("endService", "endService", "object-key-init"),
    SizzleKeyDown: cc11001100_hook("SizzleKeyDown", "SizzleKeyDown", "object-key-init"),
    TouchWakeup: cc11001100_hook("TouchWakeup", "TouchWakeup", "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init"),
    a = cc11001100_hook("a", n(6), "var-init"),
    s = cc11001100_hook("s", n(21), "var-init"),
    l = cc11001100_hook("l", n(3), "var-init"),
    c = cc11001100_hook("c", n(15), "var-init"),
    u = cc11001100_hook("u", n(8), "var-init"),
    d = cc11001100_hook("d", n(55), "var-init"),
    f = cc11001100_hook("f", n(34), "var-init"),
    p = cc11001100_hook("p", (l = cc11001100_hook("l", n(3), "assign"), n(24)), "var-init"),
    h = cc11001100_hook("h", n(4), "var-init");
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t;
    o.disabledAllStData || (e || (e = cc11001100_hook("e", document, "assign")), function (e) {
      var t = cc11001100_hook("t", o.curpageConf, "var-init");
      if (!e.body) return;
      (function (e) {
        var t = cc11001100_hook("t", o.golabSkipAll, "var-init");
        if (t) {
          var n = cc11001100_hook("n", new i(e.body).find(t), "var-init");
          r.each(n, function (e, t) {
            t.setAttribute("aria-skipall", "true");
          });
        }
        var a = cc11001100_hook("a", o.golabFocus, "var-init");
        if (a) {
          var s = cc11001100_hook("s", new i(e.body).find(a), "var-init");
          r.each(s, function (e, t) {
            "0" != t.getAttribute("tabindex") && t.setAttribute("tabindex", 0);
          });
        }
        var l = cc11001100_hook("l", o.golabRegion1, "var-init");
        if (l) {
          var c = cc11001100_hook("c", new i(e.body).find(l), "var-init");
          r.each(c, function (e, t) {
            var n = cc11001100_hook("n", new i(t), "var-init");
            n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 1), "0" != t.getAttribute("tabindex") && n.attr("tabindex", 0);
          });
        }
        var u = cc11001100_hook("u", o.golabRegion2, "var-init");
        if (u) {
          var d = cc11001100_hook("d", new i(e.body).find(u), "var-init");
          r.each(d, function (e, t) {
            var n = cc11001100_hook("n", new i(t), "var-init");
            n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 2), "0" != t.getAttribute("tabindex") && n.attr("tabindex", 0);
          });
        }
        var f = cc11001100_hook("f", o.golabRegion3, "var-init");
        if (f) {
          var p = cc11001100_hook("p", new i(e.body).find(f), "var-init");
          r.each(p, function (e, t) {
            var n = cc11001100_hook("n", new i(t), "var-init");
            n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 3), "0" != t.getAttribute("tabindex") && n.attr("tabindex", 0);
          });
        }
        var h = cc11001100_hook("h", o.golabRegion4, "var-init");
        if (h) {
          var g = cc11001100_hook("g", new i(e.body).find(h), "var-init");
          r.each(g, function (e, t) {
            var n = cc11001100_hook("n", new i(t), "var-init");
            n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 4), "0" != t.getAttribute("tabindex") && n.attr("tabindex", 0);
          });
        }
        var m = cc11001100_hook("m", o.golabSkipTheme, "var-init");
        if (m) {
          var v = cc11001100_hook("v", new i(e.body).find(m), "var-init");
          r.each(v, function (e, t) {
            var n = cc11001100_hook("n", new i(t), "var-init");
            n.addClass("ariaskiptheme"), n.ariaAttr("skiptheme", "true");
          });
        }
        var b = cc11001100_hook("b", o.golabSkipScale, "var-init");
        if (b) {
          var y = cc11001100_hook("y", new i(e.body).find(b), "var-init");
          r.each(y, function (e, t) {
            new i(t).ariaAttr("skipscale", "true");
          });
        }
      })(e), function (e) {
        var t = cc11001100_hook("t", o.golbalElems, "var-init");
        t && r.each(t, function (t, n) {
          y(n, e);
        });
      }(e), o.disabledAutoReign || function (e) {
        var t = cc11001100_hook("t", new i(e.body).find("form,div.login_box"), "var-init");
        r.each(t, function (e, t) {
          var n = cc11001100_hook("n", new i(t), "var-init");
          "true" != n.ariaAttr("region") && 0 == n.closest('[aria-region="true"]').length && (n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 3), n.aria.focusable = cc11001100_hook("n.aria.focusable", 1, "assign"));
        });
        var n = cc11001100_hook("n", new i(e.body).find("header,nav,#header,#nav,div.header,div.nav,div.left-nav,div.d-subnav"), "var-init");
        r.each(n, function (e, t) {
          var n = cc11001100_hook("n", new i(t), "var-init");
          "true" != n.ariaAttr("region") && 0 == n.closest('[aria-region="true"]').length && (n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 2), n.aria.focusable = cc11001100_hook("n.aria.focusable", 1, "assign"));
        });
        var o = cc11001100_hook("o", new i(e.body).find("#content,div.wrapper,#wrapper,div.main-r,div.main,#main"), "var-init");
        r.each(o, function (e, t) {
          var n = cc11001100_hook("n", new i(t), "var-init");
          "true" != n.ariaAttr("region") && 0 == n.closest('[aria-region="true"]').length && (n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 1), n.aria.focusable = cc11001100_hook("n.aria.focusable", 1, "assign"));
        });
        var a = cc11001100_hook("a", new i(e.body).find("div.footer,#footer,footer"), "var-init");
        r.each(a, function (e, t) {
          var n = cc11001100_hook("n", new i(t), "var-init");
          "true" != n.ariaAttr("region") && 0 == n.closest('[aria-region="true"]').length && (n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 4), n.aria.focusable = cc11001100_hook("n.aria.focusable", 1, "assign"));
        });
      }(e);
      t && t.name && null != t.value && null != t.value.name && (e == document && t.value.disOldFixed && document.body.setAttribute("aria-disOldFixed", "true"), function (e, t) {
        e.value && e.value.elems && r.each(e.value.elems, function (e, n) {
          y(n, t);
        });
        e.value && e.value.templateElems && r.each(e.value.templateElems, function (e, n) {
          y(n, t);
        });
      }(t, e));
      if (r.isFF()) {
        var n = cc11001100_hook("n", new i("body").child(), "var-init");
        r.each(n, function (e, t) {
          var n = cc11001100_hook("n", "", "var-init"),
            r = cc11001100_hook("r", new i(t), "var-init");
          1 == t.nodeType && r.aria && r.aria.skipscale && (n = cc11001100_hook("n", "elemscale", "assign"), r.addClass(n));
        });
      }
      setTimeout(function () {
        !function (e) {
          var t = cc11001100_hook("t", new i(e.body).find("[v]"), "var-init");
          r.each(t, function (e, t) {
            var n = cc11001100_hook("n", new i(t), "var-init");
            n.attr("fromvlabel") || (n.attr("fromvlabel", !0), n.aria.label || n.aria.title || n.aria.placeholder || ("INPUT" == t.nodeType ? n.aria.placeholder = cc11001100_hook("n.aria.placeholder", n.attr("v"), "assign") : n.aria.title = cc11001100_hook("n.aria.title", n.attr("v"), "assign")));
          });
          var n = cc11001100_hook("n", new i(e.body).find("[aria-region='true']:not([aria-autolabel='true']),[aria-haspopup='true']:not([aria-autolabel='true'])"), "var-init");
          r.each(n, function (e, t) {
            var n = cc11001100_hook("n", new i(t), "var-init");
            "true" != n.ariaAttr("autolabel") && (n.ariaAttr("setlabel", !0), n.aria.label = cc11001100_hook("n.aria.label", n.aria.lastText, "assign"), n.ariaAttr("autolabel", "true"), n.removeAttr("aria-setlabel"));
          });
        }(e);
      }, 100), o.status && new i(e.body).find("[role='floatingwindow']").remove();
      r.isMobile() || m(e);
      (function (e) {
        var t = cc11001100_hook("t", new i("[aria-atomic='true']", e).find("*"), "var-init");
        r.each(t, function (e, t) {
          "-1" != t.getAttribute("tabindex") && t.setAttribute("tabindex", -1);
        }), v || (v = cc11001100_hook("v", !0, "assign"), new i(e).on("keydown", "[aria-atomic='true']", function (e) {
          if (13 == e.keyCode && 1 == this.nodeType) {
            var t = cc11001100_hook("t", new i(this).find("a,[role='a'],[role='button']"), "var-init");
            t.length > 0 && t.firstNode.click();
          }
        }));
      })(e), r.isMobile() && o.status && (m(e), setTimeout(function () {
        !function (e) {
          u.createElemStyle(function (e) {
            if (function (e) {
              return !(e.getAttribute("aria-fontsize") || [].indexOf.call(["contentTitle", "indexNotice", "contentTitle", "contentSmallText"], e.getAttribute("role")) > 0);
            }(e)) {
              var t = cc11001100_hook("t", u.RealSizePx(e.style.fontSize), "var-init");
              t > 0 && t <= 18 ? new i(e).addClass("setfont ariafontcontent") : t > 18 && t < 30 ? new i(e).addClass("setfont ariafonttitle") : t >= 30 && new i(e).addClass("setfont ariabigtitle");
            }
          }, null, e);
          var t = cc11001100_hook("t", ":not(.setfont):not([aria-fontsize]):not(.skipAutoFix)", "var-init");
          t += cc11001100_hook("t", ":not(.ariafontcontent):not(.ariafonttitle):not(.ariabigtitle):not(.aria)", "assign"), t += cc11001100_hook("t", ":not(script):not(style):not(meta):not(img):not(link):not(head)", "assign");
          var n = cc11001100_hook("n", "a:" + (t += cc11001100_hook("t", ":not([role='contentSmallText']):not([role='indexNotice']):not([role='contentTitle']):not([role='contentText'])", "assign")), "var-init");
          new i(e.body).find(n).length < 2e3 && (n = cc11001100_hook("n", "*" + t, "assign"));
          var o = cc11001100_hook("o", new i(e.body).find(n), "var-init");
          r.each(o, function (t, n) {
            try {
              var o = cc11001100_hook("o", new i(n, e), "var-init"),
                a = cc11001100_hook("a", r.getStyle(n), "var-init");
              a = cc11001100_hook("a", parseInt(a.fontSize, 10) / c.getDprScale(), "assign");
              var s = cc11001100_hook("s", "", "var-init");
              a <= 18 && (s = cc11001100_hook("s", "ariafontcontent", "assign")), a > 18 && a < 30 && (s = cc11001100_hook("s", "ariafonttitle", "assign")), o.aria && (o.aria.skipall || o.aria.skiptheme) ? (s = cc11001100_hook("s", "ariaskiptheme", "assign"), o.addClass("setfont " + s)) : o.addClass("setfont " + s);
            } catch (l) {}
          });
        }(e);
      }, 100));
      (function (e) {
        new i(e).find("[aria-skipall],[aria-skiptheme],[role='rotationchar'],[role='video']").addClass("ariaskiptheme"), new i(e).find("[aria-skipall],[aria-skiptheme],[role='rotationchar'],[role='video']").find("*").addClass("ariaskiptheme");
      })(e), function (e) {
        var t = cc11001100_hook("t", new i(e.body).find("a"), "var-init");
        t.length < 500 && r.each(t, function (e, t) {
          ("" == t.textContent || t.children.length > 1) && t.classList.add("ariaskiptheme");
        });
      }(e), function (e) {
        if (o.focusTheme) {
          var t = cc11001100_hook("t", "[aria-focustheme]", "var-init");
          o.focusTheme && (t += cc11001100_hook("t", "," + o.focusTheme, "assign"));
          var n = cc11001100_hook("n", new i(e.body).find(t), "var-init");
          n.removeClass("ariaskiptheme"), n.removeAttr("aria-skipall"), n.removeAttr("aria-skiptheme");
        }
      }(e), function (e) {
        new i(e).find("#ariamovedown").remove();
        var t = cc11001100_hook("t", new i(e.body).find("[aria-movedown]"), "var-init"),
          n = cc11001100_hook("n", [0], "var-init");
        r.each(t, function (e, t) {
          var r = cc11001100_hook("r", new i(t), "var-init"),
            o = cc11001100_hook("o", parseInt(r.css("top"), 10), "var-init");
          o && [].indexOf.call(n, o) < 0 && n.push(o), r.addClass("ariamovedown" + o);
        }), a.moveDown(n, e);
      }(e), function (e) {
        new i(e).find("#ariamoveup").remove();
        var t = cc11001100_hook("t", new i(e.body).find("[aria-moveup]"), "var-init"),
          n = cc11001100_hook("n", [0], "var-init");
        r.each(t, function (e, t) {
          var r = cc11001100_hook("r", new i(t), "var-init"),
            o = cc11001100_hook("o", parseInt(r.css("bottom"), 10), "var-init");
          o && [].indexOf.call(n, o) < 0 && n.push(o), r.addClass("ariamoveup" + o);
        }), a.moveUp(n, e);
      }(e), function (e) {
        new i(e.body).find("[accesskey]").removeAttr("accesskey");
      }(e), function (e) {
        var t = cc11001100_hook("t", new i(e.body).find("[role]:not([setedaria='true']):not(a):not(button):not(input)").nodeList, "var-init");
        r.each(t, function (e, t) {
          var n = cc11001100_hook("n", !1, "var-init"),
            o = cc11001100_hook("o", new i(t), "var-init");
          t.setAttribute("setedaria", "true"), o.isHidden() ? (b(o, -1), n = cc11001100_hook("n", !0, "assign")) : (!n && [].indexOf.call(r.HtmlElemRoles.foucsable0, o.aria.role) > -1 && (b(o, 0), n = cc11001100_hook("n", !0, "assign")), !n && [].indexOf.call(r.HtmlElemRoles.foucsable0, o.aria.nodeName) > -1 && (b(o, 0), n = cc11001100_hook("n", !0, "assign")));
        });
        var n = cc11001100_hook("n", new i(e.body).find("p:not([setedaria='true'])"), "var-init");
        r.each(n, function (t, n) {
          var o = cc11001100_hook("o", new i(n, e.body), "var-init");
          n.setAttribute("setedaria", "true");
          var a = cc11001100_hook("a", r.reMoveHtml(o.text()), "var-init");
          a && a.length > 0 && 0 != o.aria.tabindex && (o.aria.tabindex = cc11001100_hook("o.aria.tabindex", 0, "assign"));
        });
        var o = cc11001100_hook("o", new i(e.body).find("[aria-region='true']"), "var-init");
        r.each(o, function (e, t) {
          var n = cc11001100_hook("n", new i(t), "var-init");
          0 != n.aria.tabindex && (n.aria.tabindex = cc11001100_hook("n.aria.tabindex", 0, "assign"));
        });
        var a = cc11001100_hook("a", new i(e.body).find("[aria-hidden='true']"), "var-init");
        r.each(a, function (t, n) {
          var r = cc11001100_hook("r", new i(n, e.body), "var-init");
          -1 != r.aria.tabindex && (r.aria.tabindex = cc11001100_hook("r.aria.tabindex", -1, "assign"));
        });
      }(e);
    }(e), function (e) {
      var t = cc11001100_hook("t", new i("[aria-owns]", e), "var-init");
      r.each(t, function (t, n) {
        var r = cc11001100_hook("r", new i(n), "var-init"),
          a = cc11001100_hook("a", r.find(r.aria.owns), "var-init");
        0 == a.length && (a = cc11001100_hook("a", r.parent().find(r.aria.owns), "assign")), 0 == a.length && (a = cc11001100_hook("a", new i(r.aria.owns, e), "assign")), a.length > 0 && !r.ariaAttr("autoowns") && (r.aria.ownsfor = cc11001100_hook("r.aria.ownsfor", "[id='" + a.aria.id + "']", "assign"), r.ariaAttr("sourceowns", !0), o.status && (a.aria.tabindex = cc11001100_hook("a.aria.tabindex", 0, "assign")), a.aria.owns = cc11001100_hook("a.aria.owns", "[id='" + r.aria.id + "']", "assign"), a.ariaAttr("autoowns", !0), r.aria.haspopup && a.ariaAttr("popup", !0));
      });
    }(e), d.start(e), t = cc11001100_hook("t", new i("[aria-showtitle]:not([aria-showtitled])"), "assign"), r.each(t, function (e, t) {
      var n = cc11001100_hook("n", t.getAttribute("title"), "var-init");
      n && (t.innerHTML = cc11001100_hook("t.innerHTML", n, "assign"), t.setAttribute("aria-showtitled", "true"));
    }));
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "", "var-init");
    o.skipAutoFix && (t = cc11001100_hook("t", o.skipAutoFix + ",", "assign")), t += cc11001100_hook("t", "[role='rotationchar'],[role='logobox'],[role='searchbox'],[aria-fixedOldHidden=true],[role='indexNotice'],[data-settheme]", "assign"), new i(e.body).find(t).attr("aria-skipAutoFix", "true"), new i(e.body).find("[aria-skipAutoFix],[aria-skipAll]").addClass("skipAutoFix"), new i(e.body).find("[aria-skipAutoFix],[aria-skipAll]").find("*").addClass("skipAutoFix");
  }
  var v = cc11001100_hook("v", !1, "var-init");
  function b(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e.aria.tabindex || (e.aria.tabindex = cc11001100_hook("e.aria.tabindex", t, "assign"));
  }
  function y(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", e.selector, "var-init");
    if (n && !(r.isMobile() && e.prop && e.prop.unApplyInWap)) {
      var o = cc11001100_hook("o", new i(t.body).find(n), "var-init");
      if (!o.hasClass("setedaria") && o.length > 0) {
        if (e.customData) for (var a = cc11001100_hook("a", e.customData.split(","), "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < a.length; s++) {
          var l = cc11001100_hook("l", a[s].split(":"), "var-init");
          l.length > 1 && o.attr(l[0], l[1]);
        }
        e.focusable && (o.aria.focusable = cc11001100_hook("o.aria.focusable", 0, "assign")), e.hidden && (o.aria.focusable = cc11001100_hook("o.aria.focusable", -1, "assign")), e.role && (o.aria.role = cc11001100_hook("o.aria.role", e.role, "assign")), function (e, t) {
          for (var n in e.prop) if (("label" != n || "true" != t.ariaAttr("autolabel")) && e.prop[n]) {
            var r = cc11001100_hook("r", e.prop[n], "var-init");
            t.ariaAttr(n, r), "skipAll" == n && (t.addClass("ariaskip"), t.addClass("ariaskiptheme")), "skipTheme" == n && t.addClass("ariaskiptheme"), "fixedOldWidth" == n && t.addClass("fixedOldWidth" + r);
          }
        }(e, o);
        var c = cc11001100_hook("c", e.prop["expandShowMethod"], "var-init");
        r.isMobile() && c && "click" != c && o.off("click", w).on("click", w), e.prop && e.prop.dialogclose && o.find(e.prop.dialogclose).ariaAttr("action", "dialogclose");
      }
    }
  }
  function w(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.target.getAttribute("aria-expandShowMethod"), "var-init");
    r.triggerEvent(this, t), "mouseover" == t && r.triggerEvent(this, "mousemove");
  }
  e.exports = cc11001100_hook("e.exports", {
    start: cc11001100_hook("start", g, "object-key-init"),
    starAll: function (e) {
      return h.oldFixedStatus && p.start(), new Promise(function (e, t) {
        runReStart = cc11001100_hook("runReStart", !0, "assign"), s.init().then(function (t) {
          g(), l.getAll(document, function (e) {
            g(e);
          }), setTimeout(function () {
            a.initResize();
          }, 1e3), e();
        });
      });
    },
    end: function (e) {
      d.end(e), f.end(e), new i(e.body).find("[tabindex='0']").removeAttr("tabindex");
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", (n(2), n(40)), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    checkDialogShow: function () {
      var e,
        t = cc11001100_hook("t", new r(i.arrToSizzle(i.HtmlElemRoles.dialog)), "var-init");
      return i.each(t, function (t, n) {
        var i = cc11001100_hook("i", new r(n), "var-init");
        if (!i.isHidden()) return e = cc11001100_hook("e", i, "assign");
      }), e;
    },
    eventKeyCode: cc11001100_hook("eventKeyCode", o.eventKeyCode, "object-key-init"),
    checkKeyCode: cc11001100_hook("checkKeyCode", o.checkKeyCode, "object-key-init"),
    keyCodeSettings: cc11001100_hook("keyCodeSettings", o.keyCodeSettings, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(12), "var-init"),
    i = cc11001100_hook("i", n(30), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init");
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e || ((e = cc11001100_hook("e", {}, "assign")).appid = cc11001100_hook("(e = {}).appid", o.appid, "assign")), new Promise(function (t, n) {
      i.checkUpdateToken() ? i.getService().then(function () {
        i.get(r.api.config, {
          appid: cc11001100_hook("appid", e.appid, "object-key-init")
        }).then(function (e) {
          if (!e) throw "未正常获取到基础信息数据，请与服务端维护人员联系";
          o.data = cc11001100_hook("o.data", e, "assign"), o.init(e.settings), t(e);
        });
      }) : t(o.data);
    });
  }
  e.exports = cc11001100_hook("e.exports", {
    init: function (e) {
      return new Promise(function (t, n) {
        o.conf && o.conf.length > 30 && (o.conf = cc11001100_hook("o.conf", [], "assign"));
        var s = cc11001100_hook("s", o.conf || [], "var-init");
        s && "object" != typeof s && (s = cc11001100_hook("s", JSON.parse(s), "assign")), i.getService().then(function () {
          if (e && void 0 !== e || (e = cc11001100_hook("e", {}, "assign")), !o.appid && !e.appid) throw "请先设置Appid字段，请登录后台查看";
          if ("object" != typeof o && (o = cc11001100_hook("o", JSON.parse(o), "assign")), o.curpageConf) return t(o.conf);
          e.serviceUrl && (o.serviceUrl = cc11001100_hook("o.serviceUrl", e.serviceUrl, "assign")), e.appid && (o.appid = cc11001100_hook("o.appid", e.appid, "assign")), e.appid || (e.appid = cc11001100_hook("e.appid", o.appid, "assign")), e.beforeInit && "function" == typeof e.beforeInit && e.beforeInit(), a(e).then(function () {
            i.get(r.api.curconf).then(function (e) {
              null != e ? s.push({
                name: cc11001100_hook("name", window.location.href, "object-key-init"),
                value: cc11001100_hook("value", e, "object-key-init")
              }) : s.push({
                name: cc11001100_hook("name", window.location.href, "object-key-init"),
                value: {}
              }), o.conf = cc11001100_hook("o.conf", s, "assign"), t(e);
            });
          }, function (e) {});
        }, function (e) {});
      });
    },
    settings: cc11001100_hook("settings", o, "object-key-init"),
    checkJs: function () {
      i.checkUpdateToken() && o.clear();
      var e = cc11001100_hook("e", r.getAppid(), "var-init");
      return o.appid = cc11001100_hook("o.appid", e.appid, "assign"), o.road = cc11001100_hook("o.road", e.road, "assign"), e.callback && e.callback.lenght > 0 && (o.callback = cc11001100_hook("o.callback", e.callback, "assign")), e.success;
    },
    initConfig: cc11001100_hook("initConfig", a, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init");
  e.exports = cc11001100_hook("e.exports", function () {
    if (0 === arguments.length) return {};
    var e = cc11001100_hook("e", !1, "var-init"),
      t = cc11001100_hook("t", 1, "var-init"),
      n = cc11001100_hook("n", arguments[0], "var-init");
    for (1 === arguments.length && "object" == typeof arguments[0] ? (n = cc11001100_hook("n", this, "assign"), t = cc11001100_hook("t", 0, "assign")) : 2 === arguments.length && "boolean" == typeof arguments[0] ? (e = cc11001100_hook("e", arguments[0], "assign"), n = cc11001100_hook("n", this, "assign"), t = cc11001100_hook("t", 1, "assign")) : arguments.length > 2 && "boolean" == typeof arguments[0] && (e = cc11001100_hook("e", arguments[0], "assign"), n = cc11001100_hook("n", arguments[1] || {}, "assign"), t = cc11001100_hook("t", 2, "assign")); t < arguments.length; t++) i(arguments[t] || {}, n);
    function i(t, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e && "object" === r.type(t[o]) ? ("object" !== r.type(n[o]) && (n[o] = cc11001100_hook("n[o]", {}, "assign")), i(t[o], n[o])) : n[o] = cc11001100_hook("n[o]", t[o], "assign"));
    }
    return n;
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(100), "var-init"),
    a = cc11001100_hook("a", n(48), "var-init"),
    s = cc11001100_hook("s", n(103), "var-init");
  var l = cc11001100_hook("l", [], "var-init");
  function c(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return new Promise(function (r, l) {
      if (t) {
        t = cc11001100_hook("t", o.parseURL(t).href, "assign");
        var c = cc11001100_hook("c", "importcss" + a(t), "var-init"),
          u = cc11001100_hook("u", b("ariareader--importcss", e, c), "var-init");
        new i(e).find("[for='" + c + "']").length > 0 ? r(u) : "true" != n.getAttribute("isaria") && s.downloadCss(t).then(function (o) {
          o.value = cc11001100_hook("o.value", d(o.value, t), "assign"), u.textContent = cc11001100_hook("u.textContent", o.value, "assign"), 0 == new i(e).find(c).length && n.parentNode.insertBefore(u, n.previousSibling), r(u);
        }, r);
      } else r();
    });
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    try {
      if (e.type != CSSRule.IMPORT_RULE) return !1;
      e.styleSheet.cssRules, e.styleSheet.cssRules;
      return !1;
    } catch (t) {
      return !0;
    }
  }
  function d(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    t || (t = cc11001100_hook("t", location.href, "assign"));
    var n = cc11001100_hook("n", h(t), "var-init");
    return e = cc11001100_hook("e", g(e = cc11001100_hook("e", function (e) {
      return e.replace(v, "");
    }(e = cc11001100_hook("e", e.replace(m, ""), "assign")), "assign"), n), "assign");
  }
  var f = cc11001100_hook("f", /url\((('.+?')|(".+?")|([^\)]*?))\)/g, "var-init");
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.replace(/^url\((.*)\)$/, "$1").trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
  }
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", o.parseURL(e), "var-init");
    return t.origin + t.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1");
  }
  function g(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.replace(f, function (e) {
      var n = cc11001100_hook("n", p(e), "var-init");
      try {
        return 'url("' + o.getAbsoluteURL(t, n) + '")';
      } catch (r) {
        return e;
      }
    });
  }
  var m = cc11001100_hook("m", /\/\*[\s\S]*?\*\//g, "var-init");
  var v = cc11001100_hook("v", /@font-face\s*{[^}]*}/g, "var-init");
  function b(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var i = cc11001100_hook("i", t.querySelector("." + e), "var-init");
    return n && (i = cc11001100_hook("i", t.querySelector("[for='" + n + "']"), "assign")), i || ((i = cc11001100_hook("i", t.createElement("style"), "assign")).classList.add("ariareader"), i.classList.add(e), i.media = cc11001100_hook("i.media", "screen", "assign"), i.setAttribute("data-for", "result"), i.id = cc11001100_hook("i.id", r.genID(), "assign"), n && i.setAttribute("for", n), i.textContent = cc11001100_hook("i.textContent", "", "assign")), i;
  }
  e.exports = cc11001100_hook("e.exports", {
    initCorsCss: function (e) {
      return e || (e = cc11001100_hook("e", document, "assign")), new Promise(function (t, n) {
        for (var r = cc11001100_hook("r", [], "var-init"), f = cc11001100_hook("f", e.styleSheets, "var-init"), p = cc11001100_hook("p", 0, "var-init"); p < f.length; p++) {
          var g = cc11001100_hook("g", f[p], "var-init"),
            m = cc11001100_hook("m", g.ownerNode, "var-init");
          if (m) {
            var v = cc11001100_hook("v", m.href, "var-init"),
              y = cc11001100_hook("y", m.getAttribute("rel"), "var-init");
            if ((!y || "stylesheet" == y) && (v && (v = cc11001100_hook("v", o.parseURL(v).href, "assign")), v && [].indexOf.call(l, v) < 0 && "true" != m.getAttribute("isaria"))) try {
              g.cssRules;
            } catch (w) {
              l.push(v), r.push(s.downloadCss(v));
            }
          }
        }
        r.length > 0 ? Promise.all(r).then(function (n) {
          !function (e, t) {
            for (var n = cc11001100_hook("n", 0, "var-init"); n < t.styleSheets.length; n++) {
              var r = cc11001100_hook("r", t.styleSheets[n], "var-init");
              if (r.href) {
                var s = cc11001100_hook("s", o.parseURL(r.href).href, "var-init"),
                  l = cc11001100_hook("l", e.filter(function (e) {
                    return e.name == s;
                  }), "var-init");
                if (l.length > 0) {
                  var c = cc11001100_hook("c", l[0].value, "var-init");
                  if (c) {
                    var u = cc11001100_hook("u", "cors" + a(s), "var-init"),
                      f = cc11001100_hook("f", b("ariareader--cors", t, u), "var-init");
                    c = cc11001100_hook("c", d(c, s), "assign"), f.textContent = cc11001100_hook("f.textContent", c, "assign"), 0 == new i(t).find(u).length && (r.ownerNode.parentNode.insertBefore(f, r.ownerNode.nextSibling), r.ownerNode.getAttribute("media") && f.setAttribute("media", r.ownerNode.getAttribute("media")));
                  }
                }
              }
            }
          }(n, e), function (e) {
            return new Promise(function (t, n) {
              for (var r = cc11001100_hook("r", e.styleSheets, "var-init"), i = cc11001100_hook("i", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < r.length; a++) {
                var s,
                  d = cc11001100_hook("d", r[a], "var-init"),
                  f = cc11001100_hook("f", d.ownerNode.href, "var-init");
                f || (f = cc11001100_hook("f", location.href, "assign")), f = cc11001100_hook("f", h(f), "assign");
                try {
                  s = cc11001100_hook("s", d.cssRules, "assign");
                  for (var p = cc11001100_hook("p", 0, "var-init"); p < s.length; p++) {
                    var g = cc11001100_hook("g", s[p], "var-init");
                    if (g.href && u(g)) {
                      var m = cc11001100_hook("m", o.getAbsoluteURL(f, g.href), "var-init");
                      [].indexOf.call(l, m) < 0 && (l.push(m), i.push(c(e, m, d.ownerNode)));
                    }
                  }
                } catch (w) {}
              }
              i.length > 0 ? Promise.all(i).then(function (e) {
                t();
              }, t) : t();
            });
          }(e).then(function (e) {
            t();
          }, t);
        }) : t && t();
      });
    },
    replaceCSSImports: cc11001100_hook("replaceCSSImports", d, "object-key-init"),
    getImportCss: cc11001100_hook("getImportCss", c, "object-key-init"),
    getCSSURLValue: cc11001100_hook("getCSSURLValue", p, "object-key-init"),
    createOrUpdateStyleAria: function (e, t, n) {
      var i = cc11001100_hook("i", t.querySelector("." + e), "var-init");
      return n && (i = cc11001100_hook("i", t.querySelector("[for='" + n + "']"), "assign")), i || ((i = cc11001100_hook("i", t.createElement("style"), "assign")).classList.add("ariareader"), i.classList.add(e), i.media = cc11001100_hook("i.media", "screen", "assign"), i.id = cc11001100_hook("i.id", r.genID(), "assign"), i.setAttribute("data-for", "result"), i.setAttribute("isaria", "true"), n && i.setAttribute("for", n), i.textContent = cc11001100_hook("i.textContent", "", "assign")), i;
    },
    getCSSStyleSheetStyleById: function (e) {
      for (var t = cc11001100_hook("t", document.styleSheets, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
        var r = cc11001100_hook("r", t[n], "var-init");
        if (r.ownerNode.id == e) return r;
      }
    },
    replaceCSSRelativeURLsWithAbsolute: cc11001100_hook("replaceCSSRelativeURLsWithAbsolute", g, "object-key-init"),
    getCSSBaseBath: cc11001100_hook("getCSSBaseBath", h, "object-key-init"),
    getCssRule: function (e, t) {
      var n,
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", e.ownerNode, "var-init");
      if (!t && i.getAttribute("isaria")) return r;
      try {
        if (!(n = cc11001100_hook("n", e.cssRules, "assign"))) return r;
      } catch (l) {
        return r;
      }
      for (var o = cc11001100_hook("o", 0, "var-init"); o < n.length; o++) {
        var a = cc11001100_hook("a", n[o], "var-init");
        if (a.type != CSSRule.IMPORT_RULE) a.type != CSSRule.MEDIA_RULE && a.type != CSSRule.STYLE_RULE || r.push(a);else try {
          var s = cc11001100_hook("s", a.styleSheet.cssRules, "var-init");
          r = cc11001100_hook("r", r.concat(Array.prototype.slice.call(s, 0, s.length)), "assign");
        } catch (l) {}
      }
      return r;
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(3), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init"),
    a = cc11001100_hook("a", n(0), "var-init");
  function s() {
    var e = cc11001100_hook("e", "", "var-init");
    return "true" == document.body.getAttribute("aria-disOldFixed") ? "" : (o.pageDisOldFixed || (a.isMobile() && (o.status || o.wapForceOldFixed()) && (e += cc11001100_hook("e", "UseInMobile ", "assign")), (!a.isMobile() || a.isMobile() && o.useOldFixedInMobile) && (e += cc11001100_hook("e", "useOldFixed ", "assign"))), e);
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function () {
      if (!o.pageDisOldFixed) {
        if ("true" == document.body.getAttribute("aria-disOldFixed")) return "";
        if (o.status && o.useOldFixed || a.isMobile() && o.wapForceOldFixed() || "undefined" != typeof ariaDev) {
          o.oldFixedStatus = cc11001100_hook("o.oldFixedStatus", !0, "assign");
          var e = cc11001100_hook("e", s().trim(), "var-init");
          if (0 == e.length) return;
          new i(document.body).addClass(e), r.getAll(document, function (t) {
            try {
              new i(t.body).addClass(e);
            } catch (n) {}
          });
        }
      }
    },
    end: function () {
      o.oldFixedStatus = cc11001100_hook("o.oldFixedStatus", !1, "assign");
      for (var e = cc11001100_hook("e", s().split(" "), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) {
        var n = cc11001100_hook("n", e[t], "var-init");
        n.length > 0 && new i(document.body).removeClass(n);
      }
      a.appendCss(document, "golabFixedCss", ""), r.getAll(document, function (t) {
        a.appendCss(t, "golabFixedCss", "");
        for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
          var r = cc11001100_hook("r", e[n], "var-init");
          r.length > 0 && new i(t.body).removeClass(r);
        }
      });
    },
    setHasOldFixed: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), o.useOldFixed && (a.isMobile(), new i(e.body).addClass("hasOldFixed"));
    },
    removeOldfixed: function () {
      new i(document.body).removeClass("useOldFixed").removeClass("UseInMobile"), a.appendCss(document, "golabFixedCss", ""), r.getAll(document, function (e) {
        new i(e.body).removeClass("useOldFixed").removeClass("UseInMobile"), a.appendCss(e, "golabFixedCss", "");
      });
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(3), "var-init");
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.documentElement.clientWidth, "var-init");
    e.body.getAttribute("oldFont") || e.body.getAttribute("oldFont", e.body.style.fontSize), e.body.style.fontSize = cc11001100_hook("e.body.style.fontSize", t > 1399 ? "32px;" : t > 1024 ? "26px;" : t > 768 ? "22px;" : "18px;", "assign");
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function () {
      i(document), r.getAll(document, function (e) {
        i(e);
      });
    },
    end: function () {
      document.body.getAttribute("oldFont") && (document.body.style.fontSize = cc11001100_hook("document.body.style.fontSize", document.body.getAttribute("oldFont"), "assign"), document.body.removeAttribute("oldFont")), r.getAll(document, function (e) {
        e.body.style.fontSize = cc11001100_hook("e.body.style.fontSize", e.body.getAttribute("oldFont"), "assign"), e.body.removeAttribute("oldFont");
      });
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(4), "var-init");
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", {}, "var-init");
    switch (e) {
      case "black":
        t.brightness = cc11001100_hook("t.brightness", 60, "assign"), t.contrast = cc11001100_hook("t.contrast", 150, "assign"), t.grayscale = cc11001100_hook("t.grayscale", 0, "assign"), t.sepia = cc11001100_hook("t.sepia", 0, "assign"), t.mode = cc11001100_hook("t.mode", 1, "assign");
        break;
      case "default":
        t.brightness = cc11001100_hook("t.brightness", 100, "assign"), t.contrast = cc11001100_hook("t.contrast", 100, "assign"), t.grayscale = cc11001100_hook("t.grayscale", 0, "assign"), t.sepia = cc11001100_hook("t.sepia", 0, "assign"), t.mode = cc11001100_hook("t.mode", 1, "assign");
        break;
      case "hightbrightness":
        t.brightness = cc11001100_hook("t.brightness", 150, "assign"), t.contrast = cc11001100_hook("t.contrast", 150, "assign"), t.grayscale = cc11001100_hook("t.grayscale", 0, "assign"), t.sepia = cc11001100_hook("t.sepia", 0, "assign"), t.mode = cc11001100_hook("t.mode", 1, "assign");
        break;
      case "hightcontrast":
        t.brightness = cc11001100_hook("t.brightness", 100, "assign"), t.contrast = cc11001100_hook("t.contrast", 190, "assign"), t.grayscale = cc11001100_hook("t.grayscale", 0, "assign"), t.sepia = cc11001100_hook("t.sepia", 0, "assign"), t.mode = cc11001100_hook("t.mode", 1, "assign");
        break;
      case "softish":
        t.brightness = cc11001100_hook("t.brightness", 100, "assign"), t.contrast = cc11001100_hook("t.contrast", 70, "assign"), t.grayscale = cc11001100_hook("t.grayscale", 15, "assign"), t.sepia = cc11001100_hook("t.sepia", 25, "assign"), t.mode = cc11001100_hook("t.mode", 1, "assign");
        break;
      case "hightgrayscale":
        t.brightness = cc11001100_hook("t.brightness", 100, "assign"), t.contrast = cc11001100_hook("t.contrast", 120, "assign"), t.grayscale = cc11001100_hook("t.grayscale", 70, "assign"), t.sepia = cc11001100_hook("t.sepia", 20, "assign"), t.mode = cc11001100_hook("t.mode", 1, "assign");
    }
    return t;
  }
  e.exports = cc11001100_hook("e.exports", {
    createStandMode: cc11001100_hook("createStandMode", i, "object-key-init"),
    setMode: function (e) {
      if ("string" == typeof e && (e = cc11001100_hook("e", i(e), "assign")), e) return null == e.mode ? e.mode = cc11001100_hook("e.mode", r.mode(), "assign") : r.mode(e.mode), r.brightness(e.brightness), r.contrast(e.contrast), r.grayscale(e.grayscale), r.sepia(e.sepia), e;
    }
  }, "assign");
}, function (e, t) {
  var n;
  n = cc11001100_hook("n", function () {
    return this;
  }(), "assign");
  try {
    n = cc11001100_hook("n", n || new Function("return this")(), "assign");
  } catch (r) {
    "object" == typeof window && (n = cc11001100_hook("n", window, "assign"));
  }
  e.exports = cc11001100_hook("e.exports", n, "assign");
},,, function (e, t, n) {
  var r = cc11001100_hook("r", n(16), "var-init"),
    i = cc11001100_hook("i", n(14), "var-init"),
    o = cc11001100_hook("o", n(12), "var-init");
  function a() {
    var e = cc11001100_hook("e", i.get(o.keys.runtime.security), "var-init"),
      t = cc11001100_hook("t", i.get(o.keys.data.root), "var-init"),
      n = cc11001100_hook("n", i.get(o.keys.data.languages), "var-init");
    return void 0 === e || null == e || void 0 === t || null == t || void 0 === n || null == n || !e || !e.timestamp || e.timestamp < new Date().getTime() - 2592e6;
  }
  function s() {
    return new Promise(function (e, t) {
      var n = cc11001100_hook("n", i.get(o.keys.runtime.serviceUrl), "var-init"),
        a = cc11001100_hook("a", i.get(o.keys.road), "var-init");
      if (n) e();else {
        var s = cc11001100_hook("s", location.hostname, "var-init");
        r.get(a + "config.json?domain=" + s).then(function (t) {
          "object" != typeof t && (t = cc11001100_hook("t", JSON.parse(t), "assign")), t.url || (t.url = cc11001100_hook("t.url", location.protocol + "//" + location.host, "assign")), i.set(o.keys.runtime.serviceUrl, t.url), i.set(o.keys.runtime.fileUrl, t.fileUrl || t.url), i.set(o.keys.runtime.cssServerUrl, t.cssServerUrl || t.url), e();
        }, function (e) {});
      }
    });
  }
  function l() {
    return new Promise(function (e, t) {
      var n = cc11001100_hook("n", i.get(o.keys.runtime.security), "var-init");
      if (a()) {
        var r = cc11001100_hook("r", new Date().getTime(), "var-init"),
          s = cc11001100_hook("s", i.get(o.keys.runtime.appid), "var-init");
        o.api.security;
        i.set(o.keys.runtime.security, {
          timestamp: cc11001100_hook("timestamp", r, "object-key-init"),
          appid: cc11001100_hook("appid", s, "object-key-init"),
          domain: cc11001100_hook("domain", document.location.hostname, "object-key-init")
        }), e({
          timestamp: cc11001100_hook("timestamp", r, "object-key-init"),
          appid: cc11001100_hook("appid", s, "object-key-init"),
          domain: cc11001100_hook("domain", document.location.hostname, "object-key-init")
        });
      } else e(n);
    });
  }
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    return new Promise(function (t, n) {
      e || (e = cc11001100_hook("e", {}, "assign")), s().then(function () {
        l().then(function (n) {
          n.referer = cc11001100_hook("n.referer", encodeURIComponent(document.location.href), "assign"), e.type || (e.type = cc11001100_hook("e.type", "post", "assign")), e.data && "function" == typeof e.data && (e.success = cc11001100_hook("e.success", e.data, "assign"), e.data = cc11001100_hook("e.data", {}, "assign")), e.data = cc11001100_hook("e.data", Object.assign({}, e.data, n), "assign"), "undefined" != typeof mainversion && (e.data.mainversion = cc11001100_hook("e.data.mainversion", mainversion, "assign")), e.headers || (e.headers = cc11001100_hook("e.headers", [], "assign")), e.headers && "object" == typeof e.headers && (e.headers["Content-Type"] || e.headers.push({
            name: cc11001100_hook("name", "Content-Type", "object-key-init"),
            value: cc11001100_hook("value", "application/json", "object-key-init")
          })), e.headers.push({
            name: cc11001100_hook("name", "Accept-Language", "object-key-init"),
            value: cc11001100_hook("value", "zh-Hans", "object-key-init")
          }), e.error || (e.error = cc11001100_hook("e.error", function (e) {}, "assign"));
          e.success;
          e.success = cc11001100_hook("e.success", null, "assign"), r.ajax(e).then(function (n) {
            n || t(), e.xhrFields && "blob" == e.xhrFields.responseType ? t(n) : t(n.result);
          }, function (e, t) {});
        });
      });
    });
  }
  e.exports = cc11001100_hook("e.exports", {
    ajax: cc11001100_hook("ajax", c, "object-key-init"),
    get: function (e, t, n) {
      return c({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        data: cc11001100_hook("data", t, "object-key-init"),
        success: cc11001100_hook("success", n, "object-key-init")
      });
    },
    post: function (e, t, n) {
      return c({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", "POST", "object-key-init"),
        data: cc11001100_hook("data", t, "object-key-init"),
        success: cc11001100_hook("success", n, "object-key-init")
      });
    },
    checkUpdateToken: cc11001100_hook("checkUpdateToken", a, "object-key-init"),
    beforeSend: cc11001100_hook("beforeSend", l, "object-key-init"),
    getService: cc11001100_hook("getService", s, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(70), "var-init");
  function i() {}
  i.prototype.devareCookie = cc11001100_hook("i.prototype.devareCookie", function (e) {
    var t = cc11001100_hook("t", new Date(), "var-init");
    t.setTime(t.getTime() - 1e4), document.cookie = cc11001100_hook("document.cookie", e + "=v; expires=" + t.toGMTString() + ";path=/;domain=" + r.getDomain(), "assign");
  }, "assign"), i.prototype.setCookie = cc11001100_hook("i.prototype.setCookie", function (e, t) {
    this.devareCookie(e);
    var n = cc11001100_hook("n", new Date(), "var-init");
    n.setTime(n.getTime() + 864e5), r.isValidIP(document.domain) ? document.cookie = cc11001100_hook("document.cookie", e + "=" + t + "; expires=" + n.toGMTString() + ";path=/;", "assign") : document.cookie = cc11001100_hook("document.cookie", e + "=" + t + "; expires=" + n.toGMTString() + ";path=/;domain=" + r.getDomain(), "assign");
  }, "assign"), i.prototype.getCookie = cc11001100_hook("i.prototype.getCookie", function (e) {
    for (var t = cc11001100_hook("t", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
      var r = cc11001100_hook("r", t[n].split("="), "var-init");
      if (r[0] == e) return r[1];
    }
  }, "assign"), i.prototype.getCookies = cc11001100_hook("i.prototype.getCookies", function (e) {
    for (var t = cc11001100_hook("t", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
      if (t[n].split("=")[0] == e) return t[n].substring(t[n].indexOf("=") + 1);
    }
  }, "assign"), i.prototype.getAllCookie = cc11001100_hook("i.prototype.getAllCookie", function () {
    var e = cc11001100_hook("e", document.cookie.split("; "), "var-init");
    return arrcookie.length > 0 ? e : "";
  }, "assign");
  var o = cc11001100_hook("o", new i(), "var-init");
  e.exports = cc11001100_hook("e.exports", o, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(86), "var-init"),
    i = cc11001100_hook("i", n(92), "var-init"),
    o = cc11001100_hook("o", n(110), "var-init"),
    a = cc11001100_hook("a", n(116), "var-init"),
    s = cc11001100_hook("s", n(117), "var-init"),
    l = cc11001100_hook("l", n(118), "var-init"),
    c = cc11001100_hook("c", n(119), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), o.start(e), i.start(e), r.start(e), a.start(e), s.start(e), l.start(e), c.start();
    },
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), o.end(e), i.end(e), r.end(e), a.end(e), s.end(e), l.end(e), c.end();
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(19), "var-init"),
    a = cc11001100_hook("a", n(7), "var-init");
  function s(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", 0 == t ? -1 : 0, "var-init");
    e.attr("oldtabindex") || e.attr("oldtabindex", e.attr("tabindex") || "none"), e.attr("tabindex", t);
    var o = cc11001100_hook("o", e.find("[tabindex='" + r + "'],a,input,select"), "var-init");
    i.each(o, function (e, n) {
      n.getAttribute("oldtabindex") || n.setAttribute("oldtabindex", n.getAttribute("tabindex") || "none"), n.setAttribute("tabindex", t);
    }), e.find("[aria-hidden]").attr("tabindex", "-1");
  }
  function l(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", e.aria.owns, "var-init");
    if (n) {
      var i = cc11001100_hook("i", e.find(n), "var-init");
      if (0 == i.length && (i = cc11001100_hook("i", e.parent().find(n), "assign")), 0 == i.length && (i = cc11001100_hook("i", new r(n, a.viewDocument(t)), "assign")), new r("[id='" + e.attr("id") + "']", a.viewDocument(t)).length <= 1) i.attr("aria-ownsreal", "[id='" + e.attr("id") + "']");else {
        var o = cc11001100_hook("o", e.parent().cssPath(!0), "var-init");
        i.attr("aria-ownsreal", o + " [id='" + e.attr("id") + "']");
      }
    }
  }
  e.exports = cc11001100_hook("e.exports", {
    doEventEnter: function (e) {
      var t = cc11001100_hook("t", e.keyCode || e.which || e.charCode, "var-init"),
        n = cc11001100_hook("n", e.ctrlKey, "var-init"),
        c = cc11001100_hook("c", new r(e.target), "var-init");
      if (n && (l(c, e), 40 == t && ("1" == c.aria.enterownsmethod || 0 != (c = cc11001100_hook("c", c.closest("[aria-enterownsmethod]"), "assign")).length || c.firstNode == e.target))) {
        var u = cc11001100_hook("u", c.attr("aria-expandshowmethod"), "var-init");
        return i.triggerEvent(e.target, u), "mouseover" == u && i.triggerEvent(e.target, "mousemove"), setTimeout(function () {
          var t = cc11001100_hook("t", c.aria.owns, "var-init");
          if (t) {
            var n = cc11001100_hook("n", c.find(t), "var-init");
            if (0 == n.length && (n = cc11001100_hook("n", c.parent().find(t), "assign")), 0 == n.length && (n = cc11001100_hook("n", new r(t, a.viewDocument(e)), "assign")), n.length > 0) if (n.ariaAttr("owns") || o.start(), s(n, 0), n.isHidden() && (0 == n.closest(".ariaTabShow").length && new r(".ariaTabShow", a.viewDocument(e)).length > 0 && new r(".ariaTabShow", a.viewDocument(e)).removeClass("ariaTabShow"), n.addClass("ariaTabShow")), n.attr("aria-owns", "[id='" + c.attr("id") + "']"), n.attr("aria-popup", "true"), n.ariaAttr("label")) n.focus();else {
              var i = cc11001100_hook("i", a.realPlayElem(n), "var-init");
              if (i && i.length > 0) i.focus();else {
                var l = cc11001100_hook("l", n.find("a,input,select,[role='a']"), "var-init");
                l.length > 0 || (l = cc11001100_hook("l", n.find("li"), "assign")).length > 0 ? l[0].focus() : n.focus();
              }
            }
          }
        }, 500), !0;
      }
    },
    doEventESC: function (e) {
      if (27 == (e.keyCode || e.which || e.charCode)) {
        var t = cc11001100_hook("t", new r(e.target), "var-init"),
          n = cc11001100_hook("n", "true" == t.ariaAttr("popup") ? t : t.closest("[aria-popup]"), "var-init");
        if (0 != n.length) {
          s(n, -1);
          var o = cc11001100_hook("o", n.ariaAttr("ownsreal") || n.aria.owns, "var-init");
          if (!(n.length > 0 && o)) return !0;
          var l = cc11001100_hook("l", n.find(), "var-init");
          0 == l.length && (l = cc11001100_hook("l", n.parent().find(o), "assign")), 0 == l.length && (l = cc11001100_hook("l", new r(o, a.viewDocument(e)), "assign")), l.focus(), l.aria.eschide && (n.hide(), n.removeClass("ariaTabShow"));
          var c = cc11001100_hook("c", l.attr("aria-dialogclose"), "var-init");
          if (c) {
            var u = cc11001100_hook("u", l.find(c), "var-init");
            0 == u.length && (u = cc11001100_hook("u", l.parent().find(c), "assign")), 0 == u.length && (u = cc11001100_hook("u", new r(c, a.viewDocument(e)), "assign")), u.length > 0 && i.triggerEvent(u.firstNode, "click");
          }
        }
      }
    },
    foucseEvent: function (e) {},
    ResetRegTabindex: function (e) {
      var t = cc11001100_hook("t", e.attr("oldtabindex"), "var-init");
      t && ("none" == t ? e.removeAttr("tabindex") : e.attr("tabindex", t));
      var n = cc11001100_hook("n", e.find("a,input,select"), "var-init");
      i.each(n, function (e, n) {
        (t = cc11001100_hook("t", n.getAttribute("oldtabindex"), "assign")) && ("none" == t ? new r(n).removeAttr("tabindex") : n.setAttribute("tabindex", t));
      });
    },
    resetOwns: cc11001100_hook("resetOwns", l, "object-key-init"),
    checkPopupTab: function (e, t) {
      if (9 == (e.keyCode || e.which || e.charCode)) {
        var n = cc11001100_hook("n", new r(t), "var-init"),
          i = cc11001100_hook("i", "true" == n.ariaAttr("popup") ? n : n.closest("[aria-popup]"), "var-init");
        if (0 != i.length) {
          var o = cc11001100_hook("o", new r(e.target), "var-init");
          return 0 == ("true" == o.ariaAttr("popup") ? o : o.closest("[aria-popup]")).length && (i.focus(), !0);
        }
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", n(3), "var-init"),
    o = cc11001100_hook("o", n(1), "var-init"),
    a = cc11001100_hook("a", n(0), "var-init"),
    s = cc11001100_hook("s", n(8), "var-init");
  function l(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return t ? parseFloat(r / e).toFixed(5) : parseFloat(e / r).toFixed(5);
  }
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new o(e).find("[aria-forRotationchar]"), "var-init");
    a.each(t, function (e, t) {
      var n = cc11001100_hook("n", t.children[0], "var-init");
      t.parentNode.insertBefore(n, t), t.remove();
    });
  }
  e.exports = cc11001100_hook("e.exports", {
    dynamicRotationchar: function (e) {
      if (r.oldFixedStatus || a.isMobile()) {
        var t = cc11001100_hook("t", "", "var-init");
        new o(e.body).find("#autoRotationchar").html("");
        for (var n = cc11001100_hook("n", new o(e.body).find("[role='rotationchar']"), "var-init"), i = cc11001100_hook("i", s.prefix.useOldFixed(e), "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < n.length; c++) {
          var u = cc11001100_hook("u", new o(n.nodeList[c]), "var-init"),
            d = cc11001100_hook("d", u.parent(), "var-init"),
            f = cc11001100_hook("f", u.ariaAttr("owldots"), "var-init");
          f && (u.find(f).addClass("ariaowldtos"), u.find(f).find("*").addClass("ariaowldtos"));
          var p = cc11001100_hook("p", u.ariaAttr("id"), "var-init");
          p || (p = cc11001100_hook("p", a.genID(), "assign"), u.ariaAttr("id", p));
          var h = cc11001100_hook("h", u.ariaAttr("width"), "var-init"),
            g = cc11001100_hook("g", u.ariaAttr("height"), "var-init");
          g ? g += cc11001100_hook("g", "px", "assign") : g = cc11001100_hook("g", "auto", "assign");
          var m = cc11001100_hook("m", d.css("width"), "var-init");
          (m = cc11001100_hook("m", document.documentElement.clientWidth, "assign")) >= s.width100ScreenWidth && (m *= cc11001100_hook("m", .8, "assign")), m > 1400 && (m = cc11001100_hook("m", 1400, "assign")), m -= cc11001100_hook("m", parseInt(d.css("padding-left")) + parseInt(d.css("padding-right")), "assign");
          var v = cc11001100_hook("v", u.ariaAttr("owlTitle"), "var-init");
          if (h && parseInt(h, 10) > 0) {
            var b = cc11001100_hook("b", i + "  [aria-id='" + p + "']", "var-init");
            if (t += cc11001100_hook("t", b + "{", "assign"), t += cc11001100_hook("t", "-moz-transform:scale( " + l(h, !0, 0, m) + ");", "assign"), t += cc11001100_hook("t", "-moz-transform-origin:0 0;", "assign"), t += cc11001100_hook("t", " zoom: " + l(h, !0, 0, m) + ";", "assign"), t += cc11001100_hook("t", "width:" + h + "px;", "assign"), t += cc11001100_hook("t", "overflow:hidden;", "assign"), t += cc11001100_hook("t", "float:none !important;", "assign"), t += cc11001100_hook("t", "margin:10px 0 10px 0", "assign"), t += cc11001100_hook("t", "}", "assign"), v && (t += cc11001100_hook("t", b + " " + v, "assign"), t += cc11001100_hook("t", "{", "assign"), t += cc11001100_hook("t", "-moz-transform:scale( " + l(h, !1, 0, m) + ");", "assign"), t += cc11001100_hook("t", " zoom: " + l(h, !1, 0, m), "assign"), m > 760 ? (t += cc11001100_hook("t", ";font-size:36px;", "assign"), t += cc11001100_hook("t", "height:72px;", "assign"), t += cc11001100_hook("t", "line-height:72px;", "assign")) : (t += cc11001100_hook("t", ";font-size:18px;", "assign"), t += cc11001100_hook("t", "height:36px;", "assign"), t += cc11001100_hook("t", "line-height:36px;", "assign")), t += cc11001100_hook("t", "}", "assign")), f ? (t += cc11001100_hook("t", b + " " + f, "assign"), t += cc11001100_hook("t", "{", "assign"), t += cc11001100_hook("t", "-moz-transform:scale( " + l(h, !1, 0, m) + ");", "assign"), t += cc11001100_hook("t", " zoom: " + l(h, !1, 0, m), "assign"), t += cc11001100_hook("t", "}", "assign"), f = cc11001100_hook("f", ":not(" + f + ")", "assign")) : f = cc11001100_hook("f", "", "assign"), t += cc11001100_hook("t", b + "  img{width:" + h + "px !important;}", "assign"), a.isFF()) {
              var y = cc11001100_hook("y", l(h, !0, 0, m) * parseInt(window.getComputedStyle(u.firstNode)["height"], 10), "var-init");
              if ("true" != d.attr("aria-forRotationchar")) {
                var w = cc11001100_hook("w", document.createElement("div"), "var-init");
                w.setAttribute("aria-forRotationchar", "true"), w.style.height = cc11001100_hook("w.style.height", y + "px", "assign"), w.style.display = cc11001100_hook("w.style.display", "block", "assign"), w.style.position = cc11001100_hook("w.style.position", "relative", "assign"), u.firstNode.parentNode.insertBefore(w, u.firstNode), w.appendChild(u.firstNode);
              } else d.css("height", y);
            }
          }
        }
        a.appendCss(e, "autoRotationchar", t);
      }
    },
    end: cc11001100_hook("end", c, "object-key-init"),
    endAll: function () {
      c(document), i.getAll(document, function (e) {
        c(e);
      });
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(52), "var-init"),
    i = cc11001100_hook("i", n(54), "var-init"),
    o = cc11001100_hook("o", n(36), "var-init"),
    a = cc11001100_hook("a", n(38), "var-init"),
    s = cc11001100_hook("s", n(37), "var-init"),
    l = cc11001100_hook("l", n(0), "var-init");
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init"),
      n = cc11001100_hook("n", function (e) {
        var t, n;
        if (e.selectionColor && "auto" !== e.selectionColor) {
          var i = cc11001100_hook("i", (0, o.parse)(e.selectionColor), "var-init"),
            a = cc11001100_hook("a", (0, o.rgbToHSL)(i), "var-init");
          t = cc11001100_hook("t", e.selectionColor, "assign"), n = cc11001100_hook("n", a.l < .5 ? "#FFF" : "#000", "assign");
        } else t = cc11001100_hook("t", (0, r.modifyBackgroundColor)({
          r: cc11001100_hook("r", 0, "object-key-init"),
          g: cc11001100_hook("g", 96, "object-key-init"),
          b: cc11001100_hook("b", 212, "object-key-init")
        }, Object.assign(Object.assign({}, e), {
          grayscale: cc11001100_hook("grayscale", 0, "object-key-init")
        })), "assign"), n = cc11001100_hook("n", (0, r.modifyForegroundColor)({
          r: cc11001100_hook("r", 255, "object-key-init"),
          g: cc11001100_hook("g", 255, "object-key-init"),
          b: cc11001100_hook("b", 255, "object-key-init")
        }, Object.assign(Object.assign({}, e), {
          grayscale: cc11001100_hook("grayscale", 0, "object-key-init")
        })), "assign");
        return {
          backgroundColorSelection: cc11001100_hook("backgroundColorSelection", t, "object-key-init"),
          foregroundColorSelection: cc11001100_hook("foregroundColorSelection", n, "object-key-init")
        };
      }(e), "var-init"),
      i = cc11001100_hook("i", n.backgroundColorSelection, "var-init"),
      a = cc11001100_hook("a", n.foregroundColorSelection, "var-init");
    return ["::selection", "::-moz-selection"].forEach(function (e) {
      t.push(e + " { "), i && t.push("    background-color: " + i + " !important;"), a && t.push("    color: " + a + " !important; "), t.push("}");
    }), t.join("\n");
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      n,
      a,
      c,
      u,
      d,
      f = cc11001100_hook("f", [], "var-init");
    if (e.scrollbarColor && "auto" !== e.scrollbarColor) {
      var p = cc11001100_hook("p", (0, o.parse)(e.scrollbarColor), "var-init"),
        h = cc11001100_hook("h", (0, o.rgbToHSL)(p), "var-init"),
        g = cc11001100_hook("g", h.l > .5, "var-init"),
        m = function (e) {
          return Object.assign(Object.assign({}, h), {
            l: cc11001100_hook("l", (0, s.clamp)(h.l + e, 0, 1), "object-key-init")
          });
        },
        v = function (e) {
          return Object.assign(Object.assign({}, h), {
            l: cc11001100_hook("l", (0, s.clamp)(h.l - e, 0, 1), "object-key-init")
          });
        };
      t = cc11001100_hook("t", (0, o.hslToString)(v(.4)), "assign"), n = cc11001100_hook("n", (0, o.hslToString)(g ? v(.4) : m(.4)), "assign"), a = cc11001100_hook("a", (0, o.hslToString)(h), "assign"), c = cc11001100_hook("c", (0, o.hslToString)(m(.1)), "assign"), u = cc11001100_hook("u", (0, o.hslToString)(m(.2)), "assign");
    } else t = cc11001100_hook("t", (0, r.modifyBackgroundColor)({
      r: cc11001100_hook("r", 241, "object-key-init"),
      g: cc11001100_hook("g", 241, "object-key-init"),
      b: cc11001100_hook("b", 241, "object-key-init")
    }, e), "assign"), n = cc11001100_hook("n", (0, r.modifyForegroundColor)({
      r: cc11001100_hook("r", 96, "object-key-init"),
      g: cc11001100_hook("g", 96, "object-key-init"),
      b: cc11001100_hook("b", 96, "object-key-init")
    }, e), "assign"), a = cc11001100_hook("a", (0, r.modifyBackgroundColor)({
      r: cc11001100_hook("r", 176, "object-key-init"),
      g: cc11001100_hook("g", 176, "object-key-init"),
      b: cc11001100_hook("b", 176, "object-key-init")
    }, e), "assign"), c = cc11001100_hook("c", (0, r.modifyBackgroundColor)({
      r: cc11001100_hook("r", 144, "object-key-init"),
      g: cc11001100_hook("g", 144, "object-key-init"),
      b: cc11001100_hook("b", 144, "object-key-init")
    }, e), "assign"), u = cc11001100_hook("u", (0, r.modifyBackgroundColor)({
      r: cc11001100_hook("r", 96, "object-key-init"),
      g: cc11001100_hook("g", 96, "object-key-init"),
      b: cc11001100_hook("b", 96, "object-key-init")
    }, e), "assign"), d = cc11001100_hook("d", (0, r.modifyBackgroundColor)({
      r: cc11001100_hook("r", 255, "object-key-init"),
      g: cc11001100_hook("g", 255, "object-key-init"),
      b: cc11001100_hook("b", 255, "object-key-init")
    }, e), "assign");
    return f.push("::-webkit-scrollbar {"), t && f.push("    background-color: " + t + ";"), n && f.push("    color: " + n + ";"), l.isMobile() && f.push("    width: 5px !important;"), f.push("}"), a && (f.push("::-webkit-scrollbar-thumb {"), f.push("    background-color: " + a + ";"), f.push("}")), c && (f.push("::-webkit-scrollbar-thumb:hover {"), f.push("    background-color: " + c + ";"), f.push("}")), u && (f.push("::-webkit-scrollbar-thumb:active {"), f.push("    background-color: " + u + ";"), f.push("}")), d && (f.push("::-webkit-scrollbar-corner {"), f.push("    background-color: " + d + ";"), f.push("}")), i.isFirefox && (f.push("* {"), f.push("    scrollbar-color: " + a + " " + t + ";"), f.push("}")), f.join("\n");
  }
  e.exports = cc11001100_hook("e.exports", {
    getModifiedUserAgentStyle: function (e, t, n) {
      var i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", r.modifyBackgroundColor(e.backgroundColor || {
          r: cc11001100_hook("r", 255, "object-key-init"),
          g: cc11001100_hook("g", 255, "object-key-init"),
          b: cc11001100_hook("b", 255, "object-key-init")
        }, e), "var-init"),
        a = cc11001100_hook("a", r.modifyForegroundColor(e.color || {
          r: cc11001100_hook("r", 0, "object-key-init"),
          g: cc11001100_hook("g", 0, "object-key-init"),
          b: cc11001100_hook("b", 0, "object-key-init")
        }, e), "var-init");
      i.push("html,body{"), o && (i.push("background-color: " + o + " !important;"), i.push("background-image: none;")), a && i.push("color: " + a + ";"), i.push("}");
      var s = cc11001100_hook("s", "", "var-init");
      l.IsIos() && "file:" == document.location.protocol && (s = cc11001100_hook("s", " !important;", "assign"), i.push(" *:not(iframe):not(.skipAutoFix) {"), o && i.push("background-color: " + o + " " + s + ";"), a && i.push("color: " + a + " " + s + ";"), i.push("}")), i.push("input, textarea, select, button {    "), i.push("background-color: " + o + ";");
      var d = cc11001100_hook("d", r.modifyBorderColor({
        r: cc11001100_hook("r", 76, "object-key-init"),
        g: cc11001100_hook("g", 76, "object-key-init"),
        b: cc11001100_hook("b", 76, "object-key-init")
      }, e), "var-init");
      d && i.push("border-color: " + d + ";"), a && i.push("color: " + a + ";"), i.push("}");
      var f = cc11001100_hook("f", r.modifyForegroundColor(e.link || {
        r: cc11001100_hook("r", 0, "object-key-init"),
        g: cc11001100_hook("g", 64, "object-key-init"),
        b: cc11001100_hook("b", 255, "object-key-init")
      }, e), "var-init");
      a && (i.push("a {"), i.push("color: " + f + " ;"), i.push("}"));
      var p = cc11001100_hook("p", r.modifyBorderColor({
        r: cc11001100_hook("r", 128, "object-key-init"),
        g: cc11001100_hook("g", 128, "object-key-init"),
        b: cc11001100_hook("b", 128, "object-key-init")
      }, e), "var-init");
      p && (i.push("table {"), i.push("border-color: " + p + " ;"), i.push("}"));
      var h = cc11001100_hook("h", r.modifyForegroundColor({
        r: cc11001100_hook("r", 169, "object-key-init"),
        g: cc11001100_hook("g", 169, "object-key-init"),
        b: cc11001100_hook("b", 169, "object-key-init")
      }, e), "var-init");
      h && (i.push("::placeholder {"), i.push("color: " + h + " ;"), i.push("}")), i.push("input:-webkit-autofill,"), i.push("textarea:-webkit-autofill,"), i.push("select:-webkit-autofill {");
      var g = cc11001100_hook("g", r.modifyBackgroundColor({
        r: cc11001100_hook("r", 250, "object-key-init"),
        g: cc11001100_hook("g", 255, "object-key-init"),
        b: cc11001100_hook("b", 189, "object-key-init")
      }, e), "var-init");
      g && i.push("background-color: " + g + "  !important;");
      var m = cc11001100_hook("m", r.modifyForegroundColor({
        r: cc11001100_hook("r", 0, "object-key-init"),
        g: cc11001100_hook("g", 0, "object-key-init"),
        b: cc11001100_hook("b", 0, "object-key-init")
      }, e), "var-init");
      return m && (i.push("color: " + m + "  !important;"), i.push("}")), e.focus && e.focus.outline && (i.push(".ariafocus,:focus{ outline:" + e.focus.outline + " !important;"), l.IsIos() || i.push("transition: outline 250ms;"), i.push("}")), i.push(".ariaregion,[aria-regionActive]{"), e.region && e.region.backgroundColor && i.push("background-color: " + r.modifyBackgroundColor(e.region.backgroundColor || {
        r: cc11001100_hook("r", 255, "object-key-init"),
        g: cc11001100_hook("g", 255, "object-key-init"),
        b: cc11001100_hook("b", 255, "object-key-init")
      }, e) + "  ;"), e.region && e.region.color && i.push("color: " + r.modifyForegroundColor(e.region.link || {
        r: cc11001100_hook("r", 0, "object-key-init"),
        g: cc11001100_hook("g", 64, "object-key-init"),
        b: cc11001100_hook("b", 255, "object-key-init")
      }, e) + " ;"), e.region && e.region.outline && i.push("outline: " + e.region.outline + ";"), i.push("}"), e.scrollbarColor && i.push(u(e)), e.selectionColor && i.push(c(e)), i.join("\n");
    },
    getModifiedFallbackStyle: function (e, t) {
      var n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", location.hostname.endsWith("microsoft.com"), "var-init");
      return n.push("html, body, " + (t ? "body:not(iframe)" + (r ? ':not(div[style^="position:absolute;top:0;left:-"]' : "") : "body > :not(iframe)")), n.push("{"), n.push("    background-color: " + modifyBackgroundColor({
        r: cc11001100_hook("r", 255, "object-key-init"),
        g: cc11001100_hook("g", 255, "object-key-init"),
        b: cc11001100_hook("b", 255, "object-key-init")
      }, e) + " !important;"), n.push("    border-color: " + modifyBorderColor({
        r: cc11001100_hook("r", 64, "object-key-init"),
        g: cc11001100_hook("g", 64, "object-key-init"),
        b: cc11001100_hook("b", 64, "object-key-init")
      }, e) + " !important;"), n.push("    color: " + modifyForegroundColor({
        r: cc11001100_hook("r", 0, "object-key-init"),
        g: cc11001100_hook("g", 0, "object-key-init"),
        b: cc11001100_hook("b", 0, "object-key-init")
      }, e) + " !important;"), n.push("}"), n.join("\n");
    },
    getModifiedSelectionStyle: cc11001100_hook("getModifiedSelectionStyle", c, "object-key-init"),
    getModifiedScrollbarStyle: cc11001100_hook("getModifiedScrollbarStyle", u, "object-key-init"),
    getStyleColorValue: function (e) {
      var t = cc11001100_hook("t", e.value, "var-init"),
        n = cc11001100_hook("n", e.cssProp, "var-init"),
        i = cc11001100_hook("i", e.theme, "var-init");
      if (t && !(t.indexOf("initial") > -1)) {
        var o = cc11001100_hook("o", a.changeColorProperties[n], "var-init");
        if (!o) {
          if (n.indexOf("color") < 0) return;
          o = cc11001100_hook("o", n.indexOf("-bg-") > -1 || n.indexOf("background") > -1 || n.indexOf("theme-color") > -1 ? 1 : n.indexOf("border") > -1 ? 3 : 2, "assign");
        }
        if (!([].indexOf.call(a.skipValue, t) > -1 || t.indexOf("url") > -1)) return t.indexOf("linear-gradient") > -1 ? r.getGradientModifier(t, i) : (1 != o && 4 != o || (t = cc11001100_hook("t", r.modifyBackgroundColor(t, i), "assign")), 2 == o && (t = cc11001100_hook("t", r.modifyForegroundColor(t, i), "assign")), 3 == o && (t = cc11001100_hook("t", r.modifyBorderColor(t, i), "assign")), t);
      }
    },
    getCSSFilterValue: function (e) {
      if (!e) return e;
      if (!e.backgroundColor) return e;
      var t = cc11001100_hook("t", o.parse(e.backgroundColor), "var-init"),
        n = cc11001100_hook("n", o.getSRGBLightness(t.r, t.g, t.b), "var-init"),
        r = cc11001100_hook("r", o.rgbToHSL(t), "var-init"),
        i = cc11001100_hook("i", 100 * r.s, "var-init");
      i < 50 && (i = cc11001100_hook("i", 50, "assign"));
      var a = cc11001100_hook("a", [], "var-init");
      return a.push("invert(100%)"), a.push("hue-rotate(" + r.h + "deg)"), a.push("saturate(" + i.toFixed(2) + "%)"), 0 == n && (n = cc11001100_hook("n", 100, "assign")), n < 80 && (n = cc11001100_hook("n", 80, "assign")), a.push("brightness(" + n + "%)"), 0 == e.contrast && (e.contrast = cc11001100_hook("e.contrast", 100, "assign")), 100 !== e.contrast && a.push("contrast(" + e.contrast + "%)"), 0 !== e.sepia && a.push("sepia(" + e.sepia + "%)"), 0 === a.length ? null : a.join(" ");
    },
    getCssFilterValueForBg: function (e) {
      if (!e) return e;
      if (!e.backgroundColor) return e;
      var t = cc11001100_hook("t", o.parse(e.backgroundColor), "var-init"),
        n = cc11001100_hook("n", o.getSRGBLightness(t.r, t.g, t.b), "var-init"),
        r = cc11001100_hook("r", o.rgbToHSL(t), "var-init");
      return e.invert = cc11001100_hook("e.invert", 100 * (1 - r.s), "assign"), e.saturate = cc11001100_hook("e.saturate", 100 * r.s, "assign"), e.grayscale = cc11001100_hook("e.grayscale", 100 * n, "assign"), 0 == e.contrast && (e.contrast = cc11001100_hook("e.contrast", 100, "assign")), e;
    }
  }, "assign");
}, function (e, t) {
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.h, "var-init"),
      n = cc11001100_hook("n", e.s, "var-init"),
      r = cc11001100_hook("r", e.l, "var-init"),
      i = cc11001100_hook("i", e.a, "var-init"),
      o = cc11001100_hook("o", {}, "var-init");
    if (0 === n) {
      var a = cc11001100_hook("a", [r, r, r].map(function (e) {
        return Math.round(255 * e);
      }), "var-init");
      return o.r = cc11001100_hook("o.r", a[0], "assign"), o.g = cc11001100_hook("o.g", a[1], "assign"), o.b = cc11001100_hook("o.b", a[2], "assign"), o.a = cc11001100_hook("o.a", i, "assign"), o;
    }
    var s = cc11001100_hook("s", (1 - Math.abs(2 * r - 1)) * n, "var-init"),
      l = cc11001100_hook("l", s * (1 - Math.abs(t / 60 % 2 - 1)), "var-init"),
      c = cc11001100_hook("c", r - s / 2, "var-init");
    a = cc11001100_hook("a", (t < 60 ? [s, l, 0] : t < 120 ? [l, s, 0] : t < 180 ? [0, s, l] : t < 240 ? [0, l, s] : t < 300 ? [l, 0, s] : [s, 0, l]).map(function (e) {
      return Math.round(255 * (e + c));
    }), "assign");
    return o.r = cc11001100_hook("o.r", a[0], "assign"), o.g = cc11001100_hook("o.g", a[1], "assign"), o.b = cc11001100_hook("o.b", a[2], "assign"), o.a = cc11001100_hook("o.a", i, "assign"), o;
  }
  function r(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    t || (t = cc11001100_hook("t", 0, "assign"));
    var n = cc11001100_hook("n", e.toFixed(t), "var-init");
    if (0 === t) return n;
    var r = cc11001100_hook("r", n.indexOf("."), "var-init");
    if (r >= 0) {
      var i = cc11001100_hook("i", n.match(/0+$/), "var-init");
      if (i) return i.index === r + 1 ? n.substring(0, r) : n.substring(0, i.index);
    }
    return n;
  }
  var i = cc11001100_hook("i", /^rgba?\([^\(\)]+\)$/, "var-init"),
    o = cc11001100_hook("o", /^hsla?\([^\(\)]+\)$/, "var-init"),
    a = cc11001100_hook("a", /^#[0-9a-f]+$/i, "var-init");
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.indexOf(")") > 1 && (e = cc11001100_hook("e", e.substring(0, e.indexOf(")") + 1), "assign"));
    var t = cc11001100_hook("t", e.trim().toLowerCase(), "var-init");
    return t.match(i) ? function (e) {
      var t = cc11001100_hook("t", l(e, c, u), "var-init");
      t.length < 4 && t.push(1);
      return {
        r: cc11001100_hook("r", t[0], "object-key-init"),
        g: cc11001100_hook("g", t[1], "object-key-init"),
        b: cc11001100_hook("b", t[2], "object-key-init"),
        a: cc11001100_hook("a", t[3], "object-key-init")
      };
    }(t) : t.match(o) ? n(l(t, d, f)) : t.match(a) ? function (e) {
      var t = cc11001100_hook("t", e.substring(1), "var-init"),
        n = cc11001100_hook("n", [], "var-init");
      switch (t.length) {
        case 3:
        case 4:
          n = cc11001100_hook("n", [0, 1, 2].map(function (e) {
            return parseInt(t[e] + t[e], 16);
          }), "assign");
          var r = cc11001100_hook("r", 3 === t.length ? 1 : parseInt(t[3] + t[3], 16) / 255, "var-init");
          n.push(r);
          break;
        case 6:
        case 8:
          n = cc11001100_hook("n", [0, 2, 4].map(function (e) {
            return parseInt(t.substring(e, e + 2), 16);
          }), "assign");
          r = cc11001100_hook("r", 6 === t.length ? 1 : parseInt(t.substring(6, 8), 16) / 255, "assign");
          n.push(r);
      }
      var i = cc11001100_hook("i", {}, "var-init");
      return i.r = cc11001100_hook("i.r", n[0], "assign"), i.g = cc11001100_hook("i.g", n[1], "assign"), i.b = cc11001100_hook("i.b", n[2], "assign"), i.a = cc11001100_hook("i.a", n[3], "assign"), i;
    }(t) : h.has(t) ? function (e) {
      var t = cc11001100_hook("t", h.get(e), "var-init");
      return {
        r: cc11001100_hook("r", t >> 16 & 255, "object-key-init"),
        g: cc11001100_hook("g", t >> 8 & 255, "object-key-init"),
        b: cc11001100_hook("b", t >> 0 & 255, "object-key-init"),
        a: cc11001100_hook("a", 1, "object-key-init")
      };
    }(t) : g.has(t) ? function (e) {
      var t = cc11001100_hook("t", g.get(e), "var-init");
      return {
        r: cc11001100_hook("r", t >> 16 & 255, "object-key-init"),
        g: cc11001100_hook("g", t >> 8 & 255, "object-key-init"),
        b: cc11001100_hook("b", t >> 0 & 255, "object-key-init"),
        a: cc11001100_hook("a", 1, "object-key-init")
      };
    }(t) : "transparent" === e ? {
      r: cc11001100_hook("r", 0, "object-key-init"),
      g: cc11001100_hook("g", 0, "object-key-init"),
      b: cc11001100_hook("b", 0, "object-key-init"),
      a: cc11001100_hook("a", 0, "object-key-init")
    } : void 0;
  }
  function l(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", function (e) {
        var t = cc11001100_hook("t", [], "var-init"),
          n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", !1, "var-init"),
          i = cc11001100_hook("i", e.indexOf("("), "var-init");
        e = cc11001100_hook("e", e.substring(i + 1, e.indexOf(")")), "assign");
        for (var o = cc11001100_hook("o", 0, "var-init"); o < e.length; o++) {
          var a = cc11001100_hook("a", e[o], "var-init");
          a >= "0" && a <= "9" || "." === a || "+" === a || "-" === a ? r = cc11001100_hook("r", !0, "assign") : !r || " " !== a && "," !== a ? r || (n = cc11001100_hook("n", o + 1, "assign")) : (t.push(e.substring(n, o)), r = cc11001100_hook("r", !1, "assign"), n = cc11001100_hook("n", o + 1, "assign"));
        }
        return r && t.push(e.substring(n, e.length)), t;
      }(e), "var-init"),
      i = cc11001100_hook("i", Object.entries(n), "var-init");
    return r.map(function (e) {
      return e.trim();
    }).map(function (e, n) {
      var r,
        o = cc11001100_hook("o", i.find(function (t) {
          return e.endsWith(t);
        }), "var-init");
      return r = cc11001100_hook("r", o ? parseFloat(e.substring(0, e.length - o[0].length)) / o[1] * t[n] : parseFloat(e), "assign"), t[n] > 1 ? Math.round(r) : r;
    });
  }
  var c = cc11001100_hook("c", [255, 255, 255, 1], "var-init"),
    u = cc11001100_hook("u", {
      "%": cc11001100_hook("%", 100, "object-key-init")
    }, "var-init");
  var d = cc11001100_hook("d", [360, 1, 1, 1], "var-init"),
    f = cc11001100_hook("f", {
      "%": cc11001100_hook("%", 100, "object-key-init"),
      deg: cc11001100_hook("deg", 360, "object-key-init"),
      rad: cc11001100_hook("rad", 2 * Math.PI, "object-key-init"),
      turn: cc11001100_hook("turn", 1, "object-key-init")
    }, "var-init");
  var p = function (e) {
    return e >= "0" && e <= "9";
  };
  var h = cc11001100_hook("h", new Map(Object.entries({
      aliceblue: cc11001100_hook("aliceblue", 15792383, "object-key-init"),
      antiquewhite: cc11001100_hook("antiquewhite", 16444375, "object-key-init"),
      aqua: cc11001100_hook("aqua", 65535, "object-key-init"),
      aquamarine: cc11001100_hook("aquamarine", 8388564, "object-key-init"),
      azure: cc11001100_hook("azure", 15794175, "object-key-init"),
      beige: cc11001100_hook("beige", 16119260, "object-key-init"),
      bisque: cc11001100_hook("bisque", 16770244, "object-key-init"),
      black: cc11001100_hook("black", 0, "object-key-init"),
      blanchedalmond: cc11001100_hook("blanchedalmond", 16772045, "object-key-init"),
      blue: cc11001100_hook("blue", 255, "object-key-init"),
      blueviolet: cc11001100_hook("blueviolet", 9055202, "object-key-init"),
      brown: cc11001100_hook("brown", 10824234, "object-key-init"),
      burlywood: cc11001100_hook("burlywood", 14596231, "object-key-init"),
      cadetblue: cc11001100_hook("cadetblue", 6266528, "object-key-init"),
      chartreuse: cc11001100_hook("chartreuse", 8388352, "object-key-init"),
      chocolate: cc11001100_hook("chocolate", 13789470, "object-key-init"),
      coral: cc11001100_hook("coral", 16744272, "object-key-init"),
      cornflowerblue: cc11001100_hook("cornflowerblue", 6591981, "object-key-init"),
      cornsilk: cc11001100_hook("cornsilk", 16775388, "object-key-init"),
      crimson: cc11001100_hook("crimson", 14423100, "object-key-init"),
      cyan: cc11001100_hook("cyan", 65535, "object-key-init"),
      darkblue: cc11001100_hook("darkblue", 139, "object-key-init"),
      darkcyan: cc11001100_hook("darkcyan", 35723, "object-key-init"),
      darkgoldenrod: cc11001100_hook("darkgoldenrod", 12092939, "object-key-init"),
      darkgray: cc11001100_hook("darkgray", 11119017, "object-key-init"),
      darkgrey: cc11001100_hook("darkgrey", 11119017, "object-key-init"),
      darkgreen: cc11001100_hook("darkgreen", 25600, "object-key-init"),
      darkkhaki: cc11001100_hook("darkkhaki", 12433259, "object-key-init"),
      darkmagenta: cc11001100_hook("darkmagenta", 9109643, "object-key-init"),
      darkolivegreen: cc11001100_hook("darkolivegreen", 5597999, "object-key-init"),
      darkorange: cc11001100_hook("darkorange", 16747520, "object-key-init"),
      darkorchid: cc11001100_hook("darkorchid", 10040012, "object-key-init"),
      darkred: cc11001100_hook("darkred", 9109504, "object-key-init"),
      darksalmon: cc11001100_hook("darksalmon", 15308410, "object-key-init"),
      darkseagreen: cc11001100_hook("darkseagreen", 9419919, "object-key-init"),
      darkslateblue: cc11001100_hook("darkslateblue", 4734347, "object-key-init"),
      darkslategray: cc11001100_hook("darkslategray", 3100495, "object-key-init"),
      darkslategrey: cc11001100_hook("darkslategrey", 3100495, "object-key-init"),
      darkturquoise: cc11001100_hook("darkturquoise", 52945, "object-key-init"),
      darkviolet: cc11001100_hook("darkviolet", 9699539, "object-key-init"),
      deeppink: cc11001100_hook("deeppink", 16716947, "object-key-init"),
      deepskyblue: cc11001100_hook("deepskyblue", 49151, "object-key-init"),
      dimgray: cc11001100_hook("dimgray", 6908265, "object-key-init"),
      dimgrey: cc11001100_hook("dimgrey", 6908265, "object-key-init"),
      dodgerblue: cc11001100_hook("dodgerblue", 2003199, "object-key-init"),
      firebrick: cc11001100_hook("firebrick", 11674146, "object-key-init"),
      floralwhite: cc11001100_hook("floralwhite", 16775920, "object-key-init"),
      forestgreen: cc11001100_hook("forestgreen", 2263842, "object-key-init"),
      fuchsia: cc11001100_hook("fuchsia", 16711935, "object-key-init"),
      gainsboro: cc11001100_hook("gainsboro", 14474460, "object-key-init"),
      ghostwhite: cc11001100_hook("ghostwhite", 16316671, "object-key-init"),
      gold: cc11001100_hook("gold", 16766720, "object-key-init"),
      goldenrod: cc11001100_hook("goldenrod", 14329120, "object-key-init"),
      gray: cc11001100_hook("gray", 8421504, "object-key-init"),
      grey: cc11001100_hook("grey", 8421504, "object-key-init"),
      green: cc11001100_hook("green", 32768, "object-key-init"),
      greenyellow: cc11001100_hook("greenyellow", 11403055, "object-key-init"),
      honeydew: cc11001100_hook("honeydew", 15794160, "object-key-init"),
      hotpink: cc11001100_hook("hotpink", 16738740, "object-key-init"),
      indianred: cc11001100_hook("indianred", 13458524, "object-key-init"),
      indigo: cc11001100_hook("indigo", 4915330, "object-key-init"),
      ivory: cc11001100_hook("ivory", 16777200, "object-key-init"),
      khaki: cc11001100_hook("khaki", 15787660, "object-key-init"),
      lavender: cc11001100_hook("lavender", 15132410, "object-key-init"),
      lavenderblush: cc11001100_hook("lavenderblush", 16773365, "object-key-init"),
      lawngreen: cc11001100_hook("lawngreen", 8190976, "object-key-init"),
      lemonchiffon: cc11001100_hook("lemonchiffon", 16775885, "object-key-init"),
      lightblue: cc11001100_hook("lightblue", 11393254, "object-key-init"),
      lightcoral: cc11001100_hook("lightcoral", 15761536, "object-key-init"),
      lightcyan: cc11001100_hook("lightcyan", 14745599, "object-key-init"),
      lightgoldenrodyellow: cc11001100_hook("lightgoldenrodyellow", 16448210, "object-key-init"),
      lightgray: cc11001100_hook("lightgray", 13882323, "object-key-init"),
      lightgrey: cc11001100_hook("lightgrey", 13882323, "object-key-init"),
      lightgreen: cc11001100_hook("lightgreen", 9498256, "object-key-init"),
      lightpink: cc11001100_hook("lightpink", 16758465, "object-key-init"),
      lightsalmon: cc11001100_hook("lightsalmon", 16752762, "object-key-init"),
      lightseagreen: cc11001100_hook("lightseagreen", 2142890, "object-key-init"),
      lightskyblue: cc11001100_hook("lightskyblue", 8900346, "object-key-init"),
      lightslategray: cc11001100_hook("lightslategray", 7833753, "object-key-init"),
      lightslategrey: cc11001100_hook("lightslategrey", 7833753, "object-key-init"),
      lightsteelblue: cc11001100_hook("lightsteelblue", 11584734, "object-key-init"),
      lightyellow: cc11001100_hook("lightyellow", 16777184, "object-key-init"),
      lime: cc11001100_hook("lime", 65280, "object-key-init"),
      limegreen: cc11001100_hook("limegreen", 3329330, "object-key-init"),
      linen: cc11001100_hook("linen", 16445670, "object-key-init"),
      magenta: cc11001100_hook("magenta", 16711935, "object-key-init"),
      maroon: cc11001100_hook("maroon", 8388608, "object-key-init"),
      mediumaquamarine: cc11001100_hook("mediumaquamarine", 6737322, "object-key-init"),
      mediumblue: cc11001100_hook("mediumblue", 205, "object-key-init"),
      mediumorchid: cc11001100_hook("mediumorchid", 12211667, "object-key-init"),
      mediumpurple: cc11001100_hook("mediumpurple", 9662683, "object-key-init"),
      mediumseagreen: cc11001100_hook("mediumseagreen", 3978097, "object-key-init"),
      mediumslateblue: cc11001100_hook("mediumslateblue", 8087790, "object-key-init"),
      mediumspringgreen: cc11001100_hook("mediumspringgreen", 64154, "object-key-init"),
      mediumturquoise: cc11001100_hook("mediumturquoise", 4772300, "object-key-init"),
      mediumvioletred: cc11001100_hook("mediumvioletred", 13047173, "object-key-init"),
      midnightblue: cc11001100_hook("midnightblue", 1644912, "object-key-init"),
      mintcream: cc11001100_hook("mintcream", 16121850, "object-key-init"),
      mistyrose: cc11001100_hook("mistyrose", 16770273, "object-key-init"),
      moccasin: cc11001100_hook("moccasin", 16770229, "object-key-init"),
      navajowhite: cc11001100_hook("navajowhite", 16768685, "object-key-init"),
      navy: cc11001100_hook("navy", 128, "object-key-init"),
      oldlace: cc11001100_hook("oldlace", 16643558, "object-key-init"),
      olive: cc11001100_hook("olive", 8421376, "object-key-init"),
      olivedrab: cc11001100_hook("olivedrab", 7048739, "object-key-init"),
      orange: cc11001100_hook("orange", 16753920, "object-key-init"),
      orangered: cc11001100_hook("orangered", 16729344, "object-key-init"),
      orchid: cc11001100_hook("orchid", 14315734, "object-key-init"),
      palegoldenrod: cc11001100_hook("palegoldenrod", 15657130, "object-key-init"),
      palegreen: cc11001100_hook("palegreen", 10025880, "object-key-init"),
      paleturquoise: cc11001100_hook("paleturquoise", 11529966, "object-key-init"),
      palevioletred: cc11001100_hook("palevioletred", 14381203, "object-key-init"),
      papayawhip: cc11001100_hook("papayawhip", 16773077, "object-key-init"),
      peachpuff: cc11001100_hook("peachpuff", 16767673, "object-key-init"),
      peru: cc11001100_hook("peru", 13468991, "object-key-init"),
      pink: cc11001100_hook("pink", 16761035, "object-key-init"),
      plum: cc11001100_hook("plum", 14524637, "object-key-init"),
      powderblue: cc11001100_hook("powderblue", 11591910, "object-key-init"),
      purple: cc11001100_hook("purple", 8388736, "object-key-init"),
      rebeccapurple: cc11001100_hook("rebeccapurple", 6697881, "object-key-init"),
      red: cc11001100_hook("red", 16711680, "object-key-init"),
      rosybrown: cc11001100_hook("rosybrown", 12357519, "object-key-init"),
      royalblue: cc11001100_hook("royalblue", 4286945, "object-key-init"),
      saddlebrown: cc11001100_hook("saddlebrown", 9127187, "object-key-init"),
      salmon: cc11001100_hook("salmon", 16416882, "object-key-init"),
      sandybrown: cc11001100_hook("sandybrown", 16032864, "object-key-init"),
      seagreen: cc11001100_hook("seagreen", 3050327, "object-key-init"),
      seashell: cc11001100_hook("seashell", 16774638, "object-key-init"),
      sienna: cc11001100_hook("sienna", 10506797, "object-key-init"),
      silver: cc11001100_hook("silver", 12632256, "object-key-init"),
      skyblue: cc11001100_hook("skyblue", 8900331, "object-key-init"),
      slateblue: cc11001100_hook("slateblue", 6970061, "object-key-init"),
      slategray: cc11001100_hook("slategray", 7372944, "object-key-init"),
      slategrey: cc11001100_hook("slategrey", 7372944, "object-key-init"),
      snow: cc11001100_hook("snow", 16775930, "object-key-init"),
      springgreen: cc11001100_hook("springgreen", 65407, "object-key-init"),
      steelblue: cc11001100_hook("steelblue", 4620980, "object-key-init"),
      tan: cc11001100_hook("tan", 13808780, "object-key-init"),
      teal: cc11001100_hook("teal", 32896, "object-key-init"),
      thistle: cc11001100_hook("thistle", 14204888, "object-key-init"),
      tomato: cc11001100_hook("tomato", 16737095, "object-key-init"),
      turquoise: cc11001100_hook("turquoise", 4251856, "object-key-init"),
      violet: cc11001100_hook("violet", 15631086, "object-key-init"),
      wheat: cc11001100_hook("wheat", 16113331, "object-key-init"),
      white: cc11001100_hook("white", 16777215, "object-key-init"),
      whitesmoke: cc11001100_hook("whitesmoke", 16119285, "object-key-init"),
      yellow: cc11001100_hook("yellow", 16776960, "object-key-init"),
      yellowgreen: cc11001100_hook("yellowgreen", 10145074, "object-key-init")
    })), "var-init"),
    g = cc11001100_hook("g", new Map(Object.entries({
      ActiveBorder: cc11001100_hook("ActiveBorder", 3906044, "object-key-init"),
      ActiveCaption: cc11001100_hook("ActiveCaption", 0, "object-key-init"),
      AppWorkspace: cc11001100_hook("AppWorkspace", 11184810, "object-key-init"),
      Background: cc11001100_hook("Background", 6513614, "object-key-init"),
      ButtonFace: cc11001100_hook("ButtonFace", 16777215, "object-key-init"),
      ButtonHighlight: cc11001100_hook("ButtonHighlight", 15329769, "object-key-init"),
      ButtonShadow: cc11001100_hook("ButtonShadow", 10461343, "object-key-init"),
      ButtonText: cc11001100_hook("ButtonText", 0, "object-key-init"),
      CaptionText: cc11001100_hook("CaptionText", 0, "object-key-init"),
      GrayText: cc11001100_hook("GrayText", 8355711, "object-key-init"),
      Highlight: cc11001100_hook("Highlight", 11720703, "object-key-init"),
      HighlightText: cc11001100_hook("HighlightText", 0, "object-key-init"),
      InactiveBorder: cc11001100_hook("InactiveBorder", 16777215, "object-key-init"),
      InactiveCaption: cc11001100_hook("InactiveCaption", 16777215, "object-key-init"),
      InactiveCaptionText: cc11001100_hook("InactiveCaptionText", 0, "object-key-init"),
      InfoBackground: cc11001100_hook("InfoBackground", 16514245, "object-key-init"),
      InfoText: cc11001100_hook("InfoText", 0, "object-key-init"),
      Menu: cc11001100_hook("Menu", 16185078, "object-key-init"),
      MenuText: cc11001100_hook("MenuText", 16777215, "object-key-init"),
      Scrollbar: cc11001100_hook("Scrollbar", 11184810, "object-key-init"),
      ThreeDDarkShadow: cc11001100_hook("ThreeDDarkShadow", 0, "object-key-init"),
      ThreeDFace: cc11001100_hook("ThreeDFace", 12632256, "object-key-init"),
      ThreeDHighlight: cc11001100_hook("ThreeDHighlight", 16777215, "object-key-init"),
      ThreeDLightShadow: cc11001100_hook("ThreeDLightShadow", 16777215, "object-key-init"),
      ThreeDShadow: cc11001100_hook("ThreeDShadow", 0, "object-key-init"),
      Window: cc11001100_hook("Window", 15527148, "object-key-init"),
      WindowFrame: cc11001100_hook("WindowFrame", 11184810, "object-key-init"),
      WindowText: cc11001100_hook("WindowText", 0, "object-key-init"),
      "-webkit-focus-ring-color": cc11001100_hook("-webkit-focus-ring-color", 15046400, "object-key-init")
    }).map(function (e) {
      return [e[0].toLowerCase(), e[1]];
    })), "var-init");
  function m(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return (.2126 * e + .7152 * t + .0722 * n) / 255;
  }
  e.exports = cc11001100_hook("e.exports", {
    getSRGBLightness: cc11001100_hook("getSRGBLightness", m, "object-key-init"),
    systemColors: cc11001100_hook("systemColors", g, "object-key-init"),
    knownColors: cc11001100_hook("knownColors", h, "object-key-init"),
    lowerCalcExpression: function (e) {
      for (var t = cc11001100_hook("t", 0, "var-init"), n = function (t, n, r) {
          e = cc11001100_hook("e", e.substring(0, t) + r + e.substring(n), "assign");
        }, r = function () {
          for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", 1, "var-init"); r < 4; r++) {
            var i = cc11001100_hook("i", e[t + r], "var-init");
            if (" " === i) break;
            if (!p(i)) break;
            n *= cc11001100_hook("n", 10, "assign"), n += cc11001100_hook("n", Number(i), "assign");
          }
          var o,
            a = cc11001100_hook("a", (o = cc11001100_hook("o", n, "assign"), Math.floor(Math.log10(o)) + 1), "var-init");
          if ("%" === e[(t += cc11001100_hook("t", a, "assign")) + 1]) return t++, n;
        }; 0 !== (t = cc11001100_hook("t", e.indexOf("calc("), "assign"));) {
        var i = cc11001100_hook("i", t, "var-init");
        t += cc11001100_hook("t", 4, "assign");
        var o = cc11001100_hook("o", r(), "var-init");
        if (!o) break;
        if (" " !== e[t + 1]) break;
        t++;
        var a = cc11001100_hook("a", e[t + 1], "var-init");
        if ("+" !== a && "-" !== a) break;
        if (t++, " " !== e[t + 1]) break;
        t++;
        var s = cc11001100_hook("s", r(), "var-init");
        if (!s) break;
        n(i, t + 2, "+" === a ? o + s + "%" : o - s + "%");
      }
      return e;
    },
    parse: cc11001100_hook("parse", s, "object-key-init"),
    hslToString: function (e) {
      var t = cc11001100_hook("t", e.h, "var-init"),
        n = cc11001100_hook("n", e.s, "var-init"),
        i = cc11001100_hook("i", e.l, "var-init"),
        o = cc11001100_hook("o", e.a, "var-init");
      return null != o && o < 1 ? "hsla(" + r(t) + ", " + r(100 * n) + "%, " + r(100 * i) + "%, " + r(o, 2) + ")" : "hsl(" + r(t) + ", " + r(100 * n) + "%, " + r(100 * i) + "%)";
    },
    rgbToHexString: function (e) {
      return "#" + (null != e.a && e.a < 1 ? [e.r, e.g, e.b, Math.round(255 * e.a)] : [e.r, e.g, e.b]).map(function (e) {
        try {
          return e < 16 ? "00" : e.toString(16);
        } catch (t) {
          return "00";
        }
      }).join("");
    },
    rgbToHSL: function (e) {
      try {
        null == e.a && (e.a = cc11001100_hook("e.a", 1, "assign"));
      } catch (c) {
        return;
      }
      var t = cc11001100_hook("t", e.r / 255, "var-init"),
        n = cc11001100_hook("n", e.g / 255, "var-init"),
        r = cc11001100_hook("r", e.b / 255, "var-init"),
        i = cc11001100_hook("i", Math.max(t, n, r), "var-init"),
        o = cc11001100_hook("o", Math.min(t, n, r), "var-init"),
        a = cc11001100_hook("a", i - o, "var-init"),
        s = cc11001100_hook("s", (i + o) / 2, "var-init");
      if (0 === a) return {
        h: cc11001100_hook("h", 0, "object-key-init"),
        s: cc11001100_hook("s", 0, "object-key-init"),
        l: cc11001100_hook("l", s, "object-key-init"),
        a: cc11001100_hook("a", e.a, "object-key-init")
      };
      var l = cc11001100_hook("l", 60 * (i === t ? (n - r) / a % 6 : i === n ? (r - t) / a + 2 : (t - n) / a + 4), "var-init");
      return l < 0 && (l += cc11001100_hook("l", 360, "assign")), {
        h: cc11001100_hook("h", l, "object-key-init"),
        s: cc11001100_hook("s", a / (1 - Math.abs(2 * s - 1)), "object-key-init"),
        l: cc11001100_hook("l", s, "object-key-init"),
        a: cc11001100_hook("a", e.a, "object-key-init")
      };
    },
    hslToRGB: cc11001100_hook("hslToRGB", n, "object-key-init"),
    rgbToString: function (e) {
      return null != e.a && e.a < 1 ? "rgba(" + r(e.r) + ", " + r(e.g) + ", " + r(e.b) + ", " + r(e.a, 2) + ")" : "rgb(" + r(e.r) + ", " + r(e.g) + ", " + r(e.b) + ")";
    },
    getBGForOpacity: function (e) {
      var t = cc11001100_hook("t", s(e), "var-init");
      return 1 - m(t.r, t.g, t.b);
    }
  }, "assign");
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", {
    scale: function (e, t, n, r, i) {
      return (e - t) * (i - r) / (n - t) + r;
    },
    clamp: function (e, t, n) {
      return Math.min(n, Math.max(t, e));
    },
    multiplyMatrices: function (e, t) {
      for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < i; r++) {
        n[r] = cc11001100_hook("n[r]", [], "assign");
        for (var o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", t[0].length, "var-init"); o < a; o++) {
          for (var s = cc11001100_hook("s", 0, "var-init"), l = cc11001100_hook("l", 0, "var-init"), c = cc11001100_hook("c", e[0].length, "var-init"); l < c; l++) s += cc11001100_hook("s", e[r][l] * t[l][o], "assign");
          n[r][o] = cc11001100_hook("n[r][o]", s, "assign");
        }
      }
      return n;
    }
  }, "assign");
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", {
    changeColorProperties: {
      background: cc11001100_hook("background", 1, "object-key-init"),
      "border-color": cc11001100_hook("border-color", 3, "object-key-init"),
      "outline-color": cc11001100_hook("outline-color", 3, "object-key-init"),
      "background-color": cc11001100_hook("background-color", 1, "object-key-init"),
      "border-color": cc11001100_hook("border-color", 3, "object-key-init"),
      "border-bottom-color": cc11001100_hook("border-bottom-color", 3, "object-key-init"),
      "border-left-color": cc11001100_hook("border-left-color", 3, "object-key-init"),
      "border-right-color": cc11001100_hook("border-right-color", 3, "object-key-init"),
      "border-top-color": cc11001100_hook("border-top-color", 3, "object-key-init"),
      "box-shadow": cc11001100_hook("box-shadow", 4, "object-key-init"),
      color: cc11001100_hook("color", 2, "object-key-init"),
      fill: cc11001100_hook("fill", 1, "object-key-init"),
      stroke: cc11001100_hook("stroke", 1, "object-key-init"),
      "stop-color": cc11001100_hook("stop-color", 1, "object-key-init"),
      bgcolor: cc11001100_hook("bgcolor", 1, "object-key-init"),
      "background-image": cc11001100_hook("background-image", 100, "object-key-init"),
      "font-size": cc11001100_hook("font-size", 101, "object-key-init"),
      width: cc11001100_hook("width", 102, "object-key-init")
    },
    skipValue: cc11001100_hook("skipValue", ["inherit", "transparent", "initial", "currentcolor", "none", "unset", "invert"], "object-key-init"),
    overrides: {
      "background-color": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-bgcolor", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "background-color", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-bgcolor", "object-key-init")
      },
      background: {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-background", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "background", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-background", "object-key-init")
      },
      "background-image": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-bgimage", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "background-image", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-bgimage", "object-key-init")
      },
      "border-color": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-border", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "border-color", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-border", "object-key-init")
      },
      "border-bottom-color": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-border-bottom", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "border-bottom-color", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-border-bottom", "object-key-init")
      },
      "border-left-color": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-border-left", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "border-left-color", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-border-left", "object-key-init")
      },
      "border-right-color": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-border-right", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "border-right-color", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-border-right", "object-key-init")
      },
      "border-top-color": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-border-top", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "border-top-color", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-border-top", "object-key-init")
      },
      "box-shadow": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-boxshadow", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "box-shadow", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-boxshadow", "object-key-init")
      },
      color: {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-color", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "color", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-color", "object-key-init")
      },
      fill: {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-fill", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "fill", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-fill", "object-key-init")
      },
      stroke: {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-stroke", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "stroke", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-stroke", "object-key-init")
      },
      "outline-color": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-outline", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "outline-color", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-outline", "object-key-init")
      },
      "stop-color": {
        customProp: cc11001100_hook("customProp", "--ariareader-inline-stopcolor", "object-key-init"),
        cssProp: cc11001100_hook("cssProp", "stop-color", "object-key-init"),
        dataAttr: cc11001100_hook("dataAttr", "data-ariareader-inline-stopcolor", "object-key-init")
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(11), "var-init"),
    i = cc11001100_hook("i", n(4), "var-init"),
    o = cc11001100_hook("o", r.getAppid().appId, "var-init"),
    a = cc11001100_hook("a", n(30), "var-init"),
    s = cc11001100_hook("s", n(12), "var-init"),
    l = cc11001100_hook("l", n(2), "var-init"),
    c = cc11001100_hook("c", n(0), "var-init"),
    u = cc11001100_hook("u", n(1), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    checkLoadData: function () {
      return new Promise(function (e, t) {
        var n = cc11001100_hook("n", new u("#" + r.getScriptsId()).attr("loadData") || i.loadData(), "var-init");
        null == n || void 0 === n ? a.getService().then(function () {
          a.get(s.api.loadData, {
            appid: cc11001100_hook("appid", o, "object-key-init")
          }).then(function (t) {
            i.loadData(t), e(t);
          });
        }) : e(JSON.parse(n));
      });
    },
    showMobileOldFixedbtnDiv: function () {
      new Promise(function (e, t) {
        if (!c.isMobile()) return i.checkAutoFixedBtn(!1), void e(!1);
        var n = cc11001100_hook("n", i.checkAutoFixedBtn(), "var-init");
        if (null == n || void 0 === n) {
          if (document.getElementsByTagName("aria-autofixedbtn").length > 0) return i.checkAutoFixedBtn(!0), void e(!0);
          a.getService().then(function () {
            a.get(s.api.checkAutoFixedBtn, {
              appid: cc11001100_hook("appid", o, "object-key-init")
            }).then(function (t) {
              i.checkAutoFixedBtn(t), e(t);
            });
          });
        } else e(n);
      });
    },
    wapForceOldFixed: function () {
      var e = cc11001100_hook("e", l.appid, "var-init");
      return new Promise(function (t, n) {
        var o = cc11001100_hook("o", new u("#" + r.getScriptsId()).attr("wapForceOldFixed") || i.wapForceOldFixed(), "var-init");
        null == o || void 0 === o ? a.getService().then(function () {
          a.get(s.api.wapForceOldFixed, {
            appid: cc11001100_hook("appid", e, "object-key-init")
          }).then(function (e) {
            i.wapForceOldFixed(e), t(e);
          });
        }) : t(JSON.parse(o));
      });
    },
    loadMobileCss: function () {
      return new Promise(function (e, t) {
        var n = cc11001100_hook("n", l.newMobileCss() || l.mobileCss, "var-init");
        null != n && void 0 !== n && "" != n ? e(n) : a.getService().then(function () {
          a.get(s.api.loadMobileCss, {
            appid: cc11001100_hook("appid", o, "object-key-init")
          }).then(function (t) {
            l.newMobileCss(t), e(t);
          }, function () {
            l.newMobileCss("body{}"), e(data);
          });
        });
      });
    },
    loadPcCss: function () {
      return new Promise(function (e, t) {
        var n = cc11001100_hook("n", l.newPcCss() || l.oldFixedCss, "var-init");
        null != n && void 0 !== n && "" != n ? e(n) : a.getService().then(function () {
          a.get(s.api.loadPcCss, {
            appid: cc11001100_hook("appid", o, "object-key-init")
          }).then(function (t) {
            l.newPcCss(t), e(t);
          }, function () {
            l.newPcCss("body{}"), e(data);
          });
        });
      });
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(4), "var-init"),
    i = cc11001100_hook("i", n(11), "var-init"),
    o = cc11001100_hook("o", n(41), "var-init");
  i.keys().status;
  function a(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (!e || !t) return !1;
    t.keyCode || (t = cc11001100_hook("t", {
      keyCode: cc11001100_hook("keyCode", t, "object-key-init")
    }, "assign"));
    var n = cc11001100_hook("n", e.keyCode || e.which || e.charCode, "var-init");
    if (17 != n && 18 != n) {
      if ("undefined" == typeof t.status && (t.status = cc11001100_hook("t.status", !0, "assign")), t.status && !r.status()) return !1;
      if (n) {
        var i = cc11001100_hook("i", o.getDisableShortKeys(), "var-init");
        if (!(i.length > 0 && [].indexOf.call(i, n) > -1 || "number" == typeof t.keyCode && t.keyCode != n || "object" == typeof t.keyCode && [].indexOf.call(t.keyCode, n) < 0)) {
          var a = cc11001100_hook("a", e.ctrlKey, "var-init"),
            s = cc11001100_hook("s", e.shfitKey, "var-init"),
            l = cc11001100_hook("l", e.altKey, "var-init");
          return !(t.ctrlKey && !a) && !(t.shfitKey && !s) && !(t.altKey && !l);
        }
      }
    }
  }
  var s = cc11001100_hook("s", {
    wakeup: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !1, "object-key-init"),
      status: cc11001100_hook("status", !1, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 192, "object-key-init")
    },
    wakupConfig: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      status: cc11001100_hook("status", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 76, "object-key-init")
    },
    dialogClose: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !1, "object-key-init"),
      altKey: cc11001100_hook("altKey", !1, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 27, "object-key-init")
    },
    changeRegion: {
      next: {
        shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
        ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
        altKey: cc11001100_hook("altKey", !0, "object-key-init"),
        status: cc11001100_hook("status", !0, "object-key-init"),
        keyCode: cc11001100_hook("keyCode", [34, 40], "object-key-init")
      },
      pre: {
        shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
        ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
        altKey: cc11001100_hook("altKey", !0, "object-key-init"),
        status: cc11001100_hook("status", !0, "object-key-init"),
        keyCode: cc11001100_hook("keyCode", [33, 38], "object-key-init")
      }
    },
    opVoice: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      status: cc11001100_hook("status", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 86, "object-key-init")
    },
    vocierate: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      status: cc11001100_hook("status", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 75, "object-key-init")
    },
    mouseb: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 77, "object-key-init")
    },
    mouseten: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 78, "object-key-init")
    },
    reset: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 67, "object-key-init")
    },
    readsrc: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      status: cc11001100_hook("status", !1, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 82, "object-key-init")
    },
    bigsrc: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 66, "object-key-init")
    },
    readtype: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 70, "object-key-init")
    },
    exitservice: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 69, "object-key-init")
    },
    changeTheme: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 84, "object-key-init")
    },
    fontTob: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", [187, 107], "object-key-init")
    },
    fontTos: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", [189, 109], "object-key-init")
    },
    help: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 191, "object-key-init")
    },
    showImg: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !1, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", [57, 105], "object-key-init")
    },
    showQrcode: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !1, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", [48, 96], "object-key-init")
    },
    openOldFixed: {
      shiftKey: cc11001100_hook("shiftKey", !1, "object-key-init"),
      ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
      altKey: cc11001100_hook("altKey", !0, "object-key-init"),
      keyCode: cc11001100_hook("keyCode", 79, "object-key-init")
    }
  }, "var-init");
  e.exports = cc11001100_hook("e.exports", {
    eventKeyCode: function (e) {
      return e.keyCode || e.which || e.charCode;
    },
    checkKeyCode: cc11001100_hook("checkKeyCode", a, "object-key-init"),
    keyCodeSettings: cc11001100_hook("keyCodeSettings", s, "object-key-init"),
    toWakeUpRead: function (e) {
      var t = cc11001100_hook("t", e.altKey, "var-init"),
        n = cc11001100_hook("n", e.ctrlKey, "var-init"),
        r = cc11001100_hook("r", e.shfitKey, "var-init"),
        i = cc11001100_hook("i", e.keyCode || e.which || e.charCode, "var-init"),
        l = cc11001100_hook("l", o.getDisableShortKeys(), "var-init");
      if (!(l.length > 0 && [].indexOf.call(l, i) > -1)) {
        if (t && (i >= 48 && i <= 57 || i >= 96 && i <= 105)) {
          if (n || r) return;
          return !0;
        }
        return !!a(e, s.readsrc);
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(11), "var-init"),
    o = cc11001100_hook("o", {
      disableShortKeys: function (e) {
        window.disablShortKeys = cc11001100_hook("window.disablShortKeys", e, "assign");
      },
      getDisableShortKeys: function () {
        return window.disablShortKeys || [];
      },
      callbackStartbefore: function () {
        var e = cc11001100_hook("e", new r("#" + i.getScriptsId()).attr("callbackbefore"), "var-init");
        "function" == typeof e && e();
      },
      callbackStartLoaded: function () {
        var e = cc11001100_hook("e", new r("#" + i.getScriptsId()).attr("callback"), "var-init");
        "function" == typeof window[e] && window[e]();
      },
      callbackfixed: function () {
        var e = cc11001100_hook("e", new r("#" + i.getScriptsId()).attr("callbackfixed"), "var-init");
        "function" == typeof window[e] && window[e]();
      },
      callbackexit: function () {
        var e = cc11001100_hook("e", new r("#" + i.getScriptsId()).attr("callbackexit"), "var-init");
        "function" == typeof window[e] && window[e]();
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", o, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", n(17), "var-init"),
    o = cc11001100_hook("o", n(18), "var-init"),
    a = cc11001100_hook("a", (n(1), n(20)), "var-init"),
    s = cc11001100_hook("s", n(113), "var-init"),
    l = cc11001100_hook("l", n(40), "var-init"),
    c = cc11001100_hook("c", n(17), "var-init");
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (window.canRead = cc11001100_hook("window.canRead", !0, "assign"), !function (e) {
      if (e.keyCode || e.which || e.charCode, l.checkKeyCode(e, a.keyCodeSettings.wakeup)) return r.status ? c.execEvent(o.globalEnd) : c.execEvent(o.globalStart), !0;
      if (!r.status) {
        if (l.checkKeyCode(e, a.keyCodeSettings.openOldFixed)) return window[window.ariaSdkName].oldFixedStart(), !0;
        if (l.toWakeUpRead(e)) return r.voice.enable = cc11001100_hook("r.voice.enable", !1, "assign"), r.readsrc = cc11001100_hook("r.readsrc", !0, "assign"), c.execEvent(o.globalStart), !0;
      }
      return !1;
    }(e)) return i.execEvent(o.globalListen, e);
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      s.check() && (e || (e = cc11001100_hook("e", document, "assign")), document.addEventListener("keydown", u));
    },
    end: function () {
      document.removeEventListener("keydown", u);
    },
    keydown: cc11001100_hook("keydown", u, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(32), "var-init"),
    i = cc11001100_hook("i", n(123), "var-init"),
    o = cc11001100_hook("o", n(58), "var-init"),
    a = cc11001100_hook("a", n(2), "var-init"),
    s = cc11001100_hook("s", n(44), "var-init"),
    l = cc11001100_hook("l", (n(1), n(6)), "var-init"),
    c = cc11001100_hook("c", n(56), "var-init"),
    u = cc11001100_hook("u", n(125), "var-init"),
    d = cc11001100_hook("d", n(3), "var-init"),
    f = cc11001100_hook("f", n(42), "var-init"),
    p = cc11001100_hook("p", n(23), "var-init"),
    h = cc11001100_hook("h", n(59), "var-init"),
    g = cc11001100_hook("g", n(9), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    start: function m(e) {
      e || (e = cc11001100_hook("e", document, "assign")), p.initCorsCss(e).then(function (t) {
        if (i.start(e), r.end(e), r.start(e), o.start(e), g.doEventForce(e), s.start(e), a.mouseten && c.start(e), a.bigpoint && (l.setMouseb(e), l.seGolabFixedCss(e)), e == document && (h.doEvent(document, m), h.start(m), u.iframeMouse(e)), e != document) {
          if (!a.status) return;
          f.start(e);
        }
      });
    },
    end: function (e) {
      if (e || (e = cc11001100_hook("e", document, "assign")), i.end(e), r.end(e), o.end(e), s.end(e), a.mouseten && c.end(e), a.bigpoint && (l.setMouseb(e), l.seGolabFixedCss(e), e != document)) {
        if (!a.status) return;
        f.end(e);
      }
    },
    startBigMouse: function () {
      l.setMouseb(document), d.getAll(document, function (e) {
        l.setMouseb(e);
      });
    },
    endBigMouse: function () {
      l.removeMouseb(), d.getAll(document, function (e) {
        l.removeMouseb(e);
      });
    },
    startMouseTen: function () {
      c.start(), d.getAll(document, function (e) {
        c.start(e);
      });
    },
    endMouseTen: function () {
      c.end(), d.getAll(document, function (e) {
        c.end(e);
      });
    },
    setSettingTheme: function () {
      l.setSettingTheme(), d.getAll(document, function (e) {
        l.setSettingTheme(e);
      });
    }
  }, "assign");
}, function (e, t, n) {
  var r,
    i,
    o = cc11001100_hook("o", n(1), "var-init"),
    a = cc11001100_hook("a", n(20), "var-init"),
    s = cc11001100_hook("s", n(3), "var-init"),
    l = cc11001100_hook("l", ["aria-message", "aria-error", "aria-success"], "var-init"),
    c = cc11001100_hook("c", n(19), "var-init"),
    u = cc11001100_hook("u", (n(6), n(5)), "var-init"),
    d = cc11001100_hook("d", window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, "var-init"),
    f = cc11001100_hook("f", 1e3, "var-init"),
    p = cc11001100_hook("p", !1, "var-init");
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (void 0 !== e) {
      0, i = cc11001100_hook("i", "", "assign");
      var t = cc11001100_hook("t", a.checkDialogShow(), "var-init"),
        n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", new o(document.activeElement), "var-init");
      if (t && t.length > 0 && !r.aria.dialog) return document.activeElement.blur(), t.aria.tabindex = cc11001100_hook("t.aria.tabindex", 0, "assign"), void t.focus();
      for (var d = cc11001100_hook("d", [], "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < e.length; h++) {
        var b = cc11001100_hook("b", e[h], "var-init"),
          y = cc11001100_hook("y", b.type, "var-init"),
          w = cc11001100_hook("w", b.target, "var-init");
        switch (y) {
          case "childList":
            if (b.addedNodes && b.addedNodes.length > 0) for (var x = cc11001100_hook("x", 0, "var-init"); x < b.addedNodes.length; x++) {
              var S = cc11001100_hook("S", b.addedNodes[x], "var-init");
              new o(S).closest("#__vconsole").length > 0 || 1 == S.nodeType && [].indexOf.call(["SCRIPT", "I", "STYLE", "FONT", "TEXT"], S.nodeName) < 0 && d.push(b);
            }
            break;
          case "attributes":
            if ([].indexOf.call(l, b.attributeName) > -1) {
              var C = cc11001100_hook("C", new o(w).attr(b.attributeName), "var-init");
              C && [].indexOf.call(n, w) < 0 && (i += cc11001100_hook("i", undefined[b.attributeName] + C, "assign"));
            }
        }
      }
      d.length > 0 && !p && (p = cc11001100_hook("p", !0, "assign"), v(), g = cc11001100_hook("g", setTimeout(function () {
        c.starAll().then(function () {
          m(document), s.getAll(document, function (e) {
            m(e);
          });
        }), p = cc11001100_hook("p", !1, "assign"), clearTimeout(g);
      }, f), "assign")), i.length > 0 && u.play(i);
    }
  }
  var g = cc11001100_hook("g", null, "var-init");
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    e || (e = cc11001100_hook("e", document, "assign")), !r && d && (r = cc11001100_hook("r", new d(h), "assign")).observe(e, {
      childList: cc11001100_hook("childList", !0, "object-key-init"),
      subtree: cc11001100_hook("subtree", !0, "object-key-init"),
      attributes: cc11001100_hook("attributes", !1, "object-key-init")
    });
  }
  function v() {
    r && (r.disconnect(), r = cc11001100_hook("r", null, "assign"));
  }
  e.exports = cc11001100_hook("e.exports", {
    start: cc11001100_hook("start", m, "object-key-init"),
    end: cc11001100_hook("end", v, "object-key-init"),
    MutationObserver: cc11001100_hook("MutationObserver", d, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r,
    i = cc11001100_hook("i", n(6), "var-init"),
    o = cc11001100_hook("o", n(19), "var-init"),
    a = cc11001100_hook("a", n(2), "var-init"),
    s = cc11001100_hook("s", n(21), "var-init"),
    l = cc11001100_hook("l", n(24), "var-init"),
    c = cc11001100_hook("c", n(1), "var-init"),
    u = cc11001100_hook("u", !1, "var-init"),
    d = cc11001100_hook("d", n(5), "var-init"),
    f = cc11001100_hook("f", n(15), "var-init"),
    p = cc11001100_hook("p", n(3), "var-init"),
    h = cc11001100_hook("h", n(23), "var-init"),
    g = cc11001100_hook("g", n(60), "var-init"),
    m = cc11001100_hook("m", n(39), "var-init"),
    v = cc11001100_hook("v", n(41), "var-init"),
    b = cc11001100_hook("b", n(4), "var-init"),
    y = cc11001100_hook("y", n(62), "var-init"),
    w = cc11001100_hook("w", n(44), "var-init"),
    x = cc11001100_hook("x", n(131), "var-init"),
    S = cc11001100_hook("S", n(59), "var-init"),
    C = cc11001100_hook("C", n(58), "var-init");
  function k(e) {
    cc11001100_hook("e", e, "function-parameter");
    a.disabledInMobile || (l.setHasOldFixed(e), h.initCorsCss(e).then(function () {
      o.start(e), x.start(e), i.start(e);
    }));
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      a.disabledInMobile || top == self && (y.start(), w.start(), C.start(), f.checkViewport(), i.addariaiconstyle(), d.start(), u = cc11001100_hook("u", !0, "assign"), r || (clearInterval(r), r = cc11001100_hook("r", null, "assign")), l.start(), s.init().then(function () {
        o.starAll().then(function () {
          a.status = cc11001100_hook("a.status", !0, "assign"), x.start(document), h.initCorsCss().then(function () {
            i.start(document), v.callbackStartLoaded(), b.oldFixedStatus && v.callbackfixed();
          }), S.doEvent(document, k), S.start(k), 2 == a.readtype && a.voice.enable && d.play(new c("#ariaTipText"));
        });
      }));
    },
    end: function () {
      y.end(), w.end(), C.end();
      try {
        d.stop(), d.end();
      } catch (e) {}
      r || (clearInterval(r), r = cc11001100_hook("r", null, "assign"));
      try {
        g.mobileRemoveListener();
      } catch (e) {}
      g.ariaExitOldFixed();
      try {
        o.end();
      } catch (e) {}
      x.endAll(), a.status = cc11001100_hook("a.status", !1, "assign"), i.end(document), p.getAll(document, function (e) {
        i.end(e);
      });
    },
    getMobileStart: function () {
      return u;
    },
    noStart: function () {
      top == self && (a.disabledInMobile || m.wapForceOldFixed().then(function (e) {
        e ? s.initConfig().then(function () {
          a.disabledInMobile || (b.oldFixedStatus = cc11001100_hook("b.oldFixedStatus", !0, "assign"), w.start(), o.starAll().then(function () {
            a.wapForceOldFixed() && (f.checkViewport(), l.start(), i.start()), a.useAutoFixedBtn && g.createStartButton();
          }));
        }) : m.checkLoadData().then(function (e) {
          e && s.initConfig().then(function () {
            w.start(), o.starAll().then(function () {});
          });
        });
      }));
    },
    IframeStart: cc11001100_hook("IframeStart", k, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", {
      css: function (e, t) {
        var n = cc11001100_hook("n", this, "var-init");
        if (0 != n.length) {
          var i = cc11001100_hook("i", ["width", "height", "min-width", "max-width", "min-height", "min-height", "top", "left", "right", "bottom", "padding-top", "padding-right", "padding-bottom", "padding-left", "font-size", "margin-top", "margin-right", "margin-bottom", "margin-left", "border-width", "border-top-width", "border-left-width", "border-right-width", "border-bottom-width"], "var-init");
          if ("string" === r.type(e) && !t && 0 !== t) return -1 !== i.indexOf(e) ? parseInt(r.getStyle(this.firstNode, e), 10) : r.getStyle(this.firstNode, e);
          if ("object" === r.type(e)) {
            var o = cc11001100_hook("o", e, "var-init");
            for (var a in o) s(a, o[a]);
          } else s(e, t);
          return this;
        }
        function s(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          e = cc11001100_hook("e", e.replace(/[A-Z]/g, function (e) {
            return "-" + e.toLowerCase();
          }), "assign"), "number" === r.type(t) && (t = cc11001100_hook("t", t.toString() + "px", "assign")), -1 !== i.indexOf(e) && -1 === t.indexOf("px") && -1 === t.indexOf("%") && (t += cc11001100_hook("t", "px", "assign")), r.each(n.nodeList, function (n, r) {
            try {
              r.style[e] = cc11001100_hook("r.style[e]", t, "assign");
            } catch (i) {}
          });
        }
      },
      width: function (e) {
        return this.css("width", e);
      },
      height: function (e) {
        return this.css("height", e);
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", i, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(2), "var-init"),
    o = cc11001100_hook("o", n(3), "var-init"),
    a = cc11001100_hook("a", n(33), "var-init");
  function s(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", new r(e.body).find("[aria-region='true']"), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) {
      var o = cc11001100_hook("o", new r(n[i]), "var-init"),
        a = cc11001100_hook("a", o.ariaAttr("regiontype"), "var-init");
      null == t[a] && (t[a] = cc11001100_hook("t[a]", [], "assign")), t[a].push(o);
    }
    return t;
  }
  function l() {
    var e = cc11001100_hook("e", {}, "var-init");
    return i.disabledRegion || (e = cc11001100_hook("e", s(document, e), "assign"), o.getAll(document, function (t, n) {
      e = cc11001100_hook("e", s(t, e), "assign");
    })), e;
  }
  e.exports = cc11001100_hook("e.exports", {
    getAll: cc11001100_hook("getAll", l, "object-key-init"),
    changeRegion: function (e) {
      var t,
        n = cc11001100_hook("n", l()[e], "var-init");
      if (null == n || 0 == n.length) return !1;
      for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) {
        var o = cc11001100_hook("o", n[i], "var-init");
        if (o.hasClass("currentRegion" + e)) {
          r = cc11001100_hook("r", i == n.length - 1 ? 0 : i + 1, "assign"), o.blur(), t = cc11001100_hook("t", n[r], "assign"), o.removeClass("currentRegion" + e), a.ResetRegTabindex(t);
          break;
        }
      }
      return void 0 === t && (t = cc11001100_hook("t", n[0], "assign")), t.addClass("currentRegion" + e), t;
    }
  }, "assign");
}, function (e, t, n) {
  var r, i, o, a, s;
  r = cc11001100_hook("r", n(101), "assign"), i = cc11001100_hook("i", n(51).utf8, "assign"), o = cc11001100_hook("o", n(102), "assign"), a = cc11001100_hook("a", n(51).bin, "assign"), (s = cc11001100_hook("s", function (e, t) {
    e.constructor == String ? e = cc11001100_hook("e", t && "binary" === t.encoding ? a.stringToBytes(e) : i.stringToBytes(e), "assign") : o(e) ? e = cc11001100_hook("e", Array.prototype.slice.call(e, 0), "assign") : Array.isArray(e) || e.constructor === Uint8Array || (e = cc11001100_hook("e", e.toString(), "assign"));
    for (var n = cc11001100_hook("n", r.bytesToWords(e), "var-init"), l = cc11001100_hook("l", 8 * e.length, "var-init"), c = cc11001100_hook("c", 1732584193, "var-init"), u = cc11001100_hook("u", -271733879, "var-init"), d = cc11001100_hook("d", -1732584194, "var-init"), f = cc11001100_hook("f", 271733878, "var-init"), p = cc11001100_hook("p", 0, "var-init"); p < n.length; p++) n[p] = cc11001100_hook("n[p]", 16711935 & (n[p] << 8 | n[p] >>> 24) | 4278255360 & (n[p] << 24 | n[p] >>> 8), "assign");
    n[l >>> 5] |= cc11001100_hook("n[l >>> 5]", 128 << l % 32, "assign"), n[14 + (l + 64 >>> 9 << 4)] = cc11001100_hook("n[14 + (l + 64 >>> 9 << 4)]", l, "assign");
    var h = cc11001100_hook("h", s._ff, "var-init"),
      g = cc11001100_hook("g", s._gg, "var-init"),
      m = cc11001100_hook("m", s._hh, "var-init"),
      v = cc11001100_hook("v", s._ii, "var-init");
    for (p = cc11001100_hook("p", 0, "assign"); p < n.length; p += cc11001100_hook("p", 16, "assign")) {
      var b = cc11001100_hook("b", c, "var-init"),
        y = cc11001100_hook("y", u, "var-init"),
        w = cc11001100_hook("w", d, "var-init"),
        x = cc11001100_hook("x", f, "var-init");
      c = cc11001100_hook("c", h(c, u, d, f, n[p + 0], 7, -680876936), "assign"), f = cc11001100_hook("f", h(f, c, u, d, n[p + 1], 12, -389564586), "assign"), d = cc11001100_hook("d", h(d, f, c, u, n[p + 2], 17, 606105819), "assign"), u = cc11001100_hook("u", h(u, d, f, c, n[p + 3], 22, -1044525330), "assign"), c = cc11001100_hook("c", h(c, u, d, f, n[p + 4], 7, -176418897), "assign"), f = cc11001100_hook("f", h(f, c, u, d, n[p + 5], 12, 1200080426), "assign"), d = cc11001100_hook("d", h(d, f, c, u, n[p + 6], 17, -1473231341), "assign"), u = cc11001100_hook("u", h(u, d, f, c, n[p + 7], 22, -45705983), "assign"), c = cc11001100_hook("c", h(c, u, d, f, n[p + 8], 7, 1770035416), "assign"), f = cc11001100_hook("f", h(f, c, u, d, n[p + 9], 12, -1958414417), "assign"), d = cc11001100_hook("d", h(d, f, c, u, n[p + 10], 17, -42063), "assign"), u = cc11001100_hook("u", h(u, d, f, c, n[p + 11], 22, -1990404162), "assign"), c = cc11001100_hook("c", h(c, u, d, f, n[p + 12], 7, 1804603682), "assign"), f = cc11001100_hook("f", h(f, c, u, d, n[p + 13], 12, -40341101), "assign"), d = cc11001100_hook("d", h(d, f, c, u, n[p + 14], 17, -1502002290), "assign"), c = cc11001100_hook("c", g(c, u = cc11001100_hook("u", h(u, d, f, c, n[p + 15], 22, 1236535329), "assign"), d, f, n[p + 1], 5, -165796510), "assign"), f = cc11001100_hook("f", g(f, c, u, d, n[p + 6], 9, -1069501632), "assign"), d = cc11001100_hook("d", g(d, f, c, u, n[p + 11], 14, 643717713), "assign"), u = cc11001100_hook("u", g(u, d, f, c, n[p + 0], 20, -373897302), "assign"), c = cc11001100_hook("c", g(c, u, d, f, n[p + 5], 5, -701558691), "assign"), f = cc11001100_hook("f", g(f, c, u, d, n[p + 10], 9, 38016083), "assign"), d = cc11001100_hook("d", g(d, f, c, u, n[p + 15], 14, -660478335), "assign"), u = cc11001100_hook("u", g(u, d, f, c, n[p + 4], 20, -405537848), "assign"), c = cc11001100_hook("c", g(c, u, d, f, n[p + 9], 5, 568446438), "assign"), f = cc11001100_hook("f", g(f, c, u, d, n[p + 14], 9, -1019803690), "assign"), d = cc11001100_hook("d", g(d, f, c, u, n[p + 3], 14, -187363961), "assign"), u = cc11001100_hook("u", g(u, d, f, c, n[p + 8], 20, 1163531501), "assign"), c = cc11001100_hook("c", g(c, u, d, f, n[p + 13], 5, -1444681467), "assign"), f = cc11001100_hook("f", g(f, c, u, d, n[p + 2], 9, -51403784), "assign"), d = cc11001100_hook("d", g(d, f, c, u, n[p + 7], 14, 1735328473), "assign"), c = cc11001100_hook("c", m(c, u = cc11001100_hook("u", g(u, d, f, c, n[p + 12], 20, -1926607734), "assign"), d, f, n[p + 5], 4, -378558), "assign"), f = cc11001100_hook("f", m(f, c, u, d, n[p + 8], 11, -2022574463), "assign"), d = cc11001100_hook("d", m(d, f, c, u, n[p + 11], 16, 1839030562), "assign"), u = cc11001100_hook("u", m(u, d, f, c, n[p + 14], 23, -35309556), "assign"), c = cc11001100_hook("c", m(c, u, d, f, n[p + 1], 4, -1530992060), "assign"), f = cc11001100_hook("f", m(f, c, u, d, n[p + 4], 11, 1272893353), "assign"), d = cc11001100_hook("d", m(d, f, c, u, n[p + 7], 16, -155497632), "assign"), u = cc11001100_hook("u", m(u, d, f, c, n[p + 10], 23, -1094730640), "assign"), c = cc11001100_hook("c", m(c, u, d, f, n[p + 13], 4, 681279174), "assign"), f = cc11001100_hook("f", m(f, c, u, d, n[p + 0], 11, -358537222), "assign"), d = cc11001100_hook("d", m(d, f, c, u, n[p + 3], 16, -722521979), "assign"), u = cc11001100_hook("u", m(u, d, f, c, n[p + 6], 23, 76029189), "assign"), c = cc11001100_hook("c", m(c, u, d, f, n[p + 9], 4, -640364487), "assign"), f = cc11001100_hook("f", m(f, c, u, d, n[p + 12], 11, -421815835), "assign"), d = cc11001100_hook("d", m(d, f, c, u, n[p + 15], 16, 530742520), "assign"), c = cc11001100_hook("c", v(c, u = cc11001100_hook("u", m(u, d, f, c, n[p + 2], 23, -995338651), "assign"), d, f, n[p + 0], 6, -198630844), "assign"), f = cc11001100_hook("f", v(f, c, u, d, n[p + 7], 10, 1126891415), "assign"), d = cc11001100_hook("d", v(d, f, c, u, n[p + 14], 15, -1416354905), "assign"), u = cc11001100_hook("u", v(u, d, f, c, n[p + 5], 21, -57434055), "assign"), c = cc11001100_hook("c", v(c, u, d, f, n[p + 12], 6, 1700485571), "assign"), f = cc11001100_hook("f", v(f, c, u, d, n[p + 3], 10, -1894986606), "assign"), d = cc11001100_hook("d", v(d, f, c, u, n[p + 10], 15, -1051523), "assign"), u = cc11001100_hook("u", v(u, d, f, c, n[p + 1], 21, -2054922799), "assign"), c = cc11001100_hook("c", v(c, u, d, f, n[p + 8], 6, 1873313359), "assign"), f = cc11001100_hook("f", v(f, c, u, d, n[p + 15], 10, -30611744), "assign"), d = cc11001100_hook("d", v(d, f, c, u, n[p + 6], 15, -1560198380), "assign"), u = cc11001100_hook("u", v(u, d, f, c, n[p + 13], 21, 1309151649), "assign"), c = cc11001100_hook("c", v(c, u, d, f, n[p + 4], 6, -145523070), "assign"), f = cc11001100_hook("f", v(f, c, u, d, n[p + 11], 10, -1120210379), "assign"), d = cc11001100_hook("d", v(d, f, c, u, n[p + 2], 15, 718787259), "assign"), u = cc11001100_hook("u", v(u, d, f, c, n[p + 9], 21, -343485551), "assign"), c = cc11001100_hook("c", c + b >>> 0, "assign"), u = cc11001100_hook("u", u + y >>> 0, "assign"), d = cc11001100_hook("d", d + w >>> 0, "assign"), f = cc11001100_hook("f", f + x >>> 0, "assign");
    }
    return r.endian([c, u, d, f]);
  }, "assign"))._ff = cc11001100_hook("(s = function (e, t) {\n  e.constructor == String ? e = t && \"binary\" === t.encoding ? a.stringToBytes(e) : i.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());\n  for (var n = r.bytesToWords(e), l = 8 * e.length, c = 1732584193, u = -271733879, d = -1732584194, f = 271733878, p = 0; p < n.length; p++) n[p] = 16711935 & (n[p] << 8 | n[p] >>> 24) | 4278255360 & (n[p] << 24 | n[p] >>> 8);\n  n[l >>> 5] |= 128 << l % 32, n[14 + (l + 64 >>> 9 << 4)] = l;\n  var h = s._ff,\n    g = s._gg,\n    m = s._hh,\n    v = s._ii;\n  for (p = 0; p < n.length; p += 16) {\n    var b = c,\n      y = u,\n      w = d,\n      x = f;\n    c = h(c, u, d, f, n[p + 0], 7, -680876936), f = h(f, c, u, d, n[p + 1], 12, -389564586), d = h(d, f, c, u, n[p + 2], 17, 606105819), u = h(u, d, f, c, n[p + 3], 22, -1044525330), c = h(c, u, d, f, n[p + 4], 7, -176418897), f = h(f, c, u, d, n[p + 5], 12, 1200080426), d = h(d, f, c, u, n[p + 6], 17, -1473231341), u = h(u, d, f, c, n[p + 7], 22, -45705983), c = h(c, u, d, f, n[p + 8], 7, 1770035416), f = h(f, c, u, d, n[p + 9], 12, -1958414417), d = h(d, f, c, u, n[p + 10], 17, -42063), u = h(u, d, f, c, n[p + 11], 22, -1990404162), c = h(c, u, d, f, n[p + 12], 7, 1804603682), f = h(f, c, u, d, n[p + 13], 12, -40341101), d = h(d, f, c, u, n[p + 14], 17, -1502002290), c = g(c, u = h(u, d, f, c, n[p + 15], 22, 1236535329), d, f, n[p + 1], 5, -165796510), f = g(f, c, u, d, n[p + 6], 9, -1069501632), d = g(d, f, c, u, n[p + 11], 14, 643717713), u = g(u, d, f, c, n[p + 0], 20, -373897302), c = g(c, u, d, f, n[p + 5], 5, -701558691), f = g(f, c, u, d, n[p + 10], 9, 38016083), d = g(d, f, c, u, n[p + 15], 14, -660478335), u = g(u, d, f, c, n[p + 4], 20, -405537848), c = g(c, u, d, f, n[p + 9], 5, 568446438), f = g(f, c, u, d, n[p + 14], 9, -1019803690), d = g(d, f, c, u, n[p + 3], 14, -187363961), u = g(u, d, f, c, n[p + 8], 20, 1163531501), c = g(c, u, d, f, n[p + 13], 5, -1444681467), f = g(f, c, u, d, n[p + 2], 9, -51403784), d = g(d, f, c, u, n[p + 7], 14, 1735328473), c = m(c, u = g(u, d, f, c, n[p + 12], 20, -1926607734), d, f, n[p + 5], 4, -378558), f = m(f, c, u, d, n[p + 8], 11, -2022574463), d = m(d, f, c, u, n[p + 11], 16, 1839030562), u = m(u, d, f, c, n[p + 14], 23, -35309556), c = m(c, u, d, f, n[p + 1], 4, -1530992060), f = m(f, c, u, d, n[p + 4], 11, 1272893353), d = m(d, f, c, u, n[p + 7], 16, -155497632), u = m(u, d, f, c, n[p + 10], 23, -1094730640), c = m(c, u, d, f, n[p + 13], 4, 681279174), f = m(f, c, u, d, n[p + 0], 11, -358537222), d = m(d, f, c, u, n[p + 3], 16, -722521979), u = m(u, d, f, c, n[p + 6], 23, 76029189), c = m(c, u, d, f, n[p + 9], 4, -640364487), f = m(f, c, u, d, n[p + 12], 11, -421815835), d = m(d, f, c, u, n[p + 15], 16, 530742520), c = v(c, u = m(u, d, f, c, n[p + 2], 23, -995338651), d, f, n[p + 0], 6, -198630844), f = v(f, c, u, d, n[p + 7], 10, 1126891415), d = v(d, f, c, u, n[p + 14], 15, -1416354905), u = v(u, d, f, c, n[p + 5], 21, -57434055), c = v(c, u, d, f, n[p + 12], 6, 1700485571), f = v(f, c, u, d, n[p + 3], 10, -1894986606), d = v(d, f, c, u, n[p + 10], 15, -1051523), u = v(u, d, f, c, n[p + 1], 21, -2054922799), c = v(c, u, d, f, n[p + 8], 6, 1873313359), f = v(f, c, u, d, n[p + 15], 10, -30611744), d = v(d, f, c, u, n[p + 6], 15, -1560198380), u = v(u, d, f, c, n[p + 13], 21, 1309151649), c = v(c, u, d, f, n[p + 4], 6, -145523070), f = v(f, c, u, d, n[p + 11], 10, -1120210379), d = v(d, f, c, u, n[p + 2], 15, 718787259), u = v(u, d, f, c, n[p + 9], 21, -343485551), c = c + b >>> 0, u = u + y >>> 0, d = d + w >>> 0, f = f + x >>> 0;\n  }\n  return r.endian([c, u, d, f]);\n})._ff", function (e, t, n, r, i, o, a) {
    var s = cc11001100_hook("s", e + (t & n | ~t & r) + (i >>> 0) + a, "var-init");
    return (s << o | s >>> 32 - o) + t;
  }, "assign"), s._gg = cc11001100_hook("s._gg", function (e, t, n, r, i, o, a) {
    var s = cc11001100_hook("s", e + (t & r | n & ~r) + (i >>> 0) + a, "var-init");
    return (s << o | s >>> 32 - o) + t;
  }, "assign"), s._hh = cc11001100_hook("s._hh", function (e, t, n, r, i, o, a) {
    var s = cc11001100_hook("s", e + (t ^ n ^ r) + (i >>> 0) + a, "var-init");
    return (s << o | s >>> 32 - o) + t;
  }, "assign"), s._ii = cc11001100_hook("s._ii", function (e, t, n, r, i, o, a) {
    var s = cc11001100_hook("s", e + (n ^ (t | ~r)) + (i >>> 0) + a, "var-init");
    return (s << o | s >>> 32 - o) + t;
  }, "assign"), s._blocksize = cc11001100_hook("s._blocksize", 16, "assign"), s._digestsize = cc11001100_hook("s._digestsize", 16, "assign"), e.exports = cc11001100_hook("e.exports", function (e, t) {
    if (e === undefined || null === e) throw new Error("Illegal argument " + e);
    var n = cc11001100_hook("n", r.wordsToBytes(s(e, t)), "var-init");
    return t && t.asBytes ? n : t && t.asString ? a.bytesToString(n) : r.bytesToHex(n);
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(4), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(0), "var-init"),
    a = cc11001100_hook("a", n(93), "var-init"),
    s = cc11001100_hook("s", n(8), "var-init");
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) try {
      var t = cc11001100_hook("t", e.style, "var-init");
      if (e.parentStyleSheet.ownerNode.getAttribute("aria-SkipFontScale")) return "";
      e.selectorText.indexOf(".mF_expo2010 .txt li a");
      var n = cc11001100_hook("n", parseInt(t["font-weight"] || 0), "var-init"),
        r = cc11001100_hook("r", s.RealSizePx(t["font-size"]), "var-init");
      if (r >= 18 && r < 30 || r < 18 && n > 400) return e.selectorText;
    } catch (i) {} else ;
  }
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.style.fontSize, "var-init"),
      n = cc11001100_hook("n", s.RealSizePx(t), "var-init");
    if (n && n >= 18 && n < 30) {
      var r = cc11001100_hook("r", new i(e), "var-init");
      return r.hasClass("contentTitle") && "contentTitle" == e.getAttribute("role") || r.addClass("contentTitle"), "";
    }
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) try {
      var t = cc11001100_hook("t", e.style, "var-init");
      if (e.parentStyleSheet.ownerNode.getAttribute("aria-SkipFontScale")) return "";
      var n = cc11001100_hook("n", parseInt(t["font-weight"] || 0), "var-init"),
        r = cc11001100_hook("r", s.RealSizePx(t["font-size"]), "var-init");
      if (r > 0 && r < 18 && n <= 400) return e.selectorText.indexOf(".mF_expo2010 .txt li a"), e.selectorText;
    } catch (i) {} else ;
  }
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", s.RealSizePx(e.style.fontSize), "var-init");
    if (t && t > 0 && t < 18) {
      var n = cc11001100_hook("n", new i(e), "var-init");
      return n.hasClass("contentText") && "contentText" == e.getAttribute("role") || n.addClass("contentText"), "";
    }
  }
  var f = cc11001100_hook("f", new Map(), "var-init");
  var p = cc11001100_hook("p", new Map(), "var-init");
  var h = cc11001100_hook("h", 0, "var-init"),
    g = cc11001100_hook("g", !1, "var-init");
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) try {
      var t = cc11001100_hook("t", e.style, "var-init");
      if (e.selectorText.indexOf(".searchtext"), s.RealSizePx(t["font-size"]) >= 30) return e.selectorText;
    } catch (n) {} else ;
  }
  function v(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.style.fontSize, "var-init");
    if (!t.indexOf("%")) return t && parseInt(t, 10) >= 30 ? (e.id || (e.id = cc11001100_hook("e.id", o.genID(), "assign")), "#" + e.id) : void 0;
  }
  var b = cc11001100_hook("b", new Map(), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    setFont: function (e) {
      if (o.isMobile()) return "";
      if (r.oldFixedStatus) {
        var t = cc11001100_hook("t", e.styleSheets.length, "var-init");
        h != t && (h = cc11001100_hook("h", t, "assign"), g = cc11001100_hook("g", !0, "assign"));
        var n = cc11001100_hook("n", "\r\n/**   设置全局正文字体开始   */\r\n", "var-init"),
          i = cc11001100_hook("i", function (e) {
            g && f.clear();
            var t = cc11001100_hook("t", e.body.getAttribute("id"), "var-init");
            t || (t = cc11001100_hook("t", o.genID(), "assign"), e.body.setAttribute("id", t)), s.createElemStyle(d, [], e);
            var n = cc11001100_hook("n", f[t] || [], "var-init");
            return n.length > 0 || ((n = cc11001100_hook("n", s.create(u, e), "assign")).push(".contentText"), n.push("[role='contentText']"), n.push("[role='contentText'] *"), n.push("[aria-regiontype='6']"), n.push("[aria-regiontype='6'] *"), n.push("[aria-fontsize='normal']"), f.set(t, n)), n;
          }(e), "var-init"),
          y = cc11001100_hook("y", function (e) {
            g && b.clear();
            var t = cc11001100_hook("t", e.body.getAttribute("id"), "var-init");
            t || (t = cc11001100_hook("t", o.genID(), "assign"), e.body.setAttribute("id", t));
            s.createElemStyle(v, [], e);
            var n = cc11001100_hook("n", b[t] || [], "var-init");
            if (n.length > 0) return n;
            return (n = cc11001100_hook("n", s.create(m, e), "assign")).push("[role='indexNotice']"), n.push("[role='indexNotice']>a"), n.push("[aria-fontsize='huge']"), b.set(t, n), n;
          }(e), "var-init"),
          w = cc11001100_hook("w", function (e) {
            g && p.clear();
            var t = cc11001100_hook("t", e.body.getAttribute("id"), "var-init");
            t || (t = cc11001100_hook("t", o.genID(), "assign"), e.body.setAttribute("id", t)), s.createElemStyle(c, [], e);
            var n = cc11001100_hook("n", p[t] || [], "var-init");
            return n.length > 0 || ((n = cc11001100_hook("n", s.create(l, e), "assign")).push(".contentTitle"), n.push("[role='contentTitle']"), n.push("[aria-fontsize='big']"), p.set(t, n)), n;
          }(e), "var-init"),
          x = cc11001100_hook("x", (a.bodyWidth(), s.prefix.useOldFixed(e)), "var-init"),
          S = cc11001100_hook("S", "{}", "var-init"),
          C = cc11001100_hook("C", {}, "var-init"),
          k = cc11001100_hook("k", {}, "var-init");
        s.fontsize(28), S = cc11001100_hook("S", s.fontsize(32), "assign"), C = cc11001100_hook("C", s.fontsize(36, 500), "assign"), k = cc11001100_hook("k", s.fontsize(44, 500), "assign"), n += cc11001100_hook("n", s.prefix.useOldFixed(e) + "  [aria-fontsize='small']{font-size:28px !important;}", "assign"), n += cc11001100_hook("n", x.trim() + S, "assign");
        for (var T = cc11001100_hook("T", "", "var-init"), A = cc11001100_hook("A", 0, "var-init"); A < i.length; A++) {
          T += cc11001100_hook("T", x + " " + i[A] + S, "assign");
        }
        for (A = cc11001100_hook("A", 0, "assign"); A < y.length; A++) {
          T += cc11001100_hook("T", x + " " + y[A] + k, "assign");
        }
        for (A = cc11001100_hook("A", 0, "assign"); A < w.length; A++) {
          T += cc11001100_hook("T", x + " " + w[A] + C, "assign");
        }
        n += cc11001100_hook("n", s.prefix.useOldFixed(e) + " *,", "assign"), n += cc11001100_hook("n", s.prefix.useOldFixed(e) + " .skipAutoFix{font-size:32px !important;}", "assign"), r.oldFixedStatus && (n += cc11001100_hook("n", "html {font-size:32px;}", "assign")), n += cc11001100_hook("n", T, "assign"), S = cc11001100_hook("S", s.fontsize(24), "assign"), C = cc11001100_hook("C", s.fontsize(28, 500), "assign"), k = cc11001100_hook("k", s.fontsize(36, 500), "assign"), n += cc11001100_hook("n", s.media(769, 1366) + "{", "assign"), n += cc11001100_hook("n", x.trim() + S, "assign"), n += cc11001100_hook("n", s.prefix.useOldFixed(e) + " *,", "assign"), n += cc11001100_hook("n", s.prefix.useOldFixed(e) + " .skipAutoFix{font-size:24px  !important;}", "assign"), r.oldFixedStatus && (n += cc11001100_hook("n", "html {font-size:24px;}", "assign")), n += cc11001100_hook("n", s.prefix.useOldFixed(e) + "  [aria-fontsize='small']{font-size:20px !important;}", "assign");
        for (A = cc11001100_hook("A", 0, "assign"); A < i.length; A++) {
          n += cc11001100_hook("n", x + " " + i[A] + S, "assign");
        }
        for (A = cc11001100_hook("A", 0, "assign"); A < y.length; A++) {
          n += cc11001100_hook("n", x + " " + y[A] + k, "assign");
        }
        for (A = cc11001100_hook("A", 0, "assign"); A < w.length; A++) {
          n += cc11001100_hook("n", x + " " + w[A] + C, "assign");
        }
        n += cc11001100_hook("n", "}", "assign"), s.fontsize(16), S = cc11001100_hook("S", s.fontsize(18), "assign"), C = cc11001100_hook("C", s.fontsize(20), "assign"), k = cc11001100_hook("k", s.fontsize(28, 500), "assign"), n += cc11001100_hook("n", s.media(0, 768) + "{ ", "assign"), n += cc11001100_hook("n", s.prefix.useOldFixed(e) + "  [aria-fontsize='small']{font-size:16px !important;}", "assign"), n += cc11001100_hook("n", x.trim() + S, "assign"), n += cc11001100_hook("n", s.prefix.useOldFixed(e) + " *,", "assign"), n += cc11001100_hook("n", s.prefix.useOldFixed(e) + " .skipAutoFix{font-size:18px !important;}", "assign"), r.oldFixedStatus && (n += cc11001100_hook("n", "html {font-size:18px;}", "assign"));
        for (A = cc11001100_hook("A", 0, "assign"); A < i.length; A++) {
          n += cc11001100_hook("n", x + " " + i[A] + S, "assign");
        }
        for (A = cc11001100_hook("A", 0, "assign"); A < y.length; A++) {
          n += cc11001100_hook("n", x + " " + y[A] + k, "assign");
        }
        for (A = cc11001100_hook("A", 0, "assign"); A < w.length; A++) {
          n += cc11001100_hook("n", x + " " + w[A] + C, "assign");
        }
        return n += cc11001100_hook("n", "}", "assign");
      }
    },
    setTitleFont: cc11001100_hook("setTitleFont", l, "object-key-init"),
    setTitleStyleFont: cc11001100_hook("setTitleStyleFont", c, "object-key-init"),
    setContentStyleFont: cc11001100_hook("setContentStyleFont", d, "object-key-init"),
    setContentFont: cc11001100_hook("setContentFont", u, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(3), "var-init"),
    i = cc11001100_hook("i", n(9), "var-init");
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", e.documentElement.offsetHeight, "var-init"),
      r = cc11001100_hook("r", getComputedStyle(t)["height"], "var-init");
    n < (r = cc11001100_hook("r", r ? parseInt(r, 10) : 0, "assign")) && (n = cc11001100_hook("n", r, "assign")), n > 0 && (t.style.height = cc11001100_hook("t.style.height", n + "px", "assign"), t.style.overflow = cc11001100_hook("t.style.overflow", "hidden", "assign"));
  }
  e.exports = cc11001100_hook("e.exports", {
    setIframeHeight: function (e) {
      r.getAll(e, function (t, n) {
        o(t, n), i.doEventForce(e);
      });
    },
    doSet: cc11001100_hook("doSet", o, "object-key-init")
  }, "assign");
}, function (e, t) {
  var n = cc11001100_hook("n", {
    utf8: {
      stringToBytes: function (e) {
        return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
      },
      bytesToString: function (e) {
        return decodeURIComponent(escape(n.bin.bytesToString(e)));
      }
    },
    bin: {
      stringToBytes: function (e) {
        for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) t.push(255 & e.charCodeAt(n));
        return t;
      },
      bytesToString: function (e) {
        for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) t.push(String.fromCharCode(e[n]));
        return t.join("");
      }
    }
  }, "var-init");
  e.exports = cc11001100_hook("e.exports", n, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(36), "var-init"),
    i = cc11001100_hook("i", n(37), "var-init"),
    o = cc11001100_hook("o", n(105), "var-init"),
    a = cc11001100_hook("a", n(53), "var-init"),
    s = cc11001100_hook("s", new Map(), "var-init"),
    l = cc11001100_hook("l", new Map(), "var-init"),
    c = cc11001100_hook("c", n(106), "var-init"),
    u = cc11001100_hook("u", ["r", "g", "b", "a"], "var-init"),
    d = cc11001100_hook("d", ["mode", "brightness", "contrast", "grayscale", "sepia"], "var-init");
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (l.has(e)) return l.get(e);
    var t = cc11001100_hook("t", (0, r.parse)(e), "var-init"),
      n = cc11001100_hook("n", (0, r.rgbToHSL)(t), "var-init");
    return l.set(e, n), n;
  }
  function p(e, t, n, i, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    if (t && i) {
      var l;
      if (s.has(n) ? l = cc11001100_hook("l", s.get(n), "assign") : (l = cc11001100_hook("l", new Map(), "assign"), s.set(n, l)), "string" == typeof e) {
        var c = cc11001100_hook("c", e, "var-init");
        if (void 0 === (e = cc11001100_hook("e", r.parse(e), "assign"))) return c;
      }
      var p = cc11001100_hook("p", function (e, t) {
        var n = cc11001100_hook("n", t.name, "var-init");
        return u.forEach(function (t) {
          n += cc11001100_hook("n", e[t] + ";", "assign");
        }), d.forEach(function (e) {
          n += cc11001100_hook("n", t[e] + ";", "assign");
        }), n;
      }(e, t), "var-init");
      try {
        if (l.has(p)) return l.get(p);
      } catch (y) {}
      var h = cc11001100_hook("h", n((0, r.rgbToHSL)(e), i ? f(i) : null, a ? f(a) : null), "var-init"),
        g = cc11001100_hook("g", (0, r.hslToRGB)(h), "var-init"),
        m = cc11001100_hook("m", (0, o.createFilterMatrix)(t), "var-init"),
        v = cc11001100_hook("v", (0, o.applyColorMatrix)([g.r, g.g, g.b], m), "var-init"),
        b = cc11001100_hook("b", 1 === e.a ? (0, r.rgbToHexString)({
          r: cc11001100_hook("r", v[0], "object-key-init"),
          g: cc11001100_hook("g", v[1], "object-key-init"),
          b: cc11001100_hook("b", v[2], "object-key-init")
        }) : (0, r.rgbToString)({
          r: cc11001100_hook("r", v[0], "object-key-init"),
          g: cc11001100_hook("g", v[1], "object-key-init"),
          b: cc11001100_hook("b", v[2], "object-key-init"),
          a: cc11001100_hook("a", e.a, "object-key-init")
        }), "var-init");
      try {
        l.set(p, b);
      } catch (y) {}
      return b;
    }
  }
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e;
  }
  function g(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", t.backgroundColor, "var-init");
    return p(e, t, m, t.color, n);
  }
  function m(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      o = cc11001100_hook("o", e.h, "var-init"),
      a = cc11001100_hook("a", e.s, "var-init"),
      s = cc11001100_hook("s", e.l, "var-init"),
      l = cc11001100_hook("l", e.a, "var-init"),
      c = cc11001100_hook("c", s < .5, "var-init");
    c ? r = cc11001100_hook("r", s < .2 || a < .12, "assign") : r = cc11001100_hook("r", a < .24 || s > .8 && o > 200 && o < 280, "assign");
    var u = cc11001100_hook("u", o, "var-init"),
      d = cc11001100_hook("d", s, "var-init");
    return r && (c ? (u = cc11001100_hook("u", t.h, "assign"), d = cc11001100_hook("d", t.s, "assign")) : (u = cc11001100_hook("u", n.h, "assign"), d = cc11001100_hook("d", n.s, "assign"))), {
      h: cc11001100_hook("h", u, "object-key-init"),
      s: cc11001100_hook("s", d, "object-key-init"),
      l: cc11001100_hook("l", (0, i.scale)(s, 0, 1, t.l, n.l), "object-key-init"),
      a: cc11001100_hook("a", l, "object-key-init")
    };
  }
  function v(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e.h, e.s;
    var n = cc11001100_hook("n", e.l, "var-init"),
      r = cc11001100_hook("r", e.a, "var-init");
    if (n < .5) {
      var o = cc11001100_hook("o", (0, i.scale)(n, 0, .5, 0, .4), "var-init");
      return {
        h: cc11001100_hook("h", t.h, "object-key-init"),
        s: cc11001100_hook("s", t.s, "object-key-init"),
        l: cc11001100_hook("l", o, "object-key-init"),
        a: cc11001100_hook("a", r, "object-key-init")
      };
    }
    o = cc11001100_hook("o", (0, i.scale)(n, .5, 1, .4, t.l), "assign");
    return {
      h: cc11001100_hook("h", t.h, "object-key-init"),
      s: cc11001100_hook("s", t.s, "object-key-init"),
      l: cc11001100_hook("l", o, "object-key-init"),
      a: cc11001100_hook("a", r, "object-key-init")
    };
  }
  function b(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (t) {
      if (0 === t.mode) return g(e, t);
      var n = cc11001100_hook("n", t.backgroundColor, "var-init");
      return p(e, Object.assign(Object.assign({}, t), {
        mode: cc11001100_hook("mode", 0, "object-key-init")
      }), v, n);
    }
  }
  l = cc11001100_hook("l", new Map(), "assign");
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    try {
      return function (e) {
        if (e = cc11001100_hook("e", e.trim(), "assign"), l.has(e)) return l.get(e);
        e.includes("calc(") && (e = cc11001100_hook("e", (0, r.lowerCalcExpression)(e), "assign"));
        var t = cc11001100_hook("t", (0, r.parse)(e), "var-init");
        return l.set(e, t), t;
      }(e);
    } catch (t) {
      return null;
    }
  }
  function w(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e.h, e.s;
    var n = cc11001100_hook("n", e.l, "var-init"),
      r = cc11001100_hook("r", e.a, "var-init");
    if (n > .5) {
      var o = cc11001100_hook("o", (0, i.scale)(n, .5, 1, .55, t.l), "var-init");
      return {
        h: cc11001100_hook("h", t.h, "object-key-init"),
        s: cc11001100_hook("s", t.s, "object-key-init"),
        l: cc11001100_hook("l", o, "object-key-init"),
        a: cc11001100_hook("a", r, "object-key-init")
      };
    }
    return {
      h: cc11001100_hook("h", t.h, "object-key-init"),
      s: cc11001100_hook("s", t.s, "object-key-init"),
      l: cc11001100_hook("l", o = cc11001100_hook("o", i.scale(n, 0, .5, t.l, Math.min(1, .55 + .05)), "assign"), "object-key-init"),
      a: cc11001100_hook("a", r, "object-key-init")
    };
  }
  function x(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", e.h, "var-init"),
      o = cc11001100_hook("o", e.s, "var-init"),
      a = cc11001100_hook("a", e.l, "var-init"),
      s = cc11001100_hook("s", e.a, "var-init"),
      l = cc11001100_hook("l", r, "var-init"),
      c = cc11001100_hook("c", o, "var-init");
    return a < .5 ? (l = cc11001100_hook("l", t.h, "assign"), c = cc11001100_hook("c", t.s, "assign")) : (l = cc11001100_hook("l", n.h, "assign"), c = cc11001100_hook("c", n.s, "assign")), {
      h: cc11001100_hook("h", l, "object-key-init"),
      s: cc11001100_hook("s", c, "object-key-init"),
      l: cc11001100_hook("l", (0, i.scale)(a, 0, 1, .5, .2), "object-key-init"),
      a: cc11001100_hook("a", s, "object-key-init")
    };
  }
  function S(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return b(e, t);
  }
  e.exports = cc11001100_hook("e.exports", {
    modifyBorderColor: function (e, t) {
      if (0 === t.mode) return g(e, t);
      var n = cc11001100_hook("n", t.color, "var-init"),
        r = cc11001100_hook("r", t.backgroundColor, "var-init");
      return n && r ? p(e, t, x, n, r) : void 0;
    },
    modifyGradientColor: cc11001100_hook("modifyGradientColor", S, "object-key-init"),
    modifyBackgroundColor: cc11001100_hook("modifyBackgroundColor", b, "object-key-init"),
    modifyForegroundColor: function (e, t) {
      if (t) {
        if (0 === t.mode) return g(e, t);
        var n = cc11001100_hook("n", t.color, "var-init");
        if (n) return p(e, Object.assign(Object.assign({}, t), {
          mode: cc11001100_hook("mode", 0, "object-key-init")
        }), w, n);
      }
    },
    modifyShadowColor: function (e, t) {
      return b(e, t);
    },
    clearColorModificationCache: function () {
      s.clear(), l.clear();
    },
    modifyColor: function (e, t) {
      return p(e, t, h);
    },
    getGradientModifier: function (e, t) {
      var n = cc11001100_hook("n", c.parseGradient(e), "var-init");
      if (!(n.length < 0)) {
        var r = cc11001100_hook("r", n[0], "var-init"),
          i = cc11001100_hook("i", r.typeGradient, "var-init"),
          o = cc11001100_hook("o", r.match, "var-init"),
          s = cc11001100_hook("s", r.hasComma, "var-init"),
          l = cc11001100_hook("l", /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/, "var-init");
        return i + "(" + a.getMatches(/([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?[^\(\),]*),?/g, o, 1).map(function (e) {
          var n = cc11001100_hook("n", y(e = cc11001100_hook("e", e.trim(), "assign")), "var-init");
          if (n) {
            if (e.indexOf(")") > -1) {
              var r = cc11001100_hook("r", e.lastIndexOf(")"), "var-init");
              return S(n, t) + e.substring(r + 1);
            }
            return S(n, t);
          }
          r = cc11001100_hook("r", e.lastIndexOf(" "), "assign");
          if (n = cc11001100_hook("n", y(e.substring(0, r)), "assign")) return S(n, t) + " " + e.substring(r + 1);
          var i = cc11001100_hook("i", e.match(l), "var-init");
          return i && (n = cc11001100_hook("n", y(i[3]), "assign")) ? i[1] + "(" + i[2] ? i[2] + "," : S(n, filter) + ")" : e;
        }).join(", ") + ")" + (s ? "," : "");
      }
    }
  }, "assign");
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", {
    formatCSS: function (e) {
      function t(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e.replace(/^\s+/, "");
      }
      function n(e) {
        cc11001100_hook("e", e, "function-parameter");
        return 0 === e ? "" : " ".repeat(4 * e);
      }
      if (e.length < 5e4) for (var r = cc11001100_hook("r", /[^{}]+{\s*}/, "var-init"); r.test(e);) e = cc11001100_hook("e", e.replace(r, ""), "assign");
      for (var i = cc11001100_hook("i", e.replace(/\s{2,}/g, " ").replace(/\{/g, "{\n").replace(/\}/g, "\n}\n").replace(/\;(?![^\(|\"]*(\)|\"))/g, ";\n").replace(/\,(?![^\(|\"]*(\)|\"))/g, ",\n").replace(/\n\s*\n/g, "\n").split("\n"), "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"), l = cc11001100_hook("l", i.length, "var-init"); s < l; s++) {
        var c = cc11001100_hook("c", i[s] + "\n", "var-init");
        c.includes("{") ? a.push(n(o++) + t(c)) : c.includes("}") ? a.push(n(--o) + t(c)) : a.push(n(o) + t(c));
      }
      return a.join("").trim();
    },
    getMatches: function (e, t, n) {
      n || (n = cc11001100_hook("n", 0, "assign"));
      for (var r, i = cc11001100_hook("i", [], "var-init"); r = cc11001100_hook("r", e.exec(t), "assign");) i.push(r[n]);
      return i;
    },
    formatArray: function (e) {
      return e.concat("").join("\n");
    },
    getTextPositionMessage: function (e, t) {
      if (!isFinite(t)) throw new Error("Wrong char index " + t);
      var n,
        r = cc11001100_hook("r", "", "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      do {
        i++, n = cc11001100_hook("n", o, "assign"), o = cc11001100_hook("o", e.indexOf("\n", n + 1), "assign");
      } while (o >= 0 && o <= t);
      var a = cc11001100_hook("a", t - n, "var-init");
      return r += cc11001100_hook("r", "line " + i + ", column " + a, "assign"), r += cc11001100_hook("r", "\n", "assign"), t < e.length ? r += cc11001100_hook("r", e.substring(n + 1, o), "assign") : r += cc11001100_hook("r", e.substring(e.lastIndexOf("\n") + 1), "assign"), r += cc11001100_hook("r", "\n", "assign"), r += cc11001100_hook("r", new Array(a).join("-") + "^", "assign");
    },
    getTextDiffIndex: function (e, t) {
      for (var n = cc11001100_hook("n", Math.min(e.length, t.length), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n; r++) if (e[r] !== t[r]) return r;
      return e.length !== t.length ? n : -1;
    },
    parseArray: function (e) {
      return e.replace(/\r/g, "").split("\n").map(function (e) {
        return e.trim();
      }).filter(function (e) {
        return e;
      });
    },
    getStringSize: function (e) {
      return 2 * e.length;
    },
    getParenthesesRange: function (e, t) {
      t || (t = cc11001100_hook("t", 0, "assign"));
      for (var n = cc11001100_hook("n", e.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", -1, "var-init"), o = cc11001100_hook("o", t, "var-init"); o < n; o++) if (0 === r) {
        if ((a = cc11001100_hook("a", e.indexOf("(", o), "assign")) < 0) break;
        i = cc11001100_hook("i", a, "assign"), r++, o = cc11001100_hook("o", a, "assign");
      } else {
        var a,
          s = cc11001100_hook("s", e.indexOf(")", o), "var-init");
        if (s < 0) break;
        if ((a = cc11001100_hook("a", e.indexOf("(", o), "assign")) < 0 || s < a) {
          if (0 === --r) return {
            start: cc11001100_hook("start", i, "object-key-init"),
            end: cc11001100_hook("end", s + 1, "object-key-init")
          };
          o = cc11001100_hook("o", s, "assign");
        } else r++, o = cc11001100_hook("o", a, "assign");
      }
      return null;
    }
  }, "assign");
}, function (e, t) {
  var n,
    r = cc11001100_hook("r", "undefined" == typeof navigator ? "some useragent" : navigator.userAgent.toLowerCase(), "var-init"),
    i = cc11001100_hook("i", "undefined" == typeof navigator ? "some platform" : navigator.platform.toLowerCase(), "var-init"),
    o = cc11001100_hook("o", {}, "var-init");
  o.isChromium = cc11001100_hook("o.isChromium", r.includes("chrome") || r.includes("chromium"), "assign"), o.isThunderbird = cc11001100_hook("o.isThunderbird", r.includes("thunderbird"), "assign"), o.isFirefox = cc11001100_hook("o.isFirefox", r.includes("firefox") || r.includes("librewolf") || o.isThunderbird, "assign"), o.isVivaldi = cc11001100_hook("o.isVivaldi", r.includes("vivaldi"), "assign"), o.isYaBrowser = cc11001100_hook("o.isYaBrowser", r.includes("yabrowser"), "assign"), o.isOpera = cc11001100_hook("o.isOpera", r.includes("opr") || r.includes("opera"), "assign"), o.isEdge = cc11001100_hook("o.isEdge", r.includes("edg"), "assign"), o.isSafari = cc11001100_hook("o.isSafari", r.includes("safari") && !o.isChromium, "assign"), o.isWindows = cc11001100_hook("o.isWindows", i.startsWith("win"), "assign"), o.isMacOS = cc11001100_hook("o.isMacOS", i.startsWith("mac"), "assign"), o.isMobile = cc11001100_hook("o.isMobile", r.includes("mobile"), "assign"), o.isShadowDomSupported = cc11001100_hook("o.isShadowDomSupported", "function" == typeof ShadowRoot, "assign"), o.isMatchMediaChangeEventListenerSupported = cc11001100_hook("o.isMatchMediaChangeEventListenerSupported", "function" == typeof MediaQueryList && "function" == typeof MediaQueryList.prototype.addEventListener, "assign"), o.chromiumVersion = cc11001100_hook("o.chromiumVersion", (n = cc11001100_hook("n", r.match(/chrom[e|ium]\/([^ ]+)/), "assign")) && n[1] ? n[1] : "", "assign"), o.isDefinedSelectorSupported = cc11001100_hook("o.isDefinedSelectorSupported", function () {
    try {
      return document.querySelector(":defined"), !0;
    } catch (e) {
      return !1;
    }
  }(), "assign"), o.compareChromeVersions = cc11001100_hook("o.compareChromeVersions", function (e, t) {
    for (var n = cc11001100_hook("n", e.split(".").map(function (e) {
        return parseInt(e);
      }), "var-init"), r = cc11001100_hook("r", t.split(".").map(function (e) {
        return parseInt(e);
      }), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) if (n[i] !== r[i]) return n[i] < r[i] ? -1 : 1;
    return 0;
  }, "assign"), o.isXMLHttpRequestSupported = cc11001100_hook("o.isXMLHttpRequestSupported", "function" == typeof XMLHttpRequest, "assign"), o.isFetchSupported = cc11001100_hook("o.isFetchSupported", "function" == typeof fetch, "assign"), o.isMV3 = cc11001100_hook("o.isMV3", globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.getManifest && 3 === globalThis.chrome.runtime.getManifest().manifest_version, "assign"), o.isCSSColorSchemePropSupported = cc11001100_hook("o.isCSSColorSchemePropSupported", function () {
    if ("undefined" == typeof document) return !1;
    var e = cc11001100_hook("e", document.createElement("div"), "var-init");
    return e.setAttribute("style", "color-scheme: dark"), e.style && "dark" === e.style.colorScheme;
  }(), "assign"), e.exports = cc11001100_hook("e.exports", o, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(4), "var-init"),
    a = cc11001100_hook("a", n(2), "var-init"),
    s = cc11001100_hook("s", n(3), "var-init"),
    l = cc11001100_hook("l", 0, "var-init");
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (o.oldFixedStatus) {
      for (var t = cc11001100_hook("t", document.querySelectorAll("td:not([aria-tabel2tded]),th:not([aria-tabel2tded])"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
        var s = cc11001100_hook("s", t[n], "var-init"),
          c = cc11001100_hook("c", new r(s), "var-init"),
          d = cc11001100_hook("d", parseInt(i.getStyle(c.closest("tr").firstNode, "width"), 10), "var-init"),
          f = cc11001100_hook("f", c.closest("tr"), "var-init");
        f.hasClass("ariarow") || (l += cc11001100_hook("l", 1, "assign"), f.addClass("ariarow"), f.addClass("ariarow" + l));
        var p = cc11001100_hook("p", parseInt(i.getStyle(s, "width"), 10) - 2, "var-init"),
          h = cc11001100_hook("h", parseFloat((p / d * 100).toFixed(2)) + "%", "var-init");
        c.css({
          width: cc11001100_hook("width", h, "object-key-init"),
          padding: cc11001100_hook("padding", "0", "object-key-init")
        }), c.attr("aria-tabel2tded", "true"), c.addClass("ariacol"), c.addClass("ariacol_" + l + "_" + (n + 1));
      }
      if (a.useOldFixed || a.useOldFixedInMobile) {
        if (0 == new r(e.body).find("#ariatabel2dived").length) {
          "[aria-fromtable]{    display: table;}", "[aria-fromtable] ul,[aria-fromtable] li{list-style: none;}", "[aria-fromtable] li{float:left;}.ariacol { display:table-cell; } .ariarow{ display:table-row; }", i.appendCss(e, "ariatabel2dived", "[aria-fromtable]{    display: table;}[aria-fromtable] ul,[aria-fromtable] li{list-style: none;}[aria-fromtable] li{float:left;}.ariacol { display:table-cell; } .ariarow{ display:table-row; }");
        }
        var g = cc11001100_hook("g", new r(e.body).find("table[aria-table2div]:not([aria-tabel2dived])"), "var-init");
        i.each(g, function (e, t) {
          var n = cc11001100_hook("n", new r(t), "var-init");
          if ("table" == n.aria.role && 0 == n.closest("table").length && "true" != n.ariaAttr("table2dived")) {
            var i = cc11001100_hook("i", t.outerHTML.replace(/<table/gi, "<div aria-fromtable='true'").replace(/<\/table/gi, "</div aria-fromtable='true'").replace(/<thead[^<>]*>/gi, "").replace(/<tbody[^<>]*>/gi, "").replace(/<tfoot[^<>]*>/gi, "").replace(/<\/thead[^<>]*>/gi, "").replace(/<\/tbody[^<>]*>/gi, "").replace(/<\/tfoot[^<>]*>/gi, "").replace(/<tr/gi, "<ul").replace(/<\/tr/gi, "</ul").replace(/<th /gi, "<li role='th' ").replace(/<th>/gi, "<li role='th'>").replace(/<\/th /gi, "</li role='th' ").replace(/<\/th>/gi, "</li role='th'>").replace(/<td /gi, "<li role='td' ").replace(/<td>/gi, "<li role='td'>").replace(/<\/td /gi, "</li role='td' ").replace(/<\/td>/gi, "</li role='td'>").replace(/&nbsp;/gi, ""), "var-init");
            n.before(new r(i)), n.attr("aria-table2dived", "true"), n.hide();
          }
        });
      }
    } else u(e);
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new r(e.body).find("[aria-table2dived]"), "var-init");
    t.show(), t.removeAttr("aria-table2dived"), new r(e.body).find("[aria-fromtable]").remove();
  }
  e.exports = cc11001100_hook("e.exports", {
    starAll: function () {
      c(document), s.getAll(document, function (e) {
        c(e);
      });
    },
    endAll: function () {
      u(document), s.getAll(document, function (e) {
        u(e);
      });
    },
    start: cc11001100_hook("start", c, "object-key-init"),
    end: cc11001100_hook("end", u, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init");
  new Date().getTime();
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (i.stopBubble(), i.stopDefault(), e && ("mousemove" == e.type || "keydown" == e.type)) {
      var t = cc11001100_hook("t", e.clientX, "var-init"),
        n = cc11001100_hook("n", e.clientY, "var-init"),
        r = cc11001100_hook("r", function (e) {
          var t = cc11001100_hook("t", e.view, "var-init");
          if (!t) return {
            x: cc11001100_hook("x", e.clientX, "object-key-init"),
            y: cc11001100_hook("y", e.clientY, "object-key-init")
          };
          if (t == window || !t.parent) return {
            x: cc11001100_hook("x", e.clientX, "object-key-init"),
            y: cc11001100_hook("y", e.clientY, "object-key-init")
          };
          var n = cc11001100_hook("n", t.parent, "var-init"),
            r = cc11001100_hook("r", t.location, "var-init"),
            i = cc11001100_hook("i", null, "var-init"),
            o = cc11001100_hook("o", 0, "var-init"),
            a = cc11001100_hook("a", 0, "var-init");
          for (; null != n && void 0 !== n;) {
            for (var s = cc11001100_hook("s", 0, "var-init"); s < n.frames.length; s++) if (r == n.frames[s].location) {
              i = cc11001100_hook("i", n.frames[s].frameElement, "assign");
              break;
            }
            if (i) do {
              o += cc11001100_hook("o", i.offsetLeft - i.scrollLeft || 0, "assign"), a += cc11001100_hook("a", i.offsetTop - i.scrollTop || 0, "assign"), i = cc11001100_hook("i", i.offsetParent, "assign");
            } while (i);
            if (n == window) break;
            r = cc11001100_hook("r", n.location, "assign"), n = cc11001100_hook("n", n.parent, "assign");
          }
          return {
            x: cc11001100_hook("x", o + e.clientX - (document.documentElement.scrollLeft || 0), "object-key-init"),
            y: cc11001100_hook("y", a + e.clientY - document.documentElement.scrollTop || 0, "object-key-init")
          };
        }(e), "var-init");
      t = cc11001100_hook("t", r.x, "assign"), n = cc11001100_hook("n", r.y, "assign");
      var o = cc11001100_hook("o", document.getElementById("ariamouseten1"), "var-init"),
        a = cc11001100_hook("a", document.getElementById("ariamouseten2"), "var-init");
      o.style.top = cc11001100_hook("o.style.top", n + 15 + "px", "assign"), a.style.left = cc11001100_hook("a.style.left", t + 15 + "px", "assign");
    }
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), e == document && function (e) {
        if (e || (e = cc11001100_hook("e", window.event, "assign")), !document.getElementById("ariamouseten1")) {
          var t = cc11001100_hook("t", document.createElement("div"), "var-init"),
            n = cc11001100_hook("n", document.createElement("div"), "var-init");
          if (t.setAttribute("isaria", !0), t.setAttribute("aria-skipAutoFix", !0), t.className = cc11001100_hook("t.className", "mouseten noscale ariaskiptheme mouseten_x", "assign"), e) try {
            t.style.top = cc11001100_hook("t.style.top", (e.clientY ? e.clientY : 150) - 2 + "px", "assign");
          } catch (r) {
            t.style.top = cc11001100_hook("t.style.top", "150px", "assign");
          }
          if (t.setAttribute("id", "ariamouseten1"), t.setAttribute("aria-skipall", "true"), i.getContainerDom().appendChild(t), n.className = cc11001100_hook("n.className", "mouseten noscale ariaskiptheme mouseten_y", "assign"), n.setAttribute("isaria", !0), n.setAttribute("aria-skipAutoFix", !0), e) try {
            n.style.left = cc11001100_hook("n.style.left", (e.clientX ? e.clientX : 150) - 2 + "px", "assign");
          } catch (r) {
            n.style.left = cc11001100_hook("n.style.left", "150px", "assign");
          }
          n.setAttribute("aria-skipall", "true"), n.setAttribute("id", "ariamouseten2"), i.getContainerDom().appendChild(n), o(e);
        }
      }();
    },
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), e == document && (new r("#ariamouseten1").remove(), new r("#ariamouseten2").remove());
    },
    listenMouseTen: cc11001100_hook("listenMouseTen", o, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(21), "var-init"),
    i = cc11001100_hook("i", n(121), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init");
  n(32);
  var a = cc11001100_hook("a", n(45), "var-init"),
    s = cc11001100_hook("s", n(42), "var-init"),
    l = cc11001100_hook("l", n(0), "var-init"),
    c = cc11001100_hook("c", n(62), "var-init");
  n(13);
  var u = cc11001100_hook("u", n(61), "var-init"),
    d = cc11001100_hook("d", n(5), "var-init"),
    f = cc11001100_hook("f", n(11), "var-init"),
    p = cc11001100_hook("p", n(60), "var-init"),
    h = cc11001100_hook("h", n(24), "var-init"),
    g = cc11001100_hook("g", n(15), "var-init"),
    m = cc11001100_hook("m", n(19), "var-init"),
    v = cc11001100_hook("v", n(133), "var-init"),
    b = cc11001100_hook("b", n(1), "var-init"),
    y = cc11001100_hook("y", n(25), "var-init"),
    w = cc11001100_hook("w", n(4), "var-init"),
    x = cc11001100_hook("x", n(39), "var-init"),
    S = cc11001100_hook("S", n(41), "var-init"),
    C = cc11001100_hook("C", n(6), "var-init"),
    k = cc11001100_hook("k", n(9), "var-init");
  function T(e) {
    cc11001100_hook("e", e, "function-parameter");
    e ? new b("body").attr(window.ariaSdkName + "-status", "true") : new b("body").removeAttr(window.ariaSdkName + "-status");
  }
  function A() {
    return !!new b("body").ariaAttr("status");
  }
  function E() {
    window.ariaDisableAutoStart = cc11001100_hook("window.ariaDisableAutoStart", !0, "assign"), window.ariaFromApp = cc11001100_hook("window.ariaFromApp", !0, "assign"), window.ariaHideToolbar = cc11001100_hook("window.ariaHideToolbar", !0, "assign"), window.ariaForceOldfixed = cc11001100_hook("window.ariaForceOldfixed", !0, "assign"), u.setBtn(!0);
  }
  try {
    OldFix.ariaWebview() && E();
  } catch (P) {}
  try {
    navigator.userAgent.toLowerCase().indexOf("uni-app") > -1 && E();
  } catch (P) {}
  if (window.ariaFromApp && o.status) try {
    k.doEventForceAll();
  } catch (P) {}
  function O() {
    if (l.isMobile()) {
      if (o.disabledInMobile) return;
    } else o.loadPy();
    1, (l.isMobile() || o.useOldFixed) && y.start(), r.init().then(function () {
      ariaUse = cc11001100_hook("ariaUse", !0, "assign"), d.start();
      try {
        l.isMobile() ? (h.start(), C.setBodyTran(), g.checkViewport(), o.wapUseConfigPage && !window.disUseWebConfPage ? window.ariaHideToolbar || v.loadConfig() : (o.status = cc11001100_hook("o.status", !0, "assign"), window.ariaHideToolbar ? (a.start(), o.scale = cc11001100_hook("o.scale", 1, "assign"), u.setBtn(!0)) : p.loadConfig().then(function () {
          a.start(), o.scale = cc11001100_hook("o.scale", 1, "assign"), u.setBtn(!0);
        }))) : (o.status = cc11001100_hook("o.status", !0, "assign"), i.start().then(function () {
          u.setBtn(!0), 2 == o.readtype && o.voice.enable && d.play(new b("#ariaTipText")), S.callbackStartLoaded(), w.oldFixedStatus && S.callbackfixed();
        })), window.isAriaDev && ariaDev && "function" == typeof ariaDev.css && ariaDev.css(), setTimeout(function () {
          l.triggerEvent(window, "resize");
        }, 1500);
      } catch (P) {}
    });
  }
  function _() {
    o.loadData() && i.endNobar(), h.end(), o.oldFixedStatus = cc11001100_hook("o.oldFixedStatus", !1, "assign"), T(!0), O();
  }
  function F() {
    if (T(!0), w.status() && !o.oldFixedStatus) return o.oldFixedStatus = cc11001100_hook("o.oldFixedStatus", !0, "assign"), i.end(), h.start(), void i.start();
    r.init().then(function () {
      if (o.status = cc11001100_hook("o.status", !0, "assign"), !o.oldFixedStatus) if (o.oldFixedStatus = cc11001100_hook("o.oldFixedStatus", !0, "assign"), l.isMobile()) {
        if (o.scale = cc11001100_hook("o.scale", 1, "assign"), o.wapOldFixedUrl) return void (document.location.href.indexOf(o.wapOldFixedUrl) < 0 && (document.location.href = cc11001100_hook("document.location.href", o.wapOldFixedUrl, "assign")));
      } else if (o.pcOldFixedUrl) return void (document.location.href.indexOf(o.pcOldFixedUrl) < 0 && (document.location.href = cc11001100_hook("document.location.href", o.pcOldFixedUrl, "assign")));
      h.start(), O();
    });
  }
  function N(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (T(!1), d.stop(), d.end(), e && (u.removeListenBtn(), s.end(), c.end(), o.oldFixedStatus = cc11001100_hook("o.oldFixedStatus", !1, "assign")), !window.ariaFromApp && o.endRefresh && o.status && (o.status = cc11001100_hook("o.status", !1, "assign"), location.reload()), location.href.indexOf("?aria=") > 0 || location.href.indexOf("&&aria=") > 0) return o.status = cc11001100_hook("o.status", !1, "assign"), void (location.href = cc11001100_hook("location.href", location.href.replace("aria=0", "").replace("aria=1", "").replace("aria=2", ""), "assign"));
    u.setBtn(!1), h.end(), y.end();
    try {
      a.end();
    } catch (P) {}
    i.end(), window.ariaFromApp && u.setBtn(!0), l.isMobile() && a.noStart(), o.status = cc11001100_hook("o.status", !1, "assign"), S.callbackexit(), C.noBorderAll(), setTimeout(function () {
      l.triggerEvent(window, "resize");
    }, 350);
  }
  function M(e) {
    cc11001100_hook("e", e, "function-parameter");
    l.isMobile() && p.createStartButton(e);
  }
  var I = cc11001100_hook("I", null, "var-init");
  e.exports = cc11001100_hook("e.exports", {
    start: cc11001100_hook("start", _, "object-key-init"),
    end: cc11001100_hook("end", N, "object-key-init"),
    startRead: function () {
      h.setHasOldFixed(), r.checkJs(), u.removeListenBtn(), u.addListenBtn(), f.addWelcomeContent(), l.isMobile() ? c.start() : s.start(document);
    },
    CheckAutoStart: function () {
      if (!window.ariaFromApp) {
        var e = cc11001100_hook("e", new b("[aria-autofixedbtn]"), "var-init");
        e.length > 0 && "true" == e.attr("aria-autofixedbtn") && M(), g.checkCompatible(), window.ariaAutoHideBtn && u.setBtn(!0), window.ariaDisableAutoStart || ("0" == l.queryString.val("aria") && (o.status = cc11001100_hook("o.status", !1, "assign")), "2" == l.queryString.val("aria") && (w.oldFixedStatus = cc11001100_hook("w.oldFixedStatus", !0, "assign")), (o.status || "1" == l.queryString.val("aria") || "2" == l.queryString.val("aria")) && (A() || (l.isMobile() ? r.init().then(function () {
          o.wapUseConfigPage ? a.start() : p.loadConfig().then(function () {
            a.start();
          });
        }) : w.oldFixedStatus ? F() : _())), l.isMobile() || (T(o.status), I = cc11001100_hook("I", setInterval(function () {
          if (window.isAriaDev) clearInterval(I);else {
            var e = cc11001100_hook("e", o.status, "var-init");
            A() && !e && N(), !A() && e && (w.oldFixedStatus || l.isMobile() ? F() : _());
          }
        }, 2e3), "assign")), setTimeout(function () {
          w.status() || (l.isMobile() ? a.noStart() : x.checkLoadData().then(function (e) {
            e && r.init().then(function () {
              m.starAll().then(function () {
                C.start();
              });
            });
          }));
        }, 150));
      }
    },
    AppStart: function () {
      o.oldFixedStatus ? (0 == new b("#ariaConfigPanel").length && p.loadConfig(), a.start(), h.start(), o.wapUseConfigPage || u.setBtn(!0)) : a.start();
    },
    oldFixedStart: cc11001100_hook("oldFixedStart", F, "object-key-init"),
    useAutoFixedBtn: cc11001100_hook("useAutoFixedBtn", M, "object-key-init"),
    wzaStart: function () {
      T(!0), l.isMobile() && r.init().then(function () {
        m.start();
      });
    },
    AriaEnd: function (e) {
      T(!1), N();
    },
    setUnFixed: function () {
      o.oldFixedStatus = cc11001100_hook("o.oldFixedStatus", !1, "assign");
    },
    play: function (e) {
      d.isOpenVoice() || d.start(), window.isSpecialVoice = cc11001100_hook("window.isSpecialVoice", !0, "assign"), "string" == typeof e ? d.play(e) : d.play(new b(e));
    }
  }, "assign");
}, function (e, t, n) {
  var r,
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(0), "var-init"),
    a = cc11001100_hook("a", n(19), "var-init"),
    s = cc11001100_hook("s", n(44), "var-init");
  if (!o.isIE()) try {
    var l = function (e) {
      var t = cc11001100_hook("t", window.history[e], "var-init"),
        n = cc11001100_hook("n", new Event(e), "var-init");
      return function () {
        var e = cc11001100_hook("e", t.apply(this, arguments), "var-init");
        return n.arguments = cc11001100_hook("n.arguments", arguments, "assign"), window.dispatchEvent(n), e;
      };
    };
    history.pushState = cc11001100_hook("history.pushState", l("pushState"), "assign"), history.replaceState = cc11001100_hook("history.replaceState", l("replaceState"), "assign");
  } catch (g) {}
  var c = cc11001100_hook("c", location.href, "var-init");
  var u = cc11001100_hook("u", 0, "var-init"),
    d = cc11001100_hook("d", 0, "var-init");
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    [].indexOf.call(["DIV", "TABLE", "LI"], e.target.nodeName) < 0 || (d || (d = cc11001100_hook("d", new Date().getTime() + 350, "assign"), setTimeout(function () {
      d > 0 && a.starAll(e);
    }, 350)), d + 350 < new Date().getTime() && u > 0 ? setTimeout(function () {
      d > 0 && (u = cc11001100_hook("u", 0, "assign"), d = cc11001100_hook("d", 0, "assign"), a.starAll(e));
    }, 100) : u++);
  }
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    a.starAll;
  }
  function h(e, t, n, r, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    for (var a = cc11001100_hook("a", r.getElementsByTagName("iframe"), "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < a.length; s++) {
      var l = cc11001100_hook("l", a[s].contentWindow, "var-init");
      try {
        l.document.body && (o ? (new i(l.document.body).on(e, t, n), new i(l.document.body).attr("ariaevent", "true")) : (new i(l.document.body).off(e, t, n), new i(l.document.body).removeAttr("ariaevent")), h(e, t, n, l.document, o));
      } catch (g) {}
    }
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function () {
      if (o.addEventListener(window, "pushState", a.starAll), o.addEventListener(window, "replaceState", a.starAll), "undefined" == typeof s.MutationObserver && new i(document.body).on("DOMNodeInserted", "*:not(i):not(#text)", f), !("onhashchange" in window) || "undefined" != typeof document.documentMode && 8 !== document.documentMode) var e = cc11001100_hook("e", setInterval(function () {
        c != location.href && (c = cc11001100_hook("c", location.href, "assign"), !0) && (a.starAll(), clearInterval(e), e = cc11001100_hook("e", null, "assign"));
      }, 150), "var-init");else document.addEventListener("hashchange", p);
    },
    end: function () {
      "undefined" == typeof s.MutationObserver && new i(document.body).off("DOMNodeInserted", "*:not(i):not(#text)", f), window.removeEventListener("pushState", a.starAll), window.removeEventListener("replaceState", a.starAll), !("onhashchange" in window) || "undefined" != typeof document.documentMode && 8 !== document.documentMode || (window.onhashchange = cc11001100_hook("window.onhashchange", null, "assign")), clearInterval(r), r = cc11001100_hook("r", null, "assign");
    },
    removelistenIncludeIframe: function (e, t, n) {
      h(e, t, n, document, !1), new i(document.body).off(e, t, n);
    },
    listenIncludeIframe: function (e, t, n) {
      h(e, t, n, document, !0), new i(document.body).on(e, t, n);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(3), "var-init"),
    a = cc11001100_hook("a", n(50), "var-init"),
    s = cc11001100_hook("s", n(4), "var-init"),
    l = cc11001100_hook("l", n(0), "var-init"),
    c = cc11001100_hook("c", null, "var-init");
  function u(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    o.getAll(e, function (e, n, o) {
      e.body && 0 != e.body.childElementCount && "true" != e.body.getAttribute("ariaevent") && e.body.childElementCount > 0 && (!l.isMobile() && r.status && s.oldFixedStatus && a.doSet(e, n), e.body.setAttribute("ariaevent", !0), new i(e.body).addClass("ariaiframe ariaiframelevel" + o), "function" == typeof t && t(e));
    });
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      null == c && (c = cc11001100_hook("c", setInterval(function () {
        if (!r.status && null != clearInterval) return clearInterval(c), void (c = cc11001100_hook("c", null, "assign"));
        u(document, e);
      }, 2e3), "assign"));
    },
    doEvent: cc11001100_hook("doEvent", u, "object-key-init"),
    end: function () {
      c && (clearInterval(c), c = cc11001100_hook("c", null, "assign"));
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(2), "var-init"),
    o = cc11001100_hook("o", n(16), "var-init"),
    a = cc11001100_hook("a", n(5), "var-init"),
    s = cc11001100_hook("s", n(4), "var-init"),
    l = cc11001100_hook("l", n(6), "var-init"),
    c = cc11001100_hook("c", n(130), "var-init"),
    u = cc11001100_hook("u", n(15), "var-init"),
    d = cc11001100_hook("d", n(61), "var-init"),
    f = cc11001100_hook("f", n(0), "var-init"),
    p = cc11001100_hook("p", (s.ariaBtnPosition(), n(26)), "var-init"),
    h = cc11001100_hook("h", n(9), "var-init");
  window.innerWidth, window.innerHeight;
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    void 0 !== e && (new r(".ariaToolbarStyle").removeClass("ariaToolbarStyle"), new r(e.target).addClass("ariaToolbarStyle"));
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    new r(".ariafooter").find(".ariaActive").removeClass("ariaActive"), new r(e).closest("li").addClass("ariaActive");
  }
  function v() {
    i.voice.enable ? (new r(".ariaSoundBtn>span").html("阅读"), new r(".ariaSoundBtn").attr("title", "声音已经开启"), new r(".ariaSoundBtn>i").removeClass("ariaicon-mobilePlay1").addClass("ariaicon-mobilePause1")) : (a.stop(), new r(".ariaSoundBtn>span").html("阅读"), new r(".ariaSoundBtn").attr("title", "连续阅读已关闭"), new r(".ariaSoundBtn>i").removeClass("ariaicon-mobilePause1").addClass("ariaicon-mobilePlay1"));
    try {
      new r(".Set-font").find("[scale='" + s.fontScale() + "']").closest("li").addClass("cur");
    } catch (e) {}
    new r(".Set-speech-speed").find("[speed='" + i.voice.rate + "']").addClass("cur"), new r(".Set-eye-protection-list").find("[value='" + s.customMode() + "']").addClass("cur"), A();
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (0 != i.ThemeIndex) {
      var t = cc11001100_hook("t", new r(e.target), "var-init"),
        n = cc11001100_hook("n", new r(".Set-eye-protection-list li"), "var-init");
      n.removeClass("cur"), n.attr("aria-selected", !1), t.addClass("cur"), t.attr("aria-selected", !0);
      var o = cc11001100_hook("o", t.attr("value"), "var-init");
      p.setMode(o), s.customMode(o), h.doEventForceAll(), a.play(t);
    }
  }
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new r(e.target), "var-init"),
      n = cc11001100_hook("n", new r(".Set-speech-speed li"), "var-init");
    n.removeClass("cur"), n.attr("aria-selected", !1), t.addClass("cur"), t.attr("aria-selected", !0);
    var o = cc11001100_hook("o", parseFloat(t.attr("speed")), "var-init");
    i.voice.rate = cc11001100_hook("i.voice.rate", o, "assign"), a.play(t);
  }
  function w(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new r(e.target), "var-init"),
      n = cc11001100_hook("n", new r(".Set-font li"), "var-init");
    n.removeClass("cur"), n.attr("aria-selected", !1), t.closest("li").addClass("cur"), t.attr("aria-selected", !0);
    var i = cc11001100_hook("i", parseFloat(t.attr("scale")), "var-init");
    s.fontScale(i), l.setBodyTran();
  }
  function x(e) {
    cc11001100_hook("e", e, "function-parameter");
    new r(".menu-list-ul li").removeClass("ariaActive"), new r(".menu-content-sz").removeClass("ariaShow");
    var t = cc11001100_hook("t", new r(e.target), "var-init");
    t.addClass("ariaActive");
    var n = cc11001100_hook("n", t.attr("index"), "var-init");
    new r(".menu-content-sz" + n).addClass("ariaShow");
  }
  function S(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "number" == typeof e ? new r(".Set-theme").find("[index='" + e + "']") : new r(e.target), "var-init");
    new r(".Set-theme li").removeClass("cur"), t.addClass("cur");
    var n = cc11001100_hook("n", t.attr("index"), "var-init");
    i.Theme = cc11001100_hook("i.Theme", parseInt(n), "assign"), h.doEventForceAll();
  }
  function C() {
    new r(".action-sheet").removeClass("am-modal-active"), new r(".sharebg").removeClass("sharebg-active");
  }
  function k(e) {
    cc11001100_hook("e", e, "function-parameter");
    e && m(e.target);
    var t = cc11001100_hook("t", new r(".action-sheet"), "var-init");
    t.hasClass("am-modal-active") ? (t.removeClass("am-modal-active"), new r(".sharebg").removeClass("sharebg-active")) : (t.addClass("am-modal-active"), new r(".sharebg").addClass("sharebg-active"));
  }
  function T() {
    try {
      new r(".ariaExitOldFixed").off("click", O), new r(".ariaSoundBtn").off("click", F), new r(".ariaThemeBtn").off("click", A), new r(".ariavoiceMask").off("click", _), new r(".ariaiconmobileconfig1").off("click", k), new r(".sharebg,.ariaiconcloseDiv").off("click", C), new r(".ariaiconmobileExit1").off("click", O), new r(".menu-list-ul li").off("click", x), new r(".Set-font label").off("click", w), new r(".Set-speech-speed li").off("click", y), new r(".Set-eye-protection-list li").off("click", b), new r(".Set-theme li").off("click", S);
    } catch (e) {}
  }
  function A(e) {
    cc11001100_hook("e", e, "function-parameter");
    C(), g(e), e && m(e.target), e && i.ThemeToNext();
    var t = cc11001100_hook("t", c.getText("mobileariathemebtn"), "var-init"),
      n = cc11001100_hook("n", i.Theme, "var-init");
    t += cc11001100_hook("t", n ? n.displayName : "无", "assign");
    var o = cc11001100_hook("o", i.ThemeNext, "var-init");
    t += cc11001100_hook("t", c.getText("arianextTheme"), "assign"), t += cc11001100_hook("t", o ? o.displayName : "无", "assign"), S(i.ThemeIndex), new r(".ariaThemeBtn").aria.label = cc11001100_hook("new r(\".ariaThemeBtn\").aria.label", t, "assign"), e && (a.play(t), l.setSettingTheme());
  }
  function E() {
    window.ariaFirstOpen = cc11001100_hook("window.ariaFirstOpen", !1, "assign"), new r(".ariamobile").remove(), C(), T();
  }
  function O(e) {
    cc11001100_hook("e", e, "function-parameter");
    e && m(e.target), E(), window[window.ariaSdkName].end();
  }
  function _(e) {
    cc11001100_hook("e", e, "function-parameter");
    e && m(e.target), window.ariaFirstOpen = cc11001100_hook("window.ariaFirstOpen", !1, "assign"), new r(".ariavoiceMask").addClass("ariaHide"), window.ariaFirstOpen = cc11001100_hook("window.ariaFirstOpen", !0, "assign"), a.play(new r("#ariaTipText").next());
  }
  function F(e) {
    cc11001100_hook("e", e, "function-parameter");
    window.ariaFirstOpen = cc11001100_hook("window.ariaFirstOpen", !1, "assign"), C(), g(e), e && m(e.target), i.voice.enable = cc11001100_hook("i.voice.enable", !i.voice.enable, "assign"), v();
  }
  e.exports = cc11001100_hook("e.exports", {
    loadConfig: function () {
      return new r(".ariafooter").remove(), T(), new Promise(function (e, t) {
        window.ariaHideToolbar || top != self ? e() : (l.addariaiconstyle(), o.getHTML(i.themeRoad + "/waptoolbar1.min.html?v=" + decodeURI(document.location.hostname), function (t) {
          t = cc11001100_hook("t", f.replaceAll(t, "{road}", i.road + "public/"), "assign"), new r(document.body).append(t), null == window.ariaShowTooleBar || window.ariaShowTooleBar || new r(".ariafooter").addClass("ariaHide"), 1 == i.mobileToolPosition ? (new r(".ariafooter").addClass("ariaIntop"), new r(document.body).addClass("ariaMobileHeaderIntop")) : new r(document.body).addClass("ariaMobileHeaderInBottom"), new r(".ariafooter").css("width", window.document.documentElement.clientWidth), u.setDprScale(new r(".ariafooter").firstNode), function () {
            for (var e = cc11001100_hook("e", i.Themes, "var-init"), t = cc11001100_hook("t", "", "var-init"), n = cc11001100_hook("n", s.theme(), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e.length; o++) {
              var a = cc11001100_hook("a", e[o], "var-init");
              t += cc11001100_hook("t", "<li ", "assign"), n == o && (t += cc11001100_hook("t", "class='cur'", "assign")), t += cc11001100_hook("t", " index=" + o, "assign"), t += cc11001100_hook("t", " style='", "assign"), a.backgroundColor && (t += cc11001100_hook("t", "background:" + a.backgroundColor + ";", "assign")), a.color && (t += cc11001100_hook("t", "color:" + a.color, "assign")), t += cc11001100_hook("t", "' ", "assign"), t += cc11001100_hook("t", " isaria=true", "assign"), t += cc11001100_hook("t", ">" + a.displayName, "assign"), t += cc11001100_hook("t", "<i></i></li>", "assign");
            }
            new r(".Set-theme").html(t);
          }(), v(), function () {
            try {
              new r(".ariaExitOldFixed").on("click", O), new r(".ariaSoundBtn").on("click", F), new r(".ariaThemeBtn").on("click", A), new r(".ariavoiceMask").on("click", _), new r(".ariaiconmobileconfig1").on("click", k), new r(".sharebg,.ariaiconcloseDiv").on("click", C), new r(".ariaiconmobileExit1").on("click", O), new r(".menu-list-ul li").on("click", x), new r(".Set-font label").on("click", w), new r(".Set-speech-speed li").on("click", y), new r(".Set-eye-protection-list li").on("click", b), new r(".Set-theme li").on("click", S);
            } catch (e) {}
          }(), d.setBtn(!0), e();
        }));
      });
    },
    createStartButton: function (e) {
      if (top == self && (void 0 === e && (e = cc11001100_hook("e", {}, "assign")), e.src || (e.src = cc11001100_hook("e.src", i.road + "public/images/oldfixed.png", "assign")), e.height || (e.height = cc11001100_hook("e.height", 40, "assign")), e.width || (e.width = cc11001100_hook("e.width", 100, "assign")), 0 == new r("#ariaOldFixedBtn").length)) {
        var t = cc11001100_hook("t", ' <div class="ariaOldFixedbtnDiv skipAutoFix" style="position: fixed; right: 0; bottom: 15%; width: 38%; z-index: 99999">', "var-init");
        t += cc11001100_hook("t", ' <img src="' + i.road + 'public/images/t.png"  id="ariaOldFixedClose" aria-label="收缩关怀版" style="width: 25%;transition:float 300ms;" tabindex="0" />', "assign"), t += cc11001100_hook("t", '<img src="' + i.road + 'public/images/o.png" alt="关怀版" id="ariaOldFixedBtn" style="width: 75%; vertical-align: top" class="guana" tabindex="-1" />', "assign"), t += cc11001100_hook("t", '<div style="clear: both"></div>', "assign"), t += cc11001100_hook("t", "   </div>", "assign"), new r(document.body).append(t), new r("#ariaOldFixedClose").on("click", function (e) {
          "true" == this.getAttribute("close") ? (this.setAttribute("close", "false"), document.getElementById("ariaOldFixedBtn").style.display = cc11001100_hook("document.getElementById(\"ariaOldFixedBtn\").style.display", "inline-block", "assign"), this.style.float = cc11001100_hook("this.style.float", "none", "assign"), this.setAttribute("aria-label", "收缩关怀版按钮"), this.src = cc11001100_hook("this.src", i.road + "public/images/t.png", "assign")) : (this.setAttribute("close", "true"), document.getElementById("ariaOldFixedBtn").style.display = cc11001100_hook("document.getElementById(\"ariaOldFixedBtn\").style.display", "none", "assign"), this.style.float = cc11001100_hook("this.style.float", "right", "assign"), this.src = cc11001100_hook("this.src", i.road + "public/images/t1.png", "assign"), this.setAttribute("aria-label", "展开关怀版按钮"));
        }), new r("#ariaOldFixedBtn").on("click", function (e) {
          window[window.ariaSdkName].start();
        });
      }
    },
    mobileRemoveListener: cc11001100_hook("mobileRemoveListener", T, "object-key-init"),
    ariaExitOldFixed: cc11001100_hook("ariaExitOldFixed", E, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init"),
    a = cc11001100_hook("a", n(4), "var-init"),
    s = cc11001100_hook("s", !1, "var-init");
  function l(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", (t = cc11001100_hook("t", new r(t), "assign")).attr("onclick"), "var-init");
    e ? ("none" == t.attr("mobilehide") && t.addClass("ariaHide"), "hidden" == t.attr("mobilehide") && t.addClass("ariaHidevisibility"), "false" != t.attr("clickhide") && t.addClass("ariaHide"), t.attr("mobilehide") || t.attr("clickhide") || !t.attr("closeText") || t.html(t.attr("closeText")), n && (n.indexOf("oldFixed") > -1 ? t.attr("onclick", "aria.oldFixedEnd()") : t.attr("onclick", "aria.end()"))) : (t.removeClass("ariaHide").removeClass("ariaHidevisibility"), t.attr("mobilehide") || t.attr("clickhide") || !t.attr("openText") || t.html(t.attr("openText")), n && (n.indexOf("oldFixed") > -1 ? t.attr("onclick", "aria.oldFixedStart()") : t.attr("onclick", "aria.start()")));
  }
  function c(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n;
    n = cc11001100_hook("n", a.oldFixedStatus ? new r("[onclick^='aria.oldFixed']") : new r("#cniil_wza,#cnwza,.cnwza,[onclick^='aria.start()'],[onclick^='aria.end()']"), "assign"), l(e, t), o.wapUseConfigPage || (e ? (new r(".ariaOldFixedbtnDiv").addClass("ariaHide"), new r("#ariaOldFixedClose").length > 0 && new r("#ariaOldFixedClose").click()) : new r(".ariaOldFixedbtnDiv").removeClass("ariaHide")), i.each(n, function (t, n) {
      l(e, n);
    });
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.target.getAttribute("onclick") || ("true" == document.body.getAttribute("aria-status") ? aria && "function" == typeof aria.end && (c(!1), aria.end()) : aria && "function" == typeof aria.start && (c(!0), aria.start(), a.status(!0)));
  }
  e.exports = cc11001100_hook("e.exports", {
    setBtn: cc11001100_hook("setBtn", c, "object-key-init"),
    addListenBtn: function () {
      s || (new r("#cniil_wza,#cnwza,.cnwza").on("click", u), s = cc11001100_hook("s", !0, "assign"));
    },
    removeListenBtn: function () {
      s = cc11001100_hook("s", !1, "assign"), new r("#cniil_wza,#cnwza,.cnwza").off("click", u);
    },
    mobileHide: function () {
      for (var e = cc11001100_hook("e", document.querySelectorAll("[mobilehide]"), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) {
        var n = cc11001100_hook("n", e[t], "var-init");
        try {
          var r = cc11001100_hook("r", n.getAttribute("mobilehide"), "var-init");
          "none" == r && (n.style.display = cc11001100_hook("n.style.display", "none", "assign")), "hidden" == r && (n.style.visibility = cc11001100_hook("n.style.visibility", "hidden", "assign"));
        } catch (i) {}
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(2), "var-init"),
    o = cc11001100_hook("o", n(5), "var-init"),
    a = cc11001100_hook("a", n(19), "var-init");
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new r(e.target), "var-init");
    o.play(t.aria.lastText);
  }
  var l = cc11001100_hook("l", null, "var-init");
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    l && clearTimeout(l), l = cc11001100_hook("l", setTimeout(function () {
      i.status && a.start();
    }, 100), "assign");
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      if (top == self) {
        var t = function (e) {
          var t = cc11001100_hook("t", history[e], "var-init"),
            n = cc11001100_hook("n", new Event(e), "var-init");
          return function () {
            var e = cc11001100_hook("e", t.apply(this, arguments), "var-init");
            return n.arguments = cc11001100_hook("n.arguments", arguments, "assign"), window.dispatchEvent(n), e;
          };
        };
        history.pushState = cc11001100_hook("history.pushState", t("pushState"), "assign"), history.replaceState = cc11001100_hook("history.replaceState", t("replaceState"), "assign"), window.addEventListener("pushState", c), window.addEventListener("replaceState", c), window.addEventListener("popstate", c), window.addEventListener("hashchange", c), new r(document).on("change", "*", s);
      }
    },
    end: function () {
      window.removeEventListener("popstate", c), window.removeEventListener("pushState", c), window.removeEventListener("replaceState", c), window.removeEventListener("hashchange", c), new r(document).off("change", "*", s);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(4), "var-init"),
    i = cc11001100_hook("i", n(2), "var-init"),
    o = cc11001100_hook("o", n(0), "var-init"),
    a = cc11001100_hook("a", n(3), "var-init"),
    s = cc11001100_hook("s", n(6), "var-init"),
    l = cc11001100_hook("l", n(24), "var-init"),
    c = cc11001100_hook("c", n(9), "var-init"),
    u = cc11001100_hook("u", n(26), "var-init"),
    d = cc11001100_hook("d", n(43), "var-init"),
    f = cc11001100_hook("f", n(45), "var-init");
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.data && (window.top != self ? function (e) {
      if (!e) return;
      var t = cc11001100_hook("t", r.theme(), "var-init"),
        n = cc11001100_hook("n", i.status, "var-init");
      null != e.theme && r.theme(e.theme);
      null != e.oldFixedStatus && (r.oldFixedStatus = cc11001100_hook("r.oldFixedStatus", e.oldFixedStatus, "assign"));
      null != e.status && r.status(e.status);
      null != e.voiceEnable && (i.voice.enable = cc11001100_hook("i.voice.enable", e.voiceEnable, "assign"));
      null != e.voiceRate && (i.voice.rate = cc11001100_hook("i.voice.rate", e.voiceRate, "assign"));
      null != e.fontScale && r.fontScale(e.fontScale);
      null != e.mode && u.setMode(e.mode);
      null != e.theme && t != e.theme && i.status && c.doEventForce(self.document);
      null != e.fontScale && i.status && s.setSettingTheme(self.document);
      null != e.mode && i.status && c.doEventForce(self.document);
      null != e.status && (e.status ? (e.oldFixedStart && l.start(self.document), n != e.status && (o.isMobile() ? f.IframeStart(self.document) : d.start(self.document))) : (e.oldFixedStatus, window[window.ariaSdkName].end()));
    }(e.data.aria) : "AriaQueryData" == e.data.aria && g());
  }
  function h() {
    var e = cc11001100_hook("e", {}, "var-init");
    return e.status = cc11001100_hook("e.status", r.status(), "assign"), e.oldFixedStatus = cc11001100_hook("e.oldFixedStatus", r.oldFixedStatus, "assign"), e.theme = cc11001100_hook("e.theme", r.theme(), "assign"), e.voiceEnable = cc11001100_hook("e.voiceEnable", !!i.voice && i.voice.enable, "assign"), e.voiceRate = cc11001100_hook("e.voiceRate", i.voice ? i.voice.rate : 1, "assign"), e.fontScale = cc11001100_hook("e.fontScale", r.fontScale(), "assign"), e;
  }
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    e = cc11001100_hook("e", e || h(), "assign"), a.getAllCorsWin(function (t) {
      t.postMessage({
        aria: cc11001100_hook("aria", e, "object-key-init")
      }, "*");
    });
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function () {
      self.addEventListener("message", p), window.top != window.self && top.postMessage({
        aria: cc11001100_hook("aria", "AriaQueryData", "object-key-init")
      }, "*");
    },
    end: function () {
      self.removeEventListener("message", p);
    },
    getMessageData: cc11001100_hook("getMessageData", h, "object-key-init"),
    sendMessage: cc11001100_hook("sendMessage", g, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(22), "var-init"),
    o = cc11001100_hook("o", n(0), "var-init"),
    a = cc11001100_hook("a", n(16), "var-init"),
    s = cc11001100_hook("s", n(75), "var-init"),
    l = cc11001100_hook("l", n(46), "var-init"),
    c = cc11001100_hook("c", n(76), "var-init"),
    u = cc11001100_hook("u", n(77), "var-init"),
    d = cc11001100_hook("d", n(79), "var-init"),
    f = cc11001100_hook("f", n(80), "var-init"),
    p = cc11001100_hook("p", n(82), "var-init"),
    h = cc11001100_hook("h", n(83), "var-init"),
    g = cc11001100_hook("g", n(14), "var-init"),
    m = cc11001100_hook("m", n(31), "var-init"),
    v = function (e, t) {
      return new r(e, t);
    };
  r.prototype = cc11001100_hook("r.prototype", v.prototype = cc11001100_hook("v.prototype", {}, "assign"), "assign"), v.extend = cc11001100_hook("v.extend", i, "assign"), v.prototype.extend = cc11001100_hook("v.prototype.extend", i, "assign"), v.extend(o), v.extend(a), v.cookies = cc11001100_hook("v.cookies", m, "assign"), v.store = cc11001100_hook("v.store", g, "assign"), v.prototype.extend(s), v.prototype.extend(l), v.prototype.extend(c), v.prototype.extend(u), v.prototype.extend(d), v.prototype.extend(f), v.prototype.extend(p), v.prototype.extend(h), e.exports = cc11001100_hook("e.exports", v, "assign");
}, function (e, t, n) {
  var r,
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(68), "var-init"),
    a = cc11001100_hook("a", n(72), "var-init"),
    s = cc11001100_hook("s", n(73), "var-init"),
    l = cc11001100_hook("l", n(2), "var-init"),
    c = cc11001100_hook("c", n(74), "var-init"),
    u = cc11001100_hook("u", n(3), "var-init");
  e.exports = cc11001100_hook("e.exports", function (e, t) {
    function n(n) {
      cc11001100_hook("n", n, "function-parameter");
      if (n && n.length > 0) {
        n = cc11001100_hook("n", n.split(","), "assign");
        for (var r = cc11001100_hook("r", "", "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) {
          var o = cc11001100_hook("o", n[i], "var-init");
          o.length > 0 && (r += cc11001100_hook("r", "," + o, "assign"));
        }
        r.length > 0 && (r = cc11001100_hook("r", r.substring(1, r.length), "assign"));
        var a = cc11001100_hook("a", e.find(r), "var-init");
        return 0 == a.length ? new t(r) : a;
      }
      return null;
    }
    function d(n) {
      cc11001100_hook("n", n, "function-parameter");
      if (!n || void 0 === n || 0 == n.length) return "";
      var r = cc11001100_hook("r", e.find(n), "var-init");
      if (0 == r.length && (r = cc11001100_hook("r", new t(e.parent()).find(n), "assign")), 0 == r.length && (r = cc11001100_hook("r", new t(n), "assign")), 0 == r.length) return "";
      var o = cc11001100_hook("o", "", "var-init");
      return i.each(r.nodeList, function (e, t) {
        o += cc11001100_hook("o", t.value || t.textContent, "assign"), o += cc11001100_hook("o", ",", "assign");
      }), o = cc11001100_hook("o", i.reMoveHtml(o), "assign");
    }
    return r || (r = cc11001100_hook("r", l.Language, "assign")), {
      get id() {
        var t = cc11001100_hook("t", e.attr("id"), "var-init");
        return t || (t = cc11001100_hook("t", i.genID(), "assign"), e.attr("id", t)), t;
      },
      get isCenterScale() {
        return "true" === e.ariaAttr("isCenterScale");
      },
      get canSetClass() {
        return "true" !== e.ariaAttr("skipall") && !(e.closest("[aria-skipall='true']").length > 0) && ("true" !== e.ariaAttr("skiptheme") || void 0);
      },
      get isContentText() {
        return "contentText" === e.attr("role") || e.closest("[role='contentText']").length > 0;
      },
      setFocusClass: function () {
        if (e.aria.canSetClass && 0 != e.length) {
          var n = cc11001100_hook("n", e, "var-init");
          new t(".ariafocus").removeClass("ariafocus"), u.getAll(document, function (e) {
            new t(e.body).find(".ariafocus").removeClass("ariafocus");
          }), 3 == e.firstNode.nodeType && (n = cc11001100_hook("n", e.parent(), "assign")), e.aria.atomic && (n = cc11001100_hook("n", new t(e.aria.atomicElem), "assign")), n.addClass("ariafocus");
        }
      },
      set id(t) {
        e.attr("id", t);
      },
      get regionType() {
        var t = cc11001100_hook("t", "true" === e.ariaAttr("region") ? e : e.closest("[aria-region=true]"), "var-init");
        return t.length > 0 ? t.ariaAttr("regiontype") : 0;
      },
      get isregion() {
        return "true" === e.ariaAttr("region") || !1;
      },
      get region() {
        return e.ariaAttr("region");
      },
      set region(t) {
        e.ariaAttr("region", t);
      },
      get regions() {
        return new t("[aria-region='true']");
      },
      get regionN() {
        var t = cc11001100_hook("t", e.aria.regionElem, "var-init"),
          n = cc11001100_hook("n", e.aria.regions, "var-init");
        if (!t) return n.firstNode;
        var r = cc11001100_hook("r", t.index(n.nodeList), "var-init");
        return r < n.length - 1 ? n[r + 1] : null;
      },
      get regionP() {
        var t = cc11001100_hook("t", e.aria.regionElem, "var-init"),
          n = cc11001100_hook("n", e.aria.regions, "var-init");
        if (!t) return n.firstNode;
        var r = cc11001100_hook("r", t.index(n.nodeList), "var-init");
        return r > 0 ? n[r - 1] : null;
      },
      get expandShowMethod() {
        var t = cc11001100_hook("t", e.ariaAttr("expandShowMethod"), "var-init");
        return "hover" == t && (t = cc11001100_hook("t", "mouseover", "assign")), t;
      },
      set expandShowMethod(t) {
        e.ariaAttr("expandShowMethod", t);
      },
      get regionElem() {
        return "true" == e.ariaAttr("region") ? e : new t(e.closest("[aria-region='true']"));
      },
      get nodeName() {
        if (0 === e.length) return null;
        try {
          var t = cc11001100_hook("t", e.firstNode.nodeName.toLowerCase(), "var-init");
          return [].indexOf.call(i.HtmlElemRoles.select, t) > -1 ? "select" : t;
        } catch (n) {}
      },
      get role() {
        return s.getRole(e);
      },
      set role(t) {
        e.attr("role", t);
      },
      get roleText() {
        return s.getRoleText(e);
      },
      get mainText() {
        return o.mainText(e.aria);
      },
      get descText() {
        return o.descText(e.aria);
      },
      get orientation() {
        return e.ariaAttr("orientation");
      },
      set orientation(t) {
        e.ariaAttr("orientation", t);
      },
      get errormessage() {
        return e.ariaAttr("errormessage") || e.attr("errormessage");
      },
      set errormessage(t) {
        e.ariaAttr("errormessage", t);
      },
      get description() {
        return e.ariaAttr("description");
      },
      set description(t) {
        e.ariaAttr("description", t);
      },
      get current() {
        return e.ariaAttr("current");
      },
      set current(t) {
        e.ariaAttr("current", t);
      },
      get modal() {
        return e.ariaAttr("modal");
      },
      set modal(t) {
        e.ariaAttr("modal", t);
      },
      get pressed() {
        return e.ariaAttr("pressed");
      },
      set pressed(t) {
        e.ariaAttr("pressed", t);
      },
      get valueText() {
        return a(e);
      },
      set valueText(t) {
        e.ariaAttr("valuetext", t), e.val(t), e.text(t);
      },
      get valuenow() {
        return e.ariaAttr("valuenow") || e.val();
      },
      set valuenow(t) {
        e.ariaAttr("valuenow", t), e.val(t);
      },
      get valuemin() {
        return e.ariaAttr("valuemin") || e.attr("min");
      },
      get valueminText() {
        return this.valuemin ? r.min + this.valuemin : null;
      },
      set valuemin(t) {
        e.ariaAttr("valuemin", t), e.attr("min", t);
      },
      get valuemax() {
        return e.ariaAttr("valuemax") || e.attr("max");
      },
      set valuemax(t) {
        e.ariaAttr("valuemax", t), e.attr("max", t);
      },
      get valuemaxText() {
        return this.valuemax ? r.max + this.valuemax : null;
      },
      get value() {
        return e.val();
      },
      get text() {
        return e.text();
      },
      get sort() {
        return e.ariaAttr("sort") || e.attr("sort");
      },
      set sort(t) {
        e.ariaAttr("sort", t), e.attr("sort", t);
      },
      get relevant() {
        return e.ariaAttr("relevant");
      },
      set relevant(t) {
        e.ariaAttr("relevant", t);
      },
      get posinset() {
        return i.formatInt(e.ariaAttr("posinset"));
      },
      set posinset(t) {
        e.ariaAttr("posinset", t);
      },
      get owns() {
        return e.ariaAttr("owns");
      },
      set owns(t) {
        e.ariaAttr("owns", t);
      },
      get ownsfor() {
        return e.ariaAttr("ownsfor");
      },
      set ownsfor(t) {
        e.ariaAttr("ownsfor", t);
      },
      get live() {
        return e.ariaAttr("live");
      },
      set live(t) {
        e.ariaAttr("live", t);
      },
      get computedName() {
        return e.attr("computedName");
      },
      get describedbyText() {
        return d(e.ariaAttr("describedby"));
      },
      get describedby() {
        return n(e.ariaAttr("describedby"));
      },
      set describedby(t) {
        e.ariaAttr("describedby", t);
      },
      get labelledbyText() {
        return e.ariaAttr("labelledbyText");
      },
      get described() {
        return e.ariaAttr("described");
      },
      set described(t) {
        e.ariaAttr("described", t);
      },
      get labelledby() {
        return d(e.ariaAttr("labelledby") || e.attr("labelled-by"));
      },
      set labelledby(t) {
        e.ariaAttr("labelledby", t);
      },
      get toolTipText() {
        return e.attr("data-tooltip-text");
      },
      get labelforText() {
        var n = cc11001100_hook("n", e.attr("id"), "var-init");
        if (!n || 0 === n.length) return null;
        var r = cc11001100_hook("r", new t("label[for='" + n + "']"), "var-init");
        return r.nodeList.length > 0 ? r.text() : null;
      },
      get labelfor() {
        return e.attr("for");
      },
      set labelfor(t) {
        e.attr("for", t);
      },
      get labelWrapperText() {
        if (0 === e.nodeList.length) return null;
        if ("SELECT" != e.aria.nodeName) {
          var n = cc11001100_hook("n", e.nodeList[0], "var-init");
          if (!n.labels || 0 === n.labels.length) return null;
          var r = cc11001100_hook("r", "", "var-init"),
            i = cc11001100_hook("i", new t(n.labels[0]).aria.descText, "var-init");
          i && (r += cc11001100_hook("r", i, "assign"));
          try {
            r += cc11001100_hook("r", v.innerHTML, "assign");
          } catch (o) {}
          return r;
        }
      },
      get placeholder() {
        return e.attr("placeholder");
      },
      set placeholder(t) {
        e.attr("placeholder", t);
      },
      get title() {
        return e.attr("title");
      },
      set title(t) {
        e.attr("title", t);
      },
      get alt() {
        return e.attr("alt");
      },
      set alt(t) {
        e.attr("alt", t);
      },
      get label() {
        return e.ariaAttr("label");
      },
      set label(t) {
        e.ariaAttr("label", t);
      },
      get grabbed() {
        return e.ariaAttr("grabbed");
      },
      set grabbed(t) {
        e.ariaAttr("grabbed", t);
      },
      get flowto() {
        return n(e.ariaAttr("flowto"));
      },
      set flowto(t) {
        e.ariaAttr("flowto", t);
      },
      get dropeffect() {
        return e.ariaAttr("dropeffect");
      },
      set dropeffect(t) {
        e.ariaAttr("dropeffect", t);
      },
      get controls() {
        return n(e.ariaAttr("controls"));
      },
      get nextFocus() {
        return c.nextFocus1(e, t);
      },
      get preFocus() {
        return c.preFocus1(e, t);
      },
      get firstFocus() {
        return c.firstFocus1(e, t);
      },
      get lastFocus() {
        return c.lastFocus1(e, t);
      },
      set controls(t) {
        e.ariaAttr("controls", t);
      },
      get busy() {
        return i.strToObj(e.ariaAttr("busy"));
      },
      set busy(t) {
        e.ariaAttr("busy", t);
      },
      get autocomplete() {
        return e.ariaAttr("autocomplete");
      },
      set autocomplete(t) {
        "none" === t ? e.attr("autocomplete", "off") : e.attr("autocomplete", "on"), e.ariaAttr("autocomplete", t);
      },
      get atomic() {
        return e.closest("[aria-atomic='true']").length > 0 || "true" == e.ariaAttr("atomic");
      },
      set atomic(t) {
        e.ariaAttr("atomic", t);
      },
      get atomicElem() {
        return "true" == e.ariaAttr("atomic") ? e : e.closest("[aria-atomic='true']");
      },
      get atomicText() {
        var t = cc11001100_hook("t", "true" == e.ariaAttr("atomic") ? e : e.closest("[aria-atomic='true']"), "var-init");
        return t ? e.aria.label || e.aria.labelledby || t.textAll(!0) : null;
      },
      get activedescendant() {
        return e.ariaAttr("activedescendant");
      },
      set activedescendant(t) {
        e.ariaAttr("activedescendant", t);
      },
      get hidden() {
        return i.strToObj(e.ariaAttr("hidden") || e.isHidden());
      },
      set hidden(t) {
        e.ariaAttr("hidden", t), t ? e.hidden() : e.show();
      },
      get expanded() {
        return i.strToObj(e.ariaAttr("expanded"));
      },
      set expanded(t) {
        e.ariaAttr("expanded", t), e.attr("expanded", t);
      },
      get checked() {
        return ["checkbox", "radiobox", "radio", "switch"].indexOf(e.aria.role) > -1 ? e.firstNode.checked || !1 : i.strToObj(e.attr("checked") || e.ariaAttr("checked"));
      },
      set checked(t) {
        t ? (e.ariaAttr("checked", t), e.attr("checked", t)) : (e.removeAttr("checked"), e.removeAttr("aria-checked"));
      },
      get haspopup() {
        return i.strToObj(e.attr("haspopup") || e.ariaAttr("haspopup"));
      },
      set haspopup(t) {
        e.ariaAttr("haspopup", t), e.attr("haspopup", t);
      },
      get disabled() {
        return e.is("disabled") || i.strToObj(e.attr("disabled") || e.ariaAttr("disabled"));
      },
      set disabled(t) {
        e.ariaAttr("disabled", t), e.attr("disabled", t);
      },
      get invalid() {
        return i.strToObj(e.ariaAttr("invalid"));
      },
      set invalid(t) {
        e.ariaAttr("invalid", t);
      },
      get selected() {
        return i.strToObj(e.is("selected") || e.attr("selected") || e.ariaAttr("selected"));
      },
      set selected(t) {
        e.ariaAttr("selected", t), e.attr("selected", t);
      },
      get level() {
        var t = cc11001100_hook("t", e.ariaAttr("level"), "var-init");
        if (!t) {
          var n = cc11001100_hook("n", this.nodeName, "var-init");
          i.HtmlElemRoles.heading.indexOf(n) > -1 && (t = cc11001100_hook("t", n.replace("h", ""), "assign"));
        }
        return i.strToObj(t);
      },
      set level(t) {
        e.ariaAttr("level", t);
      },
      get multiselectable() {
        return i.strToObj(e.ariaAttr("multiselectable"));
      },
      set multiselectable(t) {
        e.ariaAttr("multiselectable", t);
      },
      get required() {
        return i.strToObj(e.ariaAttr("required") || e.attr("required"));
      },
      set required(t) {
        e.ariaAttr("required", t), e.attr("required", t);
      },
      get readonly() {
        return e.is("readonly") || i.strToObj(e.ariaAttr("readonly") || e.attr("readonly"));
      },
      set readonly(t) {
        e.ariaAttr("readonly", t), e.attr("readonly", t);
      },
      get multiLine() {
        return i.strToObj(e.ariaAttr("multiline") || e.attr("multiline"));
      },
      set multiLine(t) {
        e.ariaAttr("multiline", t), e.attr("multiline", t);
      },
      get focusable() {
        if (e.isHidden()) return !1;
        var t = cc11001100_hook("t", e.firstNode, "var-init");
        if (!t) return !1;
        if (1 == t.nodeType) {
          if ("0" == t.getAttribute("tabindex")) return !0;
          if ("INPUT" == t.tagName) {
            var n = cc11001100_hook("n", t.getAttribute("type"), "var-init");
            if (!n || "hidden" != n) return !0;
          }
          if ("A" == t.tagName && t.getAttribute("href") || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || "BUTTON" == t.tagName) return !0;
        }
        return !1;
      },
      set focusable(t) {
        t || (t = cc11001100_hook("t", 0, "assign")), e.attr("tabindex", t);
      },
      get skiptheme() {
        return "true" == e.ariaAttr("skiptheme") || e.closest("[aria-skiptheme='true']").length > 0 || "true" == e.ariaAttr("skipall") || e.closest("[aria-skipall='true']").length > 0;
      },
      get skipall() {
        return "true" == e.ariaAttr("skipall") || e.closest("[aria-skipall='true']").length > 0;
      },
      get skipscale() {
        return "true" == e.ariaAttr("skipscale") || e.closest("[aria-skipscale='true']").length > 0 || "true" == e.ariaAttr("skipall") || e.closest("[aria-skipall='true']").length > 0;
      },
      get isDialog() {
        return [].indexOf.call(i.HtmlElemRoles.dialog, e.aria.role) > -1 || e.closest(i.arrToSizzle(i.HtmlElemRoles.dialog)).length > 0;
      },
      get dialog() {
        if ([].indexOf.call(i.HtmlElemRoles.dialog, e.aria.role) > -1) return e;
        var t = cc11001100_hook("t", e.closest(i.arrToSizzle(i.HtmlElemRoles.dialog)), "var-init");
        return t.length > 0 ? t : null;
      },
      get action() {
        return e.ariaAttr("action");
      },
      get lastText() {
        try {
          return o.lastDesc(e);
        } catch (t) {}
        return "";
      },
      get tabindex() {
        return e.attr("tabindex");
      },
      set tabindex(t) {
        null != t ? e.attr("tabindex", t) : e.removeAttr("tabindex");
      },
      get enterownsmethod() {
        var t = cc11001100_hook("t", e.ariaAttr("enterownsmethod"), "var-init");
        return "Ctrl+Enter" == t ? "1" : t;
      },
      set enterownsmethod(t) {
        e.ariaAttr("enterownsmethod", t);
      },
      get eschide() {
        return e.ariaAttr("eschide");
      }
    };
  }, "assign");
}, function (e, t, n) {
  (function (e) {
    (function (t) {
      function n(e) {
        cc11001100_hook("e", e, "function-parameter");
        return "function" == typeof e;
      }
      function r(e, t, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var r = cc11001100_hook("r", {
          value: cc11001100_hook("value", n, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          configurable: cc11001100_hook("configurable", !0, "object-key-init")
        }, "var-init");
        Object.defineProperty(e, t, r);
      }
      function i(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (null === e || e === t) throw TypeError();
        return Object(e);
      }
      function o(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return i(e)[t];
      }
      function a(e, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var i = cc11001100_hook("i", o(e, r), "var-init");
        if (null === i || i === t) return t;
        if (!1 === n(i)) throw new TypeError("Method not callable: " + r);
        return i;
      }
      function s(e) {
        cc11001100_hook("e", e, "function-parameter");
        switch (typeof e) {
          case "undefined":
            return "undefined";
          case "boolean":
            return "boolean";
          case "number":
            return "number";
          case "string":
            return "string";
          case "symbol":
            return "symbol";
          default:
            return null === e ? "null" : "Symbol" in this && e instanceof this.Symbol ? "symbol" : "object";
        }
      }
      function l(e) {
        cc11001100_hook("e", e, "function-parameter");
        return "object" === s(e) && "function" == typeof e && !!e.prototype;
      }
      function c(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return e[t];
      }
      function u(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", c(e, "prototype"), "var-init");
        return "object" !== s(n) && (n = cc11001100_hook("n", t, "assign")), n;
      }
      function d(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", arguments[2] || {}, "var-init"),
          r = cc11001100_hook("r", u(e, t), "var-init"),
          i = cc11001100_hook("i", Object.create(r), "var-init");
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && Object.defineProperty(i, o, {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          value: cc11001100_hook("value", n[o], "object-key-init")
        });
        return i;
      }
      function f(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", arguments.length > 2 ? arguments[2] : e, "var-init"),
          n = cc11001100_hook("n", arguments.length > 1 ? arguments[1] : [], "var-init");
        if (!l(e)) throw new TypeError("F must be a constructor.");
        if (!l(t)) throw new TypeError("newTarget must be a constructor.");
        if (t === e) return new (Function.prototype.bind.apply(e, [null].concat(n)))();
        var r = cc11001100_hook("r", d(t, Object.prototype), "var-init");
        return h(e, r, n);
      }
      function p(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (1 / e == -Infinity && (e = cc11001100_hook("e", 0, "assign")), e > Math.pow(2, 32) - 1) throw new RangeError("Invalid array length");
        var t = cc11001100_hook("t", [], "var-init");
        return t.length = cc11001100_hook("t.length", e, "assign"), t;
      }
      function h(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var r = cc11001100_hook("r", arguments.length > 2 ? arguments[2] : [], "var-init");
        if (!1 === n(e)) throw new TypeError(Object.prototype.toString.call(e) + "is not a function.");
        return e.apply(t, r);
      }
      function g(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", arguments.length > 1 ? arguments[1] : a(e, Symbol.iterator), "var-init"),
          n = cc11001100_hook("n", h(t, e), "var-init");
        if ("object" !== s(n)) throw new TypeError("bad iterator");
        var r = cc11001100_hook("r", o(n, "next"), "var-init"),
          i = cc11001100_hook("i", Object.create(null), "var-init");
        return i["[[Iterator]]"] = cc11001100_hook("i[\"[[Iterator]]\"]", n, "assign"), i["[[NextMethod]]"] = cc11001100_hook("i[\"[[NextMethod]]\"]", r, "assign"), i["[[Done]]"] = cc11001100_hook("i[\"[[Done]]\"]", !1, "assign"), i;
      }
      function m(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        if ("object" !== s(e["[[Iterator]]"])) throw new Error(Object.prototype.toString.call(e["[[Iterator]]"]) + "is not an Object.");
        var r = cc11001100_hook("r", e["[[Iterator]]"], "var-init"),
          i = cc11001100_hook("i", a(r, "return"), "var-init");
        if (i === t) return n;
        try {
          var o = cc11001100_hook("o", h(i, r), "var-init");
        } catch (c) {
          var l = cc11001100_hook("l", c, "var-init");
        }
        if (n) return n;
        if (l) throw l;
        if ("object" !== s(o)) throw new TypeError("Iterator's return method returned a non-object.");
        return n;
      }
      function v(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        if ("string" === t) var r = cc11001100_hook("r", ["toString", "valueOf"], "var-init");else r = cc11001100_hook("r", ["valueOf", "toString"], "assign");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < r.length; ++i) {
          var o = cc11001100_hook("o", c(e, r[i]), "var-init");
          if (n(o)) {
            var a = cc11001100_hook("a", h(o, e), "var-init");
            if ("object" !== s(a)) return a;
          }
        }
        throw new TypeError("Cannot convert to primitive.");
      }
      function b(e) {
        cc11001100_hook("e", e, "function-parameter");
        switch (s(e)) {
          case "symbol":
            throw new TypeError("Cannot convert a Symbol value to a string");
          case "object":
            return b(function (e) {
              var n = cc11001100_hook("n", arguments.length > 1 ? arguments[1] : t, "var-init");
              if ("object" === s(e)) {
                if (arguments.length < 2) var r = cc11001100_hook("r", "default", "var-init");else n === String ? r = cc11001100_hook("r", "string", "assign") : n === Number && (r = cc11001100_hook("r", "number", "assign"));
                var i = cc11001100_hook("i", "function" == typeof this.Symbol && "symbol" == typeof this.Symbol.toPrimitive ? a(e, this.Symbol.toPrimitive) : t, "var-init");
                if (i !== t) {
                  var o = cc11001100_hook("o", h(i, e, [r]), "var-init");
                  if ("object" !== s(o)) return o;
                  throw new TypeError("Cannot convert exotic object to primitive.");
                }
                return "default" === r && (r = cc11001100_hook("r", "number", "assign")), v(e, r);
              }
              return e;
            }(e, "string"));
          default:
            return String(e);
        }
      }
      function y(e) {
        cc11001100_hook("e", e, "function-parameter");
        return Boolean(e);
      }
      function w(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", function (e) {
          if (arguments.length < 2) var t = cc11001100_hook("t", h(e["[[NextMethod]]"], e["[[Iterator]]"]), "var-init");else t = cc11001100_hook("t", h(e["[[NextMethod]]"], e["[[Iterator]]"], [arguments[1]]), "assign");
          if ("object" !== s(t)) throw new TypeError("bad iterator");
          return t;
        }(e), "var-init");
        return !0 !== function (e) {
          if ("object" !== s(e)) throw new Error(Object.prototype.toString.call(e) + "is not an Object.");
          return y(c(e, "done"));
        }(t) && t;
      }
      function x(e) {
        cc11001100_hook("e", e, "function-parameter");
        if ("object" !== s(e)) throw new Error(Object.prototype.toString.call(e) + "is not an Object.");
        return c(e, "value");
      }
      function S(e, t, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var r = cc11001100_hook("r", {
          value: cc11001100_hook("value", n, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
          configurable: cc11001100_hook("configurable", !0, "object-key-init")
        }, "var-init");
        try {
          return Object.defineProperty(e, t, r), !0;
        } catch (i) {
          return !1;
        }
      }
      function C(e, t, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var r = cc11001100_hook("r", S(e, t, n), "var-init");
        if (!r) throw new TypeError("Cannot assign value `" + Object.prototype.toString.call(n) + "` to property `" + Object.prototype.toString.call(t) + "` on object `" + Object.prototype.toString.call(e) + "`");
        return r;
      }
      function k(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", Number(e), "var-init");
        return isNaN(t) ? 0 : 1 / t === Infinity || 1 / t == -Infinity || t === Infinity || t === -Infinity ? t : (t < 0 ? -1 : 1) * Math.floor(Math.abs(t));
      }
      function T(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", k(e), "var-init");
        return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1);
      }
      function A(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        if ("boolean" !== s(t)) throw new Error();
        var n = cc11001100_hook("n", {}, "var-init");
        return S(n, "value", e), S(n, "done", t), n;
      }
      function E(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return e === t;
      }
      function O(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return s(e) === s(t) && ("number" === s(e) ? !(!isNaN(e) || !isNaN(t)) || 1 / e === Infinity && 1 / t == -Infinity || 1 / e == -Infinity && 1 / t === Infinity || e === t : E(e, t));
      }
      "Symbol" in this && 0 === this.Symbol.length || function (e, t, n) {
        "use strict";

        var r,
          i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", "" + Math.random(), "var-init"),
          a = cc11001100_hook("a", "__symbol:", "var-init"),
          s = cc11001100_hook("s", a.length, "var-init"),
          l = cc11001100_hook("l", "__symbol@@" + o, "var-init"),
          c = cc11001100_hook("c", "defineProperty", "var-init"),
          u = cc11001100_hook("u", "defineProperties", "var-init"),
          d = cc11001100_hook("d", "getOwnPropertyNames", "var-init"),
          f = cc11001100_hook("f", "getOwnPropertyDescriptor", "var-init"),
          p = cc11001100_hook("p", "propertyIsEnumerable", "var-init"),
          h = cc11001100_hook("h", e.prototype, "var-init"),
          g = cc11001100_hook("g", h.hasOwnProperty, "var-init"),
          m = cc11001100_hook("m", h[p], "var-init"),
          v = cc11001100_hook("v", h.toString, "var-init"),
          b = cc11001100_hook("b", Array.prototype.concat, "var-init"),
          y = cc11001100_hook("y", e.getOwnPropertyNames ? e.getOwnPropertyNames(window) : [], "var-init"),
          w = cc11001100_hook("w", e[d], "var-init"),
          x = function (e) {
            if ("[object Window]" === v.call(e)) try {
              return w(e);
            } catch (t) {
              return b.call([], y);
            }
            return w(e);
          },
          S = cc11001100_hook("S", e[f], "var-init"),
          C = cc11001100_hook("C", e.create, "var-init"),
          k = cc11001100_hook("k", e.keys, "var-init"),
          T = cc11001100_hook("T", e.freeze || e, "var-init"),
          A = cc11001100_hook("A", e[c], "var-init"),
          E = cc11001100_hook("E", e[u], "var-init"),
          O = cc11001100_hook("O", S(e, d), "var-init"),
          _ = function (e, t, n) {
            if (!g.call(e, l)) try {
              A(e, l, {
                enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
                configurable: cc11001100_hook("configurable", !1, "object-key-init"),
                writable: cc11001100_hook("writable", !1, "object-key-init"),
                value: {}
              });
            } catch (r) {
              e[l] = cc11001100_hook("e[l]", {}, "assign");
            }
            e[l]["@@" + t] = cc11001100_hook("e[l][\"@@\" + t]", n, "assign");
          },
          F = function (e, t) {
            var n = cc11001100_hook("n", C(e), "var-init");
            return x(t).forEach(function (e) {
              P.call(t, e) && z(n, e, t[e]);
            }), n;
          },
          N = function () {},
          M = function (e) {
            return e != l && !g.call(R, e);
          },
          I = function (e) {
            return e != l && g.call(R, e);
          },
          P = function (e) {
            var t = cc11001100_hook("t", "" + e, "var-init");
            return I(t) ? g.call(this, t) && this[l]["@@" + t] : m.call(this, e);
          },
          j = function (t) {
            var n = cc11001100_hook("n", {
              enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init"),
              get: cc11001100_hook("get", N, "object-key-init"),
              set: function (e) {
                r(this, t, {
                  enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
                  configurable: cc11001100_hook("configurable", !0, "object-key-init"),
                  writable: cc11001100_hook("writable", !0, "object-key-init"),
                  value: cc11001100_hook("value", e, "object-key-init")
                }), _(this, t, !0);
              }
            }, "var-init");
            try {
              A(h, t, n);
            } catch (i) {
              h[t] = cc11001100_hook("h[t]", n.value, "assign");
            }
            return T(R[t] = cc11001100_hook("R[t]", A(e(t), "constructor", B), "assign"));
          },
          L = function K() {
            var e = cc11001100_hook("e", arguments[0], "var-init");
            if (this instanceof K) throw new TypeError("Symbol is not a constructor");
            return j(a.concat(e || "", o, ++i));
          },
          R = cc11001100_hook("R", C(null), "var-init"),
          B = cc11001100_hook("B", {
            value: cc11001100_hook("value", L, "object-key-init")
          }, "var-init"),
          D = function (e) {
            return R[e];
          },
          z = function (e, t, n) {
            var i = cc11001100_hook("i", "" + t, "var-init");
            return I(i) ? (r(e, i, n.enumerable ? function (e) {
              var t = cc11001100_hook("t", C(e), "var-init");
              return t.enumerable = cc11001100_hook("t.enumerable", !1, "assign"), t;
            }(n) : n), _(e, i, !!n.enumerable)) : A(e, t, n), e;
          },
          U = function (e) {
            return x(e).filter(e === h ? function (e) {
              return function (t) {
                return g.call(e, l) && g.call(e[l], "@@" + t);
              };
            }(e) : I).map(D);
          };
        O.value = cc11001100_hook("O.value", z, "assign"), A(e, c, O), O.value = cc11001100_hook("O.value", U, "assign"), A(e, "getOwnPropertySymbols", O), O.value = cc11001100_hook("O.value", function (e) {
          return x(e).filter(M);
        }, "assign"), A(e, d, O), O.value = cc11001100_hook("O.value", function (e, t) {
          var n = cc11001100_hook("n", U(t), "var-init");
          return n.length ? k(t).concat(n).forEach(function (n) {
            P.call(t, n) && z(e, n, t[n]);
          }) : E(e, t), e;
        }, "assign"), A(e, u, O), O.value = cc11001100_hook("O.value", P, "assign"), A(h, p, O), O.value = cc11001100_hook("O.value", L, "assign"), A(n, "Symbol", O), O.value = cc11001100_hook("O.value", function (e) {
          var t = cc11001100_hook("t", a.concat(a, e, o), "var-init");
          return t in h ? R[t] : j(t);
        }, "assign"), A(L, "for", O), O.value = cc11001100_hook("O.value", function (e) {
          if (M(e)) throw new TypeError(e + " is not a symbol");
          return g.call(R, e) ? e.slice(2 * s, -o.length) : void 0;
        }, "assign"), A(L, "keyFor", O), O.value = cc11001100_hook("O.value", function (e, t) {
          var n = cc11001100_hook("n", S(e, t), "var-init");
          return n && I(t) && (n.enumerable = cc11001100_hook("n.enumerable", P.call(e, t), "assign")), n;
        }, "assign"), A(e, f, O), O.value = cc11001100_hook("O.value", function (e, t) {
          return 1 === arguments.length || void 0 === t ? C(e) : F(e, t);
        }, "assign"), A(e, "create", O);
        var H = cc11001100_hook("H", null === function () {
          return this;
        }.call(null), "var-init");
        O.value = cc11001100_hook("O.value", H ? function () {
          var e = cc11001100_hook("e", v.call(this), "var-init");
          return "[object String]" === e && I(this) ? "[object Symbol]" : e;
        } : function () {
          if (this === window) return "[object Null]";
          var e = cc11001100_hook("e", v.call(this), "var-init");
          return "[object String]" === e && I(this) ? "[object Symbol]" : e;
        }, "assign"), A(h, "toString", O), r = cc11001100_hook("r", function (e, t, n) {
          var r = cc11001100_hook("r", S(h, t), "var-init");
          delete h[t], A(e, t, n), e !== h && A(h, t, r);
        }, "assign");
      }(Object, 0, this), "Symbol" in this && "iterator" in this.Symbol || Object.defineProperty(Symbol, "iterator", {
        value: cc11001100_hook("value", Symbol("iterator"), "object-key-init")
      }), "Symbol" in this && "species" in this.Symbol || Object.defineProperty(Symbol, "species", {
        value: cc11001100_hook("value", Symbol("species"), "object-key-init")
      }), "Map" in this && function () {
        try {
          var e = cc11001100_hook("e", new Map([[1, 1], [2, 2]]), "var-init");
          return 2 === e.size && "Symbol" in this && "iterator" in Symbol && "function" == typeof e[Symbol.iterator];
        } catch (_) {
          return !1;
        }
      }() || function (e) {
        function i(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          if ("object" !== s(e)) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!0 !== e._es6Map) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
          var n = cc11001100_hook("n", Object.create(c), "var-init");
          return Object.defineProperty(n, "[[Map]]", {
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", e, "object-key-init")
          }), Object.defineProperty(n, "[[MapNextIndex]]", {
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", 0, "object-key-init")
          }), Object.defineProperty(n, "[[MapIterationKind]]", {
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", t, "object-key-init")
          }), n;
        }
        var o = cc11001100_hook("o", function () {
            try {
              var e = cc11001100_hook("e", {}, "var-init");
              return Object.defineProperty(e, "t", {
                configurable: cc11001100_hook("configurable", !0, "object-key-init"),
                enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
                get: function () {
                  return !0;
                },
                set: cc11001100_hook("set", t, "object-key-init")
              }), !!e.t;
            } catch (i) {
              return !1;
            }
          }(), "var-init"),
          a = cc11001100_hook("a", Symbol("undef"), "var-init"),
          l = function f() {
            if (!(this instanceof f)) throw new TypeError('Constructor Map requires "new"');
            var e = cc11001100_hook("e", d(this, f.prototype, {
              _keys: cc11001100_hook("_keys", [], "object-key-init"),
              _values: cc11001100_hook("_values", [], "object-key-init"),
              _size: cc11001100_hook("_size", 0, "object-key-init"),
              _es6Map: cc11001100_hook("_es6Map", !0, "object-key-init")
            }), "var-init");
            o || Object.defineProperty(e, "size", {
              configurable: cc11001100_hook("configurable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              value: cc11001100_hook("value", 0, "object-key-init")
            });
            var r = cc11001100_hook("r", arguments.length > 0 ? arguments[0] : t, "var-init");
            if (null === r || r === t) return e;
            var i = cc11001100_hook("i", e.set, "var-init");
            if (!n(i)) throw new TypeError("Map.prototype.set is not a function");
            try {
              for (var a = cc11001100_hook("a", g(r), "var-init");;) {
                var l = cc11001100_hook("l", w(a), "var-init");
                if (!1 === l) return e;
                var c = cc11001100_hook("c", x(l), "var-init");
                if ("object" !== s(c)) try {
                  throw new TypeError("Iterator value " + c + " is not an entry object");
                } catch (b) {
                  return m(a, b);
                }
                try {
                  var u = cc11001100_hook("u", c[0], "var-init"),
                    p = cc11001100_hook("p", c[1], "var-init");
                  i.call(e, u, p);
                } catch (y) {
                  return m(a, y);
                }
              }
            } catch (y) {
              if (Array.isArray(r) || "[object Arguments]" === Object.prototype.toString.call(r) || r.callee) {
                var h,
                  v = cc11001100_hook("v", r.length, "var-init");
                for (h = cc11001100_hook("h", 0, "assign"); h < v; h++) i.call(e, r[h][0], r[h][1]);
              }
            }
            return e;
          };
        Object.defineProperty(l, "prototype", {
          configurable: cc11001100_hook("configurable", !1, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          writable: cc11001100_hook("writable", !1, "object-key-init"),
          value: {}
        }), o ? Object.defineProperty(l, Symbol.species, {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          get: function () {
            return this;
          },
          set: cc11001100_hook("set", t, "object-key-init")
        }) : r(l, Symbol.species, l), r(l.prototype, "clear", function () {
          var e = cc11001100_hook("e", this, "var-init");
          if ("object" !== s(e)) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
          for (var n = cc11001100_hook("n", e._keys, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) e._keys[r] = cc11001100_hook("e._keys[r]", a, "assign"), e._values[r] = cc11001100_hook("e._values[r]", a, "assign");
          return this._size = cc11001100_hook("this._size", 0, "assign"), o || (this.size = cc11001100_hook("this.size", this._size, "assign")), t;
        }), r(l.prototype, "constructor", l), r(l.prototype, "delete", function (e) {
          var t = cc11001100_hook("t", this, "var-init");
          if ("object" !== s(t)) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
          if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
          for (var n = cc11001100_hook("n", t._keys, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) if (t._keys[r] !== a && O(t._keys[r], e)) return this._keys[r] = cc11001100_hook("this._keys[r]", a, "assign"), this._values[r] = cc11001100_hook("this._values[r]", a, "assign"), this._size = cc11001100_hook("this._size", --this._size, "assign"), o || (this.size = cc11001100_hook("this.size", this._size, "assign")), !0;
          return !1;
        }), r(l.prototype, "entries", function () {
          return i(this, "key+value");
        }), r(l.prototype, "forEach", function (e) {
          var r = cc11001100_hook("r", this, "var-init");
          if ("object" !== s(r)) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(r));
          if (!0 !== r._es6Map) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(r));
          if (!n(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
          if (arguments[1]) var i = cc11001100_hook("i", arguments[1], "var-init");
          for (var o = cc11001100_hook("o", r._keys, "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < o.length; l++) r._keys[l] !== a && r._values[l] !== a && e.call(i, r._values[l], r._keys[l], r);
          return t;
        }), r(l.prototype, "get", function (e) {
          var n = cc11001100_hook("n", this, "var-init");
          if ("object" !== s(n)) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(n));
          if (!0 !== n._es6Map) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(n));
          for (var r = cc11001100_hook("r", n._keys, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) if (n._keys[i] !== a && O(n._keys[i], e)) return n._values[i];
          return t;
        }), r(l.prototype, "has", function (e) {
          var t = cc11001100_hook("t", this, "var-init");
          if ("object" != typeof t) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
          if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
          for (var n = cc11001100_hook("n", t._keys, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) if (t._keys[r] !== a && O(t._keys[r], e)) return !0;
          return !1;
        }), r(l.prototype, "keys", function () {
          return i(this, "key");
        }), r(l.prototype, "set", function (e, t) {
          var n = cc11001100_hook("n", this, "var-init");
          if ("object" !== s(n)) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(n));
          if (!0 !== n._es6Map) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(n));
          for (var r = cc11001100_hook("r", n._keys, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) if (n._keys[i] !== a && O(n._keys[i], e)) return n._values[i] = cc11001100_hook("n._values[i]", t, "assign"), n;
          1 / e == -Infinity && (e = cc11001100_hook("e", 0, "assign"));
          var l = cc11001100_hook("l", {}, "var-init");
          return l["[[Key]]"] = cc11001100_hook("l[\"[[Key]]\"]", e, "assign"), l["[[Value]]"] = cc11001100_hook("l[\"[[Value]]\"]", t, "assign"), n._keys.push(l["[[Key]]"]), n._values.push(l["[[Value]]"]), ++n._size, o || (n.size = cc11001100_hook("n.size", n._size, "assign")), n;
        }), o && Object.defineProperty(l.prototype, "size", {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          get: function () {
            var e = cc11001100_hook("e", this, "var-init");
            if ("object" !== s(e)) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
            if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
            for (var t = cc11001100_hook("t", e._keys, "var-init"), n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) e._keys[r] !== a && (n += cc11001100_hook("n", 1, "assign"));
            return n;
          },
          set: cc11001100_hook("set", t, "object-key-init")
        }), r(l.prototype, "values", function () {
          return i(this, "value");
        }), r(l.prototype, Symbol.iterator, l.prototype.entries), "name" in l || Object.defineProperty(l, "name", {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          writable: cc11001100_hook("writable", !1, "object-key-init"),
          value: cc11001100_hook("value", "Map", "object-key-init")
        });
        var c = cc11001100_hook("c", {}, "var-init");
        Object.defineProperty(c, "isMapIterator", {
          configurable: cc11001100_hook("configurable", !1, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          writable: cc11001100_hook("writable", !1, "object-key-init"),
          value: cc11001100_hook("value", !0, "object-key-init")
        }), r(c, "next", function () {
          var e = cc11001100_hook("e", this, "var-init");
          if ("object" !== s(e)) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!e.isMapIterator) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
          var n = cc11001100_hook("n", e["[[Map]]"], "var-init"),
            r = cc11001100_hook("r", e["[[MapNextIndex]]"], "var-init"),
            i = cc11001100_hook("i", e["[[MapIterationKind]]"], "var-init");
          if (n === t) return A(t, !0);
          if (!n._es6Map) throw new Error(Object.prototype.toString.call(n) + " has a [[MapData]] internal slot.");
          for (var o = cc11001100_hook("o", n._keys.length, "var-init"); r < o;) {
            var l = cc11001100_hook("l", Object.create(null), "var-init");
            if (l["[[Key]]"] = cc11001100_hook("l[\"[[Key]]\"]", n._keys[r], "assign"), l["[[Value]]"] = cc11001100_hook("l[\"[[Value]]\"]", n._values[r], "assign"), r += cc11001100_hook("r", 1, "assign"), e["[[MapNextIndex]]"] = cc11001100_hook("e[\"[[MapNextIndex]]\"]", r, "assign"), l["[[Key]]"] !== a) {
              if ("key" === i) var c = cc11001100_hook("c", l["[[Key]]"], "var-init");else if ("value" === i) c = cc11001100_hook("c", l["[[Value]]"], "assign");else {
                if ("key+value" !== i) throw new Error();
                c = cc11001100_hook("c", [l["[[Key]]"], l["[[Value]]"]], "assign");
              }
              return A(c, !1);
            }
          }
          return e["[[Map]]"] = cc11001100_hook("e[\"[[Map]]\"]", t, "assign"), A(t, !0);
        }), r(c, Symbol.iterator, function () {
          return this;
        });
        try {
          r(e, "Map", l);
        } catch (u) {
          e.Map = cc11001100_hook("e.Map", l, "assign");
        }
      }(this), "Set" in this && function () {
        var e = cc11001100_hook("e", new Set([1, 2]), "var-init");
        return 2 === e.size && "Symbol" in this && "iterator" in Symbol && "function" == typeof e[Symbol.iterator];
      }() || function (e) {
        function i(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          if ("object" != typeof e) throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!0 !== e._es6Set) throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e));
          var n = cc11001100_hook("n", Object.create(c), "var-init");
          return Object.defineProperty(n, "[[IteratedSet]]", {
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", e, "object-key-init")
          }), Object.defineProperty(n, "[[SetNextIndex]]", {
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", 0, "object-key-init")
          }), Object.defineProperty(n, "[[SetIterationKind]]", {
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", t, "object-key-init")
          }), n;
        }
        var o = cc11001100_hook("o", function () {
            try {
              var e = cc11001100_hook("e", {}, "var-init");
              return Object.defineProperty(e, "t", {
                configurable: cc11001100_hook("configurable", !0, "object-key-init"),
                enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
                get: function () {
                  return !0;
                },
                set: cc11001100_hook("set", t, "object-key-init")
              }), !!e.t;
            } catch (i) {
              return !1;
            }
          }(), "var-init"),
          a = cc11001100_hook("a", Symbol("undef"), "var-init"),
          s = function f() {
            if (!(this instanceof f)) throw new TypeError('Constructor Set requires "new"');
            var e = cc11001100_hook("e", d(this, f.prototype, {
              _values: cc11001100_hook("_values", [], "object-key-init"),
              _size: cc11001100_hook("_size", 0, "object-key-init"),
              _es6Set: cc11001100_hook("_es6Set", !0, "object-key-init")
            }), "var-init");
            o || Object.defineProperty(e, "size", {
              configurable: cc11001100_hook("configurable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              value: cc11001100_hook("value", 0, "object-key-init")
            });
            var r = cc11001100_hook("r", arguments.length > 0 ? arguments[0] : t, "var-init");
            if (null === r || r === t) return e;
            var i = cc11001100_hook("i", e.add, "var-init");
            if (!n(i)) throw new TypeError("Set.prototype.add is not a function");
            try {
              for (var a = cc11001100_hook("a", g(r), "var-init");;) {
                var s = cc11001100_hook("s", w(a), "var-init");
                if (!1 === s) return e;
                var l = cc11001100_hook("l", x(s), "var-init");
                try {
                  i.call(e, l);
                } catch (p) {
                  return m(a, p);
                }
              }
            } catch (p) {
              if (Array.isArray(r) || "[object Arguments]" === Object.prototype.toString.call(r) || r.callee) {
                var c,
                  u = cc11001100_hook("u", r.length, "var-init");
                for (c = cc11001100_hook("c", 0, "assign"); c < u; c++) i.call(e, r[c]);
              }
            }
            return e;
          };
        Object.defineProperty(s, "prototype", {
          configurable: cc11001100_hook("configurable", !1, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          writable: cc11001100_hook("writable", !1, "object-key-init"),
          value: {}
        }), o ? Object.defineProperty(s, Symbol.species, {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          get: function () {
            return this;
          },
          set: cc11001100_hook("set", t, "object-key-init")
        }) : r(s, Symbol.species, s), r(s.prototype, "add", function (e) {
          var t = cc11001100_hook("t", this, "var-init");
          if ("object" != typeof t) throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t));
          if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t));
          for (var n = cc11001100_hook("n", t._values, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) {
            var i = cc11001100_hook("i", n[r], "var-init");
            if (i !== a && O(i, e)) return t;
          }
          return 1 / e == -Infinity && (e = cc11001100_hook("e", 0, "assign")), t._values.push(e), this._size = cc11001100_hook("this._size", ++this._size, "assign"), o || (this.size = cc11001100_hook("this.size", this._size, "assign")), t;
        }), r(s.prototype, "clear", function () {
          var e = cc11001100_hook("e", this, "var-init");
          if ("object" != typeof e) throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!0 !== e._es6Set) throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
          for (var n = cc11001100_hook("n", e._values, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) n[r] = cc11001100_hook("n[r]", a, "assign");
          return this._size = cc11001100_hook("this._size", 0, "assign"), o || (this.size = cc11001100_hook("this.size", this._size, "assign")), t;
        }), r(s.prototype, "constructor", s), r(s.prototype, "delete", function (e) {
          var t = cc11001100_hook("t", this, "var-init");
          if ("object" != typeof t) throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t));
          if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t));
          for (var n = cc11001100_hook("n", t._values, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) {
            var i = cc11001100_hook("i", n[r], "var-init");
            if (i !== a && O(i, e)) return n[r] = cc11001100_hook("n[r]", a, "assign"), this._size = cc11001100_hook("this._size", --this._size, "assign"), o || (this.size = cc11001100_hook("this.size", this._size, "assign")), !0;
          }
          return !1;
        }), r(s.prototype, "entries", function () {
          return i(this, "key+value");
        }), r(s.prototype, "forEach", function (e) {
          var r = cc11001100_hook("r", this, "var-init");
          if ("object" != typeof r) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(r));
          if (!0 !== r._es6Set) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(r));
          if (!n(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
          if (arguments[1]) var i = cc11001100_hook("i", arguments[1], "var-init");
          for (var o = cc11001100_hook("o", r._values, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < o.length; s++) {
            var l = cc11001100_hook("l", o[s], "var-init");
            l !== a && e.call(i, l, l, r);
          }
          return t;
        }), r(s.prototype, "has", function (e) {
          var t = cc11001100_hook("t", this, "var-init");
          if ("object" != typeof t) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
          if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
          for (var n = cc11001100_hook("n", t._values, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) {
            var i = cc11001100_hook("i", n[r], "var-init");
            if (i !== a && O(i, e)) return !0;
          }
          return !1;
        });
        var l = function () {
          return i(this, "value");
        };
        r(s.prototype, "values", l), r(s.prototype, "keys", l), o && Object.defineProperty(s.prototype, "size", {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          get: function () {
            var e = cc11001100_hook("e", this, "var-init");
            if ("object" != typeof e) throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
            if (!0 !== e._es6Set) throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
            for (var t = cc11001100_hook("t", e._values, "var-init"), n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) t[r] !== a && (n += cc11001100_hook("n", 1, "assign"));
            return n;
          },
          set: cc11001100_hook("set", t, "object-key-init")
        }), r(s.prototype, Symbol.iterator, l), "name" in s || Object.defineProperty(s, "name", {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          writable: cc11001100_hook("writable", !1, "object-key-init"),
          value: cc11001100_hook("value", "Set", "object-key-init")
        });
        var c = cc11001100_hook("c", {}, "var-init");
        Object.defineProperty(c, "isSetIterator", {
          configurable: cc11001100_hook("configurable", !1, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          writable: cc11001100_hook("writable", !1, "object-key-init"),
          value: cc11001100_hook("value", !0, "object-key-init")
        }), r(c, "next", function () {
          var e = cc11001100_hook("e", this, "var-init");
          if ("object" != typeof e) throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!e.isSetIterator) throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
          var n = cc11001100_hook("n", e["[[IteratedSet]]"], "var-init"),
            r = cc11001100_hook("r", e["[[SetNextIndex]]"], "var-init"),
            i = cc11001100_hook("i", e["[[SetIterationKind]]"], "var-init");
          if (n === t) return A(t, !0);
          if (!n._es6Set) throw new Error(Object.prototype.toString.call(n) + " does not have [[SetData]] internal slot.");
          for (var o = cc11001100_hook("o", n._values, "var-init"), s = cc11001100_hook("s", o.length, "var-init"); r < s;) {
            var l = cc11001100_hook("l", o[r], "var-init");
            if (r += cc11001100_hook("r", 1, "assign"), e["[[SetNextIndex]]"] = cc11001100_hook("e[\"[[SetNextIndex]]\"]", r, "assign"), l !== a) return A("key+value" === i ? [l, l] : l, !1);
          }
          return e["[[IteratedSet]]"] = cc11001100_hook("e[\"[[IteratedSet]]\"]", t, "assign"), A(t, !0);
        }), r(c, Symbol.iterator, function () {
          return this;
        });
        try {
          r(e, "Set", s);
        } catch (u) {
          e.Set = cc11001100_hook("e.Set", s, "assign");
        }
      }(this), "from" in Array && function () {
        try {
          return Array.from({
            length: cc11001100_hook("length", -Infinity, "object-key-init")
          }), !0;
        } catch (_) {
          return !1;
        }
      }() || function () {
        function e(e) {
          cc11001100_hook("e", e, "function-parameter");
          return "string" == typeof e || "object" == typeof e && "[object String]" === o.call(e);
        }
        var o = cc11001100_hook("o", Object.prototype.toString, "var-init"),
          s = cc11001100_hook("s", String.prototype.match, "var-init");
        r(Array, "from", function (r) {
          var o = cc11001100_hook("o", this, "var-init"),
            u = cc11001100_hook("u", arguments.length > 1 ? arguments[1] : t, "var-init");
          if (u === t) var d = cc11001100_hook("d", !1, "var-init");else {
            if (!1 === n(u)) throw new TypeError(Object.prototype.toString.call(u) + " is not a function.");
            var v = cc11001100_hook("v", arguments.length > 2 ? arguments[2] : t, "var-init");
            if (v !== t) var y = cc11001100_hook("y", v, "var-init");else y = cc11001100_hook("y", t, "assign");
            d = cc11001100_hook("d", !0, "assign");
          }
          var S = cc11001100_hook("S", a(r, Symbol.iterator), "var-init");
          if (S !== t) {
            if (l(o)) var k = cc11001100_hook("k", f(o), "var-init");else k = cc11001100_hook("k", p(0), "assign");
            for (var A = cc11001100_hook("A", g(r, S), "var-init"), E = cc11001100_hook("E", 0, "var-init");;) {
              if (E >= Math.pow(2, 53) - 1) {
                var O = cc11001100_hook("O", new TypeError("Iteration count can not be greater than or equal 9007199254740991."), "var-init");
                return m(A, O);
              }
              var _ = cc11001100_hook("_", b(E), "var-init"),
                F = cc11001100_hook("F", w(A), "var-init");
              if (!1 === F) return k.length = cc11001100_hook("k.length", E, "assign"), k;
              var N = cc11001100_hook("N", x(F), "var-init");
              if (d) try {
                var M = cc11001100_hook("M", h(u, y, [N, E]), "var-init");
              } catch (L) {
                return m(A, L);
              } else M = cc11001100_hook("M", N, "assign");
              try {
                C(k, _, M);
              } catch (L) {
                return m(A, L);
              }
              E += cc11001100_hook("E", 1, "assign");
            }
          }
          if (e(r)) var I = cc11001100_hook("I", s.call(r, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [], "var-init");else I = cc11001100_hook("I", i(r), "assign");
          var P = cc11001100_hook("P", T(c(I, "length")), "var-init");
          for (k = cc11001100_hook("k", l(o) ? f(o, [P]) : p(P), "assign"), E = cc11001100_hook("E", 0, "assign"); E < P;) {
            var j = cc11001100_hook("j", c(I, _ = cc11001100_hook("_", b(E), "assign")), "var-init");
            C(k, _, M = cc11001100_hook("M", !0 === d ? h(u, y, [j, E]) : j, "assign")), E += cc11001100_hook("E", 1, "assign");
          }
          return k.length = cc11001100_hook("k.length", P, "assign"), k;
        });
      }(), "of" in Array || r(Array, "of", function () {
        var e = cc11001100_hook("e", arguments.length, "var-init"),
          t = cc11001100_hook("t", arguments, "var-init"),
          n = cc11001100_hook("n", this, "var-init");
        if (l(n)) var r = cc11001100_hook("r", f(n, [e]), "var-init");else r = cc11001100_hook("r", p(e), "assign");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < e;) {
          var o = cc11001100_hook("o", t[i], "var-init"),
            a = cc11001100_hook("a", b(i), "var-init");
          C(r, a, o);
          i = cc11001100_hook("i", i + 1, "assign");
        }
        return r.length = cc11001100_hook("r.length", e, "assign"), r;
      }), "assign" in Object || r(Object, "assign", function (e, n) {
        var r = cc11001100_hook("r", i(e), "var-init");
        if (1 === arguments.length) return r;
        var o,
          a,
          s,
          l,
          u = cc11001100_hook("u", Array.prototype.slice.call(arguments, 1), "var-init");
        for (o = cc11001100_hook("o", 0, "assign"); o < u.length; o++) {
          var d = cc11001100_hook("d", u[o], "var-init");
          for (d === t || null === d ? s = cc11001100_hook("s", [], "assign") : (l = cc11001100_hook("l", i(d), "assign"), s = cc11001100_hook("s", Object.keys(l), "assign")), a = cc11001100_hook("a", 0, "assign"); a < s.length; a++) {
            var f = cc11001100_hook("f", s[a], "var-init"),
              p = cc11001100_hook("p", Object.getOwnPropertyDescriptor(l, f), "var-init");
            if (p !== t && p.enumerable) {
              var h = cc11001100_hook("h", c(l, f), "var-init");
              r[f] = cc11001100_hook("r[f]", h, "assign");
            }
          }
        }
        return r;
      }), "Symbol" in this && "toStringTag" in this.Symbol || Object.defineProperty(Symbol, "toStringTag", {
        value: cc11001100_hook("value", Symbol("toStringTag"), "object-key-init")
      });
      var _,
        F,
        N = cc11001100_hook("N", (_ = cc11001100_hook("_", function () {
          return this.length = cc11001100_hook("this.length", 0, "assign"), this;
        }, "assign"), F = cc11001100_hook("F", function (e, t) {
          if (!(this instanceof F)) return new F(e, t);
          Object.defineProperties(this, {
            __list__: {
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              value: cc11001100_hook("value", e, "object-key-init")
            },
            __context__: {
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              value: cc11001100_hook("value", t, "object-key-init")
            },
            __nextIndex__: {
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              value: cc11001100_hook("value", 0, "object-key-init")
            }
          }), t && (function (e) {
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
          }(t.on), t.on("_add", this._onAdd.bind(this)), t.on("_delete", this._onDelete.bind(this)), t.on("_clear", this._onClear.bind(this)));
        }, "assign"), Object.defineProperties(F.prototype, Object.assign({
          constructor: {
            value: cc11001100_hook("value", F, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          _next: {
            value: function () {
              var e;
              if (this.__list__) return this.__redo__ && (e = cc11001100_hook("e", this.__redo__.shift(), "assign")) !== t ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind();
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          next: {
            value: function () {
              return this._createResult(this._next());
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          _createResult: {
            value: function (e) {
              return e === t ? {
                done: cc11001100_hook("done", !0, "object-key-init"),
                value: cc11001100_hook("value", t, "object-key-init")
              } : {
                done: cc11001100_hook("done", !1, "object-key-init"),
                value: cc11001100_hook("value", this._resolve(e), "object-key-init")
              };
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          _resolve: {
            value: function (e) {
              return this.__list__[e];
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          _unBind: {
            value: function () {
              this.__list__ = cc11001100_hook("this.__list__", null, "assign"), delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd.bind(this)), this.__context__.off("_delete", this._onDelete.bind(this)), this.__context__.off("_clear", this._onClear.bind(this)), this.__context__ = cc11001100_hook("this.__context__", null, "assign"));
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          toString: {
            value: function () {
              return "[object Iterator]";
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          }
        }, {
          _onAdd: {
            value: function (e) {
              if (!(e >= this.__nextIndex__)) {
                if (++this.__nextIndex__, !this.__redo__) return void Object.defineProperty(this, "__redo__", {
                  value: cc11001100_hook("value", [e], "object-key-init"),
                  configurable: cc11001100_hook("configurable", !0, "object-key-init"),
                  enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
                  writable: cc11001100_hook("writable", !1, "object-key-init")
                });
                this.__redo__.forEach(function (t, n) {
                  t >= e && (this.__redo__[n] = cc11001100_hook("this.__redo__[n]", ++t, "assign"));
                }, this), this.__redo__.push(e);
              }
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          _onDelete: {
            value: function (e) {
              var t;
              e >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (-1 !== (t = cc11001100_hook("t", this.__redo__.indexOf(e), "assign")) && this.__redo__.splice(t, 1), this.__redo__.forEach(function (t, n) {
                t > e && (this.__redo__[n] = cc11001100_hook("this.__redo__[n]", --t, "assign"));
              }, this)));
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          _onClear: {
            value: function () {
              this.__redo__ && _.call(this.__redo__), this.__nextIndex__ = cc11001100_hook("this.__nextIndex__", 0, "assign");
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          }
        })), Object.defineProperty(F.prototype, Symbol.iterator, {
          value: function () {
            return this;
          },
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init")
        }), Object.defineProperty(F.prototype, Symbol.toStringTag, {
          value: cc11001100_hook("value", "Iterator", "object-key-init"),
          configurable: cc11001100_hook("configurable", !1, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init")
        }), F), "var-init");
      function M(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (null === e || e === t) throw TypeError();
        return e;
      }
      function I(e) {
        cc11001100_hook("e", e, "function-parameter");
        if ("object" !== s(e)) return !1;
        var n = cc11001100_hook("n", "Symbol" in this && "match" in this.Symbol ? c(e, this.Symbol.match) : t, "var-init");
        if (n !== t) return y(n);
        try {
          var r = cc11001100_hook("r", e.lastIndex, "var-init");
          return e.lastIndex = cc11001100_hook("e.lastIndex", 0, "assign"), RegExp.prototype.exec.call(e), !0;
        } catch (i) {} finally {
          e.lastIndex = cc11001100_hook("e.lastIndex", r, "assign");
        }
        return !1;
      }
      !function () {
        if (!Object.setPrototypeOf) {
          var e,
            t,
            n = cc11001100_hook("n", Object.getOwnPropertyNames, "var-init"),
            i = cc11001100_hook("i", Object.getOwnPropertyDescriptor, "var-init"),
            o = cc11001100_hook("o", Object.create, "var-init"),
            a = cc11001100_hook("a", Object.defineProperty, "var-init"),
            s = cc11001100_hook("s", Object.getPrototypeOf, "var-init"),
            l = cc11001100_hook("l", Object.prototype, "var-init"),
            c = function (e, t) {
              return function (e, t) {
                return n(t).forEach(function (n) {
                  a(e, n, i(t, n));
                }), e;
              }(o(t), e);
            };
          try {
            (e = cc11001100_hook("e", i(l, "__proto__").set, "assign")).call({}, null), t = cc11001100_hook("t", function (t, n) {
              return e.call(t, n), t;
            }, "assign");
          } catch (u) {
            (e = cc11001100_hook("e", {
              __proto__: cc11001100_hook("__proto__", null, "object-key-init")
            }, "assign")) instanceof Object ? t = cc11001100_hook("t", c, "assign") : (e.__proto__ = cc11001100_hook("e.__proto__", l, "assign"), t = cc11001100_hook("t", e instanceof Object ? function (e, t) {
              return e.__proto__ = cc11001100_hook("e.__proto__", t, "assign"), e;
            } : function (e, t) {
              return s(e) ? (e.__proto__ = cc11001100_hook("e.__proto__", t, "assign"), e) : c(e, t);
            }, "assign"));
          }
          r(Object, "setPrototypeOf", t);
        }
      }(), "includes" in String.prototype || r(String.prototype, "includes", function (e) {
        "use strict";

        var n = cc11001100_hook("n", arguments.length > 1 ? arguments[1] : t, "var-init"),
          r = cc11001100_hook("r", M(this), "var-init"),
          i = cc11001100_hook("i", b(r), "var-init");
        if (I(e)) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        var o = cc11001100_hook("o", b(e), "var-init"),
          a = cc11001100_hook("a", k(n), "var-init"),
          s = cc11001100_hook("s", i.length, "var-init"),
          l = cc11001100_hook("l", Math.min(Math.max(a, 0), s), "var-init");
        return -1 !== String.prototype.indexOf.call(i, o, l);
      }), "contains" in String.prototype || r(String.prototype, "contains", String.prototype.includes);
      var P = cc11001100_hook("P", function () {
        var e = function (t, n) {
          if (!(this instanceof e)) return new e(t, n);
          N.call(this, t), n = cc11001100_hook("n", n ? String.prototype.contains.call(n, "key+value") ? "key+value" : String.prototype.contains.call(n, "key") ? "key" : "value" : "value", "assign"), Object.defineProperty(this, "__kind__", {
            value: cc11001100_hook("value", n, "object-key-init"),
            configurable: cc11001100_hook("configurable", !1, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !1, "object-key-init")
          });
        };
        return Object.setPrototypeOf && Object.setPrototypeOf(e, N.prototype), e.prototype = cc11001100_hook("e.prototype", Object.create(N.prototype, {
          constructor: {
            value: cc11001100_hook("value", e, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          _resolve: {
            value: function (e) {
              return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e;
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          },
          toString: {
            value: function () {
              return "[object Array Iterator]";
            },
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init")
          }
        }), "assign"), e;
      }(), "var-init");
      function j(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return t in e;
      }
      "values" in Array.prototype || ("Symbol" in this && "iterator" in Symbol && "function" == typeof Array.prototype[Symbol.iterator] ? r(Array.prototype, "values", Array.prototype[Symbol.iterator]) : r(Array.prototype, "values", function () {
        var e = cc11001100_hook("e", i(this), "var-init");
        return new P(e, "value");
      })), "Symbol" in this && "iterator" in this.Symbol && Array.prototype[Symbol.iterator] || r(Array.prototype, Symbol.iterator, Array.prototype.values), "copyWithin" in Array.prototype || r(Array.prototype, "copyWithin", function (e, n) {
        "use strict";

        var r = cc11001100_hook("r", arguments[2], "var-init");
        if (null === this || this === t) throw new TypeError("Cannot call method on " + this);
        var i = cc11001100_hook("i", Object(this), "var-init"),
          o = cc11001100_hook("o", k(i.length), "var-init");
        o <= 0 && (o = cc11001100_hook("o", 0, "assign")), o = cc11001100_hook("o", o === Infinity ? Math.pow(2, 53) - 1 : Math.min(o, Math.pow(2, 53) - 1), "assign"), o = cc11001100_hook("o", Math.max(o, 0), "assign");
        var a,
          s = cc11001100_hook("s", k(e), "var-init");
        a = cc11001100_hook("a", s < 0 ? Math.max(o + s, 0) : Math.min(s, o), "assign");
        var l,
          c,
          u,
          d = cc11001100_hook("d", k(n), "var-init");
        l = cc11001100_hook("l", d < 0 ? Math.max(o + d, 0) : Math.min(d, o), "assign"), u = cc11001100_hook("u", (c = cc11001100_hook("c", r === t ? o : k(r), "assign")) < 0 ? Math.max(o + c, 0) : Math.min(c, o), "assign");
        var f,
          p = cc11001100_hook("p", Math.min(u - l, o - a), "var-init");
        for (l < a && a < l + p ? (f = cc11001100_hook("f", -1, "assign"), l = cc11001100_hook("l", l + p - 1, "assign"), a = cc11001100_hook("a", a + p - 1, "assign")) : f = cc11001100_hook("f", 1, "assign"); p > 0;) {
          var h = cc11001100_hook("h", String(l), "var-init"),
            g = cc11001100_hook("g", String(a), "var-init");
          if (j(i, h)) {
            var m = cc11001100_hook("m", i[h], "var-init");
            i[g] = cc11001100_hook("i[g]", m, "assign");
          } else delete i[g];
          l += cc11001100_hook("l", f, "assign"), a += cc11001100_hook("a", f, "assign"), p -= cc11001100_hook("p", 1, "assign");
        }
        return i;
      }), "Symbol" in this && "iterator" in this.Symbol && Array.prototype.entries || r(Array.prototype, "entries", function () {
        var e = cc11001100_hook("e", i(this), "var-init");
        return new P(e, "key+value");
      }), "fill" in Array.prototype || r(Array.prototype, "fill", function (e) {
        for (var n = cc11001100_hook("n", arguments[1], "var-init"), r = cc11001100_hook("r", arguments[2], "var-init"), o = cc11001100_hook("o", i(this), "var-init"), a = cc11001100_hook("a", T(c(o, "length")), "var-init"), s = cc11001100_hook("s", k(n), "var-init"), l = cc11001100_hook("l", s < 0 ? Math.max(a + s, 0) : Math.min(s, a), "var-init"), u = cc11001100_hook("u", r === t ? a : k(r), "var-init"), d = cc11001100_hook("d", u < 0 ? Math.max(a + u, 0) : Math.min(u, a), "var-init"); l < d;) o[b(l)] = cc11001100_hook("o[b(l)]", e, "assign"), l += cc11001100_hook("l", 1, "assign");
        return o;
      }), "find" in Array.prototype || r(Array.prototype, "find", function (e) {
        var r = cc11001100_hook("r", i(this), "var-init"),
          o = cc11001100_hook("o", T(c(r, "length")), "var-init");
        if (!1 === n(e)) throw new TypeError(e + " is not a function");
        for (var a = cc11001100_hook("a", arguments.length > 1 ? arguments[1] : t, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < o;) {
          var l = cc11001100_hook("l", b(s), "var-init"),
            u = cc11001100_hook("u", c(r, l), "var-init");
          if (y(h(e, a, [u, s, r]))) return u;
          s = cc11001100_hook("s", s + 1, "assign");
        }
        return t;
      }), "findIndex" in Array.prototype || r(Array.prototype, "findIndex", function (e) {
        var r = cc11001100_hook("r", i(this), "var-init"),
          o = cc11001100_hook("o", T(c(r, "length")), "var-init");
        if (!1 === n(e)) throw new TypeError(e + " is not a function");
        for (var a = cc11001100_hook("a", arguments.length > 1 ? arguments[1] : t, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < o;) {
          var l = cc11001100_hook("l", b(s), "var-init"),
            u = cc11001100_hook("u", c(r, l), "var-init");
          if (y(h(e, a, [u, s, r]))) return s;
          s += cc11001100_hook("s", 1, "assign");
        }
        return -1;
      }), "includes" in Array.prototype || r(Array.prototype, "includes", function (e) {
        "use strict";

        var t = cc11001100_hook("t", i(this), "var-init"),
          n = cc11001100_hook("n", T(c(t, "length")), "var-init");
        if (0 === n) return !1;
        var r = cc11001100_hook("r", k(arguments[1]), "var-init");
        if (r >= 0) var o = cc11001100_hook("o", r, "var-init");else (o = cc11001100_hook("o", n + r, "assign")) < 0 && (o = cc11001100_hook("o", 0, "assign"));
        for (; o < n;) {
          var a = cc11001100_hook("a", c(t, b(o)), "var-init");
          if (O(e, a)) return !0;
          o += cc11001100_hook("o", 1, "assign");
        }
        return !1;
      }), "Symbol" in this && "iterator" in this.Symbol && Array.prototype.keys || r(Array.prototype, "keys", function () {
        var e = cc11001100_hook("e", i(this), "var-init");
        return new P(e, "key");
      }), "MutationObserver" in this || window.MutationObserver || (window.MutationObserver = cc11001100_hook("window.MutationObserver", function (e) {
        "use strict";

        function t(e) {
          cc11001100_hook("e", e, "function-parameter");
          this._watched = cc11001100_hook("this._watched", [], "assign"), this._listener = cc11001100_hook("this._listener", e, "assign");
        }
        function n(e) {
          cc11001100_hook("e", e, "function-parameter");
          !function n() {
            var r = cc11001100_hook("r", e.takeRecords(), "var-init");
            r.length && e._listener(r, e), e._timeout = cc11001100_hook("e._timeout", setTimeout(n, t._period), "assign");
          }();
        }
        function r(t) {
          cc11001100_hook("t", t, "function-parameter");
          var n = cc11001100_hook("n", {
            type: cc11001100_hook("type", null, "object-key-init"),
            target: cc11001100_hook("target", null, "object-key-init"),
            addedNodes: cc11001100_hook("addedNodes", [], "object-key-init"),
            removedNodes: cc11001100_hook("removedNodes", [], "object-key-init"),
            previousSibling: cc11001100_hook("previousSibling", null, "object-key-init"),
            nextSibling: cc11001100_hook("nextSibling", null, "object-key-init"),
            attributeName: cc11001100_hook("attributeName", null, "object-key-init"),
            attributeNamespace: cc11001100_hook("attributeNamespace", null, "object-key-init"),
            oldValue: cc11001100_hook("oldValue", null, "object-key-init")
          }, "var-init");
          for (var r in t) f(n, r) && t[r] !== e && (n[r] = cc11001100_hook("n[r]", t[r], "assign"));
          return n;
        }
        function i(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          var n = cc11001100_hook("n", s(e, t), "var-init");
          return function (i) {
            var l,
              c = cc11001100_hook("c", i.length, "var-init");
            t.charData && 3 === e.nodeType && e.nodeValue !== n.charData && i.push(new r({
              type: cc11001100_hook("type", "characterData", "object-key-init"),
              target: cc11001100_hook("target", e, "object-key-init"),
              oldValue: cc11001100_hook("oldValue", n.charData, "object-key-init")
            })), t.attr && n.attr && o(i, e, n.attr, t.afilter), (t.kids || t.descendents) && (l = cc11001100_hook("l", a(i, e, n, t), "assign")), (l || i.length !== c) && (n = cc11001100_hook("n", s(e, t), "assign"));
          };
        }
        function o(e, t, n, i) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          for (var o, a, s = cc11001100_hook("s", {}, "var-init"), l = cc11001100_hook("l", t.attributes, "var-init"), c = cc11001100_hook("c", l.length, "var-init"); c--;) a = cc11001100_hook("a", (o = cc11001100_hook("o", l[c], "assign")).name, "assign"), i && !f(i, a) || (h(t, o) !== n[a] && e.push(r({
            type: cc11001100_hook("type", "attributes", "object-key-init"),
            target: cc11001100_hook("target", t, "object-key-init"),
            attributeName: cc11001100_hook("attributeName", a, "object-key-init"),
            oldValue: cc11001100_hook("oldValue", n[a], "object-key-init"),
            attributeNamespace: cc11001100_hook("attributeNamespace", o.namespaceURI, "object-key-init")
          })), s[a] = cc11001100_hook("s[a]", !0, "assign"));
          for (a in n) s[a] || e.push(r({
            target: cc11001100_hook("target", t, "object-key-init"),
            type: cc11001100_hook("type", "attributes", "object-key-init"),
            attributeName: cc11001100_hook("attributeName", a, "object-key-init"),
            oldValue: cc11001100_hook("oldValue", n[a], "object-key-init")
          }));
        }
        function a(t, n, i, a) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          function s(e, n, i, s, l) {
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            cc11001100_hook("i", i, "function-parameter");
            cc11001100_hook("s", s, "function-parameter");
            cc11001100_hook("l", l, "function-parameter");
            for (var c, d, f, p = cc11001100_hook("p", e.length - 1, "var-init"), h = cc11001100_hook("h", -~((p - l) / 2), "var-init"); f = cc11001100_hook("f", e.pop(), "assign");) c = cc11001100_hook("c", i[f.i], "assign"), d = cc11001100_hook("d", s[f.j], "assign"), a.kids && h && Math.abs(f.i - f.j) >= p && (t.push(r({
              type: cc11001100_hook("type", "childList", "object-key-init"),
              target: cc11001100_hook("target", n, "object-key-init"),
              addedNodes: cc11001100_hook("addedNodes", [c], "object-key-init"),
              removedNodes: cc11001100_hook("removedNodes", [c], "object-key-init"),
              nextSibling: cc11001100_hook("nextSibling", c.nextSibling, "object-key-init"),
              previousSibling: cc11001100_hook("previousSibling", c.previousSibling, "object-key-init")
            })), h--), a.attr && d.attr && o(t, c, d.attr, a.afilter), a.charData && 3 === c.nodeType && c.nodeValue !== d.charData && t.push(r({
              type: cc11001100_hook("type", "characterData", "object-key-init"),
              target: cc11001100_hook("target", c, "object-key-init"),
              oldValue: cc11001100_hook("oldValue", d.charData, "object-key-init")
            })), a.descendents && u(c, d);
          }
          function u(n, i) {
            cc11001100_hook("n", n, "function-parameter");
            cc11001100_hook("i", i, "function-parameter");
            for (var p, h, g, m, v, b, y, w = cc11001100_hook("w", n.childNodes, "var-init"), x = cc11001100_hook("x", i.kids, "var-init"), S = cc11001100_hook("S", w.length, "var-init"), C = cc11001100_hook("C", x ? x.length : 0, "var-init"), k = cc11001100_hook("k", 0, "var-init"), T = cc11001100_hook("T", 0, "var-init"), A = cc11001100_hook("A", 0, "var-init"); T < S || A < C;) (b = cc11001100_hook("b", w[T], "assign")) === (y = cc11001100_hook("y", (v = cc11001100_hook("v", x[A], "assign")) && v.node, "assign")) ? (a.attr && v.attr && o(t, b, v.attr, a.afilter), a.charData && v.charData !== e && b.nodeValue !== v.charData && t.push(r({
              type: cc11001100_hook("type", "characterData", "object-key-init"),
              target: cc11001100_hook("target", b, "object-key-init"),
              oldValue: cc11001100_hook("oldValue", v.charData, "object-key-init")
            })), h && s(h, n, w, x, k), a.descendents && (b.childNodes.length || v.kids && v.kids.length) && u(b, v), T++, A++) : (f = cc11001100_hook("f", !0, "assign"), p || (p = cc11001100_hook("p", {}, "assign"), h = cc11001100_hook("h", [], "assign")), b && (p[g = cc11001100_hook("g", c(b), "assign")] || (p[g] = cc11001100_hook("p[g]", !0, "assign"), -1 === (m = cc11001100_hook("m", l(x, b, A), "assign")) ? a.kids && (t.push(r({
              type: cc11001100_hook("type", "childList", "object-key-init"),
              target: cc11001100_hook("target", n, "object-key-init"),
              addedNodes: cc11001100_hook("addedNodes", [b], "object-key-init"),
              nextSibling: cc11001100_hook("nextSibling", b.nextSibling, "object-key-init"),
              previousSibling: cc11001100_hook("previousSibling", b.previousSibling, "object-key-init")
            })), k++) : h.push({
              i: cc11001100_hook("i", T, "object-key-init"),
              j: cc11001100_hook("j", m, "object-key-init")
            })), T++), y && y !== w[T] && (p[g = cc11001100_hook("g", c(y), "assign")] || (p[g] = cc11001100_hook("p[g]", !0, "assign"), -1 === (m = cc11001100_hook("m", d(w, y, T), "assign")) ? a.kids && (t.push(r({
              type: cc11001100_hook("type", "childList", "object-key-init"),
              target: cc11001100_hook("target", i.node, "object-key-init"),
              removedNodes: cc11001100_hook("removedNodes", [y], "object-key-init"),
              nextSibling: cc11001100_hook("nextSibling", x[A + 1], "object-key-init"),
              previousSibling: cc11001100_hook("previousSibling", x[A - 1], "object-key-init")
            })), k--) : h.push({
              i: cc11001100_hook("i", m, "object-key-init"),
              j: cc11001100_hook("j", A, "object-key-init")
            })), A++));
            h && s(h, n, w, x, k);
          }
          var f;
          return u(n, i), f;
        }
        function s(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          var n = cc11001100_hook("n", !0, "var-init");
          return function r(e) {
            var i = cc11001100_hook("i", {
              node: cc11001100_hook("node", e, "object-key-init")
            }, "var-init");
            return !t.charData || 3 !== e.nodeType && 8 !== e.nodeType ? (t.attr && n && 1 === e.nodeType && (i.attr = cc11001100_hook("i.attr", u(e.attributes, function (n, r) {
              return t.afilter && !t.afilter[r.name] || (n[r.name] = cc11001100_hook("n[r.name]", h(e, r), "assign")), n;
            }, {}), "assign")), n && (t.kids || t.charData || t.attr && t.descendents) && (i.kids = cc11001100_hook("i.kids", function (e, t) {
              for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) n[r] = cc11001100_hook("n[r]", t(e[r], r, e), "assign");
              return n;
            }(e.childNodes, r), "assign")), n = cc11001100_hook("n", t.descendents, "assign")) : i.charData = cc11001100_hook("i.charData", e.nodeValue, "assign"), i;
          }(e);
        }
        function l(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          return d(e, t, n, "node");
        }
        function c(e) {
          cc11001100_hook("e", e, "function-parameter");
          try {
            return e.id || (e[m] = cc11001100_hook("e[m]", e[m] || g++, "assign"));
          } catch (t) {
            try {
              return e.nodeValue;
            } catch (n) {
              return g++;
            }
          }
        }
        function u(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          for (var r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) n = cc11001100_hook("n", t(n, e[r], r, e), "assign");
          return n;
        }
        function d(e, t, n, r) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          for (; n < e.length; n++) if ((r ? e[n][r] : e[n]) === t) return n;
          return -1;
        }
        function f(t, n) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          return t[n] !== e;
        }
        t._period = cc11001100_hook("t._period", 30, "assign"), t.prototype = cc11001100_hook("t.prototype", {
          observe: function (e, t) {
            for (var r = cc11001100_hook("r", {
                attr: cc11001100_hook("attr", !!(t.attributes || t.attributeFilter || t.attributeOldValue), "object-key-init"),
                kids: cc11001100_hook("kids", !!t.childList, "object-key-init"),
                descendents: cc11001100_hook("descendents", !!t.subtree, "object-key-init"),
                charData: cc11001100_hook("charData", !(!t.characterData && !t.characterDataOldValue), "object-key-init")
              }, "var-init"), o = cc11001100_hook("o", this._watched, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < o.length; a++) o[a].tar === e && o.splice(a, 1);
            t.attributeFilter && (r.afilter = cc11001100_hook("r.afilter", u(t.attributeFilter, function (e, t) {
              return e[t] = cc11001100_hook("e[t]", !0, "assign"), e;
            }, {}), "assign")), o.push({
              tar: cc11001100_hook("tar", e, "object-key-init"),
              fn: cc11001100_hook("fn", i(e, r), "object-key-init")
            }), this._timeout || n(this);
          },
          takeRecords: function () {
            for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", this._watched, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) t[n].fn(e);
            return e;
          },
          disconnect: function () {
            this._watched = cc11001100_hook("this._watched", [], "assign"), clearTimeout(this._timeout), this._timeout = cc11001100_hook("this._timeout", null, "assign");
          }
        }, "assign");
        var p = cc11001100_hook("p", document.createElement("i"), "var-init");
        p.style.top = cc11001100_hook("p.style.top", 0, "assign");
        var h = cc11001100_hook("h", (p = cc11001100_hook("p", "null" != p.attributes.style.value, "assign")) ? function (e, t) {
            return t.value;
          } : function (e, t) {
            return "style" !== t.name ? t.value : e.style.cssText;
          }, "var-init"),
          g = cc11001100_hook("g", 1, "var-init"),
          m = cc11001100_hook("m", "mo_id", "var-init");
        return t;
      }(void 0), "assign")), "entries" in Object || r(Object, "entries", function (e) {
        return function (e, t) {
          for (var n = cc11001100_hook("n", Object.keys(e), "var-init"), r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", n.length, "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < i; o++) {
            var a = cc11001100_hook("a", n[o], "var-init");
            if ("string" === s(a)) {
              var l = cc11001100_hook("l", Object.getOwnPropertyDescriptor(e, a), "var-init");
              if (l && l.enumerable) if ("key" === t) r.push(a);else {
                var u = cc11001100_hook("u", c(e, a), "var-init");
                if ("value" === t) r.push(u);else {
                  var d = cc11001100_hook("d", [a, u], "var-init");
                  r.push(d);
                }
              }
            }
          }
          return r;
        }(i(e), "key+value");
      }), "is" in Object || r(Object, "is", function (e, t) {
        return function (e, t) {
          return s(e) === s(t) && ("number" === s(e) ? !(!isNaN(e) || !isNaN(t)) || (0 !== e || 0 !== t || 1 / e == 1 / t) && e === t : E(e, t));
        }(e, t);
      }), "values" in Object || r(Object, "values", function (e) {
        var t = cc11001100_hook("t", i(e), "var-init");
        return Object.keys(t).map(function (e) {
          return t[e];
        });
      }), "Promise" in this || function (e) {
        function t(r) {
          cc11001100_hook("r", r, "function-parameter");
          if (n[r]) return n[r].exports;
          var i = cc11001100_hook("i", n[r] = cc11001100_hook("n[r]", {
            i: cc11001100_hook("i", r, "object-key-init"),
            l: cc11001100_hook("l", !1, "object-key-init"),
            exports: {}
          }, "assign"), "var-init");
          return e[r].call(i.exports, i, i.exports, t), i.l = cc11001100_hook("i.l", !0, "assign"), i.exports;
        }
        var n = cc11001100_hook("n", {}, "var-init");
        t.m = cc11001100_hook("t.m", e, "assign"), t.c = cc11001100_hook("t.c", n, "assign"), t.i = cc11001100_hook("t.i", function (e) {
          return e;
        }, "assign"), t.d = cc11001100_hook("t.d", function (e, n, r) {
          t.o(e, n) || Object.defineProperty(e, n, {
            configurable: cc11001100_hook("configurable", !1, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
            get: cc11001100_hook("get", r, "object-key-init")
          });
        }, "assign"), t.n = cc11001100_hook("t.n", function (e) {
          var n = cc11001100_hook("n", e && e.__esModule ? function () {
            return e["default"];
          } : function () {
            return e;
          }, "var-init");
          return t.d(n, "a", n), n;
        }, "assign"), t.o = cc11001100_hook("t.o", function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, "assign"), t.p = cc11001100_hook("t.p", "", "assign"), t(t.s = cc11001100_hook("t.s", 100, "assign"));
      }({
        100: function (e, t, n) {
          (function (e) {
            var t = cc11001100_hook("t", n(5), "var-init");
            try {
              e.Promise = cc11001100_hook("e.Promise", t, "assign"), window.Promise = cc11001100_hook("window.Promise", t, "assign");
            } catch (r) {}
          }).call(t, n(2));
        },
        2: function (e, t) {
          var n;
          n = cc11001100_hook("n", function () {
            return this;
          }(), "assign");
          try {
            n = cc11001100_hook("n", n || Function("return this")() || (0, eval)("this"), "assign");
          } catch (r) {
            "object" == typeof window && (n = cc11001100_hook("n", window, "assign"));
          }
          e.exports = cc11001100_hook("e.exports", n, "assign");
        },
        5: function (e, n, r) {
          (function (n) {
            !function () {
              "use strict";

              function r() {
                return ne[z][H] || K;
              }
              function i(e) {
                cc11001100_hook("e", e, "function-parameter");
                return e && "object" == typeof e;
              }
              function o(e) {
                cc11001100_hook("e", e, "function-parameter");
                return "function" == typeof e;
              }
              function a(e, t) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                return e instanceof t;
              }
              function s(e, t, n) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                cc11001100_hook("n", n, "function-parameter");
                if (!t(e)) throw f(n);
              }
              function l() {
                try {
                  return A.apply(E, arguments);
                } catch (e) {
                  return Q.e = cc11001100_hook("Q.e", e, "assign"), Q;
                }
              }
              function c(e, t) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                return A = cc11001100_hook("A", e, "assign"), E = cc11001100_hook("E", t, "assign"), l;
              }
              function u(e, t) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                function n() {
                  for (var n = cc11001100_hook("n", 0, "var-init"); n < i;) t(r[n], r[n + 1]), r[n++] = cc11001100_hook("r[n++]", T, "assign"), r[n++] = cc11001100_hook("r[n++]", T, "assign");
                  i = cc11001100_hook("i", 0, "assign"), r.length > e && (r.length = cc11001100_hook("r.length", e, "assign"));
                }
                var r = cc11001100_hook("r", j(e), "var-init"),
                  i = cc11001100_hook("i", 0, "var-init");
                return function (e, t) {
                  r[i++] = cc11001100_hook("r[i++]", e, "assign"), r[i++] = cc11001100_hook("r[i++]", t, "assign"), 2 === i && ne.nextTick(n);
                };
              }
              function d(e, t) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                var n,
                  r,
                  i,
                  s,
                  l = cc11001100_hook("l", 0, "var-init");
                if (!e) throw f(Y);
                var u = cc11001100_hook("u", e[ne[z][U]], "var-init");
                if (o(u)) r = cc11001100_hook("r", u.call(e), "assign");else {
                  if (!o(e.next)) {
                    if (a(e, j)) {
                      for (n = cc11001100_hook("n", e.length, "assign"); l < n;) t(e[l], l++);
                      return l;
                    }
                    throw f(Y);
                  }
                  r = cc11001100_hook("r", e, "assign");
                }
                for (; !(i = cc11001100_hook("i", r.next(), "assign")).done;) if ((s = cc11001100_hook("s", c(t)(i.value, l++), "assign")) === Q) throw o(r[q]) && r[q](), s.e;
                return l;
              }
              function f(e) {
                cc11001100_hook("e", e, "function-parameter");
                return new TypeError(e);
              }
              function p(e) {
                cc11001100_hook("e", e, "function-parameter");
                return (e ? "" : J) + new L().stack;
              }
              function h(e, t) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                var n = cc11001100_hook("n", "on" + e.toLowerCase(), "var-init"),
                  r = cc11001100_hook("r", F[n], "var-init");
                M && M.listeners(e).length ? e === Z ? M.emit(e, t._v, t) : M.emit(e, t) : r ? r({
                  reason: cc11001100_hook("reason", t._v, "object-key-init"),
                  promise: cc11001100_hook("promise", t, "object-key-init")
                }) : ne[e](t._v, t);
              }
              function g(e) {
                cc11001100_hook("e", e, "function-parameter");
                return e && e._s;
              }
              function m(e) {
                cc11001100_hook("e", e, "function-parameter");
                return g(e) ? new e(ee) : (t = cc11001100_hook("t", new e(function (e, i) {
                  if (t) throw f();
                  n = cc11001100_hook("n", e, "assign"), r = cc11001100_hook("r", i, "assign");
                }), "assign"), s(n, o), s(r, o), t);
                var t, n, r;
              }
              function v(e, t) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                var n = cc11001100_hook("n", !1, "var-init");
                return function (r) {
                  n || (n = cc11001100_hook("n", !0, "assign"), P && (e[X] = cc11001100_hook("e[X]", p(!0), "assign")), t === B ? S(e, r) : x(e, t, r));
                };
              }
              function b(e) {
                cc11001100_hook("e", e, "function-parameter");
                if (e._umark) return !0;
                e._umark = cc11001100_hook("e._umark", !0, "assign");
                for (var t, n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e._c, "var-init"); n < r;) if ((t = cc11001100_hook("t", e[n++], "assign"))._onRejected || b(t)) return !0;
              }
              function y(e, t) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                function n(e) {
                  cc11001100_hook("e", e, "function-parameter");
                  return r.push(e.replace(/^\s+|\s+$/g, ""));
                }
                var r = cc11001100_hook("r", [], "var-init");
                return P && (t[X] && n(t[X]), function i(e) {
                  e && V in e && (i(e._next), n(e[V] + ""), i(e._p));
                }(t)), (e && e.stack ? e.stack : e) + ("\n" + r.join("\n")).replace(te, "");
              }
              function w(e, t) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                return e(t);
              }
              function x(e, t, n) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                cc11001100_hook("n", n, "function-parameter");
                var r = cc11001100_hook("r", 0, "var-init"),
                  i = cc11001100_hook("i", e._c, "var-init");
                if (e._s === D) for (e._s = cc11001100_hook("e._s", t, "assign"), e._v = cc11001100_hook("e._v", n, "assign"), t === R && (P && function (e) {
                  return a(e, L);
                }(n) && (n.longStack = cc11001100_hook("n.longStack", y(n, e), "assign")), ie(e)); r < i;) re(e, e[r++]);
                return e;
              }
              function S(e, t) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                if (t === e && t) return x(e, R, f(G)), e;
                if (t !== O && (o(t) || i(t))) {
                  var n = cc11001100_hook("n", c(C)(t), "var-init");
                  if (n === Q) return x(e, R, n.e), e;
                  o(n) ? (P && g(t) && (e._next = cc11001100_hook("e._next", t, "assign")), g(t) ? k(e, t, n) : ne.nextTick(function () {
                    k(e, t, n);
                  })) : x(e, B, t);
                } else x(e, B, t);
                return e;
              }
              function C(e) {
                cc11001100_hook("e", e, "function-parameter");
                return e.then;
              }
              function k(e, t, n) {
                cc11001100_hook("e", e, "function-parameter");
                cc11001100_hook("t", t, "function-parameter");
                cc11001100_hook("n", n, "function-parameter");
                var r = cc11001100_hook("r", c(n, t)(function (n) {
                  t && (t = cc11001100_hook("t", O, "assign"), S(e, n));
                }, function (n) {
                  t && (t = cc11001100_hook("t", O, "assign"), x(e, R, n));
                }), "var-init");
                r === Q && t && (x(e, R, r.e), t = cc11001100_hook("t", O, "assign"));
              }
              var T,
                A,
                E,
                O = cc11001100_hook("O", null, "var-init"),
                _ = cc11001100_hook("_", "object" == typeof self, "var-init"),
                F = cc11001100_hook("F", _ ? self : n, "var-init"),
                N = cc11001100_hook("N", F.Promise, "var-init"),
                M = cc11001100_hook("M", F.process, "var-init"),
                I = cc11001100_hook("I", F.console, "var-init"),
                P = cc11001100_hook("P", !1, "var-init"),
                j = cc11001100_hook("j", Array, "var-init"),
                L = cc11001100_hook("L", Error, "var-init"),
                R = cc11001100_hook("R", 1, "var-init"),
                B = cc11001100_hook("B", 2, "var-init"),
                D = cc11001100_hook("D", 3, "var-init"),
                z = cc11001100_hook("z", "Symbol", "var-init"),
                U = cc11001100_hook("U", "iterator", "var-init"),
                H = cc11001100_hook("H", "species", "var-init"),
                K = cc11001100_hook("K", z + "(" + H + ")", "var-init"),
                q = cc11001100_hook("q", "return", "var-init"),
                W = cc11001100_hook("W", "_uh", "var-init"),
                V = cc11001100_hook("V", "_pt", "var-init"),
                X = cc11001100_hook("X", "_st", "var-init"),
                Y = cc11001100_hook("Y", "Invalid argument", "var-init"),
                J = cc11001100_hook("J", "\nFrom previous ", "var-init"),
                G = cc11001100_hook("G", "Chaining cycle detected for promise", "var-init"),
                $ = cc11001100_hook("$", "rejectionHandled", "var-init"),
                Z = cc11001100_hook("Z", "unhandledRejection", "var-init"),
                Q = cc11001100_hook("Q", {
                  e: cc11001100_hook("e", O, "object-key-init")
                }, "var-init"),
                ee = function () {},
                te = cc11001100_hook("te", /^.+\/node_modules\/yaku\/.+\n?/gm, "var-init"),
                ne = function (e) {
                  var t,
                    n = cc11001100_hook("n", this, "var-init");
                  if (!i(n) || n._s !== T) throw f("Invalid this");
                  if (n._s = cc11001100_hook("n._s", D, "assign"), P && (n[V] = cc11001100_hook("n[V]", p(), "assign")), e !== ee) {
                    if (!o(e)) throw f(Y);
                    (t = cc11001100_hook("t", c(e)(v(n, B), v(n, R)), "assign")) === Q && x(n, R, t.e);
                  }
                };
              ne["default"] = cc11001100_hook("ne[\"default\"]", ne, "assign"), function (e, t) {
                for (var n in t) e[n] = cc11001100_hook("e[n]", t[n], "assign");
              }(ne.prototype, {
                then: function (e, n) {
                  if (this._s === t) throw f();
                  return function (e, t, n, r) {
                    return o(n) && (t._onFulfilled = cc11001100_hook("t._onFulfilled", n, "assign")), o(r) && (e[W] && h($, e), t._onRejected = cc11001100_hook("t._onRejected", r, "assign")), P && (t._p = cc11001100_hook("t._p", e, "assign")), e[e._c++] = cc11001100_hook("e[e._c++]", t, "assign"), e._s !== D && re(e, t), t;
                  }(this, m(ne.speciesConstructor(this, ne)), e, n);
                },
                "catch": function (e) {
                  return this.then(T, e);
                },
                "finally": function (e) {
                  return this.then(function (t) {
                    return ne.resolve(e()).then(function () {
                      return t;
                    });
                  }, function (t) {
                    return ne.resolve(e()).then(function () {
                      throw t;
                    });
                  });
                },
                _c: cc11001100_hook("_c", 0, "object-key-init"),
                _p: cc11001100_hook("_p", O, "object-key-init")
              }), ne.resolve = cc11001100_hook("ne.resolve", function (e) {
                return g(e) ? e : S(m(this), e);
              }, "assign"), ne.reject = cc11001100_hook("ne.reject", function (e) {
                return x(m(this), R, e);
              }, "assign"), ne.race = cc11001100_hook("ne.race", function (e) {
                var t = cc11001100_hook("t", this, "var-init"),
                  n = cc11001100_hook("n", m(t), "var-init"),
                  r = function (e) {
                    x(n, B, e);
                  },
                  i = function (e) {
                    x(n, R, e);
                  },
                  o = cc11001100_hook("o", c(d)(e, function (e) {
                    t.resolve(e).then(r, i);
                  }), "var-init");
                return o === Q ? t.reject(o.e) : n;
              }, "assign"), ne.all = cc11001100_hook("ne.all", function (e) {
                function t(e) {
                  cc11001100_hook("e", e, "function-parameter");
                  x(i, R, e);
                }
                var n,
                  r = cc11001100_hook("r", this, "var-init"),
                  i = cc11001100_hook("i", m(r), "var-init"),
                  o = cc11001100_hook("o", [], "var-init");
                return (n = cc11001100_hook("n", c(d)(e, function (e, a) {
                  r.resolve(e).then(function (e) {
                    o[a] = cc11001100_hook("o[a]", e, "assign"), --n || x(i, B, o);
                  }, t);
                }), "assign")) === Q ? r.reject(n.e) : (n || x(i, B, []), i);
              }, "assign"), ne.Symbol = cc11001100_hook("ne.Symbol", F[z] || {}, "assign"), c(function () {
                Object.defineProperty(ne, r(), {
                  get: function () {
                    return this;
                  }
                });
              })(), ne.speciesConstructor = cc11001100_hook("ne.speciesConstructor", function (e, t) {
                var n = cc11001100_hook("n", e.constructor, "var-init");
                return n && n[r()] || t;
              }, "assign"), ne.unhandledRejection = cc11001100_hook("ne.unhandledRejection", function (e, t) {
                I && I.error("Uncaught (in promise)", P ? t.longStack : y(e, t));
              }, "assign"), ne.rejectionHandled = cc11001100_hook("ne.rejectionHandled", ee, "assign"), ne.enableLongStackTrace = cc11001100_hook("ne.enableLongStackTrace", function () {
                P = cc11001100_hook("P", !0, "assign");
              }, "assign"), ne.nextTick = cc11001100_hook("ne.nextTick", _ ? function (e) {
                N ? new N(function (e) {
                  e();
                }).then(e) : setTimeout(e);
              } : M.nextTick, "assign"), ne._s = cc11001100_hook("ne._s", 1, "assign");
              var re = cc11001100_hook("re", u(999, function (e, t) {
                  var n, r;
                  return (r = cc11001100_hook("r", e._s !== R ? t._onFulfilled : t._onRejected, "assign")) === T ? void x(t, e._s, e._v) : (n = cc11001100_hook("n", c(w)(r, e._v), "assign")) === Q ? void x(t, R, n.e) : void S(t, n);
                }), "var-init"),
                ie = cc11001100_hook("ie", u(9, function (e) {
                  b(e) || (e[W] = cc11001100_hook("e[W]", 1, "assign"), h(Z, e));
                }), "var-init");
              try {
                e.exports = cc11001100_hook("e.exports", ne, "assign");
              } catch (oe) {
                F.Yaku = cc11001100_hook("F.Yaku", ne, "assign");
              }
            }();
          }).call(n, r(2));
        }
      }), "endsWith" in String.prototype || r(String.prototype, "endsWith", function (e) {
        "use strict";

        var n = cc11001100_hook("n", arguments.length > 1 ? arguments[1] : t, "var-init"),
          r = cc11001100_hook("r", M(this), "var-init"),
          i = cc11001100_hook("i", b(r), "var-init");
        if (I(e)) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
        var o = cc11001100_hook("o", b(e), "var-init"),
          a = cc11001100_hook("a", i.length, "var-init"),
          s = cc11001100_hook("s", n === t ? a : k(n), "var-init"),
          l = cc11001100_hook("l", Math.min(Math.max(s, 0), a), "var-init"),
          c = cc11001100_hook("c", o.length, "var-init"),
          u = cc11001100_hook("u", l - c, "var-init");
        return !(u < 0) && i.substr(u, c) === o;
      }), "startsWith" in String.prototype || r(String.prototype, "startsWith", function (e) {
        "use strict";

        var n = cc11001100_hook("n", arguments.length > 1 ? arguments[1] : t, "var-init"),
          r = cc11001100_hook("r", M(this), "var-init"),
          i = cc11001100_hook("i", b(r), "var-init");
        if (I(e)) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
        var o = cc11001100_hook("o", b(e), "var-init"),
          a = cc11001100_hook("a", k(n), "var-init"),
          s = cc11001100_hook("s", i.length, "var-init"),
          l = cc11001100_hook("l", Math.min(Math.max(a, 0), s), "var-init");
        return !(o.length + l > s) && 0 === i.substr(l).indexOf(e);
      }), function (e) {
        "use strict";

        try {
          var t = cc11001100_hook("t", new e.URL("http://example.com"), "var-init");
          if ("href" in t && "searchParams" in t) {
            var n = cc11001100_hook("n", new URL("http://example.com"), "var-init");
            if (n.search = cc11001100_hook("n.search", "a=1&b=2", "assign"), "http://example.com/?a=1&b=2" === n.href && (n.search = cc11001100_hook("n.search", "", "assign"), "http://example.com/" === n.href)) return !0;
          }
          return !1;
        } catch (r) {
          return !1;
        }
      }(this) || function (e) {
        "use strict";

        function n(t) {
          cc11001100_hook("t", t, "function-parameter");
          return !!t && ("Symbol" in e && "iterator" in e.Symbol && "function" == typeof t[Symbol.iterator] || !!Array.isArray(t));
        }
        function r(e) {
          cc11001100_hook("e", e, "function-parameter");
          return "from" in Array ? Array.from(e) : Array.prototype.slice.call(e);
        }
        !function () {
          function i(e) {
            cc11001100_hook("e", e, "function-parameter");
            var t = cc11001100_hook("t", "", "var-init"),
              n = cc11001100_hook("n", !0, "var-init");
            return e.forEach(function (e) {
              var r = cc11001100_hook("r", encodeURIComponent(e.name), "var-init"),
                i = cc11001100_hook("i", encodeURIComponent(e.value), "var-init");
              n || (t += cc11001100_hook("t", "&", "assign")), t += cc11001100_hook("t", r + "=" + i, "assign"), n = cc11001100_hook("n", !1, "assign");
            }), t.replace(/%20/g, "+");
          }
          function o(e, t) {
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("t", t, "function-parameter");
            var n = cc11001100_hook("n", e.split("&"), "var-init");
            t && -1 === n[0].indexOf("=") && (n[0] = cc11001100_hook("n[0]", "=" + n[0], "assign"));
            var r = cc11001100_hook("r", [], "var-init");
            n.forEach(function (e) {
              if (0 !== e.length) {
                var t = cc11001100_hook("t", e.indexOf("="), "var-init");
                if (-1 !== t) var n = cc11001100_hook("n", e.substring(0, t), "var-init"),
                  i = cc11001100_hook("i", e.substring(t + 1), "var-init");else n = cc11001100_hook("n", e, "assign"), i = cc11001100_hook("i", "", "assign");
                n = cc11001100_hook("n", n.replace(/\+/g, " "), "assign"), i = cc11001100_hook("i", i.replace(/\+/g, " "), "assign"), r.push({
                  name: cc11001100_hook("name", n, "object-key-init"),
                  value: cc11001100_hook("value", i, "object-key-init")
                });
              }
            });
            var i = cc11001100_hook("i", [], "var-init");
            return r.forEach(function (e) {
              i.push({
                name: cc11001100_hook("name", decodeURIComponent(e.name), "object-key-init"),
                value: cc11001100_hook("value", decodeURIComponent(e.value), "object-key-init")
              });
            }), i;
          }
          function a(e) {
            cc11001100_hook("e", e, "function-parameter");
            var s = cc11001100_hook("s", this, "var-init");
            this._list = cc11001100_hook("this._list", [], "assign"), e === t || null === e || (e instanceof a ? this._list = cc11001100_hook("this._list", o(String(e)), "assign") : "object" == typeof e && n(e) ? r(e).forEach(function (e) {
              if (!n(e)) throw TypeError();
              var t = cc11001100_hook("t", r(e), "var-init");
              if (2 !== t.length) throw TypeError();
              s._list.push({
                name: cc11001100_hook("name", String(t[0]), "object-key-init"),
                value: cc11001100_hook("value", String(t[1]), "object-key-init")
              });
            }) : "object" == typeof e && e ? Object.keys(e).forEach(function (t) {
              s._list.push({
                name: cc11001100_hook("name", String(t), "object-key-init"),
                value: cc11001100_hook("value", String(e[t]), "object-key-init")
              });
            }) : ("?" === (e = cc11001100_hook("e", String(e), "assign")).substring(0, 1) && (e = cc11001100_hook("e", e.substring(1), "assign")), this._list = cc11001100_hook("this._list", o(e), "assign"))), this._url_object = cc11001100_hook("this._url_object", null, "assign"), this._setList = cc11001100_hook("this._setList", function (e) {
              l || (s._list = cc11001100_hook("s._list", e, "assign"));
            }, "assign");
            var l = cc11001100_hook("l", !1, "var-init");
            this._update_steps = cc11001100_hook("this._update_steps", function () {
              l || (l = cc11001100_hook("l", !0, "assign"), s._url_object && ("about:" === s._url_object.protocol && -1 !== s._url_object.pathname.indexOf("?") && (s._url_object.pathname = cc11001100_hook("s._url_object.pathname", s._url_object.pathname.split("?")[0], "assign")), s._url_object.search = cc11001100_hook("s._url_object.search", i(s._list), "assign"), l = cc11001100_hook("l", !1, "assign")));
            }, "assign");
          }
          function s(e, n) {
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            var r = cc11001100_hook("r", 0, "var-init");
            this.next = cc11001100_hook("this.next", function () {
              if (r >= e.length) return {
                done: cc11001100_hook("done", !0, "object-key-init"),
                value: cc11001100_hook("value", t, "object-key-init")
              };
              var i = cc11001100_hook("i", e[r++], "var-init");
              return {
                done: cc11001100_hook("done", !1, "object-key-init"),
                value: cc11001100_hook("value", "key" === n ? i.name : "value" === n ? i.value : [i.name, i.value], "object-key-init")
              };
            }, "assign");
          }
          function l(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            function r() {
              var e = cc11001100_hook("e", s.href.replace(/#$|\?$|\?(?=#)/g, ""), "var-init");
              s.href !== e && (s.href = cc11001100_hook("s.href", e, "assign"));
            }
            function i() {
              f._setList(s.search ? o(s.search.substring(1)) : []), f._update_steps();
            }
            if (!(this instanceof e.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");
            n && (t = cc11001100_hook("t", function () {
              if (c) return new u(t, n).href;
              var e;
              try {
                var r;
                if ("[object OperaMini]" === Object.prototype.toString.call(window.operamini) ? ((e = cc11001100_hook("e", document.createElement("iframe"), "assign")).style.display = cc11001100_hook("(e = document.createElement(\"iframe\")).style.display", "none", "assign"), document.documentElement.appendChild(e), r = cc11001100_hook("r", e.contentWindow.document, "assign")) : document.implementation && document.implementation.createHTMLDocument ? r = cc11001100_hook("r", document.implementation.createHTMLDocument(""), "assign") : document.implementation && document.implementation.createDocument ? ((r = cc11001100_hook("r", document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null), "assign")).documentElement.appendChild(r.createElement("head")), r.documentElement.appendChild(r.createElement("body"))) : window.ActiveXObject && ((r = cc11001100_hook("r", new window.ActiveXObject("htmlfile"), "assign")).write("<head></head><body></body>"), r.close()), !r) throw Error("base not supported");
                var i = cc11001100_hook("i", r.createElement("base"), "var-init");
                i.href = cc11001100_hook("i.href", n, "assign"), r.getElementsByTagName("head")[0].appendChild(i);
                var o = cc11001100_hook("o", r.createElement("a"), "var-init");
                return o.href = cc11001100_hook("o.href", t, "assign"), o.href;
              } finally {
                e && e.parentNode.removeChild(e);
              }
            }(), "assign"));
            var s = cc11001100_hook("s", function (e) {
                if (c) return new u(e);
                var t = cc11001100_hook("t", document.createElement("a"), "var-init");
                return t.href = cc11001100_hook("t.href", e, "assign"), t;
              }(t || ""), "var-init"),
              l = cc11001100_hook("l", function () {
                if (!("defineProperties" in Object)) return !1;
                try {
                  var e = cc11001100_hook("e", {}, "var-init");
                  return Object.defineProperties(e, {
                    prop: {
                      get: function () {
                        return !0;
                      }
                    }
                  }), e.prop;
                } catch (t) {
                  return !1;
                }
              }(), "var-init"),
              d = cc11001100_hook("d", l ? this : document.createElement("a"), "var-init"),
              f = cc11001100_hook("f", new a(s.search ? s.search.substring(1) : null), "var-init");
            return f._url_object = cc11001100_hook("f._url_object", d, "assign"), Object.defineProperties(d, {
              href: {
                get: function () {
                  return s.href;
                },
                set: function (e) {
                  s.href = cc11001100_hook("s.href", e, "assign"), r(), i();
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              origin: {
                get: function () {
                  return "origin" in s ? s.origin : this.protocol + "//" + this.host;
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              protocol: {
                get: function () {
                  return s.protocol;
                },
                set: function (e) {
                  s.protocol = cc11001100_hook("s.protocol", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              username: {
                get: function () {
                  return s.username;
                },
                set: function (e) {
                  s.username = cc11001100_hook("s.username", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              password: {
                get: function () {
                  return s.password;
                },
                set: function (e) {
                  s.password = cc11001100_hook("s.password", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              host: {
                get: function () {
                  var e = cc11001100_hook("e", {
                    "http:": cc11001100_hook("http:", /:80$/, "object-key-init"),
                    "https:": cc11001100_hook("https:", /:443$/, "object-key-init"),
                    "ftp:": cc11001100_hook("ftp:", /:21$/, "object-key-init")
                  }[s.protocol], "var-init");
                  return e ? s.host.replace(e, "") : s.host;
                },
                set: function (e) {
                  s.host = cc11001100_hook("s.host", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              hostname: {
                get: function () {
                  return s.hostname;
                },
                set: function (e) {
                  s.hostname = cc11001100_hook("s.hostname", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              port: {
                get: function () {
                  return s.port;
                },
                set: function (e) {
                  s.port = cc11001100_hook("s.port", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              pathname: {
                get: function () {
                  return "/" !== s.pathname.charAt(0) ? "/" + s.pathname : s.pathname;
                },
                set: function (e) {
                  s.pathname = cc11001100_hook("s.pathname", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              search: {
                get: function () {
                  return s.search;
                },
                set: function (e) {
                  s.search !== e && (s.search = cc11001100_hook("s.search", e, "assign"), r(), i());
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              searchParams: {
                get: function () {
                  return f;
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              hash: {
                get: function () {
                  return s.hash;
                },
                set: function (e) {
                  s.hash = cc11001100_hook("s.hash", e, "assign"), r();
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              toString: {
                value: function () {
                  return s.toString();
                },
                enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              valueOf: {
                value: function () {
                  return s.valueOf();
                },
                enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              }
            }), d;
          }
          var c,
            u = cc11001100_hook("u", e.URL, "var-init");
          try {
            if (u) {
              if ("searchParams" in (c = cc11001100_hook("c", new e.URL("http://example.com"), "assign"))) {
                var d = cc11001100_hook("d", new l("http://example.com"), "var-init");
                if (d.search = cc11001100_hook("d.search", "a=1&b=2", "assign"), "http://example.com/?a=1&b=2" === d.href && (d.search = cc11001100_hook("d.search", "", "assign"), "http://example.com/" === d.href)) return;
              }
              "href" in c || (c = cc11001100_hook("c", t, "assign")), c = cc11001100_hook("c", t, "assign");
            }
          } catch (p) {}
          if (Object.defineProperties(a.prototype, {
            append: {
              value: function (e, t) {
                this._list.push({
                  name: cc11001100_hook("name", e, "object-key-init"),
                  value: cc11001100_hook("value", t, "object-key-init")
                }), this._update_steps();
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            "delete": {
              value: function (e) {
                for (var t = cc11001100_hook("t", 0, "var-init"); t < this._list.length;) this._list[t].name === e ? this._list.splice(t, 1) : ++t;
                this._update_steps();
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            get: {
              value: function (e) {
                for (var t = cc11001100_hook("t", 0, "var-init"); t < this._list.length; ++t) if (this._list[t].name === e) return this._list[t].value;
                return null;
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            getAll: {
              value: function (e) {
                for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < this._list.length; ++n) this._list[n].name === e && t.push(this._list[n].value);
                return t;
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            has: {
              value: function (e) {
                for (var t = cc11001100_hook("t", 0, "var-init"); t < this._list.length; ++t) if (this._list[t].name === e) return !0;
                return !1;
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            set: {
              value: function (e, t) {
                for (var n = cc11001100_hook("n", !1, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < this._list.length;) this._list[r].name === e ? n ? this._list.splice(r, 1) : (this._list[r].value = cc11001100_hook("this._list[r].value", t, "assign"), n = cc11001100_hook("n", !0, "assign"), ++r) : ++r;
                n || this._list.push({
                  name: cc11001100_hook("name", e, "object-key-init"),
                  value: cc11001100_hook("value", t, "object-key-init")
                }), this._update_steps();
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            entries: {
              value: function () {
                return new s(this._list, "key+value");
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            keys: {
              value: function () {
                return new s(this._list, "key");
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            values: {
              value: function () {
                return new s(this._list, "value");
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            forEach: {
              value: function (e) {
                var n = cc11001100_hook("n", arguments.length > 1 ? arguments[1] : t, "var-init");
                this._list.forEach(function (t) {
                  e.call(n, t.value, t.name);
                });
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            toString: {
              value: function () {
                return i(this._list);
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            }
          }), "Symbol" in e && "iterator" in e.Symbol && (Object.defineProperty(a.prototype, e.Symbol.iterator, {
            value: cc11001100_hook("value", a.prototype.entries, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init")
          }), Object.defineProperty(s.prototype, e.Symbol.iterator, {
            value: function () {
              return this;
            },
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init")
          })), u) for (var f in u) u.hasOwnProperty(f) && "function" == typeof u[f] && (l[f] = cc11001100_hook("l[f]", u[f], "assign"));
          e.URL = cc11001100_hook("e.URL", l, "assign"), e.URLSearchParams = cc11001100_hook("e.URLSearchParams", a, "assign");
        }(), function () {
          if ("1" !== new e.URLSearchParams([["a", 1]]).get("a") || "1" !== new e.URLSearchParams({
            a: cc11001100_hook("a", 1, "object-key-init")
          }).get("a")) {
            var t = cc11001100_hook("t", e.URLSearchParams, "var-init");
            e.URLSearchParams = cc11001100_hook("e.URLSearchParams", function (e) {
              if (e && "object" == typeof e && n(e)) {
                var i = cc11001100_hook("i", new t(), "var-init");
                return r(e).forEach(function (e) {
                  if (!n(e)) throw TypeError();
                  var t = cc11001100_hook("t", r(e), "var-init");
                  if (2 !== t.length) throw TypeError();
                  i.append(t[0], t[1]);
                }), i;
              }
              return e && "object" == typeof e ? (i = cc11001100_hook("i", new t(), "assign"), Object.keys(e).forEach(function (t) {
                i.set(t, e[t]);
              }), i) : new t(e);
            }, "assign");
          }
        }();
      }(self), "fetch" in this || function (e) {
        "use strict";

        function n(e) {
          cc11001100_hook("e", e, "function-parameter");
          if ("string" != typeof e && (e = cc11001100_hook("e", String(e), "assign")), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
          return e.toLowerCase();
        }
        function r(e) {
          cc11001100_hook("e", e, "function-parameter");
          return "string" != typeof e && (e = cc11001100_hook("e", String(e), "assign")), e;
        }
        function i(e) {
          cc11001100_hook("e", e, "function-parameter");
          var n = cc11001100_hook("n", {
            next: function () {
              var n = cc11001100_hook("n", e.shift(), "var-init");
              return {
                done: cc11001100_hook("done", n === t, "object-key-init"),
                value: cc11001100_hook("value", n, "object-key-init")
              };
            }
          }, "var-init");
          return g.iterable && (n[Symbol.iterator] = cc11001100_hook("n[Symbol.iterator]", function () {
            return n;
          }, "assign")), n;
        }
        function o(e) {
          cc11001100_hook("e", e, "function-parameter");
          this.map = cc11001100_hook("this.map", {}, "assign"), e instanceof o ? e.forEach(function (e, t) {
            this.append(t, e);
          }, this) : Array.isArray(e) ? e.forEach(function (e) {
            this.append(e[0], e[1]);
          }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
            this.append(t, e[t]);
          }, this);
        }
        function a(e) {
          cc11001100_hook("e", e, "function-parameter");
          if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
          e.bodyUsed = cc11001100_hook("e.bodyUsed", !0, "assign");
        }
        function s(e) {
          cc11001100_hook("e", e, "function-parameter");
          return new Promise(function (t, n) {
            e.onload = cc11001100_hook("e.onload", function () {
              t(e.result);
            }, "assign"), e.onerror = cc11001100_hook("e.onerror", function () {
              n(e.error);
            }, "assign");
          });
        }
        function l(e) {
          cc11001100_hook("e", e, "function-parameter");
          var t = cc11001100_hook("t", new FileReader(), "var-init"),
            n = cc11001100_hook("n", s(t), "var-init");
          return t.readAsArrayBuffer(e), n;
        }
        function c(e) {
          cc11001100_hook("e", e, "function-parameter");
          if (e.slice) return e.slice(0);
          var t = cc11001100_hook("t", new Uint8Array(e.byteLength), "var-init");
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function u() {
          return this.bodyUsed = cc11001100_hook("this.bodyUsed", !1, "assign"), this._initBody = cc11001100_hook("this._initBody", function (e) {
            if (this._bodyInit = cc11001100_hook("this._bodyInit", e, "assign"), e) {
              if ("string" == typeof e) this._bodyText = cc11001100_hook("this._bodyText", e, "assign");else if (g.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = cc11001100_hook("this._bodyBlob", e, "assign");else if (g.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = cc11001100_hook("this._bodyFormData", e, "assign");else if (g.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = cc11001100_hook("this._bodyText", e.toString(), "assign");else if (g.arrayBuffer && g.blob && v(e)) this._bodyArrayBuffer = cc11001100_hook("this._bodyArrayBuffer", c(e.buffer), "assign"), this._bodyInit = cc11001100_hook("this._bodyInit", new Blob([this._bodyArrayBuffer]), "assign");else {
                if (!g.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !b(e)) throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = cc11001100_hook("this._bodyArrayBuffer", c(e), "assign");
              }
            } else this._bodyText = cc11001100_hook("this._bodyText", "", "assign");
            this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : g.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, "assign"), g.blob && (this.blob = cc11001100_hook("this.blob", function () {
            var e = cc11001100_hook("e", a(this), "var-init");
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, "assign"), this.arrayBuffer = cc11001100_hook("this.arrayBuffer", function () {
            return this._bodyArrayBuffer ? a(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l);
          }, "assign")), this.text = cc11001100_hook("this.text", function () {
            var e = cc11001100_hook("e", a(this), "var-init");
            if (e) return e;
            if (this._bodyBlob) return function (e) {
              var t = cc11001100_hook("t", new FileReader(), "var-init"),
                n = cc11001100_hook("n", s(t), "var-init");
              return t.readAsText(e), n;
            }(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
              for (var t = cc11001100_hook("t", new Uint8Array(e), "var-init"), n = cc11001100_hook("n", new Array(t.length), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) n[r] = cc11001100_hook("n[r]", String.fromCharCode(t[r]), "assign");
              return n.join("");
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, "assign"), g.formData && (this.formData = cc11001100_hook("this.formData", function () {
            return this.text().then(f);
          }, "assign")), this.json = cc11001100_hook("this.json", function () {
            return this.text().then(JSON.parse);
          }, "assign"), this;
        }
        function d(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          var n = cc11001100_hook("n", (t = cc11001100_hook("t", t || {}, "assign")).body, "var-init");
          if (e instanceof d) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = cc11001100_hook("this.url", e.url, "assign"), this.credentials = cc11001100_hook("this.credentials", e.credentials, "assign"), t.headers || (this.headers = cc11001100_hook("this.headers", new o(e.headers), "assign")), this.method = cc11001100_hook("this.method", e.method, "assign"), this.mode = cc11001100_hook("this.mode", e.mode, "assign"), n || null == e._bodyInit || (n = cc11001100_hook("n", e._bodyInit, "assign"), e.bodyUsed = cc11001100_hook("e.bodyUsed", !0, "assign"));
          } else this.url = cc11001100_hook("this.url", String(e), "assign");
          if (this.credentials = cc11001100_hook("this.credentials", t.credentials || this.credentials || "omit", "assign"), !t.headers && this.headers || (this.headers = cc11001100_hook("this.headers", new o(t.headers), "assign")), this.method = cc11001100_hook("this.method", function (e) {
            var t = cc11001100_hook("t", e.toUpperCase(), "var-init");
            return y.indexOf(t) > -1 ? t : e;
          }(t.method || this.method || "GET"), "assign"), this.mode = cc11001100_hook("this.mode", t.mode || this.mode || null, "assign"), this.referrer = cc11001100_hook("this.referrer", null, "assign"), ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(n);
        }
        function f(e) {
          cc11001100_hook("e", e, "function-parameter");
          var t = cc11001100_hook("t", new FormData(), "var-init");
          return e.trim().split("&").forEach(function (e) {
            if (e) {
              var n = cc11001100_hook("n", e.split("="), "var-init"),
                r = cc11001100_hook("r", n.shift().replace(/\+/g, " "), "var-init"),
                i = cc11001100_hook("i", n.join("=").replace(/\+/g, " "), "var-init");
              t.append(decodeURIComponent(r), decodeURIComponent(i));
            }
          }), t;
        }
        function p(e) {
          cc11001100_hook("e", e, "function-parameter");
          var t = cc11001100_hook("t", new o(), "var-init");
          return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (e) {
            var n = cc11001100_hook("n", e.split(":"), "var-init"),
              r = cc11001100_hook("r", n.shift().trim(), "var-init");
            if (r) {
              var i = cc11001100_hook("i", n.join(":").trim(), "var-init");
              t.append(r, i);
            }
          }), t;
        }
        function h(e, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          n || (n = cc11001100_hook("n", {}, "assign")), this.type = cc11001100_hook("this.type", "default", "assign"), this.status = cc11001100_hook("this.status", n.status === t ? 200 : n.status, "assign"), this.ok = cc11001100_hook("this.ok", this.status >= 200 && this.status < 300, "assign"), this.statusText = cc11001100_hook("this.statusText", "statusText" in n ? n.statusText : "OK", "assign"), this.headers = cc11001100_hook("this.headers", new o(n.headers), "assign"), this.url = cc11001100_hook("this.url", n.url || "", "assign"), this._initBody(e);
        }
        var g = cc11001100_hook("g", {
          searchParams: cc11001100_hook("searchParams", "URLSearchParams" in e, "object-key-init"),
          iterable: cc11001100_hook("iterable", "Symbol" in e && "iterator" in Symbol, "object-key-init"),
          blob: cc11001100_hook("blob", "FileReader" in e && "Blob" in e && function () {
            try {
              return new Blob(), !0;
            } catch (e) {
              return !1;
            }
          }(), "object-key-init"),
          formData: cc11001100_hook("formData", "FormData" in e, "object-key-init"),
          arrayBuffer: cc11001100_hook("arrayBuffer", "ArrayBuffer" in e, "object-key-init")
        }, "var-init");
        if (g.arrayBuffer) var m = cc11001100_hook("m", ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], "var-init"),
          v = function (e) {
            return e && DataView.prototype.isPrototypeOf(e);
          },
          b = cc11001100_hook("b", ArrayBuffer.isView || function (e) {
            return e && m.indexOf(Object.prototype.toString.call(e)) > -1;
          }, "var-init");
        o.prototype.append = cc11001100_hook("o.prototype.append", function (e, t) {
          e = cc11001100_hook("e", n(e), "assign"), t = cc11001100_hook("t", r(t), "assign");
          var i = cc11001100_hook("i", this.map[e], "var-init");
          this.map[e] = cc11001100_hook("this.map[e]", i ? i + "," + t : t, "assign");
        }, "assign"), o.prototype["delete"] = cc11001100_hook("o.prototype[\"delete\"]", function (e) {
          delete this.map[n(e)];
        }, "assign"), o.prototype.get = cc11001100_hook("o.prototype.get", function (e) {
          return e = cc11001100_hook("e", n(e), "assign"), this.has(e) ? this.map[e] : null;
        }, "assign"), o.prototype.has = cc11001100_hook("o.prototype.has", function (e) {
          return this.map.hasOwnProperty(n(e));
        }, "assign"), o.prototype.set = cc11001100_hook("o.prototype.set", function (e, t) {
          this.map[n(e)] = cc11001100_hook("this.map[n(e)]", r(t), "assign");
        }, "assign"), o.prototype.forEach = cc11001100_hook("o.prototype.forEach", function (e, t) {
          for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
        }, "assign"), o.prototype.keys = cc11001100_hook("o.prototype.keys", function () {
          var e = cc11001100_hook("e", [], "var-init");
          return this.forEach(function (t, n) {
            e.push(n);
          }), i(e);
        }, "assign"), o.prototype.values = cc11001100_hook("o.prototype.values", function () {
          var e = cc11001100_hook("e", [], "var-init");
          return this.forEach(function (t) {
            e.push(t);
          }), i(e);
        }, "assign"), o.prototype.entries = cc11001100_hook("o.prototype.entries", function () {
          var e = cc11001100_hook("e", [], "var-init");
          return this.forEach(function (t, n) {
            e.push([n, t]);
          }), i(e);
        }, "assign"), g.iterable && (o.prototype[Symbol.iterator] = cc11001100_hook("o.prototype[Symbol.iterator]", o.prototype.entries, "assign"));
        var y = cc11001100_hook("y", ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"], "var-init");
        d.prototype.clone = cc11001100_hook("d.prototype.clone", function () {
          return new d(this, {
            body: cc11001100_hook("body", this._bodyInit, "object-key-init")
          });
        }, "assign"), u.call(d.prototype), u.call(h.prototype), h.prototype.clone = cc11001100_hook("h.prototype.clone", function () {
          return new h(this._bodyInit, {
            status: cc11001100_hook("status", this.status, "object-key-init"),
            statusText: cc11001100_hook("statusText", this.statusText, "object-key-init"),
            headers: cc11001100_hook("headers", new o(this.headers), "object-key-init"),
            url: cc11001100_hook("url", this.url, "object-key-init")
          });
        }, "assign"), h.error = cc11001100_hook("h.error", function () {
          var e = cc11001100_hook("e", new h(null, {
            status: cc11001100_hook("status", 0, "object-key-init"),
            statusText: cc11001100_hook("statusText", "", "object-key-init")
          }), "var-init");
          return e.type = cc11001100_hook("e.type", "error", "assign"), e;
        }, "assign");
        var w = cc11001100_hook("w", [301, 302, 303, 307, 308], "var-init");
        h.redirect = cc11001100_hook("h.redirect", function (e, t) {
          if (-1 === w.indexOf(t)) throw new RangeError("Invalid status code");
          return new h(null, {
            status: cc11001100_hook("status", t, "object-key-init"),
            headers: {
              location: cc11001100_hook("location", e, "object-key-init")
            }
          });
        }, "assign"), e.Headers = cc11001100_hook("e.Headers", o, "assign"), e.Request = cc11001100_hook("e.Request", d, "assign"), e.Response = cc11001100_hook("e.Response", h, "assign"), e.fetch = cc11001100_hook("e.fetch", function (e, t) {
          return new Promise(function (n, r) {
            var i = cc11001100_hook("i", new d(e, t), "var-init"),
              o = cc11001100_hook("o", new XMLHttpRequest(), "var-init");
            o.onload = cc11001100_hook("o.onload", function () {
              var e = cc11001100_hook("e", {
                status: cc11001100_hook("status", o.status, "object-key-init"),
                statusText: cc11001100_hook("statusText", o.statusText, "object-key-init"),
                headers: cc11001100_hook("headers", p(o.getAllResponseHeaders() || ""), "object-key-init")
              }, "var-init");
              e.url = cc11001100_hook("e.url", "responseURL" in o ? o.responseURL : e.headers.get("X-Request-URL"), "assign");
              var t = cc11001100_hook("t", "response" in o ? o.response : o.responseText, "var-init");
              n(new h(t, e));
            }, "assign"), o.onerror = cc11001100_hook("o.onerror", function () {
              r(new TypeError("Network request failed"));
            }, "assign"), o.ontimeout = cc11001100_hook("o.ontimeout", function () {
              r(new TypeError("Network request failed"));
            }, "assign"), o.open(i.method, i.url, !0), "include" === i.credentials ? o.withCredentials = cc11001100_hook("o.withCredentials", !0, "assign") : "omit" === i.credentials && (o.withCredentials = cc11001100_hook("o.withCredentials", !1, "assign")), "responseType" in o && g.blob && (o.responseType = cc11001100_hook("o.responseType", "blob", "assign")), i.headers.forEach(function (e, t) {
              o.setRequestHeader(t, e);
            }), o.send("undefined" == typeof i._bodyInit ? null : i._bodyInit);
          });
        }, "assign"), e.fetch.polyfill = cc11001100_hook("e.fetch.polyfill", !0, "assign");
      }("undefined" != typeof self ? self : this), "object" != typeof globalThis && function () {
        function t(e) {
          cc11001100_hook("e", e, "function-parameter");
          return e && e.Object == Object && e;
        }
        var n = cc11001100_hook("n", t("object" == typeof a && a), "var-init"),
          r = cc11001100_hook("r", t("object" == typeof window && window), "var-init"),
          i = cc11001100_hook("i", t("object" == typeof self && self), "var-init"),
          o = cc11001100_hook("o", t("object" == typeof e && e), "var-init"),
          a = cc11001100_hook("a", n || r || i || o || Function("return this")(), "var-init");
        try {
          Object.defineProperty(a, "globalThis", {
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", a, "object-key-init")
          });
        } catch (s) {
          a.globalThis = cc11001100_hook("a.globalThis", a, "assign");
        }
      }(), function (e) {
        if (!("Event" in e)) return !1;
        if ("function" == typeof e.Event) return !0;
        try {
          return new Event("click"), !0;
        } catch (_) {
          return !1;
        }
      }(this) || function () {
        function e(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          for (var n = cc11001100_hook("n", -1, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); ++n < r;) if (n in e && e[n] === t) return n;
          return -1;
        }
        var n = cc11001100_hook("n", {
          click: cc11001100_hook("click", 1, "object-key-init"),
          dblclick: cc11001100_hook("dblclick", 1, "object-key-init"),
          keyup: cc11001100_hook("keyup", 1, "object-key-init"),
          keypress: cc11001100_hook("keypress", 1, "object-key-init"),
          keydown: cc11001100_hook("keydown", 1, "object-key-init"),
          mousedown: cc11001100_hook("mousedown", 1, "object-key-init"),
          mouseup: cc11001100_hook("mouseup", 1, "object-key-init"),
          mousemove: cc11001100_hook("mousemove", 1, "object-key-init"),
          mouseover: cc11001100_hook("mouseover", 1, "object-key-init"),
          mouseenter: cc11001100_hook("mouseenter", 1, "object-key-init"),
          mouseleave: cc11001100_hook("mouseleave", 1, "object-key-init"),
          mouseout: cc11001100_hook("mouseout", 1, "object-key-init"),
          storage: cc11001100_hook("storage", 1, "object-key-init"),
          storagecommit: cc11001100_hook("storagecommit", 1, "object-key-init"),
          textinput: cc11001100_hook("textinput", 1, "object-key-init")
        }, "var-init");
        if ("undefined" != typeof document && "undefined" != typeof window) {
          var r = cc11001100_hook("r", window.Event && window.Event.prototype || null, "var-init");
          window.Event = cc11001100_hook("window.Event", Window.prototype.Event = cc11001100_hook("Window.prototype.Event", function (e, n) {
            if (!e) throw new Error("Not enough arguments");
            var r;
            if ("createEvent" in document) {
              r = cc11001100_hook("r", document.createEvent("Event"), "assign");
              var i = cc11001100_hook("i", !(!n || n.bubbles === t) && n.bubbles, "var-init"),
                o = cc11001100_hook("o", !(!n || n.cancelable === t) && n.cancelable, "var-init");
              return r.initEvent(e, i, o), r;
            }
            return (r = cc11001100_hook("r", document.createEventObject(), "assign")).type = cc11001100_hook("(r = document.createEventObject()).type", e, "assign"), r.bubbles = cc11001100_hook("r.bubbles", !(!n || n.bubbles === t) && n.bubbles, "assign"), r.cancelable = cc11001100_hook("r.cancelable", !(!n || n.cancelable === t) && n.cancelable, "assign"), r;
          }, "assign"), "assign"), r && Object.defineProperty(window.Event, "prototype", {
            configurable: cc11001100_hook("configurable", !1, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", r, "object-key-init")
          }), "createEvent" in document || (window.addEventListener = cc11001100_hook("window.addEventListener", Window.prototype.addEventListener = cc11001100_hook("Window.prototype.addEventListener", Document.prototype.addEventListener = cc11001100_hook("Document.prototype.addEventListener", Element.prototype.addEventListener = cc11001100_hook("Element.prototype.addEventListener", function () {
            var t = cc11001100_hook("t", this, "var-init"),
              r = cc11001100_hook("r", arguments[0], "var-init"),
              i = cc11001100_hook("i", arguments[1], "var-init");
            if (t === window && r in n) throw new Error("In IE8 the event: " + r + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
            t._events || (t._events = cc11001100_hook("t._events", {}, "assign")), t._events[r] || (t._events[r] = cc11001100_hook("t._events[r]", function (n) {
              var r,
                i = cc11001100_hook("i", t._events[n.type].list, "var-init"),
                o = cc11001100_hook("o", i.slice(), "var-init"),
                a = cc11001100_hook("a", -1, "var-init"),
                s = cc11001100_hook("s", o.length, "var-init");
              for (n.preventDefault = cc11001100_hook("n.preventDefault", function () {
                !1 !== n.cancelable && (n.returnValue = cc11001100_hook("n.returnValue", !1, "assign"));
              }, "assign"), n.stopPropagation = cc11001100_hook("n.stopPropagation", function () {
                n.cancelBubble = cc11001100_hook("n.cancelBubble", !0, "assign");
              }, "assign"), n.stopImmediatePropagation = cc11001100_hook("n.stopImmediatePropagation", function () {
                n.cancelBubble = cc11001100_hook("n.cancelBubble", !0, "assign"), n.cancelImmediate = cc11001100_hook("n.cancelImmediate", !0, "assign");
              }, "assign"), n.currentTarget = cc11001100_hook("n.currentTarget", t, "assign"), n.relatedTarget = cc11001100_hook("n.relatedTarget", n.fromElement || null, "assign"), n.target = cc11001100_hook("n.target", n.target || n.srcElement || t, "assign"), n.timeStamp = cc11001100_hook("n.timeStamp", new Date().getTime(), "assign"), n.clientX && (n.pageX = cc11001100_hook("n.pageX", n.clientX + document.documentElement.scrollLeft, "assign"), n.pageY = cc11001100_hook("n.pageY", n.clientY + document.documentElement.scrollTop, "assign")); ++a < s && !n.cancelImmediate;) a in o && -1 !== e(i, r = cc11001100_hook("r", o[a], "assign")) && "function" == typeof r && r.call(t, n);
            }, "assign"), t._events[r].list = cc11001100_hook("t._events[r].list", [], "assign"), t.attachEvent && t.attachEvent("on" + r, t._events[r])), t._events[r].list.push(i);
          }, "assign"), "assign"), "assign"), "assign"), window.removeEventListener = cc11001100_hook("window.removeEventListener", Window.prototype.removeEventListener = cc11001100_hook("Window.prototype.removeEventListener", Document.prototype.removeEventListener = cc11001100_hook("Document.prototype.removeEventListener", Element.prototype.removeEventListener = cc11001100_hook("Element.prototype.removeEventListener", function () {
            var t,
              n = cc11001100_hook("n", this, "var-init"),
              r = cc11001100_hook("r", arguments[0], "var-init"),
              i = cc11001100_hook("i", arguments[1], "var-init");
            n._events && n._events[r] && n._events[r].list && -1 !== (t = cc11001100_hook("t", e(n._events[r].list, i), "assign")) && (n._events[r].list.splice(t, 1), n._events[r].list.length || (n.detachEvent && n.detachEvent("on" + r, n._events[r]), delete n._events[r]));
          }, "assign"), "assign"), "assign"), "assign"), window.dispatchEvent = cc11001100_hook("window.dispatchEvent", Window.prototype.dispatchEvent = cc11001100_hook("Window.prototype.dispatchEvent", Document.prototype.dispatchEvent = cc11001100_hook("Document.prototype.dispatchEvent", Element.prototype.dispatchEvent = cc11001100_hook("Element.prototype.dispatchEvent", function (e) {
            if (!arguments.length) throw new Error("Not enough arguments");
            if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
            var t = cc11001100_hook("t", this, "var-init"),
              n = cc11001100_hook("n", e.type, "var-init");
            try {
              if (!e.bubbles) {
                e.cancelBubble = cc11001100_hook("e.cancelBubble", !0, "assign");
                var r = function (e) {
                  e.cancelBubble = cc11001100_hook("e.cancelBubble", !0, "assign"), (t || window).detachEvent("on" + n, r);
                };
                this.attachEvent("on" + n, r);
              }
              this.fireEvent("on" + n, e);
            } catch (i) {
              e.target = cc11001100_hook("e.target", t, "assign");
              do {
                e.currentTarget = cc11001100_hook("e.currentTarget", t, "assign"), "_events" in t && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), t = cc11001100_hook("t", 9 === t.nodeType ? t.parentWindow : t.parentNode, "assign");
              } while (t && !e.cancelBubble);
            }
            return !0;
          }, "assign"), "assign"), "assign"), "assign"), document.attachEvent("onreadystatechange", function () {
            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
              bubbles: cc11001100_hook("bubbles", !0, "object-key-init")
            }));
          }));
        }
      }();
    }).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof e && e || {});
  }).call(this, n(27));
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", {
    getContainerDom: function (e) {
      var t = cc11001100_hook("t", document.querySelector("#aging-tools-pc"), "var-init");
      return null != t ? t : void 0 !== e && e.body ? e.body : document.body;
    }
  }, "assign");
}, function (e, t, n) {
  var r,
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init");
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e.atomicText && !e.isregion) return e.describedbyText;
    var t = cc11001100_hook("t", e.labelledbyText || e.label || e.labelledby || e.describedbyText || e.labelforText || e.toolTipText || e.placeholder || e.title || e.alt || e.labelWrapperText || "", "var-init");
    return "" == t && e.isregion && ([].indexOf.call(["a"], e.role) > -1 || e.text && e.text.length < 50) ? e.text : t;
  }
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    r || (r = cc11001100_hook("r", o.Language, "assign"));
    var t = cc11001100_hook("t", "", "var-init");
    return e.atomicText ? t += cc11001100_hook("t", "," + e.atomicText, "assign") : e.label || e.title || e.alt || e.toolTipText ? e.value && "checkbox" != e.role ? "," + r.curvalue + e.value : "" : (e.valueText ? t += cc11001100_hook("t", "," + e.valueText, "assign") : e.value ? t += cc11001100_hook("t", "," + r.curvalue + e.value, "assign") : e.text && (t += cc11001100_hook("t", "," + e.text, "assign")), e.valueminText && (t += cc11001100_hook("t", "," + r.min + e.valueminText, "assign")), e.valuemaxText && (t += cc11001100_hook("t", "," + r.max + e.valuemaxText, "assign")), t);
  }
  function l(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", "", "var-init");
    return r || (r = cc11001100_hook("r", o.Language, "assign")), r && void 0 !== t && (n = cc11001100_hook("n", t ? "," + r[e] : "," + r["un" + e], "assign")), n;
  }
  function c(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", "", "var-init");
    return t && (n = cc11001100_hook("n", "," + r[e], "assign")), n;
  }
  e.exports = cc11001100_hook("e.exports", {
    lastDesc: function (e) {
      if (3 == e.firstNode.nodeType) return e.firstNode.nodeValue;
      if ("true" == e.ariaAttr("autolabel") && "true" != e.ariaAttr("setlabel")) return e.aria.label;
      var t = cc11001100_hook("t", "", "var-init"),
        n = cc11001100_hook("n", e.aria, "var-init");
      if (r || (r = cc11001100_hook("r", o.Language, "assign")), !n || n.busy) return "";
      var u = cc11001100_hook("u", n.roleText, "var-init");
      if (t += cc11001100_hook("t", c("readonly", n.readonly), "assign"), t += cc11001100_hook("t", c("multiselectable", n.multiselectable), "assign"), t += cc11001100_hook("t", c("multiLine", n.multiLine), "assign"), n.multiple && (t += cc11001100_hook("t", r.multiple, "assign")), n.isregion) {
        var d = cc11001100_hook("d", r["regiontype" + e.ariaAttr("regiontype")], "var-init");
        d && (t += cc11001100_hook("t", d, "assign"));
      }
      u && (t += cc11001100_hook("t", u, "assign"));
      var f = cc11001100_hook("f", a(n), "var-init");
      if ("" == f && n.isregion) {
        var p = cc11001100_hook("p", e.find("h1,h2,h3,h4,h5,h6,title,.title,title"), "var-init");
        p.length > 0 && (f = cc11001100_hook("f", p.aria.text, "assign"));
      }
      return t += cc11001100_hook("t", "," + f, "assign"), n.isregion || ([].indexOf.call(["password", "video"], e.aria.role) < 0 && (t += cc11001100_hook("t", "," + s(n), "assign")), t += cc11001100_hook("t", "," + function (e) {
        r || (r = cc11001100_hook("r", o.Language, "assign"));
        var t = cc11001100_hook("t", "", "var-init");
        try {
          t += cc11001100_hook("t", c("disabled", e.disabled), "assign"), t += cc11001100_hook("t", l("checked", e.checked), "assign"), t += cc11001100_hook("t", l("expanded", e.expanded), "assign"), (t += cc11001100_hook("t", l("selected", e.selected), "assign")).length > 0 && (t = cc11001100_hook("t", r.curstatus + t, "assign"));
        } catch (n) {}
        return t;
      }(n), "assign")), n.described && (t += cc11001100_hook("t", "," + n.described, "assign")), i.isMobile() || (t += cc11001100_hook("t", c("haspopup", n.haspopup), "assign")), t = cc11001100_hook("t", i.formatStrToRead(t, !0), "assign"), i.isMobile() && o.voice.enable && [].indexOf.call(i.HtmlElemRoles.mobileDoubleInre, e.aria.role) > -1 && (t += cc11001100_hook("t", ",双击激活操作", "assign")), !i.isMobile() && e.ariaAttr("popup") && (t += cc11001100_hook("t", ",按esc退出弹出浮层", "assign")), t.length > 0 && "," == t.substring(0, 1) && (t = cc11001100_hook("t", t.substring(1, t.length), "assign")), t;
    },
    descText: cc11001100_hook("descText", a, "object-key-init"),
    mainText: cc11001100_hook("mainText", s, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(14), "var-init"),
    i = function () {
      return "aria/" + window.ariaAppId + "/status/";
    };
  e.exports = cc11001100_hook("e.exports", {
    setCookie: function (e, t) {
      r.set(i() + e, t);
    },
    getCookie: function (e) {
      return r.get(i() + e);
    }
  }, "assign");
}, function (e, t, n) {
  n(71);
  var r = cc11001100_hook("r", ["aero", "arpa", "asia", "biz", "cat", "club", "com", "coop", "date", "edu", "firm", "gift", "gov", "help", "info", "int", "jobs", "link", "mil", "mobi", "mtn", "museum", "name", "net", "news", "online", "org", "part", "photo", "pics", "post", "pro", "rec", "ren", "studio", "tel", "top", "trade", "travel", "video", "wang", "win", "wtf", "xin", "xxx", "xyz", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"], "var-init");
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(e);
  }
  e.exports = cc11001100_hook("e.exports", {
    getDomain: function (e) {
      if (e || (e = cc11001100_hook("e", document.location.href, "assign")), i((e = cc11001100_hook("e", new URL(e), "assign")).hostname)) return e.hostname;
      var t = cc11001100_hook("t", e.hostname.split("."), "var-init");
      if (1 == t.length) return document.domain;
      var n = cc11001100_hook("n", -2, "var-init");
      return [].indexOf.call(r, t[t.length - 1]) > -1 && [].indexOf.call(["com", "gov", "org", "net", "sh"], t[t.length - 2]) > -1 && (n = cc11001100_hook("n", -3, "assign")), "." + t.slice(n).join(".");
    },
    isValidIP: cc11001100_hook("isValidIP", i, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  (function (e) {
    (function (e) {
      (function (e) {
        "use strict";

        try {
          var t = cc11001100_hook("t", new e.URL("http://example.com"), "var-init");
          if ("href" in t && "searchParams" in t) {
            var n = cc11001100_hook("n", new URL("http://example.com"), "var-init");
            if (n.search = cc11001100_hook("n.search", "a=1&b=2", "assign"), "http://example.com/?a=1&b=2" === n.href && (n.search = cc11001100_hook("n.search", "", "assign"), "http://example.com/" === n.href)) return !0;
          }
          return !1;
        } catch (r) {
          return !1;
        }
      })(this) || function (t) {
        "use strict";

        function n(e) {
          cc11001100_hook("e", e, "function-parameter");
          return !!e && ("Symbol" in t && "iterator" in t.Symbol && "function" == typeof e[Symbol.iterator] || !!Array.isArray(e));
        }
        function r(e) {
          cc11001100_hook("e", e, "function-parameter");
          return "from" in Array ? Array.from(e) : Array.prototype.slice.call(e);
        }
        !function () {
          function i(e) {
            cc11001100_hook("e", e, "function-parameter");
            var t = cc11001100_hook("t", "", "var-init"),
              n = cc11001100_hook("n", !0, "var-init");
            return e.forEach(function (e) {
              var r = cc11001100_hook("r", encodeURIComponent(e.name), "var-init"),
                i = cc11001100_hook("i", encodeURIComponent(e.value), "var-init");
              n || (t += cc11001100_hook("t", "&", "assign")), t += cc11001100_hook("t", r + "=" + i, "assign"), n = cc11001100_hook("n", !1, "assign");
            }), t.replace(/%20/g, "+");
          }
          function o(e, t) {
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("t", t, "function-parameter");
            var n = cc11001100_hook("n", e.split("&"), "var-init");
            t && -1 === n[0].indexOf("=") && (n[0] = cc11001100_hook("n[0]", "=" + n[0], "assign"));
            var r = cc11001100_hook("r", [], "var-init");
            n.forEach(function (e) {
              if (0 !== e.length) {
                var t = cc11001100_hook("t", e.indexOf("="), "var-init");
                if (-1 !== t) var n = cc11001100_hook("n", e.substring(0, t), "var-init"),
                  i = cc11001100_hook("i", e.substring(t + 1), "var-init");else n = cc11001100_hook("n", e, "assign"), i = cc11001100_hook("i", "", "assign");
                n = cc11001100_hook("n", n.replace(/\+/g, " "), "assign"), i = cc11001100_hook("i", i.replace(/\+/g, " "), "assign"), r.push({
                  name: cc11001100_hook("name", n, "object-key-init"),
                  value: cc11001100_hook("value", i, "object-key-init")
                });
              }
            });
            var i = cc11001100_hook("i", [], "var-init");
            return r.forEach(function (e) {
              i.push({
                name: cc11001100_hook("name", decodeURIComponent(e.name), "object-key-init"),
                value: cc11001100_hook("value", decodeURIComponent(e.value), "object-key-init")
              });
            }), i;
          }
          function a(t) {
            cc11001100_hook("t", t, "function-parameter");
            var s = cc11001100_hook("s", this, "var-init");
            this._list = cc11001100_hook("this._list", [], "assign"), t === e || null === t || (t instanceof a ? this._list = cc11001100_hook("this._list", o(String(t)), "assign") : "object" == typeof t && n(t) ? r(t).forEach(function (e) {
              if (!n(e)) throw TypeError();
              var t = cc11001100_hook("t", r(e), "var-init");
              if (2 !== t.length) throw TypeError();
              s._list.push({
                name: cc11001100_hook("name", String(t[0]), "object-key-init"),
                value: cc11001100_hook("value", String(t[1]), "object-key-init")
              });
            }) : "object" == typeof t && t ? Object.keys(t).forEach(function (e) {
              s._list.push({
                name: cc11001100_hook("name", String(e), "object-key-init"),
                value: cc11001100_hook("value", String(t[e]), "object-key-init")
              });
            }) : ("?" === (t = cc11001100_hook("t", String(t), "assign")).substring(0, 1) && (t = cc11001100_hook("t", t.substring(1), "assign")), this._list = cc11001100_hook("this._list", o(t), "assign"))), this._url_object = cc11001100_hook("this._url_object", null, "assign"), this._setList = cc11001100_hook("this._setList", function (e) {
              l || (s._list = cc11001100_hook("s._list", e, "assign"));
            }, "assign");
            var l = cc11001100_hook("l", !1, "var-init");
            this._update_steps = cc11001100_hook("this._update_steps", function () {
              l || (l = cc11001100_hook("l", !0, "assign"), s._url_object && ("about:" === s._url_object.protocol && -1 !== s._url_object.pathname.indexOf("?") && (s._url_object.pathname = cc11001100_hook("s._url_object.pathname", s._url_object.pathname.split("?")[0], "assign")), s._url_object.search = cc11001100_hook("s._url_object.search", i(s._list), "assign"), l = cc11001100_hook("l", !1, "assign")));
            }, "assign");
          }
          function s(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            var r = cc11001100_hook("r", 0, "var-init");
            this.next = cc11001100_hook("this.next", function () {
              if (r >= t.length) return {
                done: cc11001100_hook("done", !0, "object-key-init"),
                value: cc11001100_hook("value", e, "object-key-init")
              };
              var i = cc11001100_hook("i", t[r++], "var-init");
              return {
                done: cc11001100_hook("done", !1, "object-key-init"),
                value: cc11001100_hook("value", "key" === n ? i.name : "value" === n ? i.value : [i.name, i.value], "object-key-init")
              };
            }, "assign");
          }
          function l(e, n) {
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            function r() {
              var e = cc11001100_hook("e", s.href.replace(/#$|\?$|\?(?=#)/g, ""), "var-init");
              s.href !== e && (s.href = cc11001100_hook("s.href", e, "assign"));
            }
            function i() {
              f._setList(s.search ? o(s.search.substring(1)) : []), f._update_steps();
            }
            if (!(this instanceof t.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");
            n && (e = cc11001100_hook("e", function () {
              if (c) return new u(e, n).href;
              var t;
              try {
                var r;
                if ("[object OperaMini]" === Object.prototype.toString.call(window.operamini) ? ((t = cc11001100_hook("t", document.createElement("iframe"), "assign")).style.display = cc11001100_hook("(t = document.createElement(\"iframe\")).style.display", "none", "assign"), document.documentElement.appendChild(t), r = cc11001100_hook("r", t.contentWindow.document, "assign")) : document.implementation && document.implementation.createHTMLDocument ? r = cc11001100_hook("r", document.implementation.createHTMLDocument(""), "assign") : document.implementation && document.implementation.createDocument ? ((r = cc11001100_hook("r", document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null), "assign")).documentElement.appendChild(r.createElement("head")), r.documentElement.appendChild(r.createElement("body"))) : window.ActiveXObject && ((r = cc11001100_hook("r", new window.ActiveXObject("htmlfile"), "assign")).write("<head></head><body></body>"), r.close()), !r) throw Error("base not supported");
                var i = cc11001100_hook("i", r.createElement("base"), "var-init");
                i.href = cc11001100_hook("i.href", n, "assign"), r.getElementsByTagName("head")[0].appendChild(i);
                var o = cc11001100_hook("o", r.createElement("a"), "var-init");
                return o.href = cc11001100_hook("o.href", e, "assign"), o.href;
              } finally {
                t && t.parentNode.removeChild(t);
              }
            }(), "assign"));
            var s = cc11001100_hook("s", function (e) {
                if (c) return new u(e);
                var t = cc11001100_hook("t", document.createElement("a"), "var-init");
                return t.href = cc11001100_hook("t.href", e, "assign"), t;
              }(e || ""), "var-init"),
              l = cc11001100_hook("l", function () {
                if (!("defineProperties" in Object)) return !1;
                try {
                  var t = cc11001100_hook("t", {}, "var-init");
                  return Object.defineProperties(t, {
                    prop: {
                      get: function () {
                        return !0;
                      }
                    }
                  }), t.prop;
                } catch (e) {
                  return !1;
                }
              }(), "var-init"),
              d = cc11001100_hook("d", l ? this : document.createElement("a"), "var-init"),
              f = cc11001100_hook("f", new a(s.search ? s.search.substring(1) : null), "var-init");
            return f._url_object = cc11001100_hook("f._url_object", d, "assign"), Object.defineProperties(d, {
              href: {
                get: function () {
                  return s.href;
                },
                set: function (e) {
                  s.href = cc11001100_hook("s.href", e, "assign"), r(), i();
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              origin: {
                get: function () {
                  return "origin" in s ? s.origin : this.protocol + "//" + this.host;
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              protocol: {
                get: function () {
                  return s.protocol;
                },
                set: function (e) {
                  s.protocol = cc11001100_hook("s.protocol", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              username: {
                get: function () {
                  return s.username;
                },
                set: function (e) {
                  s.username = cc11001100_hook("s.username", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              password: {
                get: function () {
                  return s.password;
                },
                set: function (e) {
                  s.password = cc11001100_hook("s.password", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              host: {
                get: function () {
                  var e = cc11001100_hook("e", {
                    "http:": cc11001100_hook("http:", /:80$/, "object-key-init"),
                    "https:": cc11001100_hook("https:", /:443$/, "object-key-init"),
                    "ftp:": cc11001100_hook("ftp:", /:21$/, "object-key-init")
                  }[s.protocol], "var-init");
                  return e ? s.host.replace(e, "") : s.host;
                },
                set: function (e) {
                  s.host = cc11001100_hook("s.host", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              hostname: {
                get: function () {
                  return s.hostname;
                },
                set: function (e) {
                  s.hostname = cc11001100_hook("s.hostname", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              port: {
                get: function () {
                  return s.port;
                },
                set: function (e) {
                  s.port = cc11001100_hook("s.port", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              pathname: {
                get: function () {
                  return "/" !== s.pathname.charAt(0) ? "/" + s.pathname : s.pathname;
                },
                set: function (e) {
                  s.pathname = cc11001100_hook("s.pathname", e, "assign");
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              search: {
                get: function () {
                  return s.search;
                },
                set: function (e) {
                  s.search !== e && (s.search = cc11001100_hook("s.search", e, "assign"), r(), i());
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              searchParams: {
                get: function () {
                  return f;
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              hash: {
                get: function () {
                  return s.hash;
                },
                set: function (e) {
                  s.hash = cc11001100_hook("s.hash", e, "assign"), r();
                },
                enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              toString: {
                value: function () {
                  return s.toString();
                },
                enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              },
              valueOf: {
                value: function () {
                  return s.valueOf();
                },
                enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
                configurable: cc11001100_hook("configurable", !0, "object-key-init")
              }
            }), d;
          }
          var c,
            u = cc11001100_hook("u", t.URL, "var-init");
          try {
            if (u) {
              if ("searchParams" in (c = cc11001100_hook("c", new t.URL("http://example.com"), "assign"))) {
                var d = cc11001100_hook("d", new l("http://example.com"), "var-init");
                if (d.search = cc11001100_hook("d.search", "a=1&b=2", "assign"), "http://example.com/?a=1&b=2" === d.href && (d.search = cc11001100_hook("d.search", "", "assign"), "http://example.com/" === d.href)) return;
              }
              "href" in c || (c = cc11001100_hook("c", e, "assign")), c = cc11001100_hook("c", e, "assign");
            }
          } catch (p) {}
          if (Object.defineProperties(a.prototype, {
            append: {
              value: function (e, t) {
                this._list.push({
                  name: cc11001100_hook("name", e, "object-key-init"),
                  value: cc11001100_hook("value", t, "object-key-init")
                }), this._update_steps();
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            "delete": {
              value: function (e) {
                for (var t = cc11001100_hook("t", 0, "var-init"); t < this._list.length;) this._list[t].name === e ? this._list.splice(t, 1) : ++t;
                this._update_steps();
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            get: {
              value: function (e) {
                for (var t = cc11001100_hook("t", 0, "var-init"); t < this._list.length; ++t) if (this._list[t].name === e) return this._list[t].value;
                return null;
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            getAll: {
              value: function (e) {
                for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < this._list.length; ++n) this._list[n].name === e && t.push(this._list[n].value);
                return t;
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            has: {
              value: function (e) {
                for (var t = cc11001100_hook("t", 0, "var-init"); t < this._list.length; ++t) if (this._list[t].name === e) return !0;
                return !1;
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            set: {
              value: function (e, t) {
                for (var n = cc11001100_hook("n", !1, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < this._list.length;) this._list[r].name === e ? n ? this._list.splice(r, 1) : (this._list[r].value = cc11001100_hook("this._list[r].value", t, "assign"), n = cc11001100_hook("n", !0, "assign"), ++r) : ++r;
                n || this._list.push({
                  name: cc11001100_hook("name", e, "object-key-init"),
                  value: cc11001100_hook("value", t, "object-key-init")
                }), this._update_steps();
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            entries: {
              value: function () {
                return new s(this._list, "key+value");
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            keys: {
              value: function () {
                return new s(this._list, "key");
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            values: {
              value: function () {
                return new s(this._list, "value");
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            forEach: {
              value: function (t) {
                var n = cc11001100_hook("n", arguments.length > 1 ? arguments[1] : e, "var-init");
                this._list.forEach(function (e) {
                  t.call(n, e.value, e.name);
                });
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            },
            toString: {
              value: function () {
                return i(this._list);
              },
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            }
          }), "Symbol" in t && "iterator" in t.Symbol && (Object.defineProperty(a.prototype, t.Symbol.iterator, {
            value: cc11001100_hook("value", a.prototype.entries, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init")
          }), Object.defineProperty(s.prototype, t.Symbol.iterator, {
            value: function () {
              return this;
            },
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init")
          })), u) for (var f in u) u.hasOwnProperty(f) && "function" == typeof u[f] && (l[f] = cc11001100_hook("l[f]", u[f], "assign"));
          t.URL = cc11001100_hook("t.URL", l, "assign"), t.URLSearchParams = cc11001100_hook("t.URLSearchParams", a, "assign");
        }(), function () {
          if ("1" !== new t.URLSearchParams([["a", 1]]).get("a") || "1" !== new t.URLSearchParams({
            a: cc11001100_hook("a", 1, "object-key-init")
          }).get("a")) {
            var e = cc11001100_hook("e", t.URLSearchParams, "var-init");
            t.URLSearchParams = cc11001100_hook("t.URLSearchParams", function (t) {
              if (t && "object" == typeof t && n(t)) {
                var i = cc11001100_hook("i", new e(), "var-init");
                return r(t).forEach(function (e) {
                  if (!n(e)) throw TypeError();
                  var t = cc11001100_hook("t", r(e), "var-init");
                  if (2 !== t.length) throw TypeError();
                  i.append(t[0], t[1]);
                }), i;
              }
              return t && "object" == typeof t ? (i = cc11001100_hook("i", new e(), "assign"), Object.keys(t).forEach(function (e) {
                i.set(e, t[e]);
              }), i) : new e(t);
            }, "assign");
          }
        }();
      }(self);
    }).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof e && e || {});
  }).call(this, n(27));
}, function (e, t, n) {
  var r,
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(21), "var-init");
  e.exports = cc11001100_hook("e.exports", function (e) {
    var t = cc11001100_hook("t", "", "var-init");
    return r || (r = cc11001100_hook("r", o.settings.Language, "assign")), [].indexOf.call(i.HtmlElemRoles.select, e.aria.role) > -1 ? void 0 !== (t = cc11001100_hook("t", e.attr("aria-label") || i.reMoveHtml(e.text()), "assign")) && t.length > 0 ? r.selectedelem + t : r.unselectedelem : (t = cc11001100_hook("t", e.textAll(), "assign"), i.reMoveHtml(t));
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", n(21), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    getRole: function (e) {
      if (0 !== e.nodeList.length) {
        var t = cc11001100_hook("t", e, "var-init");
        3 == t.firstNode.nodeType && (t = cc11001100_hook("t", t.parent(), "assign"));
        var n = cc11001100_hook("n", t.attr("role"), "var-init");
        if (!n && t.hasClass("alert") && (n = cc11001100_hook("n", "alert", "assign")), !n && t.hasClass("nav") && (n = cc11001100_hook("n", "navigation", "assign")), !n && t.hasClass("alertdialog") && (n = cc11001100_hook("n", "alertdialog", "assign")), !n && t.hasClass("log") && (n = cc11001100_hook("n", "log", "assign")), !n && t.hasClass("menu") && (n = cc11001100_hook("n", "menu", "assign")), !n && t.hasClass("menubar") && (n = cc11001100_hook("n", "menubar", "assign")), !n && t.hasClass("menuitem") && (n = cc11001100_hook("n", "menuitem", "assign")), !n && t.hasClass("row") && (n = cc11001100_hook("n", "row", "assign")), !n && t.hasClass("separator") && (n = cc11001100_hook("n", "separator", "assign")), !n && t.hasClass("slider") && (n = cc11001100_hook("n", "slider", "assign")), !n && t.hasClass("spinbutton") && (n = cc11001100_hook("n", "spinbutton", "assign")), !n && t.hasClass("tab") && (n = cc11001100_hook("n", "tab", "assign")), !n && t.hasClass("tablist") && (n = cc11001100_hook("n", "tablist", "assign")), !n && t.hasClass("tabpanel") && (n = cc11001100_hook("n", "tabpanel", "assign")), !n && t.hasClass("timer") && (n = cc11001100_hook("n", "timer", "assign")), !n && t.hasClass("toolbar") && (n = cc11001100_hook("n", "toolbar", "assign")), !n && t.hasClass("tooltip") && (n = cc11001100_hook("n", "tooltip", "assign")), !n && t.hasClass("tree") && (n = cc11001100_hook("n", "tree", "assign")), !n && t.hasClass("treeitem") && (n = cc11001100_hook("n", "treeitem", "assign")), t.hasClass("button") && (n = cc11001100_hook("n", "button", "assign")), !n) {
          try {
            n = cc11001100_hook("n", t.firstNode.type.toLowerCase(), "assign");
          } catch (i) {}
          n && 0 != n.length || (n = cc11001100_hook("n", t.firstNode.nodeName.toLowerCase(), "assign"));
        }
        return n && [].indexOf.call(r.HtmlElemRoles.heading, n) > -1 && (n = cc11001100_hook("n", "heading", "assign")), n && n.toLowerCase().indexOf("script") > 0 && (n = cc11001100_hook("n", "script", "assign")), n && n.toLowerCase().indexOf("css") > 0 && (n = cc11001100_hook("n", "style", "assign")), n;
      }
    },
    getRoleText: function (e) {
      var t = cc11001100_hook("t", e.aria.role, "var-init"),
        n = cc11001100_hook("n", e.aria.nodeName, "var-init");
      return e.aria.role ? (n && "textbox" === t && (t = cc11001100_hook("t", n, "assign")), i.settings.getText(e.aria.role)) : "";
    }
  }, "assign");
}, function (e, t) {
  function n(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return "BODY" == e.firstNode.nodeName && (e = cc11001100_hook("e", new t(e.child()), "assign")), function n(e) {
      for (var r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) {
        var i = cc11001100_hook("i", e.nodeList[r], "var-init"),
          o = cc11001100_hook("o", new t(i), "var-init");
        if (o.aria.focusable && !o.aria.hidden) return o;
        var a = cc11001100_hook("a", new t(o.child()), "var-init");
        if (a.length > 0) return n(a);
      }
    }(e);
  }
  function r(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return "BODY" == e.firstNode.nodeName && (e = cc11001100_hook("e", new t(e.child()), "assign")), function n(e) {
      for (var r = cc11001100_hook("r", e.length - 1, "var-init"); r >= 0; r--) {
        var i = cc11001100_hook("i", e.nodeList[r], "var-init"),
          o = cc11001100_hook("o", new t(i), "var-init");
        if (o.aria.focusable && !o.aria.hidden) return o;
        var a = cc11001100_hook("a", new t(o.child()), "var-init");
        if (a.length > 0) return n(a);
      }
    }(e);
  }
  e.exports = cc11001100_hook("e.exports", {
    nextFocus1: function i(e, t) {
      if (e.jTool || (e = cc11001100_hook("e", new t(e), "assign")), "BODY" == e.firstNode.nodeName) return n(e, t);
      var r = cc11001100_hook("r", new t(e.firstNode).nextNode(), "var-init"),
        o = cc11001100_hook("o", new t(r), "var-init");
      return o && o.aria && o.aria.focusable && !o.aria.hidden ? o : i(o, t);
    },
    preFocus1: function o(e, t) {
      if (e.jTool || (e = cc11001100_hook("e", new t(e), "assign")), "BODY" == e.firstNode.nodeName) return r(e, t);
      var n = cc11001100_hook("n", new t(e.firstNode).preNode(), "var-init"),
        i = cc11001100_hook("i", new t(n), "var-init");
      return i && i.aria && i.aria.focusable && !i.aria.hidden ? i : o(i, t);
    },
    firstFocus1: cc11001100_hook("firstFocus1", n, "object-key-init"),
    lastFocus1: cc11001100_hook("lastFocus1", r, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", {
      dblclick: function (e, t, n) {
        return this.on("dblclick", e, t, n);
      },
      click: function (e, t, n) {
        return e ? this.on("click", e, t, n) : this.trigger("click");
      },
      mousemove: function (e, t, n) {
        return this.on("mousemove", e, t, n);
      },
      mousedown: function (e, t, n) {
        return this.on("mousedown", e, t, n);
      },
      touchstart: function (e, t, n) {
        return this.on("touchstart", e, t, n);
      },
      touchend: function (e, t, n) {
        return this.on("touchend", e, t, n);
      },
      touchmove: function (e, t, n) {
        return this.on("touchmove", e, t, n);
      },
      change: function (e, t, n) {
        return this.on("change", e, t, n);
      },
      on: function (e, t, n, r) {
        return this.addEvent(this.getEventObject(e, t, n, r));
      },
      off: function (e, t) {
        return this.removeEvent(this.getEventObject(e, t));
      },
      bind: function (e, t, n) {
        return this.on(e, undefined, t, n);
      },
      unbind: function (e) {
        return this.removeEvent(this.getEventObject(e));
      },
      trigger: function (e) {
        return r.each(this.nodeList, function (t, n) {
          try {
            if (n.qToolEvent && n.qToolEvent[e] && n.qToolEvent[e].length > 0) {
              var r = cc11001100_hook("r", new Event(e), "var-init");
              n.dispatchEvent(r);
            } else "click" !== e || "click" === e && n[e]();
          } catch (i) {}
        }), this;
      },
      getEventObject: function (e, t, n, i) {
        if ("function" == typeof t && (i = cc11001100_hook("i", n || !1, "assign"), n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", undefined, "assign")), !e) return this;
        if (t && "element" === r.type(this.firstNode) || (t = cc11001100_hook("t", "", "assign")), "" !== t) {
          var o = cc11001100_hook("o", n, "var-init");
          n = cc11001100_hook("n", function (e) {
            for (var n = cc11001100_hook("n", e.target, "var-init"); n && n !== this;) {
              if (-1 !== [].indexOf.call(this.querySelectorAll(t), n)) {
                o.apply(n, arguments);
                break;
              }
              n = cc11001100_hook("n", n.parentNode, "assign");
            }
          }, "assign");
        }
        var a,
          s,
          l = cc11001100_hook("l", e.split(" "), "var-init"),
          c = cc11001100_hook("c", [], "var-init");
        return r.each(l, function (e, o) {
          if ("" === o.trim()) return !0;
          a = cc11001100_hook("a", o.split("."), "assign"), s = cc11001100_hook("s", {
            eventName: cc11001100_hook("eventName", o + t, "object-key-init"),
            type: cc11001100_hook("type", a[0], "object-key-init"),
            querySelector: cc11001100_hook("querySelector", t, "object-key-init"),
            callback: cc11001100_hook("callback", n || r.noop, "object-key-init"),
            useCapture: cc11001100_hook("useCapture", i || !1, "object-key-init"),
            nameScope: cc11001100_hook("nameScope", a[1] || undefined, "object-key-init")
          }, "assign"), c.push(s);
        }), c;
      },
      addEvent: function (e) {
        var t = cc11001100_hook("t", this, "var-init");
        return r.each(e, function (e, n) {
          r.each(t.nodeList, function (e, t) {
            t.qToolEvent = cc11001100_hook("t.qToolEvent", t.qToolEvent || {}, "assign"), t.qToolEvent[n.eventName] = cc11001100_hook("t.qToolEvent[n.eventName]", t.qToolEvent[n.eventName] || [], "assign"), t.qToolEvent[n.eventName].push(n), r.addEventListener(t, n.type, n.callback, n.useCapture);
          });
        }), t;
      },
      removeEvent: function (e) {
        var t,
          n = cc11001100_hook("n", this, "var-init");
        return r.each(e, function (e, i) {
          r.each(n.nodeList, function (e, n) {
            n.qToolEvent && (t = cc11001100_hook("t", n.qToolEvent[i.eventName], "assign")) && (r.each(t, function (e, t) {
              n.removeEventListener(t.type, t.callback);
            }), delete n.qToolEvent[i.eventName]);
          });
        }), n;
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", i, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", {
      addClass: function (e) {
        return this.changeClass(e, "add");
      },
      removeClass: function (e) {
        return this.changeClass(e, "remove");
      },
      toggleClass: function (e) {
        return this.changeClass(e, "toggle");
      },
      hasClass: function (e) {
        var t = cc11001100_hook("t", this.firstNode, "var-init");
        return !(!t || 1 != t.nodeType) && t.classList.contains(e);
      },
      parseClassName: function (e) {
        return e.indexOf(" ") ? e.split(" ") : [e];
      },
      changeClass: function (e, t) {
        var n = cc11001100_hook("n", this.parseClassName(e), "var-init");
        return r.each(this.nodeList, function (e, i) {
          1 == i.nodeType && r.each(n, function (e, n) {
            i.classList[t](n);
          });
        }), this;
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", i, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(78), "var-init"),
    a = cc11001100_hook("a", {
      append: function (e) {
        return this.html(e, "append");
      },
      prepend: function (e) {
        return this.html(e, "prepend");
      },
      before: function (e) {
        e.jTool && (e = cc11001100_hook("e", e.nodeList[0], "assign"));
        var t = cc11001100_hook("t", this.firstNode, "var-init");
        return t.parentNode.insertBefore(e, t), this;
      },
      after: function (e) {
        if ("string" == typeof e && (e = cc11001100_hook("e", new i(e), "assign")), e.jTool) {
          var t = cc11001100_hook("t", this.firstNode.parentNode, "var-init");
          r.each(e.nodeList, function (e, n) {
            t.appendChild(n);
          });
        }
      },
      text: function (e) {
        if (0 !== this.nodeList.length) return void 0 !== e ? (r.each(this.nodeList, function (t, n) {
          n.textContent = cc11001100_hook("n.textContent", e, "assign");
        }), this) : o.getText(this.firstNode, this.aria ? this.aria.role : this.nodeName.toLowerCase());
      },
      html: function (e, t) {
        if (0 !== this.nodeList.length) {
          if (!e) return this.firstNode.innerHTML;
          if (this.firstNode && void 0 === e && void 0 === t) try {
            return this.firstNode.innerHTML;
          } catch (o) {
            return;
          }
          var n,
            i = cc11001100_hook("i", r.type(e), "var-init");
          return e.jTool ? e = cc11001100_hook("e", e.nodeList, "assign") : "string" === i ? e = cc11001100_hook("e", r.createDOM(e || ""), "assign") : "number" === i ? e = cc11001100_hook("e", r.createDOM(e.toString() || ""), "assign") : "element" === i && (e = cc11001100_hook("e", [e], "assign")), r.each(this.nodeList, function (i, o) {
            t ? "prepend" === t && (n = cc11001100_hook("n", o.firstChild, "assign")) : o.innerHTML = cc11001100_hook("o.innerHTML", "", "assign"), r.each(e, function (e, t) {
              (t = cc11001100_hook("t", t.cloneNode(!0), "assign")).nodeType || (t = cc11001100_hook("t", document.createTextNode(t), "assign")), n ? o.insertBefore(t, n) : o.appendChild(t);
            });
          }), this;
        }
      },
      wrap: function (e, t) {
        var n;
        return r.each(this.nodeList, function (r, o) {
          n = cc11001100_hook("n", o.parentNode, "assign");
          var a = cc11001100_hook("a", new i(e, o.ownerDocument).get(0), "var-init");
          n.insertBefore(a, o), t ? a.querySelector(t).appendChild(o) : a.querySelector(":empty").appendChild(o);
        }), this;
      },
      closest: function (e) {
        if (0 !== this.nodeList.length) {
          var t = cc11001100_hook("t", this.firstNode.parentNode, "var-init");
          if (void 0 === e) return new i(t);
          var n = cc11001100_hook("n", (this.firstNode.ownerDocument || document).querySelectorAll(e), "var-init");
          return function r() {
            t && 0 !== n.length && 1 === t.nodeType ? -1 === [].indexOf.call(n, t) && (t = cc11001100_hook("t", t.parentNode, "assign"), r()) : t = cc11001100_hook("t", null, "assign");
          }(), new i(t);
        }
      },
      parent: function () {
        return this.closest();
      },
      clone: function (e) {
        return new i(this.firstNode.cloneNode(e || !1));
      },
      remove: function () {
        r.each(this.nodeList, function (e, t) {
          t.parentNode.removeChild(t);
        });
      },
      textAll: function (e) {
        if (0 !== this.nodeList.length) {
          var t = cc11001100_hook("t", "", "var-init"),
            n = cc11001100_hook("n", this.firstNode.getAttribute("aria-label") || this.firstNode.getAttribute("title") || this.firstNode.getAttribute("alt"), "var-init");
          return n || (t = cc11001100_hook("t", function a(e) {
            e.jTool || (e = cc11001100_hook("e", new i(e), "assign"));
            var t = cc11001100_hook("t", e.childNodes(), "var-init"),
              n = cc11001100_hook("n", "", "var-init");
            return r.each(t, function (e, t) {
              var l = cc11001100_hook("l", new i(t), "var-init");
              if (!l.aria.hidden && [].indexOf.call(["video", "script", "style"], l.aria.role) < 0) {
                var c = cc11001100_hook("c", l.childNodes(), "var-init");
                if (1 == t.nodeType) {
                  var u = cc11001100_hook("u", t.getAttribute("aria-label") || t.getAttribute("title") || t.getAttribute("alt"), "var-init");
                  if (u && n.indexOf(u) < 0) n += cc11001100_hook("n", u, "assign");else {
                    var d = cc11001100_hook("d", t.getAttribute("aria-described"), "var-init");
                    d && (n += cc11001100_hook("n", d, "assign"));
                    var f = cc11001100_hook("f", t.getAttribute("role") || t.nodeName, "var-init");
                    if (f = cc11001100_hook("f", f.toLowerCase(), "assign"), [].indexOf.call(r.HtmlElemRoles.select, f) > -1) n += cc11001100_hook("n", "," + o.getText(t, f), "assign");else if ([].indexOf.call(["object"], f) > -1) n += cc11001100_hook("n", "", "assign");else if ([].indexOf.call(["input", "textbox", "textarea"], f) > -1) {
                      var p = cc11001100_hook("p", new i(t).val() || "", "var-init");
                      p.length > 0 && (n += cc11001100_hook("n", "," + p, "assign"));
                    } else if (c.length > 0) {
                      var h = cc11001100_hook("h", a(t), "var-init");
                      h && h.length > 0 && n.indexOf(h) < 0 && (n += cc11001100_hook("n", "," + h, "assign"));
                    } else {
                      (g = cc11001100_hook("g", s(t), "assign")) && n.indexOf(g) < 0 && (n += cc11001100_hook("n", g, "assign"));
                    }
                  }
                } else {
                  var g;
                  (g = cc11001100_hook("g", s(t), "assign")) && g.length > 0 && n.indexOf(g) < 0 && (n += cc11001100_hook("n", g, "assign"));
                }
              } else n += cc11001100_hook("n", "", "assign");
            }), n;
          }(this), "assign"), e && (t = cc11001100_hook("t", r.formatStrToRead(t, e), "assign")), t);
        }
      }
    }, "var-init");
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.nodeType, "var-init");
    if (1 == t && "checkbox" == e.type && "on" == e.value) return "";
    var n = cc11001100_hook("n", "", "var-init");
    if ("VIDEO" == e.nodeName) return "";
    switch (t) {
      case 1:
        n = cc11001100_hook("n", e.innerHTML || e.value, "assign");
        break;
      case 3:
        n = cc11001100_hook("n", e.nodeValue.trim(), "assign");
    }
    return n;
  }
  e.exports = cc11001100_hook("e.exports", a, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    getText: function (e, t) {
      return null !== t && [].indexOf.call(i.HtmlElemRoles.select, t) > -1 ? function (e) {
        var t = cc11001100_hook("t", [], "var-init");
        if ("SELECT" === e.nodeName) {
          for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) if (e.options[n].selected) {
            var i = cc11001100_hook("i", e[n].getAttribute("aria-label"), "var-init");
            i || (i = cc11001100_hook("i", e[n].text, "assign")), t.push(i);
          }
          return 0 === t.length ? undefined : 1 === t.length ? t[0] : t;
        }
        var o = cc11001100_hook("o", new r(e), "var-init");
        if ("select" !== o.aria.nodeName && "select" === o.aria.role) {
          var a = cc11001100_hook("a", e.getAttribute("aria-controls"), "var-init");
          if (!a) return;
          var s = cc11001100_hook("s", a.substring(0, 1), "var-init");
          return [].indexOf.call(["#", "."], s) < 0 && (a = cc11001100_hook("a", "#" + a, "assign")), document.querySelector(a) && (t = cc11001100_hook("t", document.querySelector(a).textContent, "assign")), t;
        }
      }(e) : e.textContent || e.value;
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", {
      offset: function () {
        var e = cc11001100_hook("e", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init"),
          t = cc11001100_hook("t", this.firstNode, "var-init");
        if (!t.getClientRects().length) return e;
        if ("none" === r.getStyle(t, "display")) return e;
        e = cc11001100_hook("e", t.getBoundingClientRect(), "assign");
        var n = cc11001100_hook("n", t.ownerDocument.documentElement, "var-init");
        return {
          top: cc11001100_hook("top", e.top + window.pageYOffset - n.clientTop, "object-key-init"),
          left: cc11001100_hook("left", e.left + window.pageXOffset - n.clientLeft, "object-key-init")
        };
      },
      scrollTop: function (e) {
        return this.scrollFN(e, "top");
      },
      scrollLeft: function (e) {
        return this.scrollFN(e, "left");
      },
      scrollFN: function (e, t) {
        var n = cc11001100_hook("n", this.firstNode, "var-init");
        return e || 0 === e ? (this.setScrollFN(n, t, e), this) : this.getScrollFN(n, t);
      },
      getScrollFN: function (e, t) {
        return r.isWindow(e) ? "top" === t ? e.pageYOffset : e.pageXOffset : 9 === e.nodeType ? "top" === t ? e.body.scrollTop : e.body.scrollLeft : 1 === e.nodeType ? "top" === t ? e.scrollTop : e.scrollLeft : void 0;
      },
      setScrollFN: function (e, t, n) {
        return r.isWindow(e) ? "top" === t ? e.document.body.scrollTop = cc11001100_hook("e.document.body.scrollTop", n, "assign") : e.document.body.scrollLeft = cc11001100_hook("e.document.body.scrollLeft", n, "assign") : 9 === e.nodeType ? "top" === t ? e.body.scrollTop = cc11001100_hook("e.body.scrollTop", n, "assign") : e.body.scrollLeft = cc11001100_hook("e.body.scrollLeft", n, "assign") : 1 === e.nodeType ? "top" === t ? e.scrollTop = cc11001100_hook("e.scrollTop", n, "assign") : e.scrollLeft = cc11001100_hook("e.scrollLeft", n, "assign") : void 0;
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", i, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(81), "var-init"),
    a = cc11001100_hook("a", {
      focus: function () {
        this.jTool && this.firstNode && 1 == this.firstNode.nodeType && this.firstNode.focus();
      },
      blur: function () {
        this.jTool && this.firstNode && 1 == this.firstNode.nodeType && this.firstNode.blur();
      },
      siblings: function (e) {
        if (0 != this.length) {
          if (e) {
            for (var t = cc11001100_hook("t", this.firstNode, "var-init"), n = cc11001100_hook("n", [], "var-init"), i = cc11001100_hook("i", t.previousSibling, "var-init"); i;) 1 == i.nodeType && i.tagName == t.tagName && n.unshift(i), i = cc11001100_hook("i", i.previousSibling, "assign");
            for (var o = cc11001100_hook("o", t.nextSibling, "var-init"); o;) 1 == o.nodeType && o.tagName == t.tagName && n.push(o), o = cc11001100_hook("o", o.nextSibling, "assign");
            return new r(n);
          }
          return new r(this.parent().child());
        }
      },
      next: function () {
        if (0 != this.length) {
          var e = cc11001100_hook("e", this.firstNode, "var-init"),
            t = cc11001100_hook("t", e.nextSibling, "var-init");
          if (null != t) return [].indexOf.call(["HEAD", "STYLE", "SCRIPT"], t.nodeName) > -1 ? new r(t).next() : 1 == t.nodeType || 3 == t.nodeType && /\S/.test(t.nodeValue) ? t : new r(t).next();
          if (null == e.parentNode && e.defaultView && e.defaultView.frameElement) return new r(e.defaultView.frameElement).next();
          if (null != e.parentNode) return new r(e.parentNode).next();
        }
      },
      pre: function () {
        if (0 != this.length) {
          var e = cc11001100_hook("e", this.firstNode, "var-init"),
            t = cc11001100_hook("t", e.previousElementSibling, "var-init");
          if (null == t) {
            if (null == e.parentNode && e.defaultView && e.defaultView.frameElement) return new r(e.defaultView.frameElement).pre();
            if (null == e.parentNode) return;
            return new r(e.parentNode).pre();
          }
          return [].indexOf.call(["HEAD", "STYLE", "SCRIPT"], t.nodeName) > -1 ? new r(t).pre() : 1 === t.nodeType ? t : void 0;
        }
      },
      nextAll: function () {
        if (0 != this.length) {
          for (var e = cc11001100_hook("e", this.firstNode, "var-init"), t = cc11001100_hook("t", next(e), "var-init"), n = cc11001100_hook("n", [], "var-init"); null != t;) n.push(t), t = cc11001100_hook("t", next(t), "assign");
          return n;
        }
      },
      preAll: function () {
        if (0 != this.length) {
          for (var e = cc11001100_hook("e", this.firstNode, "var-init"), t = cc11001100_hook("t", pre(e), "var-init"), n = cc11001100_hook("n", [], "var-init"); null != t;) n.push(t), t = cc11001100_hook("t", pre(t), "assign");
          return n;
        }
      },
      get: function (e) {
        return this.nodeList[e];
      },
      is: function (e) {
        return e && 0 !== this.length ? (0 === e.indexOf(":") && (e = cc11001100_hook("e", e.subStr(1, e.length), "assign")), this.firstNode[e]) : undefined;
      },
      eq: function (e) {
        return new r(this.nodeList[e]);
      },
      first: function () {
        return this.firstNode;
      },
      last: function () {
        return this.nodeList[this.nodeList.length - 1];
      },
      childNodes: function () {
        var e = cc11001100_hook("e", this.firstNode.childNodes, "var-init"),
          t = cc11001100_hook("t", [], "var-init");
        return i.each(e, function (e, n) {
          switch (n.nodeType) {
            case 1:
              t.push(n);
              break;
            case 3:
              var r = cc11001100_hook("r", n.nodeValue, "var-init");
              /\S/.test(r) && t.push(n);
          }
        }), t;
      },
      child: function () {
        var e = cc11001100_hook("e", this.firstNode.childNodes, "var-init"),
          t = cc11001100_hook("t", [], "var-init");
        return i.each(e, function (e, n) {
          1 === n.nodeType && t.push(n);
        }), t;
      },
      find: function (e) {
        if (e instanceof HTMLElement) {
          var t = cc11001100_hook("t", e.getAttribute("id"), "var-init");
          if (t) return new r(t, this);
          var n;
          return function o(t) {
            i.each(t, function (t, i) {
              i != e ? n || o(new r(i).child()) : n = cc11001100_hook("n", new r(e), "assign");
            });
          }(this), n || (n = cc11001100_hook("n", new r(), "assign")), n;
        }
        return new r(e, this);
      },
      isHidden: function () {
        return function e(t) {
          var n = cc11001100_hook("n", new r(t), "var-init");
          try {
            if (1 == t.nodeType || 9 == t.nodeType) {
              if ("BODY" == t.nodeName) return !1;
              if ("none" === n.css("display") || "hidden" === n.css("visibility") || "hidden" === n.attr("type")) return !0;
            }
          } catch (i) {
            return !0;
          }
          return e(n.parent().firstNode);
        }(this.firstNode);
      },
      cssPath: function (e) {
        if (0 != this.length) {
          var t = cc11001100_hook("t", o(this, "", e), "var-init");
          return t || (t = cc11001100_hook("t", "body.useOldFixed", "assign")), t;
        }
      },
      index: function (e) {
        var t = cc11001100_hook("t", this.firstNode, "var-init");
        return e ? e.jTool && (e = cc11001100_hook("e", e.nodeList, "assign")) : e = cc11001100_hook("e", this.parent().child().nodeList, "assign"), e ? [].indexOf.call(e, t) : -1;
      },
      tofirstChild: function () {
        var e = cc11001100_hook("e", this.firstNode, "var-init");
        if ("IFRAME" == this.firstNode.nodeName) try {
          var t = cc11001100_hook("t", e.contentDocument, "var-init");
          if (null == t || !t.body) return null;
          e = cc11001100_hook("e", t.body.firstElementChild, "assign");
        } catch (o) {
          return null;
        } else {
          var n = cc11001100_hook("n", this.child(), "var-init");
          e = cc11001100_hook("e", n.length > 0 ? n[0] : this.firstNode, "assign");
        }
        if ([].indexOf.call(["A"], e.nodeName) > -1) return e;
        var i = cc11001100_hook("i", new r(e).find("*"), "var-init");
        return 0 == i.length ? e : new r(i[0]).tofirstChild();
      },
      nextNode: function () {
        var e = cc11001100_hook("e", this.next(), "var-init");
        if (e || (e = cc11001100_hook("e", this.parent().next(), "assign")), e) {
          if ([].indexOf.call(["A"], e.nodeName) > -1) return e;
          if ("IFRAME" == e.nodeName) try {
            var t = cc11001100_hook("t", e.contentDocument, "var-init");
            if (null == t || !t.body) return new r(e).nextNode();
            e = cc11001100_hook("e", t.body.firstChild, "assign");
          } catch (i) {
            return new r(e).nextNode();
          }
          var n = cc11001100_hook("n", function o(e) {
            if ([].indexOf.call(["A"], e.nodeName) > -1) return e;
            var t = cc11001100_hook("t", new r(e).find("*"), "var-init");
            return 0 == t.length ? e : o(t[0]);
          }(e), "var-init");
          return n || (n = cc11001100_hook("n", new r(e).nextNode(), "assign")), n;
        }
      },
      preNode: function () {
        var e = cc11001100_hook("e", this.pre(), "var-init");
        if (e || (e = cc11001100_hook("e", this.parent().pre(), "assign")), e) {
          "IFRAME" == e.nodeName && (e = cc11001100_hook("e", e.contentDocument, "assign"));
          var t = cc11001100_hook("t", new r(e).child(), "var-init");
          return 0 == t ? e : function n(e) {
            for (var t = cc11001100_hook("t", e.length - 1, "var-init"); t >= 0; t--) {
              var i = cc11001100_hook("i", new r(e[t]).child(), "var-init");
              return 0 == i.length ? e[t] : n(i);
            }
          }(t);
        }
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", a, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", ["clearfix", "on", "active"], "var-init");
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    return /[A-Z]/.test(e) && /[0-9]/.test(e);
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new r("#" + e), "var-init");
    return 0 != t.length && "string" != typeof t.firstNode && e && 0 != e.indexOf("aria") && [].indexOf.call([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], parseInt(e.substring(0, 1))) < 0;
  }
  function s(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", new r(e.parent().child()), "var-init");
    return 0 == n.length ? t : t + ":nth-child(" + (e.index(n) + 1) + ")";
  }
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (0 == e.length) return "";
    if ("HTML" == e.firstNode.nodeName) return "";
    var t = cc11001100_hook("t", e.closest("[id]"), "var-init");
    return 0 == t.length || "body" == t.firstNode.nodeName.toLowerCase() ? "" : 0 != t.attr("id").indexOf("aria") ? t.attr("id") : l(t);
  }
  e.exports = cc11001100_hook("e.exports", function c(e, t, n) {
    var u = cc11001100_hook("u", " > ", "var-init");
    n && (u = cc11001100_hook("u", " ", "assign"));
    var d = cc11001100_hook("d", t ? u + t : "", "var-init"),
      f = cc11001100_hook("f", e.firstNode.nodeName.toLowerCase(), "var-init");
    if ("body" == f) return t;
    var p = cc11001100_hook("p", e.attr("id"), "var-init");
    if (a(p)) return o(p) ? "[id^=" + p + "]" + d : "#" + p + d;
    var h = cc11001100_hook("h", l(e), "var-init");
    h = cc11001100_hook("h", a(h) ? o(p) ? "[id^=" + h + "]" : "#" + h + " " : "", "assign");
    var g = cc11001100_hook("g", "", "var-init"),
      m = cc11001100_hook("m", "", "var-init"),
      v = cc11001100_hook("v", e.attr("class"), "var-init");
    if (v) {
      for (var b = cc11001100_hook("b", v.split(" "), "var-init"), y = cc11001100_hook("y", "", "var-init"), w = cc11001100_hook("w", 0, "var-init"); w < b.length; w++) {
        var x = cc11001100_hook("x", b[w], "var-init");
        (x = cc11001100_hook("x", x.replace(/\n/g, ""), "assign")).length > 0 && 0 != x.indexOf("aria") && [].indexOf.call(i, x) < 0 && "setfont" != x && (o(x) ? y += cc11001100_hook("y", "[class^=" + x + "]", "assign") : y += cc11001100_hook("y", "." + x, "assign"));
      }
      var S = cc11001100_hook("S", h + f + y, "var-init");
      if (1 == new r(S).length) return S + d;
      g = cc11001100_hook("g", n ? f + y : s(e, f + y), "assign");
    }
    var C = cc11001100_hook("C", e.attr("name"), "var-init");
    if (C && (C = cc11001100_hook("C", C.replace(/\n/g, ""), "assign")).length > 0) {
      var k = cc11001100_hook("k", f + "[name='" + C + "']", "var-init");
      if (1 == new r(k).length) return k + d;
      m = cc11001100_hook("m", n ? k : s(e, k), "assign");
    }
    var T = cc11001100_hook("T", "", "var-init");
    return g.indexOf("nth-child") > 0 && m.length > 0 && m.indexOf("nth-child") < 0 ? T = cc11001100_hook("T", m + d, "assign") : (n || 0 != g.length || (g = cc11001100_hook("g", s(e, f), "assign")), T = cc11001100_hook("T", g + d, "assign")), "body" != f ? c(new r(e.parent()), T, n) : T;
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", n(46), "var-init"),
    o = cc11001100_hook("o", {
      visibility: function () {
        r.each(this.nodeList, function (e, t) {
          t.style.visibility = cc11001100_hook("t.style.visibility", "visible", "assign");
        });
      },
      unvisibility: function () {
        r.each(this.nodeList, function (e, t) {
          t.style.visibility = cc11001100_hook("t.style.visibility", "hidden", "assign");
        });
      },
      show: function () {
        return r.each(this.nodeList, function (e, t) {
          var n = cc11001100_hook("n", getComputedStyle(t)["visibility"], "var-init"),
            r = cc11001100_hook("r", getComputedStyle(t)["opacity"], "var-init"),
            i = cc11001100_hook("i", "", "var-init");
          if (-1 !== t.nodeName.indexOf(["SPAN", "A", "FONT", "I"])) return n && (t.style.visibility = cc11001100_hook("t.style.visibility", "visible", "assign")), t.style.display = cc11001100_hook("t.style.display", "inline-block", "assign"), 0 == r && (t.style.opacity = cc11001100_hook("t.style.opacity", 1, "assign")), this;
          switch (t.nodeName) {
            case "TABLE":
              i = cc11001100_hook("i", "table", "assign");
              break;
            case "THEAD":
              i = cc11001100_hook("i", "table-header-group", "assign");
              break;
            case "TBODY":
              i = cc11001100_hook("i", "table-row-group", "assign");
              break;
            case "TR":
              i = cc11001100_hook("i", "table-row", "assign");
              break;
            case "TH":
            case "TD":
              i = cc11001100_hook("i", "table-cell", "assign");
              break;
            default:
              i = cc11001100_hook("i", "block", "assign");
          }
          n && (t.style.visibility = cc11001100_hook("t.style.visibility", "visible", "assign")), 0 == t.style.opacity && (t.style.opacity = cc11001100_hook("t.style.opacity", 1, "assign")), t.style.display = cc11001100_hook("t.style.display", i, "assign");
        }), this;
      },
      hide: function () {
        return r.each(this.nodeList, function (e, t) {
          getComputedStyle(t)["visibility"] && (t.style.visibility = cc11001100_hook("t.style.visibility", "hidden", "assign")), t.style.display = cc11001100_hook("t.style.display", "none", "assign");
        }), this;
      },
      animate: function (e, t, n) {
        var o = cc11001100_hook("o", this, "var-init"),
          a = cc11001100_hook("a", "", "var-init"),
          s = cc11001100_hook("s", "", "var-init"),
          l = cc11001100_hook("l", o.nodeList[0], "var-init");
        if (e) {
          "undefined" === r.type(n) && "function" === r.type(t) && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", 0, "assign")), "undefined" === r.type(n) && (n = cc11001100_hook("n", r.noop, "assign")), "undefined" === r.type(t) && (t = cc11001100_hook("t", 0, "assign")), r.each(e, function (e, t) {
            a += cc11001100_hook("a", e + ":" + r.getStyle(l, e) + ";", "assign"), s += cc11001100_hook("s", e + ":" + t + ";", "assign");
          });
          var c = cc11001100_hook("c", "@keyframes jToolAnimate {from {" + a + "}to {" + s + "}}", "var-init"),
            u = cc11001100_hook("u", document.createElement("style"), "var-init");
          u.className = cc11001100_hook("u.className", "jTool-animate-style", "assign"), u.type = cc11001100_hook("u.type", "text/css", "assign"), document.querySelector("head").appendChild(u), u.textContent = cc11001100_hook("u.textContent", u.textContent + c, "assign"), l.style.animation = cc11001100_hook("l.style.animation", "jToolAnimate " + t / 1e3 + "s ease-in-out forwards", "assign"), window.setTimeout(function () {
            i.css.call(o, e), l.style.animation = cc11001100_hook("l.style.animation", "", "assign"), document.querySelector("head").removeChild(u), n();
          }, t);
        }
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", o, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init"),
    i = cc11001100_hook("i", {
      data: function (e, t) {
        return "data-" !== (e = cc11001100_hook("e", e.toLowerCase(), "assign")).substr(0, 5) && (e = cc11001100_hook("e", "data-" + e, "assign")), this.attr(e, t);
      },
      removeData: function (e) {
        "data-" !== (e = cc11001100_hook("e", e.toLowerCase(), "assign")).substr(0, 5) && (e = cc11001100_hook("e", "data-" + e, "assign")), this.removeAttr(e);
      },
      ariaAttr: function (e, t) {
        return "aria-" !== (e = cc11001100_hook("e", e.toLowerCase(), "assign")).substr(0, 5) && (e = cc11001100_hook("e", "aria-" + e, "assign")), this.attr(e, t);
      },
      removeAriaAttr: function (e) {
        "aria-" !== (e = cc11001100_hook("e", e.toLowerCase(), "assign")).substr(0, 5) && (e = cc11001100_hook("e", "aria-" + e, "assign")), this.removeAttr(e);
      },
      attr: function (e, t) {
        if (void 0 === e && void 0 === t) return null;
        if (void 0 !== t) return r.each(this.nodeList, function (n, r) {
          1 == r.nodeType && r.setAttribute(e, t);
        }), this;
        try {
          if (1 == this.firstNode.nodeType) return this.transformValue(this.firstNode.getAttribute(e));
        } catch (n) {}
      },
      removeAttr: function (e) {
        void 0 !== e && r.each(this.nodeList, function (t, n) {
          n.removeAttribute(e);
        });
      },
      prop: function (e, t) {
        if (0 !== this.nodeList.length) return void 0 === e && void 0 === t ? null : void 0 !== t ? (r.each(this.nodeList, function (n, r) {
          r[e] = cc11001100_hook("r[e]", t, "assign");
        }), this) : this.transformValue(this.firstNode[e]);
      },
      removeProp: function (e) {
        void 0 !== e && r.each(this.nodeList, function (t, n) {
          delete n[e];
        });
      },
      val: function (e) {
        return this.prop("value", e) || "";
      },
      transformValue: function (e) {
        return "null" === r.type(e) && (e = cc11001100_hook("e", undefined, "assign")), e;
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", i, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(49), "var-init"),
    i = cc11001100_hook("i", n(94), "var-init"),
    o = cc11001100_hook("o", n(8), "var-init"),
    a = cc11001100_hook("a", n(95), "var-init"),
    s = cc11001100_hook("s", n(0), "var-init"),
    l = cc11001100_hook("l", n(4), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    createGlobal: function (e) {
      if (!l.oldFixedStatus) return "";
      var t = cc11001100_hook("t", "\r\n/**   设置全局开始   */\r\n", "var-init");
      return e == document && (t += cc11001100_hook("t", o.bodyStyle, "assign")), s.isMobile() && (t += cc11001100_hook("t", "body.UseInMobile *:not(.skipAutoFix){max-width:100%;}", "assign")), t += cc11001100_hook("t", i.setWidth(e), "assign"), t += cc11001100_hook("t", r.setFont(e), "assign"), t += cc11001100_hook("t", a.setHeight(e), "assign"), t += cc11001100_hook("t", "\r\n/**   设置全局结束   */\r\n", "assign");
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", r || {}, "var-init"),
    i = cc11001100_hook("i", n(64), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init"),
    a = cc11001100_hook("a", n(17), "var-init"),
    s = cc11001100_hook("s", n(18), "var-init");
  n(32), n(13);
  var l = cc11001100_hook("l", n(120), "var-init"),
    c = cc11001100_hook("c", n(11), "var-init"),
    u = cc11001100_hook("u", n(57), "var-init"),
    d = cc11001100_hook("d", n(134), "var-init"),
    f = cc11001100_hook("f", n(4), "var-init"),
    p = cc11001100_hook("p", n(63), "var-init"),
    h = cc11001100_hook("h", n(0), "var-init");
  i("body").ariaAttr("basefontsize", parseInt(getComputedStyle(document.body).fontSize, 10)), window.isAriaDev && "true" == h.queryString.val("clearCache") && (localStorage.removeItem("ariaDev"), f.clearAll(), f.status(!1)), r.settings = cc11001100_hook("r.settings", l, "assign"), r.scrInfo = cc11001100_hook("r.scrInfo", c.getAppid(), "assign"), r.status = cc11001100_hook("r.status", function () {
    return o.status;
  }, "assign"), r.start = cc11001100_hook("r.start", u.start, "assign"), r.end = cc11001100_hook("r.end", u.end, "assign"), r.AppStart = cc11001100_hook("r.AppStart", u.AppStart, "assign"), r.oldFixedStart = cc11001100_hook("r.oldFixedStart", u.oldFixedStart, "assign"), r.oldFixedEnd = cc11001100_hook("r.oldFixedEnd", u.end, "assign"), r.useAutoFixedBtn = cc11001100_hook("r.useAutoFixedBtn", u.useAutoFixedBtn, "assign"), r.wzaStart = cc11001100_hook("r.wzaStart", u.wzaStart, "assign"), r.setUnFixed = cc11001100_hook("r.setUnFixed", u.setUnFixed, "assign"), r.play = cc11001100_hook("r.play", u.play, "assign"), r.themes = cc11001100_hook("r.themes", o.getThemes, "assign"), u.startRead(), u.CheckAutoStart(), h.isMobile() && (r.appEvents = cc11001100_hook("r.appEvents", d, "assign")), r.getMessageData = cc11001100_hook("r.getMessageData", p.getMessageData, "assign"), p.start(), a.removeRegisterEvent(s.globalStart), a.removeRegisterEvent(s.globalEnd), a.registerEvent(s.globalStart, r.start, 0), a.registerEvent(s.globalEnd, r.end, 0), window[window.ariaSdkName] = cc11001100_hook("window[window.ariaSdkName]", r, "assign"), e.exports = cc11001100_hook("e.exports", r, "assign");
}, function (e, t, n) {
  var r,
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(13), "var-init"),
    a = cc11001100_hook("a", (n(5), n(91)), "var-init"),
    s = cc11001100_hook("s", n(2), "var-init"),
    l = cc11001100_hook("l", n(7), "var-init");
  l = cc11001100_hook("l", n(7), "assign"), n(0);
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (window.ariaFirstOpen = cc11001100_hook("window.ariaFirstOpen", !1, "assign"), 2 != s.readtype) {
      var t = cc11001100_hook("t", new i(e.target), "var-init");
      if (!(t.aria.skipall || ("dialogclose" == t.attr("aria-action") && a.dialogClose(), window.canRead = cc11001100_hook("window.canRead", !0, "assign"), l.breakEventsFirst(e) || 2 == s.readtype || e.target == document.body || void 0 !== r && e.target == r || 1 != e.target.nodeType))) {
        var n = cc11001100_hook("n", new i(e.target), "var-init");
        if (!l.breakEvents(n, e)) {
          var c = cc11001100_hook("c", l.realPlayElem(n), "var-init");
          if (c && c.length > 0) {
            window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", c, "assign"), 3 == c.firstNode.nodeType && (c = cc11001100_hook("c", c.parent(), "assign"));
            try {
              o.setClass(n, l.viewDocument(e));
            } catch (u) {}
          }
          r = cc11001100_hook("r", e.target, "assign");
        }
      }
    }
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new i(e).on("click", "*", c);
    },
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new i(e).off("click", "*", c);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", n(30), "var-init"),
    o = cc11001100_hook("o", n(12), "var-init"),
    a = cc11001100_hook("a", n(88), "var-init"),
    s = cc11001100_hook("s", n(0), "var-init"),
    l = cc11001100_hook("l", n(89), "var-init"),
    c = cc11001100_hook("c", n(90), "var-init"),
    u = cc11001100_hook("u", n(1), "var-init"),
    d = cc11001100_hook("d", (n(7), !1), "var-init");
  new Date().getTime();
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
  }
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    !1;
  }
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    O(e);
  }
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
  }
  function m() {
    w || (w = cc11001100_hook("w", a(), "assign")), w.removeEventListener("abort", f), w.removeEventListener("canplay", p), w.removeEventListener("durationchange", g), w.removeEventListener("ended", O), w.removeEventListener("error", h), w.removeEventListener("timeupdate", g);
  }
  window.ariaFirstOpen = cc11001100_hook("window.ariaFirstOpen", !0, "assign");
  var v = cc11001100_hook("v", !0, "var-init");
  function b(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (v && (w || (w = cc11001100_hook("w", a(), "assign")), (window.isSpecialVoice || r.status && r.hostEnable.voice && r.voice.enable) && e)) {
      try {
        if (0 == s.replaceSpChar(e).length) return;
      } catch (h) {}
      e.length > 80 && (e = cc11001100_hook("e", e.substr(0, 80), "assign")), s.IsIos(), i.beforeSend().then(function (t) {
        !function (e) {
          w.pause(), w.autoplay = cc11001100_hook("w.autoplay", !0, "assign"), w.loop = cc11001100_hook("w.loop", !1, "assign"), w.playbackRate = cc11001100_hook("w.playbackRate", r.voice.rate || 1, "assign"), w.defaultPlaybackRate = cc11001100_hook("w.defaultPlaybackRate", r.voice.rate, "assign"), w.src = cc11001100_hook("w.src", e, "assign"), w.load();
          try {
            w.play(), window.ariaFirstOpen = cc11001100_hook("window.ariaFirstOpen", !1, "assign");
          } catch (h) {}
          s.isIE();
        }(o.api.mp3 + "?text=" + l.ariaBase64.encode(e) + "&appid=" + t.appid + "&Timestamp=" + t.timestamp);
      });
    }
  }
  function y() {
    w && !w.paused && w.pause();
  }
  document.hidden !== undefined && new u(document).on("visibilitychange", function () {
    document.hidden ? (v = cc11001100_hook("v", !1, "assign"), y()) : v = cc11001100_hook("v", !0, "assign");
  });
  var w,
    x = cc11001100_hook("x", [], "var-init"),
    S = cc11001100_hook("S", 0, "var-init"),
    C = cc11001100_hook("C", null, "var-init"),
    k = cc11001100_hook("k", !1, "var-init");
  window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", null, "assign");
  var T = cc11001100_hook("T", "", "var-init");
  function A(e) {
    cc11001100_hook("e", e, "function-parameter");
    w || (w = cc11001100_hook("w", a(), "assign")), e && (e.jTool && (e = cc11001100_hook("e", new u(e).aria.lastText, "assign")), T == e && 2 != r.readtype || (k && (S = cc11001100_hook("S", 0, "assign"), x = cc11001100_hook("x", [], "assign"), w.removeEventListener("ended", O)), y(), T = cc11001100_hook("T", e, "assign"), C && (clearInterval(C), C = cc11001100_hook("C", null, "assign")), x = cc11001100_hook("x", s.splitBylength(e, 40), "assign"), k = cc11001100_hook("k", !0, "assign"), S = cc11001100_hook("S", 0, "assign"), r.voice.enable ? (O(), w.addEventListener("ended", O)) : E()));
  }
  function E() {
    if (!(S >= x.length)) {
      try {
        c.innerBigSrc(x[S]);
      } catch (h) {}
      var e = cc11001100_hook("e", parseInt(s.getLength(x[S]) / 16), "var-init");
      C = cc11001100_hook("C", setTimeout(function () {
        E(), S += cc11001100_hook("S", 1, "assign");
      }, 1e3 * e), "assign");
    }
  }
  function O(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (x.length > S) {
      if (0 == s.replaceSpChar(x[S]).length) return S += cc11001100_hook("S", 1, "assign"), void O();
      setTimeout(function () {
        !1, b(x[S]);
        try {
          c.innerBigSrc(x[S]);
        } catch (h) {}
        S += cc11001100_hook("S", 1, "assign");
      }, 250);
    } else {
      k = cc11001100_hook("k", !1, "assign"), w.removeEventListener("ended", O);
      var t = cc11001100_hook("t", new u(window.ariaPlayElem).aria.regionType, "var-init");
      2 == r.readtype || new u(window.ariaPlayElem).aria.isContentText || 6 == t ? F() : (S = cc11001100_hook("S", 0, "assign"), x = cc11001100_hook("x", [], "assign"), T = cc11001100_hook("T", "", "assign"), window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", null, "assign"));
    }
  }
  function _(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) {
      e.jTool || (e = cc11001100_hook("e", new u(e), "assign"));
      var t = cc11001100_hook("t", e.firstNode, "var-init");
      if (0 != e.length) {
        if (3 == t.nodeType) return e;
        if (e.aria.atomic) return e.aria.atomicElem;
        var n = cc11001100_hook("n", ["STYLE", "SCRIPT", "INPUT", "SELECT", "OBJECT", "A", "COMBOBOX", "SELECT-ONE", "SELECT-MULTIPLE", "TEXTAREA", "BUTTON", "CHECKBOX"], "var-init");
        if ([].indexOf.call(n, t.nodeName) > -1) return e;
        var r = cc11001100_hook("r", e.childNodes(), "var-init");
        if (0 == r.length) return e;
        return [].indexOf.call(["ul", "li", "td", "label", "span", "dd", "dt"], e.aria.nodeName) > -1 && [].indexOf.call(n, r[0].nodeName) > -1 ? new u(r[0]) : _(r[0]);
      }
    }
  }
  function F() {
    if (window.ariaPlayElem) {
      var e = cc11001100_hook("e", window.ariaPlayElem, "var-init");
      if (!e.aria.skipall) {
        M(e);
        var t = cc11001100_hook("t", e.next(), "var-init");
        if (t) {
          if ("IFRAME" == t.nodeName) try {
            var n = cc11001100_hook("n", t.contentDocument, "var-init");
            if (null == n || !n.body) return window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", t.next(), "assign"), void F();
            t = cc11001100_hook("t", new u(n.body.firstChild), "assign");
          } catch (h) {
            return window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", t.next(), "assign"), void F();
          }
          if (0 == (t = cc11001100_hook("t", new u(t), "assign")).length && (t = cc11001100_hook("t", e.parent().next(), "assign")), 0 != t.length) {
            var i = cc11001100_hook("i", new u(_(t)), "var-init");
            if (1 != r.readtype || i.aria.isContentText) {
              window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", i, "assign");
              if ([].indexOf.call(["STYLE", "SCRIPT"], i.firstNode.nodeName) > -1) F();else if (i.isHidden()) F();else try {
                if (i.aria.lastText) 0 == s.replaceSpChar(i.aria.lastText).length ? F() : (M(null, i), A(i.aria.lastText));else F();
              } catch (h) {}
            }
          }
        } else window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", null, "assign");
      }
    }
  }
  function N(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (new u(".ariafocus").removeClass("ariafocus"), null != e) {
      if (e.jTool || (e = cc11001100_hook("e", new u(e), "assign")), 0 == e.length) return;
      3 == e.firstNode.nodeType && (e = cc11001100_hook("e", e.parent(), "assign")), e.removeClass("ariafocus");
      var t = cc11001100_hook("t", e.ariaAttr("oldTabindex"), "var-init");
      "none" == t ? e.removeAttr("tabindex") : e.attr("tabindex", t);
    }
  }
  function M(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (t) {
      if (t.jTool || (t = cc11001100_hook("t", new u(t), "assign")), 3 == t.firstNode.nodeType && (t = cc11001100_hook("t", t.parent(), "assign")), !t.aria.skipall) {
        var n = cc11001100_hook("n", t.attr("tabindex") || "none", "var-init");
        N(e), t.ariaAttr("oldTabindex", n), t.attr("tabindex", 0), t.addClass("ariafocus"), t.focus();
      }
    } else N(e);
  }
  e.exports = cc11001100_hook("e.exports", {
    play: cc11001100_hook("play", b, "object-key-init"),
    stop: cc11001100_hook("stop", y, "object-key-init"),
    start: function () {
      w || (w = cc11001100_hook("w", a(), "assign")), m(), d = cc11001100_hook("d", !0, "assign"), w.addEventListener("abort", f), w.addEventListener("canplay", p), w.addEventListener("durationchange", g), w.addEventListener("ended", O), w.addEventListener("error", h), w.addEventListener("timeupdate", g);
    },
    end: cc11001100_hook("end", m, "object-key-init"),
    startContinu: function (e) {
      if (e) {
        var t = cc11001100_hook("t", new u(_(e)), "var-init");
        if (!t.aria.skipall) {
          M(null, t), window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", t, "assign");
          [].indexOf.call(["STYLE", "SCRIPT"], t.firstNode.nodeName) > -1 ? F() : A(t.aria.lastText);
        }
      }
    },
    startSingle: cc11001100_hook("startSingle", A, "object-key-init"),
    isOpenVoice: function () {
      return d;
    }
  }, "assign");
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", function () {
    try {
      var e = cc11001100_hook("e", new Audio(), "var-init");
      return e.id = cc11001100_hook("e.id", "ariadudio", "assign"), e;
    } catch (n) {
      var t = cc11001100_hook("t", document.createElement("audio"), "var-init");
      return t.autoplay = cc11001100_hook("t.autoplay", !0, "assign"), t.controls = cc11001100_hook("t.controls", "controls", "assign"), t.id = cc11001100_hook("t.id", "ariadudio", "assign"), document.body.appendChild(t), document.getElementById("ariadudio");
    }
  }, "assign");
}, function (e, t, n) {
  (function (n) {
    var r;
    !function (n, i) {
      e.exports = cc11001100_hook("e.exports", function (n) {
        "use strict";

        var i,
          o = cc11001100_hook("o", (n = cc11001100_hook("n", n || {}, "assign")).ariaBase64, "var-init"),
          a = cc11001100_hook("a", "2.6.4", "var-init"),
          s = cc11001100_hook("s", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "var-init"),
          l = cc11001100_hook("l", function (e) {
            for (var t = cc11001100_hook("t", {}, "var-init"), n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) t[e.charAt(n)] = cc11001100_hook("t[e.charAt(n)]", n, "assign");
            return t;
          }(s), "var-init"),
          c = cc11001100_hook("c", String.fromCharCode, "var-init"),
          u = function (e) {
            if (e.length < 2) return (t = cc11001100_hook("t", e.charCodeAt(0), "assign")) < 128 ? e : t < 2048 ? c(192 | t >>> 6) + c(128 | 63 & t) : c(224 | t >>> 12 & 15) + c(128 | t >>> 6 & 63) + c(128 | 63 & t);
            var t = cc11001100_hook("t", 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320), "var-init");
            return c(240 | t >>> 18 & 7) + c(128 | t >>> 12 & 63) + c(128 | t >>> 6 & 63) + c(128 | 63 & t);
          },
          d = cc11001100_hook("d", /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, "var-init"),
          f = function (e) {
            return e.replace(d, u);
          },
          p = function (e) {
            var t = cc11001100_hook("t", [0, 2, 1][e.length % 3], "var-init"),
              n = cc11001100_hook("n", e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0), "var-init");
            return [s.charAt(n >>> 18), s.charAt(n >>> 12 & 63), t >= 2 ? "=" : s.charAt(n >>> 6 & 63), t >= 1 ? "=" : s.charAt(63 & n)].join("");
          },
          h = cc11001100_hook("h", n.btoa && "function" == typeof n.btoa ? function (e) {
            return n.btoa(e);
          } : function (e) {
            if (e.match(/[^\x00-\xFF]/)) throw new RangeError("The string contains invalid characters.");
            return e.replace(/[\s\S]{1,3}/g, p);
          }, "var-init"),
          g = function (e) {
            return h(f(String(e)));
          },
          m = function (e) {
            return e.replace(/[+\/]/g, function (e) {
              return "+" == e ? "-" : "_";
            }).replace(/=/g, "");
          },
          v = function (e, t) {
            return t ? m(g(e)) : g(e);
          },
          b = function (e) {
            return v(e, !0);
          };
        n.Uint8Array && (i = cc11001100_hook("i", function (e, t) {
          for (var n = cc11001100_hook("n", "", "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < i; r += cc11001100_hook("r", 3, "assign")) {
            var o = cc11001100_hook("o", e[r], "var-init"),
              a = cc11001100_hook("a", e[r + 1], "var-init"),
              l = cc11001100_hook("l", e[r + 2], "var-init"),
              c = cc11001100_hook("c", o << 16 | a << 8 | l, "var-init");
            n += cc11001100_hook("n", s.charAt(c >>> 18) + s.charAt(c >>> 12 & 63) + (void 0 !== a ? s.charAt(c >>> 6 & 63) : "=") + (void 0 !== l ? s.charAt(63 & c) : "="), "assign");
          }
          return t ? m(n) : n;
        }, "assign"));
        var y,
          w = cc11001100_hook("w", /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, "var-init"),
          x = function (e) {
            switch (e.length) {
              case 4:
                var t = cc11001100_hook("t", ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536, "var-init");
                return c(55296 + (t >>> 10)) + c(56320 + (1023 & t));
              case 3:
                return c((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
              default:
                return c((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
            }
          },
          S = function (e) {
            return e.replace(w, x);
          },
          C = function (e) {
            var t = cc11001100_hook("t", e.length, "var-init"),
              n = cc11001100_hook("n", t % 4, "var-init"),
              r = cc11001100_hook("r", (t > 0 ? l[e.charAt(0)] << 18 : 0) | (t > 1 ? l[e.charAt(1)] << 12 : 0) | (t > 2 ? l[e.charAt(2)] << 6 : 0) | (t > 3 ? l[e.charAt(3)] : 0), "var-init"),
              i = cc11001100_hook("i", [c(r >>> 16), c(r >>> 8 & 255), c(255 & r)], "var-init");
            return i.length -= cc11001100_hook("i.length", [0, 0, 2, 1][n], "assign"), i.join("");
          },
          k = cc11001100_hook("k", n.atob && "function" == typeof n.atob ? function (e) {
            return n.atob(e);
          } : function (e) {
            return e.replace(/\S{1,4}/g, C);
          }, "var-init"),
          T = function (e) {
            return k(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""));
          },
          A = function (e) {
            return S(k(e));
          },
          E = function (e) {
            return String(e).replace(/[-_]/g, function (e) {
              return "-" == e ? "+" : "/";
            }).replace(/[^A-Za-z0-9\+\/]/g, "");
          },
          O = function (e) {
            return A(E(e));
          };
        n.Uint8Array && (y = cc11001100_hook("y", function (e) {
          return Uint8Array.from(T(E(e)), function (e) {
            return e.charCodeAt(0);
          });
        }, "assign"));
        var _ = function () {
          var e = cc11001100_hook("e", n.ariaBase64, "var-init");
          return n.ariaBase64 = cc11001100_hook("n.ariaBase64", o, "assign"), e;
        };
        if (n.ariaBase64 = cc11001100_hook("n.ariaBase64", {
          VERSION: cc11001100_hook("VERSION", a, "object-key-init"),
          atob: cc11001100_hook("atob", T, "object-key-init"),
          btoa: cc11001100_hook("btoa", h, "object-key-init"),
          fromBase64: cc11001100_hook("fromBase64", O, "object-key-init"),
          toBase64: cc11001100_hook("toBase64", v, "object-key-init"),
          utob: cc11001100_hook("utob", f, "object-key-init"),
          encode: cc11001100_hook("encode", v, "object-key-init"),
          encodeURI: cc11001100_hook("encodeURI", b, "object-key-init"),
          btou: cc11001100_hook("btou", S, "object-key-init"),
          decode: cc11001100_hook("decode", O, "object-key-init"),
          noConflict: cc11001100_hook("noConflict", _, "object-key-init"),
          fromUint8Array: cc11001100_hook("fromUint8Array", i, "object-key-init"),
          toUint8Array: cc11001100_hook("toUint8Array", y, "object-key-init")
        }, "assign"), "function" == typeof Object.defineProperty) {
          var F = function (e) {
            return {
              value: cc11001100_hook("value", e, "object-key-init"),
              enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
              writable: cc11001100_hook("writable", !0, "object-key-init"),
              configurable: cc11001100_hook("configurable", !0, "object-key-init")
            };
          };
          n.ariaBase64.extendString = cc11001100_hook("n.ariaBase64.extendString", function () {
            Object.defineProperty(String.prototype, "fromBase64", F(function () {
              return O(this);
            })), Object.defineProperty(String.prototype, "toBase64", F(function (e) {
              return v(this, e);
            })), Object.defineProperty(String.prototype, "toBase64URI", F(function () {
              return v(this, !0);
            }));
          }, "assign");
        }
        n["Meteor"] && (ariaBase64 = cc11001100_hook("ariaBase64", n.ariaBase64, "assign"));
        e.exports ? e.exports.ariaBase64 = cc11001100_hook("e.exports.ariaBase64", n.ariaBase64, "assign") : (r = cc11001100_hook("r", function () {
          return n.ariaBase64;
        }.apply(t, []), "assign")) === undefined || (e.exports = cc11001100_hook("e.exports", r, "assign"));
        return {
          ariaBase64: cc11001100_hook("ariaBase64", n.ariaBase64, "object-key-init")
        };
      }(n), "assign");
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : this);
  }).call(this, n(27));
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    innerBigSrc: function (e) {
      if (r.bigsrc) if (r.big5 && (e = cc11001100_hook("e", ChineseHelper.convertToTraditionalChinese(e), "assign")), r.py) {
        if ("undefined" != typeof PinyinHelper) {
          var t = cc11001100_hook("t", PinyinHelper.convertToPinyin(e, PinyinFormat.WITH_TONE_MARK), "var-init");
          document.getElementById("acctip").textContent = cc11001100_hook("document.getElementById(\"acctip\").textContent", "", "assign");
          for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
            var o = cc11001100_hook("o", '<div class="pinyin ariaskiptheme">', "var-init");
            o += cc11001100_hook("o", '<ariab class="ariaskiptheme"><ariai class="ariaskiptheme">' + t[n].v + '</ariai><ariai class="ariaskiptheme">' + (r.big5 ? ChineseHelper.convertToTraditionalChinese(t[n].key) : t[n].key) + "</ariai></ariab>", "assign"), o += cc11001100_hook("o", "</div>", "assign"), new i("#accscreen #acctip").append(o);
          }
        } else r.loadPy();
      } else new i("#accscreen #acctip").html(e);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    dialogClose: function () {
      var e = cc11001100_hook("e", i.arrToSizzle(i.HtmlElemRoles.dialog), "var-init"),
        t = cc11001100_hook("t", new r(this).closest(e), "var-init");
      t.length > 0 && (t.aria.tabindex = cc11001100_hook("t.aria.tabindex", -1, "assign"), t.hide(), globalActiveElem && globalActiveElem.focus());
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(13), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", (n(5), n(0)), "var-init"),
    a = cc11001100_hook("a", n(2), "var-init"),
    s = cc11001100_hook("s", n(33), "var-init"),
    l = cc11001100_hook("l", n(7), "var-init");
  l = cc11001100_hook("l", n(7), "assign");
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (2 != a.readtype && !new i(e.target).aria.skipall && !function (e) {
      o.stopBubble(), o.stopDefault();
      var t = cc11001100_hook("t", new i(e.target), "var-init");
      if (!t.aria.isCenterScale) return;
      if (t.ariaAttr("fromClone")) return void t.removeAttr("fromClone");
      return l.CenterScale(t, 2), t.ariaAttr("fromClone", !0), !0;
    }(e)) {
      var t = cc11001100_hook("t", e.target, "var-init"),
        n = cc11001100_hook("n", new i(t), "var-init");
      if (s.resetOwns(n, e), r.setClass(n, l.viewDocument(e)), 2 != a.readtype && (s.foucseEvent(e), !l.breakEvents(n, e))) if (n.aria.dialog || (globalActiveElem = cc11001100_hook("globalActiveElem", n, "assign")), function (e) {
        var t = cc11001100_hook("t", e.find("[tabindex"), "var-init");
        o.each(t, function (e, t) {
          t.getAttribute("tabindex") > 0 && t.setAttribute("tabindex", 0);
        });
      }(n), "tab" == n.aria.role && o.triggerEvent(e.target, "mouseover"), n.ariaAttr("label")) window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", n, "assign");else {
        var c = cc11001100_hook("c", l.realPlayElem(n), "var-init");
        c && window.ariaPlayElem != c && (window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", c, "assign"));
      }
    }
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new i(e).on("focusin", "*:not(iframe)", c), new i(e.body).on("blur", "*", u);
    },
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new i(e).off("focusin", "*:not(iframe)", c), new i(e.body).off("blur", "*", u);
    }
  }, "assign");
}, function (e, t) {
  var n = cc11001100_hook("n", {
    width: function () {
      return document.documentElement.clientWidth;
    },
    bodyWidth: function () {
      var e = cc11001100_hook("e", n.width(), "var-init");
      return e > 1400 ? 1400 : e;
    }
  }, "var-init");
  e.exports = cc11001100_hook("e.exports", n, "assign");
}, function (e, t, n) {
  n(3);
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(8), "var-init"),
    a = cc11001100_hook("a", "{" + o.singleCol() + "}", "var-init"),
    s = cc11001100_hook("s", o.prefix.useOldFixed(), "var-init");
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) try {
      var t = cc11001100_hook("t", e.style, "var-init"),
        n = cc11001100_hook("n", t["width"], "var-init");
      if (!n) return;
      if (n.indexOf("%") > 0 && parseInt(n.replace("%", "")) > 30) return e.selectorText;
      var r = cc11001100_hook("r", parseInt(t["width"], 10), "var-init");
      if (r > 240 && r < 390) return e.selectorText;
    } catch (i) {} else ;
  }
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) try {
      var t = cc11001100_hook("t", e.style, "var-init"),
        n = cc11001100_hook("n", t["width"], "var-init");
      if (!n) return;
      if (n.indexOf("%") > 0 && parseInt(n.replace("%", "")) > 30) return e.selectorText;
      var r = cc11001100_hook("r", parseInt(t["width"], 10), "var-init");
      if (e.selectorText.indexOf("bt-box-530"), r > 390 && e.selectorText != s && e.selectorText.indexOf(s) < 0) return e.selectorText.indexOf("bt-box-530"), e.selectorText;
    } catch (i) {} else ;
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.style.width, "var-init");
    if (t && parseInt(t, 10) > 240) return new r(e).cssPath(!0);
  }
  var d = cc11001100_hook("d", new Map(), "var-init");
  var f = cc11001100_hook("f", 0, "var-init"),
    p = cc11001100_hook("p", !1, "var-init");
  e.exports = cc11001100_hook("e.exports", {
    setWidth: function (e) {
      var t = cc11001100_hook("t", "", "var-init");
      t += cc11001100_hook("t", "\r\n/**   设置页面单列开始   */\r\n", "assign");
      var n = cc11001100_hook("n", e.styleSheets.length, "var-init");
      f != n && (f = cc11001100_hook("f", n, "assign"), p = cc11001100_hook("p", !0, "assign"));
      for (var r = cc11001100_hook("r", function (e) {
          p && d.clear();
          var t = cc11001100_hook("t", e.body.getAttribute("id"), "var-init");
          t || (t = cc11001100_hook("t", i.genID(), "assign"), e.body.setAttribute("id", t));
          var n = cc11001100_hook("n", d[t] || [], "var-init");
          return n.length > 0 || (n = cc11001100_hook("n", o.createElemStyle(u, [], e), "assign"), n = cc11001100_hook("n", o.create(c, e, n), "assign"), (n = cc11001100_hook("n", o.create(l, e, n), "assign")).push("[aria-singleCol=true]:not([role='unset']):not([role='rotationchar'])"), n.push(".ariaSingle100"), d.set(t, n)), n;
        }(e), "var-init"), s = cc11001100_hook("s", o.prefix.useOldFixed(e), "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < r.length; h++) {
        t += cc11001100_hook("t", s + " " + r[h] + ":not(.skipAutoFix)" + a, "assign");
      }
      t += cc11001100_hook("t", o.media(0, 1366) + "{", "assign"), t += cc11001100_hook("t", "\r\n/**   设置页面body和html  */\r\n", "assign"), t += cc11001100_hook("t", "   html,body{width:100%;min-width:100%; max-width:100%;   }", "assign"), t += cc11001100_hook("t", "}", "assign");
      var g = cc11001100_hook("g", s.trim() + ":not(.ariaiframe)>*:not([isaria]):not(.skipAutoFix)", "var-init");
      return g.length > 0 && (t += cc11001100_hook("t", g + "{width:80% !important;margin:0 auto;max-width:1400px !important;}", "assign"), t += cc11001100_hook("t", o.media(0, o.width100ScreenWidth) + "{", "assign"), t += cc11001100_hook("t", g + "{width:100% !important;margin:0 auto;padding-left: 5px !important;padding-right: 5px !important;box-sizing: border-box;}", "assign"), t += cc11001100_hook("t", "}", "assign")), e != document && (t += cc11001100_hook("t", o.prefix.useOldFixed(e) + "{margin:0 !important;}", "assign")), t;
    }
  }, "assign");
}, function (e, t, n) {
  n(1);
  var r = cc11001100_hook("r", n(8), "var-init"),
    i = cc11001100_hook("i", n(49), "var-init"),
    o = cc11001100_hook("o", n(0), "var-init");
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) try {
      e.selectorText.indexOf(".zytx");
      var t = cc11001100_hook("t", e.style, "var-init");
      if (t["height"] && t["height"].length > 0) if (parseInt(t["height"], 10) < 72) return e.selectorText;
      var n = cc11001100_hook("n", t["line-height"], "var-init");
      if (!n) return;
      if (n.indexOf("%") > 0 && parseInt(n.replace("%", "")) < 200) return e.selectorText;
      if ((n = cc11001100_hook("n", parseInt(n, 10), "assign")) < 72) return e.selectorText;
    } catch (r) {} else ;
  }
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.id, "var-init");
    t || (t = cc11001100_hook("t", o.genID(), "assign"), e.id = cc11001100_hook("e.id", t, "assign"));
    var n = cc11001100_hook("n", e.style.height, "var-init");
    if (n && parseInt(n, 10) < 72) return "#" + t;
    var i = cc11001100_hook("i", e.style["line-height"], "var-init");
    return i && (i.indexOf("%") > 0 && parseInt(i.replace("%", "")) < 200 || (i = cc11001100_hook("i", r.RealSizePx(i), "assign")) < 72) ? "#" + t : void 0;
  }
  var l = cc11001100_hook("l", new Map(), "var-init"),
    c = cc11001100_hook("c", new Map(), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    setHeight: function (e) {
      var t = cc11001100_hook("t", function (e) {
        var t = cc11001100_hook("t", e.body.getAttribute("id"), "var-init");
        t || (t = cc11001100_hook("t", o.genID(), "assign"), e.body.setAttribute("id", t));
        var n = cc11001100_hook("n", c.has(t) ? c.get(t) : 0, "var-init"),
          u = cc11001100_hook("u", !0, "var-init"),
          d = cc11001100_hook("d", e.styleSheets.length, "var-init");
        if (n != d && (c.set(t, d), u = cc11001100_hook("u", !1, "assign")), u && l.has(t)) return l.get(t);
        var f = cc11001100_hook("f", r.create(a), "var-init");
        f = cc11001100_hook("f", r.createElemStyle(s, f), "assign");
        for (var p = cc11001100_hook("p", r.create(i.setContentFont, e), "var-init"), h = cc11001100_hook("h", r.create(i.setTitleFont), "var-init"), g = cc11001100_hook("g", [], "var-init"), m = cc11001100_hook("m", 0, "var-init"); m < f.length; m++) {
          var v = cc11001100_hook("v", f[m], "var-init");
          [].indexOf.call(p, v) < 0 && [].indexOf.call(h, v) < 0 && g.push(v);
        }
        return l.set(t, g), g;
      }(e), "var-init");
      if (0 == t.length) return "";
      for (var n = cc11001100_hook("n", "\r\n/**   设置高度开始   */\r\n", "var-init"), u = cc11001100_hook("u", r.prefix.useOldFixed(e), "var-init"), d = cc11001100_hook("d", r.height(36), "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < t.length; f++) {
        n += cc11001100_hook("n", u + " " + t[f] + ":not(.skipAutoFix)" + d, "assign");
      }
      n += cc11001100_hook("n", r.media(769, 1366) + "{", "assign");
      var p = cc11001100_hook("p", r.height(28), "var-init");
      for (f = cc11001100_hook("f", 0, "assign"); f < t.length; f++) {
        n += cc11001100_hook("n", u + " " + t[f] + ":not(.skipAutoFix)" + p, "assign");
      }
      n += cc11001100_hook("n", "}", "assign"), n += cc11001100_hook("n", r.media(0, 768) + "{ ", "assign");
      var h = cc11001100_hook("h", r.height(18), "var-init");
      for (f = cc11001100_hook("f", 0, "assign"); f < t.length; f++) {
        n += cc11001100_hook("n", u + " " + t[f] + ":not(.skipAutoFix)" + h, "assign");
      }
      return n += cc11001100_hook("n", "}", "assign");
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(8), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    havle: function (e) {
      var t = cc11001100_hook("t", [], "var-init");
      new r(e.body).find("#autohavle").html("");
      var n = cc11001100_hook("n", parseFloat(new r(e.body).css("width")), "var-init"),
        a = cc11001100_hook("a", document.documentElement.clientWidth, "var-init");
      n > a && (n = cc11001100_hook("n", a, "assign")), t = cc11001100_hook("t", n < 769 || i.isMobile() ? new r(e.body).find("[aria-wapcols]") : new r(e.body).find("[aria-cols]"), "assign"), n > o.width100ScreenWidth && (n *= cc11001100_hook("n", .8, "assign")), n > 1400 && (n = cc11001100_hook("n", 1400, "assign")), i.isMobile() && (n -= cc11001100_hook("n", 10, "assign"));
      for (var s = cc11001100_hook("s", o.prefix.useOldFixed(e), "var-init"), l = cc11001100_hook("l", "", "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < t.length; c++) {
        var u = cc11001100_hook("u", new r(t.nodeList[c]), "var-init"),
          d = cc11001100_hook("d", u.attr("id"), "var-init");
        d || (d = cc11001100_hook("d", i.genID(), "assign"), u.attr("id", d));
        var f = cc11001100_hook("f", "#" + d, "var-init"),
          p = cc11001100_hook("p", new r(u.parent()), "var-init");
        parseInt(p.css("padding-left")) + parseInt(p.css("padding-right")) + 2 * parseInt(p.css("border"), 10);
        var h = cc11001100_hook("h", 1, "var-init"),
          g = cc11001100_hook("g", 10, "var-init");
        n <= 768 || i.isMobile() ? (h = cc11001100_hook("h", parseInt(u.ariaAttr("wapcols")), "assign"), g = cc11001100_hook("g", 5, "assign")) : h = cc11001100_hook("h", parseInt(u.ariaAttr("cols")), "assign");
        var m = cc11001100_hook("m", "100%", "var-init");
        if (h > 1 && (m = cc11001100_hook("m", "calc((100% - " + (h - 1) * g + "px)/" + h + ")", "assign")), l += cc11001100_hook("l", s + "  " + f + " {", "assign"), l += cc11001100_hook("l", "transition:none !important;", "assign"), l += cc11001100_hook("l", "transform:none !important;", "assign"), l += cc11001100_hook("l", "}", "assign"), l += cc11001100_hook("l", s + "  " + f + ">:nth-child(n)>:first-child {", "assign"), l += cc11001100_hook("l", "margin:0;", "assign"), l += cc11001100_hook("l", "}", "assign"), l += cc11001100_hook("l", s + "  " + f + " br {", "assign"), l += cc11001100_hook("l", "display:none;", "assign"), l += cc11001100_hook("l", "}", "assign"), l += cc11001100_hook("l", s + "  " + f + ">:nth-child(n) {", "assign"), l += cc11001100_hook("l", "   clear: none !important;", "assign"), l += cc11001100_hook("l", "   float: left;", "assign"), l += cc11001100_hook("l", "   width: " + m + " !important;", "assign"), l += cc11001100_hook("l", "   margin-right: " + g + "px !important;", "assign"), l += cc11001100_hook("l", "   margin-bottom: " + g + "px !important;", "assign"), l += cc11001100_hook("l", "   margin-top: " + g + "px !important;", "assign"), l += cc11001100_hook("l", "   box-sizing: border-box;margin-left:0;", "assign"), l += cc11001100_hook("l", "   text-align: center;", "assign"), u.ariaAttr("colsUseShadow") && (l += cc11001100_hook("l", "   box-shadow:0px 8px 10px -1px rgb(203 180 134 / 42%);", "assign")), l += cc11001100_hook("l", "   border-radius:6px;", "assign"), l += cc11001100_hook("l", "}", "assign"), "true" == u.ariaAttr("colsfirstmerge") && h > 2) l += cc11001100_hook("l", s + f + ">:nth-child(" + (h - 1) + "n+" + h + " ) ", "assign"), l += cc11001100_hook("l", " {", "assign");else l += cc11001100_hook("l", o.prefix.useOldFixed(e) + "  " + f + ">:nth-child(" + h + "n)  {", "assign");
        l += cc11001100_hook("l", "margin-right: 0 !important;", "assign"), l += cc11001100_hook("l", "}", "assign");
        for (var v = cc11001100_hook("v", 0, "var-init"), b = cc11001100_hook("b", u.child(), "var-init"), y = cc11001100_hook("y", 0, "var-init"); y < b.length; y++) {
          null != b[y].offsetParent && (v += cc11001100_hook("v", 1, "assign"));
        }
        var w = cc11001100_hook("w", Math.ceil(v / h), "var-init");
        "true" == u.ariaAttr("colsfirstmerge") && (v -= cc11001100_hook("v", 1, "assign"), w = cc11001100_hook("w", Math.ceil(v / (h - 1)), "assign")), l += cc11001100_hook("l", o.media(0, 768) + "{", "assign"), "true" == u.ariaAttr("colsfirstmerge") && h > 2 && (l += cc11001100_hook("l", s + f + ">:first-child,  " + s + f + ">:first-child>:first-child {", "assign"), l += cc11001100_hook("l", "height:" + (40 * w + 2 * g) + "px !important;", "assign"), l += cc11001100_hook("l", "line-height:" + (40 * w + 2 * g) + "px !important;", "assign"), l += cc11001100_hook("l", "}", "assign"));
        var x = cc11001100_hook("x", (40 + 2 * g) * w, "var-init");
        l += cc11001100_hook("l", s + "  " + f + " {", "assign"), l += cc11001100_hook("l", "min-height:" + x + "px ;", "assign"), l += cc11001100_hook("l", "}}", "assign"), l += cc11001100_hook("l", o.media(769, 1366) + "{", "assign"), x = cc11001100_hook("x", (56 + 2 * g) * w, "assign"), "true" == u.ariaAttr("colsfirstmerge") && h > 2 && (l += cc11001100_hook("l", s + f + ">:first-child,  " + s + f + ">:first-child>:first-child {", "assign"), l += cc11001100_hook("l", "height:" + (56 * w + 2 * g) + "px !important;", "assign"), l += cc11001100_hook("l", "line-height:" + (56 * w + 2 * g) + "px !important;", "assign"), l += cc11001100_hook("l", "}", "assign")), l += cc11001100_hook("l", s + "  " + f + " {", "assign"), l += cc11001100_hook("l", "min-height:" + x + "px ;", "assign"), l += cc11001100_hook("l", "}}", "assign"), l += cc11001100_hook("l", o.media(1367, 5120) + "{", "assign"), x = cc11001100_hook("x", (72 + 2 * g) * w, "assign"), "true" == u.ariaAttr("colsfirstmerge") && h > 2 && (l += cc11001100_hook("l", s + f + ">:first-child,  " + s + f + ">:first-child>:first-child {", "assign"), l += cc11001100_hook("l", "height:" + (72 * w + 2 * g) + "px !important;", "assign"), l += cc11001100_hook("l", "line-height:" + (72 * w + 2 * g) + "px !important;", "assign"), l += cc11001100_hook("l", "}", "assign")), l += cc11001100_hook("l", s + "  " + f + " {", "assign"), l += cc11001100_hook("l", "min-height:" + x + "px ;", "assign"), l += cc11001100_hook("l", "}}", "assign"), u.ariaAttr("colsfirstmerge");
      }
      i.appendCss(e, "autohavle", l);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(8), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    tsearch: function (e) {
      new r(e.body).find("#autoSearchbox").html("");
      var t = cc11001100_hook("t", new r(e.body).find('[role="searchbox"]'), "var-init"),
        n = cc11001100_hook("n", "", "var-init"),
        a = cc11001100_hook("a", parseInt(new r(e.body).css("width")), "var-init");
      i.each(t, function (t, r) {
        var s = cc11001100_hook("s", r.getAttribute("id"), "var-init");
        s || (s = cc11001100_hook("s", i.genID(), "assign"), r.setAttribute("id", s));
        var l = cc11001100_hook("l", o.prefix.useOldFixed(e) + "  #" + s, "var-init");
        n += cc11001100_hook("n", l + " form{position: relative;overflow:hidden;}", "assign"), n += cc11001100_hook("n", l, "assign"), a > 768 ? (n += cc11001100_hook("n", "{    height: 60px !important;    line-height: 60px;    font-size:32px !important;    clear: both;    width: 60% !important;    margin: 20px auto;    text-align: center;    float: none !important;}", "assign"), n += cc11001100_hook("n", l + " input{box-sizing:border-box;height:56px !important;;line-height:56px;border-radius:28px;font-size:30px;width:100% !important;padding-left:25px;    position: relative;}", "assign"), n += cc11001100_hook("n", l + " button," + l + " [role='button']{height:56px !important;border-radius:0 28px 28px 0;padding-right:28px;font-size:30px;line-height:56px; position:absolute;display:inline-block;box-sizing:border-box;right:0;}", "assign")) : (n += cc11001100_hook("n", "{    width: 85% !important;    float: none !important;    font-size:18px !important;    margin: 20px auto;    clear: both;    text-align: center;    height: 40px;    line-height: 40px;}", "assign"), n += cc11001100_hook("n", l + " input{box-sizing:border-box;height:36px !important;;line-height:36px;font-size:18px;width:100% !important;border-radius:18px;padding-left:18px;    position: relative;}", "assign"), n += cc11001100_hook("n", l + " button," + l + " [role='button']{height:36px !important;border-radius:0 18px 18px 0;padding-right:18px; font-size::18px;line-height:36px;position:absolute;display:inline-block;box-sizing:border-box;right:0;}", "assign"));
      }), i.appendCss(e, "autoSearchbox", n);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", (n(3), n(1)), "var-init"),
    o = cc11001100_hook("o", n(0), "var-init"),
    a = cc11001100_hook("a", n(8), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    RegionListCss: function (e) {
      if (r.oldFixedStatus || o.isMobile()) {
        var t = cc11001100_hook("t", "", "var-init");
        new i(e.body).find("#regiontyp5").html("");
        for (var n = cc11001100_hook("n", new i(e.body).find('[aria-regiontype="5"]'), "var-init"), s = cc11001100_hook("s", a.prefix.useOldFixed(e), "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < n.length; l++) {
          var c = cc11001100_hook("c", new i(n.nodeList[l]), "var-init"),
            u = cc11001100_hook("u", c.ariaAttr("id"), "var-init");
          u || (u = cc11001100_hook("u", o.genID(), "assign"), c.ariaAttr("id", u));
          var d = cc11001100_hook("d", c.ariaAttr("controls"), "var-init");
          d && (t += cc11001100_hook("t", s + " #" + u + " " + d + "{display:flex;display:-ms-flexbox;}", "assign"));
        }
        o.appendCss(e, "regiontyp5", t);
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(8), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    tlogo: function (e) {
      new r(e.body).find("#autoLogobox").html("");
      var t = cc11001100_hook("t", o.prefix.useOldFixed(e) + ' [role="logobox"]', "var-init"),
        n = cc11001100_hook("n", t, "var-init");
      n += cc11001100_hook("n", parseInt(new r(e.body).css("width")) > 768 ? "{    min-height: 80px !important;    line-height: 80px;    font-size:40px !important;    width: 60% !important;    clear: both;    margin: 0 auto;    text-align: center;    float: none !important;    display: block;    overflow: hidden;}" : "{    width: 85% !important;    font-size:24px !important;    margin: 0 auto;    clear: both;    text-align: center;    min-height: 48px;    line-height: 48px;    float: none !important;    display: block;    overflow: hidden;}", "assign"), n += cc11001100_hook("n", t + " img{width:100%;}", "assign"), i.appendCss(e, "autoLogobox", n);
    }
  }, "assign");
}, function (e, t) {
  var n,
    r = cc11001100_hook("r", new Map(), "var-init");
  "undefined" == typeof Map.prototype.has && (Map.prototype.has = cc11001100_hook("Map.prototype.has", function (e) {
    return this.containsKey(e);
  }, "assign")), "undefined" == typeof Map.prototype.set && (Map.prototype.set = cc11001100_hook("Map.prototype.set", function (e, t) {
    this.put(e, t);
  }, "assign"));
  var i = cc11001100_hook("i", {
    fixBaseURL: function (e) {
      return n || (n = cc11001100_hook("n", document.createElement("a"), "assign")), n.href = cc11001100_hook("n.href", e, "assign"), n.href;
    },
    parseURL: function (e, t) {
      void 0 === t && (t = cc11001100_hook("t", null, "assign"));
      var n = cc11001100_hook("n", e + (t ? ";" + t : ""), "var-init");
      try {
        if (r.has(n)) return r.get(n);
      } catch (a) {}
      if (t) {
        var o = cc11001100_hook("o", new URL(e, i.fixBaseURL(t)), "var-init");
        return r.set(n, o), o;
      }
      o = cc11001100_hook("o", new URL(i.fixBaseURL(e)), "assign");
      return r.set(e, o), o;
    },
    getAbsoluteURL: function (e, t) {
      if (t.match(/^data\\?\:/)) return t;
      if (/^\/\//.test(t)) return location.protocol + t;
      var n = cc11001100_hook("n", i.parseURL(e), "var-init");
      return i.parseURL(t, n.href).href;
    },
    isRelativeHrefOnAbsolutePath: function (e) {
      if (e.startsWith("data:")) return !0;
      var t = cc11001100_hook("t", i.parseURL(e), "var-init");
      return t.protocol === location.protocol && t.hostname === location.hostname && t.port === location.port && t.pathname === location.pathname;
    },
    isCorsUrl: function (e) {
      return !e.startsWith("data:") && i.parseURL(e).origin != location.origin;
    },
    getURLHostOrProtocol: function (e) {
      var t = cc11001100_hook("t", new URL(e), "var-init");
      return t.host ? t.host : "file:" === t.protocol ? t.pathname : t.protocol;
    }
  }, "var-init");
  e.exports = cc11001100_hook("e.exports", i, "assign");
}, function (e, t) {
  var n, r;
  n = cc11001100_hook("n", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "assign"), r = cc11001100_hook("r", {
    rotl: function (e, t) {
      return e << t | e >>> 32 - t;
    },
    rotr: function (e, t) {
      return e << 32 - t | e >>> t;
    },
    endian: function (e) {
      if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
      for (var t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) e[t] = cc11001100_hook("e[t]", r.endian(e[t]), "assign");
      return e;
    },
    randomBytes: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"); e > 0; e--) t.push(Math.floor(256 * Math.random()));
      return t;
    },
    bytesToWords: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); n < e.length; n++, r += cc11001100_hook("r", 8, "assign")) t[r >>> 5] |= cc11001100_hook("t[r >>> 5]", e[n] << 24 - r % 32, "assign");
      return t;
    },
    wordsToBytes: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < 32 * e.length; n += cc11001100_hook("n", 8, "assign")) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
      return t;
    },
    bytesToHex: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
      return t.join("");
    },
    hexToBytes: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n += cc11001100_hook("n", 2, "assign")) t.push(parseInt(e.substr(n, 2), 16));
      return t;
    },
    bytesToBase64: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e.length; r += cc11001100_hook("r", 3, "assign")) for (var i = cc11001100_hook("i", e[r] << 16 | e[r + 1] << 8 | e[r + 2], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? t.push(n.charAt(i >>> 6 * (3 - o) & 63)) : t.push("=");
      return t.join("");
    },
    base64ToBytes: function (e) {
      e = cc11001100_hook("e", e.replace(/[^A-Z0-9+\/]/gi, ""), "assign");
      for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"); r < e.length; i = cc11001100_hook("i", ++r % 4, "assign")) 0 != i && t.push((n.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | n.indexOf(e.charAt(r)) >>> 6 - 2 * i);
      return t;
    }
  }, "assign"), e.exports = cc11001100_hook("e.exports", r, "assign");
}, function (e, t) {
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  }
  e.exports = cc11001100_hook("e.exports", function (e) {
    return null != e && (n(e) || function (e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
    }(e) || !!e._isBuffer);
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(16), "var-init"),
    i = cc11001100_hook("i", n(12), "var-init"),
    o = cc11001100_hook("o", n(48), "var-init"),
    a = cc11001100_hook("a", new Map(), "var-init"),
    s = cc11001100_hook("s", window.sessionStorage, "var-init");
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    return new Promise(function (t, n) {
      if (a.has(e)) t({
        name: cc11001100_hook("name", e, "object-key-init"),
        value: cc11001100_hook("value", a.get(e), "object-key-init")
      });else {
        var l = cc11001100_hook("l", s.getItem(o(e)), "var-init");
        if (l) t({
          name: cc11001100_hook("name", e, "object-key-init"),
          value: cc11001100_hook("value", l, "object-key-init")
        });else try {
          var c = cc11001100_hook("c", new XMLHttpRequest(), "var-init");
          c.open("get", e, !0), c.responseType = cc11001100_hook("c.responseType", "blob", "assign"), c.onload = cc11001100_hook("c.onload", function () {
            if (404 != c.status) {
              var r = cc11001100_hook("r", new FileReader(), "var-init");
              r.readAsText(c.response, "utf-8"), r.onload = cc11001100_hook("r.onload", function (n) {
                r.result.indexOf("<body") < 0 ? (a.set(e, r.result), s.setItem(o(e), r.result), t({
                  name: cc11001100_hook("name", e, "object-key-init"),
                  value: cc11001100_hook("value", r.result, "object-key-init")
                })) : t();
              }, "assign");
            } else n();
          }, "assign"), c.onerror = cc11001100_hook("c.onerror", function (n) {
            r.post(i.api.corsCss, {
              Hrefs: cc11001100_hook("Hrefs", [e], "object-key-init")
            }).then(function (n) {
              a.set(e, n.result[e]), s.setItem(o(e), n.result[e]), t({
                name: cc11001100_hook("name", e, "object-key-init"),
                value: cc11001100_hook("value", n.result[e], "object-key-init")
              });
            });
          }, "assign"), c.send();
        } catch (u) {
          t(u);
        }
      }
    });
  }
  e.exports = cc11001100_hook("e.exports", {
    downloadCss: function (e) {
      var t = cc11001100_hook("t", [], "var-init");
      if (e.indexOf("??") > 0) for (var n = cc11001100_hook("n", e.split("??"), "var-init"), r = cc11001100_hook("r", n[1].split(","), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) {
        var o = cc11001100_hook("o", r[i], "var-init");
        t.push(n[0] + o);
      } else t.push(e);
      var a = cc11001100_hook("a", [], "var-init");
      for (i = cc11001100_hook("i", 0, "assign"); i < t.length; i++) {
        o = cc11001100_hook("o", t[i], "assign");
        a.push(l(o));
      }
      return new Promise(function (t, n) {
        Promise.all(a).then(function (n) {
          var r = cc11001100_hook("r", {}, "var-init");
          r.name = cc11001100_hook("r.name", e, "assign"), r.value = cc11001100_hook("r.value", "", "assign");
          for (var i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) {
            var o = cc11001100_hook("o", n[i], "var-init");
            o && (r.value += cc11001100_hook("r.value", o.value, "assign"));
          }
          t(r);
        }, function () {
          t({
            name: cc11001100_hook("name", e, "object-key-init"),
            value: cc11001100_hook("value", "", "object-key-init")
          });
        });
      });
    },
    downloadPicBlob: function (e) {
      return new Promise(function (t, n) {
        e.startsWith("data:") ? t(e) : a[e] && t(a[e]);
      })["catch"](function (e) {});
    },
    downloadPicImage: function (e) {
      return new Promise(function (t, n) {
        if (e.startsWith("data:")) t(e);else if (a[e]) t(a[e]);else {
          var r = cc11001100_hook("r", new Image(), "var-init");
          r.setAttribute("crossOrigin", "anonymous"), r.onload = cc11001100_hook("r.onload", function () {
            var n = cc11001100_hook("n", document.createElement("canvas"), "var-init");
            n.width = cc11001100_hook("n.width", r.width, "assign"), n.height = cc11001100_hook("n.height", r.height, "assign"), n.getContext("2d").drawImage(r, 0, 0, r.width, r.height);
            var i = cc11001100_hook("i", n.toDataURL("image/png"), "var-init");
            n = cc11001100_hook("n", null, "assign"), a.set(e, i), t(i);
          }, "assign"), r.onerror = cc11001100_hook("r.onerror", function (e) {
            n(e);
          }, "assign"), r.src = cc11001100_hook("r.src", e, "assign");
        }
      });
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(35), "var-init"),
    o = cc11001100_hook("o", n(38).overrides, "var-init"),
    a = cc11001100_hook("a", Object.values(o), "var-init");
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.element, "var-init"),
      n = cc11001100_hook("n", e.item, "var-init"),
      r = cc11001100_hook("r", e.value, "var-init"),
      i = cc11001100_hook("i", e.oldValue, "var-init");
    i && t.setAttribute(n.dataAttr, i), t.getAttribute(n.cssProp) ? t.setAttribute(n.cssProp, r) : t.style.setProperty(n.cssProp, r);
  }
  e.exports = cc11001100_hook("e.exports", {
    getInlineOverrideStyle: function () {
      for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < a.length; t++) {
        var n = cc11001100_hook("n", a[t], "var-init");
        e.push("[" + n.dataAttr + "] {", "  " + n.cssProp + ": var(" + n.customProp + ") !important; ", "} ");
      }
      return e.join("\n");
    },
    setInlineData: function (e, t) {
      for (var n = cc11001100_hook("n", new r(t.body).find("[style],[fill],[stop-color],[stroke],[bgcolor],[color]"), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < n.length; o++) {
        var l = cc11001100_hook("l", n[o], "var-init");
        if (!l.getAttribute("isaria")) {
          l.getAttribute("bgcolor") && (l.style["background-color"] = cc11001100_hook("l.style[\"background-color\"]", l.getAttribute("bgcolor"), "assign"));
          for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
            var u = cc11001100_hook("u", a[c], "var-init");
            if ("background" != u.cssProp || l.style.getPropertyValue("background") != l.style.getPropertyValue("background-color")) {
              var d = cc11001100_hook("d", l.getAttribute(u.dataAttr) || l.style.getPropertyValue(u.cssProp) || l.style[u.cssProp] || l.getAttribute(u.cssProp), "var-init");
              if (null != d) {
                var f = cc11001100_hook("f", i.getStyleColorValue({
                  value: cc11001100_hook("value", d, "object-key-init"),
                  theme: cc11001100_hook("theme", e, "object-key-init"),
                  cssProp: cc11001100_hook("cssProp", u.cssProp, "object-key-init")
                }), "var-init");
                f && s({
                  element: cc11001100_hook("element", l, "object-key-init"),
                  item: cc11001100_hook("item", u, "object-key-init"),
                  oldValue: cc11001100_hook("oldValue", d, "object-key-init"),
                  value: cc11001100_hook("value", f, "object-key-init")
                });
              }
            }
          }
        }
      }
    },
    end: function (e) {
      for (var t = cc11001100_hook("t", new r(e.body).find("[style],[fill],[stop-color],[stroke],[bgcolor],[color]"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) for (var i = cc11001100_hook("i", t[n], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < a.length; o++) {
        var l = cc11001100_hook("l", a[o], "var-init"),
          c = cc11001100_hook("c", i.getAttribute(l.dataAttr), "var-init");
        c && s({
          element: cc11001100_hook("element", i, "object-key-init"),
          item: cc11001100_hook("item", l, "object-key-init"),
          value: cc11001100_hook("value", c, "object-key-init")
        });
      }
    },
    overrides: cc11001100_hook("overrides", o, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(37), "var-init");
  var i = cc11001100_hook("i", {
    identity: function () {
      return [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    invertNHue: function () {
      return [[.333, -.667, -.667, 0, 1], [-.667, .333, -.667, 0, 1], [-.667, -.667, .333, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    brightness: function (e) {
      return [[e, 0, 0, 0, 0], [0, e, 0, 0, 0], [0, 0, e, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    contrast: function (e) {
      var t = cc11001100_hook("t", (1 - e) / 2, "var-init");
      return [[e, 0, 0, 0, t], [0, e, 0, 0, t], [0, 0, e, 0, t], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    sepia: function (e) {
      return [[.393 + .607 * (1 - e), .769 - .769 * (1 - e), .189 - .189 * (1 - e), 0, 0], [.349 - .349 * (1 - e), .686 + .314 * (1 - e), .168 - .168 * (1 - e), 0, 0], [.272 - .272 * (1 - e), .534 - .534 * (1 - e), .131 + .869 * (1 - e), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    grayscale: function (e) {
      return [[.2126 + .7874 * (1 - e), .7152 - .7152 * (1 - e), .0722 - .0722 * (1 - e), 0, 0], [.2126 - .2126 * (1 - e), .7152 + .2848 * (1 - e), .0722 - .0722 * (1 - e), 0, 0], [.2126 - .2126 * (1 - e), .7152 - .7152 * (1 - e), .0722 + .9278 * (1 - e), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    }
  }, "var-init");
  e.exports = cc11001100_hook("e.exports", {
    createFilterMatrix: function (e) {
      var t = cc11001100_hook("t", i.identity(), "var-init");
      return 0 !== e.sepia && (t = cc11001100_hook("t", (0, r.multiplyMatrices)(t, i.sepia(e.sepia / 100)), "assign")), 0 !== e.grayscale && (t = cc11001100_hook("t", (0, r.multiplyMatrices)(t, i.grayscale(e.grayscale / 100)), "assign")), 0 == e.contrast && (e.contrast = cc11001100_hook("e.contrast", 95, "assign")), 100 !== e.contrast && (t = cc11001100_hook("t", (0, r.multiplyMatrices)(t, i.contrast(e.contrast / 100)), "assign")), 100 !== e.brightness && (t = cc11001100_hook("t", (0, r.multiplyMatrices)(t, i.brightness(e.brightness / 100)), "assign")), 1 === e.mode && (t = cc11001100_hook("t", (0, r.multiplyMatrices)(t, i.invertNHue()), "assign")), t;
    },
    applyColorMatrix: function (e, t) {
      var n = cc11001100_hook("n", [[e[0] / 255], [e[1] / 255], [e[2] / 255], [1], [1]], "var-init"),
        i = cc11001100_hook("i", (0, r.multiplyMatrices)(t, n), "var-init");
      return [0, 1, 2].map(function (e) {
        return (0, r.clamp)(Math.round(255 * i[e][0]), 0, 255);
      });
    },
    Matrix: cc11001100_hook("Matrix", i, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(53), "var-init"),
    i = cc11001100_hook("i", "gradient".length, "var-init"),
    o = cc11001100_hook("o", "conic-", "var-init"),
    a = cc11001100_hook("a", o.length, "var-init"),
    s = cc11001100_hook("s", "radial-", "var-init"),
    l = cc11001100_hook("l", "linear-", "var-init");
  e.exports = cc11001100_hook("e.exports", {
    parseGradient: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"), c = cc11001100_hook("c", o.length, "var-init"); -1 !== (n = cc11001100_hook("n", e.indexOf("gradient", c), "assign"));) {
        var u;
        if ([l, s, o].find(function (t) {
          if (n - t.length >= 0 && e.substring(n - t.length, n) === t) return "repeating" === e.slice(n - t.length - 10, n - t.length - 1) ? (u = cc11001100_hook("u", "repeating-" + t + "gradient", "assign"), !0) : "-webkit" === e.slice(n - t.length - 8, n - t.length - 1) ? (u = cc11001100_hook("u", "-webkit-" + t + "gradient", "assign"), !0) : (u = cc11001100_hook("u", t + "gradient", "assign"), !0);
        }), !u) break;
        var d = cc11001100_hook("d", r.getParenthesesRange(e, n + i), "var-init"),
          f = cc11001100_hook("f", d.start, "var-init"),
          p = cc11001100_hook("p", d.end, "var-init"),
          h = cc11001100_hook("h", e.substring(f + 1, p - 1), "var-init");
        c = cc11001100_hook("c", p + 1 + a, "assign"), t.push({
          typeGradient: cc11001100_hook("typeGradient", u, "object-key-init"),
          match: cc11001100_hook("match", h, "object-key-init"),
          offset: cc11001100_hook("offset", u.length + 2, "object-key-init"),
          index: cc11001100_hook("index", n - u.length + i, "object-key-init"),
          hasComma: cc11001100_hook("hasComma", !0, "object-key-init")
        });
      }
      return t.length && (t[t.length - 1].hasComma = cc11001100_hook("t[t.length - 1].hasComma", !1, "assign")), t;
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(108), "var-init"),
    a = cc11001100_hook("a", n(35), "var-init"),
    s = cc11001100_hook("s", n(23), "var-init"),
    l = cc11001100_hook("l", n(2), "var-init"),
    c = cc11001100_hook("c", n(38), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    createStaticStyleOverrides: function (e, t) {
      var n,
        u,
        d = cc11001100_hook("d", s.createOrUpdateStyleAria("ariareader--user-agent", t), "var-init"),
        f = cc11001100_hook("f", "body.useOldFixed [aria-fixedOldHidden=true],.ariaHide{display:none !important;}", "var-init"),
        p = cc11001100_hook("p", ".ariaTabShow{visibility: visible !important; opacity: 1 !important; display: block !important;}", "var-init");
      p += cc11001100_hook("p", f, "assign"), void 0 !== e && l.checkSetTheme(e) ? d.textContent = cc11001100_hook("d.textContent", p + a.getModifiedUserAgentStyle(e, !1, !0) + (n = cc11001100_hook("n", c.overrides, "assign"), u = cc11001100_hook("u", [], "assign"), i.each(n, function (e, t) {
        u.push("[" + t.dataAttr + "] {", "  " + t.cssProp + ": var(" + t.customProp + ") !important; ", "} ");
      }), u.join("\n")), "assign") : (l.status ? i.IsIos() ? p += cc11001100_hook("p", ".ariafocus { outline: 2px solid #fcff00 !important;  }.ariaregion,[aria-regionActive='true'] { outline: 2px solid #ff6c00; }", "assign") : p += cc11001100_hook("p", ".ariafocus { outline: 2px solid #fcff00; transition: outline 250ms; }.ariaregion,[aria-regionActive='true'] { outline: 2px solid #ff6c00; transition: outline 250ms; }", "assign") : p = cc11001100_hook("p", ".ariafocus{outline:none;}" + f, "assign"), d.textContent = cc11001100_hook("d.textContent", p, "assign")), t.querySelector("head").insertBefore(d, t.querySelector("head").firstChild), e && function (e, t) {
        if (new r(e).find(".ariareader--override").remove(), !l.checkSetTheme(t)) return;
        for (var n = cc11001100_hook("n", e.styleSheets, "var-init"), a = cc11001100_hook("a", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < n.length; c++) {
          var u = cc11001100_hook("u", n[c], "var-init");
          if (!u.ownerNode.getAttribute("isaria")) {
            var d = cc11001100_hook("d", u.ownerNode.id, "var-init");
            d || (d = cc11001100_hook("d", i.genID(), "assign"), u.ownerNode.setAttribute("id", d));
            var f = cc11001100_hook("f", s.createOrUpdateStyleAria("ariareader--override", e, u.ownerNode.id), "var-init");
            f.disabled = cc11001100_hook("f.disabled", !0, "assign"), u.ownerNode.parentNode.insertBefore(f, u.ownerNode.nextSibling), u.ownerNode.getAttribute("media") && f.setAttribute("media", u.ownerNode.getAttribute("media")), t ? (o.getModifiedCSSStyleSheetStyle(u, t, e, f), a.push(f)) : f.textContent = cc11001100_hook("f.textContent", "", "assign");
          }
        }
        new r(e).find(".ariareader--override").prop("disabled", !1);
      }(t, e);
    },
    createOverrideText: function (e) {
      var t = cc11001100_hook("t", s.createOrUpdateStyleAria("ariareader--text", e), "var-init");
      t.textContent = cc11001100_hook("t.textContent", ' :not(pre, pre *, code, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon){  font-family: monospace !important; }', "assign"), e.querySelector("head").insertBefore(t, e.querySelector("head").firstChild);
    },
    createOverrideBgColor: function (e, t) {
      var n = cc11001100_hook("n", s.createOrUpdateStyleAria("ariareader--invert", t), "var-init"),
        r = cc11001100_hook("r", "[role='logo'],[aria-imgfilter]", "var-init");
      l.elementFilter && (r += cc11001100_hook("r", "," + l.elementFilter, "assign")), n.disabled = cc11001100_hook("n.disabled", !0, "assign"), n.textContent = cc11001100_hook("n.textContent", r + "{filter:" + a.getCSSFilterValue(e) + "}", "assign"), t.querySelector("head").insertBefore(n, t.querySelector("head").firstChild);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(35), "var-init"),
    i = cc11001100_hook("i", n(23), "var-init");
  n(36);
  function o(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var o = cc11001100_hook("o", e.ownerNode.href, "var-init"),
      s = cc11001100_hook("s", i.getCssRule(e), "var-init");
    if (s && 0 != s.length) {
      for (var l = cc11001100_hook("l", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < s.length; c++) {
        var u = cc11001100_hook("u", a({
          cssRule: cc11001100_hook("cssRule", s[c], "object-key-init"),
          theme: cc11001100_hook("theme", t, "object-key-init"),
          cssUrl: cc11001100_hook("cssUrl", o, "object-key-init")
        }), "var-init");
        u && l.push(u);
      }
      if (l.length > 0) {
        var d = cc11001100_hook("d", l.join(""), "var-init");
        d.indexOf("url") > 0 && (d = cc11001100_hook("d", i.replaceCSSImports(l.join(""), o), "assign")), r.textContent = cc11001100_hook("r.textContent", d, "assign");
      }
    }
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.cssRule, "var-init"),
      n = cc11001100_hook("n", e.theme, "var-init"),
      o = cc11001100_hook("o", (e.cssUrl, []), "var-init"),
      a = cc11001100_hook("a", [], "var-init");
    t.type == CSSRule.MEDIA_RULE ? o = cc11001100_hook("o", t.cssRules, "assign") : o.push(t);
    for (var s = cc11001100_hook("s", 0, "var-init"); s < o.length; s++) {
      var l = cc11001100_hook("l", o[s], "var-init"),
        c = cc11001100_hook("c", [], "var-init");
      if (l && l.style && l.style.length) {
        for (var u = cc11001100_hook("u", 0, "var-init"); u < l.style.length; u++) {
          var d = cc11001100_hook("d", l.style[u], "var-init"),
            f = cc11001100_hook("f", l.style[d] || l.style.getPropertyValue(d), "var-init");
          if (!(f.indexOf("var") > -1) && "string" == typeof f) {
            var p = cc11001100_hook("p", "important" == l.style.getPropertyPriority(d) ? "!important" : "", "var-init");
            if (f.indexOf("url") > -1 && i.getCSSURLValue(f).length > 1) {
              "background-image" == d && "initial" != l.style["background-color"] && f.indexOf(".svg") < 0 && f.indexOf("data:") < 0 && c.push("background-image:none " + p + ";");
              continue;
            }
            if (f.indexOf("transparent") < 0) {
              var h = cc11001100_hook("h", r.getStyleColorValue({
                value: cc11001100_hook("value", f.split("!")[0], "object-key-init"),
                cssProp: cc11001100_hook("cssProp", d, "object-key-init"),
                theme: cc11001100_hook("theme", n, "object-key-init")
              }), "var-init");
              h && c.push(d + ":" + h + " " + p + ";");
            }
          }
        }
        (c = cc11001100_hook("c", c.filter(function (e) {
          return e && "" != e;
        }), "assign")).length > 0 && (a.push(l.selectorText + "{"), a.push(c.join(";")), a.push("}"));
      }
    }
    if (0 != a.length) return t.type == CSSRule.MEDIA_RULE && (a.unshift("@media " + t.media.mediaText + "{"), a.push("}")), a.join("");
  }
  e.exports = cc11001100_hook("e.exports", {
    getModifiedCSSStyleSheetStyle: cc11001100_hook("getModifiedCSSStyleSheetStyle", o, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", n(22), "var-init"),
    o = cc11001100_hook("o", n(54), "var-init"),
    a = cc11001100_hook("a", n(4), "var-init"),
    s = cc11001100_hook("s", {
      background: cc11001100_hook("background", "#181a1b", "object-key-init"),
      text: cc11001100_hook("text", "#e8e6e3", "object-key-init")
    }, "var-init"),
    l = cc11001100_hook("l", {
      brightness: cc11001100_hook("brightness", 100, "object-key-init"),
      contrast: cc11001100_hook("contrast", 100, "object-key-init"),
      grayscale: cc11001100_hook("grayscale", 0, "object-key-init"),
      sepia: cc11001100_hook("sepia", 0, "object-key-init"),
      textStroke: cc11001100_hook("textStroke", 0, "object-key-init"),
      scrollbarColor: cc11001100_hook("scrollbarColor", o.isMacOS ? "" : "auto", "object-key-init"),
      selectionColor: cc11001100_hook("selectionColor", "auto", "object-key-init"),
      styleSystemControls: cc11001100_hook("styleSystemControls", !o.isCSSColorSchemePropSupported, "object-key-init"),
      backgroundColor: cc11001100_hook("backgroundColor", s.background, "object-key-init"),
      color: cc11001100_hook("color", s.text, "object-key-init")
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", {
    getTheme: function () {
      if (r.status) {
        var e = cc11001100_hook("e", r.Theme, "var-init");
        return e && (e.mode = cc11001100_hook("e.mode", a.mode(), "assign"), e.brightness = cc11001100_hook("e.brightness", a.brightness(), "assign"), e.grayscale = cc11001100_hook("e.grayscale", a.grayscale(), "assign"), e.sepia = cc11001100_hook("e.sepia", a.sepia(), "assign"), e.contrast = cc11001100_hook("e.contrast", a.contrast(), "assign"), e.color && "" != e.color || (e.color = cc11001100_hook("e.color", "black", "assign")), e.backgroundColor && "" != e.backgroundColor || (e.backgroundColor = cc11001100_hook("e.backgroundColor", "white", "assign"))), e ? i(l, e) : void 0;
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(2), "var-init"),
    o = cc11001100_hook("o", n(33), "var-init"),
    a = cc11001100_hook("a", n(111), "var-init");
  n(112);
  var s = cc11001100_hook("s", n(42), "var-init"),
    l = cc11001100_hook("l", n(114), "var-init"),
    c = cc11001100_hook("c", n(7), "var-init"),
    u = cc11001100_hook("u", n(0), "var-init"),
    d = cc11001100_hook("d", n(115), "var-init"),
    f = cc11001100_hook("f", n(5), "var-init"),
    p = cc11001100_hook("p", n(20), "var-init");
  var h = cc11001100_hook("h", null, "var-init");
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (window.ariaFirstOpen = cc11001100_hook("window.ariaFirstOpen", !1, "assign"), !(new r(e.target).aria.skipall || (window.canRead = cc11001100_hook("window.canRead", !0, "assign"), c.viewDocument(e) != document && s.keydown(e) || 2 == i.readtype))) if (function (e) {
      var t = cc11001100_hook("t", new r(".ariaBigCenterScale"), "var-init");
      if (0 == t.length) return;
      if (27 == (e.keyCode || e.which || e.charCode)) {
        t.remove();
        var n = cc11001100_hook("n", new r("[aria-fromClone]"), "var-init");
        return f.stop(), n.focus(), n.removeAttr("aria-fromClone"), !0;
      }
    }(e)) setTimeout(function () {
      e.keyCode = cc11001100_hook("e.keyCode", 40, "assign");
    }, 350);else if (!d.showImg(e) && !d.showQrcode(e)) {
      if (h = cc11001100_hook("h", e.target, "assign"), !1, o.doEventEnter(e)) return !0, u.stopBubble(), void u.stopDefault();
      if (o.checkPopupTab(e, h)) return u.stopBubble(), u.stopDefault(), !1;
      if (o.doEventESC(e)) return u.stopBubble(), void u.stopDefault();
      if (!l.doEvent(e)) {
        var t = cc11001100_hook("t", e.view.document, "var-init"),
          n = cc11001100_hook("n", e.keyCode || e.which || e.charCode, "var-init"),
          a = cc11001100_hook("a", new r(e.target), "var-init");
        if (!c.breakEvents(a, e)) {
          if (9 == n && p.checkDialogShow(), 13 == n) {
            if ("a" == a.attr("role")) return void (1 == a.find("a").length ? a.find("a").click() : a.click());
            if (1 == a.find(" [type =button], [role =button]").length) return void a.find("[type=button],[role=button]").click();
          }
          window.preAcitveElem = cc11001100_hook("window.preAcitveElem", t.activeElement, "assign"), 27 == n && u.triggerEvent(document.body, "mouseover");
        }
      }
    }
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (a.doEventTab(e)) return h && h.focus(), !1;
    if (2 != i.readtype) {
      var t = cc11001100_hook("t", new r(e.target), "var-init");
      c.breakEvents(t, e) || h != e.target && f.play(t);
    }
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new r(e).on("keydown", "*", g), new r(e).on("keyup", "*", m);
    },
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new r(e).off("keydown", "*", g), new r(e).off("keyup", "*", m);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(20), "var-init"),
    a = cc11001100_hook("a", n(17), "var-init"),
    s = cc11001100_hook("s", n(18), "var-init");
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", o.eventKeyCode(e), "var-init"),
      n = cc11001100_hook("n", !0, "var-init");
    if ("dialogclose" == new r(e.target).aria.action && 13 == t && (n = cc11001100_hook("n", !1, "assign")), !n || o.checkKeyCode(e, o.keyCodeSettings.dialogClose)) {
      var i = cc11001100_hook("i", o.checkDialogShow(), "var-init");
      if (i) if (i.closest(".aria-container").length > 0) new r(".icon-close").click();else {
        var a = cc11001100_hook("a", n ? i.find("[aria-action='dialogclose']") : new r(e.target), "var-init");
        a.length > 0 ? a.click() : (i.css("display", "none"), i.attr("tabindex", -1));
      }
    }
  }
  a.registerEvent(s.globalListen, l, 0), e.exports = cc11001100_hook("e.exports", {
    doEventTab: function (e) {
      if (!o.checkKeyCode(e, 9)) return !1;
      var t = cc11001100_hook("t", !1, "var-init"),
        n = cc11001100_hook("n", o.checkDialogShow(), "var-init");
      if (!n) return !1;
      var a = cc11001100_hook("a", new r(e.target || e.currentTarget), "var-init");
      return a.aria.isDialog || (t = cc11001100_hook("t", !0, "assign")), a.aria.dialog && a.aria.dialog.firstNode != n.firstNode && (t = cc11001100_hook("t", !0, "assign")), t ? (i.stopBubble(), i.stopDefault(), !0) : void 0;
    },
    KeyEsc: cc11001100_hook("KeyEsc", l, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(17), "var-init"),
    i = cc11001100_hook("i", n(18), "var-init"),
    o = cc11001100_hook("o", n(20), "var-init"),
    a = cc11001100_hook("a", n(1), "var-init"),
    s = cc11001100_hook("s", n(13), "var-init"),
    l = cc11001100_hook("l", n(7), "var-init");
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (o.checkKeyCode(e, o.keyCodeSettings.changeRegion.next)) {
      var t = cc11001100_hook("t", new a(e.target, l.viewDocument(e)), "var-init"),
        n = cc11001100_hook("n", new a(t.aria.regionN), "var-init");
      0 != n.length && (s.setClass(n, l.viewDocument(e)), n.focus());
    }
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (o.checkKeyCode(e, o.keyCodeSettings.changeRegion.pre)) {
      var t = cc11001100_hook("t", new a(e.target, l.viewDocument(e)), "var-init"),
        n = cc11001100_hook("n", new a(t.aria.regionP), "var-init");
      0 != n.length && (s.setClass(n, l.viewDocument(e)), n.focus());
    }
  }
  r.registerEvent(i.globalListen, c, 0), r.registerEvent(i.globalListen, u, 0), e.exports = cc11001100_hook("e.exports", {
    goNext: cc11001100_hook("goNext", c, "object-key-init"),
    goPre: cc11001100_hook("goPre", u, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(0), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    check: function () {
      return !0;
    },
    browserIE: function () {
      return "IE" == r.browser.getBrowserInfo().browser;
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(20), "var-init"),
    o = cc11001100_hook("o", n(0), "var-init");
  n(7);
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", null, "var-init");
    if ("true" == e.ariaAttr("aria-popup") && (t = cc11001100_hook("t", e.find("a,select,input,[role]"), "assign")), null != t && 0 != t.length || (t = cc11001100_hook("t", e.closest('[aria-popup="true"]').find("a,select,input,[role]"), "assign")), null != t && 0 != t.length || (t = cc11001100_hook("t", new r(e.parent().child()), "assign")), 1 == t.length) {
      t = cc11001100_hook("t", new r(e.parent().parent().child()), "assign"), e = cc11001100_hook("e", new r(e.parent()), "assign");
    }
    for (var n = cc11001100_hook("n", t.nodeList.length - 1, "var-init"); n >= 0; n--) {
      null == t.nodeList[n].offsetParent && t.nodeList.splice(n, 1);
    }
    return t;
  }
  e.exports = cc11001100_hook("e.exports", {
    doEvent: function (e) {
      var t = cc11001100_hook("t", new r(e.target), "var-init");
      if ("SELECT" != t.firstNode.nodeName) {
        var n = cc11001100_hook("n", e.ctrlKey, "var-init"),
          s = cc11001100_hook("s", e.shfitKey, "var-init"),
          l = cc11001100_hook("l", e.altKey, "var-init");
        if (!(n || s || l)) switch (i.eventKeyCode(e)) {
          case 40:
          case 39:
            return o.stopBubble(e), o.stopDefault(e), function (e, t) {
              var n = cc11001100_hook("n", !1, "var-init"),
                i = cc11001100_hook("i", a(e), "var-init"),
                s = cc11001100_hook("s", e.index(i), "var-init");
              s == i.length - 1 ? s = cc11001100_hook("s", 0, "assign") : s += cc11001100_hook("s", 1, "assign");
              var l = cc11001100_hook("l", i.nodeList[s], "var-init");
              if (n) {
                var c = cc11001100_hook("c", new r(l).child(), "var-init");
                c.length > 0 && (c = cc11001100_hook("c", c[0], "assign"), o.triggerEvent(l, "mouseover"), c.focus());
              } else l.setAttribute("tabindex", 0), l.focus(), o.triggerEvent(l, "mouseover");
            }(t), !0;
          case 38:
          case 37:
            return o.stopBubble(e), o.stopDefault(e), function (e, t) {
              var n = cc11001100_hook("n", !1, "var-init"),
                i = cc11001100_hook("i", a(e), "var-init");
              if (0 == i.length) return;
              var s = cc11001100_hook("s", e.index(i), "var-init");
              s <= 0 ? s = cc11001100_hook("s", i.length - 1, "assign") : s -= cc11001100_hook("s", 1, "assign");
              var l = cc11001100_hook("l", i.nodeList[s], "var-init");
              if (n) {
                var c = cc11001100_hook("c", new r(l).child(), "var-init");
                c.length > 0 && (c = cc11001100_hook("c", c[0], "assign"), o.triggerEvent(l, "mouseover"), c.focus());
              } else l.setAttribute("tabindex", 0), l.focus(), o.triggerEvent(l, "mouseover");
            }(t), !0;
        }
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r,
    i,
    o = cc11001100_hook("o", n(1), "var-init"),
    a = cc11001100_hook("a", (n(0), n(40)), "var-init"),
    s = cc11001100_hook("s", n(3), "var-init"),
    l = cc11001100_hook("l", n(7), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    showImg: function (e) {
      if (a.checkKeyCode(e, a.keyCodeSettings.showImg)) {
        l.removeCenterScale();
        var t = cc11001100_hook("t", new o("img").nodeList, "var-init");
        if (s.getAll(document, function (e) {
          var n = cc11001100_hook("n", new o(e).find("img").nodeList, "var-init");
          n.length > 0 && t.concat(n);
        }), 0 == t.length) return !0;
        for (var n = cc11001100_hook("n", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) {
          var c = cc11001100_hook("c", t[i], "var-init"),
            u = cc11001100_hook("u", new o(c), "var-init"),
            d = cc11001100_hook("d", u.width(), "var-init"),
            f = cc11001100_hook("f", u.height(), "var-init");
          d > 200 && f > 100 && c.src && n.push(c);
        }
        if (0 == n.length) return !0;
        i = cc11001100_hook("i", 0, "assign");
        return r && (i = cc11001100_hook("i", [].indexOf.call(n, r) + 1, "assign")) > n.length - 1 && (i = cc11001100_hook("i", 0, "assign")), r = cc11001100_hook("r", n[i], "assign"), l.CenterScale(new o(n[i]), 1.2), !0;
      }
    },
    showQrcode: function (e) {
      if (a.checkKeyCode(e, a.keyCodeSettings.showQrcode)) {
        l.removeCenterScale();
        var t = cc11001100_hook("t", new o("[role='qrcode']").nodeList, "var-init");
        if (s.getAll(document, function (e) {
          var n = cc11001100_hook("n", new o(e).find("[role='qrcode']").nodeList, "var-init");
          n.length > 0 && t.concat(n);
        }), 0 == t.length) return !0;
        for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) {
          var c = cc11001100_hook("c", t[r], "var-init");
          n.push(c);
        }
        if (0 == n.length) return !0;
        r = cc11001100_hook("r", 0, "assign");
        return i && (r = cc11001100_hook("r", [].indexOf.call(n, i) + 1, "assign")) > n.length - 1 && (r = cc11001100_hook("r", 0, "assign")), i = cc11001100_hook("i", n[r], "assign"), l.CenterScale(new o(n[r]), 2), !0;
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(2), "var-init"),
    o = cc11001100_hook("o", n(5), "var-init");
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (2 != i.readtype) {
      var t = cc11001100_hook("t", new r(e.target), "var-init");
      o.play(t);
    }
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new r(e).on("change", "*", a);
    },
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new r(e).off("change", "*", a);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(5), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init"),
    a = cc11001100_hook("a", n(7), "var-init"),
    s = cc11001100_hook("s", n(56), "var-init"),
    l = cc11001100_hook("l", new Date().getTime(), "var-init"),
    c = cc11001100_hook("c", null, "var-init"),
    u = cc11001100_hook("u", null, "var-init");
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    u && (clearTimeout(u), u = cc11001100_hook("u", null, "assign"));
  }
  var f,
    p = cc11001100_hook("p", {
      screenX: cc11001100_hook("screenX", 0, "object-key-init"),
      screenY: cc11001100_hook("screenY", 0, "object-key-init")
    }, "var-init");
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (o.mouseten && s.listenMouseTen(e), 2 != o.readtype && !new r(e.target).aria.skipall && !(l + 20 > new Date().getTime() || (l = cc11001100_hook("l", new Date().getTime(), "assign"), a.breakEventsFirst(e)))) {
      var t = cc11001100_hook("t", new r(e.target), "var-init");
      if (0 != t.length) {
        if (!1, "BODY" == e.target.nodeName) return window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", document.body, "assign"), void i.play(document.body.title);
        a.breakEvents(t, e) || (u && (clearTimeout(u), u = cc11001100_hook("u", null, "assign")), u = cc11001100_hook("u", setTimeout(function () {
          if (a.consolLog("mouseover延迟开始", !0), p.screenX == e.screenX && p.screenY == e.screenY) {
            if (f && e == f) return;
            var n = cc11001100_hook("n", a.realPlayElem(t), "var-init");
            if (n && n.length > 0) {
              if (c && c.firstNode == n.firstNode) return;
              c = cc11001100_hook("c", n, "assign"), f = cc11001100_hook("f", e, "assign"), window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", n, "assign"), i.play(n);
            }
          }
          setTimeout(function () {
            f = cc11001100_hook("f", null, "assign");
          }, 500);
        }, 100), "assign"), p.screenX = cc11001100_hook("p.screenX", e.screenX, "assign"), p.screenY = cc11001100_hook("p.screenY", e.screenY, "assign"));
      }
    }
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new r(e).on("mousemove", "*:not([aria-hidden='true'])", h), new r(e).on("mouseout", "*:not([aria-hidden='true'])", d);
    },
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new r(e).off("mousemove", "*:not([aria-hidden='true'])", h), new r(e).off("mouseout", "*:not([aria-hidden='true'])", d);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(5), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init"),
    a = cc11001100_hook("a", n(7), "var-init");
  var s = cc11001100_hook("s", !0, "var-init");
  function l() {
    s = cc11001100_hook("s", !1, "assign");
  }
  var c = cc11001100_hook("c", {
    x: cc11001100_hook("x", 0, "object-key-init"),
    y: cc11001100_hook("y", 0, "object-key-init")
  }, "var-init");
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (2 == o.readtype) {
      var t = cc11001100_hook("t", new r(e.target), "var-init");
      a.breakEventsFirst(e) || a.breakEvents(t, e) || function (e, t) {
        if (2 == o.readtype) {
          if (0 == t.length) return;
          if ("true" == t.ariaAttr("skipall") || t.closest('[aria-skipall="true"]').length > 0) return;
          return c = cc11001100_hook("c", {
            x: cc11001100_hook("x", e.clientX, "object-key-init"),
            y: cc11001100_hook("y", e.clientY, "object-key-init")
          }, "assign"), s = cc11001100_hook("s", !0, "assign"), setTimeout(function () {
            new r(".ariafocus").removeClass("ariafocus"), e.clientX == c.x && e.clientY == c.y && s && (window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", e.target, "assign"), i.play(e.target), setTimeout(function () {}, 2e4));
          }, 4e3), !0;
        }
      }(e, t);
    }
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new r(e).on("mousemove", u), e == document && document.body.addEventListener("mouseout", l);
    },
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), new r(e).off("mousemove", u), e == document && document.body.removeEventListener("mouseout", l);
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(25), "var-init"),
    i = cc11001100_hook("i", n(6), "var-init");
  function o() {
    window.addEventListener("resize", l);
  }
  function a() {
    r.end(), window.removeEventListener("resize", l);
  }
  var s = cc11001100_hook("s", null, "var-init");
  function l() {
    a(), s && clearTimeout(s), s = cc11001100_hook("s", setTimeout(function () {
      i.initResize(), o();
    }, 100), "assign");
  }
  e.exports = cc11001100_hook("e.exports", {
    start: cc11001100_hook("start", o, "object-key-init"),
    end: cc11001100_hook("end", a, "object-key-init"),
    doEvent: cc11001100_hook("doEvent", l, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(2), "var-init"),
    i = cc11001100_hook("i", n(6), "var-init"),
    o = cc11001100_hook("o", n(5), "var-init"),
    a = cc11001100_hook("a", {
      get voice() {
        return r.voice.enable;
      },
      set voice(e) {
        e || o.stop(), r.voice.enable = cc11001100_hook("r.voice.enable", e, "assign");
      },
      get voiceRate() {
        return r.voice.rate;
      },
      set voiceRate(e) {
        r.voice.rate = cc11001100_hook("r.voice.rate", e, "assign");
      },
      get scale() {
        return r.scale;
      },
      set scale(e) {
        r.scale = cc11001100_hook("r.scale", e, "assign"), i.setBodyTran();
      },
      get themes() {
        return r.Themes;
      },
      get theme() {
        return r.Theme;
      },
      set theme(e) {
        r.Theme = cc11001100_hook("r.Theme", e, "assign"), i.setSettingTheme();
      },
      readSrc: function (e) {
        if (void 0 === e) return r.status && r.readsrc;
        r.readsrc = cc11001100_hook("r.readsrc", e, "assign"), r.status = cc11001100_hook("r.status", e, "assign"), e && (r.voice.enable = cc11001100_hook("r.voice.enable", !1, "assign"), r.scale = cc11001100_hook("r.scale", 1, "assign"), o.stop());
      },
      zzms: function (e) {
        if (void 0 === e) return r.status && !r.readsrc;
        e && (r.readsrc = cc11001100_hook("r.readsrc", !1, "assign"), r.voice.enable = cc11001100_hook("r.voice.enable", !0, "assign"));
      }
    }, "var-init");
  e.exports = cc11001100_hook("e.exports", a, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(122), "var-init"),
    i = cc11001100_hook("i", n(43), "var-init"),
    o = cc11001100_hook("o", n(3), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    start: function () {
      return new Promise(function (e, t) {
        r.start().then(function () {
          i.start(document), o.getAll(document, function (e) {
            i.start(e);
          }), e();
        });
      });
    },
    end: function () {
      r.end(), i.end(document), o.getAll(document, function (e) {
        i.end(e);
      });
    },
    startNobar: function () {
      i.start(document), o.getAll(document, function (e) {
        i.start(e);
      });
    },
    endNobar: function () {
      i.end(document), o.getAll(document, function (e) {
        i.end(e);
      });
    }
  }, "assign");
}, function (e, t, n) {
  var r,
    i,
    o = cc11001100_hook("o", n(16), "var-init"),
    a = cc11001100_hook("a", n(1), "var-init"),
    s = cc11001100_hook("s", n(0), "var-init"),
    l = cc11001100_hook("l", n(2), "var-init"),
    c = cc11001100_hook("c", n(20), "var-init"),
    u = cc11001100_hook("u", n(17), "var-init"),
    d = cc11001100_hook("d", n(18), "var-init"),
    f = cc11001100_hook("f", n(5), "var-init"),
    p = cc11001100_hook("p", n(43), "var-init"),
    h = cc11001100_hook("h", n(6), "var-init"),
    g = cc11001100_hook("g", n(13), "var-init"),
    m = cc11001100_hook("m", l.hostEnable, "var-init"),
    v = cc11001100_hook("v", n(126), "var-init"),
    b = cc11001100_hook("b", n(47), "var-init"),
    y = cc11001100_hook("y", n(24), "var-init"),
    w = cc11001100_hook("w", n(127), "var-init"),
    x = cc11001100_hook("x", n(128), "var-init"),
    S = cc11001100_hook("S", n(25), "var-init"),
    C = cc11001100_hook("C", n(3), "var-init"),
    k = cc11001100_hook("k", n(55), "var-init"),
    T = cc11001100_hook("T", n(34), "var-init"),
    A = cc11001100_hook("A", n(129), "var-init"),
    E = cc11001100_hook("E", !1, "var-init");
  function O(e) {
    cc11001100_hook("e", e, "function-parameter");
    oe(new a(this).attr("regiontype"));
  }
  function _(e) {
    cc11001100_hook("e", e, "function-parameter");
    window.open(l.road + "public/instructions_" + (l.defaultLanguage || "zh-CN") + ".html?appid=" + window.ariaAppId);
  }
  function F() {
    l.py ? new a("#accscreen-py").attr("title", "拼音已启用") : new a("#accscreen-py").attr("title", "拼音已关闭");
  }
  function N(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.py, "var-init");
    e && (t = cc11001100_hook("t", !t, "assign"), l.py = cc11001100_hook("l.py", t, "assign"), t ? f.play("拼音已启用") : f.play("拼音已关闭")), F();
  }
  function M(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.big5, "var-init"),
      n = cc11001100_hook("n", new a("#accscreen-jt"), "var-init");
    t ? (n.html("简体"), n.attr("title", "繁体已启用"), e && f.play("繁体已启用")) : (n.html("繁体"), n.attr("title", "简体已启用"), e && f.play("简体已启用"));
  }
  function I(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.big5, "var-init");
    e && (t = cc11001100_hook("t", !t, "assign"), l.big5 = cc11001100_hook("l.big5", t, "assign"), M(e));
  }
  function P(e) {
    cc11001100_hook("e", e, "function-parameter");
    new a("#ariaToptoolbar").find("*").addClass("ariaskiptheme"), new a("#accscreen").find("*").addClass("ariaskiptheme"), y.setHasOldFixed(), (l.useOldFixed && l.showFixBtnInToolBar || null != window.ariaDev) && (new a(".ariaOldFixedBar").removeClass("ariaHide"), new a("#accrole").addClass("showFixBtnInToolBar")), function () {
      new a("#acccont-logo-img").css("background-image", "url(" + l.themeRoad + "/images/" + l.defaultLanguage + (l.readsrc ? 2 : 1) + ".png?v=" + decodeURI(document.location.hostname) + ")");
      var e = cc11001100_hook("e", l.scale, "var-init");
      1 != e && s.isFF() && A.start();
      new a(".ariazoomb").attr("title", r.curZoomPage.replace("{0}", e.toFixed(1)) + "," + r.airafontScaleTextToBig), new a(".ariazooms").attr("title", r.curZoomPage.replace("{0}", e.toFixed(1)) + "," + r.airafontScaleTextToSmall), new a(".ariaTopsubzoomb").html(r.ariaTopsubzoomb), new a(".ariaTopsubzooms").html(r.ariaTopsubzooms), B(), new a(".ariathemebtn").attr("title", r.ariathemebtn + (l.Theme && l.Theme.displayName ? l.Theme.displayName : "无")), new a(".ariaTopsubtheme").html(r.ariaTopsubtheme), new a(".ariaReadScreen").attr("title", r.ariaReadScreen), new a(".ariaTopsubReadScreen").html(r.ariaTopsubReadScreen), new a(".ariaTopsubVoice").html(r.ariaTopsubVoice), H(), new a(".ariaTopsubVoiceRate").html(r.ariaTopsubVoiceRate), K(), new a(".ariaTopsubReadtype").html(r.ariaTopsubReadtype), U(), new a(".ariaTopsubmouseb ").html(r.ariaTopsubmouseb), new a(".ariaTopsubten ").html(r.ariaTopsubten), z(), new a(".ariareset").attr("title", r.ariareset), new a(".ariaTopsubreset").html(r.ariaTopsubreset), new a(".ariatopfixedtext").attr("title", r.ariatopfixedtext), new a(".ariaTopsubtopfixed").html(r.ariaTopsubtopfixed), new a(".ariaTopsubigsrc").html(r.ariaTopsubigsrc), new a(".ariabigsrc").attr("title", l.bigsrc ? r.ariabigsrcopen : r.ariabigsrcclose), new a(".ariaTopsubtopexit").html(r.ariaTopsubtopexit), new a(".ariaexit").attr("title", r.ariaexit), new a(".ariaacchelpbook").attr("title", r.ariaacchelpbook), new a(".ariaTopacchelpbook").html(r.ariaTopacchelpbook), F(), M(), new a("#acctip").ariaAttr("fontsize", "huge");
    }(), ee(e), re(), Q(null), Y(null), X(null), te(null), W(null), D(null), G(), setTimeout(function () {
      j(), L();
    }, 500), i = cc11001100_hook("i", setInterval(j, 1e3), "assign");
  }
  function j() {
    for (var e = cc11001100_hook("e", b.getAll(), "var-init"), t = cc11001100_hook("t", new a(".onlineread"), "var-init"), n = cc11001100_hook("n", new a(".readsrc").length < 2, "var-init"), i = cc11001100_hook("i", 1, "var-init"); i < 7; i++) {
      var o = cc11001100_hook("o", e[i] ? e[i].length : 0, "var-init");
      if (n) {
        var s = cc11001100_hook("s", '<div id="acccross' + i + '" regiontype="' + i + '" ' + (0 == o ? "disable=true" : "") + '  class="readsrc ariaregionbutton acccross' + i + " " + (0 == o ? "disable" : "") + '">', "var-init"),
          l = cc11001100_hook("l", r["regiontype" + i], "var-init");
        l || (l = cc11001100_hook("l", r["undefined"], "assign")), s += cc11001100_hook("s", ' <arialabel class="ariatitle "><arialabel class="regionname" role="button">' + l + '</arialabel><arialabel role="button" class="regioncount ariaicon-regioncount' + i + '" aria-label="' + l + o + '"><cc>(</cc><t id="regioncount' + i + '">' + o + "</t><cc>)</cc></arialabel></arialabel>", "assign"), s += cc11001100_hook("s", '<arialabel class="desc">ALT+' + i + "</arialabel>", "assign"), s += cc11001100_hook("s", "</div>", "assign"), t.append(s);
      } else {
        o != parseInt(new a("#regioncount" + i).html()) && (new a("#regioncount" + i).html(o), o > 0 ? new a(".acccross" + i).removeClass("disable") : new a(".acccross" + i).addClass("disable"));
      }
    }
    new a(".ariaregionbutton").off("click", O), new a(".ariaregionbutton").click(O);
  }
  function L(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.readsrc, "var-init");
    void 0 !== e && (l.readsrc = cc11001100_hook("l.readsrc", !t, "assign"), t = cc11001100_hook("t", !t, "assign")), t ? (new a(".notonlineread").addClass("ariaHide"), new a(".onlineread").removeClass("ariaHide"), te()) : (new a(".notonlineread").removeClass("ariaHide"), new a(".onlineread").addClass("ariaHide")), v.start(), f.play(new a("#ariaTipText")), new a("#acccont-logo-img").css("background-image", "url(" + l.themeRoad + "/images/" + l.defaultLanguage + (l.readsrc ? 2 : 1) + ".png?v=" + decodeURI(document.location.hostname) + ")");
  }
  function R(e) {
    cc11001100_hook("e", e, "function-parameter");
    clearInterval(i), i = cc11001100_hook("i", null, "assign"), l.reset(), P(), J(), p.setSettingTheme(), window.canRead = cc11001100_hook("window.canRead", !0, "assign"), h.resetBodyTran(), f.play(r.ariaresetsuccess);
  }
  function B() {
    var e = cc11001100_hook("e", "ariaOldFixedBtn0", "var-init");
    l.oldFixedStatus ? (new a(".ariaOldFixed").attr("title", r.ariaOldFixedOpen), new a(".ariaOldFixed").addClass("fixedSelect"), e = cc11001100_hook("e", "ariaOldFixedBtn1", "assign")) : (new a(".ariaOldFixed").attr("title", r.ariaOldFixedClose), new a(".ariaOldFixed").removeClass("fixedSelect")), new a(".ariaOldFixedTitile").html(r[e]);
  }
  function D(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.oldFixedStatus, "var-init");
    l.pageDisOldFixed ? y.removeOldfixed() : (e && (t = cc11001100_hook("t", !t, "assign"), l.oldFixedStatus = cc11001100_hook("l.oldFixedStatus", t, "assign"), t ? (l.scale = cc11001100_hook("l.scale", 1, "assign"), f.play(r.ariaOldFixedOpen)) : f.play(r.ariaOldFixedClose)), t ? (S.start(), h.setSettingTheme(), y.start(), k.starAll()) : (S.end(), y.end(), k.endAll(), T.endAll()), B());
  }
  function z() {
    l.mousemode ? new a(".ariamouseb").attr("title", r.ariamousebopen) : new a(".ariamouseb").attr("title", r.ariamousebclose), l.mouseten ? new a(".ariamouseten").attr("title", r.ariamousetenopen) : new a(".ariamouseten").attr("title", r.ariamousetenclose);
  }
  function U() {
    var e = cc11001100_hook("e", 2 == l.readtype ? "2" : "1", "var-init"),
      t = cc11001100_hook("t", r["ariaReadtype" + e], "var-init");
    new a(".ariaReadtype").attr("title", t);
  }
  function H(e) {
    cc11001100_hook("e", e, "function-parameter");
    e || l.voice.enable ? new a(".ariavoice").attr("title", r.openvoice) : new a(".ariavoice").attr("title", r.closevoice);
  }
  function K() {
    var e = cc11001100_hook("e", l.voice.rate, "var-init");
    new a(".ariaVoiceRate").attr("title", r.ariaVoiceRate.replace("{0}", e));
  }
  function q() {
    u.execEvent(d.globalEnd);
  }
  function W(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.readtype, "var-init"),
      n = cc11001100_hook("n", new a(".ariaReadtype"), "var-init");
    e && (f.play(r["ariaReadtype" + (2 == l.readtype ? "1" : "2")]), 2 == t ? (l.readtype = cc11001100_hook("l.readtype", 1, "assign"), t = cc11001100_hook("t", 1, "assign")) : (l.readtype = cc11001100_hook("l.readtype", 2, "assign"), t = cc11001100_hook("t", 2, "assign"))), 2 == t ? (n.removeClass("ariaicon-finger_reading"), n.addClass("ariaicon-continuous_reading")) : (l.readtype = cc11001100_hook("l.readtype", 1, "assign"), n.addClass("ariaicon-finger_reading"), n.removeClass("ariaicon-continuous_reading")), U();
  }
  function V(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.highlight.enable, "var-init");
    e ? t ? (l.highlight.enable = cc11001100_hook("l.highlight.enable", !1, "assign"), new a(".ariahighlighttool").parent().removeClass("fixedSelect"), new a(".ariahighlighttool").ariaAttr("success", r["unsethighlight"])) : (l.highlight.enable = cc11001100_hook("l.highlight.enable", !0, "assign"), new a(".ariahighlighttool").parent().addClass("fixedSelect"), new a(".ariahighlighttool").ariaAttr("success", r["sethighlight"])) : t && new a(".ariahighlighttool").parent().addClass("fixedSelect");
  }
  function X(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.mouseten, "var-init");
    e ? (t = cc11001100_hook("t", !t, "assign"), l.mouseten = cc11001100_hook("l.mouseten", t, "assign"), z(), t ? f.play(r.ariamousetenopen) : f.play(r.ariamousetenclose), t ? p.startMouseTen() : p.endMouseTen()) : t ? p.startMouseTen() : p.endMouseTen();
  }
  function Y(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new a(".ariamouseb"), "var-init"),
      n = cc11001100_hook("n", l.mousemode, "var-init");
    e ? (n ? (t.removeClass("fixedSelect"), l.mousemode = cc11001100_hook("l.mousemode", null, "assign"), f.play(r.ariamousebclose)) : (l.mousemode = cc11001100_hook("l.mousemode", !0, "assign"), f.play(r.ariamousebopen)), n = cc11001100_hook("n", l.mousemode, "assign"), z()) : n && t.addClass("fixedSelect"), J(n);
  }
  function J(e) {
    cc11001100_hook("e", e, "function-parameter");
    e ? p.startBigMouse() : p.endBigMouse();
  }
  function G(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (l.voice.enable) {
      var t = cc11001100_hook("t", l.voice.rate, "var-init");
      e && (t >= l.voice.maxRate ? t = cc11001100_hook("t", l.voice.minRate, "assign") : t += cc11001100_hook("t", t < 1 ? .1 : .5, "assign"), l.voice.rate = cc11001100_hook("l.voice.rate", parseFloat(t.toFixed(1)), "assign"), f.play(r["ariaCurVoiceRate"].replace("{0}", t.toFixed(1))));
      var n = cc11001100_hook("n", new a(".ariaVoiceRate"), "var-init");
      t <= 1 ? (n.removeClass("ariaicon-quick_read"), n.addClass("ariaicon-slow_read")) : (n.addClass("ariaicon-quick_read"), n.removeClass("ariaicon-slow_read")), K();
    } else f.play(r["ariaVoiceUnEnable"]);
  }
  function $(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.scale, "var-init");
    t >= l.maxZoom ? f.play(r.maxZoomPage) : (t ? t += cc11001100_hook("t", .1, "assign") : t = cc11001100_hook("t", 1, "assign"), l.scale = cc11001100_hook("l.scale", parseFloat(t.toFixed(1)), "assign"), f.play(r.curZoomPage.replace("{0}", t.toFixed(1))), new a(".ariazoomb").attr("title", r.curZoomPage.replace("{0}", t.toFixed(1)) + "," + r.airafontScaleTextToBig), new a(".ariazooms").attr("title", r.curZoomPage.replace("{0}", t.toFixed(1)) + "," + r.airafontScaleTextToSmall), h.setBodyTran(), 1 != t && A.start());
  }
  function Z() {
    var e = cc11001100_hook("e", l.scale, "var-init");
    e <= l.minZoom ? f.play(r.minZoomPage) : (e ? e -= cc11001100_hook("e", .1, "assign") : e = cc11001100_hook("e", 1, "assign"), l.scale = cc11001100_hook("l.scale", parseFloat(e.toFixed(1)), "assign"), f.play(r.curZoomPage.replace("{0}", e.toFixed(1))), new a(".ariazoomb").attr("title", r.curZoomPage.replace("{0}", e.toFixed(1)) + "," + r.airafontScaleTextToBig), new a(".ariazooms").attr("title", r.curZoomPage.replace("{0}", e.toFixed(1)) + "," + r.airafontScaleTextToSmall), h.setBodyTran(), 1 != e && A.start());
  }
  function Q(e) {
    cc11001100_hook("e", e, "function-parameter");
    e && (l.ThemeToNext(), h.setSettingTheme(), C.getAll(document, function (e) {
      h.setSettingTheme(e);
    })), x.setToolbarColor(r), e && f.play(new a(this));
  }
  function ee(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.voice.enable, "var-init"),
      n = cc11001100_hook("n", new a(".ariavoice"), "var-init");
    e && (t = cc11001100_hook("t", !t, "assign"), l.voice.enable = cc11001100_hook("l.voice.enable", t, "assign"), t ? f.play(r["openvoice"]) : (f.play(r["closevoice"]), f.stop()), H()), t ? (n.removeClass("ariaicon-close_sound"), n.addClass("ariaicon-open_sound")) : (n.removeClass("ariaicon-open_sound"), n.addClass("ariaicon-close_sound"));
  }
  function te(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.bigsrc, "var-init");
    if (e) {
      l.bigsrc = cc11001100_hook("l.bigsrc", !t, "assign");
      var n = cc11001100_hook("n", (t = cc11001100_hook("t", !t, "assign")) ? r.ariabigsrcopen : r.ariabigsrcclose, "var-init");
      new a(".ariabigsrc").attr("title", n), f.play(n);
    }
    if (t) {
      if (new a(document.body).css("margin-bottom") < 150 && new a(document.body).addClass("ariabodybottomfiexed"), new a("#accscreen").addClass("expanded"), new a(".ariabigsrc").addClass("fixedSelect"), 0 == new a("[aria-moveup]").length) {
        var i = cc11001100_hook("i", new a("div,footer"), "var-init");
        s.each(i, function (e, t) {
          var n = cc11001100_hook("n", new a(t), "var-init"),
            r = cc11001100_hook("r", n.css("bottom"), "var-init");
          "accscreen" != t.id && "fixed" == n.css("position") && !n.aria.skipall && r < 99 && (n.css("bottom", r + 150), n.addClass("fixedbottom100"));
        });
      }
    } else if (new a(".ariabigsrc").removeClass("fixedSelect"), new a(document.body).removeClass("ariabodybottomfiexed"), new a("#accscreen").removeClass("expanded"), 0 == new a("[aria-moveup]").length) {
      i = cc11001100_hook("i", new a(".fixedbottom100"), "assign");
      s.each(i, function (e, t) {
        var n = cc11001100_hook("n", new a(t), "var-init"),
          r = cc11001100_hook("r", n.css("bottom"), "var-init");
        n.css("bottom", r - 150);
      }), new a(".fixedbottom100").removeClass("fixedbottom100");
    }
    setTimeout(function () {
      s.triggerEvent(window, "resize");
    }, 350);
  }
  function ne(e) {
    cc11001100_hook("e", e, "function-parameter");
    new a(".ariabodytopfiexed").removeClass("ariabodytopfiexed");
    new a(".fiexdTop100");
    new a(".fiexdToabsolute").css("positon", "absolute"), new a(".fiexdToabsolute").removeClass("fiexdToabsolute"), new a(".fiexdTop100").removeClass("fiexdTop100"), new a("#ariaToptoolbar").removeClass("expanded");
  }
  function re(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", l.topfixed, "var-init");
    e && (t = cc11001100_hook("t", !t, "assign"), l.topfixed = cc11001100_hook("l.topfixed", t, "assign"));
    var n = cc11001100_hook("n", new a(".ariatopfixed"), "var-init");
    if (t) {
      new a(document.body).addClass("ariabodytopfiexed");
      var i = cc11001100_hook("i", new a("div,header"), "var-init");
      s.each(i, function (e, t) {
        new a(t).css("top");
      }), e && f.play(r.ariatopfixedtextopen), n.addClass("fixedSelect"), new a("#ariaToptoolbar").addClass("expanded");
    } else n.removeClass("fixedSelect"), ne(), e && f.play(r.ariatopfixedtextclose);
  }
  function ie(e) {
    cc11001100_hook("e", e, "function-parameter");
    new a("#ariaToptoolbar").removeClass("showpannel");
  }
  function oe(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (!l.disabledRegion) {
      var t = cc11001100_hook("t", b.changeRegion(e), "var-init");
      if (t) {
        if (t) {
          var n = cc11001100_hook("n", t, "var-init");
          n.addClass("currentRegion" + e), n.attr("tabindex", 0);
          var i = cc11001100_hook("i", new a(".acccross" + e), "var-init");
          i.addClass("ariatoolselect"), setTimeout(function () {
            i.removeClass("ariatoolselect");
          }, 500);
          var o = cc11001100_hook("o", n.ariaAttr("toObj"), "var-init");
          if (o) {
            var c = cc11001100_hook("c", !1, "var-init");
            function u(e) {
              cc11001100_hook("e", e, "function-parameter");
              if (e.length > 0 && !c) return c = cc11001100_hook("c", !0, "assign"), e.attr("tabindex", 0), e.addClass("ariaregion"), e.ariaAttr("label", n.aria.lastText), e.focus(), void f.play(e.aria.lastText);
            }
            if (n.focus(), "click" == (p = cc11001100_hook("p", t.aria.expandShowMethod, "assign"))) try {
              n.firstNode.click();
            } catch (h) {} else "focus" == p ? n.firstNode.focus() : s.triggerEvent(new a(n.context).find(n).firstNode, p);
            return void setTimeout(function () {
              u(new a(document).find(o)), C.getAll(document, function (e) {
                u(new a(e).find(o));
              });
            }, 550);
          }
          var d = cc11001100_hook("d", n.aria.owns, "var-init");
          if (null != d) {
            if ((d = cc11001100_hook("d", new a(n.context).find(d), "assign")).length > 0) {
              var p = cc11001100_hook("p", t.aria.expandShowMethod, "var-init");
              window.isAriaDev ? window.ariaDev.forHideRegion = cc11001100_hook("window.ariaDev.forHideRegion", !0, "assign") : window.aria.forHideRegion = cc11001100_hook("window.aria.forHideRegion", !0, "assign"), "click" == p ? s.triggerEvent(d.firstNode, "click") : "focus" == p ? d.firstNode.focus() : s.triggerEvent(new a(n.context).find(d).firstNode, p);
            }
            setTimeout(function () {
              window.isAriaDev ? window.ariaDev.forHideRegion = cc11001100_hook("window.ariaDev.forHideRegion", null, "assign") : window.aria.forHideRegion = cc11001100_hook("window.aria.forHideRegion", null, "assign"), n.addClass("currentRegion" + e), n.focus(), f.play(n.aria.lastText);
            }, 200);
          } else g.setClass(n, n.context), n.focus(), f.play(n.aria.lastText);
        }
      } else f.play(r.noregiontype.replace("{0}", r["regiontype" + e]));
    }
  }
  l.hostEnable, u.registerEvent(d.globalListen, function (e) {
    var t = cc11001100_hook("t", c.eventKeyCode(e), "var-init");
    if (l.status && t >= 49 && t <= 54 && e.altKey) return oe(t - 48), s.stopBubble(), s.stopDefault(), !0;
    if (l.status && t >= 96 && t <= 105 && e.altKey) return oe(t - 96), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.readtype)) return W(e), s.stopBubble(), void s.stopDefault();
    if (c.checkKeyCode(e, c.keyCodeSettings.readsrc)) return L(e), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.help)) return _(), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.wakupConfig)) return re(e), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.opVoice)) return ee(e), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.vocierate)) return G(e), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.changeTheme)) return Q(e), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.fontTob)) return $(), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.fontTos)) return Z(), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.mouseb)) return Y(e), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.mouseten)) return X(e), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.reset)) return R(), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.bigsrc)) return te(e), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.exitservice)) return q(), s.stopBubble(), s.stopDefault(), !0;
    if (c.checkKeyCode(e, c.keyCodeSettings.openOldFixed)) return D(e), s.stopBubble(), s.stopDefault(), !0;
  }, 1), e.exports = cc11001100_hook("e.exports", {
    start: function () {
      return new Promise(function (e, t) {
        r || (r = cc11001100_hook("r", l.Language, "assign")), m.enable ? E ? e() : (E = cc11001100_hook("E", !0, "assign"), "undefined" != typeof l.road ? l.inFrame || new a("#ariaToptoolbar").length > 0 ? e() : o.getHTML(l.themeRoad + "/toolbar.min.html?v=" + decodeURI(document.location.hostname), function (t) {
          h.addariaiconstyle(), t = cc11001100_hook("t", s.replaceAll(t, "{road}", l.themeRoad), "assign"), t = cc11001100_hook("t", s.replaceAll(t, "{hostname}", decodeURI(document.location.hostname)), "assign"), t = cc11001100_hook("t", s.replaceAll(t, "noscalevalue", w.getRealScale()), "assign"), new a(s.getContainerDom()).append(t), "zh-CN" != l.defaultLanguage && (new a("#accscreen-py").hide(), new a("#accscreen-jt").hide()), P(), l.readsrc || (v.start(), f.play(new a("#ariaTipText"))), setTimeout(function () {
            new a("#accvol-k").click(ee), new a(".ariatopfixed").click(re), new a(".ariathemebtn").click(Q), new a(".ariazoomb").click($), new a(".ariazooms").click(Z), new a(".ariareset").click(R), new a("#accspeed-m").click(G), new a("#accread-d").click(W), new a(".ariamouseb").click(Y), new a(".ariamouseten").click(X), new a(".ariahighlighttool").click(V), new a(".ariaexit").click(q), new a(".ariabigsrc").click(te), new a(".ariablackgroud").click(ie), new a("#accscreen-py").click(N), new a("#accscreen-jt").click(I), new a(".ariaacchelpbook").click(_), new a(".ariaReadScreen").click(L), new a(".ariaOldFixed").click(D), x.start(), e();
          }, 350);
        }) : e()) : e();
      });
    },
    end: function () {
      E = cc11001100_hook("E", !1, "assign"), ne(), J(), p.endMouseTen(), new a("[isaria]").remove(), i && (clearInterval(i), i = cc11001100_hook("i", null, "assign")), x.end(), new a("#accvol-k").off("click", ee), new a(".ariatopfixed").off("click", re), new a(".ariathemebtn").off("click", Q), new a(".ariazoomb").off("click", $), new a(".ariazooms").off("click", Z), new a(".ariareset").off("click", R), new a("#accspeed-m").off("click", G), new a("#accread-d").off("click", W), new a(".ariamouseb").off("click", Y), new a(".ariamouseten").off("click", X), new a(".ariahighlighttool").off("click", V), new a(".ariaexit").off("click", q), new a(".ariabigsrc").off("click", te), new a(".ariablackgroud").off("click", ie), new a("#accscreen-py").off("click", N), new a("#accscreen-jt").off("click", I), new a(".ariaacchelpbook").off("click", _), new a(".ariaReadScreen").off("click", L), new a(".ariaOldFixed").off("click", D);
      var e = cc11001100_hook("e", new a(".fixedbottom100"), "var-init");
      s.each(e, function (e, t) {
        var n = cc11001100_hook("n", new a(t), "var-init"),
          r = cc11001100_hook("r", n.css("bottom"), "var-init");
        n.css("bottom", r - 150);
      }), new a(".fixedbottom100").removeClass("fixedbottom100");
    }
  }, "assign");
}, function (e, t, n) {
  n(2);
  var r = cc11001100_hook("r", n(6), "var-init"),
    i = cc11001100_hook("i", n(19), "var-init"),
    o = cc11001100_hook("o", n(13), "var-init"),
    a = cc11001100_hook("a", n(124), "var-init");
  n(1);
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), i.start(e), r.start(e), o.setFontSize(e);
    },
    end: function (e) {
      e || (e = cc11001100_hook("e", document, "assign")), r.end(e), i.end(e), a.end(e);
    }
  }, "assign");
}, function (e, t, n) {
  n(1), n(0);
  e.exports = cc11001100_hook("e.exports", {
    start: function (e) {},
    end: function (e) {}
  }, "assign");
}, function (e, t, n) {
  n(1);
  e.exports = cc11001100_hook("e.exports", {
    iframeMouse: function (e) {}
  }, "assign");
}, function (e, t, n) {
  n(5);
  var r,
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(21), "var-init"),
    a = cc11001100_hook("a", n(47), "var-init"),
    s = cc11001100_hook("s", n(11), "var-init"),
    l = cc11001100_hook("l", n(0), "var-init");
  e.exports = cc11001100_hook("e.exports", {
    start: function () {
      if (!l.isMobile()) {
        r || (r = cc11001100_hook("r", o.Language, "assign"));
        var e = cc11001100_hook("e", "", "var-init"),
          t = cc11001100_hook("t", o.curpageConf, "var-init");
        if (t && t.name && t.value && null != t.value.pageDesc) {
          var n = cc11001100_hook("n", r.ariaCurrentContent, "var-init");
          n && (e = cc11001100_hook("e", n, "assign")), e += cc11001100_hook("e", t.value.pageDesc, "assign");
        }
        if (o.readsrc) {
          e = cc11001100_hook("e", r["firstRead_welcome"] + " " + document.title + " ，" + e, "assign");
          for (var c = cc11001100_hook("c", a.getAll(), "var-init"), u = cc11001100_hook("u", !1, "var-init"), d = cc11001100_hook("d", 0, "var-init"), f = cc11001100_hook("f", 1, "var-init"); f < 7; f++) {
            d += cc11001100_hook("d", p = cc11001100_hook("p", c[f] ? c[f].length : 0, "assign"), "assign"), p > 0 && (u || (e += cc11001100_hook("e", r["firstRead_first"], "assign")), u = cc11001100_hook("u", !0, "assign"), e += cc11001100_hook("e", p + r["firstRead_unit"] + r["regiontype" + f] + ",", "assign"));
          }
          d > 0 && (e += cc11001100_hook("e", r["firstRead_sum"].replace("{0}", d) + ",", "assign"));
          for (f = cc11001100_hook("f", 1, "assign"); f < 7; f++) {
            var p;
            (p = cc11001100_hook("p", c[f] ? c[f].length : 0, "assign")) > 0 && (e += cc11001100_hook("e", p > 1 ? r["firstRead_loopvisit"].replace("{0}", f) : r["firstRead_visit"].replace("{0}", f), "assign"), e += cc11001100_hook("e", r["regiontype" + f] + ",", "assign"));
          }
          e += cc11001100_hook("e", r["firstRead_remark"], "assign"), e += cc11001100_hook("e", r["ariaacchelpbook"], "assign");
        } else {
          var h = cc11001100_hook("h", o.defaultLanguage, "var-init");
          h || (h = cc11001100_hook("h", s.getLanguageName(), "assign"));
          var g = cc11001100_hook("g", s.welcomeContent[h], "var-init");
          g && (e = cc11001100_hook("e", g.replace("{0}", document.title + e), "assign")), e || (e = cc11001100_hook("e", new i('[name="description"]', document.querySelector("head")).attr("content"), "assign")), e || (e = cc11001100_hook("e", document.title, "assign"));
        }
        var m = cc11001100_hook("m", new i("#ariaTipText"), "var-init");
        if (0 == m.length) {
          document.body.focus();
          var v = cc11001100_hook("v", document.createElement("a"), "var-init");
          v.setAttribute("href", "javascript:void(0);"), v.setAttribute("role", "pagedescription"), v.id = cc11001100_hook("v.id", "ariaTipText", "assign"), document.body.insertBefore(v, document.body.firstElementChild), m = cc11001100_hook("m", new i("#ariaTipText"), "assign");
        }
        m.ariaAttr("label", e);
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init");
  function a() {
    var e = cc11001100_hook("e", 0, "var-init"),
      t = cc11001100_hook("t", window.screen, "var-init"),
      n = cc11001100_hook("n", navigator.userAgent.toLowerCase(), "var-init");
    return window.devicePixelRatio !== undefined ? e = cc11001100_hook("e", window.devicePixelRatio, "assign") : ~n.indexOf("msie") ? t.deviceXDPI && t.logicalXDPI && (e = cc11001100_hook("e", t.deviceXDPI / t.logicalXDPI, "assign")) : window.outerWidth !== undefined && window.innerWidth !== undefined && (e = cc11001100_hook("e", window.outerWidth / window.innerWidth, "assign")), e && (i.IsIos() && (e /= cc11001100_hook("e", 2, "assign")), e = cc11001100_hook("e", Math.round(100 * e), "assign")), e;
  }
  e.exports = cc11001100_hook("e.exports", {
    getZoom: cc11001100_hook("getZoom", a, "object-key-init"),
    getRealScale: function () {
      return o.scale, 100 / a();
    },
    width100: function () {
      return (document.documentElement.clientWidth * a() / 100).toFixed(2);
    },
    initInOldFixedScale: function () {
      if (new r("body.useOldFixed") > 0) {
        var e = cc11001100_hook("e", document.documentElement.clientWidth, "var-init");
        o.scale = cc11001100_hook("o.scale", parseFloat((e / 740).toFixed(2)), "assign");
      }
    }
  }, "assign");
}, function (e, t, n) {
  var r,
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(0), "var-init"),
    a = cc11001100_hook("a", n(4), "var-init"),
    s = cc11001100_hook("s", n(2), "var-init"),
    l = cc11001100_hook("l", n(5), "var-init"),
    c = cc11001100_hook("c", n(9), "var-init"),
    u = cc11001100_hook("u", n(26), "var-init"),
    d = cc11001100_hook("d", {
      brightness: cc11001100_hook("brightness", a.brightness(), "object-key-init"),
      contrast: cc11001100_hook("contrast", a.contrast(), "object-key-init"),
      grayscale: cc11001100_hook("grayscale", a.grayscale(), "object-key-init"),
      sepia: cc11001100_hook("sepia", a.sepia(), "object-key-init"),
      mode: cc11001100_hook("mode", a.mode(), "object-key-init"),
      customMode: cc11001100_hook("customMode", a.customMode(), "object-key-init")
    }, "var-init");
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", 0, "var-init");
    t = cc11001100_hook("t", "number" == typeof e ? e : this.getAttribute("afProp"), "assign"), new i(".aff_themespannel .af_cs_toggle").removeClass("af_cs_toggle--checked af_cs_toggle--disabled"), new i(this).addClass("af_cs_toggle--checked af_cs_toggle--disabled").attr("aria-selected", !0), s.Theme = cc11001100_hook("s.Theme", parseInt(t), "assign"), w(), x(), S(r), l.play(new i(this));
  }
  function p() {
    var e = cc11001100_hook("e", this.getAttribute("afProp"), "var-init");
    d.customMode != e && (new i(".aff_thememodepannel .af_cs_toggle--checked").removeClass("af_cs_toggle--checked").attr("aria-selected", !0).attr("aria-selected", !1), new i(this).attr("aria-selected", !0).addClass("af_cs_toggle--checked"), a.customMode(e), d.customMode = cc11001100_hook("d.customMode", e, "assign"), function (e) {
      d = cc11001100_hook("d", u.createStandMode(e), "assign"), a.brightness(d.brightness), a.contrast(d.contrast), a.grayscale(d.grayscale), a.sepia(d.sepia), a.mode(d.mode), a.customMode(e);
    }(e), w(), x(), l.play(new i(this)));
  }
  function h() {
    var e = cc11001100_hook("e", new i(".af"), "var-init");
    new i(".afContainer").hasClass("ariaHide") ? (w(), e.removeClass("ariaHide").addClass("af_active"), new i(".afContainer").removeClass("ariaHide")) : (e.removeClass("af_active"), new i(".afContainer").addClass("ariaHide"));
  }
  function g() {}
  function m() {
    var e = cc11001100_hook("e", new i(this).closest(".af_updown").attr("afProp"), "var-init");
    d[e] += cc11001100_hook("d[e]", 5, "assign"), a.afProp(e, d[e]), w(), x();
  }
  function v() {
    var e = cc11001100_hook("e", new i(this).closest(".af_updown").attr("afProp"), "var-init");
    d[e] -= cc11001100_hook("d[e]", 5, "assign"), w(), a.afProp(e, d[e]), x();
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    return [].indexOf.call(["brightness", "contrast"], e) > -1 ? 2 : 1;
  }
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new i(this).closest(".af_updown"), "var-init"),
      n = cc11001100_hook("n", t.attr("afProp"), "var-init"),
      r = cc11001100_hook("r", e.offsetX / 424 * 100 * b(n), "var-init"),
      o = cc11001100_hook("o", parseInt(r % 10), "var-init");
    r = cc11001100_hook("r", o < 2 ? 10 * parseInt(r / 10) : o < 7 ? 10 * parseInt(r / 10) + 5 : 10 * parseInt(r / 10) + 10, "assign"), d[n] = cc11001100_hook("d[n]", r, "assign"), a.afProp(n, d[n]), w(), l.play(t.find(".af_track__label")), x();
  }
  function w() {
    !function () {
      var e = cc11001100_hook("e", !0, "var-init");
      0 == s.ThemeIndex && (e = cc11001100_hook("e", !1, "assign")), e ? new i(".af_track,.aff_thememodepannel .af_cs_toggle,.af_updown_button,.aff_thememodepannel .af_cs_toggle").removeClass("af_cs_toggle--disabled") : new i(".af_track,.aff_thememodepannel .af_cs_toggle,.af_updown_button,.aff_thememodepannel .af_cs_toggle").addClass("af_cs_toggle--disabled");
    }();
    var e = cc11001100_hook("e", new i(".af_updown"), "var-init");
    o.each(e, function (e, t) {
      var n = cc11001100_hook("n", t.getAttribute("afProp"), "var-init");
      if (n) {
        var r = cc11001100_hook("r", new i(t), "var-init"),
          o = cc11001100_hook("o", r.find("af_button"), "var-init");
        !function (e, t, n) {
          e.jTool || (e = cc11001100_hook("e", new i(e), "assign"));
          t <= 0 ? (t = cc11001100_hook("t", 0, "assign"), e.addClass("af_updown_button_disabled"), e.prop("disabled", !0)) : (e.removeClass("af_updown_button_disabled"), e.prop("disabled", !1));
          d[n] = cc11001100_hook("d[n]", t, "assign");
        }(o[0], d[n], n), function (e, t, n) {
          e.jTool || (e = cc11001100_hook("e", new i(e), "assign"));
          t >= 100 * b(n) ? (t = cc11001100_hook("t", 100 * b(n), "assign"), e.addClass("af_updown_button_disabled"), e.prop("disabled", !0)) : (e.removeClass("af_updown_button_disabled"), e.prop("disabled", !1));
          d[n] = cc11001100_hook("d[n]", t, "assign");
        }(o[1], d[n], n), r.find(".af_track__value").firstNode.style.setProperty("width", (d[n] / b(n)).toString() + "%"), r.find(".af__value").html(d[n].toString());
      }
    });
  }
  new Date().getTime();
  function x() {
    c.doEventForce();
  }
  function S(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      n,
      r = cc11001100_hook("r", "", "var-init");
    if (t = cc11001100_hook("t", s.Theme, "assign"), n = cc11001100_hook("n", s.ThemeNext, "assign"), r = cc11001100_hook("r", e.ariathemebtn + " ", "assign"), r += cc11001100_hook("r", t ? e[t["name"]] ? e[t["name"]] : t.displayName : "无", "assign"), r += cc11001100_hook("r", "," + e.arianextTheme + " ", "assign"), n) {
      r += cc11001100_hook("r", e[n["name"]] ? e[n["name"]] : n["displayName"], "assign");
      var a = cc11001100_hook("a", "#ariaToptoolbar .ariathemebtn ,#ariaToptoolbar .ariathemebtn span{", "var-init");
      a += cc11001100_hook("a", "color:" + (n["color"] ? n["color"] : "black") + " !important;", "assign"), a += cc11001100_hook("a", "background-color:" + (n["backgroundColor"] ? n["backgroundColor"] : "white") + " !important", "assign"), a += cc11001100_hook("a", "}", "assign"), o.appendCss(document, "ariathemebtn", a);
    } else r += cc11001100_hook("r", "无", "assign"), new i("#ariathemebtn").remove();
    new i(".ariathemebtn").attr("title", r);
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function () {
      var e, t, n, a;
      r = cc11001100_hook("r", s.Language, "assign"), e = cc11001100_hook("e", new i(".aff_themespannel"), "assign"), t = cc11001100_hook("t", s.Themes, "assign"), n = cc11001100_hook("n", s.ThemeIndex, "assign"), a = cc11001100_hook("a", "", "assign"), o.each(t, function (e, t) {
        a += cc11001100_hook("a", ' <af_button class="af_button af_cs_toggle ' + (n == e ? "af_cs_toggle--checked af_cs_toggle--disabled" : "") + '" afProp="' + e + '" aria-label=主色调' + t.displayName + ">", "assign"), a += cc11001100_hook("a", '<span class="af_button__wrapper"><span class="af_cs_toggle__wrapper"> ' + t.displayName + "</span>", "assign"), a += cc11001100_hook("a", " </af_button>", "assign");
      }), e.html(a), new i(".af_down_button").click(v), new i(".af_up_button").click(m), new i(".ariaicon_updownarrow,.afBg,.ariaicon-closec").click(h), new i(".afBg").click(h), new i(".af_track").click(y), new i(".aff_thememodepannel .af_cs_toggle").click(p), new i(".aff_themespannel .af_cs_toggle").click(f), window.addEventListener("resize", g), new i(".af_button").attr("tabindex", 0).attr("aria-atomic", "true").attr("role", "button").attr("aria-selected", "false");
    },
    end: function () {
      window.removeEventListener("resize", g), new i("#ariatoolsconfig").remove();
    },
    initData: cc11001100_hook("initData", w, "object-key-init"),
    setToolbarColor: cc11001100_hook("setToolbarColor", S, "object-key-init"),
    toShowFilter: cc11001100_hook("toShowFilter", h, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(1), "var-init"),
    i = cc11001100_hook("i", n(0), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init");
  function a() {
    s(), new r("#ariaToptoolbar").css("position", "absolute"), new r("#accscreen").css("position", "absolute"), document.removeEventListener("scroll", s);
  }
  function s() {
    if (i.isFF()) {
      var e = cc11001100_hook("e", document.documentElement.scrollTop, "var-init"),
        t = cc11001100_hook("t", document.documentElement.scrollLeft, "var-init");
      document.documentElement.scrollHeight;
      new r("body").css("margin", "0");
      var n = cc11001100_hook("n", parseFloat(o.scale), "var-init");
      new r("#ariaToptoolbar").css({
        top: cc11001100_hook("top", e / n, "object-key-init"),
        left: cc11001100_hook("left", t / n, "object-key-init")
      }), new r("#accscreen").css({
        top: cc11001100_hook("top", (e + document.documentElement.clientHeight) / n - 150, "object-key-init"),
        left: cc11001100_hook("left", t / n, "object-key-init")
      });
    }
  }
  e.exports = cc11001100_hook("e.exports", {
    start: function () {
      i.isFF() && (a(), document.addEventListener("scroll", s));
    },
    end: cc11001100_hook("end", a, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(14), "var-init"),
    i = cc11001100_hook("i", n(12), "var-init");
  function o() {
    var e = cc11001100_hook("e", r.get(i.keys.data.languages), "var-init");
    if (!e) return null;
    var t = cc11001100_hook("t", r.get(i.keys.runtime.settings.defaultLanguage), "var-init");
    return t || (t = cc11001100_hook("t", "zh-CN", "assign")), e[t];
  }
  e.exports = cc11001100_hook("e.exports", {
    get: cc11001100_hook("get", o, "object-key-init"),
    setDefault: function () {
      var e = cc11001100_hook("e", r.get(i.keys.runtime.defaultLanguage) || document.documentElement.lang || navigator.language || navigator.userLanguage, "var-init"),
        t = cc11001100_hook("t", r.get(i.keys.data.languages), "var-init");
      t && t[e];
    },
    getText: function (e) {
      var t = cc11001100_hook("t", o(), "var-init");
      return t[e] || t.undefined;
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(5), "var-init"),
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(13), "var-init"),
    a = cc11001100_hook("a", n(2), "var-init"),
    s = cc11001100_hook("s", n(3), "var-init"),
    l = cc11001100_hook("l", null, "var-init"),
    c = cc11001100_hook("c", n(132), "var-init"),
    u = cc11001100_hook("u", n(0), "var-init"),
    d = cc11001100_hook("d", !1, "var-init"),
    f = cc11001100_hook("f", new Map(), "var-init");
  function p(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", new i("body", e).aria.id, "var-init");
    if (f.has(n)) return f.get(n);
    if (t) {
      var r = cc11001100_hook("r", new c.Hammer.Manager(e), "var-init");
      return f.set(n, r), r;
    }
  }
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    d = cc11001100_hook("d", !0, "assign");
  }
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    d = cc11001100_hook("d", !0, "assign");
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    d = cc11001100_hook("d", !1, "assign"), window.canRead = cc11001100_hook("window.canRead", !0, "assign");
    var t = cc11001100_hook("t", new i(e.target), "var-init");
    ("1" == t.ariaAttr("readtype") || a.wapUseConfigPage || window.ariaFromApp) && (a.readtype = cc11001100_hook("a.readtype", 1, "assign")), l != e.target && (l = cc11001100_hook("l", e.target, "assign"), window.ariaFocusElem = cc11001100_hook("window.ariaFocusElem", t, "assign"), window.ariaPlayElem = cc11001100_hook("window.ariaPlayElem", t, "assign"), t.aria.atomic && (t = cc11001100_hook("t", t.aria.atomicElem, "assign")), r.play(t), o.setClass(t, document), setTimeout(function () {
      l = cc11001100_hook("l", null, "assign");
    }, 5e3));
  }
  function v(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", p(e, !0), "var-init");
    t.add(new c.Hammer.Tap({
      event: cc11001100_hook("event", "doubletap", "object-key-init"),
      taps: cc11001100_hook("taps", 2, "object-key-init")
    })), t.add(new c.Hammer.Tap({
      event: cc11001100_hook("event", "singletap", "object-key-init")
    })), t.off("doubletap").on("doubletap", h).off("singletap").on("singletap", m), new i(e.body).off("touchend", "*", b), new i(e.body).on("touchend", "*", b), new i(e.body).off("touchmove", "*", g), new i(e.body).on("touchmove", "*", g);
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (!d && a.voice.enable) {
      u.stopBubble();
      try {
        u.stopDefault();
      } catch (t) {}
      return !1;
    }
  }
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", p(e), "var-init");
    t && (t.off("doubletap").off("singletap").off("swipe", g), t.stop(!0), function (e) {
      var t = cc11001100_hook("t", new i("body", e).aria.id, "var-init");
      f.has(t) && (f.get(t).destroy(), f["delete"](t));
    }());
    try {
      new i(e.body).off("touchend", "*", b), new i(e.body).off("touchmove", "*", g), new i(e).off("click", w);
    } catch (n) {}
  }
  function w(e) {
    cc11001100_hook("e", e, "function-parameter");
  }
  e.exports = cc11001100_hook("e.exports", {
    starAll: function () {
      v(document), s.getAll(document, v);
    },
    endAll: function () {
      y(document), s.getAll(document, y);
    },
    start: cc11001100_hook("start", v, "object-key-init"),
    end: cc11001100_hook("end", y, "object-key-init")
  }, "assign");
}, function (e, t) {
  var n,
    r = cc11001100_hook("r", ["", "webkit", "Moz", "MS", "ms", "o"], "var-init"),
    i = cc11001100_hook("i", document.createElement("div"), "var-init"),
    o = cc11001100_hook("o", Math.round, "var-init"),
    a = cc11001100_hook("a", Math.abs, "var-init"),
    s = cc11001100_hook("s", Date.now, "var-init");
  function l(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return setTimeout(g(e, n), t);
  }
  function c(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return !!Array.isArray(e) && (u(e, n[t], n), !0);
  }
  function u(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r;
    if (e) if (e.forEach) e.forEach(t, n);else if (e.length !== undefined) for (r = cc11001100_hook("r", 0, "assign"); r < e.length;) t.call(n, e[r], r, e), r++;else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
  }
  function d(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", "DEPRECATED METHOD: " + t + "\n" + n + " AT \n", "var-init");
    return function () {
      var t = cc11001100_hook("t", new Error("get-stack-trace"), "var-init"),
        n = cc11001100_hook("n", t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", "var-init"),
        i = cc11001100_hook("i", window.console && (window.console.warn || window.console.log), "var-init");
      return i && i.call(window.console, r, n), e.apply(this, arguments);
    };
  }
  n = cc11001100_hook("n", "function" != typeof Object.assign ? function (e) {
    if (e === undefined || null === e) throw new TypeError("Cannot convert undefined or null to object");
    for (var t = cc11001100_hook("t", Object(e), "var-init"), n = cc11001100_hook("n", 1, "var-init"); n < arguments.length; n++) {
      var r = cc11001100_hook("r", arguments[n], "var-init");
      if (r !== undefined && null !== r) for (var i in r) r.hasOwnProperty(i) && (t[i] = cc11001100_hook("t[i]", r[i], "assign"));
    }
    return t;
  } : Object.assign, "assign");
  var f = cc11001100_hook("f", d(function (e, t, n) {
      for (var r = cc11001100_hook("r", Object.keys(t), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r.length;) (!n || n && e[r[i]] === undefined) && (e[r[i]] = cc11001100_hook("e[r[i]]", t[r[i]], "assign")), i++;
      return e;
    }, "extend", "Use `assign`."), "var-init"),
    p = cc11001100_hook("p", d(function (e, t) {
      return f(e, t, !0);
    }, "merge", "Use `assign`."), "var-init");
  function h(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o = cc11001100_hook("o", t.prototype, "var-init");
    (i = cc11001100_hook("i", e.prototype = cc11001100_hook("e.prototype", Object.create(o), "assign"), "assign")).constructor = cc11001100_hook("(i = e.prototype = Object.create(o)).constructor", e, "assign"), i._super = cc11001100_hook("i._super", o, "assign"), r && n(i, r);
  }
  function g(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return function () {
      return e.apply(t, arguments);
    };
  }
  function m(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return "function" == typeof e ? e.apply(t && t[0] || undefined, t) : e;
  }
  function v(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e === undefined ? t : e;
  }
  function b(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    u(S(t), function (t) {
      e.addEventListener(t, n, !1);
    });
  }
  function y(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    u(S(t), function (t) {
      e.removeEventListener(t, n, !1);
    });
  }
  function w(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (; e;) {
      if (e == t) return !0;
      e = cc11001100_hook("e", e.parentNode, "assign");
    }
    return !1;
  }
  function x(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.indexOf(t) > -1;
  }
  function S(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.trim().split(/\s+/g);
  }
  function C(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (e.indexOf && !n) return e.indexOf(t);
    for (var r = cc11001100_hook("r", 0, "var-init"); r < e.length;) {
      if (n && e[r][n] == t || !n && e[r] === t) return r;
      r++;
    }
    return -1;
  }
  function k(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Array.prototype.slice.call(e, 0);
  }
  function T(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e.length;) {
      var a = cc11001100_hook("a", t ? e[o][t] : e[o], "var-init");
      C(i, a) < 0 && r.push(e[o]), i[o] = cc11001100_hook("i[o]", a, "assign"), o++;
    }
    return n && (r = cc11001100_hook("r", t ? r.sort(function (e, n) {
      return e[t] > n[t];
    }) : r.sort(), "assign")), r;
  }
  function A(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n, i, o = cc11001100_hook("o", t[0].toUpperCase() + t.slice(1), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < r.length;) {
      if ((i = cc11001100_hook("i", (n = cc11001100_hook("n", r[a], "assign")) ? n + o : t, "assign")) in e) return i;
      a++;
    }
    return undefined;
  }
  var E = cc11001100_hook("E", 1, "var-init");
  function O(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.ownerDocument || e, "var-init");
    return t.defaultView || t.parentWindow || window;
  }
  var _ = cc11001100_hook("_", "ontouchstart" in window, "var-init"),
    F = cc11001100_hook("F", A(window, "PointerEvent") !== undefined, "var-init"),
    N = cc11001100_hook("N", _ && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), "var-init"),
    M = cc11001100_hook("M", "touch", "var-init"),
    I = cc11001100_hook("I", "mouse", "var-init"),
    P = cc11001100_hook("P", 24, "var-init"),
    j = cc11001100_hook("j", ["x", "y"], "var-init"),
    L = cc11001100_hook("L", ["clientX", "clientY"], "var-init");
  function R(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", this, "var-init");
    this.manager = cc11001100_hook("this.manager", e, "assign"), this.callback = cc11001100_hook("this.callback", t, "assign"), this.element = cc11001100_hook("this.element", e.element, "assign"), this.target = cc11001100_hook("this.target", e.options.inputTarget, "assign"), this.domHandler = cc11001100_hook("this.domHandler", function (t) {
      m(e.options.enable, [e]) && n.handler(t);
    }, "assign"), this.init();
  }
  function B(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", n.pointers.length, "var-init"),
      i = cc11001100_hook("i", n.changedPointers.length, "var-init"),
      o = cc11001100_hook("o", 1 & t && r - i == 0, "var-init"),
      l = cc11001100_hook("l", 12 & t && r - i == 0, "var-init");
    n.isFirst = cc11001100_hook("n.isFirst", !!o, "assign"), n.isFinal = cc11001100_hook("n.isFinal", !!l, "assign"), o && (e.session = cc11001100_hook("e.session", {}, "assign")), n.eventType = cc11001100_hook("n.eventType", t, "assign"), function (e, t) {
      var n = cc11001100_hook("n", e.session, "var-init"),
        r = cc11001100_hook("r", t.pointers, "var-init"),
        i = cc11001100_hook("i", r.length, "var-init");
      n.firstInput || (n.firstInput = cc11001100_hook("n.firstInput", D(t), "assign"));
      i > 1 && !n.firstMultiple ? n.firstMultiple = cc11001100_hook("n.firstMultiple", D(t), "assign") : 1 === i && (n.firstMultiple = cc11001100_hook("n.firstMultiple", !1, "assign"));
      var o = cc11001100_hook("o", n.firstInput, "var-init"),
        l = cc11001100_hook("l", n.firstMultiple, "var-init"),
        c = cc11001100_hook("c", l ? l.center : o.center, "var-init"),
        u = cc11001100_hook("u", t.center = cc11001100_hook("t.center", z(r), "assign"), "var-init");
      t.timeStamp = cc11001100_hook("t.timeStamp", s(), "assign"), t.deltaTime = cc11001100_hook("t.deltaTime", t.timeStamp - o.timeStamp, "assign"), t.angle = cc11001100_hook("t.angle", q(c, u), "assign"), t.distance = cc11001100_hook("t.distance", K(c, u), "assign"), function (e, t) {
        var n = cc11001100_hook("n", t.center, "var-init"),
          r = cc11001100_hook("r", e.offsetDelta || {}, "var-init"),
          i = cc11001100_hook("i", e.prevDelta || {}, "var-init"),
          o = cc11001100_hook("o", e.prevInput || {}, "var-init");
        1 !== t.eventType && 4 !== o.eventType || (i = cc11001100_hook("i", e.prevDelta = cc11001100_hook("e.prevDelta", {
          x: cc11001100_hook("x", o.deltaX || 0, "object-key-init"),
          y: cc11001100_hook("y", o.deltaY || 0, "object-key-init")
        }, "assign"), "assign"), r = cc11001100_hook("r", e.offsetDelta = cc11001100_hook("e.offsetDelta", {
          x: cc11001100_hook("x", n.x, "object-key-init"),
          y: cc11001100_hook("y", n.y, "object-key-init")
        }, "assign"), "assign"));
        t.deltaX = cc11001100_hook("t.deltaX", i.x + (n.x - r.x), "assign"), t.deltaY = cc11001100_hook("t.deltaY", i.y + (n.y - r.y), "assign");
      }(n, t), t.offsetDirection = cc11001100_hook("t.offsetDirection", H(t.deltaX, t.deltaY), "assign");
      var d = cc11001100_hook("d", U(t.deltaTime, t.deltaX, t.deltaY), "var-init");
      t.overallVelocityX = cc11001100_hook("t.overallVelocityX", d.x, "assign"), t.overallVelocityY = cc11001100_hook("t.overallVelocityY", d.y, "assign"), t.overallVelocity = cc11001100_hook("t.overallVelocity", a(d.x) > a(d.y) ? d.x : d.y, "assign"), t.scale = cc11001100_hook("t.scale", l ? (f = cc11001100_hook("f", l.pointers, "assign"), p = cc11001100_hook("p", r, "assign"), K(p[0], p[1], L) / K(f[0], f[1], L)) : 1, "assign"), t.rotation = cc11001100_hook("t.rotation", l ? function (e, t) {
        return q(t[1], t[0], L) + q(e[1], e[0], L);
      }(l.pointers, r) : 0, "assign"), t.maxPointers = cc11001100_hook("t.maxPointers", n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, "assign"), function (e, t) {
        var n,
          r,
          i,
          o,
          s = cc11001100_hook("s", e.lastInterval || t, "var-init"),
          l = cc11001100_hook("l", t.timeStamp - s.timeStamp, "var-init");
        if (8 != t.eventType && (l > 25 || s.velocity === undefined)) {
          var c = cc11001100_hook("c", t.deltaX - s.deltaX, "var-init"),
            u = cc11001100_hook("u", t.deltaY - s.deltaY, "var-init"),
            d = cc11001100_hook("d", U(l, c, u), "var-init");
          r = cc11001100_hook("r", d.x, "assign"), i = cc11001100_hook("i", d.y, "assign"), n = cc11001100_hook("n", a(d.x) > a(d.y) ? d.x : d.y, "assign"), o = cc11001100_hook("o", H(c, u), "assign"), e.lastInterval = cc11001100_hook("e.lastInterval", t, "assign");
        } else n = cc11001100_hook("n", s.velocity, "assign"), r = cc11001100_hook("r", s.velocityX, "assign"), i = cc11001100_hook("i", s.velocityY, "assign"), o = cc11001100_hook("o", s.direction, "assign");
        t.velocity = cc11001100_hook("t.velocity", n, "assign"), t.velocityX = cc11001100_hook("t.velocityX", r, "assign"), t.velocityY = cc11001100_hook("t.velocityY", i, "assign"), t.direction = cc11001100_hook("t.direction", o, "assign");
      }(n, t);
      var f, p;
      var h = cc11001100_hook("h", e.element, "var-init");
      w(t.srcEvent.target, h) && (h = cc11001100_hook("h", t.srcEvent.target, "assign"));
      t.target = cc11001100_hook("t.target", h, "assign");
    }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = cc11001100_hook("e.session.prevInput", n, "assign");
  }
  function D(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.pointers.length;) t[n] = cc11001100_hook("t[n]", {
      clientX: cc11001100_hook("clientX", o(e.pointers[n].clientX), "object-key-init"),
      clientY: cc11001100_hook("clientY", o(e.pointers[n].clientY), "object-key-init")
    }, "assign"), n++;
    return {
      timeStamp: cc11001100_hook("timeStamp", s(), "object-key-init"),
      pointers: cc11001100_hook("pointers", t, "object-key-init"),
      center: cc11001100_hook("center", z(t), "object-key-init"),
      deltaX: cc11001100_hook("deltaX", e.deltaX, "object-key-init"),
      deltaY: cc11001100_hook("deltaY", e.deltaY, "object-key-init")
    };
  }
  function z(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.length, "var-init");
    if (1 === t) return {
      x: cc11001100_hook("x", o(e[0].clientX), "object-key-init"),
      y: cc11001100_hook("y", o(e[0].clientY), "object-key-init")
    };
    for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t;) n += cc11001100_hook("n", e[i].clientX, "assign"), r += cc11001100_hook("r", e[i].clientY, "assign"), i++;
    return {
      x: cc11001100_hook("x", o(n / t), "object-key-init"),
      y: cc11001100_hook("y", o(r / t), "object-key-init")
    };
  }
  function U(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return {
      x: cc11001100_hook("x", t / e || 0, "object-key-init"),
      y: cc11001100_hook("y", n / e || 0, "object-key-init")
    };
  }
  function H(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e === t ? 1 : a(e) >= a(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16;
  }
  function K(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    n || (n = cc11001100_hook("n", j, "assign"));
    var r = cc11001100_hook("r", t[n[0]] - e[n[0]], "var-init"),
      i = cc11001100_hook("i", t[n[1]] - e[n[1]], "var-init");
    return Math.sqrt(r * r + i * i);
  }
  function q(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    n || (n = cc11001100_hook("n", j, "assign"));
    var r = cc11001100_hook("r", t[n[0]] - e[n[0]], "var-init"),
      i = cc11001100_hook("i", t[n[1]] - e[n[1]], "var-init");
    return 180 * Math.atan2(i, r) / Math.PI;
  }
  R.prototype = cc11001100_hook("R.prototype", {
    handler: function () {},
    init: function () {
      this.evEl && b(this.element, this.evEl, this.domHandler), this.evTarget && b(this.target, this.evTarget, this.domHandler), this.evWin && b(O(this.element), this.evWin, this.domHandler);
    },
    destroy: function () {
      this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this.evTarget, this.domHandler), this.evWin && y(O(this.element), this.evWin, this.domHandler);
    }
  }, "assign");
  var W = cc11001100_hook("W", {
      mousedown: cc11001100_hook("mousedown", 1, "object-key-init"),
      mousemove: cc11001100_hook("mousemove", 2, "object-key-init"),
      mouseup: cc11001100_hook("mouseup", 4, "object-key-init")
    }, "var-init"),
    V = cc11001100_hook("V", "mousedown", "var-init"),
    X = cc11001100_hook("X", "mousemove mouseup", "var-init");
  function Y() {
    this.evEl = cc11001100_hook("this.evEl", V, "assign"), this.evWin = cc11001100_hook("this.evWin", X, "assign"), this.pressed = cc11001100_hook("this.pressed", !1, "assign"), R.apply(this, arguments);
  }
  h(Y, R, {
    handler: function (e) {
      var t = cc11001100_hook("t", W[e.type], "var-init");
      1 & t && 0 === e.button && (this.pressed = cc11001100_hook("this.pressed", !0, "assign")), 2 & t && 1 !== e.which && (t = cc11001100_hook("t", 4, "assign")), this.pressed && (4 & t && (this.pressed = cc11001100_hook("this.pressed", !1, "assign")), this.callback(this.manager, t, {
        pointers: cc11001100_hook("pointers", [e], "object-key-init"),
        changedPointers: cc11001100_hook("changedPointers", [e], "object-key-init"),
        pointerType: cc11001100_hook("pointerType", I, "object-key-init"),
        srcEvent: cc11001100_hook("srcEvent", e, "object-key-init")
      }));
    }
  });
  var J = cc11001100_hook("J", {
      pointerdown: cc11001100_hook("pointerdown", 1, "object-key-init"),
      pointermove: cc11001100_hook("pointermove", 2, "object-key-init"),
      pointerup: cc11001100_hook("pointerup", 4, "object-key-init"),
      pointercancel: cc11001100_hook("pointercancel", 8, "object-key-init"),
      pointerout: cc11001100_hook("pointerout", 8, "object-key-init")
    }, "var-init"),
    G = cc11001100_hook("G", {
      2: cc11001100_hook(2, M, "object-key-init"),
      3: cc11001100_hook(3, "pen", "object-key-init"),
      4: cc11001100_hook(4, I, "object-key-init"),
      5: cc11001100_hook(5, "kinect", "object-key-init")
    }, "var-init"),
    $ = cc11001100_hook("$", "pointerdown", "var-init"),
    Z = cc11001100_hook("Z", "pointermove pointerup pointercancel", "var-init");
  function Q() {
    this.evEl = cc11001100_hook("this.evEl", $, "assign"), this.evWin = cc11001100_hook("this.evWin", Z, "assign"), R.apply(this, arguments), this.store = cc11001100_hook("this.store", this.manager.session.pointerEvents = cc11001100_hook("this.manager.session.pointerEvents", [], "assign"), "assign");
  }
  window.MSPointerEvent && !window.PointerEvent && ($ = cc11001100_hook("$", "MSPointerDown", "assign"), Z = cc11001100_hook("Z", "MSPointerMove MSPointerUp MSPointerCancel", "assign")), h(Q, R, {
    handler: function (e) {
      var t = cc11001100_hook("t", this.store, "var-init"),
        n = cc11001100_hook("n", !1, "var-init"),
        r = cc11001100_hook("r", e.type.toLowerCase().replace("ms", ""), "var-init"),
        i = cc11001100_hook("i", J[r], "var-init"),
        o = cc11001100_hook("o", G[e.pointerType] || e.pointerType, "var-init"),
        a = cc11001100_hook("a", o == M, "var-init"),
        s = cc11001100_hook("s", C(t, e.pointerId, "pointerId"), "var-init");
      1 & i && (0 === e.button || a) ? s < 0 && (t.push(e), s = cc11001100_hook("s", t.length - 1, "assign")) : 12 & i && (n = cc11001100_hook("n", !0, "assign")), s < 0 || (t[s] = cc11001100_hook("t[s]", e, "assign"), this.callback(this.manager, i, {
        pointers: cc11001100_hook("pointers", t, "object-key-init"),
        changedPointers: cc11001100_hook("changedPointers", [e], "object-key-init"),
        pointerType: cc11001100_hook("pointerType", o, "object-key-init"),
        srcEvent: cc11001100_hook("srcEvent", e, "object-key-init")
      }), n && t.splice(s, 1));
    }
  });
  var ee = cc11001100_hook("ee", {
      touchstart: cc11001100_hook("touchstart", 1, "object-key-init"),
      touchmove: cc11001100_hook("touchmove", 2, "object-key-init"),
      touchend: cc11001100_hook("touchend", 4, "object-key-init"),
      touchcancel: cc11001100_hook("touchcancel", 8, "object-key-init")
    }, "var-init"),
    te = cc11001100_hook("te", "touchstart", "var-init"),
    ne = cc11001100_hook("ne", "touchstart touchmove touchend touchcancel", "var-init");
  function re() {
    this.evTarget = cc11001100_hook("this.evTarget", te, "assign"), this.evWin = cc11001100_hook("this.evWin", ne, "assign"), this.started = cc11001100_hook("this.started", !1, "assign"), R.apply(this, arguments);
  }
  function ie(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", k(e.touches), "var-init"),
      r = cc11001100_hook("r", k(e.changedTouches), "var-init");
    return 12 & t && (n = cc11001100_hook("n", T(n.concat(r), "identifier", !0), "assign")), [n, r];
  }
  h(re, R, {
    handler: function (e) {
      var t = cc11001100_hook("t", ee[e.type], "var-init");
      if (1 === t && (this.started = cc11001100_hook("this.started", !0, "assign")), this.started) {
        var n = cc11001100_hook("n", ie.call(this, e, t), "var-init");
        12 & t && n[0].length - n[1].length == 0 && (this.started = cc11001100_hook("this.started", !1, "assign")), this.callback(this.manager, t, {
          pointers: cc11001100_hook("pointers", n[0], "object-key-init"),
          changedPointers: cc11001100_hook("changedPointers", n[1], "object-key-init"),
          pointerType: cc11001100_hook("pointerType", M, "object-key-init"),
          srcEvent: cc11001100_hook("srcEvent", e, "object-key-init")
        });
      }
    }
  });
  var oe = cc11001100_hook("oe", {
      touchstart: cc11001100_hook("touchstart", 1, "object-key-init"),
      touchmove: cc11001100_hook("touchmove", 2, "object-key-init"),
      touchend: cc11001100_hook("touchend", 4, "object-key-init"),
      touchcancel: cc11001100_hook("touchcancel", 8, "object-key-init")
    }, "var-init"),
    ae = cc11001100_hook("ae", "touchstart touchmove touchend touchcancel", "var-init");
  function se() {
    this.evTarget = cc11001100_hook("this.evTarget", ae, "assign"), this.targetIds = cc11001100_hook("this.targetIds", {}, "assign"), R.apply(this, arguments);
  }
  function le(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", k(e.touches), "var-init"),
      r = cc11001100_hook("r", this.targetIds, "var-init");
    if (3 & t && 1 === n.length) return r[n[0].identifier] = cc11001100_hook("r[n[0].identifier]", !0, "assign"), [n, n];
    var i,
      o,
      a = cc11001100_hook("a", k(e.changedTouches), "var-init"),
      s = cc11001100_hook("s", [], "var-init"),
      l = cc11001100_hook("l", this.target, "var-init");
    if (o = cc11001100_hook("o", n.filter(function (e) {
      return w(e.target, l);
    }), "assign"), 1 === t) for (i = cc11001100_hook("i", 0, "assign"); i < o.length;) r[o[i].identifier] = cc11001100_hook("r[o[i].identifier]", !0, "assign"), i++;
    for (i = cc11001100_hook("i", 0, "assign"); i < a.length;) r[a[i].identifier] && s.push(a[i]), 12 & t && delete r[a[i].identifier], i++;
    return s.length ? [T(o.concat(s), "identifier", !0), s] : void 0;
  }
  h(se, R, {
    handler: function (e) {
      var t = cc11001100_hook("t", oe[e.type], "var-init"),
        n = cc11001100_hook("n", le.call(this, e, t), "var-init");
      n && this.callback(this.manager, t, {
        pointers: cc11001100_hook("pointers", n[0], "object-key-init"),
        changedPointers: cc11001100_hook("changedPointers", n[1], "object-key-init"),
        pointerType: cc11001100_hook("pointerType", M, "object-key-init"),
        srcEvent: cc11001100_hook("srcEvent", e, "object-key-init")
      });
    }
  });
  function ce() {
    R.apply(this, arguments);
    var e = cc11001100_hook("e", g(this.handler, this), "var-init");
    this.touch = cc11001100_hook("this.touch", new se(this.manager, e), "assign"), this.mouse = cc11001100_hook("this.mouse", new Y(this.manager, e), "assign"), this.primaryTouch = cc11001100_hook("this.primaryTouch", null, "assign"), this.lastTouches = cc11001100_hook("this.lastTouches", [], "assign");
  }
  function ue(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    1 & e ? (this.primaryTouch = cc11001100_hook("this.primaryTouch", t.changedPointers[0].identifier, "assign"), de.call(this, t)) : 12 & e && de.call(this, t);
  }
  function de(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.changedPointers[0], "var-init");
    if (t.identifier === this.primaryTouch) {
      var n = cc11001100_hook("n", {
        x: cc11001100_hook("x", t.clientX, "object-key-init"),
        y: cc11001100_hook("y", t.clientY, "object-key-init")
      }, "var-init");
      this.lastTouches.push(n);
      var r = cc11001100_hook("r", this.lastTouches, "var-init");
      setTimeout(function () {
        var e = cc11001100_hook("e", r.indexOf(n), "var-init");
        e > -1 && r.splice(e, 1);
      }, 2500);
    }
  }
  function fe(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", e.srcEvent.clientX, "var-init"), n = cc11001100_hook("n", e.srcEvent.clientY, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < this.lastTouches.length; r++) {
      var i = cc11001100_hook("i", this.lastTouches[r], "var-init"),
        o = cc11001100_hook("o", Math.abs(t - i.x), "var-init"),
        a = cc11001100_hook("a", Math.abs(n - i.y), "var-init");
      if (o <= 25 && a <= 25) return !0;
    }
    return !1;
  }
  h(ce, R, {
    handler: function (e, t, n) {
      var r = cc11001100_hook("r", n.pointerType == M, "var-init"),
        i = cc11001100_hook("i", n.pointerType == I, "var-init");
      if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
        if (r) ue.call(this, t, n);else if (i && fe.call(this, n)) return;
        this.callback(e, t, n);
      }
    },
    destroy: function () {
      this.touch.destroy(), this.mouse.destroy();
    }
  });
  var pe = cc11001100_hook("pe", A(i.style, "touchAction"), "var-init"),
    he = cc11001100_hook("he", pe !== undefined, "var-init"),
    ge = cc11001100_hook("ge", "compute", "var-init"),
    me = cc11001100_hook("me", "auto", "var-init"),
    ve = cc11001100_hook("ve", "manipulation", "var-init"),
    be = cc11001100_hook("be", "none", "var-init"),
    ye = cc11001100_hook("ye", "pan-x", "var-init"),
    we = cc11001100_hook("we", "pan-y", "var-init"),
    xe = cc11001100_hook("xe", function () {
      if (!he) return !1;
      var e = cc11001100_hook("e", {}, "var-init"),
        t = cc11001100_hook("t", window.CSS && window.CSS.supports, "var-init");
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
        e[n] = cc11001100_hook("e[n]", !t || window.CSS.supports("touch-action", n), "assign");
      }), e;
    }(), "var-init");
  function Se(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    this.manager = cc11001100_hook("this.manager", e, "assign"), this.set(t);
  }
  Se.prototype = cc11001100_hook("Se.prototype", {
    set: function (e) {
      e == ge && (e = cc11001100_hook("e", this.compute(), "assign")), he && this.manager.element.style && xe[e] && (this.manager.element.style[pe] = cc11001100_hook("this.manager.element.style[pe]", e, "assign")), this.actions = cc11001100_hook("this.actions", e.toLowerCase().trim(), "assign");
    },
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    compute: function () {
      var e = cc11001100_hook("e", [], "var-init");
      return u(this.manager.recognizers, function (t) {
        m(t.options.enable, [t]) && (e = cc11001100_hook("e", e.concat(t.getTouchAction()), "assign"));
      }), function (e) {
        if (x(e, be)) return be;
        var t = cc11001100_hook("t", x(e, ye), "var-init"),
          n = cc11001100_hook("n", x(e, we), "var-init");
        if (t && n) return be;
        if (t || n) return t ? ye : we;
        if (x(e, ve)) return ve;
        return me;
      }(e.join(" "));
    },
    preventDefaults: function (e) {
      var t = cc11001100_hook("t", e.srcEvent, "var-init"),
        n = cc11001100_hook("n", e.offsetDirection, "var-init");
      if (this.manager.session.prevented) t.preventDefault();else {
        var r = cc11001100_hook("r", this.actions, "var-init"),
          i = cc11001100_hook("i", x(r, be) && !xe[be], "var-init"),
          o = cc11001100_hook("o", x(r, we) && !xe[we], "var-init"),
          a = cc11001100_hook("a", x(r, ye) && !xe[ye], "var-init");
        if (i) {
          var s = cc11001100_hook("s", 1 === e.pointers.length, "var-init"),
            l = cc11001100_hook("l", e.distance < 2, "var-init"),
            c = cc11001100_hook("c", e.deltaTime < 250, "var-init");
          if (s && l && c) return;
        }
        if (!a || !o) return i || o && 6 & n || a && n & P ? this.preventSrc(t) : void 0;
      }
    },
    preventSrc: function (e) {
      this.manager.session.prevented = cc11001100_hook("this.manager.session.prevented", !0, "assign"), e.preventDefault();
    }
  }, "assign");
  var Ce = cc11001100_hook("Ce", 32, "var-init");
  function ke(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.options = cc11001100_hook("this.options", n({}, this.defaults, e || {}), "assign"), this.id = cc11001100_hook("this.id", E++, "assign"), this.manager = cc11001100_hook("this.manager", null, "assign"), this.options.enable = cc11001100_hook("this.options.enable", v(this.options.enable, !0), "assign"), this.state = cc11001100_hook("this.state", 1, "assign"), this.simultaneous = cc11001100_hook("this.simultaneous", {}, "assign"), this.requireFail = cc11001100_hook("this.requireFail", [], "assign");
  }
  function Te(e) {
    cc11001100_hook("e", e, "function-parameter");
    return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : "";
  }
  function Ae(e) {
    cc11001100_hook("e", e, "function-parameter");
    return 16 == e ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : "";
  }
  function Ee(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", t.manager, "var-init");
    return n ? n.get(e) : e;
  }
  function Oe() {
    ke.apply(this, arguments);
  }
  function _e() {
    Oe.apply(this, arguments), this.pX = cc11001100_hook("this.pX", null, "assign"), this.pY = cc11001100_hook("this.pY", null, "assign");
  }
  function Fe() {
    Oe.apply(this, arguments);
  }
  function Ne() {
    ke.apply(this, arguments), this._timer = cc11001100_hook("this._timer", null, "assign"), this._input = cc11001100_hook("this._input", null, "assign");
  }
  function Me() {
    Oe.apply(this, arguments);
  }
  function Ie() {
    Oe.apply(this, arguments);
  }
  function Pe() {
    ke.apply(this, arguments), this.pTime = cc11001100_hook("this.pTime", !1, "assign"), this.pCenter = cc11001100_hook("this.pCenter", !1, "assign"), this._timer = cc11001100_hook("this._timer", null, "assign"), this._input = cc11001100_hook("this._input", null, "assign"), this.count = cc11001100_hook("this.count", 0, "assign");
  }
  function je(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return (t = cc11001100_hook("t", t || {}, "assign")).recognizers = cc11001100_hook("(t = t || {}).recognizers", v(t.recognizers, je.defaults.preset), "assign"), new Le(e, t);
  }
  ke.prototype = cc11001100_hook("ke.prototype", {
    defaults: {},
    set: function (e) {
      return n(this.options, e), this.manager && this.manager.touchAction.update(), this;
    },
    recognizeWith: function (e) {
      if (c(e, "recognizeWith", this)) return this;
      var t = cc11001100_hook("t", this.simultaneous, "var-init");
      return t[(e = cc11001100_hook("e", Ee(e, this), "assign")).id] || (t[e.id] = cc11001100_hook("t[e.id]", e, "assign"), e.recognizeWith(this)), this;
    },
    dropRecognizeWith: function (e) {
      return c(e, "dropRecognizeWith", this) || (e = cc11001100_hook("e", Ee(e, this), "assign"), delete this.simultaneous[e.id]), this;
    },
    requireFailure: function (e) {
      if (c(e, "requireFailure", this)) return this;
      var t = cc11001100_hook("t", this.requireFail, "var-init");
      return -1 === C(t, e = cc11001100_hook("e", Ee(e, this), "assign")) && (t.push(e), e.requireFailure(this)), this;
    },
    dropRequireFailure: function (e) {
      if (c(e, "dropRequireFailure", this)) return this;
      e = cc11001100_hook("e", Ee(e, this), "assign");
      var t = cc11001100_hook("t", C(this.requireFail, e), "var-init");
      return t > -1 && this.requireFail.splice(t, 1), this;
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function (e) {
      return !!this.simultaneous[e.id];
    },
    emit: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", this.state, "var-init");
      function r(n) {
        cc11001100_hook("n", n, "function-parameter");
        t.manager.emit(n, e);
      }
      n < 8 && r(t.options.event + Te(n)), r(t.options.event), e.additionalEvent && r(e.additionalEvent), n >= 8 && r(t.options.event + Te(n));
    },
    tryEmit: function (e) {
      if (this.canEmit()) return this.emit(e);
      this.state = cc11001100_hook("this.state", Ce, "assign");
    },
    canEmit: function () {
      for (var e = cc11001100_hook("e", 0, "var-init"); e < this.requireFail.length;) {
        if (!(33 & this.requireFail[e].state)) return !1;
        e++;
      }
      return !0;
    },
    recognize: function (e) {
      var t = cc11001100_hook("t", n({}, e), "var-init");
      if (!m(this.options.enable, [this, t])) return this.reset(), void (this.state = cc11001100_hook("this.state", Ce, "assign"));
      56 & this.state && (this.state = cc11001100_hook("this.state", 1, "assign")), this.state = cc11001100_hook("this.state", this.process(t), "assign"), 30 & this.state && this.tryEmit(t);
    },
    process: function (e) {},
    getTouchAction: function () {},
    reset: function () {}
  }, "assign"), h(Oe, ke, {
    defaults: {
      pointers: cc11001100_hook("pointers", 1, "object-key-init")
    },
    attrTest: function (e) {
      var t = cc11001100_hook("t", this.options.pointers, "var-init");
      return 0 === t || e.pointers.length === t;
    },
    process: function (e) {
      var t = cc11001100_hook("t", this.state, "var-init"),
        n = cc11001100_hook("n", e.eventType, "var-init"),
        r = cc11001100_hook("r", 6 & t, "var-init"),
        i = cc11001100_hook("i", this.attrTest(e), "var-init");
      return r && (8 & n || !i) ? 16 | t : r || i ? 4 & n ? 8 | t : 2 & t ? 4 | t : 2 : Ce;
    }
  }), h(_e, Oe, {
    defaults: {
      event: cc11001100_hook("event", "pan", "object-key-init"),
      threshold: cc11001100_hook("threshold", 10, "object-key-init"),
      pointers: cc11001100_hook("pointers", 1, "object-key-init"),
      direction: cc11001100_hook("direction", 30, "object-key-init")
    },
    getTouchAction: function () {
      var e = cc11001100_hook("e", this.options.direction, "var-init"),
        t = cc11001100_hook("t", [], "var-init");
      return 6 & e && t.push(we), e & P && t.push(ye), t;
    },
    directionTest: function (e) {
      var t = cc11001100_hook("t", this.options, "var-init"),
        n = cc11001100_hook("n", !0, "var-init"),
        r = cc11001100_hook("r", e.distance, "var-init"),
        i = cc11001100_hook("i", e.direction, "var-init"),
        o = cc11001100_hook("o", e.deltaX, "var-init"),
        a = cc11001100_hook("a", e.deltaY, "var-init");
      return i & t.direction || (6 & t.direction ? (i = cc11001100_hook("i", 0 === o ? 1 : o < 0 ? 2 : 4, "assign"), n = cc11001100_hook("n", o != this.pX, "assign"), r = cc11001100_hook("r", Math.abs(e.deltaX), "assign")) : (i = cc11001100_hook("i", 0 === a ? 1 : a < 0 ? 8 : 16, "assign"), n = cc11001100_hook("n", a != this.pY, "assign"), r = cc11001100_hook("r", Math.abs(e.deltaY), "assign"))), e.direction = cc11001100_hook("e.direction", i, "assign"), n && r > t.threshold && i & t.direction;
    },
    attrTest: function (e) {
      return Oe.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e));
    },
    emit: function (e) {
      this.pX = cc11001100_hook("this.pX", e.deltaX, "assign"), this.pY = cc11001100_hook("this.pY", e.deltaY, "assign");
      var t = cc11001100_hook("t", Ae(e.direction), "var-init");
      t && (e.additionalEvent = cc11001100_hook("e.additionalEvent", this.options.event + t, "assign")), this._super.emit.call(this, e);
    }
  }), h(Fe, Oe, {
    defaults: {
      event: cc11001100_hook("event", "pinch", "object-key-init"),
      threshold: cc11001100_hook("threshold", 0, "object-key-init"),
      pointers: cc11001100_hook("pointers", 2, "object-key-init")
    },
    getTouchAction: function () {
      return [be];
    },
    attrTest: function (e) {
      return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state);
    },
    emit: function (e) {
      if (1 !== e.scale) {
        var t = cc11001100_hook("t", e.scale < 1 ? "in" : "out", "var-init");
        e.additionalEvent = cc11001100_hook("e.additionalEvent", this.options.event + t, "assign");
      }
      this._super.emit.call(this, e);
    }
  }), h(Ne, ke, {
    defaults: {
      event: cc11001100_hook("event", "press", "object-key-init"),
      pointers: cc11001100_hook("pointers", 1, "object-key-init"),
      time: cc11001100_hook("time", 251, "object-key-init"),
      threshold: cc11001100_hook("threshold", 9, "object-key-init")
    },
    getTouchAction: function () {
      return [me];
    },
    process: function (e) {
      var t = cc11001100_hook("t", this.options, "var-init"),
        n = cc11001100_hook("n", e.pointers.length === t.pointers, "var-init"),
        r = cc11001100_hook("r", e.distance < t.threshold, "var-init"),
        i = cc11001100_hook("i", e.deltaTime > t.time, "var-init");
      if (this._input = cc11001100_hook("this._input", e, "assign"), !r || !n || 12 & e.eventType && !i) this.reset();else if (1 & e.eventType) this.reset(), this._timer = cc11001100_hook("this._timer", l(function () {
        this.state = cc11001100_hook("this.state", 8, "assign"), this.tryEmit();
      }, t.time, this), "assign");else if (4 & e.eventType) return 8;
      return Ce;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function (e) {
      8 === this.state && (e && 4 & e.eventType ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = cc11001100_hook("this._input.timeStamp", s(), "assign"), this.manager.emit(this.options.event, this._input)));
    }
  }), h(Me, Oe, {
    defaults: {
      event: cc11001100_hook("event", "rotate", "object-key-init"),
      threshold: cc11001100_hook("threshold", 0, "object-key-init"),
      pointers: cc11001100_hook("pointers", 2, "object-key-init")
    },
    getTouchAction: function () {
      return [be];
    },
    attrTest: function (e) {
      return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state);
    }
  }), h(Ie, Oe, {
    defaults: {
      event: cc11001100_hook("event", "swipe", "object-key-init"),
      threshold: cc11001100_hook("threshold", 10, "object-key-init"),
      velocity: cc11001100_hook("velocity", .3, "object-key-init"),
      direction: cc11001100_hook("direction", 30, "object-key-init"),
      pointers: cc11001100_hook("pointers", 1, "object-key-init")
    },
    getTouchAction: function () {
      return _e.prototype.getTouchAction.call(this);
    },
    attrTest: function (e) {
      var t,
        n = cc11001100_hook("n", this.options.direction, "var-init");
      return 30 & n ? t = cc11001100_hook("t", e.overallVelocity, "assign") : 6 & n ? t = cc11001100_hook("t", e.overallVelocityX, "assign") : n & P && (t = cc11001100_hook("t", e.overallVelocityY, "assign")), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && a(t) > this.options.velocity && 4 & e.eventType;
    },
    emit: function (e) {
      var t = cc11001100_hook("t", Ae(e.offsetDirection), "var-init");
      t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e);
    }
  }), h(Pe, ke, {
    defaults: {
      event: cc11001100_hook("event", "tap", "object-key-init"),
      pointers: cc11001100_hook("pointers", 1, "object-key-init"),
      taps: cc11001100_hook("taps", 1, "object-key-init"),
      interval: cc11001100_hook("interval", 300, "object-key-init"),
      time: cc11001100_hook("time", 250, "object-key-init"),
      threshold: cc11001100_hook("threshold", 9, "object-key-init"),
      posThreshold: cc11001100_hook("posThreshold", 10, "object-key-init")
    },
    getTouchAction: function () {
      return [ve];
    },
    process: function (e) {
      var t = cc11001100_hook("t", this.options, "var-init"),
        n = cc11001100_hook("n", e.pointers.length === t.pointers, "var-init"),
        r = cc11001100_hook("r", e.distance < t.threshold, "var-init"),
        i = cc11001100_hook("i", e.deltaTime < t.time, "var-init");
      if (this.reset(), 1 & e.eventType && 0 === this.count) return this.failTimeout();
      if (r && i && n) {
        if (4 != e.eventType) return this.failTimeout();
        var o = cc11001100_hook("o", !this.pTime || e.timeStamp - this.pTime < t.interval, "var-init"),
          a = cc11001100_hook("a", !this.pCenter || K(this.pCenter, e.center) < t.posThreshold, "var-init");
        if (this.pTime = cc11001100_hook("this.pTime", e.timeStamp, "assign"), this.pCenter = cc11001100_hook("this.pCenter", e.center, "assign"), a && o ? this.count += cc11001100_hook("this.count", 1, "assign") : this.count = cc11001100_hook("this.count", 1, "assign"), this._input = cc11001100_hook("this._input", e, "assign"), 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = cc11001100_hook("this._timer", l(function () {
          this.state = cc11001100_hook("this.state", 8, "assign"), this.tryEmit();
        }, t.interval, this), "assign"), 2) : 8;
      }
      return Ce;
    },
    failTimeout: function () {
      return this._timer = cc11001100_hook("this._timer", l(function () {
        this.state = cc11001100_hook("this.state", Ce, "assign");
      }, this.options.interval, this), "assign"), Ce;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function () {
      8 == this.state && (this._input.tapCount = cc11001100_hook("this._input.tapCount", this.count, "assign"), this.manager.emit(this.options.event, this._input));
    }
  }), je.VERSION = cc11001100_hook("je.VERSION", "2.0.8", "assign"), je.defaults = cc11001100_hook("je.defaults", {
    domEvents: cc11001100_hook("domEvents", !1, "object-key-init"),
    touchAction: cc11001100_hook("touchAction", ge, "object-key-init"),
    enable: cc11001100_hook("enable", !0, "object-key-init"),
    inputTarget: cc11001100_hook("inputTarget", null, "object-key-init"),
    inputClass: cc11001100_hook("inputClass", null, "object-key-init"),
    preset: cc11001100_hook("preset", [[Me, {
      enable: cc11001100_hook("enable", !1, "object-key-init")
    }], [Fe, {
      enable: cc11001100_hook("enable", !1, "object-key-init")
    }, ["rotate"]], [Ie, {
      direction: cc11001100_hook("direction", 6, "object-key-init")
    }], [_e, {
      direction: cc11001100_hook("direction", 6, "object-key-init")
    }, ["swipe"]], [Pe], [Pe, {
      event: cc11001100_hook("event", "doubletap", "object-key-init"),
      taps: cc11001100_hook("taps", 2, "object-key-init")
    }, ["tap"]], [Ne]], "object-key-init"),
    cssProps: {
      userSelect: cc11001100_hook("userSelect", "none", "object-key-init"),
      touchSelect: cc11001100_hook("touchSelect", "none", "object-key-init"),
      touchCallout: cc11001100_hook("touchCallout", "none", "object-key-init"),
      contentZooming: cc11001100_hook("contentZooming", "none", "object-key-init"),
      userDrag: cc11001100_hook("userDrag", "none", "object-key-init"),
      tapHighlightColor: cc11001100_hook("tapHighlightColor", "rgba(0,0,0,0)", "object-key-init")
    }
  }, "assign");
  function Le(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r;
    this.options = cc11001100_hook("this.options", n({}, je.defaults, t || {}), "assign"), this.options.inputTarget = cc11001100_hook("this.options.inputTarget", this.options.inputTarget || e, "assign"), this.handlers = cc11001100_hook("this.handlers", {}, "assign"), this.session = cc11001100_hook("this.session", {}, "assign"), this.recognizers = cc11001100_hook("this.recognizers", [], "assign"), this.oldCssProps = cc11001100_hook("this.oldCssProps", {}, "assign"), this.element = cc11001100_hook("this.element", e, "assign"), this.input = cc11001100_hook("this.input", new ((r = cc11001100_hook("r", this, "assign")).options.inputClass || (F ? Q : N ? se : _ ? ce : Y))(r, B), "assign"), this.touchAction = cc11001100_hook("this.touchAction", new Se(this, this.options.touchAction), "assign"), Re(this, !0), u(this.options.recognizers, function (e) {
      var t = cc11001100_hook("t", this.add(new e[0](e[1])), "var-init");
      e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
    }, this);
  }
  function Re(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r = cc11001100_hook("r", e.element, "var-init");
    r.style && (u(e.options.cssProps, function (i, o) {
      n = cc11001100_hook("n", A(r.style, o), "assign"), t ? (e.oldCssProps[n] = cc11001100_hook("e.oldCssProps[n]", r.style[n], "assign"), r.style[n] = cc11001100_hook("r.style[n]", i, "assign")) : r.style[n] = cc11001100_hook("r.style[n]", e.oldCssProps[n] || "", "assign");
    }), t || (e.oldCssProps = cc11001100_hook("e.oldCssProps", {}, "assign")));
  }
  Le.prototype = cc11001100_hook("Le.prototype", {
    set: function (e) {
      return n(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = cc11001100_hook("this.input.target", e.inputTarget, "assign"), this.input.init()), this;
    },
    stop: function (e) {
      this.session.stopped = cc11001100_hook("this.session.stopped", e ? 2 : 1, "assign");
    },
    recognize: function (e) {
      var t = cc11001100_hook("t", this.session, "var-init");
      if (!t.stopped) {
        var n;
        this.touchAction.preventDefaults(e);
        var r = cc11001100_hook("r", this.recognizers, "var-init"),
          i = cc11001100_hook("i", t.curRecognizer, "var-init");
        (!i || i && 8 & i.state) && (i = cc11001100_hook("i", t.curRecognizer = cc11001100_hook("t.curRecognizer", null, "assign"), "assign"));
        for (var o = cc11001100_hook("o", 0, "var-init"); o < r.length;) n = cc11001100_hook("n", r[o], "assign"), 2 === t.stopped || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(e), !i && 14 & n.state && (i = cc11001100_hook("i", t.curRecognizer = cc11001100_hook("t.curRecognizer", n, "assign"), "assign")), o++;
      }
    },
    get: function (e) {
      if (e instanceof ke) return e;
      for (var t = cc11001100_hook("t", this.recognizers, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) if (t[n].options.event == e) return t[n];
      return null;
    },
    add: function (e) {
      if (c(e, "add", this)) return this;
      var t = cc11001100_hook("t", this.get(e.options.event), "var-init");
      return t && this.remove(t), this.recognizers.push(e), e.manager = cc11001100_hook("e.manager", this, "assign"), this.touchAction.update(), e;
    },
    remove: function (e) {
      if (c(e, "remove", this)) return this;
      if (e = cc11001100_hook("e", this.get(e), "assign")) {
        var t = cc11001100_hook("t", this.recognizers, "var-init"),
          n = cc11001100_hook("n", C(t, e), "var-init");
        -1 !== n && (t.splice(n, 1), this.touchAction.update());
      }
      return this;
    },
    on: function (e, t) {
      if (e !== undefined && t !== undefined) {
        var n = cc11001100_hook("n", this.handlers, "var-init");
        return u(S(e), function (e) {
          n[e] = cc11001100_hook("n[e]", n[e] || [], "assign"), n[e].push(t);
        }), this;
      }
    },
    off: function (e, t) {
      if (e !== undefined) {
        var n = cc11001100_hook("n", this.handlers, "var-init");
        return u(S(e), function (e) {
          t ? n[e] && n[e].splice(C(n[e], t), 1) : delete n[e];
        }), this;
      }
    },
    emit: function (e, t) {
      this.options.domEvents && function (e, t) {
        var n = cc11001100_hook("n", document.createEvent("Event"), "var-init");
        n.initEvent(e, !0, !0), n.gesture = cc11001100_hook("n.gesture", t, "assign"), t.target.dispatchEvent(n);
      }(e, t);
      var n = cc11001100_hook("n", this.handlers[e] && this.handlers[e].slice(), "var-init");
      if (n && n.length) {
        t.type = cc11001100_hook("t.type", e, "assign"), t.preventDefault = cc11001100_hook("t.preventDefault", function () {
          t.srcEvent.preventDefault();
        }, "assign");
        for (var r = cc11001100_hook("r", 0, "var-init"); r < n.length;) n[r](t), r++;
      }
    },
    destroy: function () {
      this.element && Re(this, !1), this.handlers = cc11001100_hook("this.handlers", {}, "assign"), this.session = cc11001100_hook("this.session", {}, "assign"), this.input.destroy(), this.element = cc11001100_hook("this.element", null, "assign");
    }
  }, "assign"), n(je, {
    INPUT_START: cc11001100_hook("INPUT_START", 1, "object-key-init"),
    INPUT_MOVE: cc11001100_hook("INPUT_MOVE", 2, "object-key-init"),
    INPUT_END: cc11001100_hook("INPUT_END", 4, "object-key-init"),
    INPUT_CANCEL: cc11001100_hook("INPUT_CANCEL", 8, "object-key-init"),
    STATE_POSSIBLE: cc11001100_hook("STATE_POSSIBLE", 1, "object-key-init"),
    STATE_BEGAN: cc11001100_hook("STATE_BEGAN", 2, "object-key-init"),
    STATE_CHANGED: cc11001100_hook("STATE_CHANGED", 4, "object-key-init"),
    STATE_ENDED: cc11001100_hook("STATE_ENDED", 8, "object-key-init"),
    STATE_RECOGNIZED: cc11001100_hook("STATE_RECOGNIZED", 8, "object-key-init"),
    STATE_CANCELLED: cc11001100_hook("STATE_CANCELLED", 16, "object-key-init"),
    STATE_FAILED: cc11001100_hook("STATE_FAILED", Ce, "object-key-init"),
    DIRECTION_NONE: cc11001100_hook("DIRECTION_NONE", 1, "object-key-init"),
    DIRECTION_LEFT: cc11001100_hook("DIRECTION_LEFT", 2, "object-key-init"),
    DIRECTION_RIGHT: cc11001100_hook("DIRECTION_RIGHT", 4, "object-key-init"),
    DIRECTION_UP: cc11001100_hook("DIRECTION_UP", 8, "object-key-init"),
    DIRECTION_DOWN: cc11001100_hook("DIRECTION_DOWN", 16, "object-key-init"),
    DIRECTION_HORIZONTAL: cc11001100_hook("DIRECTION_HORIZONTAL", 6, "object-key-init"),
    DIRECTION_VERTICAL: cc11001100_hook("DIRECTION_VERTICAL", P, "object-key-init"),
    DIRECTION_ALL: cc11001100_hook("DIRECTION_ALL", 30, "object-key-init"),
    Manager: cc11001100_hook("Manager", Le, "object-key-init"),
    Input: cc11001100_hook("Input", R, "object-key-init"),
    TouchAction: cc11001100_hook("TouchAction", Se, "object-key-init"),
    TouchInput: cc11001100_hook("TouchInput", se, "object-key-init"),
    MouseInput: cc11001100_hook("MouseInput", Y, "object-key-init"),
    PointerEventInput: cc11001100_hook("PointerEventInput", Q, "object-key-init"),
    TouchMouseInput: cc11001100_hook("TouchMouseInput", ce, "object-key-init"),
    SingleTouchInput: cc11001100_hook("SingleTouchInput", re, "object-key-init"),
    Recognizer: cc11001100_hook("Recognizer", ke, "object-key-init"),
    AttrRecognizer: cc11001100_hook("AttrRecognizer", Oe, "object-key-init"),
    Tap: cc11001100_hook("Tap", Pe, "object-key-init"),
    Pan: cc11001100_hook("Pan", _e, "object-key-init"),
    Swipe: cc11001100_hook("Swipe", Ie, "object-key-init"),
    Pinch: cc11001100_hook("Pinch", Fe, "object-key-init"),
    Rotate: cc11001100_hook("Rotate", Me, "object-key-init"),
    Press: cc11001100_hook("Press", Ne, "object-key-init"),
    on: cc11001100_hook("on", b, "object-key-init"),
    off: cc11001100_hook("off", y, "object-key-init"),
    each: cc11001100_hook("each", u, "object-key-init"),
    merge: cc11001100_hook("merge", p, "object-key-init"),
    extend: cc11001100_hook("extend", f, "object-key-init"),
    assign: cc11001100_hook("assign", n, "object-key-init"),
    inherit: cc11001100_hook("inherit", h, "object-key-init"),
    bindFn: cc11001100_hook("bindFn", g, "object-key-init"),
    prefixed: cc11001100_hook("prefixed", A, "object-key-init")
  }), ("undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Hammer = cc11001100_hook("(\"undefined\" != typeof window ? window : \"undefined\" != typeof self ? self : {}).Hammer", je, "assign"), e.exports = cc11001100_hook("e.exports", {
    Hammer: cc11001100_hook("Hammer", je, "object-key-init")
  }, "assign");
}, function (e, t, n) {
  var r,
    i = cc11001100_hook("i", n(1), "var-init"),
    o = cc11001100_hook("o", n(2), "var-init"),
    a = cc11001100_hook("a", n(4), "var-init"),
    s = cc11001100_hook("s", n(16), "var-init"),
    l = cc11001100_hook("l", n(15), "var-init"),
    c = cc11001100_hook("c", n(6), "var-init"),
    u = cc11001100_hook("u", n(9), "var-init"),
    d = cc11001100_hook("d", n(5), "var-init"),
    f = cc11001100_hook("f", (n(0), n(11)), "var-init");
  function p(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", document.getElementsByName(e), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) {
      var i = cc11001100_hook("i", n[r], "var-init");
      if (i.value == t) {
        i.checked = cc11001100_hook("i.checked", !0, "assign");
        break;
      }
    }
  }
  function h() {
    var e = cc11001100_hook("e", a.status(), "var-init");
    document.getElementById("zzmsbtn").checked = cc11001100_hook("document.getElementById(\"zzmsbtn\").checked", e, "assign"), k(e), S(o.voice.enable), p("ariaVoiceSpeed", o.voice.rate), p("ariaFontSize", a.fontScale()), p("ariaTheme", o.ThemeIndex);
  }
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    m(e);
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    new i("body").removeClass("ariaConfigInOpen"), new i("#ariaConfigPanel").addClass("ariaHide"), new i(".ariaOldFixedbtnDiv").removeClass("ariaHide");
  }
  function v() {
    new i("body").addClass("ariaConfigInOpen"), new i(".ariaOldFixedbtnDiv").addClass("ariaHide"), new i("#ariaConfigPanel").removeClass("ariaHide");
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", parseFloat(e.target.value), "var-init");
    a.theme(t), u.doEventForceAll();
  }
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", parseFloat(e.target.value), "var-init");
    a.fontScale(t), c.setBodyTran();
  }
  function w(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", parseFloat(e.target.value), "var-init");
    o.voice.rate = cc11001100_hook("o.voice.rate", t, "assign");
  }
  function x(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.target.checked, "var-init");
    o.voice.enable = cc11001100_hook("o.voice.enable", t, "assign"), t ? (d.start(), d.play(new i(e.target))) : (d.stop(), d.end()), S(t);
  }
  function S(e) {
    cc11001100_hook("e", e, "function-parameter");
    document.getElementById("voicebtn").checked = cc11001100_hook("document.getElementById(\"voicebtn\").checked", e, "assign"), e ? (new i(".readrate").removeClass("ariadisabled"), new i(".talkback").removeClass("ariadisabled")) : (new i(".readrate").addClass("ariadisabled"), new i(".talkback").addClass("ariadisabled"));
  }
  function C(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.target.checked, "var-init");
    a.status(t), k(t), t ? r.AppStart() : r.end();
  }
  function k(e) {
    cc11001100_hook("e", e, "function-parameter");
    e ? (new i(".ariabtn").removeClass("ariadisabled"), new i(".zzmssub").removeClass("ariadisabled")) : (new i(".zzmssub").addClass("ariadisabled"), new i(".ariabtn").addClass("ariadisabled"));
  }
  e.exports = cc11001100_hook("e.exports", {
    loadConfig: function () {
      window.ariaHideToolbar || f.inApp() || (r = cc11001100_hook("r", window[window.ariaSdkName], "assign"), 0 == new i("#ariaConfigPanel").length ? s.getHTML(o.themeRoad + "/wap.min.html", function (e) {
        l.getDprScale();
        new i(document.body).append(e), o.wapChangeFontSize || new i(".fontSizeDev").remove(), function () {
          var e = cc11001100_hook("e", o.Theme, "var-init"),
            t = cc11001100_hook("t", void 0 === e ? "default" : e.name, "var-init");
          function n(e, n) {
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            var r = cc11001100_hook("r", document.createElement("li"), "var-init"),
              o = cc11001100_hook("o", document.createElement("label"), "var-init"),
              a = cc11001100_hook("a", document.createElement("input"), "var-init");
            a.value = cc11001100_hook("a.value", n, "assign"), a.type = cc11001100_hook("a.type", "radio", "assign"), a.name = cc11001100_hook("a.name", "ariaTheme", "assign"), a.id = cc11001100_hook("a.id", "aira" + e.name, "assign"), t == e.name && (a.checked = cc11001100_hook("a.checked", !0, "assign")), a.setAttribute("aria-label", "当前主题" + e.displayName), r.appendChild(a), o.setAttribute("role", "radio"), o.setAttribute("for", "aira" + e.name), o.setAttribute("aria-label", "当前主题" + e.displayName), o.innerHTML = cc11001100_hook("o.innerHTML", e.displayName, "assign"), r.appendChild(o), i.appendChild(r);
          }
          var r = cc11001100_hook("r", o.Themes, "var-init"),
            i = cc11001100_hook("i", document.getElementById("ariacolorset"), "var-init");
          i.innerHTML = cc11001100_hook("i.innerHTML", "", "assign");
          for (var a = cc11001100_hook("a", 0, "var-init"); a < r.length; a++) {
            n(r[a], a);
          }
        }(), h(), new i(".zzmsbtn").on("click", C), new i(".voicebtn").on("click", x), new i(".readrate input[type='radio']").on("click", w), new i(".fontSizeDev input[type='radio']").on("click", y), new i(".ariaThemeDev input[type='radio']").on("click", b), new i(".arianavbar .ariaIcon").on("click", m), new i(".ariabtn").on("click", g), v();
      }) : (c.setSettingTheme(), h(), v()));
    }
  }, "assign");
}, function (e, t, n) {
  var r = cc11001100_hook("r", n(4), "var-init"),
    i = cc11001100_hook("i", n(2), "var-init"),
    o = cc11001100_hook("o", n(5), "var-init"),
    a = cc11001100_hook("a", n(6), "var-init"),
    s = cc11001100_hook("s", n(9), "var-init"),
    l = cc11001100_hook("l", n(57), "var-init"),
    c = cc11001100_hook("c", (n(45), n(26)), "var-init"),
    u = cc11001100_hook("u", {}, "var-init"),
    d = cc11001100_hook("d", n(63), "var-init");
  u.setTheme = cc11001100_hook("u.setTheme", function (e) {
    void 0 !== e && (i.Theme = cc11001100_hook("i.Theme", e, "assign"), i.status && (s.doEventForceAll(), d.sendMessage({
      theme: cc11001100_hook("theme", e, "object-key-init")
    })));
  }, "assign"), u.PreventMode = cc11001100_hook("u.PreventMode", function (e) {
    e = cc11001100_hook("e", c.setMode(e), "assign"), s.doEventForceAll(), d.sendMessage({
      mode: cc11001100_hook("mode", e, "object-key-init")
    });
  }, "assign"), u.setVoiceEnable = cc11001100_hook("u.setVoiceEnable", function (e) {
    void 0 !== e && (i.voice.enable = cc11001100_hook("i.voice.enable", e, "assign"), e || o.stop(), d.sendMessage({
      voiceEnable: cc11001100_hook("voiceEnable", e, "object-key-init")
    }));
  }, "assign"), u.setVoiceRate = cc11001100_hook("u.setVoiceRate", function (e) {
    void 0 !== e && (i.voice.rate = cc11001100_hook("i.voice.rate", e, "assign"), d.sendMessage({
      voiceRate: cc11001100_hook("voiceRate", e, "object-key-init")
    }));
  }, "assign"), u.setFontScale = cc11001100_hook("u.setFontScale", function (e) {
    "number" == typeof e && (r.fontScale(e), i.status && (a.setBodyTran(), d.sendMessage({
      fontScale: cc11001100_hook("fontScale", e, "object-key-init")
    })));
  }, "assign"), u.start = cc11001100_hook("u.start", function () {
    i.oldFixedStatus = cc11001100_hook("i.oldFixedStatus", !0, "assign"), window[window.ariaSdkName].start(), d.sendMessage({
      status: cc11001100_hook("status", !0, "object-key-init")
    });
  }, "assign"), u.end = cc11001100_hook("u.end", function () {
    l.end(), d.sendMessage({
      status: cc11001100_hook("status", !1, "object-key-init")
    });
  }, "assign"), e.exports = cc11001100_hook("e.exports", u, "assign");
},, function (e, t, n) {
  window.ariaSdkName = cc11001100_hook("window.ariaSdkName", "aria", "assign"), n(85);
}]);