(function (sttc) {
  /* 
  Copyright The Closure Library Authors. 
  SPDX-License-Identifier: Apache-2.0 
  */
  'use strict';

  var aa = cc11001100_hook("aa", {}, "var-init"),
    n = cc11001100_hook("n", this || self, "var-init");
  function ba(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.split("."), "assign");
    for (var b = cc11001100_hook("b", n, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (b = cc11001100_hook("b", b[a[c]], "assign"), null == b) return null;
    return b;
  }
  function ca(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", typeof a, "var-init");
    b = cc11001100_hook("b", "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null", "assign");
    return "array" == b || "object" == b && "number" == typeof a.length;
  }
  function da(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", typeof a, "var-init");
    return "object" == b && null != a || "function" == b;
  }
  function ea(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = cc11001100_hook("a[fa]", ++ha, "assign"));
  }
  var fa = cc11001100_hook("fa", "closure_uid_" + (1E9 * Math.random() >>> 0), "var-init"),
    ha = cc11001100_hook("ha", 0, "var-init");
  function ia(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.call.apply(a.bind, arguments);
  }
  function ja(a, b, c) {
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
  function ka(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka = cc11001100_hook("ka", ia, "assign") : ka = cc11001100_hook("ka", ja, "assign");
    return ka.apply(null, arguments);
  }
  function la(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Array.prototype.slice.call(arguments, 1), "var-init");
    return function () {
      var d = cc11001100_hook("d", c.slice(), "var-init");
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function ma(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.split("."), "assign");
    var c = cc11001100_hook("c", n, "var-init");
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = cc11001100_hook("d", a.shift(), "assign"));) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = cc11001100_hook("c", c[d], "assign") : c = cc11001100_hook("c", c[d] = cc11001100_hook("c[d]", {}, "assign"), "assign") : c[d] = cc11001100_hook("c[d]", b, "assign");
  }
  function na(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  ;
  let oa = cc11001100_hook("oa", new Date().getTime(), "var-init");
  function pa(a) {
    cc11001100_hook("a", a, "function-parameter");
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function ra(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init");
    a = cc11001100_hook("a", pa(String(a)).split("."), "assign");
    b = cc11001100_hook("b", pa(String(b)).split("."), "assign");
    const d = cc11001100_hook("d", Math.max(a.length, b.length), "var-init");
    for (let g = cc11001100_hook("g", 0, "var-init"); 0 == c && g < d; g++) {
      var e = cc11001100_hook("e", a[g] || "", "var-init"),
        f = cc11001100_hook("f", b[g] || "", "var-init");
      do {
        e = cc11001100_hook("e", /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""], "assign");
        f = cc11001100_hook("f", /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""], "assign");
        if (0 == e[0].length && 0 == f[0].length) break;
        c = cc11001100_hook("c", sa(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || sa(0 == e[2].length, 0 == f[2].length) || sa(e[2], f[2]), "assign");
        e = cc11001100_hook("e", e[3], "assign");
        f = cc11001100_hook("f", f[3], "assign");
      } while (0 == c);
    }
    return c;
  }
  function sa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a < b ? -1 : a > b ? 1 : 0;
  }
  ;
  var ta,
    ua = cc11001100_hook("ua", ba("CLOSURE_FLAGS"), "var-init"),
    va = cc11001100_hook("va", ua && ua[610401301], "var-init");
  ta = cc11001100_hook("ta", null != va ? va : !1, "assign");
  function wa() {
    var a = cc11001100_hook("a", n.navigator, "var-init");
    return a && (a = cc11001100_hook("a", a.userAgent, "assign")) ? a : "";
  }
  var xa;
  const ya = cc11001100_hook("ya", n.navigator, "var-init");
  xa = cc11001100_hook("xa", ya ? ya.userAgentData || null : null, "assign");
  function Ba(a) {
    cc11001100_hook("a", a, "function-parameter");
    return ta ? xa ? xa.brands.some(({
      brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1;
  }
  function p(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 != wa().indexOf(a);
  }
  ;
  function Ca() {
    return ta ? !!xa && 0 < xa.brands.length : !1;
  }
  function Da() {
    return Ca() ? !1 : p("Trident") || p("MSIE");
  }
  function Ea() {
    return Ca() ? Ba("Microsoft Edge") : p("Edg/");
  }
  function Fa() {
    !p("Safari") || Ga() || (Ca() ? 0 : p("Coast")) || (Ca() ? 0 : p("Opera")) || (Ca() ? 0 : p("Edge")) || Ea() || Ca() && Ba("Opera");
  }
  function Ga() {
    return Ca() ? Ba("Chromium") : (p("Chrome") || p("CriOS")) && !(Ca() ? 0 : p("Edge")) || p("Silk");
  }
  function Ha(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    a.forEach(c => {
      b[c[0]] = cc11001100_hook("b[c[0]]", c[1], "assign");
    });
    return c => b[c.find(d => d in b)] || "";
  }
  function Ja() {
    var a = cc11001100_hook("a", wa(), "var-init");
    if (Da()) {
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
    a = cc11001100_hook("a", Ha(b), "assign");
    return (Ca() ? 0 : p("Opera")) ? a(["Version", "Opera"]) : (Ca() ? 0 : p("Edge")) ? a(["Edge"]) : Ea() ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : Ga() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = cc11001100_hook("a", b[2], "assign")) && a[1] || "";
  }
  ;
  function Ka(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function La(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Ma(a, b) {
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
  function Na(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", Array(c), "var-init"),
      e = cc11001100_hook("e", "string" === typeof a ? a.split("") : a, "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < c; f++) f in e && (d[f] = cc11001100_hook("d[f]", b.call(void 0, e[f], f, a), "assign"));
    return d;
  }
  function Oa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function Pa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a: {
      const c = cc11001100_hook("c", a.length, "var-init"),
        d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
      for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
        b = cc11001100_hook("b", e, "assign");
        break a;
      }
      b = cc11001100_hook("b", -1, "assign");
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Qa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a: {
      var c = cc11001100_hook("c", a.length, "var-init");
      const d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
      for (--c; 0 <= c; c--) if (c in d && b.call(void 0, d[c], c, a)) {
        b = cc11001100_hook("b", c, "assign");
        break a;
      }
      b = cc11001100_hook("b", -1, "assign");
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Ra(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 <= Ka(a, b);
  }
  function q(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.length, "var-init");
    if (0 < b) {
      const c = cc11001100_hook("c", Array(b), "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c[d] = cc11001100_hook("c[d]", a[d], "assign");
      return c;
    }
    return [];
  }
  ;
  function Ta(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ta[" "](a);
    return a;
  }
  Ta[" "] = cc11001100_hook("Ta[\" \"]", function () {}, "assign");
  var Ua = cc11001100_hook("Ua", Da(), "var-init");
  !p("Android") || Ga();
  Ga();
  Fa();
  var Va = cc11001100_hook("Va", {}, "var-init"),
    Wa = cc11001100_hook("Wa", null, "var-init");
  function Xa(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    Ya(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function Ya(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    function c(l) {
      cc11001100_hook("l", l, "function-parameter");
      for (; d < a.length;) {
        var k = cc11001100_hook("k", a.charAt(d++), "var-init"),
          m = cc11001100_hook("m", Wa[k], "var-init");
        if (null != m) return m;
        if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
      }
      return l;
    }
    Za();
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
  function Za() {
    if (!Wa) {
      Wa = cc11001100_hook("Wa", {}, "assign");
      for (var a = cc11001100_hook("a", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), b = cc11001100_hook("b", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), c = cc11001100_hook("c", 0, "var-init"); 5 > c; c++) {
        var d = cc11001100_hook("d", a.concat(b[c].split("")), "var-init");
        Va[c] = cc11001100_hook("Va[c]", d, "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < d.length; e++) {
          var f = cc11001100_hook("f", d[e], "var-init");
          void 0 === Wa[f] && (Wa[f] = cc11001100_hook("Wa[f]", e, "assign"));
        }
      }
    }
  }
  ;
  var $a = cc11001100_hook("$a", "undefined" !== typeof Uint8Array, "var-init");
  const ab = cc11001100_hook("ab", !Ua && "function" === typeof n.btoa, "var-init");
  const bb = cc11001100_hook("bb", Symbol(), "var-init");
  function cb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (bb) return a[bb] |= cc11001100_hook("a[bb]", b, "assign");
    if (void 0 !== a.h) return a.h |= cc11001100_hook("a.h", b, "assign");
    Object.defineProperties(a, {
      h: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return b;
  }
  function db(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    bb ? a[bb] && (a[bb] &= cc11001100_hook("a[bb]", ~b, "assign")) : void 0 !== a.h && (a.h &= cc11001100_hook("a.h", ~b, "assign"));
  }
  function r(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    bb ? b = cc11001100_hook("b", a[bb], "assign") : b = cc11001100_hook("b", a.h, "assign");
    return null == b ? 0 : b;
  }
  function eb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    bb ? a[bb] = cc11001100_hook("a[bb]", b, "assign") : void 0 !== a.h ? a.h = cc11001100_hook("a.h", b, "assign") : Object.defineProperties(a, {
      h: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return a;
  }
  function fb(a) {
    cc11001100_hook("a", a, "function-parameter");
    cb(a, 1);
    return a;
  }
  function gb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!(r(a) & 2);
  }
  function hb(a) {
    cc11001100_hook("a", a, "function-parameter");
    cb(a, 16);
    return a;
  }
  function ib(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    eb(b, (a | 0) & -51);
  }
  function jb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    eb(b, (a | 18) & -41);
  }
  ;
  var kb = cc11001100_hook("kb", {}, "var-init");
  function lb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  let mb;
  var nb = cc11001100_hook("nb", Object.freeze(eb([], 23)), "var-init");
  function ob(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (r(a.u) & 2) throw Error();
  }
  function pb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && lb(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
  function qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a) return a;
    switch (typeof a) {
      case "string":
        return +a;
      case "number":
        return a;
    }
  }
  function rb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function sb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", r(a), "var-init");
    let d = cc11001100_hook("d", c, "var-init");
    0 === d && (d |= cc11001100_hook("d", b & 16, "assign"));
    d |= cc11001100_hook("d", b & 2, "assign");
    d !== c && eb(a, d);
  }
  ;
  function tb(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j + a.V, "var-init");
    return a.H || (a.H = cc11001100_hook("a.H", a.u[b] = cc11001100_hook("a.u[b]", {}, "assign"), "assign"));
  }
  function t(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return -1 === b ? null : b >= a.j ? a.H ? a.H[b] : void 0 : c && a.H && (c = cc11001100_hook("c", a.H[b], "assign"), null != c) ? c : a.u[b + a.V];
  }
  function x(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    ob(a);
    return z(a, b, c, d);
  }
  function z(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.v && (a.v = cc11001100_hook("a.v", void 0, "assign"));
    if (b >= a.j || d) return tb(a)[b] = cc11001100_hook("tb(a)[b]", c, "assign"), a;
    a.u[b + a.V] = cc11001100_hook("a.u[b + a.V]", c, "assign");
    (c = cc11001100_hook("c", a.H, "assign")) && b in c && delete c[b];
    return a;
  }
  function ub(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    let f = cc11001100_hook("f", t(a, b, d), "var-init");
    Array.isArray(f) || (f = cc11001100_hook("f", nb, "assign"));
    const g = cc11001100_hook("g", r(f), "var-init");
    g & 1 || fb(f);
    if (e) g & 2 || cb(f, 18), c & 1 || Object.freeze(f);else {
      e = cc11001100_hook("e", !(c & 2), "assign");
      const h = cc11001100_hook("h", g & 2, "var-init");
      c & 1 || !h ? e && g & 16 && !h && db(f, 16) : (f = cc11001100_hook("f", fb(Array.prototype.slice.call(f)), "assign"), z(a, b, f, d));
    }
    return f;
  }
  function vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", t(a, b), "assign");
    return null == a ? a : !!a;
  }
  function wb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", gb(a.u), "var-init");
    let e = cc11001100_hook("e", ub(a, b, 1, void 0, d), "var-init"),
      f = cc11001100_hook("f", r(e), "var-init");
    if (!(f & 4)) {
      Object.isFrozen(e) && (e = cc11001100_hook("e", fb(e.slice()), "assign"), z(a, b, e));
      let g = cc11001100_hook("g", 0, "var-init"),
        h = cc11001100_hook("h", 0, "var-init");
      for (; g < e.length; g++) {
        const l = cc11001100_hook("l", c(e[g]), "var-init");
        null != l && (e[h++] = cc11001100_hook("e[h++]", l, "assign"));
      }
      h < g && (e.length = cc11001100_hook("e.length", h, "assign"));
      f |= cc11001100_hook("f", 5, "assign");
      d && (f |= cc11001100_hook("f", 18, "assign"));
      eb(e, f);
      f & 2 && Object.freeze(e);
    }
    !d && (f & 2 || Object.isFrozen(e)) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign"), cb(e, 5), z(a, b, e));
    return e;
  }
  function A(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return B(vb(a, b), c);
  }
  function xb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (null == c) a = cc11001100_hook("a", x(a, b, nb), "assign");else {
      var d = cc11001100_hook("d", r(c), "var-init");
      if (!(d & 4)) {
        if (d & 2 || Object.isFrozen(c)) c = cc11001100_hook("c", Array.prototype.slice.call(c), "assign");
        for (let e = cc11001100_hook("e", 0, "var-init"); e < c.length; e++) c[e] = cc11001100_hook("c[e]", c[e], "assign");
        eb(c, d | 5);
      }
      a = cc11001100_hook("a", x(a, b, c), "assign");
    }
    return a;
  }
  function C(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    ob(a);
    c !== d ? z(a, b, c) : z(a, b, void 0, !1);
    return a;
  }
  function yb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    ob(a);
    (c = cc11001100_hook("c", zb(a, c), "assign")) && c !== b && null != d && z(a, c, void 0, !1);
    return z(a, b, d);
  }
  function Ab(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return zb(a, b) === c ? c : -1;
  }
  function zb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) {
      const e = cc11001100_hook("e", b[d], "var-init");
      null != t(a, e) && (0 !== c && z(a, c, void 0, !1), c = cc11001100_hook("c", e, "assign"));
    }
    return c;
  }
  function Bb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", t(a, c, d), "var-init");
    {
      let f = cc11001100_hook("f", !1, "var-init");
      null == e || "object" !== typeof e || (f = cc11001100_hook("f", Array.isArray(e), "assign")) || e.ua !== kb ? f ? (sb(e, r(a.u)), b = cc11001100_hook("b", new b(e), "assign")) : b = cc11001100_hook("b", void 0, "assign") : b = cc11001100_hook("b", e, "assign");
    }
    b !== e && null != b && z(a, c, b, d);
    return b;
  }
  function D(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", Bb(a, b, c, !1), "assign");
    if (null == b) return b;
    if (!gb(a.u)) {
      const d = cc11001100_hook("d", Cb(b), "var-init");
      d !== b && (b = cc11001100_hook("b", d, "assign"), z(a, c, b, !1));
    }
    return b;
  }
  function Db(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", !!(e & 2), "var-init");
    a.h || (a.h = cc11001100_hook("a.h", {}, "assign"));
    var g = cc11001100_hook("g", a.h[c], "var-init"),
      h = cc11001100_hook("h", ub(a, c, 3, void 0, f), "var-init");
    if (!g) {
      var l = cc11001100_hook("l", h, "var-init");
      g = cc11001100_hook("g", [], "assign");
      f = cc11001100_hook("f", !!(e & 2), "assign");
      h = cc11001100_hook("h", !!(r(l) & 2), "assign");
      const v = cc11001100_hook("v", l, "var-init");
      !f && h && (l = cc11001100_hook("l", Array.prototype.slice.call(l), "assign"));
      var k = cc11001100_hook("k", e | (h ? 2 : 0), "var-init");
      e = cc11001100_hook("e", h, "assign");
      let w = cc11001100_hook("w", 0, "var-init");
      for (; w < l.length; w++) {
        var m = cc11001100_hook("m", l[w], "var-init");
        var u = cc11001100_hook("u", b, "var-init");
        Array.isArray(m) ? (sb(m, k), m = cc11001100_hook("m", new u(m), "assign")) : m = cc11001100_hook("m", void 0, "assign");
        void 0 !== m && (e = cc11001100_hook("e", e || !!(2 & r(m.u)), "assign"), g.push(m));
      }
      a.h[c] = cc11001100_hook("a.h[c]", g, "assign");
      k = cc11001100_hook("k", r(l), "assign");
      b = cc11001100_hook("b", k | 33, "assign");
      b = cc11001100_hook("b", e ? b & -9 : b | 8, "assign");
      k != b && (e = cc11001100_hook("e", l, "assign"), Object.isFrozen(e) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign")), eb(e, b), l = cc11001100_hook("l", e, "assign"));
      v !== l && z(a, c, l);
      (f || 1 === d && h) && cb(g, 18);
      (f || 1 === d) && Object.freeze(g);
      return g;
    }
    if (3 === d) return g;
    f || ((f = cc11001100_hook("f", Object.isFrozen(g), "assign"), 1 !== d || f) ? 2 === d && f && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign"), a.h[c] = cc11001100_hook("a.h[c]", g, "assign")) : Object.freeze(g));
    return g;
  }
  function E(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", r(a.u), "var-init"),
      e = cc11001100_hook("e", !!(d & 2), "var-init");
    b = cc11001100_hook("b", Db(a, b, c, e ? 1 : 2, d), "assign");
    a = cc11001100_hook("a", ub(a, c, 3, void 0, e), "assign");
    if (!(e || r(a) & 8)) {
      for (e = cc11001100_hook("e", 0, "assign"); e < b.length; e++) c = cc11001100_hook("c", b[e], "assign"), d = cc11001100_hook("d", Cb(c), "assign"), c !== d && (b[e] = cc11001100_hook("b[e]", d, "assign"), a[e] = cc11001100_hook("a[e]", d.u, "assign"));
      cb(a, 8);
    }
    return b;
  }
  function Eb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    ob(a);
    null == c && (c = cc11001100_hook("c", void 0, "assign"));
    return z(a, b, c);
  }
  function Fb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    ob(a);
    null == d && (d = cc11001100_hook("d", void 0, "assign"));
    return yb(a, b, c, d);
  }
  function Gb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    ob(a);
    var e = cc11001100_hook("e", null == c ? nb : fb([]), "var-init");
    if (null != c) {
      var f = cc11001100_hook("f", !!c.length, "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"); g < c.length; g++) {
        const h = cc11001100_hook("h", c[g], "var-init");
        f = cc11001100_hook("f", f && !gb(h.u), "assign");
        e[g] = cc11001100_hook("e[g]", h.u, "assign");
      }
      f = cc11001100_hook("f", (f ? 8 : 0) | 1, "assign");
      g = cc11001100_hook("g", r(e), "assign");
      (g & f) !== f && (Object.isFrozen(e) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign")), eb(e, g | f));
      a.h || (a.h = cc11001100_hook("a.h", {}, "assign"));
      a.h[b] = cc11001100_hook("a.h[b]", c, "assign");
    } else a.h && (a.h[b] = cc11001100_hook("a.h[b]", void 0, "assign"));
    return z(a, b, e, d);
  }
  function Hb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return qb(t(a, b));
  }
  function Ib(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a: if (a = cc11001100_hook("a", t(a, b), "assign"), null != a) {
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
  function B(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == a ? b : a;
  }
  function G(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return B(t(a, b), "");
  }
  function Jb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", t(a, b), "var-init");
    var d = cc11001100_hook("d", null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0, "var-init");
    null != d && d !== c && z(a, b, d);
    return B(d, 0);
  }
  function H(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return B(t(a, b), 0);
  }
  function Kb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return D(a, b, Ab(a, d, c));
  }
  ;
  let Lb;
  function Mb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Lb = cc11001100_hook("Lb", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    Lb = cc11001100_hook("Lb", void 0, "assign");
    return a;
  }
  ;
  function Nb(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (r(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), pb(a), a;
        } else if ($a && null != a && a instanceof Uint8Array) {
          if (ab) {
            for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
            b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
            a = cc11001100_hook("a", btoa(b), "assign");
          } else {
            void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
            Za();
            b = cc11001100_hook("b", Va[b], "assign");
            const g = cc11001100_hook("g", Array(Math.floor(a.length / 3)), "var-init"),
              h = cc11001100_hook("h", b[64] || "", "var-init");
            let l = cc11001100_hook("l", 0, "var-init"),
              k = cc11001100_hook("k", 0, "var-init");
            for (; l < a.length - 2; l += cc11001100_hook("l", 3, "assign")) {
              var c = cc11001100_hook("c", a[l], "var-init"),
                d = cc11001100_hook("d", a[l + 1], "var-init"),
                e = cc11001100_hook("e", a[l + 2], "var-init"),
                f = cc11001100_hook("f", b[c >> 2], "var-init");
              c = cc11001100_hook("c", b[(c & 3) << 4 | d >> 4], "assign");
              d = cc11001100_hook("d", b[(d & 15) << 2 | e >> 6], "assign");
              e = cc11001100_hook("e", b[e & 63], "assign");
              g[k++] = cc11001100_hook("g[k++]", f + c + d + e, "assign");
            }
            f = cc11001100_hook("f", 0, "assign");
            e = cc11001100_hook("e", h, "assign");
            switch (a.length - l) {
              case 2:
                f = cc11001100_hook("f", a[l + 1], "assign"), e = cc11001100_hook("e", b[(f & 15) << 2] || h, "assign");
              case 1:
                a = cc11001100_hook("a", a[l], "assign"), g[k] = cc11001100_hook("g[k]", b[a >> 2] + b[(a & 3) << 4 | f >> 4] + e + h, "assign");
            }
            a = cc11001100_hook("a", g.join(""), "assign");
          }
          return a;
        }
    }
    return a;
  }
  ;
  function Ob(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", e && 0 == a.length && r(a) & 1 ? void 0 : Pb(a, b, c, void 0 !== d, e), "assign");else if (lb(a)) {
        const f = cc11001100_hook("f", {}, "var-init");
        for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = cc11001100_hook("f[g]", Ob(a[g], b, c, d, e), "assign"));
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function Pb(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", r(a), "var-init");
    d = cc11001100_hook("d", d ? !!(f & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) a[g] = cc11001100_hook("a[g]", Ob(a[g], b, c, d, e), "assign");
    c(f, a);
    return a;
  }
  function Qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.ua === kb ? a.toJSON() : Nb(a);
  }
  function Rb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && pb(b);
  }
  ;
  function Sb(a, b, c = jb) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if ($a && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = cc11001100_hook("d", r(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return eb(a, d | 18), a;
        a = cc11001100_hook("a", Pb(a, Sb, d & 4 ? jb : c, !0, !1), "assign");
        b = cc11001100_hook("b", r(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.ua === kb ? Tb(a) : a;
    }
  }
  function Ub(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    (a = cc11001100_hook("a", a.h && a.h[c], "assign")) ? (d = cc11001100_hook("d", r(a), "assign"), d & 2 ? d = cc11001100_hook("d", a, "assign") : (f = cc11001100_hook("f", Na(a, Tb), "assign"), jb(d, f), Object.freeze(f), d = cc11001100_hook("d", f, "assign")), Gb(b, c, d, e)) : x(b, c, Sb(d, f, g), e);
  }
  function Tb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (gb(a.u)) return a;
    a = cc11001100_hook("a", Vb(a, !0), "assign");
    cb(a.u, 18);
    return a;
  }
  function Vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.u, "var-init");
    var d = cc11001100_hook("d", hb([]), "var-init"),
      e = cc11001100_hook("e", a.constructor.messageId, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.H, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (r(c) & 128) && pb(d);
    b = cc11001100_hook("b", b || gb(a.u) ? jb : ib, "assign");
    d = cc11001100_hook("d", Mb(a.constructor, d), "assign");
    a.Ma && (d.Ma = cc11001100_hook("d.Ma", a.Ma.slice(), "assign"));
    f = cc11001100_hook("f", !!(r(c) & 16), "assign");
    const g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Ub(a, d, h - a.V, c[h], !1, f, b);
    if (e) for (const h in e) Ub(a, d, +h, e[h], !0, f, b);
    return d;
  }
  function Cb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!gb(a.u)) return a;
    const b = cc11001100_hook("b", Vb(a, !1), "var-init");
    b.v = cc11001100_hook("b.v", a, "assign");
    return b;
  }
  ;
  var I = cc11001100_hook("I", class {
    constructor(a, b, c) {
      null == a && (a = cc11001100_hook("a", Lb, "assign"));
      Lb = cc11001100_hook("Lb", void 0, "assign");
      var d = cc11001100_hook("d", this.constructor.messageId, "var-init");
      if (null == a) {
        a = cc11001100_hook("a", d ? [d] : [], "assign");
        var e = cc11001100_hook("e", !0, "var-init");
        eb(a, 48);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (d && d !== a[0]) throw Error();
        var f = cc11001100_hook("f", cb(a, 0) | 32, "var-init");
        e = cc11001100_hook("e", 0 !== (16 & f), "assign");
        if (128 & f) throw Error();
        eb(a, f);
      }
      this.V = cc11001100_hook("this.V", d ? 0 : -1, "assign");
      this.h = cc11001100_hook("this.h", void 0, "assign");
      this.u = cc11001100_hook("this.u", a, "assign");
      a: {
        f = cc11001100_hook("f", this.u.length, "assign");
        d = cc11001100_hook("d", f - 1, "assign");
        if (f && (f = cc11001100_hook("f", this.u[d], "assign"), lb(f))) {
          this.H = cc11001100_hook("this.H", f, "assign");
          this.j = cc11001100_hook("this.j", d - this.V, "assign");
          break a;
        }
        void 0 !== b && -1 < b ? (this.j = cc11001100_hook("this.j", Math.max(b, d + 1 - this.V), "assign"), this.H = cc11001100_hook("this.H", void 0, "assign")) : this.j = cc11001100_hook("this.j", Number.MAX_VALUE, "assign");
      }
      if (this.H && "g" in this.H) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c) {
        b = cc11001100_hook("b", e && !0, "assign");
        e = cc11001100_hook("e", this.j, "assign");
        let h;
        for (d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) if (f = cc11001100_hook("f", c[d], "assign"), f < e) {
          f += cc11001100_hook("f", this.V, "assign");
          var g = cc11001100_hook("g", a[f], "var-init");
          g ? Wb(g, b) : a[f] = cc11001100_hook("a[f]", nb, "assign");
        } else h || (h = cc11001100_hook("h", tb(this), "assign")), (g = cc11001100_hook("g", h[f], "assign")) ? Wb(g, b) : h[f] = cc11001100_hook("h[f]", nb, "assign");
      }
    }
    toJSON() {
      const a = cc11001100_hook("a", this.u, "var-init");
      var b;
      mb ? b = cc11001100_hook("b", a, "assign") : b = cc11001100_hook("b", Pb(a, Qb, Rb, void 0, !1), "assign");
      return b;
    }
  }, "var-init");
  function Wb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", r(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && eb(a, c | d);
    }
  }
  I.prototype.ua = cc11001100_hook("I.prototype.ua", kb, "assign");
  function Xb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Nb(b);
  }
  ;
  const Yb = cc11001100_hook("Yb", a => null !== a && void 0 !== a, "var-init");
  let Zb = cc11001100_hook("Zb", void 0, "var-init");
  function $b(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Zb, "var-init");
    Zb = cc11001100_hook("Zb", void 0, "assign");
    if (!b(a)) throw b = cc11001100_hook("b", c ? c() + "\n" : "", "assign"), Error(b + String(a));
  }
  ;
  function ac(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", Mb(a, hb(b)), "assign");
      }
      return b;
    };
  }
  ;
  var bc = cc11001100_hook("bc", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var ec = cc11001100_hook("ec", class extends I {
      constructor(a) {
        super(a, -1, cc);
      }
    }, "var-init"),
    cc = cc11001100_hook("cc", [2, 3], "var-init");
  function fc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.i = cc11001100_hook("this.i", a === gc && b || "", "assign");
    this.h = cc11001100_hook("this.h", hc, "assign");
  }
  var hc = cc11001100_hook("hc", {}, "var-init"),
    gc = cc11001100_hook("gc", {}, "var-init");
  function ic(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function jc(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", !1, "var-init"),
      c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }
  function kc(a) {
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
  ;
  function lc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function mc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1;
  }
  ;
  function nc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = cc11001100_hook("c[d]", a[d], "assign"));
    return c;
  }
  function oc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function pc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    let c = cc11001100_hook("c", 0, "var-init");
    for (const d in a) b[c++] = cc11001100_hook("b[c++]", a[d], "assign");
    return b;
  }
  function qc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    for (const c in a) b[c] = cc11001100_hook("b[c]", a[c], "assign");
    return b;
  }
  ;
  var rc;
  function sc() {
    if (void 0 === rc) {
      var a = cc11001100_hook("a", null, "var-init"),
        b = cc11001100_hook("b", n.trustedTypes, "var-init");
      if (b && b.createPolicy) {
        try {
          a = cc11001100_hook("a", b.createPolicy("goog#html", {
            createHTML: cc11001100_hook("createHTML", na, "object-key-init"),
            createScript: cc11001100_hook("createScript", na, "object-key-init"),
            createScriptURL: cc11001100_hook("createScriptURL", na, "object-key-init")
          }), "assign");
        } catch (c) {
          n.console && n.console.error(c.message);
        }
        rc = cc11001100_hook("rc", a, "assign");
      } else rc = cc11001100_hook("rc", a, "assign");
    }
    return rc;
  }
  ;
  const tc = cc11001100_hook("tc", {}, "var-init");
  class uc {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", b === tc ? a : "", "assign");
    }
    toString() {
      return this.h.toString();
    }
  }
  ;
  var wc = cc11001100_hook("wc", class {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", b === vc ? a : "", "assign");
    }
    toString() {
      return this.h + "";
    }
  }, "var-init");
  function xc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", yc.exec(zc(a).toString()), "assign");
    var c = cc11001100_hook("c", a[3] || "", "var-init");
    return Ac(a[1] + Bc("?", a[2] || "", b) + Bc("#", c));
  }
  function zc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof wc && a.constructor === wc ? a.h : "type_error:TrustedResourceUrl";
  }
  var yc = cc11001100_hook("yc", /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, "var-init"),
    vc = cc11001100_hook("vc", {}, "var-init");
  function Ac(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", sc(), "var-init");
    a = cc11001100_hook("a", b ? b.createScriptURL(a) : a, "assign");
    return new wc(a, vc);
  }
  function Bc(a, b, c) {
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
  function Cc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  ;
  function Dc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    function d(h) {
      cc11001100_hook("h", h, "function-parameter");
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = cc11001100_hook("e", 1, "var-init"); e < c.length; e++) {
      var f = cc11001100_hook("f", c[e], "var-init");
      if (!ca(f) || da(f) && 0 < f.nodeType) d(f);else {
        a: {
          if (f && "number" == typeof f.length) {
            if (da(f)) {
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
        La(g ? q(f) : f, d);
      }
    }
  }
  function Ec(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a || n.document || document, "assign");
  }
  Ec.prototype.getElementsByTagName = cc11001100_hook("Ec.prototype.getElementsByTagName", function (a, b) {
    return (b || this.h).getElementsByTagName(String(a));
  }, "assign");
  Ec.prototype.createElement = cc11001100_hook("Ec.prototype.createElement", function (a) {
    var b = cc11001100_hook("b", this.h, "var-init");
    a = cc11001100_hook("a", String(a), "assign");
    "application/xhtml+xml" === b.contentType && (a = cc11001100_hook("a", a.toLowerCase(), "assign"));
    return b.createElement(a);
  }, "assign");
  Ec.prototype.createTextNode = cc11001100_hook("Ec.prototype.createTextNode", function (a) {
    return this.h.createTextNode(String(a));
  }, "assign");
  Ec.prototype.append = cc11001100_hook("Ec.prototype.append", function (a, b) {
    Dc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
  }, "assign");
  Ec.prototype.contains = cc11001100_hook("Ec.prototype.contains", function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }, "assign");
  function Fc() {
    return ta && xa ? xa.mobile : !Gc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"));
  }
  function Gc() {
    return ta && xa ? !xa.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk");
  }
  ;
  var Hc = cc11001100_hook("Hc", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init"),
    Ic = cc11001100_hook("Ic", /#|$/, "var-init");
  function Jc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.search(Ic), "var-init");
    a: {
      var d = cc11001100_hook("d", 0, "var-init");
      for (var e = cc11001100_hook("e", b.length, "var-init"); 0 <= (d = cc11001100_hook("d", a.indexOf(b, d), "assign")) && d < c;) {
        var f = cc11001100_hook("f", a.charCodeAt(d - 1), "var-init");
        if (38 == f || 63 == f) if (f = cc11001100_hook("f", a.charCodeAt(d + e), "assign"), !f || 61 == f || 38 == f || 35 == f) break a;
        d += cc11001100_hook("d", e + 1, "assign");
      }
      d = cc11001100_hook("d", -1, "assign");
    }
    if (0 > d) return null;
    e = cc11001100_hook("e", a.indexOf("&", d), "assign");
    if (0 > e || e > c) e = cc11001100_hook("e", c, "assign");
    d += cc11001100_hook("d", b.length + 1, "assign");
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
  }
  ; /* 
    SPDX-License-Identifier: Apache-2.0 
    */
  function Kc(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b;
      if (b = cc11001100_hook("b", !!a && null != a.location.href, "assign")) a: {
        try {
          Ta(a.foo);
          b = cc11001100_hook("b", !0, "assign");
          break a;
        } catch (c) {}
        b = cc11001100_hook("b", !1, "assign");
      }
      return b;
    } catch {
      return !1;
    }
  }
  function Lc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Kc(a.top) ? a.top : null;
  }
  function Mc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Nc("SCRIPT", a), "var-init");
    c.src = cc11001100_hook("c.src", zc(b), "assign");
    (b = cc11001100_hook("b", (b = cc11001100_hook("b", (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]"), "assign")) ? b.nonce || b.getAttribute("nonce") || "" : "", "assign")) && c.setAttribute("nonce", b);
    return (a = cc11001100_hook("a", a.getElementsByTagName("script")[0], "assign")) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null;
  }
  function Oc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Pc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!Qc() && !Rc()) {
      let c = cc11001100_hook("c", Math.random(), "var-init");
      if (c < b) return c = cc11001100_hook("c", Sc(), "assign"), a[Math.floor(c * a.length)];
    }
    return null;
  }
  function Sc() {
    if (!globalThis.crypto) return Math.random();
    try {
      const a = cc11001100_hook("a", new Uint32Array(1), "var-init");
      globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch {
      return Math.random();
    }
  }
  function J(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function Tc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.length, "var-init");
    if (0 == b) return 0;
    let c = cc11001100_hook("c", 305419896, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c ^= cc11001100_hook("c", (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295, "assign");
    return 0 < c ? c : 4294967296 + c;
  }
  var Rc = cc11001100_hook("Rc", jc(() => Oa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Uc) || 1E-4 > Math.random()), "var-init"),
    Qc = cc11001100_hook("Qc", jc(() => -1 != wa().indexOf("MSIE")), "var-init");
  const Uc = cc11001100_hook("Uc", a => -1 != wa().indexOf(a), "var-init");
  var Vc = cc11001100_hook("Vc", /^([0-9.]+)px$/, "var-init"),
    Wc = cc11001100_hook("Wc", /^(-?[0-9.]{1,30})$/, "var-init");
  function Xc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Wc.test(a)) return null;
    a = cc11001100_hook("a", Number(a), "assign");
    return isNaN(a) ? null : a;
  }
  function K(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Vc.exec(a), "assign")) ? +a[1] : null;
  }
  var Yc = cc11001100_hook("Yc", (a, b) => {
      for (let e = cc11001100_hook("e", 0, "var-init"); 50 > e; ++e) {
        try {
          var c = cc11001100_hook("c", !(!a.frames || !a.frames[b]), "var-init");
        } catch {
          c = cc11001100_hook("c", !1, "assign");
        }
        if (c) return a;
        a: {
          try {
            const f = cc11001100_hook("f", a.parent, "var-init");
            if (f && f != a) {
              var d = cc11001100_hook("d", f, "var-init");
              break a;
            }
          } catch {}
          d = cc11001100_hook("d", null, "assign");
        }
        if (!(a = cc11001100_hook("a", d, "assign"))) break;
      }
      return null;
    }, "var-init"),
    Zc = cc11001100_hook("Zc", jc(() => Fc() ? 2 : Gc() ? 1 : 0), "var-init"),
    $c = cc11001100_hook("$c", (a, b) => {
      J(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    }, "var-init");
  let ad = cc11001100_hook("ad", [], "var-init");
  const bd = cc11001100_hook("bd", () => {
    const a = cc11001100_hook("a", ad, "var-init");
    ad = cc11001100_hook("ad", [], "assign");
    for (const b of a) try {
      b();
    } catch {}
  }, "var-init");
  var cd = cc11001100_hook("cd", a => {
      if ("number" !== typeof a.goog_pvsid) try {
        Object.defineProperty(a, "goog_pvsid", {
          value: cc11001100_hook("value", Math.floor(Math.random() * 2 ** 52), "object-key-init"),
          configurable: cc11001100_hook("configurable", !1, "object-key-init")
        });
      } catch (b) {}
      return Number(a.goog_pvsid) || -1;
    }, "var-init"),
    ed = cc11001100_hook("ed", a => {
      var b = cc11001100_hook("b", dd, "var-init");
      "complete" === b.readyState || "interactive" === b.readyState ? (ad.push(a), 1 == ad.length && (window.Promise ? Promise.resolve().then(bd) : window.setImmediate ? setImmediate(bd) : setTimeout(bd, 0))) : b.addEventListener("DOMContentLoaded", a);
    }, "var-init");
  function Nc(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return b.createElement(String(a).toLowerCase());
  }
  ;
  function fd(a, b, c = null, d = !1, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    hd(a, b, c, d, e);
  }
  function hd(a, b, c, d, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
    const f = cc11001100_hook("f", Nc("IMG", a.document), "var-init");
    if (c || d) {
      const g = cc11001100_hook("g", h => {
        c && c(h);
        if (d) {
          h = cc11001100_hook("h", a.google_image_requests, "assign");
          const l = cc11001100_hook("l", Ka(h, f), "var-init");
          0 <= l && Array.prototype.splice.call(h, l, 1);
        }
        mc(f, "load", g);
        mc(f, "error", g);
      }, "var-init");
      lc(f, "load", g);
      lc(f, "error", g);
    }
    e && (f.attributionSrc = cc11001100_hook("f.attributionSrc", "", "assign"));
    f.src = cc11001100_hook("f.src", b, "assign");
    a.google_image_requests.push(f);
  }
  var jd = cc11001100_hook("jd", a => {
      let b = cc11001100_hook("b", "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe", "var-init");
      J(a, (c, d) => {
        if (c || 0 === c) b += cc11001100_hook("b", `&${d}=${encodeURIComponent("" + c)}`, "assign");
      });
      id(b);
    }, "var-init"),
    id = cc11001100_hook("id", a => {
      var b = cc11001100_hook("b", window, "var-init");
      b.fetch ? b.fetch(a, {
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        credentials: cc11001100_hook("credentials", "include", "object-key-init"),
        redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      }) : fd(b, a, void 0, !1, !1);
    }, "var-init");
  let kd = cc11001100_hook("kd", null, "var-init");
  var dd = cc11001100_hook("dd", document, "var-init"),
    L = cc11001100_hook("L", window, "var-init");
  let ld = cc11001100_hook("ld", null, "var-init");
  var md = cc11001100_hook("md", (a, b = []) => {
    let c = cc11001100_hook("c", !1, "var-init");
    n.google_logging_queue || (c = cc11001100_hook("c", !0, "assign"), n.google_logging_queue = cc11001100_hook("n.google_logging_queue", [], "assign"));
    n.google_logging_queue.push([a, b]);
    if (a = cc11001100_hook("a", c, "assign")) {
      if (null == ld) {
        ld = cc11001100_hook("ld", !1, "assign");
        try {
          var d = cc11001100_hook("d", Lc(n), "var-init");
          d && -1 !== d.location.hash.indexOf("google_logging") && (ld = cc11001100_hook("ld", !0, "assign"));
          n.localStorage.getItem("google_logging") && (ld = cc11001100_hook("ld", !0, "assign"));
        } catch (e) {}
      }
      a = cc11001100_hook("a", ld, "assign");
    }
    a && (d = cc11001100_hook("d", n.document, "assign"), a = cc11001100_hook("a", new fc(gc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), "assign"), a = cc11001100_hook("a", Ac(a instanceof fc && a.constructor === fc && a.h === hc ? a.i : "type_error:Const"), "assign"), Mc(d, a));
  }, "var-init");
  function nd(a = n) {
    let b = cc11001100_hook("b", a.context || a.AMP_CONTEXT_DATA, "var-init");
    if (!b) try {
      b = cc11001100_hook("b", a.parent.context || a.parent.AMP_CONTEXT_DATA, "assign");
    } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function od(a = nd()) {
    return a ? Kc(a.master) ? a.master : null : null;
  }
  ;
  function pd(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 === b.length) return Ac(a[0]);
    const c = cc11001100_hook("c", [a[0]], "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return Ac(c.join(""));
  }
  ;
  function qd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a[0], "assign");
    const b = cc11001100_hook("b", sc(), "var-init");
    a = cc11001100_hook("a", b ? b.createScript(a) : a, "assign");
    return new uc(a, tc);
  }
  ;
  var rd = cc11001100_hook("rd", a => {
      a = cc11001100_hook("a", od(nd(a)) || a, "assign");
      a.google_unique_id = cc11001100_hook("a.google_unique_id", (a.google_unique_id || 0) + 1, "assign");
      return a.google_unique_id;
    }, "var-init"),
    sd = cc11001100_hook("sd", a => {
      a = cc11001100_hook("a", a.google_unique_id, "assign");
      return "number" === typeof a ? a : 0;
    }, "var-init"),
    td = cc11001100_hook("td", () => {
      if (!L) return !1;
      try {
        return !(!L.navigator.standalone && !L.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    }, "var-init"),
    ud = cc11001100_hook("ud", a => {
      if (!a) return "";
      a = cc11001100_hook("a", a.toLowerCase(), "assign");
      "ca-" != a.substring(0, 3) && (a = cc11001100_hook("a", "ca-" + a, "assign"));
      return a;
    }, "var-init");
  class vd {
    constructor(a, b) {
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", {}, "assign");
    }
  }
  var wd = cc11001100_hook("wd", a => !!(a.error && a.meta && a.id), "var-init");
  const xd = cc11001100_hook("xd", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  var yd = cc11001100_hook("yd", class {
      constructor(a, b) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.i = cc11001100_hook("this.i", b, "assign");
      }
    }, "var-init"),
    zd = cc11001100_hook("zd", class {
      constructor(a, b, c) {
        this.url = cc11001100_hook("this.url", a, "assign");
        this.s = cc11001100_hook("this.s", b, "assign");
        this.Na = cc11001100_hook("this.Na", !!c, "assign");
        this.depth = cc11001100_hook("this.depth", null, "assign");
      }
    }, "var-init");
  function Ad(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function Bd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init");
    J(a, function (g, h) {
      (g = cc11001100_hook("g", Cd(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function Cd(a, b, c, d, e) {
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
        for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(Cd(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(Bd(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function Dd(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 1, "var-init");
    for (const c in a.i) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.j.length - 1;
  }
  function Ed(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
      d = cc11001100_hook("d", Dd(a) - b.length, "var-init");
    if (0 > d) return "";
    a.h.sort(function (f, g) {
      return f - g;
    });
    b = cc11001100_hook("b", null, "assign");
    let e = cc11001100_hook("e", "", "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.h.length; f++) {
      const g = cc11001100_hook("g", a.h[f], "var-init"),
        h = cc11001100_hook("h", a.i[g], "var-init");
      for (let l = cc11001100_hook("l", 0, "var-init"); l < h.length; l++) {
        if (!d) {
          b = cc11001100_hook("b", null == b ? g : b, "assign");
          break;
        }
        let k = cc11001100_hook("k", Bd(h[l], a.j, ",$"), "var-init");
        if (k) {
          k = cc11001100_hook("k", e + k, "assign");
          if (d >= k.length) {
            d -= cc11001100_hook("d", k.length, "assign");
            c += cc11001100_hook("c", k, "assign");
            e = cc11001100_hook("e", a.j, "assign");
            break;
          }
          b = cc11001100_hook("b", null == b ? g : b, "assign");
        }
      }
    }
    a = cc11001100_hook("a", "", "assign");
    null != b && (a = cc11001100_hook("a", e + "trn=" + b, "assign"));
    return c + a;
  }
  class Fd {
    constructor() {
      this.j = cc11001100_hook("this.j", "&", "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
    }
  }
  ;
  function Gd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= b && 1 >= b && (a.h = cc11001100_hook("a.h", b, "assign"));
  }
  function Hd(a, b, c, d = !1, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if ((d ? a.h : Math.random()) < (e || .01)) try {
      let f;
      c instanceof Fd ? f = cc11001100_hook("f", c, "assign") : (f = cc11001100_hook("f", new Fd(), "assign"), J(c, (h, l) => {
        var k = cc11001100_hook("k", f, "var-init");
        const m = cc11001100_hook("m", k.l++, "var-init");
        h = cc11001100_hook("h", Ad(l, h), "assign");
        k.h.push(m);
        k.i[m] = cc11001100_hook("k.i[m]", h, "assign");
      }));
      const g = cc11001100_hook("g", Ed(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && fd(n, g);
    } catch (f) {}
  }
  class Id {
    constructor() {
      this.h = cc11001100_hook("this.h", Math.random(), "assign");
    }
  }
  ;
  let Jd = cc11001100_hook("Jd", null, "var-init");
  function Kd() {
    if (null === Jd) {
      Jd = cc11001100_hook("Jd", "", "assign");
      try {
        let a = cc11001100_hook("a", "", "var-init");
        try {
          a = cc11001100_hook("a", n.top.location.hash, "assign");
        } catch (b) {
          a = cc11001100_hook("a", n.location.hash, "assign");
        }
        if (a) {
          const b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "var-init");
          Jd = cc11001100_hook("Jd", b ? b[1] : "", "assign");
        }
      } catch (a) {}
    }
    return Jd;
  }
  ;
  function Ld() {
    const a = cc11001100_hook("a", n.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function Md() {
    const a = cc11001100_hook("a", n.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class Nd {
    constructor(a, b) {
      var c = cc11001100_hook("c", Md() || Ld(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const Od = cc11001100_hook("Od", n.performance, "var-init"),
    Pd = cc11001100_hook("Pd", !!(Od && Od.mark && Od.measure && Od.clearMarks), "var-init"),
    Qd = cc11001100_hook("Qd", jc(() => {
      var a;
      if (a = cc11001100_hook("a", Pd, "assign")) a = cc11001100_hook("a", Kd(), "assign"), a = cc11001100_hook("a", !!a.indexOf && 0 <= a.indexOf("1337"), "assign");
      return a;
    }), "var-init");
  function Rd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && Od && Qd() && (Od.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Od.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function Sd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.h = cc11001100_hook("a.h", !1, "assign");
    a.i != a.j.google_js_reporting_queue && (Qd() && La(a.i, Rd), a.i.length = cc11001100_hook("a.i.length", 0, "assign"));
  }
  class Td {
    constructor(a) {
      this.i = cc11001100_hook("this.i", [], "assign");
      this.j = cc11001100_hook("this.j", a || n, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.i = cc11001100_hook("this.i", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.h = cc11001100_hook("this.h", Qd() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.h) return null;
      a = cc11001100_hook("a", new Nd(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      Od && Qd() && Od.mark(b);
      return a;
    }
    end(a) {
      if (this.h && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Md() || Ld()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        Od && Qd() && Od.mark(b);
        !this.h || 2048 < this.i.length || this.i.push(a);
      }
    }
  }
  ;
  function Ud(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", a.toString(), "var-init");
    a.name && -1 == b.indexOf(a.name) && (b += cc11001100_hook("b", ": " + a.name, "assign"));
    a.message && -1 == b.indexOf(a.message) && (b += cc11001100_hook("b", ": " + a.message, "assign"));
    if (a.stack) {
      a = cc11001100_hook("a", a.stack, "assign");
      var c = cc11001100_hook("c", b, "var-init");
      try {
        -1 == a.indexOf(c) && (a = cc11001100_hook("a", c + "\n" + a, "assign"));
        let d;
        for (; a != d;) d = cc11001100_hook("d", a, "assign"), a = cc11001100_hook("a", a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1"), "assign");
        b = cc11001100_hook("b", a.replace(RegExp("\n *", "g"), "\n"), "assign");
      } catch (d) {
        b = cc11001100_hook("b", c, "assign");
      }
    }
    return b;
  }
  class Vd {
    constructor(a, b = null) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.h = cc11001100_hook("this.h", null, "assign");
      this.m = cc11001100_hook("this.m", this.I, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
      this.j = cc11001100_hook("this.j", !1, "assign");
    }
    Ra(a) {
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    wa(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
    }
    l(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    fa(a, b, c) {
      let d, e;
      try {
        this.i && this.i.h ? (e = cc11001100_hook("e", this.i.start(a.toString(), 3), "assign"), d = cc11001100_hook("d", b(), "assign"), this.i.end(e)) : d = cc11001100_hook("d", b(), "assign");
      } catch (f) {
        b = cc11001100_hook("b", !0, "assign");
        try {
          Rd(e), b = cc11001100_hook("b", this.m(a, new vd(f, {
            message: cc11001100_hook("message", Ud(f), "object-key-init")
          }), void 0, c), "assign");
        } catch (g) {
          this.I(217, g);
        }
        if (b) window.console?.error?.(f);else throw f;
      }
      return d;
    }
    na(a, b) {
      return (...c) => this.fa(a, () => b.apply(void 0, c));
    }
    I(a, b, c, d, e) {
      e = cc11001100_hook("e", e || "jserror", "assign");
      let f;
      try {
        const Ia = cc11001100_hook("Ia", new Fd(), "var-init");
        var g = cc11001100_hook("g", Ia, "var-init");
        g.h.push(1);
        g.i[1] = cc11001100_hook("g.i[1]", Ad("context", a), "assign");
        wd(b) || (b = cc11001100_hook("b", new vd(b, {
          message: cc11001100_hook("message", Ud(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          g = cc11001100_hook("g", Ia, "assign");
          var h = cc11001100_hook("h", b.msg.substring(0, 512), "var-init");
          g.h.push(2);
          g.i[2] = cc11001100_hook("g.i[2]", Ad("msg", h), "assign");
        }
        var l = cc11001100_hook("l", b.meta || {}, "var-init");
        b = cc11001100_hook("b", l, "assign");
        if (this.h) try {
          this.h(b);
        } catch (Sa) {}
        if (d) try {
          d(b);
        } catch (Sa) {}
        d = cc11001100_hook("d", Ia, "assign");
        l = cc11001100_hook("l", [l], "assign");
        d.h.push(3);
        d.i[3] = cc11001100_hook("d.i[3]", l, "assign");
        d = cc11001100_hook("d", n, "assign");
        l = cc11001100_hook("l", [], "assign");
        b = cc11001100_hook("b", null, "assign");
        do {
          var k = cc11001100_hook("k", d, "var-init");
          if (Kc(k)) {
            var m = cc11001100_hook("m", k.location.href, "var-init");
            b = cc11001100_hook("b", k.document && k.document.referrer || null, "assign");
          } else m = cc11001100_hook("m", b, "assign"), b = cc11001100_hook("b", null, "assign");
          l.push(new zd(m || "", k));
          try {
            d = cc11001100_hook("d", k.parent, "assign");
          } catch (Sa) {
            d = cc11001100_hook("d", null, "assign");
          }
        } while (d && k != d);
        for (let Sa = cc11001100_hook("Sa", 0, "var-init"), nf = cc11001100_hook("nf", l.length - 1, "var-init"); Sa <= nf; ++Sa) l[Sa].depth = cc11001100_hook("l[Sa].depth", nf - Sa, "assign");
        k = cc11001100_hook("k", n, "assign");
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1) for (m = cc11001100_hook("m", 1, "assign"); m < l.length; ++m) {
          var u = cc11001100_hook("u", l[m], "var-init");
          u.url || (u.url = cc11001100_hook("u.url", k.location.ancestorOrigins[m - 1] || "", "assign"), u.Na = cc11001100_hook("u.Na", !0, "assign"));
        }
        var v = cc11001100_hook("v", l, "var-init");
        let dc = cc11001100_hook("dc", new zd(n.location.href, n, !1), "var-init");
        k = cc11001100_hook("k", null, "assign");
        const gd = cc11001100_hook("gd", v.length - 1, "var-init");
        for (u = cc11001100_hook("u", gd, "assign"); 0 <= u; --u) {
          var w = cc11001100_hook("w", v[u], "var-init");
          !k && xd.test(w.url) && (k = cc11001100_hook("k", w, "assign"));
          if (w.url && !w.Na) {
            dc = cc11001100_hook("dc", w, "assign");
            break;
          }
        }
        w = cc11001100_hook("w", null, "assign");
        const Yi = cc11001100_hook("Yi", v.length && v[gd].url, "var-init");
        0 != dc.depth && Yi && (w = cc11001100_hook("w", v[gd], "assign"));
        f = cc11001100_hook("f", new yd(dc, w), "assign");
        if (f.i) {
          v = cc11001100_hook("v", Ia, "assign");
          var y = cc11001100_hook("y", f.i.url || "", "var-init");
          v.h.push(4);
          v.i[4] = cc11001100_hook("v.i[4]", Ad("top", y), "assign");
        }
        var F = cc11001100_hook("F", {
          url: cc11001100_hook("url", f.h.url || "", "object-key-init")
        }, "var-init");
        if (f.h.url) {
          var za = cc11001100_hook("za", f.h.url.match(Hc), "var-init"),
            S = cc11001100_hook("S", za[1], "var-init"),
            Aa = cc11001100_hook("Aa", za[3], "var-init"),
            qa = cc11001100_hook("qa", za[4], "var-init");
          y = cc11001100_hook("y", "", "assign");
          S && (y += cc11001100_hook("y", S + ":", "assign"));
          Aa && (y += cc11001100_hook("y", "//", "assign"), y += cc11001100_hook("y", Aa, "assign"), qa && (y += cc11001100_hook("y", ":" + qa, "assign")));
          var of = cc11001100_hook("of", y, "var-init");
        } else of = cc11001100_hook("of", "", "assign");
        S = cc11001100_hook("S", Ia, "assign");
        F = cc11001100_hook("F", [F, {
          url: cc11001100_hook("url", of, "object-key-init")
        }], "assign");
        S.h.push(5);
        S.i[5] = cc11001100_hook("S.i[5]", F, "assign");
        Hd(this.A, e, Ia, this.j, c);
      } catch (Ia) {
        try {
          Hd(this.A, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", Ud(Ia), "object-key-init"),
            url: cc11001100_hook("url", f && f.h.url, "object-key-init")
          }, this.j, c);
        } catch (dc) {}
      }
      return !0;
    }
    aa(a, b) {
      b.catch(c => {
        c = cc11001100_hook("c", c ? c : "unknown rejection", "assign");
        this.I(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0);
      });
    }
  }
  ;
  var Wd = cc11001100_hook("Wd", a => "string" === typeof a, "var-init"),
    Xd = cc11001100_hook("Xd", a => void 0 === a, "var-init");
  var Zd = cc11001100_hook("Zd", class extends I {
      constructor(a) {
        super(a, -1, Yd);
      }
    }, "var-init"),
    Yd = cc11001100_hook("Yd", [2, 8], "var-init"),
    $d = cc11001100_hook("$d", [3, 4, 5], "var-init"),
    ae = cc11001100_hook("ae", [6, 7], "var-init");
  function be(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a ? !a : a;
  }
  function ce(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", !1, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; d++) {
      const e = cc11001100_hook("e", a[d](), "var-init");
      if (e === b) return e;
      null == e && (c = cc11001100_hook("c", !0, "assign"));
    }
    if (!c) return !b;
  }
  function de(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", E(a, Zd, 2), "var-init");
    if (!c.length) return ee(a, b);
    a = cc11001100_hook("a", H(a, 1), "assign");
    if (1 === a) return be(de(c[0], b));
    c = cc11001100_hook("c", Na(c, d => () => de(d, b)), "assign");
    switch (a) {
      case 2:
        return ce(c, !1);
      case 3:
        return ce(c, !0);
    }
  }
  function ee(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", zb(a, $d), "var-init");
    a: {
      switch (c) {
        case 3:
          var d = cc11001100_hook("d", H(a, Ab(a, $d, 3)), "var-init");
          break a;
        case 4:
          d = cc11001100_hook("d", H(a, Ab(a, $d, 4)), "assign");
          break a;
        case 5:
          d = cc11001100_hook("d", H(a, Ab(a, $d, 5)), "assign");
          break a;
      }
      d = cc11001100_hook("d", void 0, "assign");
    }
    if (d && (b = cc11001100_hook("b", (b = cc11001100_hook("b", b[c], "assign")) && b[d], "assign"))) {
      try {
        var e = cc11001100_hook("e", b(...wb(a, 8, rb)), "var-init");
      } catch (f) {
        return;
      }
      b = cc11001100_hook("b", H(a, 1), "assign");
      if (4 === b) return !!e;
      if (5 === b) return null != e;
      if (12 === b) a = cc11001100_hook("a", G(a, Ab(a, ae, 7)), "assign");else a: {
        switch (c) {
          case 4:
            a = cc11001100_hook("a", Jb(a, Ab(a, ae, 6)), "assign");
            break a;
          case 5:
            a = cc11001100_hook("a", G(a, Ab(a, ae, 7)), "assign");
            break a;
        }
        a = cc11001100_hook("a", void 0, "assign");
      }
      if (null != a) {
        if (6 === b) return e === a;
        if (9 === b) return null != e && 0 === ra(String(e), a);
        if (null != e) switch (b) {
          case 7:
            return e < a;
          case 8:
            return e > a;
          case 12:
            return Wd(a) && Wd(e) && new RegExp(a).test(e);
          case 10:
            return null != e && -1 === ra(String(e), a);
          case 11:
            return null != e && 1 === ra(String(e), a);
        }
      }
    }
  }
  function fe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return !a || !(!b || !de(a, b));
  }
  ;
  var he = cc11001100_hook("he", class extends I {
      constructor(a) {
        super(a, -1, ge);
      }
    }, "var-init"),
    ge = cc11001100_hook("ge", [4], "var-init");
  var ie = cc11001100_hook("ie", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var ke = cc11001100_hook("ke", class extends I {
      constructor(a) {
        super(a, -1, je);
      }
    }, "var-init"),
    le = cc11001100_hook("le", ac(ke), "var-init"),
    je = cc11001100_hook("je", [5], "var-init"),
    me = cc11001100_hook("me", [1, 2, 3, 6, 7], "var-init");
  var oe = cc11001100_hook("oe", class extends I {
      constructor() {
        super(void 0, -1, ne);
      }
    }, "var-init"),
    ne = cc11001100_hook("ne", [2], "var-init");
  function pe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  var qe = cc11001100_hook("qe", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  function re(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return C(a, 1, b, 0);
  }
  function se(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return C(a, 2, b, 0);
  }
  var te = cc11001100_hook("te", class extends I {
    constructor() {
      super();
    }
    getWidth() {
      return B(t(this, 1), 0);
    }
    getHeight() {
      return B(t(this, 2), 0);
    }
  }, "var-init");
  function ue(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eb(a, 1, b);
  }
  function ve(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eb(a, 2, b);
  }
  function we(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Eb(a, 3, b);
  }
  function xe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return C(a, 5, null == b ? b : !!b, !1);
  }
  var ye = cc11001100_hook("ye", class extends I {
    constructor() {
      super();
    }
    getContentUrl() {
      return G(this, 4);
    }
  }, "var-init");
  var ze = cc11001100_hook("ze", class extends I {
    constructor() {
      super();
    }
    getContentUrl() {
      return G(this, 1);
    }
  }, "var-init");
  function Ae(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Fb(a, 4, Be, b);
  }
  var Ce = cc11001100_hook("Ce", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    Be = cc11001100_hook("Be", [4, 5, 6, 8, 9, 10], "var-init");
  function De(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return C(a, 1, b, 0);
  }
  function Ee(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return C(a, 2, b, 0);
  }
  var Fe = cc11001100_hook("Fe", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var Ge = cc11001100_hook("Ge", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    He = cc11001100_hook("He", [1, 2], "var-init");
  function Ie(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eb(a, 1, b);
  }
  function Je(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gb(a, 2, b);
  }
  function Ke(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return xb(a, 4, b);
  }
  function Le(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gb(a, 5, b);
  }
  function Me(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return C(a, 6, b, 0);
  }
  var Oe = cc11001100_hook("Oe", class extends I {
      constructor() {
        super(void 0, -1, Ne);
      }
    }, "var-init"),
    Ne = cc11001100_hook("Ne", [2, 4, 5], "var-init");
  var Qe = cc11001100_hook("Qe", class extends I {
      constructor() {
        super(void 0, -1, Pe);
      }
    }, "var-init"),
    Pe = cc11001100_hook("Pe", [5], "var-init"),
    Re = cc11001100_hook("Re", [1, 2, 3, 4], "var-init");
  var Te = cc11001100_hook("Te", class extends I {
      constructor() {
        super(void 0, -1, Se);
      }
    }, "var-init"),
    Se = cc11001100_hook("Se", [2, 3], "var-init");
  function Ue(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Fb(a, 4, Ve, b);
  }
  var We = cc11001100_hook("We", class extends I {
      constructor() {
        super();
      }
      getTagSessionCorrelator() {
        return B(t(this, 2), 0);
      }
    }, "var-init"),
    Ve = cc11001100_hook("Ve", [4, 5, 7], "var-init");
  function Xe(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    Ye(a, ...b.map(c => ({
      Ua: cc11001100_hook("Ua", 4, "object-key-init"),
      message: cc11001100_hook("message", c, "object-key-init")
    })));
  }
  function Ze(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    Ye(a, ...b.map(c => ({
      Ua: cc11001100_hook("Ua", 7, "object-key-init"),
      message: cc11001100_hook("message", c, "object-key-init")
    })));
  }
  ;
  function $e(a) {
    cc11001100_hook("a", a, "function-parameter");
    return JSON.stringify([a.map(b => [{
      [b.Ua]: cc11001100_hook(b.Ua, b.message.toJSON(), "object-key-init")
    }])]);
  }
  ;
  var af = cc11001100_hook("af", (a, b) => {
    globalThis.fetch(a, {
      method: cc11001100_hook("method", "POST", "object-key-init"),
      body: cc11001100_hook("body", b, "object-key-init"),
      keepalive: cc11001100_hook("keepalive", 65536 > b.length, "object-key-init"),
      credentials: cc11001100_hook("credentials", "omit", "object-key-init"),
      mode: cc11001100_hook("mode", "no-cors", "object-key-init"),
      redirect: cc11001100_hook("redirect", "follow", "object-key-init")
    }).catch(() => {});
  }, "var-init");
  function bf() {
    this.A = cc11001100_hook("this.A", this.A, "assign");
    this.j = cc11001100_hook("this.j", this.j, "assign");
  }
  bf.prototype.A = cc11001100_hook("bf.prototype.A", !1, "assign");
  function cf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A || (a.A = cc11001100_hook("a.A", !0, "assign"), a.h());
  }
  function df(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.A ? b() : (a.j || (a.j = cc11001100_hook("a.j", [], "assign")), a.j.push(b));
  }
  bf.prototype.h = cc11001100_hook("bf.prototype.h", function () {
    if (this.j) for (; this.j.length;) this.j.shift()();
  }, "assign");
  function ef(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    lc(b, c, d);
    df(a, () => mc(b, c, d));
  }
  function ff(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    1 !== a.state && (a.state = cc11001100_hook("a.state", 1, "assign"), a.callback && a.callback(b));
  }
  function gf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.s.document.visibilityState ? ef(a, a.s.document, "visibilitychange", b => {
      "hidden" === a.s.document.visibilityState && ff(a, b);
      "visible" === a.s.document.visibilityState && (a.state = cc11001100_hook("a.state", 0, "assign"));
    }) : "onpagehide" in a.s ? (ef(a, a.s, "pagehide", b => {
      ff(a, b);
    }), ef(a, a.s, "pageshow", () => {
      a.state = cc11001100_hook("a.state", 0, "assign");
    })) : ef(a, a.s, "beforeunload", b => {
      ff(a, b);
    });
  }
  function hf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.callback || gf(a);
    a.callback = cc11001100_hook("a.callback", b, "assign");
  }
  var jf = cc11001100_hook("jf", class extends bf {
    constructor(a) {
      super();
      this.s = cc11001100_hook("this.s", a, "assign");
      this.state = cc11001100_hook("this.state", 0, "assign");
      this.callback = cc11001100_hook("this.callback", null, "assign");
    }
  }, "var-init");
  function Ye(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    a.A && 65536 <= $e(a.h.concat(b)).length && kf(a);
    a.h.push(...b);
    a.h.length >= a.m && kf(a);
    a.h.length && null === a.i && (a.i = cc11001100_hook("a.i", setTimeout(() => {
      kf(a);
    }, a.B), "assign"));
  }
  function lf(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j || (a.j = cc11001100_hook("a.j", new jf(b), "assign"), hf(a.j, () => {
      for (const e of a.l) e();
      c();
    }));
    d && 1 !== a.j.state && a.l.push(d);
  }
  function kf(a) {
    cc11001100_hook("a", a, "function-parameter");
    null !== a.i && (clearTimeout(a.i), a.i = cc11001100_hook("a.i", null, "assign"));
    if (a.h.length) {
      var b = cc11001100_hook("b", $e(a.h), "var-init");
      a.v("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.h = cc11001100_hook("a.h", [], "assign");
    }
  }
  function mf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    lf(a, b, () => {
      kf(a);
    }, c);
  }
  var pf = cc11001100_hook("pf", class {
      constructor(a, b, c) {
        this.v = cc11001100_hook("this.v", af, "assign");
        this.B = cc11001100_hook("this.B", a, "assign");
        this.m = cc11001100_hook("this.m", b, "assign");
        this.A = cc11001100_hook("this.A", c, "assign");
        this.l = cc11001100_hook("this.l", [], "assign");
        this.h = cc11001100_hook("this.h", [], "assign");
        this.i = cc11001100_hook("this.i", null, "assign");
      }
    }, "var-init"),
    qf = cc11001100_hook("qf", class extends pf {
      constructor(a = 1E3, b = 100, c = !1) {
        super(a, b, c && !0);
      }
    }, "var-init");
  function rf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", C(b, 1, Date.now(), 0), "assign");
    var c = cc11001100_hook("c", cd(window), "var-init");
    b = cc11001100_hook("b", C(b, 2, c, 0), "assign");
    return C(b, 6, a.m, 0);
  }
  function sf(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (a.j) {
      var g = cc11001100_hook("g", Ee(De(new Fe(), b), c), "var-init");
      b = cc11001100_hook("b", Me(Je(Ie(Le(Ke(new Oe(), d), e), g), a.h.slice()), f), "assign");
      b = cc11001100_hook("b", Ue(new We(), b), "assign");
      Xe(a.i, rf(a, b));
      if (1 === f || 3 === f || 4 === f && !a.h.some(h => H(h, 1) === H(g, 1) && H(h, 2) === c)) a.h.push(g), 100 < a.h.length && a.h.shift();
    }
  }
  function tf(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (a.j && a.l) {
      var e = cc11001100_hook("e", new Te(), "var-init");
      b = cc11001100_hook("b", Gb(e, 2, b), "assign");
      c = cc11001100_hook("c", Gb(b, 3, c), "assign");
      d && C(c, 1, d, 0);
      d = cc11001100_hook("d", new We(), "assign");
      d = cc11001100_hook("d", Fb(d, 7, Ve, c), "assign");
      Xe(a.i, rf(a, d));
    }
  }
  var uf = cc11001100_hook("uf", class {
    constructor(a, b, c, d = new qf(b)) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
      this.i = cc11001100_hook("this.i", d, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
      this.j = cc11001100_hook("this.j", 0 < a && Sc() < 1 / a, "assign");
    }
  }, "var-init");
  var M = cc11001100_hook("M", a => {
    var b = cc11001100_hook("b", "ta", "var-init");
    if (a.ta && a.hasOwnProperty(b)) return a.ta;
    b = cc11001100_hook("b", new a(), "assign");
    return a.ta = cc11001100_hook("a.ta", b, "assign");
  }, "var-init");
  var vf = cc11001100_hook("vf", class {
    constructor() {
      this.G = cc11001100_hook("this.G", {
        [3]: {},
        [4]: {},
        [5]: {}
      }, "assign");
    }
  }, "var-init");
  var wf = cc11001100_hook("wf", /^true$/.test("false"), "var-init");
  function xf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    switch (b) {
      case 1:
        return H(a, Ab(a, me, 1));
      case 2:
        return H(a, Ab(a, me, 2));
      case 3:
        return H(a, Ab(a, me, 3));
      case 6:
        return H(a, Ab(a, me, 6));
      default:
        return null;
    }
  }
  function yf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return null;
    switch (b) {
      case 1:
        return A(a, 1);
      case 7:
        return G(a, 3);
      case 2:
        return Jb(a, 2);
      case 3:
        return G(a, 3);
      case 6:
        return wb(a, 4, rb);
      default:
        return null;
    }
  }
  const zf = cc11001100_hook("zf", jc(() => {
    if (!wf) return {};
    try {
      const a = cc11001100_hook("a", window.sessionStorage && window.sessionStorage.getItem("GGDFSSK"), "var-init");
      if (a) return JSON.parse(a);
    } catch {}
    return {};
  }), "var-init");
  function Af(a, b, c, d = 0) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    M(Bf).j[d] = cc11001100_hook("M(Bf).j[d]", M(Bf).j[d]?.add(b) ?? new Set().add(b), "assign");
    const e = cc11001100_hook("e", zf(), "var-init");
    if (null != e[b]) return e[b];
    b = cc11001100_hook("b", Cf(d)[b], "assign");
    if (!b) return c;
    b = cc11001100_hook("b", le(JSON.stringify(b)), "assign");
    b = cc11001100_hook("b", Df(b), "assign");
    a = cc11001100_hook("a", yf(b, a), "assign");
    return null != a ? a : c;
  }
  function Df(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", M(vf).G, "var-init");
    if (b) {
      const c = cc11001100_hook("c", Qa(E(a, ie, 5), d => fe(D(d, Zd, 1), b)), "var-init");
      if (c) return D(c, he, 2) ?? null;
    }
    return D(a, he, 4) ?? null;
  }
  class Bf {
    constructor() {
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.h = cc11001100_hook("this.h", new Map(), "assign");
    }
  }
  function Ef(a, b = !1, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return !!Af(1, a, b, c);
  }
  function Ff(a, b = 0, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Number(Af(2, a, b, c)), "assign");
    return isNaN(a) ? b : a;
  }
  function Gf(a, b = "", c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Af(3, a, b, c), "assign");
    return "string" === typeof a ? a : b;
  }
  function Hf(a, b = [], c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Af(6, a, b, c), "assign");
    return Array.isArray(a) ? a : b;
  }
  function Cf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return M(Bf).i[a] || (M(Bf).i[a] = cc11001100_hook("M(Bf).i[a]", {}, "assign"));
  }
  function If(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Cf(b), "var-init");
    J(a, (d, e) => c[e] = cc11001100_hook("c[e]", d, "assign"));
  }
  function Jf(a, b, c, d, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init"),
      g = cc11001100_hook("g", [], "var-init");
    La(b, h => {
      const l = cc11001100_hook("l", Cf(h), "var-init");
      La(a, k => {
        var m = cc11001100_hook("m", zb(k, me), "var-init");
        const u = cc11001100_hook("u", xf(k, m), "var-init");
        if (u) {
          var v = cc11001100_hook("v", M(Bf).h.get(h)?.get(u)?.slice(0) ?? [], "var-init");
          a: {
            const w = cc11001100_hook("w", new Qe(), "var-init");
            switch (m) {
              case 1:
                yb(w, 1, Re, u);
                break;
              case 2:
                yb(w, 2, Re, u);
                break;
              case 3:
                yb(w, 3, Re, u);
                break;
              case 6:
                yb(w, 4, Re, u);
                break;
              default:
                m = cc11001100_hook("m", void 0, "assign");
                break a;
            }
            xb(w, 5, v);
            m = cc11001100_hook("m", w, "assign");
          }
          if (v = cc11001100_hook("v", m, "assign")) v = cc11001100_hook("v", !!M(Bf).j[h]?.has(u), "assign");
          v && f.push(m);
          if (v = cc11001100_hook("v", m, "assign")) v = cc11001100_hook("v", !!M(Bf).h.get(h)?.has(u), "assign");
          v && g.push(m);
          e || (m = cc11001100_hook("m", M(Bf), "assign"), m.h.has(h) || m.h.set(h, new Map()), m.h.get(h).has(u) || m.h.get(h).set(u, []), d && m.h.get(h).get(u).push(d));
          l[u] = cc11001100_hook("l[u]", k.toJSON(), "assign");
        }
      });
    });
    (f.length || g.length) && tf(c, f, g, d ?? void 0);
  }
  function Kf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Cf(b), "var-init");
    La(a, d => {
      var e = cc11001100_hook("e", le(JSON.stringify(d)), "var-init");
      const f = cc11001100_hook("f", zb(e, me), "var-init");
      (e = cc11001100_hook("e", xf(e, f), "assign")) && (c[e] || (c[e] = cc11001100_hook("c[e]", d, "assign")));
    });
  }
  function Lf() {
    return Na(Object.keys(M(Bf).i), a => Number(a));
  }
  function Mf(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ra(M(Bf).l, a) || If(Cf(4), a);
  }
  ;
  function N(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
      value: cc11001100_hook("value", b, "object-key-init")
    });
  }
  function Nf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b[a] || c;
  }
  function Of(a) {
    cc11001100_hook("a", a, "function-parameter");
    N(5, Ef, a);
    N(6, Ff, a);
    N(7, Gf, a);
    N(8, Hf, a);
    N(13, Kf, a);
    N(15, Mf, a);
  }
  function Pf(a) {
    cc11001100_hook("a", a, "function-parameter");
    N(4, b => {
      M(vf).G = cc11001100_hook("M(vf).G", b, "assign");
    }, a);
    N(9, (b, c) => {
      var d = cc11001100_hook("d", M(vf), "var-init");
      null == d.G[3][b] && (d.G[3][b] = cc11001100_hook("d.G[3][b]", c, "assign"));
    }, a);
    N(10, (b, c) => {
      var d = cc11001100_hook("d", M(vf), "var-init");
      null == d.G[4][b] && (d.G[4][b] = cc11001100_hook("d.G[4][b]", c, "assign"));
    }, a);
    N(11, (b, c) => {
      var d = cc11001100_hook("d", M(vf), "var-init");
      null == d.G[5][b] && (d.G[5][b] = cc11001100_hook("d.G[5][b]", c, "assign"));
    }, a);
    N(14, b => {
      var c = cc11001100_hook("c", M(vf), "var-init");
      for (const d of [3, 4, 5]) Object.assign(c.G[d], b[d]);
    }, a);
  }
  function Qf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }
  ;
  function Rf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.j = cc11001100_hook("a.j", Nf(1, b, () => {}), "assign");
    a.l = cc11001100_hook("a.l", d => Nf(2, b, () => [])(d, c), "assign");
    a.i = cc11001100_hook("a.i", () => Nf(3, b, () => [])(c), "assign");
    a.h = cc11001100_hook("a.h", d => {
      Nf(16, b, () => {})(d, c);
    }, "assign");
  }
  class Sf {
    j() {}
    h() {}
    l() {
      return [];
    }
    i() {
      return [];
    }
  }
  ;
  let Tf, Uf;
  const Vf = cc11001100_hook("Vf", new Td(window), "var-init");
  (a => {
    Tf = cc11001100_hook("Tf", a ?? new Id(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    Gd(Tf, window.google_srt);
    Uf = cc11001100_hook("Uf", new Vd(Tf, Vf), "assign");
    Uf.wa(() => {});
    Uf.l(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || Sd(Vf) : Vf.h && lc(window, "load", () => {
      window.google_measure_js_timing || Sd(Vf);
    });
  })();
  var Wf = cc11001100_hook("Wf", {
    Ib: cc11001100_hook("Ib", 0, "object-key-init"),
    Hb: cc11001100_hook("Hb", 1, "object-key-init"),
    Eb: cc11001100_hook("Eb", 2, "object-key-init"),
    zb: cc11001100_hook("zb", 3, "object-key-init"),
    Fb: cc11001100_hook("Fb", 4, "object-key-init"),
    Ab: cc11001100_hook("Ab", 5, "object-key-init"),
    Gb: cc11001100_hook("Gb", 6, "object-key-init"),
    Cb: cc11001100_hook("Cb", 7, "object-key-init"),
    Db: cc11001100_hook("Db", 8, "object-key-init"),
    yb: cc11001100_hook("yb", 9, "object-key-init"),
    Bb: cc11001100_hook("Bb", 10, "object-key-init")
  }, "var-init");
  var Xf = cc11001100_hook("Xf", {
    Kb: cc11001100_hook("Kb", 0, "object-key-init"),
    Lb: cc11001100_hook("Lb", 1, "object-key-init"),
    Jb: cc11001100_hook("Jb", 2, "object-key-init")
  }, "var-init");
  function Yf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 != a.h) throw Error("Already resolved/rejected.");
  }
  var ag = cc11001100_hook("ag", class {
    constructor() {
      this.i = cc11001100_hook("this.i", new Zf(this), "assign");
      this.h = cc11001100_hook("this.h", 0, "assign");
    }
    resolve(a) {
      Yf(this);
      this.h = cc11001100_hook("this.h", 1, "assign");
      this.l = cc11001100_hook("this.l", a, "assign");
      $f(this.i);
    }
  }, "var-init");
  function $f(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a.h.h) {
      case 0:
        break;
      case 1:
        a.i && a.i(a.h.l);
        break;
      case 2:
        a.j && a.j(a.h.j);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  var Zf = cc11001100_hook("Zf", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
    }
    then(a, b) {
      if (this.i) throw Error("Then functions already set.");
      this.i = cc11001100_hook("this.i", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      $f(this);
    }
  }, "var-init");
  const bg = cc11001100_hook("bg", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a.slice(0), "assign");
    }
    forEach(a) {
      this.h.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new bg(Ma(this.h, a));
    }
    apply(a) {
      return new bg(a(this.h.slice(0)));
    }
    get(a) {
      return this.h[a];
    }
    add(a) {
      const b = cc11001100_hook("b", this.h.slice(0), "var-init");
      b.push(a);
      return new bg(b);
    }
  }, "var-init");
  function cg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", a.length, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
  }
  ;
  const eg = cc11001100_hook("eg", class {
    constructor() {
      this.h = cc11001100_hook("this.h", {}, "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
    }
    set(a, b) {
      const c = cc11001100_hook("c", dg(a), "var-init");
      this.h[c] = cc11001100_hook("this.h[c]", b, "assign");
      this.i[c] = cc11001100_hook("this.i[c]", a, "assign");
    }
    get(a, b) {
      a = cc11001100_hook("a", dg(a), "assign");
      return void 0 !== this.h[a] ? this.h[a] : b;
    }
    clear() {
      this.h = cc11001100_hook("this.h", {}, "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
    }
  }, "var-init");
  function dg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Object ? String(ea(a)) : a + "";
  }
  ;
  function fg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new gg({
      value: cc11001100_hook("value", a, "object-key-init")
    }, null);
  }
  function hg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new gg(null, a);
  }
  function ig(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return fg(a());
    } catch (b) {
      return hg(b);
    }
  }
  function jg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a.h ? a.h.value : null;
  }
  function kg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.h && b(a.h.value);
    return a;
  }
  function lg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.h || b(a.i);
    return a;
  }
  class gg {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
    }
    map(a) {
      return null != this.h ? (a = cc11001100_hook("a", a(this.h.value), "assign"), a instanceof gg ? a : fg(a)) : this;
    }
  }
  ;
  const mg = cc11001100_hook("mg", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", new eg(), "assign");
      if (a) for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.h.set(a, !0);
    }
    contains(a) {
      return void 0 !== this.h.h[dg(a)];
    }
  }, "var-init");
  class ng {
    constructor() {
      this.h = cc11001100_hook("this.h", new eg(), "assign");
    }
    set(a, b) {
      let c = cc11001100_hook("c", this.h.get(a), "var-init");
      c || (c = cc11001100_hook("c", new mg(), "assign"), this.h.set(a, c));
      c.add(b);
    }
  }
  ;
  var O = cc11001100_hook("O", class extends I {
      constructor(a) {
        super(a, -1, og);
      }
      getId() {
        return t(this, 3);
      }
    }, "var-init"),
    og = cc11001100_hook("og", [4], "var-init");
  class pg {
    constructor({
      Wa: a,
      Mb: b,
      Ub: c,
      pb: d
    }) {
      this.h = cc11001100_hook("this.h", b, "assign");
      this.l = cc11001100_hook("this.l", new bg(a || []), "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
      this.i = cc11001100_hook("this.i", c, "assign");
    }
  }
  ;
  const rg = cc11001100_hook("rg", a => {
      const b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", a.l, "var-init");
      c && c.h.length && b.push({
        Y: cc11001100_hook("Y", "a", "object-key-init"),
        ea: cc11001100_hook("ea", qg(c), "object-key-init")
      });
      null != a.h && b.push({
        Y: cc11001100_hook("Y", "as", "object-key-init"),
        ea: cc11001100_hook("ea", a.h, "object-key-init")
      });
      null != a.i && b.push({
        Y: cc11001100_hook("Y", "i", "object-key-init"),
        ea: cc11001100_hook("ea", String(a.i), "object-key-init")
      });
      null != a.j && b.push({
        Y: cc11001100_hook("Y", "rp", "object-key-init"),
        ea: cc11001100_hook("ea", String(a.j), "object-key-init")
      });
      b.sort(function (d, e) {
        return d.Y.localeCompare(e.Y);
      });
      b.unshift({
        Y: cc11001100_hook("Y", "t", "object-key-init"),
        ea: cc11001100_hook("ea", "aa", "object-key-init")
      });
      return b;
    }, "var-init"),
    qg = cc11001100_hook("qg", a => {
      a = cc11001100_hook("a", a.h.slice(0).map(sg), "assign");
      a = cc11001100_hook("a", JSON.stringify(a), "assign");
      return Tc(a);
    }, "var-init"),
    sg = cc11001100_hook("sg", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      null != t(a, 7) && (b.q = cc11001100_hook("b.q", t(a, 7), "assign"));
      null != Hb(a, 2) && (b.o = cc11001100_hook("b.o", Hb(a, 2), "assign"));
      null != Hb(a, 5) && (b.p = cc11001100_hook("b.p", Hb(a, 5), "assign"));
      return b;
    }, "var-init");
  var tg = cc11001100_hook("tg", class extends I {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return x(this, 1, a);
    }
  }, "var-init");
  function ug(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [].slice.call(arguments).filter(ic(e => null === e)), "var-init");
    if (!b.length) return null;
    let c = cc11001100_hook("c", [], "var-init"),
      d = cc11001100_hook("d", {}, "var-init");
    b.forEach(e => {
      c = cc11001100_hook("c", c.concat(e.La || []), "assign");
      d = cc11001100_hook("d", Object.assign(d, e.Qa), "assign");
    });
    return new vg(c, d);
  }
  function wg(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a) {
      case 1:
        return new vg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "mc", "object-key-init")
        });
      case 2:
        return new vg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "h", "object-key-init")
        });
      case 3:
        return new vg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "f", "object-key-init")
        });
      case 4:
        return new vg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "s", "object-key-init")
        });
      default:
        return null;
    }
  }
  function xg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a) var b = cc11001100_hook("b", null, "var-init");else {
      var c = cc11001100_hook("c", rg(a), "var-init");
      a = cc11001100_hook("a", [], "assign");
      for (b of c) c = cc11001100_hook("c", String(b.ea), "assign"), a.push(b.Y + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
      b = cc11001100_hook("b", new vg(null, {
        google_placement_id: cc11001100_hook("google_placement_id", a.join("~"), "object-key-init")
      }), "assign");
    }
    return b;
  }
  class vg {
    constructor(a, b) {
      this.La = cc11001100_hook("this.La", a, "assign");
      this.Qa = cc11001100_hook("this.Qa", b, "assign");
    }
  }
  ;
  const yg = cc11001100_hook("yg", new vg(["google-auto-placed"], {
    google_reactive_ad_format: cc11001100_hook("google_reactive_ad_format", 40, "object-key-init"),
    google_tag_origin: cc11001100_hook("google_tag_origin", "qs", "object-key-init")
  }), "var-init");
  var zg = cc11001100_hook("zg", {
    overlays: cc11001100_hook("overlays", 1, "object-key-init"),
    interstitials: cc11001100_hook("interstitials", 2, "object-key-init"),
    vignettes: cc11001100_hook("vignettes", 2, "object-key-init"),
    inserts: cc11001100_hook("inserts", 3, "object-key-init"),
    immersives: cc11001100_hook("immersives", 4, "object-key-init"),
    list_view: cc11001100_hook("list_view", 5, "object-key-init"),
    full_page: cc11001100_hook("full_page", 6, "object-key-init"),
    side_rails: cc11001100_hook("side_rails", 7, "object-key-init")
  }, "var-init");
  function Ag(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = cc11001100_hook("a.google_reactive_ads_global_state.sideRailProcessedFixedElements", new Set(), "assign")), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = cc11001100_hook("a.google_reactive_ads_global_state.sideRailAvailableSpace", new Map(), "assign"))) : a.google_reactive_ads_global_state = cc11001100_hook("a.google_reactive_ads_global_state", new Bg(), "assign");
    return a.google_reactive_ads_global_state;
  }
  class Bg {
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
      this.floatingAdsStacking = cc11001100_hook("this.floatingAdsStacking", new Cg(), "assign");
      this.sideRailProcessedFixedElements = cc11001100_hook("this.sideRailProcessedFixedElements", new Set(), "assign");
      this.sideRailAvailableSpace = cc11001100_hook("this.sideRailAvailableSpace", new Map(), "assign");
    }
  }
  var Cg = cc11001100_hook("Cg", class {
    constructor() {
      this.maxZIndexRestrictions = cc11001100_hook("this.maxZIndexRestrictions", {}, "assign");
      this.nextRestrictionId = cc11001100_hook("this.nextRestrictionId", 0, "assign");
      this.maxZIndexListeners = cc11001100_hook("this.maxZIndexListeners", [], "assign");
    }
  }, "var-init");
  var P = cc11001100_hook("P", a => {
    a = cc11001100_hook("a", a.document, "assign");
    let b = cc11001100_hook("b", {}, "var-init");
    a && (b = cc11001100_hook("b", "CSS1Compat" == a.compatMode ? a.documentElement : a.body, "assign"));
    return b || {};
  }, "var-init");
  var Dg = cc11001100_hook("Dg", a => {
      a = cc11001100_hook("a", a.getBoundingClientRect(), "assign");
      return 0 < a.width && 0 < a.height;
    }, "var-init"),
    Eg = cc11001100_hook("Eg", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      a.forEach(c => b = cc11001100_hook("b", Math.max(b, c.getBoundingClientRect().width), "assign"));
      return c => c.getBoundingClientRect().width > .5 * b;
    }, "var-init"),
    Fg = cc11001100_hook("Fg", a => {
      const b = cc11001100_hook("b", P(a).clientHeight || 0, "var-init");
      return c => c.getBoundingClientRect().height >= .75 * b;
    }, "var-init"),
    Gg = cc11001100_hook("Gg", (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top, "var-init");
  var Hg = cc11001100_hook("Hg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ig = cc11001100_hook("Ig", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var Kg = cc11001100_hook("Kg", class extends I {
      constructor() {
        super(void 0, -1, Jg);
      }
    }, "var-init"),
    Jg = cc11001100_hook("Jg", [1], "var-init");
  var Lg = cc11001100_hook("Lg", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return A(this, 2);
    }
  }, "var-init");
  var Mg = cc11001100_hook("Mg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ng = cc11001100_hook("Ng", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Pg = cc11001100_hook("Pg", class extends I {
      constructor(a) {
        super(a, -1, Og);
      }
      i() {
        return E(this, Ng, 1);
      }
    }, "var-init"),
    Og = cc11001100_hook("Og", [1], "var-init");
  var Q = cc11001100_hook("Q", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Qg = cc11001100_hook("Qg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Sg = cc11001100_hook("Sg", class extends I {
      constructor(a) {
        super(a, -1, Rg);
      }
    }, "var-init"),
    Rg = cc11001100_hook("Rg", [6, 7, 9, 10, 11], "var-init");
  function Tg(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    cg(a.getElementsByTagName("p"), function (c) {
      100 <= Ug(c) && b.push(c);
    });
    return b;
  }
  function Ug(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = cc11001100_hook("b", 0, "var-init");
    cg(a.childNodes, function (c) {
      b += cc11001100_hook("b", Ug(c), "assign");
    });
    return b;
  }
  function Vg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Wg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null == a.h) return b;
    switch (a.h) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.h);
    }
  }
  const Xg = cc11001100_hook("Xg", class {
    constructor(a, b, c, d) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.h = cc11001100_hook("this.h", d, "assign");
    }
    query(a) {
      var b = cc11001100_hook("b", [], "var-init");
      try {
        b = cc11001100_hook("b", a.querySelectorAll(this.l), "assign");
      } catch (f) {}
      if (!b.length) return [];
      a = cc11001100_hook("a", q(b), "assign");
      a = cc11001100_hook("a", Wg(this, a), "assign");
      "number" === typeof this.i && (b = cc11001100_hook("b", this.i, "assign"), 0 > b && (b += cc11001100_hook("b", a.length, "assign")), a = cc11001100_hook("a", 0 <= b && b < a.length ? [a[b]] : [], "assign"));
      if ("number" === typeof this.j) {
        b = cc11001100_hook("b", [], "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
          var d = cc11001100_hook("d", Tg(a[c]), "var-init"),
            e = cc11001100_hook("e", this.j, "var-init");
          0 > e && (e += cc11001100_hook("e", d.length, "assign"));
          0 <= e && e < d.length && b.push(d[e]);
        }
        a = cc11001100_hook("a", b, "assign");
      }
      return a;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: cc11001100_hook("nativeQuery", this.l, "object-key-init"),
        occurrenceIndex: cc11001100_hook("occurrenceIndex", this.i, "object-key-init"),
        paragraphIndex: cc11001100_hook("paragraphIndex", this.j, "object-key-init"),
        ignoreMode: cc11001100_hook("ignoreMode", this.h, "object-key-init")
      });
    }
  }, "var-init");
  function Yg(a) {
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
  ;
  var R = cc11001100_hook("R", class {
      constructor(a, b = !1) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }, "var-init"),
    Zg = cc11001100_hook("Zg", class {
      constructor(a, b = 0) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }, "var-init");
  var $g = cc11001100_hook("$g", new R(1082, !0), "var-init"),
    ah = cc11001100_hook("ah", new Zg(1130, 100), "var-init"),
    bh = cc11001100_hook("bh", new class {
      constructor(a, b = "") {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(14), "var-init"),
    ch = cc11001100_hook("ch", new R(1247), "var-init"),
    dh = cc11001100_hook("dh", new R(316), "var-init"),
    eh = cc11001100_hook("eh", new R(1207, !0), "var-init"),
    fh = cc11001100_hook("fh", new R(313), "var-init"),
    gh = cc11001100_hook("gh", new R(369), "var-init"),
    hh = cc11001100_hook("hh", new R(1242), "var-init"),
    ih = cc11001100_hook("ih", new R(1230), "var-init"),
    jh = cc11001100_hook("jh", new R(1229), "var-init"),
    kh = cc11001100_hook("kh", new R(1231), "var-init"),
    lh = cc11001100_hook("lh", new R(1171, !0), "var-init"),
    mh = cc11001100_hook("mh", new R(1201, !0), "var-init"),
    nh = cc11001100_hook("nh", new R(217), "var-init"),
    oh = cc11001100_hook("oh", new R(1216, !0), "var-init"),
    ph = cc11001100_hook("ph", new R(501545960), "var-init"),
    qh = cc11001100_hook("qh", new R(1120), "var-init"),
    rh = cc11001100_hook("rh", new Zg(1114, 1), "var-init"),
    sh = cc11001100_hook("sh", new R(506914611), "var-init"),
    th = cc11001100_hook("th", new R(1086, !0), "var-init"),
    uh = cc11001100_hook("uh", new Zg(1079, 5), "var-init"),
    vh = cc11001100_hook("vh", new class {
      constructor(a, b = []) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="]), "var-init"),
    wh = cc11001100_hook("wh", new R(203), "var-init"),
    xh = cc11001100_hook("xh", new R(84), "var-init"),
    yh = cc11001100_hook("yh", new R(1975, !0), "var-init"),
    zh = cc11001100_hook("zh", new R(1974, !0), "var-init"),
    Ah = cc11001100_hook("Ah", new R(1162), "var-init"),
    Bh = cc11001100_hook("Bh", new Zg(501545963, 1), "var-init"),
    Ch = cc11001100_hook("Ch", new R(501545961), "var-init"),
    Dh = cc11001100_hook("Dh", new Zg(501545962, 1), "var-init"),
    Eh = cc11001100_hook("Eh", new R(491815314), "var-init"),
    Fh = cc11001100_hook("Fh", new R(1121), "var-init"),
    Gh = cc11001100_hook("Gh", new R(501545959, !0), "var-init"),
    Hh = cc11001100_hook("Hh", new R(506619840), "var-init");
  var Ih = cc11001100_hook("Ih", class {
    constructor() {
      const a = cc11001100_hook("a", {}, "var-init");
      this.h = cc11001100_hook("this.h", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.i = cc11001100_hook("this.i", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.j = cc11001100_hook("this.j", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.l = cc11001100_hook("this.l", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.m = cc11001100_hook("this.m", () => {}, "assign");
    }
  }, "var-init");
  function T(a) {
    cc11001100_hook("a", a, "function-parameter");
    return M(Ih).h(a.h, a.defaultValue);
  }
  function Jh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return M(Ih).i(a.h, a.defaultValue);
  }
  function Kh() {
    return M(Ih).j(bh.h, bh.defaultValue);
  }
  ;
  function Lh(a, b, c) {
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
    Yg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = cc11001100_hook("b.style.display", "block", "assign"));
  }
  ;
  function Mh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", e => {
        e = cc11001100_hook("e", Nh(e), "assign");
        return null == e ? !1 : 0 < e;
      }, "var-init"),
      d = cc11001100_hook("d", e => {
        e = cc11001100_hook("e", Nh(e), "assign");
        return null == e ? !1 : 0 > e;
      }, "var-init");
    switch (b) {
      case 0:
        return {
          init: cc11001100_hook("init", Oh(a.previousSibling, c), "object-key-init"),
          ia: cc11001100_hook("ia", e => Oh(e.previousSibling, c), "object-key-init"),
          ma: cc11001100_hook("ma", 0, "object-key-init")
        };
      case 2:
        return {
          init: cc11001100_hook("init", Oh(a.lastChild, c), "object-key-init"),
          ia: cc11001100_hook("ia", e => Oh(e.previousSibling, c), "object-key-init"),
          ma: cc11001100_hook("ma", 0, "object-key-init")
        };
      case 3:
        return {
          init: cc11001100_hook("init", Oh(a.nextSibling, d), "object-key-init"),
          ia: cc11001100_hook("ia", e => Oh(e.nextSibling, d), "object-key-init"),
          ma: cc11001100_hook("ma", 3, "object-key-init")
        };
      case 1:
        return {
          init: cc11001100_hook("init", Oh(a.firstChild, d), "object-key-init"),
          ia: cc11001100_hook("ia", e => Oh(e.nextSibling, d), "object-key-init"),
          ma: cc11001100_hook("ma", 3, "object-key-init")
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Nh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null;
  }
  function Oh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && b(a) ? a : null;
  }
  ;
  var Ph = cc11001100_hook("Ph", {
    rectangle: cc11001100_hook("rectangle", 1, "object-key-init"),
    horizontal: cc11001100_hook("horizontal", 2, "object-key-init"),
    vertical: cc11001100_hook("vertical", 4, "object-key-init")
  }, "var-init");
  var Qh = cc11001100_hook("Qh", a => {
    if (a == a.top) return 0;
    for (; a && a != a.top && Kc(a); a = cc11001100_hook("a", a.parent, "assign")) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }, "var-init");
  var Rh = cc11001100_hook("Rh", (a, b) => {
    do {
      const c = cc11001100_hook("c", Oc(a, b), "var-init");
      if (c && "fixed" == c.position) return !1;
    } while (a = cc11001100_hook("a", a.parentElement, "assign"));
    return !0;
  }, "var-init");
  function Sh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", ["width", "height"], "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c.length; e++) {
      const f = cc11001100_hook("f", "google_ad_" + c[e], "var-init");
      if (!b.hasOwnProperty(f)) {
        var d = cc11001100_hook("d", K(a[c[e]]), "var-init");
        d = cc11001100_hook("d", null === d ? null : Math.round(d), "assign");
        null != d && (b[f] = cc11001100_hook("b[f]", d, "assign"));
      }
    }
  }
  var Th = cc11001100_hook("Th", (a, b) => !((Wc.test(b.google_ad_width) || Vc.test(a.style.width)) && (Wc.test(b.google_ad_height) || Vc.test(a.style.height))), "var-init"),
    Vh = cc11001100_hook("Vh", (a, b) => (a = cc11001100_hook("a", Uh(a, b), "assign")) ? a.y : 0, "var-init"),
    Uh = cc11001100_hook("Uh", (a, b) => {
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
    Wh = cc11001100_hook("Wh", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      for (let c in Ph) -1 != a.indexOf(c) && (b |= cc11001100_hook("b", Ph[c], "assign"));
      return b;
    }, "var-init"),
    Xh = cc11001100_hook("Xh", (a, b, c, d, e) => {
      if (a !== a.top) return Lc(a) ? 3 : 16;
      if (!(488 > P(a).clientWidth)) return 4;
      if (!(a.innerHeight >= a.innerWidth)) return 5;
      const f = cc11001100_hook("f", P(a).clientWidth, "var-init");
      if (!f || (f - c) / f > d) a = cc11001100_hook("a", 6, "assign");else {
        if (c = cc11001100_hook("c", "true" != e.google_full_width_responsive, "assign")) a: {
          c = cc11001100_hook("c", b.parentElement, "assign");
          for (b = cc11001100_hook("b", P(a).clientWidth, "assign"); c; c = cc11001100_hook("c", c.parentElement, "assign")) if ((d = cc11001100_hook("d", Oc(c, a), "assign")) && (e = cc11001100_hook("e", K(d.width), "assign")) && !(e >= b) && "visible" != d.overflow) {
            c = cc11001100_hook("c", !0, "assign");
            break a;
          }
          c = cc11001100_hook("c", !1, "assign");
        }
        a = cc11001100_hook("a", c ? 7 : !0, "assign");
      }
      return a;
    }, "var-init"),
    Yh = cc11001100_hook("Yh", (a, b, c, d) => {
      const e = cc11001100_hook("e", Xh(b, c, a, .3, d), "var-init");
      !0 !== e ? a = cc11001100_hook("a", e, "assign") : "true" == d.google_full_width_responsive || Rh(c, b) ? (b = cc11001100_hook("b", P(b).clientWidth, "assign"), a = cc11001100_hook("a", b - a, "assign"), a = cc11001100_hook("a", b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10, "assign")) : a = cc11001100_hook("a", 9, "assign");
      return a;
    }, "var-init"),
    Zh = cc11001100_hook("Zh", (a, b, c) => {
      a = cc11001100_hook("a", a.style, "assign");
      "rtl" == b ? a.marginRight = cc11001100_hook("a.marginRight", c, "assign") : a.marginLeft = cc11001100_hook("a.marginLeft", c, "assign");
    }, "var-init");
  const $h = cc11001100_hook("$h", (a, b) => {
      if (3 == b.nodeType) return /\S/.test(b.data);
      if (1 == b.nodeType) {
        if (/^(script|style)$/i.test(b.nodeName)) return !1;
        let c;
        try {
          c = cc11001100_hook("c", Oc(b, a), "assign");
        } catch (d) {}
        return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility));
      }
      return !1;
    }, "var-init"),
    ai = cc11001100_hook("ai", (a, b, c) => {
      a = cc11001100_hook("a", Uh(b, a), "assign");
      return "rtl" == c ? -a.x : a.x;
    }, "var-init");
  var bi = cc11001100_hook("bi", (a, b) => {
    var c;
    c = cc11001100_hook("c", (c = cc11001100_hook("c", b.parentElement, "assign")) ? (c = cc11001100_hook("c", Oc(c, a), "assign")) ? c.direction : "" : "", "assign");
    if (c) {
      b.style.border = cc11001100_hook("b.style.border", b.style.borderStyle = cc11001100_hook("b.style.borderStyle", b.style.outline = cc11001100_hook("b.style.outline", b.style.outlineStyle = cc11001100_hook("b.style.outlineStyle", b.style.transition = cc11001100_hook("b.style.transition", "none", "assign"), "assign"), "assign"), "assign"), "assign");
      b.style.borderSpacing = cc11001100_hook("b.style.borderSpacing", b.style.padding = cc11001100_hook("b.style.padding", "0", "assign"), "assign");
      Zh(b, c, "0px");
      b.style.width = cc11001100_hook("b.style.width", P(a).clientWidth + "px", "assign");
      if (0 !== ai(a, b, c)) {
        Zh(b, c, "0px");
        var d = cc11001100_hook("d", ai(a, b, c), "var-init");
        Zh(b, c, -1 * d + "px");
        a = cc11001100_hook("a", ai(a, b, c), "assign");
        0 !== a && a !== d && Zh(b, c, d / (a - d) * d + "px");
      }
      b.style.zIndex = cc11001100_hook("b.style.zIndex", 30, "assign");
    }
  }, "var-init");
  var ci = cc11001100_hook("ci", class {
    constructor(a, b) {
      this.K = cc11001100_hook("this.K", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
    height() {
      return this.j;
    }
    h(a) {
      return 300 < a && 300 < this.j ? this.K : Math.min(1200, Math.round(a));
    }
    i() {}
  }, "var-init");
  var di = cc11001100_hook("di", (a, b, c, d = e => e) => {
      let e;
      return a.style && a.style[c] && d(a.style[c]) || (e = cc11001100_hook("e", Oc(a, b), "assign")) && e[c] && d(e[c]) || null;
    }, "var-init"),
    ei = cc11001100_hook("ei", a => b => b.K <= a, "var-init"),
    hi = cc11001100_hook("hi", (a, b, c, d) => {
      const e = cc11001100_hook("e", a && fi(c, b), "var-init"),
        f = cc11001100_hook("f", gi(b, d), "var-init");
      return g => !(e && g.height() >= f);
    }, "var-init"),
    ii = cc11001100_hook("ii", a => b => b.height() <= a, "var-init"),
    fi = cc11001100_hook("fi", (a, b) => Vh(a, b) < P(b).clientHeight - 100, "var-init"),
    ji = cc11001100_hook("ji", (a, b) => {
      var c = cc11001100_hook("c", di(b, a, "height", K), "var-init");
      if (c) return c;
      var d = cc11001100_hook("d", b.style.height, "var-init");
      b.style.height = cc11001100_hook("b.style.height", "inherit", "assign");
      c = cc11001100_hook("c", di(b, a, "height", K), "assign");
      b.style.height = cc11001100_hook("b.style.height", d, "assign");
      if (c) return c;
      c = cc11001100_hook("c", Infinity, "assign");
      do (d = cc11001100_hook("d", b.style && K(b.style.height), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")), (d = cc11001100_hook("d", di(b, a, "maxHeight", K), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")); while ((b = cc11001100_hook("b", b.parentElement, "assign")) && "HTML" != b.tagName);
      return c;
    }, "var-init");
  const gi = cc11001100_hook("gi", (a, b) => {
    const c = cc11001100_hook("c", 0 == sd(a), "var-init");
    return b && c ? Math.max(250, 2 * P(a).clientHeight / 3) : 250;
  }, "var-init");
  var ki = cc11001100_hook("ki", {
    google_ad_channel: cc11001100_hook("google_ad_channel", !0, "object-key-init"),
    google_ad_client: cc11001100_hook("google_ad_client", !0, "object-key-init"),
    google_ad_host: cc11001100_hook("google_ad_host", !0, "object-key-init"),
    google_ad_host_channel: cc11001100_hook("google_ad_host_channel", !0, "object-key-init"),
    google_adtest: cc11001100_hook("google_adtest", !0, "object-key-init"),
    google_tag_for_child_directed_treatment: cc11001100_hook("google_tag_for_child_directed_treatment", !0, "object-key-init"),
    google_tag_for_under_age_of_consent: cc11001100_hook("google_tag_for_under_age_of_consent", !0, "object-key-init"),
    google_tag_partner: cc11001100_hook("google_tag_partner", !0, "object-key-init"),
    google_restrict_data_processing: cc11001100_hook("google_restrict_data_processing", !0, "object-key-init"),
    google_page_url: cc11001100_hook("google_page_url", !0, "object-key-init"),
    google_debug_params: cc11001100_hook("google_debug_params", !0, "object-key-init"),
    google_shadow_mode: cc11001100_hook("google_shadow_mode", !0, "object-key-init"),
    google_adbreak_test: cc11001100_hook("google_adbreak_test", !0, "object-key-init"),
    google_ad_frequency_hint: cc11001100_hook("google_ad_frequency_hint", !0, "object-key-init"),
    google_admob_interstitial_slot: cc11001100_hook("google_admob_interstitial_slot", !0, "object-key-init"),
    google_admob_rewarded_slot: cc11001100_hook("google_admob_rewarded_slot", !0, "object-key-init"),
    google_admob_ads_only: cc11001100_hook("google_admob_ads_only", !0, "object-key-init"),
    google_max_ad_content_rating: cc11001100_hook("google_max_ad_content_rating", !0, "object-key-init"),
    google_traffic_source: cc11001100_hook("google_traffic_source", !0, "object-key-init")
  }, "var-init");
  const li = cc11001100_hook("li", RegExp("(^| )adsbygoogle($| )"), "var-init");
  function mi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) {
      const d = cc11001100_hook("d", b[c], "var-init"),
        e = cc11001100_hook("e", Cc(d.Vb), "var-init");
      a[e] = cc11001100_hook("a[e]", d.value, "assign");
    }
  }
  ;
  class ni {
    constructor() {
      var a = cc11001100_hook("a", pd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`, "var-init");
      this.h = cc11001100_hook("this.h", null, "assign");
      this.j = cc11001100_hook("this.j", !1, "assign");
      this.m = cc11001100_hook("this.m", Math.random(), "assign");
      this.i = cc11001100_hook("this.i", this.I, "assign");
      this.A = cc11001100_hook("this.A", a, "assign");
    }
    wa(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
    }
    l(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Ra(a) {
      this.i = cc11001100_hook("this.i", a, "assign");
    }
    I(a, b, c = .01, d, e = "jserror") {
      if ((this.j ? this.m : Math.random()) > c) return !1;
      wd(b) || (b = cc11001100_hook("b", new vd(b, {
        context: cc11001100_hook("context", a, "object-key-init"),
        id: cc11001100_hook("id", e, "object-key-init")
      }), "assign"));
      if (d || this.h) b.meta = cc11001100_hook("b.meta", {}, "assign"), this.h && this.h(b.meta), d && d(b.meta);
      n.google_js_errors = cc11001100_hook("n.google_js_errors", n.google_js_errors || [], "assign");
      n.google_js_errors.push(b);
      n.error_rep_loaded || (Mc(n.document, this.A), n.error_rep_loaded = cc11001100_hook("n.error_rep_loaded", !0, "assign"));
      return !1;
    }
    fa(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.i(a, d, .01, c, "jserror")) throw d;
      }
    }
    na(a, b) {
      return (...c) => this.fa(a, () => b.apply(void 0, c));
    }
    aa(a, b) {
      b.catch(c => {
        c = cc11001100_hook("c", c ? c : "unknown rejection", "assign");
        this.I(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0);
      });
    }
  }
  ;
  const oi = cc11001100_hook("oi", (a, b) => {
    b = cc11001100_hook("b", b.google_js_reporting_queue = cc11001100_hook("b.google_js_reporting_queue", b.google_js_reporting_queue || [], "assign"), "assign");
    2048 > b.length && b.push(a);
  }, "var-init");
  var pi = cc11001100_hook("pi", (a, b, c, d, e = !1) => {
      const f = cc11001100_hook("f", d || window, "var-init"),
        g = cc11001100_hook("g", "undefined" !== typeof queueMicrotask, "var-init");
      return function () {
        e && g && queueMicrotask(() => {
          f.google_rum_task_id_counter = cc11001100_hook("f.google_rum_task_id_counter", f.google_rum_task_id_counter || 1, "assign");
          f.google_rum_task_id_counter += cc11001100_hook("f.google_rum_task_id_counter", 1, "assign");
        });
        const h = cc11001100_hook("h", Md(), "var-init");
        let l,
          k = cc11001100_hook("k", 3, "var-init");
        try {
          l = cc11001100_hook("l", b.apply(this, arguments), "assign");
        } catch (m) {
          k = cc11001100_hook("k", 13, "assign");
          if (!c) throw m;
          c(a, m);
        } finally {
          f.google_measure_js_timing && h && oi({
            label: cc11001100_hook("label", a.toString(), "object-key-init"),
            value: cc11001100_hook("value", h, "object-key-init"),
            duration: cc11001100_hook("duration", (Md() || 0) - h, "object-key-init"),
            type: cc11001100_hook("type", k, "object-key-init"),
            ...(e && g && {
              taskId: cc11001100_hook("taskId", f.google_rum_task_id_counter = cc11001100_hook("f.google_rum_task_id_counter", f.google_rum_task_id_counter || 1, "assign"), "object-key-init")
            })
          }, f);
        }
        return l;
      };
    }, "var-init"),
    qi = cc11001100_hook("qi", (a, b) => pi(a, b, (c, d) => {
      new ni().I(c, d);
    }, void 0, !1), "var-init");
  function ri(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return pi(a, b, void 0, c, !0).apply();
  }
  function si(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) return null;
    var b = cc11001100_hook("b", t(a, 7), "var-init");
    if (t(a, 1) || a.getId() || 0 < wb(a, 4, rb).length) {
      b = cc11001100_hook("b", wb(a, 4, rb), "assign");
      var c = cc11001100_hook("c", t(a, 3), "var-init"),
        d = cc11001100_hook("d", t(a, 1), "var-init"),
        e = cc11001100_hook("e", "", "var-init");
      d && (e += cc11001100_hook("e", d, "assign"));
      c && (e += cc11001100_hook("e", "#" + Vg(c), "assign"));
      if (b) for (c = cc11001100_hook("c", 0, "assign"); c < b.length; c++) e += cc11001100_hook("e", "." + Vg(b[c]), "assign");
      a = cc11001100_hook("a", (b = cc11001100_hook("b", e, "assign")) ? new Xg(b, Hb(a, 2), Hb(a, 5), ti(t(a, 6))) : null, "assign");
    } else a = cc11001100_hook("a", b ? new Xg(b, Hb(a, 2), Hb(a, 5), ti(t(a, 6))) : null, "assign");
    return a;
  }
  var ui = cc11001100_hook("ui", {
    1: cc11001100_hook(1, 1, "object-key-init"),
    2: cc11001100_hook(2, 2, "object-key-init"),
    3: cc11001100_hook(3, 3, "object-key-init"),
    0: cc11001100_hook(0, 0, "object-key-init")
  }, "var-init");
  function ti(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? a : ui[a];
  }
  var vi = cc11001100_hook("vi", {
    1: cc11001100_hook(1, 0, "object-key-init"),
    2: cc11001100_hook(2, 1, "object-key-init"),
    3: cc11001100_hook(3, 2, "object-key-init"),
    4: cc11001100_hook(4, 3, "object-key-init")
  }, "var-init");
  function wi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.google_ama_state = cc11001100_hook("a.google_ama_state", a.google_ama_state || {}, "assign");
  }
  function xi(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", wi(a), "assign");
    return a.optimization = cc11001100_hook("a.optimization", a.optimization || {}, "assign");
  }
  ;
  var yi = cc11001100_hook("yi", ac(class extends I {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  var zi = cc11001100_hook("zi", a => {
    switch (t(a, 8)) {
      case 1:
      case 2:
        if (null == a) var b = cc11001100_hook("b", null, "var-init");else b = cc11001100_hook("b", D(a, O, 1), "assign"), null == b ? b = cc11001100_hook("b", null, "assign") : (a = cc11001100_hook("a", t(a, 2), "assign"), b = cc11001100_hook("b", null == a ? null : new pg({
          Wa: cc11001100_hook("Wa", [b], "object-key-init"),
          pb: cc11001100_hook("pb", a, "object-key-init")
        }), "assign"));
        return null != b ? fg(b) : hg(Error("Missing dimension when creating placement id"));
      case 3:
        return hg(Error("Missing dimension when creating placement id"));
      default:
        return hg(Error("Invalid type: " + t(a, 8)));
    }
  }, "var-init");
  var Ai = cc11001100_hook("Ai", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Bi = cc11001100_hook("Bi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ci = cc11001100_hook("Ci", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return vb(this, 23);
    }
  }, "var-init");
  var Di = cc11001100_hook("Di", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ei = cc11001100_hook("Ei", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Fi = cc11001100_hook("Fi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Gi = cc11001100_hook("Gi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Hi = cc11001100_hook("Hi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ii = cc11001100_hook("Ii", class extends I {
      constructor(a) {
        super(a);
      }
      getName() {
        return t(this, 4);
      }
    }, "var-init"),
    Ji = cc11001100_hook("Ji", [1, 2, 3], "var-init");
  var Li = cc11001100_hook("Li", class extends I {
      constructor(a) {
        super(a, -1, Ki);
      }
    }, "var-init"),
    Ki = cc11001100_hook("Ki", [2, 5, 6, 11], "var-init");
  var Mi = cc11001100_hook("Mi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Oi = cc11001100_hook("Oi", class extends I {
      constructor(a) {
        super(a);
      }
      i() {
        return Kb(this, Mi, 2, Ni);
      }
    }, "var-init"),
    Ni = cc11001100_hook("Ni", [1, 2], "var-init");
  var Qi = cc11001100_hook("Qi", class extends I {
      constructor(a) {
        super(a, -1, Pi);
      }
      i() {
        return D(this, Oi, 3);
      }
    }, "var-init"),
    Pi = cc11001100_hook("Pi", [1, 4], "var-init");
  var Si = cc11001100_hook("Si", class extends I {
      constructor(a) {
        super(a, -1, Ri);
      }
    }, "var-init"),
    Ti = cc11001100_hook("Ti", ac(Si), "var-init"),
    Ri = cc11001100_hook("Ri", [1, 2, 5, 7], "var-init");
  var Ui = cc11001100_hook("Ui", (a, b) => {
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
  function Vi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new ng(), "var-init"),
      d = cc11001100_hook("d", new mg(), "var-init");
    b.forEach(e => {
      if (Kb(e, Gi, 1, Ji)) {
        e = cc11001100_hook("e", Kb(e, Gi, 1, Ji), "assign");
        if (D(e, Q, 1) && D(D(e, Q, 1), O, 1) && D(e, Q, 2) && D(D(e, Q, 2), O, 1)) {
          const g = cc11001100_hook("g", Wi(a, D(D(e, Q, 1), O, 1)), "var-init"),
            h = cc11001100_hook("h", Wi(a, D(D(e, Q, 2), O, 1)), "var-init");
          if (g && h) for (var f of Ui({
            anchor: cc11001100_hook("anchor", g, "object-key-init"),
            position: cc11001100_hook("position", t(D(e, Q, 1), 2), "object-key-init")
          }, {
            anchor: cc11001100_hook("anchor", h, "object-key-init"),
            position: cc11001100_hook("position", t(D(e, Q, 2), 2), "object-key-init")
          })) c.set(ea(f.anchor), f.position);
        }
        D(e, Q, 3) && D(D(e, Q, 3), O, 1) && (f = cc11001100_hook("f", Wi(a, D(D(e, Q, 3), O, 1)), "assign")) && c.set(ea(f), t(D(e, Q, 3), 2));
      } else Kb(e, Hi, 2, Ji) ? Xi(a, Kb(e, Hi, 2, Ji), c) : Kb(e, Fi, 3, Ji) && Zi(a, Kb(e, Fi, 3, Ji), d);
    });
    return new $i(c, d);
  }
  class $i {
    constructor(a, b) {
      this.i = cc11001100_hook("this.i", a, "assign");
      this.h = cc11001100_hook("this.h", b, "assign");
    }
  }
  const Xi = cc11001100_hook("Xi", (a, b, c) => {
      D(b, Q, 2) ? (b = cc11001100_hook("b", D(b, Q, 2), "assign"), (a = cc11001100_hook("a", Wi(a, D(b, O, 1)), "assign")) && c.set(ea(a), t(b, 2))) : D(b, O, 1) && (a = cc11001100_hook("a", aj(a, D(b, O, 1)), "assign")) && a.forEach(d => {
        d = cc11001100_hook("d", ea(d), "assign");
        c.set(d, 1);
        c.set(d, 4);
        c.set(d, 2);
        c.set(d, 3);
      });
    }, "var-init"),
    Zi = cc11001100_hook("Zi", (a, b, c) => {
      D(b, O, 1) && (a = cc11001100_hook("a", aj(a, D(b, O, 1)), "assign")) && a.forEach(d => {
        c.add(ea(d));
      });
    }, "var-init"),
    Wi = cc11001100_hook("Wi", (a, b) => (a = cc11001100_hook("a", aj(a, b), "assign")) && 0 < a.length ? a[0] : null, "var-init"),
    aj = cc11001100_hook("aj", (a, b) => (b = cc11001100_hook("b", si(b), "assign")) ? b.query(a) : null, "var-init");
  function bj(a, b, c) {
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
      if (cj(b)) return !0;
      if (a.h.has(b)) break;
      c.push(b);
      b = cc11001100_hook("b", b.parentElement, "assign");
    }
    c.forEach(d => a.h.add(d));
    return !1;
  }
  function dj(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", ej(a), "assign");
    return a.has("all") || a.has("after");
  }
  function fj(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", ej(a), "assign");
    return a.has("all") || a.has("before");
  }
  function ej(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a && a.getAttribute("data-no-auto-ads"), "assign")) ? new Set(a.split("|")) : new Set();
  }
  function cj(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ej(a), "var-init");
    return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"));
  }
  var gj = cc11001100_hook("gj", class {
    constructor() {
      this.h = cc11001100_hook("this.h", new Set(), "assign");
    }
  }, "var-init");
  function hj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", Oc(a, b), "assign");
    if (!a) return !1;
    a = cc11001100_hook("a", a.cssFloat || a.styleFloat, "assign");
    return "left" == a || "right" == a;
  }
  function ij(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (a = cc11001100_hook("a", a.previousSibling, "assign"); a && 1 != a.nodeType;) a = cc11001100_hook("a", a.previousSibling, "assign");
    return a ? a : null;
  }
  function jj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a.nextSibling || !!a.parentNode && jj(a.parentNode);
  }
  ;
  function kj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", a.hash, "assign");
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = cc11001100_hook("b", lj(b), "assign");
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function lj(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", "", "var-init");
    J(a.split("_"), c => {
      b += cc11001100_hook("b", c.substr(0, 2), "assign");
    });
    return b;
  }
  ;
  function mj(a = window) {
    a = cc11001100_hook("a", a.googletag, "assign");
    return a?.apiReady ? a : void 0;
  }
  ;
  const nj = cc11001100_hook("nj", a => {
    const b = cc11001100_hook("b", mj(a), "var-init");
    return b ? Ma(Na(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null;
  }, "var-init");
  var oj = cc11001100_hook("oj", a => {
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
  function pj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.l) return !0;
    a.l = cc11001100_hook("a.l", !0, "assign");
    const c = cc11001100_hook("c", E(a.i, Sg, 1), "var-init");
    a.j = cc11001100_hook("a.j", 0, "assign");
    const d = cc11001100_hook("d", qj(a.B), "var-init");
    if (kj(a.h.location, "google_audio_sense")) {
      var e = cc11001100_hook("e", new Mg(), "var-init");
      e = cc11001100_hook("e", x(e, 1, 1), "assign");
      var f = cc11001100_hook("f", new Lg(), "var-init");
      f = cc11001100_hook("f", x(f, 2, !0), "assign");
      e = cc11001100_hook("e", Eb(e, 2, f), "assign");
      f = cc11001100_hook("f", new Kg(), "assign");
      var g = cc11001100_hook("g", new Hg(), "var-init");
      var h = cc11001100_hook("h", x(g, 1, 1), "var-init");
      g = cc11001100_hook("g", r(f.u), "assign");
      if (g & 2) throw Error();
      g = cc11001100_hook("g", Db(f, Hg, 1, 2, g), "assign");
      h = cc11001100_hook("h", null != h ? h : new Hg(), "assign");
      var l = cc11001100_hook("l", ub(f, 1, 2, void 0, !1), "var-init");
      g.push(h);
      l.push(h.u);
      gb(h.u) && db(l, 8);
      g = cc11001100_hook("g", new Ig(), "assign");
      g = cc11001100_hook("g", x(g, 1, !0), "assign");
      f = cc11001100_hook("f", Eb(f, 2, g), "assign");
      e = cc11001100_hook("e", Eb(e, 3, f), "assign");
    } else e = cc11001100_hook("e", D(a.i, Mg, 27), "assign");
    if (f = cc11001100_hook("f", e, "assign")) if (g = cc11001100_hook("g", D(a.i, Pg, 6)?.i() || [], "assign"), e = cc11001100_hook("e", a.h, "assign"), 1 == H(f, 1) && D(f, Lg, 2)?.i() && 0 != g.length) {
      var k;
      f = cc11001100_hook("f", [], "assign");
      for (k of g) if (g = cc11001100_hook("g", si(D(k, O, 1) || null), "assign")) g = cc11001100_hook("g", g.query(e.document), "assign"), 0 < g.length && f.push(g[0]);
      f = cc11001100_hook("f", f.filter(Dg).filter(Eg(f)).filter(Fg(e)), "assign");
      f.sort(Gg);
      if (k = cc11001100_hook("k", f[0] || null, "assign")) f = cc11001100_hook("f", e.document.createElement("div"), "assign"), f.id = cc11001100_hook("f.id", "google-auto-placed-read-aloud-player-reserved", "assign"), $c(f, {
        width: cc11001100_hook("width", "100%", "object-key-init"),
        height: cc11001100_hook("height", "65px", "object-key-init")
      }), k.insertBefore(f, k.firstChild), wi(e).audioSenseSpaceReserved = cc11001100_hook("wi(e).audioSenseSpaceReserved", !0, "assign");
    }
    k = cc11001100_hook("k", a.h, "assign");
    var m;
    try {
      var u = cc11001100_hook("u", (m = cc11001100_hook("m", k.localStorage.getItem("google_ama_settings"), "assign")) ? yi(m) : null, "var-init");
    } catch (w) {
      u = cc11001100_hook("u", null, "assign");
    }
    m = cc11001100_hook("m", null !== u && A(u, 2, !1), "assign");
    u = cc11001100_hook("u", wi(k), "assign");
    m && (u.eatf = cc11001100_hook("u.eatf", !0, "assign"), md(7, [!0, 0, !1]));
    b: {
      f = cc11001100_hook("f", {
        fb: cc11001100_hook("fb", !1, "object-key-init"),
        gb: cc11001100_hook("gb", !1, "object-key-init")
      }, "assign");
      h = cc11001100_hook("h", q(k.document.querySelectorAll(".google-auto-placed")), "assign");
      l = cc11001100_hook("l", q(k.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")), "assign");
      const w = cc11001100_hook("w", q(k.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")), "var-init");
      g = cc11001100_hook("g", (nj(k) || q(k.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(q(k.document.querySelectorAll("iframe[id^=google_ads_iframe]"))), "assign");
      const y = cc11001100_hook("y", q(k.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")), "var-init"),
        F = cc11001100_hook("F", q(k.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), "var-init"),
        za = cc11001100_hook("za", q(k.document.querySelectorAll("div.googlepublisherpluginad")), "var-init"),
        S = cc11001100_hook("S", q(k.document.querySelectorAll("html > ins.adsbygoogle")), "var-init");
      e = cc11001100_hook("e", [].concat(q(k.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), q(k.document.querySelectorAll("body ins.adsbygoogle"))), "assign");
      m = cc11001100_hook("m", [], "assign");
      for (const [Aa, qa] of [[f.Pb, h], [f.fb, l], [f.Sb, w], [f.Qb, g], [f.Tb, y], [f.Ob, F], [f.Rb, za], [f.gb, S]]) f = cc11001100_hook("f", qa, "assign"), !1 === Aa ? m = cc11001100_hook("m", m.concat(f), "assign") : e = cc11001100_hook("e", e.concat(f), "assign");
      e = cc11001100_hook("e", oj(e), "assign");
      m = cc11001100_hook("m", oj(m), "assign");
      e = cc11001100_hook("e", e.slice(0), "assign");
      for (v of m) for (m = cc11001100_hook("m", 0, "assign"); m < e.length; m++) (v.contains(e[m]) || e[m].contains(v)) && e.splice(m, 1);
      var v = cc11001100_hook("v", e, "var-init");
      m = cc11001100_hook("m", P(k).clientHeight, "assign");
      for (k = cc11001100_hook("k", 0, "assign"); k < v.length; k++) if (!(v[k].getBoundingClientRect().top > m)) {
        v = cc11001100_hook("v", !0, "assign");
        break b;
      }
      v = cc11001100_hook("v", !1, "assign");
    }
    v = cc11001100_hook("v", v ? u.eatfAbg = cc11001100_hook("u.eatfAbg", !0, "assign") : !1, "assign");
    if (v) return !0;
    v = cc11001100_hook("v", new mg([2]), "assign");
    for (u = cc11001100_hook("u", 0, "assign"); u < c.length; u++) {
      m = cc11001100_hook("m", a, "assign");
      e = cc11001100_hook("e", c[u], "assign");
      k = cc11001100_hook("k", u, "assign");
      f = cc11001100_hook("f", b, "assign");
      g = cc11001100_hook("g", d, "assign");
      h = cc11001100_hook("h", v, "assign");
      if (D(e, tg, 4) && h.contains(t(D(e, tg, 4), 1)) && 1 === t(e, 8) && rj(e, g)) {
        m.j++;
        if (f = cc11001100_hook("f", sj(m, e, f, g), "assign")) g = cc11001100_hook("g", wi(m.h), "assign"), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = cc11001100_hook("g.numAutoAdsPlaced", 0, "assign")), D(e, O, 1) && null != Hb(D(e, O, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = cc11001100_hook("g.numPostPlacementsPlaced", 1, "assign")), null == g.placed && (g.placed = cc11001100_hook("g.placed", [], "assign")), g.numAutoAdsPlaced++, g.placed.push({
          index: cc11001100_hook("index", k, "object-key-init"),
          element: cc11001100_hook("element", f.ha, "object-key-init")
        }), md(7, [!1, m.j, !0]);
        m = cc11001100_hook("m", f, "assign");
      } else m = cc11001100_hook("m", null, "assign");
      if (m) return !0;
    }
    md(7, [!1, a.j, !1]);
    return !1;
  }
  function sj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (!rj(b, d) || 1 != t(b, 8)) return null;
    d = cc11001100_hook("d", D(b, O, 1), "assign");
    if (!d) return null;
    d = cc11001100_hook("d", si(d), "assign");
    if (!d) return null;
    d = cc11001100_hook("d", d.query(a.h.document), "assign");
    if (0 == d.length) return null;
    d = cc11001100_hook("d", d[0], "assign");
    var e = cc11001100_hook("e", vi[t(b, 2)], "var-init");
    e = cc11001100_hook("e", void 0 === e ? null : e, "assign");
    var f;
    if (!(f = cc11001100_hook("f", null == e, "assign"))) {
      a: {
        f = cc11001100_hook("f", a.h, "assign");
        switch (e) {
          case 0:
            f = cc11001100_hook("f", hj(ij(d), f), "assign");
            break a;
          case 3:
            f = cc11001100_hook("f", hj(d, f), "assign");
            break a;
          case 2:
            var g = cc11001100_hook("g", d.lastChild, "var-init");
            f = cc11001100_hook("f", hj(g ? 1 == g.nodeType ? g : ij(g) : null, f), "assign");
            break a;
        }
        f = cc11001100_hook("f", !1, "assign");
      }
      if (c = cc11001100_hook("c", !f && !(!c && 2 == e && !jj(d)), "assign")) c = cc11001100_hook("c", 1 == e || 2 == e ? d : d.parentNode, "assign"), c = cc11001100_hook("c", !(c && !Yg(c) && 0 >= c.offsetWidth), "assign");
      f = cc11001100_hook("f", !c, "assign");
    }
    if (!(c = cc11001100_hook("c", f, "assign"))) {
      c = cc11001100_hook("c", a.A, "assign");
      f = cc11001100_hook("f", t(b, 2), "assign");
      g = cc11001100_hook("g", ea(d), "assign");
      g = cc11001100_hook("g", c.i.h.get(g), "assign");
      if (!(g = cc11001100_hook("g", g ? g.contains(f) : !1, "assign"))) a: {
        if (c.h.contains(ea(d))) switch (f) {
          case 2:
          case 3:
            g = cc11001100_hook("g", !0, "assign");
            break a;
          default:
            g = cc11001100_hook("g", !1, "assign");
            break a;
        }
        for (f = cc11001100_hook("f", d.parentElement, "assign"); f;) {
          if (c.h.contains(ea(f))) {
            g = cc11001100_hook("g", !0, "assign");
            break a;
          }
          f = cc11001100_hook("f", f.parentElement, "assign");
        }
        g = cc11001100_hook("g", !1, "assign");
      }
      c = cc11001100_hook("c", g, "assign");
    }
    if (!c) {
      c = cc11001100_hook("c", a.v, "assign");
      f = cc11001100_hook("f", t(b, 2), "assign");
      a: switch (f) {
        case 1:
          g = cc11001100_hook("g", dj(d.previousElementSibling) || fj(d), "assign");
          break a;
        case 4:
          g = cc11001100_hook("g", dj(d) || fj(d.nextElementSibling), "assign");
          break a;
        case 2:
          g = cc11001100_hook("g", fj(d.firstElementChild), "assign");
          break a;
        case 3:
          g = cc11001100_hook("g", dj(d.lastElementChild), "assign");
          break a;
        default:
          throw Error("Unknown RelativePosition: " + f);
      }
      c = cc11001100_hook("c", g || bj(c, d, f), "assign");
    }
    if (c) return null;
    f = cc11001100_hook("f", D(b, Qg, 3), "assign");
    c = cc11001100_hook("c", {}, "assign");
    f && (c.Ta = cc11001100_hook("c.Ta", t(f, 1), "assign"), c.Ka = cc11001100_hook("c.Ka", t(f, 2), "assign"), c.Za = cc11001100_hook("c.Za", !!vb(f, 3), "assign"));
    f = cc11001100_hook("f", D(b, tg, 4) && t(D(b, tg, 4), 2) ? t(D(b, tg, 4), 2) : null, "assign");
    f = cc11001100_hook("f", wg(f), "assign");
    g = cc11001100_hook("g", null != Hb(b, 12) ? Hb(b, 12) : null, "assign");
    g = cc11001100_hook("g", null == g ? null : new vg(null, {
      google_ml_rank: cc11001100_hook("google_ml_rank", g, "object-key-init")
    }), "assign");
    b = cc11001100_hook("b", tj(a, b), "assign");
    b = cc11001100_hook("b", ug(a.m, f, g, b), "assign");
    f = cc11001100_hook("f", a.h, "assign");
    a = cc11001100_hook("a", a.C, "assign");
    var h = cc11001100_hook("h", f.document, "var-init"),
      l = cc11001100_hook("l", c.Za || !1, "var-init");
    g = cc11001100_hook("g", new Ec(h).createElement("DIV"), "assign");
    const k = cc11001100_hook("k", g.style, "var-init");
    k.width = cc11001100_hook("k.width", "100%", "assign");
    k.height = cc11001100_hook("k.height", "auto", "assign");
    k.clear = cc11001100_hook("k.clear", l ? "both" : "none", "assign");
    l = cc11001100_hook("l", g.style, "assign");
    l.textAlign = cc11001100_hook("l.textAlign", "center", "assign");
    c.nb && mi(l, c.nb);
    h = cc11001100_hook("h", new Ec(h).createElement("INS"), "assign");
    l = cc11001100_hook("l", h.style, "assign");
    l.display = cc11001100_hook("l.display", "block", "assign");
    l.margin = cc11001100_hook("l.margin", "auto", "assign");
    l.backgroundColor = cc11001100_hook("l.backgroundColor", "transparent", "assign");
    c.Ta && (l.marginTop = cc11001100_hook("l.marginTop", c.Ta, "assign"));
    c.Ka && (l.marginBottom = cc11001100_hook("l.marginBottom", c.Ka, "assign"));
    c.Va && mi(l, c.Va);
    g.appendChild(h);
    c = cc11001100_hook("c", {
      ra: cc11001100_hook("ra", g, "object-key-init"),
      ha: cc11001100_hook("ha", h, "object-key-init")
    }, "assign");
    c.ha.setAttribute("data-ad-format", "auto");
    g = cc11001100_hook("g", [], "assign");
    if (h = cc11001100_hook("h", b && b.La, "assign")) c.ra.className = cc11001100_hook("c.ra.className", h.join(" "), "assign");
    h = cc11001100_hook("h", c.ha, "assign");
    h.className = cc11001100_hook("h.className", "adsbygoogle", "assign");
    h.setAttribute("data-ad-client", a);
    g.length && h.setAttribute("data-ad-channel", g.join("+"));
    a: {
      try {
        var m = cc11001100_hook("m", c.ra, "var-init");
        if (T(fh)) {
          {
            const F = cc11001100_hook("F", Mh(d, e), "var-init");
            if (F.init) {
              var u = cc11001100_hook("u", F.init, "var-init");
              for (d = cc11001100_hook("d", u, "assign"); d = cc11001100_hook("d", F.ia(d), "assign");) u = cc11001100_hook("u", d, "assign");
              var v = cc11001100_hook("v", {
                anchor: cc11001100_hook("anchor", u, "object-key-init"),
                position: cc11001100_hook("position", F.ma, "object-key-init")
              }, "var-init");
            } else v = cc11001100_hook("v", {
              anchor: cc11001100_hook("anchor", d, "object-key-init"),
              position: cc11001100_hook("position", e, "object-key-init")
            }, "assign");
          }
          m["google-ama-order-assurance"] = cc11001100_hook("m[\"google-ama-order-assurance\"]", 0, "assign");
          Lh(m, v.anchor, v.position);
        } else Lh(m, d, e);
        b: {
          var w = cc11001100_hook("w", c.ha, "var-init");
          w.dataset.adsbygoogleStatus = cc11001100_hook("w.dataset.adsbygoogleStatus", "reserved", "assign");
          w.className += cc11001100_hook("w.className", " adsbygoogle-noablate", "assign");
          m = cc11001100_hook("m", {
            element: cc11001100_hook("element", w, "object-key-init")
          }, "assign");
          var y = cc11001100_hook("y", b && b.Qa, "var-init");
          if (w.hasAttribute("data-pub-vars")) {
            try {
              y = cc11001100_hook("y", JSON.parse(w.getAttribute("data-pub-vars")), "assign");
            } catch (F) {
              break b;
            }
            w.removeAttribute("data-pub-vars");
          }
          y && (m.params = cc11001100_hook("m.params", y, "assign"));
          (f.adsbygoogle = cc11001100_hook("f.adsbygoogle", f.adsbygoogle || [], "assign")).push(m);
        }
      } catch (F) {
        (w = cc11001100_hook("w", c.ra, "assign")) && w.parentNode && (y = cc11001100_hook("y", w.parentNode, "assign"), y.removeChild(w), Yg(y) && (y.style.display = cc11001100_hook("y.style.display", y.getAttribute("data-init-display") || "none", "assign")));
        w = cc11001100_hook("w", !1, "assign");
        break a;
      }
      w = cc11001100_hook("w", !0, "assign");
    }
    return w ? c : null;
  }
  function tj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return jg(lg(zi(b).map(xg), c => {
      wi(a.h).exception = cc11001100_hook("wi(a.h).exception", c, "assign");
    }));
  }
  const uj = cc11001100_hook("uj", class {
    constructor(a, b, c, d, e) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.i = cc11001100_hook("this.i", c, "assign");
      this.m = cc11001100_hook("this.m", e || null, "assign");
      this.A = cc11001100_hook("this.A", (this.B = cc11001100_hook("this.B", d, "assign")) ? Vi(a.document, E(d, Ii, 5)) : Vi(a.document, []), "assign");
      this.v = cc11001100_hook("this.v", new gj(), "assign");
      this.j = cc11001100_hook("this.j", 0, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
  }, "var-init");
  function qj(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    a && ub(a, 6, 0, !1, gb(a.u)).forEach(c => {
      b[c] = cc11001100_hook("b[c]", !0, "assign");
    });
    return b;
  }
  function rj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && void 0 !== Bb(a, tg, 4, !1) && b[t(D(a, tg, 4), 2)] ? !1 : !0;
  }
  ;
  var vj = cc11001100_hook("vj", ac(class extends I {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  class U extends Error {
    constructor(a = "") {
      super();
      this.name = cc11001100_hook("this.name", "TagError", "assign");
      this.message = cc11001100_hook("this.message", a ? "adsbygoogle.push() error: " + a : "", "assign");
      Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = cc11001100_hook("this.stack", Error().stack || "", "assign");
    }
  }
  ;
  let wj, V;
  const xj = cc11001100_hook("xj", new Td(n), "var-init");
  var yj = cc11001100_hook("yj", a => {
    null != a && (n.google_measure_js_timing = cc11001100_hook("n.google_measure_js_timing", a, "assign"));
    n.google_measure_js_timing || Sd(xj);
  }, "var-init");
  (a => {
    wj = cc11001100_hook("wj", a || new Id(), "assign");
    "number" !== typeof n.google_srt && (n.google_srt = cc11001100_hook("n.google_srt", Math.random(), "assign"));
    Gd(wj, n.google_srt);
    V = cc11001100_hook("V", new Vd(wj, xj), "assign");
    V.l(!0);
    "complete" == n.document.readyState ? yj() : xj.h && lc(n, "load", () => {
      yj();
    });
  })();
  var zj = cc11001100_hook("zj", (a, b, c) => V.fa(a, b, c), "var-init"),
    Aj = cc11001100_hook("Aj", (a, b, c) => {
      const d = cc11001100_hook("d", M(Sf).i(), "var-init");
      !b.eid && d.length && (b.eid = cc11001100_hook("b.eid", d.toString(), "assign"));
      Hd(wj, a, b, !0, c);
    }, "var-init"),
    Bj = cc11001100_hook("Bj", (a, b) => {
      V.aa(a, b);
    }, "var-init"),
    Cj = cc11001100_hook("Cj", (a, b, c, d) => {
      let e;
      wd(b) ? e = cc11001100_hook("e", b.msg || Ud(b.error), "assign") : e = cc11001100_hook("e", Ud(b), "assign");
      return 0 == e.indexOf("TagError") ? (c = cc11001100_hook("c", b instanceof vd ? b.error : b, "assign"), c.pbr || (c.pbr = cc11001100_hook("c.pbr", !0, "assign"), V.I(a, b, .1, d, "puberror")), !1) : V.I(a, b, c, d);
    }, "var-init");
  function Dj(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b = cc11001100_hook("b", a.localStorage.getItem("google_auto_fc_cmp_setting") || null, "var-init");
    } catch (d) {
      b = cc11001100_hook("b", null, "assign");
    }
    const c = cc11001100_hook("c", b, "var-init");
    return c ? ig(() => vj(c)) : fg(null);
  }
  ;
  function Ej() {
    if (Fj) return Fj;
    const a = cc11001100_hook("a", od() || window, "var-init"),
      b = cc11001100_hook("b", a.google_persistent_state_async, "var-init");
    return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Fj = cc11001100_hook("Fj", b, "assign") : a.google_persistent_state_async = cc11001100_hook("a.google_persistent_state_async", Fj = cc11001100_hook("Fj", new Gj(), "assign"), "assign");
  }
  function Hj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Ij[a] || "google_ps_" + a;
  }
  function Jj(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", Hj(b), "assign");
    a = cc11001100_hook("a", a.S, "assign");
    const d = cc11001100_hook("d", a[b], "var-init");
    return void 0 === d ? (a[b] = cc11001100_hook("a[b]", c(), "assign"), a[b]) : d;
  }
  function Kj(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Jj(a, b, () => c);
  }
  class Gj {
    constructor() {
      this.S = cc11001100_hook("this.S", {}, "assign");
    }
  }
  var Fj = cc11001100_hook("Fj", null, "var-init");
  const Ij = cc11001100_hook("Ij", {
    [8]: cc11001100_hook(8, "google_prev_ad_formats_by_region", "object-key-init"),
    [9]: cc11001100_hook(9, "google_prev_ad_slotnames_by_region", "object-key-init")
  }, "var-init");
  function Lj(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a || {
      cookie: cc11001100_hook("cookie", "", "object-key-init")
    }, "assign");
  }
  Lj.prototype.set = cc11001100_hook("Lj.prototype.set", function (a, b, c) {
    let d,
      e,
      f,
      g = cc11001100_hook("g", !1, "var-init"),
      h;
    "object" === typeof c && (h = cc11001100_hook("h", c.Wb, "assign"), g = cc11001100_hook("g", c.Xb || !1, "assign"), f = cc11001100_hook("f", c.domain || void 0, "assign"), e = cc11001100_hook("e", c.path || void 0, "assign"), d = cc11001100_hook("d", c.lb, "assign"));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = cc11001100_hook("d", -1, "assign"));
    this.h.cookie = cc11001100_hook("this.h.cookie", a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1E3 * d).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : ""), "assign");
  }, "assign");
  Lj.prototype.get = cc11001100_hook("Lj.prototype.get", function (a, b) {
    const c = cc11001100_hook("c", a + "=", "var-init"),
      d = cc11001100_hook("d", (this.h.cookie || "").split(";"), "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"), f; e < d.length; e++) {
      f = cc11001100_hook("f", pa(d[e]), "assign");
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  }, "assign");
  Lj.prototype.isEmpty = cc11001100_hook("Lj.prototype.isEmpty", function () {
    return !this.h.cookie;
  }, "assign");
  Lj.prototype.clear = cc11001100_hook("Lj.prototype.clear", function () {
    var a = cc11001100_hook("a", (this.h.cookie || "").split(";"), "var-init");
    const b = cc11001100_hook("b", [], "var-init");
    var c = cc11001100_hook("c", [], "var-init");
    let d, e;
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) e = cc11001100_hook("e", pa(a[f]), "assign"), d = cc11001100_hook("d", e.indexOf("="), "assign"), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (c = cc11001100_hook("c", b.length - 1, "assign"); 0 <= c; c--) a = cc11001100_hook("a", b[c], "assign"), this.get(a), this.set(a, "", {
      lb: cc11001100_hook("lb", 0, "object-key-init"),
      path: cc11001100_hook("path", void 0, "object-key-init"),
      domain: cc11001100_hook("domain", void 0, "object-key-init")
    });
  }, "assign");
  function Mj(a, b = window) {
    cc11001100_hook("a", a, "function-parameter");
    if (vb(a, 5)) try {
      return b.localStorage;
    } catch {}
    return null;
  }
  ;
  function Nj(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new Oj(), "var-init");
    return x(b, 5, a);
  }
  var Oj = cc11001100_hook("Oj", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  const Pj = cc11001100_hook("Pj", a => {
    void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = cc11001100_hook("a.addtlConsent", void 0, "assign"));
    void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = cc11001100_hook("a.gdprApplies", void 0, "assign"));
    return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
  }, "var-init");
  function Qj(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = cc11001100_hook("a.internalErrorState", Pj(a), "assign"));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (jd({
      e: cc11001100_hook("e", String(a.internalErrorState), "object-key-init")
    }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
  }
  function Rj(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.i) return a.i;
    a.i = cc11001100_hook("a.i", Yc(a.l, "__tcfapiLocator"), "assign");
    return a.i;
  }
  function Sj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "function" === typeof a.l.__tcfapi || null != Rj(a);
  }
  function Tj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    c || (c = cc11001100_hook("c", () => {}, "assign"));
    if ("function" === typeof a.l.__tcfapi) a = cc11001100_hook("a", a.l.__tcfapi, "assign"), a(b, 2, c, d);else if (Rj(a)) {
      Uj(a);
      const e = cc11001100_hook("e", ++a.J, "var-init");
      a.v[e] = cc11001100_hook("a.v[e]", c, "assign");
      a.i && a.i.postMessage({
        __tcfapiCall: {
          command: cc11001100_hook("command", b, "object-key-init"),
          version: cc11001100_hook("version", 2, "object-key-init"),
          callId: cc11001100_hook("callId", e, "object-key-init"),
          parameter: cc11001100_hook("parameter", d, "object-key-init")
        }
      }, "*");
    } else c({}, !1);
  }
  function Uj(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m || (a.m = cc11001100_hook("a.m", b => {
      try {
        var c = cc11001100_hook("c", ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn, "var-init");
        a.v[c.callId](c.returnValue, c.success);
      } catch (d) {}
    }, "assign"), lc(a.l, "message", a.m));
  }
  class Vj extends bf {
    constructor(a) {
      var b = cc11001100_hook("b", {}, "var-init");
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.v = cc11001100_hook("this.v", {}, "assign");
      this.J = cc11001100_hook("this.J", 0, "assign");
      this.C = cc11001100_hook("this.C", b.Sa ?? 500, "assign");
      this.B = cc11001100_hook("this.B", b.Nb ?? !1, "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
    }
    h() {
      this.v = cc11001100_hook("this.v", {}, "assign");
      this.m && (mc(this.l, "message", this.m), delete this.m);
      delete this.v;
      delete this.l;
      delete this.i;
      super.h();
    }
    addEventListener(a) {
      let b = cc11001100_hook("b", {
        internalBlockOnErrors: cc11001100_hook("internalBlockOnErrors", this.B, "object-key-init")
      }, "var-init");
      const c = cc11001100_hook("c", kc(() => a(b)), "var-init");
      let d = cc11001100_hook("d", 0, "var-init");
      -1 !== this.C && (d = cc11001100_hook("d", setTimeout(() => {
        b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign");
        b.internalErrorState = cc11001100_hook("b.internalErrorState", 1, "assign");
        c();
      }, this.C), "assign"));
      const e = cc11001100_hook("e", (f, g) => {
        clearTimeout(d);
        f ? (b = cc11001100_hook("b", f, "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", Pj(b), "assign"), b.internalBlockOnErrors = cc11001100_hook("b.internalBlockOnErrors", this.B, "assign"), g && 0 === b.internalErrorState || (b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), g || (b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign")))) : (b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign"));
        a(b);
      }, "var-init");
      try {
        Tj(this, "addEventListener", e);
      } catch (f) {
        b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign"), d && (clearTimeout(d), d = cc11001100_hook("d", 0, "assign")), c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && Tj(this, "removeEventListener", null, a.listenerId);
    }
  }
  ;
  var ak = cc11001100_hook("ak", ({
      s: a,
      W: b,
      Sa: c,
      callback: d,
      ja: e = !1,
      ka: f = !1
    }) => {
      b = cc11001100_hook("b", Wj({
        s: cc11001100_hook("s", a, "object-key-init"),
        W: cc11001100_hook("W", b, "object-key-init"),
        ja: cc11001100_hook("ja", e, "object-key-init"),
        ka: cc11001100_hook("ka", f, "object-key-init")
      }), "assign");
      null != b.h || "tcunav" != b.i.message ? d(b) : Xj(a, c).then(g => g.map(Yj)).then(g => g.map(h => Zj(a, h))).then(d);
    }, "var-init"),
    Wj = cc11001100_hook("Wj", ({
      s: a,
      W: b,
      ja: c = !1,
      ka: d = !1
    }) => {
      if (!bk({
        s: cc11001100_hook("s", a, "object-key-init"),
        W: cc11001100_hook("W", b, "object-key-init"),
        ja: cc11001100_hook("ja", c, "object-key-init"),
        ka: cc11001100_hook("ka", d, "object-key-init")
      })) return Zj(a, Nj(!0));
      b = cc11001100_hook("b", Ej(), "assign");
      return (b = cc11001100_hook("b", Kj(b, 24), "assign")) ? Zj(a, Yj(b)) : hg(Error("tcunav"));
    }, "var-init");
  function bk({
    s: a,
    W: b,
    ja: c,
    ka: d
  }) {
    if (!(d = cc11001100_hook("d", !d && Sj(new Vj(a)), "assign"))) {
      if (c = cc11001100_hook("c", !c, "assign")) {
        if (b) {
          a = cc11001100_hook("a", Dj(a), "assign");
          if (null != a.h) {
            if ((a = cc11001100_hook("a", a.h.value, "assign")) && null != t(a, 1)) b: switch (a = cc11001100_hook("a", t(a, 1), "assign"), a) {
              case 1:
                a = cc11001100_hook("a", !0, "assign");
                break b;
              default:
                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
            } else a = cc11001100_hook("a", !1, "assign");
          } else V.I(806, a.i, void 0, void 0), a = cc11001100_hook("a", !1, "assign");
          b = cc11001100_hook("b", !a, "assign");
        }
        c = cc11001100_hook("c", b, "assign");
      }
      d = cc11001100_hook("d", c, "assign");
    }
    return d ? !0 : !1;
  }
  function Xj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Promise.race([ck(), dk(a, b)]);
  }
  function ck() {
    return new Promise(a => {
      var b = cc11001100_hook("b", Ej(), "var-init");
      a = cc11001100_hook("a", {
        resolve: cc11001100_hook("resolve", a, "object-key-init")
      }, "assign");
      const c = cc11001100_hook("c", Kj(b, 25, []), "var-init");
      c.push(a);
      b.S[Hj(25)] = cc11001100_hook("b.S[Hj(25)]", c, "assign");
    }).then(ek);
  }
  function dk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new Promise(c => {
      a.setTimeout(c, b, hg(Error("tcto")));
    });
  }
  function ek(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? fg(a) : hg(Error("tcnull"));
  }
  function Yj(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (Qj(a)) {
      if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
        b: {
          if (a.publisher && a.publisher.restrictions) {
            var b = cc11001100_hook("b", a.publisher.restrictions["1"], "var-init");
            if (void 0 !== b) {
              b = cc11001100_hook("b", b["755"], "assign");
              break b;
            }
          }
          b = cc11001100_hook("b", void 0, "assign");
        }
        0 === b ? a = cc11001100_hook("a", !1, "assign") : a.purpose && a.vendor ? (b = cc11001100_hook("b", a.vendor.consents, "assign"), (b = cc11001100_hook("b", !(!b || !b["755"]), "assign")) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = cc11001100_hook("a", !0, "assign") : (b && (a = cc11001100_hook("a", a.purpose.consents, "assign"), b = cc11001100_hook("b", !(!a || !a["1"]), "assign")), a = cc11001100_hook("a", b, "assign"))) : a = cc11001100_hook("a", !0, "assign");
      } else a = cc11001100_hook("a", !0, "assign");
    } else a = cc11001100_hook("a", !1, "assign");
    return Nj(a);
  }
  function Zj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (a = cc11001100_hook("a", Mj(b, a), "assign")) ? fg(a) : hg(Error("unav"));
  }
  ;
  var gk = cc11001100_hook("gk", class extends I {
      constructor(a) {
        super(a, -1, fk);
      }
    }, "var-init"),
    fk = cc11001100_hook("fk", [1, 2, 3], "var-init");
  var ik = cc11001100_hook("ik", class extends I {
      constructor(a) {
        super(a, -1, hk);
      }
    }, "var-init"),
    hk = cc11001100_hook("hk", [1, 2, 3], "var-init");
  var jk = cc11001100_hook("jk", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return D(this, gk, 2);
    }
    l() {
      return D(this, ik, 3);
    }
  }, "var-init");
  const kk = cc11001100_hook("kk", class {
    constructor(a) {
      this.exception = cc11001100_hook("this.exception", a, "assign");
    }
  }, "var-init");
  function lk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      var c = cc11001100_hook("c", a.i, "var-init"),
        d = cc11001100_hook("d", c.resolve, "var-init"),
        e = cc11001100_hook("e", a.h, "var-init");
      wi(e.h);
      E(e.i, Sg, 1);
      d.call(c, new kk(b));
    } catch (f) {
      a = cc11001100_hook("a", a.i, "assign"), b = cc11001100_hook("b", f, "assign"), Yf(a), a.h = cc11001100_hook("a.h", 2, "assign"), a.j = cc11001100_hook("a.j", b, "assign"), $f(a.i);
    }
  }
  var mk = cc11001100_hook("mk", class {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.h = cc11001100_hook("this.h", b, "assign");
      this.i = cc11001100_hook("this.i", c, "assign");
    }
    start() {
      this.l();
    }
    l() {
      try {
        switch (this.j.document.readyState) {
          case "complete":
          case "interactive":
            pj(this.h, !0);
            lk(this);
            break;
          default:
            pj(this.h, !1) ? lk(this) : this.j.setTimeout(ka(this.l, this), 100);
        }
      } catch (a) {
        lk(this, a);
      }
    }
  }, "var-init");
  var nk = cc11001100_hook("nk", "a".charCodeAt(), "var-init"),
    ok = cc11001100_hook("ok", pc(Wf), "var-init"),
    pk = cc11001100_hook("pk", pc(Xf), "var-init");
  function W(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
    const c = cc11001100_hook("c", a.i.substring(a.h, a.h + b), "var-init");
    a.h += cc11001100_hook("a.h", b, "assign");
    return parseInt(c, 2);
  }
  function qk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String.fromCharCode(nk + W(a, 6)) + String.fromCharCode(nk + W(a, 6));
  }
  function rk(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", W(a, 12), "var-init");
    const c = cc11001100_hook("c", [], "var-init");
    for (; b--;) {
      var d = cc11001100_hook("d", !0 === !!W(a, 1), "var-init"),
        e = cc11001100_hook("e", W(a, 16), "var-init");
      if (d) for (d = cc11001100_hook("d", W(a, 16), "assign"); e <= d; e++) c.push(e);else c.push(e);
    }
    c.sort((f, g) => f - g);
    return c;
  }
  function sk(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < b; e++) if (W(a, 1)) {
      const f = cc11001100_hook("f", e + 1, "var-init");
      if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
      d.push(f);
    }
    return d;
  }
  function tk(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", W(a, 16), "var-init");
    return !0 === !!W(a, 1) ? (a = cc11001100_hook("a", rk(a), "assign"), a.forEach(c => {
      if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
    }), a) : sk(a, b);
  }
  class uk {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.i = cc11001100_hook("this.i", a, "assign");
      this.h = cc11001100_hook("this.h", 0, "assign");
    }
  }
  ;
  var wk = cc11001100_hook("wk", (a, b) => {
    try {
      var c = cc11001100_hook("c", Xa(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join(""), "var-init");
      const d = cc11001100_hook("d", new uk(c), "var-init");
      c = cc11001100_hook("c", {}, "assign");
      c.tcString = cc11001100_hook("c.tcString", a, "assign");
      c.gdprApplies = cc11001100_hook("c.gdprApplies", !0, "assign");
      d.h += cc11001100_hook("d.h", 78, "assign");
      c.cmpId = cc11001100_hook("c.cmpId", W(d, 12), "assign");
      c.cmpVersion = cc11001100_hook("c.cmpVersion", W(d, 12), "assign");
      d.h += cc11001100_hook("d.h", 30, "assign");
      c.tcfPolicyVersion = cc11001100_hook("c.tcfPolicyVersion", W(d, 6), "assign");
      c.isServiceSpecific = cc11001100_hook("c.isServiceSpecific", !!W(d, 1), "assign");
      c.useNonStandardStacks = cc11001100_hook("c.useNonStandardStacks", !!W(d, 1), "assign");
      c.specialFeatureOptins = cc11001100_hook("c.specialFeatureOptins", vk(sk(d, 12, pk), pk), "assign");
      c.purpose = cc11001100_hook("c.purpose", {
        consents: cc11001100_hook("consents", vk(sk(d, 24, ok), ok), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", vk(sk(d, 24, ok), ok), "object-key-init")
      }, "assign");
      c.purposeOneTreatment = cc11001100_hook("c.purposeOneTreatment", !!W(d, 1), "assign");
      c.publisherCC = cc11001100_hook("c.publisherCC", qk(d), "assign");
      c.vendor = cc11001100_hook("c.vendor", {
        consents: cc11001100_hook("consents", vk(tk(d), b), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", vk(tk(d), b), "object-key-init")
      }, "assign");
      return c;
    } catch (d) {
      return null;
    }
  }, "var-init");
  const vk = cc11001100_hook("vk", (a, b) => {
    const c = cc11001100_hook("c", {}, "var-init");
    if (Array.isArray(b) && 0 !== b.length) for (const d of b) c[d] = cc11001100_hook("c[d]", -1 !== a.indexOf(d), "assign");else for (const d of a) c[d] = cc11001100_hook("c[d]", !0, "assign");
    delete c[0];
    return c;
  }, "var-init");
  var xk = cc11001100_hook("xk", class {
    constructor() {
      this.h = cc11001100_hook("this.h", {}, "assign");
    }
  }, "var-init");
  var yk = cc11001100_hook("yk", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var zk = cc11001100_hook("zk", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var Ak = cc11001100_hook("Ak", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    Bk = cc11001100_hook("Bk", [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27], "var-init");
  var Ck = cc11001100_hook("Ck", class {}, "var-init");
  var Dk = cc11001100_hook("Dk", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ek = cc11001100_hook("Ek", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Gk = cc11001100_hook("Gk", ac(class extends I {
      constructor(a) {
        super(a, -1, Fk);
      }
    }), "var-init"),
    Fk = cc11001100_hook("Fk", [7], "var-init");
  var Hk = cc11001100_hook("Hk", new class {
    constructor() {
      this.key = cc11001100_hook("this.key", "45369554", "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", !1, "assign");
      this.valueType = cc11001100_hook("this.valueType", "boolean", "assign");
    }
  }(), "var-init");
  var Ik = cc11001100_hook("Ik", class extends xk {
      constructor() {
        super();
        var a = cc11001100_hook("a", n.__fcexpdef || "", "var-init");
        try {
          const b = cc11001100_hook("b", JSON.parse(a)[0], "var-init");
          a = cc11001100_hook("a", "", "assign");
          for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) a += cc11001100_hook("a", String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10)), "assign");
          this.h = cc11001100_hook("this.h", JSON.parse(a), "assign");
        } catch (b) {}
      }
    }, "var-init"),
    Jk;
  function Kk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Lk(a), "assign")) ? D(a, Ek, 4) : null;
  }
  function Lk(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", new Lj(a).get("FCCDCF", ""), "assign")) {
      if (a.startsWith("%")) try {
        var b = cc11001100_hook("b", decodeURIComponent(a), "var-init");
      } catch (c) {
        Mk(1), b = cc11001100_hook("b", null, "assign");
      } else b = cc11001100_hook("b", a, "assign");
    } else b = cc11001100_hook("b", null, "assign");
    try {
      return b ? Gk(b) : null;
    } catch (c) {
      return Mk(2), null;
    }
  }
  function Mk(a) {
    cc11001100_hook("a", a, "function-parameter");
    new Ck();
    var b = cc11001100_hook("b", new yk(), "var-init");
    a = cc11001100_hook("a", x(b, 7, a), "assign");
    b = cc11001100_hook("b", new zk(), "assign");
    a = cc11001100_hook("a", Eb(b, 1, a), "assign");
    b = cc11001100_hook("b", new Ak(), "assign");
    Fb(b, 22, Bk, a);
    Jk || (Jk = cc11001100_hook("Jk", new Ik(), "assign"));
    a = cc11001100_hook("a", Jk.h[Hk.key], "assign");
    if ("proto" === Hk.valueType) try {
      JSON.parse(a);
    } catch (c) {}
  }
  ;
  pc(Wf).map(a => Number(a));
  pc(Xf).map(a => Number(a));
  function Nk(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.__tcfapiPostMessageReady || Ok(new Pk(a));
  }
  function Ok(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.i = cc11001100_hook("a.i", b => {
      const c = cc11001100_hook("c", "string" == typeof b.data, "var-init");
      let d;
      try {
        d = cc11001100_hook("d", c ? JSON.parse(b.data) : b.data, "assign");
      } catch (f) {
        return;
      }
      const e = cc11001100_hook("e", d.__tcfapiCall, "var-init");
      !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, (f, g) => {
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
    a.h.addEventListener("message", a.i);
    a.h.__tcfapiPostMessageReady = cc11001100_hook("a.h.__tcfapiPostMessageReady", !0, "assign");
  }
  var Pk = cc11001100_hook("Pk", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
    }
  }, "var-init");
  var Qk = cc11001100_hook("Qk", (a, b) => {
    const c = cc11001100_hook("c", a.document, "var-init"),
      d = cc11001100_hook("d", () => {
        if (!a.frames[b]) if (c.body) {
          const e = cc11001100_hook("e", Nc("IFRAME", c), "var-init");
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
  function Rk() {
    var a = cc11001100_hook("a", window, "var-init"),
      b = cc11001100_hook("b", T(lh), "var-init");
    a.__uspapi || a.frames.__uspapiLocator || (a = cc11001100_hook("a", new Sk(a), "assign"), Tk(a), b && Uk(a));
  }
  function Tk(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = cc11001100_hook("a.h.__uspapiManager", "fc", "assign"), Qk(a.h, "__uspapiLocator"), ma("__uspapi", (...b) => Vk(a, ...b)));
  }
  function Uk(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = cc11001100_hook("a.h.__tcfapiManager", "fc", "assign"), Qk(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = cc11001100_hook("a.h.__tcfapiEventListeners", a.h.__tcfapiEventListeners || [], "assign"), ma("__tcfapi", (...b) => Wk(a, ...b)), Nk(a.h));
  }
  function Vk(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    "function" === typeof d && "getUSPData" === b && d({
      version: cc11001100_hook("version", 1, "object-key-init"),
      uspString: cc11001100_hook("uspString", a.m, "object-key-init")
    }, !0);
  }
  function Wk(a, b, c, d, e = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if ("function" === typeof d) if (c && 2 !== c) d(null, !1);else switch (c = cc11001100_hook("c", a.h.__tcfapiEventListeners, "assign"), b) {
      case "getTCData":
        !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(Xk(a, e, null), !0) : d(null, !1);
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
        d(Xk(a, null, b - 1), !0);
        break;
      case "removeEventListener":
        c[e] ? (c[e] = cc11001100_hook("c[e]", null, "assign"), d(!0)) : d(!1);
        break;
      case "getInAppTCData":
      case "getVendorList":
        d(null, !1);
    }
  }
  function Xk(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a.j) return null;
    b = cc11001100_hook("b", wk(a.j, b), "assign");
    b.addtlConsent = cc11001100_hook("b.addtlConsent", null != a.l ? a.l : void 0, "assign");
    b.cmpStatus = cc11001100_hook("b.cmpStatus", "loaded", "assign");
    b.eventStatus = cc11001100_hook("b.eventStatus", "tcloaded", "assign");
    null != c && (b.listenerId = cc11001100_hook("b.listenerId", c, "assign"));
    return b;
  }
  class Sk {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", a.document, "assign");
      this.m = cc11001100_hook("this.m", (a = cc11001100_hook("a", (a = cc11001100_hook("a", Lk(this.i), "assign")) ? D(a, Dk, 5) || null : null, "assign")) ? t(a, 2) : null, "assign");
      this.j = cc11001100_hook("this.j", (a = cc11001100_hook("a", Kk(this.i), "assign")) && null != t(a, 1) ? t(a, 1) : null, "assign");
      this.l = cc11001100_hook("this.l", (a = cc11001100_hook("a", Kk(this.i), "assign")) && null != t(a, 2) ? t(a, 2) : null, "assign");
    }
  }
  ;
  const Yk = cc11001100_hook("Yk", {
    google_ad_channel: cc11001100_hook("google_ad_channel", !0, "object-key-init"),
    google_ad_host: cc11001100_hook("google_ad_host", !0, "object-key-init")
  }, "var-init");
  var Zk = cc11001100_hook("Zk", (a, b) => {
      a.location.href && a.location.href.substring && (b.url = cc11001100_hook("b.url", a.location.href.substring(0, 200), "assign"));
      Aj("ama", b, .01);
    }, "var-init"),
    $k = cc11001100_hook("$k", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      J(Yk, (c, d) => {
        d in a && (b[d] = cc11001100_hook("b[d]", a[d], "assign"));
      });
      return b;
    }, "var-init");
  const al = cc11001100_hook("al", a => {
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
    bl = cc11001100_hook("bl", a => {
      let b = cc11001100_hook("b", "", "var-init");
      const c = cc11001100_hook("c", /[/%?&=]/, "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; ++d) {
        const e = cc11001100_hook("e", a[d], "var-init");
        b = cc11001100_hook("b", e.match(c) ? b + e : b + encodeURIComponent(e), "assign");
      }
      return b;
    }, "var-init");
  var cl = cc11001100_hook("cl", a => {
      a = cc11001100_hook("a", ub(a, 2, 0, !1, gb(a.u)), "assign");
      if (!a) return !1;
      for (let b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) if (1 == a[b]) return !0;
      return !1;
    }, "var-init"),
    el = cc11001100_hook("el", (a, b) => {
      a = cc11001100_hook("a", bl(al(a.location.pathname)).replace(/(^\/)|(\/$)/g, ""), "assign");
      const c = cc11001100_hook("c", Tc(a), "var-init"),
        d = cc11001100_hook("d", dl(a), "var-init");
      return b.find(e => {
        const f = cc11001100_hook("f", void 0 !== Bb(e, Ei, 7, !1) ? Ib(D(e, Ei, 7), 1) : Ib(e, 1), "var-init");
        e = cc11001100_hook("e", void 0 !== Bb(e, Ei, 7, !1) ? t(D(e, Ei, 7), 2) : 2, "assign");
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
  const dl = cc11001100_hook("dl", a => {
    const b = cc11001100_hook("b", {}, "var-init");
    for (;;) {
      b[Tc(a)] = cc11001100_hook("b[Tc(a)]", !0, "assign");
      if (!a) return b;
      a = cc11001100_hook("a", a.substring(0, a.lastIndexOf("/")), "assign");
    }
  }, "var-init");
  var fl = cc11001100_hook("fl", a => {
    a = cc11001100_hook("a", D(a, Di, 3), "assign");
    return !a || t(a, 1) <= Date.now() ? !1 : !0;
  }, "var-init");
  function gl(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (T(dh)) var b = cc11001100_hook("b", null, "var-init");else try {
      b = cc11001100_hook("b", a.getItem("google_ama_config"), "assign");
    } catch (d) {
      b = cc11001100_hook("b", null, "assign");
    }
    try {
      var c = cc11001100_hook("c", b ? Ti(b) : null, "var-init");
    } catch (d) {
      c = cc11001100_hook("c", null, "assign");
    }
    return c;
  }
  ;
  var hl = cc11001100_hook("hl", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return D(this, jk, 2);
    }
    l() {
      return A(this, 3);
    }
  }, "var-init");
  var jl = cc11001100_hook("jl", class extends I {
      constructor(a) {
        super(a, -1, il);
      }
      i() {
        return wb(this, 1, rb);
      }
      l() {
        return D(this, hl, 2);
      }
    }, "var-init"),
    il = cc11001100_hook("il", [1], "var-init");
  var ll = cc11001100_hook("ll", class extends I {
      constructor(a) {
        super(a, -1, kl);
      }
      getId() {
        return B(t(this, 1), 0);
      }
    }, "var-init"),
    kl = cc11001100_hook("kl", [2], "var-init");
  var nl = cc11001100_hook("nl", class extends I {
      constructor(a) {
        super(a, -1, ml);
      }
    }, "var-init"),
    ml = cc11001100_hook("ml", [2], "var-init");
  var pl = cc11001100_hook("pl", class extends I {
      constructor(a) {
        super(a, -1, ol);
      }
    }, "var-init"),
    ol = cc11001100_hook("ol", [2], "var-init");
  var ql = cc11001100_hook("ql", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return B(t(this, 2), 0);
    }
    l() {
      return B(t(this, 4), 0);
    }
    m() {
      return A(this, 3);
    }
  }, "var-init");
  var sl = cc11001100_hook("sl", class extends I {
      constructor(a) {
        super(a, -1, rl);
      }
    }, "var-init"),
    rl = cc11001100_hook("rl", [1, 4, 2, 3], "var-init");
  var vl = cc11001100_hook("vl", class extends I {
      constructor(a) {
        super(a, -1, tl);
      }
      l() {
        return Kb(this, hl, 13, ul);
      }
      A() {
        return void 0 !== Bb(this, hl, Ab(this, ul, 13));
      }
      i() {
        return Kb(this, jl, 14, ul);
      }
      m() {
        return void 0 !== Bb(this, jl, Ab(this, ul, 14));
      }
    }, "var-init"),
    tl = cc11001100_hook("tl", [19], "var-init"),
    ul = cc11001100_hook("ul", [13, 14], "var-init");
  let wl = cc11001100_hook("wl", void 0, "var-init");
  var zl = cc11001100_hook("zl", (a, b, c = "", d = null) => 1 === b && xl(c, d) ? !0 : yl(a, c, e => Oa(E(e, bc, 2), f => t(f, 1) === b)), "var-init"),
    xl = cc11001100_hook("xl", (a, b) => b ? b.A() ? A(b.l(), 1) : b.m() && "" !== a && 1 === b.i().i().length && b.i().i()[0] === a ? A(b.i().l(), 1) : !1 : !1, "var-init"),
    Al = cc11001100_hook("Al", (a, b) => {
      b = cc11001100_hook("b", B(t(b, 18), 0), "assign");
      -1 !== b && (a.tmod = cc11001100_hook("a.tmod", b, "assign"));
    }, "var-init"),
    Cl = cc11001100_hook("Cl", a => {
      const b = cc11001100_hook("b", Lc(L) || L, "var-init");
      return Bl(b, a) ? !0 : yl(L, "", c => Oa(ub(c, 3, 0, !1, gb(c.u)), d => d === a));
    }, "var-init");
  function Bl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", (a = cc11001100_hook("a", (a = cc11001100_hook("a", a.location && a.location.hash, "assign")) && a.match(/forced_clientside_labs=([\d,]+)/), "assign")) && a[1], "assign");
    return !!a && Ra(a.split(","), b.toString());
  }
  function yl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Lc(a) || a, "assign");
    const d = cc11001100_hook("d", Dl(a), "var-init");
    b && (b = cc11001100_hook("b", ud(String(b)), "assign"));
    return oc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e));
  }
  function Dl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", El(a), "assign");
    const b = cc11001100_hook("b", {}, "var-init");
    J(a, (c, d) => {
      try {
        const e = cc11001100_hook("e", new ec(c), "var-init");
        b[d] = cc11001100_hook("b[d]", e, "assign");
      } catch (e) {}
    });
    return b;
  }
  var El = cc11001100_hook("El", a => T($g) ? ($b(wl, Yb), a = cc11001100_hook("a", Wj({
    s: cc11001100_hook("s", a, "object-key-init"),
    W: cc11001100_hook("W", wl, "object-key-init")
  }), "assign"), null != a.h ? Fl(a.h.value) : {}) : Fl(a.localStorage), "var-init");
  function Fl(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.getItem("google_adsense_settings"), "var-init");
      if (!b) return {};
      const c = cc11001100_hook("c", JSON.parse(b), "var-init");
      return c !== Object(c) ? {} : nc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d));
    } catch (b) {
      return {};
    }
  }
  function Gl(a) {
    cc11001100_hook("a", a, "function-parameter");
    T(mh) && Aj("atf_ad_settings_from_ppabg", {
      p_s: cc11001100_hook("p_s", a, "object-key-init")
    }, .01);
  }
  const Hl = cc11001100_hook("Hl", a => !!a && (0 < E(a, Sg, 1).length || T(eh) && 0 < E(a, Ng, 3).length), "var-init"),
    Il = cc11001100_hook("Il", a => {
      T(mh) && Aj("overlay_settings_from_ppabg", {
        p_s: cc11001100_hook("p_s", a, "object-key-init")
      }, .01);
    }, "var-init"),
    Jl = cc11001100_hook("Jl", a => {
      const b = cc11001100_hook("b", E(a, Li, 2), "var-init");
      return 0 == E(a, Li, 2) || !b && !el(n, b) ? ub(a, 3, 0, !1, gb(a.u)) : [];
    }, "var-init"),
    Kl = cc11001100_hook("Kl", (a, b) => {
      if (b?.A()) {
        a = cc11001100_hook("a", b?.l()?.i()?.l(), "assign");
        if (!a) return [];
        Il(!1);
        return Jl(a);
      }
      if (b?.m()) {
        const c = cc11001100_hook("c", b?.i()?.i(), "var-init");
        if (!c || 1 !== c.length || !a || c[0] !== a || G(b, 17) != n.location.host) return [];
        a = cc11001100_hook("a", b?.i()?.l()?.i()?.l(), "assign");
        if (!a) return [];
        Il(!0);
        return Jl(a);
      }
      return [];
    }, "var-init");
  var Ll = cc11001100_hook("Ll", (a, b) => {
    const c = cc11001100_hook("c", [], "var-init");
    let d = cc11001100_hook("d", [], "var-init");
    if (T(jh) || T(ih) || T(kh)) d = cc11001100_hook("d", Kl(a, b), "assign");
    T(jh) && !d.includes(1) && c.push(1);
    T(ih) && !d.includes(2) && c.push(2);
    T(kh) && !d.includes(7) && c.push(7);
    return c;
  }, "var-init");
  function X(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_ad_modifications || (a.google_ad_modifications = cc11001100_hook("a.google_ad_modifications", {}, "assign"));
    return a.google_ad_modifications;
  }
  function Ml(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", X(a), "assign");
    const b = cc11001100_hook("b", a.space_collapsing || "none", "var-init");
    return a.remove_ads_by_default ? {
      Ja: cc11001100_hook("Ja", !0, "object-key-init"),
      ub: cc11001100_hook("ub", b, "object-key-init"),
      pa: cc11001100_hook("pa", a.ablation_viewport_offset, "object-key-init")
    } : null;
  }
  function Nl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", X(a), "assign");
    a.had_ads_ablation = cc11001100_hook("a.had_ads_ablation", !0, "assign");
    a.remove_ads_by_default = cc11001100_hook("a.remove_ads_by_default", !0, "assign");
    a.space_collapsing = cc11001100_hook("a.space_collapsing", "slot", "assign");
    a.ablation_viewport_offset = cc11001100_hook("a.ablation_viewport_offset", b, "assign");
  }
  function Ol(a) {
    cc11001100_hook("a", a, "function-parameter");
    X(L).allow_second_reactive_tag = cc11001100_hook("X(L).allow_second_reactive_tag", a, "assign");
  }
  function Pl() {
    const a = cc11001100_hook("a", X(window), "var-init");
    a.afg_slotcar_vars || (a.afg_slotcar_vars = cc11001100_hook("a.afg_slotcar_vars", {}, "assign"));
    return a.afg_slotcar_vars;
  }
  ;
  function Ql(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.document.querySelector('meta[name="google-adsense-platform-account"]')?.getAttribute("content") ?? null;
  }
  ;
  function Rl(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Sl(new Tl(a, b, c, d));
  }
  function Sl(a) {
    cc11001100_hook("a", a, "function-parameter");
    lg(kg(Wj({
      s: cc11001100_hook("s", a.s, "object-key-init"),
      W: cc11001100_hook("W", A(a.i, 6), "object-key-init")
    }), b => {
      Ul(a, b, !0);
    }), () => {
      Vl(a);
    });
  }
  function Ul(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    lg(kg(Wl(b), d => {
      Xl("ok");
      a.h(d, {
        fromLocalStorage: cc11001100_hook("fromLocalStorage", !0, "object-key-init")
      });
    }), () => {
      var d = cc11001100_hook("d", a.s, "var-init");
      try {
        b.removeItem("google_ama_config");
      } catch (e) {
        Zk(d, {
          lserr: cc11001100_hook("lserr", 1, "object-key-init")
        });
      }
      c ? Vl(a) : a.h(null, null);
    });
  }
  function Vl(a) {
    cc11001100_hook("a", a, "function-parameter");
    lg(kg(Yl(a), b => {
      a.h(b, {
        fromPABGSettings: cc11001100_hook("fromPABGSettings", !0, "object-key-init")
      });
    }), () => {
      Zl(a);
    });
  }
  function Wl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", (a = cc11001100_hook("a", gl(a), "assign")) ? fl(a) ? a : null : null, "assign")) ? fg(a) : hg(Error("invlocst"));
  }
  function Yl(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.s, "var-init");
    if ((X(b)?.head_tag_slot_vars?.google_ad_host ?? Ql(b)) && (!A(a.i, 22) || !T(oh))) return hg(Error("invtag"));
    a: {
      b = cc11001100_hook("b", a.s, "assign");
      var c = cc11001100_hook("c", a.j, "var-init");
      a = cc11001100_hook("a", a.i, "assign");
      if (a?.A()) b = cc11001100_hook("b", a?.l()?.i()?.i(), "assign"), Hl(b) ? Gl(!1) : b = cc11001100_hook("b", null, "assign");else {
        if (a?.m()) {
          const d = cc11001100_hook("d", a?.i()?.i(), "var-init"),
            e = cc11001100_hook("e", a?.i()?.l()?.i()?.i(), "var-init");
          if (d && 1 === d.length && d[0] === c && Hl(e) && G(a, 17) === b.location.host) {
            Gl(!0);
            b = cc11001100_hook("b", e, "assign");
            break a;
          }
        }
        b = cc11001100_hook("b", null, "assign");
      }
    }
    b ? (c = cc11001100_hook("c", new Si(), "assign"), a = cc11001100_hook("a", E(b, Sg, 1), "assign"), c = cc11001100_hook("c", Gb(c, 1, a), "assign"), a = cc11001100_hook("a", E(b, Li, 2), "assign"), c = cc11001100_hook("c", Gb(c, 7, a), "assign"), T(eh) && 0 < E(b, Ng, 3).length && (a = cc11001100_hook("a", new Pg(), "assign"), b = cc11001100_hook("b", E(b, Ng, 3), "assign"), b = cc11001100_hook("b", Gb(a, 1, b), "assign"), Eb(c, 6, b)), b = cc11001100_hook("b", fg(c), "assign")) : b = cc11001100_hook("b", hg(Error("invtag")), "assign");
    return b;
  }
  function Zl(a) {
    cc11001100_hook("a", a, "function-parameter");
    ak({
      s: cc11001100_hook("s", a.s, "object-key-init"),
      W: cc11001100_hook("W", A(a.i, 6), "object-key-init"),
      Sa: cc11001100_hook("Sa", 50, "object-key-init"),
      callback: cc11001100_hook("callback", b => {
        $l(a, b);
      }, "object-key-init")
    });
  }
  function $l(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    lg(kg(b, c => {
      Ul(a, c, !1);
    }), c => {
      Xl(c.message);
      a.h(null, null);
    });
  }
  function Xl(a) {
    cc11001100_hook("a", a, "function-parameter");
    Aj("abg::amalserr", {
      status: cc11001100_hook("status", a, "object-key-init"),
      guarding: cc11001100_hook("guarding", "true", "object-key-init"),
      timeout: cc11001100_hook("timeout", 50, "object-key-init"),
      rate: cc11001100_hook("rate", .01, "object-key-init")
    }, .01);
  }
  class Tl {
    constructor(a, b, c, d) {
      this.s = cc11001100_hook("this.s", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.h = cc11001100_hook("this.h", d, "assign");
    }
  }
  ;
  var cm = cc11001100_hook("cm", (a, b, c, d) => {
    try {
      const e = cc11001100_hook("e", el(a, E(c, Li, 7)), "var-init");
      if (e && cl(e)) {
        t(e, 4) && (d = cc11001100_hook("d", ug(d, new vg(null, {
          google_package: cc11001100_hook("google_package", t(e, 4), "object-key-init")
        })), "assign"));
        const f = cc11001100_hook("f", new uj(a, b, c, e, d), "var-init");
        ri(1E3, () => {
          var g = cc11001100_hook("g", new ag(), "var-init");
          new mk(a, f, g).start();
          return g.i;
        }, a).then(la(am, a), la(bm, a));
      }
    } catch (e) {
      Zk(a, {
        atf: cc11001100_hook("atf", -1, "object-key-init")
      });
    }
  }, "var-init");
  const am = cc11001100_hook("am", a => {
      Zk(a, {
        atf: cc11001100_hook("atf", 1, "object-key-init")
      });
    }, "var-init"),
    bm = cc11001100_hook("bm", (a, b) => {
      (a.google_ama_state = cc11001100_hook("a.google_ama_state", a.google_ama_state || {}, "assign")).exception = cc11001100_hook("(a.google_ama_state = a.google_ama_state || {}).exception", b, "assign");
      Zk(a, {
        atf: cc11001100_hook("atf", 0, "object-key-init")
      });
    }, "var-init");
  function dm(a) {
    cc11001100_hook("a", a, "function-parameter");
    T(qh) && (a.easpi = cc11001100_hook("a.easpi", T(qh), "assign"), T(Ah) && (a.easpa = cc11001100_hook("a.easpa", !0, "assign")), a.asntp = cc11001100_hook("a.asntp", 0, "assign"), a.asntpv = cc11001100_hook("a.asntpv", 0, "assign"), a.asntpl = cc11001100_hook("a.asntpl", 0, "assign"), a.asntpm = cc11001100_hook("a.asntpm", 0, "assign"), a.asntpc = cc11001100_hook("a.asntpc", 1E3, "assign"), a.asna = cc11001100_hook("a.asna", 5, "assign"), a.asnd = cc11001100_hook("a.asnd", 5, "assign"), a.asnp = cc11001100_hook("a.asnp", 5, "assign"), a.asns = cc11001100_hook("a.asns", 5, "assign"), T(Ch) || (a.asmat = cc11001100_hook("a.asmat", Jh(rh), "assign")), a.asptt = cc11001100_hook("a.asptt", -1, "assign"), a.asro = cc11001100_hook("a.asro", T(Hh) ? T(sh) : T(Fh), "assign"), T(Eh) && (a.ascet = cc11001100_hook("a.ascet", !0, "assign")), T(Gh) || (a.asrc = cc11001100_hook("a.asrc", !1, "assign")), T(ph) && (a.asbu = cc11001100_hook("a.asbu", !0, "assign")), T(Ch) && (a.aseb = cc11001100_hook("a.aseb", !0, "assign")), 1 > Jh(Dh) && (a.asla = cc11001100_hook("a.asla", Jh(Dh), "assign")), 1 > Jh(Bh) && (a.asaa = cc11001100_hook("a.asaa", Jh(Bh), "assign")), a.asupm = cc11001100_hook("a.asupm", !0, "assign"));
  }
  ;
  Ua || Fa();
  class em {
    constructor() {
      this.promise = cc11001100_hook("this.promise", new Promise(a => {
        this.resolve = cc11001100_hook("this.resolve", a, "assign");
      }), "assign");
    }
  }
  ;
  function fm() {
    const {
      promise: a,
      resolve: b
    } = cc11001100_hook("", new em(), "var-init");
    return {
      promise: cc11001100_hook("promise", a, "object-key-init"),
      resolve: cc11001100_hook("resolve", b, "object-key-init")
    };
  }
  ;
  function gm(a = () => {}) {
    n.google_llp || (n.google_llp = cc11001100_hook("n.google_llp", {}, "assign"));
    const b = cc11001100_hook("b", n.google_llp, "var-init");
    let c = cc11001100_hook("c", b[7], "var-init");
    if (c) return c;
    c = cc11001100_hook("c", fm(), "assign");
    b[7] = cc11001100_hook("b[7]", c, "assign");
    a();
    return c;
  }
  function hm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return gm(() => {
      Mc(n.document, a);
    }).promise;
  }
  ;
  var im = cc11001100_hook("im", a => {
    if (n.google_apltlad || n !== n.top || !a.google_ad_client) return null;
    n.google_apltlad = cc11001100_hook("n.google_apltlad", !0, "assign");
    const b = cc11001100_hook("b", {
        enable_page_level_ads: {
          pltais: cc11001100_hook("pltais", !0, "object-key-init")
        },
        google_ad_client: cc11001100_hook("google_ad_client", a.google_ad_client, "object-key-init")
      }, "var-init"),
      c = cc11001100_hook("c", b.enable_page_level_ads, "var-init");
    J(a, (d, e) => {
      ki[e] && "google_ad_client" !== e && (c[e] = cc11001100_hook("c[e]", d, "assign"));
    });
    c.google_pgb_reactive = cc11001100_hook("c.google_pgb_reactive", 7, "assign");
    dm(c);
    if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = cc11001100_hook("c.google_ad_section", a.google_ad_section || a.google_ad_region, "assign");
    return b;
  }, "var-init");
  var lm = cc11001100_hook("lm", (a, b) => {
    X(L).ama_ran_on_page || ri(1001, () => jm(new km(a, b)), n);
  }, "var-init");
  function jm(a) {
    cc11001100_hook("a", a, "function-parameter");
    Rl(a.h, a.j, a.i.google_ad_client || "", (b, c) => {
      var d = cc11001100_hook("d", a.h, "var-init"),
        e = cc11001100_hook("e", a.i, "var-init");
      X(L).ama_ran_on_page || b && mm(d, e, b, c);
    });
  }
  class km {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", n, "assign");
      this.i = cc11001100_hook("this.i", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
  }
  function mm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    d && (wi(a).configSourceInAbg = cc11001100_hook("wi(a).configSourceInAbg", d, "assign"));
    void 0 !== Bb(c, Qi, 24, !1) && (d = cc11001100_hook("d", xi(a), "assign"), d.availableAbg = cc11001100_hook("d.availableAbg", !0, "assign"), d.ablationFromStorage = cc11001100_hook("d.ablationFromStorage", !!D(c, Qi, 24)?.i()?.i(), "assign"));
    if (da(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) {
      d = cc11001100_hook("d", el(a, E(c, Li, 7)), "assign");
      if (!d || !vb(d, 8)) {
        Aj("amaait", {
          value: cc11001100_hook("value", "true", "object-key-init")
        });
        return;
      }
      Aj("amaait", {
        value: cc11001100_hook("value", "false", "object-key-init")
      });
    }
    X(L).ama_ran_on_page = cc11001100_hook("X(L).ama_ran_on_page", !0, "assign");
    D(c, Ci, 15)?.i() && (X(a).enable_overlap_observer = cc11001100_hook("X(a).enable_overlap_observer", !0, "assign"));
    var e = cc11001100_hook("e", D(c, Bi, 13), "var-init");
    e && 1 === t(e, 1) ? (d = cc11001100_hook("d", 0, "assign"), (e = cc11001100_hook("e", D(e, Ai, 6), "assign")) && Hb(e, 3) && (d = cc11001100_hook("d", Hb(e, 3) || 0, "assign")), Nl(a, d)) : D(c, Qi, 24)?.i()?.i() && (xi(a).ablatingThisPageview = cc11001100_hook("xi(a).ablatingThisPageview", !0, "assign"), Nl(a, 1));
    md(3, [c.toJSON()]);
    const f = cc11001100_hook("f", b.google_ad_client || "", "var-init");
    b = cc11001100_hook("b", $k(da(b.enable_page_level_ads) ? b.enable_page_level_ads : {}), "assign");
    const g = cc11001100_hook("g", ug(yg, new vg(null, b)), "var-init");
    zj(782, () => {
      cm(a, f, c, g);
    });
  }
  ;
  var nm = cc11001100_hook("nm", {
      google_ad_modifications: cc11001100_hook("google_ad_modifications", !0, "object-key-init"),
      google_analytics_domain_name: cc11001100_hook("google_analytics_domain_name", !0, "object-key-init"),
      google_analytics_uacct: cc11001100_hook("google_analytics_uacct", !0, "object-key-init"),
      google_pause_ad_requests: cc11001100_hook("google_pause_ad_requests", !0, "object-key-init"),
      google_user_agent_client_hint: cc11001100_hook("google_user_agent_client_hint", !0, "object-key-init")
    }, "var-init"),
    om = cc11001100_hook("om", a => (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) && (a = cc11001100_hook("a", a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/), "assign")) && RegExp("google_ad_client").test(a[1]) ? a[1] : null, "var-init"),
    pm = cc11001100_hook("pm", a => {
      if (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) if (a = cc11001100_hook("a", a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), "assign"), (a = cc11001100_hook("a", a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i), "assign")) && RegExp("google_ad_client").test(a[1])) return a[1];
      return null;
    }, "var-init"),
    qm = cc11001100_hook("qm", a => {
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
  function rm(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.google_ad_client) var b = cc11001100_hook("b", String(a.google_ad_client), "var-init");else {
      if (null == (b = cc11001100_hook("b", X(a).head_tag_slot_vars?.google_ad_client ?? a.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"), "assign"))) {
        b: {
          b = cc11001100_hook("b", a.document.getElementsByTagName("script"), "assign");
          a = cc11001100_hook("a", a.navigator && a.navigator.userAgent || "", "assign");
          a = cc11001100_hook("a", RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !td() ? om : pm, "assign");
          for (var c = cc11001100_hook("c", b.length - 1, "var-init"); 0 <= c; c--) {
            var d = cc11001100_hook("d", b[c], "var-init");
            if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = cc11001100_hook("d.google_parsed_script_for_pub_code", !0, "assign"), d = cc11001100_hook("d", a(d), "assign"))) {
              b = cc11001100_hook("b", d, "assign");
              break b;
            }
          }
          b = cc11001100_hook("b", null, "assign");
        }
        if (b) {
          a = cc11001100_hook("a", /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm, "assign");
          for (c = cc11001100_hook("c", {}, "assign"); d = cc11001100_hook("d", a.exec(b), "assign");) c[d[1]] = cc11001100_hook("c[d[1]]", qm(d[2]), "assign");
          b = cc11001100_hook("b", c, "assign");
          b = cc11001100_hook("b", b.google_ad_client ? b.google_ad_client : "", "assign");
        } else b = cc11001100_hook("b", "", "assign");
      }
      b = cc11001100_hook("b", b ?? "", "assign");
    }
    return b;
  }
  ;
  async function sm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", 10, "var-init");
    return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
      const f = cc11001100_hook("f", a.setInterval(() => {
        --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e());
      }, 200), "var-init");
    });
  }
  ;
  function tm(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.state.pc, "var-init");
    return null !== b && 0 !== b ? b : a.state.pc = cc11001100_hook("a.state.pc", cd(a.s), "assign");
  }
  function um(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.state.wpc, "var-init");
    return null !== b && "" !== b ? b : a.state.wpc = cc11001100_hook("a.state.wpc", rm(a.s), "assign");
  }
  function vm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new Ce(), "var-init");
    var d = cc11001100_hook("d", tm(a), "var-init");
    c = cc11001100_hook("c", C(c, 1, d, 0), "assign");
    d = cc11001100_hook("d", um(a), "assign");
    c = cc11001100_hook("c", C(c, 2, d, ""), "assign");
    c = cc11001100_hook("c", C(c, 3, a.state.sd, 0), "assign");
    return C(c, 7, Math.round(b || a.s.performance.now()), 0);
  }
  async function wm(a) {
    cc11001100_hook("a", a, "function-parameter");
    await sm(a.s, () => !(!tm(a) || !um(a)));
  }
  async function xm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.j && !a.state.le.includes(1)) {
      a.state.le.push(1);
      var c = cc11001100_hook("c", a.s.performance.now(), "var-init");
      await wm(a);
      b = cc11001100_hook("b", ue(ve(xe(new ye(), b), se(re(new te(), P(a.s).scrollWidth), P(a.s).scrollHeight)), se(re(new te(), P(a.s).clientWidth), P(a.s).clientHeight)), "assign");
      var d = cc11001100_hook("d", new ze(), "var-init");
      T(ch) ? (C(b, 4, a.i, ""), C(d, 1, a.i, "")) : (C(b, 4, a.s?.document?.URL, ""), C(d, 1, a.s?.document?.URL, ""));
      var e = cc11001100_hook("e", Qh(a.s), "var-init");
      0 !== e && we(b, pe(new qe(), e));
      Ze(a.h, Ae(vm(a, c), b));
      mf(a.h, a.s, () => {
        var f = cc11001100_hook("f", a.h, "var-init");
        var g = cc11001100_hook("g", vm(a), "var-init");
        g = cc11001100_hook("g", Fb(g, 8, Be, d), "assign");
        Ze(f, g);
      });
    }
  }
  async function ym(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a.j && c.length && !a.state.lgdp.includes(Number(b))) {
      a.state.lgdp.push(Number(b));
      var d = cc11001100_hook("d", a.s.performance.now(), "var-init");
      await wm(a);
      var e = cc11001100_hook("e", a.h, "var-init");
      a = cc11001100_hook("a", vm(a, d), "assign");
      d = cc11001100_hook("d", new oe(), "assign");
      b = cc11001100_hook("b", C(d, 1, b, 0), "assign");
      c = cc11001100_hook("c", xb(b, 2, c), "assign");
      c = cc11001100_hook("c", Fb(a, 9, Be, c), "assign");
      Ze(e, c);
    }
  }
  var zm = cc11001100_hook("zm", class {
    constructor(a) {
      this.s = cc11001100_hook("this.s", od() || window, "assign");
      this.h = cc11001100_hook("this.h", a ?? new qf(100, 100, !0), "assign");
      this.state = cc11001100_hook("this.state", Jj(Ej(), 33, () => {
        const b = cc11001100_hook("b", Jh(ah), "var-init");
        return {
          sd: cc11001100_hook("sd", b, "object-key-init"),
          ssp: cc11001100_hook("ssp", 0 < b && Sc() < 1 / b, "object-key-init"),
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
    get i() {
      return this.state.cu;
    }
    set i(a) {
      this.state.cu = cc11001100_hook("this.state.cu", a, "assign");
    }
  }, "var-init");
  function Am(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
  }
  function Bm(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", L.document, "var-init");
    if (b.currentScript) return Am(b.currentScript, a);
    for (const c of b.scripts) if (0 === Am(c, a)) return 0;
    return 1;
  }
  ;
  function Cm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      [3]: {
        [55]: cc11001100_hook(55, () => 0 === a, "object-key-init"),
        [23]: cc11001100_hook(23, c => zl(L, Number(c)), "object-key-init"),
        [24]: cc11001100_hook(24, c => Cl(Number(c)), "object-key-init"),
        [61]: cc11001100_hook(61, () => A(b, 6), "object-key-init"),
        [63]: cc11001100_hook(63, () => A(b, 6) || ".google.ch" === G(b, 8), "object-key-init")
      },
      [4]: {
        [7]: cc11001100_hook(7, c => {
          try {
            var d = cc11001100_hook("d", window.localStorage, "var-init");
          } catch (g) {
            d = cc11001100_hook("d", null, "assign");
          }
          c = cc11001100_hook("c", Number(c), "assign");
          c = cc11001100_hook("c", 0 !== c ? `${"google_experiment_mod"}${c}` : "google_experiment_mod", "assign");
          a: {
            var e = cc11001100_hook("e", -1, "var-init");
            try {
              d && (e = cc11001100_hook("e", parseInt(d.getItem(c), 10), "assign"));
            } catch {
              e = cc11001100_hook("e", null, "assign");
              break a;
            }
            e = cc11001100_hook("e", 0 <= e && 1E3 > e ? e : null, "assign");
          }
          if (null === e) {
            const g = cc11001100_hook("g", Rc() ? null : Math.floor(1E3 * Sc()), "var-init");
            if (e = cc11001100_hook("e", null != g && d, "assign")) a: {
              var f = cc11001100_hook("f", String(g), "var-init");
              try {
                if (d) {
                  d.setItem(c, f);
                  e = cc11001100_hook("e", f, "assign");
                  break a;
                }
              } catch {}
              e = cc11001100_hook("e", null, "assign");
            }
            d = cc11001100_hook("d", e ? g : null, "assign");
          } else d = cc11001100_hook("d", e, "assign");
          return d ?? void 0;
        }, "object-key-init")
      },
      [5]: {
        [6]: cc11001100_hook(6, () => G(b, 15), "object-key-init")
      }
    };
  }
  ;
  function Dm(a = n) {
    return a.ggeac || (a.ggeac = cc11001100_hook("a.ggeac", {}, "assign"));
  }
  ;
  function Em() {
    var a = cc11001100_hook("a", M(Ih).l(vh.h, vh.defaultValue), "var-init"),
      b = cc11001100_hook("b", L.document, "var-init");
    if (a.length && b.head) for (const d of a) if ((a = cc11001100_hook("a", d, "assign")) && b.head) {
      var c = cc11001100_hook("c", Nc("META"), "var-init");
      b.head.appendChild(c);
      c.httpEquiv = cc11001100_hook("c.httpEquiv", "origin-trial", "assign");
      c.content = cc11001100_hook("c.content", a, "assign");
    }
  }
  function Fm(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return !!b.featurePolicy?.features().includes(a);
  }
  function Gm(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  ;
  function Hm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      const d = cc11001100_hook("d", a.split("."), "var-init");
      a = cc11001100_hook("a", n, "assign");
      let e = cc11001100_hook("e", 0, "var-init"),
        f;
      for (; null != a && e < d.length; e++) f = cc11001100_hook("f", a, "assign"), a = cc11001100_hook("a", a[d[e]], "assign"), "function" === typeof a && (a = cc11001100_hook("a", f[d[e]](), "assign"));
      var c = cc11001100_hook("c", a, "var-init");
      if (typeof c === b) return c;
    } catch {}
  }
  var Im = cc11001100_hook("Im", {
    [3]: {
      [8]: cc11001100_hook(8, a => {
        try {
          return null != ba(a);
        } catch {}
      }, "object-key-init"),
      [9]: cc11001100_hook(9, a => {
        try {
          var b = cc11001100_hook("b", ba(a), "var-init");
        } catch {
          return;
        }
        if (a = cc11001100_hook("a", "function" === typeof b, "assign")) b = cc11001100_hook("b", b && b.toString && b.toString(), "assign"), a = cc11001100_hook("a", "string" === typeof b && -1 != b.indexOf("[native code]"), "assign");
        return a;
      }, "object-key-init"),
      [10]: cc11001100_hook(10, () => window === window.top, "object-key-init"),
      [6]: cc11001100_hook(6, a => Ra(M(Sf).i(), Number(a)), "object-key-init"),
      [27]: cc11001100_hook(27, a => {
        a = cc11001100_hook("a", Hm(a, "boolean"), "assign");
        return void 0 !== a ? a : void 0;
      }, "object-key-init"),
      [60]: cc11001100_hook(60, a => {
        try {
          return !!n.document.querySelector(a);
        } catch {}
      }, "object-key-init"),
      [69]: cc11001100_hook(69, a => Fm(a, n.document), "object-key-init"),
      [70]: cc11001100_hook(70, a => Gm(a, n.document), "object-key-init")
    },
    [4]: {
      [3]: cc11001100_hook(3, () => Zc(), "object-key-init"),
      [6]: cc11001100_hook(6, a => {
        a = cc11001100_hook("a", Hm(a, "number"), "assign");
        return void 0 !== a ? a : void 0;
      }, "object-key-init")
    },
    [5]: {
      [2]: cc11001100_hook(2, () => window.location.href, "object-key-init"),
      [3]: cc11001100_hook(3, () => {
        try {
          return window.top.location.hash;
        } catch {
          return "";
        }
      }, "object-key-init"),
      [4]: cc11001100_hook(4, a => {
        a = cc11001100_hook("a", Hm(a, "string"), "assign");
        return void 0 !== a ? a : void 0;
      }, "object-key-init")
    }
  }, "var-init");
  const Jm = cc11001100_hook("Jm", [12, 13, 20], "var-init");
  function Km(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", M(vf).G, "var-init");
    if (!fe(D(b, Zd, 3), e)) return null;
    var f = cc11001100_hook("f", E(b, ll, 2), "var-init"),
      g = cc11001100_hook("g", H(b, 6), "var-init");
    if (g) {
      yb(d, 1, He, g);
      f = cc11001100_hook("f", e[4], "assign");
      switch (c) {
        case 2:
          var h = cc11001100_hook("h", f[8], "var-init");
          break;
        case 1:
          h = cc11001100_hook("h", f[7], "assign");
      }
      c = cc11001100_hook("c", void 0, "assign");
      if (h) try {
        c = cc11001100_hook("c", h(g), "assign"), C(d, 3, c, 0);
      } catch (l) {}
      return (b = cc11001100_hook("b", Lm(b, c), "assign")) ? Mm(a, [b], 1) : null;
    }
    if (g = cc11001100_hook("g", H(b, 10), "assign")) {
      yb(d, 2, He, g);
      h = cc11001100_hook("h", null, "assign");
      switch (c) {
        case 1:
          h = cc11001100_hook("h", e[4][9], "assign");
          break;
        case 2:
          h = cc11001100_hook("h", e[4][10], "assign");
          break;
        default:
          return null;
      }
      c = cc11001100_hook("c", h ? h(String(g)) : void 0, "assign");
      if (void 0 === c && 1 === H(b, 11)) return null;
      void 0 !== c && C(d, 3, c, 0);
      return (b = cc11001100_hook("b", Lm(b, c), "assign")) ? Mm(a, [b], 1) : null;
    }
    d = cc11001100_hook("d", e ? Ma(f, l => fe(D(l, Zd, 3), e)) : f, "assign");
    if (!d.length) return null;
    c = cc11001100_hook("c", d.length * B(Ib(b, 1), 0), "assign");
    return (b = cc11001100_hook("b", H(b, 4), "assign")) ? Nm(a, b, c, d) : Mm(a, d, c / 1E3);
  }
  function Om(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.h[c] || (a.h[c] = cc11001100_hook("a.h[c]", [], "assign"));
    a = cc11001100_hook("a", a.h[c], "assign");
    Ra(a, b) || a.push(b);
  }
  function Pm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", Qm(a.j, b), "var-init");
    var f;
    if (f = cc11001100_hook("f", 9 !== b, "assign")) a.l[b] ? f = cc11001100_hook("f", !0, "assign") : (a.l[b] = cc11001100_hook("a.l[b]", !0, "assign"), f = cc11001100_hook("f", !1, "assign"));
    if (f) return sf(a.N, b, c, d, [], 4), d;
    if (!e.length) return sf(a.N, b, c, d, [], 3), d;
    const g = cc11001100_hook("g", Ra(Jm, b), "var-init"),
      h = cc11001100_hook("h", [], "var-init");
    La(e, l => {
      var k = cc11001100_hook("k", new Ge(), "var-init");
      if (l = cc11001100_hook("l", Km(a, l, c, k), "assign")) 0 !== zb(k, He) && h.push(k), k = cc11001100_hook("k", l.getId(), "assign"), d.push(k), Om(a, k, g ? 4 : c), (l = cc11001100_hook("l", E(l, ke, 2), "assign")) && (g ? Jf(l, Lf(), a.N, k) : Jf(l, [c], a.N, k));
    });
    sf(a.N, b, c, d, h, 1);
    return d;
  }
  function Rm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j.push(...Ma(Na(b, c => new pl(c)), c => !Ra(Jm, H(c, 1))));
  }
  function Mm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.i, "var-init"),
      e = cc11001100_hook("e", Pa(b, f => !!d[f.getId()]), "var-init");
    return e ? e : a.sa ? null : Pc(b, c);
  }
  function Nm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", null != a.la[b] ? a.la[b] : 1E3, "var-init");
    if (0 >= e) return null;
    d = cc11001100_hook("d", Mm(a, d, c / e), "assign");
    a.la[b] = cc11001100_hook("a.la[b]", d ? 0 : e - c, "assign");
    return d;
  }
  function Sm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    N(1, c => {
      a.i[c] = cc11001100_hook("a.i[c]", !0, "assign");
    }, b);
    N(2, (c, d) => Pm(a, c, d), b);
    N(3, c => (a.h[c] || []).concat(a.h[4]), b);
    N(12, c => void Rm(a, c), b);
    N(16, (c, d) => void Om(a, c, d), b);
  }
  var Tm = cc11001100_hook("Tm", class {
    constructor(a, b, c, {
      sa: d = !1,
      Yb: e = [],
      la: f = {}
    } = {}) {
      this.N = cc11001100_hook("this.N", c, "assign");
      this.j = cc11001100_hook("this.j", a.slice(), "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
      this.sa = cc11001100_hook("this.sa", d, "assign");
      this.la = cc11001100_hook("this.la", f, "assign");
      this.h = cc11001100_hook("this.h", {
        [b]: cc11001100_hook("b", [], "object-key-init"),
        [4]: cc11001100_hook(4, [], "object-key-init")
      }, "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
      (a = cc11001100_hook("a", Kd(), "assign")) && La(a.split(",") || [], g => {
        (g = cc11001100_hook("g", Number(g), "assign")) && (this.i[g] = cc11001100_hook("this.i[g]", !0, "assign"));
      });
      La(e, g => {
        this.i[g] = cc11001100_hook("this.i[g]", !0, "assign");
      });
    }
  }, "var-init");
  function Qm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (a = cc11001100_hook("a", Pa(a, c => H(c, 1) === b), "assign")) && E(a, nl, 2) || [];
  }
  function Lm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", E(a, ll, 2), "var-init"),
      d = cc11001100_hook("d", c.length, "var-init"),
      e = cc11001100_hook("e", B(Ib(a, 8), 0), "var-init");
    a = cc11001100_hook("a", d * B(Ib(a, 1), 0) - 1, "assign");
    b = cc11001100_hook("b", void 0 !== b ? b : Math.floor(1E3 * Sc()), "assign");
    d = cc11001100_hook("d", (b - e) % d, "assign");
    if (b < e || b - e - d >= a) return null;
    c = cc11001100_hook("c", c[d], "assign");
    e = cc11001100_hook("e", M(vf).G, "assign");
    return !c || e && !fe(D(c, Zd, 3), e) ? null : c;
  }
  ;
  function Um(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.h = cc11001100_hook("a.h", Nf(14, b, () => {}), "assign");
  }
  class Vm {
    constructor() {
      this.h = cc11001100_hook("this.h", () => {}, "assign");
    }
  }
  function Wm(a) {
    cc11001100_hook("a", a, "function-parameter");
    M(Vm).h(a);
  }
  ;
  function Xm({
    cb: a,
    G: b,
    ab: c,
    Xa: d = Dm(),
    Ya: e = 0,
    N: f = new uf(D(a, ql, 5)?.i() ?? 0, D(a, ql, 5)?.l() ?? 0, D(a, ql, 5)?.m() ?? !1)
  }) {
    d.hasOwnProperty("init-done") ? (Nf(12, d, () => {})(Na(E(a, pl, 2), g => g.toJSON())), Nf(13, d, () => {})(Na(E(a, ke, 1), g => g.toJSON()), e), b && Nf(14, d, () => {})(b), Ym(e, d)) : (Sm(new Tm(E(a, pl, 2), e, f, c), d), Of(d), Pf(d), Qf(d), Ym(e, d), Jf(E(a, ke, 1), [e], f, void 0, !0), wf = cc11001100_hook("wf", wf || !(!c || !c.hb), "assign"), Wm(Im), b && Wm(b));
  }
  function Ym(a, b = Dm()) {
    cc11001100_hook("a", a, "function-parameter");
    Rf(M(Sf), b, a);
    Zm(b, a);
    Um(M(Vm), b);
    M(Ih).m();
  }
  function Zm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", M(Ih), "var-init");
    c.h = cc11001100_hook("c.h", (d, e) => Nf(5, a, () => !1)(d, e, b), "assign");
    c.i = cc11001100_hook("c.i", (d, e) => Nf(6, a, () => 0)(d, e, b), "assign");
    c.j = cc11001100_hook("c.j", (d, e) => Nf(7, a, () => "")(d, e, b), "assign");
    c.l = cc11001100_hook("c.l", (d, e) => Nf(8, a, () => [])(d, e, b), "assign");
    c.m = cc11001100_hook("c.m", () => {
      Nf(15, a, () => {})(b);
    }, "assign");
  }
  ;
  function $m(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", M(Sf).l(a), "var-init");
    a = cc11001100_hook("a", ym(M(zm), a, b), "assign");
    Uf.aa(1085, a);
  }
  var an = cc11001100_hook("an", (a, b, c) => {
    var d = cc11001100_hook("d", X(a), "var-init");
    if (d.plle) Ym(1, Dm(a));else {
      d.plle = cc11001100_hook("d.plle", !0, "assign");
      d = cc11001100_hook("d", D(b, sl, 12), "assign");
      var e = cc11001100_hook("e", A(b, 9), "var-init");
      Xm({
        cb: cc11001100_hook("cb", d, "object-key-init"),
        G: cc11001100_hook("G", Cm(c, b), "object-key-init"),
        ab: {
          sa: cc11001100_hook("sa", e && !!a.google_disable_experiments, "object-key-init"),
          hb: cc11001100_hook("hb", e, "object-key-init")
        },
        Xa: cc11001100_hook("Xa", Dm(a), "object-key-init"),
        Ya: cc11001100_hook("Ya", 1, "object-key-init")
      });
      if (c = cc11001100_hook("c", G(b, 15), "assign")) c = cc11001100_hook("c", Number(c), "assign"), M(Sf).j(c);
      for (const f of wb(b, 19, qb)) b = cc11001100_hook("b", f, "assign"), M(Sf).h(b);
      $m(12);
      $m(10);
      a = cc11001100_hook("a", Lc(a) || a, "assign");
      kj(a.location, "google_mc_lab") && M(Sf).h(44738307);
      kj(a.location, "google_auto_storify_swipeable") && M(Sf).h(44773747);
      kj(a.location, "google_auto_storify_scrollable") && M(Sf).h(44773746);
      kj(a.location, "google_pga_monetization") && M(Sf).h(44786632);
    }
  }, "var-init");
  var bn = cc11001100_hook("bn", {
    "120x90": cc11001100_hook("120x90", !0, "object-key-init"),
    "160x90": cc11001100_hook("160x90", !0, "object-key-init"),
    "180x90": cc11001100_hook("180x90", !0, "object-key-init"),
    "200x90": cc11001100_hook("200x90", !0, "object-key-init"),
    "468x15": cc11001100_hook("468x15", !0, "object-key-init"),
    "728x15": cc11001100_hook("728x15", !0, "object-key-init")
  }, "var-init");
  function cn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (15 == b) {
      if (728 <= a) return 728;
      if (468 <= a) return 468;
    } else if (90 == b) {
      if (200 <= a) return 200;
      if (180 <= a) return 180;
      if (160 <= a) return 160;
      if (120 <= a) return 120;
    }
    return null;
  }
  ;
  function dn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => !!(b.ga & a);
  }
  class Y extends ci {
    constructor(a, b, c, d = !1) {
      super(a, b);
      this.ga = cc11001100_hook("this.ga", c, "assign");
      this.ib = cc11001100_hook("this.ib", d, "assign");
    }
    oa() {
      return this.ga;
    }
    i(a, b, c) {
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const en = cc11001100_hook("en", {
      image_stacked: cc11001100_hook("image_stacked", 1 / 1.91, "object-key-init"),
      image_sidebyside: cc11001100_hook("image_sidebyside", 1 / 3.82, "object-key-init"),
      mobile_banner_image_sidebyside: cc11001100_hook("mobile_banner_image_sidebyside", 1 / 3.82, "object-key-init"),
      pub_control_image_stacked: cc11001100_hook("pub_control_image_stacked", 1 / 1.91, "object-key-init"),
      pub_control_image_sidebyside: cc11001100_hook("pub_control_image_sidebyside", 1 / 3.82, "object-key-init"),
      pub_control_image_card_stacked: cc11001100_hook("pub_control_image_card_stacked", 1 / 1.91, "object-key-init"),
      pub_control_image_card_sidebyside: cc11001100_hook("pub_control_image_card_sidebyside", 1 / 3.74, "object-key-init"),
      pub_control_text: cc11001100_hook("pub_control_text", 0, "object-key-init"),
      pub_control_text_card: cc11001100_hook("pub_control_text_card", 0, "object-key-init")
    }, "var-init"),
    fn = cc11001100_hook("fn", {
      image_stacked: cc11001100_hook("image_stacked", 80, "object-key-init"),
      image_sidebyside: cc11001100_hook("image_sidebyside", 0, "object-key-init"),
      mobile_banner_image_sidebyside: cc11001100_hook("mobile_banner_image_sidebyside", 0, "object-key-init"),
      pub_control_image_stacked: cc11001100_hook("pub_control_image_stacked", 80, "object-key-init"),
      pub_control_image_sidebyside: cc11001100_hook("pub_control_image_sidebyside", 0, "object-key-init"),
      pub_control_image_card_stacked: cc11001100_hook("pub_control_image_card_stacked", 85, "object-key-init"),
      pub_control_image_card_sidebyside: cc11001100_hook("pub_control_image_card_sidebyside", 0, "object-key-init"),
      pub_control_text: cc11001100_hook("pub_control_text", 80, "object-key-init"),
      pub_control_text_card: cc11001100_hook("pub_control_text_card", 80, "object-key-init")
    }, "var-init"),
    gn = cc11001100_hook("gn", {
      pub_control_image_stacked: cc11001100_hook("pub_control_image_stacked", 100, "object-key-init"),
      pub_control_image_sidebyside: cc11001100_hook("pub_control_image_sidebyside", 200, "object-key-init"),
      pub_control_image_card_stacked: cc11001100_hook("pub_control_image_card_stacked", 150, "object-key-init"),
      pub_control_image_card_sidebyside: cc11001100_hook("pub_control_image_card_sidebyside", 250, "object-key-init"),
      pub_control_text: cc11001100_hook("pub_control_text", 100, "object-key-init"),
      pub_control_text_card: cc11001100_hook("pub_control_text_card", 150, "object-key-init")
    }, "var-init");
  function hn(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 0, "var-init");
    a.U && b++;
    a.L && b++;
    a.M && b++;
    if (3 > b) return {
      O: cc11001100_hook("O", "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.", "object-key-init")
    };
    b = cc11001100_hook("b", a.U.split(","), "assign");
    const c = cc11001100_hook("c", a.M.split(","), "var-init");
    a = cc11001100_hook("a", a.L.split(","), "assign");
    if (b.length !== c.length || b.length !== a.length) return {
      O: cc11001100_hook("O", 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"', "object-key-init")
    };
    if (2 < b.length) return {
      O: cc11001100_hook("O", "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`, "object-key-init")
    };
    const d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", [], "var-init");
    for (let g = cc11001100_hook("g", 0, "var-init"); g < b.length; g++) {
      var f = cc11001100_hook("f", Number(c[g]), "var-init");
      if (Number.isNaN(f) || 0 === f) return {
        O: cc11001100_hook("O", `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`, "object-key-init")
      };
      d.push(f);
      f = cc11001100_hook("f", Number(a[g]), "assign");
      if (Number.isNaN(f) || 0 === f) return {
        O: cc11001100_hook("O", `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`, "object-key-init")
      };
      e.push(f);
    }
    return {
      M: cc11001100_hook("M", d, "object-key-init"),
      L: cc11001100_hook("L", e, "object-key-init"),
      Pa: cc11001100_hook("Pa", b, "object-key-init")
    };
  }
  function jn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 1200 <= a ? {
      width: cc11001100_hook("width", 1200, "object-key-init"),
      height: cc11001100_hook("height", 600, "object-key-init")
    } : 850 <= a ? {
      width: cc11001100_hook("width", a, "object-key-init"),
      height: cc11001100_hook("height", Math.floor(.5 * a), "object-key-init")
    } : 550 <= a ? {
      width: cc11001100_hook("width", a, "object-key-init"),
      height: cc11001100_hook("height", Math.floor(.6 * a), "object-key-init")
    } : 468 <= a ? {
      width: cc11001100_hook("width", a, "object-key-init"),
      height: cc11001100_hook("height", Math.floor(.7 * a), "object-key-init")
    } : {
      width: cc11001100_hook("width", a, "object-key-init"),
      height: cc11001100_hook("height", Math.floor(3.44 * a), "object-key-init")
    };
  }
  ;
  const kn = cc11001100_hook("kn", Ta("script"), "var-init");
  function ln(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    null != a.ga && (c.google_responsive_formats = cc11001100_hook("c.google_responsive_formats", a.ga, "assign"));
    null != a.R && (c.google_safe_for_responsive_override = cc11001100_hook("c.google_safe_for_responsive_override", a.R, "assign"));
    null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = cc11001100_hook("c.google_full_width_responsive_allowed", !0, "assign") : (c.google_full_width_responsive_allowed = cc11001100_hook("c.google_full_width_responsive_allowed", !1, "assign"), c.gfwrnwer = cc11001100_hook("c.gfwrnwer", a.i, "assign")));
    null != a.j && !0 !== a.j && (c.gfwrnher = cc11001100_hook("c.gfwrnher", a.j, "assign"));
    var d = cc11001100_hook("d", a.m || c.google_ad_width, "var-init");
    null != d && (c.google_resizing_width = cc11001100_hook("c.google_resizing_width", d, "assign"));
    d = cc11001100_hook("d", a.l || c.google_ad_height, "assign");
    null != d && (c.google_resizing_height = cc11001100_hook("c.google_resizing_height", d, "assign"));
    d = cc11001100_hook("d", a.size().h(b), "assign");
    const e = cc11001100_hook("e", a.size().height(), "var-init");
    if (!c.google_ad_resize) {
      c.google_ad_width = cc11001100_hook("c.google_ad_width", d, "assign");
      c.google_ad_height = cc11001100_hook("c.google_ad_height", e, "assign");
      var f = cc11001100_hook("f", a.size(), "var-init");
      b = cc11001100_hook("b", f.h(b) + "x" + f.height(), "assign");
      c.google_ad_format = cc11001100_hook("c.google_ad_format", b, "assign");
      c.google_responsive_auto_format = cc11001100_hook("c.google_responsive_auto_format", a.A, "assign");
      null != a.h && (c.armr = cc11001100_hook("c.armr", a.h, "assign"));
      c.google_ad_resizable = cc11001100_hook("c.google_ad_resizable", !0, "assign");
      c.google_override_format = cc11001100_hook("c.google_override_format", 1, "assign");
      c.google_loader_features_used = cc11001100_hook("c.google_loader_features_used", 128, "assign");
      !0 === a.i && (c.gfwrnh = cc11001100_hook("c.gfwrnh", a.size().height() + "px", "assign"));
    }
    null != a.C && (c.gfwroml = cc11001100_hook("c.gfwroml", a.C, "assign"));
    null != a.J && (c.gfwromr = cc11001100_hook("c.gfwromr", a.J, "assign"));
    null != a.l && (c.gfwroh = cc11001100_hook("c.gfwroh", a.l, "assign"));
    null != a.m && (c.gfwrow = cc11001100_hook("c.gfwrow", a.m, "assign"));
    null != a.P && (c.gfwroz = cc11001100_hook("c.gfwroz", a.P, "assign"));
    null != a.v && (c.gml = cc11001100_hook("c.gml", a.v, "assign"));
    null != a.B && (c.gmr = cc11001100_hook("c.gmr", a.B, "assign"));
    null != a.T && (c.gzi = cc11001100_hook("c.gzi", a.T, "assign"));
    b = cc11001100_hook("b", Lc(window) || window, "assign");
    kj(b.location, "google_responsive_dummy_ad") && (Ra([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.h) && 2 !== a.h && (a = cc11001100_hook("a", JSON.stringify({
      googMsgType: cc11001100_hook("googMsgType", "adpnt", "object-key-init"),
      key_value: cc11001100_hook("key_value", [{
        key: cc11001100_hook("key", "qid", "object-key-init"),
        value: cc11001100_hook("value", "DUMMY_AD", "object-key-init")
      }], "object-key-init")
    }), "assign"), c.dash = cc11001100_hook("c.dash", `<${kn}>window.top.postMessage('${a}', '*'); 
          </${kn}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`, "assign"));
  }
  class mn {
    constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, m = null, u = null) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.da = cc11001100_hook("this.da", b, "assign");
      this.ga = cc11001100_hook("this.ga", c, "assign");
      this.h = cc11001100_hook("this.h", d, "assign");
      this.R = cc11001100_hook("this.R", e, "assign");
      this.i = cc11001100_hook("this.i", f, "assign");
      this.j = cc11001100_hook("this.j", g, "assign");
      this.C = cc11001100_hook("this.C", h, "assign");
      this.J = cc11001100_hook("this.J", l, "assign");
      this.l = cc11001100_hook("this.l", k, "assign");
      this.m = cc11001100_hook("this.m", m, "assign");
      this.P = cc11001100_hook("this.P", u, "assign");
      this.T = cc11001100_hook("this.T", this.B = cc11001100_hook("this.B", this.v = cc11001100_hook("this.v", null, "assign"), "assign"), "assign");
    }
    size() {
      return this.da;
    }
  }
  ;
  const nn = cc11001100_hook("nn", ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"], "var-init");
  var on = cc11001100_hook("on", class extends ci {
      h(a) {
        return Math.min(1200, Math.max(this.K, Math.round(a)));
      }
    }, "var-init"),
    rn = cc11001100_hook("rn", (a, b) => {
      pn(a, b);
      if ("pedestal" == b.google_content_recommendation_ui_type) return new mn(9, new on(a, Math.floor(a * b.google_phwr)));
      var c = cc11001100_hook("c", Fc(), "var-init");
      468 > a ? c ? (c = cc11001100_hook("c", a - 8 - 8, "assign"), c = cc11001100_hook("c", Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * en.mobile_banner_image_sidebyside + fn.mobile_banner_image_sidebyside) + 96), "assign"), a = cc11001100_hook("a", {
        ca: cc11001100_hook("ca", a, "object-key-init"),
        ba: cc11001100_hook("ba", c, "object-key-init"),
        L: cc11001100_hook("L", 1, "object-key-init"),
        M: cc11001100_hook("M", 12, "object-key-init"),
        U: cc11001100_hook("U", "mobile_banner_image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", jn(a), "assign"), a = cc11001100_hook("a", {
        ca: cc11001100_hook("ca", a.width, "object-key-init"),
        ba: cc11001100_hook("ba", a.height, "object-key-init"),
        L: cc11001100_hook("L", 1, "object-key-init"),
        M: cc11001100_hook("M", 13, "object-key-init"),
        U: cc11001100_hook("U", "image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", jn(a), "assign"), a = cc11001100_hook("a", {
        ca: cc11001100_hook("ca", a.width, "object-key-init"),
        ba: cc11001100_hook("ba", a.height, "object-key-init"),
        L: cc11001100_hook("L", 4, "object-key-init"),
        M: cc11001100_hook("M", 2, "object-key-init"),
        U: cc11001100_hook("U", "image_stacked", "object-key-init")
      }, "assign"));
      qn(b, a);
      return new mn(9, new on(a.ca, a.ba));
    }, "var-init"),
    sn = cc11001100_hook("sn", (a, b) => {
      pn(a, b);
      var c = cc11001100_hook("c", hn({
        M: cc11001100_hook("M", b.google_content_recommendation_rows_num, "object-key-init"),
        L: cc11001100_hook("L", b.google_content_recommendation_columns_num, "object-key-init"),
        U: cc11001100_hook("U", b.google_content_recommendation_ui_type, "object-key-init")
      }), "var-init");
      if (c.O) a = cc11001100_hook("a", {
        ca: cc11001100_hook("ca", 0, "object-key-init"),
        ba: cc11001100_hook("ba", 0, "object-key-init"),
        L: cc11001100_hook("L", 0, "object-key-init"),
        M: cc11001100_hook("M", 0, "object-key-init"),
        U: cc11001100_hook("U", "image_stacked", "object-key-init"),
        O: cc11001100_hook("O", c.O, "object-key-init")
      }, "assign");else {
        var d = cc11001100_hook("d", 2 === c.Pa.length && 468 <= a ? 1 : 0, "var-init");
        var e = cc11001100_hook("e", c.Pa[d], "var-init");
        e = cc11001100_hook("e", 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e, "assign");
        var f = cc11001100_hook("f", gn[e], "var-init");
        let g = cc11001100_hook("g", c.L[d], "var-init");
        for (; a / g < f && 1 < g;) g--;
        f = cc11001100_hook("f", g, "assign");
        d = cc11001100_hook("d", c.M[d], "assign");
        c = cc11001100_hook("c", Math.floor(((a - 8 * f - 8) / f * en[e] + fn[e]) * d + 8 * d + 8), "assign");
        a = cc11001100_hook("a", 1500 < a ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          sb: cc11001100_hook("sb", "Calculated slot width is too large: " + a, "object-key-init")
        } : 1500 < c ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          sb: cc11001100_hook("sb", "Calculated slot height is too large: " + c, "object-key-init")
        } : {
          width: cc11001100_hook("width", a, "object-key-init"),
          height: cc11001100_hook("height", c, "object-key-init")
        }, "assign");
        a = cc11001100_hook("a", {
          ca: cc11001100_hook("ca", a.width, "object-key-init"),
          ba: cc11001100_hook("ba", a.height, "object-key-init"),
          L: cc11001100_hook("L", f, "object-key-init"),
          M: cc11001100_hook("M", d, "object-key-init"),
          U: cc11001100_hook("U", e, "object-key-init")
        }, "assign");
      }
      if (a.O) throw new U(a.O);
      qn(b, a);
      return new mn(9, new on(a.ca, a.ba));
    }, "var-init");
  function pn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) throw new U("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
  }
  function qn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.google_content_recommendation_ui_type = cc11001100_hook("a.google_content_recommendation_ui_type", b.U, "assign");
    a.google_content_recommendation_columns_num = cc11001100_hook("a.google_content_recommendation_columns_num", b.L, "assign");
    a.google_content_recommendation_rows_num = cc11001100_hook("a.google_content_recommendation_rows_num", b.M, "assign");
  }
  ;
  class tn extends ci {
    h() {
      return this.K;
    }
    i(a, b, c) {
      bi(a, c);
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const un = cc11001100_hook("un", {
    "image-top": cc11001100_hook("image-top", a => 600 >= a ? 284 + .414 * (a - 250) : 429, "object-key-init"),
    "image-middle": cc11001100_hook("image-middle", a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500), "object-key-init"),
    "image-side": cc11001100_hook("image-side", a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500), "object-key-init"),
    "text-only": cc11001100_hook("text-only", a => 500 >= a ? 187 - .228 * (a - 250) : 130, "object-key-init"),
    "in-article": cc11001100_hook("in-article", a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200, "object-key-init")
  }, "var-init");
  var vn = cc11001100_hook("vn", class extends ci {
      h() {
        return Math.min(1200, this.K);
      }
    }, "var-init"),
    wn = cc11001100_hook("wn", (a, b, c, d, e) => {
      var f = cc11001100_hook("f", e.google_ad_layout || "image-top", "var-init");
      if ("in-article" == f) {
        var g = cc11001100_hook("g", a, "var-init");
        if ("false" == e.google_full_width_responsive) a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", Xh(b, c, g, .2, e), "assign"), !0 !== a) e.gfwrnwer = cc11001100_hook("e.gfwrnwer", a, "assign"), a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", P(b).clientWidth, "assign")) {
          if (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), c.parentElement) {
            b: {
              g = cc11001100_hook("g", c, "assign");
              for (let h = cc11001100_hook("h", 0, "var-init"); 100 > h && g.parentElement; ++h) {
                const l = cc11001100_hook("l", g.parentElement.childNodes, "var-init");
                for (let k = cc11001100_hook("k", 0, "var-init"); k < l.length; ++k) {
                  const m = cc11001100_hook("m", l[k], "var-init");
                  if (m != g && $h(b, m)) break b;
                }
                g = cc11001100_hook("g", g.parentElement, "assign");
                g.style.width = cc11001100_hook("g.style.width", "100%", "assign");
                g.style.height = cc11001100_hook("g.style.height", "auto", "assign");
              }
            }
            bi(b, c);
          } else a = cc11001100_hook("a", g, "assign");
        } else a = cc11001100_hook("a", g, "assign");
      }
      if (250 > a) throw new U("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
      a = cc11001100_hook("a", Math.min(1200, Math.floor(a)), "assign");
      if (d && "in-article" != f) {
        f = cc11001100_hook("f", Math.ceil(d), "assign");
        if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
        return new mn(11, new ci(a, f));
      }
      if ("in-article" != f && (d = cc11001100_hook("d", e.google_ad_layout_key, "assign"))) {
        f = cc11001100_hook("f", "" + d, "assign");
        c = cc11001100_hook("c", Math.pow(10, 3), "assign");
        if (e = cc11001100_hook("e", (d = cc11001100_hook("d", f.match(/([+-][0-9a-z]+)/g), "assign")) && d.length, "assign")) for (b = cc11001100_hook("b", [], "assign"), g = cc11001100_hook("g", 0, "assign"); g < e; g++) b.push(parseInt(d[g], 36) / c);else b = cc11001100_hook("b", null, "assign");
        if (!b) throw new U("Invalid data-ad-layout-key value: " + f);
        f = cc11001100_hook("f", (a + -725) / 1E3, "assign");
        c = cc11001100_hook("c", 0, "assign");
        d = cc11001100_hook("d", 1, "assign");
        e = cc11001100_hook("e", b.length, "assign");
        for (g = cc11001100_hook("g", 0, "assign"); g < e; g++) c += cc11001100_hook("c", b[g] * d, "assign"), d *= cc11001100_hook("d", f, "assign");
        f = cc11001100_hook("f", Math.ceil(1E3 * c - -725 + 10), "assign");
        if (isNaN(f)) throw new U("Invalid height: height=" + f);
        if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
        if (1200 < f) throw new U("Fluid responsive ads must be at most 1200px tall: height=" + f);
        return new mn(11, new ci(a, f));
      }
      d = cc11001100_hook("d", un[f], "assign");
      if (!d) throw new U("Invalid data-ad-layout value: " + f);
      c = cc11001100_hook("c", fi(c, b), "assign");
      b = cc11001100_hook("b", P(b).clientWidth, "assign");
      b = cc11001100_hook("b", "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a)), "assign");
      return new mn(11, "in-article" == f ? new vn(a, b) : new ci(a, b));
    }, "var-init");
  var xn = cc11001100_hook("xn", a => b => {
      for (let c = cc11001100_hook("c", a.length - 1, "var-init"); 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    }, "var-init"),
    zn = cc11001100_hook("zn", (a, b) => {
      var c = cc11001100_hook("c", yn.slice(0), "var-init");
      const d = cc11001100_hook("d", c.length, "var-init");
      let e = cc11001100_hook("e", null, "var-init");
      for (let f = cc11001100_hook("f", 0, "var-init"); f < d; ++f) {
        const g = cc11001100_hook("g", c[f], "var-init");
        if (a(g)) {
          if (!b || b(g)) return g;
          null === e && (e = cc11001100_hook("e", g, "assign"));
        }
      }
      return e;
    }, "var-init");
  var Z = cc11001100_hook("Z", [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)], "var-init"),
    yn = cc11001100_hook("yn", [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]], "var-init");
  var Bn = cc11001100_hook("Bn", (a, b, c, d, e) => {
      "false" == e.google_full_width_responsive ? c = cc11001100_hook("c", {
        D: cc11001100_hook("D", a, "object-key-init"),
        F: cc11001100_hook("F", 1, "object-key-init")
      }, "assign") : "autorelaxed" == b && e.google_full_width_responsive || An(b) || e.google_ad_resize ? (b = cc11001100_hook("b", Yh(a, c, d, e), "assign"), c = cc11001100_hook("c", !0 !== b ? {
        D: cc11001100_hook("D", a, "object-key-init"),
        F: cc11001100_hook("F", b, "object-key-init")
      } : {
        D: cc11001100_hook("D", P(c).clientWidth || a, "object-key-init"),
        F: cc11001100_hook("F", !0, "object-key-init")
      }, "assign")) : c = cc11001100_hook("c", {
        D: cc11001100_hook("D", a, "object-key-init"),
        F: cc11001100_hook("F", 2, "object-key-init")
      }, "assign");
      const {
        D: f,
        F: g
      } = cc11001100_hook("", c, "var-init");
      return !0 !== g ? {
        D: cc11001100_hook("D", a, "object-key-init"),
        F: cc11001100_hook("F", g, "object-key-init")
      } : d.parentElement ? {
        D: cc11001100_hook("D", f, "object-key-init"),
        F: cc11001100_hook("F", g, "object-key-init")
      } : {
        D: cc11001100_hook("D", a, "object-key-init"),
        F: cc11001100_hook("F", g, "object-key-init")
      };
    }, "var-init"),
    En = cc11001100_hook("En", (a, b, c, d, e) => {
      const {
        D: f,
        F: g
      } = cc11001100_hook("", zj(247, () => Bn(a, b, c, d, e)), "var-init");
      var h = cc11001100_hook("h", !0 === g, "var-init");
      const l = cc11001100_hook("l", K(d.style.width), "var-init"),
        k = cc11001100_hook("k", K(d.style.height), "var-init"),
        {
          Z: m,
          X: u,
          oa: v,
          Oa: w
        } = cc11001100_hook("", Cn(f, b, c, d, e, h), "var-init");
      h = cc11001100_hook("h", Dn(b, v), "assign");
      var y;
      const F = cc11001100_hook("F", (y = cc11001100_hook("y", di(d, c, "marginLeft", K), "assign")) ? y + "px" : "", "var-init"),
        za = cc11001100_hook("za", (y = cc11001100_hook("y", di(d, c, "marginRight", K), "assign")) ? y + "px" : "", "var-init");
      y = cc11001100_hook("y", di(d, c, "zIndex") || "", "assign");
      return new mn(h, m, v, null, w, g, u, F, za, k, l, y);
    }, "var-init"),
    An = cc11001100_hook("An", a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a), "var-init"),
    Cn = cc11001100_hook("Cn", (a, b, c, d, e, f) => {
      b = cc11001100_hook("b", "auto" == b ? .25 >= a / Math.min(1200, P(c).clientWidth) ? 4 : 3 : Wh(b), "assign");
      let g;
      var h = cc11001100_hook("h", !1, "var-init");
      let l = cc11001100_hook("l", !1, "var-init");
      var k = cc11001100_hook("k", 488 > P(c).clientWidth, "var-init");
      if (k) {
        g = cc11001100_hook("g", Rh(d, c), "assign");
        var m = cc11001100_hook("m", fi(d, c), "var-init");
        h = cc11001100_hook("h", !m && g, "assign");
        l = cc11001100_hook("l", m && g, "assign");
      }
      m = cc11001100_hook("m", [ei(a), dn(b)], "assign");
      m.push(hi(k, c, d, l));
      null != e.google_max_responsive_height && m.push(ii(e.google_max_responsive_height));
      k = cc11001100_hook("k", [y => !y.ib], "assign");
      if (h || l) h = cc11001100_hook("h", ji(c, d), "assign"), k.push(ii(h));
      let u = cc11001100_hook("u", zn(xn(m), xn(k)), "var-init");
      if (!u) throw new U("No slot size for availableWidth=" + a);
      const {
        Z: v,
        X: w
      } = cc11001100_hook("", zj(248, () => {
        var y;
        a: if (f) {
          if (e.gfwrnh && (y = cc11001100_hook("y", K(e.gfwrnh), "assign"))) {
            y = cc11001100_hook("y", {
              Z: cc11001100_hook("Z", new tn(a, y), "object-key-init"),
              X: cc11001100_hook("X", !0, "object-key-init")
            }, "assign");
            break a;
          }
          y = cc11001100_hook("y", a / 1.2, "assign");
          var F = cc11001100_hook("F", Math, "var-init");
          var za = cc11001100_hook("za", F.min, "var-init");
          if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var S = cc11001100_hook("S", Infinity, "var-init");else {
            S = cc11001100_hook("S", d, "assign");
            let qa = cc11001100_hook("qa", Infinity, "var-init");
            do {
              var Aa = cc11001100_hook("Aa", di(S, c, "height", K), "var-init");
              Aa && (qa = cc11001100_hook("qa", Math.min(qa, Aa), "assign"));
              (Aa = cc11001100_hook("Aa", di(S, c, "maxHeight", K), "assign")) && (qa = cc11001100_hook("qa", Math.min(qa, Aa), "assign"));
            } while ((S = cc11001100_hook("S", S.parentElement, "assign")) && "HTML" != S.tagName);
            S = cc11001100_hook("S", qa, "assign");
          }
          F = cc11001100_hook("F", za.call(F, y, S), "assign");
          if (F < .5 * y || 100 > F) F = cc11001100_hook("F", y, "assign");
          y = cc11001100_hook("y", {
            Z: cc11001100_hook("Z", new tn(a, Math.floor(F)), "object-key-init"),
            X: cc11001100_hook("X", F < y ? 102 : !0, "object-key-init")
          }, "assign");
        } else y = cc11001100_hook("y", {
          Z: cc11001100_hook("Z", u, "object-key-init"),
          X: cc11001100_hook("X", 100, "object-key-init")
        }, "assign");
        return y;
      }), "var-init");
      return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
        Z: cc11001100_hook("Z", Fn(a, c, d, v, e), "object-key-init"),
        X: cc11001100_hook("X", !1, "object-key-init"),
        oa: cc11001100_hook("oa", b, "object-key-init"),
        Oa: cc11001100_hook("Oa", g, "object-key-init")
      } : {
        Z: cc11001100_hook("Z", v, "object-key-init"),
        X: cc11001100_hook("X", w, "object-key-init"),
        oa: cc11001100_hook("oa", b, "object-key-init"),
        Oa: cc11001100_hook("Oa", g, "object-key-init")
      };
    }, "var-init");
  const Dn = cc11001100_hook("Dn", (a, b) => {
      if ("auto" == a) return 1;
      switch (b) {
        case 2:
          return 2;
        case 1:
          return 3;
        case 4:
          return 4;
        case 3:
          return 5;
        case 6:
          return 6;
        case 5:
          return 7;
        case 7:
          return 8;
      }
      throw Error("bad mask");
    }, "var-init"),
    Fn = cc11001100_hook("Fn", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", e.google_ad_height || di(c, b, "height", K), "var-init");
      b = cc11001100_hook("b", wn(a, b, c, f, e).size(), "assign");
      return b.K * b.height() > a * d.height() ? new Y(b.K, b.height(), 1) : d;
    }, "var-init");
  var Gn = cc11001100_hook("Gn", (a, b, c, d, e) => {
    var f;
    (f = cc11001100_hook("f", P(b).clientWidth, "assign")) ? 488 > P(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), bi(b, c), f = cc11001100_hook("f", {
      D: cc11001100_hook("D", f, "object-key-init"),
      F: cc11001100_hook("F", !0, "object-key-init")
    }, "assign")) : f = cc11001100_hook("f", {
      D: cc11001100_hook("D", a, "object-key-init"),
      F: cc11001100_hook("F", 5, "object-key-init")
    }, "assign") : f = cc11001100_hook("f", {
      D: cc11001100_hook("D", a, "object-key-init"),
      F: cc11001100_hook("F", 4, "object-key-init")
    }, "assign") : f = cc11001100_hook("f", {
      D: cc11001100_hook("D", a, "object-key-init"),
      F: cc11001100_hook("F", 10, "object-key-init")
    }, "assign");
    const {
      D: g,
      F: h
    } = cc11001100_hook("", f, "var-init");
    if (!0 !== h || a == g) return new mn(12, new ci(a, d), null, null, !0, h, 100);
    const {
      Z: l,
      X: k,
      oa: m
    } = cc11001100_hook("", Cn(g, "auto", b, c, e, !0), "var-init");
    return new mn(1, l, m, 2, !0, h, k);
  }, "var-init");
  var In = cc11001100_hook("In", (a, b) => {
      const c = cc11001100_hook("c", b.google_ad_format, "var-init");
      if ("autorelaxed" == c) {
        a: {
          if ("pedestal" != b.google_content_recommendation_ui_type) for (const d of nn) if (null != b[d]) {
            a = cc11001100_hook("a", !0, "assign");
            break a;
          }
          a = cc11001100_hook("a", !1, "assign");
        }
        return a ? 9 : 5;
      }
      if (An(c)) return 1;
      if ("link" === c) return 4;
      if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Hn(b), 1);
      if (27 === b.google_reactive_ad_format) return Hn(b), 1;
    }, "var-init"),
    Kn = cc11001100_hook("Kn", (a, b, c, d, e = !1) => {
      e = cc11001100_hook("e", b.offsetWidth || (c.google_ad_resize || e) && di(b, d, "width", K) || c.google_ad_width || 0, "assign");
      4 === a && (c.google_ad_format = cc11001100_hook("c.google_ad_format", "auto", "assign"), a = cc11001100_hook("a", 1, "assign"));
      var f = cc11001100_hook("f", (f = cc11001100_hook("f", Jn(a, e, b, c, d), "assign")) ? f : En(e, c.google_ad_format, d, b, c), "var-init");
      f.size().i(d, c, b);
      ln(f, e, c);
      1 != a && (a = cc11001100_hook("a", f.size().height(), "assign"), b.style.height = cc11001100_hook("b.style.height", a + "px", "assign"));
    }, "var-init");
  const Jn = cc11001100_hook("Jn", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", d.google_ad_height || di(c, e, "height", K), "var-init");
      switch (a) {
        case 5:
          const {
            D: g,
            F: h
          } = cc11001100_hook("", zj(247, () => Bn(b, d.google_ad_format, e, c, d)), "var-init");
          !0 === h && b != g && bi(e, c);
          !0 === h ? d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !0, "assign") : (d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !1, "assign"), d.gfwrnwer = cc11001100_hook("d.gfwrnwer", h, "assign"));
          return rn(g, d);
        case 9:
          return sn(b, d);
        case 8:
          return wn(b, e, c, f, d);
        case 10:
          return Gn(b, e, c, f, d);
      }
    }, "var-init"),
    Hn = cc11001100_hook("Hn", a => {
      a.google_ad_format = cc11001100_hook("a.google_ad_format", "auto", "assign");
      a.armr = cc11001100_hook("a.armr", 3, "assign");
    }, "var-init");
  function Ln(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Lc(b), "var-init");
    if (c) {
      c = cc11001100_hook("c", P(c).clientWidth, "assign");
      const d = cc11001100_hook("d", Oc(a, b) || {}, "var-init"),
        e = cc11001100_hook("e", d.direction, "var-init");
      if ("0px" === d.width && "none" !== d.cssFloat) return -1;
      if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if ("rtl" === e && c) return a = cc11001100_hook("a", b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, "assign"), Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)));
    }
    return -1;
  }
  ;
  function Mn({
    qa: a,
    va: b
  }) {
    return a || ("dev" === b ? "dev" : "");
  }
  ;
  function Nn(a) {
    cc11001100_hook("a", a, "function-parameter");
    V.wa(b => {
      b.shv = cc11001100_hook("b.shv", String(a), "assign");
      b.mjsv = cc11001100_hook("b.mjsv", Mn({
        qa: cc11001100_hook("qa", "m202303210101", "object-key-init"),
        va: cc11001100_hook("va", a, "object-key-init")
      }), "assign");
      const c = cc11001100_hook("c", M(Sf).i(), "var-init"),
        d = cc11001100_hook("d", X(n), "var-init");
      d.eids || (d.eids = cc11001100_hook("d.eids", [], "assign"));
      b.eid = cc11001100_hook("b.eid", c.concat(d.eids).join(","), "assign");
    });
  }
  function On(a) {
    cc11001100_hook("a", a, "function-parameter");
    Nn(G(a, 2));
    a = cc11001100_hook("a", A(a, 6), "assign");
    $b(wl, Xd);
    wl = cc11001100_hook("wl", a, "assign");
  }
  ;
  function Pn(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", V, "var-init");
    try {
      return $b(a, Wd), new vl(JSON.parse(a));
    } catch (c) {
      b.I(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
        d.jspb = cc11001100_hook("d.jspb", String(a), "assign");
      });
    }
    return new vl();
  }
  ;
  function Qn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`;
  }
  function Rn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return `&${a}=${b.toFixed(3)}`;
  }
  function Sn() {
    const a = cc11001100_hook("a", new Set(), "var-init"),
      b = cc11001100_hook("b", mj(), "var-init");
    try {
      if (!b) return a;
      const c = cc11001100_hook("c", b.pubads(), "var-init");
      for (const d of c.getSlots()) a.add(d.getSlotId().getDomId());
    } catch (c) {}
    return a;
  }
  function Tn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.id, "assign");
    return null != a && (Sn().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"));
  }
  function Un(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a.sources) return !1;
    switch (Vn(a)) {
      case 2:
        const d = cc11001100_hook("d", Wn(a), "var-init");
        if (d) return c.some(f => Xn(d, f));
      case 1:
        const e = cc11001100_hook("e", Yn(a), "var-init");
        if (e) return b.some(f => Xn(e, f));
    }
    return !1;
  }
  function Vn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.sources) return 0;
    a = cc11001100_hook("a", a.sources.filter(b => b.previousRect && b.currentRect), "assign");
    if (1 <= a.length) {
      a = cc11001100_hook("a", a[0], "assign");
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function Yn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Zn(a, b => b.currentRect);
  }
  function Wn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Zn(a, b => b.previousRect);
  }
  function Zn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.sources.reduce((c, d) => {
      d = cc11001100_hook("d", b(d), "assign");
      return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d;
    }, null);
  }
  function Xn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Math.min(a.right, b.right) - Math.max(a.left, b.left), "var-init");
    a = cc11001100_hook("a", Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top), "assign");
    return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top));
  }
  function $n() {
    const a = cc11001100_hook("a", [...document.getElementsByTagName("iframe")].filter(Tn), "var-init"),
      b = cc11001100_hook("b", [...Sn()].map(c => document.getElementById(c)).filter(c => null !== c), "var-init");
    ao = cc11001100_hook("ao", window.scrollX, "assign");
    bo = cc11001100_hook("bo", window.scrollY, "assign");
    return co = cc11001100_hook("co", [...a, ...b].map(c => c.getBoundingClientRect()), "assign");
  }
  function eo() {
    var a = cc11001100_hook("a", new fo(), "var-init");
    if (T(wh)) {
      var b = cc11001100_hook("b", window, "var-init");
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = cc11001100_hook("b.google_plmetrics", !0, "assign");
        b = cc11001100_hook("b", ["layout-shift", "largest-contentful-paint", "first-input", "longtask"], "assign");
        for (const c of b) a.N().observe({
          type: cc11001100_hook("type", c, "object-key-init"),
          buffered: cc11001100_hook("buffered", !0, "object-key-init")
        });
        go(a);
      }
    }
  }
  function go(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", qi(641, () => {
        var d = cc11001100_hook("d", document, "var-init");
        2 == (d.prerendering ? 3 : {
          visible: cc11001100_hook("visible", 1, "object-key-init"),
          hidden: cc11001100_hook("hidden", 2, "object-key-init"),
          prerender: cc11001100_hook("prerender", 3, "object-key-init"),
          preview: cc11001100_hook("preview", 4, "object-key-init"),
          unloaded: cc11001100_hook("unloaded", 5, "object-key-init")
        }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && ho(a);
      }), "var-init"),
      c = cc11001100_hook("c", qi(641, () => void ho(a)), "var-init");
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.xa = cc11001100_hook("a.xa", () => {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      a.N().disconnect();
    }, "assign");
  }
  function ho(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.Ea) {
      a.Ea = cc11001100_hook("a.Ea", !0, "assign");
      a.N().takeRecords();
      var b = cc11001100_hook("b", "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics", "var-init");
      window.LayoutShift && (b += cc11001100_hook("b", Rn("cls", a.B), "assign"), b += cc11001100_hook("b", Rn("mls", a.J), "assign"), b += cc11001100_hook("b", Qn("nls", a.P), "assign"), window.LayoutShiftAttribution && (b += cc11001100_hook("b", Rn("cas", a.m), "assign"), b += cc11001100_hook("b", Qn("nas", a.Da), "assign")), b += cc11001100_hook("b", Rn("wls", a.da), "assign"), b += cc11001100_hook("b", Rn("tls", a.Ha), "assign"), window.LayoutShiftAttribution && (b += cc11001100_hook("b", Rn("was", a.Ia), "assign")));
      window.LargestContentfulPaint && (b += cc11001100_hook("b", Qn("lcp", a.Ba), "assign"), b += cc11001100_hook("b", Qn("lcps", a.Aa), "assign"));
      window.PerformanceEventTiming && a.za && (b += cc11001100_hook("b", Qn("fid", a.ya), "assign"));
      window.PerformanceLongTaskTiming && (b += cc11001100_hook("b", Qn("cbt", a.v), "assign"), b += cc11001100_hook("b", Qn("mbt", a.C), "assign"), b += cc11001100_hook("b", Qn("nlt", a.R), "assign"));
      let d = cc11001100_hook("d", 0, "var-init");
      for (var c of document.getElementsByTagName("iframe")) Tn(c) && d++;
      b += cc11001100_hook("b", Qn("nif", d), "assign");
      b += cc11001100_hook("b", Qn("ifi", sd(window)), "assign");
      c = cc11001100_hook("c", M(Sf).i(), "assign");
      b += cc11001100_hook("b", `&${"eid"}=${encodeURIComponent(c.join())}`, "assign");
      b += cc11001100_hook("b", `&${"top"}=${n === n.top ? 1 : 0}`, "assign");
      b += cc11001100_hook("b", a.Ga ? `&${"qqid"}=${encodeURIComponent(a.Ga)}` : Qn("pvsid", cd(n)), "assign");
      window.googletag && (b += cc11001100_hook("b", "&gpt=1", "assign"));
      window.fetch(b, {
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        credentials: cc11001100_hook("credentials", "include", "object-key-init"),
        redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      });
      cf(a);
    }
  }
  class fo extends bf {
    constructor() {
      super();
      this.l = cc11001100_hook("this.l", this.i = cc11001100_hook("this.i", this.P = cc11001100_hook("this.P", this.J = cc11001100_hook("this.J", this.B = cc11001100_hook("this.B", 0, "assign"), "assign"), "assign"), "assign"), "assign");
      this.Fa = cc11001100_hook("this.Fa", this.Ca = cc11001100_hook("this.Ca", Number.NEGATIVE_INFINITY, "assign"), "assign");
      this.ya = cc11001100_hook("this.ya", this.Aa = cc11001100_hook("this.Aa", this.Ba = cc11001100_hook("this.Ba", this.Da = cc11001100_hook("this.Da", this.Ia = cc11001100_hook("this.Ia", this.m = cc11001100_hook("this.m", this.Ha = cc11001100_hook("this.Ha", this.da = cc11001100_hook("this.da", 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
      this.za = cc11001100_hook("this.za", !1, "assign");
      this.R = cc11001100_hook("this.R", this.C = cc11001100_hook("this.C", this.v = cc11001100_hook("this.v", 0, "assign"), "assign"), "assign");
      const a = cc11001100_hook("a", document.querySelector("[data-google-query-id]"), "var-init");
      this.Ga = cc11001100_hook("this.Ga", a ? a.getAttribute("data-google-query-id") : null, "assign");
      this.T = cc11001100_hook("this.T", null, "assign");
      this.Ea = cc11001100_hook("this.Ea", !1, "assign");
      this.xa = cc11001100_hook("this.xa", () => {}, "assign");
    }
    N() {
      this.T || (this.T = cc11001100_hook("this.T", new PerformanceObserver(qi(640, a => {
        const b = cc11001100_hook("b", ao !== window.scrollX || bo !== window.scrollY ? [] : co, "var-init"),
          c = cc11001100_hook("c", $n(), "var-init");
        for (const f of a.getEntries()) switch (f.entryType) {
          case "layout-shift":
            a = cc11001100_hook("a", f, "assign");
            var d = cc11001100_hook("d", b, "var-init"),
              e = cc11001100_hook("e", c, "var-init");
            if (!a.hadRecentInput) {
              this.B += cc11001100_hook("this.B", Number(a.value), "assign");
              Number(a.value) > this.J && (this.J = cc11001100_hook("this.J", Number(a.value), "assign"));
              this.P += cc11001100_hook("this.P", 1, "assign");
              if (d = cc11001100_hook("d", Un(a, d, e), "assign")) this.m += cc11001100_hook("this.m", a.value, "assign"), this.Da++;
              if (5E3 < a.startTime - this.Ca || 1E3 < a.startTime - this.Fa) this.Ca = cc11001100_hook("this.Ca", a.startTime, "assign"), this.l = cc11001100_hook("this.l", this.i = cc11001100_hook("this.i", 0, "assign"), "assign");
              this.Fa = cc11001100_hook("this.Fa", a.startTime, "assign");
              this.i += cc11001100_hook("this.i", a.value, "assign");
              d && (this.l += cc11001100_hook("this.l", a.value, "assign"));
              this.i > this.da && (this.da = cc11001100_hook("this.da", this.i, "assign"), this.Ia = cc11001100_hook("this.Ia", this.l, "assign"), this.Ha = cc11001100_hook("this.Ha", a.startTime + a.duration, "assign"));
            }
            break;
          case "largest-contentful-paint":
            a = cc11001100_hook("a", f, "assign");
            this.Ba = cc11001100_hook("this.Ba", Math.floor(a.renderTime || a.loadTime), "assign");
            this.Aa = cc11001100_hook("this.Aa", a.size, "assign");
            break;
          case "first-input":
            a = cc11001100_hook("a", f, "assign");
            this.ya = cc11001100_hook("this.ya", Number((a.processingStart - a.startTime).toFixed(3)), "assign");
            this.za = cc11001100_hook("this.za", !0, "assign");
            break;
          case "longtask":
            a = cc11001100_hook("a", Math.max(0, f.duration - 50), "assign"), this.v += cc11001100_hook("this.v", a, "assign"), this.C = cc11001100_hook("this.C", Math.max(this.C, a), "assign"), this.R += cc11001100_hook("this.R", 1, "assign");
        }
      })), "assign"));
      return this.T;
    }
    h() {
      super.h();
      this.xa();
    }
  }
  var ao = cc11001100_hook("ao", void 0, "var-init"),
    bo = cc11001100_hook("bo", void 0, "var-init"),
    co = cc11001100_hook("co", [], "var-init");
  var io = cc11001100_hook("io", class extends I {
    constructor() {
      super();
    }
    getVersion() {
      return G(this, 2);
    }
  }, "var-init");
  function jo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 2, b);
  }
  function ko(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 3, b);
  }
  function lo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 4, b);
  }
  function mo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 5, b);
  }
  function no(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 9, b);
  }
  function oo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gb(a, 10, b);
  }
  function po(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 11, b);
  }
  function qo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  function ro(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 7, b);
  }
  var to = cc11001100_hook("to", class extends I {
      constructor() {
        super(void 0, -1, so);
      }
    }, "var-init"),
    so = cc11001100_hook("so", [10, 6], "var-init");
  const uo = cc11001100_hook("uo", "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" "), "var-init");
  function vo() {
    if ("function" !== typeof L.navigator?.userAgentData?.getHighEntropyValues) return null;
    const a = cc11001100_hook("a", L.google_tag_data ?? (L.google_tag_data = cc11001100_hook("L.google_tag_data", {}, "assign")), "var-init");
    if (a.uach_promise) return a.uach_promise;
    const b = cc11001100_hook("b", L.navigator.userAgentData.getHighEntropyValues(uo).then(c => {
      a.uach ?? (a.uach = cc11001100_hook("a.uach", c, "assign"));
      return c;
    }), "var-init");
    return a.uach_promise = cc11001100_hook("a.uach_promise", b, "assign");
  }
  function wo(a) {
    cc11001100_hook("a", a, "function-parameter");
    return po(oo(mo(jo(qo(lo(ro(no(ko(new to(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList?.map(b => {
      var c = cc11001100_hook("c", new io(), "var-init");
      c = cc11001100_hook("c", x(c, 1, b.brand), "assign");
      return x(c, 2, b.version);
    }) || []), a.wow64 || !1);
  }
  function xo() {
    return vo()?.then(a => wo(a)) ?? null;
  }
  ;
  function yo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.google_ad_host || (a = cc11001100_hook("a", Ql(a), "assign")) && (b.google_ad_host = cc11001100_hook("b.google_ad_host", a, "assign"));
  }
  function zo(a, b, c = "") {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, delete L.google_sa_impl);
    L.google_sa_queue || (L.google_sa_queue = cc11001100_hook("L.google_sa_queue", [], "assign"), L.google_process_slots = cc11001100_hook("L.google_process_slots", V.na(215, () => Ao(L.google_sa_queue)), "assign"), a = cc11001100_hook("a", Bo(c, a, b), "assign"), Mc(L.document, a).id = cc11001100_hook("Mc(L.document, a).id", "google_shimpl", "assign"));
  }
  function Ao(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.shift(), "var-init");
    "function" === typeof b && V.fa(216, b);
    a.length && n.setTimeout(V.na(215, () => Ao(a)), 0);
  }
  function Co(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.google_sa_queue = cc11001100_hook("a.google_sa_queue", a.google_sa_queue || [], "assign");
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
  }
  function Bo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", A(c, 4) ? b.qb : b.rb, "assign");
    const d = cc11001100_hook("d", {}, "var-init");
    a: {
      if (A(c, 4)) {
        if (a = cc11001100_hook("a", a || rm(L), "assign")) {
          a = cc11001100_hook("a", {
            client: cc11001100_hook("client", a, "object-key-init"),
            plah: cc11001100_hook("plah", L.location.host, "object-key-init")
          }, "assign");
          break a;
        }
        throw Error("PublisherCodeNotFoundForAma");
      }
      a = cc11001100_hook("a", {}, "assign");
    }
    Do(a, d);
    Do(Kh() ? {
      bust: cc11001100_hook("bust", Kh(), "object-key-init")
    } : {}, d);
    return xc(b, d);
  }
  function Do(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    J(a, (c, d) => {
      void 0 === b[d] && (b[d] = cc11001100_hook("b[d]", c, "assign"));
    });
  }
  function Eo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a: {
      var b = cc11001100_hook("b", [n.top], "var-init");
      var c = cc11001100_hook("c", [], "var-init");
      let e = cc11001100_hook("e", 0, "var-init"),
        f;
      for (; f = cc11001100_hook("f", b[e++], "assign");) {
        c.push(f);
        try {
          if (f.frames) for (let g = cc11001100_hook("g", 0, "var-init"); g < f.frames.length && 1024 > b.length; ++g) b.push(f.frames[g]);
        } catch {}
      }
      b = cc11001100_hook("b", c, "assign");
      for (c = cc11001100_hook("c", 0, "assign"); c < b.length; c++) try {
        var d = cc11001100_hook("d", b[c].frames.google_esf, "var-init");
        if (d) {
          kd = cc11001100_hook("kd", d, "assign");
          break a;
        }
      } catch (g) {}
      kd = cc11001100_hook("kd", null, "assign");
    }
    if (kd) return null;
    d = cc11001100_hook("d", Nc("IFRAME"), "assign");
    d.id = cc11001100_hook("d.id", "google_esf", "assign");
    d.name = cc11001100_hook("d.name", "google_esf", "assign");
    d.src = cc11001100_hook("d.src", zc(a.xb).toString(), "assign");
    d.style.display = cc11001100_hook("d.style.display", "none", "assign");
    return d;
  }
  function Fo(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", e.eb, "var-init");
    Go(a, c, b);
    c = cc11001100_hook("c", oa, "assign");
    const g = cc11001100_hook("g", new Date().getTime(), "var-init");
    b.google_lrv = cc11001100_hook("b.google_lrv", Mn({
      qa: cc11001100_hook("qa", "m202303210101", "object-key-init"),
      va: cc11001100_hook("va", G(d, 2), "object-key-init")
    }), "assign");
    b.google_async_iframe_id = cc11001100_hook("b.google_async_iframe_id", f, "assign");
    b.google_start_time = cc11001100_hook("b.google_start_time", c, "assign");
    b.google_bpp = cc11001100_hook("b.google_bpp", g > c ? g - c : 1, "assign");
    a.google_sv_map = cc11001100_hook("a.google_sv_map", a.google_sv_map || {}, "assign");
    a.google_sv_map[f] = cc11001100_hook("a.google_sv_map[f]", b, "assign");
    d = cc11001100_hook("d", a.document.getElementById(f + "_host") ? h => h() : h => window.setTimeout(h, 0), "assign");
    Co(a, () => {
      var {
        wb: h
      } = cc11001100_hook("", e, "var-init");
      if (!h || !h.isConnected) if (h = cc11001100_hook("h", a.document.getElementById(String(b.google_async_iframe_id) + "_host"), "assign"), null == h) throw Error("no_div");
      (h = cc11001100_hook("h", a.google_sa_impl({
        pubWin: cc11001100_hook("pubWin", a, "object-key-init"),
        vars: cc11001100_hook("vars", b, "object-key-init"),
        innerInsElement: cc11001100_hook("innerInsElement", h, "object-key-init")
      }), "assign")) && V.aa(911, h);
    }, d);
  }
  function Go(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", c.google_ad_output, "var-init"),
      e = cc11001100_hook("e", c.google_ad_format, "var-init"),
      f = cc11001100_hook("f", c.google_ad_width || 0, "var-init"),
      g = cc11001100_hook("g", c.google_ad_height || 0, "var-init");
    e || "html" !== d && null != d || (e = cc11001100_hook("e", f + "x" + g, "assign"));
    d = cc11001100_hook("d", !c.google_ad_slot || c.google_override_format || !bn[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used, "assign");
    e && d ? e = cc11001100_hook("e", e.toLowerCase(), "assign") : e = cc11001100_hook("e", "", "assign");
    c.google_ad_format = cc11001100_hook("c.google_ad_format", e, "assign");
    if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
      e = cc11001100_hook("e", [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height], "assign");
      d = cc11001100_hook("d", [], "assign");
      f = cc11001100_hook("f", 0, "assign");
      for (g = cc11001100_hook("g", b, "assign"); g && 25 > f; g = cc11001100_hook("g", g.parentNode, "assign"), ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
      (d = cc11001100_hook("d", d.join(), "assign")) && e.push(d);
      c.google_ad_unit_key = cc11001100_hook("c.google_ad_unit_key", Tc(e.join(":")).toString(), "assign");
      e = cc11001100_hook("e", [], "assign");
      for (d = cc11001100_hook("d", 0, "assign"); b && 25 > d; ++d) {
        f = cc11001100_hook("f", (f = cc11001100_hook("f", 9 !== b.nodeType && b.id, "assign")) ? "/" + f : "", "assign");
        a: {
          if (b && b.nodeName && b.parentElement) {
            g = cc11001100_hook("g", b.nodeName.toString().toLowerCase(), "assign");
            const h = cc11001100_hook("h", b.parentElement.childNodes, "var-init");
            let l = cc11001100_hook("l", 0, "var-init");
            for (let k = cc11001100_hook("k", 0, "var-init"); k < h.length; ++k) {
              const m = cc11001100_hook("m", h[k], "var-init");
              if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                if (b === m) {
                  g = cc11001100_hook("g", "." + l, "assign");
                  break a;
                }
                ++l;
              }
            }
          }
          g = cc11001100_hook("g", "", "assign");
        }
        e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
        b = cc11001100_hook("b", b.parentElement, "assign");
      }
      b = cc11001100_hook("b", e.join() + ":", "assign");
      e = cc11001100_hook("e", [], "assign");
      if (a) try {
        let h = cc11001100_hook("h", a.parent, "var-init");
        for (d = cc11001100_hook("d", 0, "assign"); h && h !== a && 25 > d; ++d) {
          const l = cc11001100_hook("l", h.frames, "var-init");
          for (f = cc11001100_hook("f", 0, "assign"); f < l.length; ++f) if (a === l[f]) {
            e.push(f);
            break;
          }
          a = cc11001100_hook("a", h, "assign");
          h = cc11001100_hook("h", a.parent, "assign");
        }
      } catch (h) {}
      c.google_ad_dom_fingerprint = cc11001100_hook("c.google_ad_dom_fingerprint", Tc(b + e.join()).toString(), "assign");
    }
  }
  function Ho() {
    var a = cc11001100_hook("a", Lc(n), "var-init");
    a && (a = cc11001100_hook("a", Ag(a), "assign"), a.tagSpecificState[1] || (a.tagSpecificState[1] = cc11001100_hook("a.tagSpecificState[1]", {
      debugCard: cc11001100_hook("debugCard", null, "object-key-init"),
      debugCardRequested: cc11001100_hook("debugCardRequested", !1, "object-key-init")
    }, "assign")));
  }
  function Io() {
    const a = cc11001100_hook("a", xo(), "var-init");
    null != a && a.then(b => {
      a: {
        mb = cc11001100_hook("mb", !0, "assign");
        try {
          var c = cc11001100_hook("c", JSON.stringify(b.toJSON(), Xb), "var-init");
          break a;
        } finally {
          mb = cc11001100_hook("mb", !1, "assign");
        }
        c = cc11001100_hook("c", void 0, "assign");
      }
      L.google_user_agent_client_hint = cc11001100_hook("L.google_user_agent_client_hint", c, "assign");
    });
    Em();
  }
  ;
  function Jo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    switch (a) {
      case "google_reactive_ad_format":
        return a = cc11001100_hook("a", parseInt(b, 10), "assign"), isNaN(a) ? 0 : a;
      case "google_allow_expandable_ads":
        return /^true$/.test(b);
      default:
        return b;
    }
  }
  function Ko(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.getAttribute("src")) {
      var c = cc11001100_hook("c", a.getAttribute("src") || "", "var-init"),
        d = cc11001100_hook("d", Jc(c, "client"), "var-init");
      d && (b.google_ad_client = cc11001100_hook("b.google_ad_client", Jo("google_ad_client", d), "assign"));
      (c = cc11001100_hook("c", Jc(c, "host"), "assign")) && (b.google_ad_host = cc11001100_hook("b.google_ad_host", Jo("google_ad_host", c), "assign"));
    }
    a = cc11001100_hook("a", a.attributes, "assign");
    c = cc11001100_hook("c", a.length, "assign");
    for (d = cc11001100_hook("d", 0, "assign"); d < c; d++) {
      var e = cc11001100_hook("e", a[d], "var-init");
      if (/data-/.test(e.name)) {
        const f = cc11001100_hook("f", pa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), "var-init");
        b.hasOwnProperty(f) || (e = cc11001100_hook("e", Jo(f, e.value), "assign"), null !== e && (b[f] = cc11001100_hook("b[f]", e, "assign")));
      }
    }
  }
  function Lo(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", nd(a), "assign")) switch (a.data && a.data.autoFormat) {
      case "rspv":
        return 13;
      case "mcrspv":
        return 15;
      default:
        return 14;
    } else return 12;
  }
  function Mo(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Ko(a, b);
    if (c.document && c.document.body && !In(c, b) && !b.google_reactive_ad_format) {
      var e = cc11001100_hook("e", parseInt(a.style.width, 10), "var-init"),
        f = cc11001100_hook("f", Ln(a, c), "var-init");
      if (0 < f && e > f) {
        var g = cc11001100_hook("g", parseInt(a.style.height, 10), "var-init");
        e = cc11001100_hook("e", !!bn[e + "x" + g], "assign");
        var h = cc11001100_hook("h", f, "var-init");
        if (e) {
          const l = cc11001100_hook("l", cn(f, g), "var-init");
          if (l) h = cc11001100_hook("h", l, "assign"), b.google_ad_format = cc11001100_hook("b.google_ad_format", l + "x" + g + "_0ads_al", "assign");else throw new U("No slot size for availableWidth=" + f);
        }
        b.google_ad_resize = cc11001100_hook("b.google_ad_resize", !0, "assign");
        b.google_ad_width = cc11001100_hook("b.google_ad_width", h, "assign");
        e || (b.google_ad_format = cc11001100_hook("b.google_ad_format", null, "assign"), b.google_override_format = cc11001100_hook("b.google_override_format", !0, "assign"));
        f = cc11001100_hook("f", h, "assign");
        a.style.width = cc11001100_hook("a.style.width", `${f}px`, "assign");
        g = cc11001100_hook("g", En(f, "auto", c, a, b), "assign");
        h = cc11001100_hook("h", f, "assign");
        g.size().i(c, b, a);
        ln(g, h, b);
        g = cc11001100_hook("g", g.size(), "assign");
        b.google_responsive_formats = cc11001100_hook("b.google_responsive_formats", null, "assign");
        g.K > f && !e && (b.google_ad_width = cc11001100_hook("b.google_ad_width", g.K, "assign"), a.style.width = cc11001100_hook("a.style.width", `${g.K}px`, "assign"));
      }
    }
    (e = cc11001100_hook("e", a.offsetWidth, "assign")) || (e = cc11001100_hook("e", di(a, c, "width", K), "assign"));
    e = cc11001100_hook("e", e || b.google_ad_width || 0, "assign");
    if (488 > P(c).clientWidth) {
      f = cc11001100_hook("f", Lc(c) || c, "assign");
      g = cc11001100_hook("g", b.google_ad_client, "assign");
      if (d = cc11001100_hook("d", kj(f.location, "google_responsive_slot_preview") || T(nh) || zl(f, 1, g, d), "assign")) b: if (b.google_reactive_ad_format || b.google_ad_resize || In(c, b) || Th(a, b)) d = cc11001100_hook("d", !1, "assign");else {
        for (d = cc11001100_hook("d", a, "assign"); d; d = cc11001100_hook("d", d.parentElement, "assign")) {
          f = cc11001100_hook("f", Oc(d, c), "assign");
          if (!f) {
            b.gfwrnwer = cc11001100_hook("b.gfwrnwer", 18, "assign");
            d = cc11001100_hook("d", !1, "assign");
            break b;
          }
          if (!Ra(["static", "relative"], f.position)) {
            b.gfwrnwer = cc11001100_hook("b.gfwrnwer", 17, "assign");
            d = cc11001100_hook("d", !1, "assign");
            break b;
          }
        }
        d = cc11001100_hook("d", Xh(c, a, e, .3, b), "assign");
        !0 !== d ? (b.gfwrnwer = cc11001100_hook("b.gfwrnwer", d, "assign"), d = cc11001100_hook("d", !1, "assign")) : d = cc11001100_hook("d", c === c.top ? !0 : !1, "assign");
      }
      d ? (b.google_resizing_allowed = cc11001100_hook("b.google_resizing_allowed", !0, "assign"), b.ovlp = cc11001100_hook("b.ovlp", !0, "assign"), b.google_ad_format = cc11001100_hook("b.google_ad_format", "auto", "assign"), b.iaaso = cc11001100_hook("b.iaaso", !0, "assign"), b.armr = cc11001100_hook("b.armr", 1, "assign"), d = cc11001100_hook("d", !0, "assign")) : d = cc11001100_hook("d", !1, "assign");
    } else d = cc11001100_hook("d", !1, "assign");
    if (e = cc11001100_hook("e", In(c, b), "assign")) Kn(e, a, b, c, d);else {
      if (Th(a, b)) {
        if (d = cc11001100_hook("d", Oc(a, c), "assign")) a.style.width = cc11001100_hook("a.style.width", d.width, "assign"), a.style.height = cc11001100_hook("a.style.height", d.height, "assign"), Sh(d, b);
        b.google_ad_width || (b.google_ad_width = cc11001100_hook("b.google_ad_width", a.offsetWidth, "assign"));
        b.google_ad_height || (b.google_ad_height = cc11001100_hook("b.google_ad_height", a.offsetHeight, "assign"));
        b.google_loader_features_used = cc11001100_hook("b.google_loader_features_used", 256, "assign");
        b.google_responsive_auto_format = cc11001100_hook("b.google_responsive_auto_format", Lo(c), "assign");
      } else Sh(a.style, b);
      c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Kn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = cc11001100_hook("a", Yh(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), "assign"), !0 !== a ? (b.efwr = cc11001100_hook("b.efwr", !1, "assign"), b.gfwrnwer = cc11001100_hook("b.gfwrnwer", a, "assign")) : b.efwr = cc11001100_hook("b.efwr", !0, "assign"));
    }
  }
  ;
  function No(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.i) return a.i;
    a.C && a.C(a.l) ? a.i = cc11001100_hook("a.i", a.l, "assign") : a.i = cc11001100_hook("a.i", Yc(a.l, a.J), "assign");
    return a.i ?? null;
  }
  var Oo = cc11001100_hook("Oo", class extends bf {
    constructor(a, b, c) {
      super();
      this.J = cc11001100_hook("this.J", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.P = cc11001100_hook("this.P", c, "assign");
      this.B = cc11001100_hook("this.B", new Map(), "assign");
      this.v = cc11001100_hook("this.v", new Map(), "assign");
      this.T = cc11001100_hook("this.T", new Map(), "assign");
      this.R = cc11001100_hook("this.R", new Map(), "assign");
      this.m = cc11001100_hook("this.m", void 0, "assign");
      this.l = cc11001100_hook("this.l", L, "assign");
    }
    h() {
      delete this.i;
      this.B.clear();
      this.v.clear();
      this.T.clear();
      this.R.clear();
      this.m && (mc(this.l, "message", this.m), delete this.m);
      delete this.l;
      delete this.P;
      super.h();
    }
  }, "var-init");
  const Po = cc11001100_hook("Po", (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.callback({
          consentData: cc11001100_hook("consentData", c ?? void 0, "object-key-init"),
          bb: cc11001100_hook("bb", d ? void 0 : 2, "object-key-init")
        });
      });
    }, "var-init"),
    Qo = cc11001100_hook("Qo", {
      jb: cc11001100_hook("jb", a => a.callback, "object-key-init"),
      kb: cc11001100_hook("kb", (a, b) => ({
        __uspapiCall: {
          callId: cc11001100_hook("callId", b, "object-key-init"),
          command: cc11001100_hook("command", "getUSPData", "object-key-init"),
          version: cc11001100_hook("version", 1, "object-key-init")
        }
      }), "object-key-init"),
      mb: cc11001100_hook("mb", (a, b) => {
        b = cc11001100_hook("b", b.__uspapiReturn, "assign");
        a({
          consentData: cc11001100_hook("consentData", b.returnValue ?? void 0, "object-key-init"),
          bb: cc11001100_hook("bb", b.success ? void 0 : 2, "object-key-init")
        });
      }, "object-key-init")
    }, "var-init");
  function Ro(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", {}, "var-init");
    "string" === typeof a.data ? b = cc11001100_hook("b", JSON.parse(a.data), "assign") : b = cc11001100_hook("b", a.data, "assign");
    return {
      payload: cc11001100_hook("payload", b, "object-key-init"),
      ob: cc11001100_hook("ob", b.__uspapiReturn.callId, "object-key-init")
    };
  }
  var So = cc11001100_hook("So", class extends bf {
    constructor() {
      super();
      this.caller = cc11001100_hook("this.caller", new Oo("__uspapiLocator", a => "function" === typeof a.__uspapi, Ro), "assign");
      this.caller.B.set("getDataWithCallback", Po);
      this.caller.v.set("getDataWithCallback", Qo);
    }
    h() {
      cf(this.caller);
      super.h();
    }
    m() {
      return !!No(this.caller);
    }
  }, "var-init");
  var To = cc11001100_hook("To", ac(class extends I {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  const Uo = cc11001100_hook("Uo", (a, b) => {
      a = cc11001100_hook("a", a.googlefc || (a.googlefc = cc11001100_hook("a.googlefc", {}, "assign")), "assign");
      a.__fci = cc11001100_hook("a.__fci", a.__fci || [], "assign");
      a.__fci.push(b.command, c => {
        c = cc11001100_hook("c", To(c), "assign");
        b.callback({
          consentData: cc11001100_hook("consentData", c, "object-key-init")
        });
      });
    }, "var-init"),
    Vo = cc11001100_hook("Vo", {
      jb: cc11001100_hook("jb", a => a.callback, "object-key-init"),
      kb: cc11001100_hook("kb", (a, b) => ({
        __fciCall: {
          callId: cc11001100_hook("callId", b, "object-key-init"),
          command: cc11001100_hook("command", a.command, "object-key-init")
        }
      }), "object-key-init"),
      mb: cc11001100_hook("mb", (a, b) => {
        a({
          consentData: cc11001100_hook("consentData", b, "object-key-init")
        });
      }, "object-key-init")
    }, "var-init");
  function Wo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", To(a.data.__fciReturn), "assign");
    return {
      payload: cc11001100_hook("payload", a, "object-key-init"),
      ob: cc11001100_hook("ob", B(t(a, 1), 0), "object-key-init")
    };
  }
  var Xo = cc11001100_hook("Xo", class extends bf {
    constructor() {
      super();
      this.i = cc11001100_hook("this.i", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.caller = cc11001100_hook("this.caller", new Oo("googlefcPresent", void 0, Wo), "assign");
      this.caller.B.set("getDataWithCallback", Uo);
      this.caller.v.set("getDataWithCallback", Vo);
    }
    h() {
      cf(this.caller);
      super.h();
    }
    m() {
      this.l || (this.i = cc11001100_hook("this.i", No(this.caller), "assign"), this.l = cc11001100_hook("this.l", !0, "assign"));
      return !!this.i;
    }
  }, "var-init");
  function Yo() {
    const a = cc11001100_hook("a", qd`(a=0)=>{let b;const c=class{};}`, "var-init");
    try {
      var b = cc11001100_hook("b", window, "var-init");
      const c = cc11001100_hook("c", a instanceof uc && a.constructor === uc ? a.h : "type_error:SafeScript", "var-init");
      b.eval(c) === c && b.eval(c.toString());
      return {
        supports: cc11001100_hook("supports", !0, "object-key-init"),
        error: cc11001100_hook("error", "", "object-key-init")
      };
    } catch (c) {
      return {
        supports: cc11001100_hook("supports", !1, "object-key-init"),
        error: cc11001100_hook("error", String(c), "object-key-init")
      };
    }
  }
  ;
  var Zo = cc11001100_hook("Zo", a => {
    lc(window, "message", b => {
      let c;
      try {
        c = cc11001100_hook("c", JSON.parse(b.data), "assign");
      } catch (d) {
        return;
      }
      !c || "sc-cnf" !== c.googMsgType || a(c, b);
    });
  }, "var-init");
  var $o = cc11001100_hook("$o", class extends bf {
    constructor() {
      super();
      this.l = cc11001100_hook("this.l", L, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
    }
    h() {
      super.h();
    }
    m() {
      var a;
      (a = cc11001100_hook("a", "function" === typeof this.l?.__uspapi, "assign")) || (a = cc11001100_hook("a", this.i ? this.i : this.i = cc11001100_hook("this.i", Yc(this.l, "__uspapiLocator"), "assign"), "assign"), a = cc11001100_hook("a", null != a, "assign"));
      return a;
    }
  }, "var-init");
  var ap = cc11001100_hook("ap", class extends bf {
    constructor() {
      super();
      this.v = cc11001100_hook("this.v", L, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
    m() {
      if (!this.l) {
        if (!this.i) {
          var a = cc11001100_hook("a", Yc(this.v, "googlefcPresent"), "var-init");
          this.i = cc11001100_hook("this.i", a ? a : null, "assign");
        }
        this.l = cc11001100_hook("this.l", !0, "assign");
      }
      return !!this.i;
    }
  }, "var-init");
  let bp = cc11001100_hook("bp", null, "var-init");
  const cp = cc11001100_hook("cp", [], "var-init"),
    dp = cc11001100_hook("dp", new Map(), "var-init");
  let ep = cc11001100_hook("ep", -1, "var-init");
  function fp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return li.test(a.className) && "done" !== a.dataset.adsbygoogleStatus;
  }
  function gp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.dataset.adsbygoogleStatus = cc11001100_hook("a.dataset.adsbygoogleStatus", "done", "assign");
    hp(a, b, c);
  }
  function hp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", window, "var-init");
    d.google_spfd || (d.google_spfd = cc11001100_hook("d.google_spfd", Mo, "assign"));
    var e = cc11001100_hook("e", b.google_reactive_ads_config, "var-init");
    e || Mo(a, b, d, c);
    yo(d, b);
    if (!ip(a, b, d)) {
      e || (d.google_lpabyc = cc11001100_hook("d.google_lpabyc", Vh(a, d) + (di(a, d, "height", K) || 0), "assign"));
      if (e) {
        e = cc11001100_hook("e", e.page_level_pubvars || {}, "assign");
        if (X(L).page_contains_reactive_tag && !X(L).allow_second_reactive_tag) {
          if (e.pltais) {
            Ol(!1);
            return;
          }
          throw new U("Only one 'enable_page_level_ads' allowed per page.");
        }
        X(L).page_contains_reactive_tag = cc11001100_hook("X(L).page_contains_reactive_tag", !0, "assign");
        Ol(7 === e.google_pgb_reactive);
      }
      b.google_unique_id = cc11001100_hook("b.google_unique_id", rd(d), "assign");
      J(nm, (f, g) => {
        b[g] = cc11001100_hook("b[g]", b[g] || d[g], "assign");
      });
      b.google_loader_used = cc11001100_hook("b.google_loader_used", "aa", "assign");
      b.google_reactive_tag_first = cc11001100_hook("b.google_reactive_tag_first", 1 === (X(L).first_tag_on_page || 0), "assign");
      zj(164, () => {
        var f = cc11001100_hook("f", d.document, "var-init");
        for (var g = cc11001100_hook("g", void 0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); !g || f.getElementById(g + "_host");) g = cc11001100_hook("g", "aswift_" + h++, "assign");
        f = cc11001100_hook("f", g, "assign");
        g = cc11001100_hook("g", Number(b.google_ad_width || 0), "assign");
        h = cc11001100_hook("h", Number(b.google_ad_height || 0), "assign");
        const l = cc11001100_hook("l", Nc("DIV"), "var-init");
        l.id = cc11001100_hook("l.id", f + "_host", "assign");
        const k = cc11001100_hook("k", l.style, "var-init");
        k.border = cc11001100_hook("k.border", "none", "assign");
        k.height = cc11001100_hook("k.height", `${h}px`, "assign");
        k.width = cc11001100_hook("k.width", `${g}px`, "assign");
        k.margin = cc11001100_hook("k.margin", "0px", "assign");
        k.padding = cc11001100_hook("k.padding", "0px", "assign");
        k.position = cc11001100_hook("k.position", "relative", "assign");
        k.visibility = cc11001100_hook("k.visibility", "visible", "assign");
        k.backgroundColor = cc11001100_hook("k.backgroundColor", "transparent", "assign");
        l.style.display = cc11001100_hook("l.style.display", "inline-block", "assign");
        a.appendChild(l);
        Fo(d, b, a, c, {
          eb: cc11001100_hook("eb", f, "object-key-init"),
          wb: cc11001100_hook("wb", l, "object-key-init")
        });
      });
    }
  }
  function ip(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", b.google_reactive_ads_config, "var-init"),
      e = cc11001100_hook("e", "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className), "var-init"),
      f = cc11001100_hook("f", Ml(c), "var-init");
    if (f && f.Ja && "on" !== b.google_adtest && !e) {
      e = cc11001100_hook("e", Vh(a, c), "assign");
      const g = cc11001100_hook("g", P(c).clientHeight, "var-init");
      e = cc11001100_hook("e", 0 == g ? null : e / g, "assign");
      if (!f.pa || f.pa && (e || 0) >= f.pa) return a.className += cc11001100_hook("a.className", " adsbygoogle-ablated-ad-slot", "assign"), c = cc11001100_hook("c", c.google_sv_map = cc11001100_hook("c.google_sv_map", c.google_sv_map || {}, "assign"), "assign"), d = cc11001100_hook("d", ea(a), "assign"), b.google_element_uid = cc11001100_hook("b.google_element_uid", d, "assign"), c[b.google_element_uid] = cc11001100_hook("c[b.google_element_uid]", b, "assign"), a.setAttribute("google_element_uid", String(d)), "slot" === f.ub && (null !== Xc(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Xc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = cc11001100_hook("a.style.width", "0px", "assign"), a.style.height = cc11001100_hook("a.style.height", "0px", "assign")), !0;
    }
    if ((f = cc11001100_hook("f", Oc(a, c), "assign")) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
    a = cc11001100_hook("a", null == b.google_pgb_reactive || 3 === b.google_pgb_reactive, "assign");
    return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0);
  }
  function jp(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", document.getElementsByTagName("INS"), "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b[d], "var-init"); d < b.length; e = cc11001100_hook("e", b[++d], "assign")) {
      var c = cc11001100_hook("c", e, "var-init");
      if (fp(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e;
    }
    return null;
  }
  function kp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a && "shift" in a) for (var d = cc11001100_hook("d", 20, "var-init"); 0 < a.length && 0 < d;) {
      try {
        lp(a.shift(), b, c);
      } catch (e) {
        setTimeout(() => {
          throw e;
        });
      }
      --d;
    }
  }
  function mp() {
    const a = cc11001100_hook("a", Nc("INS"), "var-init");
    a.className = cc11001100_hook("a.className", "adsbygoogle", "assign");
    a.className += cc11001100_hook("a.className", " adsbygoogle-noablate", "assign");
    $c(a, {
      display: cc11001100_hook("display", "none", "object-key-init")
    });
    return a;
  }
  function np(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init"),
      d = cc11001100_hook("d", Ll(a.google_ad_client, b), "var-init");
    J(zg, (g, h) => {
      !1 === a.enable_page_level_ads ? c[h] = cc11001100_hook("c[h]", !1, "assign") : a.hasOwnProperty(h) ? c[h] = cc11001100_hook("c[h]", a[h], "assign") : d.includes(g) && (c[h] = cc11001100_hook("c[h]", !1, "assign"));
    });
    da(a.enable_page_level_ads) && (c.page_level_pubvars = cc11001100_hook("c.page_level_pubvars", a.enable_page_level_ads, "assign"));
    const e = cc11001100_hook("e", mp(), "var-init");
    dd.body.appendChild(e);
    const f = cc11001100_hook("f", {
      google_reactive_ads_config: cc11001100_hook("google_reactive_ads_config", c, "object-key-init"),
      google_ad_client: cc11001100_hook("google_ad_client", a.google_ad_client, "object-key-init")
    }, "var-init");
    f.google_pause_ad_requests = cc11001100_hook("f.google_pause_ad_requests", !!X(L).pause_ad_requests, "assign");
    gp(e, f, b);
  }
  function op(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ag(n).wasPlaTagProcessed = cc11001100_hook("Ag(n).wasPlaTagProcessed", !0, "assign");
    const c = cc11001100_hook("c", () => {
        np(a, b);
      }, "var-init"),
      d = cc11001100_hook("d", n.document, "var-init");
    if (d.body || "complete" === d.readyState || "interactive" === d.readyState) np(a, b);else {
      const e = cc11001100_hook("e", kc(V.na(191, c)), "var-init");
      lc(d, "DOMContentLoaded", e);
      new n.MutationObserver((f, g) => {
        d.body && (e(), g.disconnect());
      }).observe(d, {
        childList: cc11001100_hook("childList", !0, "object-key-init"),
        subtree: cc11001100_hook("subtree", !0, "object-key-init")
      });
    }
  }
  function lp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", {}, "var-init");
    zj(165, () => pp(a, d, b, c), e => {
      e.client = cc11001100_hook("e.client", e.client || d.google_ad_client || a.google_ad_client, "assign");
      e.slotname = cc11001100_hook("e.slotname", e.slotname || d.google_ad_slot, "assign");
      e.tag_origin = cc11001100_hook("e.tag_origin", e.tag_origin || d.google_tag_origin, "assign");
    });
  }
  function qp(a) {
    cc11001100_hook("a", a, "function-parameter");
    delete a.google_checked_head;
    J(a, (b, c) => {
      ki[c] || (delete a[c], b = cc11001100_hook("b", c.replace("google", "data").replace(/_/g, "-"), "assign"), n.console.warn(`AdSense head tag doesn't support ${b} attribute.`));
    });
  }
  function rp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'), "var-init");
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = cc11001100_hook("d", X(window), "var-init");
      if (d.head_tag_slot_vars) sp(c);else {
        var e = cc11001100_hook("e", {}, "var-init");
        Ko(c, e);
        qp(e);
        var f = cc11001100_hook("f", qc(e), "var-init");
        d.head_tag_slot_vars = cc11001100_hook("d.head_tag_slot_vars", f, "assign");
        c = cc11001100_hook("c", {
          google_ad_client: cc11001100_hook("google_ad_client", e.google_ad_client, "object-key-init"),
          enable_page_level_ads: cc11001100_hook("enable_page_level_ads", e, "object-key-init")
        }, "assign");
        L.adsbygoogle || (L.adsbygoogle = cc11001100_hook("L.adsbygoogle", [], "assign"));
        d = cc11001100_hook("d", L.adsbygoogle, "assign");
        d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
        e.google_adbreak_test || b.l()?.l() && T(th) ? tp(f, a) : Zo(() => {
          tp(f, a);
        });
      }
    }
  }
  function sp(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", X(window).head_tag_slot_vars, "var-init"),
      c = cc11001100_hook("c", a.getAttribute("src") || "", "var-init");
    if ((a = cc11001100_hook("a", Jc(c, "client") || a.getAttribute("data-ad-client") || "", "assign")) && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
  }
  function up(a) {
    cc11001100_hook("a", a, "function-parameter");
    if ("object" === typeof a && null != a) {
      if ("string" === typeof a.type) return 2;
      if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3;
    }
    return 0;
  }
  function pp(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null == a) throw new U("push() called with no parameters.");
    d.m() && vp(a, d.i().i(), G(d, 2));
    var e = cc11001100_hook("e", up(a), "var-init");
    if (0 !== e) {
      if (d = cc11001100_hook("d", Pl(), "assign"), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = cc11001100_hook("d.first_slotcar_request_processing_time", Date.now(), "assign"), d.adsbygoogle_execution_start_time = cc11001100_hook("d.adsbygoogle_execution_start_time", oa, "assign")), null == bp) wp(a), cp.push(a);else if (3 === e) {
        const f = cc11001100_hook("f", bp, "var-init");
        zj(787, () => {
          f.handleAdConfig(a);
        });
      } else Bj(730, bp.handleAdBreak(a));
    } else {
      oa = cc11001100_hook("oa", new Date().getTime(), "assign");
      zo(c, d, xp(a));
      yp();
      a: {
        if (void 0 != a.enable_page_level_ads) {
          if ("string" === typeof a.google_ad_client) {
            e = cc11001100_hook("e", !0, "assign");
            break a;
          }
          throw new U("'google_ad_client' is missing from the tag config.");
        }
        e = cc11001100_hook("e", !1, "assign");
      }
      if (e) zp(a, d);else if ((e = cc11001100_hook("e", a.params, "assign")) && J(e, (f, g) => {
        b[g] = cc11001100_hook("b[g]", f, "assign");
      }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");else {
        e = cc11001100_hook("e", Ap(a.element), "assign");
        Ko(e, b);
        c = cc11001100_hook("c", X(n).head_tag_slot_vars || {}, "assign");
        J(c, (f, g) => {
          b.hasOwnProperty(g) || (b[g] = cc11001100_hook("b[g]", f, "assign"));
        });
        if (e.hasAttribute("data-require-head") && !X(n).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
        if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
        (c = cc11001100_hook("c", 0 === (X(L).first_tag_on_page || 0) && im(b), "assign")) && Bp(c);
        0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = cc11001100_hook("X(L).first_tag_on_page", 2, "assign"));
        b.google_pause_ad_requests = cc11001100_hook("b.google_pause_ad_requests", !!X(L).pause_ad_requests, "assign");
        gp(e, b, d);
      }
    }
  }
  let Cp = cc11001100_hook("Cp", !1, "var-init");
  function vp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Cp || (Cp = cc11001100_hook("Cp", !0, "assign"), a = cc11001100_hook("a", xp(a) || rm(L), "assign"), Aj("predictive_abg", {
      a_c: cc11001100_hook("a_c", a, "object-key-init"),
      p_c: cc11001100_hook("p_c", b.join(), "object-key-init"),
      b_v: cc11001100_hook("b_v", c, "object-key-init")
    }, .01));
  }
  function xp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.google_ad_client ? a.google_ad_client : (a = cc11001100_hook("a", a.params, "assign")) && a.google_ad_client ? a.google_ad_client : "";
  }
  function yp() {
    if (T(gh)) {
      var a = cc11001100_hook("a", Ml(L), "var-init");
      if (!(a = cc11001100_hook("a", a && a.Ja, "assign"))) {
        try {
          var b = cc11001100_hook("b", L.localStorage, "var-init");
        } catch (c) {
          b = cc11001100_hook("b", null, "assign");
        }
        b = cc11001100_hook("b", b ? gl(b) : null, "assign");
        a = cc11001100_hook("a", !(b && fl(b) && b), "assign");
      }
      a || Nl(L, 1);
    }
  }
  function Bp(a) {
    cc11001100_hook("a", a, "function-parameter");
    ed(() => {
      Ag(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a);
    });
  }
  function zp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = cc11001100_hook("X(L).first_tag_on_page", 1, "assign"));
    if (a.tag_partner) {
      var c = cc11001100_hook("c", a.tag_partner, "var-init");
      const d = cc11001100_hook("d", X(n), "var-init");
      d.tag_partners = cc11001100_hook("d.tag_partners", d.tag_partners || [], "assign");
      d.tag_partners.push(c);
    }
    lm(a, b);
    op(a, b);
  }
  function Ap(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a) {
      if (!fp(a) && (a.id ? a = cc11001100_hook("a", jp(a.id), "assign") : a = cc11001100_hook("a", null, "assign"), !a)) throw new U("'element' has already been filled.");
      if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
    } else if (a = cc11001100_hook("a", jp(), "assign"), !a) throw new U("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
    return a;
  }
  function Dp() {
    const a = cc11001100_hook("a", new Vj(L), "var-init"),
      b = cc11001100_hook("b", T(zh) ? new So() : new $o(), "var-init"),
      c = cc11001100_hook("c", T(yh) ? new Xo() : new ap(), "var-init");
    Aj("cmpMet", {
      tcfv1: cc11001100_hook("tcfv1", L.__cmp ? 1 : 0, "object-key-init"),
      tcfv2: cc11001100_hook("tcfv2", Sj(a) ? 1 : 0, "object-key-init"),
      usp: cc11001100_hook("usp", b.m() ? 1 : 0, "object-key-init"),
      fc: cc11001100_hook("fc", c.m() ? 1 : 0, "object-key-init"),
      ptt: cc11001100_hook("ptt", 9, "object-key-init")
    }, .001);
  }
  function Ep(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ej().S[Hj(26)] = cc11001100_hook("Ej().S[Hj(26)]", !!Number(a), "assign");
  }
  function Fp(a) {
    cc11001100_hook("a", a, "function-parameter");
    Number(a) ? X(L).pause_ad_requests = cc11001100_hook("X(L).pause_ad_requests", !0, "assign") : (X(L).pause_ad_requests = cc11001100_hook("X(L).pause_ad_requests", !1, "assign"), a = cc11001100_hook("a", () => {
      if (!X(L).pause_ad_requests) {
        var b = cc11001100_hook("b", {}, "var-init");
        let c;
        "function" === typeof window.CustomEvent ? c = cc11001100_hook("c", new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b), "assign") : (c = cc11001100_hook("c", document.createEvent("CustomEvent"), "assign"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
        L.dispatchEvent(c);
      }
    }, "assign"), n.setTimeout(a, 0), n.setTimeout(a, 1E3));
  }
  function Gp(a) {
    cc11001100_hook("a", a, "function-parameter");
    Aj("adsenseGfpKnob", {
      value: cc11001100_hook("value", a, "object-key-init"),
      ptt: cc11001100_hook("ptt", 9, "object-key-init")
    }, .1);
    switch (a) {
      case 0:
      case 2:
        a = cc11001100_hook("a", !0, "assign");
        break;
      case 1:
        a = cc11001100_hook("a", !1, "assign");
        break;
      default:
        throw Error(`Illegal value of ${"cookieOptions"}: ${a}`);
    }
    L._gfp_a_ = cc11001100_hook("L._gfp_a_", a, "assign");
  }
  function Hp(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      Object.defineProperty(a, "requestNonPersonalizedAds", {
        set: cc11001100_hook("set", Ep, "object-key-init")
      }), Object.defineProperty(a, "pauseAdRequests", {
        set: cc11001100_hook("set", Fp, "object-key-init")
      }), Object.defineProperty(a, "cookieOptions", {
        set: cc11001100_hook("set", Gp, "object-key-init")
      }), Object.defineProperty(a, "onload", {
        set: cc11001100_hook("set", Ip, "object-key-init")
      });
    } catch {}
  }
  function Ip(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && a.call && "function" === typeof a && window.setTimeout(a, 0);
  }
  function tp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", hm(xc(b.tb, Kh() ? {
      bust: cc11001100_hook("bust", Kh(), "object-key-init")
    } : {})).then(c => {
      null == bp && (c.init(a), bp = cc11001100_hook("bp", c, "assign"), Jp(c));
    }), "assign");
    V.aa(723, b);
    b.finally(() => {
      cp.length = cc11001100_hook("cp.length", 0, "assign");
      Aj("slotcar", {
        event: cc11001100_hook("event", "api_ld", "object-key-init"),
        time: cc11001100_hook("time", Date.now() - oa, "object-key-init"),
        time_pr: cc11001100_hook("time_pr", Date.now() - ep, "object-key-init")
      });
    });
  }
  function Jp(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (const [c, d] of dp) {
      var b = cc11001100_hook("b", c, "var-init");
      const e = cc11001100_hook("e", d, "var-init");
      -1 !== e && (n.clearTimeout(e), dp.delete(b));
    }
    for (b = cc11001100_hook("b", 0, "assign"); b < cp.length; b++) {
      if (dp.has(b)) continue;
      const c = cc11001100_hook("c", cp[b], "var-init"),
        d = cc11001100_hook("d", up(c), "var-init");
      zj(723, () => {
        if (3 === d) a.handleAdConfig(c);else if (2 === d) {
          var e = cc11001100_hook("e", a.handleAdBreakBeforeReady(c), "var-init");
          V.aa(730, e);
        }
      });
    }
  }
  function wp(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", cp.length, "var-init");
    if (2 === up(a) && "preroll" === a.type && null != a.adBreakDone) {
      var c = cc11001100_hook("c", a.adBreakDone, "var-init");
      -1 === ep && (ep = cc11001100_hook("ep", Date.now(), "assign"));
      var d = cc11001100_hook("d", n.setTimeout(() => {
        try {
          c({
            breakType: cc11001100_hook("breakType", "preroll", "object-key-init"),
            breakName: cc11001100_hook("breakName", a.name, "object-key-init"),
            breakFormat: cc11001100_hook("breakFormat", "preroll", "object-key-init"),
            breakStatus: cc11001100_hook("breakStatus", "timeout", "object-key-init")
          }), dp.set(b, -1), Aj("slotcar", {
            event: cc11001100_hook("event", "pr_to", "object-key-init"),
            source: cc11001100_hook("source", "adsbygoogle", "object-key-init")
          });
        } catch (e) {
          console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)));
        }
      }, 1E3 * Jh(uh)), "var-init");
      dp.set(b, d);
    }
  }
  ;
  (function (a, b, c, d = () => {}) {
    V.Ra(Cj);
    zj(166, () => {
      const e = cc11001100_hook("e", Pn(b), "var-init");
      On(e);
      d();
      md(16, [1, e.toJSON()]);
      var f = cc11001100_hook("f", od(nd(L)) || L, "var-init");
      const g = cc11001100_hook("g", c(Mn({
        qa: cc11001100_hook("qa", a, "object-key-init"),
        va: cc11001100_hook("va", G(e, 2), "object-key-init")
      }), e), "var-init");
      var h = cc11001100_hook("h", null === L.document.currentScript ? 1 : Bm(g.vb), "var-init");
      Al(f, e);
      an(f, e, h);
      Bj(1086, xm(M(zm), 0 === h));
      if (!Da() || 0 <= ra(Ja(), 11)) {
        yj(T(xh));
        Io();
        Rk();
        try {
          eo();
        } catch {}
        Ho();
        rp(g, e);
        f = cc11001100_hook("f", window, "assign");
        h = cc11001100_hook("h", f.adsbygoogle, "assign");
        if (!h || !h.loaded) {
          Aj("new_abg_tag", {
            value: cc11001100_hook("value", `${A(e, 16)}`, "object-key-init"),
            host_v: cc11001100_hook("host_v", `${A(e, 22)}`, "object-key-init"),
            frequency: cc11001100_hook("frequency", .01, "object-key-init")
          }, .01);
          Dp();
          var l = cc11001100_hook("l", {
            push: cc11001100_hook("push", v => {
              lp(v, g, e);
            }, "object-key-init"),
            loaded: cc11001100_hook("loaded", !0, "object-key-init")
          }, "var-init");
          Hp(l);
          if (h) for (var k of ["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]) void 0 !== h[k] && (l[k] = cc11001100_hook("l[k]", h[k], "assign"));
          T(hh) || "_gfp_a_" in window || (window._gfp_a_ = cc11001100_hook("window._gfp_a_", !0, "assign"));
          kp(h, g, e);
          f.adsbygoogle = cc11001100_hook("f.adsbygoogle", l, "assign");
          h && (l.onload = cc11001100_hook("l.onload", h.onload, "assign"));
          (k = cc11001100_hook("k", Eo(g), "assign")) && document.documentElement.appendChild(k);
          var {
            supports: m,
            error: u
          } = cc11001100_hook("", Yo(), "var-init");
          Aj("modern_js", {
            fy: cc11001100_hook("fy", B(t(e, 1), 0), "object-key-init"),
            supports: cc11001100_hook("supports", String(m), "object-key-init"),
            c: cc11001100_hook("c", 2021, "object-key-init"),
            e: cc11001100_hook("e", u, "object-key-init")
          }, .01);
        }
      }
    });
  })("m202303210101", "undefined" === typeof sttc ? void 0 : sttc, function (a, b) {
    const c = cc11001100_hook("c", 2012 < B(t(b, 1), 0) ? `_fy${B(t(b, 1), 0)}` : "", "var-init");
    var d = cc11001100_hook("d", G(b, 3), "var-init");
    const e = cc11001100_hook("e", G(b, 2), "var-init");
    b = cc11001100_hook("b", pd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`, "assign");
    d = cc11001100_hook("d", pd`https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`, "assign");
    return {
      tb: cc11001100_hook("tb", b, "object-key-init"),
      rb: cc11001100_hook("rb", pd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`, "object-key-init"),
      qb: cc11001100_hook("qb", pd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`, "object-key-init"),
      Zb: cc11001100_hook("Zb", pd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`, "object-key-init"),
      xb: cc11001100_hook("xb", d, "object-key-init"),
      vb: cc11001100_hook("vb", /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/, "object-key-init")
    };
  });
}).call(this, "[2021,\"r20230322\",\"r20190131\",null,null,null,null,\".google.cn\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1243,null,null,[1]],[1216,null,null,[1]],[1215,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[null,508040914,null,[null,100]],[null,1114,null,[null,1]],[501545959,null,null,[1]],[511172886,null,null,[1]],[null,469675170,null,[null,30000]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[1033,null,null,[1]],[10006,null,null,[1]],[null,null,null,[null,null,null,[\"A0VQgOQvA+kwCj319NCwgf8+syUgEQ8\/LLpB8RxxlRC3AkJ9xx8IAvVuQ\/dcwy0ok7sGKufLLu6WhsXbQR9\/UwwAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A6kRo9zXJhOvsR4D\/VeZ9CiApPAxnOGzBkW88d8eIt9ex2oOzlX+AoUk\/BS50Y9Ysy2jwyHR49Mb7XwP+l9yygIAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A3mbHZoS4VJtJ8j1aE8+Z9vaGf\/oMV1eTNIWMrvGqWgNnOmvaxnRGliqKIZU2eiTzCj5Qpz8B1\/UTTLuony5bAAAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[1971,null,null,[1]],[1975,null,null,[1]],[1974,null,null,[1]],[null,1972,null,[]],[null,501545963,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[null,501545962,null,[null,1]],[null,495583959,null,[null,-1]],[null,1116,null,[null,300]],[1203,null,null,[1]],[471262996,null,null,[1]],[469675169,null,null,[1]],[485990406,null,null,[]],[501411886,null,null,[1]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[31070383,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]],[31070384,[[439828594,null,null,[1]]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[31070594],[31070595,[[439828594,null,null,[1]],[483962503,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[100,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[200,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[null,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44783617,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44784847,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44779109],[44779906],[44784478],[44785149]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31071258],[31071259]]],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[50,[[31073015],[31073016,[[1216,null,null,[]]]]],null,72],[100,[[31073098],[31073099,[[1237,null,null,[1]]]]]],[100,[[31073104],[31073105,[[1242,null,null,[1]]]]]],[100,[[31073106],[31073107,[[1244,null,null,[1]]]]]],[1,[[31073227],[31073228,[[1229,null,null,[1]]]],[31073229,[[1230,null,null,[1]]]],[31073230,[[1231,null,null,[1]]]],[31073231,[[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]]]]],null,72],[100,[[31073262],[31073263,[[1247,null,null,[1]]]]]],[1000,[[31073335,[[null,null,14,[null,null,\"31073335\"]]],[6,null,null,null,6,null,\"31073335\"]],[31073336,[[null,null,14,[null,null,\"31073336\"]]],[6,null,null,null,6,null,\"31073336\"]]],[4,null,55],63],[1000,[[31073358,[[null,null,14,[null,null,\"31073358\"]]],[6,null,null,null,6,null,\"31073358\"]],[31073359,[[null,null,14,[null,null,\"31073359\"]]],[6,null,null,null,6,null,\"31073359\"]]],[4,null,55],63],[10,[[31073378],[31073379,[[10007,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44767166],[44767167]]],[10,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,54],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[44776415]],null,54],[1,[[44779343],[44779344,[[1147,null,null,[1]]]]],null,54],[10,[[44782466],[44782467,[[1160,null,null,[1]]]],[44782468,[[1226,null,null,[1]],[1160,null,null,[1]]]]]],[50,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[50,[[44785294],[44785295]]],[10,[[44786499],[44786500,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44786501,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44786502,[[1233,null,null,[1]],[1185,null,null,[1]]]],[44786559,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44786560,[[1233,null,null,[1]],[1147,null,null,[1]]]]],null,54],[200,[[44786631],[44786632,[[null,null,null,[null,null,null,[\"1\",\"2\"]],null,10003]]]],null,51],[10,[[44786918],[44786919,[[1147,null,null,[1]]]],[44786920,[[1147,null,null,[1]]]]],null,54],[null,[[44787442],[44787443,[[1238,null,null,[1]]]]]],[100,[[44787455],[44787456,[[1240,null,null,[1]]]]]],[null,[[44787671],[44787672,[[1236,null,null,[1]]]],[44787673,[[1241,null,null,[1]]]],[44787674,[[1241,null,null,[1]],[1236,null,null,[1]]]]]]]],[20,[[1000,[[31070530,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070531,null,[2,[[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]],[4,null,8,null,null,null,null,[\"credentialless\"]]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070532,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]],[17,[[10,[[31071260]]],[10,[[31071261],[31071262],[31071263],[31071264]],null,null,null,44,22],[10,[[31071265],[31071266]],null,null,null,44,null,500],[10,[[31071267]],null,null,null,44,null,900],[10,[[31071268],[31071269]],null,null,null,null,null,null,null,101],[50,[[31073347,[[null,506864295,null,[null,300]],[null,506871937,null,[null,31073347]],[506619840,null,null,[1]]]],[31073348,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[501545959,null,null,[]],[null,506871937,null,[null,31073348]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]],[506619840,null,null,[1]]]],[31073349,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,31073349]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,552,null,117,1],[null,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[1,[[44787212,[[null,506864295,null,[null,300]],[506914611,null,null,[1]],[null,506871937,null,[null,44787212]],[506619840,null,null,[1]]]],[44787213,[[null,506864295,null,[null,300]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[506914611,null,null,[1]],[null,506871937,null,[null,44787213]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,117,1]]]],null,null,[null,\"1000\",1,\"1000\"]],[null,[null,null,[]]],null,null,null,null,1121842221,[44759842,44777876,44759876,44759927]]");