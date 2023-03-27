var ttd_dom_ready = cc11001100_hook("ttd_dom_ready", function () {
  var t,
    n,
    o = cc11001100_hook("o", {
      "[object Boolean]": cc11001100_hook("[object Boolean]", "boolean", "object-key-init"),
      "[object Number]": cc11001100_hook("[object Number]", "number", "object-key-init"),
      "[object String]": cc11001100_hook("[object String]", "string", "object-key-init"),
      "[object Function]": cc11001100_hook("[object Function]", "function", "object-key-init"),
      "[object Array]": cc11001100_hook("[object Array]", "array", "object-key-init"),
      "[object Date]": cc11001100_hook("[object Date]", "date", "object-key-init"),
      "[object RegExp]": cc11001100_hook("[object RegExp]", "regexp", "object-key-init"),
      "[object Object]": cc11001100_hook("[object Object]", "object", "object-key-init")
    }, "var-init"),
    l = cc11001100_hook("l", {
      isReady: cc11001100_hook("isReady", !1, "object-key-init"),
      readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
      holdReady: function (e) {
        e ? l.readyWait++ : l.ready(!0);
      },
      ready: function (e) {
        if (!0 === e && ! --l.readyWait || !0 !== e && !l.isReady) {
          if (!document.body) return setTimeout(l.ready, 1);
          if ((l.isReady = cc11001100_hook("l.isReady", !0, "assign")) !== e && 0 < --l.readyWait) return;
          t.resolveWith(document, [l]);
        }
      },
      bindReady: function () {
        if (!t) {
          if (t = cc11001100_hook("t", l._Deferred(), "assign"), "complete" === document.readyState) return setTimeout(l.ready, 1);
          if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", l.ready, !1);else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", n), window.attachEvent("onload", l.ready);
            var e = cc11001100_hook("e", !1, "var-init");
            try {
              e = cc11001100_hook("e", null == window.frameElement, "assign");
            } catch (e) {}
            document.documentElement.doScroll && e && r();
          }
        }
      },
      _Deferred: function () {
        var a,
          n,
          d,
          c = cc11001100_hook("c", [], "var-init"),
          u = cc11001100_hook("u", {
            done: function () {
              if (!d) {
                var e,
                  t,
                  n,
                  o,
                  r,
                  i = cc11001100_hook("i", arguments, "var-init");
                for (a && (r = cc11001100_hook("r", a, "assign"), a = cc11001100_hook("a", 0, "assign")), e = cc11001100_hook("e", 0, "assign"), t = cc11001100_hook("t", i.length, "assign"); e < t; e++) n = cc11001100_hook("n", i[e], "assign"), "array" === (o = cc11001100_hook("o", l.type(n), "assign")) ? u.done.apply(u, n) : "function" === o && c.push(n);
                r && u.resolveWith(r[0], r[1]);
              }
              return this;
            },
            resolveWith: function (e, t) {
              if (!d && !a && !n) {
                t = cc11001100_hook("t", t || [], "assign"), n = cc11001100_hook("n", 1, "assign");
                try {
                  for (; c[0];) c.shift().apply(e, t);
                } finally {
                  a = cc11001100_hook("a", [e, t], "assign"), n = cc11001100_hook("n", 0, "assign");
                }
              }
              return this;
            },
            resolve: function () {
              return u.resolveWith(this, arguments), this;
            },
            isResolved: function () {
              return !(!n && !a);
            },
            cancel: function () {
              return d = cc11001100_hook("d", 1, "assign"), c = cc11001100_hook("c", [], "assign"), this;
            }
          }, "var-init");
        return u;
      },
      type: function (e) {
        return null == e ? String(e) : o[Object.prototype.toString.call(e)] || "object";
      }
    }, "var-init");
  function r() {
    if (!l.isReady) {
      try {
        document.documentElement.doScroll("left");
      } catch (e) {
        return void setTimeout(r, 1);
      }
      l.ready();
    }
  }
  return document.addEventListener ? n = cc11001100_hook("n", function () {
    document.removeEventListener("DOMContentLoaded", n, !1), l.ready();
  }, "assign") : document.attachEvent && (n = cc11001100_hook("n", function () {
    "complete" === document.readyState && (document.detachEvent("onreadystatechange", n), l.ready());
  }, "assign")), function (e) {
    l.bindReady(), l.type(e), t.done(e);
  };
}(), "var-init");
function TTDUniversalPixelApi(L) {
  cc11001100_hook("L", L, "function-parameter");
  this.getVersion = cc11001100_hook("this.getVersion", function () {
    return "1.1.0";
  }, "assign"), this.init = cc11001100_hook("this.init", function (e, r, t, n) {
    if ("string" == typeof n && (n = cc11001100_hook("n", null, "assign"), 4 < arguments.length)) for (var o = cc11001100_hook("o", 4, "var-init"); o < arguments.length; o++) arguments[o - 1] = cc11001100_hook("arguments[o - 1]", arguments[o], "assign");
    if (e && "" != e && r && !(r.length <= 0)) {
      var i = cc11001100_hook("i", document.getElementsByTagName("body")[0], "var-init");
      if (i) {
        var a = cc11001100_hook("a", "", "var-init"),
          d = cc11001100_hook("d", {
            MonetaryValue: cc11001100_hook("MonetaryValue", "v", "object-key-init"),
            MonetaryValueFormat: cc11001100_hook("MonetaryValueFormat", "vf", "object-key-init")
          }, "var-init"),
          c = cc11001100_hook("c", [], "var-init");
        if ("undefined" != typeof _pixelParams) for (var o in _pixelParams) {
          var u = cc11001100_hook("u", _pixelParams[o], "var-init"),
            l = cc11001100_hook("l", d[o], "var-init");
          l && u && !/%%.*%%/i.test(u) && c.push(l + "=" + encodeURIComponent(u));
        }
        var f = cc11001100_hook("f", "adv=" + e, "var-init"),
          s = cc11001100_hook("s", "upid=" + r.join(","), "var-init"),
          p = cc11001100_hook("p", L || function () {
            var e = cc11001100_hook("e", window, "var-init"),
              t = cc11001100_hook("t", "", "var-init"),
              n = cc11001100_hook("n", !1, "var-init");
            try {
              top.location.href && (t = cc11001100_hook("t", top.location.href, "assign"));
            } catch (e) {
              n = cc11001100_hook("n", !0, "assign");
            }
            if (n) for (;;) try {
              if (t = cc11001100_hook("t", e.document.referrer, "assign"), window.parent == e) break;
              e = cc11001100_hook("e", window.parent, "assign");
            } catch (e) {
              break;
            }
            -1 < t.indexOf("cloudfront.net") && (t = cc11001100_hook("t", function (e, t) {
              t = cc11001100_hook("t", t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), "assign");
              var n = cc11001100_hook("n", new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e), "var-init");
              return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "));
            }(t, "url") || t, "assign"));
            return t;
          }(), "var-init");
        if (a = cc11001100_hook("a", t + "?" + f + "&ref=" + encodeURIComponent(p) + "&" + s + "&upv=" + this.getVersion(), "assign"), n) for (var m in n) a = cc11001100_hook("a", a + "&" + m + "=" + n[m], "assign");
        0 < c.length && (a = cc11001100_hook("a", a + "&" + c.join("&"), "assign"));
        var v = cc11001100_hook("v", null, "var-init"),
          y = cc11001100_hook("y", !1, "var-init"),
          h = cc11001100_hook("h", null, "var-init");
        "function" == typeof __tcfapi ? (g = cc11001100_hook("g", setTimeout(T, 1e3), "assign"), __tcfapi("addEventListener", 2, D)) : "function" == typeof __cmp ? (v = cc11001100_hook("v", setTimeout(_, 1e3), "assign"), __cmp("ping", null, E)) : w();
        var g = cc11001100_hook("g", null, "var-init"),
          b = cc11001100_hook("b", !1, "var-init");
      }
    }
    function _() {
      y = cc11001100_hook("y", !0, "assign"), w();
    }
    function E(e) {
      cc11001100_hook("e", e, "function-parameter");
      y || (e.cmpLoaded || e.gdprAppliesGlobally ? (clearTimeout(v), h = cc11001100_hook("h", new Date(), "assign"), __cmp("getConsentData", null, w)) : setTimeout(function () {
        __cmp("ping", null, E);
      }, 200));
    }
    function w(e) {
      cc11001100_hook("e", e, "function-parameter");
      null != h && (a = cc11001100_hook("a", a + "&ret=" + (new Date() - h), "assign")), y && (a += cc11001100_hook("a", "&pto=1", "assign")), null != e && (a = cc11001100_hook("a", a + "&gdpr=" + (e.gdprApplies ? "1" : "0") + "&gdpr_consent=" + e.consentData, "assign")), j();
    }
    function j() {
      for (var e = cc11001100_hook("e", "universal_pixel_" + r.join("_"), "var-init"), t = cc11001100_hook("t", document.getElementById(e), "var-init"); t && t.parentElement.removeChild(t), t = cc11001100_hook("t", document.getElementById(e), "assign"););
      var n = cc11001100_hook("n", document.createElement("iframe"), "var-init");
      function o() {
        i.appendChild(n);
      }
      n.setAttribute("id", e), n.setAttribute("height", 0), n.setAttribute("width", 0), n.setAttribute("style", "display:none;"), n.setAttribute("src", a), n.setAttribute("title", "TTD Universal Pixel"), "complete" === document.readyState ? setTimeout(o, 0) : window.addEventListener ? window.addEventListener("load", o) : window.attachEvent ? window.attachEvent("onload", o) : o();
    }
    function T() {
      b = cc11001100_hook("b", !0, "assign"), w();
    }
    function D(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (!b) return t ? (clearTimeout(g), function (e) {
        null != h && (a = cc11001100_hook("a", a + "&ret=" + (new Date() - h), "assign"));
        b && (a += cc11001100_hook("a", "&pto=1", "assign"));
        null != e && (a = cc11001100_hook("a", a + "&gdpr=" + function (e) {
          return e ? "1" : "0";
        }(e.gdprApplies) + "&gdpr_consent=" + e.tcString, "assign"));
        j();
      }(e), h = cc11001100_hook("h", new Date(), "assign"), void __tcfapi("removeEventListener", 2, function (e) {}, e.listenerId)) : void 0;
      __tcfapi("removeEventListener", 2, function (e) {}, e.listenerId);
    }
  }, "assign");
}