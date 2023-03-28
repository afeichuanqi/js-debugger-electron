(function (sttc) {
  /* 
  Copyright The Closure Library Authors. 
  SPDX-License-Identifier: Apache-2.0 
  */
  'use strict';

  var p,
    ba = cc11001100_hook("ba", "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = cc11001100_hook("a[b]", c.value, "assign");
      return a;
    }, "var-init");
  function ca(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], "assign");
    for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) {
      var c = cc11001100_hook("c", a[b], "var-init");
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ea = cc11001100_hook("ea", ca(this), "var-init"),
    fa = cc11001100_hook("fa", "function" === typeof Symbol && "symbol" === typeof Symbol("x"), "var-init"),
    ha = cc11001100_hook("ha", {}, "var-init"),
    ia = cc11001100_hook("ia", {}, "var-init");
  function ja(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!c || null != a) {
      c = cc11001100_hook("c", ia[b], "assign");
      if (null == c) return a[b];
      c = cc11001100_hook("c", a[c], "assign");
      return void 0 !== c ? c : a[b];
    }
  }
  function ka(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (b) a: {
      var d = cc11001100_hook("d", a.split("."), "var-init");
      a = cc11001100_hook("a", 1 === d.length, "assign");
      var e = cc11001100_hook("e", d[0], "var-init"),
        f;
      !a && e in ha ? f = cc11001100_hook("f", ha, "assign") : f = cc11001100_hook("f", ea, "assign");
      for (e = cc11001100_hook("e", 0, "assign"); e < d.length - 1; e++) {
        var g = cc11001100_hook("g", d[e], "var-init");
        if (!(g in f)) break a;
        f = cc11001100_hook("f", f[g], "assign");
      }
      d = cc11001100_hook("d", d[d.length - 1], "assign");
      c = cc11001100_hook("c", fa && "es6" === c ? f[d] : null, "assign");
      b = cc11001100_hook("b", b(c), "assign");
      null != b && (a ? ba(ha, d, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        value: cc11001100_hook("value", b, "object-key-init")
      }) : b !== c && (void 0 === ia[d] && (a = cc11001100_hook("a", 1E9 * Math.random() >>> 0, "assign"), ia[d] = cc11001100_hook("ia[d]", fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d, "assign")), ba(f, ia[d], {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        value: cc11001100_hook("value", b, "object-key-init")
      })));
    }
  }
  var la = cc11001100_hook("la", "function" == typeof Object.create ? Object.create : function (a) {
      function b() {}
      b.prototype = cc11001100_hook("b.prototype", a, "assign");
      return new b();
    }, "var-init"),
    ma;
  if (fa && "function" == typeof Object.setPrototypeOf) ma = cc11001100_hook("ma", Object.setPrototypeOf, "assign");else {
    var na;
    a: {
      var oa = cc11001100_hook("oa", {
          a: cc11001100_hook("a", !0, "object-key-init")
        }, "var-init"),
        pa = cc11001100_hook("pa", {}, "var-init");
      try {
        pa.__proto__ = cc11001100_hook("pa.__proto__", oa, "assign");
        na = cc11001100_hook("na", pa.a, "assign");
        break a;
      } catch (a) {}
      na = cc11001100_hook("na", !1, "assign");
    }
    ma = cc11001100_hook("ma", na ? function (a, b) {
      a.__proto__ = cc11001100_hook("a.__proto__", b, "assign");
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null, "assign");
  }
  var qa = cc11001100_hook("qa", ma, "var-init");
  function sa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.prototype = cc11001100_hook("a.prototype", la(b.prototype), "assign");
    a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign");
    if (qa) qa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
      var d = cc11001100_hook("d", Object.getOwnPropertyDescriptor(b, c), "var-init");
      d && Object.defineProperty(a, c, d);
    } else a[c] = cc11001100_hook("a[c]", b[c], "assign");
    a.Ig = cc11001100_hook("a.Ig", b.prototype, "assign");
  }
  ka("AggregateError", function (a) {
    function b(c, d) {
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      d = cc11001100_hook("d", Error(d), "assign");
      "stack" in d && (this.stack = cc11001100_hook("this.stack", d.stack, "assign"));
      this.errors = cc11001100_hook("this.errors", c, "assign");
      this.message = cc11001100_hook("this.message", d.message, "assign");
    }
    if (a) return a;
    sa(b, Error);
    b.prototype.name = cc11001100_hook("b.prototype.name", "AggregateError", "assign");
    return b;
  }, "es_2021");
  ka("Promise.any", function (a) {
    return a ? a : function (b) {
      b = cc11001100_hook("b", b instanceof Array ? b : Array.from(b), "assign");
      return Promise.all(b.map(function (c) {
        return Promise.resolve(c).then(function (d) {
          throw d;
        }, function (d) {
          return d;
        });
      })).then(function (c) {
        throw new ha.AggregateError(c, "All promises were rejected");
      }, function (c) {
        return c;
      });
    };
  }, "es_2021");
  var t = cc11001100_hook("t", this || self, "var-init");
  function ta(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", typeof a, "var-init");
    b = cc11001100_hook("b", "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null", "assign");
    return "array" == b || "object" == b && "number" == typeof a.length;
  }
  function ua(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", typeof a, "var-init");
    return "object" == b && null != a || "function" == b;
  }
  function va(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Object.prototype.hasOwnProperty.call(a, wa) && a[wa] || (a[wa] = cc11001100_hook("a[wa]", ++xa, "assign"));
  }
  var wa = cc11001100_hook("wa", "closure_uid_" + (1E9 * Math.random() >>> 0), "var-init"),
    xa = cc11001100_hook("xa", 0, "var-init");
  function za(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.call.apply(a.bind, arguments);
  }
  function Aa(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = cc11001100_hook("d", Array.prototype.slice.call(arguments, 2), "var-init");
      return function () {
        var e = cc11001100_hook("e", Array.prototype.slice.call(arguments), "var-init");
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function Ba(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ba = cc11001100_hook("Ba", za, "assign") : Ba = cc11001100_hook("Ba", Aa, "assign");
    return Ba.apply(null, arguments);
  }
  function Ca(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Array.prototype.slice.call(arguments, 1), "var-init");
    return function () {
      var d = cc11001100_hook("d", c.slice(), "var-init");
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function Ea() {
    return Date.now();
  }
  function Fa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.split("."), "assign");
    var c = cc11001100_hook("c", t, "var-init");
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = cc11001100_hook("d", a.shift(), "assign"));) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = cc11001100_hook("c", c[d], "assign") : c = cc11001100_hook("c", c[d] = cc11001100_hook("c[d]", {}, "assign"), "assign") : c[d] = cc11001100_hook("c[d]", b, "assign");
  }
  function Ha(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    function c() {}
    c.prototype = cc11001100_hook("c.prototype", b.prototype, "assign");
    a.Ig = cc11001100_hook("a.Ig", b.prototype, "assign");
    a.prototype = cc11001100_hook("a.prototype", new c(), "assign");
    a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign");
    a.Uk = cc11001100_hook("a.Uk", function (d, e, f) {
      for (var g = cc11001100_hook("g", Array(arguments.length - 2), "var-init"), h = cc11001100_hook("h", 2, "var-init"); h < arguments.length; h++) g[h - 2] = cc11001100_hook("g[h - 2]", arguments[h], "assign");
      return b.prototype[e].apply(d, g);
    }, "assign");
  }
  function Ja(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  ;
  var Ka = cc11001100_hook("Ka", {
    Vj: cc11001100_hook("Vj", 0, "object-key-init"),
    Uj: cc11001100_hook("Uj", 1, "object-key-init"),
    Tj: cc11001100_hook("Tj", 2, "object-key-init")
  }, "var-init");
  function Ma(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ma);else {
      const c = cc11001100_hook("c", Error().stack, "var-init");
      c && (this.stack = cc11001100_hook("this.stack", c, "assign"));
    }
    a && (this.message = cc11001100_hook("this.message", String(a), "assign"));
    void 0 !== b && (this.cause = cc11001100_hook("this.cause", b, "assign"));
  }
  Ha(Ma, Error);
  Ma.prototype.name = cc11001100_hook("Ma.prototype.name", "CustomError", "assign");
  var Na;
  function Oa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.split("%s"), "assign");
    let c = cc11001100_hook("c", "", "var-init");
    const d = cc11001100_hook("d", a.length - 1, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < d; e++) c += cc11001100_hook("c", a[e] + (e < b.length ? b[e] : "%s"), "assign");
    Ma.call(this, c + a[d]);
  }
  Ha(Oa, Ma);
  Oa.prototype.name = cc11001100_hook("Oa.prototype.name", "AssertionError", "assign");
  function Pa(a) {
    cc11001100_hook("a", a, "function-parameter");
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function Qa(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Ra.test(a)) return a;
    -1 != a.indexOf("&") && (a = cc11001100_hook("a", a.replace(Sa, "&amp;"), "assign"));
    -1 != a.indexOf("<") && (a = cc11001100_hook("a", a.replace(Ta, "&lt;"), "assign"));
    -1 != a.indexOf(">") && (a = cc11001100_hook("a", a.replace(Ua, "&gt;"), "assign"));
    -1 != a.indexOf('"') && (a = cc11001100_hook("a", a.replace(Wa, "&quot;"), "assign"));
    -1 != a.indexOf("'") && (a = cc11001100_hook("a", a.replace(Xa, "&#39;"), "assign"));
    -1 != a.indexOf("\x00") && (a = cc11001100_hook("a", a.replace(Ya, "&#0;"), "assign"));
    return a;
  }
  var Sa = cc11001100_hook("Sa", /&/g, "var-init"),
    Ta = cc11001100_hook("Ta", /</g, "var-init"),
    Ua = cc11001100_hook("Ua", />/g, "var-init"),
    Wa = cc11001100_hook("Wa", /"/g, "var-init"),
    Xa = cc11001100_hook("Xa", /'/g, "var-init"),
    Ya = cc11001100_hook("Ya", /\x00/g, "var-init"),
    Ra = cc11001100_hook("Ra", /[\x00&<>"']/, "var-init");
  function Za(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return -1 != a.indexOf(b);
  }
  function $a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", bb(), "var-init");
    let c = cc11001100_hook("c", 0, "var-init");
    b = cc11001100_hook("b", Pa(String(b)).split("."), "assign");
    a = cc11001100_hook("a", Pa(String(a)).split("."), "assign");
    const d = cc11001100_hook("d", Math.max(b.length, a.length), "var-init");
    for (let g = cc11001100_hook("g", 0, "var-init"); 0 == c && g < d; g++) {
      var e = cc11001100_hook("e", b[g] || "", "var-init"),
        f = cc11001100_hook("f", a[g] || "", "var-init");
      do {
        e = cc11001100_hook("e", /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""], "assign");
        f = cc11001100_hook("f", /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""], "assign");
        if (0 == e[0].length && 0 == f[0].length) break;
        c = cc11001100_hook("c", cb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || cb(0 == e[2].length, 0 == f[2].length) || cb(e[2], f[2]), "assign");
        e = cc11001100_hook("e", e[3], "assign");
        f = cc11001100_hook("f", f[3], "assign");
      } while (0 == c);
    }
    return c;
  }
  function cb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a < b ? -1 : a > b ? 1 : 0;
  }
  ;
  var db, eb;
  a: {
    for (var fb = cc11001100_hook("fb", ["CLOSURE_FLAGS"], "var-init"), gb = cc11001100_hook("gb", t, "var-init"), hb = cc11001100_hook("hb", 0, "var-init"); hb < fb.length; hb++) if (gb = cc11001100_hook("gb", gb[fb[hb]], "assign"), null == gb) {
      eb = cc11001100_hook("eb", null, "assign");
      break a;
    }
    eb = cc11001100_hook("eb", gb, "assign");
  }
  var ib = cc11001100_hook("ib", eb && eb[610401301], "var-init");
  db = cc11001100_hook("db", null != ib ? ib : !1, "assign");
  function jb() {
    var a = cc11001100_hook("a", t.navigator, "var-init");
    return a && (a = cc11001100_hook("a", a.userAgent, "assign")) ? a : "";
  }
  var kb;
  const nb = cc11001100_hook("nb", t.navigator, "var-init");
  kb = cc11001100_hook("kb", nb ? nb.userAgentData || null : null, "assign");
  function ob(a) {
    cc11001100_hook("a", a, "function-parameter");
    return db ? kb ? kb.brands.some(({
      brand: b
    }) => b && Za(b, a)) : !1 : !1;
  }
  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Za(jb(), a);
  }
  ;
  function pb() {
    return db ? !!kb && 0 < kb.brands.length : !1;
  }
  function qb() {
    return pb() ? !1 : v("Opera");
  }
  function rb() {
    return pb() ? !1 : v("Trident") || v("MSIE");
  }
  function sb() {
    return pb() ? !1 : v("Edge");
  }
  function tb() {
    return pb() ? ob("Microsoft Edge") : v("Edg/");
  }
  function ub() {
    return v("Firefox") || v("FxiOS");
  }
  function vb() {
    return v("Safari") && !(wb() || (pb() ? 0 : v("Coast")) || qb() || sb() || tb() || (pb() ? ob("Opera") : v("OPR")) || ub() || v("Silk") || v("Android"));
  }
  function wb() {
    return pb() ? ob("Chromium") : (v("Chrome") || v("CriOS")) && !sb() || v("Silk");
  }
  function xb() {
    return v("Android") && !(wb() || ub() || qb() || v("Silk"));
  }
  function yb(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    a.forEach(c => {
      b[c[0]] = cc11001100_hook("b[c[0]]", c[1], "assign");
    });
    return c => b[c.find(d => d in b)] || "";
  }
  function bb() {
    var a = cc11001100_hook("a", jb(), "var-init");
    if (rb()) {
      var b = cc11001100_hook("b", /rv: *([\d\.]*)/.exec(a), "var-init");
      if (b && b[1]) a = cc11001100_hook("a", b[1], "assign");else {
        b = cc11001100_hook("b", "", "assign");
        var c = cc11001100_hook("c", /MSIE +([\d\.]+)/.exec(a), "var-init");
        if (c && c[1]) if (a = cc11001100_hook("a", /Trident\/(\d.\d)/.exec(a), "assign"), "7.0" == c[1]) {
          if (a && a[1]) switch (a[1]) {
            case "4.0":
              b = cc11001100_hook("b", "8.0", "assign");
              break;
            case "5.0":
              b = cc11001100_hook("b", "9.0", "assign");
              break;
            case "6.0":
              b = cc11001100_hook("b", "10.0", "assign");
              break;
            case "7.0":
              b = cc11001100_hook("b", "11.0", "assign");
          } else b = cc11001100_hook("b", "7.0", "assign");
        } else b = cc11001100_hook("b", c[1], "assign");
        a = cc11001100_hook("a", b, "assign");
      }
      return a;
    }
    c = cc11001100_hook("c", RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), "assign");
    b = cc11001100_hook("b", [], "assign");
    let d;
    for (; d = cc11001100_hook("d", c.exec(a), "assign");) b.push([d[1], d[2], d[3] || void 0]);
    a = cc11001100_hook("a", yb(b), "assign");
    return qb() ? a(["Version", "Opera"]) : sb() ? a(["Edge"]) : tb() ? a(["Edg"]) : v("Silk") ? a(["Silk"]) : wb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = cc11001100_hook("a", b[2], "assign")) && a[1] || "";
  }
  ;
  function zb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Ab(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Bb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", [], "var-init");
    let e = cc11001100_hook("e", 0, "var-init");
    const f = cc11001100_hook("f", "string" === typeof a ? a.split("") : a, "var-init");
    for (let g = cc11001100_hook("g", 0, "var-init"); g < c; g++) if (g in f) {
      const h = cc11001100_hook("h", f[g], "var-init");
      b.call(void 0, h, g, a) && (d[e++] = cc11001100_hook("d[e++]", h, "assign"));
    }
    return d;
  }
  function Cb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", Array(c), "var-init"),
      e = cc11001100_hook("e", "string" === typeof a ? a.split("") : a, "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < c; f++) f in e && (d[f] = cc11001100_hook("d[f]", b.call(void 0, e[f], f, a), "assign"));
    return d;
  }
  function Db(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    let d = cc11001100_hook("d", c, "var-init");
    Ab(a, function (e, f) {
      d = cc11001100_hook("d", b.call(void 0, d, e, f, a), "assign");
    });
    return d;
  }
  function Eb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function Fb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 <= zb(a, b);
  }
  function Gb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", zb(a, b), "assign");
    let c;
    (c = cc11001100_hook("c", 0 <= b, "assign")) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function Hb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Array.prototype.concat.apply([], arguments);
  }
  function Ib(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.length, "var-init");
    if (0 < b) {
      const c = cc11001100_hook("c", Array(b), "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c[d] = cc11001100_hook("c[d]", a[d], "assign");
      return c;
    }
    return [];
  }
  function Jb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
  }
  function Kb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", c || Lb, "assign");
    let d = cc11001100_hook("d", 0, "var-init"),
      e = cc11001100_hook("e", a.length, "var-init"),
      f;
    for (; d < e;) {
      const g = cc11001100_hook("g", d + (e - d >>> 1), "var-init");
      let h;
      h = cc11001100_hook("h", c(b, a[g]), "assign");
      0 < h ? d = cc11001100_hook("d", g + 1, "assign") : (e = cc11001100_hook("e", g, "assign"), f = cc11001100_hook("f", !h, "assign"));
    }
    return f ? d : -d - 1;
  }
  function Mb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!ta(a) || !ta(b) || a.length != b.length) return !1;
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", Nb, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) if (!d(a[e], b[e])) return !1;
    return !0;
  }
  function Lb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function Nb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a === b;
  }
  function Ob(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < arguments.length; c++) {
      const d = cc11001100_hook("d", arguments[c], "var-init");
      if (Array.isArray(d)) for (let e = cc11001100_hook("e", 0, "var-init"); e < d.length; e += cc11001100_hook("e", 8192, "assign")) {
        const f = cc11001100_hook("f", Ob.apply(null, Jb(d, e, e + 8192)), "var-init");
        for (let g = cc11001100_hook("g", 0, "var-init"); g < f.length; g++) b.push(f[g]);
      } else b.push(d);
    }
    return b;
  }
  function Pb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b || Math.random, "assign");
    for (let c = cc11001100_hook("c", a.length - 1, "var-init"); 0 < c; c--) {
      const d = cc11001100_hook("d", Math.floor(b() * (c + 1)), "var-init"),
        e = cc11001100_hook("e", a[c], "var-init");
      a[c] = cc11001100_hook("a[c]", a[d], "assign");
      a[d] = cc11001100_hook("a[d]", e, "assign");
    }
  }
  ;
  function Qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    Qb[" "](a);
    return a;
  }
  Qb[" "] = cc11001100_hook("Qb[\" \"]", function () {}, "assign");
  function Rb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      return Qb(a[b]), !0;
    } catch (c) {}
    return !1;
  }
  ;
  var Sb = cc11001100_hook("Sb", qb(), "var-init"),
    Tb = cc11001100_hook("Tb", rb(), "var-init"),
    Ub = cc11001100_hook("Ub", v("Edge"), "var-init"),
    Vb = cc11001100_hook("Vb", Ub || Tb, "var-init"),
    Wb = cc11001100_hook("Wb", v("Gecko") && !(Za(jb().toLowerCase(), "webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"), "var-init"),
    Xb = cc11001100_hook("Xb", Za(jb().toLowerCase(), "webkit") && !v("Edge"), "var-init");
  function Yb() {
    var a = cc11001100_hook("a", t.document, "var-init");
    return a ? a.documentMode : void 0;
  }
  var Zb;
  a: {
    var $b = cc11001100_hook("$b", "", "var-init"),
      ac = cc11001100_hook("ac", function () {
        var a = cc11001100_hook("a", jb(), "var-init");
        if (Wb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ub) return /Edge\/([\d\.]+)/.exec(a);
        if (Tb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Xb) return /WebKit\/(\S+)/.exec(a);
        if (Sb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }(), "var-init");
    ac && ($b = cc11001100_hook("$b", ac ? ac[1] : "", "assign"));
    if (Tb) {
      var bc = cc11001100_hook("bc", Yb(), "var-init");
      if (null != bc && bc > parseFloat($b)) {
        Zb = cc11001100_hook("Zb", String(bc), "assign");
        break a;
      }
    }
    Zb = cc11001100_hook("Zb", $b, "assign");
  }
  var cc = cc11001100_hook("cc", Zb, "var-init"),
    dc;
  if (t.document && Tb) {
    var ec = cc11001100_hook("ec", Yb(), "var-init");
    dc = cc11001100_hook("dc", ec ? ec : parseInt(cc, 10) || void 0, "assign");
  } else dc = cc11001100_hook("dc", void 0, "assign");
  var fc = cc11001100_hook("fc", dc, "var-init");
  xb();
  wb();
  vb();
  var gc = cc11001100_hook("gc", {}, "var-init"),
    ic = cc11001100_hook("ic", null, "var-init");
  function jc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
    kc();
    b = cc11001100_hook("b", gc[b], "assign");
    const c = cc11001100_hook("c", Array(Math.floor(a.length / 3)), "var-init"),
      d = cc11001100_hook("d", b[64] || "", "var-init");
    let e = cc11001100_hook("e", 0, "var-init"),
      f = cc11001100_hook("f", 0, "var-init");
    for (; e < a.length - 2; e += cc11001100_hook("e", 3, "assign")) {
      var g = cc11001100_hook("g", a[e], "var-init"),
        h = cc11001100_hook("h", a[e + 1], "var-init"),
        k = cc11001100_hook("k", a[e + 2], "var-init"),
        l = cc11001100_hook("l", b[g >> 2], "var-init");
      g = cc11001100_hook("g", b[(g & 3) << 4 | h >> 4], "assign");
      h = cc11001100_hook("h", b[(h & 15) << 2 | k >> 6], "assign");
      k = cc11001100_hook("k", b[k & 63], "assign");
      c[f++] = cc11001100_hook("c[f++]", l + g + h + k, "assign");
    }
    l = cc11001100_hook("l", 0, "assign");
    k = cc11001100_hook("k", d, "assign");
    switch (a.length - e) {
      case 2:
        l = cc11001100_hook("l", a[e + 1], "assign"), k = cc11001100_hook("k", b[(l & 15) << 2] || d, "assign");
      case 1:
        a = cc11001100_hook("a", a[e], "assign"), c[f] = cc11001100_hook("c[f]", b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d, "assign");
    }
    return c.join("");
  }
  function lc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    mc(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function nc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init"),
      c = cc11001100_hook("c", 3 * b / 4, "var-init");
    c % 3 ? c = cc11001100_hook("c", Math.floor(c), "assign") : Za("=.", a[b - 1]) && (c = cc11001100_hook("c", Za("=.", a[b - 2]) ? c - 2 : c - 1, "assign"));
    var d = cc11001100_hook("d", new Uint8Array(c), "var-init"),
      e = cc11001100_hook("e", 0, "var-init");
    mc(a, function (f) {
      d[e++] = cc11001100_hook("d[e++]", f, "assign");
    });
    return e !== c ? d.subarray(0, e) : d;
  }
  function mc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    function c(k) {
      cc11001100_hook("k", k, "function-parameter");
      for (; d < a.length;) {
        var l = cc11001100_hook("l", a.charAt(d++), "var-init"),
          m = cc11001100_hook("m", ic[l], "var-init");
        if (null != m) return m;
        if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
    }
    kc();
    for (var d = cc11001100_hook("d", 0, "var-init");;) {
      var e = cc11001100_hook("e", c(-1), "var-init"),
        f = cc11001100_hook("f", c(0), "var-init"),
        g = cc11001100_hook("g", c(64), "var-init"),
        h = cc11001100_hook("h", c(64), "var-init");
      if (64 === h && -1 === e) break;
      b(e << 2 | f >> 4);
      64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
    }
  }
  function kc() {
    if (!ic) {
      ic = cc11001100_hook("ic", {}, "assign");
      for (var a = cc11001100_hook("a", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), b = cc11001100_hook("b", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), c = cc11001100_hook("c", 0, "var-init"); 5 > c; c++) {
        var d = cc11001100_hook("d", a.concat(b[c].split("")), "var-init");
        gc[c] = cc11001100_hook("gc[c]", d, "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < d.length; e++) {
          var f = cc11001100_hook("f", d[e], "var-init");
          void 0 === ic[f] && (ic[f] = cc11001100_hook("ic[f]", e, "assign"));
        }
      }
    }
  }
  ;
  var oc = cc11001100_hook("oc", "undefined" !== typeof Uint8Array, "var-init");
  const pc = cc11001100_hook("pc", !Tb && "function" === typeof t.btoa, "var-init");
  function qc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!pc) return jc(a);
    let b = cc11001100_hook("b", "", "var-init");
    for (; 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
    b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
    return btoa(b);
  }
  const rc = cc11001100_hook("rc", /[-_.]/g, "var-init"),
    sc = cc11001100_hook("sc", {
      "-": cc11001100_hook("-", "+", "object-key-init"),
      _: cc11001100_hook("_", "/", "object-key-init"),
      ".": cc11001100_hook(".", "=", "object-key-init")
    }, "var-init");
  function tc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return sc[a] || "";
  }
  function uc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return oc && null != a && a instanceof Uint8Array;
  }
  let vc;
  var wc = cc11001100_hook("wc", {}, "var-init");
  let xc;
  function yc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a !== wc) throw Error("illegal external caller");
  }
  function zc() {
    return xc || (xc = cc11001100_hook("xc", new Ac(null, wc), "assign"));
  }
  var Ac = cc11001100_hook("Ac", class {
    constructor(a, b) {
      yc(b);
      this.j = cc11001100_hook("this.j", a, "assign");
      if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    isEmpty() {
      return null == this.j;
    }
  }, "var-init");
  const Bc = cc11001100_hook("Bc", Symbol(), "var-init");
  function Cc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Bc) return a[Bc] |= cc11001100_hook("a[Bc]", b, "assign");
    if (void 0 !== a.j) return a.j |= cc11001100_hook("a.j", b, "assign");
    Object.defineProperties(a, {
      j: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return b;
  }
  function Dc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Bc ? a[Bc] && (a[Bc] &= cc11001100_hook("a[Bc]", ~b, "assign")) : void 0 !== a.j && (a.j &= cc11001100_hook("a.j", ~b, "assign"));
  }
  function Ec(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    Bc ? b = cc11001100_hook("b", a[Bc], "assign") : b = cc11001100_hook("b", a.j, "assign");
    return null == b ? 0 : b;
  }
  function Fc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Bc ? a[Bc] = cc11001100_hook("a[Bc]", b, "assign") : void 0 !== a.j ? a.j = cc11001100_hook("a.j", b, "assign") : Object.defineProperties(a, {
      j: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return a;
  }
  function Gc(a) {
    cc11001100_hook("a", a, "function-parameter");
    Cc(a, 1);
    return a;
  }
  function Hc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!(Ec(a) & 2);
  }
  function Ic(a) {
    cc11001100_hook("a", a, "function-parameter");
    Cc(a, 16);
    return a;
  }
  function Jc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Fc(b, (a | 0) & -51);
  }
  function Kc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Fc(b, (a | 18) & -41);
  }
  ;
  var Lc = cc11001100_hook("Lc", {}, "var-init");
  function Mc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  let Nc;
  function Oc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (null != a) if ("string" === typeof a) a = cc11001100_hook("a", a ? new Ac(a, wc) : zc(), "assign");else if (a.constructor !== Ac) if (uc(a)) {
      var d;
      c ? d = cc11001100_hook("d", 0 == a.length ? zc() : new Ac(a, wc), "assign") : d = cc11001100_hook("d", a.length ? new Ac(new Uint8Array(a), wc) : zc(), "assign");
      a = cc11001100_hook("a", d, "assign");
    } else {
      if (!b) throw Error();
      a = cc11001100_hook("a", void 0, "assign");
    }
    return a;
  }
  var Pc = cc11001100_hook("Pc", Object.freeze(Fc([], 23)), "var-init");
  function Qc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (Ec(a.N) & 2) throw Error();
  }
  function Rc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && Mc(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
  function Sc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null != a && "number" !== typeof a) throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof a}: ${a}`);
    return a;
  }
  function Tc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function Uc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function Vc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function Wc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function Xc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function Yc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function Zc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Ec(a), "var-init");
    let d = cc11001100_hook("d", c, "var-init");
    0 === d && (d |= cc11001100_hook("d", b & 16, "assign"));
    d |= cc11001100_hook("d", b & 2, "assign");
    d !== c && Fc(a, d);
  }
  ;
  function $c(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.m + a.Ha, "var-init");
    return a.sa || (a.sa = cc11001100_hook("a.sa", a.N[b] = cc11001100_hook("a.N[b]", {}, "assign"), "assign"));
  }
  function w(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return -1 === b ? null : b >= a.m ? a.sa ? a.sa[b] : void 0 : c && a.sa && (c = cc11001100_hook("c", a.sa[b], "assign"), null != c) ? c : a.N[b + a.Ha];
  }
  function x(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Qc(a);
    return ad(a, b, c, d);
  }
  function ad(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.C && (a.C = cc11001100_hook("a.C", void 0, "assign"));
    if (b >= a.m || d) return $c(a)[b] = cc11001100_hook("$c(a)[b]", c, "assign"), a;
    a.N[b + a.Ha] = cc11001100_hook("a.N[b + a.Ha]", c, "assign");
    (c = cc11001100_hook("c", a.sa, "assign")) && b in c && delete c[b];
    return a;
  }
  function bd(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return void 0 !== cd(a, b, c, !1);
  }
  function dd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    let f = cc11001100_hook("f", w(a, b, d), "var-init");
    Array.isArray(f) || (f = cc11001100_hook("f", Pc, "assign"));
    const g = cc11001100_hook("g", Ec(f), "var-init");
    g & 1 || Gc(f);
    if (e) g & 2 || Cc(f, 18), c & 1 || Object.freeze(f);else {
      e = cc11001100_hook("e", !(c & 2), "assign");
      const h = cc11001100_hook("h", g & 2, "var-init");
      c & 1 || !h ? e && g & 16 && !h && Dc(f, 16) : (f = cc11001100_hook("f", Gc(Array.prototype.slice.call(f)), "assign"), ad(a, b, f, d));
    }
    return f;
  }
  function ed(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return dd(a, b, 0, !1, Hc(a.N));
  }
  function fd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(a, b), "var-init");
    var d = cc11001100_hook("d", null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0, "var-init");
    null != d && d !== c && ad(a, b, d);
    return d;
  }
  function y(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", w(a, b), "assign");
    return null == a ? a : !!a;
  }
  function gd(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", Hc(a.N), "var-init");
    let e = cc11001100_hook("e", dd(a, b, 1, void 0, d), "var-init"),
      f = cc11001100_hook("f", Ec(e), "var-init");
    if (!(f & 4)) {
      Object.isFrozen(e) && (e = cc11001100_hook("e", Gc(e.slice()), "assign"), ad(a, b, e));
      let g = cc11001100_hook("g", 0, "var-init"),
        h = cc11001100_hook("h", 0, "var-init");
      for (; g < e.length; g++) {
        const k = cc11001100_hook("k", c(e[g]), "var-init");
        null != k && (e[h++] = cc11001100_hook("e[h++]", k, "assign"));
      }
      h < g && (e.length = cc11001100_hook("e.length", h, "assign"));
      f |= cc11001100_hook("f", 5, "assign");
      d && (f |= cc11001100_hook("f", 18, "assign"));
      Fc(e, f);
      f & 2 && Object.freeze(e);
    }
    !d && (f & 2 || Object.isFrozen(e)) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign"), Cc(e, 5), ad(a, b, e));
    return e;
  }
  function B(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return hd(y(a, b), c);
  }
  function id(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null == c) return x(a, b, Pc);
    const e = cc11001100_hook("e", Ec(c), "var-init");
    if (!(e & 4)) {
      if (e & 2 || Object.isFrozen(c)) c = cc11001100_hook("c", Array.prototype.slice.call(c), "assign");
      for (let f = cc11001100_hook("f", 0, "var-init"); f < c.length; f++) c[f] = cc11001100_hook("c[f]", d(c[f]), "assign");
      Fc(c, e | 5);
    }
    return x(a, b, c);
  }
  function jd(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Qc(a);
    c !== d ? ad(a, b, c) : ad(a, b, void 0, !1);
    return a;
  }
  function kd(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Qc(a);
    (c = cc11001100_hook("c", md(a, c), "assign")) && c !== b && null != d && ad(a, c, void 0, !1);
    return ad(a, b, d);
  }
  function md(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) {
      const e = cc11001100_hook("e", b[d], "var-init");
      null != w(a, e) && (0 !== c && ad(a, c, void 0, !1), c = cc11001100_hook("c", e, "assign"));
    }
    return c;
  }
  function cd(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", w(a, c, d), "var-init");
    {
      let f = cc11001100_hook("f", !1, "var-init");
      null == e || "object" !== typeof e || (f = cc11001100_hook("f", Array.isArray(e), "assign")) || e.jd !== Lc ? f ? (Zc(e, Ec(a.N)), b = cc11001100_hook("b", new b(e), "assign")) : b = cc11001100_hook("b", void 0, "assign") : b = cc11001100_hook("b", e, "assign");
    }
    b !== e && null != b && ad(a, c, b, d);
    return b;
  }
  function D(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", cd(a, b, c, !1), "assign");
    if (null == b) return b;
    if (!Hc(a.N)) {
      const d = cc11001100_hook("d", pd(b), "var-init");
      d !== b && (b = cc11001100_hook("b", d, "assign"), ad(a, c, b, !1));
    }
    return b;
  }
  function qd(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g = cc11001100_hook("g", !!(f & 2), "var-init");
    a.l || (a.l = cc11001100_hook("a.l", {}, "assign"));
    var h = cc11001100_hook("h", a.l[c], "var-init"),
      k = cc11001100_hook("k", dd(a, c, 3, d, g), "var-init");
    if (!h) {
      var l = cc11001100_hook("l", k, "var-init");
      h = cc11001100_hook("h", [], "assign");
      g = cc11001100_hook("g", !!(f & 2), "assign");
      k = cc11001100_hook("k", !!(Ec(l) & 2), "assign");
      const r = cc11001100_hook("r", l, "var-init");
      !g && k && (l = cc11001100_hook("l", Array.prototype.slice.call(l), "assign"));
      var m = cc11001100_hook("m", f | (k ? 2 : 0), "var-init");
      f = cc11001100_hook("f", k, "assign");
      let u = cc11001100_hook("u", 0, "var-init");
      for (; u < l.length; u++) {
        var n = cc11001100_hook("n", l[u], "var-init");
        var q = cc11001100_hook("q", b, "var-init");
        Array.isArray(n) ? (Zc(n, m), n = cc11001100_hook("n", new q(n), "assign")) : n = cc11001100_hook("n", void 0, "assign");
        void 0 !== n && (f = cc11001100_hook("f", f || !!(2 & Ec(n.N)), "assign"), h.push(n));
      }
      a.l[c] = cc11001100_hook("a.l[c]", h, "assign");
      m = cc11001100_hook("m", Ec(l), "assign");
      b = cc11001100_hook("b", m | 33, "assign");
      b = cc11001100_hook("b", f ? b & -9 : b | 8, "assign");
      m != b && (f = cc11001100_hook("f", l, "assign"), Object.isFrozen(f) && (f = cc11001100_hook("f", Array.prototype.slice.call(f), "assign")), Fc(f, b), l = cc11001100_hook("l", f, "assign"));
      r !== l && ad(a, c, l, d);
      (g || 1 === e && k) && Cc(h, 18);
      (g || 1 === e) && Object.freeze(h);
      return h;
    }
    if (3 === e) return h;
    g || ((d = cc11001100_hook("d", Object.isFrozen(h), "assign"), 1 !== e || d) ? 2 === e && d && (h = cc11001100_hook("h", Array.prototype.slice.call(h), "assign"), a.l[c] = cc11001100_hook("a.l[c]", h, "assign")) : Object.freeze(h));
    return h;
  }
  function G(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", Ec(a.N), "var-init"),
      e = cc11001100_hook("e", !!(d & 2), "var-init");
    b = cc11001100_hook("b", qd(a, b, c, void 0, e ? 1 : 2, d), "assign");
    a = cc11001100_hook("a", dd(a, c, 3, void 0, e), "assign");
    if (!(e || Ec(a) & 8)) {
      for (e = cc11001100_hook("e", 0, "assign"); e < b.length; e++) c = cc11001100_hook("c", b[e], "assign"), d = cc11001100_hook("d", pd(c), "assign"), c !== d && (b[e] = cc11001100_hook("b[e]", d, "assign"), a[e] = cc11001100_hook("a[e]", d.N, "assign"));
      Cc(a, 8);
    }
    return b;
  }
  function rd(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Qc(a);
    null == c && (c = cc11001100_hook("c", void 0, "assign"));
    return ad(a, b, c);
  }
  function sd(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Qc(a);
    null == d && (d = cc11001100_hook("d", void 0, "assign"));
    return kd(a, b, c, d);
  }
  function td(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Qc(a);
    var e = cc11001100_hook("e", null == c ? Pc : Gc([]), "var-init");
    if (null != c) {
      var f = cc11001100_hook("f", !!c.length, "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"); g < c.length; g++) {
        const h = cc11001100_hook("h", c[g], "var-init");
        f = cc11001100_hook("f", f && !Hc(h.N), "assign");
        e[g] = cc11001100_hook("e[g]", h.N, "assign");
      }
      f = cc11001100_hook("f", (f ? 8 : 0) | 1, "assign");
      g = cc11001100_hook("g", Ec(e), "assign");
      (g & f) !== f && (Object.isFrozen(e) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign")), Fc(e, g | f));
      a.l || (a.l = cc11001100_hook("a.l", {}, "assign"));
      a.l[b] = cc11001100_hook("a.l[b]", c, "assign");
    } else a.l && (a.l[b] = cc11001100_hook("a.l[b]", void 0, "assign"));
    return ad(a, b, e, d);
  }
  function ud(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    var h = cc11001100_hook("h", Ec(a.N), "var-init");
    if (h & 2) throw Error();
    h = cc11001100_hook("h", qd(a, c, b, f, 2, h), "assign");
    c = cc11001100_hook("c", null != d ? d : new c(), "assign");
    a = cc11001100_hook("a", dd(a, b, 2, f, !1), "assign");
    if (g && (0 > e || e > h.length)) throw Error();
    void 0 != e ? (h.splice(e, g, c), a.splice(e, g, c.N)) : (h.push(c), a.push(c.N));
    Hc(c.N) && Dc(a, 8);
  }
  function vd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return hd(w(a, b), 0);
  }
  function wd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a: if (a = cc11001100_hook("a", w(a, b), "assign"), null != a) {
      switch (typeof a) {
        case "string":
          a = cc11001100_hook("a", +a, "assign");
          break a;
        case "number":
          break a;
      }
      a = cc11001100_hook("a", void 0, "assign");
    }
    return a;
  }
  function xd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a: if (a = cc11001100_hook("a", w(a, 1), "assign"), null != a) {
      switch (typeof a) {
        case "string":
          a = cc11001100_hook("a", +a, "assign");
          break a;
        case "number":
          break a;
      }
      a = cc11001100_hook("a", void 0, "assign");
    }
    return a;
  }
  function yd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return hd(w(a, b), 0);
  }
  function zd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return w(a, b);
  }
  function Ad(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return jd(a, b, null == c ? c : !!c, !1);
  }
  function J(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return jd(a, b, c, 0);
  }
  function Bd(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return jd(a, b, c, "");
  }
  function hd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == a ? b : a;
  }
  function K(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return hd(w(a, b), "");
  }
  function Cd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return hd(w(a, b), 0);
  }
  function Dd(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    c = cc11001100_hook("c", md(a, d) === c ? c : -1, "assign");
    return D(a, b, c);
  }
  function Ed(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return jd(a, b, c, 0);
  }
  ;
  let Fd;
  function Gd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Fd = cc11001100_hook("Fd", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    Fd = cc11001100_hook("Fd", void 0, "assign");
    return a;
  }
  ;
  function Hd(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (Ec(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), Rc(a), a;
        } else {
          if (uc(a)) return qc(a);
          if (a instanceof Ac) {
            const b = cc11001100_hook("b", a.j, "var-init");
            return null == b ? "" : "string" === typeof b ? b : a.j = cc11001100_hook("a.j", qc(b), "assign");
          }
        }
    }
    return a;
  }
  ;
  function Id(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", e && 0 == a.length && Ec(a) & 1 ? void 0 : Jd(a, b, c, void 0 !== d, e), "assign");else if (Mc(a)) {
        const f = cc11001100_hook("f", {}, "var-init");
        for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = cc11001100_hook("f[g]", Id(a[g], b, c, d, e), "assign"));
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function Jd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", Ec(a), "var-init");
    d = cc11001100_hook("d", d ? !!(f & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) a[g] = cc11001100_hook("a[g]", Id(a[g], b, c, d, e), "assign");
    c(f, a);
    return a;
  }
  function Kd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.jd === Lc ? a.toJSON() : Hd(a);
  }
  function Ld(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && Rc(b);
  }
  ;
  function Md(a, b, c = Kc) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if (oc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = cc11001100_hook("d", Ec(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return Fc(a, d | 18), a;
        a = cc11001100_hook("a", Jd(a, Md, d & 4 ? Kc : c, !0, !1), "assign");
        b = cc11001100_hook("b", Ec(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.jd === Lc ? Nd(a) : a;
    }
  }
  function Od(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    (a = cc11001100_hook("a", a.l && a.l[c], "assign")) ? (d = cc11001100_hook("d", Ec(a), "assign"), d & 2 ? d = cc11001100_hook("d", a, "assign") : (f = cc11001100_hook("f", Cb(a, Nd), "assign"), Kc(d, f), Object.freeze(f), d = cc11001100_hook("d", f, "assign")), td(b, c, d, e)) : x(b, c, Md(d, f, g), e);
  }
  function Nd(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (Hc(a.N)) return a;
    a = cc11001100_hook("a", Pd(a, !0), "assign");
    Cc(a.N, 18);
    return a;
  }
  function Pd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.N, "var-init");
    var d = cc11001100_hook("d", Ic([]), "var-init"),
      e = cc11001100_hook("e", a.constructor.messageId, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.sa, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (Ec(c) & 128) && Rc(d);
    b = cc11001100_hook("b", b || Hc(a.N) ? Kc : Jc, "assign");
    d = cc11001100_hook("d", Gd(a.constructor, d), "assign");
    a.pe && (d.pe = cc11001100_hook("d.pe", a.pe.slice(), "assign"));
    f = cc11001100_hook("f", !!(Ec(c) & 16), "assign");
    const g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Od(a, d, h - a.Ha, c[h], !1, f, b);
    if (e) for (const h in e) Od(a, d, +h, e[h], !0, f, b);
    return d;
  }
  function pd(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Hc(a.N)) return a;
    const b = cc11001100_hook("b", Pd(a, !1), "var-init");
    b.C = cc11001100_hook("b.C", a, "assign");
    return b;
  }
  ;
  function Qd(a) {
    cc11001100_hook("a", a, "function-parameter");
    Nc = cc11001100_hook("Nc", !0, "assign");
    try {
      return JSON.stringify(a.toJSON(), Rd);
    } finally {
      Nc = cc11001100_hook("Nc", !1, "assign");
    }
  }
  var L = cc11001100_hook("L", class {
    constructor(a, b, c) {
      null == a && (a = cc11001100_hook("a", Fd, "assign"));
      Fd = cc11001100_hook("Fd", void 0, "assign");
      var d = cc11001100_hook("d", this.constructor.messageId, "var-init");
      if (null == a) {
        a = cc11001100_hook("a", d ? [d] : [], "assign");
        var e = cc11001100_hook("e", !0, "var-init");
        Fc(a, 48);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (d && d !== a[0]) throw Error();
        var f = cc11001100_hook("f", Cc(a, 0) | 32, "var-init");
        e = cc11001100_hook("e", 0 !== (16 & f), "assign");
        if (128 & f) throw Error();
        Fc(a, f);
      }
      this.Ha = cc11001100_hook("this.Ha", d ? 0 : -1, "assign");
      this.l = cc11001100_hook("this.l", void 0, "assign");
      this.N = cc11001100_hook("this.N", a, "assign");
      a: {
        f = cc11001100_hook("f", this.N.length, "assign");
        d = cc11001100_hook("d", f - 1, "assign");
        if (f && (f = cc11001100_hook("f", this.N[d], "assign"), Mc(f))) {
          this.sa = cc11001100_hook("this.sa", f, "assign");
          this.m = cc11001100_hook("this.m", d - this.Ha, "assign");
          break a;
        }
        void 0 !== b && -1 < b ? (this.m = cc11001100_hook("this.m", Math.max(b, d + 1 - this.Ha), "assign"), this.sa = cc11001100_hook("this.sa", void 0, "assign")) : this.m = cc11001100_hook("this.m", Number.MAX_VALUE, "assign");
      }
      if (this.sa && "g" in this.sa) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c) {
        b = cc11001100_hook("b", e && !0, "assign");
        e = cc11001100_hook("e", this.m, "assign");
        let h;
        for (d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) if (f = cc11001100_hook("f", c[d], "assign"), f < e) {
          f += cc11001100_hook("f", this.Ha, "assign");
          var g = cc11001100_hook("g", a[f], "var-init");
          g ? Sd(g, b) : a[f] = cc11001100_hook("a[f]", Pc, "assign");
        } else h || (h = cc11001100_hook("h", $c(this), "assign")), (g = cc11001100_hook("g", h[f], "assign")) ? Sd(g, b) : h[f] = cc11001100_hook("h[f]", Pc, "assign");
      }
    }
    toJSON() {
      const a = cc11001100_hook("a", this.N, "var-init");
      var b;
      Nc ? b = cc11001100_hook("b", a, "assign") : b = cc11001100_hook("b", Jd(a, Kd, Ld, void 0, !1), "assign");
      return b;
    }
  }, "var-init");
  function Sd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", Ec(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && Fc(a, c | d);
    }
  }
  L.prototype.jd = cc11001100_hook("L.prototype.jd", Lc, "assign");
  function Rd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Hd(b);
  }
  ;
  const Td = cc11001100_hook("Td", a => null !== a && void 0 !== a, "var-init");
  let Ud = cc11001100_hook("Ud", void 0, "var-init");
  function Vd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Ud, "var-init");
    Ud = cc11001100_hook("Ud", void 0, "assign");
    if (!b(a)) throw b = cc11001100_hook("b", c ? c() + "\n" : "", "assign"), Error(b + String(a));
  }
  ;
  function Wd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", Gd(a, Ic(b)), "assign");
      }
      return b;
    };
  }
  ;
  function Xd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.l = cc11001100_hook("this.l", a === Yd && b || "", "assign");
    this.m = cc11001100_hook("this.m", Zd, "assign");
  }
  Xd.prototype.za = cc11001100_hook("Xd.prototype.za", !0, "assign");
  Xd.prototype.j = cc11001100_hook("Xd.prototype.j", function () {
    return this.l;
  }, "assign");
  function ae(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Xd && a.constructor === Xd && a.m === Zd ? a.l : "type_error:Const";
  }
  function be(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Xd(Yd, a);
  }
  var Zd = cc11001100_hook("Zd", {}, "var-init"),
    Yd = cc11001100_hook("Yd", {}, "var-init");
  var ce = cc11001100_hook("ce", be("https://tpc.googlesyndication.com/sodar/%{basename}.js"), "var-init");
  function de() {
    return !1;
  }
  function ee() {
    return !0;
  }
  function fe(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", arguments, "var-init"),
      c = cc11001100_hook("c", b.length, "var-init");
    return function () {
      for (let d = cc11001100_hook("d", 0, "var-init"); d < c; d++) if (!b[d].apply(this, arguments)) return !1;
      return !0;
    };
  }
  function ge(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function he(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", !1, "var-init"),
      c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }
  function ie(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", a, "var-init");
    return function () {
      if (b) {
        const c = cc11001100_hook("c", b, "var-init");
        b = cc11001100_hook("b", null, "assign");
        c();
      }
    };
  }
  function je(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init");
    return function (d) {
      t.clearTimeout(c);
      const e = cc11001100_hook("e", arguments, "var-init");
      c = cc11001100_hook("c", t.setTimeout(function () {
        a.apply(b, e);
      }, 63), "assign");
    };
  }
  function ke(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    function c() {
      e = cc11001100_hook("e", t.setTimeout(d, 63), "assign");
      let h = cc11001100_hook("h", g, "var-init");
      g = cc11001100_hook("g", [], "assign");
      a.apply(b, h);
    }
    function d() {
      e = cc11001100_hook("e", 0, "assign");
      f && (f = cc11001100_hook("f", !1, "assign"), c());
    }
    let e = cc11001100_hook("e", 0, "var-init"),
      f = cc11001100_hook("f", !1, "var-init"),
      g = cc11001100_hook("g", [], "var-init");
    return function (h) {
      g = cc11001100_hook("g", arguments, "assign");
      e ? f = cc11001100_hook("f", !0, "assign") : c();
    };
  }
  ;
  var le = cc11001100_hook("le", {
      passive: cc11001100_hook("passive", !0, "object-key-init")
    }, "var-init"),
    me = cc11001100_hook("me", he(function () {
      let a = cc11001100_hook("a", !1, "var-init");
      try {
        const b = cc11001100_hook("b", Object.defineProperty({}, "passive", {
          get: function () {
            a = cc11001100_hook("a", !0, "assign");
          }
        }), "var-init");
        t.addEventListener("test", null, b);
      } catch (b) {}
      return a;
    }), "var-init");
  function ne(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.passive && me() ? a : a.capture || !1 : !1;
  }
  function oe(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return a.addEventListener ? (a.addEventListener(b, c, ne(d)), !0) : !1;
  }
  function pe(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return a.removeEventListener ? (a.removeEventListener(b, c, ne(d)), !0) : !1;
  }
  ;
  function qe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = cc11001100_hook("c[d]", a[d], "assign"));
    return c;
  }
  function re(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", se, "var-init");
    a: {
      for (const c in b) if (b[c] == a) {
        a = cc11001100_hook("a", !0, "assign");
        break a;
      }
      a = cc11001100_hook("a", !1, "assign");
    }
    return a;
  }
  function te(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    let c = cc11001100_hook("c", 0, "var-init");
    for (const d in a) b[c++] = cc11001100_hook("b[c++]", a[d], "assign");
    return b;
  }
  function ue(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    for (const c in a) b[c] = cc11001100_hook("b[c]", a[c], "assign");
    return b;
  }
  const ve = cc11001100_hook("ve", "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), "var-init");
  function we(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c, d;
    for (let e = cc11001100_hook("e", 1, "var-init"); e < arguments.length; e++) {
      d = cc11001100_hook("d", arguments[e], "assign");
      for (c in d) a[c] = cc11001100_hook("a[c]", d[c], "assign");
      for (let f = cc11001100_hook("f", 0, "var-init"); f < ve.length; f++) c = cc11001100_hook("c", ve[f], "assign"), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = cc11001100_hook("a[c]", d[c], "assign"));
    }
  }
  ;
  var xe = cc11001100_hook("xe", {
    area: cc11001100_hook("area", !0, "object-key-init"),
    base: cc11001100_hook("base", !0, "object-key-init"),
    br: cc11001100_hook("br", !0, "object-key-init"),
    col: cc11001100_hook("col", !0, "object-key-init"),
    command: cc11001100_hook("command", !0, "object-key-init"),
    embed: cc11001100_hook("embed", !0, "object-key-init"),
    hr: cc11001100_hook("hr", !0, "object-key-init"),
    img: cc11001100_hook("img", !0, "object-key-init"),
    input: cc11001100_hook("input", !0, "object-key-init"),
    keygen: cc11001100_hook("keygen", !0, "object-key-init"),
    link: cc11001100_hook("link", !0, "object-key-init"),
    meta: cc11001100_hook("meta", !0, "object-key-init"),
    param: cc11001100_hook("param", !0, "object-key-init"),
    source: cc11001100_hook("source", !0, "object-key-init"),
    track: cc11001100_hook("track", !0, "object-key-init"),
    wbr: cc11001100_hook("wbr", !0, "object-key-init")
  }, "var-init");
  var ye;
  function ze() {
    if (void 0 === ye) {
      var a = cc11001100_hook("a", null, "var-init"),
        b = cc11001100_hook("b", t.trustedTypes, "var-init");
      if (b && b.createPolicy) {
        try {
          a = cc11001100_hook("a", b.createPolicy("goog#html", {
            createHTML: cc11001100_hook("createHTML", Ja, "object-key-init"),
            createScript: cc11001100_hook("createScript", Ja, "object-key-init"),
            createScriptURL: cc11001100_hook("createScriptURL", Ja, "object-key-init")
          }), "assign");
        } catch (c) {
          t.console && t.console.error(c.message);
        }
        ye = cc11001100_hook("ye", a, "assign");
      } else ye = cc11001100_hook("ye", a, "assign");
    }
    return ye;
  }
  ;
  const Ae = cc11001100_hook("Ae", {}, "var-init");
  function Be(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Ce && a.constructor === Ce ? a.l : "type_error:SafeScript";
  }
  class Ce {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", b === Ae ? a : "", "assign");
      this.za = cc11001100_hook("this.za", !0, "assign");
    }
    toString() {
      return this.l.toString();
    }
    j() {
      return this.l.toString();
    }
  }
  ;
  var Ee = cc11001100_hook("Ee", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", b === De ? a : "", "assign");
    }
    toString() {
      return this.l + "";
    }
  }, "var-init");
  Ee.prototype.za = cc11001100_hook("Ee.prototype.za", !0, "assign");
  Ee.prototype.j = cc11001100_hook("Ee.prototype.j", function () {
    return this.l.toString();
  }, "assign");
  function Fe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", Ge.exec(He(a).toString()), "assign");
    var c = cc11001100_hook("c", a[3] || "", "var-init");
    return Ie(a[1] + Je("?", a[2] || "", b) + Je("#", c));
  }
  function He(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Ee && a.constructor === Ee ? a.l : "type_error:TrustedResourceUrl";
  }
  function Ke(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", ae(a), "var-init");
    if (!Le.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
    a = cc11001100_hook("a", c.replace(Me, function (d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
      d = cc11001100_hook("d", b[e], "assign");
      return d instanceof Xd ? ae(d) : encodeURIComponent(String(d));
    }), "assign");
    return Ie(a);
  }
  var Me = cc11001100_hook("Me", /%{(\w+)}/g, "var-init"),
    Le = cc11001100_hook("Le", RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"), "var-init"),
    Ge = cc11001100_hook("Ge", /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, "var-init"),
    De = cc11001100_hook("De", {}, "var-init");
  function Ie(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ze(), "var-init");
    a = cc11001100_hook("a", b ? b.createScriptURL(a) : a, "assign");
    return new Ee(a, De);
  }
  function Je(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c) if (Object.prototype.hasOwnProperty.call(c, d)) {
      var e = cc11001100_hook("e", c[d], "var-init");
      e = cc11001100_hook("e", Array.isArray(e) ? e : [e], "assign");
      for (var f = cc11001100_hook("f", 0, "var-init"); f < e.length; f++) {
        var g = cc11001100_hook("g", e[f], "var-init");
        null != g && (b || (b = cc11001100_hook("b", a, "assign")), b += cc11001100_hook("b", (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)), "assign"));
      }
    }
    return b;
  }
  ;
  var Oe = cc11001100_hook("Oe", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", b === Ne ? a : "", "assign");
    }
    toString() {
      return this.l.toString();
    }
  }, "var-init");
  Oe.prototype.za = cc11001100_hook("Oe.prototype.za", !0, "assign");
  Oe.prototype.j = cc11001100_hook("Oe.prototype.j", function () {
    return this.l.toString();
  }, "assign");
  function Pe(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Oe && a.constructor === Oe ? a.l : "type_error:SafeUrl";
  }
  var Qe = cc11001100_hook("Qe", /^data:(.*);base64,[a-z0-9+\/]+=*$/i, "var-init"),
    Re = cc11001100_hook("Re", /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, "var-init");
  function Se(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof Oe) return a;
    a = cc11001100_hook("a", "object" == typeof a && a.za ? a.j() : String(a), "assign");
    Re.test(a) ? a = cc11001100_hook("a", new Oe(a, Ne), "assign") : (a = cc11001100_hook("a", String(a).replace(/(%0A|%0D)/g, ""), "assign"), a = cc11001100_hook("a", a.match(Qe) ? new Oe(a, Ne) : null, "assign"));
    return a;
  }
  var Ne = cc11001100_hook("Ne", {}, "var-init"),
    Te = cc11001100_hook("Te", new Oe("about:invalid#zClosurez", Ne), "var-init");
  const Ue = cc11001100_hook("Ue", {}, "var-init");
  function Ve(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof We && a.constructor === We ? a.l : "type_error:SafeStyle";
  }
  function Xe(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", "", "var-init");
    for (let c in a) if (Object.prototype.hasOwnProperty.call(a, c)) {
      if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
      let d = cc11001100_hook("d", a[c], "var-init");
      null != d && (d = cc11001100_hook("d", Array.isArray(d) ? d.map(Ye).join(" ") : Ye(d), "assign"), b += cc11001100_hook("b", `${c}:${d};`, "assign"));
    }
    return b ? new We(b, Ue) : Ze;
  }
  class We {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", b === Ue ? a : "", "assign");
      this.za = cc11001100_hook("this.za", !0, "assign");
    }
    j() {
      return this.l;
    }
    toString() {
      return this.l.toString();
    }
  }
  var Ze = cc11001100_hook("Ze", new We("", Ue), "var-init");
  function Ye(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof Oe) return 'url("' + Pe(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    if (a instanceof Xd) a = cc11001100_hook("a", ae(a), "assign");else {
      a = cc11001100_hook("a", String(a), "assign");
      var b = cc11001100_hook("b", a.replace($e, "$1").replace($e, "$1").replace(af, "url"), "var-init");
      if (bf.test(b)) {
        if (b = cc11001100_hook("b", !cf.test(a), "assign")) {
          let c = cc11001100_hook("c", b = cc11001100_hook("b", !0, "assign"), "var-init");
          for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; d++) {
            const e = cc11001100_hook("e", a.charAt(d), "var-init");
            "'" == e && c ? b = cc11001100_hook("b", !b, "assign") : '"' == e && b && (c = cc11001100_hook("c", !c, "assign"));
          }
          b = cc11001100_hook("b", b && c && df(a), "assign");
        }
        a = cc11001100_hook("a", b ? ef(a) : "zClosurez", "assign");
      } else a = cc11001100_hook("a", "zClosurez", "assign");
    }
    if (/[{;}]/.test(a)) throw new Oa("Value does not allow [{;}], got: %s.", [a]);
    return a;
  }
  function df(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", !0, "var-init");
    const c = cc11001100_hook("c", /^[-_a-zA-Z0-9]$/, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; d++) {
      const e = cc11001100_hook("e", a.charAt(d), "var-init");
      if ("]" == e) {
        if (b) return !1;
        b = cc11001100_hook("b", !0, "assign");
      } else if ("[" == e) {
        if (!b) return !1;
        b = cc11001100_hook("b", !1, "assign");
      } else if (!b && !c.test(e)) return !1;
    }
    return b;
  }
  const bf = cc11001100_hook("bf", RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"), "var-init"),
    af = cc11001100_hook("af", RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"), "var-init"),
    $e = cc11001100_hook("$e", RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"), "var-init"),
    cf = cc11001100_hook("cf", /\/\*/, "var-init");
  function ef(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.replace(af, (b, c, d, e) => {
      let f = cc11001100_hook("f", "", "var-init");
      d = cc11001100_hook("d", d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
        f = cc11001100_hook("f", h, "assign");
        return k;
      }), "assign");
      b = cc11001100_hook("b", (Se(d) || Te).j(), "assign");
      return c + f + b + f + e;
    });
  }
  ;
  const ff = cc11001100_hook("ff", {}, "var-init");
  function gf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof hf && a.constructor === hf ? a.l : "type_error:SafeStyleSheet";
  }
  class hf {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", b === ff ? a : "", "assign");
      this.za = cc11001100_hook("this.za", !0, "assign");
    }
    toString() {
      return this.l.toString();
    }
    j() {
      return this.l;
    }
  }
  ;
  const jf = cc11001100_hook("jf", {}, "var-init");
  function kf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof lf && a.constructor === lf ? a.l : "type_error:SafeHtml";
  }
  function mf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof lf ? a : nf(Qa("object" == typeof a && a.za ? a.j() : String(a)));
  }
  function nf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ze(), "var-init");
    a = cc11001100_hook("a", b ? b.createHTML(a) : a, "assign");
    return new lf(a, jf);
  }
  function of(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", String(a), "var-init");
    if (!pf.test(d)) throw Error("");
    if (d.toUpperCase() in qf) throw Error("");
    return rf(String(a), b, c);
  }
  function rf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", "", "var-init");
    if (b) for (let g in b) if (Object.prototype.hasOwnProperty.call(b, g)) {
      if (!pf.test(g)) throw Error("");
      var e = cc11001100_hook("e", b[g], "var-init");
      if (null != e) {
        var f = cc11001100_hook("f", g, "var-init");
        if (e instanceof Xd) e = cc11001100_hook("e", ae(e), "assign");else if ("style" == f.toLowerCase()) {
          if (!ua(e)) throw Error("");
          e instanceof We || (e = cc11001100_hook("e", Xe(e), "assign"));
          e = cc11001100_hook("e", Ve(e), "assign");
        } else {
          if (/^on/i.test(f)) throw Error("");
          if (f.toLowerCase() in sf) if (e instanceof Ee) e = cc11001100_hook("e", He(e).toString(), "assign");else if (e instanceof Oe) e = cc11001100_hook("e", Pe(e), "assign");else if ("string" === typeof e) e = cc11001100_hook("e", (Se(e) || Te).j(), "assign");else throw Error("");
        }
        e.za && (e = cc11001100_hook("e", e.j(), "assign"));
        f = cc11001100_hook("f", `${f}="` + Qa(String(e)) + '"', "assign");
        d += cc11001100_hook("d", " " + f, "assign");
      }
    }
    b = cc11001100_hook("b", `<${a}` + d, "assign");
    null == c ? c = cc11001100_hook("c", [], "assign") : Array.isArray(c) || (c = cc11001100_hook("c", [c], "assign"));
    !0 === xe[a.toLowerCase()] ? b += cc11001100_hook("b", ">", "assign") : (c = cc11001100_hook("c", tf(c), "assign"), b += cc11001100_hook("b", ">" + kf(c).toString() + "</" + a + ">", "assign"));
    return nf(b);
  }
  function uf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", mf(vf), "var-init"),
      c = cc11001100_hook("c", [], "var-init"),
      d = cc11001100_hook("d", e => {
        Array.isArray(e) ? e.forEach(d) : (e = cc11001100_hook("e", mf(e), "assign"), c.push(kf(e).toString()));
      }, "var-init");
    a.forEach(d);
    return nf(c.join(kf(b).toString()));
  }
  function tf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return uf(Array.prototype.slice.call(arguments));
  }
  class lf {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", b === jf ? a : "", "assign");
      this.za = cc11001100_hook("this.za", !0, "assign");
    }
    j() {
      return this.l.toString();
    }
    toString() {
      return this.l.toString();
    }
  }
  const pf = cc11001100_hook("pf", /^[a-zA-Z0-9-]+$/, "var-init"),
    sf = cc11001100_hook("sf", {
      action: cc11001100_hook("action", !0, "object-key-init"),
      cite: cc11001100_hook("cite", !0, "object-key-init"),
      data: cc11001100_hook("data", !0, "object-key-init"),
      formaction: cc11001100_hook("formaction", !0, "object-key-init"),
      href: cc11001100_hook("href", !0, "object-key-init"),
      manifest: cc11001100_hook("manifest", !0, "object-key-init"),
      poster: cc11001100_hook("poster", !0, "object-key-init"),
      src: cc11001100_hook("src", !0, "object-key-init")
    }, "var-init"),
    qf = cc11001100_hook("qf", {
      APPLET: cc11001100_hook("APPLET", !0, "object-key-init"),
      BASE: cc11001100_hook("BASE", !0, "object-key-init"),
      EMBED: cc11001100_hook("EMBED", !0, "object-key-init"),
      IFRAME: cc11001100_hook("IFRAME", !0, "object-key-init"),
      LINK: cc11001100_hook("LINK", !0, "object-key-init"),
      MATH: cc11001100_hook("MATH", !0, "object-key-init"),
      META: cc11001100_hook("META", !0, "object-key-init"),
      OBJECT: cc11001100_hook("OBJECT", !0, "object-key-init"),
      SCRIPT: cc11001100_hook("SCRIPT", !0, "object-key-init"),
      STYLE: cc11001100_hook("STYLE", !0, "object-key-init"),
      SVG: cc11001100_hook("SVG", !0, "object-key-init"),
      TEMPLATE: cc11001100_hook("TEMPLATE", !0, "object-key-init")
    }, "var-init");
  var wf = cc11001100_hook("wf", nf("<!DOCTYPE html>"), "var-init"),
    vf = cc11001100_hook("vf", new lf(t.trustedTypes && t.trustedTypes.emptyHTML || "", jf), "var-init"),
    xf = cc11001100_hook("xf", nf("<br>"), "var-init"); /* 
                                                        SPDX-License-Identifier: Apache-2.0 
                                                        */
  function yf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a: {
      try {
        var b = cc11001100_hook("b", new URL(a), "var-init");
      } catch (c) {
        b = cc11001100_hook("b", "https:", "assign");
        break a;
      }
      b = cc11001100_hook("b", b.protocol, "assign");
    }
    if ("javascript:" !== b) return a;
  }
  ;
  function zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Af(Bf) || Te, "var-init");
    b = cc11001100_hook("b", b instanceof Oe ? Pe(b) : yf(b), "assign");
    void 0 !== b && (a.href = cc11001100_hook("a.href", b, "assign"));
  }
  ;
  function Cf(a, b = `unexpected value ${a}!`) {
    cc11001100_hook("a", a, "function-parameter");
    throw Error(b);
  }
  ;
  const Df = cc11001100_hook("Df", "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "), "var-init");
  function Ef(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (b instanceof Ee) a.href = cc11001100_hook("a.href", He(b).toString(), "assign");else {
      if (-1 === Df.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
      b = cc11001100_hook("b", b instanceof Oe ? Pe(b) : yf(b), "assign");
      if (void 0 === b) return;
      a.href = cc11001100_hook("a.href", b, "assign");
    }
    a.rel = cc11001100_hook("a.rel", c, "assign");
  }
  ;
  function Ff(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    (b = cc11001100_hook("b", (b = cc11001100_hook("b", (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]"), "assign")) ? b.nonce || b.getAttribute("nonce") || "" : "", "assign")) && a.setAttribute("nonce", b);
  }
  function Gf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.src = cc11001100_hook("a.src", He(b), "assign");
    Ff(a);
  }
  ;
  class Hf {
    constructor(a) {
      this.Zf = cc11001100_hook("this.Zf", a, "assign");
    }
  }
  function If(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Hf(b => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const Bf = cc11001100_hook("Bf", [If("data"), If("http"), If("https"), If("mailto"), If("ftp"), new Hf(a => /^[^:]*([/?#]|$)/.test(a))], "var-init");
  function Af(a = Bf) {
    for (let b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) {
      const c = cc11001100_hook("c", a[b], "var-init");
      if (c instanceof Hf && c.Zf("#")) return new Oe("#", Ne);
    }
  }
  ;
  function Jf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", window, "var-init");
    new Promise((c, d) => {
      function e() {
        f.onload = cc11001100_hook("f.onload", null, "assign");
        f.onerror = cc11001100_hook("f.onerror", null, "assign");
        f.parentElement?.removeChild(f);
      }
      const f = cc11001100_hook("f", b.document.createElement("script"), "var-init");
      f.onload = cc11001100_hook("f.onload", () => {
        e();
        c();
      }, "assign");
      f.onerror = cc11001100_hook("f.onerror", () => {
        e();
        d(void 0);
      }, "assign");
      f.type = cc11001100_hook("f.type", "text/javascript", "assign");
      Gf(f, a);
      "complete" !== b.document.readyState ? oe(b, "load", () => {
        b.document.body.appendChild(f);
      }) : b.document.body.appendChild(f);
    });
  }
  ;
  async function Kf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.lb}`, "var-init");
    let c = cc11001100_hook("c", void 0, "var-init");
    try {
      c = cc11001100_hook("c", await Lf(b), "assign");
    } catch (g) {}
    if (c) {
      b = cc11001100_hook("b", a.Db || c.sodar_query_id, "assign");
      var d = cc11001100_hook("d", void 0 !== c.rc_enable && a.m ? c.rc_enable : "n", "var-init"),
        e = cc11001100_hook("e", void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms, "var-init"),
        f = cc11001100_hook("f", void 0 === c.is_gen_204 ? "1" : c.is_gen_204, "var-init");
      if (b && c.bg_hash_basename && c.bg_binary) return {
        context: cc11001100_hook("context", a.v, "object-key-init"),
        vf: cc11001100_hook("vf", c.bg_hash_basename, "object-key-init"),
        uf: cc11001100_hook("uf", c.bg_binary, "object-key-init"),
        bg: cc11001100_hook("bg", a.j + "_" + a.l, "object-key-init"),
        Db: cc11001100_hook("Db", b, "object-key-init"),
        lb: cc11001100_hook("lb", a.lb, "object-key-init"),
        rc: cc11001100_hook("rc", d, "object-key-init"),
        Ec: cc11001100_hook("Ec", e, "object-key-init"),
        oc: cc11001100_hook("oc", f, "object-key-init")
      };
    }
  }
  let Lf = cc11001100_hook("Lf", a => new Promise((b, c) => {
    const d = cc11001100_hook("d", new XMLHttpRequest(), "var-init");
    d.onreadystatechange = cc11001100_hook("d.onreadystatechange", () => {
      d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c());
    }, "assign");
    d.open("GET", a, !0);
    d.send();
  }), "var-init");
  async function Mf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", await Kf(a), "var-init");
    if (b) {
      a = cc11001100_hook("a", window, "assign");
      let c = cc11001100_hook("c", a.GoogleGcLKhOms, "var-init");
      c && "function" === typeof c.push || (c = cc11001100_hook("c", a.GoogleGcLKhOms = cc11001100_hook("a.GoogleGcLKhOms", [], "assign"), "assign"));
      c.push({
        _ctx_: cc11001100_hook("_ctx_", b.context, "object-key-init"),
        _bgv_: cc11001100_hook("_bgv_", b.vf, "object-key-init"),
        _bgp_: cc11001100_hook("_bgp_", b.uf, "object-key-init"),
        _li_: cc11001100_hook("_li_", b.bg, "object-key-init"),
        _jk_: cc11001100_hook("_jk_", b.Db, "object-key-init"),
        _st_: cc11001100_hook("_st_", b.lb, "object-key-init"),
        _rc_: cc11001100_hook("_rc_", b.rc, "object-key-init"),
        _dl_: cc11001100_hook("_dl_", b.Ec, "object-key-init"),
        _g2_: cc11001100_hook("_g2_", b.oc, "object-key-init")
      });
      if (b = cc11001100_hook("b", a.GoogleDX5YKUSk, "assign")) a.GoogleDX5YKUSk = cc11001100_hook("a.GoogleDX5YKUSk", void 0, "assign"), b[1]();
      a = cc11001100_hook("a", Ke(ce, {
        basename: cc11001100_hook("basename", "sodar2", "object-key-init")
      }), "assign");
      Jf(a);
    }
  }
  ;
  function Nf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Bd(a, 1, b);
  }
  var Of = cc11001100_hook("Of", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return K(this, 1);
    }
  }, "var-init");
  function Pf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return rd(a, 5, b);
  }
  function Qf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Bd(a, 3, b);
  }
  var Rf = cc11001100_hook("Rf", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  function Sf(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a) {
      case 1:
        return "gda";
      case 2:
        return "gpt";
      case 3:
        return "ima";
      case 4:
        return "pal";
      case 5:
        return "xfad";
      case 6:
        return "dv3n";
      case 7:
        return "spa";
      default:
        return "unk";
    }
  }
  var Tf = cc11001100_hook("Tf", class {
      constructor(a) {
        this.j = cc11001100_hook("this.j", a.l, "assign");
        this.l = cc11001100_hook("this.l", a.m, "assign");
        this.v = cc11001100_hook("this.v", a.v, "assign");
        this.Db = cc11001100_hook("this.Db", a.Db, "assign");
        this.win = cc11001100_hook("this.win", a.P(), "assign");
        this.lb = cc11001100_hook("this.lb", a.lb, "assign");
        this.rc = cc11001100_hook("this.rc", a.rc, "assign");
        this.Ec = cc11001100_hook("this.Ec", a.Ec, "assign");
        this.oc = cc11001100_hook("this.oc", a.oc, "assign");
        this.m = cc11001100_hook("this.m", a.j, "assign");
      }
    }, "var-init"),
    Uf = cc11001100_hook("Uf", class {
      constructor(a, b, c) {
        this.l = cc11001100_hook("this.l", a, "assign");
        this.m = cc11001100_hook("this.m", b, "assign");
        this.v = cc11001100_hook("this.v", c, "assign");
        this.win = cc11001100_hook("this.win", window, "assign");
        this.lb = cc11001100_hook("this.lb", "env", "assign");
        this.rc = cc11001100_hook("this.rc", "n", "assign");
        this.Ec = cc11001100_hook("this.Ec", "0", "assign");
        this.oc = cc11001100_hook("this.oc", "1", "assign");
        this.j = cc11001100_hook("this.j", !0, "assign");
      }
      P() {
        return this.win;
      }
      build() {
        return new Tf(this);
      }
    }, "var-init");
  var Wf = cc11001100_hook("Wf", class extends L {
      constructor(a) {
        super(a, -1, Vf);
      }
    }, "var-init"),
    Vf = cc11001100_hook("Vf", [2, 3], "var-init");
  function Xf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  function Yf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 2, b);
  }
  function Zf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 3, b);
  }
  function $f(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 4, b);
  }
  var ag = cc11001100_hook("ag", class extends L {
    constructor() {
      super();
    }
    getVersion() {
      return w(this, 5);
    }
  }, "var-init");
  var cg = cc11001100_hook("cg", class extends L {
      constructor(a) {
        super(a, -1, bg);
      }
    }, "var-init"),
    bg = cc11001100_hook("bg", [5], "var-init");
  function dg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return G(a, cg, 15);
  }
  var fg = cc11001100_hook("fg", class extends L {
      constructor(a) {
        super(a, -1, eg);
      }
    }, "var-init"),
    gg = cc11001100_hook("gg", Wd(fg), "var-init"),
    eg = cc11001100_hook("eg", [2, 15], "var-init");
  var hg = cc11001100_hook("hg", window, "var-init");
  var ig = cc11001100_hook("ig", {
    Zg: cc11001100_hook("Zg", "google_adtest", "object-key-init"),
    fh: cc11001100_hook("fh", "google_ad_client", "object-key-init"),
    gh: cc11001100_hook("gh", "google_ad_format", "object-key-init"),
    ih: cc11001100_hook("ih", "google_ad_height", "object-key-init"),
    yh: cc11001100_hook("yh", "google_ad_width", "object-key-init"),
    mh: cc11001100_hook("mh", "google_ad_layout", "object-key-init"),
    oh: cc11001100_hook("oh", "google_ad_layout_key", "object-key-init"),
    qh: cc11001100_hook("qh", "google_ad_output", "object-key-init"),
    rh: cc11001100_hook("rh", "google_ad_region", "object-key-init"),
    uh: cc11001100_hook("uh", "google_ad_slot", "object-key-init"),
    wh: cc11001100_hook("wh", "google_ad_type", "object-key-init"),
    xh: cc11001100_hook("xh", "google_ad_url", "object-key-init"),
    zh: cc11001100_hook("zh", "google_allow_expandable_ads", "object-key-init"),
    Rh: cc11001100_hook("Rh", "google_analytics_domain_name", "object-key-init"),
    Sh: cc11001100_hook("Sh", "google_analytics_uacct", "object-key-init"),
    gi: cc11001100_hook("gi", "google_container_id", "object-key-init"),
    ti: cc11001100_hook("ti", "google_gl", "object-key-init"),
    Ni: cc11001100_hook("Ni", "google_enable_ose", "object-key-init"),
    Xi: cc11001100_hook("Xi", "google_full_width_responsive", "object-key-init"),
    Yj: cc11001100_hook("Yj", "google_rl_filtering", "object-key-init"),
    Xj: cc11001100_hook("Xj", "google_rl_mode", "object-key-init"),
    Zj: cc11001100_hook("Zj", "google_rt", "object-key-init"),
    Wj: cc11001100_hook("Wj", "google_rl_dest_url", "object-key-init"),
    Cj: cc11001100_hook("Cj", "google_max_radlink_len", "object-key-init"),
    Ij: cc11001100_hook("Ij", "google_num_radlinks", "object-key-init"),
    Jj: cc11001100_hook("Jj", "google_num_radlinks_per_unit", "object-key-init"),
    eh: cc11001100_hook("eh", "google_ad_channel", "object-key-init"),
    Bj: cc11001100_hook("Bj", "google_max_num_ads", "object-key-init"),
    Dj: cc11001100_hook("Dj", "google_max_responsive_height", "object-key-init"),
    bi: cc11001100_hook("bi", "google_color_border", "object-key-init"),
    Mi: cc11001100_hook("Mi", "google_enable_content_recommendations", "object-key-init"),
    oi: cc11001100_hook("oi", "google_content_recommendation_ui_type", "object-key-init"),
    ni: cc11001100_hook("ni", "google_source_type", "object-key-init"),
    li: cc11001100_hook("li", "google_content_recommendation_rows_num", "object-key-init"),
    ki: cc11001100_hook("ki", "google_content_recommendation_columns_num", "object-key-init"),
    ji: cc11001100_hook("ji", "google_content_recommendation_ad_positions", "object-key-init"),
    ri: cc11001100_hook("ri", "google_content_recommendation_use_square_imgs", "object-key-init"),
    di: cc11001100_hook("di", "google_color_link", "object-key-init"),
    ci: cc11001100_hook("ci", "google_color_line", "object-key-init"),
    fi: cc11001100_hook("fi", "google_color_url", "object-key-init"),
    ah: cc11001100_hook("ah", "google_ad_block", "object-key-init"),
    th: cc11001100_hook("th", "google_ad_section", "object-key-init"),
    bh: cc11001100_hook("bh", "google_ad_callback", "object-key-init"),
    Yh: cc11001100_hook("Yh", "google_captcha_token", "object-key-init"),
    ei: cc11001100_hook("ei", "google_color_text", "object-key-init"),
    Lh: cc11001100_hook("Lh", "google_alternate_ad_url", "object-key-init"),
    lh: cc11001100_hook("lh", "google_ad_host_tier_id", "object-key-init"),
    Zh: cc11001100_hook("Zh", "google_city", "object-key-init"),
    jh: cc11001100_hook("jh", "google_ad_host", "object-key-init"),
    kh: cc11001100_hook("kh", "google_ad_host_channel", "object-key-init"),
    Mh: cc11001100_hook("Mh", "google_alternate_color", "object-key-init"),
    ai: cc11001100_hook("ai", "google_color_bg", "object-key-init"),
    Oi: cc11001100_hook("Oi", "google_encoding", "object-key-init"),
    Vi: cc11001100_hook("Vi", "google_font_face", "object-key-init"),
    wi: cc11001100_hook("wi", "google_cust_ch", "object-key-init"),
    zi: cc11001100_hook("zi", "google_cust_job", "object-key-init"),
    yi: cc11001100_hook("yi", "google_cust_interests", "object-key-init"),
    xi: cc11001100_hook("xi", "google_cust_id", "object-key-init"),
    Ai: cc11001100_hook("Ai", "google_cust_u_url", "object-key-init"),
    Zi: cc11001100_hook("Zi", "google_hints", "object-key-init"),
    oj: cc11001100_hook("oj", "google_image_size", "object-key-init"),
    Ej: cc11001100_hook("Ej", "google_mtl", "object-key-init"),
    Ek: cc11001100_hook("Ek", "google_cpm", "object-key-init"),
    ii: cc11001100_hook("ii", "google_contents", "object-key-init"),
    Gj: cc11001100_hook("Gj", "google_native_settings_key", "object-key-init"),
    si: cc11001100_hook("si", "google_country", "object-key-init"),
    wk: cc11001100_hook("wk", "google_targeting", "object-key-init"),
    Wi: cc11001100_hook("Wi", "google_font_size", "object-key-init"),
    Di: cc11001100_hook("Di", "google_disable_video_autoplay", "object-key-init"),
    Rk: cc11001100_hook("Rk", "google_video_product_type", "object-key-init"),
    Qk: cc11001100_hook("Qk", "google_video_doc_id", "object-key-init"),
    Pk: cc11001100_hook("Pk", "google_cust_gender", "object-key-init"),
    rk: cc11001100_hook("rk", "google_cust_lh", "object-key-init"),
    qk: cc11001100_hook("qk", "google_cust_l", "object-key-init"),
    Dk: cc11001100_hook("Dk", "google_tfs", "object-key-init"),
    Fj: cc11001100_hook("Fj", "google_native_ad_template", "object-key-init"),
    uj: cc11001100_hook("uj", "google_kw", "object-key-init"),
    tk: cc11001100_hook("tk", "google_tag_for_child_directed_treatment", "object-key-init"),
    uk: cc11001100_hook("uk", "google_tag_for_under_age_of_consent", "object-key-init"),
    ck: cc11001100_hook("ck", "google_region", "object-key-init"),
    vi: cc11001100_hook("vi", "google_cust_criteria", "object-key-init"),
    sh: cc11001100_hook("sh", "google_safe", "object-key-init"),
    ui: cc11001100_hook("ui", "google_ctr_threshold", "object-key-init"),
    dk: cc11001100_hook("dk", "google_resizing_allowed", "object-key-init"),
    fk: cc11001100_hook("fk", "google_resizing_width", "object-key-init"),
    ek: cc11001100_hook("ek", "google_resizing_height", "object-key-init"),
    Ok: cc11001100_hook("Ok", "google_cust_age", "object-key-init"),
    LANGUAGE: cc11001100_hook("LANGUAGE", "google_language", "object-key-init"),
    vj: cc11001100_hook("vj", "google_kw_type", "object-key-init"),
    Qj: cc11001100_hook("Qj", "google_pucrd", "object-key-init"),
    Oj: cc11001100_hook("Oj", "google_page_url", "object-key-init"),
    vk: cc11001100_hook("vk", "google_tag_partner", "object-key-init"),
    jk: cc11001100_hook("jk", "google_restrict_data_processing", "object-key-init"),
    Vg: cc11001100_hook("Vg", "google_adbreak_test", "object-key-init"),
    hh: cc11001100_hook("hh", "google_ad_frequency_hint", "object-key-init"),
    Xg: cc11001100_hook("Xg", "google_admob_interstitial_slot", "object-key-init"),
    Yg: cc11001100_hook("Yg", "google_admob_rewarded_slot", "object-key-init"),
    Wg: cc11001100_hook("Wg", "google_admob_ads_only", "object-key-init"),
    Aj: cc11001100_hook("Aj", "google_max_ad_content_rating", "object-key-init"),
    Sj: cc11001100_hook("Sj", "google_ad_public_floor", "object-key-init"),
    Rj: cc11001100_hook("Rj", "google_ad_private_floor", "object-key-init"),
    Nk: cc11001100_hook("Nk", "google_traffic_source", "object-key-init"),
    nk: cc11001100_hook("nk", "google_shadow_mode", "object-key-init")
  }, "var-init");
  var jg = cc11001100_hook("jg", he(function () {
    var a = cc11001100_hook("a", document.createElement("div"), "var-init"),
      b = cc11001100_hook("b", document.createElement("div"), "var-init");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = cc11001100_hook("b", a.firstChild.firstChild, "assign");
    a.innerHTML = cc11001100_hook("a.innerHTML", kf(vf), "assign");
    return !b.parentElement;
  }), "var-init");
  function kg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (jg()) for (; a.lastChild;) a.removeChild(a.lastChild);
    a.innerHTML = cc11001100_hook("a.innerHTML", kf(b), "assign");
  }
  var lg = cc11001100_hook("lg", /^[\w+/_-]+[=]{0,2}$/, "var-init");
  function mg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", (b || t).document, "assign");
    return b.querySelector ? (a = cc11001100_hook("a", b.querySelector(a), "assign")) && (a = cc11001100_hook("a", a.nonce || a.getAttribute("nonce"), "assign")) && lg.test(a) ? a : "" : "";
  }
  ;
  function ng(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Math.min(Math.max(a, b), c);
  }
  function og(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Array.prototype.reduce.call(arguments, function (b, c) {
      return b + c;
    }, 0);
  }
  function pg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return og.apply(null, arguments) / arguments.length;
  }
  ;
  function qg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.x = cc11001100_hook("this.x", void 0 !== a ? a : 0, "assign");
    this.y = cc11001100_hook("this.y", void 0 !== b ? b : 0, "assign");
  }
  qg.prototype.ceil = cc11001100_hook("qg.prototype.ceil", function () {
    this.x = cc11001100_hook("this.x", Math.ceil(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.ceil(this.y), "assign");
    return this;
  }, "assign");
  qg.prototype.floor = cc11001100_hook("qg.prototype.floor", function () {
    this.x = cc11001100_hook("this.x", Math.floor(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.floor(this.y), "assign");
    return this;
  }, "assign");
  qg.prototype.round = cc11001100_hook("qg.prototype.round", function () {
    this.x = cc11001100_hook("this.x", Math.round(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.round(this.y), "assign");
    return this;
  }, "assign");
  function rg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.width = cc11001100_hook("this.width", a, "assign");
    this.height = cc11001100_hook("this.height", b, "assign");
  }
  function sg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1;
  }
  p = cc11001100_hook("p", rg.prototype, "assign");
  p.aspectRatio = cc11001100_hook("p.aspectRatio", function () {
    return this.width / this.height;
  }, "assign");
  p.isEmpty = cc11001100_hook("p.isEmpty", function () {
    return !(this.width * this.height);
  }, "assign");
  p.ceil = cc11001100_hook("p.ceil", function () {
    this.width = cc11001100_hook("this.width", Math.ceil(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.ceil(this.height), "assign");
    return this;
  }, "assign");
  p.floor = cc11001100_hook("p.floor", function () {
    this.width = cc11001100_hook("this.width", Math.floor(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.floor(this.height), "assign");
    return this;
  }, "assign");
  p.round = cc11001100_hook("p.round", function () {
    this.width = cc11001100_hook("this.width", Math.round(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.round(this.height), "assign");
    return this;
  }, "assign");
  function tg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {
      "&amp;": cc11001100_hook("&amp;", "&", "object-key-init"),
      "&lt;": cc11001100_hook("&lt;", "<", "object-key-init"),
      "&gt;": cc11001100_hook("&gt;", ">", "object-key-init"),
      "&quot;": cc11001100_hook("&quot;", '"', "object-key-init")
    }, "var-init");
    let d;
    d = cc11001100_hook("d", b ? b.createElement("div") : t.document.createElement("div"), "assign");
    return a.replace(ug, function (e, f) {
      var g = cc11001100_hook("g", c[e], "var-init");
      if (g) return g;
      "#" == f.charAt(0) && (f = cc11001100_hook("f", Number("0" + f.slice(1)), "assign"), isNaN(f) || (g = cc11001100_hook("g", String.fromCharCode(f), "assign")));
      g || (g = cc11001100_hook("g", nf(e + " "), "assign"), kg(d, g), g = cc11001100_hook("g", d.firstChild.nodeValue.slice(0, -1), "assign"));
      return c[e] = cc11001100_hook("c[e]", g, "assign");
    });
  }
  var ug = cc11001100_hook("ug", /&([^;\s<&]+);?/g, "var-init");
  function vg(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 0, "var-init");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; ++c) b = cc11001100_hook("b", 31 * b + a.charCodeAt(c) >>> 0, "assign");
    return b;
  }
  function wg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function xg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  ;
  function yg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? new zg(Ag(a)) : Na || (Na = cc11001100_hook("Na", new zg(), "assign"));
  }
  function Bg(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.document, "assign");
    a = cc11001100_hook("a", "CSS1Compat" == a.compatMode ? a.documentElement : a.body, "assign");
    return new rg(a.clientWidth, a.clientHeight);
  }
  function Cg(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.scrollingElement ? a.scrollingElement : Xb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement, "var-init");
    a = cc11001100_hook("a", Dg(a), "assign");
    return Tb && a.pageYOffset != b.scrollTop ? new qg(b.scrollLeft, b.scrollTop) : new qg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
  }
  function Dg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.parentWindow || a.defaultView;
  }
  function Eg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    function d(h) {
      cc11001100_hook("h", h, "function-parameter");
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = cc11001100_hook("e", 1, "var-init"); e < c.length; e++) {
      var f = cc11001100_hook("f", c[e], "var-init");
      if (!ta(f) || ua(f) && 0 < f.nodeType) d(f);else {
        a: {
          if (f && "number" == typeof f.length) {
            if (ua(f)) {
              var g = cc11001100_hook("g", "function" == typeof f.item || "string" == typeof f.item, "var-init");
              break a;
            }
            if ("function" === typeof f) {
              g = cc11001100_hook("g", "function" == typeof f.item, "assign");
              break a;
            }
          }
          g = cc11001100_hook("g", !1, "assign");
        }
        Ab(g ? Ib(f) : f, d);
      }
    }
  }
  function Fg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", String(b), "assign");
    "application/xhtml+xml" === a.contentType && (b = cc11001100_hook("b", b.toLowerCase(), "assign"));
    return a.createElement(b);
  }
  function Gg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Fg(a, "DIV"), "var-init");
    Tb ? (b = cc11001100_hook("b", tf(xf, b), "assign"), kg(c, b), c.removeChild(c.firstChild)) : kg(c, b);
    if (1 == c.childNodes.length) c = cc11001100_hook("c", c.removeChild(c.firstChild), "assign");else {
      for (a = cc11001100_hook("a", a.createDocumentFragment(), "assign"); c.firstChild;) a.appendChild(c.firstChild);
      c = cc11001100_hook("c", a, "assign");
    }
    return c;
  }
  function Ag(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  var Hg = cc11001100_hook("Hg", {
      SCRIPT: cc11001100_hook("SCRIPT", 1, "object-key-init"),
      STYLE: cc11001100_hook("STYLE", 1, "object-key-init"),
      HEAD: cc11001100_hook("HEAD", 1, "object-key-init"),
      IFRAME: cc11001100_hook("IFRAME", 1, "object-key-init"),
      OBJECT: cc11001100_hook("OBJECT", 1, "object-key-init")
    }, "var-init"),
    Ig = cc11001100_hook("Ig", {
      IMG: cc11001100_hook("IMG", " ", "object-key-init"),
      BR: cc11001100_hook("BR", "\n", "object-key-init")
    }, "var-init");
  function Jg(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    Kg(a, b, !0);
    a = cc11001100_hook("a", b.join(""), "assign");
    a = cc11001100_hook("a", a.replace(/ \xAD /g, " ").replace(/\xAD/g, ""), "assign");
    a = cc11001100_hook("a", a.replace(/\u200B/g, ""), "assign");
    a = cc11001100_hook("a", a.replace(/ +/g, " "), "assign");
    " " != a && (a = cc11001100_hook("a", a.replace(/^\s*/, ""), "assign"));
    return a;
  }
  function Kg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!(a.nodeName in Hg)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);else if (a.nodeName in Ig) b.push(Ig[a.nodeName]);else for (a = cc11001100_hook("a", a.firstChild, "assign"); a;) Kg(a, b, c), a = cc11001100_hook("a", a.nextSibling, "assign");
  }
  function Lg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!b && !c) return null;
    var d = cc11001100_hook("d", b ? String(b).toUpperCase() : null, "var-init");
    return Mg(a, function (e) {
      return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && Fb(e.className.split(/\s+/), c));
    });
  }
  function Mg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", 0, "var-init"); a;) {
      if (b(a)) return a;
      a = cc11001100_hook("a", a.parentNode, "assign");
      c++;
    }
    return null;
  }
  function zg(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.j = cc11001100_hook("this.j", a || t.document || document, "assign");
  }
  p = cc11001100_hook("p", zg.prototype, "assign");
  p.Pf = cc11001100_hook("p.Pf", function (a) {
    return "string" === typeof a ? this.j.getElementById(a) : a;
  }, "assign");
  p.Ug = cc11001100_hook("p.Ug", zg.prototype.Pf, "assign");
  p.getElementsByTagName = cc11001100_hook("p.getElementsByTagName", function (a, b) {
    return (b || this.j).getElementsByTagName(String(a));
  }, "assign");
  p.createElement = cc11001100_hook("p.createElement", function (a) {
    return Fg(this.j, a);
  }, "assign");
  p.createTextNode = cc11001100_hook("p.createTextNode", function (a) {
    return this.j.createTextNode(String(a));
  }, "assign");
  function Ng(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gg(a.j, b);
  }
  p.P = cc11001100_hook("p.P", function () {
    return Dg(this.j);
  }, "assign");
  p.appendChild = cc11001100_hook("p.appendChild", function (a, b) {
    a.appendChild(b);
  }, "assign");
  p.append = cc11001100_hook("p.append", function (a, b) {
    Eg(Ag(a), a, arguments);
  }, "assign");
  p.canHaveChildren = cc11001100_hook("p.canHaveChildren", function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  }, "assign");
  p.contains = cc11001100_hook("p.contains", function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }, "assign");
  p.Lf = cc11001100_hook("p.Lf", function (a) {
    var b,
      c = cc11001100_hook("c", arguments.length, "var-init");
    if (!c) return null;
    if (1 == c) return arguments[0];
    var d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", Infinity, "var-init");
    for (b = cc11001100_hook("b", 0, "assign"); b < c; b++) {
      for (var f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", arguments[b], "var-init"); g;) f.unshift(g), g = cc11001100_hook("g", g.parentNode, "assign");
      d.push(f);
      e = cc11001100_hook("e", Math.min(e, f.length), "assign");
    }
    f = cc11001100_hook("f", null, "assign");
    for (b = cc11001100_hook("b", 0, "assign"); b < e; b++) {
      g = cc11001100_hook("g", d[0][b], "assign");
      for (var h = cc11001100_hook("h", 1, "var-init"); h < c; h++) if (g != d[h][b]) return f;
      f = cc11001100_hook("f", g, "assign");
    }
    return f;
  }, "assign");
  function Og() {
    return db && kb ? kb.mobile : !Pg() && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"));
  }
  function Pg() {
    return db && kb ? !kb.mobile && (v("iPad") || v("Android") || v("Silk")) : v("iPad") || v("Android") && !v("Mobile") || v("Silk");
  }
  ;
  var Qg = cc11001100_hook("Qg", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init");
  function Rg(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return !!a && null != a.location.href && Rb(a, "foo");
    } catch {
      return !1;
    }
  }
  function Sg(a, b = t) {
    cc11001100_hook("a", a, "function-parameter");
    b = cc11001100_hook("b", Tg(b), "assign");
    let c = cc11001100_hook("c", 0, "var-init");
    for (; b && 40 > c++ && !a(b);) b = cc11001100_hook("b", Tg(b), "assign");
  }
  function Tg(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.parent, "var-init");
      if (b && b != a) return b;
    } catch {}
    return null;
  }
  function Ug(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Rg(a.top) ? a.top : null;
  }
  function Vg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Wg("SCRIPT", a), "var-init");
    Gf(c, b);
    (a = cc11001100_hook("a", a.getElementsByTagName("script")[0], "assign")) && a.parentNode && a.parentNode.insertBefore(c, a);
  }
  function Xg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Yg() {
    if (!globalThis.crypto) return Math.random();
    try {
      const a = cc11001100_hook("a", new Uint32Array(1), "var-init");
      globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch {
      return Math.random();
    }
  }
  function Zg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function $g(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    Zg(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function ah(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.length, "var-init");
    if (0 == b) return 0;
    let c = cc11001100_hook("c", 305419896, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c ^= cc11001100_hook("c", (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295, "assign");
    return 0 < c ? c : 4294967296 + c;
  }
  var ch = cc11001100_hook("ch", he(() => Eb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], bh) || 1E-4 > Math.random()), "var-init");
  const bh = cc11001100_hook("bh", a => Za(jb(), a), "var-init");
  var dh = cc11001100_hook("dh", /^([0-9.]+)px$/, "var-init"),
    eh = cc11001100_hook("eh", /^(-?[0-9.]{1,30})$/, "var-init");
  function fh(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!eh.test(a)) return null;
    a = cc11001100_hook("a", Number(a), "assign");
    return isNaN(a) ? null : a;
  }
  function gh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return /^true$/.test(a);
  }
  function hh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", dh.exec(a), "assign")) ? +a[1] : null;
  }
  function ih() {
    var a = cc11001100_hook("a", t.document.URL, "var-init");
    if (!a) return "";
    const b = cc11001100_hook("b", RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$"), "var-init");
    try {
      const c = cc11001100_hook("c", b.exec(decodeURIComponent(a)), "var-init");
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true";
    } catch {}
    return "";
  }
  var jh = cc11001100_hook("jh", {
    Ah: cc11001100_hook("Ah", "allow-forms", "object-key-init"),
    Bh: cc11001100_hook("Bh", "allow-modals", "object-key-init"),
    Ch: cc11001100_hook("Ch", "allow-orientation-lock", "object-key-init"),
    Dh: cc11001100_hook("Dh", "allow-pointer-lock", "object-key-init"),
    Eh: cc11001100_hook("Eh", "allow-popups", "object-key-init"),
    Fh: cc11001100_hook("Fh", "allow-popups-to-escape-sandbox", "object-key-init"),
    Gh: cc11001100_hook("Gh", "allow-presentation", "object-key-init"),
    Hh: cc11001100_hook("Hh", "allow-same-origin", "object-key-init"),
    Ih: cc11001100_hook("Ih", "allow-scripts", "object-key-init"),
    Jh: cc11001100_hook("Jh", "allow-top-navigation", "object-key-init"),
    Kh: cc11001100_hook("Kh", "allow-top-navigation-by-user-activation", "object-key-init")
  }, "var-init");
  const kh = cc11001100_hook("kh", he(() => $g(jh)), "var-init");
  function lh() {
    var a = cc11001100_hook("a", ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"], "var-init");
    const b = cc11001100_hook("b", kh(), "var-init");
    return a.length ? Bb(b, c => !Fb(a, c)) : b;
  }
  function mh() {
    const a = cc11001100_hook("a", Wg("IFRAME"), "var-init"),
      b = cc11001100_hook("b", {}, "var-init");
    Ab(kh(), c => {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = cc11001100_hook("b[c]", !0, "assign"));
    });
    return b;
  }
  var nh = cc11001100_hook("nh", (a, b) => {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch {
        return !1;
      }
    }, "var-init"),
    oh = cc11001100_hook("oh", (a, b) => {
      for (let c = cc11001100_hook("c", 0, "var-init"); 50 > c; ++c) {
        if (nh(a, b)) return a;
        if (!(a = cc11001100_hook("a", Tg(a), "assign"))) break;
      }
      return null;
    }, "var-init"),
    ph = cc11001100_hook("ph", he(() => Og() ? 2 : Pg() ? 1 : 0), "var-init"),
    M = cc11001100_hook("M", (a, b) => {
      Zg(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    }, "var-init");
  const qh = cc11001100_hook("qh", {
      ["http://googleads.g.doubleclick.net"]: cc11001100_hook("http://googleads.g.doubleclick.net", !0, "object-key-init"),
      ["http://pagead2.googlesyndication.com"]: cc11001100_hook("http://pagead2.googlesyndication.com", !0, "object-key-init"),
      ["https://googleads.g.doubleclick.net"]: cc11001100_hook("https://googleads.g.doubleclick.net", !0, "object-key-init"),
      ["https://pagead2.googlesyndication.com"]: cc11001100_hook("https://pagead2.googlesyndication.com", !0, "object-key-init")
    }, "var-init"),
    rh = cc11001100_hook("rh", /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/, "var-init"),
    sh = cc11001100_hook("sh", /.*domain\.test$/, "var-init"),
    th = cc11001100_hook("th", /\.prod\.google\.com(:\d+)?$/, "var-init");
  var uh = cc11001100_hook("uh", a => qh[a] || rh.test(a) || sh.test(a) || th.test(a), "var-init");
  let vh = cc11001100_hook("vh", [], "var-init");
  const wh = cc11001100_hook("wh", () => {
    const a = cc11001100_hook("a", vh, "var-init");
    vh = cc11001100_hook("vh", [], "assign");
    for (const b of a) try {
      b();
    } catch {}
  }, "var-init");
  var xh = cc11001100_hook("xh", (a, b) => {
      if ("number" !== typeof a.goog_pvsid) try {
        Object.defineProperty(a, "goog_pvsid", {
          value: cc11001100_hook("value", Math.floor(Math.random() * 2 ** 52), "object-key-init"),
          configurable: cc11001100_hook("configurable", !1, "object-key-init")
        });
      } catch (c) {
        b && b.ia(784, c);
      }
      a = cc11001100_hook("a", Number(a.goog_pvsid), "assign");
      b && (!a || 0 >= a) && b.ia(784, Error(`Invalid correlator, ${a}`));
      return a || -1;
    }, "var-init"),
    yh = cc11001100_hook("yh", (a, b) => {
      "complete" === a.document.readyState ? (vh.push(b), 1 == vh.length && (window.Promise ? Promise.resolve().then(wh) : window.setImmediate ? setImmediate(wh) : setTimeout(wh, 0))) : a.addEventListener("load", b);
    }, "var-init"),
    zh = cc11001100_hook("zh", (a, b) => new Promise(c => {
      setTimeout(() => void c(b), a);
    }), "var-init");
  function Wg(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return b.createElement(String(a).toLowerCase());
  }
  var Ah = cc11001100_hook("Ah", a => {
    let b = cc11001100_hook("b", a, "var-init");
    for (; a && a != a.parent;) a = cc11001100_hook("a", a.parent, "assign"), Rg(a) && (b = cc11001100_hook("b", a, "assign"));
    return b;
  }, "var-init");
  function Bh(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    this.top = cc11001100_hook("this.top", a, "assign");
    this.right = cc11001100_hook("this.right", b, "assign");
    this.bottom = cc11001100_hook("this.bottom", c, "assign");
    this.left = cc11001100_hook("this.left", d, "assign");
  }
  p = cc11001100_hook("p", Bh.prototype, "assign");
  p.getWidth = cc11001100_hook("p.getWidth", function () {
    return this.right - this.left;
  }, "assign");
  p.getHeight = cc11001100_hook("p.getHeight", function () {
    return this.bottom - this.top;
  }, "assign");
  function Ch(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Bh(a.top, a.right, a.bottom, a.left);
  }
  p.contains = cc11001100_hook("p.contains", function (a) {
    return this && a ? a instanceof Bh ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
  }, "assign");
  function Dh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom;
  }
  p.ceil = cc11001100_hook("p.ceil", function () {
    this.top = cc11001100_hook("this.top", Math.ceil(this.top), "assign");
    this.right = cc11001100_hook("this.right", Math.ceil(this.right), "assign");
    this.bottom = cc11001100_hook("this.bottom", Math.ceil(this.bottom), "assign");
    this.left = cc11001100_hook("this.left", Math.ceil(this.left), "assign");
    return this;
  }, "assign");
  p.floor = cc11001100_hook("p.floor", function () {
    this.top = cc11001100_hook("this.top", Math.floor(this.top), "assign");
    this.right = cc11001100_hook("this.right", Math.floor(this.right), "assign");
    this.bottom = cc11001100_hook("this.bottom", Math.floor(this.bottom), "assign");
    this.left = cc11001100_hook("this.left", Math.floor(this.left), "assign");
    return this;
  }, "assign");
  p.round = cc11001100_hook("p.round", function () {
    this.top = cc11001100_hook("this.top", Math.round(this.top), "assign");
    this.right = cc11001100_hook("this.right", Math.round(this.right), "assign");
    this.bottom = cc11001100_hook("this.bottom", Math.round(this.bottom), "assign");
    this.left = cc11001100_hook("this.left", Math.round(this.left), "assign");
    return this;
  }, "assign");
  function Eh(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    this.left = cc11001100_hook("this.left", a, "assign");
    this.top = cc11001100_hook("this.top", b, "assign");
    this.width = cc11001100_hook("this.width", c, "assign");
    this.height = cc11001100_hook("this.height", d, "assign");
  }
  function Fh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Math.max(a.left, b.left), "var-init"),
      d = cc11001100_hook("d", Math.min(a.left + a.width, b.left + b.width), "var-init");
    if (c <= d) {
      var e = cc11001100_hook("e", Math.max(a.top, b.top), "var-init");
      a = cc11001100_hook("a", Math.min(a.top + a.height, b.top + b.height), "assign");
      if (e <= a) return new Eh(c, e, d - c, a - e);
    }
    return null;
  }
  function Ih(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Fh(a, b), "var-init");
    if (!c || !c.height || !c.width) return [new Eh(a.left, a.top, a.width, a.height)];
    c = cc11001100_hook("c", [], "assign");
    var d = cc11001100_hook("d", a.top, "var-init"),
      e = cc11001100_hook("e", a.height, "var-init"),
      f = cc11001100_hook("f", a.left + a.width, "var-init"),
      g = cc11001100_hook("g", a.top + a.height, "var-init"),
      h = cc11001100_hook("h", b.left + b.width, "var-init"),
      k = cc11001100_hook("k", b.top + b.height, "var-init");
    b.top > a.top && (c.push(new Eh(a.left, a.top, a.width, b.top - a.top)), d = cc11001100_hook("d", b.top, "assign"), e -= cc11001100_hook("e", b.top - a.top, "assign"));
    k < g && (c.push(new Eh(a.left, k, a.width, g - k)), e = cc11001100_hook("e", k - d, "assign"));
    b.left > a.left && c.push(new Eh(a.left, d, b.left - a.left, e));
    h < f && c.push(new Eh(h, d, f - h, e));
    return c;
  }
  Eh.prototype.contains = cc11001100_hook("Eh.prototype.contains", function (a) {
    return a instanceof qg ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height;
  }, "assign");
  Eh.prototype.ceil = cc11001100_hook("Eh.prototype.ceil", function () {
    this.left = cc11001100_hook("this.left", Math.ceil(this.left), "assign");
    this.top = cc11001100_hook("this.top", Math.ceil(this.top), "assign");
    this.width = cc11001100_hook("this.width", Math.ceil(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.ceil(this.height), "assign");
    return this;
  }, "assign");
  Eh.prototype.floor = cc11001100_hook("Eh.prototype.floor", function () {
    this.left = cc11001100_hook("this.left", Math.floor(this.left), "assign");
    this.top = cc11001100_hook("this.top", Math.floor(this.top), "assign");
    this.width = cc11001100_hook("this.width", Math.floor(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.floor(this.height), "assign");
    return this;
  }, "assign");
  Eh.prototype.round = cc11001100_hook("Eh.prototype.round", function () {
    this.left = cc11001100_hook("this.left", Math.round(this.left), "assign");
    this.top = cc11001100_hook("this.top", Math.round(this.top), "assign");
    this.width = cc11001100_hook("this.width", Math.round(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.round(this.height), "assign");
    return this;
  }, "assign");
  const Jh = cc11001100_hook("Jh", {
    "AMP-CAROUSEL": cc11001100_hook("AMP-CAROUSEL", "ac", "object-key-init"),
    "AMP-FX-FLYING-CARPET": cc11001100_hook("AMP-FX-FLYING-CARPET", "fc", "object-key-init"),
    "AMP-LIGHTBOX": cc11001100_hook("AMP-LIGHTBOX", "lb", "object-key-init"),
    "AMP-STICKY-AD": cc11001100_hook("AMP-STICKY-AD", "sa", "object-key-init")
  }, "var-init");
  function Kh(a = t) {
    let b = cc11001100_hook("b", a.context || a.AMP_CONTEXT_DATA, "var-init");
    if (!b) try {
      b = cc11001100_hook("b", a.parent.context || a.parent.AMP_CONTEXT_DATA, "assign");
    } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function Lh(a = Kh()) {
    return a && a.mode ? +a.mode.version || null : null;
  }
  function Mh(a = Kh()) {
    if (a && a.container) {
      a = cc11001100_hook("a", a.container.split(","), "assign");
      const b = cc11001100_hook("b", [], "var-init");
      for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) b.push(Jh[a[c]] || "x");
      return b.join();
    }
    return null;
  }
  function Nh() {
    var a = cc11001100_hook("a", Kh(), "var-init");
    return a && a.initialIntersection;
  }
  function Oh() {
    const a = cc11001100_hook("a", Nh(), "var-init");
    return a && ua(a.rootBounds) ? new rg(a.rootBounds.width, a.rootBounds.height) : null;
  }
  function Ph(a = Kh()) {
    return a ? Rg(a.master) ? a.master : null : null;
  }
  function Qh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.ampInaboxIframes = cc11001100_hook("a.ampInaboxIframes", a.ampInaboxIframes || [], "assign"), "var-init");
    let d = cc11001100_hook("d", () => {}, "var-init"),
      e = cc11001100_hook("e", () => {}, "var-init");
    b && (c.push(b), e = cc11001100_hook("e", () => {
      a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
      Gb(c, b);
      d();
    }, "assign"));
    if (a.ampInaboxInitialized) return e;
    a.ampInaboxPendingMessages = cc11001100_hook("a.ampInaboxPendingMessages", a.ampInaboxPendingMessages || [], "assign");
    const f = cc11001100_hook("f", g => {
      if (a.ampInaboxInitialized) g = cc11001100_hook("g", !0, "assign");else {
        var h,
          k = cc11001100_hook("k", "amp-ini-load" === g.data, "var-init");
        a.ampInaboxPendingMessages && !k && (h = cc11001100_hook("h", /^amp-(\d{15,20})?/.exec(g.data), "assign")) && (a.ampInaboxPendingMessages.push(g), g = cc11001100_hook("g", h[1], "assign"), a.ampInaboxInitialized || g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Vg(a.document, g ? Ke(be("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
          ampVersion: cc11001100_hook("ampVersion", g, "object-key-init")
        }) : Ie(ae(be("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
        g = cc11001100_hook("g", !1, "assign");
      }
      g && d();
    }, "var-init");
    c.google_amp_listener_added || (c.google_amp_listener_added = cc11001100_hook("c.google_amp_listener_added", !0, "assign"), oe(a, "message", f), d = cc11001100_hook("d", () => {
      pe(a, "message", f);
    }, "assign"));
    return e;
  }
  ;
  function N(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 === b.length) return Ie(a[0]);
    const c = cc11001100_hook("c", [a[0]], "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return Ie(c.join(""));
  }
  function Rh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", He(a).toString(), "var-init");
    if (/#/.test(c)) throw Error("");
    let d = cc11001100_hook("d", /\?/.test(c) ? "&" : "?", "var-init");
    b.forEach((e, f) => {
      e = cc11001100_hook("e", e instanceof Array ? e : [e], "assign");
      for (let g = cc11001100_hook("g", 0, "var-init"); g < e.length; g++) {
        const h = cc11001100_hook("h", e[g], "var-init");
        null !== h && void 0 !== h && (c += cc11001100_hook("c", d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), "assign"), d = cc11001100_hook("d", "&", "assign"));
      }
    });
    return Ie(c);
  }
  ;
  function Sh(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a[0], "assign");
    const b = cc11001100_hook("b", ze(), "var-init");
    a = cc11001100_hook("a", b ? b.createScript(a) : a, "assign");
    return new Ce(a, Ae);
  }
  ;
  function Th(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new hf(a[0], ff);
  }
  ;
  function Uh(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if ("string" === typeof b) (b = cc11001100_hook("b", Vh(a, b), "assign")) && (a.style[b] = cc11001100_hook("a.style[b]", c, "assign"));else for (var d in b) {
      c = cc11001100_hook("c", a, "assign");
      var e = cc11001100_hook("e", b[d], "var-init"),
        f = cc11001100_hook("f", Vh(c, d), "var-init");
      f && (c.style[f] = cc11001100_hook("c.style[f]", e, "assign"));
    }
  }
  var Wh = cc11001100_hook("Wh", {}, "var-init");
  function Vh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Wh[b], "var-init");
    if (!c) {
      var d = cc11001100_hook("d", wg(b), "var-init");
      c = cc11001100_hook("c", d, "assign");
      void 0 === a.style[d] && (d = cc11001100_hook("d", (Xb ? "Webkit" : Wb ? "Moz" : Tb ? "ms" : null) + xg(d), "assign"), void 0 !== a.style[d] && (c = cc11001100_hook("c", d, "assign")));
      Wh[b] = cc11001100_hook("Wh[b]", c, "assign");
    }
    return c;
  }
  function Xh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Ag(a), "var-init");
    return c.defaultView && c.defaultView.getComputedStyle && (a = cc11001100_hook("a", c.defaultView.getComputedStyle(a, null), "assign")) ? a[b] || a.getPropertyValue(b) || "" : "";
  }
  function Yh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Xh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
  }
  function Zh(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return {
        left: cc11001100_hook("left", 0, "object-key-init"),
        top: cc11001100_hook("top", 0, "object-key-init"),
        right: cc11001100_hook("right", 0, "object-key-init"),
        bottom: cc11001100_hook("bottom", 0, "object-key-init")
      };
    }
  }
  function $h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Ag(a), "var-init"),
      c = cc11001100_hook("c", new qg(0, 0), "var-init");
    var d = cc11001100_hook("d", b ? Ag(b) : document, "var-init");
    d = cc11001100_hook("d", !Tb || 9 <= Number(fc) || "CSS1Compat" == yg(d).j.compatMode ? d.documentElement : d.body, "assign");
    if (a == d) return c;
    a = cc11001100_hook("a", Zh(a), "assign");
    b = cc11001100_hook("b", Cg(yg(b).j), "assign");
    c.x = cc11001100_hook("c.x", a.left + b.x, "assign");
    c.y = cc11001100_hook("c.y", a.top + b.y, "assign");
    return c;
  }
  function ai(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", bi, "var-init");
    if ("none" != Yh(a, "display")) return b(a);
    var c = cc11001100_hook("c", a.style, "var-init"),
      d = cc11001100_hook("d", c.display, "var-init"),
      e = cc11001100_hook("e", c.visibility, "var-init"),
      f = cc11001100_hook("f", c.position, "var-init");
    c.visibility = cc11001100_hook("c.visibility", "hidden", "assign");
    c.position = cc11001100_hook("c.position", "absolute", "assign");
    c.display = cc11001100_hook("c.display", "inline", "assign");
    a = cc11001100_hook("a", b(a), "assign");
    c.display = cc11001100_hook("c.display", d, "assign");
    c.position = cc11001100_hook("c.position", f, "assign");
    c.visibility = cc11001100_hook("c.visibility", e, "assign");
    return a;
  }
  function bi(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.offsetWidth, "var-init"),
      c = cc11001100_hook("c", a.offsetHeight, "var-init"),
      d = cc11001100_hook("d", Xb && !b && !c, "var-init");
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = cc11001100_hook("a", Zh(a), "assign"), new rg(a.right - a.left, a.bottom - a.top)) : new rg(b, c);
  }
  function ci(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = cc11001100_hook("c", a.style.left, "var-init"),
      d = cc11001100_hook("d", a.runtimeStyle.left, "var-init");
    a.runtimeStyle.left = cc11001100_hook("a.runtimeStyle.left", a.currentStyle.left, "assign");
    a.style.left = cc11001100_hook("a.style.left", b, "assign");
    b = cc11001100_hook("b", a.style.pixelLeft, "assign");
    a.style.left = cc11001100_hook("a.style.left", c, "assign");
    a.runtimeStyle.left = cc11001100_hook("a.runtimeStyle.left", d, "assign");
    return +b;
  }
  function di(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (b = cc11001100_hook("b", a.currentStyle ? a.currentStyle[b] : null, "assign")) ? ci(a, b) : 0;
  }
  var ei = cc11001100_hook("ei", {
    thin: cc11001100_hook("thin", 2, "object-key-init"),
    medium: cc11001100_hook("medium", 4, "object-key-init"),
    thick: cc11001100_hook("thick", 6, "object-key-init")
  }, "var-init");
  function fi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    b = cc11001100_hook("b", a.currentStyle ? a.currentStyle[b + "Width"] : null, "assign");
    return b in ei ? ei[b] : ci(a, b);
  }
  ;
  var gi = cc11001100_hook("gi", a => "number" === typeof a && 0 < a, "var-init"),
    ii = cc11001100_hook("ii", (a, b) => {
      a = cc11001100_hook("a", hi(a), "assign");
      if (!a) return b;
      const c = cc11001100_hook("c", b.slice(-1), "var-init");
      return b + ("?" === c || "#" === c ? "" : "&") + a;
    }, "var-init"),
    hi = cc11001100_hook("hi", a => Object.entries(ji(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"), "var-init"),
    ji = cc11001100_hook("ji", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      Zg(a, (c, d) => {
        if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = cc11001100_hook("c", c ? 1 : 0, "assign")), b[d] = cc11001100_hook("b[d]", c, "assign");
      });
      return b;
    }, "var-init"),
    ki = cc11001100_hook("ki", () => {
      try {
        return hg.history.length;
      } catch (a) {
        return 0;
      }
    }, "var-init"),
    li = cc11001100_hook("li", a => {
      a = cc11001100_hook("a", Ph(Kh(a)) || a, "assign");
      a.google_unique_id = cc11001100_hook("a.google_unique_id", (a.google_unique_id || 0) + 1, "assign");
    }, "var-init"),
    mi = cc11001100_hook("mi", a => {
      a = cc11001100_hook("a", a.google_unique_id, "assign");
      return "number" === typeof a ? a : 0;
    }, "var-init"),
    ni = cc11001100_hook("ni", a => {
      a.u_tz = cc11001100_hook("a.u_tz", -new Date().getTimezoneOffset(), "assign");
      a.u_his = cc11001100_hook("a.u_his", ki(), "assign");
      a.u_h = cc11001100_hook("a.u_h", hg.screen?.height, "assign");
      a.u_w = cc11001100_hook("a.u_w", hg.screen?.width, "assign");
      a.u_ah = cc11001100_hook("a.u_ah", hg.screen?.availHeight, "assign");
      a.u_aw = cc11001100_hook("a.u_aw", hg.screen?.availWidth, "assign");
      a.u_cd = cc11001100_hook("a.u_cd", hg.screen?.colorDepth, "assign");
    }, "var-init"),
    oi = cc11001100_hook("oi", a => {
      let b;
      b = cc11001100_hook("b", 9 !== a.nodeType && a.id, "assign");
      a: {
        if (a && a.nodeName && a.parentElement) {
          var c = cc11001100_hook("c", a.nodeName.toString().toLowerCase(), "var-init");
          const d = cc11001100_hook("d", a.parentElement.childNodes, "var-init");
          let e = cc11001100_hook("e", 0, "var-init");
          for (let f = cc11001100_hook("f", 0, "var-init"); f < d.length; ++f) {
            const g = cc11001100_hook("g", d[f], "var-init");
            if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
              if (a === g) {
                c = cc11001100_hook("c", "." + e, "assign");
                break a;
              }
              ++e;
            }
          }
        }
        c = cc11001100_hook("c", "", "assign");
      }
      return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c;
    }, "var-init"),
    pi = cc11001100_hook("pi", a => function () {
      if (a) {
        const b = cc11001100_hook("b", a, "var-init");
        a = cc11001100_hook("a", null, "assign");
        b.apply(null, arguments);
      }
    }, "var-init"),
    qi = cc11001100_hook("qi", () => {
      if (!hg) return !1;
      try {
        return !(!hg.navigator.standalone && !hg.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    }, "var-init"),
    ri = cc11001100_hook("ri", a => (a = cc11001100_hook("a", a.google_ad_format, "assign")) ? 0 < a.indexOf("_0ads") : !1, "var-init"),
    si = cc11001100_hook("si", a => {
      let b = cc11001100_hook("b", Number(a.google_ad_width), "var-init"),
        c = cc11001100_hook("c", Number(a.google_ad_height), "var-init");
      if (!(0 < b && 0 < c)) {
        a: {
          try {
            const e = cc11001100_hook("e", String(a.google_ad_format), "var-init");
            if (e && e.match) {
              const f = cc11001100_hook("f", e.match(/(\d+)x(\d+)/i), "var-init");
              if (f) {
                const g = cc11001100_hook("g", parseInt(f[1], 10), "var-init"),
                  h = cc11001100_hook("h", parseInt(f[2], 10), "var-init");
                if (0 < g && 0 < h) {
                  var d = cc11001100_hook("d", {
                    width: cc11001100_hook("width", g, "object-key-init"),
                    height: cc11001100_hook("height", h, "object-key-init")
                  }, "var-init");
                  break a;
                }
              }
            }
          } catch (e) {}
          d = cc11001100_hook("d", null, "assign");
        }
        a = cc11001100_hook("a", d, "assign");
        if (!a) return null;
        b = cc11001100_hook("b", 0 < b ? b : a.width, "assign");
        c = cc11001100_hook("c", 0 < c ? c : a.height, "assign");
      }
      return {
        width: cc11001100_hook("width", b, "object-key-init"),
        height: cc11001100_hook("height", c, "object-key-init")
      };
    }, "var-init");
  class ti {
    constructor(a, b) {
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", {}, "assign");
    }
  }
  ;
  const ui = cc11001100_hook("ui", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  var vi = cc11001100_hook("vi", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.l = cc11001100_hook("this.l", b, "assign");
      }
    }, "var-init"),
    wi = cc11001100_hook("wi", class {
      constructor(a, b, c) {
        this.url = cc11001100_hook("this.url", a, "assign");
        this.win = cc11001100_hook("this.win", b, "assign");
        this.qe = cc11001100_hook("this.qe", !!c, "assign");
        this.depth = cc11001100_hook("this.depth", null, "assign");
      }
    }, "var-init");
  function xi(a, b, c = null, d = !1, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    yi(a, b, c, d, e);
  }
  function yi(a, b, c, d, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
    const f = cc11001100_hook("f", Wg("IMG", a.document), "var-init");
    if (c || d) {
      const g = cc11001100_hook("g", h => {
        c && c(h);
        d && Gb(a.google_image_requests, f);
        pe(f, "load", g);
        pe(f, "error", g);
      }, "var-init");
      oe(f, "load", g);
      oe(f, "error", g);
    }
    e && (f.attributionSrc = cc11001100_hook("f.attributionSrc", "", "assign"));
    f.src = cc11001100_hook("f.src", b, "assign");
    a.google_image_requests.push(f);
  }
  var Ai = cc11001100_hook("Ai", (a, b) => {
      let c = cc11001100_hook("c", `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`, "var-init");
      Zg(a, (d, e) => {
        if (d || 0 === d) c += cc11001100_hook("c", `&${e}=${encodeURIComponent("" + d)}`, "assign");
      });
      zi(c);
    }, "var-init"),
    zi = cc11001100_hook("zi", a => {
      var b = cc11001100_hook("b", window, "var-init");
      b.fetch ? b.fetch(a, {
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        credentials: cc11001100_hook("credentials", "include", "object-key-init"),
        redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      }) : xi(b, a, void 0, !1, !1);
    }, "var-init");
  function Bi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function Ci(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init");
    Zg(a, function (g, h) {
      (g = cc11001100_hook("g", Di(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function Di(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (null == a) return "";
    b = cc11001100_hook("b", b || "&", "assign");
    c = cc11001100_hook("c", c || ",$", "assign");
    "string" == typeof c && (c = cc11001100_hook("c", c.split(""), "assign"));
    if (a instanceof Array) {
      if (d = cc11001100_hook("d", d || 0, "assign"), d < c.length) {
        const f = cc11001100_hook("f", [], "var-init");
        for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(Di(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(Ci(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function Ei(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.j.push(b);
    a.l[b] = cc11001100_hook("a.l[b]", c, "assign");
  }
  function Fi(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 1, "var-init");
    for (const c in a.l) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.m.length - 1;
  }
  function Gi(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    b = cc11001100_hook("b", b + "//" + c + d, "assign");
    let e = cc11001100_hook("e", Fi(a) - d.length, "var-init");
    if (0 > e) return "";
    a.j.sort(function (f, g) {
      return f - g;
    });
    d = cc11001100_hook("d", null, "assign");
    c = cc11001100_hook("c", "", "assign");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.j.length; f++) {
      const g = cc11001100_hook("g", a.j[f], "var-init"),
        h = cc11001100_hook("h", a.l[g], "var-init");
      for (let k = cc11001100_hook("k", 0, "var-init"); k < h.length; k++) {
        if (!e) {
          d = cc11001100_hook("d", null == d ? g : d, "assign");
          break;
        }
        let l = cc11001100_hook("l", Ci(h[k], a.m, ",$"), "var-init");
        if (l) {
          l = cc11001100_hook("l", c + l, "assign");
          if (e >= l.length) {
            e -= cc11001100_hook("e", l.length, "assign");
            b += cc11001100_hook("b", l, "assign");
            c = cc11001100_hook("c", a.m, "assign");
            break;
          }
          d = cc11001100_hook("d", null == d ? g : d, "assign");
        }
      }
    }
    a = cc11001100_hook("a", "", "assign");
    null != d && (a = cc11001100_hook("a", c + "trn=" + d, "assign"));
    return b + a;
  }
  class Hi {
    constructor() {
      this.m = cc11001100_hook("this.m", "&", "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
      this.v = cc11001100_hook("this.v", 0, "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
    }
  }
  ;
  function Ii(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= b && 1 >= b && (a.j = cc11001100_hook("a.j", b, "assign"));
  }
  function Ji(a, b, c, d = !1, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if ((d ? a.j : Math.random()) < (e || .01)) try {
      let f;
      c instanceof Hi ? f = cc11001100_hook("f", c, "assign") : (f = cc11001100_hook("f", new Hi(), "assign"), Zg(c, (h, k) => {
        var l = cc11001100_hook("l", f, "var-init");
        const m = cc11001100_hook("m", l.v++, "var-init");
        Ei(l, m, Bi(k, h));
      }));
      const g = cc11001100_hook("g", Gi(f, "https:", "pagead2.googlesyndication.com", "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && xi(t, g);
    } catch (f) {}
  }
  class Ki {
    constructor() {
      this.j = cc11001100_hook("this.j", Math.random(), "assign");
    }
  }
  ;
  let Li = cc11001100_hook("Li", null, "var-init");
  function Mi() {
    if (null === Li) {
      Li = cc11001100_hook("Li", "", "assign");
      try {
        let a = cc11001100_hook("a", "", "var-init");
        try {
          a = cc11001100_hook("a", t.top.location.hash, "assign");
        } catch (b) {
          a = cc11001100_hook("a", t.location.hash, "assign");
        }
        if (a) {
          const b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "var-init");
          Li = cc11001100_hook("Li", b ? b[1] : "", "assign");
        }
      } catch (a) {}
    }
    return Li;
  }
  ;
  function Ni() {
    const a = cc11001100_hook("a", t.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ea();
  }
  function Oi() {
    const a = cc11001100_hook("a", t.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class Pi {
    constructor(a, b) {
      var c = cc11001100_hook("c", Oi() || Ni(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const Qi = cc11001100_hook("Qi", t.performance, "var-init"),
    Ri = cc11001100_hook("Ri", !!(Qi && Qi.mark && Qi.measure && Qi.clearMarks), "var-init"),
    Si = cc11001100_hook("Si", he(() => {
      var a;
      if (a = cc11001100_hook("a", Ri, "assign")) a = cc11001100_hook("a", Mi(), "assign"), a = cc11001100_hook("a", !!a.indexOf && 0 <= a.indexOf("1337"), "assign");
      return a;
    }), "var-init");
  function Ti(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && Qi && Si() && (Qi.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Qi.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function Ui(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j = cc11001100_hook("a.j", !1, "assign");
    a.l != a.m.google_js_reporting_queue && (Si() && Ab(a.l, Ti), a.l.length = cc11001100_hook("a.l.length", 0, "assign"));
  }
  function Vi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a.j) return b();
    const c = cc11001100_hook("c", a.start("491", 3), "var-init");
    let d;
    try {
      d = cc11001100_hook("d", b(), "assign");
    } catch (e) {
      throw Ti(c), e;
    }
    a.end(c);
    return d;
  }
  class Wi {
    constructor(a) {
      this.l = cc11001100_hook("this.l", [], "assign");
      this.m = cc11001100_hook("this.m", a || t, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.l = cc11001100_hook("this.l", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.j = cc11001100_hook("this.j", Si() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.j) return null;
      a = cc11001100_hook("a", new Pi(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      Qi && Si() && Qi.mark(b);
      return a;
    }
    end(a) {
      if (this.j && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Oi() || Ni()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        Qi && Si() && Qi.mark(b);
        !this.j || 2048 < this.l.length || this.l.push(a);
      }
    }
  }
  ;
  function Xi(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", a.toString(), "var-init");
    a.name && -1 == b.indexOf(a.name) && (b += cc11001100_hook("b", ": " + a.name, "assign"));
    a.message && -1 == b.indexOf(a.message) && (b += cc11001100_hook("b", ": " + a.message, "assign"));
    a.stack && (b = cc11001100_hook("b", Yi(a.stack, b), "assign"));
    return b;
  }
  function Yi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      -1 == a.indexOf(b) && (a = cc11001100_hook("a", b + "\n" + a, "assign"));
      let c;
      for (; a != c;) c = cc11001100_hook("c", a, "assign"), a = cc11001100_hook("a", a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1"), "assign");
      return a.replace(RegExp("\n *", "g"), "\n");
    } catch (c) {
      return b;
    }
  }
  class Zi {
    constructor(a, b = null) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
      this.B = cc11001100_hook("this.B", this.ia, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.m = cc11001100_hook("this.m", !1, "assign");
    }
    Z() {
      return this.v;
    }
    zd(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    A(a) {
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    Hb(a, b, c) {
      let d, e;
      try {
        this.l && this.l.j ? (e = cc11001100_hook("e", this.l.start(a.toString(), 3), "assign"), d = cc11001100_hook("d", b(), "assign"), this.l.end(e)) : d = cc11001100_hook("d", b(), "assign");
      } catch (f) {
        b = cc11001100_hook("b", !0, "assign");
        try {
          Ti(e), b = cc11001100_hook("b", this.B(a, new ti(f, {
            message: cc11001100_hook("message", Xi(f), "object-key-init")
          }), void 0, c), "assign");
        } catch (g) {
          this.ia(217, g);
        }
        if (b) window.console?.error?.(f);else throw f;
      }
      return d;
    }
    ta(a, b, c, d) {
      return (...e) => this.Hb(a, () => b.apply(c, e), d);
    }
    ia(a, b, c, d, e) {
      e = cc11001100_hook("e", e || "jserror", "assign");
      let f;
      try {
        const H = cc11001100_hook("H", new Hi(), "var-init");
        var g = cc11001100_hook("g", H, "var-init");
        g.j.push(1);
        g.l[1] = cc11001100_hook("g.l[1]", Bi("context", a), "assign");
        b.error && b.meta && b.id || (b = cc11001100_hook("b", new ti(b, {
          message: cc11001100_hook("message", Xi(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          g = cc11001100_hook("g", H, "assign");
          var h = cc11001100_hook("h", b.msg.substring(0, 512), "var-init");
          g.j.push(2);
          g.l[2] = cc11001100_hook("g.l[2]", Bi("msg", h), "assign");
        }
        var k = cc11001100_hook("k", b.meta || {}, "var-init");
        b = cc11001100_hook("b", k, "assign");
        if (this.j) try {
          this.j(b);
        } catch (W) {}
        if (d) try {
          d(b);
        } catch (W) {}
        Ei(H, 3, [k]);
        k = cc11001100_hook("k", t, "assign");
        d = cc11001100_hook("d", [], "assign");
        b = cc11001100_hook("b", null, "assign");
        do {
          var l = cc11001100_hook("l", k, "var-init");
          if (Rg(l)) {
            var m = cc11001100_hook("m", l.location.href, "var-init");
            b = cc11001100_hook("b", l.document && l.document.referrer || null, "assign");
          } else m = cc11001100_hook("m", b, "assign"), b = cc11001100_hook("b", null, "assign");
          d.push(new wi(m || "", l));
          try {
            k = cc11001100_hook("k", l.parent, "assign");
          } catch (W) {
            k = cc11001100_hook("k", null, "assign");
          }
        } while (k && l != k);
        for (let W = cc11001100_hook("W", 0, "var-init"), ya = cc11001100_hook("ya", d.length - 1, "var-init"); W <= ya; ++W) d[W].depth = cc11001100_hook("d[W].depth", ya - W, "assign");
        l = cc11001100_hook("l", t, "assign");
        if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == d.length - 1) for (m = cc11001100_hook("m", 1, "assign"); m < d.length; ++m) {
          var n = cc11001100_hook("n", d[m], "var-init");
          n.url || (n.url = cc11001100_hook("n.url", l.location.ancestorOrigins[m - 1] || "", "assign"), n.qe = cc11001100_hook("n.qe", !0, "assign"));
        }
        var q = cc11001100_hook("q", d, "var-init");
        let T = cc11001100_hook("T", new wi(t.location.href, t, !1), "var-init");
        l = cc11001100_hook("l", null, "assign");
        const Ga = cc11001100_hook("Ga", q.length - 1, "var-init");
        for (n = cc11001100_hook("n", Ga, "assign"); 0 <= n; --n) {
          var r = cc11001100_hook("r", q[n], "var-init");
          !l && ui.test(r.url) && (l = cc11001100_hook("l", r, "assign"));
          if (r.url && !r.qe) {
            T = cc11001100_hook("T", r, "assign");
            break;
          }
        }
        r = cc11001100_hook("r", null, "assign");
        const aa = cc11001100_hook("aa", q.length && q[Ga].url, "var-init");
        0 != T.depth && aa && (r = cc11001100_hook("r", q[Ga], "assign"));
        f = cc11001100_hook("f", new vi(T, r), "assign");
        if (f.l) {
          q = cc11001100_hook("q", H, "assign");
          var u = cc11001100_hook("u", f.l.url || "", "var-init");
          q.j.push(4);
          q.l[4] = cc11001100_hook("q.l[4]", Bi("top", u), "assign");
        }
        var C = cc11001100_hook("C", {
          url: cc11001100_hook("url", f.j.url || "", "object-key-init")
        }, "var-init");
        if (f.j.url) {
          var z = cc11001100_hook("z", f.j.url.match(Qg), "var-init"),
            A = cc11001100_hook("A", z[1], "var-init"),
            I = cc11001100_hook("I", z[3], "var-init"),
            E = cc11001100_hook("E", z[4], "var-init");
          u = cc11001100_hook("u", "", "assign");
          A && (u += cc11001100_hook("u", A + ":", "assign"));
          I && (u += cc11001100_hook("u", "//", "assign"), u += cc11001100_hook("u", I, "assign"), E && (u += cc11001100_hook("u", ":" + E, "assign")));
          var F = cc11001100_hook("F", u, "var-init");
        } else F = cc11001100_hook("F", "", "assign");
        Ei(H, 5, [C, {
          url: cc11001100_hook("url", F, "object-key-init")
        }]);
        Ji(this.v, e, H, this.m, c);
      } catch (H) {
        try {
          Ji(this.v, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", Xi(H), "object-key-init"),
            url: cc11001100_hook("url", f && f.j.url, "object-key-init")
          }, this.m, c);
        } catch (T) {}
      }
      return !0;
    }
    Ba(a, b, c) {
      b.catch(d => {
        d = cc11001100_hook("d", d ? d : "unknown rejection", "assign");
        this.ia(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0);
      });
    }
  }
  ;
  var $i = cc11001100_hook("$i", a => "string" === typeof a, "var-init"),
    aj = cc11001100_hook("aj", a => void 0 === a, "var-init");
  function bj() {
    var a = cc11001100_hook("a", cj, "var-init");
    return b => {
      for (const c in a) if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
      return !1;
    };
  }
  ;
  var dj = cc11001100_hook("dj", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  function ej(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new fj(), "var-init");
    return x(b, 1, a);
  }
  var fj = cc11001100_hook("fj", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var gj = cc11001100_hook("gj", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  function hj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(a, 1, b);
  }
  function ij(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(a, 2, b);
  }
  function jj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(a, 3, b);
  }
  function kj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(a, 4, b);
  }
  function lj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(a, 5, b);
  }
  function mj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return jd(a, 8, Sc(b), 0);
  }
  function nj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return jd(a, 9, Sc(b), 0);
  }
  var oj = cc11001100_hook("oj", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var pj = cc11001100_hook("pj", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  function qj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return id(a, 1, b, Xc);
  }
  function rj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return id(a, 12, b, Wc);
  }
  function sj() {
    var a = cc11001100_hook("a", new tj(), "var-init");
    Qc(a);
    dd(a, 2, 2, !1, !1).push("irr");
    return a;
  }
  function uj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ad(a, 3, b);
  }
  function vj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ad(a, 4, b);
  }
  function wj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ad(a, 5, b);
  }
  function xj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ad(a, 7, b);
  }
  function yj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ad(a, 8, b);
  }
  function zj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(a, 9, b);
  }
  function Aj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return td(a, 10, b);
  }
  function Bj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return id(a, 11, b, Uc);
  }
  var tj = cc11001100_hook("tj", class extends L {
      constructor() {
        super(void 0, -1, Cj);
      }
    }, "var-init"),
    Cj = cc11001100_hook("Cj", [1, 12, 2, 10, 11], "var-init");
  function Dj(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Ej(), "var-init");
    rd(a, 1, b);
  }
  function Fj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(a, 2, b);
  }
  function Gj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return td(a, 3, b);
  }
  function Hj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return td(a, 4, b);
  }
  function Ij(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    ud(a, 4, fj, b);
    return a;
  }
  function Jj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return td(a, 5, b);
  }
  function Kj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return id(a, 6, b, Xc);
  }
  function Lj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(a, 7, b);
  }
  function Mj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    rd(a, 9, b);
  }
  function Nj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ad(a, 10, b);
  }
  function Oj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ad(a, 11, b);
  }
  function Pj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ad(a, 12, b);
  }
  var Rj = cc11001100_hook("Rj", class extends L {
      constructor() {
        super(void 0, -1, Qj);
      }
      H(a) {
        ud(this, 3, dj, void 0, a, !1, 1);
        return this;
      }
      G(a) {
        return J(this, 8, a);
      }
    }, "var-init"),
    Qj = cc11001100_hook("Qj", [3, 4, 5, 6], "var-init");
  var Tj = cc11001100_hook("Tj", class extends L {
      constructor() {
        super(void 0, -1, Sj);
      }
    }, "var-init"),
    Sj = cc11001100_hook("Sj", [2], "var-init");
  var Uj = cc11001100_hook("Uj", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var Vj = cc11001100_hook("Vj", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var Wj = cc11001100_hook("Wj", class extends L {
    constructor() {
      super();
    }
    getContentUrl() {
      return K(this, 1);
    }
  }, "var-init");
  var Yj = cc11001100_hook("Yj", class extends L {
      constructor() {
        super(void 0, -1, Xj);
      }
    }, "var-init"),
    Xj = cc11001100_hook("Xj", [1], "var-init");
  var Zj = cc11001100_hook("Zj", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var ak = cc11001100_hook("ak", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var bk = cc11001100_hook("bk", class extends L {
      constructor(a) {
        super(a);
      }
    }, "var-init"),
    ck = cc11001100_hook("ck", [1, 2, 3, 5, 6, 7, 8], "var-init");
  var ek = cc11001100_hook("ek", class extends L {
      constructor() {
        super(void 0, -1, dk);
      }
    }, "var-init"),
    dk = cc11001100_hook("dk", [1], "var-init");
  var gk = cc11001100_hook("gk", class extends L {
      constructor() {
        super(void 0, -1, fk);
      }
    }, "var-init"),
    fk = cc11001100_hook("fk", [2], "var-init");
  var hk = cc11001100_hook("hk", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var ik = cc11001100_hook("ik", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  function jk(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new kk(), "var-init");
    return Ed(b, 1, a);
  }
  var kk = cc11001100_hook("kk", class extends L {
      constructor() {
        super(void 0, -1, lk);
      }
    }, "var-init"),
    lk = cc11001100_hook("lk", [9], "var-init");
  var nk = cc11001100_hook("nk", class extends L {
      constructor() {
        super(void 0, -1, mk);
      }
    }, "var-init"),
    mk = cc11001100_hook("mk", [2], "var-init");
  var ok = cc11001100_hook("ok", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var pk = cc11001100_hook("pk", class extends L {
      constructor() {
        super();
      }
    }, "var-init"),
    qk = cc11001100_hook("qk", [4, 5], "var-init");
  var rk = cc11001100_hook("rk", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var sk = cc11001100_hook("sk", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var tk = cc11001100_hook("tk", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var uk = cc11001100_hook("uk", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var vk = cc11001100_hook("vk", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var wk = cc11001100_hook("wk", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var xk = cc11001100_hook("xk", class extends L {
      constructor() {
        super();
      }
    }, "var-init"),
    yk = cc11001100_hook("yk", [2, 3], "var-init");
  var zk = cc11001100_hook("zk", class extends L {
      constructor() {
        super();
      }
    }, "var-init"),
    Ak = cc11001100_hook("Ak", [3, 4, 5, 6, 7, 8, 9], "var-init");
  var Bk = cc11001100_hook("Bk", class extends L {
      constructor() {
        super();
      }
      Pa(a) {
        return Bd(this, 2, a);
      }
    }, "var-init"),
    Ck = cc11001100_hook("Ck", [4, 5, 6, 8, 9, 10], "var-init");
  function Dk(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    Ek(a, ...b.map(c => ({
      Og: cc11001100_hook("Og", 7, "object-key-init"),
      message: cc11001100_hook("message", c, "object-key-init")
    })));
  }
  ;
  function Fk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return JSON.stringify([a.map(b => [{
      [b.Og]: cc11001100_hook(b.Og, b.message.toJSON(), "object-key-init")
    }])]);
  }
  ;
  var Gk = cc11001100_hook("Gk", (a, b) => {
    globalThis.fetch(a, {
      method: cc11001100_hook("method", "POST", "object-key-init"),
      body: cc11001100_hook("body", b, "object-key-init"),
      keepalive: cc11001100_hook("keepalive", 65536 > b.length, "object-key-init"),
      credentials: cc11001100_hook("credentials", "omit", "object-key-init"),
      mode: cc11001100_hook("mode", "no-cors", "object-key-init"),
      redirect: cc11001100_hook("redirect", "follow", "object-key-init")
    }).catch(() => {});
  }, "var-init");
  function Hk(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && "function" == typeof a.xa && a.xa();
  }
  ;
  function Ik() {
    this.B = cc11001100_hook("this.B", this.B, "assign");
    this.G = cc11001100_hook("this.G", this.G, "assign");
  }
  Ik.prototype.B = cc11001100_hook("Ik.prototype.B", !1, "assign");
  Ik.prototype.xa = cc11001100_hook("Ik.prototype.xa", function () {
    this.B || (this.B = cc11001100_hook("this.B", !0, "assign"), this.j());
  }, "assign");
  function Jk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.B ? b() : (a.G || (a.G = cc11001100_hook("a.G", [], "assign")), a.G.push(b));
  }
  Ik.prototype.j = cc11001100_hook("Ik.prototype.j", function () {
    if (this.G) for (; this.G.length;) this.G.shift()();
  }, "assign");
  function Ek(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    65536 <= Fk(a.j.concat(b)).length && Kk(a);
    a.j.push(...b);
    100 <= a.j.length && Kk(a);
    a.j.length && null === a.l && (a.l = cc11001100_hook("a.l", setTimeout(() => {
      Kk(a);
    }, 100), "assign"));
  }
  function Kk(a) {
    cc11001100_hook("a", a, "function-parameter");
    null !== a.l && (clearTimeout(a.l), a.l = cc11001100_hook("a.l", null, "assign"));
    if (a.j.length) {
      var b = cc11001100_hook("b", Fk(a.j), "var-init");
      a.m("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.j = cc11001100_hook("a.j", [], "assign");
    }
  }
  var Lk = cc11001100_hook("Lk", class {
      constructor() {
        this.m = cc11001100_hook("this.m", Gk, "assign");
        this.j = cc11001100_hook("this.j", [], "assign");
        this.l = cc11001100_hook("this.l", null, "assign");
      }
    }, "var-init"),
    Mk = cc11001100_hook("Mk", class extends Lk {}, "var-init");
  var O = cc11001100_hook("O", a => {
    var b = cc11001100_hook("b", "cd", "var-init");
    if (a.cd && a.hasOwnProperty(b)) return a.cd;
    b = cc11001100_hook("b", new a(), "assign");
    return a.cd = cc11001100_hook("a.cd", b, "assign");
  }, "var-init");
  function Nk(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b[a] || c;
  }
  ;
  function Ok(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l = cc11001100_hook("a.l", c => Nk(2, b, () => [])(c, 1), "assign");
    a.j = cc11001100_hook("a.j", () => Nk(3, b, () => [])(1), "assign");
  }
  class Pk {
    l() {
      return [];
    }
    j() {
      return [];
    }
  }
  ;
  let Qk, Rk;
  const Sk = cc11001100_hook("Sk", new Wi(t), "var-init");
  (a => {
    Qk = cc11001100_hook("Qk", a || new Ki(), "assign");
    "number" !== typeof t.google_srt && (t.google_srt = cc11001100_hook("t.google_srt", Math.random(), "assign"));
    Ii(Qk, t.google_srt);
    Rk = cc11001100_hook("Rk", new Zi(Qk, Sk), "assign");
    Rk.A(!0);
    "complete" == t.document.readyState ? t.google_measure_js_timing || Ui(Sk) : Sk.j && oe(t, "load", () => {
      t.google_measure_js_timing || Ui(Sk);
    });
  })();
  var Tk = cc11001100_hook("Tk", (a, b, c) => Rk.Hb(a, b, c), "var-init"),
    al = cc11001100_hook("al", (a, b) => Rk.ta(a, b), "var-init"),
    bl = cc11001100_hook("bl", (a, b, c) => {
      const d = cc11001100_hook("d", O(Pk).j(), "var-init");
      !b.eid && d.length && (b.eid = cc11001100_hook("b.eid", d.toString(), "assign"));
      Ji(Qk, a, b, !0, c);
    }, "var-init"),
    cl = cc11001100_hook("cl", (a, b) => Rk.ia(a, b, void 0, void 0), "var-init");
  Ie(ae(be("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
  var dl = cc11001100_hook("dl", (a, b, c, d = null) => {
      const e = cc11001100_hook("e", g => {
        let h;
        try {
          h = cc11001100_hook("h", JSON.parse(g.data), "assign");
        } catch (k) {
          return;
        }
        !h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g);
      }, "var-init");
      oe(a, "message", e);
      let f = cc11001100_hook("f", !1, "var-init");
      return () => {
        let g = cc11001100_hook("g", !1, "var-init");
        f || (f = cc11001100_hook("f", !0, "assign"), g = cc11001100_hook("g", pe(a, "message", e), "assign"));
        return g;
      };
    }, "var-init"),
    el = cc11001100_hook("el", (a, b, c, d = null) => {
      const e = cc11001100_hook("e", dl(a, b, fe(c, () => e()), d), "var-init");
      return e;
    }, "var-init"),
    fl = cc11001100_hook("fl", (a, b, c, d, e) => {
      if (!(0 >= e) && (c.googMsgType = cc11001100_hook("c.googMsgType", b, "assign"), a.postMessage(JSON.stringify(c), d), a = cc11001100_hook("a", a.frames, "assign"))) for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; ++f) 1 < e && fl(a[f], b, c, d, --e);
    }, "var-init");
  function gl(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    uh(d.origin) && "expandable-xpc-ready" == c.notify && hl(a, b);
  }
  function hl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.bd, "var-init");
    c.google_eas_queue = cc11001100_hook("c.google_eas_queue", c.google_eas_queue || [], "assign");
    c.google_eas_queue.push({
      a: cc11001100_hook("a", a.id, "object-key-init"),
      b: cc11001100_hook("b", a.url, "object-key-init"),
      c: cc11001100_hook("c", a.width, "object-key-init"),
      d: cc11001100_hook("d", a.height, "object-key-init"),
      e: cc11001100_hook("e", a.Ua, "object-key-init"),
      f: cc11001100_hook("f", a.sg, "object-key-init"),
      g: cc11001100_hook("g", a.kf, "object-key-init"),
      h: cc11001100_hook("h", a.Yf, "object-key-init"),
      i: cc11001100_hook("i", void 0, "object-key-init")
    });
    t.setTimeout(al(220, pi(() => {
      Vg(c.document, b);
    })), 0);
  }
  ;
  var jl = cc11001100_hook("jl", class extends L {
      constructor() {
        super(void 0, -1, il);
      }
    }, "var-init"),
    il = cc11001100_hook("il", [15], "var-init");
  var kl = cc11001100_hook("kl", class extends L {
    constructor() {
      super();
    }
    getCorrelator() {
      return yd(this, 1);
    }
    setCorrelator(a) {
      return J(this, 1, a);
    }
  }, "var-init");
  var ll = cc11001100_hook("ll", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  let ml = cc11001100_hook("ml", null, "var-init"),
    nl = cc11001100_hook("nl", null, "var-init");
  var ol = cc11001100_hook("ol", () => {
      if (null != ml) return ml;
      ml = cc11001100_hook("ml", !1, "assign");
      try {
        const a = cc11001100_hook("a", Ug(t), "var-init");
        a && -1 !== a.location.hash.indexOf("google_logging") && (ml = cc11001100_hook("ml", !0, "assign"));
        t.localStorage.getItem("google_logging") && (ml = cc11001100_hook("ml", !0, "assign"));
      } catch (a) {}
      return ml;
    }, "var-init"),
    pl = cc11001100_hook("pl", () => {
      if (null != nl) return nl;
      nl = cc11001100_hook("nl", !1, "assign");
      try {
        const a = cc11001100_hook("a", Ug(t), "var-init");
        if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) nl = cc11001100_hook("nl", !0, "assign");
      } catch (a) {}
      return nl;
    }, "var-init"),
    ql = cc11001100_hook("ql", (a, b = []) => {
      let c = cc11001100_hook("c", !1, "var-init");
      t.google_logging_queue || (c = cc11001100_hook("c", !0, "assign"), t.google_logging_queue = cc11001100_hook("t.google_logging_queue", [], "assign"));
      t.google_logging_queue.push([a, b]);
      c && ol() && Vg(t.document, Ie(ae(be("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))));
    }, "var-init");
  let rl, sl;
  const tl = cc11001100_hook("tl", new Wi(window), "var-init");
  (a => {
    rl = cc11001100_hook("rl", a ?? new Ki(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    Ii(rl, window.google_srt);
    sl = cc11001100_hook("sl", new Zi(rl, tl), "assign");
    sl.zd(() => {});
    sl.A(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || Ui(tl) : tl.j && oe(window, "load", () => {
      window.google_measure_js_timing || Ui(tl);
    });
  })();
  let ul = cc11001100_hook("ul", new Date().getTime(), "var-init");
  var vl = cc11001100_hook("vl", a => {
    a = cc11001100_hook("a", parseFloat(a), "assign");
    return isNaN(a) || 1 < a || 0 > a ? .05 : a;
  }, "var-init");
  var wl = cc11001100_hook("wl", {
    kj: cc11001100_hook("kj", 0, "object-key-init"),
    jj: cc11001100_hook("jj", 1, "object-key-init"),
    gj: cc11001100_hook("gj", 2, "object-key-init"),
    bj: cc11001100_hook("bj", 3, "object-key-init"),
    hj: cc11001100_hook("hj", 4, "object-key-init"),
    cj: cc11001100_hook("cj", 5, "object-key-init"),
    ij: cc11001100_hook("ij", 6, "object-key-init"),
    ej: cc11001100_hook("ej", 7, "object-key-init"),
    fj: cc11001100_hook("fj", 8, "object-key-init"),
    aj: cc11001100_hook("aj", 9, "object-key-init"),
    dj: cc11001100_hook("dj", 10, "object-key-init")
  }, "var-init");
  var xl = cc11001100_hook("xl", {
    mj: cc11001100_hook("mj", 0, "object-key-init"),
    nj: cc11001100_hook("nj", 1, "object-key-init"),
    lj: cc11001100_hook("lj", 2, "object-key-init")
  }, "var-init");
  function yl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
  }
  function zl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Cb(a, b => new Bh(b.top, b.right, b.bottom, b.left)), "assign");
    a = cc11001100_hook("a", Al(a), "assign");
    return {
      top: cc11001100_hook("top", a.top, "object-key-init"),
      right: cc11001100_hook("right", a.right, "object-key-init"),
      bottom: cc11001100_hook("bottom", a.bottom, "object-key-init"),
      left: cc11001100_hook("left", a.left, "object-key-init")
    };
  }
  function Al(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.length) throw Error("pso:box:m:nb");
    return Db(a.slice(1), (b, c) => {
      b.left = cc11001100_hook("b.left", Math.min(b.left, c.left), "assign");
      b.top = cc11001100_hook("b.top", Math.min(b.top, c.top), "assign");
      b.right = cc11001100_hook("b.right", Math.max(b.right, c.right), "assign");
      b.bottom = cc11001100_hook("b.bottom", Math.max(b.bottom, c.bottom), "assign");
      return b;
    }, Ch(a[0]));
  }
  ;
  var se = cc11001100_hook("se", {
    bk: cc11001100_hook("bk", 0, "object-key-init"),
    Pi: cc11001100_hook("Pi", 1, "object-key-init"),
    Si: cc11001100_hook("Si", 2, "object-key-init"),
    Qi: cc11001100_hook("Qi", 3, "object-key-init"),
    Ri: cc11001100_hook("Ri", 4, "object-key-init"),
    Yi: cc11001100_hook("Yi", 8, "object-key-init"),
    mk: cc11001100_hook("mk", 9, "object-key-init"),
    yj: cc11001100_hook("yj", 10, "object-key-init"),
    zj: cc11001100_hook("zj", 11, "object-key-init"),
    ik: cc11001100_hook("ik", 16, "object-key-init"),
    Ci: cc11001100_hook("Ci", 17, "object-key-init"),
    Bi: cc11001100_hook("Bi", 24, "object-key-init"),
    wj: cc11001100_hook("wj", 25, "object-key-init"),
    Uh: cc11001100_hook("Uh", 26, "object-key-init"),
    Th: cc11001100_hook("Th", 27, "object-key-init"),
    Ze: cc11001100_hook("Ze", 30, "object-key-init"),
    qj: cc11001100_hook("qj", 32, "object-key-init"),
    tj: cc11001100_hook("tj", 40, "object-key-init"),
    sk: cc11001100_hook("sk", 41, "object-key-init"),
    pk: cc11001100_hook("pk", 42, "object-key-init")
  }, "var-init");
  var Bl = cc11001100_hook("Bl", {
      overlays: cc11001100_hook("overlays", 1, "object-key-init"),
      interstitials: cc11001100_hook("interstitials", 2, "object-key-init"),
      vignettes: cc11001100_hook("vignettes", 2, "object-key-init"),
      inserts: cc11001100_hook("inserts", 3, "object-key-init"),
      immersives: cc11001100_hook("immersives", 4, "object-key-init"),
      list_view: cc11001100_hook("list_view", 5, "object-key-init"),
      full_page: cc11001100_hook("full_page", 6, "object-key-init"),
      side_rails: cc11001100_hook("side_rails", 7, "object-key-init")
    }, "var-init"),
    Cl = cc11001100_hook("Cl", {
      [1]: cc11001100_hook(1, 1, "object-key-init"),
      [2]: cc11001100_hook(2, 1, "object-key-init"),
      [3]: cc11001100_hook(3, 7, "object-key-init"),
      [4]: cc11001100_hook(4, 7, "object-key-init"),
      [8]: cc11001100_hook(8, 2, "object-key-init"),
      [27]: cc11001100_hook(27, 3, "object-key-init"),
      [9]: cc11001100_hook(9, 4, "object-key-init"),
      [30]: cc11001100_hook(30, 5, "object-key-init")
    }, "var-init");
  function Dl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = cc11001100_hook("a.google_reactive_ads_global_state.sideRailProcessedFixedElements", new Set(), "assign")), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = cc11001100_hook("a.google_reactive_ads_global_state.sideRailAvailableSpace", new Map(), "assign"))) : a.google_reactive_ads_global_state = cc11001100_hook("a.google_reactive_ads_global_state", new El(), "assign");
    return a.google_reactive_ads_global_state;
  }
  class El {
    constructor() {
      this.wasPlaTagProcessed = cc11001100_hook("this.wasPlaTagProcessed", !1, "assign");
      this.wasReactiveAdConfigReceived = cc11001100_hook("this.wasReactiveAdConfigReceived", {}, "assign");
      this.adCount = cc11001100_hook("this.adCount", {}, "assign");
      this.wasReactiveAdVisible = cc11001100_hook("this.wasReactiveAdVisible", {}, "assign");
      this.stateForType = cc11001100_hook("this.stateForType", {}, "assign");
      this.reactiveTypeEnabledInAsfe = cc11001100_hook("this.reactiveTypeEnabledInAsfe", {}, "assign");
      this.wasReactiveTagRequestSent = cc11001100_hook("this.wasReactiveTagRequestSent", !1, "assign");
      this.reactiveTypeDisabledByPublisher = cc11001100_hook("this.reactiveTypeDisabledByPublisher", {}, "assign");
      this.tagSpecificState = cc11001100_hook("this.tagSpecificState", {}, "assign");
      this.messageValidationEnabled = cc11001100_hook("this.messageValidationEnabled", !1, "assign");
      this.floatingAdsStacking = cc11001100_hook("this.floatingAdsStacking", new Fl(), "assign");
      this.sideRailProcessedFixedElements = cc11001100_hook("this.sideRailProcessedFixedElements", new Set(), "assign");
      this.sideRailAvailableSpace = cc11001100_hook("this.sideRailAvailableSpace", new Map(), "assign");
      this.j = cc11001100_hook("this.j", new Map(), "assign");
    }
  }
  var Fl = cc11001100_hook("Fl", class {
    constructor() {
      this.maxZIndexRestrictions = cc11001100_hook("this.maxZIndexRestrictions", {}, "assign");
      this.nextRestrictionId = cc11001100_hook("this.nextRestrictionId", 0, "assign");
      this.maxZIndexListeners = cc11001100_hook("this.maxZIndexListeners", [], "assign");
    }
  }, "var-init");
  var Gl = cc11001100_hook("Gl", 728 * 1.38, "var-init"),
    Hl = cc11001100_hook("Hl", (a, b = 420) => (a = cc11001100_hook("a", P(a).clientWidth, "assign")) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384, "var-init"),
    Il = cc11001100_hook("Il", a => {
      var b = cc11001100_hook("b", P(a).clientWidth, "var-init");
      a = cc11001100_hook("a", a.innerWidth, "assign");
      return (b = cc11001100_hook("b", b && a ? b / a : 0, "assign")) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072;
    }, "var-init"),
    Kl = cc11001100_hook("Kl", a => Math.max(0, Jl(a, !0) - P(a).clientHeight), "var-init"),
    P = cc11001100_hook("P", a => {
      a = cc11001100_hook("a", a.document, "assign");
      let b = cc11001100_hook("b", {}, "var-init");
      a && (b = cc11001100_hook("b", "CSS1Compat" == a.compatMode ? a.documentElement : a.body, "assign"));
      return b || {};
    }, "var-init"),
    Jl = cc11001100_hook("Jl", (a, b) => {
      const c = cc11001100_hook("c", P(a), "var-init");
      return b ? c.scrollHeight == P(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight;
    }, "var-init"),
    Ml = cc11001100_hook("Ml", (a, b) => Ll(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = cc11001100_hook("a", a.adCount[b], "assign")) ? 1 <= a : !1, "var-init"),
    Nl = cc11001100_hook("Nl", (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1, "var-init"),
    Ol = cc11001100_hook("Ol", a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset, "var-init"),
    Pl = cc11001100_hook("Pl", a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset, "var-init"),
    Ql = cc11001100_hook("Ql", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      let c;
      Array.isArray(a) ? c = cc11001100_hook("c", a, "assign") : a && a.key_value && (c = cc11001100_hook("c", a.key_value, "assign"));
      if (c) for (a = cc11001100_hook("a", 0, "assign"); a < c.length; a++) {
        const d = cc11001100_hook("d", c[a], "var-init");
        if ("key" in d && "value" in d) {
          const e = cc11001100_hook("e", d.value, "var-init");
          b[d.key] = cc11001100_hook("b[d.key]", null == e ? null : String(e), "assign");
        }
      }
      return b;
    }, "var-init"),
    Rl = cc11001100_hook("Rl", (a, b, c, d) => {
      Ji(c, b, {
        c: cc11001100_hook("c", d.data.substring(0, 500), "object-key-init"),
        u: cc11001100_hook("u", a.location.href.substring(0, 500), "object-key-init")
      }, !0, .1);
      return !0;
    }, "var-init"),
    Ll = cc11001100_hook("Ll", a => 26 === a || 27 === a || 40 === a || 41 === a, "var-init");
  function Sl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Tl(a).forEach(b, void 0);
  }
  function Tl(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c; d++) b.push(a[d]);
    return b;
  }
  ;
  function Ul(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return void 0 !== a.j[Vl(b)];
  }
  function Wl(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
    return b;
  }
  function Xl(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
    return b;
  }
  const Yl = cc11001100_hook("Yl", class {
    constructor() {
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
    }
    set(a, b) {
      const c = cc11001100_hook("c", Vl(a), "var-init");
      this.j[c] = cc11001100_hook("this.j[c]", b, "assign");
      this.l[c] = cc11001100_hook("this.l[c]", a, "assign");
    }
    remove(a) {
      a = cc11001100_hook("a", Vl(a), "assign");
      this.j[a] = cc11001100_hook("this.j[a]", void 0, "assign");
      this.l[a] = cc11001100_hook("this.l[a]", void 0, "assign");
    }
    get(a, b) {
      a = cc11001100_hook("a", Vl(a), "assign");
      return void 0 !== this.j[a] ? this.j[a] : b;
    }
    Bb() {
      return Wl(this).length;
    }
    clear() {
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
    }
  }, "var-init");
  function Vl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Object ? String(va(a)) : a + "";
  }
  ;
  const Zl = cc11001100_hook("Zl", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new Yl(), "assign");
      if (a) for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.j.set(a, !0);
    }
    remove(a) {
      this.j.remove(a);
    }
    contains(a) {
      return Ul(this.j, a);
    }
  }, "var-init");
  const $l = cc11001100_hook("$l", new Zl("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" ")), "var-init");
  function am(a) {
    cc11001100_hook("a", a, "function-parameter");
    Qb(a.document.body.offsetHeight);
  }
  ;
  function bm(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l.forEach((b, c) => {
      if (b.overrides.delete(a)) {
        b = cc11001100_hook("b", Array.from(b.overrides.values()).pop() || b.originalValue, "assign");
        var d = cc11001100_hook("d", a.element, "var-init");
        b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c);
      }
    });
  }
  function cm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", {
      value: cc11001100_hook("value", c, "object-key-init"),
      priority: cc11001100_hook("priority", "important", "object-key-init")
    }, "assign");
    var d = cc11001100_hook("d", a.l.get(b), "var-init");
    if (!d) {
      d = cc11001100_hook("d", a.element, "assign");
      var e = cc11001100_hook("e", d.style.getPropertyValue(b), "var-init");
      d = cc11001100_hook("d", {
        originalValue: cc11001100_hook("originalValue", e ? {
          value: cc11001100_hook("value", e, "object-key-init"),
          priority: cc11001100_hook("priority", d.style.getPropertyPriority(b), "object-key-init")
        } : null, "object-key-init"),
        overrides: cc11001100_hook("overrides", new Map(), "object-key-init")
      }, "assign");
      a.l.set(b, d);
    }
    d.overrides.delete(a);
    d.overrides.set(a, c);
    a = cc11001100_hook("a", a.element, "assign");
    c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b);
  }
  var dm = cc11001100_hook("dm", class extends Ik {
    constructor(a, b) {
      super();
      this.element = cc11001100_hook("this.element", b, "assign");
      a = cc11001100_hook("a", a.googTempStyleOverrideInfo = cc11001100_hook("a.googTempStyleOverrideInfo", a.googTempStyleOverrideInfo || new Map(), "assign"), "assign");
      var c = cc11001100_hook("c", a.get(b), "var-init");
      c ? b = cc11001100_hook("b", c, "assign") : (c = cc11001100_hook("c", new Map(), "assign"), a.set(b, c), b = cc11001100_hook("b", c, "assign"));
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    j() {
      bm(this);
      super.j();
    }
  }, "var-init");
  function em(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new fm({
      first: cc11001100_hook("first", a.M, "object-key-init"),
      second: cc11001100_hook("second", b.M, "object-key-init")
    }), "var-init");
    a.X(() => Q(c, {
      first: cc11001100_hook("first", a.M, "object-key-init"),
      second: cc11001100_hook("second", b.M, "object-key-init")
    }));
    b.X(() => Q(c, {
      first: cc11001100_hook("first", a.M, "object-key-init"),
      second: cc11001100_hook("second", b.M, "object-key-init")
    }));
    return c;
  }
  function gm(...a) {
    const b = cc11001100_hook("b", [...a], "var-init"),
      c = cc11001100_hook("c", () => b.every(f => f.M), "var-init"),
      d = cc11001100_hook("d", new fm(c()), "var-init"),
      e = cc11001100_hook("e", () => {
        Q(d, c());
      }, "var-init");
    b.forEach(f => f.X(e));
    return hm(d);
  }
  function im(...a) {
    const b = cc11001100_hook("b", [...a], "var-init"),
      c = cc11001100_hook("c", () => -1 !== b.findIndex(f => f.M), "var-init"),
      d = cc11001100_hook("d", new fm(c()), "var-init"),
      e = cc11001100_hook("e", () => {
        Q(d, c());
      }, "var-init");
    b.forEach(f => f.X(e));
    return hm(d);
  }
  function Q(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.M = cc11001100_hook("a.M", b, "assign");
    a.l.forEach(c => {
      c(a.M);
    });
  }
  function hm(a, b = jm) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.M, "var-init");
    const d = cc11001100_hook("d", new fm(a.M), "var-init");
    a.X(e => {
      b(e, c) || (c = cc11001100_hook("c", e, "assign"), Q(d, e));
    });
    return d;
  }
  function km(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.j(d => {
      d === b && c();
    });
  }
  function lm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!1 === a.M) b();else {
      var c = cc11001100_hook("c", {
        Yb: cc11001100_hook("Yb", null, "object-key-init")
      }, "var-init");
      c.Yb = cc11001100_hook("c.Yb", km(a, !1, () => {
        c.Yb && (c.Yb(), c.Yb = cc11001100_hook("c.Yb", null, "assign"));
        b();
      }), "assign");
    }
  }
  function mm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    hm(a).X(d => {
      d === b && c();
    });
  }
  function nm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.m && a.m();
    a.m = cc11001100_hook("a.m", b.X(c => Q(a, c), !0), "assign");
  }
  class fm {
    constructor(a) {
      this.M = cc11001100_hook("this.M", a, "assign");
      this.l = cc11001100_hook("this.l", new Map(), "assign");
      this.v = cc11001100_hook("this.v", 1, "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
    }
    X(a, b = !1) {
      const c = cc11001100_hook("c", this.v++, "var-init");
      this.l.set(c, a);
      b && a(this.M);
      return () => {
        this.l.delete(c);
      };
    }
    j(a) {
      return this.X(a, !0);
    }
    map(a) {
      const b = cc11001100_hook("b", new fm(a(this.M)), "var-init");
      this.X(c => Q(b, a(c)));
      return b;
    }
  }
  function jm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a == b;
  }
  ;
  function om(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ab(a.j, c => {
      c(b);
    });
  }
  var pm = cc11001100_hook("pm", class {
    constructor() {
      this.j = cc11001100_hook("this.j", [], "assign");
    }
  }, "var-init");
  class qm {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    X(a) {
      this.j.j.push(a);
    }
    map(a) {
      const b = cc11001100_hook("b", new pm(), "var-init");
      this.X(c => om(b, a(c)));
      return new qm(b);
    }
  }
  function rm(...a) {
    const b = cc11001100_hook("b", new pm(), "var-init");
    a.forEach(c => {
      c.X(d => {
        om(b, d);
      });
    });
    return new qm(b);
  }
  ;
  function sm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return hm(em(a.j, a.m).map(b => {
      var c = cc11001100_hook("c", b.first, "var-init");
      b = cc11001100_hook("b", b.second, "assign");
      return null == c || null == b ? null : tm(c, b);
    }));
  }
  var vm = cc11001100_hook("vm", class {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", new fm(null), "assign");
      this.m = cc11001100_hook("this.m", new fm(null), "assign");
      this.v = cc11001100_hook("this.v", new pm(), "assign");
      this.C = cc11001100_hook("this.C", b => {
        null == this.j.M && 1 == b.touches.length && Q(this.j, b.touches[0]);
      }, "assign");
      this.A = cc11001100_hook("this.A", b => {
        const c = cc11001100_hook("c", this.j.M, "var-init");
        null != c && (b = cc11001100_hook("b", um(c, b.changedTouches), "assign"), null != b && (Q(this.j, null), Q(this.m, null), om(this.v, tm(c, b))));
      }, "assign");
      this.B = cc11001100_hook("this.B", b => {
        var c = cc11001100_hook("c", this.j.M, "var-init");
        null != c && (c = cc11001100_hook("c", um(c, b.changedTouches), "assign"), null != c && (Q(this.m, c), b.preventDefault()));
      }, "assign");
    }
  }, "var-init");
  function tm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      We: cc11001100_hook("We", b.pageX - a.pageX, "object-key-init"),
      Xe: cc11001100_hook("Xe", b.pageY - a.pageY, "object-key-init")
    };
  }
  function um(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null == b) return null;
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; ++c) if (b[c].identifier == a.identifier) return b[c];
    return null;
  }
  ;
  function wm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return hm(em(a.j, a.l).map(b => {
      var c = cc11001100_hook("c", b.first, "var-init");
      b = cc11001100_hook("b", b.second, "assign");
      return null == c || null == b ? null : xm(c, b);
    }));
  }
  var ym = cc11001100_hook("ym", class {
    constructor(a, b) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.j = cc11001100_hook("this.j", new fm(null), "assign");
      this.l = cc11001100_hook("this.l", new fm(null), "assign");
      this.m = cc11001100_hook("this.m", new pm(), "assign");
      this.G = cc11001100_hook("this.G", c => {
        Q(this.j, c);
      }, "assign");
      this.B = cc11001100_hook("this.B", c => {
        const d = cc11001100_hook("d", this.j.M, "var-init");
        null != d && (Q(this.j, null), Q(this.l, null), om(this.m, xm(d, c)));
      }, "assign");
      this.C = cc11001100_hook("this.C", c => {
        null != this.j.M && (Q(this.l, c), c.preventDefault());
      }, "assign");
    }
  }, "var-init");
  function xm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      We: cc11001100_hook("We", b.screenX - a.screenX, "object-key-init"),
      Xe: cc11001100_hook("Xe", b.screenY - a.screenY, "object-key-init")
    };
  }
  ;
  var Bm = cc11001100_hook("Bm", (a, b) => {
    const c = cc11001100_hook("c", new zm(a, b), "var-init");
    return () => Am(c);
  }, "var-init");
  function Am(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.j) return !1;
    if (null == a.l) return Cm(a), !0;
    const b = cc11001100_hook("b", a.l + 1E3 - new Date().getTime(), "var-init");
    if (1 > b) return Cm(a), !0;
    Dm(a, b);
    return !0;
  }
  function Cm(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l = cc11001100_hook("a.l", new Date().getTime(), "assign");
    a.v();
  }
  function Dm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j = cc11001100_hook("a.j", !0, "assign");
    a.m.setTimeout(() => {
      a.j = cc11001100_hook("a.j", !1, "assign");
      Cm(a);
    }, b);
  }
  class zm {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
      this.j = cc11001100_hook("this.j", !1, "assign");
    }
  }
  ;
  function Em(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Fm(wm(a.j), sm(a.l));
  }
  function Gm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return rm(new qm(a.j.m), new qm(a.l.v));
  }
  var Hm = cc11001100_hook("Hm", class {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
  }, "var-init");
  function Fm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return em(a, b).map(({
      first: c,
      second: d
    }) => c || d || null);
  }
  ;
  function Im(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new Jm(a, b);
  }
  function Km(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.win.requestAnimationFrame(() => {
      a.B || Q(a.m, new rg(a.element.offsetWidth, a.element.offsetHeight));
    });
  }
  function Lm(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l || (a.l = cc11001100_hook("a.l", !0, "assign"), a.v.observe(a.element));
    return hm(a.m, sg);
  }
  var Jm = cc11001100_hook("Jm", class extends Ik {
    constructor(a, b) {
      super();
      this.win = cc11001100_hook("this.win", a, "assign");
      this.element = cc11001100_hook("this.element", b, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.m = cc11001100_hook("this.m", new fm(new rg(this.element.offsetWidth, this.element.offsetHeight)), "assign");
      this.v = cc11001100_hook("this.v", new ResizeObserver(() => {
        Km(this);
      }), "assign");
    }
    j() {
      this.v.disconnect();
      super.j();
    }
  }, "var-init");
  function Mm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      top: cc11001100_hook("top", a.j - b, "object-key-init"),
      right: cc11001100_hook("right", a.m + a.l, "object-key-init"),
      bottom: cc11001100_hook("bottom", a.j + b, "object-key-init"),
      left: cc11001100_hook("left", a.m, "object-key-init")
    };
  }
  class Nm {
    constructor(a, b, c) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
    }
  }
  ;
  function Om(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.getBoundingClientRect(), "assign");
    return new Pm(a.top + Ol(b), a.bottom - a.top);
  }
  function Qm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Pm(Math.round(a.j), Math.round(a.l));
  }
  class Pm {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    getHeight() {
      return this.l;
    }
  }
  ;
  function Rm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.B = cc11001100_hook("a.B", !0, "assign");
    a.m = cc11001100_hook("a.m", b, "assign");
    a.l.forEach(c => {
      c(a.m);
    });
    a.l = cc11001100_hook("a.l", [], "assign");
  }
  class Sm {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.B = cc11001100_hook("this.B", !1, "assign");
      this.A = cc11001100_hook("this.A", this.m = cc11001100_hook("this.m", null, "assign"), "assign");
      this.C = cc11001100_hook("this.C", Bm(a, () => {
        if (null != this.A) {
          var b = cc11001100_hook("b", Jl(this.j, !0) - this.A, "var-init");
          1E3 < b && Rm(this, b);
        }
      }), "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
    }
    init(a, b) {
      null == a ? (this.A = cc11001100_hook("this.A", a = cc11001100_hook("a", Jl(this.j, !0), "assign"), "assign"), this.j.addEventListener("scroll", this.C), null != b && b(a)) : this.v = cc11001100_hook("this.v", this.j.setTimeout(() => {
        this.init(void 0, b);
      }, a), "assign");
    }
    xa() {
      null != this.v && this.j.clearTimeout(this.v);
      this.j.removeEventListener("scroll", this.C);
      this.l = cc11001100_hook("this.l", [], "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
    }
    addListener(a) {
      this.B ? a(this.m) : this.l.push(a);
    }
  }
  ;
  function Tm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Um(a, new dm(a, a.document.body), new dm(a, a.document.documentElement), new dm(a, a.document.documentElement));
  }
  function Vm(a) {
    cc11001100_hook("a", a, "function-parameter");
    cm(a.m, "scroll-behavior", "auto");
    const b = cc11001100_hook("b", Wm(a.win), "var-init");
    b.activePageScrollPreventers.add(a);
    null === b.previousWindowScroll && (b.previousWindowScroll = cc11001100_hook("b.previousWindowScroll", a.win.scrollY, "assign"));
    cm(a.j, "position", "fixed");
    cm(a.j, "top", `${-b.previousWindowScroll}px`);
    cm(a.j, "width", "100%");
    cm(a.j, "overflow-x", "hidden");
    cm(a.j, "overflow-y", "hidden");
    cm(a.l, "overflow-x", "hidden");
    cm(a.l, "overflow-y", "hidden");
  }
  function Xm(a) {
    cc11001100_hook("a", a, "function-parameter");
    bm(a.j);
    bm(a.l);
    const b = cc11001100_hook("b", Wm(a.win), "var-init");
    b.activePageScrollPreventers.delete(a);
    0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = cc11001100_hook("b.previousWindowScroll", null, "assign"));
    bm(a.m);
  }
  var Um = cc11001100_hook("Um", class {
    constructor(a, b, c, d) {
      this.win = cc11001100_hook("this.win", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
    }
  }, "var-init");
  function Wm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.googPageScrollPreventerInfo = cc11001100_hook("a.googPageScrollPreventerInfo", a.googPageScrollPreventerInfo || {
      previousWindowScroll: cc11001100_hook("previousWindowScroll", null, "object-key-init"),
      activePageScrollPreventers: cc11001100_hook("activePageScrollPreventers", new Set(), "object-key-init")
    }, "assign");
  }
  ;
  var Ym = cc11001100_hook("Ym", (a, b) => a.reduce((c, d) => c.concat(b(d)), []), "var-init");
  class Zm {
    constructor(a = 1) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    next() {
      var a = cc11001100_hook("a", 48271 * this.j % 2147483647, "var-init");
      this.j = cc11001100_hook("this.j", 0 > 2147483647 * a ? a + 2147483647 : a, "assign");
      return this.j / 2147483647;
    }
  }
  ;
  function $m(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    for (const e of a.j) b(e) ? d.push(e) : c(e);
    return new an(d);
  }
  function bn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.j.slice(0);
  }
  function cn(a, b = 1) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", bn(a), "assign");
    const c = cc11001100_hook("c", new Zm(b), "var-init");
    Pb(a, () => c.next());
    return new an(a);
  }
  const an = cc11001100_hook("an", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a.slice(0), "assign");
    }
    forEach(a) {
      this.j.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new an(Bb(this.j, a));
    }
    apply(a) {
      return new an(a(bn(this)));
    }
    sort(a) {
      return new an(bn(this).sort(a));
    }
    get(a) {
      return this.j[a];
    }
    add(a) {
      const b = cc11001100_hook("b", bn(this), "var-init");
      b.push(a);
      return new an(b);
    }
  }, "var-init");
  class dn {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new Zl(a), "assign");
    }
    contains(a) {
      return this.j.contains(a);
    }
  }
  ;
  function en(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new fn({
      value: cc11001100_hook("value", a, "object-key-init")
    }, null);
  }
  function gn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new fn(null, Error(a));
  }
  function hn(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return en(a());
    } catch (b) {
      return new fn(null, b);
    }
  }
  function jn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a.j ? a.j.value : null;
  }
  function kn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.j && b(a.j.value);
  }
  function ln(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.j || b(a.l);
    return a;
  }
  class fn {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    map(a) {
      return null != this.j ? (a = cc11001100_hook("a", a(this.j.value), "assign"), a instanceof fn ? a : en(a)) : this;
    }
  }
  ;
  class mn {
    constructor() {
      this.j = cc11001100_hook("this.j", new Yl(), "assign");
    }
    set(a, b) {
      let c = cc11001100_hook("c", this.j.get(a), "var-init");
      c || (c = cc11001100_hook("c", new Zl(), "assign"), this.j.set(a, c));
      c.add(b);
    }
  }
  ;
  function nn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !a;
  }
  ;
  var pn = cc11001100_hook("pn", class extends L {
      constructor(a) {
        super(a, -1, on);
      }
      getId() {
        return w(this, 3);
      }
    }, "var-init"),
    on = cc11001100_hook("on", [4], "var-init");
  class qn {
    constructor(a, {
      Od: b,
      ff: c,
      Wf: d,
      Le: e
    }) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.v = cc11001100_hook("this.v", new an(b || []), "assign");
      this.l = cc11001100_hook("this.l", e, "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
    }
  }
  ;
  var rn = cc11001100_hook("rn", a => {
      var b = cc11001100_hook("b", a.split("~").filter(c => 0 < c.length), "var-init");
      a = cc11001100_hook("a", new Yl(), "assign");
      for (const c of b) b = cc11001100_hook("b", c.indexOf("."), "assign"), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
      return a;
    }, "var-init"),
    tn = cc11001100_hook("tn", a => {
      var b = cc11001100_hook("b", sn(a), "var-init");
      a = cc11001100_hook("a", [], "assign");
      for (let c of b) b = cc11001100_hook("b", String(c.qb), "assign"), a.push(c.Qa + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
      return a.join("~");
    }, "var-init");
  const sn = cc11001100_hook("sn", a => {
      const b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", a.v, "var-init");
      c && c.j.length && b.push({
        Qa: cc11001100_hook("Qa", "a", "object-key-init"),
        qb: cc11001100_hook("qb", un(c), "object-key-init")
      });
      null != a.m && b.push({
        Qa: cc11001100_hook("Qa", "as", "object-key-init"),
        qb: cc11001100_hook("qb", a.m, "object-key-init")
      });
      null != a.j && b.push({
        Qa: cc11001100_hook("Qa", "i", "object-key-init"),
        qb: cc11001100_hook("qb", String(a.j), "object-key-init")
      });
      null != a.l && b.push({
        Qa: cc11001100_hook("Qa", "rp", "object-key-init"),
        qb: cc11001100_hook("qb", String(a.l), "object-key-init")
      });
      b.sort(function (d, e) {
        return d.Qa.localeCompare(e.Qa);
      });
      b.unshift({
        Qa: cc11001100_hook("Qa", "t", "object-key-init"),
        qb: cc11001100_hook("qb", vn(a.A), "object-key-init")
      });
      return b;
    }, "var-init"),
    vn = cc11001100_hook("vn", a => {
      switch (a) {
        case 0:
          return "aa";
        case 1:
          return "ma";
        default:
          throw Error("Invalid slot type" + a);
      }
    }, "var-init"),
    un = cc11001100_hook("un", a => {
      a = cc11001100_hook("a", bn(a).map(wn), "assign");
      a = cc11001100_hook("a", JSON.stringify(a), "assign");
      return ah(a);
    }, "var-init"),
    wn = cc11001100_hook("wn", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      null != w(a, 7) && (b.q = cc11001100_hook("b.q", w(a, 7), "assign"));
      null != wd(a, 2) && (b.o = cc11001100_hook("b.o", wd(a, 2), "assign"));
      null != wd(a, 5) && (b.p = cc11001100_hook("b.p", wd(a, 5), "assign"));
      return b;
    }, "var-init");
  function xn() {
    var a = cc11001100_hook("a", new yn(), "var-init");
    return x(a, 2, 1);
  }
  var yn = cc11001100_hook("yn", class extends L {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return x(this, 1, a);
    }
  }, "var-init");
  function zn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [].slice.call(arguments).filter(ge(e => null === e)), "var-init");
    if (!b.length) return null;
    let c = cc11001100_hook("c", [], "var-init"),
      d = cc11001100_hook("d", {}, "var-init");
    b.forEach(e => {
      c = cc11001100_hook("c", c.concat(e.Td || []), "assign");
      d = cc11001100_hook("d", Object.assign(d, e.Cb()), "assign");
    });
    return new An(c, d);
  }
  function Bn(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a) {
      case 1:
        return new An(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "mc", "object-key-init")
        });
      case 2:
        return new An(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "h", "object-key-init")
        });
      case 3:
        return new An(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "f", "object-key-init")
        });
      case 4:
        return new An(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "s", "object-key-init")
        });
      default:
        return null;
    }
  }
  function Cn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? null : new An(null, {
      google_ml_rank: cc11001100_hook("google_ml_rank", a, "object-key-init")
    });
  }
  function Dn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? null : new An(null, {
      google_placement_id: cc11001100_hook("google_placement_id", tn(a), "object-key-init")
    });
  }
  function En({
    Af: a,
    Hf: b = null
  }) {
    if (null == a) return null;
    a = cc11001100_hook("a", {
      google_daaos_ts: cc11001100_hook("google_daaos_ts", a, "object-key-init")
    }, "assign");
    null != b && (a.google_erank = cc11001100_hook("a.google_erank", b + 1, "assign"));
    return new An(null, a);
  }
  class An {
    constructor(a, b) {
      this.Td = cc11001100_hook("this.Td", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
    Cb() {
      return this.j;
    }
  }
  ;
  var Fn = cc11001100_hook("Fn", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Gn = cc11001100_hook("Gn", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Hn = cc11001100_hook("Hn", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var In = cc11001100_hook("In", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Kn = cc11001100_hook("Kn", class extends L {
      constructor(a) {
        super(a, -1, Jn);
      }
      G() {
        return w(this, 2);
      }
      B() {
        return w(this, 5);
      }
      j() {
        return G(this, In, 3);
      }
      v() {
        return wd(this, 4);
      }
      A() {
        return fd(this, 6);
      }
      F() {
        return bd(this, Hn, 7);
      }
    }, "var-init"),
    Jn = cc11001100_hook("Jn", [3], "var-init");
  var Ln = cc11001100_hook("Ln", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Mn = cc11001100_hook("Mn", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return B(this, 18, !1);
    }
    A() {
      x(this, 18, !1);
    }
    v() {
      return B(this, 21, !1);
    }
  }, "var-init");
  var Nn = cc11001100_hook("Nn", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var On = cc11001100_hook("On", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Pn = cc11001100_hook("Pn", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Qn = cc11001100_hook("Qn", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Rn = cc11001100_hook("Rn", class extends L {
    constructor(a) {
      super(a);
    }
    W() {
      return D(this, pn, 1);
    }
    j() {
      return w(this, 2);
    }
  }, "var-init");
  var Sn = cc11001100_hook("Sn", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Tn = cc11001100_hook("Tn", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Un = cc11001100_hook("Un", class extends L {
      constructor(a) {
        super(a);
      }
      getName() {
        return w(this, 4);
      }
    }, "var-init"),
    Vn = cc11001100_hook("Vn", [1, 2, 3], "var-init");
  var Xn = cc11001100_hook("Xn", class extends L {
      constructor(a) {
        super(a, -1, Wn);
      }
    }, "var-init"),
    Wn = cc11001100_hook("Wn", [2, 5, 6, 11], "var-init");
  var Yn = cc11001100_hook("Yn", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return y(this, 2);
    }
  }, "var-init");
  var Zn = cc11001100_hook("Zn", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return w(this, 1);
    }
  }, "var-init");
  var $n = cc11001100_hook("$n", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var ao = cc11001100_hook("ao", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var co = cc11001100_hook("co", class extends L {
      constructor(a) {
        super(a, -1, bo);
      }
      j() {
        return D(this, ao, 2);
      }
    }, "var-init"),
    bo = cc11001100_hook("bo", [1], "var-init");
  var eo = cc11001100_hook("eo", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var fo = cc11001100_hook("fo", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return K(this, 2);
    }
  }, "var-init");
  function go() {
    var a = cc11001100_hook("a", new ho(), "var-init");
    a = cc11001100_hook("a", x(a, 1, 1), "assign");
    var b = cc11001100_hook("b", new eo(), "var-init");
    b = cc11001100_hook("b", x(b, 2, !0), "assign");
    a = cc11001100_hook("a", rd(a, 2, b), "assign");
    b = cc11001100_hook("b", new co(), "assign");
    var c = cc11001100_hook("c", new $n(), "var-init");
    c = cc11001100_hook("c", x(c, 1, 1), "assign");
    ud(b, 1, $n, c);
    c = cc11001100_hook("c", new ao(), "assign");
    c = cc11001100_hook("c", x(c, 1, !0), "assign");
    b = cc11001100_hook("b", rd(b, 2, c), "assign");
    return rd(a, 3, b);
  }
  var ho = cc11001100_hook("ho", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var io = cc11001100_hook("io", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return Cd(this, 1);
    }
    v() {
      return K(this, 3);
    }
    A() {
      return K(this, 4);
    }
  }, "var-init");
  var jo = cc11001100_hook("jo", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return yd(this, 1);
    }
  }, "var-init");
  var ko = cc11001100_hook("ko", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return K(this, 1);
    }
    v() {
      return K(this, 2);
    }
    A() {
      return K(this, 3);
    }
  }, "var-init");
  var lo = cc11001100_hook("lo", class extends L {
    constructor(a) {
      super(a);
    }
    A() {
      return D(this, io, 8);
    }
    B() {
      return D(this, io, 9);
    }
    j() {
      return D(this, ko, 4);
    }
    v() {
      return D(this, jo, 5);
    }
    G() {
      return K(this, 10);
    }
  }, "var-init");
  var mo = cc11001100_hook("mo", class extends L {
    constructor(a) {
      super(a);
    }
    v() {
      return yd(this, 3);
    }
    B() {
      return D(this, ko, 5);
    }
    j() {
      return D(this, jo, 6);
    }
    A() {
      return K(this, 8);
    }
    G() {
      return B(this, 11);
    }
  }, "var-init");
  var oo = cc11001100_hook("oo", class extends L {
      constructor(a) {
        super(a, -1, no);
      }
    }, "var-init"),
    no = cc11001100_hook("no", [2], "var-init");
  var po = cc11001100_hook("po", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var ro = cc11001100_hook("ro", class extends L {
      constructor(a) {
        super(a, -1, qo);
      }
    }, "var-init"),
    qo = cc11001100_hook("qo", [1], "var-init");
  var so = cc11001100_hook("so", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return w(this, 1);
    }
  }, "var-init");
  var to = cc11001100_hook("to", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var vo = cc11001100_hook("vo", class extends L {
      constructor(a) {
        super(a, -1, uo);
      }
      j() {
        return G(this, to, 1);
      }
    }, "var-init"),
    uo = cc11001100_hook("uo", [1], "var-init");
  var wo = cc11001100_hook("wo", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var yo = cc11001100_hook("yo", class extends L {
      constructor(a) {
        super(a, -1, xo);
      }
    }, "var-init"),
    xo = cc11001100_hook("xo", [3, 4], "var-init");
  var zo = cc11001100_hook("zo", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Bo = cc11001100_hook("Bo", class extends L {
      constructor(a) {
        super(a, -1, Ao);
      }
      W() {
        return D(this, pn, 1);
      }
      j() {
        return w(this, 2);
      }
    }, "var-init"),
    Ao = cc11001100_hook("Ao", [6, 7, 9, 10, 11], "var-init");
  var Do = cc11001100_hook("Do", class extends L {
      constructor(a) {
        super(a, -1, Co);
      }
    }, "var-init"),
    Co = cc11001100_hook("Co", [4], "var-init");
  var Eo = cc11001100_hook("Eo", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var Go = cc11001100_hook("Go", class extends L {
      constructor(a) {
        super(a, -1, Fo);
      }
    }, "var-init"),
    Fo = cc11001100_hook("Fo", [6], "var-init");
  var Ho = cc11001100_hook("Ho", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return yd(this, 1);
    }
  }, "var-init");
  var Io = cc11001100_hook("Io", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ko = cc11001100_hook("Ko", class extends L {
      constructor(a) {
        super(a);
      }
      j() {
        return Dd(this, Io, 2, Jo);
      }
    }, "var-init"),
    Jo = cc11001100_hook("Jo", [1, 2], "var-init");
  var Lo = cc11001100_hook("Lo", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return D(this, Ko, 3);
    }
  }, "var-init");
  var Mo = cc11001100_hook("Mo", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Oo = cc11001100_hook("Oo", class extends L {
      constructor(a) {
        super(a, -1, No);
      }
      j() {
        return G(this, Mo, 1);
      }
    }, "var-init"),
    No = cc11001100_hook("No", [1], "var-init");
  var Qo = cc11001100_hook("Qo", class extends L {
      constructor(a) {
        super(a, -1, Po);
      }
      j() {
        return gd(this, 1, Yc);
      }
      v() {
        return D(this, Lo, 3);
      }
    }, "var-init"),
    Po = cc11001100_hook("Po", [1, 4], "var-init");
  function Ro(a) {
    cc11001100_hook("a", a, "function-parameter");
    return D(a, Gn, 13);
  }
  function So(a) {
    cc11001100_hook("a", a, "function-parameter");
    return D(a, mo, 28);
  }
  var Uo = cc11001100_hook("Uo", Wd(class extends L {
      constructor(a) {
        super(a, -1, To);
      }
      j() {
        return D(this, Mn, 15);
      }
    }), "var-init"),
    To = cc11001100_hook("To", [1, 2, 5, 7], "var-init");
  var Vo = cc11001100_hook("Vo", class extends L {
      constructor(a) {
        super(a);
      }
    }, "var-init"),
    Wo = cc11001100_hook("Wo", Wd(Vo), "var-init");
  function Xo(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.localStorage.getItem("google_ama_settings"), "var-init");
      return b ? Wo(b) : null;
    } catch (b) {
      return null;
    }
  }
  function Yo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (void 0 !== a.Vc) {
      let c = cc11001100_hook("c", Xo(b), "var-init");
      c || (c = cc11001100_hook("c", new Vo(), "assign"));
      void 0 !== a.Vc && x(c, 2, a.Vc);
      x(c, 1, Ea() + 864E5);
      a = cc11001100_hook("a", Qd(c), "assign");
      try {
        b.localStorage.setItem("google_ama_settings", a);
      } catch (d) {}
    } else if ((a = cc11001100_hook("a", Xo(b), "assign")) && w(a, 1) < Ea()) try {
      b.localStorage.removeItem("google_ama_settings");
    } catch (c) {}
  }
  ;
  function Zo(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    Sl(a.getElementsByTagName("p"), function (c) {
      100 <= $o(c) && b.push(c);
    });
    return b;
  }
  function $o(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = cc11001100_hook("b", 0, "var-init");
    Sl(a.childNodes, function (c) {
      b += cc11001100_hook("b", $o(c), "assign");
    });
    return b;
  }
  function ap(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function bp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null == a.j) return b;
    switch (a.j) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.j);
    }
  }
  const cp = cc11001100_hook("cp", class {
    constructor(a, b, c, d) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
    }
    query(a) {
      var b = cc11001100_hook("b", [], "var-init");
      try {
        b = cc11001100_hook("b", a.querySelectorAll(this.v), "assign");
      } catch (f) {}
      if (!b.length) return [];
      a = cc11001100_hook("a", Ib(b), "assign");
      a = cc11001100_hook("a", bp(this, a), "assign");
      "number" === typeof this.l && (b = cc11001100_hook("b", this.l, "assign"), 0 > b && (b += cc11001100_hook("b", a.length, "assign")), a = cc11001100_hook("a", 0 <= b && b < a.length ? [a[b]] : [], "assign"));
      if ("number" === typeof this.m) {
        b = cc11001100_hook("b", [], "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
          var d = cc11001100_hook("d", Zo(a[c]), "var-init"),
            e = cc11001100_hook("e", this.m, "var-init");
          0 > e && (e += cc11001100_hook("e", d.length, "assign"));
          0 <= e && e < d.length && b.push(d[e]);
        }
        a = cc11001100_hook("a", b, "assign");
      }
      return a;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: cc11001100_hook("nativeQuery", this.v, "object-key-init"),
        occurrenceIndex: cc11001100_hook("occurrenceIndex", this.l, "object-key-init"),
        paragraphIndex: cc11001100_hook("paragraphIndex", this.m, "object-key-init"),
        ignoreMode: cc11001100_hook("ignoreMode", this.j, "object-key-init")
      });
    }
  }, "var-init");
  function dp(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (1 != a.nodeType) var b = cc11001100_hook("b", !1, "var-init");else if (b = cc11001100_hook("b", "INS" == a.tagName, "assign")) a: {
      b = cc11001100_hook("b", ["adsbygoogle-placeholder"], "assign");
      a = cc11001100_hook("a", a.className ? a.className.split(/\s+/) : [], "assign");
      for (var c = cc11001100_hook("c", {}, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < a.length; ++d) c[a[d]] = cc11001100_hook("c[a[d]]", !0, "assign");
      for (d = cc11001100_hook("d", 0, "assign"); d < b.length; ++d) if (!c[b[d]]) {
        b = cc11001100_hook("b", !1, "assign");
        break a;
      }
      b = cc11001100_hook("b", !0, "assign");
    }
    return b;
  }
  function ep(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Tl(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
  }
  ;
  var R = cc11001100_hook("R", class {
      constructor(a, b = !1) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }, "var-init"),
    fp = cc11001100_hook("fp", class {
      constructor(a, b = 0) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }, "var-init"),
    gp = cc11001100_hook("gp", class {
      constructor(a) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", "", "assign");
      }
    }, "var-init");
  var hp = cc11001100_hook("hp", new R(1082, !0), "var-init"),
    ip = cc11001100_hook("ip", new fp(1130, 100), "var-init"),
    jp = cc11001100_hook("jp", new fp(1032, 200), "var-init"),
    kp = cc11001100_hook("kp", new gp(14), "var-init"),
    lp = cc11001100_hook("lp", new R(1240), "var-init"),
    mp = cc11001100_hook("mp", new fp(1224, .01), "var-init"),
    np = cc11001100_hook("np", new R(1122, !0), "var-init"),
    op = cc11001100_hook("op", new R(1239), "var-init"),
    pp = cc11001100_hook("pp", new R(1226), "var-init"),
    qp = cc11001100_hook("qp", new R(1196), "var-init"),
    rp = cc11001100_hook("rp", new R(1160), "var-init"),
    sp = cc11001100_hook("sp", new R(316), "var-init"),
    tp = cc11001100_hook("tp", new R(334), "var-init"),
    up = cc11001100_hook("up", new fp(54), "var-init"),
    vp = cc11001100_hook("vp", new R(313), "var-init"),
    wp = cc11001100_hook("wp", new fp(66, -1), "var-init"),
    xp = cc11001100_hook("xp", new fp(65, -1), "var-init"),
    yp = cc11001100_hook("yp", new R(369), "var-init"),
    zp = cc11001100_hook("zp", new R(1241), "var-init"),
    Ap = cc11001100_hook("Ap", new R(1236), "var-init"),
    Bp = cc11001100_hook("Bp", new R(368), "var-init"),
    Cp = cc11001100_hook("Cp", new R(1223), "var-init"),
    Dp = cc11001100_hook("Dp", new R(1242), "var-init"),
    Ep = cc11001100_hook("Ep", new R(1230), "var-init"),
    Fp = cc11001100_hook("Fp", new R(1229), "var-init"),
    Gp = cc11001100_hook("Gp", new R(1231), "var-init"),
    Hp = cc11001100_hook("Hp", new R(1248), "var-init"),
    Ip = cc11001100_hook("Ip", new R(1244), "var-init"),
    Jp = cc11001100_hook("Jp", new fp(1169, 61440), "var-init"),
    Kp = cc11001100_hook("Kp", new R(1171, !0), "var-init"),
    Lp = cc11001100_hook("Lp", new R(1235), "var-init"),
    Mp = cc11001100_hook("Mp", new R(1151), "var-init"),
    Np = cc11001100_hook("Np", new fp(1072, .75), "var-init"),
    Op = cc11001100_hook("Op", new fp(1168, 61440), "var-init"),
    Pp = cc11001100_hook("Pp", new R(290), "var-init"),
    Qp = cc11001100_hook("Qp", new R(1222), "var-init"),
    Rp = cc11001100_hook("Rp", new R(1238), "var-init"),
    Sp = cc11001100_hook("Sp", new R(1237), "var-init"),
    Tp = cc11001100_hook("Tp", new R(1147), "var-init"),
    Up = cc11001100_hook("Up", new fp(1245, 3600), "var-init"),
    Vp = cc11001100_hook("Vp", new fp(506864295), "var-init"),
    Wp = cc11001100_hook("Wp", new fp(508040914, 100), "var-init"),
    Xp = cc11001100_hook("Xp", new R(501545960), "var-init"),
    Yp = cc11001100_hook("Yp", new R(289410051), "var-init"),
    Zp = cc11001100_hook("Zp", new R(1120), "var-init"),
    $p = cc11001100_hook("$p", new fp(1114, 1), "var-init"),
    aq = cc11001100_hook("aq", new R(515292965), "var-init"),
    bq = cc11001100_hook("bq", new R(506914611), "var-init"),
    cq = cc11001100_hook("cq", new R(45401989), "var-init"),
    dq = cc11001100_hook("dq", new R(511172886), "var-init"),
    eq = cc11001100_hook("eq", new R(518318645), "var-init"),
    fq = cc11001100_hook("fq", new fp(506871937), "var-init"),
    gq = cc11001100_hook("gq", new R(513037478), "var-init"),
    hq = cc11001100_hook("hq", new R(483374575), "var-init"),
    iq = cc11001100_hook("iq", new gp(1166), "var-init"),
    jq = cc11001100_hook("jq", new R(1E4), "var-init"),
    kq = cc11001100_hook("kq", new fp(472785970, 500), "var-init"),
    lq = cc11001100_hook("lq", new R(83), "var-init"),
    mq = cc11001100_hook("mq", new R(439828594), "var-init"),
    nq = cc11001100_hook("nq", new R(483962503), "var-init"),
    oq = cc11001100_hook("oq", new R(506738118), "var-init"),
    pq = cc11001100_hook("pq", new R(77), "var-init"),
    qq = cc11001100_hook("qq", new R(78), "var-init"),
    rq = cc11001100_hook("rq", new R(309), "var-init"),
    sq = cc11001100_hook("sq", new R(80), "var-init"),
    tq = cc11001100_hook("tq", new R(76), "var-init"),
    uq = cc11001100_hook("uq", new R(1957, !0), "var-init"),
    vq = cc11001100_hook("vq", new R(380025941), "var-init"),
    wq = cc11001100_hook("wq", new R(84), "var-init"),
    xq = cc11001100_hook("xq", new R(1973), "var-init"),
    yq = cc11001100_hook("yq", new R(188), "var-init"),
    zq = cc11001100_hook("zq", new R(1975, !0), "var-init"),
    Aq = cc11001100_hook("Aq", new R(1974, !0), "var-init"),
    Bq = cc11001100_hook("Bq", new R(504787204), "var-init"),
    Cq = cc11001100_hook("Cq", new R(1162), "var-init"),
    Dq = cc11001100_hook("Dq", new fp(501545963, 1), "var-init"),
    Eq = cc11001100_hook("Eq", new fp(1157), "var-init"),
    Fq = cc11001100_hook("Fq", new R(494741144), "var-init"),
    Gq = cc11001100_hook("Gq", new fp(1119, 300), "var-init"),
    Hq = cc11001100_hook("Hq", new fp(1193, 100), "var-init"),
    Iq = cc11001100_hook("Iq", new fp(1103), "var-init"),
    Jq = cc11001100_hook("Jq", new R(501545961), "var-init"),
    Kq = cc11001100_hook("Kq", new fp(501545962, 1), "var-init"),
    Lq = cc11001100_hook("Lq", new fp(1116, 300), "var-init"),
    Mq = cc11001100_hook("Mq", new R(491815314), "var-init"),
    Nq = cc11001100_hook("Nq", new R(1121), "var-init"),
    Oq = cc11001100_hook("Oq", new R(501545959, !0), "var-init"),
    Pq = cc11001100_hook("Pq", new fp(469675170, 3E4), "var-init"),
    Qq = cc11001100_hook("Qq", new R(506619840), "var-init"),
    Rq = cc11001100_hook("Rq", new R(506852289), "var-init"),
    Sq = cc11001100_hook("Sq", new R(485990406), "var-init");
  var Tq = cc11001100_hook("Tq", class {
    constructor() {
      const a = cc11001100_hook("a", {}, "var-init");
      this.j = cc11001100_hook("this.j", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.l = cc11001100_hook("this.l", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.m = cc11001100_hook("this.m", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.A = cc11001100_hook("this.A", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.v = cc11001100_hook("this.v", () => {}, "assign");
    }
  }, "var-init");
  function S(a) {
    cc11001100_hook("a", a, "function-parameter");
    return O(Tq).j(a.j, a.defaultValue);
  }
  function U(a) {
    cc11001100_hook("a", a, "function-parameter");
    return O(Tq).l(a.j, a.defaultValue);
  }
  function Uq(a) {
    cc11001100_hook("a", a, "function-parameter");
    return O(Tq).m(a.j, a.defaultValue);
  }
  ;
  function Vq(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", new zg(a).createElement("DIV"), "assign");
    const c = cc11001100_hook("c", a.style, "var-init");
    c.width = cc11001100_hook("c.width", "100%", "assign");
    c.height = cc11001100_hook("c.height", "auto", "assign");
    c.clear = cc11001100_hook("c.clear", b ? "both" : "none", "assign");
    return a;
  }
  function Wq(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    switch (c) {
      case 0:
        b.parentNode && b.parentNode.insertBefore(a, b);
        break;
      case 3:
        if (c = cc11001100_hook("c", b.parentNode, "assign")) {
          var d = cc11001100_hook("d", b.nextSibling, "var-init");
          if (d && d.parentNode != c) for (; d && 8 == d.nodeType;) d = cc11001100_hook("d", d.nextSibling, "assign");
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    dp(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = cc11001100_hook("b.style.display", "block", "assign"));
  }
  function Xq(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a && a.parentNode) {
      const b = cc11001100_hook("b", a.parentNode, "var-init");
      b.removeChild(a);
      dp(b) && (b.style.display = cc11001100_hook("b.style.display", b.getAttribute("data-init-display") || "none", "assign"));
    }
  }
  ;
  var Zq = cc11001100_hook("Zq", (a, b, c, d = 0) => {
      var e = cc11001100_hook("e", Yq(b, c, d), "var-init");
      if (e.init) {
        for (c = cc11001100_hook("c", b = cc11001100_hook("b", e.init, "assign"), "assign"); c = cc11001100_hook("c", e.ic(c), "assign");) b = cc11001100_hook("b", c, "assign");
        e = cc11001100_hook("e", {
          anchor: cc11001100_hook("anchor", b, "object-key-init"),
          position: cc11001100_hook("position", e.yc, "object-key-init")
        }, "assign");
      } else e = cc11001100_hook("e", {
        anchor: cc11001100_hook("anchor", b, "object-key-init"),
        position: cc11001100_hook("position", c, "object-key-init")
      }, "assign");
      a["google-ama-order-assurance"] = cc11001100_hook("a[\"google-ama-order-assurance\"]", d, "assign");
      Wq(a, e.anchor, e.position);
    }, "var-init"),
    $q = cc11001100_hook("$q", (a, b, c, d = 0) => {
      S(vp) ? Zq(a, b, c, d) : Wq(a, b, c);
    }, "var-init");
  function Yq(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", f => {
        f = cc11001100_hook("f", ar(f), "assign");
        return null == f ? !1 : c < f;
      }, "var-init"),
      e = cc11001100_hook("e", f => {
        f = cc11001100_hook("f", ar(f), "assign");
        return null == f ? !1 : c > f;
      }, "var-init");
    switch (b) {
      case 0:
        return {
          init: cc11001100_hook("init", br(a.previousSibling, d), "object-key-init"),
          ic: cc11001100_hook("ic", f => br(f.previousSibling, d), "object-key-init"),
          yc: cc11001100_hook("yc", 0, "object-key-init")
        };
      case 2:
        return {
          init: cc11001100_hook("init", br(a.lastChild, d), "object-key-init"),
          ic: cc11001100_hook("ic", f => br(f.previousSibling, d), "object-key-init"),
          yc: cc11001100_hook("yc", 0, "object-key-init")
        };
      case 3:
        return {
          init: cc11001100_hook("init", br(a.nextSibling, e), "object-key-init"),
          ic: cc11001100_hook("ic", f => br(f.nextSibling, e), "object-key-init"),
          yc: cc11001100_hook("yc", 3, "object-key-init")
        };
      case 1:
        return {
          init: cc11001100_hook("init", br(a.firstChild, e), "object-key-init"),
          ic: cc11001100_hook("ic", f => br(f.nextSibling, e), "object-key-init"),
          yc: cc11001100_hook("yc", 3, "object-key-init")
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function ar(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null;
  }
  function br(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && b(a) ? a : null;
  }
  ;
  var cr = cc11001100_hook("cr", (a, b = !1) => {
    try {
      return b ? new rg(a.innerWidth, a.innerHeight).round() : Bg(a || window).round();
    } catch (c) {
      return new rg(-12245933, -12245933);
    }
  }, "var-init");
  function dr(a = t) {
    a = cc11001100_hook("a", a.devicePixelRatio, "assign");
    return "number" === typeof a ? +a.toFixed(3) : null;
  }
  function er(a, b = t) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body), "assign");
    return new qg(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
  }
  function fr(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length));
    } catch (b) {
      return !1;
    }
  }
  ;
  function gr(a) {
    cc11001100_hook("a", a, "function-parameter");
    -1 === a.l && (a.l = cc11001100_hook("a.l", Db(a.j, (b, c, d) => c ? b + 2 ** d : b, 0), "assign"));
    return a.l;
  }
  class hr {
    constructor() {
      this.j = cc11001100_hook("this.j", [], "assign");
      this.l = cc11001100_hook("this.l", -1, "assign");
    }
    set(a, b = !0) {
      0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = cc11001100_hook("this.j[a]", b, "assign"), this.l = cc11001100_hook("this.l", -1, "assign"));
    }
    get(a) {
      return !!this.j[a];
    }
  }
  ;
  function ir(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", a.location.href, "var-init");
    if (a === a.top) return {
      url: cc11001100_hook("url", b, "object-key-init"),
      ed: cc11001100_hook("ed", !0, "object-key-init")
    };
    let c = cc11001100_hook("c", !1, "var-init");
    const d = cc11001100_hook("d", a.document, "var-init");
    d && d.referrer && (b = cc11001100_hook("b", d.referrer, "assign"), a.parent === a.top && (c = cc11001100_hook("c", !0, "assign")));
    (a = cc11001100_hook("a", a.location.ancestorOrigins, "assign")) && (a = cc11001100_hook("a", a[a.length - 1], "assign")) && -1 === b.indexOf(a) && (c = cc11001100_hook("c", !1, "assign"), b = cc11001100_hook("b", a, "assign"));
    return {
      url: cc11001100_hook("url", b, "object-key-init"),
      ed: cc11001100_hook("ed", c, "object-key-init")
    };
  }
  ;
  var jr = cc11001100_hook("jr", (a, b, c) => {
    b = cc11001100_hook("b", b || a.google_ad_width, "assign");
    c = cc11001100_hook("c", c || a.google_ad_height, "assign");
    if (a && a.top == a) return !1;
    const d = cc11001100_hook("d", a.document, "var-init"),
      e = cc11001100_hook("e", d.documentElement, "var-init");
    if (b && c) {
      let f = cc11001100_hook("f", 1, "var-init"),
        g = cc11001100_hook("g", 1, "var-init");
      a.innerHeight ? (f = cc11001100_hook("f", a.innerWidth, "assign"), g = cc11001100_hook("g", a.innerHeight, "assign")) : e && e.clientHeight ? (f = cc11001100_hook("f", e.clientWidth, "assign"), g = cc11001100_hook("g", e.clientHeight, "assign")) : d.body && (f = cc11001100_hook("f", d.body.clientWidth, "assign"), g = cc11001100_hook("g", d.body.clientHeight, "assign"));
      if (g > 2 * c || f > 2 * b) return !1;
    }
    return !0;
  }, "var-init");
  function kr(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Zg(a, (c, d) => {
      b[d] = cc11001100_hook("b[d]", c, "assign");
    });
  }
  var lr = cc11001100_hook("lr", a => {
    if (a == a.top) return 0;
    for (; a && a != a.top && Rg(a); a = cc11001100_hook("a", a.parent, "assign")) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }, "var-init");
  var mr = cc11001100_hook("mr", (a, b) => {
      try {
        const c = cc11001100_hook("c", b.document.documentElement.getBoundingClientRect(), "var-init"),
          d = cc11001100_hook("d", a.getBoundingClientRect(), "var-init");
        return {
          x: cc11001100_hook("x", d.left - c.left, "object-key-init"),
          y: cc11001100_hook("y", d.top - c.top, "object-key-init")
        };
      } catch (c) {
        return null;
      }
    }, "var-init"),
    nr = cc11001100_hook("nr", (a, b) => {
      const c = cc11001100_hook("c", 40 === a.google_reactive_ad_format, "var-init"),
        d = cc11001100_hook("d", 16 === a.google_reactive_ad_format, "var-init");
      return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top;
    }, "var-init"),
    or = cc11001100_hook("or", (a, b, c) => {
      a = cc11001100_hook("a", a.style, "assign");
      "rtl" == b ? a.marginRight = cc11001100_hook("a.marginRight", c, "assign") : a.marginLeft = cc11001100_hook("a.marginLeft", c, "assign");
    }, "var-init");
  const pr = cc11001100_hook("pr", (a, b, c) => {
    a = cc11001100_hook("a", mr(b, a), "assign");
    return "rtl" == c ? -a.x : a.x;
  }, "var-init");
  var qr = cc11001100_hook("qr", (a, b) => {
      b = cc11001100_hook("b", b.parentElement, "assign");
      return b ? (a = cc11001100_hook("a", Xg(b, a), "assign")) ? a.direction : "" : "";
    }, "var-init"),
    rr = cc11001100_hook("rr", (a, b, c) => {
      if (0 === pr(a, b, c)) return !1;
      or(b, c, "0px");
      const d = cc11001100_hook("d", pr(a, b, c), "var-init");
      or(b, c, -1 * d + "px");
      a = cc11001100_hook("a", pr(a, b, c), "assign");
      0 !== a && a !== d && or(b, c, d / (a - d) * d + "px");
      return !0;
    }, "var-init");
  const sr = cc11001100_hook("sr", RegExp("(^| )adsbygoogle($| )"), "var-init");
  function tr(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) {
      const d = cc11001100_hook("d", b[c], "var-init"),
        e = cc11001100_hook("e", wg(d.ud), "var-init");
      a[e] = cc11001100_hook("a[e]", d.value, "assign");
    }
  }
  function ur(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    a = cc11001100_hook("a", vr(a, e), "assign");
    a.va.setAttribute("data-ad-format", d ? d : "auto");
    wr(a, b, c, f);
    return a;
  }
  function xr(a, b, c = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", vr(a, {}), "assign");
    wr(a, b, null, c);
    return a;
  }
  function wr(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", [], "var-init");
    if (d = cc11001100_hook("d", d && d.Td, "assign")) a.Wa.className = cc11001100_hook("a.Wa.className", d.join(" "), "assign");
    a = cc11001100_hook("a", a.va, "assign");
    a.className = cc11001100_hook("a.className", "adsbygoogle", "assign");
    a.setAttribute("data-ad-client", b);
    c && a.setAttribute("data-ad-slot", c);
    e.length && a.setAttribute("data-ad-channel", e.join("+"));
  }
  function vr(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Vq(a, b.clearBoth || !1), "var-init");
    var d = cc11001100_hook("d", c.style, "var-init");
    d.textAlign = cc11001100_hook("d.textAlign", "center", "assign");
    b.xc && tr(d, b.xc);
    a = cc11001100_hook("a", new zg(a).createElement("INS"), "assign");
    d = cc11001100_hook("d", a.style, "assign");
    d.display = cc11001100_hook("d.display", "block", "assign");
    d.margin = cc11001100_hook("d.margin", "auto", "assign");
    d.backgroundColor = cc11001100_hook("d.backgroundColor", "transparent", "assign");
    b.Ed && (d.marginTop = cc11001100_hook("d.marginTop", b.Ed, "assign"));
    b.Oc && (d.marginBottom = cc11001100_hook("d.marginBottom", b.Oc, "assign"));
    b.nb && tr(d, b.nb);
    c.appendChild(a);
    return {
      Wa: cc11001100_hook("Wa", c, "object-key-init"),
      va: cc11001100_hook("va", a, "object-key-init")
    };
  }
  function yr(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b.dataset.adsbygoogleStatus = cc11001100_hook("b.dataset.adsbygoogleStatus", "reserved", "assign");
    b.className += cc11001100_hook("b.className", " adsbygoogle-noablate", "assign");
    const d = cc11001100_hook("d", {
      element: cc11001100_hook("element", b, "object-key-init")
    }, "var-init");
    c = cc11001100_hook("c", c && c.Cb(), "assign");
    if (b.hasAttribute("data-pub-vars")) {
      try {
        c = cc11001100_hook("c", JSON.parse(b.getAttribute("data-pub-vars")), "assign");
      } catch (e) {
        return;
      }
      b.removeAttribute("data-pub-vars");
    }
    c && (d.params = cc11001100_hook("d.params", c, "assign"));
    (a.adsbygoogle = cc11001100_hook("a.adsbygoogle", a.adsbygoogle || [], "assign")).push(d);
  }
  function zr(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ep(a.document), "var-init");
    Ab(b, function (c) {
      const d = cc11001100_hook("d", Ar(a, c), "var-init");
      var e;
      if (e = cc11001100_hook("e", d, "assign")) e = cc11001100_hook("e", mr(c, a), "assign"), e = cc11001100_hook("e", !((e ? e.y : 0) < P(a).clientHeight), "assign");
      e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), yr(a, c));
    });
  }
  function Ar(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b.getAttribute("google_element_uid"), "assign");
    a = cc11001100_hook("a", a.google_sv_map, "assign");
    if (!b || !a || !a[b]) return null;
    a = cc11001100_hook("a", a[b], "assign");
    b = cc11001100_hook("b", {}, "assign");
    for (let c in ig) a[ig[c]] && (b[ig[c]] = cc11001100_hook("b[ig[c]]", a[ig[c]], "assign"));
    return b;
  }
  ;
  class Br {
    constructor() {
      var a = cc11001100_hook("a", N`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`, "var-init");
      this.j = cc11001100_hook("this.j", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.v = cc11001100_hook("this.v", Math.random(), "assign");
      this.m = cc11001100_hook("this.m", this.ia, "assign");
      this.B = cc11001100_hook("this.B", a, "assign");
    }
    zd(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    A(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    ia(a, b, c = .01, d, e = "jserror") {
      if ((this.l ? this.v : Math.random()) > c) return !1;
      b.error && b.meta && b.id || (b = cc11001100_hook("b", new ti(b, {
        context: cc11001100_hook("context", a, "object-key-init"),
        id: cc11001100_hook("id", e, "object-key-init")
      }), "assign"));
      if (d || this.j) b.meta = cc11001100_hook("b.meta", {}, "assign"), this.j && this.j(b.meta), d && d(b.meta);
      t.google_js_errors = cc11001100_hook("t.google_js_errors", t.google_js_errors || [], "assign");
      t.google_js_errors.push(b);
      t.error_rep_loaded || (Vg(t.document, this.B), t.error_rep_loaded = cc11001100_hook("t.error_rep_loaded", !0, "assign"));
      return !1;
    }
    Hb(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.m(a, d, .01, c, "jserror")) throw d;
      }
    }
    ta(a, b, c, d) {
      return (...e) => this.Hb(a, () => b.apply(c, e), d);
    }
    Ba(a, b, c) {
      b.catch(d => {
        d = cc11001100_hook("d", d ? d : "unknown rejection", "assign");
        this.ia(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0);
      });
    }
  }
  ;
  const Cr = cc11001100_hook("Cr", (a, b) => {
    b = cc11001100_hook("b", b.google_js_reporting_queue = cc11001100_hook("b.google_js_reporting_queue", b.google_js_reporting_queue || [], "assign"), "assign");
    2048 > b.length && b.push(a);
  }, "var-init");
  var Dr = cc11001100_hook("Dr", (a, b, c, d) => {
      const e = cc11001100_hook("e", d || window, "var-init"),
        f = cc11001100_hook("f", "undefined" !== typeof queueMicrotask, "var-init");
      return function () {
        f && queueMicrotask(() => {
          e.google_rum_task_id_counter = cc11001100_hook("e.google_rum_task_id_counter", e.google_rum_task_id_counter || 1, "assign");
          e.google_rum_task_id_counter += cc11001100_hook("e.google_rum_task_id_counter", 1, "assign");
        });
        const g = cc11001100_hook("g", Oi(), "var-init");
        let h,
          k = cc11001100_hook("k", 3, "var-init");
        try {
          h = cc11001100_hook("h", b.apply(this, arguments), "assign");
        } catch (l) {
          k = cc11001100_hook("k", 13, "assign");
          if (!c) throw l;
          c(a, l);
        } finally {
          e.google_measure_js_timing && g && Cr({
            label: cc11001100_hook("label", a.toString(), "object-key-init"),
            value: cc11001100_hook("value", g, "object-key-init"),
            duration: cc11001100_hook("duration", (Oi() || 0) - g, "object-key-init"),
            type: cc11001100_hook("type", k, "object-key-init"),
            ...(f && {
              taskId: cc11001100_hook("taskId", e.google_rum_task_id_counter = cc11001100_hook("e.google_rum_task_id_counter", e.google_rum_task_id_counter || 1, "assign"), "object-key-init")
            })
          }, e);
        }
        return h;
      };
    }, "var-init"),
    Er = cc11001100_hook("Er", (a, b) => Dr(754, a, (c, d) => {
      new Br().ia(c, d);
    }, b), "var-init");
  function Fr(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Dr(a, b, void 0, c).apply();
  }
  function Gr(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Er(a, b).apply();
  }
  function Hr(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) return null;
    var b = cc11001100_hook("b", w(a, 7), "var-init");
    if (w(a, 1) || a.getId() || 0 < gd(a, 4, Yc).length) {
      b = cc11001100_hook("b", gd(a, 4, Yc), "assign");
      var c = cc11001100_hook("c", w(a, 3), "var-init"),
        d = cc11001100_hook("d", w(a, 1), "var-init"),
        e = cc11001100_hook("e", "", "var-init");
      d && (e += cc11001100_hook("e", d, "assign"));
      c && (e += cc11001100_hook("e", "#" + ap(c), "assign"));
      if (b) for (c = cc11001100_hook("c", 0, "assign"); c < b.length; c++) e += cc11001100_hook("e", "." + ap(b[c]), "assign");
      a = cc11001100_hook("a", (b = cc11001100_hook("b", e, "assign")) ? new cp(b, wd(a, 2), wd(a, 5), Ir(w(a, 6))) : null, "assign");
    } else a = cc11001100_hook("a", b ? new cp(b, wd(a, 2), wd(a, 5), Ir(w(a, 6))) : null, "assign");
    return a;
  }
  var Jr = cc11001100_hook("Jr", {
    1: cc11001100_hook(1, 1, "object-key-init"),
    2: cc11001100_hook(2, 2, "object-key-init"),
    3: cc11001100_hook(3, 3, "object-key-init"),
    0: cc11001100_hook(0, 0, "object-key-init")
  }, "var-init");
  function Ir(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? a : Jr[a];
  }
  function Kr(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
      var d = cc11001100_hook("d", w(a[c], 1), "var-init"),
        e = cc11001100_hook("e", w(a[c], 2), "var-init");
      if (d && null != e) {
        var f = cc11001100_hook("f", {}, "var-init");
        f.ud = cc11001100_hook("f.ud", d, "assign");
        f.value = cc11001100_hook("f.value", e, "assign");
        b.push(f);
      }
    }
    return b;
  }
  function Lr(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", {}, "var-init");
    a && (c.Ed = cc11001100_hook("c.Ed", w(a, 1), "assign"), c.Oc = cc11001100_hook("c.Oc", w(a, 2), "assign"), c.clearBoth = cc11001100_hook("c.clearBoth", !!y(a, 3), "assign"));
    b && (c.xc = cc11001100_hook("c.xc", Kr(G(b, wo, 3)), "assign"), c.nb = cc11001100_hook("c.nb", Kr(G(b, wo, 4)), "assign"));
    return c;
  }
  var Mr = cc11001100_hook("Mr", {
      1: cc11001100_hook(1, 0, "object-key-init"),
      2: cc11001100_hook(2, 1, "object-key-init"),
      3: cc11001100_hook(3, 2, "object-key-init"),
      4: cc11001100_hook(4, 3, "object-key-init")
    }, "var-init"),
    Nr = cc11001100_hook("Nr", {
      0: cc11001100_hook(0, 1, "object-key-init"),
      1: cc11001100_hook(1, 2, "object-key-init"),
      2: cc11001100_hook(2, 3, "object-key-init"),
      3: cc11001100_hook(3, 4, "object-key-init")
    }, "var-init");
  var Or = cc11001100_hook("Or", {
      ra: cc11001100_hook("ra", "ama_success", "object-key-init"),
      ja: cc11001100_hook("ja", .1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Pr = cc11001100_hook("Pr", {
      ra: cc11001100_hook("ra", "ama_failure", "object-key-init"),
      ja: cc11001100_hook("ja", .1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Qr = cc11001100_hook("Qr", {
      ra: cc11001100_hook("ra", "ama_inf_scr", "object-key-init"),
      ja: cc11001100_hook("ja", .1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Rr = cc11001100_hook("Rr", {
      ra: cc11001100_hook("ra", "ama_inf_scr", "object-key-init"),
      ja: cc11001100_hook("ja", .1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Sr = cc11001100_hook("Sr", {
      ra: cc11001100_hook("ra", "ama_coverage", "object-key-init"),
      ja: cc11001100_hook("ja", .1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Tr = cc11001100_hook("Tr", {
      ra: cc11001100_hook("ra", "ama_inf_scr", "object-key-init"),
      ja: cc11001100_hook("ja", 1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Ur = cc11001100_hook("Ur", {
      ra: cc11001100_hook("ra", "ama_opt", "object-key-init"),
      ja: cc11001100_hook("ja", .1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Vr = cc11001100_hook("Vr", {
      ra: cc11001100_hook("ra", "ama_aud_sen", "object-key-init"),
      ja: cc11001100_hook("ja", 1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Wr = cc11001100_hook("Wr", {
      ra: cc11001100_hook("ra", "ama_auto_rs", "object-key-init"),
      ja: cc11001100_hook("ja", 1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Xr = cc11001100_hook("Xr", {
      ra: cc11001100_hook("ra", "ama_auto_prose", "object-key-init"),
      ja: cc11001100_hook("ja", 1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init"),
    Yr = cc11001100_hook("Yr", {
      ra: cc11001100_hook("ra", "ama_improv", "object-key-init"),
      ja: cc11001100_hook("ja", .1, "object-key-init"),
      la: cc11001100_hook("la", !0, "object-key-init")
    }, "var-init");
  function Zr(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) a.wa(b[c]);
    return a;
  }
  function $r(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.m = cc11001100_hook("a.m", a.m ? a.m : b, "assign");
    return a;
  }
  class as {
    constructor(a) {
      this.C = cc11001100_hook("this.C", {}, "assign");
      this.C.c = cc11001100_hook("this.C.c", a, "assign");
      this.A = cc11001100_hook("this.A", [], "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
      this.B = cc11001100_hook("this.B", [], "assign");
      this.F = cc11001100_hook("this.F", 0, "assign");
    }
    Pa(a) {
      this.C.wpc = cc11001100_hook("this.C.wpc", a, "assign");
      return this;
    }
    wa(a) {
      for (var b = cc11001100_hook("b", 0, "var-init"); b < this.A.length; b++) if (this.A[b] == a) return this;
      this.A.push(a);
      return this;
    }
    v(a) {
      var b = cc11001100_hook("b", ue(this.C), "var-init");
      0 < this.F && (b.t = cc11001100_hook("b.t", this.F, "assign"));
      b.err = cc11001100_hook("b.err", this.A.join(), "assign");
      b.warn = cc11001100_hook("b.warn", this.B.join(), "assign");
      this.m && (b.excp_n = cc11001100_hook("b.excp_n", this.m.name, "assign"), b.excp_m = cc11001100_hook("b.excp_m", this.m.message && this.m.message.substring(0, 512), "assign"), b.excp_s = cc11001100_hook("b.excp_s", this.m.stack && Yi(this.m.stack, ""), "assign"));
      b.w = cc11001100_hook("b.w", 0 < a.innerWidth ? a.innerWidth : null, "assign");
      b.h = cc11001100_hook("b.h", 0 < a.innerHeight ? a.innerHeight : null, "assign");
      return b;
    }
  }
  ;
  function bs(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    !b.la || "pvc" in c || (c.pvc = cc11001100_hook("c.pvc", xh(a.j), "assign"));
    bl(b.ra, c, b.ja);
  }
  function cs(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", c.v(a.j), "assign");
    b.la && (c.pvc = cc11001100_hook("c.pvc", xh(a.j), "assign"));
    0 < b.ja && (c.r = cc11001100_hook("c.r", b.ja, "assign"), bs(a, b, c));
  }
  var ds = cc11001100_hook("ds", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }, "var-init");
  function es(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", a.m, "var-init"),
      e = cc11001100_hook("e", P(a.j).clientHeight, "var-init"),
      f = cc11001100_hook("f", D(a.l, fo, 4)?.j(), "var-init");
    a = cc11001100_hook("a", a.j, "assign");
    a = cc11001100_hook("a", a.google_ama_state = cc11001100_hook("a.google_ama_state", a.google_ama_state || {}, "assign"), "assign");
    bs(d, Vr, {
      ...c,
      evt: b,
      vh: e,
      eid: f,
      psr: a.audioSenseSpaceReserved ? 1 : 0
    });
  }
  var fs = cc11001100_hook("fs", class {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
    }
  }, "var-init");
  const gs = cc11001100_hook("gs", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    l(a, b, c, d) {
      return ur(d.document, a, null, null, this.j, b);
    }
    m() {
      return null;
    }
  }, "var-init");
  const hs = cc11001100_hook("hs", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    l(a, b, c, d) {
      var e = cc11001100_hook("e", 0 < G(this.j, yo, 9).length ? G(this.j, yo, 9)[0] : null, "var-init"),
        f = cc11001100_hook("f", Lr(D(this.j, zo, 3), e), "var-init");
      if (!e) return null;
      if (e = cc11001100_hook("e", w(e, 1), "assign")) {
        d = cc11001100_hook("d", d.document, "assign");
        var g = cc11001100_hook("g", c.tagName, "var-init");
        c = cc11001100_hook("c", new zg(d).createElement(g), "assign");
        c.style.clear = cc11001100_hook("c.style.clear", f.clearBoth ? "both" : "none", "assign");
        "A" == g && (c.style.display = cc11001100_hook("c.style.display", "block", "assign"));
        c.style.padding = cc11001100_hook("c.style.padding", "0px", "assign");
        c.style.margin = cc11001100_hook("c.style.margin", "0px", "assign");
        f.xc && tr(c.style, f.xc);
        d = cc11001100_hook("d", new zg(d).createElement("INS"), "assign");
        f.nb && tr(d.style, f.nb);
        c.appendChild(d);
        f = cc11001100_hook("f", {
          Wa: cc11001100_hook("Wa", c, "object-key-init"),
          va: cc11001100_hook("va", d, "object-key-init")
        }, "assign");
        f.va.setAttribute("data-ad-type", "text");
        f.va.setAttribute("data-native-settings-key", e);
        wr(f, a, null, b);
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", null, "assign");
      return a;
    }
    m() {
      var a = cc11001100_hook("a", 0 < G(this.j, yo, 9).length ? G(this.j, yo, 9)[0] : null, "var-init");
      if (!a) return null;
      a = cc11001100_hook("a", G(a, wo, 3), "assign");
      for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) {
        var c = cc11001100_hook("c", a[b], "var-init");
        if ("height" == w(c, 1) && 0 < parseInt(w(c, 2), 10)) return parseInt(w(c, 2), 10);
      }
      return null;
    }
  }, "var-init");
  const is = cc11001100_hook("is", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    l(a, b, c, d) {
      if (!this.j) return null;
      const e = cc11001100_hook("e", this.j.google_ad_format || null, "var-init"),
        f = cc11001100_hook("f", this.j.google_ad_slot || null, "var-init");
      if (c = cc11001100_hook("c", c.style, "assign")) {
        var g = cc11001100_hook("g", [], "var-init");
        for (let h = cc11001100_hook("h", 0, "var-init"); h < c.length; h++) {
          const k = cc11001100_hook("k", c.item(h), "var-init");
          "width" !== k && "height" !== k && g.push({
            ud: cc11001100_hook("ud", k, "object-key-init"),
            value: cc11001100_hook("value", c.getPropertyValue(k), "object-key-init")
          });
        }
        c = cc11001100_hook("c", {
          nb: cc11001100_hook("nb", g, "object-key-init")
        }, "assign");
      } else c = cc11001100_hook("c", {}, "assign");
      a = cc11001100_hook("a", ur(d.document, a, f, e, c, b), "assign");
      a.va.setAttribute("data-pub-vars", JSON.stringify(this.j));
      return a;
    }
    m() {
      return this.j ? parseInt(this.j.google_ad_height, 10) || null : null;
    }
    Cb() {
      return this.j;
    }
  }, "var-init");
  class js {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    j() {
      return new An([], {
        google_ad_type: cc11001100_hook("google_ad_type", this.l, "object-key-init"),
        google_reactive_ad_format: cc11001100_hook("google_reactive_ad_format", 26, "object-key-init"),
        google_ad_format: cc11001100_hook("google_ad_format", "fluid", "object-key-init")
      });
    }
  }
  ;
  const ks = cc11001100_hook("ks", class {
    constructor(a, b) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j() {
      return this.m;
    }
    l(a) {
      a = cc11001100_hook("a", this.v.query(a.document), "assign");
      return 0 < a.length ? a[0] : null;
    }
  }, "var-init");
  function ls(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    for (let r = cc11001100_hook("r", 0, "var-init"); r < a.length; r++) {
      var e = cc11001100_hook("e", a[r], "var-init");
      var f = cc11001100_hook("f", r, "var-init"),
        g = cc11001100_hook("g", b, "var-init"),
        h = cc11001100_hook("h", c, "var-init"),
        k = cc11001100_hook("k", e.W(), "var-init");
      if (k) {
        var l = cc11001100_hook("l", Hr(k), "var-init");
        if (l) {
          var m = cc11001100_hook("m", Mr[w(e, 2)], "var-init"),
            n = cc11001100_hook("n", void 0 === m ? null : m, "var-init");
          if (null === n) e = cc11001100_hook("e", null, "assign");else {
            m = cc11001100_hook("m", (m = cc11001100_hook("m", D(e, zo, 3), "assign")) ? y(m, 3) : null, "assign");
            l = cc11001100_hook("l", new ks(l, n), "assign");
            n = cc11001100_hook("n", ed(e, 10).slice(0), "assign");
            null != wd(k, 5) && n.push(1);
            var q = cc11001100_hook("q", h ? h : {}, "var-init");
            h = cc11001100_hook("h", wd(e, 12), "assign");
            k = cc11001100_hook("k", bd(e, yn, 4) ? D(e, yn, 4) : null, "assign");
            1 == w(e, 8) ? (q = cc11001100_hook("q", q.sf || null, "assign"), e = cc11001100_hook("e", new ms(l, new gs(Lr(D(e, zo, 3), null)), q, m, 0, n, k, g, f, h, e), "assign")) : e = cc11001100_hook("e", 2 == w(e, 8) ? new ms(l, new hs(e), q.Xf || new js("text"), m, 1, n, k, g, f, h, e) : null, "assign");
          }
        } else e = cc11001100_hook("e", null, "assign");
      } else e = cc11001100_hook("e", null, "assign");
      null !== e && d.push(e);
    }
    return d;
  }
  function ns(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.A;
  }
  function os(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.ua;
  }
  function ps(a) {
    cc11001100_hook("a", a, "function-parameter");
    return S(qp) ? (a.K || (a.K = cc11001100_hook("a.K", a.F.l(a.m), "assign")), a.K) : a.F.l(a.m);
  }
  function qs(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.H, "var-init");
    a = cc11001100_hook("a", a.m.document.createElement("div"), "assign");
    S(qp) ? a.className = cc11001100_hook("a.className", "google-auto-placed-ad-placeholder", "assign") : a.className = cc11001100_hook("a.className", "google-auto-placed", "assign");
    var c = cc11001100_hook("c", a.style, "var-init");
    c.textAlign = cc11001100_hook("c.textAlign", "center", "assign");
    c.width = cc11001100_hook("c.width", "100%", "assign");
    c.height = cc11001100_hook("c.height", "0px", "assign");
    c.clear = cc11001100_hook("c.clear", b ? "both" : "none", "assign");
    return a;
  }
  function rs(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.C instanceof is ? a.C.Cb() : null;
  }
  function ss(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Ul(a.I, b) || a.I.set(b, []);
    a.I.get(b).push(c);
  }
  function ts(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.A = cc11001100_hook("a.A", !0, "assign");
    S(qp) && (a.l && Xq(a.l), a.l = cc11001100_hook("a.l", null, "assign"));
    null != b && a.V.push(b);
  }
  function us(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Vq(a.m.document, a.H || !1);
  }
  function vs(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.C.m(a.m);
  }
  function ws(a, b = null, c = null) {
    cc11001100_hook("a", a, "function-parameter");
    return new ms(a.F, b || a.C, c || a.L, a.H, a.bb, a.sc, a.Cc, a.m, a.ka, a.G, a.v, a.B, a.ba);
  }
  class ms {
    constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, q = null) {
      this.F = cc11001100_hook("this.F", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.L = cc11001100_hook("this.L", c, "assign");
      this.H = cc11001100_hook("this.H", d, "assign");
      this.bb = cc11001100_hook("this.bb", e, "assign");
      this.sc = cc11001100_hook("this.sc", f, "assign");
      this.Cc = cc11001100_hook("this.Cc", g ? g : new yn(), "assign");
      this.m = cc11001100_hook("this.m", h, "assign");
      this.ka = cc11001100_hook("this.ka", k, "assign");
      this.G = cc11001100_hook("this.G", l, "assign");
      this.v = cc11001100_hook("this.v", m, "assign");
      (a = cc11001100_hook("a", !m, "assign")) || (a = cc11001100_hook("a", !(m.W() && null != wd(m.W(), 5)), "assign"));
      this.ua = cc11001100_hook("this.ua", !a, "assign");
      this.B = cc11001100_hook("this.B", n, "assign");
      this.ba = cc11001100_hook("this.ba", q, "assign");
      this.V = cc11001100_hook("this.V", [], "assign");
      this.A = cc11001100_hook("this.A", !1, "assign");
      this.I = cc11001100_hook("this.I", new Yl(), "assign");
      this.K = cc11001100_hook("this.K", this.l = cc11001100_hook("this.l", null, "assign"), "assign");
    }
    P() {
      return this.m;
    }
    j() {
      return this.F.j();
    }
  }
  ;
  var xs = cc11001100_hook("xs", a => a?.google_ad_slot ? en(new qn(1, {
      ff: cc11001100_hook("ff", a.google_ad_slot, "object-key-init")
    })) : gn("Missing dimension when creating placement id"), "var-init"),
    zs = cc11001100_hook("zs", a => {
      switch (a.bb) {
        case 0:
        case 1:
          var b = cc11001100_hook("b", a.v, "var-init");
          null == b ? a = cc11001100_hook("a", null, "assign") : (a = cc11001100_hook("a", b.W(), "assign"), null == a ? a = cc11001100_hook("a", null, "assign") : (b = cc11001100_hook("b", w(b, 2), "assign"), a = cc11001100_hook("a", null == b ? null : new qn(0, {
            Od: cc11001100_hook("Od", [a], "object-key-init"),
            Le: cc11001100_hook("Le", b, "object-key-init")
          }), "assign")));
          return null != a ? en(a) : gn("Missing dimension when creating placement id");
        case 2:
          return a = cc11001100_hook("a", ys(a), "assign"), null != a ? en(a) : gn("Missing dimension when creating placement id");
        default:
          return gn("Invalid type: " + a.bb);
      }
    }, "var-init");
  const ys = cc11001100_hook("ys", a => {
    if (null == a || null == a.B) return null;
    const b = cc11001100_hook("b", D(a.B, pn, 1), "var-init"),
      c = cc11001100_hook("c", D(a.B, pn, 2), "var-init");
    if (null == b || null == c) return null;
    const d = cc11001100_hook("d", a.ba, "var-init");
    if (null == d) return null;
    a = cc11001100_hook("a", a.j(), "assign");
    return null == a ? null : new qn(0, {
      Od: cc11001100_hook("Od", [b, c], "object-key-init"),
      Wf: cc11001100_hook("Wf", d, "object-key-init"),
      Le: cc11001100_hook("Le", Nr[a], "object-key-init")
    });
  }, "var-init");
  function As(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", rs(a.T), "var-init");
    return (b ? xs(b) : zs(a.T)).map(c => tn(c));
  }
  function Bs(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j = cc11001100_hook("a.j", a.j || As(a), "assign");
    return a.j;
  }
  function Cs(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.T.A) throw Error("AMA:AP:AP");
    $q(b, a.W(), a.T.j());
    ts(a.T, b);
  }
  const Ds = cc11001100_hook("Ds", class {
    constructor(a, b, c) {
      this.T = cc11001100_hook("this.T", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.aa = cc11001100_hook("this.aa", c, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
    }
    W() {
      return this.l;
    }
    fill(a, b) {
      var c = cc11001100_hook("c", this.T, "var-init");
      (a = cc11001100_hook("a", c.C.l(a, b, this.l, c.m), "assign")) && Cs(this, a.Wa);
      return a;
    }
  }, "var-init");
  const Es = cc11001100_hook("Es", (a, b) => {
    if (3 == b.nodeType) return 3 == b.nodeType ? (b = cc11001100_hook("b", b.data, "assign"), a = cc11001100_hook("a", Za(b, "&") ? tg(b, a.document) : b, "assign"), a = cc11001100_hook("a", /\S/.test(a), "assign")) : a = cc11001100_hook("a", !1, "assign"), a;
    if (1 == b.nodeType) {
      var c = cc11001100_hook("c", a.getComputedStyle(b), "var-init");
      if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
      if ((c = cc11001100_hook("c", b.tagName, "assign")) && $l.contains(c.toUpperCase())) return !0;
      b = cc11001100_hook("b", b.childNodes, "assign");
      for (c = cc11001100_hook("c", 0, "assign"); c < b.length; c++) if (Es(a, b[c])) return !0;
    }
    return !1;
  }, "var-init");
  var Fs = cc11001100_hook("Fs", a => {
    if (460 <= a) return a = cc11001100_hook("a", Math.min(a, 1200), "assign"), Math.ceil(800 > a ? a / 4 : 200);
    a = cc11001100_hook("a", Math.min(a, 600), "assign");
    return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130;
  }, "var-init");
  const Gs = cc11001100_hook("Gs", class {
    constructor() {
      this.j = cc11001100_hook("this.j", {
        clearBoth: cc11001100_hook("clearBoth", !0, "object-key-init")
      }, "assign");
    }
    l(a, b, c, d) {
      return ur(d.document, a, null, null, this.j, b);
    }
    m(a) {
      return Fs(Math.min(a.screen.width || 0, a.screen.height || 0));
    }
  }, "var-init");
  class Hs {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    j(a) {
      a = cc11001100_hook("a", Math.floor(a.l), "assign");
      const b = cc11001100_hook("b", Fs(a), "var-init");
      return new An(["ap_container"], {
        google_reactive_ad_format: cc11001100_hook("google_reactive_ad_format", 27, "object-key-init"),
        google_responsive_auto_format: cc11001100_hook("google_responsive_auto_format", 16, "object-key-init"),
        google_max_num_ads: cc11001100_hook("google_max_num_ads", 1, "object-key-init"),
        google_ad_type: cc11001100_hook("google_ad_type", this.l, "object-key-init"),
        google_ad_format: cc11001100_hook("google_ad_format", a + "x" + b, "object-key-init"),
        google_ad_width: cc11001100_hook("google_ad_width", a, "object-key-init"),
        google_ad_height: cc11001100_hook("google_ad_height", b, "object-key-init")
      });
    }
  }
  ;
  const Is = cc11001100_hook("Is", class {
    constructor(a, b) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    l() {
      return this.v;
    }
    j() {
      return this.m;
    }
  }, "var-init");
  const Js = cc11001100_hook("Js", {
    TABLE: {
      ub: cc11001100_hook("ub", new dn([1, 2]), "object-key-init")
    },
    THEAD: {
      ub: cc11001100_hook("ub", new dn([0, 3, 1, 2]), "object-key-init")
    },
    TBODY: {
      ub: cc11001100_hook("ub", new dn([0, 3, 1, 2]), "object-key-init")
    },
    TR: {
      ub: cc11001100_hook("ub", new dn([0, 3, 1, 2]), "object-key-init")
    },
    TD: {
      ub: cc11001100_hook("ub", new dn([0, 3]), "object-key-init")
    }
  }, "var-init");
  function Ks(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", c.childNodes, "var-init");
    c = cc11001100_hook("c", c.querySelectorAll(b), "assign");
    b = cc11001100_hook("b", [], "assign");
    for (const f of c) c = cc11001100_hook("c", zb(e, f), "assign"), 0 > c || b.push(new Ls(a, [f], c, f, 3, Jg(f).trim(), d));
    return b;
  }
  function Ms(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    let d = cc11001100_hook("d", [], "var-init");
    const e = cc11001100_hook("e", [], "var-init"),
      f = cc11001100_hook("f", b.childNodes, "var-init"),
      g = cc11001100_hook("g", f.length, "var-init");
    let h = cc11001100_hook("h", 0, "var-init"),
      k = cc11001100_hook("k", "", "var-init");
    for (let n = cc11001100_hook("n", 0, "var-init"); n < g; n++) {
      var l = cc11001100_hook("l", f[n], "var-init");
      if (1 == l.nodeType || 3 == l.nodeType) {
        a: {
          var m = cc11001100_hook("m", l, "var-init");
          if (1 != m.nodeType) {
            m = cc11001100_hook("m", null, "assign");
            break a;
          }
          if ("BR" == m.tagName) break a;
          const q = cc11001100_hook("q", c.getComputedStyle(m).getPropertyValue("display"), "var-init");
          m = cc11001100_hook("m", "inline" == q || "inline-block" == q ? null : m, "assign");
        }
        m ? (d.length && k && e.push(new Ls(a, d, n - 1, m, 0, k, c)), d = cc11001100_hook("d", [], "assign"), h = cc11001100_hook("h", n + 1, "assign"), k = cc11001100_hook("k", "", "assign")) : (d.push(l), l = cc11001100_hook("l", Jg(l).trim(), "assign"), k += cc11001100_hook("k", l && k ? " " + l : l, "assign"));
      }
    }
    d.length && k && e.push(new Ls(a, d, h, b, 2, k, c));
    return e;
  }
  function Ns(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.j - b.j;
  }
  function Os(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", xn(), "var-init");
    return new ms(new Is(a.Gc, a.Hc), new gs({
      clearBoth: cc11001100_hook("clearBoth", !0, "object-key-init")
    }), null, !0, 2, [], b, a.l, null, null, null, a.m, a.j);
  }
  class Ls {
    constructor(a, b, c, d, e, f, g) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.rb = cc11001100_hook("this.rb", b.slice(0), "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.Gc = cc11001100_hook("this.Gc", d, "assign");
      this.Hc = cc11001100_hook("this.Hc", e, "assign");
      this.v = cc11001100_hook("this.v", f, "assign");
      this.l = cc11001100_hook("this.l", g, "assign");
    }
    P() {
      return this.l;
    }
  }
  ;
  function Ps(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Hb(a.A ? Ms(a.l, a.j, a.m) : [], a.v ? Ks(a.l, a.v, a.j, a.m) : []).filter(b => {
      var c = cc11001100_hook("c", b.Gc.tagName, "var-init");
      c ? (c = cc11001100_hook("c", Js[c.toUpperCase()], "assign"), b = cc11001100_hook("b", null != c && c.ub.contains(b.Hc), "assign")) : b = cc11001100_hook("b", !1, "assign");
      return !b;
    });
  }
  class Qs {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.v = cc11001100_hook("this.v", b.Zb, "assign");
      this.A = cc11001100_hook("this.A", b.de, "assign");
      this.l = cc11001100_hook("this.l", b.articleStructure, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
    }
  }
  ;
  function Rs(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gr(() => {
      if (S(qp)) {
        var c = cc11001100_hook("c", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) {
          var f = cc11001100_hook("f", a[e], "var-init"),
            g = cc11001100_hook("g", ps(f), "var-init");
          if (g) {
            var h = cc11001100_hook("h", f, "var-init");
            if (!h.l && !h.A) {
              var k = cc11001100_hook("k", h, "var-init");
              var l = cc11001100_hook("l", h, "var-init"),
                m = cc11001100_hook("m", null, "var-init");
              try {
                var n = cc11001100_hook("n", ps(l), "var-init");
                if (n) {
                  m = cc11001100_hook("m", qs(l), "assign");
                  $q(m, n, l.j());
                  var q = cc11001100_hook("q", m, "var-init");
                } else q = cc11001100_hook("q", null, "assign");
              } catch (C) {
                throw Xq(m), C;
              }
              k.l = cc11001100_hook("k.l", q, "assign");
            }
            (h = cc11001100_hook("h", h.l, "assign")) && d.push({
              pg: cc11001100_hook("pg", f, "object-key-init"),
              anchorElement: cc11001100_hook("anchorElement", g, "object-key-init"),
              Jf: cc11001100_hook("Jf", h, "object-key-init")
            });
          }
        }
        if (0 < d.length) for (q = cc11001100_hook("q", Ol(b), "assign"), n = cc11001100_hook("n", Pl(b), "assign"), e = cc11001100_hook("e", 0, "assign"); e < d.length; e++) {
          const {
            pg: C,
            anchorElement: z,
            Jf: A
          } = cc11001100_hook("", d[e], "var-init");
          f = cc11001100_hook("f", Ss(A, n, q), "assign");
          c.push(new Ds(C, z, f));
        }
        q = cc11001100_hook("q", c, "assign");
      } else {
        q = cc11001100_hook("q", [], "assign");
        n = cc11001100_hook("n", [], "assign");
        try {
          const C = cc11001100_hook("C", [], "var-init");
          for (let z = cc11001100_hook("z", 0, "var-init"); z < a.length; z++) {
            var r = cc11001100_hook("r", a[z], "var-init"),
              u = cc11001100_hook("u", ps(r), "var-init");
            u && C.push({
              He: cc11001100_hook("He", r, "object-key-init"),
              anchorElement: cc11001100_hook("anchorElement", u, "object-key-init")
            });
          }
          for (u = cc11001100_hook("u", 0, "assign"); u < C.length; u++) {
            r = cc11001100_hook("r", n, "assign");
            g = cc11001100_hook("g", r.push, "assign");
            {
              k = cc11001100_hook("k", C[u], "assign");
              l = cc11001100_hook("l", k.anchorElement, "assign");
              m = cc11001100_hook("m", k.He, "assign");
              const z = cc11001100_hook("z", qs(m), "var-init");
              try {
                $q(z, l, m.j()), h = cc11001100_hook("h", z, "assign");
              } catch (A) {
                throw Xq(z), A;
              }
            }
            g.call(r, h);
          }
          c = cc11001100_hook("c", Ol(b), "assign");
          d = cc11001100_hook("d", Pl(b), "assign");
          for (g = cc11001100_hook("g", 0, "assign"); g < n.length; g++) e = cc11001100_hook("e", Ss(n[g], d, c), "assign"), f = cc11001100_hook("f", C[g], "assign"), q.push(new Ds(f.He, f.anchorElement, e));
        } finally {
          for (c = cc11001100_hook("c", 0, "assign"); c < n.length; c++) Xq(n[c]);
        }
      }
      return q;
    }, b);
  }
  function Ss(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", a.getBoundingClientRect(), "assign");
    return new Nm(a.left + b, a.top + c, a.right - a.left);
  }
  ;
  function Ts(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Ps(b), "var-init");
    c.sort(Ns);
    return new Us(a, b, c);
  }
  function Vs(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return new ms(new Is(b, c), new gs({}), null, !0, 2, [], null, a.j, null, null, null, a.A.l, null);
  }
  var Us = cc11001100_hook("Us", class {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.v = cc11001100_hook("this.v", c, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.m = cc11001100_hook("this.m", 0, "assign");
    }
    next() {
      if (!this.l) {
        if (this.m >= this.v.length) var a = cc11001100_hook("a", null, "var-init");else {
          {
            const b = cc11001100_hook("b", this.v[this.m++].rb[0], "var-init");
            ua(b) && 1 == b.nodeType ? a = cc11001100_hook("a", Vs(this, b, 0), "assign") : (a = cc11001100_hook("a", this.j.document.createElement("div"), "assign"), M(a, {
              display: cc11001100_hook("display", "none", "object-key-init")
            }), b.parentNode.insertBefore(a, b), a = cc11001100_hook("a", Vs(this, a, 3), "assign"));
          }
          a = cc11001100_hook("a", Rs([a], this.j)[0] || null, "assign");
        }
        if (a) return a;
        this.l = cc11001100_hook("this.l", !0, "assign");
      }
      return null;
    }
  }, "var-init");
  var Ws = cc11001100_hook("Ws", class {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    j() {
      return this.l.next();
    }
  }, "var-init");
  const Xs = cc11001100_hook("Xs", {
      1: cc11001100_hook(1, "0.5vp", "object-key-init"),
      2: cc11001100_hook(2, "300px", "object-key-init")
    }, "var-init"),
    Ys = cc11001100_hook("Ys", {
      1: cc11001100_hook(1, 700, "object-key-init"),
      2: cc11001100_hook(2, 1200, "object-key-init")
    }, "var-init"),
    Zs = cc11001100_hook("Zs", {
      [1]: {
        Se: cc11001100_hook("Se", "3vp", "object-key-init"),
        Cd: cc11001100_hook("Cd", "1vp", "object-key-init"),
        Re: cc11001100_hook("Re", "0.3vp", "object-key-init")
      },
      [2]: {
        Se: cc11001100_hook("Se", "900px", "object-key-init"),
        Cd: cc11001100_hook("Cd", "300px", "object-key-init"),
        Re: cc11001100_hook("Re", "90px", "object-key-init")
      }
    }, "var-init");
  function $s(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", at(a), "var-init"),
      e = cc11001100_hook("e", P(a).clientHeight || Ys[d], "var-init"),
      f = cc11001100_hook("f", void 0, "var-init");
    c && (f = cc11001100_hook("f", (c = cc11001100_hook("c", (c = cc11001100_hook("c", bt(G(c, Kn, 2), d), "assign")) ? D(c, Hn, 7) : void 0, "assign")) ? ct(c, e) : void 0, "assign"));
    c = cc11001100_hook("c", f, "assign");
    f = cc11001100_hook("f", at(a), "assign");
    a = cc11001100_hook("a", P(a).clientHeight || Ys[f], "assign");
    const g = cc11001100_hook("g", dt(Zs[f].Cd, a), "var-init");
    a = cc11001100_hook("a", null === g ? et(f, a) : new ft(g, g, gt(g, 8), 8, .3, c), "assign");
    c = cc11001100_hook("c", dt(Zs[d].Se, e), "assign");
    f = cc11001100_hook("f", dt(Zs[d].Cd, e), "assign");
    d = cc11001100_hook("d", dt(Zs[d].Re, e), "assign");
    e = cc11001100_hook("e", a.m, "assign");
    c && d && f && void 0 !== b && (e = cc11001100_hook("e", .5 >= b ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d), "assign"));
    return new ft(e, e, gt(e, a.l), a.l, a.v, a.j);
  }
  function ht(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", at(a), "var-init");
    a = cc11001100_hook("a", P(a).clientHeight || Ys[c], "assign");
    if (b = cc11001100_hook("b", bt(G(b, Kn, 2), c), "assign")) if (b = cc11001100_hook("b", it(b, a), "assign")) return b;
    return et(c, a);
  }
  function jt(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", at(a), "var-init");
    return et(b, P(a).clientHeight || Ys[b]);
  }
  function kt(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", {
      uc: cc11001100_hook("uc", a.m, "object-key-init"),
      hb: cc11001100_hook("hb", a.A, "object-key-init")
    }, "var-init");
    for (let d of a.B) d.adCount <= b && (c = cc11001100_hook("c", d.Bd, "assign"));
    return c;
  }
  function lt(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", y(b, 2), "var-init");
    b = cc11001100_hook("b", D(b, Kn, 1), "assign");
    const e = cc11001100_hook("e", P(c).clientHeight || Ys[at(c)], "var-init");
    c = cc11001100_hook("c", dt(b?.G(), e) ?? a.m, "assign");
    const f = cc11001100_hook("f", dt(b?.B(), e) ?? a.A, "var-init");
    d = cc11001100_hook("d", d ? [] : mt(b?.j(), e) ?? a.B, "assign");
    const g = cc11001100_hook("g", b?.v() ?? a.l, "var-init"),
      h = cc11001100_hook("h", b?.A() ?? a.v, "var-init");
    a = cc11001100_hook("a", (b?.F() ? ct(D(b, Hn, 7), e) : null) ?? a.j, "assign");
    return new ft(c, f, d, g, h, a);
  }
  class ft {
    constructor(a, b, c, d, e, f) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.B = cc11001100_hook("this.B", c.sort((g, h) => g.adCount - h.adCount), "assign");
      this.l = cc11001100_hook("this.l", d, "assign");
      this.v = cc11001100_hook("this.v", e, "assign");
      this.j = cc11001100_hook("this.j", f, "assign");
    }
  }
  function bt(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let c of a) if (w(c, 1) == b) return c;
    return null;
  }
  function mt(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (void 0 === a) return null;
    const c = cc11001100_hook("c", [], "var-init");
    for (let d of a) {
      a = cc11001100_hook("a", wd(d, 1), "assign");
      const e = cc11001100_hook("e", dt(w(d, 2), b), "var-init");
      if ("number" !== typeof a || null === e) return null;
      c.push({
        adCount: cc11001100_hook("adCount", a, "object-key-init"),
        Bd: {
          uc: cc11001100_hook("uc", e, "object-key-init"),
          hb: cc11001100_hook("hb", dt(w(d, 3), b), "object-key-init")
        }
      });
    }
    return c;
  }
  function it(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", dt(w(a, 2), b), "var-init"),
      d = cc11001100_hook("d", dt(w(a, 5), b), "var-init");
    if (null === c) return null;
    const e = cc11001100_hook("e", wd(a, 4), "var-init");
    if (null == e) return null;
    var f = cc11001100_hook("f", a.j(), "var-init");
    f = cc11001100_hook("f", mt(f, b), "assign");
    if (null === f) return null;
    const g = cc11001100_hook("g", D(a, Hn, 7), "var-init");
    b = cc11001100_hook("b", g ? ct(g, b) : void 0, "assign");
    return new ft(c, d, f, e, fd(a, 6), b);
  }
  function et(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", dt(Xs[a], b), "assign");
    return new ft(null === a ? Infinity : a, null, [], 3, null);
  }
  function dt(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return null;
    const c = cc11001100_hook("c", parseFloat(a), "var-init");
    return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null;
  }
  function at(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", 900 <= P(a).clientWidth, "assign");
    return Og() && !a ? 1 : 2;
  }
  function gt(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (4 > b) return [];
    const c = cc11001100_hook("c", Math.ceil(b / 2), "var-init");
    return [{
      adCount: cc11001100_hook("adCount", c, "object-key-init"),
      Bd: {
        uc: cc11001100_hook("uc", 2 * a, "object-key-init"),
        hb: cc11001100_hook("hb", 2 * a, "object-key-init")
      }
    }, {
      adCount: cc11001100_hook("adCount", c + Math.ceil((b - c) / 2), "object-key-init"),
      Bd: {
        uc: cc11001100_hook("uc", 3 * a, "object-key-init"),
        hb: cc11001100_hook("hb", 3 * a, "object-key-init")
      }
    }];
  }
  function ct(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      xe: cc11001100_hook("xe", dt(w(a, 2), b) || 0, "object-key-init"),
      ve: cc11001100_hook("ve", wd(a, 3) || 1, "object-key-init"),
      pb: cc11001100_hook("pb", dt(w(a, 1), b) || 0, "object-key-init")
    };
  }
  ;
  function nt(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return yl({
      top: cc11001100_hook("top", a.j.top - (c + 1), "object-key-init"),
      right: cc11001100_hook("right", a.j.right + (c + 1), "object-key-init"),
      bottom: cc11001100_hook("bottom", a.j.bottom + (c + 1), "object-key-init"),
      left: cc11001100_hook("left", a.j.left - (c + 1), "object-key-init")
    }, b.j);
  }
  function ot(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.length) return null;
    const b = cc11001100_hook("b", zl(a.map(c => c.j)), "var-init");
    a = cc11001100_hook("a", a.reduce((c, d) => c + d.l, 0), "assign");
    return new pt(b, a);
  }
  class pt {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
  }
  ;
  function qt(a = window) {
    a = cc11001100_hook("a", a.googletag, "assign");
    return a?.apiReady ? a : void 0;
  }
  ;
  var wt = cc11001100_hook("wt", (a, b) => {
    const c = cc11001100_hook("c", Ib(b.document.querySelectorAll(".google-auto-placed")), "var-init"),
      d = cc11001100_hook("d", rt(b), "var-init"),
      e = cc11001100_hook("e", st(b), "var-init"),
      f = cc11001100_hook("f", tt(b), "var-init"),
      g = cc11001100_hook("g", ut(b), "var-init"),
      h = cc11001100_hook("h", Ib(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), "var-init"),
      k = cc11001100_hook("k", Ib(b.document.querySelectorAll("div.googlepublisherpluginad")), "var-init"),
      l = cc11001100_hook("l", Ib(b.document.querySelectorAll("html > ins.adsbygoogle")), "var-init");
    let m = cc11001100_hook("m", [].concat(Ib(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ib(b.document.querySelectorAll("body ins.adsbygoogle"))), "var-init");
    b = cc11001100_hook("b", [], "assign");
    for (const [n, q] of [[a.jc, c], [a.Za, d], [a.Uf, e], [a.kc, f], [a.lc, g], [a.Sf, h], [a.Tf, k], [a.Vf, l]]) a = cc11001100_hook("a", q, "assign"), !1 === n ? b = cc11001100_hook("b", b.concat(a), "assign") : m = cc11001100_hook("m", m.concat(a), "assign");
    a = cc11001100_hook("a", vt(m), "assign");
    b = cc11001100_hook("b", vt(b), "assign");
    a = cc11001100_hook("a", a.slice(0), "assign");
    for (const n of b) for (b = cc11001100_hook("b", 0, "assign"); b < a.length; b++) (n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
    return a;
  }, "var-init");
  const xt = cc11001100_hook("xt", a => {
      const b = cc11001100_hook("b", qt(a), "var-init");
      return b ? Bb(Cb(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null;
    }, "var-init"),
    rt = cc11001100_hook("rt", a => Ib(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")), "var-init"),
    st = cc11001100_hook("st", a => Ib(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")), "var-init"),
    tt = cc11001100_hook("tt", a => (xt(a) || Ib(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ib(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))), "var-init"),
    ut = cc11001100_hook("ut", a => Ib(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")), "var-init");
  var vt = cc11001100_hook("vt", a => {
    const b = cc11001100_hook("b", [], "var-init");
    for (const c of a) {
      a = cc11001100_hook("a", !0, "assign");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) {
        const e = cc11001100_hook("e", b[d], "var-init");
        if (e.contains(c)) {
          a = cc11001100_hook("a", !1, "assign");
          break;
        }
        if (c.contains(e)) {
          a = cc11001100_hook("a", !1, "assign");
          b[d] = cc11001100_hook("b[d]", c, "assign");
          break;
        }
      }
      a && b.push(c);
    }
    return b;
  }, "var-init");
  var yt = cc11001100_hook("yt", Rk.ta(453, wt), "var-init"),
    zt;
  zt = cc11001100_hook("zt", Rk.ta(454, (a, b) => {
    const c = cc11001100_hook("c", Ib(b.document.querySelectorAll(".google-auto-placed")), "var-init"),
      d = cc11001100_hook("d", rt(b), "var-init"),
      e = cc11001100_hook("e", st(b), "var-init"),
      f = cc11001100_hook("f", tt(b), "var-init"),
      g = cc11001100_hook("g", ut(b), "var-init"),
      h = cc11001100_hook("h", Ib(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), "var-init"),
      k = cc11001100_hook("k", Ib(b.document.querySelectorAll("div.googlepublisherpluginad")), "var-init");
    b = cc11001100_hook("b", Ib(b.document.querySelectorAll("html > ins.adsbygoogle")), "assign");
    return vt([].concat(!0 === a.jc ? c : [], !0 === a.Za ? d : [], !0 === a.Uf ? e : [], !0 === a.kc ? f : [], !0 === a.lc ? g : [], !0 === a.Sf ? h : [], !0 === a.Tf ? k : [], !0 === a.Vf ? b : []));
  }), "assign");
  function At(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", Bt(a), "var-init");
    b = cc11001100_hook("b", Ct(d, b, c), "assign");
    return new au(a, d, b);
  }
  function bu(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 1 < (a.bottom - a.top) * (a.right - a.left);
  }
  function cu(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.j.map(b => b.box);
  }
  function du(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0);
  }
  class au {
    constructor(a, b, c) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.j = cc11001100_hook("this.j", b.slice(0), "assign");
      this.v = cc11001100_hook("this.v", c.slice(0), "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
    }
  }
  function Bt(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", yt({
        Za: cc11001100_hook("Za", !1, "object-key-init")
      }, a), "var-init"),
      c = cc11001100_hook("c", Pl(a), "var-init"),
      d = cc11001100_hook("d", Ol(a), "var-init");
    return b.map(e => {
      const f = cc11001100_hook("f", e.getBoundingClientRect(), "var-init");
      return (e = cc11001100_hook("e", !!e.className && Za(e.className, "google-auto-placed"), "assign")) || bu(f) ? {
        box: {
          top: cc11001100_hook("top", f.top + d, "object-key-init"),
          right: cc11001100_hook("right", f.right + c, "object-key-init"),
          bottom: cc11001100_hook("bottom", f.bottom + d, "object-key-init"),
          left: cc11001100_hook("left", f.left + c, "object-key-init")
        },
        Sk: cc11001100_hook("Sk", e ? 1 : 0, "object-key-init")
      } : null;
    }).filter(ge(e => null === e));
  }
  function Ct(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return void 0 != b && a.length <= (void 0 != c ? c : 8) ? eu(a, b) : Cb(a, d => new pt(d.box, 1));
  }
  function eu(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", Cb(a, d => new pt(d.box, 1)), "assign");
    const c = cc11001100_hook("c", [], "var-init");
    for (; 0 < a.length;) {
      let d = cc11001100_hook("d", a.pop(), "var-init"),
        e = cc11001100_hook("e", !0, "var-init");
      for (; e;) {
        e = cc11001100_hook("e", !1, "assign");
        for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) if (nt(d, a[f], b)) {
          d = cc11001100_hook("d", ot([d, a[f]]), "assign");
          Array.prototype.splice.call(a, f, 1);
          e = cc11001100_hook("e", !0, "assign");
          break;
        }
      }
      c.push(d);
    }
    return c;
  }
  ;
  function fu(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", Mm(c, b), "var-init");
    return !Eb(a, e => yl(e, d));
  }
  function gu(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    e = cc11001100_hook("e", e.aa, "assign");
    const f = cc11001100_hook("f", Mm(e, b), "var-init"),
      g = cc11001100_hook("g", Mm(e, c), "var-init"),
      h = cc11001100_hook("h", Mm(e, d), "var-init");
    return !Eb(a, k => yl(k, g) || yl(k, f) && !yl(k, h));
  }
  function hu(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", cu(a), "var-init");
    if (fu(e, b, d.aa)) return !0;
    if (!gu(e, b, c.xe, c.pb, d)) return !1;
    const f = cc11001100_hook("f", new pt(Mm(d.aa, 0), 1), "var-init");
    a = cc11001100_hook("a", Bb(a.v, g => nt(g, f, c.pb)), "assign");
    b = cc11001100_hook("b", Db(a, (g, h) => g + h.l, 1), "assign");
    return 0 === a.length || b > c.ve ? !1 : !0;
  }
  ;
  var iu = cc11001100_hook("iu", (a, b) => {
    const c = cc11001100_hook("c", [], "var-init");
    let d = cc11001100_hook("d", a, "var-init");
    for (a = cc11001100_hook("a", () => {
      c.push({
        anchor: cc11001100_hook("anchor", d.anchor, "object-key-init"),
        position: cc11001100_hook("position", d.position, "object-key-init")
      });
      return d.anchor == b.anchor && d.position == b.position;
    }, "assign"); d;) {
      switch (d.position) {
        case 1:
          if (a()) return c;
          d.position = cc11001100_hook("d.position", 2, "assign");
        case 2:
          if (a()) return c;
          if (d.anchor.firstChild) {
            d = cc11001100_hook("d", {
              anchor: cc11001100_hook("anchor", d.anchor.firstChild, "object-key-init"),
              position: cc11001100_hook("position", 1, "object-key-init")
            }, "assign");
            continue;
          } else d.position = cc11001100_hook("d.position", 3, "assign");
        case 3:
          if (a()) return c;
          d.position = cc11001100_hook("d.position", 4, "assign");
        case 4:
          if (a()) return c;
      }
      for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
        d = cc11001100_hook("d", {
          anchor: cc11001100_hook("anchor", d.anchor.parentNode, "object-key-init"),
          position: cc11001100_hook("position", 3, "object-key-init")
        }, "assign");
        if (a()) return c;
        d.position = cc11001100_hook("d.position", 4, "assign");
        if (a()) return c;
      }
      d && d.anchor.nextSibling ? d = cc11001100_hook("d", {
        anchor: cc11001100_hook("anchor", d.anchor.nextSibling, "object-key-init"),
        position: cc11001100_hook("position", 1, "object-key-init")
      }, "assign") : d = cc11001100_hook("d", null, "assign");
    }
    return c;
  }, "var-init");
  function ju(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new mn(), "var-init"),
      d = cc11001100_hook("d", new Zl(), "var-init");
    b.forEach(e => {
      if (Dd(e, Sn, 1, Vn)) {
        e = cc11001100_hook("e", Dd(e, Sn, 1, Vn), "assign");
        if (D(e, Rn, 1) && D(e, Rn, 1).W() && D(e, Rn, 2) && D(e, Rn, 2).W()) {
          const g = cc11001100_hook("g", ku(a, D(e, Rn, 1).W()), "var-init"),
            h = cc11001100_hook("h", ku(a, D(e, Rn, 2).W()), "var-init");
          if (g && h) for (var f of iu({
            anchor: cc11001100_hook("anchor", g, "object-key-init"),
            position: cc11001100_hook("position", w(D(e, Rn, 1), 2), "object-key-init")
          }, {
            anchor: cc11001100_hook("anchor", h, "object-key-init"),
            position: cc11001100_hook("position", w(D(e, Rn, 2), 2), "object-key-init")
          })) c.set(va(f.anchor), f.position);
        }
        D(e, Rn, 3) && D(e, Rn, 3).W() && (f = cc11001100_hook("f", ku(a, D(e, Rn, 3).W()), "assign")) && c.set(va(f), w(D(e, Rn, 3), 2));
      } else Dd(e, Tn, 2, Vn) ? lu(a, Dd(e, Tn, 2, Vn), c) : Dd(e, Qn, 3, Vn) && mu(a, Dd(e, Qn, 3, Vn), d);
    });
    return new nu(c, d);
  }
  class nu {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
  }
  const lu = cc11001100_hook("lu", (a, b, c) => {
      D(b, Rn, 2) ? (b = cc11001100_hook("b", D(b, Rn, 2), "assign"), (a = cc11001100_hook("a", ku(a, b.W()), "assign")) && c.set(va(a), w(b, 2))) : D(b, pn, 1) && (a = cc11001100_hook("a", ou(a, D(b, pn, 1)), "assign")) && a.forEach(d => {
        d = cc11001100_hook("d", va(d), "assign");
        c.set(d, 1);
        c.set(d, 4);
        c.set(d, 2);
        c.set(d, 3);
      });
    }, "var-init"),
    mu = cc11001100_hook("mu", (a, b, c) => {
      D(b, pn, 1) && (a = cc11001100_hook("a", ou(a, D(b, pn, 1)), "assign")) && a.forEach(d => {
        c.add(va(d));
      });
    }, "var-init"),
    ku = cc11001100_hook("ku", (a, b) => (a = cc11001100_hook("a", ou(a, b), "assign")) && 0 < a.length ? a[0] : null, "var-init"),
    ou = cc11001100_hook("ou", (a, b) => (b = cc11001100_hook("b", Hr(b), "assign")) ? b.query(a) : null, "var-init");
  function pu(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    switch (c) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        b = cc11001100_hook("b", b.parentElement, "assign");
        break;
      default:
        throw Error("Unknown RelativePosition: " + c);
    }
    for (c = cc11001100_hook("c", [], "assign"); b;) {
      if (qu(b)) return !0;
      if (a.j.has(b)) break;
      c.push(b);
      b = cc11001100_hook("b", b.parentElement, "assign");
    }
    c.forEach(d => a.j.add(d));
    return !1;
  }
  function ru(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", su(a), "assign");
    return a.has("all") || a.has("after");
  }
  function tu(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", su(a), "assign");
    return a.has("all") || a.has("before");
  }
  function su(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a && a.getAttribute("data-no-auto-ads"), "assign")) ? new Set(a.split("|")) : new Set();
  }
  function qu(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", su(a), "var-init");
    return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"));
  }
  var uu = cc11001100_hook("uu", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new Set(), "assign");
    }
  }, "var-init");
  function vu(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return Rs(b, a);
    };
  }
  function wu(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", P(a).clientHeight, "var-init");
    return b ? Ca(xu, b + Ol(a)) : de;
  }
  function yu(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (0 > a) throw Error("ama::ead:nd");
    if (Infinity === a) return de;
    const d = cc11001100_hook("d", cu(c || At(b)), "var-init");
    return e => fu(d, a, e.aa);
  }
  function zu(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (0 > a || 0 > b.xe || 0 > b.ve || 0 > b.pb) throw Error("ama::ead:nd");
    return Infinity === a ? de : e => hu(d || At(c, b.pb), a, b, e);
  }
  function Au(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.length) return de;
    const b = cc11001100_hook("b", new dn(a), "var-init");
    return c => b.contains(c.bb);
  }
  function Bu(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      for (let c of b.sc) if (-1 < a.indexOf(c)) return !1;
      return !0;
    };
  }
  function Cu(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.length ? function (b) {
      const c = cc11001100_hook("c", b.sc, "var-init");
      return a.some(d => -1 < c.indexOf(d));
    } : ee;
  }
  function Du(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) return ee;
    const c = cc11001100_hook("c", P(b).scrollHeight - a, "var-init");
    return function (d) {
      return d.aa.j <= c;
    };
  }
  function Eu(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    a && a.forEach(c => {
      b[c] = cc11001100_hook("b[c]", !0, "assign");
    });
    return function (c) {
      return !b[w(c.Cc, 2) || 0];
    };
  }
  function Fu(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.length ? b => a.includes(w(b.Cc, 1) || 0) : ee;
  }
  function Gu(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", ju(a, b), "var-init");
    return function (d) {
      var e = cc11001100_hook("e", d.W(), "var-init");
      d = cc11001100_hook("d", Nr[d.T.j()], "assign");
      var f = cc11001100_hook("f", va(e), "var-init");
      f = cc11001100_hook("f", c.l.j.get(f), "assign");
      if (!(f = cc11001100_hook("f", f ? f.contains(d) : !1, "assign"))) a: {
        if (c.j.contains(va(e))) switch (d) {
          case 2:
          case 3:
            f = cc11001100_hook("f", !0, "assign");
            break a;
          default:
            f = cc11001100_hook("f", !1, "assign");
            break a;
        }
        for (e = cc11001100_hook("e", e.parentElement, "assign"); e;) {
          if (c.j.contains(va(e))) {
            f = cc11001100_hook("f", !0, "assign");
            break a;
          }
          e = cc11001100_hook("e", e.parentElement, "assign");
        }
        f = cc11001100_hook("f", !1, "assign");
      }
      return !f;
    };
  }
  function Hu() {
    const a = cc11001100_hook("a", new uu(), "var-init");
    return function (b) {
      var c = cc11001100_hook("c", b.W(), "var-init");
      b = cc11001100_hook("b", Nr[b.T.j()], "assign");
      a: switch (b) {
        case 1:
          var d = cc11001100_hook("d", ru(c.previousElementSibling) || tu(c), "var-init");
          break a;
        case 4:
          d = cc11001100_hook("d", ru(c) || tu(c.nextElementSibling), "assign");
          break a;
        case 2:
          d = cc11001100_hook("d", tu(c.firstElementChild), "assign");
          break a;
        case 3:
          d = cc11001100_hook("d", ru(c.lastElementChild), "assign");
          break a;
        default:
          throw Error("Unknown RelativePosition: " + b);
      }
      return !(d || pu(a, c, b));
    };
  }
  const xu = cc11001100_hook("xu", (a, b) => b.aa.j >= a, "var-init"),
    Iu = cc11001100_hook("Iu", (a, b, c) => {
      c = cc11001100_hook("c", c.aa.l, "assign");
      return a <= c && c <= b;
    }, "var-init");
  var Ju = cc11001100_hook("Ju", class {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    j() {
      const a = cc11001100_hook("a", wu(this.m), "var-init");
      let b = cc11001100_hook("b", this.l.next(), "var-init");
      for (; b;) {
        if (a(b)) return b;
        b = cc11001100_hook("b", this.l.next(), "assign");
      }
      return null;
    }
  }, "var-init");
  var Ku = cc11001100_hook("Ku", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j() {
      var a = cc11001100_hook("a", new Bo(), "var-init");
      var b = cc11001100_hook("b", D(this.m.l, pn, 1), "var-init");
      a = cc11001100_hook("a", rd(a, 1, b), "assign");
      a = cc11001100_hook("a", x(a, 2, 2), "assign");
      a = cc11001100_hook("a", x(a, 8, 1), "assign");
      a = cc11001100_hook("a", ls([a], this.l), "assign");
      return Rs(a, this.l)[0] || null;
    }
  }, "var-init");
  var Lu = cc11001100_hook("Lu", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      a.forEach(c => b = cc11001100_hook("b", Math.max(b, c.getBoundingClientRect().width), "assign"));
      return c => c.getBoundingClientRect().width > .5 * b;
    }, "var-init"),
    Mu = cc11001100_hook("Mu", a => {
      const b = cc11001100_hook("b", P(a).clientHeight || 0, "var-init");
      return c => c.getBoundingClientRect().height >= .75 * b;
    }, "var-init");
  function Nu(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!b) return !1;
    const c = cc11001100_hook("c", va(b), "var-init"),
      d = cc11001100_hook("d", a.j.get(c), "var-init");
    if (null != d) return d;
    if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
    b = cc11001100_hook("b", Nu(a, b.parentNode), "assign");
    a.j.set(c, b);
    return b;
  }
  function Ou(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eb(b.rb, c => Nu(a, c));
  }
  class Pu {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new Yl(), "assign");
      this.l = cc11001100_hook("this.l", a, "assign");
    }
  }
  ;
  class Qu {
    constructor(a, b) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
  }
  ;
  var Su = cc11001100_hook("Su", (a, {
      Xk: b = !1,
      Yk: c = S(op) ? 2 : 3,
      Hg: d = null
    } = {}) => {
      a = cc11001100_hook("a", Ps(a), "assign");
      return Ru(a, b, c, d);
    }, "var-init"),
    Ru = cc11001100_hook("Ru", (a, b = !1, c = S(op) ? 2 : 3, d = null) => {
      if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
      var e = cc11001100_hook("e", a.slice(0), "var-init");
      e.sort(Ns);
      a = cc11001100_hook("a", [], "assign");
      b = cc11001100_hook("b", new Qu(b, d), "assign");
      for (const l of e) {
        d = cc11001100_hook("d", b, "assign");
        e = cc11001100_hook("e", {
          zc: cc11001100_hook("zc", l, "object-key-init"),
          mc: cc11001100_hook("mc", 51 > l.v.length ? !1 : null != d.m ? !Ou(d.m, l) : !0, "object-key-init")
        }, "assign");
        if (d.v || e.mc) {
          if (d.j.length) {
            var f = cc11001100_hook("f", d.j[d.j.length - 1].zc, "var-init");
            b: {
              var g = cc11001100_hook("g", f.P(), "var-init");
              var h = cc11001100_hook("h", f.rb[f.rb.length - 1], "var-init");
              f = cc11001100_hook("f", e.zc.rb[0], "assign");
              if (!h || !f) {
                g = cc11001100_hook("g", !1, "assign");
                break b;
              }
              var k = cc11001100_hook("k", h.parentElement, "var-init");
              const m = cc11001100_hook("m", f.parentElement, "var-init");
              if (k && m && k == m) {
                k = cc11001100_hook("k", 0, "assign");
                for (h = cc11001100_hook("h", h.nextSibling, "assign"); 10 > k && h;) {
                  if (h == f) {
                    g = cc11001100_hook("g", !0, "assign");
                    break b;
                  }
                  if (Es(g, h)) break;
                  h = cc11001100_hook("h", h.nextSibling, "assign");
                  k++;
                }
                g = cc11001100_hook("g", !1, "assign");
              } else g = cc11001100_hook("g", !1, "assign");
            }
          } else g = cc11001100_hook("g", !0, "assign");
          g ? (d.j.push(e), e.mc && d.l.push(e.zc)) : (d.j = cc11001100_hook("d.j", [e], "assign"), d.l = cc11001100_hook("d.l", e.mc ? [e.zc] : [], "assign"));
        }
        if (b.l.length >= c) {
          d = cc11001100_hook("d", b, "assign");
          e = cc11001100_hook("e", S(op) ? 0 : 1, "assign");
          if (0 > e || e >= d.l.length) d = cc11001100_hook("d", null, "assign");else {
            for (e = cc11001100_hook("e", d.l[e], "assign"); d.j.length && !d.j[0].mc;) d.j.shift();
            d.j.shift();
            d.l.shift();
            d = cc11001100_hook("d", e, "assign");
          }
          d && a.push(d);
        }
      }
      return a;
    }, "var-init");
  var Uu = cc11001100_hook("Uu", (a, b) => {
      a = cc11001100_hook("a", Tu(a, b), "assign");
      const c = cc11001100_hook("c", new Pu(b), "var-init");
      return Ym(a, d => Su(d, {
        Hg: cc11001100_hook("Hg", c, "object-key-init")
      }));
    }, "var-init"),
    Tu = cc11001100_hook("Tu", (a, b) => {
      const c = cc11001100_hook("c", new Yl(), "var-init");
      a.forEach(d => {
        var e = cc11001100_hook("e", Hr(D(d, pn, 1)), "var-init");
        if (e) {
          const f = cc11001100_hook("f", e.toString(), "var-init");
          Ul(c, f) || c.set(f, {
            articleStructure: cc11001100_hook("articleStructure", d, "object-key-init"),
            jf: cc11001100_hook("jf", e, "object-key-init"),
            Zb: cc11001100_hook("Zb", null, "object-key-init"),
            de: cc11001100_hook("de", !1, "object-key-init")
          });
          e = cc11001100_hook("e", c.get(f), "assign");
          (d = cc11001100_hook("d", (d = cc11001100_hook("d", D(d, pn, 2), "assign")) ? w(d, 7) : null, "assign")) ? e.Zb = cc11001100_hook("e.Zb", e.Zb ? e.Zb + "," + d : d, "assign") : e.de = cc11001100_hook("e.de", !0, "assign");
        }
      });
      return Xl(c).map(d => {
        const e = cc11001100_hook("e", d.jf.query(b.document), "var-init");
        return e.length ? new Qs(e[0], d, b) : null;
      }).filter(d => null != d);
    }, "var-init");
  var Vu = cc11001100_hook("Vu", (a, b) => {
    b = cc11001100_hook("b", Tu(b, a), "assign");
    const c = cc11001100_hook("c", b.map(d => d.j), "var-init");
    b = cc11001100_hook("b", b.filter(d => {
      d = cc11001100_hook("d", d.j.getBoundingClientRect(), "assign");
      return 0 < d.width && 0 < d.height;
    }).filter(d => Lu(c)(d.j)).filter(d => Mu(a)(d.j)), "assign");
    b.sort((d, e) => {
      e = cc11001100_hook("e", e.j, "assign");
      return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top;
    });
    return b;
  }, "var-init");
  var Xu = cc11001100_hook("Xu", (a, b, c) => {
    if (B(c, 2)) {
      if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
        var d = cc11001100_hook("d", new Bo(), "var-init");
        var e = cc11001100_hook("e", new pn(), "var-init");
        e = cc11001100_hook("e", x(e, 7, "div#google-auto-placed-read-aloud-player-reserved"), "assign");
        d = cc11001100_hook("d", rd(d, 1, e), "assign");
        d = cc11001100_hook("d", x(d, 2, 2), "assign");
        d = cc11001100_hook("d", x(d, 8, 1), "assign");
        d = cc11001100_hook("d", ls([d], a), "assign");
        d = cc11001100_hook("d", Rs(d, a)[0] || null, "assign");
      } else d = cc11001100_hook("d", null, "assign");
      if (d) return d;
    }
    a: {
      c = cc11001100_hook("c", Wu(c), "assign");
      b = cc11001100_hook("b", Vu(a, b), "assign");
      for (const f of b) {
        b: switch (b = cc11001100_hook("b", a, "assign"), d = cc11001100_hook("d", f, "assign"), e = cc11001100_hook("e", c, "assign"), e) {
          case 1:
            b = cc11001100_hook("b", new Ku(b, d), "assign");
            break b;
          case 2:
            b = cc11001100_hook("b", new Ws(Ts(b, d)), "assign");
            break b;
          case 3:
            b = cc11001100_hook("b", new Ju(b, Ts(b, d)), "assign");
            break b;
          default:
            throw Error(`Unknown position: ${e}`);
        }
        if (b = cc11001100_hook("b", b.j(), "assign")) {
          a = cc11001100_hook("a", b, "assign");
          break a;
        }
      }
      a = cc11001100_hook("a", null, "assign");
    }
    return a;
  }, "var-init");
  function Wu(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (B(a, 2)) return 3;
    switch (Cd(a, 1)) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      default:
        throw Error(`Unknown player position: ${Cd(a, 1)}`);
    }
  }
  ;
  var Yu = cc11001100_hook("Yu", class {
      constructor(a) {
        this.j = cc11001100_hook("this.j", a, "assign");
      }
    }, "var-init"),
    av = cc11001100_hook("av", (a, b, c, d, e) => {
      if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return gn("Player already created");
      var f = cc11001100_hook("f", a.document, "var-init");
      const g = cc11001100_hook("g", f.createElement("div"), "var-init");
      g.id = cc11001100_hook("g.id", "google-auto-placed-read-aloud-player", "assign");
      M(g, {
        padding: cc11001100_hook("padding", "5px", "object-key-init")
      });
      const h = cc11001100_hook("h", f.createElement("script"), "var-init");
      var k = cc11001100_hook("k", Sh`window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`, "var-init");
      h.textContent = cc11001100_hook("h.textContent", Be(k), "assign");
      Ff(h);
      g.appendChild(h);
      Zu(f, g, be("https://www.google-analytics.com/analytics.js"));
      Zu(f, g, be("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
      f = cc11001100_hook("f", f.createElement("google-read-aloud-player"), "assign");
      f.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
      f.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
      f.setAttribute("data-url", c.url);
      f.setAttribute("data-locale", d);
      f.setAttribute("data-no-settings-screen", "");
      e && (null != w(e, 1) && 0 != Cd(e, 1) && f.setAttribute("data-docking-begin-trigger", $u[Cd(e, 1)]), null != w(e, 2) && f.setAttribute("data-experiment", e.j()));
      g.appendChild(f);
      Cs(b, g);
      return en(new Yu(a.document.getElementsByTagName("google-read-aloud-player")[0]));
    }, "var-init");
  const Zu = cc11001100_hook("Zu", (a, b, c) => {
      a = cc11001100_hook("a", a.createElement("script"), "assign");
      Gf(a, Ie(ae(c)));
      a.setAttribute("async", "true");
      b.appendChild(a);
    }, "var-init"),
    $u = cc11001100_hook("$u", {
      [1]: cc11001100_hook(1, "out-of-view", "object-key-init")
    }, "var-init");
  class bv {
    constructor() {
      this.promise = cc11001100_hook("this.promise", new Promise((a, b) => {
        this.resolve = cc11001100_hook("this.resolve", a, "assign");
        this.j = cc11001100_hook("this.j", b, "assign");
      }), "assign");
    }
  }
  ;
  function cv() {
    const {
      promise: a,
      resolve: b
    } = cc11001100_hook("", new bv(), "var-init");
    return {
      promise: cc11001100_hook("promise", a, "object-key-init"),
      resolve: cc11001100_hook("resolve", b, "object-key-init")
    };
  }
  ;
  function dv(a, b, c = () => {}) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.google_llp || (b.google_llp = cc11001100_hook("b.google_llp", {}, "assign"));
    b = cc11001100_hook("b", b.google_llp, "assign");
    let d = cc11001100_hook("d", b[a], "var-init");
    if (d) return d;
    d = cc11001100_hook("d", cv(), "assign");
    b[a] = cc11001100_hook("b[a]", d, "assign");
    c();
    return d;
  }
  function ev(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return dv(a, b, () => {
      Vg(b.document, c);
    }).promise;
  }
  ;
  function fv(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a = cc11001100_hook("a", ev(7, a, c).then(e => {
      e.init(b);
      e.handleAdConfig({
        preloadAdBreaks: cc11001100_hook("preloadAdBreaks", null != w(d, 1, !1) && B(d, 1) ? "auto" : "on", "object-key-init"),
        sound: cc11001100_hook("sound", "on", "object-key-init")
      });
      return e;
    }), "assign");
    Rk.Ba(915, a);
    return new gv(a);
  }
  function hv(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.j.then(c => {
      c.handleAdBreak({
        type: cc11001100_hook("type", "preroll", "object-key-init"),
        name: cc11001100_hook("name", "audiosense-preroll", "object-key-init"),
        adBreakDone: cc11001100_hook("adBreakDone", b, "object-key-init")
      });
    }), "assign");
    Rk.Ba(956, a);
  }
  var gv = cc11001100_hook("gv", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }, "var-init");
  function iv(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.m.j, "var-init");
    b.addEventListener("firstplay", () => {
      if (!a.l) {
        a.l = cc11001100_hook("a.l", !0, "assign");
        b.pause();
        const c = cc11001100_hook("c", performance.now(), "var-init");
        hv(a.v, () => {
          b.play();
          es(a.j, "preroll", {
            Vk: cc11001100_hook("Vk", performance.now() - c, "object-key-init")
          });
        });
        es(a.j, "play", {});
      }
    });
  }
  var jv = cc11001100_hook("jv", class {
    constructor(a, b, c) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
  }, "var-init");
  function kv(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    return 0 == d.length ? gn("No ArticleStructure found") : D(c, eo, 2) ? en(new lv(a, b, d, c, e, f, g ? g : "en")) : gn("No AudioSenseConfig.PlacementConfig found");
  }
  function mv(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Xu(a.v, a.C, D(a.l, eo, 2)), "var-init");
    if (b) {
      var c = cc11001100_hook("c", !!a.A.Nb && nv(a), "var-init");
      c && (a.B = cc11001100_hook("a.B", fv(a.v, a.F, a.A.Nb, D(a.l, co, 3)?.j() || new ao()), "assign"));
      var d = cc11001100_hook("d", av(a.v, b, a.A, a.G, D(a.l, fo, 4) || void 0), "var-init");
      null != d.j ? (a.m = cc11001100_hook("a.m", d.j.value, "assign"), a.m.j.addEventListener("firstview", () => {
        es(a.j, "view", {});
      }), c && iv(new jv(a.m, a.B, a.j)), es(a.j, "place", {
        sts: cc11001100_hook("sts", "ok", "object-key-init"),
        pp: cc11001100_hook("pp", b.aa.j, "object-key-init")
      })) : es(a.j, "place", {
        sts: cc11001100_hook("sts", "wf", "object-key-init")
      });
    } else es(a.j, "place", {
      sts: cc11001100_hook("sts", "pf", "object-key-init")
    });
  }
  function nv(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", D(a.l, co, 3), "assign")) ? G(a, $n, 1).some(b => 1 === Cd(b, 1)) : !1;
  }
  var lv = cc11001100_hook("lv", class {
    constructor(a, b, c, d, e, f, g) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.j = cc11001100_hook("this.j", new fs(a, b, d), "assign");
      this.C = cc11001100_hook("this.C", c, "assign");
      this.l = cc11001100_hook("this.l", d, "assign");
      this.A = cc11001100_hook("this.A", e, "assign");
      this.F = cc11001100_hook("this.F", f, "assign");
      this.G = cc11001100_hook("this.G", g, "assign");
      this.m = cc11001100_hook("this.m", this.B = cc11001100_hook("this.B", null, "assign"), "assign");
    }
  }, "var-init");
  function ov(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", 0 === a.l ? a.j.A() : a.j.B(), "var-init"),
      e = cc11001100_hook("e", a.m, "var-init"),
      f = cc11001100_hook("f", P(a.win).clientHeight, "var-init"),
      g = cc11001100_hook("g", a.j.v()?.j() || 0, "var-init");
    a: switch (d?.j()) {
      case 1:
        d = cc11001100_hook("d", "AUTO_PROSE_TOP_ANCHOR", "assign");
        break a;
      case 2:
        d = cc11001100_hook("d", "AUTO_PROSE_BOTTOM_ANCHOR", "assign");
        break a;
      default:
        d = cc11001100_hook("d", "UNKNOWN_POSITION", "assign");
    }
    a: switch (a.l) {
      case 0:
        a = cc11001100_hook("a", "DESKTOP", "assign");
        break a;
      case 2:
        a = cc11001100_hook("a", "MOBILE", "assign");
        break a;
      default:
        a = cc11001100_hook("a", "OTHER_VIEWPORT", "assign");
    }
    bs(e, Xr, {
      ...c,
      evt: b,
      vh: f,
      eid: g,
      pos: d,
      vpt: a
    });
  }
  function pv(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    ov(a, "place", {
      sts: cc11001100_hook("sts", b, "object-key-init")
    });
  }
  var qv = cc11001100_hook("qv", class {
    constructor(a, b, c) {
      this.win = cc11001100_hook("this.win", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.l = cc11001100_hook("this.l", ph(), "assign");
    }
  }, "var-init");
  var rv = cc11001100_hook("rv", {}, "var-init"),
    sv = cc11001100_hook("sv", {}, "var-init"),
    tv = cc11001100_hook("tv", {}, "var-init"),
    uv = cc11001100_hook("uv", {}, "var-init"),
    vv = cc11001100_hook("vv", {}, "var-init");
  function wv() {
    throw Error("Do not instantiate directly");
  }
  wv.prototype.Vd = cc11001100_hook("wv.prototype.Vd", null, "assign");
  wv.prototype.ya = cc11001100_hook("wv.prototype.ya", function () {
    return this.content;
  }, "assign");
  wv.prototype.toString = cc11001100_hook("wv.prototype.toString", function () {
    return this.content;
  }, "assign");
  function xv(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.Wd !== rv) throw Error("Sanitized content was not of kind HTML.");
    return nf(a.toString());
  }
  function yv() {
    wv.call(this);
  }
  Ha(yv, wv);
  yv.prototype.Wd = cc11001100_hook("yv.prototype.Wd", rv, "assign");
  function zv(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null != a && a.Wd === b;
  }
  ;
  function Av(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null != a) switch (a.Vd) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
    return null;
  }
  function Bv(a) {
    cc11001100_hook("a", a, "function-parameter");
    return zv(a, rv) ? a : a instanceof lf ? Cv(kf(a).toString()) : a instanceof lf ? Cv(kf(a).toString()) : Cv(String(String(a)).replace(Dv, Ev), Av(a));
  }
  var Cv = cc11001100_hook("Cv", function (a) {
    function b(c) {
      cc11001100_hook("c", c, "function-parameter");
      this.content = cc11001100_hook("this.content", c, "assign");
    }
    b.prototype = cc11001100_hook("b.prototype", a.prototype, "assign");
    return function (c, d) {
      c = cc11001100_hook("c", new b(String(c)), "assign");
      void 0 !== d && (c.Vd = cc11001100_hook("c.Vd", d, "assign"));
      return c;
    };
  }(yv), "var-init");
  function Fv(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
  }
  function Gv(a) {
    cc11001100_hook("a", a, "function-parameter");
    return zv(a, rv) ? String(String(a.ya()).replace(Hv, "").replace(Iv, "&lt;")).replace(Jv, Ev) : String(a).replace(Dv, Ev);
  }
  function Kv(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", String(a), "assign");
    const b = cc11001100_hook("b", (d, e, f) => {
      const g = cc11001100_hook("g", Math.min(e.length - f, d.length), "var-init");
      for (let k = cc11001100_hook("k", 0, "var-init"); k < g; k++) {
        var h = cc11001100_hook("h", e[f + k], "var-init");
        if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1;
      }
      return !0;
    }, "var-init");
    for (var c = cc11001100_hook("c", 0, "var-init"); -1 != (c = cc11001100_hook("c", a.indexOf("<", c), "assign"));) {
      if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
      c += cc11001100_hook("c", 1, "assign");
    }
    return a;
  }
  function Lv(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a) return " null ";
    if (zv(a, sv)) return a.ya();
    if (a instanceof Ce || a instanceof Ce) return Be(a).toString();
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Mv, Nv) + "'";
    }
  }
  function V(a) {
    cc11001100_hook("a", a, "function-parameter");
    zv(a, vv) ? a = cc11001100_hook("a", Fv(a.ya()), "assign") : null == a ? a = cc11001100_hook("a", "", "assign") : a instanceof We ? a = cc11001100_hook("a", Fv(Ve(a)), "assign") : a instanceof We ? a = cc11001100_hook("a", Fv(Ve(a)), "assign") : a instanceof hf ? a = cc11001100_hook("a", Fv(gf(a)), "assign") : a instanceof hf ? a = cc11001100_hook("a", Fv(gf(a)), "assign") : (a = cc11001100_hook("a", String(a), "assign"), a = cc11001100_hook("a", Ov.test(a) ? a : "zSoyz", "assign"));
    return a;
  }
  const Pv = cc11001100_hook("Pv", {
    "\x00": cc11001100_hook("\x00", "&#0;", "object-key-init"),
    "\t": cc11001100_hook("\t", "&#9;", "object-key-init"),
    "\n": cc11001100_hook("\n", "&#10;", "object-key-init"),
    "\v": cc11001100_hook("\v", "&#11;", "object-key-init"),
    "\f": cc11001100_hook("\f", "&#12;", "object-key-init"),
    "\r": cc11001100_hook("\r", "&#13;", "object-key-init"),
    " ": cc11001100_hook(" ", "&#32;", "object-key-init"),
    '"': cc11001100_hook('"', "&quot;", "object-key-init"),
    "&": cc11001100_hook("&", "&amp;", "object-key-init"),
    "'": cc11001100_hook("'", "&#39;", "object-key-init"),
    "-": cc11001100_hook("-", "&#45;", "object-key-init"),
    "/": cc11001100_hook("/", "&#47;", "object-key-init"),
    "<": cc11001100_hook("<", "&lt;", "object-key-init"),
    "=": cc11001100_hook("=", "&#61;", "object-key-init"),
    ">": cc11001100_hook(">", "&gt;", "object-key-init"),
    "`": cc11001100_hook("`", "&#96;", "object-key-init"),
    "\u0085": cc11001100_hook("\u0085", "&#133;", "object-key-init"),
    "\u00a0": cc11001100_hook("\u00a0", "&#160;", "object-key-init"),
    "\u2028": cc11001100_hook("\u2028", "&#8232;", "object-key-init"),
    "\u2029": cc11001100_hook("\u2029", "&#8233;", "object-key-init")
  }, "var-init");
  function Ev(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Pv[a];
  }
  const Qv = cc11001100_hook("Qv", {
    "\x00": cc11001100_hook("\x00", "\\x00", "object-key-init"),
    "\b": cc11001100_hook("\b", "\\x08", "object-key-init"),
    "\t": cc11001100_hook("\t", "\\t", "object-key-init"),
    "\n": cc11001100_hook("\n", "\\n", "object-key-init"),
    "\v": cc11001100_hook("\v", "\\x0b", "object-key-init"),
    "\f": cc11001100_hook("\f", "\\f", "object-key-init"),
    "\r": cc11001100_hook("\r", "\\r", "object-key-init"),
    '"': cc11001100_hook('"', "\\x22", "object-key-init"),
    $: cc11001100_hook("$", "\\x24", "object-key-init"),
    "&": cc11001100_hook("&", "\\x26", "object-key-init"),
    "'": cc11001100_hook("'", "\\x27", "object-key-init"),
    "(": cc11001100_hook("(", "\\x28", "object-key-init"),
    ")": cc11001100_hook(")", "\\x29", "object-key-init"),
    "*": cc11001100_hook("*", "\\x2a", "object-key-init"),
    "+": cc11001100_hook("+", "\\x2b", "object-key-init"),
    ",": cc11001100_hook(",", "\\x2c", "object-key-init"),
    "-": cc11001100_hook("-", "\\x2d", "object-key-init"),
    ".": cc11001100_hook(".", "\\x2e", "object-key-init"),
    "/": cc11001100_hook("/", "\\/", "object-key-init"),
    ":": cc11001100_hook(":", "\\x3a", "object-key-init"),
    "<": cc11001100_hook("<", "\\x3c", "object-key-init"),
    "=": cc11001100_hook("=", "\\x3d", "object-key-init"),
    ">": cc11001100_hook(">", "\\x3e", "object-key-init"),
    "?": cc11001100_hook("?", "\\x3f", "object-key-init"),
    "[": cc11001100_hook("[", "\\x5b", "object-key-init"),
    "\\": cc11001100_hook("\\", "\\\\", "object-key-init"),
    "]": cc11001100_hook("]", "\\x5d", "object-key-init"),
    "^": cc11001100_hook("^", "\\x5e", "object-key-init"),
    "{": cc11001100_hook("{", "\\x7b", "object-key-init"),
    "|": cc11001100_hook("|", "\\x7c", "object-key-init"),
    "}": cc11001100_hook("}", "\\x7d", "object-key-init"),
    "\u0085": cc11001100_hook("\u0085", "\\x85", "object-key-init"),
    "\u2028": cc11001100_hook("\u2028", "\\u2028", "object-key-init"),
    "\u2029": cc11001100_hook("\u2029", "\\u2029", "object-key-init")
  }, "var-init");
  function Nv(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Qv[a];
  }
  const Rv = cc11001100_hook("Rv", {
    "\x00": cc11001100_hook("\x00", "%00", "object-key-init"),
    "\u0001": cc11001100_hook("\u0001", "%01", "object-key-init"),
    "\u0002": cc11001100_hook("\u0002", "%02", "object-key-init"),
    "\u0003": cc11001100_hook("\u0003", "%03", "object-key-init"),
    "\u0004": cc11001100_hook("\u0004", "%04", "object-key-init"),
    "\u0005": cc11001100_hook("\u0005", "%05", "object-key-init"),
    "\u0006": cc11001100_hook("\u0006", "%06", "object-key-init"),
    "\u0007": cc11001100_hook("\u0007", "%07", "object-key-init"),
    "\b": cc11001100_hook("\b", "%08", "object-key-init"),
    "\t": cc11001100_hook("\t", "%09", "object-key-init"),
    "\n": cc11001100_hook("\n", "%0A", "object-key-init"),
    "\v": cc11001100_hook("\v", "%0B", "object-key-init"),
    "\f": cc11001100_hook("\f", "%0C", "object-key-init"),
    "\r": cc11001100_hook("\r", "%0D", "object-key-init"),
    "\u000e": cc11001100_hook("\u000e", "%0E", "object-key-init"),
    "\u000f": cc11001100_hook("\u000f", "%0F", "object-key-init"),
    "\u0010": cc11001100_hook("\u0010", "%10", "object-key-init"),
    "\u0011": cc11001100_hook("\u0011", "%11", "object-key-init"),
    "\u0012": cc11001100_hook("\u0012", "%12", "object-key-init"),
    "\u0013": cc11001100_hook("\u0013", "%13", "object-key-init"),
    "\u0014": cc11001100_hook("\u0014", "%14", "object-key-init"),
    "\u0015": cc11001100_hook("\u0015", "%15", "object-key-init"),
    "\u0016": cc11001100_hook("\u0016", "%16", "object-key-init"),
    "\u0017": cc11001100_hook("\u0017", "%17", "object-key-init"),
    "\u0018": cc11001100_hook("\u0018", "%18", "object-key-init"),
    "\u0019": cc11001100_hook("\u0019", "%19", "object-key-init"),
    "\u001a": cc11001100_hook("\u001a", "%1A", "object-key-init"),
    "\u001b": cc11001100_hook("\u001b", "%1B", "object-key-init"),
    "\u001c": cc11001100_hook("\u001c", "%1C", "object-key-init"),
    "\u001d": cc11001100_hook("\u001d", "%1D", "object-key-init"),
    "\u001e": cc11001100_hook("\u001e", "%1E", "object-key-init"),
    "\u001f": cc11001100_hook("\u001f", "%1F", "object-key-init"),
    " ": cc11001100_hook(" ", "%20", "object-key-init"),
    '"': cc11001100_hook('"', "%22", "object-key-init"),
    "'": cc11001100_hook("'", "%27", "object-key-init"),
    "(": cc11001100_hook("(", "%28", "object-key-init"),
    ")": cc11001100_hook(")", "%29", "object-key-init"),
    "<": cc11001100_hook("<", "%3C", "object-key-init"),
    ">": cc11001100_hook(">", "%3E", "object-key-init"),
    "\\": cc11001100_hook("\\", "%5C", "object-key-init"),
    "{": cc11001100_hook("{", "%7B", "object-key-init"),
    "}": cc11001100_hook("}", "%7D", "object-key-init"),
    "\u007f": cc11001100_hook("\u007f", "%7F", "object-key-init"),
    "\u0085": cc11001100_hook("\u0085", "%C2%85", "object-key-init"),
    "\u00a0": cc11001100_hook("\u00a0", "%C2%A0", "object-key-init"),
    "\u2028": cc11001100_hook("\u2028", "%E2%80%A8", "object-key-init"),
    "\u2029": cc11001100_hook("\u2029", "%E2%80%A9", "object-key-init"),
    "\uff01": cc11001100_hook("\uff01", "%EF%BC%81", "object-key-init"),
    "\uff03": cc11001100_hook("\uff03", "%EF%BC%83", "object-key-init"),
    "\uff04": cc11001100_hook("\uff04", "%EF%BC%84", "object-key-init"),
    "\uff06": cc11001100_hook("\uff06", "%EF%BC%86", "object-key-init"),
    "\uff07": cc11001100_hook("\uff07", "%EF%BC%87", "object-key-init"),
    "\uff08": cc11001100_hook("\uff08", "%EF%BC%88", "object-key-init"),
    "\uff09": cc11001100_hook("\uff09", "%EF%BC%89", "object-key-init"),
    "\uff0a": cc11001100_hook("\uff0a", "%EF%BC%8A", "object-key-init"),
    "\uff0b": cc11001100_hook("\uff0b", "%EF%BC%8B", "object-key-init"),
    "\uff0c": cc11001100_hook("\uff0c", "%EF%BC%8C", "object-key-init"),
    "\uff0f": cc11001100_hook("\uff0f", "%EF%BC%8F", "object-key-init"),
    "\uff1a": cc11001100_hook("\uff1a", "%EF%BC%9A", "object-key-init"),
    "\uff1b": cc11001100_hook("\uff1b", "%EF%BC%9B", "object-key-init"),
    "\uff1d": cc11001100_hook("\uff1d", "%EF%BC%9D", "object-key-init"),
    "\uff1f": cc11001100_hook("\uff1f", "%EF%BC%9F", "object-key-init"),
    "\uff20": cc11001100_hook("\uff20", "%EF%BC%A0", "object-key-init"),
    "\uff3b": cc11001100_hook("\uff3b", "%EF%BC%BB", "object-key-init"),
    "\uff3d": cc11001100_hook("\uff3d", "%EF%BC%BD", "object-key-init")
  }, "var-init");
  function Sv(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Rv[a];
  }
  const Dv = cc11001100_hook("Dv", /[\x00\x22\x26\x27\x3c\x3e]/g, "var-init"),
    Jv = cc11001100_hook("Jv", /[\x00\x22\x27\x3c\x3e]/g, "var-init"),
    Tv = cc11001100_hook("Tv", /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g, "var-init"),
    Uv = cc11001100_hook("Uv", /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g, "var-init"),
    Mv = cc11001100_hook("Mv", /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g, "var-init"),
    Vv = cc11001100_hook("Vv", /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, "var-init"),
    Ov = cc11001100_hook("Ov", /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier|linear-gradient)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier|linear-gradient)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i, "var-init"),
    Wv = cc11001100_hook("Wv", /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i, "var-init");
  function Xv(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String(a).replace(Vv, Sv);
  }
  const Hv = cc11001100_hook("Hv", /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, "var-init"),
    Iv = cc11001100_hook("Iv", /</g, "var-init");
  function Yv(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", void 0 === a ? "white" : a, "assign");
    return Cv('<svg width="' + Gv(18) + '" height="' + Gv(18) + '" viewBox="0 0 ' + Gv(18) + " " + Gv(18) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' + (zv(a, rv) ? String(String(a.ya()).replace(Hv, "").replace(Iv, "&lt;")).replace(Uv, Ev) : String(a).replace(Tv, Ev)) + " /></svg>");
  }
  ; /* 
    Copyright Mathias Bynens <http://mathiasbynens.be/> 
    Permission is hereby granted, free of charge, to any person obtaining 
    a copy of this software and associated documentation files (the 
    "Software"), to deal in the Software without restriction, including 
    without limitation the rights to use, copy, modify, merge, publish, 
    distribute, sublicense, and/or sell copies of the Software, and to 
    permit persons to whom the Software is furnished to do so, subject to 
    the following conditions: 
    The above copyright notice and this permission notice shall be 
    included in all copies or substantial portions of the Software. 
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
  const Zv = cc11001100_hook("Zv", Math.floor, "var-init");
  var $v = cc11001100_hook("$v", /^xn--/, "var-init"),
    aw = cc11001100_hook("aw", /[\x2E\u3002\uFF0E\uFF61]/g, "var-init");
  const bw = cc11001100_hook("bw", {
    Lj: cc11001100_hook("Lj", "Overflow: input needs wider integers to process", "object-key-init"),
    Hj: cc11001100_hook("Hj", "Illegal input >= 0x80 (not a basic code point)", "object-key-init"),
    sj: cc11001100_hook("sj", "Invalid input", "object-key-init")
  }, "var-init");
  function cw(a) {
    cc11001100_hook("a", a, "function-parameter");
    throw RangeError(bw[a]);
  }
  function dw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.split("@"), "var-init");
    let d = cc11001100_hook("d", "", "var-init");
    1 < c.length && (d = cc11001100_hook("d", c[0] + "@", "assign"), a = cc11001100_hook("a", c[1], "assign"));
    a = cc11001100_hook("a", a.replace(aw, "."), "assign");
    a = cc11001100_hook("a", a.split(".").map(b).join("."), "assign");
    return d + a;
  }
  function ew(a) {
    cc11001100_hook("a", a, "function-parameter");
    return dw(a, b => {
      if ($v.test(b) && 4 < b.length) {
        b = cc11001100_hook("b", b.slice(4).toLowerCase(), "assign");
        const h = cc11001100_hook("h", [], "var-init"),
          k = cc11001100_hook("k", b.length, "var-init");
        let l = cc11001100_hook("l", 0, "var-init"),
          m = cc11001100_hook("m", 128, "var-init");
        var c = cc11001100_hook("c", 72, "var-init"),
          d = cc11001100_hook("d", b.lastIndexOf("-"), "var-init");
        0 > d && (d = cc11001100_hook("d", 0, "assign"));
        for (var e = cc11001100_hook("e", 0, "var-init"); e < d; ++e) 128 <= b.charCodeAt(e) && cw("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
        for (d = cc11001100_hook("d", 0 < d ? d + 1 : 0, "assign"); d < k;) {
          e = cc11001100_hook("e", l, "assign");
          for (let q = cc11001100_hook("q", 1, "var-init"), r = cc11001100_hook("r", 36, "var-init");; r += cc11001100_hook("r", 36, "assign")) {
            d >= k && cw("Invalid input");
            var f = cc11001100_hook("f", b.charCodeAt(d++), "var-init");
            f = cc11001100_hook("f", 10 > f - 48 ? f - 22 : 26 > f - 65 ? f - 65 : 26 > f - 97 ? f - 97 : 36, "assign");
            (36 <= f || f > Zv((2147483647 - l) / q)) && cw("Overflow: input needs wider integers to process");
            l += cc11001100_hook("l", f * q, "assign");
            var g = cc11001100_hook("g", r <= c ? 1 : r >= c + 26 ? 26 : r - c, "var-init");
            if (f < g) break;
            f = cc11001100_hook("f", 36 - g, "assign");
            q > Zv(2147483647 / f) && cw("Overflow: input needs wider integers to process");
            q *= cc11001100_hook("q", f, "assign");
          }
          f = cc11001100_hook("f", h.length + 1, "assign");
          c = cc11001100_hook("c", l - e, "assign");
          g = cc11001100_hook("g", f, "assign");
          let n = cc11001100_hook("n", 0, "var-init");
          c = cc11001100_hook("c", 0 == e ? Zv(c / 700) : c >> 1, "assign");
          for (c += cc11001100_hook("c", Zv(c / g), "assign"); 455 < c; n += cc11001100_hook("n", 36, "assign")) c = cc11001100_hook("c", Zv(c / 35), "assign");
          c = cc11001100_hook("c", Zv(n + 36 * c / (c + 38)), "assign");
          Zv(l / f) > 2147483647 - m && cw("Overflow: input needs wider integers to process");
          m += cc11001100_hook("m", Zv(l / f), "assign");
          l %= cc11001100_hook("l", f, "assign");
          h.splice(l++, 0, m);
        }
        b = cc11001100_hook("b", String.fromCodePoint.apply(null, h), "assign");
      }
      return b;
    });
  }
  ;
  function fw(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.Ca.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(b, void 0, {
      rsToken: cc11001100_hook("rsToken", c, "object-key-init"),
      afsExperimentId: cc11001100_hook("afsExperimentId", a.m, "object-key-init"),
      hostName: cc11001100_hook("hostName", a.host, "object-key-init")
    });
  }
  var gw = cc11001100_hook("gw", class {
    constructor(a, b, c, d, e, f, g, h, k) {
      this.Ca = cc11001100_hook("this.Ca", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.v = cc11001100_hook("this.v", c, "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
      this.B = cc11001100_hook("this.B", e, "assign");
      this.host = cc11001100_hook("this.host", f, "assign");
      this.language = cc11001100_hook("this.language", g, "assign");
      this.A = cc11001100_hook("this.A", h, "assign");
      this.m = cc11001100_hook("this.m", k, "assign");
    }
    init() {
      this.Ca.setAttribute("id", "prose-iframe");
      this.Ca.setAttribute("width", "100%");
      this.Ca.setAttribute("height", "100%");
      var a = cc11001100_hook("a", this.Ca, "var-init"),
        b = cc11001100_hook("b", Xe({
          "box-sizing": cc11001100_hook("box-sizing", "border-box", "object-key-init"),
          border: cc11001100_hook("border", "unset", "object-key-init")
        }), "var-init");
      a.style.cssText = cc11001100_hook("a.style.cssText", Ve(b), "assign");
      a = cc11001100_hook("a", "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host), "assign");
      var c = cc11001100_hook("c", Se(a) || Te, "var-init");
      var d = cc11001100_hook("d", ew(this.host.startsWith("www.") ? this.host.slice(4) : this.host), "var-init");
      a = cc11001100_hook("a", this.v, "assign");
      b = cc11001100_hook("b", this.j, "assign");
      var e = cc11001100_hook("e", this.B, "var-init"),
        f = cc11001100_hook("f", this.host, "var-init");
      d = cc11001100_hook("d", this.A.replace("${website}", d), "assign");
      var g = cc11001100_hook("g", Cv, "var-init");
      zv(c, tv) || zv(c, uv) ? c = cc11001100_hook("c", Xv(c), "assign") : c instanceof Oe ? c = cc11001100_hook("c", Xv(Pe(c)), "assign") : c instanceof Oe ? c = cc11001100_hook("c", Xv(Pe(c)), "assign") : c instanceof Ee ? c = cc11001100_hook("c", Xv(He(c).toString()), "assign") : c instanceof Ee ? c = cc11001100_hook("c", Xv(He(c).toString()), "assign") : (c = cc11001100_hook("c", String(c), "assign"), c = cc11001100_hook("c", Wv.test(c) ? c.replace(Vv, Sv) : "about:invalid#zSoyz", "assign"));
      a = cc11001100_hook("a", g('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}</style><div class="prose-container"><img class="cse-favicon" src="' + Gv(c) + '" alt="' + Gv(f) + ' icon"><p class="cse-header"><strong>' + Bv(d) + '</strong></p><div class="gcse-search" data-gname="' + Gv(a) + '" data-adclient="' + Gv(b) + '" data-adchannel="' + Gv(e) + '" data-as_sitesearch="' + Gv(f) + '" data-personalizedAds="false"></div></div>'), "assign");
      a = cc11001100_hook("a", xv(a), "assign");
      b = cc11001100_hook("b", {
        style: cc11001100_hook("style", Xe({
          margin: cc11001100_hook("margin", 0, "object-key-init")
        }), "object-key-init")
      }, "assign");
      e = cc11001100_hook("e", {
        src: cc11001100_hook("src", Ke(be("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
          cxId: cc11001100_hook("cxId", this.l, "object-key-init"),
          lang: cc11001100_hook("lang", this.language, "object-key-init")
        }), "object-key-init")
      }, "assign");
      f = cc11001100_hook("f", {}, "assign");
      d = cc11001100_hook("d", {}, "assign");
      for (h in e) Object.prototype.hasOwnProperty.call(e, h) && (d[h] = cc11001100_hook("d[h]", e[h], "assign"));
      for (const k in f) Object.prototype.hasOwnProperty.call(f, k) && (d[k] = cc11001100_hook("d[k]", f[k], "assign"));
      var h = cc11001100_hook("h", rf("script", d), "var-init");
      h = cc11001100_hook("h", of("body", b, [a, h]), "assign");
      this.Ca.srcdoc = cc11001100_hook("this.Ca.srcdoc", kf(h), "assign");
    }
  }, "var-init");
  function hw({
    J: a,
    kd: b,
    hd: c,
    Sd: d,
    Z: e,
    wf: f
  }) {
    let g = cc11001100_hook("g", 0, "var-init");
    try {
      g |= cc11001100_hook("g", a != a.top ? 512 : 0, "assign");
      const h = cc11001100_hook("h", Math.min(a.screen.width || 0, a.screen.height || 0), "var-init");
      g |= cc11001100_hook("g", h ? 320 > h ? 8192 : 0 : 2048, "assign");
      g |= cc11001100_hook("g", a.navigator && iw(a.navigator.userAgent) ? 1048576 : 0, "assign");
      g = cc11001100_hook("g", b ? g | (a.innerHeight >= b ? 0 : 1024) : g | (a.innerHeight >= a.innerWidth ? 0 : 8), "assign");
      g |= cc11001100_hook("g", Hl(a, c), "assign");
      g |= cc11001100_hook("g", Il(a), "assign");
    } catch {
      g |= cc11001100_hook("g", 32, "assign");
    }
    switch (d) {
      case 2:
        jw(a, e) && (g |= cc11001100_hook("g", 16777216, "assign"));
        break;
      case 1:
        kw(a, e) && (g |= cc11001100_hook("g", 16777216, "assign"));
    }
    f && lw(a, e) && (g |= cc11001100_hook("g", 16777216, "assign"));
    return g;
  }
  function iw(a) {
    cc11001100_hook("a", a, "function-parameter");
    return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a);
  }
  var jw = cc11001100_hook("jw", (a, b = null) => {
      const c = cc11001100_hook("c", mw(0, a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), nw) + 15, 3), "var-init");
      return ow(a, c, b);
    }, "var-init"),
    kw = cc11001100_hook("kw", (a, b = null) => {
      const c = cc11001100_hook("c", a.innerWidth, "var-init"),
        d = cc11001100_hook("d", a.innerHeight, "var-init"),
        e = cc11001100_hook("e", Math.min(Math.round(a.innerWidth / 320 * 50), nw) + 15, "var-init"),
        f = cc11001100_hook("f", mw(0, c, 3, d - e, d, 3), "var-init");
      25 < e && f.push({
        x: cc11001100_hook("x", c - 25, "object-key-init"),
        y: cc11001100_hook("y", d - 25, "object-key-init")
      });
      return ow(a, f, b);
    }, "var-init");
  function lw(a, b = null) {
    cc11001100_hook("a", a, "function-parameter");
    return null != pw(a, b);
  }
  function pw(a, b = null) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.innerHeight, "var-init");
    c = cc11001100_hook("c", mw(0, a.innerWidth, 10, c - 45, c, 10), "assign");
    return qw(a, c, b);
  }
  function rw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.ag, "var-init"),
      d = cc11001100_hook("d", b.Ng, "var-init");
    b = cc11001100_hook("b", mw(c, c + b.width, 10, d, d + b.height, 10), "assign");
    return qw(a, b, null);
  }
  function sw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.innerWidth, "var-init"),
      d = cc11001100_hook("d", a.innerHeight, "var-init");
    let e = cc11001100_hook("e", d, "var-init");
    for (; e > b;) {
      var f = cc11001100_hook("f", mw(0, c, 9, e - b, e, 9), "var-init");
      f = cc11001100_hook("f", qw(a, f), "assign");
      if (!f) return d - e;
      e = cc11001100_hook("e", f.getBoundingClientRect().top - 1, "assign");
    }
    return null;
  }
  function ow(a, b, c = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null != qw(a, b, c);
  }
  function qw(a, b, c = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (const d of b) if (b = cc11001100_hook("b", tw(a, d, c), "assign")) return b;
    return null;
  }
  function tw(a, b, c = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const d = cc11001100_hook("d", uw(a.document, b.x, b.y), "var-init");
    return d ? vw(d, a, b, c) || ww(d, a, b, c) || null : null;
  }
  function uw(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = cc11001100_hook("a._goog_efp_called_", a.elementFromPoint(b, c), "assign"));
    return a.elementFromPoint(b, c);
  }
  function ww(a, b, c, d = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const e = cc11001100_hook("e", b.document, "var-init");
    for (a = cc11001100_hook("a", a.offsetParent, "assign"); a && a !== e.body; a = cc11001100_hook("a", a.offsetParent, "assign")) {
      const f = cc11001100_hook("f", vw(a, b, c, d), "var-init");
      if (f) return f;
    }
    return null;
  }
  function mw(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    const g = cc11001100_hook("g", [], "var-init");
    for (let m = cc11001100_hook("m", 0, "var-init"); m < f; m++) for (let n = cc11001100_hook("n", 0, "var-init"); n < c; n++) {
      var h = cc11001100_hook("h", g, "var-init"),
        k = cc11001100_hook("k", c - 1, "var-init"),
        l = cc11001100_hook("l", f - 1, "var-init");
      h.push.call(h, {
        x: cc11001100_hook("x", a + (0 === k ? 0 : n / k) * (b - a), "object-key-init"),
        y: cc11001100_hook("y", d + (0 === l ? 0 : m / l) * (e - d), "object-key-init")
      });
    }
    return g;
  }
  function vw(a, b, c, d = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if ("fixed" !== Yh(a, "position")) return null;
    var e = cc11001100_hook("e", "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= ai(a).width && 1 >= ai(a).height ? !0 : !1, "var-init");
    d && Ji(d, "ach_evt", {
      tn: cc11001100_hook("tn", a.tagName, "object-key-init"),
      id: cc11001100_hook("id", a.getAttribute("id") ?? "", "object-key-init"),
      cls: cc11001100_hook("cls", a.getAttribute("class") ?? "", "object-key-init"),
      ign: cc11001100_hook("ign", String(e), "object-key-init"),
      pw: cc11001100_hook("pw", b.innerWidth, "object-key-init"),
      ph: cc11001100_hook("ph", b.innerHeight, "object-key-init"),
      x: cc11001100_hook("x", c.x, "object-key-init"),
      y: cc11001100_hook("y", c.y, "object-key-init")
    }, !0, 1);
    return e ? null : a;
  }
  const nw = cc11001100_hook("nw", 90 * 1.38, "var-init");
  const xw = cc11001100_hook("xw", ["-webkit-text-fill-color"], "var-init");
  function yw(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (Vb) {
      {
        const c = cc11001100_hook("c", Xg(a.document.body, a), "var-init");
        if (c) {
          a = cc11001100_hook("a", {}, "assign");
          var b = cc11001100_hook("b", c.length, "var-init");
          for (let d = cc11001100_hook("d", 0, "var-init"); d < b; ++d) a[c[d]] = cc11001100_hook("a[c[d]]", "initial", "assign");
          a = cc11001100_hook("a", zw(a), "assign");
        } else a = cc11001100_hook("a", Aw(), "assign");
      }
    } else a = cc11001100_hook("a", Aw(), "assign");
    return a;
  }
  var Aw = cc11001100_hook("Aw", () => {
    const a = cc11001100_hook("a", {
      all: cc11001100_hook("all", "initial", "object-key-init")
    }, "var-init");
    Ab(xw, b => {
      a[b] = cc11001100_hook("a[b]", "unset", "assign");
    });
    return a;
  }, "var-init");
  function zw(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ab(xw, b => {
      delete a[b];
    });
    return a;
  }
  ;
  function Bw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.document.createElement("div"), "var-init");
    M(c, yw(a));
    a = cc11001100_hook("a", c.attachShadow({
      mode: cc11001100_hook("mode", "open", "object-key-init")
    }), "assign");
    b && c.classList.add(b);
    return {
      kb: cc11001100_hook("kb", c, "object-key-init"),
      shadowRoot: cc11001100_hook("shadowRoot", a, "object-key-init")
    };
  }
  ;
  function Cw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new Dw(a, b);
  }
  function Ew(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Fw(a), "var-init");
    Ab(a.j.maxZIndexListeners, c => c(b));
  }
  function Fw(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", $g(a.j.maxZIndexRestrictions), "assign");
    return a.length ? Math.min.apply(null, a) : null;
  }
  class Gw {
    constructor(a) {
      this.j = cc11001100_hook("this.j", Dl(a).floatingAdsStacking, "assign");
    }
    addListener(a) {
      this.j.maxZIndexListeners.push(a);
      a(Fw(this));
    }
  }
  function Hw(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a.j) {
      var b = cc11001100_hook("b", a.l, "var-init"),
        c = cc11001100_hook("c", a.m, "var-init");
      const d = cc11001100_hook("d", b.j.nextRestrictionId++, "var-init");
      b.j.maxZIndexRestrictions[d] = cc11001100_hook("b.j.maxZIndexRestrictions[d]", c, "assign");
      Ew(b);
      a.j = cc11001100_hook("a.j", d, "assign");
    }
  }
  function Iw(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null != a.j) {
      var b = cc11001100_hook("b", a.l, "var-init");
      delete b.j.maxZIndexRestrictions[a.j];
      Ew(b);
      a.j = cc11001100_hook("a.j", null, "assign");
    }
  }
  class Dw {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
    }
  }
  ;
  function Jw(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.activeElement, "assign");
    const b = cc11001100_hook("b", a?.shadowRoot, "var-init");
    return b ? Jw(b) || a : a;
  }
  function Kw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Lw(b, a.document.body).flatMap(c => Mw(c));
  }
  function Lw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a, "var-init");
    for (a = cc11001100_hook("a", [], "assign"); c && c !== b;) {
      a.push(c);
      let e;
      var d;
      (d = cc11001100_hook("d", c.parentElement, "assign")) || (c = cc11001100_hook("c", c.getRootNode(), "assign"), d = cc11001100_hook("d", (null == (e = cc11001100_hook("e", c.mode && c.host ? c : null, "assign")) ? void 0 : e.host) || null, "assign"));
      c = cc11001100_hook("c", d, "assign");
    }
    return c !== b ? [] : a;
  }
  function Mw(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.parentElement, "var-init");
    return b ? Array.from(b.children).filter(c => c !== a) : [];
  }
  ;
  function Nw(a) {
    cc11001100_hook("a", a, "function-parameter");
    null !== a.state && (a.state.Gf.forEach(b => {
      b.inert = cc11001100_hook("b.inert", !1, "assign");
    }), a.state.rg?.focus(), a.state = cc11001100_hook("a.state", null, "assign"));
  }
  function Ow(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Nw(a);
    const c = cc11001100_hook("c", Jw(a.win.document), "var-init");
    b = cc11001100_hook("b", Kw(a.win, b).filter(d => !d.inert), "assign");
    b.forEach(d => {
      d.inert = cc11001100_hook("d.inert", !0, "assign");
    });
    a.state = cc11001100_hook("a.state", {
      rg: cc11001100_hook("rg", c, "object-key-init"),
      Gf: cc11001100_hook("Gf", b, "object-key-init")
    }, "assign");
  }
  var Pw = cc11001100_hook("Pw", class {
    constructor(a) {
      this.win = cc11001100_hook("this.win", a, "assign");
      this.state = cc11001100_hook("this.state", null, "assign");
    }
    Fc() {
      Nw(this);
    }
  }, "var-init");
  function Qw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", Bw(a, b), "assign");
    a.document.body.appendChild(b.kb);
    return b;
  }
  function Rw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b.getElementById(a), "assign");
    if (!b) throw Error(`Element (${a}) does not exist`);
    return b;
  }
  function Sw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new fm(b.M), "var-init");
    mm(b, !0, () => void Q(c, !0));
    mm(b, !1, () => {
      a.setTimeout(() => {
        b.M || Q(c, !1);
      }, 700);
    });
    return hm(c);
  }
  ;
  function Tw(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.yb, "var-init"),
      c = cc11001100_hook("c", a.xb, "var-init"),
      d = cc11001100_hook("d", a.ob, "var-init"),
      e = cc11001100_hook("e", a.Qd, "var-init"),
      f = cc11001100_hook("f", a.Lc, "var-init"),
      g = cc11001100_hook("g", a.Me ? 20 : 0, "var-init");
    a = cc11001100_hook("a", "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " + V(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + V(g) + "px; transition: transform " + V(f) + "s ease-in-out;" + (c ? "left: 0; border-top-right-radius: " + V(g) + "px; border-bottom-right-radius: " + V(g) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + V(g) + "px; border-bottom-left-radius: " + V(g) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {height: 24px;}.hd-control-button {border: none; background: none; cursor: pointer;}#hd-back-arrow-button {" + (c ? "float: right;" : "float: left;") + "}#hd-close-button {" + (c ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' + Gv(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + Gv(d) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>', "assign");
    return Cv(a);
  }
  ;
  function Uw(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.top, "assign");
    if (!a) return null;
    try {
      var b = cc11001100_hook("b", a.history, "var-init");
    } catch (c) {
      b = cc11001100_hook("b", null, "assign");
    }
    b = cc11001100_hook("b", b && b.pushState && "function" === typeof b.pushState ? b : null, "assign");
    if (!b) return null;
    if (a.googNavStack) return a.googNavStack;
    b = cc11001100_hook("b", new Vw(a, b), "assign");
    b.init();
    return b ? a.googNavStack = cc11001100_hook("a.googNavStack", b, "assign") : null;
  }
  function Ww(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b ? b.googNavStackId === a.m ? b : null : null;
  }
  function Xw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let c = cc11001100_hook("c", b.length - 1, "var-init"); 0 <= c; --c) {
      const d = cc11001100_hook("d", 0 === c, "var-init");
      a.J.requestAnimationFrame(() => void b[c].Bg({
        isFinal: cc11001100_hook("isFinal", d, "object-key-init")
      }));
    }
  }
  function Yw(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", Kb(a.stack, b, (c, d) => c - d.je.googNavStackStateId), "assign");
    if (0 <= b) return a.stack.splice(b, a.stack.length - b);
    b = cc11001100_hook("b", -b - 1, "assign");
    return a.stack.splice(b, a.stack.length - b);
  }
  class Vw extends Ik {
    constructor(a, b) {
      super();
      this.J = cc11001100_hook("this.J", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.stack = cc11001100_hook("this.stack", [], "assign");
      this.m = cc11001100_hook("this.m", 1E9 * Math.random() >>> 0, "assign");
      this.A = cc11001100_hook("this.A", 0, "assign");
      this.v = cc11001100_hook("this.v", c => {
        (c = cc11001100_hook("c", Ww(this, c.state), "assign")) ? Xw(this, Yw(this, c.googNavStackStateId + .5)) : Xw(this, this.stack.splice(0, this.stack.length));
      }, "assign");
    }
    pushEvent() {
      const a = cc11001100_hook("a", {
          googNavStackId: cc11001100_hook("googNavStackId", this.m, "object-key-init"),
          googNavStackStateId: cc11001100_hook("googNavStackStateId", this.A++, "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", new Promise(c => {
          this.stack.push({
            Bg: cc11001100_hook("Bg", c, "object-key-init"),
            je: cc11001100_hook("je", a, "object-key-init")
          });
        }), "var-init");
      this.l.pushState(a, "");
      return {
        navigatedBack: cc11001100_hook("navigatedBack", b, "object-key-init"),
        triggerNavigateBack: cc11001100_hook("triggerNavigateBack", () => {
          const c = cc11001100_hook("c", Yw(this, a.googNavStackStateId), "var-init");
          var d;
          if (d = cc11001100_hook("d", 0 < c.length, "assign")) {
            d = cc11001100_hook("d", c[0].je, "assign");
            const e = cc11001100_hook("e", Ww(this, this.l.state), "var-init");
            d = cc11001100_hook("d", e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId, "assign");
          }
          d && this.l.go(-c.length);
          Xw(this, c);
        }, "object-key-init")
      };
    }
    init() {
      this.J.addEventListener("popstate", this.v);
    }
    j() {
      this.J.removeEventListener("popstate", this.v);
      super.j();
    }
  }
  ;
  function Zw(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Uw(a), "assign")) ? new $w(a) : null;
  }
  function ax(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.l) {
      var {
        navigatedBack: b,
        triggerNavigateBack: c
      } = cc11001100_hook("", a.v.pushEvent(), "var-init");
      a.l = cc11001100_hook("a.l", c, "assign");
      b.then(() => {
        a.l && !a.B && (a.l = cc11001100_hook("a.l", null, "assign"), om(a.m));
      });
    }
  }
  var $w = cc11001100_hook("$w", class extends Ik {
    constructor(a) {
      super();
      this.v = cc11001100_hook("this.v", a, "assign");
      this.m = cc11001100_hook("this.m", new pm(), "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
    }
  }, "var-init");
  function bx(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", c.Tc ? null : new Pw(a), "var-init");
    const e = cc11001100_hook("e", Cw(new Gw(a), c.zIndex - 1), "var-init");
    b = cc11001100_hook("b", cx(a, b, c), "assign");
    d = cc11001100_hook("d", new dx(a, b, d, Tm(a), e), "assign");
    d.init();
    (c.ec || void 0 === c.ec) && ex(d);
    c.Ja && ((a = cc11001100_hook("a", Zw(a), "assign")) ? fx(d, a, c.nd) : c.nd?.(Error("Unable to create closeNavigator")));
    return d;
  }
  function ex(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A = cc11001100_hook("a.A", b => {
      "Escape" === b.key && a.l.M && a.collapse();
    }, "assign");
    a.win.document.body.addEventListener("keydown", a.A);
  }
  function fx(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    mm(a.l, !0, () => {
      try {
        ax(b);
      } catch (d) {
        c?.(d);
      }
    });
    mm(a.l, !1, () => {
      try {
        b.l && (b.l(), b.l = cc11001100_hook("b.l", null, "assign"));
      } catch (d) {
        c?.(d);
      }
    });
    new qm(b.m).X(() => void a.collapse());
    Jk(a, Ca(Hk, b));
  }
  function gx(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.B) throw Error("Accessing domItems after disposal");
    return a.C;
  }
  function hx(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.win.setTimeout(() => {
      a.l.M && gx(a).qa.focus();
    }, 500);
  }
  function ix(a) {
    cc11001100_hook("a", a, "function-parameter");
    const {
      ld: b,
      xf: c
    } = cc11001100_hook("", gx(a), "var-init");
    b.addEventListener("click", () => void a.collapse());
    c.addEventListener("click", () => void a.collapse());
  }
  function jx(a) {
    cc11001100_hook("a", a, "function-parameter");
    mm(a.m, !1, () => {
      gx(a).qa.classList.add("hd-hidden");
    });
  }
  var dx = cc11001100_hook("dx", class extends Ik {
    constructor(a, b, c, d, e) {
      super();
      this.win = cc11001100_hook("this.win", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.v = cc11001100_hook("this.v", c, "assign");
      this.l = cc11001100_hook("this.l", new fm(!1), "assign");
      this.m = cc11001100_hook("this.m", Sw(a, this.l), "assign");
      mm(this.m, !0, () => {
        Vm(d);
        Hw(e);
      });
      mm(this.m, !1, () => {
        Xm(d);
        Iw(e);
      });
    }
    show({
      Zd: a = !1
    } = {}) {
      if (this.B) throw Error("Cannot show drawer after disposal");
      gx(this).qa.classList.remove("hd-hidden");
      am(this.win);
      gx(this).qa.classList.add("hd-revealed");
      Q(this.l, !0);
      this.v && (Ow(this.v, gx(this).Mb.kb), hx(this));
      a && mm(this.m, !1, () => {
        this.xa();
      });
    }
    collapse() {
      gx(this).qa.classList.remove("hd-revealed");
      Q(this.l, !1);
      this.v?.Fc();
    }
    isVisible() {
      return this.m;
    }
    init() {
      ix(this);
      jx(this);
    }
    j() {
      this.A && this.win.document.body.removeEventListener("keydown", this.A);
      const a = cc11001100_hook("a", this.C.Mb.kb, "var-init"),
        b = cc11001100_hook("b", a.parentNode, "var-init");
      b && b.removeChild(a);
      this.v?.Fc();
      super.j();
    }
  }, "var-init");
  function cx(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", Qw(a, c.Uc), "var-init"),
      e = cc11001100_hook("e", d.shadowRoot, "var-init");
    e.appendChild(Ng(new zg(a.document), xv(Tw({
      yb: cc11001100_hook("yb", c.yb, "object-key-init"),
      Me: cc11001100_hook("Me", c.Me ?? !0, "object-key-init"),
      xb: cc11001100_hook("xb", c.xb || !1, "object-key-init"),
      ob: cc11001100_hook("ob", c.ob, "object-key-init"),
      Qd: cc11001100_hook("Qd", c.Qd || "", "object-key-init"),
      zIndex: cc11001100_hook("zIndex", c.zIndex, "object-key-init"),
      Lc: cc11001100_hook("Lc", .5, "object-key-init")
    }))));
    const f = cc11001100_hook("f", Rw("hd-drawer-container", e), "var-init");
    c.Ff?.j(g => {
      f.setAttribute("aria-label", g);
    });
    c = cc11001100_hook("c", Rw("hd-content-container", e), "assign");
    c.appendChild(b);
    am(a);
    return {
      qa: cc11001100_hook("qa", f, "object-key-init"),
      ld: cc11001100_hook("ld", Rw("hd-modal-background", e), "object-key-init"),
      Qc: cc11001100_hook("Qc", c, "object-key-init"),
      xf: cc11001100_hook("xf", Rw("hd-close-button", e), "object-key-init"),
      Tk: cc11001100_hook("Tk", Rw("hd-back-arrow-button", e), "object-key-init"),
      Mb: cc11001100_hook("Mb", d, "object-key-init")
    };
  }
  ;
  function kx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.mg, "var-init"),
      c = cc11001100_hook("c", a.Of, "var-init"),
      d = cc11001100_hook("d", a.Lc, "var-init");
    return Cv("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " + V(c) + "%; transition: transform " + V(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + V(20) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " + V(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + V((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " + V(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + V(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + V(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " + V(20) + "px " + V(20) + "px 0 0; background: white; display: flex; height: " + V(30) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' + lx("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + lx("ved-fixed-handle") + "</div></div></div>");
  }
  function lx(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Cv('<div class="ved-handle" id="' + Gv(a) + '"><div class="ved-handle-icon"></div></div>');
  }
  ;
  function mx(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Em(a.j).map(b => b ? nx(a, b) : 0);
  }
  function nx(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    switch (a.direction) {
      case 0:
        return ox(-b.Xe);
      case 1:
        return ox(-b.We);
      default:
        throw Error(`Unhandled direction: ${a.direction}`);
    }
  }
  function px(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Gm(a.j).map(b => nx(a, b));
  }
  var qx = cc11001100_hook("qx", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.direction = cc11001100_hook("this.direction", 0, "assign");
    }
  }, "var-init");
  function ox(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 === a ? 0 : a;
  }
  ;
  function X(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.B) throw Error("Accessing domItems after disposal");
    return a.C;
  }
  function rx(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.win.setTimeout(() => {
      a.l.M && X(a).qa.focus();
    }, 500);
  }
  function sx(a) {
    cc11001100_hook("a", a, "function-parameter");
    X(a).qa.classList.remove("ved-hidden");
    am(a.win);
    const {
      da: b,
      Fa: c
    } = cc11001100_hook("", X(a), "var-init");
    c.getBoundingClientRect().top <= b.getBoundingClientRect().top || tx(a);
    X(a).qa.classList.add("ved-revealed");
    Q(a.l, !0);
    a.m && (Ow(a.m, X(a).Mb.kb), rx(a));
  }
  function ux(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Sw(a.win, a.l);
  }
  function vx(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new fm(b()), "var-init");
    new qm(a.H).X(() => void Q(c, b()));
    return hm(c);
  }
  function wx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const {
      da: b,
      wc: c
    } = cc11001100_hook("", X(a), "var-init");
    return vx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top);
  }
  function xx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const {
      da: b,
      wc: c
    } = cc11001100_hook("", X(a), "var-init");
    return vx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1);
  }
  function yx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const {
      da: b
    } = cc11001100_hook("", X(a), "var-init");
    return vx(a, () => b.scrollTop === b.scrollHeight - b.clientHeight);
  }
  function zx(a) {
    cc11001100_hook("a", a, "function-parameter");
    return im(wx(a), yx(a));
  }
  function Ax(a) {
    cc11001100_hook("a", a, "function-parameter");
    const {
      da: b,
      Fa: c
    } = cc11001100_hook("", X(a), "var-init");
    return vx(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1);
  }
  function tx(a) {
    cc11001100_hook("a", a, "function-parameter");
    X(a).Fa.classList.add("ved-snap-point-top");
    var b = cc11001100_hook("b", Bx(a, X(a).Fa), "var-init");
    X(a).da.scrollTop = cc11001100_hook("X(a).da.scrollTop", b, "assign");
    Cx(a);
  }
  function Dx(a) {
    cc11001100_hook("a", a, "function-parameter");
    km(wx(a), !0, () => {
      const {
        ee: b,
        Jb: c
      } = cc11001100_hook("", X(a), "var-init");
      b.classList.remove("ved-hidden");
      c.classList.add("ved-with-background");
    });
    km(wx(a), !1, () => {
      const {
        ee: b,
        Jb: c
      } = cc11001100_hook("", X(a), "var-init");
      b.classList.add("ved-hidden");
      c.classList.remove("ved-with-background");
    });
  }
  function Ex(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Im(a.win, X(a).Qc), "var-init");
    Lm(b).j(() => void Fx(a));
    Jk(a, Ca(Hk, b));
  }
  function Gx(a) {
    cc11001100_hook("a", a, "function-parameter");
    km(Hx(a), !0, () => {
      X(a).Fe.classList.remove("ved-hidden");
    });
    km(Hx(a), !1, () => {
      X(a).Fe.classList.add("ved-hidden");
    });
  }
  function Ix(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", () => void om(a.F), "var-init"),
      {
        ld: c,
        Fa: d,
        Nf: e
      } = cc11001100_hook("", X(a), "var-init");
    c.addEventListener("click", b);
    d.addEventListener("click", b);
    e.addEventListener("click", b);
    mm(Jx(a), !0, b);
  }
  function Kx(a) {
    cc11001100_hook("a", a, "function-parameter");
    mm(ux(a), !1, () => {
      tx(a);
      X(a).qa.classList.add("ved-hidden");
    });
  }
  function Cx(a) {
    cc11001100_hook("a", a, "function-parameter");
    lm(a.v, () => void om(a.H));
  }
  function Fx(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.v.M) {
      var {
          Xd: b,
          Qc: c
        } = cc11001100_hook("", X(a), "var-init"),
        d = cc11001100_hook("d", c.getBoundingClientRect().height, "var-init");
      d = cc11001100_hook("d", Math.max(Lx(a), d), "assign");
      Q(a.v, !0);
      var e = cc11001100_hook("e", Mx(a), "var-init");
      b.style.setProperty("height", `${d}px`);
      e();
      a.win.requestAnimationFrame(() => {
        a.win.requestAnimationFrame(() => {
          Q(a.v, !1);
        });
      });
    }
  }
  function Hx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const {
      da: b,
      Fa: c
    } = cc11001100_hook("", X(a), "var-init");
    return vx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top);
  }
  function Jx(a) {
    cc11001100_hook("a", a, "function-parameter");
    return gm(a.A.map(nn), Nx(a));
  }
  function Nx(a) {
    cc11001100_hook("a", a, "function-parameter");
    return vx(a, () => 0 === X(a).da.scrollTop);
  }
  function Bx(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    ({
      Jb: a
    } = cc11001100_hook("", X(a), "assign"));
    a = cc11001100_hook("a", a.getBoundingClientRect().top, "assign");
    return b.getBoundingClientRect().top - a;
  }
  function Ox(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Q(a.A, !0);
    const {
      Jb: c,
      da: d
    } = cc11001100_hook("", X(a), "var-init");
    d.scrollTop = cc11001100_hook("d.scrollTop", 0, "assign");
    d.classList.add("ved-scrolling-paused");
    c.style.setProperty("margin-top", `-${b}px`);
    return () => void Px(a, b);
  }
  function Px(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const {
      Jb: c,
      da: d
    } = cc11001100_hook("", X(a), "var-init");
    c.style.removeProperty("margin-top");
    d.classList.remove("ved-scrolling-paused");
    X(a).da.scrollTop = cc11001100_hook("X(a).da.scrollTop", b, "assign");
    Cx(a);
    Q(a.A, !1);
  }
  function Mx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", X(a).da.scrollTop, "var-init");
    Ox(a, b);
    return () => void Px(a, b);
  }
  function Lx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const {
      da: b,
      wc: c,
      Xd: d,
      Fa: e
    } = cc11001100_hook("", X(a), "var-init");
    a = cc11001100_hook("a", b.getBoundingClientRect(), "assign");
    const f = cc11001100_hook("f", c.getBoundingClientRect(), "var-init");
    var g = cc11001100_hook("g", d.getBoundingClientRect(), "var-init");
    const h = cc11001100_hook("h", e.getBoundingClientRect(), "var-init");
    g = cc11001100_hook("g", g.top - f.top, "assign");
    return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g);
  }
  var Qx = cc11001100_hook("Qx", class extends Ik {
    constructor(a, b, c, d) {
      super();
      this.win = cc11001100_hook("this.win", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.I = cc11001100_hook("this.I", c, "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
      this.F = cc11001100_hook("this.F", new pm(), "assign");
      this.H = cc11001100_hook("this.H", new pm(), "assign");
      this.l = cc11001100_hook("this.l", new fm(!1), "assign");
      this.A = cc11001100_hook("this.A", new fm(!1), "assign");
      this.v = cc11001100_hook("this.v", new fm(!1), "assign");
    }
    init() {
      tx(this);
      Dx(this);
      Ex(this);
      Gx(this);
      Ix(this);
      Kx(this);
      X(this).da.addEventListener("scroll", () => void Cx(this));
    }
    j() {
      const a = cc11001100_hook("a", this.C.Mb.kb, "var-init"),
        b = cc11001100_hook("b", a.parentNode, "var-init");
      b && b.removeChild(a);
      this.m?.Fc();
      super.j();
    }
  }, "var-init");
  function Rx(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", Qw(a, c.Uc), "var-init"),
      e = cc11001100_hook("e", d.shadowRoot, "var-init");
    e.appendChild(Ng(new zg(a.document), xv(kx({
      mg: cc11001100_hook("mg", 100 * c.qd, "object-key-init"),
      Of: cc11001100_hook("Of", 100 * c.Yc, "object-key-init"),
      zIndex: cc11001100_hook("zIndex", c.zIndex, "object-key-init"),
      Lc: cc11001100_hook("Lc", .5, "object-key-init")
    }))));
    const f = cc11001100_hook("f", Rw("ved-drawer-container", e), "var-init");
    c.Ff?.j(g => {
      f.setAttribute("aria-label", g);
    });
    c = cc11001100_hook("c", Rw("ved-content-container", e), "assign");
    c.appendChild(b);
    am(a);
    return {
      qa: cc11001100_hook("qa", f, "object-key-init"),
      ld: cc11001100_hook("ld", Rw("ved-modal-background", e), "object-key-init"),
      Te: cc11001100_hook("Te", Rw("ved-ui-revealer", e), "object-key-init"),
      da: cc11001100_hook("da", Rw("ved-scroller", e), "object-key-init"),
      Jb: cc11001100_hook("Jb", Rw("ved-scrolled-stack", e), "object-key-init"),
      Nf: cc11001100_hook("Nf", Rw("ved-fully-closed-anchor", e), "object-key-init"),
      Fa: cc11001100_hook("Fa", Rw("ved-partially-extended-anchor", e), "object-key-init"),
      Xd: cc11001100_hook("Xd", Rw("ved-content-sizer", e), "object-key-init"),
      Qc: cc11001100_hook("Qc", c, "object-key-init"),
      Zk: cc11001100_hook("Zk", Rw("ved-moving-handle", e), "object-key-init"),
      wc: cc11001100_hook("wc", Rw("ved-moving-handle-holder", e), "object-key-init"),
      Mf: cc11001100_hook("Mf", Rw("ved-fixed-handle", e), "object-key-init"),
      ee: cc11001100_hook("ee", Rw("ved-fixed-handle-holder", e), "object-key-init"),
      Fe: cc11001100_hook("Fe", Rw("ved-over-scroll-block", e), "object-key-init"),
      Mb: cc11001100_hook("Mb", d, "object-key-init")
    };
  }
  ;
  function Sx(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", Cw(new Gw(a), c.zIndex - 1), "var-init");
    b = cc11001100_hook("b", Rx(a, b, c), "assign");
    const e = cc11001100_hook("e", c.Tc ? null : new Pw(a), "var-init");
    var f = cc11001100_hook("f", b.Mf, "var-init");
    f = cc11001100_hook("f", new Hm(new ym(a, f), new vm(f)), "assign");
    var g = cc11001100_hook("g", f.j, "var-init");
    g.A.addEventListener("mousedown", g.G);
    g.v.addEventListener("mouseup", g.B);
    g.v.addEventListener("mousemove", g.C, {
      passive: cc11001100_hook("passive", !1, "object-key-init")
    });
    g = cc11001100_hook("g", f.l, "assign");
    g.l.addEventListener("touchstart", g.C);
    g.l.addEventListener("touchend", g.A);
    g.l.addEventListener("touchmove", g.B, {
      passive: cc11001100_hook("passive", !1, "object-key-init")
    });
    b = cc11001100_hook("b", new Qx(a, b, new qx(f), e), "assign");
    b.init();
    d = cc11001100_hook("d", new Tx(a, b, Tm(a), d), "assign");
    Jk(d, Ca(Hk, b));
    d.init();
    c.Ja && ((a = cc11001100_hook("a", Zw(a), "assign")) ? Ux(d, a, c.nd) : c.nd?.(Error("Unable to create closeNavigator")));
    return d;
  }
  function Ux(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    mm(a.l.l, !0, () => {
      try {
        ax(b);
      } catch (d) {
        c?.(d);
      }
    });
    mm(a.l.l, !1, () => {
      try {
        b.l && (b.l(), b.l = cc11001100_hook("b.l", null, "assign"));
      } catch (d) {
        c?.(d);
      }
    });
    new qm(b.m).X(() => void a.collapse());
    Jk(a, Ca(Hk, b));
  }
  function Vx(a) {
    cc11001100_hook("a", a, "function-parameter");
    mm(gm(zx(a.l), Ax(a.l)), !0, () => {
      X(a.l).Fa.classList.remove("ved-snap-point-top");
    });
    km(xx(a.l), !0, () => {
      X(a.l).da.classList.add("ved-no-snap");
    });
    km(xx(a.l), !1, () => {
      X(a.l).da.classList.remove("ved-no-snap");
    });
    mm(xx(a.l), !1, () => {
      var b = cc11001100_hook("b", a.l, "var-init");
      var c = cc11001100_hook("c", X(b).wc, "var-init");
      c = cc11001100_hook("c", Ox(b, Bx(b, c)), "assign");
      b.win.setTimeout(c, 100);
    });
  }
  function Wx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l.I, "var-init");
    mx(b).X(c => {
      c = cc11001100_hook("c", -c, "assign");
      if (0 < c) {
        const {
          Te: d
        } = cc11001100_hook("", X(a.l), "var-init");
        d.classList.add("ved-no-animation");
        d.style.setProperty("transform", `translateY(${c}px)`);
      } else ({
        Te: c
      } = cc11001100_hook("", X(a.l), "assign")), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform");
    });
    px(b).X(c => {
      30 < -c && a.collapse();
    });
  }
  var Tx = cc11001100_hook("Tx", class extends Ik {
    constructor(a, b, c, d) {
      super();
      this.win = cc11001100_hook("this.win", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      mm(ux(b), !0, () => {
        Vm(c);
        Hw(d);
      });
      mm(ux(b), !1, () => {
        Xm(c);
        Iw(d);
      });
    }
    show({
      Zd: a = !1
    } = {}) {
      if (this.B) throw Error("Cannot show drawer after disposal");
      sx(this.l);
      a && mm(ux(this.l), !1, () => {
        this.xa();
      });
    }
    collapse() {
      var a = cc11001100_hook("a", this.l, "var-init");
      X(a).qa.classList.remove("ved-revealed");
      Q(a.l, !1);
      a.m?.Fc();
    }
    isVisible() {
      return ux(this.l);
    }
    init() {
      new qm(this.l.F).X(() => {
        this.collapse();
      });
      Vx(this);
      Wx(this);
      am(this.win);
    }
  }, "var-init");
  function Xx(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    b = cc11001100_hook("b", a.v ? 50 : 150, "assign");
    const c = cc11001100_hook("c", a.j.innerHeight, "var-init");
    return {
      ag: cc11001100_hook("ag", a.j.innerWidth - 16 - b, "object-key-init"),
      Ng: cc11001100_hook("Ng", 1 === a.A?.j() ? .14 * c : .98 * c, "object-key-init"),
      width: cc11001100_hook("width", b, "object-key-init"),
      height: cc11001100_hook("height", 50, "object-key-init")
    };
  }
  function Yx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.A?.v() || void 0, "var-init"),
      c = cc11001100_hook("c", a.A?.A() || void 0, "var-init");
    let d, e;
    1 === a.A?.j() ? d = cc11001100_hook("d", 14, "assign") : e = cc11001100_hook("e", 2, "assign");
    return {
      backgroundColor: cc11001100_hook("backgroundColor", b, "object-key-init"),
      Ya: cc11001100_hook("Ya", c, "object-key-init"),
      Ae: cc11001100_hook("Ae", d, "object-key-init"),
      ze: cc11001100_hook("ze", e, "object-key-init"),
      Eg: cc11001100_hook("Eg", a.V, "object-key-init")
    };
  }
  function Zx(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.B.shadowRoot.querySelectorAll(".autoprose-search-button")[0], "var-init");
    return b ? b : a.B.shadowRoot.querySelectorAll(".autoprose-searchbox")[0];
  }
  function $x(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.v && mm(a.C.isVisible(), !1, () => {
      a.l.contentDocument.activeElement.blur();
    });
  }
  function ay(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", new ResizeObserver(async d => {
        a.l.height = cc11001100_hook("a.l.height", 0, "assign");
        await new Promise(e => a.j.requestAnimationFrame(e));
        a.l.height = cc11001100_hook("a.l.height", d[0].target.scrollHeight, "assign");
      }), "var-init"),
      c = cc11001100_hook("c", () => {
        const d = cc11001100_hook("d", a.l.contentDocument?.documentElement, "var-init");
        d ? b.observe(d) : (console.warn("iframe body missing"), setTimeout(c, 1E3));
      }, "var-init");
    c();
  }
  var by = cc11001100_hook("by", class {
    constructor(a, b, c, d, e, f, g) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.v = cc11001100_hook("this.v", (this.K = cc11001100_hook("this.K", g, "assign")) ? 500 > this.j.innerWidth : 2 === ph(), "assign");
      this.I = cc11001100_hook("this.I", c, "assign");
      this.B = cc11001100_hook("this.B", Bw(this.j), "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
      this.L = cc11001100_hook("this.L", e?.j()?.j() || "en", "assign");
      this.ba = cc11001100_hook("this.ba", e?.j()?.v() || "Search results from ${website}", "assign");
      this.V = cc11001100_hook("this.V", e?.j()?.A() || "Search", "assign");
      this.H = cc11001100_hook("this.H", b.replace("ca", "partner"), "assign");
      this.G = cc11001100_hook("this.G", new zg(window.document), "assign");
      this.l = cc11001100_hook("this.l", this.G.createElement("IFRAME"), "assign");
      this.F = cc11001100_hook("this.F", new gw(this.l, e?.G() || "", "auto-prose", this.H, "AutoProseVariant", a.location.host, this.L, this.ba, f), "assign");
      a = cc11001100_hook("a", this.l, "assign");
      this.C = cc11001100_hook("this.C", this.v ? Sx(this.j, a, {
        qd: cc11001100_hook("qd", .95, "object-key-init"),
        Yc: cc11001100_hook("Yc", .95, "object-key-init"),
        zIndex: cc11001100_hook("zIndex", 2147483645, "object-key-init"),
        Ja: cc11001100_hook("Ja", !0, "object-key-init"),
        ec: cc11001100_hook("ec", !0, "object-key-init")
      }) : bx(this.j, a, {
        yb: cc11001100_hook("yb", "min(65vw, 768px)", "object-key-init"),
        ob: cc11001100_hook("ob", "", "object-key-init"),
        xb: cc11001100_hook("xb", !1, "object-key-init"),
        zIndex: cc11001100_hook("zIndex", 2147483645, "object-key-init"),
        Ja: cc11001100_hook("Ja", !0, "object-key-init"),
        ec: cc11001100_hook("ec", !0, "object-key-init")
      }), "assign");
      this.A = cc11001100_hook("this.A", this.v ? e?.B() : e?.A(), "assign");
    }
    init() {
      var a = cc11001100_hook("a", rw(this.j, Xx(this)), "var-init");
      a?.className.startsWith("adsbygoogle") ? pv(this.m, "pfeaa") : a ? pv(this.m, "pfeofe") : (this.I.appendChild(this.B.kb), this.B.shadowRoot.appendChild(Gg(document, (() => {
        if (this.v) {
          var b = cc11001100_hook("b", Yx(this), "var-init"),
            c = cc11001100_hook("c", {
              backgroundColor: cc11001100_hook("backgroundColor", b.backgroundColor, "object-key-init"),
              Ya: cc11001100_hook("Ya", b.Ya, "object-key-init"),
              offsetTop: cc11001100_hook("offsetTop", b.Ae, "object-key-init"),
              od: cc11001100_hook("od", b.ze, "object-key-init"),
              zIndex: cc11001100_hook("zIndex", 2147483643, "object-key-init")
            }, "var-init"),
            d = cc11001100_hook("d", c.ig, "var-init"),
            e = cc11001100_hook("e", c.od, "var-init");
          b = cc11001100_hook("b", c.backgroundColor, "assign");
          var f = cc11001100_hook("f", c.Ya, "var-init");
          d = cc11001100_hook("d", void 0 === d ? 16 : d, "assign");
          var g = cc11001100_hook("g", c.offsetTop, "var-init");
          e = cc11001100_hook("e", void 0 === e ? 2 : e, "assign");
          f = cc11001100_hook("f", void 0 === f ? "white" : f, "assign");
          c = cc11001100_hook("c", c.zIndex, "assign");
          b = cc11001100_hook("b", "<style>.autoprose-search-button {background: " + V(void 0 === b ? "#000" : b) + "; border-radius: " + V(24) + "px;" + (g ? "top: " + V(g) + "%;" : "bottom: " + V(e) + "%;") + "border-width: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " + V(48) + "px; position: fixed; right: " + V(d) + "px; width: 48px; z-index: " + V(c) + ';}.autoprose-search-icon {position: relative;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + Yv(f) + "</div></button>", "assign");
          b = cc11001100_hook("b", Cv(b), "assign");
          return xv(b);
        }
        b = cc11001100_hook("b", Yx(this), "assign");
        c = cc11001100_hook("c", {
          Fg: cc11001100_hook("Fg", b.Eg, "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", b.backgroundColor, "object-key-init"),
          Ya: cc11001100_hook("Ya", b.Ya, "object-key-init"),
          offsetTop: cc11001100_hook("offsetTop", b.Ae, "object-key-init"),
          od: cc11001100_hook("od", b.ze, "object-key-init"),
          zIndex: cc11001100_hook("zIndex", 2147483643, "object-key-init")
        }, "assign");
        d = cc11001100_hook("d", c.ig, "assign");
        e = cc11001100_hook("e", c.od, "assign");
        b = cc11001100_hook("b", c.backgroundColor, "assign");
        f = cc11001100_hook("f", c.Ya, "assign");
        d = cc11001100_hook("d", void 0 === d ? 16 : d, "assign");
        g = cc11001100_hook("g", c.offsetTop, "assign");
        e = cc11001100_hook("e", void 0 === e ? 2 : e, "assign");
        const h = cc11001100_hook("h", c.Fg, "var-init");
        f = cc11001100_hook("f", void 0 === f ? "white" : f, "assign");
        c = cc11001100_hook("c", c.zIndex, "assign");
        b = cc11001100_hook("b", "<style>.autoprose-search-button {align-items: center; background: " + V(void 0 === b ? "#000" : b) + "; border-radius: " + V(24) + "px; border-width: 0;" + (g ? "top: " + V(g) + "%;" : "bottom: " + V(e) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " + V(48) + "px; line-height: 1; padding: 0 20px; position: fixed; right: " + V(d) + "px; z-index: " + V(c) + ";}.autoprose-search-text {color: " + V(f) + '; font-family: Google Sans, Roboto, sans-serif; font-size: 16px; margin: 10px; user-select: none;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + Yv(f) + '</div><div class="autoprose-search-text">' + Bv(h) + "</div></button>", "assign");
        b = cc11001100_hook("b", Cv(b), "assign");
        return xv(b);
      })())), this.F.init(), (a = cc11001100_hook("a", Zx(this), "assign")) ? (ov(this.m, "place", {
        sts: cc11001100_hook("sts", "ok", "object-key-init")
      }), oe(a, "click", () => {
        ov(this.m, "click", {});
        ay(this);
        this.C.show();
        const b = cc11001100_hook("b", this.l.contentDocument.getElementsByTagName("input")[0], "var-init");
        b ? b.focus({
          preventScroll: cc11001100_hook("preventScroll", !0, "object-key-init")
        }) : console.warn("searchbox missing");
      })) : pv(this.m, "pfmsb"), $x(this));
    }
  }, "var-init");
  function cy(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", D(a.j, lo, 31)?.v()?.j() || 0, "var-init"),
      c = cc11001100_hook("c", a.l.document, "var-init"),
      d = cc11001100_hook("d", c.createElement("div"), "var-init");
    d.classList.add("auto-prose-wrapper");
    c.body.appendChild(d);
    new by(a.l, a.m, d, a.v, D(a.j, lo, 31), b, D(a.j, Yn, 25)?.j() || !1).init();
  }
  var dy = cc11001100_hook("dy", class {
    constructor(a, b, c, d) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.v = cc11001100_hook("this.v", new qv(a, b, D(this.j, lo, 31) || new lo()), "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
    }
  }, "var-init");
  function ey(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    bs(a.j, Wr, {
      ...b,
      evt: "place",
      vh: P(a.win).clientHeight,
      eid: a.l.j()?.j() || 0
    });
  }
  var fy = cc11001100_hook("fy", class {
    constructor(a, b, c) {
      this.win = cc11001100_hook("this.win", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
    }
  }, "var-init");
  var gy = cc11001100_hook("gy", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    ya(a) {
      const b = cc11001100_hook("b", a.document.createElement("div"), "var-init");
      M(b, yw(a));
      M(b, {
        width: cc11001100_hook("width", "100%", "object-key-init"),
        "max-width": cc11001100_hook("max-width", "1000px", "object-key-init"),
        margin: cc11001100_hook("margin", "auto", "object-key-init")
      });
      b.appendChild(this.j);
      const c = cc11001100_hook("c", a.document.createElement("div"), "var-init");
      M(c, yw(a));
      M(c, {
        width: cc11001100_hook("width", "100%", "object-key-init"),
        "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
        display: cc11001100_hook("display", "block", "object-key-init"),
        padding: cc11001100_hook("padding", "5px 5px 2px", "object-key-init"),
        "box-sizing": cc11001100_hook("box-sizing", "border-box", "object-key-init"),
        "background-color": cc11001100_hook("background-color", "#FFF", "object-key-init")
      });
      c.appendChild(b);
      return c;
    }
  }, "var-init");
  var hy = cc11001100_hook("hy", (a, b) => (b = cc11001100_hook("b", D(b, vo, 6), "assign")) ? Uu(b.j(), a).map(c => Os(c)) : [], "var-init");
  var iy = cc11001100_hook("iy", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
  }, "var-init");
  function jy(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.v.createElement("SCRIPT"), "var-init");
    Gf(b, N`https://www.google.com/adsense/search/async-ads.js`);
    a.win.document.head.appendChild(b);
  }
  function ky(a) {
    cc11001100_hook("a", a, "function-parameter");
    (function (d, e) {
      d[e] = cc11001100_hook("d[e]", d[e] || function () {
        (d[e].q = cc11001100_hook("d[e].q", d[e].q || [], "assign")).push(arguments);
      }, "assign");
      d[e].t = cc11001100_hook("d[e].t", 1 * new Date(), "assign");
    })(a.win, "_googCsa");
    const b = cc11001100_hook("b", a.B.map(d => ({
        container: cc11001100_hook("container", d, "object-key-init"),
        relatedSearches: cc11001100_hook("relatedSearches", 5, "object-key-init")
      })), "var-init"),
      c = cc11001100_hook("c", {
        pubId: cc11001100_hook("pubId", a.m, "object-key-init"),
        styleId: cc11001100_hook("styleId", "5134551505", "object-key-init"),
        hl: cc11001100_hook("hl", a.language, "object-key-init"),
        fexp: cc11001100_hook("fexp", a.A, "object-key-init"),
        channel: cc11001100_hook("channel", "AutoRsVariant", "object-key-init"),
        resultsPageBaseUrl: cc11001100_hook("resultsPageBaseUrl", "http://google.com", "object-key-init"),
        resultsPageQueryParam: cc11001100_hook("resultsPageQueryParam", "q", "object-key-init"),
        relatedSearchTargeting: cc11001100_hook("relatedSearchTargeting", "content", "object-key-init"),
        relatedSearchResultClickedCallback: cc11001100_hook("relatedSearchResultClickedCallback", a.K.bind(a), "object-key-init"),
        relatedSearchUseResultCallback: cc11001100_hook("relatedSearchUseResultCallback", !0, "object-key-init")
      }, "var-init");
    a.G && (c.adLoadedCallback = cc11001100_hook("c.adLoadedCallback", a.H.bind(a), "assign"));
    a.win._googCsa("relatedsearch", c, b);
  }
  var ly = cc11001100_hook("ly", class {
    constructor(a, b, c, d, e, f, g) {
      this.win = cc11001100_hook("this.win", a, "assign");
      this.B = cc11001100_hook("this.B", b, "assign");
      this.language = cc11001100_hook("this.language", d?.j() || "en", "assign");
      this.I = cc11001100_hook("this.I", d?.v() || "Search results from ${website}", "assign");
      this.C = cc11001100_hook("this.C", e, "assign");
      this.A = cc11001100_hook("this.A", f, "assign");
      this.G = cc11001100_hook("this.G", S(zp), "assign");
      this.m = cc11001100_hook("this.m", c.replace("ca", "partner"), "assign");
      this.v = cc11001100_hook("this.v", new zg(a.document), "assign");
      this.j = cc11001100_hook("this.j", this.v.createElement("IFRAME"), "assign");
      this.l = cc11001100_hook("this.l", new gw(this.j, g.l ? g.j : "9d449ff4a772956c6", "auto-rs-prose", this.m, "AutoRsVariant", a.location.host, this.language, this.I, this.A), "assign");
      a = cc11001100_hook("a", this.j, "assign");
      this.F = cc11001100_hook("this.F", 2 === ph() ? Sx(this.win, a, {
        qd: cc11001100_hook("qd", .95, "object-key-init"),
        Yc: cc11001100_hook("Yc", .95, "object-key-init"),
        zIndex: cc11001100_hook("zIndex", 100001, "object-key-init"),
        Ja: cc11001100_hook("Ja", !0, "object-key-init")
      }) : bx(this.win, a, {
        yb: cc11001100_hook("yb", "min(65vw, 768px)", "object-key-init"),
        ob: cc11001100_hook("ob", "", "object-key-init"),
        xb: cc11001100_hook("xb", !1, "object-key-init"),
        zIndex: cc11001100_hook("zIndex", 100001, "object-key-init"),
        Ja: cc11001100_hook("Ja", !0, "object-key-init")
      }), "assign");
    }
    init() {
      0 !== this.B.length && (this.G || (Fr(1075, () => this.l.init(), this.win), Fr(1076, () => jy(this), this.win)), ky(this), ey(this.C, {
        sts: cc11001100_hook("sts", "ok", "object-key-init")
      }));
    }
    H(a, b) {
      b ? (Fr(1075, () => this.l.init(), this.win), Fr(1076, () => jy(this), this.win)) : ey(this.C, {
        sts: cc11001100_hook("sts", "pfns", "object-key-init")
      });
    }
    K(a, b) {
      fw(this.l, a, b);
      (() => {
        const c = cc11001100_hook("c", new ResizeObserver(async e => {
            this.j.height = cc11001100_hook("this.j.height", 0, "assign");
            await new Promise(f => this.win.requestAnimationFrame(f));
            this.j.height = cc11001100_hook("this.j.height", e[0].target.scrollHeight, "assign");
          }), "var-init"),
          d = cc11001100_hook("d", () => {
            const e = cc11001100_hook("e", this.j.contentDocument?.documentElement, "var-init");
            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3));
          }, "var-init");
        d();
        this.F.show();
      })();
    }
  }, "var-init");
  function my(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", us(a.m.T), "var-init"),
      c = cc11001100_hook("c", a.A.ya(a.B, () => a.remove()), "var-init");
    b.appendChild(c);
    a.v && (b.className = cc11001100_hook("b.className", a.v, "assign"));
    return {
      Ef: cc11001100_hook("Ef", b, "object-key-init"),
      zf: cc11001100_hook("zf", c, "object-key-init")
    };
  }
  class ny {
    constructor(a, b, c, d) {
      this.B = cc11001100_hook("this.B", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
      this.v = cc11001100_hook("this.v", d || null, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
      this.l = cc11001100_hook("this.l", new fm(null), "assign");
    }
    init() {
      const a = cc11001100_hook("a", my(this), "var-init");
      this.j = cc11001100_hook("this.j", a.Ef, "assign");
      Cs(this.m, this.j);
      Q(this.l, a.zf);
    }
    remove() {
      this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
      this.j = cc11001100_hook("this.j", null, "assign");
      Q(this.l, null);
    }
    C() {
      return this.l;
    }
  }
  ;
  function oy(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", hy(a.l, a.j), "var-init");
    b = cc11001100_hook("b", py(a.l, b, a.R, a.A, a.m), "assign");
    const c = cc11001100_hook("c", qy(b, a.l), "var-init"),
      d = cc11001100_hook("d", So(a.j)?.j()?.j() || So(a.j)?.v() || 0, "var-init"),
      e = cc11001100_hook("e", ry(a.j), "var-init");
    D(a.j, Yn, 25)?.j() || Fr(1074, () => new ly(a.l, c, a.v, So(a.j)?.B(), a.m, d, e).init(), a.l);
  }
  async function sy(a) {
    cc11001100_hook("a", a, "function-parameter");
    await new Promise(b => {
      setTimeout(() => {
        b(oy(a));
      });
    });
  }
  var ty = cc11001100_hook("ty", class {
    constructor(a, b, c, d, e, f) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.m = cc11001100_hook("this.m", new fy(a, b, So(this.j) || new mo()), "assign");
      this.v = cc11001100_hook("this.v", d, "assign");
      this.R = cc11001100_hook("this.R", e, "assign");
      this.A = cc11001100_hook("this.A", f, "assign");
    }
  }, "var-init");
  function uy(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", c ? G(c, Un, 5) : [], "assign");
    const d = cc11001100_hook("d", Gu(a.document, c), "var-init"),
      e = cc11001100_hook("e", Hu(), "var-init");
    return b.filter(f => !(e(f) || d(f)));
  }
  function py(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    b = cc11001100_hook("b", Rs(b, a).sort(vy), "assign");
    return 0 == b.length ? (ey(e, {
      sts: cc11001100_hook("sts", "pfno", "object-key-init")
    }), []) : d && (b = cc11001100_hook("b", uy(a, b, c), "assign"), 0 == b.length) ? (ey(e, {
      sts: cc11001100_hook("sts", "pffa", "object-key-init")
    }), []) : [b[Math.floor(b.length / 2)]];
  }
  function vy(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.aa.j - b.aa.j;
  }
  function qy(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", [], "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; d++) {
      const e = cc11001100_hook("e", a[d], "var-init"),
        f = cc11001100_hook("f", "autors-container-" + d, "var-init"),
        g = cc11001100_hook("g", b.document.createElement("div"), "var-init");
      g.setAttribute("id", f);
      new ny(b, e, new gy(g)).init();
      c.push(f);
    }
    return c;
  }
  function ry(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", So(a)?.G() || !1, "var-init");
    a = cc11001100_hook("a", So(a)?.A() || "", "assign");
    return new iy(b, a);
  }
  ;
  var wy = cc11001100_hook("wy", {
      Vh: cc11001100_hook("Vh", "google_ads_preview", "object-key-init"),
      Ei: cc11001100_hook("Ei", "google_mc_lab", "object-key-init"),
      Ui: cc11001100_hook("Ui", "google_anchor_debug", "object-key-init"),
      Ti: cc11001100_hook("Ti", "google_bottom_anchor_debug", "object-key-init"),
      INTERSTITIAL: cc11001100_hook("INTERSTITIAL", "google_ia_debug", "object-key-init"),
      pj: cc11001100_hook("pj", "google_scr_debug", "object-key-init"),
      rj: cc11001100_hook("rj", "google_ia_debug_allow_onclick", "object-key-init"),
      Nj: cc11001100_hook("Nj", "googleads", "object-key-init"),
      Ze: cc11001100_hook("Ze", "google_pedestal_debug", "object-key-init"),
      hk: cc11001100_hook("hk", "google_responsive_slot_preview", "object-key-init"),
      gk: cc11001100_hook("gk", "google_responsive_dummy_ad", "object-key-init"),
      Nh: cc11001100_hook("Nh", "google_audio_sense", "object-key-init"),
      Oh: cc11001100_hook("Oh", "google_auto_gallery", "object-key-init"),
      Qh: cc11001100_hook("Qh", "google_auto_storify_swipeable", "object-key-init"),
      Ph: cc11001100_hook("Ph", "google_auto_storify_scrollable", "object-key-init"),
      Pj: cc11001100_hook("Pj", "google_pga_monetization", "object-key-init")
    }, "var-init"),
    xy = cc11001100_hook("xy", {
      google_bottom_anchor_debug: cc11001100_hook("google_bottom_anchor_debug", 1, "object-key-init"),
      google_anchor_debug: cc11001100_hook("google_anchor_debug", 2, "object-key-init"),
      google_ia_debug: cc11001100_hook("google_ia_debug", 8, "object-key-init"),
      google_scr_debug: cc11001100_hook("google_scr_debug", 9, "object-key-init"),
      googleads: cc11001100_hook("googleads", 2, "object-key-init"),
      google_pedestal_debug: cc11001100_hook("google_pedestal_debug", 30, "object-key-init")
    }, "var-init");
  var yy = cc11001100_hook("yy", {
    INTERSTITIAL: cc11001100_hook("INTERSTITIAL", 1, "object-key-init"),
    BOTTOM_ANCHOR: cc11001100_hook("BOTTOM_ANCHOR", 2, "object-key-init"),
    TOP_ANCHOR: cc11001100_hook("TOP_ANCHOR", 3, "object-key-init"),
    lk: cc11001100_hook("lk", 4, "object-key-init"),
    1: cc11001100_hook(1, "INTERSTITIAL", "object-key-init"),
    2: cc11001100_hook(2, "BOTTOM_ANCHOR", "object-key-init"),
    3: cc11001100_hook(3, "TOP_ANCHOR", "object-key-init"),
    4: cc11001100_hook(4, "SCROLL_TRIGGERED_IMMERSIVE", "object-key-init")
  }, "var-init");
  function zy(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", a.hash, "assign");
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = cc11001100_hook("b", Ay(b), "assign");
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function Ay(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", "", "var-init");
    Zg(a.split("_"), c => {
      b += cc11001100_hook("b", c.substr(0, 2), "assign");
    });
    return b;
  }
  function By() {
    var a = cc11001100_hook("a", t.location, "var-init");
    let b = cc11001100_hook("b", !1, "var-init");
    Zg(wy, c => {
      zy(a, c) && (b = cc11001100_hook("b", !0, "assign"));
    });
    return b;
  }
  function Cy(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    switch (a) {
      case 1:
        return zy(b, "google_ia_debug");
      case 2:
        return zy(b, "google_bottom_anchor_debug");
      case 3:
        return zy(b, "google_anchor_debug") || zy(b, "googleads");
      case 4:
        return zy(b, "google_scr_debug");
    }
  }
  ;
  var Dy = cc11001100_hook("Dy", (a, b, c) => {
    const d = cc11001100_hook("d", [], "var-init");
    D(a, Do, 18) && d.push(2);
    b.R && d.push(0);
    So(a) && 1 == Cd(So(a), 1) && d.push(1);
    D(a, lo, 31) && 1 == Cd(D(a, lo, 31), 1) && d.push(5);
    (D(a, ho, 27) && 1 == Cd(D(a, ho, 27), 1) || zy(c, "google_audio_sense")) && d.push(3);
    D(a, Go, 29) && d.push(4);
    return d;
  }, "var-init");
  function Ey(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", yg(a).createElement("IMG"), "var-init");
    Fy(a, c);
    c.src = cc11001100_hook("c.src", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", "assign");
    M(c, {
      margin: cc11001100_hook("margin", "0px 12px 0px 8px", "object-key-init"),
      width: cc11001100_hook("width", "24px", "object-key-init"),
      height: cc11001100_hook("height", "24px", "object-key-init"),
      cursor: cc11001100_hook("cursor", null == b ? "auto" : "pointer", "object-key-init")
    });
    b && c.addEventListener("click", d => {
      b();
      d.stopPropagation();
    });
    return c;
  }
  function Gy(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.document.createElement("button"), "var-init");
    Fy(b, c);
    M(c, {
      display: cc11001100_hook("display", "inline", "object-key-init"),
      "line-height": cc11001100_hook("line-height", "24px", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
    c.appendChild(b.document.createTextNode(a.l));
    c.addEventListener("click", d => {
      a.m();
      d.stopPropagation();
    });
    return c;
  }
  function Hy(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", yg(b).createElement("IMG"), "var-init");
    d.src = cc11001100_hook("d.src", "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg", "assign");
    d.setAttribute("aria-label", a.v);
    Fy(b, d);
    M(d, {
      margin: cc11001100_hook("margin", "0px 12px 0px 8px", "object-key-init"),
      width: cc11001100_hook("width", "24px", "object-key-init"),
      height: cc11001100_hook("height", "24px", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
    d.addEventListener("click", e => {
      c();
      e.stopPropagation();
    });
    return d;
  }
  function Iy(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.document.createElement("ins"), "var-init");
    Fy(a, b);
    M(b, {
      "float": cc11001100_hook("float", "left", "object-key-init"),
      display: cc11001100_hook("display", "inline-flex", "object-key-init"),
      padding: cc11001100_hook("padding", "8px 0px", "object-key-init"),
      "background-color": cc11001100_hook("background-color", "#FFF", "object-key-init"),
      "border-radius": cc11001100_hook("border-radius", "0px 20px 20px 0px", "object-key-init"),
      "box-shadow": cc11001100_hook("box-shadow", "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)", "object-key-init")
    });
    return b;
  }
  class Jy {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.j = cc11001100_hook("this.j", new fm(!1), "assign");
    }
    ya(a, b, c, d) {
      const e = cc11001100_hook("e", Ey(a, d), "var-init"),
        f = cc11001100_hook("f", Ey(a), "var-init"),
        g = cc11001100_hook("g", Gy(this, a), "var-init"),
        h = cc11001100_hook("h", Hy(this, a, c), "var-init");
      a = cc11001100_hook("a", Iy(a), "assign");
      a.appendChild(e);
      a.appendChild(f);
      a.appendChild(g);
      a.appendChild(h);
      this.j.X(k => {
        M(e, {
          display: cc11001100_hook("display", k ? "none" : "inline", "object-key-init")
        });
        M(f, {
          display: cc11001100_hook("display", k ? "inline" : "none", "object-key-init")
        });
        k ? (M(g, {
          "line-height": cc11001100_hook("line-height", "24px", "object-key-init"),
          "max-width": cc11001100_hook("max-width", "100vw", "object-key-init"),
          opacity: cc11001100_hook("opacity", "1", "object-key-init"),
          transition: cc11001100_hook("transition", "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms", "object-key-init")
        }), M(h, {
          margin: cc11001100_hook("margin", "0px 12px 0px 8px", "object-key-init"),
          opacity: cc11001100_hook("opacity", 1, "object-key-init"),
          width: cc11001100_hook("width", "24px", "object-key-init"),
          transition: cc11001100_hook("transition", "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms", "object-key-init")
        })) : (M(g, {
          "line-height": cc11001100_hook("line-height", "0px", "object-key-init"),
          "max-width": cc11001100_hook("max-width", "0vw", "object-key-init"),
          opacity: cc11001100_hook("opacity", "0", "object-key-init"),
          transition: cc11001100_hook("transition", "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms", "object-key-init")
        }), M(h, {
          margin: cc11001100_hook("margin", "0", "object-key-init"),
          opacity: cc11001100_hook("opacity", "0", "object-key-init"),
          width: cc11001100_hook("width", "0", "object-key-init"),
          transition: cc11001100_hook("transition", "margin 100ms, opacity 50ms, width 100ms", "object-key-init")
        }));
      }, !0);
      return a;
    }
    he() {
      return 40;
    }
    Ce() {
      Q(this.j, !1);
      return 0;
    }
    Ee() {
      Q(this.j, !0);
    }
  }
  function Fy(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    M(b, yw(a));
    M(b, {
      "font-family": cc11001100_hook("font-family", "Arial,sans-serif", "object-key-init"),
      "font-weight": cc11001100_hook("font-weight", "bold", "object-key-init"),
      "font-size": cc11001100_hook("font-size", "14px", "object-key-init"),
      "letter-spacing": cc11001100_hook("letter-spacing", "0.2px", "object-key-init"),
      color: cc11001100_hook("color", "#3C4043", "object-key-init"),
      "user-select": cc11001100_hook("user-select", "none", "object-key-init")
    });
  }
  ;
  function Ky(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.document.createElement("button"), "var-init");
    Ly(a, b, c);
    b = cc11001100_hook("b", {
      width: cc11001100_hook("width", "100%", "object-key-init"),
      "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init"),
      padding: cc11001100_hook("padding", "8px 0px", "object-key-init"),
      "background-color": cc11001100_hook("background-color", a.l, "object-key-init")
    }, "assign");
    a.j && (b["border-top"] = cc11001100_hook("b[\"border-top\"]", a.j, "assign"), b["border-bottom"] = cc11001100_hook("b[\"border-bottom\"]", a.j, "assign"));
    M(c, b);
    c.addEventListener("click", d => {
      a.B();
      d.stopPropagation();
    });
    return c;
  }
  function My(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", b.document.createElement("div"), "var-init");
    M(e, yw(b));
    M(e, {
      "align-items": cc11001100_hook("align-items", "center", "object-key-init"),
      "background-color": cc11001100_hook("background-color", a.l, "object-key-init"),
      display: cc11001100_hook("display", "flex", "object-key-init"),
      "justify-content": cc11001100_hook("justify-content", "center", "object-key-init")
    });
    const f = cc11001100_hook("f", b.document.createElement("span"), "var-init");
    f.appendChild(b.document.createTextNode(d));
    M(f, yw(b));
    M(f, {
      "font-family": cc11001100_hook("font-family", "Arial,sans-serif", "object-key-init"),
      "font-size": cc11001100_hook("font-size", "12px", "object-key-init"),
      padding: cc11001100_hook("padding", "8px 0px", "object-key-init")
    });
    b = cc11001100_hook("b", b.matchMedia("(min-width: 768px)"), "assign");
    d = cc11001100_hook("d", g => {
      g.matches ? (M(e, {
        "flex-direction": cc11001100_hook("flex-direction", "row", "object-key-init")
      }), a.j && M(e, {
        "border-top": cc11001100_hook("border-top", a.j, "object-key-init"),
        "border-bottom": cc11001100_hook("border-bottom", a.j, "object-key-init")
      }), M(f, {
        "margin-left": cc11001100_hook("margin-left", "8px", "object-key-init"),
        "text-align": cc11001100_hook("text-align", "start", "object-key-init")
      }), M(c, {
        border: cc11001100_hook("border", "0", "object-key-init"),
        "margin-right": cc11001100_hook("margin-right", "8px", "object-key-init"),
        width: cc11001100_hook("width", "auto", "object-key-init")
      })) : (M(e, {
        border: cc11001100_hook("border", "0", "object-key-init"),
        "flex-direction": cc11001100_hook("flex-direction", "column", "object-key-init")
      }), M(f, {
        "margin-left": cc11001100_hook("margin-left", "0", "object-key-init"),
        "text-align": cc11001100_hook("text-align", "center", "object-key-init")
      }), M(c, {
        "margin-right": cc11001100_hook("margin-right", "0", "object-key-init"),
        width: cc11001100_hook("width", "100%", "object-key-init")
      }), a.j && M(c, {
        "border-top": cc11001100_hook("border-top", a.j, "object-key-init"),
        "border-bottom": cc11001100_hook("border-bottom", a.j, "object-key-init")
      }));
    }, "assign");
    d(b);
    b.addEventListener("change", d);
    e.appendChild(c);
    e.appendChild(f);
    return e;
  }
  function Ly(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    M(c, yw(b));
    M(c, {
      "font-family": cc11001100_hook("font-family", "Arial,sans-serif", "object-key-init"),
      "font-weight": cc11001100_hook("font-weight", a.C, "object-key-init"),
      "font-size": cc11001100_hook("font-size", "14px", "object-key-init"),
      "letter-spacing": cc11001100_hook("letter-spacing", "0.2px", "object-key-init"),
      color: cc11001100_hook("color", a.G, "object-key-init"),
      "user-select": cc11001100_hook("user-select", "none", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
  }
  class Ny {
    constructor(a, b, c, d, e, f = null, g = null, h = null) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.B = cc11001100_hook("this.B", b, "assign");
      this.G = cc11001100_hook("this.G", c, "assign");
      this.l = cc11001100_hook("this.l", d, "assign");
      this.C = cc11001100_hook("this.C", e, "assign");
      this.v = cc11001100_hook("this.v", f, "assign");
      this.j = cc11001100_hook("this.j", g, "assign");
      this.m = cc11001100_hook("this.m", h, "assign");
    }
    ya(a) {
      const b = cc11001100_hook("b", a.document.createElement("div"), "var-init");
      Ly(this, a, b);
      M(b, {
        display: cc11001100_hook("display", "inline-flex", "object-key-init"),
        padding: cc11001100_hook("padding", "8px 0px", "object-key-init"),
        "background-color": cc11001100_hook("background-color", this.l, "object-key-init")
      });
      if (this.v) {
        var c = cc11001100_hook("c", yg(a).createElement("IMG"), "var-init");
        c.src = cc11001100_hook("c.src", this.v, "assign");
        Ly(this, a, c);
        M(c, {
          margin: cc11001100_hook("margin", "0px 8px 0px 0px", "object-key-init"),
          width: cc11001100_hook("width", "24px", "object-key-init"),
          height: cc11001100_hook("height", "24px", "object-key-init")
        });
      } else c = cc11001100_hook("c", null, "assign");
      c && b.appendChild(c);
      c = cc11001100_hook("c", a.document.createElement("span"), "assign");
      Ly(this, a, c);
      M(c, {
        "line-height": cc11001100_hook("line-height", "24px", "object-key-init")
      });
      c.appendChild(a.document.createTextNode(this.A));
      b.appendChild(c);
      c = cc11001100_hook("c", Ky(this, a), "assign");
      c.appendChild(b);
      return this.m ? My(this, a, c, this.m) : c;
    }
  }
  ;
  var Oy = cc11001100_hook("Oy", (a, b) => {
    b = cc11001100_hook("b", b.filter(c => {
      var d = cc11001100_hook("d", D(c, yn, 4), "var-init");
      return 5 == w(d, 1) && 1 == w(c, 8);
    }), "assign");
    b = cc11001100_hook("b", ls(b, a), "assign");
    a = cc11001100_hook("a", Rs(b, a), "assign");
    a.sort((c, d) => d.aa.j - c.aa.j);
    return a[0] || null;
  }, "var-init");
  function Py(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.G) {
      const b = cc11001100_hook("b", Ol(a.j), "var-init");
      if (b > a.l + 100 || b < a.l - 100) Qy(a), a.l = cc11001100_hook("a.l", Kl(a.j), "assign");
    }
    a.F && a.j.clearTimeout(a.F);
    a.F = cc11001100_hook("a.F", a.j.setTimeout(() => Ry(a), 200), "assign");
  }
  function Ry(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Kl(a.j), "var-init");
    a.l && a.l > b && (a.l = cc11001100_hook("a.l", b, "assign"));
    b = cc11001100_hook("b", Ol(a.j), "assign");
    b >= a.l - 100 && (a.l = cc11001100_hook("a.l", Math.max(a.l, b), "assign"), Sy(a));
  }
  function Ty(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.removeEventListener("scroll", a.I);
  }
  function Qy(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.G = cc11001100_hook("a.G", !1, "assign");
    const b = cc11001100_hook("b", a.A.Ce(), "var-init");
    switch (b) {
      case 0:
        Q(a.v, a.B);
        break;
      case 1:
        a.m && (M(a.m, {
          display: cc11001100_hook("display", "none", "object-key-init")
        }), Q(a.v, null));
        break;
      default:
        throw Error("Unhandled OnHideOutcome: " + b);
    }
  }
  function Sy(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m || (a.m = cc11001100_hook("a.m", Uy(a), "assign"));
    M(a.m, {
      display: cc11001100_hook("display", "block", "object-key-init")
    });
    a.G = cc11001100_hook("a.G", !0, "assign");
    a.A.Ee();
    Q(a.v, a.B);
  }
  function Uy(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", sw(a.j, a.A.he() + 60), "var-init");
    b = cc11001100_hook("b", null == b ? 30 : b + 30, "assign");
    const c = cc11001100_hook("c", a.j.document.createElement("div"), "var-init");
    M(c, yw(a.j));
    M(c, {
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      left: cc11001100_hook("left", "0px", "object-key-init"),
      bottom: cc11001100_hook("bottom", b + "px", "object-key-init"),
      width: cc11001100_hook("width", "100vw", "object-key-init"),
      "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
      "z-index": cc11001100_hook("z-index", 2147483642, "object-key-init"),
      display: cc11001100_hook("display", "none", "object-key-init"),
      "pointer-events": cc11001100_hook("pointer-events", "none", "object-key-init")
    });
    a.B = cc11001100_hook("a.B", a.A.ya(a.j, () => a.remove(), () => {
      Ty(a);
      Qy(a);
    }, () => {
      Ty(a);
      Sy(a);
    }), "assign");
    c.appendChild(a.B);
    a.H && (c.className = cc11001100_hook("c.className", a.H, "assign"));
    a.j.document.body.appendChild(c);
    return c;
  }
  class Vy {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.B = cc11001100_hook("this.B", null, "assign");
      this.v = cc11001100_hook("this.v", new fm(null), "assign");
      this.H = cc11001100_hook("this.H", c || null, "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
      this.G = cc11001100_hook("this.G", !1, "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
      this.F = cc11001100_hook("this.F", null, "assign");
      this.I = cc11001100_hook("this.I", () => Py(this), "assign");
    }
    init() {
      this.j.addEventListener("scroll", this.I);
      this.l = cc11001100_hook("this.l", Kl(this.j), "assign");
      Ry(this);
    }
    remove() {
      this.m && this.m.parentNode && this.m.parentNode.removeChild(this.m);
      this.m = cc11001100_hook("this.m", null, "assign");
      Ty(this);
      Q(this.v, null);
    }
    C() {
      return this.v;
    }
  }
  ;
  function Wy(a) {
    cc11001100_hook("a", a, "function-parameter");
    Q(a.B, 0);
    null != a.m && (a.m.remove(), a.m = cc11001100_hook("a.m", null, "assign"));
    null != a.l && (a.l.remove(), a.l = cc11001100_hook("a.l", null, "assign"));
  }
  function Xy(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l = cc11001100_hook("a.l", new Vy(a.A, a.H, a.G), "assign");
    a.l.init();
    nm(a.v, a.l.C());
    Q(a.B, 2);
  }
  class Yy {
    constructor(a, b, c, d, e) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.F = cc11001100_hook("this.F", b, "assign");
      this.I = cc11001100_hook("this.I", c, "assign");
      this.H = cc11001100_hook("this.H", d, "assign");
      this.G = cc11001100_hook("this.G", e, "assign");
      this.B = cc11001100_hook("this.B", new fm(0), "assign");
      this.v = cc11001100_hook("this.v", new fm(null), "assign");
      this.l = cc11001100_hook("this.l", this.m = cc11001100_hook("this.m", this.j = cc11001100_hook("this.j", null, "assign"), "assign"), "assign");
    }
    init() {
      this.F ? (this.m = cc11001100_hook("this.m", new ny(this.A, this.F, this.I, this.G), "assign"), this.m.init(), nm(this.v, this.m.C()), Q(this.B, 1), null == this.j && (this.j = cc11001100_hook("this.j", new Sm(this.A), "assign"), this.j.init(2E3)), this.j.addListener(() => {
        Wy(this);
        Xy(this);
      })) : Xy(this);
    }
    remove() {
      Wy(this);
      this.j && (this.j.xa(), this.j = cc11001100_hook("this.j", null, "assign"));
    }
    C() {
      return this.v;
    }
  }
  ;
  var Zy = cc11001100_hook("Zy", (a, b, c, d, e) => {
    a = cc11001100_hook("a", new Yy(a, Oy(a, e), new Ny(b, d, "#FFF", "#4A4A4A", "normal"), new Jy(b, c, d), "google-dns-link-placeholder"), "assign");
    a.init();
    return a;
  }, "var-init");
  var $y = cc11001100_hook("$y", a => a.googlefc = cc11001100_hook("a.googlefc", a.googlefc || {}, "assign"), "var-init"),
    az = cc11001100_hook("az", a => {
      a = cc11001100_hook("a", a.googlefc = cc11001100_hook("a.googlefc", a.googlefc || {}, "assign"), "assign");
      return a.ccpa = cc11001100_hook("a.ccpa", a.ccpa || {}, "assign");
    }, "var-init");
  function bz(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", az(a.j), "var-init");
    if (cz(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
      var c = cc11001100_hook("c", b.getLocalizedDnsText(), "var-init");
      b = cc11001100_hook("b", b.getLocalizedDnsCollapseText(), "assign");
      null != c && null != b && (a.l = cc11001100_hook("a.l", Zy(a.j, c, b, () => dz(a), a.v), "assign"));
    }
  }
  function ez(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", $y(a.j), "var-init");
    az(a.j).overrideDnsLink = cc11001100_hook("az(a.j).overrideDnsLink", !0, "assign");
    b.callbackQueue = cc11001100_hook("b.callbackQueue", b.callbackQueue || [], "assign");
    b.callbackQueue.push({
      INITIAL_CCPA_DATA_READY: cc11001100_hook("INITIAL_CCPA_DATA_READY", () => bz(a), "object-key-init")
    });
  }
  function dz(a) {
    cc11001100_hook("a", a, "function-parameter");
    Hw(a.m);
    az(a.j).openConfirmationDialog(b => {
      b && a.l && (a.l.remove(), a.l = cc11001100_hook("a.l", null, "assign"));
      Iw(a.m);
    });
  }
  class fz {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.m = cc11001100_hook("this.m", Cw(b, 2147483643), "assign");
      this.v = cc11001100_hook("this.v", c, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
    }
  }
  function cz(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    switch (a) {
      case b.CCPA_DOES_NOT_APPLY:
      case b.OPTED_OUT:
        return !1;
      case b.NOT_OPTED_OUT:
        return !0;
      default:
        return !0;
    }
  }
  ;
  function gz(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.document.createElement("ins"), "var-init");
    hz(a, b);
    M(b, {
      display: cc11001100_hook("display", "flex", "object-key-init"),
      padding: cc11001100_hook("padding", "8px 0px", "object-key-init"),
      width: cc11001100_hook("width", "100%", "object-key-init")
    });
    return b;
  }
  function iz(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", yg(a).createElement("IMG"), "var-init");
    e.src = cc11001100_hook("e.src", b, "assign");
    d && e.setAttribute("aria-label", d);
    hz(a, e);
    M(e, {
      margin: cc11001100_hook("margin", "0px 12px 0px 8px", "object-key-init"),
      width: cc11001100_hook("width", "24px", "object-key-init"),
      height: cc11001100_hook("height", "24px", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
    e.addEventListener("click", f => {
      c();
      f.stopPropagation();
    });
    return e;
  }
  function jz(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.document.createElement("span"), "var-init");
    hz(b, c);
    M(c, {
      "line-height": cc11001100_hook("line-height", "24px", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
    c.appendChild(b.document.createTextNode(a.v));
    c.addEventListener("click", d => {
      a.l();
      d.stopPropagation();
    });
    return c;
  }
  function kz(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.document.createElement("span"), "var-init");
    c.appendChild(b.document.createTextNode(a.m));
    M(c, yw(b));
    M(c, {
      "border-top": cc11001100_hook("border-top", "11px solid #ECEDED", "object-key-init"),
      "font-family": cc11001100_hook("font-family", "Arial,sans-serif", "object-key-init"),
      "font-size": cc11001100_hook("font-size", "12px", "object-key-init"),
      "line-height": cc11001100_hook("line-height", "1414px", "object-key-init"),
      padding: cc11001100_hook("padding", "8px 32px", "object-key-init"),
      "text-align": cc11001100_hook("text-align", "center", "object-key-init")
    });
    return c;
  }
  function lz(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.document.createElement("div"), "var-init");
    M(b, yw(a));
    M(b, {
      "align-items": cc11001100_hook("align-items", "flex-start", "object-key-init"),
      "background-color": cc11001100_hook("background-color", "#FFF", "object-key-init"),
      "border-radius": cc11001100_hook("border-radius", "0px 20px 20px 0px", "object-key-init"),
      "box-shadow": cc11001100_hook("box-shadow", "0px 1px 3px 1px rgba(60,64,67,0.5)", "object-key-init"),
      display: cc11001100_hook("display", "inline-flex", "object-key-init"),
      "flex-direction": cc11001100_hook("flex-direction", "column", "object-key-init"),
      "float": cc11001100_hook("float", "left", "object-key-init")
    });
    return b;
  }
  class mz {
    constructor(a, b, c, d) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.l = cc11001100_hook("this.l", d, "assign");
      this.j = cc11001100_hook("this.j", new fm(!1), "assign");
    }
    ya(a, b, c, d) {
      c = cc11001100_hook("c", gz(a), "assign");
      const e = cc11001100_hook("e", iz(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d), "var-init"),
        f = cc11001100_hook("f", iz(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l), "var-init"),
        g = cc11001100_hook("g", jz(this, a), "var-init"),
        h = cc11001100_hook("h", iz(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A), "var-init");
      M(h, {
        "margin-left": cc11001100_hook("margin-left", "auto", "object-key-init")
      });
      c.appendChild(e);
      c.appendChild(f);
      c.appendChild(g);
      c.appendChild(h);
      const k = cc11001100_hook("k", kz(this, a), "var-init");
      a = cc11001100_hook("a", lz(a), "assign");
      a.appendChild(c);
      a.appendChild(k);
      this.j.X(l => {
        M(e, {
          display: cc11001100_hook("display", l ? "none" : "inline", "object-key-init")
        });
        M(f, {
          display: cc11001100_hook("display", l ? "inline" : "none", "object-key-init")
        });
        l ? (M(g, {
          "line-height": cc11001100_hook("line-height", "24px", "object-key-init"),
          "max-width": cc11001100_hook("max-width", "100vw", "object-key-init"),
          opacity: cc11001100_hook("opacity", "1", "object-key-init"),
          transition: cc11001100_hook("transition", "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms", "object-key-init")
        }), M(h, {
          "margin-right": cc11001100_hook("margin-right", "12px", "object-key-init"),
          opacity: cc11001100_hook("opacity", 1, "object-key-init"),
          width: cc11001100_hook("width", "24px", "object-key-init"),
          transition: cc11001100_hook("transition", "margin 50ms, opacity 50ms 50ms, width 50ms", "object-key-init")
        }), M(k, {
          "border-width": cc11001100_hook("border-width", "1px", "object-key-init"),
          "line-height": cc11001100_hook("line-height", "14px", "object-key-init"),
          "max-width": cc11001100_hook("max-width", "100vw", "object-key-init"),
          opacity: cc11001100_hook("opacity", "1", "object-key-init"),
          padding: cc11001100_hook("padding", "8px 32px", "object-key-init"),
          transition: cc11001100_hook("transition", "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms", "object-key-init")
        })) : (M(g, {
          "line-height": cc11001100_hook("line-height", "0px", "object-key-init"),
          "max-width": cc11001100_hook("max-width", "0vw", "object-key-init"),
          opacity: cc11001100_hook("opacity", "0", "object-key-init"),
          transition: cc11001100_hook("transition", "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms", "object-key-init")
        }), M(h, {
          "margin-right": cc11001100_hook("margin-right", "0", "object-key-init"),
          opacity: cc11001100_hook("opacity", "0", "object-key-init"),
          width: cc11001100_hook("width", "0", "object-key-init"),
          transition: cc11001100_hook("transition", "margin 50ms 50ms, opacity 50ms, width 50ms 50ms", "object-key-init")
        }), M(k, {
          "border-width": cc11001100_hook("border-width", "0px", "object-key-init"),
          "line-height": cc11001100_hook("line-height", "0px", "object-key-init"),
          "max-width": cc11001100_hook("max-width", "0vw", "object-key-init"),
          opacity: cc11001100_hook("opacity", "0", "object-key-init"),
          padding: cc11001100_hook("padding", "0", "object-key-init"),
          transition: cc11001100_hook("transition", "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms", "object-key-init")
        }));
      }, !0);
      return a;
    }
    he() {
      return 71;
    }
    Ce() {
      Q(this.j, !1);
      return 0;
    }
    Ee() {
      Q(this.j, !0);
    }
  }
  function hz(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    M(b, yw(a));
    M(b, {
      "font-family": cc11001100_hook("font-family", "Arial,sans-serif", "object-key-init"),
      "font-weight": cc11001100_hook("font-weight", "bold", "object-key-init"),
      "font-size": cc11001100_hook("font-size", "14px", "object-key-init"),
      "letter-spacing": cc11001100_hook("letter-spacing", "0.2px", "object-key-init"),
      color: cc11001100_hook("color", "#1A73E8", "object-key-init"),
      "user-select": cc11001100_hook("user-select", "none", "object-key-init")
    });
  }
  ;
  function nz(a) {
    cc11001100_hook("a", a, "function-parameter");
    oz(a.l, b => {
      var c = cc11001100_hook("c", a.v, "var-init"),
        d = cc11001100_hook("d", b.Cg, "var-init"),
        e = cc11001100_hook("e", b.yf, "var-init"),
        f = cc11001100_hook("f", b.lf, "var-init");
      b = cc11001100_hook("b", b.showRevocationMessage, "assign");
      new Yy(c, Oy(c, a.m), new Ny(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new mz(d, e, f, b), "google-revocation-link-placeholder").init();
    }, () => {
      Iw(a.j);
    });
  }
  class pz {
    constructor(a, b, c, d) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.j = cc11001100_hook("this.j", Cw(b, 2147483643), "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.l = cc11001100_hook("this.l", d, "assign");
    }
  }
  ;
  var qz = cc11001100_hook("qz", a => {
    if (!a || null == w(a, 1)) return !1;
    a = cc11001100_hook("a", w(a, 1), "assign");
    switch (a) {
      case 1:
        return !0;
      case 2:
        return !1;
      default:
        throw Error("Unhandled AutoConsentUiStatus: " + a);
    }
  }, "var-init");
  function rz(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
      var b = cc11001100_hook("b", !1, "var-init");
      qz(a.j) && (b = cc11001100_hook("b", new pz(a.l, a.A, a.v || G(a.j, Bo, 4), a.m), "assign"), Hw(b.j), nz(b), b = cc11001100_hook("b", !0, "assign"));
      var c;
      a: if ((c = cc11001100_hook("c", a.j, "assign")) && null != w(c, 3)) switch (c = cc11001100_hook("c", w(c, 3), "assign"), c) {
        case 1:
          c = cc11001100_hook("c", !0, "assign");
          break a;
        case 2:
          c = cc11001100_hook("c", !1, "assign");
          break a;
        default:
          throw Error("Unhandled AutoCcpaUiStatus: " + c);
      } else c = cc11001100_hook("c", !1, "assign");
      c && (ez(new fz(a.l, a.A, a.v || G(a.j, Bo, 4))), b = cc11001100_hook("b", !0, "assign"));
      if (c = cc11001100_hook("c", (c = cc11001100_hook("c", a.j, "assign")) ? !0 === y(c, 5) : !1, "assign")) c = cc11001100_hook("c", ((c = cc11001100_hook("c", a.j, "assign")) ? !0 === y(c, 6) : !1) || S(Mp), "assign");
      c && (b = cc11001100_hook("b", !0, "assign"));
      b && (a.m.start(), a.l.adsbygoogle_ama_fc_has_run = cc11001100_hook("a.l.adsbygoogle_ama_fc_has_run", !0, "assign"));
    }
  }
  class sz {
    constructor(a, b, c, d, e) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.A = cc11001100_hook("this.A", d, "assign");
      this.v = cc11001100_hook("this.v", e || null, "assign");
    }
  }
  ;
  var tz = cc11001100_hook("tz", (a, b, c, d, e, f) => {
      try {
        const g = cc11001100_hook("g", a.j, "var-init"),
          h = cc11001100_hook("h", Wg("SCRIPT", g), "var-init");
        h.async = cc11001100_hook("h.async", !0, "assign");
        Gf(h, b);
        g.head.appendChild(h);
        h.addEventListener("load", () => {
          e();
          d && g.head.removeChild(h);
        });
        h.addEventListener("error", () => {
          0 < c ? tz(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
        });
      } catch (g) {
        f();
      }
    }, "var-init"),
    uz = cc11001100_hook("uz", (a, b, c = () => {}, d = () => {}) => {
      tz(yg(a), b, 0, !1, c, d);
    }, "var-init");
  var vz = cc11001100_hook("vz", (a = null) => {
    a = cc11001100_hook("a", a || t, "assign");
    return a.googlefc || (a.googlefc = cc11001100_hook("a.googlefc", {}, "assign"));
  }, "var-init");
  te(wl).map(a => Number(a));
  te(xl).map(a => Number(a));
  const wz = cc11001100_hook("wz", window.URL, "var-init");
  var xz = cc11001100_hook("xz", a => {
      var b = cc11001100_hook("b", new wz(a.location.href).searchParams, "var-init");
      a = cc11001100_hook("a", b.get("fcconsent"), "assign");
      b = cc11001100_hook("b", b.get("fc"), "assign");
      return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null;
    }, "var-init"),
    yz = cc11001100_hook("yz", a => {
      a = cc11001100_hook("a", new wz(a.location.href).searchParams.get("fctype"), "assign");
      return -1 !== ["ab", "gdpr", "consent", "ccpa", "monetization"].indexOf(a) ? a : null;
    }, "var-init");
  var zz = cc11001100_hook("zz", (a, b) => {
    const c = cc11001100_hook("c", a.document, "var-init"),
      d = cc11001100_hook("d", () => {
        if (!a.frames[b]) if (c.body) {
          const e = cc11001100_hook("e", Wg("IFRAME", c), "var-init");
          e.style.display = cc11001100_hook("e.style.display", "none", "assign");
          e.style.width = cc11001100_hook("e.style.width", "0px", "assign");
          e.style.height = cc11001100_hook("e.style.height", "0px", "assign");
          e.style.border = cc11001100_hook("e.style.border", "none", "assign");
          e.style.zIndex = cc11001100_hook("e.style.zIndex", "-1000", "assign");
          e.style.left = cc11001100_hook("e.style.left", "-1000px", "assign");
          e.style.top = cc11001100_hook("e.style.top", "-1000px", "assign");
          e.name = cc11001100_hook("e.name", b, "assign");
          c.body.appendChild(e);
        } else a.setTimeout(d, 5);
      }, "var-init");
    d();
  }, "var-init");
  const Az = cc11001100_hook("Az", a => {
    void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = cc11001100_hook("a.addtlConsent", void 0, "assign"));
    void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = cc11001100_hook("a.gdprApplies", void 0, "assign"));
    return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
  }, "var-init");
  function Bz(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = cc11001100_hook("a.internalErrorState", Az(a), "assign"));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Ai({
      e: cc11001100_hook("e", String(a.internalErrorState), "object-key-init")
    }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
  }
  function Cz(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Bz(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? Dz(a, "1") : !0 : !1;
  }
  function Dz(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a: {
      if (a.publisher && a.publisher.restrictions) {
        var c = cc11001100_hook("c", a.publisher.restrictions[b], "var-init");
        if (void 0 !== c) {
          c = cc11001100_hook("c", c["755"], "assign");
          break a;
        }
      }
      c = cc11001100_hook("c", void 0, "assign");
    }
    if (0 === c) return !1;
    a.purpose && a.vendor ? (c = cc11001100_hook("c", a.vendor.consents, "assign"), (c = cc11001100_hook("c", !(!c || !c["755"]), "assign")) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = cc11001100_hook("b", !0, "assign") : (c && (a = cc11001100_hook("a", a.purpose.consents, "assign"), c = cc11001100_hook("c", !(!a || !a[b]), "assign")), b = cc11001100_hook("b", c, "assign"))) : b = cc11001100_hook("b", !0, "assign");
    return b;
  }
  function Ez(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", ["3", "4"], "var-init");
    return !1 === a.gdprApplies ? !0 : b.every(c => Dz(a, c));
  }
  function Fz(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.l) return a.l;
    a.l = cc11001100_hook("a.l", oh(a.m, "__tcfapiLocator"), "assign");
    return a.l;
  }
  function Gz(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "function" === typeof a.m.__tcfapi || null != Fz(a);
  }
  function Hz(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    c || (c = cc11001100_hook("c", () => {}, "assign"));
    if ("function" === typeof a.m.__tcfapi) a = cc11001100_hook("a", a.m.__tcfapi, "assign"), a(b, 2, c, d);else if (Fz(a)) {
      Iz(a);
      const e = cc11001100_hook("e", ++a.H, "var-init");
      a.C[e] = cc11001100_hook("a.C[e]", c, "assign");
      a.l && a.l.postMessage({
        __tcfapiCall: {
          command: cc11001100_hook("command", b, "object-key-init"),
          version: cc11001100_hook("version", 2, "object-key-init"),
          callId: cc11001100_hook("callId", e, "object-key-init"),
          parameter: cc11001100_hook("parameter", d, "object-key-init")
        }
      }, "*");
    } else c({}, !1);
  }
  function Jz(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", {
      internalErrorState: cc11001100_hook("internalErrorState", 0, "object-key-init"),
      internalBlockOnErrors: cc11001100_hook("internalBlockOnErrors", a.A, "object-key-init")
    }, "var-init");
    const d = cc11001100_hook("d", ie(() => b(c)), "var-init");
    let e = cc11001100_hook("e", 0, "var-init");
    -1 !== a.F && (e = cc11001100_hook("e", setTimeout(() => {
      e = cc11001100_hook("e", 0, "assign");
      c.tcString = cc11001100_hook("c.tcString", "tcunavailable", "assign");
      c.internalErrorState = cc11001100_hook("c.internalErrorState", 1, "assign");
      d();
    }, a.F), "assign"));
    Hz(a, "addEventListener", f => {
      f && (c = cc11001100_hook("c", f, "assign"), c.internalErrorState = cc11001100_hook("c.internalErrorState", Az(c), "assign"), c.internalBlockOnErrors = cc11001100_hook("c.internalBlockOnErrors", a.A, "assign"), Bz(c) ? (0 != c.internalErrorState && (c.tcString = cc11001100_hook("c.tcString", "tcunavailable", "assign")), Hz(a, "removeEventListener", null, c.listenerId), (f = cc11001100_hook("f", e, "assign")) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = cc11001100_hook("f", e, "assign")) && clearTimeout(f));
    });
  }
  function Iz(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.v || (a.v = cc11001100_hook("a.v", b => {
      try {
        var c = cc11001100_hook("c", ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn, "var-init");
        a.C[c.callId](c.returnValue, c.success);
      } catch (d) {}
    }, "assign"), oe(a.m, "message", a.v));
  }
  class Kz extends Ik {
    constructor(a, b = {}) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
      this.C = cc11001100_hook("this.C", {}, "assign");
      this.H = cc11001100_hook("this.H", 0, "assign");
      this.F = cc11001100_hook("this.F", b.Kg ?? 500, "assign");
      this.A = cc11001100_hook("this.A", b.tf ?? !1, "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
    }
    j() {
      this.C = cc11001100_hook("this.C", {}, "assign");
      this.v && (pe(this.m, "message", this.v), delete this.v);
      delete this.C;
      delete this.m;
      delete this.l;
      super.j();
    }
    addEventListener(a) {
      let b = cc11001100_hook("b", {
        internalBlockOnErrors: cc11001100_hook("internalBlockOnErrors", this.A, "object-key-init")
      }, "var-init");
      const c = cc11001100_hook("c", ie(() => a(b)), "var-init");
      let d = cc11001100_hook("d", 0, "var-init");
      -1 !== this.F && (d = cc11001100_hook("d", setTimeout(() => {
        b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign");
        b.internalErrorState = cc11001100_hook("b.internalErrorState", 1, "assign");
        c();
      }, this.F), "assign"));
      const e = cc11001100_hook("e", (f, g) => {
        clearTimeout(d);
        f ? (b = cc11001100_hook("b", f, "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", Az(b), "assign"), b.internalBlockOnErrors = cc11001100_hook("b.internalBlockOnErrors", this.A, "assign"), g && 0 === b.internalErrorState || (b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), g || (b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign")))) : (b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign"));
        a(b);
      }, "var-init");
      try {
        Hz(this, "addEventListener", e);
      } catch (f) {
        b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign"), d && (clearTimeout(d), d = cc11001100_hook("d", 0, "assign")), c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && Hz(this, "removeEventListener", null, a.listenerId);
    }
  }
  ;
  function oz(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", vz(a.j), "var-init");
    d.callbackQueue = cc11001100_hook("d.callbackQueue", d.callbackQueue || [], "assign");
    d.callbackQueue.push({
      CONSENT_DATA_READY: cc11001100_hook("CONSENT_DATA_READY", () => {
        const e = cc11001100_hook("e", vz(a.j), "var-init"),
          f = cc11001100_hook("f", new Kz(a.j), "var-init");
        Gz(f) && Jz(f, g => {
          300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
            Cg: cc11001100_hook("Cg", e.getDefaultConsentRevocationText(), "object-key-init"),
            yf: cc11001100_hook("yf", e.getDefaultConsentRevocationCloseText(), "object-key-init"),
            lf: cc11001100_hook("lf", e.getDefaultConsentRevocationAttestationText(), "object-key-init"),
            showRevocationMessage: cc11001100_hook("showRevocationMessage", () => e.showRevocationMessage(), "object-key-init")
          });
        });
        c();
      }, "object-key-init")
    });
  }
  function Lz(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", xz(a.j), "var-init");
    const c = cc11001100_hook("c", yz(a.j), "var-init");
    b = cc11001100_hook("b", Mz(a.l, {
      fc: cc11001100_hook("fc", b, "object-key-init"),
      fctype: cc11001100_hook("fctype", c, "object-key-init")
    }), "assign");
    uz(a.j, b, () => {}, () => {});
  }
  function Mz(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", {
      ...b,
      ers: 2
    }, "assign");
    return Fe(Ke(be("https://fundingchoicesmessages.google.com/i/%{id}"), {
      id: cc11001100_hook("id", a, "object-key-init")
    }), b);
  }
  class Nz {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    start() {
      if (this.j === this.j.top) try {
        zz(this.j, "googlefcPresent"), Lz(this);
      } catch (a) {}
    }
  }
  ;
  var Oz = cc11001100_hook("Oz", (a, b, c) => {
    const d = cc11001100_hook("d", D(a, vo, 6), "var-init");
    if (!d) return [];
    c = cc11001100_hook("c", Uu(d.j(), c), "assign");
    return (a = cc11001100_hook("a", a.j(), "assign")) && y(a, 11) ? c.map(e => Os(e)) : c.map(e => {
      const f = cc11001100_hook("f", xn(), "var-init");
      return new ms(new Is(e.Gc, e.Hc), new Gs(), new Hs(b), !0, 2, [], f, e.l, null, null, null, e.m, e.j);
    });
  }, "var-init");
  var Pz = cc11001100_hook("Pz", class extends L {
    constructor(a) {
      super(a);
    }
    getHeight() {
      return vd(this, 2);
    }
  }, "var-init");
  function Qz(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  function Rz(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return td(a, 2, b);
  }
  var Tz = cc11001100_hook("Tz", class extends L {
      constructor(a) {
        super(a, -1, Sz);
      }
    }, "var-init"),
    Sz = cc11001100_hook("Sz", [2], "var-init");
  var Vz = cc11001100_hook("Vz", class extends L {
      constructor() {
        super(void 0, -1, Uz);
      }
    }, "var-init"),
    Uz = cc11001100_hook("Uz", [5], "var-init");
  var Wz = cc11001100_hook("Wz", class extends L {
      constructor() {
        super();
      }
    }, "var-init"),
    Xz = cc11001100_hook("Xz", [1, 2], "var-init");
  function Yz(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new An(["pedestal_container"], {
      google_reactive_ad_format: cc11001100_hook("google_reactive_ad_format", 30, "object-key-init"),
      google_phwr: cc11001100_hook("google_phwr", 2.189, "object-key-init"),
      google_ad_width: cc11001100_hook("google_ad_width", Math.floor(a), "object-key-init"),
      google_ad_format: cc11001100_hook("google_ad_format", "autorelaxed", "object-key-init"),
      google_full_width_responsive: cc11001100_hook("google_full_width_responsive", !0, "object-key-init"),
      google_enable_content_recommendations: cc11001100_hook("google_enable_content_recommendations", !0, "object-key-init"),
      google_content_recommendation_ui_type: cc11001100_hook("google_content_recommendation_ui_type", "pedestal", "object-key-init")
    });
  }
  class Zz {
    j(a) {
      return Yz(Math.floor(a.l));
    }
  }
  ;
  function $z(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", ["Could not locate a suitable placement in the content below the fold."], "var-init");
    a = cc11001100_hook("a", Dl(a)?.tagSpecificState[1], "assign");
    (a = cc11001100_hook("a", null == a ? null : 4 === a.debugCard?.getAdType() ? a.debugCard : null, "assign")) && a.displayAdLoadedContent(b);
  }
  ;
  var aA = cc11001100_hook("aA", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  function bA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b) {
      var c = cc11001100_hook("c", b.adClient, "var-init");
      if ("string" === typeof c && c) {
        a.Ic = cc11001100_hook("a.Ic", c, "assign");
        a.m = cc11001100_hook("a.m", !!b.adTest, "assign");
        c = cc11001100_hook("c", b.pubVars, "assign");
        ua(c) && (a.D = cc11001100_hook("a.D", c, "assign"));
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
          a.B = cc11001100_hook("a.B", {}, "assign");
          for (d of b.fillMessage) a.B[d.key] = cc11001100_hook("a.B[d.key]", d.value, "assign");
        }
        a.v = cc11001100_hook("a.v", b.adWidth, "assign");
        a.l = cc11001100_hook("a.l", b.adHeight, "assign");
        gi(a.v) && gi(a.l) || bl("rctnosize", b);
        var d = cc11001100_hook("d", !0, "var-init");
      } else d = cc11001100_hook("d", !1, "assign");
    } else d = cc11001100_hook("d", !1, "assign");
    return d && a.G(b);
  }
  class cA {
    constructor() {
      this.B = cc11001100_hook("this.B", this.D = cc11001100_hook("this.D", this.m = cc11001100_hook("this.m", this.Ic = cc11001100_hook("this.Ic", null, "assign"), "assign"), "assign"), "assign");
      this.l = cc11001100_hook("this.l", this.v = cc11001100_hook("this.v", 0, "assign"), "assign");
    }
    G() {
      return !0;
    }
  }
  ;
  function dA(a, b = []) {
    cc11001100_hook("a", a, "function-parameter");
    const c = cc11001100_hook("c", Date.now(), "var-init");
    return Bb(b, d => c - d < 1E3 * a);
  }
  function eA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      const c = cc11001100_hook("c", a.getItem("__lsv__"), "var-init");
      if (!c) return [];
      let d;
      try {
        d = cc11001100_hook("d", JSON.parse(c), "assign");
      } catch (e) {}
      if (!Array.isArray(d) || Eb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
      d = cc11001100_hook("d", dA(b, d), "assign");
      d.length || a?.removeItem("__lsv__");
      return d;
    } catch (c) {
      return null;
    }
  }
  function fA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c;
    if (!(c = cc11001100_hook("c", 0 >= b, "assign")) && !(c = cc11001100_hook("c", null == a, "assign"))) {
      try {
        a.setItem("__storage_test__", "__storage_test__");
        const e = cc11001100_hook("e", a.getItem("__storage_test__"), "var-init");
        a.removeItem("__storage_test__");
        var d = cc11001100_hook("d", "__storage_test__" === e, "var-init");
      } catch (e) {
        d = cc11001100_hook("d", !1, "assign");
      }
      c = cc11001100_hook("c", !d, "assign");
    }
    return c ? null : eA(a, b);
  }
  ;
  var gA = cc11001100_hook("gA", (a, b, c) => {
    let d = cc11001100_hook("d", 0, "var-init");
    try {
      d |= cc11001100_hook("d", a != a.top ? 512 : 0, "assign");
      d |= cc11001100_hook("d", Il(a), "assign");
      d |= cc11001100_hook("d", Hl(a), "assign");
      d |= cc11001100_hook("d", a.innerHeight >= a.innerWidth ? 0 : 8, "assign");
      d |= cc11001100_hook("d", a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0, "assign");
      var e;
      if (e = cc11001100_hook("e", b, "assign")) {
        var f = cc11001100_hook("f", fA(c, 3600), "var-init");
        e = cc11001100_hook("e", !(f && 1 > f.length), "assign");
      }
      e && (d |= cc11001100_hook("d", 134217728, "assign"));
      S(vq) && (d |= cc11001100_hook("d", 128, "assign"));
    } catch (g) {
      d |= cc11001100_hook("d", 32, "assign");
    }
    return d;
  }, "var-init");
  class hA extends cA {
    constructor() {
      super();
      this.A = cc11001100_hook("this.A", !1, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
      this.C = cc11001100_hook("this.C", !1, "assign");
    }
    G(a) {
      this.A = cc11001100_hook("this.A", !!a.enableAma, "assign");
      var b = cc11001100_hook("b", a.amaConfig, "var-init");
      if (b) try {
        var c = cc11001100_hook("c", Uo(b), "var-init");
      } catch (d) {
        c = cc11001100_hook("c", null, "assign");
      } else c = cc11001100_hook("c", null, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      Array.isArray(a.fillMessage) && (this.C = cc11001100_hook("this.C", !0, "assign"));
      return !0;
    }
  }
  ;
  const iA = cc11001100_hook("iA", {}, "var-init");
  function jA(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    let d = cc11001100_hook("d", kA(a, c, b), "var-init");
    if (!d) return !0;
    let e = cc11001100_hook("e", -1, "var-init");
    const f = cc11001100_hook("f", c.B.l, "var-init");
    for (; d.Gb && d.Gb.length;) {
      const h = cc11001100_hook("h", d.Gb.shift(), "var-init");
      var g = cc11001100_hook("g", vs(h.T), "var-init");
      const k = cc11001100_hook("k", h.aa.j, "var-init"),
        l = cc11001100_hook("l", !!c.m.Ad || !!c.m.Fd || c.Da() || !!c.m.Yd || k > e, "var-init");
      g = cc11001100_hook("g", !g || g <= d.Vb, "assign");
      if (l && g && lA(c, h, {
        tc: cc11001100_hook("tc", d.Vb, "object-key-init")
      })) {
        e = cc11001100_hook("e", k, "assign");
        if (d.Tb.j.length + 1 >= f) return !0;
        d = cc11001100_hook("d", kA(a, c, b), "assign");
        if (!d) return !0;
      }
    }
    return c.v;
  }
  const kA = cc11001100_hook("kA", (a, b, c) => {
    var d = cc11001100_hook("d", b.B.l, "var-init"),
      e = cc11001100_hook("e", b.B.v, "var-init"),
      f = cc11001100_hook("f", b.B, "var-init");
    f = cc11001100_hook("f", At(b.P(), f.j ? f.j.pb : void 0, d), "assign");
    if (f.j.length >= d) return null;
    e ? (d = cc11001100_hook("d", f.l || (f.l = cc11001100_hook("f.l", P(f.m).scrollHeight || null, "assign")), "assign"), e = cc11001100_hook("e", !d || 0 > d ? -1 : f.l * e - du(f), "assign")) : e = cc11001100_hook("e", void 0, "assign");
    a = cc11001100_hook("a", null == e || 50 <= e ? mA(b, f, {
      types: cc11001100_hook("types", a, "object-key-init")
    }, c) : null, "assign");
    return {
      Tb: cc11001100_hook("Tb", f, "object-key-init"),
      Vb: cc11001100_hook("Vb", e, "object-key-init"),
      Gb: cc11001100_hook("Gb", a, "object-key-init")
    };
  }, "var-init");
  iA[2] = cc11001100_hook("iA[2]", Ca(function (a, b) {
    a = cc11001100_hook("a", mA(b, At(b.P()), {
      types: cc11001100_hook("types", a, "object-key-init"),
      Sa: cc11001100_hook("Sa", jt(b.P()), "object-key-init")
    }, 2), "assign");
    if (0 == a.length) return !0;
    for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (lA(b, a[c])) return !0;
    return b.v ? (b.A.push(11), !0) : !1;
  }, [0]), "assign");
  iA[5] = cc11001100_hook("iA[5]", Ca(jA, [0], 5), "assign");
  iA[10] = cc11001100_hook("iA[10]", Ca(function (a, b) {
    a = cc11001100_hook("a", [], "assign");
    const c = cc11001100_hook("c", b.ka, "var-init");
    c.includes(3) && a.push(2);
    c.includes(1) && a.push(0);
    c.includes(2) && !S(rp) && a.push(1);
    return jA(a, 10, b);
  }, 10), "assign");
  iA[3] = cc11001100_hook("iA[3]", function (a) {
    if (!a.v) return !1;
    var b = cc11001100_hook("b", mA(a, At(a.P()), {
      types: cc11001100_hook("types", [0], "object-key-init"),
      Sa: cc11001100_hook("Sa", jt(a.P()), "object-key-init")
    }, 3), "var-init");
    if (0 == b.length) return !0;
    for (var c = cc11001100_hook("c", b.length - 1, "var-init"); 0 <= c; c--) if (lA(a, b[c])) return !0;
    a.A.push(11);
    return !0;
  }, "assign");
  const nA = cc11001100_hook("nA", a => {
      var b;
      a.m.Ue ? b = cc11001100_hook("b", new ft(0, null, [], 3, null), "assign") : b = cc11001100_hook("b", jt(a.P()), "assign");
      return {
        types: cc11001100_hook("types", [0], "object-key-init"),
        Sa: cc11001100_hook("Sa", b, "object-key-init")
      };
    }, "var-init"),
    pA = cc11001100_hook("pA", a => {
      const b = cc11001100_hook("b", a.P().document.body.getBoundingClientRect().width, "var-init");
      oA(a, Yz(b));
    }, "var-init"),
    rA = cc11001100_hook("rA", (a, b) => {
      var c = cc11001100_hook("c", nA(a), "var-init");
      c.zg = cc11001100_hook("c.zg", [5], "assign");
      c = cc11001100_hook("c", mA(a, At(a.P()), c, 8), "assign");
      qA(a, c.reverse(), b);
    }, "var-init"),
    qA = cc11001100_hook("qA", (a, b, c) => {
      for (const d of b) if (b = cc11001100_hook("b", c.j(d.aa), "assign"), lA(a, d, {
        Jc: cc11001100_hook("Jc", b, "object-key-init")
      })) return !0;
      return !1;
    }, "var-init");
  iA[8] = cc11001100_hook("iA[8]", function (a) {
    var b = cc11001100_hook("b", a.P().document, "var-init");
    if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => iA[8](a), {
      once: cc11001100_hook("once", !0, "object-key-init")
    }), !0;
    if (!a.v) return !1;
    if (!a.qc()) return !0;
    b = cc11001100_hook("b", nA(a), "assign");
    b.xd = cc11001100_hook("b.xd", [2, 4, 5], "assign");
    b = cc11001100_hook("b", mA(a, At(a.P()), b, 8), "assign");
    const c = cc11001100_hook("c", new Zz(), "var-init");
    if (qA(a, b, c)) return !0;
    if (a.m.be) switch (a.m.Ge || 0) {
      case 1:
        rA(a, c);
        break;
      default:
        pA(a);
    }
    return !0;
  }, "assign");
  iA[6] = cc11001100_hook("iA[6]", Ca(jA, [2], 6), "assign");
  iA[7] = cc11001100_hook("iA[7]", Ca(jA, [1], 7), "assign");
  iA[9] = cc11001100_hook("iA[9]", function (a) {
    const b = cc11001100_hook("b", kA([0, 2], a, 9), "var-init");
    if (!b || !b.Gb) return a.A.push(17), $z(a.P()), a.v;
    for (const e of b.Gb) {
      var c = cc11001100_hook("c", e, "var-init");
      var d = cc11001100_hook("d", a.m.Xc || null, "var-init");
      null == d ? c = cc11001100_hook("c", null, "assign") : (d = cc11001100_hook("d", ws(c.T, new sA(), new tA(d, a.P())), "assign"), c = cc11001100_hook("c", new Ds(d, c.W(), c.aa), "assign"));
      if (c && !(vs(c.T) > b.Vb) && lA(a, c, {
        tc: cc11001100_hook("tc", b.Vb, "object-key-init"),
        Pc: cc11001100_hook("Pc", !0, "object-key-init")
      })) return a = cc11001100_hook("a", c.T.V, "assign"), ts(e.T, 0 < a.length ? a[0] : null), !0;
    }
    a.A.push(17);
    $z(a.P());
    return a.v;
  }, "assign");
  class sA {
    l(a, b, c, d) {
      return xr(d.document, a, b);
    }
    m(a) {
      return P(a).clientHeight || 0;
    }
  }
  ;
  var uA = cc11001100_hook("uA", class {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.Tb = cc11001100_hook("this.Tb", c, "assign");
    }
    ga(a) {
      return this.j ? zu(this.l, this.j, a, this.Tb) : yu(this.l, a, this.Tb);
    }
    ha() {
      return this.j ? 16 : 9;
    }
  }, "var-init");
  var vA = cc11001100_hook("vA", class {
    constructor(a) {
      this.Kc = cc11001100_hook("this.Kc", a, "assign");
    }
    ga(a) {
      return Gu(a.document, this.Kc);
    }
    ha() {
      return 11;
    }
  }, "var-init");
  var wA = cc11001100_hook("wA", class {
    constructor(a) {
      this.hb = cc11001100_hook("this.hb", a, "assign");
    }
    ga(a) {
      return Du(this.hb, a);
    }
    ha() {
      return 13;
    }
  }, "var-init");
  var xA = cc11001100_hook("xA", class {
    ga(a) {
      return wu(a);
    }
    ha() {
      return 12;
    }
  }, "var-init");
  var yA = cc11001100_hook("yA", class {
    constructor(a) {
      this.wb = cc11001100_hook("this.wb", a, "assign");
    }
    ga() {
      return Bu(this.wb);
    }
    ha() {
      return 2;
    }
  }, "var-init");
  var zA = cc11001100_hook("zA", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    ga() {
      return Eu(this.j);
    }
    ha() {
      return 3;
    }
  }, "var-init");
  var AA = cc11001100_hook("AA", class {
    ga() {
      return Hu();
    }
    ha() {
      return 17;
    }
  }, "var-init");
  var BA = cc11001100_hook("BA", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    ga() {
      return Au(this.j);
    }
    ha() {
      return 1;
    }
  }, "var-init");
  var CA = cc11001100_hook("CA", class {
    ga() {
      return ge(ns);
    }
    ha() {
      return 7;
    }
  }, "var-init");
  var DA = cc11001100_hook("DA", class {
    constructor(a) {
      this.xd = cc11001100_hook("this.xd", a, "assign");
    }
    ga() {
      return Cu(this.xd);
    }
    ha() {
      return 6;
    }
  }, "var-init");
  var EA = cc11001100_hook("EA", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    ga() {
      return Fu(this.j);
    }
    ha() {
      return 5;
    }
  }, "var-init");
  var FA = cc11001100_hook("FA", class {
    constructor(a, b) {
      this.minWidth = cc11001100_hook("this.minWidth", a, "assign");
      this.maxWidth = cc11001100_hook("this.maxWidth", b, "assign");
    }
    ga() {
      return Ca(Iu, this.minWidth, this.maxWidth);
    }
    ha() {
      return 10;
    }
  }, "var-init");
  var GA = cc11001100_hook("GA", class {
    constructor(a) {
      this.v = cc11001100_hook("this.v", a.l.slice(0), "assign");
      this.l = cc11001100_hook("this.l", a.j.slice(0), "assign");
      this.m = cc11001100_hook("this.m", a.m, "assign");
      this.A = cc11001100_hook("this.A", a.v, "assign");
      this.j = cc11001100_hook("this.j", a.A, "assign");
    }
  }, "var-init");
  function HA(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new IA(), "var-init");
    b.A = cc11001100_hook("b.A", a, "assign");
    b.l.push(new BA(a));
    return b;
  }
  function JA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.push(new DA(b));
    return a;
  }
  function KA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.push(new yA(b));
    return a;
  }
  function LA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.push(new EA(b));
    return a;
  }
  function MA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.push(new zA(b));
    return a;
  }
  function NA(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l.push(new CA());
    return a;
  }
  function OA(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.push(new xA());
    return a;
  }
  function PA(a, b = 0, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j.push(new uA(b, c, d));
    return a;
  }
  function QA(a, b = 0, c = Infinity) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.push(new FA(b, c));
    return a;
  }
  function RA(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.push(new AA());
    return a;
  }
  function SA(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.push(new wA(b));
    return a;
  }
  function TA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.m = cc11001100_hook("a.m", b, "assign");
    return a;
  }
  var IA = cc11001100_hook("IA", class {
    constructor() {
      this.m = cc11001100_hook("this.m", 0, "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.l = cc11001100_hook("this.l", [].slice(0), "assign");
      this.j = cc11001100_hook("this.j", [].slice(0), "assign");
    }
    build() {
      return new GA(this);
    }
  }, "var-init");
  class tA {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j() {
      var a = cc11001100_hook("a", this.l, "var-init"),
        b = cc11001100_hook("b", this.m, "var-init");
      const c = cc11001100_hook("c", a.D || {}, "var-init");
      c.google_ad_client = cc11001100_hook("c.google_ad_client", a.Ic, "assign");
      c.google_ad_height = cc11001100_hook("c.google_ad_height", P(b).clientHeight || 0, "assign");
      c.google_ad_width = cc11001100_hook("c.google_ad_width", P(b).clientWidth || 0, "assign");
      c.google_reactive_ad_format = cc11001100_hook("c.google_reactive_ad_format", 9, "assign");
      b = cc11001100_hook("b", new aA(), "assign");
      x(b, 1, a.A);
      a.j && rd(b, 2, a.j);
      a.C && x(b, 3, !0);
      c.google_rasc = cc11001100_hook("c.google_rasc", Qd(b), "assign");
      a.m && (c.google_adtest = cc11001100_hook("c.google_adtest", "on", "assign"));
      return new An(["fsi_container"], c);
    }
  }
  ;
  var UA = cc11001100_hook("UA", tn(new qn(0, {})), "var-init"),
    VA = cc11001100_hook("VA", tn(new qn(1, {})), "var-init"),
    WA = cc11001100_hook("WA", a => a === UA || a === VA, "var-init");
  function XA(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Ul(a.j, b) || a.j.set(b, []);
    a.j.get(b).push(c);
  }
  class YA {
    constructor() {
      this.j = cc11001100_hook("this.j", new Yl(), "assign");
    }
  }
  ;
  function ZA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b && (a.j.apv = cc11001100_hook("a.j.apv", w(b, 4), "assign"), bd(b, Zn, 23) && (a.j.sat = cc11001100_hook("a.j.sat", "" + zd(D(b, Zn, 23), 1), "assign")));
    return a;
  }
  function $A(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j.afm = cc11001100_hook("a.j.afm", b.join(","), "assign");
    return a;
  }
  class aB extends as {
    constructor(a) {
      super(a);
      this.j = cc11001100_hook("this.j", {}, "assign");
    }
    H(a) {
      this.j.a = cc11001100_hook("this.j.a", a.join(","), "assign");
      return this;
    }
    G(a) {
      null != a && (this.j.allp = cc11001100_hook("this.j.allp", a, "assign"));
      return this;
    }
    v(a) {
      try {
        this.j.su = cc11001100_hook("this.j.su", a.location.hostname, "assign");
      } catch (b) {
        this.j.su = cc11001100_hook("this.j.su", "_ex", "assign");
      }
      a = cc11001100_hook("a", super.v(a), "assign");
      we(a, this.j);
      return a;
    }
  }
  function bB(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }
  ;
  function cB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.op = cc11001100_hook("a.l.op", dB(b), "assign");
  }
  function eB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    30 >= c.length ? a.l[b] = cc11001100_hook("a.l[b]", fB(c), "assign") : (a.l[b] = cc11001100_hook("a.l[b]", fB(c.slice(0, 30)), "assign"), a.l[b + "_c"] = cc11001100_hook("a.l[b + \"_c\"]", c.length.toString(), "assign"));
  }
  function gB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    eB(a, "fap", b);
    a.l.fad = cc11001100_hook("a.l.fad", dB(c), "assign");
  }
  function hB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    eB(a, "fmp", b);
    a.l.fmd = cc11001100_hook("a.l.fmd", dB(c), "assign");
  }
  function iB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    eB(a, "vap", b);
    a.l.vad = cc11001100_hook("a.l.vad", dB(c), "assign");
  }
  function jB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    eB(a, "vmp", b);
    a.l.vmd = cc11001100_hook("a.l.vmd", dB(c), "assign");
  }
  function kB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    eB(a, "pap", b);
    a.l.pad = cc11001100_hook("a.l.pad", dB(c), "assign");
  }
  function lB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    eB(a, "pmp", b);
    a.l.pmd = cc11001100_hook("a.l.pmd", dB(c), "assign");
  }
  function mB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    eB(a, "psq", b);
  }
  var nB = cc11001100_hook("nB", class extends aB {
    constructor(a) {
      super(0);
      Object.assign(this, a);
      this.l = cc11001100_hook("this.l", {}, "assign");
    }
    v(a) {
      a = cc11001100_hook("a", super.v(a), "assign");
      Object.assign(a, this.l);
      return a;
    }
  }, "var-init");
  function fB(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.map(b => b?.toString() ?? "null").join("~");
  }
  function dB(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }
  ;
  function oB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", b.T, "var-init");
    Ul(a.j, d) || a.j.set(d, new pB(jn(Bs(b)) ?? ""));
    c(a.j.get(d));
  }
  function qB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    oB(a, b, c => {
      c.j = cc11001100_hook("c.j", !0, "assign");
    });
  }
  function rB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    oB(a, b, c => {
      c.l = cc11001100_hook("c.l", !0, "assign");
    });
  }
  function sB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    oB(a, b, c => {
      c.m = cc11001100_hook("c.m", !0, "assign");
    });
    a.I.push(b.T);
  }
  function tB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    oB(a, b, d => {
      d.cb = cc11001100_hook("d.cb", c, "assign");
    });
  }
  function uB(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    let e = cc11001100_hook("e", 0, "var-init");
    for (const f of c.filter(b)) WA(f.cb ?? "") ? ++e : (b = cc11001100_hook("b", a.l.get(f.cb ?? "", null), "assign"), d.push(b));
    return {
      list: cc11001100_hook("list", d.sort((f, g) => (f ?? -1) - (g ?? -1)), "object-key-init"),
      eb: cc11001100_hook("eb", e, "object-key-init")
    };
  }
  function vB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cB(b, a.l.Bb());
    var c = cc11001100_hook("c", Xl(a.j).filter(f => 0 === (f.Oa.startsWith(UA) ? 0 : 1)), "var-init"),
      d = cc11001100_hook("d", Xl(a.j).filter(f => 1 === (f.Oa.startsWith(UA) ? 0 : 1)), "var-init"),
      e = cc11001100_hook("e", uB(a, f => f.j, c), "var-init");
    gB(b, e.list, e.eb);
    e = cc11001100_hook("e", uB(a, f => f.j, d), "assign");
    hB(b, e.list, e.eb);
    e = cc11001100_hook("e", uB(a, f => f.l, c), "assign");
    iB(b, e.list, e.eb);
    e = cc11001100_hook("e", uB(a, f => f.l, d), "assign");
    jB(b, e.list, e.eb);
    c = cc11001100_hook("c", uB(a, f => f.m, c), "assign");
    kB(b, c.list, c.eb);
    d = cc11001100_hook("d", uB(a, f => f.m, d), "assign");
    lB(b, d.list, d.eb);
    mB(b, a.I.map(f => a.j.get(f)?.cb).map(f => a.l.get(f) ?? null));
  }
  function Ej() {
    var a = cc11001100_hook("a", O(wB), "var-init");
    if (!a.A) return sj();
    const b = cc11001100_hook("b", Bj(Aj(zj(yj(xj(wj(vj(uj(rj(qj(new tj(), a.A ?? []), a.H ?? []), a.B), a.G), a.F), a.K), a.L), a.C ?? 0), Xl(a.j).map(c => {
      var d = cc11001100_hook("d", new pj(), "var-init");
      d = cc11001100_hook("d", Bd(d, 1, c.Oa), "assign");
      var e = cc11001100_hook("e", a.l.get(c.cb ?? "", -1), "var-init");
      d = cc11001100_hook("d", J(d, 2, e), "assign");
      d = cc11001100_hook("d", Ad(d, 3, c.j), "assign");
      return Ad(d, 4, c.l);
    })), a.I.map(c => a.j.get(c)?.cb).map(c => a.l.get(c) ?? null)), "var-init");
    null != a.m && Ad(b, 6, a.m);
    null != a.v && jd(b, 13, a.v, 0);
    return b;
  }
  var wB = cc11001100_hook("wB", class {
    constructor() {
      this.v = cc11001100_hook("this.v", this.H = cc11001100_hook("this.H", this.A = cc11001100_hook("this.A", null, "assign"), "assign"), "assign");
      this.F = cc11001100_hook("this.F", this.G = cc11001100_hook("this.G", !1, "assign"), "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
      this.L = cc11001100_hook("this.L", this.B = cc11001100_hook("this.B", this.K = cc11001100_hook("this.K", !1, "assign"), "assign"), "assign");
      this.C = cc11001100_hook("this.C", null, "assign");
      this.l = cc11001100_hook("this.l", new Yl(), "assign");
      this.j = cc11001100_hook("this.j", new Yl(), "assign");
      this.I = cc11001100_hook("this.I", [], "assign");
    }
  }, "var-init");
  class pB {
    constructor(a) {
      this.m = cc11001100_hook("this.m", this.l = cc11001100_hook("this.l", this.j = cc11001100_hook("this.j", !1, "assign"), "assign"), "assign");
      this.cb = cc11001100_hook("this.cb", null, "assign");
      this.Oa = cc11001100_hook("this.Oa", a, "assign");
    }
  }
  ;
  class xB {
    constructor(a = 0) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }
  ;
  class yB {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", -1, "assign");
    }
  }
  ;
  function zB(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 0, "var-init");
    for (; a;) (!b || a.previousElementSibling || a.nextElementSibling) && b++, a = cc11001100_hook("a", a.parentElement, "assign");
    return b;
  }
  ;
  function AB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.H.filter(d => Wl(d.cc).every(e => d.cc.get(e) === b.get(e))), "var-init");
    return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.cc.Bb() > e.cc.Bb() ? d : e, c[0]);
  }
  function BB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", Bs(b), "assign");
    if (null == b.j) return a.l.push(18), null;
    b = cc11001100_hook("b", b.j.value, "assign");
    if (Ul(a.m, b)) return a.m.get(b);
    var c = cc11001100_hook("c", rn(b), "var-init");
    c = cc11001100_hook("c", AB(a, c), "assign");
    a.m.set(b, c);
    return c;
  }
  var CB = cc11001100_hook("CB", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.m = cc11001100_hook("this.m", new Yl(), "assign");
      this.H = cc11001100_hook("this.H", (D(a, Oo, 2)?.j() || []).map(b => {
        const c = cc11001100_hook("c", rn(K(b, 1)), "var-init"),
          d = cc11001100_hook("d", yd(b, 2), "var-init");
        return {
          cc: cc11001100_hook("cc", c, "object-key-init"),
          Ie: cc11001100_hook("Ie", d, "object-key-init"),
          Oa: cc11001100_hook("Oa", K(b, 1), "object-key-init")
        };
      }), "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
    }
    F() {
      const a = cc11001100_hook("a", O(wB), "var-init");
      var b = cc11001100_hook("b", this.v(), "var-init");
      a.A = cc11001100_hook("a.A", b, "assign");
      b = cc11001100_hook("b", this.B(), "assign");
      a.H = cc11001100_hook("a.H", b, "assign");
      b = cc11001100_hook("b", this.A(), "assign");
      null != b && (a.v = cc11001100_hook("a.v", b, "assign"));
      b = cc11001100_hook("b", !!this.j.v()?.j()?.j(), "assign");
      a.F = cc11001100_hook("a.F", b, "assign");
      b = cc11001100_hook("b", new Yl(), "assign");
      for (const c of D(this.j, Oo, 2)?.j() ?? []) b.set(K(c, 1), yd(c, 2));
      a.l = cc11001100_hook("a.l", b, "assign");
    }
    C() {
      return [...this.l];
    }
    v() {
      return [...this.j.j()];
    }
    B() {
      return [...gd(this.j, 4, Vc)];
    }
    A() {
      return D(this.j, Ho, 5)?.j() ?? null;
    }
    G(a) {
      const b = cc11001100_hook("b", BB(this, a), "var-init");
      null != b?.Oa && tB(O(wB), a, b.Oa);
    }
    I(a) {
      const b = cc11001100_hook("b", U(Np) || 0, "var-init");
      if (0 == a.length || 0 == b) return !0;
      const c = cc11001100_hook("c", new an(a).filter(d => {
        d = cc11001100_hook("d", BB(this, d)?.Oa || "", "assign");
        return "" != d && !(d === UA || d === VA);
      }), "var-init");
      return b <= c.j.length / a.length;
    }
  }, "var-init");
  function DB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 == b.j.length ? b : b.sort((c, d) => (BB(a.j, c)?.Ie ?? Number.MAX_VALUE) - (BB(a.j, d)?.Ie ?? Number.MAX_VALUE));
  }
  function EB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.aa.j, "var-init"),
      d = cc11001100_hook("d", Math, "var-init"),
      e = cc11001100_hook("e", d.min, "var-init");
    const f = cc11001100_hook("f", b.W(), "var-init"),
      g = cc11001100_hook("g", b.T.j(), "var-init");
    c += cc11001100_hook("c", 200 * e.call(d, 20, 0 == g || 3 == g ? zB(f.parentElement) : zB(f)), "assign");
    d = cc11001100_hook("d", a.m, "assign");
    0 > d.j && (d.j = cc11001100_hook("d.j", P(d.l).scrollHeight || 0, "assign"));
    d = cc11001100_hook("d", d.j - b.aa.j, "assign");
    c += cc11001100_hook("c", 1E3 < d ? 0 : 2 * (1E3 - d), "assign");
    a = cc11001100_hook("a", a.l, "assign");
    b = cc11001100_hook("b", b.W(), "assign");
    return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0);
  }
  function FB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 == b.j.length ? b : b.sort((c, d) => EB(a, c) - EB(a, d));
  }
  function GB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.sort((c, d) => {
      const e = cc11001100_hook("e", c.T.G, "var-init"),
        f = cc11001100_hook("f", d.T.G, "var-init");
      var g;
      null == e || null == f ? g = cc11001100_hook("g", null == e && null == f ? EB(a, c) - EB(a, d) : null == e ? 1 : -1, "assign") : g = cc11001100_hook("g", e - f, "assign");
      return g;
    });
  }
  class HB {
    constructor(a, b = 0, c = null) {
      this.m = cc11001100_hook("this.m", new yB(a), "assign");
      this.l = cc11001100_hook("this.l", new xB(b), "assign");
      this.j = cc11001100_hook("this.j", c && new CB(c), "assign");
    }
  }
  ;
  function IB(a, b, c = 0) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var d = cc11001100_hook("d", a.l, "var-init");
    for (var e of b.v) d = cc11001100_hook("d", $m(d, e.ga(a.m), JB(e.ha(), c)), "assign");
    e = cc11001100_hook("e", d = cc11001100_hook("d", d.apply(vu(a.m)), "assign"), "assign");
    for (const f of b.l) e = cc11001100_hook("e", $m(e, f.ga(a.m), KB(f.ha(), c)), "assign");
    switch (b.m) {
      case 1:
        e = cc11001100_hook("e", FB(a.j, e), "assign");
        break;
      case 2:
        e = cc11001100_hook("e", GB(a.j, e), "assign");
        break;
      case 3:
        const f = cc11001100_hook("f", O(wB), "var-init");
        e = cc11001100_hook("e", DB(a.j, e), "assign");
        d.forEach(g => {
          qB(f, g);
          a.j.j?.G(g);
        });
        e.forEach(g => rB(f, g));
    }
    b.A && (e = cc11001100_hook("e", cn(e, vg(a.m.location.href + a.m.localStorage.google_experiment_mod)), "assign"));
    1 === b.j?.length && XA(a.v, b.j[0], {
      nf: cc11001100_hook("nf", d.j.length, "object-key-init"),
      Qg: cc11001100_hook("Qg", e.j.length, "object-key-init")
    });
    return bn(e);
  }
  class LB {
    constructor(a, b, c = 0, d = null) {
      this.l = cc11001100_hook("this.l", new an(a), "assign");
      this.j = cc11001100_hook("this.j", new HB(b, c, d), "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.v = cc11001100_hook("this.v", new YA(), "assign");
    }
    A() {
      this.l.forEach(a => {
        a.l && Xq(a.l);
        a.l = cc11001100_hook("a.l", null, "assign");
      });
    }
  }
  const JB = cc11001100_hook("JB", (a, b) => c => ss(c, b, a), "var-init"),
    KB = cc11001100_hook("KB", (a, b) => c => ss(c.T, b, a), "var-init");
  function MB(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a: {
      switch (b) {
        case 0:
          a = cc11001100_hook("a", NB(OB(c), a), "assign");
          break a;
        case 3:
          a = cc11001100_hook("a", NB(c, a), "assign");
          break a;
        case 2:
          var e = cc11001100_hook("e", c.lastChild, "var-init");
          a = cc11001100_hook("a", NB(e ? 1 == e.nodeType ? e : OB(e) : null, a), "assign");
          break a;
      }
      a = cc11001100_hook("a", !1, "assign");
    }
    if (d = cc11001100_hook("d", !a && !(!d && 2 == b && !PB(c)), "assign")) b = cc11001100_hook("b", 1 == b || 2 == b ? c : c.parentNode, "assign"), d = cc11001100_hook("d", !(b && !dp(b) && 0 >= b.offsetWidth), "assign");
    return d;
  }
  function NB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", Xg(a, b), "assign");
    if (!a) return !1;
    a = cc11001100_hook("a", a.cssFloat || a.styleFloat, "assign");
    return "left" == a || "right" == a;
  }
  function OB(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (a = cc11001100_hook("a", a.previousSibling, "assign"); a && 1 != a.nodeType;) a = cc11001100_hook("a", a.previousSibling, "assign");
    return a ? a : null;
  }
  function PB(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a.nextSibling || !!a.parentNode && PB(a.parentNode);
  }
  ;
  var QB = cc11001100_hook("QB", !Tb && !vb(), "var-init");
  function RB(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (/-[a-z]/.test("adFormat")) return null;
    if (QB && a.dataset) {
      if (xb() && !("adFormat" in a.dataset)) return null;
      a = cc11001100_hook("a", a.dataset.adFormat, "assign");
      return void 0 === a ? null : a;
    }
    return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase());
  }
  ;
  var SB = cc11001100_hook("SB", (a, b, c) => {
      if (!b) return null;
      const d = cc11001100_hook("d", Fg(document, "INS"), "var-init");
      d.id = cc11001100_hook("d.id", "google_pedestal_container", "assign");
      d.style.width = cc11001100_hook("d.style.width", "100%", "assign");
      d.style.zIndex = cc11001100_hook("d.style.zIndex", "-1", "assign");
      if (c) {
        var e = cc11001100_hook("e", a.getComputedStyle(c), "var-init"),
          f = cc11001100_hook("f", "", "var-init");
        if (e && "static" != e.position) {
          var g = cc11001100_hook("g", c.parentNode.lastElementChild, "var-init");
          for (f = cc11001100_hook("f", e.position, "assign"); g && g != c;) {
            if ("none" != a.getComputedStyle(g).display) {
              f = cc11001100_hook("f", a.getComputedStyle(g).position, "assign");
              break;
            }
            g = cc11001100_hook("g", g.previousElementSibling, "assign");
          }
        }
        if (c = cc11001100_hook("c", f, "assign")) d.style.position = cc11001100_hook("d.style.position", c, "assign");
      }
      b.appendChild(d);
      if (d) {
        var h = cc11001100_hook("h", a.document, "var-init");
        f = cc11001100_hook("f", h.createElement("div"), "assign");
        f.style.width = cc11001100_hook("f.style.width", "100%", "assign");
        f.style.height = cc11001100_hook("f.style.height", "2000px", "assign");
        c = cc11001100_hook("c", P(a).clientHeight, "assign");
        e = cc11001100_hook("e", h.body.scrollHeight, "assign");
        a = cc11001100_hook("a", a.innerHeight, "assign");
        g = cc11001100_hook("g", h.body.getBoundingClientRect().bottom, "assign");
        d.appendChild(f);
        var k = cc11001100_hook("k", f.getBoundingClientRect().top, "var-init");
        h = cc11001100_hook("h", h.body.getBoundingClientRect().top, "assign");
        d.removeChild(f);
        f = cc11001100_hook("f", e, "assign");
        e <= a && 0 < c && 0 < g && (f = cc11001100_hook("f", g - h, "assign"));
        a = cc11001100_hook("a", k - h >= .8 * f, "assign");
      } else a = cc11001100_hook("a", !1, "assign");
      return a ? d : (b.removeChild(d), null);
    }, "var-init"),
    TB = cc11001100_hook("TB", a => {
      const b = cc11001100_hook("b", a.document.body, "var-init");
      var c = cc11001100_hook("c", SB(a, b, null), "var-init");
      if (c) return c;
      if (a.document.body) {
        c = cc11001100_hook("c", Math.floor(a.document.body.getBoundingClientRect().width), "assign");
        for (var d = cc11001100_hook("d", [{
            element: cc11001100_hook("element", a.document.body, "object-key-init"),
            depth: cc11001100_hook("depth", 0, "object-key-init"),
            height: cc11001100_hook("height", 0, "object-key-init")
          }], "var-init"), e = cc11001100_hook("e", -1, "var-init"), f = cc11001100_hook("f", null, "var-init"); 0 < d.length;) {
          const h = cc11001100_hook("h", d.pop(), "var-init"),
            k = cc11001100_hook("k", h.element, "var-init");
          var g = cc11001100_hook("g", h.height, "var-init");
          0 < h.depth && g > e && (e = cc11001100_hook("e", g, "assign"), f = cc11001100_hook("f", k, "assign"));
          if (5 > h.depth) for (let l = cc11001100_hook("l", 0, "var-init"); l < k.children.length; l++) {
            const m = cc11001100_hook("m", k.children[l], "var-init");
            g = cc11001100_hook("g", c, "assign");
            const n = cc11001100_hook("n", m.getBoundingClientRect().width, "var-init");
            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
              element: cc11001100_hook("element", m, "object-key-init"),
              depth: cc11001100_hook("depth", h.depth + 1, "object-key-init"),
              height: cc11001100_hook("height", m.getBoundingClientRect().height, "object-key-init")
            });
          }
        }
        c = cc11001100_hook("c", f, "assign");
      } else c = cc11001100_hook("c", null, "assign");
      return c ? SB(a, c.parentNode || b, c) : null;
    }, "var-init"),
    VB = cc11001100_hook("VB", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      try {
        b |= cc11001100_hook("b", a != a.top ? 512 : 0, "assign"), Og() || (b |= cc11001100_hook("b", 1048576, "assign")), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= cc11001100_hook("b", 32768, "assign")), UB(a) && (b |= cc11001100_hook("b", 33554432, "assign"));
      } catch (c) {
        b |= cc11001100_hook("b", 32, "assign");
      }
      return b;
    }, "var-init"),
    UB = cc11001100_hook("UB", a => {
      a = cc11001100_hook("a", a.document.getElementsByClassName("adsbygoogle"), "assign");
      for (let b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) if ("autorelaxed" == RB(a[b])) return !0;
      return !1;
    }, "var-init");
  function WB(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Jl(a, !0), "var-init"),
      c = cc11001100_hook("c", P(a).scrollWidth, "var-init"),
      d = cc11001100_hook("d", P(a).scrollHeight, "var-init");
    let e = cc11001100_hook("e", "unknown", "var-init");
    a && a.document && a.document.readyState && (e = cc11001100_hook("e", a.document.readyState, "assign"));
    var f = cc11001100_hook("f", Ol(a), "var-init");
    const g = cc11001100_hook("g", [], "var-init");
    var h = cc11001100_hook("h", [], "var-init");
    const k = cc11001100_hook("k", [], "var-init"),
      l = cc11001100_hook("l", [], "var-init");
    var m = cc11001100_hook("m", [], "var-init"),
      n = cc11001100_hook("n", [], "var-init"),
      q = cc11001100_hook("q", [], "var-init");
    let r = cc11001100_hook("r", 0, "var-init"),
      u = cc11001100_hook("u", 0, "var-init"),
      C = cc11001100_hook("C", Infinity, "var-init"),
      z = cc11001100_hook("z", Infinity, "var-init"),
      A = cc11001100_hook("A", null, "var-init");
    var I = cc11001100_hook("I", wt({
      Za: cc11001100_hook("Za", !1, "object-key-init")
    }, a), "var-init");
    for (var E of I) {
      I = cc11001100_hook("I", E.getBoundingClientRect(), "assign");
      const T = cc11001100_hook("T", b - (I.bottom + f), "var-init");
      var F = cc11001100_hook("F", void 0, "var-init"),
        H = cc11001100_hook("H", void 0, "var-init");
      if (E.className && Za(E.className, "adsbygoogle-ablated-ad-slot")) {
        F = cc11001100_hook("F", E.getAttribute("google_element_uid"), "assign");
        H = cc11001100_hook("H", a.google_sv_map, "assign");
        if (!F || !H || !H[F]) continue;
        F = cc11001100_hook("F", (H = cc11001100_hook("H", si(H[F]), "assign")) ? H.height : 0, "assign");
        H = cc11001100_hook("H", H ? H.width : 0, "assign");
      } else if (F = cc11001100_hook("F", I.bottom - I.top, "assign"), H = cc11001100_hook("H", I.right - I.left, "assign"), 1 >= F || 1 >= H) continue;
      g.push(F);
      k.push(H);
      l.push(F * H);
      E.className && Za(E.className, "google-auto-placed") ? (u += cc11001100_hook("u", 1, "assign"), E.className && Za(E.className, "pedestal_container") && (A = cc11001100_hook("A", F, "assign"))) : (C = cc11001100_hook("C", Math.min(C, T), "assign"), n.push(I), r += cc11001100_hook("r", 1, "assign"), h.push(F), m.push(F * H));
      z = cc11001100_hook("z", Math.min(z, T), "assign");
      q.push(I);
    }
    C = cc11001100_hook("C", Infinity === C ? null : C, "assign");
    z = cc11001100_hook("z", Infinity === z ? null : z, "assign");
    f = cc11001100_hook("f", XB(n), "assign");
    q = cc11001100_hook("q", XB(q), "assign");
    h = cc11001100_hook("h", YB(b, h), "assign");
    n = cc11001100_hook("n", YB(b, g), "assign");
    m = cc11001100_hook("m", YB(b * c, m), "assign");
    E = cc11001100_hook("E", YB(b * c, l), "assign");
    return new ZB(a, {
      Df: cc11001100_hook("Df", e, "object-key-init"),
      pd: cc11001100_hook("pd", b, "object-key-init"),
      lg: cc11001100_hook("lg", c, "object-key-init"),
      kg: cc11001100_hook("kg", d, "object-key-init"),
      cg: cc11001100_hook("cg", r, "object-key-init"),
      mf: cc11001100_hook("mf", u, "object-key-init"),
      qf: cc11001100_hook("qf", $B(g), "object-key-init"),
      rf: cc11001100_hook("rf", $B(k), "object-key-init"),
      pf: cc11001100_hook("pf", $B(l), "object-key-init"),
      hg: cc11001100_hook("hg", f, "object-key-init"),
      gg: cc11001100_hook("gg", q, "object-key-init"),
      fg: cc11001100_hook("fg", C, "object-key-init"),
      eg: cc11001100_hook("eg", z, "object-key-init"),
      Sc: cc11001100_hook("Sc", h, "object-key-init"),
      Rc: cc11001100_hook("Rc", n, "object-key-init"),
      hf: cc11001100_hook("hf", m, "object-key-init"),
      gf: cc11001100_hook("gf", E, "object-key-init"),
      ng: cc11001100_hook("ng", A, "object-key-init")
    });
  }
  function aC(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", Og() && !(900 <= P(a.l).clientWidth), "var-init");
    d = cc11001100_hook("d", Bb(d, f => Fb(a.m, f)).join(","), "assign");
    return {
      wpc: cc11001100_hook("wpc", b, "object-key-init"),
      su: cc11001100_hook("su", c, "object-key-init"),
      eid: cc11001100_hook("eid", d, "object-key-init"),
      doc: cc11001100_hook("doc", a.j.Df, "object-key-init"),
      pg_h: cc11001100_hook("pg_h", bC(a.j.pd), "object-key-init"),
      pg_w: cc11001100_hook("pg_w", bC(a.j.lg), "object-key-init"),
      pg_hs: cc11001100_hook("pg_hs", bC(a.j.kg), "object-key-init"),
      c: cc11001100_hook("c", bC(a.j.cg), "object-key-init"),
      aa_c: cc11001100_hook("aa_c", bC(a.j.mf), "object-key-init"),
      av_h: cc11001100_hook("av_h", bC(a.j.qf), "object-key-init"),
      av_w: cc11001100_hook("av_w", bC(a.j.rf), "object-key-init"),
      av_a: cc11001100_hook("av_a", bC(a.j.pf), "object-key-init"),
      s: cc11001100_hook("s", bC(a.j.hg), "object-key-init"),
      all_s: cc11001100_hook("all_s", bC(a.j.gg), "object-key-init"),
      b: cc11001100_hook("b", bC(a.j.fg), "object-key-init"),
      all_b: cc11001100_hook("all_b", bC(a.j.eg), "object-key-init"),
      d: cc11001100_hook("d", bC(a.j.Sc), "object-key-init"),
      all_d: cc11001100_hook("all_d", bC(a.j.Rc), "object-key-init"),
      ard: cc11001100_hook("ard", bC(a.j.hf), "object-key-init"),
      all_ard: cc11001100_hook("all_ard", bC(a.j.gf), "object-key-init"),
      pd_h: cc11001100_hook("pd_h", bC(a.j.ng), "object-key-init"),
      dt: cc11001100_hook("dt", e ? "m" : "d", "object-key-init")
    };
  }
  class ZB {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" "), "assign");
    }
  }
  function $B(a) {
    cc11001100_hook("a", a, "function-parameter");
    return pg.apply(null, Bb(a, b => 0 < b)) || null;
  }
  function YB(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 >= a ? null : og.apply(null, b) / a;
  }
  function XB(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", Infinity, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < a.length - 1; e++) for (let f = cc11001100_hook("f", e + 1, "var-init"); f < a.length; f++) {
      var c = cc11001100_hook("c", a[e], "var-init"),
        d = cc11001100_hook("d", a[f], "var-init");
      c = cc11001100_hook("c", Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom)), "assign");
      0 < c && (b = cc11001100_hook("b", Math.min(c, b), "assign"));
    }
    return Infinity !== b ? b : null;
  }
  function bC(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }
  ;
  function cC(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", (P(b).clientHeight || 0) - Ol(b), "assign");
    let c = cc11001100_hook("c", 0, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; d++) {
      const e = cc11001100_hook("e", a[d].getBoundingClientRect(), "var-init");
      bu(e) && e.top <= b && (c += cc11001100_hook("c", 1, "assign"));
    }
    return c;
  }
  function dC(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    var c = cc11001100_hook("c", yt({
      Za: cc11001100_hook("Za", !1, "object-key-init"),
      jc: cc11001100_hook("jc", !1, "object-key-init"),
      kc: cc11001100_hook("kc", !1, "object-key-init"),
      lc: cc11001100_hook("lc", !1, "object-key-init")
    }, a).map(d => d.getBoundingClientRect()).filter(bu), "var-init");
    b.Hd = cc11001100_hook("b.Hd", c.length, "assign");
    c = cc11001100_hook("c", zt({
      kc: cc11001100_hook("kc", !0, "object-key-init")
    }, a).map(d => d.getBoundingClientRect()).filter(bu), "assign");
    b.ae = cc11001100_hook("b.ae", c.length, "assign");
    c = cc11001100_hook("c", zt({
      lc: cc11001100_hook("lc", !0, "object-key-init")
    }, a).map(d => d.getBoundingClientRect()).filter(bu), "assign");
    b.ye = cc11001100_hook("b.ye", c.length, "assign");
    c = cc11001100_hook("c", zt({
      jc: cc11001100_hook("jc", !0, "object-key-init")
    }, a).map(d => d.getBoundingClientRect()).filter(bu), "assign");
    b.Nd = cc11001100_hook("b.Nd", c.length, "assign");
    c = cc11001100_hook("c", (P(a).clientHeight || 0) - Ol(a), "assign");
    c = cc11001100_hook("c", yt({
      Za: cc11001100_hook("Za", !1, "object-key-init")
    }, a).map(d => d.getBoundingClientRect()).filter(bu).filter(Ba(eC, null, c)), "assign");
    b.Id = cc11001100_hook("b.Id", c.length, "assign");
    a = cc11001100_hook("a", WB(a), "assign");
    c = cc11001100_hook("c", null != a.j.Sc ? a.j.Sc : null, "assign");
    null != c && (b.te = cc11001100_hook("b.te", c, "assign"));
    a = cc11001100_hook("a", null != a.j.Rc ? a.j.Rc : null, "assign");
    null != a && (b.Jd = cc11001100_hook("b.Jd", a, "assign"));
    return b;
  }
  function lA(a, b, {
    tc: c,
    Jc: d,
    Pc: e
  } = {}) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Fr(997, () => fC(a, b, {
      tc: cc11001100_hook("tc", c, "object-key-init"),
      Jc: cc11001100_hook("Jc", d, "object-key-init"),
      Pc: cc11001100_hook("Pc", e, "object-key-init")
    }), a.j);
  }
  function mA(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", c.Sa ? c.Sa : a.B, "var-init");
    const f = cc11001100_hook("f", kt(e, b.j.length), "var-init");
    e = cc11001100_hook("e", a.m.Kd ? e.j : void 0, "assign");
    const g = cc11001100_hook("g", RA(SA(OA(QA(PA(NA(LA(MA(JA(KA(HA(c.types), a.V), c.xd || []), a.L), c.zg || [])), f.uc || void 0, e, b), c.minWidth, c.maxWidth)), f.hb || void 0)), "var-init");
    a.K && g.j.push(new vA(a.K));
    b = cc11001100_hook("b", 1, "assign");
    a.m.Fd ? b = cc11001100_hook("b", 2, "assign") : a.Da() && (b = cc11001100_hook("b", 3, "assign"));
    TA(g, b);
    a.m.Ad && (g.v = cc11001100_hook("g.v", !0, "assign"));
    return Fr(995, () => IB(a.l, g.build(), d), a.j);
  }
  function oA(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", TB(a.j), "var-init");
    if (c) {
      const d = cc11001100_hook("d", zn(a.H, b), "var-init"),
        e = cc11001100_hook("e", ur(a.j.document, a.C, null, null, {}, d), "var-init");
      e && ($q(e.Wa, c, 2, 256), Fr(996, () => gC(a, e, d), a.j));
    }
  }
  function hC(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.G ? a.G : a.G = cc11001100_hook("a.G", a.j.google_ama_state, "assign");
  }
  function fC(a, b, {
    tc: c,
    Jc: d,
    Pc: e
  } = {}) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const f = cc11001100_hook("f", b.T, "var-init");
    if (f.A) return !1;
    var g = cc11001100_hook("g", b.W(), "var-init");
    if (!MB(a.j, f.j(), g, a.v)) return !1;
    var h = cc11001100_hook("h", null, "var-init");
    S(pp) && f.sc?.includes(6) ? (g = cc11001100_hook("g", Math.round(g.getBoundingClientRect().height), "assign"), h = cc11001100_hook("h", null == c ? g : Math.min(c, g), "assign")) : h = cc11001100_hook("h", c, "assign");
    c = cc11001100_hook("c", null == h ? null : new An(null, {
      google_max_responsive_height: cc11001100_hook("google_max_responsive_height", h, "object-key-init")
    }), "assign");
    g = cc11001100_hook("g", Bn(w(f.Cc, 2) || 0), "assign");
    h = cc11001100_hook("h", Cn(f.G), "assign");
    const k = cc11001100_hook("k", iC(a, f), "var-init"),
      l = cc11001100_hook("l", jC(a), "var-init"),
      m = cc11001100_hook("m", zn(a.H, f.L ? f.L.j(b.aa) : null, c, d || null, g, h, k, l), "var-init"),
      n = cc11001100_hook("n", b.fill(a.C, m), "var-init");
    if (e && !kC(a, n, m) || !Fr(996, () => gC(a, n, m), a.j)) return !1;
    ql(9, [f.G, f.bb]);
    a.Da() && sB(O(wB), b);
    return !0;
  }
  function iC(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return jn(ln(zs(b).map(Dn), () => {
      a.A.push(18);
    }));
  }
  function jC(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.Da()) return null;
    var b = cc11001100_hook("b", a.l.j.j?.B(), "var-init");
    if (null == b) return null;
    b = cc11001100_hook("b", b.join("~"), "assign");
    a = cc11001100_hook("a", a.l.j.j?.A() ?? null, "assign");
    return En({
      Af: cc11001100_hook("Af", b, "object-key-init"),
      Hf: cc11001100_hook("Hf", a, "object-key-init")
    });
  }
  function kC(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!b) return !1;
    var d = cc11001100_hook("d", b.va, "var-init"),
      e = cc11001100_hook("e", d.style.width, "var-init");
    d.style.width = cc11001100_hook("d.style.width", "100%", "assign");
    var f = cc11001100_hook("f", d.offsetWidth, "var-init");
    d.style.width = cc11001100_hook("d.style.width", e, "assign");
    d = cc11001100_hook("d", a.j, "assign");
    e = cc11001100_hook("e", b.va, "assign");
    c = cc11001100_hook("c", c && c.Cb() || {}, "assign");
    if (d !== d.top) var g = cc11001100_hook("g", Ug(d) ? 3 : 16, "var-init");else if (488 > P(d).clientWidth) {
      if (d.innerHeight >= d.innerWidth) {
        if (g = cc11001100_hook("g", P(d).clientWidth, "assign"), !g || .3 < (g - f) / g) g = cc11001100_hook("g", 6, "assign");else {
          if (g = cc11001100_hook("g", "true" != c.google_full_width_responsive, "assign")) b: {
            var h = cc11001100_hook("h", e.parentElement, "var-init");
            for (g = cc11001100_hook("g", P(d).clientWidth, "assign"); h; h = cc11001100_hook("h", h.parentElement, "assign")) {
              const k = cc11001100_hook("k", Xg(h, d), "var-init");
              if (!k) continue;
              const l = cc11001100_hook("l", hh(k.width), "var-init");
              if (l && !(l >= g) && "visible" != k.overflow) {
                g = cc11001100_hook("g", !0, "assign");
                break b;
              }
            }
            g = cc11001100_hook("g", !1, "assign");
          }
          g = cc11001100_hook("g", g ? 7 : !0, "assign");
        }
      } else g = cc11001100_hook("g", 5, "assign");
    } else g = cc11001100_hook("g", 4, "assign");
    if (!0 !== g) f = cc11001100_hook("f", g, "assign");else {
      if (!(c = cc11001100_hook("c", "true" == c.google_full_width_responsive, "assign"))) a: {
        do if ((c = cc11001100_hook("c", Xg(e, d), "assign")) && "fixed" == c.position) {
          c = cc11001100_hook("c", !1, "assign");
          break a;
        } while (e = cc11001100_hook("e", e.parentElement, "assign"));
        c = cc11001100_hook("c", !0, "assign");
      }
      c ? (d = cc11001100_hook("d", P(d).clientWidth, "assign"), f = cc11001100_hook("f", d - f, "assign"), f = cc11001100_hook("f", d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10, "assign")) : f = cc11001100_hook("f", 9, "assign");
    }
    if (f) {
      a = cc11001100_hook("a", a.j, "assign");
      b = cc11001100_hook("b", b.va, "assign");
      if (f = cc11001100_hook("f", qr(a, b), "assign")) b.style.border = cc11001100_hook("b.style.border", b.style.borderStyle = cc11001100_hook("b.style.borderStyle", b.style.outline = cc11001100_hook("b.style.outline", b.style.outlineStyle = cc11001100_hook("b.style.outlineStyle", b.style.transition = cc11001100_hook("b.style.transition", "none", "assign"), "assign"), "assign"), "assign"), "assign"), b.style.borderSpacing = cc11001100_hook("b.style.borderSpacing", b.style.padding = cc11001100_hook("b.style.padding", "0", "assign"), "assign"), or(b, f, "0px"), b.style.width = cc11001100_hook("b.style.width", P(a).clientWidth + "px", "assign"), rr(a, b, f), b.style.zIndex = cc11001100_hook("b.style.zIndex", 30, "assign");
      return !0;
    }
    Xq(b.Wa);
    return !1;
  }
  function gC(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!b) return !1;
    try {
      yr(a.j, b.va, c);
    } catch (d) {
      return Xq(b.Wa), a.A.push(6), !1;
    }
    return !0;
  }
  class lC {
    constructor(a, b, c, d, e = {}, f = []) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.B = cc11001100_hook("this.B", d.Sa, "assign");
      this.V = cc11001100_hook("this.V", d.wb || [], "assign");
      this.H = cc11001100_hook("this.H", d.If || null, "assign");
      this.L = cc11001100_hook("this.L", d.Cf || [], "assign");
      this.K = cc11001100_hook("this.K", d.Kc || [], "assign");
      this.m = cc11001100_hook("this.m", e, "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.I = cc11001100_hook("this.I", [], "assign");
      this.A = cc11001100_hook("this.A", [], "assign");
      this.F = cc11001100_hook("this.F", this.G = cc11001100_hook("this.G", void 0, "assign"), "assign");
      this.ka = cc11001100_hook("this.ka", f, "assign");
    }
    ba() {
      return this.l;
    }
    P() {
      return this.j;
    }
    wa(a) {
      this.I.push(a);
    }
    Da() {
      if (0 == (this.l.j.j?.v().length ?? 0)) return !1;
      if (0 == (U(Np) || 0)) return !0;
      if (void 0 === this.F) {
        const a = cc11001100_hook("a", TA(OA(NA(HA([0, 1, 2]))), 1).build(), "var-init"),
          b = cc11001100_hook("b", Fr(995, () => IB(this.l, a), this.j), "var-init");
        this.F = cc11001100_hook("this.F", this.l.j.j?.I(b) || !1, "assign");
      }
      return this.F;
    }
    dd() {
      return !!this.m.Ne;
    }
    qc() {
      return !UB(this.j);
    }
  }
  const eC = cc11001100_hook("eC", (a, b) => b.top <= a, "var-init");
  function mC(a, b, c, d, e, f = 0, g = 0) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.Aa = cc11001100_hook("this.Aa", a, "assign");
    this.Bc = cc11001100_hook("this.Bc", f, "assign");
    this.Ac = cc11001100_hook("this.Ac", g, "assign");
    this.errors = cc11001100_hook("this.errors", b, "assign");
    this.Ra = cc11001100_hook("this.Ra", c, "assign");
    this.j = cc11001100_hook("this.j", d, "assign");
    this.l = cc11001100_hook("this.l", e, "assign");
  }
  ;
  var nC = cc11001100_hook("nC", (a, {
    qc: b = !1,
    dd: c = !1,
    Dg: d = !1,
    Da: e = !1
  } = {}) => {
    const f = cc11001100_hook("f", [], "var-init");
    d && f.push(9);
    if (e) {
      a.includes(4) && !c && b && f.push(8);
      a.includes(1) && f.push(1);
      d = cc11001100_hook("d", a.includes(3), "assign");
      e = cc11001100_hook("e", a.includes(2) && !S(rp), "assign");
      const g = cc11001100_hook("g", a.includes(1), "var-init");
      (d || e || g) && f.push(10);
    } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !S(rp) && f.push(7);
    a.includes(4) && c && b && f.push(8);
    return f;
  }, "var-init");
  function oC(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", nC(a, {
      qc: cc11001100_hook("qc", b.qc(), "object-key-init"),
      dd: cc11001100_hook("dd", b.dd(), "object-key-init"),
      Dg: cc11001100_hook("Dg", !!b.m.Xc, "object-key-init"),
      Da: cc11001100_hook("Da", b.Da(), "object-key-init")
    }), "assign");
    return new pC(a, b, c);
  }
  function qC(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", iA[b], "var-init");
    return c ? Fr(998, () => c(a.j), a.A) : (a.j.wa(12), !0);
  }
  function rC(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new Promise(c => {
      setTimeout(() => {
        c(qC(a, b));
      });
    });
  }
  function sC(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.v = cc11001100_hook("a.j.v", !0, "assign");
    return Promise.all(a.l.map(b => rC(a, b))).then(b => {
      b.includes(!1) && a.j.wa(5);
      a.l.splice(0, a.l.length);
    });
  }
  class pC {
    constructor(a, b, c) {
      this.v = cc11001100_hook("this.v", a.slice(0), "assign");
      this.l = cc11001100_hook("this.l", a.slice(0), "assign");
      this.m = cc11001100_hook("this.m", Gb(this.l, 1), "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
    }
  }
  ;
  const tC = cc11001100_hook("tC", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.exception = cc11001100_hook("this.exception", void 0, "assign");
    }
  }, "var-init");
  function uC(a) {
    cc11001100_hook("a", a, "function-parameter");
    return sC(a).then(() => {
      var b = cc11001100_hook("b", a.j.l.l.filter(ns).j.length, "var-init");
      var c = cc11001100_hook("c", a.j.I.slice(0), "var-init");
      var d = cc11001100_hook("d", a.j, "var-init");
      d = cc11001100_hook("d", [...d.A, ...(d.l.j.j?.C() || [])], "assign");
      b = cc11001100_hook("b", new mC(b, c, d, a.j.l.l.j.length, a.j.l.v.j, a.j.l.l.filter(ns).filter(os).j.length, a.j.l.l.filter(os).j.length), "assign");
      return new tC(b);
    });
  }
  ;
  class vC {
    j() {
      return new An([], {
        google_reactive_ad_format: cc11001100_hook("google_reactive_ad_format", 40, "object-key-init"),
        google_tag_origin: cc11001100_hook("google_tag_origin", "qs", "object-key-init")
      });
    }
  }
  ;
  class wC {
    j() {
      return new An(["adsbygoogle-resurrected-ad-slot"], {});
    }
  }
  ;
  function xC(a) {
    cc11001100_hook("a", a, "function-parameter");
    return ep(a.j.document).map(b => {
      const c = cc11001100_hook("c", new Is(b, 3), "var-init");
      b = cc11001100_hook("b", new is(Ar(a.j, b)), "assign");
      return new ms(c, b, a.l, !1, 0, [], null, a.j, null);
    });
  }
  class yC {
    constructor(a) {
      var b = cc11001100_hook("b", new wC(), "var-init");
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b || null, "assign");
    }
  }
  ;
  const zC = cc11001100_hook("zC", {
    Ed: cc11001100_hook("Ed", "10px", "object-key-init"),
    Oc: cc11001100_hook("Oc", "10px", "object-key-init")
  }, "var-init");
  function AC(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Tl(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new ms(new Is(b, 1), new gs(zC), a.l, !1, 0, [], null, a.j, null));
  }
  class BC {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b || null, "assign");
    }
  }
  ;
  function CC(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null;
  }
  function DC(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", CC(c.hc, "gapsMeasurementWindow") || CC(c.Ab, "gapsPerMeasurementWindow") || CC(c.Eb, "maxGapsToReport"), "var-init");
    return null != d ? gn(d) : c.Md || -1 != c.Ab || -1 != c.Eb ? en(new EC(a, b, c)) : gn("ShouldHaveLimits");
  }
  function FC(a) {
    cc11001100_hook("a", a, "function-parameter");
    return hC(a.m) && hC(a.m).placed || [];
  }
  function GC(a) {
    cc11001100_hook("a", a, "function-parameter");
    return FC(a).map(b => Qm(Om(b.element, a.j)));
  }
  function HC(a) {
    cc11001100_hook("a", a, "function-parameter");
    return FC(a).map(b => b.index);
  }
  function IC(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.T, "var-init");
    return !a.B && c.v && null != w(c.v, 8) && 1 == w(c.v, 8) ? [] : c.A ? (c.V || []).map(d => Qm(Om(d, a.j))) : [Qm(new Pm(b.aa.j, 0))];
  }
  function JC(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.sort((e, f) => e.j - f.j);
    const b = cc11001100_hook("b", [], "var-init");
    let c = cc11001100_hook("c", 0, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < a.length; ++e) {
      var d = cc11001100_hook("d", a[e], "var-init");
      let f = cc11001100_hook("f", d.j, "var-init");
      d = cc11001100_hook("d", d.j + d.l, "assign");
      f <= c ? c = cc11001100_hook("c", Math.max(c, d), "assign") : (b.push(new Pm(c, f - c)), c = cc11001100_hook("c", d, "assign"));
    }
    return b;
  }
  function KC(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b.map(c => {
      var d = cc11001100_hook("d", new Pz(), "var-init");
      d = cc11001100_hook("d", x(d, 1, c.j), "assign");
      c = cc11001100_hook("c", c.getHeight(), "assign");
      return x(d, 2, c);
    }), "assign");
    return Rz(Qz(new Tz(), a), b);
  }
  function LC(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", G(a, Pz, 2).map(c => `G${vd(c, 1)}~${c.getHeight()}`), "var-init");
    return `W${vd(a, 1)}${b.join("")}`;
  }
  function MC(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", [], "var-init");
    let d = cc11001100_hook("d", 0, "var-init");
    for (const e of Wl(b)) {
      const f = cc11001100_hook("f", b.get(e), "var-init");
      f.sort((g, h) => h.getHeight() - g.getHeight());
      a.F || f.splice(a.A, f.length);
      !a.C && d + f.length > a.l && f.splice(a.l - d, f.length);
      c.push(KC(e, f));
      d += cc11001100_hook("d", f.length, "assign");
      if (!a.C && d >= a.l) break;
    }
    return c;
  }
  function NC(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", G(a, Tz, 5).map(c => LC(c)), "var-init");
    return `M${vd(a, 1)}H${vd(a, 2)}C${vd(a, 3)}B${Number(!!B(a, 4))}${b.join("")}`;
  }
  function OC(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Rs(bn(a.m.l.l), a.j), "var-init"),
      c = cc11001100_hook("c", GC(a), "var-init"),
      d = cc11001100_hook("d", new Zl(HC(a)), "var-init");
    for (var e = cc11001100_hook("e", 0, "var-init"); e < b.length; ++e) if (!d.contains(e)) {
      var f = cc11001100_hook("f", IC(a, b[e]), "var-init");
      c.push(...f);
    }
    c.push(new Pm(0, 0));
    c.push(Qm(new Pm(P(a.j).scrollHeight, 0)));
    b = cc11001100_hook("b", JC(c), "assign");
    c = cc11001100_hook("c", new Yl(), "assign");
    for (d = cc11001100_hook("d", 0, "assign"); d < b.length; ++d) e = cc11001100_hook("e", b[d], "assign"), f = cc11001100_hook("f", a.G ? 0 : Math.floor(e.j / a.v), "assign"), Ul(c, f) || c.set(f, []), c.get(f).push(e);
    b = cc11001100_hook("b", MC(a, c), "assign");
    c = cc11001100_hook("c", new Vz(), "assign");
    c = cc11001100_hook("c", x(c, 1, a.l), "assign");
    c = cc11001100_hook("c", x(c, 2, a.v), "assign");
    c = cc11001100_hook("c", x(c, 3, a.A), "assign");
    a = cc11001100_hook("a", x(c, 4, a.B), "assign");
    return td(a, 5, b);
  }
  function PC(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", OC(a), "assign");
    return NC(a);
  }
  var EC = cc11001100_hook("EC", class {
    constructor(a, b, c) {
      this.G = cc11001100_hook("this.G", -1 == c.hc, "assign");
      this.v = cc11001100_hook("this.v", c.hc, "assign");
      this.F = cc11001100_hook("this.F", -1 == c.Ab, "assign");
      this.A = cc11001100_hook("this.A", c.Ab, "assign");
      this.C = cc11001100_hook("this.C", -1 == c.Eb, "assign");
      this.l = cc11001100_hook("this.l", c.Eb, "assign");
      this.B = cc11001100_hook("this.B", c.ne, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }, "var-init");
  const QC = cc11001100_hook("QC", {
    google_ad_channel: cc11001100_hook("google_ad_channel", !0, "object-key-init"),
    google_ad_host: cc11001100_hook("google_ad_host", !0, "object-key-init")
  }, "var-init");
  var RC = cc11001100_hook("RC", (a, b) => {
      a.location.href && a.location.href.substring && (b.url = cc11001100_hook("b.url", a.location.href.substring(0, 200), "assign"));
      bl("ama", b, .01);
    }, "var-init"),
    SC = cc11001100_hook("SC", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      Zg(QC, (c, d) => {
        d in a && (b[d] = cc11001100_hook("b[d]", a[d], "assign"));
      });
      return b;
    }, "var-init");
  const TC = cc11001100_hook("TC", a => {
      const b = cc11001100_hook("b", /[a-zA-Z0-9._~-]/, "var-init"),
        c = cc11001100_hook("c", /%[89a-zA-Z]./, "var-init");
      return a.replace(/(%[a-zA-Z0-9]{2})/g, function (d) {
        if (!d.match(c)) {
          const e = cc11001100_hook("e", decodeURIComponent(d), "var-init");
          if (e.match(b)) return e;
        }
        return d.toUpperCase();
      });
    }, "var-init"),
    UC = cc11001100_hook("UC", a => {
      let b = cc11001100_hook("b", "", "var-init");
      const c = cc11001100_hook("c", /[/%?&=]/, "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; ++d) {
        const e = cc11001100_hook("e", a[d], "var-init");
        b = cc11001100_hook("b", e.match(c) ? b + e : b + encodeURIComponent(e), "assign");
      }
      return b;
    }, "var-init");
  var VC = cc11001100_hook("VC", (a, b) => {
      a = cc11001100_hook("a", ed(a, 2), "assign");
      if (!a) return !1;
      for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (a[c] == b) return !0;
      return !1;
    }, "var-init"),
    XC = cc11001100_hook("XC", (a, b) => {
      a = cc11001100_hook("a", UC(TC(a.location.pathname)).replace(/(^\/)|(\/$)/g, ""), "assign");
      const c = cc11001100_hook("c", ah(a), "var-init"),
        d = cc11001100_hook("d", WC(a), "var-init");
      return b.find(e => {
        const f = cc11001100_hook("f", bd(e, Pn, 7) ? xd(D(e, Pn, 7)) : xd(e), "var-init");
        bd(e, Pn, 7) ? (e = cc11001100_hook("e", D(e, Pn, 7), "assign"), e = cc11001100_hook("e", w(e, 2), "assign")) : e = cc11001100_hook("e", 2, "assign");
        if ("number" !== typeof f) return !1;
        switch (e) {
          case 1:
            return f == c;
          case 2:
            return d[f] || !1;
        }
        return !1;
      }) || null;
    }, "var-init");
  const WC = cc11001100_hook("WC", a => {
    const b = cc11001100_hook("b", {}, "var-init");
    for (;;) {
      b[ah(a)] = cc11001100_hook("b[ah(a)]", !0, "assign");
      if (!a) return b;
      a = cc11001100_hook("a", a.substring(0, a.lastIndexOf("/")), "assign");
    }
  }, "var-init");
  var YC = cc11001100_hook("YC", a => {
    try {
      try {
        a.localStorage.removeItem("google_ama_config");
      } catch (b) {
        RC(a, {
          lserr: cc11001100_hook("lserr", 1, "object-key-init")
        });
      }
    } catch (b) {
      RC(a, {
        lserr: cc11001100_hook("lserr", 1, "object-key-init")
      });
    }
  }, "var-init");
  function ZC(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_ad_modifications || (a.google_ad_modifications = cc11001100_hook("a.google_ad_modifications", {}, "assign"));
    return a.google_ad_modifications;
  }
  function $C(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", ZC(a), "assign");
    a.processed_sra_frame_pingbacks = cc11001100_hook("a.processed_sra_frame_pingbacks", a.processed_sra_frame_pingbacks || {}, "assign");
    const c = cc11001100_hook("c", !a.processed_sra_frame_pingbacks[b], "var-init");
    a.processed_sra_frame_pingbacks[b] = cc11001100_hook("a.processed_sra_frame_pingbacks[b]", !0, "assign");
    return c;
  }
  ;
  function aD() {
    if (bD) return bD;
    const a = cc11001100_hook("a", Ph() || window, "var-init"),
      b = cc11001100_hook("b", a.google_persistent_state_async, "var-init");
    return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? bD = cc11001100_hook("bD", b, "assign") : a.google_persistent_state_async = cc11001100_hook("a.google_persistent_state_async", bD = cc11001100_hook("bD", new cD(), "assign"), "assign");
  }
  function dD(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", eD[b] || "google_ps_" + b, "assign");
    a = cc11001100_hook("a", a.S, "assign");
    const d = cc11001100_hook("d", a[b], "var-init");
    return void 0 === d ? (a[b] = cc11001100_hook("a[b]", c(), "assign"), a[b]) : d;
  }
  function Z(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return dD(a, b, () => c);
  }
  function fD(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.S[eD[b] || "google_ps_" + b] = cc11001100_hook("a.S[eD[b] || \"google_ps_\" + b]", c, "assign");
  }
  function gD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return fD(a, b, Z(a, b, 0) + 1);
  }
  function hD() {
    var a = cc11001100_hook("a", aD(), "var-init");
    return Z(a, 20, {});
  }
  function iD() {
    var a = cc11001100_hook("a", aD(), "var-init");
    const b = cc11001100_hook("b", Z(a, 31, !1), "var-init");
    b || fD(a, 31, !0);
    return !b;
  }
  function jD() {
    var a = cc11001100_hook("a", aD(), "var-init");
    return Z(a, 26);
  }
  function kD() {
    var a = cc11001100_hook("a", aD(), "var-init");
    return Z(a, 28, []);
  }
  class cD {
    constructor() {
      this.S = cc11001100_hook("this.S", {}, "assign");
    }
  }
  var bD = cc11001100_hook("bD", null, "var-init");
  const eD = cc11001100_hook("eD", {
    [8]: cc11001100_hook(8, "google_prev_ad_formats_by_region", "object-key-init"),
    [9]: cc11001100_hook(9, "google_prev_ad_slotnames_by_region", "object-key-init")
  }, "var-init");
  var lD = cc11001100_hook("lD", {
      google_ad_block: cc11001100_hook("google_ad_block", "ad_block", "object-key-init"),
      google_ad_client: cc11001100_hook("google_ad_client", "client", "object-key-init"),
      google_ad_output: cc11001100_hook("google_ad_output", "output", "object-key-init"),
      google_ad_callback: cc11001100_hook("google_ad_callback", "callback", "object-key-init"),
      google_ad_height: cc11001100_hook("google_ad_height", "h", "object-key-init"),
      google_ad_resize: cc11001100_hook("google_ad_resize", "twa", "object-key-init"),
      google_ad_slot: cc11001100_hook("google_ad_slot", "slotname", "object-key-init"),
      google_ad_unit_key: cc11001100_hook("google_ad_unit_key", "adk", "object-key-init"),
      google_ad_dom_fingerprint: cc11001100_hook("google_ad_dom_fingerprint", "adf", "object-key-init"),
      google_placement_id: cc11001100_hook("google_placement_id", "pi", "object-key-init"),
      google_daaos_ts: cc11001100_hook("google_daaos_ts", "daaos", "object-key-init"),
      google_erank: cc11001100_hook("google_erank", "epr", "object-key-init"),
      google_ad_width: cc11001100_hook("google_ad_width", "w", "object-key-init"),
      google_captcha_token: cc11001100_hook("google_captcha_token", "captok", "object-key-init"),
      google_content_recommendation_columns_num: cc11001100_hook("google_content_recommendation_columns_num", "cr_col", "object-key-init"),
      google_content_recommendation_rows_num: cc11001100_hook("google_content_recommendation_rows_num", "cr_row", "object-key-init"),
      google_ctr_threshold: cc11001100_hook("google_ctr_threshold", "ctr_t", "object-key-init"),
      google_cust_criteria: cc11001100_hook("google_cust_criteria", "cust_params", "object-key-init"),
      gfwrnwer: cc11001100_hook("gfwrnwer", "fwrn", "object-key-init"),
      gfwrnher: cc11001100_hook("gfwrnher", "fwrnh", "object-key-init"),
      google_image_size: cc11001100_hook("google_image_size", "image_size", "object-key-init"),
      google_last_modified_time: cc11001100_hook("google_last_modified_time", "lmt", "object-key-init"),
      google_loeid: cc11001100_hook("google_loeid", "loeid", "object-key-init"),
      google_max_num_ads: cc11001100_hook("google_max_num_ads", "num_ads", "object-key-init"),
      google_max_radlink_len: cc11001100_hook("google_max_radlink_len", "max_radlink_len", "object-key-init"),
      google_mtl: cc11001100_hook("google_mtl", "mtl", "object-key-init"),
      google_native_settings_key: cc11001100_hook("google_native_settings_key", "nsk", "object-key-init"),
      google_enable_content_recommendations: cc11001100_hook("google_enable_content_recommendations", "ecr", "object-key-init"),
      google_num_radlinks: cc11001100_hook("google_num_radlinks", "num_radlinks", "object-key-init"),
      google_num_radlinks_per_unit: cc11001100_hook("google_num_radlinks_per_unit", "num_radlinks_per_unit", "object-key-init"),
      google_pucrd: cc11001100_hook("google_pucrd", "pucrd", "object-key-init"),
      google_reactive_plaf: cc11001100_hook("google_reactive_plaf", "plaf", "object-key-init"),
      google_reactive_plat: cc11001100_hook("google_reactive_plat", "plat", "object-key-init"),
      google_reactive_fba: cc11001100_hook("google_reactive_fba", "fba", "object-key-init"),
      google_reactive_sra_channels: cc11001100_hook("google_reactive_sra_channels", "plach", "object-key-init"),
      google_responsive_auto_format: cc11001100_hook("google_responsive_auto_format", "rafmt", "object-key-init"),
      armr: cc11001100_hook("armr", "armr", "object-key-init"),
      google_plas: cc11001100_hook("google_plas", "plas", "object-key-init"),
      google_rl_dest_url: cc11001100_hook("google_rl_dest_url", "rl_dest_url", "object-key-init"),
      google_rl_filtering: cc11001100_hook("google_rl_filtering", "rl_filtering", "object-key-init"),
      google_rl_mode: cc11001100_hook("google_rl_mode", "rl_mode", "object-key-init"),
      google_rt: cc11001100_hook("google_rt", "rt", "object-key-init"),
      google_video_play_muted: cc11001100_hook("google_video_play_muted", "vpmute", "object-key-init"),
      google_source_type: cc11001100_hook("google_source_type", "src_type", "object-key-init"),
      google_restrict_data_processing: cc11001100_hook("google_restrict_data_processing", "rdp", "object-key-init"),
      google_tag_for_child_directed_treatment: cc11001100_hook("google_tag_for_child_directed_treatment", "tfcd", "object-key-init"),
      google_tag_for_under_age_of_consent: cc11001100_hook("google_tag_for_under_age_of_consent", "tfua", "object-key-init"),
      google_tag_origin: cc11001100_hook("google_tag_origin", "to", "object-key-init"),
      google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "sem", "object-key-init"),
      google_tfs: cc11001100_hook("google_tfs", "tfs", "object-key-init"),
      google_package: cc11001100_hook("google_package", "pwprc", "object-key-init"),
      google_tag_partner: cc11001100_hook("google_tag_partner", "tp", "object-key-init"),
      fra: cc11001100_hook("fra", "fpla", "object-key-init"),
      google_ml_rank: cc11001100_hook("google_ml_rank", "mlr", "object-key-init"),
      google_apsail: cc11001100_hook("google_apsail", "psa", "object-key-init"),
      google_ad_channel: cc11001100_hook("google_ad_channel", "channel", "object-key-init"),
      google_ad_type: cc11001100_hook("google_ad_type", "ad_type", "object-key-init"),
      google_ad_format: cc11001100_hook("google_ad_format", "format", "object-key-init"),
      google_color_bg: cc11001100_hook("google_color_bg", "color_bg", "object-key-init"),
      google_color_border: cc11001100_hook("google_color_border", "color_border", "object-key-init"),
      google_color_link: cc11001100_hook("google_color_link", "color_link", "object-key-init"),
      google_color_text: cc11001100_hook("google_color_text", "color_text", "object-key-init"),
      google_color_url: cc11001100_hook("google_color_url", "color_url", "object-key-init"),
      google_page_url: cc11001100_hook("google_page_url", "url", "object-key-init"),
      google_allow_expandable_ads: cc11001100_hook("google_allow_expandable_ads", "ea", "object-key-init"),
      google_ad_section: cc11001100_hook("google_ad_section", "region", "object-key-init"),
      google_cpm: cc11001100_hook("google_cpm", "cpm", "object-key-init"),
      google_encoding: cc11001100_hook("google_encoding", "oe", "object-key-init"),
      google_safe: cc11001100_hook("google_safe", "adsafe", "object-key-init"),
      google_font_face: cc11001100_hook("google_font_face", "f", "object-key-init"),
      google_font_size: cc11001100_hook("google_font_size", "fs", "object-key-init"),
      google_hints: cc11001100_hook("google_hints", "hints", "object-key-init"),
      google_ad_host: cc11001100_hook("google_ad_host", "host", "object-key-init"),
      google_ad_host_channel: cc11001100_hook("google_ad_host_channel", "h_ch", "object-key-init"),
      google_ad_host_tier_id: cc11001100_hook("google_ad_host_tier_id", "ht_id", "object-key-init"),
      google_kw_type: cc11001100_hook("google_kw_type", "kw_type", "object-key-init"),
      google_kw: cc11001100_hook("google_kw", "kw", "object-key-init"),
      google_contents: cc11001100_hook("google_contents", "contents", "object-key-init"),
      google_targeting: cc11001100_hook("google_targeting", "targeting", "object-key-init"),
      google_adtest: cc11001100_hook("google_adtest", "adtest", "object-key-init"),
      google_alternate_color: cc11001100_hook("google_alternate_color", "alt_color", "object-key-init"),
      google_alternate_ad_url: cc11001100_hook("google_alternate_ad_url", "alternate_ad_url", "object-key-init"),
      google_cust_age: cc11001100_hook("google_cust_age", "cust_age", "object-key-init"),
      google_cust_ch: cc11001100_hook("google_cust_ch", "cust_ch", "object-key-init"),
      google_cust_gender: cc11001100_hook("google_cust_gender", "cust_gender", "object-key-init"),
      google_cust_interests: cc11001100_hook("google_cust_interests", "cust_interests", "object-key-init"),
      google_cust_job: cc11001100_hook("google_cust_job", "cust_job", "object-key-init"),
      google_cust_l: cc11001100_hook("google_cust_l", "cust_l", "object-key-init"),
      google_cust_lh: cc11001100_hook("google_cust_lh", "cust_lh", "object-key-init"),
      google_cust_u_url: cc11001100_hook("google_cust_u_url", "cust_u_url", "object-key-init"),
      google_cust_id: cc11001100_hook("google_cust_id", "cust_id", "object-key-init"),
      google_language: cc11001100_hook("google_language", "hl", "object-key-init"),
      google_city: cc11001100_hook("google_city", "gcs", "object-key-init"),
      google_country: cc11001100_hook("google_country", "gl", "object-key-init"),
      google_region: cc11001100_hook("google_region", "gr", "object-key-init"),
      google_content_recommendation_ad_positions: cc11001100_hook("google_content_recommendation_ad_positions", "ad_pos", "object-key-init"),
      google_content_recommendation_columns_num: cc11001100_hook("google_content_recommendation_columns_num", "cr_col", "object-key-init"),
      google_content_recommendation_rows_num: cc11001100_hook("google_content_recommendation_rows_num", "cr_row", "object-key-init"),
      google_content_recommendation_ui_type: cc11001100_hook("google_content_recommendation_ui_type", "crui", "object-key-init"),
      google_content_recommendation_use_square_imgs: cc11001100_hook("google_content_recommendation_use_square_imgs", "cr_sq_img", "object-key-init"),
      google_color_line: cc11001100_hook("google_color_line", "color_line", "object-key-init"),
      google_disable_video_autoplay: cc11001100_hook("google_disable_video_autoplay", "disable_video_autoplay", "object-key-init"),
      google_full_width_responsive_allowed: cc11001100_hook("google_full_width_responsive_allowed", "fwr", "object-key-init"),
      google_full_width_responsive: cc11001100_hook("google_full_width_responsive", "fwrattr", "object-key-init"),
      efwr: cc11001100_hook("efwr", "efwr", "object-key-init"),
      google_pgb_reactive: cc11001100_hook("google_pgb_reactive", "pra", "object-key-init"),
      google_resizing_allowed: cc11001100_hook("google_resizing_allowed", "rs", "object-key-init"),
      google_resizing_height: cc11001100_hook("google_resizing_height", "rh", "object-key-init"),
      google_resizing_width: cc11001100_hook("google_resizing_width", "rw", "object-key-init"),
      rpe: cc11001100_hook("rpe", "rpe", "object-key-init"),
      google_responsive_formats: cc11001100_hook("google_responsive_formats", "resp_fmts", "object-key-init"),
      google_safe_for_responsive_override: cc11001100_hook("google_safe_for_responsive_override", "sfro", "object-key-init"),
      google_video_doc_id: cc11001100_hook("google_video_doc_id", "video_doc_id", "object-key-init"),
      google_video_product_type: cc11001100_hook("google_video_product_type", "video_product_type", "object-key-init"),
      google_webgl_support: cc11001100_hook("google_webgl_support", "wgl", "object-key-init"),
      easpi: cc11001100_hook("easpi", "easpi", "object-key-init"),
      easpa: cc11001100_hook("easpa", "easai", "object-key-init"),
      asntp: cc11001100_hook("asntp", "asntp", "object-key-init"),
      asntpv: cc11001100_hook("asntpv", "asntpv", "object-key-init"),
      asntpl: cc11001100_hook("asntpl", "asntpl", "object-key-init"),
      asntpm: cc11001100_hook("asntpm", "asntpm", "object-key-init"),
      asntpc: cc11001100_hook("asntpc", "asntpc", "object-key-init"),
      asna: cc11001100_hook("asna", "asna", "object-key-init"),
      asnd: cc11001100_hook("asnd", "asnd", "object-key-init"),
      asnp: cc11001100_hook("asnp", "asnp", "object-key-init"),
      asns: cc11001100_hook("asns", "asns", "object-key-init"),
      asmat: cc11001100_hook("asmat", "asmat", "object-key-init"),
      asptt: cc11001100_hook("asptt", "asptt", "object-key-init"),
      asro: cc11001100_hook("asro", "asro", "object-key-init"),
      ascet: cc11001100_hook("ascet", "easct", "object-key-init"),
      asrc: cc11001100_hook("asrc", "asdrc", "object-key-init"),
      asbu: cc11001100_hook("asbu", "asbu", "object-key-init"),
      aseb: cc11001100_hook("aseb", "aseb", "object-key-init"),
      asla: cc11001100_hook("asla", "aslmt", "object-key-init"),
      asaa: cc11001100_hook("asaa", "asamt", "object-key-init"),
      asupm: cc11001100_hook("asupm", "asupm", "object-key-init")
    }, "var-init"),
    mD = cc11001100_hook("mD", a => (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) && (a = cc11001100_hook("a", a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/), "assign")) && RegExp("google_ad_client").test(a[1]) ? a[1] : null, "var-init"),
    nD = cc11001100_hook("nD", a => {
      if (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) if (a = cc11001100_hook("a", a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), "assign"), (a = cc11001100_hook("a", a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i), "assign")) && RegExp("google_ad_client").test(a[1])) return a[1];
      return null;
    }, "var-init"),
    oD = cc11001100_hook("oD", a => {
      switch (a) {
        case "true":
          return !0;
        case "false":
          return !1;
        case "null":
          return null;
        case "undefined":
          break;
        default:
          try {
            const b = cc11001100_hook("b", a.match(/^(?:'(.*)'|"(.*)")$/), "var-init");
            if (b) return b[1] || b[2] || "";
            if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
              const c = cc11001100_hook("c", parseFloat(a), "var-init");
              return c === c ? c : void 0;
            }
          } catch (b) {}
      }
    }, "var-init");
  async function pD(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
      const f = cc11001100_hook("f", a.setInterval(() => {
        --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e());
      }, 200), "var-init");
    });
  }
  ;
  function qD(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.state.pc, "var-init");
    return null !== b && 0 !== b ? b : a.state.pc = cc11001100_hook("a.state.pc", xh(a.win), "assign");
  }
  function rD(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.state.wpc, "var-init");
    if (null === b || "" === b) {
      b = cc11001100_hook("b", a.state, "assign");
      var c = cc11001100_hook("c", a.win, "var-init");
      if (c.google_ad_client) a = cc11001100_hook("a", String(c.google_ad_client), "assign");else {
        if (null == (a = cc11001100_hook("a", ZC(c).head_tag_slot_vars?.google_ad_client ?? c.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"), "assign"))) {
          b: {
            a = cc11001100_hook("a", c.document.getElementsByTagName("script"), "assign");
            c = cc11001100_hook("c", c.navigator && c.navigator.userAgent || "", "assign");
            c = cc11001100_hook("c", RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) || /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !qi() ? mD : nD, "assign");
            for (var d = cc11001100_hook("d", a.length - 1, "var-init"); 0 <= d; d--) {
              var e = cc11001100_hook("e", a[d], "var-init");
              if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = cc11001100_hook("e.google_parsed_script_for_pub_code", !0, "assign"), e = cc11001100_hook("e", c(e), "assign"))) {
                a = cc11001100_hook("a", e, "assign");
                break b;
              }
            }
            a = cc11001100_hook("a", null, "assign");
          }
          if (a) {
            c = cc11001100_hook("c", /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm, "assign");
            for (d = cc11001100_hook("d", {}, "assign"); e = cc11001100_hook("e", c.exec(a), "assign");) d[e[1]] = cc11001100_hook("d[e[1]]", oD(e[2]), "assign");
            a = cc11001100_hook("a", d, "assign");
            a = cc11001100_hook("a", a.google_ad_client ? a.google_ad_client : "", "assign");
          } else a = cc11001100_hook("a", "", "assign");
        }
        a = cc11001100_hook("a", a ?? "", "assign");
      }
      b = cc11001100_hook("b", b.wpc = cc11001100_hook("b.wpc", a, "assign"), "assign");
    }
    return b;
  }
  function sD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new Bk(), "var-init"),
      d = cc11001100_hook("d", qD(a), "var-init");
    c = cc11001100_hook("c", J(c, 1, d).Pa(rD(a)), "assign");
    c = cc11001100_hook("c", J(c, 3, a.state.sd), "assign");
    return J(c, 7, Math.round(b || a.win.performance.now()));
  }
  function tD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j && !a.state.le.includes(2) && (a.state.le.push(2), Dk(a.Z, b));
  }
  async function uD(a) {
    cc11001100_hook("a", a, "function-parameter");
    await pD(a.win, () => !(!qD(a) || !rD(a)), 10);
  }
  async function vD(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a.j && c.length && !a.state.lgdp.includes(Number(b))) {
      a.state.lgdp.push(Number(b));
      var d = cc11001100_hook("d", a.win.performance.now(), "var-init");
      await uD(a);
      var e = cc11001100_hook("e", a.Z, "var-init");
      a = cc11001100_hook("a", sD(a, d), "assign");
      d = cc11001100_hook("d", new Tj(), "assign");
      b = cc11001100_hook("b", Ed(d, 1, b), "assign");
      c = cc11001100_hook("c", id(b, 2, c, Tc), "assign");
      c = cc11001100_hook("c", sd(a, 9, Ck, c), "assign");
      Dk(e, c);
    }
  }
  function wD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", sD(a), "var-init");
    b = cc11001100_hook("b", sd(c, 5, Ck, b), "assign");
    tD(a, b);
  }
  async function xD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    await uD(a);
    var c = cc11001100_hook("c", sD(a), "var-init");
    b = cc11001100_hook("b", sd(c, 5, Ck, b), "assign");
    tD(a, b);
  }
  async function yD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    await uD(a);
    var c = cc11001100_hook("c", a.Z, "var-init");
    a = cc11001100_hook("a", sD(a), "assign");
    a = cc11001100_hook("a", J(a, 3, 1), "assign");
    b = cc11001100_hook("b", sd(a, 6, Ck, b), "assign");
    Dk(c, b);
  }
  var zD = cc11001100_hook("zD", class {
    constructor(a) {
      this.win = cc11001100_hook("this.win", Ph() || window, "assign");
      this.Z = cc11001100_hook("this.Z", a ?? new Mk(), "assign");
      this.state = cc11001100_hook("this.state", dD(aD(), 33, () => {
        const b = cc11001100_hook("b", U(ip), "var-init");
        return {
          sd: cc11001100_hook("sd", b, "object-key-init"),
          ssp: cc11001100_hook("ssp", 0 < b && Yg() < 1 / b, "object-key-init"),
          pc: cc11001100_hook("pc", null, "object-key-init"),
          wpc: cc11001100_hook("wpc", null, "object-key-init"),
          cu: cc11001100_hook("cu", null, "object-key-init"),
          le: cc11001100_hook("le", [], "object-key-init"),
          lgdp: cc11001100_hook("lgdp", [], "object-key-init")
        };
      }), "assign");
    }
    get j() {
      return this.state.ssp;
    }
    get ac() {
      return this.state.cu;
    }
    set ac(a) {
      this.state.cu = cc11001100_hook("this.state.cu", a, "assign");
    }
  }, "var-init");
  var BD = cc11001100_hook("BD", (a, b, c, d, e, f = null, g = null, h) => {
      AD(a, new ds(a), b, c, d, e, f, new Sm(a), g, h);
    }, "var-init"),
    AD = cc11001100_hook("AD", (a, b, c, d, e, f, g = null, h = null, k = null, l) => {
      if (c) {
        if (d) {
          var m = cc11001100_hook("m", Dy(d, e, a.location), "var-init");
          try {
            const n = cc11001100_hook("n", new CD(a, b, c, d, e, m, f, g, h, k, l), "var-init");
            Fr(990, () => DD(n), a);
          } catch (n) {
            pl() && ql(15, [n]), cs(b, Pr, $r($A(ZA(new aB(0).Pa(c), d), m).wa(1), n)), S(lp) ? xD(O(zD), Ij(new Rj(), ej(1))) : wD(O(zD), Ij(new Rj(), ej(1)));
          }
        } else cs(b, Pr, new aB(0).Pa(c).wa(8)), S(lp) ? xD(O(zD), Ij(new Rj(), ej(8))) : wD(O(zD), Ij(new Rj(), ej(8)));
      } else cs(b, Pr, new aB(0).wa(9)), S(lp) ? xD(O(zD), Ij(new Rj(), ej(9))) : wD(O(zD), Ij(new Rj(), ej(9)));
    }, "var-init");
  function DD(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.C.forEach(b => {
      switch (b) {
        case 0:
          Fr(991, () => ED(a), a.l);
          break;
        case 1:
          Fr(1073, () => {
            var c = cc11001100_hook("c", S(Cp), "var-init");
            const d = cc11001100_hook("d", a.m.R ? ed(a.m.R, 2) : [], "var-init");
            c && 0 == d.length || (c = cc11001100_hook("c", new ty(a.l, a.A, a.j, a.B, a.m.R, c), "assign"), S(Ap) ? sy(c) : oy(c));
          }, a.l);
          break;
        case 5:
          cy(new dy(a.l, a.A, a.j, a.B));
          break;
        case 2:
          FD(a);
          break;
        case 3:
          GD(a);
          break;
        case 4:
          HD(a);
      }
    });
  }
  function ED(a) {
    cc11001100_hook("a", a, "function-parameter");
    (a.j?.j()?.j() ?? !1) && ID(a, "p", JD(a));
    if (Ro(a.j) && 1 === w(Ro(a.j), 1)) {
      var b = cc11001100_hook("b", D(Ro(a.j), Fn, 6), "var-init");
      b && 2 === w(b, 1) && (zr(a.l), a.G = cc11001100_hook("a.G", "b", "assign"));
    }
    var c = cc11001100_hook("c", a.m.qg, "var-init");
    b = cc11001100_hook("b", ht(a.l, c), "assign");
    if (a.m.R && bd(a.m.R, On, 10)) {
      var d = cc11001100_hook("d", fd(D(a.m.R, On, 10), 1), "var-init");
      null !== d && void 0 !== d && (b = cc11001100_hook("b", $s(a.l, d, c), "assign"));
    }
    bd(a.j, Ln, 26) && (b = cc11001100_hook("b", lt(b, D(a.j, Ln, 26), a.l), "assign"));
    c = cc11001100_hook("c", a.m.R ? ed(a.m.R, 6) : [], "assign");
    d = cc11001100_hook("d", a.m.R ? G(a.m.R, Un, 5) : [], "assign");
    const e = cc11001100_hook("e", a.m.R ? ed(a.m.R, 2) : [], "var-init"),
      f = cc11001100_hook("f", Fr(993, () => {
        var g = cc11001100_hook("g", a.j, "var-init"),
          h = cc11001100_hook("h", G(g, Bo, 1), "var-init");
        const k = cc11001100_hook("k", a.m.R && VC(a.m.R, 1) ? "text_image" : "text", "var-init");
        var l = cc11001100_hook("l", new vC(), "var-init");
        let m = cc11001100_hook("m", ls(h, a.l, {
          sf: cc11001100_hook("sf", l, "object-key-init"),
          Xf: cc11001100_hook("Xf", new js(k), "object-key-init")
        }), "var-init");
        h.length != m.length && a.H.push(13);
        m = cc11001100_hook("m", m.concat(AC(new BC(a.l, l))), "assign");
        h = cc11001100_hook("h", 0, "assign");
        l = cc11001100_hook("l", S(yp), "assign");
        var n = cc11001100_hook("n", !1, "var-init");
        if (Ro(g) && 1 === w(Ro(g), 1)) {
          var q = cc11001100_hook("q", D(Ro(g), Fn, 6), "var-init");
          q && (h = cc11001100_hook("h", wd(q, 2) || 0, "assign"), 1 === w(q, 1) && (n = cc11001100_hook("n", !0, "assign")));
        }
        q = cc11001100_hook("q", D(g, Qo, 24)?.v()?.j()?.j() || !1, "assign");
        if (l || n || q) l = cc11001100_hook("l", xC(new yC(a.l)), "assign"), n = cc11001100_hook("n", O(wB), "assign"), m = cc11001100_hook("m", m.concat(l), "assign"), n.K = cc11001100_hook("n.K", !0, "assign"), n.C = cc11001100_hook("n.C", l.length, "assign"), "n" === a.G && (a.G = cc11001100_hook("a.G", D(g, Qo, 24)?.j()?.length ? "o" : "p", "assign"));
        m = cc11001100_hook("m", m.concat(Oz(g, k, a.l)), "assign");
        g = cc11001100_hook("g", D(g, Qo, 24), "assign");
        return new LB(m, a.l, h, g);
      }, a.l), "var-init");
    a.v = cc11001100_hook("a.v", new lC(f, a.B, a.l, {
      Sa: cc11001100_hook("Sa", b, "object-key-init"),
      If: cc11001100_hook("If", a.V, "object-key-init"),
      wb: cc11001100_hook("wb", a.m.wb, "object-key-init"),
      Cf: cc11001100_hook("Cf", c, "object-key-init"),
      Kc: cc11001100_hook("Kc", d, "object-key-init")
    }, KD(a), e), "assign");
    hC(a.v)?.optimization?.ablatingThisPageview && !a.v.Da() && (zr(a.l), O(wB).B = cc11001100_hook("O(wB).B", !0, "assign"), a.G = cc11001100_hook("a.G", "f", "assign"));
    a.F = cc11001100_hook("a.F", oC(e, a.v, a.l), "assign");
    Fr(992, () => uC(a.F), a.l).then(Fr(994, () => a.Ga.bind(a), a.l), a.ua.bind(a));
  }
  function FD(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", D(a.j, Do, 18), "var-init");
    b && rz(new sz(a.l, new Nz(a.l, a.B), b, new Gw(a.l), G(a.j, Bo, 1)));
  }
  function GD(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", zy(a.l.location, "google_audio_sense") ? go() : D(a.j, ho, 27), "var-init");
    if (b) {
      const c = cc11001100_hook("c", D(a.j, vo, 6)?.j() || [], "var-init");
      kn(kv(a.l, a.A, b, c, a.ba, {
        google_ad_client: cc11001100_hook("google_ad_client", a.B, "object-key-init")
      }, D(a.j, so, 22)?.j() || null), d => mv(d));
    }
  }
  function HD(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", D(a.j, Go, 29), "var-init");
    b && LD(a.ka, {
      win: cc11001100_hook("win", a.l, "object-key-init"),
      webPropertyCode: cc11001100_hook("webPropertyCode", a.B, "object-key-init"),
      fe: cc11001100_hook("fe", b, "object-key-init"),
      Pd: cc11001100_hook("Pd", D(a.j, vo, 6)?.j() ?? [], "object-key-init")
    });
  }
  function KD(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", S(Bp), "var-init");
    if (!a.j.j()) return {
      Ad: cc11001100_hook("Ad", b, "object-key-init"),
      Fd: cc11001100_hook("Fd", !1, "object-key-init"),
      Yd: cc11001100_hook("Yd", !1, "object-key-init"),
      Ue: cc11001100_hook("Ue", !1, "object-key-init"),
      be: cc11001100_hook("be", !1, "object-key-init"),
      Ne: cc11001100_hook("Ne", !1, "object-key-init"),
      og: cc11001100_hook("og", 0, "object-key-init"),
      Ge: cc11001100_hook("Ge", 0, "object-key-init"),
      Kd: cc11001100_hook("Kd", MD(a), "object-key-init"),
      Xc: cc11001100_hook("Xc", a.L, "object-key-init")
    };
    const c = cc11001100_hook("c", a.j.j(), "var-init");
    return {
      Ad: cc11001100_hook("Ad", b || B(c, 14, !1), "object-key-init"),
      Fd: cc11001100_hook("Fd", B(c, 2, !1), "object-key-init"),
      Yd: cc11001100_hook("Yd", B(c, 3, !1), "object-key-init"),
      Ue: cc11001100_hook("Ue", B(c, 4, !1), "object-key-init"),
      be: cc11001100_hook("be", B(c, 5, !1), "object-key-init"),
      Ne: cc11001100_hook("Ne", B(c, 6, !1), "object-key-init"),
      og: cc11001100_hook("og", hd(fd(c, 8), 0), "object-key-init"),
      Ge: cc11001100_hook("Ge", w(c, 10), "object-key-init"),
      Kd: cc11001100_hook("Kd", MD(a), "object-key-init"),
      Xc: cc11001100_hook("Xc", a.L, "object-key-init")
    };
  }
  function MD(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.m.R && bd(a.m.R, On, 10) ? .5 <= (fd(D(a.m.R, On, 10), 1) || 0) : !0;
  }
  function ND(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", Zr(Zr(new aB(b.Aa), b.errors), a.H), "var-init"), d = cc11001100_hook("d", b.Ra, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < d.length; e++) a: {
      for (var f = cc11001100_hook("f", d[e], "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < c.B.length; g++) if (c.B[g] == f) break a;
      c.B.push(f);
    }
    c.j.pp = cc11001100_hook("c.j.pp", b.Ac, "assign");
    c.j.ppp = cc11001100_hook("c.j.ppp", b.Bc, "assign");
    c.j.ppos = cc11001100_hook("c.j.ppos", b.placementPositionDiffs, "assign");
    c.j.eatf = cc11001100_hook("c.j.eatf", b.sb, "assign");
    c.j.eatfAbg = cc11001100_hook("c.j.eatfAbg", b.tb, "assign");
    c.j.reatf = cc11001100_hook("c.j.reatf", b.Xa, "assign");
    c = cc11001100_hook("c", $A(ZA(c.H(a.F.v.slice(0)), a.j), a.C).Pa(a.B), "assign");
    if (d = cc11001100_hook("d", b.na, "assign")) c.j.as_count = cc11001100_hook("c.j.as_count", d.Hd, "assign"), c.j.d_count = cc11001100_hook("c.j.d_count", d.ae, "assign"), c.j.ng_count = cc11001100_hook("c.j.ng_count", d.ye, "assign"), c.j.am_count = cc11001100_hook("c.j.am_count", d.Nd, "assign"), c.j.atf_count = cc11001100_hook("c.j.atf_count", d.Id, "assign"), c.j.mdns = cc11001100_hook("c.j.mdns", bB(d.te), "assign"), c.j.alldns = cc11001100_hook("c.j.alldns", bB(d.Jd), "assign");
    c = cc11001100_hook("c", c.G(b.ib), "assign");
    if (d = cc11001100_hook("d", b.Kf, "assign")) {
      e = cc11001100_hook("e", [], "assign");
      for (var h of Wl(d)) 0 < d.get(h).length && (f = cc11001100_hook("f", d.get(h)[0], "assign"), e.push("(" + [h, f.nf, f.Qg].join() + ")"));
      c.j.fd = cc11001100_hook("c.j.fd", e.join(","), "assign");
    }
    h = cc11001100_hook("h", b.pd, "assign");
    null != h && (c.j.pgh = cc11001100_hook("c.j.pgh", h, "assign"));
    c.j.abl = cc11001100_hook("c.j.abl", b.ie, "assign");
    c.j.rr = cc11001100_hook("c.j.rr", a.G, "assign");
    void 0 !== b.exception && $r(c, b.exception).wa(1);
    return c;
  }
  function OD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", ND(a, b), "var-init");
    cs(a.A, 0 < b.errors.length || 0 < a.H.length || void 0 !== b.exception ? 0 < a.K ? Rr : Pr : 0 < a.K ? Qr : Or, c);
    if (D(a.j, Qo, 24)) {
      a.v.l.j.j?.F();
      b = cc11001100_hook("b", hC(a.v), "assign");
      var d = cc11001100_hook("d", O(wB), "var-init");
      d.m = cc11001100_hook("d.m", !!b?.optimization?.ablationFromStorage, "assign");
      b?.optimization?.ablatingThisPageview && (d.G = cc11001100_hook("d.G", !0, "assign"));
      d.L = cc11001100_hook("d.L", !!b?.optimization?.availableAbg, "assign");
      b = cc11001100_hook("b", O(wB), "assign");
      c = cc11001100_hook("c", new nB(c), "assign");
      b.A ? (c.l.sl = cc11001100_hook("c.l.sl", (b.A ?? []).join("~"), "assign"), c.l.daaos = cc11001100_hook("c.l.daaos", (b.H ?? []).join("~"), "assign"), c.l.ab = cc11001100_hook("c.l.ab", dB(b.G), "assign"), c.l.rr = cc11001100_hook("c.l.rr", dB(b.K), "assign"), c.l.oab = cc11001100_hook("c.l.oab", dB(b.F), "assign"), null != b.m && (c.l.sab = cc11001100_hook("c.l.sab", dB(b.m), "assign")), b.B && (c.l.fb = cc11001100_hook("c.l.fb", dB(b.B), "assign")), c.l.ls = cc11001100_hook("c.l.ls", dB(b.L), "assign"), cB(c, b.l.Bb()), null != b.C && (c.l.rp = cc11001100_hook("c.l.rp", dB(b.C), "assign")), null != b.v && (c.l.expl = cc11001100_hook("c.l.expl", dB(b.v), "assign")), vB(b, c)) : (b = cc11001100_hook("b", c, "assign"), d = cc11001100_hook("d", "irr".replace(RegExp("~", "g"), ""), "assign"), b.l.e = cc11001100_hook("b.l.e", b.l.e ? b.l.e + ("~" + d) : d, "assign"));
      cs(a.A, Ur, c);
    }
  }
  function PD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", O(zD), "var-init");
    if (c.j) {
      var d = cc11001100_hook("d", new Rj(), "var-init"),
        e = cc11001100_hook("e", b.Ra.filter(g => null !== g), "var-init"),
        f = cc11001100_hook("f", a.H.concat(b.errors, b.exception ? [1] : []).filter(g => null !== g), "var-init");
      Mj(Kj(Pj(Oj(Nj(Lj(Fj(Hj(Jj(Gj(d, a.F.v.slice(0).map(g => {
        var h = cc11001100_hook("h", new dj(), "var-init");
        return x(h, 1, g);
      })), e.map(g => {
        var h = cc11001100_hook("h", new gj(), "var-init");
        return x(h, 1, g);
      })), f.map(g => ej(g))), D(a.j, Zn, 23)?.j()), b.Aa).G(b.ib), b.Xa), b.sb), b.tb), a.C.map(g => g.toString())), nj(mj(lj(kj(jj(ij(hj(new oj(), b.na?.Hd), b.na?.ae), b.na?.ye), b.na?.Nd), b.na?.Id), b.na?.te), b.na?.Jd));
      D(a.j, Qo, 24) && Dj(d);
      S(lp) ? xD(c, d) : wD(c, d);
    }
  }
  function QD(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Ro(a.j) && 1 === w(Ro(a.j), 1) ? !(D(Ro(a.j), Fn, 6) && 1 <= (wd(D(Ro(a.j), Fn, 6), 3) || 0)) : !1;
  }
  function RD(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (QD(a)) {
      a = cc11001100_hook("a", a.v, "assign");
      var b = cc11001100_hook("b", zt({
        kc: cc11001100_hook("kc", !0, "object-key-init"),
        lc: cc11001100_hook("lc", !0, "object-key-init")
      }, a.j), "var-init");
      a = cc11001100_hook("a", 0 < cC(b, a.j), "assign");
    } else a = cc11001100_hook("a", a.v.j, "assign"), b = cc11001100_hook("b", yt({
      Za: cc11001100_hook("Za", !1, "object-key-init"),
      jc: cc11001100_hook("jc", !1, "object-key-init")
    }, a), "assign"), a = cc11001100_hook("a", 0 < cC(b, a), "assign");
    return a;
  }
  function SD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      S(qp) && a.v?.ba()?.A();
    } catch (c) {
      cs(a.A, Yr, $r($A(ZA(new aB(b).Pa(a.B), a.j), a.C).wa(14), c));
    }
  }
  function TD(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.j?.j()?.j() ?? !1) {
      var b = cc11001100_hook("b", JD(a), "var-init");
      a.I.init(null == b ? void 0 : b, () => {
        ID(a, "s", b);
      });
      a.I.addListener(c => {
        ID(a, "d", JD(a), c);
        a.I.xa();
        if (a.j?.j()?.v()) {
          a.j?.j()?.A();
          try {
            a.C?.includes(0) && (a.K++, ED(a), ID(a, "r", JD(a), c));
          } catch (d) {
            ID(a, "f", JD(a), c), cs(a.A, Rr, $r($A(ZA(new aB(0).Pa(a.B), a.j), a.C).wa(1), d));
          }
        }
      });
    }
  }
  function UD(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    {
      var d = cc11001100_hook("d", hC(a.v), "var-init"),
        e = cc11001100_hook("e", b.j, "var-init");
      const f = cc11001100_hook("f", e.j, "var-init"),
        g = cc11001100_hook("g", e.Ac, "var-init");
      let h = cc11001100_hook("h", e.Aa, "var-init"),
        k = cc11001100_hook("k", e.Bc, "var-init"),
        l = cc11001100_hook("l", e.errors.slice(), "var-init"),
        m = cc11001100_hook("m", e.Ra.slice(), "var-init"),
        n = cc11001100_hook("n", b.exception, "var-init");
      const q = cc11001100_hook("q", ZC(a.l).had_ads_ablation ?? !1, "var-init");
      d ? (d.numAutoAdsPlaced ? h += cc11001100_hook("h", d.numAutoAdsPlaced, "assign") : a.F.m && m.push(13), void 0 !== d.exception && (n = cc11001100_hook("n", d.exception, "assign")), d.numPostPlacementsPlaced && (k += cc11001100_hook("k", d.numPostPlacementsPlaced, "assign")), c = cc11001100_hook("c", {
        Aa: cc11001100_hook("Aa", h, "object-key-init"),
        Ac: cc11001100_hook("Ac", g, "object-key-init"),
        Bc: cc11001100_hook("Bc", k, "object-key-init"),
        ib: cc11001100_hook("ib", f, "object-key-init"),
        errors: cc11001100_hook("errors", e.errors.slice(), "object-key-init"),
        Ra: cc11001100_hook("Ra", m, "object-key-init"),
        exception: cc11001100_hook("exception", n, "object-key-init"),
        Xa: cc11001100_hook("Xa", c, "object-key-init"),
        sb: cc11001100_hook("sb", !!d.eatf, "object-key-init"),
        tb: cc11001100_hook("tb", !!d.eatfAbg, "object-key-init"),
        ie: cc11001100_hook("ie", q, "object-key-init")
      }, "assign")) : (m.push(12), a.F.m && m.push(13), c = cc11001100_hook("c", {
        Aa: cc11001100_hook("Aa", h, "object-key-init"),
        Ac: cc11001100_hook("Ac", g, "object-key-init"),
        Bc: cc11001100_hook("Bc", k, "object-key-init"),
        ib: cc11001100_hook("ib", f, "object-key-init"),
        errors: cc11001100_hook("errors", l, "object-key-init"),
        Ra: cc11001100_hook("Ra", m, "object-key-init"),
        exception: cc11001100_hook("exception", n, "object-key-init"),
        Xa: cc11001100_hook("Xa", c, "object-key-init"),
        sb: cc11001100_hook("sb", !1, "object-key-init"),
        tb: cc11001100_hook("tb", !1, "object-key-init"),
        ie: cc11001100_hook("ie", q, "object-key-init")
      }, "assign"));
    }
    c.na = cc11001100_hook("c.na", dC(a.v.j), "assign");
    if (b = cc11001100_hook("b", b.j.l, "assign")) c.Kf = cc11001100_hook("c.Kf", b, "assign");
    c.pd = cc11001100_hook("c.pd", P(a.l).scrollHeight, "assign");
    if (pl()) {
      d = cc11001100_hook("d", bn(a.v.l.l), "assign");
      b = cc11001100_hook("b", [], "assign");
      for (const f of d) {
        d = cc11001100_hook("d", {}, "assign");
        e = cc11001100_hook("e", f.I, "assign");
        for (const g of Wl(e)) d[g] = cc11001100_hook("d[g]", e.get(g), "assign");
        d = cc11001100_hook("d", {
          anchorElement: cc11001100_hook("anchorElement", ps(f), "object-key-init"),
          position: cc11001100_hook("position", f.j(), "object-key-init"),
          clearBoth: cc11001100_hook("clearBoth", f.H, "object-key-init"),
          locationType: cc11001100_hook("locationType", f.bb, "object-key-init"),
          placed: cc11001100_hook("placed", f.A, "object-key-init"),
          placementProto: cc11001100_hook("placementProto", f.v ? f.v.toJSON() : null, "object-key-init"),
          articleStructure: cc11001100_hook("articleStructure", f.B ? f.B.toJSON() : null, "object-key-init"),
          rejectionReasons: cc11001100_hook("rejectionReasons", d, "object-key-init")
        }, "assign");
        b.push(d);
      }
      ql(14, [{
        placementIdentifiers: cc11001100_hook("placementIdentifiers", b, "object-key-init")
      }, a.v.C, c.na]);
    }
    return c;
  }
  function VD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.v.j, "var-init");
    c = cc11001100_hook("c", c.googleSimulationState = cc11001100_hook("c.googleSimulationState", c.googleSimulationState || {}, "assign"), "assign");
    c.amaConfigPlacementCount = cc11001100_hook("c.amaConfigPlacementCount", b.ib, "assign");
    c.numAutoAdsPlaced = cc11001100_hook("c.numAutoAdsPlaced", b.Aa, "assign");
    c.hasAtfAd = cc11001100_hook("c.hasAtfAd", b.Xa, "assign");
    void 0 !== b.exception && (c.exception = cc11001100_hook("c.exception", b.exception, "assign"));
    null != a.v && (a = cc11001100_hook("a", DC(a.l, a.v, {
      hc: cc11001100_hook("hc", -1, "object-key-init"),
      Ab: cc11001100_hook("Ab", -1, "object-key-init"),
      Eb: cc11001100_hook("Eb", -1, "object-key-init"),
      ne: cc11001100_hook("ne", !0, "object-key-init"),
      Md: cc11001100_hook("Md", !0, "object-key-init")
    }), "assign"), null != a.j ? (c.placementPositionDiffs = cc11001100_hook("c.placementPositionDiffs", PC(a.j.value), "assign"), b = cc11001100_hook("b", OC(a.j.value), "assign"), a = cc11001100_hook("a", new Wz(), "assign"), a = cc11001100_hook("a", sd(a, 2, Xz, b), "assign"), c.placementPositionDiffsReport = cc11001100_hook("c.placementPositionDiffsReport", Qd(a), "assign")) : (b = cc11001100_hook("b", a.l.message, "assign"), c.placementPositionDiffs = cc11001100_hook("c.placementPositionDiffs", "E" + b, "assign"), a = cc11001100_hook("a", new Wz(), "assign"), a = cc11001100_hook("a", kd(a, 1, Xz, b), "assign"), c.placementPositionDiffsReport = cc11001100_hook("c.placementPositionDiffsReport", Qd(a), "assign")));
  }
  function WD(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    OD(a, {
      Aa: cc11001100_hook("Aa", 0, "object-key-init"),
      ib: cc11001100_hook("ib", void 0, "object-key-init"),
      errors: cc11001100_hook("errors", [], "object-key-init"),
      Ra: cc11001100_hook("Ra", [], "object-key-init"),
      exception: cc11001100_hook("exception", b, "object-key-init"),
      Xa: cc11001100_hook("Xa", void 0, "object-key-init"),
      sb: cc11001100_hook("sb", void 0, "object-key-init"),
      tb: cc11001100_hook("tb", void 0, "object-key-init"),
      na: cc11001100_hook("na", void 0, "object-key-init")
    });
    PD(a, {
      Aa: cc11001100_hook("Aa", 0, "object-key-init"),
      ib: cc11001100_hook("ib", void 0, "object-key-init"),
      errors: cc11001100_hook("errors", [], "object-key-init"),
      Ra: cc11001100_hook("Ra", [], "object-key-init"),
      exception: cc11001100_hook("exception", b, "object-key-init"),
      Xa: cc11001100_hook("Xa", void 0, "object-key-init"),
      sb: cc11001100_hook("sb", void 0, "object-key-init"),
      tb: cc11001100_hook("tb", void 0, "object-key-init"),
      na: cc11001100_hook("na", void 0, "object-key-init")
    });
  }
  function ID(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    b = cc11001100_hook("b", {
      r: cc11001100_hook("r", b, "object-key-init"),
      pg_h: cc11001100_hook("pg_h", P(a.l).scrollHeight, "object-key-init"),
      su: cc11001100_hook("su", a.l.location.hostname, "object-key-init"),
      d: cc11001100_hook("d", void 0 == c ? -1 : c, "object-key-init")
    }, "assign");
    void 0 !== d && (b.pg_hd = cc11001100_hook("b.pg_hd", d, "assign"));
    bs(a.A, Tr, b);
  }
  function JD(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", null, "var-init");
    a.j.j() && null != zd(a.j.j(), 19) && (b = cc11001100_hook("b", zd(a.j.j(), 19), "assign"));
    return b;
  }
  class CD {
    constructor(a, b, c, d, e, f, g, h, k, l, m) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.B = cc11001100_hook("this.B", c, "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
      this.m = cc11001100_hook("this.m", e, "assign");
      this.C = cc11001100_hook("this.C", f, "assign");
      this.V = cc11001100_hook("this.V", h || null, "assign");
      this.H = cc11001100_hook("this.H", [], "assign");
      this.I = cc11001100_hook("this.I", k, "assign");
      this.L = cc11001100_hook("this.L", l, "assign");
      this.ka = cc11001100_hook("this.ka", g, "assign");
      this.K = cc11001100_hook("this.K", 0, "assign");
      this.ba = cc11001100_hook("this.ba", m ? m : {
        url: cc11001100_hook("url", a.location.href, "object-key-init"),
        Nb: cc11001100_hook("Nb", void 0, "object-key-init")
      }, "assign");
      this.G = cc11001100_hook("this.G", "n", "assign");
    }
    Ga(a) {
      try {
        SD(this, a.j.Aa);
        const b = cc11001100_hook("b", RD(this) || QD(this) ? RD(this) : void 0, "var-init");
        Yo({
          Vc: cc11001100_hook("Vc", b, "object-key-init")
        }, this.l);
        TD(this);
        const c = cc11001100_hook("c", UD(this, a, RD(this)), "var-init");
        bd(this.j, Yn, 25) && y(D(this.j, Yn, 25), 1) && VD(this, c);
        OD(this, c);
        PD(this, c);
        al(753, () => {
          if (S(tp) && null != this.v) {
            var d = cc11001100_hook("d", DC(this.l, this.v, {
                hc: cc11001100_hook("hc", U(xp), "object-key-init"),
                Ab: cc11001100_hook("Ab", U(wp), "object-key-init"),
                Eb: cc11001100_hook("Eb", U(up), "object-key-init"),
                ne: cc11001100_hook("ne", !0, "object-key-init"),
                Md: cc11001100_hook("Md", !1, "object-key-init")
              }), "var-init"),
              e = cc11001100_hook("e", ue(c), "var-init");
            null != d.j ? (d = cc11001100_hook("d", PC(d.j.value), "assign"), e.placementPositionDiffs = cc11001100_hook("e.placementPositionDiffs", d, "assign")) : e.placementPositionDiffs = cc11001100_hook("e.placementPositionDiffs", "E" + d.l.message, "assign");
            e = cc11001100_hook("e", ND(this, e), "assign");
            cs(this.A, Sr, e);
          }
        })();
      } catch (b) {
        WD(this, b);
      }
    }
    ua(a) {
      SD(this, 0);
      WD(this, a);
    }
  }
  ;
  var XD = cc11001100_hook("XD", class extends L {
      constructor(a) {
        super(a);
      }
    }, "var-init"),
    YD = cc11001100_hook("YD", Wd(XD), "var-init");
  function ZD(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b = cc11001100_hook("b", a.localStorage.getItem("google_auto_fc_cmp_setting") || null, "var-init");
    } catch (d) {
      b = cc11001100_hook("b", null, "assign");
    }
    const c = cc11001100_hook("c", b, "var-init");
    return c ? hn(() => YD(c)) : en(null);
  }
  ;
  function $D(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.j = cc11001100_hook("this.j", a || {
      cookie: cc11001100_hook("cookie", "", "object-key-init")
    }, "assign");
  }
  p = cc11001100_hook("p", $D.prototype, "assign");
  p.set = cc11001100_hook("p.set", function (a, b, c) {
    let d,
      e,
      f,
      g = cc11001100_hook("g", !1, "var-init"),
      h;
    "object" === typeof c && (h = cc11001100_hook("h", c.al, "assign"), g = cc11001100_hook("g", c.Gg || !1, "assign"), f = cc11001100_hook("f", c.domain || void 0, "assign"), e = cc11001100_hook("e", c.path || void 0, "assign"), d = cc11001100_hook("d", c.ue, "assign"));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = cc11001100_hook("d", -1, "assign"));
    this.j.cookie = cc11001100_hook("this.j.cookie", a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1E3 * d).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : ""), "assign");
  }, "assign");
  p.get = cc11001100_hook("p.get", function (a, b) {
    const c = cc11001100_hook("c", a + "=", "var-init"),
      d = cc11001100_hook("d", (this.j.cookie || "").split(";"), "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"), f; e < d.length; e++) {
      f = cc11001100_hook("f", Pa(d[e]), "assign");
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  }, "assign");
  p.remove = cc11001100_hook("p.remove", function (a, b, c) {
    const d = cc11001100_hook("d", void 0 !== this.get(a), "var-init");
    this.set(a, "", {
      ue: cc11001100_hook("ue", 0, "object-key-init"),
      path: cc11001100_hook("path", b, "object-key-init"),
      domain: cc11001100_hook("domain", c, "object-key-init")
    });
    return d;
  }, "assign");
  p.isEmpty = cc11001100_hook("p.isEmpty", function () {
    return !this.j.cookie;
  }, "assign");
  p.Bb = cc11001100_hook("p.Bb", function () {
    return this.j.cookie ? (this.j.cookie || "").split(";").length : 0;
  }, "assign");
  p.clear = cc11001100_hook("p.clear", function () {
    var a = cc11001100_hook("a", (this.j.cookie || "").split(";"), "var-init");
    const b = cc11001100_hook("b", [], "var-init"),
      c = cc11001100_hook("c", [], "var-init");
    let d, e;
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) e = cc11001100_hook("e", Pa(a[f]), "assign"), d = cc11001100_hook("d", e.indexOf("="), "assign"), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = cc11001100_hook("a", b.length - 1, "assign"); 0 <= a; a--) this.remove(b[a]);
  }, "assign");
  function aE(a, b = window) {
    cc11001100_hook("a", a, "function-parameter");
    if (y(a, 5)) try {
      return b.localStorage;
    } catch {}
    return null;
  }
  function bE(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "null" !== a.origin;
  }
  function cE(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", y(b, 5) && bE(c) ? c.document.cookie : null, "assign");
    return null === b ? null : new $D({
      cookie: cc11001100_hook("cookie", b, "object-key-init")
    }).get(a) || "";
  }
  ;
  function dE(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 5, b);
  }
  var eE = cc11001100_hook("eE", class extends L {
    constructor() {
      super();
    }
    j() {
      return y(this, 6);
    }
  }, "var-init");
  var hE = cc11001100_hook("hE", ({
    win: a,
    nc: b,
    ke: c = !1,
    me: d = !1
  }) => {
    if (!fE({
      win: cc11001100_hook("win", a, "object-key-init"),
      nc: cc11001100_hook("nc", b, "object-key-init"),
      ke: cc11001100_hook("ke", c, "object-key-init"),
      me: cc11001100_hook("me", d, "object-key-init")
    })) return gE(a, dE(new eE(), !0));
    (b = cc11001100_hook("b", Z(aD(), 24), "assign")) ? (b = cc11001100_hook("b", dE(new eE(), Cz(b)), "assign"), a = cc11001100_hook("a", gE(a, b), "assign")) : a = cc11001100_hook("a", new fn(null, Error("tcunav")), "assign");
    return a;
  }, "var-init");
  function fE({
    win: a,
    nc: b,
    ke: c,
    me: d
  }) {
    if (!(d = cc11001100_hook("d", !d && Gz(new Kz(a)), "assign"))) {
      if (c = cc11001100_hook("c", !c, "assign")) {
        if (b) {
          a = cc11001100_hook("a", ZD(a), "assign");
          if (null != a.j) {
            if ((a = cc11001100_hook("a", a.j.value, "assign")) && null != w(a, 1)) b: switch (a = cc11001100_hook("a", w(a, 1), "assign"), a) {
              case 1:
                a = cc11001100_hook("a", !0, "assign");
                break b;
              default:
                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
            } else a = cc11001100_hook("a", !1, "assign");
          } else cl(806, a.l), a = cc11001100_hook("a", !1, "assign");
          b = cc11001100_hook("b", !a, "assign");
        }
        c = cc11001100_hook("c", b, "assign");
      }
      d = cc11001100_hook("d", c, "assign");
    }
    return d ? !0 : !1;
  }
  function gE(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (a = cc11001100_hook("a", aE(b, a), "assign")) ? en(a) : new fn(null, Error("unav"));
  }
  ;
  var iE = cc11001100_hook("iE", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  class jE {
    constructor(a, b, c, d) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.v = cc11001100_hook("this.v", d, "assign");
    }
  }
  ;
  function LD(a, {
    win: b,
    webPropertyCode: c,
    fe: d,
    Pd: e
  }) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", ev(8, b, a.j).then(f => f.runGallerify({
      win: cc11001100_hook("win", b, "object-key-init"),
      webPropertyCode: cc11001100_hook("webPropertyCode", c, "object-key-init"),
      serializedGallerifyConfig: cc11001100_hook("serializedGallerifyConfig", Qd(d), "object-key-init"),
      serializedArticleStructures: cc11001100_hook("serializedArticleStructures", e.map(g => Qd(g)), "object-key-init")
    })), "assign");
    Rk.Ba(927, a);
  }
  var kE = cc11001100_hook("kE", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }, "var-init");
  function lE({
    win: a,
    webPropertyCode: b,
    zb: c
  }) {
    if (zy(a.location, "google_auto_gallery")) {
      var d = cc11001100_hook("d", new Go(), "var-init");
      var e = cc11001100_hook("e", new Eo(), "var-init");
      e = cc11001100_hook("e", x(e, 1, !0), "assign");
      d = cc11001100_hook("d", rd(d, 3, e), "assign");
      LD(new kE(c), {
        win: cc11001100_hook("win", a, "object-key-init"),
        webPropertyCode: cc11001100_hook("webPropertyCode", b, "object-key-init"),
        fe: cc11001100_hook("fe", d, "object-key-init"),
        Pd: cc11001100_hook("Pd", [], "object-key-init")
      });
    }
  }
  ;
  function mE(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", Array.from(a.l.win.document.querySelectorAll('[id*="mobile-toggle"], [id="toggle-nav"], [class~="menu-mobile-toggle"], [class*="hamburger-show"], [class~="offcanvas-toggle"], [class~="site__header-btn"], [class~="toggle-mobile-menu"], [class~="elementor-menu-toggle"]')), "var-init");
      a.wd(b);
      for (const [c, d] of b.entries()) {
        const e = cc11001100_hook("e", c, "var-init");
        d.addEventListener("click", () => {
          var f = cc11001100_hook("f", a.j, "var-init"),
            g = cc11001100_hook("g", {
              typ: cc11001100_hook("typ", "mt", "object-key-init"),
              tbi: cc11001100_hook("tbi", e, "object-key-init"),
              ...nE(f)
            }, "var-init");
          oE(f.Z, g);
        });
      }
    } catch (b) {
      pE(a.j, `instrumentMenuToggleButton ${b}`);
    }
  }
  function qE(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (IntersectionObserver) {
      var c = cc11001100_hook("c", new Map(), "var-init");
      for (const [e, f] of b.entries()) c.set(f.rootElement, e);
      var d = cc11001100_hook("d", new IntersectionObserver(e => {
        for (const g of e) {
          e = cc11001100_hook("e", a.j, "assign");
          var f = cc11001100_hook("f", {
            typ: cc11001100_hook("typ", "mvc", "object-key-init"),
            mi: cc11001100_hook("mi", c.get(g.target), "object-key-init"),
            ir: cc11001100_hook("ir", g.intersectionRatio, "object-key-init"),
            ...nE(e)
          }, "var-init");
          oE(e.Z, f);
        }
      }, {
        threshold: cc11001100_hook("threshold", .5, "object-key-init")
      }), "var-init");
      for (const e of b) d.observe(e.rootElement);
    } else pE(a.j, "IntersectionObserver is not supported");
  }
  function rE(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (const [c, d] of b.entries()) {
      const e = cc11001100_hook("e", c, "var-init");
      b = cc11001100_hook("b", d, "assign");
      for (const [f, g] of b.we.entries()) {
        const h = cc11001100_hook("h", f, "var-init");
        g.querySelector("a")?.addEventListener("click", () => {
          var k = cc11001100_hook("k", a.j, "var-init"),
            l = cc11001100_hook("l", {
              typ: cc11001100_hook("typ", "ic", "object-key-init"),
              mi: cc11001100_hook("mi", e, "object-key-init"),
              mii: cc11001100_hook("mii", h, "object-key-init"),
              ...nE(k)
            }, "var-init");
          oE(k.Z, l);
        });
      }
    }
  }
  var tE = cc11001100_hook("tE", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
    Ye() {
      var a = cc11001100_hook("a", this.j, "var-init"),
        b = cc11001100_hook("b", {
          typ: cc11001100_hook("typ", "pv", "object-key-init"),
          ...nE(a)
        }, "var-init");
      oE(a.Z, b);
      mE(this);
      try {
        const c = cc11001100_hook("c", sE(this.l), "var-init");
        this.vd(c);
        qE(this, c);
        rE(this, c);
      } catch (c) {
        pE(this.j, `instrumentMenu ${c}`);
      }
    }
    wd(a) {
      let b = cc11001100_hook("b", 0, "var-init");
      for (const c of a) null !== c.offsetParent && b++;
      this.j.wd({
        Lg: cc11001100_hook("Lg", a.length, "object-key-init"),
        Mg: cc11001100_hook("Mg", b, "object-key-init")
      });
    }
    vd(a) {
      let b = cc11001100_hook("b", 0, "var-init");
      for (const c of a) b += cc11001100_hook("b", c.we.length, "assign");
      this.j.vd({
        dg: cc11001100_hook("dg", a.length, "object-key-init"),
        Pg: cc11001100_hook("Pg", b, "object-key-init")
      });
    }
  }, "var-init");
  function pE(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", {
      typ: cc11001100_hook("typ", "er", "object-key-init"),
      msg: cc11001100_hook("msg", b, "object-key-init"),
      ...nE(a)
    }, "assign");
    oE(a.Z, b);
  }
  function nE(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.webPropertyCode, "var-init"),
      c = cc11001100_hook("c", a.hostname, "var-init"),
      d = cc11001100_hook("d", a.l, "var-init");
    null === a.j ? (a.j = cc11001100_hook("a.j", Ni(), "assign"), a = cc11001100_hook("a", 0, "assign")) : a = cc11001100_hook("a", Ni() - a.j, "assign");
    return {
      wpc: cc11001100_hook("wpc", b, "object-key-init"),
      hst: cc11001100_hook("hst", c, "object-key-init"),
      pvsid: cc11001100_hook("pvsid", d, "object-key-init"),
      tim: cc11001100_hook("tim", a, "object-key-init"),
      dvc: cc11001100_hook("dvc", ph(), "object-key-init")
    };
  }
  var uE = cc11001100_hook("uE", class {
    constructor(a, b, c) {
      var d = cc11001100_hook("d", xh(t), "var-init");
      this.Z = cc11001100_hook("this.Z", a, "assign");
      this.webPropertyCode = cc11001100_hook("this.webPropertyCode", b, "assign");
      this.hostname = cc11001100_hook("this.hostname", c, "assign");
      this.l = cc11001100_hook("this.l", d, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
    }
    vd(a) {
      a = cc11001100_hook("a", {
        typ: cc11001100_hook("typ", "mdr", "object-key-init"),
        md: cc11001100_hook("md", a.dg, "object-key-init"),
        tmid: cc11001100_hook("tmid", a.Pg, "object-key-init"),
        ...nE(this)
      }, "assign");
      oE(this.Z, a);
    }
    wd(a) {
      a = cc11001100_hook("a", {
        typ: cc11001100_hook("typ", "mtbdr", "object-key-init"),
        tbd: cc11001100_hook("tbd", a.Lg, "object-key-init"),
        tbv: cc11001100_hook("tbv", a.Mg, "object-key-init"),
        ...nE(this)
      }, "assign");
      oE(this.Z, a);
    }
  }, "var-init");
  function sE(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", vE(Array.from(a.win.document.querySelectorAll(":not([id*=foot], [class*=foot]) > LI.menu-item"))) || vE(Array.from(a.win.document.querySelectorAll("UL[id*=nav] > LI, UL[class*=nav] > LI, UL[role*=nav] > LI, UL[aria-controls*=nav] > LI"))) || [], "assign");
    const b = cc11001100_hook("b", new Map(), "var-init");
    for (const c of a) c.parentElement && (b.has(c.parentElement) ? b.get(c.parentElement).push(c) : b.set(c.parentElement, [c]));
    return Array.from(b.entries()).map(c => ({
      rootElement: cc11001100_hook("rootElement", c[0], "object-key-init"),
      we: cc11001100_hook("we", c[1], "object-key-init")
    }));
  }
  var wE = cc11001100_hook("wE", class {
    constructor(a) {
      this.win = cc11001100_hook("this.win", a, "assign");
    }
  }, "var-init");
  function vE(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 < a.length ? a : null;
  }
  ;
  function oE(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new Hi(), "var-init");
    Zg(b, (d, e) => {
      const f = cc11001100_hook("f", c.v++, "var-init");
      Ei(c, f, Bi(e, d));
    });
    b = cc11001100_hook("b", Gi(c, a.protocol, a.domain, `${a.path}?id=${"abg::auto_menu"}&`), "assign");
    try {
      a.win.navigator.sendBeacon(b);
    } catch (d) {}
  }
  var xE = cc11001100_hook("xE", class {
    constructor(a) {
      this.win = cc11001100_hook("this.win", a, "assign");
      this.domain = cc11001100_hook("this.domain", "pagead2.googlesyndication.com", "assign");
      this.path = cc11001100_hook("this.path", "/pagead/gen_204", "assign");
      this.protocol = cc11001100_hook("this.protocol", "https:", "assign");
    }
  }, "var-init");
  var yE = cc11001100_hook("yE", "a".charCodeAt(), "var-init"),
    zE = cc11001100_hook("zE", te(wl), "var-init"),
    AE = cc11001100_hook("AE", te(xl), "var-init");
  function BE(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
    const c = cc11001100_hook("c", a.l.substring(a.j, a.j + b), "var-init");
    a.j += cc11001100_hook("a.j", b, "assign");
    return parseInt(c, 2);
  }
  function CE(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String.fromCharCode(yE + BE(a, 6)) + String.fromCharCode(yE + BE(a, 6));
  }
  function DE(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", BE(a, 12), "var-init");
    const c = cc11001100_hook("c", [], "var-init");
    for (; b--;) {
      var d = cc11001100_hook("d", !0 === !!BE(a, 1), "var-init"),
        e = cc11001100_hook("e", BE(a, 16), "var-init");
      if (d) for (d = cc11001100_hook("d", BE(a, 16), "assign"); e <= d; e++) c.push(e);else c.push(e);
    }
    c.sort((f, g) => f - g);
    return c;
  }
  function EE(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < b; e++) if (BE(a, 1)) {
      const f = cc11001100_hook("f", e + 1, "var-init");
      if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
      d.push(f);
    }
    return d;
  }
  function FE(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", BE(a, 16), "var-init");
    return !0 === !!BE(a, 1) ? (a = cc11001100_hook("a", DE(a), "assign"), a.forEach(c => {
      if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
    }), a) : EE(a, b);
  }
  class GE {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", 0, "assign");
    }
  }
  ;
  var IE = cc11001100_hook("IE", (a, b) => {
    try {
      var c = cc11001100_hook("c", lc(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join(""), "var-init");
      const d = cc11001100_hook("d", new GE(c), "var-init");
      c = cc11001100_hook("c", {}, "assign");
      c.tcString = cc11001100_hook("c.tcString", a, "assign");
      c.gdprApplies = cc11001100_hook("c.gdprApplies", !0, "assign");
      d.j += cc11001100_hook("d.j", 78, "assign");
      c.cmpId = cc11001100_hook("c.cmpId", BE(d, 12), "assign");
      c.cmpVersion = cc11001100_hook("c.cmpVersion", BE(d, 12), "assign");
      d.j += cc11001100_hook("d.j", 30, "assign");
      c.tcfPolicyVersion = cc11001100_hook("c.tcfPolicyVersion", BE(d, 6), "assign");
      c.isServiceSpecific = cc11001100_hook("c.isServiceSpecific", !!BE(d, 1), "assign");
      c.useNonStandardStacks = cc11001100_hook("c.useNonStandardStacks", !!BE(d, 1), "assign");
      c.specialFeatureOptins = cc11001100_hook("c.specialFeatureOptins", HE(EE(d, 12, AE), AE), "assign");
      c.purpose = cc11001100_hook("c.purpose", {
        consents: cc11001100_hook("consents", HE(EE(d, 24, zE), zE), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", HE(EE(d, 24, zE), zE), "object-key-init")
      }, "assign");
      c.purposeOneTreatment = cc11001100_hook("c.purposeOneTreatment", !!BE(d, 1), "assign");
      c.publisherCC = cc11001100_hook("c.publisherCC", CE(d), "assign");
      c.vendor = cc11001100_hook("c.vendor", {
        consents: cc11001100_hook("consents", HE(FE(d), b), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", HE(FE(d), b), "object-key-init")
      }, "assign");
      return c;
    } catch (d) {
      return null;
    }
  }, "var-init");
  const HE = cc11001100_hook("HE", (a, b) => {
    const c = cc11001100_hook("c", {}, "var-init");
    if (Array.isArray(b) && 0 !== b.length) for (const d of b) c[d] = cc11001100_hook("c[d]", -1 !== a.indexOf(d), "assign");else for (const d of a) c[d] = cc11001100_hook("c[d]", !0, "assign");
    delete c[0];
    return c;
  }, "var-init");
  var JE = cc11001100_hook("JE", class {
    constructor() {
      this.j = cc11001100_hook("this.j", {}, "assign");
    }
  }, "var-init");
  var KE = cc11001100_hook("KE", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var LE = cc11001100_hook("LE", class extends L {
    constructor() {
      super();
    }
  }, "var-init");
  var ME = cc11001100_hook("ME", class extends L {
      constructor() {
        super();
      }
    }, "var-init"),
    NE = cc11001100_hook("NE", [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27], "var-init");
  var OE = cc11001100_hook("OE", class {}, "var-init");
  var PE = cc11001100_hook("PE", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var QE = cc11001100_hook("QE", class extends L {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var SE = cc11001100_hook("SE", Wd(class extends L {
      constructor(a) {
        super(a, -1, RE);
      }
    }), "var-init"),
    RE = cc11001100_hook("RE", [7], "var-init");
  var TE = cc11001100_hook("TE", new class {
    constructor() {
      this.key = cc11001100_hook("this.key", "45369554", "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", !1, "assign");
      this.valueType = cc11001100_hook("this.valueType", "boolean", "assign");
    }
  }(), "var-init");
  var UE = cc11001100_hook("UE", class extends JE {
      constructor() {
        super();
        var a = cc11001100_hook("a", t.__fcexpdef || "", "var-init");
        try {
          const b = cc11001100_hook("b", JSON.parse(a)[0], "var-init");
          a = cc11001100_hook("a", "", "assign");
          for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) a += cc11001100_hook("a", String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10)), "assign");
          this.j = cc11001100_hook("this.j", JSON.parse(a), "assign");
        } catch (b) {}
      }
    }, "var-init"),
    VE;
  function WE(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", XE(a), "assign")) ? D(a, QE, 4) : null;
  }
  function XE(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", new $D(a).get("FCCDCF", ""), "assign")) {
      if (a.startsWith("%")) try {
        var b = cc11001100_hook("b", decodeURIComponent(a), "var-init");
      } catch (c) {
        YE(1), b = cc11001100_hook("b", null, "assign");
      } else b = cc11001100_hook("b", a, "assign");
    } else b = cc11001100_hook("b", null, "assign");
    try {
      return b ? SE(b) : null;
    } catch (c) {
      return YE(2), null;
    }
  }
  function YE(a) {
    cc11001100_hook("a", a, "function-parameter");
    new OE();
    var b = cc11001100_hook("b", new KE(), "var-init");
    a = cc11001100_hook("a", x(b, 7, a), "assign");
    b = cc11001100_hook("b", new LE(), "assign");
    a = cc11001100_hook("a", rd(b, 1, a), "assign");
    b = cc11001100_hook("b", new ME(), "assign");
    sd(b, 22, NE, a);
    VE || (VE = cc11001100_hook("VE", new UE(), "assign"));
    a = cc11001100_hook("a", VE.j[TE.key], "assign");
    if ("proto" === TE.valueType) try {
      JSON.parse(a);
    } catch (c) {}
  }
  ;
  function ZE(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.__tcfapiPostMessageReady || $E(new aF(a));
  }
  function $E(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l = cc11001100_hook("a.l", b => {
      const c = cc11001100_hook("c", "string" == typeof b.data, "var-init");
      let d;
      try {
        d = cc11001100_hook("d", c ? JSON.parse(b.data) : b.data, "assign");
      } catch (f) {
        return;
      }
      const e = cc11001100_hook("e", d.__tcfapiCall, "var-init");
      !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
        const h = cc11001100_hook("h", {}, "var-init");
        h.__tcfapiReturn = cc11001100_hook("h.__tcfapiReturn", "removeEventListener" === e.command ? {
          success: cc11001100_hook("success", f, "object-key-init"),
          callId: cc11001100_hook("callId", e.callId, "object-key-init")
        } : {
          returnValue: cc11001100_hook("returnValue", f, "object-key-init"),
          success: cc11001100_hook("success", g, "object-key-init"),
          callId: cc11001100_hook("callId", e.callId, "object-key-init")
        }, "assign");
        f = cc11001100_hook("f", c ? JSON.stringify(h) : h, "assign");
        b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
        return f;
      }, e.parameter);
    }, "assign");
    a.j.addEventListener("message", a.l);
    a.j.__tcfapiPostMessageReady = cc11001100_hook("a.j.__tcfapiPostMessageReady", !0, "assign");
  }
  var aF = cc11001100_hook("aF", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
    }
  }, "var-init");
  function bF(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", S(Kp), "var-init");
    a.__uspapi || a.frames.__uspapiLocator || (a = cc11001100_hook("a", new cF(a), "assign"), dF(a), b && eF(a));
  }
  function dF(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.v || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = cc11001100_hook("a.j.__uspapiManager", "fc", "assign"), zz(a.j, "__uspapiLocator"), Fa("__uspapi", (...b) => fF(a, ...b)));
  }
  function eF(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.l || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = cc11001100_hook("a.j.__tcfapiManager", "fc", "assign"), zz(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = cc11001100_hook("a.j.__tcfapiEventListeners", a.j.__tcfapiEventListeners || [], "assign"), Fa("__tcfapi", (...b) => gF(a, ...b)), ZE(a.j));
  }
  function fF(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    "function" === typeof d && "getUSPData" === b && d({
      version: cc11001100_hook("version", 1, "object-key-init"),
      uspString: cc11001100_hook("uspString", a.v, "object-key-init")
    }, !0);
  }
  function gF(a, b, c, d, e = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if ("function" === typeof d) if (c && 2 !== c) d(null, !1);else switch (c = cc11001100_hook("c", a.j.__tcfapiEventListeners, "assign"), b) {
      case "getTCData":
        !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(hF(a, e, null), !0) : d(null, !1);
        break;
      case "ping":
        d({
          gdprApplies: cc11001100_hook("gdprApplies", !0, "object-key-init"),
          cmpLoaded: cc11001100_hook("cmpLoaded", !0, "object-key-init"),
          cmpStatus: cc11001100_hook("cmpStatus", "loaded", "object-key-init"),
          displayStatus: cc11001100_hook("displayStatus", "disabled", "object-key-init"),
          apiVersion: cc11001100_hook("apiVersion", "2.0", "object-key-init"),
          cmpVersion: cc11001100_hook("cmpVersion", 1, "object-key-init"),
          cmpId: cc11001100_hook("cmpId", 300, "object-key-init")
        });
        break;
      case "addEventListener":
        b = cc11001100_hook("b", c.push(d), "assign");
        d(hF(a, null, b - 1), !0);
        break;
      case "removeEventListener":
        c[e] ? (c[e] = cc11001100_hook("c[e]", null, "assign"), d(!0)) : d(!1);
        break;
      case "getInAppTCData":
      case "getVendorList":
        d(null, !1);
    }
  }
  function hF(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a.l) return null;
    b = cc11001100_hook("b", IE(a.l, b), "assign");
    b.addtlConsent = cc11001100_hook("b.addtlConsent", null != a.m ? a.m : void 0, "assign");
    b.cmpStatus = cc11001100_hook("b.cmpStatus", "loaded", "assign");
    b.eventStatus = cc11001100_hook("b.eventStatus", "tcloaded", "assign");
    null != c && (b.listenerId = cc11001100_hook("b.listenerId", c, "assign"));
    return b;
  }
  class cF {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
      var b;
      this.v = cc11001100_hook("this.v", (b = cc11001100_hook("b", (b = cc11001100_hook("b", XE(a.document), "assign")) ? D(b, PE, 5) || null : null, "assign")) ? w(b, 2) : null, "assign");
      this.l = cc11001100_hook("this.l", (b = cc11001100_hook("b", WE(a.document), "assign")) && null != w(b, 1) ? w(b, 1) : null, "assign");
      this.m = cc11001100_hook("this.m", (a = cc11001100_hook("a", WE(a.document), "assign")) && null != w(a, 2) ? w(a, 2) : null, "assign");
    }
  }
  ;
  const iF = cc11001100_hook("iF", a => {
    const b = cc11001100_hook("b", a[0] / 255, "var-init"),
      c = cc11001100_hook("c", a[1] / 255, "var-init");
    a = cc11001100_hook("a", a[2] / 255, "assign");
    return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4));
  }, "var-init");
  var jF = cc11001100_hook("jF", (a, b) => {
    a = cc11001100_hook("a", iF(a), "assign");
    b = cc11001100_hook("b", iF(b), "assign");
    return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
  }, "var-init");
  var kF = cc11001100_hook("kF", Promise, "var-init");
  class lF {
    constructor(a) {
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    l(a, b, c) {
      this.m.then(d => {
        d.l(a, b, c);
      });
    }
    j(a, b) {
      return this.m.then(c => c.j(a, b));
    }
  }
  ;
  class mF {
    constructor(a) {
      this.data = cc11001100_hook("this.data", a, "assign");
    }
  }
  ;
  function nF(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    oF(a, b);
    return new pF(a);
  }
  class pF {
    constructor(a) {
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    l(a, b, c = []) {
      const d = cc11001100_hook("d", new MessageChannel(), "var-init");
      oF(d.port1, b);
      this.m.postMessage(a, [d.port2].concat(c));
    }
    j(a, b) {
      return new kF(c => {
        this.l(a, c, b);
      });
    }
  }
  function oF(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b && (a.onmessage = cc11001100_hook("a.onmessage", c => {
      b(new mF(c.data, nF(c.ports[0])));
    }, "assign"));
  }
  ;
  var sF = cc11001100_hook("sF", ({
    destination: a,
    Ca: b,
    origin: c,
    Ua: d = "ZNWN1d",
    onMessage: e,
    Be: f
  }) => qF({
    destination: cc11001100_hook("destination", a, "object-key-init"),
    Qf: cc11001100_hook("Qf", () => b.contentWindow, "object-key-init"),
    jg: cc11001100_hook("jg", rF(c), "object-key-init"),
    Ua: cc11001100_hook("Ua", d, "object-key-init"),
    onMessage: cc11001100_hook("onMessage", e, "object-key-init"),
    Be: cc11001100_hook("Be", f, "object-key-init")
  }), "var-init");
  const qF = cc11001100_hook("qF", ({
      destination: a,
      Qf: b,
      jg: c,
      dl: d,
      Ua: e,
      onMessage: f,
      Be: g
    }) => {
      const h = cc11001100_hook("h", Object.create(null), "var-init");
      c.forEach(k => {
        h[k] = cc11001100_hook("h[k]", !0, "assign");
      });
      return new lF(new kF((k, l) => {
        const m = cc11001100_hook("m", n => {
          n.source && n.source === b() && !0 === h[n.origin] && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(nF(n.ports[0], f)), g && g(n)));
        }, "var-init");
        a.addEventListener("message", m, !1);
      }));
    }, "var-init"),
    rF = cc11001100_hook("rF", a => {
      a = cc11001100_hook("a", "string" === typeof a ? [a] : a, "assign");
      const b = cc11001100_hook("b", Object.create(null), "var-init");
      a.forEach(c => {
        if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
        b[c] = cc11001100_hook("b[c]", !0, "assign");
      });
      return a;
    }, "var-init");
  function tF(a, b, c, d, e, f, g = null, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    try {
      var k = cc11001100_hook("k", a.localStorage, "var-init");
    } catch (r) {
      k = cc11001100_hook("k", null, "assign");
    }
    if (k) {
      if (S(sp)) var l = cc11001100_hook("l", null, "var-init");else try {
        l = cc11001100_hook("l", k.getItem("google_ama_config"), "assign");
      } catch (r) {
        l = cc11001100_hook("l", null, "assign");
      }
      try {
        var m = cc11001100_hook("m", l ? Uo(l) : null, "var-init");
      } catch (r) {
        m = cc11001100_hook("m", null, "assign");
      }
      l = cc11001100_hook("l", m, "assign");
    } else l = cc11001100_hook("l", null, "assign");
    a: {
      if (d) try {
        var n = cc11001100_hook("n", Uo(d), "var-init");
        break a;
      } catch (r) {
        RC(a, {
          cfg: cc11001100_hook("cfg", 1, "object-key-init"),
          inv: cc11001100_hook("inv", 1, "object-key-init")
        });
      }
      n = cc11001100_hook("n", null, "assign");
    }
    if (d = cc11001100_hook("d", n, "assign")) {
      if (e) {
        n = cc11001100_hook("n", new Nn(), "assign");
        rd(d, 3, n);
        l = cc11001100_hook("l", d.j() && zd(d.j(), 13) ? zd(d.j(), 13) : 1, "assign");
        x(n, 1, Date.now() + 864E5 * l);
        n = cc11001100_hook("n", Pd(d, !1), "assign");
        d.j() && (l = cc11001100_hook("l", new Mn(), "assign"), m = cc11001100_hook("m", d.j(), "assign"), m = cc11001100_hook("m", y(m, 23), "assign"), l = cc11001100_hook("l", x(l, 23, null == m ? void 0 : m), "assign"), m = cc11001100_hook("m", B(d.j(), 12, !1), "assign"), l = cc11001100_hook("l", x(l, 12, m), "assign"), m = cc11001100_hook("m", B(d.j(), 15, !1), "assign"), l = cc11001100_hook("l", x(l, 15, m), "assign"), rd(n, 15, l));
        l = cc11001100_hook("l", G(n, Bo, 1), "assign");
        for (m = cc11001100_hook("m", 0, "assign"); m < l.length; m++) x(l[m], 11, Pc);
        x(n, 22, void 0, !1);
        if (S(sp)) YC(a);else try {
          (e || a.localStorage).setItem("google_ama_config", Qd(n));
        } catch (r) {
          RC(a, {
            lserr: cc11001100_hook("lserr", 1, "object-key-init")
          });
        }
      }
      e = cc11001100_hook("e", XC(a, G(d, Xn, 7)), "assign");
      a: {
        if (e && (n = cc11001100_hook("n", w(e, 3), "assign"), l = cc11001100_hook("l", D(d, ro, 9), "assign"), n && l)) {
          b: {
            l = cc11001100_hook("l", G(l, po, 1), "assign");
            for (q of l) if (w(q, 1) == n) {
              var q = cc11001100_hook("q", D(q, oo, 2) || null, "var-init");
              break b;
            }
            q = cc11001100_hook("q", null, "assign");
          }
          if (q) break a;
        }
        q = cc11001100_hook("q", D(d, oo, 8) || new oo(), "assign");
      }
      q = cc11001100_hook("q", {
        qg: cc11001100_hook("qg", q, "object-key-init")
      }, "assign");
      e && (q.R = cc11001100_hook("q.R", e, "assign"));
      e && VC(e, 3) && (q.wb = cc11001100_hook("q.wb", [1], "assign"));
      if (7 === c.google_pgb_reactive && (e = cc11001100_hook("e", q.R, "assign"), !e || !y(e, 8))) return !1;
      $C(a, 2) && (ql(5, [d.toJSON()]), e = cc11001100_hook("e", SC(c), "assign"), f = cc11001100_hook("f", new kE(f), "assign"), c = cc11001100_hook("c", q.R, "assign"), e.google_package = cc11001100_hook("e.google_package", c && w(c, 4) || "", "assign"), BD(a, b, d, q, f, new An(["google-auto-placed"], e), g, {
        url: cc11001100_hook("url", a.location.href, "object-key-init"),
        Nb: cc11001100_hook("Nb", h, "object-key-init")
      }));
      return !0;
    }
    l && (RC(a, {
      cfg: cc11001100_hook("cfg", 1, "object-key-init"),
      cl: cc11001100_hook("cl", 1, "object-key-init")
    }), YC(a));
    return !1;
  }
  ;
  var vF = cc11001100_hook("vF", a => {
    const b = cc11001100_hook("b", a.D, "var-init");
    null == b.google_ad_output && (b.google_ad_output = cc11001100_hook("b.google_ad_output", "html", "assign"));
    if (null != b.google_ad_client) {
      var c;
      (c = cc11001100_hook("c", String(b.google_ad_client), "assign")) ? (c = cc11001100_hook("c", c.toLowerCase(), "assign"), "ca-" != c.substring(0, 3) && (c = cc11001100_hook("c", "ca-" + c, "assign"))) : c = cc11001100_hook("c", "", "assign");
      b.google_ad_client = cc11001100_hook("b.google_ad_client", c, "assign");
    }
    null != b.google_ad_slot && (b.google_ad_slot = cc11001100_hook("b.google_ad_slot", String(b.google_ad_slot), "assign"));
    b.google_webgl_support = cc11001100_hook("b.google_webgl_support", !!hg.WebGLRenderingContext, "assign");
    b.google_ad_section = cc11001100_hook("b.google_ad_section", b.google_ad_section || b.google_ad_region || "", "assign");
    b.google_country = cc11001100_hook("b.google_country", b.google_country || b.google_gl || "", "assign");
    c = cc11001100_hook("c", new Date().getTime(), "assign");
    Array.isArray(b.google_color_bg) && (b.google_color_bg = cc11001100_hook("b.google_color_bg", uF(a, b.google_color_bg, c), "assign"));
    Array.isArray(b.google_color_text) && (b.google_color_text = cc11001100_hook("b.google_color_text", uF(a, b.google_color_text, c), "assign"));
    Array.isArray(b.google_color_link) && (b.google_color_link = cc11001100_hook("b.google_color_link", uF(a, b.google_color_link, c), "assign"));
    Array.isArray(b.google_color_url) && (b.google_color_url = cc11001100_hook("b.google_color_url", uF(a, b.google_color_url, c), "assign"));
    Array.isArray(b.google_color_border) && (b.google_color_border = cc11001100_hook("b.google_color_border", uF(a, b.google_color_border, c), "assign"));
    Array.isArray(b.google_color_line) && (b.google_color_line = cc11001100_hook("b.google_color_line", uF(a, b.google_color_line, c), "assign"));
  }, "var-init");
  function uF(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.j |= cc11001100_hook("a.j", 2, "assign");
    return b[c % b.length];
  }
  ;
  function wF(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Rk, "var-init"),
      d;
    var e;
    d = cc11001100_hook("d", (e = cc11001100_hook("e", (e = cc11001100_hook("e", Kh(), "assign")) && (d = cc11001100_hook("d", e.initialLayoutRect, "assign")) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new Eh(d.left, d.top, d.width, d.height) : null, "assign")) ? new qg(e.left, e.top) : (d = cc11001100_hook("d", Nh(), "assign")) && ua(d.rootBounds) ? new qg(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null, "assign");
    if (d) return d;
    try {
      var f = cc11001100_hook("f", new qg(0, 0), "var-init"),
        g = cc11001100_hook("g", Ag(b), "var-init");
      var h = cc11001100_hook("h", g ? Dg(g) : window, "var-init");
      if (Rb(h, "parent")) {
        do {
          if (h == a) var k = cc11001100_hook("k", $h(b), "var-init");else {
            var l = cc11001100_hook("l", Zh(b), "var-init");
            k = cc11001100_hook("k", new qg(l.left, l.top), "assign");
          }
          g = cc11001100_hook("g", k, "assign");
          f.x += cc11001100_hook("f.x", g.x, "assign");
          f.y += cc11001100_hook("f.y", g.y, "assign");
        } while (h && h != a && h != h.parent && (b = cc11001100_hook("b", h.frameElement, "assign")) && (h = cc11001100_hook("h", h.parent, "assign")));
      }
      return f;
    } catch (m) {
      return c.ia(888, m), new qg(-12245933, -12245933);
    }
  }
  ;
  var xF = cc11001100_hook("xF", class extends L {
    constructor(a) {
      super(a);
    }
    j() {
      return B(this, 6);
    }
    v() {
      return B(this, 7);
    }
  }, "var-init");
  var zF = cc11001100_hook("zF", class extends L {
      constructor(a) {
        super(a, -1, yF);
      }
      j() {
        return gd(this, 1, Yc);
      }
    }, "var-init"),
    yF = cc11001100_hook("yF", [1], "var-init");
  var BF = cc11001100_hook("BF", class extends L {
      constructor(a) {
        super(a, -1, AF);
      }
    }, "var-init"),
    AF = cc11001100_hook("AF", [19], "var-init"),
    CF = cc11001100_hook("CF", [13, 14], "var-init");
  function DF(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b && !a.j && (a.j = cc11001100_hook("a.j", b.split(":").find(c => 0 === c.indexOf("ID=")) || null, "assign"));
  }
  var EF = cc11001100_hook("EF", class {
      constructor() {
        this.j = cc11001100_hook("this.j", null, "assign");
        this.l = cc11001100_hook("this.l", {
          [3]: {},
          [4]: {},
          [5]: {}
        }, "assign");
        const a = cc11001100_hook("a", b => this.j ? ah(`${b} + ${this.j}`) % 1E3 : void 0, "var-init");
        this.l[4] = cc11001100_hook("this.l[4]", {
          [9]: cc11001100_hook(9, (...b) => a(b[0]), "object-key-init")
        }, "assign");
      }
    }, "var-init"),
    FF;
  let GF = cc11001100_hook("GF", void 0, "var-init");
  function HF() {
    Vd(GF, Td);
    return GF;
  }
  ;
  function IF(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.getItem("google_adsense_settings"), "var-init");
      if (!b) return {};
      const c = cc11001100_hook("c", JSON.parse(b), "var-init");
      return c !== Object(c) ? {} : qe(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d));
    } catch (b) {
      return {};
    }
  }
  ;
  function JF(a = t) {
    return a.ggeac || (a.ggeac = cc11001100_hook("a.ggeac", {}, "assign"));
  }
  ;
  function KF(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  ;
  function LF(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j = cc11001100_hook("a.j", Nk(14, b, () => {}), "assign");
  }
  class MF {
    constructor() {
      this.j = cc11001100_hook("this.j", () => {}, "assign");
    }
  }
  ;
  function NF(a = JF()) {
    Ok(O(Pk), a);
    OF(a);
    LF(O(MF), a);
    O(Tq).v();
  }
  function OF(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", O(Tq), "var-init");
    b.j = cc11001100_hook("b.j", (c, d) => Nk(5, a, () => !1)(c, d, 1), "assign");
    b.l = cc11001100_hook("b.l", (c, d) => Nk(6, a, () => 0)(c, d, 1), "assign");
    b.m = cc11001100_hook("b.m", (c, d) => Nk(7, a, () => "")(c, d, 1), "assign");
    b.A = cc11001100_hook("b.A", (c, d) => Nk(8, a, () => [])(c, d, 1), "assign");
    b.v = cc11001100_hook("b.v", () => {
      Nk(15, a, () => {})(1);
    }, "assign");
  }
  ;
  function PF(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", O(Pk).l(a), "var-init");
    a = cc11001100_hook("a", vD(O(zD), a, b), "assign");
    sl.Ba(1085, a);
  }
  var QF = cc11001100_hook("QF", a => {
    const b = cc11001100_hook("b", O(Pk).j(), "var-init");
    a = cc11001100_hook("a", ZC(a), "assign");
    a.eids || (a.eids = cc11001100_hook("a.eids", [], "assign"));
    return b.concat(a.eids).join(",");
  }, "var-init");
  function RF(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return c ? cE(b, c, a.j) : null;
  }
  function SF(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (d) {
      var e = cc11001100_hook("e", {
        ue: cc11001100_hook("ue", Math.max(w(c, 2) - Date.now() / 1E3, 0), "object-key-init"),
        path: cc11001100_hook("path", w(c, 3), "object-key-init"),
        domain: cc11001100_hook("domain", w(c, 4), "object-key-init"),
        Gg: cc11001100_hook("Gg", !1, "object-key-init")
      }, "var-init");
      a = cc11001100_hook("a", a.j, "assign");
      y(d, 5) && bE(a) && new $D(a.document).set(b, w(c, 1), e);
    }
  }
  function TF(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (c && cE(b, c, a.j)) for (const e of UF(a.j.location.hostname)) {
      var d = cc11001100_hook("d", a.j, "var-init");
      y(c, 5) && bE(d) && new $D(d.document).remove(b, "/", e);
    }
  }
  var VF = cc11001100_hook("VF", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
    }
  }, "var-init");
  function UF(a) {
    cc11001100_hook("a", a, "function-parameter");
    if ("localhost" === a) return ["localhost"];
    a = cc11001100_hook("a", a.split("."), "assign");
    if (2 > a.length) return [];
    const b = cc11001100_hook("b", [], "var-init");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length - 1; ++c) b.push(a.slice(c).join("."));
    return b;
  }
  ;
  function WF(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return al(629, function (d) {
      delete a._gfp_s_;
      if (!d) throw Error("Invalid JSONP response");
      d = cc11001100_hook("d", d._cookies_, "assign");
      if (!d) return Promise.resolve();
      if (0 === d.length) throw Error("Invalid JSONP response");
      for (const f of d) {
        var e = cc11001100_hook("e", f._domain_, "var-init");
        const g = cc11001100_hook("g", f._value_, "var-init"),
          h = cc11001100_hook("h", f._expires_, "var-init"),
          k = cc11001100_hook("k", f._path_, "var-init");
        d = cc11001100_hook("d", f._version_ || 1, "assign");
        if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
        e = cc11001100_hook("e", $f(Zf(Yf(Xf(new ag(), g), h), k), e), "assign");
        switch (d) {
          case 1:
            SF(c, "__gads", e, b);
            break;
          case 2:
            SF(c, "__gpi", e, b);
        }
      }
      return Promise.resolve();
    });
  }
  function XF(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    let d;
    if (0 === a.l) {
      if (RF(a, "__gads", b)) var e = cc11001100_hook("e", !0, "var-init");else if (e = cc11001100_hook("e", a.j, "assign"), y(b, 5) && bE(e) && new $D(e.document).set("GoogleAdServingTest", "Good", void 0), e = cc11001100_hook("e", "Good" === cE("GoogleAdServingTest", b, a.j), "assign")) {
        var f = cc11001100_hook("f", a.j, "var-init");
        y(b, 5) && bE(f) && new $D(f.document).remove("GoogleAdServingTest", void 0, void 0);
      }
      a.l = cc11001100_hook("a.l", e ? 2 : 1, "assign");
    }
    2 === a.l && (d = cc11001100_hook("d", WF(c, b, a), "assign"));
    c._gfp_p_ = cc11001100_hook("c._gfp_p_", !0, "assign");
    return d;
  }
  function YF(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    d = cc11001100_hook("d", {
      domain: cc11001100_hook("domain", c.location.hostname, "object-key-init"),
      callback: cc11001100_hook("callback", "_gfp_s_", "object-key-init"),
      client: cc11001100_hook("client", d, "object-key-init")
    }, "assign");
    var e = cc11001100_hook("e", RF(b, "__gads", a), "var-init");
    e && (d.cookie = cc11001100_hook("d.cookie", e, "assign"));
    (e = cc11001100_hook("e", RF(b, "__gpi", a), "assign")) && !e.includes("&") && (d.gpic = cc11001100_hook("d.gpic", e, "assign"));
    const f = cc11001100_hook("f", Fe(Ie(ae(be("https://partner.googleadservices.com/gampad/cookie.js"))), d), "var-init"),
      g = cc11001100_hook("g", XF(b, a, c), "var-init");
    g ? new Promise(h => {
      c._gfp_s_ = cc11001100_hook("c._gfp_s_", k => {
        g(k).then(h);
      }, "assign");
      Vg(c.document, f);
    }) : Promise.resolve();
  }
  function ZF(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    "_gfp_p_" in b || (b._gfp_p_ = cc11001100_hook("b._gfp_p_", !1, "assign"), "_gfp_a_" in b || (b._gfp_a_ = cc11001100_hook("b._gfp_a_", !0, "assign")));
    const d = cc11001100_hook("d", new VF(b), "var-init");
    a: {
      c = cc11001100_hook("c", b.google_ad_client || c, "assign");
      if (!S(Dp)) {
        var e = cc11001100_hook("e", b._gfp_a_, "var-init");
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (!e) {
          Promise.resolve();
          break a;
        }
      }
      e = cc11001100_hook("e", b._gfp_p_, "assign");
      if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
      e ? Promise.resolve() : YF(a, d, b, c);
    }
    a = cc11001100_hook("a", RF(d, "__gads", a) || "", "assign");
    FF || (FF = cc11001100_hook("FF", new EF(), "assign"));
    b = cc11001100_hook("b", FF, "assign");
    DF(b, a);
    a = cc11001100_hook("a", b.l, "assign");
    O(MF).j(a);
    PF(20);
    PF(17);
  }
  ;
  function $F(a) {
    cc11001100_hook("a", a, "function-parameter");
    S(Zp) && (a.easpi = cc11001100_hook("a.easpi", S(Zp), "assign"), S(Cq) && (a.easpa = cc11001100_hook("a.easpa", !0, "assign")), a.asntp = cc11001100_hook("a.asntp", 0, "assign"), a.asntpv = cc11001100_hook("a.asntpv", 0, "assign"), a.asntpl = cc11001100_hook("a.asntpl", 0, "assign"), a.asntpm = cc11001100_hook("a.asntpm", 0, "assign"), a.asntpc = cc11001100_hook("a.asntpc", 1E3, "assign"), a.asna = cc11001100_hook("a.asna", 5, "assign"), a.asnd = cc11001100_hook("a.asnd", 5, "assign"), a.asnp = cc11001100_hook("a.asnp", 5, "assign"), a.asns = cc11001100_hook("a.asns", 5, "assign"), S(Jq) || (a.asmat = cc11001100_hook("a.asmat", U($p), "assign")), a.asptt = cc11001100_hook("a.asptt", -1, "assign"), a.asro = cc11001100_hook("a.asro", S(Qq) ? S(bq) : S(Nq), "assign"), S(Mq) && (a.ascet = cc11001100_hook("a.ascet", !0, "assign")), S(Oq) || (a.asrc = cc11001100_hook("a.asrc", !1, "assign")), S(Xp) && (a.asbu = cc11001100_hook("a.asbu", !0, "assign")), S(Jq) && (a.aseb = cc11001100_hook("a.aseb", !0, "assign")), 1 > U(Kq) && (a.asla = cc11001100_hook("a.asla", U(Kq), "assign")), 1 > U(Dq) && (a.asaa = cc11001100_hook("a.asaa", U(Dq), "assign")), S(eq) || (a.asupm = cc11001100_hook("a.asupm", !0, "assign")));
  }
  ;
  function aG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return hw({
      J: cc11001100_hook("J", a, "object-key-init"),
      hd: cc11001100_hook("hd", 3E3, "object-key-init"),
      kd: cc11001100_hook("kd", a.innerWidth > Gl ? 650 : 0, "object-key-init"),
      Z: cc11001100_hook("Z", Qk, "object-key-init"),
      Sd: cc11001100_hook("Sd", b, "object-key-init")
    });
  }
  ;
  var bG = cc11001100_hook("bG", a => {
    let b = cc11001100_hook("b", 0, "var-init");
    try {
      b |= cc11001100_hook("b", a != a.top ? 512 : 0, "assign"), b |= cc11001100_hook("b", Hl(a, 1E4), "assign");
    } catch (c) {
      b |= cc11001100_hook("b", 32, "assign");
    }
    return b;
  }, "var-init");
  var cG = cc11001100_hook("cG", a => {
    let b = cc11001100_hook("b", 0, "var-init");
    try {
      b |= cc11001100_hook("b", a != a.top ? 512 : 0, "assign"), b |= cc11001100_hook("b", Hl(a, 1E4), "assign");
    } catch (c) {
      b |= cc11001100_hook("b", 32, "assign");
    }
    return b;
  }, "var-init");
  var eG = cc11001100_hook("eG", (a, b, c, d = !1) => 0 == dG(a, b, c, d), "var-init"),
    dG = cc11001100_hook("dG", (a, b, c, d = !1) => {
      let e = cc11001100_hook("e", 0, "var-init");
      try {
        e |= cc11001100_hook("e", a != a.top ? 512 : 0, "assign");
        e |= cc11001100_hook("e", fG(a, d), "assign");
        e |= cc11001100_hook("e", Hl(a, 2500), "assign");
        if (S(rq)) {
          const h = cc11001100_hook("h", P(a).clientHeight, "var-init");
          e |= cc11001100_hook("e", h ? 320 > h ? 2097152 : 0 : 1073741824, "assign");
        }
        e |= cc11001100_hook("e", Il(a), "assign");
        var f;
        if (f = cc11001100_hook("f", 0 < c, "assign")) {
          var g = cc11001100_hook("g", fA(b, c), "var-init");
          f = cc11001100_hook("f", !(g && 1 > g.length), "assign");
        }
        f && (e |= cc11001100_hook("e", 134217728, "assign"));
      } catch (h) {
        e |= cc11001100_hook("e", 32, "assign");
      }
      return e;
    }, "var-init"),
    fG = cc11001100_hook("fG", (a, b = !1) => {
      var c;
      (c = cc11001100_hook("c", !a.navigator, "assign")) || (b && (b = cc11001100_hook("b", a.navigator, "assign"), b = cc11001100_hook("b", "brave" in b && "isBrave" in b.brave || !1, "assign")), c = cc11001100_hook("c", b, "assign"));
      return c || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
    }, "var-init");
  function gG(a, b, c, d = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!S(uq)) return 32;
    let e = cc11001100_hook("e", a != a.top ? 512 : 0, "var-init");
    iw(a.navigator?.userAgent) && (e |= cc11001100_hook("e", 1048576, "assign"));
    const f = cc11001100_hook("f", a.innerWidth, "var-init");
    1200 > f && (e |= cc11001100_hook("e", 65536, "assign"));
    const g = cc11001100_hook("g", a.innerHeight, "var-init");
    650 > g && (e |= cc11001100_hook("e", 2097152, "assign"));
    d && 0 === e && (d = cc11001100_hook("d", 3 === d ? "left" : "right", "assign"), (b = cc11001100_hook("b", hG({
      J: cc11001100_hook("J", a, "object-key-init"),
      re: cc11001100_hook("re", b, "object-key-init"),
      Pe: cc11001100_hook("Pe", 1, "object-key-init"),
      position: cc11001100_hook("position", d, "object-key-init"),
      O: cc11001100_hook("O", f, "object-key-init"),
      U: cc11001100_hook("U", g, "object-key-init"),
      Ka: cc11001100_hook("Ka", new Set(), "object-key-init"),
      minWidth: cc11001100_hook("minWidth", 120, "object-key-init"),
      minHeight: cc11001100_hook("minHeight", 500, "object-key-init")
    }), "assign")) ? c && Dl(a).j.set(d, `${b.width}x${b.height}_${String(d).charAt(0)}`) : e |= cc11001100_hook("e", 16, "assign"));
    return e;
  }
  function iG(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (S(Rp)) return [...Dl(a).j.values()].join("|");
    if (0 !== gG(a, !0, !1)) return "";
    const b = cc11001100_hook("b", [], "var-init"),
      c = cc11001100_hook("c", a.innerWidth, "var-init"),
      d = cc11001100_hook("d", a.innerHeight, "var-init");
    for (const e of ["left", "right"]) {
      const f = cc11001100_hook("f", hG({
        J: cc11001100_hook("J", a, "object-key-init"),
        re: cc11001100_hook("re", !0, "object-key-init"),
        Pe: cc11001100_hook("Pe", 1, "object-key-init"),
        position: cc11001100_hook("position", e, "object-key-init"),
        O: cc11001100_hook("O", c, "object-key-init"),
        U: cc11001100_hook("U", d, "object-key-init"),
        Ka: cc11001100_hook("Ka", new Set(), "object-key-init"),
        minWidth: cc11001100_hook("minWidth", 120, "object-key-init"),
        minHeight: cc11001100_hook("minHeight", 500, "object-key-init")
      }), "var-init");
      f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`);
    }
    return b.join("|");
  }
  function jG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null !== Mg(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c));
  }
  function kG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Mg(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position);
  }
  function lG(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (const c of a.document.querySelectorAll("*")) {
      const d = cc11001100_hook("d", a.getComputedStyle(c, null), "var-init");
      "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c);
    }
    return b;
  }
  function mG(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Math.round(10 * Math.round(a / 10));
  }
  function nG(a) {
    cc11001100_hook("a", a, "function-parameter");
    return `${a.position}-${mG(a.O)}x${mG(a.U)}-${mG(a.scrollY + a.jb)}Y`;
  }
  function oG(a) {
    cc11001100_hook("a", a, "function-parameter");
    return `f-${nG({
      position: cc11001100_hook("position", a.position, "object-key-init"),
      jb: cc11001100_hook("jb", a.jb, "object-key-init"),
      scrollY: cc11001100_hook("scrollY", 0, "object-key-init"),
      O: cc11001100_hook("O", a.O, "object-key-init"),
      U: cc11001100_hook("U", a.U, "object-key-init")
    })}`;
  }
  function pG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", Math.min(a ?? Infinity, b ?? Infinity), "assign");
    return Infinity !== a ? a : 0;
  }
  function qG(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", Dl(c.J).sideRailProcessedFixedElements, "var-init");
    if (!d.has(a)) {
      var e = cc11001100_hook("e", a.getBoundingClientRect(), "var-init");
      if (e) {
        var f = cc11001100_hook("f", Math.max(e.top - 10, 0), "var-init"),
          g = cc11001100_hook("g", Math.min(e.bottom + 10, c.U), "var-init"),
          h = cc11001100_hook("h", Math.max(e.left - 10, 0), "var-init");
        e = cc11001100_hook("e", Math.min(e.right + 10, c.O), "assign");
        for (var k = cc11001100_hook("k", .3 * c.O, "var-init"); f <= g; f += cc11001100_hook("f", 10, "assign")) {
          if (0 < e && h < k) {
            var l = cc11001100_hook("l", oG({
              position: cc11001100_hook("position", "left", "object-key-init"),
              jb: cc11001100_hook("jb", f, "object-key-init"),
              O: cc11001100_hook("O", c.O, "object-key-init"),
              U: cc11001100_hook("U", c.U, "object-key-init")
            }), "var-init");
            b.set(l, pG(b.get(l), h));
          }
          if (h < c.O && e > c.O - k) {
            l = cc11001100_hook("l", oG({
              position: cc11001100_hook("position", "right", "object-key-init"),
              jb: cc11001100_hook("jb", f, "object-key-init"),
              O: cc11001100_hook("O", c.O, "object-key-init"),
              U: cc11001100_hook("U", c.U, "object-key-init")
            }), "assign");
            const m = cc11001100_hook("m", c.O - e, "var-init");
            b.set(l, pG(b.get(l), m));
          }
        }
        d.add(a);
      }
    }
  }
  function hG(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (1200 > a.O || 650 > a.U) return null;
    var b = cc11001100_hook("b", Dl(a.J).sideRailAvailableSpace, "var-init");
    if (!a.re) {
      var c = cc11001100_hook("c", {
          J: cc11001100_hook("J", a.J, "object-key-init"),
          O: cc11001100_hook("O", a.O, "object-key-init"),
          U: cc11001100_hook("U", a.U, "object-key-init"),
          Ka: cc11001100_hook("Ka", a.Ka, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", `f-${mG(c.O)}x${mG(c.U)}`, "var-init");
      if (!b.has(d)) {
        b.set(d, 0);
        Dl(c.J).sideRailProcessedFixedElements.clear();
        d = cc11001100_hook("d", new Set([...Array.from(c.J.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...c.Ka]), "assign");
        for (var e of lG(c.J)) jG(e, d) || qG(e, b, c);
      }
    }
    c = cc11001100_hook("c", [], "assign");
    d = cc11001100_hook("d", .9 * a.U, "assign");
    var f = cc11001100_hook("f", Ol(a.J), "var-init"),
      g = cc11001100_hook("g", e = cc11001100_hook("e", (a.U - d) / 2, "assign"), "var-init"),
      h = cc11001100_hook("h", d / 7, "var-init");
    for (var k = cc11001100_hook("k", 0, "var-init"); 8 > k; k++) {
      var l = cc11001100_hook("l", c, "var-init"),
        m = cc11001100_hook("m", l.push, "var-init");
      a: {
        var n = cc11001100_hook("n", g, "var-init");
        var q = cc11001100_hook("q", a.position, "var-init"),
          r = cc11001100_hook("r", b, "var-init"),
          u = cc11001100_hook("u", {
            J: cc11001100_hook("J", a.J, "object-key-init"),
            O: cc11001100_hook("O", a.O, "object-key-init"),
            U: cc11001100_hook("U", a.U, "object-key-init"),
            Ka: cc11001100_hook("Ka", a.Ka, "object-key-init")
          }, "var-init");
        const z = cc11001100_hook("z", oG({
            position: cc11001100_hook("position", q, "object-key-init"),
            jb: cc11001100_hook("jb", n, "object-key-init"),
            O: cc11001100_hook("O", u.O, "object-key-init"),
            U: cc11001100_hook("U", u.U, "object-key-init")
          }), "var-init"),
          A = cc11001100_hook("A", nG({
            position: cc11001100_hook("position", q, "object-key-init"),
            jb: cc11001100_hook("jb", n, "object-key-init"),
            scrollY: cc11001100_hook("scrollY", f, "object-key-init"),
            O: cc11001100_hook("O", u.O, "object-key-init"),
            U: cc11001100_hook("U", u.U, "object-key-init")
          }), "var-init");
        if (r.has(A)) {
          n = cc11001100_hook("n", pG(r.get(z), r.get(A)), "assign");
          break a;
        }
        const I = cc11001100_hook("I", "left" === q ? 20 : u.O - 20, "var-init");
        let E = cc11001100_hook("E", I, "var-init");
        q = cc11001100_hook("q", .3 * u.O / 5 * ("left" === q ? 1 : -1), "assign");
        for (let F = cc11001100_hook("F", 0, "var-init"); 6 > F; F++) {
          const H = cc11001100_hook("H", uw(u.J.document, Math.round(E), Math.round(n)), "var-init");
          var C = cc11001100_hook("C", jG(H, u.Ka), "var-init");
          const T = cc11001100_hook("T", kG(H, u.J), "var-init");
          if (!C && null !== T) {
            qG(T, r, u);
            r.delete(A);
            break;
          }
          C || (C = cc11001100_hook("C", H.offsetHeight >= .25 * u.U, "assign"), C = cc11001100_hook("C", H.offsetWidth >= .9 * u.O && C, "assign"));
          if (C) r.set(A, Math.round(Math.abs(E - I) + 20));else if (E !== I) E -= cc11001100_hook("E", q, "assign"), q /= cc11001100_hook("q", 2, "assign");else {
            r.set(A, 0);
            break;
          }
          E += cc11001100_hook("E", q, "assign");
        }
        n = cc11001100_hook("n", pG(r.get(z), r.get(A)), "assign");
      }
      m.call(l, n);
      g += cc11001100_hook("g", h, "assign");
    }
    b = cc11001100_hook("b", a.Pe, "assign");
    f = cc11001100_hook("f", a.position, "assign");
    d = cc11001100_hook("d", Math.round(d / 8), "assign");
    e = cc11001100_hook("e", Math.round(e), "assign");
    g = cc11001100_hook("g", a.minWidth, "assign");
    a = cc11001100_hook("a", a.minHeight, "assign");
    m = cc11001100_hook("m", [], "assign");
    h = cc11001100_hook("h", Array(c.length).fill(0), "assign");
    for (l = cc11001100_hook("l", 0, "assign"); l < c.length; l++) {
      for (; 0 !== m.length && c[m[m.length - 1]] >= c[l];) m.pop();
      h[l] = cc11001100_hook("h[l]", 0 === m.length ? 0 : m[m.length - 1] + 1, "assign");
      m.push(l);
    }
    m = cc11001100_hook("m", [], "assign");
    k = cc11001100_hook("k", c.length - 1, "assign");
    l = cc11001100_hook("l", Array(c.length).fill(0), "assign");
    for (n = cc11001100_hook("n", k, "assign"); 0 <= n; n--) {
      for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
      l[n] = cc11001100_hook("l[n]", 0 === m.length ? k : m[m.length - 1] - 1, "assign");
      m.push(n);
    }
    m = cc11001100_hook("m", null, "assign");
    for (k = cc11001100_hook("k", 0, "assign"); k < c.length; k++) if (n = cc11001100_hook("n", {
      position: cc11001100_hook("position", f, "object-key-init"),
      width: cc11001100_hook("width", Math.round(c[k]), "object-key-init"),
      height: cc11001100_hook("height", Math.round((l[k] - h[k] + 1) * d), "object-key-init"),
      offsetY: cc11001100_hook("offsetY", e + h[k] * d, "object-key-init")
    }, "assign"), r = cc11001100_hook("r", n.width >= g && n.height >= a, "assign"), 0 === b && r) {
      m = cc11001100_hook("m", n, "assign");
      break;
    } else 1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = cc11001100_hook("m", n, "assign"));
    return m;
  }
  ;
  const rG = cc11001100_hook("rG", {
    [27]: cc11001100_hook(27, 512, "object-key-init"),
    [26]: cc11001100_hook(26, 128, "object-key-init")
  }, "var-init");
  var sG = cc11001100_hook("sG", (a, b, c, d) => {
      switch (c) {
        case 1:
        case 2:
          return 0 === aG(a, c);
        case 3:
        case 4:
          return 0 === gG(a, !1, !1, c);
        case 8:
          return eG(a, d, "on" === b.google_adtest || zy(a.location, "google_ia_debug") ? -1 : U(Up), S(Hp));
        case 9:
          return b = cc11001100_hook("b", !("on" === b.google_adtest || zy(a.location, "google_scr_debug")), "assign"), !gA(a, b, d);
        case 30:
          return 0 == VB(a);
        case 26:
          return 0 == cG(a);
        case 27:
          return 0 === bG(a);
        case 40:
          return !0;
        default:
          return !1;
      }
    }, "var-init"),
    tG = cc11001100_hook("tG", (a, b, c, d) => {
      switch (c) {
        case 0:
        case 40:
        case 10:
        case 11:
          return 0;
        case 1:
        case 2:
          return aG(a, c);
        case 3:
        case 4:
          return gG(a, S(Sp), S(Rp), c);
        case 8:
          return dG(a, d, "on" === b.google_adtest || zy(a.location, "google_ia_debug") ? -1 : U(Up), S(Hp));
        case 9:
          return gA(a, !("on" === b.google_adtest || zy(a.location, "google_scr_debug")), d);
        case 16:
          return nr(b, a) ? 0 : 8388608;
        case 30:
          return VB(a);
        case 26:
          return cG(a);
        case 27:
          return bG(a);
        default:
          return 32;
      }
    }, "var-init"),
    uG = cc11001100_hook("uG", (a, b, c) => {
      const d = cc11001100_hook("d", b.google_reactive_ad_format, "var-init");
      if (!re(d)) return !1;
      a = cc11001100_hook("a", Ug(a), "assign");
      if (!a || !sG(a, b, d, c)) return !1;
      b = cc11001100_hook("b", Dl(a), "assign");
      if (Ml(b, d)) return !1;
      b.adCount[d] || (b.adCount[d] = cc11001100_hook("b.adCount[d]", 0, "assign"));
      b.adCount[d]++;
      return !0;
    }, "var-init"),
    wG = cc11001100_hook("wG", a => {
      const b = cc11001100_hook("b", a.google_reactive_ad_format, "var-init");
      return !a.google_reactive_ads_config && vG(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b;
    }, "var-init"),
    xG = cc11001100_hook("xG", a => {
      if (!a.hash) return null;
      let b = cc11001100_hook("b", null, "var-init");
      Zg(wy, c => {
        !b && zy(a, c) && (b = cc11001100_hook("b", xy[c], "assign"));
      });
      return b;
    }, "var-init"),
    zG = cc11001100_hook("zG", (a, b) => {
      const c = cc11001100_hook("c", Dl(a).tagSpecificState[1] || null, "var-init");
      null != c && null == c.debugCard && Zg(yy, d => {
        !c.debugCardRequested && "number" === typeof d && Cy(d, a.location) && (c.debugCardRequested = cc11001100_hook("c.debugCardRequested", !0, "assign"), yG(a, b, e => {
          c.debugCard = cc11001100_hook("c.debugCard", e.createDebugCard(d, a), "assign");
        }));
      });
    }, "var-init"),
    BG = cc11001100_hook("BG", (a, b, c) => {
      if (!b) return null;
      const d = cc11001100_hook("d", Dl(b), "var-init");
      let e = cc11001100_hook("e", 0, "var-init");
      Zg(se, f => {
        const g = cc11001100_hook("g", rG[f], "var-init");
        g && 0 === AG(a, b, f, c) && (e |= cc11001100_hook("e", g, "assign"));
      });
      d.wasPlaTagProcessed && (e |= cc11001100_hook("e", 256, "assign"));
      a.google_reactive_tag_first && (e |= cc11001100_hook("e", 1024, "assign"));
      return e ? "" + e : null;
    }, "var-init"),
    CG = cc11001100_hook("CG", (a, b, c) => {
      const d = cc11001100_hook("d", [], "var-init");
      Zg(se, e => {
        if (S(uq) || 3 !== e && 4 !== e) {
          var f = cc11001100_hook("f", AG(b, a, e, c), "var-init");
          0 !== f && d.push(e + ":" + f);
        }
      });
      return d.join(",") || null;
    }, "var-init"),
    DG = cc11001100_hook("DG", a => {
      const b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", {}, "var-init");
      Zg(a, (d, e) => {
        if ((e = cc11001100_hook("e", Bl[e], "assign")) && !c[e]) {
          c[e] = cc11001100_hook("c[e]", !0, "assign");
          if (d) d = cc11001100_hook("d", 1, "assign");else if (!1 === d) d = cc11001100_hook("d", 2, "assign");else return;
          b.push(e + ":" + d);
        }
      });
      return b.join(",");
    }, "var-init"),
    EG = cc11001100_hook("EG", a => {
      a = cc11001100_hook("a", a.overlays, "assign");
      if (!a) return "";
      a = cc11001100_hook("a", a.bottom, "assign");
      return "boolean" === typeof a ? a ? "1" : "0" : "";
    }, "var-init"),
    AG = cc11001100_hook("AG", (a, b, c, d) => {
      if (!b) return 256;
      let e = cc11001100_hook("e", 0, "var-init");
      var f = cc11001100_hook("f", Dl(b), "var-init"),
        g = cc11001100_hook("g", Ml(f, c), "var-init");
      if (a.google_reactive_ad_format == c || g) e |= cc11001100_hook("e", 64, "assign");
      let h = cc11001100_hook("h", !1, "var-init");
      Zg(f.reactiveTypeDisabledByPublisher, (k, l) => {
        String(c) === String(l) && (h = cc11001100_hook("h", !0, "assign"));
      });
      if (h && xG(b.location) !== c) {
        e |= cc11001100_hook("e", 128, "assign");
        f = cc11001100_hook("f", S(Fp) && (2 == c || 1 == c), "assign");
        g = cc11001100_hook("g", S(Gp) && (3 == c || 4 == c), "assign");
        const k = cc11001100_hook("k", S(Ep) && 8 == c, "var-init");
        if (f || g || k) return e;
      }
      return e | tG(b, a, c, d);
    }, "var-init"),
    FG = cc11001100_hook("FG", (a, b) => {
      if (a) {
        var c = cc11001100_hook("c", Dl(a), "var-init"),
          d = cc11001100_hook("d", {}, "var-init");
        Zg(b, (e, f) => {
          (f = cc11001100_hook("f", Bl[f], "assign")) && (!1 === e || /^false$/i.test(e)) && (d[f] = cc11001100_hook("d[f]", !0, "assign"));
        });
        Zg(se, e => {
          d[Cl[e]] && (c.reactiveTypeDisabledByPublisher[e] = cc11001100_hook("c.reactiveTypeDisabledByPublisher[e]", !0, "assign"));
        });
      }
    }, "var-init"),
    GG = cc11001100_hook("GG", (a, b, c) => {
      b = cc11001100_hook("b", Rk.ta(b, c), "assign");
      return ev(1, window, Fe(a, Uq(kp) ? {
        bust: cc11001100_hook("bust", Uq(kp), "object-key-init")
      } : {})).then(b);
    }, "var-init"),
    yG = cc11001100_hook("yG", (a, b, c) => {
      c = cc11001100_hook("c", Rk.ta(212, c), "assign");
      ev(3, a, b).then(c);
    }, "var-init");
  const HG = cc11001100_hook("HG", a => {
    a.adsbygoogle || (a.adsbygoogle = cc11001100_hook("a.adsbygoogle", [], "assign"), Vg(a.document, N`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
  }, "var-init");
  var IG = cc11001100_hook("IG", (a, b) => {
      oe(a, "load", () => {
        HG(a);
        a.adsbygoogle.push(b);
      });
    }, "var-init"),
    JG = cc11001100_hook("JG", a => {
      a = cc11001100_hook("a", a.google_reactive_ad_format, "assign");
      return re(a) ? "" + a : null;
    }, "var-init"),
    vG = cc11001100_hook("vG", a => !!JG(a) || null != a.google_pgb_reactive, "var-init"),
    KG = cc11001100_hook("KG", a => {
      a = cc11001100_hook("a", JG(a), "assign");
      return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a;
    }, "var-init");
  function LG(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "number" === typeof a.google_reactive_sra_index;
  }
  function MG(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", b.J || b.pubWin, "var-init"),
      e = cc11001100_hook("e", b.D, "var-init");
    e.google_reactive_plat = cc11001100_hook("e.google_reactive_plat", CG(d, e, c), "assign");
    var f = cc11001100_hook("f", DG(a), "var-init");
    f && (e.google_reactive_plaf = cc11001100_hook("e.google_reactive_plaf", f, "assign"));
    (f = cc11001100_hook("f", EG(a), "assign")) && (e.google_reactive_fba = cc11001100_hook("e.google_reactive_fba", f, "assign"));
    (f = cc11001100_hook("f", iG(d), "assign")) && (e.google_plas = cc11001100_hook("e.google_plas", f, "assign"));
    NG(a, e);
    f = cc11001100_hook("f", xG(b.pubWin.location), "assign");
    OG(a, f, e);
    f ? (e.fra = cc11001100_hook("e.fra", f, "assign"), e.google_pgb_reactive = cc11001100_hook("e.google_pgb_reactive", 6, "assign")) : e.google_pgb_reactive = cc11001100_hook("e.google_pgb_reactive", 5, "assign");
    $F(e);
    S(Tp) && (e.fsapi = cc11001100_hook("e.fsapi", !0, "assign"));
    Oh() || cr(b.pubWin.top);
    f = cc11001100_hook("f", el(b.pubWin, "rsrai", al(429, (g, h) => PG(b, d, e.google_ad_client, a, g, h, c)), al(430, (g, h) => Rl(b.pubWin, "431", Qk, h))), "assign");
    b.m.push(f);
    Dl(d).wasReactiveTagRequestSent = cc11001100_hook("Dl(d).wasReactiveTagRequestSent", !0, "assign");
    QG(b, a, c);
  }
  function QG(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.D, "var-init"),
      e = cc11001100_hook("e", ua(b.page_level_pubvars) ? b.page_level_pubvars : {}, "var-init");
    b = cc11001100_hook("b", el(a.pubWin, "apcnf", al(353, (f, g) => {
      var h = cc11001100_hook("h", a.pubWin, "var-init"),
        k = cc11001100_hook("k", d.google_ad_client, "var-init"),
        l = cc11001100_hook("l", a.ea.zb, "var-init"),
        m = cc11001100_hook("m", a.ea.Nb, "var-init");
      return uh(g.origin) ? tF(h, k, e, f.config, c, l, null, m) : !1;
    }), al(353, (f, g) => Rl(a.pubWin, "353", Qk, g))), "assign");
    a.m.push(b);
  }
  function PG(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    if (!uh(f.origin)) return !1;
    f = cc11001100_hook("f", e.data, "assign");
    if (!Array.isArray(f)) return !1;
    if (!$C(b, 1)) return !0;
    f && ql(6, [f]);
    e = cc11001100_hook("e", e.amaConfig, "assign");
    const h = cc11001100_hook("h", [], "var-init"),
      k = cc11001100_hook("k", [], "var-init"),
      l = cc11001100_hook("l", Dl(b), "var-init");
    let m = cc11001100_hook("m", null, "var-init");
    for (let n = cc11001100_hook("n", 0, "var-init"); n < f.length; n++) {
      if (!f[n]) continue;
      const q = cc11001100_hook("q", f[n], "var-init"),
        r = cc11001100_hook("r", q.adFormat, "var-init");
      l && q.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = cc11001100_hook("l.reactiveTypeEnabledInAsfe[r]", !0, "assign"));
      if (!q.noCreative) {
        q.google_reactive_sra_index = cc11001100_hook("q.google_reactive_sra_index", n, "assign");
        if (9 === r && e) {
          q.pubVars = cc11001100_hook("q.pubVars", Object.assign(q.pubVars || {}, RG(d, q)), "assign");
          const u = cc11001100_hook("u", new hA(), "var-init");
          if (bA(u, q)) {
            m = cc11001100_hook("m", u, "assign");
            continue;
          }
        }
        h.push(q);
        k.push(r);
      }
    }
    h.length && (bl("rasra::pm", {
      rt: cc11001100_hook("rt", k.join(","), "object-key-init"),
      c: cc11001100_hook("c", c, "object-key-init")
    }, .1), GG(a.ea.Je, 522, n => {
      SG(h, b, c, n, d, g);
    }));
    e && tF(b, c, d, e, g, a.ea.zb, m);
    return !0;
  }
  function RG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.adFormat, "var-init"),
      d = cc11001100_hook("d", b.adKey, "var-init");
    delete b.adKey;
    const e = cc11001100_hook("e", {}, "var-init");
    a = cc11001100_hook("a", a.page_level_pubvars, "assign");
    ua(a) && Object.assign(e, a);
    e.google_ad_unit_key = cc11001100_hook("e.google_ad_unit_key", d, "assign");
    e.google_reactive_sra_index = cc11001100_hook("e.google_reactive_sra_index", b.google_reactive_sra_index, "assign");
    30 === c && (e.google_reactive_ad_format = cc11001100_hook("e.google_reactive_ad_format", 30, "assign"));
    e.google_pgb_reactive = cc11001100_hook("e.google_pgb_reactive", e.google_pgb_reactive || 5, "assign");
    return b.pubVars = cc11001100_hook("b.pubVars", e, "assign");
  }
  function SG(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    const g = cc11001100_hook("g", [], "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < a.length; h++) {
      const k = cc11001100_hook("k", a[h], "var-init"),
        l = cc11001100_hook("l", k.adFormat, "var-init"),
        m = cc11001100_hook("m", k.adKey, "var-init"),
        n = cc11001100_hook("n", d.configProcessorForAdFormat(l), "var-init");
      l && n && m ? (k.pubVars = cc11001100_hook("k.pubVars", RG(e, k), "assign"), delete k.google_reactive_sra_index, g.push(l), Tk(466, () => n.verifyAndProcessConfig(b, k, f))) : bl("rasra::ivc", {
        af: cc11001100_hook("af", l, "object-key-init"),
        ak: cc11001100_hook("ak", String(m), "object-key-init"),
        c: cc11001100_hook("c", c, "object-key-init")
      }, .1);
    }
    bl("rasra::pr", {
      rt: cc11001100_hook("rt", g.join(","), "object-key-init"),
      c: cc11001100_hook("c", c, "object-key-init")
    }, .1);
  }
  function NG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", [], "var-init");
    let d = cc11001100_hook("d", !1, "var-init");
    Zg(Bl, (e, f) => {
      let g;
      a.hasOwnProperty(f) && (f = cc11001100_hook("f", a[f], "assign"), f?.google_ad_channel && (g = cc11001100_hook("g", String(f.google_ad_channel), "assign")));
      --e;
      c[e] && "+" !== c[e] || (c[e] = cc11001100_hook("c[e]", g ? g.replace(/,/g, "+") : "+", "assign"), d || (d = cc11001100_hook("d", !!g, "assign")));
    });
    d && (b.google_reactive_sra_channels = cc11001100_hook("b.google_reactive_sra_channels", c.join(","), "assign"));
  }
  function OG(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!c.google_adtest) {
      var d = cc11001100_hook("d", a.page_level_pubvars, "var-init");
      if ("on" === a.google_adtest || "on" === d?.google_adtest || b) c.google_adtest = cc11001100_hook("c.google_adtest", "on", "assign");
    }
  }
  ;
  Qb("script");
  var TG = cc11001100_hook("TG", {
    "image-top": cc11001100_hook("image-top", 0, "object-key-init"),
    "image-middle": cc11001100_hook("image-middle", 1, "object-key-init"),
    "image-side": cc11001100_hook("image-side", 2, "object-key-init"),
    "text-only": cc11001100_hook("text-only", 3, "object-key-init"),
    "in-article": cc11001100_hook("in-article", 4, "object-key-init")
  }, "var-init");
  function UG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!nr(b, a)) return () => {};
    a = cc11001100_hook("a", VG(b, a), "assign");
    if (!a) return () => {};
    const c = cc11001100_hook("c", kD(), "var-init");
    b = cc11001100_hook("b", ue(b), "assign");
    const d = cc11001100_hook("d", {
      Na: cc11001100_hook("Na", a, "object-key-init"),
      D: cc11001100_hook("D", b, "object-key-init"),
      offsetWidth: cc11001100_hook("offsetWidth", a.offsetWidth, "object-key-init")
    }, "var-init");
    c.push(d);
    return () => Gb(c, d);
  }
  function VG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", b.document.getElementById(a.google_async_iframe_id), "assign");
    if (!a) return null;
    for (a = cc11001100_hook("a", a.parentElement, "assign"); a && !sr.test(a.className);) a = cc11001100_hook("a", a.parentElement, "assign");
    return a;
  }
  function WG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let g = cc11001100_hook("g", 0, "var-init"); g < a.childNodes.length; g++) {
      const h = cc11001100_hook("h", {}, "var-init"),
        k = cc11001100_hook("k", a.childNodes[g], "var-init");
      var c = cc11001100_hook("c", k.style, "var-init"),
        d = cc11001100_hook("d", h, "var-init"),
        e = cc11001100_hook("e", ["width", "height"], "var-init");
      for (let l = cc11001100_hook("l", 0, "var-init"); l < e.length; l++) {
        const m = cc11001100_hook("m", "google_ad_" + e[l], "var-init");
        if (!d.hasOwnProperty(m)) {
          var f = cc11001100_hook("f", hh(c[e[l]]), "var-init");
          f = cc11001100_hook("f", null === f ? null : Math.round(f), "assign");
          null != f && (d[m] = cc11001100_hook("d[m]", f, "assign"));
        }
      }
      if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k;
    }
    return null;
  }
  function XG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.style.display = cc11001100_hook("a.style.display", b ? "inline-block" : "none", "assign");
    const c = cc11001100_hook("c", a.parentElement, "var-init");
    b ? c.dataset.adStatus = cc11001100_hook("c.dataset.adStatus", a.dataset.adStatus, "assign") : (a.dataset.adStatus = cc11001100_hook("a.dataset.adStatus", c.dataset.adStatus, "assign"), delete c.dataset.adStatus);
  }
  function YG(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.innerHeight >= b.innerWidth ? 1 : 2, "var-init");
    if (a.l != c) {
      a.l = cc11001100_hook("a.l", c, "assign");
      a = cc11001100_hook("a", kD(), "assign");
      for (const d of a) if (d.Na.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = cc11001100_hook("d.offsetWidth", d.Na.offsetWidth, "assign"), Tk(467, () => {
        var e = cc11001100_hook("e", d.Na, "var-init"),
          f = cc11001100_hook("f", d.D, "var-init");
        const g = cc11001100_hook("g", WG(e, f), "var-init");
        f.google_full_width_responsive_allowed && (e.style.marginLeft = cc11001100_hook("e.style.marginLeft", f.gfwroml || "", "assign"), e.style.marginRight = cc11001100_hook("e.style.marginRight", f.gfwromr || "", "assign"), e.style.height = cc11001100_hook("e.style.height", f.gfwroh ? f.gfwroh + "px" : "", "assign"), e.style.width = cc11001100_hook("e.style.width", f.gfwrow ? f.gfwrow + "px" : "", "assign"), e.style.zIndex = cc11001100_hook("e.style.zIndex", f.gfwroz || "", "assign"), delete f.google_full_width_responsive_allowed);
        delete f.google_ad_format;
        delete f.google_ad_width;
        delete f.google_ad_height;
        delete f.google_content_recommendation_ui_type;
        delete f.google_content_recommendation_rows_num;
        delete f.google_content_recommendation_columns_num;
        b.google_spfd(e, f, b);
        const h = cc11001100_hook("h", WG(e, f), "var-init");
        !h && g && 1 == e.childNodes.length ? (XG(g, !1), f.google_reactive_ad_format = cc11001100_hook("f.google_reactive_ad_format", 16, "assign"), f.google_ad_section = cc11001100_hook("f.google_ad_section", "responsive_resize", "assign"), e.dataset.adsbygoogleStatus = cc11001100_hook("e.dataset.adsbygoogleStatus", "reserved", "assign"), e.className += cc11001100_hook("e.className", " adsbygoogle-noablate", "assign"), HG(b), b.adsbygoogle.push({
          element: cc11001100_hook("element", e, "object-key-init"),
          params: cc11001100_hook("params", f, "object-key-init")
        })) : h && g ? h != g && (XG(g, !1), XG(h, !0)) : bl("auto_size_refresh", {
          context: cc11001100_hook("context", "showOrHideElm", "object-key-init"),
          url: cc11001100_hook("url", b.location.href, "object-key-init"),
          nodes: cc11001100_hook("nodes", e.childNodes.length, "object-key-init")
        });
      });
    }
  }
  var ZG = cc11001100_hook("ZG", class extends Ik {
    constructor() {
      super(...arguments);
      this.l = cc11001100_hook("this.l", null, "assign");
    }
    init(a) {
      const b = cc11001100_hook("b", aD(), "var-init");
      if (!Z(b, 27, !1)) {
        fD(b, 27, !0);
        this.l = cc11001100_hook("this.l", a.innerHeight >= a.innerWidth ? 1 : 2, "assign");
        var c = cc11001100_hook("c", () => YG(this, a), "var-init");
        oe(a, "resize", c);
        Jk(this, () => {
          pe(a, "resize", c);
        });
      }
    }
  }, "var-init");
  var $G = cc11001100_hook("$G", class {
    constructor(a, b, c) {
      this.J = cc11001100_hook("this.J", a, "assign");
      this.Na = cc11001100_hook("this.Na", b, "assign");
      this.D = cc11001100_hook("this.D", c, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
      this.l = cc11001100_hook("this.l", this.m = cc11001100_hook("this.m", 0, "assign"), "assign");
    }
    v() {
      10 <= ++this.m && t.clearInterval(this.j);
      var a = cc11001100_hook("a", qr(this.J, this.Na), "var-init");
      a = cc11001100_hook("a", rr(this.J, this.Na, a), "assign");
      const b = cc11001100_hook("b", mr(this.Na, this.J), "var-init");
      null != b && 0 === b.x || t.clearInterval(this.j);
      a && (this.l++, bl("rspv:al", {
        aligns: cc11001100_hook("aligns", this.l, "object-key-init"),
        attempt: cc11001100_hook("attempt", this.m, "object-key-init"),
        client: cc11001100_hook("client", this.D.google_ad_client, "object-key-init"),
        eoffs: cc11001100_hook("eoffs", String(null != b ? b.x : null), "object-key-init"),
        eids: cc11001100_hook("eids", QF(this.D), "object-key-init"),
        slot: cc11001100_hook("slot", this.D.google_ad_slot, "object-key-init"),
        url: cc11001100_hook("url", this.D.google_page_url, "object-key-init")
      }, .01));
    }
  }, "var-init");
  var cj = cc11001100_hook("cj", {
    Mk: cc11001100_hook("Mk", 0, "object-key-init"),
    Ik: cc11001100_hook("Ik", 1, "object-key-init"),
    Jk: cc11001100_hook("Jk", 9, "object-key-init"),
    Gk: cc11001100_hook("Gk", 2, "object-key-init"),
    Hk: cc11001100_hook("Hk", 3, "object-key-init"),
    Lk: cc11001100_hook("Lk", 5, "object-key-init"),
    Kk: cc11001100_hook("Kk", 7, "object-key-init")
  }, "var-init");
  var aH = cc11001100_hook("aH", class {
    constructor(a) {
      this.J = cc11001100_hook("this.J", a.J, "assign");
      this.pubWin = cc11001100_hook("this.pubWin", a.pubWin, "assign");
      this.D = cc11001100_hook("this.D", a.D, "assign");
      this.ma = cc11001100_hook("this.ma", a.ma, "assign");
      this.ea = cc11001100_hook("this.ea", a.ea, "assign");
      this.Ma = cc11001100_hook("this.Ma", a.Ma, "assign");
      this.Y = cc11001100_hook("this.Y", a.Y, "assign");
      this.C = cc11001100_hook("this.C", -1, "assign");
      this.j = cc11001100_hook("this.j", 0, "assign");
      this.l = cc11001100_hook("this.l", this.H = cc11001100_hook("this.H", null, "assign"), "assign");
      this.F = cc11001100_hook("this.F", this.G = cc11001100_hook("this.G", 0, "assign"), "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
      this.vb = cc11001100_hook("this.vb", this.B = cc11001100_hook("this.B", "", "assign"), "assign");
      this.v = cc11001100_hook("this.v", this.A = cc11001100_hook("this.A", null, "assign"), "assign");
    }
  }, "var-init");
  function bH(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", dE(a, Cz(b)), "var-init");
    c = cc11001100_hook("c", x(c, 2, b.tcString), "assign");
    c = cc11001100_hook("c", x(c, 4, b.addtlConsent || ""), "assign");
    x(c, 7, b.internalErrorState);
    c = cc11001100_hook("c", !Ez(b), "assign");
    x(a, 9, c);
    null != b.gdprApplies && x(a, 3, b.gdprApplies);
  }
  function cH(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", new Kz(a.pubWin, {
      Kg: cc11001100_hook("Kg", -1, "object-key-init"),
      tf: cc11001100_hook("tf", !0, "object-key-init")
    }), "var-init");
    if (!Gz(b)) return Promise.resolve(null);
    const c = cc11001100_hook("c", aD(), "var-init"),
      d = cc11001100_hook("d", Z(c, 24), "var-init");
    if (d) return Promise.resolve(d);
    const e = cc11001100_hook("e", new Promise(f => {
      f = cc11001100_hook("f", {
        resolve: cc11001100_hook("resolve", f, "object-key-init")
      }, "assign");
      const g = cc11001100_hook("g", Z(c, 25, []), "var-init");
      g.push(f);
      fD(c, 25, g);
    }), "var-init");
    d || null === d || (fD(c, 24, null), b.addEventListener(f => {
      if (Bz(f)) {
        fD(c, 24, f);
        bH(a.l, f);
        for (const g of Z(c, 25, [])) g.resolve(f);
        fD(c, 25, []);
      } else fD(c, 24, null);
    }));
    return e;
  }
  ;
  function dH(a, b, c = 1E5) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a -= cc11001100_hook("a", b, "assign");
    return a >= c ? "M" : 0 <= a ? a : "-M";
  }
  ;
  var fH = cc11001100_hook("fH", (a, b, c) => {
    const d = cc11001100_hook("d", b.parentElement?.classList.contains("adsbygoogle") ? b.parentElement : b, "var-init");
    c.addEventListener("load", () => eH(d));
    return el(a, "adpnt", (e, f) => {
      if (Nl(f, c.contentWindow)) {
        e = cc11001100_hook("e", Ql(e).qid, "assign");
        try {
          c.setAttribute("data-google-query-id", e);
          a.googletag ?? (a.googletag = cc11001100_hook("a.googletag", {
            cmd: cc11001100_hook("cmd", [], "object-key-init")
          }, "assign"));
          var g = cc11001100_hook("g", a.googletag.queryIds ?? [], "var-init");
          g.push(e);
          500 < g.length && g.shift();
          a.googletag.queryIds = cc11001100_hook("a.googletag.queryIds", g, "assign");
        } catch {}
        d.dataset.adStatus && bl("adsense_late_fill", {
          status: cc11001100_hook("status", d.dataset.adStatus, "object-key-init")
        });
        d.dataset.adStatus = cc11001100_hook("d.dataset.adStatus", "filled", "assign");
        g = cc11001100_hook("g", !0, "assign");
      } else g = cc11001100_hook("g", !1, "assign");
      return g;
    });
  }, "var-init");
  function eH(a) {
    cc11001100_hook("a", a, "function-parameter");
    setTimeout(() => {
      "filled" !== a.dataset.adStatus && (a.dataset.adStatus = cc11001100_hook("a.dataset.adStatus", "unfilled", "assign"));
    }, 1E3);
  }
  ;
  function gH(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    try {
      if (!uh(c.origin) || a.l && !Nl(c, a.l.contentWindow)) return;
    } catch (f) {
      return;
    }
    const d = cc11001100_hook("d", b.msg_type, "var-init");
    let e;
    "string" === typeof d && (e = cc11001100_hook("e", a.Ga[d], "assign")) && a.L.Hb(168, () => {
      e.call(a, b, c);
    });
  }
  class hH extends Ik {
    constructor(a, b) {
      var c = cc11001100_hook("c", Rk, "var-init"),
        d = cc11001100_hook("d", Qk, "var-init");
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.L = cc11001100_hook("this.L", c, "assign");
      this.Z = cc11001100_hook("this.Z", d, "assign");
      this.Ga = cc11001100_hook("this.Ga", {}, "assign");
      this.cf = cc11001100_hook("this.cf", this.L.ta(168, (e, f) => void gH(this, e, f)), "assign");
      this.ef = cc11001100_hook("this.ef", this.L.ta(169, (e, f) => Rl(this.m, "ras::xsf", this.Z, f)), "assign");
      this.ba = cc11001100_hook("this.ba", [], "assign");
      this.ka(this.Ga);
      this.ba.push(dl(this.m, "sth", this.cf, this.ef));
    }
    j() {
      for (const a of this.ba) a();
      this.ba.length = cc11001100_hook("this.ba.length", 0, "assign");
      super.j();
    }
  }
  ;
  class iH extends hH {
    constructor(a, b = null) {
      super(a, b);
      this.m = cc11001100_hook("this.m", a, "assign");
    }
  }
  ;
  var jH = cc11001100_hook("jH", class extends iH {
    constructor(a, b) {
      super(a, b);
      this.v = cc11001100_hook("this.v", () => {}, "assign");
      this.l && oe(this.l, "load", this.v);
    }
    j() {
      this.l && pe(this.l, "load", this.v);
      super.j();
      this.l = cc11001100_hook("this.l", null, "assign");
    }
    ka(a) {
      a["adsense-labs"] = cc11001100_hook("a[\"adsense-labs\"]", b => {
        if (b = cc11001100_hook("b", Ql(b).settings, "assign")) try {
          var c = cc11001100_hook("c", new Wf(JSON.parse(b)), "var-init");
          if (null != w(c, 1)) {
            var d = cc11001100_hook("d", this.m, "var-init"),
              e = cc11001100_hook("e", w(c, 1) || "", "var-init");
            if (S(hp) ? null != hE({
              win: cc11001100_hook("win", d, "object-key-init"),
              nc: cc11001100_hook("nc", HF(), "object-key-init")
            }).j : 1) {
              if (S(hp)) {
                const g = cc11001100_hook("g", hE({
                  win: cc11001100_hook("win", d, "object-key-init"),
                  nc: cc11001100_hook("nc", HF(), "object-key-init")
                }), "var-init");
                var f = cc11001100_hook("f", null != g.j ? IF(g.j.value) : {}, "var-init");
              } else f = cc11001100_hook("f", IF(d.localStorage), "assign");
              null !== c && (f[e] = cc11001100_hook("f[e]", c.toJSON(), "assign"));
              try {
                d.localStorage.setItem("google_adsense_settings", JSON.stringify(f));
              } catch (g) {}
            }
          }
        } catch (g) {}
      }, "assign");
    }
  }, "var-init");
  function kH(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A = cc11001100_hook("a.A", a.C, "assign");
    a.F.style.transition = cc11001100_hook("a.F.style.transition", "height 500ms", "assign");
    a.v.style.transition = cc11001100_hook("a.v.style.transition", "height 500ms", "assign");
    a.l.style.transition = cc11001100_hook("a.l.style.transition", "height 500ms", "assign");
    lH(a);
  }
  function mH(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.contentWindow.postMessage(JSON.stringify({
      msg_type: cc11001100_hook("msg_type", "expand-on-scroll-result", "object-key-init"),
      eos_success: cc11001100_hook("eos_success", !0, "object-key-init"),
      eos_amount: cc11001100_hook("eos_amount", b, "object-key-init"),
      googMsgType: cc11001100_hook("googMsgType", "sth", "object-key-init")
    }), "*");
  }
  function lH(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`, "var-init");
    a.l.style.clip = cc11001100_hook("a.l.style.clip", b, "assign");
    a.v.style.clip = cc11001100_hook("a.v.style.clip", b, "assign");
    a.l.setAttribute("height", a.A);
    a.l.style.height = cc11001100_hook("a.l.style.height", a.A + "px", "assign");
    a.v.setAttribute("height", a.A);
    a.v.style.height = cc11001100_hook("a.v.style.height", a.A + "px", "assign");
    a.F.style.height = cc11001100_hook("a.F.style.height", a.A + "px", "assign");
  }
  function nH(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", fh(b.r_nh), "assign");
    a.C = cc11001100_hook("a.C", null == b ? 0 : b, "assign");
    if (0 >= a.C) return "1";
    a.I = cc11001100_hook("a.I", $h(a.F).y, "assign");
    a.H = cc11001100_hook("a.H", Ol(a.m), "assign");
    if (a.I + a.A < a.H) return "2";
    if (a.I > Jl(a.m) - a.m.innerHeight) return "3";
    b = cc11001100_hook("b", a.H, "assign");
    a.l.setAttribute("height", a.C);
    a.l.style.height = cc11001100_hook("a.l.style.height", a.C + "px", "assign");
    a.v.style.overflow = cc11001100_hook("a.v.style.overflow", "hidden", "assign");
    a.F.style.position = cc11001100_hook("a.F.style.position", "relative", "assign");
    a.F.style.transition = cc11001100_hook("a.F.style.transition", "height 100ms", "assign");
    a.v.style.transition = cc11001100_hook("a.v.style.transition", "height 100ms", "assign");
    a.l.style.transition = cc11001100_hook("a.l.style.transition", "height 100ms", "assign");
    b = cc11001100_hook("b", Math.min(b + a.m.innerHeight - a.I, a.A), "assign");
    Uh(a.v, {
      position: cc11001100_hook("position", "relative", "object-key-init"),
      top: cc11001100_hook("top", "auto", "object-key-init"),
      bottom: cc11001100_hook("bottom", "auto", "object-key-init")
    });
    b = cc11001100_hook("b", `rect(0px, ${a.l.width}px, ${b}px, 0px)`, "assign");
    Uh(a.l, {
      clip: cc11001100_hook("clip", b, "object-key-init")
    });
    Uh(a.v, {
      clip: cc11001100_hook("clip", b, "object-key-init")
    });
    return "0";
  }
  function oH(a, b = {}) {
    cc11001100_hook("a", a, "function-parameter");
    a.V && (b.eid = cc11001100_hook("b.eid", a.V, "assign"));
    b.qid = cc11001100_hook("b.qid", a.Ob, "assign");
    bl("eoscrl", b, vl(String(a.Pb)));
  }
  class pH extends iH {
    constructor(a, b) {
      super(a.J, b);
      this.v = cc11001100_hook("this.v", a.Y, "assign");
      this.F = cc11001100_hook("this.F", this.v.parentElement && this.v.parentElement.classList.contains("adsbygoogle") ? this.v.parentElement : this.v, "assign");
      this.A = cc11001100_hook("this.A", parseInt(this.v.style.height, 10), "assign");
      this.V = cc11001100_hook("this.V", null, "assign");
      this.Qb = cc11001100_hook("this.Qb", this.Rb = cc11001100_hook("this.Rb", !1, "assign"), "assign");
      this.Ob = cc11001100_hook("this.Ob", "", "assign");
      this.ua = cc11001100_hook("this.ua", this.H = cc11001100_hook("this.H", this.C = cc11001100_hook("this.C", 0, "assign"), "assign"), "assign");
      this.df = cc11001100_hook("this.df", this.A / 5, "assign");
      this.I = cc11001100_hook("this.I", $h(this.F).y, "assign");
      this.Pb = cc11001100_hook("this.Pb", null, "assign");
      this.bf = cc11001100_hook("this.bf", ke(al(651, () => {
        this.I = cc11001100_hook("this.I", $h(this.F).y, "assign");
        var c = cc11001100_hook("c", this.H, "var-init");
        this.H = cc11001100_hook("this.H", Ol(this.m), "assign");
        this.A < this.C ? (c = cc11001100_hook("c", this.H - c, "assign"), 0 < c && (this.ua += cc11001100_hook("this.ua", c, "assign"), this.ua >= this.df ? (kH(this), mH(this, this.C)) : (this.A = cc11001100_hook("this.A", Math.min(this.C, this.A + c), "assign"), mH(this, c), lH(this)))) : pe(this.m, "scroll", this.K);
      }), this), "assign");
      this.K = cc11001100_hook("this.K", () => {
        var c = cc11001100_hook("c", this.bf, "var-init");
        hg.requestAnimationFrame ? hg.requestAnimationFrame(c) : c();
      }, "assign");
    }
    ka(a) {
      a["expand-on-scroll"] = cc11001100_hook("a[\"expand-on-scroll\"]", (b, c) => {
        b = cc11001100_hook("b", Ql(b), "assign");
        this.V = cc11001100_hook("this.V", b.i_expid, "assign");
        this.Ob = cc11001100_hook("this.Ob", b.qid, "assign");
        this.Pb = cc11001100_hook("this.Pb", b.gen204_fraction, "assign");
        this.Rb || (this.Rb = cc11001100_hook("this.Rb", !0, "assign"), b = cc11001100_hook("b", nH(this, b), "assign"), "0" === b && oe(this.m, "scroll", this.K, le), c.source.postMessage(JSON.stringify({
          msg_type: cc11001100_hook("msg_type", "expand-on-scroll-result", "object-key-init"),
          eos_success: cc11001100_hook("eos_success", "0" === b, "object-key-init"),
          googMsgType: cc11001100_hook("googMsgType", "sth", "object-key-init")
        }), "*"), oH(this, {
          err: cc11001100_hook("err", b, "object-key-init")
        }));
      }, "assign");
      a["expand-on-scroll-force-expand"] = cc11001100_hook("a[\"expand-on-scroll-force-expand\"]", () => {
        this.Qb || (this.Qb = cc11001100_hook("this.Qb", !0, "assign"), kH(this), pe(this.m, "scroll", this.K));
      }, "assign");
    }
    j() {
      this.K && pe(this.m, "scroll", this.K, le);
      super.j();
    }
  }
  ;
  function qH(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.I.getBoundingClientRect(), "var-init"),
      c = cc11001100_hook("c", 0 > b.top + b.height, "var-init");
    return !(b.top > a.m.innerHeight) && !c;
  }
  class rH extends Ik {
    constructor(a, b, c) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.I = cc11001100_hook("this.I", c, "assign");
      this.C = cc11001100_hook("this.C", 0, "assign");
      this.v = cc11001100_hook("this.v", qH(this), "assign");
      this.H = cc11001100_hook("this.H", je(this.F, this), "assign");
      this.l = cc11001100_hook("this.l", al(433, () => {
        var d = cc11001100_hook("d", this.H, "var-init");
        hg.requestAnimationFrame ? hg.requestAnimationFrame(d) : d();
      }), "assign");
      oe(this.m, "scroll", this.l, le);
    }
    F() {
      const a = cc11001100_hook("a", qH(this), "var-init");
      if (a && !this.v) {
        var b = cc11001100_hook("b", {
          rr: cc11001100_hook("rr", "vis-bcr", "object-key-init")
        }, "var-init");
        const c = cc11001100_hook("c", this.A.contentWindow, "var-init");
        c && (fl(c, "ig", b, "*", 2), 10 <= ++this.C && this.l && pe(this.m, "scroll", this.l, le));
      }
      this.v = cc11001100_hook("this.v", a, "assign");
    }
  }
  ;
  function sH(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.prerendering ? 3 : {
      visible: cc11001100_hook("visible", 1, "object-key-init"),
      hidden: cc11001100_hook("hidden", 2, "object-key-init"),
      prerender: cc11001100_hook("prerender", 3, "object-key-init"),
      preview: cc11001100_hook("preview", 4, "object-key-init"),
      unloaded: cc11001100_hook("unloaded", 5, "object-key-init")
    }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0;
  }
  function tH(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    a.visibilityState ? b = cc11001100_hook("b", "visibilitychange", "assign") : a.mozVisibilityState ? b = cc11001100_hook("b", "mozvisibilitychange", "assign") : a.webkitVisibilityState && (b = cc11001100_hook("b", "webkitvisibilitychange", "assign"));
    return b;
  }
  function uH(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null;
  }
  ;
  function vH(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Array.isArray(b) || (b = cc11001100_hook("b", [b], "assign"));
    b = cc11001100_hook("b", b.map(function (c) {
      return "string" === typeof c ? c : c.ud + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
    }), "assign");
    Uh(a, "transition", b.join(","));
  }
  var wH = cc11001100_hook("wH", he(function () {
    if (Tb) return !0;
    var a = cc11001100_hook("a", Fg(document, "DIV"), "var-init"),
      b = cc11001100_hook("b", Xb ? "-webkit" : Wb ? "-moz" : Tb ? "-ms" : null, "var-init"),
      c = cc11001100_hook("c", {
        transition: cc11001100_hook("transition", "opacity 1s linear", "object-key-init")
      }, "var-init");
    b && (c[b + "-transition"] = cc11001100_hook("c[b + \"-transition\"]", "opacity 1s linear", "assign"));
    b = cc11001100_hook("b", of("div", {
      style: cc11001100_hook("style", c, "object-key-init")
    }), "assign");
    kg(a, b);
    a = cc11001100_hook("a", a.firstChild, "assign");
    b = cc11001100_hook("b", a.style[wg("transition")], "assign");
    return "" != ("undefined" !== typeof b ? b : a.style[Vh(a, "transition")] || "");
  }), "var-init");
  function xH(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    0 > a.l[b].indexOf(c) && (a.l[b] += cc11001100_hook("a.l[b]", c, "assign"));
  }
  function yH(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= a.j.indexOf(b) || (a.j = cc11001100_hook("a.j", b + a.j, "assign"));
  }
  function zH(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 > a.m.indexOf(b) && (a.m = cc11001100_hook("a.m", b + a.m, "assign"));
  }
  function AH(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return "" != a.m || b ? null : "" == a.j.replace(BH, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1;
  }
  function CH(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", AH(a, "", null, 0), "var-init");
    if (null === b) return "XS";
    b = cc11001100_hook("b", b ? "C" : "N", "assign");
    a = cc11001100_hook("a", a.j, "assign");
    return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S";
  }
  var DH = cc11001100_hook("DH", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", ["", ""], "assign");
      this.j = cc11001100_hook("this.j", a || "", "assign");
      this.m = cc11001100_hook("this.m", b || "", "assign");
    }
    toString() {
      return [this.l[0], this.l[1], this.j, this.m].join("|");
    }
  }, "var-init");
  function EH(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", a.ba, "var-init");
    a.H = cc11001100_hook("a.H", function () {}, "assign");
    FH(a, a.G, b);
    let c = cc11001100_hook("c", a.G.parentElement, "var-init");
    if (!c) return a.j;
    let d = cc11001100_hook("d", !0, "var-init"),
      e = cc11001100_hook("e", null, "var-init");
    for (; c;) {
      try {
        e = cc11001100_hook("e", /^head|html$/i.test(c.nodeName) ? null : Xg(c, b), "assign");
      } catch (g) {
        zH(a.j, "c");
      }
      const f = cc11001100_hook("f", GH(a, b, c, e), "var-init");
      c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.V = cc11001100_hook("a.V", !0, "assign"));
      if (d && !f && HH(e)) {
        yH(a.j, "l");
        a.I = cc11001100_hook("a.I", c, "assign");
        break;
      }
      d = cc11001100_hook("d", d && f, "assign");
      if (e && IH(a, e)) break;
      c.parentNode && "#document-fragment" === c.parentNode.nodeName && c.parentNode.toString && "[object ShadowRoot]" === c.parentNode.toString() ? c = cc11001100_hook("c", c.parentNode.host, "assign") : c = cc11001100_hook("c", c.parentElement, "assign");
      if (!c) {
        if (b === a.Qb) break;
        try {
          if (c = cc11001100_hook("c", b.frameElement, "assign"), b = cc11001100_hook("b", b.parent, "assign"), !Rg(b)) {
            yH(a.j, "c");
            break;
          }
        } catch (g) {
          yH(a.j, "c");
          break;
        }
      }
    }
    a.F && a.v && JH(a);
    return a.j;
  }
  function KH(a) {
    cc11001100_hook("a", a, "function-parameter");
    function b() {
      LH(c, f, g);
      if (h && !k && !g) {
        const l = function (m) {
          for (let n = cc11001100_hook("n", 0, "var-init"); n < m.length; n++) Uh(h, m[n], "0px");
        };
        l(MH);
        l(NH);
      }
    }
    const c = cc11001100_hook("c", a.G, "var-init");
    c.style.overflow = cc11001100_hook("c.style.overflow", a.Pb ? "visible" : "hidden", "assign");
    a.F && (a.I ? (vH(c, OH), vH(a.I, OH)) : vH(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
    null !== a.L && (c.style.opacity = cc11001100_hook("c.style.opacity", a.L, "assign"));
    const d = cc11001100_hook("d", null != a.C && null != a.m && (a.ua || a.m > a.C) ? a.m : null, "var-init"),
      e = cc11001100_hook("e", null != a.B && null != a.l && (a.ua || a.l > a.B) ? a.l : null, "var-init");
    if (a.K) {
      const l = cc11001100_hook("l", a.K.length, "var-init");
      for (let m = cc11001100_hook("m", 0, "var-init"); m < l; m++) LH(a.K[m], d, e);
    }
    const f = cc11001100_hook("f", a.m, "var-init"),
      g = cc11001100_hook("g", a.l, "var-init"),
      h = cc11001100_hook("h", a.I, "var-init"),
      k = cc11001100_hook("k", a.V, "var-init");
    a.F ? t.setTimeout(b, 1E3) : b();
  }
  function PH(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.v && !a.Ob || null == a.m && null == a.l && null == a.L && a.v) return a.j;
    var b = cc11001100_hook("b", a.v, "var-init");
    a.v = cc11001100_hook("a.v", !1, "assign");
    EH(a);
    a.v = cc11001100_hook("a.v", b, "assign");
    if (!b || null != a.ka && !AH(a.j, a.ka, a.m, a.l)) return a.j;
    0 <= a.j.j.indexOf("n") && (a.C = cc11001100_hook("a.C", null, "assign"), a.B = cc11001100_hook("a.B", null, "assign"));
    if (null == a.C && null !== a.m || null == a.B && null !== a.l) a.F = cc11001100_hook("a.F", !1, "assign");
    (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = cc11001100_hook("a.m", 0, "assign"), a.l = cc11001100_hook("a.l", 0, "assign"));
    b = cc11001100_hook("b", a.j, "assign");
    b.l[0] = cc11001100_hook("b.l[0]", "", "assign");
    b.l[1] = cc11001100_hook("b.l[1]", "", "assign");
    b.j = cc11001100_hook("b.j", "", "assign");
    b.m = cc11001100_hook("b.m", "", "assign");
    KH(a);
    return EH(a);
  }
  function IH(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", !1, "var-init");
    "none" == b.display && (yH(a.j, "n"), a.v && (c = cc11001100_hook("c", !0, "assign")));
    "hidden" != b.visibility && "collapse" != b.visibility || yH(a.j, "v");
    "hidden" == b.overflow && yH(a.j, "o");
    "absolute" == b.position ? (yH(a.j, "a"), c = cc11001100_hook("c", !0, "assign")) : "fixed" == b.position && (yH(a.j, "f"), c = cc11001100_hook("c", !0, "assign"));
    return c;
  }
  function FH(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    let d = cc11001100_hook("d", 0, "var-init");
    if (!b || !b.parentElement) return !0;
    let e = cc11001100_hook("e", !1, "var-init"),
      f = cc11001100_hook("f", 0, "var-init");
    const g = cc11001100_hook("g", b.parentElement.childNodes, "var-init");
    for (let k = cc11001100_hook("k", 0, "var-init"); k < g.length; k++) {
      var h = cc11001100_hook("h", g[k], "var-init");
      h == b ? e = cc11001100_hook("e", !0, "assign") : (h = cc11001100_hook("h", QH(a, h, c), "assign"), d |= cc11001100_hook("d", h, "assign"), e && (f |= cc11001100_hook("f", h, "assign")));
    }
    f & 1 && (d & 2 && xH(a.j, 0, "o"), d & 4 && xH(a.j, 1, "o"));
    return !(d & 1);
  }
  function GH(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    let e = cc11001100_hook("e", null, "var-init");
    try {
      e = cc11001100_hook("e", c.style, "assign");
    } catch (C) {
      zH(a.j, "s");
    }
    var f = cc11001100_hook("f", c.getAttribute("width"), "var-init"),
      g = cc11001100_hook("g", fh(f), "var-init"),
      h = cc11001100_hook("h", c.getAttribute("height"), "var-init"),
      k = cc11001100_hook("k", fh(h), "var-init"),
      l = cc11001100_hook("l", d && /^block$/.test(d.display) || e && /^block$/.test(e.display), "var-init");
    b = cc11001100_hook("b", FH(a, c, b), "assign");
    var m = cc11001100_hook("m", d && d.width, "var-init");
    const n = cc11001100_hook("n", d && d.height, "var-init");
    var q = cc11001100_hook("q", e && e.width, "var-init"),
      r = cc11001100_hook("r", e && e.height, "var-init"),
      u = cc11001100_hook("u", hh(m) == a.C && hh(n) == a.B, "var-init");
    m = cc11001100_hook("m", u ? m : q, "assign");
    r = cc11001100_hook("r", u ? n : r, "assign");
    q = cc11001100_hook("q", hh(m), "assign");
    u = cc11001100_hook("u", hh(r), "assign");
    g = cc11001100_hook("g", null !== a.C && (null !== q && a.C >= q || null !== g && a.C >= g), "assign");
    u = cc11001100_hook("u", null !== a.B && (null !== u && a.B >= u || null !== k && a.B >= k), "assign");
    k = cc11001100_hook("k", !b && HH(d), "assign");
    u = cc11001100_hook("u", b || u || k || !(f || m || d && (!RH(String(d.minWidth)) || !SH(String(d.maxWidth)))), "assign");
    l = cc11001100_hook("l", b || g || k || l || !(h || r || d && (!RH(String(d.minHeight)) || !SH(String(d.maxHeight)))), "assign");
    TH(a, 0, u, c, "width", f, a.C, a.m);
    UH(a, 0, "d", u, e, d, "width", m, a.C, a.m);
    UH(a, 0, "m", u, e, d, "minWidth", e && e.minWidth, a.C, a.m);
    UH(a, 0, "M", u, e, d, "maxWidth", e && e.maxWidth, a.C, a.m);
    a.Rb ? (c = cc11001100_hook("c", /^html|body$/i.test(c.nodeName), "assign"), f = cc11001100_hook("f", hh(n), "assign"), h = cc11001100_hook("h", d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, "assign"), h = cc11001100_hook("h", null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, "assign"), a.v && !c && h && (e.setProperty("height", "auto", "important"), d && !RH(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !SH(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (TH(a, 1, l, c, "height", h, a.B, a.l), UH(a, 1, "d", l, e, d, "height", r, a.B, a.l), UH(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.B, a.l), UH(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.B, a.l));
    return b;
  }
  function JH(a) {
    cc11001100_hook("a", a, "function-parameter");
    function b() {
      if (0 < c) {
        var l = cc11001100_hook("l", Xg(e, d) || {}, "var-init");
        const m = cc11001100_hook("m", hh(l.width), "var-init");
        l = cc11001100_hook("l", hh(l.height), "assign");
        null !== m && null !== f && h && h(0, f - m);
        null !== l && null !== g && h && h(1, g - l);
        --c;
      } else t.clearInterval(k), h && (h(0, 0), h(1, 0));
    }
    let c = cc11001100_hook("c", 31.25, "var-init");
    const d = cc11001100_hook("d", a.ba, "var-init"),
      e = cc11001100_hook("e", a.G, "var-init"),
      f = cc11001100_hook("f", a.m, "var-init"),
      g = cc11001100_hook("g", a.l, "var-init"),
      h = cc11001100_hook("h", a.H, "var-init");
    let k;
    t.setTimeout(function () {
      k = cc11001100_hook("k", t.setInterval(b, 16), "assign");
    }, 990);
  }
  function QH(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
    if (1 == b.nodeType) {
      if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
      let d = cc11001100_hook("d", null, "var-init");
      try {
        d = cc11001100_hook("d", Xg(b, c), "assign");
      } catch (e) {}
      if (d) {
        if ("none" == d.display || "fixed" == d.position) return 0;
        if ("absolute" == d.position) {
          if (!a.A.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
          c = cc11001100_hook("c", null, "assign");
          try {
            c = cc11001100_hook("c", b.getBoundingClientRect(), "assign");
          } catch (e) {
            return 0;
          }
          return (c.right > a.A.boundingClientRect.left ? 2 : 0) | (c.bottom > a.A.boundingClientRect.top ? 4 : 0);
        }
      }
      return 1;
    }
    return 0;
  }
  function TH(a, b, c, d, e, f, g, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    if (null != h) {
      if ("string" == typeof f) {
        if ("100%" == f || !f) return;
        f = cc11001100_hook("f", fh(f), "assign");
        null == f && (zH(a.j, "n"), xH(a.j, b, "d"));
      }
      if (null != f) if (c) {
        if (a.v) if (a.F) {
          const k = cc11001100_hook("k", Math.max(f + h - (g || 0), 0), "var-init"),
            l = cc11001100_hook("l", a.H, "var-init");
          a.H = cc11001100_hook("a.H", function (m, n) {
            m == b && d.setAttribute(e, k - n);
            l && l(m, n);
          }, "assign");
        } else d.setAttribute(e, h);
      } else xH(a.j, b, "d");
    }
  }
  function UH(a, b, c, d, e, f, g, h, k, l) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    cc11001100_hook("k", k, "function-parameter");
    cc11001100_hook("l", l, "function-parameter");
    if (null != l) {
      f = cc11001100_hook("f", f && f[g], "assign");
      "string" != typeof f || ("m" == c ? RH(f) : SH(f)) || (f = cc11001100_hook("f", hh(f), "assign"), null == f ? yH(a.j, "p") : null != k && yH(a.j, f == k ? "E" : "e"));
      if ("string" == typeof h) {
        if ("m" == c ? RH(h) : SH(h)) return;
        h = cc11001100_hook("h", hh(h), "assign");
        null == h && (zH(a.j, "p"), xH(a.j, b, c));
      }
      if (null != h) if (d && e) {
        if (a.v) if (a.F) {
          const m = cc11001100_hook("m", Math.max(h + l - (k || 0), 0), "var-init"),
            n = cc11001100_hook("n", a.H, "var-init");
          a.H = cc11001100_hook("a.H", function (q, r) {
            q == b && (e[g] = cc11001100_hook("e[g]", m - r + "px", "assign"));
            n && n(q, r);
          }, "assign");
        } else e[g] = cc11001100_hook("e[g]", l + "px", "assign");
      } else xH(a.j, b, c);
    }
  }
  var ZH = cc11001100_hook("ZH", class {
    constructor(a, b, c, d, e, f, g) {
      this.Qb = cc11001100_hook("this.Qb", a, "assign");
      this.K = cc11001100_hook("this.K", c, "assign");
      this.G = cc11001100_hook("this.G", b, "assign");
      this.ba = cc11001100_hook("this.ba", (a = cc11001100_hook("a", this.G.ownerDocument, "assign")) && (a.defaultView || a.parentWindow), "assign");
      this.A = cc11001100_hook("this.A", new VH(this.G), "assign");
      this.v = cc11001100_hook("this.v", g, "assign");
      this.Ob = cc11001100_hook("this.Ob", WH(this.A, d.Dd, d.height, d.Oe), "assign");
      this.C = cc11001100_hook("this.C", this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.right - this.A.boundingClientRect.left : null : e, "assign");
      this.B = cc11001100_hook("this.B", this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.bottom - this.A.boundingClientRect.top : null : f, "assign");
      this.m = cc11001100_hook("this.m", XH(d.width), "assign");
      this.l = cc11001100_hook("this.l", XH(d.height), "assign");
      this.L = cc11001100_hook("this.L", this.v ? XH(d.opacity) : null, "assign");
      this.ka = cc11001100_hook("this.ka", d.check, "assign");
      this.F = cc11001100_hook("this.F", "animate" == d.Dd && !YH(this.A, this.l, this.Ga) && wH(), "assign");
      this.Pb = cc11001100_hook("this.Pb", !!d.Ld, "assign");
      this.j = cc11001100_hook("this.j", new DH(), "assign");
      YH(this.A, this.l, this.Ga) && yH(this.j, "r");
      e = cc11001100_hook("e", this.A, "assign");
      e.j && e.l >= e.m && yH(this.j, "b");
      this.I = cc11001100_hook("this.I", this.H = cc11001100_hook("this.H", null, "assign"), "assign");
      this.V = cc11001100_hook("this.V", !1, "assign");
      this.ua = cc11001100_hook("this.ua", !!d.yg, "assign");
      this.Rb = cc11001100_hook("this.Rb", !!d.Ag, "assign");
      this.Ga = cc11001100_hook("this.Ga", !!d.Oe, "assign");
    }
  }, "var-init");
  function YH(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d;
    (d = cc11001100_hook("d", a.j, "assign")) && !(d = cc11001100_hook("d", !a.v, "assign")) && (c ? (b = cc11001100_hook("b", a.l + Math.min(b, XH(a.getHeight())), "assign"), a = cc11001100_hook("a", a.j && b >= a.m, "assign")) : a = cc11001100_hook("a", a.j && a.l >= a.m, "assign"), d = cc11001100_hook("d", a, "assign"));
    return d;
  }
  var VH = cc11001100_hook("VH", class {
    constructor(a) {
      var b = cc11001100_hook("b", a && a.ownerDocument, "var-init"),
        c = cc11001100_hook("c", b && (b.defaultView || b.parentWindow), "var-init");
      c = cc11001100_hook("c", c && Ug(c), "assign");
      this.j = cc11001100_hook("this.j", !!c, "assign");
      this.boundingClientRect = cc11001100_hook("this.boundingClientRect", null, "assign");
      if (a) try {
        this.boundingClientRect = cc11001100_hook("this.boundingClientRect", a.getBoundingClientRect(), "assign");
      } catch (g) {}
      var d = cc11001100_hook("d", a, "var-init");
      let e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", this.boundingClientRect, "var-init");
      for (; d;) try {
        f && (e += cc11001100_hook("e", f.top, "assign"));
        const g = cc11001100_hook("g", d.ownerDocument, "var-init"),
          h = cc11001100_hook("h", g && (g.defaultView || g.parentWindow), "var-init");
        (d = cc11001100_hook("d", h && h.frameElement, "assign")) && (f = cc11001100_hook("f", d.getBoundingClientRect(), "assign"));
      } catch (g) {
        break;
      }
      this.l = cc11001100_hook("this.l", e, "assign");
      c = cc11001100_hook("c", c || t, "assign");
      this.m = cc11001100_hook("this.m", ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight, "assign");
      b = cc11001100_hook("b", b && sH(b), "assign");
      this.v = cc11001100_hook("this.v", !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right), "assign");
    }
    isVisible() {
      return this.v;
    }
    getWidth() {
      return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null;
    }
    getHeight() {
      return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null;
    }
  }, "var-init");
  function WH(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    switch (b) {
      case "no_rsz":
        return !1;
      case "force":
      case "animate":
        return !0;
      default:
        return YH(a, c, d);
    }
  }
  function HH(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat);
  }
  function $H(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return PH(new ZH(a, b, d, c, null, null, !0));
  }
  var aI = cc11001100_hook("aI", new DH("s", ""), "var-init"),
    BH = cc11001100_hook("BH", RegExp("[lonvafrbpEe]", "g"), "var-init");
  function SH(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !a || /^(auto|none|100%)$/.test(a);
  }
  function RH(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !a || /^(0px|auto|none|0%)$/.test(a);
  }
  function LH(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    null !== b && null !== fh(a.getAttribute("width")) && a.setAttribute("width", b);
    null !== c && null !== fh(a.getAttribute("height")) && a.setAttribute("height", c);
    null !== b && (a.style.width = cc11001100_hook("a.style.width", b + "px", "assign"));
    null !== c && (a.style.height = cc11001100_hook("a.style.height", c + "px", "assign"));
  }
  var MH = cc11001100_hook("MH", "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "), "var-init"),
    NH = cc11001100_hook("NH", "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "), "var-init");
  let bI = cc11001100_hook("bI", "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s", "var-init"),
    cI = cc11001100_hook("cI", MH, "var-init");
  for (let a = cc11001100_hook("a", 0, "var-init"); a < cI.length; a++) bI += cc11001100_hook("bI", ", " + cI[a] + " .2s cubic-bezier(.4, 0, 1, 1)", "assign");
  cI = cc11001100_hook("cI", NH, "assign");
  for (let a = cc11001100_hook("a", 0, "var-init"); a < cI.length; a++) bI += cc11001100_hook("bI", ", " + cI[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s", "assign");
  var OH = cc11001100_hook("OH", bI, "var-init");
  function XH(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "string" === typeof a ? fh(a) : "number" === typeof a && isFinite(a) ? a : null;
  }
  ;
  function dI(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", {
      scrl: cc11001100_hook("scrl", Ol(a.m || window), "object-key-init"),
      adk: cc11001100_hook("adk", a.C, "object-key-init"),
      adf: cc11001100_hook("adf", a.A, "object-key-init"),
      fmt: cc11001100_hook("fmt", a.v, "object-key-init")
    }, "var-init");
    b && (d.str = cc11001100_hook("d.str", YH(b, fh(c.r_nh), gh(c.r_cab)), "assign"), d.ad_y = cc11001100_hook("d.ad_y", b.l, "assign"), d.vph = cc11001100_hook("d.vph", b.m, "assign"));
    Zg(c, (e, f) => {
      d[f] = cc11001100_hook("d[f]", e, "assign");
    });
    return d;
  }
  function eI(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", vl(String(b.gen204_fraction)), "var-init");
    b = cc11001100_hook("b", dI(a, c, b), "assign");
    b.url = cc11001100_hook("b.url", a.m.document.URL, "assign");
    bl("resize", b, d);
  }
  var fI = cc11001100_hook("fI", class extends iH {
    constructor(a, b, c) {
      super(a, b);
      this.C = cc11001100_hook("this.C", String(c.google_ad_unit_key || ""), "assign");
      this.A = cc11001100_hook("this.A", String(c.google_ad_dom_fingerprint || ""), "assign");
      this.v = cc11001100_hook("this.v", String(c.google_ad_format || ""), "assign");
    }
    ka(a) {
      a["resize-me"] = cc11001100_hook("a[\"resize-me\"]", (b, c) => {
        b = cc11001100_hook("b", Ql(b), "assign");
        var d = cc11001100_hook("d", b.r_chk, "var-init");
        if (null == d || "" === d) {
          var e = cc11001100_hook("e", fh(b.r_nw), "var-init"),
            f = cc11001100_hook("f", fh(b.r_nh), "var-init"),
            g = cc11001100_hook("g", fh(b.r_no), "var-init");
          null != g || 0 !== e && 0 !== f || (g = cc11001100_hook("g", 0, "assign"));
          var h = cc11001100_hook("h", b.r_str, "var-init");
          h = cc11001100_hook("h", h ? h : null, "assign");
          {
            var k = cc11001100_hook("k", g, "var-init"),
              l = cc11001100_hook("l", gh(b.r_ao), "var-init"),
              m = cc11001100_hook("m", gh(b.r_ifr), "var-init"),
              n = cc11001100_hook("n", gh(b.r_cab), "var-init");
            const r = cc11001100_hook("r", window, "var-init");
            if (this.l && r) {
              if ("no_rsz" === h) b.err = cc11001100_hook("b.err", "7", "assign"), eI(this, b, null), f = cc11001100_hook("f", !0, "assign");else if (g = cc11001100_hook("g", new VH(this.l), "assign"), g.j) {
                var q = cc11001100_hook("q", g.getWidth(), "var-init");
                null != q && (b.w = cc11001100_hook("b.w", q, "assign"));
                q = cc11001100_hook("q", g.getHeight(), "assign");
                null != q && (b.h = cc11001100_hook("b.h", q, "assign"));
                if (WH(g, h, f, n)) {
                  const u = cc11001100_hook("u", this.l.ownerDocument.getElementById(this.l.id + "_host"), "var-init");
                  q = cc11001100_hook("q", u || this.l, "assign");
                  d = cc11001100_hook("d", $H(r, q, {
                    width: cc11001100_hook("width", e, "object-key-init"),
                    height: cc11001100_hook("height", f, "object-key-init"),
                    opacity: cc11001100_hook("opacity", k, "object-key-init"),
                    check: cc11001100_hook("check", d, "object-key-init"),
                    Dd: cc11001100_hook("Dd", h, "object-key-init"),
                    Ld: cc11001100_hook("Ld", l, "object-key-init"),
                    yg: cc11001100_hook("yg", m, "object-key-init"),
                    Oe: cc11001100_hook("Oe", n, "object-key-init")
                  }, u ? [this.l] : null), "assign");
                  b.r_cui && gh(b.r_cui.toString()) && M(q, {
                    height: cc11001100_hook("height", (null === f ? 0 : f - 48) + "px", "object-key-init"),
                    top: cc11001100_hook("top", "24px", "object-key-init")
                  });
                  null != e && (b.nw = cc11001100_hook("b.nw", e, "assign"));
                  null != f && (b.nh = cc11001100_hook("b.nh", f, "assign"));
                  b.rsz = cc11001100_hook("b.rsz", d.toString(), "assign");
                  b.abl = cc11001100_hook("b.abl", CH(d), "assign");
                  b.frsz = cc11001100_hook("b.frsz", ("force" === h).toString(), "assign");
                  b.err = cc11001100_hook("b.err", "0", "assign");
                  eI(this, b, g);
                  f = cc11001100_hook("f", !0, "assign");
                } else b.err = cc11001100_hook("b.err", "1", "assign"), eI(this, b, g), f = cc11001100_hook("f", !1, "assign");
              } else b.err = cc11001100_hook("b.err", "3", "assign"), eI(this, b, null), f = cc11001100_hook("f", !1, "assign");
            } else b.err = cc11001100_hook("b.err", "2", "assign"), eI(this, b, null), f = cc11001100_hook("f", !1, "assign");
          }
          e = cc11001100_hook("e", {
            msg_type: cc11001100_hook("msg_type", "resize-result", "object-key-init")
          }, "assign");
          e.r_str = cc11001100_hook("e.r_str", h, "assign");
          e.r_status = cc11001100_hook("e.r_status", f, "assign");
          c = cc11001100_hook("c", c.source, "assign");
          e.googMsgType = cc11001100_hook("e.googMsgType", "sth", "assign");
          c.postMessage(JSON.stringify(e), "*");
          this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", b.qid);
        }
      }, "assign");
    }
    j() {
      super.j();
      this.l = cc11001100_hook("this.l", null, "assign");
    }
  }, "var-init");
  const gI = cc11001100_hook("gI", {
    google: cc11001100_hook("google", 1, "object-key-init"),
    googlegroups: cc11001100_hook("googlegroups", 1, "object-key-init"),
    gmail: cc11001100_hook("gmail", 1, "object-key-init"),
    googlemail: cc11001100_hook("googlemail", 1, "object-key-init"),
    googleimages: cc11001100_hook("googleimages", 1, "object-key-init"),
    googleprint: cc11001100_hook("googleprint", 1, "object-key-init")
  }, "var-init");
  const hI = cc11001100_hook("hI", /^blogger$/, "var-init"),
    iI = cc11001100_hook("iI", /^wordpress(.|\s|$)/i, "var-init"),
    jI = cc11001100_hook("jI", /^joomla!/i, "var-init"),
    kI = cc11001100_hook("kI", /^drupal/i, "var-init"),
    lI = cc11001100_hook("lI", /\/wp-content\//, "var-init"),
    mI = cc11001100_hook("mI", /\/wp-content\/plugins\/advanced-ads/, "var-init"),
    nI = cc11001100_hook("nI", /\/wp-content\/themes\/genesis/, "var-init"),
    oI = cc11001100_hook("oI", /\/wp-content\/plugins\/genesis/, "var-init");
  function pI(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.getElementsByTagName("script"), "var-init"),
      c = cc11001100_hook("c", b.length, "var-init");
    for (var d = cc11001100_hook("d", 0, "var-init"); d < c; ++d) {
      var e = cc11001100_hook("e", b[d], "var-init");
      if (e.hasAttribute("src")) {
        e = cc11001100_hook("e", e.getAttribute("src") || "", "assign");
        if (mI.test(e)) return 5;
        if (oI.test(e)) return 6;
      }
    }
    b = cc11001100_hook("b", a.getElementsByTagName("link"), "assign");
    c = cc11001100_hook("c", b.length, "assign");
    for (d = cc11001100_hook("d", 0, "assign"); d < c; ++d) if (e = cc11001100_hook("e", b[d], "assign"), e.hasAttribute("href") && (e = cc11001100_hook("e", e.getAttribute("href") || "", "assign"), nI.test(e) || oI.test(e))) return 6;
    a = cc11001100_hook("a", a.getElementsByTagName("meta"), "assign");
    d = cc11001100_hook("d", a.length, "assign");
    for (e = cc11001100_hook("e", 0, "assign"); e < d; ++e) {
      var f = cc11001100_hook("f", a[e], "var-init");
      if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
        f = cc11001100_hook("f", f.getAttribute("content") || "", "assign");
        if (hI.test(f)) return 1;
        if (iI.test(f)) return 2;
        if (jI.test(f)) return 3;
        if (kI.test(f)) return 4;
      }
    }
    for (a = cc11001100_hook("a", 0, "assign"); a < c; ++a) if (d = cc11001100_hook("d", b[a], "assign"), "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = cc11001100_hook("d", d.getAttribute("href") || "", "assign"), lI.test(d))) return 2;
    return 0;
  }
  ;
  let qI = cc11001100_hook("qI", navigator, "var-init");
  var rI = cc11001100_hook("rI", a => {
      let b = cc11001100_hook("b", 1, "var-init");
      let c;
      if (void 0 != a && "" != a) for (b = cc11001100_hook("b", 0, "assign"), c = cc11001100_hook("c", a.length - 1, "assign"); 0 <= c; c--) {
        var d = cc11001100_hook("d", a.charCodeAt(c), "var-init");
        b = cc11001100_hook("b", (b << 6 & 268435455) + d + (d << 14), "assign");
        d = cc11001100_hook("d", b & 266338304, "assign");
        b = cc11001100_hook("b", 0 != d ? b ^ d >> 21 : b, "assign");
      }
      return b;
    }, "var-init"),
    sI = cc11001100_hook("sI", (a, b) => {
      if (!a || "none" == a) return 1;
      a = cc11001100_hook("a", String(a), "assign");
      "auto" == a && (a = cc11001100_hook("a", b, "assign"), "www." == a.substring(0, 4) && (a = cc11001100_hook("a", a.substring(4, a.length), "assign")));
      return rI(a.toLowerCase());
    }, "var-init");
  const tI = cc11001100_hook("tI", RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"), "var-init"),
    uI = cc11001100_hook("uI", RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"), "var-init"),
    vI = cc11001100_hook("vI", RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$"), "var-init");
  var wI = cc11001100_hook("wI", () => {
    const a = cc11001100_hook("a", new hr(), "var-init");
    t.SVGElement && t.document.createElementNS && a.set(0);
    const b = cc11001100_hook("b", mh(), "var-init");
    b["allow-top-navigation-by-user-activation"] && a.set(1);
    b["allow-popups-to-escape-sandbox"] && a.set(2);
    t.crypto && t.crypto.subtle && a.set(3);
    t.TextDecoder && t.TextEncoder && a.set(4);
    return gr(a);
  }, "var-init");
  var xI = cc11001100_hook("xI", new Map([[".google.com", a => N`https://adservice.google.com/adsid/integrator.${a}`], [".google.ad", a => N`https://adservice.google.ad/adsid/integrator.${a}`], [".google.ae", a => N`https://adservice.google.ae/adsid/integrator.${a}`], [".google.com.af", a => N`https://adservice.google.com.af/adsid/integrator.${a}`], [".google.com.ag", a => N`https://adservice.google.com.ag/adsid/integrator.${a}`], [".google.com.ai", a => N`https://adservice.google.com.ai/adsid/integrator.${a}`], [".google.al", a => N`https://adservice.google.al/adsid/integrator.${a}`], [".google.co.ao", a => N`https://adservice.google.co.ao/adsid/integrator.${a}`], [".google.com.ar", a => N`https://adservice.google.com.ar/adsid/integrator.${a}`], [".google.as", a => N`https://adservice.google.as/adsid/integrator.${a}`], [".google.at", a => N`https://adservice.google.at/adsid/integrator.${a}`], [".google.com.au", a => N`https://adservice.google.com.au/adsid/integrator.${a}`], [".google.az", a => N`https://adservice.google.az/adsid/integrator.${a}`], [".google.com.bd", a => N`https://adservice.google.com.bd/adsid/integrator.${a}`], [".google.be", a => N`https://adservice.google.be/adsid/integrator.${a}`], [".google.bf", a => N`https://adservice.google.bf/adsid/integrator.${a}`], [".google.bg", a => N`https://adservice.google.bg/adsid/integrator.${a}`], [".google.com.bh", a => N`https://adservice.google.com.bh/adsid/integrator.${a}`], [".google.bi", a => N`https://adservice.google.bi/adsid/integrator.${a}`], [".google.bj", a => N`https://adservice.google.bj/adsid/integrator.${a}`], [".google.com.bn", a => N`https://adservice.google.com.bn/adsid/integrator.${a}`], [".google.com.bo", a => N`https://adservice.google.com.bo/adsid/integrator.${a}`], [".google.com.br", a => N`https://adservice.google.com.br/adsid/integrator.${a}`], [".google.bs", a => N`https://adservice.google.bs/adsid/integrator.${a}`], [".google.bt", a => N`https://adservice.google.bt/adsid/integrator.${a}`], [".google.co.bw", a => N`https://adservice.google.co.bw/adsid/integrator.${a}`], [".google.com.bz", a => N`https://adservice.google.com.bz/adsid/integrator.${a}`], [".google.ca", a => N`https://adservice.google.ca/adsid/integrator.${a}`], [".google.cd", a => N`https://adservice.google.cd/adsid/integrator.${a}`], [".google.cf", a => N`https://adservice.google.cf/adsid/integrator.${a}`], [".google.cg", a => N`https://adservice.google.cg/adsid/integrator.${a}`], [".google.ch", a => N`https://adservice.google.ch/adsid/integrator.${a}`], [".google.ci", a => N`https://adservice.google.ci/adsid/integrator.${a}`], [".google.co.ck", a => N`https://adservice.google.co.ck/adsid/integrator.${a}`], [".google.cl", a => N`https://adservice.google.cl/adsid/integrator.${a}`], [".google.cm", a => N`https://adservice.google.cm/adsid/integrator.${a}`], [".google.com.co", a => N`https://adservice.google.com.co/adsid/integrator.${a}`], [".google.co.cr", a => N`https://adservice.google.co.cr/adsid/integrator.${a}`], [".google.com.cu", a => N`https://adservice.google.com.cu/adsid/integrator.${a}`], [".google.cv", a => N`https://adservice.google.cv/adsid/integrator.${a}`], [".google.com.cy", a => N`https://adservice.google.com.cy/adsid/integrator.${a}`], [".google.cz", a => N`https://adservice.google.cz/adsid/integrator.${a}`], [".google.de", a => N`https://adservice.google.de/adsid/integrator.${a}`], [".google.dj", a => N`https://adservice.google.dj/adsid/integrator.${a}`], [".google.dk", a => N`https://adservice.google.dk/adsid/integrator.${a}`], [".google.dm", a => N`https://adservice.google.dm/adsid/integrator.${a}`], [".google.dz", a => N`https://adservice.google.dz/adsid/integrator.${a}`], [".google.com.ec", a => N`https://adservice.google.com.ec/adsid/integrator.${a}`], [".google.ee", a => N`https://adservice.google.ee/adsid/integrator.${a}`], [".google.com.eg", a => N`https://adservice.google.com.eg/adsid/integrator.${a}`], [".google.es", a => N`https://adservice.google.es/adsid/integrator.${a}`], [".google.com.et", a => N`https://adservice.google.com.et/adsid/integrator.${a}`], [".google.fi", a => N`https://adservice.google.fi/adsid/integrator.${a}`], [".google.com.fj", a => N`https://adservice.google.com.fj/adsid/integrator.${a}`], [".google.fm", a => N`https://adservice.google.fm/adsid/integrator.${a}`], [".google.fr", a => N`https://adservice.google.fr/adsid/integrator.${a}`], [".google.ga", a => N`https://adservice.google.ga/adsid/integrator.${a}`], [".google.ge", a => N`https://adservice.google.ge/adsid/integrator.${a}`], [".google.gg", a => N`https://adservice.google.gg/adsid/integrator.${a}`], [".google.com.gh", a => N`https://adservice.google.com.gh/adsid/integrator.${a}`], [".google.com.gi", a => N`https://adservice.google.com.gi/adsid/integrator.${a}`], [".google.gl", a => N`https://adservice.google.gl/adsid/integrator.${a}`], [".google.gm", a => N`https://adservice.google.gm/adsid/integrator.${a}`], [".google.gr", a => N`https://adservice.google.gr/adsid/integrator.${a}`], [".google.com.gt", a => N`https://adservice.google.com.gt/adsid/integrator.${a}`], [".google.gy", a => N`https://adservice.google.gy/adsid/integrator.${a}`], [".google.com.hk", a => N`https://adservice.google.com.hk/adsid/integrator.${a}`], [".google.hn", a => N`https://adservice.google.hn/adsid/integrator.${a}`], [".google.hr", a => N`https://adservice.google.hr/adsid/integrator.${a}`], [".google.ht", a => N`https://adservice.google.ht/adsid/integrator.${a}`], [".google.hu", a => N`https://adservice.google.hu/adsid/integrator.${a}`], [".google.co.id", a => N`https://adservice.google.co.id/adsid/integrator.${a}`], [".google.ie", a => N`https://adservice.google.ie/adsid/integrator.${a}`], [".google.co.il", a => N`https://adservice.google.co.il/adsid/integrator.${a}`], [".google.im", a => N`https://adservice.google.im/adsid/integrator.${a}`], [".google.co.in", a => N`https://adservice.google.co.in/adsid/integrator.${a}`], [".google.iq", a => N`https://adservice.google.iq/adsid/integrator.${a}`], [".google.is", a => N`https://adservice.google.is/adsid/integrator.${a}`], [".google.it", a => N`https://adservice.google.it/adsid/integrator.${a}`], [".google.je", a => N`https://adservice.google.je/adsid/integrator.${a}`], [".google.com.jm", a => N`https://adservice.google.com.jm/adsid/integrator.${a}`], [".google.jo", a => N`https://adservice.google.jo/adsid/integrator.${a}`], [".google.co.jp", a => N`https://adservice.google.co.jp/adsid/integrator.${a}`], [".google.co.ke", a => N`https://adservice.google.co.ke/adsid/integrator.${a}`], [".google.com.kh", a => N`https://adservice.google.com.kh/adsid/integrator.${a}`], [".google.ki", a => N`https://adservice.google.ki/adsid/integrator.${a}`], [".google.kg", a => N`https://adservice.google.kg/adsid/integrator.${a}`], [".google.co.kr", a => N`https://adservice.google.co.kr/adsid/integrator.${a}`], [".google.com.kw", a => N`https://adservice.google.com.kw/adsid/integrator.${a}`], [".google.kz", a => N`https://adservice.google.kz/adsid/integrator.${a}`], [".google.la", a => N`https://adservice.google.la/adsid/integrator.${a}`], [".google.com.lb", a => N`https://adservice.google.com.lb/adsid/integrator.${a}`], [".google.li", a => N`https://adservice.google.li/adsid/integrator.${a}`], [".google.lk", a => N`https://adservice.google.lk/adsid/integrator.${a}`], [".google.co.ls", a => N`https://adservice.google.co.ls/adsid/integrator.${a}`], [".google.lt", a => N`https://adservice.google.lt/adsid/integrator.${a}`], [".google.lu", a => N`https://adservice.google.lu/adsid/integrator.${a}`], [".google.lv", a => N`https://adservice.google.lv/adsid/integrator.${a}`], [".google.com.ly", a => N`https://adservice.google.com.ly/adsid/integrator.${a}`], [".google.md", a => N`https://adservice.google.md/adsid/integrator.${a}`], [".google.me", a => N`https://adservice.google.me/adsid/integrator.${a}`], [".google.mg", a => N`https://adservice.google.mg/adsid/integrator.${a}`], [".google.mk", a => N`https://adservice.google.mk/adsid/integrator.${a}`], [".google.ml", a => N`https://adservice.google.ml/adsid/integrator.${a}`], [".google.com.mm", a => N`https://adservice.google.com.mm/adsid/integrator.${a}`], [".google.mn", a => N`https://adservice.google.mn/adsid/integrator.${a}`], [".google.ms", a => N`https://adservice.google.ms/adsid/integrator.${a}`], [".google.com.mt", a => N`https://adservice.google.com.mt/adsid/integrator.${a}`], [".google.mu", a => N`https://adservice.google.mu/adsid/integrator.${a}`], [".google.mv", a => N`https://adservice.google.mv/adsid/integrator.${a}`], [".google.mw", a => N`https://adservice.google.mw/adsid/integrator.${a}`], [".google.com.mx", a => N`https://adservice.google.com.mx/adsid/integrator.${a}`], [".google.com.my", a => N`https://adservice.google.com.my/adsid/integrator.${a}`], [".google.co.mz", a => N`https://adservice.google.co.mz/adsid/integrator.${a}`], [".google.com.na", a => N`https://adservice.google.com.na/adsid/integrator.${a}`], [".google.com.ng", a => N`https://adservice.google.com.ng/adsid/integrator.${a}`], [".google.com.ni", a => N`https://adservice.google.com.ni/adsid/integrator.${a}`], [".google.ne", a => N`https://adservice.google.ne/adsid/integrator.${a}`], [".google.nl", a => N`https://adservice.google.nl/adsid/integrator.${a}`], [".google.no", a => N`https://adservice.google.no/adsid/integrator.${a}`], [".google.com.np", a => N`https://adservice.google.com.np/adsid/integrator.${a}`], [".google.nr", a => N`https://adservice.google.nr/adsid/integrator.${a}`], [".google.nu", a => N`https://adservice.google.nu/adsid/integrator.${a}`], [".google.co.nz", a => N`https://adservice.google.co.nz/adsid/integrator.${a}`], [".google.com.om", a => N`https://adservice.google.com.om/adsid/integrator.${a}`], [".google.com.pa", a => N`https://adservice.google.com.pa/adsid/integrator.${a}`], [".google.com.pe", a => N`https://adservice.google.com.pe/adsid/integrator.${a}`], [".google.com.pg", a => N`https://adservice.google.com.pg/adsid/integrator.${a}`], [".google.com.ph", a => N`https://adservice.google.com.ph/adsid/integrator.${a}`], [".google.com.pk", a => N`https://adservice.google.com.pk/adsid/integrator.${a}`], [".google.pl", a => N`https://adservice.google.pl/adsid/integrator.${a}`], [".google.pn", a => N`https://adservice.google.pn/adsid/integrator.${a}`], [".google.com.pr", a => N`https://adservice.google.com.pr/adsid/integrator.${a}`], [".google.ps", a => N`https://adservice.google.ps/adsid/integrator.${a}`], [".google.pt", a => N`https://adservice.google.pt/adsid/integrator.${a}`], [".google.com.py", a => N`https://adservice.google.com.py/adsid/integrator.${a}`], [".google.com.qa", a => N`https://adservice.google.com.qa/adsid/integrator.${a}`], [".google.ro", a => N`https://adservice.google.ro/adsid/integrator.${a}`], [".google.rw", a => N`https://adservice.google.rw/adsid/integrator.${a}`], [".google.com.sa", a => N`https://adservice.google.com.sa/adsid/integrator.${a}`], [".google.com.sb", a => N`https://adservice.google.com.sb/adsid/integrator.${a}`], [".google.sc", a => N`https://adservice.google.sc/adsid/integrator.${a}`], [".google.se", a => N`https://adservice.google.se/adsid/integrator.${a}`], [".google.com.sg", a => N`https://adservice.google.com.sg/adsid/integrator.${a}`], [".google.sh", a => N`https://adservice.google.sh/adsid/integrator.${a}`], [".google.si", a => N`https://adservice.google.si/adsid/integrator.${a}`], [".google.sk", a => N`https://adservice.google.sk/adsid/integrator.${a}`], [".google.sn", a => N`https://adservice.google.sn/adsid/integrator.${a}`], [".google.so", a => N`https://adservice.google.so/adsid/integrator.${a}`], [".google.sm", a => N`https://adservice.google.sm/adsid/integrator.${a}`], [".google.sr", a => N`https://adservice.google.sr/adsid/integrator.${a}`], [".google.st", a => N`https://adservice.google.st/adsid/integrator.${a}`], [".google.com.sv", a => N`https://adservice.google.com.sv/adsid/integrator.${a}`], [".google.td", a => N`https://adservice.google.td/adsid/integrator.${a}`], [".google.tg", a => N`https://adservice.google.tg/adsid/integrator.${a}`], [".google.co.th", a => N`https://adservice.google.co.th/adsid/integrator.${a}`], [".google.com.tj", a => N`https://adservice.google.com.tj/adsid/integrator.${a}`], [".google.tl", a => N`https://adservice.google.tl/adsid/integrator.${a}`], [".google.tm", a => N`https://adservice.google.tm/adsid/integrator.${a}`], [".google.tn", a => N`https://adservice.google.tn/adsid/integrator.${a}`], [".google.to", a => N`https://adservice.google.to/adsid/integrator.${a}`], [".google.com.tr", a => N`https://adservice.google.com.tr/adsid/integrator.${a}`], [".google.tt", a => N`https://adservice.google.tt/adsid/integrator.${a}`], [".google.com.tw", a => N`https://adservice.google.com.tw/adsid/integrator.${a}`], [".google.co.tz", a => N`https://adservice.google.co.tz/adsid/integrator.${a}`], [".google.com.ua", a => N`https://adservice.google.com.ua/adsid/integrator.${a}`], [".google.co.ug", a => N`https://adservice.google.co.ug/adsid/integrator.${a}`], [".google.co.uk", a => N`https://adservice.google.co.uk/adsid/integrator.${a}`], [".google.com.uy", a => N`https://adservice.google.com.uy/adsid/integrator.${a}`], [".google.co.uz", a => N`https://adservice.google.co.uz/adsid/integrator.${a}`], [".google.com.vc", a => N`https://adservice.google.com.vc/adsid/integrator.${a}`], [".google.co.ve", a => N`https://adservice.google.co.ve/adsid/integrator.${a}`], [".google.vg", a => N`https://adservice.google.vg/adsid/integrator.${a}`], [".google.co.vi", a => N`https://adservice.google.co.vi/adsid/integrator.${a}`], [".google.com.vn", a => N`https://adservice.google.com.vn/adsid/integrator.${a}`], [".google.vu", a => N`https://adservice.google.vu/adsid/integrator.${a}`], [".google.ws", a => N`https://adservice.google.ws/adsid/integrator.${a}`], [".google.rs", a => N`https://adservice.google.rs/adsid/integrator.${a}`], [".google.co.za", a => N`https://adservice.google.co.za/adsid/integrator.${a}`], [".google.co.zm", a => N`https://adservice.google.co.zm/adsid/integrator.${a}`], [".google.co.zw", a => N`https://adservice.google.co.zw/adsid/integrator.${a}`], [".google.cat", a => N`https://adservice.google.cat/adsid/integrator.${a}`]].map(([a, b]) => [a, {
    json: cc11001100_hook("json", b("json"), "object-key-init"),
    js: cc11001100_hook("js", b("js"), "object-key-init"),
    ["sync.js"]: cc11001100_hook("sync.js", b("sync.js"), "object-key-init")
  }])), "var-init");
  function yI(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", Wg("LINK", a), "var-init");
    try {
      if (d.rel = cc11001100_hook("d.rel", "preload", "assign"), Za("preload", "stylesheet")) {
        d.href = cc11001100_hook("d.href", He(b).toString(), "assign");
        const k = cc11001100_hook("k", mg('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView), "var-init");
        k && d.setAttribute("nonce", k);
      } else {
        if (b instanceof Ee) var e = cc11001100_hook("e", He(b).toString(), "var-init");else {
          if (b instanceof Oe) var f = cc11001100_hook("f", Pe(b), "var-init");else {
            if (b instanceof Oe) var g = cc11001100_hook("g", b, "var-init");else {
              b = cc11001100_hook("b", "object" == typeof b && b.za ? b.j() : String(b), "assign");
              b: {
                let k;
                try {
                  k = cc11001100_hook("k", new URL(b), "assign");
                } catch (l) {
                  var h = cc11001100_hook("h", "https:", "var-init");
                  break b;
                }
                h = cc11001100_hook("h", k.protocol, "assign");
              }
              "javascript:" === h && (b = cc11001100_hook("b", "about:invalid#zClosurez", "assign"));
              g = cc11001100_hook("g", new Oe(b, Ne), "assign");
            }
            f = cc11001100_hook("f", Pe(g), "assign");
          }
          e = cc11001100_hook("e", f, "assign");
        }
        d.href = cc11001100_hook("d.href", e, "assign");
      }
    } catch {
      return;
    }
    d.as = cc11001100_hook("d.as", "script", "assign");
    c && d.setAttribute("nonce", c);
    if (a = cc11001100_hook("a", a.getElementsByTagName("head")[0], "assign")) try {
      a.appendChild(d);
    } catch {}
  }
  ;
  let zI = cc11001100_hook("zI", t, "var-init");
  const BI = cc11001100_hook("BI", a => {
    const b = cc11001100_hook("b", new Map([["domain", t.location.hostname]]), "var-init");
    AI[3] >= Ea() && b.set("adsid", AI[1]);
    return Rh(xI.get(a).js, b);
  }, "var-init");
  let AI, CI;
  const DI = cc11001100_hook("DI", () => {
    zI = cc11001100_hook("zI", t, "assign");
    AI = cc11001100_hook("AI", zI.googleToken = cc11001100_hook("zI.googleToken", zI.googleToken || {}, "assign"), "assign");
    const a = cc11001100_hook("a", Ea(), "var-init");
    AI[1] && AI[3] > a && 0 < AI[2] || (AI[1] = cc11001100_hook("AI[1]", "", "assign"), AI[2] = cc11001100_hook("AI[2]", -1, "assign"), AI[3] = cc11001100_hook("AI[3]", -1, "assign"), AI[4] = cc11001100_hook("AI[4]", "", "assign"), AI[6] = cc11001100_hook("AI[6]", "", "assign"));
    CI = cc11001100_hook("CI", zI.googleIMState = cc11001100_hook("zI.googleIMState", zI.googleIMState || {}, "assign"), "assign");
    xI.has(CI[1]) || (CI[1] = cc11001100_hook("CI[1]", ".google.com", "assign"));
    Array.isArray(CI[5]) || (CI[5] = cc11001100_hook("CI[5]", [], "assign"));
    "boolean" !== typeof CI[6] && (CI[6] = cc11001100_hook("CI[6]", !1, "assign"));
    Array.isArray(CI[7]) || (CI[7] = cc11001100_hook("CI[7]", [], "assign"));
    "number" !== typeof CI[8] && (CI[8] = cc11001100_hook("CI[8]", 0, "assign"));
  }, "var-init");
  var EI = cc11001100_hook("EI", a => {
    DI();
    xI.has(a) && (CI[1] = cc11001100_hook("CI[1]", a, "assign"));
  }, "var-init");
  const FI = cc11001100_hook("FI", {
    Zc: cc11001100_hook("Zc", () => 0 < CI[8], "object-key-init"),
    vg: cc11001100_hook("vg", () => {
      CI[8]++;
    }, "object-key-init"),
    wg: cc11001100_hook("wg", () => {
      0 < CI[8] && CI[8]--;
    }, "object-key-init"),
    xg: cc11001100_hook("xg", () => {
      CI[8] = cc11001100_hook("CI[8]", 0, "assign");
    }, "object-key-init"),
    bl: cc11001100_hook("bl", () => !1, "object-key-init"),
    ge: cc11001100_hook("ge", () => CI[5], "object-key-init"),
    Rd: cc11001100_hook("Rd", a => {
      try {
        a();
      } catch (b) {
        t.setTimeout(() => {
          throw b;
        }, 0);
      }
    }, "object-key-init"),
    Ke: cc11001100_hook("Ke", () => {
      if (!FI.Zc()) {
        var a = cc11001100_hook("a", t.document, "var-init"),
          b = cc11001100_hook("b", e => {
            e = cc11001100_hook("e", BI(e), "assign");
            a: {
              try {
                var f = cc11001100_hook("f", mg("script[nonce]"), "var-init");
                break a;
              } catch {}
              f = cc11001100_hook("f", void 0, "assign");
            }
            yI(a, e.toString(), f);
            f = cc11001100_hook("f", Wg("SCRIPT", a), "assign");
            f.type = cc11001100_hook("f.type", "text/javascript", "assign");
            f.onerror = cc11001100_hook("f.onerror", () => t.processGoogleToken({}, 2), "assign");
            Gf(f, e);
            try {
              (a.head || a.body || a.documentElement).appendChild(f), FI.vg();
            } catch (g) {}
          }, "var-init"),
          c = cc11001100_hook("c", CI[1], "var-init");
        b(c);
        ".google.com" != c && b(".google.com");
        var d = cc11001100_hook("d", {
          newToken: cc11001100_hook("newToken", "FBT", "object-key-init")
        }, "var-init");
        t.setTimeout(() => t.processGoogleToken(d, 1), 1E3);
      }
    }, "object-key-init")
  }, "var-init");
  function GI(a) {
    cc11001100_hook("a", a, "function-parameter");
    DI();
    const b = cc11001100_hook("b", zI.googleToken[5] || 0, "var-init");
    a && (0 != b || AI[3] >= Ea() ? FI.Rd(a) : (FI.ge().push(a), FI.Ke()));
    AI[3] >= Ea() && AI[2] >= Ea() || FI.Ke();
  }
  var II = cc11001100_hook("II", a => {
    t.processGoogleToken = cc11001100_hook("t.processGoogleToken", t.processGoogleToken || ((b, c) => HI(b, c)), "assign");
    GI(a);
  }, "var-init");
  const HI = cc11001100_hook("HI", (a = {}, b = 0) => {
    var c = cc11001100_hook("c", a.newToken || "", "var-init"),
      d = cc11001100_hook("d", "NT" == c, "var-init"),
      e = cc11001100_hook("e", parseInt(a.freshLifetimeSecs || "", 10), "var-init"),
      f = cc11001100_hook("f", parseInt(a.validLifetimeSecs || "", 10), "var-init");
    const g = cc11001100_hook("g", a["1p_jar"] || "", "var-init");
    a = cc11001100_hook("a", a.pucrd || "", "assign");
    DI();
    1 == b ? FI.xg() : FI.wg();
    var h = cc11001100_hook("h", zI.googleToken = cc11001100_hook("zI.googleToken", zI.googleToken || {}, "assign"), "var-init"),
      k = cc11001100_hook("k", 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g, "var-init");
    d = cc11001100_hook("d", d && !FI.Zc() && (!(AI[3] >= Ea()) || "NT" == AI[1]), "assign");
    var l = cc11001100_hook("l", !(AI[3] >= Ea()) && 0 != b, "var-init");
    if (k || d || l) d = cc11001100_hook("d", Ea(), "assign"), e = cc11001100_hook("e", d + 1E3 * e, "assign"), f = cc11001100_hook("f", d + 1E3 * f, "assign"), 1E-5 > Math.random() && xi(t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" + `&err=${b}`), h[5] = cc11001100_hook("h[5]", b, "assign"), h[1] = cc11001100_hook("h[1]", c, "assign"), h[2] = cc11001100_hook("h[2]", e, "assign"), h[3] = cc11001100_hook("h[3]", f, "assign"), h[4] = cc11001100_hook("h[4]", g, "assign"), h[6] = cc11001100_hook("h[6]", a, "assign"), DI();
    if (k || !FI.Zc()) {
      b = cc11001100_hook("b", FI.ge(), "assign");
      for (c = cc11001100_hook("c", 0, "assign"); c < b.length; c++) FI.Rd(b[c]);
      b.length = cc11001100_hook("b.length", 0, "assign");
    }
  }, "var-init");
  const JI = cc11001100_hook("JI", new Map([["navigate", 1], ["reload", 2], ["back_forward", 3], ["prerender", 4]]), "var-init"),
    KI = cc11001100_hook("KI", new Map([[0, 1], [1, 2], [2, 3]]), "var-init");
  function LI(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.performance?.getEntriesByType("navigation")?.[0], "var-init");
      if (b?.type) return JI.get(b.type) ?? null;
    } catch {}
    return KI.get(a.performance?.navigation?.type) ?? null;
  }
  ;
  function MI(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (wb()) {
      var c = cc11001100_hook("c", a.document.documentElement.lang, "var-init");
      NI(a) ? OI(b, xh(a), !0, "", c) : new MutationObserver((d, e) => {
        NI(a) && (OI(b, xh(a), !1, c, a.document.documentElement.lang), e.disconnect());
      }).observe(a.document.documentElement, {
        attributeFilter: cc11001100_hook("attributeFilter", ["class"], "object-key-init")
      });
    }
  }
  function NI(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.document?.documentElement?.classList, "assign");
    return !(!a?.contains("translated-rtl") && !a?.contains("translated-ltr"));
  }
  function OI(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    Ai({
      ptt: cc11001100_hook("ptt", `${a}`, "object-key-init"),
      pvsid: cc11001100_hook("pvsid", `${b}`, "object-key-init"),
      ibatl: cc11001100_hook("ibatl", String(c), "object-key-init"),
      pl: cc11001100_hook("pl", d, "object-key-init"),
      nl: cc11001100_hook("nl", e, "object-key-init")
    }, "translate-event");
  }
  ;
  function PI(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", a.navigator?.userActivation, "assign")) {
      var b = cc11001100_hook("b", 0, "var-init");
      a?.hasBeenActive && (b |= cc11001100_hook("b", 1, "assign"));
      a?.isActive && (b |= cc11001100_hook("b", 2, "assign"));
      return b;
    }
  }
  ;
  const QI = cc11001100_hook("QI", /[+, ]/, "var-init");
  function RI(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.D, "var-init");
    var d = cc11001100_hook("d", a.pubWin, "var-init"),
      e = cc11001100_hook("e", {}, "var-init"),
      f = cc11001100_hook("f", d.document, "var-init");
    var g = cc11001100_hook("g", Ah(d), "var-init");
    var h = cc11001100_hook("h", jr(d, c.google_ad_width, c.google_ad_height), "var-init");
    var k = cc11001100_hook("k", ir(g).ed, "var-init");
    var l = cc11001100_hook("l", d.top == d ? 0 : Rg(d.top) ? 1 : 2, "var-init");
    var m = cc11001100_hook("m", 4, "var-init");
    h || 1 != l ? h || 2 != l ? h && 1 == l ? m = cc11001100_hook("m", 7, "assign") : h && 2 == l && (m = cc11001100_hook("m", 8, "assign")) : m = cc11001100_hook("m", 6, "assign") : m = cc11001100_hook("m", 5, "assign");
    k && (m |= cc11001100_hook("m", 16, "assign"));
    k = cc11001100_hook("k", "" + m, "assign");
    l = cc11001100_hook("l", lr(d), "assign");
    m = cc11001100_hook("m", !!c.google_page_url, "assign");
    e.google_iframing = cc11001100_hook("e.google_iframing", k, "assign");
    0 != l && (e.google_iframing_environment = cc11001100_hook("e.google_iframing_environment", l, "assign"));
    if (!m && "ad.yieldmanager.com" == f.domain) {
      for (k = cc11001100_hook("k", f.URL.substring(f.URL.lastIndexOf("http")), "assign"); -1 < k.indexOf("%");) try {
        k = cc11001100_hook("k", decodeURIComponent(k), "assign");
      } catch (q) {
        break;
      }
      c.google_page_url = cc11001100_hook("c.google_page_url", k, "assign");
      m = cc11001100_hook("m", !!k, "assign");
    }
    m ? (e.google_page_url = cc11001100_hook("e.google_page_url", c.google_page_url, "assign"), e.google_page_location = cc11001100_hook("e.google_page_location", (h ? f.referrer : f.URL) || "EMPTY", "assign")) : (h && Rg(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = cc11001100_hook("e.google_page_url", d.top.document.URL, "assign") : e.google_page_url = cc11001100_hook("e.google_page_url", h ? f.referrer : f.URL, "assign"), e.google_page_location = cc11001100_hook("e.google_page_location", null, "assign"));
    if (f.URL === e.google_page_url) try {
      var n = cc11001100_hook("n", Math.round(Date.parse(f.lastModified) / 1E3) || null, "var-init");
    } catch {
      n = cc11001100_hook("n", null, "assign");
    } else n = cc11001100_hook("n", null, "assign");
    e.google_last_modified_time = cc11001100_hook("e.google_last_modified_time", n, "assign");
    d = cc11001100_hook("d", g == g.top ? g.document.referrer : (d = cc11001100_hook("d", Kh(), "assign")) && d.referrer || "", "assign");
    e.google_referrer_url = cc11001100_hook("e.google_referrer_url", d, "assign");
    kr(e, c);
    e = cc11001100_hook("e", c.google_page_location || c.google_page_url, "assign");
    "EMPTY" == e && (e = cc11001100_hook("e", c.google_page_url, "assign"));
    e ? (e = cc11001100_hook("e", e.toString(), "assign"), 0 == e.indexOf("http://") ? e = cc11001100_hook("e", e.substring(7, e.length), "assign") : 0 == e.indexOf("https://") && (e = cc11001100_hook("e", e.substring(8, e.length), "assign")), d = cc11001100_hook("d", e.indexOf("/"), "assign"), -1 == d && (d = cc11001100_hook("d", e.length, "assign")), e = cc11001100_hook("e", e.substring(0, d).split("."), "assign"), d = cc11001100_hook("d", !1, "assign"), 3 <= e.length && (d = cc11001100_hook("d", e[e.length - 3] in gI, "assign")), 2 <= e.length && (d = cc11001100_hook("d", d || e[e.length - 2] in gI, "assign")), e = cc11001100_hook("e", d, "assign")) : e = cc11001100_hook("e", !1, "assign");
    e = cc11001100_hook("e", e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net", "assign");
    b = cc11001100_hook("b", SI(a, b), "assign");
    d = cc11001100_hook("d", a.D, "assign");
    f = cc11001100_hook("f", d.google_ad_channel, "assign");
    g = cc11001100_hook("g", "/pagead/ads?", "assign");
    "ca-pub-6219811747049371" === d.google_ad_client && TI.test(f) && (g = cc11001100_hook("g", "/pagead/lopri?", "assign"));
    a = cc11001100_hook("a", ii(b, `https://${e}${g}` + (B(a.ma, 9) && c.google_debug_params ? c.google_debug_params : "")), "assign");
    return c.google_ad_url = cc11001100_hook("c.google_ad_url", a, "assign");
  }
  function UI(a) {
    cc11001100_hook("a", a, "function-parameter");
    return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + hi({
      adk: cc11001100_hook("adk", a.google_ad_unit_key, "object-key-init"),
      client: cc11001100_hook("client", a.google_ad_client, "object-key-init"),
      fa: cc11001100_hook("fa", a.google_reactive_ad_format, "object-key-init")
    });
  }
  function VI(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      if (a.parentNode) return a.parentNode;
    } catch {
      return null;
    }
    if (9 === a.nodeType) a: {
      try {
        const c = cc11001100_hook("c", a ? Dg(a) : window, "var-init");
        if (c) {
          const d = cc11001100_hook("d", c.frameElement, "var-init");
          if (d && Rg(c.parent)) {
            var b = cc11001100_hook("b", d, "var-init");
            break a;
          }
        }
      } catch {}
      b = cc11001100_hook("b", null, "assign");
    } else b = cc11001100_hook("b", null, "assign");
    return b;
  }
  function WI(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.eid = cc11001100_hook("b.eid", QF(a.pubWin), "assign");
    const c = cc11001100_hook("c", a.D.google_loeid, "var-init");
    "string" === typeof c && (a.j |= cc11001100_hook("a.j", 4096, "assign"), b.loeid = cc11001100_hook("b.loeid", c, "assign"));
  }
  function XI(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", (a = cc11001100_hook("a", Ug(a.pubWin), "assign")) && a.document ? er(a.document, a) : new qg(-12245933, -12245933), "assign");
    b.scr_x = cc11001100_hook("b.scr_x", Math.round(a.x), "assign");
    b.scr_y = cc11001100_hook("b.scr_y", Math.round(a.y), "assign");
  }
  function YI(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", t.top.location.hash, "var-init");
      if (b) {
        const c = cc11001100_hook("c", b.match(a), "var-init");
        return c && c[1] || "";
      }
    } catch {}
    return "";
  }
  function ZI(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Mi(), "var-init");
    b && (a.debug_experiment_id = cc11001100_hook("a.debug_experiment_id", b, "assign"));
    a.creatives = cc11001100_hook("a.creatives", YI(/\b(?:creatives)=([\d,]+)/), "assign");
    a.adgroups = cc11001100_hook("a.adgroups", YI(/\b(?:adgroups)=([\d,]+)/), "assign");
    a.adgroups && (a.adtest = cc11001100_hook("a.adtest", "on", "assign"), a.disable_budget_throttling = cc11001100_hook("a.disable_budget_throttling", !0, "assign"), a.use_budget_filtering = cc11001100_hook("a.use_budget_filtering", !1, "assign"), a.retrieve_only = cc11001100_hook("a.retrieve_only", !0, "assign"), a.disable_fcap = cc11001100_hook("a.disable_fcap", !0, "assign"));
  }
  function $I(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.D, "var-init");
    var e = cc11001100_hook("e", a.pubWin, "var-init"),
      f = cc11001100_hook("f", a.J, "var-init"),
      g = cc11001100_hook("g", Ah(window), "var-init");
    d.fsapi && (b.fsapi = cc11001100_hook("b.fsapi", !0, "assign"));
    b.ref = cc11001100_hook("b.ref", d.google_referrer_url, "assign");
    b.loc = cc11001100_hook("b.loc", d.google_page_location, "assign");
    var h;
    (h = cc11001100_hook("h", Kh(e), "assign")) && ua(h.data) && "string" === typeof h.data.type ? (h = cc11001100_hook("h", h.data.type.toLowerCase(), "assign"), h = cc11001100_hook("h", "doubleclick" == h || "adsense" == h ? null : h, "assign")) : h = cc11001100_hook("h", null, "assign");
    h && (b.apn = cc11001100_hook("b.apn", h.substr(0, 10), "assign"));
    g = cc11001100_hook("g", ir(g), "assign");
    b.url || b.loc || !g.url || (b.url = cc11001100_hook("b.url", g.url, "assign"), g.ed || (b.usrc = cc11001100_hook("b.usrc", 1, "assign")));
    g.url != (b.loc || b.url) && (b.top = cc11001100_hook("b.top", g.url, "assign"));
    a.vb && (b.etu = cc11001100_hook("b.etu", a.vb, "assign"));
    (c = cc11001100_hook("c", BG(d, f, f ? aE(c, f) : null), "assign")) && (b.fc = cc11001100_hook("b.fc", c, "assign"));
    if (!ri(d)) {
      c = cc11001100_hook("c", a.pubWin.document, "assign");
      g = cc11001100_hook("g", "", "assign");
      if (c.documentMode && (h = cc11001100_hook("h", new zg(c).createElement("IFRAME"), "assign"), h.frameBorder = cc11001100_hook("h.frameBorder", "0", "assign"), h.style.height = cc11001100_hook("h.style.height", 0, "assign"), h.style.width = cc11001100_hook("h.style.width", 0, "assign"), h.style.position = cc11001100_hook("h.style.position", "absolute", "assign"), c.body)) {
        c.body.appendChild(h);
        try {
          const Y = cc11001100_hook("Y", h.contentWindow.document, "var-init");
          Y.open();
          Y.write(kf(wf));
          Y.close();
          g += cc11001100_hook("g", Y.documentMode, "assign");
        } catch (Y) {}
        c.body.removeChild(h);
      }
      b.docm = cc11001100_hook("b.docm", g, "assign");
    }
    let k, l, m, n, q, r, u, C, z;
    try {
      var A = cc11001100_hook("A", e.screenX, "var-init");
      k = cc11001100_hook("k", e.screenY, "assign");
    } catch (Y) {}
    try {
      l = cc11001100_hook("l", e.outerWidth, "assign"), m = cc11001100_hook("m", e.outerHeight, "assign");
    } catch (Y) {}
    try {
      n = cc11001100_hook("n", e.innerWidth, "assign"), q = cc11001100_hook("q", e.innerHeight, "assign");
    } catch (Y) {}
    try {
      r = cc11001100_hook("r", e.screenLeft, "assign"), u = cc11001100_hook("u", e.screenTop, "assign");
    } catch (Y) {}
    try {
      n = cc11001100_hook("n", e.innerWidth, "assign"), q = cc11001100_hook("q", e.innerHeight, "assign");
    } catch (Y) {}
    try {
      C = cc11001100_hook("C", e.screen.availWidth, "assign"), z = cc11001100_hook("z", e.screen.availTop, "assign");
    } catch (Y) {}
    b.brdim = cc11001100_hook("b.brdim", [r, u, A, k, C, z, l, m, n, q].join(), "assign");
    A = cc11001100_hook("A", 0, "assign");
    void 0 === t.postMessage && (A |= cc11001100_hook("A", 1, "assign"));
    0 < A && (b.osd = cc11001100_hook("b.osd", A, "assign"));
    b.vis = cc11001100_hook("b.vis", sH(e.document), "assign");
    A = cc11001100_hook("A", a.Y, "assign");
    e = cc11001100_hook("e", vG(d) ? aI : PH(new ZH(e, A, null, {
      width: cc11001100_hook("width", 0, "object-key-init"),
      height: cc11001100_hook("height", 0, "object-key-init")
    }, d.google_ad_width, d.google_ad_height, !1)), "assign");
    b.rsz = cc11001100_hook("b.rsz", e.toString(), "assign");
    b.abl = cc11001100_hook("b.abl", CH(e), "assign");
    if (!vG(d) && (e = cc11001100_hook("e", si(d), "assign"), null != e)) {
      A = cc11001100_hook("A", 0, "assign");
      a: {
        try {
          {
            var I = cc11001100_hook("I", d.google_async_iframe_id, "var-init");
            const Y = cc11001100_hook("Y", window.document, "var-init");
            if (I) var E = cc11001100_hook("E", Y.getElementById(I), "var-init");else {
              var F = cc11001100_hook("F", Y.getElementsByTagName("script"), "var-init"),
                H = cc11001100_hook("H", F[F.length - 1], "var-init");
              E = cc11001100_hook("E", H && H.parentNode || null, "assign");
            }
          }
          if (I = cc11001100_hook("I", E, "assign")) {
            E = cc11001100_hook("E", [], "assign");
            F = cc11001100_hook("F", 0, "assign");
            for (var T = cc11001100_hook("T", Date.now(), "var-init"); 100 >= ++F && 50 > Date.now() - T && (I = cc11001100_hook("I", VI(I), "assign"));) 1 === I.nodeType && E.push(I);
            var Ga = cc11001100_hook("Ga", E, "var-init");
            b: {
              for (T = cc11001100_hook("T", 0, "assign"); T < Ga.length; T++) {
                c: {
                  var aa = cc11001100_hook("aa", Ga[T], "var-init");
                  try {
                    if (aa.parentNode && 0 < aa.offsetWidth && 0 < aa.offsetHeight && aa.style && "none" !== aa.style.display && "hidden" !== aa.style.visibility && (!aa.style.opacity || 0 !== Number(aa.style.opacity))) {
                      const Y = cc11001100_hook("Y", aa.getBoundingClientRect(), "var-init");
                      var W = cc11001100_hook("W", 0 < Y.right && 0 < Y.bottom, "var-init");
                      break c;
                    }
                  } catch (Y) {}
                  W = cc11001100_hook("W", !1, "assign");
                }
                if (!W) {
                  var ya = cc11001100_hook("ya", !1, "var-init");
                  break b;
                }
              }
              ya = cc11001100_hook("ya", !0, "assign");
            }
            if (ya) {
              b: {
                const Y = cc11001100_hook("Y", Date.now(), "var-init");
                ya = cc11001100_hook("ya", /^html|body$/i, "assign");
                W = cc11001100_hook("W", /^fixed/i, "assign");
                for (aa = cc11001100_hook("aa", 0, "assign"); aa < Ga.length && 50 > Date.now() - Y; aa++) {
                  const $d = cc11001100_hook("$d", Ga[aa], "var-init");
                  if (!ya.test($d.tagName) && W.test($d.style.position || Yh($d, "position"))) {
                    var ra = cc11001100_hook("ra", $d, "var-init");
                    break b;
                  }
                }
                ra = cc11001100_hook("ra", null, "assign");
              }
              break a;
            }
          }
        } catch {}
        ra = cc11001100_hook("ra", null, "assign");
      }
      ra && ra.offsetWidth * ra.offsetHeight <= 4 * e.width * e.height && (A = cc11001100_hook("A", 1, "assign"));
      b.pfx = cc11001100_hook("b.pfx", A, "assign");
    }
    a: {
      if (.05 > Math.random() && f) try {
        const Y = cc11001100_hook("Y", f.document.getElementsByTagName("head")[0], "var-init");
        var ld = cc11001100_hook("ld", Y ? pI(Y) : 0, "var-init");
        break a;
      } catch (Y) {}
      ld = cc11001100_hook("ld", 0, "assign");
    }
    f = cc11001100_hook("f", ld, "assign");
    0 !== f && (b.cms = cc11001100_hook("b.cms", f, "assign"));
    d.google_lrv !== a.Ma && (b.alvm = cc11001100_hook("b.alvm", d.google_lrv || "none", "assign"));
  }
  function aJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init");
    a.location && a.location.ancestorOrigins ? c = cc11001100_hook("c", a.location.ancestorOrigins.length, "assign") : Sg(() => {
      c++;
      return !1;
    }, a);
    c && (b.nhd = cc11001100_hook("b.nhd", c, "assign"));
  }
  function bJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Z(b, 8, {}), "var-init");
    b = cc11001100_hook("b", Z(b, 9, {}), "assign");
    const d = cc11001100_hook("d", a.google_ad_section, "var-init"),
      e = cc11001100_hook("e", a.google_ad_format, "var-init");
    a = cc11001100_hook("a", a.google_ad_slot, "assign");
    e ? c[d] = cc11001100_hook("c[d]", c[d] ? c[d] + `,${e}` : e, "assign") : a && (b[d] = cc11001100_hook("b[d]", b[d] ? b[d] + `,${a}` : a, "assign"));
  }
  function cJ(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.D, "var-init");
    var e = cc11001100_hook("e", a.D, "var-init");
    b.dt = cc11001100_hook("b.dt", ul, "assign");
    e.google_async_iframe_id && e.google_bpp && (b.bpp = cc11001100_hook("b.bpp", e.google_bpp, "assign"));
    a: {
      try {
        var f = cc11001100_hook("f", t.performance, "var-init");
        if (f && f.timing && f.now) {
          var g = cc11001100_hook("g", f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading, "var-init");
          break a;
        }
      } catch (H) {}
      g = cc11001100_hook("g", null, "assign");
    }
    (e = cc11001100_hook("e", (e = cc11001100_hook("e", g, "assign")) ? dH(e, t.Date.now() - ul, 1E6) : null, "assign")) && (b.bdt = cc11001100_hook("b.bdt", e, "assign"));
    b.idt = cc11001100_hook("b.idt", dH(a.F, ul), "assign");
    e = cc11001100_hook("e", a.D, "assign");
    b.shv = cc11001100_hook("b.shv", K(a.ma, 2), "assign");
    a.Ma && (b.mjsv = cc11001100_hook("b.mjsv", a.Ma, "assign"));
    "sa" == e.google_loader_used ? b.ptt = cc11001100_hook("b.ptt", 5, "assign") : "aa" == e.google_loader_used && (b.ptt = cc11001100_hook("b.ptt", 9, "assign"));
    /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = cc11001100_hook("b.saldr", e.google_loader_used, "assign"));
    if (e = cc11001100_hook("e", Kh(a.pubWin), "assign")) b.is_amp = cc11001100_hook("b.is_amp", 1, "assign"), b.amp_v = cc11001100_hook("b.amp_v", Lh(e), "assign"), (e = cc11001100_hook("e", Mh(e), "assign")) && (b.act = cc11001100_hook("b.act", e, "assign"));
    e = cc11001100_hook("e", a.pubWin, "assign");
    e == e.top && (b.abxe = cc11001100_hook("b.abxe", 1, "assign"));
    if ("_gfp_a_" in a.pubWin) {
      e = cc11001100_hook("e", !0, "assign");
      if (!S(Dp) && (e = cc11001100_hook("e", a.pubWin._gfp_a_, "assign"), "boolean" !== typeof e)) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
      if (e || S(Dp)) e = cc11001100_hook("e", new VF(a.pubWin), "assign"), (g = cc11001100_hook("g", RF(e, "__gads", c), "assign")) && (b.cookie = cc11001100_hook("b.cookie", g, "assign")), (g = cc11001100_hook("g", RF(e, "__gpi", c), "assign")) && !g.includes("&") && (b.gpic = cc11001100_hook("b.gpic", g, "assign")), "1" === RF(e, "__gpi_opt_out", c) && (b.gpico = cc11001100_hook("b.gpico", "1", "assign"), b.pdopt = cc11001100_hook("b.pdopt", "1", "assign"));
    }
    e = cc11001100_hook("e", aD(), "assign");
    f = cc11001100_hook("f", Z(e, 8, {}), "assign");
    g = cc11001100_hook("g", d.google_ad_section, "assign");
    f[g] && (b.prev_fmts = cc11001100_hook("b.prev_fmts", f[g], "assign"));
    f = cc11001100_hook("f", Z(e, 9, {}), "assign");
    f[g] && (b.prev_slotnames = cc11001100_hook("b.prev_slotnames", f[g].toLowerCase(), "assign"));
    bJ(d, e);
    g = cc11001100_hook("g", Z(e, 15, 0), "assign");
    0 < g && (b.nras = cc11001100_hook("b.nras", String(g), "assign"));
    (f = cc11001100_hook("f", Kh(window), "assign")) ? (f ? (g = cc11001100_hook("g", f.pageViewId, "assign"), f = cc11001100_hook("f", f.clientId, "assign"), "string" === typeof f && (g += cc11001100_hook("g", f.replace(/\D/g, "").substr(0, 6), "assign"))) : g = cc11001100_hook("g", null, "assign"), g = cc11001100_hook("g", +g, "assign")) : (g = cc11001100_hook("g", Ah(window), "assign"), (f = cc11001100_hook("f", g.google_global_correlator, "assign")) || (g.google_global_correlator = cc11001100_hook("g.google_global_correlator", f = cc11001100_hook("f", 1 + Math.floor(Math.random() * Math.pow(2, 43)), "assign"), "assign")), g = cc11001100_hook("g", f, "assign"));
    b.correlator = cc11001100_hook("b.correlator", Z(e, 7, g), "assign");
    S(lq) && (b.rume = cc11001100_hook("b.rume", 1, "assign"));
    if (d.google_ad_channel) {
      g = cc11001100_hook("g", Z(e, 10, {}), "assign");
      f = cc11001100_hook("f", "", "assign");
      var h = cc11001100_hook("h", d.google_ad_channel.split(QI), "var-init");
      for (var k = cc11001100_hook("k", 0, "var-init"); k < h.length; k++) {
        var l = cc11001100_hook("l", h[k], "var-init");
        g[l] ? f += cc11001100_hook("f", l + "+", "assign") : g[l] = cc11001100_hook("g[l]", !0, "assign");
      }
      b.pv_ch = cc11001100_hook("b.pv_ch", f, "assign");
    }
    if (d.google_ad_host_channel) {
      f = cc11001100_hook("f", Z(e, 11, []), "assign");
      h = cc11001100_hook("h", d.google_ad_host_channel.split("|"), "assign");
      e = cc11001100_hook("e", -1, "assign");
      g = cc11001100_hook("g", [], "assign");
      for (k = cc11001100_hook("k", 0, "assign"); k < h.length; k++) {
        l = cc11001100_hook("l", h[k].split(QI), "assign");
        f[k] || (f[k] = cc11001100_hook("f[k]", {}, "assign"));
        var m = cc11001100_hook("m", "", "var-init");
        for (var n = cc11001100_hook("n", 0, "var-init"); n < l.length; n++) {
          var q = cc11001100_hook("q", l[n], "var-init");
          "" !== q && (f[k][q] ? m += cc11001100_hook("m", "+" + q, "assign") : f[k][q] = cc11001100_hook("f[k][q]", !0, "assign"));
        }
        m = cc11001100_hook("m", m.slice(1), "assign");
        g[k] = cc11001100_hook("g[k]", m, "assign");
        "" !== m && (e = cc11001100_hook("e", k, "assign"));
      }
      f = cc11001100_hook("f", "", "assign");
      if (-1 < e) {
        for (h = cc11001100_hook("h", 0, "assign"); h < e; h++) f += cc11001100_hook("f", g[h] + "|", "assign");
        f += cc11001100_hook("f", g[e], "assign");
      }
      b.pv_h_ch = cc11001100_hook("b.pv_h_ch", f, "assign");
    }
    b.frm = cc11001100_hook("b.frm", d.google_iframing, "assign");
    b.ife = cc11001100_hook("b.ife", d.google_iframing_environment, "assign");
    e = cc11001100_hook("e", d.google_ad_client, "assign");
    try {
      var r = cc11001100_hook("r", Ah(window), "var-init"),
        u = cc11001100_hook("u", r.google_prev_clients, "var-init");
      u || (u = cc11001100_hook("u", r.google_prev_clients = cc11001100_hook("r.google_prev_clients", {}, "assign"), "assign"));
      if (e in u) var C = cc11001100_hook("C", 1, "var-init");else u[e] = cc11001100_hook("u[e]", !0, "assign"), C = cc11001100_hook("C", 2, "assign");
    } catch {
      C = cc11001100_hook("C", 0, "assign");
    }
    b.pv = cc11001100_hook("b.pv", C, "assign");
    a.J && S(Qp) && (C = cc11001100_hook("C", a.J, "assign"), C = cc11001100_hook("C", wb() && NI(C) ? C.document.documentElement.lang : void 0, "assign"), C && (b.tl = cc11001100_hook("b.tl", C, "assign")));
    u = cc11001100_hook("u", a.pubWin.document, "assign");
    C = cc11001100_hook("C", a.D, "assign");
    e = cc11001100_hook("e", a.pubWin, "assign");
    r = cc11001100_hook("r", u.domain, "assign");
    e = cc11001100_hook("e", (y(c, 5) && bE(e) ? e.document.cookie : null) || "", "assign");
    h = cc11001100_hook("h", a.pubWin.screen, "assign");
    k = cc11001100_hook("k", u.referrer, "assign");
    m = cc11001100_hook("m", ki(), "assign");
    if (Kh()) var z = cc11001100_hook("z", window.gaGlobal || {}, "var-init");else {
      g = cc11001100_hook("g", Math.round(new Date().getTime() / 1E3), "assign");
      f = cc11001100_hook("f", C.google_analytics_domain_name, "assign");
      c = cc11001100_hook("c", "undefined" == typeof f ? sI("auto", r) : sI(f, r), "assign");
      n = cc11001100_hook("n", -1 < e.indexOf("__utma=" + c + "."), "assign");
      l = cc11001100_hook("l", -1 < e.indexOf("__utmb=" + c), "assign");
      (r = cc11001100_hook("r", (Ph() || window).gaGlobal, "assign")) || (r = cc11001100_hook("r", {}, "assign"), (Ph() || window).gaGlobal = cc11001100_hook("(Ph() || window).gaGlobal", r, "assign"));
      u = cc11001100_hook("u", !1, "assign");
      if (n) {
        var A = cc11001100_hook("A", e.split("__utma=" + c + ".")[1].split(";")[0].split("."), "var-init");
        l ? r.sid = cc11001100_hook("r.sid", A[3], "assign") : r.sid || (r.sid = cc11001100_hook("r.sid", g + "", "assign"));
        r.vid = cc11001100_hook("r.vid", A[0] + "." + A[1], "assign");
        r.from_cookie = cc11001100_hook("r.from_cookie", !0, "assign");
      } else {
        r.sid || (r.sid = cc11001100_hook("r.sid", g + "", "assign"));
        if (!r.vid) {
          u = cc11001100_hook("u", !0, "assign");
          l = cc11001100_hook("l", Math.round(2147483647 * Math.random()), "assign");
          n = cc11001100_hook("n", qI.appName, "assign");
          q = cc11001100_hook("q", qI.version, "assign");
          var I = cc11001100_hook("I", qI.language ? qI.language : qI.browserLanguage, "var-init"),
            E = cc11001100_hook("E", qI.platform, "var-init"),
            F = cc11001100_hook("F", qI.userAgent, "var-init");
          try {
            A = cc11001100_hook("A", qI.javaEnabled(), "assign");
          } catch (H) {
            A = cc11001100_hook("A", !1, "assign");
          }
          A = cc11001100_hook("A", [n, q, I, E, F, A ? 1 : 0].join(""), "assign");
          h ? A += cc11001100_hook("A", h.width + "x" + h.height + h.colorDepth, "assign") : t.java && t.java.awt && (h = cc11001100_hook("h", t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), "assign"), A += cc11001100_hook("A", h.screen.width + "x" + h.screen.height, "assign"));
          A = cc11001100_hook("A", A + e + (k || ""), "assign");
          for (h = cc11001100_hook("h", A.length, "assign"); 0 < m;) A += cc11001100_hook("A", m-- ^ h++, "assign");
          r.vid = cc11001100_hook("r.vid", (l ^ rI(A) & 2147483647) + "." + g, "assign");
        }
        r.from_cookie || (r.from_cookie = cc11001100_hook("r.from_cookie", !1, "assign"));
      }
      if (!r.cid) {
        b: for (g = cc11001100_hook("g", f, "assign"), A = cc11001100_hook("A", 999, "assign"), g && (g = cc11001100_hook("g", 0 == g.indexOf(".") ? g.substr(1) : g, "assign"), A = cc11001100_hook("A", g.split(".").length, "assign")), g = cc11001100_hook("g", 999, "assign"), e = cc11001100_hook("e", e.split(";"), "assign"), f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) if (h = cc11001100_hook("h", tI.exec(e[f]) || uI.exec(e[f]) || vI.exec(e[f]), "assign")) {
          k = cc11001100_hook("k", h[1] || 0, "assign");
          if (k == A) {
            z = cc11001100_hook("z", h[2], "assign");
            break b;
          }
          k < g && (g = cc11001100_hook("g", k, "assign"), z = cc11001100_hook("z", h[2], "assign"));
        }
        u && z && -1 != z.search(/^\d+\.\d+$/) ? (r.vid = cc11001100_hook("r.vid", z, "assign"), r.from_cookie = cc11001100_hook("r.from_cookie", !0, "assign")) : z != r.vid && (r.cid = cc11001100_hook("r.cid", z, "assign"));
      }
      r.dh = cc11001100_hook("r.dh", c, "assign");
      r.hid || (r.hid = cc11001100_hook("r.hid", Math.round(2147483647 * Math.random()), "assign"));
      z = cc11001100_hook("z", r, "assign");
    }
    b.ga_vid = cc11001100_hook("b.ga_vid", z.vid, "assign");
    b.ga_sid = cc11001100_hook("b.ga_sid", z.sid, "assign");
    b.ga_hid = cc11001100_hook("b.ga_hid", z.hid, "assign");
    b.ga_fc = cc11001100_hook("b.ga_fc", z.from_cookie, "assign");
    b.ga_cid = cc11001100_hook("b.ga_cid", z.cid, "assign");
    b.ga_wpids = cc11001100_hook("b.ga_wpids", C.google_analytics_uacct, "assign");
    aJ(a.pubWin, b);
    (a = cc11001100_hook("a", d.google_ad_layout, "assign")) && 0 <= TG[a] && (b.rplot = cc11001100_hook("b.rplot", TG[a], "assign"));
  }
  function dJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.l, "assign");
    if (a?.j() || jD()) b.npa = cc11001100_hook("b.npa", 1, "assign");
    if (a) {
      null != w(a, 3, !1) && (b.gdpr = cc11001100_hook("b.gdpr", y(a, 3) ? "1" : "0", "assign"));
      var c = cc11001100_hook("c", w(a, 1), "var-init");
      c && (b.us_privacy = cc11001100_hook("b.us_privacy", c, "assign"));
      (c = cc11001100_hook("c", w(a, 2), "assign")) && (b.gdpr_consent = cc11001100_hook("b.gdpr_consent", c, "assign"));
      (c = cc11001100_hook("c", w(a, 4), "assign")) && (b.addtl_consent = cc11001100_hook("b.addtl_consent", c, "assign"));
      (a = cc11001100_hook("a", w(a, 7), "assign")) && (b.tcfe = cc11001100_hook("b.tcfe", a, "assign"));
    }
  }
  function eJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.D, "var-init");
    dJ(a, b);
    Zg(lD, (d, e) => {
      b[d] = cc11001100_hook("b[d]", c[e], "assign");
    });
    vG(c) && (a = cc11001100_hook("a", JG(c), "assign"), b.fa = cc11001100_hook("b.fa", a, "assign"));
    b.pi || null == c.google_ad_slot || (a = cc11001100_hook("a", xs(c), "assign"), null != a.j && (a = cc11001100_hook("a", tn(a.j.value), "assign"), b.pi = cc11001100_hook("b.pi", a, "assign")));
  }
  function fJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Oh() || cr(a.pubWin.top), "var-init");
    c && (b.biw = cc11001100_hook("b.biw", c.width, "assign"), b.bih = cc11001100_hook("b.bih", c.height, "assign"));
    c = cc11001100_hook("c", a.pubWin, "assign");
    c !== c.top && (a = cc11001100_hook("a", cr(a.pubWin), "assign")) && (b.isw = cc11001100_hook("b.isw", a.width, "assign"), b.ish = cc11001100_hook("b.ish", a.height, "assign"));
  }
  function gJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.pubWin, "var-init");
    null !== c && c != c.top ? (a = cc11001100_hook("a", [c.document.URL], "assign"), c.name && a.push(c.name), c = cc11001100_hook("c", cr(c, !1), "assign"), a.push(c.width.toString()), a.push(c.height.toString()), a = cc11001100_hook("a", ah(a.join("")), "assign")) : a = cc11001100_hook("a", 0, "assign");
    0 !== a && (b.ifk = cc11001100_hook("b.ifk", a, "assign"));
  }
  function hJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    (a = cc11001100_hook("a", hD()[a.D.google_ad_client], "assign")) && (b.psts = cc11001100_hook("b.psts", a.join(), "assign"));
  }
  function iJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    (a = cc11001100_hook("a", a.pubWin.tmod, "assign")) && (b.tmod = cc11001100_hook("b.tmod", a, "assign"));
  }
  function jJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a = cc11001100_hook("a", a.pubWin.google_user_agent_client_hint, "assign")) {
      for (var c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) {
        var f = cc11001100_hook("f", a.charCodeAt(e), "var-init");
        255 < f && (c[d++] = cc11001100_hook("c[d++]", f & 255, "assign"), f >>= cc11001100_hook("f", 8, "assign"));
        c[d++] = cc11001100_hook("c[d++]", f, "assign");
      }
      a = cc11001100_hook("a", jc(c, 3), "assign");
      b.uach = cc11001100_hook("b.uach", a, "assign");
    }
  }
  function kJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      const e = cc11001100_hook("e", a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external), "var-init");
      if (e) {
        var c = cc11001100_hook("c", JSON.parse(e("os-mode")), "var-init"),
          d = cc11001100_hook("d", parseInt(c["os-mode"], 10), "var-init");
        0 <= d && (b.wsm = cc11001100_hook("b.wsm", d + 1, "assign"));
      }
    } catch {}
  }
  function lJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= a.D.google_ad_public_floor && (b.pubf = cc11001100_hook("b.pubf", a.D.google_ad_public_floor, "assign"));
    0 <= a.D.google_ad_private_floor && (b.pvtf = cc11001100_hook("b.pvtf", a.D.google_ad_private_floor, "assign"));
  }
  function mJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Number(a.D.google_traffic_source), "var-init");
    c && Object.values(Ka).includes(c) && (b.trt = cc11001100_hook("b.trt", a.D.google_traffic_source, "assign"));
  }
  function nJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    S(Sq) || "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = cc11001100_hook("b.td", 1, "assign"));
  }
  function oJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    S(oq) || KF("attribution-reporting", a.pubWin.document) && (b.nt = cc11001100_hook("b.nt", 1, "assign"));
  }
  function SI(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    eJ(a, c);
    DI();
    c.adsid = cc11001100_hook("c.adsid", AI[1], "assign");
    DI();
    c.pucrd = cc11001100_hook("c.pucrd", AI[6], "assign");
    jJ(a, c);
    cJ(a, c, b);
    ni(c);
    c.u_sd = cc11001100_hook("c.u_sd", dr(a.pubWin), "assign");
    c.dmc = cc11001100_hook("c.dmc", a.pubWin.navigator?.deviceMemory, "assign");
    Tk(889, () => {
      if (null == a.J) c.adx = cc11001100_hook("c.adx", -12245933, "assign"), c.ady = cc11001100_hook("c.ady", -12245933, "assign");else {
        var e = cc11001100_hook("e", wF(a.J, a.Y), "var-init");
        c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = cc11001100_hook("c.adx", Math.round(e.x), "assign"), c.ady = cc11001100_hook("c.ady", Math.round(e.y), "assign"));
        fr(a.Y) || (c.adx = cc11001100_hook("c.adx", -12245933, "assign"), c.ady = cc11001100_hook("c.ady", -12245933, "assign"), a.j |= cc11001100_hook("a.j", 32768, "assign"));
      }
    });
    fJ(a, c);
    gJ(a, c);
    XI(a, c);
    WI(a, c);
    a.G && (c.oid = cc11001100_hook("c.oid", a.G, "assign"));
    hJ(a, c);
    c.pvsid = cc11001100_hook("c.pvsid", xh(a.pubWin, Rk), "assign");
    iJ(a, c);
    kJ(a, c);
    c.uas = cc11001100_hook("c.uas", PI(a.pubWin), "assign");
    const d = cc11001100_hook("d", LI(a.pubWin), "var-init");
    d && (c.nvt = cc11001100_hook("c.nvt", d, "assign"));
    a.B && (c.scar = cc11001100_hook("c.scar", a.B, "assign"));
    a.v instanceof Uint8Array ? c.topics = cc11001100_hook("c.topics", jc(a.v, 3), "assign") : a.v && (c.topics = cc11001100_hook("c.topics", a.v, "assign"), c.tps = cc11001100_hook("c.tps", a.v, "assign"));
    $I(a, c, b);
    c.fu = cc11001100_hook("c.fu", a.j, "assign");
    c.bc = cc11001100_hook("c.bc", wI(), "assign");
    DI();
    c.jar = cc11001100_hook("c.jar", AI[4], "assign");
    B(a.ma, 9) && ZI(c);
    ol() && (c.atl = cc11001100_hook("c.atl", !0, "assign"));
    lJ(a, c);
    mJ(a, c);
    nJ(a, c);
    oJ(a, c);
    null == Uq(iq) || !1 !== a.D.google_video_play_muted && !0 !== S(jq) || 10 !== a.D.google_reactive_ad_format && 11 !== a.D.google_reactive_ad_format || (c.sdkv = cc11001100_hook("c.sdkv", Uq(iq), "assign"));
    return c;
  }
  const TI = cc11001100_hook("TI", /YtLoPri/, "var-init");
  var pJ = cc11001100_hook("pJ", class extends L {
      constructor(a) {
        super(a);
      }
    }, "var-init"),
    qJ = cc11001100_hook("qJ", Wd(pJ), "var-init");
  var rJ = cc11001100_hook("rJ", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    La() {
      return this.j.now();
    }
  }, "var-init");
  const sJ = cc11001100_hook("sJ", [255, 255, 255], "var-init");
  function tJ(a) {
    cc11001100_hook("a", a, "function-parameter");
    function b(d) {
      cc11001100_hook("d", d, "function-parameter");
      return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1];
    }
    var c = cc11001100_hook("c", a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/), "var-init");
    if (c || (c = cc11001100_hook("c", a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/), "assign"))) return b(c);
    if ("transparent" === a) return [0, 0, 0, 0];
    throw Error(`Invalid color: ${a}`);
  }
  function uJ(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", getComputedStyle(a), "var-init");
    if ("none" !== b.backgroundImage) return null;
    b = cc11001100_hook("b", tJ(b.backgroundColor), "assign");
    var c = cc11001100_hook("c", vJ(b), "var-init");
    if (c) return c;
    a = cc11001100_hook("a", (a = cc11001100_hook("a", a.parentElement, "assign")) ? uJ(a) : sJ, "assign");
    if (!a) return null;
    c = cc11001100_hook("c", b[3], "assign");
    return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])];
  }
  function vJ(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 1 === a[3] ? [a[0], a[1], a[2]] : null;
  }
  ;
  var xJ = cc11001100_hook("xJ", class {
    constructor(a, b, c, d) {
      this.yd = cc11001100_hook("this.yd", b, "assign");
      this.Nc = cc11001100_hook("this.Nc", c, "assign");
      this.gb = cc11001100_hook("this.gb", d, "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
      this.j = cc11001100_hook("this.j", new wJ(a), "assign");
    }
  }, "var-init");
  class wJ {
    constructor(a) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.j = cc11001100_hook("this.j", new Map(), "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
    }
    get m() {
      return this.l;
    }
  }
  ;
  function yJ(a) {
    cc11001100_hook("a", a, "function-parameter");
    M(a, {
      border: cc11001100_hook("border", "0", "object-key-init"),
      "box-shadow": cc11001100_hook("box-shadow", "none", "object-key-init"),
      display: cc11001100_hook("display", "inline", "object-key-init"),
      "float": cc11001100_hook("float", "none", "object-key-init"),
      margin: cc11001100_hook("margin", "0", "object-key-init"),
      outline: cc11001100_hook("outline", "0", "object-key-init"),
      padding: cc11001100_hook("padding", "0", "object-key-init")
    });
  }
  ;
  function zJ(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", new rk(), "var-init");
    d = cc11001100_hook("d", Bd(f, 4, d), "assign");
    a = cc11001100_hook("a", x(d, 1, a), "assign");
    b = cc11001100_hook("b", x(a, 2, b), "assign");
    c = cc11001100_hook("c", x(b, 3, c), "assign");
    e = cc11001100_hook("e", e.l, "assign");
    b = cc11001100_hook("b", e.handle, "assign");
    a = cc11001100_hook("a", AJ(e, 4), "assign");
    c = cc11001100_hook("c", sd(a, 8, Ak, c), "assign");
    return b.call(e, c);
  }
  ;
  const BJ = cc11001100_hook("BJ", [{
    Kb: cc11001100_hook("Kb", "1907259590", "object-key-init"),
    vc: cc11001100_hook("vc", 480, "object-key-init"),
    Ta: cc11001100_hook("Ta", 220, "object-key-init")
  }, {
    Kb: cc11001100_hook("Kb", "2837189651", "object-key-init"),
    vc: cc11001100_hook("vc", 400, "object-key-init"),
    Ta: cc11001100_hook("Ta", 180, "object-key-init")
  }, {
    Kb: cc11001100_hook("Kb", "9211025045", "object-key-init"),
    vc: cc11001100_hook("vc", 360, "object-key-init"),
    Ta: cc11001100_hook("Ta", 160, "object-key-init")
  }, {
    Kb: cc11001100_hook("Kb", "6584860439", "object-key-init"),
    vc: cc11001100_hook("vc", -Infinity, "object-key-init"),
    Ta: cc11001100_hook("Ta", 150, "object-key-init")
  }], "var-init");
  function CJ(a) {
    cc11001100_hook("a", a, "function-parameter");
    return BJ.find(b => b.vc <= a);
  }
  ;
  const DJ = cc11001100_hook("DJ", new class {
    constructor() {
      this.j = cc11001100_hook("this.j", [], "assign");
    }
  }(), "var-init");
  let EJ = cc11001100_hook("EJ", !1, "var-init");
  function FJ(a) {
    cc11001100_hook("a", a, "function-parameter");
    return GJ(a.j, 1065, a.win, () => {
      if (!a.l) {
        var b = cc11001100_hook("b", new xk(), "var-init");
        b = cc11001100_hook("b", J(b, 1, a.m), "assign");
        var c = cc11001100_hook("c", new wk(), "var-init");
        b = cc11001100_hook("b", sd(b, 2, yk, c), "assign");
        HJ(a.j.l, b);
      }
    }, 1E4);
  }
  class IJ {
    constructor(a, b, c) {
      this.win = cc11001100_hook("this.win", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
    cancel(a) {
      this.win.clearTimeout(a);
    }
  }
  function JJ(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    const g = cc11001100_hook("g", CJ(a.document.body.clientWidth), "var-init"),
      h = cc11001100_hook("h", b.j ? KJ(a, b, d, g, e, f) : LJ(a, b, d, g, e, f), "var-init");
    mm(h.isVisible(), !1, () => {
      EJ = cc11001100_hook("EJ", !1, "assign");
      for (const m of DJ.j) m();
      DJ.j.length = cc11001100_hook("DJ.j.length", 0, "assign");
    });
    h.show({
      Zd: cc11001100_hook("Zd", !0, "object-key-init")
    });
    EJ = cc11001100_hook("EJ", !0, "assign");
    const k = cc11001100_hook("k", new IJ(a, b, c), "var-init"),
      l = cc11001100_hook("l", FJ(k), "var-init");
    DJ.j.push(() => {
      var m = cc11001100_hook("m", b.l, "var-init");
      var n = cc11001100_hook("n", new xk(), "var-init");
      n = cc11001100_hook("n", J(n, 1, c), "assign");
      var q = cc11001100_hook("q", new vk(), "var-init");
      n = cc11001100_hook("n", sd(n, 3, yk, q), "assign");
      HJ(m, n);
      k.l = cc11001100_hook("k.l", !0, "assign");
    });
    MJ.push(() => {
      h.isVisible().M && h.collapse();
      k.cancel(l);
    });
  }
  function KJ(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    b = cc11001100_hook("b", NJ(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center", e, f), "assign");
    return Sx(a, b, {
      qd: cc11001100_hook("qd", .75, "object-key-init"),
      Yc: cc11001100_hook("Yc", .95, "object-key-init"),
      zIndex: cc11001100_hook("zIndex", 100001, "object-key-init"),
      Ja: cc11001100_hook("Ja", !0, "object-key-init"),
      Uc: cc11001100_hook("Uc", "adpub-drawer-root", "object-key-init"),
      Tc: cc11001100_hook("Tc", !0, "object-key-init")
    });
  }
  function LJ(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    a: {
      var g = cc11001100_hook("g", a.document.body.clientWidth, "var-init");
      var h = cc11001100_hook("h", .9 * g, "var-init");
      for (g = cc11001100_hook("g", 768 >= g ? 3 : 4, "assign"); 1 <= g; g--) {
        const k = cc11001100_hook("k", d.Ta * g + 42, "var-init");
        if (k <= h) {
          h = cc11001100_hook("h", k, "assign");
          break a;
        }
      }
    }
    c = cc11001100_hook("c", NJ(a, b, c, d, h, "600px", "24px", "24px", "start", e, f), "assign");
    return bx(a, c, {
      yb: cc11001100_hook("yb", `${h}px`, "object-key-init"),
      xb: cc11001100_hook("xb", OJ(b), "object-key-init"),
      ob: cc11001100_hook("ob", K(b.pa, 14), "object-key-init"),
      zIndex: cc11001100_hook("zIndex", 100001, "object-key-init"),
      Ja: cc11001100_hook("Ja", !0, "object-key-init"),
      ec: cc11001100_hook("ec", !1, "object-key-init"),
      Uc: cc11001100_hook("Uc", "adpub-drawer-root", "object-key-init"),
      Tc: cc11001100_hook("Tc", !0, "object-key-init")
    });
  }
  function NJ(a, b, c, d, e, f, g, h, k, l, m) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    cc11001100_hook("k", k, "function-parameter");
    cc11001100_hook("l", l, "function-parameter");
    cc11001100_hook("m", m, "function-parameter");
    var n = cc11001100_hook("n", b.pa, "var-init"),
      q = cc11001100_hook("q", K(n, 10), "var-init"),
      r = cc11001100_hook("r", q.indexOf("TERM"), "var-init"),
      u = cc11001100_hook("u", b.B, "var-init");
    var C = cc11001100_hook("C", S(Rq) ? {
      Ve: cc11001100_hook("Ve", u.replace("ca", "partner"), "object-key-init"),
      Gd: cc11001100_hook("Gd", "ads", "object-key-init")
    } : {
      Ve: cc11001100_hook("Ve", "pub-adfiliates-rockskipper", "object-key-init"),
      Gd: cc11001100_hook("Gd", "ads", "object-key-init")
    }, "var-init");
    e = cc11001100_hook("e", Math.max(Math.floor((e - Math.floor(e / d.Ta) * d.Ta) / 2), 5), "assign");
    u = cc11001100_hook("u", b.Sb ? "on" : "", "assign");
    var z = cc11001100_hook("z", K(n, 3), "var-init"),
      A = cc11001100_hook("A", S(Qq) ? `${b.ca.mb}` : `${U(Iq)}`, "var-init"),
      I = cc11001100_hook("I", b.ca.dc, "var-init");
    const E = cc11001100_hook("E", K(n, 7), "var-init"),
      F = cc11001100_hook("F", K(n, 6), "var-init"),
      H = cc11001100_hook("H", b.B, "var-init"),
      T = cc11001100_hook("T", q.substring(0, r), "var-init");
    q = cc11001100_hook("q", q.substring(r + 4), "assign");
    r = cc11001100_hook("r", d.Kb, "assign");
    const Ga = cc11001100_hook("Ga", C.Ve, "var-init");
    C = cc11001100_hook("C", C.Gd, "assign");
    const aa = cc11001100_hook("aa", !!B(n, 13), "var-init"),
      W = cc11001100_hook("W", void 0 === m ? "" : m, "var-init");
    f = cc11001100_hook("f", Cv('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' + Gv(V(g)) + " " + Gv(V(h)) + "; text-align: " + Gv(V(k)) + ';">' + (l ? '<div style="max-width: ' + Gv(V(f)) + '">' + Bv(z) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Bv(F) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Gv(V(g)) + "; text-align: " + Gv(V(k)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">search</span><span style="color:#80868b"> ' + Bv(T) + "</span>" + Bv(c) + '<span style="color:#80868b">' + Bv(q) + '</span></div></div><div id="anno-csa" style="margin:5px ' + Gv(V(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');" + (I ? "parent.postMessage({query:" + Kv(Lv(c)) + "},parent.location.origin);" : "const pageOptions = {'pubId': " + Kv(Lv(Ga)) + ", 'styleId': " + Kv(Lv(r)) + ", 'disableCarousel': true, 'query': " + Kv(Lv(c)) + ", 'hl': " + Kv(Lv(E)) + ", 'personalizedAds': 'false', 'fexp': " + Kv(Lv(A)) + ", 'adfiliateWp': " + Kv(Lv(H)) + "," + (W ? "'afdToken': " + Kv(Lv(W)) + "," : "") + "'adtest': " + Kv(Lv(u)) + "}; const adBlock = {'container': 'anno-csa', 'linkTarget': '_blank', 'number': " + Kv(Lv(8)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + Kv(Lv(C)) + ", pageOptions, adBlock);") + "\x3c/script>" + (aa ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') + "</div>"), "assign");
    n = cc11001100_hook("n", of("body", {
      dir: cc11001100_hook("dir", OJ(b) ? "rtl" : "ltr", "object-key-init"),
      lang: cc11001100_hook("lang", K(n, 7), "object-key-init"),
      style: cc11001100_hook("style", Xe({
        margin: cc11001100_hook("margin", "0", "object-key-init"),
        height: cc11001100_hook("height", "100%", "object-key-init"),
        "padding-top": cc11001100_hook("padding-top", "0px", "object-key-init"),
        overflow: cc11001100_hook("overflow", "hidden", "object-key-init")
      }), "object-key-init")
    }, xv(f)), "assign");
    f = cc11001100_hook("f", a.document.createElement("IFRAME"), "assign");
    M(f, {
      border: cc11001100_hook("border", "0", "object-key-init"),
      width: cc11001100_hook("width", "100%", "object-key-init")
    });
    b.ca.dc ? PJ(a, b, f, c, d, m) : QJ(a, b, f);
    f.srcdoc = cc11001100_hook("f.srcdoc", kf(n), "assign");
    return f;
  }
  function PJ(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    const g = cc11001100_hook("g", RJ(b, a, function (h) {
      h.data.query === d && SJ(a, b, c, d, e, f);
    }), "var-init");
    DJ.j.push(() => {
      a.removeEventListener("message", g);
    });
  }
  function SJ(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    const g = cc11001100_hook("g", c.contentDocument.body, "var-init"),
      h = cc11001100_hook("h", new ResizeObserver(() => {
        c.height = cc11001100_hook("c.height", `${g.parentElement.offsetHeight}px`, "assign");
      }), "var-init");
    h.observe(g);
    const k = cc11001100_hook("k", TJ(b, a, () => {
      const l = cc11001100_hook("l", c.contentDocument?.body?.parentElement?.offsetHeight, "var-init");
      l && (c.height = cc11001100_hook("c.height", `${l}px`, "assign"));
    }), "var-init");
    UJ(b, c, d, e, f);
    MJ.push(() => {
      h.disconnect();
      a.clearInterval(k);
    });
  }
  function QJ(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    function d(g) {
      cc11001100_hook("g", g, "function-parameter");
      const h = cc11001100_hook("h", new ResizeObserver(() => {
        c.height = cc11001100_hook("c.height", `${g.parentElement.offsetHeight}px`, "assign");
      }), "var-init");
      h.observe(g);
      const k = cc11001100_hook("k", TJ(b, a, () => {
        const l = cc11001100_hook("l", c.contentDocument?.body?.parentElement?.offsetHeight, "var-init");
        l && (c.height = cc11001100_hook("c.height", `${l}px`, "assign"));
      }), "var-init");
      MJ.push(() => {
        h.disconnect();
        a.clearInterval(k);
      });
    }
    function e() {
      if (!f) {
        const g = cc11001100_hook("g", c.contentDocument?.body || c.contentWindow?.document?.body, "var-init");
        g && (f = cc11001100_hook("f", !0, "assign"), d(g));
      }
      return f;
    }
    let f = cc11001100_hook("f", !1, "var-init");
    c.onload = cc11001100_hook("c.onload", () => void e(), "assign");
    b.Ba(1066, pD(a, () => e(), 100));
  }
  function UJ(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", a.pa, "var-init"),
      g = cc11001100_hook("g", b.contentWindow, "var-init");
    b = cc11001100_hook("b", b?.contentDocument || b.contentWindow?.document, "assign");
    if (g) {
      if (void 0 === g._googCsa) throw Error("No _googCsa");
      if (!b) throw Error("No contentDocument");
    } else throw Error("No googCsa window");
    a = cc11001100_hook("a", {
      pubId: cc11001100_hook("pubId", "pub-adfiliates-rockskipper", "object-key-init"),
      styleId: cc11001100_hook("styleId", d.Kb, "object-key-init"),
      disableCarousel: cc11001100_hook("disableCarousel", !0, "object-key-init"),
      query: cc11001100_hook("query", c, "object-key-init"),
      hl: cc11001100_hook("hl", K(f, 7), "object-key-init"),
      personalizedAds: cc11001100_hook("personalizedAds", "false", "object-key-init"),
      fexp: cc11001100_hook("fexp", S(Qq) ? `${a.ca.mb}` : `${U(Iq)}`, "object-key-init"),
      adfiliateWp: cc11001100_hook("adfiliateWp", a.B, "object-key-init"),
      adtest: cc11001100_hook("adtest", a.Sb ? "on" : "", "object-key-init")
    }, "assign");
    e && (a.afdToken = cc11001100_hook("a.afdToken", e, "assign"));
    g._googCsa("ads", a, {
      container: cc11001100_hook("container", "anno-csa", "object-key-init"),
      linkTarget: cc11001100_hook("linkTarget", "_blank", "object-key-init"),
      number: cc11001100_hook("number", 8, "object-key-init"),
      width: cc11001100_hook("width", b.body.offsetWidth - 30, "object-key-init")
    });
  }
  const MJ = cc11001100_hook("MJ", [], "var-init");
  function VJ(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.substring(Math.max(b - 30, 0), b) + "~~" + a.substring(c, Math.min(c + 30, a.length));
  }
  function WJ(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", tJ(a), "assign");
    var b = cc11001100_hook("b", new hk(), "var-init");
    b = cc11001100_hook("b", jd(b, 1, a[0], 0), "assign");
    b = cc11001100_hook("b", jd(b, 2, a[1], 0), "assign");
    b = cc11001100_hook("b", jd(b, 3, a[2], 0), "assign");
    return jd(b, 4, Sc(a[3]), 0);
  }
  ;
  class XJ {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.j = cc11001100_hook("this.j", !1, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.l = cc11001100_hook("this.l", this.v.ta(264, c => {
        this.j && (YJ || (c = cc11001100_hook("c", Date.now(), "assign")), this.m(c), YJ ? ZJ.call(t, this.l) : t.setTimeout(this.l, 17));
      }), "assign");
    }
    start() {
      this.j || (this.j = cc11001100_hook("this.j", !0, "assign"), YJ ? ZJ.call(t, this.l) : this.l(0));
    }
  }
  var ZJ = cc11001100_hook("ZJ", t.requestAnimationFrame || t.webkitRequestAnimationFrame, "var-init"),
    YJ = cc11001100_hook("YJ", !!ZJ && !/'iPhone'/.test(t.navigator.userAgent), "var-init");
  function $J(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a * a * a;
  }
  function aK(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", 1 - a, "assign");
    return 1 - a * a * a;
  }
  class bK {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.B = cc11001100_hook("this.B", b, "assign");
      this.H = cc11001100_hook("this.H", 100, "assign");
      this.progress = cc11001100_hook("this.progress", 0, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
      this.F = cc11001100_hook("this.F", !1, "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.A = cc11001100_hook("this.A", new XJ(Ba(this.I, this), c), "assign");
    }
    I(a) {
      if (this.F) this.A.j = cc11001100_hook("this.A.j", !1, "assign");else {
        null === this.l && (this.l = cc11001100_hook("this.l", a, "assign"));
        this.progress = cc11001100_hook("this.progress", (a - this.l) / this.H, "assign");
        1 <= this.progress && (this.progress = cc11001100_hook("this.progress", 1, "assign"));
        a = cc11001100_hook("a", this.v ? this.v(this.progress) : this.progress, "assign");
        this.m = cc11001100_hook("this.m", [], "assign");
        for (let b = cc11001100_hook("b", 0, "var-init"); b < this.j.length; b++) this.m.push((this.B[b] - this.j[b]) * a + this.j[b]);
        this.C();
        1 == this.progress && (this.A.j = cc11001100_hook("this.A.j", !1, "assign"), this.G());
      }
    }
    G() {}
    C() {}
    play() {
      this.F = cc11001100_hook("this.F", !1, "assign");
      this.A.start();
    }
    reset(a, b, c) {
      this.l = cc11001100_hook("this.l", null, "assign");
      this.j = cc11001100_hook("this.j", a, "assign");
      this.B = cc11001100_hook("this.B", b, "assign");
      this.H = cc11001100_hook("this.H", c, "assign");
      this.progress = cc11001100_hook("this.progress", 0, "assign");
    }
  }
  ;
  var cK = cc11001100_hook("cK", class {
    constructor(a, b, c, d) {
      this.C = cc11001100_hook("this.C", a, "assign");
      this.G = cc11001100_hook("this.G", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.B = cc11001100_hook("this.B", d, "assign");
    }
    get j() {
      return this.C;
    }
    get A() {
      return this.G;
    }
    get v() {
      return this.m;
    }
    get l() {
      return this.B;
    }
  }, "var-init");
  function dK(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", eK(a.document, "search"), "assign");
    M(a, b);
    a.className = cc11001100_hook("a.className", "google-material-icons", "assign");
    return a;
  }
  function fK(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", eK(a, "close"), "assign");
    M(a, {
      color: cc11001100_hook("color", "#5F6368", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init"),
      "font-size": cc11001100_hook("font-size", "15px", "object-key-init"),
      left: cc11001100_hook("left", b ? "" : "20px", "object-key-init"),
      right: cc11001100_hook("right", b ? "20px" : "", "object-key-init"),
      "pointer-events": cc11001100_hook("pointer-events", "initial", "object-key-init"),
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "16px", "object-key-init"),
      transform: cc11001100_hook("transform", "none", "object-key-init")
    });
    return a;
  }
  function gK(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", eK(a, "expand_more"), "assign");
    M(a, {
      color: cc11001100_hook("color", "#5F6368", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init"),
      "font-size": cc11001100_hook("font-size", "15px", "object-key-init"),
      left: cc11001100_hook("left", c ? "" : "0", "object-key-init"),
      right: cc11001100_hook("right", c ? "0" : "", "object-key-init"),
      padding: cc11001100_hook("padding", c ? "0 0 0 16px" : "0 16px 0 0", "object-key-init"),
      "pointer-events": cc11001100_hook("pointer-events", "initial", "object-key-init"),
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "20px", "object-key-init"),
      transform: cc11001100_hook("transform", `${b}`, "object-key-init")
    });
    return a;
  }
  function eK(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.createElement("SPAN"), "var-init");
    c.appendChild(a.createTextNode(b));
    yJ(c);
    M(c, {
      "font-family": cc11001100_hook("font-family", '"Google Material Icons"', "object-key-init"),
      "font-style": cc11001100_hook("font-style", "normal", "object-key-init"),
      "font-weight": cc11001100_hook("font-weight", "normal", "object-key-init"),
      "text-decoration": cc11001100_hook("text-decoration", "none", "object-key-init")
    });
    c.className = cc11001100_hook("c.className", "google-material-icons", "assign");
    return c;
  }
  ;
  function hK(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return hw({
      J: cc11001100_hook("J", a, "object-key-init"),
      hd: cc11001100_hook("hd", 3E3, "object-key-init"),
      kd: cc11001100_hook("kd", a.innerWidth > Gl ? 650 : 0, "object-key-init"),
      Z: cc11001100_hook("Z", c, "object-key-init"),
      Sd: cc11001100_hook("Sd", b, "object-key-init")
    });
  }
  function iK(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.document.getElementById("google-anno-sa");
  }
  function jK(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", document.createElement("SPAN"), "var-init");
    c.id = cc11001100_hook("c.id", "gda", "assign");
    c.appendChild(fK(a.document, b.j === OJ(b)));
    kK(b, 1064, c, d => {
      const e = cc11001100_hook("e", OJ(b), "var-init");
      var f = cc11001100_hook("f", (b.j ? e : !e) ? a.innerWidth : -a.innerWidth, "var-init");
      lK(b, iK(a), 0, f, $J).play();
      const g = cc11001100_hook("g", mK(b), "var-init");
      b.ca.Dc ? (f = cc11001100_hook("f", eK(a.document, "shoppingmode"), "assign"), M(f, {
        "font-size": cc11001100_hook("font-size", "18px", "object-key-init"),
        "margin-right": cc11001100_hook("margin-right", "8px", "object-key-init"),
        "margin-top": cc11001100_hook("margin-top", "10px", "object-key-init"),
        left: cc11001100_hook("left", "13px", "object-key-init"),
        top: cc11001100_hook("top", "14px", "object-key-init"),
        margin: cc11001100_hook("margin", "0", "object-key-init"),
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        "line-height": cc11001100_hook("line-height", "normal", "object-key-init")
      }), g.appendChild(f)) : g.appendChild(dK(a, {
        "font-size": cc11001100_hook("font-size", "18px", "object-key-init"),
        "margin-right": cc11001100_hook("margin-right", "8px", "object-key-init"),
        "margin-top": cc11001100_hook("margin-top", "10px", "object-key-init"),
        left: cc11001100_hook("left", "13px", "object-key-init"),
        top: cc11001100_hook("top", "14px", "object-key-init"),
        margin: cc11001100_hook("margin", "0", "object-key-init"),
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        "line-height": cc11001100_hook("line-height", "normal", "object-key-init")
      }));
      kK(b, 1064, g, h => {
        const k = cc11001100_hook("k", (b.j ? e : !e) ? a.innerWidth : -a.innerWidth, "var-init");
        lK(b, iK(a), k, 0, aK).play();
        a.document.body.removeChild(g);
        h.preventDefault();
        return !1;
      });
      a.document.body.appendChild(g);
      d.preventDefault();
      return !1;
    });
    return c;
  }
  function mK(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", document.createElement("div"), "var-init");
    b.id = cc11001100_hook("b.id", "gca", "assign");
    const c = cc11001100_hook("c", OJ(a), "var-init");
    a = cc11001100_hook("a", a.j ? c : !c, "assign");
    M(b, {
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      bottom: cc11001100_hook("bottom", "0%", "object-key-init"),
      left: cc11001100_hook("left", a ? "" : "0%", "object-key-init"),
      right: cc11001100_hook("right", a ? "0%" : "", "object-key-init"),
      width: cc11001100_hook("width", "45px", "object-key-init"),
      height: cc11001100_hook("height", "45px", "object-key-init"),
      background: cc11001100_hook("background", "white", "object-key-init"),
      "border-top-left-radius": cc11001100_hook("border-top-left-radius", "20px", "object-key-init"),
      "border-top-right-radius": cc11001100_hook("border-top-right-radius", "20px", "object-key-init"),
      "box-shadow": cc11001100_hook("box-shadow", "0px 0px 10px 0px #00000026", "object-key-init"),
      color: cc11001100_hook("color", "#1967D2", "object-key-init"),
      "z-index": cc11001100_hook("z-index", "1000", "object-key-init")
    });
    return b;
  }
  function nK(a) {
    cc11001100_hook("a", a, "function-parameter");
    new MutationObserver(b => {
      b.forEach(c => {
        "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && M(a.document.body, {
          "padding-bottom": cc11001100_hook("padding-bottom", "45px", "object-key-init")
        });
      });
    }).observe(a.document.body, {
      attributes: cc11001100_hook("attributes", !0, "object-key-init")
    });
  }
  function oK(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return null !== a.location?.href?.match(/goog_fsa=1/);
    } catch (b) {
      return !1;
    }
  }
  function pK(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", K(c.pa, 11), "var-init");
    b = cc11001100_hook("b", b.getElementsByClassName("google-anno-sa-qtx")[0], "assign");
    b instanceof HTMLElement && (b.innerText = cc11001100_hook("b.innerText", d.replace("TERM", a.j), "assign"));
    c = cc11001100_hook("c", c.l, "assign");
    d = cc11001100_hook("d", new Vj(), "assign");
    d = cc11001100_hook("d", x(d, 1, a.m), "assign");
    d = cc11001100_hook("d", Bd(d, 4, a.j), "assign");
    a = cc11001100_hook("a", c.handle, "assign");
    b = cc11001100_hook("b", AJ(c, 7), "assign");
    d = cc11001100_hook("d", sd(b, 6, Ak, d), "assign");
    return a.call(c, d);
  }
  function qK(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (a.j !== d || null !== a.m || a.v !== e) {
      if (null !== a.l) {
        var f = cc11001100_hook("f", a.l, "var-init"),
          g = cc11001100_hook("g", c.l, "var-init");
        var h = cc11001100_hook("h", new Uj(), "var-init");
        h = cc11001100_hook("h", J(h, 1, f), "assign");
        f = cc11001100_hook("f", g.handle, "assign");
        var k = cc11001100_hook("k", AJ(g, 8), "var-init");
        h = cc11001100_hook("h", sd(k, 7, Ak, h), "assign");
        f.call(g, h);
      }
      a.j = cc11001100_hook("a.j", d, "assign");
      a.m = cc11001100_hook("a.m", null, "assign");
      a.v = cc11001100_hook("a.v", e, "assign");
      (d = cc11001100_hook("d", iK(b), "assign")) ? a.l = cc11001100_hook("a.l", pK(a, d, c), "assign") : (lw(b) ? b = cc11001100_hook("b", null, "assign") : (d = cc11001100_hook("d", b.getComputedStyle(b.document.body).paddingBottom.match(/\d+/), "assign"), M(b.document.body, {
        "padding-bottom": cc11001100_hook("padding-bottom", (d && d.length ? Number(d[0]) + 45 : 45) + "px", "object-key-init")
      }), nK(b), d = cc11001100_hook("d", document.createElement("div"), "assign"), d.id = cc11001100_hook("d.id", "google-anno-sa", "assign"), d.dir = cc11001100_hook("d.dir", OJ(c) ? "rtl" : "ltr", "assign"), M(d, {
        background: cc11001100_hook("background", "white", "object-key-init"),
        "border-style": cc11001100_hook("border-style", "solid", "object-key-init"),
        "border-top-left-radius": cc11001100_hook("border-top-left-radius", "20px", "object-key-init"),
        "border-top-right-radius": cc11001100_hook("border-top-right-radius", "20px", "object-key-init"),
        bottom: cc11001100_hook("bottom", "0", "object-key-init"),
        height: cc11001100_hook("height", "45px", "object-key-init"),
        position: cc11001100_hook("position", "fixed", "object-key-init"),
        "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
        width: cc11001100_hook("width", "100%", "object-key-init"),
        border: cc11001100_hook("border", "0px", "object-key-init"),
        left: cc11001100_hook("left", "0px", "object-key-init"),
        "box-shadow": cc11001100_hook("box-shadow", "0px 0px 10px 0px #00000026", "object-key-init"),
        "z-index": cc11001100_hook("z-index", "1000", "object-key-init")
      }), d.appendChild(jK(b, c)), d.appendChild(rK(a, b, c)), d.appendChild(sK(a, b, c)), c = cc11001100_hook("c", pK(a, d, c), "assign"), b.document.body.appendChild(d), b = cc11001100_hook("b", c, "assign")), a.l = cc11001100_hook("a.l", b, "assign"));
    }
  }
  function rK(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", document.createElement("SPAN"), "var-init");
    yJ(d);
    M(d, {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "2.5px", "object-key-init"),
      bottom: cc11001100_hook("bottom", "2.5px", "object-key-init"),
      left: cc11001100_hook("left", "60px", "object-key-init"),
      right: cc11001100_hook("right", "60px", "object-key-init"),
      display: cc11001100_hook("display", "flex", "object-key-init"),
      "flex-direction": cc11001100_hook("flex-direction", "row", "object-key-init"),
      "justify-content": cc11001100_hook("justify-content", "center", "object-key-init"),
      color: cc11001100_hook("color", "#1967D2", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
    var e = cc11001100_hook("e", OJ(c), "var-init");
    c.j || M(d, {
      "justify-content": cc11001100_hook("justify-content", "", "object-key-init")
    });
    e = cc11001100_hook("e", {
      "font-size": cc11001100_hook("font-size", "18px", "object-key-init"),
      width: cc11001100_hook("width", "15px", "object-key-init"),
      height: cc11001100_hook("height", "15px", "object-key-init"),
      "margin-left": cc11001100_hook("margin-left", e ? "8px" : "", "object-key-init"),
      "margin-right": cc11001100_hook("margin-right", e ? "" : "8px", "object-key-init"),
      "margin-top": cc11001100_hook("margin-top", "11px", "object-key-init"),
      "line-height": cc11001100_hook("line-height", "normal", "object-key-init")
    }, "assign");
    if (c.ca.Dc) {
      const f = cc11001100_hook("f", eK(b.document, "shoppingmode"), "var-init");
      M(f, e);
      d.appendChild(f);
    } else d.appendChild(dK(b, e));
    e = cc11001100_hook("e", document.createElement("SPAN"), "assign");
    e.classList?.add("google-anno-sa-qtx", "google-anno-skip");
    M(e, {
      height: cc11001100_hook("height", "40px", "object-key-init"),
      "align-items": cc11001100_hook("align-items", "center", "object-key-init"),
      "line-height": cc11001100_hook("line-height", "40px", "object-key-init"),
      "font-size": cc11001100_hook("font-size", "16px", "object-key-init"),
      "font-weight": cc11001100_hook("font-weight", "400", "object-key-init"),
      "font-style": cc11001100_hook("font-style", "normal", "object-key-init"),
      "font-family": cc11001100_hook("font-family", "Roboto", "object-key-init"),
      "text-overflow": cc11001100_hook("text-overflow", "ellipsis", "object-key-init"),
      "white-space": cc11001100_hook("white-space", "nowrap", "object-key-init"),
      overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
      "-webkit-tap-highlight-color": cc11001100_hook("-webkit-tap-highlight-color", "transparent", "object-key-init")
    });
    kK(c, 999, d, f => tK(a, b, c, f));
    d.appendChild(e);
    return d;
  }
  function sK(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", document.createElement("DIV"), "var-init");
    d.id = cc11001100_hook("d.id", "google-anno-ea", "assign");
    c.j || M(d, {
      width: cc11001100_hook("width", "60px", "object-key-init"),
      height: cc11001100_hook("height", "45px", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
    d.appendChild(gK(b.document, c.j ? "rotate(180deg) translateY(5px)" : OJ(c) ? "rotate(270deg) translateX(-5px)" : "rotate(90deg) translateX(5px)", c.j !== OJ(c)));
    kK(c, 999, d, e => tK(a, b, c, e));
    return d;
  }
  function tK(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", zJ(a.m, null, a.l, a.j, c), "var-init");
    JJ(b, c, e, a.j, !1, c.ca.Lb ? c.G.get(a.j) || "" : "");
    d.preventDefault();
    return !1;
  }
  var uK = cc11001100_hook("uK", class {
    constructor() {
      this.j = cc11001100_hook("this.j", "", "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
      this.v = cc11001100_hook("this.v", "", "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
    }
  }, "var-init");
  function vK(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j >= a.l.length && (a.j = cc11001100_hook("a.j", 0, "assign"));
    if (EJ) DJ.j.push(() => void vK(a));else {
      var b = cc11001100_hook("b", a.l[a.j++], "var-init");
      a.v = cc11001100_hook("a.v", !1, "assign");
      qK(a.A, a.win, a.m, b.j, b.l);
      GJ(a.m, 898, a.win, () => void vK(a), a.B);
    }
  }
  var wK = cc11001100_hook("wK", class {
    constructor(a, b, c) {
      var d = cc11001100_hook("d", new uK(), "var-init");
      this.B = cc11001100_hook("this.B", a, "assign");
      this.win = cc11001100_hook("this.win", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.A = cc11001100_hook("this.A", d, "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.v = cc11001100_hook("this.v", !0, "assign");
      this.j = cc11001100_hook("this.j", 0, "assign");
    }
  }, "var-init");
  class xK {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
  }
  ;
  const yK = cc11001100_hook("yK", /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/, "var-init");
  function zK(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    switch (b) {
      case 1:
        return !0;
      default:
        return "" === a || yK.test(a);
    }
  }
  function AK(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return zK(a.charAt(b - 1), d) && zK(a.charAt(c + 1), d);
  }
  ;
  function BK(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", new CK(c), "assign");
    for (const f of a) {
      a = cc11001100_hook("a", f, "assign");
      var d = cc11001100_hook("d", b, "var-init"),
        e = cc11001100_hook("e", c, "var-init");
      const g = cc11001100_hook("g", K(a, 1), "var-init");
      if (1 === d && B(a, 3)) DK(e, g, g);else if (2 === d) {
        B(a, 4) && DK(e, g, g);
        for (const h of gd(a, 5, Yc)) DK(e, h, g);
      }
    }
    EK(c);
    return new FK(c);
  }
  var FK = cc11001100_hook("FK", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    match(a) {
      return this.j.match(a);
    }
  }, "var-init");
  function DK(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.v.has(c) ? a.v.get(c) : a.B++, "var-init");
    a.v.set(c, d);
    a.m.set(d, c);
    c = cc11001100_hook("c", 0, "assign");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
      const f = cc11001100_hook("f", b.charCodeAt(e), "var-init");
      a.j[c].contains(f) || (a.j.push(new GK()), a.j[a.size].B = cc11001100_hook("a.j[a.size].B", c, "assign"), a.j[a.size].G = cc11001100_hook("a.j[a.size].G", f, "assign"), a.j[c].m.set(f, a.size), a.size++);
      c = cc11001100_hook("c", a.j[c].m.get(f), "assign");
    }
    a.j[c].A = cc11001100_hook("a.j[c].A", !0, "assign");
    a.j[c].v = cc11001100_hook("a.j[c].v", d, "assign");
    a.j[c].C = cc11001100_hook("a.j[c].C", a.l.length, "assign");
    a.l.push(b.length);
  }
  function EK(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (b.push(0); 0 < b.length;) {
      const g = cc11001100_hook("g", b.shift(), "var-init");
      var c = cc11001100_hook("c", a, "var-init"),
        d = cc11001100_hook("d", g, "var-init"),
        e = cc11001100_hook("e", c.j[d], "var-init");
      if (0 === d) e.j = cc11001100_hook("e.j", 0, "assign"), e.l = cc11001100_hook("e.l", 0, "assign");else if (0 === e.B) e.j = cc11001100_hook("e.j", 0, "assign"), e.l = cc11001100_hook("e.l", e.A ? d : c.j[c.j[d].j].l, "assign");else {
        e = cc11001100_hook("e", c.j[c.j[d].B].j, "assign");
        for (var f = cc11001100_hook("f", c.j[d].G, "var-init");;) {
          if (c.j[e].contains(f)) {
            c.j[d].j = cc11001100_hook("c.j[d].j", c.j[e].m.get(f), "assign");
            break;
          }
          if (0 === e) {
            c.j[d].j = cc11001100_hook("c.j[d].j", 0, "assign");
            break;
          }
          e = cc11001100_hook("e", c.j[e].j, "assign");
        }
        c.j[d].l = cc11001100_hook("c.j[d].l", c.j[d].A ? d : c.j[c.j[d].j].l, "assign");
      }
      for (const h of a.j[g].childNodes) b.push(h);
    }
  }
  function HK(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a: {
      let d = cc11001100_hook("d", 0, "var-init");
      for (let e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
        for (;;) {
          var c = cc11001100_hook("c", b.charCodeAt(e), "var-init");
          if (a.j[d].contains(c)) {
            d = cc11001100_hook("d", a.j[d].m.get(c), "assign");
            break;
          }
          if (0 === d) break;
          d = cc11001100_hook("d", a.j[d].j, "assign");
        }
        for (c = cc11001100_hook("c", d, "assign");;) {
          c = cc11001100_hook("c", a.j[c].l, "assign");
          if (0 === c) break;
          const f = cc11001100_hook("f", e + 1 - a.l[a.j[c].C], "var-init"),
            g = cc11001100_hook("g", e, "var-init");
          if (AK(b, f, g, a.A)) {
            a = cc11001100_hook("a", new IK(f, g, a.m.get(a.j[c].v)), "assign");
            break a;
          }
          c = cc11001100_hook("c", a.j[c].j, "assign");
        }
      }
      a = cc11001100_hook("a", void 0, "assign");
    }
    return void 0 !== a;
  }
  class CK {
    constructor(a) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.size = cc11001100_hook("this.size", 1, "assign");
      this.j = cc11001100_hook("this.j", [new GK()], "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.v = cc11001100_hook("this.v", new Map(), "assign");
      this.m = cc11001100_hook("this.m", new Map(), "assign");
      this.B = cc11001100_hook("this.B", 0, "assign");
    }
    match(a) {
      let b = cc11001100_hook("b", 0, "var-init");
      const c = cc11001100_hook("c", [], "var-init");
      for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) {
        for (;;) {
          var d = cc11001100_hook("d", a.charCodeAt(f), "var-init"),
            e = cc11001100_hook("e", this.j[b], "var-init");
          if (e.contains(d)) {
            b = cc11001100_hook("b", e.m.get(d), "assign");
            break;
          }
          if (0 === b) break;
          b = cc11001100_hook("b", e.j, "assign");
        }
        for (d = cc11001100_hook("d", b, "assign");;) {
          d = cc11001100_hook("d", this.j[d].l, "assign");
          if (0 === d) break;
          e = cc11001100_hook("e", f + 1 - this.l[this.j[d].C], "assign");
          const g = cc11001100_hook("g", f, "var-init");
          AK(a, e, g, this.A) && c.push(new IK(e, g, this.m.get(this.j[d].v)));
          d = cc11001100_hook("d", this.j[d].j, "assign");
        }
      }
      return c;
    }
  }
  class GK {
    constructor() {
      this.m = cc11001100_hook("this.m", new Map(), "assign");
      this.I = cc11001100_hook("this.I", !1, "assign");
      this.ba = cc11001100_hook("this.ba", this.H = cc11001100_hook("this.H", this.F = cc11001100_hook("this.F", this.V = cc11001100_hook("this.V", this.K = cc11001100_hook("this.K", this.L = cc11001100_hook("this.L", -1, "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
    }
    contains(a) {
      return this.m.has(a);
    }
    set B(a) {
      this.L = cc11001100_hook("this.L", a, "assign");
    }
    get B() {
      return this.L;
    }
    set G(a) {
      this.K = cc11001100_hook("this.K", a, "assign");
    }
    get G() {
      return this.K;
    }
    set A(a) {
      this.I = cc11001100_hook("this.I", a, "assign");
    }
    get A() {
      return this.I;
    }
    set v(a) {
      this.H = cc11001100_hook("this.H", a, "assign");
    }
    get v() {
      return this.H;
    }
    set j(a) {
      this.V = cc11001100_hook("this.V", a, "assign");
    }
    get j() {
      return this.V;
    }
    set l(a) {
      this.F = cc11001100_hook("this.F", a, "assign");
    }
    get l() {
      return this.F;
    }
    set C(a) {
      this.ba = cc11001100_hook("this.ba", a, "assign");
    }
    get C() {
      return this.ba;
    }
    get childNodes() {
      return this.m.values();
    }
  }
  var IK = cc11001100_hook("IK", class {
      constructor(a, b, c) {
        this.A = cc11001100_hook("this.A", a, "assign");
        this.v = cc11001100_hook("this.v", b, "assign");
        this.B = cc11001100_hook("this.B", c, "assign");
      }
      get l() {
        return this.A;
      }
      get m() {
        return this.v;
      }
      get j() {
        return this.B;
      }
      get length() {
        return this.v - this.A;
      }
    }, "var-init"),
    JK = cc11001100_hook("JK", class {
      constructor(a) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.matches = cc11001100_hook("this.matches", [], "assign");
      }
    }, "var-init");
  const KK = cc11001100_hook("KK", ["block", "inline", "inline-block", "list-item", "table-cell"], "var-init");
  function LK(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (c.La(5) >= c.C) return !1;
    for (let aa = cc11001100_hook("aa", 0, "var-init"); aa < b.childNodes.length; aa++) {
      const W = cc11001100_hook("W", b.childNodes[aa], "var-init");
      if (W.nodeType === Node.TEXT_NODE && "" !== W.textContent) {
        a: {
          var g = cc11001100_hook("g", a, "var-init");
          var h = cc11001100_hook("h", c, "var-init"),
            k = cc11001100_hook("k", b, "var-init"),
            l = cc11001100_hook("l", W.textContent, "var-init"),
            m = cc11001100_hook("m", d, "var-init"),
            n = cc11001100_hook("n", e, "var-init"),
            q = cc11001100_hook("q", f, "var-init");
          const ya = cc11001100_hook("ya", [], "var-init");
          b: {
            var r = cc11001100_hook("r", l, "var-init");
            switch (h.v) {
              case 1:
                var u = cc11001100_hook("u", Array(r.length), "var-init"),
                  C = cc11001100_hook("C", 0, "var-init");
                for (var z = cc11001100_hook("z", 0, "var-init"); z < r.length; z++) yK.test(r[z]) || C++, u[z] = cc11001100_hook("u[z]", C, "assign");
                r = cc11001100_hook("r", u, "assign");
                break b;
              default:
                u = cc11001100_hook("u", Array(r.length), "assign");
                for (z = cc11001100_hook("z", C = cc11001100_hook("C", 0, "assign"), "assign"); z < r.length;) {
                  for (; /\s/.test(r[z]);) u[z] = cc11001100_hook("u[z]", C, "assign"), z++;
                  for (var A = cc11001100_hook("A", !1, "var-init"); z < r.length && !/\s/.test(r[z]);) A = cc11001100_hook("A", !0, "assign"), u[z] = cc11001100_hook("u[z]", C, "assign"), z++;
                  A && (C++, u[z - 1] = cc11001100_hook("u[z - 1]", C, "assign"));
                }
                r = cc11001100_hook("r", u, "assign");
            }
          }
          if (l.includes("\u00bb")) n = cc11001100_hook("n", [], "assign");else {
            u = cc11001100_hook("u", n.match(l), "assign");
            n = cc11001100_hook("n", new Map(), "assign");
            for (const ra of u) u = cc11001100_hook("u", ra.l, "assign"), n.has(u) ? (C = cc11001100_hook("C", n.get(u), "assign"), ra.length > C.length && n.set(u, ra)) : n.set(u, ra);
            n = cc11001100_hook("n", Array.from(n.values()), "assign");
          }
          C = cc11001100_hook("C", -1, "assign");
          for (const ra of n) {
            u = cc11001100_hook("u", ra.l, "assign");
            n = cc11001100_hook("n", ra.m, "assign");
            z = cc11001100_hook("z", q, "assign");
            A = cc11001100_hook("A", ra.j, "assign");
            var I = cc11001100_hook("I", z.j, "var-init"),
              E = cc11001100_hook("E", z.l + r[u] - I.v, "var-init");
            for (const ld of I.j.keys()) {
              for (var F = cc11001100_hook("F", I.j.get(ld), "var-init"), H = cc11001100_hook("H", 0, "var-init"); H < F.length && F[H] < E;) H++;
              I.l -= cc11001100_hook("I.l", H, "assign");
              0 < H && I.j.set(ld, F.slice(H));
            }
            I = cc11001100_hook("I", z, "assign");
            E = cc11001100_hook("E", I.j, "assign");
            if ((E.j.has(A) ? E.j.get(A).length : 0) < I.yd && z.j.m < z.Nc) {
              z = cc11001100_hook("z", g.getComputedStyle(k), "assign");
              A = cc11001100_hook("A", z.fontSize.match(/\d+/), "assign");
              if (!(A && 12 <= Number(A[0]) && 22 >= Number(A[0]) && Fb(KK, z.display))) {
                q.l += cc11001100_hook("q.l", r[r.length - 1], "assign");
                g = cc11001100_hook("g", [], "assign");
                break a;
              }
              C += cc11001100_hook("C", 1, "assign");
              C < u && ya.push(g.document.createTextNode(l.substring(C, u)));
              C = cc11001100_hook("C", l.substring(u, n + 1), "assign");
              A = cc11001100_hook("A", g, "assign");
              z = cc11001100_hook("z", k, "assign");
              var T = cc11001100_hook("T", C, "var-init");
              H = cc11001100_hook("H", VJ(l, u, n + 1), "assign");
              F = cc11001100_hook("F", ra.j, "assign");
              E = cc11001100_hook("E", r[u], "assign");
              I = cc11001100_hook("I", z.getBoundingClientRect(), "assign");
              var Ga = cc11001100_hook("Ga", jk(2), "var-init");
              T = cc11001100_hook("T", Bd(Ga, 2, T), "assign");
              H = cc11001100_hook("H", Bd(T, 3, H), "assign");
              F = cc11001100_hook("F", Bd(H, 4, F), "assign");
              E = cc11001100_hook("E", jd(F, 5, E, 0), "assign");
              E = cc11001100_hook("E", jd(E, 6, Math.round(I.x), 0), "assign");
              I = cc11001100_hook("I", jd(E, 7, Math.round(I.y), 0), "assign");
              A = cc11001100_hook("A", A.getComputedStyle(z), "assign");
              E = cc11001100_hook("E", new ik(), "assign");
              E = cc11001100_hook("E", Bd(E, 1, A.fontFamily), "assign");
              F = cc11001100_hook("F", WJ(A.color), "assign");
              E = cc11001100_hook("E", rd(E, 7, F), "assign");
              F = cc11001100_hook("F", WJ(A.backgroundColor), "assign");
              E = cc11001100_hook("E", rd(E, 8, F), "assign");
              F = cc11001100_hook("F", A.fontSize.match(/^(\d+(\.\d+)?)px$/), "assign");
              E = cc11001100_hook("E", jd(E, 4, F ? Math.round(Number(F[1])) : 0, 0), "assign");
              F = cc11001100_hook("F", Math.round(Number(A.fontWeight)), "assign");
              isNaN(F) || 400 === F || jd(E, 5, F, 0);
              "none" !== A.textDecorationLine && Bd(E, 6, A.textDecorationLine);
              A = cc11001100_hook("A", rd(I, 8, E), "assign");
              I = cc11001100_hook("I", [], "assign");
              for (H = cc11001100_hook("H", z, "assign"); H && 20 > I.length;) {
                z = cc11001100_hook("z", I, "assign");
                E = cc11001100_hook("E", z.push, "assign");
                F = cc11001100_hook("F", H, "assign");
                T = cc11001100_hook("T", new gk(), "assign");
                T = cc11001100_hook("T", Bd(T, 1, F.tagName), "assign");
                "" !== F.className && id(T, 2, F.className.split(" "), Xc);
                E.call(z, T);
                if ("BODY" === H.tagName) break;
                H = cc11001100_hook("H", H.parentElement, "assign");
              }
              z = cc11001100_hook("z", I.reverse(), "assign");
              z = cc11001100_hook("z", td(A, 9, z), "assign");
              z = cc11001100_hook("z", MK(m, z), "assign");
              ya.push(NK(g, h, z, ra.j, C));
              C = cc11001100_hook("C", q.j, "assign");
              z = cc11001100_hook("z", ra.j, "assign");
              u = cc11001100_hook("u", q.l + r[u], "assign");
              A = cc11001100_hook("A", [], "assign");
              C.j.has(z) && (A = cc11001100_hook("A", C.j.get(z), "assign"));
              A.push(u);
              C.l++;
              C.j.set(z, A);
              C = cc11001100_hook("C", n, "assign");
              if (0 < q.gb && q.j.m >= q.gb) break;
            }
          }
          h = cc11001100_hook("h", C + 1, "assign");
          0 !== h && h < l.length && ya.push(g.document.createTextNode(l.substring(h)));
          q.l += cc11001100_hook("q.l", r[r.length - 1], "assign");
          g = cc11001100_hook("g", ya, "assign");
        }
        if (0 < g.length && (S(Qq) ? !c.ca.Ib : !S(Nq))) {
          for (const ya of g) b.insertBefore(ya, W), OK(ya);
          b.removeChild(W);
          aa += cc11001100_hook("aa", g.length - 1, "assign");
        }
      } else if (PK(W, c) && !LK(a, W, c, d, e, f)) return !1;
      if (0 < f.gb && f.j.m >= f.gb) break;
    }
    return !0;
  }
  function OK(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.nodeType === Node.ELEMENT_NODE) {
      if ("A" === a.tagName) {
        var b = cc11001100_hook("b", vJ(tJ(getComputedStyle(a.parentElement).color)), "var-init"),
          c = cc11001100_hook("c", vJ(tJ(getComputedStyle(a).color)), "var-init");
        var d = cc11001100_hook("d", uJ(a), "var-init");
        if (d = cc11001100_hook("d", b && c && d ? jF(c, d) < Math.min(jF(b, d), 4.5) ? b : null : b, "assign")) {
          b = cc11001100_hook("b", d[0], "assign");
          c = cc11001100_hook("c", d[1], "assign");
          d = cc11001100_hook("d", d[2], "assign");
          b = cc11001100_hook("b", Number(b), "assign");
          c = cc11001100_hook("c", Number(c), "assign");
          d = cc11001100_hook("d", Number(d), "assign");
          if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
          c = cc11001100_hook("c", b << 16 | c << 8 | d, "assign");
          b = cc11001100_hook("b", 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16), "assign");
          M(a, {
            color: cc11001100_hook("color", b, "object-key-init")
          });
        }
      }
      for (b = cc11001100_hook("b", 0, "assign"); b < a.childElementCount; b++) OK(a.children[b]);
    }
  }
  function PK(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.nodeType !== Node.ELEMENT_NODE || a.classList?.contains("google-anno-skip") || !a.offsetHeight) return !1;
    switch (a.tagName?.toUpperCase?.()) {
      case "IFRAME":
      case "AUDIO":
      case "BUTTON":
      case "CANVAS":
      case "CITE":
      case "CODE":
      case "EMBED":
      case "FOOTER":
      case "FORM":
      case "KBD":
      case "LABEL":
      case "OBJECT":
      case "PRE":
      case "SAMP":
      case "SCRIPT":
      case "SELECT":
      case "STYLE":
      case "SUB":
      case "SUPER":
      case "SVG":
      case "TEXTAREA":
      case "TIME":
      case "VAR":
      case "VIDEO":
      case null:
        return !1;
      case "A":
        return !S(Fq) && !!b.m;
      default:
        return !S(Fq) && !!b.m || !(a.className.toUpperCase?.()?.includes("CRUMB") || a.id.toUpperCase?.()?.includes("CRUMB"));
    }
  }
  class QK {
    constructor() {
      this.j = cc11001100_hook("this.j", null, "assign");
    }
    get l() {
      return this.j;
    }
  }
  function NK(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", a.document.createElement("SPAN"), "var-init");
    RK(f);
    f.appendChild(a.document.createTextNode(e));
    e = cc11001100_hook("e", a.document.createElement("A"), "assign");
    yJ(e);
    M(e, {
      "text-decoration": cc11001100_hook("text-decoration", "none", "object-key-init")
    });
    zf(e);
    e.className = cc11001100_hook("e.className", "google-anno", "assign");
    e.appendChild(dK(a, {
      bottom: cc11001100_hook("bottom", "-1px", "object-key-init"),
      "font-family": cc11001100_hook("font-family", '"Google Material Icons", "goog-matfb"', "object-key-init"),
      "font-size": cc11001100_hook("font-size", "90%", "object-key-init"),
      position: cc11001100_hook("position", "relative", "object-key-init")
    }));
    e.appendChild(a.document.createTextNode("\u00a0"));
    e.appendChild(f);
    const g = cc11001100_hook("g", SK(b, c, e), "var-init");
    kK(b, 999, e, h => {
      try {
        const k = cc11001100_hook("k", zJ(c, g.l, null, d, b), "var-init");
        JJ(a, b, k, d, !0, b.ca.Lb ? b.F.get(d) || "" : "");
        return !1;
      } finally {
        h.preventDefault(), h.stopImmediatePropagation();
      }
    });
    return e;
  }
  function SK(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", new QK(), "var-init");
    TK(a, e => {
      for (const l of e) if (l.isIntersecting) {
        var f = cc11001100_hook("f", b, "var-init");
        e = cc11001100_hook("e", a.l, "assign");
        var g = cc11001100_hook("g", new uk(), "var-init");
        g = cc11001100_hook("g", f = cc11001100_hook("f", J(g, 1, f), "assign"), "assign");
        f = cc11001100_hook("f", e.handle, "assign");
        var h = cc11001100_hook("h", AJ(e, 5), "var-init");
        g = cc11001100_hook("g", sd(h, 4, Ak, g), "assign");
        e = cc11001100_hook("e", f.call(e, g), "assign");
        d.j = cc11001100_hook("d.j", e, "assign");
      } else if (e = cc11001100_hook("e", d, "assign"), e.j) {
        f = cc11001100_hook("f", a.l, "assign");
        g = cc11001100_hook("g", new tk(), "assign");
        h = cc11001100_hook("h", g = cc11001100_hook("g", J(g, 1, e.j), "assign"), "assign");
        g = cc11001100_hook("g", f.handle, "assign");
        var k = cc11001100_hook("k", AJ(f, 6), "var-init");
        h = cc11001100_hook("h", sd(k, 5, Ak, h), "assign");
        g.call(f, h);
        e.j = cc11001100_hook("e.j", null, "assign");
      }
    }).observe(c);
    return d;
  }
  function RK(a) {
    cc11001100_hook("a", a, "function-parameter");
    yJ(a);
    M(a, {
      "text-decoration": cc11001100_hook("text-decoration", "underline", "object-key-init")
    });
    M(a, {
      "text-decoration-style": cc11001100_hook("text-decoration-style", "dotted", "object-key-init")
    });
    M(a, {
      "-webkit-text-decoration-line": cc11001100_hook("-webkit-text-decoration-line", "underline", "object-key-init"),
      "-webkit-text-decoration-style": cc11001100_hook("-webkit-text-decoration-style", "dotted", "object-key-init")
    });
  }
  ;
  function MK(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.entries.push(Pd(b, !1));
    return a.entries.length - 1;
  }
  function UK(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", new bk(), "var-init");
    switch (a) {
      case "se":
        return b = cc11001100_hook("b", new ak(), "assign"), sd(e, 1, ck, b);
      case "sw":
        return b = cc11001100_hook("b", new ak(), "assign"), sd(e, 2, ck, b);
      case "si":
        return b = cc11001100_hook("b", new ak(), "assign"), sd(e, 3, ck, b);
      case "sl":
        return b = cc11001100_hook("b", new ak(), "assign"), sd(e, 5, ck, b);
      case "l":
        return b = cc11001100_hook("b", new ak(), "assign"), sd(e, 6, ck, b);
    }
    if (c && b) {
      if (b.l) return a = cc11001100_hook("a", new Zj(), "assign"), b = cc11001100_hook("b", J(a, 1, b.l), "assign"), sd(e, 7, ck, b);
      if (c.j && b.v && (!d || !b.A)) return b = cc11001100_hook("b", new ak(), "assign"), sd(e, 8, ck, b);
    }
    return null;
  }
  var VK = cc11001100_hook("VK", class {
    constructor() {
      this.entries = cc11001100_hook("this.entries", [], "assign");
      this.j = cc11001100_hook("this.j", 0, "assign");
      this.l = cc11001100_hook("this.l", this.m = cc11001100_hook("this.m", null, "assign"), "assign");
    }
  }, "var-init");
  var WK = cc11001100_hook("WK", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }, "var-init");
  function HJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.handle, "var-init"),
      d = cc11001100_hook("d", AJ(a, 9), "var-init");
    b = cc11001100_hook("b", sd(d, 9, Ak, b), "assign");
    c.call(a, b);
  }
  function AJ(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new zk(), "var-init");
    var d = cc11001100_hook("d", a.A++, "var-init");
    c = cc11001100_hook("c", J(c, 1, d), "assign");
    b = cc11001100_hook("b", J(c, 2, Math.round(a.l.La(b) - a.m)), "assign");
    return rd(b, 10, a.v);
  }
  var XK = cc11001100_hook("XK", class {
    constructor(a, b, c, d) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.v = cc11001100_hook("this.v", c, "assign");
      this.A = cc11001100_hook("this.A", 1, "assign");
      this.j = cc11001100_hook("this.j", [...d], "assign");
    }
    handle(a) {
      for (const b of this.j) b(a);
      return yd(a, 1);
    }
  }, "var-init");
  function YK(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? (a = cc11001100_hook("a", a.match(/^[a-z]{2,3}/i), "assign")) ? a[0].toLowerCase() : "" : "";
  }
  function ZK(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Set(a.map(YK).filter(b => b.length));
  }
  ;
  var $K = cc11001100_hook("$K", class {
    constructor(a, b) {
      this.Wc = cc11001100_hook("this.Wc", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    get j() {
      return this.Wc;
    }
    get m() {
      return this.l;
    }
  }, "var-init");
  class aL extends bK {
    constructor(a, b, c, d, e) {
      super([b], [c], d);
      this.K = cc11001100_hook("this.K", a, "assign");
      this.v = cc11001100_hook("this.v", e || null, "assign");
    }
    C() {
      const a = cc11001100_hook("a", {}, "var-init");
      a.left = cc11001100_hook("a.left", this.m[0] + "px", "assign");
      Uh(this.K, a);
    }
    G() {}
  }
  ;
  var bL = cc11001100_hook("bL", class {
    constructor(a) {
      this.mb = cc11001100_hook("this.mb", a.mb, "assign");
      this.Ib = cc11001100_hook("this.Ib", a.Ib ?? !1, "assign");
      this.Mc = cc11001100_hook("this.Mc", a.Mc ?? 300, "assign");
      this.Dc = cc11001100_hook("this.Dc", a.Dc ?? !1, "assign");
      this.dc = cc11001100_hook("this.dc", a.dc ?? !1, "assign");
      this.Lb = cc11001100_hook("this.Lb", a.Lb ?? !1, "assign");
    }
  }, "var-init");
  function GJ(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return c.setTimeout(cL(a, b, d), e);
  }
  function OJ(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 2 === Cd(a.pa, 12);
  }
  function RJ(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", cL(a, 999, c), "assign");
    b.addEventListener("message", a);
    return a;
  }
  function TJ(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b.setInterval(cL(a, 1066, c), 1E3);
  }
  function kK(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    c.addEventListener("click", cL(a, b, d));
  }
  function lK(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return new aL(b, c, d, a.A, e);
  }
  function TK(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new IntersectionObserver(cL(a, 1065, b), {
      threshold: cc11001100_hook("threshold", .98, "object-key-init")
    });
  }
  function cL(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.A.ta(b, c, void 0, d => void dL(a, d));
  }
  function dL(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.e = cc11001100_hook("b.e", S(Qq) ? `${a.ca.mb}` : `${U(Iq)}`, "assign");
    b.c = cc11001100_hook("b.c", `${a.H}`, "assign");
  }
  var fL = cc11001100_hook("fL", class {
    constructor(a, b, c, d, e, f, g, h, k, l, m, n, q, r = !1) {
      this.B = cc11001100_hook("this.B", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.pa = cc11001100_hook("this.pa", c, "assign");
      this.H = cc11001100_hook("this.H", d, "assign");
      this.C = cc11001100_hook("this.C", e, "assign");
      this.m = cc11001100_hook("this.m", f, "assign");
      this.A = cc11001100_hook("this.A", g, "assign");
      this.l = cc11001100_hook("this.l", h, "assign");
      this.Z = cc11001100_hook("this.Z", k, "assign");
      this.I = cc11001100_hook("this.I", l, "assign");
      this.Ea = cc11001100_hook("this.Ea", m, "assign");
      this.Ub = cc11001100_hook("this.Ub", n, "assign");
      this.Sb = cc11001100_hook("this.Sb", r, "assign");
      this.ca = cc11001100_hook("this.ca", new bL(q), "assign");
      this.v = cc11001100_hook("this.v", Fb(eL, K(c, 7)) ? 1 : 0, "assign");
      this.F = cc11001100_hook("this.F", new Map(), "assign");
      this.G = cc11001100_hook("this.G", new Map(), "assign");
      if (this.ca.Lb) for (const u of dg(this.pa)) null != w(u, 6) && this.F.set(K(u, 1), K(u, 6)), null != w(u, 7) && this.G.set(K(u, 1), K(u, 7));
    }
    Ba(a, b) {
      this.A.Ba(a, b, c => void dL(this, c));
    }
    La(a) {
      return this.I.La(a);
    }
  }, "var-init");
  const eL = cc11001100_hook("eL", ["ja", "zh_CN", "zh_TW"], "var-init");
  function gL(a, b, c, d, e, f, g, h, k = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    try {
      Qb(a.document);
    } catch (hc) {
      return;
    }
    var l;
    {
      const hc = cc11001100_hook("hc", RF(new VF(a), "__gads", h), "var-init");
      if (hc) {
        var m = cc11001100_hook("m", ah(hc + "t2Z7mVic"), "var-init");
        var n = cc11001100_hook("n", m ? m % 20 : null, "var-init");
      } else n = cc11001100_hook("n", null, "assign");
    }
    (l = cc11001100_hook("l", n, "assign")) || (l = cc11001100_hook("l", ch() ? null : Math.floor(20 * Yg()), "assign"));
    const q = cc11001100_hook("q", l, "var-init");
    if (null != q) {
      var r = cc11001100_hook("r", new WK(q), "var-init");
      const hc = cc11001100_hook("hc", b.pa, "var-init");
      if (hc) {
        var u = cc11001100_hook("u", g.La(1), "var-init"),
          C = cc11001100_hook("C", u + (S(Qq) ? b.ca.Mc : U(Gq)), "var-init"),
          z = cc11001100_hook("z", hc, "var-init"),
          A = cc11001100_hook("A", b.ca, "var-init");
        if ((S(Qq) ? !A.Ib : !S(Nq)) && 0 < dg(z).length) {
          var I = cc11001100_hook("I", a.document, "var-init");
          const Ia = cc11001100_hook("Ia", I.createElement("LINK"), "var-init"),
            lb = cc11001100_hook("lb", N`https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`, "var-init");
          Ef(Ia, lb, "stylesheet");
          I.head.appendChild(Ia);
        }
        var E = cc11001100_hook("E", 488 > P(a).clientWidth, "var-init");
        if (S(Cq) || oK(a)) {
          var F = cc11001100_hook("F", dg(b.pa).length, "var-init");
          var H = cc11001100_hook("H", new $K(b.Wc, F), "var-init");
        } else H = cc11001100_hook("H", null, "assign");
        if (S(Cq) || oK(a)) {
          var T = cc11001100_hook("T", H, "var-init");
          if (oK(a)) var Ga = cc11001100_hook("Ga", new cK(!0, !1, !1, 0), "var-init");else {
            var aa = cc11001100_hook("aa", hw({
              J: cc11001100_hook("J", a, "object-key-init"),
              hd: cc11001100_hook("hd", 3E3, "object-key-init"),
              kd: cc11001100_hook("kd", U(Eq), "object-key-init"),
              Z: cc11001100_hook("Z", f, "object-key-init"),
              wf: cc11001100_hook("wf", !0, "object-key-init")
            }), "var-init");
            var W = cc11001100_hook("W", hK(a, 2, f), "var-init"),
              ya = cc11001100_hook("ya", hK(a, 1, f), "var-init");
            Ga = cc11001100_hook("Ga", new cK(0 < aa || 0 === T.m ? !1 : !T.j || 0 < ya || E && 0 === W, 0 === W, 0 === ya, aa), "assign");
          }
        } else Ga = cc11001100_hook("Ga", null, "assign");
        var ra = cc11001100_hook("ra", Ga, "var-init"),
          ld = cc11001100_hook("ld", b.ca, "var-init"),
          Y = cc11001100_hook("Y", new sk(), "var-init"),
          $d = cc11001100_hook("$d", S(Qq) ? ld.mb : U(Iq), "var-init");
        var GL = cc11001100_hook("GL", J(Y, 1, $d), "var-init");
        var HL = cc11001100_hook("HL", jd(GL, 2, r.j, 0), "var-init");
        var Gh = cc11001100_hook("Gh", new XK(g, u, HL, e), "var-init");
        var da = cc11001100_hook("da", new fL(c, E, hc, r.j, C, ra, d, Gh, f, g, b.Ea, b.Ub, b.ca, b.Sb), "var-init"),
          mb = cc11001100_hook("mb", new VK(), "var-init");
        {
          const Ia = cc11001100_hook("Ia", a.document.body, "var-init");
          if (Ia && hL(Ia)) {
            var nd = cc11001100_hook("nd", k ? Ia.innerText || "" : Ia.textContent || "", "var-init");
            b: switch (da.v) {
              case 1:
                let lb = cc11001100_hook("lb", 0, "var-init");
                for (let Va = cc11001100_hook("Va", nd.length - 1, "var-init"); 0 <= Va; Va--) yK.test(nd[Va]) || lb++;
                var Dt = cc11001100_hook("Dt", lb, "var-init");
                break b;
              default:
                const La = cc11001100_hook("La", nd.trim(), "var-init");
                Dt = cc11001100_hook("Dt", "" === La ? 0 : La.split(/\s+/).length, "assign");
            }
            var Et = cc11001100_hook("Et", Dt, "var-init");
            mb.j = cc11001100_hook("mb.j", Et, "assign");
            var Ft = cc11001100_hook("Ft", YK(K(da.pa, 7)), "var-init");
            {
              const lb = cc11001100_hook("lb", a.document.documentElement, "var-init"),
                La = cc11001100_hook("La", YK(lb.lang) || YK(lb.getAttribute("xml:lang")), "var-init");
              if ("" !== La) var Gt = cc11001100_hook("Gt", new Set([La]), "var-init");else {
                var Ht = cc11001100_hook("Ht", a.location, "var-init");
                const Va = cc11001100_hook("Va", Ht.host.match(/^[a-z]{2}\./i), "var-init"),
                  ab = cc11001100_hook("ab", Va ? [Va[0]] : [], "var-init");
                for (const Da of Ht.pathname.split("/")) 2 === Da.length && ab.push(Da);
                var It = cc11001100_hook("It", ZK(ab), "var-init");
                if (It.size) var Jt = cc11001100_hook("Jt", It, "var-init");else {
                  const Da = cc11001100_hook("Da", a.navigator, "var-init");
                  Jt = cc11001100_hook("Jt", ZK(Da.languages?.length ? Da.languages : [Da.language]), "assign");
                }
                Gt = cc11001100_hook("Gt", Jt, "assign");
              }
            }
            var Kt = cc11001100_hook("Kt", Gt, "var-init");
            mb.m = cc11001100_hook("mb.m", Ft, "assign");
            mb.l = cc11001100_hook("mb.l", new Set(Kt), "assign");
            var JL = cc11001100_hook("JL", S(Fq) && S(Bq) ? Math.min(da.Ea?.Fb ?? Number.MAX_SAFE_INTEGER, da.Ub?.Fb ?? Number.MAX_SAFE_INTEGER) : U(Lq), "var-init");
            if (Et < JL) var Lt = cc11001100_hook("Lt", "sw", "var-init");else {
              if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) var Mt = cc11001100_hook("Mt", "si", "var-init");else {
                if (Kt.has(Ft)) {
                  if (da.La(5) >= da.C) var Nt = cc11001100_hook("Nt", "l", "var-init");else {
                    b: {
                      const lb = cc11001100_hook("lb", da.pa, "var-init");
                      if (0 === dg(lb).length || !S(Fq) && da.m && !da.m.j) var Uk = cc11001100_hook("Uk", !0, "var-init");else {
                        if (S(Fq) || !da.m) {
                          var Ot = cc11001100_hook("Ot", a.document, "var-init");
                          const La = cc11001100_hook("La", Ot.createElement("style"), "var-init");
                          La.textContent = cc11001100_hook("La.textContent", gf(Th`@font-face{font-family:"goog-matfb";size-adjust:39.13%;src:local("Times New Roman"),local("Tinos");}`), "assign");
                          Ot.head.appendChild(La);
                        }
                        if (S(Fq)) {
                          var Vk = cc11001100_hook("Vk", BK(dg(lb), 2, da.v), "var-init");
                          var Wk = cc11001100_hook("Wk", BK(dg(lb), 1, da.v), "var-init");
                        } else {
                          var KL = cc11001100_hook("KL", dg(lb), "var-init");
                          const La = cc11001100_hook("La", new CK(da.v), "var-init");
                          for (const Va of KL) {
                            const ab = cc11001100_hook("ab", K(Va, 1), "var-init");
                            DK(La, ab, ab);
                            for (const Da of gd(Va, 5, Yc)) DK(La, Da, ab);
                          }
                          EK(La);
                          Vk = cc11001100_hook("Vk", Wk = cc11001100_hook("Wk", new FK(La), "assign"), "assign");
                        }
                        var Xk;
                        if (Xk = cc11001100_hook("Xk", !!da.m && da.m.j, "assign")) {
                          var LL = cc11001100_hook("LL", mb.j, "var-init");
                          Xk = cc11001100_hook("Xk", !S(Fq) || !S(Bq) || LL >= (da.Ub?.Fb ?? Number.MAX_SAFE_INTEGER), "assign");
                        }
                        if (Xk) {
                          if (HK(Vk.j, nd)) {
                            var ML = cc11001100_hook("ML", new wK(U(Pq), a, da), "var-init"),
                              NL = cc11001100_hook("NL", da.v, "var-init");
                            const La = cc11001100_hook("La", Vk.match(nd), "var-init"),
                              Va = cc11001100_hook("Va", new Map(), "var-init");
                            for (const ab of La) {
                              const Da = cc11001100_hook("Da", ab.j, "var-init");
                              if (Va.has(Da)) Va.get(Da).matches.push(ab);else {
                                const Hh = cc11001100_hook("Hh", new JK(Da), "var-init");
                                Hh.matches.push(ab);
                                Va.set(Da, Hh);
                              }
                            }
                            var OL = cc11001100_hook("OL", Array.from(Va.values()), "var-init");
                            for (const ab of OL) {
                              let Da = cc11001100_hook("Da", null, "var-init");
                              for (const Hh of ab.matches) {
                                c: {
                                  var Yk = cc11001100_hook("Yk", nd, "var-init"),
                                    od = cc11001100_hook("od", Hh, "var-init"),
                                    PL = cc11001100_hook("PL", mb, "var-init");
                                  if (!AK(Yk, od.l, od.m, NL)) {
                                    var Pt = cc11001100_hook("Pt", null, "var-init");
                                    break c;
                                  }
                                  const Qt = cc11001100_hook("Qt", Yk.substring(od.l, od.m + 1), "var-init");
                                  var QL = cc11001100_hook("QL", PL, "var-init"),
                                    RL = cc11001100_hook("RL", Qt, "var-init"),
                                    SL = cc11001100_hook("SL", VJ(Yk, od.l, od.m + 1), "var-init"),
                                    TL = cc11001100_hook("TL", od.j, "var-init"),
                                    UL = cc11001100_hook("UL", jk(1), "var-init");
                                  var VL = cc11001100_hook("VL", Bd(UL, 2, RL), "var-init");
                                  var WL = cc11001100_hook("WL", Bd(VL, 3, SL), "var-init");
                                  var XL = cc11001100_hook("XL", Bd(WL, 4, TL), "var-init");
                                  var YL = cc11001100_hook("YL", jd(XL, 5, null, 0), "var-init");
                                  MK(QL, YL);
                                  Pt = cc11001100_hook("Pt", Qt, "assign");
                                }
                                const Rt = cc11001100_hook("Rt", Pt, "var-init");
                                null != Rt && (Da = cc11001100_hook("Da", Rt, "assign"));
                              }
                              if (null != Da) {
                                var Zk = cc11001100_hook("Zk", ML, "var-init");
                                Zk.l.push(new xK(ab.j, Da));
                                Zk.v && vK(Zk);
                              }
                            }
                          }
                          if (!S(Fq)) {
                            Uk = cc11001100_hook("Uk", !0, "assign");
                            break b;
                          }
                        }
                        var ZL = cc11001100_hook("ZL", mb.j, "var-init");
                        Uk = cc11001100_hook("Uk", !(!S(Fq) || !S(Bq) || ZL >= (da.Ea?.Fb ?? Number.MAX_SAFE_INTEGER)) || !HK(Wk.j, nd) || LK(a, a.document.body, da, mb, Wk, new xJ(da.Ea?.Rg ?? null ?? 100, (da.Ea?.yd ?? null) || 0, (da.Ea?.Nc ?? null) || 0, (da.Ea?.gb ?? null) || -1)), "assign");
                      }
                    }
                    Nt = cc11001100_hook("Nt", Uk ? "a" : "p", "assign");
                  }
                  var St = cc11001100_hook("St", Nt, "var-init");
                } else St = cc11001100_hook("St", "sl", "assign");
                Mt = cc11001100_hook("Mt", St, "assign");
              }
              Lt = cc11001100_hook("Lt", Mt, "assign");
            }
            var Tt = cc11001100_hook("Tt", Lt, "var-init");
          } else Tt = cc11001100_hook("Tt", "se", "assign");
        }
        var $L = cc11001100_hook("$L", g.La(3) - u, "var-init"),
          aM = cc11001100_hook("aM", hc, "var-init"),
          bM = cc11001100_hook("bM", b.ca, "var-init");
        if ((S(Qq) ? !bM.Ib : !S(Nq)) && mb.entries.length && !B(aM, 13)) {
          var Ut = cc11001100_hook("Ut", a.document, "var-init");
          const Ia = cc11001100_hook("Ia", Ut.createElement("LINK"), "var-init");
          Ef(Ia, N`https://www.google.com/adsense/search/ads.js`, "prefetch");
          Ia.as = cc11001100_hook("Ia.as", "script", "assign");
          Ia.fetchPriority = cc11001100_hook("Ia.fetchPriority", "low", "assign");
          Ut.head.appendChild(Ia);
        }
        var cM = cc11001100_hook("cM", b.ac, "var-init"),
          dM = cc11001100_hook("dM", a.location.hostname, "var-init"),
          eM = cc11001100_hook("eM", b.Rf, "var-init"),
          Vt = cc11001100_hook("Vt", hc, "var-init"),
          fM = cc11001100_hook("fM", H, "var-init"),
          Wt = cc11001100_hook("Wt", Tt, "var-init"),
          gM = cc11001100_hook("gM", new pk(), "var-init"),
          hM = cc11001100_hook("hM", new Wj(), "var-init");
        var iM = cc11001100_hook("iM", Bd(hM, 1, cM), "var-init");
        var jM = cc11001100_hook("jM", Bd(iM, 2, dM), "var-init");
        var kM = cc11001100_hook("kM", Ad(jM, 3, E), "var-init");
        var lM = cc11001100_hook("lM", x(kM, 4, mb.j), "var-init");
        var mM = cc11001100_hook("mM", rd(gM, 1, lM), "var-init");
        var nM = cc11001100_hook("nM", new Yj(), "var-init"),
          oM = cc11001100_hook("oM", Array.from(mb.l ?? []).sort(), "var-init");
        var pM = cc11001100_hook("pM", id(nM, 1, oM, Xc), "var-init");
        var qM = cc11001100_hook("qM", Bd(pM, 2, mb.m), "var-init");
        var rM = cc11001100_hook("rM", Bd(qM, 3, eM), "var-init");
        var sM = cc11001100_hook("sM", rd(mM, 2, rM), "var-init");
        var tM = cc11001100_hook("tM", J(sM, 3, Math.round($L)), "var-init");
        const Xt = cc11001100_hook("Xt", dg(Vt), "var-init");
        let Yt = cc11001100_hook("Yt", 0, "var-init");
        for (const Ia of Xt) Yt += cc11001100_hook("Yt", (B(Ia, 3) ? 1 : 0) + (B(Ia, 4) ? 1 : 0) + gd(Ia, 5, Yc).length, "assign");
        var uM = cc11001100_hook("uM", new ok(), "var-init");
        var vM = cc11001100_hook("vM", x(uM, 1, Xt.length), "var-init");
        var wM = cc11001100_hook("wM", x(vM, 2, Yt), "var-init");
        var $k = cc11001100_hook("$k", rd(tM, 6, wM), "var-init");
        const Zt = cc11001100_hook("Zt", UK(Wt, ra, fM, E), "var-init");
        if (Zt) {
          var $t = cc11001100_hook("$t", new ek(), "var-init");
          ud($t, 1, bk, Zt);
          sd($k, 5, qk, $t);
        } else {
          var xM = cc11001100_hook("xM", new nk(), "var-init");
          var yM = cc11001100_hook("yM", Ad(xM, 1, "p" === Wt), "var-init");
          var zM = cc11001100_hook("zM", td(yM, 2, mb.entries), "var-init");
          var AM = cc11001100_hook("AM", dg(Vt).length, "var-init");
          var BM = cc11001100_hook("BM", J(zM, 3, AM), "var-init");
          sd($k, 4, qk, BM);
        }
        var CM = cc11001100_hook("CM", Gh.handle, "var-init"),
          DM = cc11001100_hook("DM", AJ(Gh, 3), "var-init");
        var EM = cc11001100_hook("EM", sd(DM, 3, Ak, $k), "var-init");
        CM.call(Gh, EM);
      }
    }
  }
  function hL(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      Qb(new ResizeObserver(() => {})), Qb(new MutationObserver(() => {}));
    } catch {
      return !1;
    }
    return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow;
  }
  ;
  function iL(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (!Z(aD(), 29, !1)) {
      fD(aD(), 29, !0);
      var f = cc11001100_hook("f", a.performance, "var-init");
      f?.now && gL(a, c, d, Rk, [g => void yD(b, g)], Qk, new rJ(f), e, S(aq));
    }
  }
  ;
  function jL({
    Ud: a,
    Qe: b
  }) {
    return a || ("dev" === b ? "dev" : "");
  }
  ;
  function kL(a) {
    cc11001100_hook("a", a, "function-parameter");
    Rk.zd(b => {
      b.shv = cc11001100_hook("b.shv", String(a), "assign");
      b.mjsv = cc11001100_hook("b.mjsv", jL({
        Ud: cc11001100_hook("Ud", "m202303220101", "object-key-init"),
        Qe: cc11001100_hook("Qe", a, "object-key-init")
      }), "assign");
      b.eid = cc11001100_hook("b.eid", QF(t), "assign");
    });
  }
  function lL(a) {
    cc11001100_hook("a", a, "function-parameter");
    kL(K(a, 2));
    a = cc11001100_hook("a", B(a, 6), "assign");
    Vd(GF, aj);
    GF = cc11001100_hook("GF", a, "assign");
  }
  ;
  var mL = cc11001100_hook("mL", "undefined" === typeof sttc ? void 0 : sttc, "var-init");
  function nL(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Rk, "var-init");
    try {
      return Vd(a, $i), new BF(JSON.parse(a));
    } catch (c) {
      b.ia(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
        d.jspb = cc11001100_hook("d.jspb", String(a), "assign");
      });
    }
    return new BF();
  }
  ;
  function oL(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.l) return a.l;
    a.K && a.K(a.m) ? a.l = cc11001100_hook("a.l", a.m, "assign") : a.l = cc11001100_hook("a.l", oh(a.m, a.L), "assign");
    return a.l ?? null;
  }
  function pL(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.v || (a.v = cc11001100_hook("a.v", b => {
      try {
        var c = cc11001100_hook("c", a.I ? a.I(b) : void 0, "var-init");
        if (c) {
          var d = cc11001100_hook("d", c.rd, "var-init"),
            e = cc11001100_hook("e", a.F.get(d), "var-init");
          if (e) {
            a.F.delete(d);
            var f = cc11001100_hook("f", a.C.get(c.rd), "var-init");
            a.C.delete(d);
            e(f, c.payload);
          }
        }
      } catch (g) {}
    }, "assign"), oe(a.m, "message", a.v));
  }
  function qL(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (oL(a)) if (a.l === a.m) {
      var c = cc11001100_hook("c", a.H.get("getDataWithCallback"), "var-init");
      c && c(a.l, b);
    } else if ((c = cc11001100_hook("c", a.A.get("getDataWithCallback"), "assign")) && c.gd) {
      pL(a);
      var d = cc11001100_hook("d", ++a.V, "var-init");
      a.F.set(d, c.De);
      a.C.set(d, c.se(b));
      a.l.postMessage(c.gd(b, d), "*");
    }
  }
  var rL = cc11001100_hook("rL", class extends Ik {
    constructor(a, b, c, d) {
      super();
      this.L = cc11001100_hook("this.L", b, "assign");
      this.K = cc11001100_hook("this.K", c, "assign");
      this.I = cc11001100_hook("this.I", d, "assign");
      this.H = cc11001100_hook("this.H", new Map(), "assign");
      this.V = cc11001100_hook("this.V", 0, "assign");
      this.A = cc11001100_hook("this.A", new Map(), "assign");
      this.F = cc11001100_hook("this.F", new Map(), "assign");
      this.C = cc11001100_hook("this.C", new Map(), "assign");
      this.v = cc11001100_hook("this.v", void 0, "assign");
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j() {
      delete this.l;
      this.H.clear();
      this.A.clear();
      this.F.clear();
      this.C.clear();
      this.v && (pe(this.m, "message", this.v), delete this.v);
      delete this.m;
      delete this.I;
      super.j();
    }
  }, "var-init");
  const sL = cc11001100_hook("sL", (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.callback({
          consentData: cc11001100_hook("consentData", c ?? void 0, "object-key-init"),
          ce: cc11001100_hook("ce", d ? void 0 : 2, "object-key-init")
        });
      });
    }, "var-init"),
    tL = cc11001100_hook("tL", {
      se: cc11001100_hook("se", a => a.callback, "object-key-init"),
      gd: cc11001100_hook("gd", (a, b) => ({
        __uspapiCall: {
          callId: cc11001100_hook("callId", b, "object-key-init"),
          command: cc11001100_hook("command", "getUSPData", "object-key-init"),
          version: cc11001100_hook("version", 1, "object-key-init")
        }
      }), "object-key-init"),
      De: cc11001100_hook("De", (a, b) => {
        b = cc11001100_hook("b", b.__uspapiReturn, "assign");
        a({
          consentData: cc11001100_hook("consentData", b.returnValue ?? void 0, "object-key-init"),
          ce: cc11001100_hook("ce", b.success ? void 0 : 2, "object-key-init")
        });
      }, "object-key-init")
    }, "var-init");
  function uL(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", {}, "var-init");
    "string" === typeof a.data ? b = cc11001100_hook("b", JSON.parse(a.data), "assign") : b = cc11001100_hook("b", a.data, "assign");
    return {
      payload: cc11001100_hook("payload", b, "object-key-init"),
      rd: cc11001100_hook("rd", b.__uspapiReturn.callId, "object-key-init")
    };
  }
  var vL = cc11001100_hook("vL", class extends Ik {
    constructor(a) {
      super();
      this.caller = cc11001100_hook("this.caller", new rL(a, "__uspapiLocator", b => "function" === typeof b.__uspapi, uL), "assign");
      this.caller.H.set("getDataWithCallback", sL);
      this.caller.A.set("getDataWithCallback", tL);
    }
    j() {
      this.caller.xa();
      super.j();
    }
    C(a) {
      let b = cc11001100_hook("b", {}, "var-init");
      if (oL(this.caller)) {
        var c = cc11001100_hook("c", ie(() => {
          a(b);
        }), "var-init");
        qL(this.caller, {
          callback: cc11001100_hook("callback", d => {
            d.ce || (b = cc11001100_hook("b", d.consentData, "assign"));
            c();
          }, "object-key-init")
        });
        setTimeout(c, 500);
      } else a(b);
    }
  }, "var-init");
  var wL = cc11001100_hook("wL", Wd(class extends L {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  const xL = cc11001100_hook("xL", (a, b) => {
      a = cc11001100_hook("a", a.googlefc || (a.googlefc = cc11001100_hook("a.googlefc", {}, "assign")), "assign");
      a.__fci = cc11001100_hook("a.__fci", a.__fci || [], "assign");
      a.__fci.push(b.command, c => {
        c = cc11001100_hook("c", wL(c), "assign");
        b.callback({
          consentData: cc11001100_hook("consentData", c, "object-key-init")
        });
      });
    }, "var-init"),
    yL = cc11001100_hook("yL", {
      se: cc11001100_hook("se", a => a.callback, "object-key-init"),
      gd: cc11001100_hook("gd", (a, b) => ({
        __fciCall: {
          callId: cc11001100_hook("callId", b, "object-key-init"),
          command: cc11001100_hook("command", a.command, "object-key-init")
        }
      }), "object-key-init"),
      De: cc11001100_hook("De", (a, b) => {
        a({
          consentData: cc11001100_hook("consentData", b, "object-key-init")
        });
      }, "object-key-init")
    }, "var-init");
  function zL(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", wL(a.data.__fciReturn), "assign");
    return {
      payload: cc11001100_hook("payload", a, "object-key-init"),
      rd: cc11001100_hook("rd", yd(a, 1), "object-key-init")
    };
  }
  var AL = cc11001100_hook("AL", class extends Ik {
    constructor(a) {
      super();
      this.l = cc11001100_hook("this.l", null, "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.caller = cc11001100_hook("this.caller", new rL(a, "googlefcPresent", void 0, zL), "assign");
      this.caller.H.set("getDataWithCallback", xL);
      this.caller.A.set("getDataWithCallback", yL);
    }
    j() {
      this.caller.xa();
      super.j();
    }
    m() {
      this.v || (this.l = cc11001100_hook("this.l", oL(this.caller), "assign"), this.v = cc11001100_hook("this.v", !0, "assign"));
      return !!this.l;
    }
    H() {
      return new Promise(a => {
        this.m() && qL(this.caller, {
          command: cc11001100_hook("command", "loaded", "object-key-init"),
          callback: cc11001100_hook("callback", b => {
            a(b.consentData);
          }, "object-key-init")
        });
      });
    }
  }, "var-init");
  function BL(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b && b[0], "assign");
    if (!b) return null;
    b = cc11001100_hook("b", b.target, "assign");
    const c = cc11001100_hook("c", b.getBoundingClientRect(), "var-init"),
      d = cc11001100_hook("d", Bg(a.j.P() || window), "var-init");
    if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
    var e = cc11001100_hook("e", CL(a, b, c, a.j.j.elementsFromPoint(ng(c.left + c.width / 2, c.left, c.right - 1), ng(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []), "var-init"),
      f = cc11001100_hook("f", CL(a, b, c, a.j.j.elementsFromPoint(ng(c.left + c.width / 2, c.left, c.right - 1), ng(c.top + 2, c.top, c.bottom - 1)), 2, e.Ia), "var-init"),
      g = cc11001100_hook("g", CL(a, b, c, a.j.j.elementsFromPoint(ng(c.left + 2, c.left, c.right - 1), ng(c.top + c.height / 2, c.top, c.bottom - 1)), 3, [...e.Ia, ...f.Ia]), "var-init");
    const h = cc11001100_hook("h", CL(a, b, c, a.j.j.elementsFromPoint(ng(c.right - 1 - 2, c.left, c.right - 1), ng(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Ia, ...f.Ia, ...g.Ia]), "var-init");
    var k = cc11001100_hook("k", DL(a, b, c), "var-init"),
      l = cc11001100_hook("l", n => Fb(a.m, n.overlapType) && Fb(a.v, n.overlapDepth) && Fb(a.l, n.overlapDetectionPoint), "var-init");
    e = cc11001100_hook("e", Bb([...e.entries, ...f.entries, ...g.entries, ...h.entries], l), "assign");
    l = cc11001100_hook("l", Bb(k, l), "assign");
    k = cc11001100_hook("k", [...e, ...l], "assign");
    f = cc11001100_hook("f", -2 > c.left || c.right > d.width + 2, "assign");
    f = cc11001100_hook("f", 0 < k.length || f, "assign");
    g = cc11001100_hook("g", Cg(a.j.j), "assign");
    const m = cc11001100_hook("m", new Eh(c.left, c.top, c.width, c.height), "var-init");
    e = cc11001100_hook("e", [...Cb(e, n => new Eh(n.elementRect.left, n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...Ob(Cb(l, n => Ih(m, n.elementRect))), ...Bb(Ih(m, new Eh(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)], "assign");
    return {
      entries: cc11001100_hook("entries", k, "object-key-init"),
      isOverlappingOrOutsideViewport: cc11001100_hook("isOverlappingOrOutsideViewport", f, "object-key-init"),
      scrollPosition: {
        scrollX: cc11001100_hook("scrollX", g.x, "object-key-init"),
        scrollY: cc11001100_hook("scrollY", g.y, "object-key-init")
      },
      target: cc11001100_hook("target", b, "object-key-init"),
      targetRect: cc11001100_hook("targetRect", c, "object-key-init"),
      viewportSize: {
        width: cc11001100_hook("width", d.width, "object-key-init"),
        height: cc11001100_hook("height", d.height, "object-key-init")
      },
      overlappedArea: cc11001100_hook("overlappedArea", 20 > e.length ? EL(m, e) : FL(c, e), "object-key-init")
    };
  }
  function IL(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.j.P(), "var-init"),
      d = cc11001100_hook("d", a.j.j, "var-init");
    return new Promise((e, f) => {
      const g = cc11001100_hook("g", c.IntersectionObserver, "var-init");
      if (g) {
        if (d.elementsFromPoint) {
          if (d.createNodeIterator) {
            if (d.createRange) {
              if (c.Range.prototype.getBoundingClientRect) {
                var h = cc11001100_hook("h", new g(k => {
                  const l = cc11001100_hook("l", new Wi(), "var-init"),
                    m = cc11001100_hook("m", Vi(l, () => BL(a, k)), "var-init");
                  m && (l.l.length && (m.executionTime = cc11001100_hook("m.executionTime", Math.round(Number(l.l[0].duration)), "assign")), h.disconnect(), e(m));
                }, FM), "var-init");
                h.observe(b);
              } else f(Error("5"));
            } else f(Error("4"));
          } else f(Error("3"));
        } else f(Error("2"));
      } else f(Error("1"));
    });
  }
  function CL(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (0 === c.width || 0 === c.height) return {
      entries: cc11001100_hook("entries", [], "object-key-init"),
      Ia: cc11001100_hook("Ia", [], "object-key-init")
    };
    const g = cc11001100_hook("g", [], "var-init"),
      h = cc11001100_hook("h", [], "var-init");
    for (let n = cc11001100_hook("n", 0, "var-init"); n < d.length; n++) {
      const q = cc11001100_hook("q", d[n], "var-init");
      if (q === b) continue;
      if (Fb(f, q)) continue;
      h.push(q);
      const r = cc11001100_hook("r", q.getBoundingClientRect(), "var-init");
      if (a.j.contains(q, b)) {
        g.push(GM(a, c, q, r, 1, e));
        continue;
      }
      if (a.j.contains(b, q)) {
        g.push(GM(a, c, q, r, 2, e));
        continue;
      }
      a: {
        var k = cc11001100_hook("k", a, "var-init");
        var l = cc11001100_hook("l", b, "var-init"),
          m = cc11001100_hook("m", q, "var-init");
        const z = cc11001100_hook("z", k.j.Lf(l, m), "var-init");
        if (!z) {
          k = cc11001100_hook("k", null, "assign");
          break a;
        }
        const {
            suspectAncestor: A,
            Va: I
          } = cc11001100_hook("", HM(k, l, z, m) || {}, "var-init"),
          {
            suspectAncestor: E,
            Va: F
          } = cc11001100_hook("", HM(k, m, z, l) || {}, "var-init");
        k = cc11001100_hook("k", A && I && E && F ? I <= F ? {
          suspectAncestor: cc11001100_hook("suspectAncestor", A, "object-key-init"),
          overlapType: cc11001100_hook("overlapType", IM[I], "object-key-init")
        } : {
          suspectAncestor: cc11001100_hook("suspectAncestor", E, "object-key-init"),
          overlapType: cc11001100_hook("overlapType", JM[F], "object-key-init")
        } : A && I ? {
          suspectAncestor: cc11001100_hook("suspectAncestor", A, "object-key-init"),
          overlapType: cc11001100_hook("overlapType", IM[I], "object-key-init")
        } : E && F ? {
          suspectAncestor: cc11001100_hook("suspectAncestor", E, "object-key-init"),
          overlapType: cc11001100_hook("overlapType", JM[F], "object-key-init")
        } : null, "assign");
      }
      const {
        suspectAncestor: u,
        overlapType: C
      } = cc11001100_hook("", k || {}, "var-init");
      u && C ? g.push(GM(a, c, q, r, C, e, u)) : g.push(GM(a, c, q, r, 9, e));
    }
    return {
      entries: cc11001100_hook("entries", g, "object-key-init"),
      Ia: cc11001100_hook("Ia", h, "object-key-init")
    };
  }
  function DL(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    for (b = cc11001100_hook("b", b.parentElement, "assign"); b; b = cc11001100_hook("b", b.parentElement, "assign")) {
      const f = cc11001100_hook("f", b.getBoundingClientRect(), "var-init");
      if (f) {
        var e = cc11001100_hook("e", Xg(b, a.j.P()), "var-init");
        e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(GM(a, c, b, f, 5, 1)) : (e = cc11001100_hook("e", "auto" === e.overflowX || "scroll" === e.overflowX, "assign"), !e && c.left < f.left - 2 ? d.push(GM(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(GM(a, c, b, f, 5, 4))));
      }
    }
    return d;
  }
  function EL(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
    let c = cc11001100_hook("c", 0, "var-init");
    for (let d = cc11001100_hook("d", 1, "var-init"); d < 1 << b.length; d++) {
      let e = cc11001100_hook("e", a, "var-init"),
        f = cc11001100_hook("f", 0, "var-init");
      for (let g = cc11001100_hook("g", 0, "var-init"); g < b.length && (!(d & 1 << g) || (f++, e = cc11001100_hook("e", Fh(e, b[g]), "assign"), e)); g++);
      e && (c = cc11001100_hook("c", 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1), "assign"));
    }
    return c / ((a.width + 1) * (a.height + 1));
  }
  function FL(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
    let c = cc11001100_hook("c", 0, "var-init");
    for (let d = cc11001100_hook("d", a.left, "var-init"); d <= a.right; d++) for (let e = cc11001100_hook("e", a.top, "var-init"); e <= a.bottom; e++) for (let f = cc11001100_hook("f", 0, "var-init"); f < b.length; f++) if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
      c++;
      break;
    }
    return c / ((a.width + 1) * (a.height + 1));
  }
  function GM(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    const h = cc11001100_hook("h", {
      element: cc11001100_hook("element", c, "object-key-init"),
      elementRect: cc11001100_hook("elementRect", d, "object-key-init"),
      overlapType: cc11001100_hook("overlapType", e, "object-key-init"),
      overlapDetectionPoint: cc11001100_hook("overlapDetectionPoint", f, "object-key-init")
    }, "var-init");
    if (Fb(a.m, e) && Fb(a.l, f)) {
      b = cc11001100_hook("b", new Bh(b.top, b.right - 1, b.bottom - 1, b.left), "assign");
      if ((a = cc11001100_hook("a", KM(a, c), "assign")) && Dh(b, a)) c = cc11001100_hook("c", 4, "assign");else {
        a = cc11001100_hook("a", LM(c, d), "assign");
        if (Tb) {
          e = cc11001100_hook("e", di(c, "paddingLeft"), "assign");
          f = cc11001100_hook("f", di(c, "paddingRight"), "assign");
          var k = cc11001100_hook("k", di(c, "paddingTop"), "var-init"),
            l = cc11001100_hook("l", di(c, "paddingBottom"), "var-init");
          e = cc11001100_hook("e", new Bh(k, f, l, e), "assign");
        } else e = cc11001100_hook("e", Xh(c, "paddingLeft"), "assign"), f = cc11001100_hook("f", Xh(c, "paddingRight"), "assign"), k = cc11001100_hook("k", Xh(c, "paddingTop"), "assign"), l = cc11001100_hook("l", Xh(c, "paddingBottom"), "assign"), e = cc11001100_hook("e", new Bh(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e)), "assign");
        Dh(b, new Bh(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = cc11001100_hook("c", 3, "assign") : (c = cc11001100_hook("c", LM(c, d), "assign"), c = cc11001100_hook("c", Dh(b, c) ? 2 : 1, "assign"));
      }
      h.overlapDepth = cc11001100_hook("h.overlapDepth", c, "assign");
    }
    g && (h.suspectAncestor = cc11001100_hook("h.suspectAncestor", g, "assign"));
    return h;
  }
  function HM(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", [], "var-init");
    for (var f = cc11001100_hook("f", b, "var-init"); f && f !== c; f = cc11001100_hook("f", f.parentElement, "assign")) e.unshift(f);
    c = cc11001100_hook("c", a.j.P(), "assign");
    for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
      const h = cc11001100_hook("h", e[f], "var-init");
      var g = cc11001100_hook("g", Xg(h, c), "var-init");
      if (g) {
        if ("fixed" === g.position) return {
          suspectAncestor: cc11001100_hook("suspectAncestor", h, "object-key-init"),
          Va: cc11001100_hook("Va", 1, "object-key-init")
        };
        if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
          suspectAncestor: cc11001100_hook("suspectAncestor", h, "object-key-init"),
          Va: cc11001100_hook("Va", 2, "object-key-init")
        };
        if ("absolute" === g.position) return {
          suspectAncestor: cc11001100_hook("suspectAncestor", h, "object-key-init"),
          Va: cc11001100_hook("Va", 3, "object-key-init")
        };
        if ("none" !== g.cssFloat) {
          g = cc11001100_hook("g", h === e[0], "assign");
          const k = cc11001100_hook("k", MM(a, e.slice(0, f), h), "var-init");
          if (g || k) return {
            suspectAncestor: cc11001100_hook("suspectAncestor", h, "object-key-init"),
            Va: cc11001100_hook("Va", 4, "object-key-init")
          };
        }
      }
    }
    return (a = cc11001100_hook("a", MM(a, e, b), "assign")) ? {
      suspectAncestor: cc11001100_hook("suspectAncestor", a, "object-key-init"),
      Va: cc11001100_hook("Va", 5, "object-key-init")
    } : null;
  }
  function MM(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", c.getBoundingClientRect(), "var-init");
    if (!d) return null;
    for (let e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
      const f = cc11001100_hook("f", b[e], "var-init");
      if (!a.j.contains(f, c)) continue;
      const g = cc11001100_hook("g", f.getBoundingClientRect(), "var-init");
      if (!g) continue;
      const h = cc11001100_hook("h", Xg(f, a.j.P()), "var-init");
      if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f;
    }
    return null;
  }
  function KM(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.j.j, "var-init");
    a = cc11001100_hook("a", c.createRange(), "assign");
    if (!a) return null;
    c = cc11001100_hook("c", c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
      acceptNode: cc11001100_hook("acceptNode", d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT, "object-key-init")
    }), "assign");
    for (b = cc11001100_hook("b", c.nextNode(), "assign"); c.nextNode(););
    c = cc11001100_hook("c", c.previousNode(), "assign");
    if (!b || !c) return null;
    a.setStartBefore(b);
    a.setEndAfter(c);
    a = cc11001100_hook("a", a.getBoundingClientRect(), "assign");
    return 0 === a.width || 0 === a.height ? null : new Bh(a.top, a.right, a.bottom, a.left);
  }
  function LM(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!Tb || 9 <= Number(fc)) {
      var c = cc11001100_hook("c", Xh(a, "borderLeftWidth"), "var-init");
      d = cc11001100_hook("d", Xh(a, "borderRightWidth"), "assign");
      e = cc11001100_hook("e", Xh(a, "borderTopWidth"), "assign");
      a = cc11001100_hook("a", Xh(a, "borderBottomWidth"), "assign");
      c = cc11001100_hook("c", new Bh(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c)), "assign");
    } else {
      c = cc11001100_hook("c", fi(a, "borderLeft"), "assign");
      var d = cc11001100_hook("d", fi(a, "borderRight"), "var-init"),
        e = cc11001100_hook("e", fi(a, "borderTop"), "var-init");
      a = cc11001100_hook("a", fi(a, "borderBottom"), "assign");
      c = cc11001100_hook("c", new Bh(e, d, a, c), "assign");
    }
    return new Bh(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left);
  }
  class NM {
    constructor(a) {
      var b = cc11001100_hook("b", OM, "var-init");
      this.j = cc11001100_hook("this.j", yg(a), "assign");
      this.m = cc11001100_hook("this.m", [5, 8, 9], "assign");
      this.v = cc11001100_hook("this.v", [3, 4], "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
  }
  const IM = cc11001100_hook("IM", {
      [1]: cc11001100_hook(1, 3, "object-key-init"),
      [4]: cc11001100_hook(4, 10, "object-key-init"),
      [3]: cc11001100_hook(3, 12, "object-key-init"),
      [2]: cc11001100_hook(2, 4, "object-key-init"),
      [5]: cc11001100_hook(5, 5, "object-key-init")
    }, "var-init"),
    JM = cc11001100_hook("JM", {
      [1]: cc11001100_hook(1, 6, "object-key-init"),
      [4]: cc11001100_hook(4, 11, "object-key-init"),
      [3]: cc11001100_hook(3, 13, "object-key-init"),
      [2]: cc11001100_hook(2, 7, "object-key-init"),
      [5]: cc11001100_hook(5, 8, "object-key-init")
    }, "var-init");
  Bb($g({
    Ki: cc11001100_hook("Ki", 1, "object-key-init"),
    Li: cc11001100_hook("Li", 2, "object-key-init"),
    yk: cc11001100_hook("yk", 3, "object-key-init"),
    zk: cc11001100_hook("zk", 4, "object-key-init"),
    Bk: cc11001100_hook("Bk", 5, "object-key-init"),
    Gi: cc11001100_hook("Gi", 6, "object-key-init"),
    Hi: cc11001100_hook("Hi", 7, "object-key-init"),
    Ji: cc11001100_hook("Ji", 8, "object-key-init"),
    Kj: cc11001100_hook("Kj", 9, "object-key-init"),
    Ak: cc11001100_hook("Ak", 10, "object-key-init"),
    Ii: cc11001100_hook("Ii", 11, "object-key-init"),
    xk: cc11001100_hook("xk", 12, "object-key-init"),
    Fi: cc11001100_hook("Fi", 13, "object-key-init")
  }), a => !Fb([1, 2], a));
  $g({
    Wh: cc11001100_hook("Wh", 1, "object-key-init"),
    Mj: cc11001100_hook("Mj", 2, "object-key-init"),
    hi: cc11001100_hook("hi", 3, "object-key-init"),
    Ck: cc11001100_hook("Ck", 4, "object-key-init")
  });
  const OM = cc11001100_hook("OM", $g({
      Xh: cc11001100_hook("Xh", 1, "object-key-init"),
      Fk: cc11001100_hook("Fk", 2, "object-key-init"),
      xj: cc11001100_hook("xj", 3, "object-key-init"),
      kk: cc11001100_hook("kk", 4, "object-key-init")
    }), "var-init"),
    FM = cc11001100_hook("FM", {
      threshold: cc11001100_hook("threshold", [0, .25, .5, .75, .95, .96, .97, .98, .99, 1], "object-key-init")
    }, "var-init");
  function PM(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", new bv(), "var-init");
    let f = cc11001100_hook("f", "", "var-init");
    const g = cc11001100_hook("g", k => {
      try {
        const l = cc11001100_hook("l", "object" === typeof k.data ? k.data : JSON.parse(k.data), "var-init");
        f === l.paw_id && (pe(a, "message", g), l.error ? e.j(Error(l.error)) : e.resolve(d(l)));
      } catch (l) {}
    }, "var-init");
    var h = cc11001100_hook("h", "function" === typeof a.gmaSdk?.getQueryInfo ? a.gmaSdk : void 0, "var-init");
    if (h) return oe(a, "message", g), f = cc11001100_hook("f", c(h), "assign"), e.promise;
    c = cc11001100_hook("c", "function" === typeof a.webkit?.messageHandlers?.getGmaQueryInfo?.postMessage || "function" === typeof a.webkit?.messageHandlers?.getGmaSig?.postMessage ? a.webkit.messageHandlers : void 0, "assign");
    return c ? (f = cc11001100_hook("f", String(Math.floor(2147483647 * Yg())), "assign"), oe(a, "message", g), b(c, f), e.promise) : null;
  }
  function QM(a) {
    cc11001100_hook("a", a, "function-parameter");
    return PM(a, (b, c) => void (b.getGmaQueryInfo ?? b.getGmaSig)?.postMessage(c), b => b.getQueryInfo(), b => b.signal);
  }
  ;
  function RM(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.m) return a.m;
    a.m = cc11001100_hook("a.m", oh(a.l, "__uspapiLocator"), "assign");
    return a.m;
  }
  function SM(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("function" === typeof a.l?.__uspapi) a = cc11001100_hook("a", a.l.__uspapi, "assign"), a("getUSPData", 1, b);else if (RM(a)) {
      TM(a);
      const c = cc11001100_hook("c", ++a.F, "var-init");
      a.A[c] = cc11001100_hook("a.A[c]", b, "assign");
      a.m && a.m.postMessage({
        __uspapiCall: {
          command: cc11001100_hook("command", "getUSPData", "object-key-init"),
          version: cc11001100_hook("version", 1, "object-key-init"),
          callId: cc11001100_hook("callId", c, "object-key-init")
        }
      }, "*");
    }
  }
  function TM(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.v || (a.v = cc11001100_hook("a.v", b => {
      try {
        let d = cc11001100_hook("d", {}, "var-init");
        "string" === typeof b.data ? d = cc11001100_hook("d", JSON.parse(b.data), "assign") : d = cc11001100_hook("d", b.data, "assign");
        var c = cc11001100_hook("c", d.__uspapiReturn, "var-init");
        a.A?.[c.callId](c.returnValue, c.success);
      } catch {}
    }, "assign"), oe(a.l, "message", a.v));
  }
  var UM = cc11001100_hook("UM", class extends Ik {
    constructor(a) {
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
      this.A = cc11001100_hook("this.A", {}, "assign");
      this.F = cc11001100_hook("this.F", 0, "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
    }
    j() {
      this.v && pe(this.l, "message", this.v);
      super.j();
    }
    C(a) {
      let b = cc11001100_hook("b", {}, "var-init");
      if ("function" === typeof this.l?.__uspapi || null != RM(this)) {
        var c = cc11001100_hook("c", ie(() => a(b)), "var-init");
        SM(this, (d, e) => {
          e && (b = cc11001100_hook("b", d, "assign"));
          c();
        });
        setTimeout(c, 500);
      } else a(b);
    }
  }, "var-init");
  function VM(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.v || (a.v = cc11001100_hook("a.v", b => {
      try {
        const c = cc11001100_hook("c", wL(b.data.__fciReturn), "var-init");
        (0, a.F[yd(c, 1)])(c);
      } catch (c) {}
    }, "assign"), oe(a.A, "message", a.v));
  }
  var WM = cc11001100_hook("WM", class extends Ik {
    constructor(a) {
      super();
      this.A = cc11001100_hook("this.A", a, "assign");
      this.v = cc11001100_hook("this.v", this.l = cc11001100_hook("this.l", null, "assign"), "assign");
      this.F = cc11001100_hook("this.F", {}, "assign");
      this.I = cc11001100_hook("this.I", 0, "assign");
      this.C = cc11001100_hook("this.C", !1, "assign");
    }
    m() {
      if (!this.C) {
        if (!this.l) {
          var a = cc11001100_hook("a", oh(this.A, "googlefcPresent"), "var-init");
          this.l = cc11001100_hook("this.l", a ? a : null, "assign");
        }
        this.C = cc11001100_hook("this.C", !0, "assign");
      }
      return !!this.l;
    }
    H() {
      return new Promise(a => {
        if (this.m()) if (this.l === this.A) {
          var b = cc11001100_hook("b", this.l.googlefc || (this.l.googlefc = cc11001100_hook("this.l.googlefc", {}, "assign")), "var-init");
          b.__fci = cc11001100_hook("b.__fci", b.__fci || [], "assign");
          b.__fci.push("loaded", c => {
            a(wL(c));
          });
        } else VM(this), b = cc11001100_hook("b", this.I++, "assign"), this.F[b] = cc11001100_hook("this.F[b]", a, "assign"), this.l.postMessage({
          __fciCall: {
            command: cc11001100_hook("command", "loaded", "object-key-init"),
            callId: cc11001100_hook("callId", b, "object-key-init")
          }
        }, "*");
      });
    }
  }, "var-init");
  const XM = cc11001100_hook("XM", (a, b) => {
    try {
      const g = cc11001100_hook("g", void 0 === B(b, 6) ? !0 : B(b, 6), "var-init");
      a: switch (Cd(b, 4)) {
        case 1:
          var c = cc11001100_hook("c", "pt", "var-init");
          break a;
        case 2:
          c = cc11001100_hook("c", "cr", "assign");
          break a;
        default:
          c = cc11001100_hook("c", "", "assign");
      }
      var d = cc11001100_hook("d", new Uf(Sf(Cd(b, 2)), K(b, 3), c), "var-init"),
        e = cc11001100_hook("e", D(b, Of, 5)?.j() ?? "", "var-init");
      d.Db = cc11001100_hook("d.Db", e, "assign");
      d.j = cc11001100_hook("d.j", g, "assign");
      d.win = cc11001100_hook("d.win", a, "assign");
      var f = cc11001100_hook("f", d.build(), "var-init");
      Mf(f);
    } catch {}
  }, "var-init");
  function YM(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), "complete" === a.document.readyState ? XM(a, b) : oe(a, "load", () => void XM(a, b)));
  }
  ;
  function ZM(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", RegExp("^https?://[^/#?]+/?$"), "var-init");
    return !!a && !b.test(a);
  }
  function $M(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a === a.top || Rg(a.top)) return Promise.resolve({
      status: cc11001100_hook("status", 4, "object-key-init")
    });
    a: {
      try {
        var b = cc11001100_hook("b", (a.top?.frames ?? {}).google_ads_top_frame, "var-init");
        break a;
      } catch (d) {}
      b = cc11001100_hook("b", null, "assign");
    }
    if (!b) return Promise.resolve({
      status: cc11001100_hook("status", 2, "object-key-init")
    });
    if (a.parent === a.top && ZM(a.document.referrer)) return Promise.resolve({
      status: cc11001100_hook("status", 3, "object-key-init")
    });
    const c = cc11001100_hook("c", new bv(), "var-init");
    a = cc11001100_hook("a", new MessageChannel(), "assign");
    a.port1.onmessage = cc11001100_hook("a.port1.onmessage", d => {
      "__goog_top_url_resp" === d.data.msgType && c.resolve({
        vb: cc11001100_hook("vb", d.data.topUrl, "object-key-init"),
        status: cc11001100_hook("status", d.data.topUrl ? 0 : 1, "object-key-init")
      });
    }, "assign");
    b.postMessage({
      msgType: cc11001100_hook("msgType", "__goog_top_url_req", "object-key-init")
    }, "*", [a.port2]);
    return c.promise;
  }
  ;
  var aN = cc11001100_hook("aN", class extends L {
      constructor(a) {
        super(a);
      }
    }, "var-init"),
    bN = cc11001100_hook("bN", Wd(aN), "var-init"),
    cN = cc11001100_hook("cN", [1, 3], "var-init");
  const dN = cc11001100_hook("dN", N`https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`, "var-init");
  function eN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.google_tag_topics_state ?? (a.google_tag_topics_state = cc11001100_hook("a.google_tag_topics_state", {}, "assign")), "var-init");
    return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
      function d(h) {
        cc11001100_hook("h", h, "function-parameter");
        return g.j(h).then(({
          data: k
        }) => k);
      }
      const e = cc11001100_hook("e", Wg("IFRAME"), "var-init");
      e.style.display = cc11001100_hook("e.style.display", "none", "assign");
      e.name = cc11001100_hook("e.name", "goog_topics_frame", "assign");
      e.src = cc11001100_hook("e.src", He(dN).toString(), "assign");
      const f = cc11001100_hook("f", new URL(dN.toString()).origin, "var-init"),
        g = cc11001100_hook("g", sF({
          destination: cc11001100_hook("destination", a, "object-key-init"),
          Ca: cc11001100_hook("Ca", e, "object-key-init"),
          origin: cc11001100_hook("origin", f, "object-key-init"),
          Ua: cc11001100_hook("Ua", "goog:gRpYw:doubleclick", "object-key-init")
        }), "var-init");
      g.j("goog:topics:frame:handshake:ack").then(({
        data: h
      }) => {
        "goog:topics:frame:handshake:ack" === h && c(d);
      });
      b.messageChannelSendRequestFn = cc11001100_hook("b.messageChannelSendRequestFn", d, "assign");
      a.document.documentElement.appendChild(e);
    });
  }
  function fN(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", Rk, "var-init");
    const {
      Xb: e,
      Wb: f
    } = cc11001100_hook("", gN(c), "var-init");
    b = cc11001100_hook("b", b.google_tag_topics_state ?? (b.google_tag_topics_state = cc11001100_hook("b.google_tag_topics_state", {}, "assign")), "assign");
    b.getTopicsPromise || (a = cc11001100_hook("a", a({
      message: cc11001100_hook("message", "goog:topics:frame:get:topics", "object-key-init"),
      skipTopicsObservation: cc11001100_hook("skipTopicsObservation", !1, "object-key-init")
    }).then(g => {
      let h = cc11001100_hook("h", f, "var-init");
      if (g instanceof Uint8Array) h || (h = cc11001100_hook("h", !(e instanceof Uint8Array && Mb(g, e)), "assign"));else if (bj()(g)) h || (h = cc11001100_hook("h", g !== e, "assign"));else return d.ia(989, Error(JSON.stringify(g))), 7;
      if (h && c) try {
        var k = cc11001100_hook("k", new aN(), "var-init");
        var l = cc11001100_hook("l", x(k, 2, Ni()), "var-init");
        g instanceof Uint8Array ? kd(l, 1, cN, Oc(g, !1, !1)) : kd(l, 3, cN, g);
        c.setItem("goog:cached:topics", Qd(l));
      } catch {}
      return g;
    }), "assign"), b.getTopicsPromise = cc11001100_hook("b.getTopicsPromise", a, "assign"));
    return e && !f ? Promise.resolve(e) : b.getTopicsPromise;
  }
  function gN(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) return {
      Xb: cc11001100_hook("Xb", null, "object-key-init"),
      Wb: cc11001100_hook("Wb", !0, "object-key-init")
    };
    try {
      const n = cc11001100_hook("n", a.getItem("goog:cached:topics"), "var-init");
      if (!n) return {
        Xb: cc11001100_hook("Xb", null, "object-key-init"),
        Wb: cc11001100_hook("Wb", !0, "object-key-init")
      };
      const q = cc11001100_hook("q", bN(n), "var-init");
      let r;
      const u = cc11001100_hook("u", md(q, cN), "var-init");
      switch (u) {
        case 0:
          r = cc11001100_hook("r", null, "assign");
          break;
        case 1:
          var b,
            c = cc11001100_hook("c", 1 === md(q, cN) ? 1 : -1, "var-init");
          a = cc11001100_hook("a", q, "assign");
          const z = cc11001100_hook("z", w(a, c), "var-init"),
            A = cc11001100_hook("A", Oc(z, !0, !!(Ec(a.N) & 18)), "var-init");
          null != A && A !== z && ad(a, c, A);
          var d = cc11001100_hook("d", A, "var-init");
          var e = cc11001100_hook("e", null == d ? zc() : d, "var-init");
          yc(wc);
          var f = cc11001100_hook("f", e.j, "var-init");
          if (null == f || uc(f)) var g = cc11001100_hook("g", f, "var-init");else {
            if ("string" === typeof f) {
              if (pc) {
                c = cc11001100_hook("c", f, "assign");
                rc.test(c) && (c = cc11001100_hook("c", c.replace(rc, tc), "assign"));
                var h = cc11001100_hook("h", atob(c), "var-init");
                var k = cc11001100_hook("k", new Uint8Array(h.length), "var-init");
                for (c = cc11001100_hook("c", 0, "assign"); c < h.length; c++) k[c] = cc11001100_hook("k[c]", h.charCodeAt(c), "assign");
                var l = cc11001100_hook("l", k, "var-init");
              } else l = cc11001100_hook("l", nc(f), "assign");
            } else l = cc11001100_hook("l", null, "assign");
            g = cc11001100_hook("g", l, "assign");
          }
          var m = cc11001100_hook("m", g, "var-init");
          r = cc11001100_hook("r", (b = cc11001100_hook("b", null == m ? m : e.j = cc11001100_hook("e.j", m, "assign"), "assign")) ? new Uint8Array(b) : vc || (vc = cc11001100_hook("vc", new Uint8Array(0), "assign")), "assign");
          break;
        case 3:
          r = cc11001100_hook("r", Cd(q, 3 === md(q, cN) ? 3 : -1), "assign");
          break;
        default:
          Cf(u, void 0);
      }
      const C = cc11001100_hook("C", yd(q, 2) + 6048E5 < Ni(), "var-init");
      return {
        Xb: cc11001100_hook("Xb", r, "object-key-init"),
        Wb: cc11001100_hook("Wb", C, "object-key-init")
      };
    } catch {
      return {
        Xb: cc11001100_hook("Xb", null, "object-key-init"),
        Wb: cc11001100_hook("Wb", !0, "object-key-init")
      };
    }
  }
  ;
  function hN(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.innerInsElement, "assign");
    if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
    return a;
  }
  async function iN({
    ma: a,
    ea: b,
    Ma: c,
    slot: d
  }) {
    const e = cc11001100_hook("e", d.vars, "var-init"),
      f = cc11001100_hook("f", Ug(d.pubWin), "var-init"),
      g = cc11001100_hook("g", hN(d), "var-init"),
      h = cc11001100_hook("h", new aH({
        J: cc11001100_hook("J", f, "object-key-init"),
        pubWin: cc11001100_hook("pubWin", d.pubWin, "object-key-init"),
        D: cc11001100_hook("D", e, "object-key-init"),
        ma: cc11001100_hook("ma", a, "object-key-init"),
        ea: cc11001100_hook("ea", b, "object-key-init"),
        Ma: cc11001100_hook("Ma", c, "object-key-init"),
        Y: cc11001100_hook("Y", g, "object-key-init")
      }), "var-init");
    h.F = cc11001100_hook("h.F", Date.now(), "assign");
    ql(1, [h.D]);
    Tk(1032, () => {
      if (f && S(xq)) {
        var k = cc11001100_hook("k", h.D, "var-init");
        Z(aD(), 32, !1) || (fD(aD(), 32, !0), MI(f, "sa" === k.google_loader_used ? 5 : 9));
      }
    });
    try {
      await jN(h);
    } catch (k) {
      if (!cl(159, k)) throw k;
    }
    Tk(639, () => {
      {
        var k = cc11001100_hook("k", h.D, "var-init");
        const m = cc11001100_hook("m", h.J, "var-init");
        if (m && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
          var l;
          (l = cc11001100_hook("l", (l = cc11001100_hook("l", m.document.getElementById(k.google_async_iframe_id), "assign")) ? Lg(l, "INS", "adsbygoogle") : null, "assign")) ? (k = cc11001100_hook("k", new $G(m, l, k), "assign"), k.j = cc11001100_hook("k.j", t.setInterval(Ba(k.v, k), 500), "assign"), k.v(), k = cc11001100_hook("k", !0, "assign")) : k = cc11001100_hook("k", !1, "assign");
        } else k = cc11001100_hook("k", !1, "assign");
      }
      return k;
    });
    dl(h.pubWin, "affa", k => {
      Tk(1008, () => {
        e.google_ad_client && f && !rb() && kN(f, e, qJ(k.config), h.l, K(a, 8));
      }, lN);
    });
    e.google_ad_client && f && !rb() && f?.location?.hash?.match(/\bgoog_cpmi=([^&]*)/) && kN(f, e, mN(), h.l, K(a, 8));
    return h;
  }
  function lN(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.e = cc11001100_hook("a.e", `${U(Iq)}`, "assign");
  }
  function kN(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", O(zD), "var-init");
    var g = cc11001100_hook("g", b.google_page_url, "var-init");
    g = cc11001100_hook("g", "string" === typeof g ? g : "", "assign");
    var h = cc11001100_hook("h", "on" === b.google_adtest, "var-init");
    const k = cc11001100_hook("k", D(c, xF, 2), "var-init");
    try {
      const n = cc11001100_hook("n", a?.location?.hash?.match(/\bgoog_cpmi=([^&]*)/), "var-init");
      if (n) {
        var l = cc11001100_hook("l", decodeURIComponent(n[1]), "var-init");
        var m = cc11001100_hook("m", gg(l), "var-init");
      } else m = cc11001100_hook("m", null, "assign");
    } catch (n) {
      m = cc11001100_hook("m", null, "assign");
    }
    m || (m = cc11001100_hook("m", S(Zp) ? D(c, fg, 1) ?? null : null, "assign"));
    c = cc11001100_hook("c", {
      pa: cc11001100_hook("pa", m, "object-key-init"),
      ac: cc11001100_hook("ac", g, "object-key-init"),
      Wc: cc11001100_hook("Wc", !(!k?.j() || !(488 > P(a).clientWidth) && k?.v()), "object-key-init"),
      Rf: cc11001100_hook("Rf", e, "object-key-init"),
      Ea: {
        Rg: cc11001100_hook("Rg", S(Qq) ? U(Wp) : U(Hq), "object-key-init"),
        Fb: cc11001100_hook("Fb", 300, "object-key-init"),
        yd: cc11001100_hook("yd", 2, "object-key-init"),
        Nc: cc11001100_hook("Nc", 5, "object-key-init"),
        gb: cc11001100_hook("gb", -1, "object-key-init")
      },
      Ub: {
        Fb: cc11001100_hook("Fb", 50, "object-key-init")
      },
      ca: cc11001100_hook("ca", new bL({
        mb: cc11001100_hook("mb", S(Qq) ? U(fq) : U(Iq), "object-key-init"),
        Ib: cc11001100_hook("Ib", S(bq), "object-key-init"),
        Mc: cc11001100_hook("Mc", U(Vp), "object-key-init"),
        Dc: cc11001100_hook("Dc", S(dq), "object-key-init"),
        dc: cc11001100_hook("dc", S(Yp), "object-key-init"),
        Lb: cc11001100_hook("Lb", S(cq), "object-key-init")
      }), "object-key-init"),
      Sb: cc11001100_hook("Sb", h, "object-key-init")
    }, "assign");
    iL(a, f, c, b.google_ad_client, d);
  }
  function mN() {
    const a = cc11001100_hook("a", new pJ(), "var-init");
    if (S(Cq)) {
      var b = cc11001100_hook("b", new xF(), "var-init");
      b = cc11001100_hook("b", Ad(b, 5, !0), "assign");
      b = cc11001100_hook("b", Ad(b, 8, !0), "assign");
      rd(a, 2, b);
    }
    return a;
  }
  function jN(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
    PF(13);
    PF(11);
    var b = cc11001100_hook("b", aD(), "var-init"),
      c = cc11001100_hook("c", Z(b, 23, !1), "var-init");
    c || fD(b, 23, !0);
    if (!c) {
      b = cc11001100_hook("b", a.D.google_ad_client, "assign");
      c = cc11001100_hook("c", a.ma, "assign");
      b = cc11001100_hook("b", void 0 !== cd(c, xF, 13 === md(c, CF) ? 13 : -1) ? D(Dd(c, xF, 13, CF), iE, 2) : Mb(Dd(c, zF, 14, CF)?.j() ?? [], [b]) ? D(D(Dd(c, zF, 14, CF), xF, 2), iE, 2) : new iE(), "assign");
      b = cc11001100_hook("b", new jE(a.pubWin, a.D.google_ad_client, b, B(a.ma, 6)), "assign");
      b.l = cc11001100_hook("b.l", !0, "assign");
      const e = cc11001100_hook("e", D(b.A, Do, 1), "var-init");
      if (b.l) {
        c = cc11001100_hook("c", b.j, "assign");
        if (b.v && !qz(e)) {
          var d = cc11001100_hook("d", new XD(), "var-init");
          d = cc11001100_hook("d", x(d, 1, 1), "assign");
        } else d = cc11001100_hook("d", null, "assign");
        if (d) {
          d = cc11001100_hook("d", Qd(d), "assign");
          try {
            c.localStorage.setItem("google_auto_fc_cmp_setting", d);
          } catch (f) {}
        }
      }
      e && rz(new sz(b.j, new Nz(b.j, b.m), e, new Gw(b.j)));
    }
    b = cc11001100_hook("b", !Kh() && !qb(), "assign");
    return !b || b && !nN(a) ? oN(a) : Promise.resolve();
  }
  function pN(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", wF(a.J, b), "assign");
    const d = cc11001100_hook("d", Oh() || cr(a.pubWin.top), "var-init");
    if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
    let e = cc11001100_hook("e", 0, "var-init");
    try {
      const f = cc11001100_hook("f", a.pubWin.top, "var-init");
      e = cc11001100_hook("e", er(f.document, f).y, "assign");
    } catch (f) {
      return 0;
    }
    a = cc11001100_hook("a", e + d.height, "assign");
    return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0;
  }
  function nN(a) {
    cc11001100_hook("a", a, "function-parameter");
    return qN(a) || rN(a);
  }
  function qN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.D, "var-init");
    if (!b.google_pause_ad_requests) return !1;
    const c = cc11001100_hook("c", t.setTimeout(() => {
        bl("abg:cmppar", {
          client: cc11001100_hook("client", a.D.google_ad_client, "object-key-init"),
          url: cc11001100_hook("url", a.D.google_page_url, "object-key-init")
        });
      }, 1E4), "var-init"),
      d = cc11001100_hook("d", al(450, () => {
        b.google_pause_ad_requests = cc11001100_hook("b.google_pause_ad_requests", !1, "assign");
        t.clearTimeout(c);
        a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        nN(a) || oN(a);
      }), "var-init");
    a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
    return !0;
  }
  function rN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.pubWin.document, "var-init"),
      c = cc11001100_hook("c", sN(), "var-init");
    if (0 > c.hidden && 0 > c.visible) return !1;
    const d = cc11001100_hook("d", a.Y, "var-init"),
      e = cc11001100_hook("e", tH(b), "var-init");
    if (!e) return !1;
    if (!uH(b)) return tN(a, c.visible, d);
    const f = cc11001100_hook("f", 3 === sH(b), "var-init");
    if (pN(a, d) <= c.hidden && !f) return !1;
    let g = cc11001100_hook("g", al(332, () => {
      !uH(b) && g && (pe(b, e, g), tN(a, c.visible, d) || oN(a), g = cc11001100_hook("g", null, "assign"));
    }), "var-init");
    return oe(b, e, g);
  }
  function sN() {
    const a = cc11001100_hook("a", {
      hidden: cc11001100_hook("hidden", 0, "object-key-init"),
      visible: cc11001100_hook("visible", 3, "object-key-init")
    }, "var-init");
    t.IntersectionObserver || (a.visible = cc11001100_hook("a.visible", -1, "assign"));
    Og() && (a.visible *= cc11001100_hook("a.visible", 2, "assign"));
    return a;
  }
  function tN(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!c || 0 > b) return !1;
    var d = cc11001100_hook("d", a.D, "var-init");
    if (!Ll(d.google_reactive_ad_format) && (vG(d) || d.google_reactive_ads_config) || !fr(c) || pN(a, c) <= b) return !1;
    var e = cc11001100_hook("e", aD(), "var-init"),
      f = cc11001100_hook("f", Z(e, 8, {}), "var-init");
    e = cc11001100_hook("e", Z(e, 9, {}), "assign");
    d = cc11001100_hook("d", d.google_ad_section || d.google_ad_region || "", "assign");
    const g = cc11001100_hook("g", !!a.pubWin.google_apltlad, "var-init");
    if (!f[d] && !e[d] && !g) return !1;
    f = cc11001100_hook("f", new Promise(h => {
      const k = cc11001100_hook("k", new t.IntersectionObserver((l, m) => {
        Ab(l, n => {
          0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0));
        });
      }, {
        rootMargin: cc11001100_hook("rootMargin", `${100 * b}%`, "object-key-init")
      }), "var-init");
      a.H = cc11001100_hook("a.H", k, "assign");
      k.observe(c);
    }), "assign");
    e = cc11001100_hook("e", new Promise(h => {
      c.addEventListener("adsbygoogle-close-to-visible-event", () => {
        h(void 0);
      });
    }), "assign");
    ja(Promise, "any").call(Promise, [f, e]).then(() => {
      Tk(294, () => {
        oN(a);
      });
    });
    return !0;
  }
  function oN(a) {
    cc11001100_hook("a", a, "function-parameter");
    Tk(326, () => {
      if (1 === mi(a.D)) {
        var d = cc11001100_hook("d", S(yq), "var-init"),
          e = cc11001100_hook("e", d || S(wq), "var-init"),
          f = cc11001100_hook("f", a.pubWin, "var-init");
        if (e && f === a.J) {
          var g = cc11001100_hook("g", new kl(), "var-init");
          e = cc11001100_hook("e", new ll(), "assign");
          var h = cc11001100_hook("h", g.setCorrelator(xh(a.pubWin)), "var-init");
          var k = cc11001100_hook("k", QF(a.pubWin), "var-init");
          h = cc11001100_hook("h", Bd(h, 5, k), "assign");
          Ed(h, 2, 1);
          g = cc11001100_hook("g", rd(e, 1, g), "assign");
          h = cc11001100_hook("h", new jl(), "assign");
          h = cc11001100_hook("h", Ad(h, 10, !0), "assign");
          k = cc11001100_hook("k", S(pq), "assign");
          h = cc11001100_hook("h", Ad(h, 8, k), "assign");
          k = cc11001100_hook("k", S(qq), "assign");
          h = cc11001100_hook("h", Ad(h, 12, k), "assign");
          k = cc11001100_hook("k", S(tq), "assign");
          h = cc11001100_hook("h", Ad(h, 7, k), "assign");
          k = cc11001100_hook("k", S(sq), "assign");
          h = cc11001100_hook("h", Ad(h, 13, k), "assign");
          rd(g, 2, h);
          f.google_rum_config = cc11001100_hook("f.google_rum_config", e.toJSON(), "assign");
          Vg(f.document, B(a.ma, 9) && d ? a.ea.tg : a.ea.ug);
        } else Ui(Sk);
      }
    });
    a.D.google_ad_channel = cc11001100_hook("a.D.google_ad_channel", uN(a, a.D.google_ad_channel), "assign");
    a.D.google_tag_partner = cc11001100_hook("a.D.google_tag_partner", vN(a, a.D.google_tag_partner), "assign");
    wN(a);
    xN(a);
    var b = cc11001100_hook("b", a.D.google_start_time, "var-init");
    "number" === typeof b && (ul = cc11001100_hook("ul", b, "assign"), a.D.google_start_time = cc11001100_hook("a.D.google_start_time", null, "assign"));
    vF(a);
    yN(a);
    iD() && lE({
      win: cc11001100_hook("win", a.pubWin, "object-key-init"),
      webPropertyCode: cc11001100_hook("webPropertyCode", a.D.google_ad_client, "object-key-init"),
      zb: cc11001100_hook("zb", a.ea.zb, "object-key-init")
    });
    vG(a.D) && (By() && (a.D.google_adtest = cc11001100_hook("a.D.google_adtest", a.D.google_adtest || "on", "assign")), a.D.google_pgb_reactive = cc11001100_hook("a.D.google_pgb_reactive", a.D.google_pgb_reactive || 3, "assign"));
    zN(a.J);
    b = cc11001100_hook("b", "function" === typeof a.pubWin.document.browsingTopics && KF("browsing-topics", a.pubWin.document), "assign");
    const c = cc11001100_hook("c", KF("shared-storage", a.pubWin.document), "var-init");
    if (b || S(hq) && c) try {
      a.A = cc11001100_hook("a.A", eN(a.pubWin), "assign");
    } catch (d) {
      cl(984, d);
    }
    return AN(a);
  }
  function yN(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.J && (zG(a.J, a.ea.Bf), S(Ip) || xG(a.J.location) && IG(a.J, {
      enable_page_level_ads: {
        pltais: cc11001100_hook("pltais", !0, "object-key-init")
      },
      google_ad_client: cc11001100_hook("google_ad_client", a.D.google_ad_client, "object-key-init")
    }));
  }
  function uN(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (b ? [b] : []).concat(ZC(a.D).ad_channels || []).join("+");
  }
  function vN(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (b ? [b] : []).concat(ZC(a.D).tag_partners || []).join("+");
  }
  function BN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Wg("IFRAME"), "var-init");
    Zg(a, (c, d) => {
      null != c && b.setAttribute(d, c);
    });
    return b;
  }
  function CN(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return 9 === a.D.google_reactive_ad_format && Lg(a.Y, null, "fsi_container") ? (a.Y.appendChild(b), Promise.resolve(b)) : GG(a.ea.Je, 525, d => {
      a.Y.appendChild(b);
      d.createAdSlot(a.J, a.D, b, a.Y.parentElement, aE(c, a.pubWin));
      return b;
    });
  }
  function DN(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    O(zD).ac = cc11001100_hook("O(zD).ac", a.D.google_page_url, "assign");
    YM(a.pubWin, Ad(Qf(Ed(Ed(Pf(new Rf(), Nf(new Of(), String(xh(a.pubWin)))), 4, 1), 2, 1), K(a.ma, 2)), 6, !0));
    const d = cc11001100_hook("d", a.J, "var-init");
    a.D.google_acr && a.D.google_acr(b);
    oe(b, "load", () => {
      b && b.setAttribute("data-load-complete", !0);
      const f = cc11001100_hook("f", d ? ZC(d).enable_overlap_observer || !1 : !1, "var-init");
      (a.D.ovlp || f) && d && d === a.pubWin && EN(d, a, a.Y, b);
    });
    var e = cc11001100_hook("e", f => {
      f && a.m.push(() => {
        f.xa();
      });
    }, "var-init");
    FN(a, b);
    GN(a, b);
    !d || vG(a.D) && !KG(a.D) || (e(new fI(d, b, a.D)), e(new pH(a, b)), e(d.IntersectionObserver ? null : new rH(d, b, a.Y)));
    d && (e(new jH(d, b)), a.m.push(UG(d, a.D)), O(ZG).init(d), a.m.push(fH(d, a.Y, b)));
    b && b.setAttribute("data-google-container-id", c);
    c = cc11001100_hook("c", a.D.iaaso, "assign");
    if (null != c) {
      e = cc11001100_hook("e", a.Y, "assign");
      const f = cc11001100_hook("f", e.parentElement, "var-init");
      (f && sr.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c);
    }
    c = cc11001100_hook("c", a.Y, "assign");
    c.setAttribute("tabindex", "0");
    c.setAttribute("title", "Advertisement");
    c.setAttribute("aria-label", "Advertisement");
    HN(a);
  }
  function FN(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.pubWin, "var-init"),
      d = cc11001100_hook("d", a.D.google_ad_client, "var-init"),
      e = cc11001100_hook("e", hD(), "var-init");
    let f = cc11001100_hook("f", null, "var-init");
    const g = cc11001100_hook("g", dl(c, "pvt", (h, k) => {
      "string" === typeof h.token && k.source === b.contentWindow && (f = cc11001100_hook("f", h.token, "assign"), g(), e[d] = cc11001100_hook("e[d]", e[d] || [], "assign"), e[d].push(f), 100 < e[d].length && e[d].shift());
    }), "var-init");
    a.m.push(g);
  }
  function IN(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", RF(a, "__gpi_opt_out", b.l), "var-init");
    c && (c = cc11001100_hook("c", $f(Zf(Yf(Xf(new ag(), c), 2147483647), "/"), b.pubWin.location.hostname), "assign"), SF(a, "__gpi_opt_out", c, b.l));
  }
  function GN(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", dl(a.pubWin, "gpi-uoo", (d, e) => {
      if (e.source === b.contentWindow) {
        e = cc11001100_hook("e", $f(Zf(Yf(Xf(new ag(), d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname), "assign");
        var f = cc11001100_hook("f", new VF(a.pubWin), "var-init");
        SF(f, "__gpi_opt_out", e, a.l);
        if (d.userOptOut || d.clearAdsData) TF(f, "__gads", a.l), TF(f, "__gpi", a.l);
      }
    }), "var-init");
    a.m.push(c);
  }
  function HN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Kh(a.pubWin), "var-init");
    if (b) if ("AMP-STICKY-AD" === b.container) {
      const c = cc11001100_hook("c", d => {
        "fill_sticky" === d.data && b.renderStart && b.renderStart();
      }, "var-init");
      oe(a.pubWin, "message", Rk.ta(616, c));
      a.m.push(() => {
        pe(a.pubWin, "message", c);
      });
    } else b.renderStart && b.renderStart();
  }
  function EN(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    IL(new NM(a), c).then(e => {
      ql(8, [e]);
      return e;
    }).then(e => {
      const f = cc11001100_hook("f", c.parentElement, "var-init");
      (f && sr.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
      return e;
    }).then(e => {
      const f = cc11001100_hook("f", b.D.armr || "", "var-init"),
        g = cc11001100_hook("g", e.executionTime || "", "var-init"),
        h = cc11001100_hook("h", null == b.D.iaaso ? "" : Number(b.D.iaaso), "var-init"),
        k = cc11001100_hook("k", Number(e.isOverlappingOrOutsideViewport), "var-init"),
        l = cc11001100_hook("l", Cb(e.entries, z => `${z.overlapType}:${z.overlapDepth}:${z.overlapDetectionPoint}`), "var-init"),
        m = cc11001100_hook("m", Number(e.overlappedArea.toFixed(2)), "var-init"),
        n = cc11001100_hook("n", d.dataset.googleQueryId || "", "var-init"),
        q = cc11001100_hook("q", m * e.targetRect.width * e.targetRect.height, "var-init"),
        r = cc11001100_hook("r", e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY, "var-init"),
        u = cc11001100_hook("u", oi(e.target), "var-init"),
        C = cc11001100_hook("C", [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join(), "var-init");
      e = cc11001100_hook("e", e.viewportSize.width + "x" + e.viewportSize.height, "assign");
      bl("ovlp", {
        adf: cc11001100_hook("adf", b.D.google_ad_dom_fingerprint, "object-key-init"),
        armr: cc11001100_hook("armr", f, "object-key-init"),
        client: cc11001100_hook("client", b.D.google_ad_client, "object-key-init"),
        eid: cc11001100_hook("eid", QF(b.D), "object-key-init"),
        et: cc11001100_hook("et", g, "object-key-init"),
        fwrattr: cc11001100_hook("fwrattr", b.D.google_full_width_responsive, "object-key-init"),
        iaaso: cc11001100_hook("iaaso", h, "object-key-init"),
        io: cc11001100_hook("io", k, "object-key-init"),
        saldr: cc11001100_hook("saldr", b.D.google_loader_used, "object-key-init"),
        oa: cc11001100_hook("oa", m, "object-key-init"),
        oe: cc11001100_hook("oe", l.join(","), "object-key-init"),
        qid: cc11001100_hook("qid", n, "object-key-init"),
        rafmt: cc11001100_hook("rafmt", b.D.google_responsive_auto_format, "object-key-init"),
        roa: cc11001100_hook("roa", q, "object-key-init"),
        slot: cc11001100_hook("slot", b.D.google_ad_slot, "object-key-init"),
        sp: cc11001100_hook("sp", r, "object-key-init"),
        tgt: cc11001100_hook("tgt", u, "object-key-init"),
        tr: cc11001100_hook("tr", C, "object-key-init"),
        url: cc11001100_hook("url", b.D.google_page_url, "object-key-init"),
        vp: cc11001100_hook("vp", e, "object-key-init"),
        pvc: cc11001100_hook("pvc", xh(a), "object-key-init")
      }, 1);
    }).catch(e => {
      ql(8, ["Error:", e.message, c]);
      bl("ovlp-err", {
        err: cc11001100_hook("err", e.message, "object-key-init")
      }, 1);
    });
  }
  function JN(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.allow = cc11001100_hook("b.allow", b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a, "assign");
  }
  function KN(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", a.D, "var-init");
    const f = cc11001100_hook("f", e.google_async_iframe_id, "var-init"),
      g = cc11001100_hook("g", e.google_ad_width, "var-init"),
      h = cc11001100_hook("h", e.google_ad_height, "var-init");
    var k = cc11001100_hook("k", LG(e), "var-init"),
      l = cc11001100_hook("l", {
        id: cc11001100_hook("id", f, "object-key-init"),
        name: cc11001100_hook("name", f, "object-key-init")
      }, "var-init");
    l.style = cc11001100_hook("l.style", k ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`, "assign");
    var m = cc11001100_hook("m", mh(), "var-init");
    if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
      m = cc11001100_hook("m", b, "assign");
      if (b = cc11001100_hook("b", "fsb=" + encodeURIComponent("1"), "assign")) {
        var n = cc11001100_hook("n", m.indexOf("#"), "var-init");
        0 > n && (n = cc11001100_hook("n", m.length, "assign"));
        var q = cc11001100_hook("q", m.indexOf("?"), "var-init");
        if (0 > q || q > n) {
          q = cc11001100_hook("q", n, "assign");
          var r = cc11001100_hook("r", "", "var-init");
        } else r = cc11001100_hook("r", m.substring(q + 1, n), "assign");
        m = cc11001100_hook("m", [m.slice(0, q), r, m.slice(n)], "assign");
        n = cc11001100_hook("n", m[1], "assign");
        m[1] = cc11001100_hook("m[1]", b ? n ? n + "&" + b : b : n, "assign");
        b = cc11001100_hook("b", m[0] + (m[1] ? "?" + m[1] : "") + m[2], "assign");
      } else b = cc11001100_hook("b", m, "assign");
      l.sandbox = cc11001100_hook("l.sandbox", lh().join(" "), "assign");
    }
    S(np) && !1 === e.google_video_play_muted && JN("autoplay", l);
    n = cc11001100_hook("n", U(sb() ? Jp : Op), "assign");
    m = cc11001100_hook("m", b, "assign");
    m.length > n && (m = cc11001100_hook("m", m.substring(0, n - 8), "assign"), m = cc11001100_hook("m", m.replace(/%\w?$/, ""), "assign"), m = cc11001100_hook("m", m.replace(/&[^=]*=?$/, ""), "assign"), m += cc11001100_hook("m", "&trunc=1", "assign"));
    m !== b && (n -= cc11001100_hook("n", 8, "assign"), q = cc11001100_hook("q", b.lastIndexOf("&", n), "assign"), -1 === q && (q = cc11001100_hook("q", b.lastIndexOf("?", n), "assign")), bl("trn", {
      ol: cc11001100_hook("ol", b.length, "object-key-init"),
      tr: cc11001100_hook("tr", -1 === q ? "" : b.substring(q + 1), "object-key-init"),
      url: cc11001100_hook("url", b, "object-key-init")
    }, .01));
    b = cc11001100_hook("b", m, "assign");
    n = cc11001100_hook("n", c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b, "assign");
    null != g && (l.width = cc11001100_hook("l.width", String(g), "assign"));
    null != h && (l.height = cc11001100_hook("l.height", String(h), "assign"));
    l.frameborder = cc11001100_hook("l.frameborder", "0", "assign");
    l.marginwidth = cc11001100_hook("l.marginwidth", "0", "assign");
    l.marginheight = cc11001100_hook("l.marginheight", "0", "assign");
    l.vspace = cc11001100_hook("l.vspace", "0", "assign");
    l.hspace = cc11001100_hook("l.hspace", "0", "assign");
    l.allowtransparency = cc11001100_hook("l.allowtransparency", "true", "assign");
    l.scrolling = cc11001100_hook("l.scrolling", "no", "assign");
    m = cc11001100_hook("m", "", "assign");
    if (c) {
      m = cc11001100_hook("m", 10, "assign");
      for (n = cc11001100_hook("n", "", "assign"); 0 < m--;) n += cc11001100_hook("n", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random())), "assign");
      n = cc11001100_hook("n", m = cc11001100_hook("m", n, "assign"), "assign");
      q = cc11001100_hook("q", ih(), "assign");
      b = cc11001100_hook("b", b + (-1 == b.indexOf("?") ? "?" : "&") + [0 < q.length ? "google_debug" + (q ? "=" + q : "") + "&" : "", "xpc=", n, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join(""), "assign");
    } else b = cc11001100_hook("b", n, "assign");
    e.dash && (l.srcdoc = cc11001100_hook("l.srcdoc", e.dash, "assign"));
    a.pubWin.document.featurePolicy?.features().includes("attribution-reporting") && JN("attribution-reporting", l);
    S(mq) && (n = cc11001100_hook("n", a.pubWin, "assign"), void 0 !== n.credentialless && (S(nq) || n.crossOriginIsolated) && (l.credentialless = cc11001100_hook("l.credentialless", "true", "assign")));
    if (k) l.src = cc11001100_hook("l.src", b, "assign"), l = cc11001100_hook("l", BN(l), "assign"), l = cc11001100_hook("l", CN(a, l, d), "assign");else {
      d = cc11001100_hook("d", {}, "assign");
      d.dtd = cc11001100_hook("d.dtd", dH(new Date().getTime(), ul), "assign");
      d = cc11001100_hook("d", ii(d, b), "assign");
      l.src = cc11001100_hook("l.src", d, "assign");
      d = cc11001100_hook("d", a.pubWin, "assign");
      d = cc11001100_hook("d", d == d.top, "assign");
      l = cc11001100_hook("l", BN(l), "assign");
      d && a.m.push(Qh(a.pubWin, l));
      a.Y.style.visibility = cc11001100_hook("a.Y.style.visibility", "visible", "assign");
      d = cc11001100_hook("d", a.Y, "assign");
      for (k = cc11001100_hook("k", l, "assign"); n = cc11001100_hook("n", d.firstChild, "assign");) d.removeChild(n);
      d.appendChild(k);
      l = cc11001100_hook("l", Promise.resolve(l), "assign");
    }
    c && (c = cc11001100_hook("c", a.ea.Sg, "assign"), e = cc11001100_hook("e", {
      id: cc11001100_hook("id", f, "object-key-init"),
      url: cc11001100_hook("url", b, "object-key-init"),
      width: cc11001100_hook("width", g, "object-key-init"),
      height: cc11001100_hook("height", h, "object-key-init"),
      Ua: cc11001100_hook("Ua", m, "object-key-init"),
      sg: cc11001100_hook("sg", a.pubWin, "object-key-init"),
      kf: cc11001100_hook("kf", f, "object-key-init"),
      Wk: cc11001100_hook("Wk", "google_expandable_ad_slot" + mi(e), "object-key-init"),
      Yf: cc11001100_hook("Yf", c.toString(), "object-key-init"),
      bd: cc11001100_hook("bd", a.pubWin, "object-key-init")
    }, "assign"), e = cc11001100_hook("e", !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Ua || !e.bd ? void 0 : dl(e.bd, "ct", Ca(gl, e, c)), "assign"), e && a.m.push(e));
    return l;
  }
  async function LN(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.D, "var-init"),
      c = cc11001100_hook("c", a.pubWin, "var-init"),
      d = cc11001100_hook("d", a.l, "var-init");
    y(d, 5) && IN(new VF(a.pubWin), a);
    var e = cc11001100_hook("e", aE(d, a.pubWin), "var-init");
    if (!y(d, 5)) return bl("afc_noc_req", {}, U(mp)), Promise.resolve();
    y(d, 5) && ZF(d, a.pubWin, a.D.google_ad_client);
    var f = cc11001100_hook("f", a.D.google_reactive_ads_config, "var-init");
    f && (FG(a.J, f), MG(f, a, aE(d)), f = cc11001100_hook("f", f.page_level_pubvars, "assign"), ua(f) && we(a.D, f));
    y(d, 5) && (await MN());
    f = cc11001100_hook("f", KF("shared-storage", a.pubWin.document), "assign");
    S(hq) && a.A && y(d, 5) && f && !Z(aD(), 34, !1) && (fD(aD(), 34, !0), f = cc11001100_hook("f", a.A.then(g => {
      g({
        message: cc11001100_hook("message", "goog:spam:client_age", "object-key-init"),
        pvsid: cc11001100_hook("pvsid", xh(a.pubWin), "object-key-init"),
        clientAgeIframe: cc11001100_hook("clientAgeIframe", S(gq), "object-key-init")
      });
    }), "assign"), Rk.Ba(1069, f));
    if (a.A) if (NN(a)) {
      a.v = cc11001100_hook("a.v", 1, "assign");
      const g = cc11001100_hook("g", aE(a.l, a.pubWin), "var-init");
      f = cc11001100_hook("f", a.A.then(async k => {
        await fN(k, a.pubWin, g).then(l => {
          a.v = cc11001100_hook("a.v", l, "assign");
        });
      }), "assign");
      const h = cc11001100_hook("h", U(kq), "var-init");
      0 < h ? await Promise.race([f, zh(h)]) : await f;
    } else a.v = cc11001100_hook("a.v", 5, "assign");
    f = cc11001100_hook("f", "", "assign");
    LG(b) ? (f = cc11001100_hook("f", a.ea.Tg.toString() + "#" + UI(b), "assign"), bJ(b, aD()), ON(b)) : (5 === b.google_pgb_reactive && b.google_reactive_ads_config || !wG(b) || uG(c, b, e)) && ON(b) && (f = cc11001100_hook("f", RI(a, d), "assign"));
    ql(2, [b, f]);
    if (!f) return Promise.resolve();
    b.google_async_iframe_id || li(c);
    e = cc11001100_hook("e", mi(b), "assign");
    b = cc11001100_hook("b", a.pubWin === a.J ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ea()).toString(36)}`, "assign");
    c = cc11001100_hook("c", 0 < pN(a, a.Y, !0), "assign");
    e = cc11001100_hook("e", {
      ifi: cc11001100_hook("ifi", e, "object-key-init"),
      uci: cc11001100_hook("uci", b, "object-key-init")
    }, "assign");
    c && (c = cc11001100_hook("c", aD(), "assign"), e.btvi = cc11001100_hook("e.btvi", Z(c, 21, 1), "assign"), gD(c, 21));
    f = cc11001100_hook("f", ii(e, f), "assign");
    d = cc11001100_hook("d", KN(a, f, 0 === a.C, d), "assign");
    a.D.rpe && $H(a.pubWin, a.Y, {
      height: cc11001100_hook("height", a.D.google_ad_height, "object-key-init"),
      Dd: cc11001100_hook("Dd", "force", "object-key-init"),
      Ld: cc11001100_hook("Ld", !0, "object-key-init"),
      Ag: cc11001100_hook("Ag", !0, "object-key-init"),
      Ic: cc11001100_hook("Ic", a.D.google_ad_client, "object-key-init")
    });
    d = cc11001100_hook("d", await d, "assign");
    try {
      DN(a, d, b);
    } catch (g) {
      cl(223, g);
    }
  }
  function MN() {
    return (vb() ? 0 <= $a(11) : ub() && 0 <= $a(65)) ? new Promise(a => {
      II(a.bind(null, !0));
    }) : (II(null), Promise.resolve(!1));
  }
  function PN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", S(Aq) ? new vL(a) : new UM(a), "var-init");
    return new Promise(c => {
      b.C(d => {
        d && "string" === typeof d.uspString ? c(d.uspString) : c(null);
      });
    });
  }
  function QN(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", nh(t.top, "googlefcPresent"), "var-init");
    t.googlefc && !b && bl("adsense_fc_has_namespace_but_no_iframes", {
      publisherId: cc11001100_hook("publisherId", a, "object-key-init")
    }, 1);
  }
  function RN(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.m() ? a.H() : Promise.resolve(null);
  }
  function SN(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.Jg, "var-init");
    b = cc11001100_hook("b", b.uspString, "assign");
    c ? bH(a, c) : dE(a, !0);
    b && x(a, 1, b);
  }
  function TN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", U(jp), "var-init");
    if (0 >= b) return null;
    const c = cc11001100_hook("c", Ni(), "var-init"),
      d = cc11001100_hook("d", QM(a.pubWin), "var-init");
    if (!d) return null;
    a.B = cc11001100_hook("a.B", "0", "assign");
    return Promise.race([d, zh(b, "0")]).then(e => {
      bl("adsense_paw", {
        time: cc11001100_hook("time", Ni() - c, "object-key-init")
      });
      1E4 < e?.length ? cl(809, Error(`ML:${e.length}`)) : a.B = cc11001100_hook("a.B", e, "assign");
    }).catch(e => {
      cl(809, e);
    });
  }
  function UN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Ni(), "var-init");
    return Promise.race([Tk(832, () => $M(a)), zh(200)]).then(c => {
      bl("afc_etu", {
        etus: cc11001100_hook("etus", c?.status ?? 100, "object-key-init"),
        sig: cc11001100_hook("sig", Ni() - b, "object-key-init"),
        tms: cc11001100_hook("tms", 200, "object-key-init")
      });
      return c?.vb;
    });
  }
  async function VN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", TN(a), "var-init"),
      c = cc11001100_hook("c", Tk(868, () => UN(a.pubWin)), "var-init");
    EI(K(a.ma, 8));
    bF(a.pubWin);
    QN(a.D.google_ad_client);
    var d = cc11001100_hook("d", S(zq) ? new AL(a.pubWin) : new WM(a.pubWin), "var-init");
    await RN(d);
    a.l = cc11001100_hook("a.l", new eE(), "assign");
    d = cc11001100_hook("d", [cH(a), PN(a.pubWin)], "assign");
    d = cc11001100_hook("d", await Promise.all(d), "assign");
    SN(a.l, {
      Jg: cc11001100_hook("Jg", d[0], "object-key-init"),
      uspString: cc11001100_hook("uspString", d[1], "object-key-init")
    });
    await b;
    a.vb = cc11001100_hook("a.vb", (await c) || "", "assign");
    await LN(a);
  }
  function NN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l, "var-init");
    a = cc11001100_hook("a", a.D, "assign");
    return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!y(b, 5) && !b.j() && !jD() && !y(b, 9);
  }
  function AN(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.pubWin.document, "var-init"),
      c = cc11001100_hook("c", a.D, "var-init");
    const d = cc11001100_hook("d", c.google_ad_width, "var-init"),
      e = cc11001100_hook("e", c.google_ad_height, "var-init");
    let f = cc11001100_hook("f", 0, "var-init");
    try {
      !1 === c.google_allow_expandable_ads && (f |= cc11001100_hook("f", 1, "assign"));
      if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= cc11001100_hook("f", 2, "assign");
      {
        c = cc11001100_hook("c", navigator, "assign");
        const l = cc11001100_hook("l", c.userAgent, "var-init"),
          m = cc11001100_hook("m", c.platform, "var-init"),
          n = cc11001100_hook("n", c.product, "var-init");
        if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(m) && /^Opera/.test(l)) var g = cc11001100_hook("g", !1, "var-init");else if (/Win/.test(m) && /Trident/.test(l) && 11 <= b.documentMode) g = cc11001100_hook("g", !0, "assign");else {
          var h = cc11001100_hook("h", (/WebKit\/(\d+)/.exec(l) || [0, 0])[1], "var-init"),
            k = cc11001100_hook("k", (/rv:(\d+\.\d+)/.exec(l) || [0, 0])[1], "var-init");
          g = cc11001100_hook("g", !h && "Gecko" === n && 27 <= k && !/ rv: 1\.8([^.] |\.0) /.test(l) || 536 <= h ? !0 : !1, "assign");
        }
      }
      g || (f |= cc11001100_hook("f", 4, "assign"));
      jr(a.pubWin, d, e) && (f |= cc11001100_hook("f", 2, "assign"));
    } catch (l) {
      f |= cc11001100_hook("f", 8, "assign");
    }
    a.C = cc11001100_hook("a.C", f, "assign");
    0 === a.C || (a.D.google_allow_expandable_ads = cc11001100_hook("a.D.google_allow_expandable_ads", !1, "assign"));
    Ah(a.pubWin) !== a.pubWin && (a.j |= cc11001100_hook("a.j", 4, "assign"));
    3 === sH(a.pubWin.document) && (a.j |= cc11001100_hook("a.j", 32, "assign"));
    if (b = cc11001100_hook("b", a.J, "assign")) b = cc11001100_hook("b", a.J, "assign"), b = cc11001100_hook("b", !(P(b).scrollWidth <= P(b).clientWidth), "assign");
    b && (a.j |= cc11001100_hook("a.j", 1024, "assign"));
    a.pubWin.Prototype?.Version && (a.j |= cc11001100_hook("a.j", 16384, "assign"));
    a.D.google_loader_features_used && (a.j |= cc11001100_hook("a.j", a.D.google_loader_features_used, "assign"));
    a.G = cc11001100_hook("a.G", 2, "assign");
    return VN(a);
  }
  function ON(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", aD(), "var-init"),
      c = cc11001100_hook("c", a.google_ad_section, "var-init");
    vG(a) && gD(b, 15);
    if (ri(a)) {
      if (100 < gD(b, 5)) return !1;
    } else if (100 < gD(b, 6) - Z(b, 15, 0) && "" === c) return !1;
    return !0;
  }
  function wN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.J, "var-init");
    if (b && !ZC(b).ads_density_stats_processed && !Kh(b) && (ZC(b).ads_density_stats_processed = cc11001100_hook("ZC(b).ads_density_stats_processed", !0, "assign"), S(Pp) || .01 > Yg())) {
      const c = cc11001100_hook("c", () => {
        if (b) {
          var d = cc11001100_hook("d", aC(WB(b), a.D.google_ad_client, b.location.hostname, QF(a.D).split(",")), "var-init");
          bl("ama_stats", d, 1);
        }
      }, "var-init");
      yh(b, () => {
        t.setTimeout(c, 1E3);
      });
    }
  }
  function zN(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && !ZC(a).host_pinged_back && (ZC(a).host_pinged_back = cc11001100_hook("ZC(a).host_pinged_back", !0, "assign"), bl("abg_host", {
      host: cc11001100_hook("host", a.location.host, "object-key-init")
    }, .01));
  }
  function xN(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.pubWin, "var-init");
    if (b && !ZC(b).menu_analytics_processed && (ZC(b).menu_analytics_processed = cc11001100_hook("ZC(b).menu_analytics_processed", !0, "assign"), S(Lp))) {
      const c = cc11001100_hook("c", () => {
        var d = cc11001100_hook("d", "function" !== typeof b.navigator.sendBeacon ? null : new xE(b), "var-init");
        if (null === d) var e = cc11001100_hook("e", null, "var-init");else e = cc11001100_hook("e", new wE(b), "assign"), d = cc11001100_hook("d", new uE(d, a.D.google_ad_client, b.location.hostname), "assign"), e = cc11001100_hook("e", new tE(e, d), "assign");
        e?.Ye();
      }, "var-init");
      yh(b, () => {
        t.setTimeout(c, 1E3);
      });
    }
  }
  ;
  (function (a, b, c) {
    Tk(843, () => {
      if (!t.google_sa_impl) {
        var d = cc11001100_hook("d", nL(a), "var-init");
        lL(d);
        ql(16, [3, d.toJSON()]);
        var e = cc11001100_hook("e", jL({
            Ud: cc11001100_hook("Ud", b, "object-key-init"),
            Qe: cc11001100_hook("Qe", K(d, 2), "object-key-init")
          }), "var-init"),
          f = cc11001100_hook("f", c(e, d), "var-init");
        t.google_sa_impl = cc11001100_hook("t.google_sa_impl", h => iN({
          ma: cc11001100_hook("ma", d, "object-key-init"),
          ea: cc11001100_hook("ea", f, "object-key-init"),
          Ma: cc11001100_hook("Ma", e, "object-key-init"),
          slot: cc11001100_hook("slot", h, "object-key-init")
        }), "assign");
        NF(JF(t));
        t.google_process_slots?.();
        var g = cc11001100_hook("g", (t.Prototype || {}).Version, "var-init");
        null != g && bl("prtpjs", {
          version: cc11001100_hook("version", g, "object-key-init")
        });
      }
    });
  })(mL, "m202303220101", function (a, b) {
    const c = cc11001100_hook("c", 2012 < vd(b, 1) ? `_fy${vd(b, 1)}` : "", "var-init"),
      d = cc11001100_hook("d", K(b, 3), "var-init");
    b = cc11001100_hook("b", K(b, 2), "assign");
    return {
      ug: cc11001100_hook("ug", N`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`, "object-key-init"),
      tg: cc11001100_hook("tg", N`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`, "object-key-init"),
      Je: cc11001100_hook("Je", N`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`, "object-key-init"),
      Bf: cc11001100_hook("Bf", N`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`, "object-key-init"),
      Sg: cc11001100_hook("Sg", N`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`, "object-key-init"),
      Tg: cc11001100_hook("Tg", N`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`, "object-key-init"),
      Nb: cc11001100_hook("Nb", N`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`, "object-key-init"),
      zb: cc11001100_hook("zb", N`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`, "object-key-init")
    };
  });
}).call(this, "[2021,\"r20230323\",\"r20110914\",null,null,null,null,\".google.cn\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759875,44759926,44777877,44759837]]");