(function (sttc) {
  /* 
  Copyright The Closure Library Authors. 
  SPDX-License-Identifier: Apache-2.0 
  */
  'use strict';

  var p,
    aa = cc11001100_hook("aa", {}, "var-init"),
    u = cc11001100_hook("u", this || self, "var-init");
  function ba(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", typeof a, "var-init");
    b = cc11001100_hook("b", "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null", "assign");
    return "array" == b || "object" == b && "number" == typeof a.length;
  }
  function ca(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", typeof a, "var-init");
    return "object" == b && null != a || "function" == b;
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = cc11001100_hook("a[da]", ++fa, "assign"));
  }
  var da = cc11001100_hook("da", "closure_uid_" + (1E9 * Math.random() >>> 0), "var-init"),
    fa = cc11001100_hook("fa", 0, "var-init");
  function ha(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a.call.apply(a.bind, arguments);
  }
  function ia(a, b, c) {
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
  function x(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? x = cc11001100_hook("x", ha, "assign") : x = cc11001100_hook("x", ia, "assign");
    return x.apply(null, arguments);
  }
  function ja(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Array.prototype.slice.call(arguments, 1), "var-init");
    return function () {
      var d = cc11001100_hook("d", c.slice(), "var-init");
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function ka(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  ;
  var la;
  function ma(a) {
    cc11001100_hook("a", a, "function-parameter");
    u.setTimeout(() => {
      throw a;
    }, 0);
  }
  ;
  function na() {
    var a = cc11001100_hook("a", u.navigator, "var-init");
    return a && (a = cc11001100_hook("a", a.userAgent, "assign")) ? a : "";
  }
  function z(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 != na().indexOf(a);
  }
  ;
  function oa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function pa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function qa(a, b) {
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
  function ra(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", Array(c), "var-init"),
      e = cc11001100_hook("e", "string" === typeof a ? a.split("") : a, "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < c; f++) f in e && (d[f] = cc11001100_hook("d[f]", b.call(void 0, e[f], f, a), "assign"));
    return d;
  }
  function sa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function ta(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 <= oa(a, b);
  }
  function ua(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.length, "var-init");
    if (0 < b) {
      const c = cc11001100_hook("c", Array(b), "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c[d] = cc11001100_hook("c[d]", a[d], "assign");
      return c;
    }
    return [];
  }
  function va(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let c = cc11001100_hook("c", 1, "var-init"); c < arguments.length; c++) {
      const d = cc11001100_hook("d", arguments[c], "var-init");
      if (ba(d)) {
        const e = cc11001100_hook("e", a.length || 0, "var-init"),
          f = cc11001100_hook("f", d.length || 0, "var-init");
        a.length = cc11001100_hook("a.length", e + f, "assign");
        for (let g = cc11001100_hook("g", 0, "var-init"); g < f; g++) a[e + g] = cc11001100_hook("a[e + g]", d[g], "assign");
      } else a.push(d);
    }
  }
  function wa(a, b) {
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
  function xa(a) {
    cc11001100_hook("a", a, "function-parameter");
    xa[" "](a);
    return a;
  }
  xa[" "] = cc11001100_hook("xa[\" \"]", function () {}, "assign");
  var ya = cc11001100_hook("ya", z("Opera"), "var-init"),
    za = cc11001100_hook("za", z("Trident") || z("MSIE"), "var-init"),
    Aa = cc11001100_hook("Aa", z("Edge"), "var-init"),
    Ba = cc11001100_hook("Ba", z("Gecko") && !(-1 != na().toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"), "var-init"),
    Ca = cc11001100_hook("Ca", -1 != na().toLowerCase().indexOf("webkit") && !z("Edge"), "var-init");
  function Da() {
    var a = cc11001100_hook("a", u.document, "var-init");
    return a ? a.documentMode : void 0;
  }
  var Ea;
  a: {
    var Fa = cc11001100_hook("Fa", "", "var-init"),
      Ga = cc11001100_hook("Ga", function () {
        var a = cc11001100_hook("a", na(), "var-init");
        if (Ba) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Aa) return /Edge\/([\d\.]+)/.exec(a);
        if (za) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ca) return /WebKit\/(\S+)/.exec(a);
        if (ya) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }(), "var-init");
    Ga && (Fa = cc11001100_hook("Fa", Ga ? Ga[1] : "", "assign"));
    if (za) {
      var Ha = cc11001100_hook("Ha", Da(), "var-init");
      if (null != Ha && Ha > parseFloat(Fa)) {
        Ea = cc11001100_hook("Ea", String(Ha), "assign");
        break a;
      }
    }
    Ea = cc11001100_hook("Ea", Fa, "assign");
  }
  var Ia = cc11001100_hook("Ia", Ea, "var-init"),
    Ja;
  if (u.document && za) {
    var Ka = cc11001100_hook("Ka", Da(), "var-init");
    Ja = cc11001100_hook("Ja", Ka ? Ka : parseInt(Ia, 10) || void 0, "assign");
  } else Ja = cc11001100_hook("Ja", void 0, "assign");
  var La = cc11001100_hook("La", Ja, "var-init");
  var Ma = cc11001100_hook("Ma", {}, "var-init"),
    Na = cc11001100_hook("Na", null, "var-init");
  var Pa = cc11001100_hook("Pa", "undefined" !== typeof Uint8Array, "var-init");
  const Qa = cc11001100_hook("Qa", !za && "function" === typeof u.btoa, "var-init");
  const Ra = cc11001100_hook("Ra", Symbol(), "var-init");
  function Sa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Ra) return a[Ra] |= cc11001100_hook("a[Ra]", b, "assign");
    if (void 0 !== a.sa) return a.sa |= cc11001100_hook("a.sa", b, "assign");
    Object.defineProperties(a, {
      sa: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return b;
  }
  function B(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    Ra ? b = cc11001100_hook("b", a[Ra], "assign") : b = cc11001100_hook("b", a.sa, "assign");
    return null == b ? 0 : b;
  }
  function Ta(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ra ? a[Ra] = cc11001100_hook("a[Ra]", b, "assign") : void 0 !== a.sa ? a.sa = cc11001100_hook("a.sa", b, "assign") : Object.defineProperties(a, {
      sa: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
  }
  function Va(a) {
    cc11001100_hook("a", a, "function-parameter");
    Sa(a, 1);
    return a;
  }
  function Wa(a) {
    cc11001100_hook("a", a, "function-parameter");
    Sa(a, 16);
    return a;
  }
  function Xa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ta(b, (a | 0) & -51);
  }
  function Ya(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ta(b, (a | 18) & -41);
  }
  ;
  var Za = cc11001100_hook("Za", {}, "var-init");
  function $a(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  let ab;
  var bb;
  const cb = cc11001100_hook("cb", [], "var-init");
  Ta(cb, 23);
  bb = cc11001100_hook("bb", Object.freeze(cb), "assign");
  function db(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a & 2) throw Error();
  }
  function eb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && $a(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
  function fb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", B(a), "var-init");
    let d = cc11001100_hook("d", c, "var-init");
    0 === d && (d |= cc11001100_hook("d", b & 16, "assign"));
    d |= cc11001100_hook("d", b & 2, "assign");
    d !== c && Ta(a, d);
  }
  ;
  function gb(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l + a.Ea, "var-init");
    return a.qa || (a.qa = cc11001100_hook("a.qa", a.N[b] = cc11001100_hook("a.N[b]", {}, "assign"), "assign"));
  }
  function C(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return -1 === b ? null : b >= a.l ? a.qa ? a.qa[b] : void 0 : c && a.qa && (c = cc11001100_hook("c", a.qa[b], "assign"), null != c) ? c : a.N[b + a.Ea];
  }
  function hb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    db(B(a.N));
    return ib(a, b, c, d);
  }
  function ib(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.m && (a.m = cc11001100_hook("a.m", void 0, "assign"));
    if (b >= a.l || d) return gb(a)[b] = cc11001100_hook("gb(a)[b]", c, "assign"), a;
    a.N[b + a.Ea] = cc11001100_hook("a.N[b + a.Ea]", c, "assign");
    (c = cc11001100_hook("c", a.qa, "assign")) && b in c && delete c[b];
    return a;
  }
  function jb(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    let f = cc11001100_hook("f", C(a, b, d), "var-init");
    Array.isArray(f) || (f = cc11001100_hook("f", bb, "assign"));
    const g = cc11001100_hook("g", B(f), "var-init");
    g & 1 || Va(f);
    if (e) g & 2 || Sa(f, 18), c & 1 || Object.freeze(f);else {
      e = cc11001100_hook("e", !(c & 2), "assign");
      const h = cc11001100_hook("h", g & 2, "var-init");
      c & 1 || !h ? e && g & 16 && !h && (a = cc11001100_hook("a", f, "assign"), Ra ? a[Ra] && (a[Ra] &= cc11001100_hook("a[Ra]", -17, "assign")) : void 0 !== a.sa && (a.sa &= cc11001100_hook("a.sa", -17, "assign"))) : (f = cc11001100_hook("f", Va(Array.prototype.slice.call(f)), "assign"), ib(a, b, f, d));
    }
    return f;
  }
  function kb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", C(a, b), "assign");
    return null == a ? a : !!a;
  }
  function lb(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", !!(B(a.N) & 2), "var-init");
    let c = cc11001100_hook("c", jb(a, 4, 1, !1, b), "var-init"),
      d = cc11001100_hook("d", B(c), "var-init");
    if (!(d & 4)) {
      Object.isFrozen(c) && (c = cc11001100_hook("c", Va(c.slice()), "assign"), ib(a, 4, c, !1));
      let e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", 0, "var-init");
      for (; e < c.length; e++) {
        const g = cc11001100_hook("g", c[e], "var-init");
        null != g && (c[f++] = cc11001100_hook("c[f++]", g, "assign"));
      }
      f < e && (c.length = cc11001100_hook("c.length", f, "assign"));
      d |= cc11001100_hook("d", 5, "assign");
      b && (d |= cc11001100_hook("d", 18, "assign"));
      Ta(c, d);
      d & 2 && Object.freeze(c);
    }
    !b && (d & 2 || Object.isFrozen(c)) && (c = cc11001100_hook("c", Array.prototype.slice.call(c), "assign"), Sa(c, 5), ib(a, 4, c, !1));
    return c;
  }
  function D(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    db(B(a.N));
    c !== d ? ib(a, b, c) : ib(a, b, void 0, !1);
    return a;
  }
  function mb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", C(a, c, !1), "var-init");
    {
      let e = cc11001100_hook("e", !1, "var-init");
      null == d || "object" !== typeof d || (e = cc11001100_hook("e", Array.isArray(d), "assign")) || d.Cb !== Za ? e ? (fb(d, B(a.N)), b = cc11001100_hook("b", new b(d), "assign")) : b = cc11001100_hook("b", void 0, "assign") : b = cc11001100_hook("b", d, "assign");
    }
    b !== d && null != b && ib(a, c, b, !1);
    return b;
  }
  function nb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", mb(a, b, c), "assign");
    if (null == b) return b;
    if (!(B(a.N) & 2)) {
      const d = cc11001100_hook("d", ob(b), "var-init");
      d !== b && (b = cc11001100_hook("b", d, "assign"), ib(a, c, b, !1));
    }
    return b;
  }
  function qb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", B(a.N), "var-init"),
      e = cc11001100_hook("e", !!(d & 2), "var-init");
    var f = cc11001100_hook("f", !!(d & 2), "var-init");
    a.j || (a.j = cc11001100_hook("a.j", {}, "assign"));
    var g = cc11001100_hook("g", a.j[c], "var-init");
    var h = cc11001100_hook("h", jb(a, c, 3, void 0, f), "var-init");
    if (g) f || (f = cc11001100_hook("f", Object.isFrozen(g), "assign"), e && !f ? Object.freeze(g) : !e && f && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign"), a.j[c] = cc11001100_hook("a.j[c]", g, "assign")));else {
      var l = cc11001100_hook("l", h, "var-init");
      g = cc11001100_hook("g", [], "assign");
      f = cc11001100_hook("f", !!(d & 2), "assign");
      h = cc11001100_hook("h", !!(B(l) & 2), "assign");
      const q = cc11001100_hook("q", l, "var-init");
      !f && h && (l = cc11001100_hook("l", Array.prototype.slice.call(l), "assign"));
      var k = cc11001100_hook("k", d | (h ? 2 : 0), "var-init");
      d = cc11001100_hook("d", h, "assign");
      let r = cc11001100_hook("r", 0, "var-init");
      for (; r < l.length; r++) {
        var m = cc11001100_hook("m", l[r], "var-init");
        var n = cc11001100_hook("n", b, "var-init");
        Array.isArray(m) ? (fb(m, k), m = cc11001100_hook("m", new n(m), "assign")) : m = cc11001100_hook("m", void 0, "assign");
        void 0 !== m && (d || (d = cc11001100_hook("d", !!(2 & B(m.N)), "assign")), g.push(m));
      }
      a.j[c] = cc11001100_hook("a.j[c]", g, "assign");
      k = cc11001100_hook("k", B(l), "assign");
      b = cc11001100_hook("b", k | 33, "assign");
      b = cc11001100_hook("b", d ? b & -9 : b | 8, "assign");
      k != b && (d = cc11001100_hook("d", l, "assign"), Object.isFrozen(d) && (d = cc11001100_hook("d", Array.prototype.slice.call(d), "assign")), Ta(d, b), l = cc11001100_hook("l", d, "assign"));
      q !== l && ib(a, c, l);
      (f || e && h) && Sa(g, 18);
      e && Object.freeze(g);
    }
    a = cc11001100_hook("a", jb(a, c, 3, void 0, e), "assign");
    if (!(e || B(a) & 8)) {
      for (e = cc11001100_hook("e", 0, "assign"); e < g.length; e++) c = cc11001100_hook("c", g[e], "assign"), f = cc11001100_hook("f", ob(c), "assign"), c !== f && (g[e] = cc11001100_hook("g[e]", f, "assign"), a[e] = cc11001100_hook("a[e]", f.N, "assign"));
      Sa(a, 8);
    }
    return g;
  }
  function rb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    db(B(a.N));
    null == c && (c = cc11001100_hook("c", void 0, "assign"));
    return ib(a, b, c);
  }
  function sb(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", kb(a, b), "assign");
    return null == a ? c : a;
  }
  ;
  let tb;
  function ub(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    tb = cc11001100_hook("tb", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    tb = cc11001100_hook("tb", void 0, "assign");
    return a;
  }
  ;
  function vb(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (B(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), eb(a), a;
        } else if (Pa && null != a && a instanceof Uint8Array) {
          if (Qa) {
            for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
            b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
            a = cc11001100_hook("a", btoa(b), "assign");
          } else {
            void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
            if (!Na) {
              Na = cc11001100_hook("Na", {}, "assign");
              for (var c = cc11001100_hook("c", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), d = cc11001100_hook("d", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), e = cc11001100_hook("e", 0, "var-init"); 5 > e; e++) {
                var f = cc11001100_hook("f", c.concat(d[e].split("")), "var-init");
                Ma[e] = cc11001100_hook("Ma[e]", f, "assign");
                for (var g = cc11001100_hook("g", 0, "var-init"); g < f.length; g++) {
                  var h = cc11001100_hook("h", f[g], "var-init");
                  void 0 === Na[h] && (Na[h] = cc11001100_hook("Na[h]", g, "assign"));
                }
              }
            }
            b = cc11001100_hook("b", Ma[b], "assign");
            c = cc11001100_hook("c", Array(Math.floor(a.length / 3)), "assign");
            d = cc11001100_hook("d", b[64] || "", "assign");
            for (e = cc11001100_hook("e", f = cc11001100_hook("f", 0, "assign"), "assign"); f < a.length - 2; f += cc11001100_hook("f", 3, "assign")) {
              var l = cc11001100_hook("l", a[f], "var-init"),
                k = cc11001100_hook("k", a[f + 1], "var-init");
              h = cc11001100_hook("h", a[f + 2], "assign");
              g = cc11001100_hook("g", b[l >> 2], "assign");
              l = cc11001100_hook("l", b[(l & 3) << 4 | k >> 4], "assign");
              k = cc11001100_hook("k", b[(k & 15) << 2 | h >> 6], "assign");
              h = cc11001100_hook("h", b[h & 63], "assign");
              c[e++] = cc11001100_hook("c[e++]", g + l + k + h, "assign");
            }
            g = cc11001100_hook("g", 0, "assign");
            h = cc11001100_hook("h", d, "assign");
            switch (a.length - f) {
              case 2:
                g = cc11001100_hook("g", a[f + 1], "assign"), h = cc11001100_hook("h", b[(g & 15) << 2] || d, "assign");
              case 1:
                a = cc11001100_hook("a", a[f], "assign"), c[e] = cc11001100_hook("c[e]", b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d, "assign");
            }
            a = cc11001100_hook("a", c.join(""), "assign");
          }
          return a;
        }
    }
    return a;
  }
  ;
  function wb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", xb(a, b, c, void 0 !== d), "assign");else if ($a(a)) {
        const e = cc11001100_hook("e", {}, "var-init");
        for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = cc11001100_hook("e[f]", wb(a[f], b, c, d), "assign"));
        a = cc11001100_hook("a", e, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function xb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", B(a), "var-init");
    d = cc11001100_hook("d", d ? !!(e & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) a[f] = cc11001100_hook("a[f]", wb(a[f], b, c, d), "assign");
    c(e, a);
    return a;
  }
  function yb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.Cb === Za ? a.toJSON() : vb(a);
  }
  function zb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && eb(b);
  }
  ;
  function Ab(a, b, c = Ya) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if (Pa && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = cc11001100_hook("d", B(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return Ta(a, d | 18), a;
        a = cc11001100_hook("a", xb(a, Ab, d & 4 ? Ya : c, !0), "assign");
        b = cc11001100_hook("b", B(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.Cb === Za ? Bb(a) : a;
    }
  }
  function Cb(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    if (a = cc11001100_hook("a", a.j && a.j[c], "assign")) {
      d = cc11001100_hook("d", B(a), "assign");
      d & 2 ? d = cc11001100_hook("d", a, "assign") : (f = cc11001100_hook("f", ra(a, Bb), "assign"), Ya(d, f), Object.freeze(f), d = cc11001100_hook("d", f, "assign"));
      db(B(b.N));
      g = cc11001100_hook("g", null == d ? bb : Va([]), "assign");
      if (null != d) {
        f = cc11001100_hook("f", !!d.length, "assign");
        for (a = cc11001100_hook("a", 0, "assign"); a < d.length; a++) {
          const h = cc11001100_hook("h", d[a], "var-init");
          f = cc11001100_hook("f", f && !(B(h.N) & 2), "assign");
          g[a] = cc11001100_hook("g[a]", h.N, "assign");
        }
        f = cc11001100_hook("f", (f ? 8 : 0) | 1, "assign");
        a = cc11001100_hook("a", B(g), "assign");
        (a & f) !== f && (Object.isFrozen(g) && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign")), Ta(g, a | f));
        b.j || (b.j = cc11001100_hook("b.j", {}, "assign"));
        b.j[c] = cc11001100_hook("b.j[c]", d, "assign");
      } else b.j && (b.j[c] = cc11001100_hook("b.j[c]", void 0, "assign"));
      ib(b, c, g, e);
    } else hb(b, c, Ab(d, f, g), e);
  }
  function Bb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (B(a.N) & 2) return a;
    a = cc11001100_hook("a", Db(a, !0), "assign");
    Sa(a.N, 18);
    return a;
  }
  function Db(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.N, "var-init");
    var d = cc11001100_hook("d", Wa([]), "var-init"),
      e = cc11001100_hook("e", a.constructor.messageId, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.qa, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      d.fill(void 0, d.length, c.length);
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (B(c) & 128) && eb(d);
    b = cc11001100_hook("b", b || B(a.N) & 2 ? Ya : Xa, "assign");
    d = cc11001100_hook("d", ub(a.constructor, d), "assign");
    a.Mb && (d.Mb = cc11001100_hook("d.Mb", a.Mb.slice(), "assign"));
    f = cc11001100_hook("f", !!(B(c) & 16), "assign");
    const g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Cb(a, d, h - a.Ea, c[h], !1, f, b);
    if (e) for (const h in e) Cb(a, d, +h, e[h], !0, f, b);
    return d;
  }
  function ob(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!(B(a.N) & 2)) return a;
    const b = cc11001100_hook("b", Db(a, !1), "var-init");
    b.m = cc11001100_hook("b.m", a, "assign");
    return b;
  }
  ;
  var Fb = cc11001100_hook("Fb", class {
    constructor(a, b, c) {
      null == a && (a = cc11001100_hook("a", tb, "assign"));
      tb = cc11001100_hook("tb", void 0, "assign");
      var d = cc11001100_hook("d", this.constructor.messageId, "var-init");
      if (null == a) {
        a = cc11001100_hook("a", d ? [d] : [], "assign");
        var e = cc11001100_hook("e", !0, "var-init");
        Ta(a, 48);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (d && d !== a[0]) throw Error();
        var f = cc11001100_hook("f", Sa(a, 0) | 32, "var-init");
        e = cc11001100_hook("e", 0 !== (16 & f), "assign");
        if (128 & f) throw Error();
        Ta(a, f);
      }
      this.Ea = cc11001100_hook("this.Ea", d ? 0 : -1, "assign");
      this.j = cc11001100_hook("this.j", void 0, "assign");
      this.N = cc11001100_hook("this.N", a, "assign");
      a: {
        f = cc11001100_hook("f", this.N.length, "assign");
        d = cc11001100_hook("d", f - 1, "assign");
        if (f && (f = cc11001100_hook("f", this.N[d], "assign"), $a(f))) {
          this.qa = cc11001100_hook("this.qa", f, "assign");
          this.l = cc11001100_hook("this.l", d - this.Ea, "assign");
          break a;
        }
        void 0 !== b && -1 < b ? (this.l = cc11001100_hook("this.l", Math.max(b, d + 1 - this.Ea), "assign"), this.qa = cc11001100_hook("this.qa", void 0, "assign")) : this.l = cc11001100_hook("this.l", Number.MAX_VALUE, "assign");
      }
      if (this.qa && "g" in this.qa) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c) {
        b = cc11001100_hook("b", e && !0, "assign");
        e = cc11001100_hook("e", this.l, "assign");
        let h;
        for (d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) if (f = cc11001100_hook("f", c[d], "assign"), f < e) {
          f += cc11001100_hook("f", this.Ea, "assign");
          var g = cc11001100_hook("g", a[f], "var-init");
          g ? Eb(g, b) : a[f] = cc11001100_hook("a[f]", bb, "assign");
        } else h || (h = cc11001100_hook("h", gb(this), "assign")), (g = cc11001100_hook("g", h[f], "assign")) ? Eb(g, b) : h[f] = cc11001100_hook("h[f]", bb, "assign");
      }
    }
    toJSON() {
      const a = cc11001100_hook("a", this.N, "var-init");
      return ab ? a : xb(a, yb, zb);
    }
  }, "var-init");
  function Eb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", B(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && Ta(a, c | d);
    }
  }
  Fb.prototype.Cb = cc11001100_hook("Fb.prototype.Cb", Za, "assign");
  function Gb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return vb(b);
  }
  ;
  let Hb = cc11001100_hook("Hb", void 0, "var-init");
  function Ib(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Hb, "var-init");
    Hb = cc11001100_hook("Hb", void 0, "assign");
    if (!b(a)) throw b = cc11001100_hook("b", c ? c() + "\n" : "", "assign"), Error(b + String(a));
  }
  ;
  function Jb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", ub(a, Wa(b)), "assign");
      }
      return b;
    };
  }
  ;
  function Kb() {
    return !1;
  }
  function Lb() {
    return !0;
  }
  function Mb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function Nb(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", !1, "var-init"),
      c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }
  function Ob(a) {
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
  function Pb(a) {
    cc11001100_hook("a", a, "function-parameter");
    function b() {
      d = cc11001100_hook("d", u.setTimeout(c, 100), "assign");
      let g = cc11001100_hook("g", f, "var-init");
      f = cc11001100_hook("f", [], "assign");
      a.apply(void 0, g);
    }
    function c() {
      d = cc11001100_hook("d", 0, "assign");
      e && (e = cc11001100_hook("e", !1, "assign"), b());
    }
    let d = cc11001100_hook("d", 0, "var-init"),
      e = cc11001100_hook("e", !1, "var-init"),
      f = cc11001100_hook("f", [], "var-init");
    return function (g) {
      f = cc11001100_hook("f", arguments, "assign");
      d ? e = cc11001100_hook("e", !0, "assign") : b();
    };
  }
  ;
  var Qb = cc11001100_hook("Qb", {
      capture: cc11001100_hook("capture", !0, "object-key-init")
    }, "var-init"),
    Rb = cc11001100_hook("Rb", {
      passive: cc11001100_hook("passive", !0, "object-key-init")
    }, "var-init"),
    Sb = cc11001100_hook("Sb", Nb(function () {
      let a = cc11001100_hook("a", !1, "var-init");
      try {
        const b = cc11001100_hook("b", Object.defineProperty({}, "passive", {
          get: function () {
            a = cc11001100_hook("a", !0, "assign");
          }
        }), "var-init");
        u.addEventListener("test", null, b);
      } catch (b) {}
      return a;
    }), "var-init");
  function Tb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.passive && Sb() ? a : a.capture || !1 : !1;
  }
  function G(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return a.addEventListener ? (a.addEventListener(b, c, Tb(d)), !0) : !1;
  }
  function I(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return a.removeEventListener ? (a.removeEventListener(b, c, Tb(d)), !0) : !1;
  }
  ;
  var Ub = cc11001100_hook("Ub", za || Ca, "var-init");
  var Vb;
  function Wb() {
    if (void 0 === Vb) {
      var a = cc11001100_hook("a", null, "var-init"),
        b = cc11001100_hook("b", u.trustedTypes, "var-init");
      if (b && b.createPolicy) {
        try {
          a = cc11001100_hook("a", b.createPolicy("goog#html", {
            createHTML: cc11001100_hook("createHTML", ka, "object-key-init"),
            createScript: cc11001100_hook("createScript", ka, "object-key-init"),
            createScriptURL: cc11001100_hook("createScriptURL", ka, "object-key-init")
          }), "assign");
        } catch (c) {
          u.console && u.console.error(c.message);
        }
        Vb = cc11001100_hook("Vb", a, "assign");
      } else Vb = cc11001100_hook("Vb", a, "assign");
    }
    return Vb;
  }
  ;
  var Yb = cc11001100_hook("Yb", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", b === Xb ? a : "", "assign");
      }
      toString() {
        return this.j + "";
      }
    }, "var-init"),
    Xb = cc11001100_hook("Xb", {}, "var-init");
  function Zb(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Wb(), "var-init");
    a = cc11001100_hook("a", b ? b.createScriptURL(a) : a, "assign");
    return new Yb(a, Xb);
  }
  ;
  var ac = cc11001100_hook("ac", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", b === $b ? a : "", "assign");
      }
      toString() {
        return this.j.toString();
      }
    }, "var-init"),
    $b = cc11001100_hook("$b", {}, "var-init"),
    bc = cc11001100_hook("bc", new ac("about:invalid#zClosurez", $b), "var-init");
  const cc = cc11001100_hook("cc", {}, "var-init");
  function dc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof ec && a.constructor === ec ? a.j : "type_error:SafeHtml";
  }
  class ec {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", b === cc ? a : "", "assign");
    }
    toString() {
      return this.j.toString();
    }
  }
  var fc = cc11001100_hook("fc", new ec(u.trustedTypes && u.trustedTypes.emptyHTML || "", cc), "var-init");
  var gc = cc11001100_hook("gc", Nb(function () {
    var a = cc11001100_hook("a", document.createElement("div"), "var-init"),
      b = cc11001100_hook("b", document.createElement("div"), "var-init");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = cc11001100_hook("b", a.firstChild.firstChild, "assign");
    a.innerHTML = cc11001100_hook("a.innerHTML", dc(fc), "assign");
    return !b.parentElement;
  }), "var-init");
  function hc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Array.prototype.reduce.call(arguments, function (b, c) {
      return b + c;
    }, 0);
  }
  function ic(a) {
    cc11001100_hook("a", a, "function-parameter");
    return hc.apply(null, arguments) / arguments.length;
  }
  ;
  function J(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.x = cc11001100_hook("this.x", void 0 !== a ? a : 0, "assign");
    this.y = cc11001100_hook("this.y", void 0 !== b ? b : 0, "assign");
  }
  function jc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new J(a.x - b.x, a.y - b.y);
  }
  J.prototype.ceil = cc11001100_hook("J.prototype.ceil", function () {
    this.x = cc11001100_hook("this.x", Math.ceil(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.ceil(this.y), "assign");
    return this;
  }, "assign");
  J.prototype.floor = cc11001100_hook("J.prototype.floor", function () {
    this.x = cc11001100_hook("this.x", Math.floor(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.floor(this.y), "assign");
    return this;
  }, "assign");
  J.prototype.round = cc11001100_hook("J.prototype.round", function () {
    this.x = cc11001100_hook("this.x", Math.round(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.round(this.y), "assign");
    return this;
  }, "assign");
  function kc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.width = cc11001100_hook("this.width", a, "assign");
    this.height = cc11001100_hook("this.height", b, "assign");
  }
  p = cc11001100_hook("p", kc.prototype, "assign");
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
  function lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {
      "&amp;": cc11001100_hook("&amp;", "&", "object-key-init"),
      "&lt;": cc11001100_hook("&lt;", "<", "object-key-init"),
      "&gt;": cc11001100_hook("&gt;", ">", "object-key-init"),
      "&quot;": cc11001100_hook("&quot;", '"', "object-key-init")
    }, "var-init");
    let d;
    d = cc11001100_hook("d", b ? b.createElement("div") : u.document.createElement("div"), "assign");
    return a.replace(mc, function (e, f) {
      var g = cc11001100_hook("g", c[e], "var-init");
      if (g) return g;
      "#" == f.charAt(0) && (f = cc11001100_hook("f", Number("0" + f.slice(1)), "assign"), isNaN(f) || (g = cc11001100_hook("g", String.fromCharCode(f), "assign")));
      if (!g) {
        g = cc11001100_hook("g", e + " ", "assign");
        g = cc11001100_hook("g", (f = cc11001100_hook("f", Wb(), "assign")) ? f.createHTML(g) : g, "assign");
        g = cc11001100_hook("g", new ec(g, cc), "assign");
        if (gc()) for (; d.lastChild;) d.removeChild(d.lastChild);
        d.innerHTML = cc11001100_hook("d.innerHTML", dc(g), "assign");
        g = cc11001100_hook("g", d.firstChild.nodeValue.slice(0, -1), "assign");
      }
      return c[e] = cc11001100_hook("c[e]", g, "assign");
    });
  }
  var mc = cc11001100_hook("mc", /&([^;\s<&]+);?/g, "var-init");
  function nc(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 0, "var-init");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; ++c) b = cc11001100_hook("b", 31 * b + a.charCodeAt(c) >>> 0, "assign");
    return b;
  }
  function oc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function pc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  ;
  function qc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? new rc(sc(a)) : la || (la = cc11001100_hook("la", new rc(), "assign"));
  }
  function tc(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.document, "assign");
    a = cc11001100_hook("a", uc(a) ? a.documentElement : a.body, "assign");
    return new kc(a.clientWidth, a.clientHeight);
  }
  function vc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.document, "var-init"),
      c = cc11001100_hook("c", 0, "var-init");
    if (b) {
      c = cc11001100_hook("c", b.body, "assign");
      var d = cc11001100_hook("d", b.documentElement, "var-init");
      if (!d || !c) return 0;
      a = cc11001100_hook("a", tc(a).height, "assign");
      if (uc(b) && d.scrollHeight) c = cc11001100_hook("c", d.scrollHeight != a ? d.scrollHeight : d.offsetHeight, "assign");else {
        b = cc11001100_hook("b", d.scrollHeight, "assign");
        var e = cc11001100_hook("e", d.offsetHeight, "var-init");
        d.clientHeight != e && (b = cc11001100_hook("b", c.scrollHeight, "assign"), e = cc11001100_hook("e", c.offsetHeight, "assign"));
        c = cc11001100_hook("c", b > a ? b > e ? b : e : b < e ? b : e, "assign");
      }
    }
    return c;
  }
  function wc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.parentWindow || a.defaultView : window;
  }
  function xc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    function d(h) {
      cc11001100_hook("h", h, "function-parameter");
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = cc11001100_hook("e", 1, "var-init"); e < c.length; e++) {
      var f = cc11001100_hook("f", c[e], "var-init");
      if (!ba(f) || ca(f) && 0 < f.nodeType) d(f);else {
        a: {
          if (f && "number" == typeof f.length) {
            if (ca(f)) {
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
        pa(g ? ua(f) : f, d);
      }
    }
  }
  function yc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", String(b), "assign");
    "application/xhtml+xml" === a.contentType && (b = cc11001100_hook("b", b.toLowerCase(), "assign"));
    return a.createElement(b);
  }
  function uc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "CSS1Compat" == a.compatMode;
  }
  function zc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }
  function sc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  function Ac(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a && !c && (a = cc11001100_hook("a", a.parentNode, "assign"));
    for (c = cc11001100_hook("c", 0, "assign"); a && (null == d || c <= d);) {
      if (b(a)) return a;
      a = cc11001100_hook("a", a.parentNode, "assign");
      c++;
    }
    return null;
  }
  function rc(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.j = cc11001100_hook("this.j", a || u.document || document, "assign");
  }
  p = cc11001100_hook("p", rc.prototype, "assign");
  p.getElementsByTagName = cc11001100_hook("p.getElementsByTagName", function (a, b) {
    return (b || this.j).getElementsByTagName(String(a));
  }, "assign");
  p.createElement = cc11001100_hook("p.createElement", function (a) {
    return yc(this.j, a);
  }, "assign");
  p.createTextNode = cc11001100_hook("p.createTextNode", function (a) {
    return this.j.createTextNode(String(a));
  }, "assign");
  p.append = cc11001100_hook("p.append", function (a, b) {
    xc(sc(a), a, arguments);
  }, "assign");
  p.contains = cc11001100_hook("p.contains", zc, "assign");
  function Bc() {
    return !(z("iPad") || z("Android") && !z("Mobile") || z("Silk")) && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"));
  }
  ;
  var Cc = cc11001100_hook("Cc", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init"); /* 
                                                                                                                                                                                           SPDX-License-Identifier: Apache-2.0 
                                                                                                                                                                                           */
  class Dc {
    constructor(a) {
      this.hc = cc11001100_hook("this.hc", a, "assign");
    }
  }
  function Ec(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Dc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const Fc = cc11001100_hook("Fc", [Ec("data"), Ec("http"), Ec("https"), Ec("mailto"), Ec("ftp"), new Dc(a => /^[^:]*([/?#]|$)/.test(a))], "var-init");
  function Gc(a, b = Fc) {
    cc11001100_hook("a", a, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; ++c) {
      const d = cc11001100_hook("d", b[c], "var-init");
      if (d instanceof Dc && d.hc(a)) return new ac(a, $b);
    }
  }
  ;
  function Hc(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b;
      if (b = cc11001100_hook("b", !!a && null != a.location.href, "assign")) a: {
        try {
          xa(a.foo);
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
  function Ic(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Hc(a.top) ? a.top : null;
  }
  function Jc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Kc("SCRIPT", a), "var-init");
    c.src = cc11001100_hook("c.src", b instanceof Yb && b.constructor === Yb ? b.j : "type_error:TrustedResourceUrl", "assign");
    (b = cc11001100_hook("b", (b = cc11001100_hook("b", (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]"), "assign")) ? b.nonce || b.getAttribute("nonce") || "" : "", "assign")) && c.setAttribute("nonce", b);
    (a = cc11001100_hook("a", a.getElementsByTagName("script")[0], "assign")) && a.parentNode && a.parentNode.insertBefore(c, a);
  }
  function Lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Mc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function Nc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    Mc(a, function (c) {
      b.push(c);
    });
    return b;
  }
  var Oc = cc11001100_hook("Oc", /^([0-9.]+)px$/, "var-init"),
    Pc = cc11001100_hook("Pc", /^(-?[0-9.]{1,30})$/, "var-init");
  function Qc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Pc.test(a)) return null;
    a = cc11001100_hook("a", Number(a), "assign");
    return isNaN(a) ? null : a;
  }
  function K(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Oc.exec(a), "assign")) ? +a[1] : null;
  }
  var O = cc11001100_hook("O", (a, b) => {
      Mc(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    }, "var-init"),
    Rc = cc11001100_hook("Rc", (a, b) => {
      for (a = cc11001100_hook("a", [a], "assign"); a.length;) {
        var c = cc11001100_hook("c", a.shift(), "var-init");
        !1 !== b(c) && (c = cc11001100_hook("c", qa(c.children || c.childNodes || [], d => 1 === d.nodeType), "assign"), c.length && a.unshift(...c));
      }
    }, "var-init"),
    Tc = cc11001100_hook("Tc", (a, b) => {
      if ("length" in a.style) {
        a = cc11001100_hook("a", a.style, "assign");
        const c = cc11001100_hook("c", a.length, "var-init");
        for (let d = cc11001100_hook("d", 0, "var-init"); d < c; d++) {
          const e = cc11001100_hook("e", a[d], "var-init");
          b(a[e], e, a);
        }
      } else a = cc11001100_hook("a", Sc(a.style.cssText), "assign"), Mc(a, b);
    }, "var-init"),
    Sc = cc11001100_hook("Sc", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      if (a) {
        const c = cc11001100_hook("c", /\s*:\s*/, "var-init");
        pa((a || "").split(/\s*;\s*/), d => {
          if (d) {
            var e = cc11001100_hook("e", d.split(c), "var-init");
            d = cc11001100_hook("d", e[0], "assign");
            e = cc11001100_hook("e", e[1], "assign");
            d && e && (b[d.toLowerCase()] = cc11001100_hook("b[d.toLowerCase()]", e, "assign"));
          }
        });
      }
      return b;
    }, "var-init"),
    Uc = cc11001100_hook("Uc", (a, b = () => !0) => {
      const c = cc11001100_hook("c", /!\s*important/i, "var-init");
      Tc(a, (d, e) => {
        !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "");
      });
    }, "var-init");
  const Vc = cc11001100_hook("Vc", {
      ["http://googleads.g.doubleclick.net"]: cc11001100_hook("http://googleads.g.doubleclick.net", !0, "object-key-init"),
      ["http://pagead2.googlesyndication.com"]: cc11001100_hook("http://pagead2.googlesyndication.com", !0, "object-key-init"),
      ["https://googleads.g.doubleclick.net"]: cc11001100_hook("https://googleads.g.doubleclick.net", !0, "object-key-init"),
      ["https://pagead2.googlesyndication.com"]: cc11001100_hook("https://pagead2.googlesyndication.com", !0, "object-key-init")
    }, "var-init"),
    Wc = cc11001100_hook("Wc", /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/, "var-init"),
    Yc = cc11001100_hook("Yc", /.*domain\.test$/, "var-init"),
    Zc = cc11001100_hook("Zc", /\.prod\.google\.com(:\d+)?$/, "var-init");
  var $c = cc11001100_hook("$c", a => Vc[a] || Wc.test(a) || Yc.test(a) || Zc.test(a), "var-init"),
    ad = cc11001100_hook("ad", a => {
      a.preventDefault ? a.preventDefault() : a.returnValue = cc11001100_hook("a.returnValue", !1, "assign");
    }, "var-init");
  function Kc(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return b.createElement(String(a).toLowerCase());
  }
  ;
  function bd(a) {
    cc11001100_hook("a", a, "function-parameter");
    u.google_image_requests || (u.google_image_requests = cc11001100_hook("u.google_image_requests", [], "assign"));
    const b = cc11001100_hook("b", Kc("IMG", u.document), "var-init");
    b.src = cc11001100_hook("b.src", a, "assign");
    u.google_image_requests.push(b);
  }
  ;
  function cd(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    this.top = cc11001100_hook("this.top", a, "assign");
    this.right = cc11001100_hook("this.right", b, "assign");
    this.bottom = cc11001100_hook("this.bottom", c, "assign");
    this.left = cc11001100_hook("this.left", d, "assign");
  }
  p = cc11001100_hook("p", cd.prototype, "assign");
  p.getWidth = cc11001100_hook("p.getWidth", function () {
    return this.right - this.left;
  }, "assign");
  p.getHeight = cc11001100_hook("p.getHeight", function () {
    return this.bottom - this.top;
  }, "assign");
  function dd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new cd(a.top, a.right, a.bottom, a.left);
  }
  p.contains = cc11001100_hook("p.contains", function (a) {
    return this && a ? a instanceof cd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
  }, "assign");
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
  function ed(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 === b.length) return Zb(a[0]);
    const c = cc11001100_hook("c", [a[0]], "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return Zb(c.join(""));
  }
  ;
  function P(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if ("string" === typeof b) (b = cc11001100_hook("b", fd(a, b), "assign")) && (a.style[b] = cc11001100_hook("a.style[b]", c, "assign"));else for (var d in b) {
      c = cc11001100_hook("c", a, "assign");
      var e = cc11001100_hook("e", b[d], "var-init"),
        f = cc11001100_hook("f", fd(c, d), "var-init");
      f && (c.style[f] = cc11001100_hook("c.style[f]", e, "assign"));
    }
  }
  var gd = cc11001100_hook("gd", {}, "var-init");
  function fd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", gd[b], "var-init");
    if (!c) {
      var d = cc11001100_hook("d", oc(b), "var-init");
      c = cc11001100_hook("c", d, "assign");
      void 0 === a.style[d] && (d = cc11001100_hook("d", (Ca ? "Webkit" : Ba ? "Moz" : za ? "ms" : null) + pc(d), "assign"), void 0 !== a.style[d] && (c = cc11001100_hook("c", d, "assign")));
      gd[b] = cc11001100_hook("gd[b]", c, "assign");
    }
    return c;
  }
  function hd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", sc(a), "var-init");
    return c.defaultView && c.defaultView.getComputedStyle && (a = cc11001100_hook("a", c.defaultView.getComputedStyle(a, null), "assign")) ? a[b] || a.getPropertyValue(b) || "" : "";
  }
  function id(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return hd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
  }
  function jd(a) {
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
  function kd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", sc(a), "var-init"),
      c = cc11001100_hook("c", new J(0, 0), "var-init");
    var d = cc11001100_hook("d", b ? sc(b) : document, "var-init");
    d = cc11001100_hook("d", !za || 9 <= Number(La) || uc(qc(d).j) ? d.documentElement : d.body, "assign");
    if (a == d) return c;
    a = cc11001100_hook("a", jd(a), "assign");
    d = cc11001100_hook("d", qc(b).j, "assign");
    b = cc11001100_hook("b", d.scrollingElement ? d.scrollingElement : !Ca && uc(d) ? d.documentElement : d.body || d.documentElement, "assign");
    d = cc11001100_hook("d", d.parentWindow || d.defaultView, "assign");
    b = cc11001100_hook("b", za && d.pageYOffset != b.scrollTop ? new J(b.scrollLeft, b.scrollTop) : new J(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop), "assign");
    c.x = cc11001100_hook("c.x", a.left + b.x, "assign");
    c.y = cc11001100_hook("c.y", a.top + b.y, "assign");
    return c;
  }
  function ld(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (1 == a.nodeType) return a = cc11001100_hook("a", jd(a), "assign"), new J(a.left, a.top);
    a = cc11001100_hook("a", a.changedTouches ? a.changedTouches[0] : a, "assign");
    return new J(a.clientX, a.clientY);
  }
  function md(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b instanceof kc) {
      var c = cc11001100_hook("c", b.height, "var-init");
      b = cc11001100_hook("b", b.width, "assign");
    } else throw Error("missing height argument");
    a.style.width = cc11001100_hook("a.style.width", nd(b, !0), "assign");
    a.style.height = cc11001100_hook("a.style.height", nd(c, !0), "assign");
  }
  function nd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    "number" == typeof a && (a = cc11001100_hook("a", (b ? Math.round(a) : a) + "px", "assign"));
    return a;
  }
  function od(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", pd, "var-init");
    if ("none" != id(a, "display")) return b(a);
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
  function pd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.offsetWidth, "var-init"),
      c = cc11001100_hook("c", a.offsetHeight, "var-init"),
      d = cc11001100_hook("d", Ca && !b && !c, "var-init");
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = cc11001100_hook("a", jd(a), "assign"), new kc(a.right - a.left, a.bottom - a.top)) : new kc(b, c);
  }
  function qd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.currentStyle ? a.currentStyle[b] : null, "var-init");
    if (c) {
      if (/^\d+px?$/.test(c)) a = cc11001100_hook("a", parseInt(c, 10), "assign");else {
        b = cc11001100_hook("b", a.style.left, "assign");
        var d = cc11001100_hook("d", a.runtimeStyle.left, "var-init");
        a.runtimeStyle.left = cc11001100_hook("a.runtimeStyle.left", a.currentStyle.left, "assign");
        a.style.left = cc11001100_hook("a.style.left", c, "assign");
        c = cc11001100_hook("c", a.style.pixelLeft, "assign");
        a.style.left = cc11001100_hook("a.style.left", b, "assign");
        a.runtimeStyle.left = cc11001100_hook("a.runtimeStyle.left", d, "assign");
        a = cc11001100_hook("a", +c, "assign");
      }
    } else a = cc11001100_hook("a", 0, "assign");
    return a;
  }
  function rd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (za) {
      var c = cc11001100_hook("c", qd(a, b + "Left"), "var-init"),
        d = cc11001100_hook("d", qd(a, b + "Right"), "var-init"),
        e = cc11001100_hook("e", qd(a, b + "Top"), "var-init");
      a = cc11001100_hook("a", qd(a, b + "Bottom"), "assign");
      return new cd(e, d, a, c);
    }
    c = cc11001100_hook("c", hd(a, b + "Left"), "assign");
    d = cc11001100_hook("d", hd(a, b + "Right"), "assign");
    e = cc11001100_hook("e", hd(a, b + "Top"), "assign");
    a = cc11001100_hook("a", hd(a, b + "Bottom"), "assign");
    return new cd(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
  }
  ;
  var sd = cc11001100_hook("sd", a => "number" === typeof a && 0 < a, "var-init");
  class td {
    constructor(a, b) {
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", {}, "assign");
    }
  }
  ;
  const ud = cc11001100_hook("ud", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  var vd = cc11001100_hook("vd", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.l = cc11001100_hook("this.l", b, "assign");
      }
    }, "var-init"),
    wd = cc11001100_hook("wd", class {
      constructor(a, b) {
        this.url = cc11001100_hook("this.url", a, "assign");
        this.Nb = cc11001100_hook("this.Nb", !!b, "assign");
        this.depth = cc11001100_hook("this.depth", null, "assign");
      }
    }, "var-init");
  function xd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function yd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init");
    Mc(a, function (g, h) {
      (g = cc11001100_hook("g", zd(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function zd(a, b, c, d, e) {
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
        for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(zd(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(yd(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function Ad(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 1, "var-init");
    for (const c in a.l) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.m.length - 1;
  }
  function Bd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
      d = cc11001100_hook("d", Ad(a) - b.length, "var-init");
    if (0 > d) return "";
    a.j.sort(function (f, g) {
      return f - g;
    });
    b = cc11001100_hook("b", null, "assign");
    let e = cc11001100_hook("e", "", "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.j.length; f++) {
      const g = cc11001100_hook("g", a.j[f], "var-init"),
        h = cc11001100_hook("h", a.l[g], "var-init");
      for (let l = cc11001100_hook("l", 0, "var-init"); l < h.length; l++) {
        if (!d) {
          b = cc11001100_hook("b", null == b ? g : b, "assign");
          break;
        }
        let k = cc11001100_hook("k", yd(h[l], a.m, ",$"), "var-init");
        if (k) {
          k = cc11001100_hook("k", e + k, "assign");
          if (d >= k.length) {
            d -= cc11001100_hook("d", k.length, "assign");
            c += cc11001100_hook("c", k, "assign");
            e = cc11001100_hook("e", a.m, "assign");
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
  class Cd {
    constructor() {
      this.m = cc11001100_hook("this.m", "&", "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
      this.v = cc11001100_hook("this.v", 0, "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
    }
  }
  ;
  function Dd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= b && 1 >= b && (a.j = cc11001100_hook("a.j", b, "assign"));
  }
  function Ed(a, b, c, d = !1, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if ((d ? a.j : Math.random()) < (e || .01)) try {
      let f;
      c instanceof Cd ? f = cc11001100_hook("f", c, "assign") : (f = cc11001100_hook("f", new Cd(), "assign"), Mc(c, (h, l) => {
        var k = cc11001100_hook("k", f, "var-init");
        const m = cc11001100_hook("m", k.v++, "var-init");
        h = cc11001100_hook("h", xd(l, h), "assign");
        k.j.push(m);
        k.l[m] = cc11001100_hook("k.l[m]", h, "assign");
      }));
      const g = cc11001100_hook("g", Bd(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && bd(g);
    } catch (f) {}
  }
  class Fd {
    constructor() {
      this.j = cc11001100_hook("this.j", Math.random(), "assign");
    }
  }
  ;
  let Gd = cc11001100_hook("Gd", null, "var-init");
  function Hd() {
    const a = cc11001100_hook("a", u.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function Id() {
    const a = cc11001100_hook("a", u.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class Jd {
    constructor(a, b) {
      var c = cc11001100_hook("c", Id() || Hd(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const Kd = cc11001100_hook("Kd", u.performance, "var-init"),
    Ld = cc11001100_hook("Ld", !!(Kd && Kd.mark && Kd.measure && Kd.clearMarks), "var-init"),
    Md = cc11001100_hook("Md", Nb(() => {
      var a;
      if (a = cc11001100_hook("a", Ld, "assign")) {
        var b;
        if (null === Gd) {
          Gd = cc11001100_hook("Gd", "", "assign");
          try {
            a = cc11001100_hook("a", "", "assign");
            try {
              a = cc11001100_hook("a", u.top.location.hash, "assign");
            } catch (c) {
              a = cc11001100_hook("a", u.location.hash, "assign");
            }
            a && (Gd = cc11001100_hook("Gd", (b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "assign")) ? b[1] : "", "assign"));
          } catch (c) {}
        }
        b = cc11001100_hook("b", Gd, "assign");
        a = cc11001100_hook("a", !!b.indexOf && 0 <= b.indexOf("1337"), "assign");
      }
      return a;
    }), "var-init");
  function Nd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && Kd && Md() && (Kd.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Kd.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function Od(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j = cc11001100_hook("a.j", !1, "assign");
    a.l != a.m.google_js_reporting_queue && (Md() && pa(a.l, Nd), a.l.length = cc11001100_hook("a.l.length", 0, "assign"));
  }
  class Pd {
    constructor(a) {
      this.l = cc11001100_hook("this.l", [], "assign");
      this.m = cc11001100_hook("this.m", a || u, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.l = cc11001100_hook("this.l", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.j = cc11001100_hook("this.j", Md() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.j) return null;
      a = cc11001100_hook("a", new Jd(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      Kd && Md() && Kd.mark(b);
      return a;
    }
    end(a) {
      if (this.j && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Id() || Hd()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        Kd && Md() && Kd.mark(b);
        !this.j || 2048 < this.l.length || this.l.push(a);
      }
    }
  }
  ;
  function Qd(a) {
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
  class Rd {
    constructor(a, b = null) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
      this.B = cc11001100_hook("this.B", this.Qa, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", !1, "assign");
    }
    Db(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    v(a) {
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    ya(a, b, c) {
      let d, e;
      try {
        this.j && this.j.j ? (e = cc11001100_hook("e", this.j.start(a.toString(), 3), "assign"), d = cc11001100_hook("d", b(), "assign"), this.j.end(e)) : d = cc11001100_hook("d", b(), "assign");
      } catch (f) {
        b = cc11001100_hook("b", !0, "assign");
        try {
          Nd(e), b = cc11001100_hook("b", this.B(a, new td(f, {
            message: cc11001100_hook("message", Qd(f), "object-key-init")
          }), void 0, c), "assign");
        } catch (g) {
          this.Qa(217, g);
        }
        if (b) window.console?.error?.(f);else throw f;
      }
      return d;
    }
    O(a, b) {
      return (...c) => this.ya(a, () => b.apply(void 0, c));
    }
    Qa(a, b, c, d, e) {
      e = cc11001100_hook("e", e || "jserror", "assign");
      let f;
      try {
        const E = cc11001100_hook("E", new Cd(), "var-init");
        var g = cc11001100_hook("g", E, "var-init");
        g.j.push(1);
        g.l[1] = cc11001100_hook("g.l[1]", xd("context", a), "assign");
        b.error && b.meta && b.id || (b = cc11001100_hook("b", new td(b, {
          message: cc11001100_hook("message", Qd(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          g = cc11001100_hook("g", E, "assign");
          var h = cc11001100_hook("h", b.msg.substring(0, 512), "var-init");
          g.j.push(2);
          g.l[2] = cc11001100_hook("g.l[2]", xd("msg", h), "assign");
        }
        var l = cc11001100_hook("l", b.meta || {}, "var-init");
        b = cc11001100_hook("b", l, "assign");
        if (this.l) try {
          this.l(b);
        } catch (Z) {}
        if (d) try {
          d(b);
        } catch (Z) {}
        d = cc11001100_hook("d", E, "assign");
        l = cc11001100_hook("l", [l], "assign");
        d.j.push(3);
        d.l[3] = cc11001100_hook("d.l[3]", l, "assign");
        d = cc11001100_hook("d", u, "assign");
        l = cc11001100_hook("l", [], "assign");
        b = cc11001100_hook("b", null, "assign");
        do {
          var k = cc11001100_hook("k", d, "var-init");
          if (Hc(k)) {
            var m = cc11001100_hook("m", k.location.href, "var-init");
            b = cc11001100_hook("b", k.document && k.document.referrer || null, "assign");
          } else m = cc11001100_hook("m", b, "assign"), b = cc11001100_hook("b", null, "assign");
          l.push(new wd(m || ""));
          try {
            d = cc11001100_hook("d", k.parent, "assign");
          } catch (Z) {
            d = cc11001100_hook("d", null, "assign");
          }
        } while (d && k != d);
        for (let Z = cc11001100_hook("Z", 0, "var-init"), ea = cc11001100_hook("ea", l.length - 1, "var-init"); Z <= ea; ++Z) l[Z].depth = cc11001100_hook("l[Z].depth", ea - Z, "assign");
        k = cc11001100_hook("k", u, "assign");
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1) for (m = cc11001100_hook("m", 1, "assign"); m < l.length; ++m) {
          var n = cc11001100_hook("n", l[m], "var-init");
          n.url || (n.url = cc11001100_hook("n.url", k.location.ancestorOrigins[m - 1] || "", "assign"), n.Nb = cc11001100_hook("n.Nb", !0, "assign"));
        }
        var q = cc11001100_hook("q", l, "var-init");
        let L = cc11001100_hook("L", new wd(u.location.href, !1), "var-init");
        k = cc11001100_hook("k", null, "assign");
        const M = cc11001100_hook("M", q.length - 1, "var-init");
        for (n = cc11001100_hook("n", M, "assign"); 0 <= n; --n) {
          var r = cc11001100_hook("r", q[n], "var-init");
          !k && ud.test(r.url) && (k = cc11001100_hook("k", r, "assign"));
          if (r.url && !r.Nb) {
            L = cc11001100_hook("L", r, "assign");
            break;
          }
        }
        r = cc11001100_hook("r", null, "assign");
        const Ua = cc11001100_hook("Ua", q.length && q[M].url, "var-init");
        0 != L.depth && Ua && (r = cc11001100_hook("r", q[M], "assign"));
        f = cc11001100_hook("f", new vd(L, r), "assign");
        if (f.l) {
          q = cc11001100_hook("q", E, "assign");
          var t = cc11001100_hook("t", f.l.url || "", "var-init");
          q.j.push(4);
          q.l[4] = cc11001100_hook("q.l[4]", xd("top", t), "assign");
        }
        var y = cc11001100_hook("y", {
          url: cc11001100_hook("url", f.j.url || "", "object-key-init")
        }, "var-init");
        if (f.j.url) {
          var F = cc11001100_hook("F", f.j.url.match(Cc), "var-init"),
            H = cc11001100_hook("H", F[1], "var-init"),
            N = cc11001100_hook("N", F[3], "var-init"),
            v = cc11001100_hook("v", F[4], "var-init");
          t = cc11001100_hook("t", "", "assign");
          H && (t += cc11001100_hook("t", H + ":", "assign"));
          N && (t += cc11001100_hook("t", "//", "assign"), t += cc11001100_hook("t", N, "assign"), v && (t += cc11001100_hook("t", ":" + v, "assign")));
          var A = cc11001100_hook("A", t, "var-init");
        } else A = cc11001100_hook("A", "", "assign");
        H = cc11001100_hook("H", E, "assign");
        y = cc11001100_hook("y", [y, {
          url: cc11001100_hook("url", A, "object-key-init")
        }], "assign");
        H.j.push(5);
        H.l[5] = cc11001100_hook("H.l[5]", y, "assign");
        Ed(this.A, e, E, this.m, c);
      } catch (E) {
        try {
          Ed(this.A, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", Qd(E), "object-key-init"),
            url: cc11001100_hook("url", f && f.j.url, "object-key-init")
          }, this.m, c);
        } catch (L) {}
      }
      return !0;
    }
  }
  ;
  var Sd = cc11001100_hook("Sd", a => "string" === typeof a, "var-init"),
    Td = cc11001100_hook("Td", a => void 0 === a, "var-init");
  var Vd = cc11001100_hook("Vd", class extends Fb {
      constructor() {
        super(void 0, -1, Ud);
      }
    }, "var-init"),
    Ud = cc11001100_hook("Ud", [9], "var-init");
  function Wd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new Xd(), "var-init");
    return D(b, 1, a, 0);
  }
  function Yd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(a, 2, b, !1);
  }
  function Zd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(a, 3, b, !1);
  }
  function $d(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    hb(a, 5, b);
  }
  function ae(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(a, 6, b, !1);
  }
  var Xd = cc11001100_hook("Xd", class extends Fb {
    constructor() {
      super();
    }
  }, "var-init");
  function be(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new ce(), "var-init");
    return D(b, 1, a, 0);
  }
  function de(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return rb(a, 2, b);
  }
  function ee(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(a, 3, b, 0);
  }
  var ce = cc11001100_hook("ce", class extends Fb {
    constructor() {
      super();
    }
  }, "var-init");
  function fe(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && "function" == typeof a.Jb && a.Jb();
  }
  ;
  function ge() {
    this.L = cc11001100_hook("this.L", this.L, "assign");
    this.W = cc11001100_hook("this.W", this.W, "assign");
  }
  ge.prototype.L = cc11001100_hook("ge.prototype.L", !1, "assign");
  ge.prototype.Jb = cc11001100_hook("ge.prototype.Jb", function () {
    this.L || (this.L = cc11001100_hook("this.L", !0, "assign"), this.Ca());
  }, "assign");
  function he(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Q(a, ja(fe, b));
  }
  function Q(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.L ? b() : (a.W || (a.W = cc11001100_hook("a.W", [], "assign")), a.W.push(b));
  }
  ge.prototype.Ca = cc11001100_hook("ge.prototype.Ca", function () {
    if (this.W) for (; this.W.length;) this.W.shift()();
  }, "assign");
  var R = cc11001100_hook("R", a => {
    var b = cc11001100_hook("b", "Ab", "var-init");
    if (a.Ab && a.hasOwnProperty(b)) return a.Ab;
    b = cc11001100_hook("b", new a(), "assign");
    return a.Ab = cc11001100_hook("a.Ab", b, "assign");
  }, "var-init");
  function ie(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b[a] || c;
  }
  ;
  function je(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j = cc11001100_hook("a.j", () => ie(3, b, () => [])(1), "assign");
  }
  class ke {
    j() {
      return [];
    }
  }
  ;
  let le, me;
  const ne = cc11001100_hook("ne", new Pd(window), "var-init");
  (a => {
    le = cc11001100_hook("le", a ?? new Fd(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    Dd(le, window.google_srt);
    me = cc11001100_hook("me", new Rd(le, ne), "assign");
    me.Db(() => {});
    me.v(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || Od(ne) : ne.j && G(window, "load", () => {
      window.google_measure_js_timing || Od(ne);
    });
  })();
  function oe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return void 0 !== a.j[pe(b)];
  }
  function qe(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
    return b;
  }
  const S = cc11001100_hook("S", class {
    constructor() {
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
    }
    set(a, b) {
      const c = cc11001100_hook("c", pe(a), "var-init");
      this.j[c] = cc11001100_hook("this.j[c]", b, "assign");
      this.l[c] = cc11001100_hook("this.l[c]", a, "assign");
    }
    get(a, b) {
      a = cc11001100_hook("a", pe(a), "assign");
      return void 0 !== this.j[a] ? this.j[a] : b;
    }
    zb() {
      return qe(this).length;
    }
    clear() {
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
    }
  }, "var-init");
  function pe(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Object ? String(w(a)) : a + "";
  }
  ;
  var re = cc11001100_hook("re", class {
      constructor(a) {
        this.B = cc11001100_hook("this.B", null != a.j ? a.j : !0, "assign");
        this.A = cc11001100_hook("this.A", null != a.F ? a.F : 0, "assign");
        this.v = cc11001100_hook("this.v", null != a.A ? a.A : .9, "assign");
        this.l = cc11001100_hook("this.l", null != a.l ? a.l : 1.05, "assign");
        this.minWidth = cc11001100_hook("this.minWidth", null != a.C ? a.C : 0, "assign");
        this.C = cc11001100_hook("this.C", null != a.v ? a.v : 25, "assign");
        this.m = cc11001100_hook("this.m", null != a.m ? a.m : 0, "assign");
        this.G = cc11001100_hook("this.G", null != a.B ? a.B : !1, "assign");
        this.F = cc11001100_hook("this.F", a.G || null, "assign");
        this.j = cc11001100_hook("this.j", a.L || null, "assign");
      }
    }, "var-init"),
    se = cc11001100_hook("se", class {
      build() {
        return new re(this);
      }
    }, "var-init");
  function te(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
  }
  ;
  function ue(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = cc11001100_hook("a.google_reactive_ads_global_state.sideRailProcessedFixedElements", new Set(), "assign")), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = cc11001100_hook("a.google_reactive_ads_global_state.sideRailAvailableSpace", new Map(), "assign"))) : a.google_reactive_ads_global_state = cc11001100_hook("a.google_reactive_ads_global_state", new ve(), "assign");
    return a.google_reactive_ads_global_state;
  }
  class ve {
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
      this.floatingAdsStacking = cc11001100_hook("this.floatingAdsStacking", new we(), "assign");
      this.sideRailProcessedFixedElements = cc11001100_hook("this.sideRailProcessedFixedElements", new Set(), "assign");
      this.sideRailAvailableSpace = cc11001100_hook("this.sideRailAvailableSpace", new Map(), "assign");
    }
  }
  var we = cc11001100_hook("we", class {
    constructor() {
      this.maxZIndexRestrictions = cc11001100_hook("this.maxZIndexRestrictions", {}, "assign");
      this.nextRestrictionId = cc11001100_hook("this.nextRestrictionId", 0, "assign");
      this.maxZIndexListeners = cc11001100_hook("this.maxZIndexListeners", [], "assign");
    }
  }, "var-init");
  var xe = cc11001100_hook("xe", 728 * 1.38, "var-init"),
    ye = cc11001100_hook("ye", a => a.innerHeight >= a.innerWidth, "var-init"),
    ze = cc11001100_hook("ze", a => {
      const b = cc11001100_hook("b", T(a).clientWidth, "var-init");
      a = cc11001100_hook("a", a.innerWidth, "assign");
      return b && a ? b / a : 0;
    }, "var-init"),
    T = cc11001100_hook("T", a => {
      a = cc11001100_hook("a", a.document, "assign");
      let b = cc11001100_hook("b", {}, "var-init");
      a && (b = cc11001100_hook("b", "CSS1Compat" == a.compatMode ? a.documentElement : a.body, "assign"));
      return b || {};
    }, "var-init"),
    Ae = cc11001100_hook("Ae", (a, b) => {
      const c = cc11001100_hook("c", T(a), "var-init");
      return b ? c.scrollHeight == T(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight;
    }, "var-init"),
    Be = cc11001100_hook("Be", (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1, "var-init"),
    U = cc11001100_hook("U", a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset, "var-init"),
    Ce = cc11001100_hook("Ce", a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset, "var-init"),
    De = cc11001100_hook("De", a => {
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
    Ee = cc11001100_hook("Ee", a => {
      const b = cc11001100_hook("b", {
        bottom: cc11001100_hook("bottom", "auto", "object-key-init"),
        clear: cc11001100_hook("clear", "none", "object-key-init"),
        display: cc11001100_hook("display", "inline", "object-key-init"),
        "float": cc11001100_hook("float", "none", "object-key-init"),
        height: cc11001100_hook("height", "auto", "object-key-init"),
        left: cc11001100_hook("left", "auto", "object-key-init"),
        margin: cc11001100_hook("margin", 0, "object-key-init"),
        "margin-bottom": cc11001100_hook("margin-bottom", 0, "object-key-init"),
        "margin-left": cc11001100_hook("margin-left", 0, "object-key-init"),
        "margin-right": cc11001100_hook("margin-right", "0", "object-key-init"),
        "margin-top": cc11001100_hook("margin-top", 0, "object-key-init"),
        "max-height": cc11001100_hook("max-height", "none", "object-key-init"),
        "max-width": cc11001100_hook("max-width", "none", "object-key-init"),
        opacity: cc11001100_hook("opacity", 1, "object-key-init"),
        overflow: cc11001100_hook("overflow", "visible", "object-key-init"),
        padding: cc11001100_hook("padding", 0, "object-key-init"),
        "padding-bottom": cc11001100_hook("padding-bottom", 0, "object-key-init"),
        "padding-left": cc11001100_hook("padding-left", 0, "object-key-init"),
        "padding-right": cc11001100_hook("padding-right", 0, "object-key-init"),
        "padding-top": cc11001100_hook("padding-top", 0, "object-key-init"),
        position: cc11001100_hook("position", "static", "object-key-init"),
        right: cc11001100_hook("right", "auto", "object-key-init"),
        top: cc11001100_hook("top", "auto", "object-key-init"),
        "vertical-align": cc11001100_hook("vertical-align", "baseline", "object-key-init"),
        visibility: cc11001100_hook("visibility", "visible", "object-key-init"),
        width: cc11001100_hook("width", "auto", "object-key-init"),
        "z-index": cc11001100_hook("z-index", "auto", "object-key-init")
      }, "var-init");
      pa(Object.keys(b), c => {
        var d = cc11001100_hook("d", a.style[oc(c)], "var-init");
        ("undefined" !== typeof d ? d : a.style[fd(a, c)]) || P(a, c, b[c]);
      });
      Uc(a);
    }, "var-init");
  function Fe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", T(a).clientWidth, "var-init");
    var d = cc11001100_hook("d", T(a).clientHeight, "var-init");
    if ("number" !== typeof c || "number" !== typeof d) throw Error("No VP width and/or height.");
    c = cc11001100_hook("c", new kc(c, d), "assign");
    d = cc11001100_hook("d", Ce(a), "assign");
    a = cc11001100_hook("a", U(a), "assign");
    a = cc11001100_hook("a", Ge(a, c.width + d, c.height + a, d), "assign");
    return (te(b, a) ? new cd(Math.max(b.top, a.top), Math.min(b.right, a.right), Math.min(b.bottom, a.bottom), Math.max(b.left, a.left)) : null) || Ge(0, 0, 0, 0);
  }
  function He(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Ce(b), "var-init"),
      d = cc11001100_hook("d", U(b), "var-init");
    if (a.getBoundingClientRect) return a = cc11001100_hook("a", a.getBoundingClientRect(), "assign"), Ie(a) ? Ge(a.top + d, a.right + c, a.bottom + d, a.left + c) : Ge(0, 0, 0, 0);
    b = cc11001100_hook("b", b.document.createRange(), "assign");
    b.selectNodeContents(a);
    return b.collapsed ? Ge(0, 0, 0, 0) : b.getBoundingClientRect ? (a = cc11001100_hook("a", b.getBoundingClientRect(), "assign"), Ie(a) ? Ge(a.top + d, a.right + c, a.bottom + d, a.left + c) : Ge(0, 0, 0, 0)) : Ge(0, 0, 0, 0);
  }
  function Ie(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a && "number" === typeof a.top && !isNaN(a.top) && "number" === typeof a.right && !isNaN(a.right) && "number" === typeof a.bottom && !isNaN(a.bottom) && "number" === typeof a.left && !isNaN(a.left);
  }
  const Ge = cc11001100_hook("Ge", (a, b, c, d) => new cd(Math.ceil(a), Math.floor(b), Math.floor(c), Math.ceil(d)), "var-init");
  function Je(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ke(a).forEach(b, void 0);
  }
  function Ke(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c; d++) b.push(a[d]);
    return b;
  }
  ;
  const Le = cc11001100_hook("Le", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new S(), "assign");
      if (a) for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.j.set(a, !0);
    }
    contains(a) {
      return oe(this.j, a);
    }
  }, "var-init");
  class Me {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a[u.Symbol.iterator](), "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      const a = cc11001100_hook("a", this.j.next(), "var-init");
      return {
        value: cc11001100_hook("value", a.done ? void 0 : this.l.call(void 0, a.value), "object-key-init"),
        done: cc11001100_hook("done", a.done, "object-key-init")
      };
    }
  }
  function Ne(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new Me(a, b);
  }
  ;
  function Oe() {}
  Oe.prototype.next = cc11001100_hook("Oe.prototype.next", function () {
    return Pe;
  }, "assign");
  var Pe = cc11001100_hook("Pe", {
    done: cc11001100_hook("done", !0, "object-key-init"),
    value: cc11001100_hook("value", void 0, "object-key-init")
  }, "var-init");
  Oe.prototype.Aa = cc11001100_hook("Oe.prototype.Aa", function () {
    return this;
  }, "assign");
  function Qe(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof Oe) return a;
    if ("function" == typeof a.Aa) return a.Aa(!1);
    if (ba(a)) {
      let b = cc11001100_hook("b", 0, "var-init");
      const c = cc11001100_hook("c", new Oe(), "var-init");
      c.next = cc11001100_hook("c.next", function () {
        for (;;) {
          if (b >= a.length) return Pe;
          if (b in a) return {
            value: cc11001100_hook("value", a[b++], "object-key-init"),
            done: cc11001100_hook("done", !1, "object-key-init")
          };
          b++;
        }
      }, "assign");
      return c;
    }
    throw Error("Not implemented");
  }
  function Re(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Qe(a), "assign");
    const {
      done: b,
      value: c
    } = cc11001100_hook("", a.next(), "var-init");
    return b ? null : c;
  }
  ;
  function Se(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof Te || a instanceof Ue || a instanceof Ve) return a;
    if ("function" == typeof a.next) return new Te(() => a);
    if ("function" == typeof a[Symbol.iterator]) return new Te(() => a[Symbol.iterator]());
    if ("function" == typeof a.Aa) return new Te(() => a.Aa());
    throw Error("Not an iterator or iterable.");
  }
  class Te {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Aa() {
      return new Ue(this.j());
    }
    [Symbol.iterator]() {
      return new Ve(this.j());
    }
    l() {
      return new Ve(this.j());
    }
  }
  class Ue extends Oe {
    constructor(a) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    next() {
      return this.j.next();
    }
    [Symbol.iterator]() {
      return new Ve(this.j);
    }
    l() {
      return new Ve(this.j);
    }
  }
  class Ve extends Te {
    constructor(a) {
      super(() => a);
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    next() {
      return this.m.next();
    }
  }
  ;
  function We(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.l = cc11001100_hook("this.l", {}, "assign");
    this.j = cc11001100_hook("this.j", [], "assign");
    this.m = cc11001100_hook("this.m", this.size = cc11001100_hook("this.size", 0, "assign"), "assign");
    var c = cc11001100_hook("c", arguments.length, "var-init");
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = cc11001100_hook("d", 0, "var-init"); d < c; d += cc11001100_hook("d", 2, "assign")) this.set(arguments[d], arguments[d + 1]);
    } else if (a) if (a instanceof We) for (c = cc11001100_hook("c", Xe(a), "assign"), d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
  }
  p = cc11001100_hook("p", We.prototype, "assign");
  p.zb = cc11001100_hook("p.zb", function () {
    return this.size;
  }, "assign");
  function Xe(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ye(a);
    return a.j.concat();
  }
  p.has = cc11001100_hook("p.has", function (a) {
    return Object.prototype.hasOwnProperty.call(this.l, a);
  }, "assign");
  p.isEmpty = cc11001100_hook("p.isEmpty", function () {
    return 0 == this.size;
  }, "assign");
  p.clear = cc11001100_hook("p.clear", function () {
    this.l = cc11001100_hook("this.l", {}, "assign");
    this.m = cc11001100_hook("this.m", this.size = cc11001100_hook("this.size", this.j.length = cc11001100_hook("this.j.length", 0, "assign"), "assign"), "assign");
  }, "assign");
  function Ye(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.size != a.j.length) {
      for (var b = cc11001100_hook("b", 0, "var-init"), c = cc11001100_hook("c", 0, "var-init"); b < a.j.length;) {
        var d = cc11001100_hook("d", a.j[b], "var-init");
        Object.prototype.hasOwnProperty.call(a.l, d) && (a.j[c++] = cc11001100_hook("a.j[c++]", d, "assign"));
        b++;
      }
      a.j.length = cc11001100_hook("a.j.length", c, "assign");
    }
    if (a.size != a.j.length) {
      var e = cc11001100_hook("e", {}, "var-init");
      for (c = cc11001100_hook("c", b = cc11001100_hook("b", 0, "assign"), "assign"); b < a.j.length;) d = cc11001100_hook("d", a.j[b], "assign"), Object.prototype.hasOwnProperty.call(e, d) || (a.j[c++] = cc11001100_hook("a.j[c++]", d, "assign"), e[d] = cc11001100_hook("e[d]", 1, "assign")), b++;
      a.j.length = cc11001100_hook("a.j.length", c, "assign");
    }
  }
  p.get = cc11001100_hook("p.get", function (a, b) {
    return Object.prototype.hasOwnProperty.call(this.l, a) ? this.l[a] : b;
  }, "assign");
  p.set = cc11001100_hook("p.set", function (a, b) {
    Object.prototype.hasOwnProperty.call(this.l, a) || (this.size += cc11001100_hook("this.size", 1, "assign"), this.j.push(a), this.m++);
    this.l[a] = cc11001100_hook("this.l[a]", b, "assign");
  }, "assign");
  p.forEach = cc11001100_hook("p.forEach", function (a, b) {
    for (var c = cc11001100_hook("c", Xe(this), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c.length; d++) {
      var e = cc11001100_hook("e", c[d], "var-init"),
        f = cc11001100_hook("f", this.get(e), "var-init");
      a.call(b, f, e, this);
    }
  }, "assign");
  p.keys = cc11001100_hook("p.keys", function () {
    return Se(this.Aa(!0)).l();
  }, "assign");
  p.values = cc11001100_hook("p.values", function () {
    return Se(this.Aa(!1)).l();
  }, "assign");
  p.entries = cc11001100_hook("p.entries", function () {
    const a = cc11001100_hook("a", this, "var-init");
    return Ne(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  }, "assign");
  p.Aa = cc11001100_hook("p.Aa", function (a) {
    Ye(this);
    var b = cc11001100_hook("b", 0, "var-init"),
      c = cc11001100_hook("c", this.m, "var-init"),
      d = cc11001100_hook("d", this, "var-init"),
      e = cc11001100_hook("e", new Oe(), "var-init");
    e.next = cc11001100_hook("e.next", function () {
      if (c != d.m) throw Error("The map has changed since the iterator was created");
      if (b >= d.j.length) return Pe;
      var f = cc11001100_hook("f", d.j[b++], "var-init");
      return {
        value: cc11001100_hook("value", a ? f : d.l[f], "object-key-init"),
        done: cc11001100_hook("done", !1, "object-key-init")
      };
    }, "assign");
    return e;
  }, "assign");
  function Ze(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "transparent" == a || "rgba" == a.substring(0, 4) && (a = cc11001100_hook("a", a.split(","), "assign"), 4 == a.length && .5 > parseFloat(a[3])) ? !0 : !1;
  }
  function $e() {
    pa(af, a => {
      a.L = cc11001100_hook("a.L", null, "assign");
      a.C = cc11001100_hook("a.C", null, "assign");
    });
  }
  function bf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.D.ownerDocument) throw Error("Wrapped node should have an owner document.");
    return a.D.ownerDocument;
  }
  function cf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", bf(a), "assign");
    return a.defaultView || a.parentWindow;
  }
  function df(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.m.j(a.m.l), "var-init");
    return b == a || b != a && zc(b.D, a.D);
  }
  function ef(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Ke(a.D.childNodes).map(b => a.m.j(b)).filter(Mb(b => null === b));
  }
  function ff(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.j()) return null;
    const b = cc11001100_hook("b", ef(a.j()), "var-init");
    a = cc11001100_hook("a", oa(b, a), "assign");
    if (-1 == a) return null;
    for (a += cc11001100_hook("a", 1, "assign"); a < b.length; ++a) if (b[a].v() || b[a].I()) return b[a];
    return null;
  }
  function gf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ff(a), "var-init");
    return b ? b : a.j() ? gf(a.j()) : null;
  }
  function hf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.push(a);
    a = cc11001100_hook("a", ef(a), "assign");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; ++c) hf(a[c], b);
  }
  function jf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.l(), "var-init");
    if (0 != b.top || 0 != b.right || 0 != b.bottom || 0 != b.left) {
      var c = cc11001100_hook("c", Ce(cf(a)), "var-init");
      a = cc11001100_hook("a", U(cf(a)), "assign");
      c = cc11001100_hook("c", -c, "assign");
      a = cc11001100_hook("a", -a, "assign");
      c instanceof J ? (b.left += cc11001100_hook("b.left", c.x, "assign"), b.right += cc11001100_hook("b.right", c.x, "assign"), b.top += cc11001100_hook("b.top", c.y, "assign"), b.bottom += cc11001100_hook("b.bottom", c.y, "assign")) : (b.left += cc11001100_hook("b.left", c, "assign"), b.right += cc11001100_hook("b.right", c, "assign"), "number" === typeof a && (b.top += cc11001100_hook("b.top", a, "assign"), b.bottom += cc11001100_hook("b.bottom", a, "assign")));
    }
    return b;
  }
  function V(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (1 != a.D.nodeType) return null;
    a.A = cc11001100_hook("a.A", a.A || cf(a).getComputedStyle(a.D), "assign");
    return a.A ? a.A[b] || a.A.getPropertyValue(b) || "" : "";
  }
  function kf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (void 0 !== a.F[b]) return a.F[b];
    a.F[b] = cc11001100_hook("a.F[b]", lf(a, b, c), "assign");
    return a.F[b];
  }
  function mf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (void 0 !== a.H) return a.H;
    var b = cc11001100_hook("b", V(a, "position"), "var-init");
    if ("fixed" == b || "sticky" == b) b = cc11001100_hook("b", a, "assign");else {
      var c = cc11001100_hook("c", a.j(), "var-init");
      b = cc11001100_hook("b", c && "BODY" != a.D.tagName ? (c = cc11001100_hook("c", mf(c), "assign")) || "absolute" != b && "relative" != b ? c : a : null, "assign");
    }
    a.H = cc11001100_hook("a.H", b, "assign");
    return a.H;
  }
  function nf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", mf(a), "var-init");
    if (c && "relative" != V(c, "position")) {
      if (null != b) a: {
        do {
          const d = cc11001100_hook("d", a.l(), "var-init");
          if ((d.right - d.left) * (d.bottom - d.top) > b) {
            b = cc11001100_hook("b", !1, "assign");
            break a;
          }
          if (a == c) break;
          a = cc11001100_hook("a", a.j(), "assign");
        } while (null !== a);
        b = cc11001100_hook("b", !0, "assign");
      } else b = cc11001100_hook("b", !0, "assign");
    } else b = cc11001100_hook("b", !1, "assign");
    return b;
  }
  function lf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", V(a, "position"), "var-init");
    a: switch (b) {
      case 0:
        var e = cc11001100_hook("e", "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-x") || "scroll" == V(a, "overflow-x"), "var-init");
        break a;
      case 1:
        e = cc11001100_hook("e", "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-y") || "scroll" == V(a, "overflow-y"), "assign");
        break a;
      default:
        throw Error("Unknown pageAxis: " + b);
    }
    switch (d) {
      case "fixed":
        if (e) return a;
        break;
      case "static":
      case "":
      case null:
        if (e && !c) return a;
        if (a.j()) return kf(a.j(), b, c);
        break;
      case "absolute":
      case "relative":
        if (e) return a;
        if (a.j()) return kf(a.j(), b, "absolute" == d);
        break;
      default:
        u.console.error("Unknown position value: " + d);
    }
    return null;
  }
  function of(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.D.scrollHeight, "var-init");
    const c = cc11001100_hook("c", a.D.clientHeight, "var-init"),
      d = cc11001100_hook("d", bf(a).createElement("div"), "var-init");
    d.style.width = cc11001100_hook("d.style.width", "100%", "assign");
    d.style.height = cc11001100_hook("d.style.height", Math.max(b, c) + 100 + "px", "assign");
    d.style.clear = cc11001100_hook("d.style.clear", "both", "assign");
    a.D.appendChild(d);
    b = cc11001100_hook("b", a.D.scrollHeight > a.D.clientHeight && a.D.scrollHeight - b > a.D.clientHeight - c, "assign");
    a.D.removeChild(d);
    return b;
  }
  function pf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a.G ? a.G : "1" != V(a, "opacity") || a.j() && !pf(a.j()) ? a.G = cc11001100_hook("a.G", !1, "assign") : a.G = cc11001100_hook("a.G", !0, "assign");
  }
  function qf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.l(), "assign");
    a = cc11001100_hook("a", new cd(Math.max(a.top, 0), Math.max(a.right, 0), Math.max(a.bottom, 0), Math.max(a.left, 0)), "assign");
    return a.left < a.right && a.top < a.bottom;
  }
  function rf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a.B ? a.B : a.j() && rf(a.j()) || "0" == V(a, "opacity") || "none" == V(a, "display") || "hidden" == V(a, "visibility") || a.D.tagName && "input" == a.D.tagName.toLowerCase() && a.D.type && "hidden" == a.D.type ? a.B = cc11001100_hook("a.B", !0, "assign") : a.B = cc11001100_hook("a.B", !1, "assign");
  }
  function sf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b(a) ? !0 : a.j() ? sf(a.j(), b) : !1;
  }
  function tf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !sf(a, b => "hidden" == V(b, "overflow-y"));
  }
  function uf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", V(a, "position"), "assign");
    return "absolute" == a || "relative" == a;
  }
  function vf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.v() && (a = cc11001100_hook("a", parseInt(V(a, "z-index"), 10), "assign"), !isNaN(a)) ? a : 0;
  }
  function wf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return sf(a, c => !!c.D.tagName && c.D.tagName == b);
  }
  function xf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return sf(a, c => {
      c = cc11001100_hook("c", c.D, "assign");
      return !!c.id && !!c.id.match && !!c.id.match(b);
    });
  }
  function yf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return sf(a, c => {
      a: {
        c = cc11001100_hook("c", zf(c), "assign");
        for (let d = cc11001100_hook("d", 0, "var-init"); d < c.length; ++d) if (c[d].match(b)) {
          c = cc11001100_hook("c", !0, "assign");
          break a;
        }
        c = cc11001100_hook("c", !1, "assign");
      }
      return c;
    });
  }
  function zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a.D.className, "assign")) && "function" === typeof a.split ? /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/) : [];
  }
  function Af(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "A" == a.D.tagName ? a.D.getAttribute("href") : (a = cc11001100_hook("a", a.j(), "assign")) ? Af(a) : null;
  }
  function Bf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (1 != a.D.nodeType) {
      var b = cc11001100_hook("b", a.j(), "var-init");
      return b ? Bf(b) : 0;
    }
    const c = cc11001100_hook("c", bf(a).createTextNode("A"), "var-init");
    a.D.appendChild(c);
    b = cc11001100_hook("b", a.m.j(c), "assign");
    if (!b) throw a.D.removeChild(c), Error("Unable to insert textnode");
    a = cc11001100_hook("a", b.l(), "assign");
    b.D.parentNode && b.D.parentNode.removeChild(b.D);
    return a.bottom - a.top;
  }
  function Cf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b || null == a.W) {
      if (b && !b(a)) return 0;
      let c = cc11001100_hook("c", 0, "var-init");
      if (a.I()) c = cc11001100_hook("c", a.D.textContent.trim().length, "assign");else {
        const d = cc11001100_hook("d", ef(a), "var-init");
        for (let e = cc11001100_hook("e", 0, "var-init"); e < d.length; e++) c += cc11001100_hook("c", Cf(d[e], b), "assign");
      }
      b || (a.W = cc11001100_hook("a.W", c, "assign"));
      return c;
    }
    return a.W;
  }
  class Df {
    constructor(a, b) {
      this.D = cc11001100_hook("this.D", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.B = cc11001100_hook("this.B", this.G = cc11001100_hook("this.G", this.J = cc11001100_hook("this.J", this.K = cc11001100_hook("this.K", null, "assign"), "assign"), "assign"), "assign");
      this.F = cc11001100_hook("this.F", {}, "assign");
      this.A = cc11001100_hook("this.A", this.C = cc11001100_hook("this.C", this.W = cc11001100_hook("this.W", null, "assign"), "assign"), "assign");
      new We();
    }
    j() {
      return this.D != this.m.l && this.D.parentNode ? this.m.j(this.D.parentNode) : null;
    }
    v() {
      return 1 == this.D.nodeType;
    }
    I() {
      return 3 == this.D.nodeType;
    }
    l() {
      if (!this.L) {
        this.C || (this.C = cc11001100_hook("this.C", He(this.D, cf(this)), "assign"));
        var a = cc11001100_hook("a", dd(this.C), "var-init");
        var b = cc11001100_hook("b", V(this, "position"), "var-init");
        if ("fixed" == b) a = cc11001100_hook("a", Fe(cf(this), a), "assign");else if (this.j()) {
          var c = cc11001100_hook("c", kf(this.j(), 0, "absolute" == b), "var-init");
          if (c) {
            var d = cc11001100_hook("d", c.l(), "var-init");
            c = cc11001100_hook("c", d.left, "assign");
            d = cc11001100_hook("d", d.right, "assign");
            a = cc11001100_hook("a", a.left >= d || a.right <= c ? null : Ge(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c)), "assign");
          }
          a && (b = cc11001100_hook("b", kf(this.j(), 1, "absolute" == b), "assign")) && (c = cc11001100_hook("c", b.l(), "assign"), b = cc11001100_hook("b", c.top, "assign"), c = cc11001100_hook("c", c.bottom, "assign"), a = cc11001100_hook("a", a.top >= c || a.bottom <= b ? null : Ge(Math.max(a.top, b), a.right, Math.min(a.bottom, c), a.left), "assign"));
          a = cc11001100_hook("a", a && mf(this) && "fixed" == V(mf(this), "position") ? Fe(cf(this), a) : a || new cd(0, 0, 0, 0), "assign");
        }
        this.L = cc11001100_hook("this.L", a, "assign");
      }
      return dd(this.L);
    }
    Ka() {
      return !qf(this) || rf(this);
    }
    Bb() {
      var a = cc11001100_hook("a", V(this, "background-color"), "var-init");
      if (a = cc11001100_hook("a", a ? Ze(a) : !0, "assign")) a = cc11001100_hook("a", V(this, "background-image"), "assign"), a = cc11001100_hook("a", !(a && "none" != a), "assign");
      return a;
    }
    toString() {
      switch (this.D.nodeType) {
        case 1:
          const a = cc11001100_hook("a", this.D, "var-init");
          let b = cc11001100_hook("b", a.tagName, "var-init");
          a.id && (b += cc11001100_hook("b", "#" + a.id, "assign"));
          a.className && "function" === typeof a.className.split && (b += cc11001100_hook("b", "." + a.className.split(/\s+/).join("."), "assign"));
          return b;
        case 3:
          return "TEXT#" + this.D.textContent.substr(0, 10);
        default:
          return "HtmlNode";
      }
    }
  }
  function Ef(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(b), "var-init");
    var d = cc11001100_hook("d", a.v.get(c), "var-init");
    if ("boolean" === typeof d) return d;
    d = cc11001100_hook("d", a.A && 3 == b.nodeType ? !/\S/.test(b.data) : 1 != b.nodeType && 3 != b.nodeType && 9 != b.nodeType || b.tagName && ("SCRIPT" == b.tagName || "STYLE" == b.tagName) ? !0 : !1, "assign");
    !d && b.parentNode && b != a.l && (d = cc11001100_hook("d", Ef(a, b.parentNode), "assign"));
    a.v.set(c, d);
    return d;
  }
  var Ff = cc11001100_hook("Ff", class {
      constructor(a, b) {
        this.l = cc11001100_hook("this.l", a, "assign");
        this.A = cc11001100_hook("this.A", b, "assign");
        this.v = cc11001100_hook("this.v", new S(), "assign");
        this.m = cc11001100_hook("this.m", new S(), "assign");
      }
      j(a) {
        const b = cc11001100_hook("b", w(a), "var-init"),
          c = cc11001100_hook("c", this.m.get(b), "var-init");
        if (c) return c;
        if (Ef(this, a)) return null;
        a = cc11001100_hook("a", new Df(a, this), "assign");
        this.m.set(b, a);
        return a;
      }
    }, "var-init"),
    af = cc11001100_hook("af", [], "var-init");
  class Gf {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    j(a) {
      return Hf(this.m, a).contains(this.l);
    }
  }
  ;
  function Hf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(b), "var-init"),
      d = cc11001100_hook("d", a.l.get(c), "var-init");
    if (d) return d;
    b = cc11001100_hook("b", a.j(b), "assign");
    a.l.set(c, b);
    return b;
  }
  class If {
    constructor() {
      this.l = cc11001100_hook("this.l", new S(), "assign");
    }
  }
  ;
  function Jf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", Af(b), "var-init");
    if (a.m.j(b) && null !== c) return c;
    b = cc11001100_hook("b", ef(b), "assign");
    if (1 > b.length) return null;
    c = cc11001100_hook("c", Jf(a, b[0]), "assign");
    for (let d = cc11001100_hook("d", 1, "var-init"); d < b.length; ++d) if (Jf(a, b[d]) != c) return null;
    return c;
  }
  class Kf extends If {
    constructor(a) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j(a) {
      return new Le(null !== Jf(this, a) ? [1] : []);
    }
  }
  ;
  class Lf extends If {
    constructor(a) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j(a) {
      a: if (3 == a.D.nodeType) var b = cc11001100_hook("b", this.m.j(a), "var-init");else {
        b = cc11001100_hook("b", !1, "assign");
        a = cc11001100_hook("a", ef(a), "assign");
        for (let c of a) {
          if ((a = cc11001100_hook("a", V(c, "display"), "assign")) && "inline" != a) {
            b = cc11001100_hook("b", !1, "assign");
            break a;
          }
          Hf(this, c).contains(0) && (b = cc11001100_hook("b", !0, "assign"));
        }
      }
      return new Le(b ? [0] : []);
    }
  }
  ;
  function Mf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Cf(b, c => !a.m.j(c));
  }
  class Nf extends If {
    constructor(a, b, c) {
      super();
      this.v = cc11001100_hook("this.v", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
    }
    j(a) {
      if (this.v.j(a) && !this.m.j(a) && !this.A.j(a) && 50 <= Mf(this, a)) {
        var b = cc11001100_hook("b", Bf(a), "var-init");
        a = cc11001100_hook("a", a.l(), "assign");
        b = cc11001100_hook("b", a.bottom - a.top >= 2 * b || !1, "assign");
      } else b = cc11001100_hook("b", !1, "assign");
      return new Le(b ? [3] : []);
    }
  }
  ;
  function Of(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.classList ? a.classList.contains("adsbygoogle") : ta(a.classList ? a.classList : ("string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle");
  }
  ;
  function Pf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.m.j(b) ? sf(b, function (c) {
      switch (c.D.tagName) {
        case "H1":
        case "H2":
        case "H3":
        case "H4":
        case "H5":
        case "H6":
          return !0;
      }
      return !1;
    }) || Qf(b) && 5 <= Cf(b) ? !0 : (b = cc11001100_hook("b", b.j(), "assign")) ? Hf(a, b).contains(2) : !1 : !1;
  }
  function Qf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", zf(a), "assign");
    for (let b of a) if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/)) return !0;
    return !1;
  }
  class Rf extends If {
    constructor(a) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j(a) {
      return new Le(Pf(this, a) ? [2] : []);
    }
  }
  ;
  function Sf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    pa(a, c => {
      1 == c.D.nodeType && (Tf(c, ":before", b), Tf(c, ":after", b));
    });
    return b;
  }
  function Uf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", V(a, "content"), "assign");
    if (!a || "none" == a || /\(.*\)/.test(a)) return !1;
    /^['"].*['"]$/.test(a) && (a = cc11001100_hook("a", a.substring(1, a.length - 1), "assign"));
    return 0 < a.trim().length;
  }
  class Vf extends Df {
    constructor(a, b) {
      super(a.D, a.m);
      this.M = cc11001100_hook("this.M", a, "assign");
      this.Ca = cc11001100_hook("this.Ca", b, "assign");
      this.A = cc11001100_hook("this.A", cf(a).getComputedStyle(a.D, this.Ca), "assign");
    }
    v() {
      return !1;
    }
    I() {
      return !1;
    }
    Ka() {
      if (!Uf(this) && this.Bb()) var a = cc11001100_hook("a", !0, "var-init");else if (!(a = cc11001100_hook("a", this.j().Ka() || rf(this) || !qf(this), "assign"))) {
        a = cc11001100_hook("a", Uf(this), "assign");
        const c = cc11001100_hook("c", V(this, "width"), "var-init");
        var b = cc11001100_hook("b", V(this, "height"), "var-init");
        b = cc11001100_hook("b", a && "auto" == b || 0 < parseFloat(b), "assign");
        a = cc11001100_hook("a", !((a && "auto" == c || 0 < parseFloat(c)) && b), "assign");
      }
      return a;
    }
    j() {
      return this.M;
    }
    Bb() {
      const a = cc11001100_hook("a", id(this.j().D, "backgroundColor"), "var-init"),
        b = cc11001100_hook("b", V(this, "background-color"), "var-init");
      return null == b || b == a || Ze(b) || "fixed" != V(this, "position");
    }
    l() {
      switch (V(this, "position")) {
        case "absolute":
          var a = cc11001100_hook("a", this.j().l(), "var-init");
          const b = cc11001100_hook("b", a.top + parseInt(V(this, "top"), 10), "var-init");
          a = cc11001100_hook("a", a.left + parseInt(V(this, "left"), 10), "assign");
          let c = cc11001100_hook("c", parseInt(V(this, "width"), 10), "var-init"),
            d = cc11001100_hook("d", parseInt(V(this, "height"), 10), "var-init");
          return new cd(b, a + c, b + d, a);
        case "fixed":
          return new cd(0, parseInt(V(this, "width"), 10), parseInt(V(this, "height"), 10), 0);
        default:
          return this.j().l();
      }
    }
  }
  const Tf = cc11001100_hook("Tf", (a, b, c) => {
    if (":before" == b || ":after" == b) {
      var d = cc11001100_hook("d", new Vf(a, b), "var-init");
      if (!d.Ka()) switch (c.push(d), b) {
        case ":before":
          a.K = cc11001100_hook("a.K", d, "assign");
          break;
        case ":after":
          a.J = cc11001100_hook("a.J", d, "assign");
          break;
        default:
          throw Error("Unsupported pseudo type " + b);
      }
    }
  }, "var-init");
  const Wf = cc11001100_hook("Wf", new Le("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" ")), "var-init");
  class Xf extends If {
    j(a) {
      var b = cc11001100_hook("b", a.D, "var-init"),
        c = cc11001100_hook("c", bf(a), "var-init");
      if (3 == b.nodeType) {
        var d = cc11001100_hook("d", b.data, "var-init");
        c = cc11001100_hook("c", -1 != d.indexOf("&") ? lc(d, c) : d, "assign");
        c = cc11001100_hook("c", /\S/.test(c), "assign");
      } else c = cc11001100_hook("c", !1, "assign");
      (c = cc11001100_hook("c", c || (a instanceof Vf ? Uf(a) : !1), "assign")) || (c = cc11001100_hook("c", (b = cc11001100_hook("b", b.tagName, "assign")) && Wf.contains(b.toUpperCase()), "assign"));
      a = cc11001100_hook("a", c && !a.Ka(), "assign");
      return new Le(a ? [6] : []);
    }
  }
  ;
  function Yf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A || (a.A = cc11001100_hook("a.A", new Xf(), "assign"));
    return a.A;
  }
  function Zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l || (a.l = cc11001100_hook("a.l", new Lf(new Gf(Yf(a), 6)), "assign"));
    return a.l;
  }
  function $f(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m || (a.m = cc11001100_hook("a.m", new Rf(new Gf(Zf(a), 0)), "assign"));
    return a.m;
  }
  class ag {
    constructor() {
      this.v = cc11001100_hook("this.v", this.m = cc11001100_hook("this.m", this.j = cc11001100_hook("this.j", this.l = cc11001100_hook("this.l", this.A = cc11001100_hook("this.A", null, "assign"), "assign"), "assign"), "assign"), "assign");
    }
  }
  ;
  const bg = cc11001100_hook("bg", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new ag(), "assign");
    }
  }, "var-init");
  function cg(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (const c of a.j) b.push(c);
    return b;
  }
  class dg {
    constructor() {
      this.j = cc11001100_hook("this.j", [], "assign");
      this.m = cc11001100_hook("this.m", new Le(), "assign");
    }
    contains(a) {
      return this.m.contains(w(a));
    }
  }
  ;
  class eg {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
    }
    ca() {
      return this.m;
    }
  }
  const gg = cc11001100_hook("gg", (a, b, c) => {
      b = cc11001100_hook("b", fg(a.K, b, c), "assign");
      const d = cc11001100_hook("d", new eg(a, 0, b++), "var-init");
      c.pa.push(d);
      for (var e of ef(a)) b = cc11001100_hook("b", gg(e, b, c), "assign");
      e = cc11001100_hook("e", new eg(a, 1, b++), "assign");
      c.pa.push(e);
      c.map.set(w(a), {
        start: cc11001100_hook("start", d, "object-key-init"),
        end: cc11001100_hook("end", e, "object-key-init")
      });
      return b = cc11001100_hook("b", fg(a.J, b, c), "assign");
    }, "var-init"),
    fg = cc11001100_hook("fg", (a, b, c) => {
      if (!a) return b;
      const d = cc11001100_hook("d", new eg(a, 0, b++), "var-init"),
        e = cc11001100_hook("e", new eg(a, 1, b++), "var-init");
      c.pa.push(d);
      c.pa.push(e);
      c.map.set(w(a), {
        start: cc11001100_hook("start", d, "object-key-init"),
        end: cc11001100_hook("end", e, "object-key-init")
      });
      return b;
    }, "var-init");
  function hg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof Vf) return !0;
    if (!a.v()) return !1;
    const b = cc11001100_hook("b", a.D, "var-init"),
      c = cc11001100_hook("c", V(a, "position"), "var-init");
    if ("HTML" == b.tagName || "fixed" == c || "auto" != V(a, "z-index") && ("absolute" == c || "relative" == c)) return !0;
    a = cc11001100_hook("a", V(a, "opacity"), "assign");
    return "1" != a && "" != a ? !0 : !1;
  }
  function ig(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j.j(), "var-init");
    return b ? jg(a.l, b) : null;
  }
  class kg {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
  }
  function lg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", jg(a.j, b), "var-init");
    a = cc11001100_hook("a", jg(a.j, c), "assign");
    d = cc11001100_hook("d", mg(d, a), "assign");
    if (!d) return 0;
    switch (d.tb) {
      case 0:
        return vf(b) - vf(d.pb.j);
      case 1:
        return vf(d.ob.j) - vf(c);
      case 2:
        return vf(d.ob.j) - vf(d.pb.j);
      default:
        throw Error("Unhandled adjacency.");
    }
  }
  var og = cc11001100_hook("og", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new ng(), "assign");
    }
  }, "var-init");
  function jg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(b), "var-init");
    var d = cc11001100_hook("d", a.j.get(c), "var-init");
    if (d) return d;
    d = cc11001100_hook("d", b.j(), "assign");
    b = cc11001100_hook("b", !d || hg(b) ? new kg(b, a) : jg(a, d), "assign");
    a.j.set(c, b);
    return b;
  }
  var ng = cc11001100_hook("ng", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new S(), "assign");
    }
  }, "var-init");
  function mg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a == b) return null;
    const c = cc11001100_hook("c", new S(), "var-init");
    var d = cc11001100_hook("d", b, "var-init");
    let e;
    for (; e = cc11001100_hook("e", ig(d), "assign");) {
      if (a == e) return {
        ob: cc11001100_hook("ob", a, "object-key-init"),
        tb: cc11001100_hook("tb", 0, "object-key-init"),
        pb: cc11001100_hook("pb", d, "object-key-init")
      };
      c.set(w(e), d);
      d = cc11001100_hook("d", e, "assign");
    }
    for (; e = cc11001100_hook("e", ig(a), "assign");) {
      if (e == b) return {
        ob: cc11001100_hook("ob", a, "object-key-init"),
        tb: cc11001100_hook("tb", 1, "object-key-init"),
        pb: cc11001100_hook("pb", b, "object-key-init")
      };
      if (d = cc11001100_hook("d", c.get(w(e)), "assign")) return {
        ob: cc11001100_hook("ob", a, "object-key-init"),
        tb: cc11001100_hook("tb", 2, "object-key-init"),
        pb: cc11001100_hook("pb", d, "object-key-init")
      };
      a = cc11001100_hook("a", e, "assign");
    }
    throw Error("Contexts not in same DOM.");
  }
  ;
  function pg(a, b, c, d = []) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", [].concat(a, d), "assign");
    b = cc11001100_hook("b", new qg(b, c), "assign");
    for (let e of a) e.Bb() || e.Ka() || (c = cc11001100_hook("c", b, "assign"), a = cc11001100_hook("a", e, "assign"), c.j.push(a), c.m.add(w(a)));
    return b;
  }
  class qg extends dg {
    constructor(a, b) {
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
    }
    v(a, b = !1) {
      const c = cc11001100_hook("c", a.l(), "var-init");
      b = cc11001100_hook("b", b ? cg(this) : this.j.slice(0), "assign");
      for (let f = cc11001100_hook("f", 0, "var-init"); f < b.length; ++f) {
        var d = cc11001100_hook("d", b[f], "var-init");
        if (!df(d)) continue;
        var e = cc11001100_hook("e", d.l(), "var-init");
        if (!te(e, c)) continue;
        const g = cc11001100_hook("g", lg(this.A, d, a), "var-init");
        !(e = cc11001100_hook("e", 0 < g, "assign")) && (e = cc11001100_hook("e", 0 == g && !(d != a && zc(d.D, a.D)), "assign")) && (e = cc11001100_hook("e", a, "assign"), uf(d) && !uf(e) ? e = cc11001100_hook("e", !0, "assign") : !uf(d) && uf(e) ? e = cc11001100_hook("e", !1, "assign") : (e = cc11001100_hook("e", this.l.map.get(w(e)), "assign"), d = cc11001100_hook("d", this.l.map.get(w(d)), "assign"), e = cc11001100_hook("e", e && d && e.end.ca() < d.start.ca() ? !0 : !1, "assign")));
        if (e) return !0;
      }
      return !1;
    }
  }
  ;
  class rg {
    constructor(a, b) {
      this.ic = cc11001100_hook("this.ic", a, "assign");
      this.nc = cc11001100_hook("this.nc", b, "assign");
    }
  }
  ;
  function sg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init"),
      d = cc11001100_hook("d", null, "var-init");
    const e = cc11001100_hook("e", a.j.slice(0), "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < e.length; ++f) {
      const g = cc11001100_hook("g", a.l.map.get(w(e[f])), "var-init");
      g.end.ca() < b && g.end.ca() > c && (d = cc11001100_hook("d", g, "assign"), c = cc11001100_hook("c", g.end.ca(), "assign"));
    }
    return d;
  }
  class tg extends dg {
    constructor(a) {
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
    }
  }
  ;
  const ug = cc11001100_hook("ug", class extends tg {
    constructor(a, b) {
      super(a);
      this.A = cc11001100_hook("this.A", b, "assign");
    }
    v(a, b = !1) {
      const c = cc11001100_hook("c", a.l(), "var-init"),
        d = cc11001100_hook("d", nf(a), "var-init");
      b = cc11001100_hook("b", b ? cg(this) : this.j.slice(0), "assign");
      for (let e = cc11001100_hook("e", 0, "var-init"); e < b.length; ++e) {
        const f = cc11001100_hook("f", b[e], "var-init");
        if (df(f) && (d || !(0 < lg(this.A, a, f))) && te(b[e].l(), c)) return !0;
      }
      return !1;
    }
  }, "var-init");
  const vg = cc11001100_hook("vg", class {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
    }
  }, "var-init");
  const wg = cc11001100_hook("wg", class {
    constructor(a, b, c, d, e, f, g, h) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.P = cc11001100_hook("this.P", c, "assign");
      this.T = cc11001100_hook("this.T", d, "assign");
      this.v = cc11001100_hook("this.v", e, "assign");
      this.m = cc11001100_hook("this.m", f, "assign");
      this.j = cc11001100_hook("this.j", g, "assign");
      this.B = cc11001100_hook("this.B", h, "assign");
    }
  }, "var-init");
  const xg = cc11001100_hook("xg", class {
    constructor(a, b, c, d) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
    }
  }, "var-init");
  class yg {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j(a) {
      if (!a) return [9];
      a = cc11001100_hook("a", a.l(), "assign");
      a = cc11001100_hook("a", a.right - a.left, "assign");
      return this.l <= a && a <= this.m ? [] : [4];
    }
  }
  ;
  const zg = cc11001100_hook("zg", class {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b || null, "assign");
    }
  }, "var-init");
  function Ag(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 != a.m) throw Error("Already resolved/rejected.");
  }
  var Dg = cc11001100_hook("Dg", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new Bg(this), "assign");
      this.m = cc11001100_hook("this.m", 0, "assign");
    }
    resolve(a) {
      Ag(this);
      this.m = cc11001100_hook("this.m", 1, "assign");
      this.A = cc11001100_hook("this.A", a, "assign");
      Cg(this.j);
    }
    l(a) {
      Ag(this);
      this.m = cc11001100_hook("this.m", 2, "assign");
      this.v = cc11001100_hook("this.v", a, "assign");
      Cg(this.j);
    }
  }, "var-init");
  function Cg(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a.j.m) {
      case 0:
        break;
      case 1:
        a.l && a.l(a.j.A);
        break;
      case 2:
        a.m && a.m(a.j.v);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  var Bg = cc11001100_hook("Bg", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    then(a, b) {
      if (this.l) throw Error("Then functions already set.");
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      Cg(this);
    }
  }, "var-init");
  function Eg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", new Dg(), "var-init");
    a.j(new zg(function () {
      d.resolve(b());
    }, c));
    return d.j;
  }
  function Fg(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j(new zg(function () {
      b.resolve(c);
    }, d));
  }
  function Gg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j(new zg(function () {
      b.l("n");
    }, "rrej"));
  }
  var Hg = cc11001100_hook("Hg", class {}, "var-init");
  class Ig {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }
  ;
  function Jg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new Dg(), "var-init");
    a.j.j(new zg(function () {
      Kg(a, b, c);
    }, "idom"));
    return c.j;
  }
  function Lg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Eg(a.j, function () {
      return new bg();
    }, "icla");
  }
  function Mg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", new Dg(), "var-init");
    Ng(a, b, new Ig(c.j)).then(function (e) {
      Og(a, b).then(function (f) {
        Pg(a, b, e).then(function (g) {
          d.resolve(new vg(f, g, e));
        });
      });
    });
    return d.j;
  }
  function Qg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", new Dg(), "var-init");
    Jg(a, b).then(function (e) {
      Lg(a).then(function (f) {
        Mg(a, e, f).then(function (g) {
          Fg(a.j, d, new xg(e, g, f, c));
        }, x(d.l, d));
      }, x(d.l, d));
    }, x(d.l, d));
    return d.j;
  }
  function Kg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", b.document.body, "var-init");
    if (d) {
      var e = cc11001100_hook("e", b.document.body.getBoundingClientRect().width, "var-init");
      if (null == e) c.l("bw");else {
        var f = cc11001100_hook("f", T(b).clientWidth, "var-init"),
          g = cc11001100_hook("g", T(b).clientHeight, "var-init");
        if (null == f || null == g) c.l("vp");else {
          var h = cc11001100_hook("h", new Ff(d, !0).j(d), "var-init");
          if (h) {
            var l = cc11001100_hook("l", new og(), "var-init");
            Rg(a, h).then(function (k) {
              af = cc11001100_hook("af", k, "assign");
              Sg(a, h).then(function (m) {
                c.resolve(new wg(b, e, f, g, h, k, m, l));
              });
            });
          } else c.l("nt");
        }
      }
    } else c.l("b");
  }
  function Rg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eg(a.j, function () {
      const c = cc11001100_hook("c", [], "var-init");
      hf(b, c);
      return c;
    }, "iflt");
  }
  function Sg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eg(a.j, function () {
      const c = cc11001100_hook("c", {
        map: cc11001100_hook("map", new S(), "object-key-init"),
        pa: cc11001100_hook("pa", [], "object-key-init")
      }, "var-init");
      gg(b, 0, c);
      return c;
    }, "intm");
  }
  function Ng(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Eg(a.j, function () {
      var d = cc11001100_hook("d", b.m, "var-init");
      const e = cc11001100_hook("e", new ug(b.j, b.B), "var-init"),
        f = cc11001100_hook("f", new Gf(Yf(c.j), 6), "var-init");
      for (let h of d) if (f.j(h)) {
        d = cc11001100_hook("d", e, "assign");
        var g = cc11001100_hook("g", h, "var-init");
        d.j.push(g);
        d.m.add(w(g));
      }
      return e;
    }, "ivis");
  }
  function Og(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eg(a.j, function () {
      var c = cc11001100_hook("c", Sf(b.m), "var-init");
      return pg(b.m, b.j, b.B, c);
    }, "ibck");
  }
  function Pg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Eg(a.j, function () {
      var d = cc11001100_hook("d", b.j, "var-init");
      const e = cc11001100_hook("e", new S(), "var-init");
      var f = cc11001100_hook("f", 0, "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"); g < d.pa.length; ++g) {
        var h = cc11001100_hook("h", d.pa[g], "var-init"),
          l = cc11001100_hook("l", h.j, "var-init"),
          k;
        if (k = cc11001100_hook("k", 1 == h.l, "assign")) k = cc11001100_hook("k", V(l, "float"), "assign"), k = cc11001100_hook("k", "left" == k || "right" == k, "assign");
        k && (l = cc11001100_hook("l", l.l().bottom, "assign"), l > f && (f = cc11001100_hook("f", l, "assign")));
        e.set(w(h), f);
      }
      f = cc11001100_hook("f", new S(), "assign");
      g = cc11001100_hook("g", Number.MAX_VALUE, "assign");
      for (h = cc11001100_hook("h", d.pa.length - 1, "assign"); 0 <= h; --h) l = cc11001100_hook("l", d.pa[h], "assign"), k = cc11001100_hook("k", l.j, "assign"), 0 == l.l && c.contains(k) && (k = cc11001100_hook("k", k.l().top, "assign"), k < g && (g = cc11001100_hook("g", k, "assign"))), f.set(w(l), g);
      d = cc11001100_hook("d", new S(), "assign");
      g = cc11001100_hook("g", qe(e), "assign");
      for (h = cc11001100_hook("h", 0, "assign"); h < g.length; ++h) {
        l = cc11001100_hook("l", e.get(g[h]), "assign");
        k = cc11001100_hook("k", f.get(g[h]), "assign");
        if ("number" !== typeof k) throw Error("No entry in minSubsequentTopBounds for terminal UID!");
        d.set(g[h], new rg(l, k));
      }
      return d;
    }, "irel");
  }
  var Tg = cc11001100_hook("Tg", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }, "var-init");
  function Ug(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    Je(a.getElementsByTagName("p"), function (c) {
      100 <= Vg(c) && b.push(c);
    });
    return b;
  }
  function Vg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = cc11001100_hook("b", 0, "var-init");
    Je(a.childNodes, function (c) {
      b += cc11001100_hook("b", Vg(c), "assign");
    });
    return b;
  }
  function Wg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Xg(a, b) {
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
  const Yg = cc11001100_hook("Yg", class {
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
      a = cc11001100_hook("a", ua(b), "assign");
      a = cc11001100_hook("a", Xg(this, a), "assign");
      "number" === typeof this.l && (b = cc11001100_hook("b", this.l, "assign"), 0 > b && (b += cc11001100_hook("b", a.length, "assign")), a = cc11001100_hook("a", 0 <= b && b < a.length ? [a[b]] : [], "assign"));
      if ("number" === typeof this.m) {
        b = cc11001100_hook("b", [], "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
          var d = cc11001100_hook("d", Ug(a[c]), "var-init"),
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
  function Zg(a) {
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
  class $g {
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
  function ah(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    for (const e of a.j) b(e) ? d.push(e) : c(e);
    return new bh(d);
  }
  function ch(a, b = 1) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.j.slice(0), "assign");
    const c = cc11001100_hook("c", new $g(b), "var-init");
    wa(a, () => c.next());
    return new bh(a);
  }
  const bh = cc11001100_hook("bh", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a.slice(0), "assign");
    }
    forEach(a) {
      this.j.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new bh(qa(this.j, a));
    }
    apply(a) {
      return new bh(a(this.j.slice(0)));
    }
    sort(a) {
      return new bh(this.j.slice(0).sort(a));
    }
    get(a) {
      return this.j[a];
    }
    add(a) {
      const b = cc11001100_hook("b", this.j.slice(0), "var-init");
      b.push(a);
      return new bh(b);
    }
  }, "var-init");
  var eh = cc11001100_hook("eh", class extends Fb {
      constructor(a) {
        super(a, -1, dh);
      }
      getId() {
        return C(this, 3);
      }
    }, "var-init"),
    dh = cc11001100_hook("dh", [4], "var-init");
  class fh {
    constructor(a, {
      Ub: b,
      Oc: c,
      Yc: d,
      wc: e
    }) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
      this.v = cc11001100_hook("this.v", new bh(b || []), "assign");
      this.j = cc11001100_hook("this.j", e, "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
    }
  }
  ;
  var gh = cc11001100_hook("gh", a => {
      var b = cc11001100_hook("b", a.split("~").filter(c => 0 < c.length), "var-init");
      a = cc11001100_hook("a", new S(), "assign");
      for (const c of b) b = cc11001100_hook("b", c.indexOf("."), "assign"), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
      return a;
    }, "var-init"),
    ih = cc11001100_hook("ih", a => {
      var b = cc11001100_hook("b", hh(a), "var-init");
      a = cc11001100_hook("a", [], "assign");
      for (let c of b) b = cc11001100_hook("b", String(c.Ua), "assign"), a.push(c.Na + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
      return a.join("~");
    }, "var-init");
  const hh = cc11001100_hook("hh", a => {
      const b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", a.v, "var-init");
      c && c.j.length && b.push({
        Na: cc11001100_hook("Na", "a", "object-key-init"),
        Ua: cc11001100_hook("Ua", jh(c), "object-key-init")
      });
      null != a.l && b.push({
        Na: cc11001100_hook("Na", "as", "object-key-init"),
        Ua: cc11001100_hook("Ua", a.l, "object-key-init")
      });
      null != a.m && b.push({
        Na: cc11001100_hook("Na", "i", "object-key-init"),
        Ua: cc11001100_hook("Ua", String(a.m), "object-key-init")
      });
      null != a.j && b.push({
        Na: cc11001100_hook("Na", "rp", "object-key-init"),
        Ua: cc11001100_hook("Ua", String(a.j), "object-key-init")
      });
      b.sort(function (d, e) {
        return d.Na.localeCompare(e.Na);
      });
      b.unshift({
        Na: cc11001100_hook("Na", "t", "object-key-init"),
        Ua: cc11001100_hook("Ua", kh(a.A), "object-key-init")
      });
      return b;
    }, "var-init"),
    kh = cc11001100_hook("kh", a => {
      switch (a) {
        case 0:
          return "aa";
        case 1:
          return "ma";
        default:
          throw Error("Invalid slot type" + a);
      }
    }, "var-init"),
    jh = cc11001100_hook("jh", a => {
      a = cc11001100_hook("a", a.j.slice(0).map(lh), "assign");
      a = cc11001100_hook("a", JSON.stringify(a), "assign");
      {
        const c = cc11001100_hook("c", a.length, "var-init");
        if (0 == c) a = cc11001100_hook("a", 0, "assign");else {
          var b = cc11001100_hook("b", 305419896, "var-init");
          for (let d = cc11001100_hook("d", 0, "var-init"); d < c; d++) b ^= cc11001100_hook("b", (b << 5) + (b >> 2) + a.charCodeAt(d) & 4294967295, "assign");
          a = cc11001100_hook("a", 0 < b ? b : 4294967296 + b, "assign");
        }
      }
      return a;
    }, "var-init"),
    lh = cc11001100_hook("lh", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      null != C(a, 7) && (b.q = cc11001100_hook("b.q", C(a, 7), "assign"));
      null != C(a, 2) && (b.o = cc11001100_hook("b.o", C(a, 2), "assign"));
      null != C(a, 5) && (b.p = cc11001100_hook("b.p", C(a, 5), "assign"));
      return b;
    }, "var-init");
  var mh = cc11001100_hook("mh", class extends Fb {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return hb(this, 1, a);
    }
  }, "var-init");
  var nh = cc11001100_hook("nh", class {
    constructor(a, b = !1) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
    }
  }, "var-init");
  var oh = cc11001100_hook("oh", new nh(1196), "var-init"),
    ph = cc11001100_hook("ph", new nh(313), "var-init"),
    qh = cc11001100_hook("qh", new nh(1233), "var-init"),
    rh = cc11001100_hook("rh", new nh(1232), "var-init"),
    sh = cc11001100_hook("sh", new nh(1147), "var-init"),
    th = cc11001100_hook("th", new nh(1957, !0), "var-init"),
    uh = cc11001100_hook("uh", new class {
      constructor(a, b = 0) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(1972), "var-init");
  var vh = cc11001100_hook("vh", class {
    constructor() {
      const a = cc11001100_hook("a", {}, "var-init");
      this.j = cc11001100_hook("this.j", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.l = cc11001100_hook("this.l", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.v = cc11001100_hook("this.v", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.A = cc11001100_hook("this.A", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.m = cc11001100_hook("this.m", () => {}, "assign");
    }
  }, "var-init");
  function wh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return R(vh).j(a.j, a.defaultValue);
  }
  ;
  function xh(a, b, c) {
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
    Zg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = cc11001100_hook("b.style.display", "block", "assign"));
  }
  function yh(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a && a.parentNode) {
      const b = cc11001100_hook("b", a.parentNode, "var-init");
      b.removeChild(a);
      Zg(b) && (b.style.display = cc11001100_hook("b.style.display", b.getAttribute("data-init-display") || "none", "assign"));
    }
  }
  ;
  var Ah = cc11001100_hook("Ah", (a, b, c) => {
    if (wh(ph)) {
      var d = cc11001100_hook("d", zh(b, c), "var-init");
      if (d.Ia) {
        for (c = cc11001100_hook("c", b = cc11001100_hook("b", d.Ia, "assign"), "assign"); c = cc11001100_hook("c", d.ba(c), "assign");) b = cc11001100_hook("b", c, "assign");
        d = cc11001100_hook("d", {
          anchor: cc11001100_hook("anchor", b, "object-key-init"),
          position: cc11001100_hook("position", d.jb, "object-key-init")
        }, "assign");
      } else d = cc11001100_hook("d", {
        anchor: cc11001100_hook("anchor", b, "object-key-init"),
        position: cc11001100_hook("position", c, "object-key-init")
      }, "assign");
      a["google-ama-order-assurance"] = cc11001100_hook("a[\"google-ama-order-assurance\"]", 0, "assign");
      xh(a, d.anchor, d.position);
    } else xh(a, b, c);
  }, "var-init");
  function zh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", e => {
        e = cc11001100_hook("e", Bh(e), "assign");
        return null == e ? !1 : 0 < e;
      }, "var-init"),
      d = cc11001100_hook("d", e => {
        e = cc11001100_hook("e", Bh(e), "assign");
        return null == e ? !1 : 0 > e;
      }, "var-init");
    switch (b) {
      case 0:
        return {
          Ia: cc11001100_hook("Ia", Ch(a.previousSibling, c), "object-key-init"),
          ba: cc11001100_hook("ba", e => Ch(e.previousSibling, c), "object-key-init"),
          jb: cc11001100_hook("jb", 0, "object-key-init")
        };
      case 2:
        return {
          Ia: cc11001100_hook("Ia", Ch(a.lastChild, c), "object-key-init"),
          ba: cc11001100_hook("ba", e => Ch(e.previousSibling, c), "object-key-init"),
          jb: cc11001100_hook("jb", 0, "object-key-init")
        };
      case 3:
        return {
          Ia: cc11001100_hook("Ia", Ch(a.nextSibling, d), "object-key-init"),
          ba: cc11001100_hook("ba", e => Ch(e.nextSibling, d), "object-key-init"),
          jb: cc11001100_hook("jb", 3, "object-key-init")
        };
      case 1:
        return {
          Ia: cc11001100_hook("Ia", Ch(a.firstChild, d), "object-key-init"),
          ba: cc11001100_hook("ba", e => Ch(e.nextSibling, d), "object-key-init"),
          jb: cc11001100_hook("jb", 3, "object-key-init")
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Bh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null;
  }
  function Ch(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && b(a) ? a : null;
  }
  ;
  var Dh = cc11001100_hook("Dh", {
    0: cc11001100_hook(0, 0, "object-key-init"),
    1: cc11001100_hook(1, 1, "object-key-init"),
    2: cc11001100_hook(2, 2, "object-key-init"),
    3: cc11001100_hook(3, 3, "object-key-init")
  }, "var-init");
  var Eh = cc11001100_hook("Eh", {
      BODY: {
        da: cc11001100_hook("da", [1, 2], "object-key-init"),
        la: cc11001100_hook("la", !1, "object-key-init"),
        ma: cc11001100_hook("ma", 2, "object-key-init"),
        ka: cc11001100_hook("ka", 4, "object-key-init")
      },
      HEADER: {
        da: cc11001100_hook("da", [0, 3, 1, 2], "object-key-init"),
        la: cc11001100_hook("la", !1, "object-key-init"),
        ma: cc11001100_hook("ma", 1, "object-key-init"),
        ka: cc11001100_hook("ka", 3, "object-key-init")
      },
      NAV: {
        da: cc11001100_hook("da", [0, 3], "object-key-init"),
        la: cc11001100_hook("la", !1, "object-key-init"),
        ma: cc11001100_hook("ma", 1, "object-key-init"),
        ka: cc11001100_hook("ka", 3, "object-key-init")
      },
      H1: {
        da: cc11001100_hook("da", [0], "object-key-init"),
        la: cc11001100_hook("la", !1, "object-key-init"),
        ma: cc11001100_hook("ma", 1, "object-key-init"),
        ka: cc11001100_hook("ka", 2, "object-key-init")
      },
      IMG: {
        da: cc11001100_hook("da", [0, 3], "object-key-init"),
        la: cc11001100_hook("la", !0, "object-key-init"),
        ma: cc11001100_hook("ma", 0, "object-key-init"),
        ka: cc11001100_hook("ka", 1, "object-key-init")
      },
      DIV: {
        da: cc11001100_hook("da", [0, 3, 1, 2], "object-key-init"),
        la: cc11001100_hook("la", !0, "object-key-init"),
        ma: cc11001100_hook("ma", 0, "object-key-init"),
        ka: cc11001100_hook("ka", 1, "object-key-init")
      },
      TABLE: {
        da: cc11001100_hook("da", [0, 3], "object-key-init"),
        la: cc11001100_hook("la", !0, "object-key-init"),
        ma: cc11001100_hook("ma", 0, "object-key-init"),
        ka: cc11001100_hook("ka", 1, "object-key-init")
      },
      TD: {
        da: cc11001100_hook("da", [1, 2], "object-key-init"),
        la: cc11001100_hook("la", !0, "object-key-init"),
        ma: cc11001100_hook("ma", 0, "object-key-init"),
        ka: cc11001100_hook("ka", 1, "object-key-init")
      },
      ASIDE: {
        da: cc11001100_hook("da", [0, 3, 1, 2], "object-key-init"),
        la: cc11001100_hook("la", !0, "object-key-init"),
        ma: cc11001100_hook("ma", 0, "object-key-init"),
        ka: cc11001100_hook("ka", 1, "object-key-init")
      },
      LI: {
        da: cc11001100_hook("da", [1, 2], "object-key-init"),
        la: cc11001100_hook("la", !0, "object-key-init"),
        ma: cc11001100_hook("ma", 0, "object-key-init"),
        ka: cc11001100_hook("ka", 1, "object-key-init")
      },
      SECTION: {
        da: cc11001100_hook("da", [0, 3, 1, 2], "object-key-init"),
        la: cc11001100_hook("la", !0, "object-key-init"),
        ma: cc11001100_hook("ma", 0, "object-key-init"),
        ka: cc11001100_hook("ka", 1, "object-key-init")
      }
    }, "var-init"),
    Fh = cc11001100_hook("Fh", a => ({
      da: cc11001100_hook("da", a.da.slice(0), "object-key-init"),
      la: cc11001100_hook("la", a.la, "object-key-init"),
      ma: cc11001100_hook("ma", a.ma, "object-key-init"),
      ka: cc11001100_hook("ka", a.ka, "object-key-init")
    }), "var-init"),
    Gh = cc11001100_hook("Gh", (a, b) => {
      const c = cc11001100_hook("c", Fh(a), "var-init");
      c.da = cc11001100_hook("c.da", qa(a.da, d => b[d]), "assign");
      return c;
    }, "var-init");
  function Hh(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length - 1, "var-init"),
      c = cc11001100_hook("c", new Oe(), "var-init");
    c.next = cc11001100_hook("c.next", function () {
      return 0 > b ? Pe : {
        value: cc11001100_hook("value", a[b--], "object-key-init"),
        done: cc11001100_hook("done", !1, "object-key-init")
      };
    }, "assign");
    return c;
  }
  ;
  var Ih = cc11001100_hook("Ih", {
      0: cc11001100_hook(0, !0, "object-key-init"),
      1: cc11001100_hook(1, !0, "object-key-init")
    }, "var-init"),
    Jh = cc11001100_hook("Jh", {
      2: cc11001100_hook(2, !0, "object-key-init"),
      3: cc11001100_hook(3, !0, "object-key-init")
    }, "var-init"),
    Kh = cc11001100_hook("Kh", {
      3: cc11001100_hook(3, !0, "object-key-init")
    }, "var-init"),
    Lh = cc11001100_hook("Lh", class {
      constructor(a, b, c) {
        this.m = cc11001100_hook("this.m", a, "assign");
        this.l = cc11001100_hook("this.l", b, "assign");
        this.j = cc11001100_hook("this.j", c, "assign");
      }
      ba() {
        for (var a = cc11001100_hook("a", Re(this.l), "var-init"); null !== a; a = cc11001100_hook("a", Re(this.l), "assign")) {
          var b = cc11001100_hook("b", a.j, "var-init");
          if (1 != b.D.nodeType) b = cc11001100_hook("b", null, "assign");else {
            var c = cc11001100_hook("c", Eh[b.D.tagName], "var-init");
            c ? (a = cc11001100_hook("a", Gh(c, 0 == a.l ? Ih : 0 < ef(a.j).length ? Jh : Kh), "assign"), b = cc11001100_hook("b", {
              node: cc11001100_hook("node", b, "object-key-init"),
              ub: cc11001100_hook("ub", a, "object-key-init"),
              identifier: {}
            }, "assign")) : b = cc11001100_hook("b", null, "assign");
          }
          if (b && (a = cc11001100_hook("a", b.node.l().getWidth(), "assign"), c = cc11001100_hook("c", this.m, "assign"), null == a || null == c ? 0 : a >= c * this.j.v && a <= c * this.j.l)) return a = cc11001100_hook("a", new Dg(), "assign"), a.resolve(b), a.j;
        }
        b = cc11001100_hook("b", new Dg(), "assign");
        b.l("na");
        return b.j;
      }
    }, "var-init");
  var Mh = cc11001100_hook("Mh", {
    rectangle: cc11001100_hook("rectangle", 1, "object-key-init"),
    horizontal: cc11001100_hook("horizontal", 2, "object-key-init"),
    vertical: cc11001100_hook("vertical", 4, "object-key-init")
  }, "var-init");
  var Nh = cc11001100_hook("Nh", (a, b) => {
    do {
      const c = cc11001100_hook("c", Lc(a, b), "var-init");
      if (c && "fixed" == c.position) return !1;
    } while (a = cc11001100_hook("a", a.parentElement, "assign"));
    return !0;
  }, "var-init");
  var Oh = cc11001100_hook("Oh", (a, b) => {
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
    Ph = cc11001100_hook("Ph", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      for (let c in Mh) -1 != a.indexOf(c) && (b |= cc11001100_hook("b", Mh[c], "assign"));
      return b;
    }, "var-init"),
    Qh = cc11001100_hook("Qh", (a, b, c, d, e) => {
      if (a !== a.top) return Ic(a) ? 3 : 16;
      if (!(488 > T(a).clientWidth)) return 4;
      if (!(a.innerHeight >= a.innerWidth)) return 5;
      const f = cc11001100_hook("f", T(a).clientWidth, "var-init");
      if (!f || (f - c) / f > d) a = cc11001100_hook("a", 6, "assign");else {
        if (c = cc11001100_hook("c", "true" != e.google_full_width_responsive, "assign")) a: {
          c = cc11001100_hook("c", b.parentElement, "assign");
          for (b = cc11001100_hook("b", T(a).clientWidth, "assign"); c; c = cc11001100_hook("c", c.parentElement, "assign")) if ((d = cc11001100_hook("d", Lc(c, a), "assign")) && (e = cc11001100_hook("e", K(d.width), "assign")) && !(e >= b) && "visible" != d.overflow) {
            c = cc11001100_hook("c", !0, "assign");
            break a;
          }
          c = cc11001100_hook("c", !1, "assign");
        }
        a = cc11001100_hook("a", c ? 7 : !0, "assign");
      }
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
          c = cc11001100_hook("c", Lc(b, a), "assign");
        } catch (d) {}
        return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility));
      }
      return !1;
    }, "var-init"),
    Th = cc11001100_hook("Th", (a, b, c) => {
      a = cc11001100_hook("a", Oh(b, a), "assign");
      return "rtl" == c ? -a.x : a.x;
    }, "var-init");
  var Uh = cc11001100_hook("Uh", (a, b) => {
    var c;
    c = cc11001100_hook("c", (c = cc11001100_hook("c", b.parentElement, "assign")) ? (c = cc11001100_hook("c", Lc(c, a), "assign")) ? c.direction : "" : "", "assign");
    if (c) {
      b.style.border = cc11001100_hook("b.style.border", b.style.borderStyle = cc11001100_hook("b.style.borderStyle", b.style.outline = cc11001100_hook("b.style.outline", b.style.outlineStyle = cc11001100_hook("b.style.outlineStyle", b.style.transition = cc11001100_hook("b.style.transition", "none", "assign"), "assign"), "assign"), "assign"), "assign");
      b.style.borderSpacing = cc11001100_hook("b.style.borderSpacing", b.style.padding = cc11001100_hook("b.style.padding", "0", "assign"), "assign");
      Rh(b, c, "0px");
      b.style.width = cc11001100_hook("b.style.width", T(a).clientWidth + "px", "assign");
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
      this.La = cc11001100_hook("this.La", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    height() {
      return this.m;
    }
    j(a) {
      return 300 < a && 300 < this.m ? this.La : Math.min(1200, Math.round(a));
    }
    l() {}
  }, "var-init");
  var Wh = cc11001100_hook("Wh", (a, b, c, d = e => e) => {
      let e;
      return a.style && a.style[c] && d(a.style[c]) || (e = cc11001100_hook("e", Lc(a, b), "assign")) && e[c] && d(e[c]) || null;
    }, "var-init"),
    Xh = cc11001100_hook("Xh", a => b => b.La <= a, "var-init"),
    $h = cc11001100_hook("$h", (a, b, c, d) => {
      const e = cc11001100_hook("e", a && Yh(c, b), "var-init"),
        f = cc11001100_hook("f", Zh(b, d), "var-init");
      return g => !(e && g.height() >= f);
    }, "var-init"),
    ai = cc11001100_hook("ai", a => b => b.height() <= a, "var-init"),
    Yh = cc11001100_hook("Yh", (a, b) => {
      a = cc11001100_hook("a", Oh(a, b), "assign");
      return (a ? a.y : 0) < T(b).clientHeight - 100;
    }, "var-init"),
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
    const c = cc11001100_hook("c", a.google_unique_id, "var-init");
    return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * T(a).clientHeight / 3) : 250;
  }, "var-init");
  function ci(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) {
      const d = cc11001100_hook("d", b[c], "var-init"),
        e = cc11001100_hook("e", oc(d.uc), "var-init");
      a[e] = cc11001100_hook("a[e]", d.value, "assign");
    }
  }
  function di(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", [], "var-init");
    if (c = cc11001100_hook("c", c && c.j(), "assign")) a.Va.className = cc11001100_hook("a.Va.className", c.join(" "), "assign");
    a = cc11001100_hook("a", a.Da, "assign");
    a.className = cc11001100_hook("a.className", "adsbygoogle", "assign");
    a.setAttribute("data-ad-client", b);
    d.length && a.setAttribute("data-ad-channel", d.join("+"));
  }
  function ei(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.wb || !1, "var-init");
    const d = cc11001100_hook("d", new rc(a).createElement("DIV"), "var-init"),
      e = cc11001100_hook("e", d.style, "var-init");
    e.width = cc11001100_hook("e.width", "100%", "assign");
    e.height = cc11001100_hook("e.height", "auto", "assign");
    e.clear = cc11001100_hook("e.clear", c ? "both" : "none", "assign");
    c = cc11001100_hook("c", d.style, "assign");
    c.textAlign = cc11001100_hook("c.textAlign", "center", "assign");
    b.ib && ci(c, b.ib);
    a = cc11001100_hook("a", new rc(a).createElement("INS"), "assign");
    c = cc11001100_hook("c", a.style, "assign");
    c.display = cc11001100_hook("c.display", "block", "assign");
    c.margin = cc11001100_hook("c.margin", "auto", "assign");
    c.backgroundColor = cc11001100_hook("c.backgroundColor", "transparent", "assign");
    b.Eb && (c.marginTop = cc11001100_hook("c.marginTop", b.Eb, "assign"));
    b.vb && (c.marginBottom = cc11001100_hook("c.marginBottom", b.vb, "assign"));
    b.eb && ci(c, b.eb);
    d.appendChild(a);
    return {
      Va: cc11001100_hook("Va", d, "object-key-init"),
      Da: cc11001100_hook("Da", a, "object-key-init")
    };
  }
  ;
  function fi(a, b = !1) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.na) return a.na;
    if (b = cc11001100_hook("b", a.C(b), "assign")) $e(), !a.j && b && (a.j = cc11001100_hook("a.j", b.l(), "assign"));
    return b;
  }
  function gi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.G.node || null;
  }
  function hi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", gi(a), "assign")) && a.v() ? Zg(a.D) : !1;
  }
  function ii(a) {
    cc11001100_hook("a", a, "function-parameter");
    return qe(a.L.j).map(b => {
      switch (b) {
        case 1:
          return "IN ARTICLE";
        case 2:
          return "ABOVE FOOTER";
        case 3:
          return "ABOVE COMMENT";
        case 4:
          return "PEDESTAL";
        case 5:
          return "BELOW CONTENT";
        default:
          return null;
      }
    }).filter(b => null != b).join(", ");
  }
  class ji {
    constructor(a) {
      this.G = cc11001100_hook("this.G", a.l, "assign");
      this.l = cc11001100_hook("this.l", a.v, "assign");
      this.j = cc11001100_hook("this.j", this.na = cc11001100_hook("this.na", null, "assign"), "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.L = cc11001100_hook("this.L", new Le(qe(a.j.j)), "assign");
    }
    B() {}
    C() {}
    F() {}
    m() {}
  }
  var ki = cc11001100_hook("ki", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.j = cc11001100_hook("this.j", new Le(), "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
    }
    build() {}
  }, "var-init");
  function li(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    va(a.m, b);
    return a;
  }
  class mi {
    constructor() {
      this.l = cc11001100_hook("this.l", [], "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
      this.v = cc11001100_hook("this.v", [], "assign");
    }
    j(a) {
      if (a = cc11001100_hook("a", gi(a), "assign")) {
        for (var b = cc11001100_hook("b", 0, "var-init"); b < this.v.length; ++b) if (wf(a, this.v[b])) return [6];
        for (b = cc11001100_hook("b", 0, "assign"); b < this.l.length; ++b) if (xf(a, this.l[b])) return [6];
        for (b = cc11001100_hook("b", 0, "assign"); b < this.m.length; ++b) if (yf(a, this.m[b])) return [6];
      }
      return [];
    }
  }
  var ni = cc11001100_hook("ni", [/cookie/, /(^|(-|_))sticky((-|_)|$)/], "var-init"),
    oi = cc11001100_hook("oi", [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/], "var-init"),
    pi = cc11001100_hook("pi", [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/], "var-init"),
    qi = cc11001100_hook("qi", [/(^|(-|_))taboola((-|_)|$)/, /(^|(-|_))OUTBRAIN((-|_)|$)/, /(^|(-|_))revcontent((-|_)|$)/], "var-init"),
    ri = cc11001100_hook("ri", ["A", "FORM", "BUTTON"], "var-init");
  function si(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => !!(b.cb & a);
  }
  class W extends Vh {
    constructor(a, b, c, d = !1) {
      super(a, b);
      this.cb = cc11001100_hook("this.cb", c, "assign");
      this.ec = cc11001100_hook("this.ec", d, "assign");
    }
    qb() {
      return this.cb;
    }
    l(a, b, c) {
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const ti = cc11001100_hook("ti", {
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
    ui = cc11001100_hook("ui", {
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
    vi = cc11001100_hook("vi", {
      pub_control_image_stacked: cc11001100_hook("pub_control_image_stacked", 100, "object-key-init"),
      pub_control_image_sidebyside: cc11001100_hook("pub_control_image_sidebyside", 200, "object-key-init"),
      pub_control_image_card_stacked: cc11001100_hook("pub_control_image_card_stacked", 150, "object-key-init"),
      pub_control_image_card_sidebyside: cc11001100_hook("pub_control_image_card_sidebyside", 250, "object-key-init"),
      pub_control_text: cc11001100_hook("pub_control_text", 100, "object-key-init"),
      pub_control_text_card: cc11001100_hook("pub_control_text_card", 150, "object-key-init")
    }, "var-init");
  function wi(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 0, "var-init");
    a.Ba && b++;
    a.ta && b++;
    a.ua && b++;
    if (3 > b) return {
      za: cc11001100_hook("za", "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.", "object-key-init")
    };
    b = cc11001100_hook("b", a.Ba.split(","), "assign");
    const c = cc11001100_hook("c", a.ua.split(","), "var-init");
    a = cc11001100_hook("a", a.ta.split(","), "assign");
    if (b.length !== c.length || b.length !== a.length) return {
      za: cc11001100_hook("za", 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"', "object-key-init")
    };
    if (2 < b.length) return {
      za: cc11001100_hook("za", "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`, "object-key-init")
    };
    const d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", [], "var-init");
    for (let g = cc11001100_hook("g", 0, "var-init"); g < b.length; g++) {
      var f = cc11001100_hook("f", Number(c[g]), "var-init");
      if (Number.isNaN(f) || 0 === f) return {
        za: cc11001100_hook("za", `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`, "object-key-init")
      };
      d.push(f);
      f = cc11001100_hook("f", Number(a[g]), "assign");
      if (Number.isNaN(f) || 0 === f) return {
        za: cc11001100_hook("za", `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`, "object-key-init")
      };
      e.push(f);
    }
    return {
      ua: cc11001100_hook("ua", d, "object-key-init"),
      ta: cc11001100_hook("ta", e, "object-key-init"),
      Pb: cc11001100_hook("Pb", b, "object-key-init")
    };
  }
  function xi(a) {
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
  function yi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", a.hash, "assign");
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = cc11001100_hook("b", zi(b), "assign");
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function zi(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", "", "var-init");
    Mc(a.split("_"), c => {
      b += cc11001100_hook("b", c.substr(0, 2), "assign");
    });
    return b;
  }
  ;
  const Ai = cc11001100_hook("Ai", xa("script"), "var-init");
  class Bi {
    constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, m = null, n = null) {
      this.C = cc11001100_hook("this.C", a, "assign");
      this.J = cc11001100_hook("this.J", b, "assign");
      this.cb = cc11001100_hook("this.cb", c, "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
      this.H = cc11001100_hook("this.H", e, "assign");
      this.l = cc11001100_hook("this.l", f, "assign");
      this.m = cc11001100_hook("this.m", g, "assign");
      this.G = cc11001100_hook("this.G", h, "assign");
      this.L = cc11001100_hook("this.L", l, "assign");
      this.v = cc11001100_hook("this.v", k, "assign");
      this.A = cc11001100_hook("this.A", m, "assign");
      this.W = cc11001100_hook("this.W", n, "assign");
      this.I = cc11001100_hook("this.I", this.F = cc11001100_hook("this.F", this.B = cc11001100_hook("this.B", null, "assign"), "assign"), "assign");
    }
    size() {
      return this.J;
    }
  }
  ;
  class Ci extends Error {
    constructor(a = "") {
      super();
      this.name = cc11001100_hook("this.name", "TagError", "assign");
      this.message = cc11001100_hook("this.message", a ? "adsbygoogle.push() error: " + a : "", "assign");
      Error.captureStackTrace ? Error.captureStackTrace(this, Ci) : this.stack = cc11001100_hook("this.stack", Error().stack || "", "assign");
    }
  }
  ;
  var Di = cc11001100_hook("Di", class extends Vh {
      j(a) {
        return Math.min(1200, Math.max(this.La, Math.round(a)));
      }
    }, "var-init"),
    Ii = cc11001100_hook("Ii", (a, b) => {
      Gi(a, b);
      if ("pedestal" == b.google_content_recommendation_ui_type) return new Bi(9, new Di(a, Math.floor(a * b.google_phwr)));
      var c = cc11001100_hook("c", Bc(), "var-init");
      468 > a ? c ? (c = cc11001100_hook("c", a - 8 - 8, "assign"), c = cc11001100_hook("c", Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * ti.mobile_banner_image_sidebyside + ui.mobile_banner_image_sidebyside) + 96), "assign"), a = cc11001100_hook("a", {
        Ta: cc11001100_hook("Ta", a, "object-key-init"),
        Sa: cc11001100_hook("Sa", c, "object-key-init"),
        ta: cc11001100_hook("ta", 1, "object-key-init"),
        ua: cc11001100_hook("ua", 12, "object-key-init"),
        Ba: cc11001100_hook("Ba", "mobile_banner_image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", xi(a), "assign"), a = cc11001100_hook("a", {
        Ta: cc11001100_hook("Ta", a.width, "object-key-init"),
        Sa: cc11001100_hook("Sa", a.height, "object-key-init"),
        ta: cc11001100_hook("ta", 1, "object-key-init"),
        ua: cc11001100_hook("ua", 13, "object-key-init"),
        Ba: cc11001100_hook("Ba", "image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", xi(a), "assign"), a = cc11001100_hook("a", {
        Ta: cc11001100_hook("Ta", a.width, "object-key-init"),
        Sa: cc11001100_hook("Sa", a.height, "object-key-init"),
        ta: cc11001100_hook("ta", 4, "object-key-init"),
        ua: cc11001100_hook("ua", 2, "object-key-init"),
        Ba: cc11001100_hook("Ba", "image_stacked", "object-key-init")
      }, "assign"));
      Hi(b, a);
      return new Bi(9, new Di(a.Ta, a.Sa));
    }, "var-init"),
    Ji = cc11001100_hook("Ji", (a, b) => {
      Gi(a, b);
      var c = cc11001100_hook("c", wi({
        ua: cc11001100_hook("ua", b.google_content_recommendation_rows_num, "object-key-init"),
        ta: cc11001100_hook("ta", b.google_content_recommendation_columns_num, "object-key-init"),
        Ba: cc11001100_hook("Ba", b.google_content_recommendation_ui_type, "object-key-init")
      }), "var-init");
      if (c.za) a = cc11001100_hook("a", {
        Ta: cc11001100_hook("Ta", 0, "object-key-init"),
        Sa: cc11001100_hook("Sa", 0, "object-key-init"),
        ta: cc11001100_hook("ta", 0, "object-key-init"),
        ua: cc11001100_hook("ua", 0, "object-key-init"),
        Ba: cc11001100_hook("Ba", "image_stacked", "object-key-init"),
        za: cc11001100_hook("za", c.za, "object-key-init")
      }, "assign");else {
        var d = cc11001100_hook("d", 2 === c.Pb.length && 468 <= a ? 1 : 0, "var-init");
        var e = cc11001100_hook("e", c.Pb[d], "var-init");
        e = cc11001100_hook("e", 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e, "assign");
        var f = cc11001100_hook("f", vi[e], "var-init");
        let g = cc11001100_hook("g", c.ta[d], "var-init");
        for (; a / g < f && 1 < g;) g--;
        f = cc11001100_hook("f", g, "assign");
        d = cc11001100_hook("d", c.ua[d], "assign");
        c = cc11001100_hook("c", Math.floor(((a - 8 * f - 8) / f * ti[e] + ui[e]) * d + 8 * d + 8), "assign");
        a = cc11001100_hook("a", 1500 < a ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          xc: cc11001100_hook("xc", "Calculated slot width is too large: " + a, "object-key-init")
        } : 1500 < c ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          xc: cc11001100_hook("xc", "Calculated slot height is too large: " + c, "object-key-init")
        } : {
          width: cc11001100_hook("width", a, "object-key-init"),
          height: cc11001100_hook("height", c, "object-key-init")
        }, "assign");
        a = cc11001100_hook("a", {
          Ta: cc11001100_hook("Ta", a.width, "object-key-init"),
          Sa: cc11001100_hook("Sa", a.height, "object-key-init"),
          ta: cc11001100_hook("ta", f, "object-key-init"),
          ua: cc11001100_hook("ua", d, "object-key-init"),
          Ba: cc11001100_hook("Ba", e, "object-key-init")
        }, "assign");
      }
      if (a.za) throw new Ci(a.za);
      Hi(b, a);
      return new Bi(9, new Di(a.Ta, a.Sa));
    }, "var-init");
  function Gi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) throw new Ci("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
  }
  function Hi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.google_content_recommendation_ui_type = cc11001100_hook("a.google_content_recommendation_ui_type", b.Ba, "assign");
    a.google_content_recommendation_columns_num = cc11001100_hook("a.google_content_recommendation_columns_num", b.ta, "assign");
    a.google_content_recommendation_rows_num = cc11001100_hook("a.google_content_recommendation_rows_num", b.ua, "assign");
  }
  ;
  class Ki extends Vh {
    j() {
      return this.La;
    }
    l(a, b, c) {
      Uh(a, c);
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const Li = cc11001100_hook("Li", {
    "image-top": cc11001100_hook("image-top", a => 600 >= a ? 284 + .414 * (a - 250) : 429, "object-key-init"),
    "image-middle": cc11001100_hook("image-middle", a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500), "object-key-init"),
    "image-side": cc11001100_hook("image-side", a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500), "object-key-init"),
    "text-only": cc11001100_hook("text-only", a => 500 >= a ? 187 - .228 * (a - 250) : 130, "object-key-init"),
    "in-article": cc11001100_hook("in-article", a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200, "object-key-init")
  }, "var-init");
  var Mi = cc11001100_hook("Mi", class extends Vh {
      j() {
        return Math.min(1200, this.La);
      }
    }, "var-init"),
    Ni = cc11001100_hook("Ni", (a, b, c, d, e) => {
      var f = cc11001100_hook("f", e.google_ad_layout || "image-top", "var-init");
      if ("in-article" == f) {
        var g = cc11001100_hook("g", a, "var-init");
        if ("false" == e.google_full_width_responsive) a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", Qh(b, c, g, .2, e), "assign"), !0 !== a) e.gfwrnwer = cc11001100_hook("e.gfwrnwer", a, "assign"), a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", T(b).clientWidth, "assign")) {
          if (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), c.parentElement) {
            b: {
              g = cc11001100_hook("g", c, "assign");
              for (let h = cc11001100_hook("h", 0, "var-init"); 100 > h && g.parentElement; ++h) {
                const l = cc11001100_hook("l", g.parentElement.childNodes, "var-init");
                for (let k = cc11001100_hook("k", 0, "var-init"); k < l.length; ++k) {
                  const m = cc11001100_hook("m", l[k], "var-init");
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
      if (250 > a) throw new Ci("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
      a = cc11001100_hook("a", Math.min(1200, Math.floor(a)), "assign");
      if (d && "in-article" != f) {
        f = cc11001100_hook("f", Math.ceil(d), "assign");
        if (50 > f) throw new Ci("Fluid responsive ads must be at least 50px tall: height=" + f);
        return new Bi(11, new Vh(a, f));
      }
      if ("in-article" != f && (d = cc11001100_hook("d", e.google_ad_layout_key, "assign"))) {
        f = cc11001100_hook("f", "" + d, "assign");
        c = cc11001100_hook("c", Math.pow(10, 3), "assign");
        if (e = cc11001100_hook("e", (d = cc11001100_hook("d", f.match(/([+-][0-9a-z]+)/g), "assign")) && d.length, "assign")) for (b = cc11001100_hook("b", [], "assign"), g = cc11001100_hook("g", 0, "assign"); g < e; g++) b.push(parseInt(d[g], 36) / c);else b = cc11001100_hook("b", null, "assign");
        if (!b) throw new Ci("Invalid data-ad-layout-key value: " + f);
        f = cc11001100_hook("f", (a + -725) / 1E3, "assign");
        c = cc11001100_hook("c", 0, "assign");
        d = cc11001100_hook("d", 1, "assign");
        e = cc11001100_hook("e", b.length, "assign");
        for (g = cc11001100_hook("g", 0, "assign"); g < e; g++) c += cc11001100_hook("c", b[g] * d, "assign"), d *= cc11001100_hook("d", f, "assign");
        f = cc11001100_hook("f", Math.ceil(1E3 * c - -725 + 10), "assign");
        if (isNaN(f)) throw new Ci("Invalid height: height=" + f);
        if (50 > f) throw new Ci("Fluid responsive ads must be at least 50px tall: height=" + f);
        if (1200 < f) throw new Ci("Fluid responsive ads must be at most 1200px tall: height=" + f);
        return new Bi(11, new Vh(a, f));
      }
      d = cc11001100_hook("d", Li[f], "assign");
      if (!d) throw new Ci("Invalid data-ad-layout value: " + f);
      c = cc11001100_hook("c", Yh(c, b), "assign");
      b = cc11001100_hook("b", T(b).clientWidth, "assign");
      b = cc11001100_hook("b", "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a)), "assign");
      return new Bi(11, "in-article" == f ? new Mi(a, b) : new Vh(a, b));
    }, "var-init");
  var Oi = cc11001100_hook("Oi", a => b => {
      for (let c = cc11001100_hook("c", a.length - 1, "var-init"); 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    }, "var-init"),
    Qi = cc11001100_hook("Qi", (a, b) => {
      var c = cc11001100_hook("c", Pi.slice(0), "var-init");
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
  var X = cc11001100_hook("X", [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)], "var-init"),
    Pi = cc11001100_hook("Pi", [X[6], X[12], X[3], X[0], X[7], X[14], X[1], X[8], X[10], X[4], X[15], X[2], X[11], X[5], X[13], X[9], X[16]], "var-init");
  let Ri, Si;
  const Ti = cc11001100_hook("Ti", new Pd(u), "var-init");
  (a => {
    Ri = cc11001100_hook("Ri", a || new Fd(), "assign");
    "number" !== typeof u.google_srt && (u.google_srt = cc11001100_hook("u.google_srt", Math.random(), "assign"));
    Dd(Ri, u.google_srt);
    Si = cc11001100_hook("Si", new Rd(Ri, Ti), "assign");
    Si.v(!0);
    "complete" == u.document.readyState ? u.google_measure_js_timing || Od(Ti) : Ti.j && G(u, "load", () => {
      u.google_measure_js_timing || Od(Ti);
    });
  })();
  var Ui = cc11001100_hook("Ui", (a, b, c) => Si.ya(a, b, c), "var-init"),
    Vi = cc11001100_hook("Vi", (a, b) => Si.O(a, b), "var-init"),
    Wi = cc11001100_hook("Wi", (a, b, c) => {
      const d = cc11001100_hook("d", R(ke).j(), "var-init");
      !b.eid && d.length && (b.eid = cc11001100_hook("b.eid", d.toString(), "assign"));
      Ed(Ri, a, b, !0, c);
    }, "var-init");
  var Xi = cc11001100_hook("Xi", (a, b, c, d, e) => {
      "false" == e.google_full_width_responsive ? c = cc11001100_hook("c", {
        ia: cc11001100_hook("ia", a, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      }, "assign") : "autorelaxed" == b && e.google_full_width_responsive || "auto" == b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (b = cc11001100_hook("b", Qh(c, d, a, .3, e), "assign"), !0 !== b ? e = cc11001100_hook("e", b, "assign") : "true" == e.google_full_width_responsive || Nh(d, c) ? (e = cc11001100_hook("e", T(c).clientWidth, "assign"), b = cc11001100_hook("b", e - a, "assign"), e = cc11001100_hook("e", e && 0 <= b ? !0 : e ? -10 > b ? 11 : 0 > b ? 14 : 12 : 10, "assign")) : e = cc11001100_hook("e", 9, "assign"), c = cc11001100_hook("c", !0 !== e ? {
        ia: cc11001100_hook("ia", a, "object-key-init"),
        ja: cc11001100_hook("ja", e, "object-key-init")
      } : {
        ia: cc11001100_hook("ia", T(c).clientWidth || a, "object-key-init"),
        ja: cc11001100_hook("ja", !0, "object-key-init")
      }, "assign")) : c = cc11001100_hook("c", {
        ia: cc11001100_hook("ia", a, "object-key-init"),
        ja: cc11001100_hook("ja", 2, "object-key-init")
      }, "assign");
      const {
        ia: f,
        ja: g
      } = cc11001100_hook("", c, "var-init");
      return !0 !== g ? {
        ia: cc11001100_hook("ia", a, "object-key-init"),
        ja: cc11001100_hook("ja", g, "object-key-init")
      } : d.parentElement ? {
        ia: cc11001100_hook("ia", f, "object-key-init"),
        ja: cc11001100_hook("ja", g, "object-key-init")
      } : {
        ia: cc11001100_hook("ia", a, "object-key-init"),
        ja: cc11001100_hook("ja", g, "object-key-init")
      };
    }, "var-init"),
    $i = cc11001100_hook("$i", (a, b, c, d, e) => {
      const {
        ia: f,
        ja: g
      } = cc11001100_hook("", Ui(247, () => Xi(a, b, c, d, e)), "var-init");
      var h = cc11001100_hook("h", !0 === g, "var-init");
      const l = cc11001100_hook("l", K(d.style.width), "var-init"),
        k = cc11001100_hook("k", K(d.style.height), "var-init"),
        {
          Oa: m,
          Ja: n,
          qb: q,
          Ob: r
        } = cc11001100_hook("", Yi(f, b, c, d, e, h), "var-init");
      h = cc11001100_hook("h", Zi(b, q), "assign");
      var t;
      const y = cc11001100_hook("y", (t = cc11001100_hook("t", Wh(d, c, "marginLeft", K), "assign")) ? t + "px" : "", "var-init"),
        F = cc11001100_hook("F", (t = cc11001100_hook("t", Wh(d, c, "marginRight", K), "assign")) ? t + "px" : "", "var-init");
      t = cc11001100_hook("t", Wh(d, c, "zIndex") || "", "assign");
      return new Bi(h, m, q, null, r, g, n, y, F, k, l, t);
    }, "var-init"),
    Yi = cc11001100_hook("Yi", (a, b, c, d, e, f) => {
      b = cc11001100_hook("b", "auto" == b ? .25 >= a / Math.min(1200, T(c).clientWidth) ? 4 : 3 : Ph(b), "assign");
      let g;
      var h = cc11001100_hook("h", !1, "var-init");
      let l = cc11001100_hook("l", !1, "var-init");
      var k = cc11001100_hook("k", 488 > T(c).clientWidth, "var-init");
      if (k) {
        g = cc11001100_hook("g", Nh(d, c), "assign");
        var m = cc11001100_hook("m", Yh(d, c), "var-init");
        h = cc11001100_hook("h", !m && g, "assign");
        l = cc11001100_hook("l", m && g, "assign");
      }
      m = cc11001100_hook("m", [Xh(a), si(b)], "assign");
      m.push($h(k, c, d, l));
      null != e.google_max_responsive_height && m.push(ai(e.google_max_responsive_height));
      k = cc11001100_hook("k", [t => !t.ec], "assign");
      if (h || l) h = cc11001100_hook("h", bi(c, d), "assign"), k.push(ai(h));
      let n = cc11001100_hook("n", Qi(Oi(m), Oi(k)), "var-init");
      if (!n) throw new Ci("No slot size for availableWidth=" + a);
      const {
        Oa: q,
        Ja: r
      } = cc11001100_hook("", Ui(248, () => {
        var t;
        a: if (f) {
          if (e.gfwrnh && (t = cc11001100_hook("t", K(e.gfwrnh), "assign"))) {
            t = cc11001100_hook("t", {
              Oa: cc11001100_hook("Oa", new Ki(a, t), "object-key-init"),
              Ja: cc11001100_hook("Ja", !0, "object-key-init")
            }, "assign");
            break a;
          }
          t = cc11001100_hook("t", a / 1.2, "assign");
          var y = cc11001100_hook("y", Math, "var-init");
          var F = cc11001100_hook("F", y.min, "var-init");
          if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var H = cc11001100_hook("H", Infinity, "var-init");else {
            H = cc11001100_hook("H", d, "assign");
            let v = cc11001100_hook("v", Infinity, "var-init");
            do {
              var N = cc11001100_hook("N", Wh(H, c, "height", K), "var-init");
              N && (v = cc11001100_hook("v", Math.min(v, N), "assign"));
              (N = cc11001100_hook("N", Wh(H, c, "maxHeight", K), "assign")) && (v = cc11001100_hook("v", Math.min(v, N), "assign"));
            } while ((H = cc11001100_hook("H", H.parentElement, "assign")) && "HTML" != H.tagName);
            H = cc11001100_hook("H", v, "assign");
          }
          y = cc11001100_hook("y", F.call(y, t, H), "assign");
          if (y < .5 * t || 100 > y) y = cc11001100_hook("y", t, "assign");
          t = cc11001100_hook("t", {
            Oa: cc11001100_hook("Oa", new Ki(a, Math.floor(y)), "object-key-init"),
            Ja: cc11001100_hook("Ja", y < t ? 102 : !0, "object-key-init")
          }, "assign");
        } else t = cc11001100_hook("t", {
          Oa: cc11001100_hook("Oa", n, "object-key-init"),
          Ja: cc11001100_hook("Ja", 100, "object-key-init")
        }, "assign");
        return t;
      }), "var-init");
      return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
        Oa: cc11001100_hook("Oa", aj(a, c, d, q, e), "object-key-init"),
        Ja: cc11001100_hook("Ja", !1, "object-key-init"),
        qb: cc11001100_hook("qb", b, "object-key-init"),
        Ob: cc11001100_hook("Ob", g, "object-key-init")
      } : {
        Oa: cc11001100_hook("Oa", q, "object-key-init"),
        Ja: cc11001100_hook("Ja", r, "object-key-init"),
        qb: cc11001100_hook("qb", b, "object-key-init"),
        Ob: cc11001100_hook("Ob", g, "object-key-init")
      };
    }, "var-init");
  const Zi = cc11001100_hook("Zi", (a, b) => {
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
    aj = cc11001100_hook("aj", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", e.google_ad_height || Wh(c, b, "height", K), "var-init");
      b = cc11001100_hook("b", Ni(a, b, c, f, e).size(), "assign");
      return b.La * b.height() > a * d.height() ? new W(b.La, b.height(), 1) : d;
    }, "var-init");
  var bj = cc11001100_hook("bj", (a, b, c, d, e) => {
    var f;
    (f = cc11001100_hook("f", T(b).clientWidth, "assign")) ? 488 > T(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), Uh(b, c), f = cc11001100_hook("f", {
      ia: cc11001100_hook("ia", f, "object-key-init"),
      ja: cc11001100_hook("ja", !0, "object-key-init")
    }, "assign")) : f = cc11001100_hook("f", {
      ia: cc11001100_hook("ia", a, "object-key-init"),
      ja: cc11001100_hook("ja", 5, "object-key-init")
    }, "assign") : f = cc11001100_hook("f", {
      ia: cc11001100_hook("ia", a, "object-key-init"),
      ja: cc11001100_hook("ja", 4, "object-key-init")
    }, "assign") : f = cc11001100_hook("f", {
      ia: cc11001100_hook("ia", a, "object-key-init"),
      ja: cc11001100_hook("ja", 10, "object-key-init")
    }, "assign");
    const {
      ia: g,
      ja: h
    } = cc11001100_hook("", f, "var-init");
    if (!0 !== h || a == g) return new Bi(12, new Vh(a, d), null, null, !0, h, 100);
    const {
      Oa: l,
      Ja: k,
      qb: m
    } = cc11001100_hook("", Yi(g, "auto", b, c, e, !0), "var-init");
    return new Bi(1, l, m, 2, !0, h, k);
  }, "var-init");
  const cj = cc11001100_hook("cj", (a, b, c, d, e) => {
    const f = cc11001100_hook("f", d.google_ad_height || Wh(c, e, "height", K), "var-init");
    switch (a) {
      case 5:
        const {
          ia: g,
          ja: h
        } = cc11001100_hook("", Ui(247, () => Xi(b, d.google_ad_format, e, c, d)), "var-init");
        !0 === h && b != g && Uh(e, c);
        !0 === h ? d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !0, "assign") : (d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !1, "assign"), d.gfwrnwer = cc11001100_hook("d.gfwrnwer", h, "assign"));
        return Ii(g, d);
      case 9:
        return Ji(b, d);
      case 8:
        return Ni(b, e, c, f, d);
      case 10:
        return bj(b, e, c, f, d);
    }
  }, "var-init");
  class dj extends ji {
    constructor(a) {
      super(a);
      this.A = cc11001100_hook("this.A", "", "assign");
    }
    B() {
      return 1;
    }
    C(a = !1) {
      const b = cc11001100_hook("b", gi(this), "var-init");
      if (!b) return null;
      hi(this) && (this.A = cc11001100_hook("this.A", b.D.style.display, "assign"));
      var c = cc11001100_hook("c", ii(this), "var-init"),
        d = cc11001100_hook("d", bf(b), "var-init"),
        e = cc11001100_hook("e", ei(d, {
          Eb: cc11001100_hook("Eb", "10px", "object-key-init"),
          vb: cc11001100_hook("vb", "10px", "object-key-init"),
          wb: cc11001100_hook("wb", this.v, "object-key-init")
        }), "var-init");
      e.Va.className = cc11001100_hook("e.Va.className", "google-auto-placed", "assign");
      const f = cc11001100_hook("f", e.Da, "var-init");
      var g = cc11001100_hook("g", f.style, "var-init");
      g.display = cc11001100_hook("g.display", "inline-block", "assign");
      g.boxSizing = cc11001100_hook("g.boxSizing", "border-box", "assign");
      g.width = cc11001100_hook("g.width", "100%", "assign");
      g.height = cc11001100_hook("g.height", a ? "auto" : "100px", "assign");
      g.backgroundColor = cc11001100_hook("g.backgroundColor", "#f60", "assign");
      g.border = cc11001100_hook("g.border", "#000 solid 1px", "assign");
      c && (g = cc11001100_hook("g", d.createElement("span"), "assign"), g.style.fontSize = cc11001100_hook("g.style.fontSize", "small", "assign"), g.appendChild(d.createTextNode(c)), f.appendChild(g));
      c = cc11001100_hook("c", e.Va, "assign");
      e = cc11001100_hook("e", e.Da, "assign");
      Ah(c, b.D, Dh[this.l]);
      if (a) try {
        this.F(e, wc());
      } catch (h) {
        e.style.height = cc11001100_hook("e.style.height", "100px", "assign");
      }
      this.na = cc11001100_hook("this.na", b.m.j(c), "assign");
      this.na || (c.parentNode.removeChild(c), hi(this) && (b.D.style.display = cc11001100_hook("b.D.style.display", this.A, "assign")));
      return this.na;
    }
    F(a, b) {
      var c = cc11001100_hook("c", {
          google_ad_format: cc11001100_hook("google_ad_format", "auto", "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", 1, "var-init"),
        e = cc11001100_hook("e", a.offsetWidth || (c.google_ad_resize || !1) && Wh(a, b, "width", K) || c.google_ad_width || 0, "var-init");
      4 === d && (c.google_ad_format = cc11001100_hook("c.google_ad_format", "auto", "assign"), d = cc11001100_hook("d", 1, "assign"));
      var f = cc11001100_hook("f", (f = cc11001100_hook("f", cj(d, e, a, c, b), "assign")) ? f : $i(e, c.google_ad_format, b, a, c), "var-init");
      f.size().l(b, c, a);
      null != f.cb && (c.google_responsive_formats = cc11001100_hook("c.google_responsive_formats", f.cb, "assign"));
      null != f.H && (c.google_safe_for_responsive_override = cc11001100_hook("c.google_safe_for_responsive_override", f.H, "assign"));
      null != f.l && (!0 === f.l ? c.google_full_width_responsive_allowed = cc11001100_hook("c.google_full_width_responsive_allowed", !0, "assign") : (c.google_full_width_responsive_allowed = cc11001100_hook("c.google_full_width_responsive_allowed", !1, "assign"), c.gfwrnwer = cc11001100_hook("c.gfwrnwer", f.l, "assign")));
      null != f.m && !0 !== f.m && (c.gfwrnher = cc11001100_hook("c.gfwrnher", f.m, "assign"));
      b = cc11001100_hook("b", f.A || c.google_ad_width, "assign");
      null != b && (c.google_resizing_width = cc11001100_hook("c.google_resizing_width", b, "assign"));
      b = cc11001100_hook("b", f.v || c.google_ad_height, "assign");
      null != b && (c.google_resizing_height = cc11001100_hook("c.google_resizing_height", b, "assign"));
      b = cc11001100_hook("b", f.size().j(e), "assign");
      const g = cc11001100_hook("g", f.size().height(), "var-init");
      if (!c.google_ad_resize) {
        c.google_ad_width = cc11001100_hook("c.google_ad_width", b, "assign");
        c.google_ad_height = cc11001100_hook("c.google_ad_height", g, "assign");
        var h = cc11001100_hook("h", f.size(), "var-init");
        e = cc11001100_hook("e", h.j(e) + "x" + h.height(), "assign");
        c.google_ad_format = cc11001100_hook("c.google_ad_format", e, "assign");
        c.google_responsive_auto_format = cc11001100_hook("c.google_responsive_auto_format", f.C, "assign");
        null != f.j && (c.armr = cc11001100_hook("c.armr", f.j, "assign"));
        c.google_ad_resizable = cc11001100_hook("c.google_ad_resizable", !0, "assign");
        c.google_override_format = cc11001100_hook("c.google_override_format", 1, "assign");
        c.google_loader_features_used = cc11001100_hook("c.google_loader_features_used", 128, "assign");
        !0 === f.l && (c.gfwrnh = cc11001100_hook("c.gfwrnh", f.size().height() + "px", "assign"));
      }
      null != f.G && (c.gfwroml = cc11001100_hook("c.gfwroml", f.G, "assign"));
      null != f.L && (c.gfwromr = cc11001100_hook("c.gfwromr", f.L, "assign"));
      null != f.v && (c.gfwroh = cc11001100_hook("c.gfwroh", f.v, "assign"));
      null != f.A && (c.gfwrow = cc11001100_hook("c.gfwrow", f.A, "assign"));
      null != f.W && (c.gfwroz = cc11001100_hook("c.gfwroz", f.W, "assign"));
      null != f.B && (c.gml = cc11001100_hook("c.gml", f.B, "assign"));
      null != f.F && (c.gmr = cc11001100_hook("c.gmr", f.F, "assign"));
      null != f.I && (c.gzi = cc11001100_hook("c.gzi", f.I, "assign"));
      e = cc11001100_hook("e", Ic(window) || window, "assign");
      yi(e.location, "google_responsive_dummy_ad") && (ta([1, 2, 3, 4, 5, 6, 7, 8], f.C) || 1 === f.j) && 2 !== f.j && (e = cc11001100_hook("e", JSON.stringify({
        googMsgType: cc11001100_hook("googMsgType", "adpnt", "object-key-init"),
        key_value: cc11001100_hook("key_value", [{
          key: cc11001100_hook("key", "qid", "object-key-init"),
          value: cc11001100_hook("value", "DUMMY_AD", "object-key-init")
        }], "object-key-init")
      }), "assign"), c.dash = cc11001100_hook("c.dash", `<${Ai}>window.top.postMessage('${e}', '*'); 
          </${Ai}> 
          <div id="dummyAd" style="width:${b}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${b}x${g}</p> 
            <p>Rendered size:${b}x${g}</p> 
          </div>`, "assign"));
      1 != d && (c = cc11001100_hook("c", f.size().height(), "assign"), a.style.height = cc11001100_hook("a.style.height", c + "px", "assign"));
    }
    m() {
      if (this.na) {
        var a = cc11001100_hook("a", this.na, "var-init");
        a.D.parentNode && a.D.parentNode.removeChild(a.D);
        this.na = cc11001100_hook("this.na", null, "assign");
        hi(this) && (gi(this).D.style.display = cc11001100_hook("gi(this).D.style.display", this.A, "assign"));
        $e();
      }
    }
  }
  var ej = cc11001100_hook("ej", class extends ki {
    build() {
      return new dj(this);
    }
  }, "var-init");
  new Le(["comments"]);
  new Le(["allcomments"]);
  new Le(["post-container", "post", "type-post"]);
  var gj = cc11001100_hook("gj", (a, b, c) => {
      const d = cc11001100_hook("d", [], "var-init");
      a.map(e => fj(e, b, c)).forEach(e => va(d, e));
      return d;
    }, "var-init"),
    fj = cc11001100_hook("fj", (a, b, c) => {
      const d = cc11001100_hook("d", a.ub.da, "var-init"),
        e = cc11001100_hook("e", a.node, "var-init");
      if (!e) return [];
      const f = cc11001100_hook("f", [], "var-init");
      e.j() && ta(d, 0) && f.push(0);
      ta(d, 1) && f.push(1);
      ta(d, 2) && (!ta(d, 1) || 0 < ef(e).length) && f.push(2);
      e.j() && ta(d, 3) && f.push(3);
      return f.map(g => {
        g = cc11001100_hook("g", new ej(a, g), "assign");
        b.forEach(g.j.add, g.j);
        g.m.push(...c);
        return g.build();
      });
    }, "var-init"),
    hj = cc11001100_hook("hj", (a, b) => {
      a = cc11001100_hook("a", gi(b) ? a.map.get(w(gi(b))) : void 0, "assign");
      if (!a) return -1;
      switch (b.l) {
        case 0:
          return a.start.ca();
        case 1:
          return a.start.ca() + 1;
        case 2:
          return a.end.ca();
        case 3:
          return a.end.ca() + 1;
      }
      return -1;
    }, "var-init"),
    ij = cc11001100_hook("ij", (a, b) => {
      a = cc11001100_hook("a", gi(b) ? a.map.get(w(gi(b))) : void 0, "assign");
      if (!a) return -1;
      switch (b.l) {
        case 0:
          return a.start.ca() - .1;
        case 3:
          return a.end.ca() + .1;
        case 1:
          return a.start.ca() + .1;
        case 2:
          return a.end.ca() - .1;
      }
      return -1;
    }, "var-init");
  function jj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b && a.j.push(b);
    return a;
  }
  function kj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.push(b);
    return a;
  }
  function lj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eg(a.v, () => {
      const c = cc11001100_hook("c", [], "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < a.l.length; ++d) {
        const e = cc11001100_hook("e", a.l[d].j(b), "var-init");
        va(c, e);
        if (0 < e.length) break;
      }
      return c;
    }, "flap");
  }
  function mj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eg(a.v, () => {
      if (0 == a.j.length) var c = cc11001100_hook("c", [], "var-init");else {
        var d = cc11001100_hook("d", Math.floor(ij(a.A, b)), "var-init");
        if ((d = cc11001100_hook("d", -1 != d ? d + b.B() + "|" + b.v + "|10px|10px" : null, "assign")) && oe(a.m, d)) c = cc11001100_hook("c", a.m.get(d), "assign");else {
          var e = cc11001100_hook("e", [], "var-init"),
            f = cc11001100_hook("f", fi(b), "var-init");
          try {
            for (let g = cc11001100_hook("g", 0, "var-init"); g < a.j.length; ++g) if (c = cc11001100_hook("c", a.j[g].j(f), "assign"), va(e, c), 0 < c.length) {
              b.m();
              break;
            }
          } finally {
            b.m();
          }
          null != d && a.m.set(d, e);
          c = cc11001100_hook("c", e, "assign");
        }
      }
      return c;
    }, "flfa");
  }
  function nj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new Dg(), "var-init");
    lj(a, b).then(d => {
      0 < d.length ? c.resolve(d) : mj(a, b).then(e => {
        c.resolve(d.concat(e));
      });
    });
    return c.j;
  }
  class oj {
    constructor(a, b) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.m = cc11001100_hook("this.m", new S(), "assign");
    }
  }
  ;
  class pj {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    j(a) {
      if (!a) return [];
      for (let b = cc11001100_hook("b", 0, "var-init"); b < this.l.length; ++b) if (this.l[b].v(a, !1)) return [2];
      return [];
    }
  }
  ;
  class qj {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j(a) {
      if (!a) return [9];
      const b = cc11001100_hook("b", Ae(this.l, !0), "var-init");
      return null == b ? [16] : b - a.l().bottom < this.m ? [17] : [];
    }
  }
  ;
  class rj {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j(a) {
      for (a = cc11001100_hook("a", Math.floor(ij(this.l, a)), "assign"); 0 < a; a--) {
        const b = cc11001100_hook("b", this.l.pa[a], "var-init");
        if (!b.j.Ka()) {
          if ((0 == b.l ? jf(b.j).top : jf(b.j).bottom) <= this.m) break;
          return [];
        }
      }
      return [10];
    }
  }
  ;
  class sj {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
    }
  }
  ;
  class tj {
    constructor(a) {
      const b = cc11001100_hook("b", [], "var-init");
      a = cc11001100_hook("a", a.j.slice(0), "assign");
      for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; ++c) b.push(a[c].l());
      this.m = cc11001100_hook("this.m", b, "assign");
      this.l = cc11001100_hook("this.l", new S(), "assign");
    }
    j(a) {
      const b = cc11001100_hook("b", w(a), "var-init");
      if (oe(this.l, b)) return this.l.get(b);
      a: {
        var c = cc11001100_hook("c", a.l(), "var-init");
        c = cc11001100_hook("c", new sj(c.left, c.top + a.D.scrollHeight, a.D.scrollWidth), "assign");
        for (e of this.m) {
          b: {
            if (c.j >= Math.floor(e.bottom)) {
              var d = cc11001100_hook("d", !1, "var-init");
              break b;
            }
            d = cc11001100_hook("d", Math.ceil(e.left), "assign");
            const f = cc11001100_hook("f", c.l + c.m, "var-init");
            d = cc11001100_hook("d", !(Math.floor(e.right) <= c.l || f <= d), "assign");
          }
          if (d) {
            var e = cc11001100_hook("e", !0, "var-init");
            break a;
          }
        }
        e = cc11001100_hook("e", !1, "assign");
      }
      e = cc11001100_hook("e", !e && a.D.scrollHeight > a.D.clientHeight && tf(a), "assign");
      c = cc11001100_hook("c", a.j(), "assign");
      c = cc11001100_hook("c", !c || this.j(c), "assign");
      a = cc11001100_hook("a", e && c ? !0 : e ? of(a) : c && !of(a), "assign");
      this.l.set(b, a);
      return a;
    }
  }
  ;
  class uj {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    j(a) {
      const b = cc11001100_hook("b", gi(a), "var-init");
      if (!b) return [];
      switch (a.l) {
        case 0:
        case 3:
          return a = cc11001100_hook("a", b.j(), "assign"), b != this.m && a && this.l.j(a) ? [] : [14];
        case 1:
        case 2:
          return this.l.j(b) ? [] : [14];
        default:
          throw Error("Unhandled position.");
      }
    }
  }
  ;
  class vj {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    j(a) {
      return (a = cc11001100_hook("a", gi(a), "assign")) && nf(a, this.l) ? [11] : [];
    }
  }
  ;
  class wj {}
  ;
  function xj(a = window) {
    a = cc11001100_hook("a", a.googletag, "assign");
    return a?.apiReady ? a : void 0;
  }
  ;
  var Aj = cc11001100_hook("Aj", (a, b) => {
      var c = cc11001100_hook("c", ua(b.document.querySelectorAll(".google-auto-placed")), "var-init");
      const d = cc11001100_hook("d", ua(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")), "var-init"),
        e = cc11001100_hook("e", ua(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")), "var-init");
      var f;
      (f = cc11001100_hook("f", yj(b), "assign")) || (f = cc11001100_hook("f", ua(b.document.querySelectorAll("div[id^=div-gpt-ad]")), "assign"));
      f = cc11001100_hook("f", f.concat(ua(b.document.querySelectorAll("iframe[id^=google_ads_iframe]"))), "assign");
      const g = cc11001100_hook("g", ua(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")), "var-init"),
        h = cc11001100_hook("h", ua(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), "var-init"),
        l = cc11001100_hook("l", ua(b.document.querySelectorAll("div.googlepublisherpluginad")), "var-init"),
        k = cc11001100_hook("k", ua(b.document.querySelectorAll("html > ins.adsbygoogle")), "var-init");
      let m = cc11001100_hook("m", [].concat(ua(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), ua(b.document.querySelectorAll("body ins.adsbygoogle"))), "var-init");
      b = cc11001100_hook("b", [], "assign");
      for (const [n, q] of [[a.Sc, c], [a.Lb, d], [a.Vc, e], [a.Tc, f], [a.Wc, g], [a.Rc, h], [a.Uc, l], [a.Xc, k]]) a = cc11001100_hook("a", q, "assign"), !1 === n ? b = cc11001100_hook("b", b.concat(a), "assign") : m = cc11001100_hook("m", m.concat(a), "assign");
      a = cc11001100_hook("a", zj(m), "assign");
      c = cc11001100_hook("c", zj(b), "assign");
      a = cc11001100_hook("a", a.slice(0), "assign");
      for (const n of c) for (c = cc11001100_hook("c", 0, "assign"); c < a.length; c++) (n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
      return a;
    }, "var-init"),
    Cj = cc11001100_hook("Cj", a => {
      const b = cc11001100_hook("b", yj(wc(sc(a))) || [], "var-init");
      return !!Ac(a, c => {
        if (!ca(c) || 1 != c.nodeType) return !1;
        const d = cc11001100_hook("d", c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector, "var-init");
        return !d || ta(b, c) || sa(Nc(Bj), e => d.call(c, e));
      }, !1, 20);
    }, "var-init");
  const yj = cc11001100_hook("yj", a => {
      const b = cc11001100_hook("b", xj(a), "var-init");
      return b ? qa(ra(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null;
    }, "var-init"),
    Bj = cc11001100_hook("Bj", {
      Dc: cc11001100_hook("Dc", "ins.adsbygoogle-ablated-ad-slot", "object-key-init"),
      Fc: cc11001100_hook("Fc", "body ins.adsbygoogle", "object-key-init"),
      Ec: cc11001100_hook("Ec", "iframe[id^=aswift_],iframe[id^=google_ads_frame]", "object-key-init"),
      Gc: cc11001100_hook("Gc", ".google-auto-placed", "object-key-init"),
      Hc: cc11001100_hook("Hc", "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]", "object-key-init"),
      Ic: cc11001100_hook("Ic", "iframe[id^=google_ads_iframe]", "object-key-init"),
      Kc: cc11001100_hook("Kc", "div[id^=div-gpt-ad]", "object-key-init"),
      Lc: cc11001100_hook("Lc", "ins.adsbygoogle[data-ad-format=autorelaxed]", "object-key-init"),
      Mc: cc11001100_hook("Mc", "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]", "object-key-init"),
      Jc: cc11001100_hook("Jc", "div.googlepublisherpluginad", "object-key-init"),
      Nc: cc11001100_hook("Nc", "html > ins.adsbygoogle", "object-key-init")
    }, "var-init");
  var zj = cc11001100_hook("zj", a => {
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
  var Dj = cc11001100_hook("Dj", Si.O(453, Aj), "var-init");
  function Ej(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Fj(a), "assign");
    Gj(a);
    return new Hj(a);
  }
  function Ij(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.j.map(b => b.box);
  }
  class Hj {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a.slice(0), "assign");
    }
  }
  function Fj(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Dj({
        Lb: cc11001100_hook("Lb", !1, "object-key-init")
      }, a), "var-init"),
      c = cc11001100_hook("c", Ce(a), "var-init"),
      d = cc11001100_hook("d", U(a), "var-init");
    return b.map(e => {
      const f = cc11001100_hook("f", e.getBoundingClientRect(), "var-init");
      return (e = cc11001100_hook("e", !!e.className && -1 != e.className.indexOf("google-auto-placed"), "assign")) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
        box: {
          top: cc11001100_hook("top", f.top + d, "object-key-init"),
          right: cc11001100_hook("right", f.right + c, "object-key-init"),
          bottom: cc11001100_hook("bottom", f.bottom + d, "object-key-init"),
          left: cc11001100_hook("left", f.left + c, "object-key-init")
        },
        Pc: cc11001100_hook("Pc", e ? 1 : 0, "object-key-init")
      } : null;
    }).filter(Mb(e => null === e));
  }
  function Gj(a) {
    cc11001100_hook("a", a, "function-parameter");
    ra(a, () => new wj());
  }
  ;
  class Jj {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", Dj({}, c).map(x(a.j, a)).filter(Mb(d => null === d)), "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j(a) {
      if (!a) return [9];
      a = cc11001100_hook("a", a.l(), "assign");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < this.l.length; d++) {
        const e = cc11001100_hook("e", this.l[d].l(), "var-init");
        var b;
        if (b = cc11001100_hook("b", 1 < (e.bottom - e.top) * (e.right - e.left), "assign")) {
          b = cc11001100_hook("b", a.top, "assign");
          var c = cc11001100_hook("c", this.m, "var-init");
          (b = cc11001100_hook("b", e.top - c < b && b < e.bottom + c, "assign")) || (b = cc11001100_hook("b", a.bottom, "assign"), c = cc11001100_hook("c", this.m, "assign"), b = cc11001100_hook("b", e.top - c < b && b < e.bottom + c, "assign"));
        }
        if (b) return [8];
      }
      return [];
    }
  }
  ;
  class Kj {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j(a) {
      if (hi(a)) return [];
      a = cc11001100_hook("a", ij(this.l.l, a), "assign");
      var b = cc11001100_hook("b", sg(this.l, a), "var-init");
      if (!b) return [];
      const c = cc11001100_hook("c", this.m.j(b.start.j), "var-init");
      b = cc11001100_hook("b", b.end.ca(), "assign");
      return c && 10 >= a - b ? [5] : [];
    }
  }
  ;
  const Lj = cc11001100_hook("Lj", "ASIDE DIV IMG LI SECTION TABLE TD".split(" "), "var-init");
  class Mj {
    j(a) {
      a = cc11001100_hook("a", gi(a), "assign");
      if (!a) return [12];
      if (!Lj.includes(a.D.tagName) || a.D.id) return [];
      const b = cc11001100_hook("b", zf(a), "var-init"),
        c = cc11001100_hook("c", bf(a), "var-init");
      for (const d of b) if (1 == c.getElementsByClassName(d).length) return [];
      return 150 >= a.l().getHeight() ? [13] : [];
    }
  }
  ;
  class Nj {
    j(a) {
      return a && !a.Ka() && pf(a) ? [] : [3];
    }
  }
  ;
  function Oj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 < a.j.length ? (b.resolve(a.j.shift()), !0) : !1;
  }
  class Pj {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.C = cc11001100_hook("this.C", [], "assign");
      this.v = cc11001100_hook("this.v", [], "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
    }
    ba() {
      const a = cc11001100_hook("a", new Dg(), "var-init");
      this.l.j(new zg(x(this.m, this, a), "p"));
      return a.j;
    }
    m(a) {
      Oj(this, a) || this.A.ba().then(x(this.B, this, a), x(a.l, a));
    }
    B(a, b) {
      b = cc11001100_hook("b", gj([b], this.C, this.v), "assign");
      va(this.j, b);
      Oj(this, a) || this.l.j(new zg(x(this.m, this, a), "p"));
    }
  }
  ;
  class Qj {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a.filter(b => hi(b)), "assign");
      this.l = cc11001100_hook("this.l", a.filter(b => !hi(b)), "assign");
    }
    ba() {
      return this.j.shift() || this.l.shift() || null;
    }
  }
  ;
  class Rj {}
  ;
  function Sj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.j(new zg(() => {
      const c = cc11001100_hook("c", a.j ? a.j.ba() : null, "var-init");
      c ? Tj(a, b, c) : a.A.ba().then(x(a.B, a, b), x(a.F, a, b));
    }, "r"));
  }
  function Tj(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.v && a.v.apply(c);
    a.m ? nj(a.m, c).then(function (d) {
      0 == d.length ? (0 < a.j.j.length || (a.j = cc11001100_hook("a.j", null, "assign")), Fg(a.l, b, c, "rres")) : (a.C.push(new Rj()), Sj(a, b));
    }) : Fg(a.l, b, c, "rres");
  }
  class Uj {
    constructor(a, b, c, d) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.v = cc11001100_hook("this.v", c, "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
      this.C = cc11001100_hook("this.C", [], "assign");
    }
    ba() {
      const a = cc11001100_hook("a", new Dg(), "var-init");
      Sj(this, a);
      return a.j;
    }
    B(a, b) {
      this.j = cc11001100_hook("this.j", b, "assign");
      Sj(this, a);
    }
    F(a) {
      Gg(this.l, a);
    }
  }
  ;
  class Vj {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    ba() {
      const a = cc11001100_hook("a", new Dg(), "var-init");
      this.j.ba().then(b => {
        a.resolve(new Qj([b]));
      }, x(a.l, a));
      return a.j;
    }
  }
  ;
  class Wj {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    apply(a) {
      var b = cc11001100_hook("b", hj(this.j, a), "var-init");
      b = cc11001100_hook("b", this.l.get(w(this.j.pa[b])), "assign");
      a.v = cc11001100_hook("a.v", b.ic <= b.nc, "assign");
    }
  }
  ;
  class Xj {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    j(a) {
      a: {
        const b = cc11001100_hook("b", gi(a), "var-init");
        if (b) {
          switch (a.l) {
            case 0:
            case 3:
              if (a = cc11001100_hook("a", b.j(), "assign")) break a;
              throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");
            case 1:
            case 2:
              a = cc11001100_hook("a", b, "assign");
              break a;
          }
          throw Error("Un-handled ad placement position.");
        }
        a = cc11001100_hook("a", null, "assign");
      }
      return a && ta(this.l, a.D) ? [18] : [];
    }
  }
  ;
  var Yj = cc11001100_hook("Yj", [{
    hostname: cc11001100_hook("hostname", /^([a-z]+.)?m.wikihow.com$/, "object-key-init"),
    cc: cc11001100_hook("cc", "mw-mf-viewport", "object-key-init")
  }], "var-init");
  const Zj = cc11001100_hook("Zj", a => {
    if (!a.location || !a.location.hostname) return [];
    var b = cc11001100_hook("b", a.location.hostname, "var-init"),
      c = cc11001100_hook("c", [], "var-init");
    pa(Yj, function (d) {
      b.match(d.hostname) && (d = cc11001100_hook("d", a.document.getElementById(d.cc), "assign")) && c.push(d);
    });
    return c;
  }, "var-init");
  function ak(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.j(new zg(function () {
      if (a.j) {
        if (a.m.j(a.j)) {
          var c = cc11001100_hook("c", a.j, "var-init");
          a.j = cc11001100_hook("a.j", gf(a.j), "assign");
          b.resolve(c);
        } else {
          a: {
            c = cc11001100_hook("c", a.j, "assign");
            const d = cc11001100_hook("d", ef(c), "var-init");
            for (let e = cc11001100_hook("e", 0, "var-init"); e < d.length; ++e) if (d[e].v()) {
              c = cc11001100_hook("c", d[e], "assign");
              break a;
            }
            c = cc11001100_hook("c", gf(c), "assign");
          }
          a.j = cc11001100_hook("a.j", c, "assign");
          ak(a, b);
        }
      } else b.l(null);
    }, "fpar"));
  }
  const bk = cc11001100_hook("bk", class {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
    }
    ba() {
      var a = cc11001100_hook("a", new Dg(), "var-init");
      ak(this, a);
      return a.j;
    }
  }, "var-init");
  class ck {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
    }
    reset() {
      const a = cc11001100_hook("a", this.j, "var-init");
      this.j = cc11001100_hook("this.j", [], "assign");
      return a;
    }
  }
  ;
  var dk = cc11001100_hook("dk", {
      da: cc11001100_hook("da", [3], "object-key-init"),
      la: cc11001100_hook("la", !1, "object-key-init"),
      ma: cc11001100_hook("ma", 0, "object-key-init"),
      ka: cc11001100_hook("ka", 1, "object-key-init")
    }, "var-init"),
    ek = cc11001100_hook("ek", new Le(["LI", "TR", "TD", "TH"]), "var-init");
  function fk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.j(new zg(function () {
      a.A.ba().then(x(a.v, a, b), x(a.m, a, b));
    }, "para"));
  }
  const gk = cc11001100_hook("gk", class {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.j = cc11001100_hook("this.j", new ck(c), "assign");
    }
    ba() {
      var a = cc11001100_hook("a", new Dg(), "var-init");
      fk(this, a);
      return a.j;
    }
    v(a, b) {
      var c = cc11001100_hook("c", this.j, "var-init");
      if (c.j.length) {
        var d = cc11001100_hook("d", c.j[c.j.length - 1], "var-init");
        var e = cc11001100_hook("e", c.l, "var-init");
        const f = cc11001100_hook("f", e.l.map.get(w(b)), "var-init");
        (e = cc11001100_hook("e", f ? sg(e, f.start.ca()) : null, "assign")) ? (e = cc11001100_hook("e", e.start.j, "assign"), d = cc11001100_hook("d", d == e || d != e && zc(d.D, e.D), "assign")) : d = cc11001100_hook("d", !0, "assign");
      } else d = cc11001100_hook("d", !0, "assign");
      d ? c.j.push(b) : c.j = cc11001100_hook("c.j", [b], "assign");
      b = cc11001100_hook("b", this.j, "assign");
      (b = cc11001100_hook("b", 3 <= b.j.length ? b.j[b.j.length - 3 + 1] : null, "assign")) && !ek.contains(b.D.tagName) ? a.resolve({
        node: cc11001100_hook("node", b, "object-key-init"),
        ub: cc11001100_hook("ub", Fh(dk), "object-key-init"),
        identifier: {}
      }) : fk(this, a);
    }
    m(a) {
      a.l("na");
    }
  }, "var-init");
  const hk = cc11001100_hook("hk", class extends Hg {
    constructor() {
      super();
      this.l = cc11001100_hook("this.l", [], "assign");
      this.m = cc11001100_hook("this.m", !1, "assign");
    }
    j(a) {
      this.l.push(a);
      if (!this.m) {
        this.m = cc11001100_hook("this.m", !0, "assign");
        try {
          for (; 0 < this.l.length;) this.l.shift().j();
        } finally {
          this.m = cc11001100_hook("this.m", !1, "assign");
        }
      }
    }
  }, "var-init");
  const ik = cc11001100_hook("ik", class {
    constructor() {
      this.j = cc11001100_hook("this.j", Date.now(), "assign");
      this.l = cc11001100_hook("this.l", Date.now(), "assign");
    }
  }, "var-init");
  var jk;
  function kk() {
    var a = cc11001100_hook("a", u.MessageChannel, "var-init");
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = cc11001100_hook("a", function () {
      var e = cc11001100_hook("e", yc(document, "IFRAME"), "var-init");
      e.style.display = cc11001100_hook("e.style.display", "none", "assign");
      document.documentElement.appendChild(e);
      var f = cc11001100_hook("f", e.contentWindow, "var-init");
      e = cc11001100_hook("e", f.document, "assign");
      e.open();
      e.close();
      var g = cc11001100_hook("g", "callImmediate" + Math.random(), "var-init"),
        h = cc11001100_hook("h", "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host, "var-init");
      e = cc11001100_hook("e", x(function (l) {
        if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage();
      }, this), "assign");
      f.addEventListener("message", e, !1);
      this.port1 = cc11001100_hook("this.port1", {}, "assign");
      this.port2 = cc11001100_hook("this.port2", {
        postMessage: function () {
          f.postMessage(g, h);
        }
      }, "assign");
    }, "assign"));
    if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
      var b = cc11001100_hook("b", new a(), "var-init"),
        c = cc11001100_hook("c", {}, "var-init"),
        d = cc11001100_hook("d", c, "var-init");
      b.port1.onmessage = cc11001100_hook("b.port1.onmessage", function () {
        if (void 0 !== c.next) {
          c = cc11001100_hook("c", c.next, "assign");
          var e = cc11001100_hook("e", c.Hb, "var-init");
          c.Hb = cc11001100_hook("c.Hb", null, "assign");
          e();
        }
      }, "assign");
      return function (e) {
        d.next = cc11001100_hook("d.next", {
          Hb: cc11001100_hook("Hb", e, "object-key-init")
        }, "assign");
        d = cc11001100_hook("d", d.next, "assign");
        b.port2.postMessage(0);
      };
    }
    return function (e) {
      u.setTimeout(e, 0);
    };
  }
  ;
  class lk {
    constructor(a, b) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
    }
    get() {
      let a;
      0 < this.l ? (this.l--, a = cc11001100_hook("a", this.j, "assign"), this.j = cc11001100_hook("this.j", a.next, "assign"), a.next = cc11001100_hook("a.next", null, "assign")) : a = cc11001100_hook("a", this.v(), "assign");
      return a;
    }
  }
  ;
  function mk() {
    var a = cc11001100_hook("a", nk, "var-init");
    let b = cc11001100_hook("b", null, "var-init");
    a.j && (b = cc11001100_hook("b", a.j, "assign"), a.j = cc11001100_hook("a.j", a.j.next, "assign"), a.j || (a.l = cc11001100_hook("a.l", null, "assign")), b.next = cc11001100_hook("b.next", null, "assign"));
    return b;
  }
  class ok {
    constructor() {
      this.l = cc11001100_hook("this.l", this.j = cc11001100_hook("this.j", null, "assign"), "assign");
    }
    add(a, b) {
      const c = cc11001100_hook("c", pk.get(), "var-init");
      c.set(a, b);
      this.l ? this.l.next = cc11001100_hook("this.l.next", c, "assign") : this.j = cc11001100_hook("this.j", c, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
    }
  }
  var pk = cc11001100_hook("pk", new lk(() => new qk(), a => a.reset()), "var-init");
  class qk {
    constructor() {
      this.next = cc11001100_hook("this.next", this.j = cc11001100_hook("this.j", this.l = cc11001100_hook("this.l", null, "assign"), "assign"), "assign");
    }
    set(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.next = cc11001100_hook("this.next", null, "assign");
    }
    reset() {
      this.next = cc11001100_hook("this.next", this.j = cc11001100_hook("this.j", this.l = cc11001100_hook("this.l", null, "assign"), "assign"), "assign");
    }
  }
  ;
  let rk,
    sk = cc11001100_hook("sk", !1, "var-init"),
    nk = cc11001100_hook("nk", new ok(), "var-init"),
    uk = cc11001100_hook("uk", () => {
      if (u.Promise && u.Promise.resolve) {
        const a = cc11001100_hook("a", u.Promise.resolve(void 0), "var-init");
        rk = cc11001100_hook("rk", () => {
          a.then(tk);
        }, "assign");
      } else rk = cc11001100_hook("rk", () => {
        var a = cc11001100_hook("a", tk, "var-init");
        "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && !z("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (jk || (jk = cc11001100_hook("jk", kk(), "assign")), jk(a)) : u.setImmediate(a);
      }, "assign");
    }, "var-init");
  var tk = cc11001100_hook("tk", () => {
    for (var a; a = cc11001100_hook("a", mk(), "assign");) {
      try {
        a.l.call(a.j);
      } catch (c) {
        ma(c);
      }
      var b = cc11001100_hook("b", pk, "var-init");
      b.m(a);
      100 > b.l && (b.l++, a.next = cc11001100_hook("a.next", b.j, "assign"), b.j = cc11001100_hook("b.j", a, "assign"));
    }
    sk = cc11001100_hook("sk", !1, "assign");
  }, "var-init");
  var vk = cc11001100_hook("vk", class extends Hg {
    constructor(a, b, c) {
      var d = cc11001100_hook("d", new ik(), "var-init");
      super();
      this.G = cc11001100_hook("this.G", a, "assign");
      this.l = cc11001100_hook("this.l", d, "assign");
      this.B = cc11001100_hook("this.B", b || null, "assign");
      this.v = cc11001100_hook("this.v", c || null, "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
      this.A = cc11001100_hook("this.A", !1, "assign");
    }
    j(a) {
      this.m.push(a);
      this.A || (a = cc11001100_hook("a", this.F, "assign"), rk || uk(), sk || (rk(), sk = cc11001100_hook("sk", !0, "assign")), nk.add(a, this));
    }
    F() {
      this.B ? this.B(x(this.C, this)) : this.C();
    }
    C() {
      if (!this.A) {
        this.A = cc11001100_hook("this.A", !0, "assign");
        try {
          for (this.l.j = cc11001100_hook("this.l.j", Date.now(), "assign"); 0 < this.m.length;) {
            var a = cc11001100_hook("a", this.m.shift(), "var-init");
            this.l.l = cc11001100_hook("this.l.l", Date.now(), "assign");
            a.j();
            this.v && this.v.l(Date.now() - this.l.l, a.l);
            if (50 < Date.now() - this.l.j + 10) break;
          }
          0 < this.m.length && this.G.setTimeout(x(this.F, this), 0);
        } finally {
          this.A = cc11001100_hook("this.A", !1, "assign"), this.v && this.v.j(Date.now() - this.l.j);
        }
      }
    }
  }, "var-init");
  function wk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new Dg(), "var-init"),
      d = cc11001100_hook("d", b.G ? new vk(a, ja(Ui, b.j ? "lr:apf:" + b.j : "lr:apf"), b.F) : new hk(), "var-init");
    d.j(new zg(function () {
      Qg(new Tg(d), a, b).then(function (e) {
        var f = cc11001100_hook("f", e.l, "var-init"),
          g = cc11001100_hook("g", e.v, "var-init"),
          h = cc11001100_hook("h", e.m, "var-init");
        a: {
          var l = cc11001100_hook("l", e.l, "var-init"),
            k = cc11001100_hook("k", e.j.A, "var-init");
          switch (k) {
            case 2:
              var m = cc11001100_hook("m", l.v, "var-init");
              k = cc11001100_hook("k", e.m.j, "assign");
              k.v || (l = cc11001100_hook("l", new Gf(Zf(k), 0), "assign"), k.j || (k.j = cc11001100_hook("k.j", new Kf(new Gf(Zf(k), 0)), "assign")), k.v = cc11001100_hook("k.v", new Nf(l, new Gf(k.j, 1), new Gf($f(k), 2)), "assign"));
              m = cc11001100_hook("m", new gk(d, new bk(d, m, new Gf(k.v, 3)), e.v.j), "assign");
              break a;
            default:
              m = cc11001100_hook("m", l.A, "assign");
              var n = cc11001100_hook("n", l.j.pa, "var-init");
              l = cc11001100_hook("l", e.j, "assign");
              k = cc11001100_hook("k", 1 == k ? Hh(n) : Qe(n), "assign");
              m = cc11001100_hook("m", new Lh(m, k, l), "assign");
          }
        }
        m = cc11001100_hook("m", new Vj(new Pj(d, m)), "assign");
        k = cc11001100_hook("k", new Wj(f.j, g.m), "assign");
        l = cc11001100_hook("l", new oj(d, f.j), "assign");
        e.j.B && kj(l, new rj(f.j, f.T));
        n = cc11001100_hook("n", Zj(f.l), "assign");
        h = cc11001100_hook("h", kj(kj(kj(kj(l, new Xj(n)), new Kj(g.j, new Gf($f(h.j), 2))), new Mj()), new uj(f.v, new tj(g.j))), "assign");
        n = cc11001100_hook("n", new mi(), "assign");
        va(n.l, ni);
        n = cc11001100_hook("n", li(li(n, oi), pi), "assign");
        va(n.v, ri);
        va(n.l, qi);
        h = cc11001100_hook("h", jj(kj(kj(h, li(n, qi)), new vj(f.P * f.T)), new Nj()), "assign");
        var q = cc11001100_hook("q", e.j, "var-init"),
          r = cc11001100_hook("r", e.l.A, "var-init");
        n = cc11001100_hook("n", Math.max(r * q.v, q.minWidth), "assign");
        q = cc11001100_hook("q", r * q.l, "assign");
        n = cc11001100_hook("n", void 0 !== n ? n : 0, "assign");
        q = cc11001100_hook("q", void 0 !== q ? q : Infinity, "assign");
        if (0 > n || 0 > q) throw Error("apf::wf");
        jj(jj(jj(h, 0 >= n && Infinity === q ? null : new yg(n, q)), new Jj(f.v.m, e.j.C, f.l)), new pj([g.j, g.l]));
        0 < e.j.m && jj(l, new qj(f.l, e.j.m));
        Fg(d, c, new Uj(d, m, k, l), "itres");
      }, x(c.l, c));
    }, "i"));
    return c.j;
  }
  ;
  class xk {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new Le(a), "assign");
    }
    contains(a) {
      return this.j.contains(a);
    }
  }
  ;
  class yk {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    map(a) {
      return null != this.j ? (a = cc11001100_hook("a", a(this.j.value), "assign"), a instanceof yk ? a : new yk({
        value: cc11001100_hook("value", a, "object-key-init")
      })) : this;
    }
  }
  ;
  var zk = cc11001100_hook("zk", class extends Fb {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Bk = cc11001100_hook("Bk", class extends Fb {
      constructor(a) {
        super(a, -1, Ak);
      }
    }, "var-init"),
    Ak = cc11001100_hook("Ak", [3, 4], "var-init");
  var Ck = cc11001100_hook("Ck", class extends Fb {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ek = cc11001100_hook("Ek", class extends Fb {
      constructor(a) {
        super(a, -1, Dk);
      }
    }, "var-init"),
    Dk = cc11001100_hook("Dk", [6, 7, 9, 10, 11], "var-init");
  var Gk = cc11001100_hook("Gk", class extends Fb {
      constructor(a) {
        super(a, -1, Fk);
      }
    }, "var-init"),
    Hk = cc11001100_hook("Hk", Jb(Gk), "var-init"),
    Fk = cc11001100_hook("Fk", [1, 2, 5, 7], "var-init");
  ih(new fh(0, {}));
  ih(new fh(1, {}));
  class Ik {
    constructor() {
      var a = cc11001100_hook("a", ed`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`, "var-init");
      this.j = cc11001100_hook("this.j", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.A = cc11001100_hook("this.A", Math.random(), "assign");
      this.m = cc11001100_hook("this.m", this.Qa, "assign");
      this.B = cc11001100_hook("this.B", a, "assign");
    }
    Db(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    v(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    Qa(a, b, c = .01, d, e = "jserror") {
      if ((this.l ? this.A : Math.random()) > c) return !1;
      b.error && b.meta && b.id || (b = cc11001100_hook("b", new td(b, {
        context: cc11001100_hook("context", a, "object-key-init"),
        id: cc11001100_hook("id", e, "object-key-init")
      }), "assign"));
      if (d || this.j) b.meta = cc11001100_hook("b.meta", {}, "assign"), this.j && this.j(b.meta), d && d(b.meta);
      u.google_js_errors = cc11001100_hook("u.google_js_errors", u.google_js_errors || [], "assign");
      u.google_js_errors.push(b);
      u.error_rep_loaded || (Jc(u.document, this.B), u.error_rep_loaded = cc11001100_hook("u.error_rep_loaded", !0, "assign"));
      return !1;
    }
    ya(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.m(a, d, .01, c, "jserror")) throw d;
      }
    }
    O(a, b) {
      return (...c) => this.ya(a, () => b.apply(void 0, c));
    }
  }
  ;
  const Jk = cc11001100_hook("Jk", (a, b) => {
    b = cc11001100_hook("b", b.google_js_reporting_queue = cc11001100_hook("b.google_js_reporting_queue", b.google_js_reporting_queue || [], "assign"), "assign");
    2048 > b.length && b.push(a);
  }, "var-init");
  var Kk = cc11001100_hook("Kk", (a, b, c) => {
      const d = cc11001100_hook("d", c || window, "var-init"),
        e = cc11001100_hook("e", "undefined" !== typeof queueMicrotask, "var-init");
      return function () {
        e && queueMicrotask(() => {
          d.google_rum_task_id_counter = cc11001100_hook("d.google_rum_task_id_counter", d.google_rum_task_id_counter || 1, "assign");
          d.google_rum_task_id_counter += cc11001100_hook("d.google_rum_task_id_counter", 1, "assign");
        });
        const f = cc11001100_hook("f", Id(), "var-init");
        let g,
          h = cc11001100_hook("h", 3, "var-init");
        try {
          g = cc11001100_hook("g", a.apply(this, arguments), "assign");
        } catch (l) {
          h = cc11001100_hook("h", 13, "assign");
          if (!b) throw l;
          b(754, l);
        } finally {
          d.google_measure_js_timing && f && Jk({
            label: cc11001100_hook("label", 754 .toString(), "object-key-init"),
            value: cc11001100_hook("value", f, "object-key-init"),
            duration: cc11001100_hook("duration", (Id() || 0) - f, "object-key-init"),
            type: cc11001100_hook("type", h, "object-key-init"),
            ...(e && {
              taskId: cc11001100_hook("taskId", d.google_rum_task_id_counter = cc11001100_hook("d.google_rum_task_id_counter", d.google_rum_task_id_counter || 1, "assign"), "object-key-init")
            })
          }, d);
        }
        return g;
      };
    }, "var-init"),
    Lk = cc11001100_hook("Lk", (a, b) => Kk(a, (c, d) => {
      new Ik().Qa(c, d);
    }, b), "var-init");
  function Mk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Lk(a, b).apply();
  }
  var Nk = cc11001100_hook("Nk", {
    1: cc11001100_hook(1, 1, "object-key-init"),
    2: cc11001100_hook(2, 2, "object-key-init"),
    3: cc11001100_hook(3, 3, "object-key-init"),
    0: cc11001100_hook(0, 0, "object-key-init")
  }, "var-init");
  function Ok(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? a : Nk[a];
  }
  function Pk(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
      var d = cc11001100_hook("d", C(a[c], 1), "var-init"),
        e = cc11001100_hook("e", C(a[c], 2), "var-init");
      if (d && null != e) {
        var f = cc11001100_hook("f", {}, "var-init");
        f.uc = cc11001100_hook("f.uc", d, "assign");
        f.value = cc11001100_hook("f.value", e, "assign");
        b.push(f);
      }
    }
    return b;
  }
  function Qk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", {}, "var-init");
    a && (c.Eb = cc11001100_hook("c.Eb", C(a, 1), "assign"), c.vb = cc11001100_hook("c.vb", C(a, 2), "assign"), c.wb = cc11001100_hook("c.wb", !!kb(a, 3), "assign"));
    b && (c.ib = cc11001100_hook("c.ib", Pk(qb(b, zk, 3)), "assign"), c.eb = cc11001100_hook("c.eb", Pk(qb(b, zk, 4)), "assign"));
    return c;
  }
  var Rk = cc11001100_hook("Rk", {
    1: cc11001100_hook(1, 0, "object-key-init"),
    2: cc11001100_hook(2, 1, "object-key-init"),
    3: cc11001100_hook(3, 2, "object-key-init"),
    4: cc11001100_hook(4, 3, "object-key-init")
  }, "var-init");
  const Sk = cc11001100_hook("Sk", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    l(a, b, c, d) {
      c = cc11001100_hook("c", ei(d.document, this.j), "assign");
      c.Da.setAttribute("data-ad-format", "auto");
      di(c, a, b);
      return c;
    }
  }, "var-init");
  const Tk = cc11001100_hook("Tk", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    l(a, b, c, d) {
      var e = cc11001100_hook("e", 0 < qb(this.j, Bk, 9).length ? qb(this.j, Bk, 9)[0] : null, "var-init"),
        f = cc11001100_hook("f", Qk(nb(this.j, Ck, 3), e), "var-init");
      if (!e) return null;
      if (e = cc11001100_hook("e", C(e, 1), "assign")) {
        d = cc11001100_hook("d", d.document, "assign");
        var g = cc11001100_hook("g", c.tagName, "var-init");
        c = cc11001100_hook("c", new rc(d).createElement(g), "assign");
        c.style.clear = cc11001100_hook("c.style.clear", f.wb ? "both" : "none", "assign");
        "A" == g && (c.style.display = cc11001100_hook("c.style.display", "block", "assign"));
        c.style.padding = cc11001100_hook("c.style.padding", "0px", "assign");
        c.style.margin = cc11001100_hook("c.style.margin", "0px", "assign");
        f.ib && ci(c.style, f.ib);
        d = cc11001100_hook("d", new rc(d).createElement("INS"), "assign");
        f.eb && ci(d.style, f.eb);
        c.appendChild(d);
        f = cc11001100_hook("f", {
          Va: cc11001100_hook("Va", c, "object-key-init"),
          Da: cc11001100_hook("Da", d, "object-key-init")
        }, "assign");
        f.Da.setAttribute("data-ad-type", "text");
        f.Da.setAttribute("data-native-settings-key", e);
        di(f, a, b);
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", null, "assign");
      return a;
    }
  }, "var-init");
  function Uk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.l.query(b.document), "assign");
    return 0 < a.length ? a[0] : null;
  }
  const Vk = cc11001100_hook("Vk", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
  }, "var-init");
  function Wk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.v;
  }
  function Xk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return wh(oh) ? (a.A || (a.A = cc11001100_hook("a.A", Uk(a.j, a.m), "assign")), a.A) : Uk(a.j, a.m);
  }
  function Yk(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.W, "var-init");
    a = cc11001100_hook("a", a.m.document.createElement("div"), "assign");
    wh(oh) ? a.className = cc11001100_hook("a.className", "google-auto-placed-ad-placeholder", "assign") : a.className = cc11001100_hook("a.className", "google-auto-placed", "assign");
    var c = cc11001100_hook("c", a.style, "var-init");
    c.textAlign = cc11001100_hook("c.textAlign", "center", "assign");
    c.width = cc11001100_hook("c.width", "100%", "assign");
    c.height = cc11001100_hook("c.height", "0px", "assign");
    c.clear = cc11001100_hook("c.clear", b ? "both" : "none", "assign");
    return a;
  }
  function Zk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    oe(a.B, 0) || a.B.set(0, []);
    a.B.get(0).push(b);
  }
  class $k {
    constructor(a, b, c, d, e, f, g, h = null, l = null) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.L = cc11001100_hook("this.L", b, "assign");
      this.W = cc11001100_hook("this.W", c, "assign");
      this.Qb = cc11001100_hook("this.Qb", d, "assign");
      e || new mh();
      this.m = cc11001100_hook("this.m", f, "assign");
      this.F = cc11001100_hook("this.F", g, "assign");
      this.C = cc11001100_hook("this.C", h, "assign");
      (this.G = cc11001100_hook("this.G", l, "assign")) && nb(l, eh, 1) && nb(l, eh, 1);
      this.H = cc11001100_hook("this.H", [], "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.B = cc11001100_hook("this.B", new S(), "assign");
      this.A = cc11001100_hook("this.A", this.l = cc11001100_hook("this.l", null, "assign"), "assign");
    }
    ca() {
      return this.F;
    }
  }
  ;
  var al = cc11001100_hook("al", a => {
    switch (a.Qb) {
      case 0:
      case 1:
        var b = cc11001100_hook("b", a.G, "var-init");
        null == b ? a = cc11001100_hook("a", null, "assign") : (a = cc11001100_hook("a", nb(b, eh, 1), "assign"), null == a ? a = cc11001100_hook("a", null, "assign") : (b = cc11001100_hook("b", C(b, 2), "assign"), a = cc11001100_hook("a", null == b ? null : new fh(0, {
          Ub: cc11001100_hook("Ub", [a], "object-key-init"),
          wc: cc11001100_hook("wc", b, "object-key-init")
        }), "assign")));
        return null != a ? new yk({
          value: cc11001100_hook("value", a, "object-key-init")
        }) : new yk(null);
      case 2:
        return new yk(null);
      default:
        return new yk(null);
    }
  }, "var-init");
  function bl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return al(a.ra).map(b => ih(b));
  }
  function cl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l = cc11001100_hook("a.l", a.l || bl(a), "assign");
    return a.l;
  }
  const dl = cc11001100_hook("dl", class {
    constructor(a, b, c) {
      this.ra = cc11001100_hook("this.ra", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.Ma = cc11001100_hook("this.Ma", c, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
    }
    fill(a, b) {
      var c = cc11001100_hook("c", this.ra, "var-init");
      if (a = cc11001100_hook("a", c.L.l(a, b, this.j, c.m), "assign")) {
        b = cc11001100_hook("b", a.Va, "assign");
        if (this.ra.v) throw Error("AMA:AP:AP");
        Ah(b, this.j, this.ra.j.j);
        c = cc11001100_hook("c", this.ra, "assign");
        c.v = cc11001100_hook("c.v", !0, "assign");
        wh(oh) && (c.l && yh(c.l), c.l = cc11001100_hook("c.l", null, "assign"));
        null != b && c.H.push(b);
      }
      return a;
    }
  }, "var-init");
  function el(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      default:
        return null;
    }
  }
  ;
  function fl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Mk(() => {
      if (wh(oh)) {
        var c = cc11001100_hook("c", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) {
          var f = cc11001100_hook("f", a[e], "var-init"),
            g = cc11001100_hook("g", Xk(f), "var-init");
          if (g) {
            var h = cc11001100_hook("h", f, "var-init");
            if (!h.l && !h.v) {
              var l = cc11001100_hook("l", h, "var-init");
              var k = cc11001100_hook("k", h, "var-init"),
                m = cc11001100_hook("m", null, "var-init");
              try {
                var n = cc11001100_hook("n", Xk(k), "var-init");
                if (n) {
                  m = cc11001100_hook("m", Yk(k), "assign");
                  Ah(m, n, k.j.j);
                  var q = cc11001100_hook("q", m, "var-init");
                } else q = cc11001100_hook("q", null, "assign");
              } catch (y) {
                throw yh(m), y;
              }
              l.l = cc11001100_hook("l.l", q, "assign");
            }
            (h = cc11001100_hook("h", h.l, "assign")) && d.push({
              tc: cc11001100_hook("tc", f, "object-key-init"),
              fb: cc11001100_hook("fb", g, "object-key-init"),
              na: cc11001100_hook("na", h, "object-key-init")
            });
          }
        }
        if (0 < d.length) for (q = cc11001100_hook("q", U(b), "assign"), n = cc11001100_hook("n", Ce(b), "assign"), e = cc11001100_hook("e", 0, "assign"); e < d.length; e++) {
          const {
            tc: y,
            fb: F,
            na: H
          } = cc11001100_hook("", d[e], "var-init");
          f = cc11001100_hook("f", gl(H, n, q), "assign");
          c.push(new dl(y, F, f));
        }
        q = cc11001100_hook("q", c, "assign");
      } else {
        q = cc11001100_hook("q", [], "assign");
        n = cc11001100_hook("n", [], "assign");
        try {
          const y = cc11001100_hook("y", [], "var-init");
          for (let F = cc11001100_hook("F", 0, "var-init"); F < a.length; F++) {
            var r = cc11001100_hook("r", a[F], "var-init"),
              t = cc11001100_hook("t", Xk(r), "var-init");
            t && y.push({
              lb: cc11001100_hook("lb", r, "object-key-init"),
              fb: cc11001100_hook("fb", t, "object-key-init")
            });
          }
          for (t = cc11001100_hook("t", 0, "assign"); t < y.length; t++) {
            r = cc11001100_hook("r", n, "assign");
            g = cc11001100_hook("g", r.push, "assign");
            {
              l = cc11001100_hook("l", y[t], "assign");
              k = cc11001100_hook("k", l.fb, "assign");
              m = cc11001100_hook("m", l.lb, "assign");
              const F = cc11001100_hook("F", Yk(m), "var-init");
              try {
                Ah(F, k, m.j.j), h = cc11001100_hook("h", F, "assign");
              } catch (H) {
                throw yh(F), H;
              }
            }
            g.call(r, h);
          }
          c = cc11001100_hook("c", U(b), "assign");
          d = cc11001100_hook("d", Ce(b), "assign");
          for (g = cc11001100_hook("g", 0, "assign"); g < n.length; g++) e = cc11001100_hook("e", gl(n[g], d, c), "assign"), f = cc11001100_hook("f", y[g], "assign"), q.push(new dl(f.lb, f.fb, e));
        } finally {
          for (c = cc11001100_hook("c", 0, "assign"); c < n.length; c++) yh(n[c]);
        }
      }
      return q;
    }, b);
  }
  function gl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", a.getBoundingClientRect(), "assign");
    return new sj(a.left + b, a.top + c, a.right - a.left);
  }
  ;
  function hl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {
      top: cc11001100_hook("top", b.j - 25, "object-key-init"),
      right: cc11001100_hook("right", b.l + b.m, "object-key-init"),
      bottom: cc11001100_hook("bottom", b.j + 25, "object-key-init"),
      left: cc11001100_hook("left", b.l, "object-key-init")
    }, "var-init");
    return !sa(a, d => te(d, c));
  }
  ;
  function il(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return fl(b, a);
    };
  }
  function jl(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Ij(Ej(a)), "var-init");
    return c => hl(b, c.Ma);
  }
  function kl(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.length) return Kb;
    const b = cc11001100_hook("b", new xk(a), "var-init");
    return c => b.contains(c.Qb);
  }
  function ll(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) return Lb;
    const c = cc11001100_hook("c", T(b).scrollHeight - a, "var-init");
    return function (d) {
      return d.Ma.j <= c;
    };
  }
  const ml = cc11001100_hook("ml", (a, b) => b.Ma.j >= a, "var-init"),
    nl = cc11001100_hook("nl", (a, b, c) => {
      c = cc11001100_hook("c", c.Ma.m, "assign");
      return a <= c && c <= b;
    }, "var-init");
  var ol = cc11001100_hook("ol", class {
    Ga(a) {
      return jl(a);
    }
    Ha() {
      return 9;
    }
  }, "var-init");
  var pl = cc11001100_hook("pl", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Ga(a) {
      return ll(this.j, a);
    }
    Ha() {
      return 13;
    }
  }, "var-init");
  var ql = cc11001100_hook("ql", class {
    Ga(a) {
      const b = cc11001100_hook("b", T(a).clientHeight, "var-init");
      return b ? ja(ml, b + U(a)) : Kb;
    }
    Ha() {
      return 12;
    }
  }, "var-init");
  var rl = cc11001100_hook("rl", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Ga() {
      return kl(this.j);
    }
    Ha() {
      return 1;
    }
  }, "var-init");
  var sl = cc11001100_hook("sl", class {
    Ga() {
      return Mb(Wk);
    }
    Ha() {
      return 7;
    }
  }, "var-init");
  var tl = cc11001100_hook("tl", class {
    constructor(a, b) {
      this.minWidth = cc11001100_hook("this.minWidth", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
    Ga() {
      return ja(nl, this.minWidth, this.j);
    }
    Ha() {
      return 10;
    }
  }, "var-init");
  var ul = cc11001100_hook("ul", class {
    constructor(a) {
      this.v = cc11001100_hook("this.v", a.l.slice(0), "assign");
      this.l = cc11001100_hook("this.l", a.j.slice(0), "assign");
      this.m = cc11001100_hook("this.m", a.m, "assign");
      this.A = cc11001100_hook("this.A", a.A, "assign");
      this.j = cc11001100_hook("this.j", a.v, "assign");
    }
  }, "var-init");
  function vl(a, b = 0, c = Infinity) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.push(new tl(b, c));
    return a;
  }
  function wl(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.push(new pl(b));
    return a;
  }
  var xl = cc11001100_hook("xl", class {
    constructor() {
      this.m = cc11001100_hook("this.m", 0, "assign");
      this.A = cc11001100_hook("this.A", !1, "assign");
      this.l = cc11001100_hook("this.l", [].slice(0), "assign");
      this.j = cc11001100_hook("this.j", [].slice(0), "assign");
    }
    build() {
      return new ul(this);
    }
  }, "var-init");
  function yl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    oe(a.j, b) || a.j.set(b, []);
    a.j.get(b).push(c);
  }
  class zl {
    constructor() {
      this.j = cc11001100_hook("this.j", new S(), "assign");
    }
  }
  ;
  function Al(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", b.ra, "var-init");
    if (!oe(a.j, d)) {
      var e = cc11001100_hook("e", a.j, "var-init"),
        f = cc11001100_hook("f", e.set, "var-init");
      cl(b);
      f.call(e, d, new Bl());
    }
    c(a.j.get(d));
  }
  function Cl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Al(a, b, c => {
      c.j = cc11001100_hook("c.j", !0, "assign");
    });
  }
  function Dl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Al(a, b, c => {
      c.l = cc11001100_hook("c.l", !0, "assign");
    });
  }
  var El = cc11001100_hook("El", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new S(), "assign");
    }
  }, "var-init");
  class Bl {
    constructor() {
      this.l = cc11001100_hook("this.l", this.j = cc11001100_hook("this.j", !1, "assign"), "assign");
    }
  }
  ;
  class Fl {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", -1, "assign");
    }
  }
  ;
  function Gl(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 0, "var-init");
    for (; a;) (!b || a.previousElementSibling || a.nextElementSibling) && b++, a = cc11001100_hook("a", a.parentElement, "assign");
    return b;
  }
  ;
  function Hl(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", null.dd.filter(c => qe(c.xb).every(d => c.xb.get(d) === a.get(d))), "var-init");
    return 0 === b.length ? (null.Bc.push(19), null) : b.reduce((c, d) => c.xb.zb() > d.xb.zb() ? c : d, b[0]);
  }
  function Il(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", cl(a), "assign");
    if (null == a.j) return null.Bc.push(18), null;
    a = cc11001100_hook("a", a.j.value, "assign");
    if (oe(null.Kb, a)) return null.Kb.get(a);
    var b = cc11001100_hook("b", gh(a), "var-init");
    b = cc11001100_hook("b", Hl(b), "assign");
    null.Kb.set(a, b);
    return b;
  }
  ;
  function Jl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.j.length ? a : a.sort((b, c) => (Il(b)?.vc ?? Number.MAX_VALUE) - (Il(c)?.vc ?? Number.MAX_VALUE));
  }
  function Kl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Math, "var-init");
    const d = cc11001100_hook("d", b.j, "var-init"),
      e = cc11001100_hook("e", b.ra.j.j, "var-init");
    c = cc11001100_hook("c", b.Ma.j + 200 * c.min.call(c, 20, 0 == e || 3 == e ? Gl(d.parentElement) : Gl(d)), "assign");
    a = cc11001100_hook("a", a.j, "assign");
    0 > a.j && (a.j = cc11001100_hook("a.j", T(a.l).scrollHeight || 0, "assign"));
    b = cc11001100_hook("b", a.j - b.Ma.j, "assign");
    return c + (1E3 < b ? 0 : 2 * (1E3 - b));
  }
  function Ll(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 == b.j.length ? b : b.sort((c, d) => Kl(a, c) - Kl(a, d));
  }
  function Ml(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.sort((c, d) => {
      const e = cc11001100_hook("e", c.ra.C, "var-init"),
        f = cc11001100_hook("f", d.ra.C, "var-init");
      var g;
      null == e || null == f ? g = cc11001100_hook("g", null == e && null == f ? Kl(a, c) - Kl(a, d) : null == e ? 1 : -1, "assign") : g = cc11001100_hook("g", e - f, "assign");
      return g;
    });
  }
  class Nl {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new Fl(a), "assign");
    }
  }
  ;
  function Ol(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.m, "var-init");
    for (var d of b.v) c = cc11001100_hook("c", ah(c, d.Ga(a.j), Pl(d.Ha())), "assign");
    d = cc11001100_hook("d", c = cc11001100_hook("c", c.apply(il(a.j)), "assign"), "assign");
    for (const e of b.l) d = cc11001100_hook("d", ah(d, e.Ga(a.j), Ql(e.Ha())), "assign");
    switch (b.m) {
      case 1:
        d = cc11001100_hook("d", Ll(a.l, d), "assign");
        break;
      case 2:
        d = cc11001100_hook("d", Ml(a.l, d), "assign");
        break;
      case 3:
        const e = cc11001100_hook("e", R(El), "var-init");
        d = cc11001100_hook("d", Jl(d), "assign");
        c.forEach(f => {
          Cl(e, f);
          null?.cd(f);
        });
        d.forEach(f => Dl(e, f));
    }
    b.A && (d = cc11001100_hook("d", ch(d, nc(a.j.location.href + a.j.localStorage.google_experiment_mod)), "assign"));
    1 === b.j?.length && yl(a.v, b.j[0], {
      Qc: cc11001100_hook("Qc", c.j.length, "object-key-init"),
      bd: cc11001100_hook("bd", d.j.length, "object-key-init")
    });
    return d.j.slice(0);
  }
  class Rl {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", new bh(a), "assign");
      this.l = cc11001100_hook("this.l", new Nl(b), "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.v = cc11001100_hook("this.v", new zl(), "assign");
    }
  }
  const Pl = cc11001100_hook("Pl", a => b => Zk(b, a), "var-init"),
    Ql = cc11001100_hook("Ql", a => b => Zk(b.ra, a), "var-init");
  var Sl = cc11001100_hook("Sl", (a, b, c, d = null) => {
      const e = cc11001100_hook("e", g => {
        let h;
        try {
          h = cc11001100_hook("h", JSON.parse(g.data), "assign");
        } catch (l) {
          return;
        }
        !h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g);
      }, "var-init");
      G(a, "message", e);
      let f = cc11001100_hook("f", !1, "var-init");
      return () => {
        let g = cc11001100_hook("g", !1, "var-init");
        f || (f = cc11001100_hook("f", !0, "assign"), g = cc11001100_hook("g", I(a, "message", e), "assign"));
        return g;
      };
    }, "var-init"),
    Tl = cc11001100_hook("Tl", (a, b, c, d) => {
      c.googMsgType = cc11001100_hook("c.googMsgType", b, "assign");
      a.postMessage(JSON.stringify(c), d);
    }, "var-init"),
    Ul = cc11001100_hook("Ul", (a, b, c, d, e) => {
      if (!(0 >= e) && (Tl(a, b, c, d), a = cc11001100_hook("a", a.frames, "assign"))) for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; ++f) 1 < e && Ul(a[f], b, c, d, --e);
    }, "var-init");
  function Vl(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return Sl(a, "fullscreen", d.O(952, (e, f) => {
      if (f.source === b) {
        if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
        delete e.googMsgType;
        c(e);
      }
    }));
  }
  ;
  class Wl {
    constructor() {
      this.promise = cc11001100_hook("this.promise", new Promise(a => {
        this.resolve = cc11001100_hook("this.resolve", a, "assign");
      }), "assign");
    }
  }
  ;
  async function Xl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.v.promise;
  }
  async function Yl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.l.promise;
  }
  async function Zl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.m.promise;
  }
  function $l(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.type = cc11001100_hook("b.type", "err_st", "assign");
    b.slot = cc11001100_hook("b.slot", a.slotType, "assign");
    Ed(a.B, "fullscreen_tag", b, !1, .25);
  }
  class am extends ge {
    constructor(a, b, c, d) {
      super();
      this.slotType = cc11001100_hook("this.slotType", 1, "assign");
      this.pubWin = cc11001100_hook("this.pubWin", a, "assign");
      this.Ib = cc11001100_hook("this.Ib", b, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
      this.B = cc11001100_hook("this.B", d, "assign");
      this.j = cc11001100_hook("this.j", 1, "assign");
      this.v = cc11001100_hook("this.v", new Wl(), "assign");
      this.l = cc11001100_hook("this.l", new Wl(), "assign");
      this.m = cc11001100_hook("this.m", new Wl(), "assign");
    }
    Ia() {
      const a = cc11001100_hook("a", Vl(this.pubWin, this.Ib, b => {
        if ("adError" === b.eventType) this.m.resolve(), this.j = cc11001100_hook("this.j", 0, "assign");else if ("adReady" === b.eventType && 1 === this.j) b.slotType !== this.slotType && ($l(this, {
          cur_st: cc11001100_hook("cur_st", this.j, "object-key-init"),
          evt: cc11001100_hook("evt", b.eventType, "object-key-init"),
          adp_tp: cc11001100_hook("adp_tp", b.slotType, "object-key-init")
        }), this.j = cc11001100_hook("this.j", 0, "assign")), this.v.resolve(), this.j = cc11001100_hook("this.j", 2, "assign");else if ("adClosed" === b.eventType && 2 === this.j) this.l.resolve(b.result), this.j = cc11001100_hook("this.j", 3, "assign");else if ("adClosed" !== b.eventType || 3 !== this.j) $l(this, {
          cur_st: cc11001100_hook("cur_st", this.j, "object-key-init"),
          evt: cc11001100_hook("evt", b.eventType, "object-key-init")
        }), this.j = cc11001100_hook("this.j", 0, "assign");
      }, this.A), "var-init");
      Q(this, a);
    }
  }
  function bm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a = cc11001100_hook("a", new am(a, b, c, d), "assign");
    a.Ia();
    return a;
  }
  ;
  var dm = cc11001100_hook("dm", class extends Fb {
      constructor(a) {
        super(a, -1, cm);
      }
    }, "var-init"),
    cm = cc11001100_hook("cm", [19], "var-init");
  function em(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", ue(a)?.tagSpecificState[1], "assign");
    return null == a ? null : a.debugCard?.getAdType() === b ? a.debugCard : null;
  }
  function fm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    (a = cc11001100_hook("a", em(a, 4), "assign")) && a.displayAdLoadedContent(b);
  }
  ;
  let gm = cc11001100_hook("gm", void 0, "var-init");
  function hm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b) {
      var c = cc11001100_hook("c", b.adClient, "var-init");
      if ("string" === typeof c && c) {
        a.m = cc11001100_hook("a.m", c, "assign");
        a.l = cc11001100_hook("a.l", !!b.adTest, "assign");
        c = cc11001100_hook("c", b.pubVars, "assign");
        ca(c) && (a.B = cc11001100_hook("a.B", c, "assign"));
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
          a.j = cc11001100_hook("a.j", {}, "assign");
          for (d of b.fillMessage) a.j[d.key] = cc11001100_hook("a.j[d.key]", d.value, "assign");
        }
        a.A = cc11001100_hook("a.A", b.adWidth, "assign");
        a.v = cc11001100_hook("a.v", b.adHeight, "assign");
        sd(a.A) && sd(a.v) || Wi("rctnosize", b);
        var d = cc11001100_hook("d", !0, "var-init");
      } else d = cc11001100_hook("d", !1, "assign");
    } else d = cc11001100_hook("d", !1, "assign");
    return d && a.F(b);
  }
  class im {
    constructor() {
      this.j = cc11001100_hook("this.j", this.B = cc11001100_hook("this.B", this.l = cc11001100_hook("this.l", this.m = cc11001100_hook("this.m", null, "assign"), "assign"), "assign"), "assign");
      this.v = cc11001100_hook("this.v", this.A = cc11001100_hook("this.A", 0, "assign"), "assign");
    }
    F() {
      return !0;
    }
  }
  ;
  class jm extends im {
    F(a) {
      a.hasFillMessage || (this.j = cc11001100_hook("this.j", null, "assign"));
      return !0;
    }
  }
  ;
  function km(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (const e of b) {
      b = cc11001100_hook("b", a, "assign");
      var c = cc11001100_hook("c", e, "var-init"),
        d = cc11001100_hook("d", lm(b.document, c.x, c.y), "var-init");
      if (d) {
        if (!(c = cc11001100_hook("c", mm(d), "assign"))) a: {
          c = cc11001100_hook("c", d, "assign");
          b = cc11001100_hook("b", b.document, "assign");
          for (c = cc11001100_hook("c", c.offsetParent, "assign"); c && c !== b.body; c = cc11001100_hook("c", c.offsetParent, "assign")) if (d = cc11001100_hook("d", mm(c), "assign")) {
            c = cc11001100_hook("c", d, "assign");
            break a;
          }
          c = cc11001100_hook("c", null, "assign");
        }
        b = cc11001100_hook("b", c || null, "assign");
      } else b = cc11001100_hook("b", null, "assign");
      if (b) return b;
    }
    return null;
  }
  function lm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = cc11001100_hook("a._goog_efp_called_", a.elementFromPoint(b, c), "assign"));
    return a.elementFromPoint(b, c);
  }
  function nm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); 3 > f; f++) for (let g = cc11001100_hook("g", 0, "var-init"); 3 > g; g++) {
      var e = cc11001100_hook("e", d, "var-init");
      e.push.call(e, {
        x: cc11001100_hook("x", g / 2 * a, "object-key-init"),
        y: cc11001100_hook("y", b + f / 2 * (c - b), "object-key-init")
      });
    }
    return d;
  }
  function mm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "fixed" !== id(a, "position") ? null : "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= od(a).width && 1 >= od(a).height ? null : a;
  }
  var om = cc11001100_hook("om", a => {
    const b = cc11001100_hook("b", 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height, "var-init");
    return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b;
  }, "var-init");
  const pm = cc11001100_hook("pm", 90 * 1.38, "var-init");
  function qm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a && yi(a.location, "google_anchor_debug"), "var-init");
    if (2 === b || c) {
      var d = cc11001100_hook("d", nm(a.innerWidth, 0, Math.min(Math.round(a.innerWidth / 320 * 50), pm) + 15), "var-init");
      return null != km(a, d) ? (Wi("flgr::top", {
        c: cc11001100_hook("c", "fixed", "object-key-init"),
        d: cc11001100_hook("d", String(c), "object-key-init"),
        p: cc11001100_hook("p", b, "object-key-init"),
        url: cc11001100_hook("url", a?.location?.href ?? "", "object-key-init")
      }), "bottom") : "top";
    }
    d = cc11001100_hook("d", a.innerWidth, "assign");
    const e = cc11001100_hook("e", a.innerHeight, "var-init"),
      f = cc11001100_hook("f", Math.min(Math.round(a.innerWidth / 320 * 50), pm) + 15, "var-init"),
      g = cc11001100_hook("g", nm(d, e - f, e), "var-init");
    25 < f && g.push({
      x: cc11001100_hook("x", d - 25, "object-key-init"),
      y: cc11001100_hook("y", e - 25, "object-key-init")
    });
    return null != km(a, g) ? (Wi("flgr::bottom", {
      c: cc11001100_hook("c", "fixed", "object-key-init"),
      d: cc11001100_hook("d", String(c), "object-key-init"),
      p: cc11001100_hook("p", b, "object-key-init"),
      url: cc11001100_hook("url", a?.location?.href ?? "", "object-key-init")
    }), "top") : "bottom";
  }
  ;
  function rm(a = []) {
    const b = cc11001100_hook("b", Date.now(), "var-init");
    return qa(a, c => 36E5 > b - c);
  }
  function sm(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.getItem("__lsv__"), "var-init");
      if (!b) return [];
      let c;
      try {
        c = cc11001100_hook("c", JSON.parse(b), "assign");
      } catch (d) {}
      if (!Array.isArray(c) || sa(c, d => !Number.isInteger(d))) return a.removeItem("__lsv__"), [];
      c = cc11001100_hook("c", rm(c), "assign");
      c.length || a?.removeItem("__lsv__");
      return c;
    } catch (b) {
      return null;
    }
  }
  ;
  const tm = cc11001100_hook("tm", {
      SCRIPT: cc11001100_hook("SCRIPT", 1, "object-key-init"),
      STYLE: cc11001100_hook("STYLE", 1, "object-key-init"),
      HEAD: cc11001100_hook("HEAD", 1, "object-key-init"),
      IFRAME: cc11001100_hook("IFRAME", 1, "object-key-init"),
      OBJECT: cc11001100_hook("OBJECT", 1, "object-key-init"),
      NOSCRIPT: cc11001100_hook("NOSCRIPT", 1, "object-key-init")
    }, "var-init"),
    um = cc11001100_hook("um", {
      IMG: cc11001100_hook("IMG", " ", "object-key-init"),
      BR: cc11001100_hook("BR", "\n", "object-key-init")
    }, "var-init");
  var vm = cc11001100_hook("vm", (a, b, c, d) => {
      if (!(a.nodeName in tm)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);else if (a.nodeName in um) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(um[a.nodeName]);else for (a = cc11001100_hook("a", a.firstChild, "assign"); a;) vm(a, b, c, d), a = cc11001100_hook("a", a.nextSibling, "assign");
    }, "var-init"),
    wm = cc11001100_hook("wm", / \xAD /g, "var-init"),
    xm = cc11001100_hook("xm", /\xAD/g, "var-init"),
    ym = cc11001100_hook("ym", /\u200B/g, "var-init"),
    zm = cc11001100_hook("zm", / +/g, "var-init"),
    Am = cc11001100_hook("Am", /^\s*/, "var-init");
  function Bm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null !== Ac(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c), !0);
  }
  function Cm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ac(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position, !0);
  }
  function Dm(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (const c of a.document.querySelectorAll("*")) {
      const d = cc11001100_hook("d", a.getComputedStyle(c, null), "var-init");
      "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c);
    }
    return b;
  }
  function Em(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Math.round(10 * Math.round(a / 10));
  }
  function Fm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return `${a.position}-${Em(a.P)}x${Em(a.T)}-${Em(a.scrollY + a.Ra)}Y`;
  }
  function Gm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return `f-${Fm({
      position: cc11001100_hook("position", a.position, "object-key-init"),
      Ra: cc11001100_hook("Ra", a.Ra, "object-key-init"),
      scrollY: cc11001100_hook("scrollY", 0, "object-key-init"),
      P: cc11001100_hook("P", a.P, "object-key-init"),
      T: cc11001100_hook("T", a.T, "object-key-init")
    })}`;
  }
  function Hm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", Math.min(a ?? Infinity, b ?? Infinity), "assign");
    return Infinity !== a ? a : 0;
  }
  function Im(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", ue(c.Y).sideRailProcessedFixedElements, "var-init");
    if (!d.has(a)) {
      var e = cc11001100_hook("e", a.getBoundingClientRect(), "var-init");
      if (e) {
        var f = cc11001100_hook("f", Math.max(e.top - 10, 0), "var-init"),
          g = cc11001100_hook("g", Math.min(e.bottom + 10, c.T), "var-init"),
          h = cc11001100_hook("h", Math.max(e.left - 10, 0), "var-init");
        e = cc11001100_hook("e", Math.min(e.right + 10, c.P), "assign");
        for (var l = cc11001100_hook("l", .3 * c.P, "var-init"); f <= g; f += cc11001100_hook("f", 10, "assign")) {
          if (0 < e && h < l) {
            var k = cc11001100_hook("k", Gm({
              position: cc11001100_hook("position", "left", "object-key-init"),
              Ra: cc11001100_hook("Ra", f, "object-key-init"),
              P: cc11001100_hook("P", c.P, "object-key-init"),
              T: cc11001100_hook("T", c.T, "object-key-init")
            }), "var-init");
            b.set(k, Hm(b.get(k), h));
          }
          if (h < c.P && e > c.P - l) {
            k = cc11001100_hook("k", Gm({
              position: cc11001100_hook("position", "right", "object-key-init"),
              Ra: cc11001100_hook("Ra", f, "object-key-init"),
              P: cc11001100_hook("P", c.P, "object-key-init"),
              T: cc11001100_hook("T", c.T, "object-key-init")
            }), "assign");
            const m = cc11001100_hook("m", c.P - e, "var-init");
            b.set(k, Hm(b.get(k), m));
          }
        }
        d.add(a);
      }
    }
  }
  ;
  var Jm = cc11001100_hook("Jm", (a, b, c) => {
    a.dataset.adsbygoogleStatus = cc11001100_hook("a.dataset.adsbygoogleStatus", "reserved", "assign");
    a.className += cc11001100_hook("a.className", " adsbygoogle-noablate", "assign");
    c.adsbygoogle || (c.adsbygoogle = cc11001100_hook("c.adsbygoogle", [], "assign"), Jc(c.document, ed`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
    c.adsbygoogle.push({
      element: cc11001100_hook("element", a, "object-key-init"),
      params: cc11001100_hook("params", b, "object-key-init")
    });
  }, "var-init");
  const Km = cc11001100_hook("Km", [1, 2], "var-init");
  function Lm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", yc(document, "INS"), "var-init");
    d.className = cc11001100_hook("d.className", "adsbygoogle", "assign");
    b.document.body.appendChild(d);
    const e = cc11001100_hook("e", c.B || {}, "var-init");
    e.google_ad_client = cc11001100_hook("e.google_ad_client", c.m, "assign");
    e.google_ad_width = cc11001100_hook("e.google_ad_width", c.A, "assign");
    e.google_ad_height = cc11001100_hook("e.google_ad_height", c.v, "assign");
    e.google_reactive_ad_format = cc11001100_hook("e.google_reactive_ad_format", a.j, "assign");
    c.j && (e.google_reactive_fill_message = cc11001100_hook("e.google_reactive_fill_message", c.j, "assign"));
    c.l && (e.google_adtest = cc11001100_hook("e.google_adtest", "on", "assign"));
    Jm(d, e, b);
  }
  class Mm {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    verifyAndProcessConfig(a, b) {
      const c = cc11001100_hook("c", ue(a), "var-init");
      if (c.wasReactiveAdConfigReceived[this.j]) return !1;
      const d = cc11001100_hook("d", new jm(), "var-init");
      if (!hm(d, b)) return !1;
      Km.forEach(e => {
        c.wasReactiveAdConfigReceived[e] = cc11001100_hook("c.wasReactiveAdConfigReceived[e]", !0, "assign");
      });
      Lm(this, a, d);
      return !0;
    }
  }
  ;
  class Nm {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.j = cc11001100_hook("this.j", !1, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.l = cc11001100_hook("this.l", this.v.O(264, c => {
        this.j && (Om || (c = cc11001100_hook("c", Date.now(), "assign")), this.m(c), Om ? Pm.call(u, this.l) : u.setTimeout(this.l, 17));
      }), "assign");
    }
    start() {
      this.j || (this.j = cc11001100_hook("this.j", !0, "assign"), Om ? Pm.call(u, this.l) : this.l(0));
    }
  }
  var Pm = cc11001100_hook("Pm", u.requestAnimationFrame || u.webkitRequestAnimationFrame, "var-init"),
    Om = cc11001100_hook("Om", !!Pm && !/'iPhone'/.test(u.navigator.userAgent), "var-init");
  function Qm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a * a * a;
  }
  function Rm(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", 1 - a, "assign");
    return 1 - a * a * a;
  }
  function Sm(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.L = cc11001100_hook("a.L", !1, "assign");
    a.A.start();
  }
  class Tm {
    constructor(a, b, c, d) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.B = cc11001100_hook("this.B", b, "assign");
      this.W = cc11001100_hook("this.W", c, "assign");
      this.progress = cc11001100_hook("this.progress", 0, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
      this.L = cc11001100_hook("this.L", !1, "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.A = cc11001100_hook("this.A", new Nm(x(this.H, this), d), "assign");
    }
    H(a) {
      if (this.L) this.A.j = cc11001100_hook("this.A.j", !1, "assign");else {
        null === this.l && (this.l = cc11001100_hook("this.l", a, "assign"));
        this.progress = cc11001100_hook("this.progress", (a - this.l) / this.W, "assign");
        1 <= this.progress && (this.progress = cc11001100_hook("this.progress", 1, "assign"));
        a = cc11001100_hook("a", this.v ? this.v(this.progress) : this.progress, "assign");
        this.m = cc11001100_hook("this.m", [], "assign");
        for (let b = cc11001100_hook("b", 0, "var-init"); b < this.j.length; b++) this.m.push((this.B[b] - this.j[b]) * a + this.j[b]);
        this.G();
        1 == this.progress && (this.A.j = cc11001100_hook("this.A.j", !1, "assign"), this.C());
      }
    }
    C() {}
    G() {}
    reset(a, b, c) {
      this.l = cc11001100_hook("this.l", null, "assign");
      this.j = cc11001100_hook("this.j", a, "assign");
      this.B = cc11001100_hook("this.B", b, "assign");
      this.W = cc11001100_hook("this.W", c, "assign");
      this.progress = cc11001100_hook("this.progress", 0, "assign");
    }
  }
  ;
  class Um extends Tm {
    constructor(a, b, c, d, e, f, g, h) {
      super([b], [c], d, f);
      this.I = cc11001100_hook("this.I", a, "assign");
      this.J = cc11001100_hook("this.J", e, "assign");
      this.F = cc11001100_hook("this.F", g ? g : null, "assign");
      this.v = cc11001100_hook("this.v", h || null, "assign");
    }
    G() {
      const a = cc11001100_hook("a", {}, "var-init");
      a[this.J] = cc11001100_hook("a[this.J]", this.m[0] + "px", "assign");
      P(this.I, a);
    }
    C() {
      this.F && this.F();
    }
  }
  ;
  function Vm(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j && I(a.j, a.l, a.m, Qb);
  }
  class Wm extends ge {
    constructor(a, b, c) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      G(this.j, this.l, this.m, Qb);
      Q(this, () => void Vm(this));
    }
  }
  class Xm {
    constructor() {
      this.reset();
    }
    add(a) {
      const b = cc11001100_hook("b", Date.now(), "var-init");
      this.j.push({
        time: cc11001100_hook("time", b, "object-key-init"),
        coords: cc11001100_hook("coords", a, "object-key-init")
      });
      for (a = cc11001100_hook("a", this.l, "assign"); a < this.j.length; ++a) if (100 <= b - this.j[a].time) delete this.j[a];else break;
      this.l = cc11001100_hook("this.l", a, "assign");
      a >= this.j.length && this.reset();
    }
    reset() {
      this.j = cc11001100_hook("this.j", [], "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
    }
  }
  function Ym(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.B && Zm(a);
    a.B = cc11001100_hook("a.B", !0, "assign");
    a.m = cc11001100_hook("a.m", a.J(), "assign");
    a.l = cc11001100_hook("a.l", $m(b), "assign");
    a.j = cc11001100_hook("a.j", a.l, "assign");
    a.A = cc11001100_hook("a.A", new Xm(), "assign");
    a.A.add(a.l);
    a.G = cc11001100_hook("a.G", new Wm(a.v, "mousemove", x(a.Z, a)), "assign");
    he(a, a.G);
    a.I = cc11001100_hook("a.I", new Wm(a.v, "touchmove", x(a.Z, a)), "assign");
    he(a, a.I);
    a.F = cc11001100_hook("a.F", new Wm(a.v, "mouseup", x(a.aa, a)), "assign");
    he(a, a.F);
    a.H = cc11001100_hook("a.H", new Wm(a.v, "touchend", x(a.aa, a)), "assign");
    he(a, a.H);
  }
  function $m(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.touches && a.touches[0] || a, "assign");
    return new J(a.clientX, a.clientY);
  }
  function Zm(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.B = cc11001100_hook("a.B", !1, "assign");
    a.C = cc11001100_hook("a.C", !1, "assign");
    a.m = cc11001100_hook("a.m", null, "assign");
    a.l = cc11001100_hook("a.l", null, "assign");
    a.j = cc11001100_hook("a.j", null, "assign");
    a.A = cc11001100_hook("a.A", null, "assign");
    a.G && Vm(a.G);
    a.I && Vm(a.I);
    a.F && Vm(a.F);
    a.H && Vm(a.H);
  }
  class an extends ge {
    constructor(a, b, c) {
      super();
      this.v = cc11001100_hook("this.v", a, "assign");
      this.target = cc11001100_hook("this.target", b, "assign");
      this.K = cc11001100_hook("this.K", c || b, "assign");
      this.C = cc11001100_hook("this.C", this.B = cc11001100_hook("this.B", this.M = cc11001100_hook("this.M", !1, "assign"), "assign"), "assign");
      this.A = cc11001100_hook("this.A", this.j = cc11001100_hook("this.j", this.l = cc11001100_hook("this.l", this.m = cc11001100_hook("this.m", this.H = cc11001100_hook("this.H", this.F = cc11001100_hook("this.F", this.I = cc11001100_hook("this.I", this.G = cc11001100_hook("this.G", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
      this.oa = cc11001100_hook("this.oa", new Wm(this.K, "mousedown", d => {
        0 == d.button && Ym(this, d);
      }), "assign");
      he(this, this.oa);
      this.ha = cc11001100_hook("this.ha", new Wm(this.K, "touchstart", d => Ym(this, d)), "assign");
      he(this, this.ha);
      this.ga = cc11001100_hook("this.ga", new Wm(this.K, "click", d => {
        this.M ? this.M = cc11001100_hook("this.M", !1, "assign") : d.stopPropagation();
      }), "assign");
      he(this, this.ga);
    }
    R() {
      if (this.m && this.l && this.j) {
        var a = cc11001100_hook("a", this.m, "var-init"),
          b = cc11001100_hook("b", jc(this.j, this.l), "var-init");
        var c = cc11001100_hook("c", new J(a.x + b.x, a.y + b.y), "var-init");
        a = cc11001100_hook("a", this.target, "assign");
        c instanceof J ? (b = cc11001100_hook("b", c.x, "assign"), c = cc11001100_hook("c", c.y, "assign")) : (b = cc11001100_hook("b", c, "assign"), c = cc11001100_hook("c", void 0, "assign"));
        a.style.left = cc11001100_hook("a.style.left", nd(b, !1), "assign");
        a.style.top = cc11001100_hook("a.style.top", nd(c, !1), "assign");
      }
    }
    U() {}
    J() {
      var a = cc11001100_hook("a", this.target, "var-init"),
        b;
      a: {
        if (Ub && (b = cc11001100_hook("b", a.parentElement, "assign"))) break a;
        b = cc11001100_hook("b", a.parentNode, "assign");
        b = cc11001100_hook("b", ca(b) && 1 == b.nodeType ? b : null, "assign");
      }
      var c = cc11001100_hook("c", b, "var-init");
      b = cc11001100_hook("b", ld(a), "assign");
      c = cc11001100_hook("c", ld(c), "assign");
      b = cc11001100_hook("b", new J(b.x - c.x, b.y - c.y), "assign");
      a = cc11001100_hook("a", rd(a, "margin"), "assign");
      return jc(b, new J(a.left, a.top));
    }
    Z(a) {
      if (this.B) if (a.preventDefault(), this.j = cc11001100_hook("this.j", $m(a), "assign"), this.A.add(this.j), this.C) this.R();else {
        var b = cc11001100_hook("b", this.l, "var-init"),
          c = cc11001100_hook("c", this.j, "var-init");
        a = cc11001100_hook("a", b.x - c.x, "assign");
        b = cc11001100_hook("b", b.y - c.y, "assign");
        10 <= Math.sqrt(a * a + b * b) && (this.R(), this.C = cc11001100_hook("this.C", !0, "assign"));
      }
    }
    aa(a) {
      this.C ? (a.preventDefault(), this.j = cc11001100_hook("this.j", $m(a), "assign"), this.U()) : this.M = cc11001100_hook("this.M", !0, "assign");
      Zm(this);
    }
  }
  ;
  function bn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", cn(a), "var-init");
    pa(a.j.maxZIndexListeners, c => c(b));
  }
  function cn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Nc(a.j.maxZIndexRestrictions), "assign");
    return a.length ? Math.min.apply(null, a) : null;
  }
  function dn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j.maxZIndexListeners.push(b);
    b(cn(a));
  }
  class en {
    constructor(a) {
      this.j = cc11001100_hook("this.j", ue(a).floatingAdsStacking, "assign");
    }
  }
  class fn {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
    }
  }
  ;
  function gn(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.ownerDocument, "var-init");
    const c = cc11001100_hook("c", b.createElementNS("http://www.w3.org/2000/svg", "line"), "var-init");
    c.setAttribute("x1", "22");
    c.setAttribute("y1", "18");
    c.setAttribute("x2", "28");
    c.setAttribute("y2", "12");
    a.appendChild(c);
    b = cc11001100_hook("b", b.createElementNS("http://www.w3.org/2000/svg", "line"), "assign");
    b.setAttribute("x1", "28");
    b.setAttribute("y1", "12");
    b.setAttribute("x2", "34");
    b.setAttribute("y2", "18");
    a.appendChild(b);
  }
  function hn(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.ownerDocument, "var-init");
    const c = cc11001100_hook("c", b.createElementNS("http://www.w3.org/2000/svg", "line"), "var-init");
    c.setAttribute("x1", "22");
    c.setAttribute("y1", "12");
    c.setAttribute("x2", "28");
    c.setAttribute("y2", "18");
    a.appendChild(c);
    b = cc11001100_hook("b", b.createElementNS("http://www.w3.org/2000/svg", "line"), "assign");
    b.setAttribute("x1", "28");
    b.setAttribute("y1", "18");
    b.setAttribute("x2", "34");
    b.setAttribute("y2", "12");
    a.appendChild(b);
  }
  function jn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a.A && a.m) {
      var c = cc11001100_hook("c", parseInt(a.m.style[a.j], 10), "var-init"),
        d = cc11001100_hook("d", -a.B.height - (b ? 30 : 0), "var-init"),
        e = cc11001100_hook("e", (c - d) / .1, "var-init");
      "bottom" == a.j && om(a.Y) && a.G.ya(405, () => kn(a, "21px", e, "ease-in"));
      b || ln(a, !0);
      c === d ? a.v = cc11001100_hook("a.v", !b, "assign") : (a.A = cc11001100_hook("a.A", !0, "assign"), c = cc11001100_hook("c", new Um(a.m, c, d, e, a.j, a.G, () => {
        a.A = cc11001100_hook("a.A", !1, "assign");
        a.v = cc11001100_hook("a.v", !b, "assign");
        b || ln(a, !0);
        b && a.aa();
        a.m.setAttribute("data-anchor-status", "dismissed");
      }, Qm), "assign"), a.ea(), Sm(c));
    }
  }
  function mn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ee(b);
    O(b, {
      "background-color": cc11001100_hook("background-color", "#FAFAFA", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init"),
      position: cc11001100_hook("position", "relative", "object-key-init"),
      "z-index": cc11001100_hook("z-index", 1, "object-key-init"),
      height: cc11001100_hook("height", "5px", "object-key-init"),
      "box-shadow": cc11001100_hook("box-shadow", "top" == a.j ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px", "object-key-init")
    });
    "top" == a.j && O(a.l ?? b, {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", a.B.height + "px", "object-key-init"),
      width: cc11001100_hook("width", "100%", "object-key-init")
    });
    const c = cc11001100_hook("c", Kc("SPAN", a.Y.document), "var-init");
    c.appendChild(nn(a));
    const d = cc11001100_hook("d", e => {
      e.target === c && (e.preventDefault && e.preventDefault(), e.stopImmediatePropagation && e.stopImmediatePropagation(), e.stopPropagation && e.stopPropagation());
    }, "var-init");
    G(c, "click", d);
    Q(a, () => I(c, "click", d));
    on(a, c);
    b.className = cc11001100_hook("b.className", "ee", "assign");
    b.appendChild(c);
  }
  function nn(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    let c, d;
    switch (a.j) {
      case "top":
        var e = cc11001100_hook("e", "dropShadowBottom", "var-init");
        b = cc11001100_hook("b", "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z", "assign");
        var f = cc11001100_hook("f", "0", "var-init");
        c = cc11001100_hook("c", "up", "assign");
        d = cc11001100_hook("d", gn, "assign");
        break;
      case "bottom":
        e = cc11001100_hook("e", "dropShadowTop", "assign"), b = cc11001100_hook("b", "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", "assign"), f = cc11001100_hook("f", "25", "assign"), c = cc11001100_hook("c", "down", "assign"), d = cc11001100_hook("d", hn, "assign");
    }
    const g = cc11001100_hook("g", a.Y.document, "var-init"),
      h = cc11001100_hook("h", g.createElementNS("http://www.w3.org/2000/svg", "svg"), "var-init");
    h.style.setProperty("margin", "0 0 0 0px", "important");
    h.style.setProperty("position", "absolute", "important");
    h.style.setProperty(a.j, "0", "important");
    h.style.setProperty("left", "0%", "important");
    h.style.setProperty("display", "block", "important");
    h.style.setProperty("width", "80px", "important");
    h.style.setProperty("height", "30px", "important");
    h.style.setProperty("transform", "none", "important");
    h.style.setProperty("pointer-events", "initial", "important");
    a = cc11001100_hook("a", g.createElementNS("http://www.w3.org/2000/svg", "defs"), "assign");
    const l = cc11001100_hook("l", g.createElementNS("http://www.w3.org/2000/svg", "filter"), "var-init");
    l.setAttribute("id", e);
    l.setAttribute("filterUnits", "userSpaceOnUse");
    l.setAttribute("color-interpolation-filters", "sRGB");
    var k = cc11001100_hook("k", g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer"), "var-init");
    k.setAttribute("in", "SourceAlpha");
    k.setAttribute("result", "TransferredAlpha");
    var m = cc11001100_hook("m", g.createElementNS("http://www.w3.org/2000/svg", "feFuncR"), "var-init");
    m.setAttribute("type", "discrete");
    m.setAttribute("tableValues", "0.5");
    k.appendChild(m);
    m = cc11001100_hook("m", g.createElementNS("http://www.w3.org/2000/svg", "feFuncG"), "assign");
    m.setAttribute("type", "discrete");
    m.setAttribute("tableValues", "0.5");
    k.appendChild(m);
    m = cc11001100_hook("m", g.createElementNS("http://www.w3.org/2000/svg", "feFuncB"), "assign");
    m.setAttribute("type", "discrete");
    m.setAttribute("tableValues", "0.5");
    k.appendChild(m);
    l.appendChild(k);
    k = cc11001100_hook("k", g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur"), "assign");
    k.setAttribute("in", "TransferredAlpha");
    k.setAttribute("stdDeviation", "2");
    l.appendChild(k);
    k = cc11001100_hook("k", g.createElementNS("http://www.w3.org/2000/svg", "feOffset"), "assign");
    k.setAttribute("dx", "0");
    k.setAttribute("dy", "0");
    k.setAttribute("result", "offsetblur");
    l.appendChild(k);
    k = cc11001100_hook("k", g.createElementNS("http://www.w3.org/2000/svg", "feMerge"), "assign");
    k.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
    m = cc11001100_hook("m", g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"), "assign");
    m.setAttribute("in", "SourceGraphic");
    k.appendChild(m);
    l.appendChild(k);
    a.appendChild(l);
    h.appendChild(a);
    a = cc11001100_hook("a", g.createElementNS("http://www.w3.org/2000/svg", "path"), "assign");
    a.setAttribute("d", b);
    a.setAttribute("stroke", "#FAFAFA");
    a.setAttribute("stroke-width", "1");
    a.setAttribute("fill", "#FAFAFA");
    a.style.setProperty("filter", `url(#${e})`);
    h.appendChild(a);
    e = cc11001100_hook("e", g.createElementNS("http://www.w3.org/2000/svg", "rect"), "assign");
    e.setAttribute("x", "0");
    e.setAttribute("y", f);
    e.setAttribute("width", "80");
    e.setAttribute("height", "5");
    e.style.setProperty("fill", "#FAFAFA");
    h.appendChild(e);
    f = cc11001100_hook("f", g.createElementNS("http://www.w3.org/2000/svg", "g"), "assign");
    f.setAttribute("class", c);
    f.setAttribute("stroke", "#616161");
    f.setAttribute("stroke-width", "2px");
    f.setAttribute("stroke-linecap", "square");
    d(f);
    h.appendChild(f);
    return h;
  }
  function on(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", b.getElementsByTagName("svg")[0], "var-init");
    O(b, {
      display: cc11001100_hook("display", "block", "object-key-init"),
      width: cc11001100_hook("width", "80px", "object-key-init"),
      height: cc11001100_hook("height", "45px", "object-key-init"),
      [a.j]: cc11001100_hook(a.j, "0", "object-key-init"),
      left: cc11001100_hook("left", "0%", "object-key-init"),
      marginLeft: cc11001100_hook("marginLeft", "0px", "object-key-init"),
      "pointer-events": cc11001100_hook("pointer-events", "none", "object-key-init")
    });
    Uc(c);
  }
  function pn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.A) {
      var b = cc11001100_hook("b", parseInt(a.m.style[a.j], 10), "var-init");
      if (b) {
        a.A = cc11001100_hook("a.A", !0, "assign");
        const c = cc11001100_hook("c", -b / .1, "var-init");
        "bottom" == a.j && om(a.Y) && a.G.ya(404, () => kn(a, "0px", c, "ease-out"));
        ln(a, !1);
        b = cc11001100_hook("b", new Um(a.m, b, 0, c, a.j, a.G, () => {
          a.A = cc11001100_hook("a.A", !1, "assign");
          a.v = cc11001100_hook("a.v", !1, "assign");
          qn(a);
          a.m.setAttribute("data-anchor-status", "displayed");
          a.m.setAttribute("data-anchor-shown", !0);
          ln(a, !1);
        }, Rm), "assign");
        a.X();
        Sm(b);
      } else a.v = cc11001100_hook("a.v", !1, "assign");
    }
  }
  function rn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.l ?? a.C;
  }
  function ln(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0], "var-init");
    for (var d; d = cc11001100_hook("d", c.firstChild, "assign");) c.removeChild(d);
    switch (a.j) {
      case "top":
        (b ? hn : gn)(c);
        break;
      case "bottom":
        (b ? gn : hn)(c);
    }
  }
  function sn(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Ed(a.Z, "flgr", {
      i: cc11001100_hook("i", b, "object-key-init"),
      dc: cc11001100_hook("dc", a.v ? "1" : "0", "object-key-init"),
      fdc: cc11001100_hook("fdc", c ? "1" : "0", "object-key-init"),
      ds: cc11001100_hook("ds", a.I ? "1" : "0", "object-key-init"),
      expId: cc11001100_hook("expId", a.ga, "object-key-init"),
      sc: cc11001100_hook("sc", a.R ? "1" : "0", "object-key-init"),
      off: cc11001100_hook("off", d, "object-key-init"),
      vw: cc11001100_hook("vw", T(a.Y).clientWidth, "object-key-init"),
      req: cc11001100_hook("req", a.K.src, "object-key-init"),
      tp: cc11001100_hook("tp", a.j, "object-key-init"),
      h: cc11001100_hook("h", a.B.height, "object-key-init"),
      w: cc11001100_hook("w", a.B.width, "object-key-init"),
      qemId: cc11001100_hook("qemId", a.fa, "object-key-init")
    }, !0, 1);
  }
  function kn(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    P(a.K, {
      transition: cc11001100_hook("transition", c / 1E3 + "s", "object-key-init"),
      "transition-timing-function": cc11001100_hook("transition-timing-function", d, "object-key-init"),
      "margin-top": cc11001100_hook("margin-top", b, "object-key-init")
    });
  }
  function qn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.U();
    a.U = cc11001100_hook("a.U", () => {}, "assign");
  }
  function tn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("bottom" !== a.j && "top" !== a.j) throw Error("unsupported reactive type");
    const c = cc11001100_hook("c", f => {
        f.preventDefault();
        a.A || (a.J = cc11001100_hook("a.J", !0, "assign"), a.v ? pn(a) : jn(a, a.I), sn(a, "c", !a.v, 0));
      }, "var-init"),
      d = cc11001100_hook("d", a.C, "var-init");
    G(d, "click", c);
    Q(a, () => I(d, "click", c));
    a.l && (G(a.l, "click", c), Q(a, () => a.l && I(a.l, "click", c)));
    P(b, {
      opacity: cc11001100_hook("opacity", 1, "object-key-init")
    });
    var e = cc11001100_hook("e", a.Y.document, "var-init");
    e && (a.m = cc11001100_hook("a.m", b, "assign"), a.ha && (a.M = cc11001100_hook("a.M", new ("top" == a.j ? un : vn)(a, e, a.B.height, b, a.C), "assign"), he(a, a.M)), e = cc11001100_hook("e", {
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      left: cc11001100_hook("left", "0px", "object-key-init")
    }, "assign"), e[a.j] = cc11001100_hook("e[a.j]", -a.B.height - 30 + "px", "assign"), P(b, e), O(b, {
      overflow: cc11001100_hook("overflow", "visible", "object-key-init"),
      background: cc11001100_hook("background", "#FAFAFA", "object-key-init")
    }), dn(a.oa, f => {
      const g = cc11001100_hook("g", null == a.V ? 2147483647 : a.V, "var-init");
      P(b, {
        zIndex: cc11001100_hook("zIndex", null == f ? g : Math.min(f, g), "object-key-init")
      });
    }), pn(a));
  }
  class wn extends ge {
    constructor(a, b, c, d, e, f, g, h, l, k, m) {
      super();
      this.F = cc11001100_hook("this.F", a, "assign");
      this.Y = cc11001100_hook("this.Y", b, "assign");
      this.K = cc11001100_hook("this.K", c, "assign");
      this.B = cc11001100_hook("this.B", d, "assign");
      this.aa = cc11001100_hook("this.aa", f || (() => {}), "assign");
      this.U = cc11001100_hook("this.U", g || (() => {}), "assign");
      this.G = cc11001100_hook("this.G", h, "assign");
      this.Z = cc11001100_hook("this.Z", l, "assign");
      this.ea = cc11001100_hook("this.ea", k, "assign");
      this.X = cc11001100_hook("this.X", m, "assign");
      Q(this, () => jn(this, !0));
      this.C = cc11001100_hook("this.C", Kc("INS", b.document), "assign");
      Q(this, () => this.C = cc11001100_hook("this.C", null, "assign"));
      this.l = cc11001100_hook("this.l", null, "assign");
      HTMLElement.prototype.attachShadow && !this.G.ya(1013, () => {
        this.l = cc11001100_hook("this.l", Kc("DIV", b.document), "assign");
        this.l.className = cc11001100_hook("this.l.className", "grippy-host", "assign");
        this.l.attachShadow({
          mode: cc11001100_hook("mode", "closed", "object-key-init")
        }).appendChild(this.C);
        Q(this, () => this.l = cc11001100_hook("this.l", null, "assign"));
        return !0;
      }) && (this.l = cc11001100_hook("this.l", null, "assign"));
      this.v = cc11001100_hook("this.v", this.A = cc11001100_hook("this.A", !1, "assign"), "assign");
      this.H = cc11001100_hook("this.H", 0, "assign");
      this.j = cc11001100_hook("this.j", e, "assign");
      this.J = cc11001100_hook("this.J", !1, "assign");
      this.m = cc11001100_hook("this.m", this.M = cc11001100_hook("this.M", null, "assign"), "assign");
      this.T = cc11001100_hook("this.T", b.innerHeight, "assign");
      this.R = cc11001100_hook("this.R", "true" === this.F.scroll_detached, "assign");
      this.I = cc11001100_hook("this.I", "true" === this.F.dismissable, "assign");
      this.ha = cc11001100_hook("this.ha", "true" === this.F.draggable || "top" != this.j, "assign");
      this.ga = cc11001100_hook("this.ga", this.F.expId || "", "assign");
      this.fa = cc11001100_hook("this.fa", this.F.qemId || "", "assign");
      a = cc11001100_hook("a", parseInt(this.F.z_index_override, 10), "assign");
      this.V = cc11001100_hook("this.V", isNaN(a) ? null : a, "assign");
      this.oa = cc11001100_hook("this.oa", new en(b), "assign");
      !this.I && u.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(() => {
        const n = cc11001100_hook("n", this.Y.innerHeight, "var-init");
        if (2 > Math.abs(n - 460) || 2 > Math.abs(n - 529)) n < this.T && 2 > Math.abs(U(this.Y) - this.H - 68) && (this.J = cc11001100_hook("this.J", !0, "assign"), this.v && pn(this)), this.T = cc11001100_hook("this.T", n, "assign");
      }, 300);
      mn(this, this.C);
    }
  }
  class xn extends an {
    constructor(a, b, c, d, e) {
      super(b, d, e);
      this.fa = cc11001100_hook("this.fa", a, "assign");
      this.X = cc11001100_hook("this.X", c, "assign");
    }
    U() {
      var a = cc11001100_hook("a", this.fa, "var-init");
      if (!a.A) {
        const b = cc11001100_hook("b", parseInt(a.m.style[a.j], 10), "var-init");
        b >= -(a.B.height / 2) ? (pn(a), sn(a, "d", !1, b)) : (jn(a, a.I), sn(a, "d", !0, b));
      }
    }
    R() {
      if (null !== this.m && null !== this.l && null !== this.j) {
        var a = cc11001100_hook("a", this.ea(this.m.y, jc(this.j, this.l).y), "var-init");
        0 < a && (a = cc11001100_hook("a", 0, "assign"));
        a < -this.X && (a = cc11001100_hook("a", -this.X, "assign"));
        var b = cc11001100_hook("b", {}, "var-init");
        b[this.V()] = cc11001100_hook("b[this.V()]", a + "px", "assign");
        P(this.target, b);
      }
    }
  }
  class un extends xn {
    J() {
      return new J(0, parseInt(this.target.style.top, 10));
    }
    ea(a, b) {
      return b - a;
    }
    V() {
      return "top";
    }
  }
  class vn extends xn {
    J() {
      return new J(0, parseInt(this.target.style.bottom, 10));
    }
    ea(a, b) {
      return a - b;
    }
    V() {
      return "bottom";
    }
  }
  ;
  function yn(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (!a.K) {
      a.K = cc11001100_hook("a.K", [], "assign");
      for (var e = cc11001100_hook("e", a.m.parentElement, "var-init"); e;) {
        a.K.push(e);
        if (a.Z(e)) break;
        e = cc11001100_hook("e", e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null, "assign");
      }
    }
    e = cc11001100_hook("e", a.K.slice(), "assign");
    !c && a.Z(e[e.length - 1]) && e.pop();
    let f;
    if (d) for (c = cc11001100_hook("c", e.length - 1, "assign"); 0 <= c; --c) (f = cc11001100_hook("f", e[c], "assign")) && b.call(a, f, c, e);else for (c = cc11001100_hook("c", 0, "assign"); c < e.length; ++c) (f = cc11001100_hook("f", e[c], "assign")) && b.call(a, f, c, e);
  }
  var zn = cc11001100_hook("zn", class extends ge {
    constructor(a, b, c) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
      this.K = cc11001100_hook("this.K", null, "assign");
      Q(this, () => this.K = cc11001100_hook("this.K", null, "assign"));
    }
    Z(a) {
      return this.j === a;
    }
  }, "var-init");
  function An(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    null !== b && null !== Qc(a.getAttribute("width")) && a.setAttribute("width", b);
    null !== c && null !== Qc(a.getAttribute("height")) && a.setAttribute("height", c);
    null !== b && (a.style.width = cc11001100_hook("a.style.width", b + "px", "assign"));
    null !== c && (a.style.height = cc11001100_hook("a.style.height", c + "px", "assign"));
  }
  ;
  function Bn(a) {
    cc11001100_hook("a", a, "function-parameter");
    Cn(a);
    const b = cc11001100_hook("b", a.l.innerWidth, "var-init");
    a = cc11001100_hook("a", od(a.m).height || +a.m.height || 0, "assign");
    return new kc(b, a);
  }
  function Dn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.U) {
      var b = cc11001100_hook("b", a.j, "var-init");
      b && (b.style.display = cc11001100_hook("b.style.display", "none", "assign"));
      En(a, a.V, !0, !0);
      a.U = cc11001100_hook("a.U", !1, "assign");
    }
  }
  function Fn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.H = cc11001100_hook("a.H", "touchcancel", "assign");
    u.setTimeout(a.B.O(274, () => {
      "touchcancel" === a.H && (a.I = cc11001100_hook("a.I", 0, "assign"), a.M = cc11001100_hook("a.M", !1, "assign"), Gn(a));
    }), 1E3);
  }
  function Hn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b && b.touches) {
      a.H = cc11001100_hook("a.H", "touchend", "assign");
      var c = cc11001100_hook("c", b.touches.length, "var-init");
      2 > c ? u.setTimeout(a.B.O(256, () => {
        "touchend" === a.H && (a.I = cc11001100_hook("a.I", c, "assign"), a.M = cc11001100_hook("a.M", !1, "assign"), Gn(a));
      }), 1E3) : (a.I = cc11001100_hook("a.I", c, "assign"), Gn(a));
      !a.G || .05 > Math.abs(ze(a.l) - 1) || jn(a.v, !0);
    }
  }
  function In(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l, "var-init");
    I(b, "orientationchange", a.Fa);
    I(b, "resize", a.Wa);
    I(b, "scroll", a.gb);
    I(b, "touchcancel", a.hb);
    I(b, "touchend", a.kb);
    I(b, "touchmove", a.mb);
    I(b, "touchstart", a.nb);
  }
  function Jn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l, "var-init");
    G(b, "orientationchange", a.Fa);
    G(b, "resize", a.Wa);
    G(b, "scroll", a.gb);
    G(b, "touchcancel", a.hb);
    G(b, "touchend", a.kb);
    G(b, "touchmove", a.mb);
    G(b, "touchstart", a.nb);
    Q(a, () => In(a));
  }
  function Kn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", parseInt(b.ht, 10), "var-init"),
      d = cc11001100_hook("d", 0 < c ? c : null, "var-init");
    b = cc11001100_hook("b", parseInt(b.wd, 10), "assign");
    const e = cc11001100_hook("e", 0 < b ? b : null, "var-init");
    null != d && (a.C.height = cc11001100_hook("a.C.height", d, "assign"));
    null != e && (a.C.width = cc11001100_hook("a.C.width", e, "assign"));
    yn(a, f => {
      An(f, e, d);
    }, !1, !0);
    An(a.m, e, d);
  }
  function Ln(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", new wn(b, a.l, a.m, a.C, a.A, () => {
      if (!a.ha) {
        a.ha = cc11001100_hook("a.ha", !0, "assign");
        In(a);
        var c = cc11001100_hook("c", a.j, "var-init");
        c && c.parentNode && c.parentNode.removeChild(c);
        En(a, a.V, !0, !0);
        c && (c.style.display = cc11001100_hook("c.style.display", "none", "assign"));
      }
    }, () => void Mn(a), a.B, a.zc, () => {
      a.R || (a.R = cc11001100_hook("a.R", !0, "assign"), Nn(a, null));
    }, () => {
      a.R && (a.R = cc11001100_hook("a.R", !1, "assign"), Nn(a, null));
    }), "assign");
    he(a, b);
    return b;
  }
  function Mn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.Tb && !a.Za && (a.Za = cc11001100_hook("a.Za", !0, "assign"), a.B.ya(257, () => {
      const b = cc11001100_hook("b", {
          msg_type: cc11001100_hook("msg_type", "manual-send-view", "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", a.m.contentWindow, "var-init");
      c && c.postMessage(a.l.JSON.stringify(b), "*");
    }));
  }
  function On(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.Pa()) return !1;
    if (!a.G && a.aa) switch (a.A) {
      case "bottom":
        return a.J >= a.Ac || a.wa;
      case "top":
        return a.J > Pn(a);
    }
    return .05 > Math.abs(ze(a.l) - 1);
  }
  function Qn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j, "var-init");
    if (b && a.m.parentElement) {
      md(b, a.X);
      var c = cc11001100_hook("c", a.l.innerWidth, "var-init");
      T(a.l).scrollWidth > c ? b.style.width = cc11001100_hook("b.style.width", c, "assign") : b.style.width = cc11001100_hook("b.style.width", "100%", "assign");
      Rn(a);
    }
  }
  function Sn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j, "var-init");
    if (b) {
      var c = cc11001100_hook("c", a.v, "var-init"),
        d = cc11001100_hook("d", c.Y, "var-init"),
        e = cc11001100_hook("e", U(d), "var-init");
      10 > Math.abs(e - c.H) || (d = cc11001100_hook("d", e + 10 + T(d).clientHeight > Ae(d), "assign"), d = cc11001100_hook("d", 10 > e || d, "assign"), c.R || c.J || c.A || (c.v || d ? c.v && d && pn(c) : jn(c, !1)), c.H = cc11001100_hook("c.H", e, "assign"));
      a.U || (c = cc11001100_hook("c", En, "assign"), Cn(a), e = cc11001100_hook("e", rd(a.l.document.body, "padding"), "assign"), "bottom" == a.A && (e.bottom += cc11001100_hook("e.bottom", a.X.height + 25, "assign")), c(a, e), b.style.display = cc11001100_hook("b.style.display", "block", "assign"), a.U = cc11001100_hook("a.U", !0, "assign"));
    }
  }
  function Tn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.ab = cc11001100_hook("a.ab", !0, "assign");
    if (!a.G && On(a) && (a.fa || !a.oa)) {
      var b = cc11001100_hook("b", a.j, "var-init");
      b && (Qn(a), yn(a, c => {
        Ee(c);
      }, !0), tn(a.v, b), Sn(a), a.G = cc11001100_hook("a.G", !0, "assign"), (a = cc11001100_hook("a", a.m.contentWindow, "assign")) && Ul(a, "ig", {
        rr: cc11001100_hook("rr", "vis-aa", "object-key-init")
      }, "*", 2));
    }
  }
  function En(a, b, c = !0, d = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const e = cc11001100_hook("e", a.F.top - b.top, "var-init"),
      f = cc11001100_hook("f", U(a.l), "var-init");
    f < e && !d || (d = cc11001100_hook("d", a.l.document.body, "assign"), d.style.paddingTop = cc11001100_hook("d.style.paddingTop", b.top + "px", "assign"), d.style.paddingRight = cc11001100_hook("d.style.paddingRight", b.right + "px", "assign"), d.style.paddingBottom = cc11001100_hook("d.style.paddingBottom", b.bottom + "px", "assign"), d.style.paddingLeft = cc11001100_hook("d.style.paddingLeft", b.left + "px", "assign"), a.F = cc11001100_hook("a.F", b, "assign"), c && a.l.scrollTo(0, f - e));
  }
  function Rn(a) {
    cc11001100_hook("a", a, "function-parameter");
    yn(a, b => {
      md(b, a.C);
      b.style.width = cc11001100_hook("b.style.width", "100%", "assign");
    }, !1, !0);
    a.m.style.display = cc11001100_hook("a.m.style.display", "block", "assign");
    a.m.style.margin = cc11001100_hook("a.m.style.margin", "0 auto", "assign");
    if (a.sb) {
      const b = cc11001100_hook("b", a.j, "var-init");
      Rc(b, c => {
        Uc(c, d => c === b && /display|bottom/i.test(d) ? !1 : !0);
        if ("svg" === c.nodeName) return !1;
      });
    }
  }
  function Cn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if ("bottom" !== a.A && "top" !== a.A) throw Error("Unexpected position: " + a.A);
  }
  function Gn(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.ea || a.ha || 2 <= a.I && a.M || !On(a) ? Dn(a) : (Tn(a), Sn(a));
  }
  function Nn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.U ? Pn(a, a.R) : a.V.top, "var-init");
    if ("top" === a.A && a.l.document.body && a.ea && a.v && a.G && a.F.top !== c && 0 !== b) {
      var d = cc11001100_hook("d", dd(a.F), "var-init");
      null === b ? (d.top = cc11001100_hook("d.top", c, "assign"), En(a, d)) : (0 < b && a.F.top > c && (d.top = cc11001100_hook("d.top", Math.max(c, a.F.top - b), "assign"), En(a, d, !1)), 0 > b && a.F.top < c && (d.top = cc11001100_hook("d.top", Math.min(c, a.F.top - b), "assign"), En(a, d, !1)));
    }
  }
  function Pn(a, b = !1) {
    cc11001100_hook("a", a, "function-parameter");
    return b ? a.V.top + 30 : a.V.top + 30 + a.X.height - 5;
  }
  class Un extends zn {
    constructor(a, b, c, d) {
      var e = cc11001100_hook("e", Si, "var-init"),
        f = cc11001100_hook("f", Ri, "var-init");
      super(a, b, d);
      this.B = cc11001100_hook("this.B", e, "assign");
      this.zc = cc11001100_hook("this.zc", f, "assign");
      this.J = cc11001100_hook("this.J", this.va = cc11001100_hook("this.va", this.bb = cc11001100_hook("this.bb", 0, "assign"), "assign"), "assign");
      this.ha = cc11001100_hook("this.ha", this.rb = cc11001100_hook("this.rb", !1, "assign"), "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.M = cc11001100_hook("this.M", this.ea = cc11001100_hook("this.ea", !1, "assign"), "assign");
      this.H = cc11001100_hook("this.H", null, "assign");
      this.V = cc11001100_hook("this.V", rd(b.document.body, "padding"), "assign");
      this.F = cc11001100_hook("this.F", rd(b.document.body, "padding"), "assign");
      this.I = cc11001100_hook("this.I", 0, "assign");
      this.ab = cc11001100_hook("this.ab", this.G = cc11001100_hook("this.G", !1, "assign"), "assign");
      this.U = cc11001100_hook("this.U", !0, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
      this.C = cc11001100_hook("this.C", Bn(this), "assign");
      this.X = cc11001100_hook("this.X", null, "assign");
      this.aa = cc11001100_hook("this.aa", this.oa = cc11001100_hook("this.oa", this.fa = cc11001100_hook("this.fa", this.Za = cc11001100_hook("this.Za", this.sb = cc11001100_hook("this.sb", this.Tb = cc11001100_hook("this.Tb", !1, "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
      this.Ac = cc11001100_hook("this.Ac", tc(b || window).height / 2, "assign");
      this.Xa = cc11001100_hook("this.Xa", tc(b || window).height, "assign");
      this.Ya = cc11001100_hook("this.Ya", vc(b), "assign");
      this.R = cc11001100_hook("this.R", this.wa = cc11001100_hook("this.wa", !1, "assign"), "assign");
      Dn(this);
      this.Fa = cc11001100_hook("this.Fa", this.B.O(266, () => {
        Gn(this);
      }), "assign");
      this.Wa = cc11001100_hook("this.Wa", this.B.O(267, () => {
        Gn(this);
      }), "assign");
      this.gb = cc11001100_hook("this.gb", this.B.O(268, () => {
        if (this.G && this.j && this.v) {
          var g = cc11001100_hook("g", this.v, "var-init");
          g.H = cc11001100_hook("g.H", U(g.Y), "assign");
        }
        g = cc11001100_hook("g", U(this.l), "assign");
        const h = cc11001100_hook("h", g - this.bb, "var-init");
        Nn(this, h);
        this.aa && (0 < h && (this.J += cc11001100_hook("this.J", h, "assign")), this.wa = cc11001100_hook("this.wa", this.Ya - g <= this.Xa, "assign"), this.bb = cc11001100_hook("this.bb", g, "assign"));
        Gn(this);
      }), "assign");
      this.hb = cc11001100_hook("this.hb", this.B.O(269, () => {
        Fn(this);
      }), "assign");
      this.kb = cc11001100_hook("this.kb", this.B.O(270, g => {
        Hn(this, g);
      }), "assign");
      this.mb = cc11001100_hook("this.mb", this.B.O(271, g => {
        if (g && g.touches) {
          this.H = cc11001100_hook("this.H", "touchmove", "assign");
          this.I = cc11001100_hook("this.I", g.touches.length, "assign");
          this.M = cc11001100_hook("this.M", !0, "assign");
          Gn(this);
          if (!this.rb && g.touches && 0 != g.touches.length && g.touches[0]) {
            g = cc11001100_hook("g", g.touches[0].pageY, "assign");
            var h = cc11001100_hook("h", g - this.va, "var-init");
            this.va = cc11001100_hook("this.va", g, "assign");
            g = cc11001100_hook("g", h, "assign");
          } else g = cc11001100_hook("g", 0, "assign");
          0 < g && (this.J += cc11001100_hook("this.J", g, "assign"));
          Nn(this, g);
        }
      }), "assign");
      this.nb = cc11001100_hook("this.nb", this.B.O(272, g => {
        g && g.touches && g.touches[0] && (this.H = cc11001100_hook("this.H", "touchstart", "assign"), this.I = cc11001100_hook("this.I", g.touches.length, "assign"), this.M = cc11001100_hook("this.M", !1, "assign"), Gn(this), this.va = cc11001100_hook("this.va", g.touches[0].pageY, "assign"), this.rb = cc11001100_hook("this.rb", (g = cc11001100_hook("g", g.target, "assign")) && "top" == this.A && this.ea && this.v && rn(this.v) && 1 === g.nodeType ? zc(rn(this.v), g) : !1, "assign"));
      }), "assign");
      this.xa = cc11001100_hook("this.xa", this.B.O(273, () => {
        this.ga();
      }), "assign");
      G(a, "load", this.xa);
      Q(this, () => I(a, "load", this.xa));
    }
    ga() {
      if (this.fa) return !1;
      this.fa = cc11001100_hook("this.fa", !0, "assign");
      I(this.m, "load", this.xa);
      if (this.oa && !this.ab) return !1;
      Gn(this);
      return !0;
    }
    Pa() {
      return ye(this.l);
    }
  }
  var Vn = cc11001100_hook("Vn", {
    ui: cc11001100_hook("ui", "gr", "object-key-init"),
    gvar: cc11001100_hook("gvar", "ar", "object-key-init"),
    scroll_detached: cc11001100_hook("scroll_detached", "true", "object-key-init"),
    dismissable: cc11001100_hook("dismissable", "false", "object-key-init")
  }, "var-init");
  class Wn extends Un {
    Z(a) {
      return Of(a);
    }
    ga() {
      if (!super.ga()) return !1;
      const a = cc11001100_hook("a", em(this.l, "top" === this.A ? 3 : 2), "var-init");
      a && a.displayAdLoadedContent(!this.aa);
      return !0;
    }
    Pa() {
      if (this.C.width > xe) {
        var a = cc11001100_hook("a", this.l, "var-init");
        var b = cc11001100_hook("b", this.C.width, "var-init");
        a = cc11001100_hook("a", a.innerWidth >= b && a.innerHeight >= (b > xe ? 650 : 0), "assign");
      } else a = cc11001100_hook("a", super.Pa(), "assign");
      return a;
    }
  }
  ;
  function Xn(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    try {
      if (!$c(c.origin) || a.F && !Be(c, a.F.contentWindow)) return;
    } catch (f) {
      return;
    }
    const d = cc11001100_hook("d", b.msg_type, "var-init");
    let e;
    "string" === typeof d && (e = cc11001100_hook("e", a.Xa[d], "assign")) && a.J.ya(168, () => {
      e.call(a, b, c);
    });
  }
  class Yn extends ge {
    constructor(a, b, c, d, e = {}) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
      this.F = cc11001100_hook("this.F", b, "assign");
      this.J = cc11001100_hook("this.J", c, "assign");
      this.Pa = cc11001100_hook("this.Pa", d, "assign");
      this.Xa = cc11001100_hook("this.Xa", {}, "assign");
      this.nb = cc11001100_hook("this.nb", this.J.O(168, (f, g) => void Xn(this, f, g)), "assign");
      this.sb = cc11001100_hook("this.sb", this.J.O(169, (f, g) => {
        Ed(this.Pa, "ras::xsf", {
          c: cc11001100_hook("c", g.data.substring(0, 500), "object-key-init"),
          u: cc11001100_hook("u", this.j.location.href.substring(0, 500), "object-key-init")
        }, !0, .1);
        return !0;
      }), "assign");
      this.oa = cc11001100_hook("this.oa", [], "assign");
      this.ea(this.Xa, e);
      this.oa.push(Sl(this.j, "sth", this.nb, this.sb));
    }
    Ca() {
      for (const a of this.oa) a();
      this.oa.length = cc11001100_hook("this.oa.length", 0, "assign");
      super.Ca();
    }
  }
  ;
  class Zn extends Yn {
    constructor(a, b = null) {
      super(a, b, Si, Ri);
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }
  ;
  class $n extends Zn {
    constructor(a, b, c) {
      super(a, b.m);
      a = cc11001100_hook("a", this.l = cc11001100_hook("this.l", b, "assign"), "assign");
      if ((b = cc11001100_hook("b", a.j, "assign")) && !a.v) {
        for (var d in Vn) !Vn.hasOwnProperty(d) || d in c || (c[d] = cc11001100_hook("c[d]", Vn[d], "assign"));
        a.Tb = cc11001100_hook("a.Tb", "true" === c.use_manual_view || "top" === a.A || !!ue(a.l).wasReactiveAdConfigReceived[2], "assign");
        a.sb = cc11001100_hook("a.sb", "true" === c.use_important, "assign");
        if (d = cc11001100_hook("d", c.af_l, "assign")) a.oa = cc11001100_hook("a.oa", "true" === d, "assign");
        a.aa = cc11001100_hook("a.aa", "true" === c.wait_for_scroll || "top" == a.A, "assign");
        Kn(a, c);
        a.v = cc11001100_hook("a.v", Ln(a, c), "assign");
        c = cc11001100_hook("c", a.C.height + 5, "assign");
        "bottom" == a.A && om(a.l) && (c += cc11001100_hook("c", 20, "assign"));
        a.X = cc11001100_hook("a.X", new kc(a.C.width, c), "assign");
        a.wa = cc11001100_hook("a.wa", a.Xa >= a.Ya, "assign");
        c = cc11001100_hook("c", a.j, "assign");
        d = cc11001100_hook("d", a.v && rn(a.v), "assign");
        c && d && ("top" == a.A ? c.appendChild(d) : c.insertBefore(d, c.firstChild));
        Jn(a);
        a.ea = cc11001100_hook("a.ea", !0, "assign");
        b.setAttribute("data-anchor-status", "ready-to-display");
      }
      Tn(this.l);
    }
    ea(a) {
      a.dismiss = cc11001100_hook("a.dismiss", Ob(() => {
        var b = cc11001100_hook("b", this.l, "var-init");
        b.v && jn(b.v, !0);
      }), "assign");
    }
  }
  ;
  var ao = cc11001100_hook("ao", class extends Fb {
      constructor(a) {
        super(a);
      }
    }, "var-init"),
    bo = cc11001100_hook("bo", Jb(ao), "var-init");
  function co(a) {
    cc11001100_hook("a", a, "function-parameter");
    eo(a, !1);
    const b = cc11001100_hook("b", a.j, "var-init");
    yn(a, c => {
      O(c, fo);
      Ee(c);
    }, !0);
    a.m.setAttribute("width", "");
    a.m.setAttribute("height", "");
    P(a.m, fo);
    P(a.m, go);
    P(b, ho);
    Ee(b);
    Ee(a.m);
  }
  function eo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.j, "var-init");
    b ? io(a, c) : (O(c, {
      display: cc11001100_hook("display", "none", "object-key-init")
    }), a.v && O(a.v, {
      display: cc11001100_hook("display", "none", "object-key-init")
    }), a.B && (u.clearInterval(a.B), a.B = cc11001100_hook("a.B", 0, "assign")), jo(a));
  }
  function ko(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.j, "var-init");
    if (!b) return !1;
    var d = cc11001100_hook("d", gi(b), "var-init");
    if (!d || !d.v()) return !1;
    d = cc11001100_hook("d", d.D, "assign");
    if (!d) return !1;
    a.v = cc11001100_hook("a.v", a.l.document.createElement("ins"), "assign");
    O(a.v, {
      display: cc11001100_hook("display", "inline-block", "object-key-init"),
      width: cc11001100_hook("width", "100%", "object-key-init")
    });
    Ah(a.v, d, Dh[b.l]);
    a.C();
    O(c, {
      position: cc11001100_hook("position", "absolute", "object-key-init")
    });
    eo(a, !0);
    return !0;
  }
  function io(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    O(b, {
      display: cc11001100_hook("display", "block", "object-key-init")
    });
    a.B = cc11001100_hook("a.B", u.setInterval(() => a.C, 250), "assign");
  }
  function jo(a) {
    cc11001100_hook("a", a, "function-parameter");
    null != a.F && (a.A.body.style.overflow = cc11001100_hook("a.A.body.style.overflow", a.F, "assign"));
    null != a.G && (a.A.documentElement.style.overflow = cc11001100_hook("a.A.documentElement.style.overflow", a.G, "assign"));
  }
  function lo(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j, "var-init"),
      c = cc11001100_hook("c", a.l.innerHeight, "var-init");
    O(b, {
      height: cc11001100_hook("height", c + "px", "object-key-init")
    });
    a.l.scrollTo(0, kd(a.v).y);
    b && (O(b, {
      top: cc11001100_hook("top", "0", "object-key-init")
    }), a.v && O(a.v, {
      height: cc11001100_hook("height", c + "px", "object-key-init")
    }), O(b, {
      position: cc11001100_hook("position", "fixed", "object-key-init")
    }), a.A.body && "hidden" != a.A.body.style.overflow && (a.F = cc11001100_hook("a.F", a.A.body.style.overflow, "assign"), a.G = cc11001100_hook("a.G", a.A.documentElement.style.overflow, "assign"), a.A.body.style.overflow = cc11001100_hook("a.A.body.style.overflow", "hidden", "assign"), a.A.documentElement.style.overflow = cc11001100_hook("a.A.documentElement.style.overflow", "hidden", "assign")));
  }
  class mo extends zn {
    constructor(a, b, c) {
      super(a, b, c);
      this.F = cc11001100_hook("this.F", null, "assign");
      this.B = cc11001100_hook("this.B", 0, "assign");
      this.G = cc11001100_hook("this.G", null, "assign");
      this.H = cc11001100_hook("this.H", 0, "assign");
      this.A = cc11001100_hook("this.A", b.document, "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.I = cc11001100_hook("this.I", 0, "assign");
      co(this);
    }
    C() {
      if ("hidden" != this.A.body.style.overflow && "fixed" != this.A.body.style.position) {
        var a = cc11001100_hook("a", this.j, "var-init");
        const b = cc11001100_hook("b", this.l.innerHeight, "var-init");
        if (this.I < b) {
          const c = cc11001100_hook("c", {
            height: cc11001100_hook("height", b + "px", "object-key-init")
          }, "var-init");
          O(a, c);
          this.v && O(this.v, c);
          this.I = cc11001100_hook("this.I", b, "assign");
        }
        (a = cc11001100_hook("a", this.j, "assign")) && this.v && (this.H = cc11001100_hook("this.H", kd(this.v).y, "assign"), a.style.top != this.H + "px" && O(a, {
          top: cc11001100_hook("top", this.H + "px", "object-key-init")
        }));
      }
    }
  }
  var ho = cc11001100_hook("ho", {
      backgroundColor: cc11001100_hook("backgroundColor", "white", "object-key-init"),
      opacity: cc11001100_hook("opacity", "1", "object-key-init"),
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      left: cc11001100_hook("left", "0px", "object-key-init"),
      top: cc11001100_hook("top", "0px", "object-key-init"),
      display: cc11001100_hook("display", "none !important", "object-key-init"),
      zIndex: cc11001100_hook("zIndex", "2147483646", "object-key-init")
    }, "var-init"),
    fo = cc11001100_hook("fo", {
      width: cc11001100_hook("width", "100%", "object-key-init"),
      height: cc11001100_hook("height", "100%", "object-key-init"),
      zIndex: cc11001100_hook("zIndex", "2147483646", "object-key-init")
    }, "var-init"),
    go = cc11001100_hook("go", {
      left: cc11001100_hook("left", "0", "object-key-init"),
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "0", "object-key-init")
    }, "var-init");
  var no = cc11001100_hook("no", (a, b) => {
      var c = cc11001100_hook("c", a.document.body, "var-init");
      if (!c || !b) return Wi("sci_evt", {
        amacerr: cc11001100_hook("amacerr", 1, "object-key-init")
      }, .1), null;
      b = cc11001100_hook("b", qb(b, Ek, 1), "assign");
      var d = cc11001100_hook("d", [], "var-init");
      for (var e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
        var f = cc11001100_hook("f", b[e], "var-init");
        var g = cc11001100_hook("g", e, "var-init"),
          h = cc11001100_hook("h", a, "var-init"),
          l = cc11001100_hook("l", nb(f, eh, 1), "var-init");
        if (l) {
          var k;
          if (k = cc11001100_hook("k", l, "assign")) {
            var m = cc11001100_hook("m", C(k, 7), "var-init");
            if (C(k, 1) || k.getId() || 0 < lb(k).length) {
              m = cc11001100_hook("m", lb(k), "assign");
              var n = cc11001100_hook("n", C(k, 3), "var-init"),
                q = cc11001100_hook("q", C(k, 1), "var-init"),
                r = cc11001100_hook("r", "", "var-init");
              q && (r += cc11001100_hook("r", q, "assign"));
              n && (r += cc11001100_hook("r", "#" + Wg(n), "assign"));
              if (m) for (n = cc11001100_hook("n", 0, "assign"); n < m.length; n++) r += cc11001100_hook("r", "." + Wg(m[n]), "assign");
              k = cc11001100_hook("k", (m = cc11001100_hook("m", r, "assign")) ? new Yg(m, C(k, 2), C(k, 5), Ok(C(k, 6))) : null, "assign");
            } else k = cc11001100_hook("k", m ? new Yg(m, C(k, 2), C(k, 5), Ok(C(k, 6))) : null, "assign");
          } else k = cc11001100_hook("k", null, "assign");
          (m = cc11001100_hook("m", k, "assign")) ? (k = cc11001100_hook("k", Rk[C(f, 2)], "assign"), r = cc11001100_hook("r", void 0 === k ? null : k, "assign"), null === r ? f = cc11001100_hook("f", null, "assign") : (k = cc11001100_hook("k", (k = cc11001100_hook("k", nb(f, Ck, 3), "assign")) ? kb(k, 3) : null, "assign"), m = cc11001100_hook("m", new Vk(m, r), "assign"), r = cc11001100_hook("r", jb(f, 10, 0, !1, !!(B(f.N) & 2)).slice(0), "assign"), null != C(l, 5) && r.push(1), l = cc11001100_hook("l", C(f, 12), "assign"), r = cc11001100_hook("r", void 0 !== mb(f, mh, 4) ? nb(f, mh, 4) : null, "assign"), f = cc11001100_hook("f", 1 == C(f, 8) ? new $k(m, new Sk(Qk(nb(f, Ck, 3), null)), k, 0, r, h, g, l, f) : 2 == C(f, 8) ? new $k(m, new Tk(f), k, 1, r, h, g, l, f) : null, "assign"))) : f = cc11001100_hook("f", null, "assign");
        } else f = cc11001100_hook("f", null, "assign");
        null !== f && d.push(f);
      }
      b = cc11001100_hook("b", new Rl(d, a), "assign");
      d = cc11001100_hook("d", a.innerHeight, "assign");
      a = cc11001100_hook("a", a.innerWidth, "assign");
      e = cc11001100_hook("e", new xl(), "assign");
      f = cc11001100_hook("f", [0], "assign");
      e.v = cc11001100_hook("e.v", f, "assign");
      e.l.push(new rl(f));
      e.l.push(new sl());
      e.j.push(new ol());
      a = cc11001100_hook("a", wl(vl(e, .85 * a, a), d), "assign");
      a.j.push(new ql());
      a.m = cc11001100_hook("a.m", 1, "assign");
      a = cc11001100_hook("a", a.build(), "assign");
      a = cc11001100_hook("a", Ol(b, a)[0] || null, "assign");
      if (!a) return null;
      c = cc11001100_hook("c", {
        node: cc11001100_hook("node", new Ff(c, !1).j(a.j) || void 0, "object-key-init"),
        ub: cc11001100_hook("ub", void 0, "object-key-init"),
        identifier: {}
      }, "assign");
      if (!c.node) throw Error("amac:n");
      b = cc11001100_hook("b", el(a.ra.j.j), "assign");
      if (null === b) throw Error("amac:p");
      return (c = cc11001100_hook("c", new ej(c, b).build(), "assign")) ? {
        lb: cc11001100_hook("lb", c, "object-key-init"),
        Cc: cc11001100_hook("Cc", a.Ma.j, "object-key-init")
      } : null;
    }, "var-init"),
    oo = cc11001100_hook("oo", a => {
      var b = cc11001100_hook("b", new se(), "var-init");
      b.j = cc11001100_hook("b.j", !0, "assign");
      b.A = cc11001100_hook("b.A", .85, "assign");
      b.l = cc11001100_hook("b.l", 1, "assign");
      b.v = cc11001100_hook("b.v", 25, "assign");
      b.m = cc11001100_hook("b.m", a.innerHeight, "assign");
      b.B = cc11001100_hook("b.B", !0, "assign");
      b = cc11001100_hook("b", b.build(), "assign");
      return wk(a, b);
    }, "var-init");
  function po(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Ae(a, !0), "var-init"),
      c = cc11001100_hook("c", T(a).scrollWidth, "var-init"),
      d = cc11001100_hook("d", T(a).scrollHeight, "var-init");
    let e = cc11001100_hook("e", "unknown", "var-init");
    a && a.document && a.document.readyState && (e = cc11001100_hook("e", a.document.readyState, "assign"));
    var f = cc11001100_hook("f", U(a), "var-init");
    const g = cc11001100_hook("g", [], "var-init");
    var h = cc11001100_hook("h", [], "var-init");
    const l = cc11001100_hook("l", [], "var-init"),
      k = cc11001100_hook("k", [], "var-init");
    var m = cc11001100_hook("m", [], "var-init"),
      n = cc11001100_hook("n", [], "var-init"),
      q = cc11001100_hook("q", [], "var-init");
    let r = cc11001100_hook("r", 0, "var-init"),
      t = cc11001100_hook("t", 0, "var-init"),
      y = cc11001100_hook("y", Infinity, "var-init"),
      F = cc11001100_hook("F", Infinity, "var-init"),
      H = cc11001100_hook("H", null, "var-init");
    var N = cc11001100_hook("N", Aj({
      Lb: cc11001100_hook("Lb", !1, "object-key-init")
    }, a), "var-init");
    for (const M of N) {
      N = cc11001100_hook("N", M.getBoundingClientRect(), "assign");
      const Ua = cc11001100_hook("Ua", b - (N.bottom + f), "var-init");
      var v = cc11001100_hook("v", void 0, "var-init"),
        A = cc11001100_hook("A", void 0, "var-init");
      if (M.className && -1 != M.className.indexOf("adsbygoogle-ablated-ad-slot")) {
        v = cc11001100_hook("v", M.getAttribute("google_element_uid"), "assign");
        A = cc11001100_hook("A", a.google_sv_map, "assign");
        if (!v || !A || !A[v]) continue;
        a: {
          var E = cc11001100_hook("E", A[v], "var-init");
          v = cc11001100_hook("v", Number(E.google_ad_width), "assign");
          A = cc11001100_hook("A", Number(E.google_ad_height), "assign");
          if (!(0 < v && 0 < A)) {
            b: {
              try {
                const Z = cc11001100_hook("Z", String(E.google_ad_format), "var-init");
                if (Z && Z.match) {
                  const ea = cc11001100_hook("ea", Z.match(/(\d+)x(\d+)/i), "var-init");
                  if (ea) {
                    const pb = cc11001100_hook("pb", parseInt(ea[1], 10), "var-init"),
                      Oa = cc11001100_hook("Oa", parseInt(ea[2], 10), "var-init");
                    if (0 < pb && 0 < Oa) {
                      var L = cc11001100_hook("L", {
                        width: cc11001100_hook("width", pb, "object-key-init"),
                        height: cc11001100_hook("height", Oa, "object-key-init")
                      }, "var-init");
                      break b;
                    }
                  }
                }
              } catch (Z) {}
              L = cc11001100_hook("L", null, "assign");
            }
            E = cc11001100_hook("E", L, "assign");
            if (!E) {
              v = cc11001100_hook("v", null, "assign");
              break a;
            }
            v = cc11001100_hook("v", 0 < v ? v : E.width, "assign");
            A = cc11001100_hook("A", 0 < A ? A : E.height, "assign");
          }
          v = cc11001100_hook("v", {
            width: cc11001100_hook("width", v, "object-key-init"),
            height: cc11001100_hook("height", A, "object-key-init")
          }, "assign");
        }
        v = cc11001100_hook("v", (A = cc11001100_hook("A", v, "assign")) ? A.height : 0, "assign");
        A = cc11001100_hook("A", A ? A.width : 0, "assign");
      } else if (v = cc11001100_hook("v", N.bottom - N.top, "assign"), A = cc11001100_hook("A", N.right - N.left, "assign"), 1 >= v || 1 >= A) continue;
      g.push(v);
      l.push(A);
      k.push(v * A);
      M.className && -1 != M.className.indexOf("google-auto-placed") ? (t += cc11001100_hook("t", 1, "assign"), M.className && -1 != M.className.indexOf("pedestal_container") && (H = cc11001100_hook("H", v, "assign"))) : (y = cc11001100_hook("y", Math.min(y, Ua), "assign"), n.push(N), r += cc11001100_hook("r", 1, "assign"), h.push(v), m.push(v * A));
      F = cc11001100_hook("F", Math.min(F, Ua), "assign");
      q.push(N);
    }
    y = cc11001100_hook("y", Infinity === y ? null : y, "assign");
    F = cc11001100_hook("F", Infinity === F ? null : F, "assign");
    f = cc11001100_hook("f", qo(n), "assign");
    q = cc11001100_hook("q", qo(q), "assign");
    h = cc11001100_hook("h", ro(b, h), "assign");
    n = cc11001100_hook("n", ro(b, g), "assign");
    m = cc11001100_hook("m", ro(b * c, m), "assign");
    L = cc11001100_hook("L", ro(b * c, k), "assign");
    return new so(a, {
      bc: cc11001100_hook("bc", e, "object-key-init"),
      Sb: cc11001100_hook("Sb", b, "object-key-init"),
      qc: cc11001100_hook("qc", c, "object-key-init"),
      oc: cc11001100_hook("oc", d, "object-key-init"),
      Rb: cc11001100_hook("Rb", r, "object-key-init"),
      Fb: cc11001100_hook("Fb", t, "object-key-init"),
      Gb: cc11001100_hook("Gb", to(g), "object-key-init"),
      Yb: cc11001100_hook("Yb", to(l), "object-key-init"),
      Xb: cc11001100_hook("Xb", to(k), "object-key-init"),
      mc: cc11001100_hook("mc", f, "object-key-init"),
      lc: cc11001100_hook("lc", q, "object-key-init"),
      kc: cc11001100_hook("kc", y, "object-key-init"),
      jc: cc11001100_hook("jc", F, "object-key-init"),
      ac: cc11001100_hook("ac", h, "object-key-init"),
      Zb: cc11001100_hook("Zb", n, "object-key-init"),
      Wb: cc11001100_hook("Wb", m, "object-key-init"),
      Vb: cc11001100_hook("Vb", L, "object-key-init"),
      rc: cc11001100_hook("rc", H, "object-key-init")
    });
  }
  function uo(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", po(a), "assign");
    return ((a.j.Gb || 0) * (a.j.Rb + a.j.Fb) + b) / (a.j.Sb + b);
  }
  function vo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Bc() && !(900 <= T(a.l).clientWidth), "var-init"),
      d = cc11001100_hook("d", qa([], e => ta(a.m, e)).join(","), "var-init");
    return {
      wpc: cc11001100_hook("wpc", "", "object-key-init"),
      su: cc11001100_hook("su", b, "object-key-init"),
      eid: cc11001100_hook("eid", d, "object-key-init"),
      doc: cc11001100_hook("doc", a.j.bc, "object-key-init"),
      pg_h: cc11001100_hook("pg_h", Y(a.j.Sb), "object-key-init"),
      pg_w: cc11001100_hook("pg_w", Y(a.j.qc), "object-key-init"),
      pg_hs: cc11001100_hook("pg_hs", Y(a.j.oc), "object-key-init"),
      c: cc11001100_hook("c", Y(a.j.Rb), "object-key-init"),
      aa_c: cc11001100_hook("aa_c", Y(a.j.Fb), "object-key-init"),
      av_h: cc11001100_hook("av_h", Y(a.j.Gb), "object-key-init"),
      av_w: cc11001100_hook("av_w", Y(a.j.Yb), "object-key-init"),
      av_a: cc11001100_hook("av_a", Y(a.j.Xb), "object-key-init"),
      s: cc11001100_hook("s", Y(a.j.mc), "object-key-init"),
      all_s: cc11001100_hook("all_s", Y(a.j.lc), "object-key-init"),
      b: cc11001100_hook("b", Y(a.j.kc), "object-key-init"),
      all_b: cc11001100_hook("all_b", Y(a.j.jc), "object-key-init"),
      d: cc11001100_hook("d", Y(a.j.ac), "object-key-init"),
      all_d: cc11001100_hook("all_d", Y(a.j.Zb), "object-key-init"),
      ard: cc11001100_hook("ard", Y(a.j.Wb), "object-key-init"),
      all_ard: cc11001100_hook("all_ard", Y(a.j.Vb), "object-key-init"),
      pd_h: cc11001100_hook("pd_h", Y(a.j.rc), "object-key-init"),
      dt: cc11001100_hook("dt", c ? "m" : "d", "object-key-init")
    };
  }
  class so {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" "), "assign");
    }
  }
  function to(a) {
    cc11001100_hook("a", a, "function-parameter");
    return ic.apply(null, qa(a, b => 0 < b)) || null;
  }
  function ro(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 >= a ? null : hc.apply(null, b) / a;
  }
  function qo(a) {
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
  function Y(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }
  ;
  function wo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c;
    if (!(c = cc11001100_hook("c", null == b, "assign"))) {
      try {
        b.setItem("__storage_test__", "__storage_test__");
        const e = cc11001100_hook("e", b.getItem("__storage_test__"), "var-init");
        b.removeItem("__storage_test__");
        var d = cc11001100_hook("d", "__storage_test__" === e, "var-init");
      } catch (e) {
        d = cc11001100_hook("d", !1, "assign");
      }
      c = cc11001100_hook("c", !d, "assign");
    }
    b = cc11001100_hook("b", c ? null : sm(b), "assign");
    a.j = cc11001100_hook("a.j", b, "assign");
    if (b = cc11001100_hook("b", !!a.j, "assign")) a = cc11001100_hook("a", a.j, "assign"), b = cc11001100_hook("b", !!a && 1 > a.length, "assign");
    return b;
  }
  function xo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      if (!b || !wo(a, b)) return !1;
      a.j.push(Date.now());
      const c = cc11001100_hook("c", JSON.stringify(a.j), "var-init");
      b.setItem("__lsv__", c);
      return b.getItem("__lsv__") == c;
    } catch (c) {
      return !1;
    }
  }
  class yo {
    constructor() {
      this.j = cc11001100_hook("this.j", null, "assign");
    }
  }
  ;
  function zo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.ha) Promise.resolve(!1);else {
      a.ha = cc11001100_hook("a.ha", !0, "assign");
      b = cc11001100_hook("b", De(b), "assign");
      a.aa = cc11001100_hook("a.aa", "true" === b["i-fvs"], "assign");
      var c = cc11001100_hook("c", b.i_expid, "var-init");
      c && (a.M = cc11001100_hook("a.M", c, "assign"));
      b.qid && (a.X = cc11001100_hook("a.X", b.qid, "assign"));
      a.C = cc11001100_hook("a.C", parseFloat(b.den_lim) || 0, "assign");
      b = cc11001100_hook("b", parseInt(b.sti_lt, 10), "assign");
      isNaN(b) || (a.U = cc11001100_hook("a.U", b, "assign"));
      a.I = cc11001100_hook("a.I", !0, "assign");
      if (Ao(a)) Promise.resolve(!1);else {
        var d = cc11001100_hook("d", new Wl(), "var-init"),
          e = cc11001100_hook("e", () => {
            Bo(a, {
              nip: cc11001100_hook("nip", 1, "object-key-init"),
              ph: cc11001100_hook("ph", Ae(a.j, !0), "object-key-init"),
              vh: cc11001100_hook("vh", a.j.innerHeight, "object-key-init"),
              iplt: cc11001100_hook("iplt", Date.now() - a.R, "object-key-init"),
              ama: cc11001100_hook("ama", a.K, "object-key-init"),
              url: cc11001100_hook("url", a.j.location ? a.j.location.href : void 0, "object-key-init")
            }, .1);
            a.G.push("Could not locate a suitable placement in the content below the fold.");
            fm(a.j, a.G);
            d.resolve(!1);
          }, "var-init"),
          f = cc11001100_hook("f", (g, h) => {
            Bo(a, {
              iplt: cc11001100_hook("iplt", Date.now() - a.R, "object-key-init"),
              ama: cc11001100_hook("ama", a.K, "object-key-init"),
              y: cc11001100_hook("y", h, "object-key-init")
            }, .01);
            d.resolve(Co(a, g));
          }, "var-init");
        a.R = cc11001100_hook("a.R", Date.now(), "assign");
        a.K ? (b = cc11001100_hook("b", no(a.j, a.Fa), "assign")) && a.I && !Ao(a) ? f(b.lb, b.Cc) : (Bo(a, {
          amacerr: cc11001100_hook("amacerr", 1, "object-key-init")
        }, .1), e()) : oo(a.j).then(g => {
          if (a.I && !Ao(a)) return g.ba().then(h => {
            if (h.j) var l = cc11001100_hook("l", h.j, "var-init");else h.na || (fi(h, !1), h.m()), l = cc11001100_hook("l", h.na, "assign"), !h.j && l && (h.j = cc11001100_hook("h.j", l.l(), "assign")), l = cc11001100_hook("l", h.j, "assign");
            f(h, l ? l.top : -1);
          }, e);
          d.resolve(!1);
        });
      }
    }
  }
  function Ao(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.aa ? !1 : ue(a.j).wasReactiveAdVisible[8] ? (Bo(a, {
      vigs: cc11001100_hook("vigs", 1, "object-key-init")
    }, .1), !0) : !1;
  }
  function Bo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", b || {}, "assign");
    a.X && (b.qid = cc11001100_hook("b.qid", a.X, "assign"));
    a.M && (b.eid = cc11001100_hook("b.eid", a.M, "assign"));
    a.l && (b.tsl = cc11001100_hook("b.tsl", Date.now() - a.l, "assign"));
    a.V && (b.tslo = cc11001100_hook("b.tslo", Date.now() - a.V, "assign"), b.tl = cc11001100_hook("b.tl", a.wa, "assign"));
    a.F.src && (b.req = cc11001100_hook("b.req", a.F.src, "assign"));
    Wi("sci_evt", b, c);
  }
  function Co(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Do(a) && Eo(a) && ko(a.m, b) && (a.l = cc11001100_hook("a.l", Date.now(), "assign"), Fo(a), a.aa ? Go(a) : a.Z.call(a.j, () => Ho(a)));
    fm(a.j, a.G);
    return !!a.l;
  }
  function Io(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.H = cc11001100_hook("a.H", !0, "assign");
    a.v = cc11001100_hook("a.v", !1, "assign");
    eo(a.m, !1);
    a.A && (I(a.j, "orientationchange", a.A), a.A = cc11001100_hook("a.A", null, "assign"));
    a.B && (I(a.j, "resize", a.B), a.B = cc11001100_hook("a.B", null, "assign"));
  }
  function Do(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j.innerHeight, "var-init");
    if (!b) return !1;
    var c = cc11001100_hook("c", a.j, "var-init");
    c = cc11001100_hook("c", T(c).scrollWidth <= T(c).clientWidth, "assign");
    let d;
    if (!ye(a.j)) return Bo(a, {
      lnd: cc11001100_hook("lnd", 1, "object-key-init")
    }, .1), a.G.push("Landscape is not supported"), !1;
    if (a.C && (d = cc11001100_hook("d", uo(a.j, b), "assign")) > a.C) return Bo(a, Object.assign({
      den: cc11001100_hook("den", d, "object-key-init"),
      lim: cc11001100_hook("lim", a.C, "object-key-init")
    }, vo(po(a.j), a.j.location.hostname)), 1), a.G.push(`Insertion would cause ad density greater than ${100 * a.C}%.`), !1;
    c || Bo(a, {
      Zc: cc11001100_hook("Zc", 1, "object-key-init")
    }, .1);
    return !0;
  }
  function Eo(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.fa ? !0 : wo(R(yo), a.ga);
  }
  function Fo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A = cc11001100_hook("a.A", Vi(519, () => {
      !a.H && a.v && Bo(a, {
        tto: cc11001100_hook("tto", Date.now() - a.l, "object-key-init"),
        por: cc11001100_hook("por", ye(a.j) ? 1 : 0, "object-key-init")
      }, .1);
    }), "assign");
    G(a.j, "orientationchange", a.A);
    a.B = cc11001100_hook("a.B", Vi(520, () => {
      a.H || (a.m.C(), a.v && Bo(a, {
        ttre: cc11001100_hook("ttre", Date.now() - a.l, "object-key-init")
      }, .1));
    }), "assign");
    G(a.j, "resize", a.B);
  }
  function Go(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.va || (a.F.contentWindow.postMessage(JSON.stringify({
      msg_type: cc11001100_hook("msg_type", "i-view", "object-key-init")
    }), "https://googleads.g.doubleclick.net"), a.va = cc11001100_hook("a.va", !0, "assign"));
  }
  function Ho(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.H) if (Ao(a)) Io(a);else {
      var b = cc11001100_hook("b", a.m.j.getBoundingClientRect().top, "var-init"),
        c = cc11001100_hook("c", a.j.innerHeight, "var-init");
      a.m.C();
      .5 <= (c - b) / c && Go(a);
      b < c && (ue(a.j).wasReactiveAdVisible[9] = cc11001100_hook("ue(a.j).wasReactiveAdVisible[9]", !0, "assign"), a.fa || xo(R(yo), a.ga), a.xa = cc11001100_hook("a.xa", !0, "assign"));
      0 >= b ? (0 <= a.U && Jo(a), Bo(a, {
        sice: cc11001100_hook("sice", !0, "object-key-init"),
        vh: cc11001100_hook("vh", c, "object-key-init"),
        gvto: cc11001100_hook("gvto", b, "object-key-init")
      }, .1)) : a.Z && a.Z.call(a.j, () => Ho(a));
    }
  }
  function Jo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.V = cc11001100_hook("a.V", Date.now(), "assign");
    a.v = cc11001100_hook("a.v", !0, "assign");
    a.wa++;
    lo(a.m);
    u.setTimeout(() => {
      if (a.v) {
        a.v = cc11001100_hook("a.v", !1, "assign");
        var b = cc11001100_hook("b", a.m, "var-init");
        const c = cc11001100_hook("c", b.j, "var-init");
        O(c, {
          top: cc11001100_hook("top", kd(b.v).y + "px", "object-key-init")
        });
        O(c, {
          position: cc11001100_hook("position", "absolute", "object-key-init")
        });
        jo(b);
      }
    }, Math.max(0, a.U));
  }
  class Ko extends Zn {
    constructor(a, b, c, d, e, f) {
      super(a, b);
      this.ga = cc11001100_hook("this.ga", f, "assign");
      this.fa = cc11001100_hook("this.fa", d, "assign");
      this.H = cc11001100_hook("this.H", !1, "assign");
      this.M = cc11001100_hook("this.M", null, "assign");
      this.aa = cc11001100_hook("this.aa", this.I = cc11001100_hook("this.I", this.ha = cc11001100_hook("this.ha", !1, "assign"), "assign"), "assign");
      this.G = cc11001100_hook("this.G", [], "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.wa = cc11001100_hook("this.wa", this.V = cc11001100_hook("this.V", this.l = cc11001100_hook("this.l", 0, "assign"), "assign"), "assign");
      this.B = cc11001100_hook("this.B", this.A = cc11001100_hook("this.A", this.X = cc11001100_hook("this.X", null, "assign"), "assign"), "assign");
      this.Z = cc11001100_hook("this.Z", u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || u.msRequestAnimationFrame, "assign");
      this.va = cc11001100_hook("this.va", !1, "assign");
      this.m = cc11001100_hook("this.m", new mo(b, a, e), "assign");
      this.xa = cc11001100_hook("this.xa", !1, "assign");
      this.R = cc11001100_hook("this.R", this.U = cc11001100_hook("this.U", 0, "assign"), "assign");
      this.K = cc11001100_hook("this.K", sb(c, 1, !1), "assign");
      this.Fa = cc11001100_hook("this.Fa", nb(c, Gk, 2), "assign");
      this.C = cc11001100_hook("this.C", 0, "assign");
    }
    ea(a) {
      a["sti-fill"] = cc11001100_hook("a[\"sti-fill\"]", b => {
        zo(this, b);
      }, "assign");
      a["i-no"] = cc11001100_hook("a[\"i-no\"]", () => {
        this.I = cc11001100_hook("this.I", !1, "assign");
        !this.xa && this.l && Io(this);
      }, "assign");
    }
  }
  ;
  class Lo extends im {
    constructor() {
      super();
      this.G = cc11001100_hook("this.G", !1, "assign");
      this.C = cc11001100_hook("this.C", null, "assign");
      this.L = cc11001100_hook("this.L", !1, "assign");
    }
    F(a) {
      this.G = cc11001100_hook("this.G", !!a.enableAma, "assign");
      var b = cc11001100_hook("b", a.amaConfig, "var-init");
      if (b) try {
        var c = cc11001100_hook("c", Hk(b), "var-init");
      } catch (d) {
        c = cc11001100_hook("c", null, "assign");
      } else c = cc11001100_hook("c", null, "assign");
      this.C = cc11001100_hook("this.C", c, "assign");
      Array.isArray(a.fillMessage) && (this.L = cc11001100_hook("this.L", !0, "assign"));
      return !0;
    }
  }
  ;
  class Mo {
    verifyAndProcessConfig(a, b, c) {
      var d = cc11001100_hook("d", ue(a), "var-init");
      if (d.wasReactiveAdConfigReceived[9]) return !1;
      const e = cc11001100_hook("e", new Lo(), "var-init");
      if (!hm(e, b)) return !1;
      d.wasReactiveAdConfigReceived[9] = cc11001100_hook("d.wasReactiveAdConfigReceived[9]", !0, "assign");
      if (!e.l && !wo(R(yo), c)) return !1;
      b = cc11001100_hook("b", yc(document, "INS"), "assign");
      b.className = cc11001100_hook("b.className", "adsbygoogle", "assign");
      O(b, {
        display: cc11001100_hook("display", "none", "object-key-init")
      });
      a.document.documentElement.appendChild(b);
      c = cc11001100_hook("c", e.B || {}, "assign");
      c.google_ad_client = cc11001100_hook("c.google_ad_client", e.m, "assign");
      c.google_ad_height = cc11001100_hook("c.google_ad_height", T(a).clientHeight || 0, "assign");
      c.google_ad_width = cc11001100_hook("c.google_ad_width", T(a).clientWidth || 0, "assign");
      c.google_reactive_ad_format = cc11001100_hook("c.google_reactive_ad_format", 9, "assign");
      d = cc11001100_hook("d", new ao(), "assign");
      hb(d, 1, e.G);
      e.C && rb(d, 2, e.C);
      e.L && hb(d, 3, !0);
      a: {
        ab = cc11001100_hook("ab", !0, "assign");
        try {
          var f = cc11001100_hook("f", JSON.stringify(d.toJSON(), Gb), "var-init");
          break a;
        } finally {
          ab = cc11001100_hook("ab", !1, "assign");
        }
        f = cc11001100_hook("f", void 0, "assign");
      }
      c.google_rasc = cc11001100_hook("c.google_rasc", f, "assign");
      e.l && (c.google_adtest = cc11001100_hook("c.google_adtest", "on", "assign"));
      Jm(b, c, a);
      return !0;
    }
  }
  ;
  var Po = cc11001100_hook("Po", class extends Zn {
    constructor(a, b) {
      super(a, b.m);
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    ea(a) {
      a.dismiss = cc11001100_hook("a.dismiss", () => {
        var b = cc11001100_hook("b", this.l, "var-init");
        No(b, -30);
        Oo(b, "dismissed");
      }, "assign");
    }
  }, "var-init");
  var Ro = cc11001100_hook("Ro", (a, b) => {
    if (!a.body) return null;
    const c = cc11001100_hook("c", new Qo(), "var-init");
    c.apply(a, b);
    return () => {
      P(a.body, {
        filter: cc11001100_hook("filter", c.j, "object-key-init"),
        webkitFilter: cc11001100_hook("webkitFilter", c.j, "object-key-init"),
        overflow: cc11001100_hook("overflow", c.m, "object-key-init"),
        position: cc11001100_hook("position", c.v, "object-key-init"),
        top: cc11001100_hook("top", c.A, "object-key-init")
      });
      b.scrollTo(0, c.l);
    };
  }, "var-init");
  class Qo {
    constructor() {
      this.j = cc11001100_hook("this.j", this.A = cc11001100_hook("this.A", this.v = cc11001100_hook("this.v", this.m = cc11001100_hook("this.m", null, "assign"), "assign"), "assign"), "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
    }
    apply(a, b) {
      this.m = cc11001100_hook("this.m", a.body.style.overflow, "assign");
      this.v = cc11001100_hook("this.v", a.body.style.position, "assign");
      this.A = cc11001100_hook("this.A", a.body.style.top, "assign");
      this.j = cc11001100_hook("this.j", a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter, "assign");
      this.l = cc11001100_hook("this.l", U(b), "assign");
      P(a.body, "top", -this.l + "px");
    }
  }
  ;
  function So(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.j, "var-init");
    if (c) if (b) {
      b = cc11001100_hook("b", a.B, "assign");
      if (null == b.j) {
        var d = cc11001100_hook("d", b.l, "var-init");
        const e = cc11001100_hook("e", d.j.nextRestrictionId++, "var-init");
        d.j.maxZIndexRestrictions[e] = cc11001100_hook("d.j.maxZIndexRestrictions[e]", 2147483646, "assign");
        bn(d);
        b.j = cc11001100_hook("b.j", e, "assign");
      }
      O(c, {
        display: cc11001100_hook("display", "block", "object-key-init")
      });
      a.A.body && !a.v && (a.v = cc11001100_hook("a.v", Ro(a.A, a.l), "assign"));
      c.setAttribute("tabindex", "0");
      c.setAttribute("aria-hidden", "false");
      a.A.body.setAttribute("aria-hidden", "true");
    } else b = cc11001100_hook("b", a.B, "assign"), null != b.j && (d = cc11001100_hook("d", b.l, "assign"), delete d.j.maxZIndexRestrictions[b.j], bn(d), b.j = cc11001100_hook("b.j", null, "assign")), O(c, {
      display: cc11001100_hook("display", "none", "object-key-init")
    }), a.v && (a.v(), a.v = cc11001100_hook("a.v", null, "assign")), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true");
  }
  function To(a) {
    cc11001100_hook("a", a, "function-parameter");
    So(a, !1);
    const b = cc11001100_hook("b", a.j, "var-init");
    b && (yn(a, c => {
      O(c, Uo);
      Ee(c);
    }, !0), a.m.setAttribute("width", ""), a.m.setAttribute("height", ""), P(a.m, Uo), P(a.m, Vo), P(b, Wo), P(b, {
      background: cc11001100_hook("background", "transparent", "object-key-init")
    }), O(b, {
      display: cc11001100_hook("display", "none", "object-key-init"),
      position: cc11001100_hook("position", "fixed", "object-key-init")
    }), Ee(b), Ee(a.m));
  }
  class Xo extends zn {
    constructor(a, b, c) {
      super(a, b, c);
      this.v = cc11001100_hook("this.v", null, "assign");
      this.A = cc11001100_hook("this.A", b.document, "assign");
      a = cc11001100_hook("a", new en(b), "assign");
      this.B = cc11001100_hook("this.B", new fn(a), "assign");
    }
  }
  var Wo = cc11001100_hook("Wo", {
      backgroundColor: cc11001100_hook("backgroundColor", "white", "object-key-init"),
      opacity: cc11001100_hook("opacity", "1", "object-key-init"),
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      left: cc11001100_hook("left", "0px", "object-key-init"),
      top: cc11001100_hook("top", "0px", "object-key-init"),
      margin: cc11001100_hook("margin", "0px", "object-key-init"),
      padding: cc11001100_hook("padding", "0px", "object-key-init"),
      display: cc11001100_hook("display", "none", "object-key-init"),
      zIndex: cc11001100_hook("zIndex", "2147483647", "object-key-init")
    }, "var-init"),
    Uo = cc11001100_hook("Uo", {
      width: cc11001100_hook("width", "100vw", "object-key-init"),
      height: cc11001100_hook("height", "100vh", "object-key-init")
    }, "var-init"),
    Vo = cc11001100_hook("Vo", {
      left: cc11001100_hook("left", "0", "object-key-init"),
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "0", "object-key-init")
    }, "var-init");
  class Yo extends Xo {
    constructor(a, b, c) {
      super(b, a, c);
      To(this);
    }
    Z(a) {
      return Of(a);
    }
  }
  ;
  function Zo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.match(Cc), "assign");
    const b = cc11001100_hook("b", a[6], "var-init");
    return (a[5] || "") + (b ? "?" + b : "") || "/";
  }
  function $o(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b ? a.j = cc11001100_hook("a.j", new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig"), "assign") : a.j = cc11001100_hook("a.j", null, "assign");
  }
  function ap(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (!c) return !1;
    switch (b.target) {
      case "_top":
      case "_parent":
        break;
      case "":
      case "_self":
        if (e) return !1;
        break;
      default:
        return !1;
    }
    return !d || bp(a, d) && Zo(c) == a.v ? !1 : !0;
  }
  function bp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.replace(cp, "") == a.m.replace(cp, "");
  }
  function dp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (sa(["data-google-vignette", "data-google-interstitial"], f => "false" === b.getAttribute(f) || !1)) return !1;
    const d = cc11001100_hook("d", b.href, "var-init"),
      e = cc11001100_hook("e", d && (d.match(Cc)[3] || null), "var-init");
    if (!ap(a, b, d, e, c)) return !1;
    a.l = cc11001100_hook("a.l", !!e && bp(a, e), "assign");
    return a.l || !c && !Cj(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d);
  }
  function ep(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!b || !a.j) return [];
    var c = cc11001100_hook("c", [], "var-init");
    vm(b, c, !0, !0);
    b = cc11001100_hook("b", c.join(""), "assign");
    b = cc11001100_hook("b", b.replace(wm, " ").replace(xm, ""), "assign");
    b = cc11001100_hook("b", b.replace(ym, ""), "assign");
    b = cc11001100_hook("b", b.replace(zm, " "), "assign");
    " " != b && (b = cc11001100_hook("b", b.replace(Am, ""), "assign"));
    if (!b) return [];
    a = cc11001100_hook("a", b.match(a.j), "assign");
    b = cc11001100_hook("b", [], "assign");
    for (c = cc11001100_hook("c", 0, "assign"); a && c < a.length; c++) {
      const d = cc11001100_hook("d", a[c].toLowerCase(), "var-init");
      0 <= oa(b, d) || b.push(d);
    }
    return b;
  }
  class fp {
    constructor(a) {
      this.j = cc11001100_hook("this.j", null, "assign");
      this.m = cc11001100_hook("this.m", a.match(Cc)[3] || "", "assign");
      this.v = cc11001100_hook("this.v", Zo(a), "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
  }
  var cp = cc11001100_hook("cp", /^(www\.|m\.|mobile\.)*/i, "var-init");
  function gp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j?.setAttribute("data-vignette-loaded", "true");
  }
  function hp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.Ya && (b.qid = cc11001100_hook("b.qid", a.Ya, "assign"));
    a.xa && (b.eid = cc11001100_hook("b.eid", a.xa, "assign"));
    a.ga && (b.lnk = cc11001100_hook("b.lnk", a.ga.substring(0, 100), "assign"), a.B.l || (b.inter = cc11001100_hook("b.inter", "1", "assign")));
    const d = cc11001100_hook("d", Id(), "var-init");
    d && (b.ns = cc11001100_hook("b.ns", String(d), "assign"));
    b.fs = cc11001100_hook("b.fs", String(Hd() - a.A), "assign");
    b.req = cc11001100_hook("b.req", a.F.src, "assign");
    b.ptt = cc11001100_hook("b.ptt", 9, "assign");
    null != a.G && (b.comm = cc11001100_hook("b.comm", !0, "assign"));
    Ed(a.Pa, "ia_evt", b, !0, c);
  }
  function ip(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.G && (Xl(a.G).then(() => {
      gp(a.M);
      jp(a);
    }), Yl(a.G).then(() => void kp(a)), Zl(a.G).then(() => {
      a.V = cc11001100_hook("a.V", !0, "assign");
    }));
  }
  function jp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l || (a.l = cc11001100_hook("a.l", Hd(), "assign"), lp(a), hp(a, {
      aflvr: cc11001100_hook("aflvr", !0, "object-key-init"),
      al: cc11001100_hook("al", a.l - a.A, "object-key-init")
    }, .01));
  }
  function kp(a) {
    cc11001100_hook("a", a, "function-parameter");
    hp(a, {
      dis: cc11001100_hook("dis", Date.now() - a.C, "object-key-init"),
      dha: cc11001100_hook("dha", Number(a.aa), "object-key-init")
    }, .01);
    if (a.aa) mp(a) ? a.j.history.back() : np(a);else if (u.setTimeout(() => {
      np(a);
    }, 1E3), a.m) {
      var b = cc11001100_hook("b", Date.now(), "var-init");
      a.j.addEventListener("pagehide", () => {
        hp(a, {
          pg_hid: cc11001100_hook("pg_hid", Date.now() - b, "object-key-init")
        }, .01);
      });
      a.X && (a.fa = cc11001100_hook("a.fa", !1, "assign"));
      op(a, a.m.href);
    }
  }
  function lp(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.v) {
      a.v = cc11001100_hook("a.v", a.J.O(527, c => {
        pp(a, c);
      }), "assign");
      if (null !== a.v) {
        const c = cc11001100_hook("c", a.v, "var-init");
        G(a.j.document, "click", d => {
          c(d);
        }, Qb);
      }
      var b = cc11001100_hook("b", a.j.frames, "var-init");
      for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) try {
        a.ab(b[c].frameElement) || G(b[c].document, "click", a.v, Qb);
      } catch (d) {}
    }
  }
  function mp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 !== a.j.location.hash.indexOf("google_vignette");
  }
  function np(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.C && (a.va = cc11001100_hook("a.va", !0, "assign"), a.v && (I(a.j.document, "click", a.v), a.v = cc11001100_hook("a.v", null, "assign")), a.I && a.I.parentNode && (a.I.parentNode.removeChild(a.I), a.I = cc11001100_hook("a.I", null, "assign")), a.H && a.H.parentNode && (a.H.parentNode.removeChild(a.H), a.H = cc11001100_hook("a.H", null, "assign")), So(a.M, !1), a.Za());
  }
  function op(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.j.location, "assign");
    b = cc11001100_hook("b", Gc(b, Fc) || bc, "assign");
    if (b instanceof ac) var c = cc11001100_hook("c", b instanceof ac && b.constructor === ac ? b.j : "type_error:SafeUrl", "var-init");else {
      b: {
        try {
          c = cc11001100_hook("c", new URL(b), "assign");
        } catch (d) {
          c = cc11001100_hook("c", "https:", "assign");
          break b;
        }
        c = cc11001100_hook("c", c.protocol, "assign");
      }
      c = cc11001100_hook("c", "javascript:" !== c ? b : void 0, "assign");
    }
    void 0 !== c && a.replace(c);
  }
  function qp(a) {
    cc11001100_hook("a", a, "function-parameter");
    mp(a) || (a.j.location.hash = cc11001100_hook("a.j.location.hash", "google_vignette", "assign"));
    a.X = cc11001100_hook("a.X", a.J.O(526, () => {
      a.fa && (mp(a) ? (hp(a, {
        fnv: cc11001100_hook("fnv", 1, "object-key-init")
      }, .01), op(a, a.m.href)) : (a.rb(), np(a)));
    }), "assign");
    u.setTimeout(ja(G, a.j, "hashchange", a.X), 0);
  }
  function rp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Hd(), "var-init"),
      d = cc11001100_hook("d", !ue(a.j).wasReactiveAdVisible[9], "var-init"),
      e = cc11001100_hook("e", ep(a.B, b), "var-init"),
      f = cc11001100_hook("f", .05 > Math.abs(ze(a.j) - 1), "var-init");
    b = cc11001100_hook("b", a.K.width < a.K.height === ye(a.j), "assign");
    if (864E5 > c - a.A && a.U && !a.V && !mp(a) && a.l && (a.Fa || d) && !e.length && f && b) b = cc11001100_hook("b", null, "assign");else {
      var g = cc11001100_hook("g", new Vd(), "var-init");
      c = cc11001100_hook("c", D(g, 1, c, 0), "assign");
      c = cc11001100_hook("c", D(c, 2, 864E5, 0), "assign");
      c = cc11001100_hook("c", D(c, 3, a.U, !1), "assign");
      c = cc11001100_hook("c", D(c, 4, a.V, !1), "assign");
      c = cc11001100_hook("c", D(c, 5, mp(a), !1), "assign");
      c = cc11001100_hook("c", D(c, 6, !!a.l, !1), "assign");
      a = cc11001100_hook("a", D(c, 7, a.Fa, !1), "assign");
      d = cc11001100_hook("d", D(a, 8, !d, !1), "assign");
      if (null == e) d = cc11001100_hook("d", hb(d, 9, bb), "assign");else {
        a = cc11001100_hook("a", B(e), "assign");
        if (!(a & 4)) {
          if (a & 2 || Object.isFrozen(e)) e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign");
          for (c = cc11001100_hook("c", 0, "assign"); c < e.length; c++) e[c] = cc11001100_hook("e[c]", e[c], "assign");
          Ta(e, a | 5);
        }
        d = cc11001100_hook("d", hb(d, 9, e), "assign");
      }
      f = cc11001100_hook("f", D(d, 10, f, !1), "assign");
      b = cc11001100_hook("b", D(f, 11, b, !1), "assign");
    }
    return b;
  }
  function sp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Kc("LINK", a.j.document), "assign");
    a.setAttribute("rel", c);
    a.setAttribute("href", b);
    return a;
  }
  function tp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.I = cc11001100_hook("a.I", sp(a, b, "prerender"), "assign");
    a.H = cc11001100_hook("a.H", sp(a, b, "prefetch"), "assign");
    a.j.document.body.appendChild(a.I);
    a.j.document.body.appendChild(a.H);
  }
  function up(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (b = cc11001100_hook("b", b.target, "assign"); b;) {
      if ("nodeName" in b && "A" === b.nodeName) {
        if (dp(a.B, b, b.ownerDocument !== a.j.document)) return b;
        break;
      }
      b = cc11001100_hook("b", "parentElement" in b ? b.parentElement : null, "assign");
    }
    return null;
  }
  function pp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!b || b.defaultPrevented || a.C || a.L) {
      var c = cc11001100_hook("c", ee(be(1), a.A), "var-init");
      a.l && hb(c, 4, a.l);
    } else if (a.m) c = cc11001100_hook("c", ee(be(2), a.A), "assign"), a.l && hb(c, 4, a.l);else if (c = cc11001100_hook("c", up(a, b), "assign")) {
      var d = cc11001100_hook("d", rp(a, c), "var-init");
      d ? (vp(a, c, !1), c = cc11001100_hook("c", de(ee(be(4), a.A), d), "assign"), a.l && hb(c, 4, a.l)) : (a.m = cc11001100_hook("a.m", c, "assign"), ad(b), b.preventDefault = cc11001100_hook("b.preventDefault", () => b && (b.preventDefaultTriggered = cc11001100_hook("b.preventDefaultTriggered", !0, "assign")), "assign"), c = cc11001100_hook("c", ee(be(5), a.A), "assign"), a.l && hb(c, 4, a.l), u.setTimeout(x(a.mb, a, b), 0));
    } else c = cc11001100_hook("c", ee(be(3), a.A), "assign"), a.l && hb(c, 4, a.l);
  }
  function vp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.j, "var-init");
    var e = cc11001100_hook("e", ue(d), "var-init");
    const f = cc11001100_hook("f", a.K.width < a.K.height !== ye(a.j), "var-init");
    e = cc11001100_hook("e", {
      zm: cc11001100_hook("zm", Number(.05 > Math.abs(ze(d) - 1)), "object-key-init"),
      sz: cc11001100_hook("sz", Number(f), "object-key-init"),
      fc: cc11001100_hook("fc", Number(a.U), "object-key-init"),
      vp: cc11001100_hook("vp", Number(mp(a)), "object-key-init"),
      al: cc11001100_hook("al", Number(!!a.l), "object-key-init"),
      fsi: cc11001100_hook("fsi", Number(!!e.wasReactiveAdVisible[9]), "object-key-init"),
      ag: cc11001100_hook("ag", Number(864E5 > Hd() - a.A), "object-key-init")
    }, "assign");
    c && (e.wsdojl = cc11001100_hook("e.wsdojl", !0, "assign"));
    f && (e.rs_sz = cc11001100_hook("e.rs_sz", `${a.K.width}x${a.K.height}`, "assign"), e.cr_sz = cc11001100_hook("e.cr_sz", `${d.innerWidth}x${d.innerHeight}`, "assign"));
    b = cc11001100_hook("b", ep(a.B, b), "assign");
    b.length && (e.sw = cc11001100_hook("e.sw", b.join(), "assign"));
    a.ha && (e.ts = cc11001100_hook("e.ts", a.ha, "assign"));
    hp(a, e, .01);
  }
  var wp = cc11001100_hook("wp", class extends Yn {
    constructor(a, b, c, d, e, f) {
      var g = cc11001100_hook("g", Ri, "var-init"),
        h = cc11001100_hook("h", wh(sh) && !wh(qh), "var-init");
      super(a, b, c, g, {
        fullscreenApi: cc11001100_hook("fullscreenApi", h, "object-key-init")
      });
      this.M = cc11001100_hook("this.M", d, "assign");
      this.K = cc11001100_hook("this.K", e, "assign");
      this.l = cc11001100_hook("this.l", NaN, "assign");
      this.va = cc11001100_hook("this.va", !1, "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
      this.aa = cc11001100_hook("this.aa", !1, "assign");
      this.U = cc11001100_hook("this.U", !0, "assign");
      this.V = cc11001100_hook("this.V", !1, "assign");
      this.fa = cc11001100_hook("this.fa", !0, "assign");
      this.ga = cc11001100_hook("this.ga", null, "assign");
      this.C = cc11001100_hook("this.C", 0, "assign");
      this.v = cc11001100_hook("this.v", this.I = cc11001100_hook("this.I", this.H = cc11001100_hook("this.H", null, "assign"), "assign"), "assign");
      this.X = cc11001100_hook("this.X", void 0, "assign");
      this.ha = cc11001100_hook("this.ha", null, "assign");
      this.xa = cc11001100_hook("this.xa", f.i_expid ?? null, "assign");
      this.A = cc11001100_hook("this.A", Hd(), "assign");
      this.Fa = cc11001100_hook("this.Fa", "true" === f["i-fvs"], "assign");
      this.Ya = cc11001100_hook("this.Ya", f.qid ?? null, "assign");
      this.B = cc11001100_hook("this.B", new fp(a.location.href), "assign");
      this.kb = cc11001100_hook("this.kb", "true" === f.iobs && "IntersectionObserver" in this.j, "assign");
      this.rb = cc11001100_hook("this.rb", Ob(() => void hp(this, {
        tth: cc11001100_hook("tth", Date.now() - this.C, "object-key-init")
      }, .01)), "assign");
      $o(this.B, f.stop_word?.split(";") ?? null);
      this.G = cc11001100_hook("this.G", h ? bm(a, b.contentWindow, c, g) : null, "assign");
      ip(this);
      lp(this);
    }
    ea(a, b) {
      a["i-blur"] = cc11001100_hook("a[\"i-blur\"]", () => {
        this.aa = cc11001100_hook("this.aa", !0, "assign");
        this.X && (this.fa = cc11001100_hook("this.fa", !0, "assign"));
      }, "assign");
      a["i-no"] = cc11001100_hook("a[\"i-no\"]", c => {
        this.U = cc11001100_hook("this.U", !1, "assign");
        this.ha = cc11001100_hook("this.ha", c.i_tslv ? c.i_tslv : null, "assign");
      }, "assign");
      b.fullscreenApi || (a["i-adframe-load"] = cc11001100_hook("a[\"i-adframe-load\"]", () => {
        gp(this.M);
        const c = cc11001100_hook("c", R(vh).l(uh.j, uh.defaultValue), "var-init");
        0 < c ? setTimeout(() => jp(this), c) : jp(this);
      }, "assign"), a["i-dismiss"] = cc11001100_hook("a[\"i-dismiss\"]", () => {
        kp(this);
      }, "assign"), a.i_iif = cc11001100_hook("a.i_iif", () => {
        this.V = cc11001100_hook("this.V", !0, "assign");
      }, "assign"));
    }
    Ca() {
      super.Ca();
      mp(this) && op(this, this.m.href);
      this.v && (I(this.j.document, "click", this.v), this.v = cc11001100_hook("this.v", null, "assign"));
    }
    Za() {}
    ab() {
      return !1;
    }
    mb(a) {
      if (this.C || !this.m || this.L) Wd(1);else {
        a = cc11001100_hook("a", !!a.preventDefaultTriggered, "assign");
        var b = cc11001100_hook("b", dp(this.B, this.m, this.m.ownerDocument !== this.j.document), "var-init"),
          c = cc11001100_hook("c", rp(this, this.m), "var-init");
        a || !b || c ? (vp(this, this.m, a), b = cc11001100_hook("b", Zd(Yd(Wd(2), a), b), "assign"), c && rb(b, 4, c), a ? this.m = cc11001100_hook("this.m", null, "assign") : op(this, this.m.href)) : this.bb() ? (hp(this, {
          lif: cc11001100_hook("lif", Hd(), "object-key-init"),
          lase: cc11001100_hook("lase", this.l, "object-key-init"),
          latt: cc11001100_hook("latt", !!this.M.j?.getAttribute("data-vignette-loaded"), "object-key-init"),
          t: cc11001100_hook("t", 9, "object-key-init")
        }, .1), this.C = cc11001100_hook("this.C", Date.now(), "assign"), $d(ae(Zd(Yd(Wd(4), a), b), !!this.M.j?.getAttribute("data-vignette-loaded")), this.C), ue(this.j).wasReactiveAdVisible[8] = cc11001100_hook("ue(this.j).wasReactiveAdVisible[8]", !0, "assign"), this.ga = cc11001100_hook("this.ga", this.m.href.substring(0, 100), "assign"), this.kb || (this.G ? u.IntersectionObserver || Tl(this.G.Ib, "fullscreen", {
          eventType: cc11001100_hook("eventType", "visible", "object-key-init")
        }, "*") : this.F.contentWindow.postMessage(JSON.stringify({
          msg_type: cc11001100_hook("msg_type", "i-view", "object-key-init")
        }), "*")), tp(this, this.m.href), qp(this), G(this.j, "pagehide", this.J.O(528, () => {
          this.va || hp(this, {
            ttr: cc11001100_hook("ttr", Date.now() - this.C, "object-key-init")
          }, .01);
          np(this);
        })), So(this.M, !0)) : (Zd(Yd(Wd(3), a), b), op(this, this.m.href));
      }
    }
    bb() {
      return !0;
    }
  }, "var-init");
  function xp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b || a.j.document, "assign");
    if (!b.getElementById("vignette-style-id")) {
      var c = cc11001100_hook("c", qc(b).createElement("STYLE"), "var-init");
      c.id = cc11001100_hook("c.id", "vignette-style-id", "assign");
      c.textContent = cc11001100_hook("c.textContent", "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}", "assign");
      b.head.appendChild(c);
      a.R.push(c);
    }
  }
  function yp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    let d = cc11001100_hook("d", 0, "var-init");
    for (let e = cc11001100_hook("e", b.links.length, "var-init"); 0 <= e; e--) {
      const f = cc11001100_hook("f", b.links[e], "var-init");
      f && (f.classList.remove("google_vignette_inst"), dp(a.B, f, c) && !ep(a.B, f).length && (d++, f.classList.add("google_vignette_inst")));
    }
    return d;
  }
  class zp extends wp {
    constructor(a, b, c, d, e, f, g) {
      super(a, b, Si, new Yo(a, b, e), d, g);
      this.hb = cc11001100_hook("this.hb", f, "assign");
      this.R = cc11001100_hook("this.R", [], "assign");
      this.Z = cc11001100_hook("this.Z", 0, "assign");
      this.Wa = cc11001100_hook("this.Wa", yi(this.j.location, "google_ia_debug"), "assign");
      this.gb = cc11001100_hook("this.gb", c, "assign");
      this.Wa && (this.wa(), this.Z = cc11001100_hook("this.Z", u.setInterval(x(this.wa, this), 5E3), "assign"));
    }
    Za() {
      if (this.Wa) {
        for (let b = cc11001100_hook("b", 0, "var-init"); b < this.R.length; ++b) {
          var a = cc11001100_hook("a", this.R[b], "var-init");
          (a = cc11001100_hook("a", a.ownerNode || a.owningElement || a, "assign")) && a.parentNode && a.parentNode.removeChild(a);
        }
        this.R = cc11001100_hook("this.R", [], "assign");
        this.Z && u.clearInterval(this.Z);
      }
    }
    wa() {
      let a = cc11001100_hook("a", yp(this, this.j.document, !1), "var-init");
      xp(this);
      var b = cc11001100_hook("b", this.j.frames, "var-init");
      for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) try {
        a += cc11001100_hook("a", yp(this, b[c].document, !0), "assign"), xp(this, b[c].document);
      } catch (d) {}
      b = cc11001100_hook("b", em(this.j, 1), "assign");
      null != b && b.setLinksInstrumented(a);
    }
    bb() {
      return this.gb || xo(R(yo), this.hb);
    }
    ab(a) {
      return /aswift_[0-9]+/.test(a.id);
    }
  }
  ;
  function Ap(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l.document.createElement("span"), "var-init"),
      c = cc11001100_hook("c", Math.round((Bp(a) - 50) / 2), "var-init");
    O(b, {
      background: cc11001100_hook("background", "#FAFAFA", "object-key-init"),
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      left: cc11001100_hook("left", c + "px", "object-key-init"),
      right: cc11001100_hook("right", c + "px", "object-key-init"),
      top: cc11001100_hook("top", Cp(a) + 5 + "px", "object-key-init"),
      "box-shadow": cc11001100_hook("box-shadow", "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px", "object-key-init")
    });
    b.className = cc11001100_hook("b.className", `${a.m}-side-rail-dismiss-btn`, "assign");
    b.appendChild(Dp(a));
    const d = cc11001100_hook("d", () => {
      a.C();
    }, "var-init");
    G(b, "click", d);
    Q(a, () => I(b, "click", d));
    return b;
  }
  function Cp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Number(od(a.j).height || a.j.height);
  }
  function Bp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Number(od(a.j).width || a.j.width);
  }
  function Dp(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.l.document, "var-init");
    const c = cc11001100_hook("c", b.createElementNS("http://www.w3.org/2000/svg", "svg"), "var-init");
    O(c, {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "0px", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init"),
      width: cc11001100_hook("width", "50px", "object-key-init"),
      height: cc11001100_hook("height", "30px", "object-key-init"),
      "margin-top": cc11001100_hook("margin-top", "-5px", "object-key-init"),
      transform: cc11001100_hook("transform", "none", "object-key-init"),
      "pointer-events": cc11001100_hook("pointer-events", "initial", "object-key-init")
    });
    var d = cc11001100_hook("d", b.createElementNS("http://www.w3.org/2000/svg", "defs"), "var-init"),
      e = cc11001100_hook("e", b.createElementNS("http://www.w3.org/2000/svg", "filter"), "var-init");
    a = cc11001100_hook("a", `${a.m}-side-rail-drop-shadow`, "assign");
    e.setAttribute("id", a);
    e.setAttribute("filterUnits", "userSpaceOnUse");
    e.setAttribute("color-interpolation-filters", "sRGB");
    var f = cc11001100_hook("f", b.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer"), "var-init");
    f.setAttribute("in", "SourceAlpha");
    f.setAttribute("result", "TransferredAlpha");
    var g = cc11001100_hook("g", b.createElementNS("http://www.w3.org/2000/svg", "feFuncR"), "var-init");
    g.setAttribute("type", "discrete");
    g.setAttribute("tableValues", "0.5");
    f.appendChild(g);
    g = cc11001100_hook("g", b.createElementNS("http://www.w3.org/2000/svg", "feFuncG"), "assign");
    g.setAttribute("type", "discrete");
    g.setAttribute("tableValues", "0.5");
    f.appendChild(g);
    g = cc11001100_hook("g", b.createElementNS("http://www.w3.org/2000/svg", "feFuncB"), "assign");
    g.setAttribute("type", "discrete");
    g.setAttribute("tableValues", "0.5");
    f.appendChild(g);
    e.appendChild(f);
    f = cc11001100_hook("f", b.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur"), "assign");
    f.setAttribute("in", "TransferredAlpha");
    f.setAttribute("stdDeviation", "2");
    e.appendChild(f);
    f = cc11001100_hook("f", b.createElementNS("http://www.w3.org/2000/svg", "feOffset"), "assign");
    f.setAttribute("dx", "0");
    f.setAttribute("dy", "0");
    f.setAttribute("result", "offsetblur");
    e.appendChild(f);
    f = cc11001100_hook("f", b.createElementNS("http://www.w3.org/2000/svg", "feMerge"), "assign");
    f.appendChild(b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
    g = cc11001100_hook("g", b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"), "assign");
    g.setAttribute("in", "SourceGraphic");
    f.appendChild(g);
    e.appendChild(f);
    d.appendChild(e);
    c.appendChild(d);
    d = cc11001100_hook("d", b.createElementNS("http://www.w3.org/2000/svg", "path"), "assign");
    d.setAttribute("d", "M5,5 L5,17 A8,8 0 0,0 13,25 L37,25 A8,8 0 0,0 45,17 L45,5 Z");
    d.setAttribute("stroke", "#FAFAFA");
    d.setAttribute("stroke-width", "1");
    d.setAttribute("fill", "#FAFAFA");
    d.style.setProperty("filter", `url(#${a})`);
    c.appendChild(d);
    d = cc11001100_hook("d", b.createElementNS("http://www.w3.org/2000/svg", "rect"), "assign");
    d.setAttribute("x", "0");
    d.setAttribute("y", "0");
    d.setAttribute("width", "50");
    d.setAttribute("height", "5");
    d.style.setProperty("fill", "#FAFAFA");
    c.appendChild(d);
    d = cc11001100_hook("d", b.createElementNS("http://www.w3.org/2000/svg", "g"), "assign");
    d.setAttribute("stroke", "#616161");
    d.setAttribute("stroke-width", "2px");
    d.setAttribute("stroke-linecap", "square");
    e = cc11001100_hook("e", b.createElementNS("http://www.w3.org/2000/svg", "line"), "assign");
    e.setAttribute("x1", "18");
    e.setAttribute("y1", "18");
    e.setAttribute("x2", "25");
    e.setAttribute("y2", "12");
    d.appendChild(e);
    b = cc11001100_hook("b", b.createElementNS("http://www.w3.org/2000/svg", "line"), "assign");
    b.setAttribute("x1", "25");
    b.setAttribute("y1", "12");
    b.setAttribute("x2", "32");
    b.setAttribute("y2", "18");
    d.appendChild(b);
    c.appendChild(d);
    return c;
  }
  var Ep = cc11001100_hook("Ep", class extends ge {
    constructor(a, b, c, d, e) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.v = cc11001100_hook("this.v", c, "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
      this.C = cc11001100_hook("this.C", e, "assign");
      a = cc11001100_hook("a", this.l.document.createElement("span"), "assign");
      a.className = cc11001100_hook("a.className", `${this.m}-side-rail-edge`, "assign");
      O(a, {
        background: cc11001100_hook("background", "#FAFAFA", "object-key-init"),
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        left: cc11001100_hook("left", "0px", "object-key-init"),
        top: cc11001100_hook("top", Cp(this) + "px", "object-key-init"),
        width: cc11001100_hook("width", Bp(this) + "px", "object-key-init"),
        height: cc11001100_hook("height", "5px", "object-key-init"),
        "box-shadow": cc11001100_hook("box-shadow", "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px", "object-key-init")
      });
      this.A = cc11001100_hook("this.A", a, "assign");
      this.B = cc11001100_hook("this.B", Ap(this), "assign");
      this.v.appendChild(this.A);
      this.v.appendChild(this.B);
    }
  }, "var-init");
  function Oo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    "dismissed" !== a.v && (a.v = cc11001100_hook("a.v", b, "assign"), a.j.setAttribute("data-side-rail-status", a.v));
  }
  function Fp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("dismissed" === a.v) var c = cc11001100_hook("c", !1, "var-init");else {
      c = cc11001100_hook("c", a.j, "assign");
      var d = cc11001100_hook("d", a.l, "var-init");
      var e = cc11001100_hook("e", a.position, "var-init");
      var f = cc11001100_hook("f", a.l.innerWidth, "var-init"),
        g = cc11001100_hook("g", a.l.innerHeight, "var-init"),
        h = cc11001100_hook("h", new Set([c]), "var-init"),
        l = cc11001100_hook("l", a.C.width + 15, "var-init"),
        k = cc11001100_hook("k", a.C.height + 35, "var-init");
      if (1200 > f || 650 > g) e = cc11001100_hook("e", null, "assign");else {
        var m = cc11001100_hook("m", ue(d).sideRailAvailableSpace, "var-init"),
          n = cc11001100_hook("n", {
            Y: cc11001100_hook("Y", d, "object-key-init"),
            P: cc11001100_hook("P", f, "object-key-init"),
            T: cc11001100_hook("T", g, "object-key-init"),
            yb: cc11001100_hook("yb", h, "object-key-init")
          }, "var-init"),
          q = cc11001100_hook("q", `f-${Em(n.P)}x${Em(n.T)}`, "var-init");
        if (!m.has(q)) {
          m.set(q, 0);
          ue(n.Y).sideRailProcessedFixedElements.clear();
          q = cc11001100_hook("q", new Set([...Array.from(n.Y.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...n.yb]), "assign");
          for (var r of Dm(n.Y)) Bm(r, q) || Im(r, m, n);
        }
        n = cc11001100_hook("n", [], "assign");
        q = cc11001100_hook("q", .9 * g, "assign");
        var t = cc11001100_hook("t", U(d), "var-init"),
          y = cc11001100_hook("y", r = cc11001100_hook("r", (g - q) / 2, "assign"), "var-init"),
          F = cc11001100_hook("F", q / 7, "var-init");
        for (let Ua = cc11001100_hook("Ua", 0, "var-init"); 8 > Ua; Ua++) {
          var H = cc11001100_hook("H", n, "var-init"),
            N = cc11001100_hook("N", H.push, "var-init");
          c: {
            var v = cc11001100_hook("v", y, "var-init");
            var A = cc11001100_hook("A", e, "var-init"),
              E = cc11001100_hook("E", m, "var-init"),
              L = cc11001100_hook("L", {
                Y: cc11001100_hook("Y", d, "object-key-init"),
                P: cc11001100_hook("P", f, "object-key-init"),
                T: cc11001100_hook("T", g, "object-key-init"),
                yb: cc11001100_hook("yb", h, "object-key-init")
              }, "var-init");
            const Z = cc11001100_hook("Z", Gm({
                position: cc11001100_hook("position", A, "object-key-init"),
                Ra: cc11001100_hook("Ra", v, "object-key-init"),
                P: cc11001100_hook("P", L.P, "object-key-init"),
                T: cc11001100_hook("T", L.T, "object-key-init")
              }), "var-init"),
              ea = cc11001100_hook("ea", Fm({
                position: cc11001100_hook("position", A, "object-key-init"),
                Ra: cc11001100_hook("Ra", v, "object-key-init"),
                scrollY: cc11001100_hook("scrollY", t, "object-key-init"),
                P: cc11001100_hook("P", L.P, "object-key-init"),
                T: cc11001100_hook("T", L.T, "object-key-init")
              }), "var-init");
            if (E.has(ea)) {
              v = cc11001100_hook("v", Hm(E.get(Z), E.get(ea)), "assign");
              break c;
            }
            const pb = cc11001100_hook("pb", "left" === A ? 20 : L.P - 20, "var-init");
            let Oa = cc11001100_hook("Oa", pb, "var-init");
            A = cc11001100_hook("A", .3 * L.P / 5 * ("left" === A ? 1 : -1), "assign");
            for (let Ei = cc11001100_hook("Ei", 0, "var-init"); 6 > Ei; Ei++) {
              const Xc = cc11001100_hook("Xc", lm(L.Y.document, Math.round(Oa), Math.round(v)), "var-init");
              var M = cc11001100_hook("M", Bm(Xc, L.yb), "var-init");
              const Fi = cc11001100_hook("Fi", Cm(Xc, L.Y), "var-init");
              if (!M && null !== Fi) {
                Im(Fi, E, L);
                E.delete(ea);
                break;
              }
              M || (M = cc11001100_hook("M", Xc.offsetHeight >= .25 * L.T, "assign"), M = cc11001100_hook("M", Xc.offsetWidth >= .9 * L.P && M, "assign"));
              if (M) E.set(ea, Math.round(Math.abs(Oa - pb) + 20));else if (Oa !== pb) Oa -= cc11001100_hook("Oa", A, "assign"), A /= cc11001100_hook("A", 2, "assign");else {
                E.set(ea, 0);
                break;
              }
              Oa += cc11001100_hook("Oa", A, "assign");
            }
            v = cc11001100_hook("v", Hm(E.get(Z), E.get(ea)), "assign");
          }
          N.call(H, v);
          y += cc11001100_hook("y", F, "assign");
        }
        d = cc11001100_hook("d", Math.round(q / 8), "assign");
        f = cc11001100_hook("f", Math.round(r), "assign");
        m = cc11001100_hook("m", [], "assign");
        g = cc11001100_hook("g", Array(n.length).fill(0), "assign");
        for (h = cc11001100_hook("h", 0, "assign"); h < n.length; h++) {
          for (; 0 !== m.length && n[m[m.length - 1]] >= n[h];) m.pop();
          g[h] = cc11001100_hook("g[h]", 0 === m.length ? 0 : m[m.length - 1] + 1, "assign");
          m.push(h);
        }
        m = cc11001100_hook("m", [], "assign");
        r = cc11001100_hook("r", n.length - 1, "assign");
        h = cc11001100_hook("h", Array(n.length).fill(0), "assign");
        for (q = cc11001100_hook("q", r, "assign"); 0 <= q; q--) {
          for (; 0 !== m.length && n[m[m.length - 1]] >= n[q];) m.pop();
          h[q] = cc11001100_hook("h[q]", 0 === m.length ? r : m[m.length - 1] - 1, "assign");
          m.push(q);
        }
        m = cc11001100_hook("m", null, "assign");
        for (r = cc11001100_hook("r", 0, "assign"); r < n.length; r++) if (q = cc11001100_hook("q", {
          position: cc11001100_hook("position", e, "object-key-init"),
          width: cc11001100_hook("width", Math.round(n[r]), "object-key-init"),
          height: cc11001100_hook("height", Math.round((h[r] - g[r] + 1) * d), "object-key-init"),
          yc: cc11001100_hook("yc", f + g[r] * d, "object-key-init")
        }, "assign"), q.width >= l && q.height >= k) {
          m = cc11001100_hook("m", q, "assign");
          break;
        }
        e = cc11001100_hook("e", m, "assign");
      }
      e ? (l = cc11001100_hook("l", Math.round(e.width - a.C.width - 15), "assign"), a.B = cc11001100_hook("a.B", Math.min(a.B ?? l, l), "assign"), a.A = cc11001100_hook("a.A", Math.round(e.yc), "assign"), O(c, {
        margin: cc11001100_hook("margin", "0px", "object-key-init"),
        padding: cc11001100_hook("padding", "0px", "object-key-init"),
        position: cc11001100_hook("position", "fixed", "object-key-init"),
        [a.position]: cc11001100_hook(a.position, a.B + "px", "object-key-init"),
        top: cc11001100_hook("top", a.A + "px", "object-key-init"),
        transition: cc11001100_hook("transition", "all 500ms ease-in", "object-key-init"),
        "z-index": cc11001100_hook("z-index", "1", "object-key-init")
      }), a.H && O(c, {
        "z-index": cc11001100_hook("z-index", "2147483647", "object-key-init"),
        overflow: cc11001100_hook("overflow", "visible", "object-key-init")
      }), c = cc11001100_hook("c", !0, "assign")) : c = cc11001100_hook("c", !1, "assign");
    }
    c ? Gp(a, b) : No(a, b);
  }
  function No(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    "displayed" === a.v && (O(a.j, {
      transition: cc11001100_hook("transition", "all 500ms ease-in", "object-key-init"),
      opacity: cc11001100_hook("opacity", "0", "object-key-init"),
      top: cc11001100_hook("top", a.A + b + "px", "object-key-init")
    }), clearTimeout(a.F), a.F = cc11001100_hook("a.F", setTimeout(() => {
      Oo(a, "idle");
      O(a.j, {
        display: cc11001100_hook("display", "none", "object-key-init")
      });
    }, 500), "assign"));
  }
  function Gp(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    "idle" === a.v && (O(a.j, {
      transition: cc11001100_hook("transition", "", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init"),
      opacity: cc11001100_hook("opacity", "0", "object-key-init"),
      top: cc11001100_hook("top", a.A - b + "px", "object-key-init")
    }), clearTimeout(a.F), a.F = cc11001100_hook("a.F", setTimeout(() => {
      Oo(a, "displayed");
      O(a.j, {
        transition: cc11001100_hook("transition", "all 500ms ease-in", "object-key-init"),
        opacity: cc11001100_hook("opacity", "1", "object-key-init"),
        top: cc11001100_hook("top", a.A + "px", "object-key-init")
      });
    }, 10), "assign"));
  }
  var Hp = cc11001100_hook("Hp", class extends zn {
    constructor(a, b, c, d, e) {
      var f = cc11001100_hook("f", Si, "var-init"),
        g = cc11001100_hook("g", wh(rh), "var-init");
      super(a, b, c);
      this.C = cc11001100_hook("this.C", e, "assign");
      this.H = cc11001100_hook("this.H", g, "assign");
      this.v = cc11001100_hook("this.v", "idle", "assign");
      this.A = cc11001100_hook("this.A", this.F = cc11001100_hook("this.F", 0, "assign"), "assign");
      this.B = cc11001100_hook("this.B", null, "assign");
      this.G = cc11001100_hook("this.G", 0, "assign");
      this.position = cc11001100_hook("this.position", 3 === d ? "left" : "right", "assign");
      new Ep(a, b, c, this.position, () => {
        No(this, -30);
        Oo(this, "dismissed");
      });
      Oo(this, "idle");
      O(c, {
        display: cc11001100_hook("display", "none", "object-key-init")
      });
      const h = cc11001100_hook("h", f.O(273, () => {
        Fp(this);
      }), "var-init");
      G(a, "load", h);
      Q(this, () => I(a, "load", h));
      const l = cc11001100_hook("l", f.O(267, () => {
        this.B = cc11001100_hook("this.B", null, "assign");
        Fp(this);
      }), "var-init");
      G(b, "resize", l);
      Q(this, () => I(b, "resize", l));
      const k = cc11001100_hook("k", f.O(268, Pb(() => {
        const m = cc11001100_hook("m", U(this.l), "var-init");
        Fp(this, this.C.height / 3 * Math.sign(this.G - m));
        this.G = cc11001100_hook("this.G", m, "assign");
      })), "var-init");
      G(b, "scroll", k, Rb);
      Q(this, () => I(b, "scroll", k));
    }
  }, "var-init");
  var Ip = cc11001100_hook("Ip", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    verifyAndProcessConfig(a, b) {
      if (3 !== this.j && 4 !== this.j) return !1;
      const c = cc11001100_hook("c", new im(), "var-init");
      if (!hm(c, b)) return !1;
      b = cc11001100_hook("b", a.document.createElement("ins"), "assign");
      b.className = cc11001100_hook("b.className", "adsbygoogle", "assign");
      a.document.body.appendChild(b);
      const d = cc11001100_hook("d", c.B || {}, "var-init");
      d.google_ad_client = cc11001100_hook("d.google_ad_client", c.m, "assign");
      d.google_ad_width = cc11001100_hook("d.google_ad_width", c.A, "assign");
      d.google_ad_height = cc11001100_hook("d.google_ad_height", c.v, "assign");
      d.google_reactive_ad_format = cc11001100_hook("d.google_reactive_ad_format", this.j, "assign");
      Jm(b, d, a);
      return !0;
    }
  }, "var-init");
  class Jp {
    verifyAndProcessConfig(a, b, c) {
      const d = cc11001100_hook("d", ue(a), "var-init");
      if (d.wasReactiveAdConfigReceived[8]) return !1;
      const e = cc11001100_hook("e", new im(), "var-init");
      if (!hm(e, b)) return !1;
      d.wasReactiveAdConfigReceived[8] = cc11001100_hook("d.wasReactiveAdConfigReceived[8]", !0, "assign");
      if (!e.l && !wo(R(yo), c)) return !1;
      b = cc11001100_hook("b", Kc("INS"), "assign");
      b.className = cc11001100_hook("b.className", "adsbygoogle", "assign");
      O(b, {
        display: cc11001100_hook("display", "none", "object-key-init")
      });
      a.document.documentElement.appendChild(b);
      c = cc11001100_hook("c", e.B || {}, "assign");
      c.google_ad_client = cc11001100_hook("c.google_ad_client", e.m, "assign");
      c.google_ad_width = cc11001100_hook("c.google_ad_width", e.A, "assign");
      c.google_ad_height = cc11001100_hook("c.google_ad_height", e.v, "assign");
      c.google_reactive_ad_format = cc11001100_hook("c.google_reactive_ad_format", 8, "assign");
      e.j && (c.google_reactive_fill_message = cc11001100_hook("c.google_reactive_fill_message", e.j, "assign"));
      e.l && (c.google_adtest = cc11001100_hook("c.google_adtest", "on", "assign"));
      Jm(b, c, a);
      return !0;
    }
  }
  ;
  class Kp {
    configProcessorForAdFormat(a) {
      switch (a) {
        case 1:
        case 2:
          return new Mm(a);
        case 3:
        case 4:
          return wh(th) ? new Ip(a) : null;
        case 8:
          return R(Jp);
        case 9:
          return R(Mo);
        default:
          return null;
      }
    }
    createAdSlot(a, b, c, d, e) {
      a: {
        var f = cc11001100_hook("f", b.google_reactive_ad_format, "var-init");
        switch (f) {
          case 1:
          case 2:
            e = cc11001100_hook("e", qm(a, f), "assign");
            c = cc11001100_hook("c", new Wn(c, a, e, d), "assign");
            new $n(a, c, b.google_reactive_fill_message);
            break a;
          case 3:
          case 4:
            new Po(a, new Hp(c, a, d, f, new kc(b.google_ad_width, b.google_ad_height)));
            break a;
          case 8:
            new zp(a, c, "on" == b.google_adtest, new kc(b.google_ad_width, b.google_ad_height), d, e, b.google_reactive_fill_message);
            break a;
          case 9:
            f = cc11001100_hook("f", b.google_rasc, "assign");
            if (void 0 === f || null === f) var g = cc11001100_hook("g", null, "var-init");else try {
              g = cc11001100_hook("g", bo(f), "assign");
            } catch (h) {
              Wi("rasf_fsi_ama", {}, .1), g = cc11001100_hook("g", null, "assign");
            }
            g = cc11001100_hook("g", g || new ao(), "assign");
            new Ko(a, c, g, "on" == b.google_adtest, d, e);
        }
      }
    }
  }
  ;
  class Lp {}
  ;
  function Mp(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", R(vh), "var-init");
    b.j = cc11001100_hook("b.j", (c, d) => ie(5, a, () => !1)(c, d, 1), "assign");
    b.l = cc11001100_hook("b.l", (c, d) => ie(6, a, () => 0)(c, d, 1), "assign");
    b.v = cc11001100_hook("b.v", (c, d) => ie(7, a, () => "")(c, d, 1), "assign");
    b.A = cc11001100_hook("b.A", (c, d) => ie(8, a, () => [])(c, d, 1), "assign");
    b.m = cc11001100_hook("b.m", () => {
      ie(15, a, () => {})(1);
    }, "assign");
  }
  ;
  function Np(a) {
    cc11001100_hook("a", a, "function-parameter");
    Si.Db(b => {
      b.shv = cc11001100_hook("b.shv", String(a), "assign");
      b.mjsv = cc11001100_hook("b.mjsv", "m202302210101", "assign");
      const c = cc11001100_hook("c", R(ke).j(), "var-init");
      u.google_ad_modifications || (u.google_ad_modifications = cc11001100_hook("u.google_ad_modifications", {}, "assign"));
      var d = cc11001100_hook("d", u.google_ad_modifications, "var-init");
      d.eids || (d.eids = cc11001100_hook("d.eids", [], "assign"));
      b.eid = cc11001100_hook("b.eid", c.concat(d.eids).join(","), "assign");
    });
  }
  ;
  var Op = cc11001100_hook("Op", "undefined" === typeof sttc ? void 0 : sttc, "var-init");
  function Pp() {
    var a = cc11001100_hook("a", Si, "var-init");
    try {
      return Ib(Op, Sd), new dm(JSON.parse(Op));
    } catch (b) {
      a.Qa(838, b instanceof Error ? b : Error(String(b)), void 0, c => {
        c.jspb = cc11001100_hook("c.jspb", String(Op), "assign");
      });
    }
    return new dm();
  }
  ;
  Ui(210, () => {
    var a = cc11001100_hook("a", Pp(), "var-init"),
      b = cc11001100_hook("b", C(a, 2), "var-init");
    Np(null == b ? "" : b);
    a = cc11001100_hook("a", sb(a, 6), "assign");
    Ib(gm, Td);
    gm = cc11001100_hook("gm", a, "assign");
    a = cc11001100_hook("a", u.ggeac || (u.ggeac = cc11001100_hook("u.ggeac", {}, "assign")), "assign");
    je(R(ke), a);
    Mp(a);
    R(Lp);
    R(vh).m();
    a = cc11001100_hook("a", new Kp(), "assign");
    {
      u.google_llp || (u.google_llp = cc11001100_hook("u.google_llp", {}, "assign"));
      b = cc11001100_hook("b", u.google_llp, "assign");
      let c = cc11001100_hook("c", b[1], "var-init");
      if (!c) {
        const {
          promise: d,
          resolve: e
        } = cc11001100_hook("", new Wl(), "var-init");
        c = cc11001100_hook("c", {
          promise: cc11001100_hook("promise", d, "object-key-init"),
          resolve: cc11001100_hook("resolve", e, "object-key-init")
        }, "assign");
        b[1] = cc11001100_hook("b[1]", c, "assign");
      }
      b = cc11001100_hook("b", c, "assign");
    }
    b.resolve(a);
  });
}).call(this, "[2021,\"r20230301\",\"r20110914\",null,null,null,null,\".google.cn\",null,null,null,null,[null,[]],null,null,null,null,-1,[44777876,44759842,44759927,44759876]]");