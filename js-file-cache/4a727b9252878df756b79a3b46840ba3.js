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
    const c = cc11001100_hook("c", r(a), "var-init");
    (c & b) !== b && (Object.isFrozen(a) && (a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign")), eb(a, c | b));
    return a;
  }
  function fb(a, b) {
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
  var ob = cc11001100_hook("ob", Object.freeze(eb([], 23)), "var-init");
  function pb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (r(a.u) & 2) throw Error();
  }
  function qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && mb(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
  function rb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", r(a), "var-init");
    let d = cc11001100_hook("d", c, "var-init");
    0 === d && (d |= cc11001100_hook("d", b & 16, "assign"));
    d |= cc11001100_hook("d", b & 2, "assign");
    d !== c && eb(a, d);
  }
  ;
  function sb(a) {
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
    pb(a);
    return z(a, b, c, d);
  }
  function z(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.v && (a.v = cc11001100_hook("a.v", void 0, "assign"));
    if (b >= a.j || d) return sb(a)[b] = cc11001100_hook("sb(a)[b]", c, "assign"), a;
    a.u[b + a.V] = cc11001100_hook("a.u[b + a.V]", c, "assign");
    (c = cc11001100_hook("c", a.H, "assign")) && b in c && delete c[b];
    return a;
  }
  function tb(a, b, c, d, e) {
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
  function ub(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return tb(a, b, 0, c, hb(a.u));
  }
  function vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", t(a, b), "assign");
    return null == a ? a : !!a;
  }
  function wb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", hb(a.u), "var-init");
    let d = cc11001100_hook("d", tb(a, b, 1, !1, c), "var-init"),
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
  function xb(a, b, c) {
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
    pb(a);
    c !== d ? z(a, b, c) : z(a, b, void 0, !1);
    return a;
  }
  function yb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    pb(a);
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
      null == e || "object" !== typeof e || (f = cc11001100_hook("f", Array.isArray(e), "assign")) || e.va !== lb ? f ? (rb(e, r(a.u)), b = cc11001100_hook("b", new b(e), "assign")) : b = cc11001100_hook("b", void 0, "assign") : b = cc11001100_hook("b", e, "assign");
    }
    b !== e && null != b && z(a, c, b, d);
    return b;
  }
  function B(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", Bb(a, b, c, !1), "assign");
    if (null == b) return b;
    if (!hb(a.u)) {
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
      h = cc11001100_hook("h", tb(a, c, 3, void 0, f), "var-init");
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
        Array.isArray(m) ? (rb(m, k), m = cc11001100_hook("m", new u(m), "assign")) : m = cc11001100_hook("m", void 0, "assign");
        void 0 !== m && (e = cc11001100_hook("e", e || !!(2 & r(m.u)), "assign"), g.push(m));
      }
      a.h[c] = cc11001100_hook("a.h[c]", g, "assign");
      k = cc11001100_hook("k", r(l), "assign");
      b = cc11001100_hook("b", k | 33, "assign");
      b = cc11001100_hook("b", e ? b & -9 : b | 8, "assign");
      k != b && (e = cc11001100_hook("e", l, "assign"), Object.isFrozen(e) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign")), eb(e, b), l = cc11001100_hook("l", e, "assign"));
      v !== l && z(a, c, l);
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
    b = cc11001100_hook("b", Db(a, b, c, e, d), "assign");
    a = cc11001100_hook("a", tb(a, c, 3, void 0, e), "assign");
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
    pb(a);
    null == c && (c = cc11001100_hook("c", void 0, "assign"));
    return z(a, b, c);
  }
  function Fb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    pb(a);
    null == d && (d = cc11001100_hook("d", void 0, "assign"));
    return yb(a, b, c, d);
  }
  function Gb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    pb(a);
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
    return D(vb(a, b), c);
  }
  function Hb(a, b) {
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
  function Ib(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return B(a, b, Ab(a, d, c));
  }
  ;
  let Jb;
  function Kb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Jb = cc11001100_hook("Jb", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    Jb = cc11001100_hook("Jb", void 0, "assign");
    return a;
  }
  ;
  function Lb(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (r(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), qb(a), a;
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
  function Mb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", Nb(a, b, c, void 0 !== d), "assign");else if (mb(a)) {
        const e = cc11001100_hook("e", {}, "var-init");
        for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = cc11001100_hook("e[f]", Mb(a[f], b, c, d), "assign"));
        a = cc11001100_hook("a", e, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function Nb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", r(a), "var-init");
    d = cc11001100_hook("d", d ? !!(e & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) a[f] = cc11001100_hook("a[f]", Mb(a[f], b, c, d), "assign");
    c(e, a);
    return a;
  }
  function Ob(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.va === lb ? a.toJSON() : Lb(a);
  }
  function Pb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && qb(b);
  }
  ;
  function Qb(a, b, c = kb) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if ($a && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = cc11001100_hook("d", r(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return eb(a, d | 18), a;
        a = cc11001100_hook("a", Nb(a, Qb, d & 4 ? kb : c, !0), "assign");
        b = cc11001100_hook("b", r(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.va === lb ? Rb(a) : a;
    }
  }
  function Sb(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    (a = cc11001100_hook("a", a.h && a.h[c], "assign")) ? (d = cc11001100_hook("d", r(a), "assign"), d & 2 ? d = cc11001100_hook("d", a, "assign") : (f = cc11001100_hook("f", Na(a, Rb), "assign"), kb(d, f), Object.freeze(f), d = cc11001100_hook("d", f, "assign")), Gb(b, c, d, e)) : x(b, c, Qb(d, f, g), e);
  }
  function Rb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (hb(a.u)) return a;
    a = cc11001100_hook("a", Tb(a, !0), "assign");
    cb(a.u, 18);
    return a;
  }
  function Tb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.u, "var-init");
    var d = cc11001100_hook("d", ib([]), "var-init"),
      e = cc11001100_hook("e", a.constructor.messageId, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.H, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (r(c) & 128) && qb(d);
    b = cc11001100_hook("b", b || hb(a.u) ? kb : jb, "assign");
    d = cc11001100_hook("d", Kb(a.constructor, d), "assign");
    a.Na && (d.Na = cc11001100_hook("d.Na", a.Na.slice(), "assign"));
    f = cc11001100_hook("f", !!(r(c) & 16), "assign");
    const g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Sb(a, d, h - a.V, c[h], !1, f, b);
    if (e) for (const h in e) Sb(a, d, +h, e[h], !0, f, b);
    return d;
  }
  function Cb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!hb(a.u)) return a;
    const b = cc11001100_hook("b", Tb(a, !1), "var-init");
    b.v = cc11001100_hook("b.v", a, "assign");
    return b;
  }
  ;
  var I = cc11001100_hook("I", class {
    constructor(a, b, c) {
      null == a && (a = cc11001100_hook("a", Jb, "assign"));
      Jb = cc11001100_hook("Jb", void 0, "assign");
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
        if (f && (f = cc11001100_hook("f", this.u[d], "assign"), mb(f))) {
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
          g ? Ub(g, b) : a[f] = cc11001100_hook("a[f]", ob, "assign");
        } else h || (h = cc11001100_hook("h", sb(this), "assign")), (g = cc11001100_hook("g", h[f], "assign")) ? Ub(g, b) : h[f] = cc11001100_hook("h[f]", ob, "assign");
      }
    }
    toJSON() {
      const a = cc11001100_hook("a", this.u, "var-init");
      return nb ? a : Nb(a, Ob, Pb);
    }
  }, "var-init");
  function Ub(a, b) {
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
  function Vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Lb(b);
  }
  ;
  const Wb = cc11001100_hook("Wb", a => null !== a && void 0 !== a, "var-init");
  let Xb = cc11001100_hook("Xb", void 0, "var-init");
  function Yb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Xb, "var-init");
    Xb = cc11001100_hook("Xb", void 0, "assign");
    if (!b(a)) throw b = cc11001100_hook("b", c ? c() + "\n" : "", "assign"), Error(b + String(a));
  }
  ;
  function Zb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", Kb(a, ib(b)), "assign");
      }
      return b;
    };
  }
  ;
  var $b = cc11001100_hook("$b", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var cc = cc11001100_hook("cc", class extends I {
      constructor(a) {
        super(a, -1, bc);
      }
    }, "var-init"),
    bc = cc11001100_hook("bc", [2, 3], "var-init");
  function dc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.i = cc11001100_hook("this.i", a === ec && b || "", "assign");
    this.h = cc11001100_hook("this.h", fc, "assign");
  }
  var fc = cc11001100_hook("fc", {}, "var-init"),
    ec = cc11001100_hook("ec", {}, "var-init");
  function gc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function hc(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", !1, "var-init"),
      c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }
  function ic(a) {
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
  function jc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function kc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1;
  }
  ;
  function lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = cc11001100_hook("c[d]", a[d], "assign"));
    return c;
  }
  function mc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function nc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    let c = cc11001100_hook("c", 0, "var-init");
    for (const d in a) b[c++] = cc11001100_hook("b[c++]", a[d], "assign");
    return b;
  }
  function oc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    for (const c in a) b[c] = cc11001100_hook("b[c]", a[c], "assign");
    return b;
  }
  ;
  var pc;
  function qc() {
    if (void 0 === pc) {
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
        pc = cc11001100_hook("pc", a, "assign");
      } else pc = cc11001100_hook("pc", a, "assign");
    }
    return pc;
  }
  ;
  const rc = cc11001100_hook("rc", {}, "var-init");
  class sc {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", b === rc ? a : "", "assign");
    }
    toString() {
      return this.h.toString();
    }
  }
  ;
  var uc = cc11001100_hook("uc", class {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", b === tc ? a : "", "assign");
    }
    toString() {
      return this.h + "";
    }
  }, "var-init");
  function vc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", wc.exec(xc(a).toString()), "assign");
    var c = cc11001100_hook("c", a[3] || "", "var-init");
    return yc(a[1] + zc("?", a[2] || "", b) + zc("#", c));
  }
  function xc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof uc && a.constructor === uc ? a.h : "type_error:TrustedResourceUrl";
  }
  var wc = cc11001100_hook("wc", /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, "var-init"),
    tc = cc11001100_hook("tc", {}, "var-init");
  function yc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", qc(), "var-init");
    a = cc11001100_hook("a", b ? b.createScriptURL(a) : a, "assign");
    return new uc(a, tc);
  }
  function zc(a, b, c) {
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
  function Ac(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  ;
  function Bc(a, b, c) {
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
  function Cc(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a || n.document || document, "assign");
  }
  Cc.prototype.getElementsByTagName = cc11001100_hook("Cc.prototype.getElementsByTagName", function (a, b) {
    return (b || this.h).getElementsByTagName(String(a));
  }, "assign");
  Cc.prototype.createElement = cc11001100_hook("Cc.prototype.createElement", function (a) {
    var b = cc11001100_hook("b", this.h, "var-init");
    a = cc11001100_hook("a", String(a), "assign");
    "application/xhtml+xml" === b.contentType && (a = cc11001100_hook("a", a.toLowerCase(), "assign"));
    return b.createElement(a);
  }, "assign");
  Cc.prototype.createTextNode = cc11001100_hook("Cc.prototype.createTextNode", function (a) {
    return this.h.createTextNode(String(a));
  }, "assign");
  Cc.prototype.append = cc11001100_hook("Cc.prototype.append", function (a, b) {
    Bc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
  }, "assign");
  Cc.prototype.contains = cc11001100_hook("Cc.prototype.contains", function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }, "assign");
  function Dc() {
    return ta && za ? za.mobile : !Ec() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"));
  }
  function Ec() {
    return ta && za ? !za.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk");
  }
  ;
  var Fc = cc11001100_hook("Fc", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init"),
    Gc = cc11001100_hook("Gc", /#|$/, "var-init");
  function Hc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.search(Gc), "var-init");
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
  function Ic(a) {
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
  function Jc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Ic(a.top) ? a.top : null;
  }
  function Kc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Lc("SCRIPT", a), "var-init");
    c.src = cc11001100_hook("c.src", xc(b), "assign");
    (b = cc11001100_hook("b", (b = cc11001100_hook("b", (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]"), "assign")) ? b.nonce || b.getAttribute("nonce") || "" : "", "assign")) && c.setAttribute("nonce", b);
    return (a = cc11001100_hook("a", a.getElementsByTagName("script")[0], "assign")) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null;
  }
  function Mc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Nc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!Oc() && !Pc()) {
      let c = cc11001100_hook("c", Math.random(), "var-init");
      if (c < b) return c = cc11001100_hook("c", Qc(), "assign"), a[Math.floor(c * a.length)];
    }
    return null;
  }
  function Qc() {
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
  function Rc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.length, "var-init");
    if (0 == b) return 0;
    let c = cc11001100_hook("c", 305419896, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c ^= cc11001100_hook("c", (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295, "assign");
    return 0 < c ? c : 4294967296 + c;
  }
  var Pc = cc11001100_hook("Pc", hc(() => Oa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Sc) || 1E-4 > Math.random()), "var-init"),
    Oc = cc11001100_hook("Oc", hc(() => -1 != wa().indexOf("MSIE")), "var-init");
  const Sc = cc11001100_hook("Sc", a => -1 != wa().indexOf(a), "var-init");
  var Tc = cc11001100_hook("Tc", /^([0-9.]+)px$/, "var-init"),
    Uc = cc11001100_hook("Uc", /^(-?[0-9.]{1,30})$/, "var-init");
  function Vc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Uc.test(a)) return null;
    a = cc11001100_hook("a", Number(a), "assign");
    return isNaN(a) ? null : a;
  }
  function K(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Tc.exec(a), "assign")) ? +a[1] : null;
  }
  var Wc = cc11001100_hook("Wc", (a, b) => {
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
    Xc = cc11001100_hook("Xc", hc(() => Dc() ? 2 : Ec() ? 1 : 0), "var-init"),
    Yc = cc11001100_hook("Yc", (a, b) => {
      J(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    }, "var-init");
  let Zc = cc11001100_hook("Zc", [], "var-init");
  const $c = cc11001100_hook("$c", () => {
    const a = cc11001100_hook("a", Zc, "var-init");
    Zc = cc11001100_hook("Zc", [], "assign");
    for (const b of a) try {
      b();
    } catch {}
  }, "var-init");
  var ad = cc11001100_hook("ad", a => {
      if ("number" !== typeof a.goog_pvsid) try {
        Object.defineProperty(a, "goog_pvsid", {
          value: cc11001100_hook("value", Math.floor(Math.random() * 2 ** 52), "object-key-init"),
          configurable: cc11001100_hook("configurable", !1, "object-key-init")
        });
      } catch (b) {}
      return Number(a.goog_pvsid) || -1;
    }, "var-init"),
    cd = cc11001100_hook("cd", a => {
      var b = cc11001100_hook("b", bd, "var-init");
      "complete" === b.readyState || "interactive" === b.readyState ? (Zc.push(a), 1 == Zc.length && (window.Promise ? Promise.resolve().then($c) : window.setImmediate ? setImmediate($c) : setTimeout($c, 0))) : b.addEventListener("DOMContentLoaded", a);
    }, "var-init");
  function Lc(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return b.createElement(String(a).toLowerCase());
  }
  ;
  function ed(a, b, c = null, d = !1, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    fd(a, b, c, d, e);
  }
  function fd(a, b, c, d, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
    const f = cc11001100_hook("f", Lc("IMG", a.document), "var-init");
    if (c || d) {
      const g = cc11001100_hook("g", h => {
        c && c(h);
        if (d) {
          h = cc11001100_hook("h", a.google_image_requests, "assign");
          const l = cc11001100_hook("l", Ka(h, f), "var-init");
          0 <= l && Array.prototype.splice.call(h, l, 1);
        }
        kc(f, "load", g);
        kc(f, "error", g);
      }, "var-init");
      jc(f, "load", g);
      jc(f, "error", g);
    }
    e && (f.attributionSrc = cc11001100_hook("f.attributionSrc", "", "assign"));
    f.src = cc11001100_hook("f.src", b, "assign");
    a.google_image_requests.push(f);
  }
  var hd = cc11001100_hook("hd", a => {
      let b = cc11001100_hook("b", "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe", "var-init");
      J(a, (c, d) => {
        c && (b += cc11001100_hook("b", `&${d}=${encodeURIComponent(c)}`, "assign"));
      });
      gd(b);
    }, "var-init"),
    gd = cc11001100_hook("gd", a => {
      var b = cc11001100_hook("b", window, "var-init");
      b.fetch ? b.fetch(a, {
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        credentials: cc11001100_hook("credentials", "include", "object-key-init"),
        redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      }) : ed(b, a, void 0, !1, !1);
    }, "var-init");
  let id = cc11001100_hook("id", null, "var-init");
  var bd = cc11001100_hook("bd", document, "var-init"),
    L = cc11001100_hook("L", window, "var-init");
  let jd = cc11001100_hook("jd", null, "var-init");
  var kd = cc11001100_hook("kd", (a, b = []) => {
    let c = cc11001100_hook("c", !1, "var-init");
    n.google_logging_queue || (c = cc11001100_hook("c", !0, "assign"), n.google_logging_queue = cc11001100_hook("n.google_logging_queue", [], "assign"));
    n.google_logging_queue.push([a, b]);
    if (a = cc11001100_hook("a", c, "assign")) {
      if (null == jd) {
        jd = cc11001100_hook("jd", !1, "assign");
        try {
          var d = cc11001100_hook("d", Jc(n), "var-init");
          d && -1 !== d.location.hash.indexOf("google_logging") && (jd = cc11001100_hook("jd", !0, "assign"));
          n.localStorage.getItem("google_logging") && (jd = cc11001100_hook("jd", !0, "assign"));
        } catch (e) {}
      }
      a = cc11001100_hook("a", jd, "assign");
    }
    a && (d = cc11001100_hook("d", n.document, "assign"), a = cc11001100_hook("a", new dc(ec, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), "assign"), a = cc11001100_hook("a", yc(a instanceof dc && a.constructor === dc && a.h === fc ? a.i : "type_error:Const"), "assign"), Kc(d, a));
  }, "var-init");
  function ld(a = n) {
    let b = cc11001100_hook("b", a.context || a.AMP_CONTEXT_DATA, "var-init");
    if (!b) try {
      b = cc11001100_hook("b", a.parent.context || a.parent.AMP_CONTEXT_DATA, "assign");
    } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function md(a = ld()) {
    return a ? Ic(a.master) ? a.master : null : null;
  }
  ;
  function nd(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 === b.length) return yc(a[0]);
    const c = cc11001100_hook("c", [a[0]], "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return yc(c.join(""));
  }
  ;
  function od(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a[0], "assign");
    const b = cc11001100_hook("b", qc(), "var-init");
    a = cc11001100_hook("a", b ? b.createScript(a) : a, "assign");
    return new sc(a, rc);
  }
  ;
  var pd = cc11001100_hook("pd", a => {
      a = cc11001100_hook("a", md(ld(a)) || a, "assign");
      a.google_unique_id = cc11001100_hook("a.google_unique_id", (a.google_unique_id || 0) + 1, "assign");
      return a.google_unique_id;
    }, "var-init"),
    qd = cc11001100_hook("qd", a => {
      a = cc11001100_hook("a", a.google_unique_id, "assign");
      return "number" === typeof a ? a : 0;
    }, "var-init"),
    rd = cc11001100_hook("rd", () => {
      if (!L) return !1;
      try {
        return !(!L.navigator.standalone && !L.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    }, "var-init"),
    sd = cc11001100_hook("sd", a => {
      if (!a) return "";
      a = cc11001100_hook("a", a.toLowerCase(), "assign");
      "ca-" != a.substring(0, 3) && (a = cc11001100_hook("a", "ca-" + a, "assign"));
      return a;
    }, "var-init");
  class td {
    constructor(a, b) {
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", {}, "assign");
    }
  }
  var ud = cc11001100_hook("ud", a => !!(a.error && a.meta && a.id), "var-init");
  const vd = cc11001100_hook("vd", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  var wd = cc11001100_hook("wd", class {
      constructor(a, b) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.i = cc11001100_hook("this.i", b, "assign");
      }
    }, "var-init"),
    xd = cc11001100_hook("xd", class {
      constructor(a, b, c) {
        this.url = cc11001100_hook("this.url", a, "assign");
        this.s = cc11001100_hook("this.s", b, "assign");
        this.Oa = cc11001100_hook("this.Oa", !!c, "assign");
        this.depth = cc11001100_hook("this.depth", null, "assign");
      }
    }, "var-init");
  function yd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function zd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init");
    J(a, function (g, h) {
      (g = cc11001100_hook("g", Ad(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function Ad(a, b, c, d, e) {
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
        for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(Ad(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(zd(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function Bd(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 1, "var-init");
    for (const c in a.i) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.j.length - 1;
  }
  function Cd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
      d = cc11001100_hook("d", Bd(a) - b.length, "var-init");
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
        let k = cc11001100_hook("k", zd(h[l], a.j, ",$"), "var-init");
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
  class Dd {
    constructor() {
      this.j = cc11001100_hook("this.j", "&", "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
    }
  }
  ;
  function Ed(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= b && 1 >= b && (a.h = cc11001100_hook("a.h", b, "assign"));
  }
  function Fd(a, b, c, d = !1, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if ((d ? a.h : Math.random()) < (e || .01)) try {
      let f;
      c instanceof Dd ? f = cc11001100_hook("f", c, "assign") : (f = cc11001100_hook("f", new Dd(), "assign"), J(c, (h, l) => {
        var k = cc11001100_hook("k", f, "var-init");
        const m = cc11001100_hook("m", k.l++, "var-init");
        h = cc11001100_hook("h", yd(l, h), "assign");
        k.h.push(m);
        k.i[m] = cc11001100_hook("k.i[m]", h, "assign");
      }));
      const g = cc11001100_hook("g", Cd(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && ed(n, g);
    } catch (f) {}
  }
  class Gd {
    constructor() {
      this.h = cc11001100_hook("this.h", Math.random(), "assign");
    }
  }
  ;
  let Hd = cc11001100_hook("Hd", null, "var-init");
  function Id() {
    if (null === Hd) {
      Hd = cc11001100_hook("Hd", "", "assign");
      try {
        let a = cc11001100_hook("a", "", "var-init");
        try {
          a = cc11001100_hook("a", n.top.location.hash, "assign");
        } catch (b) {
          a = cc11001100_hook("a", n.location.hash, "assign");
        }
        if (a) {
          const b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "var-init");
          Hd = cc11001100_hook("Hd", b ? b[1] : "", "assign");
        }
      } catch (a) {}
    }
    return Hd;
  }
  ;
  function Jd() {
    const a = cc11001100_hook("a", n.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function Kd() {
    const a = cc11001100_hook("a", n.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class Ld {
    constructor(a, b) {
      var c = cc11001100_hook("c", Kd() || Jd(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const Md = cc11001100_hook("Md", n.performance, "var-init"),
    Nd = cc11001100_hook("Nd", !!(Md && Md.mark && Md.measure && Md.clearMarks), "var-init"),
    Od = cc11001100_hook("Od", hc(() => {
      var a;
      if (a = cc11001100_hook("a", Nd, "assign")) a = cc11001100_hook("a", Id(), "assign"), a = cc11001100_hook("a", !!a.indexOf && 0 <= a.indexOf("1337"), "assign");
      return a;
    }), "var-init");
  function Pd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && Md && Od() && (Md.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Md.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function Qd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.h = cc11001100_hook("a.h", !1, "assign");
    a.i != a.j.google_js_reporting_queue && (Od() && La(a.i, Pd), a.i.length = cc11001100_hook("a.i.length", 0, "assign"));
  }
  class Rd {
    constructor(a) {
      this.i = cc11001100_hook("this.i", [], "assign");
      this.j = cc11001100_hook("this.j", a || n, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.i = cc11001100_hook("this.i", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.h = cc11001100_hook("this.h", Od() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.h) return null;
      a = cc11001100_hook("a", new Ld(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      Md && Od() && Md.mark(b);
      return a;
    }
    end(a) {
      if (this.h && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Kd() || Jd()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        Md && Od() && Md.mark(b);
        !this.h || 2048 < this.i.length || this.i.push(a);
      }
    }
  }
  ;
  function Sd(a) {
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
  class Td {
    constructor(a, b = null) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.h = cc11001100_hook("this.h", null, "assign");
      this.m = cc11001100_hook("this.m", this.I, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
      this.j = cc11001100_hook("this.j", !1, "assign");
    }
    Sa(a) {
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    xa(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
    }
    l(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    ha(a, b, c) {
      let d, e;
      try {
        this.i && this.i.h ? (e = cc11001100_hook("e", this.i.start(a.toString(), 3), "assign"), d = cc11001100_hook("d", b(), "assign"), this.i.end(e)) : d = cc11001100_hook("d", b(), "assign");
      } catch (f) {
        b = cc11001100_hook("b", !0, "assign");
        try {
          Pd(e), b = cc11001100_hook("b", this.m(a, new td(f, {
            message: cc11001100_hook("message", Sd(f), "object-key-init")
          }), void 0, c), "assign");
        } catch (g) {
          this.I(217, g);
        }
        if (b) window.console?.error?.(f);else throw f;
      }
      return d;
    }
    pa(a, b) {
      return (...c) => this.ha(a, () => b.apply(void 0, c));
    }
    I(a, b, c, d, e) {
      e = cc11001100_hook("e", e || "jserror", "assign");
      let f;
      try {
        const Ga = cc11001100_hook("Ga", new Dd(), "var-init");
        var g = cc11001100_hook("g", Ga, "var-init");
        g.h.push(1);
        g.i[1] = cc11001100_hook("g.i[1]", yd("context", a), "assign");
        ud(b) || (b = cc11001100_hook("b", new td(b, {
          message: cc11001100_hook("message", Sd(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          g = cc11001100_hook("g", Ga, "assign");
          var h = cc11001100_hook("h", b.msg.substring(0, 512), "var-init");
          g.h.push(2);
          g.i[2] = cc11001100_hook("g.i[2]", yd("msg", h), "assign");
        }
        var l = cc11001100_hook("l", b.meta || {}, "var-init");
        b = cc11001100_hook("b", l, "assign");
        if (this.h) try {
          this.h(b);
        } catch (Ra) {}
        if (d) try {
          d(b);
        } catch (Ra) {}
        d = cc11001100_hook("d", Ga, "assign");
        l = cc11001100_hook("l", [l], "assign");
        d.h.push(3);
        d.i[3] = cc11001100_hook("d.i[3]", l, "assign");
        d = cc11001100_hook("d", n, "assign");
        l = cc11001100_hook("l", [], "assign");
        b = cc11001100_hook("b", null, "assign");
        do {
          var k = cc11001100_hook("k", d, "var-init");
          if (Ic(k)) {
            var m = cc11001100_hook("m", k.location.href, "var-init");
            b = cc11001100_hook("b", k.document && k.document.referrer || null, "assign");
          } else m = cc11001100_hook("m", b, "assign"), b = cc11001100_hook("b", null, "assign");
          l.push(new xd(m || "", k));
          try {
            d = cc11001100_hook("d", k.parent, "assign");
          } catch (Ra) {
            d = cc11001100_hook("d", null, "assign");
          }
        } while (d && k != d);
        for (let Ra = cc11001100_hook("Ra", 0, "var-init"), kf = cc11001100_hook("kf", l.length - 1, "var-init"); Ra <= kf; ++Ra) l[Ra].depth = cc11001100_hook("l[Ra].depth", kf - Ra, "assign");
        k = cc11001100_hook("k", n, "assign");
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1) for (m = cc11001100_hook("m", 1, "assign"); m < l.length; ++m) {
          var u = cc11001100_hook("u", l[m], "var-init");
          u.url || (u.url = cc11001100_hook("u.url", k.location.ancestorOrigins[m - 1] || "", "assign"), u.Oa = cc11001100_hook("u.Oa", !0, "assign"));
        }
        var v = cc11001100_hook("v", l, "var-init");
        let ac = cc11001100_hook("ac", new xd(n.location.href, n, !1), "var-init");
        k = cc11001100_hook("k", null, "assign");
        const dd = cc11001100_hook("dd", v.length - 1, "var-init");
        for (u = cc11001100_hook("u", dd, "assign"); 0 <= u; --u) {
          var w = cc11001100_hook("w", v[u], "var-init");
          !k && vd.test(w.url) && (k = cc11001100_hook("k", w, "assign"));
          if (w.url && !w.Oa) {
            ac = cc11001100_hook("ac", w, "assign");
            break;
          }
        }
        w = cc11001100_hook("w", null, "assign");
        const Si = cc11001100_hook("Si", v.length && v[dd].url, "var-init");
        0 != ac.depth && Si && (w = cc11001100_hook("w", v[dd], "assign"));
        f = cc11001100_hook("f", new wd(ac, w), "assign");
        if (f.i) {
          v = cc11001100_hook("v", Ga, "assign");
          var y = cc11001100_hook("y", f.i.url || "", "var-init");
          v.h.push(4);
          v.i[4] = cc11001100_hook("v.i[4]", yd("top", y), "assign");
        }
        var E = cc11001100_hook("E", {
          url: cc11001100_hook("url", f.h.url || "", "object-key-init")
        }, "var-init");
        if (f.h.url) {
          var xa = cc11001100_hook("xa", f.h.url.match(Fc), "var-init"),
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
        Fd(this.A, e, Ga, this.j, c);
      } catch (Ga) {
        try {
          Fd(this.A, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", Sd(Ga), "object-key-init"),
            url: cc11001100_hook("url", f && f.h.url, "object-key-init")
          }, this.j, c);
        } catch (ac) {}
      }
      return !0;
    }
    ba(a, b) {
      b.catch(c => {
        c = cc11001100_hook("c", c ? c : "unknown rejection", "assign");
        this.I(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0);
      });
    }
  }
  ;
  var Ud = cc11001100_hook("Ud", a => "string" === typeof a, "var-init"),
    Vd = cc11001100_hook("Vd", a => void 0 === a, "var-init");
  var Xd = cc11001100_hook("Xd", class extends I {
      constructor(a) {
        super(a, -1, Wd);
      }
    }, "var-init"),
    Wd = cc11001100_hook("Wd", [2, 8], "var-init"),
    Yd = cc11001100_hook("Yd", [3, 4, 5], "var-init"),
    Zd = cc11001100_hook("Zd", [6, 7], "var-init");
  function $d(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a ? !a : a;
  }
  function ae(a, b) {
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
  function be(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", C(a, Xd, 2), "var-init");
    if (!c.length) return ce(a, b);
    a = cc11001100_hook("a", H(a, 1), "assign");
    if (1 === a) return $d(be(c[0], b));
    c = cc11001100_hook("c", Na(c, d => () => be(d, b)), "assign");
    switch (a) {
      case 2:
        return ae(c, !1);
      case 3:
        return ae(c, !0);
    }
  }
  function ce(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", zb(a, Yd), "var-init");
    a: {
      switch (c) {
        case 3:
          var d = cc11001100_hook("d", H(a, Ab(a, Yd, 3)), "var-init");
          break a;
        case 4:
          d = cc11001100_hook("d", H(a, Ab(a, Yd, 4)), "assign");
          break a;
        case 5:
          d = cc11001100_hook("d", H(a, Ab(a, Yd, 5)), "assign");
          break a;
      }
      d = cc11001100_hook("d", void 0, "assign");
    }
    if (d && (b = cc11001100_hook("b", (b = cc11001100_hook("b", b[c], "assign")) && b[d], "assign"))) {
      try {
        var e = cc11001100_hook("e", b(...wb(a, 8)), "var-init");
      } catch (f) {
        return;
      }
      b = cc11001100_hook("b", H(a, 1), "assign");
      if (4 === b) return !!e;
      if (5 === b) return null != e;
      if (12 === b) a = cc11001100_hook("a", F(a, Ab(a, Zd, 7)), "assign");else a: {
        switch (c) {
          case 4:
            a = cc11001100_hook("a", Hb(a, Ab(a, Zd, 6)), "assign");
            break a;
          case 5:
            a = cc11001100_hook("a", F(a, Ab(a, Zd, 7)), "assign");
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
            return Ud(a) && Ud(e) && new RegExp(a).test(e);
          case 10:
            return null != e && -1 === ra(String(e), a);
          case 11:
            return null != e && 1 === ra(String(e), a);
        }
      }
    }
  }
  function de(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return !a || !(!b || !be(a, b));
  }
  ;
  var fe = cc11001100_hook("fe", class extends I {
      constructor(a) {
        super(a, -1, ee);
      }
    }, "var-init"),
    ee = cc11001100_hook("ee", [4], "var-init");
  var ge = cc11001100_hook("ge", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var ie = cc11001100_hook("ie", class extends I {
      constructor(a) {
        super(a, -1, he);
      }
    }, "var-init"),
    je = cc11001100_hook("je", Zb(ie), "var-init"),
    he = cc11001100_hook("he", [5], "var-init"),
    ke = cc11001100_hook("ke", [1, 2, 3, 6, 7], "var-init");
  var me = cc11001100_hook("me", class extends I {
      constructor() {
        super(void 0, -1, le);
      }
    }, "var-init"),
    le = cc11001100_hook("le", [2], "var-init");
  function ne(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  var oe = cc11001100_hook("oe", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  function pe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 1, b, 0);
  }
  function qe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 2, b, 0);
  }
  var re = cc11001100_hook("re", class extends I {
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
  function se(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eb(a, 1, b);
  }
  function te(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eb(a, 2, b);
  }
  function ue(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Eb(a, 3, b);
  }
  var ve = cc11001100_hook("ve", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var we = cc11001100_hook("we", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  function xe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Fb(a, 4, ye, b);
  }
  var ze = cc11001100_hook("ze", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    ye = cc11001100_hook("ye", [4, 5, 6, 8, 9, 10], "var-init");
  function Ae(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 1, b, 0);
  }
  function Be(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 2, b, 0);
  }
  var Ce = cc11001100_hook("Ce", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var De = cc11001100_hook("De", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    Ee = cc11001100_hook("Ee", [1, 2], "var-init");
  function Fe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eb(a, 1, b);
  }
  function Ge(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gb(a, 2, b);
  }
  function He(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return xb(a, 4, b);
  }
  function Ie(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gb(a, 5, b);
  }
  function Je(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 6, b, 0);
  }
  var Le = cc11001100_hook("Le", class extends I {
      constructor() {
        super(void 0, -1, Ke);
      }
    }, "var-init"),
    Ke = cc11001100_hook("Ke", [2, 4, 5], "var-init");
  var Ne = cc11001100_hook("Ne", class extends I {
      constructor() {
        super(void 0, -1, Me);
      }
    }, "var-init"),
    Me = cc11001100_hook("Me", [5], "var-init"),
    Oe = cc11001100_hook("Oe", [1, 2, 3, 4], "var-init");
  var Qe = cc11001100_hook("Qe", class extends I {
      constructor() {
        super(void 0, -1, Pe);
      }
    }, "var-init"),
    Pe = cc11001100_hook("Pe", [2, 3], "var-init");
  function Re(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Fb(a, 4, Se, b);
  }
  var Te = cc11001100_hook("Te", class extends I {
      constructor() {
        super();
      }
      getTagSessionCorrelator() {
        return D(t(this, 2), 0);
      }
    }, "var-init"),
    Se = cc11001100_hook("Se", [4, 5, 7], "var-init");
  function Ue(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    Ve(a, ...b.map(c => ({
      Va: cc11001100_hook("Va", 4, "object-key-init"),
      message: cc11001100_hook("message", c, "object-key-init")
    })));
  }
  function We(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    Ve(a, ...b.map(c => ({
      Va: cc11001100_hook("Va", 7, "object-key-init"),
      message: cc11001100_hook("message", c, "object-key-init")
    })));
  }
  ;
  function Xe(a) {
    cc11001100_hook("a", a, "function-parameter");
    return JSON.stringify([a.map(b => [{
      [b.Va]: cc11001100_hook(b.Va, b.message.toJSON(), "object-key-init")
    }])]);
  }
  ;
  var Ye = cc11001100_hook("Ye", (a, b) => {
    globalThis.fetch(a, {
      method: cc11001100_hook("method", "POST", "object-key-init"),
      body: cc11001100_hook("body", b, "object-key-init"),
      keepalive: cc11001100_hook("keepalive", 65536 > b.length, "object-key-init"),
      credentials: cc11001100_hook("credentials", "omit", "object-key-init"),
      mode: cc11001100_hook("mode", "no-cors", "object-key-init"),
      redirect: cc11001100_hook("redirect", "follow", "object-key-init")
    }).catch(() => {});
  }, "var-init");
  function Ze() {
    this.A = cc11001100_hook("this.A", this.A, "assign");
    this.j = cc11001100_hook("this.j", this.j, "assign");
  }
  Ze.prototype.A = cc11001100_hook("Ze.prototype.A", !1, "assign");
  function $e(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A || (a.A = cc11001100_hook("a.A", !0, "assign"), a.h());
  }
  function af(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.A ? b() : (a.j || (a.j = cc11001100_hook("a.j", [], "assign")), a.j.push(b));
  }
  Ze.prototype.h = cc11001100_hook("Ze.prototype.h", function () {
    if (this.j) for (; this.j.length;) this.j.shift()();
  }, "assign");
  function bf(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    jc(b, c, d);
    af(a, () => kc(b, c, d));
  }
  function cf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    1 !== a.state && (a.state = cc11001100_hook("a.state", 1, "assign"), a.callback && a.callback(b));
  }
  function df(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.s.document.visibilityState ? bf(a, a.s.document, "visibilitychange", b => {
      "hidden" === a.s.document.visibilityState && cf(a, b);
      "visible" === a.s.document.visibilityState && (a.state = cc11001100_hook("a.state", 0, "assign"));
    }) : "onpagehide" in a.s ? (bf(a, a.s, "pagehide", b => {
      cf(a, b);
    }), bf(a, a.s, "pageshow", () => {
      a.state = cc11001100_hook("a.state", 0, "assign");
    })) : bf(a, a.s, "beforeunload", b => {
      cf(a, b);
    });
  }
  function ef(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.callback || df(a);
    a.callback = cc11001100_hook("a.callback", b, "assign");
  }
  var ff = cc11001100_hook("ff", class extends Ze {
    constructor(a) {
      super();
      this.s = cc11001100_hook("this.s", a, "assign");
      this.state = cc11001100_hook("this.state", 0, "assign");
      this.callback = cc11001100_hook("this.callback", null, "assign");
    }
  }, "var-init");
  function Ve(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    a.A && 65536 <= Xe(a.h.concat(b)).length && gf(a);
    a.h.push(...b);
    a.h.length >= a.m && gf(a);
    a.h.length && null === a.i && (a.i = cc11001100_hook("a.i", setTimeout(() => {
      gf(a);
    }, a.B), "assign"));
  }
  function hf(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j || (a.j = cc11001100_hook("a.j", new ff(b), "assign"), ef(a.j, () => {
      for (const e of a.l) e();
      c();
    }));
    d && 1 !== a.j.state && a.l.push(d);
  }
  function gf(a) {
    cc11001100_hook("a", a, "function-parameter");
    null !== a.i && (clearTimeout(a.i), a.i = cc11001100_hook("a.i", null, "assign"));
    if (a.h.length) {
      var b = cc11001100_hook("b", Xe(a.h), "var-init");
      a.v("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.h = cc11001100_hook("a.h", [], "assign");
    }
  }
  function jf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    hf(a, b, () => {
      gf(a);
    }, c);
  }
  var mf = cc11001100_hook("mf", class {
      constructor(a, b, c) {
        this.v = cc11001100_hook("this.v", Ye, "assign");
        this.B = cc11001100_hook("this.B", a, "assign");
        this.m = cc11001100_hook("this.m", b, "assign");
        this.A = cc11001100_hook("this.A", c, "assign");
        this.l = cc11001100_hook("this.l", [], "assign");
        this.h = cc11001100_hook("this.h", [], "assign");
        this.i = cc11001100_hook("this.i", null, "assign");
      }
    }, "var-init"),
    nf = cc11001100_hook("nf", class extends mf {
      constructor(a = 1E3, b = 100, c = !1) {
        super(a, b, c && !0);
      }
    }, "var-init");
  function of(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", A(b, 1, Date.now(), 0), "assign");
    var c = cc11001100_hook("c", ad(window), "var-init");
    b = cc11001100_hook("b", A(b, 2, c, 0), "assign");
    return A(b, 6, a.m, 0);
  }
  function pf(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (a.j) {
      var g = cc11001100_hook("g", Be(Ae(new Ce(), b), c), "var-init");
      b = cc11001100_hook("b", Je(Ge(Fe(Ie(He(new Le(), d), e), g), a.h.slice()), f), "assign");
      b = cc11001100_hook("b", Re(new Te(), b), "assign");
      Ue(a.i, of(a, b));
      if (1 === f || 3 === f || 4 === f && !a.h.some(h => H(h, 1) === H(g, 1) && H(h, 2) === c)) a.h.push(g), 100 < a.h.length && a.h.shift();
    }
  }
  function qf(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (a.j && a.l) {
      var e = cc11001100_hook("e", new Qe(), "var-init");
      b = cc11001100_hook("b", Gb(e, 2, b), "assign");
      c = cc11001100_hook("c", Gb(b, 3, c), "assign");
      d && A(c, 1, d, 0);
      d = cc11001100_hook("d", new Te(), "assign");
      d = cc11001100_hook("d", Fb(d, 7, Se, c), "assign");
      Ue(a.i, of(a, d));
    }
  }
  var rf = cc11001100_hook("rf", class {
    constructor(a, b, c, d = new nf(b)) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
      this.i = cc11001100_hook("this.i", d, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
      this.j = cc11001100_hook("this.j", 0 < a && Qc() < 1 / a, "assign");
    }
  }, "var-init");
  var M = cc11001100_hook("M", a => {
    var b = cc11001100_hook("b", "ua", "var-init");
    if (a.ua && a.hasOwnProperty(b)) return a.ua;
    b = cc11001100_hook("b", new a(), "assign");
    return a.ua = cc11001100_hook("a.ua", b, "assign");
  }, "var-init");
  var sf = cc11001100_hook("sf", class {
    constructor() {
      this.G = cc11001100_hook("this.G", {
        [3]: {},
        [4]: {},
        [5]: {}
      }, "assign");
    }
  }, "var-init");
  var tf = cc11001100_hook("tf", /^true$/.test("false"), "var-init");
  function uf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    switch (b) {
      case 1:
        return H(a, Ab(a, ke, 1));
      case 2:
        return H(a, Ab(a, ke, 2));
      case 3:
        return H(a, Ab(a, ke, 3));
      case 6:
        return H(a, Ab(a, ke, 6));
      default:
        return null;
    }
  }
  function vf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return null;
    switch (b) {
      case 1:
        return G(a, 1);
      case 7:
        return F(a, 3);
      case 2:
        return Hb(a, 2);
      case 3:
        return F(a, 3);
      case 6:
        return wb(a, 4);
      default:
        return null;
    }
  }
  const wf = cc11001100_hook("wf", hc(() => {
    if (!tf) return {};
    try {
      const a = cc11001100_hook("a", window.sessionStorage && window.sessionStorage.getItem("GGDFSSK"), "var-init");
      if (a) return JSON.parse(a);
    } catch {}
    return {};
  }), "var-init");
  function xf(a, b, c, d = 0) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    M(yf).j[d] = cc11001100_hook("M(yf).j[d]", M(yf).j[d]?.add(b) ?? new Set().add(b), "assign");
    const e = cc11001100_hook("e", wf(), "var-init");
    if (null != e[b]) return e[b];
    b = cc11001100_hook("b", zf(d)[b], "assign");
    if (!b) return c;
    b = cc11001100_hook("b", je(JSON.stringify(b)), "assign");
    b = cc11001100_hook("b", Af(b), "assign");
    a = cc11001100_hook("a", vf(b, a), "assign");
    return null != a ? a : c;
  }
  function Af(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", M(sf).G, "var-init");
    if (b) {
      const c = cc11001100_hook("c", Qa(C(a, ge, 5), d => de(B(d, Xd, 1), b)), "var-init");
      if (c) return B(c, fe, 2) ?? null;
    }
    return B(a, fe, 4) ?? null;
  }
  class yf {
    constructor() {
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.h = cc11001100_hook("this.h", new Map(), "assign");
    }
  }
  function Bf(a, b = !1, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return !!xf(1, a, b, c);
  }
  function Cf(a, b = 0, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Number(xf(2, a, b, c)), "assign");
    return isNaN(a) ? b : a;
  }
  function Df(a, b = "", c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", xf(3, a, b, c), "assign");
    return "string" === typeof a ? a : b;
  }
  function Ef(a, b = [], c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", xf(6, a, b, c), "assign");
    return Array.isArray(a) ? a : b;
  }
  function zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return M(yf).i[a] || (M(yf).i[a] = cc11001100_hook("M(yf).i[a]", {}, "assign"));
  }
  function Ff(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", zf(b), "var-init");
    J(a, (d, e) => c[e] = cc11001100_hook("c[e]", d, "assign"));
  }
  function Gf(a, b, c, d, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init"),
      g = cc11001100_hook("g", [], "var-init");
    La(b, h => {
      const l = cc11001100_hook("l", zf(h), "var-init");
      La(a, k => {
        var m = cc11001100_hook("m", zb(k, ke), "var-init");
        const u = cc11001100_hook("u", uf(k, m), "var-init");
        if (u) {
          var v = cc11001100_hook("v", M(yf).h.get(h)?.get(u)?.slice(0) ?? [], "var-init");
          a: {
            const w = cc11001100_hook("w", new Ne(), "var-init");
            switch (m) {
              case 1:
                yb(w, 1, Oe, u);
                break;
              case 2:
                yb(w, 2, Oe, u);
                break;
              case 3:
                yb(w, 3, Oe, u);
                break;
              case 6:
                yb(w, 4, Oe, u);
                break;
              default:
                m = cc11001100_hook("m", void 0, "assign");
                break a;
            }
            xb(w, 5, v);
            m = cc11001100_hook("m", w, "assign");
          }
          if (v = cc11001100_hook("v", m, "assign")) v = cc11001100_hook("v", !!M(yf).j[h]?.has(u), "assign");
          v && f.push(m);
          if (v = cc11001100_hook("v", m, "assign")) v = cc11001100_hook("v", !!M(yf).h.get(h)?.has(u), "assign");
          v && g.push(m);
          e || (m = cc11001100_hook("m", M(yf), "assign"), m.h.has(h) || m.h.set(h, new Map()), m.h.get(h).has(u) || m.h.get(h).set(u, []), d && m.h.get(h).get(u).push(d));
          l[u] = cc11001100_hook("l[u]", k.toJSON(), "assign");
        }
      });
    });
    (f.length || g.length) && qf(c, f, g, d ?? void 0);
  }
  function Hf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", zf(b), "var-init");
    La(a, d => {
      var e = cc11001100_hook("e", je(JSON.stringify(d)), "var-init");
      const f = cc11001100_hook("f", zb(e, ke), "var-init");
      (e = cc11001100_hook("e", uf(e, f), "assign")) && (c[e] || (c[e] = cc11001100_hook("c[e]", d, "assign")));
    });
  }
  function If() {
    return Na(Object.keys(M(yf).i), a => Number(a));
  }
  function Jf(a) {
    cc11001100_hook("a", a, "function-parameter");
    Sa(M(yf).l, a) || Ff(zf(4), a);
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
  function Kf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b[a] || c;
  }
  function Lf(a) {
    cc11001100_hook("a", a, "function-parameter");
    N(5, Bf, a);
    N(6, Cf, a);
    N(7, Df, a);
    N(8, Ef, a);
    N(13, Hf, a);
    N(15, Jf, a);
  }
  function Mf(a) {
    cc11001100_hook("a", a, "function-parameter");
    N(4, b => {
      M(sf).G = cc11001100_hook("M(sf).G", b, "assign");
    }, a);
    N(9, (b, c) => {
      var d = cc11001100_hook("d", M(sf), "var-init");
      null == d.G[3][b] && (d.G[3][b] = cc11001100_hook("d.G[3][b]", c, "assign"));
    }, a);
    N(10, (b, c) => {
      var d = cc11001100_hook("d", M(sf), "var-init");
      null == d.G[4][b] && (d.G[4][b] = cc11001100_hook("d.G[4][b]", c, "assign"));
    }, a);
    N(11, (b, c) => {
      var d = cc11001100_hook("d", M(sf), "var-init");
      null == d.G[5][b] && (d.G[5][b] = cc11001100_hook("d.G[5][b]", c, "assign"));
    }, a);
    N(14, b => {
      var c = cc11001100_hook("c", M(sf), "var-init");
      for (const d of [3, 4, 5]) Object.assign(c.G[d], b[d]);
    }, a);
  }
  function Nf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }
  ;
  function Of(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.j = cc11001100_hook("a.j", Kf(1, b, () => {}), "assign");
    a.l = cc11001100_hook("a.l", d => Kf(2, b, () => [])(d, c), "assign");
    a.i = cc11001100_hook("a.i", () => Kf(3, b, () => [])(c), "assign");
    a.h = cc11001100_hook("a.h", d => {
      Kf(16, b, () => {})(d, c);
    }, "assign");
  }
  class Pf {
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
  let Qf, Rf;
  const Sf = cc11001100_hook("Sf", new Rd(window), "var-init");
  (a => {
    Qf = cc11001100_hook("Qf", a ?? new Gd(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    Ed(Qf, window.google_srt);
    Rf = cc11001100_hook("Rf", new Td(Qf, Sf), "assign");
    Rf.xa(() => {});
    Rf.l(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || Qd(Sf) : Sf.h && jc(window, "load", () => {
      window.google_measure_js_timing || Qd(Sf);
    });
  })();
  var Tf = cc11001100_hook("Tf", {
    Jb: cc11001100_hook("Jb", 0, "object-key-init"),
    Ib: cc11001100_hook("Ib", 1, "object-key-init"),
    Fb: cc11001100_hook("Fb", 2, "object-key-init"),
    Ab: cc11001100_hook("Ab", 3, "object-key-init"),
    Gb: cc11001100_hook("Gb", 4, "object-key-init"),
    Bb: cc11001100_hook("Bb", 5, "object-key-init"),
    Hb: cc11001100_hook("Hb", 6, "object-key-init"),
    Db: cc11001100_hook("Db", 7, "object-key-init"),
    Eb: cc11001100_hook("Eb", 8, "object-key-init"),
    zb: cc11001100_hook("zb", 9, "object-key-init"),
    Cb: cc11001100_hook("Cb", 10, "object-key-init")
  }, "var-init");
  var Uf = cc11001100_hook("Uf", {
    Lb: cc11001100_hook("Lb", 0, "object-key-init"),
    Mb: cc11001100_hook("Mb", 1, "object-key-init"),
    Kb: cc11001100_hook("Kb", 2, "object-key-init")
  }, "var-init");
  function Vf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 != a.h) throw Error("Already resolved/rejected.");
  }
  var Yf = cc11001100_hook("Yf", class {
    constructor() {
      this.i = cc11001100_hook("this.i", new Wf(this), "assign");
      this.h = cc11001100_hook("this.h", 0, "assign");
    }
    resolve(a) {
      Vf(this);
      this.h = cc11001100_hook("this.h", 1, "assign");
      this.l = cc11001100_hook("this.l", a, "assign");
      Xf(this.i);
    }
  }, "var-init");
  function Xf(a) {
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
  var Wf = cc11001100_hook("Wf", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
    }
    then(a, b) {
      if (this.i) throw Error("Then functions already set.");
      this.i = cc11001100_hook("this.i", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      Xf(this);
    }
  }, "var-init");
  const Zf = cc11001100_hook("Zf", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a.slice(0), "assign");
    }
    forEach(a) {
      this.h.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new Zf(Ma(this.h, a));
    }
    apply(a) {
      return new Zf(a(this.h.slice(0)));
    }
    get(a) {
      return this.h[a];
    }
    add(a) {
      const b = cc11001100_hook("b", this.h.slice(0), "var-init");
      b.push(a);
      return new Zf(b);
    }
  }, "var-init");
  function $f(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", a.length, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
  }
  ;
  const bg = cc11001100_hook("bg", class {
    constructor() {
      this.h = cc11001100_hook("this.h", {}, "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
    }
    set(a, b) {
      const c = cc11001100_hook("c", ag(a), "var-init");
      this.h[c] = cc11001100_hook("this.h[c]", b, "assign");
      this.i[c] = cc11001100_hook("this.i[c]", a, "assign");
    }
    get(a, b) {
      a = cc11001100_hook("a", ag(a), "assign");
      return void 0 !== this.h[a] ? this.h[a] : b;
    }
    clear() {
      this.h = cc11001100_hook("this.h", {}, "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
    }
  }, "var-init");
  function ag(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Object ? String(ea(a)) : a + "";
  }
  ;
  function cg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new dg({
      value: cc11001100_hook("value", a, "object-key-init")
    }, null);
  }
  function eg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new dg(null, a);
  }
  function fg(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return cg(a());
    } catch (b) {
      return eg(b);
    }
  }
  function gg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a.h ? a.h.value : null;
  }
  function hg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.h && b(a.h.value);
    return a;
  }
  function ig(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.h || b(a.i);
    return a;
  }
  class dg {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
    }
    map(a) {
      return null != this.h ? (a = cc11001100_hook("a", a(this.h.value), "assign"), a instanceof dg ? a : cg(a)) : this;
    }
  }
  ;
  const jg = cc11001100_hook("jg", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", new bg(), "assign");
      if (a) for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.h.set(a, !0);
    }
    contains(a) {
      return void 0 !== this.h.h[ag(a)];
    }
  }, "var-init");
  class kg {
    constructor() {
      this.h = cc11001100_hook("this.h", new bg(), "assign");
    }
    set(a, b) {
      let c = cc11001100_hook("c", this.h.get(a), "var-init");
      c || (c = cc11001100_hook("c", new jg(), "assign"), this.h.set(a, c));
      c.add(b);
    }
  }
  ;
  var O = cc11001100_hook("O", class extends I {
      constructor(a) {
        super(a, -1, lg);
      }
      getId() {
        return t(this, 3);
      }
    }, "var-init"),
    lg = cc11001100_hook("lg", [4], "var-init");
  class mg {
    constructor({
      Xa: a,
      Nb: b,
      Vb: c,
      qb: d
    }) {
      this.h = cc11001100_hook("this.h", b, "assign");
      this.l = cc11001100_hook("this.l", new Zf(a || []), "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
      this.i = cc11001100_hook("this.i", c, "assign");
    }
  }
  ;
  const og = cc11001100_hook("og", a => {
      const b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", a.l, "var-init");
      c && c.h.length && b.push({
        Z: cc11001100_hook("Z", "a", "object-key-init"),
        fa: cc11001100_hook("fa", ng(c), "object-key-init")
      });
      null != a.h && b.push({
        Z: cc11001100_hook("Z", "as", "object-key-init"),
        fa: cc11001100_hook("fa", a.h, "object-key-init")
      });
      null != a.i && b.push({
        Z: cc11001100_hook("Z", "i", "object-key-init"),
        fa: cc11001100_hook("fa", String(a.i), "object-key-init")
      });
      null != a.j && b.push({
        Z: cc11001100_hook("Z", "rp", "object-key-init"),
        fa: cc11001100_hook("fa", String(a.j), "object-key-init")
      });
      b.sort(function (d, e) {
        return d.Z.localeCompare(e.Z);
      });
      b.unshift({
        Z: cc11001100_hook("Z", "t", "object-key-init"),
        fa: cc11001100_hook("fa", "aa", "object-key-init")
      });
      return b;
    }, "var-init"),
    ng = cc11001100_hook("ng", a => {
      a = cc11001100_hook("a", a.h.slice(0).map(pg), "assign");
      a = cc11001100_hook("a", JSON.stringify(a), "assign");
      return Rc(a);
    }, "var-init"),
    pg = cc11001100_hook("pg", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      null != t(a, 7) && (b.q = cc11001100_hook("b.q", t(a, 7), "assign"));
      null != t(a, 2) && (b.o = cc11001100_hook("b.o", t(a, 2), "assign"));
      null != t(a, 5) && (b.p = cc11001100_hook("b.p", t(a, 5), "assign"));
      return b;
    }, "var-init");
  var qg = cc11001100_hook("qg", class extends I {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return x(this, 1, a);
    }
  }, "var-init");
  function rg(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [].slice.call(arguments).filter(gc(e => null === e)), "var-init");
    if (!b.length) return null;
    let c = cc11001100_hook("c", [], "var-init"),
      d = cc11001100_hook("d", {}, "var-init");
    b.forEach(e => {
      c = cc11001100_hook("c", c.concat(e.Ma || []), "assign");
      d = cc11001100_hook("d", Object.assign(d, e.Ra), "assign");
    });
    return new sg(c, d);
  }
  function tg(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a) {
      case 1:
        return new sg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "mc", "object-key-init")
        });
      case 2:
        return new sg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "h", "object-key-init")
        });
      case 3:
        return new sg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "f", "object-key-init")
        });
      case 4:
        return new sg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "s", "object-key-init")
        });
      default:
        return null;
    }
  }
  function ug(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a) var b = cc11001100_hook("b", null, "var-init");else {
      var c = cc11001100_hook("c", og(a), "var-init");
      a = cc11001100_hook("a", [], "assign");
      for (b of c) c = cc11001100_hook("c", String(b.fa), "assign"), a.push(b.Z + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
      b = cc11001100_hook("b", new sg(null, {
        google_placement_id: cc11001100_hook("google_placement_id", a.join("~"), "object-key-init")
      }), "assign");
    }
    return b;
  }
  class sg {
    constructor(a, b) {
      this.Ma = cc11001100_hook("this.Ma", a, "assign");
      this.Ra = cc11001100_hook("this.Ra", b, "assign");
    }
  }
  ;
  const vg = cc11001100_hook("vg", new sg(["google-auto-placed"], {
    google_reactive_ad_format: cc11001100_hook("google_reactive_ad_format", 40, "object-key-init"),
    google_tag_origin: cc11001100_hook("google_tag_origin", "qs", "object-key-init")
  }), "var-init");
  var wg = cc11001100_hook("wg", {
    overlays: cc11001100_hook("overlays", 1, "object-key-init"),
    interstitials: cc11001100_hook("interstitials", 2, "object-key-init"),
    vignettes: cc11001100_hook("vignettes", 2, "object-key-init"),
    inserts: cc11001100_hook("inserts", 3, "object-key-init"),
    immersives: cc11001100_hook("immersives", 4, "object-key-init"),
    list_view: cc11001100_hook("list_view", 5, "object-key-init"),
    full_page: cc11001100_hook("full_page", 6, "object-key-init"),
    side_rails: cc11001100_hook("side_rails", 7, "object-key-init")
  }, "var-init");
  function xg(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = cc11001100_hook("a.google_reactive_ads_global_state.sideRailProcessedFixedElements", new Set(), "assign")), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = cc11001100_hook("a.google_reactive_ads_global_state.sideRailAvailableSpace", new Map(), "assign"))) : a.google_reactive_ads_global_state = cc11001100_hook("a.google_reactive_ads_global_state", new yg(), "assign");
    return a.google_reactive_ads_global_state;
  }
  class yg {
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
      this.floatingAdsStacking = cc11001100_hook("this.floatingAdsStacking", new zg(), "assign");
      this.sideRailProcessedFixedElements = cc11001100_hook("this.sideRailProcessedFixedElements", new Set(), "assign");
      this.sideRailAvailableSpace = cc11001100_hook("this.sideRailAvailableSpace", new Map(), "assign");
    }
  }
  var zg = cc11001100_hook("zg", class {
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
  var Ag = cc11001100_hook("Ag", a => {
      a = cc11001100_hook("a", a.getBoundingClientRect(), "assign");
      return 0 < a.width && 0 < a.height;
    }, "var-init"),
    Bg = cc11001100_hook("Bg", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      a.forEach(c => b = cc11001100_hook("b", Math.max(b, c.getBoundingClientRect().width), "assign"));
      return c => c.getBoundingClientRect().width > .5 * b;
    }, "var-init"),
    Cg = cc11001100_hook("Cg", a => {
      const b = cc11001100_hook("b", P(a).clientHeight || 0, "var-init");
      return c => c.getBoundingClientRect().height >= .75 * b;
    }, "var-init"),
    Dg = cc11001100_hook("Dg", (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top, "var-init");
  var Eg = cc11001100_hook("Eg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Fg = cc11001100_hook("Fg", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var Hg = cc11001100_hook("Hg", class extends I {
      constructor() {
        super(void 0, -1, Gg);
      }
    }, "var-init"),
    Gg = cc11001100_hook("Gg", [1], "var-init");
  var Ig = cc11001100_hook("Ig", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return G(this, 2);
    }
  }, "var-init");
  var Jg = cc11001100_hook("Jg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Kg = cc11001100_hook("Kg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Mg = cc11001100_hook("Mg", class extends I {
      constructor(a) {
        super(a, -1, Lg);
      }
      i() {
        return C(this, Kg, 1);
      }
    }, "var-init"),
    Lg = cc11001100_hook("Lg", [1], "var-init");
  var Q = cc11001100_hook("Q", class extends I {
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
    }, "var-init"),
    Og = cc11001100_hook("Og", [6, 7, 9, 10, 11], "var-init");
  function Qg(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    $f(a.getElementsByTagName("p"), function (c) {
      100 <= Rg(c) && b.push(c);
    });
    return b;
  }
  function Rg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = cc11001100_hook("b", 0, "var-init");
    $f(a.childNodes, function (c) {
      b += cc11001100_hook("b", Rg(c), "assign");
    });
    return b;
  }
  function Sg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Tg(a, b) {
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
  const Ug = cc11001100_hook("Ug", class {
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
      a = cc11001100_hook("a", Tg(this, a), "assign");
      "number" === typeof this.i && (b = cc11001100_hook("b", this.i, "assign"), 0 > b && (b += cc11001100_hook("b", a.length, "assign")), a = cc11001100_hook("a", 0 <= b && b < a.length ? [a[b]] : [], "assign"));
      if ("number" === typeof this.j) {
        b = cc11001100_hook("b", [], "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
          var d = cc11001100_hook("d", Qg(a[c]), "var-init"),
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
  function Vg(a) {
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
    Wg = cc11001100_hook("Wg", class {
      constructor(a, b = 0) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }, "var-init");
  var Xg = cc11001100_hook("Xg", new S(1082, !0), "var-init"),
    Yg = cc11001100_hook("Yg", new Wg(1130, 100), "var-init"),
    Zg = cc11001100_hook("Zg", new class {
      constructor(a, b = "") {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(14), "var-init"),
    $g = cc11001100_hook("$g", new S(316), "var-init"),
    ah = cc11001100_hook("ah", new S(1207, !0), "var-init"),
    bh = cc11001100_hook("bh", new S(313), "var-init"),
    ch = cc11001100_hook("ch", new S(369), "var-init"),
    dh = cc11001100_hook("dh", new S(1230), "var-init"),
    eh = cc11001100_hook("eh", new S(1229), "var-init"),
    fh = cc11001100_hook("fh", new S(1231), "var-init"),
    gh = cc11001100_hook("gh", new S(1171, !0), "var-init"),
    hh = cc11001100_hook("hh", new S(1201, !0), "var-init"),
    ih = cc11001100_hook("ih", new S(217), "var-init"),
    jh = cc11001100_hook("jh", new S(1228), "var-init"),
    kh = cc11001100_hook("kh", new S(1216), "var-init"),
    lh = cc11001100_hook("lh", new S(1215), "var-init"),
    mh = cc11001100_hook("mh", new S(501545960), "var-init"),
    nh = cc11001100_hook("nh", new S(1120), "var-init"),
    oh = cc11001100_hook("oh", new Wg(1114, 1), "var-init"),
    ph = cc11001100_hook("ph", new S(506914611), "var-init"),
    qh = cc11001100_hook("qh", new S(1086, !0), "var-init"),
    rh = cc11001100_hook("rh", new Wg(1079, 5), "var-init"),
    sh = cc11001100_hook("sh", new class {
      constructor(a, b = []) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]), "var-init"),
    th = cc11001100_hook("th", new S(203), "var-init"),
    uh = cc11001100_hook("uh", new S(84), "var-init"),
    vh = cc11001100_hook("vh", new S(1975), "var-init"),
    wh = cc11001100_hook("wh", new S(1974), "var-init"),
    xh = cc11001100_hook("xh", new S(1162), "var-init"),
    yh = cc11001100_hook("yh", new Wg(501545963, 1), "var-init"),
    zh = cc11001100_hook("zh", new S(501545961), "var-init"),
    Ah = cc11001100_hook("Ah", new S(45388034), "var-init"),
    Bh = cc11001100_hook("Bh", new Wg(501545962, 1), "var-init"),
    Ch = cc11001100_hook("Ch", new Wg(45388309, -1), "var-init"),
    Dh = cc11001100_hook("Dh", new S(491815314), "var-init"),
    Eh = cc11001100_hook("Eh", new S(1121), "var-init"),
    Fh = cc11001100_hook("Fh", new S(501545959, !0), "var-init"),
    Gh = cc11001100_hook("Gh", new S(506619840), "var-init"),
    Hh = cc11001100_hook("Hh", new S(502896280), "var-init");
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
    return M(Ih).j(Zg.h, Zg.defaultValue);
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
    Vg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = cc11001100_hook("b.style.display", "block", "assign"));
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
          la: cc11001100_hook("la", e => Oh(e.previousSibling, c), "object-key-init"),
          oa: cc11001100_hook("oa", 0, "object-key-init")
        };
      case 2:
        return {
          init: cc11001100_hook("init", Oh(a.lastChild, c), "object-key-init"),
          la: cc11001100_hook("la", e => Oh(e.previousSibling, c), "object-key-init"),
          oa: cc11001100_hook("oa", 0, "object-key-init")
        };
      case 3:
        return {
          init: cc11001100_hook("init", Oh(a.nextSibling, d), "object-key-init"),
          la: cc11001100_hook("la", e => Oh(e.nextSibling, d), "object-key-init"),
          oa: cc11001100_hook("oa", 3, "object-key-init")
        };
      case 1:
        return {
          init: cc11001100_hook("init", Oh(a.firstChild, d), "object-key-init"),
          la: cc11001100_hook("la", e => Oh(e.nextSibling, d), "object-key-init"),
          oa: cc11001100_hook("oa", 3, "object-key-init")
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
    for (; a && a != a.top && Ic(a); a = cc11001100_hook("a", a.parent, "assign")) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }, "var-init");
  var Rh = cc11001100_hook("Rh", (a, b) => {
    do {
      const c = cc11001100_hook("c", Mc(a, b), "var-init");
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
  var Th = cc11001100_hook("Th", (a, b) => !((Uc.test(b.google_ad_width) || Tc.test(a.style.width)) && (Uc.test(b.google_ad_height) || Tc.test(a.style.height))), "var-init"),
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
      if (a !== a.top) return Jc(a) ? 3 : 16;
      if (!(488 > P(a).clientWidth)) return 4;
      if (!(a.innerHeight >= a.innerWidth)) return 5;
      const f = cc11001100_hook("f", P(a).clientWidth, "var-init");
      if (!f || (f - c) / f > d) a = cc11001100_hook("a", 6, "assign");else {
        if (c = cc11001100_hook("c", "true" != e.google_full_width_responsive, "assign")) a: {
          c = cc11001100_hook("c", b.parentElement, "assign");
          for (b = cc11001100_hook("b", P(a).clientWidth, "assign"); c; c = cc11001100_hook("c", c.parentElement, "assign")) if ((d = cc11001100_hook("d", Mc(c, a), "assign")) && (e = cc11001100_hook("e", K(d.width), "assign")) && !(e >= b) && "visible" != d.overflow) {
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
          c = cc11001100_hook("c", Mc(b, a), "assign");
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
    c = cc11001100_hook("c", (c = cc11001100_hook("c", b.parentElement, "assign")) ? (c = cc11001100_hook("c", Mc(c, a), "assign")) ? c.direction : "" : "", "assign");
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
      this.L = cc11001100_hook("this.L", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
    height() {
      return this.j;
    }
    h(a) {
      return 300 < a && 300 < this.j ? this.L : Math.min(1200, Math.round(a));
    }
    i() {}
  }, "var-init");
  var di = cc11001100_hook("di", (a, b, c, d = e => e) => {
      let e;
      return a.style && a.style[c] && d(a.style[c]) || (e = cc11001100_hook("e", Mc(a, b), "assign")) && e[c] && d(e[c]) || null;
    }, "var-init"),
    ei = cc11001100_hook("ei", a => b => b.L <= a, "var-init"),
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
    const c = cc11001100_hook("c", 0 == qd(a), "var-init");
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
        e = cc11001100_hook("e", Ac(d.Wb), "var-init");
      a[e] = cc11001100_hook("a[e]", d.value, "assign");
    }
  }
  ;
  class ni {
    constructor() {
      var a = cc11001100_hook("a", nd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`, "var-init");
      this.h = cc11001100_hook("this.h", null, "assign");
      this.j = cc11001100_hook("this.j", !1, "assign");
      this.m = cc11001100_hook("this.m", Math.random(), "assign");
      this.i = cc11001100_hook("this.i", this.I, "assign");
      this.A = cc11001100_hook("this.A", a, "assign");
    }
    xa(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
    }
    l(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Sa(a) {
      this.i = cc11001100_hook("this.i", a, "assign");
    }
    I(a, b, c = .01, d, e = "jserror") {
      if ((this.j ? this.m : Math.random()) > c) return !1;
      ud(b) || (b = cc11001100_hook("b", new td(b, {
        context: cc11001100_hook("context", a, "object-key-init"),
        id: cc11001100_hook("id", e, "object-key-init")
      }), "assign"));
      if (d || this.h) b.meta = cc11001100_hook("b.meta", {}, "assign"), this.h && this.h(b.meta), d && d(b.meta);
      n.google_js_errors = cc11001100_hook("n.google_js_errors", n.google_js_errors || [], "assign");
      n.google_js_errors.push(b);
      n.error_rep_loaded || (Kc(n.document, this.A), n.error_rep_loaded = cc11001100_hook("n.error_rep_loaded", !0, "assign"));
      return !1;
    }
    ha(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.i(a, d, .01, c, "jserror")) throw d;
      }
    }
    pa(a, b) {
      return (...c) => this.ha(a, () => b.apply(void 0, c));
    }
    ba(a, b) {
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
        const h = cc11001100_hook("h", Kd(), "var-init");
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
            duration: cc11001100_hook("duration", (Kd() || 0) - h, "object-key-init"),
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
    if (t(a, 1) || a.getId() || 0 < wb(a, 4).length) {
      b = cc11001100_hook("b", wb(a, 4), "assign");
      var c = cc11001100_hook("c", t(a, 3), "var-init"),
        d = cc11001100_hook("d", t(a, 1), "var-init"),
        e = cc11001100_hook("e", "", "var-init");
      d && (e += cc11001100_hook("e", d, "assign"));
      c && (e += cc11001100_hook("e", "#" + Sg(c), "assign"));
      if (b) for (c = cc11001100_hook("c", 0, "assign"); c < b.length; c++) e += cc11001100_hook("e", "." + Sg(b[c]), "assign");
      a = cc11001100_hook("a", (b = cc11001100_hook("b", e, "assign")) ? new Ug(b, t(a, 2), t(a, 5), ti(t(a, 6))) : null, "assign");
    } else a = cc11001100_hook("a", b ? new Ug(b, t(a, 2), t(a, 5), ti(t(a, 6))) : null, "assign");
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
  var yi = cc11001100_hook("yi", Zb(class extends I {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  var zi = cc11001100_hook("zi", a => {
    switch (t(a, 8)) {
      case 1:
      case 2:
        if (null == a) var b = cc11001100_hook("b", null, "var-init");else b = cc11001100_hook("b", B(a, O, 1), "assign"), null == b ? b = cc11001100_hook("b", null, "assign") : (a = cc11001100_hook("a", t(a, 2), "assign"), b = cc11001100_hook("b", null == a ? null : new mg({
          Xa: cc11001100_hook("Xa", [b], "object-key-init"),
          qb: cc11001100_hook("qb", a, "object-key-init")
        }), "assign"));
        return null != b ? cg(b) : eg(Error("Missing dimension when creating placement id"));
      case 3:
        return eg(Error("Missing dimension when creating placement id"));
      default:
        return eg(Error("Invalid type: " + t(a, 8)));
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
        return Ib(this, Mi, 2, Ni);
      }
    }, "var-init"),
    Ni = cc11001100_hook("Ni", [1, 2], "var-init");
  var Qi = cc11001100_hook("Qi", class extends I {
      constructor(a) {
        super(a, -1, Pi);
      }
      i() {
        return B(this, Oi, 3);
      }
    }, "var-init"),
    Pi = cc11001100_hook("Pi", [1, 4], "var-init");
  var Ti = cc11001100_hook("Ti", class extends I {
      constructor(a) {
        super(a, -1, Ri);
      }
    }, "var-init"),
    Ui = cc11001100_hook("Ui", Zb(Ti), "var-init"),
    Ri = cc11001100_hook("Ri", [1, 2, 5, 7], "var-init");
  var Vi = cc11001100_hook("Vi", (a, b) => {
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
  function Wi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new kg(), "var-init"),
      d = cc11001100_hook("d", new jg(), "var-init");
    b.forEach(e => {
      if (Ib(e, Gi, 1, Ji)) {
        e = cc11001100_hook("e", Ib(e, Gi, 1, Ji), "assign");
        if (B(e, Q, 1) && B(B(e, Q, 1), O, 1) && B(e, Q, 2) && B(B(e, Q, 2), O, 1)) {
          const g = cc11001100_hook("g", Xi(a, B(B(e, Q, 1), O, 1)), "var-init"),
            h = cc11001100_hook("h", Xi(a, B(B(e, Q, 2), O, 1)), "var-init");
          if (g && h) for (var f of Vi({
            anchor: cc11001100_hook("anchor", g, "object-key-init"),
            position: cc11001100_hook("position", t(B(e, Q, 1), 2), "object-key-init")
          }, {
            anchor: cc11001100_hook("anchor", h, "object-key-init"),
            position: cc11001100_hook("position", t(B(e, Q, 2), 2), "object-key-init")
          })) c.set(ea(f.anchor), f.position);
        }
        B(e, Q, 3) && B(B(e, Q, 3), O, 1) && (f = cc11001100_hook("f", Xi(a, B(B(e, Q, 3), O, 1)), "assign")) && c.set(ea(f), t(B(e, Q, 3), 2));
      } else Ib(e, Hi, 2, Ji) ? Yi(a, Ib(e, Hi, 2, Ji), c) : Ib(e, Fi, 3, Ji) && Zi(a, Ib(e, Fi, 3, Ji), d);
    });
    return new $i(c, d);
  }
  class $i {
    constructor(a, b) {
      this.i = cc11001100_hook("this.i", a, "assign");
      this.h = cc11001100_hook("this.h", b, "assign");
    }
  }
  const Yi = cc11001100_hook("Yi", (a, b, c) => {
      B(b, Q, 2) ? (b = cc11001100_hook("b", B(b, Q, 2), "assign"), (a = cc11001100_hook("a", Xi(a, B(b, O, 1)), "assign")) && c.set(ea(a), t(b, 2))) : B(b, O, 1) && (a = cc11001100_hook("a", aj(a, B(b, O, 1)), "assign")) && a.forEach(d => {
        d = cc11001100_hook("d", ea(d), "assign");
        c.set(d, 1);
        c.set(d, 4);
        c.set(d, 2);
        c.set(d, 3);
      });
    }, "var-init"),
    Zi = cc11001100_hook("Zi", (a, b, c) => {
      B(b, O, 1) && (a = cc11001100_hook("a", aj(a, B(b, O, 1)), "assign")) && a.forEach(d => {
        c.add(ea(d));
      });
    }, "var-init"),
    Xi = cc11001100_hook("Xi", (a, b) => (a = cc11001100_hook("a", aj(a, b), "assign")) && 0 < a.length ? a[0] : null, "var-init"),
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
    a = cc11001100_hook("a", Mc(a, b), "assign");
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
    const c = cc11001100_hook("c", C(a.i, Pg, 1), "var-init");
    a.j = cc11001100_hook("a.j", 0, "assign");
    const d = cc11001100_hook("d", qj(a.B), "var-init");
    if (kj(a.h.location, "google_audio_sense")) {
      var e = cc11001100_hook("e", new Jg(), "var-init");
      e = cc11001100_hook("e", x(e, 1, 1), "assign");
      var f = cc11001100_hook("f", new Ig(), "var-init");
      f = cc11001100_hook("f", x(f, 2, !0), "assign");
      e = cc11001100_hook("e", Eb(e, 2, f), "assign");
      f = cc11001100_hook("f", new Hg(), "assign");
      var g = cc11001100_hook("g", new Eg(), "var-init");
      var h = cc11001100_hook("h", x(g, 1, 1), "var-init");
      g = cc11001100_hook("g", r(f.u), "assign");
      if (g & 2) throw Error();
      g = cc11001100_hook("g", Db(f, Eg, 1, !1, g), "assign");
      h = cc11001100_hook("h", null != h ? h : new Eg(), "assign");
      var l = cc11001100_hook("l", tb(f, 1, 2, void 0, !1), "var-init");
      g.push(h);
      l.push(h.u);
      hb(h.u) && fb(l, 8);
      g = cc11001100_hook("g", new Fg(), "assign");
      g = cc11001100_hook("g", x(g, 1, !0), "assign");
      f = cc11001100_hook("f", Eb(f, 2, g), "assign");
      e = cc11001100_hook("e", Eb(e, 3, f), "assign");
    } else e = cc11001100_hook("e", B(a.i, Jg, 27), "assign");
    if (f = cc11001100_hook("f", e, "assign")) if (g = cc11001100_hook("g", B(a.i, Mg, 6)?.i() || [], "assign"), e = cc11001100_hook("e", a.h, "assign"), 1 == H(f, 1) && B(f, Ig, 2)?.i() && 0 != g.length) {
      var k;
      f = cc11001100_hook("f", [], "assign");
      for (k of g) if (g = cc11001100_hook("g", si(B(k, O, 1) || null), "assign")) g = cc11001100_hook("g", g.query(e.document), "assign"), 0 < g.length && f.push(g[0]);
      f = cc11001100_hook("f", f.filter(Ag).filter(Bg(f)).filter(Cg(e)), "assign");
      f.sort(Dg);
      if (k = cc11001100_hook("k", f[0] || null, "assign")) f = cc11001100_hook("f", e.document.createElement("div"), "assign"), f.id = cc11001100_hook("f.id", "google-auto-placed-read-aloud-player-reserved", "assign"), Yc(f, {
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
    m = cc11001100_hook("m", null !== u && G(u, 2, !1), "assign");
    u = cc11001100_hook("u", wi(k), "assign");
    m && (u.eatf = cc11001100_hook("u.eatf", !0, "assign"), kd(7, [!0, 0, !1]));
    b: {
      f = cc11001100_hook("f", {
        gb: cc11001100_hook("gb", !1, "object-key-init"),
        hb: cc11001100_hook("hb", !1, "object-key-init")
      }, "assign");
      h = cc11001100_hook("h", q(k.document.querySelectorAll(".google-auto-placed")), "assign");
      l = cc11001100_hook("l", q(k.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")), "assign");
      const w = cc11001100_hook("w", q(k.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")), "var-init");
      g = cc11001100_hook("g", (nj(k) || q(k.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(q(k.document.querySelectorAll("iframe[id^=google_ads_iframe]"))), "assign");
      const y = cc11001100_hook("y", q(k.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")), "var-init"),
        E = cc11001100_hook("E", q(k.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), "var-init"),
        xa = cc11001100_hook("xa", q(k.document.querySelectorAll("div.googlepublisherpluginad")), "var-init"),
        R = cc11001100_hook("R", q(k.document.querySelectorAll("html > ins.adsbygoogle")), "var-init");
      e = cc11001100_hook("e", [].concat(q(k.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), q(k.document.querySelectorAll("body ins.adsbygoogle"))), "assign");
      m = cc11001100_hook("m", [], "assign");
      for (const [ya, na] of [[f.Qb, h], [f.gb, l], [f.Tb, w], [f.Rb, g], [f.Ub, y], [f.Pb, E], [f.Sb, xa], [f.hb, R]]) f = cc11001100_hook("f", na, "assign"), !1 === ya ? m = cc11001100_hook("m", m.concat(f), "assign") : e = cc11001100_hook("e", e.concat(f), "assign");
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
    v = cc11001100_hook("v", new jg([2]), "assign");
    for (u = cc11001100_hook("u", 0, "assign"); u < c.length; u++) {
      m = cc11001100_hook("m", a, "assign");
      e = cc11001100_hook("e", c[u], "assign");
      k = cc11001100_hook("k", u, "assign");
      f = cc11001100_hook("f", b, "assign");
      g = cc11001100_hook("g", d, "assign");
      h = cc11001100_hook("h", v, "assign");
      if (B(e, qg, 4) && h.contains(t(B(e, qg, 4), 1)) && 1 === t(e, 8) && rj(e, g)) {
        m.j++;
        if (f = cc11001100_hook("f", sj(m, e, f, g), "assign")) g = cc11001100_hook("g", wi(m.h), "assign"), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = cc11001100_hook("g.numAutoAdsPlaced", 0, "assign")), B(e, O, 1) && null != t(B(e, O, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = cc11001100_hook("g.numPostPlacementsPlaced", 1, "assign")), null == g.placed && (g.placed = cc11001100_hook("g.placed", [], "assign")), g.numAutoAdsPlaced++, g.placed.push({
          index: cc11001100_hook("index", k, "object-key-init"),
          element: cc11001100_hook("element", f.ja, "object-key-init")
        }), kd(7, [!1, m.j, !0]);
        m = cc11001100_hook("m", f, "assign");
      } else m = cc11001100_hook("m", null, "assign");
      if (m) return !0;
    }
    kd(7, [!1, a.j, !1]);
    return !1;
  }
  function sj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (!rj(b, d) || 1 != t(b, 8)) return null;
    d = cc11001100_hook("d", B(b, O, 1), "assign");
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
      if (c = cc11001100_hook("c", !f && !(!c && 2 == e && !jj(d)), "assign")) c = cc11001100_hook("c", 1 == e || 2 == e ? d : d.parentNode, "assign"), c = cc11001100_hook("c", !(c && !Vg(c) && 0 >= c.offsetWidth), "assign");
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
    f = cc11001100_hook("f", B(b, Ng, 3), "assign");
    c = cc11001100_hook("c", {}, "assign");
    f && (c.Ua = cc11001100_hook("c.Ua", t(f, 1), "assign"), c.La = cc11001100_hook("c.La", t(f, 2), "assign"), c.ab = cc11001100_hook("c.ab", !!vb(f, 3), "assign"));
    f = cc11001100_hook("f", B(b, qg, 4) && t(B(b, qg, 4), 2) ? t(B(b, qg, 4), 2) : null, "assign");
    f = cc11001100_hook("f", tg(f), "assign");
    g = cc11001100_hook("g", null != t(b, 12) ? t(b, 12) : null, "assign");
    g = cc11001100_hook("g", null == g ? null : new sg(null, {
      google_ml_rank: cc11001100_hook("google_ml_rank", g, "object-key-init")
    }), "assign");
    b = cc11001100_hook("b", tj(a, b), "assign");
    b = cc11001100_hook("b", rg(a.m, f, g, b), "assign");
    f = cc11001100_hook("f", a.h, "assign");
    a = cc11001100_hook("a", a.C, "assign");
    var h = cc11001100_hook("h", f.document, "var-init"),
      l = cc11001100_hook("l", c.ab || !1, "var-init");
    g = cc11001100_hook("g", new Cc(h).createElement("DIV"), "assign");
    const k = cc11001100_hook("k", g.style, "var-init");
    k.width = cc11001100_hook("k.width", "100%", "assign");
    k.height = cc11001100_hook("k.height", "auto", "assign");
    k.clear = cc11001100_hook("k.clear", l ? "both" : "none", "assign");
    l = cc11001100_hook("l", g.style, "assign");
    l.textAlign = cc11001100_hook("l.textAlign", "center", "assign");
    c.ob && mi(l, c.ob);
    h = cc11001100_hook("h", new Cc(h).createElement("INS"), "assign");
    l = cc11001100_hook("l", h.style, "assign");
    l.display = cc11001100_hook("l.display", "block", "assign");
    l.margin = cc11001100_hook("l.margin", "auto", "assign");
    l.backgroundColor = cc11001100_hook("l.backgroundColor", "transparent", "assign");
    c.Ua && (l.marginTop = cc11001100_hook("l.marginTop", c.Ua, "assign"));
    c.La && (l.marginBottom = cc11001100_hook("l.marginBottom", c.La, "assign"));
    c.Wa && mi(l, c.Wa);
    g.appendChild(h);
    c = cc11001100_hook("c", {
      ta: cc11001100_hook("ta", g, "object-key-init"),
      ja: cc11001100_hook("ja", h, "object-key-init")
    }, "assign");
    c.ja.setAttribute("data-ad-format", "auto");
    g = cc11001100_hook("g", [], "assign");
    if (h = cc11001100_hook("h", b && b.Ma, "assign")) c.ta.className = cc11001100_hook("c.ta.className", h.join(" "), "assign");
    h = cc11001100_hook("h", c.ja, "assign");
    h.className = cc11001100_hook("h.className", "adsbygoogle", "assign");
    h.setAttribute("data-ad-client", a);
    g.length && h.setAttribute("data-ad-channel", g.join("+"));
    a: {
      try {
        var m = cc11001100_hook("m", c.ta, "var-init");
        if (T(bh)) {
          {
            const E = cc11001100_hook("E", Mh(d, e), "var-init");
            if (E.init) {
              var u = cc11001100_hook("u", E.init, "var-init");
              for (d = cc11001100_hook("d", u, "assign"); d = cc11001100_hook("d", E.la(d), "assign");) u = cc11001100_hook("u", d, "assign");
              var v = cc11001100_hook("v", {
                anchor: cc11001100_hook("anchor", u, "object-key-init"),
                position: cc11001100_hook("position", E.oa, "object-key-init")
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
          var w = cc11001100_hook("w", c.ja, "var-init");
          w.dataset.adsbygoogleStatus = cc11001100_hook("w.dataset.adsbygoogleStatus", "reserved", "assign");
          w.className += cc11001100_hook("w.className", " adsbygoogle-noablate", "assign");
          m = cc11001100_hook("m", {
            element: cc11001100_hook("element", w, "object-key-init")
          }, "assign");
          var y = cc11001100_hook("y", b && b.Ra, "var-init");
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
        (w = cc11001100_hook("w", c.ta, "assign")) && w.parentNode && (y = cc11001100_hook("y", w.parentNode, "assign"), y.removeChild(w), Vg(y) && (y.style.display = cc11001100_hook("y.style.display", y.getAttribute("data-init-display") || "none", "assign")));
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
    return gg(ig(zi(b).map(ug), c => {
      wi(a.h).exception = cc11001100_hook("wi(a.h).exception", c, "assign");
    }));
  }
  const uj = cc11001100_hook("uj", class {
    constructor(a, b, c, d, e) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.i = cc11001100_hook("this.i", c, "assign");
      this.m = cc11001100_hook("this.m", e || null, "assign");
      this.A = cc11001100_hook("this.A", (this.B = cc11001100_hook("this.B", d, "assign")) ? Wi(a.document, C(d, Ii, 5)) : Wi(a.document, []), "assign");
      this.v = cc11001100_hook("this.v", new gj(), "assign");
      this.j = cc11001100_hook("this.j", 0, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
  }, "var-init");
  function qj(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    a && ub(a, 6, !1).forEach(c => {
      b[c] = cc11001100_hook("b[c]", !0, "assign");
    });
    return b;
  }
  function rj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && void 0 !== Bb(a, qg, 4, !1) && b[t(B(a, qg, 4), 2)] ? !1 : !0;
  }
  ;
  var vj = cc11001100_hook("vj", Zb(class extends I {
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
  const xj = cc11001100_hook("xj", new Rd(n), "var-init");
  var yj = cc11001100_hook("yj", a => {
    null != a && (n.google_measure_js_timing = cc11001100_hook("n.google_measure_js_timing", a, "assign"));
    n.google_measure_js_timing || Qd(xj);
  }, "var-init");
  (a => {
    wj = cc11001100_hook("wj", a || new Gd(), "assign");
    "number" !== typeof n.google_srt && (n.google_srt = cc11001100_hook("n.google_srt", Math.random(), "assign"));
    Ed(wj, n.google_srt);
    V = cc11001100_hook("V", new Td(wj, xj), "assign");
    V.l(!0);
    "complete" == n.document.readyState ? yj() : xj.h && jc(n, "load", () => {
      yj();
    });
  })();
  var zj = cc11001100_hook("zj", (a, b, c) => V.ha(a, b, c), "var-init"),
    Aj = cc11001100_hook("Aj", (a, b, c) => {
      const d = cc11001100_hook("d", M(Pf).i(), "var-init");
      !b.eid && d.length && (b.eid = cc11001100_hook("b.eid", d.toString(), "assign"));
      Fd(wj, a, b, !0, c);
    }, "var-init"),
    Bj = cc11001100_hook("Bj", (a, b) => {
      V.ba(a, b);
    }, "var-init"),
    Cj = cc11001100_hook("Cj", (a, b, c, d) => {
      let e;
      ud(b) ? e = cc11001100_hook("e", b.msg || Sd(b.error), "assign") : e = cc11001100_hook("e", Sd(b), "assign");
      return 0 == e.indexOf("TagError") ? (c = cc11001100_hook("c", b instanceof td ? b.error : b, "assign"), c.pbr || (c.pbr = cc11001100_hook("c.pbr", !0, "assign"), V.I(a, b, .1, d, "puberror")), !1) : V.I(a, b, c, d);
    }, "var-init");
  function Dj(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b = cc11001100_hook("b", a.localStorage.getItem("google_auto_fc_cmp_setting") || null, "var-init");
    } catch (d) {
      b = cc11001100_hook("b", null, "assign");
    }
    const c = cc11001100_hook("c", b, "var-init");
    return c ? fg(() => vj(c)) : cg(null);
  }
  ;
  function Ej() {
    if (Fj) return Fj;
    const a = cc11001100_hook("a", md() || window, "var-init"),
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
    "object" === typeof c && (h = cc11001100_hook("h", c.Xb, "assign"), g = cc11001100_hook("g", c.Yb || !1, "assign"), f = cc11001100_hook("f", c.domain || void 0, "assign"), e = cc11001100_hook("e", c.path || void 0, "assign"), d = cc11001100_hook("d", c.mb, "assign"));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = cc11001100_hook("d", -1, "assign"));
    this.h.cookie = cc11001100_hook("this.h.cookie", a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1E3 * d).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : ""), "assign");
  }, "assign");
  Lj.prototype.get = cc11001100_hook("Lj.prototype.get", function (a, b) {
    const c = cc11001100_hook("c", a + "=", "var-init"),
      d = cc11001100_hook("d", (this.h.cookie || "").split(";"), "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"), f; e < d.length; e++) {
      f = cc11001100_hook("f", qa(d[e]), "assign");
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
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) e = cc11001100_hook("e", qa(a[f]), "assign"), d = cc11001100_hook("d", e.indexOf("="), "assign"), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (c = cc11001100_hook("c", b.length - 1, "assign"); 0 <= c; c--) a = cc11001100_hook("a", b[c], "assign"), this.get(a), this.set(a, "", {
      mb: cc11001100_hook("mb", 0, "object-key-init"),
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
    return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (hd({
      e: cc11001100_hook("e", String(a.internalErrorState), "object-key-init")
    }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
  }
  function Rj(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.i) return a.i;
    a.i = cc11001100_hook("a.i", Wc(a.l, "__tcfapiLocator"), "assign");
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
  function Uj(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m || (a.m = cc11001100_hook("a.m", b => {
      try {
        var c = cc11001100_hook("c", ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn, "var-init");
        a.v[c.callId](c.returnValue, c.success);
      } catch (d) {}
    }, "assign"), jc(a.l, "message", a.m));
  }
  class Vj extends Ze {
    constructor(a) {
      var b = cc11001100_hook("b", {}, "var-init");
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.v = cc11001100_hook("this.v", {}, "assign");
      this.K = cc11001100_hook("this.K", 0, "assign");
      this.C = cc11001100_hook("this.C", b.Ta ?? 500, "assign");
      this.B = cc11001100_hook("this.B", b.Ob ?? !1, "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
    }
    h() {
      this.v = cc11001100_hook("this.v", {}, "assign");
      this.m && (kc(this.l, "message", this.m), delete this.m);
      delete this.v;
      delete this.l;
      delete this.i;
      super.h();
    }
    addEventListener(a) {
      let b = cc11001100_hook("b", {
        internalBlockOnErrors: cc11001100_hook("internalBlockOnErrors", this.B, "object-key-init")
      }, "var-init");
      const c = cc11001100_hook("c", ic(() => a(b)), "var-init");
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
      Ta: c,
      callback: d,
      ma: e = !1,
      na: f = !1
    }) => {
      b = cc11001100_hook("b", Wj({
        s: cc11001100_hook("s", a, "object-key-init"),
        W: cc11001100_hook("W", b, "object-key-init"),
        ma: cc11001100_hook("ma", e, "object-key-init"),
        na: cc11001100_hook("na", f, "object-key-init")
      }), "assign");
      null != b.h || "tcunav" != b.i.message ? d(b) : Xj(a, c).then(g => g.map(Yj)).then(g => g.map(h => Zj(a, h))).then(d);
    }, "var-init"),
    Wj = cc11001100_hook("Wj", ({
      s: a,
      W: b,
      ma: c = !1,
      na: d = !1
    }) => {
      if (!bk({
        s: cc11001100_hook("s", a, "object-key-init"),
        W: cc11001100_hook("W", b, "object-key-init"),
        ma: cc11001100_hook("ma", c, "object-key-init"),
        na: cc11001100_hook("na", d, "object-key-init")
      })) return Zj(a, Nj(!0));
      b = cc11001100_hook("b", Ej(), "assign");
      return (b = cc11001100_hook("b", Kj(b, 24), "assign")) ? Zj(a, Yj(b)) : eg(Error("tcunav"));
    }, "var-init");
  function bk({
    s: a,
    W: b,
    ma: c,
    na: d
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
      a.setTimeout(c, b, eg(Error("tcto")));
    });
  }
  function ek(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? cg(a) : eg(Error("tcnull"));
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
    return (a = cc11001100_hook("a", Mj(b, a), "assign")) ? cg(a) : eg(Error("unav"));
  }
  ;
  var gk = cc11001100_hook("gk", class extends I {
      constructor(a) {
        super(a, -1, fk);
      }
    }, "var-init"),
    fk = cc11001100_hook("fk", [1, 2, 3], "var-init");
  var hk = cc11001100_hook("hk", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return B(this, gk, 2);
    }
  }, "var-init");
  const ik = cc11001100_hook("ik", class {
    constructor(a) {
      this.exception = cc11001100_hook("this.exception", a, "assign");
    }
  }, "var-init");
  function jk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      var c = cc11001100_hook("c", a.i, "var-init"),
        d = cc11001100_hook("d", c.resolve, "var-init"),
        e = cc11001100_hook("e", a.h, "var-init");
      wi(e.h);
      C(e.i, Pg, 1);
      d.call(c, new ik(b));
    } catch (f) {
      a = cc11001100_hook("a", a.i, "assign"), b = cc11001100_hook("b", f, "assign"), Vf(a), a.h = cc11001100_hook("a.h", 2, "assign"), a.j = cc11001100_hook("a.j", b, "assign"), Xf(a.i);
    }
  }
  var kk = cc11001100_hook("kk", class {
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
            jk(this);
            break;
          default:
            pj(this.h, !1) ? jk(this) : this.j.setTimeout(ka(this.l, this), 100);
        }
      } catch (a) {
        jk(this, a);
      }
    }
  }, "var-init");
  var lk = cc11001100_hook("lk", "a".charCodeAt(), "var-init"),
    mk = cc11001100_hook("mk", nc(Tf), "var-init"),
    nk = cc11001100_hook("nk", nc(Uf), "var-init");
  function W(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
    const c = cc11001100_hook("c", a.i.substring(a.h, a.h + b), "var-init");
    a.h += cc11001100_hook("a.h", b, "assign");
    return parseInt(c, 2);
  }
  function ok(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String.fromCharCode(lk + W(a, 6)) + String.fromCharCode(lk + W(a, 6));
  }
  function pk(a) {
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
  function qk(a, b, c) {
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
  function rk(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", W(a, 16), "var-init");
    return !0 === !!W(a, 1) ? (a = cc11001100_hook("a", pk(a), "assign"), a.forEach(c => {
      if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
    }), a) : qk(a, b);
  }
  class sk {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.i = cc11001100_hook("this.i", a, "assign");
      this.h = cc11001100_hook("this.h", 0, "assign");
    }
  }
  ;
  var uk = cc11001100_hook("uk", (a, b) => {
    try {
      var c = cc11001100_hook("c", Xa(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join(""), "var-init");
      const d = cc11001100_hook("d", new sk(c), "var-init");
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
      c.specialFeatureOptins = cc11001100_hook("c.specialFeatureOptins", tk(qk(d, 12, nk), nk), "assign");
      c.purpose = cc11001100_hook("c.purpose", {
        consents: cc11001100_hook("consents", tk(qk(d, 24, mk), mk), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", tk(qk(d, 24, mk), mk), "object-key-init")
      }, "assign");
      c.purposeOneTreatment = cc11001100_hook("c.purposeOneTreatment", !!W(d, 1), "assign");
      c.publisherCC = cc11001100_hook("c.publisherCC", ok(d), "assign");
      c.vendor = cc11001100_hook("c.vendor", {
        consents: cc11001100_hook("consents", tk(rk(d), b), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", tk(rk(d), b), "object-key-init")
      }, "assign");
      return c;
    } catch (d) {
      return null;
    }
  }, "var-init");
  const tk = cc11001100_hook("tk", (a, b) => {
    const c = cc11001100_hook("c", {}, "var-init");
    if (Array.isArray(b) && 0 !== b.length) for (const d of b) c[d] = cc11001100_hook("c[d]", -1 !== a.indexOf(d), "assign");else for (const d of a) c[d] = cc11001100_hook("c[d]", !0, "assign");
    delete c[0];
    return c;
  }, "var-init");
  var vk = cc11001100_hook("vk", class {
    constructor() {
      this.h = cc11001100_hook("this.h", {}, "assign");
    }
  }, "var-init");
  var wk = cc11001100_hook("wk", class extends I {
    constructor() {
      super();
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
    }, "var-init"),
    zk = cc11001100_hook("zk", [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27], "var-init");
  var Ak = cc11001100_hook("Ak", class {}, "var-init");
  var Bk = cc11001100_hook("Bk", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ck = cc11001100_hook("Ck", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ek = cc11001100_hook("Ek", Zb(class extends I {
      constructor(a) {
        super(a, -1, Dk);
      }
    }), "var-init"),
    Dk = cc11001100_hook("Dk", [7], "var-init");
  var Fk = cc11001100_hook("Fk", new class {
    constructor() {
      this.key = cc11001100_hook("this.key", "45369554", "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", !1, "assign");
      this.valueType = cc11001100_hook("this.valueType", "boolean", "assign");
    }
  }(), "var-init");
  var Gk = cc11001100_hook("Gk", class extends vk {
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
    Hk;
  function Ik(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Jk(a), "assign")) ? B(a, Ck, 4) : null;
  }
  function Jk(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", new Lj(a).get("FCCDCF", ""), "assign")) {
      if (a.startsWith("%")) try {
        var b = cc11001100_hook("b", decodeURIComponent(a), "var-init");
      } catch (c) {
        Kk(1), b = cc11001100_hook("b", null, "assign");
      } else b = cc11001100_hook("b", a, "assign");
    } else b = cc11001100_hook("b", null, "assign");
    try {
      return b ? Ek(b) : null;
    } catch (c) {
      return Kk(2), null;
    }
  }
  function Kk(a) {
    cc11001100_hook("a", a, "function-parameter");
    new Ak();
    var b = cc11001100_hook("b", new wk(), "var-init");
    a = cc11001100_hook("a", x(b, 7, a), "assign");
    b = cc11001100_hook("b", new xk(), "assign");
    a = cc11001100_hook("a", Eb(b, 1, a), "assign");
    b = cc11001100_hook("b", new yk(), "assign");
    Fb(b, 22, zk, a);
    Hk || (Hk = cc11001100_hook("Hk", new Gk(), "assign"));
    a = cc11001100_hook("a", Hk.h[Fk.key], "assign");
    if ("proto" === Fk.valueType) try {
      JSON.parse(a);
    } catch (c) {}
  }
  ;
  nc(Tf).map(a => Number(a));
  nc(Uf).map(a => Number(a));
  function Lk(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.__tcfapiPostMessageReady || Mk(new Nk(a));
  }
  function Mk(a) {
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
  var Nk = cc11001100_hook("Nk", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
    }
  }, "var-init");
  var Ok = cc11001100_hook("Ok", (a, b) => {
    const c = cc11001100_hook("c", a.document, "var-init"),
      d = cc11001100_hook("d", () => {
        if (!a.frames[b]) if (c.body) {
          const e = cc11001100_hook("e", Lc("IFRAME", c), "var-init");
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
  function Pk() {
    var a = cc11001100_hook("a", window, "var-init"),
      b = cc11001100_hook("b", T(gh), "var-init");
    a.__uspapi || a.frames.__uspapiLocator || (a = cc11001100_hook("a", new Qk(a), "assign"), Rk(a), b && Sk(a));
  }
  function Rk(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = cc11001100_hook("a.h.__uspapiManager", "fc", "assign"), Ok(a.h, "__uspapiLocator"), ma("__uspapi", (...b) => Tk(a, ...b)));
  }
  function Sk(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = cc11001100_hook("a.h.__tcfapiManager", "fc", "assign"), Ok(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = cc11001100_hook("a.h.__tcfapiEventListeners", a.h.__tcfapiEventListeners || [], "assign"), ma("__tcfapi", (...b) => Uk(a, ...b)), Lk(a.h));
  }
  function Tk(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    "function" === typeof d && "getUSPData" === b && d({
      version: cc11001100_hook("version", 1, "object-key-init"),
      uspString: cc11001100_hook("uspString", a.m, "object-key-init")
    }, !0);
  }
  function Uk(a, b, c, d, e = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if ("function" === typeof d) if (c && 2 !== c) d(null, !1);else switch (c = cc11001100_hook("c", a.h.__tcfapiEventListeners, "assign"), b) {
      case "getTCData":
        !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(Vk(a, e, null), !0) : d(null, !1);
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
        d(Vk(a, null, b - 1), !0);
        break;
      case "removeEventListener":
        c[e] ? (c[e] = cc11001100_hook("c[e]", null, "assign"), d(!0)) : d(!1);
        break;
      case "getInAppTCData":
      case "getVendorList":
        d(null, !1);
    }
  }
  function Vk(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a.j) return null;
    b = cc11001100_hook("b", uk(a.j, b), "assign");
    b.addtlConsent = cc11001100_hook("b.addtlConsent", null != a.l ? a.l : void 0, "assign");
    b.cmpStatus = cc11001100_hook("b.cmpStatus", "loaded", "assign");
    b.eventStatus = cc11001100_hook("b.eventStatus", "tcloaded", "assign");
    null != c && (b.listenerId = cc11001100_hook("b.listenerId", c, "assign"));
    return b;
  }
  class Qk {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", a.document, "assign");
      this.m = cc11001100_hook("this.m", (a = cc11001100_hook("a", (a = cc11001100_hook("a", Jk(this.i), "assign")) ? B(a, Bk, 5) || null : null, "assign")) ? t(a, 2) : null, "assign");
      this.j = cc11001100_hook("this.j", (a = cc11001100_hook("a", Ik(this.i), "assign")) && null != t(a, 1) ? t(a, 1) : null, "assign");
      this.l = cc11001100_hook("this.l", (a = cc11001100_hook("a", Ik(this.i), "assign")) && null != t(a, 2) ? t(a, 2) : null, "assign");
    }
  }
  ;
  const Wk = cc11001100_hook("Wk", {
    google_ad_channel: cc11001100_hook("google_ad_channel", !0, "object-key-init"),
    google_ad_host: cc11001100_hook("google_ad_host", !0, "object-key-init")
  }, "var-init");
  var Xk = cc11001100_hook("Xk", (a, b) => {
      a.location.href && a.location.href.substring && (b.url = cc11001100_hook("b.url", a.location.href.substring(0, 200), "assign"));
      Aj("ama", b, .01);
    }, "var-init"),
    Yk = cc11001100_hook("Yk", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      J(Wk, (c, d) => {
        d in a && (b[d] = cc11001100_hook("b[d]", a[d], "assign"));
      });
      return b;
    }, "var-init");
  const Zk = cc11001100_hook("Zk", a => {
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
    $k = cc11001100_hook("$k", a => {
      let b = cc11001100_hook("b", "", "var-init");
      const c = cc11001100_hook("c", /[/%?&=]/, "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; ++d) {
        const e = cc11001100_hook("e", a[d], "var-init");
        b = cc11001100_hook("b", e.match(c) ? b + e : b + encodeURIComponent(e), "assign");
      }
      return b;
    }, "var-init");
  var al = cc11001100_hook("al", a => {
    a = cc11001100_hook("a", ub(a, 2, !1), "assign");
    if (!a) return !1;
    for (let b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) if (1 == a[b]) return !0;
    return !1;
  }, "var-init");
  const cl = cc11001100_hook("cl", (a, b) => {
      a = cc11001100_hook("a", $k(Zk(a.location.pathname)).replace(/(^\/)|(\/$)/g, ""), "assign");
      const c = cc11001100_hook("c", Rc(a), "var-init"),
        d = cc11001100_hook("d", bl(a), "var-init");
      return b.find(e => {
        const f = cc11001100_hook("f", void 0 !== Bb(e, Ei, 7, !1) ? t(B(e, Ei, 7), 1) : t(e, 1), "var-init");
        e = cc11001100_hook("e", void 0 !== Bb(e, Ei, 7, !1) ? t(B(e, Ei, 7), 2) : 2, "assign");
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
    bl = cc11001100_hook("bl", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      for (;;) {
        b[Rc(a)] = cc11001100_hook("b[Rc(a)]", !0, "assign");
        if (!a) return b;
        a = cc11001100_hook("a", a.substring(0, a.lastIndexOf("/")), "assign");
      }
    }, "var-init");
  var dl = cc11001100_hook("dl", a => {
    a = cc11001100_hook("a", B(a, Di, 3), "assign");
    return !a || t(a, 1) <= Date.now() ? !1 : !0;
  }, "var-init");
  function el(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (T($g)) var b = cc11001100_hook("b", null, "var-init");else try {
      b = cc11001100_hook("b", a.getItem("google_ama_config"), "assign");
    } catch (d) {
      b = cc11001100_hook("b", null, "assign");
    }
    try {
      var c = cc11001100_hook("c", b ? Ui(b) : null, "var-init");
    } catch (d) {
      c = cc11001100_hook("c", null, "assign");
    }
    return c;
  }
  ;
  var fl = cc11001100_hook("fl", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return B(this, hk, 2);
    }
    l() {
      return G(this, 3);
    }
  }, "var-init");
  var hl = cc11001100_hook("hl", class extends I {
      constructor(a) {
        super(a, -1, gl);
      }
      i() {
        return wb(this, 1);
      }
      l() {
        return B(this, fl, 2);
      }
    }, "var-init"),
    gl = cc11001100_hook("gl", [1], "var-init");
  var jl = cc11001100_hook("jl", class extends I {
      constructor(a) {
        super(a, -1, il);
      }
      getId() {
        return D(t(this, 1), 0);
      }
    }, "var-init"),
    il = cc11001100_hook("il", [2], "var-init");
  var ll = cc11001100_hook("ll", class extends I {
      constructor(a) {
        super(a, -1, kl);
      }
    }, "var-init"),
    kl = cc11001100_hook("kl", [2], "var-init");
  var nl = cc11001100_hook("nl", class extends I {
      constructor(a) {
        super(a, -1, ml);
      }
    }, "var-init"),
    ml = cc11001100_hook("ml", [2], "var-init");
  var ol = cc11001100_hook("ol", class extends I {
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
  var ql = cc11001100_hook("ql", class extends I {
      constructor(a) {
        super(a, -1, pl);
      }
    }, "var-init"),
    pl = cc11001100_hook("pl", [1, 4, 2, 3], "var-init");
  var tl = cc11001100_hook("tl", class extends I {
      constructor(a) {
        super(a, -1, rl);
      }
      l() {
        return Ib(this, fl, 13, sl);
      }
      A() {
        return void 0 !== Bb(this, fl, Ab(this, sl, 13));
      }
      i() {
        return Ib(this, hl, 14, sl);
      }
      m() {
        return void 0 !== Bb(this, hl, Ab(this, sl, 14));
      }
    }, "var-init"),
    rl = cc11001100_hook("rl", [19], "var-init"),
    sl = cc11001100_hook("sl", [13, 14], "var-init");
  let ul = cc11001100_hook("ul", void 0, "var-init");
  var xl = cc11001100_hook("xl", (a, b, c = "", d = null) => 1 === b && vl(c, d) ? !0 : wl(a, c, e => Oa(C(e, $b, 2), f => t(f, 1) === b)), "var-init"),
    vl = cc11001100_hook("vl", (a, b) => !b || G(b, 22) && !T(lh) ? !1 : b.A() ? G(b.l(), 1) : b.m() && "" !== a && 1 === b.i().i().length && b.i().i()[0] === a ? G(b.i().l(), 1) : !1, "var-init"),
    yl = cc11001100_hook("yl", (a, b) => {
      b = cc11001100_hook("b", D(t(b, 18), 0), "assign");
      -1 !== b && (a.tmod = cc11001100_hook("a.tmod", b, "assign"));
    }, "var-init"),
    Al = cc11001100_hook("Al", a => {
      const b = cc11001100_hook("b", Jc(L) || L, "var-init");
      return zl(b, a) ? !0 : wl(L, "", c => Oa(ub(c, 3, !1), d => d === a));
    }, "var-init");
  function zl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", (a = cc11001100_hook("a", (a = cc11001100_hook("a", a.location && a.location.hash, "assign")) && a.match(/forced_clientside_labs=([\d,]+)/), "assign")) && a[1], "assign");
    return !!a && Sa(a.split(","), b.toString());
  }
  function wl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Jc(a) || a, "assign");
    const d = cc11001100_hook("d", Bl(a), "var-init");
    b && (b = cc11001100_hook("b", sd(String(b)), "assign"));
    return mc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e));
  }
  function Bl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Cl(a), "assign");
    const b = cc11001100_hook("b", {}, "var-init");
    J(a, (c, d) => {
      try {
        const e = cc11001100_hook("e", new cc(c), "var-init");
        b[d] = cc11001100_hook("b[d]", e, "assign");
      } catch (e) {}
    });
    return b;
  }
  var Cl = cc11001100_hook("Cl", a => T(Xg) ? (Yb(ul, Wb), a = cc11001100_hook("a", Wj({
    s: cc11001100_hook("s", a, "object-key-init"),
    W: cc11001100_hook("W", ul, "object-key-init")
  }), "assign"), null != a.h ? Dl(a.h.value) : {}) : Dl(a.localStorage), "var-init");
  function Dl(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.getItem("google_adsense_settings"), "var-init");
      if (!b) return {};
      const c = cc11001100_hook("c", JSON.parse(b), "var-init");
      return c !== Object(c) ? {} : lc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d));
    } catch (b) {
      return {};
    }
  }
  function El(a) {
    cc11001100_hook("a", a, "function-parameter");
    T(hh) && Aj("atf_ad_settings_from_ppabg", {
      p_s: cc11001100_hook("p_s", a, "object-key-init")
    }, .01);
  }
  const Fl = cc11001100_hook("Fl", a => !!a && (0 < C(a, Pg, 1).length || T(ah) && 0 < C(a, Kg, 3).length), "var-init");
  var Gl = cc11001100_hook("Gl", () => {
    const a = cc11001100_hook("a", [], "var-init");
    T(eh) && a.push(1);
    T(dh) && a.push(2);
    T(fh) && a.push(7);
    return a;
  }, "var-init");
  function X(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_ad_modifications || (a.google_ad_modifications = cc11001100_hook("a.google_ad_modifications", {}, "assign"));
    return a.google_ad_modifications;
  }
  function Hl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", X(a), "assign");
    const b = cc11001100_hook("b", a.space_collapsing || "none", "var-init");
    return a.remove_ads_by_default ? {
      Ka: cc11001100_hook("Ka", !0, "object-key-init"),
      vb: cc11001100_hook("vb", b, "object-key-init"),
      ra: cc11001100_hook("ra", a.ablation_viewport_offset, "object-key-init")
    } : null;
  }
  function Il(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", X(a), "assign");
    a.had_ads_ablation = cc11001100_hook("a.had_ads_ablation", !0, "assign");
    a.remove_ads_by_default = cc11001100_hook("a.remove_ads_by_default", !0, "assign");
    a.space_collapsing = cc11001100_hook("a.space_collapsing", "slot", "assign");
    a.ablation_viewport_offset = cc11001100_hook("a.ablation_viewport_offset", b, "assign");
  }
  function Jl(a) {
    cc11001100_hook("a", a, "function-parameter");
    X(L).allow_second_reactive_tag = cc11001100_hook("X(L).allow_second_reactive_tag", a, "assign");
  }
  function Kl() {
    const a = cc11001100_hook("a", X(window), "var-init");
    a.afg_slotcar_vars || (a.afg_slotcar_vars = cc11001100_hook("a.afg_slotcar_vars", {}, "assign"));
    return a.afg_slotcar_vars;
  }
  ;
  function Ll(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.document.querySelector('meta[name="google-adsense-platform-account"]')?.getAttribute("content") ?? null;
  }
  ;
  function Ml(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Nl(new Ol(a, b, c, d));
  }
  function Nl(a) {
    cc11001100_hook("a", a, "function-parameter");
    ig(hg(Wj({
      s: cc11001100_hook("s", a.s, "object-key-init"),
      W: cc11001100_hook("W", G(a.i, 6), "object-key-init")
    }), b => {
      Pl(a, b, !0);
    }), () => {
      Ql(a);
    });
  }
  function Pl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    ig(hg(Rl(b), d => {
      Sl("ok");
      a.h(d, {
        fromLocalStorage: cc11001100_hook("fromLocalStorage", !0, "object-key-init")
      });
    }), () => {
      var d = cc11001100_hook("d", a.s, "var-init");
      try {
        b.removeItem("google_ama_config");
      } catch (e) {
        Xk(d, {
          lserr: cc11001100_hook("lserr", 1, "object-key-init")
        });
      }
      c ? Ql(a) : a.h(null, null);
    });
  }
  function Ql(a) {
    cc11001100_hook("a", a, "function-parameter");
    ig(hg(Tl(a), b => {
      a.h(b, {
        fromPABGSettings: cc11001100_hook("fromPABGSettings", !0, "object-key-init")
      });
    }), () => {
      Ul(a);
    });
  }
  function Rl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", (a = cc11001100_hook("a", el(a), "assign")) ? dl(a) ? a : null : null, "assign")) ? cg(a) : eg(Error("invlocst"));
  }
  function Tl(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.s, "var-init");
    if ((X(b)?.head_tag_slot_vars?.google_ad_host ?? Ll(b)) && (!G(a.i, 22) || !T(kh))) return eg(Error("invtag"));
    a: {
      b = cc11001100_hook("b", a.s, "assign");
      var c = cc11001100_hook("c", a.j, "var-init");
      a = cc11001100_hook("a", a.i, "assign");
      if (a?.A()) b = cc11001100_hook("b", a?.l()?.i()?.i(), "assign"), Fl(b) ? El(!1) : b = cc11001100_hook("b", null, "assign");else {
        if (a?.m()) {
          const d = cc11001100_hook("d", a?.i()?.i(), "var-init"),
            e = cc11001100_hook("e", a?.i()?.l()?.i()?.i(), "var-init");
          if (d && 1 === d.length && d[0] === c && Fl(e) && F(a, 17) === b.location.host) {
            El(!0);
            b = cc11001100_hook("b", e, "assign");
            break a;
          }
        }
        b = cc11001100_hook("b", null, "assign");
      }
    }
    b ? (c = cc11001100_hook("c", new Ti(), "assign"), a = cc11001100_hook("a", C(b, Pg, 1), "assign"), c = cc11001100_hook("c", Gb(c, 1, a), "assign"), a = cc11001100_hook("a", C(b, Li, 2), "assign"), c = cc11001100_hook("c", Gb(c, 7, a), "assign"), T(ah) && 0 < C(b, Kg, 3).length && (a = cc11001100_hook("a", new Mg(), "assign"), b = cc11001100_hook("b", C(b, Kg, 3), "assign"), b = cc11001100_hook("b", Gb(a, 1, b), "assign"), Eb(c, 6, b)), b = cc11001100_hook("b", cg(c), "assign")) : b = cc11001100_hook("b", eg(Error("invtag")), "assign");
    return b;
  }
  function Ul(a) {
    cc11001100_hook("a", a, "function-parameter");
    ak({
      s: cc11001100_hook("s", a.s, "object-key-init"),
      W: cc11001100_hook("W", G(a.i, 6), "object-key-init"),
      Ta: cc11001100_hook("Ta", 50, "object-key-init"),
      callback: cc11001100_hook("callback", b => {
        Vl(a, b);
      }, "object-key-init")
    });
  }
  function Vl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    ig(hg(b, c => {
      Pl(a, c, !1);
    }), c => {
      Sl(c.message);
      a.h(null, null);
    });
  }
  function Sl(a) {
    cc11001100_hook("a", a, "function-parameter");
    Aj("abg::amalserr", {
      status: cc11001100_hook("status", a, "object-key-init"),
      guarding: cc11001100_hook("guarding", "true", "object-key-init"),
      timeout: cc11001100_hook("timeout", 50, "object-key-init"),
      rate: cc11001100_hook("rate", .01, "object-key-init")
    }, .01);
  }
  class Ol {
    constructor(a, b, c, d) {
      this.s = cc11001100_hook("this.s", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.h = cc11001100_hook("this.h", d, "assign");
    }
  }
  ;
  var Yl = cc11001100_hook("Yl", (a, b, c, d) => {
    try {
      const e = cc11001100_hook("e", cl(a, C(c, Li, 7)), "var-init");
      if (e && al(e)) {
        t(e, 4) && (d = cc11001100_hook("d", rg(d, new sg(null, {
          google_package: cc11001100_hook("google_package", t(e, 4), "object-key-init")
        })), "assign"));
        const f = cc11001100_hook("f", new uj(a, b, c, e, d), "var-init");
        ri(1E3, () => {
          var g = cc11001100_hook("g", new Yf(), "var-init");
          new kk(a, f, g).start();
          return g.i;
        }, a).then(la(Wl, a), la(Xl, a));
      }
    } catch (e) {
      Xk(a, {
        atf: cc11001100_hook("atf", -1, "object-key-init")
      });
    }
  }, "var-init");
  const Wl = cc11001100_hook("Wl", a => {
      Xk(a, {
        atf: cc11001100_hook("atf", 1, "object-key-init")
      });
    }, "var-init"),
    Xl = cc11001100_hook("Xl", (a, b) => {
      (a.google_ama_state = cc11001100_hook("a.google_ama_state", a.google_ama_state || {}, "assign")).exception = cc11001100_hook("(a.google_ama_state = a.google_ama_state || {}).exception", b, "assign");
      Xk(a, {
        atf: cc11001100_hook("atf", 0, "object-key-init")
      });
    }, "var-init");
  function Zl(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (T(nh)) {
      a.easpi = cc11001100_hook("a.easpi", T(nh), "assign");
      T(xh) && (a.easpa = cc11001100_hook("a.easpa", !0, "assign"));
      a.asntp = cc11001100_hook("a.asntp", 0, "assign");
      a.asntpv = cc11001100_hook("a.asntpv", 0, "assign");
      a.asntpl = cc11001100_hook("a.asntpl", 0, "assign");
      a.asntpm = cc11001100_hook("a.asntpm", 0, "assign");
      a.asntpc = cc11001100_hook("a.asntpc", 1E3, "assign");
      a.asna = cc11001100_hook("a.asna", 5, "assign");
      a.asnd = cc11001100_hook("a.asnd", 5, "assign");
      a.asnp = cc11001100_hook("a.asnp", 5, "assign");
      a.asns = cc11001100_hook("a.asns", 5, "assign");
      T(zh) || (a.asmat = cc11001100_hook("a.asmat", Jh(oh), "assign"));
      a.asptt = cc11001100_hook("a.asptt", -1, "assign");
      a.asro = cc11001100_hook("a.asro", T(Gh) ? T(ph) : T(Eh), "assign");
      T(Dh) && (a.ascet = cc11001100_hook("a.ascet", !0, "assign"));
      T(Ah) && (a.asgr = cc11001100_hook("a.asgr", !0, "assign"));
      T(Fh) || (a.asrc = cc11001100_hook("a.asrc", !1, "assign"));
      T(mh) && (a.asbu = cc11001100_hook("a.asbu", !0, "assign"));
      T(zh) && (a.aseb = cc11001100_hook("a.aseb", !0, "assign"));
      1 > Jh(Bh) && (a.asla = cc11001100_hook("a.asla", Jh(Bh), "assign"));
      1 > Jh(yh) && (a.asaa = cc11001100_hook("a.asaa", Jh(yh), "assign"));
      T(Hh) && (a.asupm = cc11001100_hook("a.asupm", !0, "assign"));
      var b = cc11001100_hook("b", Jh(Ch), "var-init");
      0 < b && (a.asmrc = cc11001100_hook("a.asmrc", b, "assign"));
    }
  }
  ;
  Ua || Fa();
  class $l {
    constructor() {
      this.promise = cc11001100_hook("this.promise", new Promise(a => {
        this.resolve = cc11001100_hook("this.resolve", a, "assign");
      }), "assign");
    }
  }
  ;
  function am() {
    const {
      promise: a,
      resolve: b
    } = cc11001100_hook("", new $l(), "var-init");
    return {
      promise: cc11001100_hook("promise", a, "object-key-init"),
      resolve: cc11001100_hook("resolve", b, "object-key-init")
    };
  }
  ;
  function bm(a = () => {}) {
    n.google_llp || (n.google_llp = cc11001100_hook("n.google_llp", {}, "assign"));
    const b = cc11001100_hook("b", n.google_llp, "var-init");
    let c = cc11001100_hook("c", b[7], "var-init");
    if (c) return c;
    c = cc11001100_hook("c", am(), "assign");
    b[7] = cc11001100_hook("b[7]", c, "assign");
    a();
    return c;
  }
  function cm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return bm(() => {
      Kc(n.document, a);
    }).promise;
  }
  ;
  var dm = cc11001100_hook("dm", a => {
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
    Zl(c);
    if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = cc11001100_hook("c.google_ad_section", a.google_ad_section || a.google_ad_region, "assign");
    return b;
  }, "var-init");
  function em(a) {
    cc11001100_hook("a", a, "function-parameter");
    return da(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive;
  }
  ;
  var hm = cc11001100_hook("hm", (a, b) => {
    X(L).ama_ran_on_page || ri(1001, () => fm(new gm(a, b)), n);
  }, "var-init");
  function fm(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ml(a.h, a.j, a.i.google_ad_client || "", (b, c) => {
      var d = cc11001100_hook("d", a.h, "var-init"),
        e = cc11001100_hook("e", a.i, "var-init");
      X(L).ama_ran_on_page || b && im(d, e, b, c);
    });
  }
  class gm {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", n, "assign");
      this.i = cc11001100_hook("this.i", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
  }
  function im(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    d && (wi(a).configSourceInAbg = cc11001100_hook("wi(a).configSourceInAbg", d, "assign"));
    void 0 !== Bb(c, Qi, 24, !1) && (d = cc11001100_hook("d", xi(a), "assign"), d.availableAbg = cc11001100_hook("d.availableAbg", !0, "assign"), d.ablationFromStorage = cc11001100_hook("d.ablationFromStorage", !!B(c, Qi, 24)?.i()?.i(), "assign"));
    if (em(b) && (d = cc11001100_hook("d", cl(a, C(c, Li, 7)), "assign"), !d || !vb(d, 8))) return;
    X(L).ama_ran_on_page = cc11001100_hook("X(L).ama_ran_on_page", !0, "assign");
    B(c, Ci, 15)?.i() && (X(a).enable_overlap_observer = cc11001100_hook("X(a).enable_overlap_observer", !0, "assign"));
    var e = cc11001100_hook("e", B(c, Bi, 13), "var-init");
    e && 1 === t(e, 1) ? (d = cc11001100_hook("d", 0, "assign"), (e = cc11001100_hook("e", B(e, Ai, 6), "assign")) && t(e, 3) && (d = cc11001100_hook("d", t(e, 3) || 0, "assign")), Il(a, d)) : B(c, Qi, 24)?.i()?.i() && (xi(a).ablatingThisPageview = cc11001100_hook("xi(a).ablatingThisPageview", !0, "assign"), Il(a, 1));
    kd(3, [c.toJSON()]);
    const f = cc11001100_hook("f", b.google_ad_client || "", "var-init");
    b = cc11001100_hook("b", Yk(da(b.enable_page_level_ads) ? b.enable_page_level_ads : {}), "assign");
    const g = cc11001100_hook("g", rg(vg, new sg(null, b)), "var-init");
    zj(782, () => {
      Yl(a, f, c, g);
    });
  }
  ;
  var jm = cc11001100_hook("jm", {
      google_ad_modifications: cc11001100_hook("google_ad_modifications", !0, "object-key-init"),
      google_analytics_domain_name: cc11001100_hook("google_analytics_domain_name", !0, "object-key-init"),
      google_analytics_uacct: cc11001100_hook("google_analytics_uacct", !0, "object-key-init"),
      google_pause_ad_requests: cc11001100_hook("google_pause_ad_requests", !0, "object-key-init"),
      google_user_agent_client_hint: cc11001100_hook("google_user_agent_client_hint", !0, "object-key-init")
    }, "var-init"),
    km = cc11001100_hook("km", a => (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) && (a = cc11001100_hook("a", a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/), "assign")) && RegExp("google_ad_client").test(a[1]) ? a[1] : null, "var-init"),
    lm = cc11001100_hook("lm", a => {
      if (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) if (a = cc11001100_hook("a", a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), "assign"), (a = cc11001100_hook("a", a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i), "assign")) && RegExp("google_ad_client").test(a[1])) return a[1];
      return null;
    }, "var-init"),
    mm = cc11001100_hook("mm", a => {
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
  function nm(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.google_ad_client) var b = cc11001100_hook("b", String(a.google_ad_client), "var-init");else {
      if (null == (b = cc11001100_hook("b", X(a).head_tag_slot_vars?.google_ad_client ?? a.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"), "assign"))) {
        b: {
          b = cc11001100_hook("b", a.document.getElementsByTagName("script"), "assign");
          a = cc11001100_hook("a", a.navigator && a.navigator.userAgent || "", "assign");
          a = cc11001100_hook("a", RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !rd() ? km : lm, "assign");
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
          for (c = cc11001100_hook("c", {}, "assign"); d = cc11001100_hook("d", a.exec(b), "assign");) c[d[1]] = cc11001100_hook("c[d[1]]", mm(d[2]), "assign");
          b = cc11001100_hook("b", c, "assign");
          b = cc11001100_hook("b", b.google_ad_client ? b.google_ad_client : "", "assign");
        } else b = cc11001100_hook("b", "", "assign");
      }
      b = cc11001100_hook("b", b ?? "", "assign");
    }
    return b;
  }
  ;
  async function om(a, b) {
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
  function pm(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.state.pc, "var-init");
    return null !== b && 0 !== b ? b : a.state.pc = cc11001100_hook("a.state.pc", ad(a.s), "assign");
  }
  function qm(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.state.wpc, "var-init");
    return null !== b && "" !== b ? b : a.state.wpc = cc11001100_hook("a.state.wpc", nm(a.s), "assign");
  }
  function rm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new ze(), "var-init");
    var d = cc11001100_hook("d", pm(a), "var-init");
    c = cc11001100_hook("c", A(c, 1, d, 0), "assign");
    d = cc11001100_hook("d", qm(a), "assign");
    c = cc11001100_hook("c", A(c, 2, d, ""), "assign");
    c = cc11001100_hook("c", A(c, 3, a.state.sd, 0), "assign");
    return A(c, 7, Math.round(b || a.s.performance.now()), 0);
  }
  async function sm(a) {
    cc11001100_hook("a", a, "function-parameter");
    await om(a.s, () => !(!pm(a) || !qm(a)));
  }
  async function tm() {
    var a = cc11001100_hook("a", M(um), "var-init");
    if (a.i && !a.state.le.includes(1)) {
      a.state.le.push(1);
      var b = cc11001100_hook("b", a.s.performance.now(), "var-init");
      await sm(a);
      var c = cc11001100_hook("c", se(te(new ve(), qe(pe(new re(), P(a.s).scrollWidth), P(a.s).scrollHeight)), qe(pe(new re(), P(a.s).clientWidth), P(a.s).clientHeight)), "var-init"),
        d = cc11001100_hook("d", Qh(a.s), "var-init");
      0 !== d && ue(c, ne(new oe(), d));
      We(a.h, xe(rm(a, b), c));
      jf(a.h, a.s, () => {
        var e = cc11001100_hook("e", a.h, "var-init");
        var f = cc11001100_hook("f", rm(a), "var-init");
        var g = cc11001100_hook("g", new we(), "var-init");
        f = cc11001100_hook("f", Fb(f, 8, ye, g), "assign");
        We(e, f);
      });
    }
  }
  async function vm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a.i && c.length && !a.state.lgdp.includes(Number(b))) {
      a.state.lgdp.push(Number(b));
      var d = cc11001100_hook("d", a.s.performance.now(), "var-init");
      await sm(a);
      var e = cc11001100_hook("e", a.h, "var-init");
      a = cc11001100_hook("a", rm(a, d), "assign");
      d = cc11001100_hook("d", new me(), "assign");
      b = cc11001100_hook("b", A(d, 1, b, 0), "assign");
      c = cc11001100_hook("c", xb(b, 2, c), "assign");
      c = cc11001100_hook("c", Fb(a, 9, ye, c), "assign");
      We(e, c);
    }
  }
  var um = cc11001100_hook("um", class {
    constructor(a) {
      this.s = cc11001100_hook("this.s", md() || window, "assign");
      this.h = cc11001100_hook("this.h", a ?? new nf(100, 100, !0), "assign");
      this.state = cc11001100_hook("this.state", Jj(Ej(), 33, () => {
        const b = cc11001100_hook("b", Jh(Yg), "var-init");
        return {
          sd: cc11001100_hook("sd", b, "object-key-init"),
          ssp: cc11001100_hook("ssp", 0 < b && Qc() < 1 / b, "object-key-init"),
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
  function wm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
  }
  function xm(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", L.document, "var-init");
    if (b.currentScript) return wm(b.currentScript, a);
    for (const c of b.scripts) if (0 === wm(c, a)) return 0;
    return 1;
  }
  ;
  function ym(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      [3]: {
        [55]: cc11001100_hook(55, () => 0 === a, "object-key-init"),
        [23]: cc11001100_hook(23, c => xl(L, Number(c)), "object-key-init"),
        [24]: cc11001100_hook(24, c => Al(Number(c)), "object-key-init"),
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
            const g = cc11001100_hook("g", Pc() ? null : Math.floor(1E3 * Qc()), "var-init");
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
  function zm(a = n) {
    return a.ggeac || (a.ggeac = cc11001100_hook("a.ggeac", {}, "assign"));
  }
  ;
  function Am() {
    var a = cc11001100_hook("a", M(Ih).l(sh.h, sh.defaultValue), "var-init"),
      b = cc11001100_hook("b", L.document, "var-init");
    if (a.length && b.head) for (const d of a) if ((a = cc11001100_hook("a", d, "assign")) && b.head) {
      var c = cc11001100_hook("c", Lc("META"), "var-init");
      b.head.appendChild(c);
      c.httpEquiv = cc11001100_hook("c.httpEquiv", "origin-trial", "assign");
      c.content = cc11001100_hook("c.content", a, "assign");
    }
  }
  function Bm(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return !!b.featurePolicy?.features().includes(a);
  }
  function Cm(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  ;
  function Dm(a, b) {
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
  var Em = cc11001100_hook("Em", {
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
      [6]: cc11001100_hook(6, a => Sa(M(Pf).i(), Number(a)), "object-key-init"),
      [27]: cc11001100_hook(27, a => {
        a = cc11001100_hook("a", Dm(a, "boolean"), "assign");
        return void 0 !== a ? a : void 0;
      }, "object-key-init"),
      [60]: cc11001100_hook(60, a => {
        try {
          return !!n.document.querySelector(a);
        } catch {}
      }, "object-key-init"),
      [69]: cc11001100_hook(69, a => Bm(a, n.document), "object-key-init"),
      [70]: cc11001100_hook(70, a => Cm(a, n.document), "object-key-init")
    },
    [4]: {
      [3]: cc11001100_hook(3, () => Xc(), "object-key-init"),
      [6]: cc11001100_hook(6, a => {
        a = cc11001100_hook("a", Dm(a, "number"), "assign");
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
        a = cc11001100_hook("a", Dm(a, "string"), "assign");
        return void 0 !== a ? a : void 0;
      }, "object-key-init")
    }
  }, "var-init");
  const Fm = cc11001100_hook("Fm", [12, 13, 20], "var-init");
  function Gm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", M(sf).G, "var-init");
    if (!de(B(b, Xd, 3), e)) return null;
    var f = cc11001100_hook("f", C(b, jl, 2), "var-init"),
      g = cc11001100_hook("g", H(b, 6), "var-init");
    if (g) {
      yb(d, 1, Ee, g);
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
      } catch (l) {}
      return (b = cc11001100_hook("b", Hm(b, c), "assign")) ? Im(a, [b], 1) : null;
    }
    if (g = cc11001100_hook("g", H(b, 10), "assign")) {
      yb(d, 2, Ee, g);
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
      return (b = cc11001100_hook("b", Hm(b, c), "assign")) ? Im(a, [b], 1) : null;
    }
    d = cc11001100_hook("d", e ? Ma(f, l => de(B(l, Xd, 3), e)) : f, "assign");
    if (!d.length) return null;
    c = cc11001100_hook("c", d.length * D(t(b, 1), 0), "assign");
    return (b = cc11001100_hook("b", H(b, 4), "assign")) ? Jm(a, b, c, d) : Im(a, d, c / 1E3);
  }
  function Km(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.Y[c] || (a.Y[c] = cc11001100_hook("a.Y[c]", [], "assign"));
    a = cc11001100_hook("a", a.Y[c], "assign");
    Sa(a, b) || a.push(b);
  }
  function Lm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", Mm(a.i, b), "var-init");
    var f;
    if (f = cc11001100_hook("f", 9 !== b, "assign")) a.j[b] ? f = cc11001100_hook("f", !0, "assign") : (a.j[b] = cc11001100_hook("a.j[b]", !0, "assign"), f = cc11001100_hook("f", !1, "assign"));
    if (f) return pf(a.J, b, c, d, [], 4), d;
    if (!e.length) return pf(a.J, b, c, d, [], 3), d;
    const g = cc11001100_hook("g", Sa(Fm, b), "var-init"),
      h = cc11001100_hook("h", [], "var-init");
    La(e, l => {
      var k = cc11001100_hook("k", new De(), "var-init");
      if (l = cc11001100_hook("l", Gm(a, l, c, k), "assign")) 0 !== zb(k, Ee) && h.push(k), k = cc11001100_hook("k", l.getId(), "assign"), d.push(k), Km(a, k, g ? 4 : c), (l = cc11001100_hook("l", C(l, ie, 2), "assign")) && (g ? Gf(l, If(), a.J, k) : Gf(l, [c], a.J, k));
    });
    pf(a.J, b, c, d, h, 1);
    return d;
  }
  function Nm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.i.push(...Ma(Na(b, c => new nl(c)), c => !Sa(Fm, H(c, 1))));
  }
  function Im(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.h, "var-init"),
      e = cc11001100_hook("e", Pa(b, f => !!d[f.getId()]), "var-init");
    return e ? e : a.ka ? null : Nc(b, c);
  }
  function Jm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", null != a.ga[b] ? a.ga[b] : 1E3, "var-init");
    if (0 >= e) return null;
    d = cc11001100_hook("d", Im(a, d, c / e), "assign");
    a.ga[b] = cc11001100_hook("a.ga[b]", d ? 0 : e - c, "assign");
    return d;
  }
  function Om(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    N(1, c => {
      a.h[c] = cc11001100_hook("a.h[c]", !0, "assign");
    }, b);
    N(2, (c, d) => Lm(a, c, d), b);
    N(3, c => (a.Y[c] || []).concat(a.Y[4]), b);
    N(12, c => void Nm(a, c), b);
    N(16, (c, d) => void Km(a, c, d), b);
  }
  var Pm = cc11001100_hook("Pm", class {
    constructor() {
      this.i = cc11001100_hook("this.i", [], "assign");
      this.J = cc11001100_hook("this.J", null, "assign");
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.ka = cc11001100_hook("this.ka", !1, "assign");
      this.ga = cc11001100_hook("this.ga", {}, "assign");
      this.Y = cc11001100_hook("this.Y", {}, "assign");
      this.h = cc11001100_hook("this.h", {}, "assign");
    }
    init(a, b, c, {
      ka: d = !1,
      Y: e = [],
      ga: f = {}
    } = {}) {
      this.i = cc11001100_hook("this.i", a.slice(), "assign");
      this.J = cc11001100_hook("this.J", c, "assign");
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.ka = cc11001100_hook("this.ka", d, "assign");
      this.ga = cc11001100_hook("this.ga", f, "assign");
      this.Y = cc11001100_hook("this.Y", {
        [b]: cc11001100_hook("b", [], "object-key-init"),
        [4]: cc11001100_hook(4, [], "object-key-init")
      }, "assign");
      this.h = cc11001100_hook("this.h", {}, "assign");
      (a = cc11001100_hook("a", Id(), "assign")) && La(a.split(",") || [], g => {
        (g = cc11001100_hook("g", Number(g), "assign")) && (this.h[g] = cc11001100_hook("this.h[g]", !0, "assign"));
      });
      La(e, g => {
        this.h[g] = cc11001100_hook("this.h[g]", !0, "assign");
      });
      return this;
    }
  }, "var-init");
  function Mm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (a = cc11001100_hook("a", Pa(a, c => H(c, 1) === b), "assign")) && C(a, ll, 2) || [];
  }
  function Hm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", C(a, jl, 2), "var-init"),
      d = cc11001100_hook("d", c.length, "var-init"),
      e = cc11001100_hook("e", D(t(a, 8), 0), "var-init");
    a = cc11001100_hook("a", d * D(t(a, 1), 0) - 1, "assign");
    b = cc11001100_hook("b", void 0 !== b ? b : Math.floor(1E3 * Qc()), "assign");
    d = cc11001100_hook("d", (b - e) % d, "assign");
    if (b < e || b - e - d >= a) return null;
    c = cc11001100_hook("c", c[d], "assign");
    e = cc11001100_hook("e", M(sf).G, "assign");
    return !c || e && !de(B(c, Xd, 3), e) ? null : c;
  }
  ;
  function Qm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.h = cc11001100_hook("a.h", Kf(14, b, () => {}), "assign");
  }
  class Rm {
    constructor() {
      this.h = cc11001100_hook("this.h", () => {}, "assign");
    }
  }
  function Sm(a) {
    cc11001100_hook("a", a, "function-parameter");
    M(Rm).h(a);
  }
  ;
  function Tm({
    eb: a,
    G: b,
    bb: c,
    Ya: d = zm(),
    Za: e = 0,
    J: f = new rf(B(a, ol, 5)?.i() ?? 0, B(a, ol, 5)?.l() ?? 0, B(a, ol, 5)?.m() ?? !1)
  }) {
    d.hasOwnProperty("init-done") ? (Kf(12, d, () => {})(Na(C(a, nl, 2), g => g.toJSON())), Kf(13, d, () => {})(Na(C(a, ie, 1), g => g.toJSON()), e), b && Kf(14, d, () => {})(b), Um(e, d)) : (Om(M(Pm).init(C(a, nl, 2), e, f, c), d), Lf(d), Mf(d), Nf(d), Um(e, d), Gf(C(a, ie, 1), [e], f, void 0, !0), tf = cc11001100_hook("tf", tf || !(!c || !c.ib), "assign"), Sm(Em), b && Sm(b));
  }
  function Um(a, b = zm()) {
    cc11001100_hook("a", a, "function-parameter");
    Of(M(Pf), b, a);
    Vm(b, a);
    Qm(M(Rm), b);
    M(Ih).m();
  }
  function Vm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", M(Ih), "var-init");
    c.h = cc11001100_hook("c.h", (d, e) => Kf(5, a, () => !1)(d, e, b), "assign");
    c.i = cc11001100_hook("c.i", (d, e) => Kf(6, a, () => 0)(d, e, b), "assign");
    c.j = cc11001100_hook("c.j", (d, e) => Kf(7, a, () => "")(d, e, b), "assign");
    c.l = cc11001100_hook("c.l", (d, e) => Kf(8, a, () => [])(d, e, b), "assign");
    c.m = cc11001100_hook("c.m", () => {
      Kf(15, a, () => {})(b);
    }, "assign");
  }
  ;
  function Wm(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", M(Pf).l(a), "var-init");
    a = cc11001100_hook("a", vm(M(um), a, b), "assign");
    Rf.ba(1085, a);
  }
  var Xm = cc11001100_hook("Xm", (a, b, c) => {
    var d = cc11001100_hook("d", X(a), "var-init");
    if (d.plle) Um(1, zm(a));else {
      d.plle = cc11001100_hook("d.plle", !0, "assign");
      d = cc11001100_hook("d", B(b, ql, 12), "assign");
      var e = cc11001100_hook("e", G(b, 9), "var-init");
      Tm({
        eb: cc11001100_hook("eb", d, "object-key-init"),
        G: cc11001100_hook("G", ym(c, b), "object-key-init"),
        bb: {
          ka: cc11001100_hook("ka", e && !!a.google_disable_experiments, "object-key-init"),
          ib: cc11001100_hook("ib", e, "object-key-init")
        },
        Ya: cc11001100_hook("Ya", zm(a), "object-key-init"),
        Za: cc11001100_hook("Za", 1, "object-key-init")
      });
      if (c = cc11001100_hook("c", F(b, 15), "assign")) c = cc11001100_hook("c", Number(c), "assign"), M(Pf).j(c);
      for (const f of ub(b, 19)) b = cc11001100_hook("b", f, "assign"), M(Pf).h(b);
      Wm(12);
      Wm(10);
      a = cc11001100_hook("a", Jc(a) || a, "assign");
      kj(a.location, "google_mc_lab") && M(Pf).h(44738307);
      kj(a.location, "google_auto_storify_swipeable") && M(Pf).h(44773747);
      kj(a.location, "google_auto_storify_scrollable") && M(Pf).h(44773746);
      kj(a.location, "google_pga_monetization") && M(Pf).h(44779794);
    }
  }, "var-init");
  var Ym = cc11001100_hook("Ym", {
    "120x90": cc11001100_hook("120x90", !0, "object-key-init"),
    "160x90": cc11001100_hook("160x90", !0, "object-key-init"),
    "180x90": cc11001100_hook("180x90", !0, "object-key-init"),
    "200x90": cc11001100_hook("200x90", !0, "object-key-init"),
    "468x15": cc11001100_hook("468x15", !0, "object-key-init"),
    "728x15": cc11001100_hook("728x15", !0, "object-key-init")
  }, "var-init");
  function Zm(a, b) {
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
  function $m(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => !!(b.ia & a);
  }
  class Y extends ci {
    constructor(a, b, c, d = !1) {
      super(a, b);
      this.ia = cc11001100_hook("this.ia", c, "assign");
      this.jb = cc11001100_hook("this.jb", d, "assign");
    }
    qa() {
      return this.ia;
    }
    i(a, b, c) {
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const an = cc11001100_hook("an", {
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
    bn = cc11001100_hook("bn", {
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
    cn = cc11001100_hook("cn", {
      pub_control_image_stacked: cc11001100_hook("pub_control_image_stacked", 100, "object-key-init"),
      pub_control_image_sidebyside: cc11001100_hook("pub_control_image_sidebyside", 200, "object-key-init"),
      pub_control_image_card_stacked: cc11001100_hook("pub_control_image_card_stacked", 150, "object-key-init"),
      pub_control_image_card_sidebyside: cc11001100_hook("pub_control_image_card_sidebyside", 250, "object-key-init"),
      pub_control_text: cc11001100_hook("pub_control_text", 100, "object-key-init"),
      pub_control_text_card: cc11001100_hook("pub_control_text_card", 150, "object-key-init")
    }, "var-init");
  function dn(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 0, "var-init");
    a.U && b++;
    a.M && b++;
    a.N && b++;
    if (3 > b) return {
      O: cc11001100_hook("O", "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.", "object-key-init")
    };
    b = cc11001100_hook("b", a.U.split(","), "assign");
    const c = cc11001100_hook("c", a.N.split(","), "var-init");
    a = cc11001100_hook("a", a.M.split(","), "assign");
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
      N: cc11001100_hook("N", d, "object-key-init"),
      M: cc11001100_hook("M", e, "object-key-init"),
      Qa: cc11001100_hook("Qa", b, "object-key-init")
    };
  }
  function en(a) {
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
  const fn = cc11001100_hook("fn", Ta("script"), "var-init");
  function gn(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    null != a.ia && (c.google_responsive_formats = cc11001100_hook("c.google_responsive_formats", a.ia, "assign"));
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
    null != a.K && (c.gfwromr = cc11001100_hook("c.gfwromr", a.K, "assign"));
    null != a.l && (c.gfwroh = cc11001100_hook("c.gfwroh", a.l, "assign"));
    null != a.m && (c.gfwrow = cc11001100_hook("c.gfwrow", a.m, "assign"));
    null != a.P && (c.gfwroz = cc11001100_hook("c.gfwroz", a.P, "assign"));
    null != a.v && (c.gml = cc11001100_hook("c.gml", a.v, "assign"));
    null != a.B && (c.gmr = cc11001100_hook("c.gmr", a.B, "assign"));
    null != a.T && (c.gzi = cc11001100_hook("c.gzi", a.T, "assign"));
    b = cc11001100_hook("b", Jc(window) || window, "assign");
    kj(b.location, "google_responsive_dummy_ad") && (Sa([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.h) && 2 !== a.h && (a = cc11001100_hook("a", JSON.stringify({
      googMsgType: cc11001100_hook("googMsgType", "adpnt", "object-key-init"),
      key_value: cc11001100_hook("key_value", [{
        key: cc11001100_hook("key", "qid", "object-key-init"),
        value: cc11001100_hook("value", "DUMMY_AD", "object-key-init")
      }], "object-key-init")
    }), "assign"), c.dash = cc11001100_hook("c.dash", `<${fn}>window.top.postMessage('${a}', '*'); 
          </${fn}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`, "assign"));
  }
  class hn {
    constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, m = null, u = null) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.ea = cc11001100_hook("this.ea", b, "assign");
      this.ia = cc11001100_hook("this.ia", c, "assign");
      this.h = cc11001100_hook("this.h", d, "assign");
      this.R = cc11001100_hook("this.R", e, "assign");
      this.i = cc11001100_hook("this.i", f, "assign");
      this.j = cc11001100_hook("this.j", g, "assign");
      this.C = cc11001100_hook("this.C", h, "assign");
      this.K = cc11001100_hook("this.K", l, "assign");
      this.l = cc11001100_hook("this.l", k, "assign");
      this.m = cc11001100_hook("this.m", m, "assign");
      this.P = cc11001100_hook("this.P", u, "assign");
      this.T = cc11001100_hook("this.T", this.B = cc11001100_hook("this.B", this.v = cc11001100_hook("this.v", null, "assign"), "assign"), "assign");
    }
    size() {
      return this.ea;
    }
  }
  ;
  const jn = cc11001100_hook("jn", ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"], "var-init");
  var kn = cc11001100_hook("kn", class extends ci {
      h(a) {
        return Math.min(1200, Math.max(this.L, Math.round(a)));
      }
    }, "var-init"),
    nn = cc11001100_hook("nn", (a, b) => {
      ln(a, b);
      if ("pedestal" == b.google_content_recommendation_ui_type) return new hn(9, new kn(a, Math.floor(a * b.google_phwr)));
      var c = cc11001100_hook("c", Dc(), "var-init");
      468 > a ? c ? (c = cc11001100_hook("c", a - 8 - 8, "assign"), c = cc11001100_hook("c", Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * an.mobile_banner_image_sidebyside + bn.mobile_banner_image_sidebyside) + 96), "assign"), a = cc11001100_hook("a", {
        da: cc11001100_hook("da", a, "object-key-init"),
        ca: cc11001100_hook("ca", c, "object-key-init"),
        M: cc11001100_hook("M", 1, "object-key-init"),
        N: cc11001100_hook("N", 12, "object-key-init"),
        U: cc11001100_hook("U", "mobile_banner_image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", en(a), "assign"), a = cc11001100_hook("a", {
        da: cc11001100_hook("da", a.width, "object-key-init"),
        ca: cc11001100_hook("ca", a.height, "object-key-init"),
        M: cc11001100_hook("M", 1, "object-key-init"),
        N: cc11001100_hook("N", 13, "object-key-init"),
        U: cc11001100_hook("U", "image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", en(a), "assign"), a = cc11001100_hook("a", {
        da: cc11001100_hook("da", a.width, "object-key-init"),
        ca: cc11001100_hook("ca", a.height, "object-key-init"),
        M: cc11001100_hook("M", 4, "object-key-init"),
        N: cc11001100_hook("N", 2, "object-key-init"),
        U: cc11001100_hook("U", "image_stacked", "object-key-init")
      }, "assign"));
      mn(b, a);
      return new hn(9, new kn(a.da, a.ca));
    }, "var-init"),
    on = cc11001100_hook("on", (a, b) => {
      ln(a, b);
      var c = cc11001100_hook("c", dn({
        N: cc11001100_hook("N", b.google_content_recommendation_rows_num, "object-key-init"),
        M: cc11001100_hook("M", b.google_content_recommendation_columns_num, "object-key-init"),
        U: cc11001100_hook("U", b.google_content_recommendation_ui_type, "object-key-init")
      }), "var-init");
      if (c.O) a = cc11001100_hook("a", {
        da: cc11001100_hook("da", 0, "object-key-init"),
        ca: cc11001100_hook("ca", 0, "object-key-init"),
        M: cc11001100_hook("M", 0, "object-key-init"),
        N: cc11001100_hook("N", 0, "object-key-init"),
        U: cc11001100_hook("U", "image_stacked", "object-key-init"),
        O: cc11001100_hook("O", c.O, "object-key-init")
      }, "assign");else {
        var d = cc11001100_hook("d", 2 === c.Qa.length && 468 <= a ? 1 : 0, "var-init");
        var e = cc11001100_hook("e", c.Qa[d], "var-init");
        e = cc11001100_hook("e", 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e, "assign");
        var f = cc11001100_hook("f", cn[e], "var-init");
        let g = cc11001100_hook("g", c.M[d], "var-init");
        for (; a / g < f && 1 < g;) g--;
        f = cc11001100_hook("f", g, "assign");
        d = cc11001100_hook("d", c.N[d], "assign");
        c = cc11001100_hook("c", Math.floor(((a - 8 * f - 8) / f * an[e] + bn[e]) * d + 8 * d + 8), "assign");
        a = cc11001100_hook("a", 1500 < a ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          tb: cc11001100_hook("tb", "Calculated slot width is too large: " + a, "object-key-init")
        } : 1500 < c ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          tb: cc11001100_hook("tb", "Calculated slot height is too large: " + c, "object-key-init")
        } : {
          width: cc11001100_hook("width", a, "object-key-init"),
          height: cc11001100_hook("height", c, "object-key-init")
        }, "assign");
        a = cc11001100_hook("a", {
          da: cc11001100_hook("da", a.width, "object-key-init"),
          ca: cc11001100_hook("ca", a.height, "object-key-init"),
          M: cc11001100_hook("M", f, "object-key-init"),
          N: cc11001100_hook("N", d, "object-key-init"),
          U: cc11001100_hook("U", e, "object-key-init")
        }, "assign");
      }
      if (a.O) throw new U(a.O);
      mn(b, a);
      return new hn(9, new kn(a.da, a.ca));
    }, "var-init");
  function ln(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) throw new U("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
  }
  function mn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.google_content_recommendation_ui_type = cc11001100_hook("a.google_content_recommendation_ui_type", b.U, "assign");
    a.google_content_recommendation_columns_num = cc11001100_hook("a.google_content_recommendation_columns_num", b.M, "assign");
    a.google_content_recommendation_rows_num = cc11001100_hook("a.google_content_recommendation_rows_num", b.N, "assign");
  }
  ;
  class pn extends ci {
    h() {
      return this.L;
    }
    i(a, b, c) {
      bi(a, c);
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const qn = cc11001100_hook("qn", {
    "image-top": cc11001100_hook("image-top", a => 600 >= a ? 284 + .414 * (a - 250) : 429, "object-key-init"),
    "image-middle": cc11001100_hook("image-middle", a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500), "object-key-init"),
    "image-side": cc11001100_hook("image-side", a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500), "object-key-init"),
    "text-only": cc11001100_hook("text-only", a => 500 >= a ? 187 - .228 * (a - 250) : 130, "object-key-init"),
    "in-article": cc11001100_hook("in-article", a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200, "object-key-init")
  }, "var-init");
  var rn = cc11001100_hook("rn", class extends ci {
      h() {
        return Math.min(1200, this.L);
      }
    }, "var-init"),
    sn = cc11001100_hook("sn", (a, b, c, d, e) => {
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
        return new hn(11, new ci(a, f));
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
        return new hn(11, new ci(a, f));
      }
      d = cc11001100_hook("d", qn[f], "assign");
      if (!d) throw new U("Invalid data-ad-layout value: " + f);
      c = cc11001100_hook("c", fi(c, b), "assign");
      b = cc11001100_hook("b", P(b).clientWidth, "assign");
      b = cc11001100_hook("b", "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a)), "assign");
      return new hn(11, "in-article" == f ? new rn(a, b) : new ci(a, b));
    }, "var-init");
  var tn = cc11001100_hook("tn", a => b => {
      for (let c = cc11001100_hook("c", a.length - 1, "var-init"); 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    }, "var-init"),
    vn = cc11001100_hook("vn", (a, b) => {
      var c = cc11001100_hook("c", un.slice(0), "var-init");
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
    un = cc11001100_hook("un", [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]], "var-init");
  var xn = cc11001100_hook("xn", (a, b, c, d, e) => {
      "false" == e.google_full_width_responsive ? c = cc11001100_hook("c", {
        D: cc11001100_hook("D", a, "object-key-init"),
        F: cc11001100_hook("F", 1, "object-key-init")
      }, "assign") : "autorelaxed" == b && e.google_full_width_responsive || wn(b) || e.google_ad_resize ? (b = cc11001100_hook("b", Yh(a, c, d, e), "assign"), c = cc11001100_hook("c", !0 !== b ? {
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
    An = cc11001100_hook("An", (a, b, c, d, e) => {
      const {
        D: f,
        F: g
      } = cc11001100_hook("", zj(247, () => xn(a, b, c, d, e)), "var-init");
      var h = cc11001100_hook("h", !0 === g, "var-init");
      const l = cc11001100_hook("l", K(d.style.width), "var-init"),
        k = cc11001100_hook("k", K(d.style.height), "var-init"),
        {
          aa: m,
          X: u,
          qa: v,
          Pa: w
        } = cc11001100_hook("", yn(f, b, c, d, e, h), "var-init");
      h = cc11001100_hook("h", zn(b, v), "assign");
      var y;
      const E = cc11001100_hook("E", (y = cc11001100_hook("y", di(d, c, "marginLeft", K), "assign")) ? y + "px" : "", "var-init"),
        xa = cc11001100_hook("xa", (y = cc11001100_hook("y", di(d, c, "marginRight", K), "assign")) ? y + "px" : "", "var-init");
      y = cc11001100_hook("y", di(d, c, "zIndex") || "", "assign");
      return new hn(h, m, v, null, w, g, u, E, xa, k, l, y);
    }, "var-init"),
    wn = cc11001100_hook("wn", a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a), "var-init"),
    yn = cc11001100_hook("yn", (a, b, c, d, e, f) => {
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
      m = cc11001100_hook("m", [ei(a), $m(b)], "assign");
      m.push(hi(k, c, d, l));
      null != e.google_max_responsive_height && m.push(ii(e.google_max_responsive_height));
      k = cc11001100_hook("k", [y => !y.jb], "assign");
      if (h || l) h = cc11001100_hook("h", ji(c, d), "assign"), k.push(ii(h));
      let u = cc11001100_hook("u", vn(tn(m), tn(k)), "var-init");
      if (!u) throw new U("No slot size for availableWidth=" + a);
      const {
        aa: v,
        X: w
      } = cc11001100_hook("", zj(248, () => {
        var y;
        a: if (f) {
          if (e.gfwrnh && (y = cc11001100_hook("y", K(e.gfwrnh), "assign"))) {
            y = cc11001100_hook("y", {
              aa: cc11001100_hook("aa", new pn(a, y), "object-key-init"),
              X: cc11001100_hook("X", !0, "object-key-init")
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
              var ya = cc11001100_hook("ya", di(R, c, "height", K), "var-init");
              ya && (na = cc11001100_hook("na", Math.min(na, ya), "assign"));
              (ya = cc11001100_hook("ya", di(R, c, "maxHeight", K), "assign")) && (na = cc11001100_hook("na", Math.min(na, ya), "assign"));
            } while ((R = cc11001100_hook("R", R.parentElement, "assign")) && "HTML" != R.tagName);
            R = cc11001100_hook("R", na, "assign");
          }
          E = cc11001100_hook("E", xa.call(E, y, R), "assign");
          if (E < .5 * y || 100 > E) E = cc11001100_hook("E", y, "assign");
          y = cc11001100_hook("y", {
            aa: cc11001100_hook("aa", new pn(a, Math.floor(E)), "object-key-init"),
            X: cc11001100_hook("X", E < y ? 102 : !0, "object-key-init")
          }, "assign");
        } else y = cc11001100_hook("y", {
          aa: cc11001100_hook("aa", u, "object-key-init"),
          X: cc11001100_hook("X", 100, "object-key-init")
        }, "assign");
        return y;
      }), "var-init");
      return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
        aa: cc11001100_hook("aa", Bn(a, c, d, v, e), "object-key-init"),
        X: cc11001100_hook("X", !1, "object-key-init"),
        qa: cc11001100_hook("qa", b, "object-key-init"),
        Pa: cc11001100_hook("Pa", g, "object-key-init")
      } : {
        aa: cc11001100_hook("aa", v, "object-key-init"),
        X: cc11001100_hook("X", w, "object-key-init"),
        qa: cc11001100_hook("qa", b, "object-key-init"),
        Pa: cc11001100_hook("Pa", g, "object-key-init")
      };
    }, "var-init");
  const zn = cc11001100_hook("zn", (a, b) => {
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
    Bn = cc11001100_hook("Bn", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", e.google_ad_height || di(c, b, "height", K), "var-init");
      b = cc11001100_hook("b", sn(a, b, c, f, e).size(), "assign");
      return b.L * b.height() > a * d.height() ? new Y(b.L, b.height(), 1) : d;
    }, "var-init");
  var Cn = cc11001100_hook("Cn", (a, b, c, d, e) => {
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
    if (!0 !== h || a == g) return new hn(12, new ci(a, d), null, null, !0, h, 100);
    const {
      aa: l,
      X: k,
      qa: m
    } = cc11001100_hook("", yn(g, "auto", b, c, e, !0), "var-init");
    return new hn(1, l, m, 2, !0, h, k);
  }, "var-init");
  var En = cc11001100_hook("En", (a, b) => {
      const c = cc11001100_hook("c", b.google_ad_format, "var-init");
      if ("autorelaxed" == c) {
        a: {
          if ("pedestal" != b.google_content_recommendation_ui_type) for (const d of jn) if (null != b[d]) {
            a = cc11001100_hook("a", !0, "assign");
            break a;
          }
          a = cc11001100_hook("a", !1, "assign");
        }
        return a ? 9 : 5;
      }
      if (wn(c)) return 1;
      if ("link" === c) return 4;
      if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Dn(b), 1);
      if (27 === b.google_reactive_ad_format) return Dn(b), 1;
    }, "var-init"),
    Gn = cc11001100_hook("Gn", (a, b, c, d, e = !1) => {
      e = cc11001100_hook("e", b.offsetWidth || (c.google_ad_resize || e) && di(b, d, "width", K) || c.google_ad_width || 0, "assign");
      4 === a && (c.google_ad_format = cc11001100_hook("c.google_ad_format", "auto", "assign"), a = cc11001100_hook("a", 1, "assign"));
      var f = cc11001100_hook("f", (f = cc11001100_hook("f", Fn(a, e, b, c, d), "assign")) ? f : An(e, c.google_ad_format, d, b, c), "var-init");
      f.size().i(d, c, b);
      gn(f, e, c);
      1 != a && (a = cc11001100_hook("a", f.size().height(), "assign"), b.style.height = cc11001100_hook("b.style.height", a + "px", "assign"));
    }, "var-init");
  const Fn = cc11001100_hook("Fn", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", d.google_ad_height || di(c, e, "height", K), "var-init");
      switch (a) {
        case 5:
          const {
            D: g,
            F: h
          } = cc11001100_hook("", zj(247, () => xn(b, d.google_ad_format, e, c, d)), "var-init");
          !0 === h && b != g && bi(e, c);
          !0 === h ? d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !0, "assign") : (d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !1, "assign"), d.gfwrnwer = cc11001100_hook("d.gfwrnwer", h, "assign"));
          return nn(g, d);
        case 9:
          return on(b, d);
        case 8:
          return sn(b, e, c, f, d);
        case 10:
          return Cn(b, e, c, f, d);
      }
    }, "var-init"),
    Dn = cc11001100_hook("Dn", a => {
      a.google_ad_format = cc11001100_hook("a.google_ad_format", "auto", "assign");
      a.armr = cc11001100_hook("a.armr", 3, "assign");
    }, "var-init");
  function Hn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Jc(b), "var-init");
    if (c) {
      c = cc11001100_hook("c", P(c).clientWidth, "assign");
      const d = cc11001100_hook("d", Mc(a, b) || {}, "var-init"),
        e = cc11001100_hook("e", d.direction, "var-init");
      if ("0px" === d.width && "none" !== d.cssFloat) return -1;
      if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if ("rtl" === e && c) return a = cc11001100_hook("a", b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, "assign"), Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)));
    }
    return -1;
  }
  ;
  function In({
    sa: a,
    wa: b
  }) {
    return a || ("dev" === b ? "dev" : "");
  }
  ;
  function Jn(a) {
    cc11001100_hook("a", a, "function-parameter");
    V.xa(b => {
      b.shv = cc11001100_hook("b.shv", String(a), "assign");
      b.mjsv = cc11001100_hook("b.mjsv", In({
        sa: cc11001100_hook("sa", "m202302280101", "object-key-init"),
        wa: cc11001100_hook("wa", a, "object-key-init")
      }), "assign");
      const c = cc11001100_hook("c", M(Pf).i(), "var-init"),
        d = cc11001100_hook("d", X(n), "var-init");
      d.eids || (d.eids = cc11001100_hook("d.eids", [], "assign"));
      b.eid = cc11001100_hook("b.eid", c.concat(d.eids).join(","), "assign");
    });
  }
  function Kn(a) {
    cc11001100_hook("a", a, "function-parameter");
    Jn(F(a, 2));
    a = cc11001100_hook("a", G(a, 6), "assign");
    Yb(ul, Vd);
    ul = cc11001100_hook("ul", a, "assign");
  }
  ;
  function Ln(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", V, "var-init");
    try {
      return Yb(a, Ud), new tl(JSON.parse(a));
    } catch (c) {
      b.I(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
        d.jspb = cc11001100_hook("d.jspb", String(a), "assign");
      });
    }
    return new tl();
  }
  ;
  function Mn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`;
  }
  function Nn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return `&${a}=${b.toFixed(3)}`;
  }
  function On() {
    const a = cc11001100_hook("a", new Set(), "var-init"),
      b = cc11001100_hook("b", mj(), "var-init");
    try {
      if (!b) return a;
      const c = cc11001100_hook("c", b.pubads(), "var-init");
      for (const d of c.getSlots()) a.add(d.getSlotId().getDomId());
    } catch (c) {}
    return a;
  }
  function Pn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.id, "assign");
    return null != a && (On().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"));
  }
  function Qn(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a.sources) return !1;
    switch (Rn(a)) {
      case 2:
        const d = cc11001100_hook("d", Sn(a), "var-init");
        if (d) return c.some(f => Tn(d, f));
      case 1:
        const e = cc11001100_hook("e", Un(a), "var-init");
        if (e) return b.some(f => Tn(e, f));
    }
    return !1;
  }
  function Rn(a) {
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
  function Un(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Vn(a, b => b.currentRect);
  }
  function Sn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Vn(a, b => b.previousRect);
  }
  function Vn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.sources.reduce((c, d) => {
      d = cc11001100_hook("d", b(d), "assign");
      return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d;
    }, null);
  }
  function Tn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Math.min(a.right, b.right) - Math.max(a.left, b.left), "var-init");
    a = cc11001100_hook("a", Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top), "assign");
    return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top));
  }
  function Wn() {
    const a = cc11001100_hook("a", [...document.getElementsByTagName("iframe")].filter(Pn), "var-init"),
      b = cc11001100_hook("b", [...On()].map(c => document.getElementById(c)).filter(c => null !== c), "var-init");
    Xn = cc11001100_hook("Xn", window.scrollX, "assign");
    Yn = cc11001100_hook("Yn", window.scrollY, "assign");
    return Zn = cc11001100_hook("Zn", [...a, ...b].map(c => c.getBoundingClientRect()), "assign");
  }
  function $n() {
    var a = cc11001100_hook("a", new ao(), "var-init");
    if (T(th)) {
      var b = cc11001100_hook("b", window, "var-init");
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = cc11001100_hook("b.google_plmetrics", !0, "assign");
        b = cc11001100_hook("b", ["layout-shift", "largest-contentful-paint", "first-input", "longtask"], "assign");
        for (const c of b) a.J().observe({
          type: cc11001100_hook("type", c, "object-key-init"),
          buffered: cc11001100_hook("buffered", !0, "object-key-init")
        });
        bo(a);
      }
    }
  }
  function bo(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", qi(641, () => {
        var d = cc11001100_hook("d", document, "var-init");
        2 == (d.prerendering ? 3 : {
          visible: cc11001100_hook("visible", 1, "object-key-init"),
          hidden: cc11001100_hook("hidden", 2, "object-key-init"),
          prerender: cc11001100_hook("prerender", 3, "object-key-init"),
          preview: cc11001100_hook("preview", 4, "object-key-init"),
          unloaded: cc11001100_hook("unloaded", 5, "object-key-init")
        }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && co(a);
      }), "var-init"),
      c = cc11001100_hook("c", qi(641, () => void co(a)), "var-init");
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.ya = cc11001100_hook("a.ya", () => {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      a.J().disconnect();
    }, "assign");
  }
  function co(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.Fa) {
      a.Fa = cc11001100_hook("a.Fa", !0, "assign");
      a.J().takeRecords();
      var b = cc11001100_hook("b", "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics", "var-init");
      window.LayoutShift && (b += cc11001100_hook("b", Nn("cls", a.B), "assign"), b += cc11001100_hook("b", Nn("mls", a.K), "assign"), b += cc11001100_hook("b", Mn("nls", a.P), "assign"), window.LayoutShiftAttribution && (b += cc11001100_hook("b", Nn("cas", a.m), "assign"), b += cc11001100_hook("b", Mn("nas", a.Ea), "assign")), b += cc11001100_hook("b", Nn("wls", a.ea), "assign"), b += cc11001100_hook("b", Nn("tls", a.Ia), "assign"), window.LayoutShiftAttribution && (b += cc11001100_hook("b", Nn("was", a.Ja), "assign")));
      window.LargestContentfulPaint && (b += cc11001100_hook("b", Mn("lcp", a.Ca), "assign"), b += cc11001100_hook("b", Mn("lcps", a.Ba), "assign"));
      window.PerformanceEventTiming && a.Aa && (b += cc11001100_hook("b", Mn("fid", a.za), "assign"));
      window.PerformanceLongTaskTiming && (b += cc11001100_hook("b", Mn("cbt", a.v), "assign"), b += cc11001100_hook("b", Mn("mbt", a.C), "assign"), b += cc11001100_hook("b", Mn("nlt", a.R), "assign"));
      let d = cc11001100_hook("d", 0, "var-init");
      for (var c of document.getElementsByTagName("iframe")) Pn(c) && d++;
      b += cc11001100_hook("b", Mn("nif", d), "assign");
      b += cc11001100_hook("b", Mn("ifi", qd(window)), "assign");
      c = cc11001100_hook("c", M(Pf).i(), "assign");
      b += cc11001100_hook("b", `&${"eid"}=${encodeURIComponent(c.join())}`, "assign");
      b += cc11001100_hook("b", `&${"top"}=${n === n.top ? 1 : 0}`, "assign");
      b += cc11001100_hook("b", a.Ha ? `&${"qqid"}=${encodeURIComponent(a.Ha)}` : Mn("pvsid", ad(n)), "assign");
      window.googletag && (b += cc11001100_hook("b", "&gpt=1", "assign"));
      window.fetch(b, {
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        credentials: cc11001100_hook("credentials", "include", "object-key-init"),
        redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      });
      $e(a);
    }
  }
  class ao extends Ze {
    constructor() {
      super();
      this.l = cc11001100_hook("this.l", this.i = cc11001100_hook("this.i", this.P = cc11001100_hook("this.P", this.K = cc11001100_hook("this.K", this.B = cc11001100_hook("this.B", 0, "assign"), "assign"), "assign"), "assign"), "assign");
      this.Ga = cc11001100_hook("this.Ga", this.Da = cc11001100_hook("this.Da", Number.NEGATIVE_INFINITY, "assign"), "assign");
      this.za = cc11001100_hook("this.za", this.Ba = cc11001100_hook("this.Ba", this.Ca = cc11001100_hook("this.Ca", this.Ea = cc11001100_hook("this.Ea", this.Ja = cc11001100_hook("this.Ja", this.m = cc11001100_hook("this.m", this.Ia = cc11001100_hook("this.Ia", this.ea = cc11001100_hook("this.ea", 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
      this.Aa = cc11001100_hook("this.Aa", !1, "assign");
      this.R = cc11001100_hook("this.R", this.C = cc11001100_hook("this.C", this.v = cc11001100_hook("this.v", 0, "assign"), "assign"), "assign");
      const a = cc11001100_hook("a", document.querySelector("[data-google-query-id]"), "var-init");
      this.Ha = cc11001100_hook("this.Ha", a ? a.getAttribute("data-google-query-id") : null, "assign");
      this.T = cc11001100_hook("this.T", null, "assign");
      this.Fa = cc11001100_hook("this.Fa", !1, "assign");
      this.ya = cc11001100_hook("this.ya", () => {}, "assign");
    }
    J() {
      this.T || (this.T = cc11001100_hook("this.T", new PerformanceObserver(qi(640, a => {
        const b = cc11001100_hook("b", Xn !== window.scrollX || Yn !== window.scrollY ? [] : Zn, "var-init"),
          c = cc11001100_hook("c", Wn(), "var-init");
        for (const f of a.getEntries()) switch (f.entryType) {
          case "layout-shift":
            a = cc11001100_hook("a", f, "assign");
            var d = cc11001100_hook("d", b, "var-init"),
              e = cc11001100_hook("e", c, "var-init");
            if (!a.hadRecentInput) {
              this.B += cc11001100_hook("this.B", Number(a.value), "assign");
              Number(a.value) > this.K && (this.K = cc11001100_hook("this.K", Number(a.value), "assign"));
              this.P += cc11001100_hook("this.P", 1, "assign");
              if (d = cc11001100_hook("d", Qn(a, d, e), "assign")) this.m += cc11001100_hook("this.m", a.value, "assign"), this.Ea++;
              if (5E3 < a.startTime - this.Da || 1E3 < a.startTime - this.Ga) this.Da = cc11001100_hook("this.Da", a.startTime, "assign"), this.l = cc11001100_hook("this.l", this.i = cc11001100_hook("this.i", 0, "assign"), "assign");
              this.Ga = cc11001100_hook("this.Ga", a.startTime, "assign");
              this.i += cc11001100_hook("this.i", a.value, "assign");
              d && (this.l += cc11001100_hook("this.l", a.value, "assign"));
              this.i > this.ea && (this.ea = cc11001100_hook("this.ea", this.i, "assign"), this.Ja = cc11001100_hook("this.Ja", this.l, "assign"), this.Ia = cc11001100_hook("this.Ia", a.startTime + a.duration, "assign"));
            }
            break;
          case "largest-contentful-paint":
            a = cc11001100_hook("a", f, "assign");
            this.Ca = cc11001100_hook("this.Ca", Math.floor(a.renderTime || a.loadTime), "assign");
            this.Ba = cc11001100_hook("this.Ba", a.size, "assign");
            break;
          case "first-input":
            a = cc11001100_hook("a", f, "assign");
            this.za = cc11001100_hook("this.za", Number((a.processingStart - a.startTime).toFixed(3)), "assign");
            this.Aa = cc11001100_hook("this.Aa", !0, "assign");
            break;
          case "longtask":
            a = cc11001100_hook("a", Math.max(0, f.duration - 50), "assign"), this.v += cc11001100_hook("this.v", a, "assign"), this.C = cc11001100_hook("this.C", Math.max(this.C, a), "assign"), this.R += cc11001100_hook("this.R", 1, "assign");
        }
      })), "assign"));
      return this.T;
    }
    h() {
      super.h();
      this.ya();
    }
  }
  var Xn = cc11001100_hook("Xn", void 0, "var-init"),
    Yn = cc11001100_hook("Yn", void 0, "var-init"),
    Zn = cc11001100_hook("Zn", [], "var-init");
  var eo = cc11001100_hook("eo", class extends I {
    constructor() {
      super();
    }
    getVersion() {
      return F(this, 2);
    }
  }, "var-init");
  function fo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 2, b);
  }
  function go(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 3, b);
  }
  function ho(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 4, b);
  }
  function io(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 5, b);
  }
  function jo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 9, b);
  }
  function ko(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Gb(a, 10, b);
  }
  function lo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 11, b);
  }
  function mo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  function no(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 7, b);
  }
  var po = cc11001100_hook("po", class extends I {
      constructor() {
        super(void 0, -1, oo);
      }
    }, "var-init"),
    oo = cc11001100_hook("oo", [10, 6], "var-init");
  const qo = cc11001100_hook("qo", "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" "), "var-init");
  function ro() {
    if ("function" !== typeof L.navigator?.userAgentData?.getHighEntropyValues) return null;
    const a = cc11001100_hook("a", L.google_tag_data ?? (L.google_tag_data = cc11001100_hook("L.google_tag_data", {}, "assign")), "var-init");
    if (a.uach_promise) return a.uach_promise;
    const b = cc11001100_hook("b", L.navigator.userAgentData.getHighEntropyValues(qo).then(c => {
      a.uach ?? (a.uach = cc11001100_hook("a.uach", c, "assign"));
      return c;
    }), "var-init");
    return a.uach_promise = cc11001100_hook("a.uach_promise", b, "assign");
  }
  function so(a) {
    cc11001100_hook("a", a, "function-parameter");
    return lo(ko(io(fo(mo(ho(no(jo(go(new po(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList?.map(b => {
      var c = cc11001100_hook("c", new eo(), "var-init");
      c = cc11001100_hook("c", x(c, 1, b.brand), "assign");
      return x(c, 2, b.version);
    }) || []), a.wow64 || !1);
  }
  function to() {
    return ro()?.then(a => so(a)) ?? null;
  }
  ;
  function uo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.google_ad_host || (a = cc11001100_hook("a", Ll(a), "assign")) && (b.google_ad_host = cc11001100_hook("b.google_ad_host", a, "assign"));
  }
  function vo(a, b, c = "") {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, delete L.google_sa_impl);
    L.google_sa_queue || (L.google_sa_queue = cc11001100_hook("L.google_sa_queue", [], "assign"), L.google_process_slots = cc11001100_hook("L.google_process_slots", V.pa(215, () => wo(L.google_sa_queue)), "assign"), a = cc11001100_hook("a", xo(c, a, b), "assign"), Kc(L.document, a).id = cc11001100_hook("Kc(L.document, a).id", "google_shimpl", "assign"));
  }
  function wo(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.shift(), "var-init");
    "function" === typeof b && V.ha(216, b);
    a.length && n.setTimeout(V.pa(215, () => wo(a)), 0);
  }
  function yo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.google_sa_queue = cc11001100_hook("a.google_sa_queue", a.google_sa_queue || [], "assign");
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
  }
  function xo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", G(c, 4) ? b.rb : b.sb, "assign");
    const d = cc11001100_hook("d", {}, "var-init");
    a: {
      if (G(c, 4)) {
        if (a = cc11001100_hook("a", a || nm(L), "assign")) {
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
    zo(a, d);
    zo(Kh() ? {
      bust: cc11001100_hook("bust", Kh(), "object-key-init")
    } : {}, d);
    return vc(b, d);
  }
  function zo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    J(a, (c, d) => {
      void 0 === b[d] && (b[d] = cc11001100_hook("b[d]", c, "assign"));
    });
  }
  function Ao(a) {
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
          id = cc11001100_hook("id", d, "assign");
          break a;
        }
      } catch (g) {}
      id = cc11001100_hook("id", null, "assign");
    }
    if (id) return null;
    d = cc11001100_hook("d", Lc("IFRAME"), "assign");
    d.id = cc11001100_hook("d.id", "google_esf", "assign");
    d.name = cc11001100_hook("d.name", "google_esf", "assign");
    d.src = cc11001100_hook("d.src", xc(a.yb).toString(), "assign");
    d.style.display = cc11001100_hook("d.style.display", "none", "assign");
    return d;
  }
  function Bo(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", e.fb, "var-init");
    Co(a, c, b);
    c = cc11001100_hook("c", pa, "assign");
    const g = cc11001100_hook("g", new Date().getTime(), "var-init");
    b.google_lrv = cc11001100_hook("b.google_lrv", In({
      sa: cc11001100_hook("sa", "m202302280101", "object-key-init"),
      wa: cc11001100_hook("wa", F(d, 2), "object-key-init")
    }), "assign");
    b.google_async_iframe_id = cc11001100_hook("b.google_async_iframe_id", f, "assign");
    b.google_start_time = cc11001100_hook("b.google_start_time", c, "assign");
    b.google_bpp = cc11001100_hook("b.google_bpp", g > c ? g - c : 1, "assign");
    a.google_sv_map = cc11001100_hook("a.google_sv_map", a.google_sv_map || {}, "assign");
    a.google_sv_map[f] = cc11001100_hook("a.google_sv_map[f]", b, "assign");
    d = cc11001100_hook("d", a.document.getElementById(f + "_host") ? h => h() : h => window.setTimeout(h, 0), "assign");
    yo(a, () => {
      ({
        xb: h
      } = cc11001100_hook("", e, "assign"));
      if (!h || !h.isConnected) {
        var h = cc11001100_hook("h", a.document.getElementById(String(b.google_async_iframe_id) + "_host"), "var-init");
        if (null == h) throw Error("no_div");
      }
      h = cc11001100_hook("h", T(jh) ? {
        pubWin: cc11001100_hook("pubWin", a, "object-key-init"),
        vars: cc11001100_hook("vars", b, "object-key-init"),
        innerInsElement: cc11001100_hook("innerInsElement", h, "object-key-init")
      } : {
        pubWin: cc11001100_hook("pubWin", a, "object-key-init"),
        vars: cc11001100_hook("vars", b, "object-key-init"),
        outerInsElement: cc11001100_hook("outerInsElement", h, "object-key-init"),
        innerInsElement: cc11001100_hook("innerInsElement", h, "object-key-init")
      }, "assign");
      (h = cc11001100_hook("h", a.google_sa_impl(h), "assign")) && V.ba(911, h);
    }, d);
  }
  function Co(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", c.google_ad_output, "var-init"),
      e = cc11001100_hook("e", c.google_ad_format, "var-init"),
      f = cc11001100_hook("f", c.google_ad_width || 0, "var-init"),
      g = cc11001100_hook("g", c.google_ad_height || 0, "var-init");
    e || "html" !== d && null != d || (e = cc11001100_hook("e", f + "x" + g, "assign"));
    d = cc11001100_hook("d", !c.google_ad_slot || c.google_override_format || !Ym[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used, "assign");
    e && d ? e = cc11001100_hook("e", e.toLowerCase(), "assign") : e = cc11001100_hook("e", "", "assign");
    c.google_ad_format = cc11001100_hook("c.google_ad_format", e, "assign");
    if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
      e = cc11001100_hook("e", [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height], "assign");
      d = cc11001100_hook("d", [], "assign");
      f = cc11001100_hook("f", 0, "assign");
      for (g = cc11001100_hook("g", b, "assign"); g && 25 > f; g = cc11001100_hook("g", g.parentNode, "assign"), ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
      (d = cc11001100_hook("d", d.join(), "assign")) && e.push(d);
      c.google_ad_unit_key = cc11001100_hook("c.google_ad_unit_key", Rc(e.join(":")).toString(), "assign");
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
      c.google_ad_dom_fingerprint = cc11001100_hook("c.google_ad_dom_fingerprint", Rc(b + e.join()).toString(), "assign");
    }
  }
  function Do() {
    var a = cc11001100_hook("a", Jc(n), "var-init");
    a && (a = cc11001100_hook("a", xg(a), "assign"), a.tagSpecificState[1] || (a.tagSpecificState[1] = cc11001100_hook("a.tagSpecificState[1]", {
      debugCard: cc11001100_hook("debugCard", null, "object-key-init"),
      debugCardRequested: cc11001100_hook("debugCardRequested", !1, "object-key-init")
    }, "assign")));
  }
  function Eo() {
    const a = cc11001100_hook("a", to(), "var-init");
    null != a && a.then(b => {
      a: {
        nb = cc11001100_hook("nb", !0, "assign");
        try {
          var c = cc11001100_hook("c", JSON.stringify(b.toJSON(), Vb), "var-init");
          break a;
        } finally {
          nb = cc11001100_hook("nb", !1, "assign");
        }
        c = cc11001100_hook("c", void 0, "assign");
      }
      L.google_user_agent_client_hint = cc11001100_hook("L.google_user_agent_client_hint", c, "assign");
    });
    Am();
  }
  ;
  function Fo(a, b) {
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
  function Go(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.getAttribute("src")) {
      var c = cc11001100_hook("c", a.getAttribute("src") || "", "var-init"),
        d = cc11001100_hook("d", Hc(c, "client"), "var-init");
      d && (b.google_ad_client = cc11001100_hook("b.google_ad_client", Fo("google_ad_client", d), "assign"));
      (c = cc11001100_hook("c", Hc(c, "host"), "assign")) && (b.google_ad_host = cc11001100_hook("b.google_ad_host", Fo("google_ad_host", c), "assign"));
    }
    a = cc11001100_hook("a", a.attributes, "assign");
    c = cc11001100_hook("c", a.length, "assign");
    for (d = cc11001100_hook("d", 0, "assign"); d < c; d++) {
      var e = cc11001100_hook("e", a[d], "var-init");
      if (/data-/.test(e.name)) {
        const f = cc11001100_hook("f", qa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), "var-init");
        b.hasOwnProperty(f) || (e = cc11001100_hook("e", Fo(f, e.value), "assign"), null !== e && (b[f] = cc11001100_hook("b[f]", e, "assign")));
      }
    }
  }
  function Ho(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", ld(a), "assign")) switch (a.data && a.data.autoFormat) {
      case "rspv":
        return 13;
      case "mcrspv":
        return 15;
      default:
        return 14;
    } else return 12;
  }
  function Io(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Go(a, b);
    if (c.document && c.document.body && !En(c, b) && !b.google_reactive_ad_format) {
      var e = cc11001100_hook("e", parseInt(a.style.width, 10), "var-init"),
        f = cc11001100_hook("f", Hn(a, c), "var-init");
      if (0 < f && e > f) {
        var g = cc11001100_hook("g", parseInt(a.style.height, 10), "var-init");
        e = cc11001100_hook("e", !!Ym[e + "x" + g], "assign");
        var h = cc11001100_hook("h", f, "var-init");
        if (e) {
          const l = cc11001100_hook("l", Zm(f, g), "var-init");
          if (l) h = cc11001100_hook("h", l, "assign"), b.google_ad_format = cc11001100_hook("b.google_ad_format", l + "x" + g + "_0ads_al", "assign");else throw new U("No slot size for availableWidth=" + f);
        }
        b.google_ad_resize = cc11001100_hook("b.google_ad_resize", !0, "assign");
        b.google_ad_width = cc11001100_hook("b.google_ad_width", h, "assign");
        e || (b.google_ad_format = cc11001100_hook("b.google_ad_format", null, "assign"), b.google_override_format = cc11001100_hook("b.google_override_format", !0, "assign"));
        f = cc11001100_hook("f", h, "assign");
        a.style.width = cc11001100_hook("a.style.width", `${f}px`, "assign");
        g = cc11001100_hook("g", An(f, "auto", c, a, b), "assign");
        h = cc11001100_hook("h", f, "assign");
        g.size().i(c, b, a);
        gn(g, h, b);
        g = cc11001100_hook("g", g.size(), "assign");
        b.google_responsive_formats = cc11001100_hook("b.google_responsive_formats", null, "assign");
        g.L > f && !e && (b.google_ad_width = cc11001100_hook("b.google_ad_width", g.L, "assign"), a.style.width = cc11001100_hook("a.style.width", `${g.L}px`, "assign"));
      }
    }
    (e = cc11001100_hook("e", a.offsetWidth, "assign")) || (e = cc11001100_hook("e", di(a, c, "width", K), "assign"));
    e = cc11001100_hook("e", e || b.google_ad_width || 0, "assign");
    if (488 > P(c).clientWidth) {
      f = cc11001100_hook("f", Jc(c) || c, "assign");
      g = cc11001100_hook("g", b.google_ad_client, "assign");
      if (d = cc11001100_hook("d", kj(f.location, "google_responsive_slot_preview") || T(ih) || xl(f, 1, g, d), "assign")) b: if (b.google_reactive_ad_format || b.google_ad_resize || En(c, b) || Th(a, b)) d = cc11001100_hook("d", !1, "assign");else {
        for (d = cc11001100_hook("d", a, "assign"); d; d = cc11001100_hook("d", d.parentElement, "assign")) {
          f = cc11001100_hook("f", Mc(d, c), "assign");
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
        d = cc11001100_hook("d", Xh(c, a, e, .3, b), "assign");
        !0 !== d ? (b.gfwrnwer = cc11001100_hook("b.gfwrnwer", d, "assign"), d = cc11001100_hook("d", !1, "assign")) : d = cc11001100_hook("d", c === c.top ? !0 : !1, "assign");
      }
      d ? (b.google_resizing_allowed = cc11001100_hook("b.google_resizing_allowed", !0, "assign"), b.ovlp = cc11001100_hook("b.ovlp", !0, "assign"), b.google_ad_format = cc11001100_hook("b.google_ad_format", "auto", "assign"), b.iaaso = cc11001100_hook("b.iaaso", !0, "assign"), b.armr = cc11001100_hook("b.armr", 1, "assign"), d = cc11001100_hook("d", !0, "assign")) : d = cc11001100_hook("d", !1, "assign");
    } else d = cc11001100_hook("d", !1, "assign");
    if (e = cc11001100_hook("e", En(c, b), "assign")) Gn(e, a, b, c, d);else {
      if (Th(a, b)) {
        if (d = cc11001100_hook("d", Mc(a, c), "assign")) a.style.width = cc11001100_hook("a.style.width", d.width, "assign"), a.style.height = cc11001100_hook("a.style.height", d.height, "assign"), Sh(d, b);
        b.google_ad_width || (b.google_ad_width = cc11001100_hook("b.google_ad_width", a.offsetWidth, "assign"));
        b.google_ad_height || (b.google_ad_height = cc11001100_hook("b.google_ad_height", a.offsetHeight, "assign"));
        b.google_loader_features_used = cc11001100_hook("b.google_loader_features_used", 256, "assign");
        b.google_responsive_auto_format = cc11001100_hook("b.google_responsive_auto_format", Ho(c), "assign");
      } else Sh(a.style, b);
      c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Gn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = cc11001100_hook("a", Yh(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), "assign"), !0 !== a ? (b.efwr = cc11001100_hook("b.efwr", !1, "assign"), b.gfwrnwer = cc11001100_hook("b.gfwrnwer", a, "assign")) : b.efwr = cc11001100_hook("b.efwr", !0, "assign"));
    }
  }
  ;
  function Jo(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.i) return a.i;
    a.C && a.C(a.l) ? a.i = cc11001100_hook("a.i", a.l, "assign") : a.i = cc11001100_hook("a.i", Wc(a.l, a.K), "assign");
    return a.i ?? null;
  }
  var Ko = cc11001100_hook("Ko", class extends Ze {
    constructor(a, b, c) {
      super();
      this.K = cc11001100_hook("this.K", a, "assign");
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
      this.m && (kc(this.l, "message", this.m), delete this.m);
      delete this.l;
      delete this.P;
      super.h();
    }
  }, "var-init");
  const Lo = cc11001100_hook("Lo", (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.callback({
          consentData: cc11001100_hook("consentData", c ?? void 0, "object-key-init"),
          cb: cc11001100_hook("cb", d ? void 0 : 2, "object-key-init")
        });
      });
    }, "var-init"),
    Mo = cc11001100_hook("Mo", {
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
  function No(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", {}, "var-init");
    "string" === typeof a.data ? b = cc11001100_hook("b", JSON.parse(a.data), "assign") : b = cc11001100_hook("b", a.data, "assign");
    return {
      payload: cc11001100_hook("payload", b, "object-key-init"),
      pb: cc11001100_hook("pb", b.__uspapiReturn.callId, "object-key-init")
    };
  }
  var Oo = cc11001100_hook("Oo", class extends Ze {
    constructor() {
      super();
      this.caller = cc11001100_hook("this.caller", new Ko("__uspapiLocator", a => "function" === typeof a.__uspapi, No), "assign");
      this.caller.B.set("getDataWithCallback", Lo);
      this.caller.v.set("getDataWithCallback", Mo);
    }
    h() {
      $e(this.caller);
      super.h();
    }
    m() {
      return !!Jo(this.caller);
    }
  }, "var-init");
  var Po = cc11001100_hook("Po", Zb(class extends I {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  const Qo = cc11001100_hook("Qo", (a, b) => {
      a = cc11001100_hook("a", a.googlefc || (a.googlefc = cc11001100_hook("a.googlefc", {}, "assign")), "assign");
      a.__fci = cc11001100_hook("a.__fci", a.__fci || [], "assign");
      a.__fci.push(b.command, c => {
        c = cc11001100_hook("c", Po(c), "assign");
        b.callback({
          consentData: cc11001100_hook("consentData", c, "object-key-init")
        });
      });
    }, "var-init"),
    Ro = cc11001100_hook("Ro", {
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
  function So(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Po(a.data.__fciReturn), "assign");
    return {
      payload: cc11001100_hook("payload", a, "object-key-init"),
      pb: cc11001100_hook("pb", D(t(a, 1), 0), "object-key-init")
    };
  }
  var To = cc11001100_hook("To", class extends Ze {
    constructor() {
      super();
      this.i = cc11001100_hook("this.i", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.caller = cc11001100_hook("this.caller", new Ko("googlefcPresent", void 0, So), "assign");
      this.caller.B.set("getDataWithCallback", Qo);
      this.caller.v.set("getDataWithCallback", Ro);
    }
    h() {
      $e(this.caller);
      super.h();
    }
    m() {
      this.l || (this.i = cc11001100_hook("this.i", Jo(this.caller), "assign"), this.l = cc11001100_hook("this.l", !0, "assign"));
      return !!this.i;
    }
  }, "var-init");
  function Uo() {
    const a = cc11001100_hook("a", od`(a=0)=>{let b;const c=class{};}`, "var-init");
    try {
      var b = cc11001100_hook("b", window, "var-init");
      const c = cc11001100_hook("c", a instanceof sc && a.constructor === sc ? a.h : "type_error:SafeScript", "var-init");
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
  var Vo = cc11001100_hook("Vo", a => {
    jc(window, "message", b => {
      let c;
      try {
        c = cc11001100_hook("c", JSON.parse(b.data), "assign");
      } catch (d) {
        return;
      }
      !c || "sc-cnf" !== c.googMsgType || a(c, b);
    });
  }, "var-init");
  var Wo = cc11001100_hook("Wo", class extends Ze {
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
      (a = cc11001100_hook("a", "function" === typeof this.l?.__uspapi, "assign")) || (a = cc11001100_hook("a", this.i ? this.i : this.i = cc11001100_hook("this.i", Wc(this.l, "__uspapiLocator"), "assign"), "assign"), a = cc11001100_hook("a", null != a, "assign"));
      return a;
    }
  }, "var-init");
  var Xo = cc11001100_hook("Xo", class extends Ze {
    constructor() {
      super();
      this.v = cc11001100_hook("this.v", L, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
    m() {
      if (!this.l) {
        if (!this.i) {
          var a = cc11001100_hook("a", Wc(this.v, "googlefcPresent"), "var-init");
          this.i = cc11001100_hook("this.i", a ? a : null, "assign");
        }
        this.l = cc11001100_hook("this.l", !0, "assign");
      }
      return !!this.i;
    }
  }, "var-init");
  let Yo = cc11001100_hook("Yo", null, "var-init");
  const Zo = cc11001100_hook("Zo", [], "var-init"),
    $o = cc11001100_hook("$o", new Map(), "var-init");
  let ap = cc11001100_hook("ap", -1, "var-init");
  function bp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return li.test(a.className) && "done" !== a.dataset.adsbygoogleStatus;
  }
  function cp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.dataset.adsbygoogleStatus = cc11001100_hook("a.dataset.adsbygoogleStatus", "done", "assign");
    dp(a, b, c);
  }
  function dp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", window, "var-init");
    d.google_spfd || (d.google_spfd = cc11001100_hook("d.google_spfd", Io, "assign"));
    var e = cc11001100_hook("e", b.google_reactive_ads_config, "var-init");
    e || Io(a, b, d, c);
    uo(d, b);
    if (!ep(a, b, d)) {
      e || (d.google_lpabyc = cc11001100_hook("d.google_lpabyc", Vh(a, d) + di(a, d, "height", K), "assign"));
      if (e) {
        e = cc11001100_hook("e", e.page_level_pubvars || {}, "assign");
        if (X(L).page_contains_reactive_tag && !X(L).allow_second_reactive_tag) {
          if (e.pltais) {
            Jl(!1);
            return;
          }
          throw new U("Only one 'enable_page_level_ads' allowed per page.");
        }
        X(L).page_contains_reactive_tag = cc11001100_hook("X(L).page_contains_reactive_tag", !0, "assign");
        Jl(7 === e.google_pgb_reactive);
      }
      b.google_unique_id = cc11001100_hook("b.google_unique_id", pd(d), "assign");
      J(jm, (f, g) => {
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
        const l = cc11001100_hook("l", Lc("DIV"), "var-init");
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
        Bo(d, b, a, c, {
          fb: cc11001100_hook("fb", f, "object-key-init"),
          xb: cc11001100_hook("xb", l, "object-key-init")
        });
      });
    }
  }
  function ep(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", b.google_reactive_ads_config, "var-init"),
      e = cc11001100_hook("e", "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className), "var-init"),
      f = cc11001100_hook("f", Hl(c), "var-init");
    if (f && f.Ka && "on" !== b.google_adtest && !e) {
      e = cc11001100_hook("e", Vh(a, c), "assign");
      const g = cc11001100_hook("g", P(c).clientHeight, "var-init");
      e = cc11001100_hook("e", 0 == g ? null : e / g, "assign");
      if (!f.ra || f.ra && (e || 0) >= f.ra) return a.className += cc11001100_hook("a.className", " adsbygoogle-ablated-ad-slot", "assign"), c = cc11001100_hook("c", c.google_sv_map = cc11001100_hook("c.google_sv_map", c.google_sv_map || {}, "assign"), "assign"), d = cc11001100_hook("d", ea(a), "assign"), b.google_element_uid = cc11001100_hook("b.google_element_uid", d, "assign"), c[b.google_element_uid] = cc11001100_hook("c[b.google_element_uid]", b, "assign"), a.setAttribute("google_element_uid", String(d)), "slot" === f.vb && (null !== Vc(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Vc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = cc11001100_hook("a.style.width", "0px", "assign"), a.style.height = cc11001100_hook("a.style.height", "0px", "assign")), !0;
    }
    if ((f = cc11001100_hook("f", Mc(a, c), "assign")) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
    a = cc11001100_hook("a", null == b.google_pgb_reactive || 3 === b.google_pgb_reactive, "assign");
    return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0);
  }
  function fp(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", document.getElementsByTagName("INS"), "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b[d], "var-init"); d < b.length; e = cc11001100_hook("e", b[++d], "assign")) {
      var c = cc11001100_hook("c", e, "var-init");
      if (bp(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e;
    }
    return null;
  }
  function gp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a && a.shift) {
      let d = cc11001100_hook("d", 20, "var-init");
      for (; 0 < a.length && 0 < d;) {
        try {
          hp(a.shift(), b, c);
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
        --d;
      }
    }
  }
  function ip() {
    const a = cc11001100_hook("a", Lc("INS"), "var-init");
    a.className = cc11001100_hook("a.className", "adsbygoogle", "assign");
    a.className += cc11001100_hook("a.className", " adsbygoogle-noablate", "assign");
    Yc(a, {
      display: cc11001100_hook("display", "none", "object-key-init")
    });
    return a;
  }
  function jp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init"),
      d = cc11001100_hook("d", Gl(), "var-init");
    J(wg, (g, h) => {
      !1 === a.enable_page_level_ads ? c[h] = cc11001100_hook("c[h]", !1, "assign") : a.hasOwnProperty(h) ? c[h] = cc11001100_hook("c[h]", a[h], "assign") : d.includes(g) && (c[h] = cc11001100_hook("c[h]", !1, "assign"));
    });
    da(a.enable_page_level_ads) && (c.page_level_pubvars = cc11001100_hook("c.page_level_pubvars", a.enable_page_level_ads, "assign"));
    const e = cc11001100_hook("e", ip(), "var-init");
    bd.body.appendChild(e);
    const f = cc11001100_hook("f", {
      google_reactive_ads_config: cc11001100_hook("google_reactive_ads_config", c, "object-key-init"),
      google_ad_client: cc11001100_hook("google_ad_client", a.google_ad_client, "object-key-init")
    }, "var-init");
    f.google_pause_ad_requests = cc11001100_hook("f.google_pause_ad_requests", !!X(L).pause_ad_requests, "assign");
    cp(e, f, b);
  }
  function kp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    xg(n).wasPlaTagProcessed = cc11001100_hook("xg(n).wasPlaTagProcessed", !0, "assign");
    const c = cc11001100_hook("c", () => jp(a, b), "var-init"),
      d = cc11001100_hook("d", n.document, "var-init");
    if (d.body || "complete" === d.readyState || "interactive" === d.readyState) jp(a, b);else {
      const e = cc11001100_hook("e", ic(V.pa(191, c)), "var-init");
      jc(d, "DOMContentLoaded", e);
      new n.MutationObserver((f, g) => {
        d.body && (e(), g.disconnect());
      }).observe(d, {
        childList: cc11001100_hook("childList", !0, "object-key-init"),
        subtree: cc11001100_hook("subtree", !0, "object-key-init")
      });
    }
  }
  function hp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", {}, "var-init");
    zj(165, () => lp(a, d, b, c), e => {
      e.client = cc11001100_hook("e.client", e.client || d.google_ad_client || a.google_ad_client, "assign");
      e.slotname = cc11001100_hook("e.slotname", e.slotname || d.google_ad_slot, "assign");
      e.tag_origin = cc11001100_hook("e.tag_origin", e.tag_origin || d.google_tag_origin, "assign");
    });
  }
  function mp(a) {
    cc11001100_hook("a", a, "function-parameter");
    delete a.google_checked_head;
    J(a, (b, c) => {
      ki[c] || (delete a[c], b = cc11001100_hook("b", c.replace("google", "data").replace(/_/g, "-"), "assign"), n.console.warn(`AdSense head tag doesn't support ${b} attribute.`));
    });
  }
  function np(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'), "var-init");
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = cc11001100_hook("d", X(window), "var-init");
      if (d.head_tag_slot_vars) op(c);else {
        var e = cc11001100_hook("e", {}, "var-init");
        Go(c, e);
        mp(e);
        var f = cc11001100_hook("f", oc(e), "var-init");
        d.head_tag_slot_vars = cc11001100_hook("d.head_tag_slot_vars", f, "assign");
        c = cc11001100_hook("c", {
          google_ad_client: cc11001100_hook("google_ad_client", e.google_ad_client, "object-key-init"),
          enable_page_level_ads: cc11001100_hook("enable_page_level_ads", e, "object-key-init")
        }, "assign");
        L.adsbygoogle || (L.adsbygoogle = cc11001100_hook("L.adsbygoogle", [], "assign"));
        d = cc11001100_hook("d", L.adsbygoogle, "assign");
        d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
        e.google_adbreak_test || b.l()?.l() && T(qh) ? pp(f, a) : Vo(() => {
          pp(f, a);
        });
      }
    }
  }
  function op(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", X(window).head_tag_slot_vars, "var-init"),
      c = cc11001100_hook("c", a.getAttribute("src") || "", "var-init");
    if ((a = cc11001100_hook("a", Hc(c, "client") || a.getAttribute("data-ad-client") || "", "assign")) && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
  }
  function qp(a) {
    cc11001100_hook("a", a, "function-parameter");
    if ("object" === typeof a && null != a) {
      if ("string" === typeof a.type) return 2;
      if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3;
    }
    return 0;
  }
  function lp(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null == a) throw new U("push() called with no parameters.");
    d.m() && rp(a, d.i().i(), F(d, 2));
    var e = cc11001100_hook("e", qp(a), "var-init");
    if (0 !== e) {
      if (d = cc11001100_hook("d", Kl(), "assign"), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = cc11001100_hook("d.first_slotcar_request_processing_time", Date.now(), "assign"), d.adsbygoogle_execution_start_time = cc11001100_hook("d.adsbygoogle_execution_start_time", pa, "assign")), null == Yo) sp(a), Zo.push(a);else if (3 === e) {
        const g = cc11001100_hook("g", Yo, "var-init");
        zj(787, () => {
          g.handleAdConfig(a);
        });
      } else Bj(730, Yo.handleAdBreak(a));
    } else {
      pa = cc11001100_hook("pa", new Date().getTime(), "assign");
      vo(c, d, tp(a));
      up();
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
      if (e) vp(a, d);else if ((e = cc11001100_hook("e", a.params, "assign")) && J(e, (g, h) => {
        b[h] = cc11001100_hook("b[h]", g, "assign");
      }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");else {
        e = cc11001100_hook("e", wp(a.element), "assign");
        Go(e, b);
        c = cc11001100_hook("c", X(n).head_tag_slot_vars || {}, "assign");
        J(c, (g, h) => {
          b.hasOwnProperty(h) || (b[h] = cc11001100_hook("b[h]", g, "assign"));
        });
        if (e.hasAttribute("data-require-head") && !X(n).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
        if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
        var f = cc11001100_hook("f", (c = cc11001100_hook("c", 0 === (X(L).first_tag_on_page || 0) && dm(b), "assign")) && em(c), "var-init");
        c && (f || (vp(c, d), X(L).skip_next_reactive_tag = cc11001100_hook("X(L).skip_next_reactive_tag", !0, "assign")), f && xp(c));
        0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = cc11001100_hook("X(L).first_tag_on_page", 2, "assign"));
        b.google_pause_ad_requests = cc11001100_hook("b.google_pause_ad_requests", !!X(L).pause_ad_requests, "assign");
        cp(e, b, d);
      }
    }
  }
  let yp = cc11001100_hook("yp", !1, "var-init");
  function rp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    yp || (yp = cc11001100_hook("yp", !0, "assign"), a = cc11001100_hook("a", tp(a) || nm(L), "assign"), Aj("predictive_abg", {
      a_c: cc11001100_hook("a_c", a, "object-key-init"),
      p_c: cc11001100_hook("p_c", b.join(), "object-key-init"),
      b_v: cc11001100_hook("b_v", c, "object-key-init")
    }, .01));
  }
  function tp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.google_ad_client ? a.google_ad_client : (a = cc11001100_hook("a", a.params, "assign")) && a.google_ad_client ? a.google_ad_client : "";
  }
  function up() {
    if (T(ch)) {
      var a = cc11001100_hook("a", Hl(L), "var-init");
      if (!(a = cc11001100_hook("a", a && a.Ka, "assign"))) {
        try {
          var b = cc11001100_hook("b", L.localStorage, "var-init");
        } catch (c) {
          b = cc11001100_hook("b", null, "assign");
        }
        b = cc11001100_hook("b", b ? el(b) : null, "assign");
        a = cc11001100_hook("a", !(b && dl(b) && b), "assign");
      }
      a || Il(L, 1);
    }
  }
  function xp(a) {
    cc11001100_hook("a", a, "function-parameter");
    cd(() => {
      xg(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a);
    });
  }
  function vp(a, b) {
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
      hm(a, b);
      kp(a, b);
    }
  }
  function wp(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a) {
      if (!bp(a) && (a.id ? a = cc11001100_hook("a", fp(a.id), "assign") : a = cc11001100_hook("a", null, "assign"), !a)) throw new U("'element' has already been filled.");
      if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
    } else if (a = cc11001100_hook("a", fp(), "assign"), !a) throw new U("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
    return a;
  }
  function zp() {
    const a = cc11001100_hook("a", new Vj(L), "var-init"),
      b = cc11001100_hook("b", T(wh) ? new Oo() : new Wo(), "var-init"),
      c = cc11001100_hook("c", T(vh) ? new To() : new Xo(), "var-init");
    Aj("cmpMet", {
      tcfv1: cc11001100_hook("tcfv1", L.__cmp ? 1 : 0, "object-key-init"),
      tcfv2: cc11001100_hook("tcfv2", Sj(a) ? 1 : 0, "object-key-init"),
      usp: cc11001100_hook("usp", b.m() ? 1 : 0, "object-key-init"),
      fc: cc11001100_hook("fc", c.m() ? 1 : 0, "object-key-init"),
      ptt: cc11001100_hook("ptt", 9, "object-key-init")
    }, .001);
  }
  function Ap(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ej().S[Hj(26)] = cc11001100_hook("Ej().S[Hj(26)]", !!Number(a), "assign");
  }
  function Bp(a) {
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
  function Cp(a) {
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
  function Dp(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      Object.defineProperty(a, "requestNonPersonalizedAds", {
        set: cc11001100_hook("set", Ap, "object-key-init")
      }), Object.defineProperty(a, "pauseAdRequests", {
        set: cc11001100_hook("set", Bp, "object-key-init")
      }), Object.defineProperty(a, "cookieOptions", {
        set: cc11001100_hook("set", Cp, "object-key-init")
      }), Object.defineProperty(a, "onload", {
        set: cc11001100_hook("set", Ep, "object-key-init")
      });
    } catch {}
  }
  function Ep(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && a.call && "function" === typeof a && window.setTimeout(a, 0);
  }
  function pp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", cm(vc(b.ub, Kh() ? {
      bust: cc11001100_hook("bust", Kh(), "object-key-init")
    } : {})).then(c => {
      null == Yo && (c.init(a), Yo = cc11001100_hook("Yo", c, "assign"), Fp(c));
    }), "assign");
    V.ba(723, b);
    b.finally(() => {
      Zo.length = cc11001100_hook("Zo.length", 0, "assign");
      Aj("slotcar", {
        event: cc11001100_hook("event", "api_ld", "object-key-init"),
        time: cc11001100_hook("time", Date.now() - pa, "object-key-init"),
        time_pr: cc11001100_hook("time_pr", Date.now() - ap, "object-key-init")
      });
    });
  }
  function Fp(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (const [c, d] of $o) {
      var b = cc11001100_hook("b", c, "var-init");
      const e = cc11001100_hook("e", d, "var-init");
      -1 !== e && (n.clearTimeout(e), $o.delete(b));
    }
    for (b = cc11001100_hook("b", 0, "assign"); b < Zo.length; b++) {
      if ($o.has(b)) continue;
      const c = cc11001100_hook("c", Zo[b], "var-init"),
        d = cc11001100_hook("d", qp(c), "var-init");
      zj(723, () => {
        if (3 === d) a.handleAdConfig(c);else if (2 === d) {
          var e = cc11001100_hook("e", a.handleAdBreakBeforeReady(c), "var-init");
          V.ba(730, e);
        }
      });
    }
  }
  function sp(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Zo.length, "var-init");
    if (2 === qp(a) && "preroll" === a.type && null != a.adBreakDone) {
      var c = cc11001100_hook("c", a.adBreakDone, "var-init");
      -1 === ap && (ap = cc11001100_hook("ap", Date.now(), "assign"));
      var d = cc11001100_hook("d", n.setTimeout(() => {
        try {
          c({
            breakType: cc11001100_hook("breakType", "preroll", "object-key-init"),
            breakName: cc11001100_hook("breakName", a.name, "object-key-init"),
            breakFormat: cc11001100_hook("breakFormat", "preroll", "object-key-init"),
            breakStatus: cc11001100_hook("breakStatus", "timeout", "object-key-init")
          }), $o.set(b, -1), Aj("slotcar", {
            event: cc11001100_hook("event", "pr_to", "object-key-init"),
            source: cc11001100_hook("source", "adsbygoogle", "object-key-init")
          });
        } catch (e) {
          console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)));
        }
      }, 1E3 * Jh(rh)), "var-init");
      $o.set(b, d);
    }
  }
  ;
  (function (a, b, c, d = () => {}) {
    V.Sa(Cj);
    zj(166, () => {
      const e = cc11001100_hook("e", Ln(b), "var-init");
      Kn(e);
      d();
      kd(16, [1, e.toJSON()]);
      var f = cc11001100_hook("f", md(ld(L)) || L, "var-init");
      const g = cc11001100_hook("g", c(In({
        sa: cc11001100_hook("sa", a, "object-key-init"),
        wa: cc11001100_hook("wa", F(e, 2), "object-key-init")
      }), e), "var-init");
      yl(f, e);
      Xm(f, e, null === L.document.currentScript ? 1 : xm(g.wb));
      Bj(1086, tm());
      if (!Da() || 0 <= ra(Ja(), 11)) {
        yj(T(uh));
        Eo();
        Pk();
        try {
          $n();
        } catch {}
        Do();
        np(g, e);
        f = cc11001100_hook("f", window, "assign");
        var h = cc11001100_hook("h", f.adsbygoogle, "var-init");
        if (!h || !h.loaded) {
          Aj("new_abg_tag", {
            value: cc11001100_hook("value", `${G(e, 16)}`, "object-key-init"),
            host_v: cc11001100_hook("host_v", `${G(e, 22)}`, "object-key-init"),
            frequency: cc11001100_hook("frequency", .01, "object-key-init")
          }, .01);
          zp();
          var l = cc11001100_hook("l", {
            push: cc11001100_hook("push", v => {
              hp(v, g, e);
            }, "object-key-init"),
            loaded: cc11001100_hook("loaded", !0, "object-key-init")
          }, "var-init");
          Dp(l);
          if (h) for (var k of ["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]) void 0 !== h[k] && (l[k] = cc11001100_hook("l[k]", h[k], "assign"));
          "_gfp_a_" in window || (window._gfp_a_ = cc11001100_hook("window._gfp_a_", !0, "assign"));
          gp(h, g, e);
          f.adsbygoogle = cc11001100_hook("f.adsbygoogle", l, "assign");
          h && (l.onload = cc11001100_hook("l.onload", h.onload, "assign"));
          (k = cc11001100_hook("k", Ao(g), "assign")) && document.documentElement.appendChild(k);
          var {
            supports: m,
            error: u
          } = cc11001100_hook("", Uo(), "var-init");
          Aj("modern_js", {
            fy: cc11001100_hook("fy", D(t(e, 1), 0), "object-key-init"),
            supports: cc11001100_hook("supports", String(m), "object-key-init"),
            c: cc11001100_hook("c", 2021, "object-key-init"),
            e: cc11001100_hook("e", u, "object-key-init")
          }, .01);
        }
      }
    });
  })("m202302280101", "undefined" === typeof sttc ? void 0 : sttc, function (a, b) {
    const c = cc11001100_hook("c", 2012 < D(t(b, 1), 0) ? `_fy${D(t(b, 1), 0)}` : "", "var-init");
    var d = cc11001100_hook("d", F(b, 3), "var-init");
    const e = cc11001100_hook("e", F(b, 2), "var-init");
    b = cc11001100_hook("b", nd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`, "assign");
    d = cc11001100_hook("d", nd`https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`, "assign");
    return {
      ub: cc11001100_hook("ub", b, "object-key-init"),
      sb: cc11001100_hook("sb", nd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`, "object-key-init"),
      rb: cc11001100_hook("rb", nd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`, "object-key-init"),
      Zb: cc11001100_hook("Zb", nd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`, "object-key-init"),
      yb: cc11001100_hook("yb", d, "object-key-init"),
      wb: cc11001100_hook("wb", /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/, "object-key-init")
    };
  });
}).call(this, "[2021,\"r20230301\",\"r20190131\",null,null,null,null,\".google.cn\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1234,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1232,null,null,[1]],[1225,null,null,[1]],[1228,null,null,[1]],[1190,null,null,[1]],[null,508040914,null,[null,100]],[null,1114,null,[null,1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[10004,null,null,[1]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[1033,null,null,[1]],[506738119,null,null,[1]],[null,null,null,[null,null,null,[\"Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv\/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[1971,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,501545963,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[505942137,null,null,[1]],[null,501545962,null,[null,1]],[null,495583959,null,[null,-1]],[null,45388309,null,[null,-1]],[null,1116,null,[null,300]],[null,1112,null,[null,5]],[1203,null,null,[1]],[501545959,null,null,[1]],[500169372,null,null,[1]],[504834127,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]],[null,469675170,null,[null,30000]],[50227136,null,null,[1]],[485990406,null,null,[]],[501411886,null,null,[1]]],[[10,[[50,[[31071642],[31071643,[[1216,null,null,[1]]]]],null,72],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44767166],[44767167]]],[10,[[44782466],[44782467,[[1160,null,null,[1]]]],[44782468,[[1226,null,null,[1]],[1160,null,null,[1]]]]]],[50,[[31071869],[31071870,[[1215,null,null,[1]]]]],null,72],[10,[[31071258],[31071259]]],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[1000,[[31072568,[[null,null,14,[null,null,\"31072568\"]]],[6,null,null,null,6,null,\"31072568\"]],[31072569,[[null,null,14,[null,null,\"31072569\"]]],[6,null,null,null,6,null,\"31072569\"]]],[4,null,55],63],[1000,[[31072620,[[null,null,14,[null,null,\"31072620\"]]],[6,null,null,null,6,null,\"31072620\"]],[31072621,[[null,null,14,[null,null,\"31072621\"]]],[6,null,null,null,6,null,\"31072621\"]]],[4,null,55],63],[1000,[[31072648,[[null,null,14,[null,null,\"31072648\"]]],[6,null,null,null,6,null,\"31072648\"]],[31072649,[[null,null,14,[null,null,\"31072649\"]]],[6,null,null,null,6,null,\"31072649\"]]],[4,null,55],63],[1000,[[31072714,[[null,null,14,[null,null,\"31072714\"]]],[6,null,null,null,6,null,\"31072714\"]],[31072715,[[null,null,14,[null,null,\"31072715\"]]],[6,null,null,null,6,null,\"31072715\"]]],[4,null,55],63],[100,[[31072726],[31072727,[[504535903,null,null,[1]]]]]],[100,[[31072730],[31072731,[[505942137,null,null,[]]]]]],[1000,[[31072741,[[null,null,14,[null,null,\"31072741\"]]],[6,null,null,null,6,null,\"31072741\"]],[31072742,[[null,null,14,[null,null,\"31072742\"]]],[6,null,null,null,6,null,\"31072742\"]]],[4,null,55],63],[1000,[[31072787,[[null,null,14,[null,null,\"31072787\"]]],[6,null,null,null,6,null,\"31072787\"]],[31072788,[[null,null,14,[null,null,\"31072788\"]]],[6,null,null,null,6,null,\"31072788\"]]],[4,null,55],63],[10,[[31072791],[31072792,[[502896280,null,null,[1]]]]]],[1000,[[31072821,[[null,null,14,[null,null,\"31072821\"]]],[6,null,null,null,6,null,\"31072821\"]],[31072822,[[null,null,14,[null,null,\"31072822\"]]],[6,null,null,null,6,null,\"31072822\"]]],[4,null,55],63],[10,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,54],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[1,[[44774293,[[1147,null,null,[1]]]],[44774605,[[1147,null,null,[1]]]],[44776415]],null,54],[1,[[44779343],[44779344,[[1147,null,null,[1]]]]],null,54],[10,[[44784140],[44784141,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44784142,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,54],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44779109],[44779906],[44784478],[44785149]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69]]],[17,[[null,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[10,[[31071260]]],[10,[[31071261],[31071262],[31071263],[31071264]],null,null,null,44,22],[10,[[31071265],[31071266]],null,null,null,44,null,500],[10,[[31071267]],null,null,null,44,null,900],[10,[[31071268],[31071269]],null,null,null,null,null,null,null,101],[1,[[31072412,[[null,1103,null,[null,31072412]],[1121,null,null,[1]]]],[31072413,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072413]],[1121,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,117,1],[20,[[31072414,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072414]]]],[31072415,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072415]],[471262996,null,null,[1]]]]],[4,null,55],null,null,null,null,2,null,117,1],[10,[[31072416,[[null,1103,null,[null,31072416]]]],[31072417,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1103,null,[null,31072417]],[501545959,null,null,[]]]],[31072418,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072418]]]]],[4,null,55],null,null,null,null,42,null,117,1],[10,[[31072421,[[null,1103,null,[null,31072421]]]],[31072422,[[501545960,null,null,[1]],[1120,null,null,[1]],[1162,null,null,[1]],[null,1103,null,[null,31072422]],[501545959,null,null,[]]]],[31072423,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,31072423]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,192,null,117,1],[1,[[31072506,[[null,1103,null,[null,31072506]]]],[31072507,[[501545960,null,null,[1]],[1120,null,null,[1]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[null,1103,null,[null,31072507]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]],[501545959,null,null,[]]]],[31072508,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072508]],[491815314,null,null,[1]]]],[31072509,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,31072509]],[null,1116,null,[null,50]],[491815314,null,null,[1]]]],[31072510,[[501545960,null,null,[1]],[1120,null,null,[1]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[null,1103,null,[null,31072510]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]]]]],[4,null,55],null,null,null,null,372,null,117,1],[10,[[44784438,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,44784438]],[null,1116,null,[null,50]]]],[44784439,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,44784439]],[45388034,null,null,[1]],[null,45388309,null,[null,30]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,282,null,117,1],[10,[[44785530,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,44785530]]]],[44785531,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,506871937,null,[null,44785531]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,332,null,117,1],[10,[[44785538,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,44785538]],[null,1116,null,[null,50]]]],[44785539,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[null,506871937,null,[null,44785539]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1116,null,[null,50]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,352,null,117,1]]],[11,[[null,[[31072315],[31072316,[[483374575,null,null,[1]]]]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[50,[[31071662],[31071663,[[1974,null,null,[1]]]]]],[50,[[31071975],[31071976,[[1975,null,null,[1]]]]]],[null,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[31070383,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]],[31070384,[[439828594,null,null,[1]]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[31070594],[31070595,[[439828594,null,null,[1]],[483962503,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[10,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[200,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[null,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44783617,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44784847,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[20,[[1000,[[31070530,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070531,null,[2,[[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]],[4,null,8,null,null,null,null,[\"credentialless\"]]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070532,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]]],null,null,[null,\"1000\",1,\"1000\"]],[null,[null,[null,null,[[[null,12,null,null,null,null,\"DIV#post-content\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,null,null,null,null,null,\"DIV#post-content\\u003eOL\"],[null,null,null,null,null,null,\"LI\"]],[[null,2,null,null,null,null,\"DIV#post-content\\u003eOL\\u003eLI\"],[null,null,null,null,null,null,\"P\"]],[[null,13,null,null,null,null,\"DIV#post-content\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,1,null,null,null,null,\"DIV#post-content\\u003eUL\\u003eLI\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,null,null,null,null,null,\"DIV#post-content\"],[null,null,null,null,null,null,\"BLOCKQUOTE,H4,H5,P,PRE\"]],[[null,3,null,null,null,null,\"DIV#post-content\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,5,null,null,null,null,\"DIV#post-content\\u003eOL\"],[null,null,null,null,null,null,\"LI\"]],[[null,0,null,null,null,null,\"DIV#post-content\\u003eUL\\u003eLI\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,1,null,null,null,null,\"DIV#post-content\\u003eOL\"],[null,null,null,null,null,null,\"LI\"]],[[null,3,null,null,null,null,\"DIV#post-content\\u003eUL\\u003eLI\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,11,null,null,null,null,\"DIV#post-content\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,6,null,null,null,null,\"DIV#post-content\\u003eP\"],[]],[[null,2,null,null,null,null,\"DIV#post-content\\u003eUL\\u003eLI\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,1,null,null,null,null,\"DIV#post-content\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]]]]]],null,\"31072787\",1,\"www.zhaojun.ink\",1363175887,[44759842,44777877,44759875,44759926]]");