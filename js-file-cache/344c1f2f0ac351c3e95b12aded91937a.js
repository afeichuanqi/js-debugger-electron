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
  function oa(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  ;
  let pa = cc11001100_hook("pa", new Date().getTime(), "var-init");
  function qa(a) {
    cc11001100_hook("a", a, "function-parameter");
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function ra(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init");
    a = cc11001100_hook("a", qa(String(a)).split("."), "assign");
    b = cc11001100_hook("b", qa(String(b)).split("."), "assign");
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
  var za;
  const Aa = cc11001100_hook("Aa", n.navigator, "var-init");
  za = cc11001100_hook("za", Aa ? Aa.userAgentData || null : null, "assign");
  function Ba(a) {
    cc11001100_hook("a", a, "function-parameter");
    return ta ? za ? za.brands.some(({
      brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1;
  }
  function p(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 != wa().indexOf(a);
  }
  ;
  function Ca() {
    return ta ? !!za && 0 < za.brands.length : !1;
  }
  function Da() {
    return Ca() ? !1 : p("Trident") || p("MSIE");
  }
  function Ea() {
    return Ca() ? Ba("Microsoft Edge") : p("Edg/");
  }
  function Fa() {
    !p("Safari") || Ha() || (Ca() ? 0 : p("Coast")) || (Ca() ? 0 : p("Opera")) || (Ca() ? 0 : p("Edge")) || Ea() || Ca() && Ba("Opera");
  }
  function Ha() {
    return Ca() ? Ba("Chromium") : (p("Chrome") || p("CriOS")) && !(Ca() ? 0 : p("Edge")) || p("Silk");
  }
  function Ia(a) {
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
    a = cc11001100_hook("a", Ia(b), "assign");
    return (Ca() ? 0 : p("Opera")) ? a(["Version", "Opera"]) : (Ca() ? 0 : p("Edge")) ? a(["Edge"]) : Ea() ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : Ha() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = cc11001100_hook("a", b[2], "assign")) && a[1] || "";
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
  function Sa(a, b) {
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
  !p("Android") || Ha();
  Ha();
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
    function c(k) {
      cc11001100_hook("k", k, "function-parameter");
      for (; d < a.length;) {
        var l = cc11001100_hook("l", a.charAt(d++), "var-init"),
          m = cc11001100_hook("m", Wa[l], "var-init");
        if (null != m) return m;
        if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
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
    if (void 0 !== a.L) return a.L |= cc11001100_hook("a.L", b, "assign");
    Object.defineProperties(a, {
      L: {
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
    const c = cc11001100_hook("c", r(a), "var-init");
    (c & b) !== b && (Object.isFrozen(a) && (a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign")), eb(a, c | b));
    return a;
  }
  function fb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    bb ? a[bb] && (a[bb] &= cc11001100_hook("a[bb]", ~b, "assign")) : void 0 !== a.L && (a.L &= cc11001100_hook("a.L", ~b, "assign"));
  }
  function r(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    bb ? b = cc11001100_hook("b", a[bb], "assign") : b = cc11001100_hook("b", a.L, "assign");
    return null == b ? 0 : b;
  }
  function eb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    bb ? a[bb] = cc11001100_hook("a[bb]", b, "assign") : void 0 !== a.L ? a.L = cc11001100_hook("a.L", b, "assign") : Object.defineProperties(a, {
      L: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
  }
  function gb(a) {
    cc11001100_hook("a", a, "function-parameter");
    cb(a, 1);
    return a;
  }
  function hb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!(r(a) & 2);
  }
  function ib(a) {
    cc11001100_hook("a", a, "function-parameter");
    cb(a, 16);
    return a;
  }
  function jb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    eb(b, (a | 0) & -51);
  }
  function kb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    eb(b, (a | 18) & -41);
  }
  ;
  var lb = cc11001100_hook("lb", {}, "var-init");
  function mb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  let nb;
  var ob;
  const pb = cc11001100_hook("pb", [], "var-init");
  eb(pb, 23);
  ob = cc11001100_hook("ob", Object.freeze(pb), "assign");
  function qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (r(a.u) & 2) throw Error();
  }
  function rb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && mb(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
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
    const b = cc11001100_hook("b", a.j + a.W, "var-init");
    return a.H || (a.H = cc11001100_hook("a.H", a.u[b] = cc11001100_hook("a.u[b]", {}, "assign"), "assign"));
  }
  function t(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return -1 === b ? null : b >= a.j ? a.H ? a.H[b] : void 0 : c && a.H && (c = cc11001100_hook("c", a.H[b], "assign"), null != c) ? c : a.u[b + a.W];
  }
  function x(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    qb(a);
    return z(a, b, c, d);
  }
  function z(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.v && (a.v = cc11001100_hook("a.v", void 0, "assign"));
    if (b >= a.j || d) return tb(a)[b] = cc11001100_hook("tb(a)[b]", c, "assign"), a;
    a.u[b + a.W] = cc11001100_hook("a.u[b + a.W]", c, "assign");
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
    Array.isArray(f) || (f = cc11001100_hook("f", ob, "assign"));
    const g = cc11001100_hook("g", r(f), "var-init");
    g & 1 || gb(f);
    if (e) g & 2 || cb(f, 18), c & 1 || Object.freeze(f);else {
      e = cc11001100_hook("e", !(c & 2), "assign");
      const h = cc11001100_hook("h", g & 2, "var-init");
      c & 1 || !h ? e && g & 16 && !h && fb(f, 16) : (f = cc11001100_hook("f", gb(Array.prototype.slice.call(f)), "assign"), z(a, b, f, d));
    }
    return f;
  }
  function vb(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return ub(a, b, 0, c, hb(a.u));
  }
  function wb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", t(a, b), "assign");
    return null == a ? a : !!a;
  }
  function xb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", hb(a.u), "var-init");
    let d = cc11001100_hook("d", ub(a, b, 1, !1, c), "var-init"),
      e = cc11001100_hook("e", r(d), "var-init");
    if (!(e & 4)) {
      Object.isFrozen(d) && (d = cc11001100_hook("d", gb(d.slice()), "assign"), z(a, b, d, !1));
      let f = cc11001100_hook("f", 0, "var-init"),
        g = cc11001100_hook("g", 0, "var-init");
      for (; f < d.length; f++) {
        const h = cc11001100_hook("h", d[f], "var-init");
        null != h && (d[g++] = cc11001100_hook("d[g++]", h, "assign"));
      }
      g < f && (d.length = cc11001100_hook("d.length", g, "assign"));
      e |= cc11001100_hook("e", 5, "assign");
      c && (e |= cc11001100_hook("e", 18, "assign"));
      eb(d, e);
      e & 2 && Object.freeze(d);
    }
    !c && (e & 2 || Object.isFrozen(d)) && (d = cc11001100_hook("d", Array.prototype.slice.call(d), "assign"), cb(d, 5), z(a, b, d, !1));
    return d;
  }
  function yb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", null == c ? ob : db(c, 1), "assign");
    return x(a, b, c);
  }
  function A(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    qb(a);
    c !== d ? z(a, b, c) : z(a, b, void 0, !1);
    return a;
  }
  function zb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    qb(a);
    (c = cc11001100_hook("c", Ab(a, c), "assign")) && c !== b && null != d && z(a, c, void 0, !1);
    return z(a, b, d);
  }
  function Bb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Ab(a, b) === c ? c : -1;
  }
  function Ab(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) {
      const e = cc11001100_hook("e", b[d], "var-init");
      null != t(a, e) && (0 !== c && z(a, c, void 0, !1), c = cc11001100_hook("c", e, "assign"));
    }
    return c;
  }
  function Cb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", t(a, c, d), "var-init");
    {
      let f = cc11001100_hook("f", !1, "var-init");
      null == e || "object" !== typeof e || (f = cc11001100_hook("f", Array.isArray(e), "assign")) || e.va !== lb ? f ? (sb(e, r(a.u)), b = cc11001100_hook("b", new b(e), "assign")) : b = cc11001100_hook("b", void 0, "assign") : b = cc11001100_hook("b", e, "assign");
    }
    b !== e && null != b && z(a, c, b, d);
    return b;
  }
  function B(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", Cb(a, b, c, !1), "assign");
    if (null == b) return b;
    if (!hb(a.u)) {
      const d = cc11001100_hook("d", Db(b), "var-init");
      d !== b && (b = cc11001100_hook("b", d, "assign"), z(a, c, b, !1));
    }
    return b;
  }
  function Eb(a, b, c, d, e) {
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
      var k = cc11001100_hook("k", h, "var-init");
      g = cc11001100_hook("g", [], "assign");
      f = cc11001100_hook("f", !!(e & 2), "assign");
      h = cc11001100_hook("h", !!(r(k) & 2), "assign");
      const v = cc11001100_hook("v", k, "var-init");
      !f && h && (k = cc11001100_hook("k", Array.prototype.slice.call(k), "assign"));
      var l = cc11001100_hook("l", e | (h ? 2 : 0), "var-init");
      e = cc11001100_hook("e", h, "assign");
      let w = cc11001100_hook("w", 0, "var-init");
      for (; w < k.length; w++) {
        var m = cc11001100_hook("m", k[w], "var-init");
        var u = cc11001100_hook("u", b, "var-init");
        Array.isArray(m) ? (sb(m, l), m = cc11001100_hook("m", new u(m), "assign")) : m = cc11001100_hook("m", void 0, "assign");
        void 0 !== m && (e = cc11001100_hook("e", e || !!(2 & r(m.u)), "assign"), g.push(m));
      }
      a.h[c] = cc11001100_hook("a.h[c]", g, "assign");
      l = cc11001100_hook("l", r(k), "assign");
      b = cc11001100_hook("b", l | 33, "assign");
      b = cc11001100_hook("b", e ? b & -9 : b | 8, "assign");
      l != b && (e = cc11001100_hook("e", k, "assign"), Object.isFrozen(e) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign")), eb(e, b), k = cc11001100_hook("k", e, "assign"));
      v !== k && z(a, c, k);
      (f || d && h) && cb(g, 18);
      d && Object.freeze(g);
      return g;
    }
    f || (f = cc11001100_hook("f", Object.isFrozen(g), "assign"), d && !f ? Object.freeze(g) : !d && f && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign"), a.h[c] = cc11001100_hook("a.h[c]", g, "assign")));
    return g;
  }
  function C(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", r(a.u), "var-init"),
      e = cc11001100_hook("e", !!(d & 2), "var-init");
    b = cc11001100_hook("b", Eb(a, b, c, e, d), "assign");
    a = cc11001100_hook("a", ub(a, c, 3, void 0, e), "assign");
    if (!(e || r(a) & 8)) {
      for (e = cc11001100_hook("e", 0, "assign"); e < b.length; e++) c = cc11001100_hook("c", b[e], "assign"), d = cc11001100_hook("d", Db(c), "assign"), c !== d && (b[e] = cc11001100_hook("b[e]", d, "assign"), a[e] = cc11001100_hook("a[e]", d.u, "assign"));
      cb(a, 8);
    }
    return b;
  }
  function Fb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    qb(a);
    null == c && (c = cc11001100_hook("c", void 0, "assign"));
    return z(a, b, c);
  }
  function Gb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    qb(a);
    null == d && (d = cc11001100_hook("d", void 0, "assign"));
    return zb(a, b, c, d);
  }
  function Hb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    qb(a);
    let e = cc11001100_hook("e", null == c ? ob : gb([]), "var-init");
    if (null != c) {
      let f = cc11001100_hook("f", !!c.length, "var-init");
      for (let g = cc11001100_hook("g", 0, "var-init"); g < c.length; g++) {
        const h = cc11001100_hook("h", c[g], "var-init");
        f = cc11001100_hook("f", f && !hb(h.u), "assign");
        e[g] = cc11001100_hook("e[g]", h.u, "assign");
      }
      e = cc11001100_hook("e", db(e, (f ? 8 : 0) | 1), "assign");
      a.h || (a.h = cc11001100_hook("a.h", {}, "assign"));
      a.h[b] = cc11001100_hook("a.h[b]", c, "assign");
    } else a.h && (a.h[b] = cc11001100_hook("a.h[b]", void 0, "assign"));
    return z(a, b, e, d);
  }
  function D(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == a ? b : a;
  }
  function F(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(t(a, b), "");
  }
  function G(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(wb(a, b), c);
  }
  function Ib(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", t(a, b), "var-init");
    var d = cc11001100_hook("d", null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0, "var-init");
    null != d && d !== c && z(a, b, d);
    return D(d, 0);
  }
  function H(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(t(a, b), 0);
  }
  function Jb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return B(a, b, Bb(a, d, c));
  }
  ;
  let Kb;
  function Lb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Kb = cc11001100_hook("Kb", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    Kb = cc11001100_hook("Kb", void 0, "assign");
    return a;
  }
  ;
  function Mb(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (r(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), rb(a), a;
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
            let k = cc11001100_hook("k", 0, "var-init"),
              l = cc11001100_hook("l", 0, "var-init");
            for (; k < a.length - 2; k += cc11001100_hook("k", 3, "assign")) {
              var c = cc11001100_hook("c", a[k], "var-init"),
                d = cc11001100_hook("d", a[k + 1], "var-init"),
                e = cc11001100_hook("e", a[k + 2], "var-init"),
                f = cc11001100_hook("f", b[c >> 2], "var-init");
              c = cc11001100_hook("c", b[(c & 3) << 4 | d >> 4], "assign");
              d = cc11001100_hook("d", b[(d & 15) << 2 | e >> 6], "assign");
              e = cc11001100_hook("e", b[e & 63], "assign");
              g[l++] = cc11001100_hook("g[l++]", f + c + d + e, "assign");
            }
            f = cc11001100_hook("f", 0, "assign");
            e = cc11001100_hook("e", h, "assign");
            switch (a.length - k) {
              case 2:
                f = cc11001100_hook("f", a[k + 1], "assign"), e = cc11001100_hook("e", b[(f & 15) << 2] || h, "assign");
              case 1:
                a = cc11001100_hook("a", a[k], "assign"), g[l] = cc11001100_hook("g[l]", b[a >> 2] + b[(a & 3) << 4 | f >> 4] + e + h, "assign");
            }
            a = cc11001100_hook("a", g.join(""), "assign");
          }
          return a;
        }
    }
    return a;
  }
  ;
  function Nb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", Ob(a, b, c, void 0 !== d), "assign");else if (mb(a)) {
        const e = cc11001100_hook("e", {}, "var-init");
        for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = cc11001100_hook("e[f]", Nb(a[f], b, c, d), "assign"));
        a = cc11001100_hook("a", e, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function Ob(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", r(a), "var-init");
    d = cc11001100_hook("d", d ? !!(e & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) a[f] = cc11001100_hook("a[f]", Nb(a[f], b, c, d), "assign");
    c(e, a);
    return a;
  }
  function Pb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.va === lb ? a.toJSON() : Mb(a);
  }
  function Qb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && rb(b);
  }
  ;
  function Rb(a, b, c = kb) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if ($a && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = cc11001100_hook("d", r(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return eb(a, d | 18), a;
        a = cc11001100_hook("a", Ob(a, Rb, d & 4 ? kb : c, !0), "assign");
        b = cc11001100_hook("b", r(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.va === lb ? Sb(a) : a;
    }
  }
  function Tb(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    (a = cc11001100_hook("a", a.h && a.h[c], "assign")) ? (d = cc11001100_hook("d", r(a), "assign"), d & 2 ? d = cc11001100_hook("d", a, "assign") : (f = cc11001100_hook("f", Na(a, Sb), "assign"), kb(d, f), Object.freeze(f), d = cc11001100_hook("d", f, "assign")), Hb(b, c, d, e)) : x(b, c, Rb(d, f, g), e);
  }
  function Sb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (hb(a.u)) return a;
    a = cc11001100_hook("a", Ub(a, !0), "assign");
    cb(a.u, 18);
    return a;
  }
  function Ub(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.u, "var-init");
    var d = cc11001100_hook("d", ib([]), "var-init"),
      e = cc11001100_hook("e", a.constructor.messageId, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.H, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      d.fill(void 0, d.length, c.length);
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (r(c) & 128) && rb(d);
    b = cc11001100_hook("b", b || hb(a.u) ? kb : jb, "assign");
    d = cc11001100_hook("d", Lb(a.constructor, d), "assign");
    a.Ma && (d.Ma = cc11001100_hook("d.Ma", a.Ma.slice(), "assign"));
    f = cc11001100_hook("f", !!(r(c) & 16), "assign");
    const g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Tb(a, d, h - a.W, c[h], !1, f, b);
    if (e) for (const h in e) Tb(a, d, +h, e[h], !0, f, b);
    return d;
  }
  function Db(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!hb(a.u)) return a;
    const b = cc11001100_hook("b", Ub(a, !1), "var-init");
    b.v = cc11001100_hook("b.v", a, "assign");
    return b;
  }
  ;
  var I = cc11001100_hook("I", class {
    constructor(a, b, c) {
      null == a && (a = cc11001100_hook("a", Kb, "assign"));
      Kb = cc11001100_hook("Kb", void 0, "assign");
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
      this.W = cc11001100_hook("this.W", d ? 0 : -1, "assign");
      this.h = cc11001100_hook("this.h", void 0, "assign");
      this.u = cc11001100_hook("this.u", a, "assign");
      a: {
        f = cc11001100_hook("f", this.u.length, "assign");
        d = cc11001100_hook("d", f - 1, "assign");
        if (f && (f = cc11001100_hook("f", this.u[d], "assign"), mb(f))) {
          this.H = cc11001100_hook("this.H", f, "assign");
          this.j = cc11001100_hook("this.j", d - this.W, "assign");
          break a;
        }
        void 0 !== b && -1 < b ? (this.j = cc11001100_hook("this.j", Math.max(b, d + 1 - this.W), "assign"), this.H = cc11001100_hook("this.H", void 0, "assign")) : this.j = cc11001100_hook("this.j", Number.MAX_VALUE, "assign");
      }
      if (this.H && "g" in this.H) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c) {
        b = cc11001100_hook("b", e && !0, "assign");
        e = cc11001100_hook("e", this.j, "assign");
        let h;
        for (d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) if (f = cc11001100_hook("f", c[d], "assign"), f < e) {
          f += cc11001100_hook("f", this.W, "assign");
          var g = cc11001100_hook("g", a[f], "var-init");
          g ? Vb(g, b) : a[f] = cc11001100_hook("a[f]", ob, "assign");
        } else h || (h = cc11001100_hook("h", tb(this), "assign")), (g = cc11001100_hook("g", h[f], "assign")) ? Vb(g, b) : h[f] = cc11001100_hook("h[f]", ob, "assign");
      }
    }
    toJSON() {
      const a = cc11001100_hook("a", this.u, "var-init");
      return nb ? a : Ob(a, Pb, Qb);
    }
  }, "var-init");
  function Vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", r(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && eb(a, c | d);
    }
  }
  I.prototype.va = cc11001100_hook("I.prototype.va", lb, "assign");
  function Wb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Mb(b);
  }
  ;
  const Xb = cc11001100_hook("Xb", a => null !== a && void 0 !== a, "var-init");
  let Yb = cc11001100_hook("Yb", void 0, "var-init");
  function Zb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Yb, "var-init");
    Yb = cc11001100_hook("Yb", void 0, "assign");
    if (!b(a)) throw b = cc11001100_hook("b", c ? c() + "\n" : "", "assign"), Error(b + String(a));
  }
  ;
  function $b(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", Lb(a, ib(b)), "assign");
      }
      return b;
    };
  }
  ;
  var ac = cc11001100_hook("ac", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var dc = cc11001100_hook("dc", class extends I {
      constructor(a) {
        super(a, -1, cc);
      }
    }, "var-init"),
    cc = cc11001100_hook("cc", [2, 3], "var-init");
  function ec(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.i = cc11001100_hook("this.i", a === fc && b || "", "assign");
    this.h = cc11001100_hook("this.h", gc, "assign");
  }
  var gc = cc11001100_hook("gc", {}, "var-init"),
    fc = cc11001100_hook("fc", {}, "var-init");
  function hc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function ic(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", !1, "var-init"),
      c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }
  function jc(a) {
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
  function kc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function lc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1;
  }
  ;
  function mc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = cc11001100_hook("c[d]", a[d], "assign"));
    return c;
  }
  function nc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function oc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    let c = cc11001100_hook("c", 0, "var-init");
    for (const d in a) b[c++] = cc11001100_hook("b[c++]", a[d], "assign");
    return b;
  }
  function pc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    for (const c in a) b[c] = cc11001100_hook("b[c]", a[c], "assign");
    return b;
  }
  ;
  var qc;
  function rc() {
    if (void 0 === qc) {
      var a = cc11001100_hook("a", null, "var-init"),
        b = cc11001100_hook("b", n.trustedTypes, "var-init");
      if (b && b.createPolicy) {
        try {
          a = cc11001100_hook("a", b.createPolicy("goog#html", {
            createHTML: cc11001100_hook("createHTML", oa, "object-key-init"),
            createScript: cc11001100_hook("createScript", oa, "object-key-init"),
            createScriptURL: cc11001100_hook("createScriptURL", oa, "object-key-init")
          }), "assign");
        } catch (c) {
          n.console && n.console.error(c.message);
        }
        qc = cc11001100_hook("qc", a, "assign");
      } else qc = cc11001100_hook("qc", a, "assign");
    }
    return qc;
  }
  ;
  const sc = cc11001100_hook("sc", {}, "var-init");
  class tc {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", b === sc ? a : "", "assign");
    }
    toString() {
      return this.h.toString();
    }
  }
  ;
  var vc = cc11001100_hook("vc", class {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", b === uc ? a : "", "assign");
    }
    toString() {
      return this.h + "";
    }
  }, "var-init");
  function wc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", xc.exec(yc(a).toString()), "assign");
    var c = cc11001100_hook("c", a[3] || "", "var-init");
    return zc(a[1] + Ac("?", a[2] || "", b) + Ac("#", c));
  }
  function yc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof vc && a.constructor === vc ? a.h : "type_error:TrustedResourceUrl";
  }
  var xc = cc11001100_hook("xc", /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, "var-init"),
    uc = cc11001100_hook("uc", {}, "var-init");
  function zc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", rc(), "var-init");
    a = cc11001100_hook("a", b ? b.createScriptURL(a) : a, "assign");
    return new vc(a, uc);
  }
  function Ac(a, b, c) {
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
  function Bc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  ;
  function Cc(a, b, c) {
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
  function Dc(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a || n.document || document, "assign");
  }
  Dc.prototype.getElementsByTagName = cc11001100_hook("Dc.prototype.getElementsByTagName", function (a, b) {
    return (b || this.h).getElementsByTagName(String(a));
  }, "assign");
  Dc.prototype.createElement = cc11001100_hook("Dc.prototype.createElement", function (a) {
    var b = cc11001100_hook("b", this.h, "var-init");
    a = cc11001100_hook("a", String(a), "assign");
    "application/xhtml+xml" === b.contentType && (a = cc11001100_hook("a", a.toLowerCase(), "assign"));
    return b.createElement(a);
  }, "assign");
  Dc.prototype.createTextNode = cc11001100_hook("Dc.prototype.createTextNode", function (a) {
    return this.h.createTextNode(String(a));
  }, "assign");
  Dc.prototype.append = cc11001100_hook("Dc.prototype.append", function (a, b) {
    Cc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
  }, "assign");
  Dc.prototype.contains = cc11001100_hook("Dc.prototype.contains", function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }, "assign");
  function Ec() {
    return ta && za ? za.mobile : !Fc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"));
  }
  function Fc() {
    return ta && za ? !za.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk");
  }
  ;
  var Gc = cc11001100_hook("Gc", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init"),
    Hc = cc11001100_hook("Hc", /#|$/, "var-init");
  function Ic(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.search(Hc), "var-init");
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
  function Jc(a) {
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
  function Kc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Jc(a.top) ? a.top : null;
  }
  function Lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Mc("SCRIPT", a), "var-init");
    c.src = cc11001100_hook("c.src", yc(b), "assign");
    (b = cc11001100_hook("b", (b = cc11001100_hook("b", (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]"), "assign")) ? b.nonce || b.getAttribute("nonce") || "" : "", "assign")) && c.setAttribute("nonce", b);
    return (a = cc11001100_hook("a", a.getElementsByTagName("script")[0], "assign")) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null;
  }
  function Nc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Oc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!Pc() && !Qc()) {
      let c = cc11001100_hook("c", Math.random(), "var-init");
      if (c < b) return c = cc11001100_hook("c", Rc(), "assign"), a[Math.floor(c * a.length)];
    }
    return null;
  }
  function Rc() {
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
  function Sc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.length, "var-init");
    if (0 == b) return 0;
    let c = cc11001100_hook("c", 305419896, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c ^= cc11001100_hook("c", (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295, "assign");
    return 0 < c ? c : 4294967296 + c;
  }
  var Qc = cc11001100_hook("Qc", ic(() => Oa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Tc) || 1E-4 > Math.random()), "var-init"),
    Pc = cc11001100_hook("Pc", ic(() => -1 != wa().indexOf("MSIE")), "var-init");
  const Tc = cc11001100_hook("Tc", a => -1 != wa().indexOf(a), "var-init");
  var Uc = cc11001100_hook("Uc", /^([0-9.]+)px$/, "var-init"),
    Vc = cc11001100_hook("Vc", /^(-?[0-9.]{1,30})$/, "var-init");
  function Wc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Vc.test(a)) return null;
    a = cc11001100_hook("a", Number(a), "assign");
    return isNaN(a) ? null : a;
  }
  function K(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Uc.exec(a), "assign")) ? +a[1] : null;
  }
  var Xc = cc11001100_hook("Xc", (a, b) => {
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
    Yc = cc11001100_hook("Yc", ic(() => Ec() ? 2 : Fc() ? 1 : 0), "var-init"),
    Zc = cc11001100_hook("Zc", (a, b) => {
      J(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    }, "var-init");
  let $c = cc11001100_hook("$c", [], "var-init");
  const ad = cc11001100_hook("ad", () => {
    const a = cc11001100_hook("a", $c, "var-init");
    $c = cc11001100_hook("$c", [], "assign");
    for (const b of a) try {
      b();
    } catch {}
  }, "var-init");
  var bd = cc11001100_hook("bd", a => {
      if ("number" !== typeof a.goog_pvsid) try {
        Object.defineProperty(a, "goog_pvsid", {
          value: cc11001100_hook("value", Math.floor(Math.random() * 2 ** 52), "object-key-init"),
          configurable: cc11001100_hook("configurable", !1, "object-key-init")
        });
      } catch (b) {}
      return Number(a.goog_pvsid) || -1;
    }, "var-init"),
    ed = cc11001100_hook("ed", a => {
      var b = cc11001100_hook("b", cd, "var-init");
      "complete" === b.readyState || "interactive" === b.readyState ? ($c.push(a), 1 == $c.length && (window.Promise ? Promise.resolve().then(ad) : window.setImmediate ? setImmediate(ad) : setTimeout(ad, 0))) : b.addEventListener("DOMContentLoaded", a);
    }, "var-init");
  function Mc(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return b.createElement(String(a).toLowerCase());
  }
  ;
  function fd(a, b, c = null, d = !1, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    gd(a, b, c, d, e);
  }
  function gd(a, b, c, d, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
    const f = cc11001100_hook("f", Mc("IMG", a.document), "var-init");
    if (c || d) {
      const g = cc11001100_hook("g", h => {
        c && c(h);
        if (d) {
          h = cc11001100_hook("h", a.google_image_requests, "assign");
          const k = cc11001100_hook("k", Ka(h, f), "var-init");
          0 <= k && Array.prototype.splice.call(h, k, 1);
        }
        lc(f, "load", g);
        lc(f, "error", g);
      }, "var-init");
      kc(f, "load", g);
      kc(f, "error", g);
    }
    e && (f.attributionSrc = cc11001100_hook("f.attributionSrc", "", "assign"));
    f.src = cc11001100_hook("f.src", b, "assign");
    a.google_image_requests.push(f);
  }
  var id = cc11001100_hook("id", a => {
      let b = cc11001100_hook("b", "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe", "var-init");
      J(a, (c, d) => {
        c && (b += cc11001100_hook("b", `&${d}=${encodeURIComponent(c)}`, "assign"));
      });
      hd(b);
    }, "var-init"),
    hd = cc11001100_hook("hd", a => {
      var b = cc11001100_hook("b", window, "var-init");
      b.fetch ? b.fetch(a, {
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        credentials: cc11001100_hook("credentials", "include", "object-key-init"),
        redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      }) : fd(b, a, void 0, !1, !1);
    }, "var-init");
  let jd = cc11001100_hook("jd", null, "var-init");
  var cd = cc11001100_hook("cd", document, "var-init"),
    L = cc11001100_hook("L", window, "var-init");
  let kd = cc11001100_hook("kd", null, "var-init");
  var ld = cc11001100_hook("ld", (a, b = []) => {
    let c = cc11001100_hook("c", !1, "var-init");
    n.google_logging_queue || (c = cc11001100_hook("c", !0, "assign"), n.google_logging_queue = cc11001100_hook("n.google_logging_queue", [], "assign"));
    n.google_logging_queue.push([a, b]);
    if (a = cc11001100_hook("a", c, "assign")) {
      if (null == kd) {
        kd = cc11001100_hook("kd", !1, "assign");
        try {
          var d = cc11001100_hook("d", Kc(n), "var-init");
          d && -1 !== d.location.hash.indexOf("google_logging") && (kd = cc11001100_hook("kd", !0, "assign"));
          n.localStorage.getItem("google_logging") && (kd = cc11001100_hook("kd", !0, "assign"));
        } catch (e) {}
      }
      a = cc11001100_hook("a", kd, "assign");
    }
    a && (d = cc11001100_hook("d", n.document, "assign"), a = cc11001100_hook("a", new ec(fc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), "assign"), a = cc11001100_hook("a", zc(a instanceof ec && a.constructor === ec && a.h === gc ? a.i : "type_error:Const"), "assign"), Lc(d, a));
  }, "var-init");
  function md(a = n) {
    let b = cc11001100_hook("b", a.context || a.AMP_CONTEXT_DATA, "var-init");
    if (!b) try {
      b = cc11001100_hook("b", a.parent.context || a.parent.AMP_CONTEXT_DATA, "assign");
    } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function nd(a = md()) {
    return a ? Jc(a.master) ? a.master : null : null;
  }
  ;
  function od(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 === b.length) return zc(a[0]);
    const c = cc11001100_hook("c", [a[0]], "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return zc(c.join(""));
  }
  ;
  function pd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a[0], "assign");
    const b = cc11001100_hook("b", rc(), "var-init");
    a = cc11001100_hook("a", b ? b.createScript(a) : a, "assign");
    return new tc(a, sc);
  }
  ;
  var qd = cc11001100_hook("qd", a => {
      a = cc11001100_hook("a", nd(md(a)) || a, "assign");
      a.google_unique_id = cc11001100_hook("a.google_unique_id", (a.google_unique_id || 0) + 1, "assign");
      return a.google_unique_id;
    }, "var-init"),
    rd = cc11001100_hook("rd", a => {
      a = cc11001100_hook("a", a.google_unique_id, "assign");
      return "number" === typeof a ? a : 0;
    }, "var-init"),
    sd = cc11001100_hook("sd", () => {
      if (!L) return !1;
      try {
        return !(!L.navigator.standalone && !L.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    }, "var-init"),
    td = cc11001100_hook("td", a => {
      if (!a) return "";
      a = cc11001100_hook("a", a.toLowerCase(), "assign");
      "ca-" != a.substring(0, 3) && (a = cc11001100_hook("a", "ca-" + a, "assign"));
      return a;
    }, "var-init");
  class ud {
    constructor(a, b) {
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", {}, "assign");
    }
  }
  var vd = cc11001100_hook("vd", a => !!(a.error && a.meta && a.id), "var-init");
  const wd = cc11001100_hook("wd", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  var xd = cc11001100_hook("xd", class {
      constructor(a, b) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.i = cc11001100_hook("this.i", b, "assign");
      }
    }, "var-init"),
    yd = cc11001100_hook("yd", class {
      constructor(a, b, c) {
        this.url = cc11001100_hook("this.url", a, "assign");
        this.s = cc11001100_hook("this.s", b, "assign");
        this.Na = cc11001100_hook("this.Na", !!c, "assign");
        this.depth = cc11001100_hook("this.depth", null, "assign");
      }
    }, "var-init");
  function zd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function Ad(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init");
    J(a, function (g, h) {
      (g = cc11001100_hook("g", Bd(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function Bd(a, b, c, d, e) {
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
        for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(Bd(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(Ad(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function Cd(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 1, "var-init");
    for (const c in a.i) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.j.length - 1;
  }
  function Dd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
      d = cc11001100_hook("d", Cd(a) - b.length, "var-init");
    if (0 > d) return "";
    a.h.sort(function (f, g) {
      return f - g;
    });
    b = cc11001100_hook("b", null, "assign");
    let e = cc11001100_hook("e", "", "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.h.length; f++) {
      const g = cc11001100_hook("g", a.h[f], "var-init"),
        h = cc11001100_hook("h", a.i[g], "var-init");
      for (let k = cc11001100_hook("k", 0, "var-init"); k < h.length; k++) {
        if (!d) {
          b = cc11001100_hook("b", null == b ? g : b, "assign");
          break;
        }
        let l = cc11001100_hook("l", Ad(h[k], a.j, ",$"), "var-init");
        if (l) {
          l = cc11001100_hook("l", e + l, "assign");
          if (d >= l.length) {
            d -= cc11001100_hook("d", l.length, "assign");
            c += cc11001100_hook("c", l, "assign");
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
  class Ed {
    constructor() {
      this.j = cc11001100_hook("this.j", "&", "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
    }
  }
  ;
  function Fd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= b && 1 >= b && (a.h = cc11001100_hook("a.h", b, "assign"));
  }
  function Gd(a, b, c, d = !1, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if ((d ? a.h : Math.random()) < (e || .01)) try {
      let f;
      c instanceof Ed ? f = cc11001100_hook("f", c, "assign") : (f = cc11001100_hook("f", new Ed(), "assign"), J(c, (h, k) => {
        var l = cc11001100_hook("l", f, "var-init");
        const m = cc11001100_hook("m", l.l++, "var-init");
        h = cc11001100_hook("h", zd(k, h), "assign");
        l.h.push(m);
        l.i[m] = cc11001100_hook("l.i[m]", h, "assign");
      }));
      const g = cc11001100_hook("g", Dd(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && fd(n, g);
    } catch (f) {}
  }
  class Hd {
    constructor() {
      this.h = cc11001100_hook("this.h", Math.random(), "assign");
    }
  }
  ;
  let Id = cc11001100_hook("Id", null, "var-init");
  function Jd() {
    if (null === Id) {
      Id = cc11001100_hook("Id", "", "assign");
      try {
        let a = cc11001100_hook("a", "", "var-init");
        try {
          a = cc11001100_hook("a", n.top.location.hash, "assign");
        } catch (b) {
          a = cc11001100_hook("a", n.location.hash, "assign");
        }
        if (a) {
          const b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "var-init");
          Id = cc11001100_hook("Id", b ? b[1] : "", "assign");
        }
      } catch (a) {}
    }
    return Id;
  }
  ;
  function Kd() {
    const a = cc11001100_hook("a", n.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function Ld() {
    const a = cc11001100_hook("a", n.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class Md {
    constructor(a, b) {
      var c = cc11001100_hook("c", Ld() || Kd(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const Nd = cc11001100_hook("Nd", n.performance, "var-init"),
    Od = cc11001100_hook("Od", !!(Nd && Nd.mark && Nd.measure && Nd.clearMarks), "var-init"),
    Pd = cc11001100_hook("Pd", ic(() => {
      var a;
      if (a = cc11001100_hook("a", Od, "assign")) a = cc11001100_hook("a", Jd(), "assign"), a = cc11001100_hook("a", !!a.indexOf && 0 <= a.indexOf("1337"), "assign");
      return a;
    }), "var-init");
  function Qd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && Nd && Pd() && (Nd.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Nd.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function Rd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.h = cc11001100_hook("a.h", !1, "assign");
    a.i != a.j.google_js_reporting_queue && (Pd() && La(a.i, Qd), a.i.length = cc11001100_hook("a.i.length", 0, "assign"));
  }
  class Sd {
    constructor(a) {
      this.i = cc11001100_hook("this.i", [], "assign");
      this.j = cc11001100_hook("this.j", a || n, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.i = cc11001100_hook("this.i", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.h = cc11001100_hook("this.h", Pd() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.h) return null;
      a = cc11001100_hook("a", new Md(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      Nd && Pd() && Nd.mark(b);
      return a;
    }
    end(a) {
      if (this.h && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Ld() || Kd()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        Nd && Pd() && Nd.mark(b);
        !this.h || 2048 < this.i.length || this.i.push(a);
      }
    }
  }
  ;
  function Td(a) {
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
  class Ud {
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
    ia(a, b, c) {
      let d, e;
      try {
        this.i && this.i.h ? (e = cc11001100_hook("e", this.i.start(a.toString(), 3), "assign"), d = cc11001100_hook("d", b(), "assign"), this.i.end(e)) : d = cc11001100_hook("d", b(), "assign");
      } catch (f) {
        b = cc11001100_hook("b", !0, "assign");
        try {
          Qd(e), b = cc11001100_hook("b", this.m(a, new ud(f, {
            message: cc11001100_hook("message", Td(f), "object-key-init")
          }), void 0, c), "assign");
        } catch (g) {
          this.I(217, g);
        }
        if (b) window.console?.error?.(f);else throw f;
      }
      return d;
    }
    qa(a, b) {
      return (...c) => this.ia(a, () => b.apply(void 0, c));
    }
    I(a, b, c, d, e) {
      e = cc11001100_hook("e", e || "jserror", "assign");
      let f;
      try {
        const Ga = cc11001100_hook("Ga", new Ed(), "var-init");
        var g = cc11001100_hook("g", Ga, "var-init");
        g.h.push(1);
        g.i[1] = cc11001100_hook("g.i[1]", zd("context", a), "assign");
        vd(b) || (b = cc11001100_hook("b", new ud(b, {
          message: cc11001100_hook("message", Td(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          g = cc11001100_hook("g", Ga, "assign");
          var h = cc11001100_hook("h", b.msg.substring(0, 512), "var-init");
          g.h.push(2);
          g.i[2] = cc11001100_hook("g.i[2]", zd("msg", h), "assign");
        }
        var k = cc11001100_hook("k", b.meta || {}, "var-init");
        b = cc11001100_hook("b", k, "assign");
        if (this.h) try {
          this.h(b);
        } catch (Ra) {}
        if (d) try {
          d(b);
        } catch (Ra) {}
        d = cc11001100_hook("d", Ga, "assign");
        k = cc11001100_hook("k", [k], "assign");
        d.h.push(3);
        d.i[3] = cc11001100_hook("d.i[3]", k, "assign");
        d = cc11001100_hook("d", n, "assign");
        k = cc11001100_hook("k", [], "assign");
        b = cc11001100_hook("b", null, "assign");
        do {
          var l = cc11001100_hook("l", d, "var-init");
          if (Jc(l)) {
            var m = cc11001100_hook("m", l.location.href, "var-init");
            b = cc11001100_hook("b", l.document && l.document.referrer || null, "assign");
          } else m = cc11001100_hook("m", b, "assign"), b = cc11001100_hook("b", null, "assign");
          k.push(new yd(m || "", l));
          try {
            d = cc11001100_hook("d", l.parent, "assign");
          } catch (Ra) {
            d = cc11001100_hook("d", null, "assign");
          }
        } while (d && l != d);
        for (let Ra = cc11001100_hook("Ra", 0, "var-init"), kf = cc11001100_hook("kf", k.length - 1, "var-init"); Ra <= kf; ++Ra) k[Ra].depth = cc11001100_hook("k[Ra].depth", kf - Ra, "assign");
        l = cc11001100_hook("l", n, "assign");
        if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1) for (m = cc11001100_hook("m", 1, "assign"); m < k.length; ++m) {
          var u = cc11001100_hook("u", k[m], "var-init");
          u.url || (u.url = cc11001100_hook("u.url", l.location.ancestorOrigins[m - 1] || "", "assign"), u.Na = cc11001100_hook("u.Na", !0, "assign"));
        }
        var v = cc11001100_hook("v", k, "var-init");
        let bc = cc11001100_hook("bc", new yd(n.location.href, n, !1), "var-init");
        l = cc11001100_hook("l", null, "assign");
        const dd = cc11001100_hook("dd", v.length - 1, "var-init");
        for (u = cc11001100_hook("u", dd, "assign"); 0 <= u; --u) {
          var w = cc11001100_hook("w", v[u], "var-init");
          !l && wd.test(w.url) && (l = cc11001100_hook("l", w, "assign"));
          if (w.url && !w.Na) {
            bc = cc11001100_hook("bc", w, "assign");
            break;
          }
        }
        w = cc11001100_hook("w", null, "assign");
        const Si = cc11001100_hook("Si", v.length && v[dd].url, "var-init");
        0 != bc.depth && Si && (w = cc11001100_hook("w", v[dd], "assign"));
        f = cc11001100_hook("f", new xd(bc, w), "assign");
        if (f.i) {
          v = cc11001100_hook("v", Ga, "assign");
          var y = cc11001100_hook("y", f.i.url || "", "var-init");
          v.h.push(4);
          v.i[4] = cc11001100_hook("v.i[4]", zd("top", y), "assign");
        }
        var E = cc11001100_hook("E", {
          url: cc11001100_hook("url", f.h.url || "", "object-key-init")
        }, "var-init");
        if (f.h.url) {
          var xa = cc11001100_hook("xa", f.h.url.match(Gc), "var-init"),
            R = cc11001100_hook("R", xa[1], "var-init"),
            ya = cc11001100_hook("ya", xa[3], "var-init"),
            na = cc11001100_hook("na", xa[4], "var-init");
          y = cc11001100_hook("y", "", "assign");
          R && (y += cc11001100_hook("y", R + ":", "assign"));
          ya && (y += cc11001100_hook("y", "//", "assign"), y += cc11001100_hook("y", ya, "assign"), na && (y += cc11001100_hook("y", ":" + na, "assign")));
          var lf = cc11001100_hook("lf", y, "var-init");
        } else lf = cc11001100_hook("lf", "", "assign");
        R = cc11001100_hook("R", Ga, "assign");
        E = cc11001100_hook("E", [E, {
          url: cc11001100_hook("url", lf, "object-key-init")
        }], "assign");
        R.h.push(5);
        R.i[5] = cc11001100_hook("R.i[5]", E, "assign");
        Gd(this.A, e, Ga, this.j, c);
      } catch (Ga) {
        try {
          Gd(this.A, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", Td(Ga), "object-key-init"),
            url: cc11001100_hook("url", f && f.h.url, "object-key-init")
          }, this.j, c);
        } catch (bc) {}
      }
      return !0;
    }
    ca(a, b) {
      b.catch(c => {
        c = cc11001100_hook("c", c ? c : "unknown rejection", "assign");
        this.I(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0);
      });
    }
  }
  ;
  var Vd = cc11001100_hook("Vd", a => "string" === typeof a, "var-init"),
    Wd = cc11001100_hook("Wd", a => void 0 === a, "var-init");
  var Yd = cc11001100_hook("Yd", class extends I {
      constructor(a) {
        super(a, -1, Xd);
      }
    }, "var-init"),
    Xd = cc11001100_hook("Xd", [2, 8], "var-init"),
    Zd = cc11001100_hook("Zd", [3, 4, 5], "var-init"),
    $d = cc11001100_hook("$d", [6, 7], "var-init");
  function ae(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a ? !a : a;
  }
  function be(a, b) {
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
  function ce(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", C(a, Yd, 2), "var-init");
    if (!c.length) return de(a, b);
    a = cc11001100_hook("a", H(a, 1), "assign");
    if (1 === a) return ae(ce(c[0], b));
    c = cc11001100_hook("c", Na(c, d => () => ce(d, b)), "assign");
    switch (a) {
      case 2:
        return be(c, !1);
      case 3:
        return be(c, !0);
    }
  }
  function de(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Ab(a, Zd), "var-init");
    a: {
      switch (c) {
        case 3:
          var d = cc11001100_hook("d", H(a, Bb(a, Zd, 3)), "var-init");
          break a;
        case 4:
          d = cc11001100_hook("d", H(a, Bb(a, Zd, 4)), "assign");
          break a;
        case 5:
          d = cc11001100_hook("d", H(a, Bb(a, Zd, 5)), "assign");
          break a;
      }
      d = cc11001100_hook("d", void 0, "assign");
    }
    if (d && (b = cc11001100_hook("b", (b = cc11001100_hook("b", b[c], "assign")) && b[d], "assign"))) {
      try {
        var e = cc11001100_hook("e", b(...xb(a, 8)), "var-init");
      } catch (f) {
        return;
      }
      b = cc11001100_hook("b", H(a, 1), "assign");
      if (4 === b) return !!e;
      if (5 === b) return null != e;
      if (12 === b) a = cc11001100_hook("a", F(a, Bb(a, $d, 7)), "assign");else a: {
        switch (c) {
          case 4:
            a = cc11001100_hook("a", Ib(a, Bb(a, $d, 6)), "assign");
            break a;
          case 5:
            a = cc11001100_hook("a", F(a, Bb(a, $d, 7)), "assign");
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
            return Vd(a) && Vd(e) && new RegExp(a).test(e);
          case 10:
            return null != e && -1 === ra(String(e), a);
          case 11:
            return null != e && 1 === ra(String(e), a);
        }
      }
    }
  }
  function ee(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return !a || !(!b || !ce(a, b));
  }
  ;
  var ge = cc11001100_hook("ge", class extends I {
      constructor(a) {
        super(a, -1, fe);
      }
    }, "var-init"),
    fe = cc11001100_hook("fe", [4], "var-init");
  var he = cc11001100_hook("he", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var je = cc11001100_hook("je", class extends I {
      constructor(a) {
        super(a, -1, ie);
      }
    }, "var-init"),
    ke = cc11001100_hook("ke", $b(je), "var-init"),
    ie = cc11001100_hook("ie", [5], "var-init"),
    le = cc11001100_hook("le", [1, 2, 3, 6, 7], "var-init");
  var ne = cc11001100_hook("ne", class extends I {
      constructor() {
        super(void 0, -1, me);
      }
    }, "var-init"),
    me = cc11001100_hook("me", [2], "var-init");
  function oe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  var pe = cc11001100_hook("pe", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  function qe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 1, b, 0);
  }
  function re(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 2, b, 0);
  }
  var se = cc11001100_hook("se", class extends I {
    constructor() {
      super();
    }
    getWidth() {
      return D(t(this, 1), 0);
    }
    getHeight() {
      return D(t(this, 2), 0);
    }
  }, "var-init");
  function te(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Fb(a, 1, b);
  }
  function ue(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Fb(a, 2, b);
  }
  function ve(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Fb(a, 3, b);
  }
  var we = cc11001100_hook("we", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var xe = cc11001100_hook("xe", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  function ye(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gb(a, 4, ze, b);
  }
  var Ae = cc11001100_hook("Ae", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    ze = cc11001100_hook("ze", [4, 5, 6, 8, 9, 10], "var-init");
  function Be(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 1, b, 0);
  }
  function Ce(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 2, b, 0);
  }
  var De = cc11001100_hook("De", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var Ee = cc11001100_hook("Ee", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    Fe = cc11001100_hook("Fe", [1, 2], "var-init");
  function Ge(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Fb(a, 1, b);
  }
  function He(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Hb(a, 2, b);
  }
  function Ie(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return yb(a, 4, b);
  }
  function Je(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Hb(a, 5, b);
  }
  function Ke(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 6, b, 0);
  }
  var Me = cc11001100_hook("Me", class extends I {
      constructor() {
        super(void 0, -1, Le);
      }
    }, "var-init"),
    Le = cc11001100_hook("Le", [2, 4, 5], "var-init");
  var Oe = cc11001100_hook("Oe", class extends I {
      constructor() {
        super(void 0, -1, Ne);
      }
    }, "var-init"),
    Ne = cc11001100_hook("Ne", [5], "var-init"),
    Pe = cc11001100_hook("Pe", [1, 2, 3, 4], "var-init");
  var Re = cc11001100_hook("Re", class extends I {
      constructor() {
        super(void 0, -1, Qe);
      }
    }, "var-init"),
    Qe = cc11001100_hook("Qe", [2, 3], "var-init");
  function Se(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gb(a, 4, Te, b);
  }
  var Ue = cc11001100_hook("Ue", class extends I {
      constructor() {
        super();
      }
      getTagSessionCorrelator() {
        return D(t(this, 2), 0);
      }
    }, "var-init"),
    Te = cc11001100_hook("Te", [4, 5, 7], "var-init");
  function Ve(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    We(a, ...b.map(c => ({
      Ua: cc11001100_hook("Ua", 4, "object-key-init"),
      message: cc11001100_hook("message", c, "object-key-init")
    })));
  }
  function Xe(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    We(a, ...b.map(c => ({
      Ua: cc11001100_hook("Ua", 7, "object-key-init"),
      message: cc11001100_hook("message", c, "object-key-init")
    })));
  }
  ;
  function Ye(a) {
    cc11001100_hook("a", a, "function-parameter");
    return JSON.stringify([a.map(b => [{
      [b.Ua]: cc11001100_hook(b.Ua, b.message.toJSON(), "object-key-init")
    }])]);
  }
  ;
  var Ze = cc11001100_hook("Ze", (a, b) => {
    globalThis.fetch(a, {
      method: cc11001100_hook("method", "POST", "object-key-init"),
      body: cc11001100_hook("body", b, "object-key-init"),
      keepalive: cc11001100_hook("keepalive", 65536 > b.length, "object-key-init"),
      credentials: cc11001100_hook("credentials", "omit", "object-key-init"),
      mode: cc11001100_hook("mode", "no-cors", "object-key-init"),
      redirect: cc11001100_hook("redirect", "follow", "object-key-init")
    }).catch(() => {});
  }, "var-init");
  function $e() {
    this.A = cc11001100_hook("this.A", this.A, "assign");
    this.j = cc11001100_hook("this.j", this.j, "assign");
  }
  $e.prototype.A = cc11001100_hook("$e.prototype.A", !1, "assign");
  function af(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A || (a.A = cc11001100_hook("a.A", !0, "assign"), a.h());
  }
  function bf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.A ? b() : (a.j || (a.j = cc11001100_hook("a.j", [], "assign")), a.j.push(b));
  }
  $e.prototype.h = cc11001100_hook("$e.prototype.h", function () {
    if (this.j) for (; this.j.length;) this.j.shift()();
  }, "assign");
  function cf(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    kc(b, c, d);
    bf(a, () => lc(b, c, d));
  }
  function df(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    1 !== a.state && (a.state = cc11001100_hook("a.state", 1, "assign"), a.callback && a.callback(b));
  }
  function ef(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.s.document.visibilityState ? cf(a, a.s.document, "visibilitychange", b => {
      "hidden" === a.s.document.visibilityState && df(a, b);
      "visible" === a.s.document.visibilityState && (a.state = cc11001100_hook("a.state", 0, "assign"));
    }) : "onpagehide" in a.s ? (cf(a, a.s, "pagehide", b => {
      df(a, b);
    }), cf(a, a.s, "pageshow", () => {
      a.state = cc11001100_hook("a.state", 0, "assign");
    })) : cf(a, a.s, "beforeunload", b => {
      df(a, b);
    });
  }
  function ff(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.callback || ef(a);
    a.callback = cc11001100_hook("a.callback", b, "assign");
  }
  var gf = cc11001100_hook("gf", class extends $e {
    constructor(a) {
      super();
      this.s = cc11001100_hook("this.s", a, "assign");
      this.state = cc11001100_hook("this.state", 0, "assign");
      this.callback = cc11001100_hook("this.callback", null, "assign");
    }
  }, "var-init");
  function We(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    a.A && 65536 <= Ye(a.h.concat(b)).length && hf(a);
    a.h.push(...b);
    a.h.length >= a.m && hf(a);
    a.h.length && null === a.i && (a.i = cc11001100_hook("a.i", setTimeout(() => {
      hf(a);
    }, a.B), "assign"));
  }
  function jf(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j || (a.j = cc11001100_hook("a.j", new gf(b), "assign"), ff(a.j, () => {
      for (const e of a.l) e();
      c();
    }));
    d && 1 !== a.j.state && a.l.push(d);
  }
  function hf(a) {
    cc11001100_hook("a", a, "function-parameter");
    null !== a.i && (clearTimeout(a.i), a.i = cc11001100_hook("a.i", null, "assign"));
    if (a.h.length) {
      var b = cc11001100_hook("b", Ye(a.h), "var-init");
      a.v("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.h = cc11001100_hook("a.h", [], "assign");
    }
  }
  function mf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    jf(a, b, () => {
      hf(a);
    }, c);
  }
  var nf = cc11001100_hook("nf", class {
      constructor(a, b, c) {
        this.v = cc11001100_hook("this.v", Ze, "assign");
        this.B = cc11001100_hook("this.B", a, "assign");
        this.m = cc11001100_hook("this.m", b, "assign");
        this.A = cc11001100_hook("this.A", c, "assign");
        this.l = cc11001100_hook("this.l", [], "assign");
        this.h = cc11001100_hook("this.h", [], "assign");
        this.i = cc11001100_hook("this.i", null, "assign");
      }
    }, "var-init"),
    of = cc11001100_hook("of", class extends nf {
      constructor(a = 1E3, b = 100, c = !1) {
        super(a, b, c && !0);
      }
    }, "var-init");
  function pf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", A(b, 1, Date.now(), 0), "assign");
    var c = cc11001100_hook("c", bd(window), "var-init");
    b = cc11001100_hook("b", A(b, 2, c, 0), "assign");
    return A(b, 6, a.m, 0);
  }
  function qf(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (a.j) {
      var g = cc11001100_hook("g", Ce(Be(new De(), b), c), "var-init");
      b = cc11001100_hook("b", Ke(He(Ge(Je(Ie(new Me(), d), e), g), a.h.slice()), f), "assign");
      b = cc11001100_hook("b", Se(new Ue(), b), "assign");
      Ve(a.i, pf(a, b));
      if (1 === f || 3 === f || 4 === f && !a.h.some(h => H(h, 1) === H(g, 1) && H(h, 2) === c)) a.h.push(g), 100 < a.h.length && a.h.shift();
    }
  }
  function rf(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (a.j && a.l) {
      var e = cc11001100_hook("e", new Re(), "var-init");
      b = cc11001100_hook("b", Hb(e, 2, b), "assign");
      c = cc11001100_hook("c", Hb(b, 3, c), "assign");
      d && A(c, 1, d, 0);
      d = cc11001100_hook("d", new Ue(), "assign");
      d = cc11001100_hook("d", Gb(d, 7, Te, c), "assign");
      Ve(a.i, pf(a, d));
    }
  }
  var sf = cc11001100_hook("sf", class {
    constructor(a, b, c, d = new of(b)) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
      this.i = cc11001100_hook("this.i", d, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
      this.j = cc11001100_hook("this.j", 0 < a && Rc() < 1 / a, "assign");
    }
  }, "var-init");
  var M = cc11001100_hook("M", a => {
    var b = cc11001100_hook("b", "ua", "var-init");
    if (a.ua && a.hasOwnProperty(b)) return a.ua;
    b = cc11001100_hook("b", new a(), "assign");
    return a.ua = cc11001100_hook("a.ua", b, "assign");
  }, "var-init");
  var tf = cc11001100_hook("tf", class {
    constructor() {
      this.G = cc11001100_hook("this.G", {
        [3]: {},
        [4]: {},
        [5]: {}
      }, "assign");
    }
  }, "var-init");
  var uf = cc11001100_hook("uf", /^true$/.test("false"), "var-init");
  function vf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    switch (b) {
      case 1:
        return H(a, Bb(a, le, 1));
      case 2:
        return H(a, Bb(a, le, 2));
      case 3:
        return H(a, Bb(a, le, 3));
      case 6:
        return H(a, Bb(a, le, 6));
      default:
        return null;
    }
  }
  function wf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return null;
    switch (b) {
      case 1:
        return G(a, 1);
      case 7:
        return F(a, 3);
      case 2:
        return Ib(a, 2);
      case 3:
        return F(a, 3);
      case 6:
        return xb(a, 4);
      default:
        return null;
    }
  }
  const xf = cc11001100_hook("xf", ic(() => {
    if (!uf) return {};
    try {
      const a = cc11001100_hook("a", window.sessionStorage && window.sessionStorage.getItem("GGDFSSK"), "var-init");
      if (a) return JSON.parse(a);
    } catch {}
    return {};
  }), "var-init");
  function yf(a, b, c, d = 0) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    M(zf).j[d] = cc11001100_hook("M(zf).j[d]", M(zf).j[d]?.add(b) ?? new Set().add(b), "assign");
    const e = cc11001100_hook("e", xf(), "var-init");
    if (null != e[b]) return e[b];
    b = cc11001100_hook("b", Af(d)[b], "assign");
    if (!b) return c;
    b = cc11001100_hook("b", ke(JSON.stringify(b)), "assign");
    b = cc11001100_hook("b", Bf(b), "assign");
    a = cc11001100_hook("a", wf(b, a), "assign");
    return null != a ? a : c;
  }
  function Bf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", M(tf).G, "var-init");
    if (b) {
      const c = cc11001100_hook("c", Qa(C(a, he, 5), d => ee(B(d, Yd, 1), b)), "var-init");
      if (c) return B(c, ge, 2) ?? null;
    }
    return B(a, ge, 4) ?? null;
  }
  class zf {
    constructor() {
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.h = cc11001100_hook("this.h", new Map(), "assign");
    }
  }
  function Cf(a, b = !1, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return !!yf(1, a, b, c);
  }
  function Df(a, b = 0, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Number(yf(2, a, b, c)), "assign");
    return isNaN(a) ? b : a;
  }
  function Ef(a, b = "", c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", yf(3, a, b, c), "assign");
    return "string" === typeof a ? a : b;
  }
  function Ff(a, b = [], c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", yf(6, a, b, c), "assign");
    return Array.isArray(a) ? a : b;
  }
  function Af(a) {
    cc11001100_hook("a", a, "function-parameter");
    return M(zf).i[a] || (M(zf).i[a] = cc11001100_hook("M(zf).i[a]", {}, "assign"));
  }
  function Gf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Af(b), "var-init");
    J(a, (d, e) => c[e] = cc11001100_hook("c[e]", d, "assign"));
  }
  function Hf(a, b, c, d, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init"),
      g = cc11001100_hook("g", [], "var-init");
    La(b, h => {
      const k = cc11001100_hook("k", Af(h), "var-init");
      La(a, l => {
        var m = cc11001100_hook("m", Ab(l, le), "var-init");
        const u = cc11001100_hook("u", vf(l, m), "var-init");
        if (u) {
          var v = cc11001100_hook("v", M(zf).h.get(h)?.get(u)?.slice(0) ?? [], "var-init");
          a: {
            const w = cc11001100_hook("w", new Oe(), "var-init");
            switch (m) {
              case 1:
                zb(w, 1, Pe, u);
                break;
              case 2:
                zb(w, 2, Pe, u);
                break;
              case 3:
                zb(w, 3, Pe, u);
                break;
              case 6:
                zb(w, 4, Pe, u);
                break;
              default:
                m = cc11001100_hook("m", void 0, "assign");
                break a;
            }
            yb(w, 5, v);
            m = cc11001100_hook("m", w, "assign");
          }
          if (v = cc11001100_hook("v", m, "assign")) v = cc11001100_hook("v", !!M(zf).j[h]?.has(u), "assign");
          v && f.push(m);
          if (v = cc11001100_hook("v", m, "assign")) v = cc11001100_hook("v", !!M(zf).h.get(h)?.has(u), "assign");
          v && g.push(m);
          e || (m = cc11001100_hook("m", M(zf), "assign"), m.h.has(h) || m.h.set(h, new Map()), m.h.get(h).has(u) || m.h.get(h).set(u, []), d && m.h.get(h).get(u).push(d));
          k[u] = cc11001100_hook("k[u]", l.toJSON(), "assign");
        }
      });
    });
    (f.length || g.length) && rf(c, f, g, d ?? void 0);
  }
  function If(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Af(b), "var-init");
    La(a, d => {
      var e = cc11001100_hook("e", ke(JSON.stringify(d)), "var-init");
      const f = cc11001100_hook("f", Ab(e, le), "var-init");
      (e = cc11001100_hook("e", vf(e, f), "assign")) && (c[e] || (c[e] = cc11001100_hook("c[e]", d, "assign")));
    });
  }
  function Jf() {
    return Na(Object.keys(M(zf).i), a => Number(a));
  }
  function Kf(a) {
    cc11001100_hook("a", a, "function-parameter");
    Sa(M(zf).l, a) || Gf(Af(4), a);
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
  function Lf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b[a] || c;
  }
  function Mf(a) {
    cc11001100_hook("a", a, "function-parameter");
    N(5, Cf, a);
    N(6, Df, a);
    N(7, Ef, a);
    N(8, Ff, a);
    N(13, If, a);
    N(15, Kf, a);
  }
  function Nf(a) {
    cc11001100_hook("a", a, "function-parameter");
    N(4, b => {
      M(tf).G = cc11001100_hook("M(tf).G", b, "assign");
    }, a);
    N(9, (b, c) => {
      var d = cc11001100_hook("d", M(tf), "var-init");
      null == d.G[3][b] && (d.G[3][b] = cc11001100_hook("d.G[3][b]", c, "assign"));
    }, a);
    N(10, (b, c) => {
      var d = cc11001100_hook("d", M(tf), "var-init");
      null == d.G[4][b] && (d.G[4][b] = cc11001100_hook("d.G[4][b]", c, "assign"));
    }, a);
    N(11, (b, c) => {
      var d = cc11001100_hook("d", M(tf), "var-init");
      null == d.G[5][b] && (d.G[5][b] = cc11001100_hook("d.G[5][b]", c, "assign"));
    }, a);
    N(14, b => {
      var c = cc11001100_hook("c", M(tf), "var-init");
      for (const d of [3, 4, 5]) Object.assign(c.G[d], b[d]);
    }, a);
  }
  function Of(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }
  ;
  function Pf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.j = cc11001100_hook("a.j", Lf(1, b, () => {}), "assign");
    a.l = cc11001100_hook("a.l", d => Lf(2, b, () => [])(d, c), "assign");
    a.i = cc11001100_hook("a.i", () => Lf(3, b, () => [])(c), "assign");
    a.h = cc11001100_hook("a.h", d => {
      Lf(16, b, () => {})(d, c);
    }, "assign");
  }
  class Qf {
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
  let Rf, Sf;
  const Tf = cc11001100_hook("Tf", new Sd(window), "var-init");
  (a => {
    Rf = cc11001100_hook("Rf", a ?? new Hd(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    Fd(Rf, window.google_srt);
    Sf = cc11001100_hook("Sf", new Ud(Rf, Tf), "assign");
    Sf.wa(() => {});
    Sf.l(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || Rd(Tf) : Tf.h && kc(window, "load", () => {
      window.google_measure_js_timing || Rd(Tf);
    });
  })();
  var Uf = cc11001100_hook("Uf", {
    Kb: cc11001100_hook("Kb", 0, "object-key-init"),
    Jb: cc11001100_hook("Jb", 1, "object-key-init"),
    Gb: cc11001100_hook("Gb", 2, "object-key-init"),
    Bb: cc11001100_hook("Bb", 3, "object-key-init"),
    Hb: cc11001100_hook("Hb", 4, "object-key-init"),
    Cb: cc11001100_hook("Cb", 5, "object-key-init"),
    Ib: cc11001100_hook("Ib", 6, "object-key-init"),
    Eb: cc11001100_hook("Eb", 7, "object-key-init"),
    Fb: cc11001100_hook("Fb", 8, "object-key-init"),
    Ab: cc11001100_hook("Ab", 9, "object-key-init"),
    Db: cc11001100_hook("Db", 10, "object-key-init")
  }, "var-init");
  var Vf = cc11001100_hook("Vf", {
    Mb: cc11001100_hook("Mb", 0, "object-key-init"),
    Nb: cc11001100_hook("Nb", 1, "object-key-init"),
    Lb: cc11001100_hook("Lb", 2, "object-key-init")
  }, "var-init");
  function Wf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 != a.h) throw Error("Already resolved/rejected.");
  }
  var Zf = cc11001100_hook("Zf", class {
    constructor() {
      this.i = cc11001100_hook("this.i", new Xf(this), "assign");
      this.h = cc11001100_hook("this.h", 0, "assign");
    }
    resolve(a) {
      Wf(this);
      this.h = cc11001100_hook("this.h", 1, "assign");
      this.l = cc11001100_hook("this.l", a, "assign");
      Yf(this.i);
    }
  }, "var-init");
  function Yf(a) {
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
  var Xf = cc11001100_hook("Xf", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
    }
    then(a, b) {
      if (this.i) throw Error("Then functions already set.");
      this.i = cc11001100_hook("this.i", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      Yf(this);
    }
  }, "var-init");
  const $f = cc11001100_hook("$f", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a.slice(0), "assign");
    }
    forEach(a) {
      this.h.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new $f(Ma(this.h, a));
    }
    apply(a) {
      return new $f(a(this.h.slice(0)));
    }
    sort(a) {
      return new $f(this.h.slice(0).sort(a));
    }
    get(a) {
      return this.h[a];
    }
    add(a) {
      const b = cc11001100_hook("b", this.h.slice(0), "var-init");
      b.push(a);
      return new $f(b);
    }
  }, "var-init");
  function ag(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", a.length, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
  }
  ;
  const cg = cc11001100_hook("cg", class {
    constructor() {
      this.h = cc11001100_hook("this.h", {}, "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
    }
    set(a, b) {
      const c = cc11001100_hook("c", bg(a), "var-init");
      this.h[c] = cc11001100_hook("this.h[c]", b, "assign");
      this.i[c] = cc11001100_hook("this.i[c]", a, "assign");
    }
    get(a, b) {
      a = cc11001100_hook("a", bg(a), "assign");
      return void 0 !== this.h[a] ? this.h[a] : b;
    }
    clear() {
      this.h = cc11001100_hook("this.h", {}, "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
    }
  }, "var-init");
  function bg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Object ? String(ea(a)) : a + "";
  }
  ;
  function dg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new eg({
      value: cc11001100_hook("value", a, "object-key-init")
    }, null);
  }
  function fg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new eg(null, a);
  }
  function gg(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return dg(a());
    } catch (b) {
      return fg(b);
    }
  }
  function hg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a.h ? a.h.value : null;
  }
  function ig(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.h && b(a.h.value);
    return a;
  }
  function jg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.h || b(a.i);
    return a;
  }
  class eg {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
    }
    map(a) {
      return null != this.h ? (a = cc11001100_hook("a", a(this.h.value), "assign"), a instanceof eg ? a : dg(a)) : this;
    }
  }
  ;
  const kg = cc11001100_hook("kg", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", new cg(), "assign");
      if (a) for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.h.set(a, !0);
    }
    contains(a) {
      return void 0 !== this.h.h[bg(a)];
    }
  }, "var-init");
  class lg {
    constructor() {
      this.h = cc11001100_hook("this.h", new cg(), "assign");
    }
    set(a, b) {
      let c = cc11001100_hook("c", this.h.get(a), "var-init");
      c || (c = cc11001100_hook("c", new kg(), "assign"), this.h.set(a, c));
      c.add(b);
    }
  }
  ;
  var O = cc11001100_hook("O", class extends I {
      constructor(a) {
        super(a, -1, mg);
      }
      getId() {
        return t(this, 3);
      }
    }, "var-init"),
    mg = cc11001100_hook("mg", [4], "var-init");
  class ng {
    constructor({
      Wa: a,
      Ob: b,
      Wb: c,
      qb: d
    }) {
      this.h = cc11001100_hook("this.h", b, "assign");
      this.l = cc11001100_hook("this.l", new $f(a || []), "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
      this.i = cc11001100_hook("this.i", c, "assign");
    }
  }
  ;
  const pg = cc11001100_hook("pg", a => {
      const b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", a.l, "var-init");
      c && c.h.length && b.push({
        aa: cc11001100_hook("aa", "a", "object-key-init"),
        ga: cc11001100_hook("ga", og(c), "object-key-init")
      });
      null != a.h && b.push({
        aa: cc11001100_hook("aa", "as", "object-key-init"),
        ga: cc11001100_hook("ga", a.h, "object-key-init")
      });
      null != a.i && b.push({
        aa: cc11001100_hook("aa", "i", "object-key-init"),
        ga: cc11001100_hook("ga", String(a.i), "object-key-init")
      });
      null != a.j && b.push({
        aa: cc11001100_hook("aa", "rp", "object-key-init"),
        ga: cc11001100_hook("ga", String(a.j), "object-key-init")
      });
      b.sort(function (d, e) {
        return d.aa.localeCompare(e.aa);
      });
      b.unshift({
        aa: cc11001100_hook("aa", "t", "object-key-init"),
        ga: cc11001100_hook("ga", "aa", "object-key-init")
      });
      return b;
    }, "var-init"),
    og = cc11001100_hook("og", a => {
      a = cc11001100_hook("a", a.h.slice(0).map(qg), "assign");
      a = cc11001100_hook("a", JSON.stringify(a), "assign");
      return Sc(a);
    }, "var-init"),
    qg = cc11001100_hook("qg", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      null != t(a, 7) && (b.q = cc11001100_hook("b.q", t(a, 7), "assign"));
      null != t(a, 2) && (b.o = cc11001100_hook("b.o", t(a, 2), "assign"));
      null != t(a, 5) && (b.p = cc11001100_hook("b.p", t(a, 5), "assign"));
      return b;
    }, "var-init");
  var rg = cc11001100_hook("rg", class extends I {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return x(this, 1, a);
    }
  }, "var-init");
  function sg(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [].slice.call(arguments).filter(hc(e => null === e)), "var-init");
    if (!b.length) return null;
    let c = cc11001100_hook("c", [], "var-init"),
      d = cc11001100_hook("d", {}, "var-init");
    b.forEach(e => {
      c = cc11001100_hook("c", c.concat(e.La || []), "assign");
      d = cc11001100_hook("d", Object.assign(d, e.Qa), "assign");
    });
    return new tg(c, d);
  }
  function ug(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a) {
      case 1:
        return new tg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "mc", "object-key-init")
        });
      case 2:
        return new tg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "h", "object-key-init")
        });
      case 3:
        return new tg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "f", "object-key-init")
        });
      case 4:
        return new tg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "s", "object-key-init")
        });
      default:
        return null;
    }
  }
  function vg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a) var b = cc11001100_hook("b", null, "var-init");else {
      var c = cc11001100_hook("c", pg(a), "var-init");
      a = cc11001100_hook("a", [], "assign");
      for (b of c) c = cc11001100_hook("c", String(b.ga), "assign"), a.push(b.aa + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
      b = cc11001100_hook("b", new tg(null, {
        google_placement_id: cc11001100_hook("google_placement_id", a.join("~"), "object-key-init")
      }), "assign");
    }
    return b;
  }
  class tg {
    constructor(a, b) {
      this.La = cc11001100_hook("this.La", a, "assign");
      this.Qa = cc11001100_hook("this.Qa", b, "assign");
    }
  }
  ;
  const wg = cc11001100_hook("wg", new tg(["google-auto-placed"], {
    google_reactive_ad_format: cc11001100_hook("google_reactive_ad_format", 40, "object-key-init"),
    google_tag_origin: cc11001100_hook("google_tag_origin", "qs", "object-key-init")
  }), "var-init");
  var xg = cc11001100_hook("xg", {
    overlays: cc11001100_hook("overlays", 1, "object-key-init"),
    interstitials: cc11001100_hook("interstitials", 2, "object-key-init"),
    vignettes: cc11001100_hook("vignettes", 2, "object-key-init"),
    inserts: cc11001100_hook("inserts", 3, "object-key-init"),
    immersives: cc11001100_hook("immersives", 4, "object-key-init"),
    list_view: cc11001100_hook("list_view", 5, "object-key-init"),
    full_page: cc11001100_hook("full_page", 6, "object-key-init"),
    side_rails: cc11001100_hook("side_rails", 7, "object-key-init")
  }, "var-init");
  function yg(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = cc11001100_hook("a.google_reactive_ads_global_state.sideRailProcessedFixedElements", new Set(), "assign")), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = cc11001100_hook("a.google_reactive_ads_global_state.sideRailAvailableSpace", new Map(), "assign"))) : a.google_reactive_ads_global_state = cc11001100_hook("a.google_reactive_ads_global_state", new zg(), "assign");
    return a.google_reactive_ads_global_state;
  }
  class zg {
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
      this.floatingAdsStacking = cc11001100_hook("this.floatingAdsStacking", new Ag(), "assign");
      this.sideRailProcessedFixedElements = cc11001100_hook("this.sideRailProcessedFixedElements", new Set(), "assign");
      this.sideRailAvailableSpace = cc11001100_hook("this.sideRailAvailableSpace", new Map(), "assign");
    }
  }
  var Ag = cc11001100_hook("Ag", class {
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
  var Bg = cc11001100_hook("Bg", a => {
      a = cc11001100_hook("a", a.getBoundingClientRect(), "assign");
      return 0 < a.width && 0 < a.height;
    }, "var-init"),
    Cg = cc11001100_hook("Cg", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      a.forEach(c => b = cc11001100_hook("b", Math.max(b, c.getBoundingClientRect().width), "assign"));
      return c => c.getBoundingClientRect().width > .5 * b;
    }, "var-init"),
    Dg = cc11001100_hook("Dg", a => {
      const b = cc11001100_hook("b", P(a).clientHeight || 0, "var-init");
      return c => c.getBoundingClientRect().height >= .75 * b;
    }, "var-init"),
    Eg = cc11001100_hook("Eg", (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top, "var-init");
  var Fg = cc11001100_hook("Fg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Gg = cc11001100_hook("Gg", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var Ig = cc11001100_hook("Ig", class extends I {
      constructor() {
        super(void 0, -1, Hg);
      }
    }, "var-init"),
    Hg = cc11001100_hook("Hg", [1], "var-init");
  var Jg = cc11001100_hook("Jg", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return G(this, 2);
    }
  }, "var-init");
  var Kg = cc11001100_hook("Kg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Lg = cc11001100_hook("Lg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ng = cc11001100_hook("Ng", class extends I {
      constructor(a) {
        super(a, -1, Mg);
      }
      i() {
        return C(this, Lg, 1);
      }
    }, "var-init"),
    Mg = cc11001100_hook("Mg", [1], "var-init");
  var Q = cc11001100_hook("Q", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Og = cc11001100_hook("Og", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Qg = cc11001100_hook("Qg", class extends I {
      constructor(a) {
        super(a, -1, Pg);
      }
    }, "var-init"),
    Pg = cc11001100_hook("Pg", [6, 7, 9, 10, 11], "var-init");
  function Rg(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    ag(a.getElementsByTagName("p"), function (c) {
      100 <= Sg(c) && b.push(c);
    });
    return b;
  }
  function Sg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = cc11001100_hook("b", 0, "var-init");
    ag(a.childNodes, function (c) {
      b += cc11001100_hook("b", Sg(c), "assign");
    });
    return b;
  }
  function Tg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Ug(a, b) {
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
  const Vg = cc11001100_hook("Vg", class {
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
      a = cc11001100_hook("a", Ug(this, a), "assign");
      "number" === typeof this.i && (b = cc11001100_hook("b", this.i, "assign"), 0 > b && (b += cc11001100_hook("b", a.length, "assign")), a = cc11001100_hook("a", 0 <= b && b < a.length ? [a[b]] : [], "assign"));
      if ("number" === typeof this.j) {
        b = cc11001100_hook("b", [], "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
          var d = cc11001100_hook("d", Rg(a[c]), "var-init"),
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
  function Wg(a) {
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
  var S = cc11001100_hook("S", class {
      constructor(a, b = !1) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }, "var-init"),
    Xg = cc11001100_hook("Xg", class {
      constructor(a, b = 0) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }, "var-init");
  var Yg = cc11001100_hook("Yg", new S(1082, !0), "var-init"),
    Zg = cc11001100_hook("Zg", new Xg(1130, 100), "var-init"),
    $g = cc11001100_hook("$g", new class {
      constructor(a, b = "") {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(14), "var-init"),
    ah = cc11001100_hook("ah", new S(316), "var-init"),
    bh = cc11001100_hook("bh", new S(1207, !0), "var-init"),
    ch = cc11001100_hook("ch", new S(313), "var-init"),
    dh = cc11001100_hook("dh", new S(369), "var-init"),
    eh = cc11001100_hook("eh", new S(1230), "var-init"),
    fh = cc11001100_hook("fh", new S(1229), "var-init"),
    gh = cc11001100_hook("gh", new S(1231), "var-init"),
    hh = cc11001100_hook("hh", new S(1171, !0), "var-init"),
    ih = cc11001100_hook("ih", new S(1201, !0), "var-init"),
    jh = cc11001100_hook("jh", new S(217), "var-init"),
    kh = cc11001100_hook("kh", new S(1228), "var-init"),
    lh = cc11001100_hook("lh", new S(1216), "var-init"),
    mh = cc11001100_hook("mh", new S(1215), "var-init"),
    nh = cc11001100_hook("nh", new S(506914611), "var-init"),
    oh = cc11001100_hook("oh", new S(1120), "var-init"),
    ph = cc11001100_hook("ph", new S(1086, !0), "var-init"),
    qh = cc11001100_hook("qh", new Xg(1079, 5), "var-init"),
    rh = cc11001100_hook("rh", new class {
      constructor(a, b = []) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]), "var-init"),
    sh = cc11001100_hook("sh", new S(203), "var-init"),
    th = cc11001100_hook("th", new S(84), "var-init"),
    uh = cc11001100_hook("uh", new S(1975), "var-init"),
    vh = cc11001100_hook("vh", new S(1974), "var-init"),
    wh = cc11001100_hook("wh", new S(1162), "var-init"),
    xh = cc11001100_hook("xh", new Xg(501545963, 1), "var-init"),
    yh = cc11001100_hook("yh", new S(501545960), "var-init"),
    zh = cc11001100_hook("zh", new S(501545961), "var-init"),
    Ah = cc11001100_hook("Ah", new S(45388034), "var-init"),
    Bh = cc11001100_hook("Bh", new Xg(501545962, 1), "var-init"),
    Ch = cc11001100_hook("Ch", new Xg(45388309, -1), "var-init"),
    Dh = cc11001100_hook("Dh", new Xg(1114, 1), "var-init"),
    Eh = cc11001100_hook("Eh", new S(491815314), "var-init"),
    Fh = cc11001100_hook("Fh", new S(1121), "var-init"),
    Gh = cc11001100_hook("Gh", new S(501545959, !0), "var-init"),
    Hh = cc11001100_hook("Hh", new S(506619840), "var-init"),
    Ih = cc11001100_hook("Ih", new S(502896280), "var-init");
  var Jh = cc11001100_hook("Jh", class {
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
    return M(Jh).h(a.h, a.defaultValue);
  }
  function Kh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return M(Jh).i(a.h, a.defaultValue);
  }
  function Lh() {
    return M(Jh).j($g.h, $g.defaultValue);
  }
  ;
  function Mh(a, b, c) {
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
    Wg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = cc11001100_hook("b.style.display", "block", "assign"));
  }
  ;
  function Nh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", e => {
        e = cc11001100_hook("e", Oh(e), "assign");
        return null == e ? !1 : 0 < e;
      }, "var-init"),
      d = cc11001100_hook("d", e => {
        e = cc11001100_hook("e", Oh(e), "assign");
        return null == e ? !1 : 0 > e;
      }, "var-init");
    switch (b) {
      case 0:
        return {
          init: cc11001100_hook("init", Ph(a.previousSibling, c), "object-key-init"),
          ma: cc11001100_hook("ma", e => Ph(e.previousSibling, c), "object-key-init"),
          pa: cc11001100_hook("pa", 0, "object-key-init")
        };
      case 2:
        return {
          init: cc11001100_hook("init", Ph(a.lastChild, c), "object-key-init"),
          ma: cc11001100_hook("ma", e => Ph(e.previousSibling, c), "object-key-init"),
          pa: cc11001100_hook("pa", 0, "object-key-init")
        };
      case 3:
        return {
          init: cc11001100_hook("init", Ph(a.nextSibling, d), "object-key-init"),
          ma: cc11001100_hook("ma", e => Ph(e.nextSibling, d), "object-key-init"),
          pa: cc11001100_hook("pa", 3, "object-key-init")
        };
      case 1:
        return {
          init: cc11001100_hook("init", Ph(a.firstChild, d), "object-key-init"),
          ma: cc11001100_hook("ma", e => Ph(e.nextSibling, d), "object-key-init"),
          pa: cc11001100_hook("pa", 3, "object-key-init")
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Oh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null;
  }
  function Ph(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && b(a) ? a : null;
  }
  ;
  var Qh = cc11001100_hook("Qh", {
    rectangle: cc11001100_hook("rectangle", 1, "object-key-init"),
    horizontal: cc11001100_hook("horizontal", 2, "object-key-init"),
    vertical: cc11001100_hook("vertical", 4, "object-key-init")
  }, "var-init");
  var Rh = cc11001100_hook("Rh", a => {
    if (a == a.top) return 0;
    for (; a && a != a.top && Jc(a); a = cc11001100_hook("a", a.parent, "assign")) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }, "var-init");
  var Sh = cc11001100_hook("Sh", (a, b) => {
    do {
      const c = cc11001100_hook("c", Nc(a, b), "var-init");
      if (c && "fixed" == c.position) return !1;
    } while (a = cc11001100_hook("a", a.parentElement, "assign"));
    return !0;
  }, "var-init");
  function Th(a, b) {
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
  var Uh = cc11001100_hook("Uh", (a, b) => !((Vc.test(b.google_ad_width) || Uc.test(a.style.width)) && (Vc.test(b.google_ad_height) || Uc.test(a.style.height))), "var-init"),
    Wh = cc11001100_hook("Wh", (a, b) => (a = cc11001100_hook("a", Vh(a, b), "assign")) ? a.y : 0, "var-init"),
    Vh = cc11001100_hook("Vh", (a, b) => {
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
    Xh = cc11001100_hook("Xh", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      for (let c in Qh) -1 != a.indexOf(c) && (b |= cc11001100_hook("b", Qh[c], "assign"));
      return b;
    }, "var-init"),
    Yh = cc11001100_hook("Yh", (a, b, c, d, e) => {
      if (a !== a.top) return Kc(a) ? 3 : 16;
      if (!(488 > P(a).clientWidth)) return 4;
      if (!(a.innerHeight >= a.innerWidth)) return 5;
      const f = cc11001100_hook("f", P(a).clientWidth, "var-init");
      if (!f || (f - c) / f > d) a = cc11001100_hook("a", 6, "assign");else {
        if (c = cc11001100_hook("c", "true" != e.google_full_width_responsive, "assign")) a: {
          c = cc11001100_hook("c", b.parentElement, "assign");
          for (b = cc11001100_hook("b", P(a).clientWidth, "assign"); c; c = cc11001100_hook("c", c.parentElement, "assign")) if ((d = cc11001100_hook("d", Nc(c, a), "assign")) && (e = cc11001100_hook("e", K(d.width), "assign")) && !(e >= b) && "visible" != d.overflow) {
            c = cc11001100_hook("c", !0, "assign");
            break a;
          }
          c = cc11001100_hook("c", !1, "assign");
        }
        a = cc11001100_hook("a", c ? 7 : !0, "assign");
      }
      return a;
    }, "var-init"),
    Zh = cc11001100_hook("Zh", (a, b, c, d) => {
      const e = cc11001100_hook("e", Yh(b, c, a, .3, d), "var-init");
      !0 !== e ? a = cc11001100_hook("a", e, "assign") : "true" == d.google_full_width_responsive || Sh(c, b) ? (b = cc11001100_hook("b", P(b).clientWidth, "assign"), a = cc11001100_hook("a", b - a, "assign"), a = cc11001100_hook("a", b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10, "assign")) : a = cc11001100_hook("a", 9, "assign");
      return a;
    }, "var-init"),
    $h = cc11001100_hook("$h", (a, b, c) => {
      a = cc11001100_hook("a", a.style, "assign");
      "rtl" == b ? a.marginRight = cc11001100_hook("a.marginRight", c, "assign") : a.marginLeft = cc11001100_hook("a.marginLeft", c, "assign");
    }, "var-init");
  const ai = cc11001100_hook("ai", (a, b) => {
      if (3 == b.nodeType) return /\S/.test(b.data);
      if (1 == b.nodeType) {
        if (/^(script|style)$/i.test(b.nodeName)) return !1;
        let c;
        try {
          c = cc11001100_hook("c", Nc(b, a), "assign");
        } catch (d) {}
        return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility));
      }
      return !1;
    }, "var-init"),
    bi = cc11001100_hook("bi", (a, b, c) => {
      a = cc11001100_hook("a", Vh(b, a), "assign");
      return "rtl" == c ? -a.x : a.x;
    }, "var-init");
  var ci = cc11001100_hook("ci", (a, b) => {
    var c;
    c = cc11001100_hook("c", (c = cc11001100_hook("c", b.parentElement, "assign")) ? (c = cc11001100_hook("c", Nc(c, a), "assign")) ? c.direction : "" : "", "assign");
    if (c) {
      b.style.border = cc11001100_hook("b.style.border", b.style.borderStyle = cc11001100_hook("b.style.borderStyle", b.style.outline = cc11001100_hook("b.style.outline", b.style.outlineStyle = cc11001100_hook("b.style.outlineStyle", b.style.transition = cc11001100_hook("b.style.transition", "none", "assign"), "assign"), "assign"), "assign"), "assign");
      b.style.borderSpacing = cc11001100_hook("b.style.borderSpacing", b.style.padding = cc11001100_hook("b.style.padding", "0", "assign"), "assign");
      $h(b, c, "0px");
      b.style.width = cc11001100_hook("b.style.width", P(a).clientWidth + "px", "assign");
      if (0 !== bi(a, b, c)) {
        $h(b, c, "0px");
        var d = cc11001100_hook("d", bi(a, b, c), "var-init");
        $h(b, c, -1 * d + "px");
        a = cc11001100_hook("a", bi(a, b, c), "assign");
        0 !== a && a !== d && $h(b, c, d / (a - d) * d + "px");
      }
      b.style.zIndex = cc11001100_hook("b.style.zIndex", 30, "assign");
    }
  }, "var-init");
  var di = cc11001100_hook("di", class {
    constructor(a, b) {
      this.M = cc11001100_hook("this.M", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
    height() {
      return this.j;
    }
    h(a) {
      return 300 < a && 300 < this.j ? this.M : Math.min(1200, Math.round(a));
    }
    i() {}
  }, "var-init");
  var ei = cc11001100_hook("ei", (a, b, c, d = e => e) => {
      let e;
      return a.style && a.style[c] && d(a.style[c]) || (e = cc11001100_hook("e", Nc(a, b), "assign")) && e[c] && d(e[c]) || null;
    }, "var-init"),
    fi = cc11001100_hook("fi", a => b => b.M <= a, "var-init"),
    ii = cc11001100_hook("ii", (a, b, c, d) => {
      const e = cc11001100_hook("e", a && gi(c, b), "var-init"),
        f = cc11001100_hook("f", hi(b, d), "var-init");
      return g => !(e && g.height() >= f);
    }, "var-init"),
    ji = cc11001100_hook("ji", a => b => b.height() <= a, "var-init"),
    gi = cc11001100_hook("gi", (a, b) => Wh(a, b) < P(b).clientHeight - 100, "var-init"),
    ki = cc11001100_hook("ki", (a, b) => {
      var c = cc11001100_hook("c", ei(b, a, "height", K), "var-init");
      if (c) return c;
      var d = cc11001100_hook("d", b.style.height, "var-init");
      b.style.height = cc11001100_hook("b.style.height", "inherit", "assign");
      c = cc11001100_hook("c", ei(b, a, "height", K), "assign");
      b.style.height = cc11001100_hook("b.style.height", d, "assign");
      if (c) return c;
      c = cc11001100_hook("c", Infinity, "assign");
      do (d = cc11001100_hook("d", b.style && K(b.style.height), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")), (d = cc11001100_hook("d", ei(b, a, "maxHeight", K), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")); while ((b = cc11001100_hook("b", b.parentElement, "assign")) && "HTML" != b.tagName);
      return c;
    }, "var-init");
  const hi = cc11001100_hook("hi", (a, b) => {
    const c = cc11001100_hook("c", 0 == rd(a), "var-init");
    return b && c ? Math.max(250, 2 * P(a).clientHeight / 3) : 250;
  }, "var-init");
  var li = cc11001100_hook("li", {
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
  const mi = cc11001100_hook("mi", RegExp("(^| )adsbygoogle($| )"), "var-init");
  function ni(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) {
      const d = cc11001100_hook("d", b[c], "var-init"),
        e = cc11001100_hook("e", Bc(d.Xb), "var-init");
      a[e] = cc11001100_hook("a[e]", d.value, "assign");
    }
  }
  ;
  class oi {
    constructor() {
      var a = cc11001100_hook("a", od`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`, "var-init");
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
      vd(b) || (b = cc11001100_hook("b", new ud(b, {
        context: cc11001100_hook("context", a, "object-key-init"),
        id: cc11001100_hook("id", e, "object-key-init")
      }), "assign"));
      if (d || this.h) b.meta = cc11001100_hook("b.meta", {}, "assign"), this.h && this.h(b.meta), d && d(b.meta);
      n.google_js_errors = cc11001100_hook("n.google_js_errors", n.google_js_errors || [], "assign");
      n.google_js_errors.push(b);
      n.error_rep_loaded || (Lc(n.document, this.A), n.error_rep_loaded = cc11001100_hook("n.error_rep_loaded", !0, "assign"));
      return !1;
    }
    ia(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.i(a, d, .01, c, "jserror")) throw d;
      }
    }
    qa(a, b) {
      return (...c) => this.ia(a, () => b.apply(void 0, c));
    }
    ca(a, b) {
      b.catch(c => {
        c = cc11001100_hook("c", c ? c : "unknown rejection", "assign");
        this.I(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0);
      });
    }
  }
  ;
  const pi = cc11001100_hook("pi", (a, b) => {
    b = cc11001100_hook("b", b.google_js_reporting_queue = cc11001100_hook("b.google_js_reporting_queue", b.google_js_reporting_queue || [], "assign"), "assign");
    2048 > b.length && b.push(a);
  }, "var-init");
  var qi = cc11001100_hook("qi", (a, b, c, d, e = !1) => {
      const f = cc11001100_hook("f", d || window, "var-init"),
        g = cc11001100_hook("g", "undefined" !== typeof queueMicrotask, "var-init");
      return function () {
        e && g && queueMicrotask(() => {
          f.google_rum_task_id_counter = cc11001100_hook("f.google_rum_task_id_counter", f.google_rum_task_id_counter || 1, "assign");
          f.google_rum_task_id_counter += cc11001100_hook("f.google_rum_task_id_counter", 1, "assign");
        });
        const h = cc11001100_hook("h", Ld(), "var-init");
        let k,
          l = cc11001100_hook("l", 3, "var-init");
        try {
          k = cc11001100_hook("k", b.apply(this, arguments), "assign");
        } catch (m) {
          l = cc11001100_hook("l", 13, "assign");
          if (!c) throw m;
          c(a, m);
        } finally {
          f.google_measure_js_timing && h && pi({
            label: cc11001100_hook("label", a.toString(), "object-key-init"),
            value: cc11001100_hook("value", h, "object-key-init"),
            duration: cc11001100_hook("duration", (Ld() || 0) - h, "object-key-init"),
            type: cc11001100_hook("type", l, "object-key-init"),
            ...(e && g && {
              taskId: cc11001100_hook("taskId", f.google_rum_task_id_counter = cc11001100_hook("f.google_rum_task_id_counter", f.google_rum_task_id_counter || 1, "assign"), "object-key-init")
            })
          }, f);
        }
        return k;
      };
    }, "var-init"),
    ri = cc11001100_hook("ri", (a, b) => qi(a, b, (c, d) => {
      new oi().I(c, d);
    }, void 0, !1), "var-init");
  function si(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return qi(a, b, void 0, c, !0).apply();
  }
  function ti(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) return null;
    var b = cc11001100_hook("b", t(a, 7), "var-init");
    if (t(a, 1) || a.getId() || 0 < xb(a, 4).length) {
      b = cc11001100_hook("b", xb(a, 4), "assign");
      var c = cc11001100_hook("c", t(a, 3), "var-init"),
        d = cc11001100_hook("d", t(a, 1), "var-init"),
        e = cc11001100_hook("e", "", "var-init");
      d && (e += cc11001100_hook("e", d, "assign"));
      c && (e += cc11001100_hook("e", "#" + Tg(c), "assign"));
      if (b) for (c = cc11001100_hook("c", 0, "assign"); c < b.length; c++) e += cc11001100_hook("e", "." + Tg(b[c]), "assign");
      a = cc11001100_hook("a", (b = cc11001100_hook("b", e, "assign")) ? new Vg(b, t(a, 2), t(a, 5), ui(t(a, 6))) : null, "assign");
    } else a = cc11001100_hook("a", b ? new Vg(b, t(a, 2), t(a, 5), ui(t(a, 6))) : null, "assign");
    return a;
  }
  var vi = cc11001100_hook("vi", {
    1: cc11001100_hook(1, 1, "object-key-init"),
    2: cc11001100_hook(2, 2, "object-key-init"),
    3: cc11001100_hook(3, 3, "object-key-init"),
    0: cc11001100_hook(0, 0, "object-key-init")
  }, "var-init");
  function ui(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? a : vi[a];
  }
  var wi = cc11001100_hook("wi", {
    1: cc11001100_hook(1, 0, "object-key-init"),
    2: cc11001100_hook(2, 1, "object-key-init"),
    3: cc11001100_hook(3, 2, "object-key-init"),
    4: cc11001100_hook(4, 3, "object-key-init")
  }, "var-init");
  function xi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.google_ama_state = cc11001100_hook("a.google_ama_state", a.google_ama_state || {}, "assign");
  }
  function yi(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", xi(a), "assign");
    return a.optimization = cc11001100_hook("a.optimization", a.optimization || {}, "assign");
  }
  ;
  var zi = cc11001100_hook("zi", $b(class extends I {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  var Ai = cc11001100_hook("Ai", a => {
    switch (t(a, 8)) {
      case 1:
      case 2:
        if (null == a) var b = cc11001100_hook("b", null, "var-init");else b = cc11001100_hook("b", B(a, O, 1), "assign"), null == b ? b = cc11001100_hook("b", null, "assign") : (a = cc11001100_hook("a", t(a, 2), "assign"), b = cc11001100_hook("b", null == a ? null : new ng({
          Wa: cc11001100_hook("Wa", [b], "object-key-init"),
          qb: cc11001100_hook("qb", a, "object-key-init")
        }), "assign"));
        return null != b ? dg(b) : fg(Error("Missing dimension when creating placement id"));
      case 3:
        return fg(Error("Missing dimension when creating placement id"));
      default:
        return fg(Error("Invalid type: " + t(a, 8)));
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
  }, "var-init");
  var Di = cc11001100_hook("Di", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return wb(this, 23);
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
  }, "var-init");
  var Ji = cc11001100_hook("Ji", class extends I {
      constructor(a) {
        super(a);
      }
      getName() {
        return t(this, 4);
      }
    }, "var-init"),
    Ki = cc11001100_hook("Ki", [1, 2, 3], "var-init");
  var Mi = cc11001100_hook("Mi", class extends I {
      constructor(a) {
        super(a, -1, Li);
      }
    }, "var-init"),
    Li = cc11001100_hook("Li", [2, 5, 6, 11], "var-init");
  var Ni = cc11001100_hook("Ni", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Pi = cc11001100_hook("Pi", class extends I {
      constructor(a) {
        super(a);
      }
      i() {
        return Jb(this, Ni, 2, Oi);
      }
    }, "var-init"),
    Oi = cc11001100_hook("Oi", [1, 2], "var-init");
  var Ri = cc11001100_hook("Ri", class extends I {
      constructor(a) {
        super(a, -1, Qi);
      }
      i() {
        return B(this, Pi, 3);
      }
    }, "var-init"),
    Qi = cc11001100_hook("Qi", [1, 4], "var-init");
  var Ui = cc11001100_hook("Ui", class extends I {
      constructor(a) {
        super(a, -1, Ti);
      }
    }, "var-init"),
    Vi = cc11001100_hook("Vi", $b(Ui), "var-init"),
    Ti = cc11001100_hook("Ti", [1, 2, 5, 7], "var-init");
  var Wi = cc11001100_hook("Wi", (a, b) => {
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
  function Xi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new lg(), "var-init"),
      d = cc11001100_hook("d", new kg(), "var-init");
    b.forEach(e => {
      if (Jb(e, Hi, 1, Ki)) {
        e = cc11001100_hook("e", Jb(e, Hi, 1, Ki), "assign");
        if (B(e, Q, 1) && B(B(e, Q, 1), O, 1) && B(e, Q, 2) && B(B(e, Q, 2), O, 1)) {
          const g = cc11001100_hook("g", Yi(a, B(B(e, Q, 1), O, 1)), "var-init"),
            h = cc11001100_hook("h", Yi(a, B(B(e, Q, 2), O, 1)), "var-init");
          if (g && h) for (var f of Wi({
            anchor: cc11001100_hook("anchor", g, "object-key-init"),
            position: cc11001100_hook("position", t(B(e, Q, 1), 2), "object-key-init")
          }, {
            anchor: cc11001100_hook("anchor", h, "object-key-init"),
            position: cc11001100_hook("position", t(B(e, Q, 2), 2), "object-key-init")
          })) c.set(ea(f.anchor), f.position);
        }
        B(e, Q, 3) && B(B(e, Q, 3), O, 1) && (f = cc11001100_hook("f", Yi(a, B(B(e, Q, 3), O, 1)), "assign")) && c.set(ea(f), t(B(e, Q, 3), 2));
      } else Jb(e, Ii, 2, Ki) ? Zi(a, Jb(e, Ii, 2, Ki), c) : Jb(e, Gi, 3, Ki) && $i(a, Jb(e, Gi, 3, Ki), d);
    });
    return new aj(c, d);
  }
  class aj {
    constructor(a, b) {
      this.i = cc11001100_hook("this.i", a, "assign");
      this.h = cc11001100_hook("this.h", b, "assign");
    }
  }
  const Zi = cc11001100_hook("Zi", (a, b, c) => {
      B(b, Q, 2) ? (b = cc11001100_hook("b", B(b, Q, 2), "assign"), (a = cc11001100_hook("a", Yi(a, B(b, O, 1)), "assign")) && c.set(ea(a), t(b, 2))) : B(b, O, 1) && (a = cc11001100_hook("a", bj(a, B(b, O, 1)), "assign")) && a.forEach(d => {
        d = cc11001100_hook("d", ea(d), "assign");
        c.set(d, 1);
        c.set(d, 4);
        c.set(d, 2);
        c.set(d, 3);
      });
    }, "var-init"),
    $i = cc11001100_hook("$i", (a, b, c) => {
      B(b, O, 1) && (a = cc11001100_hook("a", bj(a, B(b, O, 1)), "assign")) && a.forEach(d => {
        c.add(ea(d));
      });
    }, "var-init"),
    Yi = cc11001100_hook("Yi", (a, b) => (a = cc11001100_hook("a", bj(a, b), "assign")) && 0 < a.length ? a[0] : null, "var-init"),
    bj = cc11001100_hook("bj", (a, b) => (b = cc11001100_hook("b", ti(b), "assign")) ? b.query(a) : null, "var-init");
  function cj(a, b, c) {
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
      if (dj(b)) return !0;
      if (a.h.has(b)) break;
      c.push(b);
      b = cc11001100_hook("b", b.parentElement, "assign");
    }
    c.forEach(d => a.h.add(d));
    return !1;
  }
  function ej(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", fj(a), "assign");
    return a.has("all") || a.has("after");
  }
  function gj(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", fj(a), "assign");
    return a.has("all") || a.has("before");
  }
  function fj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a && a.getAttribute("data-no-auto-ads"), "assign")) ? new Set(a.split("|")) : new Set();
  }
  function dj(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", fj(a), "var-init");
    return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"));
  }
  var hj = cc11001100_hook("hj", class {
    constructor() {
      this.h = cc11001100_hook("this.h", new Set(), "assign");
    }
  }, "var-init");
  function ij(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", Nc(a, b), "assign");
    if (!a) return !1;
    a = cc11001100_hook("a", a.cssFloat || a.styleFloat, "assign");
    return "left" == a || "right" == a;
  }
  function jj(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (a = cc11001100_hook("a", a.previousSibling, "assign"); a && 1 != a.nodeType;) a = cc11001100_hook("a", a.previousSibling, "assign");
    return a ? a : null;
  }
  function kj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a.nextSibling || !!a.parentNode && kj(a.parentNode);
  }
  ;
  function lj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", a.hash, "assign");
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = cc11001100_hook("b", mj(b), "assign");
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function mj(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", "", "var-init");
    J(a.split("_"), c => {
      b += cc11001100_hook("b", c.substr(0, 2), "assign");
    });
    return b;
  }
  ;
  function nj(a = window) {
    a = cc11001100_hook("a", a.googletag, "assign");
    return a?.apiReady ? a : void 0;
  }
  ;
  const oj = cc11001100_hook("oj", a => {
    const b = cc11001100_hook("b", nj(a), "var-init");
    return b ? Ma(Na(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null;
  }, "var-init");
  var pj = cc11001100_hook("pj", a => {
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
  function qj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.l) return !0;
    a.l = cc11001100_hook("a.l", !0, "assign");
    const c = cc11001100_hook("c", C(a.i, Qg, 1), "var-init");
    a.j = cc11001100_hook("a.j", 0, "assign");
    const d = cc11001100_hook("d", rj(a.B), "var-init");
    if (lj(a.h.location, "google_audio_sense")) {
      var e = cc11001100_hook("e", new Kg(), "var-init");
      e = cc11001100_hook("e", x(e, 1, 1), "assign");
      var f = cc11001100_hook("f", new Jg(), "var-init");
      f = cc11001100_hook("f", x(f, 2, !0), "assign");
      e = cc11001100_hook("e", Fb(e, 2, f), "assign");
      f = cc11001100_hook("f", new Ig(), "assign");
      var g = cc11001100_hook("g", new Fg(), "var-init");
      var h = cc11001100_hook("h", x(g, 1, 1), "var-init");
      g = cc11001100_hook("g", r(f.u), "assign");
      if (g & 2) throw Error();
      g = cc11001100_hook("g", Eb(f, Fg, 1, !1, g), "assign");
      h = cc11001100_hook("h", null != h ? h : new Fg(), "assign");
      var k = cc11001100_hook("k", ub(f, 1, 2, void 0, !1), "var-init");
      g.push(h);
      k.push(h.u);
      hb(h.u) && fb(k, 8);
      g = cc11001100_hook("g", new Gg(), "assign");
      g = cc11001100_hook("g", x(g, 1, !0), "assign");
      f = cc11001100_hook("f", Fb(f, 2, g), "assign");
      e = cc11001100_hook("e", Fb(e, 3, f), "assign");
    } else e = cc11001100_hook("e", B(a.i, Kg, 27), "assign");
    if (f = cc11001100_hook("f", e, "assign")) if (g = cc11001100_hook("g", B(a.i, Ng, 6)?.i() || [], "assign"), e = cc11001100_hook("e", a.h, "assign"), 1 == H(f, 1) && B(f, Jg, 2)?.i() && 0 != g.length) {
      var l;
      f = cc11001100_hook("f", [], "assign");
      for (l of g) if (g = cc11001100_hook("g", ti(B(l, O, 1) || null), "assign")) g = cc11001100_hook("g", g.query(e.document), "assign"), 0 < g.length && f.push(g[0]);
      f = cc11001100_hook("f", f.filter(Bg).filter(Cg(f)).filter(Dg(e)), "assign");
      f.sort(Eg);
      if (l = cc11001100_hook("l", f[0] || null, "assign")) f = cc11001100_hook("f", e.document.createElement("div"), "assign"), f.id = cc11001100_hook("f.id", "google-auto-placed-read-aloud-player-reserved", "assign"), Zc(f, {
        width: cc11001100_hook("width", "100%", "object-key-init"),
        height: cc11001100_hook("height", "65px", "object-key-init")
      }), l.insertBefore(f, l.firstChild), xi(e).audioSenseSpaceReserved = cc11001100_hook("xi(e).audioSenseSpaceReserved", !0, "assign");
    }
    l = cc11001100_hook("l", a.h, "assign");
    var m;
    try {
      var u = cc11001100_hook("u", (m = cc11001100_hook("m", l.localStorage.getItem("google_ama_settings"), "assign")) ? zi(m) : null, "var-init");
    } catch (w) {
      u = cc11001100_hook("u", null, "assign");
    }
    m = cc11001100_hook("m", null !== u && G(u, 2, !1), "assign");
    u = cc11001100_hook("u", xi(l), "assign");
    m && (u.eatf = cc11001100_hook("u.eatf", !0, "assign"), ld(7, [!0, 0, !1]));
    b: {
      f = cc11001100_hook("f", {
        gb: cc11001100_hook("gb", !1, "object-key-init"),
        hb: cc11001100_hook("hb", !1, "object-key-init")
      }, "assign");
      h = cc11001100_hook("h", q(l.document.querySelectorAll(".google-auto-placed")), "assign");
      k = cc11001100_hook("k", q(l.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")), "assign");
      const w = cc11001100_hook("w", q(l.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")), "var-init");
      g = cc11001100_hook("g", (oj(l) || q(l.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(q(l.document.querySelectorAll("iframe[id^=google_ads_iframe]"))), "assign");
      const y = cc11001100_hook("y", q(l.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")), "var-init"),
        E = cc11001100_hook("E", q(l.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), "var-init"),
        xa = cc11001100_hook("xa", q(l.document.querySelectorAll("div.googlepublisherpluginad")), "var-init"),
        R = cc11001100_hook("R", q(l.document.querySelectorAll("html > ins.adsbygoogle")), "var-init");
      e = cc11001100_hook("e", [].concat(q(l.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), q(l.document.querySelectorAll("body ins.adsbygoogle"))), "assign");
      m = cc11001100_hook("m", [], "assign");
      for (const [ya, na] of [[f.Rb, h], [f.gb, k], [f.Ub, w], [f.Sb, g], [f.Vb, y], [f.Qb, E], [f.Tb, xa], [f.hb, R]]) f = cc11001100_hook("f", na, "assign"), !1 === ya ? m = cc11001100_hook("m", m.concat(f), "assign") : e = cc11001100_hook("e", e.concat(f), "assign");
      e = cc11001100_hook("e", pj(e), "assign");
      m = cc11001100_hook("m", pj(m), "assign");
      e = cc11001100_hook("e", e.slice(0), "assign");
      for (v of m) for (m = cc11001100_hook("m", 0, "assign"); m < e.length; m++) (v.contains(e[m]) || e[m].contains(v)) && e.splice(m, 1);
      var v = cc11001100_hook("v", e, "var-init");
      m = cc11001100_hook("m", P(l).clientHeight, "assign");
      for (l = cc11001100_hook("l", 0, "assign"); l < v.length; l++) if (!(v[l].getBoundingClientRect().top > m)) {
        v = cc11001100_hook("v", !0, "assign");
        break b;
      }
      v = cc11001100_hook("v", !1, "assign");
    }
    v = cc11001100_hook("v", v ? u.eatfAbg = cc11001100_hook("u.eatfAbg", !0, "assign") : !1, "assign");
    if (v) return !0;
    v = cc11001100_hook("v", new kg([2]), "assign");
    for (u = cc11001100_hook("u", 0, "assign"); u < c.length; u++) {
      m = cc11001100_hook("m", a, "assign");
      e = cc11001100_hook("e", c[u], "assign");
      l = cc11001100_hook("l", u, "assign");
      f = cc11001100_hook("f", b, "assign");
      g = cc11001100_hook("g", d, "assign");
      h = cc11001100_hook("h", v, "assign");
      if (B(e, rg, 4) && h.contains(t(B(e, rg, 4), 1)) && 1 === t(e, 8) && sj(e, g)) {
        m.j++;
        if (f = cc11001100_hook("f", tj(m, e, f, g), "assign")) g = cc11001100_hook("g", xi(m.h), "assign"), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = cc11001100_hook("g.numAutoAdsPlaced", 0, "assign")), B(e, O, 1) && null != t(B(e, O, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = cc11001100_hook("g.numPostPlacementsPlaced", 1, "assign")), null == g.placed && (g.placed = cc11001100_hook("g.placed", [], "assign")), g.numAutoAdsPlaced++, g.placed.push({
          index: cc11001100_hook("index", l, "object-key-init"),
          element: cc11001100_hook("element", f.ka, "object-key-init")
        }), ld(7, [!1, m.j, !0]);
        m = cc11001100_hook("m", f, "assign");
      } else m = cc11001100_hook("m", null, "assign");
      if (m) return !0;
    }
    ld(7, [!1, a.j, !1]);
    return !1;
  }
  function tj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (!sj(b, d) || 1 != t(b, 8)) return null;
    d = cc11001100_hook("d", B(b, O, 1), "assign");
    if (!d) return null;
    d = cc11001100_hook("d", ti(d), "assign");
    if (!d) return null;
    d = cc11001100_hook("d", d.query(a.h.document), "assign");
    if (0 == d.length) return null;
    d = cc11001100_hook("d", d[0], "assign");
    var e = cc11001100_hook("e", wi[t(b, 2)], "var-init");
    e = cc11001100_hook("e", void 0 === e ? null : e, "assign");
    var f;
    if (!(f = cc11001100_hook("f", null == e, "assign"))) {
      a: {
        f = cc11001100_hook("f", a.h, "assign");
        switch (e) {
          case 0:
            f = cc11001100_hook("f", ij(jj(d), f), "assign");
            break a;
          case 3:
            f = cc11001100_hook("f", ij(d, f), "assign");
            break a;
          case 2:
            var g = cc11001100_hook("g", d.lastChild, "var-init");
            f = cc11001100_hook("f", ij(g ? 1 == g.nodeType ? g : jj(g) : null, f), "assign");
            break a;
        }
        f = cc11001100_hook("f", !1, "assign");
      }
      if (c = cc11001100_hook("c", !f && !(!c && 2 == e && !kj(d)), "assign")) c = cc11001100_hook("c", 1 == e || 2 == e ? d : d.parentNode, "assign"), c = cc11001100_hook("c", !(c && !Wg(c) && 0 >= c.offsetWidth), "assign");
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
          g = cc11001100_hook("g", ej(d.previousElementSibling) || gj(d), "assign");
          break a;
        case 4:
          g = cc11001100_hook("g", ej(d) || gj(d.nextElementSibling), "assign");
          break a;
        case 2:
          g = cc11001100_hook("g", gj(d.firstElementChild), "assign");
          break a;
        case 3:
          g = cc11001100_hook("g", ej(d.lastElementChild), "assign");
          break a;
        default:
          throw Error("Unknown RelativePosition: " + f);
      }
      c = cc11001100_hook("c", g || cj(c, d, f), "assign");
    }
    if (c) return null;
    f = cc11001100_hook("f", B(b, Og, 3), "assign");
    c = cc11001100_hook("c", {}, "assign");
    f && (c.Ta = cc11001100_hook("c.Ta", t(f, 1), "assign"), c.Ka = cc11001100_hook("c.Ka", t(f, 2), "assign"), c.Za = cc11001100_hook("c.Za", !!wb(f, 3), "assign"));
    f = cc11001100_hook("f", B(b, rg, 4) && t(B(b, rg, 4), 2) ? t(B(b, rg, 4), 2) : null, "assign");
    f = cc11001100_hook("f", ug(f), "assign");
    g = cc11001100_hook("g", null != t(b, 12) ? t(b, 12) : null, "assign");
    g = cc11001100_hook("g", null == g ? null : new tg(null, {
      google_ml_rank: cc11001100_hook("google_ml_rank", g, "object-key-init")
    }), "assign");
    b = cc11001100_hook("b", uj(a, b), "assign");
    b = cc11001100_hook("b", sg(a.m, f, g, b), "assign");
    f = cc11001100_hook("f", a.h, "assign");
    a = cc11001100_hook("a", a.C, "assign");
    var h = cc11001100_hook("h", f.document, "var-init"),
      k = cc11001100_hook("k", c.Za || !1, "var-init");
    g = cc11001100_hook("g", new Dc(h).createElement("DIV"), "assign");
    const l = cc11001100_hook("l", g.style, "var-init");
    l.width = cc11001100_hook("l.width", "100%", "assign");
    l.height = cc11001100_hook("l.height", "auto", "assign");
    l.clear = cc11001100_hook("l.clear", k ? "both" : "none", "assign");
    k = cc11001100_hook("k", g.style, "assign");
    k.textAlign = cc11001100_hook("k.textAlign", "center", "assign");
    c.ob && ni(k, c.ob);
    h = cc11001100_hook("h", new Dc(h).createElement("INS"), "assign");
    k = cc11001100_hook("k", h.style, "assign");
    k.display = cc11001100_hook("k.display", "block", "assign");
    k.margin = cc11001100_hook("k.margin", "auto", "assign");
    k.backgroundColor = cc11001100_hook("k.backgroundColor", "transparent", "assign");
    c.Ta && (k.marginTop = cc11001100_hook("k.marginTop", c.Ta, "assign"));
    c.Ka && (k.marginBottom = cc11001100_hook("k.marginBottom", c.Ka, "assign"));
    c.Va && ni(k, c.Va);
    g.appendChild(h);
    c = cc11001100_hook("c", {
      ta: cc11001100_hook("ta", g, "object-key-init"),
      ka: cc11001100_hook("ka", h, "object-key-init")
    }, "assign");
    c.ka.setAttribute("data-ad-format", "auto");
    g = cc11001100_hook("g", [], "assign");
    if (h = cc11001100_hook("h", b && b.La, "assign")) c.ta.className = cc11001100_hook("c.ta.className", h.join(" "), "assign");
    h = cc11001100_hook("h", c.ka, "assign");
    h.className = cc11001100_hook("h.className", "adsbygoogle", "assign");
    h.setAttribute("data-ad-client", a);
    g.length && h.setAttribute("data-ad-channel", g.join("+"));
    a: {
      try {
        var m = cc11001100_hook("m", c.ta, "var-init");
        if (T(ch)) {
          {
            const E = cc11001100_hook("E", Nh(d, e), "var-init");
            if (E.init) {
              var u = cc11001100_hook("u", E.init, "var-init");
              for (d = cc11001100_hook("d", u, "assign"); d = cc11001100_hook("d", E.ma(d), "assign");) u = cc11001100_hook("u", d, "assign");
              var v = cc11001100_hook("v", {
                anchor: cc11001100_hook("anchor", u, "object-key-init"),
                position: cc11001100_hook("position", E.pa, "object-key-init")
              }, "var-init");
            } else v = cc11001100_hook("v", {
              anchor: cc11001100_hook("anchor", d, "object-key-init"),
              position: cc11001100_hook("position", e, "object-key-init")
            }, "assign");
          }
          m["google-ama-order-assurance"] = cc11001100_hook("m[\"google-ama-order-assurance\"]", 0, "assign");
          Mh(m, v.anchor, v.position);
        } else Mh(m, d, e);
        b: {
          var w = cc11001100_hook("w", c.ka, "var-init");
          w.dataset.adsbygoogleStatus = cc11001100_hook("w.dataset.adsbygoogleStatus", "reserved", "assign");
          w.className += cc11001100_hook("w.className", " adsbygoogle-noablate", "assign");
          m = cc11001100_hook("m", {
            element: cc11001100_hook("element", w, "object-key-init")
          }, "assign");
          var y = cc11001100_hook("y", b && b.Qa, "var-init");
          if (w.hasAttribute("data-pub-vars")) {
            try {
              y = cc11001100_hook("y", JSON.parse(w.getAttribute("data-pub-vars")), "assign");
            } catch (E) {
              break b;
            }
            w.removeAttribute("data-pub-vars");
          }
          y && (m.params = cc11001100_hook("m.params", y, "assign"));
          (f.adsbygoogle = cc11001100_hook("f.adsbygoogle", f.adsbygoogle || [], "assign")).push(m);
        }
      } catch (E) {
        (w = cc11001100_hook("w", c.ta, "assign")) && w.parentNode && (y = cc11001100_hook("y", w.parentNode, "assign"), y.removeChild(w), Wg(y) && (y.style.display = cc11001100_hook("y.style.display", y.getAttribute("data-init-display") || "none", "assign")));
        w = cc11001100_hook("w", !1, "assign");
        break a;
      }
      w = cc11001100_hook("w", !0, "assign");
    }
    return w ? c : null;
  }
  function uj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return hg(jg(Ai(b).map(vg), c => {
      xi(a.h).exception = cc11001100_hook("xi(a.h).exception", c, "assign");
    }));
  }
  const vj = cc11001100_hook("vj", class {
    constructor(a, b, c, d, e) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.i = cc11001100_hook("this.i", c, "assign");
      this.m = cc11001100_hook("this.m", e || null, "assign");
      this.A = cc11001100_hook("this.A", (this.B = cc11001100_hook("this.B", d, "assign")) ? Xi(a.document, C(d, Ji, 5)) : Xi(a.document, []), "assign");
      this.v = cc11001100_hook("this.v", new hj(), "assign");
      this.j = cc11001100_hook("this.j", 0, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
  }, "var-init");
  function rj(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    a && vb(a, 6, !1).forEach(c => {
      b[c] = cc11001100_hook("b[c]", !0, "assign");
    });
    return b;
  }
  function sj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && void 0 !== Cb(a, rg, 4, !1) && b[t(B(a, rg, 4), 2)] ? !1 : !0;
  }
  ;
  var wj = cc11001100_hook("wj", $b(class extends I {
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
  let xj, V;
  const yj = cc11001100_hook("yj", new Sd(n), "var-init");
  var zj = cc11001100_hook("zj", a => {
    null != a && (n.google_measure_js_timing = cc11001100_hook("n.google_measure_js_timing", a, "assign"));
    n.google_measure_js_timing || Rd(yj);
  }, "var-init");
  (a => {
    xj = cc11001100_hook("xj", a || new Hd(), "assign");
    "number" !== typeof n.google_srt && (n.google_srt = cc11001100_hook("n.google_srt", Math.random(), "assign"));
    Fd(xj, n.google_srt);
    V = cc11001100_hook("V", new Ud(xj, yj), "assign");
    V.l(!0);
    "complete" == n.document.readyState ? zj() : yj.h && kc(n, "load", () => {
      zj();
    });
  })();
  var Aj = cc11001100_hook("Aj", (a, b, c) => V.ia(a, b, c), "var-init"),
    Bj = cc11001100_hook("Bj", (a, b, c) => {
      const d = cc11001100_hook("d", M(Qf).i(), "var-init");
      !b.eid && d.length && (b.eid = cc11001100_hook("b.eid", d.toString(), "assign"));
      Gd(xj, a, b, !0, c);
    }, "var-init"),
    Cj = cc11001100_hook("Cj", (a, b) => {
      V.ca(a, b);
    }, "var-init"),
    Dj = cc11001100_hook("Dj", (a, b, c, d) => {
      let e;
      vd(b) ? e = cc11001100_hook("e", b.msg || Td(b.error), "assign") : e = cc11001100_hook("e", Td(b), "assign");
      return 0 == e.indexOf("TagError") ? (c = cc11001100_hook("c", b instanceof ud ? b.error : b, "assign"), c.pbr || (c.pbr = cc11001100_hook("c.pbr", !0, "assign"), V.I(a, b, .1, d, "puberror")), !1) : V.I(a, b, c, d);
    }, "var-init");
  function Ej(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b = cc11001100_hook("b", a.localStorage.getItem("google_auto_fc_cmp_setting") || null, "var-init");
    } catch (d) {
      b = cc11001100_hook("b", null, "assign");
    }
    const c = cc11001100_hook("c", b, "var-init");
    return c ? gg(() => wj(c)) : dg(null);
  }
  ;
  function Fj() {
    if (Gj) return Gj;
    const a = cc11001100_hook("a", nd() || window, "var-init"),
      b = cc11001100_hook("b", a.google_persistent_state_async, "var-init");
    return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Gj = cc11001100_hook("Gj", b, "assign") : a.google_persistent_state_async = cc11001100_hook("a.google_persistent_state_async", Gj = cc11001100_hook("Gj", new Hj(), "assign"), "assign");
  }
  function Ij(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Jj[a] || "google_ps_" + a;
  }
  function Kj(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", Ij(b), "assign");
    a = cc11001100_hook("a", a.S, "assign");
    const d = cc11001100_hook("d", a[b], "var-init");
    return void 0 === d ? (a[b] = cc11001100_hook("a[b]", c(), "assign"), a[b]) : d;
  }
  function Lj(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Kj(a, b, () => c);
  }
  class Hj {
    constructor() {
      this.S = cc11001100_hook("this.S", {}, "assign");
    }
  }
  var Gj = cc11001100_hook("Gj", null, "var-init");
  const Jj = cc11001100_hook("Jj", {
    [8]: cc11001100_hook(8, "google_prev_ad_formats_by_region", "object-key-init"),
    [9]: cc11001100_hook(9, "google_prev_ad_slotnames_by_region", "object-key-init")
  }, "var-init");
  function Mj(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a || {
      cookie: cc11001100_hook("cookie", "", "object-key-init")
    }, "assign");
  }
  Mj.prototype.set = cc11001100_hook("Mj.prototype.set", function (a, b, c) {
    let d,
      e,
      f,
      g = cc11001100_hook("g", !1, "var-init"),
      h;
    "object" === typeof c && (h = cc11001100_hook("h", c.Yb, "assign"), g = cc11001100_hook("g", c.Zb || !1, "assign"), f = cc11001100_hook("f", c.domain || void 0, "assign"), e = cc11001100_hook("e", c.path || void 0, "assign"), d = cc11001100_hook("d", c.mb, "assign"));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = cc11001100_hook("d", -1, "assign"));
    this.h.cookie = cc11001100_hook("this.h.cookie", a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1E3 * d).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : ""), "assign");
  }, "assign");
  Mj.prototype.get = cc11001100_hook("Mj.prototype.get", function (a, b) {
    const c = cc11001100_hook("c", a + "=", "var-init"),
      d = cc11001100_hook("d", (this.h.cookie || "").split(";"), "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"), f; e < d.length; e++) {
      f = cc11001100_hook("f", qa(d[e]), "assign");
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  }, "assign");
  Mj.prototype.isEmpty = cc11001100_hook("Mj.prototype.isEmpty", function () {
    return !this.h.cookie;
  }, "assign");
  Mj.prototype.clear = cc11001100_hook("Mj.prototype.clear", function () {
    var a = cc11001100_hook("a", (this.h.cookie || "").split(";"), "var-init");
    const b = cc11001100_hook("b", [], "var-init");
    var c = cc11001100_hook("c", [], "var-init");
    let d, e;
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) e = cc11001100_hook("e", qa(a[f]), "assign"), d = cc11001100_hook("d", e.indexOf("="), "assign"), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (c = cc11001100_hook("c", b.length - 1, "assign"); 0 <= c; c--) a = cc11001100_hook("a", b[c], "assign"), this.get(a), this.set(a, "", {
      mb: cc11001100_hook("mb", 0, "object-key-init"),
      path: cc11001100_hook("path", void 0, "object-key-init"),
      domain: cc11001100_hook("domain", void 0, "object-key-init")
    });
  }, "assign");
  function Nj(a, b = window) {
    cc11001100_hook("a", a, "function-parameter");
    if (wb(a, 5)) try {
      return b.localStorage;
    } catch {}
    return null;
  }
  ;
  function Oj(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new Pj(), "var-init");
    return x(b, 5, a);
  }
  var Pj = cc11001100_hook("Pj", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  const Qj = cc11001100_hook("Qj", a => {
    void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = cc11001100_hook("a.addtlConsent", void 0, "assign"));
    void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = cc11001100_hook("a.gdprApplies", void 0, "assign"));
    return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
  }, "var-init");
  function Rj(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = cc11001100_hook("a.internalErrorState", Qj(a), "assign"));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (id({
      e: cc11001100_hook("e", String(a.internalErrorState), "object-key-init")
    }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
  }
  function Sj(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.i) return a.i;
    a.i = cc11001100_hook("a.i", Xc(a.l, "__tcfapiLocator"), "assign");
    return a.i;
  }
  function Tj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "function" === typeof a.l.__tcfapi || null != Sj(a);
  }
  function Uj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    c || (c = cc11001100_hook("c", () => {}, "assign"));
    if ("function" === typeof a.l.__tcfapi) a = cc11001100_hook("a", a.l.__tcfapi, "assign"), a(b, 2, c, d);else if (Sj(a)) {
      Vj(a);
      const e = cc11001100_hook("e", ++a.K, "var-init");
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
  function Vj(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m || (a.m = cc11001100_hook("a.m", b => {
      try {
        var c = cc11001100_hook("c", ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn, "var-init");
        a.v[c.callId](c.returnValue, c.success);
      } catch (d) {}
    }, "assign"), kc(a.l, "message", a.m));
  }
  class Wj extends $e {
    constructor(a) {
      var b = cc11001100_hook("b", {}, "var-init");
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.v = cc11001100_hook("this.v", {}, "assign");
      this.K = cc11001100_hook("this.K", 0, "assign");
      this.C = cc11001100_hook("this.C", b.Sa ?? 500, "assign");
      this.B = cc11001100_hook("this.B", b.Pb ?? !1, "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
    }
    h() {
      this.v = cc11001100_hook("this.v", {}, "assign");
      this.m && (lc(this.l, "message", this.m), delete this.m);
      delete this.v;
      delete this.l;
      delete this.i;
      super.h();
    }
    addEventListener(a) {
      let b = cc11001100_hook("b", {
        internalBlockOnErrors: cc11001100_hook("internalBlockOnErrors", this.B, "object-key-init")
      }, "var-init");
      const c = cc11001100_hook("c", jc(() => a(b)), "var-init");
      let d = cc11001100_hook("d", 0, "var-init");
      -1 !== this.C && (d = cc11001100_hook("d", setTimeout(() => {
        b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign");
        b.internalErrorState = cc11001100_hook("b.internalErrorState", 1, "assign");
        c();
      }, this.C), "assign"));
      const e = cc11001100_hook("e", (f, g) => {
        clearTimeout(d);
        f ? (b = cc11001100_hook("b", f, "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", Qj(b), "assign"), b.internalBlockOnErrors = cc11001100_hook("b.internalBlockOnErrors", this.B, "assign"), g && 0 === b.internalErrorState || (b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), g || (b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign")))) : (b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign"));
        a(b);
      }, "var-init");
      try {
        Uj(this, "addEventListener", e);
      } catch (f) {
        b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign"), d && (clearTimeout(d), d = cc11001100_hook("d", 0, "assign")), c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && Uj(this, "removeEventListener", null, a.listenerId);
    }
  }
  ;
  var bk = cc11001100_hook("bk", ({
      s: a,
      X: b,
      Sa: c,
      callback: d,
      na: e = !1,
      oa: f = !1
    }) => {
      b = cc11001100_hook("b", Xj({
        s: cc11001100_hook("s", a, "object-key-init"),
        X: cc11001100_hook("X", b, "object-key-init"),
        na: cc11001100_hook("na", e, "object-key-init"),
        oa: cc11001100_hook("oa", f, "object-key-init")
      }), "assign");
      null != b.h || "tcunav" != b.i.message ? d(b) : Yj(a, c).then(g => g.map(Zj)).then(g => g.map(h => ak(a, h))).then(d);
    }, "var-init"),
    Xj = cc11001100_hook("Xj", ({
      s: a,
      X: b,
      na: c = !1,
      oa: d = !1
    }) => {
      if (!ck({
        s: cc11001100_hook("s", a, "object-key-init"),
        X: cc11001100_hook("X", b, "object-key-init"),
        na: cc11001100_hook("na", c, "object-key-init"),
        oa: cc11001100_hook("oa", d, "object-key-init")
      })) return ak(a, Oj(!0));
      b = cc11001100_hook("b", Fj(), "assign");
      return (b = cc11001100_hook("b", Lj(b, 24), "assign")) ? ak(a, Zj(b)) : fg(Error("tcunav"));
    }, "var-init");
  function ck({
    s: a,
    X: b,
    na: c,
    oa: d
  }) {
    if (!(d = cc11001100_hook("d", !d && Tj(new Wj(a)), "assign"))) {
      if (c = cc11001100_hook("c", !c, "assign")) {
        if (b) {
          a = cc11001100_hook("a", Ej(a), "assign");
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
  function Yj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Promise.race([dk(), ek(a, b)]);
  }
  function dk() {
    return new Promise(a => {
      var b = cc11001100_hook("b", Fj(), "var-init");
      a = cc11001100_hook("a", {
        resolve: cc11001100_hook("resolve", a, "object-key-init")
      }, "assign");
      const c = cc11001100_hook("c", Lj(b, 25, []), "var-init");
      c.push(a);
      b.S[Ij(25)] = cc11001100_hook("b.S[Ij(25)]", c, "assign");
    }).then(fk);
  }
  function ek(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new Promise(c => {
      a.setTimeout(c, b, fg(Error("tcto")));
    });
  }
  function fk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? dg(a) : fg(Error("tcnull"));
  }
  function Zj(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (Rj(a)) {
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
    return Oj(a);
  }
  function ak(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (a = cc11001100_hook("a", Nj(b, a), "assign")) ? dg(a) : fg(Error("unav"));
  }
  ;
  var hk = cc11001100_hook("hk", class extends I {
      constructor(a) {
        super(a, -1, gk);
      }
    }, "var-init"),
    gk = cc11001100_hook("gk", [1, 2, 3], "var-init");
  var ik = cc11001100_hook("ik", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return B(this, hk, 2);
    }
  }, "var-init");
  const jk = cc11001100_hook("jk", class {
    constructor(a) {
      this.exception = cc11001100_hook("this.exception", a, "assign");
    }
  }, "var-init");
  function kk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      var c = cc11001100_hook("c", a.i, "var-init"),
        d = cc11001100_hook("d", c.resolve, "var-init"),
        e = cc11001100_hook("e", a.h, "var-init");
      xi(e.h);
      C(e.i, Qg, 1);
      d.call(c, new jk(b));
    } catch (f) {
      a = cc11001100_hook("a", a.i, "assign"), b = cc11001100_hook("b", f, "assign"), Wf(a), a.h = cc11001100_hook("a.h", 2, "assign"), a.j = cc11001100_hook("a.j", b, "assign"), Yf(a.i);
    }
  }
  var lk = cc11001100_hook("lk", class {
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
            qj(this.h, !0);
            kk(this);
            break;
          default:
            qj(this.h, !1) ? kk(this) : this.j.setTimeout(ka(this.l, this), 100);
        }
      } catch (a) {
        kk(this, a);
      }
    }
  }, "var-init");
  var mk = cc11001100_hook("mk", "a".charCodeAt(), "var-init"),
    nk = cc11001100_hook("nk", oc(Uf), "var-init"),
    ok = cc11001100_hook("ok", oc(Vf), "var-init");
  function W(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
    const c = cc11001100_hook("c", a.i.substring(a.h, a.h + b), "var-init");
    a.h += cc11001100_hook("a.h", b, "assign");
    return parseInt(c, 2);
  }
  function pk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String.fromCharCode(mk + W(a, 6)) + String.fromCharCode(mk + W(a, 6));
  }
  function qk(a) {
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
  function rk(a, b, c) {
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
  function sk(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", W(a, 16), "var-init");
    return !0 === !!W(a, 1) ? (a = cc11001100_hook("a", qk(a), "assign"), a.forEach(c => {
      if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
    }), a) : rk(a, b);
  }
  class tk {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.i = cc11001100_hook("this.i", a, "assign");
      this.h = cc11001100_hook("this.h", 0, "assign");
    }
  }
  ;
  var vk = cc11001100_hook("vk", (a, b) => {
    try {
      var c = cc11001100_hook("c", Xa(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join(""), "var-init");
      const d = cc11001100_hook("d", new tk(c), "var-init");
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
      c.specialFeatureOptins = cc11001100_hook("c.specialFeatureOptins", uk(rk(d, 12, ok), ok), "assign");
      c.purpose = cc11001100_hook("c.purpose", {
        consents: cc11001100_hook("consents", uk(rk(d, 24, nk), nk), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", uk(rk(d, 24, nk), nk), "object-key-init")
      }, "assign");
      c.purposeOneTreatment = cc11001100_hook("c.purposeOneTreatment", !!W(d, 1), "assign");
      c.publisherCC = cc11001100_hook("c.publisherCC", pk(d), "assign");
      c.vendor = cc11001100_hook("c.vendor", {
        consents: cc11001100_hook("consents", uk(sk(d), b), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", uk(sk(d), b), "object-key-init")
      }, "assign");
      return c;
    } catch (d) {
      return null;
    }
  }, "var-init");
  const uk = cc11001100_hook("uk", (a, b) => {
    const c = cc11001100_hook("c", {}, "var-init");
    if (Array.isArray(b) && 0 !== b.length) for (const d of b) c[d] = cc11001100_hook("c[d]", -1 !== a.indexOf(d), "assign");else for (const d of a) c[d] = cc11001100_hook("c[d]", !0, "assign");
    delete c[0];
    return c;
  }, "var-init");
  var wk = cc11001100_hook("wk", class {
    constructor() {
      this.h = cc11001100_hook("this.h", {}, "assign");
    }
  }, "var-init");
  var xk = cc11001100_hook("xk", class extends I {
    constructor() {
      super();
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
    }, "var-init"),
    Ak = cc11001100_hook("Ak", [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27], "var-init");
  var Bk = cc11001100_hook("Bk", class {}, "var-init");
  var Ck = cc11001100_hook("Ck", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Dk = cc11001100_hook("Dk", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Fk = cc11001100_hook("Fk", $b(class extends I {
      constructor(a) {
        super(a, -1, Ek);
      }
    }), "var-init"),
    Ek = cc11001100_hook("Ek", [7], "var-init");
  var Gk = cc11001100_hook("Gk", new class {
    constructor() {
      this.key = cc11001100_hook("this.key", "45369554", "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", !1, "assign");
      this.valueType = cc11001100_hook("this.valueType", "boolean", "assign");
    }
  }(), "var-init");
  var Hk = cc11001100_hook("Hk", class extends wk {
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
    Ik;
  function Jk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Kk(a), "assign")) ? B(a, Dk, 4) : null;
  }
  function Kk(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", new Mj(a).get("FCCDCF", ""), "assign")) {
      if (a.startsWith("%")) try {
        var b = cc11001100_hook("b", decodeURIComponent(a), "var-init");
      } catch (c) {
        Lk(1), b = cc11001100_hook("b", null, "assign");
      } else b = cc11001100_hook("b", a, "assign");
    } else b = cc11001100_hook("b", null, "assign");
    try {
      return b ? Fk(b) : null;
    } catch (c) {
      return Lk(2), null;
    }
  }
  function Lk(a) {
    cc11001100_hook("a", a, "function-parameter");
    new Bk();
    var b = cc11001100_hook("b", new xk(), "var-init");
    a = cc11001100_hook("a", x(b, 7, a), "assign");
    b = cc11001100_hook("b", new yk(), "assign");
    a = cc11001100_hook("a", Fb(b, 1, a), "assign");
    b = cc11001100_hook("b", new zk(), "assign");
    Gb(b, 22, Ak, a);
    Ik || (Ik = cc11001100_hook("Ik", new Hk(), "assign"));
    a = cc11001100_hook("a", Ik.h[Gk.key], "assign");
    if ("proto" === Gk.valueType) try {
      JSON.parse(a);
    } catch (c) {}
  }
  ;
  oc(Uf).map(a => Number(a));
  oc(Vf).map(a => Number(a));
  function Mk(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.__tcfapiPostMessageReady || Nk(new Ok(a));
  }
  function Nk(a) {
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
  var Ok = cc11001100_hook("Ok", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
    }
  }, "var-init");
  var Pk = cc11001100_hook("Pk", (a, b) => {
    const c = cc11001100_hook("c", a.document, "var-init"),
      d = cc11001100_hook("d", () => {
        if (!a.frames[b]) if (c.body) {
          const e = cc11001100_hook("e", Mc("IFRAME", c), "var-init");
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
  function Qk() {
    var a = cc11001100_hook("a", window, "var-init"),
      b = cc11001100_hook("b", T(hh), "var-init");
    a.__uspapi || a.frames.__uspapiLocator || (a = cc11001100_hook("a", new Rk(a), "assign"), Sk(a), b && Tk(a));
  }
  function Sk(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = cc11001100_hook("a.h.__uspapiManager", "fc", "assign"), Pk(a.h, "__uspapiLocator"), ma("__uspapi", (...b) => Uk(a, ...b)));
  }
  function Tk(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = cc11001100_hook("a.h.__tcfapiManager", "fc", "assign"), Pk(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = cc11001100_hook("a.h.__tcfapiEventListeners", a.h.__tcfapiEventListeners || [], "assign"), ma("__tcfapi", (...b) => Vk(a, ...b)), Mk(a.h));
  }
  function Uk(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    "function" === typeof d && "getUSPData" === b && d({
      version: cc11001100_hook("version", 1, "object-key-init"),
      uspString: cc11001100_hook("uspString", a.m, "object-key-init")
    }, !0);
  }
  function Vk(a, b, c, d, e = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if ("function" === typeof d) if (c && 2 !== c) d(null, !1);else switch (c = cc11001100_hook("c", a.h.__tcfapiEventListeners, "assign"), b) {
      case "getTCData":
        !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(Wk(a, e, null), !0) : d(null, !1);
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
        d(Wk(a, null, b - 1), !0);
        break;
      case "removeEventListener":
        c[e] ? (c[e] = cc11001100_hook("c[e]", null, "assign"), d(!0)) : d(!1);
        break;
      case "getInAppTCData":
      case "getVendorList":
        d(null, !1);
    }
  }
  function Wk(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a.j) return null;
    b = cc11001100_hook("b", vk(a.j, b), "assign");
    b.addtlConsent = cc11001100_hook("b.addtlConsent", null != a.l ? a.l : void 0, "assign");
    b.cmpStatus = cc11001100_hook("b.cmpStatus", "loaded", "assign");
    b.eventStatus = cc11001100_hook("b.eventStatus", "tcloaded", "assign");
    null != c && (b.listenerId = cc11001100_hook("b.listenerId", c, "assign"));
    return b;
  }
  class Rk {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", a.document, "assign");
      this.m = cc11001100_hook("this.m", (a = cc11001100_hook("a", (a = cc11001100_hook("a", Kk(this.i), "assign")) ? B(a, Ck, 5) || null : null, "assign")) ? t(a, 2) : null, "assign");
      this.j = cc11001100_hook("this.j", (a = cc11001100_hook("a", Jk(this.i), "assign")) && null != t(a, 1) ? t(a, 1) : null, "assign");
      this.l = cc11001100_hook("this.l", (a = cc11001100_hook("a", Jk(this.i), "assign")) && null != t(a, 2) ? t(a, 2) : null, "assign");
    }
  }
  ;
  const Xk = cc11001100_hook("Xk", a => {
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
    Yk = cc11001100_hook("Yk", a => {
      let b = cc11001100_hook("b", "", "var-init");
      const c = cc11001100_hook("c", /[/%?&=]/, "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; ++d) {
        const e = cc11001100_hook("e", a[d], "var-init");
        b = cc11001100_hook("b", e.match(c) ? b + e : b + encodeURIComponent(e), "assign");
      }
      return b;
    }, "var-init");
  var Zk = cc11001100_hook("Zk", a => {
    a = cc11001100_hook("a", vb(a, 2, !1), "assign");
    if (!a) return !1;
    for (let b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) if (1 == a[b]) return !0;
    return !1;
  }, "var-init");
  const al = cc11001100_hook("al", (a, b) => {
      a = cc11001100_hook("a", Yk(Xk(a.location.pathname)).replace(/(^\/)|(\/$)/g, ""), "assign");
      const c = cc11001100_hook("c", Sc(a), "var-init"),
        d = cc11001100_hook("d", $k(a), "var-init");
      return b.find(e => {
        const f = cc11001100_hook("f", void 0 !== Cb(e, Fi, 7, !1) ? t(B(e, Fi, 7), 1) : t(e, 1), "var-init");
        e = cc11001100_hook("e", void 0 !== Cb(e, Fi, 7, !1) ? t(B(e, Fi, 7), 2) : 2, "assign");
        if ("number" !== typeof f) return !1;
        switch (e) {
          case 1:
            return f == c;
          case 2:
            return d[f] || !1;
        }
        return !1;
      }) || null;
    }, "var-init"),
    $k = cc11001100_hook("$k", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      for (;;) {
        b[Sc(a)] = cc11001100_hook("b[Sc(a)]", !0, "assign");
        if (!a) return b;
        a = cc11001100_hook("a", a.substring(0, a.lastIndexOf("/")), "assign");
      }
    }, "var-init");
  const bl = cc11001100_hook("bl", {
    google_ad_channel: cc11001100_hook("google_ad_channel", !0, "object-key-init"),
    google_ad_host: cc11001100_hook("google_ad_host", !0, "object-key-init")
  }, "var-init");
  var cl = cc11001100_hook("cl", (a, b) => {
      a.location.href && a.location.href.substring && (b.url = cc11001100_hook("b.url", a.location.href.substring(0, 200), "assign"));
      Bj("ama", b, .01);
    }, "var-init"),
    dl = cc11001100_hook("dl", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      J(bl, (c, d) => {
        d in a && (b[d] = cc11001100_hook("b[d]", a[d], "assign"));
      });
      return b;
    }, "var-init");
  var el = cc11001100_hook("el", a => {
    a = cc11001100_hook("a", B(a, Ei, 3), "assign");
    return !a || t(a, 1) <= Date.now() ? !1 : !0;
  }, "var-init");
  function fl(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (T(ah)) var b = cc11001100_hook("b", null, "var-init");else try {
      b = cc11001100_hook("b", a.getItem("google_ama_config"), "assign");
    } catch (d) {
      b = cc11001100_hook("b", null, "assign");
    }
    try {
      var c = cc11001100_hook("c", b ? Vi(b) : null, "var-init");
    } catch (d) {
      c = cc11001100_hook("c", null, "assign");
    }
    return c;
  }
  ;
  var gl = cc11001100_hook("gl", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return B(this, ik, 2);
    }
    l() {
      return G(this, 3);
    }
  }, "var-init");
  var il = cc11001100_hook("il", class extends I {
      constructor(a) {
        super(a, -1, hl);
      }
      i() {
        return xb(this, 1);
      }
      l() {
        return B(this, gl, 2);
      }
    }, "var-init"),
    hl = cc11001100_hook("hl", [1], "var-init");
  var kl = cc11001100_hook("kl", class extends I {
      constructor(a) {
        super(a, -1, jl);
      }
      getId() {
        return D(t(this, 1), 0);
      }
    }, "var-init"),
    jl = cc11001100_hook("jl", [2], "var-init");
  var ml = cc11001100_hook("ml", class extends I {
      constructor(a) {
        super(a, -1, ll);
      }
    }, "var-init"),
    ll = cc11001100_hook("ll", [2], "var-init");
  var ol = cc11001100_hook("ol", class extends I {
      constructor(a) {
        super(a, -1, nl);
      }
    }, "var-init"),
    nl = cc11001100_hook("nl", [2], "var-init");
  var pl = cc11001100_hook("pl", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return D(t(this, 2), 0);
    }
    l() {
      return D(t(this, 4), 0);
    }
    m() {
      return G(this, 3);
    }
  }, "var-init");
  var rl = cc11001100_hook("rl", class extends I {
      constructor(a) {
        super(a, -1, ql);
      }
    }, "var-init"),
    ql = cc11001100_hook("ql", [1, 4, 2, 3], "var-init");
  var ul = cc11001100_hook("ul", class extends I {
      constructor(a) {
        super(a, -1, sl);
      }
      l() {
        return Jb(this, gl, 13, tl);
      }
      A() {
        return void 0 !== Cb(this, gl, Bb(this, tl, 13));
      }
      i() {
        return Jb(this, il, 14, tl);
      }
      m() {
        return void 0 !== Cb(this, il, Bb(this, tl, 14));
      }
    }, "var-init"),
    sl = cc11001100_hook("sl", [19], "var-init"),
    tl = cc11001100_hook("tl", [13, 14], "var-init");
  let vl = cc11001100_hook("vl", void 0, "var-init");
  var yl = cc11001100_hook("yl", (a, b, c = "", d = null) => 1 === b && wl(c, d) ? !0 : xl(a, c, e => Oa(C(e, ac, 2), f => t(f, 1) === b)), "var-init"),
    wl = cc11001100_hook("wl", (a, b) => !b || G(b, 22) && !T(mh) ? !1 : b.A() ? G(b.l(), 1) : b.m() && "" !== a && 1 === b.i().i().length && b.i().i()[0] === a ? G(b.i().l(), 1) : !1, "var-init"),
    zl = cc11001100_hook("zl", (a, b) => {
      b = cc11001100_hook("b", D(t(b, 18), 0), "assign");
      -1 !== b && (a.tmod = cc11001100_hook("a.tmod", b, "assign"));
    }, "var-init"),
    Bl = cc11001100_hook("Bl", a => {
      const b = cc11001100_hook("b", Kc(L) || L, "var-init");
      return Al(b, a) ? !0 : xl(L, "", c => Oa(vb(c, 3, !1), d => d === a));
    }, "var-init");
  function Al(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", (a = cc11001100_hook("a", (a = cc11001100_hook("a", a.location && a.location.hash, "assign")) && a.match(/forced_clientside_labs=([\d,]+)/), "assign")) && a[1], "assign");
    return !!a && Sa(a.split(","), b.toString());
  }
  function xl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Kc(a) || a, "assign");
    const d = cc11001100_hook("d", Cl(a), "var-init");
    b && (b = cc11001100_hook("b", td(String(b)), "assign"));
    return nc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e));
  }
  function Cl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Dl(a), "assign");
    const b = cc11001100_hook("b", {}, "var-init");
    J(a, (c, d) => {
      try {
        const e = cc11001100_hook("e", new dc(c), "var-init");
        b[d] = cc11001100_hook("b[d]", e, "assign");
      } catch (e) {}
    });
    return b;
  }
  var Dl = cc11001100_hook("Dl", a => T(Yg) ? (Zb(vl, Xb), a = cc11001100_hook("a", Xj({
    s: cc11001100_hook("s", a, "object-key-init"),
    X: cc11001100_hook("X", vl, "object-key-init")
  }), "assign"), null != a.h ? El(a.h.value) : {}) : El(a.localStorage), "var-init");
  function El(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.getItem("google_adsense_settings"), "var-init");
      if (!b) return {};
      const c = cc11001100_hook("c", JSON.parse(b), "var-init");
      return c !== Object(c) ? {} : mc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d));
    } catch (b) {
      return {};
    }
  }
  function Fl(a) {
    cc11001100_hook("a", a, "function-parameter");
    T(ih) && Bj("atf_ad_settings_from_ppabg", {
      p_s: cc11001100_hook("p_s", a, "object-key-init")
    }, .01);
  }
  const Gl = cc11001100_hook("Gl", a => !!a && (0 < C(a, Qg, 1).length || T(bh) && 0 < C(a, Lg, 3).length), "var-init");
  var Hl = cc11001100_hook("Hl", () => {
    const a = cc11001100_hook("a", [], "var-init");
    T(fh) && a.push(1);
    T(eh) && a.push(2);
    T(gh) && a.push(7);
    return a;
  }, "var-init");
  function X(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_ad_modifications || (a.google_ad_modifications = cc11001100_hook("a.google_ad_modifications", {}, "assign"));
    return a.google_ad_modifications;
  }
  function Il(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", X(a), "assign");
    const b = cc11001100_hook("b", a.space_collapsing || "none", "var-init");
    return a.remove_ads_by_default ? {
      Ja: cc11001100_hook("Ja", !0, "object-key-init"),
      wb: cc11001100_hook("wb", b, "object-key-init"),
      sa: cc11001100_hook("sa", a.ablation_viewport_offset, "object-key-init")
    } : null;
  }
  function Jl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", X(a), "assign");
    a.had_ads_ablation = cc11001100_hook("a.had_ads_ablation", !0, "assign");
    a.remove_ads_by_default = cc11001100_hook("a.remove_ads_by_default", !0, "assign");
    a.space_collapsing = cc11001100_hook("a.space_collapsing", "slot", "assign");
    a.ablation_viewport_offset = cc11001100_hook("a.ablation_viewport_offset", b, "assign");
  }
  function Kl(a) {
    cc11001100_hook("a", a, "function-parameter");
    X(L).allow_second_reactive_tag = cc11001100_hook("X(L).allow_second_reactive_tag", a, "assign");
  }
  function Ll() {
    const a = cc11001100_hook("a", X(window), "var-init");
    a.afg_slotcar_vars || (a.afg_slotcar_vars = cc11001100_hook("a.afg_slotcar_vars", {}, "assign"));
    return a.afg_slotcar_vars;
  }
  ;
  function Ml(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.document.querySelector('meta[name="google-adsense-platform-account"]')?.getAttribute("content") ?? null;
  }
  ;
  function Nl(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Ol(new Pl(a, b, c, d));
  }
  function Ol(a) {
    cc11001100_hook("a", a, "function-parameter");
    jg(ig(Xj({
      s: cc11001100_hook("s", a.s, "object-key-init"),
      X: cc11001100_hook("X", G(a.i, 6), "object-key-init")
    }), b => {
      Ql(a, b, !0);
    }), () => {
      Rl(a);
    });
  }
  function Ql(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    jg(ig(Sl(b), d => {
      Tl("ok");
      a.h(d, {
        fromLocalStorage: cc11001100_hook("fromLocalStorage", !0, "object-key-init")
      });
    }), () => {
      var d = cc11001100_hook("d", a.s, "var-init");
      try {
        b.removeItem("google_ama_config");
      } catch (e) {
        cl(d, {
          lserr: cc11001100_hook("lserr", 1, "object-key-init")
        });
      }
      c ? Rl(a) : a.h(null, null);
    });
  }
  function Rl(a) {
    cc11001100_hook("a", a, "function-parameter");
    jg(ig(Ul(a), b => {
      a.h(b, {
        fromPABGSettings: cc11001100_hook("fromPABGSettings", !0, "object-key-init")
      });
    }), () => {
      Vl(a);
    });
  }
  function Sl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", (a = cc11001100_hook("a", fl(a), "assign")) ? el(a) ? a : null : null, "assign")) ? dg(a) : fg(Error("invlocst"));
  }
  function Ul(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.s, "var-init");
    if ((X(b)?.head_tag_slot_vars?.google_ad_host ?? Ml(b)) && (!G(a.i, 22) || !T(lh))) return fg(Error("invtag"));
    a: {
      b = cc11001100_hook("b", a.s, "assign");
      var c = cc11001100_hook("c", a.j, "var-init");
      a = cc11001100_hook("a", a.i, "assign");
      if (a?.A()) b = cc11001100_hook("b", a?.l()?.i()?.i(), "assign"), Gl(b) ? Fl(!1) : b = cc11001100_hook("b", null, "assign");else {
        if (a?.m()) {
          const d = cc11001100_hook("d", a?.i()?.i(), "var-init"),
            e = cc11001100_hook("e", a?.i()?.l()?.i()?.i(), "var-init");
          if (d && 1 === d.length && d[0] === c && Gl(e) && F(a, 17) === b.location.host) {
            Fl(!0);
            b = cc11001100_hook("b", e, "assign");
            break a;
          }
        }
        b = cc11001100_hook("b", null, "assign");
      }
    }
    b ? (c = cc11001100_hook("c", new Ui(), "assign"), a = cc11001100_hook("a", C(b, Qg, 1), "assign"), c = cc11001100_hook("c", Hb(c, 1, a), "assign"), a = cc11001100_hook("a", C(b, Mi, 2), "assign"), c = cc11001100_hook("c", Hb(c, 7, a), "assign"), T(bh) && 0 < C(b, Lg, 3).length && (a = cc11001100_hook("a", new Ng(), "assign"), b = cc11001100_hook("b", C(b, Lg, 3), "assign"), b = cc11001100_hook("b", Hb(a, 1, b), "assign"), Fb(c, 6, b)), b = cc11001100_hook("b", dg(c), "assign")) : b = cc11001100_hook("b", fg(Error("invtag")), "assign");
    return b;
  }
  function Vl(a) {
    cc11001100_hook("a", a, "function-parameter");
    bk({
      s: cc11001100_hook("s", a.s, "object-key-init"),
      X: cc11001100_hook("X", G(a.i, 6), "object-key-init"),
      Sa: cc11001100_hook("Sa", 50, "object-key-init"),
      callback: cc11001100_hook("callback", b => {
        Wl(a, b);
      }, "object-key-init")
    });
  }
  function Wl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    jg(ig(b, c => {
      Ql(a, c, !1);
    }), c => {
      Tl(c.message);
      a.h(null, null);
    });
  }
  function Tl(a) {
    cc11001100_hook("a", a, "function-parameter");
    Bj("abg::amalserr", {
      status: cc11001100_hook("status", a, "object-key-init"),
      guarding: cc11001100_hook("guarding", "true", "object-key-init"),
      timeout: cc11001100_hook("timeout", 50, "object-key-init"),
      rate: cc11001100_hook("rate", .01, "object-key-init")
    }, .01);
  }
  class Pl {
    constructor(a, b, c, d) {
      this.s = cc11001100_hook("this.s", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.h = cc11001100_hook("this.h", d, "assign");
    }
  }
  ;
  var Zl = cc11001100_hook("Zl", (a, b, c, d) => {
    try {
      const e = cc11001100_hook("e", al(a, C(c, Mi, 7)), "var-init");
      if (e && Zk(e)) {
        t(e, 4) && (d = cc11001100_hook("d", sg(d, new tg(null, {
          google_package: cc11001100_hook("google_package", t(e, 4), "object-key-init")
        })), "assign"));
        const f = cc11001100_hook("f", new vj(a, b, c, e, d), "var-init");
        si(1E3, () => {
          var g = cc11001100_hook("g", new Zf(), "var-init");
          new lk(a, f, g).start();
          return g.i;
        }, a).then(la(Xl, a), la(Yl, a));
      }
    } catch (e) {
      cl(a, {
        atf: cc11001100_hook("atf", -1, "object-key-init")
      });
    }
  }, "var-init");
  const Xl = cc11001100_hook("Xl", a => {
      cl(a, {
        atf: cc11001100_hook("atf", 1, "object-key-init")
      });
    }, "var-init"),
    Yl = cc11001100_hook("Yl", (a, b) => {
      (a.google_ama_state = cc11001100_hook("a.google_ama_state", a.google_ama_state || {}, "assign")).exception = cc11001100_hook("(a.google_ama_state = a.google_ama_state || {}).exception", b, "assign");
      cl(a, {
        atf: cc11001100_hook("atf", 0, "object-key-init")
      });
    }, "var-init");
  function $l(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (T(oh)) {
      a.easpi = cc11001100_hook("a.easpi", T(oh), "assign");
      T(wh) && (a.easpa = cc11001100_hook("a.easpa", !0, "assign"));
      a.asntp = cc11001100_hook("a.asntp", 0, "assign");
      a.asntpv = cc11001100_hook("a.asntpv", 0, "assign");
      a.asntpl = cc11001100_hook("a.asntpl", 0, "assign");
      a.asntpm = cc11001100_hook("a.asntpm", 0, "assign");
      a.asntpc = cc11001100_hook("a.asntpc", 1E3, "assign");
      a.asna = cc11001100_hook("a.asna", 5, "assign");
      a.asnd = cc11001100_hook("a.asnd", 5, "assign");
      a.asnp = cc11001100_hook("a.asnp", 5, "assign");
      a.asns = cc11001100_hook("a.asns", 5, "assign");
      T(zh) || (a.asmat = cc11001100_hook("a.asmat", Kh(Dh), "assign"));
      a.asptt = cc11001100_hook("a.asptt", -1, "assign");
      a.asro = cc11001100_hook("a.asro", T(Hh) ? T(nh) : T(Fh), "assign");
      T(Eh) && (a.ascet = cc11001100_hook("a.ascet", !0, "assign"));
      T(Ah) && (a.asgr = cc11001100_hook("a.asgr", !0, "assign"));
      T(Gh) || (a.asrc = cc11001100_hook("a.asrc", !1, "assign"));
      T(yh) && (a.asbu = cc11001100_hook("a.asbu", !0, "assign"));
      T(zh) && (a.aseb = cc11001100_hook("a.aseb", !0, "assign"));
      1 > Kh(Bh) && (a.asla = cc11001100_hook("a.asla", Kh(Bh), "assign"));
      1 > Kh(xh) && (a.asaa = cc11001100_hook("a.asaa", Kh(xh), "assign"));
      T(Ih) && (a.asupm = cc11001100_hook("a.asupm", !0, "assign"));
      var b = cc11001100_hook("b", Kh(Ch), "var-init");
      0 < b && (a.asmrc = cc11001100_hook("a.asmrc", b, "assign"));
    }
  }
  ;
  Ua || Fa();
  class am {
    constructor() {
      this.promise = cc11001100_hook("this.promise", new Promise(a => {
        this.resolve = cc11001100_hook("this.resolve", a, "assign");
      }), "assign");
    }
  }
  ;
  function bm() {
    const {
      promise: a,
      resolve: b
    } = cc11001100_hook("", new am(), "var-init");
    return {
      promise: cc11001100_hook("promise", a, "object-key-init"),
      resolve: cc11001100_hook("resolve", b, "object-key-init")
    };
  }
  ;
  function cm(a = () => {}) {
    n.google_llp || (n.google_llp = cc11001100_hook("n.google_llp", {}, "assign"));
    const b = cc11001100_hook("b", n.google_llp, "var-init");
    let c = cc11001100_hook("c", b[7], "var-init");
    if (c) return c;
    c = cc11001100_hook("c", bm(), "assign");
    b[7] = cc11001100_hook("b[7]", c, "assign");
    a();
    return c;
  }
  function dm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return cm(() => {
      Lc(n.document, a);
    }).promise;
  }
  ;
  var em = cc11001100_hook("em", a => {
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
      li[e] && "google_ad_client" !== e && (c[e] = cc11001100_hook("c[e]", d, "assign"));
    });
    c.google_pgb_reactive = cc11001100_hook("c.google_pgb_reactive", 7, "assign");
    $l(c);
    if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = cc11001100_hook("c.google_ad_section", a.google_ad_section || a.google_ad_region, "assign");
    return b;
  }, "var-init");
  function fm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return da(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive;
  }
  ;
  var im = cc11001100_hook("im", (a, b) => {
    X(L).ama_ran_on_page || si(1001, () => gm(new hm(a, b)), n);
  }, "var-init");
  function gm(a) {
    cc11001100_hook("a", a, "function-parameter");
    Nl(a.h, a.j, a.i.google_ad_client || "", (b, c) => {
      var d = cc11001100_hook("d", a.h, "var-init"),
        e = cc11001100_hook("e", a.i, "var-init");
      X(L).ama_ran_on_page || b && jm(d, e, b, c);
    });
  }
  class hm {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", n, "assign");
      this.i = cc11001100_hook("this.i", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
  }
  function jm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    d && (xi(a).configSourceInAbg = cc11001100_hook("xi(a).configSourceInAbg", d, "assign"));
    void 0 !== Cb(c, Ri, 24, !1) && (d = cc11001100_hook("d", yi(a), "assign"), d.availableAbg = cc11001100_hook("d.availableAbg", !0, "assign"), d.ablationFromStorage = cc11001100_hook("d.ablationFromStorage", !!B(c, Ri, 24)?.i()?.i(), "assign"));
    if (fm(b) && (d = cc11001100_hook("d", al(a, C(c, Mi, 7)), "assign"), !d || !wb(d, 8))) return;
    X(L).ama_ran_on_page = cc11001100_hook("X(L).ama_ran_on_page", !0, "assign");
    B(c, Di, 15)?.i() && (X(a).enable_overlap_observer = cc11001100_hook("X(a).enable_overlap_observer", !0, "assign"));
    var e = cc11001100_hook("e", B(c, Ci, 13), "var-init");
    e && 1 === t(e, 1) ? (d = cc11001100_hook("d", 0, "assign"), (e = cc11001100_hook("e", B(e, Bi, 6), "assign")) && t(e, 3) && (d = cc11001100_hook("d", t(e, 3) || 0, "assign")), Jl(a, d)) : B(c, Ri, 24)?.i()?.i() && (yi(a).ablatingThisPageview = cc11001100_hook("yi(a).ablatingThisPageview", !0, "assign"), Jl(a, 1));
    ld(3, [c.toJSON()]);
    const f = cc11001100_hook("f", b.google_ad_client || "", "var-init");
    b = cc11001100_hook("b", dl(da(b.enable_page_level_ads) ? b.enable_page_level_ads : {}), "assign");
    const g = cc11001100_hook("g", sg(wg, new tg(null, b)), "var-init");
    Aj(782, () => {
      Zl(a, f, c, g);
    });
  }
  ;
  var km = cc11001100_hook("km", {
      google_ad_modifications: cc11001100_hook("google_ad_modifications", !0, "object-key-init"),
      google_analytics_domain_name: cc11001100_hook("google_analytics_domain_name", !0, "object-key-init"),
      google_analytics_uacct: cc11001100_hook("google_analytics_uacct", !0, "object-key-init"),
      google_pause_ad_requests: cc11001100_hook("google_pause_ad_requests", !0, "object-key-init"),
      google_user_agent_client_hint: cc11001100_hook("google_user_agent_client_hint", !0, "object-key-init")
    }, "var-init"),
    lm = cc11001100_hook("lm", a => (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) && (a = cc11001100_hook("a", a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/), "assign")) && RegExp("google_ad_client").test(a[1]) ? a[1] : null, "var-init"),
    mm = cc11001100_hook("mm", a => {
      if (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) if (a = cc11001100_hook("a", a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), "assign"), (a = cc11001100_hook("a", a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i), "assign")) && RegExp("google_ad_client").test(a[1])) return a[1];
      return null;
    }, "var-init"),
    nm = cc11001100_hook("nm", a => {
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
  function om(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.google_ad_client) var b = cc11001100_hook("b", String(a.google_ad_client), "var-init");else {
      if (null == (b = cc11001100_hook("b", X(a).head_tag_slot_vars?.google_ad_client ?? a.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"), "assign"))) {
        b: {
          b = cc11001100_hook("b", a.document.getElementsByTagName("script"), "assign");
          a = cc11001100_hook("a", a.navigator && a.navigator.userAgent || "", "assign");
          a = cc11001100_hook("a", RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !sd() ? lm : mm, "assign");
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
          for (c = cc11001100_hook("c", {}, "assign"); d = cc11001100_hook("d", a.exec(b), "assign");) c[d[1]] = cc11001100_hook("c[d[1]]", nm(d[2]), "assign");
          b = cc11001100_hook("b", c, "assign");
          b = cc11001100_hook("b", b.google_ad_client ? b.google_ad_client : "", "assign");
        } else b = cc11001100_hook("b", "", "assign");
      }
      b = cc11001100_hook("b", b ?? "", "assign");
    }
    return b;
  }
  ;
  async function pm(a, b) {
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
  function qm(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.state.pc, "var-init");
    return null !== b && 0 !== b ? b : a.state.pc = cc11001100_hook("a.state.pc", bd(a.s), "assign");
  }
  function rm(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.state.wpc, "var-init");
    return null !== b && "" !== b ? b : a.state.wpc = cc11001100_hook("a.state.wpc", om(a.s), "assign");
  }
  function sm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new Ae(), "var-init");
    var d = cc11001100_hook("d", qm(a), "var-init");
    c = cc11001100_hook("c", A(c, 1, d, 0), "assign");
    d = cc11001100_hook("d", rm(a), "assign");
    c = cc11001100_hook("c", A(c, 2, d, ""), "assign");
    c = cc11001100_hook("c", A(c, 3, a.state.sd, 0), "assign");
    return A(c, 7, Math.round(b || a.s.performance.now()), 0);
  }
  async function tm(a) {
    cc11001100_hook("a", a, "function-parameter");
    await pm(a.s, () => !(!qm(a) || !rm(a)));
  }
  async function um() {
    var a = cc11001100_hook("a", M(vm), "var-init");
    if (a.i && !a.state.le.includes(1)) {
      a.state.le.push(1);
      var b = cc11001100_hook("b", a.s.performance.now(), "var-init");
      await tm(a);
      var c = cc11001100_hook("c", te(ue(new we(), re(qe(new se(), P(a.s).scrollWidth), P(a.s).scrollHeight)), re(qe(new se(), P(a.s).clientWidth), P(a.s).clientHeight)), "var-init"),
        d = cc11001100_hook("d", Rh(a.s), "var-init");
      0 !== d && ve(c, oe(new pe(), d));
      Xe(a.h, ye(sm(a, b), c));
      mf(a.h, a.s, () => {
        var e = cc11001100_hook("e", a.h, "var-init");
        var f = cc11001100_hook("f", sm(a), "var-init");
        var g = cc11001100_hook("g", new xe(), "var-init");
        f = cc11001100_hook("f", Gb(f, 8, ze, g), "assign");
        Xe(e, f);
      });
    }
  }
  async function wm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a.i && c.length && !a.state.lgdp.includes(Number(b))) {
      a.state.lgdp.push(Number(b));
      var d = cc11001100_hook("d", a.s.performance.now(), "var-init");
      await tm(a);
      var e = cc11001100_hook("e", a.h, "var-init");
      a = cc11001100_hook("a", sm(a, d), "assign");
      d = cc11001100_hook("d", new ne(), "assign");
      b = cc11001100_hook("b", A(d, 1, b, 0), "assign");
      c = cc11001100_hook("c", yb(b, 2, c), "assign");
      c = cc11001100_hook("c", Gb(a, 9, ze, c), "assign");
      Xe(e, c);
    }
  }
  var vm = cc11001100_hook("vm", class {
    constructor(a) {
      this.s = cc11001100_hook("this.s", nd() || window, "assign");
      this.h = cc11001100_hook("this.h", a ?? new of(100, 100, !0), "assign");
      this.state = cc11001100_hook("this.state", Kj(Fj(), 33, () => {
        const b = cc11001100_hook("b", Kh(Zg), "var-init");
        return {
          sd: cc11001100_hook("sd", b, "object-key-init"),
          ssp: cc11001100_hook("ssp", 0 < b && Rc() < 1 / b, "object-key-init"),
          pc: cc11001100_hook("pc", null, "object-key-init"),
          wpc: cc11001100_hook("wpc", null, "object-key-init"),
          le: cc11001100_hook("le", [], "object-key-init"),
          lgdp: cc11001100_hook("lgdp", [], "object-key-init")
        };
      }), "assign");
    }
    get i() {
      return this.state.ssp;
    }
  }, "var-init");
  function xm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
  }
  function ym(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", L.document, "var-init");
    if (b.currentScript) return xm(b.currentScript, a);
    for (const c of b.scripts) if (0 === xm(c, a)) return 0;
    return 1;
  }
  ;
  function zm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      [3]: {
        [55]: cc11001100_hook(55, () => 0 === a, "object-key-init"),
        [23]: cc11001100_hook(23, c => yl(L, Number(c)), "object-key-init"),
        [24]: cc11001100_hook(24, c => Bl(Number(c)), "object-key-init"),
        [61]: cc11001100_hook(61, () => G(b, 6), "object-key-init"),
        [63]: cc11001100_hook(63, () => G(b, 6) || ".google.ch" === F(b, 8), "object-key-init")
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
            const g = cc11001100_hook("g", Qc() ? null : Math.floor(1E3 * Rc()), "var-init");
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
        [6]: cc11001100_hook(6, () => F(b, 15), "object-key-init")
      }
    };
  }
  ;
  function Am(a = n) {
    return a.ggeac || (a.ggeac = cc11001100_hook("a.ggeac", {}, "assign"));
  }
  ;
  function Bm() {
    var a = cc11001100_hook("a", M(Jh).l(rh.h, rh.defaultValue), "var-init"),
      b = cc11001100_hook("b", L.document, "var-init");
    if (a.length && b.head) for (const d of a) if ((a = cc11001100_hook("a", d, "assign")) && b.head) {
      var c = cc11001100_hook("c", Mc("META"), "var-init");
      b.head.appendChild(c);
      c.httpEquiv = cc11001100_hook("c.httpEquiv", "origin-trial", "assign");
      c.content = cc11001100_hook("c.content", a, "assign");
    }
  }
  function Cm(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return !!b.featurePolicy?.features().includes(a);
  }
  function Dm(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  ;
  function Em(a, b) {
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
  var Fm = cc11001100_hook("Fm", {
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
      [6]: cc11001100_hook(6, a => Sa(M(Qf).i(), Number(a)), "object-key-init"),
      [27]: cc11001100_hook(27, a => {
        a = cc11001100_hook("a", Em(a, "boolean"), "assign");
        return void 0 !== a ? a : void 0;
      }, "object-key-init"),
      [60]: cc11001100_hook(60, a => {
        try {
          return !!n.document.querySelector(a);
        } catch {}
      }, "object-key-init"),
      [69]: cc11001100_hook(69, a => Cm(a, n.document), "object-key-init"),
      [70]: cc11001100_hook(70, a => Dm(a, n.document), "object-key-init")
    },
    [4]: {
      [3]: cc11001100_hook(3, () => Yc(), "object-key-init"),
      [6]: cc11001100_hook(6, a => {
        a = cc11001100_hook("a", Em(a, "number"), "assign");
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
        a = cc11001100_hook("a", Em(a, "string"), "assign");
        return void 0 !== a ? a : void 0;
      }, "object-key-init")
    }
  }, "var-init");
  const Gm = cc11001100_hook("Gm", [12, 13, 20], "var-init");
  function Hm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", M(tf).G, "var-init");
    if (!ee(B(b, Yd, 3), e)) return null;
    var f = cc11001100_hook("f", C(b, kl, 2), "var-init"),
      g = cc11001100_hook("g", H(b, 6), "var-init");
    if (g) {
      zb(d, 1, Fe, g);
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
        c = cc11001100_hook("c", h(g), "assign"), A(d, 3, c, 0);
      } catch (k) {}
      return (b = cc11001100_hook("b", Im(b, c), "assign")) ? Jm(a, [b], 1) : null;
    }
    if (g = cc11001100_hook("g", H(b, 10), "assign")) {
      zb(d, 2, Fe, g);
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
      void 0 !== c && A(d, 3, c, 0);
      return (b = cc11001100_hook("b", Im(b, c), "assign")) ? Jm(a, [b], 1) : null;
    }
    d = cc11001100_hook("d", e ? Ma(f, k => ee(B(k, Yd, 3), e)) : f, "assign");
    if (!d.length) return null;
    c = cc11001100_hook("c", d.length * D(t(b, 1), 0), "assign");
    return (b = cc11001100_hook("b", H(b, 4), "assign")) ? Km(a, b, c, d) : Jm(a, d, c / 1E3);
  }
  function Lm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.Z[c] || (a.Z[c] = cc11001100_hook("a.Z[c]", [], "assign"));
    a = cc11001100_hook("a", a.Z[c], "assign");
    Sa(a, b) || a.push(b);
  }
  function Mm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", Nm(a.i, b), "var-init");
    var f;
    if (f = cc11001100_hook("f", 9 !== b, "assign")) a.j[b] ? f = cc11001100_hook("f", !0, "assign") : (a.j[b] = cc11001100_hook("a.j[b]", !0, "assign"), f = cc11001100_hook("f", !1, "assign"));
    if (f) return qf(a.J, b, c, d, [], 4), d;
    if (!e.length) return qf(a.J, b, c, d, [], 3), d;
    const g = cc11001100_hook("g", Sa(Gm, b), "var-init"),
      h = cc11001100_hook("h", [], "var-init");
    La(e, k => {
      var l = cc11001100_hook("l", new Ee(), "var-init");
      if (k = cc11001100_hook("k", Hm(a, k, c, l), "assign")) 0 !== Ab(l, Fe) && h.push(l), l = cc11001100_hook("l", k.getId(), "assign"), d.push(l), Lm(a, l, g ? 4 : c), (k = cc11001100_hook("k", C(k, je, 2), "assign")) && (g ? Hf(k, Jf(), a.J, l) : Hf(k, [c], a.J, l));
    });
    qf(a.J, b, c, d, h, 1);
    return d;
  }
  function Om(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.i.push(...Ma(Na(b, c => new ol(c)), c => !Sa(Gm, H(c, 1))));
  }
  function Jm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.h, "var-init"),
      e = cc11001100_hook("e", Pa(b, f => !!d[f.getId()]), "var-init");
    return e ? e : a.la ? null : Oc(b, c);
  }
  function Km(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", null != a.ha[b] ? a.ha[b] : 1E3, "var-init");
    if (0 >= e) return null;
    d = cc11001100_hook("d", Jm(a, d, c / e), "assign");
    a.ha[b] = cc11001100_hook("a.ha[b]", d ? 0 : e - c, "assign");
    return d;
  }
  function Pm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    N(1, c => {
      a.h[c] = cc11001100_hook("a.h[c]", !0, "assign");
    }, b);
    N(2, (c, d) => Mm(a, c, d), b);
    N(3, c => (a.Z[c] || []).concat(a.Z[4]), b);
    N(12, c => void Om(a, c), b);
    N(16, (c, d) => void Lm(a, c, d), b);
  }
  var Qm = cc11001100_hook("Qm", class {
    constructor() {
      this.i = cc11001100_hook("this.i", [], "assign");
      this.J = cc11001100_hook("this.J", null, "assign");
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.la = cc11001100_hook("this.la", !1, "assign");
      this.ha = cc11001100_hook("this.ha", {}, "assign");
      this.Z = cc11001100_hook("this.Z", {}, "assign");
      this.h = cc11001100_hook("this.h", {}, "assign");
    }
    init(a, b, c, {
      la: d = !1,
      Z: e = [],
      ha: f = {}
    } = {}) {
      this.i = cc11001100_hook("this.i", a.slice(), "assign");
      this.J = cc11001100_hook("this.J", c, "assign");
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.la = cc11001100_hook("this.la", d, "assign");
      this.ha = cc11001100_hook("this.ha", f, "assign");
      this.Z = cc11001100_hook("this.Z", {
        [b]: cc11001100_hook("b", [], "object-key-init"),
        [4]: cc11001100_hook(4, [], "object-key-init")
      }, "assign");
      this.h = cc11001100_hook("this.h", {}, "assign");
      (a = cc11001100_hook("a", Jd(), "assign")) && La(a.split(",") || [], g => {
        (g = cc11001100_hook("g", Number(g), "assign")) && (this.h[g] = cc11001100_hook("this.h[g]", !0, "assign"));
      });
      La(e, g => {
        this.h[g] = cc11001100_hook("this.h[g]", !0, "assign");
      });
      return this;
    }
  }, "var-init");
  function Nm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (a = cc11001100_hook("a", Pa(a, c => H(c, 1) === b), "assign")) && C(a, ml, 2) || [];
  }
  function Im(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", C(a, kl, 2), "var-init"),
      d = cc11001100_hook("d", c.length, "var-init"),
      e = cc11001100_hook("e", D(t(a, 8), 0), "var-init");
    a = cc11001100_hook("a", d * D(t(a, 1), 0) - 1, "assign");
    b = cc11001100_hook("b", void 0 !== b ? b : Math.floor(1E3 * Rc()), "assign");
    d = cc11001100_hook("d", (b - e) % d, "assign");
    if (b < e || b - e - d >= a) return null;
    c = cc11001100_hook("c", c[d], "assign");
    e = cc11001100_hook("e", M(tf).G, "assign");
    return !c || e && !ee(B(c, Yd, 3), e) ? null : c;
  }
  ;
  function Rm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.h = cc11001100_hook("a.h", Lf(14, b, () => {}), "assign");
  }
  class Sm {
    constructor() {
      this.h = cc11001100_hook("this.h", () => {}, "assign");
    }
  }
  function Tm(a) {
    cc11001100_hook("a", a, "function-parameter");
    M(Sm).h(a);
  }
  ;
  function Um({
    eb: a,
    G: b,
    bb: c,
    Xa: d = Am(),
    Ya: e = 0,
    J: f = new sf(B(a, pl, 5)?.i() ?? 0, B(a, pl, 5)?.l() ?? 0, B(a, pl, 5)?.m() ?? !1)
  }) {
    d.hasOwnProperty("init-done") ? (Lf(12, d, () => {})(Na(C(a, ol, 2), g => g.toJSON())), Lf(13, d, () => {})(Na(C(a, je, 1), g => g.toJSON()), e), b && Lf(14, d, () => {})(b), Vm(e, d)) : (Pm(M(Qm).init(C(a, ol, 2), e, f, c), d), Mf(d), Nf(d), Of(d), Vm(e, d), Hf(C(a, je, 1), [e], f, void 0, !0), uf = cc11001100_hook("uf", uf || !(!c || !c.ib), "assign"), Tm(Fm), b && Tm(b));
  }
  function Vm(a, b = Am()) {
    cc11001100_hook("a", a, "function-parameter");
    Pf(M(Qf), b, a);
    Wm(b, a);
    Rm(M(Sm), b);
    M(Jh).m();
  }
  function Wm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", M(Jh), "var-init");
    c.h = cc11001100_hook("c.h", (d, e) => Lf(5, a, () => !1)(d, e, b), "assign");
    c.i = cc11001100_hook("c.i", (d, e) => Lf(6, a, () => 0)(d, e, b), "assign");
    c.j = cc11001100_hook("c.j", (d, e) => Lf(7, a, () => "")(d, e, b), "assign");
    c.l = cc11001100_hook("c.l", (d, e) => Lf(8, a, () => [])(d, e, b), "assign");
    c.m = cc11001100_hook("c.m", () => {
      Lf(15, a, () => {})(b);
    }, "assign");
  }
  ;
  function Xm(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", M(Qf).l(a), "var-init");
    a = cc11001100_hook("a", wm(M(vm), a, b), "assign");
    Sf.ca(1085, a);
  }
  var Ym = cc11001100_hook("Ym", (a, b, c) => {
    var d = cc11001100_hook("d", X(a), "var-init");
    if (d.plle) Vm(1, Am(a));else {
      d.plle = cc11001100_hook("d.plle", !0, "assign");
      d = cc11001100_hook("d", B(b, rl, 12), "assign");
      var e = cc11001100_hook("e", G(b, 9), "var-init");
      Um({
        eb: cc11001100_hook("eb", d, "object-key-init"),
        G: cc11001100_hook("G", zm(c, b), "object-key-init"),
        bb: {
          la: cc11001100_hook("la", e && !!a.google_disable_experiments, "object-key-init"),
          ib: cc11001100_hook("ib", e, "object-key-init")
        },
        Xa: cc11001100_hook("Xa", Am(a), "object-key-init"),
        Ya: cc11001100_hook("Ya", 1, "object-key-init")
      });
      if (c = cc11001100_hook("c", F(b, 15), "assign")) c = cc11001100_hook("c", Number(c), "assign"), M(Qf).j(c);
      for (const f of vb(b, 19)) b = cc11001100_hook("b", f, "assign"), M(Qf).h(b);
      Xm(12);
      Xm(10);
      a = cc11001100_hook("a", Kc(a) || a, "assign");
      lj(a.location, "google_mc_lab") && M(Qf).h(44738307);
      lj(a.location, "google_auto_storify_swipeable") && M(Qf).h(44773747);
      lj(a.location, "google_auto_storify_scrollable") && M(Qf).h(44773746);
      lj(a.location, "google_pga_monetization") && M(Qf).h(44779794);
    }
  }, "var-init");
  var Zm = cc11001100_hook("Zm", {
    "120x90": cc11001100_hook("120x90", !0, "object-key-init"),
    "160x90": cc11001100_hook("160x90", !0, "object-key-init"),
    "180x90": cc11001100_hook("180x90", !0, "object-key-init"),
    "200x90": cc11001100_hook("200x90", !0, "object-key-init"),
    "468x15": cc11001100_hook("468x15", !0, "object-key-init"),
    "728x15": cc11001100_hook("728x15", !0, "object-key-init")
  }, "var-init");
  function $m(a, b) {
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
  function an(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => !!(b.ja & a);
  }
  class Y extends di {
    constructor(a, b, c, d = !1) {
      super(a, b);
      this.ja = cc11001100_hook("this.ja", c, "assign");
      this.jb = cc11001100_hook("this.jb", d, "assign");
    }
    ra() {
      return this.ja;
    }
    i(a, b, c) {
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const bn = cc11001100_hook("bn", {
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
    cn = cc11001100_hook("cn", {
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
    dn = cc11001100_hook("dn", {
      pub_control_image_stacked: cc11001100_hook("pub_control_image_stacked", 100, "object-key-init"),
      pub_control_image_sidebyside: cc11001100_hook("pub_control_image_sidebyside", 200, "object-key-init"),
      pub_control_image_card_stacked: cc11001100_hook("pub_control_image_card_stacked", 150, "object-key-init"),
      pub_control_image_card_sidebyside: cc11001100_hook("pub_control_image_card_sidebyside", 250, "object-key-init"),
      pub_control_text: cc11001100_hook("pub_control_text", 100, "object-key-init"),
      pub_control_text_card: cc11001100_hook("pub_control_text_card", 150, "object-key-init")
    }, "var-init");
  function en(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 0, "var-init");
    a.V && b++;
    a.N && b++;
    a.O && b++;
    if (3 > b) return {
      P: cc11001100_hook("P", "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.", "object-key-init")
    };
    b = cc11001100_hook("b", a.V.split(","), "assign");
    const c = cc11001100_hook("c", a.O.split(","), "var-init");
    a = cc11001100_hook("a", a.N.split(","), "assign");
    if (b.length !== c.length || b.length !== a.length) return {
      P: cc11001100_hook("P", 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"', "object-key-init")
    };
    if (2 < b.length) return {
      P: cc11001100_hook("P", "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`, "object-key-init")
    };
    const d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", [], "var-init");
    for (let g = cc11001100_hook("g", 0, "var-init"); g < b.length; g++) {
      var f = cc11001100_hook("f", Number(c[g]), "var-init");
      if (Number.isNaN(f) || 0 === f) return {
        P: cc11001100_hook("P", `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`, "object-key-init")
      };
      d.push(f);
      f = cc11001100_hook("f", Number(a[g]), "assign");
      if (Number.isNaN(f) || 0 === f) return {
        P: cc11001100_hook("P", `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`, "object-key-init")
      };
      e.push(f);
    }
    return {
      O: cc11001100_hook("O", d, "object-key-init"),
      N: cc11001100_hook("N", e, "object-key-init"),
      Pa: cc11001100_hook("Pa", b, "object-key-init")
    };
  }
  function fn(a) {
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
  const gn = cc11001100_hook("gn", Ta("script"), "var-init");
  function hn(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    null != a.ja && (c.google_responsive_formats = cc11001100_hook("c.google_responsive_formats", a.ja, "assign"));
    null != a.T && (c.google_safe_for_responsive_override = cc11001100_hook("c.google_safe_for_responsive_override", a.T, "assign"));
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
    null != a.K && (c.gfwromr = cc11001100_hook("c.gfwromr", a.K, "assign"));
    null != a.l && (c.gfwroh = cc11001100_hook("c.gfwroh", a.l, "assign"));
    null != a.m && (c.gfwrow = cc11001100_hook("c.gfwrow", a.m, "assign"));
    null != a.R && (c.gfwroz = cc11001100_hook("c.gfwroz", a.R, "assign"));
    null != a.v && (c.gml = cc11001100_hook("c.gml", a.v, "assign"));
    null != a.B && (c.gmr = cc11001100_hook("c.gmr", a.B, "assign"));
    null != a.U && (c.gzi = cc11001100_hook("c.gzi", a.U, "assign"));
    b = cc11001100_hook("b", Kc(window) || window, "assign");
    lj(b.location, "google_responsive_dummy_ad") && (Sa([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.h) && 2 !== a.h && (a = cc11001100_hook("a", JSON.stringify({
      googMsgType: cc11001100_hook("googMsgType", "adpnt", "object-key-init"),
      key_value: cc11001100_hook("key_value", [{
        key: cc11001100_hook("key", "qid", "object-key-init"),
        value: cc11001100_hook("value", "DUMMY_AD", "object-key-init")
      }], "object-key-init")
    }), "assign"), c.dash = cc11001100_hook("c.dash", `<${gn}>window.top.postMessage('${a}', '*'); 
          </${gn}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`, "assign"));
  }
  class jn {
    constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, u = null) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.fa = cc11001100_hook("this.fa", b, "assign");
      this.ja = cc11001100_hook("this.ja", c, "assign");
      this.h = cc11001100_hook("this.h", d, "assign");
      this.T = cc11001100_hook("this.T", e, "assign");
      this.i = cc11001100_hook("this.i", f, "assign");
      this.j = cc11001100_hook("this.j", g, "assign");
      this.C = cc11001100_hook("this.C", h, "assign");
      this.K = cc11001100_hook("this.K", k, "assign");
      this.l = cc11001100_hook("this.l", l, "assign");
      this.m = cc11001100_hook("this.m", m, "assign");
      this.R = cc11001100_hook("this.R", u, "assign");
      this.U = cc11001100_hook("this.U", this.B = cc11001100_hook("this.B", this.v = cc11001100_hook("this.v", null, "assign"), "assign"), "assign");
    }
    size() {
      return this.fa;
    }
  }
  ;
  const kn = cc11001100_hook("kn", ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"], "var-init");
  var ln = cc11001100_hook("ln", class extends di {
      h(a) {
        return Math.min(1200, Math.max(this.M, Math.round(a)));
      }
    }, "var-init"),
    on = cc11001100_hook("on", (a, b) => {
      mn(a, b);
      if ("pedestal" == b.google_content_recommendation_ui_type) return new jn(9, new ln(a, Math.floor(a * b.google_phwr)));
      var c = cc11001100_hook("c", Ec(), "var-init");
      468 > a ? c ? (c = cc11001100_hook("c", a - 8 - 8, "assign"), c = cc11001100_hook("c", Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * bn.mobile_banner_image_sidebyside + cn.mobile_banner_image_sidebyside) + 96), "assign"), a = cc11001100_hook("a", {
        ea: cc11001100_hook("ea", a, "object-key-init"),
        da: cc11001100_hook("da", c, "object-key-init"),
        N: cc11001100_hook("N", 1, "object-key-init"),
        O: cc11001100_hook("O", 12, "object-key-init"),
        V: cc11001100_hook("V", "mobile_banner_image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", fn(a), "assign"), a = cc11001100_hook("a", {
        ea: cc11001100_hook("ea", a.width, "object-key-init"),
        da: cc11001100_hook("da", a.height, "object-key-init"),
        N: cc11001100_hook("N", 1, "object-key-init"),
        O: cc11001100_hook("O", 13, "object-key-init"),
        V: cc11001100_hook("V", "image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", fn(a), "assign"), a = cc11001100_hook("a", {
        ea: cc11001100_hook("ea", a.width, "object-key-init"),
        da: cc11001100_hook("da", a.height, "object-key-init"),
        N: cc11001100_hook("N", 4, "object-key-init"),
        O: cc11001100_hook("O", 2, "object-key-init"),
        V: cc11001100_hook("V", "image_stacked", "object-key-init")
      }, "assign"));
      nn(b, a);
      return new jn(9, new ln(a.ea, a.da));
    }, "var-init"),
    pn = cc11001100_hook("pn", (a, b) => {
      mn(a, b);
      var c = cc11001100_hook("c", en({
        O: cc11001100_hook("O", b.google_content_recommendation_rows_num, "object-key-init"),
        N: cc11001100_hook("N", b.google_content_recommendation_columns_num, "object-key-init"),
        V: cc11001100_hook("V", b.google_content_recommendation_ui_type, "object-key-init")
      }), "var-init");
      if (c.P) a = cc11001100_hook("a", {
        ea: cc11001100_hook("ea", 0, "object-key-init"),
        da: cc11001100_hook("da", 0, "object-key-init"),
        N: cc11001100_hook("N", 0, "object-key-init"),
        O: cc11001100_hook("O", 0, "object-key-init"),
        V: cc11001100_hook("V", "image_stacked", "object-key-init"),
        P: cc11001100_hook("P", c.P, "object-key-init")
      }, "assign");else {
        var d = cc11001100_hook("d", 2 === c.Pa.length && 468 <= a ? 1 : 0, "var-init");
        var e = cc11001100_hook("e", c.Pa[d], "var-init");
        e = cc11001100_hook("e", 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e, "assign");
        var f = cc11001100_hook("f", dn[e], "var-init");
        let g = cc11001100_hook("g", c.N[d], "var-init");
        for (; a / g < f && 1 < g;) g--;
        f = cc11001100_hook("f", g, "assign");
        d = cc11001100_hook("d", c.O[d], "assign");
        c = cc11001100_hook("c", Math.floor(((a - 8 * f - 8) / f * bn[e] + cn[e]) * d + 8 * d + 8), "assign");
        a = cc11001100_hook("a", 1500 < a ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          ub: cc11001100_hook("ub", "Calculated slot width is too large: " + a, "object-key-init")
        } : 1500 < c ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          ub: cc11001100_hook("ub", "Calculated slot height is too large: " + c, "object-key-init")
        } : {
          width: cc11001100_hook("width", a, "object-key-init"),
          height: cc11001100_hook("height", c, "object-key-init")
        }, "assign");
        a = cc11001100_hook("a", {
          ea: cc11001100_hook("ea", a.width, "object-key-init"),
          da: cc11001100_hook("da", a.height, "object-key-init"),
          N: cc11001100_hook("N", f, "object-key-init"),
          O: cc11001100_hook("O", d, "object-key-init"),
          V: cc11001100_hook("V", e, "object-key-init")
        }, "assign");
      }
      if (a.P) throw new U(a.P);
      nn(b, a);
      return new jn(9, new ln(a.ea, a.da));
    }, "var-init");
  function mn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) throw new U("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
  }
  function nn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.google_content_recommendation_ui_type = cc11001100_hook("a.google_content_recommendation_ui_type", b.V, "assign");
    a.google_content_recommendation_columns_num = cc11001100_hook("a.google_content_recommendation_columns_num", b.N, "assign");
    a.google_content_recommendation_rows_num = cc11001100_hook("a.google_content_recommendation_rows_num", b.O, "assign");
  }
  ;
  class qn extends di {
    h() {
      return this.M;
    }
    i(a, b, c) {
      ci(a, c);
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const rn = cc11001100_hook("rn", {
    "image-top": cc11001100_hook("image-top", a => 600 >= a ? 284 + .414 * (a - 250) : 429, "object-key-init"),
    "image-middle": cc11001100_hook("image-middle", a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500), "object-key-init"),
    "image-side": cc11001100_hook("image-side", a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500), "object-key-init"),
    "text-only": cc11001100_hook("text-only", a => 500 >= a ? 187 - .228 * (a - 250) : 130, "object-key-init"),
    "in-article": cc11001100_hook("in-article", a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200, "object-key-init")
  }, "var-init");
  var sn = cc11001100_hook("sn", class extends di {
      h() {
        return Math.min(1200, this.M);
      }
    }, "var-init"),
    tn = cc11001100_hook("tn", (a, b, c, d, e) => {
      var f = cc11001100_hook("f", e.google_ad_layout || "image-top", "var-init");
      if ("in-article" == f) {
        var g = cc11001100_hook("g", a, "var-init");
        if ("false" == e.google_full_width_responsive) a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", Yh(b, c, g, .2, e), "assign"), !0 !== a) e.gfwrnwer = cc11001100_hook("e.gfwrnwer", a, "assign"), a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", P(b).clientWidth, "assign")) {
          if (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), c.parentElement) {
            b: {
              g = cc11001100_hook("g", c, "assign");
              for (let h = cc11001100_hook("h", 0, "var-init"); 100 > h && g.parentElement; ++h) {
                const k = cc11001100_hook("k", g.parentElement.childNodes, "var-init");
                for (let l = cc11001100_hook("l", 0, "var-init"); l < k.length; ++l) {
                  const m = cc11001100_hook("m", k[l], "var-init");
                  if (m != g && ai(b, m)) break b;
                }
                g = cc11001100_hook("g", g.parentElement, "assign");
                g.style.width = cc11001100_hook("g.style.width", "100%", "assign");
                g.style.height = cc11001100_hook("g.style.height", "auto", "assign");
              }
            }
            ci(b, c);
          } else a = cc11001100_hook("a", g, "assign");
        } else a = cc11001100_hook("a", g, "assign");
      }
      if (250 > a) throw new U("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
      a = cc11001100_hook("a", Math.min(1200, Math.floor(a)), "assign");
      if (d && "in-article" != f) {
        f = cc11001100_hook("f", Math.ceil(d), "assign");
        if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
        return new jn(11, new di(a, f));
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
        return new jn(11, new di(a, f));
      }
      d = cc11001100_hook("d", rn[f], "assign");
      if (!d) throw new U("Invalid data-ad-layout value: " + f);
      c = cc11001100_hook("c", gi(c, b), "assign");
      b = cc11001100_hook("b", P(b).clientWidth, "assign");
      b = cc11001100_hook("b", "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a)), "assign");
      return new jn(11, "in-article" == f ? new sn(a, b) : new di(a, b));
    }, "var-init");
  var un = cc11001100_hook("un", a => b => {
      for (let c = cc11001100_hook("c", a.length - 1, "var-init"); 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    }, "var-init"),
    wn = cc11001100_hook("wn", (a, b) => {
      var c = cc11001100_hook("c", vn.slice(0), "var-init");
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
    vn = cc11001100_hook("vn", [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]], "var-init");
  var yn = cc11001100_hook("yn", (a, b, c, d, e) => {
      "false" == e.google_full_width_responsive ? c = cc11001100_hook("c", {
        D: cc11001100_hook("D", a, "object-key-init"),
        F: cc11001100_hook("F", 1, "object-key-init")
      }, "assign") : "autorelaxed" == b && e.google_full_width_responsive || xn(b) || e.google_ad_resize ? (b = cc11001100_hook("b", Zh(a, c, d, e), "assign"), c = cc11001100_hook("c", !0 !== b ? {
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
    Bn = cc11001100_hook("Bn", (a, b, c, d, e) => {
      const {
        D: f,
        F: g
      } = cc11001100_hook("", Aj(247, () => yn(a, b, c, d, e)), "var-init");
      var h = cc11001100_hook("h", !0 === g, "var-init");
      const k = cc11001100_hook("k", K(d.style.width), "var-init"),
        l = cc11001100_hook("l", K(d.style.height), "var-init"),
        {
          ba: m,
          Y: u,
          ra: v,
          Oa: w
        } = cc11001100_hook("", zn(f, b, c, d, e, h), "var-init");
      h = cc11001100_hook("h", An(b, v), "assign");
      var y;
      const E = cc11001100_hook("E", (y = cc11001100_hook("y", ei(d, c, "marginLeft", K), "assign")) ? y + "px" : "", "var-init"),
        xa = cc11001100_hook("xa", (y = cc11001100_hook("y", ei(d, c, "marginRight", K), "assign")) ? y + "px" : "", "var-init");
      y = cc11001100_hook("y", ei(d, c, "zIndex") || "", "assign");
      return new jn(h, m, v, null, w, g, u, E, xa, l, k, y);
    }, "var-init"),
    xn = cc11001100_hook("xn", a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a), "var-init"),
    zn = cc11001100_hook("zn", (a, b, c, d, e, f) => {
      b = cc11001100_hook("b", "auto" == b ? .25 >= a / Math.min(1200, P(c).clientWidth) ? 4 : 3 : Xh(b), "assign");
      let g;
      var h = cc11001100_hook("h", !1, "var-init");
      let k = cc11001100_hook("k", !1, "var-init");
      var l = cc11001100_hook("l", 488 > P(c).clientWidth, "var-init");
      if (l) {
        g = cc11001100_hook("g", Sh(d, c), "assign");
        var m = cc11001100_hook("m", gi(d, c), "var-init");
        h = cc11001100_hook("h", !m && g, "assign");
        k = cc11001100_hook("k", m && g, "assign");
      }
      m = cc11001100_hook("m", [fi(a), an(b)], "assign");
      m.push(ii(l, c, d, k));
      null != e.google_max_responsive_height && m.push(ji(e.google_max_responsive_height));
      l = cc11001100_hook("l", [y => !y.jb], "assign");
      if (h || k) h = cc11001100_hook("h", ki(c, d), "assign"), l.push(ji(h));
      let u = cc11001100_hook("u", wn(un(m), un(l)), "var-init");
      if (!u) throw new U("No slot size for availableWidth=" + a);
      const {
        ba: v,
        Y: w
      } = cc11001100_hook("", Aj(248, () => {
        var y;
        a: if (f) {
          if (e.gfwrnh && (y = cc11001100_hook("y", K(e.gfwrnh), "assign"))) {
            y = cc11001100_hook("y", {
              ba: cc11001100_hook("ba", new qn(a, y), "object-key-init"),
              Y: cc11001100_hook("Y", !0, "object-key-init")
            }, "assign");
            break a;
          }
          y = cc11001100_hook("y", a / 1.2, "assign");
          var E = cc11001100_hook("E", Math, "var-init");
          var xa = cc11001100_hook("xa", E.min, "var-init");
          if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var R = cc11001100_hook("R", Infinity, "var-init");else {
            R = cc11001100_hook("R", d, "assign");
            let na = cc11001100_hook("na", Infinity, "var-init");
            do {
              var ya = cc11001100_hook("ya", ei(R, c, "height", K), "var-init");
              ya && (na = cc11001100_hook("na", Math.min(na, ya), "assign"));
              (ya = cc11001100_hook("ya", ei(R, c, "maxHeight", K), "assign")) && (na = cc11001100_hook("na", Math.min(na, ya), "assign"));
            } while ((R = cc11001100_hook("R", R.parentElement, "assign")) && "HTML" != R.tagName);
            R = cc11001100_hook("R", na, "assign");
          }
          E = cc11001100_hook("E", xa.call(E, y, R), "assign");
          if (E < .5 * y || 100 > E) E = cc11001100_hook("E", y, "assign");
          y = cc11001100_hook("y", {
            ba: cc11001100_hook("ba", new qn(a, Math.floor(E)), "object-key-init"),
            Y: cc11001100_hook("Y", E < y ? 102 : !0, "object-key-init")
          }, "assign");
        } else y = cc11001100_hook("y", {
          ba: cc11001100_hook("ba", u, "object-key-init"),
          Y: cc11001100_hook("Y", 100, "object-key-init")
        }, "assign");
        return y;
      }), "var-init");
      return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
        ba: cc11001100_hook("ba", Cn(a, c, d, v, e), "object-key-init"),
        Y: cc11001100_hook("Y", !1, "object-key-init"),
        ra: cc11001100_hook("ra", b, "object-key-init"),
        Oa: cc11001100_hook("Oa", g, "object-key-init")
      } : {
        ba: cc11001100_hook("ba", v, "object-key-init"),
        Y: cc11001100_hook("Y", w, "object-key-init"),
        ra: cc11001100_hook("ra", b, "object-key-init"),
        Oa: cc11001100_hook("Oa", g, "object-key-init")
      };
    }, "var-init");
  const An = cc11001100_hook("An", (a, b) => {
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
    Cn = cc11001100_hook("Cn", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", e.google_ad_height || ei(c, b, "height", K), "var-init");
      b = cc11001100_hook("b", tn(a, b, c, f, e).size(), "assign");
      return b.M * b.height() > a * d.height() ? new Y(b.M, b.height(), 1) : d;
    }, "var-init");
  var Dn = cc11001100_hook("Dn", (a, b, c, d, e) => {
    var f;
    (f = cc11001100_hook("f", P(b).clientWidth, "assign")) ? 488 > P(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), ci(b, c), f = cc11001100_hook("f", {
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
    if (!0 !== h || a == g) return new jn(12, new di(a, d), null, null, !0, h, 100);
    const {
      ba: k,
      Y: l,
      ra: m
    } = cc11001100_hook("", zn(g, "auto", b, c, e, !0), "var-init");
    return new jn(1, k, m, 2, !0, h, l);
  }, "var-init");
  var Fn = cc11001100_hook("Fn", (a, b) => {
      const c = cc11001100_hook("c", b.google_ad_format, "var-init");
      if ("autorelaxed" == c) {
        a: {
          if ("pedestal" != b.google_content_recommendation_ui_type) for (const d of kn) if (null != b[d]) {
            a = cc11001100_hook("a", !0, "assign");
            break a;
          }
          a = cc11001100_hook("a", !1, "assign");
        }
        return a ? 9 : 5;
      }
      if (xn(c)) return 1;
      if ("link" === c) return 4;
      if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (En(b), 1);
      if (27 === b.google_reactive_ad_format) return En(b), 1;
    }, "var-init"),
    Hn = cc11001100_hook("Hn", (a, b, c, d, e = !1) => {
      e = cc11001100_hook("e", b.offsetWidth || (c.google_ad_resize || e) && ei(b, d, "width", K) || c.google_ad_width || 0, "assign");
      4 === a && (c.google_ad_format = cc11001100_hook("c.google_ad_format", "auto", "assign"), a = cc11001100_hook("a", 1, "assign"));
      var f = cc11001100_hook("f", (f = cc11001100_hook("f", Gn(a, e, b, c, d), "assign")) ? f : Bn(e, c.google_ad_format, d, b, c), "var-init");
      f.size().i(d, c, b);
      hn(f, e, c);
      1 != a && (a = cc11001100_hook("a", f.size().height(), "assign"), b.style.height = cc11001100_hook("b.style.height", a + "px", "assign"));
    }, "var-init");
  const Gn = cc11001100_hook("Gn", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", d.google_ad_height || ei(c, e, "height", K), "var-init");
      switch (a) {
        case 5:
          const {
            D: g,
            F: h
          } = cc11001100_hook("", Aj(247, () => yn(b, d.google_ad_format, e, c, d)), "var-init");
          !0 === h && b != g && ci(e, c);
          !0 === h ? d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !0, "assign") : (d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !1, "assign"), d.gfwrnwer = cc11001100_hook("d.gfwrnwer", h, "assign"));
          return on(g, d);
        case 9:
          return pn(b, d);
        case 8:
          return tn(b, e, c, f, d);
        case 10:
          return Dn(b, e, c, f, d);
      }
    }, "var-init"),
    En = cc11001100_hook("En", a => {
      a.google_ad_format = cc11001100_hook("a.google_ad_format", "auto", "assign");
      a.armr = cc11001100_hook("a.armr", 3, "assign");
    }, "var-init");
  function In(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Kc(b), "var-init");
    if (c) {
      c = cc11001100_hook("c", P(c).clientWidth, "assign");
      const d = cc11001100_hook("d", Nc(a, b) || {}, "var-init"),
        e = cc11001100_hook("e", d.direction, "var-init");
      if ("0px" === d.width && "none" !== d.cssFloat) return -1;
      if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if ("rtl" === e && c) return a = cc11001100_hook("a", b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, "assign"), Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)));
    }
    return -1;
  }
  ;
  function Jn(a) {
    cc11001100_hook("a", a, "function-parameter");
    V.wa(b => {
      b.shv = cc11001100_hook("b.shv", String(a), "assign");
      b.mjsv = cc11001100_hook("b.mjsv", "m202302230101", "assign");
      const c = cc11001100_hook("c", M(Qf).i(), "var-init"),
        d = cc11001100_hook("d", X(n), "var-init");
      d.eids || (d.eids = cc11001100_hook("d.eids", [], "assign"));
      b.eid = cc11001100_hook("b.eid", c.concat(d.eids).join(","), "assign");
    });
  }
  function Kn(a) {
    cc11001100_hook("a", a, "function-parameter");
    Jn(F(a, 2));
    a = cc11001100_hook("a", G(a, 6), "assign");
    Zb(vl, Wd);
    vl = cc11001100_hook("vl", a, "assign");
  }
  ;
  function Ln({
    ab: a,
    rb: b
  }) {
    return a || ("dev" === b ? "dev" : "");
  }
  ;
  function Mn(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", V, "var-init");
    try {
      return Zb(a, Vd), new ul(JSON.parse(a));
    } catch (c) {
      b.I(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
        d.jspb = cc11001100_hook("d.jspb", String(a), "assign");
      });
    }
    return new ul();
  }
  ;
  function Nn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`;
  }
  function On(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return `&${a}=${b.toFixed(3)}`;
  }
  function Pn() {
    const a = cc11001100_hook("a", new Set(), "var-init"),
      b = cc11001100_hook("b", nj(), "var-init");
    try {
      if (!b) return a;
      const c = cc11001100_hook("c", b.pubads(), "var-init");
      for (const d of c.getSlots()) a.add(d.getSlotId().getDomId());
    } catch (c) {}
    return a;
  }
  function Qn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.id, "assign");
    return null != a && (Pn().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"));
  }
  function Rn(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a.sources) return !1;
    switch (Sn(a)) {
      case 2:
        const d = cc11001100_hook("d", Tn(a), "var-init");
        if (d) return c.some(f => Un(d, f));
      case 1:
        const e = cc11001100_hook("e", Vn(a), "var-init");
        if (e) return b.some(f => Un(e, f));
    }
    return !1;
  }
  function Sn(a) {
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
  function Vn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Wn(a, b => b.currentRect);
  }
  function Tn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Wn(a, b => b.previousRect);
  }
  function Wn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.sources.reduce((c, d) => {
      d = cc11001100_hook("d", b(d), "assign");
      return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d;
    }, null);
  }
  function Un(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Math.min(a.right, b.right) - Math.max(a.left, b.left), "var-init");
    a = cc11001100_hook("a", Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top), "assign");
    return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top));
  }
  function Xn() {
    const a = cc11001100_hook("a", [...document.getElementsByTagName("iframe")].filter(Qn), "var-init"),
      b = cc11001100_hook("b", [...Pn()].map(c => document.getElementById(c)).filter(c => null !== c), "var-init");
    Yn = cc11001100_hook("Yn", window.scrollX, "assign");
    Zn = cc11001100_hook("Zn", window.scrollY, "assign");
    return $n = cc11001100_hook("$n", [...a, ...b].map(c => c.getBoundingClientRect()), "assign");
  }
  function ao() {
    var a = cc11001100_hook("a", new bo(), "var-init");
    if (T(sh)) {
      var b = cc11001100_hook("b", window, "var-init");
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = cc11001100_hook("b.google_plmetrics", !0, "assign");
        b = cc11001100_hook("b", ["layout-shift", "largest-contentful-paint", "first-input", "longtask"], "assign");
        for (const c of b) a.J().observe({
          type: cc11001100_hook("type", c, "object-key-init"),
          buffered: cc11001100_hook("buffered", !0, "object-key-init")
        });
        co(a);
      }
    }
  }
  function co(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ri(641, () => {
        var d = cc11001100_hook("d", document, "var-init");
        2 == (d.prerendering ? 3 : {
          visible: cc11001100_hook("visible", 1, "object-key-init"),
          hidden: cc11001100_hook("hidden", 2, "object-key-init"),
          prerender: cc11001100_hook("prerender", 3, "object-key-init"),
          preview: cc11001100_hook("preview", 4, "object-key-init"),
          unloaded: cc11001100_hook("unloaded", 5, "object-key-init")
        }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && eo(a);
      }), "var-init"),
      c = cc11001100_hook("c", ri(641, () => void eo(a)), "var-init");
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.xa = cc11001100_hook("a.xa", () => {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      a.J().disconnect();
    }, "assign");
  }
  function eo(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.Ea) {
      a.Ea = cc11001100_hook("a.Ea", !0, "assign");
      a.J().takeRecords();
      var b = cc11001100_hook("b", "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics", "var-init");
      window.LayoutShift && (b += cc11001100_hook("b", On("cls", a.B), "assign"), b += cc11001100_hook("b", On("mls", a.K), "assign"), b += cc11001100_hook("b", Nn("nls", a.R), "assign"), window.LayoutShiftAttribution && (b += cc11001100_hook("b", On("cas", a.m), "assign"), b += cc11001100_hook("b", Nn("nas", a.Da), "assign")), b += cc11001100_hook("b", On("wls", a.fa), "assign"), b += cc11001100_hook("b", On("tls", a.Ha), "assign"), window.LayoutShiftAttribution && (b += cc11001100_hook("b", On("was", a.Ia), "assign")));
      window.LargestContentfulPaint && (b += cc11001100_hook("b", Nn("lcp", a.Ba), "assign"), b += cc11001100_hook("b", Nn("lcps", a.Aa), "assign"));
      window.PerformanceEventTiming && a.za && (b += cc11001100_hook("b", Nn("fid", a.ya), "assign"));
      window.PerformanceLongTaskTiming && (b += cc11001100_hook("b", Nn("cbt", a.v), "assign"), b += cc11001100_hook("b", Nn("mbt", a.C), "assign"), b += cc11001100_hook("b", Nn("nlt", a.T), "assign"));
      let d = cc11001100_hook("d", 0, "var-init");
      for (var c of document.getElementsByTagName("iframe")) Qn(c) && d++;
      b += cc11001100_hook("b", Nn("nif", d), "assign");
      b += cc11001100_hook("b", Nn("ifi", rd(window)), "assign");
      c = cc11001100_hook("c", M(Qf).i(), "assign");
      b += cc11001100_hook("b", `&${"eid"}=${encodeURIComponent(c.join())}`, "assign");
      b += cc11001100_hook("b", `&${"top"}=${n === n.top ? 1 : 0}`, "assign");
      b += cc11001100_hook("b", a.Ga ? `&${"qqid"}=${encodeURIComponent(a.Ga)}` : Nn("pvsid", bd(n)), "assign");
      window.googletag && (b += cc11001100_hook("b", "&gpt=1", "assign"));
      window.fetch(b, {
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        credentials: cc11001100_hook("credentials", "include", "object-key-init"),
        redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      });
      af(a);
    }
  }
  class bo extends $e {
    constructor() {
      super();
      this.l = cc11001100_hook("this.l", this.i = cc11001100_hook("this.i", this.R = cc11001100_hook("this.R", this.K = cc11001100_hook("this.K", this.B = cc11001100_hook("this.B", 0, "assign"), "assign"), "assign"), "assign"), "assign");
      this.Fa = cc11001100_hook("this.Fa", this.Ca = cc11001100_hook("this.Ca", Number.NEGATIVE_INFINITY, "assign"), "assign");
      this.ya = cc11001100_hook("this.ya", this.Aa = cc11001100_hook("this.Aa", this.Ba = cc11001100_hook("this.Ba", this.Da = cc11001100_hook("this.Da", this.Ia = cc11001100_hook("this.Ia", this.m = cc11001100_hook("this.m", this.Ha = cc11001100_hook("this.Ha", this.fa = cc11001100_hook("this.fa", 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
      this.za = cc11001100_hook("this.za", !1, "assign");
      this.T = cc11001100_hook("this.T", this.C = cc11001100_hook("this.C", this.v = cc11001100_hook("this.v", 0, "assign"), "assign"), "assign");
      const a = cc11001100_hook("a", document.querySelector("[data-google-query-id]"), "var-init");
      this.Ga = cc11001100_hook("this.Ga", a ? a.getAttribute("data-google-query-id") : null, "assign");
      this.U = cc11001100_hook("this.U", null, "assign");
      this.Ea = cc11001100_hook("this.Ea", !1, "assign");
      this.xa = cc11001100_hook("this.xa", () => {}, "assign");
    }
    J() {
      this.U || (this.U = cc11001100_hook("this.U", new PerformanceObserver(ri(640, a => {
        const b = cc11001100_hook("b", Yn !== window.scrollX || Zn !== window.scrollY ? [] : $n, "var-init"),
          c = cc11001100_hook("c", Xn(), "var-init");
        for (const f of a.getEntries()) switch (f.entryType) {
          case "layout-shift":
            a = cc11001100_hook("a", f, "assign");
            var d = cc11001100_hook("d", b, "var-init"),
              e = cc11001100_hook("e", c, "var-init");
            if (!a.hadRecentInput) {
              this.B += cc11001100_hook("this.B", Number(a.value), "assign");
              Number(a.value) > this.K && (this.K = cc11001100_hook("this.K", Number(a.value), "assign"));
              this.R += cc11001100_hook("this.R", 1, "assign");
              if (d = cc11001100_hook("d", Rn(a, d, e), "assign")) this.m += cc11001100_hook("this.m", a.value, "assign"), this.Da++;
              if (5E3 < a.startTime - this.Ca || 1E3 < a.startTime - this.Fa) this.Ca = cc11001100_hook("this.Ca", a.startTime, "assign"), this.l = cc11001100_hook("this.l", this.i = cc11001100_hook("this.i", 0, "assign"), "assign");
              this.Fa = cc11001100_hook("this.Fa", a.startTime, "assign");
              this.i += cc11001100_hook("this.i", a.value, "assign");
              d && (this.l += cc11001100_hook("this.l", a.value, "assign"));
              this.i > this.fa && (this.fa = cc11001100_hook("this.fa", this.i, "assign"), this.Ia = cc11001100_hook("this.Ia", this.l, "assign"), this.Ha = cc11001100_hook("this.Ha", a.startTime + a.duration, "assign"));
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
            a = cc11001100_hook("a", Math.max(0, f.duration - 50), "assign"), this.v += cc11001100_hook("this.v", a, "assign"), this.C = cc11001100_hook("this.C", Math.max(this.C, a), "assign"), this.T += cc11001100_hook("this.T", 1, "assign");
        }
      })), "assign"));
      return this.U;
    }
    h() {
      super.h();
      this.xa();
    }
  }
  var Yn = cc11001100_hook("Yn", void 0, "var-init"),
    Zn = cc11001100_hook("Zn", void 0, "var-init"),
    $n = cc11001100_hook("$n", [], "var-init");
  var fo = cc11001100_hook("fo", class extends I {
    constructor() {
      super();
    }
    getVersion() {
      return F(this, 2);
    }
  }, "var-init");
  function go(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 2, b);
  }
  function ho(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 3, b);
  }
  function io(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 4, b);
  }
  function jo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 5, b);
  }
  function ko(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 9, b);
  }
  function lo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Hb(a, 10, b);
  }
  function mo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 11, b);
  }
  function no(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  function oo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 7, b);
  }
  var qo = cc11001100_hook("qo", class extends I {
      constructor() {
        super(void 0, -1, po);
      }
    }, "var-init"),
    po = cc11001100_hook("po", [10, 6], "var-init");
  const ro = cc11001100_hook("ro", "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" "), "var-init");
  function so() {
    if ("function" !== typeof L.navigator?.userAgentData?.getHighEntropyValues) return null;
    const a = cc11001100_hook("a", L.google_tag_data ?? (L.google_tag_data = cc11001100_hook("L.google_tag_data", {}, "assign")), "var-init");
    if (a.uach_promise) return a.uach_promise;
    const b = cc11001100_hook("b", L.navigator.userAgentData.getHighEntropyValues(ro).then(c => {
      a.uach ?? (a.uach = cc11001100_hook("a.uach", c, "assign"));
      return c;
    }), "var-init");
    return a.uach_promise = cc11001100_hook("a.uach_promise", b, "assign");
  }
  function to(a) {
    cc11001100_hook("a", a, "function-parameter");
    return mo(lo(jo(go(no(io(oo(ko(ho(new qo(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList?.map(b => {
      var c = cc11001100_hook("c", new fo(), "var-init");
      c = cc11001100_hook("c", x(c, 1, b.brand), "assign");
      return x(c, 2, b.version);
    }) || []), a.wow64 || !1);
  }
  function uo() {
    return so()?.then(a => to(a)) ?? null;
  }
  ;
  function vo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.google_ad_host || (a = cc11001100_hook("a", Ml(a), "assign")) && (b.google_ad_host = cc11001100_hook("b.google_ad_host", a, "assign"));
  }
  function wo(a, b, c = "") {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, delete L.google_sa_impl);
    L.google_sa_queue || (L.google_sa_queue = cc11001100_hook("L.google_sa_queue", [], "assign"), L.google_process_slots = cc11001100_hook("L.google_process_slots", V.qa(215, () => xo(L.google_sa_queue)), "assign"), a = cc11001100_hook("a", yo(c, a, b), "assign"), Lc(L.document, a).id = cc11001100_hook("Lc(L.document, a).id", "google_shimpl", "assign"));
  }
  function xo(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.shift(), "var-init");
    "function" === typeof b && V.ia(216, b);
    a.length && n.setTimeout(V.qa(215, () => xo(a)), 0);
  }
  function zo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.google_sa_queue = cc11001100_hook("a.google_sa_queue", a.google_sa_queue || [], "assign");
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
  }
  function yo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", G(c, 4) ? b.sb : b.tb, "assign");
    const d = cc11001100_hook("d", {}, "var-init");
    a: {
      if (G(c, 4)) {
        if (a = cc11001100_hook("a", a || om(L), "assign")) {
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
    Ao(a, d);
    Ao(Lh() ? {
      bust: cc11001100_hook("bust", Lh(), "object-key-init")
    } : {}, d);
    return wc(b, d);
  }
  function Ao(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    J(a, (c, d) => {
      void 0 === b[d] && (b[d] = cc11001100_hook("b[d]", c, "assign"));
    });
  }
  function Bo(a) {
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
          jd = cc11001100_hook("jd", d, "assign");
          break a;
        }
      } catch (g) {}
      jd = cc11001100_hook("jd", null, "assign");
    }
    if (jd) return null;
    d = cc11001100_hook("d", Mc("IFRAME"), "assign");
    d.id = cc11001100_hook("d.id", "google_esf", "assign");
    d.name = cc11001100_hook("d.name", "google_esf", "assign");
    d.src = cc11001100_hook("d.src", yc(a.zb).toString(), "assign");
    d.style.display = cc11001100_hook("d.style.display", "none", "assign");
    return d;
  }
  function Co(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Do(a, b, c, d, (e, f) => {
      e = cc11001100_hook("e", e.document, "assign");
      for (var g = cc11001100_hook("g", void 0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); !g || e.getElementById(g + "_host");) g = cc11001100_hook("g", "aswift_" + h++, "assign");
      e = cc11001100_hook("e", g, "assign");
      g = cc11001100_hook("g", Number(f.google_ad_width || 0), "assign");
      f = cc11001100_hook("f", Number(f.google_ad_height || 0), "assign");
      h = cc11001100_hook("h", Mc("DIV"), "assign");
      h.id = cc11001100_hook("h.id", e + "_host", "assign");
      const k = cc11001100_hook("k", h.style, "var-init");
      k.border = cc11001100_hook("k.border", "none", "assign");
      k.height = cc11001100_hook("k.height", `${f}px`, "assign");
      k.width = cc11001100_hook("k.width", `${g}px`, "assign");
      k.margin = cc11001100_hook("k.margin", "0px", "assign");
      k.padding = cc11001100_hook("k.padding", "0px", "assign");
      k.position = cc11001100_hook("k.position", "relative", "assign");
      k.visibility = cc11001100_hook("k.visibility", "visible", "assign");
      k.backgroundColor = cc11001100_hook("k.backgroundColor", "transparent", "assign");
      h.style.display = cc11001100_hook("h.style.display", "inline-block", "assign");
      c.appendChild(h);
      return {
        fb: cc11001100_hook("fb", e, "object-key-init"),
        yb: cc11001100_hook("yb", h, "object-key-init")
      };
    });
  }
  function Do(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", e(a, b), "var-init");
    e = cc11001100_hook("e", f.fb, "assign");
    Eo(a, c, b);
    c = cc11001100_hook("c", pa, "assign");
    const g = cc11001100_hook("g", new Date().getTime(), "var-init");
    b.google_lrv = cc11001100_hook("b.google_lrv", F(d, 2), "assign");
    b.google_async_iframe_id = cc11001100_hook("b.google_async_iframe_id", e, "assign");
    b.google_start_time = cc11001100_hook("b.google_start_time", c, "assign");
    b.google_bpp = cc11001100_hook("b.google_bpp", g > c ? g - c : 1, "assign");
    a.google_sv_map = cc11001100_hook("a.google_sv_map", a.google_sv_map || {}, "assign");
    a.google_sv_map[e] = cc11001100_hook("a.google_sv_map[e]", b, "assign");
    d = cc11001100_hook("d", a.document.getElementById(e + "_host") ? h => h() : h => window.setTimeout(h, 0), "assign");
    zo(a, () => {
      ({
        yb: h
      } = cc11001100_hook("", f, "assign"));
      if (!h || !h.isConnected) {
        var h = cc11001100_hook("h", a.document.getElementById(String(b.google_async_iframe_id) + "_host"), "var-init");
        if (null == h) throw Error("no_div");
      }
      h = cc11001100_hook("h", T(kh) ? {
        pubWin: cc11001100_hook("pubWin", a, "object-key-init"),
        vars: cc11001100_hook("vars", b, "object-key-init"),
        innerInsElement: cc11001100_hook("innerInsElement", h, "object-key-init")
      } : {
        pubWin: cc11001100_hook("pubWin", a, "object-key-init"),
        vars: cc11001100_hook("vars", b, "object-key-init"),
        outerInsElement: cc11001100_hook("outerInsElement", h, "object-key-init"),
        innerInsElement: cc11001100_hook("innerInsElement", h, "object-key-init")
      }, "assign");
      (h = cc11001100_hook("h", a.google_sa_impl(h), "assign")) && V.ca(911, h);
    }, d);
  }
  function Eo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", c.google_ad_output, "var-init"),
      e = cc11001100_hook("e", c.google_ad_format, "var-init"),
      f = cc11001100_hook("f", c.google_ad_width || 0, "var-init"),
      g = cc11001100_hook("g", c.google_ad_height || 0, "var-init");
    e || "html" !== d && null != d || (e = cc11001100_hook("e", f + "x" + g, "assign"));
    d = cc11001100_hook("d", !c.google_ad_slot || c.google_override_format || !Zm[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used, "assign");
    e && d ? e = cc11001100_hook("e", e.toLowerCase(), "assign") : e = cc11001100_hook("e", "", "assign");
    c.google_ad_format = cc11001100_hook("c.google_ad_format", e, "assign");
    if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
      e = cc11001100_hook("e", [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height], "assign");
      d = cc11001100_hook("d", [], "assign");
      f = cc11001100_hook("f", 0, "assign");
      for (g = cc11001100_hook("g", b, "assign"); g && 25 > f; g = cc11001100_hook("g", g.parentNode, "assign"), ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
      (d = cc11001100_hook("d", d.join(), "assign")) && e.push(d);
      c.google_ad_unit_key = cc11001100_hook("c.google_ad_unit_key", Sc(e.join(":")).toString(), "assign");
      e = cc11001100_hook("e", [], "assign");
      for (d = cc11001100_hook("d", 0, "assign"); b && 25 > d; ++d) {
        f = cc11001100_hook("f", (f = cc11001100_hook("f", 9 !== b.nodeType && b.id, "assign")) ? "/" + f : "", "assign");
        a: {
          if (b && b.nodeName && b.parentElement) {
            g = cc11001100_hook("g", b.nodeName.toString().toLowerCase(), "assign");
            const h = cc11001100_hook("h", b.parentElement.childNodes, "var-init");
            let k = cc11001100_hook("k", 0, "var-init");
            for (let l = cc11001100_hook("l", 0, "var-init"); l < h.length; ++l) {
              const m = cc11001100_hook("m", h[l], "var-init");
              if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                if (b === m) {
                  g = cc11001100_hook("g", "." + k, "assign");
                  break a;
                }
                ++k;
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
          const k = cc11001100_hook("k", h.frames, "var-init");
          for (f = cc11001100_hook("f", 0, "assign"); f < k.length; ++f) if (a === k[f]) {
            e.push(f);
            break;
          }
          a = cc11001100_hook("a", h, "assign");
          h = cc11001100_hook("h", a.parent, "assign");
        }
      } catch (h) {}
      c.google_ad_dom_fingerprint = cc11001100_hook("c.google_ad_dom_fingerprint", Sc(b + e.join()).toString(), "assign");
    }
  }
  function Fo() {
    var a = cc11001100_hook("a", Kc(n), "var-init");
    a && (a = cc11001100_hook("a", yg(a), "assign"), a.tagSpecificState[1] || (a.tagSpecificState[1] = cc11001100_hook("a.tagSpecificState[1]", {
      debugCard: cc11001100_hook("debugCard", null, "object-key-init"),
      debugCardRequested: cc11001100_hook("debugCardRequested", !1, "object-key-init")
    }, "assign")));
  }
  function Go() {
    const a = cc11001100_hook("a", uo(), "var-init");
    null != a && a.then(b => {
      a: {
        nb = cc11001100_hook("nb", !0, "assign");
        try {
          var c = cc11001100_hook("c", JSON.stringify(b.toJSON(), Wb), "var-init");
          break a;
        } finally {
          nb = cc11001100_hook("nb", !1, "assign");
        }
        c = cc11001100_hook("c", void 0, "assign");
      }
      L.google_user_agent_client_hint = cc11001100_hook("L.google_user_agent_client_hint", c, "assign");
    });
    Bm();
  }
  ;
  function Ho(a, b) {
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
  function Io(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.getAttribute("src")) {
      var c = cc11001100_hook("c", a.getAttribute("src") || "", "var-init"),
        d = cc11001100_hook("d", Ic(c, "client"), "var-init");
      d && (b.google_ad_client = cc11001100_hook("b.google_ad_client", Ho("google_ad_client", d), "assign"));
      (c = cc11001100_hook("c", Ic(c, "host"), "assign")) && (b.google_ad_host = cc11001100_hook("b.google_ad_host", Ho("google_ad_host", c), "assign"));
    }
    a = cc11001100_hook("a", a.attributes, "assign");
    c = cc11001100_hook("c", a.length, "assign");
    for (d = cc11001100_hook("d", 0, "assign"); d < c; d++) {
      var e = cc11001100_hook("e", a[d], "var-init");
      if (/data-/.test(e.name)) {
        const f = cc11001100_hook("f", qa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), "var-init");
        b.hasOwnProperty(f) || (e = cc11001100_hook("e", Ho(f, e.value), "assign"), null !== e && (b[f] = cc11001100_hook("b[f]", e, "assign")));
      }
    }
  }
  function Jo(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", md(a), "assign")) switch (a.data && a.data.autoFormat) {
      case "rspv":
        return 13;
      case "mcrspv":
        return 15;
      default:
        return 14;
    } else return 12;
  }
  function Ko(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Io(a, b);
    if (c.document && c.document.body && !Fn(c, b) && !b.google_reactive_ad_format) {
      var e = cc11001100_hook("e", parseInt(a.style.width, 10), "var-init"),
        f = cc11001100_hook("f", In(a, c), "var-init");
      if (0 < f && e > f) {
        var g = cc11001100_hook("g", parseInt(a.style.height, 10), "var-init");
        e = cc11001100_hook("e", !!Zm[e + "x" + g], "assign");
        var h = cc11001100_hook("h", f, "var-init");
        if (e) {
          const k = cc11001100_hook("k", $m(f, g), "var-init");
          if (k) h = cc11001100_hook("h", k, "assign"), b.google_ad_format = cc11001100_hook("b.google_ad_format", k + "x" + g + "_0ads_al", "assign");else throw new U("No slot size for availableWidth=" + f);
        }
        b.google_ad_resize = cc11001100_hook("b.google_ad_resize", !0, "assign");
        b.google_ad_width = cc11001100_hook("b.google_ad_width", h, "assign");
        e || (b.google_ad_format = cc11001100_hook("b.google_ad_format", null, "assign"), b.google_override_format = cc11001100_hook("b.google_override_format", !0, "assign"));
        f = cc11001100_hook("f", h, "assign");
        a.style.width = cc11001100_hook("a.style.width", `${f}px`, "assign");
        g = cc11001100_hook("g", Bn(f, "auto", c, a, b), "assign");
        h = cc11001100_hook("h", f, "assign");
        g.size().i(c, b, a);
        hn(g, h, b);
        g = cc11001100_hook("g", g.size(), "assign");
        b.google_responsive_formats = cc11001100_hook("b.google_responsive_formats", null, "assign");
        g.M > f && !e && (b.google_ad_width = cc11001100_hook("b.google_ad_width", g.M, "assign"), a.style.width = cc11001100_hook("a.style.width", `${g.M}px`, "assign"));
      }
    }
    (e = cc11001100_hook("e", a.offsetWidth, "assign")) || (e = cc11001100_hook("e", ei(a, c, "width", K), "assign"));
    e = cc11001100_hook("e", e || b.google_ad_width || 0, "assign");
    if (488 > P(c).clientWidth) {
      f = cc11001100_hook("f", Kc(c) || c, "assign");
      g = cc11001100_hook("g", b.google_ad_client, "assign");
      if (d = cc11001100_hook("d", lj(f.location, "google_responsive_slot_preview") || T(jh) || yl(f, 1, g, d), "assign")) b: if (b.google_reactive_ad_format || b.google_ad_resize || Fn(c, b) || Uh(a, b)) d = cc11001100_hook("d", !1, "assign");else {
        for (d = cc11001100_hook("d", a, "assign"); d; d = cc11001100_hook("d", d.parentElement, "assign")) {
          f = cc11001100_hook("f", Nc(d, c), "assign");
          if (!f) {
            b.gfwrnwer = cc11001100_hook("b.gfwrnwer", 18, "assign");
            d = cc11001100_hook("d", !1, "assign");
            break b;
          }
          if (!Sa(["static", "relative"], f.position)) {
            b.gfwrnwer = cc11001100_hook("b.gfwrnwer", 17, "assign");
            d = cc11001100_hook("d", !1, "assign");
            break b;
          }
        }
        d = cc11001100_hook("d", Yh(c, a, e, .3, b), "assign");
        !0 !== d ? (b.gfwrnwer = cc11001100_hook("b.gfwrnwer", d, "assign"), d = cc11001100_hook("d", !1, "assign")) : d = cc11001100_hook("d", c === c.top ? !0 : !1, "assign");
      }
      d ? (b.google_resizing_allowed = cc11001100_hook("b.google_resizing_allowed", !0, "assign"), b.ovlp = cc11001100_hook("b.ovlp", !0, "assign"), b.google_ad_format = cc11001100_hook("b.google_ad_format", "auto", "assign"), b.iaaso = cc11001100_hook("b.iaaso", !0, "assign"), b.armr = cc11001100_hook("b.armr", 1, "assign"), d = cc11001100_hook("d", !0, "assign")) : d = cc11001100_hook("d", !1, "assign");
    } else d = cc11001100_hook("d", !1, "assign");
    if (e = cc11001100_hook("e", Fn(c, b), "assign")) Hn(e, a, b, c, d);else {
      if (Uh(a, b)) {
        if (d = cc11001100_hook("d", Nc(a, c), "assign")) a.style.width = cc11001100_hook("a.style.width", d.width, "assign"), a.style.height = cc11001100_hook("a.style.height", d.height, "assign"), Th(d, b);
        b.google_ad_width || (b.google_ad_width = cc11001100_hook("b.google_ad_width", a.offsetWidth, "assign"));
        b.google_ad_height || (b.google_ad_height = cc11001100_hook("b.google_ad_height", a.offsetHeight, "assign"));
        b.google_loader_features_used = cc11001100_hook("b.google_loader_features_used", 256, "assign");
        b.google_responsive_auto_format = cc11001100_hook("b.google_responsive_auto_format", Jo(c), "assign");
      } else Th(a.style, b);
      c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Hn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = cc11001100_hook("a", Zh(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), "assign"), !0 !== a ? (b.efwr = cc11001100_hook("b.efwr", !1, "assign"), b.gfwrnwer = cc11001100_hook("b.gfwrnwer", a, "assign")) : b.efwr = cc11001100_hook("b.efwr", !0, "assign"));
    }
  }
  ;
  function Lo(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.i) return a.i;
    a.C && a.C(a.l) ? a.i = cc11001100_hook("a.i", a.l, "assign") : a.i = cc11001100_hook("a.i", Xc(a.l, a.K), "assign");
    return a.i ?? null;
  }
  var Mo = cc11001100_hook("Mo", class extends $e {
    constructor(a, b, c) {
      super();
      this.K = cc11001100_hook("this.K", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.R = cc11001100_hook("this.R", c, "assign");
      this.B = cc11001100_hook("this.B", new Map(), "assign");
      this.v = cc11001100_hook("this.v", new Map(), "assign");
      this.U = cc11001100_hook("this.U", new Map(), "assign");
      this.T = cc11001100_hook("this.T", new Map(), "assign");
      this.m = cc11001100_hook("this.m", void 0, "assign");
      this.l = cc11001100_hook("this.l", L, "assign");
    }
    h() {
      delete this.i;
      this.B.clear();
      this.v.clear();
      this.U.clear();
      this.T.clear();
      this.m && (lc(this.l, "message", this.m), delete this.m);
      delete this.l;
      delete this.R;
      super.h();
    }
  }, "var-init");
  const No = cc11001100_hook("No", (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.callback({
          consentData: cc11001100_hook("consentData", c ?? void 0, "object-key-init"),
          cb: cc11001100_hook("cb", d ? void 0 : 2, "object-key-init")
        });
      });
    }, "var-init"),
    Oo = cc11001100_hook("Oo", {
      kb: cc11001100_hook("kb", a => a.callback, "object-key-init"),
      lb: cc11001100_hook("lb", (a, b) => ({
        __uspapiCall: {
          callId: cc11001100_hook("callId", b, "object-key-init"),
          command: cc11001100_hook("command", "getUSPData", "object-key-init"),
          version: cc11001100_hook("version", 1, "object-key-init")
        }
      }), "object-key-init"),
      nb: cc11001100_hook("nb", (a, b) => {
        b = cc11001100_hook("b", b.__uspapiReturn, "assign");
        a({
          consentData: cc11001100_hook("consentData", b.returnValue ?? void 0, "object-key-init"),
          cb: cc11001100_hook("cb", b.success ? void 0 : 2, "object-key-init")
        });
      }, "object-key-init")
    }, "var-init");
  function Po(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", {}, "var-init");
    "string" === typeof a.data ? b = cc11001100_hook("b", JSON.parse(a.data), "assign") : b = cc11001100_hook("b", a.data, "assign");
    return {
      payload: cc11001100_hook("payload", b, "object-key-init"),
      pb: cc11001100_hook("pb", b.__uspapiReturn.callId, "object-key-init")
    };
  }
  var Qo = cc11001100_hook("Qo", class extends $e {
    constructor() {
      super();
      this.caller = cc11001100_hook("this.caller", new Mo("__uspapiLocator", a => "function" === typeof a.__uspapi, Po), "assign");
      this.caller.B.set("getDataWithCallback", No);
      this.caller.v.set("getDataWithCallback", Oo);
    }
    h() {
      af(this.caller);
      super.h();
    }
    m() {
      return !!Lo(this.caller);
    }
  }, "var-init");
  var Ro = cc11001100_hook("Ro", $b(class extends I {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  const So = cc11001100_hook("So", (a, b) => {
      a = cc11001100_hook("a", a.googlefc || (a.googlefc = cc11001100_hook("a.googlefc", {}, "assign")), "assign");
      a.__fci = cc11001100_hook("a.__fci", a.__fci || [], "assign");
      a.__fci.push(b.command, c => {
        c = cc11001100_hook("c", Ro(c), "assign");
        b.callback({
          consentData: cc11001100_hook("consentData", c, "object-key-init")
        });
      });
    }, "var-init"),
    To = cc11001100_hook("To", {
      kb: cc11001100_hook("kb", a => a.callback, "object-key-init"),
      lb: cc11001100_hook("lb", (a, b) => ({
        __fciCall: {
          callId: cc11001100_hook("callId", b, "object-key-init"),
          command: cc11001100_hook("command", a.command, "object-key-init")
        }
      }), "object-key-init"),
      nb: cc11001100_hook("nb", (a, b) => {
        a({
          consentData: cc11001100_hook("consentData", b, "object-key-init")
        });
      }, "object-key-init")
    }, "var-init");
  function Uo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Ro(a.data.__fciReturn), "assign");
    return {
      payload: cc11001100_hook("payload", a, "object-key-init"),
      pb: cc11001100_hook("pb", t(a, 1), "object-key-init")
    };
  }
  var Vo = cc11001100_hook("Vo", class extends $e {
    constructor() {
      super();
      this.i = cc11001100_hook("this.i", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.caller = cc11001100_hook("this.caller", new Mo("googlefcPresent", void 0, Uo), "assign");
      this.caller.B.set("getDataWithCallback", So);
      this.caller.v.set("getDataWithCallback", To);
    }
    h() {
      af(this.caller);
      super.h();
    }
    m() {
      this.l || (this.i = cc11001100_hook("this.i", Lo(this.caller), "assign"), this.l = cc11001100_hook("this.l", !0, "assign"));
      return !!this.i;
    }
  }, "var-init");
  function Wo() {
    const a = cc11001100_hook("a", pd`(a=0)=>{let b;const c=class{};}`, "var-init");
    try {
      var b = cc11001100_hook("b", window, "var-init");
      const c = cc11001100_hook("c", a instanceof tc && a.constructor === tc ? a.h : "type_error:SafeScript", "var-init");
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
  var Xo = cc11001100_hook("Xo", a => {
    kc(window, "message", b => {
      let c;
      try {
        c = cc11001100_hook("c", JSON.parse(b.data), "assign");
      } catch (d) {
        return;
      }
      !c || "sc-cnf" !== c.googMsgType || a(c, b);
    });
  }, "var-init");
  var Yo = cc11001100_hook("Yo", class extends $e {
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
      (a = cc11001100_hook("a", "function" === typeof this.l?.__uspapi, "assign")) || (a = cc11001100_hook("a", this.i ? this.i : this.i = cc11001100_hook("this.i", Xc(this.l, "__uspapiLocator"), "assign"), "assign"), a = cc11001100_hook("a", null != a, "assign"));
      return a;
    }
  }, "var-init");
  var Zo = cc11001100_hook("Zo", class extends $e {
    constructor() {
      super();
      this.v = cc11001100_hook("this.v", L, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
    m() {
      if (!this.l) {
        if (!this.i) {
          var a = cc11001100_hook("a", Xc(this.v, "googlefcPresent"), "var-init");
          this.i = cc11001100_hook("this.i", a ? a : null, "assign");
        }
        this.l = cc11001100_hook("this.l", !0, "assign");
      }
      return !!this.i;
    }
  }, "var-init");
  let $o = cc11001100_hook("$o", null, "var-init");
  const ap = cc11001100_hook("ap", [], "var-init"),
    bp = cc11001100_hook("bp", new Map(), "var-init");
  let cp = cc11001100_hook("cp", -1, "var-init");
  function dp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return mi.test(a.className) && "done" !== a.dataset.adsbygoogleStatus;
  }
  function ep(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.dataset.adsbygoogleStatus = cc11001100_hook("a.dataset.adsbygoogleStatus", "done", "assign");
    fp(a, b, c);
  }
  function fp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", window, "var-init");
    d.google_spfd || (d.google_spfd = cc11001100_hook("d.google_spfd", Ko, "assign"));
    var e = cc11001100_hook("e", b.google_reactive_ads_config, "var-init");
    e || Ko(a, b, d, c);
    vo(d, b);
    if (!gp(a, b, d)) {
      e || (d.google_lpabyc = cc11001100_hook("d.google_lpabyc", Wh(a, d) + ei(a, d, "height", K), "assign"));
      if (e) {
        e = cc11001100_hook("e", e.page_level_pubvars || {}, "assign");
        if (X(L).page_contains_reactive_tag && !X(L).allow_second_reactive_tag) {
          if (e.pltais) {
            Kl(!1);
            return;
          }
          throw new U("Only one 'enable_page_level_ads' allowed per page.");
        }
        X(L).page_contains_reactive_tag = cc11001100_hook("X(L).page_contains_reactive_tag", !0, "assign");
        Kl(7 === e.google_pgb_reactive);
      }
      b.google_unique_id = cc11001100_hook("b.google_unique_id", qd(d), "assign");
      J(km, (f, g) => {
        b[g] = cc11001100_hook("b[g]", b[g] || d[g], "assign");
      });
      b.google_loader_used = cc11001100_hook("b.google_loader_used", "aa", "assign");
      b.google_reactive_tag_first = cc11001100_hook("b.google_reactive_tag_first", 1 === (X(L).first_tag_on_page || 0), "assign");
      Aj(164, () => {
        Co(d, b, a, c);
      });
    }
  }
  function gp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", b.google_reactive_ads_config, "var-init"),
      e = cc11001100_hook("e", "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className), "var-init"),
      f = cc11001100_hook("f", Il(c), "var-init");
    if (f && f.Ja && "on" !== b.google_adtest && !e) {
      e = cc11001100_hook("e", Wh(a, c), "assign");
      const g = cc11001100_hook("g", P(c).clientHeight, "var-init");
      e = cc11001100_hook("e", 0 == g ? null : e / g, "assign");
      if (!f.sa || f.sa && (e || 0) >= f.sa) return a.className += cc11001100_hook("a.className", " adsbygoogle-ablated-ad-slot", "assign"), c = cc11001100_hook("c", c.google_sv_map = cc11001100_hook("c.google_sv_map", c.google_sv_map || {}, "assign"), "assign"), d = cc11001100_hook("d", ea(a), "assign"), b.google_element_uid = cc11001100_hook("b.google_element_uid", d, "assign"), c[b.google_element_uid] = cc11001100_hook("c[b.google_element_uid]", b, "assign"), a.setAttribute("google_element_uid", String(d)), "slot" === f.wb && (null !== Wc(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Wc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = cc11001100_hook("a.style.width", "0px", "assign"), a.style.height = cc11001100_hook("a.style.height", "0px", "assign")), !0;
    }
    if ((f = cc11001100_hook("f", Nc(a, c), "assign")) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
    a = cc11001100_hook("a", null == b.google_pgb_reactive || 3 === b.google_pgb_reactive, "assign");
    return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0);
  }
  function hp(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", document.getElementsByTagName("INS"), "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b[d], "var-init"); d < b.length; e = cc11001100_hook("e", b[++d], "assign")) {
      var c = cc11001100_hook("c", e, "var-init");
      if (dp(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e;
    }
    return null;
  }
  function ip(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a && a.shift) {
      let d = cc11001100_hook("d", 20, "var-init");
      for (; 0 < a.length && 0 < d;) {
        try {
          jp(a.shift(), b, c);
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
        --d;
      }
    }
  }
  function kp() {
    const a = cc11001100_hook("a", Mc("INS"), "var-init");
    a.className = cc11001100_hook("a.className", "adsbygoogle", "assign");
    a.className += cc11001100_hook("a.className", " adsbygoogle-noablate", "assign");
    Zc(a, {
      display: cc11001100_hook("display", "none", "object-key-init")
    });
    return a;
  }
  function lp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init"),
      d = cc11001100_hook("d", Hl(), "var-init");
    J(xg, (g, h) => {
      !1 === a.enable_page_level_ads ? c[h] = cc11001100_hook("c[h]", !1, "assign") : a.hasOwnProperty(h) ? c[h] = cc11001100_hook("c[h]", a[h], "assign") : d.includes(g) && (c[h] = cc11001100_hook("c[h]", !1, "assign"));
    });
    da(a.enable_page_level_ads) && (c.page_level_pubvars = cc11001100_hook("c.page_level_pubvars", a.enable_page_level_ads, "assign"));
    const e = cc11001100_hook("e", kp(), "var-init");
    cd.body.appendChild(e);
    const f = cc11001100_hook("f", {
      google_reactive_ads_config: cc11001100_hook("google_reactive_ads_config", c, "object-key-init"),
      google_ad_client: cc11001100_hook("google_ad_client", a.google_ad_client, "object-key-init")
    }, "var-init");
    f.google_pause_ad_requests = cc11001100_hook("f.google_pause_ad_requests", !!X(L).pause_ad_requests, "assign");
    ep(e, f, b);
  }
  function mp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    yg(n).wasPlaTagProcessed = cc11001100_hook("yg(n).wasPlaTagProcessed", !0, "assign");
    const c = cc11001100_hook("c", () => lp(a, b), "var-init"),
      d = cc11001100_hook("d", n.document, "var-init");
    if (d.body || "complete" === d.readyState || "interactive" === d.readyState) lp(a, b);else {
      const e = cc11001100_hook("e", jc(V.qa(191, c)), "var-init");
      kc(d, "DOMContentLoaded", e);
      new n.MutationObserver((f, g) => {
        d.body && (e(), g.disconnect());
      }).observe(d, {
        childList: cc11001100_hook("childList", !0, "object-key-init"),
        subtree: cc11001100_hook("subtree", !0, "object-key-init")
      });
    }
  }
  function jp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", {}, "var-init");
    Aj(165, () => np(a, d, b, c), e => {
      e.client = cc11001100_hook("e.client", e.client || d.google_ad_client || a.google_ad_client, "assign");
      e.slotname = cc11001100_hook("e.slotname", e.slotname || d.google_ad_slot, "assign");
      e.tag_origin = cc11001100_hook("e.tag_origin", e.tag_origin || d.google_tag_origin, "assign");
    });
  }
  function op(a) {
    cc11001100_hook("a", a, "function-parameter");
    delete a.google_checked_head;
    J(a, (b, c) => {
      li[c] || (delete a[c], b = cc11001100_hook("b", c.replace("google", "data").replace(/_/g, "-"), "assign"), n.console.warn(`AdSense head tag doesn't support ${b} attribute.`));
    });
  }
  function pp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'), "var-init");
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = cc11001100_hook("d", X(window), "var-init");
      if (d.head_tag_slot_vars) qp(c);else {
        var e = cc11001100_hook("e", {}, "var-init");
        Io(c, e);
        op(e);
        var f = cc11001100_hook("f", pc(e), "var-init");
        d.head_tag_slot_vars = cc11001100_hook("d.head_tag_slot_vars", f, "assign");
        c = cc11001100_hook("c", {
          google_ad_client: cc11001100_hook("google_ad_client", e.google_ad_client, "object-key-init"),
          enable_page_level_ads: cc11001100_hook("enable_page_level_ads", e, "object-key-init")
        }, "assign");
        L.adsbygoogle || (L.adsbygoogle = cc11001100_hook("L.adsbygoogle", [], "assign"));
        d = cc11001100_hook("d", L.adsbygoogle, "assign");
        d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
        e.google_adbreak_test || b.l()?.l() && T(ph) ? rp(f, a) : Xo(() => {
          rp(f, a);
        });
      }
    }
  }
  function qp(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", X(window).head_tag_slot_vars, "var-init"),
      c = cc11001100_hook("c", a.getAttribute("src") || "", "var-init");
    if ((a = cc11001100_hook("a", Ic(c, "client") || a.getAttribute("data-ad-client") || "", "assign")) && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
  }
  function sp(a) {
    cc11001100_hook("a", a, "function-parameter");
    if ("object" === typeof a && null != a) {
      if ("string" === typeof a.type) return 2;
      if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3;
    }
    return 0;
  }
  function np(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null == a) throw new U("push() called with no parameters.");
    d.m() && tp(a, d.i().i(), F(d, 2));
    var e = cc11001100_hook("e", sp(a), "var-init");
    if (0 !== e) d = cc11001100_hook("d", Ll(), "assign"), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = cc11001100_hook("d.first_slotcar_request_processing_time", Date.now(), "assign"), d.adsbygoogle_execution_start_time = cc11001100_hook("d.adsbygoogle_execution_start_time", pa, "assign")), null == $o ? (up(a), ap.push(a)) : 3 === e ? Aj(787, () => {
      $o.handleAdConfig(a);
    }) : Cj(730, $o.handleAdBreak(a));else {
      pa = cc11001100_hook("pa", new Date().getTime(), "assign");
      wo(c, d, vp(a));
      wp();
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
      if (e) xp(a, d);else if ((e = cc11001100_hook("e", a.params, "assign")) && J(e, (g, h) => {
        b[h] = cc11001100_hook("b[h]", g, "assign");
      }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");else {
        e = cc11001100_hook("e", yp(a.element), "assign");
        Io(e, b);
        c = cc11001100_hook("c", X(n).head_tag_slot_vars || {}, "assign");
        J(c, (g, h) => {
          b.hasOwnProperty(h) || (b[h] = cc11001100_hook("b[h]", g, "assign"));
        });
        if (e.hasAttribute("data-require-head") && !X(n).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
        if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
        var f = cc11001100_hook("f", (c = cc11001100_hook("c", 0 === (X(L).first_tag_on_page || 0) && em(b), "assign")) && fm(c), "var-init");
        c && (f || (xp(c, d), X(L).skip_next_reactive_tag = cc11001100_hook("X(L).skip_next_reactive_tag", !0, "assign")), f && zp(c));
        0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = cc11001100_hook("X(L).first_tag_on_page", 2, "assign"));
        b.google_pause_ad_requests = cc11001100_hook("b.google_pause_ad_requests", !!X(L).pause_ad_requests, "assign");
        ep(e, b, d);
      }
    }
  }
  let Ap = cc11001100_hook("Ap", !1, "var-init");
  function tp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Ap || (Ap = cc11001100_hook("Ap", !0, "assign"), a = cc11001100_hook("a", vp(a) || om(L), "assign"), Bj("predictive_abg", {
      a_c: cc11001100_hook("a_c", a, "object-key-init"),
      p_c: cc11001100_hook("p_c", b.join(), "object-key-init"),
      b_v: cc11001100_hook("b_v", c, "object-key-init")
    }, .01));
  }
  function vp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.google_ad_client ? a.google_ad_client : (a = cc11001100_hook("a", a.params, "assign")) && a.google_ad_client ? a.google_ad_client : "";
  }
  function wp() {
    if (T(dh)) {
      var a = cc11001100_hook("a", Il(L), "var-init");
      if (!(a = cc11001100_hook("a", a && a.Ja, "assign"))) {
        try {
          var b = cc11001100_hook("b", L.localStorage, "var-init");
        } catch (c) {
          b = cc11001100_hook("b", null, "assign");
        }
        b = cc11001100_hook("b", b ? fl(b) : null, "assign");
        a = cc11001100_hook("a", !(b && el(b) && b), "assign");
      }
      a || Jl(L, 1);
    }
  }
  function zp(a) {
    cc11001100_hook("a", a, "function-parameter");
    ed(() => {
      yg(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a);
    });
  }
  function xp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (X(L).skip_next_reactive_tag) X(L).skip_next_reactive_tag = cc11001100_hook("X(L).skip_next_reactive_tag", !1, "assign");else {
      0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = cc11001100_hook("X(L).first_tag_on_page", 1, "assign"));
      if (a.tag_partner) {
        var c = cc11001100_hook("c", a.tag_partner, "var-init");
        const d = cc11001100_hook("d", X(n), "var-init");
        d.tag_partners = cc11001100_hook("d.tag_partners", d.tag_partners || [], "assign");
        d.tag_partners.push(c);
      }
      im(a, b);
      mp(a, b);
    }
  }
  function yp(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a) {
      if (!dp(a) && (a.id ? a = cc11001100_hook("a", hp(a.id), "assign") : a = cc11001100_hook("a", null, "assign"), !a)) throw new U("'element' has already been filled.");
      if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
    } else if (a = cc11001100_hook("a", hp(), "assign"), !a) throw new U("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
    return a;
  }
  function Bp() {
    const a = cc11001100_hook("a", new Wj(L), "var-init"),
      b = cc11001100_hook("b", T(vh) ? new Qo() : new Yo(), "var-init"),
      c = cc11001100_hook("c", T(uh) ? new Vo() : new Zo(), "var-init");
    Bj("cmpMet", {
      tcfv1: cc11001100_hook("tcfv1", L.__cmp ? 1 : 0, "object-key-init"),
      tcfv2: cc11001100_hook("tcfv2", Tj(a) ? 1 : 0, "object-key-init"),
      usp: cc11001100_hook("usp", b.m() ? 1 : 0, "object-key-init"),
      fc: cc11001100_hook("fc", c.m() ? 1 : 0, "object-key-init"),
      ptt: cc11001100_hook("ptt", 9, "object-key-init")
    }, .001);
  }
  function Cp(a) {
    cc11001100_hook("a", a, "function-parameter");
    Fj().S[Ij(26)] = cc11001100_hook("Fj().S[Ij(26)]", !!Number(a), "assign");
  }
  function Dp(a) {
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
  function Ep(a) {
    cc11001100_hook("a", a, "function-parameter");
    Bj("adsenseGfpKnob", {
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
  function Fp(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      Object.defineProperty(a, "requestNonPersonalizedAds", {
        set: cc11001100_hook("set", Cp, "object-key-init")
      }), Object.defineProperty(a, "pauseAdRequests", {
        set: cc11001100_hook("set", Dp, "object-key-init")
      }), Object.defineProperty(a, "cookieOptions", {
        set: cc11001100_hook("set", Ep, "object-key-init")
      }), Object.defineProperty(a, "onload", {
        set: cc11001100_hook("set", Gp, "object-key-init")
      });
    } catch {}
  }
  function Gp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && a.call && "function" === typeof a && window.setTimeout(a, 0);
  }
  function rp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", dm(wc(b.vb, Lh() ? {
      bust: cc11001100_hook("bust", Lh(), "object-key-init")
    } : {})).then(c => {
      null == $o && (c.init(a), $o = cc11001100_hook("$o", c, "assign"), Hp());
    }), "assign");
    V.ca(723, b);
    b.finally(() => {
      ap.length = cc11001100_hook("ap.length", 0, "assign");
      Bj("slotcar", {
        event: cc11001100_hook("event", "api_ld", "object-key-init"),
        time: cc11001100_hook("time", Date.now() - pa, "object-key-init"),
        time_pr: cc11001100_hook("time_pr", Date.now() - cp, "object-key-init")
      });
    });
  }
  function Hp() {
    for (const [b, c] of bp) {
      var a = cc11001100_hook("a", b, "var-init");
      const d = cc11001100_hook("d", c, "var-init");
      -1 !== d && (n.clearTimeout(d), bp.delete(a));
    }
    for (a = cc11001100_hook("a", 0, "assign"); a < ap.length; a++) {
      if (bp.has(a)) continue;
      const b = cc11001100_hook("b", ap[a], "var-init"),
        c = cc11001100_hook("c", sp(b), "var-init");
      Aj(723, () => {
        if (3 === c) $o.handleAdConfig(b);else if (2 === c) {
          var d = cc11001100_hook("d", $o.handleAdBreakBeforeReady(b), "var-init");
          V.ca(730, d);
        }
      });
    }
  }
  function up(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", ap.length, "var-init");
    if (2 === sp(a) && "preroll" === a.type && null != a.adBreakDone) {
      -1 === cp && (cp = cc11001100_hook("cp", Date.now(), "assign"));
      var c = cc11001100_hook("c", n.setTimeout(() => {
        try {
          (0, a.adBreakDone)({
            breakType: cc11001100_hook("breakType", "preroll", "object-key-init"),
            breakName: cc11001100_hook("breakName", a.name, "object-key-init"),
            breakFormat: cc11001100_hook("breakFormat", "preroll", "object-key-init"),
            breakStatus: cc11001100_hook("breakStatus", "timeout", "object-key-init")
          }), bp.set(b, -1), Bj("slotcar", {
            event: cc11001100_hook("event", "pr_to", "object-key-init"),
            source: cc11001100_hook("source", "adsbygoogle", "object-key-init")
          });
        } catch (d) {
          console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)));
        }
      }, 1E3 * Kh(qh)), "var-init");
      bp.set(b, c);
    }
  }
  ;
  (function (a, b, c, d = () => {}) {
    V.Ra(Dj);
    Aj(166, () => {
      const e = cc11001100_hook("e", Mn(b), "var-init");
      Kn(e);
      d();
      ld(16, [1, e.toJSON()]);
      var f = cc11001100_hook("f", nd(md(L)) || L, "var-init");
      const g = cc11001100_hook("g", c(Ln({
        ab: cc11001100_hook("ab", a, "object-key-init"),
        rb: cc11001100_hook("rb", F(e, 2), "object-key-init")
      }), e), "var-init");
      zl(f, e);
      Ym(f, e, null === L.document.currentScript ? 1 : ym(g.xb));
      Cj(1086, um());
      if (!Da() || 0 <= ra(Ja(), 11)) {
        zj(T(th));
        Go();
        Qk();
        try {
          ao();
        } catch {}
        Fo();
        pp(g, e);
        f = cc11001100_hook("f", window, "assign");
        var h = cc11001100_hook("h", f.adsbygoogle, "var-init");
        if (!h || !h.loaded) {
          Bj("new_abg_tag", {
            value: cc11001100_hook("value", `${G(e, 16)}`, "object-key-init"),
            host_v: cc11001100_hook("host_v", `${G(e, 22)}`, "object-key-init"),
            frequency: cc11001100_hook("frequency", .01, "object-key-init")
          }, .01);
          Bp();
          var k = cc11001100_hook("k", {
            push: cc11001100_hook("push", v => {
              jp(v, g, e);
            }, "object-key-init"),
            loaded: cc11001100_hook("loaded", !0, "object-key-init")
          }, "var-init");
          Fp(k);
          if (h) for (var l of ["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]) void 0 !== h[l] && (k[l] = cc11001100_hook("k[l]", h[l], "assign"));
          "_gfp_a_" in window || (window._gfp_a_ = cc11001100_hook("window._gfp_a_", !0, "assign"));
          ip(h, g, e);
          f.adsbygoogle = cc11001100_hook("f.adsbygoogle", k, "assign");
          h && (k.onload = cc11001100_hook("k.onload", h.onload, "assign"));
          (l = cc11001100_hook("l", Bo(g), "assign")) && document.documentElement.appendChild(l);
          var {
            supports: m,
            error: u
          } = cc11001100_hook("", Wo(), "var-init");
          Bj("modern_js", {
            fy: cc11001100_hook("fy", D(t(e, 1), 0), "object-key-init"),
            supports: cc11001100_hook("supports", String(m), "object-key-init"),
            c: cc11001100_hook("c", 2021, "object-key-init"),
            e: cc11001100_hook("e", u, "object-key-init")
          }, .01);
        }
      }
    });
  })("m202302230101", "undefined" === typeof sttc ? void 0 : sttc, function (a, b) {
    const c = cc11001100_hook("c", 2012 < D(t(b, 1), 0) ? `_fy${D(t(b, 1), 0)}` : "", "var-init");
    var d = cc11001100_hook("d", F(b, 3), "var-init");
    const e = cc11001100_hook("e", F(b, 2), "var-init");
    b = cc11001100_hook("b", od`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`, "assign");
    d = cc11001100_hook("d", od`https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`, "assign");
    return {
      vb: cc11001100_hook("vb", b, "object-key-init"),
      tb: cc11001100_hook("tb", od`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`, "object-key-init"),
      sb: cc11001100_hook("sb", od`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`, "object-key-init"),
      ac: cc11001100_hook("ac", od`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`, "object-key-init"),
      zb: cc11001100_hook("zb", d, "object-key-init"),
      xb: cc11001100_hook("xb", /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/, "object-key-init")
    };
  });
}).call(this, "[2021,\"r20230301\",\"r20190131\",null,null,null,null,\".google.cn\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1234,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1232,null,null,[1]],[1225,null,null,[1]],[1228,null,null,[1]],[1190,null,null,[1]],[null,508040914,null,[null,100]],[null,1114,null,[null,1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[10004,null,null,[1]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[1033,null,null,[1]],[506738119,null,null,[1]],[null,null,null,[null,null,null,[\"Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv\/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[1971,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,501545963,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[505942137,null,null,[1]],[null,501545962,null,[null,1]],[null,495583959,null,[null,-1]],[null,45388309,null,[null,-1]],[null,1116,null,[null,300]],[null,1112,null,[null,5]],[1203,null,null,[1]],[501545959,null,null,[1]],[500169372,null,null,[1]],[504834127,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]],[null,469675170,null,[null,30000]],[50227136,null,null,[1]],[485990406,null,null,[]],[501411886,null,null,[1]]],[[10,[[50,[[31071642],[31071643,[[1216,null,null,[1]]]]],null,72],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44767166],[44767167]]],[10,[[44782466],[44782467,[[1160,null,null,[1]]]],[44782468,[[1226,null,null,[1]],[1160,null,null,[1]]]]]],[50,[[31071869],[31071870,[[1215,null,null,[1]]]]],null,72],[10,[[31071258],[31071259]]],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[1000,[[31072568,[[null,null,14,[null,null,\"31072568\"]]],[6,null,null,null,6,null,\"31072568\"]],[31072569,[[null,null,14,[null,null,\"31072569\"]]],[6,null,null,null,6,null,\"31072569\"]]],[4,null,55],63],[1000,[[31072620,[[null,null,14,[null,null,\"31072620\"]]],[6,null,null,null,6,null,\"31072620\"]],[31072621,[[null,null,14,[null,null,\"31072621\"]]],[6,null,null,null,6,null,\"31072621\"]]],[4,null,55],63],[1000,[[31072648,[[null,null,14,[null,null,\"31072648\"]]],[6,null,null,null,6,null,\"31072648\"]],[31072649,[[null,null,14,[null,null,\"31072649\"]]],[6,null,null,null,6,null,\"31072649\"]]],[4,null,55],63],[1000,[[31072714,[[null,null,14,[null,null,\"31072714\"]]],[6,null,null,null,6,null,\"31072714\"]],[31072715,[[null,null,14,[null,null,\"31072715\"]]],[6,null,null,null,6,null,\"31072715\"]]],[4,null,55],63],[100,[[31072726],[31072727,[[504535903,null,null,[1]]]]]],[100,[[31072730],[31072731,[[505942137,null,null,[]]]]]],[1000,[[31072741,[[null,null,14,[null,null,\"31072741\"]]],[6,null,null,null,6,null,\"31072741\"]],[31072742,[[null,null,14,[null,null,\"31072742\"]]],[6,null,null,null,6,null,\"31072742\"]]],[4,null,55],63],[1000,[[31072787,[[null,null,14,[null,null,\"31072787\"]]],[6,null,null,null,6,null,\"31072787\"]],[31072788,[[null,null,14,[null,null,\"31072788\"]]],[6,null,null,null,6,null,\"31072788\"]]],[4,null,55],63],[10,[[31072791],[31072792,[[502896280,null,null,[1]]]]]],[1000,[[31072821,[[null,null,14,[null,null,\"31072821\"]]],[6,null,null,null,6,null,\"31072821\"]],[31072822,[[null,null,14,[null,null,\"31072822\"]]],[6,null,null,null,6,null,\"31072822\"]]],[4,null,55],63],[10,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,54],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[1,[[44774293,[[1147,null,null,[1]]]],[44774605,[[1147,null,null,[1]]]],[44776415]],null,54],[1,[[44779343],[44779344,[[1147,null,null,[1]]]]],null,54],[10,[[44784140],[44784141,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44784142,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,54],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44779109],[44779906],[44784478],[44785149]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69]]],[17,[[null,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[10,[[31071260]]],[10,[[31071261],[31071262],[31071263],[31071264]],null,null,null,44,22],[10,[[31071265],[31071266]],null,null,null,44,null,500],[10,[[31071267]],null,null,null,44,null,900],[10,[[31071268],[31071269]],null,null,null,null,null,null,null,101],[1,[[31072412,[[null,1103,null,[null,31072412]],[1121,null,null,[1]]]],[31072413,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072413]],[1121,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,117,1],[20,[[31072414,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072414]]]],[31072415,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072415]],[471262996,null,null,[1]]]]],[4,null,55],null,null,null,null,2,null,117,1],[10,[[31072416,[[null,1103,null,[null,31072416]]]],[31072417,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1103,null,[null,31072417]],[501545959,null,null,[]]]],[31072418,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072418]]]]],[4,null,55],null,null,null,null,42,null,117,1],[10,[[31072421,[[null,1103,null,[null,31072421]]]],[31072422,[[501545960,null,null,[1]],[1120,null,null,[1]],[1162,null,null,[1]],[null,1103,null,[null,31072422]],[501545959,null,null,[]]]],[31072423,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,31072423]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,192,null,117,1],[1,[[31072506,[[null,1103,null,[null,31072506]]]],[31072507,[[501545960,null,null,[1]],[1120,null,null,[1]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[null,1103,null,[null,31072507]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]],[501545959,null,null,[]]]],[31072508,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072508]],[491815314,null,null,[1]]]],[31072509,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,31072509]],[null,1116,null,[null,50]],[491815314,null,null,[1]]]],[31072510,[[501545960,null,null,[1]],[1120,null,null,[1]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[null,1103,null,[null,31072510]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]]]]],[4,null,55],null,null,null,null,372,null,117,1],[10,[[44784438,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,44784438]],[null,1116,null,[null,50]]]],[44784439,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,44784439]],[45388034,null,null,[1]],[null,45388309,null,[null,30]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,282,null,117,1],[10,[[44785530,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,44785530]]]],[44785531,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,506871937,null,[null,44785531]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,332,null,117,1],[10,[[44785538,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,44785538]],[null,1116,null,[null,50]]]],[44785539,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[null,506871937,null,[null,44785539]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1116,null,[null,50]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,352,null,117,1]]],[11,[[null,[[31072315],[31072316,[[483374575,null,null,[1]]]]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[50,[[31071662],[31071663,[[1974,null,null,[1]]]]]],[50,[[31071975],[31071976,[[1975,null,null,[1]]]]]],[null,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[31070383,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]],[31070384,[[439828594,null,null,[1]]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[31070594],[31070595,[[439828594,null,null,[1]],[483962503,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[10,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[200,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[null,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44783617,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44784847,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[20,[[1000,[[31070530,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070531,null,[2,[[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]],[4,null,8,null,null,null,null,[\"credentialless\"]]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070532,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]]],null,null,[null,\"1000\",1,\"1000\"]],[1,[null,[null,null,[[[null,null,null,null,null,null,\"DIV.mrc-content-wrap\\u003eP\"],[]],[[null,4,null,null,null,null,\"DIV#click-tab\\u003eUL#click-tab-con\\u003eLI\\u003eDIV.module-box\\u003eDIV.module-body\\u003eDIV\"],[]],[[null,null,null,null,null,null,\"DIV.klg-main-area\\u003eDIV.module-box.discuss-topic\\u003eDIV.post-topic-main.img-view\\u003eDIV.markdown-body.editormd-html-preview.mrc\\u003eDIV.post-topic-des.nc-post-content\"],[null,null,null,null,null,null,\"P,UL\"]],[[null,1,null,null,null,null,\"LI.show\\u003eDIV.module-box\\u003eDIV.module-body\\u003eDIV\"],[]],[[null,0,null,null,null,null,\"DIV.mrc-content-wrap\\u003eP\"],[]],[[null,4,null,null,null,null,\"DIV.mrc-content-wrap\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,0,null,null,null,null,\"LI.show\\u003eDIV.module-box\\u003eDIV.module-body\\u003eDIV\"],[]],[[null,0,null,null,null,null,\"DIV.klg-main-area\\u003eDIV.module-box.discuss-topic\\u003eDIV.post-topic-main.img-view\\u003eDIV.markdown-body.editormd-html-preview.mrc\\u003eDIV.post-topic-des.nc-post-content\\u003eP\"],[]],[[null,1,null,null,null,null,\"DIV.mrc-content-wrap\\u003eP\"],[]]]]]],null,\"31072741\",1,\"www.saoniuhuo.com\",612106950,[44759876,44759927,44777876,44759837]]");