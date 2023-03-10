!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t();
}(0, function () {
  "use strict";

  function e() {
    return (e = cc11001100_hook("e", Object.assign || function (e) {
      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", arguments[t], "var-init");
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = cc11001100_hook("e[n]", r[n], "assign"));
      }
      return e;
    }, "assign")).apply(this, arguments);
  }
  var t = cc11001100_hook("t", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, "var-init");
  var r,
    n = cc11001100_hook("n", (function (e, t) {
      function r(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        for (var r = cc11001100_hook("r", 0, "var-init"); r < e.length; ++r) if (e[r] === t) return r;
        return -1;
      }
      function n(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", [], "var-init"),
          i = cc11001100_hook("i", [], "var-init");
        return null == t && (t = cc11001100_hook("t", function (e, t) {
          return n[0] === t ? "[Circular ~]" : "[Circular ~." + i.slice(0, r(n, t)).join(".") + "]";
        }, "assign")), function (o, a) {
          if (n.length > 0) {
            var s = cc11001100_hook("s", r(n, this), "var-init");
            ~s ? n.splice(s + 1) : n.push(this), ~s ? i.splice(s, 1 / 0, o) : i.push(o), ~r(n, a) && (a = cc11001100_hook("a", t.call(this, o, a), "assign"));
          } else n.push(a);
          return null == e ? a instanceof Error ? function (e) {
            var t = cc11001100_hook("t", {
              stack: cc11001100_hook("stack", e.stack, "object-key-init"),
              message: cc11001100_hook("message", e.message, "object-key-init"),
              name: cc11001100_hook("name", e.name, "object-key-init")
            }, "var-init");
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = cc11001100_hook("t[r]", e[r], "assign"));
            return t;
          }(a) : a : e.call(this, o, a);
        };
      }
      (e.exports = cc11001100_hook("e.exports", function (e, t, r, i) {
        return JSON.stringify(e, n(t, i), r);
      }, "assign")).getSerialize = cc11001100_hook("(e.exports = function (e, t, r, i) {\n  return JSON.stringify(e, n(t, i), r);\n}).getSerialize", n, "assign");
    }(r = cc11001100_hook("r", {
      exports: {}
    }, "assign"), r.exports), r.exports), "var-init"),
    i = cc11001100_hook("i", (n.getSerialize, "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}), "var-init");
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    return void 0 === e;
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "[object Object]" === Object.prototype.toString.call(e);
  }
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "[object String]" === Object.prototype.toString.call(e);
  }
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "[object Array]" === Object.prototype.toString.call(e);
  }
  function c() {
    try {
      return new ErrorEvent(""), !0;
    } catch (e) {
      return !1;
    }
  }
  function u() {
    if (!("fetch" in i)) return !1;
    try {
      return new Headers(), new Request(""), new Response(), !0;
    } catch (e) {
      return !1;
    }
  }
  function f(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r, n;
    if (o(e.length)) for (r in e) h(e, r) && t.call(null, r, e[r]);else if (n = cc11001100_hook("n", e.length, "assign")) for (r = cc11001100_hook("r", 0, "assign"); r < n; r++) t.call(null, r, e[r]);
  }
  function h(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t, r = cc11001100_hook("r", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); n < i; n++) s(t = cc11001100_hook("t", e[n], "assign")) ? r.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && r.push(t.source);
    return new RegExp(r.join("|"), "i");
  }
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      r,
      n,
      i,
      o,
      a = cc11001100_hook("a", [], "var-init");
    if (!e || !e.tagName) return "";
    if (a.push(e.tagName.toLowerCase()), e.id && a.push("#" + e.id), (t = cc11001100_hook("t", e.className, "assign")) && s(t)) for (r = cc11001100_hook("r", t.split(/\s+/), "assign"), o = cc11001100_hook("o", 0, "assign"); o < r.length; o++) a.push("." + r[o]);
    var l = cc11001100_hook("l", ["type", "name", "title", "alt"], "var-init");
    for (o = cc11001100_hook("o", 0, "assign"); o < l.length; o++) n = cc11001100_hook("n", l[o], "assign"), (i = cc11001100_hook("i", e.getAttribute(n), "assign")) && a.push("[" + n + '="' + i + '"]');
    return a.join("");
  }
  function g(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return !!(!!e ^ !!t);
  }
  function v(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (g(e, t)) return !1;
    var r,
      n,
      i = cc11001100_hook("i", e.frames, "var-init"),
      o = cc11001100_hook("o", t.frames, "var-init");
    if (i.length !== o.length) return !1;
    for (var a = cc11001100_hook("a", 0, "var-init"); a < i.length; a++) if (r = cc11001100_hook("r", i[a], "assign"), n = cc11001100_hook("n", o[a], "assign"), r.filename !== n.filename || r.lineno !== n.lineno || r.colno !== n.colno || r.function !== n.function) return !1;
    return !0;
  }
  var _ = cc11001100_hook("_", 3, "var-init"),
    m = cc11001100_hook("m", 51200, "var-init"),
    b = cc11001100_hook("b", 40, "var-init");
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (e) {
      return ~-encodeURI(e).split(/%..|./).length;
    }(JSON.stringify(e));
  }
  function E(e) {
    cc11001100_hook("e", e, "function-parameter");
    if ("string" == typeof e) return e.length <= 40 ? e : e.substr(0, 39) + "…";
    if ("number" == typeof e || "boolean" == typeof e || void 0 === e) return e;
    var t = cc11001100_hook("t", Object.prototype.toString.call(e), "var-init");
    return "[object Object]" === t ? "[Object]" : "[object Array]" === t ? "[Array]" : "[object Function]" === t ? e.name ? "[Function: " + e.name + "]" : "[Function]" : e;
  }
  var x = cc11001100_hook("x", {
      isObject: function (e) {
        return "object" == typeof e && null !== e;
      },
      isError: function (e) {
        switch ({}.toString.call(e)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return e instanceof Error;
        }
      },
      isErrorEvent: function (e) {
        return c() && "[object ErrorEvent]" === {}.toString.call(e);
      },
      isUndefined: cc11001100_hook("isUndefined", o, "object-key-init"),
      isFunction: function (e) {
        return "function" == typeof e;
      },
      isPlainObject: cc11001100_hook("isPlainObject", a, "object-key-init"),
      isString: cc11001100_hook("isString", s, "object-key-init"),
      isArray: cc11001100_hook("isArray", l, "object-key-init"),
      isEmptyObject: function (e) {
        if (!a(e)) return !1;
        for (var t in e) if (e.hasOwnProperty(t)) return !1;
        return !0;
      },
      supportsErrorEvent: cc11001100_hook("supportsErrorEvent", c, "object-key-init"),
      supportsFetch: cc11001100_hook("supportsFetch", u, "object-key-init"),
      supportsReferrerPolicy: function () {
        if (!u()) return !1;
        try {
          return new Request("pickleRick", {
            referrerPolicy: cc11001100_hook("referrerPolicy", "origin", "object-key-init")
          }), !0;
        } catch (e) {
          return !1;
        }
      },
      supportsPromiseRejectionEvent: function () {
        return "function" == typeof PromiseRejectionEvent;
      },
      wrappedCallback: function (e) {
        return function (t, r) {
          var n = cc11001100_hook("n", e(t) || t, "var-init");
          return r && r(n) || n;
        };
      },
      each: cc11001100_hook("each", f, "object-key-init"),
      objectMerge: function (e, t) {
        return t ? (f(t, function (t, r) {
          e[t] = cc11001100_hook("e[t]", r, "assign");
        }), e) : e;
      },
      truncate: function (e, t) {
        return !t || e.length <= t ? e : e.substr(0, t) + "…";
      },
      objectFrozen: function (e) {
        return !!Object.isFrozen && Object.isFrozen(e);
      },
      hasKey: cc11001100_hook("hasKey", h, "object-key-init"),
      joinRegExp: cc11001100_hook("joinRegExp", p, "object-key-init"),
      urlencode: function (e) {
        var t = cc11001100_hook("t", [], "var-init");
        return f(e, function (e, r) {
          t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r));
        }), t.join("&");
      },
      uuid4: function () {
        var e = cc11001100_hook("e", i.crypto || i.msCrypto, "var-init");
        if (!o(e) && e.getRandomValues) {
          var t = cc11001100_hook("t", new Uint16Array(8), "var-init");
          e.getRandomValues(t), t[3] = cc11001100_hook("t[3]", 4095 & t[3] | 16384, "assign"), t[4] = cc11001100_hook("t[4]", 16383 & t[4] | 32768, "assign");
          var r = function (e) {
            for (var t = cc11001100_hook("t", e.toString(16), "var-init"); t.length < 4;) t = cc11001100_hook("t", "0" + t, "assign");
            return t;
          };
          return r(t[0]) + r(t[1]) + r(t[2]) + r(t[3]) + r(t[4]) + r(t[5]) + r(t[6]) + r(t[7]);
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          var t = cc11001100_hook("t", 16 * Math.random() | 0, "var-init");
          return ("x" === e ? t : 3 & t | 8).toString(16);
        });
      },
      htmlTreeAsString: function (e) {
        for (var t, r = cc11001100_hook("r", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", " > ".length, "var-init"); e && n++ < 5 && !("html" === (t = cc11001100_hook("t", d(e), "assign")) || n > 1 && i + r.length * o + t.length >= 80);) r.push(t), i += cc11001100_hook("i", t.length, "assign"), e = cc11001100_hook("e", e.parentNode, "assign");
        return r.reverse().join(" > ");
      },
      htmlElementAsString: cc11001100_hook("htmlElementAsString", d, "object-key-init"),
      isSameException: function (e, t) {
        return !g(e, t) && (e = cc11001100_hook("e", e.values[0], "assign"), t = cc11001100_hook("t", t.values[0], "assign"), e.type === t.type && e.value === t.value && (r = cc11001100_hook("r", e.stacktrace, "assign"), n = cc11001100_hook("n", t.stacktrace, "assign"), (!o(r) || !o(n)) && v(e.stacktrace, t.stacktrace)));
        var r, n;
      },
      isSameStacktrace: cc11001100_hook("isSameStacktrace", v, "object-key-init"),
      parseUrl: function (e) {
        if ("string" != typeof e) return {};
        var t = cc11001100_hook("t", e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/), "var-init"),
          r = cc11001100_hook("r", t[6] || "", "var-init"),
          n = cc11001100_hook("n", t[8] || "", "var-init");
        return {
          protocol: cc11001100_hook("protocol", t[2], "object-key-init"),
          host: cc11001100_hook("host", t[4], "object-key-init"),
          path: cc11001100_hook("path", t[5], "object-key-init"),
          relative: cc11001100_hook("relative", t[5] + r + n, "object-key-init")
        };
      },
      fill: function (e, t, r, n) {
        if (null != e) {
          var i = cc11001100_hook("i", e[t], "var-init");
          e[t] = cc11001100_hook("e[t]", r(i), "assign"), e[t].__raven__ = cc11001100_hook("e[t].__raven__", !0, "assign"), e[t].__orig__ = cc11001100_hook("e[t].__orig__", i, "assign"), n && n.push([e, t, i]);
        }
      },
      safeJoin: function (e, t) {
        if (!l(e)) return "";
        for (var r = cc11001100_hook("r", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) try {
          r.push(String(e[n]));
        } catch (e) {
          r.push("[value cannot be serialized]");
        }
        return r.join(t);
      },
      serializeException: function e(t, r, i) {
        if (!a(t)) return t;
        i = cc11001100_hook("i", "number" != typeof (r = cc11001100_hook("r", "number" != typeof r ? _ : r, "assign")) ? m : i, "assign");
        var o = cc11001100_hook("o", function e(t, r) {
          return 0 === r ? E(t) : a(t) ? Object.keys(t).reduce(function (n, i) {
            return n[i] = cc11001100_hook("n[i]", e(t[i], r - 1), "assign"), n;
          }, {}) : Array.isArray(t) ? t.map(function (t) {
            return e(t, r - 1);
          }) : E(t);
        }(t, r), "var-init");
        return y(n(o)) > i ? e(t, r - 1) : o;
      },
      serializeKeysForMessage: function (e, t) {
        if ("number" == typeof e || "string" == typeof e) return e.toString();
        if (!Array.isArray(e)) return "";
        if (0 === (e = cc11001100_hook("e", e.filter(function (e) {
          return "string" == typeof e;
        }), "assign")).length) return "[object has no keys]";
        if (t = cc11001100_hook("t", "number" != typeof t ? b : t, "assign"), e[0].length >= t) return e[0];
        for (var r = cc11001100_hook("r", e.length, "var-init"); r > 0; r--) {
          var n = cc11001100_hook("n", e.slice(0, r).join(", "), "var-init");
          if (!(n.length > t)) return r === e.length ? n : n + "…";
        }
        return "";
      },
      sanitize: function (e, t) {
        if (!l(t) || l(t) && 0 === t.length) return e;
        var r,
          i = cc11001100_hook("i", p(t), "var-init"),
          o = cc11001100_hook("o", "********", "var-init");
        try {
          r = cc11001100_hook("r", JSON.parse(n(e)), "assign");
        } catch (t) {
          return e;
        }
        return function e(t) {
          return l(t) ? t.map(function (t) {
            return e(t);
          }) : a(t) ? Object.keys(t).reduce(function (r, n) {
            return i.test(n) ? r[n] = cc11001100_hook("r[n]", o, "assign") : r[n] = cc11001100_hook("r[n]", e(t[n]), "assign"), r;
          }, {}) : t;
        }(r);
      }
    }, "var-init"),
    k = cc11001100_hook("k", {
      collectWindowErrors: cc11001100_hook("collectWindowErrors", !0, "object-key-init"),
      debug: cc11001100_hook("debug", !1, "object-key-init")
    }, "var-init"),
    S = cc11001100_hook("S", "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, "var-init"),
    w = cc11001100_hook("w", [].slice, "var-init"),
    O = cc11001100_hook("O", "?", "var-init"),
    C = cc11001100_hook("C", /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/, "var-init");
  function R() {
    return "undefined" == typeof document || null == document.location ? "" : document.location.href;
  }
  k.report = cc11001100_hook("k.report", function () {
    var e,
      t,
      r = cc11001100_hook("r", [], "var-init"),
      n = cc11001100_hook("n", null, "var-init"),
      i = cc11001100_hook("i", null, "var-init"),
      o = cc11001100_hook("o", null, "var-init");
    function a(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", null, "var-init");
      if (!t || k.collectWindowErrors) {
        for (var i in r) if (r.hasOwnProperty(i)) try {
          r[i].apply(null, [e].concat(w.call(arguments, 2)));
        } catch (e) {
          n = cc11001100_hook("n", e, "assign");
        }
        if (n) throw n;
      }
    }
    function s(t, r, n, i, s) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      var c = cc11001100_hook("c", x.isErrorEvent(s) ? s.error : s, "var-init"),
        u = cc11001100_hook("u", x.isErrorEvent(t) ? t.message : t, "var-init");
      if (o) k.computeStackTrace.augmentStackTraceWithInitialElement(o, r, n, u), l();else if (c && x.isError(c)) a(k.computeStackTrace(c), !0);else {
        var f,
          h = cc11001100_hook("h", {
            url: cc11001100_hook("url", r, "object-key-init"),
            line: cc11001100_hook("line", n, "object-key-init"),
            column: cc11001100_hook("column", i, "object-key-init")
          }, "var-init"),
          p = cc11001100_hook("p", void 0, "var-init");
        if ("[object String]" === {}.toString.call(u)) (f = cc11001100_hook("f", u.match(C), "assign")) && (p = cc11001100_hook("p", f[1], "assign"), u = cc11001100_hook("u", f[2], "assign"));
        h.func = cc11001100_hook("h.func", O, "assign"), a({
          name: cc11001100_hook("name", p, "object-key-init"),
          message: cc11001100_hook("message", u, "object-key-init"),
          url: cc11001100_hook("url", R(), "object-key-init"),
          stack: cc11001100_hook("stack", [h], "object-key-init")
        }, !0);
      }
      return !!e && e.apply(this, arguments);
    }
    function l() {
      var e = cc11001100_hook("e", o, "var-init"),
        t = cc11001100_hook("t", n, "var-init");
      n = cc11001100_hook("n", null, "assign"), o = cc11001100_hook("o", null, "assign"), i = cc11001100_hook("i", null, "assign"), a.apply(null, [e, !1].concat(t));
    }
    function c(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", w.call(arguments, 1), "var-init");
      if (o) {
        if (i === e) return;
        l();
      }
      var a = cc11001100_hook("a", k.computeStackTrace(e), "var-init");
      if (o = cc11001100_hook("o", a, "assign"), i = cc11001100_hook("i", e, "assign"), n = cc11001100_hook("n", r, "assign"), setTimeout(function () {
        i === e && l();
      }, a.incomplete ? 2e3 : 0), !1 !== t) throw e;
    }
    return c.subscribe = cc11001100_hook("c.subscribe", function (n) {
      t || (e = cc11001100_hook("e", S.onerror, "assign"), S.onerror = cc11001100_hook("S.onerror", s, "assign"), t = cc11001100_hook("t", !0, "assign")), r.push(n);
    }, "assign"), c.unsubscribe = cc11001100_hook("c.unsubscribe", function (e) {
      for (var t = cc11001100_hook("t", r.length - 1, "var-init"); t >= 0; --t) r[t] === e && r.splice(t, 1);
    }, "assign"), c.uninstall = cc11001100_hook("c.uninstall", function () {
      t && (S.onerror = cc11001100_hook("S.onerror", e, "assign"), t = cc11001100_hook("t", !1, "assign"), e = cc11001100_hook("e", void 0, "assign")), r = cc11001100_hook("r", [], "assign");
    }, "assign"), c;
  }(), "assign"), k.computeStackTrace = cc11001100_hook("k.computeStackTrace", function () {
    function e(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (void 0 !== e.stack && e.stack) {
        for (var t, r, n, i = cc11001100_hook("i", /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, "var-init"), o = cc11001100_hook("o", /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, "var-init"), a = cc11001100_hook("a", /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, "var-init"), s = cc11001100_hook("s", /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, "var-init"), l = cc11001100_hook("l", /\((\S*)(?::(\d+))(?::(\d+))\)/, "var-init"), c = cc11001100_hook("c", e.stack.split("\n"), "var-init"), u = cc11001100_hook("u", [], "var-init"), f = cc11001100_hook("f", (/^(.*) is undefined$/.exec(e.message), 0), "var-init"), h = cc11001100_hook("h", c.length, "var-init"); f < h; ++f) {
          if (r = cc11001100_hook("r", i.exec(c[f]), "assign")) {
            var p = cc11001100_hook("p", r[2] && 0 === r[2].indexOf("native"), "var-init");
            r[2] && 0 === r[2].indexOf("eval") && (t = cc11001100_hook("t", l.exec(r[2]), "assign")) && (r[2] = cc11001100_hook("r[2]", t[1], "assign"), r[3] = cc11001100_hook("r[3]", t[2], "assign"), r[4] = cc11001100_hook("r[4]", t[3], "assign")), n = cc11001100_hook("n", {
              url: cc11001100_hook("url", p ? null : r[2], "object-key-init"),
              func: cc11001100_hook("func", r[1] || O, "object-key-init"),
              args: cc11001100_hook("args", p ? [r[2]] : [], "object-key-init"),
              line: cc11001100_hook("line", r[3] ? +r[3] : null, "object-key-init"),
              column: cc11001100_hook("column", r[4] ? +r[4] : null, "object-key-init")
            }, "assign");
          } else if (r = cc11001100_hook("r", o.exec(c[f]), "assign")) n = cc11001100_hook("n", {
            url: cc11001100_hook("url", r[2], "object-key-init"),
            func: cc11001100_hook("func", r[1] || O, "object-key-init"),
            args: cc11001100_hook("args", [], "object-key-init"),
            line: cc11001100_hook("line", +r[3], "object-key-init"),
            column: cc11001100_hook("column", r[4] ? +r[4] : null, "object-key-init")
          }, "assign");else {
            if (!(r = cc11001100_hook("r", a.exec(c[f]), "assign"))) continue;
            r[3] && r[3].indexOf(" > eval") > -1 && (t = cc11001100_hook("t", s.exec(r[3]), "assign")) ? (r[3] = cc11001100_hook("r[3]", t[1], "assign"), r[4] = cc11001100_hook("r[4]", t[2], "assign"), r[5] = cc11001100_hook("r[5]", null, "assign")) : 0 !== f || r[5] || void 0 === e.columnNumber || (u[0].column = cc11001100_hook("u[0].column", e.columnNumber + 1, "assign")), n = cc11001100_hook("n", {
              url: cc11001100_hook("url", r[3], "object-key-init"),
              func: cc11001100_hook("func", r[1] || O, "object-key-init"),
              args: cc11001100_hook("args", r[2] ? r[2].split(",") : [], "object-key-init"),
              line: cc11001100_hook("line", r[4] ? +r[4] : null, "object-key-init"),
              column: cc11001100_hook("column", r[5] ? +r[5] : null, "object-key-init")
            }, "assign");
          }
          !n.func && n.line && (n.func = cc11001100_hook("n.func", O, "assign")), u.push(n);
        }
        return u.length ? {
          name: cc11001100_hook("name", e.name, "object-key-init"),
          message: cc11001100_hook("message", e.message, "object-key-init"),
          url: cc11001100_hook("url", R(), "object-key-init"),
          stack: cc11001100_hook("stack", u, "object-key-init")
        } : null;
      }
    }
    function t(e, t, r, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var i = cc11001100_hook("i", {
        url: cc11001100_hook("url", t, "object-key-init"),
        line: cc11001100_hook("line", r, "object-key-init")
      }, "var-init");
      if (i.url && i.line) {
        if (e.incomplete = cc11001100_hook("e.incomplete", !1, "assign"), i.func || (i.func = cc11001100_hook("i.func", O, "assign")), e.stack.length > 0 && e.stack[0].url === i.url) {
          if (e.stack[0].line === i.line) return !1;
          if (!e.stack[0].line && e.stack[0].func === i.func) return e.stack[0].line = cc11001100_hook("e.stack[0].line", i.line, "assign"), !1;
        }
        return e.stack.unshift(i), e.partial = cc11001100_hook("e.partial", !0, "assign"), !0;
      }
      return e.incomplete = cc11001100_hook("e.incomplete", !0, "assign"), !1;
    }
    function r(e, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      for (var o, a, s = cc11001100_hook("s", /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, "var-init"), l = cc11001100_hook("l", [], "var-init"), c = cc11001100_hook("c", {}, "var-init"), u = cc11001100_hook("u", !1, "var-init"), f = cc11001100_hook("f", r.caller, "var-init"); f && !u; f = cc11001100_hook("f", f.caller, "assign")) if (f !== n && f !== k.report) {
        if (a = cc11001100_hook("a", {
          url: cc11001100_hook("url", null, "object-key-init"),
          func: cc11001100_hook("func", O, "object-key-init"),
          line: cc11001100_hook("line", null, "object-key-init"),
          column: cc11001100_hook("column", null, "object-key-init")
        }, "assign"), f.name ? a.func = cc11001100_hook("a.func", f.name, "assign") : (o = cc11001100_hook("o", s.exec(f.toString()), "assign")) && (a.func = cc11001100_hook("a.func", o[1], "assign")), void 0 === a.func) try {
          a.func = cc11001100_hook("a.func", o.input.substring(0, o.input.indexOf("{")), "assign");
        } catch (e) {}
        c["" + f] ? u = cc11001100_hook("u", !0, "assign") : c["" + f] = cc11001100_hook("c[\"\" + f]", !0, "assign"), l.push(a);
      }
      i && l.splice(0, i);
      var h = cc11001100_hook("h", {
        name: cc11001100_hook("name", e.name, "object-key-init"),
        message: cc11001100_hook("message", e.message, "object-key-init"),
        url: cc11001100_hook("url", R(), "object-key-init"),
        stack: cc11001100_hook("stack", l, "object-key-init")
      }, "var-init");
      return t(h, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), h;
    }
    function n(t, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var i = cc11001100_hook("i", null, "var-init");
      n = cc11001100_hook("n", null == n ? 0 : +n, "assign");
      try {
        if (i = cc11001100_hook("i", e(t), "assign")) return i;
      } catch (e) {
        if (k.debug) throw e;
      }
      try {
        if (i = cc11001100_hook("i", r(t, n + 1), "assign")) return i;
      } catch (e) {
        if (k.debug) throw e;
      }
      return {
        name: cc11001100_hook("name", t.name, "object-key-init"),
        message: cc11001100_hook("message", t.message, "object-key-init"),
        url: cc11001100_hook("url", R(), "object-key-init")
      };
    }
    return n.augmentStackTraceWithInitialElement = cc11001100_hook("n.augmentStackTraceWithInitialElement", t, "assign"), n.computeStackTraceFromStackProp = cc11001100_hook("n.computeStackTraceFromStackProp", e, "assign"), n;
  }(), "assign");
  var j = cc11001100_hook("j", k, "var-init");
  function T(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", (65535 & e) + (65535 & t), "var-init");
    return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
  }
  function F(e, t, r, n, i, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    return T((a = cc11001100_hook("a", T(T(t, e), T(n, o)), "assign")) << (s = cc11001100_hook("s", i, "assign")) | a >>> 32 - s, r);
    var a, s;
  }
  function P(e, t, r, n, i, o, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    return F(t & r | ~t & n, e, t, i, o, a);
  }
  function D(e, t, r, n, i, o, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    return F(t & n | r & ~n, e, t, i, o, a);
  }
  function H(e, t, r, n, i, o, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    return F(t ^ r ^ n, e, t, i, o, a);
  }
  function N(e, t, r, n, i, o, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    return F(r ^ (t | ~n), e, t, i, o, a);
  }
  function U(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r, n, i, o, a;
    e[t >> 5] |= cc11001100_hook("e[t >> 5]", 128 << t % 32, "assign"), e[14 + (t + 64 >>> 9 << 4)] = cc11001100_hook("e[14 + (t + 64 >>> 9 << 4)]", t, "assign");
    var s = cc11001100_hook("s", 1732584193, "var-init"),
      l = cc11001100_hook("l", -271733879, "var-init"),
      c = cc11001100_hook("c", -1732584194, "var-init"),
      u = cc11001100_hook("u", 271733878, "var-init");
    for (r = cc11001100_hook("r", 0, "assign"); r < e.length; r += cc11001100_hook("r", 16, "assign")) n = cc11001100_hook("n", s, "assign"), i = cc11001100_hook("i", l, "assign"), o = cc11001100_hook("o", c, "assign"), a = cc11001100_hook("a", u, "assign"), s = cc11001100_hook("s", P(s, l, c, u, e[r], 7, -680876936), "assign"), u = cc11001100_hook("u", P(u, s, l, c, e[r + 1], 12, -389564586), "assign"), c = cc11001100_hook("c", P(c, u, s, l, e[r + 2], 17, 606105819), "assign"), l = cc11001100_hook("l", P(l, c, u, s, e[r + 3], 22, -1044525330), "assign"), s = cc11001100_hook("s", P(s, l, c, u, e[r + 4], 7, -176418897), "assign"), u = cc11001100_hook("u", P(u, s, l, c, e[r + 5], 12, 1200080426), "assign"), c = cc11001100_hook("c", P(c, u, s, l, e[r + 6], 17, -1473231341), "assign"), l = cc11001100_hook("l", P(l, c, u, s, e[r + 7], 22, -45705983), "assign"), s = cc11001100_hook("s", P(s, l, c, u, e[r + 8], 7, 1770035416), "assign"), u = cc11001100_hook("u", P(u, s, l, c, e[r + 9], 12, -1958414417), "assign"), c = cc11001100_hook("c", P(c, u, s, l, e[r + 10], 17, -42063), "assign"), l = cc11001100_hook("l", P(l, c, u, s, e[r + 11], 22, -1990404162), "assign"), s = cc11001100_hook("s", P(s, l, c, u, e[r + 12], 7, 1804603682), "assign"), u = cc11001100_hook("u", P(u, s, l, c, e[r + 13], 12, -40341101), "assign"), c = cc11001100_hook("c", P(c, u, s, l, e[r + 14], 17, -1502002290), "assign"), s = cc11001100_hook("s", D(s, l = cc11001100_hook("l", P(l, c, u, s, e[r + 15], 22, 1236535329), "assign"), c, u, e[r + 1], 5, -165796510), "assign"), u = cc11001100_hook("u", D(u, s, l, c, e[r + 6], 9, -1069501632), "assign"), c = cc11001100_hook("c", D(c, u, s, l, e[r + 11], 14, 643717713), "assign"), l = cc11001100_hook("l", D(l, c, u, s, e[r], 20, -373897302), "assign"), s = cc11001100_hook("s", D(s, l, c, u, e[r + 5], 5, -701558691), "assign"), u = cc11001100_hook("u", D(u, s, l, c, e[r + 10], 9, 38016083), "assign"), c = cc11001100_hook("c", D(c, u, s, l, e[r + 15], 14, -660478335), "assign"), l = cc11001100_hook("l", D(l, c, u, s, e[r + 4], 20, -405537848), "assign"), s = cc11001100_hook("s", D(s, l, c, u, e[r + 9], 5, 568446438), "assign"), u = cc11001100_hook("u", D(u, s, l, c, e[r + 14], 9, -1019803690), "assign"), c = cc11001100_hook("c", D(c, u, s, l, e[r + 3], 14, -187363961), "assign"), l = cc11001100_hook("l", D(l, c, u, s, e[r + 8], 20, 1163531501), "assign"), s = cc11001100_hook("s", D(s, l, c, u, e[r + 13], 5, -1444681467), "assign"), u = cc11001100_hook("u", D(u, s, l, c, e[r + 2], 9, -51403784), "assign"), c = cc11001100_hook("c", D(c, u, s, l, e[r + 7], 14, 1735328473), "assign"), s = cc11001100_hook("s", H(s, l = cc11001100_hook("l", D(l, c, u, s, e[r + 12], 20, -1926607734), "assign"), c, u, e[r + 5], 4, -378558), "assign"), u = cc11001100_hook("u", H(u, s, l, c, e[r + 8], 11, -2022574463), "assign"), c = cc11001100_hook("c", H(c, u, s, l, e[r + 11], 16, 1839030562), "assign"), l = cc11001100_hook("l", H(l, c, u, s, e[r + 14], 23, -35309556), "assign"), s = cc11001100_hook("s", H(s, l, c, u, e[r + 1], 4, -1530992060), "assign"), u = cc11001100_hook("u", H(u, s, l, c, e[r + 4], 11, 1272893353), "assign"), c = cc11001100_hook("c", H(c, u, s, l, e[r + 7], 16, -155497632), "assign"), l = cc11001100_hook("l", H(l, c, u, s, e[r + 10], 23, -1094730640), "assign"), s = cc11001100_hook("s", H(s, l, c, u, e[r + 13], 4, 681279174), "assign"), u = cc11001100_hook("u", H(u, s, l, c, e[r], 11, -358537222), "assign"), c = cc11001100_hook("c", H(c, u, s, l, e[r + 3], 16, -722521979), "assign"), l = cc11001100_hook("l", H(l, c, u, s, e[r + 6], 23, 76029189), "assign"), s = cc11001100_hook("s", H(s, l, c, u, e[r + 9], 4, -640364487), "assign"), u = cc11001100_hook("u", H(u, s, l, c, e[r + 12], 11, -421815835), "assign"), c = cc11001100_hook("c", H(c, u, s, l, e[r + 15], 16, 530742520), "assign"), s = cc11001100_hook("s", N(s, l = cc11001100_hook("l", H(l, c, u, s, e[r + 2], 23, -995338651), "assign"), c, u, e[r], 6, -198630844), "assign"), u = cc11001100_hook("u", N(u, s, l, c, e[r + 7], 10, 1126891415), "assign"), c = cc11001100_hook("c", N(c, u, s, l, e[r + 14], 15, -1416354905), "assign"), l = cc11001100_hook("l", N(l, c, u, s, e[r + 5], 21, -57434055), "assign"), s = cc11001100_hook("s", N(s, l, c, u, e[r + 12], 6, 1700485571), "assign"), u = cc11001100_hook("u", N(u, s, l, c, e[r + 3], 10, -1894986606), "assign"), c = cc11001100_hook("c", N(c, u, s, l, e[r + 10], 15, -1051523), "assign"), l = cc11001100_hook("l", N(l, c, u, s, e[r + 1], 21, -2054922799), "assign"), s = cc11001100_hook("s", N(s, l, c, u, e[r + 8], 6, 1873313359), "assign"), u = cc11001100_hook("u", N(u, s, l, c, e[r + 15], 10, -30611744), "assign"), c = cc11001100_hook("c", N(c, u, s, l, e[r + 6], 15, -1560198380), "assign"), l = cc11001100_hook("l", N(l, c, u, s, e[r + 13], 21, 1309151649), "assign"), s = cc11001100_hook("s", N(s, l, c, u, e[r + 4], 6, -145523070), "assign"), u = cc11001100_hook("u", N(u, s, l, c, e[r + 11], 10, -1120210379), "assign"), c = cc11001100_hook("c", N(c, u, s, l, e[r + 2], 15, 718787259), "assign"), l = cc11001100_hook("l", N(l, c, u, s, e[r + 9], 21, -343485551), "assign"), s = cc11001100_hook("s", T(s, n), "assign"), l = cc11001100_hook("l", T(l, i), "assign"), c = cc11001100_hook("c", T(c, o), "assign"), u = cc11001100_hook("u", T(u, a), "assign");
    return [s, l, c, u];
  }
  function I(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      r = cc11001100_hook("r", "", "var-init"),
      n = cc11001100_hook("n", 32 * e.length, "var-init");
    for (t = cc11001100_hook("t", 0, "assign"); t < n; t += cc11001100_hook("t", 8, "assign")) r += cc11001100_hook("r", String.fromCharCode(e[t >> 5] >>> t % 32 & 255), "assign");
    return r;
  }
  function L(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      r = cc11001100_hook("r", [], "var-init");
    for (r[(e.length >> 2) - 1] = cc11001100_hook("r[(e.length >> 2) - 1]", void 0, "assign"), t = cc11001100_hook("t", 0, "assign"); t < r.length; t += cc11001100_hook("t", 1, "assign")) r[t] = cc11001100_hook("r[t]", 0, "assign");
    var n = cc11001100_hook("n", 8 * e.length, "var-init");
    for (t = cc11001100_hook("t", 0, "assign"); t < n; t += cc11001100_hook("t", 8, "assign")) r[t >> 5] |= cc11001100_hook("r[t >> 5]", (255 & e.charCodeAt(t / 8)) << t % 32, "assign");
    return r;
  }
  function A(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      r,
      n = cc11001100_hook("n", "", "var-init");
    for (r = cc11001100_hook("r", 0, "assign"); r < e.length; r += cc11001100_hook("r", 1, "assign")) t = cc11001100_hook("t", e.charCodeAt(r), "assign"), n += cc11001100_hook("n", "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t), "assign");
    return n;
  }
  function B(e) {
    cc11001100_hook("e", e, "function-parameter");
    return unescape(encodeURIComponent(e));
  }
  function M(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (e) {
      return I(U(L(e), 8 * e.length));
    }(B(e));
  }
  function q(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return function (e, t) {
      var r,
        n,
        i = cc11001100_hook("i", L(e), "var-init"),
        o = cc11001100_hook("o", [], "var-init"),
        a = cc11001100_hook("a", [], "var-init");
      for (o[15] = cc11001100_hook("o[15]", a[15] = cc11001100_hook("a[15]", void 0, "assign"), "assign"), i.length > 16 && (i = cc11001100_hook("i", U(i, 8 * e.length), "assign")), r = cc11001100_hook("r", 0, "assign"); r < 16; r += cc11001100_hook("r", 1, "assign")) o[r] = cc11001100_hook("o[r]", 909522486 ^ i[r], "assign"), a[r] = cc11001100_hook("a[r]", 1549556828 ^ i[r], "assign");
      return n = cc11001100_hook("n", U(o.concat(L(t)), 512 + 8 * t.length), "assign"), I(U(a.concat(n), 640));
    }(B(e), B(t));
  }
  var z = function (e, t, r) {
    return t ? r ? q(t, e) : A(q(t, e)) : r ? M(e) : A(M(e));
  };
  function W(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.name = cc11001100_hook("this.name", "RavenConfigError", "assign"), this.message = cc11001100_hook("this.message", e, "assign");
  }
  W.prototype = cc11001100_hook("W.prototype", new Error(), "assign"), W.prototype.constructor = cc11001100_hook("W.prototype.constructor", W, "assign");
  var K = cc11001100_hook("K", W, "var-init"),
    J = function (e, t, r) {
      var n = cc11001100_hook("n", e[t], "var-init"),
        i = cc11001100_hook("i", e, "var-init");
      if (t in e) {
        var o = cc11001100_hook("o", "warn" === t ? "warning" : t, "var-init");
        e[t] = cc11001100_hook("e[t]", function () {
          var e = cc11001100_hook("e", [].slice.call(arguments), "var-init"),
            a = cc11001100_hook("a", x.safeJoin(e, " "), "var-init"),
            s = cc11001100_hook("s", {
              level: cc11001100_hook("level", o, "object-key-init"),
              logger: cc11001100_hook("logger", "console", "object-key-init"),
              extra: {
                arguments: cc11001100_hook("arguments", e, "object-key-init")
              }
            }, "var-init");
          "assert" === t ? !1 === e[0] && (a = cc11001100_hook("a", "Assertion failed: " + (x.safeJoin(e.slice(1), " ") || "console.assert"), "assign"), s.extra.arguments = cc11001100_hook("s.extra.arguments", e.slice(1), "assign"), r && r(a, s)) : r && r(a, s), n && Function.prototype.apply.call(n, i, e);
        }, "assign");
      }
    },
    $ = cc11001100_hook("$", x.isError, "var-init"),
    X = cc11001100_hook("X", x.isObject, "var-init"),
    G = cc11001100_hook("G", x.isPlainObject, "var-init"),
    V = cc11001100_hook("V", x.isErrorEvent, "var-init"),
    Y = cc11001100_hook("Y", x.isUndefined, "var-init"),
    Z = cc11001100_hook("Z", x.isFunction, "var-init"),
    Q = cc11001100_hook("Q", x.isString, "var-init"),
    ee = cc11001100_hook("ee", x.isArray, "var-init"),
    te = cc11001100_hook("te", x.isEmptyObject, "var-init"),
    re = cc11001100_hook("re", x.each, "var-init"),
    ne = cc11001100_hook("ne", x.objectMerge, "var-init"),
    ie = cc11001100_hook("ie", x.truncate, "var-init"),
    oe = cc11001100_hook("oe", x.objectFrozen, "var-init"),
    ae = cc11001100_hook("ae", x.hasKey, "var-init"),
    se = cc11001100_hook("se", x.joinRegExp, "var-init"),
    le = cc11001100_hook("le", x.urlencode, "var-init"),
    ce = cc11001100_hook("ce", x.uuid4, "var-init"),
    ue = cc11001100_hook("ue", x.htmlTreeAsString, "var-init"),
    fe = cc11001100_hook("fe", x.isSameException, "var-init"),
    he = cc11001100_hook("he", x.isSameStacktrace, "var-init"),
    pe = cc11001100_hook("pe", x.parseUrl, "var-init"),
    de = cc11001100_hook("de", x.fill, "var-init"),
    ge = cc11001100_hook("ge", x.supportsFetch, "var-init"),
    ve = cc11001100_hook("ve", x.supportsReferrerPolicy, "var-init"),
    _e = cc11001100_hook("_e", x.serializeKeysForMessage, "var-init"),
    me = cc11001100_hook("me", x.serializeException, "var-init"),
    be = cc11001100_hook("be", x.sanitize, "var-init"),
    ye = cc11001100_hook("ye", J, "var-init"),
    Ee = cc11001100_hook("Ee", "source protocol user pass host port path".split(" "), "var-init"),
    xe = cc11001100_hook("xe", /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/, "var-init");
  function ke() {
    return +new Date();
  }
  var Se = cc11001100_hook("Se", "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, "var-init"),
    we = cc11001100_hook("we", Se.document, "var-init"),
    Oe = cc11001100_hook("Oe", Se.navigator, "var-init");
  function Ce(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return Z(t) ? function (r) {
      return t(r, e);
    } : t;
  }
  function Re() {
    for (var e in this._hasJSON = cc11001100_hook("this._hasJSON", !("object" != typeof JSON || !JSON.stringify), "assign"), this._hasDocument = cc11001100_hook("this._hasDocument", !Y(we), "assign"), this._hasNavigator = cc11001100_hook("this._hasNavigator", !Y(Oe), "assign"), this._lastCapturedException = cc11001100_hook("this._lastCapturedException", null, "assign"), this._lastData = cc11001100_hook("this._lastData", null, "assign"), this._lastEventId = cc11001100_hook("this._lastEventId", null, "assign"), this._globalServer = cc11001100_hook("this._globalServer", null, "assign"), this._globalKey = cc11001100_hook("this._globalKey", null, "assign"), this._globalProject = cc11001100_hook("this._globalProject", null, "assign"), this._globalContext = cc11001100_hook("this._globalContext", {}, "assign"), this._globalOptions = cc11001100_hook("this._globalOptions", {
      release: cc11001100_hook("release", Se.SENTRY_RELEASE && Se.SENTRY_RELEASE.id, "object-key-init"),
      logger: cc11001100_hook("logger", "javascript", "object-key-init"),
      ignoreErrors: cc11001100_hook("ignoreErrors", [], "object-key-init"),
      ignoreUrls: cc11001100_hook("ignoreUrls", [], "object-key-init"),
      whitelistUrls: cc11001100_hook("whitelistUrls", [], "object-key-init"),
      includePaths: cc11001100_hook("includePaths", [], "object-key-init"),
      headers: cc11001100_hook("headers", null, "object-key-init"),
      collectWindowErrors: cc11001100_hook("collectWindowErrors", !0, "object-key-init"),
      captureUnhandledRejections: cc11001100_hook("captureUnhandledRejections", !0, "object-key-init"),
      maxMessageLength: cc11001100_hook("maxMessageLength", 0, "object-key-init"),
      maxUrlLength: cc11001100_hook("maxUrlLength", 250, "object-key-init"),
      stackTraceLimit: cc11001100_hook("stackTraceLimit", 50, "object-key-init"),
      autoBreadcrumbs: cc11001100_hook("autoBreadcrumbs", !0, "object-key-init"),
      instrument: cc11001100_hook("instrument", !0, "object-key-init"),
      sampleRate: cc11001100_hook("sampleRate", 1, "object-key-init"),
      sanitizeKeys: cc11001100_hook("sanitizeKeys", [], "object-key-init")
    }, "assign"), this._fetchDefaults = cc11001100_hook("this._fetchDefaults", {
      method: cc11001100_hook("method", "POST", "object-key-init"),
      keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
      referrerPolicy: cc11001100_hook("referrerPolicy", ve() ? "origin" : "", "object-key-init")
    }, "assign"), this._ignoreOnError = cc11001100_hook("this._ignoreOnError", 0, "assign"), this._isRavenInstalled = cc11001100_hook("this._isRavenInstalled", !1, "assign"), this._originalErrorStackTraceLimit = cc11001100_hook("this._originalErrorStackTraceLimit", Error.stackTraceLimit, "assign"), this._originalConsole = cc11001100_hook("this._originalConsole", Se.console || {}, "assign"), this._originalConsoleMethods = cc11001100_hook("this._originalConsoleMethods", {}, "assign"), this._plugins = cc11001100_hook("this._plugins", [], "assign"), this._startTime = cc11001100_hook("this._startTime", ke(), "assign"), this._wrappedBuiltIns = cc11001100_hook("this._wrappedBuiltIns", [], "assign"), this._breadcrumbs = cc11001100_hook("this._breadcrumbs", [], "assign"), this._lastCapturedEvent = cc11001100_hook("this._lastCapturedEvent", null, "assign"), this._keypressTimeout, this._location = cc11001100_hook("this._location", Se.location, "assign"), this._lastHref = cc11001100_hook("this._lastHref", this._location && this._location.href, "assign"), this._resetBackoff(), this._originalConsole) this._originalConsoleMethods[e] = cc11001100_hook("this._originalConsoleMethods[e]", this._originalConsole[e], "assign");
  }
  Re.prototype = cc11001100_hook("Re.prototype", {
    VERSION: cc11001100_hook("VERSION", "3.24.0", "object-key-init"),
    debug: cc11001100_hook("debug", !1, "object-key-init"),
    TraceKit: cc11001100_hook("TraceKit", j, "object-key-init"),
    config: function (e, t) {
      var r = cc11001100_hook("r", this, "var-init");
      if (r._globalServer) return this._logDebug("error", "Error: Raven has already been configured"), r;
      if (!e) return r;
      var n = cc11001100_hook("n", r._globalOptions, "var-init");
      t && re(t, function (e, t) {
        "tags" === e || "extra" === e || "user" === e ? r._globalContext[e] = cc11001100_hook("r._globalContext[e]", t, "assign") : n[e] = cc11001100_hook("n[e]", t, "assign");
      }), r.setDSN(e), n.ignoreErrors.push(/^Script error\.?$/), n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), n.ignoreErrors = cc11001100_hook("n.ignoreErrors", se(n.ignoreErrors), "assign"), n.ignoreUrls = cc11001100_hook("n.ignoreUrls", !!n.ignoreUrls.length && se(n.ignoreUrls), "assign"), n.whitelistUrls = cc11001100_hook("n.whitelistUrls", !!n.whitelistUrls.length && se(n.whitelistUrls), "assign"), n.includePaths = cc11001100_hook("n.includePaths", se(n.includePaths), "assign"), n.maxBreadcrumbs = cc11001100_hook("n.maxBreadcrumbs", Math.max(0, Math.min(n.maxBreadcrumbs || 100, 100)), "assign");
      var i = cc11001100_hook("i", {
          xhr: cc11001100_hook("xhr", !0, "object-key-init"),
          console: cc11001100_hook("console", !0, "object-key-init"),
          dom: cc11001100_hook("dom", !0, "object-key-init"),
          location: cc11001100_hook("location", !0, "object-key-init"),
          sentry: cc11001100_hook("sentry", !0, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", n.autoBreadcrumbs, "var-init");
      "[object Object]" === {}.toString.call(o) ? o = cc11001100_hook("o", ne(i, o), "assign") : !1 !== o && (o = cc11001100_hook("o", i, "assign")), n.autoBreadcrumbs = cc11001100_hook("n.autoBreadcrumbs", o, "assign");
      var a = cc11001100_hook("a", {
          tryCatch: cc11001100_hook("tryCatch", !0, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", n.instrument, "var-init");
      return "[object Object]" === {}.toString.call(s) ? s = cc11001100_hook("s", ne(a, s), "assign") : !1 !== s && (s = cc11001100_hook("s", a, "assign")), n.instrument = cc11001100_hook("n.instrument", s, "assign"), j.collectWindowErrors = cc11001100_hook("j.collectWindowErrors", !!n.collectWindowErrors, "assign"), r;
    },
    install: function () {
      var e = cc11001100_hook("e", this, "var-init");
      return e.isSetup() && !e._isRavenInstalled && (j.report.subscribe(function () {
        e._handleOnErrorStackInfo.apply(e, arguments);
      }), e._globalOptions.captureUnhandledRejections && e._attachPromiseRejectionHandler(), e._patchFunctionToString(), e._globalOptions.instrument && e._globalOptions.instrument.tryCatch && e._instrumentTryCatch(), e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(), e._drainPlugins(), e._isRavenInstalled = cc11001100_hook("e._isRavenInstalled", !0, "assign")), Error.stackTraceLimit = cc11001100_hook("Error.stackTraceLimit", e._globalOptions.stackTraceLimit, "assign"), this;
    },
    setDSN: function (e) {
      var t = cc11001100_hook("t", this._parseDSN(e), "var-init"),
        r = cc11001100_hook("r", t.path.lastIndexOf("/"), "var-init"),
        n = cc11001100_hook("n", t.path.substr(1, r), "var-init");
      this._dsn = cc11001100_hook("this._dsn", e, "assign"), this._globalKey = cc11001100_hook("this._globalKey", t.user, "assign"), this._globalSecret = cc11001100_hook("this._globalSecret", t.pass && t.pass.substr(1), "assign"), this._globalProject = cc11001100_hook("this._globalProject", t.path.substr(r + 1), "assign"), this._globalServer = cc11001100_hook("this._globalServer", this._getGlobalServer(t), "assign"), this._globalEndpoint = cc11001100_hook("this._globalEndpoint", this._globalServer + "/" + n + "api/" + this._globalProject + "/store/", "assign"), this._resetBackoff();
    },
    context: function (e, t, r) {
      return Z(e) && (r = cc11001100_hook("r", t || [], "assign"), t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), this.wrap(e, t).apply(this, r);
    },
    wrap: function (e, t, r) {
      var n = cc11001100_hook("n", this, "var-init");
      if (Y(t) && !Z(e)) return e;
      if (Z(e) && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), !Z(t)) return t;
      try {
        if (t.__raven__) return t;
        if (t.__raven_wrapper__) return t.__raven_wrapper__;
      } catch (e) {
        return t;
      }
      function i() {
        var i = cc11001100_hook("i", [], "var-init"),
          o = cc11001100_hook("o", arguments.length, "var-init"),
          a = cc11001100_hook("a", !e || e && !1 !== e.deep, "var-init");
        for (r && Z(r) && r.apply(this, arguments); o--;) i[o] = cc11001100_hook("i[o]", a ? n.wrap(e, arguments[o]) : arguments[o], "assign");
        try {
          return t.apply(this, i);
        } catch (t) {
          throw n._ignoreNextOnError(), n.captureException(t, e), t;
        }
      }
      for (var o in t) ae(t, o) && (i[o] = cc11001100_hook("i[o]", t[o], "assign"));
      return i.prototype = cc11001100_hook("i.prototype", t.prototype, "assign"), t.__raven_wrapper__ = cc11001100_hook("t.__raven_wrapper__", i, "assign"), i.__raven__ = cc11001100_hook("i.__raven__", !0, "assign"), i.__orig__ = cc11001100_hook("i.__orig__", t, "assign"), i;
    },
    uninstall: function () {
      return j.report.uninstall(), this._detachPromiseRejectionHandler(), this._unpatchFunctionToString(), this._restoreBuiltIns(), this._restoreConsole(), Error.stackTraceLimit = cc11001100_hook("Error.stackTraceLimit", this._originalErrorStackTraceLimit, "assign"), this._isRavenInstalled = cc11001100_hook("this._isRavenInstalled", !1, "assign"), this;
    },
    _promiseRejectionHandler: function (e) {
      this._logDebug("debug", "Raven caught unhandled promise rejection:", e), this.captureException(e.reason);
    },
    _attachPromiseRejectionHandler: function () {
      return this._promiseRejectionHandler = cc11001100_hook("this._promiseRejectionHandler", this._promiseRejectionHandler.bind(this), "assign"), Se.addEventListener && Se.addEventListener("unhandledrejection", this._promiseRejectionHandler), this;
    },
    _detachPromiseRejectionHandler: function () {
      return Se.removeEventListener && Se.removeEventListener("unhandledrejection", this._promiseRejectionHandler), this;
    },
    captureException: function (e, t) {
      if (t = cc11001100_hook("t", ne({
        trimHeadFrames: cc11001100_hook("trimHeadFrames", 0, "object-key-init")
      }, t || {}), "assign"), V(e) && e.error) e = cc11001100_hook("e", e.error, "assign");else if ($(e)) e = cc11001100_hook("e", e, "assign");else {
        if (!G(e)) return this.captureMessage(e, ne(t, {
          stacktrace: cc11001100_hook("stacktrace", !0, "object-key-init"),
          trimHeadFrames: cc11001100_hook("trimHeadFrames", t.trimHeadFrames + 1, "object-key-init")
        }));
        t = cc11001100_hook("t", this._getCaptureExceptionOptionsFromPlainObject(t, e), "assign"), e = cc11001100_hook("e", new Error(t.message), "assign");
      }
      this._lastCapturedException = cc11001100_hook("this._lastCapturedException", e, "assign");
      try {
        var r = cc11001100_hook("r", j.computeStackTrace(e), "var-init");
        this._handleStackInfo(r, t);
      } catch (t) {
        if (e !== t) throw t;
      }
      return this;
    },
    _getCaptureExceptionOptionsFromPlainObject: function (e, t) {
      var r = cc11001100_hook("r", Object.keys(t).sort(), "var-init"),
        n = cc11001100_hook("n", ne(e, {
          message: cc11001100_hook("message", "Non-Error exception captured with keys: " + _e(r), "object-key-init"),
          fingerprint: cc11001100_hook("fingerprint", [z(r)], "object-key-init"),
          extra: cc11001100_hook("extra", e.extra || {}, "object-key-init")
        }), "var-init");
      return n.extra.__serialized__ = cc11001100_hook("n.extra.__serialized__", me(t), "assign"), n;
    },
    captureMessage: function (e, t) {
      if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
        var r,
          n = cc11001100_hook("n", ne({
            message: cc11001100_hook("message", e += cc11001100_hook("e", "", "assign"), "object-key-init")
          }, t = cc11001100_hook("t", t || {}, "assign")), "var-init");
        try {
          throw new Error(e);
        } catch (e) {
          r = cc11001100_hook("r", e, "assign");
        }
        r.name = cc11001100_hook("r.name", null, "assign");
        var i = cc11001100_hook("i", j.computeStackTrace(r), "var-init"),
          o = cc11001100_hook("o", ee(i.stack) && i.stack[1], "var-init"),
          a = cc11001100_hook("a", o && o.url || "", "var-init");
        if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(a)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(a))) {
          if (this._globalOptions.stacktrace || t && t.stacktrace) {
            n.fingerprint = cc11001100_hook("n.fingerprint", null == n.fingerprint ? e : n.fingerprint, "assign"), (t = cc11001100_hook("t", ne({
              trimHeadFrames: cc11001100_hook("trimHeadFrames", 0, "object-key-init")
            }, t), "assign")).trimHeadFrames += cc11001100_hook("(t = ne({\n  trimHeadFrames: 0\n}, t)).trimHeadFrames", 1, "assign");
            var s = cc11001100_hook("s", this._prepareFrames(i, t), "var-init");
            n.stacktrace = cc11001100_hook("n.stacktrace", {
              frames: cc11001100_hook("frames", s.reverse(), "object-key-init")
            }, "assign");
          }
          return n.fingerprint && (n.fingerprint = cc11001100_hook("n.fingerprint", ee(n.fingerprint) ? n.fingerprint : [n.fingerprint], "assign")), this._send(n), this;
        }
      }
    },
    captureBreadcrumb: function (e) {
      var t = cc11001100_hook("t", ne({
        timestamp: cc11001100_hook("timestamp", ke() / 1e3, "object-key-init")
      }, e), "var-init");
      if (Z(this._globalOptions.breadcrumbCallback)) {
        var r = cc11001100_hook("r", this._globalOptions.breadcrumbCallback(t), "var-init");
        if (X(r) && !te(r)) t = cc11001100_hook("t", r, "assign");else if (!1 === r) return this;
      }
      return this._breadcrumbs.push(t), this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(), this;
    },
    addPlugin: function (e) {
      var t = cc11001100_hook("t", [].slice.call(arguments, 1), "var-init");
      return this._plugins.push([e, t]), this._isRavenInstalled && this._drainPlugins(), this;
    },
    setUserContext: function (e) {
      return this._globalContext.user = cc11001100_hook("this._globalContext.user", e, "assign"), this;
    },
    setExtraContext: function (e) {
      return this._mergeContext("extra", e), this;
    },
    setTagsContext: function (e) {
      return this._mergeContext("tags", e), this;
    },
    clearContext: function () {
      return this._globalContext = cc11001100_hook("this._globalContext", {}, "assign"), this;
    },
    getContext: function () {
      return JSON.parse(n(this._globalContext));
    },
    setEnvironment: function (e) {
      return this._globalOptions.environment = cc11001100_hook("this._globalOptions.environment", e, "assign"), this;
    },
    setRelease: function (e) {
      return this._globalOptions.release = cc11001100_hook("this._globalOptions.release", e, "assign"), this;
    },
    setDataCallback: function (e) {
      var t = cc11001100_hook("t", this._globalOptions.dataCallback, "var-init");
      return this._globalOptions.dataCallback = cc11001100_hook("this._globalOptions.dataCallback", Ce(t, e), "assign"), this;
    },
    setBreadcrumbCallback: function (e) {
      var t = cc11001100_hook("t", this._globalOptions.breadcrumbCallback, "var-init");
      return this._globalOptions.breadcrumbCallback = cc11001100_hook("this._globalOptions.breadcrumbCallback", Ce(t, e), "assign"), this;
    },
    setShouldSendCallback: function (e) {
      var t = cc11001100_hook("t", this._globalOptions.shouldSendCallback, "var-init");
      return this._globalOptions.shouldSendCallback = cc11001100_hook("this._globalOptions.shouldSendCallback", Ce(t, e), "assign"), this;
    },
    setTransport: function (e) {
      return this._globalOptions.transport = cc11001100_hook("this._globalOptions.transport", e, "assign"), this;
    },
    lastException: function () {
      return this._lastCapturedException;
    },
    lastEventId: function () {
      return this._lastEventId;
    },
    isSetup: function () {
      return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = cc11001100_hook("this.ravenNotConfiguredError", !0, "assign"), this._logDebug("error", "Error: Raven has not been configured.")), !1));
    },
    afterLoad: function () {
      var e = cc11001100_hook("e", Se.RavenConfig, "var-init");
      e && this.config(e.dsn, e.config).install();
    },
    showReportDialog: function (e) {
      if (we) {
        var t = cc11001100_hook("t", (e = cc11001100_hook("e", e || {}, "assign")).eventId || this.lastEventId(), "var-init");
        if (!t) throw new K("Missing eventId");
        var r = cc11001100_hook("r", e.dsn || this._dsn, "var-init");
        if (!r) throw new K("Missing DSN");
        var n = cc11001100_hook("n", encodeURIComponent, "var-init"),
          i = cc11001100_hook("i", "", "var-init");
        i += cc11001100_hook("i", "?eventId=" + n(t), "assign"), i += cc11001100_hook("i", "&dsn=" + n(r), "assign");
        var o = cc11001100_hook("o", e.user || this._globalContext.user, "var-init");
        o && (o.name && (i += cc11001100_hook("i", "&name=" + n(o.name), "assign")), o.email && (i += cc11001100_hook("i", "&email=" + n(o.email), "assign")));
        var a = cc11001100_hook("a", this._getGlobalServer(this._parseDSN(r)), "var-init"),
          s = cc11001100_hook("s", we.createElement("script"), "var-init");
        s.async = cc11001100_hook("s.async", !0, "assign"), s.src = cc11001100_hook("s.src", a + "/api/embed/error-page/" + i, "assign"), (we.head || we.body).appendChild(s);
      }
    },
    _ignoreNextOnError: function () {
      var e = cc11001100_hook("e", this, "var-init");
      this._ignoreOnError += cc11001100_hook("this._ignoreOnError", 1, "assign"), setTimeout(function () {
        e._ignoreOnError -= cc11001100_hook("e._ignoreOnError", 1, "assign");
      });
    },
    _triggerEvent: function (e, t) {
      var r, n;
      if (this._hasDocument) {
        for (n in t = cc11001100_hook("t", t || {}, "assign"), e = cc11001100_hook("e", "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), "assign"), we.createEvent ? (r = cc11001100_hook("r", we.createEvent("HTMLEvents"), "assign")).initEvent(e, !0, !0) : (r = cc11001100_hook("r", we.createEventObject(), "assign")).eventType = cc11001100_hook("(r = we.createEventObject()).eventType", e, "assign"), t) ae(t, n) && (r[n] = cc11001100_hook("r[n]", t[n], "assign"));
        if (we.createEvent) we.dispatchEvent(r);else try {
          we.fireEvent("on" + r.eventType.toLowerCase(), r);
        } catch (e) {}
      }
    },
    _breadcrumbEventHandler: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      return function (r) {
        if (t._keypressTimeout = cc11001100_hook("t._keypressTimeout", null, "assign"), t._lastCapturedEvent !== r) {
          var n;
          t._lastCapturedEvent = cc11001100_hook("t._lastCapturedEvent", r, "assign");
          try {
            n = cc11001100_hook("n", ue(r.target), "assign");
          } catch (e) {
            n = cc11001100_hook("n", "<unknown>", "assign");
          }
          t.captureBreadcrumb({
            category: cc11001100_hook("category", "ui." + e, "object-key-init"),
            message: cc11001100_hook("message", n, "object-key-init")
          });
        }
      };
    },
    _keypressEventHandler: function () {
      var e = cc11001100_hook("e", this, "var-init");
      return function (t) {
        var r;
        try {
          r = cc11001100_hook("r", t.target, "assign");
        } catch (e) {
          return;
        }
        var n = cc11001100_hook("n", r && r.tagName, "var-init");
        if (n && ("INPUT" === n || "TEXTAREA" === n || r.isContentEditable)) {
          var i = cc11001100_hook("i", e._keypressTimeout, "var-init");
          i || e._breadcrumbEventHandler("input")(t), clearTimeout(i), e._keypressTimeout = cc11001100_hook("e._keypressTimeout", setTimeout(function () {
            e._keypressTimeout = cc11001100_hook("e._keypressTimeout", null, "assign");
          }, 1e3), "assign");
        }
      };
    },
    _captureUrlChange: function (e, t) {
      var r = cc11001100_hook("r", pe(this._location.href), "var-init"),
        n = cc11001100_hook("n", pe(t), "var-init"),
        i = cc11001100_hook("i", pe(e), "var-init");
      this._lastHref = cc11001100_hook("this._lastHref", t, "assign"), r.protocol === n.protocol && r.host === n.host && (t = cc11001100_hook("t", n.relative, "assign")), r.protocol === i.protocol && r.host === i.host && (e = cc11001100_hook("e", i.relative, "assign")), this.captureBreadcrumb({
        category: cc11001100_hook("category", "navigation", "object-key-init"),
        data: {
          to: cc11001100_hook("to", t, "object-key-init"),
          from: cc11001100_hook("from", e, "object-key-init")
        }
      });
    },
    _patchFunctionToString: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e._originalFunctionToString = cc11001100_hook("e._originalFunctionToString", Function.prototype.toString, "assign"), Function.prototype.toString = cc11001100_hook("Function.prototype.toString", function () {
        return "function" == typeof this && this.__raven__ ? e._originalFunctionToString.apply(this.__orig__, arguments) : e._originalFunctionToString.apply(this, arguments);
      }, "assign");
    },
    _unpatchFunctionToString: function () {
      this._originalFunctionToString && (Function.prototype.toString = cc11001100_hook("Function.prototype.toString", this._originalFunctionToString, "assign"));
    },
    _instrumentTryCatch: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        t = cc11001100_hook("t", e._wrappedBuiltIns, "var-init");
      function r(t) {
        cc11001100_hook("t", t, "function-parameter");
        return function (r, n) {
          for (var i = cc11001100_hook("i", new Array(arguments.length), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < i.length; ++o) i[o] = cc11001100_hook("i[o]", arguments[o], "assign");
          var a = cc11001100_hook("a", i[0], "var-init");
          return Z(a) && (i[0] = cc11001100_hook("i[0]", e.wrap(a), "assign")), t.apply ? t.apply(this, i) : t(i[0], i[1]);
        };
      }
      var n = cc11001100_hook("n", this._globalOptions.autoBreadcrumbs, "var-init");
      function i(r) {
        cc11001100_hook("r", r, "function-parameter");
        var i = cc11001100_hook("i", Se[r] && Se[r].prototype, "var-init");
        i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (de(i, "addEventListener", function (t) {
          return function (i, o, a, s) {
            try {
              o && o.handleEvent && (o.handleEvent = cc11001100_hook("o.handleEvent", e.wrap(o.handleEvent), "assign"));
            } catch (e) {}
            var l, c, u;
            return n && n.dom && ("EventTarget" === r || "Node" === r) && (c = cc11001100_hook("c", e._breadcrumbEventHandler("click"), "assign"), u = cc11001100_hook("u", e._keypressEventHandler(), "assign"), l = cc11001100_hook("l", function (e) {
              if (e) {
                var t;
                try {
                  t = cc11001100_hook("t", e.type, "assign");
                } catch (e) {
                  return;
                }
                return "click" === t ? c(e) : "keypress" === t ? u(e) : void 0;
              }
            }, "assign")), t.call(this, i, e.wrap(o, void 0, l), a, s);
          };
        }, t), de(i, "removeEventListener", function (e) {
          return function (t, r, n, i) {
            try {
              r = cc11001100_hook("r", r && (r.__raven_wrapper__ ? r.__raven_wrapper__ : r), "assign");
            } catch (e) {}
            return e.call(this, t, r, n, i);
          };
        }, t));
      }
      de(Se, "setTimeout", r, t), de(Se, "setInterval", r, t), Se.requestAnimationFrame && de(Se, "requestAnimationFrame", function (t) {
        return function (r) {
          return t(e.wrap(r));
        };
      }, t);
      for (var o = cc11001100_hook("o", ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < o.length; a++) i(o[a]);
    },
    _instrumentBreadcrumbs: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        t = cc11001100_hook("t", this._globalOptions.autoBreadcrumbs, "var-init"),
        r = cc11001100_hook("r", e._wrappedBuiltIns, "var-init");
      function n(t, r) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        t in r && Z(r[t]) && de(r, t, function (t) {
          return e.wrap(t);
        });
      }
      if (t.xhr && "XMLHttpRequest" in Se) {
        var i = cc11001100_hook("i", Se.XMLHttpRequest && Se.XMLHttpRequest.prototype, "var-init");
        de(i, "open", function (t) {
          return function (r, n) {
            return Q(n) && -1 === n.indexOf(e._globalKey) && (this.__raven_xhr = cc11001100_hook("this.__raven_xhr", {
              method: cc11001100_hook("method", r, "object-key-init"),
              url: cc11001100_hook("url", n, "object-key-init"),
              status_code: cc11001100_hook("status_code", null, "object-key-init")
            }, "assign")), t.apply(this, arguments);
          };
        }, r), de(i, "send", function (t) {
          return function () {
            var r = cc11001100_hook("r", this, "var-init");
            function i() {
              if (r.__raven_xhr && 4 === r.readyState) {
                try {
                  r.__raven_xhr.status_code = cc11001100_hook("r.__raven_xhr.status_code", r.status, "assign");
                } catch (e) {}
                e.captureBreadcrumb({
                  type: cc11001100_hook("type", "http", "object-key-init"),
                  category: cc11001100_hook("category", "xhr", "object-key-init"),
                  data: cc11001100_hook("data", r.__raven_xhr, "object-key-init")
                });
              }
            }
            for (var o = cc11001100_hook("o", ["onload", "onerror", "onprogress"], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < o.length; a++) n(o[a], r);
            return "onreadystatechange" in r && Z(r.onreadystatechange) ? de(r, "onreadystatechange", function (t) {
              return e.wrap(t, void 0, i);
            }) : r.onreadystatechange = cc11001100_hook("r.onreadystatechange", i, "assign"), t.apply(this, arguments);
          };
        }, r);
      }
      t.xhr && ge() && de(Se, "fetch", function (t) {
        return function () {
          for (var r = cc11001100_hook("r", new Array(arguments.length), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < r.length; ++n) r[n] = cc11001100_hook("r[n]", arguments[n], "assign");
          var i,
            o = cc11001100_hook("o", r[0], "var-init"),
            a = cc11001100_hook("a", "GET", "var-init");
          if ("string" == typeof o ? i = cc11001100_hook("i", o, "assign") : "Request" in Se && o instanceof Se.Request ? (i = cc11001100_hook("i", o.url, "assign"), o.method && (a = cc11001100_hook("a", o.method, "assign"))) : i = cc11001100_hook("i", "" + o, "assign"), -1 !== i.indexOf(e._globalKey)) return t.apply(this, r);
          r[1] && r[1].method && (a = cc11001100_hook("a", r[1].method, "assign"));
          var s = cc11001100_hook("s", {
            method: cc11001100_hook("method", a, "object-key-init"),
            url: cc11001100_hook("url", i, "object-key-init"),
            status_code: cc11001100_hook("status_code", null, "object-key-init")
          }, "var-init");
          return t.apply(this, r).then(function (t) {
            return s.status_code = cc11001100_hook("s.status_code", t.status, "assign"), e.captureBreadcrumb({
              type: cc11001100_hook("type", "http", "object-key-init"),
              category: cc11001100_hook("category", "fetch", "object-key-init"),
              data: cc11001100_hook("data", s, "object-key-init")
            }), t;
          });
        };
      }, r), t.dom && this._hasDocument && (we.addEventListener ? (we.addEventListener("click", e._breadcrumbEventHandler("click"), !1), we.addEventListener("keypress", e._keypressEventHandler(), !1)) : (we.attachEvent("onclick", e._breadcrumbEventHandler("click")), we.attachEvent("onkeypress", e._keypressEventHandler())));
      var o = cc11001100_hook("o", Se.chrome, "var-init"),
        a = cc11001100_hook("a", !(o && o.app && o.app.runtime) && Se.history && history.pushState && history.replaceState, "var-init");
      if (t.location && a) {
        var s = cc11001100_hook("s", Se.onpopstate, "var-init");
        Se.onpopstate = cc11001100_hook("Se.onpopstate", function () {
          var t = cc11001100_hook("t", e._location.href, "var-init");
          if (e._captureUrlChange(e._lastHref, t), s) return s.apply(this, arguments);
        }, "assign");
        var l = function (t) {
          return function () {
            var r = cc11001100_hook("r", arguments.length > 2 ? arguments[2] : void 0, "var-init");
            return r && e._captureUrlChange(e._lastHref, r + ""), t.apply(this, arguments);
          };
        };
        de(history, "pushState", l, r), de(history, "replaceState", l, r);
      }
      if (t.console && "console" in Se && console.log) {
        var c = function (t, r) {
          e.captureBreadcrumb({
            message: cc11001100_hook("message", t, "object-key-init"),
            level: cc11001100_hook("level", r.level, "object-key-init"),
            category: cc11001100_hook("category", "console", "object-key-init")
          });
        };
        re(["debug", "info", "warn", "error", "log"], function (e, t) {
          ye(console, t, c);
        });
      }
    },
    _restoreBuiltIns: function () {
      for (var e; this._wrappedBuiltIns.length;) {
        var t = cc11001100_hook("t", (e = cc11001100_hook("e", this._wrappedBuiltIns.shift(), "assign"))[0], "var-init"),
          r = cc11001100_hook("r", e[1], "var-init"),
          n = cc11001100_hook("n", e[2], "var-init");
        t[r] = cc11001100_hook("t[r]", n, "assign");
      }
    },
    _restoreConsole: function () {
      for (var e in this._originalConsoleMethods) this._originalConsole[e] = cc11001100_hook("this._originalConsole[e]", this._originalConsoleMethods[e], "assign");
    },
    _drainPlugins: function () {
      var e = cc11001100_hook("e", this, "var-init");
      re(this._plugins, function (t, r) {
        var n = cc11001100_hook("n", r[0], "var-init"),
          i = cc11001100_hook("i", r[1], "var-init");
        n.apply(e, [e].concat(i));
      });
    },
    _parseDSN: function (e) {
      var t = cc11001100_hook("t", xe.exec(e), "var-init"),
        r = cc11001100_hook("r", {}, "var-init"),
        n = cc11001100_hook("n", 7, "var-init");
      try {
        for (; n--;) r[Ee[n]] = cc11001100_hook("r[Ee[n]]", t[n] || "", "assign");
      } catch (t) {
        throw new K("Invalid DSN: " + e);
      }
      if (r.pass && !this._globalOptions.allowSecretKey) throw new K("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
      return r;
    },
    _getGlobalServer: function (e) {
      var t = cc11001100_hook("t", "//" + e.host + (e.port ? ":" + e.port : ""), "var-init");
      return e.protocol && (t = cc11001100_hook("t", e.protocol + ":" + t, "assign")), t;
    },
    _handleOnErrorStackInfo: function () {
      this._ignoreOnError || this._handleStackInfo.apply(this, arguments);
    },
    _handleStackInfo: function (e, t) {
      var r = cc11001100_hook("r", this._prepareFrames(e, t), "var-init");
      this._triggerEvent("handle", {
        stackInfo: cc11001100_hook("stackInfo", e, "object-key-init"),
        options: cc11001100_hook("options", t, "object-key-init")
      }), this._processException(e.name, e.message, e.url, e.lineno, r, t);
    },
    _prepareFrames: function (e, t) {
      var r = cc11001100_hook("r", this, "var-init"),
        n = cc11001100_hook("n", [], "var-init");
      if (e.stack && e.stack.length && (re(e.stack, function (t, i) {
        var o = cc11001100_hook("o", r._normalizeFrame(i, e.url), "var-init");
        o && n.push(o);
      }), t && t.trimHeadFrames)) for (var i = cc11001100_hook("i", 0, "var-init"); i < t.trimHeadFrames && i < n.length; i++) n[i].in_app = cc11001100_hook("n[i].in_app", !1, "assign");
      return n = cc11001100_hook("n", n.slice(0, this._globalOptions.stackTraceLimit), "assign");
    },
    _normalizeFrame: function (e, t) {
      var r = cc11001100_hook("r", {
        filename: cc11001100_hook("filename", e.url, "object-key-init"),
        lineno: cc11001100_hook("lineno", e.line, "object-key-init"),
        colno: cc11001100_hook("colno", e.column, "object-key-init"),
        function: cc11001100_hook("function", e.func || "?", "object-key-init")
      }, "var-init");
      return e.url || (r.filename = cc11001100_hook("r.filename", t, "assign")), r.in_app = cc11001100_hook("r.in_app", !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(r.filename) || /(Raven|TraceKit)\./.test(r.function) || /raven\.(min\.)?js$/.test(r.filename)), "assign"), r;
    },
    _processException: function (e, t, r, n, i, o) {
      var a,
        s = cc11001100_hook("s", (e ? e + ": " : "") + (t || ""), "var-init");
      if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t) && !this._globalOptions.ignoreErrors.test(s)) && (i && i.length ? (r = cc11001100_hook("r", i[0].filename || r, "assign"), i.reverse(), a = cc11001100_hook("a", {
        frames: cc11001100_hook("frames", i, "object-key-init")
      }, "assign")) : r && (a = cc11001100_hook("a", {
        frames: cc11001100_hook("frames", [{
          filename: cc11001100_hook("filename", r, "object-key-init"),
          lineno: cc11001100_hook("lineno", n, "object-key-init"),
          in_app: cc11001100_hook("in_app", !0, "object-key-init")
        }], "object-key-init")
      }, "assign")), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(r)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(r)))) {
        var l = cc11001100_hook("l", ne({
          exception: {
            values: cc11001100_hook("values", [{
              type: cc11001100_hook("type", e, "object-key-init"),
              value: cc11001100_hook("value", t, "object-key-init"),
              stacktrace: cc11001100_hook("stacktrace", a, "object-key-init")
            }], "object-key-init")
          },
          culprit: cc11001100_hook("culprit", r, "object-key-init")
        }, o), "var-init");
        this._send(l);
      }
    },
    _trimPacket: function (e) {
      var t = cc11001100_hook("t", this._globalOptions.maxMessageLength, "var-init");
      if (e.message && (e.message = cc11001100_hook("e.message", ie(e.message, t), "assign")), e.exception) {
        var r = cc11001100_hook("r", e.exception.values[0], "var-init");
        r.value = cc11001100_hook("r.value", ie(r.value, t), "assign");
      }
      var n = cc11001100_hook("n", e.request, "var-init");
      return n && (n.url && (n.url = cc11001100_hook("n.url", ie(n.url, this._globalOptions.maxUrlLength), "assign")), n.Referer && (n.Referer = cc11001100_hook("n.Referer", ie(n.Referer, this._globalOptions.maxUrlLength), "assign"))), e.breadcrumbs && e.breadcrumbs.values && this._trimBreadcrumbs(e.breadcrumbs), e;
    },
    _trimBreadcrumbs: function (e) {
      for (var t, r, n, i = cc11001100_hook("i", ["to", "from", "url"], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e.values.length; ++o) if ((r = cc11001100_hook("r", e.values[o], "assign")).hasOwnProperty("data") && X(r.data) && !oe(r.data)) {
        n = cc11001100_hook("n", ne({}, r.data), "assign");
        for (var a = cc11001100_hook("a", 0, "var-init"); a < i.length; ++a) t = cc11001100_hook("t", i[a], "assign"), n.hasOwnProperty(t) && n[t] && (n[t] = cc11001100_hook("n[t]", ie(n[t], this._globalOptions.maxUrlLength), "assign"));
        e.values[o].data = cc11001100_hook("e.values[o].data", n, "assign");
      }
    },
    _getHttpData: function () {
      if (this._hasNavigator || this._hasDocument) {
        var e = cc11001100_hook("e", {}, "var-init");
        return this._hasNavigator && Oe.userAgent && (e.headers = cc11001100_hook("e.headers", {
          "User-Agent": cc11001100_hook("User-Agent", navigator.userAgent, "object-key-init")
        }, "assign")), Se.location && Se.location.href && (e.url = cc11001100_hook("e.url", Se.location.href, "assign")), this._hasDocument && we.referrer && (e.headers || (e.headers = cc11001100_hook("e.headers", {}, "assign")), e.headers.Referer = cc11001100_hook("e.headers.Referer", we.referrer, "assign")), e;
      }
    },
    _resetBackoff: function () {
      this._backoffDuration = cc11001100_hook("this._backoffDuration", 0, "assign"), this._backoffStart = cc11001100_hook("this._backoffStart", null, "assign");
    },
    _shouldBackoff: function () {
      return this._backoffDuration && ke() - this._backoffStart < this._backoffDuration;
    },
    _isRepeatData: function (e) {
      var t = cc11001100_hook("t", this._lastData, "var-init");
      return !(!t || e.message !== t.message || e.culprit !== t.culprit) && (e.stacktrace || t.stacktrace ? he(e.stacktrace, t.stacktrace) : !e.exception && !t.exception || fe(e.exception, t.exception));
    },
    _setBackoffState: function (e) {
      if (!this._shouldBackoff()) {
        var t = cc11001100_hook("t", e.status, "var-init");
        if (400 === t || 401 === t || 429 === t) {
          var r;
          try {
            r = cc11001100_hook("r", ge() ? e.headers.get("Retry-After") : e.getResponseHeader("Retry-After"), "assign"), r = cc11001100_hook("r", 1e3 * parseInt(r, 10), "assign");
          } catch (e) {}
          this._backoffDuration = cc11001100_hook("this._backoffDuration", r || 2 * this._backoffDuration || 1e3, "assign"), this._backoffStart = cc11001100_hook("this._backoffStart", ke(), "assign");
        }
      }
    },
    _send: function (e) {
      var t = cc11001100_hook("t", this._globalOptions, "var-init"),
        r = cc11001100_hook("r", {
          project: cc11001100_hook("project", this._globalProject, "object-key-init"),
          logger: cc11001100_hook("logger", t.logger, "object-key-init"),
          platform: cc11001100_hook("platform", "javascript", "object-key-init")
        }, "var-init"),
        n = cc11001100_hook("n", this._getHttpData(), "var-init");
      n && (r.request = cc11001100_hook("r.request", n, "assign")), e.trimHeadFrames && delete e.trimHeadFrames, (e = cc11001100_hook("e", ne(r, e), "assign")).tags = cc11001100_hook("(e = ne(r, e)).tags", ne(ne({}, this._globalContext.tags), e.tags), "assign"), e.extra = cc11001100_hook("e.extra", ne(ne({}, this._globalContext.extra), e.extra), "assign"), e.extra["session:duration"] = cc11001100_hook("e.extra[\"session:duration\"]", ke() - this._startTime, "assign"), this._breadcrumbs && this._breadcrumbs.length > 0 && (e.breadcrumbs = cc11001100_hook("e.breadcrumbs", {
        values: cc11001100_hook("values", [].slice.call(this._breadcrumbs, 0), "object-key-init")
      }, "assign")), this._globalContext.user && (e.user = cc11001100_hook("e.user", this._globalContext.user, "assign")), t.environment && (e.environment = cc11001100_hook("e.environment", t.environment, "assign")), t.release && (e.release = cc11001100_hook("e.release", t.release, "assign")), t.serverName && (e.server_name = cc11001100_hook("e.server_name", t.serverName, "assign")), e = cc11001100_hook("e", this._sanitizeData(e), "assign"), Object.keys(e).forEach(function (t) {
        (null == e[t] || "" === e[t] || te(e[t])) && delete e[t];
      }), Z(t.dataCallback) && (e = cc11001100_hook("e", t.dataCallback(e) || e, "assign")), e && !te(e) && (Z(t.shouldSendCallback) && !t.shouldSendCallback(e) || (this._shouldBackoff() ? this._logDebug("warn", "Raven dropped error due to backoff: ", e) : "number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this._sendProcessedPayload(e) : this._sendProcessedPayload(e)));
    },
    _sanitizeData: function (e) {
      return be(e, this._globalOptions.sanitizeKeys);
    },
    _getUuid: function () {
      return ce();
    },
    _sendProcessedPayload: function (e, t) {
      var r = cc11001100_hook("r", this, "var-init"),
        n = cc11001100_hook("n", this._globalOptions, "var-init");
      if (this.isSetup()) if (e = cc11001100_hook("e", this._trimPacket(e), "assign"), this._globalOptions.allowDuplicates || !this._isRepeatData(e)) {
        this._lastEventId = cc11001100_hook("this._lastEventId", e.event_id || (e.event_id = cc11001100_hook("e.event_id", this._getUuid(), "assign")), "assign"), this._lastData = cc11001100_hook("this._lastData", e, "assign"), this._logDebug("debug", "Raven about to send:", e);
        var i = cc11001100_hook("i", {
          sentry_version: cc11001100_hook("sentry_version", "7", "object-key-init"),
          sentry_client: cc11001100_hook("sentry_client", "raven-js/" + this.VERSION, "object-key-init"),
          sentry_key: cc11001100_hook("sentry_key", this._globalKey, "object-key-init")
        }, "var-init");
        this._globalSecret && (i.sentry_secret = cc11001100_hook("i.sentry_secret", this._globalSecret, "assign"));
        var o = cc11001100_hook("o", e.exception && e.exception.values[0], "var-init");
        this._globalOptions.autoBreadcrumbs && this._globalOptions.autoBreadcrumbs.sentry && this.captureBreadcrumb({
          category: cc11001100_hook("category", "sentry", "object-key-init"),
          message: cc11001100_hook("message", o ? (o.type ? o.type + ": " : "") + o.value : e.message, "object-key-init"),
          event_id: cc11001100_hook("event_id", e.event_id, "object-key-init"),
          level: cc11001100_hook("level", e.level || "error", "object-key-init")
        });
        var a = cc11001100_hook("a", this._globalEndpoint, "var-init");
        (n.transport || this._makeRequest).call(this, {
          url: cc11001100_hook("url", a, "object-key-init"),
          auth: cc11001100_hook("auth", i, "object-key-init"),
          data: cc11001100_hook("data", e, "object-key-init"),
          options: cc11001100_hook("options", n, "object-key-init"),
          onSuccess: function () {
            r._resetBackoff(), r._triggerEvent("success", {
              data: cc11001100_hook("data", e, "object-key-init"),
              src: cc11001100_hook("src", a, "object-key-init")
            }), t && t();
          },
          onError: function (n) {
            r._logDebug("error", "Raven transport failed to send: ", n), n.request && r._setBackoffState(n.request), r._triggerEvent("failure", {
              data: cc11001100_hook("data", e, "object-key-init"),
              src: cc11001100_hook("src", a, "object-key-init")
            }), n = cc11001100_hook("n", n || new Error("Raven send failed (no additional details provided)"), "assign"), t && t(n);
          }
        });
      } else this._logDebug("warn", "Raven dropped repeat event: ", e);
    },
    _makeRequest: function (e) {
      var t = cc11001100_hook("t", e.url + "?" + le(e.auth), "var-init"),
        r = cc11001100_hook("r", null, "var-init"),
        i = cc11001100_hook("i", {}, "var-init");
      if (e.options.headers && (r = cc11001100_hook("r", this._evaluateHash(e.options.headers), "assign")), e.options.fetchParameters && (i = cc11001100_hook("i", this._evaluateHash(e.options.fetchParameters), "assign")), ge()) {
        i.body = cc11001100_hook("i.body", n(e.data), "assign");
        var o = cc11001100_hook("o", ne({}, this._fetchDefaults), "var-init"),
          a = cc11001100_hook("a", ne(o, i), "var-init");
        return r && (a.headers = cc11001100_hook("a.headers", r, "assign")), Se.fetch(t, a).then(function (t) {
          if (t.ok) e.onSuccess && e.onSuccess();else {
            var r = cc11001100_hook("r", new Error("Sentry error code: " + t.status), "var-init");
            r.request = cc11001100_hook("r.request", t, "assign"), e.onError && e.onError(r);
          }
        }).catch(function () {
          e.onError && e.onError(new Error("Sentry error code: network unavailable"));
        });
      }
      var s = cc11001100_hook("s", Se.XMLHttpRequest && new Se.XMLHttpRequest(), "var-init");
      s && ("withCredentials" in s || "undefined" != typeof XDomainRequest) && ("withCredentials" in s ? s.onreadystatechange = cc11001100_hook("s.onreadystatechange", function () {
        if (4 === s.readyState) if (200 === s.status) e.onSuccess && e.onSuccess();else if (e.onError) {
          var t = cc11001100_hook("t", new Error("Sentry error code: " + s.status), "var-init");
          t.request = cc11001100_hook("t.request", s, "assign"), e.onError(t);
        }
      }, "assign") : (s = cc11001100_hook("s", new XDomainRequest(), "assign"), t = cc11001100_hook("t", t.replace(/^https?:/, ""), "assign"), e.onSuccess && (s.onload = cc11001100_hook("s.onload", e.onSuccess, "assign")), e.onError && (s.onerror = cc11001100_hook("s.onerror", function () {
        var t = cc11001100_hook("t", new Error("Sentry error code: XDomainRequest"), "var-init");
        t.request = cc11001100_hook("t.request", s, "assign"), e.onError(t);
      }, "assign"))), s.open("POST", t), r && re(r, function (e, t) {
        s.setRequestHeader(e, t);
      }), s.send(n(e.data)));
    },
    _evaluateHash: function (e) {
      var t = cc11001100_hook("t", {}, "var-init");
      for (var r in e) if (e.hasOwnProperty(r)) {
        var n = cc11001100_hook("n", e[r], "var-init");
        t[r] = cc11001100_hook("t[r]", "function" == typeof n ? n() : n, "assign");
      }
      return t;
    },
    _logDebug: function (e) {
      this._originalConsoleMethods[e] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1));
    },
    _mergeContext: function (e, t) {
      Y(t) ? delete this._globalContext[e] : this._globalContext[e] = cc11001100_hook("this._globalContext[e]", ne(this._globalContext[e] || {}, t), "assign");
    }
  }, "assign"), Re.prototype.setUser = cc11001100_hook("Re.prototype.setUser", Re.prototype.setUserContext, "assign"), Re.prototype.setReleaseContext = cc11001100_hook("Re.prototype.setReleaseContext", Re.prototype.setRelease, "assign");
  var je = cc11001100_hook("je", Re, "var-init"),
    Te = cc11001100_hook("Te", "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, "var-init"),
    Fe = cc11001100_hook("Fe", Te.Raven, "var-init"),
    Pe = cc11001100_hook("Pe", new je(), "var-init");
  Pe.noConflict = cc11001100_hook("Pe.noConflict", function () {
    return Te.Raven = cc11001100_hook("Te.Raven", Fe, "assign"), Pe;
  }, "assign"), Pe.afterLoad();
  var De = cc11001100_hook("De", Pe, "var-init"),
    He = cc11001100_hook("He", je, "var-init");
  De.Client = cc11001100_hook("De.Client", He, "assign");
  var Ne = cc11001100_hook("Ne", {
    ReactApp: cc11001100_hook("ReactApp", ["origin message", "Network request failed", "无法 fetch", "这个系统不支持该功能。", "Can't find variable: webkit", "Can't find variable: $", "内存不足", "out of memory", "DOM Exception 18", "The operation is insecure", "[object Event]", "[object FileError]", "[object DOMError]", "[object Object]", "拒绝访问。", "Maximum call stack size exceeded", "缺少 JavaScript 对象", "componentWillEnter", "componentWillLeave", "componentWillAppear", "getInlineStyleAt", "getCharacterList", "draft-js", "UploadError", /ResponseError:.*/, /^request https?:.*/, /Loading\s(CSS\s)?chunk/, "Non-Error exception captured"], "object-key-init")
  }, "var-init");
  !function () {
    if (["https:", "http:"].indexOf(window.location.protocol) >= 0 && !((t = cc11001100_hook("t", window, "assign")).callPhantom || t._phantom || t.__phantomas || t.buffer || t.Buffer || t.emit || t.spawn || t.webdriver || t.domAutomation || t.domAutomationController)) {
      var t,
        r = cc11001100_hook("r", (document.currentScript || document.querySelector("script[data-sentry-config]")).dataset.sentryConfig, "var-init"),
        n = cc11001100_hook("n", r && JSON.parse(r), "var-init");
      if (n) {
        var i = cc11001100_hook("i", n.dsn, "var-init"),
          o = cc11001100_hook("o", n.ignoreErrorNames, "var-init"),
          a = cc11001100_hook("a", void 0 === o ? [] : o, "var-init"),
          s = cc11001100_hook("s", n.ignoreErrors, "var-init"),
          l = cc11001100_hook("l", void 0 === s ? [] : s, "var-init"),
          c = cc11001100_hook("c", n.ignoreErrorsPreset, "var-init"),
          u = cc11001100_hook("u", function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = cc11001100_hook("i", {}, "var-init"),
              o = cc11001100_hook("o", Object.keys(e), "var-init");
            for (n = cc11001100_hook("n", 0, "assign"); n < o.length; n++) r = cc11001100_hook("r", o[n], "assign"), t.indexOf(r) >= 0 || (i[r] = cc11001100_hook("i[r]", e[r], "assign"));
            return i;
          }(n, ["dsn", "ignoreErrorNames", "ignoreErrors", "ignoreErrorsPreset"]), "var-init");
        Ne[c] && l.push.apply(l, Ne[c]), De.config(i, e({
          shouldSendCallback: function (e) {
            return !(!window.document.body || !e.exception || !e.exception.values || e.exception.values.some(function (e) {
              return a.indexOf(e.type) >= 0;
            }));
          },
          ignoreErrors: cc11001100_hook("ignoreErrors", l, "object-key-init")
        }, u)).install(), window.Raven = cc11001100_hook("window.Raven", De, "assign");
      }
    }
  }();
});