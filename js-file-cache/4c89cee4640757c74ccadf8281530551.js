(function () {
  var h = cc11001100_hook("h", {}, "var-init"),
    mt = cc11001100_hook("mt", {}, "var-init"),
    c = cc11001100_hook("c", {
      id: cc11001100_hook("id", "fd366859930703d79e0a0f0c64507b64", "object-key-init"),
      dm: cc11001100_hook("dm", ["zhaojun.ink"], "object-key-init"),
      js: cc11001100_hook("js", "tongji.baidu.com/hm-web/js/", "object-key-init"),
      etrk: cc11001100_hook("etrk", [], "object-key-init"),
      cetrk: cc11001100_hook("cetrk", [], "object-key-init"),
      cptrk: cc11001100_hook("cptrk", [], "object-key-init"),
      icon: cc11001100_hook("icon", '', "object-key-init"),
      ctrk: cc11001100_hook("ctrk", [], "object-key-init"),
      vdur: cc11001100_hook("vdur", 1800000, "object-key-init"),
      age: cc11001100_hook("age", 31536000000, "object-key-init"),
      qiao: cc11001100_hook("qiao", 0, "object-key-init"),
      pt: cc11001100_hook("pt", 0, "object-key-init"),
      spa: cc11001100_hook("spa", 0, "object-key-init"),
      aet: cc11001100_hook("aet", '', "object-key-init"),
      hca: cc11001100_hook("hca", '54058FCD3122BF92', "object-key-init"),
      ab: cc11001100_hook("ab", '0', "object-key-init"),
      v: cc11001100_hook("v", 1, "object-key-init")
    }, "var-init");
  var s = cc11001100_hook("s", void 0, "var-init"),
    t = cc11001100_hook("t", !0, "var-init"),
    u = cc11001100_hook("u", null, "var-init"),
    x = cc11001100_hook("x", !1, "var-init");
  mt.cookie = cc11001100_hook("mt.cookie", {}, "assign");
  mt.cookie.set = cc11001100_hook("mt.cookie.set", function (e, a, b) {
    var k;
    b.C && (k = cc11001100_hook("k", new Date(), "assign"), k.setTime(k.getTime() + b.C));
    document.cookie = cc11001100_hook("document.cookie", e + "=" + a + (b.domain ? "; domain=" + b.domain : "") + (b.path ? "; path=" + b.path : "") + (k ? "; expires=" + k.toGMTString() : "") + (b.dc ? "; secure" : ""), "assign");
  }, "assign");
  mt.cookie.get = cc11001100_hook("mt.cookie.get", function (e) {
    return (e = cc11001100_hook("e", RegExp("(^| )" + e + "=([^;]*)(;|$)").exec(document.cookie), "assign")) ? e[2] : u;
  }, "assign");
  mt.cookie.rb = cc11001100_hook("mt.cookie.rb", function (e, a) {
    try {
      var b = cc11001100_hook("b", "Hm_ck_" + +new Date(), "var-init");
      mt.cookie.set(b, "42", {
        domain: cc11001100_hook("domain", e, "object-key-init"),
        path: cc11001100_hook("path", a, "object-key-init"),
        C: cc11001100_hook("C", s, "object-key-init")
      });
      var k = cc11001100_hook("k", "42" === mt.cookie.get(b) ? "1" : "0", "var-init");
      mt.cookie.set(b, "", {
        domain: cc11001100_hook("domain", e, "object-key-init"),
        path: cc11001100_hook("path", a, "object-key-init"),
        C: cc11001100_hook("C", -1, "object-key-init")
      });
      return k;
    } catch (d) {
      return "0";
    }
  }, "assign");
  mt.event = cc11001100_hook("mt.event", {}, "assign");
  mt.event.c = cc11001100_hook("mt.event.c", function (e, a, b, k) {
    e.addEventListener ? e.addEventListener(a, b, k || x) : e.attachEvent && e.attachEvent("on" + a, function (d) {
      b.call(e, d);
    });
  }, "assign");
  (function () {
    var e = cc11001100_hook("e", mt.event, "var-init");
    mt.lang = cc11001100_hook("mt.lang", {}, "assign");
    mt.lang.i = cc11001100_hook("mt.lang.i", function (a, b) {
      return "[object " + b + "]" === {}.toString.call(a);
    }, "assign");
    mt.lang.j = cc11001100_hook("mt.lang.j", function (a) {
      return mt.lang.i(a, "Function");
    }, "assign");
    mt.lang.J = cc11001100_hook("mt.lang.J", function (a) {
      return mt.lang.i(a, "Object");
    }, "assign");
    mt.lang.Wb = cc11001100_hook("mt.lang.Wb", function (a) {
      return mt.lang.i(a, "Number") && isFinite(a);
    }, "assign");
    mt.lang.Z = cc11001100_hook("mt.lang.Z", function (a) {
      return mt.lang.i(a, "String");
    }, "assign");
    mt.lang.isArray = cc11001100_hook("mt.lang.isArray", function (a) {
      return mt.lang.i(a, "Array");
    }, "assign");
    mt.lang.n = cc11001100_hook("mt.lang.n", function (a) {
      return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a;
    }, "assign");
    mt.lang.trim = cc11001100_hook("mt.lang.trim", function (a) {
      return a.replace(/^\s+|\s+$/g, "");
    }, "assign");
    mt.lang.find = cc11001100_hook("mt.lang.find", function (a, b, k) {
      if (mt.lang.isArray(a) && mt.lang.j(b)) for (var d = cc11001100_hook("d", a.length, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < d; f++) if (f in a && b.call(k || a, a[f], f)) return a[f];
      return u;
    }, "assign");
    mt.lang.X = cc11001100_hook("mt.lang.X", function (a, b) {
      return mt.lang.find(a, function (k) {
        return k === b;
      }) != u;
    }, "assign");
    mt.lang.filter = cc11001100_hook("mt.lang.filter", function (a, b) {
      var k = cc11001100_hook("k", -1, "var-init"),
        d = cc11001100_hook("d", 0, "var-init"),
        f = cc11001100_hook("f", a == u ? 0 : a.length, "var-init"),
        g = cc11001100_hook("g", [], "var-init");
      if (mt.lang.j(b)) for (; ++k < f;) {
        var l = cc11001100_hook("l", a[k], "var-init");
        b(l, k, a) && (g[d++] = cc11001100_hook("g[d++]", l, "assign"));
      }
      return g;
    }, "assign");
    mt.lang.unique = cc11001100_hook("mt.lang.unique", function (a, b) {
      var k = cc11001100_hook("k", a.length, "var-init"),
        d = cc11001100_hook("d", a.slice(0), "var-init"),
        f,
        g;
      for (mt.lang.j(b) || (b = cc11001100_hook("b", function (b, d) {
        return b === d;
      }, "assign")); 0 < --k;) {
        g = cc11001100_hook("g", d[k], "assign");
        for (f = cc11001100_hook("f", k, "assign"); f--;) if (b(g, d[f])) {
          d.splice(k, 1);
          break;
        }
      }
      return d;
    }, "assign");
    mt.lang.Zb = cc11001100_hook("mt.lang.Zb", function (a, b) {
      function k(b) {
        cc11001100_hook("b", b, "function-parameter");
        b = cc11001100_hook("b", (d + d + Number(b).toString(2)).slice(-64), "assign");
        return [parseInt(b.slice(0, 32), 2), parseInt(b.slice(-32), 2)];
      }
      var d = cc11001100_hook("d", "00000000000000000000000000000000", "var-init"),
        f = cc11001100_hook("f", k(a), "var-init"),
        g = cc11001100_hook("g", k(b), "var-init");
      return parseInt((d + ((f[0] | g[0]) >>> 0).toString(2)).slice(-32) + (d + ((f[1] | g[1]) >>> 0).toString(2)).slice(-32), 2);
    }, "assign");
    mt.lang.extend = cc11001100_hook("mt.lang.extend", function (a) {
      for (var b = cc11001100_hook("b", Array.prototype.slice.call(arguments, 1), "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < b.length; k++) {
        var d = cc11001100_hook("d", b[k], "var-init"),
          f;
        for (f in d) Object.prototype.hasOwnProperty.call(d, f) && d[f] && (a[f] = cc11001100_hook("a[f]", d[f], "assign"));
      }
      return a;
    }, "assign");
    mt.lang.Ob = cc11001100_hook("mt.lang.Ob", function (a) {
      function b(b, d) {
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        var a = cc11001100_hook("a", window.history, "var-init"),
          g = cc11001100_hook("g", a[b], "var-init");
        a[b] = cc11001100_hook("a[b]", function () {
          g.apply(a, arguments);
          mt.lang.j(d) && d();
        }, "assign");
      }
      b("pushState", function () {
        a();
      });
      b("replaceState", function () {
        a();
      });
      e.c(window, window.history.pushState ? "popstate" : "hashchange", function () {
        a();
      });
    }, "assign");
    return mt.lang;
  })();
  mt.url = cc11001100_hook("mt.url", {}, "assign");
  mt.url.f = cc11001100_hook("mt.url.f", function (e, a) {
    var b = cc11001100_hook("b", e.match(RegExp("(^|&|\\?|#)(" + a + ")=([^&#]*)(&|$|#)", "")), "var-init");
    return b ? b[3] : u;
  }, "assign");
  mt.url.Sa = cc11001100_hook("mt.url.Sa", function (e) {
    return (e = cc11001100_hook("e", e.match(/^(https?:\/\/)?([^\/\?#]*)/), "assign")) ? e[2].replace(/.*@/, "") : u;
  }, "assign");
  mt.url.V = cc11001100_hook("mt.url.V", function (e) {
    return (e = cc11001100_hook("e", mt.url.Sa(e), "assign")) ? e.replace(/:\d+$/, "") : e;
  }, "assign");
  mt.url.pb = cc11001100_hook("mt.url.pb", function (e) {
    var a = cc11001100_hook("a", document.location.href, "var-init"),
      a = cc11001100_hook("a", a.replace(/^https?:\/\//, ""), "var-init");
    return 0 === a.indexOf(e);
  }, "assign");
  mt.url.qb = cc11001100_hook("mt.url.qb", function (e, a) {
    e = cc11001100_hook("e", "." + e.replace(/:\d+/, ""), "assign");
    a = cc11001100_hook("a", "." + a.replace(/:\d+/, ""), "assign");
    var b = cc11001100_hook("b", e.indexOf(a), "var-init");
    return -1 < b && b + a.length === e.length;
  }, "assign");
  (function () {
    var e = cc11001100_hook("e", mt.lang, "var-init"),
      a = cc11001100_hook("a", mt.url, "var-init");
    mt.d = cc11001100_hook("mt.d", {}, "assign");
    mt.d.La = cc11001100_hook("mt.d.La", function (b) {
      return document.getElementById(b);
    }, "assign");
    mt.d.Vb = cc11001100_hook("mt.d.Vb", function (b) {
      if (!b) return u;
      try {
        b = cc11001100_hook("b", String(b), "assign");
        if (0 === b.indexOf("!HMCQ!")) return b;
        if (0 === b.indexOf("!HMCC!")) return document.querySelector(b.substring(6, b.length));
        for (var k = cc11001100_hook("k", b.split(">"), "var-init"), d = cc11001100_hook("d", document.body, "var-init"), a = cc11001100_hook("a", k.length - 1, "var-init"); 0 <= a; a--) if (-1 < k[a].indexOf("#")) {
          var g = cc11001100_hook("g", k[a].split("#")[1], "var-init");
          (d = cc11001100_hook("d", document.getElementById(g), "assign")) || (d = cc11001100_hook("d", document.getElementById(decodeURIComponent(g)), "assign"));
          k = cc11001100_hook("k", k.splice(a + 1, k.length - (a + 1)), "assign");
          break;
        }
        for (b = cc11001100_hook("b", 0, "assign"); d && b < k.length;) {
          var l = cc11001100_hook("l", String(k[b]).toLowerCase(), "var-init");
          if (!("html" === l || "body" === l)) {
            var a = cc11001100_hook("a", 0, "var-init"),
              e = cc11001100_hook("e", k[b].match(/\[(\d+)\]/i), "var-init"),
              g = cc11001100_hook("g", [], "var-init");
            if (e) a = cc11001100_hook("a", e[1] - 1, "assign"), l = cc11001100_hook("l", l.split("[")[0], "assign");else if (1 !== d.childNodes.length) {
              for (var p = cc11001100_hook("p", 0, "var-init"), n = cc11001100_hook("n", 0, "var-init"), m = cc11001100_hook("m", d.childNodes.length, "var-init"); n < m; n++) {
                var q = cc11001100_hook("q", d.childNodes[n], "var-init");
                1 === q.nodeType && q.nodeName.toLowerCase() === l && p++;
                if (1 < p) return u;
              }
              if (1 !== p) return u;
            }
            for (p = cc11001100_hook("p", 0, "assign"); p < d.childNodes.length; p++) 1 === d.childNodes[p].nodeType && d.childNodes[p].nodeName.toLowerCase() === l && g.push(d.childNodes[p]);
            if (!g[a]) return u;
            d = cc11001100_hook("d", g[a], "assign");
          }
          b++;
        }
        return d;
      } catch (v) {
        return u;
      }
    }, "assign");
    mt.d.fa = cc11001100_hook("mt.d.fa", function (b, a) {
      var d = cc11001100_hook("d", [], "var-init"),
        f = cc11001100_hook("f", [], "var-init");
      if (!b) return f;
      for (; b.parentNode != u;) {
        for (var g = cc11001100_hook("g", 0, "var-init"), l = cc11001100_hook("l", 0, "var-init"), e = cc11001100_hook("e", b.parentNode.childNodes.length, "var-init"), p = cc11001100_hook("p", 0, "var-init"); p < e; p++) {
          var n = cc11001100_hook("n", b.parentNode.childNodes[p], "var-init");
          if (n.nodeName === b.nodeName && (g++, n === b && (l = cc11001100_hook("l", g, "assign")), 0 < l && 1 < g)) break;
        }
        if ((e = cc11001100_hook("e", "" !== b.id, "assign")) && a) {
          d.unshift("#" + encodeURIComponent(b.id));
          break;
        } else e && (e = cc11001100_hook("e", "#" + encodeURIComponent(b.id), "assign"), e = cc11001100_hook("e", 0 < d.length ? e + ">" + d.join(">") : e, "assign"), f.push(e)), d.unshift(encodeURIComponent(String(b.nodeName).toLowerCase()) + (1 < g ? "[" + l + "]" : ""));
        b = cc11001100_hook("b", b.parentNode, "assign");
      }
      f.push(d.join(">"));
      return f;
    }, "assign");
    mt.d.Xa = cc11001100_hook("mt.d.Xa", function (b) {
      return (b = cc11001100_hook("b", mt.d.fa(b, t), "assign")) && b.length ? String(b[0]) : "";
    }, "assign");
    mt.d.Wa = cc11001100_hook("mt.d.Wa", function (b) {
      return mt.d.fa(b, x);
    }, "assign");
    mt.d.Ma = cc11001100_hook("mt.d.Ma", function (b) {
      var a;
      for (a = cc11001100_hook("a", "A", "assign"); (b = cc11001100_hook("b", b.parentNode, "assign")) && 1 == b.nodeType;) if (b.tagName == a) return b;
      return u;
    }, "assign");
    mt.d.Pa = cc11001100_hook("mt.d.Pa", function (b) {
      return 9 === b.nodeType ? b : b.ownerDocument || b.document;
    }, "assign");
    mt.d.Ua = cc11001100_hook("mt.d.Ua", function (b) {
      var a = cc11001100_hook("a", {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      }, "var-init");
      if (!b) return a;
      var d = cc11001100_hook("d", mt.d.Pa(b).documentElement, "var-init");
      "undefined" !== typeof b.getBoundingClientRect && (a = cc11001100_hook("a", b.getBoundingClientRect(), "assign"));
      return {
        top: cc11001100_hook("top", a.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0), "object-key-init"),
        left: cc11001100_hook("left", a.left + (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0), "object-key-init")
      };
    }, "assign");
    mt.d.gc = cc11001100_hook("mt.d.gc", function (b, a) {
      if (b) for (var d = cc11001100_hook("d", b.childNodes, "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", d.length, "var-init"); f < g; f++) {
        var e = cc11001100_hook("e", d[f], "var-init");
        if (e && 3 === e.nodeType) return d = cc11001100_hook("d", e.textContent || e.innerText || e.nodeValue || "", "assign"), e.textContent ? e.textContent = cc11001100_hook("e.textContent", a, "assign") : e.innerText ? e.innerText = cc11001100_hook("e.innerText", a, "assign") : e.nodeValue = cc11001100_hook("e.nodeValue", a, "assign"), d;
      }
    }, "assign");
    mt.d.ec = cc11001100_hook("mt.d.ec", function (b, a) {
      if (!b) return {};
      var d = cc11001100_hook("d", {}, "var-init");
      a = cc11001100_hook("a", a || {}, "assign");
      for (var f in a) a.hasOwnProperty(f) && a[f] !== s && (d[f] = cc11001100_hook("d[f]", b.getAttribute(f) || "", "assign"), b.setAttribute(f, a[f]));
      return d;
    }, "assign");
    mt.d.getAttribute = cc11001100_hook("mt.d.getAttribute", function (b, a) {
      var d = cc11001100_hook("d", b.getAttribute && b.getAttribute(a) || u, "var-init");
      if (!d && b.attributes && b.attributes.length) for (var f = cc11001100_hook("f", b.attributes, "var-init"), e = cc11001100_hook("e", f.length, "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < e; l++) f[l].nodeName === a && (d = cc11001100_hook("d", f[l].nodeValue, "assign"));
      return d;
    }, "assign");
    mt.d.Qa = cc11001100_hook("mt.d.Qa", function (b) {
      var a = cc11001100_hook("a", "document", "var-init");
      b.tagName !== s && (a = cc11001100_hook("a", b.tagName, "assign"));
      return a.toLowerCase();
    }, "assign");
    mt.d.Za = cc11001100_hook("mt.d.Za", function (b) {
      var a = cc11001100_hook("a", "", "var-init");
      b.textContent ? a = cc11001100_hook("a", e.trim(b.textContent), "assign") : b.innerText && (a = cc11001100_hook("a", e.trim(b.innerText), "assign"));
      a && (a = cc11001100_hook("a", a.replace(/\s+/g, " ").substring(0, 255), "assign"));
      return a;
    }, "assign");
    mt.d.Ub = cc11001100_hook("mt.d.Ub", function (b, k) {
      var d;
      e.Z(b) && 0 === String(b).indexOf("!HMCQ!") ? (d = cc11001100_hook("d", String(b), "assign"), d = cc11001100_hook("d", a.f(document.location.href, d.substring(6, d.length)), "assign")) : e.Z(b) || (d = cc11001100_hook("d", mt.d.Qa(b), "assign"), "input" === d && k && ("button" === b.type || "submit" === b.type) ? d = cc11001100_hook("d", e.trim(b.value) || "", "assign") : "input" === d && !k && "password" !== b.type ? d = cc11001100_hook("d", e.trim(b.value) || "", "assign") : "img" === d ? (d = cc11001100_hook("d", mt.d.getAttribute, "assign"), d = cc11001100_hook("d", d(b, "alt") || d(b, "title") || d(b, "src"), "assign")) : d = cc11001100_hook("d", "body" === d || "html" === d ? ["(hm-default-content-for-", d, ")"].join("") : mt.d.Za(b), "assign"));
      return String(d || "").substring(0, 255);
    }, "assign");
    (function () {
      (mt.d.ac = cc11001100_hook("mt.d.ac", function () {
        function b() {
          if (!b.K) {
            b.K = cc11001100_hook("b.K", t, "assign");
            for (var a = cc11001100_hook("a", 0, "var-init"), d = cc11001100_hook("d", f.length, "var-init"); a < d; a++) f[a]();
          }
        }
        function a() {
          try {
            document.documentElement.doScroll("left");
          } catch (d) {
            setTimeout(a, 1);
            return;
          }
          b();
        }
        var d = cc11001100_hook("d", x, "var-init"),
          f = cc11001100_hook("f", [], "var-init"),
          e;
        document.addEventListener ? e = cc11001100_hook("e", function () {
          document.removeEventListener("DOMContentLoaded", e, x);
          b();
        }, "assign") : document.attachEvent && (e = cc11001100_hook("e", function () {
          "complete" === document.readyState && (document.detachEvent("onreadystatechange", e), b());
        }, "assign"));
        (function () {
          if (!d) if (d = cc11001100_hook("d", t, "assign"), "complete" === document.readyState) b.K = cc11001100_hook("b.K", t, "assign");else if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, x), window.addEventListener("load", b, x);else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", e);
            window.attachEvent("onload", b);
            var f = cc11001100_hook("f", x, "var-init");
            try {
              f = cc11001100_hook("f", window.frameElement == u, "assign");
            } catch (r) {}
            document.documentElement.doScroll && f && a();
          }
        })();
        return function (a) {
          b.K ? a() : f.push(a);
        };
      }(), "assign")).K = cc11001100_hook("(mt.d.ac = function () {\n  function b() {\n    if (!b.K) {\n      b.K = t;\n      for (var a = 0, d = f.length; a < d; a++) f[a]();\n    }\n  }\n  function a() {\n    try {\n      document.documentElement.doScroll(\"left\");\n    } catch (d) {\n      setTimeout(a, 1);\n      return;\n    }\n    b();\n  }\n  var d = x,\n    f = [],\n    e;\n  document.addEventListener ? e = function () {\n    document.removeEventListener(\"DOMContentLoaded\", e, x);\n    b();\n  } : document.attachEvent && (e = function () {\n    \"complete\" === document.readyState && (document.detachEvent(\"onreadystatechange\", e), b());\n  });\n  (function () {\n    if (!d) if (d = t, \"complete\" === document.readyState) b.K = t;else if (document.addEventListener) document.addEventListener(\"DOMContentLoaded\", e, x), window.addEventListener(\"load\", b, x);else if (document.attachEvent) {\n      document.attachEvent(\"onreadystatechange\", e);\n      window.attachEvent(\"onload\", b);\n      var f = x;\n      try {\n        f = window.frameElement == u;\n      } catch (r) {}\n      document.documentElement.doScroll && f && a();\n    }\n  })();\n  return function (a) {\n    b.K ? a() : f.push(a);\n  };\n}()).K", x, "assign");
    })();
    return mt.d;
  })();
  (function () {
    var e = cc11001100_hook("e", mt.event, "var-init");
    mt.e = cc11001100_hook("mt.e", {}, "assign");
    mt.e.mb = cc11001100_hook("mt.e.mb", /msie (\d+\.\d+)/i.test(navigator.userAgent), "assign");
    mt.e.cookieEnabled = cc11001100_hook("mt.e.cookieEnabled", navigator.cookieEnabled, "assign");
    mt.e.javaEnabled = cc11001100_hook("mt.e.javaEnabled", navigator.javaEnabled(), "assign");
    mt.e.language = cc11001100_hook("mt.e.language", navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "", "assign");
    mt.e.Ab = cc11001100_hook("mt.e.Ab", (window.screen.width || 0) + "x" + (window.screen.height || 0), "assign");
    mt.e.colorDepth = cc11001100_hook("mt.e.colorDepth", window.screen.colorDepth || 0, "assign");
    mt.e.Ya = cc11001100_hook("mt.e.Ya", function () {
      var a;
      a = cc11001100_hook("a", a || document, "assign");
      return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10);
    }, "assign");
    mt.e.$a = cc11001100_hook("mt.e.$a", function () {
      var a = cc11001100_hook("a", document, "var-init");
      return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10);
    }, "assign");
    mt.e.W = cc11001100_hook("mt.e.W", function () {
      return mt.e.Ya() + mt.e.$a();
    }, "assign");
    mt.e.sa = cc11001100_hook("mt.e.sa", 0, "assign");
    mt.e.bb = cc11001100_hook("mt.e.bb", function () {
      var a = cc11001100_hook("a", document, "var-init");
      return parseInt(window.innerWidth || a.documentElement.clientWidth || a.body.offsetWidth || 0, 10);
    }, "assign");
    mt.e.orientation = cc11001100_hook("mt.e.orientation", 0, "assign");
    (function () {
      function a() {
        var a = cc11001100_hook("a", 0, "var-init");
        window.orientation !== s && (a = cc11001100_hook("a", window.orientation, "assign"));
        screen && screen.orientation && screen.orientation.angle !== s && (a = cc11001100_hook("a", screen.orientation.angle, "assign"));
        mt.e.orientation = cc11001100_hook("mt.e.orientation", a, "assign");
        mt.e.sa = cc11001100_hook("mt.e.sa", mt.e.bb(), "assign");
      }
      a();
      e.c(window, "orientationchange", a);
    })();
    return mt.e;
  })();
  mt.w = cc11001100_hook("mt.w", {}, "assign");
  mt.w.parse = cc11001100_hook("mt.w.parse", function (e) {
    return new Function("return (" + e + ")")();
  }, "assign");
  mt.w.stringify = cc11001100_hook("mt.w.stringify", function () {
    function e(a) {
      cc11001100_hook("a", a, "function-parameter");
      /["\\\x00-\x1f]/.test(a) && (a = cc11001100_hook("a", a.replace(/["\\\x00-\x1f]/g, function (a) {
        var f = cc11001100_hook("f", b[a], "var-init");
        if (f) return f;
        f = cc11001100_hook("f", a.charCodeAt(), "assign");
        return "\\u00" + Math.floor(f / 16).toString(16) + (f % 16).toString(16);
      }), "assign"));
      return '"' + a + '"';
    }
    function a(a) {
      cc11001100_hook("a", a, "function-parameter");
      return 10 > a ? "0" + a : a;
    }
    var b = cc11001100_hook("b", {
      "\b": cc11001100_hook("\b", "\\b", "object-key-init"),
      "\t": cc11001100_hook("\t", "\\t", "object-key-init"),
      "\n": cc11001100_hook("\n", "\\n", "object-key-init"),
      "\f": cc11001100_hook("\f", "\\f", "object-key-init"),
      "\r": cc11001100_hook("\r", "\\r", "object-key-init"),
      '"': cc11001100_hook('"', '\\"', "object-key-init"),
      "\\": cc11001100_hook("\\", "\\\\", "object-key-init")
    }, "var-init");
    return function (b) {
      switch (typeof b) {
        case "undefined":
          return "undefined";
        case "number":
          return isFinite(b) ? String(b) : "null";
        case "string":
          return e(b);
        case "boolean":
          return String(b);
        default:
          if (b === u) return "null";
          if (b instanceof Array) {
            var d = cc11001100_hook("d", ["["], "var-init"),
              f = cc11001100_hook("f", b.length, "var-init"),
              g,
              l,
              r;
            for (l = cc11001100_hook("l", 0, "assign"); l < f; l++) switch (r = cc11001100_hook("r", b[l], "assign"), typeof r) {
              case "undefined":
              case "function":
              case "unknown":
                break;
              default:
                g && d.push(","), d.push(mt.w.stringify(r)), g = cc11001100_hook("g", 1, "assign");
            }
            d.push("]");
            return d.join("");
          }
          if (b instanceof Date) return '"' + b.getFullYear() + "-" + a(b.getMonth() + 1) + "-" + a(b.getDate()) + "T" + a(b.getHours()) + ":" + a(b.getMinutes()) + ":" + a(b.getSeconds()) + '"';
          g = cc11001100_hook("g", ["{"], "assign");
          l = cc11001100_hook("l", mt.w.stringify, "assign");
          for (f in b) if (Object.prototype.hasOwnProperty.call(b, f)) switch (r = cc11001100_hook("r", b[f], "assign"), typeof r) {
            case "undefined":
            case "unknown":
            case "function":
              break;
            default:
              d && g.push(","), d = cc11001100_hook("d", 1, "assign"), g.push(l(f) + ":" + l(r));
          }
          g.push("}");
          return g.join("");
      }
    };
  }(), "assign");
  mt.localStorage = cc11001100_hook("mt.localStorage", {}, "assign");
  mt.localStorage.Q = cc11001100_hook("mt.localStorage.Q", function () {
    if (!mt.localStorage.g) try {
      mt.localStorage.g = cc11001100_hook("mt.localStorage.g", document.createElement("input"), "assign"), mt.localStorage.g.type = cc11001100_hook("mt.localStorage.g.type", "hidden", "assign"), mt.localStorage.g.style.display = cc11001100_hook("mt.localStorage.g.style.display", "none", "assign"), mt.localStorage.g.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g);
    } catch (e) {
      return x;
    }
    return t;
  }, "assign");
  mt.localStorage.set = cc11001100_hook("mt.localStorage.set", function (e, a, b) {
    var k = cc11001100_hook("k", new Date(), "var-init");
    k.setTime(k.getTime() + (b || 31536E6));
    try {
      window.localStorage ? (a = cc11001100_hook("a", k.getTime() + "|" + a, "assign"), window.localStorage.setItem(e, a)) : mt.localStorage.Q() && (mt.localStorage.g.expires = cc11001100_hook("mt.localStorage.g.expires", k.toUTCString(), "assign"), mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.setAttribute(e, a), mt.localStorage.g.save(document.location.hostname));
    } catch (d) {}
  }, "assign");
  mt.localStorage.get = cc11001100_hook("mt.localStorage.get", function (e) {
    if (window.localStorage) {
      if (e = cc11001100_hook("e", window.localStorage.getItem(e), "assign")) {
        var a = cc11001100_hook("a", e.indexOf("|"), "var-init"),
          b = cc11001100_hook("b", e.substring(0, a) - 0, "var-init");
        if (b && b > new Date().getTime()) return e.substring(a + 1);
      }
    } else if (mt.localStorage.Q()) try {
      return mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.getAttribute(e);
    } catch (k) {}
    return u;
  }, "assign");
  mt.localStorage.remove = cc11001100_hook("mt.localStorage.remove", function (e) {
    if (window.localStorage) window.localStorage.removeItem(e);else if (mt.localStorage.Q()) try {
      mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.removeAttribute(e), mt.localStorage.g.save(document.location.hostname);
    } catch (a) {}
  }, "assign");
  mt.sessionStorage = cc11001100_hook("mt.sessionStorage", {}, "assign");
  mt.sessionStorage.set = cc11001100_hook("mt.sessionStorage.set", function (e, a) {
    try {
      window.sessionStorage && window.sessionStorage.setItem(e, a);
    } catch (b) {}
  }, "assign");
  mt.sessionStorage.get = cc11001100_hook("mt.sessionStorage.get", function (e) {
    try {
      return window.sessionStorage ? window.sessionStorage.getItem(e) : u;
    } catch (a) {
      return u;
    }
  }, "assign");
  mt.sessionStorage.remove = cc11001100_hook("mt.sessionStorage.remove", function (e) {
    try {
      window.sessionStorage && window.sessionStorage.removeItem(e);
    } catch (a) {}
  }, "assign");
  (function () {
    var e = cc11001100_hook("e", mt.w, "var-init");
    mt.A = cc11001100_hook("mt.A", {}, "assign");
    mt.A.log = cc11001100_hook("mt.A.log", function (a, b) {
      var e = cc11001100_hook("e", new Image(), "var-init"),
        d = cc11001100_hook("d", "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36), "var-init");
      window[d] = cc11001100_hook("window[d]", e, "assign");
      e.onload = cc11001100_hook("e.onload", function () {
        e.onload = cc11001100_hook("e.onload", u, "assign");
        e = cc11001100_hook("e", window[d] = cc11001100_hook("window[d]", u, "assign"), "assign");
        b && b(a);
      }, "assign");
      e.src = cc11001100_hook("e.src", a, "assign");
    }, "assign");
    mt.A.get = cc11001100_hook("mt.A.get", function (a, b) {
      return mt.A.wa({
        url: cc11001100_hook("url", a, "object-key-init"),
        method: cc11001100_hook("method", "GET", "object-key-init"),
        data: cc11001100_hook("data", b.data, "object-key-init"),
        timeout: cc11001100_hook("timeout", b.timeout, "object-key-init"),
        noCache: cc11001100_hook("noCache", t, "object-key-init"),
        success: cc11001100_hook("success", b.success, "object-key-init"),
        fail: cc11001100_hook("fail", b.fail, "object-key-init")
      });
    }, "assign");
    mt.A.wa = cc11001100_hook("mt.A.wa", function (a) {
      function b(a) {
        cc11001100_hook("a", a, "function-parameter");
        var b = cc11001100_hook("b", [], "var-init"),
          d;
        for (d in a) a.hasOwnProperty(d) && b.push(encodeURIComponent(d) + "=" + encodeURIComponent(a[d]));
        return b.join("&");
      }
      function k(b) {
        cc11001100_hook("b", b, "function-parameter");
        var d = cc11001100_hook("d", a[b], "var-init");
        if (d) if (q && clearTimeout(q), "success" !== b) d && d(m);else {
          var f;
          try {
            f = cc11001100_hook("f", e.parse(m.responseText), "assign");
          } catch (g) {
            d && d(m);
            return;
          }
          d && d(m, f);
        }
      }
      a = cc11001100_hook("a", a || {}, "assign");
      var d = cc11001100_hook("d", a.data, "var-init");
      "object" === typeof d && (d = cc11001100_hook("d", b(a.data || {}), "assign"));
      var f = cc11001100_hook("f", a.url, "var-init"),
        g = cc11001100_hook("g", (a.method || "GET").toUpperCase(), "var-init"),
        l = cc11001100_hook("l", a.headers || {}, "var-init"),
        r = cc11001100_hook("r", a.timeout || 0, "var-init"),
        p = cc11001100_hook("p", a.noCache || x, "var-init"),
        n = cc11001100_hook("n", a.withCredentials || x, "var-init"),
        m,
        q;
      try {
        a: if (window.XMLHttpRequest) m = cc11001100_hook("m", new XMLHttpRequest(), "assign");else {
          try {
            m = cc11001100_hook("m", new ActiveXObject("Microsoft.XMLHTTP"), "assign");
            break a;
          } catch (v) {}
          m = cc11001100_hook("m", s, "assign");
        }
        "GET" === g && (d && (f += cc11001100_hook("f", (0 <= f.indexOf("?") ? "&" : "?") + d, "assign"), d = cc11001100_hook("d", u, "assign")), p && (f += cc11001100_hook("f", (0 <= f.indexOf("?") ? "&" : "?") + "b" + +new Date() + "=1", "assign")));
        m.open(g, f, t);
        m.onreadystatechange = cc11001100_hook("m.onreadystatechange", function () {
          if (4 === m.readyState) {
            var a = cc11001100_hook("a", 0, "var-init");
            try {
              a = cc11001100_hook("a", m.status, "assign");
            } catch (b) {
              k("fail");
              return;
            }
            200 <= a && 300 > a || 304 === a || 1223 === a ? k("success") : k("fail");
          }
        }, "assign");
        for (var w in l) l.hasOwnProperty(w) && m.setRequestHeader(w, l[w]);
        n && (m.withCredentials = cc11001100_hook("m.withCredentials", t, "assign"));
        r && (q = cc11001100_hook("q", setTimeout(function () {
          m.onreadystatechange = cc11001100_hook("m.onreadystatechange", function () {}, "assign");
          m.abort();
          k("fail");
        }, r), "assign"));
        m.send(d);
      } catch (A) {
        k("fail");
      }
      return m;
    }, "assign");
    return mt.A;
  })();
  h.o = cc11001100_hook("h.o", {
    kb: cc11001100_hook("kb", "http://tongji.baidu.com/hm-web/welcome/ico", "object-key-init"),
    aa: cc11001100_hook("aa", "hm.baidu.com/hm.gif", "object-key-init"),
    xa: cc11001100_hook("xa", /^(tongji|hmcdn).baidu.com$/, "object-key-init"),
    Gb: cc11001100_hook("Gb", "tongji.baidu.com", "object-key-init"),
    hb: cc11001100_hook("hb", "hmmd", "object-key-init"),
    ib: cc11001100_hook("ib", "hmpl", "object-key-init"),
    Jb: cc11001100_hook("Jb", "utm_medium", "object-key-init"),
    gb: cc11001100_hook("gb", "hmkw", "object-key-init"),
    Lb: cc11001100_hook("Lb", "utm_term", "object-key-init"),
    eb: cc11001100_hook("eb", "hmci", "object-key-init"),
    Ib: cc11001100_hook("Ib", "utm_content", "object-key-init"),
    jb: cc11001100_hook("jb", "hmsr", "object-key-init"),
    Kb: cc11001100_hook("Kb", "utm_source", "object-key-init"),
    fb: cc11001100_hook("fb", "hmcu", "object-key-init"),
    Hb: cc11001100_hook("Hb", "utm_campaign", "object-key-init"),
    ka: cc11001100_hook("ka", 0, "object-key-init"),
    B: cc11001100_hook("B", Math.round(+new Date() / 1E3), "object-key-init"),
    protocol: cc11001100_hook("protocol", "https:" === document.location.protocol ? "https:" : "http:", "object-key-init"),
    L: cc11001100_hook("L", "https:", "object-key-init"),
    Da: cc11001100_hook("Da", 6E5, "object-key-init"),
    bc: cc11001100_hook("bc", 5E3, "object-key-init"),
    Ea: cc11001100_hook("Ea", 5, "object-key-init"),
    ca: cc11001100_hook("ca", 1024, "object-key-init"),
    G: cc11001100_hook("G", 2147483647, "object-key-init"),
    ra: cc11001100_hook("ra", "hca cc cf ci ck cl cm cp cu cw ds vl ep et ja ln lo lt rnd si su v cv lv api sn r ww p u tt".split(" "), "object-key-init"),
    ga: cc11001100_hook("ga", t, "object-key-init"),
    Pb: {
      id: cc11001100_hook("id", "data-hm-id", "object-key-init"),
      Tb: cc11001100_hook("Tb", "data-hm-class", "object-key-init"),
      jc: cc11001100_hook("jc", "data-hm-xpath", "object-key-init"),
      content: cc11001100_hook("content", "data-hm-content", "object-key-init"),
      hc: cc11001100_hook("hc", "data-hm-tag", "object-key-init"),
      link: cc11001100_hook("link", "data-hm-link", "object-key-init")
    },
    Rb: cc11001100_hook("Rb", "data-hm-enabled", "object-key-init"),
    Qb: cc11001100_hook("Qb", "data-hm-disabled", "object-key-init"),
    xb: cc11001100_hook("xb", "https://hmcdn.baidu.com/static/tongji/plugins/", "object-key-init"),
    na: cc11001100_hook("na", ["UrlChangeTracker"], "object-key-init"),
    Nb: {
      $b: cc11001100_hook("$b", 0, "object-key-init"),
      ic: cc11001100_hook("ic", 1, "object-key-init"),
      Xb: cc11001100_hook("Xb", 2, "object-key-init")
    },
    Yb: cc11001100_hook("Yb", "https://fclog.baidu.com/log/ocpcagl?type=behavior&emd=euc", "object-key-init")
  }, "assign");
  (function () {
    var e = cc11001100_hook("e", {
      t: {},
      c: function (a, b) {
        this.t[a] = cc11001100_hook("this.t[a]", this.t[a] || [], "assign");
        this.t[a].push(b);
      },
      k: function (a, b) {
        this.t[a] = cc11001100_hook("this.t[a]", this.t[a] || [], "assign");
        for (var e = cc11001100_hook("e", this.t[a].length, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < e; d++) this.t[a][d](b);
      }
    }, "var-init");
    return h.s = cc11001100_hook("h.s", e, "assign");
  })();
  (function () {
    var e = cc11001100_hook("e", mt.lang, "var-init"),
      a = cc11001100_hook("a", /^https?:\/\//, "var-init"),
      b = cc11001100_hook("b", {
        Oa: function (a) {
          var b;
          try {
            b = cc11001100_hook("b", JSON.parse(decodeURIComponent(a[0])), "assign");
          } catch (f) {}
          return b;
        },
        la: function (a, d) {
          return b.ma(h.b && h.b.a && h.b.a.u, a, d) || b.ma(document.location.href, a, d);
        },
        ma: function (b, d, f) {
          if (b === s) return x;
          a.test(d) || (b = cc11001100_hook("b", b.replace(a, ""), "assign"));
          d = cc11001100_hook("d", d.replace(/\/$/, ""), "assign");
          b = cc11001100_hook("b", b.replace(/\/$/, ""), "assign");
          f && (b = cc11001100_hook("b", b.replace(/^(https?:\/\/)?www\./, "$1"), "assign"));
          return RegExp("^" + d.replace(/[?.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(b);
        },
        H: function (a, d) {
          var f = cc11001100_hook("f", b.Oa(a), "var-init");
          if (!e.i(f, "Undefined")) {
            if (e.isArray(f)) {
              for (var g = cc11001100_hook("g", 0, "var-init"); g < f.length; g++) if (b.la(f[g], d)) return t;
              return x;
            }
            if (e.J(f)) {
              var g = cc11001100_hook("g", [], "var-init"),
                l;
              for (l in f) f.hasOwnProperty(l) && b.la(l, d) && (g = cc11001100_hook("g", g.concat(f[l]), "assign"));
              return g;
            }
          }
        }
      }, "var-init");
    return h.S = cc11001100_hook("h.S", b, "assign");
  })();
  (function () {
    function e(b, e) {
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var d = cc11001100_hook("d", document.createElement("script"), "var-init");
      d.charset = cc11001100_hook("d.charset", "utf-8", "assign");
      a.j(e) && (d.readyState ? d.onreadystatechange = cc11001100_hook("d.onreadystatechange", function () {
        if ("loaded" === d.readyState || "complete" === d.readyState) d.onreadystatechange = cc11001100_hook("d.onreadystatechange", u, "assign"), e();
      }, "assign") : d.onload = cc11001100_hook("d.onload", function () {
        e();
      }, "assign"));
      d.src = cc11001100_hook("d.src", b, "assign");
      var f = cc11001100_hook("f", document.getElementsByTagName("script")[0], "var-init");
      f.parentNode.insertBefore(d, f);
    }
    var a = cc11001100_hook("a", mt.lang, "var-init");
    return h.load = cc11001100_hook("h.load", e, "assign");
  })();
  (function () {
    var e = cc11001100_hook("e", h.o, "var-init"),
      a = cc11001100_hook("a", {
        D: function () {
          if ("" !== c.icon) {
            var a = cc11001100_hook("a", c.icon.split("|"), "var-init"),
              k = cc11001100_hook("k", e.kb + "?s=" + c.id, "var-init"),
              d = cc11001100_hook("d", "https://hmcdn.baidu.com/static" + a[0] + ".gif", "var-init");
            document.write("swf" === a[1] || "gif" === a[1] ? '<a href="' + k + '" target="_blank"><img border="0" src="' + d + '" width="' + a[2] + '" height="' + a[3] + '"></a>' : '<a href="' + k + '" target="_blank">' + a[0] + "</a>");
          }
        }
      }, "var-init");
    h.s.c("pv-b", a.D);
    return a;
  })();
  (function () {
    var e = cc11001100_hook("e", mt.url, "var-init"),
      a = cc11001100_hook("a", mt.cookie, "var-init"),
      b = cc11001100_hook("b", mt.localStorage, "var-init"),
      k = cc11001100_hook("k", mt.sessionStorage, "var-init"),
      d = cc11001100_hook("d", {
        getData: function (d) {
          try {
            return a.get(d) || k.get(d) || b.get(d);
          } catch (e) {}
        },
        setData: function (f, e, l) {
          try {
            a.set(f, e, {
              domain: cc11001100_hook("domain", d.I(), "object-key-init"),
              path: cc11001100_hook("path", d.U(), "object-key-init"),
              C: cc11001100_hook("C", l, "object-key-init")
            }), l ? b.set(f, e, l) : k.set(f, e);
          } catch (r) {}
        },
        removeData: function (e) {
          try {
            a.set(e, "", {
              domain: cc11001100_hook("domain", d.I(), "object-key-init"),
              path: cc11001100_hook("path", d.U(), "object-key-init"),
              C: cc11001100_hook("C", -1, "object-key-init")
            }), k.remove(e), b.remove(e);
          } catch (g) {}
        },
        I: function () {
          for (var a = cc11001100_hook("a", document.location.hostname, "var-init"), b = cc11001100_hook("b", 0, "var-init"), d = cc11001100_hook("d", c.dm.length, "var-init"); b < d; b++) if (e.qb(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
          return a;
        },
        U: function () {
          for (var a = cc11001100_hook("a", 0, "var-init"), b = cc11001100_hook("b", c.dm.length, "var-init"); a < b; a++) {
            var d = cc11001100_hook("d", c.dm[a], "var-init");
            if (-1 < d.indexOf("/") && e.pb(d)) return d.replace(/^[^/]+(\/.*)/, "$1") + "/";
          }
          return "/";
        }
      }, "var-init");
    return h.R = cc11001100_hook("h.R", d, "assign");
  })();
  (function () {
    var e = cc11001100_hook("e", mt.lang, "var-init"),
      a = cc11001100_hook("a", mt.d, "var-init"),
      b = cc11001100_hook("b", h.S, "var-init"),
      k = cc11001100_hook("k", {
        Ha: function (d, e) {
          return function (g) {
            var l = cc11001100_hook("l", g.target || g.srcElement, "var-init");
            if (l) {
              var r = cc11001100_hook("r", b.H(e) || [], "var-init"),
                p = cc11001100_hook("p", l.getAttribute(d.P), "var-init");
              g = cc11001100_hook("g", g.clientX + ":" + g.clientY, "assign");
              if (p && p === g) l.removeAttribute(d.P);else if (0 < r.length && (l = cc11001100_hook("l", a.Wa(l), "assign")) && l.length) if (r = cc11001100_hook("r", l.length, "assign"), p = cc11001100_hook("p", l[l.length - 1], "assign"), 1E4 > r * p.split(">").length) for (p = cc11001100_hook("p", 0, "assign"); p < r; p++) k.qa(d, l[p]);else k.qa(d, p);
            }
          };
        },
        qa: function (a, b) {
          for (var g = cc11001100_hook("g", {}, "var-init"), l = cc11001100_hook("l", String(b).split(">").length, "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < l; k++) g[b] = cc11001100_hook("g[b]", "", "assign"), /\[1\]$/.test(b) && (g[b.substring(0, b.lastIndexOf("["))] = cc11001100_hook("g[b.substring(0, b.lastIndexOf(\"[\"))]", "", "assign")), /\]$/.test(b) || (g[b + "[1]"] = cc11001100_hook("g[b + \"[1]\"]", "", "assign")), b = cc11001100_hook("b", b.substring(0, b.lastIndexOf(">")), "assign");
          a && e.J(a) && a.ba && a.ba(g);
        },
        zb: function (a, b) {
          return function (e) {
            (e.target || e.srcElement).setAttribute(a.P, e.clientX + ":" + e.clientY);
            a && a.N && (b ? a.N(b) : a.N("#" + encodeURIComponent(this.id), e.type));
          };
        }
      }, "var-init");
    return h.Ia = cc11001100_hook("h.Ia", k, "assign");
  })();
  (function () {
    var e = cc11001100_hook("e", mt.d, "var-init"),
      a = cc11001100_hook("a", mt.event, "var-init"),
      b = cc11001100_hook("b", h.S, "var-init"),
      k = cc11001100_hook("k", h.Ia, "var-init"),
      d = cc11001100_hook("d", {
        P: cc11001100_hook("P", "HM_fix", "object-key-init"),
        ua: function () {
          a.c(document, "click", k.Ha(d, c.etrk), t);
          if (!document.addEventListener) for (var f = cc11001100_hook("f", b.H(c.etrk) || [], "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < f.length; g++) {
            var l = cc11001100_hook("l", f[g], "var-init");
            -1 === l.indexOf(">") && (0 === l.indexOf("#") && (l = cc11001100_hook("l", l.substring(1), "assign")), (l = cc11001100_hook("l", e.La(l), "assign")) && a.c(l, "click", k.zb(d), t));
          }
        },
        ba: function (a) {
          for (var e = cc11001100_hook("e", b.H(c.etrk) || [], "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < e.length; k++) {
            var r = cc11001100_hook("r", e[k], "var-init");
            a.hasOwnProperty(r) && d.N(r);
          }
        },
        N: function (a, b) {
          h.b.a.et = cc11001100_hook("h.b.a.et", 1, "assign");
          h.b.a.ep = cc11001100_hook("h.b.a.ep", "{id:" + a + ",eventType:" + (b || "click") + "}", "assign");
          h.b.m();
        }
      }, "var-init");
    h.s.c("pv-b", d.ua);
    return d;
  })();
  (function () {
    var e = cc11001100_hook("e", mt.d, "var-init"),
      a = cc11001100_hook("a", mt.lang, "var-init"),
      b = cc11001100_hook("b", mt.event, "var-init"),
      k = cc11001100_hook("k", mt.e, "var-init"),
      d = cc11001100_hook("d", h.o, "var-init"),
      f = cc11001100_hook("f", h.S, "var-init"),
      g = cc11001100_hook("g", [], "var-init"),
      l = cc11001100_hook("l", {
        ta: function () {
          c.ctrk && 0 < c.ctrk.length && (b.c(document, "mouseup", l.Ca()), b.c(window, "unload", function () {
            l.M();
          }), setInterval(function () {
            l.M();
          }, d.Da));
        },
        Ca: function () {
          return function (a) {
            if (f.H(c.ctrk, t) && (a = cc11001100_hook("a", l.Na(a), "assign"), "" !== a)) {
              var b = cc11001100_hook("b", (d.L + "//" + d.aa + "?" + h.b.pa().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length, "var-init");
              b + (d.G + "").length > d.ca || (b + encodeURIComponent(g.join("!") + (g.length ? "!" : "")).length + (d.G + "").length > d.ca && l.M(), g.push(a), (g.length >= d.Ea || /\*a\*/.test(a)) && l.M());
            }
          };
        },
        Na: function (b) {
          var d = cc11001100_hook("d", b.target || b.srcElement, "var-init"),
            f,
            m;
          k.mb ? (m = cc11001100_hook("m", Math.max(document.documentElement.scrollTop, document.body.scrollTop), "assign"), f = cc11001100_hook("f", Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), "assign"), f = cc11001100_hook("f", b.clientX + f, "assign"), m = cc11001100_hook("m", b.clientY + m, "assign")) : (f = cc11001100_hook("f", b.pageX, "assign"), m = cc11001100_hook("m", b.pageY, "assign"));
          b = cc11001100_hook("b", l.Ta(b, d, f, m), "assign");
          var q = cc11001100_hook("q", window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth, "var-init");
          switch (c.align) {
            case 1:
              f -= cc11001100_hook("f", q / 2, "assign");
              break;
            case 2:
              f -= cc11001100_hook("f", q, "assign");
          }
          q = cc11001100_hook("q", [], "assign");
          q.push(f);
          q.push(m);
          q.push(b.ub);
          q.push(b.vb);
          q.push(b.yb);
          q.push(a.n(b.wb));
          q.push(b.Mb);
          q.push(b.cb);
          (d = cc11001100_hook("d", "a" === (d.tagName || "").toLowerCase() ? d : e.Ma(d), "assign")) ? (q.push("a"), q.push(a.n(encodeURIComponent(d.href)))) : q.push("b");
          return q.join("*");
        },
        Ta: function (b, d, f, m) {
          b = cc11001100_hook("b", e.Xa(d), "assign");
          var q = cc11001100_hook("q", 0, "var-init"),
            g = cc11001100_hook("g", 0, "var-init"),
            w = cc11001100_hook("w", 0, "var-init"),
            l = cc11001100_hook("l", 0, "var-init");
          if (d && (q = cc11001100_hook("q", d.offsetWidth || d.clientWidth, "assign"), g = cc11001100_hook("g", d.offsetHeight || d.clientHeight, "assign"), l = cc11001100_hook("l", e.Ua(d), "assign"), w = cc11001100_hook("w", l.left, "assign"), l = cc11001100_hook("l", l.top, "assign"), a.j(d.getBBox) && (g = cc11001100_hook("g", d.getBBox(), "assign"), q = cc11001100_hook("q", g.width, "assign"), g = cc11001100_hook("g", g.height, "assign")), "html" === (d.tagName || "").toLowerCase())) q = cc11001100_hook("q", Math.max(q, d.clientWidth), "assign"), g = cc11001100_hook("g", Math.max(g, d.clientHeight), "assign");
          return {
            ub: cc11001100_hook("ub", Math.round(100 * ((f - w) / q)), "object-key-init"),
            vb: cc11001100_hook("vb", Math.round(100 * ((m - l) / g)), "object-key-init"),
            yb: cc11001100_hook("yb", k.orientation, "object-key-init"),
            wb: cc11001100_hook("wb", b, "object-key-init"),
            Mb: cc11001100_hook("Mb", q, "object-key-init"),
            cb: cc11001100_hook("cb", g, "object-key-init")
          };
        },
        M: function () {
          0 !== g.length && (h.b.a.et = cc11001100_hook("h.b.a.et", 2, "assign"), h.b.a.ep = cc11001100_hook("h.b.a.ep", g.join("!"), "assign"), h.b.m(), g = cc11001100_hook("g", [], "assign"));
        }
      }, "var-init");
    h.s.c("pv-b", l.ta);
    return l;
  })();
  (function () {
    function e() {
      return function () {
        h.b.a.et = cc11001100_hook("h.b.a.et", 3, "assign");
        h.b.a.ep = cc11001100_hook("h.b.a.ep", h.T.Va() + "," + h.T.Ra(), "assign");
        h.b.a.hca = cc11001100_hook("h.b.a.hca", c.hca, "assign");
        h.b.m();
      };
    }
    function a() {
      clearTimeout(C);
      var b;
      w && (b = cc11001100_hook("b", "visible" == document[w], "assign"));
      A && (b = cc11001100_hook("b", !document[A], "assign"));
      l = cc11001100_hook("l", "undefined" == typeof b ? t : b, "assign");
      if ((!g || !r) && l && p) v = cc11001100_hook("v", t, "assign"), m = cc11001100_hook("m", +new Date(), "assign");else if (g && r && (!l || !p)) v = cc11001100_hook("v", x, "assign"), q += cc11001100_hook("q", +new Date() - m, "assign");
      g = cc11001100_hook("g", l, "assign");
      r = cc11001100_hook("r", p, "assign");
      C = cc11001100_hook("C", setTimeout(a, 100), "assign");
    }
    function b(b) {
      cc11001100_hook("b", b, "function-parameter");
      var a = cc11001100_hook("a", document, "var-init"),
        d = cc11001100_hook("d", "", "var-init");
      if (b in a) d = cc11001100_hook("d", b, "assign");else for (var m = cc11001100_hook("m", ["webkit", "ms", "moz", "o"], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < m.length; e++) {
        var f = cc11001100_hook("f", m[e] + b.charAt(0).toUpperCase() + b.slice(1), "var-init");
        if (f in a) {
          d = cc11001100_hook("d", f, "assign");
          break;
        }
      }
      return d;
    }
    function k(b) {
      cc11001100_hook("b", b, "function-parameter");
      if (!("focus" == b.type || "blur" == b.type) || !(b.target && b.target != window)) p = cc11001100_hook("p", "focus" == b.type || "focusin" == b.type ? t : x, "assign"), a();
    }
    var d = cc11001100_hook("d", mt.event, "var-init"),
      f = cc11001100_hook("f", h.s, "var-init"),
      g = cc11001100_hook("g", t, "var-init"),
      l = cc11001100_hook("l", t, "var-init"),
      r = cc11001100_hook("r", t, "var-init"),
      p = cc11001100_hook("p", t, "var-init"),
      n = cc11001100_hook("n", +new Date(), "var-init"),
      m = cc11001100_hook("m", n, "var-init"),
      q = cc11001100_hook("q", 0, "var-init"),
      v = cc11001100_hook("v", t, "var-init"),
      w = cc11001100_hook("w", b("visibilityState"), "var-init"),
      A = cc11001100_hook("A", b("hidden"), "var-init"),
      C;
    a();
    (function () {
      var b = cc11001100_hook("b", w.replace(/[vV]isibilityState/, "visibilitychange"), "var-init");
      d.c(document, b, a);
      d.c(window, "pageshow", a);
      d.c(window, "pagehide", a);
      "object" == typeof document.onfocusin ? (d.c(document, "focusin", k), d.c(document, "focusout", k)) : (d.c(window, "focus", k), d.c(window, "blur", k));
    })();
    h.T = cc11001100_hook("h.T", {
      Va: function () {
        return +new Date() - n;
      },
      Ra: function () {
        return v ? +new Date() - m + q : q;
      }
    }, "assign");
    f.c("pv-b", function () {
      d.c(window, "unload", e());
    });
    f.c("duration-send", e());
    f.c("duration-done", function () {
      m = cc11001100_hook("m", n = cc11001100_hook("n", +new Date(), "assign"), "assign");
      q = cc11001100_hook("q", 0, "assign");
    });
    return h.T;
  })();
  (function () {
    var e = cc11001100_hook("e", mt.lang, "var-init"),
      a = cc11001100_hook("a", h.o, "var-init"),
      b = cc11001100_hook("b", h.load, "var-init"),
      k = cc11001100_hook("k", h.R, "var-init"),
      d = cc11001100_hook("d", {
        lb: function (d) {
          if ((window._dxt === s || e.i(window._dxt, "Array")) && "undefined" !== typeof h.b) {
            var g = cc11001100_hook("g", k.I(), "var-init");
            b([a.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(g)].join(""), d);
          }
        },
        Fb: function (b) {
          if (e.i(b, "String") || e.i(b, "Number")) window._dxt = cc11001100_hook("window._dxt", window._dxt || [], "assign"), window._dxt.push(["_setUserId", b]);
        }
      }, "var-init");
    return h.Fa = cc11001100_hook("h.Fa", d, "assign");
  })();
  (function () {
    function e(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var d in a) if ({}.hasOwnProperty.call(a, d)) {
        var f = cc11001100_hook("f", a[d], "var-init");
        b.J(f) || b.isArray(f) ? e(f) : a[d] = cc11001100_hook("a[d]", String(f), "assign");
      }
    }
    var a = cc11001100_hook("a", mt.url, "var-init"),
      b = cc11001100_hook("b", mt.lang, "var-init"),
      k = cc11001100_hook("k", mt.w, "var-init"),
      d = cc11001100_hook("d", mt.e, "var-init"),
      f = cc11001100_hook("f", h.o, "var-init"),
      g = cc11001100_hook("g", h.s, "var-init"),
      l = cc11001100_hook("l", h.Fa, "var-init"),
      r = cc11001100_hook("r", h.load, "var-init"),
      p = cc11001100_hook("p", h.R, "var-init"),
      n = cc11001100_hook("n", {
        F: cc11001100_hook("F", [], "object-key-init"),
        O: cc11001100_hook("O", 0, "object-key-init"),
        Y: cc11001100_hook("Y", x, "object-key-init"),
        D: function () {
          n.h = cc11001100_hook("n.h", 0, "assign");
          g.c("pv-b", function () {
            n.Ga();
            n.Ja();
          });
          g.c("pv-d", function () {
            n.Ka();
          });
          g.c("stag-b", function () {
            h.b.a.api = cc11001100_hook("h.b.a.api", n.h || n.O ? n.h + "_" + n.O : "", "assign");
          });
          g.c("stag-d", function () {
            h.b.a.api = cc11001100_hook("h.b.a.api", 0, "assign");
            n.h = cc11001100_hook("n.h", 0, "assign");
            n.O = cc11001100_hook("n.O", 0, "assign");
          });
        },
        Ga: function () {
          var a = cc11001100_hook("a", window._hmt || [], "var-init");
          if (!a || b.i(a, "Array")) window._hmt = cc11001100_hook("window._hmt", {
            id: cc11001100_hook("id", c.id, "object-key-init"),
            cmd: {},
            push: function () {
              for (var a = cc11001100_hook("a", window._hmt, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < arguments.length; d++) {
                var e = cc11001100_hook("e", arguments[d], "var-init");
                b.i(e, "Array") && (a.cmd[a.id].push(e), "_setAccount" === e[0] && 1 < e.length && /^[0-9a-f]{31,32}$/.test(e[1]) && (e = cc11001100_hook("e", e[1], "assign"), a.id = cc11001100_hook("a.id", e, "assign"), a.cmd[e] = cc11001100_hook("a.cmd[e]", a.cmd[e] || [], "assign")));
              }
            }
          }, "assign"), window._hmt.cmd[c.id] = cc11001100_hook("window._hmt.cmd[c.id]", [], "assign"), window._hmt.push.apply(window._hmt, a);
        },
        Ja: function () {
          var b = cc11001100_hook("b", window._hmt, "var-init");
          if (b && b.cmd && b.cmd[c.id]) for (var a = cc11001100_hook("a", b.cmd[c.id], "var-init"), d = cc11001100_hook("d", /^_track(Event|Order)$/, "var-init"), e = cc11001100_hook("e", 0, "var-init"), f = cc11001100_hook("f", a.length, "var-init"); e < f; e++) {
            var g = cc11001100_hook("g", a[e], "var-init");
            d.test(g[0]) ? n.F.push(g) : n.$(g);
          }
          b.cmd[c.id] = cc11001100_hook("b.cmd[c.id]", {
            push: cc11001100_hook("push", n.$, "object-key-init")
          }, "assign");
        },
        Ka: function () {
          if (0 < n.F.length) for (var b = cc11001100_hook("b", 0, "var-init"), a = cc11001100_hook("a", n.F.length, "var-init"); b < a; b++) n.$(n.F[b]);
          n.F = cc11001100_hook("n.F", u, "assign");
        },
        $: function (a) {
          var d = cc11001100_hook("d", a[0], "var-init");
          if (n.hasOwnProperty(d) && b.j(n[d])) n[d](a);
        },
        _setAccount: function (b) {
          1 < b.length && /^[0-9a-f]{31,32}$/.test(b[1]) && (n.h |= cc11001100_hook("n.h", 1, "assign"));
        },
        _setAutoPageview: function (b) {
          if (1 < b.length && (b = cc11001100_hook("b", b[1], "assign"), x === b || t === b)) n.h |= cc11001100_hook("n.h", 2, "assign"), h.b.ha = cc11001100_hook("h.b.ha", b, "assign");
        },
        _trackPageview: function (b) {
          1 < b.length && b[1].charAt && "/" === b[1].charAt(0) && (n.h |= cc11001100_hook("n.h", 4, "assign"), h.b.a.sn = cc11001100_hook("h.b.a.sn", h.b.ea(), "assign"), h.b.a.et = cc11001100_hook("h.b.a.et", 0, "assign"), h.b.a.ep = cc11001100_hook("h.b.a.ep", "", "assign"), h.b.a.vl = cc11001100_hook("h.b.a.vl", d.W(), "assign"), n.Y || (h.b.a.su = cc11001100_hook("h.b.a.su", h.b.a.u || document.location.href, "assign")), h.b.a.u = cc11001100_hook("h.b.a.u", f.protocol + "//" + document.location.host + b[1], "assign"), h.b.m(), h.b.sb = cc11001100_hook("h.b.sb", +new Date(), "assign"));
        },
        _trackEvent: function (a) {
          2 < a.length && (n.h |= cc11001100_hook("n.h", 8, "assign"), h.b.a.et = cc11001100_hook("h.b.a.et", 4, "assign"), h.b.a.ep = cc11001100_hook("h.b.a.ep", b.n(a[1]) + "*" + b.n(a[2]) + (a[3] ? "*" + b.n(a[3]) : "") + (a[4] ? "*" + b.n(a[4]) : ""), "assign"), h.b.m());
        },
        _setCustomVar: function (a) {
          if (!(4 > a.length)) {
            var d = cc11001100_hook("d", a[1], "var-init"),
              e = cc11001100_hook("e", a[4] || 3, "var-init");
            if (0 < d && 6 > d && 0 < e && 4 > e) {
              n.O++;
              for (var f = cc11001100_hook("f", (h.b.a.cv || "*").split("!"), "var-init"), g = cc11001100_hook("g", f.length, "var-init"); g < d - 1; g++) f.push("*");
              f[d - 1] = cc11001100_hook("f[d - 1]", e + "*" + b.n(a[2]) + "*" + b.n(a[3]), "assign");
              h.b.a.cv = cc11001100_hook("h.b.a.cv", f.join("!"), "assign");
              a = cc11001100_hook("a", h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, ""), "assign");
              "" !== a ? p.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : p.removeData("Hm_cv_" + c.id);
            }
          }
        },
        _setReferrerOverride: function (a) {
          1 < a.length && (a = cc11001100_hook("a", a[1], "assign"), b.i(a, "String") ? (h.b.a.su = cc11001100_hook("h.b.a.su", "/" === a.charAt(0) ? f.protocol + "//" + window.location.host + a : a, "assign"), n.Y = cc11001100_hook("n.Y", t, "assign")) : n.Y = cc11001100_hook("n.Y", x, "assign"));
        },
        _trackOrder: function (a) {
          a = cc11001100_hook("a", a[1], "assign");
          b.J(a) && (e(a), n.h |= cc11001100_hook("n.h", 16, "assign"), h.b.a.et = cc11001100_hook("h.b.a.et", 94, "assign"), h.b.a.ep = cc11001100_hook("h.b.a.ep", k.stringify(a), "assign"), h.b.m());
        },
        _setDataxId: function (a) {
          a = cc11001100_hook("a", a[1], "assign");
          l.lb();
          l.Fb(a);
        },
        _setAutoTracking: function (a) {
          if (1 < a.length && (a = cc11001100_hook("a", a[1], "assign"), x === a || t === a)) h.b.ia = cc11001100_hook("h.b.ia", a, "assign");
        },
        _trackPageDuration: function (a) {
          1 < a.length ? (a = cc11001100_hook("a", a[1], "assign"), 2 === String(a).split(",").length && (h.b.a.et = cc11001100_hook("h.b.a.et", 3, "assign"), h.b.a.ep = cc11001100_hook("h.b.a.ep", a, "assign"), h.b.m())) : g.k("duration-send");
          g.k("duration-done");
        },
        _require: function (b) {
          1 < b.length && (b = cc11001100_hook("b", b[1], "assign"), f.xa.test(a.V(b)) && r(b));
        },
        _providePlugin: function (a) {
          if (1 < a.length) {
            var d = cc11001100_hook("d", window._hmt, "var-init"),
              e = cc11001100_hook("e", a[1], "var-init");
            a = cc11001100_hook("a", a[2], "assign");
            if (b.X(f.na, e) && b.j(a) && (d.plugins = cc11001100_hook("d.plugins", d.plugins || {}, "assign"), d.z = cc11001100_hook("d.z", d.z || {}, "assign"), d.plugins[e] = cc11001100_hook("d.plugins[e]", a, "assign"), d.l = cc11001100_hook("d.l", d.l || [], "assign"), a = cc11001100_hook("a", d.l.slice(), "assign"), e && a.length && a[0][1] === e)) for (var g = cc11001100_hook("g", 0, "var-init"), k = cc11001100_hook("k", a.length, "var-init"); g < k; g++) {
              var l = cc11001100_hook("l", a[g][2] || {}, "var-init");
              if (d.plugins[e] && !d.z[e]) d.z[e] = cc11001100_hook("d.z[e]", new d.plugins[e](l), "assign"), d.l.shift();else break;
            }
          }
        },
        _requirePlugin: function (a) {
          if (1 < a.length) {
            var d = cc11001100_hook("d", window._hmt, "var-init"),
              e = cc11001100_hook("e", a[1], "var-init"),
              g = cc11001100_hook("g", a[2] || {}, "var-init");
            if (b.X(f.na, e)) if (d.plugins = cc11001100_hook("d.plugins", d.plugins || {}, "assign"), d.z = cc11001100_hook("d.z", d.z || {}, "assign"), d.plugins[e] && !d.z[e]) d.z[e] = cc11001100_hook("d.z[e]", new d.plugins[e](g), "assign");else {
              d.l = cc11001100_hook("d.l", d.l || [], "assign");
              for (var g = cc11001100_hook("g", 0, "var-init"), k = cc11001100_hook("k", d.l.length, "var-init"); g < k; g++) if (d.l[g][1] === e) return;
              d.l.push(a);
              n._require([u, f.xb + e + ".js"]);
            }
          }
        }
      }, "var-init");
    n.D();
    h.ya = cc11001100_hook("h.ya", n, "assign");
    return h.ya;
  })();
  (function () {
    var e = cc11001100_hook("e", h.s, "var-init");
    c.spa !== s && "1" === String(c.spa) && (window._hmt = cc11001100_hook("window._hmt", window._hmt || [], "assign"), window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), e.c("pv-b", function () {
      "" !== window.location.hash && (h.b.a.u = cc11001100_hook("h.b.a.u", window.location.href, "assign"));
    }));
  })();
  (function () {
    function e() {
      "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = cc11001100_hook("window[\"_bdhm_loaded_\" + c.id]", t, "assign"), this.a = cc11001100_hook("this.a", {}, "assign"), this.ob = cc11001100_hook("this.ob", this.ia = cc11001100_hook("this.ia", this.ha = cc11001100_hook("this.ha", t, "assign"), "assign"), "assign"), this.ga = cc11001100_hook("this.ga", m.ga, "assign"), this.Sb = cc11001100_hook("this.Sb", k.Z(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", "assign"), this.D());
    }
    var a = cc11001100_hook("a", mt.url, "var-init"),
      b = cc11001100_hook("b", mt.A, "var-init"),
      k = cc11001100_hook("k", mt.lang, "var-init"),
      d = cc11001100_hook("d", mt.cookie, "var-init"),
      f = cc11001100_hook("f", mt.e, "var-init"),
      g = cc11001100_hook("g", mt.sessionStorage, "var-init"),
      l = cc11001100_hook("l", mt.w, "var-init"),
      r = cc11001100_hook("r", mt.event, "var-init"),
      p = cc11001100_hook("p", h.R, "var-init"),
      n = cc11001100_hook("n", mt.localStorage, "var-init"),
      m = cc11001100_hook("m", h.o, "var-init"),
      q = cc11001100_hook("q", h.load, "var-init"),
      v = cc11001100_hook("v", h.s, "var-init");
    e.prototype = cc11001100_hook("e.prototype", {
      Db: function () {
        var a, b, e, f;
        m.ka = cc11001100_hook("m.ka", p.getData("Hm_lpvt_" + c.id) || 0, "assign");
        if (f = cc11001100_hook("f", p.getData("Hm_lvt_" + c.id), "assign")) {
          for (b = cc11001100_hook("b", f.split(","), "assign"); 2592E3 < m.B - b[0];) b.shift();
          e = cc11001100_hook("e", 4 > b.length ? 2 : 3, "assign");
          for (m.B - m.ka > c.vdur && b.push(m.B); 4 < b.length;) b.shift();
          f = cc11001100_hook("f", b.join(","), "assign");
          b = cc11001100_hook("b", b[b.length - 1], "assign");
        } else f = cc11001100_hook("f", m.B, "assign"), b = cc11001100_hook("b", "", "assign"), e = cc11001100_hook("e", 1, "assign");
        this.nb() ? (p.setData("Hm_lvt_" + c.id, f, c.age), p.setData("Hm_lpvt_" + c.id, m.B), a = cc11001100_hook("a", d.rb(p.I(), p.U()), "assign")) : this.da();
        this.a.cc = cc11001100_hook("this.a.cc", a, "assign");
        this.a.lt = cc11001100_hook("this.a.lt", b, "assign");
        this.a.lv = cc11001100_hook("this.a.lv", e, "assign");
      },
      nb: function () {
        var b = cc11001100_hook("b", a.V(document.location.href), "var-init");
        return !k.X("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "), b);
      },
      Aa: function () {
        var a = cc11001100_hook("a", "Hm_clear_cookie_" + c.id, "var-init"),
          b = cc11001100_hook("b", n.get(a) || 0, "var-init");
        c.fc && Number(c.fc) > Number(b) && (this.da(), n.set(a, c.fc));
      },
      da: function () {
        for (var a = cc11001100_hook("a", document.cookie.split(";"), "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) {
          var d = cc11001100_hook("d", a[b].split("="), "var-init");
          d.length && /Hm_(up|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0])) && p.removeData(k.trim(d[0]));
          d.length && /Hm_ck_[0-9]{13}/.test(String(d[0])) && p.removeData(k.trim(d[0]));
        }
      },
      pa: function () {
        for (var a = cc11001100_hook("a", [], "var-init"), b = cc11001100_hook("b", this.a.et, "var-init"), d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", m.ra.length, "var-init"); d < e; d++) {
          var f = cc11001100_hook("f", m.ra[d], "var-init"),
            g = cc11001100_hook("g", this.a[f], "var-init");
          "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g));
        }
        return a.join("&");
      },
      Eb: function () {
        this.Db();
        this.a.si = cc11001100_hook("this.a.si", c.id, "assign");
        this.a.sn = cc11001100_hook("this.a.sn", this.ea(), "assign");
        this.a.su = cc11001100_hook("this.a.su", document.referrer, "assign");
        this.a.ds = cc11001100_hook("this.a.ds", f.Ab, "assign");
        this.a.cl = cc11001100_hook("this.a.cl", f.colorDepth + "-bit", "assign");
        this.a.ln = cc11001100_hook("this.a.ln", String(f.language).toLowerCase(), "assign");
        this.a.ja = cc11001100_hook("this.a.ja", f.javaEnabled ? 1 : 0, "assign");
        this.a.ck = cc11001100_hook("this.a.ck", f.cookieEnabled ? 1 : 0, "assign");
        this.a.lo = cc11001100_hook("this.a.lo", "number" === typeof _bdhm_top ? 1 : 0, "assign");
        this.a.v = cc11001100_hook("this.a.v", "1.3.0", "assign");
        this.a.cv = cc11001100_hook("this.a.cv", decodeURIComponent(p.getData("Hm_cv_" + c.id) || ""), "assign");
        this.a.tt = cc11001100_hook("this.a.tt", document.title || "", "assign");
        this.a.vl = cc11001100_hook("this.a.vl", f.W(), "assign");
        var b = cc11001100_hook("b", document.location.href, "var-init");
        this.a.cm = cc11001100_hook("this.a.cm", a.f(b, m.hb) || "", "assign");
        this.a.cp = cc11001100_hook("this.a.cp", a.f(b, m.ib) || a.f(b, m.Jb) || "", "assign");
        this.a.cw = cc11001100_hook("this.a.cw", a.f(b, m.gb) || a.f(b, m.Lb) || "", "assign");
        this.a.ci = cc11001100_hook("this.a.ci", a.f(b, m.eb) || a.f(b, m.Ib) || "", "assign");
        this.a.cf = cc11001100_hook("this.a.cf", a.f(b, m.jb) || a.f(b, m.Kb) || "", "assign");
        this.a.cu = cc11001100_hook("this.a.cu", a.f(b, m.fb) || a.f(b, m.Hb) || "", "assign");
        /https?:/.test(document.location.protocol) && (this.a.u = cc11001100_hook("this.a.u", b, "assign"));
      },
      D: function () {
        try {
          this.Aa(), this.Eb(), this.Cb(), h.b = cc11001100_hook("h.b", this, "assign"), this.za(), this.tb(), v.k("pv-b"), this.ob && this.Bb();
        } catch (a) {
          var d = cc11001100_hook("d", [], "var-init");
          d.push("si=" + c.id);
          d.push("n=" + encodeURIComponent(a.name));
          d.push("m=" + encodeURIComponent(a.message));
          d.push("r=" + encodeURIComponent(document.referrer));
          b.log(m.L + "//" + m.aa + "?" + d.join("&"));
        }
      },
      Bb: function () {
        function a() {
          v.k("pv-d");
        }
        this.ha ? (this.a.et = cc11001100_hook("this.a.et", 0, "assign"), this.a.ep = cc11001100_hook("this.a.ep", "", "assign"), v.k("setPageviewProp"), this.a.vl = cc11001100_hook("this.a.vl", f.W(), "assign"), this.m(a), this.a.p = cc11001100_hook("this.a.p", "", "assign")) : a();
        this.sb = cc11001100_hook("this.sb", +new Date(), "assign");
        v.k("clearPageviewProp");
      },
      m: function (a) {
        if (this.ia) {
          var d = cc11001100_hook("d", this, "var-init");
          d.a.rnd = cc11001100_hook("d.a.rnd", Math.round(Math.random() * m.G), "assign");
          d.a.r = cc11001100_hook("d.a.r", f.orientation, "assign");
          d.a.ww = cc11001100_hook("d.a.ww", f.sa, "assign");
          v.k("stag-b");
          var e = cc11001100_hook("e", m.L + "//" + m.aa + "?" + d.pa(), "var-init");
          v.k("stag-d");
          d.va(e);
          b.log(e, function (b) {
            d.oa(b);
            k.j(a) && a.call(d);
          });
        }
      },
      za: function () {
        try {
          if (window.postMessage && window.self !== window.parent) {
            var b = cc11001100_hook("b", this, "var-init");
            r.c(window, "message", function (d) {
              if (a.V(d.origin) === m.Gb) {
                d = cc11001100_hook("d", d.data || {}, "assign");
                var e = cc11001100_hook("e", d.jn || "", "var-init"),
                  f = cc11001100_hook("f", /^customevent$|^heatmap$|^pageclick$|^select$/.test(e), "var-init");
                if (RegExp(c.id).test(d.sd || "") && f) b.a.rnd = cc11001100_hook("b.a.rnd", Math.round(Math.random() * m.G), "assign"), q(m.protocol + "//" + c.js + e + ".js?" + b.a.rnd);
              }
            });
            window.parent.postMessage({
              id: cc11001100_hook("id", c.id, "object-key-init"),
              url: cc11001100_hook("url", document.location.href, "object-key-init"),
              status: cc11001100_hook("status", "__Messenger__hmLoaded", "object-key-init")
            }, "*");
          }
        } catch (d) {}
      },
      tb: function () {
        try {
          if (window.self === window.parent) {
            var b = cc11001100_hook("b", document.location.href, "var-init"),
              d = cc11001100_hook("d", a.f(b, "baidu-analytics-token"), "var-init"),
              e = cc11001100_hook("e", a.f(b, "baidu-analytics-jn"), "var-init");
            /^[a-f0-9]{32}\/?$/.test(d) && /^(overlay|vabtest)\/?$/.test(e) && q(m.protocol + "//" + c.js + e + ".js?" + Math.round(Math.random() * m.G));
          }
        } catch (f) {}
      },
      va: function (a) {
        var b;
        try {
          b = cc11001100_hook("b", l.parse(g.get("Hm_unsent_" + c.id) || "[]"), "assign");
        } catch (d) {
          b = cc11001100_hook("b", [], "assign");
        }
        var e = cc11001100_hook("e", this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href), "var-init");
        b.push(a.replace(/^https?:\/\//, "") + e);
        g.set("Hm_unsent_" + c.id, l.stringify(b));
      },
      oa: function (a) {
        var b;
        try {
          b = cc11001100_hook("b", l.parse(g.get("Hm_unsent_" + c.id) || "[]"), "assign");
        } catch (d) {
          b = cc11001100_hook("b", [], "assign");
        }
        if (b.length) {
          a = cc11001100_hook("a", a.replace(/^https?:\/\//, ""), "assign");
          for (var e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
            b.splice(e, 1);
            break;
          }
          b.length ? g.set("Hm_unsent_" + c.id, l.stringify(b)) : this.Ba();
        }
      },
      Ba: function () {
        g.remove("Hm_unsent_" + c.id);
      },
      Cb: function () {
        var a = cc11001100_hook("a", this, "var-init"),
          d;
        try {
          d = cc11001100_hook("d", l.parse(g.get("Hm_unsent_" + c.id) || "[]"), "assign");
        } catch (e) {
          d = cc11001100_hook("d", [], "assign");
        }
        if (d.length) for (var f = function (d) {
            b.log(m.L + "//" + d, function (b) {
              a.oa(b);
            });
          }, k = cc11001100_hook("k", 0, "var-init"); k < d.length; k++) f(d[k]);
      },
      ea: function () {
        return Math.round(+new Date() / 1E3) % 65535;
      }
    }, "assign");
    return new e();
  })();
  var y = cc11001100_hook("y", h.o, "var-init"),
    z = cc11001100_hook("z", h.load, "var-init");
  if (c.apps) {
    var B = cc11001100_hook("B", [y.protocol, "//ers.baidu.com/app/s.js?"], "var-init");
    B.push(c.apps);
    z(B.join(""));
  }
  var D = cc11001100_hook("D", h.o, "var-init"),
    E = cc11001100_hook("E", h.load, "var-init");
  c.pt && E([D.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
  var F = cc11001100_hook("F", h.load, "var-init");
  if (c.qiao) {
    for (var G = cc11001100_hook("G", ["https://goutong.baidu.com/site/"], "var-init"), H = cc11001100_hook("H", c.id, "var-init"), I = cc11001100_hook("I", 5381, "var-init"), J = cc11001100_hook("J", H.length, "var-init"), K = cc11001100_hook("K", 0, "var-init"); K < J; K++) I = cc11001100_hook("I", (33 * I + Number(H.charCodeAt(K))) % 4294967296, "assign");
    2147483648 < I && (I -= cc11001100_hook("I", 2147483648, "assign"));
    G.push(I % 1E3 + "/");
    G.push(c.id + "/b.js");
    G.push("?siteId=" + c.qiao);
    F(G.join(""));
  }
  ;
})();