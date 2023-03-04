/*! @sentry/browser 5.6.1 (1936ddd7) | https://github.com/getsentry/sentry-javascript */
var Sentry = cc11001100_hook("Sentry", function (n) {
  var t = function (n, r) {
    return (t = cc11001100_hook("t", Object.setPrototypeOf || {
      __proto__: cc11001100_hook("__proto__", [], "object-key-init")
    } instanceof Array && function (n, t) {
      n.__proto__ = cc11001100_hook("n.__proto__", t, "assign");
    } || function (n, t) {
      for (var r in t) t.hasOwnProperty(r) && (n[r] = cc11001100_hook("n[r]", t[r], "assign"));
    }, "assign"))(n, r);
  };
  function r(n, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    function e() {
      this.constructor = cc11001100_hook("this.constructor", n, "assign");
    }
    t(n, r), n.prototype = cc11001100_hook("n.prototype", null === r ? Object.create(r) : (e.prototype = cc11001100_hook("e.prototype", r.prototype, "assign"), new e()), "assign");
  }
  var e,
    i,
    o,
    u = function () {
      return (u = cc11001100_hook("u", Object.assign || function (n) {
        for (var t, r = cc11001100_hook("r", 1, "var-init"), e = cc11001100_hook("e", arguments.length, "var-init"); r < e; r++) for (var i in t = cc11001100_hook("t", arguments[r], "assign")) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = cc11001100_hook("n[i]", t[i], "assign"));
        return n;
      }, "assign")).apply(this, arguments);
    };
  function c(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", "function" == typeof Symbol && n[Symbol.iterator], "var-init");
    if (!r) return n;
    var e,
      i,
      o = cc11001100_hook("o", r.call(n), "var-init"),
      u = cc11001100_hook("u", [], "var-init");
    try {
      for (; (void 0 === t || t-- > 0) && !(e = cc11001100_hook("e", o.next(), "assign")).done;) u.push(e.value);
    } catch (n) {
      i = cc11001100_hook("i", {
        error: cc11001100_hook("error", n, "object-key-init")
      }, "assign");
    } finally {
      try {
        e && !e.done && (r = cc11001100_hook("r", o.return, "assign")) && r.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return u;
  }
  function s() {
    for (var n = cc11001100_hook("n", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) n = cc11001100_hook("n", n.concat(c(arguments[t])), "assign");
    return n;
  }
  !function (n) {
    n[n.None = cc11001100_hook("n.None", 0, "assign")] = cc11001100_hook("n[n.None = 0]", "None", "assign"), n[n.Error = cc11001100_hook("n.Error", 1, "assign")] = cc11001100_hook("n[n.Error = 1]", "Error", "assign"), n[n.Debug = cc11001100_hook("n.Debug", 2, "assign")] = cc11001100_hook("n[n.Debug = 2]", "Debug", "assign"), n[n.Verbose = cc11001100_hook("n.Verbose", 3, "assign")] = cc11001100_hook("n[n.Verbose = 3]", "Verbose", "assign");
  }(e || (e = cc11001100_hook("e", {}, "assign"))), (i = cc11001100_hook("i", n.Severity || (n.Severity = cc11001100_hook("n.Severity", {}, "assign")), "assign")).Fatal = cc11001100_hook("(i = n.Severity || (n.Severity = {})).Fatal", "fatal", "assign"), i.Error = cc11001100_hook("i.Error", "error", "assign"), i.Warning = cc11001100_hook("i.Warning", "warning", "assign"), i.Log = cc11001100_hook("i.Log", "log", "assign"), i.Info = cc11001100_hook("i.Info", "info", "assign"), i.Debug = cc11001100_hook("i.Debug", "debug", "assign"), i.Critical = cc11001100_hook("i.Critical", "critical", "assign"), function (n) {
    n.fromString = cc11001100_hook("n.fromString", function (t) {
      switch (t) {
        case "debug":
          return n.Debug;
        case "info":
          return n.Info;
        case "warn":
        case "warning":
          return n.Warning;
        case "error":
          return n.Error;
        case "fatal":
          return n.Fatal;
        case "critical":
          return n.Critical;
        case "log":
        default:
          return n.Log;
      }
    }, "assign");
  }(n.Severity || (n.Severity = cc11001100_hook("n.Severity", {}, "assign"))), (o = cc11001100_hook("o", n.Status || (n.Status = cc11001100_hook("n.Status", {}, "assign")), "assign")).Unknown = cc11001100_hook("(o = n.Status || (n.Status = {})).Unknown", "unknown", "assign"), o.Skipped = cc11001100_hook("o.Skipped", "skipped", "assign"), o.Success = cc11001100_hook("o.Success", "success", "assign"), o.RateLimit = cc11001100_hook("o.RateLimit", "rate_limit", "assign"), o.Invalid = cc11001100_hook("o.Invalid", "invalid", "assign"), o.Failed = cc11001100_hook("o.Failed", "failed", "assign"), function (n) {
    n.fromHttpCode = cc11001100_hook("n.fromHttpCode", function (t) {
      return t >= 200 && t < 300 ? n.Success : 429 === t ? n.RateLimit : t >= 400 && t < 500 ? n.Invalid : t >= 500 ? n.Failed : n.Unknown;
    }, "assign");
  }(n.Status || (n.Status = cc11001100_hook("n.Status", {}, "assign")));
  var a = cc11001100_hook("a", Object.setPrototypeOf || ({
    __proto__: cc11001100_hook("__proto__", [], "object-key-init")
  } instanceof Array ? function (n, t) {
    return n.__proto__ = cc11001100_hook("n.__proto__", t, "assign"), n;
  } : function (n, t) {
    for (var r in t) n.hasOwnProperty(r) || (n[r] = cc11001100_hook("n[r]", t[r], "assign"));
    return n;
  }), "var-init");
  var f = cc11001100_hook("f", function (n) {
    function t(t) {
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", this.constructor, "var-init"),
        e = cc11001100_hook("e", n.call(this, t) || this, "var-init");
      return e.message = cc11001100_hook("e.message", t, "assign"), e.name = cc11001100_hook("e.name", r.prototype.constructor.name, "assign"), a(e, r.prototype), e;
    }
    return r(t, n), t;
  }(Error), "var-init");
  function h(n) {
    cc11001100_hook("n", n, "function-parameter");
    switch (Object.prototype.toString.call(n)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return n instanceof Error;
    }
  }
  function l(n) {
    cc11001100_hook("n", n, "function-parameter");
    return "[object ErrorEvent]" === Object.prototype.toString.call(n);
  }
  function v(n) {
    cc11001100_hook("n", n, "function-parameter");
    return "[object DOMError]" === Object.prototype.toString.call(n);
  }
  function d(n) {
    cc11001100_hook("n", n, "function-parameter");
    return "[object String]" === Object.prototype.toString.call(n);
  }
  function p(n) {
    cc11001100_hook("n", n, "function-parameter");
    return null === n || "object" != typeof n && "function" != typeof n;
  }
  function m(n) {
    cc11001100_hook("n", n, "function-parameter");
    return "[object Object]" === Object.prototype.toString.call(n);
  }
  function y(n) {
    cc11001100_hook("n", n, "function-parameter");
    return Boolean(n && n.then && "function" == typeof n.then);
  }
  var b = cc11001100_hook("b", {}, "var-init");
  function w() {
    return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0) ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : b;
  }
  function g() {
    var n = cc11001100_hook("n", w(), "var-init"),
      t = cc11001100_hook("t", n.crypto || n.msCrypto, "var-init");
    if (void 0 !== t && t.getRandomValues) {
      var r = cc11001100_hook("r", new Uint16Array(8), "var-init");
      t.getRandomValues(r), r[3] = cc11001100_hook("r[3]", 4095 & r[3] | 16384, "assign"), r[4] = cc11001100_hook("r[4]", 16383 & r[4] | 32768, "assign");
      var e = function (n) {
        for (var t = cc11001100_hook("t", n.toString(16), "var-init"); t.length < 4;) t = cc11001100_hook("t", "0" + t, "assign");
        return t;
      };
      return e(r[0]) + e(r[1]) + e(r[2]) + e(r[3]) + e(r[4]) + e(r[5]) + e(r[6]) + e(r[7]);
    }
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (n) {
      var t = cc11001100_hook("t", 16 * Math.random() | 0, "var-init");
      return ("x" === n ? t : 3 & t | 8).toString(16);
    });
  }
  function E(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (!n) return {};
    var t = cc11001100_hook("t", n.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/), "var-init");
    if (!t) return {};
    var r = cc11001100_hook("r", t[6] || "", "var-init"),
      e = cc11001100_hook("e", t[8] || "", "var-init");
    return {
      host: cc11001100_hook("host", t[4], "object-key-init"),
      path: cc11001100_hook("path", t[5], "object-key-init"),
      protocol: cc11001100_hook("protocol", t[2], "object-key-init"),
      relative: cc11001100_hook("relative", t[5] + r + e, "object-key-init")
    };
  }
  function j(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (n.message) return n.message;
    if (n.exception && n.exception.values && n.exception.values[0]) {
      var t = cc11001100_hook("t", n.exception.values[0], "var-init");
      return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || n.event_id || "<unknown>";
    }
    return n.event_id || "<unknown>";
  }
  function x(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", w(), "var-init");
    if (!("console" in t)) return n();
    var r = cc11001100_hook("r", t.console, "var-init"),
      e = cc11001100_hook("e", {}, "var-init");
    ["debug", "info", "warn", "error", "log", "assert"].forEach(function (n) {
      n in t.console && r[n].__sentry__ && (e[n] = cc11001100_hook("e[n]", r[n].__sentry_wrapped__, "assign"), r[n] = cc11001100_hook("r[n]", r[n].__sentry_original__, "assign"));
    });
    var i = cc11001100_hook("i", n(), "var-init");
    return Object.keys(e).forEach(function (n) {
      r[n] = cc11001100_hook("r[n]", e[n], "assign");
    }), i;
  }
  function _(n, t, r, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    void 0 === e && (e = cc11001100_hook("e", {
      handled: cc11001100_hook("handled", !0, "object-key-init"),
      type: cc11001100_hook("type", "generic", "object-key-init")
    }, "assign")), n.exception = cc11001100_hook("n.exception", n.exception || {}, "assign"), n.exception.values = cc11001100_hook("n.exception.values", n.exception.values || [], "assign"), n.exception.values[0] = cc11001100_hook("n.exception.values[0]", n.exception.values[0] || {}, "assign"), n.exception.values[0].value = cc11001100_hook("n.exception.values[0].value", n.exception.values[0].value || t || "", "assign"), n.exception.values[0].type = cc11001100_hook("n.exception.values[0].type", n.exception.values[0].type || r || "Error", "assign"), n.exception.values[0].mechanism = cc11001100_hook("n.exception.values[0].mechanism", n.exception.values[0].mechanism || e, "assign");
  }
  var S = cc11001100_hook("S", w(), "var-init"),
    O = cc11001100_hook("O", "Sentry Logger ", "var-init"),
    k = cc11001100_hook("k", function () {
      function n() {
        this.t = cc11001100_hook("this.t", !1, "assign");
      }
      return n.prototype.disable = cc11001100_hook("n.prototype.disable", function () {
        this.t = cc11001100_hook("this.t", !1, "assign");
      }, "assign"), n.prototype.enable = cc11001100_hook("n.prototype.enable", function () {
        this.t = cc11001100_hook("this.t", !0, "assign");
      }, "assign"), n.prototype.log = cc11001100_hook("n.prototype.log", function () {
        for (var n = cc11001100_hook("n", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) n[t] = cc11001100_hook("n[t]", arguments[t], "assign");
        this.t && x(function () {
          S.console.log(O + "[Log]: " + n.join(" "));
        });
      }, "assign"), n.prototype.warn = cc11001100_hook("n.prototype.warn", function () {
        for (var n = cc11001100_hook("n", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) n[t] = cc11001100_hook("n[t]", arguments[t], "assign");
        this.t && x(function () {
          S.console.warn(O + "[Warn]: " + n.join(" "));
        });
      }, "assign"), n.prototype.error = cc11001100_hook("n.prototype.error", function () {
        for (var n = cc11001100_hook("n", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) n[t] = cc11001100_hook("n[t]", arguments[t], "assign");
        this.t && x(function () {
          S.console.error(O + "[Error]: " + n.join(" "));
        });
      }, "assign"), n;
    }(), "var-init");
  S.__SENTRY__ = cc11001100_hook("S.__SENTRY__", S.__SENTRY__ || {}, "assign");
  var T = cc11001100_hook("T", S.__SENTRY__.logger || (S.__SENTRY__.logger = cc11001100_hook("S.__SENTRY__.logger", new k(), "assign")), "var-init"),
    R = cc11001100_hook("R", function () {
      function n() {
        this.i = cc11001100_hook("this.i", "function" == typeof WeakSet, "assign"), this.o = cc11001100_hook("this.o", this.i ? new WeakSet() : [], "assign");
      }
      return n.prototype.memoize = cc11001100_hook("n.prototype.memoize", function (n) {
        if (this.i) return !!this.o.has(n) || (this.o.add(n), !1);
        for (var t = cc11001100_hook("t", 0, "var-init"); t < this.o.length; t++) {
          if (this.o[t] === n) return !0;
        }
        return this.o.push(n), !1;
      }, "assign"), n.prototype.unmemoize = cc11001100_hook("n.prototype.unmemoize", function (n) {
        if (this.i) this.o.delete(n);else for (var t = cc11001100_hook("t", 0, "var-init"); t < this.o.length; t++) if (this.o[t] === n) {
          this.o.splice(t, 1);
          break;
        }
      }, "assign"), n;
    }(), "var-init");
  function D(n, t, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (t in n) {
      var e = cc11001100_hook("e", n[t], "var-init"),
        i = cc11001100_hook("i", r(e), "var-init");
      if ("function" == typeof i) try {
        i.prototype = cc11001100_hook("i.prototype", i.prototype || {}, "assign"), Object.defineProperties(i, {
          __sentry__: {
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            value: cc11001100_hook("value", !0, "object-key-init")
          },
          __sentry_original__: {
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            value: cc11001100_hook("value", e, "object-key-init")
          },
          __sentry_wrapped__: {
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            value: cc11001100_hook("value", i, "object-key-init")
          }
        });
      } catch (n) {}
      n[t] = cc11001100_hook("n[t]", i, "assign");
    }
  }
  function I(n) {
    cc11001100_hook("n", n, "function-parameter");
    return function (n) {
      return ~-encodeURI(n).split(/%..|./).length;
    }(JSON.stringify(n));
  }
  function N(n, t, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    void 0 === t && (t = cc11001100_hook("t", 3, "assign")), void 0 === r && (r = cc11001100_hook("r", 102400, "assign"));
    var e = cc11001100_hook("e", U(n, t), "var-init");
    return I(e) > r ? N(n, t - 1, r) : e;
  }
  function C(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return "domain" === t && "object" == typeof n && n.u ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : "undefined" != typeof global && n === global ? "[Global]" : "undefined" != typeof window && n === window ? "[Window]" : "undefined" != typeof document && n === document ? "[Document]" : "undefined" != typeof Event && n instanceof Event ? Object.getPrototypeOf(n) ? n.constructor.name : "Event" : m(r = cc11001100_hook("r", n, "assign")) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r ? "[SyntheticEvent]" : Number.isNaN(n) ? "[NaN]" : void 0 === n ? "[undefined]" : "function" == typeof n ? "[Function: " + (n.name || "<unknown-function-name>") + "]" : n;
    var r;
  }
  function A(n, t, r, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (void 0 === r && (r = cc11001100_hook("r", 1 / 0, "assign")), void 0 === e && (e = cc11001100_hook("e", new R(), "assign")), 0 === r) return function (n) {
      var t = cc11001100_hook("t", Object.prototype.toString.call(n), "var-init");
      if ("string" == typeof n) return n;
      if ("[object Object]" === t) return "[Object]";
      if ("[object Array]" === t) return "[Array]";
      var r = cc11001100_hook("r", C(n), "var-init");
      return p(r) ? r : t;
    }(t);
    if (null != t && "function" == typeof t.toJSON) return t.toJSON();
    var i = cc11001100_hook("i", C(t, n), "var-init");
    if (p(i)) return i;
    var o = cc11001100_hook("o", h(t) ? function (n) {
        var t = cc11001100_hook("t", {
          message: cc11001100_hook("message", n.message, "object-key-init"),
          name: cc11001100_hook("name", n.name, "object-key-init"),
          stack: cc11001100_hook("stack", n.stack, "object-key-init")
        }, "var-init");
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = cc11001100_hook("t[r]", n[r], "assign"));
        return t;
      }(t) : t, "var-init"),
      u = cc11001100_hook("u", Array.isArray(t) ? [] : {}, "var-init");
    if (e.memoize(t)) return "[Circular ~]";
    for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (u[c] = cc11001100_hook("u[c]", A(c, o[c], r - 1, e), "assign"));
    return e.unmemoize(t), u;
  }
  function U(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    try {
      return JSON.parse(JSON.stringify(n, function (n, r) {
        return A(n, r, t);
      }));
    } catch (n) {
      return "**non-serializable**";
    }
  }
  var L,
    M = cc11001100_hook("M", function () {
      function n(n) {
        cc11001100_hook("n", n, "function-parameter");
        this.s = cc11001100_hook("this.s", n, "assign"), this.h = cc11001100_hook("this.h", [], "assign");
      }
      return n.prototype.isReady = cc11001100_hook("n.prototype.isReady", function () {
        return void 0 === this.s || this.length() < this.s;
      }, "assign"), n.prototype.add = cc11001100_hook("n.prototype.add", function (n) {
        var t = cc11001100_hook("t", this, "var-init");
        return this.isReady() ? (-1 === this.h.indexOf(n) && this.h.push(n), n.then(function () {
          return t.remove(n);
        }).catch(function () {
          return t.remove(n).catch(function () {});
        }), n) : Promise.reject(new f("Not adding Promise due to buffer limit reached."));
      }, "assign"), n.prototype.remove = cc11001100_hook("n.prototype.remove", function (n) {
        return this.h.splice(this.h.indexOf(n), 1)[0];
      }, "assign"), n.prototype.length = cc11001100_hook("n.prototype.length", function () {
        return this.h.length;
      }, "assign"), n.prototype.drain = cc11001100_hook("n.prototype.drain", function (n) {
        var t = cc11001100_hook("t", this, "var-init");
        return new Promise(function (r) {
          var e = cc11001100_hook("e", setTimeout(function () {
            n && n > 0 && r(!1);
          }, n), "var-init");
          Promise.all(t.h).then(function () {
            clearTimeout(e), r(!0);
          }).catch(function () {
            r(!0);
          });
        });
      }, "assign"), n;
    }(), "var-init");
  function F(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return void 0 === t && (t = cc11001100_hook("t", 0, "assign")), "string" != typeof n || 0 === t ? n : n.length <= t ? n : n.substr(0, t) + "...";
  }
  function P(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (!Array.isArray(n)) return "";
    for (var r = cc11001100_hook("r", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < n.length; e++) {
      var i = cc11001100_hook("i", n[e], "var-init");
      try {
        r.push(String(i));
      } catch (n) {
        r.push("[value cannot be serialized]");
      }
    }
    return r.join(t);
  }
  function $(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (void 0 === t && (t = cc11001100_hook("t", 40, "assign")), !n.length) return "[object has no keys]";
    if (n[0].length >= t) return F(n[0], t);
    for (var r = cc11001100_hook("r", n.length, "var-init"); r > 0; r--) {
      var e = cc11001100_hook("e", n.slice(0, r).join(", "), "var-init");
      if (!(e.length > t)) return r === n.length ? e : F(e, t);
    }
    return "";
  }
  function q(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return r = cc11001100_hook("r", t, "assign"), "[object RegExp]" === Object.prototype.toString.call(r) ? t.test(n) : "string" == typeof t && n.includes(t);
    var r;
  }
  function H() {
    if (!("fetch" in w())) return !1;
    try {
      return new Headers(), new Request(""), new Response(), !0;
    } catch (n) {
      return !1;
    }
  }
  function W() {
    if (!H()) return !1;
    try {
      return new Request("_", {
        referrerPolicy: cc11001100_hook("referrerPolicy", "origin", "object-key-init")
      }), !0;
    } catch (n) {
      return !1;
    }
  }
  !function (n) {
    n.PENDING = cc11001100_hook("n.PENDING", "PENDING", "assign"), n.RESOLVED = cc11001100_hook("n.RESOLVED", "RESOLVED", "assign"), n.REJECTED = cc11001100_hook("n.REJECTED", "REJECTED", "assign");
  }(L || (L = cc11001100_hook("L", {}, "assign")));
  var B = cc11001100_hook("B", function () {
      function n(n) {
        cc11001100_hook("n", n, "function-parameter");
        var t = cc11001100_hook("t", this, "var-init");
        this.l = cc11001100_hook("this.l", L.PENDING, "assign"), this.v = cc11001100_hook("this.v", [], "assign"), this.p = cc11001100_hook("this.p", function (n) {
          t.m(n, L.RESOLVED);
        }, "assign"), this.g = cc11001100_hook("this.g", function (n) {
          t.m(n, L.REJECTED);
        }, "assign"), this.m = cc11001100_hook("this.m", function (n, r) {
          t.l === L.PENDING && (y(n) ? n.then(t.p, t.g) : (t.j = cc11001100_hook("t.j", n, "assign"), t.l = cc11001100_hook("t.l", r, "assign"), t._()));
        }, "assign"), this._ = cc11001100_hook("this._", function () {
          t.l !== L.PENDING && (t.l === L.REJECTED ? t.v.forEach(function (n) {
            return n.onFail && n.onFail(t.j);
          }) : t.v.forEach(function (n) {
            return n.onSuccess && n.onSuccess(t.j);
          }), t.v = cc11001100_hook("t.v", [], "assign"));
        }, "assign"), this.S = cc11001100_hook("this.S", function (n) {
          t.v = cc11001100_hook("t.v", t.v.concat(n), "assign"), t._();
        }, "assign");
        try {
          n(this.p, this.g);
        } catch (n) {
          this.g(n);
        }
      }
      return n.prototype.then = cc11001100_hook("n.prototype.then", function (t, r) {
        var e = cc11001100_hook("e", this, "var-init");
        return new n(function (n, i) {
          e.S({
            onFail: function (t) {
              if (r) try {
                return void n(r(t));
              } catch (n) {
                return void i(n);
              } else i(t);
            },
            onSuccess: function (r) {
              if (t) try {
                return void n(t(r));
              } catch (n) {
                return void i(n);
              } else n(r);
            }
          });
        });
      }, "assign"), n.prototype.catch = cc11001100_hook("n.prototype.catch", function (n) {
        return this.then(function (n) {
          return n;
        }, n);
      }, "assign"), n.prototype.toString = cc11001100_hook("n.prototype.toString", function () {
        return "[object SyncPromise]";
      }, "assign"), n.resolve = cc11001100_hook("n.resolve", function (t) {
        return new n(function (n) {
          n(t);
        });
      }, "assign"), n.reject = cc11001100_hook("n.reject", function (t) {
        return new n(function (n, r) {
          r(t);
        });
      }, "assign"), n;
    }(), "var-init"),
    J = cc11001100_hook("J", /^[ \t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \t]*$/, "var-init"),
    X = cc11001100_hook("X", function () {
      function n(n, t, r, e) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        void 0 === n && (n = cc11001100_hook("n", g(), "assign")), void 0 === t && (t = cc11001100_hook("t", g().substring(16), "assign")), this.O = cc11001100_hook("this.O", n, "assign"), this.k = cc11001100_hook("this.k", t, "assign"), this.T = cc11001100_hook("this.T", r, "assign"), this.R = cc11001100_hook("this.R", e, "assign");
      }
      return n.prototype.setParent = cc11001100_hook("n.prototype.setParent", function (n) {
        return this.R = cc11001100_hook("this.R", n, "assign"), this;
      }, "assign"), n.prototype.setSampled = cc11001100_hook("n.prototype.setSampled", function (n) {
        return this.T = cc11001100_hook("this.T", n, "assign"), this;
      }, "assign"), n.fromTraceparent = cc11001100_hook("n.fromTraceparent", function (t) {
        var r = cc11001100_hook("r", t.match(J), "var-init");
        if (r) {
          var e = cc11001100_hook("e", void 0, "var-init");
          "1" === r[3] ? e = cc11001100_hook("e", !0, "assign") : "0" === r[3] && (e = cc11001100_hook("e", !1, "assign"));
          var i = cc11001100_hook("i", new n(r[1], r[2], e), "var-init");
          return new n(r[1], void 0, e, i);
        }
      }, "assign"), n.prototype.toTraceparent = cc11001100_hook("n.prototype.toTraceparent", function () {
        var n = cc11001100_hook("n", "", "var-init");
        return !0 === this.T ? n = cc11001100_hook("n", "-1", "assign") : !1 === this.T && (n = cc11001100_hook("n", "-0", "assign")), this.O + "-" + this.k + n;
      }, "assign"), n.prototype.toJSON = cc11001100_hook("n.prototype.toJSON", function () {
        return {
          parent: cc11001100_hook("parent", this.R && this.R.toJSON() || void 0, "object-key-init"),
          sampled: cc11001100_hook("sampled", this.T, "object-key-init"),
          span_id: cc11001100_hook("span_id", this.k, "object-key-init"),
          trace_id: cc11001100_hook("trace_id", this.O, "object-key-init")
        };
      }, "assign"), n;
    }(), "var-init"),
    z = cc11001100_hook("z", function () {
      function n() {
        this.D = cc11001100_hook("this.D", !1, "assign"), this.I = cc11001100_hook("this.I", [], "assign"), this.N = cc11001100_hook("this.N", [], "assign"), this.C = cc11001100_hook("this.C", [], "assign"), this.A = cc11001100_hook("this.A", {}, "assign"), this.U = cc11001100_hook("this.U", {}, "assign"), this.L = cc11001100_hook("this.L", {}, "assign"), this.M = cc11001100_hook("this.M", {}, "assign");
      }
      return n.prototype.addScopeListener = cc11001100_hook("n.prototype.addScopeListener", function (n) {
        this.I.push(n);
      }, "assign"), n.prototype.addEventProcessor = cc11001100_hook("n.prototype.addEventProcessor", function (n) {
        return this.N.push(n), this;
      }, "assign"), n.prototype.F = cc11001100_hook("n.prototype.F", function () {
        var n = cc11001100_hook("n", this, "var-init");
        this.D || (this.D = cc11001100_hook("this.D", !0, "assign"), setTimeout(function () {
          n.I.forEach(function (t) {
            t(n);
          }), n.D = cc11001100_hook("n.D", !1, "assign");
        }));
      }, "assign"), n.prototype.P = cc11001100_hook("n.prototype.P", function (n, t, r, e) {
        var i = cc11001100_hook("i", this, "var-init");
        return void 0 === e && (e = cc11001100_hook("e", 0, "assign")), new B(function (o, c) {
          var s = cc11001100_hook("s", n[e], "var-init");
          if (null === t || "function" != typeof s) o(t);else {
            var a = cc11001100_hook("a", s(u({}, t), r), "var-init");
            y(a) ? a.then(function (t) {
              return i.P(n, t, r, e + 1).then(o);
            }).catch(c) : i.P(n, a, r, e + 1).then(o).catch(c);
          }
        });
      }, "assign"), n.prototype.setUser = cc11001100_hook("n.prototype.setUser", function (n) {
        return this.A = cc11001100_hook("this.A", U(n), "assign"), this.F(), this;
      }, "assign"), n.prototype.setTags = cc11001100_hook("n.prototype.setTags", function (n) {
        return this.U = cc11001100_hook("this.U", u({}, this.U, U(n)), "assign"), this.F(), this;
      }, "assign"), n.prototype.setTag = cc11001100_hook("n.prototype.setTag", function (n, t) {
        var r;
        return this.U = cc11001100_hook("this.U", u({}, this.U, ((r = cc11001100_hook("r", {}, "assign"))[n] = cc11001100_hook("(r = {})[n]", U(t), "assign"), r)), "assign"), this.F(), this;
      }, "assign"), n.prototype.setExtras = cc11001100_hook("n.prototype.setExtras", function (n) {
        return this.L = cc11001100_hook("this.L", u({}, this.L, U(n)), "assign"), this.F(), this;
      }, "assign"), n.prototype.setExtra = cc11001100_hook("n.prototype.setExtra", function (n, t) {
        var r;
        return this.L = cc11001100_hook("this.L", u({}, this.L, ((r = cc11001100_hook("r", {}, "assign"))[n] = cc11001100_hook("(r = {})[n]", U(t), "assign"), r)), "assign"), this.F(), this;
      }, "assign"), n.prototype.setFingerprint = cc11001100_hook("n.prototype.setFingerprint", function (n) {
        return this.$ = cc11001100_hook("this.$", U(n), "assign"), this.F(), this;
      }, "assign"), n.prototype.setLevel = cc11001100_hook("n.prototype.setLevel", function (n) {
        return this.q = cc11001100_hook("this.q", U(n), "assign"), this.F(), this;
      }, "assign"), n.prototype.setTransaction = cc11001100_hook("n.prototype.setTransaction", function (n) {
        return this.H = cc11001100_hook("this.H", n, "assign"), this.F(), this;
      }, "assign"), n.prototype.setContext = cc11001100_hook("n.prototype.setContext", function (n, t) {
        return this.M[n] = cc11001100_hook("this.M[n]", t ? U(t) : void 0, "assign"), this.F(), this;
      }, "assign"), n.prototype.setSpan = cc11001100_hook("n.prototype.setSpan", function (n) {
        return this.W = cc11001100_hook("this.W", n, "assign"), this.F(), this;
      }, "assign"), n.prototype.startSpan = cc11001100_hook("n.prototype.startSpan", function (n) {
        var t = cc11001100_hook("t", new X(), "var-init");
        return t.setParent(n), this.setSpan(t), t;
      }, "assign"), n.prototype.getSpan = cc11001100_hook("n.prototype.getSpan", function () {
        return this.W;
      }, "assign"), n.clone = cc11001100_hook("n.clone", function (t) {
        var r = cc11001100_hook("r", new n(), "var-init");
        return Object.assign(r, t, {
          I: cc11001100_hook("I", [], "object-key-init")
        }), t && (r.C = cc11001100_hook("r.C", s(t.C), "assign"), r.U = cc11001100_hook("r.U", u({}, t.U), "assign"), r.L = cc11001100_hook("r.L", u({}, t.L), "assign"), r.M = cc11001100_hook("r.M", u({}, t.M), "assign"), r.A = cc11001100_hook("r.A", t.A, "assign"), r.q = cc11001100_hook("r.q", t.q, "assign"), r.W = cc11001100_hook("r.W", t.W, "assign"), r.H = cc11001100_hook("r.H", t.H, "assign"), r.$ = cc11001100_hook("r.$", t.$, "assign"), r.N = cc11001100_hook("r.N", s(t.N), "assign")), r;
      }, "assign"), n.prototype.clear = cc11001100_hook("n.prototype.clear", function () {
        return this.C = cc11001100_hook("this.C", [], "assign"), this.U = cc11001100_hook("this.U", {}, "assign"), this.L = cc11001100_hook("this.L", {}, "assign"), this.A = cc11001100_hook("this.A", {}, "assign"), this.M = cc11001100_hook("this.M", {}, "assign"), this.q = cc11001100_hook("this.q", void 0, "assign"), this.H = cc11001100_hook("this.H", void 0, "assign"), this.$ = cc11001100_hook("this.$", void 0, "assign"), this.W = cc11001100_hook("this.W", void 0, "assign"), this.F(), this;
      }, "assign"), n.prototype.addBreadcrumb = cc11001100_hook("n.prototype.addBreadcrumb", function (n, t) {
        var r = cc11001100_hook("r", new Date().getTime() / 1e3, "var-init"),
          e = cc11001100_hook("e", u({
            timestamp: cc11001100_hook("timestamp", r, "object-key-init")
          }, n), "var-init");
        return this.C = cc11001100_hook("this.C", void 0 !== t && t >= 0 ? s(this.C, [U(e)]).slice(-t) : s(this.C, [U(e)]), "assign"), this.F(), this;
      }, "assign"), n.prototype.clearBreadcrumbs = cc11001100_hook("n.prototype.clearBreadcrumbs", function () {
        return this.C = cc11001100_hook("this.C", [], "assign"), this.F(), this;
      }, "assign"), n.prototype.B = cc11001100_hook("n.prototype.B", function (n) {
        n.fingerprint = cc11001100_hook("n.fingerprint", n.fingerprint ? Array.isArray(n.fingerprint) ? n.fingerprint : [n.fingerprint] : [], "assign"), this.$ && (n.fingerprint = cc11001100_hook("n.fingerprint", n.fingerprint.concat(this.$), "assign")), n.fingerprint && !n.fingerprint.length && delete n.fingerprint;
      }, "assign"), n.prototype.applyToEvent = cc11001100_hook("n.prototype.applyToEvent", function (n, t) {
        return this.L && Object.keys(this.L).length && (n.extra = cc11001100_hook("n.extra", u({}, this.L, n.extra), "assign")), this.U && Object.keys(this.U).length && (n.tags = cc11001100_hook("n.tags", u({}, this.U, n.tags), "assign")), this.A && Object.keys(this.A).length && (n.user = cc11001100_hook("n.user", u({}, this.A, n.user), "assign")), this.M && Object.keys(this.M).length && (n.contexts = cc11001100_hook("n.contexts", u({}, this.M, n.contexts), "assign")), this.q && (n.level = cc11001100_hook("n.level", this.q, "assign")), this.H && (n.transaction = cc11001100_hook("n.transaction", this.H, "assign")), this.W && (n.contexts = cc11001100_hook("n.contexts", n.contexts || {}, "assign"), n.contexts.trace = cc11001100_hook("n.contexts.trace", this.W, "assign")), this.B(n), n.breadcrumbs = cc11001100_hook("n.breadcrumbs", s(n.breadcrumbs || [], this.C), "assign"), n.breadcrumbs = cc11001100_hook("n.breadcrumbs", n.breadcrumbs.length > 0 ? n.breadcrumbs : void 0, "assign"), this.P(s(G(), this.N), n, t);
      }, "assign"), n;
    }(), "var-init");
  function G() {
    var n = cc11001100_hook("n", w(), "var-init");
    return n.__SENTRY__ = cc11001100_hook("n.__SENTRY__", n.__SENTRY__ || {}, "assign"), n.__SENTRY__.globalEventProcessors = cc11001100_hook("n.__SENTRY__.globalEventProcessors", n.__SENTRY__.globalEventProcessors || [], "assign"), n.__SENTRY__.globalEventProcessors;
  }
  function V(n) {
    cc11001100_hook("n", n, "function-parameter");
    G().push(n);
  }
  var K = cc11001100_hook("K", 3, "var-init"),
    Z = cc11001100_hook("Z", function () {
      function n(n, t, r) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        void 0 === t && (t = cc11001100_hook("t", new z(), "assign")), void 0 === r && (r = cc11001100_hook("r", K, "assign")), this.J = cc11001100_hook("this.J", r, "assign"), this.X = cc11001100_hook("this.X", [], "assign"), this.X.push({
          client: cc11001100_hook("client", n, "object-key-init"),
          scope: cc11001100_hook("scope", t, "object-key-init")
        });
      }
      return n.prototype.G = cc11001100_hook("n.prototype.G", function (n) {
        for (var t, r = cc11001100_hook("r", [], "var-init"), e = cc11001100_hook("e", 1, "var-init"); e < arguments.length; e++) r[e - 1] = cc11001100_hook("r[e - 1]", arguments[e], "assign");
        var i = cc11001100_hook("i", this.getStackTop(), "var-init");
        i && i.client && i.client[n] && (t = cc11001100_hook("t", i.client, "assign"))[n].apply(t, s(r, [i.scope]));
      }, "assign"), n.prototype.isOlderThan = cc11001100_hook("n.prototype.isOlderThan", function (n) {
        return this.J < n;
      }, "assign"), n.prototype.bindClient = cc11001100_hook("n.prototype.bindClient", function (n) {
        this.getStackTop().client = cc11001100_hook("this.getStackTop().client", n, "assign");
      }, "assign"), n.prototype.pushScope = cc11001100_hook("n.prototype.pushScope", function () {
        var n = cc11001100_hook("n", this.getStack(), "var-init"),
          t = cc11001100_hook("t", n.length > 0 ? n[n.length - 1].scope : void 0, "var-init"),
          r = cc11001100_hook("r", z.clone(t), "var-init");
        return this.getStack().push({
          client: cc11001100_hook("client", this.getClient(), "object-key-init"),
          scope: cc11001100_hook("scope", r, "object-key-init")
        }), r;
      }, "assign"), n.prototype.popScope = cc11001100_hook("n.prototype.popScope", function () {
        return void 0 !== this.getStack().pop();
      }, "assign"), n.prototype.withScope = cc11001100_hook("n.prototype.withScope", function (n) {
        var t = cc11001100_hook("t", this.pushScope(), "var-init");
        try {
          n(t);
        } finally {
          this.popScope();
        }
      }, "assign"), n.prototype.getClient = cc11001100_hook("n.prototype.getClient", function () {
        return this.getStackTop().client;
      }, "assign"), n.prototype.getScope = cc11001100_hook("n.prototype.getScope", function () {
        return this.getStackTop().scope;
      }, "assign"), n.prototype.getStack = cc11001100_hook("n.prototype.getStack", function () {
        return this.X;
      }, "assign"), n.prototype.getStackTop = cc11001100_hook("n.prototype.getStackTop", function () {
        return this.X[this.X.length - 1];
      }, "assign"), n.prototype.captureException = cc11001100_hook("n.prototype.captureException", function (n, t) {
        var r = cc11001100_hook("r", this.V = cc11001100_hook("this.V", g(), "assign"), "var-init"),
          e = cc11001100_hook("e", t, "var-init");
        if (!t) {
          var i = cc11001100_hook("i", void 0, "var-init");
          try {
            throw new Error("Sentry syntheticException");
          } catch (n) {
            i = cc11001100_hook("i", n, "assign");
          }
          e = cc11001100_hook("e", {
            originalException: cc11001100_hook("originalException", n, "object-key-init"),
            syntheticException: cc11001100_hook("syntheticException", i, "object-key-init")
          }, "assign");
        }
        return this.G("captureException", n, u({}, e, {
          event_id: cc11001100_hook("event_id", r, "object-key-init")
        })), r;
      }, "assign"), n.prototype.captureMessage = cc11001100_hook("n.prototype.captureMessage", function (n, t, r) {
        var e = cc11001100_hook("e", this.V = cc11001100_hook("this.V", g(), "assign"), "var-init"),
          i = cc11001100_hook("i", r, "var-init");
        if (!r) {
          var o = cc11001100_hook("o", void 0, "var-init");
          try {
            throw new Error(n);
          } catch (n) {
            o = cc11001100_hook("o", n, "assign");
          }
          i = cc11001100_hook("i", {
            originalException: cc11001100_hook("originalException", n, "object-key-init"),
            syntheticException: cc11001100_hook("syntheticException", o, "object-key-init")
          }, "assign");
        }
        return this.G("captureMessage", n, t, u({}, i, {
          event_id: cc11001100_hook("event_id", e, "object-key-init")
        })), e;
      }, "assign"), n.prototype.captureEvent = cc11001100_hook("n.prototype.captureEvent", function (n, t) {
        var r = cc11001100_hook("r", this.V = cc11001100_hook("this.V", g(), "assign"), "var-init");
        return this.G("captureEvent", n, u({}, t, {
          event_id: cc11001100_hook("event_id", r, "object-key-init")
        })), r;
      }, "assign"), n.prototype.lastEventId = cc11001100_hook("n.prototype.lastEventId", function () {
        return this.V;
      }, "assign"), n.prototype.addBreadcrumb = cc11001100_hook("n.prototype.addBreadcrumb", function (n, t) {
        var r = cc11001100_hook("r", this.getStackTop(), "var-init");
        if (r.scope && r.client) {
          var e = cc11001100_hook("e", r.client.getOptions && r.client.getOptions() || {}, "var-init"),
            i = cc11001100_hook("i", e.beforeBreadcrumb, "var-init"),
            o = cc11001100_hook("o", void 0 === i ? null : i, "var-init"),
            c = cc11001100_hook("c", e.maxBreadcrumbs, "var-init"),
            s = cc11001100_hook("s", void 0 === c ? 30 : c, "var-init");
          if (!(s <= 0)) {
            var a = cc11001100_hook("a", new Date().getTime() / 1e3, "var-init"),
              f = cc11001100_hook("f", u({
                timestamp: cc11001100_hook("timestamp", a, "object-key-init")
              }, n), "var-init"),
              h = cc11001100_hook("h", o ? x(function () {
                return o(f, t);
              }) : f, "var-init");
            null !== h && r.scope.addBreadcrumb(h, Math.min(s, 100));
          }
        }
      }, "assign"), n.prototype.setUser = cc11001100_hook("n.prototype.setUser", function (n) {
        var t = cc11001100_hook("t", this.getStackTop(), "var-init");
        t.scope && t.scope.setUser(n);
      }, "assign"), n.prototype.setTags = cc11001100_hook("n.prototype.setTags", function (n) {
        var t = cc11001100_hook("t", this.getStackTop(), "var-init");
        t.scope && t.scope.setTags(n);
      }, "assign"), n.prototype.setExtras = cc11001100_hook("n.prototype.setExtras", function (n) {
        var t = cc11001100_hook("t", this.getStackTop(), "var-init");
        t.scope && t.scope.setExtras(n);
      }, "assign"), n.prototype.setTag = cc11001100_hook("n.prototype.setTag", function (n, t) {
        var r = cc11001100_hook("r", this.getStackTop(), "var-init");
        r.scope && r.scope.setTag(n, t);
      }, "assign"), n.prototype.setExtra = cc11001100_hook("n.prototype.setExtra", function (n, t) {
        var r = cc11001100_hook("r", this.getStackTop(), "var-init");
        r.scope && r.scope.setExtra(n, t);
      }, "assign"), n.prototype.setContext = cc11001100_hook("n.prototype.setContext", function (n, t) {
        var r = cc11001100_hook("r", this.getStackTop(), "var-init");
        r.scope && r.scope.setContext(n, t);
      }, "assign"), n.prototype.configureScope = cc11001100_hook("n.prototype.configureScope", function (n) {
        var t = cc11001100_hook("t", this.getStackTop(), "var-init");
        t.scope && t.client && n(t.scope);
      }, "assign"), n.prototype.run = cc11001100_hook("n.prototype.run", function (n) {
        var t = cc11001100_hook("t", Y(this), "var-init");
        try {
          n(this);
        } finally {
          Y(t);
        }
      }, "assign"), n.prototype.getIntegration = cc11001100_hook("n.prototype.getIntegration", function (n) {
        var t = cc11001100_hook("t", this.getClient(), "var-init");
        if (!t) return null;
        try {
          return t.getIntegration(n);
        } catch (t) {
          return T.warn("Cannot retrieve integration " + n.id + " from the current Hub"), null;
        }
      }, "assign"), n.prototype.traceHeaders = cc11001100_hook("n.prototype.traceHeaders", function () {
        var n = cc11001100_hook("n", this.getStackTop(), "var-init");
        if (n.scope && n.client) {
          var t = cc11001100_hook("t", n.scope.getSpan(), "var-init");
          if (t) return {
            "sentry-trace": cc11001100_hook("sentry-trace", t.toTraceparent(), "object-key-init")
          };
        }
        return {};
      }, "assign"), n;
    }(), "var-init");
  function Q() {
    var n = cc11001100_hook("n", w(), "var-init");
    return n.__SENTRY__ = cc11001100_hook("n.__SENTRY__", n.__SENTRY__ || {
      hub: cc11001100_hook("hub", void 0, "object-key-init")
    }, "assign"), n;
  }
  function Y(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", Q(), "var-init"),
      r = cc11001100_hook("r", rn(t), "var-init");
    return en(t, n), r;
  }
  function nn() {
    var n,
      t,
      r = cc11001100_hook("r", Q(), "var-init");
    tn(r) && !rn(r).isOlderThan(K) || en(r, new Z());
    try {
      var e = cc11001100_hook("e", (n = cc11001100_hook("n", module, "assign"), t = cc11001100_hook("t", "domain", "assign"), n.require(t)).active, "var-init");
      if (!e) return rn(r);
      if (!tn(e) || rn(e).isOlderThan(K)) {
        var i = cc11001100_hook("i", rn(r).getStackTop(), "var-init");
        en(e, new Z(i.client, z.clone(i.scope)));
      }
      return rn(e);
    } catch (n) {
      return rn(r);
    }
  }
  function tn(n) {
    cc11001100_hook("n", n, "function-parameter");
    return !!(n && n.__SENTRY__ && n.__SENTRY__.hub);
  }
  function rn(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n && n.__SENTRY__ && n.__SENTRY__.hub ? n.__SENTRY__.hub : (n.__SENTRY__ = cc11001100_hook("n.__SENTRY__", n.__SENTRY__ || {}, "assign"), n.__SENTRY__.hub = cc11001100_hook("n.__SENTRY__.hub", new Z(), "assign"), n.__SENTRY__.hub);
  }
  function en(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return !!n && (n.__SENTRY__ = cc11001100_hook("n.__SENTRY__", n.__SENTRY__ || {}, "assign"), n.__SENTRY__.hub = cc11001100_hook("n.__SENTRY__.hub", t, "assign"), !0);
  }
  function on(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 1, "var-init"); r < arguments.length; r++) t[r - 1] = cc11001100_hook("t[r - 1]", arguments[r], "assign");
    var e = cc11001100_hook("e", nn(), "var-init");
    if (e && e[n]) return e[n].apply(e, s(t));
    throw new Error("No hub defined or " + n + " was not found on the hub, please open a bug report.");
  }
  function captureException(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t;
    try {
      throw new Error("Sentry syntheticException");
    } catch (n) {
      t = cc11001100_hook("t", n, "assign");
    }
    return on("captureException", n, {
      originalException: cc11001100_hook("originalException", n, "object-key-init"),
      syntheticException: cc11001100_hook("syntheticException", t, "object-key-init")
    });
  }
  function un(n) {
    cc11001100_hook("n", n, "function-parameter");
    on("withScope", n);
  }
  var cn = cc11001100_hook("cn", /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/, "var-init"),
    sn = cc11001100_hook("sn", function () {
      function n(n) {
        cc11001100_hook("n", n, "function-parameter");
        "string" == typeof n ? this.K(n) : this.Z(n), this.Y();
      }
      return n.prototype.toString = cc11001100_hook("n.prototype.toString", function (n) {
        void 0 === n && (n = cc11001100_hook("n", !1, "assign"));
        var t = cc11001100_hook("t", this, "var-init"),
          r = cc11001100_hook("r", t.host, "var-init"),
          e = cc11001100_hook("e", t.path, "var-init"),
          i = cc11001100_hook("i", t.pass, "var-init"),
          o = cc11001100_hook("o", t.port, "var-init"),
          u = cc11001100_hook("u", t.projectId, "var-init");
        return t.protocol + "://" + t.user + (n && i ? ":" + i : "") + "@" + r + (o ? ":" + o : "") + "/" + (e ? e + "/" : e) + u;
      }, "assign"), n.prototype.K = cc11001100_hook("n.prototype.K", function (n) {
        var t = cc11001100_hook("t", cn.exec(n), "var-init");
        if (!t) throw new f("Invalid Dsn");
        var r = cc11001100_hook("r", c(t.slice(1), 6), "var-init"),
          e = cc11001100_hook("e", r[0], "var-init"),
          i = cc11001100_hook("i", r[1], "var-init"),
          o = cc11001100_hook("o", r[2], "var-init"),
          u = cc11001100_hook("u", void 0 === o ? "" : o, "var-init"),
          s = cc11001100_hook("s", r[3], "var-init"),
          a = cc11001100_hook("a", r[4], "var-init"),
          h = cc11001100_hook("h", void 0 === a ? "" : a, "var-init"),
          l = cc11001100_hook("l", "", "var-init"),
          v = cc11001100_hook("v", r[5], "var-init"),
          d = cc11001100_hook("d", v.split("/"), "var-init");
        d.length > 1 && (l = cc11001100_hook("l", d.slice(0, -1).join("/"), "assign"), v = cc11001100_hook("v", d.pop(), "assign")), Object.assign(this, {
          host: cc11001100_hook("host", s, "object-key-init"),
          pass: cc11001100_hook("pass", u, "object-key-init"),
          path: cc11001100_hook("path", l, "object-key-init"),
          projectId: cc11001100_hook("projectId", v, "object-key-init"),
          port: cc11001100_hook("port", h, "object-key-init"),
          protocol: cc11001100_hook("protocol", e, "object-key-init"),
          user: cc11001100_hook("user", i, "object-key-init")
        });
      }, "assign"), n.prototype.Z = cc11001100_hook("n.prototype.Z", function (n) {
        this.protocol = cc11001100_hook("this.protocol", n.protocol, "assign"), this.user = cc11001100_hook("this.user", n.user, "assign"), this.pass = cc11001100_hook("this.pass", n.pass || "", "assign"), this.host = cc11001100_hook("this.host", n.host, "assign"), this.port = cc11001100_hook("this.port", n.port || "", "assign"), this.path = cc11001100_hook("this.path", n.path || "", "assign"), this.projectId = cc11001100_hook("this.projectId", n.projectId, "assign");
      }, "assign"), n.prototype.Y = cc11001100_hook("n.prototype.Y", function () {
        var n = cc11001100_hook("n", this, "var-init");
        if (["protocol", "user", "host", "projectId"].forEach(function (t) {
          if (!n[t]) throw new f("Invalid Dsn");
        }), "http" !== this.protocol && "https" !== this.protocol) throw new f("Invalid Dsn");
        if (this.port && Number.isNaN(parseInt(this.port, 10))) throw new f("Invalid Dsn");
      }, "assign"), n;
    }(), "var-init"),
    an = cc11001100_hook("an", function () {
      function n(n) {
        cc11001100_hook("n", n, "function-parameter");
        this.dsn = cc11001100_hook("this.dsn", n, "assign"), this.nn = cc11001100_hook("this.nn", new sn(n), "assign");
      }
      return n.prototype.getDsn = cc11001100_hook("n.prototype.getDsn", function () {
        return this.nn;
      }, "assign"), n.prototype.getStoreEndpoint = cc11001100_hook("n.prototype.getStoreEndpoint", function () {
        return "" + this.tn() + this.getStoreEndpointPath();
      }, "assign"), n.prototype.getStoreEndpointWithUrlEncodedAuth = cc11001100_hook("n.prototype.getStoreEndpointWithUrlEncodedAuth", function () {
        var n,
          t = cc11001100_hook("t", {
            sentry_key: cc11001100_hook("sentry_key", this.nn.user, "object-key-init"),
            sentry_version: cc11001100_hook("sentry_version", "7", "object-key-init")
          }, "var-init");
        return this.getStoreEndpoint() + "?" + (n = cc11001100_hook("n", t, "assign"), Object.keys(n).map(function (t) {
          return encodeURIComponent(t) + "=" + encodeURIComponent(n[t]);
        }).join("&"));
      }, "assign"), n.prototype.tn = cc11001100_hook("n.prototype.tn", function () {
        var n = cc11001100_hook("n", this.nn, "var-init"),
          t = cc11001100_hook("t", n.protocol ? n.protocol + ":" : "", "var-init"),
          r = cc11001100_hook("r", n.port ? ":" + n.port : "", "var-init");
        return t + "//" + n.host + r;
      }, "assign"), n.prototype.getStoreEndpointPath = cc11001100_hook("n.prototype.getStoreEndpointPath", function () {
        var n = cc11001100_hook("n", this.nn, "var-init");
        return (n.path ? "/" + n.path : "") + "/api/" + n.projectId + "/store/";
      }, "assign"), n.prototype.getRequestHeaders = cc11001100_hook("n.prototype.getRequestHeaders", function (n, t) {
        var r = cc11001100_hook("r", this.nn, "var-init"),
          e = cc11001100_hook("e", ["Sentry sentry_version=7"], "var-init");
        return e.push("sentry_timestamp=" + new Date().getTime()), e.push("sentry_client=" + n + "/" + t), e.push("sentry_key=" + r.user), r.pass && e.push("sentry_secret=" + r.pass), {
          "Content-Type": cc11001100_hook("Content-Type", "application/json", "object-key-init"),
          "X-Sentry-Auth": cc11001100_hook("X-Sentry-Auth", e.join(", "), "object-key-init")
        };
      }, "assign"), n.prototype.getReportDialogEndpoint = cc11001100_hook("n.prototype.getReportDialogEndpoint", function (n) {
        void 0 === n && (n = cc11001100_hook("n", {}, "assign"));
        var t = cc11001100_hook("t", this.nn, "var-init"),
          r = cc11001100_hook("r", this.tn() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/", "var-init"),
          e = cc11001100_hook("e", [], "var-init");
        for (var i in e.push("dsn=" + t.toString()), n) if ("user" === i) {
          if (!n.user) continue;
          n.user.name && e.push("name=" + encodeURIComponent(n.user.name)), n.user.email && e.push("email=" + encodeURIComponent(n.user.email));
        } else e.push(encodeURIComponent(i) + "=" + encodeURIComponent(n[i]));
        return e.length ? r + "?" + e.join("&") : r;
      }, "assign"), n;
    }(), "var-init"),
    fn = cc11001100_hook("fn", [], "var-init");
  function hn(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", {}, "var-init");
    return function (n) {
      var t = cc11001100_hook("t", n.defaultIntegrations && s(n.defaultIntegrations) || [], "var-init"),
        r = cc11001100_hook("r", n.integrations, "var-init"),
        e = cc11001100_hook("e", [], "var-init");
      if (Array.isArray(r)) {
        var i = cc11001100_hook("i", r.map(function (n) {
            return n.name;
          }), "var-init"),
          o = cc11001100_hook("o", [], "var-init");
        t.forEach(function (n) {
          -1 === i.indexOf(n.name) && -1 === o.indexOf(n.name) && (e.push(n), o.push(n.name));
        }), r.forEach(function (n) {
          -1 === o.indexOf(n.name) && (e.push(n), o.push(n.name));
        });
      } else {
        if ("function" != typeof r) return s(t);
        e = cc11001100_hook("e", r(t), "assign"), e = cc11001100_hook("e", Array.isArray(e) ? e : [e], "assign");
      }
      return e;
    }(n).forEach(function (n) {
      t[n.name] = cc11001100_hook("t[n.name]", n, "assign"), function (n) {
        -1 === fn.indexOf(n.name) && (n.setupOnce(V, nn), fn.push(n.name), T.log("Integration installed: " + n.name));
      }(n);
    }), t;
  }
  var ln,
    vn = cc11001100_hook("vn", function () {
      function n(n, t) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        this.rn = cc11001100_hook("this.rn", {}, "assign"), this.en = cc11001100_hook("this.en", !1, "assign"), this.in = cc11001100_hook("this.in", new n(t), "assign"), this.on = cc11001100_hook("this.on", t, "assign"), t.dsn && (this.un = cc11001100_hook("this.un", new sn(t.dsn), "assign")), this.cn() && (this.rn = cc11001100_hook("this.rn", hn(this.on), "assign"));
      }
      return n.prototype.captureException = cc11001100_hook("n.prototype.captureException", function (n, t, r) {
        var e = cc11001100_hook("e", this, "var-init"),
          i = cc11001100_hook("i", t && t.event_id, "var-init");
        return this.en = cc11001100_hook("this.en", !0, "assign"), this.sn().eventFromException(n, t).then(function (n) {
          return e.an(n, t, r);
        }).then(function (n) {
          i = cc11001100_hook("i", n && n.event_id, "assign"), e.en = cc11001100_hook("e.en", !1, "assign");
        }).catch(function (n) {
          T.error(n), e.en = cc11001100_hook("e.en", !1, "assign");
        }), i;
      }, "assign"), n.prototype.captureMessage = cc11001100_hook("n.prototype.captureMessage", function (n, t, r, e) {
        var i = cc11001100_hook("i", this, "var-init"),
          o = cc11001100_hook("o", r && r.event_id, "var-init");
        return this.en = cc11001100_hook("this.en", !0, "assign"), (p(n) ? this.sn().eventFromMessage("" + n, t, r) : this.sn().eventFromException(n, r)).then(function (n) {
          return i.an(n, r, e);
        }).then(function (n) {
          o = cc11001100_hook("o", n && n.event_id, "assign"), i.en = cc11001100_hook("i.en", !1, "assign");
        }).catch(function (n) {
          T.error(n), i.en = cc11001100_hook("i.en", !1, "assign");
        }), o;
      }, "assign"), n.prototype.captureEvent = cc11001100_hook("n.prototype.captureEvent", function (n, t, r) {
        var e = cc11001100_hook("e", this, "var-init"),
          i = cc11001100_hook("i", t && t.event_id, "var-init");
        return this.en = cc11001100_hook("this.en", !0, "assign"), this.an(n, t, r).then(function (n) {
          i = cc11001100_hook("i", n && n.event_id, "assign"), e.en = cc11001100_hook("e.en", !1, "assign");
        }).catch(function (n) {
          T.error(n), e.en = cc11001100_hook("e.en", !1, "assign");
        }), i;
      }, "assign"), n.prototype.getDsn = cc11001100_hook("n.prototype.getDsn", function () {
        return this.un;
      }, "assign"), n.prototype.getOptions = cc11001100_hook("n.prototype.getOptions", function () {
        return this.on;
      }, "assign"), n.prototype.flush = cc11001100_hook("n.prototype.flush", function (n) {
        var t = cc11001100_hook("t", this, "var-init");
        return this.fn(n).then(function (r) {
          return clearInterval(r.interval), t.sn().getTransport().close(n).then(function (n) {
            return r.ready && n;
          });
        });
      }, "assign"), n.prototype.close = cc11001100_hook("n.prototype.close", function (n) {
        var t = cc11001100_hook("t", this, "var-init");
        return this.flush(n).then(function (n) {
          return t.getOptions().enabled = cc11001100_hook("t.getOptions().enabled", !1, "assign"), n;
        });
      }, "assign"), n.prototype.getIntegrations = cc11001100_hook("n.prototype.getIntegrations", function () {
        return this.rn || {};
      }, "assign"), n.prototype.getIntegration = cc11001100_hook("n.prototype.getIntegration", function (n) {
        try {
          return this.rn[n.id] || null;
        } catch (t) {
          return T.warn("Cannot retrieve integration " + n.id + " from the current Client"), null;
        }
      }, "assign"), n.prototype.fn = cc11001100_hook("n.prototype.fn", function (n) {
        var t = cc11001100_hook("t", this, "var-init");
        return new Promise(function (r) {
          var e = cc11001100_hook("e", 0, "var-init"),
            i = cc11001100_hook("i", 0, "var-init");
          clearInterval(i), i = cc11001100_hook("i", setInterval(function () {
            t.en ? (e += cc11001100_hook("e", 1, "assign"), n && e >= n && r({
              interval: cc11001100_hook("interval", i, "object-key-init"),
              ready: cc11001100_hook("ready", !1, "object-key-init")
            })) : r({
              interval: cc11001100_hook("interval", i, "object-key-init"),
              ready: cc11001100_hook("ready", !0, "object-key-init")
            });
          }, 1), "assign");
        });
      }, "assign"), n.prototype.sn = cc11001100_hook("n.prototype.sn", function () {
        return this.in;
      }, "assign"), n.prototype.cn = cc11001100_hook("n.prototype.cn", function () {
        return !1 !== this.getOptions().enabled && void 0 !== this.un;
      }, "assign"), n.prototype.hn = cc11001100_hook("n.prototype.hn", function (n, t, r) {
        var e = cc11001100_hook("e", this.getOptions(), "var-init"),
          i = cc11001100_hook("i", e.environment, "var-init"),
          o = cc11001100_hook("o", e.release, "var-init"),
          c = cc11001100_hook("c", e.dist, "var-init"),
          s = cc11001100_hook("s", e.maxValueLength, "var-init"),
          a = cc11001100_hook("a", void 0 === s ? 250 : s, "var-init"),
          f = cc11001100_hook("f", u({}, n), "var-init");
        void 0 === f.environment && void 0 !== i && (f.environment = cc11001100_hook("f.environment", i, "assign")), void 0 === f.release && void 0 !== o && (f.release = cc11001100_hook("f.release", o, "assign")), void 0 === f.dist && void 0 !== c && (f.dist = cc11001100_hook("f.dist", c, "assign")), f.message && (f.message = cc11001100_hook("f.message", F(f.message, a), "assign"));
        var h = cc11001100_hook("h", f.exception && f.exception.values && f.exception.values[0], "var-init");
        h && h.value && (h.value = cc11001100_hook("h.value", F(h.value, a), "assign"));
        var l = cc11001100_hook("l", f.request, "var-init");
        l && l.url && (l.url = cc11001100_hook("l.url", F(l.url, a), "assign")), void 0 === f.event_id && (f.event_id = cc11001100_hook("f.event_id", g(), "assign")), this.ln(f.sdk);
        var v = cc11001100_hook("v", B.resolve(f), "var-init");
        return t && (v = cc11001100_hook("v", t.applyToEvent(f, r), "assign")), v;
      }, "assign"), n.prototype.ln = cc11001100_hook("n.prototype.ln", function (n) {
        var t = cc11001100_hook("t", Object.keys(this.rn), "var-init");
        n && t.length > 0 && (n.integrations = cc11001100_hook("n.integrations", t, "assign"));
      }, "assign"), n.prototype.an = cc11001100_hook("n.prototype.an", function (n, t, r) {
        var e = cc11001100_hook("e", this, "var-init"),
          i = cc11001100_hook("i", this.getOptions(), "var-init"),
          o = cc11001100_hook("o", i.beforeSend, "var-init"),
          u = cc11001100_hook("u", i.sampleRate, "var-init");
        return this.cn() ? "number" == typeof u && Math.random() > u ? B.reject("This event has been sampled, will not send event.") : new B(function (i, u) {
          e.hn(n, r, t).then(function (n) {
            if (null !== n) {
              var r = cc11001100_hook("r", n, "var-init");
              try {
                if (t && t.data && !0 === t.data.__sentry__ || !o) return e.sn().sendEvent(r), void i(r);
                var c = cc11001100_hook("c", o(n, t), "var-init");
                if (void 0 === c) T.error("`beforeSend` method has to return `null` or a valid event.");else if (y(c)) e.vn(c, i, u);else {
                  if (null === (r = cc11001100_hook("r", c, "assign"))) return T.log("`beforeSend` returned `null`, will not send event."), void i(null);
                  e.sn().sendEvent(r), i(r);
                }
              } catch (n) {
                e.captureException(n, {
                  data: {
                    __sentry__: cc11001100_hook("__sentry__", !0, "object-key-init")
                  },
                  originalException: cc11001100_hook("originalException", n, "object-key-init")
                }), u("`beforeSend` throw an error, will not send event.");
              }
            } else u("An event processor returned null, will not send event.");
          });
        }) : B.reject("SDK not enabled, will not send event.");
      }, "assign"), n.prototype.vn = cc11001100_hook("n.prototype.vn", function (n, t, r) {
        var e = cc11001100_hook("e", this, "var-init");
        n.then(function (n) {
          null !== n ? (e.sn().sendEvent(n), t(n)) : r("`beforeSend` returned `null`, will not send event.");
        }).catch(function (n) {
          r("beforeSend rejected with " + n);
        });
      }, "assign"), n;
    }(), "var-init"),
    dn = cc11001100_hook("dn", function () {
      function t() {}
      return t.prototype.sendEvent = cc11001100_hook("t.prototype.sendEvent", function (t) {
        return Promise.resolve({
          reason: cc11001100_hook("reason", "NoopTransport: Event has been skipped because no Dsn is configured.", "object-key-init"),
          status: cc11001100_hook("status", n.Status.Skipped, "object-key-init")
        });
      }, "assign"), t.prototype.close = cc11001100_hook("t.prototype.close", function (n) {
        return Promise.resolve(!0);
      }, "assign"), t;
    }(), "var-init"),
    pn = cc11001100_hook("pn", function () {
      function n(n) {
        cc11001100_hook("n", n, "function-parameter");
        this.on = cc11001100_hook("this.on", n, "assign"), this.on.dsn || T.warn("No DSN provided, backend will not do anything."), this.dn = cc11001100_hook("this.dn", this.pn(), "assign");
      }
      return n.prototype.pn = cc11001100_hook("n.prototype.pn", function () {
        return new dn();
      }, "assign"), n.prototype.eventFromException = cc11001100_hook("n.prototype.eventFromException", function (n, t) {
        throw new f("Backend has to implement `eventFromException` method");
      }, "assign"), n.prototype.eventFromMessage = cc11001100_hook("n.prototype.eventFromMessage", function (n, t, r) {
        throw new f("Backend has to implement `eventFromMessage` method");
      }, "assign"), n.prototype.sendEvent = cc11001100_hook("n.prototype.sendEvent", function (n) {
        this.dn.sendEvent(n).catch(function (n) {
          T.error("Error while sending event: " + n);
        });
      }, "assign"), n.prototype.getTransport = cc11001100_hook("n.prototype.getTransport", function () {
        return this.dn;
      }, "assign"), n;
    }(), "var-init");
  var mn = cc11001100_hook("mn", function () {
      function n() {
        this.name = cc11001100_hook("this.name", n.id, "assign");
      }
      return n.prototype.setupOnce = cc11001100_hook("n.prototype.setupOnce", function () {
        ln = cc11001100_hook("ln", Function.prototype.toString, "assign"), Function.prototype.toString = cc11001100_hook("Function.prototype.toString", function () {
          for (var n = cc11001100_hook("n", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) n[t] = cc11001100_hook("n[t]", arguments[t], "assign");
          var r = cc11001100_hook("r", this.__sentry__ ? this.__sentry_original__ : this, "var-init");
          return ln.apply(r, n);
        }, "assign");
      }, "assign"), n.id = cc11001100_hook("n.id", "FunctionToString", "assign"), n;
    }(), "var-init"),
    yn = cc11001100_hook("yn", [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], "var-init"),
    bn = cc11001100_hook("bn", function () {
      function n(t) {
        cc11001100_hook("t", t, "function-parameter");
        void 0 === t && (t = cc11001100_hook("t", {}, "assign")), this.on = cc11001100_hook("this.on", t, "assign"), this.name = cc11001100_hook("this.name", n.id, "assign");
      }
      return n.prototype.setupOnce = cc11001100_hook("n.prototype.setupOnce", function () {
        V(function (t) {
          var r = cc11001100_hook("r", nn(), "var-init");
          if (!r) return t;
          var e = cc11001100_hook("e", r.getIntegration(n), "var-init");
          if (e) {
            var i = cc11001100_hook("i", r.getClient(), "var-init"),
              o = cc11001100_hook("o", i ? i.getOptions() : {}, "var-init"),
              u = cc11001100_hook("u", e.mn(o), "var-init");
            if (e.yn(t, u)) return null;
          }
          return t;
        });
      }, "assign"), n.prototype.yn = cc11001100_hook("n.prototype.yn", function (n, t) {
        return this.bn(n, t) ? (T.warn("Event dropped due to being internal Sentry Error.\nEvent: " + j(n)), !0) : this.wn(n, t) ? (T.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + j(n)), !0) : this.gn(n, t) ? (T.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + j(n) + ".\nUrl: " + this.En(n)), !0) : !this.jn(n, t) && (T.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + j(n) + ".\nUrl: " + this.En(n)), !0);
      }, "assign"), n.prototype.bn = cc11001100_hook("n.prototype.bn", function (n, t) {
        if (void 0 === t && (t = cc11001100_hook("t", {}, "assign")), !t.ignoreInternal) return !1;
        try {
          return "SentryError" === n.exception.values[0].type;
        } catch (n) {
          return !1;
        }
      }, "assign"), n.prototype.wn = cc11001100_hook("n.prototype.wn", function (n, t) {
        return void 0 === t && (t = cc11001100_hook("t", {}, "assign")), !(!t.ignoreErrors || !t.ignoreErrors.length) && this.xn(n).some(function (n) {
          return t.ignoreErrors.some(function (t) {
            return q(n, t);
          });
        });
      }, "assign"), n.prototype.gn = cc11001100_hook("n.prototype.gn", function (n, t) {
        if (void 0 === t && (t = cc11001100_hook("t", {}, "assign")), !t.blacklistUrls || !t.blacklistUrls.length) return !1;
        var r = cc11001100_hook("r", this.En(n), "var-init");
        return !!r && t.blacklistUrls.some(function (n) {
          return q(r, n);
        });
      }, "assign"), n.prototype.jn = cc11001100_hook("n.prototype.jn", function (n, t) {
        if (void 0 === t && (t = cc11001100_hook("t", {}, "assign")), !t.whitelistUrls || !t.whitelistUrls.length) return !0;
        var r = cc11001100_hook("r", this.En(n), "var-init");
        return !r || t.whitelistUrls.some(function (n) {
          return q(r, n);
        });
      }, "assign"), n.prototype.mn = cc11001100_hook("n.prototype.mn", function (n) {
        return void 0 === n && (n = cc11001100_hook("n", {}, "assign")), {
          blacklistUrls: cc11001100_hook("blacklistUrls", s(this.on.blacklistUrls || [], n.blacklistUrls || []), "object-key-init"),
          ignoreErrors: cc11001100_hook("ignoreErrors", s(this.on.ignoreErrors || [], n.ignoreErrors || [], yn), "object-key-init"),
          ignoreInternal: cc11001100_hook("ignoreInternal", void 0 === this.on.ignoreInternal || this.on.ignoreInternal, "object-key-init"),
          whitelistUrls: cc11001100_hook("whitelistUrls", s(this.on.whitelistUrls || [], n.whitelistUrls || []), "object-key-init")
        };
      }, "assign"), n.prototype.xn = cc11001100_hook("n.prototype.xn", function (n) {
        if (n.message) return [n.message];
        if (n.exception) try {
          var t = cc11001100_hook("t", n.exception.values[0], "var-init"),
            r = cc11001100_hook("r", t.type, "var-init"),
            e = cc11001100_hook("e", t.value, "var-init");
          return ["" + e, r + ": " + e];
        } catch (t) {
          return T.error("Cannot extract message for event " + j(n)), [];
        }
        return [];
      }, "assign"), n.prototype.En = cc11001100_hook("n.prototype.En", function (n) {
        try {
          if (n.stacktrace) {
            var t = cc11001100_hook("t", n.stacktrace.frames, "var-init");
            return t[t.length - 1].filename;
          }
          if (n.exception) {
            var r = cc11001100_hook("r", n.exception.values[0].stacktrace.frames, "var-init");
            return r[r.length - 1].filename;
          }
          return null;
        } catch (t) {
          return T.error("Cannot extract url for event " + j(n)), null;
        }
      }, "assign"), n.id = cc11001100_hook("n.id", "InboundFilters", "assign"), n;
    }(), "var-init"),
    wn = cc11001100_hook("wn", Object.freeze({
      FunctionToString: cc11001100_hook("FunctionToString", mn, "object-key-init"),
      InboundFilters: cc11001100_hook("InboundFilters", bn, "object-key-init")
    }), "var-init"),
    gn = cc11001100_hook("gn", w(), "var-init"),
    En = cc11001100_hook("En", {
      _n: cc11001100_hook("_n", !1, "object-key-init"),
      Sn: cc11001100_hook("Sn", !1, "object-key-init"),
      On: cc11001100_hook("On", !1, "object-key-init"),
      kn: cc11001100_hook("kn", !1, "object-key-init")
    }, "var-init"),
    jn = cc11001100_hook("jn", "?", "var-init"),
    xn = cc11001100_hook("xn", /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/, "var-init");
  function _n(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return Object.prototype.hasOwnProperty.call(n, t);
  }
  function Sn() {
    return "undefined" == typeof document || null == document.location ? "" : document.location.href;
  }
  En._n = cc11001100_hook("En._n", function () {
    var n,
      t,
      r = cc11001100_hook("r", [], "var-init"),
      e = cc11001100_hook("e", null, "var-init"),
      i = cc11001100_hook("i", null, "var-init");
    function o(n, t, e) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var i = cc11001100_hook("i", null, "var-init");
      if (!t || En.Sn) {
        for (var o in r) if (_n(r, o)) try {
          r[o](n, t, e);
        } catch (n) {
          i = cc11001100_hook("i", n, "assign");
        }
        if (i) throw i;
      }
    }
    function c(t, r, e, c, s) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      var f = cc11001100_hook("f", null, "var-init");
      if (s = cc11001100_hook("s", l(s) ? s.error : s, "assign"), t = cc11001100_hook("t", l(t) ? t.message : t, "assign"), i) En.On.Tn(i, r, e, t), a();else if (s && h(s)) (f = cc11001100_hook("f", En.On(s), "assign")).mechanism = cc11001100_hook("(f = En.On(s)).mechanism", "onerror", "assign"), o(f, !0, s);else {
        var v,
          d = cc11001100_hook("d", {
            url: cc11001100_hook("url", r, "object-key-init"),
            line: cc11001100_hook("line", e, "object-key-init"),
            column: cc11001100_hook("column", c, "object-key-init")
          }, "var-init"),
          p = cc11001100_hook("p", t, "var-init");
        if ("[object String]" === {}.toString.call(t)) {
          var m = cc11001100_hook("m", t.match(xn), "var-init");
          m && (v = cc11001100_hook("v", m[1], "assign"), p = cc11001100_hook("p", m[2], "assign"));
        }
        d.func = cc11001100_hook("d.func", jn, "assign"), d.context = cc11001100_hook("d.context", null, "assign"), o(f = cc11001100_hook("f", {
          name: cc11001100_hook("name", v, "object-key-init"),
          message: cc11001100_hook("message", p, "object-key-init"),
          mode: cc11001100_hook("mode", "onerror", "object-key-init"),
          mechanism: cc11001100_hook("mechanism", "onerror", "object-key-init"),
          stack: cc11001100_hook("stack", [u({}, d, {
            url: cc11001100_hook("url", d.url || Sn(), "object-key-init")
          })], "object-key-init")
        }, "assign"), !0, null);
      }
      return !!n && n.apply(this, arguments);
    }
    function s(n) {
      cc11001100_hook("n", n, "function-parameter");
      var t = cc11001100_hook("t", n && void 0 !== n.reason ? n.reason : n, "var-init"),
        r = cc11001100_hook("r", En.On(t), "var-init");
      r.mechanism = cc11001100_hook("r.mechanism", "onunhandledrejection", "assign"), o(r, !0, t);
    }
    function a() {
      var n = cc11001100_hook("n", i, "var-init"),
        t = cc11001100_hook("t", e, "var-init");
      i = cc11001100_hook("i", null, "assign"), e = cc11001100_hook("e", null, "assign"), o(n, !1, t);
    }
    function f(n) {
      cc11001100_hook("n", n, "function-parameter");
      if (i) {
        if (e === n) return;
        a();
      }
      var t = cc11001100_hook("t", En.On(n), "var-init");
      throw i = cc11001100_hook("i", t, "assign"), e = cc11001100_hook("e", n, "assign"), setTimeout(function () {
        e === n && a();
      }, t.incomplete ? 2e3 : 0), n;
    }
    return f.Rn = cc11001100_hook("f.Rn", function (n) {
      r.push(n);
    }, "assign"), f.Dn = cc11001100_hook("f.Dn", function () {
      !0 !== t && (n = cc11001100_hook("n", gn.onerror, "assign"), gn.onerror = cc11001100_hook("gn.onerror", c, "assign"), t = cc11001100_hook("t", !0, "assign"));
    }, "assign"), f.In = cc11001100_hook("f.In", function () {
      gn.onunhandledrejection = cc11001100_hook("gn.onunhandledrejection", s, "assign");
    }, "assign"), f;
  }(), "assign"), En.On = cc11001100_hook("En.On", function () {
    function n(n) {
      cc11001100_hook("n", n, "function-parameter");
      if (!n || !n.stack) return null;
      for (var t, r, e, i = cc11001100_hook("i", /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[-a-z]+:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, "var-init"), o = cc11001100_hook("o", /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, "var-init"), u = cc11001100_hook("u", /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, "var-init"), c = cc11001100_hook("c", /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, "var-init"), s = cc11001100_hook("s", /\((\S*)(?::(\d+))(?::(\d+))\)/, "var-init"), a = cc11001100_hook("a", n.stack.split("\n"), "var-init"), f = cc11001100_hook("f", [], "var-init"), h = cc11001100_hook("h", /^(.*) is undefined$/.exec(n.message), "var-init"), l = cc11001100_hook("l", 0, "var-init"), v = cc11001100_hook("v", a.length, "var-init"); l < v; ++l) {
        if (r = cc11001100_hook("r", i.exec(a[l]), "assign")) {
          var d = cc11001100_hook("d", r[2] && 0 === r[2].indexOf("native"), "var-init");
          r[2] && 0 === r[2].indexOf("eval") && (t = cc11001100_hook("t", s.exec(r[2]), "assign")) && (r[2] = cc11001100_hook("r[2]", t[1], "assign"), r[3] = cc11001100_hook("r[3]", t[2], "assign"), r[4] = cc11001100_hook("r[4]", t[3], "assign")), e = cc11001100_hook("e", {
            url: cc11001100_hook("url", r[2], "object-key-init"),
            func: cc11001100_hook("func", r[1] || jn, "object-key-init"),
            args: cc11001100_hook("args", d ? [r[2]] : [], "object-key-init"),
            line: cc11001100_hook("line", r[3] ? +r[3] : null, "object-key-init"),
            column: cc11001100_hook("column", r[4] ? +r[4] : null, "object-key-init")
          }, "assign");
        } else if (r = cc11001100_hook("r", u.exec(a[l]), "assign")) e = cc11001100_hook("e", {
          url: cc11001100_hook("url", r[2], "object-key-init"),
          func: cc11001100_hook("func", r[1] || jn, "object-key-init"),
          args: cc11001100_hook("args", [], "object-key-init"),
          line: cc11001100_hook("line", +r[3], "object-key-init"),
          column: cc11001100_hook("column", r[4] ? +r[4] : null, "object-key-init")
        }, "assign");else {
          if (!(r = cc11001100_hook("r", o.exec(a[l]), "assign"))) continue;
          r[3] && r[3].indexOf(" > eval") > -1 && (t = cc11001100_hook("t", c.exec(r[3]), "assign")) ? (r[1] = cc11001100_hook("r[1]", r[1] || "eval", "assign"), r[3] = cc11001100_hook("r[3]", t[1], "assign"), r[4] = cc11001100_hook("r[4]", t[2], "assign"), r[5] = cc11001100_hook("r[5]", "", "assign")) : 0 !== l || r[5] || void 0 === n.columnNumber || (f[0].column = cc11001100_hook("f[0].column", n.columnNumber + 1, "assign")), e = cc11001100_hook("e", {
            url: cc11001100_hook("url", r[3], "object-key-init"),
            func: cc11001100_hook("func", r[1] || jn, "object-key-init"),
            args: cc11001100_hook("args", r[2] ? r[2].split(",") : [], "object-key-init"),
            line: cc11001100_hook("line", r[4] ? +r[4] : null, "object-key-init"),
            column: cc11001100_hook("column", r[5] ? +r[5] : null, "object-key-init")
          }, "assign");
        }
        !e.func && e.line && (e.func = cc11001100_hook("e.func", jn, "assign")), e.context = cc11001100_hook("e.context", null, "assign"), f.push(e);
      }
      return f.length ? (f[0] && f[0].line && !f[0].column && h && (f[0].column = cc11001100_hook("f[0].column", null, "assign")), {
        mode: cc11001100_hook("mode", "stack", "object-key-init"),
        name: cc11001100_hook("name", n.name, "object-key-init"),
        message: cc11001100_hook("message", n.message, "object-key-init"),
        stack: cc11001100_hook("stack", f, "object-key-init")
      }) : null;
    }
    function t(n, t, r, e) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var i = cc11001100_hook("i", {
        url: cc11001100_hook("url", t, "object-key-init"),
        line: cc11001100_hook("line", r, "object-key-init")
      }, "var-init");
      if (i.url && i.line) {
        if (n.incomplete = cc11001100_hook("n.incomplete", !1, "assign"), i.func || (i.func = cc11001100_hook("i.func", jn, "assign")), i.context || (i.context = cc11001100_hook("i.context", null, "assign")), / '([^']+)' /.exec(e) && (i.column = cc11001100_hook("i.column", null, "assign")), n.stack.length > 0 && n.stack[0].url === i.url) {
          if (n.stack[0].line === i.line) return !1;
          if (!n.stack[0].line && n.stack[0].func === i.func) return n.stack[0].line = cc11001100_hook("n.stack[0].line", i.line, "assign"), n.stack[0].context = cc11001100_hook("n.stack[0].context", i.context, "assign"), !1;
        }
        return n.stack.unshift(i), n.partial = cc11001100_hook("n.partial", !0, "assign"), !0;
      }
      return n.incomplete = cc11001100_hook("n.incomplete", !0, "assign"), !1;
    }
    function r(n, e) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      for (var i, o, u = cc11001100_hook("u", /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, "var-init"), c = cc11001100_hook("c", [], "var-init"), s = cc11001100_hook("s", {}, "var-init"), a = cc11001100_hook("a", !1, "var-init"), f = cc11001100_hook("f", r.caller, "var-init"); f && !a; f = cc11001100_hook("f", f.caller, "assign")) if (f !== Rn && f !== En._n) {
        if (o = cc11001100_hook("o", {
          url: cc11001100_hook("url", null, "object-key-init"),
          func: cc11001100_hook("func", jn, "object-key-init"),
          args: cc11001100_hook("args", [], "object-key-init"),
          line: cc11001100_hook("line", null, "object-key-init"),
          column: cc11001100_hook("column", null, "object-key-init")
        }, "assign"), f.name ? o.func = cc11001100_hook("o.func", f.name, "assign") : (i = cc11001100_hook("i", u.exec(f.toString()), "assign")) && (o.func = cc11001100_hook("o.func", i[1], "assign")), void 0 === o.func) try {
          o.func = cc11001100_hook("o.func", i.input.substring(0, i.input.indexOf("{")), "assign");
        } catch (n) {}
        s["" + f] ? a = cc11001100_hook("a", !0, "assign") : s["" + f] = cc11001100_hook("s[\"\" + f]", !0, "assign"), c.push(o);
      }
      e && c.splice(0, e);
      var h = cc11001100_hook("h", {
        mode: cc11001100_hook("mode", "callers", "object-key-init"),
        name: cc11001100_hook("name", n.name, "object-key-init"),
        message: cc11001100_hook("message", n.message, "object-key-init"),
        stack: cc11001100_hook("stack", c, "object-key-init")
      }, "var-init");
      return t(h, n.sourceURL || n.fileName, n.line || n.lineNumber, n.message || n.description), h;
    }
    function e(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var i = cc11001100_hook("i", null, "var-init");
      e = cc11001100_hook("e", null == e ? 0 : +e, "assign");
      try {
        if (i = cc11001100_hook("i", function (n) {
          var t = cc11001100_hook("t", n.stacktrace, "var-init");
          if (t) {
            for (var r, e = cc11001100_hook("e", / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, "var-init"), i = cc11001100_hook("i", / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, "var-init"), o = cc11001100_hook("o", t.split("\n"), "var-init"), u = cc11001100_hook("u", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < o.length; c += cc11001100_hook("c", 2, "assign")) {
              var s = cc11001100_hook("s", null, "var-init");
              (r = cc11001100_hook("r", e.exec(o[c]), "assign")) ? s = cc11001100_hook("s", {
                url: cc11001100_hook("url", r[2], "object-key-init"),
                line: cc11001100_hook("line", +r[1], "object-key-init"),
                column: cc11001100_hook("column", null, "object-key-init"),
                func: cc11001100_hook("func", r[3], "object-key-init"),
                args: cc11001100_hook("args", [], "object-key-init")
              }, "assign") : (r = cc11001100_hook("r", i.exec(o[c]), "assign")) && (s = cc11001100_hook("s", {
                url: cc11001100_hook("url", r[6], "object-key-init"),
                line: cc11001100_hook("line", +r[1], "object-key-init"),
                column: cc11001100_hook("column", +r[2], "object-key-init"),
                func: cc11001100_hook("func", r[3] || r[4], "object-key-init"),
                args: cc11001100_hook("args", r[5] ? r[5].split(",") : [], "object-key-init")
              }, "assign")), s && (!s.func && s.line && (s.func = cc11001100_hook("s.func", jn, "assign")), s.line && (s.context = cc11001100_hook("s.context", null, "assign")), s.context || (s.context = cc11001100_hook("s.context", [o[c + 1]], "assign")), u.push(s));
            }
            return u.length ? {
              mode: cc11001100_hook("mode", "stacktrace", "object-key-init"),
              name: cc11001100_hook("name", n.name, "object-key-init"),
              message: cc11001100_hook("message", n.message, "object-key-init"),
              stack: cc11001100_hook("stack", u, "object-key-init")
            } : null;
          }
        }(t), "assign")) return i;
      } catch (n) {}
      try {
        if (i = cc11001100_hook("i", n(t), "assign")) return i;
      } catch (n) {}
      try {
        if (i = cc11001100_hook("i", function (n) {
          var t = cc11001100_hook("t", n.message.split("\n"), "var-init");
          if (t.length < 4) return null;
          var r,
            e = cc11001100_hook("e", /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, "var-init"),
            i = cc11001100_hook("i", /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, "var-init"),
            o = cc11001100_hook("o", /^\s*Line (\d+) of function script\s*$/i, "var-init"),
            u = cc11001100_hook("u", [], "var-init"),
            c = cc11001100_hook("c", gn && gn.document && gn.document.getElementsByTagName("script"), "var-init"),
            s = cc11001100_hook("s", [], "var-init");
          for (var a in c) _n(c, a) && !c[a].src && s.push(c[a]);
          for (var f = cc11001100_hook("f", 2, "var-init"); f < t.length; f += cc11001100_hook("f", 2, "assign")) {
            var h = cc11001100_hook("h", null, "var-init");
            (r = cc11001100_hook("r", e.exec(t[f]), "assign")) ? h = cc11001100_hook("h", {
              url: cc11001100_hook("url", r[2], "object-key-init"),
              func: cc11001100_hook("func", r[3], "object-key-init"),
              args: cc11001100_hook("args", [], "object-key-init"),
              line: cc11001100_hook("line", +r[1], "object-key-init"),
              column: cc11001100_hook("column", null, "object-key-init")
            }, "assign") : (r = cc11001100_hook("r", i.exec(t[f]), "assign")) ? h = cc11001100_hook("h", {
              url: cc11001100_hook("url", r[3], "object-key-init"),
              func: cc11001100_hook("func", r[4], "object-key-init"),
              args: cc11001100_hook("args", [], "object-key-init"),
              line: cc11001100_hook("line", +r[1], "object-key-init"),
              column: cc11001100_hook("column", null, "object-key-init")
            }, "assign") : (r = cc11001100_hook("r", o.exec(t[f]), "assign")) && (h = cc11001100_hook("h", {
              url: cc11001100_hook("url", Sn().replace(/#.*$/, ""), "object-key-init"),
              func: cc11001100_hook("func", "", "object-key-init"),
              args: cc11001100_hook("args", [], "object-key-init"),
              line: cc11001100_hook("line", r[1], "object-key-init"),
              column: cc11001100_hook("column", null, "object-key-init")
            }, "assign")), h && (h.func || (h.func = cc11001100_hook("h.func", jn, "assign")), h.context = cc11001100_hook("h.context", [t[f + 1]], "assign"), u.push(h));
          }
          return u.length ? {
            mode: cc11001100_hook("mode", "multiline", "object-key-init"),
            name: cc11001100_hook("name", n.name, "object-key-init"),
            message: cc11001100_hook("message", t[0], "object-key-init"),
            stack: cc11001100_hook("stack", u, "object-key-init")
          } : null;
        }(t), "assign")) return i;
      } catch (n) {}
      try {
        if (i = cc11001100_hook("i", r(t, e + 1), "assign")) return i;
      } catch (n) {}
      return {
        original: cc11001100_hook("original", t, "object-key-init"),
        name: cc11001100_hook("name", t.name, "object-key-init"),
        message: cc11001100_hook("message", t.message, "object-key-init"),
        mode: cc11001100_hook("mode", "failed", "object-key-init")
      };
    }
    return e.Tn = cc11001100_hook("e.Tn", t, "assign"), e.Nn = cc11001100_hook("e.Nn", n, "assign"), e;
  }(), "assign"), En.Sn = cc11001100_hook("En.Sn", !0, "assign"), En.kn = cc11001100_hook("En.kn", 11, "assign");
  var On = cc11001100_hook("On", En._n.Rn, "var-init"),
    kn = cc11001100_hook("kn", En._n.Dn, "var-init"),
    Tn = cc11001100_hook("Tn", En._n.In, "var-init"),
    Rn = cc11001100_hook("Rn", En.On, "var-init"),
    Dn = cc11001100_hook("Dn", 50, "var-init");
  function In(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", Cn(n.stack), "var-init"),
      r = cc11001100_hook("r", {
        type: cc11001100_hook("type", n.name, "object-key-init"),
        value: cc11001100_hook("value", n.message, "object-key-init")
      }, "var-init");
    return t && t.length && (r.stacktrace = cc11001100_hook("r.stacktrace", {
      frames: cc11001100_hook("frames", t, "object-key-init")
    }, "assign")), void 0 === r.type && "" === r.value && (r.value = cc11001100_hook("r.value", "Unrecoverable error caught", "assign")), r;
  }
  function Nn(n) {
    cc11001100_hook("n", n, "function-parameter");
    return {
      exception: {
        values: cc11001100_hook("values", [In(n)], "object-key-init")
      }
    };
  }
  function Cn(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (!n || !n.length) return [];
    var t = cc11001100_hook("t", n, "var-init"),
      r = cc11001100_hook("r", t[0].func || "", "var-init"),
      e = cc11001100_hook("e", t[t.length - 1].func || "", "var-init");
    return (r.includes("captureMessage") || r.includes("captureException")) && (t = cc11001100_hook("t", t.slice(1), "assign")), e.includes("sentryWrapped") && (t = cc11001100_hook("t", t.slice(0, -1), "assign")), t.map(function (n) {
      return {
        colno: cc11001100_hook("colno", n.column, "object-key-init"),
        filename: cc11001100_hook("filename", n.url || t[0].url, "object-key-init"),
        function: cc11001100_hook("function", n.func || "?", "object-key-init"),
        in_app: cc11001100_hook("in_app", !0, "object-key-init"),
        lineno: cc11001100_hook("lineno", n.line, "object-key-init")
      };
    }).slice(0, Dn).reverse();
  }
  var An,
    Un,
    Ln = cc11001100_hook("Ln", function () {
      function n(n) {
        cc11001100_hook("n", n, "function-parameter");
        this.options = cc11001100_hook("this.options", n, "assign"), this.h = cc11001100_hook("this.h", new M(30), "assign"), this.url = cc11001100_hook("this.url", new an(this.options.dsn).getStoreEndpointWithUrlEncodedAuth(), "assign");
      }
      return n.prototype.sendEvent = cc11001100_hook("n.prototype.sendEvent", function (n) {
        throw new f("Transport Class has to implement `sendEvent` method");
      }, "assign"), n.prototype.close = cc11001100_hook("n.prototype.close", function (n) {
        return this.h.drain(n);
      }, "assign"), n;
    }(), "var-init"),
    Mn = cc11001100_hook("Mn", w(), "var-init"),
    Fn = cc11001100_hook("Fn", function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return r(e, t), e.prototype.sendEvent = cc11001100_hook("e.prototype.sendEvent", function (t) {
        var r = cc11001100_hook("r", {
          body: cc11001100_hook("body", JSON.stringify(t), "object-key-init"),
          method: cc11001100_hook("method", "POST", "object-key-init"),
          referrerPolicy: cc11001100_hook("referrerPolicy", W() ? "origin" : "", "object-key-init")
        }, "var-init");
        return this.h.add(Mn.fetch(this.url, r).then(function (t) {
          return {
            status: cc11001100_hook("status", n.Status.fromHttpCode(t.status), "object-key-init")
          };
        }));
      }, "assign"), e;
    }(Ln), "var-init"),
    Pn = cc11001100_hook("Pn", function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return r(e, t), e.prototype.sendEvent = cc11001100_hook("e.prototype.sendEvent", function (t) {
        var r = cc11001100_hook("r", this, "var-init");
        return this.h.add(new Promise(function (e, i) {
          var o = cc11001100_hook("o", new XMLHttpRequest(), "var-init");
          o.onreadystatechange = cc11001100_hook("o.onreadystatechange", function () {
            4 === o.readyState && (200 === o.status && e({
              status: cc11001100_hook("status", n.Status.fromHttpCode(o.status), "object-key-init")
            }), i(o));
          }, "assign"), o.open("POST", r.url), o.send(JSON.stringify(t));
        }));
      }, "assign"), e;
    }(Ln), "var-init"),
    $n = cc11001100_hook("$n", Object.freeze({
      BaseTransport: cc11001100_hook("BaseTransport", Ln, "object-key-init"),
      FetchTransport: cc11001100_hook("FetchTransport", Fn, "object-key-init"),
      XHRTransport: cc11001100_hook("XHRTransport", Pn, "object-key-init")
    }), "var-init"),
    qn = cc11001100_hook("qn", function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return r(e, t), e.prototype.pn = cc11001100_hook("e.prototype.pn", function () {
        if (!this.on.dsn) return t.prototype.pn.call(this);
        var n = cc11001100_hook("n", u({}, this.on.transportOptions, {
          dsn: cc11001100_hook("dsn", this.on.dsn, "object-key-init")
        }), "var-init");
        return this.on.transport ? new this.on.transport(n) : H() ? new Fn(n) : new Pn(n);
      }, "assign"), e.prototype.eventFromException = cc11001100_hook("e.prototype.eventFromException", function (t, r) {
        var e,
          i,
          o = cc11001100_hook("o", this, "var-init");
        if (l(t) && t.error) return t = cc11001100_hook("t", t.error, "assign"), e = cc11001100_hook("e", Nn(Rn(t)), "assign"), B.resolve(this.Cn(e, r));
        if (v(t) || (i = cc11001100_hook("i", t, "assign"), "[object DOMException]" === Object.prototype.toString.call(i))) {
          var u = cc11001100_hook("u", t, "var-init"),
            c = cc11001100_hook("c", u.name || (v(u) ? "DOMError" : "DOMException"), "var-init"),
            s = cc11001100_hook("s", u.message ? c + ": " + u.message : c, "var-init");
          return this.eventFromMessage(s, n.Severity.Error, r).then(function (n) {
            return _(n, s), B.resolve(o.Cn(n, r));
          });
        }
        if (h(t)) return e = cc11001100_hook("e", Nn(Rn(t)), "assign"), B.resolve(this.Cn(e, r));
        if (m(t) && r && r.syntheticException) return _(e = cc11001100_hook("e", function (n, t) {
          var r = cc11001100_hook("r", Object.keys(n).sort(), "var-init"),
            e = cc11001100_hook("e", {
              extra: {
                __serialized__: cc11001100_hook("__serialized__", N(n), "object-key-init")
              },
              message: cc11001100_hook("message", "Non-Error exception captured with keys: " + $(r), "object-key-init")
            }, "var-init");
          if (t) {
            var i = cc11001100_hook("i", Cn(Rn(t).stack), "var-init");
            e.stacktrace = cc11001100_hook("e.stacktrace", {
              frames: cc11001100_hook("frames", i, "object-key-init")
            }, "assign");
          }
          return e;
        }(t, r.syntheticException), "assign"), "Custom Object", void 0, {
          handled: cc11001100_hook("handled", !0, "object-key-init"),
          synthetic: cc11001100_hook("synthetic", !0, "object-key-init"),
          type: cc11001100_hook("type", "generic", "object-key-init")
        }), e.level = cc11001100_hook("e.level", n.Severity.Error, "assign"), B.resolve(this.Cn(e, r));
        var a = cc11001100_hook("a", t, "var-init");
        return this.eventFromMessage(a, void 0, r).then(function (t) {
          return _(t, "" + a, void 0, {
            handled: cc11001100_hook("handled", !0, "object-key-init"),
            synthetic: cc11001100_hook("synthetic", !0, "object-key-init"),
            type: cc11001100_hook("type", "generic", "object-key-init")
          }), t.level = cc11001100_hook("t.level", n.Severity.Error, "assign"), B.resolve(o.Cn(t, r));
        });
      }, "assign"), e.prototype.Cn = cc11001100_hook("e.prototype.Cn", function (n, t) {
        return u({}, n, {
          event_id: cc11001100_hook("event_id", t && t.event_id, "object-key-init")
        });
      }, "assign"), e.prototype.eventFromMessage = cc11001100_hook("e.prototype.eventFromMessage", function (t, r, e) {
        void 0 === r && (r = cc11001100_hook("r", n.Severity.Info, "assign"));
        var i = cc11001100_hook("i", {
          event_id: cc11001100_hook("event_id", e && e.event_id, "object-key-init"),
          level: cc11001100_hook("level", r, "object-key-init"),
          message: cc11001100_hook("message", t, "object-key-init")
        }, "var-init");
        if (this.on.attachStacktrace && e && e.syntheticException) {
          var o = cc11001100_hook("o", Cn(Rn(e.syntheticException).stack), "var-init");
          i.stacktrace = cc11001100_hook("i.stacktrace", {
            frames: cc11001100_hook("frames", o, "object-key-init")
          }, "assign");
        }
        return B.resolve(i);
      }, "assign"), e;
    }(pn), "var-init"),
    Hn = cc11001100_hook("Hn", "sentry.javascript.browser", "var-init"),
    Wn = cc11001100_hook("Wn", function (n) {
      function t(t) {
        cc11001100_hook("t", t, "function-parameter");
        return void 0 === t && (t = cc11001100_hook("t", {}, "assign")), n.call(this, qn, t) || this;
      }
      return r(t, n), t.prototype.hn = cc11001100_hook("t.prototype.hn", function (t, r, e) {
        return t.platform = cc11001100_hook("t.platform", t.platform || "javascript", "assign"), t.sdk = cc11001100_hook("t.sdk", u({}, t.sdk, {
          name: cc11001100_hook("name", Hn, "object-key-init"),
          packages: cc11001100_hook("packages", s(t.sdk && t.sdk.packages || [], [{
            name: cc11001100_hook("name", "npm:@sentry/browser", "object-key-init"),
            version: cc11001100_hook("version", "5.6.1", "object-key-init")
          }]), "object-key-init"),
          version: cc11001100_hook("version", "5.6.1", "object-key-init")
        }), "assign"), n.prototype.hn.call(this, t, r, e);
      }, "assign"), t.prototype.showReportDialog = cc11001100_hook("t.prototype.showReportDialog", function (n) {
        void 0 === n && (n = cc11001100_hook("n", {}, "assign"));
        var t = cc11001100_hook("t", w().document, "var-init");
        if (t) if (this.cn()) {
          var r = cc11001100_hook("r", n.dsn || this.getDsn(), "var-init");
          if (n.eventId) {
            if (r) {
              var e = cc11001100_hook("e", t.createElement("script"), "var-init");
              e.async = cc11001100_hook("e.async", !0, "assign"), e.src = cc11001100_hook("e.src", new an(r).getReportDialogEndpoint(n), "assign"), n.onLoad && (e.onload = cc11001100_hook("e.onload", n.onLoad, "assign")), (t.head || t.body).appendChild(e);
            } else T.error("Missing `Dsn` option in showReportDialog call");
          } else T.error("Missing `eventId` option in showReportDialog call");
        } else T.error("Trying to call showReportDialog with Sentry Client is disabled");
      }, "assign"), t;
    }(vn), "var-init"),
    Bn = cc11001100_hook("Bn", 1e3, "var-init"),
    Jn = cc11001100_hook("Jn", 0, "var-init");
  function Xn(n, t, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (void 0 === t && (t = cc11001100_hook("t", {}, "assign")), "function" != typeof n) return n;
    try {
      if (n.__sentry__) return n;
      if (n.__sentry_wrapped__) return n.__sentry_wrapped__;
    } catch (t) {
      return n;
    }
    var sentryWrapped = function () {
      r && "function" == typeof r && r.apply(this, arguments);
      var e = cc11001100_hook("e", Array.prototype.slice.call(arguments), "var-init");
      try {
        var i = cc11001100_hook("i", e.map(function (n) {
          return Xn(n, t);
        }), "var-init");
        return n.handleEvent ? n.handleEvent.apply(this, i) : n.apply(this, i);
      } catch (n) {
        throw Jn += cc11001100_hook("Jn", 1, "assign"), setTimeout(function () {
          Jn -= cc11001100_hook("Jn", 1, "assign");
        }), un(function (r) {
          r.addEventProcessor(function (n) {
            var r = cc11001100_hook("r", u({}, n), "var-init");
            return t.mechanism && _(r, void 0, void 0, t.mechanism), r.extra = cc11001100_hook("r.extra", u({}, r.extra, {
              arguments: cc11001100_hook("arguments", U(e, 3), "object-key-init")
            }), "assign"), r;
          }), captureException(n);
        }), n;
      }
    };
    try {
      for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (sentryWrapped[e] = cc11001100_hook("sentryWrapped[e]", n[e], "assign"));
    } catch (n) {}
    n.prototype = cc11001100_hook("n.prototype", n.prototype || {}, "assign"), sentryWrapped.prototype = cc11001100_hook("sentryWrapped.prototype", n.prototype, "assign"), Object.defineProperty(n, "__sentry_wrapped__", {
      enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
      value: cc11001100_hook("value", sentryWrapped, "object-key-init")
    }), Object.defineProperties(sentryWrapped, {
      __sentry__: {
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
        value: cc11001100_hook("value", !0, "object-key-init")
      },
      __sentry_original__: {
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
        value: cc11001100_hook("value", n, "object-key-init")
      }
    });
    try {
      Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable && Object.defineProperty(sentryWrapped, "name", {
        get: function () {
          return n.name;
        }
      });
    } catch (n) {}
    return sentryWrapped;
  }
  var zn = cc11001100_hook("zn", 0, "var-init");
  function Gn(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return void 0 === t && (t = cc11001100_hook("t", !1, "assign")), function (r) {
      if (An = cc11001100_hook("An", void 0, "assign"), r && Un !== r) {
        Un = cc11001100_hook("Un", r, "assign");
        var e = function () {
          var t;
          try {
            t = cc11001100_hook("t", r.target ? Kn(r.target) : Kn(r), "assign");
          } catch (n) {
            t = cc11001100_hook("t", "<unknown>", "assign");
          }
          0 !== t.length && nn().addBreadcrumb({
            category: cc11001100_hook("category", "ui." + n, "object-key-init"),
            message: cc11001100_hook("message", t, "object-key-init")
          }, {
            event: cc11001100_hook("event", r, "object-key-init"),
            name: cc11001100_hook("name", n, "object-key-init")
          });
        };
        zn && clearTimeout(zn), t ? zn = cc11001100_hook("zn", setTimeout(e), "assign") : e();
      }
    };
  }
  function Vn() {
    return function (n) {
      var t;
      try {
        t = cc11001100_hook("t", n.target, "assign");
      } catch (n) {
        return;
      }
      var r = cc11001100_hook("r", t && t.tagName, "var-init");
      r && ("INPUT" === r || "TEXTAREA" === r || t.isContentEditable) && (An || Gn("input")(n), clearTimeout(An), An = cc11001100_hook("An", setTimeout(function () {
        An = cc11001100_hook("An", void 0, "assign");
      }, Bn), "assign"));
    };
  }
  function Kn(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var t, r = cc11001100_hook("r", n, "var-init"), e = cc11001100_hook("e", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", 0, "var-init"), u = cc11001100_hook("u", " > ".length, "var-init"); r && i++ < 5 && !("html" === (t = cc11001100_hook("t", Zn(r), "assign")) || i > 1 && o + e.length * u + t.length >= 80);) e.push(t), o += cc11001100_hook("o", t.length, "assign"), r = cc11001100_hook("r", r.parentNode, "assign");
    return e.reverse().join(" > ");
  }
  function Zn(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t,
      r,
      e,
      i,
      o,
      u = cc11001100_hook("u", [], "var-init");
    if (!n || !n.tagName) return "";
    if (u.push(n.tagName.toLowerCase()), n.id && u.push("#" + n.id), (t = cc11001100_hook("t", n.className, "assign")) && d(t)) for (r = cc11001100_hook("r", t.split(/\s+/), "assign"), o = cc11001100_hook("o", 0, "assign"); o < r.length; o++) u.push("." + r[o]);
    var c = cc11001100_hook("c", ["type", "name", "title", "alt"], "var-init");
    for (o = cc11001100_hook("o", 0, "assign"); o < c.length; o++) e = cc11001100_hook("e", c[o], "assign"), (i = cc11001100_hook("i", n.getAttribute(e), "assign")) && u.push("[" + e + '="' + i + '"]');
    return u.join("");
  }
  var Qn = cc11001100_hook("Qn", function () {
      function t(n) {
        cc11001100_hook("n", n, "function-parameter");
        this.name = cc11001100_hook("this.name", t.id, "assign"), this.on = cc11001100_hook("this.on", u({
          onerror: cc11001100_hook("onerror", !0, "object-key-init"),
          onunhandledrejection: cc11001100_hook("onunhandledrejection", !0, "object-key-init")
        }, n), "assign");
      }
      return t.prototype.setupOnce = cc11001100_hook("t.prototype.setupOnce", function () {
        Error.stackTraceLimit = cc11001100_hook("Error.stackTraceLimit", 50, "assign"), On(function (n, r, e) {
          if (!(Jn > 0)) {
            var i = cc11001100_hook("i", nn().getIntegration(t), "var-init");
            i && nn().captureEvent(i.An(n, e), {
              data: {
                stack: cc11001100_hook("stack", n, "object-key-init")
              },
              originalException: cc11001100_hook("originalException", e, "object-key-init")
            });
          }
        }), this.on.onerror && (T.log("Global Handler attached: onerror"), kn()), this.on.onunhandledrejection && (T.log("Global Handler attached: onunhandledrejection"), Tn());
      }, "assign"), t.prototype.An = cc11001100_hook("t.prototype.An", function (n, t) {
        if (!d(n.message) && "onunhandledrejection" !== n.mechanism) {
          var r = cc11001100_hook("r", n.message, "var-init");
          n.message = cc11001100_hook("n.message", r.error && d(r.error.message) ? r.error.message : "No error message", "assign");
        }
        if ("onunhandledrejection" === n.mechanism && n.incomplete) return this.Un(n, t);
        var e = cc11001100_hook("e", Nn(n), "var-init"),
          i = cc11001100_hook("i", {
            mode: cc11001100_hook("mode", n.mode, "object-key-init")
          }, "var-init");
        n.message && (i.message = cc11001100_hook("i.message", n.message, "assign")), n.name && (i.name = cc11001100_hook("i.name", n.name, "assign"));
        var o = cc11001100_hook("o", nn().getClient(), "var-init"),
          u = cc11001100_hook("u", o && o.getOptions().maxValueLength || 250, "var-init");
        return _(e, n.original ? F(JSON.stringify(U(n.original)), u) : "", "onunhandledrejection" === n.mechanism ? "UnhandledRejection" : "Error", {
          data: cc11001100_hook("data", i, "object-key-init"),
          handled: cc11001100_hook("handled", !1, "object-key-init"),
          type: cc11001100_hook("type", n.mechanism, "object-key-init")
        }), e;
      }, "assign"), t.prototype.Un = cc11001100_hook("t.prototype.Un", function (t, r) {
        var e = cc11001100_hook("e", {
          level: cc11001100_hook("level", n.Severity.Error, "object-key-init")
        }, "var-init");
        return p(r) ? e.exception = cc11001100_hook("e.exception", {
          values: cc11001100_hook("values", [{
            type: cc11001100_hook("type", "UnhandledRejection", "object-key-init"),
            value: cc11001100_hook("value", "Non-Error promise rejection captured with value: " + r, "object-key-init")
          }], "object-key-init")
        }, "assign") : (e.exception = cc11001100_hook("e.exception", {
          values: cc11001100_hook("values", [{
            type: cc11001100_hook("type", "UnhandledRejection", "object-key-init"),
            value: cc11001100_hook("value", "Non-Error promise rejection captured with keys: " + $(Object.keys(r).sort()), "object-key-init")
          }], "object-key-init")
        }, "assign"), e.extra = cc11001100_hook("e.extra", {
          __serialized__: cc11001100_hook("__serialized__", N(r), "object-key-init")
        }, "assign")), e.exception.values && e.exception.values[0] && (e.exception.values[0].mechanism = cc11001100_hook("e.exception.values[0].mechanism", {
          data: cc11001100_hook("data", u({
            incomplete: cc11001100_hook("incomplete", !0, "object-key-init"),
            mode: cc11001100_hook("mode", t.mode, "object-key-init")
          }, t.message && {
            message: cc11001100_hook("message", t.message, "object-key-init")
          }, t.name && {
            name: cc11001100_hook("name", t.name, "object-key-init")
          }), "object-key-init"),
          handled: cc11001100_hook("handled", !1, "object-key-init"),
          type: cc11001100_hook("type", t.mechanism, "object-key-init")
        }, "assign")), e;
      }, "assign"), t.id = cc11001100_hook("t.id", "GlobalHandlers", "assign"), t;
    }(), "var-init"),
    Yn = cc11001100_hook("Yn", function () {
      function n() {
        this.Ln = cc11001100_hook("this.Ln", 0, "assign"), this.name = cc11001100_hook("this.name", n.id, "assign");
      }
      return n.prototype.Mn = cc11001100_hook("n.prototype.Mn", function (n) {
        return function () {
          for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < arguments.length; r++) t[r] = cc11001100_hook("t[r]", arguments[r], "assign");
          var e = cc11001100_hook("e", t[0], "var-init");
          return t[0] = cc11001100_hook("t[0]", Xn(e, {
            mechanism: {
              data: {
                function: cc11001100_hook("function", nt(n), "object-key-init")
              },
              handled: cc11001100_hook("handled", !0, "object-key-init"),
              type: cc11001100_hook("type", "instrument", "object-key-init")
            }
          }), "assign"), n.apply(this, t);
        };
      }, "assign"), n.prototype.Fn = cc11001100_hook("n.prototype.Fn", function (n) {
        return function (t) {
          return n(Xn(t, {
            mechanism: {
              data: {
                function: cc11001100_hook("function", "requestAnimationFrame", "object-key-init"),
                handler: cc11001100_hook("handler", nt(n), "object-key-init")
              },
              handled: cc11001100_hook("handled", !0, "object-key-init"),
              type: cc11001100_hook("type", "instrument", "object-key-init")
            }
          }));
        };
      }, "assign"), n.prototype.Pn = cc11001100_hook("n.prototype.Pn", function (n) {
        var t = cc11001100_hook("t", w(), "var-init"),
          r = cc11001100_hook("r", t[n] && t[n].prototype, "var-init");
        r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (D(r, "addEventListener", function (t) {
          return function (r, e, i) {
            try {
              "function" == typeof e.handleEvent && (e.handleEvent = cc11001100_hook("e.handleEvent", Xn(e.handleEvent.bind(e), {
                mechanism: {
                  data: {
                    function: cc11001100_hook("function", "handleEvent", "object-key-init"),
                    handler: cc11001100_hook("handler", nt(e), "object-key-init"),
                    target: cc11001100_hook("target", n, "object-key-init")
                  },
                  handled: cc11001100_hook("handled", !0, "object-key-init"),
                  type: cc11001100_hook("type", "instrument", "object-key-init")
                }
              }), "assign"));
            } catch (n) {}
            return t.call(this, r, Xn(e, {
              mechanism: {
                data: {
                  function: cc11001100_hook("function", "addEventListener", "object-key-init"),
                  handler: cc11001100_hook("handler", nt(e), "object-key-init"),
                  target: cc11001100_hook("target", n, "object-key-init")
                },
                handled: cc11001100_hook("handled", !0, "object-key-init"),
                type: cc11001100_hook("type", "instrument", "object-key-init")
              }
            }), i);
          };
        }), D(r, "removeEventListener", function (n) {
          return function (t, r, e) {
            var i = cc11001100_hook("i", r, "var-init");
            try {
              i = cc11001100_hook("i", i && (i.__sentry_wrapped__ || i), "assign");
            } catch (n) {}
            return n.call(this, t, i, e);
          };
        }));
      }, "assign"), n.prototype.setupOnce = cc11001100_hook("n.prototype.setupOnce", function () {
        this.Ln = cc11001100_hook("this.Ln", this.Ln, "assign");
        var n = cc11001100_hook("n", w(), "var-init");
        D(n, "setTimeout", this.Mn.bind(this)), D(n, "setInterval", this.Mn.bind(this)), D(n, "requestAnimationFrame", this.Fn.bind(this)), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this.Pn.bind(this));
      }, "assign"), n.id = cc11001100_hook("n.id", "TryCatch", "assign"), n;
    }(), "var-init");
  function nt(n) {
    cc11001100_hook("n", n, "function-parameter");
    try {
      return n && n.name || "<anonymous>";
    } catch (n) {
      return "<anonymous>";
    }
  }
  var tt,
    rt = cc11001100_hook("rt", w(), "var-init"),
    et = cc11001100_hook("et", function () {
      function t(n) {
        cc11001100_hook("n", n, "function-parameter");
        this.name = cc11001100_hook("this.name", t.id, "assign"), this.on = cc11001100_hook("this.on", u({
          console: cc11001100_hook("console", !0, "object-key-init"),
          dom: cc11001100_hook("dom", !0, "object-key-init"),
          fetch: cc11001100_hook("fetch", !0, "object-key-init"),
          history: cc11001100_hook("history", !0, "object-key-init"),
          sentry: cc11001100_hook("sentry", !0, "object-key-init"),
          xhr: cc11001100_hook("xhr", !0, "object-key-init")
        }, n), "assign");
      }
      return t.prototype.$n = cc11001100_hook("t.prototype.$n", function () {
        "console" in rt && ["debug", "info", "warn", "error", "log", "assert"].forEach(function (r) {
          r in rt.console && D(rt.console, r, function (e) {
            return function () {
              for (var i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < arguments.length; o++) i[o] = cc11001100_hook("i[o]", arguments[o], "assign");
              var u = cc11001100_hook("u", {
                category: cc11001100_hook("category", "console", "object-key-init"),
                data: {
                  extra: {
                    arguments: cc11001100_hook("arguments", U(i, 3), "object-key-init")
                  },
                  logger: cc11001100_hook("logger", "console", "object-key-init")
                },
                level: cc11001100_hook("level", n.Severity.fromString(r), "object-key-init"),
                message: cc11001100_hook("message", P(i, " "), "object-key-init")
              }, "var-init");
              "assert" === r && !1 === i[0] && (u.message = cc11001100_hook("u.message", "Assertion failed: " + (P(i.slice(1), " ") || "console.assert"), "assign"), u.data.extra.arguments = cc11001100_hook("u.data.extra.arguments", U(i.slice(1), 3), "assign")), t.addBreadcrumb(u, {
                input: cc11001100_hook("input", i, "object-key-init"),
                level: cc11001100_hook("level", r, "object-key-init")
              }), e && Function.prototype.apply.call(e, rt.console, i);
            };
          });
        });
      }, "assign"), t.prototype.qn = cc11001100_hook("t.prototype.qn", function () {
        "document" in rt && (rt.document.addEventListener("click", Gn("click"), !1), rt.document.addEventListener("keypress", Vn(), !1), ["EventTarget", "Node"].forEach(function (n) {
          var t = cc11001100_hook("t", rt[n] && rt[n].prototype, "var-init");
          t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (D(t, "addEventListener", function (n) {
            return function (t, r, e) {
              return r && r.handleEvent ? ("click" === t && D(r, "handleEvent", function (n) {
                return function (t) {
                  return Gn("click")(t), n.call(this, t);
                };
              }), "keypress" === t && D(r, "handleEvent", function (n) {
                return function (t) {
                  return Vn()(t), n.call(this, t);
                };
              })) : ("click" === t && Gn("click", !0)(this), "keypress" === t && Vn()(this)), n.call(this, t, r, e);
            };
          }), D(t, "removeEventListener", function (n) {
            return function (t, r, e) {
              var i = cc11001100_hook("i", r, "var-init");
              try {
                i = cc11001100_hook("i", i && (i.__sentry_wrapped__ || i), "assign");
              } catch (n) {}
              return n.call(this, t, i, e);
            };
          }));
        }));
      }, "assign"), t.prototype.Hn = cc11001100_hook("t.prototype.Hn", function () {
        (function () {
          if (!H()) return !1;
          var n = function (n) {
              return -1 !== n.toString().indexOf("native");
            },
            t = cc11001100_hook("t", w(), "var-init"),
            r = cc11001100_hook("r", null, "var-init"),
            e = cc11001100_hook("e", t.document, "var-init");
          if (e) {
            var i = cc11001100_hook("i", e.createElement("iframe"), "var-init");
            i.hidden = cc11001100_hook("i.hidden", !0, "assign");
            try {
              e.head.appendChild(i), i.contentWindow && i.contentWindow.fetch && (r = cc11001100_hook("r", n(i.contentWindow.fetch), "assign")), e.head.removeChild(i);
            } catch (n) {
              T.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
            }
          }
          return null === r && (r = cc11001100_hook("r", n(t.fetch), "assign")), r;
        })() && D(rt, "fetch", function (r) {
          return function () {
            for (var e = cc11001100_hook("e", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < arguments.length; i++) e[i] = cc11001100_hook("e[i]", arguments[i], "assign");
            var o,
              u = cc11001100_hook("u", e[0], "var-init"),
              c = cc11001100_hook("c", "GET", "var-init");
            "string" == typeof u ? o = cc11001100_hook("o", u, "assign") : "Request" in rt && u instanceof Request ? (o = cc11001100_hook("o", u.url, "assign"), u.method && (c = cc11001100_hook("c", u.method, "assign"))) : o = cc11001100_hook("o", String(u), "assign"), e[1] && e[1].method && (c = cc11001100_hook("c", e[1].method, "assign"));
            var s = cc11001100_hook("s", nn().getClient(), "var-init"),
              a = cc11001100_hook("a", s && s.getDsn(), "var-init");
            if (a) {
              var f = cc11001100_hook("f", new an(a).getStoreEndpoint(), "var-init");
              if (f && o.includes(f)) return "POST" === c && e[1] && e[1].body && it(e[1].body), r.apply(rt, e);
            }
            var h = cc11001100_hook("h", {
              method: cc11001100_hook("method", d(c) ? c.toUpperCase() : c, "object-key-init"),
              url: cc11001100_hook("url", o, "object-key-init")
            }, "var-init");
            return r.apply(rt, e).then(function (n) {
              return h.status_code = cc11001100_hook("h.status_code", n.status, "assign"), t.addBreadcrumb({
                category: cc11001100_hook("category", "fetch", "object-key-init"),
                data: cc11001100_hook("data", h, "object-key-init"),
                type: cc11001100_hook("type", "http", "object-key-init")
              }, {
                input: cc11001100_hook("input", e, "object-key-init"),
                response: cc11001100_hook("response", n, "object-key-init")
              }), n;
            }).catch(function (r) {
              throw t.addBreadcrumb({
                category: cc11001100_hook("category", "fetch", "object-key-init"),
                data: cc11001100_hook("data", h, "object-key-init"),
                level: cc11001100_hook("level", n.Severity.Error, "object-key-init"),
                type: cc11001100_hook("type", "http", "object-key-init")
              }, {
                error: cc11001100_hook("error", r, "object-key-init"),
                input: cc11001100_hook("input", e, "object-key-init")
              }), r;
            });
          };
        });
      }, "assign"), t.prototype.Wn = cc11001100_hook("t.prototype.Wn", function () {
        var n = cc11001100_hook("n", this, "var-init");
        if (r = cc11001100_hook("r", w(), "assign"), e = cc11001100_hook("e", r.chrome, "assign"), i = cc11001100_hook("i", e && e.app && e.app.runtime, "assign"), o = cc11001100_hook("o", "history" in r && !!r.history.pushState && !!r.history.replaceState, "assign"), !i && o) {
          var r,
            e,
            i,
            o,
            u = function (n, r) {
              var e = cc11001100_hook("e", E(rt.location.href), "var-init"),
                i = cc11001100_hook("i", E(r), "var-init"),
                o = cc11001100_hook("o", E(n), "var-init");
              o.path || (o = cc11001100_hook("o", e, "assign")), tt = cc11001100_hook("tt", r, "assign"), e.protocol === i.protocol && e.host === i.host && (r = cc11001100_hook("r", i.relative, "assign")), e.protocol === o.protocol && e.host === o.host && (n = cc11001100_hook("n", o.relative, "assign")), t.addBreadcrumb({
                category: cc11001100_hook("category", "navigation", "object-key-init"),
                data: {
                  from: cc11001100_hook("from", n, "object-key-init"),
                  to: cc11001100_hook("to", r, "object-key-init")
                }
              });
            },
            c = cc11001100_hook("c", rt.onpopstate, "var-init");
          rt.onpopstate = cc11001100_hook("rt.onpopstate", function () {
            for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < arguments.length; r++) t[r] = cc11001100_hook("t[r]", arguments[r], "assign");
            var e = cc11001100_hook("e", rt.location.href, "var-init");
            if (u(tt, e), c) return c.apply(n, t);
          }, "assign"), D(rt.history, "pushState", s), D(rt.history, "replaceState", s);
        }
        function s(n) {
          cc11001100_hook("n", n, "function-parameter");
          return function () {
            for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < arguments.length; r++) t[r] = cc11001100_hook("t[r]", arguments[r], "assign");
            var e = cc11001100_hook("e", t.length > 2 ? t[2] : void 0, "var-init");
            return e && u(tt, String(e)), n.apply(this, t);
          };
        }
      }, "assign"), t.prototype.Bn = cc11001100_hook("t.prototype.Bn", function () {
        if ("XMLHttpRequest" in rt) {
          var n = cc11001100_hook("n", XMLHttpRequest.prototype, "var-init");
          D(n, "open", function (n) {
            return function () {
              for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < arguments.length; r++) t[r] = cc11001100_hook("t[r]", arguments[r], "assign");
              var e = cc11001100_hook("e", t[1], "var-init");
              this.__sentry_xhr__ = cc11001100_hook("this.__sentry_xhr__", {
                method: cc11001100_hook("method", d(t[0]) ? t[0].toUpperCase() : t[0], "object-key-init"),
                url: cc11001100_hook("url", t[1], "object-key-init")
              }, "assign");
              var i = cc11001100_hook("i", nn().getClient(), "var-init"),
                o = cc11001100_hook("o", i && i.getDsn(), "var-init");
              if (o) {
                var u = cc11001100_hook("u", new an(o).getStoreEndpoint(), "var-init");
                d(e) && u && e.includes(u) && (this.__sentry_own_request__ = cc11001100_hook("this.__sentry_own_request__", !0, "assign"));
              }
              return n.apply(this, t);
            };
          }), D(n, "send", function (n) {
            return function () {
              for (var r = cc11001100_hook("r", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) r[e] = cc11001100_hook("r[e]", arguments[e], "assign");
              var i = cc11001100_hook("i", this, "var-init");
              function o() {
                if (4 === i.readyState) {
                  if (i.__sentry_own_request__) return;
                  try {
                    i.__sentry_xhr__ && (i.__sentry_xhr__.status_code = cc11001100_hook("i.__sentry_xhr__.status_code", i.status, "assign"));
                  } catch (n) {}
                  t.addBreadcrumb({
                    category: cc11001100_hook("category", "xhr", "object-key-init"),
                    data: cc11001100_hook("data", i.__sentry_xhr__, "object-key-init"),
                    type: cc11001100_hook("type", "http", "object-key-init")
                  }, {
                    xhr: cc11001100_hook("xhr", i, "object-key-init")
                  });
                }
              }
              return i.__sentry_own_request__ && it(r[0]), ["onload", "onerror", "onprogress"].forEach(function (n) {
                !function (n, t) {
                  n in t && "function" == typeof t[n] && D(t, n, function (t) {
                    return Xn(t, {
                      mechanism: {
                        data: {
                          function: cc11001100_hook("function", n, "object-key-init"),
                          handler: cc11001100_hook("handler", t && t.name || "<anonymous>", "object-key-init")
                        },
                        handled: cc11001100_hook("handled", !0, "object-key-init"),
                        type: cc11001100_hook("type", "instrument", "object-key-init")
                      }
                    });
                  });
                }(n, i);
              }), "onreadystatechange" in i && "function" == typeof i.onreadystatechange ? D(i, "onreadystatechange", function (n) {
                return Xn(n, {
                  mechanism: {
                    data: {
                      function: cc11001100_hook("function", "onreadystatechange", "object-key-init"),
                      handler: cc11001100_hook("handler", n && n.name || "<anonymous>", "object-key-init")
                    },
                    handled: cc11001100_hook("handled", !0, "object-key-init"),
                    type: cc11001100_hook("type", "instrument", "object-key-init")
                  }
                }, o);
              }) : i.onreadystatechange = cc11001100_hook("i.onreadystatechange", o, "assign"), n.apply(this, r);
            };
          });
        }
      }, "assign"), t.addBreadcrumb = cc11001100_hook("t.addBreadcrumb", function (n, r) {
        nn().getIntegration(t) && nn().addBreadcrumb(n, r);
      }, "assign"), t.prototype.setupOnce = cc11001100_hook("t.prototype.setupOnce", function () {
        this.on.console && this.$n(), this.on.dom && this.qn(), this.on.xhr && this.Bn(), this.on.fetch && this.Hn(), this.on.history && this.Wn();
      }, "assign"), t.id = cc11001100_hook("t.id", "Breadcrumbs", "assign"), t;
    }(), "var-init");
  function it(t) {
    cc11001100_hook("t", t, "function-parameter");
    try {
      var r = cc11001100_hook("r", JSON.parse(t), "var-init");
      et.addBreadcrumb({
        category: cc11001100_hook("category", "sentry", "object-key-init"),
        event_id: cc11001100_hook("event_id", r.event_id, "object-key-init"),
        level: cc11001100_hook("level", r.level || n.Severity.fromString("error"), "object-key-init"),
        message: cc11001100_hook("message", j(r), "object-key-init")
      }, {
        event: cc11001100_hook("event", r, "object-key-init")
      });
    } catch (n) {
      T.error("Error while adding sentry type breadcrumb");
    }
  }
  var ot = cc11001100_hook("ot", "cause", "var-init"),
    ut = cc11001100_hook("ut", 5, "var-init"),
    ct = cc11001100_hook("ct", function () {
      function n(t) {
        cc11001100_hook("t", t, "function-parameter");
        void 0 === t && (t = cc11001100_hook("t", {}, "assign")), this.name = cc11001100_hook("this.name", n.id, "assign"), this.Jn = cc11001100_hook("this.Jn", t.key || ot, "assign"), this.s = cc11001100_hook("this.s", t.limit || ut, "assign");
      }
      return n.prototype.setupOnce = cc11001100_hook("n.prototype.setupOnce", function () {
        V(function (t, r) {
          var e = cc11001100_hook("e", nn().getIntegration(n), "var-init");
          return e ? e.Xn(t, r) : t;
        });
      }, "assign"), n.prototype.Xn = cc11001100_hook("n.prototype.Xn", function (n, t) {
        if (!(n.exception && n.exception.values && t && t.originalException instanceof Error)) return n;
        var r = cc11001100_hook("r", this.zn(t.originalException, this.Jn), "var-init");
        return n.exception.values = cc11001100_hook("n.exception.values", s(r, n.exception.values), "assign"), n;
      }, "assign"), n.prototype.zn = cc11001100_hook("n.prototype.zn", function (n, t, r) {
        if (void 0 === r && (r = cc11001100_hook("r", [], "assign")), !(n[t] instanceof Error) || r.length + 1 >= this.s) return r;
        var e = cc11001100_hook("e", In(Rn(n[t])), "var-init");
        return this.zn(n[t], t, s([e], r));
      }, "assign"), n.id = cc11001100_hook("n.id", "LinkedErrors", "assign"), n;
    }(), "var-init"),
    st = cc11001100_hook("st", w(), "var-init"),
    at = cc11001100_hook("at", function () {
      function n() {
        this.name = cc11001100_hook("this.name", n.id, "assign");
      }
      return n.prototype.setupOnce = cc11001100_hook("n.prototype.setupOnce", function () {
        V(function (t) {
          if (nn().getIntegration(n)) {
            if (!st.navigator || !st.location) return t;
            var r = cc11001100_hook("r", t.request || {}, "var-init");
            return r.url = cc11001100_hook("r.url", r.url || st.location.href, "assign"), r.headers = cc11001100_hook("r.headers", r.headers || {}, "assign"), r.headers["User-Agent"] = cc11001100_hook("r.headers[\"User-Agent\"]", st.navigator.userAgent, "assign"), u({}, t, {
              request: cc11001100_hook("request", r, "object-key-init")
            });
          }
          return t;
        });
      }, "assign"), n.id = cc11001100_hook("n.id", "UserAgent", "assign"), n;
    }(), "var-init"),
    ft = cc11001100_hook("ft", Object.freeze({
      GlobalHandlers: cc11001100_hook("GlobalHandlers", Qn, "object-key-init"),
      TryCatch: cc11001100_hook("TryCatch", Yn, "object-key-init"),
      Breadcrumbs: cc11001100_hook("Breadcrumbs", et, "object-key-init"),
      LinkedErrors: cc11001100_hook("LinkedErrors", ct, "object-key-init"),
      UserAgent: cc11001100_hook("UserAgent", at, "object-key-init")
    }), "var-init"),
    ht = cc11001100_hook("ht", [new bn(), new mn(), new Yn(), new et(), new Qn(), new ct(), new at()], "var-init");
  var lt = cc11001100_hook("lt", {}, "var-init"),
    vt = cc11001100_hook("vt", w(), "var-init");
  vt.Sentry && vt.Sentry.Integrations && (lt = cc11001100_hook("lt", vt.Sentry.Integrations, "assign"));
  var dt = cc11001100_hook("dt", u({}, lt, wn, ft), "var-init");
  return n.BrowserClient = cc11001100_hook("n.BrowserClient", Wn, "assign"), n.Hub = cc11001100_hook("n.Hub", Z, "assign"), n.Integrations = cc11001100_hook("n.Integrations", dt, "assign"), n.SDK_NAME = cc11001100_hook("n.SDK_NAME", Hn, "assign"), n.SDK_VERSION = cc11001100_hook("n.SDK_VERSION", "5.6.1", "assign"), n.Scope = cc11001100_hook("n.Scope", z, "assign"), n.Span = cc11001100_hook("n.Span", X, "assign"), n.Transports = cc11001100_hook("n.Transports", $n, "assign"), n.addBreadcrumb = cc11001100_hook("n.addBreadcrumb", function (n) {
    on("addBreadcrumb", n);
  }, "assign"), n.addGlobalEventProcessor = cc11001100_hook("n.addGlobalEventProcessor", V, "assign"), n.captureEvent = cc11001100_hook("n.captureEvent", function (n) {
    return on("captureEvent", n);
  }, "assign"), n.captureException = cc11001100_hook("n.captureException", captureException, "assign"), n.captureMessage = cc11001100_hook("n.captureMessage", function (n, t) {
    var r;
    try {
      throw new Error(n);
    } catch (n) {
      r = cc11001100_hook("r", n, "assign");
    }
    return on("captureMessage", n, t, {
      originalException: cc11001100_hook("originalException", n, "object-key-init"),
      syntheticException: cc11001100_hook("syntheticException", r, "object-key-init")
    });
  }, "assign"), n.close = cc11001100_hook("n.close", function (n) {
    var t = cc11001100_hook("t", nn().getClient(), "var-init");
    return t ? t.close(n) : Promise.reject(!1);
  }, "assign"), n.configureScope = cc11001100_hook("n.configureScope", function (n) {
    on("configureScope", n);
  }, "assign"), n.defaultIntegrations = cc11001100_hook("n.defaultIntegrations", ht, "assign"), n.flush = cc11001100_hook("n.flush", function (n) {
    var t = cc11001100_hook("t", nn().getClient(), "var-init");
    return t ? t.flush(n) : Promise.reject(!1);
  }, "assign"), n.forceLoad = cc11001100_hook("n.forceLoad", function () {}, "assign"), n.getCurrentHub = cc11001100_hook("n.getCurrentHub", nn, "assign"), n.getHubFromCarrier = cc11001100_hook("n.getHubFromCarrier", rn, "assign"), n.init = cc11001100_hook("n.init", function (n) {
    if (void 0 === n && (n = cc11001100_hook("n", {}, "assign")), void 0 === n.defaultIntegrations && (n.defaultIntegrations = cc11001100_hook("n.defaultIntegrations", ht, "assign")), void 0 === n.release) {
      var t = cc11001100_hook("t", w(), "var-init");
      t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (n.release = cc11001100_hook("n.release", t.SENTRY_RELEASE.id, "assign"));
    }
    !function (n, t) {
      !0 === t.debug && T.enable(), nn().bindClient(new n(t));
    }(Wn, n);
  }, "assign"), n.lastEventId = cc11001100_hook("n.lastEventId", function () {
    return nn().lastEventId();
  }, "assign"), n.onLoad = cc11001100_hook("n.onLoad", function (n) {
    n();
  }, "assign"), n.setContext = cc11001100_hook("n.setContext", function (n, t) {
    on("setContext", n, t);
  }, "assign"), n.setExtra = cc11001100_hook("n.setExtra", function (n, t) {
    on("setExtra", n, t);
  }, "assign"), n.setExtras = cc11001100_hook("n.setExtras", function (n) {
    on("setExtras", n);
  }, "assign"), n.setTag = cc11001100_hook("n.setTag", function (n, t) {
    on("setTag", n, t);
  }, "assign"), n.setTags = cc11001100_hook("n.setTags", function (n) {
    on("setTags", n);
  }, "assign"), n.setUser = cc11001100_hook("n.setUser", function (n) {
    on("setUser", n);
  }, "assign"), n.showReportDialog = cc11001100_hook("n.showReportDialog", function (n) {
    void 0 === n && (n = cc11001100_hook("n", {}, "assign")), n.eventId || (n.eventId = cc11001100_hook("n.eventId", nn().lastEventId(), "assign"));
    var t = cc11001100_hook("t", nn().getClient(), "var-init");
    t && t.showReportDialog(n);
  }, "assign"), n.withScope = cc11001100_hook("n.withScope", un, "assign"), n.wrap = cc11001100_hook("n.wrap", function (n) {
    return Xn(n)();
  }, "assign"), n;
}({}), "var-init");
//# sourceMappingURL=bundle.min.js.map