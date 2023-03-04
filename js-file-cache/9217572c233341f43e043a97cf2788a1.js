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
  function na(a, b) {
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
  function ta() {
    var a = cc11001100_hook("a", n.navigator, "var-init");
    return a && (a = cc11001100_hook("a", a.userAgent, "assign")) ? a : "";
  }
  function p(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 != ta().indexOf(a);
  }
  ;
  function ua() {
    return p("Trident") || p("MSIE");
  }
  function xa() {
    return (p("Chrome") || p("CriOS")) && !p("Edge") || p("Silk");
  }
  function ya(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    a.forEach(c => {
      b[c[0]] = cc11001100_hook("b[c[0]]", c[1], "assign");
    });
    return c => b[c.find(d => d in b)] || "";
  }
  function za() {
    var a = cc11001100_hook("a", ta(), "var-init");
    if (ua()) {
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
    a = cc11001100_hook("a", ya(b), "assign");
    return p("Opera") ? a(["Version", "Opera"]) : p("Edge") ? a(["Edge"]) : p("Edg/") ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : xa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = cc11001100_hook("a", b[2], "assign")) && a[1] || "";
  }
  ;
  function Aa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Ba(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Ca(a, b) {
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
  function Da(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", Array(c), "var-init"),
      e = cc11001100_hook("e", "string" === typeof a ? a.split("") : a, "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < c; f++) f in e && (d[f] = cc11001100_hook("d[f]", b.call(void 0, e[f], f, a), "assign"));
    return d;
  }
  function Fa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function Ga(a, b) {
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
  function Ha(a, b) {
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
  function Ia(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 <= Aa(a, b);
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
  function Ja(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ja[" "](a);
    return a;
  }
  Ja[" "] = cc11001100_hook("Ja[\" \"]", function () {}, "assign");
  var Ka = cc11001100_hook("Ka", ua(), "var-init");
  !p("Android") || xa();
  xa();
  !p("Safari") || xa();
  var La = cc11001100_hook("La", {}, "var-init"),
    Ma = cc11001100_hook("Ma", null, "var-init");
  function Na(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    Oa(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function Oa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    function c(k) {
      cc11001100_hook("k", k, "function-parameter");
      for (; d < a.length;) {
        var l = cc11001100_hook("l", a.charAt(d++), "var-init"),
          m = cc11001100_hook("m", Ma[l], "var-init");
        if (null != m) return m;
        if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
    }
    Qa();
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
  function Qa() {
    if (!Ma) {
      Ma = cc11001100_hook("Ma", {}, "assign");
      for (var a = cc11001100_hook("a", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), b = cc11001100_hook("b", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), c = cc11001100_hook("c", 0, "var-init"); 5 > c; c++) {
        var d = cc11001100_hook("d", a.concat(b[c].split("")), "var-init");
        La[c] = cc11001100_hook("La[c]", d, "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < d.length; e++) {
          var f = cc11001100_hook("f", d[e], "var-init");
          void 0 === Ma[f] && (Ma[f] = cc11001100_hook("Ma[f]", e, "assign"));
        }
      }
    }
  }
  ;
  var Ra = cc11001100_hook("Ra", "undefined" !== typeof Uint8Array, "var-init");
  const Sa = cc11001100_hook("Sa", !Ka && "function" === typeof n.btoa, "var-init");
  const Ta = cc11001100_hook("Ta", Symbol(), "var-init");
  function Ua(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Ta) return a[Ta] |= cc11001100_hook("a[Ta]", b, "assign");
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
  function Va(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", r(a), "var-init");
    (c & b) !== b && (Object.isFrozen(a) && (a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign")), Wa(a, c | b));
    return a;
  }
  function Xa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ta ? a[Ta] && (a[Ta] &= cc11001100_hook("a[Ta]", ~b, "assign")) : void 0 !== a.L && (a.L &= cc11001100_hook("a.L", ~b, "assign"));
  }
  function r(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    Ta ? b = cc11001100_hook("b", a[Ta], "assign") : b = cc11001100_hook("b", a.L, "assign");
    return null == b ? 0 : b;
  }
  function Wa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ta ? a[Ta] = cc11001100_hook("a[Ta]", b, "assign") : void 0 !== a.L ? a.L = cc11001100_hook("a.L", b, "assign") : Object.defineProperties(a, {
      L: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
  }
  function Ya(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ua(a, 1);
    return a;
  }
  function Za(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!(r(a) & 2);
  }
  function $a(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ua(a, 16);
    return a;
  }
  function ab(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Wa(b, (a | 0) & -51);
  }
  function bb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Wa(b, (a | 18) & -41);
  }
  ;
  var cb = cc11001100_hook("cb", {}, "var-init");
  function db(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  let eb;
  var fb;
  const gb = cc11001100_hook("gb", [], "var-init");
  Wa(gb, 23);
  fb = cc11001100_hook("fb", Object.freeze(gb), "assign");
  function hb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (r(a.u) & 2) throw Error();
  }
  function ib(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && db(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
  function jb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", r(a), "var-init");
    let d = cc11001100_hook("d", c, "var-init");
    0 === d && (d |= cc11001100_hook("d", b & 16, "assign"));
    d |= cc11001100_hook("d", b & 2, "assign");
    d !== c && Wa(a, d);
  }
  ;
  function kb(a) {
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
    hb(a);
    return z(a, b, c, d);
  }
  function z(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.v && (a.v = cc11001100_hook("a.v", void 0, "assign"));
    if (b >= a.j || d) return kb(a)[b] = cc11001100_hook("kb(a)[b]", c, "assign"), a;
    a.u[b + a.W] = cc11001100_hook("a.u[b + a.W]", c, "assign");
    (c = cc11001100_hook("c", a.H, "assign")) && b in c && delete c[b];
    return a;
  }
  function lb(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    let f = cc11001100_hook("f", t(a, b, d), "var-init");
    Array.isArray(f) || (f = cc11001100_hook("f", fb, "assign"));
    const g = cc11001100_hook("g", r(f), "var-init");
    g & 1 || Ya(f);
    if (e) g & 2 || Ua(f, 18), c & 1 || Object.freeze(f);else {
      e = cc11001100_hook("e", !(c & 2), "assign");
      const h = cc11001100_hook("h", g & 2, "var-init");
      c & 1 || !h ? e && g & 16 && !h && Xa(f, 16) : (f = cc11001100_hook("f", Ya(Array.prototype.slice.call(f)), "assign"), z(a, b, f, d));
    }
    return f;
  }
  function mb(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return lb(a, b, 0, c, Za(a.u));
  }
  function nb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", t(a, b), "assign");
    return null == a ? a : !!a;
  }
  function ob(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Za(a.u), "var-init");
    let d = cc11001100_hook("d", lb(a, b, 1, !1, c), "var-init"),
      e = cc11001100_hook("e", r(d), "var-init");
    if (!(e & 4)) {
      Object.isFrozen(d) && (d = cc11001100_hook("d", Ya(d.slice()), "assign"), z(a, b, d, !1));
      let f = cc11001100_hook("f", 0, "var-init"),
        g = cc11001100_hook("g", 0, "var-init");
      for (; f < d.length; f++) {
        const h = cc11001100_hook("h", d[f], "var-init");
        null != h && (d[g++] = cc11001100_hook("d[g++]", h, "assign"));
      }
      g < f && (d.length = cc11001100_hook("d.length", g, "assign"));
      e |= cc11001100_hook("e", 5, "assign");
      c && (e |= cc11001100_hook("e", 18, "assign"));
      Wa(d, e);
      e & 2 && Object.freeze(d);
    }
    !c && (e & 2 || Object.isFrozen(d)) && (d = cc11001100_hook("d", Array.prototype.slice.call(d), "assign"), Ua(d, 5), z(a, b, d, !1));
    return d;
  }
  function pb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", null == c ? fb : Va(c, 1), "assign");
    return x(a, b, c);
  }
  function A(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    hb(a);
    c !== d ? z(a, b, c) : z(a, b, void 0, !1);
    return a;
  }
  function qb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    hb(a);
    (c = cc11001100_hook("c", rb(a, c), "assign")) && c !== b && null != d && z(a, c, void 0, !1);
    return z(a, b, d);
  }
  function sb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return rb(a, b) === c ? c : -1;
  }
  function rb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) {
      const e = cc11001100_hook("e", b[d], "var-init");
      null != t(a, e) && (0 !== c && z(a, c, void 0, !1), c = cc11001100_hook("c", e, "assign"));
    }
    return c;
  }
  function tb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", t(a, c, d), "var-init");
    {
      let f = cc11001100_hook("f", !1, "var-init");
      null == e || "object" !== typeof e || (f = cc11001100_hook("f", Array.isArray(e), "assign")) || e.va !== cb ? f ? (jb(e, r(a.u)), b = cc11001100_hook("b", new b(e), "assign")) : b = cc11001100_hook("b", void 0, "assign") : b = cc11001100_hook("b", e, "assign");
    }
    b !== e && null != b && z(a, c, b, d);
    return b;
  }
  function B(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", tb(a, b, c, !1), "assign");
    if (null == b) return b;
    if (!Za(a.u)) {
      const d = cc11001100_hook("d", ub(b), "var-init");
      d !== b && (b = cc11001100_hook("b", d, "assign"), z(a, c, b, !1));
    }
    return b;
  }
  function vb(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", !!(e & 2), "var-init");
    a.h || (a.h = cc11001100_hook("a.h", {}, "assign"));
    var g = cc11001100_hook("g", a.h[c], "var-init"),
      h = cc11001100_hook("h", lb(a, c, 3, void 0, f), "var-init");
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
        Array.isArray(m) ? (jb(m, l), m = cc11001100_hook("m", new u(m), "assign")) : m = cc11001100_hook("m", void 0, "assign");
        void 0 !== m && (e = cc11001100_hook("e", e || !!(2 & r(m.u)), "assign"), g.push(m));
      }
      a.h[c] = cc11001100_hook("a.h[c]", g, "assign");
      l = cc11001100_hook("l", r(k), "assign");
      b = cc11001100_hook("b", l | 33, "assign");
      b = cc11001100_hook("b", e ? b & -9 : b | 8, "assign");
      l != b && (e = cc11001100_hook("e", k, "assign"), Object.isFrozen(e) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign")), Wa(e, b), k = cc11001100_hook("k", e, "assign"));
      v !== k && z(a, c, k);
      (f || d && h) && Ua(g, 18);
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
    b = cc11001100_hook("b", vb(a, b, c, e, d), "assign");
    a = cc11001100_hook("a", lb(a, c, 3, void 0, e), "assign");
    if (!(e || r(a) & 8)) {
      for (e = cc11001100_hook("e", 0, "assign"); e < b.length; e++) c = cc11001100_hook("c", b[e], "assign"), d = cc11001100_hook("d", ub(c), "assign"), c !== d && (b[e] = cc11001100_hook("b[e]", d, "assign"), a[e] = cc11001100_hook("a[e]", d.u, "assign"));
      Ua(a, 8);
    }
    return b;
  }
  function wb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    hb(a);
    null == c && (c = cc11001100_hook("c", void 0, "assign"));
    return z(a, b, c);
  }
  function xb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    hb(a);
    null == d && (d = cc11001100_hook("d", void 0, "assign"));
    return qb(a, b, c, d);
  }
  function yb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    hb(a);
    let e = cc11001100_hook("e", null == c ? fb : Ya([]), "var-init");
    if (null != c) {
      let f = cc11001100_hook("f", !!c.length, "var-init");
      for (let g = cc11001100_hook("g", 0, "var-init"); g < c.length; g++) {
        const h = cc11001100_hook("h", c[g], "var-init");
        f = cc11001100_hook("f", f && !Za(h.u), "assign");
        e[g] = cc11001100_hook("e[g]", h.u, "assign");
      }
      e = cc11001100_hook("e", Va(e, (f ? 8 : 0) | 1), "assign");
      a.h || (a.h = cc11001100_hook("a.h", {}, "assign"));
      a.h[b] = cc11001100_hook("a.h[b]", c, "assign");
    } else a.h && (a.h[b] = cc11001100_hook("a.h[b]", void 0, "assign"));
    return z(a, b, e, d);
  }
  function E(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == a ? b : a;
  }
  function F(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return E(t(a, b), "");
  }
  function G(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return E(nb(a, b), c);
  }
  function zb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", t(a, b), "var-init");
    var d = cc11001100_hook("d", null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0, "var-init");
    null != d && d !== c && z(a, b, d);
    return E(d, 0);
  }
  function H(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return E(t(a, b), 0);
  }
  function Ab(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return B(a, b, sb(a, d, c));
  }
  ;
  let Bb;
  function Cb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Bb = cc11001100_hook("Bb", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    Bb = cc11001100_hook("Bb", void 0, "assign");
    return a;
  }
  ;
  function Db(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (r(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), ib(a), a;
        } else if (Ra && null != a && a instanceof Uint8Array) {
          if (Sa) {
            for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
            b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
            a = cc11001100_hook("a", btoa(b), "assign");
          } else {
            void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
            Qa();
            b = cc11001100_hook("b", La[b], "assign");
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
  function Eb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", Fb(a, b, c, void 0 !== d), "assign");else if (db(a)) {
        const e = cc11001100_hook("e", {}, "var-init");
        for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = cc11001100_hook("e[f]", Eb(a[f], b, c, d), "assign"));
        a = cc11001100_hook("a", e, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function Fb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", r(a), "var-init");
    d = cc11001100_hook("d", d ? !!(e & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) a[f] = cc11001100_hook("a[f]", Eb(a[f], b, c, d), "assign");
    c(e, a);
    return a;
  }
  function Gb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.va === cb ? a.toJSON() : Db(a);
  }
  function Hb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && ib(b);
  }
  ;
  function Ib(a, b, c = bb) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if (Ra && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = cc11001100_hook("d", r(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return Wa(a, d | 18), a;
        a = cc11001100_hook("a", Fb(a, Ib, d & 4 ? bb : c, !0), "assign");
        b = cc11001100_hook("b", r(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.va === cb ? Jb(a) : a;
    }
  }
  function Kb(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    (a = cc11001100_hook("a", a.h && a.h[c], "assign")) ? (d = cc11001100_hook("d", r(a), "assign"), d & 2 ? d = cc11001100_hook("d", a, "assign") : (f = cc11001100_hook("f", Da(a, Jb), "assign"), bb(d, f), Object.freeze(f), d = cc11001100_hook("d", f, "assign")), yb(b, c, d, e)) : x(b, c, Ib(d, f, g), e);
  }
  function Jb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (Za(a.u)) return a;
    a = cc11001100_hook("a", Lb(a, !0), "assign");
    Ua(a.u, 18);
    return a;
  }
  function Lb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.u, "var-init");
    var d = cc11001100_hook("d", $a([]), "var-init"),
      e = cc11001100_hook("e", a.constructor.messageId, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.H, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      d.fill(void 0, d.length, c.length);
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (r(c) & 128) && ib(d);
    b = cc11001100_hook("b", b || Za(a.u) ? bb : ab, "assign");
    d = cc11001100_hook("d", Cb(a.constructor, d), "assign");
    a.Ma && (d.Ma = cc11001100_hook("d.Ma", a.Ma.slice(), "assign"));
    f = cc11001100_hook("f", !!(r(c) & 16), "assign");
    const g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Kb(a, d, h - a.W, c[h], !1, f, b);
    if (e) for (const h in e) Kb(a, d, +h, e[h], !0, f, b);
    return d;
  }
  function ub(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Za(a.u)) return a;
    const b = cc11001100_hook("b", Lb(a, !1), "var-init");
    b.v = cc11001100_hook("b.v", a, "assign");
    return b;
  }
  ;
  var I = cc11001100_hook("I", class {
    constructor(a, b, c) {
      null == a && (a = cc11001100_hook("a", Bb, "assign"));
      Bb = cc11001100_hook("Bb", void 0, "assign");
      var d = cc11001100_hook("d", this.constructor.messageId, "var-init");
      if (null == a) {
        a = cc11001100_hook("a", d ? [d] : [], "assign");
        var e = cc11001100_hook("e", !0, "var-init");
        Wa(a, 48);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (d && d !== a[0]) throw Error();
        var f = cc11001100_hook("f", Ua(a, 0) | 32, "var-init");
        e = cc11001100_hook("e", 0 !== (16 & f), "assign");
        if (128 & f) throw Error();
        Wa(a, f);
      }
      this.W = cc11001100_hook("this.W", d ? 0 : -1, "assign");
      this.h = cc11001100_hook("this.h", void 0, "assign");
      this.u = cc11001100_hook("this.u", a, "assign");
      a: {
        f = cc11001100_hook("f", this.u.length, "assign");
        d = cc11001100_hook("d", f - 1, "assign");
        if (f && (f = cc11001100_hook("f", this.u[d], "assign"), db(f))) {
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
          g ? Mb(g, b) : a[f] = cc11001100_hook("a[f]", fb, "assign");
        } else h || (h = cc11001100_hook("h", kb(this), "assign")), (g = cc11001100_hook("g", h[f], "assign")) ? Mb(g, b) : h[f] = cc11001100_hook("h[f]", fb, "assign");
      }
    }
    toJSON() {
      const a = cc11001100_hook("a", this.u, "var-init");
      return eb ? a : Fb(a, Gb, Hb);
    }
  }, "var-init");
  function Mb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", r(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && Wa(a, c | d);
    }
  }
  I.prototype.va = cc11001100_hook("I.prototype.va", cb, "assign");
  function Nb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Db(b);
  }
  ;
  const Ob = cc11001100_hook("Ob", a => null !== a && void 0 !== a, "var-init");
  let Pb = cc11001100_hook("Pb", void 0, "var-init");
  function Qb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Pb, "var-init");
    Pb = cc11001100_hook("Pb", void 0, "assign");
    if (!b(a)) throw b = cc11001100_hook("b", c ? c() + "\n" : "", "assign"), Error(b + String(a));
  }
  ;
  function Rb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", Cb(a, $a(b)), "assign");
      }
      return b;
    };
  }
  ;
  var Sb = cc11001100_hook("Sb", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ub = cc11001100_hook("Ub", class extends I {
      constructor(a) {
        super(a, -1, Tb);
      }
    }, "var-init"),
    Tb = cc11001100_hook("Tb", [2, 3], "var-init");
  function Vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.i = cc11001100_hook("this.i", a === Wb && b || "", "assign");
    this.h = cc11001100_hook("this.h", Xb, "assign");
  }
  var Xb = cc11001100_hook("Xb", {}, "var-init"),
    Wb = cc11001100_hook("Wb", {}, "var-init");
  function Yb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function $b(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", !1, "var-init"),
      c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }
  function ac(a) {
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
  function bc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function cc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1;
  }
  ;
  function dc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = cc11001100_hook("c[d]", a[d], "assign"));
    return c;
  }
  function ec(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function fc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    let c = cc11001100_hook("c", 0, "var-init");
    for (const d in a) b[c++] = cc11001100_hook("b[c++]", a[d], "assign");
    return b;
  }
  function gc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    for (const c in a) b[c] = cc11001100_hook("b[c]", a[c], "assign");
    return b;
  }
  ;
  var hc;
  function ic() {
    if (void 0 === hc) {
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
        hc = cc11001100_hook("hc", a, "assign");
      } else hc = cc11001100_hook("hc", a, "assign");
    }
    return hc;
  }
  ;
  const jc = cc11001100_hook("jc", {}, "var-init");
  class kc {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", b === jc ? a : "", "assign");
    }
    toString() {
      return this.h.toString();
    }
  }
  ;
  var mc = cc11001100_hook("mc", class {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", b === lc ? a : "", "assign");
    }
    toString() {
      return this.h + "";
    }
  }, "var-init");
  function nc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", oc.exec(pc(a).toString()), "assign");
    var c = cc11001100_hook("c", a[3] || "", "var-init");
    return qc(a[1] + rc("?", a[2] || "", b) + rc("#", c));
  }
  function pc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof mc && a.constructor === mc ? a.h : "type_error:TrustedResourceUrl";
  }
  var oc = cc11001100_hook("oc", /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, "var-init"),
    lc = cc11001100_hook("lc", {}, "var-init");
  function qc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ic(), "var-init");
    a = cc11001100_hook("a", b ? b.createScriptURL(a) : a, "assign");
    return new mc(a, lc);
  }
  function rc(a, b, c) {
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
  function sc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  ;
  function tc(a, b, c) {
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
        Ba(g ? q(f) : f, d);
      }
    }
  }
  function uc(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a || n.document || document, "assign");
  }
  uc.prototype.getElementsByTagName = cc11001100_hook("uc.prototype.getElementsByTagName", function (a, b) {
    return (b || this.h).getElementsByTagName(String(a));
  }, "assign");
  uc.prototype.createElement = cc11001100_hook("uc.prototype.createElement", function (a) {
    var b = cc11001100_hook("b", this.h, "var-init");
    a = cc11001100_hook("a", String(a), "assign");
    "application/xhtml+xml" === b.contentType && (a = cc11001100_hook("a", a.toLowerCase(), "assign"));
    return b.createElement(a);
  }, "assign");
  uc.prototype.createTextNode = cc11001100_hook("uc.prototype.createTextNode", function (a) {
    return this.h.createTextNode(String(a));
  }, "assign");
  uc.prototype.append = cc11001100_hook("uc.prototype.append", function (a, b) {
    tc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
  }, "assign");
  uc.prototype.contains = cc11001100_hook("uc.prototype.contains", function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }, "assign");
  function vc() {
    return !wc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"));
  }
  function wc() {
    return p("iPad") || p("Android") && !p("Mobile") || p("Silk");
  }
  ;
  var xc = cc11001100_hook("xc", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init"),
    yc = cc11001100_hook("yc", /#|$/, "var-init");
  function zc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.search(yc), "var-init");
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
  function Ac(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b;
      if (b = cc11001100_hook("b", !!a && null != a.location.href, "assign")) a: {
        try {
          Ja(a.foo);
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
  function Bc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Ac(a.top) ? a.top : null;
  }
  function Cc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Dc("SCRIPT", a), "var-init");
    c.src = cc11001100_hook("c.src", pc(b), "assign");
    (b = cc11001100_hook("b", (b = cc11001100_hook("b", (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]"), "assign")) ? b.nonce || b.getAttribute("nonce") || "" : "", "assign")) && c.setAttribute("nonce", b);
    return (a = cc11001100_hook("a", a.getElementsByTagName("script")[0], "assign")) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null;
  }
  function Ec(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Fc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!Gc() && !Hc()) {
      let c = cc11001100_hook("c", Math.random(), "var-init");
      if (c < b) return c = cc11001100_hook("c", Ic(), "assign"), a[Math.floor(c * a.length)];
    }
    return null;
  }
  function Ic() {
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
  function Jc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.length, "var-init");
    if (0 == b) return 0;
    let c = cc11001100_hook("c", 305419896, "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c ^= cc11001100_hook("c", (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295, "assign");
    return 0 < c ? c : 4294967296 + c;
  }
  var Hc = cc11001100_hook("Hc", $b(() => Fa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Kc) || 1E-4 > Math.random()), "var-init"),
    Gc = cc11001100_hook("Gc", $b(() => -1 != ta().indexOf("MSIE")), "var-init");
  const Kc = cc11001100_hook("Kc", a => -1 != ta().indexOf(a), "var-init");
  var Lc = cc11001100_hook("Lc", /^([0-9.]+)px$/, "var-init"),
    Mc = cc11001100_hook("Mc", /^(-?[0-9.]{1,30})$/, "var-init");
  function Nc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Mc.test(a)) return null;
    a = cc11001100_hook("a", Number(a), "assign");
    return isNaN(a) ? null : a;
  }
  function K(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Lc.exec(a), "assign")) ? +a[1] : null;
  }
  var Oc = cc11001100_hook("Oc", (a, b) => {
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
    Pc = cc11001100_hook("Pc", $b(() => vc() ? 2 : wc() ? 1 : 0), "var-init"),
    Qc = cc11001100_hook("Qc", (a, b) => {
      J(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    }, "var-init");
  let Rc = cc11001100_hook("Rc", [], "var-init");
  const Sc = cc11001100_hook("Sc", () => {
    const a = cc11001100_hook("a", Rc, "var-init");
    Rc = cc11001100_hook("Rc", [], "assign");
    for (const b of a) try {
      b();
    } catch {}
  }, "var-init");
  var Tc = cc11001100_hook("Tc", a => {
      if ("number" !== typeof a.goog_pvsid) try {
        Object.defineProperty(a, "goog_pvsid", {
          value: cc11001100_hook("value", Math.floor(Math.random() * 2 ** 52), "object-key-init"),
          configurable: cc11001100_hook("configurable", !1, "object-key-init")
        });
      } catch (b) {}
      return Number(a.goog_pvsid) || -1;
    }, "var-init"),
    Vc = cc11001100_hook("Vc", a => {
      var b = cc11001100_hook("b", Uc, "var-init");
      "complete" === b.readyState || "interactive" === b.readyState ? (Rc.push(a), 1 == Rc.length && (window.Promise ? Promise.resolve().then(Sc) : window.setImmediate ? setImmediate(Sc) : setTimeout(Sc, 0))) : b.addEventListener("DOMContentLoaded", a);
    }, "var-init");
  function Dc(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return b.createElement(String(a).toLowerCase());
  }
  ;
  function Wc(a, b, c = null, d = !1, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Xc(a, b, c, d, e);
  }
  function Xc(a, b, c, d, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
    const f = cc11001100_hook("f", Dc("IMG", a.document), "var-init");
    if (c || d) {
      const g = cc11001100_hook("g", h => {
        c && c(h);
        if (d) {
          h = cc11001100_hook("h", a.google_image_requests, "assign");
          const k = cc11001100_hook("k", Aa(h, f), "var-init");
          0 <= k && Array.prototype.splice.call(h, k, 1);
        }
        cc(f, "load", g);
        cc(f, "error", g);
      }, "var-init");
      bc(f, "load", g);
      bc(f, "error", g);
    }
    e && (f.attributionsrc = cc11001100_hook("f.attributionsrc", "", "assign"));
    f.src = cc11001100_hook("f.src", b, "assign");
    a.google_image_requests.push(f);
  }
  var $c = cc11001100_hook("$c", a => {
      let b = cc11001100_hook("b", "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe", "var-init");
      J(a, (c, d) => {
        c && (b += cc11001100_hook("b", `&${d}=${encodeURIComponent(c)}`, "assign"));
      });
      Yc(b);
    }, "var-init"),
    Yc = cc11001100_hook("Yc", a => {
      var b = cc11001100_hook("b", window, "var-init");
      b.fetch ? b.fetch(a, {
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        credentials: cc11001100_hook("credentials", "include", "object-key-init"),
        redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      }) : Wc(b, a, void 0, !1, !1);
    }, "var-init");
  let ad = cc11001100_hook("ad", null, "var-init");
  var Uc = cc11001100_hook("Uc", document, "var-init"),
    L = cc11001100_hook("L", window, "var-init");
  let bd = cc11001100_hook("bd", null, "var-init");
  var cd = cc11001100_hook("cd", (a, b = []) => {
    let c = cc11001100_hook("c", !1, "var-init");
    n.google_logging_queue || (c = cc11001100_hook("c", !0, "assign"), n.google_logging_queue = cc11001100_hook("n.google_logging_queue", [], "assign"));
    n.google_logging_queue.push([a, b]);
    if (a = cc11001100_hook("a", c, "assign")) {
      if (null == bd) {
        bd = cc11001100_hook("bd", !1, "assign");
        try {
          var d = cc11001100_hook("d", Bc(n), "var-init");
          d && -1 !== d.location.hash.indexOf("google_logging") && (bd = cc11001100_hook("bd", !0, "assign"));
          n.localStorage.getItem("google_logging") && (bd = cc11001100_hook("bd", !0, "assign"));
        } catch (e) {}
      }
      a = cc11001100_hook("a", bd, "assign");
    }
    a && (d = cc11001100_hook("d", n.document, "assign"), a = cc11001100_hook("a", new Vb(Wb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), "assign"), a = cc11001100_hook("a", qc(a instanceof Vb && a.constructor === Vb && a.h === Xb ? a.i : "type_error:Const"), "assign"), Cc(d, a));
  }, "var-init");
  function dd(a = n) {
    let b = cc11001100_hook("b", a.context || a.AMP_CONTEXT_DATA, "var-init");
    if (!b) try {
      b = cc11001100_hook("b", a.parent.context || a.parent.AMP_CONTEXT_DATA, "assign");
    } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function ed(a = dd()) {
    return a ? Ac(a.master) ? a.master : null : null;
  }
  ;
  function fd(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 === b.length) return qc(a[0]);
    const c = cc11001100_hook("c", [a[0]], "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return qc(c.join(""));
  }
  ;
  function gd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a[0], "assign");
    const b = cc11001100_hook("b", ic(), "var-init");
    a = cc11001100_hook("a", b ? b.createScript(a) : a, "assign");
    return new kc(a, jc);
  }
  ;
  var hd = cc11001100_hook("hd", a => {
      a = cc11001100_hook("a", ed(dd(a)) || a, "assign");
      a.google_unique_id = cc11001100_hook("a.google_unique_id", (a.google_unique_id || 0) + 1, "assign");
      return a.google_unique_id;
    }, "var-init"),
    id = cc11001100_hook("id", a => {
      a = cc11001100_hook("a", a.google_unique_id, "assign");
      return "number" === typeof a ? a : 0;
    }, "var-init"),
    jd = cc11001100_hook("jd", () => {
      if (!L) return !1;
      try {
        return !(!L.navigator.standalone && !L.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    }, "var-init"),
    kd = cc11001100_hook("kd", a => {
      if (!a) return "";
      a = cc11001100_hook("a", a.toLowerCase(), "assign");
      "ca-" != a.substring(0, 3) && (a = cc11001100_hook("a", "ca-" + a, "assign"));
      return a;
    }, "var-init");
  class ld {
    constructor(a, b) {
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", {}, "assign");
    }
  }
  var md = cc11001100_hook("md", a => !!(a.error && a.meta && a.id), "var-init");
  const nd = cc11001100_hook("nd", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  var od = cc11001100_hook("od", class {
      constructor(a, b) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.i = cc11001100_hook("this.i", b, "assign");
      }
    }, "var-init"),
    pd = cc11001100_hook("pd", class {
      constructor(a, b, c) {
        this.url = cc11001100_hook("this.url", a, "assign");
        this.s = cc11001100_hook("this.s", b, "assign");
        this.Na = cc11001100_hook("this.Na", !!c, "assign");
        this.depth = cc11001100_hook("this.depth", null, "assign");
      }
    }, "var-init");
  function qd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function rd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init");
    J(a, function (g, h) {
      (g = cc11001100_hook("g", sd(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function sd(a, b, c, d, e) {
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
        for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(sd(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(rd(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function td(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 1, "var-init");
    for (const c in a.i) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.j.length - 1;
  }
  function ud(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
      d = cc11001100_hook("d", td(a) - b.length, "var-init");
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
        let l = cc11001100_hook("l", rd(h[k], a.j, ",$"), "var-init");
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
  class vd {
    constructor() {
      this.j = cc11001100_hook("this.j", "&", "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
    }
  }
  ;
  function wd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= b && 1 >= b && (a.h = cc11001100_hook("a.h", b, "assign"));
  }
  function xd(a, b, c, d = !1, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if ((d ? a.h : Math.random()) < (e || .01)) try {
      let f;
      c instanceof vd ? f = cc11001100_hook("f", c, "assign") : (f = cc11001100_hook("f", new vd(), "assign"), J(c, (h, k) => {
        var l = cc11001100_hook("l", f, "var-init");
        const m = cc11001100_hook("m", l.l++, "var-init");
        h = cc11001100_hook("h", qd(k, h), "assign");
        l.h.push(m);
        l.i[m] = cc11001100_hook("l.i[m]", h, "assign");
      }));
      const g = cc11001100_hook("g", ud(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && Wc(n, g);
    } catch (f) {}
  }
  class yd {
    constructor() {
      this.h = cc11001100_hook("this.h", Math.random(), "assign");
    }
  }
  ;
  let zd = cc11001100_hook("zd", null, "var-init");
  function Ad() {
    if (null === zd) {
      zd = cc11001100_hook("zd", "", "assign");
      try {
        let a = cc11001100_hook("a", "", "var-init");
        try {
          a = cc11001100_hook("a", n.top.location.hash, "assign");
        } catch (b) {
          a = cc11001100_hook("a", n.location.hash, "assign");
        }
        if (a) {
          const b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "var-init");
          zd = cc11001100_hook("zd", b ? b[1] : "", "assign");
        }
      } catch (a) {}
    }
    return zd;
  }
  ;
  function Bd() {
    const a = cc11001100_hook("a", n.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function Cd() {
    const a = cc11001100_hook("a", n.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class Dd {
    constructor(a, b) {
      var c = cc11001100_hook("c", Cd() || Bd(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const Ed = cc11001100_hook("Ed", n.performance, "var-init"),
    Fd = cc11001100_hook("Fd", !!(Ed && Ed.mark && Ed.measure && Ed.clearMarks), "var-init"),
    Gd = cc11001100_hook("Gd", $b(() => {
      var a;
      if (a = cc11001100_hook("a", Fd, "assign")) a = cc11001100_hook("a", Ad(), "assign"), a = cc11001100_hook("a", !!a.indexOf && 0 <= a.indexOf("1337"), "assign");
      return a;
    }), "var-init");
  function Hd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && Ed && Gd() && (Ed.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Ed.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function Id(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.h = cc11001100_hook("a.h", !1, "assign");
    a.i != a.j.google_js_reporting_queue && (Gd() && Ba(a.i, Hd), a.i.length = cc11001100_hook("a.i.length", 0, "assign"));
  }
  class Jd {
    constructor(a) {
      this.i = cc11001100_hook("this.i", [], "assign");
      this.j = cc11001100_hook("this.j", a || n, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.i = cc11001100_hook("this.i", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.h = cc11001100_hook("this.h", Gd() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.h) return null;
      a = cc11001100_hook("a", new Dd(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      Ed && Gd() && Ed.mark(b);
      return a;
    }
    end(a) {
      if (this.h && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Cd() || Bd()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        Ed && Gd() && Ed.mark(b);
        !this.h || 2048 < this.i.length || this.i.push(a);
      }
    }
  }
  ;
  function Kd(a) {
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
  class Ld {
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
          Hd(e), b = cc11001100_hook("b", this.m(a, new ld(f, {
            message: cc11001100_hook("message", Kd(f), "object-key-init")
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
        const Ea = cc11001100_hook("Ea", new vd(), "var-init");
        var g = cc11001100_hook("g", Ea, "var-init");
        g.h.push(1);
        g.i[1] = cc11001100_hook("g.i[1]", qd("context", a), "assign");
        md(b) || (b = cc11001100_hook("b", new ld(b, {
          message: cc11001100_hook("message", Kd(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          g = cc11001100_hook("g", Ea, "assign");
          var h = cc11001100_hook("h", b.msg.substring(0, 512), "var-init");
          g.h.push(2);
          g.i[2] = cc11001100_hook("g.i[2]", qd("msg", h), "assign");
        }
        var k = cc11001100_hook("k", b.meta || {}, "var-init");
        b = cc11001100_hook("b", k, "assign");
        if (this.h) try {
          this.h(b);
        } catch (Pa) {}
        if (d) try {
          d(b);
        } catch (Pa) {}
        d = cc11001100_hook("d", Ea, "assign");
        k = cc11001100_hook("k", [k], "assign");
        d.h.push(3);
        d.i[3] = cc11001100_hook("d.i[3]", k, "assign");
        d = cc11001100_hook("d", n, "assign");
        k = cc11001100_hook("k", [], "assign");
        b = cc11001100_hook("b", null, "assign");
        do {
          var l = cc11001100_hook("l", d, "var-init");
          if (Ac(l)) {
            var m = cc11001100_hook("m", l.location.href, "var-init");
            b = cc11001100_hook("b", l.document && l.document.referrer || null, "assign");
          } else m = cc11001100_hook("m", b, "assign"), b = cc11001100_hook("b", null, "assign");
          k.push(new pd(m || "", l));
          try {
            d = cc11001100_hook("d", l.parent, "assign");
          } catch (Pa) {
            d = cc11001100_hook("d", null, "assign");
          }
        } while (d && l != d);
        for (let Pa = cc11001100_hook("Pa", 0, "var-init"), af = cc11001100_hook("af", k.length - 1, "var-init"); Pa <= af; ++Pa) k[Pa].depth = cc11001100_hook("k[Pa].depth", af - Pa, "assign");
        l = cc11001100_hook("l", n, "assign");
        if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1) for (m = cc11001100_hook("m", 1, "assign"); m < k.length; ++m) {
          var u = cc11001100_hook("u", k[m], "var-init");
          u.url || (u.url = cc11001100_hook("u.url", l.location.ancestorOrigins[m - 1] || "", "assign"), u.Na = cc11001100_hook("u.Na", !0, "assign"));
        }
        var v = cc11001100_hook("v", k, "var-init");
        let Zb = cc11001100_hook("Zb", new pd(n.location.href, n, !1), "var-init");
        l = cc11001100_hook("l", null, "assign");
        const Zc = cc11001100_hook("Zc", v.length - 1, "var-init");
        for (u = cc11001100_hook("u", Zc, "assign"); 0 <= u; --u) {
          var w = cc11001100_hook("w", v[u], "var-init");
          !l && nd.test(w.url) && (l = cc11001100_hook("l", w, "assign"));
          if (w.url && !w.Na) {
            Zb = cc11001100_hook("Zb", w, "assign");
            break;
          }
        }
        w = cc11001100_hook("w", null, "assign");
        const Ji = cc11001100_hook("Ji", v.length && v[Zc].url, "var-init");
        0 != Zb.depth && Ji && (w = cc11001100_hook("w", v[Zc], "assign"));
        f = cc11001100_hook("f", new od(Zb, w), "assign");
        if (f.i) {
          v = cc11001100_hook("v", Ea, "assign");
          var y = cc11001100_hook("y", f.i.url || "", "var-init");
          v.h.push(4);
          v.i[4] = cc11001100_hook("v.i[4]", qd("top", y), "assign");
        }
        var D = cc11001100_hook("D", {
          url: cc11001100_hook("url", f.h.url || "", "object-key-init")
        }, "var-init");
        if (f.h.url) {
          var va = cc11001100_hook("va", f.h.url.match(xc), "var-init"),
            R = cc11001100_hook("R", va[1], "var-init"),
            wa = cc11001100_hook("wa", va[3], "var-init"),
            ma = cc11001100_hook("ma", va[4], "var-init");
          y = cc11001100_hook("y", "", "assign");
          R && (y += cc11001100_hook("y", R + ":", "assign"));
          wa && (y += cc11001100_hook("y", "//", "assign"), y += cc11001100_hook("y", wa, "assign"), ma && (y += cc11001100_hook("y", ":" + ma, "assign")));
          var bf = cc11001100_hook("bf", y, "var-init");
        } else bf = cc11001100_hook("bf", "", "assign");
        R = cc11001100_hook("R", Ea, "assign");
        D = cc11001100_hook("D", [D, {
          url: cc11001100_hook("url", bf, "object-key-init")
        }], "assign");
        R.h.push(5);
        R.i[5] = cc11001100_hook("R.i[5]", D, "assign");
        xd(this.A, e, Ea, this.j, c);
      } catch (Ea) {
        try {
          xd(this.A, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", Kd(Ea), "object-key-init"),
            url: cc11001100_hook("url", f && f.h.url, "object-key-init")
          }, this.j, c);
        } catch (Zb) {}
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
  var Md = cc11001100_hook("Md", a => "string" === typeof a, "var-init"),
    Nd = cc11001100_hook("Nd", a => void 0 === a, "var-init");
  var Pd = cc11001100_hook("Pd", class extends I {
      constructor(a) {
        super(a, -1, Od);
      }
    }, "var-init"),
    Od = cc11001100_hook("Od", [2, 8], "var-init"),
    Qd = cc11001100_hook("Qd", [3, 4, 5], "var-init"),
    Rd = cc11001100_hook("Rd", [6, 7], "var-init");
  function Sd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a ? !a : a;
  }
  function Td(a, b) {
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
  function Ud(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", C(a, Pd, 2), "var-init");
    if (!c.length) return Vd(a, b);
    a = cc11001100_hook("a", H(a, 1), "assign");
    if (1 === a) return Sd(Ud(c[0], b));
    c = cc11001100_hook("c", Da(c, d => () => Ud(d, b)), "assign");
    switch (a) {
      case 2:
        return Td(c, !1);
      case 3:
        return Td(c, !0);
    }
  }
  function Vd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", rb(a, Qd), "var-init");
    a: {
      switch (c) {
        case 3:
          var d = cc11001100_hook("d", H(a, sb(a, Qd, 3)), "var-init");
          break a;
        case 4:
          d = cc11001100_hook("d", H(a, sb(a, Qd, 4)), "assign");
          break a;
        case 5:
          d = cc11001100_hook("d", H(a, sb(a, Qd, 5)), "assign");
          break a;
      }
      d = cc11001100_hook("d", void 0, "assign");
    }
    if (d && (b = cc11001100_hook("b", (b = cc11001100_hook("b", b[c], "assign")) && b[d], "assign"))) {
      try {
        var e = cc11001100_hook("e", b(...ob(a, 8)), "var-init");
      } catch (f) {
        return;
      }
      b = cc11001100_hook("b", H(a, 1), "assign");
      if (4 === b) return !!e;
      if (5 === b) return null != e;
      if (12 === b) a = cc11001100_hook("a", F(a, sb(a, Rd, 7)), "assign");else a: {
        switch (c) {
          case 4:
            a = cc11001100_hook("a", zb(a, sb(a, Rd, 6)), "assign");
            break a;
          case 5:
            a = cc11001100_hook("a", F(a, sb(a, Rd, 7)), "assign");
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
            return Md(a) && Md(e) && new RegExp(a).test(e);
          case 10:
            return null != e && -1 === ra(String(e), a);
          case 11:
            return null != e && 1 === ra(String(e), a);
        }
      }
    }
  }
  function Wd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return !a || !(!b || !Ud(a, b));
  }
  ;
  var Yd = cc11001100_hook("Yd", class extends I {
      constructor(a) {
        super(a, -1, Xd);
      }
    }, "var-init"),
    Xd = cc11001100_hook("Xd", [4], "var-init");
  var Zd = cc11001100_hook("Zd", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var ae = cc11001100_hook("ae", class extends I {
      constructor(a) {
        super(a, -1, $d);
      }
    }, "var-init"),
    be = cc11001100_hook("be", Rb(ae), "var-init"),
    $d = cc11001100_hook("$d", [5], "var-init"),
    ce = cc11001100_hook("ce", [1, 2, 3, 6, 7], "var-init");
  var ee = cc11001100_hook("ee", class extends I {
      constructor() {
        super(void 0, -1, de);
      }
    }, "var-init"),
    de = cc11001100_hook("de", [2], "var-init");
  function fe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  var ge = cc11001100_hook("ge", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  function he(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 1, b, 0);
  }
  function ie(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 2, b, 0);
  }
  var je = cc11001100_hook("je", class extends I {
    constructor() {
      super();
    }
    getWidth() {
      return E(t(this, 1), 0);
    }
    getHeight() {
      return E(t(this, 2), 0);
    }
  }, "var-init");
  function ke(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return wb(a, 1, b);
  }
  function le(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return wb(a, 2, b);
  }
  function me(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    wb(a, 3, b);
  }
  var ne = cc11001100_hook("ne", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var oe = cc11001100_hook("oe", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  function pe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return xb(a, 4, qe, b);
  }
  var re = cc11001100_hook("re", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    qe = cc11001100_hook("qe", [4, 5, 6, 8, 9, 10], "var-init");
  function se(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 1, b, 0);
  }
  function te(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 2, b, 0);
  }
  var ue = cc11001100_hook("ue", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var ve = cc11001100_hook("ve", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    we = cc11001100_hook("we", [1, 2], "var-init");
  function xe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return wb(a, 1, b);
  }
  function ye(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return yb(a, 2, b);
  }
  function ze(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return pb(a, 4, b);
  }
  function Ae(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return yb(a, 5, b);
  }
  function Be(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return A(a, 6, b, 0);
  }
  var De = cc11001100_hook("De", class extends I {
      constructor() {
        super(void 0, -1, Ce);
      }
    }, "var-init"),
    Ce = cc11001100_hook("Ce", [2, 4, 5], "var-init");
  var Fe = cc11001100_hook("Fe", class extends I {
      constructor() {
        super(void 0, -1, Ee);
      }
    }, "var-init"),
    Ee = cc11001100_hook("Ee", [5], "var-init"),
    Ge = cc11001100_hook("Ge", [1, 2, 3, 4], "var-init");
  var Ie = cc11001100_hook("Ie", class extends I {
      constructor() {
        super(void 0, -1, He);
      }
    }, "var-init"),
    He = cc11001100_hook("He", [2, 3], "var-init");
  function Je(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return xb(a, 4, Ke, b);
  }
  var Le = cc11001100_hook("Le", class extends I {
      constructor() {
        super();
      }
      getTagSessionCorrelator() {
        return E(t(this, 2), 0);
      }
    }, "var-init"),
    Ke = cc11001100_hook("Ke", [4, 5, 7], "var-init");
  function Me(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    Ne(a, ...b.map(c => ({
      Ua: cc11001100_hook("Ua", 4, "object-key-init"),
      message: cc11001100_hook("message", c, "object-key-init")
    })));
  }
  function Oe(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    Ne(a, ...b.map(c => ({
      Ua: cc11001100_hook("Ua", 7, "object-key-init"),
      message: cc11001100_hook("message", c, "object-key-init")
    })));
  }
  ;
  function Pe(a) {
    cc11001100_hook("a", a, "function-parameter");
    return JSON.stringify([a.map(b => [{
      [b.Ua]: cc11001100_hook(b.Ua, b.message.toJSON(), "object-key-init")
    }])]);
  }
  ;
  var Qe = cc11001100_hook("Qe", (a, b) => {
    globalThis.fetch(a, {
      method: cc11001100_hook("method", "POST", "object-key-init"),
      body: cc11001100_hook("body", b, "object-key-init"),
      keepalive: cc11001100_hook("keepalive", 65536 > b.length, "object-key-init"),
      credentials: cc11001100_hook("credentials", "omit", "object-key-init"),
      mode: cc11001100_hook("mode", "no-cors", "object-key-init"),
      redirect: cc11001100_hook("redirect", "follow", "object-key-init")
    }).catch(() => {});
  }, "var-init");
  function Re() {
    this.A = cc11001100_hook("this.A", this.A, "assign");
    this.j = cc11001100_hook("this.j", this.j, "assign");
  }
  Re.prototype.A = cc11001100_hook("Re.prototype.A", !1, "assign");
  function Se(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A || (a.A = cc11001100_hook("a.A", !0, "assign"), a.h());
  }
  function Te(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.A ? b() : (a.j || (a.j = cc11001100_hook("a.j", [], "assign")), a.j.push(b));
  }
  Re.prototype.h = cc11001100_hook("Re.prototype.h", function () {
    if (this.j) for (; this.j.length;) this.j.shift()();
  }, "assign");
  function Ue(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    bc(b, c, d);
    Te(a, () => cc(b, c, d));
  }
  function Ve(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    1 !== a.state && (a.state = cc11001100_hook("a.state", 1, "assign"), a.callback && a.callback(b));
  }
  function We(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.s.document.visibilityState ? Ue(a, a.s.document, "visibilitychange", b => {
      "hidden" === a.s.document.visibilityState && Ve(a, b);
      "visible" === a.s.document.visibilityState && (a.state = cc11001100_hook("a.state", 0, "assign"));
    }) : "onpagehide" in a.s ? (Ue(a, a.s, "pagehide", b => {
      Ve(a, b);
    }), Ue(a, a.s, "pageshow", () => {
      a.state = cc11001100_hook("a.state", 0, "assign");
    })) : Ue(a, a.s, "beforeunload", b => {
      Ve(a, b);
    });
  }
  function Xe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.callback || We(a);
    a.callback = cc11001100_hook("a.callback", b, "assign");
  }
  var Ye = cc11001100_hook("Ye", class extends Re {
    constructor(a) {
      super();
      this.s = cc11001100_hook("this.s", a, "assign");
      this.state = cc11001100_hook("this.state", 0, "assign");
      this.callback = cc11001100_hook("this.callback", null, "assign");
    }
  }, "var-init");
  function Ne(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    a.A && 65536 <= Pe(a.h.concat(b)).length && Ze(a);
    a.h.push(...b);
    a.h.length >= a.m && Ze(a);
    a.h.length && null === a.i && (a.i = cc11001100_hook("a.i", setTimeout(() => {
      Ze(a);
    }, a.B), "assign"));
  }
  function $e(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j || (a.j = cc11001100_hook("a.j", new Ye(b), "assign"), Xe(a.j, () => {
      for (const e of a.l) e();
      c();
    }));
    d && 1 !== a.j.state && a.l.push(d);
  }
  function Ze(a) {
    cc11001100_hook("a", a, "function-parameter");
    null !== a.i && (clearTimeout(a.i), a.i = cc11001100_hook("a.i", null, "assign"));
    if (a.h.length) {
      var b = cc11001100_hook("b", Pe(a.h), "var-init");
      a.v("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.h = cc11001100_hook("a.h", [], "assign");
    }
  }
  function cf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    $e(a, b, () => {
      Ze(a);
    }, c);
  }
  var df = cc11001100_hook("df", class {
      constructor(a, b, c) {
        this.v = cc11001100_hook("this.v", Qe, "assign");
        this.B = cc11001100_hook("this.B", a, "assign");
        this.m = cc11001100_hook("this.m", b, "assign");
        this.A = cc11001100_hook("this.A", c, "assign");
        this.l = cc11001100_hook("this.l", [], "assign");
        this.h = cc11001100_hook("this.h", [], "assign");
        this.i = cc11001100_hook("this.i", null, "assign");
      }
    }, "var-init"),
    ef = cc11001100_hook("ef", class extends df {
      constructor(a = 1E3, b = 100, c = !1) {
        super(a, b, c && !0);
      }
    }, "var-init");
  function ff(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", A(b, 1, Date.now(), 0), "assign");
    var c = cc11001100_hook("c", Tc(window), "var-init");
    b = cc11001100_hook("b", A(b, 2, c, 0), "assign");
    return A(b, 6, a.m, 0);
  }
  function gf(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (a.j) {
      var g = cc11001100_hook("g", te(se(new ue(), b), c), "var-init");
      b = cc11001100_hook("b", Be(ye(xe(Ae(ze(new De(), d), e), g), a.h.slice()), f), "assign");
      b = cc11001100_hook("b", Je(new Le(), b), "assign");
      Me(a.i, ff(a, b));
      if (1 === f || 3 === f || 4 === f && !a.h.some(h => H(h, 1) === H(g, 1) && H(h, 2) === c)) a.h.push(g), 100 < a.h.length && a.h.shift();
    }
  }
  function hf(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (a.j && a.l) {
      var e = cc11001100_hook("e", new Ie(), "var-init");
      b = cc11001100_hook("b", yb(e, 2, b), "assign");
      c = cc11001100_hook("c", yb(b, 3, c), "assign");
      d && A(c, 1, d, 0);
      d = cc11001100_hook("d", new Le(), "assign");
      d = cc11001100_hook("d", xb(d, 7, Ke, c), "assign");
      Me(a.i, ff(a, d));
    }
  }
  var jf = cc11001100_hook("jf", class {
    constructor(a, b, c, d = new ef(b)) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
      this.i = cc11001100_hook("this.i", d, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
      this.j = cc11001100_hook("this.j", 0 < a && Ic() < 1 / a, "assign");
    }
  }, "var-init");
  var M = cc11001100_hook("M", a => {
    var b = cc11001100_hook("b", "ua", "var-init");
    if (a.ua && a.hasOwnProperty(b)) return a.ua;
    b = cc11001100_hook("b", new a(), "assign");
    return a.ua = cc11001100_hook("a.ua", b, "assign");
  }, "var-init");
  var kf = cc11001100_hook("kf", class {
    constructor() {
      this.G = cc11001100_hook("this.G", {
        [3]: {},
        [4]: {},
        [5]: {}
      }, "assign");
    }
  }, "var-init");
  var lf = cc11001100_hook("lf", /^true$/.test("false"), "var-init");
  function mf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    switch (b) {
      case 1:
        return H(a, sb(a, ce, 1));
      case 2:
        return H(a, sb(a, ce, 2));
      case 3:
        return H(a, sb(a, ce, 3));
      case 6:
        return H(a, sb(a, ce, 6));
      default:
        return null;
    }
  }
  function nf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return null;
    switch (b) {
      case 1:
        return G(a, 1);
      case 7:
        return F(a, 3);
      case 2:
        return zb(a, 2);
      case 3:
        return F(a, 3);
      case 6:
        return ob(a, 4);
      default:
        return null;
    }
  }
  const of = cc11001100_hook("of", $b(() => {
    if (!lf) return {};
    try {
      const a = cc11001100_hook("a", window.sessionStorage && window.sessionStorage.getItem("GGDFSSK"), "var-init");
      if (a) return JSON.parse(a);
    } catch {}
    return {};
  }), "var-init");
  function pf(a, b, c, d = 0) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    M(qf).j[d] = cc11001100_hook("M(qf).j[d]", M(qf).j[d]?.add(b) ?? new Set().add(b), "assign");
    const e = cc11001100_hook("e", of(), "var-init");
    if (null != e[b]) return e[b];
    b = cc11001100_hook("b", rf(d)[b], "assign");
    if (!b) return c;
    b = cc11001100_hook("b", be(JSON.stringify(b)), "assign");
    b = cc11001100_hook("b", sf(b), "assign");
    a = cc11001100_hook("a", nf(b, a), "assign");
    return null != a ? a : c;
  }
  function sf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", M(kf).G, "var-init");
    if (b) {
      const c = cc11001100_hook("c", Ha(C(a, Zd, 5), d => Wd(B(d, Pd, 1), b)), "var-init");
      if (c) return B(c, Yd, 2) ?? null;
    }
    return B(a, Yd, 4) ?? null;
  }
  class qf {
    constructor() {
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.h = cc11001100_hook("this.h", new Map(), "assign");
    }
  }
  function tf(a, b = !1, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return !!pf(1, a, b, c);
  }
  function uf(a, b = 0, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Number(pf(2, a, b, c)), "assign");
    return isNaN(a) ? b : a;
  }
  function vf(a, b = "", c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", pf(3, a, b, c), "assign");
    return "string" === typeof a ? a : b;
  }
  function wf(a, b = [], c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", pf(6, a, b, c), "assign");
    return Array.isArray(a) ? a : b;
  }
  function rf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return M(qf).i[a] || (M(qf).i[a] = cc11001100_hook("M(qf).i[a]", {}, "assign"));
  }
  function xf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", rf(b), "var-init");
    J(a, (d, e) => c[e] = cc11001100_hook("c[e]", d, "assign"));
  }
  function yf(a, b, c, d, e = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init"),
      g = cc11001100_hook("g", [], "var-init");
    Ba(b, h => {
      const k = cc11001100_hook("k", rf(h), "var-init");
      Ba(a, l => {
        var m = cc11001100_hook("m", rb(l, ce), "var-init");
        const u = cc11001100_hook("u", mf(l, m), "var-init");
        if (u) {
          var v = cc11001100_hook("v", M(qf).h.get(h)?.get(u)?.slice(0) ?? [], "var-init");
          a: {
            const w = cc11001100_hook("w", new Fe(), "var-init");
            switch (m) {
              case 1:
                qb(w, 1, Ge, u);
                break;
              case 2:
                qb(w, 2, Ge, u);
                break;
              case 3:
                qb(w, 3, Ge, u);
                break;
              case 6:
                qb(w, 4, Ge, u);
                break;
              default:
                m = cc11001100_hook("m", void 0, "assign");
                break a;
            }
            pb(w, 5, v);
            m = cc11001100_hook("m", w, "assign");
          }
          if (v = cc11001100_hook("v", m, "assign")) v = cc11001100_hook("v", !!M(qf).j[h]?.has(u), "assign");
          v && f.push(m);
          if (v = cc11001100_hook("v", m, "assign")) v = cc11001100_hook("v", !!M(qf).h.get(h)?.has(u), "assign");
          v && g.push(m);
          e || (m = cc11001100_hook("m", M(qf), "assign"), m.h.has(h) || m.h.set(h, new Map()), m.h.get(h).has(u) || m.h.get(h).set(u, []), d && m.h.get(h).get(u).push(d));
          k[u] = cc11001100_hook("k[u]", l.toJSON(), "assign");
        }
      });
    });
    (f.length || g.length) && hf(c, f, g, d ?? void 0);
  }
  function zf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", rf(b), "var-init");
    Ba(a, d => {
      var e = cc11001100_hook("e", be(JSON.stringify(d)), "var-init");
      const f = cc11001100_hook("f", rb(e, ce), "var-init");
      (e = cc11001100_hook("e", mf(e, f), "assign")) && (c[e] || (c[e] = cc11001100_hook("c[e]", d, "assign")));
    });
  }
  function Af() {
    return Da(Object.keys(M(qf).i), a => Number(a));
  }
  function Bf(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ia(M(qf).l, a) || xf(rf(4), a);
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
  function Cf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b[a] || c;
  }
  function Df(a) {
    cc11001100_hook("a", a, "function-parameter");
    N(5, tf, a);
    N(6, uf, a);
    N(7, vf, a);
    N(8, wf, a);
    N(13, zf, a);
    N(15, Bf, a);
  }
  function Ef(a) {
    cc11001100_hook("a", a, "function-parameter");
    N(4, b => {
      M(kf).G = cc11001100_hook("M(kf).G", b, "assign");
    }, a);
    N(9, (b, c) => {
      var d = cc11001100_hook("d", M(kf), "var-init");
      null == d.G[3][b] && (d.G[3][b] = cc11001100_hook("d.G[3][b]", c, "assign"));
    }, a);
    N(10, (b, c) => {
      var d = cc11001100_hook("d", M(kf), "var-init");
      null == d.G[4][b] && (d.G[4][b] = cc11001100_hook("d.G[4][b]", c, "assign"));
    }, a);
    N(11, (b, c) => {
      var d = cc11001100_hook("d", M(kf), "var-init");
      null == d.G[5][b] && (d.G[5][b] = cc11001100_hook("d.G[5][b]", c, "assign"));
    }, a);
    N(14, b => {
      var c = cc11001100_hook("c", M(kf), "var-init");
      for (const d of [3, 4, 5]) Object.assign(c.G[d], b[d]);
    }, a);
  }
  function Ff(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }
  ;
  function Gf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.j = cc11001100_hook("a.j", Cf(1, b, () => {}), "assign");
    a.l = cc11001100_hook("a.l", d => Cf(2, b, () => [])(d, c), "assign");
    a.i = cc11001100_hook("a.i", () => Cf(3, b, () => [])(c), "assign");
    a.h = cc11001100_hook("a.h", d => {
      Cf(16, b, () => {})(d, c);
    }, "assign");
  }
  class Hf {
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
  let If, Jf;
  const Kf = cc11001100_hook("Kf", new Jd(window), "var-init");
  (a => {
    If = cc11001100_hook("If", a ?? new yd(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    wd(If, window.google_srt);
    Jf = cc11001100_hook("Jf", new Ld(If, Kf), "assign");
    Jf.wa(() => {});
    Jf.l(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || Id(Kf) : Kf.h && bc(window, "load", () => {
      window.google_measure_js_timing || Id(Kf);
    });
  })();
  var Lf = cc11001100_hook("Lf", {
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
  var Mf = cc11001100_hook("Mf", {
    Mb: cc11001100_hook("Mb", 0, "object-key-init"),
    Nb: cc11001100_hook("Nb", 1, "object-key-init"),
    Lb: cc11001100_hook("Lb", 2, "object-key-init")
  }, "var-init");
  function Nf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 != a.h) throw Error("Already resolved/rejected.");
  }
  var Qf = cc11001100_hook("Qf", class {
    constructor() {
      this.i = cc11001100_hook("this.i", new Of(this), "assign");
      this.h = cc11001100_hook("this.h", 0, "assign");
    }
    resolve(a) {
      Nf(this);
      this.h = cc11001100_hook("this.h", 1, "assign");
      this.l = cc11001100_hook("this.l", a, "assign");
      Pf(this.i);
    }
  }, "var-init");
  function Pf(a) {
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
  var Of = cc11001100_hook("Of", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
    }
    then(a, b) {
      if (this.i) throw Error("Then functions already set.");
      this.i = cc11001100_hook("this.i", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      Pf(this);
    }
  }, "var-init");
  const Rf = cc11001100_hook("Rf", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a.slice(0), "assign");
    }
    forEach(a) {
      this.h.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new Rf(Ca(this.h, a));
    }
    apply(a) {
      return new Rf(a(this.h.slice(0)));
    }
    sort(a) {
      return new Rf(this.h.slice(0).sort(a));
    }
    get(a) {
      return this.h[a];
    }
    add(a) {
      const b = cc11001100_hook("b", this.h.slice(0), "var-init");
      b.push(a);
      return new Rf(b);
    }
  }, "var-init");
  function Sf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", a.length, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
  }
  ;
  const Uf = cc11001100_hook("Uf", class {
    constructor() {
      this.h = cc11001100_hook("this.h", {}, "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
    }
    set(a, b) {
      const c = cc11001100_hook("c", Tf(a), "var-init");
      this.h[c] = cc11001100_hook("this.h[c]", b, "assign");
      this.i[c] = cc11001100_hook("this.i[c]", a, "assign");
    }
    get(a, b) {
      a = cc11001100_hook("a", Tf(a), "assign");
      return void 0 !== this.h[a] ? this.h[a] : b;
    }
    clear() {
      this.h = cc11001100_hook("this.h", {}, "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
    }
  }, "var-init");
  function Tf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Object ? String(ea(a)) : a + "";
  }
  ;
  function Vf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Wf({
      value: cc11001100_hook("value", a, "object-key-init")
    }, null);
  }
  function Xf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Wf(null, a);
  }
  function Yf(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      return Vf(a());
    } catch (b) {
      return Xf(b);
    }
  }
  function Zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a.h ? a.h.value : null;
  }
  function $f(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.h && b(a.h.value);
    return a;
  }
  function ag(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    null != a.h || b(a.i);
    return a;
  }
  class Wf {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
    }
    map(a) {
      return null != this.h ? (a = cc11001100_hook("a", a(this.h.value), "assign"), a instanceof Wf ? a : Vf(a)) : this;
    }
  }
  ;
  const bg = cc11001100_hook("bg", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", new Uf(), "assign");
      if (a) for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.h.set(a, !0);
    }
    contains(a) {
      return void 0 !== this.h.h[Tf(a)];
    }
  }, "var-init");
  class cg {
    constructor() {
      this.h = cc11001100_hook("this.h", new Uf(), "assign");
    }
    set(a, b) {
      let c = cc11001100_hook("c", this.h.get(a), "var-init");
      c || (c = cc11001100_hook("c", new bg(), "assign"), this.h.set(a, c));
      c.add(b);
    }
  }
  ;
  var O = cc11001100_hook("O", class extends I {
      constructor(a) {
        super(a, -1, dg);
      }
      getId() {
        return t(this, 3);
      }
    }, "var-init"),
    dg = cc11001100_hook("dg", [4], "var-init");
  class eg {
    constructor({
      Wa: a,
      Ob: b,
      Wb: c,
      qb: d
    }) {
      this.h = cc11001100_hook("this.h", b, "assign");
      this.l = cc11001100_hook("this.l", new Rf(a || []), "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
      this.i = cc11001100_hook("this.i", c, "assign");
    }
  }
  ;
  const gg = cc11001100_hook("gg", a => {
      const b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", a.l, "var-init");
      c && c.h.length && b.push({
        aa: cc11001100_hook("aa", "a", "object-key-init"),
        ga: cc11001100_hook("ga", fg(c), "object-key-init")
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
    fg = cc11001100_hook("fg", a => {
      a = cc11001100_hook("a", a.h.slice(0).map(hg), "assign");
      a = cc11001100_hook("a", JSON.stringify(a), "assign");
      return Jc(a);
    }, "var-init"),
    hg = cc11001100_hook("hg", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      null != t(a, 7) && (b.q = cc11001100_hook("b.q", t(a, 7), "assign"));
      null != t(a, 2) && (b.o = cc11001100_hook("b.o", t(a, 2), "assign"));
      null != t(a, 5) && (b.p = cc11001100_hook("b.p", t(a, 5), "assign"));
      return b;
    }, "var-init");
  var ig = cc11001100_hook("ig", class extends I {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return x(this, 1, a);
    }
  }, "var-init");
  function jg(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [].slice.call(arguments).filter(Yb(e => null === e)), "var-init");
    if (!b.length) return null;
    let c = cc11001100_hook("c", [], "var-init"),
      d = cc11001100_hook("d", {}, "var-init");
    b.forEach(e => {
      c = cc11001100_hook("c", c.concat(e.La || []), "assign");
      d = cc11001100_hook("d", Object.assign(d, e.Qa), "assign");
    });
    return new kg(c, d);
  }
  function lg(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a) {
      case 1:
        return new kg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "mc", "object-key-init")
        });
      case 2:
        return new kg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "h", "object-key-init")
        });
      case 3:
        return new kg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "f", "object-key-init")
        });
      case 4:
        return new kg(null, {
          google_ad_semantic_area: cc11001100_hook("google_ad_semantic_area", "s", "object-key-init")
        });
      default:
        return null;
    }
  }
  function mg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a) var b = cc11001100_hook("b", null, "var-init");else {
      var c = cc11001100_hook("c", gg(a), "var-init");
      a = cc11001100_hook("a", [], "assign");
      for (b of c) c = cc11001100_hook("c", String(b.ga), "assign"), a.push(b.aa + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
      b = cc11001100_hook("b", new kg(null, {
        google_placement_id: cc11001100_hook("google_placement_id", a.join("~"), "object-key-init")
      }), "assign");
    }
    return b;
  }
  class kg {
    constructor(a, b) {
      this.La = cc11001100_hook("this.La", a, "assign");
      this.Qa = cc11001100_hook("this.Qa", b, "assign");
    }
  }
  ;
  const ng = cc11001100_hook("ng", new kg(["google-auto-placed"], {
    google_reactive_ad_format: cc11001100_hook("google_reactive_ad_format", 40, "object-key-init"),
    google_tag_origin: cc11001100_hook("google_tag_origin", "qs", "object-key-init")
  }), "var-init");
  var og = cc11001100_hook("og", {
    overlays: cc11001100_hook("overlays", 1, "object-key-init"),
    interstitials: cc11001100_hook("interstitials", 2, "object-key-init"),
    vignettes: cc11001100_hook("vignettes", 2, "object-key-init"),
    inserts: cc11001100_hook("inserts", 3, "object-key-init"),
    immersives: cc11001100_hook("immersives", 4, "object-key-init"),
    list_view: cc11001100_hook("list_view", 5, "object-key-init"),
    full_page: cc11001100_hook("full_page", 6, "object-key-init"),
    side_rails: cc11001100_hook("side_rails", 7, "object-key-init")
  }, "var-init");
  function pg(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = cc11001100_hook("a.google_reactive_ads_global_state.sideRailProcessedFixedElements", new Set(), "assign")), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = cc11001100_hook("a.google_reactive_ads_global_state.sideRailAvailableSpace", new Map(), "assign"))) : a.google_reactive_ads_global_state = cc11001100_hook("a.google_reactive_ads_global_state", new qg(), "assign");
    return a.google_reactive_ads_global_state;
  }
  class qg {
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
      this.floatingAdsStacking = cc11001100_hook("this.floatingAdsStacking", new rg(), "assign");
      this.sideRailProcessedFixedElements = cc11001100_hook("this.sideRailProcessedFixedElements", new Set(), "assign");
      this.sideRailAvailableSpace = cc11001100_hook("this.sideRailAvailableSpace", new Map(), "assign");
    }
  }
  var rg = cc11001100_hook("rg", class {
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
  var sg = cc11001100_hook("sg", a => {
      a = cc11001100_hook("a", a.getBoundingClientRect(), "assign");
      return 0 < a.width && 0 < a.height;
    }, "var-init"),
    tg = cc11001100_hook("tg", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      a.forEach(c => b = cc11001100_hook("b", Math.max(b, c.getBoundingClientRect().width), "assign"));
      return c => c.getBoundingClientRect().width > .5 * b;
    }, "var-init"),
    ug = cc11001100_hook("ug", a => {
      const b = cc11001100_hook("b", P(a).clientHeight || 0, "var-init");
      return c => c.getBoundingClientRect().height >= .75 * b;
    }, "var-init"),
    vg = cc11001100_hook("vg", (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top, "var-init");
  var wg = cc11001100_hook("wg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var xg = cc11001100_hook("xg", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var zg = cc11001100_hook("zg", class extends I {
      constructor() {
        super(void 0, -1, yg);
      }
    }, "var-init"),
    yg = cc11001100_hook("yg", [1], "var-init");
  var Ag = cc11001100_hook("Ag", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return G(this, 2);
    }
  }, "var-init");
  var Bg = cc11001100_hook("Bg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Cg = cc11001100_hook("Cg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Eg = cc11001100_hook("Eg", class extends I {
      constructor(a) {
        super(a, -1, Dg);
      }
      i() {
        return C(this, Cg, 1);
      }
    }, "var-init"),
    Dg = cc11001100_hook("Dg", [1], "var-init");
  var Q = cc11001100_hook("Q", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Fg = cc11001100_hook("Fg", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Hg = cc11001100_hook("Hg", class extends I {
      constructor(a) {
        super(a, -1, Gg);
      }
    }, "var-init"),
    Gg = cc11001100_hook("Gg", [6, 7, 9, 10, 11], "var-init");
  function Ig(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    Sf(a.getElementsByTagName("p"), function (c) {
      100 <= Jg(c) && b.push(c);
    });
    return b;
  }
  function Jg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = cc11001100_hook("b", 0, "var-init");
    Sf(a.childNodes, function (c) {
      b += cc11001100_hook("b", Jg(c), "assign");
    });
    return b;
  }
  function Kg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Lg(a, b) {
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
  const Mg = cc11001100_hook("Mg", class {
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
      a = cc11001100_hook("a", Lg(this, a), "assign");
      "number" === typeof this.i && (b = cc11001100_hook("b", this.i, "assign"), 0 > b && (b += cc11001100_hook("b", a.length, "assign")), a = cc11001100_hook("a", 0 <= b && b < a.length ? [a[b]] : [], "assign"));
      if ("number" === typeof this.j) {
        b = cc11001100_hook("b", [], "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
          var d = cc11001100_hook("d", Ig(a[c]), "var-init"),
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
  function Ng(a) {
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
    Og = cc11001100_hook("Og", class {
      constructor(a, b = 0) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }, "var-init");
  var Pg = cc11001100_hook("Pg", new S(1082, !0), "var-init"),
    Qg = cc11001100_hook("Qg", new Og(1130, 100), "var-init"),
    Rg = cc11001100_hook("Rg", new class {
      constructor(a, b = "") {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(14), "var-init"),
    Sg = cc11001100_hook("Sg", new S(316), "var-init"),
    Tg = cc11001100_hook("Tg", new S(1207, !0), "var-init"),
    Ug = cc11001100_hook("Ug", new S(313), "var-init"),
    Vg = cc11001100_hook("Vg", new S(369), "var-init"),
    Wg = cc11001100_hook("Wg", new S(1230), "var-init"),
    Xg = cc11001100_hook("Xg", new S(1229), "var-init"),
    Yg = cc11001100_hook("Yg", new S(1231), "var-init"),
    Zg = cc11001100_hook("Zg", new S(1171, !0), "var-init"),
    $g = cc11001100_hook("$g", new S(1201, !0), "var-init"),
    ah = cc11001100_hook("ah", new S(217), "var-init"),
    bh = cc11001100_hook("bh", new S(1228), "var-init"),
    ch = cc11001100_hook("ch", new S(1216), "var-init"),
    dh = cc11001100_hook("dh", new S(1215), "var-init"),
    eh = cc11001100_hook("eh", new S(506914611), "var-init"),
    fh = cc11001100_hook("fh", new S(1120), "var-init"),
    gh = cc11001100_hook("gh", new S(1086, !0), "var-init"),
    hh = cc11001100_hook("hh", new Og(1079, 5), "var-init"),
    ih = cc11001100_hook("ih", new class {
      constructor(a, b = []) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]), "var-init"),
    jh = cc11001100_hook("jh", new S(203), "var-init"),
    kh = cc11001100_hook("kh", new S(84), "var-init"),
    lh = cc11001100_hook("lh", new S(1975), "var-init"),
    mh = cc11001100_hook("mh", new S(1974), "var-init"),
    nh = cc11001100_hook("nh", new S(1162), "var-init"),
    oh = cc11001100_hook("oh", new Og(501545963, 1), "var-init"),
    ph = cc11001100_hook("ph", new S(501545960), "var-init"),
    qh = cc11001100_hook("qh", new S(501545961), "var-init"),
    rh = cc11001100_hook("rh", new S(45388034), "var-init"),
    sh = cc11001100_hook("sh", new Og(501545962, 1), "var-init"),
    th = cc11001100_hook("th", new Og(45388309, -1), "var-init"),
    uh = cc11001100_hook("uh", new Og(1114, 1), "var-init"),
    vh = cc11001100_hook("vh", new S(491815314), "var-init"),
    wh = cc11001100_hook("wh", new S(1121), "var-init"),
    xh = cc11001100_hook("xh", new S(501545959, !0), "var-init"),
    yh = cc11001100_hook("yh", new S(506619840), "var-init"),
    zh = cc11001100_hook("zh", new S(502896280), "var-init");
  var Ah = cc11001100_hook("Ah", class {
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
    return M(Ah).h(a.h, a.defaultValue);
  }
  function Bh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return M(Ah).i(a.h, a.defaultValue);
  }
  function Ch() {
    return M(Ah).j(Rg.h, Rg.defaultValue);
  }
  ;
  function Dh(a, b, c) {
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
    Ng(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = cc11001100_hook("b.style.display", "block", "assign"));
  }
  ;
  function Eh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", e => {
        e = cc11001100_hook("e", Fh(e), "assign");
        return null == e ? !1 : 0 < e;
      }, "var-init"),
      d = cc11001100_hook("d", e => {
        e = cc11001100_hook("e", Fh(e), "assign");
        return null == e ? !1 : 0 > e;
      }, "var-init");
    switch (b) {
      case 0:
        return {
          init: cc11001100_hook("init", Gh(a.previousSibling, c), "object-key-init"),
          ma: cc11001100_hook("ma", e => Gh(e.previousSibling, c), "object-key-init"),
          pa: cc11001100_hook("pa", 0, "object-key-init")
        };
      case 2:
        return {
          init: cc11001100_hook("init", Gh(a.lastChild, c), "object-key-init"),
          ma: cc11001100_hook("ma", e => Gh(e.previousSibling, c), "object-key-init"),
          pa: cc11001100_hook("pa", 0, "object-key-init")
        };
      case 3:
        return {
          init: cc11001100_hook("init", Gh(a.nextSibling, d), "object-key-init"),
          ma: cc11001100_hook("ma", e => Gh(e.nextSibling, d), "object-key-init"),
          pa: cc11001100_hook("pa", 3, "object-key-init")
        };
      case 1:
        return {
          init: cc11001100_hook("init", Gh(a.firstChild, d), "object-key-init"),
          ma: cc11001100_hook("ma", e => Gh(e.nextSibling, d), "object-key-init"),
          pa: cc11001100_hook("pa", 3, "object-key-init")
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Fh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null;
  }
  function Gh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && b(a) ? a : null;
  }
  ;
  var Hh = cc11001100_hook("Hh", {
    rectangle: cc11001100_hook("rectangle", 1, "object-key-init"),
    horizontal: cc11001100_hook("horizontal", 2, "object-key-init"),
    vertical: cc11001100_hook("vertical", 4, "object-key-init")
  }, "var-init");
  var Ih = cc11001100_hook("Ih", a => {
    if (a == a.top) return 0;
    for (; a && a != a.top && Ac(a); a = cc11001100_hook("a", a.parent, "assign")) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }, "var-init");
  var Jh = cc11001100_hook("Jh", (a, b) => {
    do {
      const c = cc11001100_hook("c", Ec(a, b), "var-init");
      if (c && "fixed" == c.position) return !1;
    } while (a = cc11001100_hook("a", a.parentElement, "assign"));
    return !0;
  }, "var-init");
  function Kh(a, b) {
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
  var Lh = cc11001100_hook("Lh", (a, b) => !((Mc.test(b.google_ad_width) || Lc.test(a.style.width)) && (Mc.test(b.google_ad_height) || Lc.test(a.style.height))), "var-init"),
    Nh = cc11001100_hook("Nh", (a, b) => (a = cc11001100_hook("a", Mh(a, b), "assign")) ? a.y : 0, "var-init"),
    Mh = cc11001100_hook("Mh", (a, b) => {
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
    Oh = cc11001100_hook("Oh", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      for (let c in Hh) -1 != a.indexOf(c) && (b |= cc11001100_hook("b", Hh[c], "assign"));
      return b;
    }, "var-init"),
    Ph = cc11001100_hook("Ph", (a, b, c, d, e) => {
      if (a !== a.top) return Bc(a) ? 3 : 16;
      if (!(488 > P(a).clientWidth)) return 4;
      if (!(a.innerHeight >= a.innerWidth)) return 5;
      const f = cc11001100_hook("f", P(a).clientWidth, "var-init");
      if (!f || (f - c) / f > d) a = cc11001100_hook("a", 6, "assign");else {
        if (c = cc11001100_hook("c", "true" != e.google_full_width_responsive, "assign")) a: {
          c = cc11001100_hook("c", b.parentElement, "assign");
          for (b = cc11001100_hook("b", P(a).clientWidth, "assign"); c; c = cc11001100_hook("c", c.parentElement, "assign")) if ((d = cc11001100_hook("d", Ec(c, a), "assign")) && (e = cc11001100_hook("e", K(d.width), "assign")) && !(e >= b) && "visible" != d.overflow) {
            c = cc11001100_hook("c", !0, "assign");
            break a;
          }
          c = cc11001100_hook("c", !1, "assign");
        }
        a = cc11001100_hook("a", c ? 7 : !0, "assign");
      }
      return a;
    }, "var-init"),
    Qh = cc11001100_hook("Qh", (a, b, c, d) => {
      const e = cc11001100_hook("e", Ph(b, c, a, .3, d), "var-init");
      !0 !== e ? a = cc11001100_hook("a", e, "assign") : "true" == d.google_full_width_responsive || Jh(c, b) ? (b = cc11001100_hook("b", P(b).clientWidth, "assign"), a = cc11001100_hook("a", b - a, "assign"), a = cc11001100_hook("a", b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10, "assign")) : a = cc11001100_hook("a", 9, "assign");
      return a;
    }, "var-init"),
    Rh = cc11001100_hook("Rh", (a, b, c) => {
      a = cc11001100_hook("a", a.style, "assign");
      "rtl" == b ? a.marginRight = cc11001100_hook("a.marginRight", c, "assign") : a.marginLeft = cc11001100_hook("a.marginLeft", c, "assign");
    }, "var-init");
  const Sh = cc11001100_hook("Sh", (a, b) => {
      if (3 == b.nodeType) return /\S/.test(b.data);
      if (1 == b.nodeType) {
        if (/^(script|style)$/i.test(b.nodeName)) return !1;
        let c;
        try {
          c = cc11001100_hook("c", Ec(b, a), "assign");
        } catch (d) {}
        return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility));
      }
      return !1;
    }, "var-init"),
    Th = cc11001100_hook("Th", (a, b, c) => {
      a = cc11001100_hook("a", Mh(b, a), "assign");
      return "rtl" == c ? -a.x : a.x;
    }, "var-init");
  var Uh = cc11001100_hook("Uh", (a, b) => {
    var c;
    c = cc11001100_hook("c", (c = cc11001100_hook("c", b.parentElement, "assign")) ? (c = cc11001100_hook("c", Ec(c, a), "assign")) ? c.direction : "" : "", "assign");
    if (c) {
      b.style.border = cc11001100_hook("b.style.border", b.style.borderStyle = cc11001100_hook("b.style.borderStyle", b.style.outline = cc11001100_hook("b.style.outline", b.style.outlineStyle = cc11001100_hook("b.style.outlineStyle", b.style.transition = cc11001100_hook("b.style.transition", "none", "assign"), "assign"), "assign"), "assign"), "assign");
      b.style.borderSpacing = cc11001100_hook("b.style.borderSpacing", b.style.padding = cc11001100_hook("b.style.padding", "0", "assign"), "assign");
      Rh(b, c, "0px");
      b.style.width = cc11001100_hook("b.style.width", P(a).clientWidth + "px", "assign");
      if (0 !== Th(a, b, c)) {
        Rh(b, c, "0px");
        var d = cc11001100_hook("d", Th(a, b, c), "var-init");
        Rh(b, c, -1 * d + "px");
        a = cc11001100_hook("a", Th(a, b, c), "assign");
        0 !== a && a !== d && Rh(b, c, d / (a - d) * d + "px");
      }
      b.style.zIndex = cc11001100_hook("b.style.zIndex", 30, "assign");
    }
  }, "var-init");
  var Vh = cc11001100_hook("Vh", class {
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
  var Wh = cc11001100_hook("Wh", (a, b, c, d = e => e) => {
      let e;
      return a.style && a.style[c] && d(a.style[c]) || (e = cc11001100_hook("e", Ec(a, b), "assign")) && e[c] && d(e[c]) || null;
    }, "var-init"),
    Xh = cc11001100_hook("Xh", a => b => b.M <= a, "var-init"),
    $h = cc11001100_hook("$h", (a, b, c, d) => {
      const e = cc11001100_hook("e", a && Yh(c, b), "var-init"),
        f = cc11001100_hook("f", Zh(b, d), "var-init");
      return g => !(e && g.height() >= f);
    }, "var-init"),
    ai = cc11001100_hook("ai", a => b => b.height() <= a, "var-init"),
    Yh = cc11001100_hook("Yh", (a, b) => Nh(a, b) < P(b).clientHeight - 100, "var-init"),
    bi = cc11001100_hook("bi", (a, b) => {
      var c = cc11001100_hook("c", Wh(b, a, "height", K), "var-init");
      if (c) return c;
      var d = cc11001100_hook("d", b.style.height, "var-init");
      b.style.height = cc11001100_hook("b.style.height", "inherit", "assign");
      c = cc11001100_hook("c", Wh(b, a, "height", K), "assign");
      b.style.height = cc11001100_hook("b.style.height", d, "assign");
      if (c) return c;
      c = cc11001100_hook("c", Infinity, "assign");
      do (d = cc11001100_hook("d", b.style && K(b.style.height), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")), (d = cc11001100_hook("d", Wh(b, a, "maxHeight", K), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")); while ((b = cc11001100_hook("b", b.parentElement, "assign")) && "HTML" != b.tagName);
      return c;
    }, "var-init");
  const Zh = cc11001100_hook("Zh", (a, b) => {
    const c = cc11001100_hook("c", 0 == id(a), "var-init");
    return b && c ? Math.max(250, 2 * P(a).clientHeight / 3) : 250;
  }, "var-init");
  var ci = cc11001100_hook("ci", {
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
  const di = cc11001100_hook("di", RegExp("(^| )adsbygoogle($| )"), "var-init");
  function ei(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) {
      const d = cc11001100_hook("d", b[c], "var-init"),
        e = cc11001100_hook("e", sc(d.Xb), "var-init");
      a[e] = cc11001100_hook("a[e]", d.value, "assign");
    }
  }
  ;
  class fi {
    constructor() {
      var a = cc11001100_hook("a", fd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`, "var-init");
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
      md(b) || (b = cc11001100_hook("b", new ld(b, {
        context: cc11001100_hook("context", a, "object-key-init"),
        id: cc11001100_hook("id", e, "object-key-init")
      }), "assign"));
      if (d || this.h) b.meta = cc11001100_hook("b.meta", {}, "assign"), this.h && this.h(b.meta), d && d(b.meta);
      n.google_js_errors = cc11001100_hook("n.google_js_errors", n.google_js_errors || [], "assign");
      n.google_js_errors.push(b);
      n.error_rep_loaded || (Cc(n.document, this.A), n.error_rep_loaded = cc11001100_hook("n.error_rep_loaded", !0, "assign"));
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
  const gi = cc11001100_hook("gi", (a, b) => {
    b = cc11001100_hook("b", b.google_js_reporting_queue = cc11001100_hook("b.google_js_reporting_queue", b.google_js_reporting_queue || [], "assign"), "assign");
    2048 > b.length && b.push(a);
  }, "var-init");
  var hi = cc11001100_hook("hi", (a, b, c, d, e = !1) => {
      const f = cc11001100_hook("f", d || window, "var-init"),
        g = cc11001100_hook("g", "undefined" !== typeof queueMicrotask, "var-init");
      return function () {
        e && g && queueMicrotask(() => {
          f.google_rum_task_id_counter = cc11001100_hook("f.google_rum_task_id_counter", f.google_rum_task_id_counter || 1, "assign");
          f.google_rum_task_id_counter += cc11001100_hook("f.google_rum_task_id_counter", 1, "assign");
        });
        const h = cc11001100_hook("h", Cd(), "var-init");
        let k,
          l = cc11001100_hook("l", 3, "var-init");
        try {
          k = cc11001100_hook("k", b.apply(this, arguments), "assign");
        } catch (m) {
          l = cc11001100_hook("l", 13, "assign");
          if (!c) throw m;
          c(a, m);
        } finally {
          f.google_measure_js_timing && h && gi({
            label: cc11001100_hook("label", a.toString(), "object-key-init"),
            value: cc11001100_hook("value", h, "object-key-init"),
            duration: cc11001100_hook("duration", (Cd() || 0) - h, "object-key-init"),
            type: cc11001100_hook("type", l, "object-key-init"),
            ...(e && g && {
              taskId: cc11001100_hook("taskId", f.google_rum_task_id_counter = cc11001100_hook("f.google_rum_task_id_counter", f.google_rum_task_id_counter || 1, "assign"), "object-key-init")
            })
          }, f);
        }
        return k;
      };
    }, "var-init"),
    ii = cc11001100_hook("ii", (a, b) => hi(a, b, (c, d) => {
      new fi().I(c, d);
    }, void 0, !1), "var-init");
  function ji(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return hi(a, b, void 0, c, !0).apply();
  }
  function ki(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) return null;
    var b = cc11001100_hook("b", t(a, 7), "var-init");
    if (t(a, 1) || a.getId() || 0 < ob(a, 4).length) {
      b = cc11001100_hook("b", ob(a, 4), "assign");
      var c = cc11001100_hook("c", t(a, 3), "var-init"),
        d = cc11001100_hook("d", t(a, 1), "var-init"),
        e = cc11001100_hook("e", "", "var-init");
      d && (e += cc11001100_hook("e", d, "assign"));
      c && (e += cc11001100_hook("e", "#" + Kg(c), "assign"));
      if (b) for (c = cc11001100_hook("c", 0, "assign"); c < b.length; c++) e += cc11001100_hook("e", "." + Kg(b[c]), "assign");
      a = cc11001100_hook("a", (b = cc11001100_hook("b", e, "assign")) ? new Mg(b, t(a, 2), t(a, 5), li(t(a, 6))) : null, "assign");
    } else a = cc11001100_hook("a", b ? new Mg(b, t(a, 2), t(a, 5), li(t(a, 6))) : null, "assign");
    return a;
  }
  var mi = cc11001100_hook("mi", {
    1: cc11001100_hook(1, 1, "object-key-init"),
    2: cc11001100_hook(2, 2, "object-key-init"),
    3: cc11001100_hook(3, 3, "object-key-init"),
    0: cc11001100_hook(0, 0, "object-key-init")
  }, "var-init");
  function li(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? a : mi[a];
  }
  var ni = cc11001100_hook("ni", {
    1: cc11001100_hook(1, 0, "object-key-init"),
    2: cc11001100_hook(2, 1, "object-key-init"),
    3: cc11001100_hook(3, 2, "object-key-init"),
    4: cc11001100_hook(4, 3, "object-key-init")
  }, "var-init");
  function oi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.google_ama_state = cc11001100_hook("a.google_ama_state", a.google_ama_state || {}, "assign");
  }
  function pi(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", oi(a), "assign");
    return a.optimization = cc11001100_hook("a.optimization", a.optimization || {}, "assign");
  }
  ;
  var qi = cc11001100_hook("qi", Rb(class extends I {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  var ri = cc11001100_hook("ri", a => {
    switch (t(a, 8)) {
      case 1:
      case 2:
        if (null == a) var b = cc11001100_hook("b", null, "var-init");else b = cc11001100_hook("b", B(a, O, 1), "assign"), null == b ? b = cc11001100_hook("b", null, "assign") : (a = cc11001100_hook("a", t(a, 2), "assign"), b = cc11001100_hook("b", null == a ? null : new eg({
          Wa: cc11001100_hook("Wa", [b], "object-key-init"),
          qb: cc11001100_hook("qb", a, "object-key-init")
        }), "assign"));
        return null != b ? Vf(b) : Xf(Error("Missing dimension when creating placement id"));
      case 3:
        return Xf(Error("Missing dimension when creating placement id"));
      default:
        return Xf(Error("Invalid type: " + t(a, 8)));
    }
  }, "var-init");
  var si = cc11001100_hook("si", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var ti = cc11001100_hook("ti", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var ui = cc11001100_hook("ui", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return nb(this, 23);
    }
  }, "var-init");
  var vi = cc11001100_hook("vi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var wi = cc11001100_hook("wi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var xi = cc11001100_hook("xi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var yi = cc11001100_hook("yi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var zi = cc11001100_hook("zi", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ai = cc11001100_hook("Ai", class extends I {
      constructor(a) {
        super(a);
      }
      getName() {
        return t(this, 4);
      }
    }, "var-init"),
    Bi = cc11001100_hook("Bi", [1, 2, 3], "var-init");
  var Di = cc11001100_hook("Di", class extends I {
      constructor(a) {
        super(a, -1, Ci);
      }
    }, "var-init"),
    Ci = cc11001100_hook("Ci", [2, 5, 6, 11], "var-init");
  var Ei = cc11001100_hook("Ei", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Gi = cc11001100_hook("Gi", class extends I {
      constructor(a) {
        super(a);
      }
      i() {
        return Ab(this, Ei, 2, Fi);
      }
    }, "var-init"),
    Fi = cc11001100_hook("Fi", [1, 2], "var-init");
  var Ii = cc11001100_hook("Ii", class extends I {
      constructor(a) {
        super(a, -1, Hi);
      }
      i() {
        return B(this, Gi, 3);
      }
    }, "var-init"),
    Hi = cc11001100_hook("Hi", [1, 4], "var-init");
  var Li = cc11001100_hook("Li", class extends I {
      constructor(a) {
        super(a, -1, Ki);
      }
    }, "var-init"),
    Mi = cc11001100_hook("Mi", Rb(Li), "var-init"),
    Ki = cc11001100_hook("Ki", [1, 2, 5, 7], "var-init");
  var Ni = cc11001100_hook("Ni", (a, b) => {
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
  function Oi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new cg(), "var-init"),
      d = cc11001100_hook("d", new bg(), "var-init");
    b.forEach(e => {
      if (Ab(e, yi, 1, Bi)) {
        e = cc11001100_hook("e", Ab(e, yi, 1, Bi), "assign");
        if (B(e, Q, 1) && B(B(e, Q, 1), O, 1) && B(e, Q, 2) && B(B(e, Q, 2), O, 1)) {
          const g = cc11001100_hook("g", Pi(a, B(B(e, Q, 1), O, 1)), "var-init"),
            h = cc11001100_hook("h", Pi(a, B(B(e, Q, 2), O, 1)), "var-init");
          if (g && h) for (var f of Ni({
            anchor: cc11001100_hook("anchor", g, "object-key-init"),
            position: cc11001100_hook("position", t(B(e, Q, 1), 2), "object-key-init")
          }, {
            anchor: cc11001100_hook("anchor", h, "object-key-init"),
            position: cc11001100_hook("position", t(B(e, Q, 2), 2), "object-key-init")
          })) c.set(ea(f.anchor), f.position);
        }
        B(e, Q, 3) && B(B(e, Q, 3), O, 1) && (f = cc11001100_hook("f", Pi(a, B(B(e, Q, 3), O, 1)), "assign")) && c.set(ea(f), t(B(e, Q, 3), 2));
      } else Ab(e, zi, 2, Bi) ? Qi(a, Ab(e, zi, 2, Bi), c) : Ab(e, xi, 3, Bi) && Ri(a, Ab(e, xi, 3, Bi), d);
    });
    return new Si(c, d);
  }
  class Si {
    constructor(a, b) {
      this.i = cc11001100_hook("this.i", a, "assign");
      this.h = cc11001100_hook("this.h", b, "assign");
    }
  }
  const Qi = cc11001100_hook("Qi", (a, b, c) => {
      B(b, Q, 2) ? (b = cc11001100_hook("b", B(b, Q, 2), "assign"), (a = cc11001100_hook("a", Pi(a, B(b, O, 1)), "assign")) && c.set(ea(a), t(b, 2))) : B(b, O, 1) && (a = cc11001100_hook("a", Ti(a, B(b, O, 1)), "assign")) && a.forEach(d => {
        d = cc11001100_hook("d", ea(d), "assign");
        c.set(d, 1);
        c.set(d, 4);
        c.set(d, 2);
        c.set(d, 3);
      });
    }, "var-init"),
    Ri = cc11001100_hook("Ri", (a, b, c) => {
      B(b, O, 1) && (a = cc11001100_hook("a", Ti(a, B(b, O, 1)), "assign")) && a.forEach(d => {
        c.add(ea(d));
      });
    }, "var-init"),
    Pi = cc11001100_hook("Pi", (a, b) => (a = cc11001100_hook("a", Ti(a, b), "assign")) && 0 < a.length ? a[0] : null, "var-init"),
    Ti = cc11001100_hook("Ti", (a, b) => (b = cc11001100_hook("b", ki(b), "assign")) ? b.query(a) : null, "var-init");
  function Ui(a, b, c) {
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
      if (Vi(b)) return !0;
      if (a.h.has(b)) break;
      c.push(b);
      b = cc11001100_hook("b", b.parentElement, "assign");
    }
    c.forEach(d => a.h.add(d));
    return !1;
  }
  function Wi(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Xi(a), "assign");
    return a.has("all") || a.has("after");
  }
  function Yi(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Xi(a), "assign");
    return a.has("all") || a.has("before");
  }
  function Xi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a && a.getAttribute("data-no-auto-ads"), "assign")) ? new Set(a.split("|")) : new Set();
  }
  function Vi(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Xi(a), "var-init");
    return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"));
  }
  var Zi = cc11001100_hook("Zi", class {
    constructor() {
      this.h = cc11001100_hook("this.h", new Set(), "assign");
    }
  }, "var-init");
  function $i(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", Ec(a, b), "assign");
    if (!a) return !1;
    a = cc11001100_hook("a", a.cssFloat || a.styleFloat, "assign");
    return "left" == a || "right" == a;
  }
  function aj(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (a = cc11001100_hook("a", a.previousSibling, "assign"); a && 1 != a.nodeType;) a = cc11001100_hook("a", a.previousSibling, "assign");
    return a ? a : null;
  }
  function bj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a.nextSibling || !!a.parentNode && bj(a.parentNode);
  }
  ;
  function cj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", a.hash, "assign");
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = cc11001100_hook("b", dj(b), "assign");
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function dj(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", "", "var-init");
    J(a.split("_"), c => {
      b += cc11001100_hook("b", c.substr(0, 2), "assign");
    });
    return b;
  }
  ;
  function ej(a = window) {
    a = cc11001100_hook("a", a.googletag, "assign");
    return a?.apiReady ? a : void 0;
  }
  ;
  const fj = cc11001100_hook("fj", a => {
    const b = cc11001100_hook("b", ej(a), "var-init");
    return b ? Ca(Da(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null;
  }, "var-init");
  var gj = cc11001100_hook("gj", a => {
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
  function hj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.l) return !0;
    a.l = cc11001100_hook("a.l", !0, "assign");
    const c = cc11001100_hook("c", C(a.i, Hg, 1), "var-init");
    a.j = cc11001100_hook("a.j", 0, "assign");
    const d = cc11001100_hook("d", ij(a.B), "var-init");
    if (cj(a.h.location, "google_audio_sense")) {
      var e = cc11001100_hook("e", new Bg(), "var-init");
      e = cc11001100_hook("e", x(e, 1, 1), "assign");
      var f = cc11001100_hook("f", new Ag(), "var-init");
      f = cc11001100_hook("f", x(f, 2, !0), "assign");
      e = cc11001100_hook("e", wb(e, 2, f), "assign");
      f = cc11001100_hook("f", new zg(), "assign");
      var g = cc11001100_hook("g", new wg(), "var-init");
      var h = cc11001100_hook("h", x(g, 1, 1), "var-init");
      g = cc11001100_hook("g", r(f.u), "assign");
      if (g & 2) throw Error();
      g = cc11001100_hook("g", vb(f, wg, 1, !1, g), "assign");
      h = cc11001100_hook("h", null != h ? h : new wg(), "assign");
      var k = cc11001100_hook("k", lb(f, 1, 2, void 0, !1), "var-init");
      g.push(h);
      k.push(h.u);
      Za(h.u) && Xa(k, 8);
      g = cc11001100_hook("g", new xg(), "assign");
      g = cc11001100_hook("g", x(g, 1, !0), "assign");
      f = cc11001100_hook("f", wb(f, 2, g), "assign");
      e = cc11001100_hook("e", wb(e, 3, f), "assign");
    } else e = cc11001100_hook("e", B(a.i, Bg, 27), "assign");
    if (f = cc11001100_hook("f", e, "assign")) if (g = cc11001100_hook("g", B(a.i, Eg, 6)?.i() || [], "assign"), e = cc11001100_hook("e", a.h, "assign"), 1 == H(f, 1) && B(f, Ag, 2)?.i() && 0 != g.length) {
      var l;
      f = cc11001100_hook("f", [], "assign");
      for (l of g) if (g = cc11001100_hook("g", ki(B(l, O, 1) || null), "assign")) g = cc11001100_hook("g", g.query(e.document), "assign"), 0 < g.length && f.push(g[0]);
      f = cc11001100_hook("f", f.filter(sg).filter(tg(f)).filter(ug(e)), "assign");
      f.sort(vg);
      if (l = cc11001100_hook("l", f[0] || null, "assign")) f = cc11001100_hook("f", e.document.createElement("div"), "assign"), f.id = cc11001100_hook("f.id", "google-auto-placed-read-aloud-player-reserved", "assign"), Qc(f, {
        width: cc11001100_hook("width", "100%", "object-key-init"),
        height: cc11001100_hook("height", "65px", "object-key-init")
      }), l.insertBefore(f, l.firstChild), oi(e).audioSenseSpaceReserved = cc11001100_hook("oi(e).audioSenseSpaceReserved", !0, "assign");
    }
    l = cc11001100_hook("l", a.h, "assign");
    var m;
    try {
      var u = cc11001100_hook("u", (m = cc11001100_hook("m", l.localStorage.getItem("google_ama_settings"), "assign")) ? qi(m) : null, "var-init");
    } catch (w) {
      u = cc11001100_hook("u", null, "assign");
    }
    m = cc11001100_hook("m", null !== u && G(u, 2, !1), "assign");
    u = cc11001100_hook("u", oi(l), "assign");
    m && (u.eatf = cc11001100_hook("u.eatf", !0, "assign"), cd(7, [!0, 0, !1]));
    b: {
      f = cc11001100_hook("f", {
        gb: cc11001100_hook("gb", !1, "object-key-init"),
        hb: cc11001100_hook("hb", !1, "object-key-init")
      }, "assign");
      h = cc11001100_hook("h", q(l.document.querySelectorAll(".google-auto-placed")), "assign");
      k = cc11001100_hook("k", q(l.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")), "assign");
      const w = cc11001100_hook("w", q(l.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")), "var-init");
      g = cc11001100_hook("g", (fj(l) || q(l.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(q(l.document.querySelectorAll("iframe[id^=google_ads_iframe]"))), "assign");
      const y = cc11001100_hook("y", q(l.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")), "var-init"),
        D = cc11001100_hook("D", q(l.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), "var-init"),
        va = cc11001100_hook("va", q(l.document.querySelectorAll("div.googlepublisherpluginad")), "var-init"),
        R = cc11001100_hook("R", q(l.document.querySelectorAll("html > ins.adsbygoogle")), "var-init");
      e = cc11001100_hook("e", [].concat(q(l.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), q(l.document.querySelectorAll("body ins.adsbygoogle"))), "assign");
      m = cc11001100_hook("m", [], "assign");
      for (const [wa, ma] of [[f.Rb, h], [f.gb, k], [f.Ub, w], [f.Sb, g], [f.Vb, y], [f.Qb, D], [f.Tb, va], [f.hb, R]]) f = cc11001100_hook("f", ma, "assign"), !1 === wa ? m = cc11001100_hook("m", m.concat(f), "assign") : e = cc11001100_hook("e", e.concat(f), "assign");
      e = cc11001100_hook("e", gj(e), "assign");
      m = cc11001100_hook("m", gj(m), "assign");
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
    v = cc11001100_hook("v", new bg([2]), "assign");
    for (u = cc11001100_hook("u", 0, "assign"); u < c.length; u++) {
      m = cc11001100_hook("m", a, "assign");
      e = cc11001100_hook("e", c[u], "assign");
      l = cc11001100_hook("l", u, "assign");
      f = cc11001100_hook("f", b, "assign");
      g = cc11001100_hook("g", d, "assign");
      h = cc11001100_hook("h", v, "assign");
      if (B(e, ig, 4) && h.contains(t(B(e, ig, 4), 1)) && 1 === t(e, 8) && jj(e, g)) {
        m.j++;
        if (f = cc11001100_hook("f", kj(m, e, f, g), "assign")) g = cc11001100_hook("g", oi(m.h), "assign"), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = cc11001100_hook("g.numAutoAdsPlaced", 0, "assign")), B(e, O, 1) && null != t(B(e, O, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = cc11001100_hook("g.numPostPlacementsPlaced", 1, "assign")), null == g.placed && (g.placed = cc11001100_hook("g.placed", [], "assign")), g.numAutoAdsPlaced++, g.placed.push({
          index: cc11001100_hook("index", l, "object-key-init"),
          element: cc11001100_hook("element", f.ka, "object-key-init")
        }), cd(7, [!1, m.j, !0]);
        m = cc11001100_hook("m", f, "assign");
      } else m = cc11001100_hook("m", null, "assign");
      if (m) return !0;
    }
    cd(7, [!1, a.j, !1]);
    return !1;
  }
  function kj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (!jj(b, d) || 1 != t(b, 8)) return null;
    d = cc11001100_hook("d", B(b, O, 1), "assign");
    if (!d) return null;
    d = cc11001100_hook("d", ki(d), "assign");
    if (!d) return null;
    d = cc11001100_hook("d", d.query(a.h.document), "assign");
    if (0 == d.length) return null;
    d = cc11001100_hook("d", d[0], "assign");
    var e = cc11001100_hook("e", ni[t(b, 2)], "var-init");
    e = cc11001100_hook("e", void 0 === e ? null : e, "assign");
    var f;
    if (!(f = cc11001100_hook("f", null == e, "assign"))) {
      a: {
        f = cc11001100_hook("f", a.h, "assign");
        switch (e) {
          case 0:
            f = cc11001100_hook("f", $i(aj(d), f), "assign");
            break a;
          case 3:
            f = cc11001100_hook("f", $i(d, f), "assign");
            break a;
          case 2:
            var g = cc11001100_hook("g", d.lastChild, "var-init");
            f = cc11001100_hook("f", $i(g ? 1 == g.nodeType ? g : aj(g) : null, f), "assign");
            break a;
        }
        f = cc11001100_hook("f", !1, "assign");
      }
      if (c = cc11001100_hook("c", !f && !(!c && 2 == e && !bj(d)), "assign")) c = cc11001100_hook("c", 1 == e || 2 == e ? d : d.parentNode, "assign"), c = cc11001100_hook("c", !(c && !Ng(c) && 0 >= c.offsetWidth), "assign");
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
          g = cc11001100_hook("g", Wi(d.previousElementSibling) || Yi(d), "assign");
          break a;
        case 4:
          g = cc11001100_hook("g", Wi(d) || Yi(d.nextElementSibling), "assign");
          break a;
        case 2:
          g = cc11001100_hook("g", Yi(d.firstElementChild), "assign");
          break a;
        case 3:
          g = cc11001100_hook("g", Wi(d.lastElementChild), "assign");
          break a;
        default:
          throw Error("Unknown RelativePosition: " + f);
      }
      c = cc11001100_hook("c", g || Ui(c, d, f), "assign");
    }
    if (c) return null;
    f = cc11001100_hook("f", B(b, Fg, 3), "assign");
    c = cc11001100_hook("c", {}, "assign");
    f && (c.Ta = cc11001100_hook("c.Ta", t(f, 1), "assign"), c.Ka = cc11001100_hook("c.Ka", t(f, 2), "assign"), c.Za = cc11001100_hook("c.Za", !!nb(f, 3), "assign"));
    f = cc11001100_hook("f", B(b, ig, 4) && t(B(b, ig, 4), 2) ? t(B(b, ig, 4), 2) : null, "assign");
    f = cc11001100_hook("f", lg(f), "assign");
    g = cc11001100_hook("g", null != t(b, 12) ? t(b, 12) : null, "assign");
    g = cc11001100_hook("g", null == g ? null : new kg(null, {
      google_ml_rank: cc11001100_hook("google_ml_rank", g, "object-key-init")
    }), "assign");
    b = cc11001100_hook("b", lj(a, b), "assign");
    b = cc11001100_hook("b", jg(a.m, f, g, b), "assign");
    f = cc11001100_hook("f", a.h, "assign");
    a = cc11001100_hook("a", a.C, "assign");
    var h = cc11001100_hook("h", f.document, "var-init"),
      k = cc11001100_hook("k", c.Za || !1, "var-init");
    g = cc11001100_hook("g", new uc(h).createElement("DIV"), "assign");
    const l = cc11001100_hook("l", g.style, "var-init");
    l.width = cc11001100_hook("l.width", "100%", "assign");
    l.height = cc11001100_hook("l.height", "auto", "assign");
    l.clear = cc11001100_hook("l.clear", k ? "both" : "none", "assign");
    k = cc11001100_hook("k", g.style, "assign");
    k.textAlign = cc11001100_hook("k.textAlign", "center", "assign");
    c.ob && ei(k, c.ob);
    h = cc11001100_hook("h", new uc(h).createElement("INS"), "assign");
    k = cc11001100_hook("k", h.style, "assign");
    k.display = cc11001100_hook("k.display", "block", "assign");
    k.margin = cc11001100_hook("k.margin", "auto", "assign");
    k.backgroundColor = cc11001100_hook("k.backgroundColor", "transparent", "assign");
    c.Ta && (k.marginTop = cc11001100_hook("k.marginTop", c.Ta, "assign"));
    c.Ka && (k.marginBottom = cc11001100_hook("k.marginBottom", c.Ka, "assign"));
    c.Va && ei(k, c.Va);
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
        if (T(Ug)) {
          {
            const D = cc11001100_hook("D", Eh(d, e), "var-init");
            if (D.init) {
              var u = cc11001100_hook("u", D.init, "var-init");
              for (d = cc11001100_hook("d", u, "assign"); d = cc11001100_hook("d", D.ma(d), "assign");) u = cc11001100_hook("u", d, "assign");
              var v = cc11001100_hook("v", {
                anchor: cc11001100_hook("anchor", u, "object-key-init"),
                position: cc11001100_hook("position", D.pa, "object-key-init")
              }, "var-init");
            } else v = cc11001100_hook("v", {
              anchor: cc11001100_hook("anchor", d, "object-key-init"),
              position: cc11001100_hook("position", e, "object-key-init")
            }, "assign");
          }
          m["google-ama-order-assurance"] = cc11001100_hook("m[\"google-ama-order-assurance\"]", 0, "assign");
          Dh(m, v.anchor, v.position);
        } else Dh(m, d, e);
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
            } catch (D) {
              break b;
            }
            w.removeAttribute("data-pub-vars");
          }
          y && (m.params = cc11001100_hook("m.params", y, "assign"));
          (f.adsbygoogle = cc11001100_hook("f.adsbygoogle", f.adsbygoogle || [], "assign")).push(m);
        }
      } catch (D) {
        (w = cc11001100_hook("w", c.ta, "assign")) && w.parentNode && (y = cc11001100_hook("y", w.parentNode, "assign"), y.removeChild(w), Ng(y) && (y.style.display = cc11001100_hook("y.style.display", y.getAttribute("data-init-display") || "none", "assign")));
        w = cc11001100_hook("w", !1, "assign");
        break a;
      }
      w = cc11001100_hook("w", !0, "assign");
    }
    return w ? c : null;
  }
  function lj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Zf(ag(ri(b).map(mg), c => {
      oi(a.h).exception = cc11001100_hook("oi(a.h).exception", c, "assign");
    }));
  }
  const mj = cc11001100_hook("mj", class {
    constructor(a, b, c, d, e) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.C = cc11001100_hook("this.C", b, "assign");
      this.i = cc11001100_hook("this.i", c, "assign");
      this.m = cc11001100_hook("this.m", e || null, "assign");
      this.A = cc11001100_hook("this.A", (this.B = cc11001100_hook("this.B", d, "assign")) ? Oi(a.document, C(d, Ai, 5)) : Oi(a.document, []), "assign");
      this.v = cc11001100_hook("this.v", new Zi(), "assign");
      this.j = cc11001100_hook("this.j", 0, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
  }, "var-init");
  function ij(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", {}, "var-init");
    a && mb(a, 6, !1).forEach(c => {
      b[c] = cc11001100_hook("b[c]", !0, "assign");
    });
    return b;
  }
  function jj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && void 0 !== tb(a, ig, 4, !1) && b[t(B(a, ig, 4), 2)] ? !1 : !0;
  }
  ;
  var nj = cc11001100_hook("nj", Rb(class extends I {
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
  let oj, V;
  const pj = cc11001100_hook("pj", new Jd(n), "var-init");
  var qj = cc11001100_hook("qj", a => {
    null != a && (n.google_measure_js_timing = cc11001100_hook("n.google_measure_js_timing", a, "assign"));
    n.google_measure_js_timing || Id(pj);
  }, "var-init");
  (a => {
    oj = cc11001100_hook("oj", a || new yd(), "assign");
    "number" !== typeof n.google_srt && (n.google_srt = cc11001100_hook("n.google_srt", Math.random(), "assign"));
    wd(oj, n.google_srt);
    V = cc11001100_hook("V", new Ld(oj, pj), "assign");
    V.l(!0);
    "complete" == n.document.readyState ? qj() : pj.h && bc(n, "load", () => {
      qj();
    });
  })();
  var rj = cc11001100_hook("rj", (a, b, c) => V.ia(a, b, c), "var-init"),
    sj = cc11001100_hook("sj", (a, b, c) => {
      const d = cc11001100_hook("d", M(Hf).i(), "var-init");
      !b.eid && d.length && (b.eid = cc11001100_hook("b.eid", d.toString(), "assign"));
      xd(oj, a, b, !0, c);
    }, "var-init"),
    tj = cc11001100_hook("tj", (a, b) => {
      V.ca(a, b);
    }, "var-init"),
    uj = cc11001100_hook("uj", (a, b, c, d) => {
      let e;
      md(b) ? e = cc11001100_hook("e", b.msg || Kd(b.error), "assign") : e = cc11001100_hook("e", Kd(b), "assign");
      return 0 == e.indexOf("TagError") ? (c = cc11001100_hook("c", b instanceof ld ? b.error : b, "assign"), c.pbr || (c.pbr = cc11001100_hook("c.pbr", !0, "assign"), V.I(a, b, .1, d, "puberror")), !1) : V.I(a, b, c, d);
    }, "var-init");
  function vj(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b = cc11001100_hook("b", a.localStorage.getItem("google_auto_fc_cmp_setting") || null, "var-init");
    } catch (d) {
      b = cc11001100_hook("b", null, "assign");
    }
    const c = cc11001100_hook("c", b, "var-init");
    return c ? Yf(() => nj(c)) : Vf(null);
  }
  ;
  function wj() {
    if (xj) return xj;
    const a = cc11001100_hook("a", ed() || window, "var-init"),
      b = cc11001100_hook("b", a.google_persistent_state_async, "var-init");
    return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? xj = cc11001100_hook("xj", b, "assign") : a.google_persistent_state_async = cc11001100_hook("a.google_persistent_state_async", xj = cc11001100_hook("xj", new yj(), "assign"), "assign");
  }
  function zj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Aj[a] || "google_ps_" + a;
  }
  function Bj(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", zj(b), "assign");
    a = cc11001100_hook("a", a.S, "assign");
    const d = cc11001100_hook("d", a[b], "var-init");
    return void 0 === d ? (a[b] = cc11001100_hook("a[b]", c(), "assign"), a[b]) : d;
  }
  function Cj(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Bj(a, b, () => c);
  }
  class yj {
    constructor() {
      this.S = cc11001100_hook("this.S", {}, "assign");
    }
  }
  var xj = cc11001100_hook("xj", null, "var-init");
  const Aj = cc11001100_hook("Aj", {
    [8]: cc11001100_hook(8, "google_prev_ad_formats_by_region", "object-key-init"),
    [9]: cc11001100_hook(9, "google_prev_ad_slotnames_by_region", "object-key-init")
  }, "var-init");
  function Dj(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a || {
      cookie: cc11001100_hook("cookie", "", "object-key-init")
    }, "assign");
  }
  Dj.prototype.set = cc11001100_hook("Dj.prototype.set", function (a, b, c) {
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
  Dj.prototype.get = cc11001100_hook("Dj.prototype.get", function (a, b) {
    const c = cc11001100_hook("c", a + "=", "var-init"),
      d = cc11001100_hook("d", (this.h.cookie || "").split(";"), "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"), f; e < d.length; e++) {
      f = cc11001100_hook("f", qa(d[e]), "assign");
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  }, "assign");
  Dj.prototype.isEmpty = cc11001100_hook("Dj.prototype.isEmpty", function () {
    return !this.h.cookie;
  }, "assign");
  Dj.prototype.clear = cc11001100_hook("Dj.prototype.clear", function () {
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
  function Ej(a, b = window) {
    cc11001100_hook("a", a, "function-parameter");
    if (nb(a, 5)) try {
      return b.localStorage;
    } catch {}
    return null;
  }
  ;
  function Fj(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new Gj(), "var-init");
    return x(b, 5, a);
  }
  var Gj = cc11001100_hook("Gj", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  const Hj = cc11001100_hook("Hj", a => {
    void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = cc11001100_hook("a.addtlConsent", void 0, "assign"));
    void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = cc11001100_hook("a.gdprApplies", void 0, "assign"));
    return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
  }, "var-init");
  function Ij(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = cc11001100_hook("a.internalErrorState", Hj(a), "assign"));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? ($c({
      e: cc11001100_hook("e", String(a.internalErrorState), "object-key-init")
    }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
  }
  function Jj(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.i) return a.i;
    a.i = cc11001100_hook("a.i", Oc(a.l, "__tcfapiLocator"), "assign");
    return a.i;
  }
  function Kj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "function" === typeof a.l.__tcfapi || null != Jj(a);
  }
  function Lj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    c || (c = cc11001100_hook("c", () => {}, "assign"));
    if ("function" === typeof a.l.__tcfapi) a = cc11001100_hook("a", a.l.__tcfapi, "assign"), a(b, 2, c, d);else if (Jj(a)) {
      Mj(a);
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
  function Mj(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m || (a.m = cc11001100_hook("a.m", b => {
      try {
        var c = cc11001100_hook("c", ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn, "var-init");
        a.v[c.callId](c.returnValue, c.success);
      } catch (d) {}
    }, "assign"), bc(a.l, "message", a.m));
  }
  class Nj extends Re {
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
      this.m && (cc(this.l, "message", this.m), delete this.m);
      delete this.v;
      delete this.l;
      delete this.i;
      super.h();
    }
    addEventListener(a) {
      let b = cc11001100_hook("b", {
        internalBlockOnErrors: cc11001100_hook("internalBlockOnErrors", this.B, "object-key-init")
      }, "var-init");
      const c = cc11001100_hook("c", ac(() => a(b)), "var-init");
      let d = cc11001100_hook("d", 0, "var-init");
      -1 !== this.C && (d = cc11001100_hook("d", setTimeout(() => {
        b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign");
        b.internalErrorState = cc11001100_hook("b.internalErrorState", 1, "assign");
        c();
      }, this.C), "assign"));
      const e = cc11001100_hook("e", (f, g) => {
        clearTimeout(d);
        f ? (b = cc11001100_hook("b", f, "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", Hj(b), "assign"), b.internalBlockOnErrors = cc11001100_hook("b.internalBlockOnErrors", this.B, "assign"), g && 0 === b.internalErrorState || (b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), g || (b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign")))) : (b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign"));
        a(b);
      }, "var-init");
      try {
        Lj(this, "addEventListener", e);
      } catch (f) {
        b.tcString = cc11001100_hook("b.tcString", "tcunavailable", "assign"), b.internalErrorState = cc11001100_hook("b.internalErrorState", 3, "assign"), d && (clearTimeout(d), d = cc11001100_hook("d", 0, "assign")), c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && Lj(this, "removeEventListener", null, a.listenerId);
    }
  }
  ;
  var Sj = cc11001100_hook("Sj", ({
      s: a,
      X: b,
      Sa: c,
      callback: d,
      na: e = !1,
      oa: f = !1
    }) => {
      b = cc11001100_hook("b", Oj({
        s: cc11001100_hook("s", a, "object-key-init"),
        X: cc11001100_hook("X", b, "object-key-init"),
        na: cc11001100_hook("na", e, "object-key-init"),
        oa: cc11001100_hook("oa", f, "object-key-init")
      }), "assign");
      null != b.h || "tcunav" != b.i.message ? d(b) : Pj(a, c).then(g => g.map(Qj)).then(g => g.map(h => Rj(a, h))).then(d);
    }, "var-init"),
    Oj = cc11001100_hook("Oj", ({
      s: a,
      X: b,
      na: c = !1,
      oa: d = !1
    }) => {
      if (!Tj({
        s: cc11001100_hook("s", a, "object-key-init"),
        X: cc11001100_hook("X", b, "object-key-init"),
        na: cc11001100_hook("na", c, "object-key-init"),
        oa: cc11001100_hook("oa", d, "object-key-init")
      })) return Rj(a, Fj(!0));
      b = cc11001100_hook("b", wj(), "assign");
      return (b = cc11001100_hook("b", Cj(b, 24), "assign")) ? Rj(a, Qj(b)) : Xf(Error("tcunav"));
    }, "var-init");
  function Tj({
    s: a,
    X: b,
    na: c,
    oa: d
  }) {
    if (!(d = cc11001100_hook("d", !d && Kj(new Nj(a)), "assign"))) {
      if (c = cc11001100_hook("c", !c, "assign")) {
        if (b) {
          a = cc11001100_hook("a", vj(a), "assign");
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
  function Pj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Promise.race([Uj(), Vj(a, b)]);
  }
  function Uj() {
    return new Promise(a => {
      var b = cc11001100_hook("b", wj(), "var-init");
      a = cc11001100_hook("a", {
        resolve: cc11001100_hook("resolve", a, "object-key-init")
      }, "assign");
      const c = cc11001100_hook("c", Cj(b, 25, []), "var-init");
      c.push(a);
      b.S[zj(25)] = cc11001100_hook("b.S[zj(25)]", c, "assign");
    }).then(Wj);
  }
  function Vj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new Promise(c => {
      a.setTimeout(c, b, Xf(Error("tcto")));
    });
  }
  function Wj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? Vf(a) : Xf(Error("tcnull"));
  }
  function Qj(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (Ij(a)) {
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
    return Fj(a);
  }
  function Rj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (a = cc11001100_hook("a", Ej(b, a), "assign")) ? Vf(a) : Xf(Error("unav"));
  }
  ;
  var Yj = cc11001100_hook("Yj", class extends I {
      constructor(a) {
        super(a, -1, Xj);
      }
    }, "var-init"),
    Xj = cc11001100_hook("Xj", [1, 2, 3], "var-init");
  var Zj = cc11001100_hook("Zj", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return B(this, Yj, 2);
    }
  }, "var-init");
  const ak = cc11001100_hook("ak", class {
    constructor(a) {
      this.exception = cc11001100_hook("this.exception", a, "assign");
    }
  }, "var-init");
  function bk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      var c = cc11001100_hook("c", a.i, "var-init"),
        d = cc11001100_hook("d", c.resolve, "var-init"),
        e = cc11001100_hook("e", a.h, "var-init");
      oi(e.h);
      C(e.i, Hg, 1);
      d.call(c, new ak(b));
    } catch (f) {
      a = cc11001100_hook("a", a.i, "assign"), b = cc11001100_hook("b", f, "assign"), Nf(a), a.h = cc11001100_hook("a.h", 2, "assign"), a.j = cc11001100_hook("a.j", b, "assign"), Pf(a.i);
    }
  }
  var ck = cc11001100_hook("ck", class {
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
            hj(this.h, !0);
            bk(this);
            break;
          default:
            hj(this.h, !1) ? bk(this) : this.j.setTimeout(ka(this.l, this), 100);
        }
      } catch (a) {
        bk(this, a);
      }
    }
  }, "var-init");
  var dk = cc11001100_hook("dk", "a".charCodeAt(), "var-init"),
    ek = cc11001100_hook("ek", fc(Lf), "var-init"),
    fk = cc11001100_hook("fk", fc(Mf), "var-init");
  function W(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
    const c = cc11001100_hook("c", a.i.substring(a.h, a.h + b), "var-init");
    a.h += cc11001100_hook("a.h", b, "assign");
    return parseInt(c, 2);
  }
  function gk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String.fromCharCode(dk + W(a, 6)) + String.fromCharCode(dk + W(a, 6));
  }
  function hk(a) {
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
  function ik(a, b, c) {
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
  function jk(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", W(a, 16), "var-init");
    return !0 === !!W(a, 1) ? (a = cc11001100_hook("a", hk(a), "assign"), a.forEach(c => {
      if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
    }), a) : ik(a, b);
  }
  class kk {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.i = cc11001100_hook("this.i", a, "assign");
      this.h = cc11001100_hook("this.h", 0, "assign");
    }
  }
  ;
  var mk = cc11001100_hook("mk", (a, b) => {
    try {
      var c = cc11001100_hook("c", Na(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join(""), "var-init");
      const d = cc11001100_hook("d", new kk(c), "var-init");
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
      c.specialFeatureOptins = cc11001100_hook("c.specialFeatureOptins", lk(ik(d, 12, fk), fk), "assign");
      c.purpose = cc11001100_hook("c.purpose", {
        consents: cc11001100_hook("consents", lk(ik(d, 24, ek), ek), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", lk(ik(d, 24, ek), ek), "object-key-init")
      }, "assign");
      c.purposeOneTreatment = cc11001100_hook("c.purposeOneTreatment", !!W(d, 1), "assign");
      c.publisherCC = cc11001100_hook("c.publisherCC", gk(d), "assign");
      c.vendor = cc11001100_hook("c.vendor", {
        consents: cc11001100_hook("consents", lk(jk(d), b), "object-key-init"),
        legitimateInterests: cc11001100_hook("legitimateInterests", lk(jk(d), b), "object-key-init")
      }, "assign");
      return c;
    } catch (d) {
      return null;
    }
  }, "var-init");
  const lk = cc11001100_hook("lk", (a, b) => {
    const c = cc11001100_hook("c", {}, "var-init");
    if (Array.isArray(b) && 0 !== b.length) for (const d of b) c[d] = cc11001100_hook("c[d]", -1 !== a.indexOf(d), "assign");else for (const d of a) c[d] = cc11001100_hook("c[d]", !0, "assign");
    delete c[0];
    return c;
  }, "var-init");
  var nk = cc11001100_hook("nk", class {
    constructor() {
      this.h = cc11001100_hook("this.h", {}, "assign");
    }
  }, "var-init");
  var ok = cc11001100_hook("ok", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var pk = cc11001100_hook("pk", class extends I {
    constructor() {
      super();
    }
  }, "var-init");
  var qk = cc11001100_hook("qk", class extends I {
      constructor() {
        super();
      }
    }, "var-init"),
    rk = cc11001100_hook("rk", [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27], "var-init");
  var sk = cc11001100_hook("sk", class {}, "var-init");
  var tk = cc11001100_hook("tk", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var uk = cc11001100_hook("uk", class extends I {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var wk = cc11001100_hook("wk", Rb(class extends I {
      constructor(a) {
        super(a, -1, vk);
      }
    }), "var-init"),
    vk = cc11001100_hook("vk", [7], "var-init");
  var xk = cc11001100_hook("xk", new class {
    constructor() {
      this.key = cc11001100_hook("this.key", "45369554", "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", !1, "assign");
      this.valueType = cc11001100_hook("this.valueType", "boolean", "assign");
    }
  }(), "var-init");
  var yk = cc11001100_hook("yk", class extends nk {
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
    zk;
  function Ak(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Bk(a), "assign")) ? B(a, uk, 4) : null;
  }
  function Bk(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", new Dj(a).get("FCCDCF", ""), "assign")) {
      if (a.startsWith("%")) try {
        var b = cc11001100_hook("b", decodeURIComponent(a), "var-init");
      } catch (c) {
        Ck(1), b = cc11001100_hook("b", null, "assign");
      } else b = cc11001100_hook("b", a, "assign");
    } else b = cc11001100_hook("b", null, "assign");
    try {
      return b ? wk(b) : null;
    } catch (c) {
      return Ck(2), null;
    }
  }
  function Ck(a) {
    cc11001100_hook("a", a, "function-parameter");
    new sk();
    var b = cc11001100_hook("b", new ok(), "var-init");
    a = cc11001100_hook("a", x(b, 7, a), "assign");
    b = cc11001100_hook("b", new pk(), "assign");
    a = cc11001100_hook("a", wb(b, 1, a), "assign");
    b = cc11001100_hook("b", new qk(), "assign");
    xb(b, 22, rk, a);
    zk || (zk = cc11001100_hook("zk", new yk(), "assign"));
    a = cc11001100_hook("a", zk.h[xk.key], "assign");
    if ("proto" === xk.valueType) try {
      JSON.parse(a);
    } catch (c) {}
  }
  ;
  fc(Lf).map(a => Number(a));
  fc(Mf).map(a => Number(a));
  function Dk(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.__tcfapiPostMessageReady || Ek(new Fk(a));
  }
  function Ek(a) {
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
  var Fk = cc11001100_hook("Fk", class {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
    }
  }, "var-init");
  var Gk = cc11001100_hook("Gk", (a, b) => {
    const c = cc11001100_hook("c", a.document, "var-init"),
      d = cc11001100_hook("d", () => {
        if (!a.frames[b]) if (c.body) {
          const e = cc11001100_hook("e", Dc("IFRAME", c), "var-init");
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
  function Hk() {
    var a = cc11001100_hook("a", window, "var-init"),
      b = cc11001100_hook("b", T(Zg), "var-init");
    a.__uspapi || a.frames.__uspapiLocator || (a = cc11001100_hook("a", new Ik(a), "assign"), Jk(a), b && Kk(a));
  }
  function Jk(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = cc11001100_hook("a.h.__uspapiManager", "fc", "assign"), Gk(a.h, "__uspapiLocator"), na("__uspapi", (...b) => Lk(a, ...b)));
  }
  function Kk(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = cc11001100_hook("a.h.__tcfapiManager", "fc", "assign"), Gk(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = cc11001100_hook("a.h.__tcfapiEventListeners", a.h.__tcfapiEventListeners || [], "assign"), na("__tcfapi", (...b) => Mk(a, ...b)), Dk(a.h));
  }
  function Lk(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    "function" === typeof d && "getUSPData" === b && d({
      version: cc11001100_hook("version", 1, "object-key-init"),
      uspString: cc11001100_hook("uspString", a.m, "object-key-init")
    }, !0);
  }
  function Mk(a, b, c, d, e = null) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if ("function" === typeof d) if (c && 2 !== c) d(null, !1);else switch (c = cc11001100_hook("c", a.h.__tcfapiEventListeners, "assign"), b) {
      case "getTCData":
        !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(Nk(a, e, null), !0) : d(null, !1);
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
        d(Nk(a, null, b - 1), !0);
        break;
      case "removeEventListener":
        c[e] ? (c[e] = cc11001100_hook("c[e]", null, "assign"), d(!0)) : d(!1);
        break;
      case "getInAppTCData":
      case "getVendorList":
        d(null, !1);
    }
  }
  function Nk(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a.j) return null;
    b = cc11001100_hook("b", mk(a.j, b), "assign");
    b.addtlConsent = cc11001100_hook("b.addtlConsent", null != a.l ? a.l : void 0, "assign");
    b.cmpStatus = cc11001100_hook("b.cmpStatus", "loaded", "assign");
    b.eventStatus = cc11001100_hook("b.eventStatus", "tcloaded", "assign");
    null != c && (b.listenerId = cc11001100_hook("b.listenerId", c, "assign"));
    return b;
  }
  class Ik {
    constructor(a) {
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", a.document, "assign");
      this.m = cc11001100_hook("this.m", (a = cc11001100_hook("a", (a = cc11001100_hook("a", Bk(this.i), "assign")) ? B(a, tk, 5) || null : null, "assign")) ? t(a, 2) : null, "assign");
      this.j = cc11001100_hook("this.j", (a = cc11001100_hook("a", Ak(this.i), "assign")) && null != t(a, 1) ? t(a, 1) : null, "assign");
      this.l = cc11001100_hook("this.l", (a = cc11001100_hook("a", Ak(this.i), "assign")) && null != t(a, 2) ? t(a, 2) : null, "assign");
    }
  }
  ;
  const Ok = cc11001100_hook("Ok", a => {
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
    Pk = cc11001100_hook("Pk", a => {
      let b = cc11001100_hook("b", "", "var-init");
      const c = cc11001100_hook("c", /[/%?&=]/, "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; ++d) {
        const e = cc11001100_hook("e", a[d], "var-init");
        b = cc11001100_hook("b", e.match(c) ? b + e : b + encodeURIComponent(e), "assign");
      }
      return b;
    }, "var-init");
  var Qk = cc11001100_hook("Qk", a => {
    a = cc11001100_hook("a", mb(a, 2, !1), "assign");
    if (!a) return !1;
    for (let b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) if (1 == a[b]) return !0;
    return !1;
  }, "var-init");
  const Sk = cc11001100_hook("Sk", (a, b) => {
      a = cc11001100_hook("a", Pk(Ok(a.location.pathname)).replace(/(^\/)|(\/$)/g, ""), "assign");
      const c = cc11001100_hook("c", Jc(a), "var-init"),
        d = cc11001100_hook("d", Rk(a), "var-init");
      return b.find(e => {
        const f = cc11001100_hook("f", void 0 !== tb(e, wi, 7, !1) ? t(B(e, wi, 7), 1) : t(e, 1), "var-init");
        e = cc11001100_hook("e", void 0 !== tb(e, wi, 7, !1) ? t(B(e, wi, 7), 2) : 2, "assign");
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
    Rk = cc11001100_hook("Rk", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      for (;;) {
        b[Jc(a)] = cc11001100_hook("b[Jc(a)]", !0, "assign");
        if (!a) return b;
        a = cc11001100_hook("a", a.substring(0, a.lastIndexOf("/")), "assign");
      }
    }, "var-init");
  const Tk = cc11001100_hook("Tk", {
    google_ad_channel: cc11001100_hook("google_ad_channel", !0, "object-key-init"),
    google_ad_host: cc11001100_hook("google_ad_host", !0, "object-key-init")
  }, "var-init");
  var Uk = cc11001100_hook("Uk", (a, b) => {
      a.location.href && a.location.href.substring && (b.url = cc11001100_hook("b.url", a.location.href.substring(0, 200), "assign"));
      sj("ama", b, .01);
    }, "var-init"),
    Vk = cc11001100_hook("Vk", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      J(Tk, (c, d) => {
        d in a && (b[d] = cc11001100_hook("b[d]", a[d], "assign"));
      });
      return b;
    }, "var-init");
  var Wk = cc11001100_hook("Wk", a => {
    a = cc11001100_hook("a", B(a, vi, 3), "assign");
    return !a || t(a, 1) <= Date.now() ? !1 : !0;
  }, "var-init");
  function Xk(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (T(Sg)) var b = cc11001100_hook("b", null, "var-init");else try {
      b = cc11001100_hook("b", a.getItem("google_ama_config"), "assign");
    } catch (d) {
      b = cc11001100_hook("b", null, "assign");
    }
    try {
      var c = cc11001100_hook("c", b ? Mi(b) : null, "var-init");
    } catch (d) {
      c = cc11001100_hook("c", null, "assign");
    }
    return c;
  }
  ;
  var Yk = cc11001100_hook("Yk", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return B(this, Zj, 2);
    }
    l() {
      return G(this, 3);
    }
  }, "var-init");
  var $k = cc11001100_hook("$k", class extends I {
      constructor(a) {
        super(a, -1, Zk);
      }
      i() {
        return ob(this, 1);
      }
      l() {
        return B(this, Yk, 2);
      }
    }, "var-init"),
    Zk = cc11001100_hook("Zk", [1], "var-init");
  var bl = cc11001100_hook("bl", class extends I {
      constructor(a) {
        super(a, -1, al);
      }
      getId() {
        return E(t(this, 1), 0);
      }
    }, "var-init"),
    al = cc11001100_hook("al", [2], "var-init");
  var dl = cc11001100_hook("dl", class extends I {
      constructor(a) {
        super(a, -1, cl);
      }
    }, "var-init"),
    cl = cc11001100_hook("cl", [2], "var-init");
  var fl = cc11001100_hook("fl", class extends I {
      constructor(a) {
        super(a, -1, el);
      }
    }, "var-init"),
    el = cc11001100_hook("el", [2], "var-init");
  var gl = cc11001100_hook("gl", class extends I {
    constructor(a) {
      super(a);
    }
    i() {
      return E(t(this, 2), 0);
    }
    l() {
      return E(t(this, 4), 0);
    }
    m() {
      return G(this, 3);
    }
  }, "var-init");
  var il = cc11001100_hook("il", class extends I {
      constructor(a) {
        super(a, -1, hl);
      }
    }, "var-init"),
    hl = cc11001100_hook("hl", [1, 4, 2, 3], "var-init");
  var ll = cc11001100_hook("ll", class extends I {
      constructor(a) {
        super(a, -1, jl);
      }
      l() {
        return Ab(this, Yk, 13, kl);
      }
      A() {
        return void 0 !== tb(this, Yk, sb(this, kl, 13));
      }
      i() {
        return Ab(this, $k, 14, kl);
      }
      m() {
        return void 0 !== tb(this, $k, sb(this, kl, 14));
      }
    }, "var-init"),
    jl = cc11001100_hook("jl", [19], "var-init"),
    kl = cc11001100_hook("kl", [13, 14], "var-init");
  let ml = cc11001100_hook("ml", void 0, "var-init");
  var pl = cc11001100_hook("pl", (a, b, c = "", d = null) => 1 === b && nl(c, d) ? !0 : ol(a, c, e => Fa(C(e, Sb, 2), f => t(f, 1) === b)), "var-init"),
    nl = cc11001100_hook("nl", (a, b) => !b || G(b, 22) && !T(dh) ? !1 : b.A() ? G(b.l(), 1) : b.m() && "" !== a && 1 === b.i().i().length && b.i().i()[0] === a ? G(b.i().l(), 1) : !1, "var-init"),
    ql = cc11001100_hook("ql", (a, b) => {
      b = cc11001100_hook("b", E(t(b, 18), 0), "assign");
      -1 !== b && (a.tmod = cc11001100_hook("a.tmod", b, "assign"));
    }, "var-init"),
    sl = cc11001100_hook("sl", a => {
      const b = cc11001100_hook("b", Bc(L) || L, "var-init");
      return rl(b, a) ? !0 : ol(L, "", c => Fa(mb(c, 3, !1), d => d === a));
    }, "var-init");
  function rl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", (a = cc11001100_hook("a", (a = cc11001100_hook("a", a.location && a.location.hash, "assign")) && a.match(/forced_clientside_labs=([\d,]+)/), "assign")) && a[1], "assign");
    return !!a && Ia(a.split(","), b.toString());
  }
  function ol(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Bc(a) || a, "assign");
    const d = cc11001100_hook("d", tl(a), "var-init");
    b && (b = cc11001100_hook("b", kd(String(b)), "assign"));
    return ec(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e));
  }
  function tl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", ul(a), "assign");
    const b = cc11001100_hook("b", {}, "var-init");
    J(a, (c, d) => {
      try {
        const e = cc11001100_hook("e", new Ub(c), "var-init");
        b[d] = cc11001100_hook("b[d]", e, "assign");
      } catch (e) {}
    });
    return b;
  }
  var ul = cc11001100_hook("ul", a => T(Pg) ? (Qb(ml, Ob), a = cc11001100_hook("a", Oj({
    s: cc11001100_hook("s", a, "object-key-init"),
    X: cc11001100_hook("X", ml, "object-key-init")
  }), "assign"), null != a.h ? vl(a.h.value) : {}) : vl(a.localStorage), "var-init");
  function vl(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.getItem("google_adsense_settings"), "var-init");
      if (!b) return {};
      const c = cc11001100_hook("c", JSON.parse(b), "var-init");
      return c !== Object(c) ? {} : dc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d));
    } catch (b) {
      return {};
    }
  }
  function wl(a) {
    cc11001100_hook("a", a, "function-parameter");
    T($g) && sj("atf_ad_settings_from_ppabg", {
      p_s: cc11001100_hook("p_s", a, "object-key-init")
    }, .01);
  }
  const xl = cc11001100_hook("xl", a => !!a && (0 < C(a, Hg, 1).length || T(Tg) && 0 < C(a, Cg, 3).length), "var-init");
  var yl = cc11001100_hook("yl", () => {
    const a = cc11001100_hook("a", [], "var-init");
    T(Xg) && a.push(1);
    T(Wg) && a.push(2);
    T(Yg) && a.push(7);
    return a;
  }, "var-init");
  function X(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_ad_modifications || (a.google_ad_modifications = cc11001100_hook("a.google_ad_modifications", {}, "assign"));
    return a.google_ad_modifications;
  }
  function zl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", X(a), "assign");
    const b = cc11001100_hook("b", a.space_collapsing || "none", "var-init");
    return a.remove_ads_by_default ? {
      Ja: cc11001100_hook("Ja", !0, "object-key-init"),
      wb: cc11001100_hook("wb", b, "object-key-init"),
      sa: cc11001100_hook("sa", a.ablation_viewport_offset, "object-key-init")
    } : null;
  }
  function Al(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", X(a), "assign");
    a.had_ads_ablation = cc11001100_hook("a.had_ads_ablation", !0, "assign");
    a.remove_ads_by_default = cc11001100_hook("a.remove_ads_by_default", !0, "assign");
    a.space_collapsing = cc11001100_hook("a.space_collapsing", "slot", "assign");
    a.ablation_viewport_offset = cc11001100_hook("a.ablation_viewport_offset", b, "assign");
  }
  function Bl(a) {
    cc11001100_hook("a", a, "function-parameter");
    X(L).allow_second_reactive_tag = cc11001100_hook("X(L).allow_second_reactive_tag", a, "assign");
  }
  function Cl() {
    const a = cc11001100_hook("a", X(window), "var-init");
    a.afg_slotcar_vars || (a.afg_slotcar_vars = cc11001100_hook("a.afg_slotcar_vars", {}, "assign"));
    return a.afg_slotcar_vars;
  }
  ;
  function Dl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.document.querySelector('meta[name="google-adsense-platform-account"]')?.getAttribute("content") ?? null;
  }
  ;
  function El(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Fl(new Gl(a, b, c, d));
  }
  function Fl(a) {
    cc11001100_hook("a", a, "function-parameter");
    ag($f(Oj({
      s: cc11001100_hook("s", a.s, "object-key-init"),
      X: cc11001100_hook("X", G(a.i, 6), "object-key-init")
    }), b => {
      Hl(a, b, !0);
    }), () => {
      Il(a);
    });
  }
  function Hl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    ag($f(Jl(b), d => {
      Kl("ok");
      a.h(d, {
        fromLocalStorage: cc11001100_hook("fromLocalStorage", !0, "object-key-init")
      });
    }), () => {
      var d = cc11001100_hook("d", a.s, "var-init");
      try {
        b.removeItem("google_ama_config");
      } catch (e) {
        Uk(d, {
          lserr: cc11001100_hook("lserr", 1, "object-key-init")
        });
      }
      c ? Il(a) : a.h(null, null);
    });
  }
  function Il(a) {
    cc11001100_hook("a", a, "function-parameter");
    ag($f(Ll(a), b => {
      a.h(b, {
        fromPABGSettings: cc11001100_hook("fromPABGSettings", !0, "object-key-init")
      });
    }), () => {
      Ml(a);
    });
  }
  function Jl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", (a = cc11001100_hook("a", Xk(a), "assign")) ? Wk(a) ? a : null : null, "assign")) ? Vf(a) : Xf(Error("invlocst"));
  }
  function Ll(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.s, "var-init");
    if ((X(b)?.head_tag_slot_vars?.google_ad_host ?? Dl(b)) && (!G(a.i, 22) || !T(ch))) return Xf(Error("invtag"));
    a: {
      b = cc11001100_hook("b", a.s, "assign");
      var c = cc11001100_hook("c", a.j, "var-init");
      a = cc11001100_hook("a", a.i, "assign");
      if (a?.A()) b = cc11001100_hook("b", a?.l()?.i()?.i(), "assign"), xl(b) ? wl(!1) : b = cc11001100_hook("b", null, "assign");else {
        if (a?.m()) {
          const d = cc11001100_hook("d", a?.i()?.i(), "var-init"),
            e = cc11001100_hook("e", a?.i()?.l()?.i()?.i(), "var-init");
          if (d && 1 === d.length && d[0] === c && xl(e) && F(a, 17) === b.location.host) {
            wl(!0);
            b = cc11001100_hook("b", e, "assign");
            break a;
          }
        }
        b = cc11001100_hook("b", null, "assign");
      }
    }
    b ? (c = cc11001100_hook("c", new Li(), "assign"), a = cc11001100_hook("a", C(b, Hg, 1), "assign"), c = cc11001100_hook("c", yb(c, 1, a), "assign"), a = cc11001100_hook("a", C(b, Di, 2), "assign"), c = cc11001100_hook("c", yb(c, 7, a), "assign"), T(Tg) && 0 < C(b, Cg, 3).length && (a = cc11001100_hook("a", new Eg(), "assign"), b = cc11001100_hook("b", C(b, Cg, 3), "assign"), b = cc11001100_hook("b", yb(a, 1, b), "assign"), wb(c, 6, b)), b = cc11001100_hook("b", Vf(c), "assign")) : b = cc11001100_hook("b", Xf(Error("invtag")), "assign");
    return b;
  }
  function Ml(a) {
    cc11001100_hook("a", a, "function-parameter");
    Sj({
      s: cc11001100_hook("s", a.s, "object-key-init"),
      X: cc11001100_hook("X", G(a.i, 6), "object-key-init"),
      Sa: cc11001100_hook("Sa", 50, "object-key-init"),
      callback: cc11001100_hook("callback", b => {
        Nl(a, b);
      }, "object-key-init")
    });
  }
  function Nl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    ag($f(b, c => {
      Hl(a, c, !1);
    }), c => {
      Kl(c.message);
      a.h(null, null);
    });
  }
  function Kl(a) {
    cc11001100_hook("a", a, "function-parameter");
    sj("abg::amalserr", {
      status: cc11001100_hook("status", a, "object-key-init"),
      guarding: cc11001100_hook("guarding", "true", "object-key-init"),
      timeout: cc11001100_hook("timeout", 50, "object-key-init"),
      rate: cc11001100_hook("rate", .01, "object-key-init")
    }, .01);
  }
  class Gl {
    constructor(a, b, c, d) {
      this.s = cc11001100_hook("this.s", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.h = cc11001100_hook("this.h", d, "assign");
    }
  }
  ;
  var Ql = cc11001100_hook("Ql", (a, b, c, d) => {
    try {
      const e = cc11001100_hook("e", Sk(a, C(c, Di, 7)), "var-init");
      if (e && Qk(e)) {
        t(e, 4) && (d = cc11001100_hook("d", jg(d, new kg(null, {
          google_package: cc11001100_hook("google_package", t(e, 4), "object-key-init")
        })), "assign"));
        const f = cc11001100_hook("f", new mj(a, b, c, e, d), "var-init");
        ji(1E3, () => {
          var g = cc11001100_hook("g", new Qf(), "var-init");
          new ck(a, f, g).start();
          return g.i;
        }, a).then(la(Ol, a), la(Pl, a));
      }
    } catch (e) {
      Uk(a, {
        atf: cc11001100_hook("atf", -1, "object-key-init")
      });
    }
  }, "var-init");
  const Ol = cc11001100_hook("Ol", a => {
      Uk(a, {
        atf: cc11001100_hook("atf", 1, "object-key-init")
      });
    }, "var-init"),
    Pl = cc11001100_hook("Pl", (a, b) => {
      (a.google_ama_state = cc11001100_hook("a.google_ama_state", a.google_ama_state || {}, "assign")).exception = cc11001100_hook("(a.google_ama_state = a.google_ama_state || {}).exception", b, "assign");
      Uk(a, {
        atf: cc11001100_hook("atf", 0, "object-key-init")
      });
    }, "var-init");
  function Rl(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (T(fh)) {
      a.easpi = cc11001100_hook("a.easpi", T(fh), "assign");
      T(nh) && (a.easpa = cc11001100_hook("a.easpa", !0, "assign"));
      a.asntp = cc11001100_hook("a.asntp", 0, "assign");
      a.asntpv = cc11001100_hook("a.asntpv", 0, "assign");
      a.asntpl = cc11001100_hook("a.asntpl", 0, "assign");
      a.asntpm = cc11001100_hook("a.asntpm", 0, "assign");
      a.asntpc = cc11001100_hook("a.asntpc", 1E3, "assign");
      a.asna = cc11001100_hook("a.asna", 5, "assign");
      a.asnd = cc11001100_hook("a.asnd", 5, "assign");
      a.asnp = cc11001100_hook("a.asnp", 5, "assign");
      a.asns = cc11001100_hook("a.asns", 5, "assign");
      T(qh) || (a.asmat = cc11001100_hook("a.asmat", Bh(uh), "assign"));
      a.asptt = cc11001100_hook("a.asptt", -1, "assign");
      a.asro = cc11001100_hook("a.asro", T(yh) ? T(eh) : T(wh), "assign");
      T(vh) && (a.ascet = cc11001100_hook("a.ascet", !0, "assign"));
      T(rh) && (a.asgr = cc11001100_hook("a.asgr", !0, "assign"));
      T(xh) || (a.asrc = cc11001100_hook("a.asrc", !1, "assign"));
      T(ph) && (a.asbu = cc11001100_hook("a.asbu", !0, "assign"));
      T(qh) && (a.aseb = cc11001100_hook("a.aseb", !0, "assign"));
      1 > Bh(sh) && (a.asla = cc11001100_hook("a.asla", Bh(sh), "assign"));
      1 > Bh(oh) && (a.asaa = cc11001100_hook("a.asaa", Bh(oh), "assign"));
      T(zh) && (a.asupm = cc11001100_hook("a.asupm", !0, "assign"));
      var b = cc11001100_hook("b", Bh(th), "var-init");
      0 < b && (a.asmrc = cc11001100_hook("a.asmrc", b, "assign"));
    }
  }
  ;
  Ka || !p("Safari") || xa();
  class Sl {
    constructor() {
      this.promise = cc11001100_hook("this.promise", new Promise(a => {
        this.resolve = cc11001100_hook("this.resolve", a, "assign");
      }), "assign");
    }
  }
  ;
  function Tl() {
    const {
      promise: a,
      resolve: b
    } = cc11001100_hook("", new Sl(), "var-init");
    return {
      promise: cc11001100_hook("promise", a, "object-key-init"),
      resolve: cc11001100_hook("resolve", b, "object-key-init")
    };
  }
  ;
  function Ul(a = () => {}) {
    n.google_llp || (n.google_llp = cc11001100_hook("n.google_llp", {}, "assign"));
    const b = cc11001100_hook("b", n.google_llp, "var-init");
    let c = cc11001100_hook("c", b[7], "var-init");
    if (c) return c;
    c = cc11001100_hook("c", Tl(), "assign");
    b[7] = cc11001100_hook("b[7]", c, "assign");
    a();
    return c;
  }
  function Vl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Ul(() => {
      Cc(n.document, a);
    }).promise;
  }
  ;
  var Wl = cc11001100_hook("Wl", a => {
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
      ci[e] && "google_ad_client" !== e && (c[e] = cc11001100_hook("c[e]", d, "assign"));
    });
    c.google_pgb_reactive = cc11001100_hook("c.google_pgb_reactive", 7, "assign");
    Rl(c);
    if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = cc11001100_hook("c.google_ad_section", a.google_ad_section || a.google_ad_region, "assign");
    return b;
  }, "var-init");
  function Xl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return da(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive;
  }
  ;
  var $l = cc11001100_hook("$l", (a, b) => {
    X(L).ama_ran_on_page || ji(1001, () => Yl(new Zl(a, b)), n);
  }, "var-init");
  function Yl(a) {
    cc11001100_hook("a", a, "function-parameter");
    El(a.h, a.j, a.i.google_ad_client || "", (b, c) => {
      var d = cc11001100_hook("d", a.h, "var-init"),
        e = cc11001100_hook("e", a.i, "var-init");
      X(L).ama_ran_on_page || b && am(d, e, b, c);
    });
  }
  class Zl {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", n, "assign");
      this.i = cc11001100_hook("this.i", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
  }
  function am(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    d && (oi(a).configSourceInAbg = cc11001100_hook("oi(a).configSourceInAbg", d, "assign"));
    void 0 !== tb(c, Ii, 24, !1) && (d = cc11001100_hook("d", pi(a), "assign"), d.availableAbg = cc11001100_hook("d.availableAbg", !0, "assign"), d.ablationFromStorage = cc11001100_hook("d.ablationFromStorage", !!B(c, Ii, 24)?.i()?.i(), "assign"));
    if (Xl(b) && (d = cc11001100_hook("d", Sk(a, C(c, Di, 7)), "assign"), !d || !nb(d, 8))) return;
    X(L).ama_ran_on_page = cc11001100_hook("X(L).ama_ran_on_page", !0, "assign");
    B(c, ui, 15)?.i() && (X(a).enable_overlap_observer = cc11001100_hook("X(a).enable_overlap_observer", !0, "assign"));
    var e = cc11001100_hook("e", B(c, ti, 13), "var-init");
    e && 1 === t(e, 1) ? (d = cc11001100_hook("d", 0, "assign"), (e = cc11001100_hook("e", B(e, si, 6), "assign")) && t(e, 3) && (d = cc11001100_hook("d", t(e, 3) || 0, "assign")), Al(a, d)) : B(c, Ii, 24)?.i()?.i() && (pi(a).ablatingThisPageview = cc11001100_hook("pi(a).ablatingThisPageview", !0, "assign"), Al(a, 1));
    cd(3, [c.toJSON()]);
    const f = cc11001100_hook("f", b.google_ad_client || "", "var-init");
    b = cc11001100_hook("b", Vk(da(b.enable_page_level_ads) ? b.enable_page_level_ads : {}), "assign");
    const g = cc11001100_hook("g", jg(ng, new kg(null, b)), "var-init");
    rj(782, () => {
      Ql(a, f, c, g);
    });
  }
  ;
  var bm = cc11001100_hook("bm", {
      google_ad_modifications: cc11001100_hook("google_ad_modifications", !0, "object-key-init"),
      google_analytics_domain_name: cc11001100_hook("google_analytics_domain_name", !0, "object-key-init"),
      google_analytics_uacct: cc11001100_hook("google_analytics_uacct", !0, "object-key-init"),
      google_pause_ad_requests: cc11001100_hook("google_pause_ad_requests", !0, "object-key-init"),
      google_user_agent_client_hint: cc11001100_hook("google_user_agent_client_hint", !0, "object-key-init")
    }, "var-init"),
    cm = cc11001100_hook("cm", a => (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) && (a = cc11001100_hook("a", a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/), "assign")) && RegExp("google_ad_client").test(a[1]) ? a[1] : null, "var-init"),
    dm = cc11001100_hook("dm", a => {
      if (a = cc11001100_hook("a", a.innerText || a.innerHTML, "assign")) if (a = cc11001100_hook("a", a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), "assign"), (a = cc11001100_hook("a", a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i), "assign")) && RegExp("google_ad_client").test(a[1])) return a[1];
      return null;
    }, "var-init"),
    em = cc11001100_hook("em", a => {
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
  function fm(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.google_ad_client) var b = cc11001100_hook("b", String(a.google_ad_client), "var-init");else {
      if (null == (b = cc11001100_hook("b", X(a).head_tag_slot_vars?.google_ad_client ?? a.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"), "assign"))) {
        b: {
          b = cc11001100_hook("b", a.document.getElementsByTagName("script"), "assign");
          a = cc11001100_hook("a", a.navigator && a.navigator.userAgent || "", "assign");
          a = cc11001100_hook("a", RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !jd() ? cm : dm, "assign");
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
          for (c = cc11001100_hook("c", {}, "assign"); d = cc11001100_hook("d", a.exec(b), "assign");) c[d[1]] = cc11001100_hook("c[d[1]]", em(d[2]), "assign");
          b = cc11001100_hook("b", c, "assign");
          b = cc11001100_hook("b", b.google_ad_client ? b.google_ad_client : "", "assign");
        } else b = cc11001100_hook("b", "", "assign");
      }
      b = cc11001100_hook("b", b ?? "", "assign");
    }
    return b;
  }
  ;
  async function gm(a, b) {
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
  function hm(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.state.pc, "var-init");
    return null !== b && 0 !== b ? b : a.state.pc = cc11001100_hook("a.state.pc", Tc(a.s), "assign");
  }
  function im(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.state.wpc, "var-init");
    return null !== b && "" !== b ? b : a.state.wpc = cc11001100_hook("a.state.wpc", fm(a.s), "assign");
  }
  function jm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new re(), "var-init");
    var d = cc11001100_hook("d", hm(a), "var-init");
    c = cc11001100_hook("c", A(c, 1, d, 0), "assign");
    d = cc11001100_hook("d", im(a), "assign");
    c = cc11001100_hook("c", A(c, 2, d, ""), "assign");
    c = cc11001100_hook("c", A(c, 3, a.state.sd, 0), "assign");
    return A(c, 7, Math.round(b || a.s.performance.now()), 0);
  }
  async function km(a) {
    cc11001100_hook("a", a, "function-parameter");
    await gm(a.s, () => !(!hm(a) || !im(a)));
  }
  async function lm() {
    var a = cc11001100_hook("a", M(mm), "var-init");
    if (a.i && !a.state.le.includes(1)) {
      a.state.le.push(1);
      var b = cc11001100_hook("b", a.s.performance.now(), "var-init");
      await km(a);
      var c = cc11001100_hook("c", ke(le(new ne(), ie(he(new je(), P(a.s).scrollWidth), P(a.s).scrollHeight)), ie(he(new je(), P(a.s).clientWidth), P(a.s).clientHeight)), "var-init"),
        d = cc11001100_hook("d", Ih(a.s), "var-init");
      0 !== d && me(c, fe(new ge(), d));
      Oe(a.h, pe(jm(a, b), c));
      cf(a.h, a.s, () => {
        var e = cc11001100_hook("e", a.h, "var-init");
        var f = cc11001100_hook("f", jm(a), "var-init");
        var g = cc11001100_hook("g", new oe(), "var-init");
        f = cc11001100_hook("f", xb(f, 8, qe, g), "assign");
        Oe(e, f);
      });
    }
  }
  async function nm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a.i && c.length && !a.state.lgdp.includes(Number(b))) {
      a.state.lgdp.push(Number(b));
      var d = cc11001100_hook("d", a.s.performance.now(), "var-init");
      await km(a);
      var e = cc11001100_hook("e", a.h, "var-init");
      a = cc11001100_hook("a", jm(a, d), "assign");
      d = cc11001100_hook("d", new ee(), "assign");
      b = cc11001100_hook("b", A(d, 1, b, 0), "assign");
      c = cc11001100_hook("c", pb(b, 2, c), "assign");
      c = cc11001100_hook("c", xb(a, 9, qe, c), "assign");
      Oe(e, c);
    }
  }
  var mm = cc11001100_hook("mm", class {
    constructor(a) {
      this.s = cc11001100_hook("this.s", ed() || window, "assign");
      this.h = cc11001100_hook("this.h", a ?? new ef(100, 100, !0), "assign");
      this.state = cc11001100_hook("this.state", Bj(wj(), 33, () => {
        const b = cc11001100_hook("b", Bh(Qg), "var-init");
        return {
          sd: cc11001100_hook("sd", b, "object-key-init"),
          ssp: cc11001100_hook("ssp", 0 < b && Ic() < 1 / b, "object-key-init"),
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
  function om(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
  }
  function pm(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", L.document, "var-init");
    if (b.currentScript) return om(b.currentScript, a);
    for (const c of b.scripts) if (0 === om(c, a)) return 0;
    return 1;
  }
  ;
  function qm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      [3]: {
        [55]: cc11001100_hook(55, () => 0 === a, "object-key-init"),
        [23]: cc11001100_hook(23, c => pl(L, Number(c)), "object-key-init"),
        [24]: cc11001100_hook(24, c => sl(Number(c)), "object-key-init"),
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
            const g = cc11001100_hook("g", Hc() ? null : Math.floor(1E3 * Ic()), "var-init");
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
  function rm(a = n) {
    return a.ggeac || (a.ggeac = cc11001100_hook("a.ggeac", {}, "assign"));
  }
  ;
  function sm() {
    var a = cc11001100_hook("a", M(Ah).l(ih.h, ih.defaultValue), "var-init"),
      b = cc11001100_hook("b", L.document, "var-init");
    if (a.length && b.head) for (const d of a) if ((a = cc11001100_hook("a", d, "assign")) && b.head) {
      var c = cc11001100_hook("c", Dc("META"), "var-init");
      b.head.appendChild(c);
      c.httpEquiv = cc11001100_hook("c.httpEquiv", "origin-trial", "assign");
      c.content = cc11001100_hook("c.content", a, "assign");
    }
  }
  function tm(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return !!b.featurePolicy?.features().includes(a);
  }
  function um(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  ;
  function vm(a, b) {
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
  var wm = cc11001100_hook("wm", {
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
      [6]: cc11001100_hook(6, a => Ia(M(Hf).i(), Number(a)), "object-key-init"),
      [27]: cc11001100_hook(27, a => {
        a = cc11001100_hook("a", vm(a, "boolean"), "assign");
        return void 0 !== a ? a : void 0;
      }, "object-key-init"),
      [60]: cc11001100_hook(60, a => {
        try {
          return !!n.document.querySelector(a);
        } catch {}
      }, "object-key-init"),
      [69]: cc11001100_hook(69, a => tm(a, n.document), "object-key-init"),
      [70]: cc11001100_hook(70, a => um(a, n.document), "object-key-init")
    },
    [4]: {
      [3]: cc11001100_hook(3, () => Pc(), "object-key-init"),
      [6]: cc11001100_hook(6, a => {
        a = cc11001100_hook("a", vm(a, "number"), "assign");
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
        a = cc11001100_hook("a", vm(a, "string"), "assign");
        return void 0 !== a ? a : void 0;
      }, "object-key-init")
    }
  }, "var-init");
  const xm = cc11001100_hook("xm", [12, 13, 20], "var-init");
  function ym(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", M(kf).G, "var-init");
    if (!Wd(B(b, Pd, 3), e)) return null;
    var f = cc11001100_hook("f", C(b, bl, 2), "var-init"),
      g = cc11001100_hook("g", H(b, 6), "var-init");
    if (g) {
      qb(d, 1, we, g);
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
      return (b = cc11001100_hook("b", zm(b, c), "assign")) ? Am(a, [b], 1) : null;
    }
    if (g = cc11001100_hook("g", H(b, 10), "assign")) {
      qb(d, 2, we, g);
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
      return (b = cc11001100_hook("b", zm(b, c), "assign")) ? Am(a, [b], 1) : null;
    }
    d = cc11001100_hook("d", e ? Ca(f, k => Wd(B(k, Pd, 3), e)) : f, "assign");
    if (!d.length) return null;
    c = cc11001100_hook("c", d.length * E(t(b, 1), 0), "assign");
    return (b = cc11001100_hook("b", H(b, 4), "assign")) ? Bm(a, b, c, d) : Am(a, d, c / 1E3);
  }
  function Cm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.Z[c] || (a.Z[c] = cc11001100_hook("a.Z[c]", [], "assign"));
    a = cc11001100_hook("a", a.Z[c], "assign");
    Ia(a, b) || a.push(b);
  }
  function Dm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", Em(a.i, b), "var-init");
    var f;
    if (f = cc11001100_hook("f", 9 !== b, "assign")) a.j[b] ? f = cc11001100_hook("f", !0, "assign") : (a.j[b] = cc11001100_hook("a.j[b]", !0, "assign"), f = cc11001100_hook("f", !1, "assign"));
    if (f) return gf(a.J, b, c, d, [], 4), d;
    if (!e.length) return gf(a.J, b, c, d, [], 3), d;
    const g = cc11001100_hook("g", Ia(xm, b), "var-init"),
      h = cc11001100_hook("h", [], "var-init");
    Ba(e, k => {
      var l = cc11001100_hook("l", new ve(), "var-init");
      if (k = cc11001100_hook("k", ym(a, k, c, l), "assign")) 0 !== rb(l, we) && h.push(l), l = cc11001100_hook("l", k.getId(), "assign"), d.push(l), Cm(a, l, g ? 4 : c), (k = cc11001100_hook("k", C(k, ae, 2), "assign")) && (g ? yf(k, Af(), a.J, l) : yf(k, [c], a.J, l));
    });
    gf(a.J, b, c, d, h, 1);
    return d;
  }
  function Fm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.i.push(...Ca(Da(b, c => new fl(c)), c => !Ia(xm, H(c, 1))));
  }
  function Am(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.h, "var-init"),
      e = cc11001100_hook("e", Ga(b, f => !!d[f.getId()]), "var-init");
    return e ? e : a.la ? null : Fc(b, c);
  }
  function Bm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", null != a.ha[b] ? a.ha[b] : 1E3, "var-init");
    if (0 >= e) return null;
    d = cc11001100_hook("d", Am(a, d, c / e), "assign");
    a.ha[b] = cc11001100_hook("a.ha[b]", d ? 0 : e - c, "assign");
    return d;
  }
  function Gm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    N(1, c => {
      a.h[c] = cc11001100_hook("a.h[c]", !0, "assign");
    }, b);
    N(2, (c, d) => Dm(a, c, d), b);
    N(3, c => (a.Z[c] || []).concat(a.Z[4]), b);
    N(12, c => void Fm(a, c), b);
    N(16, (c, d) => void Cm(a, c, d), b);
  }
  var Hm = cc11001100_hook("Hm", class {
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
      (a = cc11001100_hook("a", Ad(), "assign")) && Ba(a.split(",") || [], g => {
        (g = cc11001100_hook("g", Number(g), "assign")) && (this.h[g] = cc11001100_hook("this.h[g]", !0, "assign"));
      });
      Ba(e, g => {
        this.h[g] = cc11001100_hook("this.h[g]", !0, "assign");
      });
      return this;
    }
  }, "var-init");
  function Em(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (a = cc11001100_hook("a", Ga(a, c => H(c, 1) === b), "assign")) && C(a, dl, 2) || [];
  }
  function zm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", C(a, bl, 2), "var-init"),
      d = cc11001100_hook("d", c.length, "var-init"),
      e = cc11001100_hook("e", E(t(a, 8), 0), "var-init");
    a = cc11001100_hook("a", d * E(t(a, 1), 0) - 1, "assign");
    b = cc11001100_hook("b", void 0 !== b ? b : Math.floor(1E3 * Ic()), "assign");
    d = cc11001100_hook("d", (b - e) % d, "assign");
    if (b < e || b - e - d >= a) return null;
    c = cc11001100_hook("c", c[d], "assign");
    e = cc11001100_hook("e", M(kf).G, "assign");
    return !c || e && !Wd(B(c, Pd, 3), e) ? null : c;
  }
  ;
  function Im(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.h = cc11001100_hook("a.h", Cf(14, b, () => {}), "assign");
  }
  class Jm {
    constructor() {
      this.h = cc11001100_hook("this.h", () => {}, "assign");
    }
  }
  function Km(a) {
    cc11001100_hook("a", a, "function-parameter");
    M(Jm).h(a);
  }
  ;
  function Lm({
    eb: a,
    G: b,
    bb: c,
    Xa: d = rm(),
    Ya: e = 0,
    J: f = new jf(B(a, gl, 5)?.i() ?? 0, B(a, gl, 5)?.l() ?? 0, B(a, gl, 5)?.m() ?? !1)
  }) {
    d.hasOwnProperty("init-done") ? (Cf(12, d, () => {})(Da(C(a, fl, 2), g => g.toJSON())), Cf(13, d, () => {})(Da(C(a, ae, 1), g => g.toJSON()), e), b && Cf(14, d, () => {})(b), Mm(e, d)) : (Gm(M(Hm).init(C(a, fl, 2), e, f, c), d), Df(d), Ef(d), Ff(d), Mm(e, d), yf(C(a, ae, 1), [e], f, void 0, !0), lf = cc11001100_hook("lf", lf || !(!c || !c.ib), "assign"), Km(wm), b && Km(b));
  }
  function Mm(a, b = rm()) {
    cc11001100_hook("a", a, "function-parameter");
    Gf(M(Hf), b, a);
    Nm(b, a);
    Im(M(Jm), b);
    M(Ah).m();
  }
  function Nm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", M(Ah), "var-init");
    c.h = cc11001100_hook("c.h", (d, e) => Cf(5, a, () => !1)(d, e, b), "assign");
    c.i = cc11001100_hook("c.i", (d, e) => Cf(6, a, () => 0)(d, e, b), "assign");
    c.j = cc11001100_hook("c.j", (d, e) => Cf(7, a, () => "")(d, e, b), "assign");
    c.l = cc11001100_hook("c.l", (d, e) => Cf(8, a, () => [])(d, e, b), "assign");
    c.m = cc11001100_hook("c.m", () => {
      Cf(15, a, () => {})(b);
    }, "assign");
  }
  ;
  function Om(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", M(Hf).l(a), "var-init");
    a = cc11001100_hook("a", nm(M(mm), a, b), "assign");
    Jf.ca(1085, a);
  }
  var Pm = cc11001100_hook("Pm", (a, b, c) => {
    var d = cc11001100_hook("d", X(a), "var-init");
    if (d.plle) Mm(1, rm(a));else {
      d.plle = cc11001100_hook("d.plle", !0, "assign");
      d = cc11001100_hook("d", B(b, il, 12), "assign");
      var e = cc11001100_hook("e", G(b, 9), "var-init");
      Lm({
        eb: cc11001100_hook("eb", d, "object-key-init"),
        G: cc11001100_hook("G", qm(c, b), "object-key-init"),
        bb: {
          la: cc11001100_hook("la", e && !!a.google_disable_experiments, "object-key-init"),
          ib: cc11001100_hook("ib", e, "object-key-init")
        },
        Xa: cc11001100_hook("Xa", rm(a), "object-key-init"),
        Ya: cc11001100_hook("Ya", 1, "object-key-init")
      });
      if (c = cc11001100_hook("c", F(b, 15), "assign")) c = cc11001100_hook("c", Number(c), "assign"), M(Hf).j(c);
      for (const f of mb(b, 19)) b = cc11001100_hook("b", f, "assign"), M(Hf).h(b);
      Om(12);
      Om(10);
      a = cc11001100_hook("a", Bc(a) || a, "assign");
      cj(a.location, "google_mc_lab") && M(Hf).h(44738307);
      cj(a.location, "google_auto_storify_swipeable") && M(Hf).h(44773747);
      cj(a.location, "google_auto_storify_scrollable") && M(Hf).h(44773746);
      cj(a.location, "google_pga_monetization") && M(Hf).h(44779794);
    }
  }, "var-init");
  var Qm = cc11001100_hook("Qm", {
    "120x90": cc11001100_hook("120x90", !0, "object-key-init"),
    "160x90": cc11001100_hook("160x90", !0, "object-key-init"),
    "180x90": cc11001100_hook("180x90", !0, "object-key-init"),
    "200x90": cc11001100_hook("200x90", !0, "object-key-init"),
    "468x15": cc11001100_hook("468x15", !0, "object-key-init"),
    "728x15": cc11001100_hook("728x15", !0, "object-key-init")
  }, "var-init");
  function Rm(a, b) {
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
  function Sm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => !!(b.ja & a);
  }
  class Y extends Vh {
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
  const Tm = cc11001100_hook("Tm", {
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
    Um = cc11001100_hook("Um", {
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
    Vm = cc11001100_hook("Vm", {
      pub_control_image_stacked: cc11001100_hook("pub_control_image_stacked", 100, "object-key-init"),
      pub_control_image_sidebyside: cc11001100_hook("pub_control_image_sidebyside", 200, "object-key-init"),
      pub_control_image_card_stacked: cc11001100_hook("pub_control_image_card_stacked", 150, "object-key-init"),
      pub_control_image_card_sidebyside: cc11001100_hook("pub_control_image_card_sidebyside", 250, "object-key-init"),
      pub_control_text: cc11001100_hook("pub_control_text", 100, "object-key-init"),
      pub_control_text_card: cc11001100_hook("pub_control_text_card", 150, "object-key-init")
    }, "var-init");
  function Wm(a) {
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
  function Xm(a) {
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
  const Ym = cc11001100_hook("Ym", Ja("script"), "var-init");
  function Zm(a, b, c) {
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
    b = cc11001100_hook("b", Bc(window) || window, "assign");
    cj(b.location, "google_responsive_dummy_ad") && (Ia([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.h) && 2 !== a.h && (a = cc11001100_hook("a", JSON.stringify({
      googMsgType: cc11001100_hook("googMsgType", "adpnt", "object-key-init"),
      key_value: cc11001100_hook("key_value", [{
        key: cc11001100_hook("key", "qid", "object-key-init"),
        value: cc11001100_hook("value", "DUMMY_AD", "object-key-init")
      }], "object-key-init")
    }), "assign"), c.dash = cc11001100_hook("c.dash", `<${Ym}>window.top.postMessage('${a}', '*'); 
          </${Ym}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`, "assign"));
  }
  class $m {
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
  const an = cc11001100_hook("an", ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"], "var-init");
  var bn = cc11001100_hook("bn", class extends Vh {
      h(a) {
        return Math.min(1200, Math.max(this.M, Math.round(a)));
      }
    }, "var-init"),
    en = cc11001100_hook("en", (a, b) => {
      cn(a, b);
      if ("pedestal" == b.google_content_recommendation_ui_type) return new $m(9, new bn(a, Math.floor(a * b.google_phwr)));
      var c = cc11001100_hook("c", vc(), "var-init");
      468 > a ? c ? (c = cc11001100_hook("c", a - 8 - 8, "assign"), c = cc11001100_hook("c", Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Tm.mobile_banner_image_sidebyside + Um.mobile_banner_image_sidebyside) + 96), "assign"), a = cc11001100_hook("a", {
        ea: cc11001100_hook("ea", a, "object-key-init"),
        da: cc11001100_hook("da", c, "object-key-init"),
        N: cc11001100_hook("N", 1, "object-key-init"),
        O: cc11001100_hook("O", 12, "object-key-init"),
        V: cc11001100_hook("V", "mobile_banner_image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", Xm(a), "assign"), a = cc11001100_hook("a", {
        ea: cc11001100_hook("ea", a.width, "object-key-init"),
        da: cc11001100_hook("da", a.height, "object-key-init"),
        N: cc11001100_hook("N", 1, "object-key-init"),
        O: cc11001100_hook("O", 13, "object-key-init"),
        V: cc11001100_hook("V", "image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", Xm(a), "assign"), a = cc11001100_hook("a", {
        ea: cc11001100_hook("ea", a.width, "object-key-init"),
        da: cc11001100_hook("da", a.height, "object-key-init"),
        N: cc11001100_hook("N", 4, "object-key-init"),
        O: cc11001100_hook("O", 2, "object-key-init"),
        V: cc11001100_hook("V", "image_stacked", "object-key-init")
      }, "assign"));
      dn(b, a);
      return new $m(9, new bn(a.ea, a.da));
    }, "var-init"),
    fn = cc11001100_hook("fn", (a, b) => {
      cn(a, b);
      var c = cc11001100_hook("c", Wm({
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
        var f = cc11001100_hook("f", Vm[e], "var-init");
        let g = cc11001100_hook("g", c.N[d], "var-init");
        for (; a / g < f && 1 < g;) g--;
        f = cc11001100_hook("f", g, "assign");
        d = cc11001100_hook("d", c.O[d], "assign");
        c = cc11001100_hook("c", Math.floor(((a - 8 * f - 8) / f * Tm[e] + Um[e]) * d + 8 * d + 8), "assign");
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
      dn(b, a);
      return new $m(9, new bn(a.ea, a.da));
    }, "var-init");
  function cn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) throw new U("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
  }
  function dn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.google_content_recommendation_ui_type = cc11001100_hook("a.google_content_recommendation_ui_type", b.V, "assign");
    a.google_content_recommendation_columns_num = cc11001100_hook("a.google_content_recommendation_columns_num", b.N, "assign");
    a.google_content_recommendation_rows_num = cc11001100_hook("a.google_content_recommendation_rows_num", b.O, "assign");
  }
  ;
  class gn extends Vh {
    h() {
      return this.M;
    }
    i(a, b, c) {
      Uh(a, c);
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const hn = cc11001100_hook("hn", {
    "image-top": cc11001100_hook("image-top", a => 600 >= a ? 284 + .414 * (a - 250) : 429, "object-key-init"),
    "image-middle": cc11001100_hook("image-middle", a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500), "object-key-init"),
    "image-side": cc11001100_hook("image-side", a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500), "object-key-init"),
    "text-only": cc11001100_hook("text-only", a => 500 >= a ? 187 - .228 * (a - 250) : 130, "object-key-init"),
    "in-article": cc11001100_hook("in-article", a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200, "object-key-init")
  }, "var-init");
  var jn = cc11001100_hook("jn", class extends Vh {
      h() {
        return Math.min(1200, this.M);
      }
    }, "var-init"),
    kn = cc11001100_hook("kn", (a, b, c, d, e) => {
      var f = cc11001100_hook("f", e.google_ad_layout || "image-top", "var-init");
      if ("in-article" == f) {
        var g = cc11001100_hook("g", a, "var-init");
        if ("false" == e.google_full_width_responsive) a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", Ph(b, c, g, .2, e), "assign"), !0 !== a) e.gfwrnwer = cc11001100_hook("e.gfwrnwer", a, "assign"), a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", P(b).clientWidth, "assign")) {
          if (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), c.parentElement) {
            b: {
              g = cc11001100_hook("g", c, "assign");
              for (let h = cc11001100_hook("h", 0, "var-init"); 100 > h && g.parentElement; ++h) {
                const k = cc11001100_hook("k", g.parentElement.childNodes, "var-init");
                for (let l = cc11001100_hook("l", 0, "var-init"); l < k.length; ++l) {
                  const m = cc11001100_hook("m", k[l], "var-init");
                  if (m != g && Sh(b, m)) break b;
                }
                g = cc11001100_hook("g", g.parentElement, "assign");
                g.style.width = cc11001100_hook("g.style.width", "100%", "assign");
                g.style.height = cc11001100_hook("g.style.height", "auto", "assign");
              }
            }
            Uh(b, c);
          } else a = cc11001100_hook("a", g, "assign");
        } else a = cc11001100_hook("a", g, "assign");
      }
      if (250 > a) throw new U("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
      a = cc11001100_hook("a", Math.min(1200, Math.floor(a)), "assign");
      if (d && "in-article" != f) {
        f = cc11001100_hook("f", Math.ceil(d), "assign");
        if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
        return new $m(11, new Vh(a, f));
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
        return new $m(11, new Vh(a, f));
      }
      d = cc11001100_hook("d", hn[f], "assign");
      if (!d) throw new U("Invalid data-ad-layout value: " + f);
      c = cc11001100_hook("c", Yh(c, b), "assign");
      b = cc11001100_hook("b", P(b).clientWidth, "assign");
      b = cc11001100_hook("b", "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a)), "assign");
      return new $m(11, "in-article" == f ? new jn(a, b) : new Vh(a, b));
    }, "var-init");
  var ln = cc11001100_hook("ln", a => b => {
      for (let c = cc11001100_hook("c", a.length - 1, "var-init"); 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    }, "var-init"),
    nn = cc11001100_hook("nn", (a, b) => {
      var c = cc11001100_hook("c", mn.slice(0), "var-init");
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
    mn = cc11001100_hook("mn", [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]], "var-init");
  var pn = cc11001100_hook("pn", (a, b, c, d, e) => {
      "false" == e.google_full_width_responsive ? c = cc11001100_hook("c", {
        D: cc11001100_hook("D", a, "object-key-init"),
        F: cc11001100_hook("F", 1, "object-key-init")
      }, "assign") : "autorelaxed" == b && e.google_full_width_responsive || on(b) || e.google_ad_resize ? (b = cc11001100_hook("b", Qh(a, c, d, e), "assign"), c = cc11001100_hook("c", !0 !== b ? {
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
    sn = cc11001100_hook("sn", (a, b, c, d, e) => {
      const {
        D: f,
        F: g
      } = cc11001100_hook("", rj(247, () => pn(a, b, c, d, e)), "var-init");
      var h = cc11001100_hook("h", !0 === g, "var-init");
      const k = cc11001100_hook("k", K(d.style.width), "var-init"),
        l = cc11001100_hook("l", K(d.style.height), "var-init"),
        {
          ba: m,
          Y: u,
          ra: v,
          Oa: w
        } = cc11001100_hook("", qn(f, b, c, d, e, h), "var-init");
      h = cc11001100_hook("h", rn(b, v), "assign");
      var y;
      const D = cc11001100_hook("D", (y = cc11001100_hook("y", Wh(d, c, "marginLeft", K), "assign")) ? y + "px" : "", "var-init"),
        va = cc11001100_hook("va", (y = cc11001100_hook("y", Wh(d, c, "marginRight", K), "assign")) ? y + "px" : "", "var-init");
      y = cc11001100_hook("y", Wh(d, c, "zIndex") || "", "assign");
      return new $m(h, m, v, null, w, g, u, D, va, l, k, y);
    }, "var-init"),
    on = cc11001100_hook("on", a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a), "var-init"),
    qn = cc11001100_hook("qn", (a, b, c, d, e, f) => {
      b = cc11001100_hook("b", "auto" == b ? .25 >= a / Math.min(1200, P(c).clientWidth) ? 4 : 3 : Oh(b), "assign");
      let g;
      var h = cc11001100_hook("h", !1, "var-init");
      let k = cc11001100_hook("k", !1, "var-init");
      var l = cc11001100_hook("l", 488 > P(c).clientWidth, "var-init");
      if (l) {
        g = cc11001100_hook("g", Jh(d, c), "assign");
        var m = cc11001100_hook("m", Yh(d, c), "var-init");
        h = cc11001100_hook("h", !m && g, "assign");
        k = cc11001100_hook("k", m && g, "assign");
      }
      m = cc11001100_hook("m", [Xh(a), Sm(b)], "assign");
      m.push($h(l, c, d, k));
      null != e.google_max_responsive_height && m.push(ai(e.google_max_responsive_height));
      l = cc11001100_hook("l", [y => !y.jb], "assign");
      if (h || k) h = cc11001100_hook("h", bi(c, d), "assign"), l.push(ai(h));
      let u = cc11001100_hook("u", nn(ln(m), ln(l)), "var-init");
      if (!u) throw new U("No slot size for availableWidth=" + a);
      const {
        ba: v,
        Y: w
      } = cc11001100_hook("", rj(248, () => {
        var y;
        a: if (f) {
          if (e.gfwrnh && (y = cc11001100_hook("y", K(e.gfwrnh), "assign"))) {
            y = cc11001100_hook("y", {
              ba: cc11001100_hook("ba", new gn(a, y), "object-key-init"),
              Y: cc11001100_hook("Y", !0, "object-key-init")
            }, "assign");
            break a;
          }
          y = cc11001100_hook("y", a / 1.2, "assign");
          var D = cc11001100_hook("D", Math, "var-init");
          var va = cc11001100_hook("va", D.min, "var-init");
          if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var R = cc11001100_hook("R", Infinity, "var-init");else {
            R = cc11001100_hook("R", d, "assign");
            let ma = cc11001100_hook("ma", Infinity, "var-init");
            do {
              var wa = cc11001100_hook("wa", Wh(R, c, "height", K), "var-init");
              wa && (ma = cc11001100_hook("ma", Math.min(ma, wa), "assign"));
              (wa = cc11001100_hook("wa", Wh(R, c, "maxHeight", K), "assign")) && (ma = cc11001100_hook("ma", Math.min(ma, wa), "assign"));
            } while ((R = cc11001100_hook("R", R.parentElement, "assign")) && "HTML" != R.tagName);
            R = cc11001100_hook("R", ma, "assign");
          }
          D = cc11001100_hook("D", va.call(D, y, R), "assign");
          if (D < .5 * y || 100 > D) D = cc11001100_hook("D", y, "assign");
          y = cc11001100_hook("y", {
            ba: cc11001100_hook("ba", new gn(a, Math.floor(D)), "object-key-init"),
            Y: cc11001100_hook("Y", D < y ? 102 : !0, "object-key-init")
          }, "assign");
        } else y = cc11001100_hook("y", {
          ba: cc11001100_hook("ba", u, "object-key-init"),
          Y: cc11001100_hook("Y", 100, "object-key-init")
        }, "assign");
        return y;
      }), "var-init");
      return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
        ba: cc11001100_hook("ba", tn(a, c, d, v, e), "object-key-init"),
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
  const rn = cc11001100_hook("rn", (a, b) => {
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
    tn = cc11001100_hook("tn", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", e.google_ad_height || Wh(c, b, "height", K), "var-init");
      b = cc11001100_hook("b", kn(a, b, c, f, e).size(), "assign");
      return b.M * b.height() > a * d.height() ? new Y(b.M, b.height(), 1) : d;
    }, "var-init");
  var un = cc11001100_hook("un", (a, b, c, d, e) => {
    var f;
    (f = cc11001100_hook("f", P(b).clientWidth, "assign")) ? 488 > P(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), Uh(b, c), f = cc11001100_hook("f", {
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
    if (!0 !== h || a == g) return new $m(12, new Vh(a, d), null, null, !0, h, 100);
    const {
      ba: k,
      Y: l,
      ra: m
    } = cc11001100_hook("", qn(g, "auto", b, c, e, !0), "var-init");
    return new $m(1, k, m, 2, !0, h, l);
  }, "var-init");
  var wn = cc11001100_hook("wn", (a, b) => {
      const c = cc11001100_hook("c", b.google_ad_format, "var-init");
      if ("autorelaxed" == c) {
        a: {
          if ("pedestal" != b.google_content_recommendation_ui_type) for (const d of an) if (null != b[d]) {
            a = cc11001100_hook("a", !0, "assign");
            break a;
          }
          a = cc11001100_hook("a", !1, "assign");
        }
        return a ? 9 : 5;
      }
      if (on(c)) return 1;
      if ("link" === c) return 4;
      if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (vn(b), 1);
      if (27 === b.google_reactive_ad_format) return vn(b), 1;
    }, "var-init"),
    yn = cc11001100_hook("yn", (a, b, c, d, e = !1) => {
      e = cc11001100_hook("e", b.offsetWidth || (c.google_ad_resize || e) && Wh(b, d, "width", K) || c.google_ad_width || 0, "assign");
      4 === a && (c.google_ad_format = cc11001100_hook("c.google_ad_format", "auto", "assign"), a = cc11001100_hook("a", 1, "assign"));
      var f = cc11001100_hook("f", (f = cc11001100_hook("f", xn(a, e, b, c, d), "assign")) ? f : sn(e, c.google_ad_format, d, b, c), "var-init");
      f.size().i(d, c, b);
      Zm(f, e, c);
      1 != a && (a = cc11001100_hook("a", f.size().height(), "assign"), b.style.height = cc11001100_hook("b.style.height", a + "px", "assign"));
    }, "var-init");
  const xn = cc11001100_hook("xn", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", d.google_ad_height || Wh(c, e, "height", K), "var-init");
      switch (a) {
        case 5:
          const {
            D: g,
            F: h
          } = cc11001100_hook("", rj(247, () => pn(b, d.google_ad_format, e, c, d)), "var-init");
          !0 === h && b != g && Uh(e, c);
          !0 === h ? d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !0, "assign") : (d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !1, "assign"), d.gfwrnwer = cc11001100_hook("d.gfwrnwer", h, "assign"));
          return en(g, d);
        case 9:
          return fn(b, d);
        case 8:
          return kn(b, e, c, f, d);
        case 10:
          return un(b, e, c, f, d);
      }
    }, "var-init"),
    vn = cc11001100_hook("vn", a => {
      a.google_ad_format = cc11001100_hook("a.google_ad_format", "auto", "assign");
      a.armr = cc11001100_hook("a.armr", 3, "assign");
    }, "var-init");
  function zn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Bc(b), "var-init");
    if (c) {
      c = cc11001100_hook("c", P(c).clientWidth, "assign");
      const d = cc11001100_hook("d", Ec(a, b) || {}, "var-init"),
        e = cc11001100_hook("e", d.direction, "var-init");
      if ("0px" === d.width && "none" !== d.cssFloat) return -1;
      if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if ("rtl" === e && c) return a = cc11001100_hook("a", b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, "assign"), Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)));
    }
    return -1;
  }
  ;
  function An(a) {
    cc11001100_hook("a", a, "function-parameter");
    V.wa(b => {
      b.shv = cc11001100_hook("b.shv", String(a), "assign");
      b.mjsv = cc11001100_hook("b.mjsv", "m202302210101", "assign");
      const c = cc11001100_hook("c", M(Hf).i(), "var-init"),
        d = cc11001100_hook("d", X(n), "var-init");
      d.eids || (d.eids = cc11001100_hook("d.eids", [], "assign"));
      b.eid = cc11001100_hook("b.eid", c.concat(d.eids).join(","), "assign");
    });
  }
  function Bn(a) {
    cc11001100_hook("a", a, "function-parameter");
    An(F(a, 2));
    a = cc11001100_hook("a", G(a, 6), "assign");
    Qb(ml, Nd);
    ml = cc11001100_hook("ml", a, "assign");
  }
  ;
  function Cn({
    ab: a,
    rb: b
  }) {
    return a || ("dev" === b ? "dev" : "");
  }
  ;
  function Dn(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", V, "var-init");
    try {
      return Qb(a, Md), new ll(JSON.parse(a));
    } catch (c) {
      b.I(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
        d.jspb = cc11001100_hook("d.jspb", String(a), "assign");
      });
    }
    return new ll();
  }
  ;
  function En(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`;
  }
  function Fn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return `&${a}=${b.toFixed(3)}`;
  }
  function Gn() {
    const a = cc11001100_hook("a", new Set(), "var-init"),
      b = cc11001100_hook("b", ej(), "var-init");
    try {
      if (!b) return a;
      const c = cc11001100_hook("c", b.pubads(), "var-init");
      for (const d of c.getSlots()) a.add(d.getSlotId().getDomId());
    } catch (c) {}
    return a;
  }
  function Hn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.id, "assign");
    return null != a && (Gn().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"));
  }
  function In(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a.sources) return !1;
    switch (Jn(a)) {
      case 2:
        const d = cc11001100_hook("d", Kn(a), "var-init");
        if (d) return c.some(f => Ln(d, f));
      case 1:
        const e = cc11001100_hook("e", Mn(a), "var-init");
        if (e) return b.some(f => Ln(e, f));
    }
    return !1;
  }
  function Jn(a) {
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
  function Mn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Nn(a, b => b.currentRect);
  }
  function Kn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Nn(a, b => b.previousRect);
  }
  function Nn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.sources.reduce((c, d) => {
      d = cc11001100_hook("d", b(d), "assign");
      return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d;
    }, null);
  }
  function Ln(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Math.min(a.right, b.right) - Math.max(a.left, b.left), "var-init");
    a = cc11001100_hook("a", Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top), "assign");
    return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top));
  }
  function On() {
    const a = cc11001100_hook("a", [...document.getElementsByTagName("iframe")].filter(Hn), "var-init"),
      b = cc11001100_hook("b", [...Gn()].map(c => document.getElementById(c)).filter(c => null !== c), "var-init");
    Pn = cc11001100_hook("Pn", window.scrollX, "assign");
    Qn = cc11001100_hook("Qn", window.scrollY, "assign");
    return Rn = cc11001100_hook("Rn", [...a, ...b].map(c => c.getBoundingClientRect()), "assign");
  }
  function Sn() {
    var a = cc11001100_hook("a", new Tn(), "var-init");
    if (T(jh)) {
      var b = cc11001100_hook("b", window, "var-init");
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = cc11001100_hook("b.google_plmetrics", !0, "assign");
        b = cc11001100_hook("b", ["layout-shift", "largest-contentful-paint", "first-input", "longtask"], "assign");
        for (const c of b) a.J().observe({
          type: cc11001100_hook("type", c, "object-key-init"),
          buffered: cc11001100_hook("buffered", !0, "object-key-init")
        });
        Un(a);
      }
    }
  }
  function Un(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ii(641, () => {
        var d = cc11001100_hook("d", document, "var-init");
        2 == (d.prerendering ? 3 : {
          visible: cc11001100_hook("visible", 1, "object-key-init"),
          hidden: cc11001100_hook("hidden", 2, "object-key-init"),
          prerender: cc11001100_hook("prerender", 3, "object-key-init"),
          preview: cc11001100_hook("preview", 4, "object-key-init"),
          unloaded: cc11001100_hook("unloaded", 5, "object-key-init")
        }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Vn(a);
      }), "var-init"),
      c = cc11001100_hook("c", ii(641, () => void Vn(a)), "var-init");
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.xa = cc11001100_hook("a.xa", () => {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      a.J().disconnect();
    }, "assign");
  }
  function Vn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.Ea) {
      a.Ea = cc11001100_hook("a.Ea", !0, "assign");
      a.J().takeRecords();
      var b = cc11001100_hook("b", "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics", "var-init");
      window.LayoutShift && (b += cc11001100_hook("b", Fn("cls", a.B), "assign"), b += cc11001100_hook("b", Fn("mls", a.K), "assign"), b += cc11001100_hook("b", En("nls", a.R), "assign"), window.LayoutShiftAttribution && (b += cc11001100_hook("b", Fn("cas", a.m), "assign"), b += cc11001100_hook("b", En("nas", a.Da), "assign")), b += cc11001100_hook("b", Fn("wls", a.fa), "assign"), b += cc11001100_hook("b", Fn("tls", a.Ha), "assign"), window.LayoutShiftAttribution && (b += cc11001100_hook("b", Fn("was", a.Ia), "assign")));
      window.LargestContentfulPaint && (b += cc11001100_hook("b", En("lcp", a.Ba), "assign"), b += cc11001100_hook("b", En("lcps", a.Aa), "assign"));
      window.PerformanceEventTiming && a.za && (b += cc11001100_hook("b", En("fid", a.ya), "assign"));
      window.PerformanceLongTaskTiming && (b += cc11001100_hook("b", En("cbt", a.v), "assign"), b += cc11001100_hook("b", En("mbt", a.C), "assign"), b += cc11001100_hook("b", En("nlt", a.T), "assign"));
      let d = cc11001100_hook("d", 0, "var-init");
      for (var c of document.getElementsByTagName("iframe")) Hn(c) && d++;
      b += cc11001100_hook("b", En("nif", d), "assign");
      b += cc11001100_hook("b", En("ifi", id(window)), "assign");
      c = cc11001100_hook("c", M(Hf).i(), "assign");
      b += cc11001100_hook("b", `&${"eid"}=${encodeURIComponent(c.join())}`, "assign");
      b += cc11001100_hook("b", `&${"top"}=${n === n.top ? 1 : 0}`, "assign");
      b += cc11001100_hook("b", a.Ga ? `&${"qqid"}=${encodeURIComponent(a.Ga)}` : En("pvsid", Tc(n)), "assign");
      window.googletag && (b += cc11001100_hook("b", "&gpt=1", "assign"));
      window.fetch(b, {
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        credentials: cc11001100_hook("credentials", "include", "object-key-init"),
        redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      });
      Se(a);
    }
  }
  class Tn extends Re {
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
      this.U || (this.U = cc11001100_hook("this.U", new PerformanceObserver(ii(640, a => {
        const b = cc11001100_hook("b", Pn !== window.scrollX || Qn !== window.scrollY ? [] : Rn, "var-init"),
          c = cc11001100_hook("c", On(), "var-init");
        for (const f of a.getEntries()) switch (f.entryType) {
          case "layout-shift":
            a = cc11001100_hook("a", f, "assign");
            var d = cc11001100_hook("d", b, "var-init"),
              e = cc11001100_hook("e", c, "var-init");
            if (!a.hadRecentInput) {
              this.B += cc11001100_hook("this.B", Number(a.value), "assign");
              Number(a.value) > this.K && (this.K = cc11001100_hook("this.K", Number(a.value), "assign"));
              this.R += cc11001100_hook("this.R", 1, "assign");
              if (d = cc11001100_hook("d", In(a, d, e), "assign")) this.m += cc11001100_hook("this.m", a.value, "assign"), this.Da++;
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
  var Pn = cc11001100_hook("Pn", void 0, "var-init"),
    Qn = cc11001100_hook("Qn", void 0, "var-init"),
    Rn = cc11001100_hook("Rn", [], "var-init");
  var Wn = cc11001100_hook("Wn", class extends I {
    constructor() {
      super();
    }
    getVersion() {
      return F(this, 2);
    }
  }, "var-init");
  function Xn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 2, b);
  }
  function Yn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 3, b);
  }
  function Zn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 4, b);
  }
  function $n(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 5, b);
  }
  function ao(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 9, b);
  }
  function bo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return yb(a, 10, b);
  }
  function co(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 11, b);
  }
  function eo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 1, b);
  }
  function fo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return x(a, 7, b);
  }
  var ho = cc11001100_hook("ho", class extends I {
      constructor() {
        super(void 0, -1, go);
      }
    }, "var-init"),
    go = cc11001100_hook("go", [10, 6], "var-init");
  const io = cc11001100_hook("io", "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" "), "var-init");
  function jo() {
    if ("function" !== typeof L.navigator?.userAgentData?.getHighEntropyValues) return null;
    const a = cc11001100_hook("a", L.google_tag_data ?? (L.google_tag_data = cc11001100_hook("L.google_tag_data", {}, "assign")), "var-init");
    if (a.uach_promise) return a.uach_promise;
    const b = cc11001100_hook("b", L.navigator.userAgentData.getHighEntropyValues(io).then(c => {
      a.uach ?? (a.uach = cc11001100_hook("a.uach", c, "assign"));
      return c;
    }), "var-init");
    return a.uach_promise = cc11001100_hook("a.uach_promise", b, "assign");
  }
  function ko(a) {
    cc11001100_hook("a", a, "function-parameter");
    return co(bo($n(Xn(eo(Zn(fo(ao(Yn(new ho(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList?.map(b => {
      var c = cc11001100_hook("c", new Wn(), "var-init");
      c = cc11001100_hook("c", x(c, 1, b.brand), "assign");
      return x(c, 2, b.version);
    }) || []), a.wow64 || !1);
  }
  function lo() {
    return jo()?.then(a => ko(a)) ?? null;
  }
  ;
  function mo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.google_ad_host || (a = cc11001100_hook("a", Dl(a), "assign")) && (b.google_ad_host = cc11001100_hook("b.google_ad_host", a, "assign"));
  }
  function no(a, b, c = "") {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, delete L.google_sa_impl);
    L.google_sa_queue || (L.google_sa_queue = cc11001100_hook("L.google_sa_queue", [], "assign"), L.google_process_slots = cc11001100_hook("L.google_process_slots", V.qa(215, () => oo(L.google_sa_queue)), "assign"), a = cc11001100_hook("a", po(c, a, b), "assign"), Cc(L.document, a).id = cc11001100_hook("Cc(L.document, a).id", "google_shimpl", "assign"));
  }
  function oo(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.shift(), "var-init");
    "function" === typeof b && V.ia(216, b);
    a.length && n.setTimeout(V.qa(215, () => oo(a)), 0);
  }
  function qo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.google_sa_queue = cc11001100_hook("a.google_sa_queue", a.google_sa_queue || [], "assign");
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
  }
  function po(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", G(c, 4) ? b.sb : b.tb, "assign");
    const d = cc11001100_hook("d", {}, "var-init");
    a: {
      if (G(c, 4)) {
        if (a = cc11001100_hook("a", a || fm(L), "assign")) {
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
    ro(a, d);
    ro(Ch() ? {
      bust: cc11001100_hook("bust", Ch(), "object-key-init")
    } : {}, d);
    return nc(b, d);
  }
  function ro(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    J(a, (c, d) => {
      void 0 === b[d] && (b[d] = cc11001100_hook("b[d]", c, "assign"));
    });
  }
  function so(a) {
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
          ad = cc11001100_hook("ad", d, "assign");
          break a;
        }
      } catch (g) {}
      ad = cc11001100_hook("ad", null, "assign");
    }
    if (ad) return null;
    d = cc11001100_hook("d", Dc("IFRAME"), "assign");
    d.id = cc11001100_hook("d.id", "google_esf", "assign");
    d.name = cc11001100_hook("d.name", "google_esf", "assign");
    d.src = cc11001100_hook("d.src", pc(a.zb).toString(), "assign");
    d.style.display = cc11001100_hook("d.style.display", "none", "assign");
    return d;
  }
  function to(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    uo(a, b, c, d, (e, f) => {
      e = cc11001100_hook("e", e.document, "assign");
      for (var g = cc11001100_hook("g", void 0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); !g || e.getElementById(g + "_host");) g = cc11001100_hook("g", "aswift_" + h++, "assign");
      e = cc11001100_hook("e", g, "assign");
      g = cc11001100_hook("g", Number(f.google_ad_width || 0), "assign");
      f = cc11001100_hook("f", Number(f.google_ad_height || 0), "assign");
      h = cc11001100_hook("h", Dc("DIV"), "assign");
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
  function uo(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", e(a, b), "var-init");
    e = cc11001100_hook("e", f.fb, "assign");
    vo(a, c, b);
    c = cc11001100_hook("c", pa, "assign");
    const g = cc11001100_hook("g", new Date().getTime(), "var-init");
    b.google_lrv = cc11001100_hook("b.google_lrv", F(d, 2), "assign");
    b.google_async_iframe_id = cc11001100_hook("b.google_async_iframe_id", e, "assign");
    b.google_start_time = cc11001100_hook("b.google_start_time", c, "assign");
    b.google_bpp = cc11001100_hook("b.google_bpp", g > c ? g - c : 1, "assign");
    a.google_sv_map = cc11001100_hook("a.google_sv_map", a.google_sv_map || {}, "assign");
    a.google_sv_map[e] = cc11001100_hook("a.google_sv_map[e]", b, "assign");
    d = cc11001100_hook("d", a.document.getElementById(e + "_host") ? h => h() : h => window.setTimeout(h, 0), "assign");
    qo(a, () => {
      ({
        yb: h
      } = cc11001100_hook("", f, "assign"));
      if (!h || !h.isConnected) {
        var h = cc11001100_hook("h", a.document.getElementById(String(b.google_async_iframe_id) + "_host"), "var-init");
        if (null == h) throw Error("no_div");
      }
      h = cc11001100_hook("h", T(bh) ? {
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
  function vo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", c.google_ad_output, "var-init"),
      e = cc11001100_hook("e", c.google_ad_format, "var-init"),
      f = cc11001100_hook("f", c.google_ad_width || 0, "var-init"),
      g = cc11001100_hook("g", c.google_ad_height || 0, "var-init");
    e || "html" !== d && null != d || (e = cc11001100_hook("e", f + "x" + g, "assign"));
    d = cc11001100_hook("d", !c.google_ad_slot || c.google_override_format || !Qm[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used, "assign");
    e && d ? e = cc11001100_hook("e", e.toLowerCase(), "assign") : e = cc11001100_hook("e", "", "assign");
    c.google_ad_format = cc11001100_hook("c.google_ad_format", e, "assign");
    if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
      e = cc11001100_hook("e", [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height], "assign");
      d = cc11001100_hook("d", [], "assign");
      f = cc11001100_hook("f", 0, "assign");
      for (g = cc11001100_hook("g", b, "assign"); g && 25 > f; g = cc11001100_hook("g", g.parentNode, "assign"), ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
      (d = cc11001100_hook("d", d.join(), "assign")) && e.push(d);
      c.google_ad_unit_key = cc11001100_hook("c.google_ad_unit_key", Jc(e.join(":")).toString(), "assign");
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
      c.google_ad_dom_fingerprint = cc11001100_hook("c.google_ad_dom_fingerprint", Jc(b + e.join()).toString(), "assign");
    }
  }
  function wo() {
    var a = cc11001100_hook("a", Bc(n), "var-init");
    a && (a = cc11001100_hook("a", pg(a), "assign"), a.tagSpecificState[1] || (a.tagSpecificState[1] = cc11001100_hook("a.tagSpecificState[1]", {
      debugCard: cc11001100_hook("debugCard", null, "object-key-init"),
      debugCardRequested: cc11001100_hook("debugCardRequested", !1, "object-key-init")
    }, "assign")));
  }
  function xo() {
    const a = cc11001100_hook("a", lo(), "var-init");
    null != a && a.then(b => {
      a: {
        eb = cc11001100_hook("eb", !0, "assign");
        try {
          var c = cc11001100_hook("c", JSON.stringify(b.toJSON(), Nb), "var-init");
          break a;
        } finally {
          eb = cc11001100_hook("eb", !1, "assign");
        }
        c = cc11001100_hook("c", void 0, "assign");
      }
      L.google_user_agent_client_hint = cc11001100_hook("L.google_user_agent_client_hint", c, "assign");
    });
    sm();
  }
  ;
  function yo(a, b) {
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
  function zo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.getAttribute("src")) {
      var c = cc11001100_hook("c", a.getAttribute("src") || "", "var-init"),
        d = cc11001100_hook("d", zc(c, "client"), "var-init");
      d && (b.google_ad_client = cc11001100_hook("b.google_ad_client", yo("google_ad_client", d), "assign"));
      (c = cc11001100_hook("c", zc(c, "host"), "assign")) && (b.google_ad_host = cc11001100_hook("b.google_ad_host", yo("google_ad_host", c), "assign"));
    }
    a = cc11001100_hook("a", a.attributes, "assign");
    c = cc11001100_hook("c", a.length, "assign");
    for (d = cc11001100_hook("d", 0, "assign"); d < c; d++) {
      var e = cc11001100_hook("e", a[d], "var-init");
      if (/data-/.test(e.name)) {
        const f = cc11001100_hook("f", qa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), "var-init");
        b.hasOwnProperty(f) || (e = cc11001100_hook("e", yo(f, e.value), "assign"), null !== e && (b[f] = cc11001100_hook("b[f]", e, "assign")));
      }
    }
  }
  function Ao(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a = cc11001100_hook("a", dd(a), "assign")) switch (a.data && a.data.autoFormat) {
      case "rspv":
        return 13;
      case "mcrspv":
        return 15;
      default:
        return 14;
    } else return 12;
  }
  function Bo(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    zo(a, b);
    if (c.document && c.document.body && !wn(c, b) && !b.google_reactive_ad_format) {
      var e = cc11001100_hook("e", parseInt(a.style.width, 10), "var-init"),
        f = cc11001100_hook("f", zn(a, c), "var-init");
      if (0 < f && e > f) {
        var g = cc11001100_hook("g", parseInt(a.style.height, 10), "var-init");
        e = cc11001100_hook("e", !!Qm[e + "x" + g], "assign");
        var h = cc11001100_hook("h", f, "var-init");
        if (e) {
          const k = cc11001100_hook("k", Rm(f, g), "var-init");
          if (k) h = cc11001100_hook("h", k, "assign"), b.google_ad_format = cc11001100_hook("b.google_ad_format", k + "x" + g + "_0ads_al", "assign");else throw new U("No slot size for availableWidth=" + f);
        }
        b.google_ad_resize = cc11001100_hook("b.google_ad_resize", !0, "assign");
        b.google_ad_width = cc11001100_hook("b.google_ad_width", h, "assign");
        e || (b.google_ad_format = cc11001100_hook("b.google_ad_format", null, "assign"), b.google_override_format = cc11001100_hook("b.google_override_format", !0, "assign"));
        f = cc11001100_hook("f", h, "assign");
        a.style.width = cc11001100_hook("a.style.width", `${f}px`, "assign");
        g = cc11001100_hook("g", sn(f, "auto", c, a, b), "assign");
        h = cc11001100_hook("h", f, "assign");
        g.size().i(c, b, a);
        Zm(g, h, b);
        g = cc11001100_hook("g", g.size(), "assign");
        b.google_responsive_formats = cc11001100_hook("b.google_responsive_formats", null, "assign");
        g.M > f && !e && (b.google_ad_width = cc11001100_hook("b.google_ad_width", g.M, "assign"), a.style.width = cc11001100_hook("a.style.width", `${g.M}px`, "assign"));
      }
    }
    (e = cc11001100_hook("e", a.offsetWidth, "assign")) || (e = cc11001100_hook("e", Wh(a, c, "width", K), "assign"));
    e = cc11001100_hook("e", e || b.google_ad_width || 0, "assign");
    if (488 > P(c).clientWidth) {
      f = cc11001100_hook("f", Bc(c) || c, "assign");
      g = cc11001100_hook("g", b.google_ad_client, "assign");
      if (d = cc11001100_hook("d", cj(f.location, "google_responsive_slot_preview") || T(ah) || pl(f, 1, g, d), "assign")) b: if (b.google_reactive_ad_format || b.google_ad_resize || wn(c, b) || Lh(a, b)) d = cc11001100_hook("d", !1, "assign");else {
        for (d = cc11001100_hook("d", a, "assign"); d; d = cc11001100_hook("d", d.parentElement, "assign")) {
          f = cc11001100_hook("f", Ec(d, c), "assign");
          if (!f) {
            b.gfwrnwer = cc11001100_hook("b.gfwrnwer", 18, "assign");
            d = cc11001100_hook("d", !1, "assign");
            break b;
          }
          if (!Ia(["static", "relative"], f.position)) {
            b.gfwrnwer = cc11001100_hook("b.gfwrnwer", 17, "assign");
            d = cc11001100_hook("d", !1, "assign");
            break b;
          }
        }
        d = cc11001100_hook("d", Ph(c, a, e, .3, b), "assign");
        !0 !== d ? (b.gfwrnwer = cc11001100_hook("b.gfwrnwer", d, "assign"), d = cc11001100_hook("d", !1, "assign")) : d = cc11001100_hook("d", c === c.top ? !0 : !1, "assign");
      }
      d ? (b.google_resizing_allowed = cc11001100_hook("b.google_resizing_allowed", !0, "assign"), b.ovlp = cc11001100_hook("b.ovlp", !0, "assign"), b.google_ad_format = cc11001100_hook("b.google_ad_format", "auto", "assign"), b.iaaso = cc11001100_hook("b.iaaso", !0, "assign"), b.armr = cc11001100_hook("b.armr", 1, "assign"), d = cc11001100_hook("d", !0, "assign")) : d = cc11001100_hook("d", !1, "assign");
    } else d = cc11001100_hook("d", !1, "assign");
    if (e = cc11001100_hook("e", wn(c, b), "assign")) yn(e, a, b, c, d);else {
      if (Lh(a, b)) {
        if (d = cc11001100_hook("d", Ec(a, c), "assign")) a.style.width = cc11001100_hook("a.style.width", d.width, "assign"), a.style.height = cc11001100_hook("a.style.height", d.height, "assign"), Kh(d, b);
        b.google_ad_width || (b.google_ad_width = cc11001100_hook("b.google_ad_width", a.offsetWidth, "assign"));
        b.google_ad_height || (b.google_ad_height = cc11001100_hook("b.google_ad_height", a.offsetHeight, "assign"));
        b.google_loader_features_used = cc11001100_hook("b.google_loader_features_used", 256, "assign");
        b.google_responsive_auto_format = cc11001100_hook("b.google_responsive_auto_format", Ao(c), "assign");
      } else Kh(a.style, b);
      c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? yn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = cc11001100_hook("a", Qh(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), "assign"), !0 !== a ? (b.efwr = cc11001100_hook("b.efwr", !1, "assign"), b.gfwrnwer = cc11001100_hook("b.gfwrnwer", a, "assign")) : b.efwr = cc11001100_hook("b.efwr", !0, "assign"));
    }
  }
  ;
  function Co(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.i) return a.i;
    a.C && a.C(a.l) ? a.i = cc11001100_hook("a.i", a.l, "assign") : a.i = cc11001100_hook("a.i", Oc(a.l, a.K), "assign");
    return a.i ?? null;
  }
  var Do = cc11001100_hook("Do", class extends Re {
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
      this.m && (cc(this.l, "message", this.m), delete this.m);
      delete this.l;
      delete this.R;
      super.h();
    }
  }, "var-init");
  const Eo = cc11001100_hook("Eo", (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.callback({
          consentData: cc11001100_hook("consentData", c ?? void 0, "object-key-init"),
          cb: cc11001100_hook("cb", d ? void 0 : 2, "object-key-init")
        });
      });
    }, "var-init"),
    Fo = cc11001100_hook("Fo", {
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
  function Go(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", {}, "var-init");
    "string" === typeof a.data ? b = cc11001100_hook("b", JSON.parse(a.data), "assign") : b = cc11001100_hook("b", a.data, "assign");
    return {
      payload: cc11001100_hook("payload", b, "object-key-init"),
      pb: cc11001100_hook("pb", b.__uspapiReturn.callId, "object-key-init")
    };
  }
  var Ho = cc11001100_hook("Ho", class extends Re {
    constructor() {
      super();
      this.caller = cc11001100_hook("this.caller", new Do("__uspapiLocator", a => "function" === typeof a.__uspapi, Go), "assign");
      this.caller.B.set("getDataWithCallback", Eo);
      this.caller.v.set("getDataWithCallback", Fo);
    }
    h() {
      Se(this.caller);
      super.h();
    }
    m() {
      return !!Co(this.caller);
    }
  }, "var-init");
  var Io = cc11001100_hook("Io", Rb(class extends I {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  const Jo = cc11001100_hook("Jo", (a, b) => {
      a = cc11001100_hook("a", a.googlefc || (a.googlefc = cc11001100_hook("a.googlefc", {}, "assign")), "assign");
      a.__fci = cc11001100_hook("a.__fci", a.__fci || [], "assign");
      a.__fci.push(b.command, c => {
        c = cc11001100_hook("c", Io(c), "assign");
        b.callback({
          consentData: cc11001100_hook("consentData", c, "object-key-init")
        });
      });
    }, "var-init"),
    Ko = cc11001100_hook("Ko", {
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
  function Lo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Io(a.data.__fciReturn), "assign");
    return {
      payload: cc11001100_hook("payload", a, "object-key-init"),
      pb: cc11001100_hook("pb", t(a, 1), "object-key-init")
    };
  }
  var Mo = cc11001100_hook("Mo", class extends Re {
    constructor() {
      super();
      this.i = cc11001100_hook("this.i", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.caller = cc11001100_hook("this.caller", new Do("googlefcPresent", void 0, Lo), "assign");
      this.caller.B.set("getDataWithCallback", Jo);
      this.caller.v.set("getDataWithCallback", Ko);
    }
    h() {
      Se(this.caller);
      super.h();
    }
    m() {
      this.l || (this.i = cc11001100_hook("this.i", Co(this.caller), "assign"), this.l = cc11001100_hook("this.l", !0, "assign"));
      return !!this.i;
    }
  }, "var-init");
  function No() {
    const a = cc11001100_hook("a", gd`(a=0)=>{let b;const c=class{};}`, "var-init");
    try {
      var b = cc11001100_hook("b", window, "var-init");
      const c = cc11001100_hook("c", a instanceof kc && a.constructor === kc ? a.h : "type_error:SafeScript", "var-init");
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
  var Oo = cc11001100_hook("Oo", a => {
    bc(window, "message", b => {
      let c;
      try {
        c = cc11001100_hook("c", JSON.parse(b.data), "assign");
      } catch (d) {
        return;
      }
      !c || "sc-cnf" !== c.googMsgType || a(c, b);
    });
  }, "var-init");
  var Po = cc11001100_hook("Po", class extends Re {
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
      (a = cc11001100_hook("a", "function" === typeof this.l?.__uspapi, "assign")) || (a = cc11001100_hook("a", this.i ? this.i : this.i = cc11001100_hook("this.i", Oc(this.l, "__uspapiLocator"), "assign"), "assign"), a = cc11001100_hook("a", null != a, "assign"));
      return a;
    }
  }, "var-init");
  var Qo = cc11001100_hook("Qo", class extends Re {
    constructor() {
      super();
      this.v = cc11001100_hook("this.v", L, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
    m() {
      if (!this.l) {
        if (!this.i) {
          var a = cc11001100_hook("a", Oc(this.v, "googlefcPresent"), "var-init");
          this.i = cc11001100_hook("this.i", a ? a : null, "assign");
        }
        this.l = cc11001100_hook("this.l", !0, "assign");
      }
      return !!this.i;
    }
  }, "var-init");
  let Ro = cc11001100_hook("Ro", null, "var-init");
  const So = cc11001100_hook("So", [], "var-init"),
    To = cc11001100_hook("To", new Map(), "var-init");
  let Uo = cc11001100_hook("Uo", -1, "var-init");
  function Vo(a) {
    cc11001100_hook("a", a, "function-parameter");
    return di.test(a.className) && "done" !== a.dataset.adsbygoogleStatus;
  }
  var Xo = cc11001100_hook("Xo", (a, b, c) => {
    a.dataset.adsbygoogleStatus = cc11001100_hook("a.dataset.adsbygoogleStatus", "done", "assign");
    Wo(a, b, c);
  }, "var-init");
  function Wo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", window, "var-init");
    d.google_spfd || (d.google_spfd = cc11001100_hook("d.google_spfd", Bo, "assign"));
    var e = cc11001100_hook("e", b.google_reactive_ads_config, "var-init");
    e || Bo(a, b, d, c);
    mo(d, b);
    if (!Yo(a, b, d)) {
      e || (d.google_lpabyc = cc11001100_hook("d.google_lpabyc", Nh(a, d) + Wh(a, d, "height", K), "assign"));
      if (e) {
        e = cc11001100_hook("e", e.page_level_pubvars || {}, "assign");
        if (X(L).page_contains_reactive_tag && !X(L).allow_second_reactive_tag) {
          if (e.pltais) {
            Bl(!1);
            return;
          }
          throw new U("Only one 'enable_page_level_ads' allowed per page.");
        }
        X(L).page_contains_reactive_tag = cc11001100_hook("X(L).page_contains_reactive_tag", !0, "assign");
        Bl(7 === e.google_pgb_reactive);
      }
      b.google_unique_id = cc11001100_hook("b.google_unique_id", hd(d), "assign");
      J(bm, (f, g) => {
        b[g] = cc11001100_hook("b[g]", b[g] || d[g], "assign");
      });
      b.google_loader_used = cc11001100_hook("b.google_loader_used", "aa", "assign");
      b.google_reactive_tag_first = cc11001100_hook("b.google_reactive_tag_first", 1 === (X(L).first_tag_on_page || 0), "assign");
      rj(164, () => {
        to(d, b, a, c);
      });
    }
  }
  function Yo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", b.google_reactive_ads_config, "var-init"),
      e = cc11001100_hook("e", "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className), "var-init"),
      f = cc11001100_hook("f", zl(c), "var-init");
    if (f && f.Ja && "on" !== b.google_adtest && !e) {
      e = cc11001100_hook("e", Nh(a, c), "assign");
      const g = cc11001100_hook("g", P(c).clientHeight, "var-init");
      e = cc11001100_hook("e", 0 == g ? null : e / g, "assign");
      if (!f.sa || f.sa && (e || 0) >= f.sa) return a.className += cc11001100_hook("a.className", " adsbygoogle-ablated-ad-slot", "assign"), c = cc11001100_hook("c", c.google_sv_map = cc11001100_hook("c.google_sv_map", c.google_sv_map || {}, "assign"), "assign"), d = cc11001100_hook("d", ea(a), "assign"), b.google_element_uid = cc11001100_hook("b.google_element_uid", d, "assign"), c[b.google_element_uid] = cc11001100_hook("c[b.google_element_uid]", b, "assign"), a.setAttribute("google_element_uid", String(d)), "slot" === f.wb && (null !== Nc(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Nc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = cc11001100_hook("a.style.width", "0px", "assign"), a.style.height = cc11001100_hook("a.style.height", "0px", "assign")), !0;
    }
    if ((f = cc11001100_hook("f", Ec(a, c), "assign")) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
    a = cc11001100_hook("a", null == b.google_pgb_reactive || 3 === b.google_pgb_reactive, "assign");
    return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0);
  }
  function Zo(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", document.getElementsByTagName("INS"), "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b[d], "var-init"); d < b.length; e = cc11001100_hook("e", b[++d], "assign")) {
      var c = cc11001100_hook("c", e, "var-init");
      if (Vo(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e;
    }
    return null;
  }
  var ap = cc11001100_hook("ap", (a, b, c) => {
    if (a && a.shift) {
      let d = cc11001100_hook("d", 20, "var-init");
      for (; 0 < a.length && 0 < d;) {
        try {
          $o(a.shift(), b, c);
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
        --d;
      }
    }
  }, "var-init");
  function bp() {
    const a = cc11001100_hook("a", Dc("INS"), "var-init");
    a.className = cc11001100_hook("a.className", "adsbygoogle", "assign");
    a.className += cc11001100_hook("a.className", " adsbygoogle-noablate", "assign");
    Qc(a, {
      display: cc11001100_hook("display", "none", "object-key-init")
    });
    return a;
  }
  var cp = cc11001100_hook("cp", (a, b) => {
      const c = cc11001100_hook("c", {}, "var-init"),
        d = cc11001100_hook("d", yl(), "var-init");
      J(og, (g, h) => {
        !1 === a.enable_page_level_ads ? c[h] = cc11001100_hook("c[h]", !1, "assign") : a.hasOwnProperty(h) ? c[h] = cc11001100_hook("c[h]", a[h], "assign") : d.includes(g) && (c[h] = cc11001100_hook("c[h]", !1, "assign"));
      });
      da(a.enable_page_level_ads) && (c.page_level_pubvars = cc11001100_hook("c.page_level_pubvars", a.enable_page_level_ads, "assign"));
      const e = cc11001100_hook("e", bp(), "var-init");
      Uc.body.appendChild(e);
      const f = cc11001100_hook("f", {
        google_reactive_ads_config: cc11001100_hook("google_reactive_ads_config", c, "object-key-init"),
        google_ad_client: cc11001100_hook("google_ad_client", a.google_ad_client, "object-key-init")
      }, "var-init");
      f.google_pause_ad_requests = cc11001100_hook("f.google_pause_ad_requests", !!X(L).pause_ad_requests, "assign");
      Xo(e, f, b);
    }, "var-init"),
    dp = cc11001100_hook("dp", (a, b) => {
      pg(n).wasPlaTagProcessed = cc11001100_hook("pg(n).wasPlaTagProcessed", !0, "assign");
      const c = cc11001100_hook("c", () => cp(a, b), "var-init"),
        d = cc11001100_hook("d", n.document, "var-init");
      if (d.body || "complete" === d.readyState || "interactive" === d.readyState) cp(a, b);else {
        const e = cc11001100_hook("e", ac(V.qa(191, c)), "var-init");
        bc(d, "DOMContentLoaded", e);
        new n.MutationObserver((f, g) => {
          d.body && (e(), g.disconnect());
        }).observe(d, {
          childList: cc11001100_hook("childList", !0, "object-key-init"),
          subtree: cc11001100_hook("subtree", !0, "object-key-init")
        });
      }
    }, "var-init");
  function $o(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", {}, "var-init");
    rj(165, () => ep(a, d, b, c), e => {
      e.client = cc11001100_hook("e.client", e.client || d.google_ad_client || a.google_ad_client, "assign");
      e.slotname = cc11001100_hook("e.slotname", e.slotname || d.google_ad_slot, "assign");
      e.tag_origin = cc11001100_hook("e.tag_origin", e.tag_origin || d.google_tag_origin, "assign");
    });
  }
  function fp(a) {
    cc11001100_hook("a", a, "function-parameter");
    delete a.google_checked_head;
    J(a, (b, c) => {
      ci[c] || (delete a[c], n.console.warn(`AdSense head tag doesn't support ${c.replace("google", "data").replace(/_/g, "-")} attribute.`));
    });
  }
  var ip = cc11001100_hook("ip", (a, b) => {
    var c = cc11001100_hook("c", L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'), "var-init");
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = cc11001100_hook("d", X(window), "var-init");
      if (d.head_tag_slot_vars) gp(c);else {
        var e = cc11001100_hook("e", {}, "var-init");
        zo(c, e);
        fp(e);
        var f = cc11001100_hook("f", gc(e), "var-init");
        d.head_tag_slot_vars = cc11001100_hook("d.head_tag_slot_vars", f, "assign");
        c = cc11001100_hook("c", {
          google_ad_client: cc11001100_hook("google_ad_client", e.google_ad_client, "object-key-init"),
          enable_page_level_ads: cc11001100_hook("enable_page_level_ads", e, "object-key-init")
        }, "assign");
        L.adsbygoogle || (L.adsbygoogle = cc11001100_hook("L.adsbygoogle", [], "assign"));
        d = cc11001100_hook("d", L.adsbygoogle, "assign");
        d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
        e.google_adbreak_test || b.l()?.l() && T(gh) ? hp(f, a) : Oo(() => {
          hp(f, a);
        });
      }
    }
  }, "var-init");
  const gp = cc11001100_hook("gp", a => {
    const b = cc11001100_hook("b", X(window).head_tag_slot_vars, "var-init"),
      c = cc11001100_hook("c", a.getAttribute("src") || "", "var-init");
    if ((a = cc11001100_hook("a", zc(c, "client") || a.getAttribute("data-ad-client") || "", "assign")) && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
  }, "var-init");
  function jp(a) {
    cc11001100_hook("a", a, "function-parameter");
    if ("object" === typeof a && null != a) {
      if ("string" === typeof a.type) return 2;
      if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3;
    }
    return 0;
  }
  var ep = cc11001100_hook("ep", (a, b, c, d) => {
    if (null == a) throw new U("push() called with no parameters.");
    d.m() && kp(a, d.i().i(), F(d, 2));
    var e = cc11001100_hook("e", jp(a), "var-init");
    if (0 !== e) d = cc11001100_hook("d", Cl(), "assign"), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = cc11001100_hook("d.first_slotcar_request_processing_time", Date.now(), "assign"), d.adsbygoogle_execution_start_time = cc11001100_hook("d.adsbygoogle_execution_start_time", pa, "assign")), null == Ro ? (lp(a), So.push(a)) : 3 === e ? rj(787, () => {
      Ro.handleAdConfig(a);
    }) : tj(730, Ro.handleAdBreak(a));else {
      pa = cc11001100_hook("pa", new Date().getTime(), "assign");
      no(c, d, mp(a));
      np();
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
      if (e) op(a, d);else if ((e = cc11001100_hook("e", a.params, "assign")) && J(e, (g, h) => {
        b[h] = cc11001100_hook("b[h]", g, "assign");
      }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");else {
        e = cc11001100_hook("e", pp(a.element), "assign");
        zo(e, b);
        c = cc11001100_hook("c", X(n).head_tag_slot_vars || {}, "assign");
        J(c, (g, h) => {
          b.hasOwnProperty(h) || (b[h] = cc11001100_hook("b[h]", g, "assign"));
        });
        if (e.hasAttribute("data-require-head") && !X(n).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
        if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
        var f = cc11001100_hook("f", (c = cc11001100_hook("c", 0 === (X(L).first_tag_on_page || 0) && Wl(b), "assign")) && Xl(c), "var-init");
        c && (f || (op(c, d), X(L).skip_next_reactive_tag = cc11001100_hook("X(L).skip_next_reactive_tag", !0, "assign")), f && qp(c));
        0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = cc11001100_hook("X(L).first_tag_on_page", 2, "assign"));
        b.google_pause_ad_requests = cc11001100_hook("b.google_pause_ad_requests", !!X(L).pause_ad_requests, "assign");
        Xo(e, b, d);
      }
    }
  }, "var-init");
  let rp = cc11001100_hook("rp", !1, "var-init");
  function kp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    rp || (rp = cc11001100_hook("rp", !0, "assign"), a = cc11001100_hook("a", mp(a) || fm(L), "assign"), sj("predictive_abg", {
      a_c: cc11001100_hook("a_c", a, "object-key-init"),
      p_c: cc11001100_hook("p_c", b.join(), "object-key-init"),
      b_v: cc11001100_hook("b_v", c, "object-key-init")
    }, .01));
  }
  function mp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.google_ad_client ? a.google_ad_client : (a = cc11001100_hook("a", a.params, "assign")) && a.google_ad_client ? a.google_ad_client : "";
  }
  const np = cc11001100_hook("np", () => {
      if (T(Vg)) {
        var a = cc11001100_hook("a", zl(L), "var-init");
        if (!(a = cc11001100_hook("a", a && a.Ja, "assign"))) {
          try {
            var b = cc11001100_hook("b", L.localStorage, "var-init");
          } catch (c) {
            b = cc11001100_hook("b", null, "assign");
          }
          b = cc11001100_hook("b", b ? Xk(b) : null, "assign");
          a = cc11001100_hook("a", !(b && Wk(b) && b), "assign");
        }
        a || Al(L, 1);
      }
    }, "var-init"),
    qp = cc11001100_hook("qp", a => {
      Vc(() => {
        pg(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a);
      });
    }, "var-init");
  function op(a, b) {
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
      $l(a, b);
      dp(a, b);
    }
  }
  const pp = cc11001100_hook("pp", a => {
      if (a) {
        if (!Vo(a) && (a.id ? a = cc11001100_hook("a", Zo(a.id), "assign") : a = cc11001100_hook("a", null, "assign"), !a)) throw new U("'element' has already been filled.");
        if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
      } else if (a = cc11001100_hook("a", Zo(), "assign"), !a) throw new U("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
      return a;
    }, "var-init"),
    sp = cc11001100_hook("sp", () => {
      const a = cc11001100_hook("a", new Nj(L), "var-init"),
        b = cc11001100_hook("b", T(mh) ? new Ho() : new Po(), "var-init"),
        c = cc11001100_hook("c", T(lh) ? new Mo() : new Qo(), "var-init");
      sj("cmpMet", {
        tcfv1: cc11001100_hook("tcfv1", L.__cmp ? 1 : 0, "object-key-init"),
        tcfv2: cc11001100_hook("tcfv2", Kj(a) ? 1 : 0, "object-key-init"),
        usp: cc11001100_hook("usp", b.m() ? 1 : 0, "object-key-init"),
        fc: cc11001100_hook("fc", c.m() ? 1 : 0, "object-key-init"),
        ptt: cc11001100_hook("ptt", 9, "object-key-init")
      }, .001);
    }, "var-init"),
    tp = cc11001100_hook("tp", a => {
      wj().S[zj(26)] = cc11001100_hook("wj().S[zj(26)]", !!Number(a), "assign");
    }, "var-init"),
    up = cc11001100_hook("up", a => {
      Number(a) ? X(L).pause_ad_requests = cc11001100_hook("X(L).pause_ad_requests", !0, "assign") : (X(L).pause_ad_requests = cc11001100_hook("X(L).pause_ad_requests", !1, "assign"), a = cc11001100_hook("a", () => {
        if (!X(L).pause_ad_requests) {
          var b = cc11001100_hook("b", {}, "var-init");
          let c;
          "function" === typeof window.CustomEvent ? c = cc11001100_hook("c", new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b), "assign") : (c = cc11001100_hook("c", document.createEvent("CustomEvent"), "assign"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
          L.dispatchEvent(c);
        }
      }, "assign"), n.setTimeout(a, 0), n.setTimeout(a, 1E3));
    }, "var-init"),
    vp = cc11001100_hook("vp", a => {
      sj("adsenseGfpKnob", {
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
    }, "var-init"),
    xp = cc11001100_hook("xp", a => {
      try {
        Object.defineProperty(a, "requestNonPersonalizedAds", {
          set: cc11001100_hook("set", tp, "object-key-init")
        }), Object.defineProperty(a, "pauseAdRequests", {
          set: cc11001100_hook("set", up, "object-key-init")
        }), Object.defineProperty(a, "cookieOptions", {
          set: cc11001100_hook("set", vp, "object-key-init")
        }), Object.defineProperty(a, "onload", {
          set: cc11001100_hook("set", wp, "object-key-init")
        });
      } catch {}
    }, "var-init");
  function wp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && a.call && "function" === typeof a && window.setTimeout(a, 0);
  }
  function hp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", Vl(nc(b.vb, Ch() ? {
      bust: cc11001100_hook("bust", Ch(), "object-key-init")
    } : {})).then(c => {
      null == Ro && (c.init(a), Ro = cc11001100_hook("Ro", c, "assign"), yp());
    }), "assign");
    V.ca(723, b);
    b.finally(() => {
      So.length = cc11001100_hook("So.length", 0, "assign");
      sj("slotcar", {
        event: cc11001100_hook("event", "api_ld", "object-key-init"),
        time: cc11001100_hook("time", Date.now() - pa, "object-key-init"),
        time_pr: cc11001100_hook("time_pr", Date.now() - Uo, "object-key-init")
      });
    });
  }
  const yp = cc11001100_hook("yp", () => {
    for (const [a, b] of To) -1 !== b && (n.clearTimeout(b), To.delete(a));
    for (let a = cc11001100_hook("a", 0, "var-init"); a < So.length; a++) {
      if (To.has(a)) continue;
      const b = cc11001100_hook("b", So[a], "var-init"),
        c = cc11001100_hook("c", jp(b), "var-init");
      rj(723, () => {
        if (3 === c) Ro.handleAdConfig(b);else if (2 === c) {
          var d = cc11001100_hook("d", Ro.handleAdBreakBeforeReady(b), "var-init");
          V.ca(730, d);
        }
      });
    }
  }, "var-init");
  function lp(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", So.length, "var-init");
    if (2 === jp(a) && "preroll" === a.type && null != a.adBreakDone) {
      -1 === Uo && (Uo = cc11001100_hook("Uo", Date.now(), "assign"));
      var c = cc11001100_hook("c", n.setTimeout(() => {
        try {
          (0, a.adBreakDone)({
            breakType: cc11001100_hook("breakType", "preroll", "object-key-init"),
            breakName: cc11001100_hook("breakName", a.name, "object-key-init"),
            breakFormat: cc11001100_hook("breakFormat", "preroll", "object-key-init"),
            breakStatus: cc11001100_hook("breakStatus", "timeout", "object-key-init")
          }), To.set(b, -1), sj("slotcar", {
            event: cc11001100_hook("event", "pr_to", "object-key-init"),
            source: cc11001100_hook("source", "adsbygoogle", "object-key-init")
          });
        } catch (d) {
          console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)));
        }
      }, 1E3 * Bh(hh)), "var-init");
      To.set(b, c);
    }
  }
  ;
  (function (a, b, c, d = () => {}) {
    V.Ra(uj);
    rj(166, () => {
      const e = cc11001100_hook("e", Dn(b), "var-init");
      Bn(e);
      d();
      cd(16, [1, e.toJSON()]);
      var f = cc11001100_hook("f", ed(dd(L)) || L, "var-init");
      const g = cc11001100_hook("g", c(Cn({
        ab: cc11001100_hook("ab", a, "object-key-init"),
        rb: cc11001100_hook("rb", F(e, 2), "object-key-init")
      }), e), "var-init");
      ql(f, e);
      Pm(f, e, null === L.document.currentScript ? 1 : pm(g.xb));
      tj(1086, lm());
      if (!ua() || 0 <= ra(za(), 11)) {
        qj(T(kh));
        xo();
        Hk();
        try {
          Sn();
        } catch {}
        wo();
        ip(g, e);
        f = cc11001100_hook("f", window, "assign");
        var h = cc11001100_hook("h", f.adsbygoogle, "var-init");
        if (!h || !h.loaded) {
          sj("new_abg_tag", {
            value: cc11001100_hook("value", `${G(e, 16)}`, "object-key-init"),
            host_v: cc11001100_hook("host_v", `${G(e, 22)}`, "object-key-init"),
            frequency: cc11001100_hook("frequency", .01, "object-key-init")
          }, .01);
          sp();
          var k = cc11001100_hook("k", {
            push: cc11001100_hook("push", v => {
              $o(v, g, e);
            }, "object-key-init"),
            loaded: cc11001100_hook("loaded", !0, "object-key-init")
          }, "var-init");
          xp(k);
          if (h) for (var l of ["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]) void 0 !== h[l] && (k[l] = cc11001100_hook("k[l]", h[l], "assign"));
          "_gfp_a_" in window || (window._gfp_a_ = cc11001100_hook("window._gfp_a_", !0, "assign"));
          ap(h, g, e);
          f.adsbygoogle = cc11001100_hook("f.adsbygoogle", k, "assign");
          h && (k.onload = cc11001100_hook("k.onload", h.onload, "assign"));
          (l = cc11001100_hook("l", so(g), "assign")) && document.documentElement.appendChild(l);
          var {
            supports: m,
            error: u
          } = cc11001100_hook("", No(), "var-init");
          sj("modern_js", {
            fy: cc11001100_hook("fy", E(t(e, 1), 0), "object-key-init"),
            supports: cc11001100_hook("supports", String(m), "object-key-init"),
            c: cc11001100_hook("c", 2021, "object-key-init"),
            e: cc11001100_hook("e", u, "object-key-init")
          }, .01);
        }
      }
    });
  })("m202302210101", "undefined" === typeof sttc ? void 0 : sttc, function (a, b) {
    const c = cc11001100_hook("c", 2012 < E(t(b, 1), 0) ? `_fy${E(t(b, 1), 0)}` : "", "var-init");
    var d = cc11001100_hook("d", F(b, 3), "var-init");
    const e = cc11001100_hook("e", F(b, 2), "var-init");
    b = cc11001100_hook("b", fd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`, "assign");
    d = cc11001100_hook("d", fd`https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`, "assign");
    return {
      vb: cc11001100_hook("vb", b, "object-key-init"),
      tb: cc11001100_hook("tb", fd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`, "object-key-init"),
      sb: cc11001100_hook("sb", fd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`, "object-key-init"),
      ac: cc11001100_hook("ac", fd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`, "object-key-init"),
      zb: cc11001100_hook("zb", d, "object-key-init"),
      xb: cc11001100_hook("xb", /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/, "object-key-init")
    };
  });
}).call(this, "[2021,\"r20230301\",\"r20190131\",null,null,null,null,\".google.cn\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1234,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1232,null,null,[1]],[1225,null,null,[1]],[1228,null,null,[1]],[1190,null,null,[1]],[null,508040914,null,[null,100]],[null,1114,null,[null,1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[10004,null,null,[1]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[1033,null,null,[1]],[506738119,null,null,[1]],[null,null,null,[null,null,null,[\"Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv\/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[1971,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,501545963,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[505942137,null,null,[1]],[null,501545962,null,[null,1]],[null,495583959,null,[null,-1]],[null,45388309,null,[null,-1]],[null,1116,null,[null,300]],[null,1112,null,[null,5]],[1203,null,null,[1]],[501545959,null,null,[1]],[500169372,null,null,[1]],[504834127,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]],[null,469675170,null,[null,30000]],[50227136,null,null,[1]],[485990406,null,null,[]],[501411886,null,null,[1]]],[[10,[[50,[[31071642],[31071643,[[1216,null,null,[1]]]]],null,72],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44767166],[44767167]]],[10,[[44782466],[44782467,[[1160,null,null,[1]]]],[44782468,[[1226,null,null,[1]],[1160,null,null,[1]]]]]],[50,[[31071869],[31071870,[[1215,null,null,[1]]]]],null,72],[10,[[31071258],[31071259]]],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[1000,[[31072568,[[null,null,14,[null,null,\"31072568\"]]],[6,null,null,null,6,null,\"31072568\"]],[31072569,[[null,null,14,[null,null,\"31072569\"]]],[6,null,null,null,6,null,\"31072569\"]]],[4,null,55],63],[1000,[[31072620,[[null,null,14,[null,null,\"31072620\"]]],[6,null,null,null,6,null,\"31072620\"]],[31072621,[[null,null,14,[null,null,\"31072621\"]]],[6,null,null,null,6,null,\"31072621\"]]],[4,null,55],63],[1000,[[31072648,[[null,null,14,[null,null,\"31072648\"]]],[6,null,null,null,6,null,\"31072648\"]],[31072649,[[null,null,14,[null,null,\"31072649\"]]],[6,null,null,null,6,null,\"31072649\"]]],[4,null,55],63],[1000,[[31072714,[[null,null,14,[null,null,\"31072714\"]]],[6,null,null,null,6,null,\"31072714\"]],[31072715,[[null,null,14,[null,null,\"31072715\"]]],[6,null,null,null,6,null,\"31072715\"]]],[4,null,55],63],[100,[[31072726],[31072727,[[504535903,null,null,[1]]]]]],[100,[[31072730],[31072731,[[505942137,null,null,[]]]]]],[1000,[[31072741,[[null,null,14,[null,null,\"31072741\"]]],[6,null,null,null,6,null,\"31072741\"]],[31072742,[[null,null,14,[null,null,\"31072742\"]]],[6,null,null,null,6,null,\"31072742\"]]],[4,null,55],63],[1000,[[31072787,[[null,null,14,[null,null,\"31072787\"]]],[6,null,null,null,6,null,\"31072787\"]],[31072788,[[null,null,14,[null,null,\"31072788\"]]],[6,null,null,null,6,null,\"31072788\"]]],[4,null,55],63],[10,[[31072791],[31072792,[[502896280,null,null,[1]]]]]],[1000,[[31072821,[[null,null,14,[null,null,\"31072821\"]]],[6,null,null,null,6,null,\"31072821\"]],[31072822,[[null,null,14,[null,null,\"31072822\"]]],[6,null,null,null,6,null,\"31072822\"]]],[4,null,55],63],[10,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,54],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[1,[[44774293,[[1147,null,null,[1]]]],[44774605,[[1147,null,null,[1]]]],[44776415]],null,54],[1,[[44779343],[44779344,[[1147,null,null,[1]]]]],null,54],[10,[[44784140],[44784141,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44784142,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,54],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44779109],[44779906],[44784478],[44785149]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69]]],[17,[[null,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[10,[[31071260]]],[10,[[31071261],[31071262],[31071263],[31071264]],null,null,null,44,22],[10,[[31071265],[31071266]],null,null,null,44,null,500],[10,[[31071267]],null,null,null,44,null,900],[10,[[31071268],[31071269]],null,null,null,null,null,null,null,101],[1,[[31072412,[[null,1103,null,[null,31072412]],[1121,null,null,[1]]]],[31072413,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072413]],[1121,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,117,1],[20,[[31072414,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072414]]]],[31072415,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072415]],[471262996,null,null,[1]]]]],[4,null,55],null,null,null,null,2,null,117,1],[10,[[31072416,[[null,1103,null,[null,31072416]]]],[31072417,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1103,null,[null,31072417]],[501545959,null,null,[]]]],[31072418,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072418]]]]],[4,null,55],null,null,null,null,42,null,117,1],[10,[[31072421,[[null,1103,null,[null,31072421]]]],[31072422,[[501545960,null,null,[1]],[1120,null,null,[1]],[1162,null,null,[1]],[null,1103,null,[null,31072422]],[501545959,null,null,[]]]],[31072423,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,31072423]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,192,null,117,1],[1,[[31072506,[[null,1103,null,[null,31072506]]]],[31072507,[[501545960,null,null,[1]],[1120,null,null,[1]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[null,1103,null,[null,31072507]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]],[501545959,null,null,[]]]],[31072508,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,31072508]],[491815314,null,null,[1]]]],[31072509,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,31072509]],[null,1116,null,[null,50]],[491815314,null,null,[1]]]],[31072510,[[501545960,null,null,[1]],[1120,null,null,[1]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[null,1103,null,[null,31072510]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]]]]],[4,null,55],null,null,null,null,372,null,117,1],[10,[[44784438,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,44784438]],[null,1116,null,[null,50]]]],[44784439,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,44784439]],[45388034,null,null,[1]],[null,45388309,null,[null,30]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,282,null,117,1],[10,[[44785530,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,1103,null,[null,44785530]]]],[44785531,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,506871937,null,[null,44785531]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,332,null,117,1],[10,[[44785538,[[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1103,null,[null,44785538]],[null,1116,null,[null,50]]]],[44785539,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[null,506871937,null,[null,44785539]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1116,null,[null,50]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,352,null,117,1]]],[11,[[null,[[31072315],[31072316,[[483374575,null,null,[1]]]]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[50,[[31071662],[31071663,[[1974,null,null,[1]]]]]],[50,[[31071975],[31071976,[[1975,null,null,[1]]]]]],[null,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[31070383,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]],[31070384,[[439828594,null,null,[1]]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[31070594],[31070595,[[439828594,null,null,[1]],[483962503,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[10,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[200,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[null,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44783617,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44784847,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[20,[[1000,[[31070530,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070531,null,[2,[[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]],[4,null,8,null,null,null,null,[\"credentialless\"]]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070532,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]]],null,null,[null,\"1000\",1,\"1000\"]],[1,[null,[[[[null,0,null,null,null,null,\"HEADER\"],4,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"DIV#page\\u003eNAV.breadcrumb\"],4,[\"10px\",\"5px\",1],[2],null,null,null,1]],[[null,null,null,\"2168828574\",null,null,[2499514738,2]],[null,null,null,\"2168828574\",null,null,[4057435121,2]],[null,null,null,\"2168828574\",null,null,[1930269653,2]],[null,[1,3,2],null,\"2168828574\",null,null,[0,2],null,null,[0.5]]],[[[null,3,null,null,null,null,\"DIV.single-content\\u003eP\"],[]],[[null,14,null,null,null,null,\"DIV.single-content\\u003eP\"],[]],[[null,null,null,null,null,null,\"DIV.single-content\"],[null,null,null,null,null,null,\"H2,H3,P\"]],[[null,13,null,null,null,null,\"DIV.single-content\\u003eP\"],[]]]]]],null,\"31072620\",1,\"www.codenong.com\",1038382194,[44777876,44759837,44759875,44759926]]");