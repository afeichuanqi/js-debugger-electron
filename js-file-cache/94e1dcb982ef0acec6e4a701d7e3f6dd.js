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
  var na, oa;
  a: {
    for (var pa = cc11001100_hook("pa", ["CLOSURE_FLAGS"], "var-init"), qa = cc11001100_hook("qa", u, "var-init"), ra = cc11001100_hook("ra", 0, "var-init"); ra < pa.length; ra++) if (qa = cc11001100_hook("qa", qa[pa[ra]], "assign"), null == qa) {
      oa = cc11001100_hook("oa", null, "assign");
      break a;
    }
    oa = cc11001100_hook("oa", qa, "assign");
  }
  var sa = cc11001100_hook("sa", oa && oa[610401301], "var-init");
  na = cc11001100_hook("na", null != sa ? sa : !1, "assign");
  function ta() {
    var a = cc11001100_hook("a", u.navigator, "var-init");
    return a && (a = cc11001100_hook("a", a.userAgent, "assign")) ? a : "";
  }
  var ua;
  const va = cc11001100_hook("va", u.navigator, "var-init");
  ua = cc11001100_hook("ua", va ? va.userAgentData || null : null, "assign");
  function wa(a) {
    cc11001100_hook("a", a, "function-parameter");
    return na ? ua ? ua.brands.some(({
      brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1;
  }
  function y(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 != ta().indexOf(a);
  }
  ;
  function xa() {
    return na ? !!ua && 0 < ua.brands.length : !1;
  }
  function ya() {
    return xa() ? !1 : y("Trident") || y("MSIE");
  }
  function za() {
    !y("Safari") || Aa() || (xa() ? 0 : y("Coast")) || (xa() ? 0 : y("Opera")) || (xa() ? 0 : y("Edge")) || (xa() ? wa("Microsoft Edge") : y("Edg/")) || xa() && wa("Opera");
  }
  function Aa() {
    return xa() ? wa("Chromium") : (y("Chrome") || y("CriOS")) && !(xa() ? 0 : y("Edge")) || y("Silk");
  }
  ;
  function Ba(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Ca(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.length, "var-init"),
      d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Da(a, b) {
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
  function Ea(a, b) {
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
    return 0 <= Ba(a, b);
  }
  function Ha(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.length, "var-init");
    if (0 < b) {
      const c = cc11001100_hook("c", Array(b), "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c[d] = cc11001100_hook("c[d]", a[d], "assign");
      return c;
    }
    return [];
  }
  function Ia(a, b) {
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
  function Ja(a, b) {
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
  function Ka(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ka[" "](a);
    return a;
  }
  Ka[" "] = cc11001100_hook("Ka[\" \"]", function () {}, "assign");
  var La = cc11001100_hook("La", xa() ? !1 : y("Opera"), "var-init"),
    Ma = cc11001100_hook("Ma", ya(), "var-init"),
    Na = cc11001100_hook("Na", y("Edge"), "var-init"),
    Oa = cc11001100_hook("Oa", y("Gecko") && !(-1 != ta().toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"), "var-init"),
    Pa = cc11001100_hook("Pa", -1 != ta().toLowerCase().indexOf("webkit") && !y("Edge"), "var-init");
  function Ra() {
    var a = cc11001100_hook("a", u.document, "var-init");
    return a ? a.documentMode : void 0;
  }
  var Sa;
  a: {
    var Ta = cc11001100_hook("Ta", "", "var-init"),
      Ua = cc11001100_hook("Ua", function () {
        var a = cc11001100_hook("a", ta(), "var-init");
        if (Oa) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Na) return /Edge\/([\d\.]+)/.exec(a);
        if (Ma) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Pa) return /WebKit\/(\S+)/.exec(a);
        if (La) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }(), "var-init");
    Ua && (Ta = cc11001100_hook("Ta", Ua ? Ua[1] : "", "assign"));
    if (Ma) {
      var Va = cc11001100_hook("Va", Ra(), "var-init");
      if (null != Va && Va > parseFloat(Ta)) {
        Sa = cc11001100_hook("Sa", String(Va), "assign");
        break a;
      }
    }
    Sa = cc11001100_hook("Sa", Ta, "assign");
  }
  var Xa = cc11001100_hook("Xa", Sa, "var-init"),
    Ya;
  if (u.document && Ma) {
    var Za = cc11001100_hook("Za", Ra(), "var-init");
    Ya = cc11001100_hook("Ya", Za ? Za : parseInt(Xa, 10) || void 0, "assign");
  } else Ya = cc11001100_hook("Ya", void 0, "assign");
  var $a = cc11001100_hook("$a", Ya, "var-init");
  !y("Android") || Aa();
  Aa();
  za();
  var ab = cc11001100_hook("ab", {}, "var-init"),
    bb = cc11001100_hook("bb", null, "var-init");
  var cb = cc11001100_hook("cb", "undefined" !== typeof Uint8Array, "var-init");
  const db = cc11001100_hook("db", !Ma && "function" === typeof u.btoa, "var-init");
  const eb = cc11001100_hook("eb", Symbol(), "var-init");
  function fb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (eb) return a[eb] |= cc11001100_hook("a[eb]", b, "assign");
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
  function A(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    eb ? b = cc11001100_hook("b", a[eb], "assign") : b = cc11001100_hook("b", a.sa, "assign");
    return null == b ? 0 : b;
  }
  function gb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    eb ? a[eb] = cc11001100_hook("a[eb]", b, "assign") : void 0 !== a.sa ? a.sa = cc11001100_hook("a.sa", b, "assign") : Object.defineProperties(a, {
      sa: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
  }
  function hb(a) {
    cc11001100_hook("a", a, "function-parameter");
    fb(a, 1);
    return a;
  }
  function ib(a) {
    cc11001100_hook("a", a, "function-parameter");
    fb(a, 16);
    return a;
  }
  function jb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    gb(b, (a | 0) & -51);
  }
  function kb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    gb(b, (a | 18) & -41);
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
  gb(pb, 23);
  ob = cc11001100_hook("ob", Object.freeze(pb), "assign");
  function qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a & 2) throw Error();
  }
  function sb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && mb(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
  function tb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", A(a), "var-init");
    let d = cc11001100_hook("d", c, "var-init");
    0 === d && (d |= cc11001100_hook("d", b & 16, "assign"));
    d |= cc11001100_hook("d", b & 2, "assign");
    d !== c && gb(a, d);
  }
  ;
  function ub(a) {
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
  function vb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    qb(A(a.N));
    return wb(a, b, c, d);
  }
  function wb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.m && (a.m = cc11001100_hook("a.m", void 0, "assign"));
    if (b >= a.l || d) return ub(a)[b] = cc11001100_hook("ub(a)[b]", c, "assign"), a;
    a.N[b + a.Ea] = cc11001100_hook("a.N[b + a.Ea]", c, "assign");
    (c = cc11001100_hook("c", a.qa, "assign")) && b in c && delete c[b];
    return a;
  }
  function xb(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    let f = cc11001100_hook("f", C(a, b, d), "var-init");
    Array.isArray(f) || (f = cc11001100_hook("f", ob, "assign"));
    const g = cc11001100_hook("g", A(f), "var-init");
    g & 1 || hb(f);
    if (e) g & 2 || fb(f, 18), c & 1 || Object.freeze(f);else {
      e = cc11001100_hook("e", !(c & 2), "assign");
      const h = cc11001100_hook("h", g & 2, "var-init");
      c & 1 || !h ? e && g & 16 && !h && (a = cc11001100_hook("a", f, "assign"), eb ? a[eb] && (a[eb] &= cc11001100_hook("a[eb]", -17, "assign")) : void 0 !== a.sa && (a.sa &= cc11001100_hook("a.sa", -17, "assign"))) : (f = cc11001100_hook("f", hb(Array.prototype.slice.call(f)), "assign"), wb(a, b, f, d));
    }
    return f;
  }
  function yb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", C(a, b), "assign");
    return null == a ? a : !!a;
  }
  function zb(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", !!(A(a.N) & 2), "var-init");
    let c = cc11001100_hook("c", xb(a, 4, 1, !1, b), "var-init"),
      d = cc11001100_hook("d", A(c), "var-init");
    if (!(d & 4)) {
      Object.isFrozen(c) && (c = cc11001100_hook("c", hb(c.slice()), "assign"), wb(a, 4, c, !1));
      let e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", 0, "var-init");
      for (; e < c.length; e++) {
        const g = cc11001100_hook("g", c[e], "var-init");
        null != g && (c[f++] = cc11001100_hook("c[f++]", g, "assign"));
      }
      f < e && (c.length = cc11001100_hook("c.length", f, "assign"));
      d |= cc11001100_hook("d", 5, "assign");
      b && (d |= cc11001100_hook("d", 18, "assign"));
      gb(c, d);
      d & 2 && Object.freeze(c);
    }
    !b && (d & 2 || Object.isFrozen(c)) && (c = cc11001100_hook("c", Array.prototype.slice.call(c), "assign"), fb(c, 5), wb(a, 4, c, !1));
    return c;
  }
  function D(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    qb(A(a.N));
    c !== d ? wb(a, b, c) : wb(a, b, void 0, !1);
    return a;
  }
  function Ab(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", C(a, c, !1), "var-init");
    {
      let e = cc11001100_hook("e", !1, "var-init");
      null == d || "object" !== typeof d || (e = cc11001100_hook("e", Array.isArray(d), "assign")) || d.Cb !== lb ? e ? (tb(d, A(a.N)), b = cc11001100_hook("b", new b(d), "assign")) : b = cc11001100_hook("b", void 0, "assign") : b = cc11001100_hook("b", d, "assign");
    }
    b !== d && null != b && wb(a, c, b, !1);
    return b;
  }
  function Bb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", Ab(a, b, c), "assign");
    if (null == b) return b;
    if (!(A(a.N) & 2)) {
      const d = cc11001100_hook("d", Cb(b), "var-init");
      d !== b && (b = cc11001100_hook("b", d, "assign"), wb(a, c, b, !1));
    }
    return b;
  }
  function Db(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", A(a.N), "var-init"),
      e = cc11001100_hook("e", !!(d & 2), "var-init");
    var f = cc11001100_hook("f", !!(d & 2), "var-init");
    a.j || (a.j = cc11001100_hook("a.j", {}, "assign"));
    var g = cc11001100_hook("g", a.j[c], "var-init");
    var h = cc11001100_hook("h", xb(a, c, 3, void 0, f), "var-init");
    if (g) f || (f = cc11001100_hook("f", Object.isFrozen(g), "assign"), e && !f ? Object.freeze(g) : !e && f && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign"), a.j[c] = cc11001100_hook("a.j[c]", g, "assign")));else {
      var l = cc11001100_hook("l", h, "var-init");
      g = cc11001100_hook("g", [], "assign");
      f = cc11001100_hook("f", !!(d & 2), "assign");
      h = cc11001100_hook("h", !!(A(l) & 2), "assign");
      const q = cc11001100_hook("q", l, "var-init");
      !f && h && (l = cc11001100_hook("l", Array.prototype.slice.call(l), "assign"));
      var k = cc11001100_hook("k", d | (h ? 2 : 0), "var-init");
      d = cc11001100_hook("d", h, "assign");
      let r = cc11001100_hook("r", 0, "var-init");
      for (; r < l.length; r++) {
        var m = cc11001100_hook("m", l[r], "var-init");
        var n = cc11001100_hook("n", b, "var-init");
        Array.isArray(m) ? (tb(m, k), m = cc11001100_hook("m", new n(m), "assign")) : m = cc11001100_hook("m", void 0, "assign");
        void 0 !== m && (d || (d = cc11001100_hook("d", !!(2 & A(m.N)), "assign")), g.push(m));
      }
      a.j[c] = cc11001100_hook("a.j[c]", g, "assign");
      k = cc11001100_hook("k", A(l), "assign");
      b = cc11001100_hook("b", k | 33, "assign");
      b = cc11001100_hook("b", d ? b & -9 : b | 8, "assign");
      k != b && (d = cc11001100_hook("d", l, "assign"), Object.isFrozen(d) && (d = cc11001100_hook("d", Array.prototype.slice.call(d), "assign")), gb(d, b), l = cc11001100_hook("l", d, "assign"));
      q !== l && wb(a, c, l);
      (f || e && h) && fb(g, 18);
      e && Object.freeze(g);
    }
    a = cc11001100_hook("a", xb(a, c, 3, void 0, e), "assign");
    if (!(e || A(a) & 8)) {
      for (e = cc11001100_hook("e", 0, "assign"); e < g.length; e++) c = cc11001100_hook("c", g[e], "assign"), f = cc11001100_hook("f", Cb(c), "assign"), c !== f && (g[e] = cc11001100_hook("g[e]", f, "assign"), a[e] = cc11001100_hook("a[e]", f.N, "assign"));
      fb(a, 8);
    }
    return g;
  }
  function Eb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    qb(A(a.N));
    null == c && (c = cc11001100_hook("c", void 0, "assign"));
    return wb(a, b, c);
  }
  function Fb(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", yb(a, b), "assign");
    return null == a ? c : a;
  }
  ;
  let Gb;
  function Hb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Gb = cc11001100_hook("Gb", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    Gb = cc11001100_hook("Gb", void 0, "assign");
    return a;
  }
  ;
  function Ib(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (A(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), sb(a), a;
        } else if (cb && null != a && a instanceof Uint8Array) {
          if (db) {
            for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
            b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
            a = cc11001100_hook("a", btoa(b), "assign");
          } else {
            void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
            if (!bb) {
              bb = cc11001100_hook("bb", {}, "assign");
              for (var c = cc11001100_hook("c", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), d = cc11001100_hook("d", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), e = cc11001100_hook("e", 0, "var-init"); 5 > e; e++) {
                var f = cc11001100_hook("f", c.concat(d[e].split("")), "var-init");
                ab[e] = cc11001100_hook("ab[e]", f, "assign");
                for (var g = cc11001100_hook("g", 0, "var-init"); g < f.length; g++) {
                  var h = cc11001100_hook("h", f[g], "var-init");
                  void 0 === bb[h] && (bb[h] = cc11001100_hook("bb[h]", g, "assign"));
                }
              }
            }
            b = cc11001100_hook("b", ab[b], "assign");
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
  function Jb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", Kb(a, b, c, void 0 !== d), "assign");else if (mb(a)) {
        const e = cc11001100_hook("e", {}, "var-init");
        for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = cc11001100_hook("e[f]", Jb(a[f], b, c, d), "assign"));
        a = cc11001100_hook("a", e, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function Kb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const e = cc11001100_hook("e", A(a), "var-init");
    d = cc11001100_hook("d", d ? !!(e & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) a[f] = cc11001100_hook("a[f]", Jb(a[f], b, c, d), "assign");
    c(e, a);
    return a;
  }
  function Lb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.Cb === lb ? a.toJSON() : Ib(a);
  }
  function Mb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && sb(b);
  }
  ;
  function Nb(a, b, c = kb) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if (cb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = cc11001100_hook("d", A(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return gb(a, d | 18), a;
        a = cc11001100_hook("a", Kb(a, Nb, d & 4 ? kb : c, !0), "assign");
        b = cc11001100_hook("b", A(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.Cb === lb ? Ob(a) : a;
    }
  }
  function Pb(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    if (a = cc11001100_hook("a", a.j && a.j[c], "assign")) {
      d = cc11001100_hook("d", A(a), "assign");
      d & 2 ? d = cc11001100_hook("d", a, "assign") : (f = cc11001100_hook("f", Ea(a, Ob), "assign"), kb(d, f), Object.freeze(f), d = cc11001100_hook("d", f, "assign"));
      qb(A(b.N));
      g = cc11001100_hook("g", null == d ? ob : hb([]), "assign");
      if (null != d) {
        f = cc11001100_hook("f", !!d.length, "assign");
        for (a = cc11001100_hook("a", 0, "assign"); a < d.length; a++) {
          const h = cc11001100_hook("h", d[a], "var-init");
          f = cc11001100_hook("f", f && !(A(h.N) & 2), "assign");
          g[a] = cc11001100_hook("g[a]", h.N, "assign");
        }
        f = cc11001100_hook("f", (f ? 8 : 0) | 1, "assign");
        a = cc11001100_hook("a", A(g), "assign");
        (a & f) !== f && (Object.isFrozen(g) && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign")), gb(g, a | f));
        b.j || (b.j = cc11001100_hook("b.j", {}, "assign"));
        b.j[c] = cc11001100_hook("b.j[c]", d, "assign");
      } else b.j && (b.j[c] = cc11001100_hook("b.j[c]", void 0, "assign"));
      wb(b, c, g, e);
    } else vb(b, c, Nb(d, f, g), e);
  }
  function Ob(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (A(a.N) & 2) return a;
    a = cc11001100_hook("a", Qb(a, !0), "assign");
    fb(a.N, 18);
    return a;
  }
  function Qb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.N, "var-init");
    var d = cc11001100_hook("d", ib([]), "var-init"),
      e = cc11001100_hook("e", a.constructor.messageId, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.qa, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      d.fill(void 0, d.length, c.length);
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (A(c) & 128) && sb(d);
    b = cc11001100_hook("b", b || A(a.N) & 2 ? kb : jb, "assign");
    d = cc11001100_hook("d", Hb(a.constructor, d), "assign");
    a.Mb && (d.Mb = cc11001100_hook("d.Mb", a.Mb.slice(), "assign"));
    f = cc11001100_hook("f", !!(A(c) & 16), "assign");
    const g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Pb(a, d, h - a.Ea, c[h], !1, f, b);
    if (e) for (const h in e) Pb(a, d, +h, e[h], !0, f, b);
    return d;
  }
  function Cb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!(A(a.N) & 2)) return a;
    const b = cc11001100_hook("b", Qb(a, !1), "var-init");
    b.m = cc11001100_hook("b.m", a, "assign");
    return b;
  }
  ;
  var Sb = cc11001100_hook("Sb", class {
    constructor(a, b, c) {
      null == a && (a = cc11001100_hook("a", Gb, "assign"));
      Gb = cc11001100_hook("Gb", void 0, "assign");
      var d = cc11001100_hook("d", this.constructor.messageId, "var-init");
      if (null == a) {
        a = cc11001100_hook("a", d ? [d] : [], "assign");
        var e = cc11001100_hook("e", !0, "var-init");
        gb(a, 48);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (d && d !== a[0]) throw Error();
        var f = cc11001100_hook("f", fb(a, 0) | 32, "var-init");
        e = cc11001100_hook("e", 0 !== (16 & f), "assign");
        if (128 & f) throw Error();
        gb(a, f);
      }
      this.Ea = cc11001100_hook("this.Ea", d ? 0 : -1, "assign");
      this.j = cc11001100_hook("this.j", void 0, "assign");
      this.N = cc11001100_hook("this.N", a, "assign");
      a: {
        f = cc11001100_hook("f", this.N.length, "assign");
        d = cc11001100_hook("d", f - 1, "assign");
        if (f && (f = cc11001100_hook("f", this.N[d], "assign"), mb(f))) {
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
          g ? Rb(g, b) : a[f] = cc11001100_hook("a[f]", ob, "assign");
        } else h || (h = cc11001100_hook("h", ub(this), "assign")), (g = cc11001100_hook("g", h[f], "assign")) ? Rb(g, b) : h[f] = cc11001100_hook("h[f]", ob, "assign");
      }
    }
    toJSON() {
      const a = cc11001100_hook("a", this.N, "var-init");
      return nb ? a : Kb(a, Lb, Mb);
    }
  }, "var-init");
  function Rb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", A(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && gb(a, c | d);
    }
  }
  Sb.prototype.Cb = cc11001100_hook("Sb.prototype.Cb", lb, "assign");
  function Tb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ib(b);
  }
  ;
  let Ub = cc11001100_hook("Ub", void 0, "var-init");
  function Vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Ub, "var-init");
    Ub = cc11001100_hook("Ub", void 0, "assign");
    if (!b(a)) throw b = cc11001100_hook("b", c ? c() + "\n" : "", "assign"), Error(b + String(a));
  }
  ;
  function Wb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", Hb(a, ib(b)), "assign");
      }
      return b;
    };
  }
  ;
  function Xb() {
    return !1;
  }
  function Yb() {
    return !0;
  }
  function Zb(a) {
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
  function bc(a) {
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
  var cc = cc11001100_hook("cc", {
      capture: cc11001100_hook("capture", !0, "object-key-init")
    }, "var-init"),
    dc = cc11001100_hook("dc", {
      passive: cc11001100_hook("passive", !0, "object-key-init")
    }, "var-init"),
    ec = cc11001100_hook("ec", $b(function () {
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
  function fc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.passive && ec() ? a : a.capture || !1 : !1;
  }
  function E(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return a.addEventListener ? (a.addEventListener(b, c, fc(d)), !0) : !1;
  }
  function H(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return a.removeEventListener ? (a.removeEventListener(b, c, fc(d)), !0) : !1;
  }
  ;
  var gc = cc11001100_hook("gc", Ma || Pa, "var-init");
  var hc;
  function ic() {
    if (void 0 === hc) {
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
        hc = cc11001100_hook("hc", a, "assign");
      } else hc = cc11001100_hook("hc", a, "assign");
    }
    return hc;
  }
  ;
  var kc = cc11001100_hook("kc", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", b === jc ? a : "", "assign");
      }
      toString() {
        return this.j + "";
      }
    }, "var-init"),
    jc = cc11001100_hook("jc", {}, "var-init");
  function lc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ic(), "var-init");
    a = cc11001100_hook("a", b ? b.createScriptURL(a) : a, "assign");
    return new kc(a, jc);
  }
  ;
  var nc = cc11001100_hook("nc", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", b === mc ? a : "", "assign");
      }
      toString() {
        return this.j.toString();
      }
    }, "var-init"),
    mc = cc11001100_hook("mc", {}, "var-init"),
    oc = cc11001100_hook("oc", new nc("about:invalid#zClosurez", mc), "var-init");
  const pc = cc11001100_hook("pc", {}, "var-init");
  function qc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof rc && a.constructor === rc ? a.j : "type_error:SafeHtml";
  }
  class rc {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", b === pc ? a : "", "assign");
    }
    toString() {
      return this.j.toString();
    }
  }
  var sc = cc11001100_hook("sc", new rc(u.trustedTypes && u.trustedTypes.emptyHTML || "", pc), "var-init");
  var tc = cc11001100_hook("tc", $b(function () {
    var a = cc11001100_hook("a", document.createElement("div"), "var-init"),
      b = cc11001100_hook("b", document.createElement("div"), "var-init");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = cc11001100_hook("b", a.firstChild.firstChild, "assign");
    a.innerHTML = cc11001100_hook("a.innerHTML", qc(sc), "assign");
    return !b.parentElement;
  }), "var-init");
  function uc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Array.prototype.reduce.call(arguments, function (b, c) {
      return b + c;
    }, 0);
  }
  function vc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return uc.apply(null, arguments) / arguments.length;
  }
  ;
  function J(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.x = cc11001100_hook("this.x", void 0 !== a ? a : 0, "assign");
    this.y = cc11001100_hook("this.y", void 0 !== b ? b : 0, "assign");
  }
  function wc(a, b) {
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
  function xc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.width = cc11001100_hook("this.width", a, "assign");
    this.height = cc11001100_hook("this.height", b, "assign");
  }
  p = cc11001100_hook("p", xc.prototype, "assign");
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
  function yc(a, b) {
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
    return a.replace(zc, function (e, f) {
      var g = cc11001100_hook("g", c[e], "var-init");
      if (g) return g;
      "#" == f.charAt(0) && (f = cc11001100_hook("f", Number("0" + f.slice(1)), "assign"), isNaN(f) || (g = cc11001100_hook("g", String.fromCharCode(f), "assign")));
      if (!g) {
        g = cc11001100_hook("g", e + " ", "assign");
        g = cc11001100_hook("g", (f = cc11001100_hook("f", ic(), "assign")) ? f.createHTML(g) : g, "assign");
        g = cc11001100_hook("g", new rc(g, pc), "assign");
        if (tc()) for (; d.lastChild;) d.removeChild(d.lastChild);
        d.innerHTML = cc11001100_hook("d.innerHTML", qc(g), "assign");
        g = cc11001100_hook("g", d.firstChild.nodeValue.slice(0, -1), "assign");
      }
      return c[e] = cc11001100_hook("c[e]", g, "assign");
    });
  }
  var zc = cc11001100_hook("zc", /&([^;\s<&]+);?/g, "var-init");
  function Ac(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 0, "var-init");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; ++c) b = cc11001100_hook("b", 31 * b + a.charCodeAt(c) >>> 0, "assign");
    return b;
  }
  function Bc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function Cc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  ;
  function Dc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? new Ec(Fc(a)) : la || (la = cc11001100_hook("la", new Ec(), "assign"));
  }
  function Gc(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.document, "assign");
    a = cc11001100_hook("a", Hc(a) ? a.documentElement : a.body, "assign");
    return new xc(a.clientWidth, a.clientHeight);
  }
  function Ic(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.document, "var-init"),
      c = cc11001100_hook("c", 0, "var-init");
    if (b) {
      c = cc11001100_hook("c", b.body, "assign");
      var d = cc11001100_hook("d", b.documentElement, "var-init");
      if (!d || !c) return 0;
      a = cc11001100_hook("a", Gc(a).height, "assign");
      if (Hc(b) && d.scrollHeight) c = cc11001100_hook("c", d.scrollHeight != a ? d.scrollHeight : d.offsetHeight, "assign");else {
        b = cc11001100_hook("b", d.scrollHeight, "assign");
        var e = cc11001100_hook("e", d.offsetHeight, "var-init");
        d.clientHeight != e && (b = cc11001100_hook("b", c.scrollHeight, "assign"), e = cc11001100_hook("e", c.offsetHeight, "assign"));
        c = cc11001100_hook("c", b > a ? b > e ? b : e : b < e ? b : e, "assign");
      }
    }
    return c;
  }
  function Jc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.parentWindow || a.defaultView : window;
  }
  function Kc(a, b, c) {
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
        Ca(g ? Ha(f) : f, d);
      }
    }
  }
  function Lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", String(b), "assign");
    "application/xhtml+xml" === a.contentType && (b = cc11001100_hook("b", b.toLowerCase(), "assign"));
    return a.createElement(b);
  }
  function Hc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "CSS1Compat" == a.compatMode;
  }
  function Mc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }
  function Fc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  function Nc(a, b, c, d) {
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
  function Ec(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.j = cc11001100_hook("this.j", a || u.document || document, "assign");
  }
  p = cc11001100_hook("p", Ec.prototype, "assign");
  p.getElementsByTagName = cc11001100_hook("p.getElementsByTagName", function (a, b) {
    return (b || this.j).getElementsByTagName(String(a));
  }, "assign");
  p.createElement = cc11001100_hook("p.createElement", function (a) {
    return Lc(this.j, a);
  }, "assign");
  p.createTextNode = cc11001100_hook("p.createTextNode", function (a) {
    return this.j.createTextNode(String(a));
  }, "assign");
  p.append = cc11001100_hook("p.append", function (a, b) {
    Kc(Fc(a), a, arguments);
  }, "assign");
  p.contains = cc11001100_hook("p.contains", Mc, "assign");
  function Oc() {
    return na && ua ? ua.mobile : !(na && ua ? !ua.mobile && (y("iPad") || y("Android") || y("Silk")) : y("iPad") || y("Android") && !y("Mobile") || y("Silk")) && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"));
  }
  ;
  var Pc = cc11001100_hook("Pc", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init"); /* 
                                                                                                                                                                                           SPDX-License-Identifier: Apache-2.0 
                                                                                                                                                                                           */
  class Qc {
    constructor(a) {
      this.hc = cc11001100_hook("this.hc", a, "assign");
    }
  }
  function Rc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Qc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const Sc = cc11001100_hook("Sc", [Rc("data"), Rc("http"), Rc("https"), Rc("mailto"), Rc("ftp"), new Qc(a => /^[^:]*([/?#]|$)/.test(a))], "var-init");
  function Tc(a, b = Sc) {
    cc11001100_hook("a", a, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; ++c) {
      const d = cc11001100_hook("d", b[c], "var-init");
      if (d instanceof Qc && d.hc(a)) return new nc(a, mc);
    }
  }
  ;
  function Uc(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b;
      if (b = cc11001100_hook("b", !!a && null != a.location.href, "assign")) a: {
        try {
          Ka(a.foo);
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
  function Vc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Uc(a.top) ? a.top : null;
  }
  function Wc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Xc("SCRIPT", a), "var-init");
    c.src = cc11001100_hook("c.src", b instanceof kc && b.constructor === kc ? b.j : "type_error:TrustedResourceUrl", "assign");
    (b = cc11001100_hook("b", (b = cc11001100_hook("b", (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]"), "assign")) ? b.nonce || b.getAttribute("nonce") || "" : "", "assign")) && c.setAttribute("nonce", b);
    (a = cc11001100_hook("a", a.getElementsByTagName("script")[0], "assign")) && a.parentNode && a.parentNode.insertBefore(c, a);
  }
  function Yc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Zc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function $c(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    Zc(a, function (c) {
      b.push(c);
    });
    return b;
  }
  var ad = cc11001100_hook("ad", /^([0-9.]+)px$/, "var-init"),
    cd = cc11001100_hook("cd", /^(-?[0-9.]{1,30})$/, "var-init");
  function dd(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!cd.test(a)) return null;
    a = cc11001100_hook("a", Number(a), "assign");
    return isNaN(a) ? null : a;
  }
  function K(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", ad.exec(a), "assign")) ? +a[1] : null;
  }
  var O = cc11001100_hook("O", (a, b) => {
      Zc(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    }, "var-init"),
    ed = cc11001100_hook("ed", (a, b) => {
      for (a = cc11001100_hook("a", [a], "assign"); a.length;) {
        var c = cc11001100_hook("c", a.shift(), "var-init");
        !1 !== b(c) && (c = cc11001100_hook("c", Da(c.children || c.childNodes || [], d => 1 === d.nodeType), "assign"), c.length && a.unshift(...c));
      }
    }, "var-init"),
    gd = cc11001100_hook("gd", (a, b) => {
      if ("length" in a.style) {
        a = cc11001100_hook("a", a.style, "assign");
        const c = cc11001100_hook("c", a.length, "var-init");
        for (let d = cc11001100_hook("d", 0, "var-init"); d < c; d++) {
          const e = cc11001100_hook("e", a[d], "var-init");
          b(a[e], e, a);
        }
      } else a = cc11001100_hook("a", fd(a.style.cssText), "assign"), Zc(a, b);
    }, "var-init"),
    fd = cc11001100_hook("fd", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      if (a) {
        const c = cc11001100_hook("c", /\s*:\s*/, "var-init");
        Ca((a || "").split(/\s*;\s*/), d => {
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
    hd = cc11001100_hook("hd", (a, b = () => !0) => {
      const c = cc11001100_hook("c", /!\s*important/i, "var-init");
      gd(a, (d, e) => {
        !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "");
      });
    }, "var-init");
  const id = cc11001100_hook("id", {
      ["http://googleads.g.doubleclick.net"]: cc11001100_hook("http://googleads.g.doubleclick.net", !0, "object-key-init"),
      ["http://pagead2.googlesyndication.com"]: cc11001100_hook("http://pagead2.googlesyndication.com", !0, "object-key-init"),
      ["https://googleads.g.doubleclick.net"]: cc11001100_hook("https://googleads.g.doubleclick.net", !0, "object-key-init"),
      ["https://pagead2.googlesyndication.com"]: cc11001100_hook("https://pagead2.googlesyndication.com", !0, "object-key-init")
    }, "var-init"),
    jd = cc11001100_hook("jd", /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/, "var-init"),
    kd = cc11001100_hook("kd", /.*domain\.test$/, "var-init"),
    ld = cc11001100_hook("ld", /\.prod\.google\.com(:\d+)?$/, "var-init");
  var md = cc11001100_hook("md", a => id[a] || jd.test(a) || kd.test(a) || ld.test(a), "var-init"),
    nd = cc11001100_hook("nd", a => {
      a.preventDefault ? a.preventDefault() : a.returnValue = cc11001100_hook("a.returnValue", !1, "assign");
    }, "var-init");
  function Xc(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return b.createElement(String(a).toLowerCase());
  }
  ;
  function od(a) {
    cc11001100_hook("a", a, "function-parameter");
    u.google_image_requests || (u.google_image_requests = cc11001100_hook("u.google_image_requests", [], "assign"));
    const b = cc11001100_hook("b", Xc("IMG", u.document), "var-init");
    b.src = cc11001100_hook("b.src", a, "assign");
    u.google_image_requests.push(b);
  }
  ;
  function pd(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    this.top = cc11001100_hook("this.top", a, "assign");
    this.right = cc11001100_hook("this.right", b, "assign");
    this.bottom = cc11001100_hook("this.bottom", c, "assign");
    this.left = cc11001100_hook("this.left", d, "assign");
  }
  p = cc11001100_hook("p", pd.prototype, "assign");
  p.getWidth = cc11001100_hook("p.getWidth", function () {
    return this.right - this.left;
  }, "assign");
  p.getHeight = cc11001100_hook("p.getHeight", function () {
    return this.bottom - this.top;
  }, "assign");
  function qd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new pd(a.top, a.right, a.bottom, a.left);
  }
  p.contains = cc11001100_hook("p.contains", function (a) {
    return this && a ? a instanceof pd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
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
  function rd(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 === b.length) return lc(a[0]);
    const c = cc11001100_hook("c", [a[0]], "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return lc(c.join(""));
  }
  ;
  function P(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if ("string" === typeof b) (b = cc11001100_hook("b", sd(a, b), "assign")) && (a.style[b] = cc11001100_hook("a.style[b]", c, "assign"));else for (var d in b) {
      c = cc11001100_hook("c", a, "assign");
      var e = cc11001100_hook("e", b[d], "var-init"),
        f = cc11001100_hook("f", sd(c, d), "var-init");
      f && (c.style[f] = cc11001100_hook("c.style[f]", e, "assign"));
    }
  }
  var td = cc11001100_hook("td", {}, "var-init");
  function sd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", td[b], "var-init");
    if (!c) {
      var d = cc11001100_hook("d", Bc(b), "var-init");
      c = cc11001100_hook("c", d, "assign");
      void 0 === a.style[d] && (d = cc11001100_hook("d", (Pa ? "Webkit" : Oa ? "Moz" : Ma ? "ms" : null) + Cc(d), "assign"), void 0 !== a.style[d] && (c = cc11001100_hook("c", d, "assign")));
      td[b] = cc11001100_hook("td[b]", c, "assign");
    }
    return c;
  }
  function ud(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Fc(a), "var-init");
    return c.defaultView && c.defaultView.getComputedStyle && (a = cc11001100_hook("a", c.defaultView.getComputedStyle(a, null), "assign")) ? a[b] || a.getPropertyValue(b) || "" : "";
  }
  function vd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return ud(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
  }
  function wd(a) {
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
  function xd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Fc(a), "var-init"),
      c = cc11001100_hook("c", new J(0, 0), "var-init");
    var d = cc11001100_hook("d", b ? Fc(b) : document, "var-init");
    d = cc11001100_hook("d", !Ma || 9 <= Number($a) || Hc(Dc(d).j) ? d.documentElement : d.body, "assign");
    if (a == d) return c;
    a = cc11001100_hook("a", wd(a), "assign");
    d = cc11001100_hook("d", Dc(b).j, "assign");
    b = cc11001100_hook("b", d.scrollingElement ? d.scrollingElement : !Pa && Hc(d) ? d.documentElement : d.body || d.documentElement, "assign");
    d = cc11001100_hook("d", d.parentWindow || d.defaultView, "assign");
    b = cc11001100_hook("b", Ma && d.pageYOffset != b.scrollTop ? new J(b.scrollLeft, b.scrollTop) : new J(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop), "assign");
    c.x = cc11001100_hook("c.x", a.left + b.x, "assign");
    c.y = cc11001100_hook("c.y", a.top + b.y, "assign");
    return c;
  }
  function yd(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (1 == a.nodeType) return a = cc11001100_hook("a", wd(a), "assign"), new J(a.left, a.top);
    a = cc11001100_hook("a", a.changedTouches ? a.changedTouches[0] : a, "assign");
    return new J(a.clientX, a.clientY);
  }
  function zd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b instanceof xc) {
      var c = cc11001100_hook("c", b.height, "var-init");
      b = cc11001100_hook("b", b.width, "assign");
    } else throw Error("missing height argument");
    a.style.width = cc11001100_hook("a.style.width", Ad(b, !0), "assign");
    a.style.height = cc11001100_hook("a.style.height", Ad(c, !0), "assign");
  }
  function Ad(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    "number" == typeof a && (a = cc11001100_hook("a", (b ? Math.round(a) : a) + "px", "assign"));
    return a;
  }
  function Bd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Cd, "var-init");
    if ("none" != vd(a, "display")) return b(a);
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
  function Cd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.offsetWidth, "var-init"),
      c = cc11001100_hook("c", a.offsetHeight, "var-init"),
      d = cc11001100_hook("d", Pa && !b && !c, "var-init");
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = cc11001100_hook("a", wd(a), "assign"), new xc(a.right - a.left, a.bottom - a.top)) : new xc(b, c);
  }
  function Dd(a, b) {
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
  function Ed(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Ma) {
      var c = cc11001100_hook("c", Dd(a, b + "Left"), "var-init"),
        d = cc11001100_hook("d", Dd(a, b + "Right"), "var-init"),
        e = cc11001100_hook("e", Dd(a, b + "Top"), "var-init");
      a = cc11001100_hook("a", Dd(a, b + "Bottom"), "assign");
      return new pd(e, d, a, c);
    }
    c = cc11001100_hook("c", ud(a, b + "Left"), "assign");
    d = cc11001100_hook("d", ud(a, b + "Right"), "assign");
    e = cc11001100_hook("e", ud(a, b + "Top"), "assign");
    a = cc11001100_hook("a", ud(a, b + "Bottom"), "assign");
    return new pd(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
  }
  ;
  var Fd = cc11001100_hook("Fd", a => "number" === typeof a && 0 < a, "var-init");
  class Gd {
    constructor(a, b) {
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", {}, "assign");
    }
  }
  ;
  const Hd = cc11001100_hook("Hd", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  var Id = cc11001100_hook("Id", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.l = cc11001100_hook("this.l", b, "assign");
      }
    }, "var-init"),
    Jd = cc11001100_hook("Jd", class {
      constructor(a, b) {
        this.url = cc11001100_hook("this.url", a, "assign");
        this.Nb = cc11001100_hook("this.Nb", !!b, "assign");
        this.depth = cc11001100_hook("this.depth", null, "assign");
      }
    }, "var-init");
  function Kd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function Ld(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init");
    Zc(a, function (g, h) {
      (g = cc11001100_hook("g", Md(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function Md(a, b, c, d, e) {
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
        for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(Md(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(Ld(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function Nd(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 1, "var-init");
    for (const c in a.l) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.m.length - 1;
  }
  function Od(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
      d = cc11001100_hook("d", Nd(a) - b.length, "var-init");
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
        let k = cc11001100_hook("k", Ld(h[l], a.m, ",$"), "var-init");
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
  class Pd {
    constructor() {
      this.m = cc11001100_hook("this.m", "&", "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
      this.v = cc11001100_hook("this.v", 0, "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
    }
  }
  ;
  function Qd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= b && 1 >= b && (a.j = cc11001100_hook("a.j", b, "assign"));
  }
  function Rd(a, b, c, d = !1, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if ((d ? a.j : Math.random()) < (e || .01)) try {
      let f;
      c instanceof Pd ? f = cc11001100_hook("f", c, "assign") : (f = cc11001100_hook("f", new Pd(), "assign"), Zc(c, (h, l) => {
        var k = cc11001100_hook("k", f, "var-init");
        const m = cc11001100_hook("m", k.v++, "var-init");
        h = cc11001100_hook("h", Kd(l, h), "assign");
        k.j.push(m);
        k.l[m] = cc11001100_hook("k.l[m]", h, "assign");
      }));
      const g = cc11001100_hook("g", Od(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && od(g);
    } catch (f) {}
  }
  class Sd {
    constructor() {
      this.j = cc11001100_hook("this.j", Math.random(), "assign");
    }
  }
  ;
  let Td = cc11001100_hook("Td", null, "var-init");
  function Ud() {
    const a = cc11001100_hook("a", u.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function Vd() {
    const a = cc11001100_hook("a", u.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class Wd {
    constructor(a, b) {
      var c = cc11001100_hook("c", Vd() || Ud(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const Xd = cc11001100_hook("Xd", u.performance, "var-init"),
    Yd = cc11001100_hook("Yd", !!(Xd && Xd.mark && Xd.measure && Xd.clearMarks), "var-init"),
    Zd = cc11001100_hook("Zd", $b(() => {
      var a;
      if (a = cc11001100_hook("a", Yd, "assign")) {
        var b;
        if (null === Td) {
          Td = cc11001100_hook("Td", "", "assign");
          try {
            a = cc11001100_hook("a", "", "assign");
            try {
              a = cc11001100_hook("a", u.top.location.hash, "assign");
            } catch (c) {
              a = cc11001100_hook("a", u.location.hash, "assign");
            }
            a && (Td = cc11001100_hook("Td", (b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "assign")) ? b[1] : "", "assign"));
          } catch (c) {}
        }
        b = cc11001100_hook("b", Td, "assign");
        a = cc11001100_hook("a", !!b.indexOf && 0 <= b.indexOf("1337"), "assign");
      }
      return a;
    }), "var-init");
  function $d(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && Xd && Zd() && (Xd.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Xd.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function ae(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j = cc11001100_hook("a.j", !1, "assign");
    a.l != a.m.google_js_reporting_queue && (Zd() && Ca(a.l, $d), a.l.length = cc11001100_hook("a.l.length", 0, "assign"));
  }
  class be {
    constructor(a) {
      this.l = cc11001100_hook("this.l", [], "assign");
      this.m = cc11001100_hook("this.m", a || u, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.l = cc11001100_hook("this.l", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.j = cc11001100_hook("this.j", Zd() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.j) return null;
      a = cc11001100_hook("a", new Wd(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      Xd && Zd() && Xd.mark(b);
      return a;
    }
    end(a) {
      if (this.j && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Vd() || Ud()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        Xd && Zd() && Xd.mark(b);
        !this.j || 2048 < this.l.length || this.l.push(a);
      }
    }
  }
  ;
  function ce(a) {
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
  class de {
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
          $d(e), b = cc11001100_hook("b", this.B(a, new Gd(f, {
            message: cc11001100_hook("message", ce(f), "object-key-init")
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
        const F = cc11001100_hook("F", new Pd(), "var-init");
        var g = cc11001100_hook("g", F, "var-init");
        g.j.push(1);
        g.l[1] = cc11001100_hook("g.l[1]", Kd("context", a), "assign");
        b.error && b.meta && b.id || (b = cc11001100_hook("b", new Gd(b, {
          message: cc11001100_hook("message", ce(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          g = cc11001100_hook("g", F, "assign");
          var h = cc11001100_hook("h", b.msg.substring(0, 512), "var-init");
          g.j.push(2);
          g.l[2] = cc11001100_hook("g.l[2]", Kd("msg", h), "assign");
        }
        var l = cc11001100_hook("l", b.meta || {}, "var-init");
        b = cc11001100_hook("b", l, "assign");
        if (this.l) try {
          this.l(b);
        } catch (Z) {}
        if (d) try {
          d(b);
        } catch (Z) {}
        d = cc11001100_hook("d", F, "assign");
        l = cc11001100_hook("l", [l], "assign");
        d.j.push(3);
        d.l[3] = cc11001100_hook("d.l[3]", l, "assign");
        d = cc11001100_hook("d", u, "assign");
        l = cc11001100_hook("l", [], "assign");
        b = cc11001100_hook("b", null, "assign");
        do {
          var k = cc11001100_hook("k", d, "var-init");
          if (Uc(k)) {
            var m = cc11001100_hook("m", k.location.href, "var-init");
            b = cc11001100_hook("b", k.document && k.document.referrer || null, "assign");
          } else m = cc11001100_hook("m", b, "assign"), b = cc11001100_hook("b", null, "assign");
          l.push(new Jd(m || ""));
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
        let L = cc11001100_hook("L", new Jd(u.location.href, !1), "var-init");
        k = cc11001100_hook("k", null, "assign");
        const M = cc11001100_hook("M", q.length - 1, "var-init");
        for (n = cc11001100_hook("n", M, "assign"); 0 <= n; --n) {
          var r = cc11001100_hook("r", q[n], "var-init");
          !k && Hd.test(r.url) && (k = cc11001100_hook("k", r, "assign"));
          if (r.url && !r.Nb) {
            L = cc11001100_hook("L", r, "assign");
            break;
          }
        }
        r = cc11001100_hook("r", null, "assign");
        const Wa = cc11001100_hook("Wa", q.length && q[M].url, "var-init");
        0 != L.depth && Wa && (r = cc11001100_hook("r", q[M], "assign"));
        f = cc11001100_hook("f", new Id(L, r), "assign");
        if (f.l) {
          q = cc11001100_hook("q", F, "assign");
          var t = cc11001100_hook("t", f.l.url || "", "var-init");
          q.j.push(4);
          q.l[4] = cc11001100_hook("q.l[4]", Kd("top", t), "assign");
        }
        var z = cc11001100_hook("z", {
          url: cc11001100_hook("url", f.j.url || "", "object-key-init")
        }, "var-init");
        if (f.j.url) {
          var G = cc11001100_hook("G", f.j.url.match(Pc), "var-init"),
            I = cc11001100_hook("I", G[1], "var-init"),
            N = cc11001100_hook("N", G[3], "var-init"),
            v = cc11001100_hook("v", G[4], "var-init");
          t = cc11001100_hook("t", "", "assign");
          I && (t += cc11001100_hook("t", I + ":", "assign"));
          N && (t += cc11001100_hook("t", "//", "assign"), t += cc11001100_hook("t", N, "assign"), v && (t += cc11001100_hook("t", ":" + v, "assign")));
          var B = cc11001100_hook("B", t, "var-init");
        } else B = cc11001100_hook("B", "", "assign");
        I = cc11001100_hook("I", F, "assign");
        z = cc11001100_hook("z", [z, {
          url: cc11001100_hook("url", B, "object-key-init")
        }], "assign");
        I.j.push(5);
        I.l[5] = cc11001100_hook("I.l[5]", z, "assign");
        Rd(this.A, e, F, this.m, c);
      } catch (F) {
        try {
          Rd(this.A, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", ce(F), "object-key-init"),
            url: cc11001100_hook("url", f && f.j.url, "object-key-init")
          }, this.m, c);
        } catch (L) {}
      }
      return !0;
    }
  }
  ;
  var ee = cc11001100_hook("ee", a => "string" === typeof a, "var-init"),
    fe = cc11001100_hook("fe", a => void 0 === a, "var-init");
  var he = cc11001100_hook("he", class extends Sb {
      constructor() {
        super(void 0, -1, ge);
      }
    }, "var-init"),
    ge = cc11001100_hook("ge", [9], "var-init");
  function ie(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new je(), "var-init");
    return D(b, 1, a, 0);
  }
  function ke(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(a, 2, b, !1);
  }
  function le(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(a, 3, b, !1);
  }
  function me(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    vb(a, 5, b);
  }
  function ne(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(a, 6, b, !1);
  }
  var je = cc11001100_hook("je", class extends Sb {
    constructor() {
      super();
    }
  }, "var-init");
  function oe(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new pe(), "var-init");
    return D(b, 1, a, 0);
  }
  function qe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Eb(a, 2, b);
  }
  function re(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return D(a, 3, b, 0);
  }
  var pe = cc11001100_hook("pe", class extends Sb {
    constructor() {
      super();
    }
  }, "var-init");
  function se(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && "function" == typeof a.Jb && a.Jb();
  }
  ;
  function te() {
    this.L = cc11001100_hook("this.L", this.L, "assign");
    this.W = cc11001100_hook("this.W", this.W, "assign");
  }
  te.prototype.L = cc11001100_hook("te.prototype.L", !1, "assign");
  te.prototype.Jb = cc11001100_hook("te.prototype.Jb", function () {
    this.L || (this.L = cc11001100_hook("this.L", !0, "assign"), this.Ca());
  }, "assign");
  function ue(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Q(a, ja(se, b));
  }
  function Q(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.L ? b() : (a.W || (a.W = cc11001100_hook("a.W", [], "assign")), a.W.push(b));
  }
  te.prototype.Ca = cc11001100_hook("te.prototype.Ca", function () {
    if (this.W) for (; this.W.length;) this.W.shift()();
  }, "assign");
  var R = cc11001100_hook("R", a => {
    var b = cc11001100_hook("b", "Ab", "var-init");
    if (a.Ab && a.hasOwnProperty(b)) return a.Ab;
    b = cc11001100_hook("b", new a(), "assign");
    return a.Ab = cc11001100_hook("a.Ab", b, "assign");
  }, "var-init");
  function ve(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b[a] || c;
  }
  ;
  function we(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j = cc11001100_hook("a.j", () => ve(3, b, () => [])(1), "assign");
  }
  class xe {
    j() {
      return [];
    }
  }
  ;
  let ye, ze;
  const Ae = cc11001100_hook("Ae", new be(window), "var-init");
  (a => {
    ye = cc11001100_hook("ye", a ?? new Sd(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    Qd(ye, window.google_srt);
    ze = cc11001100_hook("ze", new de(ye, Ae), "assign");
    ze.Db(() => {});
    ze.v(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || ae(Ae) : Ae.j && E(window, "load", () => {
      window.google_measure_js_timing || ae(Ae);
    });
  })();
  function Be(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return void 0 !== a.j[Ce(b)];
  }
  function De(a) {
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
      const c = cc11001100_hook("c", Ce(a), "var-init");
      this.j[c] = cc11001100_hook("this.j[c]", b, "assign");
      this.l[c] = cc11001100_hook("this.l[c]", a, "assign");
    }
    get(a, b) {
      a = cc11001100_hook("a", Ce(a), "assign");
      return void 0 !== this.j[a] ? this.j[a] : b;
    }
    zb() {
      return De(this).length;
    }
    clear() {
      this.j = cc11001100_hook("this.j", {}, "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
    }
  }, "var-init");
  function Ce(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Object ? String(w(a)) : a + "";
  }
  ;
  var Ee = cc11001100_hook("Ee", class {
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
    Fe = cc11001100_hook("Fe", class {
      build() {
        return new Ee(this);
      }
    }, "var-init");
  function Ge(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
  }
  ;
  function He(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = cc11001100_hook("a.google_reactive_ads_global_state.sideRailProcessedFixedElements", new Set(), "assign")), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = cc11001100_hook("a.google_reactive_ads_global_state.sideRailAvailableSpace", new Map(), "assign"))) : a.google_reactive_ads_global_state = cc11001100_hook("a.google_reactive_ads_global_state", new Ie(), "assign");
    return a.google_reactive_ads_global_state;
  }
  class Ie {
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
      this.floatingAdsStacking = cc11001100_hook("this.floatingAdsStacking", new Je(), "assign");
      this.sideRailProcessedFixedElements = cc11001100_hook("this.sideRailProcessedFixedElements", new Set(), "assign");
      this.sideRailAvailableSpace = cc11001100_hook("this.sideRailAvailableSpace", new Map(), "assign");
    }
  }
  var Je = cc11001100_hook("Je", class {
    constructor() {
      this.maxZIndexRestrictions = cc11001100_hook("this.maxZIndexRestrictions", {}, "assign");
      this.nextRestrictionId = cc11001100_hook("this.nextRestrictionId", 0, "assign");
      this.maxZIndexListeners = cc11001100_hook("this.maxZIndexListeners", [], "assign");
    }
  }, "var-init");
  var Ke = cc11001100_hook("Ke", 728 * 1.38, "var-init"),
    Le = cc11001100_hook("Le", a => a.innerHeight >= a.innerWidth, "var-init"),
    Me = cc11001100_hook("Me", a => {
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
    Ne = cc11001100_hook("Ne", (a, b) => {
      const c = cc11001100_hook("c", T(a), "var-init");
      return b ? c.scrollHeight == T(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight;
    }, "var-init"),
    Oe = cc11001100_hook("Oe", (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1, "var-init"),
    U = cc11001100_hook("U", a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset, "var-init"),
    Pe = cc11001100_hook("Pe", a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset, "var-init"),
    Qe = cc11001100_hook("Qe", a => {
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
    Re = cc11001100_hook("Re", a => {
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
      Ca(Object.keys(b), c => {
        var d = cc11001100_hook("d", a.style[Bc(c)], "var-init");
        ("undefined" !== typeof d ? d : a.style[sd(a, c)]) || P(a, c, b[c]);
      });
      hd(a);
    }, "var-init");
  function Se(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", T(a).clientWidth, "var-init");
    var d = cc11001100_hook("d", T(a).clientHeight, "var-init");
    if ("number" !== typeof c || "number" !== typeof d) throw Error("No VP width and/or height.");
    c = cc11001100_hook("c", new xc(c, d), "assign");
    d = cc11001100_hook("d", Pe(a), "assign");
    a = cc11001100_hook("a", U(a), "assign");
    a = cc11001100_hook("a", Te(a, c.width + d, c.height + a, d), "assign");
    return (Ge(b, a) ? new pd(Math.max(b.top, a.top), Math.min(b.right, a.right), Math.min(b.bottom, a.bottom), Math.max(b.left, a.left)) : null) || Te(0, 0, 0, 0);
  }
  function Ue(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Pe(b), "var-init"),
      d = cc11001100_hook("d", U(b), "var-init");
    if (a.getBoundingClientRect) return a = cc11001100_hook("a", a.getBoundingClientRect(), "assign"), Ve(a) ? Te(a.top + d, a.right + c, a.bottom + d, a.left + c) : Te(0, 0, 0, 0);
    b = cc11001100_hook("b", b.document.createRange(), "assign");
    b.selectNodeContents(a);
    return b.collapsed ? Te(0, 0, 0, 0) : b.getBoundingClientRect ? (a = cc11001100_hook("a", b.getBoundingClientRect(), "assign"), Ve(a) ? Te(a.top + d, a.right + c, a.bottom + d, a.left + c) : Te(0, 0, 0, 0)) : Te(0, 0, 0, 0);
  }
  function Ve(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a && "number" === typeof a.top && !isNaN(a.top) && "number" === typeof a.right && !isNaN(a.right) && "number" === typeof a.bottom && !isNaN(a.bottom) && "number" === typeof a.left && !isNaN(a.left);
  }
  const Te = cc11001100_hook("Te", (a, b, c, d) => new pd(Math.ceil(a), Math.floor(b), Math.floor(c), Math.ceil(d)), "var-init");
  function We(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Xe(a).forEach(b, void 0);
  }
  function Xe(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c; d++) b.push(a[d]);
    return b;
  }
  ;
  const Ye = cc11001100_hook("Ye", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new S(), "assign");
      if (a) for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.j.set(a, !0);
    }
    contains(a) {
      return Be(this.j, a);
    }
  }, "var-init");
  class Ze {
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
  function $e(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new Ze(a, b);
  }
  ;
  function af() {}
  af.prototype.next = cc11001100_hook("af.prototype.next", function () {
    return bf;
  }, "assign");
  var bf = cc11001100_hook("bf", {
    done: cc11001100_hook("done", !0, "object-key-init"),
    value: cc11001100_hook("value", void 0, "object-key-init")
  }, "var-init");
  af.prototype.Aa = cc11001100_hook("af.prototype.Aa", function () {
    return this;
  }, "assign");
  function cf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof af) return a;
    if ("function" == typeof a.Aa) return a.Aa(!1);
    if (ba(a)) {
      let b = cc11001100_hook("b", 0, "var-init");
      const c = cc11001100_hook("c", new af(), "var-init");
      c.next = cc11001100_hook("c.next", function () {
        for (;;) {
          if (b >= a.length) return bf;
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
  function df(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", cf(a), "assign");
    const {
      done: b,
      value: c
    } = cc11001100_hook("", a.next(), "var-init");
    return b ? null : c;
  }
  ;
  function ef(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof ff || a instanceof gf || a instanceof hf) return a;
    if ("function" == typeof a.next) return new ff(() => a);
    if ("function" == typeof a[Symbol.iterator]) return new ff(() => a[Symbol.iterator]());
    if ("function" == typeof a.Aa) return new ff(() => a.Aa());
    throw Error("Not an iterator or iterable.");
  }
  class ff {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Aa() {
      return new gf(this.j());
    }
    [Symbol.iterator]() {
      return new hf(this.j());
    }
    l() {
      return new hf(this.j());
    }
  }
  class gf extends af {
    constructor(a) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    next() {
      return this.j.next();
    }
    [Symbol.iterator]() {
      return new hf(this.j);
    }
    l() {
      return new hf(this.j);
    }
  }
  class hf extends ff {
    constructor(a) {
      super(() => a);
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    next() {
      return this.m.next();
    }
  }
  ;
  function jf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.l = cc11001100_hook("this.l", {}, "assign");
    this.j = cc11001100_hook("this.j", [], "assign");
    this.m = cc11001100_hook("this.m", this.size = cc11001100_hook("this.size", 0, "assign"), "assign");
    var c = cc11001100_hook("c", arguments.length, "var-init");
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = cc11001100_hook("d", 0, "var-init"); d < c; d += cc11001100_hook("d", 2, "assign")) this.set(arguments[d], arguments[d + 1]);
    } else if (a) if (a instanceof jf) for (c = cc11001100_hook("c", kf(a), "assign"), d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
  }
  p = cc11001100_hook("p", jf.prototype, "assign");
  p.zb = cc11001100_hook("p.zb", function () {
    return this.size;
  }, "assign");
  function kf(a) {
    cc11001100_hook("a", a, "function-parameter");
    lf(a);
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
  function lf(a) {
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
    for (var c = cc11001100_hook("c", kf(this), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c.length; d++) {
      var e = cc11001100_hook("e", c[d], "var-init"),
        f = cc11001100_hook("f", this.get(e), "var-init");
      a.call(b, f, e, this);
    }
  }, "assign");
  p.keys = cc11001100_hook("p.keys", function () {
    return ef(this.Aa(!0)).l();
  }, "assign");
  p.values = cc11001100_hook("p.values", function () {
    return ef(this.Aa(!1)).l();
  }, "assign");
  p.entries = cc11001100_hook("p.entries", function () {
    const a = cc11001100_hook("a", this, "var-init");
    return $e(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  }, "assign");
  p.Aa = cc11001100_hook("p.Aa", function (a) {
    lf(this);
    var b = cc11001100_hook("b", 0, "var-init"),
      c = cc11001100_hook("c", this.m, "var-init"),
      d = cc11001100_hook("d", this, "var-init"),
      e = cc11001100_hook("e", new af(), "var-init");
    e.next = cc11001100_hook("e.next", function () {
      if (c != d.m) throw Error("The map has changed since the iterator was created");
      if (b >= d.j.length) return bf;
      var f = cc11001100_hook("f", d.j[b++], "var-init");
      return {
        value: cc11001100_hook("value", a ? f : d.l[f], "object-key-init"),
        done: cc11001100_hook("done", !1, "object-key-init")
      };
    }, "assign");
    return e;
  }, "assign");
  function mf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "transparent" == a || "rgba" == a.substring(0, 4) && (a = cc11001100_hook("a", a.split(","), "assign"), 4 == a.length && .5 > parseFloat(a[3])) ? !0 : !1;
  }
  function nf() {
    Ca(of, a => {
      a.L = cc11001100_hook("a.L", null, "assign");
      a.C = cc11001100_hook("a.C", null, "assign");
    });
  }
  function pf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.D.ownerDocument) throw Error("Wrapped node should have an owner document.");
    return a.D.ownerDocument;
  }
  function qf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", pf(a), "assign");
    return a.defaultView || a.parentWindow;
  }
  function rf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.m.j(a.m.l), "var-init");
    return b == a || b != a && Mc(b.D, a.D);
  }
  function sf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Xe(a.D.childNodes).map(b => a.m.j(b)).filter(Zb(b => null === b));
  }
  function tf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.j()) return null;
    const b = cc11001100_hook("b", sf(a.j()), "var-init");
    a = cc11001100_hook("a", Ba(b, a), "assign");
    if (-1 == a) return null;
    for (a += cc11001100_hook("a", 1, "assign"); a < b.length; ++a) if (b[a].v() || b[a].I()) return b[a];
    return null;
  }
  function uf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", tf(a), "var-init");
    return b ? b : a.j() ? uf(a.j()) : null;
  }
  function vf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.push(a);
    a = cc11001100_hook("a", sf(a), "assign");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; ++c) vf(a[c], b);
  }
  function wf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.l(), "var-init");
    if (0 != b.top || 0 != b.right || 0 != b.bottom || 0 != b.left) {
      var c = cc11001100_hook("c", Pe(qf(a)), "var-init");
      a = cc11001100_hook("a", U(qf(a)), "assign");
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
    a.A = cc11001100_hook("a.A", a.A || qf(a).getComputedStyle(a.D), "assign");
    return a.A ? a.A[b] || a.A.getPropertyValue(b) || "" : "";
  }
  function xf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (void 0 !== a.F[b]) return a.F[b];
    a.F[b] = cc11001100_hook("a.F[b]", yf(a, b, c), "assign");
    return a.F[b];
  }
  function zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (void 0 !== a.H) return a.H;
    var b = cc11001100_hook("b", V(a, "position"), "var-init");
    if ("fixed" == b || "sticky" == b) b = cc11001100_hook("b", a, "assign");else {
      var c = cc11001100_hook("c", a.j(), "var-init");
      b = cc11001100_hook("b", c && "BODY" != a.D.tagName ? (c = cc11001100_hook("c", zf(c), "assign")) || "absolute" != b && "relative" != b ? c : a : null, "assign");
    }
    a.H = cc11001100_hook("a.H", b, "assign");
    return a.H;
  }
  function Af(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", zf(a), "var-init");
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
  function yf(a, b, c) {
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
        if (a.j()) return xf(a.j(), b, c);
        break;
      case "absolute":
      case "relative":
        if (e) return a;
        if (a.j()) return xf(a.j(), b, "absolute" == d);
        break;
      default:
        u.console.error("Unknown position value: " + d);
    }
    return null;
  }
  function Bf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.D.scrollHeight, "var-init");
    const c = cc11001100_hook("c", a.D.clientHeight, "var-init"),
      d = cc11001100_hook("d", pf(a).createElement("div"), "var-init");
    d.style.width = cc11001100_hook("d.style.width", "100%", "assign");
    d.style.height = cc11001100_hook("d.style.height", Math.max(b, c) + 100 + "px", "assign");
    d.style.clear = cc11001100_hook("d.style.clear", "both", "assign");
    a.D.appendChild(d);
    b = cc11001100_hook("b", a.D.scrollHeight > a.D.clientHeight && a.D.scrollHeight - b > a.D.clientHeight - c, "assign");
    a.D.removeChild(d);
    return b;
  }
  function Cf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a.G ? a.G : "1" != V(a, "opacity") || a.j() && !Cf(a.j()) ? a.G = cc11001100_hook("a.G", !1, "assign") : a.G = cc11001100_hook("a.G", !0, "assign");
  }
  function Df(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.l(), "assign");
    a = cc11001100_hook("a", new pd(Math.max(a.top, 0), Math.max(a.right, 0), Math.max(a.bottom, 0), Math.max(a.left, 0)), "assign");
    return a.left < a.right && a.top < a.bottom;
  }
  function Ef(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a.B ? a.B : a.j() && Ef(a.j()) || "0" == V(a, "opacity") || "none" == V(a, "display") || "hidden" == V(a, "visibility") || a.D.tagName && "input" == a.D.tagName.toLowerCase() && a.D.type && "hidden" == a.D.type ? a.B = cc11001100_hook("a.B", !0, "assign") : a.B = cc11001100_hook("a.B", !1, "assign");
  }
  function Ff(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b(a) ? !0 : a.j() ? Ff(a.j(), b) : !1;
  }
  function Gf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !Ff(a, b => "hidden" == V(b, "overflow-y"));
  }
  function Hf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", V(a, "position"), "assign");
    return "absolute" == a || "relative" == a;
  }
  function If(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.v() && (a = cc11001100_hook("a", parseInt(V(a, "z-index"), 10), "assign"), !isNaN(a)) ? a : 0;
  }
  function Jf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ff(a, c => !!c.D.tagName && c.D.tagName == b);
  }
  function Kf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ff(a, c => {
      c = cc11001100_hook("c", c.D, "assign");
      return !!c.id && !!c.id.match && !!c.id.match(b);
    });
  }
  function Lf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ff(a, c => {
      a: {
        c = cc11001100_hook("c", Mf(c), "assign");
        for (let d = cc11001100_hook("d", 0, "var-init"); d < c.length; ++d) if (c[d].match(b)) {
          c = cc11001100_hook("c", !0, "assign");
          break a;
        }
        c = cc11001100_hook("c", !1, "assign");
      }
      return c;
    });
  }
  function Mf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a.D.className, "assign")) && "function" === typeof a.split ? /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/) : [];
  }
  function Nf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "A" == a.D.tagName ? a.D.getAttribute("href") : (a = cc11001100_hook("a", a.j(), "assign")) ? Nf(a) : null;
  }
  function Of(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (1 != a.D.nodeType) {
      var b = cc11001100_hook("b", a.j(), "var-init");
      return b ? Of(b) : 0;
    }
    const c = cc11001100_hook("c", pf(a).createTextNode("A"), "var-init");
    a.D.appendChild(c);
    b = cc11001100_hook("b", a.m.j(c), "assign");
    if (!b) throw a.D.removeChild(c), Error("Unable to insert textnode");
    a = cc11001100_hook("a", b.l(), "assign");
    b.D.parentNode && b.D.parentNode.removeChild(b.D);
    return a.bottom - a.top;
  }
  function Pf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b || null == a.W) {
      if (b && !b(a)) return 0;
      let c = cc11001100_hook("c", 0, "var-init");
      if (a.I()) c = cc11001100_hook("c", a.D.textContent.trim().length, "assign");else {
        const d = cc11001100_hook("d", sf(a), "var-init");
        for (let e = cc11001100_hook("e", 0, "var-init"); e < d.length; e++) c += cc11001100_hook("c", Pf(d[e], b), "assign");
      }
      b || (a.W = cc11001100_hook("a.W", c, "assign"));
      return c;
    }
    return a.W;
  }
  class Qf {
    constructor(a, b) {
      this.D = cc11001100_hook("this.D", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.B = cc11001100_hook("this.B", this.G = cc11001100_hook("this.G", this.J = cc11001100_hook("this.J", this.K = cc11001100_hook("this.K", null, "assign"), "assign"), "assign"), "assign");
      this.F = cc11001100_hook("this.F", {}, "assign");
      this.A = cc11001100_hook("this.A", this.C = cc11001100_hook("this.C", this.W = cc11001100_hook("this.W", null, "assign"), "assign"), "assign");
      new jf();
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
        this.C || (this.C = cc11001100_hook("this.C", Ue(this.D, qf(this)), "assign"));
        var a = cc11001100_hook("a", qd(this.C), "var-init");
        var b = cc11001100_hook("b", V(this, "position"), "var-init");
        if ("fixed" == b) a = cc11001100_hook("a", Se(qf(this), a), "assign");else if (this.j()) {
          var c = cc11001100_hook("c", xf(this.j(), 0, "absolute" == b), "var-init");
          if (c) {
            var d = cc11001100_hook("d", c.l(), "var-init");
            c = cc11001100_hook("c", d.left, "assign");
            d = cc11001100_hook("d", d.right, "assign");
            a = cc11001100_hook("a", a.left >= d || a.right <= c ? null : Te(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c)), "assign");
          }
          a && (b = cc11001100_hook("b", xf(this.j(), 1, "absolute" == b), "assign")) && (c = cc11001100_hook("c", b.l(), "assign"), b = cc11001100_hook("b", c.top, "assign"), c = cc11001100_hook("c", c.bottom, "assign"), a = cc11001100_hook("a", a.top >= c || a.bottom <= b ? null : Te(Math.max(a.top, b), a.right, Math.min(a.bottom, c), a.left), "assign"));
          a = cc11001100_hook("a", a && zf(this) && "fixed" == V(zf(this), "position") ? Se(qf(this), a) : a || new pd(0, 0, 0, 0), "assign");
        }
        this.L = cc11001100_hook("this.L", a, "assign");
      }
      return qd(this.L);
    }
    Ka() {
      return !Df(this) || Ef(this);
    }
    Bb() {
      var a = cc11001100_hook("a", V(this, "background-color"), "var-init");
      if (a = cc11001100_hook("a", a ? mf(a) : !0, "assign")) a = cc11001100_hook("a", V(this, "background-image"), "assign"), a = cc11001100_hook("a", !(a && "none" != a), "assign");
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
  function Rf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(b), "var-init");
    var d = cc11001100_hook("d", a.v.get(c), "var-init");
    if ("boolean" === typeof d) return d;
    d = cc11001100_hook("d", a.A && 3 == b.nodeType ? !/\S/.test(b.data) : 1 != b.nodeType && 3 != b.nodeType && 9 != b.nodeType || b.tagName && ("SCRIPT" == b.tagName || "STYLE" == b.tagName) ? !0 : !1, "assign");
    !d && b.parentNode && b != a.l && (d = cc11001100_hook("d", Rf(a, b.parentNode), "assign"));
    a.v.set(c, d);
    return d;
  }
  var Sf = cc11001100_hook("Sf", class {
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
        if (Rf(this, a)) return null;
        a = cc11001100_hook("a", new Qf(a, this), "assign");
        this.m.set(b, a);
        return a;
      }
    }, "var-init"),
    of = cc11001100_hook("of", [], "var-init");
  class Tf {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    j(a) {
      return Uf(this.m, a).contains(this.l);
    }
  }
  ;
  function Uf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(b), "var-init"),
      d = cc11001100_hook("d", a.l.get(c), "var-init");
    if (d) return d;
    b = cc11001100_hook("b", a.j(b), "assign");
    a.l.set(c, b);
    return b;
  }
  class Vf {
    constructor() {
      this.l = cc11001100_hook("this.l", new S(), "assign");
    }
  }
  ;
  function Wf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", Nf(b), "var-init");
    if (a.m.j(b) && null !== c) return c;
    b = cc11001100_hook("b", sf(b), "assign");
    if (1 > b.length) return null;
    c = cc11001100_hook("c", Wf(a, b[0]), "assign");
    for (let d = cc11001100_hook("d", 1, "var-init"); d < b.length; ++d) if (Wf(a, b[d]) != c) return null;
    return c;
  }
  class Xf extends Vf {
    constructor(a) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j(a) {
      return new Ye(null !== Wf(this, a) ? [1] : []);
    }
  }
  ;
  class Yf extends Vf {
    constructor(a) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j(a) {
      a: if (3 == a.D.nodeType) var b = cc11001100_hook("b", this.m.j(a), "var-init");else {
        b = cc11001100_hook("b", !1, "assign");
        a = cc11001100_hook("a", sf(a), "assign");
        for (let c of a) {
          if ((a = cc11001100_hook("a", V(c, "display"), "assign")) && "inline" != a) {
            b = cc11001100_hook("b", !1, "assign");
            break a;
          }
          Uf(this, c).contains(0) && (b = cc11001100_hook("b", !0, "assign"));
        }
      }
      return new Ye(b ? [0] : []);
    }
  }
  ;
  function Zf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Pf(b, c => !a.m.j(c));
  }
  class $f extends Vf {
    constructor(a, b, c) {
      super();
      this.v = cc11001100_hook("this.v", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
    }
    j(a) {
      if (this.v.j(a) && !this.m.j(a) && !this.A.j(a) && 50 <= Zf(this, a)) {
        var b = cc11001100_hook("b", Of(a), "var-init");
        a = cc11001100_hook("a", a.l(), "assign");
        b = cc11001100_hook("b", a.bottom - a.top >= 2 * b || !1, "assign");
      } else b = cc11001100_hook("b", !1, "assign");
      return new Ye(b ? [3] : []);
    }
  }
  ;
  function ag(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.classList ? a.classList.contains("adsbygoogle") : Ga(a.classList ? a.classList : ("string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle");
  }
  ;
  function bg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.m.j(b) ? Ff(b, function (c) {
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
    }) || cg(b) && 5 <= Pf(b) ? !0 : (b = cc11001100_hook("b", b.j(), "assign")) ? Uf(a, b).contains(2) : !1 : !1;
  }
  function cg(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Mf(a), "assign");
    for (let b of a) if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/)) return !0;
    return !1;
  }
  class dg extends Vf {
    constructor(a) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j(a) {
      return new Ye(bg(this, a) ? [2] : []);
    }
  }
  ;
  function eg(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    Ca(a, c => {
      1 == c.D.nodeType && (fg(c, ":before", b), fg(c, ":after", b));
    });
    return b;
  }
  function gg(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", V(a, "content"), "assign");
    if (!a || "none" == a || /\(.*\)/.test(a)) return !1;
    /^['"].*['"]$/.test(a) && (a = cc11001100_hook("a", a.substring(1, a.length - 1), "assign"));
    return 0 < a.trim().length;
  }
  class hg extends Qf {
    constructor(a, b) {
      super(a.D, a.m);
      this.M = cc11001100_hook("this.M", a, "assign");
      this.Ca = cc11001100_hook("this.Ca", b, "assign");
      this.A = cc11001100_hook("this.A", qf(a).getComputedStyle(a.D, this.Ca), "assign");
    }
    v() {
      return !1;
    }
    I() {
      return !1;
    }
    Ka() {
      if (!gg(this) && this.Bb()) var a = cc11001100_hook("a", !0, "var-init");else if (!(a = cc11001100_hook("a", this.j().Ka() || Ef(this) || !Df(this), "assign"))) {
        a = cc11001100_hook("a", gg(this), "assign");
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
      const a = cc11001100_hook("a", vd(this.j().D, "backgroundColor"), "var-init"),
        b = cc11001100_hook("b", V(this, "background-color"), "var-init");
      return null == b || b == a || mf(b) || "fixed" != V(this, "position");
    }
    l() {
      switch (V(this, "position")) {
        case "absolute":
          var a = cc11001100_hook("a", this.j().l(), "var-init");
          const b = cc11001100_hook("b", a.top + parseInt(V(this, "top"), 10), "var-init");
          a = cc11001100_hook("a", a.left + parseInt(V(this, "left"), 10), "assign");
          let c = cc11001100_hook("c", parseInt(V(this, "width"), 10), "var-init"),
            d = cc11001100_hook("d", parseInt(V(this, "height"), 10), "var-init");
          return new pd(b, a + c, b + d, a);
        case "fixed":
          return new pd(0, parseInt(V(this, "width"), 10), parseInt(V(this, "height"), 10), 0);
        default:
          return this.j().l();
      }
    }
  }
  const fg = cc11001100_hook("fg", (a, b, c) => {
    if (":before" == b || ":after" == b) {
      var d = cc11001100_hook("d", new hg(a, b), "var-init");
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
  const ig = cc11001100_hook("ig", new Ye("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" ")), "var-init");
  class jg extends Vf {
    j(a) {
      var b = cc11001100_hook("b", a.D, "var-init"),
        c = cc11001100_hook("c", pf(a), "var-init");
      if (3 == b.nodeType) {
        var d = cc11001100_hook("d", b.data, "var-init");
        c = cc11001100_hook("c", -1 != d.indexOf("&") ? yc(d, c) : d, "assign");
        c = cc11001100_hook("c", /\S/.test(c), "assign");
      } else c = cc11001100_hook("c", !1, "assign");
      (c = cc11001100_hook("c", c || (a instanceof hg ? gg(a) : !1), "assign")) || (c = cc11001100_hook("c", (b = cc11001100_hook("b", b.tagName, "assign")) && ig.contains(b.toUpperCase()), "assign"));
      a = cc11001100_hook("a", c && !a.Ka(), "assign");
      return new Ye(a ? [6] : []);
    }
  }
  ;
  function kg(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A || (a.A = cc11001100_hook("a.A", new jg(), "assign"));
    return a.A;
  }
  function lg(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l || (a.l = cc11001100_hook("a.l", new Yf(new Tf(kg(a), 6)), "assign"));
    return a.l;
  }
  function mg(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m || (a.m = cc11001100_hook("a.m", new dg(new Tf(lg(a), 0)), "assign"));
    return a.m;
  }
  class ng {
    constructor() {
      this.v = cc11001100_hook("this.v", this.m = cc11001100_hook("this.m", this.j = cc11001100_hook("this.j", this.l = cc11001100_hook("this.l", this.A = cc11001100_hook("this.A", null, "assign"), "assign"), "assign"), "assign"), "assign");
    }
  }
  ;
  const og = cc11001100_hook("og", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new ng(), "assign");
    }
  }, "var-init");
  function pg(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (const c of a.j) b.push(c);
    return b;
  }
  class qg {
    constructor() {
      this.j = cc11001100_hook("this.j", [], "assign");
      this.m = cc11001100_hook("this.m", new Ye(), "assign");
    }
    contains(a) {
      return this.m.contains(w(a));
    }
  }
  ;
  class rg {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
    }
    ca() {
      return this.m;
    }
  }
  const tg = cc11001100_hook("tg", (a, b, c) => {
      b = cc11001100_hook("b", sg(a.K, b, c), "assign");
      const d = cc11001100_hook("d", new rg(a, 0, b++), "var-init");
      c.pa.push(d);
      for (var e of sf(a)) b = cc11001100_hook("b", tg(e, b, c), "assign");
      e = cc11001100_hook("e", new rg(a, 1, b++), "assign");
      c.pa.push(e);
      c.map.set(w(a), {
        start: cc11001100_hook("start", d, "object-key-init"),
        end: cc11001100_hook("end", e, "object-key-init")
      });
      return b = cc11001100_hook("b", sg(a.J, b, c), "assign");
    }, "var-init"),
    sg = cc11001100_hook("sg", (a, b, c) => {
      if (!a) return b;
      const d = cc11001100_hook("d", new rg(a, 0, b++), "var-init"),
        e = cc11001100_hook("e", new rg(a, 1, b++), "var-init");
      c.pa.push(d);
      c.pa.push(e);
      c.map.set(w(a), {
        start: cc11001100_hook("start", d, "object-key-init"),
        end: cc11001100_hook("end", e, "object-key-init")
      });
      return b;
    }, "var-init");
  function ug(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof hg) return !0;
    if (!a.v()) return !1;
    const b = cc11001100_hook("b", a.D, "var-init"),
      c = cc11001100_hook("c", V(a, "position"), "var-init");
    if ("HTML" == b.tagName || "fixed" == c || "auto" != V(a, "z-index") && ("absolute" == c || "relative" == c)) return !0;
    a = cc11001100_hook("a", V(a, "opacity"), "assign");
    return "1" != a && "" != a ? !0 : !1;
  }
  function vg(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j.j(), "var-init");
    return b ? wg(a.l, b) : null;
  }
  class xg {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
  }
  function yg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", wg(a.j, b), "var-init");
    a = cc11001100_hook("a", wg(a.j, c), "assign");
    d = cc11001100_hook("d", zg(d, a), "assign");
    if (!d) return 0;
    switch (d.tb) {
      case 0:
        return If(b) - If(d.pb.j);
      case 1:
        return If(d.ob.j) - If(c);
      case 2:
        return If(d.ob.j) - If(d.pb.j);
      default:
        throw Error("Unhandled adjacency.");
    }
  }
  var Bg = cc11001100_hook("Bg", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new Ag(), "assign");
    }
  }, "var-init");
  function wg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(b), "var-init");
    var d = cc11001100_hook("d", a.j.get(c), "var-init");
    if (d) return d;
    d = cc11001100_hook("d", b.j(), "assign");
    b = cc11001100_hook("b", !d || ug(b) ? new xg(b, a) : wg(a, d), "assign");
    a.j.set(c, b);
    return b;
  }
  var Ag = cc11001100_hook("Ag", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new S(), "assign");
    }
  }, "var-init");
  function zg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a == b) return null;
    const c = cc11001100_hook("c", new S(), "var-init");
    var d = cc11001100_hook("d", b, "var-init");
    let e;
    for (; e = cc11001100_hook("e", vg(d), "assign");) {
      if (a == e) return {
        ob: cc11001100_hook("ob", a, "object-key-init"),
        tb: cc11001100_hook("tb", 0, "object-key-init"),
        pb: cc11001100_hook("pb", d, "object-key-init")
      };
      c.set(w(e), d);
      d = cc11001100_hook("d", e, "assign");
    }
    for (; e = cc11001100_hook("e", vg(a), "assign");) {
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
  function Cg(a, b, c, d = []) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", [].concat(a, d), "assign");
    b = cc11001100_hook("b", new Dg(b, c), "assign");
    for (let e of a) e.Bb() || e.Ka() || (c = cc11001100_hook("c", b, "assign"), a = cc11001100_hook("a", e, "assign"), c.j.push(a), c.m.add(w(a)));
    return b;
  }
  class Dg extends qg {
    constructor(a, b) {
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
    }
    v(a, b = !1) {
      const c = cc11001100_hook("c", a.l(), "var-init");
      b = cc11001100_hook("b", b ? pg(this) : this.j.slice(0), "assign");
      for (let f = cc11001100_hook("f", 0, "var-init"); f < b.length; ++f) {
        var d = cc11001100_hook("d", b[f], "var-init");
        if (!rf(d)) continue;
        var e = cc11001100_hook("e", d.l(), "var-init");
        if (!Ge(e, c)) continue;
        const g = cc11001100_hook("g", yg(this.A, d, a), "var-init");
        !(e = cc11001100_hook("e", 0 < g, "assign")) && (e = cc11001100_hook("e", 0 == g && !(d != a && Mc(d.D, a.D)), "assign")) && (e = cc11001100_hook("e", a, "assign"), Hf(d) && !Hf(e) ? e = cc11001100_hook("e", !0, "assign") : !Hf(d) && Hf(e) ? e = cc11001100_hook("e", !1, "assign") : (e = cc11001100_hook("e", this.l.map.get(w(e)), "assign"), d = cc11001100_hook("d", this.l.map.get(w(d)), "assign"), e = cc11001100_hook("e", e && d && e.end.ca() < d.start.ca() ? !0 : !1, "assign")));
        if (e) return !0;
      }
      return !1;
    }
  }
  ;
  class Eg {
    constructor(a, b) {
      this.ic = cc11001100_hook("this.ic", a, "assign");
      this.nc = cc11001100_hook("this.nc", b, "assign");
    }
  }
  ;
  function Fg(a, b) {
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
  class Gg extends qg {
    constructor(a) {
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
    }
  }
  ;
  const Hg = cc11001100_hook("Hg", class extends Gg {
    constructor(a, b) {
      super(a);
      this.A = cc11001100_hook("this.A", b, "assign");
    }
    v(a, b = !1) {
      const c = cc11001100_hook("c", a.l(), "var-init"),
        d = cc11001100_hook("d", Af(a), "var-init");
      b = cc11001100_hook("b", b ? pg(this) : this.j.slice(0), "assign");
      for (let e = cc11001100_hook("e", 0, "var-init"); e < b.length; ++e) {
        const f = cc11001100_hook("f", b[e], "var-init");
        if (rf(f) && (d || !(0 < yg(this.A, a, f))) && Ge(b[e].l(), c)) return !0;
      }
      return !1;
    }
  }, "var-init");
  const Ig = cc11001100_hook("Ig", class {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
    }
  }, "var-init");
  const Jg = cc11001100_hook("Jg", class {
    constructor(a, b, c, d, e, f, g, h) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.P = cc11001100_hook("this.P", c, "assign");
      this.R = cc11001100_hook("this.R", d, "assign");
      this.v = cc11001100_hook("this.v", e, "assign");
      this.m = cc11001100_hook("this.m", f, "assign");
      this.j = cc11001100_hook("this.j", g, "assign");
      this.B = cc11001100_hook("this.B", h, "assign");
    }
  }, "var-init");
  const Kg = cc11001100_hook("Kg", class {
    constructor(a, b, c, d) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
    }
  }, "var-init");
  class Lg {
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
  const Mg = cc11001100_hook("Mg", class {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b || null, "assign");
    }
  }, "var-init");
  function Ng(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 != a.m) throw Error("Already resolved/rejected.");
  }
  var Qg = cc11001100_hook("Qg", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new Og(this), "assign");
      this.m = cc11001100_hook("this.m", 0, "assign");
    }
    resolve(a) {
      Ng(this);
      this.m = cc11001100_hook("this.m", 1, "assign");
      this.A = cc11001100_hook("this.A", a, "assign");
      Pg(this.j);
    }
    l(a) {
      Ng(this);
      this.m = cc11001100_hook("this.m", 2, "assign");
      this.v = cc11001100_hook("this.v", a, "assign");
      Pg(this.j);
    }
  }, "var-init");
  function Pg(a) {
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
  var Og = cc11001100_hook("Og", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    then(a, b) {
      if (this.l) throw Error("Then functions already set.");
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      Pg(this);
    }
  }, "var-init");
  function Rg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", new Qg(), "var-init");
    a.j(new Mg(function () {
      d.resolve(b());
    }, c));
    return d.j;
  }
  function Sg(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j(new Mg(function () {
      b.resolve(c);
    }, d));
  }
  function Tg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j(new Mg(function () {
      b.l("n");
    }, "rrej"));
  }
  var Ug = cc11001100_hook("Ug", class {}, "var-init");
  class Vg {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }
  ;
  function Wg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new Qg(), "var-init");
    a.j.j(new Mg(function () {
      Xg(a, b, c);
    }, "idom"));
    return c.j;
  }
  function Yg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Rg(a.j, function () {
      return new og();
    }, "icla");
  }
  function Zg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", new Qg(), "var-init");
    $g(a, b, new Vg(c.j)).then(function (e) {
      ah(a, b).then(function (f) {
        bh(a, b, e).then(function (g) {
          d.resolve(new Ig(f, g, e));
        });
      });
    });
    return d.j;
  }
  function ch(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", new Qg(), "var-init");
    Wg(a, b).then(function (e) {
      Yg(a).then(function (f) {
        Zg(a, e, f).then(function (g) {
          Sg(a.j, d, new Kg(e, g, f, c));
        }, x(d.l, d));
      }, x(d.l, d));
    }, x(d.l, d));
    return d.j;
  }
  function Xg(a, b, c) {
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
          var h = cc11001100_hook("h", new Sf(d, !0).j(d), "var-init");
          if (h) {
            var l = cc11001100_hook("l", new Bg(), "var-init");
            dh(a, h).then(function (k) {
              of = cc11001100_hook("of", k, "assign");
              eh(a, h).then(function (m) {
                c.resolve(new Jg(b, e, f, g, h, k, m, l));
              });
            });
          } else c.l("nt");
        }
      }
    } else c.l("b");
  }
  function dh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Rg(a.j, function () {
      const c = cc11001100_hook("c", [], "var-init");
      vf(b, c);
      return c;
    }, "iflt");
  }
  function eh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Rg(a.j, function () {
      const c = cc11001100_hook("c", {
        map: cc11001100_hook("map", new S(), "object-key-init"),
        pa: cc11001100_hook("pa", [], "object-key-init")
      }, "var-init");
      tg(b, 0, c);
      return c;
    }, "intm");
  }
  function $g(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Rg(a.j, function () {
      var d = cc11001100_hook("d", b.m, "var-init");
      const e = cc11001100_hook("e", new Hg(b.j, b.B), "var-init"),
        f = cc11001100_hook("f", new Tf(kg(c.j), 6), "var-init");
      for (let h of d) if (f.j(h)) {
        d = cc11001100_hook("d", e, "assign");
        var g = cc11001100_hook("g", h, "var-init");
        d.j.push(g);
        d.m.add(w(g));
      }
      return e;
    }, "ivis");
  }
  function ah(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Rg(a.j, function () {
      var c = cc11001100_hook("c", eg(b.m), "var-init");
      return Cg(b.m, b.j, b.B, c);
    }, "ibck");
  }
  function bh(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Rg(a.j, function () {
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
      g = cc11001100_hook("g", De(e), "assign");
      for (h = cc11001100_hook("h", 0, "assign"); h < g.length; ++h) {
        l = cc11001100_hook("l", e.get(g[h]), "assign");
        k = cc11001100_hook("k", f.get(g[h]), "assign");
        if ("number" !== typeof k) throw Error("No entry in minSubsequentTopBounds for terminal UID!");
        d.set(g[h], new Eg(l, k));
      }
      return d;
    }, "irel");
  }
  var fh = cc11001100_hook("fh", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }, "var-init");
  function gh(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    We(a.getElementsByTagName("p"), function (c) {
      100 <= hh(c) && b.push(c);
    });
    return b;
  }
  function hh(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = cc11001100_hook("b", 0, "var-init");
    We(a.childNodes, function (c) {
      b += cc11001100_hook("b", hh(c), "assign");
    });
    return b;
  }
  function ih(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function jh(a, b) {
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
  const kh = cc11001100_hook("kh", class {
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
      a = cc11001100_hook("a", Ha(b), "assign");
      a = cc11001100_hook("a", jh(this, a), "assign");
      "number" === typeof this.l && (b = cc11001100_hook("b", this.l, "assign"), 0 > b && (b += cc11001100_hook("b", a.length, "assign")), a = cc11001100_hook("a", 0 <= b && b < a.length ? [a[b]] : [], "assign"));
      if ("number" === typeof this.m) {
        b = cc11001100_hook("b", [], "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
          var d = cc11001100_hook("d", gh(a[c]), "var-init"),
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
  function lh(a) {
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
  class mh {
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
  function nh(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    for (const e of a.j) b(e) ? d.push(e) : c(e);
    return new oh(d);
  }
  function ph(a, b = 1) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.j.slice(0), "assign");
    const c = cc11001100_hook("c", new mh(b), "var-init");
    Ja(a, () => c.next());
    return new oh(a);
  }
  const oh = cc11001100_hook("oh", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a.slice(0), "assign");
    }
    forEach(a) {
      this.j.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new oh(Da(this.j, a));
    }
    apply(a) {
      return new oh(a(this.j.slice(0)));
    }
    sort(a) {
      return new oh(this.j.slice(0).sort(a));
    }
    get(a) {
      return this.j[a];
    }
    add(a) {
      const b = cc11001100_hook("b", this.j.slice(0), "var-init");
      b.push(a);
      return new oh(b);
    }
  }, "var-init");
  var rh = cc11001100_hook("rh", class extends Sb {
      constructor(a) {
        super(a, -1, qh);
      }
      getId() {
        return C(this, 3);
      }
    }, "var-init"),
    qh = cc11001100_hook("qh", [4], "var-init");
  class sh {
    constructor(a, {
      Ub: b,
      Oc: c,
      Yc: d,
      wc: e
    }) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
      this.v = cc11001100_hook("this.v", new oh(b || []), "assign");
      this.j = cc11001100_hook("this.j", e, "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
    }
  }
  ;
  var th = cc11001100_hook("th", a => {
      var b = cc11001100_hook("b", a.split("~").filter(c => 0 < c.length), "var-init");
      a = cc11001100_hook("a", new S(), "assign");
      for (const c of b) b = cc11001100_hook("b", c.indexOf("."), "assign"), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
      return a;
    }, "var-init"),
    vh = cc11001100_hook("vh", a => {
      var b = cc11001100_hook("b", uh(a), "var-init");
      a = cc11001100_hook("a", [], "assign");
      for (let c of b) b = cc11001100_hook("b", String(c.Ua), "assign"), a.push(c.Na + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
      return a.join("~");
    }, "var-init");
  const uh = cc11001100_hook("uh", a => {
      const b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", a.v, "var-init");
      c && c.j.length && b.push({
        Na: cc11001100_hook("Na", "a", "object-key-init"),
        Ua: cc11001100_hook("Ua", wh(c), "object-key-init")
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
        Ua: cc11001100_hook("Ua", xh(a.A), "object-key-init")
      });
      return b;
    }, "var-init"),
    xh = cc11001100_hook("xh", a => {
      switch (a) {
        case 0:
          return "aa";
        case 1:
          return "ma";
        default:
          throw Error("Invalid slot type" + a);
      }
    }, "var-init"),
    wh = cc11001100_hook("wh", a => {
      a = cc11001100_hook("a", a.j.slice(0).map(yh), "assign");
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
    yh = cc11001100_hook("yh", a => {
      const b = cc11001100_hook("b", {}, "var-init");
      null != C(a, 7) && (b.q = cc11001100_hook("b.q", C(a, 7), "assign"));
      null != C(a, 2) && (b.o = cc11001100_hook("b.o", C(a, 2), "assign"));
      null != C(a, 5) && (b.p = cc11001100_hook("b.p", C(a, 5), "assign"));
      return b;
    }, "var-init");
  var zh = cc11001100_hook("zh", class extends Sb {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return vb(this, 1, a);
    }
  }, "var-init");
  var Ah = cc11001100_hook("Ah", class {
    constructor(a, b = !1) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
    }
  }, "var-init");
  var Bh = cc11001100_hook("Bh", new Ah(1196), "var-init"),
    Ch = cc11001100_hook("Ch", new Ah(313), "var-init"),
    Dh = cc11001100_hook("Dh", new Ah(1233), "var-init"),
    Eh = cc11001100_hook("Eh", new Ah(1232, !0), "var-init"),
    Fh = cc11001100_hook("Fh", new Ah(1147), "var-init"),
    Gh = cc11001100_hook("Gh", new Ah(1957, !0), "var-init"),
    Hh = cc11001100_hook("Hh", new class {
      constructor(a, b = 0) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
      }
    }(1972), "var-init");
  var Ih = cc11001100_hook("Ih", class {
    constructor() {
      const a = cc11001100_hook("a", {}, "var-init");
      this.j = cc11001100_hook("this.j", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.l = cc11001100_hook("this.l", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.v = cc11001100_hook("this.v", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.A = cc11001100_hook("this.A", (b, c) => null != a[b] ? a[b] : c, "assign");
      this.m = cc11001100_hook("this.m", () => {}, "assign");
    }
  }, "var-init");
  function Jh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return R(Ih).j(a.j, a.defaultValue);
  }
  ;
  function Kh(a, b, c) {
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
    lh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = cc11001100_hook("b.style.display", "block", "assign"));
  }
  function Lh(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a && a.parentNode) {
      const b = cc11001100_hook("b", a.parentNode, "var-init");
      b.removeChild(a);
      lh(b) && (b.style.display = cc11001100_hook("b.style.display", b.getAttribute("data-init-display") || "none", "assign"));
    }
  }
  ;
  var Nh = cc11001100_hook("Nh", (a, b, c) => {
    if (Jh(Ch)) {
      var d = cc11001100_hook("d", Mh(b, c), "var-init");
      if (d.Ia) {
        for (c = cc11001100_hook("c", b = cc11001100_hook("b", d.Ia, "assign"), "assign"); c = cc11001100_hook("c", d.aa(c), "assign");) b = cc11001100_hook("b", c, "assign");
        d = cc11001100_hook("d", {
          anchor: cc11001100_hook("anchor", b, "object-key-init"),
          position: cc11001100_hook("position", d.jb, "object-key-init")
        }, "assign");
      } else d = cc11001100_hook("d", {
        anchor: cc11001100_hook("anchor", b, "object-key-init"),
        position: cc11001100_hook("position", c, "object-key-init")
      }, "assign");
      a["google-ama-order-assurance"] = cc11001100_hook("a[\"google-ama-order-assurance\"]", 0, "assign");
      Kh(a, d.anchor, d.position);
    } else Kh(a, b, c);
  }, "var-init");
  function Mh(a, b) {
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
          Ia: cc11001100_hook("Ia", Ph(a.previousSibling, c), "object-key-init"),
          aa: cc11001100_hook("aa", e => Ph(e.previousSibling, c), "object-key-init"),
          jb: cc11001100_hook("jb", 0, "object-key-init")
        };
      case 2:
        return {
          Ia: cc11001100_hook("Ia", Ph(a.lastChild, c), "object-key-init"),
          aa: cc11001100_hook("aa", e => Ph(e.previousSibling, c), "object-key-init"),
          jb: cc11001100_hook("jb", 0, "object-key-init")
        };
      case 3:
        return {
          Ia: cc11001100_hook("Ia", Ph(a.nextSibling, d), "object-key-init"),
          aa: cc11001100_hook("aa", e => Ph(e.nextSibling, d), "object-key-init"),
          jb: cc11001100_hook("jb", 3, "object-key-init")
        };
      case 1:
        return {
          Ia: cc11001100_hook("Ia", Ph(a.firstChild, d), "object-key-init"),
          aa: cc11001100_hook("aa", e => Ph(e.nextSibling, d), "object-key-init"),
          jb: cc11001100_hook("jb", 3, "object-key-init")
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
    0: cc11001100_hook(0, 0, "object-key-init"),
    1: cc11001100_hook(1, 1, "object-key-init"),
    2: cc11001100_hook(2, 2, "object-key-init"),
    3: cc11001100_hook(3, 3, "object-key-init")
  }, "var-init");
  var Rh = cc11001100_hook("Rh", {
      BODY: {
        da: cc11001100_hook("da", [1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !1, "object-key-init"),
        la: cc11001100_hook("la", 2, "object-key-init"),
        ja: cc11001100_hook("ja", 4, "object-key-init")
      },
      HEADER: {
        da: cc11001100_hook("da", [0, 3, 1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !1, "object-key-init"),
        la: cc11001100_hook("la", 1, "object-key-init"),
        ja: cc11001100_hook("ja", 3, "object-key-init")
      },
      NAV: {
        da: cc11001100_hook("da", [0, 3], "object-key-init"),
        ka: cc11001100_hook("ka", !1, "object-key-init"),
        la: cc11001100_hook("la", 1, "object-key-init"),
        ja: cc11001100_hook("ja", 3, "object-key-init")
      },
      H1: {
        da: cc11001100_hook("da", [0], "object-key-init"),
        ka: cc11001100_hook("ka", !1, "object-key-init"),
        la: cc11001100_hook("la", 1, "object-key-init"),
        ja: cc11001100_hook("ja", 2, "object-key-init")
      },
      IMG: {
        da: cc11001100_hook("da", [0, 3], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      DIV: {
        da: cc11001100_hook("da", [0, 3, 1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      TABLE: {
        da: cc11001100_hook("da", [0, 3], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      TD: {
        da: cc11001100_hook("da", [1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      ASIDE: {
        da: cc11001100_hook("da", [0, 3, 1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      LI: {
        da: cc11001100_hook("da", [1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      SECTION: {
        da: cc11001100_hook("da", [0, 3, 1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      }
    }, "var-init"),
    Sh = cc11001100_hook("Sh", a => ({
      da: cc11001100_hook("da", a.da.slice(0), "object-key-init"),
      ka: cc11001100_hook("ka", a.ka, "object-key-init"),
      la: cc11001100_hook("la", a.la, "object-key-init"),
      ja: cc11001100_hook("ja", a.ja, "object-key-init")
    }), "var-init"),
    Th = cc11001100_hook("Th", (a, b) => {
      const c = cc11001100_hook("c", Sh(a), "var-init");
      c.da = cc11001100_hook("c.da", Da(a.da, d => b[d]), "assign");
      return c;
    }, "var-init");
  function Uh(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length - 1, "var-init"),
      c = cc11001100_hook("c", new af(), "var-init");
    c.next = cc11001100_hook("c.next", function () {
      return 0 > b ? bf : {
        value: cc11001100_hook("value", a[b--], "object-key-init"),
        done: cc11001100_hook("done", !1, "object-key-init")
      };
    }, "assign");
    return c;
  }
  ;
  var Vh = cc11001100_hook("Vh", {
      0: cc11001100_hook(0, !0, "object-key-init"),
      1: cc11001100_hook(1, !0, "object-key-init")
    }, "var-init"),
    Wh = cc11001100_hook("Wh", {
      2: cc11001100_hook(2, !0, "object-key-init"),
      3: cc11001100_hook(3, !0, "object-key-init")
    }, "var-init"),
    Xh = cc11001100_hook("Xh", {
      3: cc11001100_hook(3, !0, "object-key-init")
    }, "var-init"),
    Yh = cc11001100_hook("Yh", class {
      constructor(a, b, c) {
        this.m = cc11001100_hook("this.m", a, "assign");
        this.l = cc11001100_hook("this.l", b, "assign");
        this.j = cc11001100_hook("this.j", c, "assign");
      }
      aa() {
        for (var a = cc11001100_hook("a", df(this.l), "var-init"); null !== a; a = cc11001100_hook("a", df(this.l), "assign")) {
          var b = cc11001100_hook("b", a.j, "var-init");
          if (1 != b.D.nodeType) b = cc11001100_hook("b", null, "assign");else {
            var c = cc11001100_hook("c", Rh[b.D.tagName], "var-init");
            c ? (a = cc11001100_hook("a", Th(c, 0 == a.l ? Vh : 0 < sf(a.j).length ? Wh : Xh), "assign"), b = cc11001100_hook("b", {
              node: cc11001100_hook("node", b, "object-key-init"),
              ub: cc11001100_hook("ub", a, "object-key-init"),
              identifier: {}
            }, "assign")) : b = cc11001100_hook("b", null, "assign");
          }
          if (b && (a = cc11001100_hook("a", b.node.l().getWidth(), "assign"), c = cc11001100_hook("c", this.m, "assign"), null == a || null == c ? 0 : a >= c * this.j.v && a <= c * this.j.l)) return a = cc11001100_hook("a", new Qg(), "assign"), a.resolve(b), a.j;
        }
        b = cc11001100_hook("b", new Qg(), "assign");
        b.l("na");
        return b.j;
      }
    }, "var-init");
  var Zh = cc11001100_hook("Zh", {
    rectangle: cc11001100_hook("rectangle", 1, "object-key-init"),
    horizontal: cc11001100_hook("horizontal", 2, "object-key-init"),
    vertical: cc11001100_hook("vertical", 4, "object-key-init")
  }, "var-init");
  var $h = cc11001100_hook("$h", (a, b) => {
    do {
      const c = cc11001100_hook("c", Yc(a, b), "var-init");
      if (c && "fixed" == c.position) return !1;
    } while (a = cc11001100_hook("a", a.parentElement, "assign"));
    return !0;
  }, "var-init");
  var ai = cc11001100_hook("ai", (a, b) => {
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
    bi = cc11001100_hook("bi", a => {
      let b = cc11001100_hook("b", 0, "var-init");
      for (let c in Zh) -1 != a.indexOf(c) && (b |= cc11001100_hook("b", Zh[c], "assign"));
      return b;
    }, "var-init"),
    ci = cc11001100_hook("ci", (a, b, c, d, e) => {
      if (a !== a.top) return Vc(a) ? 3 : 16;
      if (!(488 > T(a).clientWidth)) return 4;
      if (!(a.innerHeight >= a.innerWidth)) return 5;
      const f = cc11001100_hook("f", T(a).clientWidth, "var-init");
      if (!f || (f - c) / f > d) a = cc11001100_hook("a", 6, "assign");else {
        if (c = cc11001100_hook("c", "true" != e.google_full_width_responsive, "assign")) a: {
          c = cc11001100_hook("c", b.parentElement, "assign");
          for (b = cc11001100_hook("b", T(a).clientWidth, "assign"); c; c = cc11001100_hook("c", c.parentElement, "assign")) if ((d = cc11001100_hook("d", Yc(c, a), "assign")) && (e = cc11001100_hook("e", K(d.width), "assign")) && !(e >= b) && "visible" != d.overflow) {
            c = cc11001100_hook("c", !0, "assign");
            break a;
          }
          c = cc11001100_hook("c", !1, "assign");
        }
        a = cc11001100_hook("a", c ? 7 : !0, "assign");
      }
      return a;
    }, "var-init"),
    di = cc11001100_hook("di", (a, b, c) => {
      a = cc11001100_hook("a", a.style, "assign");
      "rtl" == b ? a.marginRight = cc11001100_hook("a.marginRight", c, "assign") : a.marginLeft = cc11001100_hook("a.marginLeft", c, "assign");
    }, "var-init");
  const ei = cc11001100_hook("ei", (a, b) => {
      if (3 == b.nodeType) return /\S/.test(b.data);
      if (1 == b.nodeType) {
        if (/^(script|style)$/i.test(b.nodeName)) return !1;
        let c;
        try {
          c = cc11001100_hook("c", Yc(b, a), "assign");
        } catch (d) {}
        return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility));
      }
      return !1;
    }, "var-init"),
    fi = cc11001100_hook("fi", (a, b, c) => {
      a = cc11001100_hook("a", ai(b, a), "assign");
      return "rtl" == c ? -a.x : a.x;
    }, "var-init");
  var gi = cc11001100_hook("gi", (a, b) => {
    var c;
    c = cc11001100_hook("c", (c = cc11001100_hook("c", b.parentElement, "assign")) ? (c = cc11001100_hook("c", Yc(c, a), "assign")) ? c.direction : "" : "", "assign");
    if (c) {
      b.style.border = cc11001100_hook("b.style.border", b.style.borderStyle = cc11001100_hook("b.style.borderStyle", b.style.outline = cc11001100_hook("b.style.outline", b.style.outlineStyle = cc11001100_hook("b.style.outlineStyle", b.style.transition = cc11001100_hook("b.style.transition", "none", "assign"), "assign"), "assign"), "assign"), "assign");
      b.style.borderSpacing = cc11001100_hook("b.style.borderSpacing", b.style.padding = cc11001100_hook("b.style.padding", "0", "assign"), "assign");
      di(b, c, "0px");
      b.style.width = cc11001100_hook("b.style.width", T(a).clientWidth + "px", "assign");
      if (0 !== fi(a, b, c)) {
        di(b, c, "0px");
        var d = cc11001100_hook("d", fi(a, b, c), "var-init");
        di(b, c, -1 * d + "px");
        a = cc11001100_hook("a", fi(a, b, c), "assign");
        0 !== a && a !== d && di(b, c, d / (a - d) * d + "px");
      }
      b.style.zIndex = cc11001100_hook("b.style.zIndex", 30, "assign");
    }
  }, "var-init");
  var hi = cc11001100_hook("hi", class {
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
  var ii = cc11001100_hook("ii", (a, b, c, d = e => e) => {
      let e;
      return a.style && a.style[c] && d(a.style[c]) || (e = cc11001100_hook("e", Yc(a, b), "assign")) && e[c] && d(e[c]) || null;
    }, "var-init"),
    ji = cc11001100_hook("ji", a => b => b.La <= a, "var-init"),
    mi = cc11001100_hook("mi", (a, b, c, d) => {
      const e = cc11001100_hook("e", a && ki(c, b), "var-init"),
        f = cc11001100_hook("f", li(b, d), "var-init");
      return g => !(e && g.height() >= f);
    }, "var-init"),
    ni = cc11001100_hook("ni", a => b => b.height() <= a, "var-init"),
    ki = cc11001100_hook("ki", (a, b) => {
      a = cc11001100_hook("a", ai(a, b), "assign");
      return (a ? a.y : 0) < T(b).clientHeight - 100;
    }, "var-init"),
    oi = cc11001100_hook("oi", (a, b) => {
      var c = cc11001100_hook("c", ii(b, a, "height", K), "var-init");
      if (c) return c;
      var d = cc11001100_hook("d", b.style.height, "var-init");
      b.style.height = cc11001100_hook("b.style.height", "inherit", "assign");
      c = cc11001100_hook("c", ii(b, a, "height", K), "assign");
      b.style.height = cc11001100_hook("b.style.height", d, "assign");
      if (c) return c;
      c = cc11001100_hook("c", Infinity, "assign");
      do (d = cc11001100_hook("d", b.style && K(b.style.height), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")), (d = cc11001100_hook("d", ii(b, a, "maxHeight", K), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")); while ((b = cc11001100_hook("b", b.parentElement, "assign")) && "HTML" != b.tagName);
      return c;
    }, "var-init");
  const li = cc11001100_hook("li", (a, b) => {
    const c = cc11001100_hook("c", a.google_unique_id, "var-init");
    return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * T(a).clientHeight / 3) : 250;
  }, "var-init");
  function pi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) {
      const d = cc11001100_hook("d", b[c], "var-init"),
        e = cc11001100_hook("e", Bc(d.uc), "var-init");
      a[e] = cc11001100_hook("a[e]", d.value, "assign");
    }
  }
  function qi(a, b, c) {
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
  function ri(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.wb || !1, "var-init");
    const d = cc11001100_hook("d", new Ec(a).createElement("DIV"), "var-init"),
      e = cc11001100_hook("e", d.style, "var-init");
    e.width = cc11001100_hook("e.width", "100%", "assign");
    e.height = cc11001100_hook("e.height", "auto", "assign");
    e.clear = cc11001100_hook("e.clear", c ? "both" : "none", "assign");
    c = cc11001100_hook("c", d.style, "assign");
    c.textAlign = cc11001100_hook("c.textAlign", "center", "assign");
    b.ib && pi(c, b.ib);
    a = cc11001100_hook("a", new Ec(a).createElement("INS"), "assign");
    c = cc11001100_hook("c", a.style, "assign");
    c.display = cc11001100_hook("c.display", "block", "assign");
    c.margin = cc11001100_hook("c.margin", "auto", "assign");
    c.backgroundColor = cc11001100_hook("c.backgroundColor", "transparent", "assign");
    b.Eb && (c.marginTop = cc11001100_hook("c.marginTop", b.Eb, "assign"));
    b.vb && (c.marginBottom = cc11001100_hook("c.marginBottom", b.vb, "assign"));
    b.eb && pi(c, b.eb);
    d.appendChild(a);
    return {
      Va: cc11001100_hook("Va", d, "object-key-init"),
      Da: cc11001100_hook("Da", a, "object-key-init")
    };
  }
  ;
  function si(a, b = !1) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.na) return a.na;
    if (b = cc11001100_hook("b", a.C(b), "assign")) nf(), !a.j && b && (a.j = cc11001100_hook("a.j", b.l(), "assign"));
    return b;
  }
  function ti(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.G.node || null;
  }
  function ui(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", ti(a), "assign")) && a.v() ? lh(a.D) : !1;
  }
  function vi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return De(a.L.j).map(b => {
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
  class wi {
    constructor(a) {
      this.G = cc11001100_hook("this.G", a.l, "assign");
      this.l = cc11001100_hook("this.l", a.v, "assign");
      this.j = cc11001100_hook("this.j", this.na = cc11001100_hook("this.na", null, "assign"), "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.L = cc11001100_hook("this.L", new Ye(De(a.j.j)), "assign");
    }
    B() {}
    C() {}
    F() {}
    m() {}
  }
  var xi = cc11001100_hook("xi", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.j = cc11001100_hook("this.j", new Ye(), "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
    }
    build() {}
  }, "var-init");
  function yi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ia(a.m, b);
    return a;
  }
  class zi {
    constructor() {
      this.l = cc11001100_hook("this.l", [], "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
      this.v = cc11001100_hook("this.v", [], "assign");
    }
    j(a) {
      if (a = cc11001100_hook("a", ti(a), "assign")) {
        for (var b = cc11001100_hook("b", 0, "var-init"); b < this.v.length; ++b) if (Jf(a, this.v[b])) return [6];
        for (b = cc11001100_hook("b", 0, "assign"); b < this.l.length; ++b) if (Kf(a, this.l[b])) return [6];
        for (b = cc11001100_hook("b", 0, "assign"); b < this.m.length; ++b) if (Lf(a, this.m[b])) return [6];
      }
      return [];
    }
  }
  var Ai = cc11001100_hook("Ai", [/cookie/, /(^|(-|_))sticky((-|_)|$)/], "var-init"),
    Bi = cc11001100_hook("Bi", [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/], "var-init"),
    Ci = cc11001100_hook("Ci", [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/], "var-init"),
    Di = cc11001100_hook("Di", [/(^|(-|_))taboola((-|_)|$)/, /(^|(-|_))OUTBRAIN((-|_)|$)/, /(^|(-|_))revcontent((-|_)|$)/], "var-init"),
    Ei = cc11001100_hook("Ei", ["A", "FORM", "BUTTON"], "var-init");
  function Fi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => !!(b.cb & a);
  }
  class W extends hi {
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
  const Gi = cc11001100_hook("Gi", {
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
    Hi = cc11001100_hook("Hi", {
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
    Ii = cc11001100_hook("Ii", {
      pub_control_image_stacked: cc11001100_hook("pub_control_image_stacked", 100, "object-key-init"),
      pub_control_image_sidebyside: cc11001100_hook("pub_control_image_sidebyside", 200, "object-key-init"),
      pub_control_image_card_stacked: cc11001100_hook("pub_control_image_card_stacked", 150, "object-key-init"),
      pub_control_image_card_sidebyside: cc11001100_hook("pub_control_image_card_sidebyside", 250, "object-key-init"),
      pub_control_text: cc11001100_hook("pub_control_text", 100, "object-key-init"),
      pub_control_text_card: cc11001100_hook("pub_control_text_card", 150, "object-key-init")
    }, "var-init");
  function Ji(a) {
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
  function Ki(a) {
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
  function Li(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return !1;
    a = cc11001100_hook("a", a.hash, "assign");
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = cc11001100_hook("b", Mi(b), "assign");
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function Mi(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", "", "var-init");
    Zc(a.split("_"), c => {
      b += cc11001100_hook("b", c.substr(0, 2), "assign");
    });
    return b;
  }
  ;
  const Ni = cc11001100_hook("Ni", Ka("script"), "var-init");
  class Oi {
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
  class Pi extends Error {
    constructor(a = "") {
      super();
      this.name = cc11001100_hook("this.name", "TagError", "assign");
      this.message = cc11001100_hook("this.message", a ? "adsbygoogle.push() error: " + a : "", "assign");
      Error.captureStackTrace ? Error.captureStackTrace(this, Pi) : this.stack = cc11001100_hook("this.stack", Error().stack || "", "assign");
    }
  }
  ;
  var Qi = cc11001100_hook("Qi", class extends hi {
      j(a) {
        return Math.min(1200, Math.max(this.La, Math.round(a)));
      }
    }, "var-init"),
    Vi = cc11001100_hook("Vi", (a, b) => {
      Ti(a, b);
      if ("pedestal" == b.google_content_recommendation_ui_type) return new Oi(9, new Qi(a, Math.floor(a * b.google_phwr)));
      var c = cc11001100_hook("c", Oc(), "var-init");
      468 > a ? c ? (c = cc11001100_hook("c", a - 8 - 8, "assign"), c = cc11001100_hook("c", Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Gi.mobile_banner_image_sidebyside + Hi.mobile_banner_image_sidebyside) + 96), "assign"), a = cc11001100_hook("a", {
        Ta: cc11001100_hook("Ta", a, "object-key-init"),
        Sa: cc11001100_hook("Sa", c, "object-key-init"),
        ta: cc11001100_hook("ta", 1, "object-key-init"),
        ua: cc11001100_hook("ua", 12, "object-key-init"),
        Ba: cc11001100_hook("Ba", "mobile_banner_image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", Ki(a), "assign"), a = cc11001100_hook("a", {
        Ta: cc11001100_hook("Ta", a.width, "object-key-init"),
        Sa: cc11001100_hook("Sa", a.height, "object-key-init"),
        ta: cc11001100_hook("ta", 1, "object-key-init"),
        ua: cc11001100_hook("ua", 13, "object-key-init"),
        Ba: cc11001100_hook("Ba", "image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", Ki(a), "assign"), a = cc11001100_hook("a", {
        Ta: cc11001100_hook("Ta", a.width, "object-key-init"),
        Sa: cc11001100_hook("Sa", a.height, "object-key-init"),
        ta: cc11001100_hook("ta", 4, "object-key-init"),
        ua: cc11001100_hook("ua", 2, "object-key-init"),
        Ba: cc11001100_hook("Ba", "image_stacked", "object-key-init")
      }, "assign"));
      Ui(b, a);
      return new Oi(9, new Qi(a.Ta, a.Sa));
    }, "var-init"),
    Wi = cc11001100_hook("Wi", (a, b) => {
      Ti(a, b);
      var c = cc11001100_hook("c", Ji({
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
        var f = cc11001100_hook("f", Ii[e], "var-init");
        let g = cc11001100_hook("g", c.ta[d], "var-init");
        for (; a / g < f && 1 < g;) g--;
        f = cc11001100_hook("f", g, "assign");
        d = cc11001100_hook("d", c.ua[d], "assign");
        c = cc11001100_hook("c", Math.floor(((a - 8 * f - 8) / f * Gi[e] + Hi[e]) * d + 8 * d + 8), "assign");
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
      if (a.za) throw new Pi(a.za);
      Ui(b, a);
      return new Oi(9, new Qi(a.Ta, a.Sa));
    }, "var-init");
  function Ti(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) throw new Pi("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
  }
  function Ui(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.google_content_recommendation_ui_type = cc11001100_hook("a.google_content_recommendation_ui_type", b.Ba, "assign");
    a.google_content_recommendation_columns_num = cc11001100_hook("a.google_content_recommendation_columns_num", b.ta, "assign");
    a.google_content_recommendation_rows_num = cc11001100_hook("a.google_content_recommendation_rows_num", b.ua, "assign");
  }
  ;
  class Xi extends hi {
    j() {
      return this.La;
    }
    l(a, b, c) {
      gi(a, c);
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const Yi = cc11001100_hook("Yi", {
    "image-top": cc11001100_hook("image-top", a => 600 >= a ? 284 + .414 * (a - 250) : 429, "object-key-init"),
    "image-middle": cc11001100_hook("image-middle", a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500), "object-key-init"),
    "image-side": cc11001100_hook("image-side", a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500), "object-key-init"),
    "text-only": cc11001100_hook("text-only", a => 500 >= a ? 187 - .228 * (a - 250) : 130, "object-key-init"),
    "in-article": cc11001100_hook("in-article", a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200, "object-key-init")
  }, "var-init");
  var Zi = cc11001100_hook("Zi", class extends hi {
      j() {
        return Math.min(1200, this.La);
      }
    }, "var-init"),
    $i = cc11001100_hook("$i", (a, b, c, d, e) => {
      var f = cc11001100_hook("f", e.google_ad_layout || "image-top", "var-init");
      if ("in-article" == f) {
        var g = cc11001100_hook("g", a, "var-init");
        if ("false" == e.google_full_width_responsive) a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", ci(b, c, g, .2, e), "assign"), !0 !== a) e.gfwrnwer = cc11001100_hook("e.gfwrnwer", a, "assign"), a = cc11001100_hook("a", g, "assign");else if (a = cc11001100_hook("a", T(b).clientWidth, "assign")) {
          if (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), c.parentElement) {
            b: {
              g = cc11001100_hook("g", c, "assign");
              for (let h = cc11001100_hook("h", 0, "var-init"); 100 > h && g.parentElement; ++h) {
                const l = cc11001100_hook("l", g.parentElement.childNodes, "var-init");
                for (let k = cc11001100_hook("k", 0, "var-init"); k < l.length; ++k) {
                  const m = cc11001100_hook("m", l[k], "var-init");
                  if (m != g && ei(b, m)) break b;
                }
                g = cc11001100_hook("g", g.parentElement, "assign");
                g.style.width = cc11001100_hook("g.style.width", "100%", "assign");
                g.style.height = cc11001100_hook("g.style.height", "auto", "assign");
              }
            }
            gi(b, c);
          } else a = cc11001100_hook("a", g, "assign");
        } else a = cc11001100_hook("a", g, "assign");
      }
      if (250 > a) throw new Pi("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
      a = cc11001100_hook("a", Math.min(1200, Math.floor(a)), "assign");
      if (d && "in-article" != f) {
        f = cc11001100_hook("f", Math.ceil(d), "assign");
        if (50 > f) throw new Pi("Fluid responsive ads must be at least 50px tall: height=" + f);
        return new Oi(11, new hi(a, f));
      }
      if ("in-article" != f && (d = cc11001100_hook("d", e.google_ad_layout_key, "assign"))) {
        f = cc11001100_hook("f", "" + d, "assign");
        c = cc11001100_hook("c", Math.pow(10, 3), "assign");
        if (e = cc11001100_hook("e", (d = cc11001100_hook("d", f.match(/([+-][0-9a-z]+)/g), "assign")) && d.length, "assign")) for (b = cc11001100_hook("b", [], "assign"), g = cc11001100_hook("g", 0, "assign"); g < e; g++) b.push(parseInt(d[g], 36) / c);else b = cc11001100_hook("b", null, "assign");
        if (!b) throw new Pi("Invalid data-ad-layout-key value: " + f);
        f = cc11001100_hook("f", (a + -725) / 1E3, "assign");
        c = cc11001100_hook("c", 0, "assign");
        d = cc11001100_hook("d", 1, "assign");
        e = cc11001100_hook("e", b.length, "assign");
        for (g = cc11001100_hook("g", 0, "assign"); g < e; g++) c += cc11001100_hook("c", b[g] * d, "assign"), d *= cc11001100_hook("d", f, "assign");
        f = cc11001100_hook("f", Math.ceil(1E3 * c - -725 + 10), "assign");
        if (isNaN(f)) throw new Pi("Invalid height: height=" + f);
        if (50 > f) throw new Pi("Fluid responsive ads must be at least 50px tall: height=" + f);
        if (1200 < f) throw new Pi("Fluid responsive ads must be at most 1200px tall: height=" + f);
        return new Oi(11, new hi(a, f));
      }
      d = cc11001100_hook("d", Yi[f], "assign");
      if (!d) throw new Pi("Invalid data-ad-layout value: " + f);
      c = cc11001100_hook("c", ki(c, b), "assign");
      b = cc11001100_hook("b", T(b).clientWidth, "assign");
      b = cc11001100_hook("b", "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a)), "assign");
      return new Oi(11, "in-article" == f ? new Zi(a, b) : new hi(a, b));
    }, "var-init");
  var aj = cc11001100_hook("aj", a => b => {
      for (let c = cc11001100_hook("c", a.length - 1, "var-init"); 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    }, "var-init"),
    cj = cc11001100_hook("cj", (a, b) => {
      var c = cc11001100_hook("c", bj.slice(0), "var-init");
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
    bj = cc11001100_hook("bj", [X[6], X[12], X[3], X[0], X[7], X[14], X[1], X[8], X[10], X[4], X[15], X[2], X[11], X[5], X[13], X[9], X[16]], "var-init");
  let dj, ej;
  const fj = cc11001100_hook("fj", new be(u), "var-init");
  (a => {
    dj = cc11001100_hook("dj", a || new Sd(), "assign");
    "number" !== typeof u.google_srt && (u.google_srt = cc11001100_hook("u.google_srt", Math.random(), "assign"));
    Qd(dj, u.google_srt);
    ej = cc11001100_hook("ej", new de(dj, fj), "assign");
    ej.v(!0);
    "complete" == u.document.readyState ? u.google_measure_js_timing || ae(fj) : fj.j && E(u, "load", () => {
      u.google_measure_js_timing || ae(fj);
    });
  })();
  var gj = cc11001100_hook("gj", (a, b, c) => ej.ya(a, b, c), "var-init"),
    hj = cc11001100_hook("hj", (a, b) => ej.O(a, b), "var-init"),
    ij = cc11001100_hook("ij", (a, b, c) => {
      const d = cc11001100_hook("d", R(xe).j(), "var-init");
      !b.eid && d.length && (b.eid = cc11001100_hook("b.eid", d.toString(), "assign"));
      Rd(dj, a, b, !0, c);
    }, "var-init");
  var jj = cc11001100_hook("jj", (a, b, c, d, e) => {
      "false" == e.google_full_width_responsive ? c = cc11001100_hook("c", {
        ha: cc11001100_hook("ha", a, "object-key-init"),
        ia: cc11001100_hook("ia", 1, "object-key-init")
      }, "assign") : "autorelaxed" == b && e.google_full_width_responsive || "auto" == b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (b = cc11001100_hook("b", ci(c, d, a, .3, e), "assign"), !0 !== b ? e = cc11001100_hook("e", b, "assign") : "true" == e.google_full_width_responsive || $h(d, c) ? (e = cc11001100_hook("e", T(c).clientWidth, "assign"), b = cc11001100_hook("b", e - a, "assign"), e = cc11001100_hook("e", e && 0 <= b ? !0 : e ? -10 > b ? 11 : 0 > b ? 14 : 12 : 10, "assign")) : e = cc11001100_hook("e", 9, "assign"), c = cc11001100_hook("c", !0 !== e ? {
        ha: cc11001100_hook("ha", a, "object-key-init"),
        ia: cc11001100_hook("ia", e, "object-key-init")
      } : {
        ha: cc11001100_hook("ha", T(c).clientWidth || a, "object-key-init"),
        ia: cc11001100_hook("ia", !0, "object-key-init")
      }, "assign")) : c = cc11001100_hook("c", {
        ha: cc11001100_hook("ha", a, "object-key-init"),
        ia: cc11001100_hook("ia", 2, "object-key-init")
      }, "assign");
      const {
        ha: f,
        ia: g
      } = cc11001100_hook("", c, "var-init");
      return !0 !== g ? {
        ha: cc11001100_hook("ha", a, "object-key-init"),
        ia: cc11001100_hook("ia", g, "object-key-init")
      } : d.parentElement ? {
        ha: cc11001100_hook("ha", f, "object-key-init"),
        ia: cc11001100_hook("ia", g, "object-key-init")
      } : {
        ha: cc11001100_hook("ha", a, "object-key-init"),
        ia: cc11001100_hook("ia", g, "object-key-init")
      };
    }, "var-init"),
    mj = cc11001100_hook("mj", (a, b, c, d, e) => {
      const {
        ha: f,
        ia: g
      } = cc11001100_hook("", gj(247, () => jj(a, b, c, d, e)), "var-init");
      var h = cc11001100_hook("h", !0 === g, "var-init");
      const l = cc11001100_hook("l", K(d.style.width), "var-init"),
        k = cc11001100_hook("k", K(d.style.height), "var-init"),
        {
          Oa: m,
          Ja: n,
          qb: q,
          Ob: r
        } = cc11001100_hook("", kj(f, b, c, d, e, h), "var-init");
      h = cc11001100_hook("h", lj(b, q), "assign");
      var t;
      const z = cc11001100_hook("z", (t = cc11001100_hook("t", ii(d, c, "marginLeft", K), "assign")) ? t + "px" : "", "var-init"),
        G = cc11001100_hook("G", (t = cc11001100_hook("t", ii(d, c, "marginRight", K), "assign")) ? t + "px" : "", "var-init");
      t = cc11001100_hook("t", ii(d, c, "zIndex") || "", "assign");
      return new Oi(h, m, q, null, r, g, n, z, G, k, l, t);
    }, "var-init"),
    kj = cc11001100_hook("kj", (a, b, c, d, e, f) => {
      b = cc11001100_hook("b", "auto" == b ? .25 >= a / Math.min(1200, T(c).clientWidth) ? 4 : 3 : bi(b), "assign");
      let g;
      var h = cc11001100_hook("h", !1, "var-init");
      let l = cc11001100_hook("l", !1, "var-init");
      var k = cc11001100_hook("k", 488 > T(c).clientWidth, "var-init");
      if (k) {
        g = cc11001100_hook("g", $h(d, c), "assign");
        var m = cc11001100_hook("m", ki(d, c), "var-init");
        h = cc11001100_hook("h", !m && g, "assign");
        l = cc11001100_hook("l", m && g, "assign");
      }
      m = cc11001100_hook("m", [ji(a), Fi(b)], "assign");
      m.push(mi(k, c, d, l));
      null != e.google_max_responsive_height && m.push(ni(e.google_max_responsive_height));
      k = cc11001100_hook("k", [t => !t.ec], "assign");
      if (h || l) h = cc11001100_hook("h", oi(c, d), "assign"), k.push(ni(h));
      let n = cc11001100_hook("n", cj(aj(m), aj(k)), "var-init");
      if (!n) throw new Pi("No slot size for availableWidth=" + a);
      const {
        Oa: q,
        Ja: r
      } = cc11001100_hook("", gj(248, () => {
        var t;
        a: if (f) {
          if (e.gfwrnh && (t = cc11001100_hook("t", K(e.gfwrnh), "assign"))) {
            t = cc11001100_hook("t", {
              Oa: cc11001100_hook("Oa", new Xi(a, t), "object-key-init"),
              Ja: cc11001100_hook("Ja", !0, "object-key-init")
            }, "assign");
            break a;
          }
          t = cc11001100_hook("t", a / 1.2, "assign");
          var z = cc11001100_hook("z", Math, "var-init");
          var G = cc11001100_hook("G", z.min, "var-init");
          if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var I = cc11001100_hook("I", Infinity, "var-init");else {
            I = cc11001100_hook("I", d, "assign");
            let v = cc11001100_hook("v", Infinity, "var-init");
            do {
              var N = cc11001100_hook("N", ii(I, c, "height", K), "var-init");
              N && (v = cc11001100_hook("v", Math.min(v, N), "assign"));
              (N = cc11001100_hook("N", ii(I, c, "maxHeight", K), "assign")) && (v = cc11001100_hook("v", Math.min(v, N), "assign"));
            } while ((I = cc11001100_hook("I", I.parentElement, "assign")) && "HTML" != I.tagName);
            I = cc11001100_hook("I", v, "assign");
          }
          z = cc11001100_hook("z", G.call(z, t, I), "assign");
          if (z < .5 * t || 100 > z) z = cc11001100_hook("z", t, "assign");
          t = cc11001100_hook("t", {
            Oa: cc11001100_hook("Oa", new Xi(a, Math.floor(z)), "object-key-init"),
            Ja: cc11001100_hook("Ja", z < t ? 102 : !0, "object-key-init")
          }, "assign");
        } else t = cc11001100_hook("t", {
          Oa: cc11001100_hook("Oa", n, "object-key-init"),
          Ja: cc11001100_hook("Ja", 100, "object-key-init")
        }, "assign");
        return t;
      }), "var-init");
      return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
        Oa: cc11001100_hook("Oa", nj(a, c, d, q, e), "object-key-init"),
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
  const lj = cc11001100_hook("lj", (a, b) => {
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
    nj = cc11001100_hook("nj", (a, b, c, d, e) => {
      const f = cc11001100_hook("f", e.google_ad_height || ii(c, b, "height", K), "var-init");
      b = cc11001100_hook("b", $i(a, b, c, f, e).size(), "assign");
      return b.La * b.height() > a * d.height() ? new W(b.La, b.height(), 1) : d;
    }, "var-init");
  var oj = cc11001100_hook("oj", (a, b, c, d, e) => {
    var f;
    (f = cc11001100_hook("f", T(b).clientWidth, "assign")) ? 488 > T(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), gi(b, c), f = cc11001100_hook("f", {
      ha: cc11001100_hook("ha", f, "object-key-init"),
      ia: cc11001100_hook("ia", !0, "object-key-init")
    }, "assign")) : f = cc11001100_hook("f", {
      ha: cc11001100_hook("ha", a, "object-key-init"),
      ia: cc11001100_hook("ia", 5, "object-key-init")
    }, "assign") : f = cc11001100_hook("f", {
      ha: cc11001100_hook("ha", a, "object-key-init"),
      ia: cc11001100_hook("ia", 4, "object-key-init")
    }, "assign") : f = cc11001100_hook("f", {
      ha: cc11001100_hook("ha", a, "object-key-init"),
      ia: cc11001100_hook("ia", 10, "object-key-init")
    }, "assign");
    const {
      ha: g,
      ia: h
    } = cc11001100_hook("", f, "var-init");
    if (!0 !== h || a == g) return new Oi(12, new hi(a, d), null, null, !0, h, 100);
    const {
      Oa: l,
      Ja: k,
      qb: m
    } = cc11001100_hook("", kj(g, "auto", b, c, e, !0), "var-init");
    return new Oi(1, l, m, 2, !0, h, k);
  }, "var-init");
  const pj = cc11001100_hook("pj", (a, b, c, d, e) => {
    const f = cc11001100_hook("f", d.google_ad_height || ii(c, e, "height", K), "var-init");
    switch (a) {
      case 5:
        const {
          ha: g,
          ia: h
        } = cc11001100_hook("", gj(247, () => jj(b, d.google_ad_format, e, c, d)), "var-init");
        !0 === h && b != g && gi(e, c);
        !0 === h ? d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !0, "assign") : (d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !1, "assign"), d.gfwrnwer = cc11001100_hook("d.gfwrnwer", h, "assign"));
        return Vi(g, d);
      case 9:
        return Wi(b, d);
      case 8:
        return $i(b, e, c, f, d);
      case 10:
        return oj(b, e, c, f, d);
    }
  }, "var-init");
  class qj extends wi {
    constructor(a) {
      super(a);
      this.A = cc11001100_hook("this.A", "", "assign");
    }
    B() {
      return 1;
    }
    C(a = !1) {
      const b = cc11001100_hook("b", ti(this), "var-init");
      if (!b) return null;
      ui(this) && (this.A = cc11001100_hook("this.A", b.D.style.display, "assign"));
      var c = cc11001100_hook("c", vi(this), "var-init"),
        d = cc11001100_hook("d", pf(b), "var-init"),
        e = cc11001100_hook("e", ri(d, {
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
      Nh(c, b.D, Qh[this.l]);
      if (a) try {
        this.F(e, Jc());
      } catch (h) {
        e.style.height = cc11001100_hook("e.style.height", "100px", "assign");
      }
      this.na = cc11001100_hook("this.na", b.m.j(c), "assign");
      this.na || (c.parentNode.removeChild(c), ui(this) && (b.D.style.display = cc11001100_hook("b.D.style.display", this.A, "assign")));
      return this.na;
    }
    F(a, b) {
      var c = cc11001100_hook("c", {
          google_ad_format: cc11001100_hook("google_ad_format", "auto", "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", 1, "var-init"),
        e = cc11001100_hook("e", a.offsetWidth || (c.google_ad_resize || !1) && ii(a, b, "width", K) || c.google_ad_width || 0, "var-init");
      4 === d && (c.google_ad_format = cc11001100_hook("c.google_ad_format", "auto", "assign"), d = cc11001100_hook("d", 1, "assign"));
      var f = cc11001100_hook("f", (f = cc11001100_hook("f", pj(d, e, a, c, b), "assign")) ? f : mj(e, c.google_ad_format, b, a, c), "var-init");
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
      e = cc11001100_hook("e", Vc(window) || window, "assign");
      Li(e.location, "google_responsive_dummy_ad") && (Ga([1, 2, 3, 4, 5, 6, 7, 8], f.C) || 1 === f.j) && 2 !== f.j && (e = cc11001100_hook("e", JSON.stringify({
        googMsgType: cc11001100_hook("googMsgType", "adpnt", "object-key-init"),
        key_value: cc11001100_hook("key_value", [{
          key: cc11001100_hook("key", "qid", "object-key-init"),
          value: cc11001100_hook("value", "DUMMY_AD", "object-key-init")
        }], "object-key-init")
      }), "assign"), c.dash = cc11001100_hook("c.dash", `<${Ni}>window.top.postMessage('${e}', '*'); 
          </${Ni}> 
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
        ui(this) && (ti(this).D.style.display = cc11001100_hook("ti(this).D.style.display", this.A, "assign"));
        nf();
      }
    }
  }
  var rj = cc11001100_hook("rj", class extends xi {
    build() {
      return new qj(this);
    }
  }, "var-init");
  new Ye(["comments"]);
  new Ye(["allcomments"]);
  new Ye(["post-container", "post", "type-post"]);
  var tj = cc11001100_hook("tj", (a, b, c) => {
      const d = cc11001100_hook("d", [], "var-init");
      a.map(e => sj(e, b, c)).forEach(e => Ia(d, e));
      return d;
    }, "var-init"),
    sj = cc11001100_hook("sj", (a, b, c) => {
      const d = cc11001100_hook("d", a.ub.da, "var-init"),
        e = cc11001100_hook("e", a.node, "var-init");
      if (!e) return [];
      const f = cc11001100_hook("f", [], "var-init");
      e.j() && Ga(d, 0) && f.push(0);
      Ga(d, 1) && f.push(1);
      Ga(d, 2) && (!Ga(d, 1) || 0 < sf(e).length) && f.push(2);
      e.j() && Ga(d, 3) && f.push(3);
      return f.map(g => {
        g = cc11001100_hook("g", new rj(a, g), "assign");
        b.forEach(g.j.add, g.j);
        g.m.push(...c);
        return g.build();
      });
    }, "var-init"),
    uj = cc11001100_hook("uj", (a, b) => {
      a = cc11001100_hook("a", ti(b) ? a.map.get(w(ti(b))) : void 0, "assign");
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
    vj = cc11001100_hook("vj", (a, b) => {
      a = cc11001100_hook("a", ti(b) ? a.map.get(w(ti(b))) : void 0, "assign");
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
  function wj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b && a.j.push(b);
    return a;
  }
  function xj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.push(b);
    return a;
  }
  function yj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Rg(a.v, () => {
      const c = cc11001100_hook("c", [], "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < a.l.length; ++d) {
        const e = cc11001100_hook("e", a.l[d].j(b), "var-init");
        Ia(c, e);
        if (0 < e.length) break;
      }
      return c;
    }, "flap");
  }
  function zj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Rg(a.v, () => {
      if (0 == a.j.length) var c = cc11001100_hook("c", [], "var-init");else {
        var d = cc11001100_hook("d", Math.floor(vj(a.A, b)), "var-init");
        if ((d = cc11001100_hook("d", -1 != d ? d + b.B() + "|" + b.v + "|10px|10px" : null, "assign")) && Be(a.m, d)) c = cc11001100_hook("c", a.m.get(d), "assign");else {
          var e = cc11001100_hook("e", [], "var-init"),
            f = cc11001100_hook("f", si(b), "var-init");
          try {
            for (let g = cc11001100_hook("g", 0, "var-init"); g < a.j.length; ++g) if (c = cc11001100_hook("c", a.j[g].j(f), "assign"), Ia(e, c), 0 < c.length) {
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
  function Aj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new Qg(), "var-init");
    yj(a, b).then(d => {
      0 < d.length ? c.resolve(d) : zj(a, b).then(e => {
        c.resolve(d.concat(e));
      });
    });
    return c.j;
  }
  class Bj {
    constructor(a, b) {
      this.v = cc11001100_hook("this.v", a, "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
      this.l = cc11001100_hook("this.l", [], "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.m = cc11001100_hook("this.m", new S(), "assign");
    }
  }
  ;
  class Cj {
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
  class Dj {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j(a) {
      if (!a) return [9];
      const b = cc11001100_hook("b", Ne(this.l, !0), "var-init");
      return null == b ? [16] : b - a.l().bottom < this.m ? [17] : [];
    }
  }
  ;
  class Ej {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j(a) {
      for (a = cc11001100_hook("a", Math.floor(vj(this.l, a)), "assign"); 0 < a; a--) {
        const b = cc11001100_hook("b", this.l.pa[a], "var-init");
        if (!b.j.Ka()) {
          if ((0 == b.l ? wf(b.j).top : wf(b.j).bottom) <= this.m) break;
          return [];
        }
      }
      return [10];
    }
  }
  ;
  class Fj {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
    }
  }
  ;
  class Gj {
    constructor(a) {
      const b = cc11001100_hook("b", [], "var-init");
      a = cc11001100_hook("a", a.j.slice(0), "assign");
      for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; ++c) b.push(a[c].l());
      this.m = cc11001100_hook("this.m", b, "assign");
      this.l = cc11001100_hook("this.l", new S(), "assign");
    }
    j(a) {
      const b = cc11001100_hook("b", w(a), "var-init");
      if (Be(this.l, b)) return this.l.get(b);
      a: {
        var c = cc11001100_hook("c", a.l(), "var-init");
        c = cc11001100_hook("c", new Fj(c.left, c.top + a.D.scrollHeight, a.D.scrollWidth), "assign");
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
      e = cc11001100_hook("e", !e && a.D.scrollHeight > a.D.clientHeight && Gf(a), "assign");
      c = cc11001100_hook("c", a.j(), "assign");
      c = cc11001100_hook("c", !c || this.j(c), "assign");
      a = cc11001100_hook("a", e && c ? !0 : e ? Bf(a) : c && !Bf(a), "assign");
      this.l.set(b, a);
      return a;
    }
  }
  ;
  class Hj {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    j(a) {
      const b = cc11001100_hook("b", ti(a), "var-init");
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
  class Ij {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    j(a) {
      return (a = cc11001100_hook("a", ti(a), "assign")) && Af(a, this.l) ? [11] : [];
    }
  }
  ;
  class Jj {}
  ;
  function Kj(a = window) {
    a = cc11001100_hook("a", a.googletag, "assign");
    return a?.apiReady ? a : void 0;
  }
  ;
  var Nj = cc11001100_hook("Nj", (a, b) => {
      var c = cc11001100_hook("c", Ha(b.document.querySelectorAll(".google-auto-placed")), "var-init");
      const d = cc11001100_hook("d", Ha(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")), "var-init"),
        e = cc11001100_hook("e", Ha(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")), "var-init");
      var f;
      (f = cc11001100_hook("f", Lj(b), "assign")) || (f = cc11001100_hook("f", Ha(b.document.querySelectorAll("div[id^=div-gpt-ad]")), "assign"));
      f = cc11001100_hook("f", f.concat(Ha(b.document.querySelectorAll("iframe[id^=google_ads_iframe]"))), "assign");
      const g = cc11001100_hook("g", Ha(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")), "var-init"),
        h = cc11001100_hook("h", Ha(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), "var-init"),
        l = cc11001100_hook("l", Ha(b.document.querySelectorAll("div.googlepublisherpluginad")), "var-init"),
        k = cc11001100_hook("k", Ha(b.document.querySelectorAll("html > ins.adsbygoogle")), "var-init");
      let m = cc11001100_hook("m", [].concat(Ha(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ha(b.document.querySelectorAll("body ins.adsbygoogle"))), "var-init");
      b = cc11001100_hook("b", [], "assign");
      for (const [n, q] of [[a.Sc, c], [a.Lb, d], [a.Vc, e], [a.Tc, f], [a.Wc, g], [a.Rc, h], [a.Uc, l], [a.Xc, k]]) a = cc11001100_hook("a", q, "assign"), !1 === n ? b = cc11001100_hook("b", b.concat(a), "assign") : m = cc11001100_hook("m", m.concat(a), "assign");
      a = cc11001100_hook("a", Mj(m), "assign");
      c = cc11001100_hook("c", Mj(b), "assign");
      a = cc11001100_hook("a", a.slice(0), "assign");
      for (const n of c) for (c = cc11001100_hook("c", 0, "assign"); c < a.length; c++) (n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
      return a;
    }, "var-init"),
    Pj = cc11001100_hook("Pj", a => {
      const b = cc11001100_hook("b", Lj(Jc(Fc(a))) || [], "var-init");
      return !!Nc(a, c => {
        if (!ca(c) || 1 != c.nodeType) return !1;
        const d = cc11001100_hook("d", c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector, "var-init");
        return !d || Ga(b, c) || Fa($c(Oj), e => d.call(c, e));
      }, !1, 20);
    }, "var-init");
  const Lj = cc11001100_hook("Lj", a => {
      const b = cc11001100_hook("b", Kj(a), "var-init");
      return b ? Da(Ea(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null;
    }, "var-init"),
    Oj = cc11001100_hook("Oj", {
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
  var Mj = cc11001100_hook("Mj", a => {
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
  var Qj = cc11001100_hook("Qj", ej.O(453, Nj), "var-init");
  function Rj(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Sj(a), "assign");
    Tj(a);
    return new Uj(a);
  }
  function Vj(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.j.map(b => b.box);
  }
  class Uj {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a.slice(0), "assign");
    }
  }
  function Sj(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Qj({
        Lb: cc11001100_hook("Lb", !1, "object-key-init")
      }, a), "var-init"),
      c = cc11001100_hook("c", Pe(a), "var-init"),
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
    }).filter(Zb(e => null === e));
  }
  function Tj(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ea(a, () => new Jj());
  }
  ;
  class Wj {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", Qj({}, c).map(x(a.j, a)).filter(Zb(d => null === d)), "assign");
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
  class Xj {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    j(a) {
      if (ui(a)) return [];
      a = cc11001100_hook("a", vj(this.l.l, a), "assign");
      var b = cc11001100_hook("b", Fg(this.l, a), "var-init");
      if (!b) return [];
      const c = cc11001100_hook("c", this.m.j(b.start.j), "var-init");
      b = cc11001100_hook("b", b.end.ca(), "assign");
      return c && 10 >= a - b ? [5] : [];
    }
  }
  ;
  const Yj = cc11001100_hook("Yj", "ASIDE DIV IMG LI SECTION TABLE TD".split(" "), "var-init");
  class Zj {
    j(a) {
      a = cc11001100_hook("a", ti(a), "assign");
      if (!a) return [12];
      if (!Yj.includes(a.D.tagName) || a.D.id) return [];
      const b = cc11001100_hook("b", Mf(a), "var-init"),
        c = cc11001100_hook("c", pf(a), "var-init");
      for (const d of b) if (1 == c.getElementsByClassName(d).length) return [];
      return 150 >= a.l().getHeight() ? [13] : [];
    }
  }
  ;
  class ak {
    j(a) {
      return a && !a.Ka() && Cf(a) ? [] : [3];
    }
  }
  ;
  function bk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 < a.j.length ? (b.resolve(a.j.shift()), !0) : !1;
  }
  class ck {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.C = cc11001100_hook("this.C", [], "assign");
      this.v = cc11001100_hook("this.v", [], "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
    }
    aa() {
      const a = cc11001100_hook("a", new Qg(), "var-init");
      this.l.j(new Mg(x(this.m, this, a), "p"));
      return a.j;
    }
    m(a) {
      bk(this, a) || this.A.aa().then(x(this.B, this, a), x(a.l, a));
    }
    B(a, b) {
      b = cc11001100_hook("b", tj([b], this.C, this.v), "assign");
      Ia(this.j, b);
      bk(this, a) || this.l.j(new Mg(x(this.m, this, a), "p"));
    }
  }
  ;
  class dk {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a.filter(b => ui(b)), "assign");
      this.l = cc11001100_hook("this.l", a.filter(b => !ui(b)), "assign");
    }
    aa() {
      return this.j.shift() || this.l.shift() || null;
    }
  }
  ;
  class ek {}
  ;
  function fk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.j(new Mg(() => {
      const c = cc11001100_hook("c", a.j ? a.j.aa() : null, "var-init");
      c ? gk(a, b, c) : a.A.aa().then(x(a.B, a, b), x(a.F, a, b));
    }, "r"));
  }
  function gk(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.v && a.v.apply(c);
    a.m ? Aj(a.m, c).then(function (d) {
      0 == d.length ? (0 < a.j.j.length || (a.j = cc11001100_hook("a.j", null, "assign")), Sg(a.l, b, c, "rres")) : (a.C.push(new ek()), fk(a, b));
    }) : Sg(a.l, b, c, "rres");
  }
  class hk {
    constructor(a, b, c, d) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.v = cc11001100_hook("this.v", c, "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
      this.C = cc11001100_hook("this.C", [], "assign");
    }
    aa() {
      const a = cc11001100_hook("a", new Qg(), "var-init");
      fk(this, a);
      return a.j;
    }
    B(a, b) {
      this.j = cc11001100_hook("this.j", b, "assign");
      fk(this, a);
    }
    F(a) {
      Tg(this.l, a);
    }
  }
  ;
  class ik {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    aa() {
      const a = cc11001100_hook("a", new Qg(), "var-init");
      this.j.aa().then(b => {
        a.resolve(new dk([b]));
      }, x(a.l, a));
      return a.j;
    }
  }
  ;
  class jk {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    apply(a) {
      var b = cc11001100_hook("b", uj(this.j, a), "var-init");
      b = cc11001100_hook("b", this.l.get(w(this.j.pa[b])), "assign");
      a.v = cc11001100_hook("a.v", b.ic <= b.nc, "assign");
    }
  }
  ;
  class kk {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    j(a) {
      a: {
        const b = cc11001100_hook("b", ti(a), "var-init");
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
      return a && Ga(this.l, a.D) ? [18] : [];
    }
  }
  ;
  var lk = cc11001100_hook("lk", [{
    hostname: cc11001100_hook("hostname", /^([a-z]+.)?m.wikihow.com$/, "object-key-init"),
    cc: cc11001100_hook("cc", "mw-mf-viewport", "object-key-init")
  }], "var-init");
  const mk = cc11001100_hook("mk", a => {
    if (!a.location || !a.location.hostname) return [];
    var b = cc11001100_hook("b", a.location.hostname, "var-init"),
      c = cc11001100_hook("c", [], "var-init");
    Ca(lk, function (d) {
      b.match(d.hostname) && (d = cc11001100_hook("d", a.document.getElementById(d.cc), "assign")) && c.push(d);
    });
    return c;
  }, "var-init");
  function nk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.j(new Mg(function () {
      if (a.j) {
        if (a.m.j(a.j)) {
          var c = cc11001100_hook("c", a.j, "var-init");
          a.j = cc11001100_hook("a.j", uf(a.j), "assign");
          b.resolve(c);
        } else {
          a: {
            c = cc11001100_hook("c", a.j, "assign");
            const d = cc11001100_hook("d", sf(c), "var-init");
            for (let e = cc11001100_hook("e", 0, "var-init"); e < d.length; ++e) if (d[e].v()) {
              c = cc11001100_hook("c", d[e], "assign");
              break a;
            }
            c = cc11001100_hook("c", uf(c), "assign");
          }
          a.j = cc11001100_hook("a.j", c, "assign");
          nk(a, b);
        }
      } else b.l(null);
    }, "fpar"));
  }
  const ok = cc11001100_hook("ok", class {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
    }
    aa() {
      var a = cc11001100_hook("a", new Qg(), "var-init");
      nk(this, a);
      return a.j;
    }
  }, "var-init");
  class pk {
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
  var qk = cc11001100_hook("qk", {
      da: cc11001100_hook("da", [3], "object-key-init"),
      ka: cc11001100_hook("ka", !1, "object-key-init"),
      la: cc11001100_hook("la", 0, "object-key-init"),
      ja: cc11001100_hook("ja", 1, "object-key-init")
    }, "var-init"),
    rk = cc11001100_hook("rk", new Ye(["LI", "TR", "TD", "TH"]), "var-init");
  function sk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.j(new Mg(function () {
      a.A.aa().then(x(a.v, a, b), x(a.m, a, b));
    }, "para"));
  }
  const tk = cc11001100_hook("tk", class {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.j = cc11001100_hook("this.j", new pk(c), "assign");
    }
    aa() {
      var a = cc11001100_hook("a", new Qg(), "var-init");
      sk(this, a);
      return a.j;
    }
    v(a, b) {
      var c = cc11001100_hook("c", this.j, "var-init");
      if (c.j.length) {
        var d = cc11001100_hook("d", c.j[c.j.length - 1], "var-init");
        var e = cc11001100_hook("e", c.l, "var-init");
        const f = cc11001100_hook("f", e.l.map.get(w(b)), "var-init");
        (e = cc11001100_hook("e", f ? Fg(e, f.start.ca()) : null, "assign")) ? (e = cc11001100_hook("e", e.start.j, "assign"), d = cc11001100_hook("d", d == e || d != e && Mc(d.D, e.D), "assign")) : d = cc11001100_hook("d", !0, "assign");
      } else d = cc11001100_hook("d", !0, "assign");
      d ? c.j.push(b) : c.j = cc11001100_hook("c.j", [b], "assign");
      b = cc11001100_hook("b", this.j, "assign");
      (b = cc11001100_hook("b", 3 <= b.j.length ? b.j[b.j.length - 3 + 1] : null, "assign")) && !rk.contains(b.D.tagName) ? a.resolve({
        node: cc11001100_hook("node", b, "object-key-init"),
        ub: cc11001100_hook("ub", Sh(qk), "object-key-init"),
        identifier: {}
      }) : sk(this, a);
    }
    m(a) {
      a.l("na");
    }
  }, "var-init");
  const uk = cc11001100_hook("uk", class extends Ug {
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
  const vk = cc11001100_hook("vk", class {
    constructor() {
      this.j = cc11001100_hook("this.j", Date.now(), "assign");
      this.l = cc11001100_hook("this.l", Date.now(), "assign");
    }
  }, "var-init");
  var wk;
  function xk() {
    var a = cc11001100_hook("a", u.MessageChannel, "var-init");
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = cc11001100_hook("a", function () {
      var e = cc11001100_hook("e", Lc(document, "IFRAME"), "var-init");
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
    if ("undefined" !== typeof a && !ya()) {
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
  class yk {
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
  function zk() {
    var a = cc11001100_hook("a", Ak, "var-init");
    let b = cc11001100_hook("b", null, "var-init");
    a.j && (b = cc11001100_hook("b", a.j, "assign"), a.j = cc11001100_hook("a.j", a.j.next, "assign"), a.j || (a.l = cc11001100_hook("a.l", null, "assign")), b.next = cc11001100_hook("b.next", null, "assign"));
    return b;
  }
  class Bk {
    constructor() {
      this.l = cc11001100_hook("this.l", this.j = cc11001100_hook("this.j", null, "assign"), "assign");
    }
    add(a, b) {
      const c = cc11001100_hook("c", Ck.get(), "var-init");
      c.set(a, b);
      this.l ? this.l.next = cc11001100_hook("this.l.next", c, "assign") : this.j = cc11001100_hook("this.j", c, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
    }
  }
  var Ck = cc11001100_hook("Ck", new yk(() => new Dk(), a => a.reset()), "var-init");
  class Dk {
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
  let Ek,
    Fk = cc11001100_hook("Fk", !1, "var-init"),
    Ak = cc11001100_hook("Ak", new Bk(), "var-init"),
    Hk = cc11001100_hook("Hk", () => {
      if (u.Promise && u.Promise.resolve) {
        const a = cc11001100_hook("a", u.Promise.resolve(void 0), "var-init");
        Ek = cc11001100_hook("Ek", () => {
          a.then(Gk);
        }, "assign");
      } else Ek = cc11001100_hook("Ek", () => {
        var a = cc11001100_hook("a", Gk, "var-init");
        "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && (xa() || !y("Edge")) && u.Window.prototype.setImmediate == u.setImmediate ? (wk || (wk = cc11001100_hook("wk", xk(), "assign")), wk(a)) : u.setImmediate(a);
      }, "assign");
    }, "var-init");
  var Gk = cc11001100_hook("Gk", () => {
    for (var a; a = cc11001100_hook("a", zk(), "assign");) {
      try {
        a.l.call(a.j);
      } catch (c) {
        ma(c);
      }
      var b = cc11001100_hook("b", Ck, "var-init");
      b.m(a);
      100 > b.l && (b.l++, a.next = cc11001100_hook("a.next", b.j, "assign"), b.j = cc11001100_hook("b.j", a, "assign"));
    }
    Fk = cc11001100_hook("Fk", !1, "assign");
  }, "var-init");
  var Ik = cc11001100_hook("Ik", class extends Ug {
    constructor(a, b, c) {
      var d = cc11001100_hook("d", new vk(), "var-init");
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
      this.A || (a = cc11001100_hook("a", this.F, "assign"), Ek || Hk(), Fk || (Ek(), Fk = cc11001100_hook("Fk", !0, "assign")), Ak.add(a, this));
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
  function Jk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new Qg(), "var-init"),
      d = cc11001100_hook("d", b.G ? new Ik(a, ja(gj, b.j ? "lr:apf:" + b.j : "lr:apf"), b.F) : new uk(), "var-init");
    d.j(new Mg(function () {
      ch(new fh(d), a, b).then(function (e) {
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
              k.v || (l = cc11001100_hook("l", new Tf(lg(k), 0), "assign"), k.j || (k.j = cc11001100_hook("k.j", new Xf(new Tf(lg(k), 0)), "assign")), k.v = cc11001100_hook("k.v", new $f(l, new Tf(k.j, 1), new Tf(mg(k), 2)), "assign"));
              m = cc11001100_hook("m", new tk(d, new ok(d, m, new Tf(k.v, 3)), e.v.j), "assign");
              break a;
            default:
              m = cc11001100_hook("m", l.A, "assign");
              var n = cc11001100_hook("n", l.j.pa, "var-init");
              l = cc11001100_hook("l", e.j, "assign");
              k = cc11001100_hook("k", 1 == k ? Uh(n) : cf(n), "assign");
              m = cc11001100_hook("m", new Yh(m, k, l), "assign");
          }
        }
        m = cc11001100_hook("m", new ik(new ck(d, m)), "assign");
        k = cc11001100_hook("k", new jk(f.j, g.m), "assign");
        l = cc11001100_hook("l", new Bj(d, f.j), "assign");
        e.j.B && xj(l, new Ej(f.j, f.R));
        n = cc11001100_hook("n", mk(f.l), "assign");
        h = cc11001100_hook("h", xj(xj(xj(xj(l, new kk(n)), new Xj(g.j, new Tf(mg(h.j), 2))), new Zj()), new Hj(f.v, new Gj(g.j))), "assign");
        n = cc11001100_hook("n", new zi(), "assign");
        Ia(n.l, Ai);
        n = cc11001100_hook("n", yi(yi(n, Bi), Ci), "assign");
        Ia(n.v, Ei);
        Ia(n.l, Di);
        h = cc11001100_hook("h", wj(xj(xj(h, yi(n, Di)), new Ij(f.P * f.R)), new ak()), "assign");
        var q = cc11001100_hook("q", e.j, "var-init"),
          r = cc11001100_hook("r", e.l.A, "var-init");
        n = cc11001100_hook("n", Math.max(r * q.v, q.minWidth), "assign");
        q = cc11001100_hook("q", r * q.l, "assign");
        n = cc11001100_hook("n", void 0 !== n ? n : 0, "assign");
        q = cc11001100_hook("q", void 0 !== q ? q : Infinity, "assign");
        if (0 > n || 0 > q) throw Error("apf::wf");
        wj(wj(wj(h, 0 >= n && Infinity === q ? null : new Lg(n, q)), new Wj(f.v.m, e.j.C, f.l)), new Cj([g.j, g.l]));
        0 < e.j.m && wj(l, new Dj(f.l, e.j.m));
        Sg(d, c, new hk(d, m, k, l), "itres");
      }, x(c.l, c));
    }, "i"));
    return c.j;
  }
  ;
  class Kk {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new Ye(a), "assign");
    }
    contains(a) {
      return this.j.contains(a);
    }
  }
  ;
  class Lk {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    map(a) {
      return null != this.j ? (a = cc11001100_hook("a", a(this.j.value), "assign"), a instanceof Lk ? a : new Lk({
        value: cc11001100_hook("value", a, "object-key-init")
      })) : this;
    }
  }
  ;
  var Mk = cc11001100_hook("Mk", class extends Sb {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ok = cc11001100_hook("Ok", class extends Sb {
      constructor(a) {
        super(a, -1, Nk);
      }
    }, "var-init"),
    Nk = cc11001100_hook("Nk", [3, 4], "var-init");
  var Pk = cc11001100_hook("Pk", class extends Sb {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Rk = cc11001100_hook("Rk", class extends Sb {
      constructor(a) {
        super(a, -1, Qk);
      }
    }, "var-init"),
    Qk = cc11001100_hook("Qk", [6, 7, 9, 10, 11], "var-init");
  var Tk = cc11001100_hook("Tk", class extends Sb {
      constructor(a) {
        super(a, -1, Sk);
      }
    }, "var-init"),
    Uk = cc11001100_hook("Uk", Wb(Tk), "var-init"),
    Sk = cc11001100_hook("Sk", [1, 2, 5, 7], "var-init");
  vh(new sh(0, {}));
  vh(new sh(1, {}));
  class Vk {
    constructor() {
      var a = cc11001100_hook("a", rd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`, "var-init");
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
      b.error && b.meta && b.id || (b = cc11001100_hook("b", new Gd(b, {
        context: cc11001100_hook("context", a, "object-key-init"),
        id: cc11001100_hook("id", e, "object-key-init")
      }), "assign"));
      if (d || this.j) b.meta = cc11001100_hook("b.meta", {}, "assign"), this.j && this.j(b.meta), d && d(b.meta);
      u.google_js_errors = cc11001100_hook("u.google_js_errors", u.google_js_errors || [], "assign");
      u.google_js_errors.push(b);
      u.error_rep_loaded || (Wc(u.document, this.B), u.error_rep_loaded = cc11001100_hook("u.error_rep_loaded", !0, "assign"));
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
  const Wk = cc11001100_hook("Wk", (a, b) => {
    b = cc11001100_hook("b", b.google_js_reporting_queue = cc11001100_hook("b.google_js_reporting_queue", b.google_js_reporting_queue || [], "assign"), "assign");
    2048 > b.length && b.push(a);
  }, "var-init");
  var Xk = cc11001100_hook("Xk", (a, b, c) => {
      const d = cc11001100_hook("d", c || window, "var-init"),
        e = cc11001100_hook("e", "undefined" !== typeof queueMicrotask, "var-init");
      return function () {
        e && queueMicrotask(() => {
          d.google_rum_task_id_counter = cc11001100_hook("d.google_rum_task_id_counter", d.google_rum_task_id_counter || 1, "assign");
          d.google_rum_task_id_counter += cc11001100_hook("d.google_rum_task_id_counter", 1, "assign");
        });
        const f = cc11001100_hook("f", Vd(), "var-init");
        let g,
          h = cc11001100_hook("h", 3, "var-init");
        try {
          g = cc11001100_hook("g", a.apply(this, arguments), "assign");
        } catch (l) {
          h = cc11001100_hook("h", 13, "assign");
          if (!b) throw l;
          b(754, l);
        } finally {
          d.google_measure_js_timing && f && Wk({
            label: cc11001100_hook("label", 754 .toString(), "object-key-init"),
            value: cc11001100_hook("value", f, "object-key-init"),
            duration: cc11001100_hook("duration", (Vd() || 0) - f, "object-key-init"),
            type: cc11001100_hook("type", h, "object-key-init"),
            ...(e && {
              taskId: cc11001100_hook("taskId", d.google_rum_task_id_counter = cc11001100_hook("d.google_rum_task_id_counter", d.google_rum_task_id_counter || 1, "assign"), "object-key-init")
            })
          }, d);
        }
        return g;
      };
    }, "var-init"),
    Yk = cc11001100_hook("Yk", (a, b) => Xk(a, (c, d) => {
      new Vk().Qa(c, d);
    }, b), "var-init");
  function Zk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Yk(a, b).apply();
  }
  var $k = cc11001100_hook("$k", {
    1: cc11001100_hook(1, 1, "object-key-init"),
    2: cc11001100_hook(2, 2, "object-key-init"),
    3: cc11001100_hook(3, 3, "object-key-init"),
    0: cc11001100_hook(0, 0, "object-key-init")
  }, "var-init");
  function al(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? a : $k[a];
  }
  function bl(a) {
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
  function cl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", {}, "var-init");
    a && (c.Eb = cc11001100_hook("c.Eb", C(a, 1), "assign"), c.vb = cc11001100_hook("c.vb", C(a, 2), "assign"), c.wb = cc11001100_hook("c.wb", !!yb(a, 3), "assign"));
    b && (c.ib = cc11001100_hook("c.ib", bl(Db(b, Mk, 3)), "assign"), c.eb = cc11001100_hook("c.eb", bl(Db(b, Mk, 4)), "assign"));
    return c;
  }
  var dl = cc11001100_hook("dl", {
    1: cc11001100_hook(1, 0, "object-key-init"),
    2: cc11001100_hook(2, 1, "object-key-init"),
    3: cc11001100_hook(3, 2, "object-key-init"),
    4: cc11001100_hook(4, 3, "object-key-init")
  }, "var-init");
  const el = cc11001100_hook("el", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    l(a, b, c, d) {
      c = cc11001100_hook("c", ri(d.document, this.j), "assign");
      c.Da.setAttribute("data-ad-format", "auto");
      qi(c, a, b);
      return c;
    }
  }, "var-init");
  const fl = cc11001100_hook("fl", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    l(a, b, c, d) {
      var e = cc11001100_hook("e", 0 < Db(this.j, Ok, 9).length ? Db(this.j, Ok, 9)[0] : null, "var-init"),
        f = cc11001100_hook("f", cl(Bb(this.j, Pk, 3), e), "var-init");
      if (!e) return null;
      if (e = cc11001100_hook("e", C(e, 1), "assign")) {
        d = cc11001100_hook("d", d.document, "assign");
        var g = cc11001100_hook("g", c.tagName, "var-init");
        c = cc11001100_hook("c", new Ec(d).createElement(g), "assign");
        c.style.clear = cc11001100_hook("c.style.clear", f.wb ? "both" : "none", "assign");
        "A" == g && (c.style.display = cc11001100_hook("c.style.display", "block", "assign"));
        c.style.padding = cc11001100_hook("c.style.padding", "0px", "assign");
        c.style.margin = cc11001100_hook("c.style.margin", "0px", "assign");
        f.ib && pi(c.style, f.ib);
        d = cc11001100_hook("d", new Ec(d).createElement("INS"), "assign");
        f.eb && pi(d.style, f.eb);
        c.appendChild(d);
        f = cc11001100_hook("f", {
          Va: cc11001100_hook("Va", c, "object-key-init"),
          Da: cc11001100_hook("Da", d, "object-key-init")
        }, "assign");
        f.Da.setAttribute("data-ad-type", "text");
        f.Da.setAttribute("data-native-settings-key", e);
        qi(f, a, b);
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", null, "assign");
      return a;
    }
  }, "var-init");
  function gl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.l.query(b.document), "assign");
    return 0 < a.length ? a[0] : null;
  }
  const hl = cc11001100_hook("hl", class {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
  }, "var-init");
  function il(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.v;
  }
  function jl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Jh(Bh) ? (a.A || (a.A = cc11001100_hook("a.A", gl(a.j, a.m), "assign")), a.A) : gl(a.j, a.m);
  }
  function kl(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.W, "var-init");
    a = cc11001100_hook("a", a.m.document.createElement("div"), "assign");
    Jh(Bh) ? a.className = cc11001100_hook("a.className", "google-auto-placed-ad-placeholder", "assign") : a.className = cc11001100_hook("a.className", "google-auto-placed", "assign");
    var c = cc11001100_hook("c", a.style, "var-init");
    c.textAlign = cc11001100_hook("c.textAlign", "center", "assign");
    c.width = cc11001100_hook("c.width", "100%", "assign");
    c.height = cc11001100_hook("c.height", "0px", "assign");
    c.clear = cc11001100_hook("c.clear", b ? "both" : "none", "assign");
    return a;
  }
  function ll(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Be(a.B, 0) || a.B.set(0, []);
    a.B.get(0).push(b);
  }
  class ml {
    constructor(a, b, c, d, e, f, g, h = null, l = null) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.L = cc11001100_hook("this.L", b, "assign");
      this.W = cc11001100_hook("this.W", c, "assign");
      this.Qb = cc11001100_hook("this.Qb", d, "assign");
      e || new zh();
      this.m = cc11001100_hook("this.m", f, "assign");
      this.F = cc11001100_hook("this.F", g, "assign");
      this.C = cc11001100_hook("this.C", h, "assign");
      (this.G = cc11001100_hook("this.G", l, "assign")) && Bb(l, rh, 1) && Bb(l, rh, 1);
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
  var nl = cc11001100_hook("nl", a => {
    switch (a.Qb) {
      case 0:
      case 1:
        var b = cc11001100_hook("b", a.G, "var-init");
        null == b ? a = cc11001100_hook("a", null, "assign") : (a = cc11001100_hook("a", Bb(b, rh, 1), "assign"), null == a ? a = cc11001100_hook("a", null, "assign") : (b = cc11001100_hook("b", C(b, 2), "assign"), a = cc11001100_hook("a", null == b ? null : new sh(0, {
          Ub: cc11001100_hook("Ub", [a], "object-key-init"),
          wc: cc11001100_hook("wc", b, "object-key-init")
        }), "assign")));
        return null != a ? new Lk({
          value: cc11001100_hook("value", a, "object-key-init")
        }) : new Lk(null);
      case 2:
        return new Lk(null);
      default:
        return new Lk(null);
    }
  }, "var-init");
  function ol(a) {
    cc11001100_hook("a", a, "function-parameter");
    return nl(a.ra).map(b => vh(b));
  }
  function pl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l = cc11001100_hook("a.l", a.l || ol(a), "assign");
    return a.l;
  }
  const ql = cc11001100_hook("ql", class {
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
        Nh(b, this.j, this.ra.j.j);
        c = cc11001100_hook("c", this.ra, "assign");
        c.v = cc11001100_hook("c.v", !0, "assign");
        Jh(Bh) && (c.l && Lh(c.l), c.l = cc11001100_hook("c.l", null, "assign"));
        null != b && c.H.push(b);
      }
      return a;
    }
  }, "var-init");
  function rl(a) {
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
  function sl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Zk(() => {
      if (Jh(Bh)) {
        var c = cc11001100_hook("c", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) {
          var f = cc11001100_hook("f", a[e], "var-init"),
            g = cc11001100_hook("g", jl(f), "var-init");
          if (g) {
            var h = cc11001100_hook("h", f, "var-init");
            if (!h.l && !h.v) {
              var l = cc11001100_hook("l", h, "var-init");
              var k = cc11001100_hook("k", h, "var-init"),
                m = cc11001100_hook("m", null, "var-init");
              try {
                var n = cc11001100_hook("n", jl(k), "var-init");
                if (n) {
                  m = cc11001100_hook("m", kl(k), "assign");
                  Nh(m, n, k.j.j);
                  var q = cc11001100_hook("q", m, "var-init");
                } else q = cc11001100_hook("q", null, "assign");
              } catch (z) {
                throw Lh(m), z;
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
        if (0 < d.length) for (q = cc11001100_hook("q", U(b), "assign"), n = cc11001100_hook("n", Pe(b), "assign"), e = cc11001100_hook("e", 0, "assign"); e < d.length; e++) {
          const {
            tc: z,
            fb: G,
            na: I
          } = cc11001100_hook("", d[e], "var-init");
          f = cc11001100_hook("f", tl(I, n, q), "assign");
          c.push(new ql(z, G, f));
        }
        q = cc11001100_hook("q", c, "assign");
      } else {
        q = cc11001100_hook("q", [], "assign");
        n = cc11001100_hook("n", [], "assign");
        try {
          const z = cc11001100_hook("z", [], "var-init");
          for (let G = cc11001100_hook("G", 0, "var-init"); G < a.length; G++) {
            var r = cc11001100_hook("r", a[G], "var-init"),
              t = cc11001100_hook("t", jl(r), "var-init");
            t && z.push({
              lb: cc11001100_hook("lb", r, "object-key-init"),
              fb: cc11001100_hook("fb", t, "object-key-init")
            });
          }
          for (t = cc11001100_hook("t", 0, "assign"); t < z.length; t++) {
            r = cc11001100_hook("r", n, "assign");
            g = cc11001100_hook("g", r.push, "assign");
            {
              l = cc11001100_hook("l", z[t], "assign");
              k = cc11001100_hook("k", l.fb, "assign");
              m = cc11001100_hook("m", l.lb, "assign");
              const G = cc11001100_hook("G", kl(m), "var-init");
              try {
                Nh(G, k, m.j.j), h = cc11001100_hook("h", G, "assign");
              } catch (I) {
                throw Lh(G), I;
              }
            }
            g.call(r, h);
          }
          c = cc11001100_hook("c", U(b), "assign");
          d = cc11001100_hook("d", Pe(b), "assign");
          for (g = cc11001100_hook("g", 0, "assign"); g < n.length; g++) e = cc11001100_hook("e", tl(n[g], d, c), "assign"), f = cc11001100_hook("f", z[g], "assign"), q.push(new ql(f.lb, f.fb, e));
        } finally {
          for (c = cc11001100_hook("c", 0, "assign"); c < n.length; c++) Lh(n[c]);
        }
      }
      return q;
    }, b);
  }
  function tl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", a.getBoundingClientRect(), "assign");
    return new Fj(a.left + b, a.top + c, a.right - a.left);
  }
  ;
  function ul(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {
      top: cc11001100_hook("top", b.j - 25, "object-key-init"),
      right: cc11001100_hook("right", b.l + b.m, "object-key-init"),
      bottom: cc11001100_hook("bottom", b.j + 25, "object-key-init"),
      left: cc11001100_hook("left", b.l, "object-key-init")
    }, "var-init");
    return !Fa(a, d => Ge(d, c));
  }
  ;
  function vl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return sl(b, a);
    };
  }
  function wl(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Vj(Rj(a)), "var-init");
    return c => ul(b, c.Ma);
  }
  function xl(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.length) return Xb;
    const b = cc11001100_hook("b", new Kk(a), "var-init");
    return c => b.contains(c.Qb);
  }
  function yl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) return Yb;
    const c = cc11001100_hook("c", T(b).scrollHeight - a, "var-init");
    return function (d) {
      return d.Ma.j <= c;
    };
  }
  const zl = cc11001100_hook("zl", (a, b) => b.Ma.j >= a, "var-init"),
    Al = cc11001100_hook("Al", (a, b, c) => {
      c = cc11001100_hook("c", c.Ma.m, "assign");
      return a <= c && c <= b;
    }, "var-init");
  var Bl = cc11001100_hook("Bl", class {
    Ga(a) {
      return wl(a);
    }
    Ha() {
      return 9;
    }
  }, "var-init");
  var Cl = cc11001100_hook("Cl", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Ga(a) {
      return yl(this.j, a);
    }
    Ha() {
      return 13;
    }
  }, "var-init");
  var Dl = cc11001100_hook("Dl", class {
    Ga(a) {
      const b = cc11001100_hook("b", T(a).clientHeight, "var-init");
      return b ? ja(zl, b + U(a)) : Xb;
    }
    Ha() {
      return 12;
    }
  }, "var-init");
  var El = cc11001100_hook("El", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Ga() {
      return xl(this.j);
    }
    Ha() {
      return 1;
    }
  }, "var-init");
  var Fl = cc11001100_hook("Fl", class {
    Ga() {
      return Zb(il);
    }
    Ha() {
      return 7;
    }
  }, "var-init");
  var Gl = cc11001100_hook("Gl", class {
    constructor(a, b) {
      this.minWidth = cc11001100_hook("this.minWidth", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
    Ga() {
      return ja(Al, this.minWidth, this.j);
    }
    Ha() {
      return 10;
    }
  }, "var-init");
  var Hl = cc11001100_hook("Hl", class {
    constructor(a) {
      this.v = cc11001100_hook("this.v", a.l.slice(0), "assign");
      this.l = cc11001100_hook("this.l", a.j.slice(0), "assign");
      this.m = cc11001100_hook("this.m", a.m, "assign");
      this.A = cc11001100_hook("this.A", a.A, "assign");
      this.j = cc11001100_hook("this.j", a.v, "assign");
    }
  }, "var-init");
  function Il(a, b = 0, c = Infinity) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.push(new Gl(b, c));
    return a;
  }
  function Jl(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    a.j.push(new Cl(b));
    return a;
  }
  var Kl = cc11001100_hook("Kl", class {
    constructor() {
      this.m = cc11001100_hook("this.m", 0, "assign");
      this.A = cc11001100_hook("this.A", !1, "assign");
      this.l = cc11001100_hook("this.l", [].slice(0), "assign");
      this.j = cc11001100_hook("this.j", [].slice(0), "assign");
    }
    build() {
      return new Hl(this);
    }
  }, "var-init");
  function Ll(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Be(a.j, b) || a.j.set(b, []);
    a.j.get(b).push(c);
  }
  class Ml {
    constructor() {
      this.j = cc11001100_hook("this.j", new S(), "assign");
    }
  }
  ;
  function Nl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", b.ra, "var-init");
    if (!Be(a.j, d)) {
      var e = cc11001100_hook("e", a.j, "var-init"),
        f = cc11001100_hook("f", e.set, "var-init");
      pl(b);
      f.call(e, d, new Ol());
    }
    c(a.j.get(d));
  }
  function Pl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Nl(a, b, c => {
      c.j = cc11001100_hook("c.j", !0, "assign");
    });
  }
  function Ql(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Nl(a, b, c => {
      c.l = cc11001100_hook("c.l", !0, "assign");
    });
  }
  var Rl = cc11001100_hook("Rl", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new S(), "assign");
    }
  }, "var-init");
  class Ol {
    constructor() {
      this.l = cc11001100_hook("this.l", this.j = cc11001100_hook("this.j", !1, "assign"), "assign");
    }
  }
  ;
  class Sl {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", -1, "assign");
    }
  }
  ;
  function Tl(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 0, "var-init");
    for (; a;) (!b || a.previousElementSibling || a.nextElementSibling) && b++, a = cc11001100_hook("a", a.parentElement, "assign");
    return b;
  }
  ;
  function Ul(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", null.dd.filter(c => De(c.xb).every(d => c.xb.get(d) === a.get(d))), "var-init");
    return 0 === b.length ? (null.Bc.push(19), null) : b.reduce((c, d) => c.xb.zb() > d.xb.zb() ? c : d, b[0]);
  }
  function Vl(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", pl(a), "assign");
    if (null == a.j) return null.Bc.push(18), null;
    a = cc11001100_hook("a", a.j.value, "assign");
    if (Be(null.Kb, a)) return null.Kb.get(a);
    var b = cc11001100_hook("b", th(a), "var-init");
    b = cc11001100_hook("b", Ul(b), "assign");
    null.Kb.set(a, b);
    return b;
  }
  ;
  function Wl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.j.length ? a : a.sort((b, c) => (Vl(b)?.vc ?? Number.MAX_VALUE) - (Vl(c)?.vc ?? Number.MAX_VALUE));
  }
  function Xl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Math, "var-init");
    const d = cc11001100_hook("d", b.j, "var-init"),
      e = cc11001100_hook("e", b.ra.j.j, "var-init");
    c = cc11001100_hook("c", b.Ma.j + 200 * c.min.call(c, 20, 0 == e || 3 == e ? Tl(d.parentElement) : Tl(d)), "assign");
    a = cc11001100_hook("a", a.j, "assign");
    0 > a.j && (a.j = cc11001100_hook("a.j", T(a.l).scrollHeight || 0, "assign"));
    b = cc11001100_hook("b", a.j - b.Ma.j, "assign");
    return c + (1E3 < b ? 0 : 2 * (1E3 - b));
  }
  function Yl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 == b.j.length ? b : b.sort((c, d) => Xl(a, c) - Xl(a, d));
  }
  function Zl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.sort((c, d) => {
      const e = cc11001100_hook("e", c.ra.C, "var-init"),
        f = cc11001100_hook("f", d.ra.C, "var-init");
      var g;
      null == e || null == f ? g = cc11001100_hook("g", null == e && null == f ? Xl(a, c) - Xl(a, d) : null == e ? 1 : -1, "assign") : g = cc11001100_hook("g", e - f, "assign");
      return g;
    });
  }
  class $l {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new Sl(a), "assign");
    }
  }
  ;
  function am(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.m, "var-init");
    for (var d of b.v) c = cc11001100_hook("c", nh(c, d.Ga(a.j), bm(d.Ha())), "assign");
    d = cc11001100_hook("d", c = cc11001100_hook("c", c.apply(vl(a.j)), "assign"), "assign");
    for (const e of b.l) d = cc11001100_hook("d", nh(d, e.Ga(a.j), cm(e.Ha())), "assign");
    switch (b.m) {
      case 1:
        d = cc11001100_hook("d", Yl(a.l, d), "assign");
        break;
      case 2:
        d = cc11001100_hook("d", Zl(a.l, d), "assign");
        break;
      case 3:
        const e = cc11001100_hook("e", R(Rl), "var-init");
        d = cc11001100_hook("d", Wl(d), "assign");
        c.forEach(f => {
          Pl(e, f);
          null?.cd(f);
        });
        d.forEach(f => Ql(e, f));
    }
    b.A && (d = cc11001100_hook("d", ph(d, Ac(a.j.location.href + a.j.localStorage.google_experiment_mod)), "assign"));
    1 === b.j?.length && Ll(a.v, b.j[0], {
      Qc: cc11001100_hook("Qc", c.j.length, "object-key-init"),
      bd: cc11001100_hook("bd", d.j.length, "object-key-init")
    });
    return d.j.slice(0);
  }
  class dm {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", new oh(a), "assign");
      this.l = cc11001100_hook("this.l", new $l(b), "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.v = cc11001100_hook("this.v", new Ml(), "assign");
    }
  }
  const bm = cc11001100_hook("bm", a => b => ll(b, a), "var-init"),
    cm = cc11001100_hook("cm", a => b => ll(b.ra, a), "var-init");
  var em = cc11001100_hook("em", (a, b, c, d = null) => {
      const e = cc11001100_hook("e", g => {
        let h;
        try {
          h = cc11001100_hook("h", JSON.parse(g.data), "assign");
        } catch (l) {
          return;
        }
        !h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g);
      }, "var-init");
      E(a, "message", e);
      let f = cc11001100_hook("f", !1, "var-init");
      return () => {
        let g = cc11001100_hook("g", !1, "var-init");
        f || (f = cc11001100_hook("f", !0, "assign"), g = cc11001100_hook("g", H(a, "message", e), "assign"));
        return g;
      };
    }, "var-init"),
    fm = cc11001100_hook("fm", (a, b, c, d) => {
      c.googMsgType = cc11001100_hook("c.googMsgType", b, "assign");
      a.postMessage(JSON.stringify(c), d);
    }, "var-init"),
    gm = cc11001100_hook("gm", (a, b, c, d, e) => {
      if (!(0 >= e) && (fm(a, b, c, d), a = cc11001100_hook("a", a.frames, "assign"))) for (let f = cc11001100_hook("f", 0, "var-init"); f < a.length; ++f) 1 < e && gm(a[f], b, c, d, --e);
    }, "var-init");
  function hm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return em(a, "fullscreen", d.O(952, (e, f) => {
      if (f.source === b) {
        if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
        delete e.googMsgType;
        c(e);
      }
    }));
  }
  ;
  class im {
    constructor() {
      this.promise = cc11001100_hook("this.promise", new Promise(a => {
        this.resolve = cc11001100_hook("this.resolve", a, "assign");
      }), "assign");
    }
  }
  ;
  async function jm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.v.promise;
  }
  async function km(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.l.promise;
  }
  async function lm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.m.promise;
  }
  function mm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.type = cc11001100_hook("b.type", "err_st", "assign");
    b.slot = cc11001100_hook("b.slot", a.slotType, "assign");
    Rd(a.B, "fullscreen_tag", b, !1, .25);
  }
  class nm extends te {
    constructor(a, b, c, d) {
      super();
      this.slotType = cc11001100_hook("this.slotType", 1, "assign");
      this.pubWin = cc11001100_hook("this.pubWin", a, "assign");
      this.Ib = cc11001100_hook("this.Ib", b, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
      this.B = cc11001100_hook("this.B", d, "assign");
      this.j = cc11001100_hook("this.j", 1, "assign");
      this.v = cc11001100_hook("this.v", new im(), "assign");
      this.l = cc11001100_hook("this.l", new im(), "assign");
      this.m = cc11001100_hook("this.m", new im(), "assign");
    }
    Ia() {
      const a = cc11001100_hook("a", hm(this.pubWin, this.Ib, b => {
        if ("adError" === b.eventType) this.m.resolve(), this.j = cc11001100_hook("this.j", 0, "assign");else if ("adReady" === b.eventType && 1 === this.j) b.slotType !== this.slotType && (mm(this, {
          cur_st: cc11001100_hook("cur_st", this.j, "object-key-init"),
          evt: cc11001100_hook("evt", b.eventType, "object-key-init"),
          adp_tp: cc11001100_hook("adp_tp", b.slotType, "object-key-init")
        }), this.j = cc11001100_hook("this.j", 0, "assign")), this.v.resolve(), this.j = cc11001100_hook("this.j", 2, "assign");else if ("adClosed" === b.eventType && 2 === this.j) this.l.resolve(b.result), this.j = cc11001100_hook("this.j", 3, "assign");else if ("adClosed" !== b.eventType || 3 !== this.j) mm(this, {
          cur_st: cc11001100_hook("cur_st", this.j, "object-key-init"),
          evt: cc11001100_hook("evt", b.eventType, "object-key-init")
        }), this.j = cc11001100_hook("this.j", 0, "assign");
      }, this.A), "var-init");
      Q(this, a);
    }
  }
  function om(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a = cc11001100_hook("a", new nm(a, b, c, d), "assign");
    a.Ia();
    return a;
  }
  ;
  var qm = cc11001100_hook("qm", class extends Sb {
      constructor(a) {
        super(a, -1, pm);
      }
    }, "var-init"),
    pm = cc11001100_hook("pm", [19], "var-init");
  function rm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", He(a)?.tagSpecificState[1], "assign");
    return null == a ? null : a.debugCard?.getAdType() === b ? a.debugCard : null;
  }
  function sm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    (a = cc11001100_hook("a", rm(a, 4), "assign")) && a.displayAdLoadedContent(b);
  }
  ;
  let tm = cc11001100_hook("tm", void 0, "var-init");
  function um(a, b) {
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
        Fd(a.A) && Fd(a.v) || ij("rctnosize", b);
        var d = cc11001100_hook("d", !0, "var-init");
      } else d = cc11001100_hook("d", !1, "assign");
    } else d = cc11001100_hook("d", !1, "assign");
    return d && a.F(b);
  }
  class vm {
    constructor() {
      this.j = cc11001100_hook("this.j", this.B = cc11001100_hook("this.B", this.l = cc11001100_hook("this.l", this.m = cc11001100_hook("this.m", null, "assign"), "assign"), "assign"), "assign");
      this.v = cc11001100_hook("this.v", this.A = cc11001100_hook("this.A", 0, "assign"), "assign");
    }
    F() {
      return !0;
    }
  }
  ;
  class wm extends vm {
    F(a) {
      a.hasFillMessage || (this.j = cc11001100_hook("this.j", null, "assign"));
      return !0;
    }
  }
  ;
  function xm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (const e of b) {
      b = cc11001100_hook("b", a, "assign");
      var c = cc11001100_hook("c", e, "var-init"),
        d = cc11001100_hook("d", ym(b.document, c.x, c.y), "var-init");
      if (d) {
        if (!(c = cc11001100_hook("c", zm(d), "assign"))) a: {
          c = cc11001100_hook("c", d, "assign");
          b = cc11001100_hook("b", b.document, "assign");
          for (c = cc11001100_hook("c", c.offsetParent, "assign"); c && c !== b.body; c = cc11001100_hook("c", c.offsetParent, "assign")) if (d = cc11001100_hook("d", zm(c), "assign")) {
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
  function ym(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = cc11001100_hook("a._goog_efp_called_", a.elementFromPoint(b, c), "assign"));
    return a.elementFromPoint(b, c);
  }
  function Am(a, b, c) {
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
  function zm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "fixed" !== vd(a, "position") ? null : "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= Bd(a).width && 1 >= Bd(a).height ? null : a;
  }
  var Bm = cc11001100_hook("Bm", a => {
    const b = cc11001100_hook("b", 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height, "var-init");
    return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b;
  }, "var-init");
  const Cm = cc11001100_hook("Cm", 90 * 1.38, "var-init");
  function Dm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a && Li(a.location, "google_anchor_debug"), "var-init");
    if (2 === b || c) {
      var d = cc11001100_hook("d", Am(a.innerWidth, 0, Math.min(Math.round(a.innerWidth / 320 * 50), Cm) + 15), "var-init");
      return null != xm(a, d) ? (ij("flgr::top", {
        c: cc11001100_hook("c", "fixed", "object-key-init"),
        d: cc11001100_hook("d", String(c), "object-key-init"),
        p: cc11001100_hook("p", b, "object-key-init"),
        url: cc11001100_hook("url", a?.location?.href ?? "", "object-key-init")
      }), "bottom") : "top";
    }
    d = cc11001100_hook("d", a.innerWidth, "assign");
    const e = cc11001100_hook("e", a.innerHeight, "var-init"),
      f = cc11001100_hook("f", Math.min(Math.round(a.innerWidth / 320 * 50), Cm) + 15, "var-init"),
      g = cc11001100_hook("g", Am(d, e - f, e), "var-init");
    25 < f && g.push({
      x: cc11001100_hook("x", d - 25, "object-key-init"),
      y: cc11001100_hook("y", e - 25, "object-key-init")
    });
    return null != xm(a, g) ? (ij("flgr::bottom", {
      c: cc11001100_hook("c", "fixed", "object-key-init"),
      d: cc11001100_hook("d", String(c), "object-key-init"),
      p: cc11001100_hook("p", b, "object-key-init"),
      url: cc11001100_hook("url", a?.location?.href ?? "", "object-key-init")
    }), "top") : "bottom";
  }
  ;
  Ma || za();
  function Em(a = []) {
    const b = cc11001100_hook("b", Date.now(), "var-init");
    return Da(a, c => 36E5 > b - c);
  }
  function Fm(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      const b = cc11001100_hook("b", a.getItem("__lsv__"), "var-init");
      if (!b) return [];
      let c;
      try {
        c = cc11001100_hook("c", JSON.parse(b), "assign");
      } catch (d) {}
      if (!Array.isArray(c) || Fa(c, d => !Number.isInteger(d))) return a.removeItem("__lsv__"), [];
      c = cc11001100_hook("c", Em(c), "assign");
      c.length || a?.removeItem("__lsv__");
      return c;
    } catch (b) {
      return null;
    }
  }
  ;
  const Gm = cc11001100_hook("Gm", {
      SCRIPT: cc11001100_hook("SCRIPT", 1, "object-key-init"),
      STYLE: cc11001100_hook("STYLE", 1, "object-key-init"),
      HEAD: cc11001100_hook("HEAD", 1, "object-key-init"),
      IFRAME: cc11001100_hook("IFRAME", 1, "object-key-init"),
      OBJECT: cc11001100_hook("OBJECT", 1, "object-key-init"),
      NOSCRIPT: cc11001100_hook("NOSCRIPT", 1, "object-key-init")
    }, "var-init"),
    Hm = cc11001100_hook("Hm", {
      IMG: cc11001100_hook("IMG", " ", "object-key-init"),
      BR: cc11001100_hook("BR", "\n", "object-key-init")
    }, "var-init");
  var Im = cc11001100_hook("Im", (a, b, c, d) => {
      if (!(a.nodeName in Gm)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);else if (a.nodeName in Hm) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(Hm[a.nodeName]);else for (a = cc11001100_hook("a", a.firstChild, "assign"); a;) Im(a, b, c, d), a = cc11001100_hook("a", a.nextSibling, "assign");
    }, "var-init"),
    Jm = cc11001100_hook("Jm", / \xAD /g, "var-init"),
    Km = cc11001100_hook("Km", /\xAD/g, "var-init"),
    Lm = cc11001100_hook("Lm", /\u200B/g, "var-init"),
    Mm = cc11001100_hook("Mm", / +/g, "var-init"),
    Nm = cc11001100_hook("Nm", /^\s*/, "var-init");
  function Om(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null !== Nc(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c), !0);
  }
  function Pm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Nc(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position, !0);
  }
  function Qm(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (const c of a.document.querySelectorAll("*")) {
      const d = cc11001100_hook("d", a.getComputedStyle(c, null), "var-init");
      "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c);
    }
    return b;
  }
  function Rm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Math.round(10 * Math.round(a / 10));
  }
  function Sm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return `${a.position}-${Rm(a.P)}x${Rm(a.R)}-${Rm(a.scrollY + a.Ra)}Y`;
  }
  function Tm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return `f-${Sm({
      position: cc11001100_hook("position", a.position, "object-key-init"),
      Ra: cc11001100_hook("Ra", a.Ra, "object-key-init"),
      scrollY: cc11001100_hook("scrollY", 0, "object-key-init"),
      P: cc11001100_hook("P", a.P, "object-key-init"),
      R: cc11001100_hook("R", a.R, "object-key-init")
    })}`;
  }
  function Um(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", Math.min(a ?? Infinity, b ?? Infinity), "assign");
    return Infinity !== a ? a : 0;
  }
  function Vm(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", He(c.Y).sideRailProcessedFixedElements, "var-init");
    if (!d.has(a)) {
      var e = cc11001100_hook("e", a.getBoundingClientRect(), "var-init");
      if (e) {
        var f = cc11001100_hook("f", Math.max(e.top - 10, 0), "var-init"),
          g = cc11001100_hook("g", Math.min(e.bottom + 10, c.R), "var-init"),
          h = cc11001100_hook("h", Math.max(e.left - 10, 0), "var-init");
        e = cc11001100_hook("e", Math.min(e.right + 10, c.P), "assign");
        for (var l = cc11001100_hook("l", .3 * c.P, "var-init"); f <= g; f += cc11001100_hook("f", 10, "assign")) {
          if (0 < e && h < l) {
            var k = cc11001100_hook("k", Tm({
              position: cc11001100_hook("position", "left", "object-key-init"),
              Ra: cc11001100_hook("Ra", f, "object-key-init"),
              P: cc11001100_hook("P", c.P, "object-key-init"),
              R: cc11001100_hook("R", c.R, "object-key-init")
            }), "var-init");
            b.set(k, Um(b.get(k), h));
          }
          if (h < c.P && e > c.P - l) {
            k = cc11001100_hook("k", Tm({
              position: cc11001100_hook("position", "right", "object-key-init"),
              Ra: cc11001100_hook("Ra", f, "object-key-init"),
              P: cc11001100_hook("P", c.P, "object-key-init"),
              R: cc11001100_hook("R", c.R, "object-key-init")
            }), "assign");
            const m = cc11001100_hook("m", c.P - e, "var-init");
            b.set(k, Um(b.get(k), m));
          }
        }
        d.add(a);
      }
    }
  }
  ;
  var Wm = cc11001100_hook("Wm", (a, b, c) => {
    a.dataset.adsbygoogleStatus = cc11001100_hook("a.dataset.adsbygoogleStatus", "reserved", "assign");
    a.className += cc11001100_hook("a.className", " adsbygoogle-noablate", "assign");
    c.adsbygoogle || (c.adsbygoogle = cc11001100_hook("c.adsbygoogle", [], "assign"), Wc(c.document, rd`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
    c.adsbygoogle.push({
      element: cc11001100_hook("element", a, "object-key-init"),
      params: cc11001100_hook("params", b, "object-key-init")
    });
  }, "var-init");
  const Xm = cc11001100_hook("Xm", [1, 2], "var-init");
  function Ym(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", Lc(document, "INS"), "var-init");
    d.className = cc11001100_hook("d.className", "adsbygoogle", "assign");
    b.document.body.appendChild(d);
    const e = cc11001100_hook("e", c.B || {}, "var-init");
    e.google_ad_client = cc11001100_hook("e.google_ad_client", c.m, "assign");
    e.google_ad_width = cc11001100_hook("e.google_ad_width", c.A, "assign");
    e.google_ad_height = cc11001100_hook("e.google_ad_height", c.v, "assign");
    e.google_reactive_ad_format = cc11001100_hook("e.google_reactive_ad_format", a.j, "assign");
    c.j && (e.google_reactive_fill_message = cc11001100_hook("e.google_reactive_fill_message", c.j, "assign"));
    c.l && (e.google_adtest = cc11001100_hook("e.google_adtest", "on", "assign"));
    Wm(d, e, b);
  }
  class Zm {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    verifyAndProcessConfig(a, b) {
      const c = cc11001100_hook("c", He(a), "var-init");
      if (c.wasReactiveAdConfigReceived[this.j]) return !1;
      const d = cc11001100_hook("d", new wm(), "var-init");
      if (!um(d, b)) return !1;
      Xm.forEach(e => {
        c.wasReactiveAdConfigReceived[e] = cc11001100_hook("c.wasReactiveAdConfigReceived[e]", !0, "assign");
      });
      Ym(this, a, d);
      return !0;
    }
  }
  ;
  class $m {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.j = cc11001100_hook("this.j", !1, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.l = cc11001100_hook("this.l", this.v.O(264, c => {
        this.j && (an || (c = cc11001100_hook("c", Date.now(), "assign")), this.m(c), an ? bn.call(u, this.l) : u.setTimeout(this.l, 17));
      }), "assign");
    }
    start() {
      this.j || (this.j = cc11001100_hook("this.j", !0, "assign"), an ? bn.call(u, this.l) : this.l(0));
    }
  }
  var bn = cc11001100_hook("bn", u.requestAnimationFrame || u.webkitRequestAnimationFrame, "var-init"),
    an = cc11001100_hook("an", !!bn && !/'iPhone'/.test(u.navigator.userAgent), "var-init");
  function cn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a * a * a;
  }
  function dn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", 1 - a, "assign");
    return 1 - a * a * a;
  }
  function en(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.L = cc11001100_hook("a.L", !1, "assign");
    a.A.start();
  }
  class fn {
    constructor(a, b, c, d) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.B = cc11001100_hook("this.B", b, "assign");
      this.W = cc11001100_hook("this.W", c, "assign");
      this.progress = cc11001100_hook("this.progress", 0, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
      this.L = cc11001100_hook("this.L", !1, "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.A = cc11001100_hook("this.A", new $m(x(this.H, this), d), "assign");
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
  class gn extends fn {
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
  function hn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j && H(a.j, a.l, a.m, cc);
  }
  class jn extends te {
    constructor(a, b, c) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      E(this.j, this.l, this.m, cc);
      Q(this, () => void hn(this));
    }
  }
  class kn {
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
  function ln(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.B && mn(a);
    a.B = cc11001100_hook("a.B", !0, "assign");
    a.m = cc11001100_hook("a.m", a.J(), "assign");
    a.l = cc11001100_hook("a.l", nn(b), "assign");
    a.j = cc11001100_hook("a.j", a.l, "assign");
    a.A = cc11001100_hook("a.A", new kn(), "assign");
    a.A.add(a.l);
    a.G = cc11001100_hook("a.G", new jn(a.v, "mousemove", x(a.X, a)), "assign");
    ue(a, a.G);
    a.I = cc11001100_hook("a.I", new jn(a.v, "touchmove", x(a.X, a)), "assign");
    ue(a, a.I);
    a.F = cc11001100_hook("a.F", new jn(a.v, "mouseup", x(a.Z, a)), "assign");
    ue(a, a.F);
    a.H = cc11001100_hook("a.H", new jn(a.v, "touchend", x(a.Z, a)), "assign");
    ue(a, a.H);
  }
  function nn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.touches && a.touches[0] || a, "assign");
    return new J(a.clientX, a.clientY);
  }
  function mn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.B = cc11001100_hook("a.B", !1, "assign");
    a.C = cc11001100_hook("a.C", !1, "assign");
    a.m = cc11001100_hook("a.m", null, "assign");
    a.l = cc11001100_hook("a.l", null, "assign");
    a.j = cc11001100_hook("a.j", null, "assign");
    a.A = cc11001100_hook("a.A", null, "assign");
    a.G && hn(a.G);
    a.I && hn(a.I);
    a.F && hn(a.F);
    a.H && hn(a.H);
  }
  class on extends te {
    constructor(a, b, c) {
      super();
      this.v = cc11001100_hook("this.v", a, "assign");
      this.target = cc11001100_hook("this.target", b, "assign");
      this.handle = cc11001100_hook("this.handle", c || b, "assign");
      this.C = cc11001100_hook("this.C", this.B = cc11001100_hook("this.B", this.K = cc11001100_hook("this.K", !1, "assign"), "assign"), "assign");
      this.A = cc11001100_hook("this.A", this.j = cc11001100_hook("this.j", this.l = cc11001100_hook("this.l", this.m = cc11001100_hook("this.m", this.H = cc11001100_hook("this.H", this.F = cc11001100_hook("this.F", this.I = cc11001100_hook("this.I", this.G = cc11001100_hook("this.G", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
      this.ga = cc11001100_hook("this.ga", new jn(this.handle, "mousedown", d => {
        0 == d.button && ln(this, d);
      }), "assign");
      ue(this, this.ga);
      this.oa = cc11001100_hook("this.oa", new jn(this.handle, "touchstart", d => ln(this, d)), "assign");
      ue(this, this.oa);
      this.fa = cc11001100_hook("this.fa", new jn(this.handle, "click", d => {
        this.K ? this.K = cc11001100_hook("this.K", !1, "assign") : d.stopPropagation();
      }), "assign");
      ue(this, this.fa);
    }
    M() {
      if (this.m && this.l && this.j) {
        var a = cc11001100_hook("a", this.m, "var-init"),
          b = cc11001100_hook("b", wc(this.j, this.l), "var-init");
        var c = cc11001100_hook("c", new J(a.x + b.x, a.y + b.y), "var-init");
        a = cc11001100_hook("a", this.target, "assign");
        c instanceof J ? (b = cc11001100_hook("b", c.x, "assign"), c = cc11001100_hook("c", c.y, "assign")) : (b = cc11001100_hook("b", c, "assign"), c = cc11001100_hook("c", void 0, "assign"));
        a.style.left = cc11001100_hook("a.style.left", Ad(b, !1), "assign");
        a.style.top = cc11001100_hook("a.style.top", Ad(c, !1), "assign");
      }
    }
    T() {}
    J() {
      var a = cc11001100_hook("a", this.target, "var-init"),
        b;
      a: {
        if (gc && (b = cc11001100_hook("b", a.parentElement, "assign"))) break a;
        b = cc11001100_hook("b", a.parentNode, "assign");
        b = cc11001100_hook("b", ca(b) && 1 == b.nodeType ? b : null, "assign");
      }
      var c = cc11001100_hook("c", b, "var-init");
      b = cc11001100_hook("b", yd(a), "assign");
      c = cc11001100_hook("c", yd(c), "assign");
      b = cc11001100_hook("b", new J(b.x - c.x, b.y - c.y), "assign");
      a = cc11001100_hook("a", Ed(a, "margin"), "assign");
      return wc(b, new J(a.left, a.top));
    }
    X(a) {
      if (this.B) if (a.preventDefault(), this.j = cc11001100_hook("this.j", nn(a), "assign"), this.A.add(this.j), this.C) this.M();else {
        var b = cc11001100_hook("b", this.l, "var-init"),
          c = cc11001100_hook("c", this.j, "var-init");
        a = cc11001100_hook("a", b.x - c.x, "assign");
        b = cc11001100_hook("b", b.y - c.y, "assign");
        10 <= Math.sqrt(a * a + b * b) && (this.M(), this.C = cc11001100_hook("this.C", !0, "assign"));
      }
    }
    Z(a) {
      this.C ? (a.preventDefault(), this.j = cc11001100_hook("this.j", nn(a), "assign"), this.T()) : this.K = cc11001100_hook("this.K", !0, "assign");
      mn(this);
    }
  }
  ;
  function pn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", qn(a), "var-init");
    Ca(a.j.maxZIndexListeners, c => c(b));
  }
  function qn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", $c(a.j.maxZIndexRestrictions), "assign");
    return a.length ? Math.min.apply(null, a) : null;
  }
  function rn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j.maxZIndexListeners.push(b);
    b(qn(a));
  }
  class sn {
    constructor(a) {
      this.j = cc11001100_hook("this.j", He(a).floatingAdsStacking, "assign");
    }
  }
  class tn {
    constructor(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", null, "assign");
    }
  }
  ;
  function un(a) {
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
  function vn(a) {
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
  function wn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a.A && a.m) {
      var c = cc11001100_hook("c", parseInt(a.m.style[a.j], 10), "var-init"),
        d = cc11001100_hook("d", -a.B.height - (b ? 30 : 0), "var-init"),
        e = cc11001100_hook("e", (c - d) / .1, "var-init");
      "bottom" == a.j && Bm(a.Y) && a.G.ya(405, () => xn(a, "21px", e, "ease-in"));
      b || yn(a, !0);
      c === d ? a.v = cc11001100_hook("a.v", !b, "assign") : (a.A = cc11001100_hook("a.A", !0, "assign"), c = cc11001100_hook("c", new gn(a.m, c, d, e, a.j, a.G, () => {
        a.A = cc11001100_hook("a.A", !1, "assign");
        a.v = cc11001100_hook("a.v", !b, "assign");
        b || yn(a, !0);
        b && a.ba();
        a.m.setAttribute("data-anchor-status", "dismissed");
      }, cn), "assign"), a.ea(), en(c));
    }
  }
  function zn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Re(b);
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
    const c = cc11001100_hook("c", Xc("SPAN", a.Y.document), "var-init");
    c.appendChild(An(a));
    const d = cc11001100_hook("d", e => {
      e.target === c && (e.preventDefault && e.preventDefault(), e.stopImmediatePropagation && e.stopImmediatePropagation(), e.stopPropagation && e.stopPropagation());
    }, "var-init");
    E(c, "click", d);
    Q(a, () => H(c, "click", d));
    Bn(a, c);
    b.className = cc11001100_hook("b.className", "ee", "assign");
    b.appendChild(c);
  }
  function An(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    let c, d;
    switch (a.j) {
      case "top":
        var e = cc11001100_hook("e", "dropShadowBottom", "var-init");
        b = cc11001100_hook("b", "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z", "assign");
        var f = cc11001100_hook("f", "0", "var-init");
        c = cc11001100_hook("c", "up", "assign");
        d = cc11001100_hook("d", un, "assign");
        break;
      case "bottom":
        e = cc11001100_hook("e", "dropShadowTop", "assign"), b = cc11001100_hook("b", "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", "assign"), f = cc11001100_hook("f", "25", "assign"), c = cc11001100_hook("c", "down", "assign"), d = cc11001100_hook("d", vn, "assign");
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
  function Bn(a, b) {
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
    hd(c);
  }
  function Cn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.A) {
      var b = cc11001100_hook("b", parseInt(a.m.style[a.j], 10), "var-init");
      if (b) {
        a.A = cc11001100_hook("a.A", !0, "assign");
        const c = cc11001100_hook("c", -b / .1, "var-init");
        "bottom" == a.j && Bm(a.Y) && a.G.ya(404, () => xn(a, "0px", c, "ease-out"));
        yn(a, !1);
        b = cc11001100_hook("b", new gn(a.m, b, 0, c, a.j, a.G, () => {
          a.A = cc11001100_hook("a.A", !1, "assign");
          a.v = cc11001100_hook("a.v", !1, "assign");
          Dn(a);
          a.m.setAttribute("data-anchor-status", "displayed");
          a.m.setAttribute("data-anchor-shown", !0);
          yn(a, !1);
        }, dn), "assign");
        a.X();
        en(b);
      } else a.v = cc11001100_hook("a.v", !1, "assign");
    }
  }
  function En(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.l ?? a.C;
  }
  function yn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0], "var-init");
    for (var d; d = cc11001100_hook("d", c.firstChild, "assign");) c.removeChild(d);
    switch (a.j) {
      case "top":
        (b ? vn : un)(c);
        break;
      case "bottom":
        (b ? un : vn)(c);
    }
  }
  function Fn(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Rd(a.Z, "flgr", {
      i: cc11001100_hook("i", b, "object-key-init"),
      dc: cc11001100_hook("dc", a.v ? "1" : "0", "object-key-init"),
      fdc: cc11001100_hook("fdc", c ? "1" : "0", "object-key-init"),
      ds: cc11001100_hook("ds", a.I ? "1" : "0", "object-key-init"),
      expId: cc11001100_hook("expId", a.ga, "object-key-init"),
      sc: cc11001100_hook("sc", a.T ? "1" : "0", "object-key-init"),
      off: cc11001100_hook("off", d, "object-key-init"),
      vw: cc11001100_hook("vw", T(a.Y).clientWidth, "object-key-init"),
      req: cc11001100_hook("req", a.K.src, "object-key-init"),
      tp: cc11001100_hook("tp", a.j, "object-key-init"),
      h: cc11001100_hook("h", a.B.height, "object-key-init"),
      w: cc11001100_hook("w", a.B.width, "object-key-init"),
      qemId: cc11001100_hook("qemId", a.fa, "object-key-init")
    }, !0, 1);
  }
  function xn(a, b, c, d) {
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
  function Dn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.U();
    a.U = cc11001100_hook("a.U", () => {}, "assign");
  }
  function Gn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("bottom" !== a.j && "top" !== a.j) throw Error("unsupported reactive type");
    const c = cc11001100_hook("c", f => {
        f.preventDefault();
        a.A || (a.J = cc11001100_hook("a.J", !0, "assign"), a.v ? Cn(a) : wn(a, a.I), Fn(a, "c", !a.v, 0));
      }, "var-init"),
      d = cc11001100_hook("d", a.C, "var-init");
    E(d, "click", c);
    Q(a, () => H(d, "click", c));
    a.l && (E(a.l, "click", c), Q(a, () => a.l && H(a.l, "click", c)));
    P(b, {
      opacity: cc11001100_hook("opacity", 1, "object-key-init")
    });
    var e = cc11001100_hook("e", a.Y.document, "var-init");
    e && (a.m = cc11001100_hook("a.m", b, "assign"), a.ma && (a.M = cc11001100_hook("a.M", new ("top" == a.j ? Hn : In)(a, e, a.B.height, b, a.C), "assign"), ue(a, a.M)), e = cc11001100_hook("e", {
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      left: cc11001100_hook("left", "0px", "object-key-init")
    }, "assign"), e[a.j] = cc11001100_hook("e[a.j]", -a.B.height - 30 + "px", "assign"), P(b, e), O(b, {
      overflow: cc11001100_hook("overflow", "visible", "object-key-init"),
      background: cc11001100_hook("background", "#FAFAFA", "object-key-init")
    }), rn(a.oa, f => {
      const g = cc11001100_hook("g", null == a.V ? 2147483647 : a.V, "var-init");
      P(b, {
        zIndex: cc11001100_hook("zIndex", null == f ? g : Math.min(f, g), "object-key-init")
      });
    }), Cn(a));
  }
  class Jn extends te {
    constructor(a, b, c, d, e, f, g, h, l, k, m) {
      super();
      this.F = cc11001100_hook("this.F", a, "assign");
      this.Y = cc11001100_hook("this.Y", b, "assign");
      this.K = cc11001100_hook("this.K", c, "assign");
      this.B = cc11001100_hook("this.B", d, "assign");
      this.ba = cc11001100_hook("this.ba", f || (() => {}), "assign");
      this.U = cc11001100_hook("this.U", g || (() => {}), "assign");
      this.G = cc11001100_hook("this.G", h, "assign");
      this.Z = cc11001100_hook("this.Z", l, "assign");
      this.ea = cc11001100_hook("this.ea", k, "assign");
      this.X = cc11001100_hook("this.X", m, "assign");
      Q(this, () => wn(this, !0));
      this.C = cc11001100_hook("this.C", Xc("INS", b.document), "assign");
      Q(this, () => this.C = cc11001100_hook("this.C", null, "assign"));
      this.l = cc11001100_hook("this.l", null, "assign");
      HTMLElement.prototype.attachShadow && !this.G.ya(1013, () => {
        this.l = cc11001100_hook("this.l", Xc("DIV", b.document), "assign");
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
      this.R = cc11001100_hook("this.R", b.innerHeight, "assign");
      this.T = cc11001100_hook("this.T", "true" === this.F.scroll_detached, "assign");
      this.I = cc11001100_hook("this.I", "true" === this.F.dismissable, "assign");
      this.ma = cc11001100_hook("this.ma", "true" === this.F.draggable || "top" != this.j, "assign");
      this.ga = cc11001100_hook("this.ga", this.F.expId || "", "assign");
      this.fa = cc11001100_hook("this.fa", this.F.qemId || "", "assign");
      a = cc11001100_hook("a", parseInt(this.F.z_index_override, 10), "assign");
      this.V = cc11001100_hook("this.V", isNaN(a) ? null : a, "assign");
      this.oa = cc11001100_hook("this.oa", new sn(b), "assign");
      !this.I && u.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(() => {
        const n = cc11001100_hook("n", this.Y.innerHeight, "var-init");
        if (2 > Math.abs(n - 460) || 2 > Math.abs(n - 529)) n < this.R && 2 > Math.abs(U(this.Y) - this.H - 68) && (this.J = cc11001100_hook("this.J", !0, "assign"), this.v && Cn(this)), this.R = cc11001100_hook("this.R", n, "assign");
      }, 300);
      zn(this, this.C);
    }
  }
  class Kn extends on {
    constructor(a, b, c, d, e) {
      super(b, d, e);
      this.ba = cc11001100_hook("this.ba", a, "assign");
      this.ea = cc11001100_hook("this.ea", c, "assign");
    }
    T() {
      var a = cc11001100_hook("a", this.ba, "var-init");
      if (!a.A) {
        const b = cc11001100_hook("b", parseInt(a.m.style[a.j], 10), "var-init");
        b >= -(a.B.height / 2) ? (Cn(a), Fn(a, "d", !1, b)) : (wn(a, a.I), Fn(a, "d", !0, b));
      }
    }
    M() {
      if (null !== this.m && null !== this.l && null !== this.j) {
        var a = cc11001100_hook("a", this.V(this.m.y, wc(this.j, this.l).y), "var-init");
        0 < a && (a = cc11001100_hook("a", 0, "assign"));
        a < -this.ea && (a = cc11001100_hook("a", -this.ea, "assign"));
        var b = cc11001100_hook("b", {}, "var-init");
        b[this.U()] = cc11001100_hook("b[this.U()]", a + "px", "assign");
        P(this.target, b);
      }
    }
  }
  class Hn extends Kn {
    J() {
      return new J(0, parseInt(this.target.style.top, 10));
    }
    V(a, b) {
      return b - a;
    }
    U() {
      return "top";
    }
  }
  class In extends Kn {
    J() {
      return new J(0, parseInt(this.target.style.bottom, 10));
    }
    V(a, b) {
      return a - b;
    }
    U() {
      return "bottom";
    }
  }
  ;
  function Ln(a, b, c, d) {
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
  var Mn = cc11001100_hook("Mn", class extends te {
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
  function Nn(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    null !== b && null !== dd(a.getAttribute("width")) && a.setAttribute("width", b);
    null !== c && null !== dd(a.getAttribute("height")) && a.setAttribute("height", c);
    null !== b && (a.style.width = cc11001100_hook("a.style.width", b + "px", "assign"));
    null !== c && (a.style.height = cc11001100_hook("a.style.height", c + "px", "assign"));
  }
  ;
  function On(a) {
    cc11001100_hook("a", a, "function-parameter");
    Pn(a);
    const b = cc11001100_hook("b", a.l.innerWidth, "var-init");
    a = cc11001100_hook("a", Bd(a.m).height || +a.m.height || 0, "assign");
    return new xc(b, a);
  }
  function Qn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.U) {
      var b = cc11001100_hook("b", a.j, "var-init");
      b && (b.style.display = cc11001100_hook("b.style.display", "none", "assign"));
      Rn(a, a.V, !0, !0);
      a.U = cc11001100_hook("a.U", !1, "assign");
    }
  }
  function Sn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.H = cc11001100_hook("a.H", "touchcancel", "assign");
    u.setTimeout(a.B.O(274, () => {
      "touchcancel" === a.H && (a.I = cc11001100_hook("a.I", 0, "assign"), a.M = cc11001100_hook("a.M", !1, "assign"), Tn(a));
    }), 1E3);
  }
  function Un(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b && b.touches) {
      a.H = cc11001100_hook("a.H", "touchend", "assign");
      var c = cc11001100_hook("c", b.touches.length, "var-init");
      2 > c ? u.setTimeout(a.B.O(256, () => {
        "touchend" === a.H && (a.I = cc11001100_hook("a.I", c, "assign"), a.M = cc11001100_hook("a.M", !1, "assign"), Tn(a));
      }), 1E3) : (a.I = cc11001100_hook("a.I", c, "assign"), Tn(a));
      !a.G || .05 > Math.abs(Me(a.l) - 1) || wn(a.v, !0);
    }
  }
  function Vn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l, "var-init");
    H(b, "orientationchange", a.Fa);
    H(b, "resize", a.Wa);
    H(b, "scroll", a.gb);
    H(b, "touchcancel", a.hb);
    H(b, "touchend", a.kb);
    H(b, "touchmove", a.mb);
    H(b, "touchstart", a.nb);
  }
  function Wn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l, "var-init");
    E(b, "orientationchange", a.Fa);
    E(b, "resize", a.Wa);
    E(b, "scroll", a.gb);
    E(b, "touchcancel", a.hb);
    E(b, "touchend", a.kb);
    E(b, "touchmove", a.mb);
    E(b, "touchstart", a.nb);
    Q(a, () => Vn(a));
  }
  function Xn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", parseInt(b.ht, 10), "var-init"),
      d = cc11001100_hook("d", 0 < c ? c : null, "var-init");
    b = cc11001100_hook("b", parseInt(b.wd, 10), "assign");
    const e = cc11001100_hook("e", 0 < b ? b : null, "var-init");
    null != d && (a.C.height = cc11001100_hook("a.C.height", d, "assign"));
    null != e && (a.C.width = cc11001100_hook("a.C.width", e, "assign"));
    Ln(a, f => {
      Nn(f, e, d);
    }, !1, !0);
    Nn(a.m, e, d);
  }
  function Yn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", new Jn(b, a.l, a.m, a.C, a.A, () => {
      if (!a.ma) {
        a.ma = cc11001100_hook("a.ma", !0, "assign");
        Vn(a);
        var c = cc11001100_hook("c", a.j, "var-init");
        c && c.parentNode && c.parentNode.removeChild(c);
        Rn(a, a.V, !0, !0);
        c && (c.style.display = cc11001100_hook("c.style.display", "none", "assign"));
      }
    }, () => void Zn(a), a.B, a.zc, () => {
      a.T || (a.T = cc11001100_hook("a.T", !0, "assign"), $n(a, null));
    }, () => {
      a.T && (a.T = cc11001100_hook("a.T", !1, "assign"), $n(a, null));
    }), "assign");
    ue(a, b);
    return b;
  }
  function Zn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.Tb && !a.Za && (a.Za = cc11001100_hook("a.Za", !0, "assign"), a.B.ya(257, () => {
      const b = cc11001100_hook("b", {
          msg_type: cc11001100_hook("msg_type", "manual-send-view", "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", a.m.contentWindow, "var-init");
      c && c.postMessage(a.l.JSON.stringify(b), "*");
    }));
  }
  function ao(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.Pa()) return !1;
    if (!a.G && a.ba) switch (a.A) {
      case "bottom":
        return a.J >= a.Ac || a.wa;
      case "top":
        return a.J > bo(a);
    }
    return .05 > Math.abs(Me(a.l) - 1);
  }
  function co(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j, "var-init");
    if (b && a.m.parentElement) {
      zd(b, a.X);
      var c = cc11001100_hook("c", a.l.innerWidth, "var-init");
      T(a.l).scrollWidth > c ? b.style.width = cc11001100_hook("b.style.width", c, "assign") : b.style.width = cc11001100_hook("b.style.width", "100%", "assign");
      eo(a);
    }
  }
  function fo(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j, "var-init");
    if (b) {
      var c = cc11001100_hook("c", a.v, "var-init"),
        d = cc11001100_hook("d", c.Y, "var-init"),
        e = cc11001100_hook("e", U(d), "var-init");
      10 > Math.abs(e - c.H) || (d = cc11001100_hook("d", e + 10 + T(d).clientHeight > Ne(d), "assign"), d = cc11001100_hook("d", 10 > e || d, "assign"), c.T || c.J || c.A || (c.v || d ? c.v && d && Cn(c) : wn(c, !1)), c.H = cc11001100_hook("c.H", e, "assign"));
      a.U || (c = cc11001100_hook("c", Rn, "assign"), Pn(a), e = cc11001100_hook("e", Ed(a.l.document.body, "padding"), "assign"), "bottom" == a.A && (e.bottom += cc11001100_hook("e.bottom", a.X.height + 25, "assign")), c(a, e), b.style.display = cc11001100_hook("b.style.display", "block", "assign"), a.U = cc11001100_hook("a.U", !0, "assign"));
    }
  }
  function go(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.ab = cc11001100_hook("a.ab", !0, "assign");
    if (!a.G && ao(a) && (a.fa || !a.oa)) {
      var b = cc11001100_hook("b", a.j, "var-init");
      b && (co(a), Ln(a, c => {
        Re(c);
      }, !0), Gn(a.v, b), fo(a), a.G = cc11001100_hook("a.G", !0, "assign"), (a = cc11001100_hook("a", a.m.contentWindow, "assign")) && gm(a, "ig", {
        rr: cc11001100_hook("rr", "vis-aa", "object-key-init")
      }, "*", 2));
    }
  }
  function Rn(a, b, c = !0, d = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const e = cc11001100_hook("e", a.F.top - b.top, "var-init"),
      f = cc11001100_hook("f", U(a.l), "var-init");
    f < e && !d || (d = cc11001100_hook("d", a.l.document.body, "assign"), d.style.paddingTop = cc11001100_hook("d.style.paddingTop", b.top + "px", "assign"), d.style.paddingRight = cc11001100_hook("d.style.paddingRight", b.right + "px", "assign"), d.style.paddingBottom = cc11001100_hook("d.style.paddingBottom", b.bottom + "px", "assign"), d.style.paddingLeft = cc11001100_hook("d.style.paddingLeft", b.left + "px", "assign"), a.F = cc11001100_hook("a.F", b, "assign"), c && a.l.scrollTo(0, f - e));
  }
  function eo(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ln(a, b => {
      zd(b, a.C);
      b.style.width = cc11001100_hook("b.style.width", "100%", "assign");
    }, !1, !0);
    a.m.style.display = cc11001100_hook("a.m.style.display", "block", "assign");
    a.m.style.margin = cc11001100_hook("a.m.style.margin", "0 auto", "assign");
    if (a.sb) {
      const b = cc11001100_hook("b", a.j, "var-init");
      ed(b, c => {
        hd(c, d => c === b && /display|bottom/i.test(d) ? !1 : !0);
        if ("svg" === c.nodeName) return !1;
      });
    }
  }
  function Pn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if ("bottom" !== a.A && "top" !== a.A) throw Error("Unexpected position: " + a.A);
  }
  function Tn(a) {
    cc11001100_hook("a", a, "function-parameter");
    !a.ea || a.ma || 2 <= a.I && a.M || !ao(a) ? Qn(a) : (go(a), fo(a));
  }
  function $n(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.U ? bo(a, a.T) : a.V.top, "var-init");
    if ("top" === a.A && a.l.document.body && a.ea && a.v && a.G && a.F.top !== c && 0 !== b) {
      var d = cc11001100_hook("d", qd(a.F), "var-init");
      null === b ? (d.top = cc11001100_hook("d.top", c, "assign"), Rn(a, d)) : (0 < b && a.F.top > c && (d.top = cc11001100_hook("d.top", Math.max(c, a.F.top - b), "assign"), Rn(a, d, !1)), 0 > b && a.F.top < c && (d.top = cc11001100_hook("d.top", Math.min(c, a.F.top - b), "assign"), Rn(a, d, !1)));
    }
  }
  function bo(a, b = !1) {
    cc11001100_hook("a", a, "function-parameter");
    return b ? a.V.top + 30 : a.V.top + 30 + a.X.height - 5;
  }
  class ho extends Mn {
    constructor(a, b, c, d) {
      var e = cc11001100_hook("e", ej, "var-init"),
        f = cc11001100_hook("f", dj, "var-init");
      super(a, b, d);
      this.B = cc11001100_hook("this.B", e, "assign");
      this.zc = cc11001100_hook("this.zc", f, "assign");
      this.J = cc11001100_hook("this.J", this.va = cc11001100_hook("this.va", this.bb = cc11001100_hook("this.bb", 0, "assign"), "assign"), "assign");
      this.ma = cc11001100_hook("this.ma", this.rb = cc11001100_hook("this.rb", !1, "assign"), "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.M = cc11001100_hook("this.M", this.ea = cc11001100_hook("this.ea", !1, "assign"), "assign");
      this.H = cc11001100_hook("this.H", null, "assign");
      this.V = cc11001100_hook("this.V", Ed(b.document.body, "padding"), "assign");
      this.F = cc11001100_hook("this.F", Ed(b.document.body, "padding"), "assign");
      this.I = cc11001100_hook("this.I", 0, "assign");
      this.ab = cc11001100_hook("this.ab", this.G = cc11001100_hook("this.G", !1, "assign"), "assign");
      this.U = cc11001100_hook("this.U", !0, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
      this.C = cc11001100_hook("this.C", On(this), "assign");
      this.X = cc11001100_hook("this.X", null, "assign");
      this.ba = cc11001100_hook("this.ba", this.oa = cc11001100_hook("this.oa", this.fa = cc11001100_hook("this.fa", this.Za = cc11001100_hook("this.Za", this.sb = cc11001100_hook("this.sb", this.Tb = cc11001100_hook("this.Tb", !1, "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
      this.Ac = cc11001100_hook("this.Ac", Gc(b || window).height / 2, "assign");
      this.Xa = cc11001100_hook("this.Xa", Gc(b || window).height, "assign");
      this.Ya = cc11001100_hook("this.Ya", Ic(b), "assign");
      this.T = cc11001100_hook("this.T", this.wa = cc11001100_hook("this.wa", !1, "assign"), "assign");
      Qn(this);
      this.Fa = cc11001100_hook("this.Fa", this.B.O(266, () => {
        Tn(this);
      }), "assign");
      this.Wa = cc11001100_hook("this.Wa", this.B.O(267, () => {
        Tn(this);
      }), "assign");
      this.gb = cc11001100_hook("this.gb", this.B.O(268, () => {
        if (this.G && this.j && this.v) {
          var g = cc11001100_hook("g", this.v, "var-init");
          g.H = cc11001100_hook("g.H", U(g.Y), "assign");
        }
        g = cc11001100_hook("g", U(this.l), "assign");
        const h = cc11001100_hook("h", g - this.bb, "var-init");
        $n(this, h);
        this.ba && (0 < h && (this.J += cc11001100_hook("this.J", h, "assign")), this.wa = cc11001100_hook("this.wa", this.Ya - g <= this.Xa, "assign"), this.bb = cc11001100_hook("this.bb", g, "assign"));
        Tn(this);
      }), "assign");
      this.hb = cc11001100_hook("this.hb", this.B.O(269, () => {
        Sn(this);
      }), "assign");
      this.kb = cc11001100_hook("this.kb", this.B.O(270, g => {
        Un(this, g);
      }), "assign");
      this.mb = cc11001100_hook("this.mb", this.B.O(271, g => {
        if (g && g.touches) {
          this.H = cc11001100_hook("this.H", "touchmove", "assign");
          this.I = cc11001100_hook("this.I", g.touches.length, "assign");
          this.M = cc11001100_hook("this.M", !0, "assign");
          Tn(this);
          if (!this.rb && g.touches && 0 != g.touches.length && g.touches[0]) {
            g = cc11001100_hook("g", g.touches[0].pageY, "assign");
            var h = cc11001100_hook("h", g - this.va, "var-init");
            this.va = cc11001100_hook("this.va", g, "assign");
            g = cc11001100_hook("g", h, "assign");
          } else g = cc11001100_hook("g", 0, "assign");
          0 < g && (this.J += cc11001100_hook("this.J", g, "assign"));
          $n(this, g);
        }
      }), "assign");
      this.nb = cc11001100_hook("this.nb", this.B.O(272, g => {
        g && g.touches && g.touches[0] && (this.H = cc11001100_hook("this.H", "touchstart", "assign"), this.I = cc11001100_hook("this.I", g.touches.length, "assign"), this.M = cc11001100_hook("this.M", !1, "assign"), Tn(this), this.va = cc11001100_hook("this.va", g.touches[0].pageY, "assign"), this.rb = cc11001100_hook("this.rb", (g = cc11001100_hook("g", g.target, "assign")) && "top" == this.A && this.ea && this.v && En(this.v) && 1 === g.nodeType ? Mc(En(this.v), g) : !1, "assign"));
      }), "assign");
      this.xa = cc11001100_hook("this.xa", this.B.O(273, () => {
        this.ga();
      }), "assign");
      E(a, "load", this.xa);
      Q(this, () => H(a, "load", this.xa));
    }
    ga() {
      if (this.fa) return !1;
      this.fa = cc11001100_hook("this.fa", !0, "assign");
      H(this.m, "load", this.xa);
      if (this.oa && !this.ab) return !1;
      Tn(this);
      return !0;
    }
    Pa() {
      return Le(this.l);
    }
  }
  var io = cc11001100_hook("io", {
    ui: cc11001100_hook("ui", "gr", "object-key-init"),
    gvar: cc11001100_hook("gvar", "ar", "object-key-init"),
    scroll_detached: cc11001100_hook("scroll_detached", "true", "object-key-init"),
    dismissable: cc11001100_hook("dismissable", "false", "object-key-init")
  }, "var-init");
  class jo extends ho {
    Z(a) {
      return ag(a);
    }
    ga() {
      if (!super.ga()) return !1;
      const a = cc11001100_hook("a", rm(this.l, "top" === this.A ? 3 : 2), "var-init");
      a && a.displayAdLoadedContent(!this.ba);
      return !0;
    }
    Pa() {
      if (this.C.width > Ke) {
        var a = cc11001100_hook("a", this.l, "var-init");
        var b = cc11001100_hook("b", this.C.width, "var-init");
        a = cc11001100_hook("a", a.innerWidth >= b && a.innerHeight >= (b > Ke ? 650 : 0), "assign");
      } else a = cc11001100_hook("a", super.Pa(), "assign");
      return a;
    }
  }
  ;
  function ko(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    try {
      if (!md(c.origin) || a.F && !Oe(c, a.F.contentWindow)) return;
    } catch (f) {
      return;
    }
    const d = cc11001100_hook("d", b.msg_type, "var-init");
    let e;
    "string" === typeof d && (e = cc11001100_hook("e", a.Xa[d], "assign")) && a.J.ya(168, () => {
      e.call(a, b, c);
    });
  }
  class lo extends te {
    constructor(a, b, c, d, e = {}) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
      this.F = cc11001100_hook("this.F", b, "assign");
      this.J = cc11001100_hook("this.J", c, "assign");
      this.Pa = cc11001100_hook("this.Pa", d, "assign");
      this.Xa = cc11001100_hook("this.Xa", {}, "assign");
      this.nb = cc11001100_hook("this.nb", this.J.O(168, (f, g) => void ko(this, f, g)), "assign");
      this.sb = cc11001100_hook("this.sb", this.J.O(169, (f, g) => {
        Rd(this.Pa, "ras::xsf", {
          c: cc11001100_hook("c", g.data.substring(0, 500), "object-key-init"),
          u: cc11001100_hook("u", this.j.location.href.substring(0, 500), "object-key-init")
        }, !0, .1);
        return !0;
      }), "assign");
      this.oa = cc11001100_hook("this.oa", [], "assign");
      this.ea(this.Xa, e);
      this.oa.push(em(this.j, "sth", this.nb, this.sb));
    }
    Ca() {
      for (const a of this.oa) a();
      this.oa.length = cc11001100_hook("this.oa.length", 0, "assign");
      super.Ca();
    }
  }
  ;
  class mo extends lo {
    constructor(a, b = null) {
      super(a, b, ej, dj);
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }
  ;
  class no extends mo {
    constructor(a, b, c) {
      super(a, b.m);
      a = cc11001100_hook("a", this.l = cc11001100_hook("this.l", b, "assign"), "assign");
      if ((b = cc11001100_hook("b", a.j, "assign")) && !a.v) {
        for (var d in io) !io.hasOwnProperty(d) || d in c || (c[d] = cc11001100_hook("c[d]", io[d], "assign"));
        a.Tb = cc11001100_hook("a.Tb", "true" === c.use_manual_view || "top" === a.A || !!He(a.l).wasReactiveAdConfigReceived[2], "assign");
        a.sb = cc11001100_hook("a.sb", "true" === c.use_important, "assign");
        if (d = cc11001100_hook("d", c.af_l, "assign")) a.oa = cc11001100_hook("a.oa", "true" === d, "assign");
        a.ba = cc11001100_hook("a.ba", "true" === c.wait_for_scroll || "top" == a.A, "assign");
        Xn(a, c);
        a.v = cc11001100_hook("a.v", Yn(a, c), "assign");
        c = cc11001100_hook("c", a.C.height + 5, "assign");
        "bottom" == a.A && Bm(a.l) && (c += cc11001100_hook("c", 20, "assign"));
        a.X = cc11001100_hook("a.X", new xc(a.C.width, c), "assign");
        a.wa = cc11001100_hook("a.wa", a.Xa >= a.Ya, "assign");
        c = cc11001100_hook("c", a.j, "assign");
        d = cc11001100_hook("d", a.v && En(a.v), "assign");
        c && d && ("top" == a.A ? c.appendChild(d) : c.insertBefore(d, c.firstChild));
        Wn(a);
        a.ea = cc11001100_hook("a.ea", !0, "assign");
        b.setAttribute("data-anchor-status", "ready-to-display");
      }
      go(this.l);
    }
    ea(a) {
      a.dismiss = cc11001100_hook("a.dismiss", ac(() => {
        var b = cc11001100_hook("b", this.l, "var-init");
        b.v && wn(b.v, !0);
      }), "assign");
    }
  }
  ;
  var oo = cc11001100_hook("oo", class extends Sb {
      constructor(a) {
        super(a);
      }
    }, "var-init"),
    po = cc11001100_hook("po", Wb(oo), "var-init");
  function qo(a) {
    cc11001100_hook("a", a, "function-parameter");
    ro(a, !1);
    const b = cc11001100_hook("b", a.j, "var-init");
    Ln(a, c => {
      O(c, so);
      Re(c);
    }, !0);
    a.m.setAttribute("width", "");
    a.m.setAttribute("height", "");
    P(a.m, so);
    P(a.m, to);
    P(b, uo);
    Re(b);
    Re(a.m);
  }
  function ro(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.j, "var-init");
    b ? vo(a, c) : (O(c, {
      display: cc11001100_hook("display", "none", "object-key-init")
    }), a.v && O(a.v, {
      display: cc11001100_hook("display", "none", "object-key-init")
    }), a.B && (u.clearInterval(a.B), a.B = cc11001100_hook("a.B", 0, "assign")), wo(a));
  }
  function xo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.j, "var-init");
    if (!b) return !1;
    var d = cc11001100_hook("d", ti(b), "var-init");
    if (!d || !d.v()) return !1;
    d = cc11001100_hook("d", d.D, "assign");
    if (!d) return !1;
    a.v = cc11001100_hook("a.v", a.l.document.createElement("ins"), "assign");
    O(a.v, {
      display: cc11001100_hook("display", "inline-block", "object-key-init"),
      width: cc11001100_hook("width", "100%", "object-key-init")
    });
    Nh(a.v, d, Qh[b.l]);
    a.C();
    O(c, {
      position: cc11001100_hook("position", "absolute", "object-key-init")
    });
    ro(a, !0);
    return !0;
  }
  function vo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    O(b, {
      display: cc11001100_hook("display", "block", "object-key-init")
    });
    a.B = cc11001100_hook("a.B", u.setInterval(() => a.C, 250), "assign");
  }
  function wo(a) {
    cc11001100_hook("a", a, "function-parameter");
    null != a.F && (a.A.body.style.overflow = cc11001100_hook("a.A.body.style.overflow", a.F, "assign"));
    null != a.G && (a.A.documentElement.style.overflow = cc11001100_hook("a.A.documentElement.style.overflow", a.G, "assign"));
  }
  function yo(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j, "var-init"),
      c = cc11001100_hook("c", a.l.innerHeight, "var-init");
    O(b, {
      height: cc11001100_hook("height", c + "px", "object-key-init")
    });
    a.l.scrollTo(0, xd(a.v).y);
    b && (O(b, {
      top: cc11001100_hook("top", "0", "object-key-init")
    }), a.v && O(a.v, {
      height: cc11001100_hook("height", c + "px", "object-key-init")
    }), O(b, {
      position: cc11001100_hook("position", "fixed", "object-key-init")
    }), a.A.body && "hidden" != a.A.body.style.overflow && (a.F = cc11001100_hook("a.F", a.A.body.style.overflow, "assign"), a.G = cc11001100_hook("a.G", a.A.documentElement.style.overflow, "assign"), a.A.body.style.overflow = cc11001100_hook("a.A.body.style.overflow", "hidden", "assign"), a.A.documentElement.style.overflow = cc11001100_hook("a.A.documentElement.style.overflow", "hidden", "assign")));
  }
  class zo extends Mn {
    constructor(a, b, c) {
      super(a, b, c);
      this.F = cc11001100_hook("this.F", null, "assign");
      this.B = cc11001100_hook("this.B", 0, "assign");
      this.G = cc11001100_hook("this.G", null, "assign");
      this.H = cc11001100_hook("this.H", 0, "assign");
      this.A = cc11001100_hook("this.A", b.document, "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.I = cc11001100_hook("this.I", 0, "assign");
      qo(this);
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
        (a = cc11001100_hook("a", this.j, "assign")) && this.v && (this.H = cc11001100_hook("this.H", xd(this.v).y, "assign"), a.style.top != this.H + "px" && O(a, {
          top: cc11001100_hook("top", this.H + "px", "object-key-init")
        }));
      }
    }
  }
  var uo = cc11001100_hook("uo", {
      backgroundColor: cc11001100_hook("backgroundColor", "white", "object-key-init"),
      opacity: cc11001100_hook("opacity", "1", "object-key-init"),
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      left: cc11001100_hook("left", "0px", "object-key-init"),
      top: cc11001100_hook("top", "0px", "object-key-init"),
      display: cc11001100_hook("display", "none !important", "object-key-init"),
      zIndex: cc11001100_hook("zIndex", "2147483646", "object-key-init")
    }, "var-init"),
    so = cc11001100_hook("so", {
      width: cc11001100_hook("width", "100%", "object-key-init"),
      height: cc11001100_hook("height", "100%", "object-key-init"),
      zIndex: cc11001100_hook("zIndex", "2147483646", "object-key-init")
    }, "var-init"),
    to = cc11001100_hook("to", {
      left: cc11001100_hook("left", "0", "object-key-init"),
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "0", "object-key-init")
    }, "var-init");
  var Ao = cc11001100_hook("Ao", (a, b) => {
      var c = cc11001100_hook("c", a.document.body, "var-init");
      if (!c || !b) return ij("sci_evt", {
        amacerr: cc11001100_hook("amacerr", 1, "object-key-init")
      }, .1), null;
      b = cc11001100_hook("b", Db(b, Rk, 1), "assign");
      var d = cc11001100_hook("d", [], "var-init");
      for (var e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
        var f = cc11001100_hook("f", b[e], "var-init");
        var g = cc11001100_hook("g", e, "var-init"),
          h = cc11001100_hook("h", a, "var-init"),
          l = cc11001100_hook("l", Bb(f, rh, 1), "var-init");
        if (l) {
          var k;
          if (k = cc11001100_hook("k", l, "assign")) {
            var m = cc11001100_hook("m", C(k, 7), "var-init");
            if (C(k, 1) || k.getId() || 0 < zb(k).length) {
              m = cc11001100_hook("m", zb(k), "assign");
              var n = cc11001100_hook("n", C(k, 3), "var-init"),
                q = cc11001100_hook("q", C(k, 1), "var-init"),
                r = cc11001100_hook("r", "", "var-init");
              q && (r += cc11001100_hook("r", q, "assign"));
              n && (r += cc11001100_hook("r", "#" + ih(n), "assign"));
              if (m) for (n = cc11001100_hook("n", 0, "assign"); n < m.length; n++) r += cc11001100_hook("r", "." + ih(m[n]), "assign");
              k = cc11001100_hook("k", (m = cc11001100_hook("m", r, "assign")) ? new kh(m, C(k, 2), C(k, 5), al(C(k, 6))) : null, "assign");
            } else k = cc11001100_hook("k", m ? new kh(m, C(k, 2), C(k, 5), al(C(k, 6))) : null, "assign");
          } else k = cc11001100_hook("k", null, "assign");
          (m = cc11001100_hook("m", k, "assign")) ? (k = cc11001100_hook("k", dl[C(f, 2)], "assign"), r = cc11001100_hook("r", void 0 === k ? null : k, "assign"), null === r ? f = cc11001100_hook("f", null, "assign") : (k = cc11001100_hook("k", (k = cc11001100_hook("k", Bb(f, Pk, 3), "assign")) ? yb(k, 3) : null, "assign"), m = cc11001100_hook("m", new hl(m, r), "assign"), r = cc11001100_hook("r", xb(f, 10, 0, !1, !!(A(f.N) & 2)).slice(0), "assign"), null != C(l, 5) && r.push(1), l = cc11001100_hook("l", C(f, 12), "assign"), r = cc11001100_hook("r", void 0 !== Ab(f, zh, 4) ? Bb(f, zh, 4) : null, "assign"), f = cc11001100_hook("f", 1 == C(f, 8) ? new ml(m, new el(cl(Bb(f, Pk, 3), null)), k, 0, r, h, g, l, f) : 2 == C(f, 8) ? new ml(m, new fl(f), k, 1, r, h, g, l, f) : null, "assign"))) : f = cc11001100_hook("f", null, "assign");
        } else f = cc11001100_hook("f", null, "assign");
        null !== f && d.push(f);
      }
      b = cc11001100_hook("b", new dm(d, a), "assign");
      d = cc11001100_hook("d", a.innerHeight, "assign");
      a = cc11001100_hook("a", a.innerWidth, "assign");
      e = cc11001100_hook("e", new Kl(), "assign");
      f = cc11001100_hook("f", [0], "assign");
      e.v = cc11001100_hook("e.v", f, "assign");
      e.l.push(new El(f));
      e.l.push(new Fl());
      e.j.push(new Bl());
      a = cc11001100_hook("a", Jl(Il(e, .85 * a, a), d), "assign");
      a.j.push(new Dl());
      a.m = cc11001100_hook("a.m", 1, "assign");
      a = cc11001100_hook("a", a.build(), "assign");
      a = cc11001100_hook("a", am(b, a)[0] || null, "assign");
      if (!a) return null;
      c = cc11001100_hook("c", {
        node: cc11001100_hook("node", new Sf(c, !1).j(a.j) || void 0, "object-key-init"),
        ub: cc11001100_hook("ub", void 0, "object-key-init"),
        identifier: {}
      }, "assign");
      if (!c.node) throw Error("amac:n");
      b = cc11001100_hook("b", rl(a.ra.j.j), "assign");
      if (null === b) throw Error("amac:p");
      return (c = cc11001100_hook("c", new rj(c, b).build(), "assign")) ? {
        lb: cc11001100_hook("lb", c, "object-key-init"),
        Cc: cc11001100_hook("Cc", a.Ma.j, "object-key-init")
      } : null;
    }, "var-init"),
    Bo = cc11001100_hook("Bo", a => {
      var b = cc11001100_hook("b", new Fe(), "var-init");
      b.j = cc11001100_hook("b.j", !0, "assign");
      b.A = cc11001100_hook("b.A", .85, "assign");
      b.l = cc11001100_hook("b.l", 1, "assign");
      b.v = cc11001100_hook("b.v", 25, "assign");
      b.m = cc11001100_hook("b.m", a.innerHeight, "assign");
      b.B = cc11001100_hook("b.B", !0, "assign");
      b = cc11001100_hook("b", b.build(), "assign");
      return Jk(a, b);
    }, "var-init");
  function Co(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", Ne(a, !0), "var-init"),
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
      z = cc11001100_hook("z", Infinity, "var-init"),
      G = cc11001100_hook("G", Infinity, "var-init"),
      I = cc11001100_hook("I", null, "var-init");
    var N = cc11001100_hook("N", Nj({
      Lb: cc11001100_hook("Lb", !1, "object-key-init")
    }, a), "var-init");
    for (const M of N) {
      N = cc11001100_hook("N", M.getBoundingClientRect(), "assign");
      const Wa = cc11001100_hook("Wa", b - (N.bottom + f), "var-init");
      var v = cc11001100_hook("v", void 0, "var-init"),
        B = cc11001100_hook("B", void 0, "var-init");
      if (M.className && -1 != M.className.indexOf("adsbygoogle-ablated-ad-slot")) {
        v = cc11001100_hook("v", M.getAttribute("google_element_uid"), "assign");
        B = cc11001100_hook("B", a.google_sv_map, "assign");
        if (!v || !B || !B[v]) continue;
        a: {
          var F = cc11001100_hook("F", B[v], "var-init");
          v = cc11001100_hook("v", Number(F.google_ad_width), "assign");
          B = cc11001100_hook("B", Number(F.google_ad_height), "assign");
          if (!(0 < v && 0 < B)) {
            b: {
              try {
                const Z = cc11001100_hook("Z", String(F.google_ad_format), "var-init");
                if (Z && Z.match) {
                  const ea = cc11001100_hook("ea", Z.match(/(\d+)x(\d+)/i), "var-init");
                  if (ea) {
                    const rb = cc11001100_hook("rb", parseInt(ea[1], 10), "var-init"),
                      Qa = cc11001100_hook("Qa", parseInt(ea[2], 10), "var-init");
                    if (0 < rb && 0 < Qa) {
                      var L = cc11001100_hook("L", {
                        width: cc11001100_hook("width", rb, "object-key-init"),
                        height: cc11001100_hook("height", Qa, "object-key-init")
                      }, "var-init");
                      break b;
                    }
                  }
                }
              } catch (Z) {}
              L = cc11001100_hook("L", null, "assign");
            }
            F = cc11001100_hook("F", L, "assign");
            if (!F) {
              v = cc11001100_hook("v", null, "assign");
              break a;
            }
            v = cc11001100_hook("v", 0 < v ? v : F.width, "assign");
            B = cc11001100_hook("B", 0 < B ? B : F.height, "assign");
          }
          v = cc11001100_hook("v", {
            width: cc11001100_hook("width", v, "object-key-init"),
            height: cc11001100_hook("height", B, "object-key-init")
          }, "assign");
        }
        v = cc11001100_hook("v", (B = cc11001100_hook("B", v, "assign")) ? B.height : 0, "assign");
        B = cc11001100_hook("B", B ? B.width : 0, "assign");
      } else if (v = cc11001100_hook("v", N.bottom - N.top, "assign"), B = cc11001100_hook("B", N.right - N.left, "assign"), 1 >= v || 1 >= B) continue;
      g.push(v);
      l.push(B);
      k.push(v * B);
      M.className && -1 != M.className.indexOf("google-auto-placed") ? (t += cc11001100_hook("t", 1, "assign"), M.className && -1 != M.className.indexOf("pedestal_container") && (I = cc11001100_hook("I", v, "assign"))) : (z = cc11001100_hook("z", Math.min(z, Wa), "assign"), n.push(N), r += cc11001100_hook("r", 1, "assign"), h.push(v), m.push(v * B));
      G = cc11001100_hook("G", Math.min(G, Wa), "assign");
      q.push(N);
    }
    z = cc11001100_hook("z", Infinity === z ? null : z, "assign");
    G = cc11001100_hook("G", Infinity === G ? null : G, "assign");
    f = cc11001100_hook("f", Do(n), "assign");
    q = cc11001100_hook("q", Do(q), "assign");
    h = cc11001100_hook("h", Eo(b, h), "assign");
    n = cc11001100_hook("n", Eo(b, g), "assign");
    m = cc11001100_hook("m", Eo(b * c, m), "assign");
    L = cc11001100_hook("L", Eo(b * c, k), "assign");
    return new Fo(a, {
      bc: cc11001100_hook("bc", e, "object-key-init"),
      Sb: cc11001100_hook("Sb", b, "object-key-init"),
      qc: cc11001100_hook("qc", c, "object-key-init"),
      oc: cc11001100_hook("oc", d, "object-key-init"),
      Rb: cc11001100_hook("Rb", r, "object-key-init"),
      Fb: cc11001100_hook("Fb", t, "object-key-init"),
      Gb: cc11001100_hook("Gb", Go(g), "object-key-init"),
      Yb: cc11001100_hook("Yb", Go(l), "object-key-init"),
      Xb: cc11001100_hook("Xb", Go(k), "object-key-init"),
      mc: cc11001100_hook("mc", f, "object-key-init"),
      lc: cc11001100_hook("lc", q, "object-key-init"),
      kc: cc11001100_hook("kc", z, "object-key-init"),
      jc: cc11001100_hook("jc", G, "object-key-init"),
      ac: cc11001100_hook("ac", h, "object-key-init"),
      Zb: cc11001100_hook("Zb", n, "object-key-init"),
      Wb: cc11001100_hook("Wb", m, "object-key-init"),
      Vb: cc11001100_hook("Vb", L, "object-key-init"),
      rc: cc11001100_hook("rc", I, "object-key-init")
    });
  }
  function Ho(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Co(a), "assign");
    return ((a.j.Gb || 0) * (a.j.Rb + a.j.Fb) + b) / (a.j.Sb + b);
  }
  function Io(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Oc() && !(900 <= T(a.l).clientWidth), "var-init"),
      d = cc11001100_hook("d", Da([], e => Ga(a.m, e)).join(","), "var-init");
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
  class Fo {
    constructor(a, b) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" "), "assign");
    }
  }
  function Go(a) {
    cc11001100_hook("a", a, "function-parameter");
    return vc.apply(null, Da(a, b => 0 < b)) || null;
  }
  function Eo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 >= a ? null : uc.apply(null, b) / a;
  }
  function Do(a) {
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
  function Jo(a, b) {
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
    b = cc11001100_hook("b", c ? null : Fm(b), "assign");
    a.j = cc11001100_hook("a.j", b, "assign");
    if (b = cc11001100_hook("b", !!a.j, "assign")) a = cc11001100_hook("a", a.j, "assign"), b = cc11001100_hook("b", !!a && 1 > a.length, "assign");
    return b;
  }
  function Ko(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      if (!b || !Jo(a, b)) return !1;
      a.j.push(Date.now());
      const c = cc11001100_hook("c", JSON.stringify(a.j), "var-init");
      b.setItem("__lsv__", c);
      return b.getItem("__lsv__") == c;
    } catch (c) {
      return !1;
    }
  }
  class Lo {
    constructor() {
      this.j = cc11001100_hook("this.j", null, "assign");
    }
  }
  ;
  function Mo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.ma) Promise.resolve(!1);else {
      a.ma = cc11001100_hook("a.ma", !0, "assign");
      b = cc11001100_hook("b", Qe(b), "assign");
      a.ba = cc11001100_hook("a.ba", "true" === b["i-fvs"], "assign");
      var c = cc11001100_hook("c", b.i_expid, "var-init");
      c && (a.M = cc11001100_hook("a.M", c, "assign"));
      b.qid && (a.X = cc11001100_hook("a.X", b.qid, "assign"));
      a.C = cc11001100_hook("a.C", parseFloat(b.den_lim) || 0, "assign");
      b = cc11001100_hook("b", parseInt(b.sti_lt, 10), "assign");
      isNaN(b) || (a.U = cc11001100_hook("a.U", b, "assign"));
      a.I = cc11001100_hook("a.I", !0, "assign");
      if (No(a)) Promise.resolve(!1);else {
        var d = cc11001100_hook("d", new im(), "var-init"),
          e = cc11001100_hook("e", () => {
            Oo(a, {
              nip: cc11001100_hook("nip", 1, "object-key-init"),
              ph: cc11001100_hook("ph", Ne(a.j, !0), "object-key-init"),
              vh: cc11001100_hook("vh", a.j.innerHeight, "object-key-init"),
              iplt: cc11001100_hook("iplt", Date.now() - a.T, "object-key-init"),
              ama: cc11001100_hook("ama", a.K, "object-key-init"),
              url: cc11001100_hook("url", a.j.location ? a.j.location.href : void 0, "object-key-init")
            }, .1);
            a.G.push("Could not locate a suitable placement in the content below the fold.");
            sm(a.j, a.G);
            d.resolve(!1);
          }, "var-init"),
          f = cc11001100_hook("f", (g, h) => {
            Oo(a, {
              iplt: cc11001100_hook("iplt", Date.now() - a.T, "object-key-init"),
              ama: cc11001100_hook("ama", a.K, "object-key-init"),
              y: cc11001100_hook("y", h, "object-key-init")
            }, .01);
            d.resolve(Po(a, g));
          }, "var-init");
        a.T = cc11001100_hook("a.T", Date.now(), "assign");
        a.K ? (b = cc11001100_hook("b", Ao(a.j, a.Fa), "assign")) && a.I && !No(a) ? f(b.lb, b.Cc) : (Oo(a, {
          amacerr: cc11001100_hook("amacerr", 1, "object-key-init")
        }, .1), e()) : Bo(a.j).then(g => {
          if (a.I && !No(a)) return g.aa().then(h => {
            if (h.j) var l = cc11001100_hook("l", h.j, "var-init");else h.na || (si(h, !1), h.m()), l = cc11001100_hook("l", h.na, "assign"), !h.j && l && (h.j = cc11001100_hook("h.j", l.l(), "assign")), l = cc11001100_hook("l", h.j, "assign");
            f(h, l ? l.top : -1);
          }, e);
          d.resolve(!1);
        });
      }
    }
  }
  function No(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.ba ? !1 : He(a.j).wasReactiveAdVisible[8] ? (Oo(a, {
      vigs: cc11001100_hook("vigs", 1, "object-key-init")
    }, .1), !0) : !1;
  }
  function Oo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", b || {}, "assign");
    a.X && (b.qid = cc11001100_hook("b.qid", a.X, "assign"));
    a.M && (b.eid = cc11001100_hook("b.eid", a.M, "assign"));
    a.l && (b.tsl = cc11001100_hook("b.tsl", Date.now() - a.l, "assign"));
    a.V && (b.tslo = cc11001100_hook("b.tslo", Date.now() - a.V, "assign"), b.tl = cc11001100_hook("b.tl", a.wa, "assign"));
    a.F.src && (b.req = cc11001100_hook("b.req", a.F.src, "assign"));
    ij("sci_evt", b, c);
  }
  function Po(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Qo(a) && Ro(a) && xo(a.m, b) && (a.l = cc11001100_hook("a.l", Date.now(), "assign"), So(a), a.ba ? To(a) : a.Z.call(a.j, () => Uo(a)));
    sm(a.j, a.G);
    return !!a.l;
  }
  function Vo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.H = cc11001100_hook("a.H", !0, "assign");
    a.v = cc11001100_hook("a.v", !1, "assign");
    ro(a.m, !1);
    a.A && (H(a.j, "orientationchange", a.A), a.A = cc11001100_hook("a.A", null, "assign"));
    a.B && (H(a.j, "resize", a.B), a.B = cc11001100_hook("a.B", null, "assign"));
  }
  function Qo(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j.innerHeight, "var-init");
    if (!b) return !1;
    var c = cc11001100_hook("c", a.j, "var-init");
    c = cc11001100_hook("c", T(c).scrollWidth <= T(c).clientWidth, "assign");
    let d;
    if (!Le(a.j)) return Oo(a, {
      lnd: cc11001100_hook("lnd", 1, "object-key-init")
    }, .1), a.G.push("Landscape is not supported"), !1;
    if (a.C && (d = cc11001100_hook("d", Ho(a.j, b), "assign")) > a.C) return Oo(a, Object.assign({
      den: cc11001100_hook("den", d, "object-key-init"),
      lim: cc11001100_hook("lim", a.C, "object-key-init")
    }, Io(Co(a.j), a.j.location.hostname)), 1), a.G.push(`Insertion would cause ad density greater than ${100 * a.C}%.`), !1;
    c || Oo(a, {
      Zc: cc11001100_hook("Zc", 1, "object-key-init")
    }, .1);
    return !0;
  }
  function Ro(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.fa ? !0 : Jo(R(Lo), a.ga);
  }
  function So(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A = cc11001100_hook("a.A", hj(519, () => {
      !a.H && a.v && Oo(a, {
        tto: cc11001100_hook("tto", Date.now() - a.l, "object-key-init"),
        por: cc11001100_hook("por", Le(a.j) ? 1 : 0, "object-key-init")
      }, .1);
    }), "assign");
    E(a.j, "orientationchange", a.A);
    a.B = cc11001100_hook("a.B", hj(520, () => {
      a.H || (a.m.C(), a.v && Oo(a, {
        ttre: cc11001100_hook("ttre", Date.now() - a.l, "object-key-init")
      }, .1));
    }), "assign");
    E(a.j, "resize", a.B);
  }
  function To(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.va || (a.F.contentWindow.postMessage(JSON.stringify({
      msg_type: cc11001100_hook("msg_type", "i-view", "object-key-init")
    }), "https://googleads.g.doubleclick.net"), a.va = cc11001100_hook("a.va", !0, "assign"));
  }
  function Uo(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.H) if (No(a)) Vo(a);else {
      var b = cc11001100_hook("b", a.m.j.getBoundingClientRect().top, "var-init"),
        c = cc11001100_hook("c", a.j.innerHeight, "var-init");
      a.m.C();
      .5 <= (c - b) / c && To(a);
      b < c && (He(a.j).wasReactiveAdVisible[9] = cc11001100_hook("He(a.j).wasReactiveAdVisible[9]", !0, "assign"), a.fa || Ko(R(Lo), a.ga), a.xa = cc11001100_hook("a.xa", !0, "assign"));
      0 >= b ? (0 <= a.U && Wo(a), Oo(a, {
        sice: cc11001100_hook("sice", !0, "object-key-init"),
        vh: cc11001100_hook("vh", c, "object-key-init"),
        gvto: cc11001100_hook("gvto", b, "object-key-init")
      }, .1)) : a.Z && a.Z.call(a.j, () => Uo(a));
    }
  }
  function Wo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.V = cc11001100_hook("a.V", Date.now(), "assign");
    a.v = cc11001100_hook("a.v", !0, "assign");
    a.wa++;
    yo(a.m);
    u.setTimeout(() => {
      if (a.v) {
        a.v = cc11001100_hook("a.v", !1, "assign");
        var b = cc11001100_hook("b", a.m, "var-init");
        const c = cc11001100_hook("c", b.j, "var-init");
        O(c, {
          top: cc11001100_hook("top", xd(b.v).y + "px", "object-key-init")
        });
        O(c, {
          position: cc11001100_hook("position", "absolute", "object-key-init")
        });
        wo(b);
      }
    }, Math.max(0, a.U));
  }
  class Xo extends mo {
    constructor(a, b, c, d, e, f) {
      super(a, b);
      this.ga = cc11001100_hook("this.ga", f, "assign");
      this.fa = cc11001100_hook("this.fa", d, "assign");
      this.H = cc11001100_hook("this.H", !1, "assign");
      this.M = cc11001100_hook("this.M", null, "assign");
      this.ba = cc11001100_hook("this.ba", this.I = cc11001100_hook("this.I", this.ma = cc11001100_hook("this.ma", !1, "assign"), "assign"), "assign");
      this.G = cc11001100_hook("this.G", [], "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.wa = cc11001100_hook("this.wa", this.V = cc11001100_hook("this.V", this.l = cc11001100_hook("this.l", 0, "assign"), "assign"), "assign");
      this.B = cc11001100_hook("this.B", this.A = cc11001100_hook("this.A", this.X = cc11001100_hook("this.X", null, "assign"), "assign"), "assign");
      this.Z = cc11001100_hook("this.Z", u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || u.msRequestAnimationFrame, "assign");
      this.va = cc11001100_hook("this.va", !1, "assign");
      this.m = cc11001100_hook("this.m", new zo(b, a, e), "assign");
      this.xa = cc11001100_hook("this.xa", !1, "assign");
      this.T = cc11001100_hook("this.T", this.U = cc11001100_hook("this.U", 0, "assign"), "assign");
      this.K = cc11001100_hook("this.K", Fb(c, 1, !1), "assign");
      this.Fa = cc11001100_hook("this.Fa", Bb(c, Tk, 2), "assign");
      this.C = cc11001100_hook("this.C", 0, "assign");
    }
    ea(a) {
      a["sti-fill"] = cc11001100_hook("a[\"sti-fill\"]", b => {
        Mo(this, b);
      }, "assign");
      a["i-no"] = cc11001100_hook("a[\"i-no\"]", () => {
        this.I = cc11001100_hook("this.I", !1, "assign");
        !this.xa && this.l && Vo(this);
      }, "assign");
    }
  }
  ;
  class Yo extends vm {
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
        var c = cc11001100_hook("c", Uk(b), "var-init");
      } catch (d) {
        c = cc11001100_hook("c", null, "assign");
      } else c = cc11001100_hook("c", null, "assign");
      this.C = cc11001100_hook("this.C", c, "assign");
      Array.isArray(a.fillMessage) && (this.L = cc11001100_hook("this.L", !0, "assign"));
      return !0;
    }
  }
  ;
  class Zo {
    verifyAndProcessConfig(a, b, c) {
      var d = cc11001100_hook("d", He(a), "var-init");
      if (d.wasReactiveAdConfigReceived[9]) return !1;
      const e = cc11001100_hook("e", new Yo(), "var-init");
      if (!um(e, b)) return !1;
      d.wasReactiveAdConfigReceived[9] = cc11001100_hook("d.wasReactiveAdConfigReceived[9]", !0, "assign");
      if (!e.l && !Jo(R(Lo), c)) return !1;
      b = cc11001100_hook("b", Lc(document, "INS"), "assign");
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
      d = cc11001100_hook("d", new oo(), "assign");
      vb(d, 1, e.G);
      e.C && Eb(d, 2, e.C);
      e.L && vb(d, 3, !0);
      a: {
        nb = cc11001100_hook("nb", !0, "assign");
        try {
          var f = cc11001100_hook("f", JSON.stringify(d.toJSON(), Tb), "var-init");
          break a;
        } finally {
          nb = cc11001100_hook("nb", !1, "assign");
        }
        f = cc11001100_hook("f", void 0, "assign");
      }
      c.google_rasc = cc11001100_hook("c.google_rasc", f, "assign");
      e.l && (c.google_adtest = cc11001100_hook("c.google_adtest", "on", "assign"));
      Wm(b, c, a);
      return !0;
    }
  }
  ;
  var bp = cc11001100_hook("bp", class extends mo {
    constructor(a, b) {
      super(a, b.m);
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    ea(a) {
      a.dismiss = cc11001100_hook("a.dismiss", () => {
        var b = cc11001100_hook("b", this.l, "var-init");
        $o(b, -30);
        ap(b, "dismissed");
      }, "assign");
    }
  }, "var-init");
  var dp = cc11001100_hook("dp", (a, b) => {
    if (!a.body) return null;
    const c = cc11001100_hook("c", new cp(), "var-init");
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
  class cp {
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
  function ep(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.j, "var-init");
    if (c) if (b) {
      b = cc11001100_hook("b", a.B, "assign");
      if (null == b.j) {
        var d = cc11001100_hook("d", b.l, "var-init");
        const e = cc11001100_hook("e", d.j.nextRestrictionId++, "var-init");
        d.j.maxZIndexRestrictions[e] = cc11001100_hook("d.j.maxZIndexRestrictions[e]", 2147483646, "assign");
        pn(d);
        b.j = cc11001100_hook("b.j", e, "assign");
      }
      O(c, {
        display: cc11001100_hook("display", "block", "object-key-init")
      });
      a.A.body && !a.v && (a.v = cc11001100_hook("a.v", dp(a.A, a.l), "assign"));
      c.setAttribute("tabindex", "0");
      c.setAttribute("aria-hidden", "false");
      a.A.body.setAttribute("aria-hidden", "true");
    } else b = cc11001100_hook("b", a.B, "assign"), null != b.j && (d = cc11001100_hook("d", b.l, "assign"), delete d.j.maxZIndexRestrictions[b.j], pn(d), b.j = cc11001100_hook("b.j", null, "assign")), O(c, {
      display: cc11001100_hook("display", "none", "object-key-init")
    }), a.v && (a.v(), a.v = cc11001100_hook("a.v", null, "assign")), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true");
  }
  function fp(a) {
    cc11001100_hook("a", a, "function-parameter");
    ep(a, !1);
    const b = cc11001100_hook("b", a.j, "var-init");
    b && (Ln(a, c => {
      O(c, gp);
      Re(c);
    }, !0), a.m.setAttribute("width", ""), a.m.setAttribute("height", ""), P(a.m, gp), P(a.m, hp), P(b, ip), P(b, {
      background: cc11001100_hook("background", "transparent", "object-key-init")
    }), O(b, {
      display: cc11001100_hook("display", "none", "object-key-init"),
      position: cc11001100_hook("position", "fixed", "object-key-init")
    }), Re(b), Re(a.m));
  }
  class jp extends Mn {
    constructor(a, b, c) {
      super(a, b, c);
      this.v = cc11001100_hook("this.v", null, "assign");
      this.A = cc11001100_hook("this.A", b.document, "assign");
      a = cc11001100_hook("a", new sn(b), "assign");
      this.B = cc11001100_hook("this.B", new tn(a), "assign");
    }
  }
  var ip = cc11001100_hook("ip", {
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
    gp = cc11001100_hook("gp", {
      width: cc11001100_hook("width", "100vw", "object-key-init"),
      height: cc11001100_hook("height", "100vh", "object-key-init")
    }, "var-init"),
    hp = cc11001100_hook("hp", {
      left: cc11001100_hook("left", "0", "object-key-init"),
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "0", "object-key-init")
    }, "var-init");
  class kp extends jp {
    constructor(a, b, c) {
      super(b, a, c);
      fp(this);
    }
    Z(a) {
      return ag(a);
    }
  }
  ;
  function lp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.match(Pc), "assign");
    const b = cc11001100_hook("b", a[6], "var-init");
    return (a[5] || "") + (b ? "?" + b : "") || "/";
  }
  function mp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b ? a.j = cc11001100_hook("a.j", new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig"), "assign") : a.j = cc11001100_hook("a.j", null, "assign");
  }
  function np(a, b, c, d, e) {
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
    return !d || op(a, d) && lp(c) == a.v ? !1 : !0;
  }
  function op(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.replace(pp, "") == a.m.replace(pp, "");
  }
  function qp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (Fa(["data-google-vignette", "data-google-interstitial"], f => "false" === b.getAttribute(f) || !1)) return !1;
    const d = cc11001100_hook("d", b.href, "var-init"),
      e = cc11001100_hook("e", d && (d.match(Pc)[3] || null), "var-init");
    if (!np(a, b, d, e, c)) return !1;
    a.l = cc11001100_hook("a.l", !!e && op(a, e), "assign");
    return a.l || !c && !Pj(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d);
  }
  function rp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!b || !a.j) return [];
    var c = cc11001100_hook("c", [], "var-init");
    Im(b, c, !0, !0);
    b = cc11001100_hook("b", c.join(""), "assign");
    b = cc11001100_hook("b", b.replace(Jm, " ").replace(Km, ""), "assign");
    b = cc11001100_hook("b", b.replace(Lm, ""), "assign");
    b = cc11001100_hook("b", b.replace(Mm, " "), "assign");
    " " != b && (b = cc11001100_hook("b", b.replace(Nm, ""), "assign"));
    if (!b) return [];
    a = cc11001100_hook("a", b.match(a.j), "assign");
    b = cc11001100_hook("b", [], "assign");
    for (c = cc11001100_hook("c", 0, "assign"); a && c < a.length; c++) {
      const d = cc11001100_hook("d", a[c].toLowerCase(), "var-init");
      0 <= Ba(b, d) || b.push(d);
    }
    return b;
  }
  class sp {
    constructor(a) {
      this.j = cc11001100_hook("this.j", null, "assign");
      this.m = cc11001100_hook("this.m", a.match(Pc)[3] || "", "assign");
      this.v = cc11001100_hook("this.v", lp(a), "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
  }
  var pp = cc11001100_hook("pp", /^(www\.|m\.|mobile\.)*/i, "var-init");
  function tp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j?.setAttribute("data-vignette-loaded", "true");
  }
  function up(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.Ya && (b.qid = cc11001100_hook("b.qid", a.Ya, "assign"));
    a.xa && (b.eid = cc11001100_hook("b.eid", a.xa, "assign"));
    a.ga && (b.lnk = cc11001100_hook("b.lnk", a.ga.substring(0, 100), "assign"), a.B.l || (b.inter = cc11001100_hook("b.inter", "1", "assign")));
    const d = cc11001100_hook("d", Vd(), "var-init");
    d && (b.ns = cc11001100_hook("b.ns", String(d), "assign"));
    b.fs = cc11001100_hook("b.fs", String(Ud() - a.A), "assign");
    b.req = cc11001100_hook("b.req", a.F.src, "assign");
    b.ptt = cc11001100_hook("b.ptt", 9, "assign");
    null != a.G && (b.comm = cc11001100_hook("b.comm", !0, "assign"));
    Rd(a.Pa, "ia_evt", b, !0, c);
  }
  function vp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.G && (jm(a.G).then(() => {
      tp(a.M);
      wp(a);
    }), km(a.G).then(() => void xp(a)), lm(a.G).then(() => {
      a.V = cc11001100_hook("a.V", !0, "assign");
    }));
  }
  function wp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l || (a.l = cc11001100_hook("a.l", Ud(), "assign"), yp(a), up(a, {
      aflvr: cc11001100_hook("aflvr", !0, "object-key-init"),
      al: cc11001100_hook("al", a.l - a.A, "object-key-init")
    }, .01));
  }
  function xp(a) {
    cc11001100_hook("a", a, "function-parameter");
    up(a, {
      dis: cc11001100_hook("dis", Date.now() - a.C, "object-key-init"),
      dha: cc11001100_hook("dha", Number(a.ba), "object-key-init")
    }, .01);
    if (a.ba) zp(a) ? a.j.history.back() : Ap(a);else if (u.setTimeout(() => {
      Ap(a);
    }, 1E3), a.m) {
      var b = cc11001100_hook("b", Date.now(), "var-init");
      a.j.addEventListener("pagehide", () => {
        up(a, {
          pg_hid: cc11001100_hook("pg_hid", Date.now() - b, "object-key-init")
        }, .01);
      });
      a.X && (a.fa = cc11001100_hook("a.fa", !1, "assign"));
      Bp(a, a.m.href);
    }
  }
  function yp(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.v) {
      a.v = cc11001100_hook("a.v", a.J.O(527, c => {
        Cp(a, c);
      }), "assign");
      if (null !== a.v) {
        const c = cc11001100_hook("c", a.v, "var-init");
        E(a.j.document, "click", d => {
          c(d);
        }, cc);
      }
      var b = cc11001100_hook("b", a.j.frames, "var-init");
      for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) try {
        a.ab(b[c].frameElement) || E(b[c].document, "click", a.v, cc);
      } catch (d) {}
    }
  }
  function zp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 !== a.j.location.hash.indexOf("google_vignette");
  }
  function Ap(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.C && (a.va = cc11001100_hook("a.va", !0, "assign"), a.v && (H(a.j.document, "click", a.v), a.v = cc11001100_hook("a.v", null, "assign")), a.I && a.I.parentNode && (a.I.parentNode.removeChild(a.I), a.I = cc11001100_hook("a.I", null, "assign")), a.H && a.H.parentNode && (a.H.parentNode.removeChild(a.H), a.H = cc11001100_hook("a.H", null, "assign")), ep(a.M, !1), a.Za());
  }
  function Bp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.j.location, "assign");
    b = cc11001100_hook("b", Tc(b, Sc) || oc, "assign");
    if (b instanceof nc) var c = cc11001100_hook("c", b instanceof nc && b.constructor === nc ? b.j : "type_error:SafeUrl", "var-init");else {
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
  function Dp(a) {
    cc11001100_hook("a", a, "function-parameter");
    zp(a) || (a.j.location.hash = cc11001100_hook("a.j.location.hash", "google_vignette", "assign"));
    a.X = cc11001100_hook("a.X", a.J.O(526, () => {
      a.fa && (zp(a) ? (up(a, {
        fnv: cc11001100_hook("fnv", 1, "object-key-init")
      }, .01), Bp(a, a.m.href)) : (a.rb(), Ap(a)));
    }), "assign");
    u.setTimeout(ja(E, a.j, "hashchange", a.X), 0);
  }
  function Ep(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Ud(), "var-init"),
      d = cc11001100_hook("d", !He(a.j).wasReactiveAdVisible[9], "var-init"),
      e = cc11001100_hook("e", rp(a.B, b), "var-init"),
      f = cc11001100_hook("f", .05 > Math.abs(Me(a.j) - 1), "var-init");
    b = cc11001100_hook("b", a.K.width < a.K.height === Le(a.j), "assign");
    if (864E5 > c - a.A && a.U && !a.V && !zp(a) && a.l && (a.Fa || d) && !e.length && f && b) b = cc11001100_hook("b", null, "assign");else {
      var g = cc11001100_hook("g", new he(), "var-init");
      c = cc11001100_hook("c", D(g, 1, c, 0), "assign");
      c = cc11001100_hook("c", D(c, 2, 864E5, 0), "assign");
      c = cc11001100_hook("c", D(c, 3, a.U, !1), "assign");
      c = cc11001100_hook("c", D(c, 4, a.V, !1), "assign");
      c = cc11001100_hook("c", D(c, 5, zp(a), !1), "assign");
      c = cc11001100_hook("c", D(c, 6, !!a.l, !1), "assign");
      a = cc11001100_hook("a", D(c, 7, a.Fa, !1), "assign");
      d = cc11001100_hook("d", D(a, 8, !d, !1), "assign");
      if (null == e) d = cc11001100_hook("d", vb(d, 9, ob), "assign");else {
        a = cc11001100_hook("a", A(e), "assign");
        if (!(a & 4)) {
          if (a & 2 || Object.isFrozen(e)) e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign");
          for (c = cc11001100_hook("c", 0, "assign"); c < e.length; c++) e[c] = cc11001100_hook("e[c]", e[c], "assign");
          gb(e, a | 5);
        }
        d = cc11001100_hook("d", vb(d, 9, e), "assign");
      }
      f = cc11001100_hook("f", D(d, 10, f, !1), "assign");
      b = cc11001100_hook("b", D(f, 11, b, !1), "assign");
    }
    return b;
  }
  function Fp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Xc("LINK", a.j.document), "assign");
    a.setAttribute("rel", c);
    a.setAttribute("href", b);
    return a;
  }
  function Gp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.I = cc11001100_hook("a.I", Fp(a, b, "prerender"), "assign");
    a.H = cc11001100_hook("a.H", Fp(a, b, "prefetch"), "assign");
    a.j.document.body.appendChild(a.I);
    a.j.document.body.appendChild(a.H);
  }
  function Hp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (b = cc11001100_hook("b", b.target, "assign"); b;) {
      if ("nodeName" in b && "A" === b.nodeName) {
        if (qp(a.B, b, b.ownerDocument !== a.j.document)) return b;
        break;
      }
      b = cc11001100_hook("b", "parentElement" in b ? b.parentElement : null, "assign");
    }
    return null;
  }
  function Cp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!b || b.defaultPrevented || a.C || a.L) {
      var c = cc11001100_hook("c", re(oe(1), a.A), "var-init");
      a.l && vb(c, 4, a.l);
    } else if (a.m) c = cc11001100_hook("c", re(oe(2), a.A), "assign"), a.l && vb(c, 4, a.l);else if (c = cc11001100_hook("c", Hp(a, b), "assign")) {
      var d = cc11001100_hook("d", Ep(a, c), "var-init");
      d ? (Ip(a, c, !1), c = cc11001100_hook("c", qe(re(oe(4), a.A), d), "assign"), a.l && vb(c, 4, a.l)) : (a.m = cc11001100_hook("a.m", c, "assign"), nd(b), b.preventDefault = cc11001100_hook("b.preventDefault", () => b && (b.preventDefaultTriggered = cc11001100_hook("b.preventDefaultTriggered", !0, "assign")), "assign"), c = cc11001100_hook("c", re(oe(5), a.A), "assign"), a.l && vb(c, 4, a.l), u.setTimeout(x(a.mb, a, b), 0));
    } else c = cc11001100_hook("c", re(oe(3), a.A), "assign"), a.l && vb(c, 4, a.l);
  }
  function Ip(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.j, "var-init");
    var e = cc11001100_hook("e", He(d), "var-init");
    const f = cc11001100_hook("f", a.K.width < a.K.height !== Le(a.j), "var-init");
    e = cc11001100_hook("e", {
      zm: cc11001100_hook("zm", Number(.05 > Math.abs(Me(d) - 1)), "object-key-init"),
      sz: cc11001100_hook("sz", Number(f), "object-key-init"),
      fc: cc11001100_hook("fc", Number(a.U), "object-key-init"),
      vp: cc11001100_hook("vp", Number(zp(a)), "object-key-init"),
      al: cc11001100_hook("al", Number(!!a.l), "object-key-init"),
      fsi: cc11001100_hook("fsi", Number(!!e.wasReactiveAdVisible[9]), "object-key-init"),
      ag: cc11001100_hook("ag", Number(864E5 > Ud() - a.A), "object-key-init")
    }, "assign");
    c && (e.wsdojl = cc11001100_hook("e.wsdojl", !0, "assign"));
    f && (e.rs_sz = cc11001100_hook("e.rs_sz", `${a.K.width}x${a.K.height}`, "assign"), e.cr_sz = cc11001100_hook("e.cr_sz", `${d.innerWidth}x${d.innerHeight}`, "assign"));
    b = cc11001100_hook("b", rp(a.B, b), "assign");
    b.length && (e.sw = cc11001100_hook("e.sw", b.join(), "assign"));
    a.ma && (e.ts = cc11001100_hook("e.ts", a.ma, "assign"));
    up(a, e, .01);
  }
  var Jp = cc11001100_hook("Jp", class extends lo {
    constructor(a, b, c, d, e, f) {
      var g = cc11001100_hook("g", dj, "var-init"),
        h = cc11001100_hook("h", Jh(Fh) && !Jh(Dh), "var-init");
      super(a, b, c, g, {
        fullscreenApi: cc11001100_hook("fullscreenApi", h, "object-key-init")
      });
      this.M = cc11001100_hook("this.M", d, "assign");
      this.K = cc11001100_hook("this.K", e, "assign");
      this.l = cc11001100_hook("this.l", NaN, "assign");
      this.va = cc11001100_hook("this.va", !1, "assign");
      this.m = cc11001100_hook("this.m", null, "assign");
      this.ba = cc11001100_hook("this.ba", !1, "assign");
      this.U = cc11001100_hook("this.U", !0, "assign");
      this.V = cc11001100_hook("this.V", !1, "assign");
      this.fa = cc11001100_hook("this.fa", !0, "assign");
      this.ga = cc11001100_hook("this.ga", null, "assign");
      this.C = cc11001100_hook("this.C", 0, "assign");
      this.v = cc11001100_hook("this.v", this.I = cc11001100_hook("this.I", this.H = cc11001100_hook("this.H", null, "assign"), "assign"), "assign");
      this.X = cc11001100_hook("this.X", void 0, "assign");
      this.ma = cc11001100_hook("this.ma", null, "assign");
      this.xa = cc11001100_hook("this.xa", f.i_expid ?? null, "assign");
      this.A = cc11001100_hook("this.A", Ud(), "assign");
      this.Fa = cc11001100_hook("this.Fa", "true" === f["i-fvs"], "assign");
      this.Ya = cc11001100_hook("this.Ya", f.qid ?? null, "assign");
      this.B = cc11001100_hook("this.B", new sp(a.location.href), "assign");
      this.kb = cc11001100_hook("this.kb", "true" === f.iobs && "IntersectionObserver" in this.j, "assign");
      this.rb = cc11001100_hook("this.rb", ac(() => void up(this, {
        tth: cc11001100_hook("tth", Date.now() - this.C, "object-key-init")
      }, .01)), "assign");
      mp(this.B, f.stop_word?.split(";") ?? null);
      this.G = cc11001100_hook("this.G", h ? om(a, b.contentWindow, c, g) : null, "assign");
      vp(this);
      yp(this);
    }
    ea(a, b) {
      a["i-blur"] = cc11001100_hook("a[\"i-blur\"]", () => {
        this.ba = cc11001100_hook("this.ba", !0, "assign");
        this.X && (this.fa = cc11001100_hook("this.fa", !0, "assign"));
      }, "assign");
      a["i-no"] = cc11001100_hook("a[\"i-no\"]", c => {
        this.U = cc11001100_hook("this.U", !1, "assign");
        this.ma = cc11001100_hook("this.ma", c.i_tslv ? c.i_tslv : null, "assign");
      }, "assign");
      b.fullscreenApi || (a["i-adframe-load"] = cc11001100_hook("a[\"i-adframe-load\"]", () => {
        tp(this.M);
        const c = cc11001100_hook("c", R(Ih).l(Hh.j, Hh.defaultValue), "var-init");
        0 < c ? setTimeout(() => wp(this), c) : wp(this);
      }, "assign"), a["i-dismiss"] = cc11001100_hook("a[\"i-dismiss\"]", () => {
        xp(this);
      }, "assign"), a.i_iif = cc11001100_hook("a.i_iif", () => {
        this.V = cc11001100_hook("this.V", !0, "assign");
      }, "assign"));
    }
    Ca() {
      super.Ca();
      zp(this) && Bp(this, this.m.href);
      this.v && (H(this.j.document, "click", this.v), this.v = cc11001100_hook("this.v", null, "assign"));
    }
    Za() {}
    ab() {
      return !1;
    }
    mb(a) {
      if (this.C || !this.m || this.L) ie(1);else {
        a = cc11001100_hook("a", !!a.preventDefaultTriggered, "assign");
        var b = cc11001100_hook("b", qp(this.B, this.m, this.m.ownerDocument !== this.j.document), "var-init"),
          c = cc11001100_hook("c", Ep(this, this.m), "var-init");
        a || !b || c ? (Ip(this, this.m, a), b = cc11001100_hook("b", le(ke(ie(2), a), b), "assign"), c && Eb(b, 4, c), a ? this.m = cc11001100_hook("this.m", null, "assign") : Bp(this, this.m.href)) : this.bb() ? (up(this, {
          lif: cc11001100_hook("lif", Ud(), "object-key-init"),
          lase: cc11001100_hook("lase", this.l, "object-key-init"),
          latt: cc11001100_hook("latt", !!this.M.j?.getAttribute("data-vignette-loaded"), "object-key-init"),
          t: cc11001100_hook("t", 9, "object-key-init")
        }, .1), this.C = cc11001100_hook("this.C", Date.now(), "assign"), me(ne(le(ke(ie(4), a), b), !!this.M.j?.getAttribute("data-vignette-loaded")), this.C), He(this.j).wasReactiveAdVisible[8] = cc11001100_hook("He(this.j).wasReactiveAdVisible[8]", !0, "assign"), this.ga = cc11001100_hook("this.ga", this.m.href.substring(0, 100), "assign"), this.kb || (this.G ? u.IntersectionObserver || fm(this.G.Ib, "fullscreen", {
          eventType: cc11001100_hook("eventType", "visible", "object-key-init")
        }, "*") : this.F.contentWindow.postMessage(JSON.stringify({
          msg_type: cc11001100_hook("msg_type", "i-view", "object-key-init")
        }), "*")), Gp(this, this.m.href), Dp(this), E(this.j, "pagehide", this.J.O(528, () => {
          this.va || up(this, {
            ttr: cc11001100_hook("ttr", Date.now() - this.C, "object-key-init")
          }, .01);
          Ap(this);
        })), ep(this.M, !0)) : (le(ke(ie(3), a), b), Bp(this, this.m.href));
      }
    }
    bb() {
      return !0;
    }
  }, "var-init");
  function Kp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b || a.j.document, "assign");
    if (!b.getElementById("vignette-style-id")) {
      var c = cc11001100_hook("c", Dc(b).createElement("STYLE"), "var-init");
      c.id = cc11001100_hook("c.id", "vignette-style-id", "assign");
      c.textContent = cc11001100_hook("c.textContent", "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}", "assign");
      b.head.appendChild(c);
      a.T.push(c);
    }
  }
  function Lp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    let d = cc11001100_hook("d", 0, "var-init");
    for (let e = cc11001100_hook("e", b.links.length, "var-init"); 0 <= e; e--) {
      const f = cc11001100_hook("f", b.links[e], "var-init");
      f && (f.classList.remove("google_vignette_inst"), qp(a.B, f, c) && !rp(a.B, f).length && (d++, f.classList.add("google_vignette_inst")));
    }
    return d;
  }
  class Mp extends Jp {
    constructor(a, b, c, d, e, f, g) {
      super(a, b, ej, new kp(a, b, e), d, g);
      this.hb = cc11001100_hook("this.hb", f, "assign");
      this.T = cc11001100_hook("this.T", [], "assign");
      this.Z = cc11001100_hook("this.Z", 0, "assign");
      this.Wa = cc11001100_hook("this.Wa", Li(this.j.location, "google_ia_debug"), "assign");
      this.gb = cc11001100_hook("this.gb", c, "assign");
      this.Wa && (this.wa(), this.Z = cc11001100_hook("this.Z", u.setInterval(x(this.wa, this), 5E3), "assign"));
    }
    Za() {
      if (this.Wa) {
        for (let b = cc11001100_hook("b", 0, "var-init"); b < this.T.length; ++b) {
          var a = cc11001100_hook("a", this.T[b], "var-init");
          (a = cc11001100_hook("a", a.ownerNode || a.owningElement || a, "assign")) && a.parentNode && a.parentNode.removeChild(a);
        }
        this.T = cc11001100_hook("this.T", [], "assign");
        this.Z && u.clearInterval(this.Z);
      }
    }
    wa() {
      let a = cc11001100_hook("a", Lp(this, this.j.document, !1), "var-init");
      Kp(this);
      var b = cc11001100_hook("b", this.j.frames, "var-init");
      for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) try {
        a += cc11001100_hook("a", Lp(this, b[c].document, !0), "assign"), Kp(this, b[c].document);
      } catch (d) {}
      b = cc11001100_hook("b", rm(this.j, 1), "assign");
      null != b && b.setLinksInstrumented(a);
    }
    bb() {
      return this.gb || Ko(R(Lo), this.hb);
    }
    ab(a) {
      return /aswift_[0-9]+/.test(a.id);
    }
  }
  ;
  function Np(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l.document.createElement("span"), "var-init"),
      c = cc11001100_hook("c", Math.round((Op(a) - 50) / 2), "var-init");
    O(b, {
      background: cc11001100_hook("background", "#FAFAFA", "object-key-init"),
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      left: cc11001100_hook("left", c + "px", "object-key-init"),
      right: cc11001100_hook("right", c + "px", "object-key-init"),
      top: cc11001100_hook("top", Pp(a) + 5 + "px", "object-key-init"),
      "box-shadow": cc11001100_hook("box-shadow", "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px", "object-key-init")
    });
    b.className = cc11001100_hook("b.className", `${a.m}-side-rail-dismiss-btn`, "assign");
    b.appendChild(Qp(a));
    const d = cc11001100_hook("d", () => {
      a.C();
    }, "var-init");
    E(b, "click", d);
    Q(a, () => H(b, "click", d));
    return b;
  }
  function Pp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Number(Bd(a.j).height || a.j.height);
  }
  function Op(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Number(Bd(a.j).width || a.j.width);
  }
  function Qp(a) {
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
  var Rp = cc11001100_hook("Rp", class extends te {
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
        top: cc11001100_hook("top", Pp(this) + "px", "object-key-init"),
        width: cc11001100_hook("width", Op(this) + "px", "object-key-init"),
        height: cc11001100_hook("height", "5px", "object-key-init"),
        "box-shadow": cc11001100_hook("box-shadow", "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px", "object-key-init")
      });
      this.A = cc11001100_hook("this.A", a, "assign");
      this.B = cc11001100_hook("this.B", Np(this), "assign");
      this.v.appendChild(this.A);
      this.v.appendChild(this.B);
    }
  }, "var-init");
  function ap(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    "dismissed" !== a.v && (a.v = cc11001100_hook("a.v", b, "assign"), a.j.setAttribute("data-side-rail-status", a.v));
  }
  function Sp(a, b) {
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
        var m = cc11001100_hook("m", He(d).sideRailAvailableSpace, "var-init"),
          n = cc11001100_hook("n", {
            Y: cc11001100_hook("Y", d, "object-key-init"),
            P: cc11001100_hook("P", f, "object-key-init"),
            R: cc11001100_hook("R", g, "object-key-init"),
            yb: cc11001100_hook("yb", h, "object-key-init")
          }, "var-init"),
          q = cc11001100_hook("q", `f-${Rm(n.P)}x${Rm(n.R)}`, "var-init");
        if (!m.has(q)) {
          m.set(q, 0);
          He(n.Y).sideRailProcessedFixedElements.clear();
          q = cc11001100_hook("q", new Set([...Array.from(n.Y.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...n.yb]), "assign");
          for (var r of Qm(n.Y)) Om(r, q) || Vm(r, m, n);
        }
        n = cc11001100_hook("n", [], "assign");
        q = cc11001100_hook("q", .9 * g, "assign");
        var t = cc11001100_hook("t", U(d), "var-init"),
          z = cc11001100_hook("z", r = cc11001100_hook("r", (g - q) / 2, "assign"), "var-init"),
          G = cc11001100_hook("G", q / 7, "var-init");
        for (let Wa = cc11001100_hook("Wa", 0, "var-init"); 8 > Wa; Wa++) {
          var I = cc11001100_hook("I", n, "var-init"),
            N = cc11001100_hook("N", I.push, "var-init");
          c: {
            var v = cc11001100_hook("v", z, "var-init");
            var B = cc11001100_hook("B", e, "var-init"),
              F = cc11001100_hook("F", m, "var-init"),
              L = cc11001100_hook("L", {
                Y: cc11001100_hook("Y", d, "object-key-init"),
                P: cc11001100_hook("P", f, "object-key-init"),
                R: cc11001100_hook("R", g, "object-key-init"),
                yb: cc11001100_hook("yb", h, "object-key-init")
              }, "var-init");
            const Z = cc11001100_hook("Z", Tm({
                position: cc11001100_hook("position", B, "object-key-init"),
                Ra: cc11001100_hook("Ra", v, "object-key-init"),
                P: cc11001100_hook("P", L.P, "object-key-init"),
                R: cc11001100_hook("R", L.R, "object-key-init")
              }), "var-init"),
              ea = cc11001100_hook("ea", Sm({
                position: cc11001100_hook("position", B, "object-key-init"),
                Ra: cc11001100_hook("Ra", v, "object-key-init"),
                scrollY: cc11001100_hook("scrollY", t, "object-key-init"),
                P: cc11001100_hook("P", L.P, "object-key-init"),
                R: cc11001100_hook("R", L.R, "object-key-init")
              }), "var-init");
            if (F.has(ea)) {
              v = cc11001100_hook("v", Um(F.get(Z), F.get(ea)), "assign");
              break c;
            }
            const rb = cc11001100_hook("rb", "left" === B ? 20 : L.P - 20, "var-init");
            let Qa = cc11001100_hook("Qa", rb, "var-init");
            B = cc11001100_hook("B", .3 * L.P / 5 * ("left" === B ? 1 : -1), "assign");
            for (let Ri = cc11001100_hook("Ri", 0, "var-init"); 6 > Ri; Ri++) {
              const bd = cc11001100_hook("bd", ym(L.Y.document, Math.round(Qa), Math.round(v)), "var-init");
              var M = cc11001100_hook("M", Om(bd, L.yb), "var-init");
              const Si = cc11001100_hook("Si", Pm(bd, L.Y), "var-init");
              if (!M && null !== Si) {
                Vm(Si, F, L);
                F.delete(ea);
                break;
              }
              M || (M = cc11001100_hook("M", bd.offsetHeight >= .25 * L.R, "assign"), M = cc11001100_hook("M", bd.offsetWidth >= .9 * L.P && M, "assign"));
              if (M) F.set(ea, Math.round(Math.abs(Qa - rb) + 20));else if (Qa !== rb) Qa -= cc11001100_hook("Qa", B, "assign"), B /= cc11001100_hook("B", 2, "assign");else {
                F.set(ea, 0);
                break;
              }
              Qa += cc11001100_hook("Qa", B, "assign");
            }
            v = cc11001100_hook("v", Um(F.get(Z), F.get(ea)), "assign");
          }
          N.call(I, v);
          z += cc11001100_hook("z", G, "assign");
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
    c ? Tp(a, b) : $o(a, b);
  }
  function $o(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    "displayed" === a.v && (O(a.j, {
      transition: cc11001100_hook("transition", "all 500ms ease-in", "object-key-init"),
      opacity: cc11001100_hook("opacity", "0", "object-key-init"),
      top: cc11001100_hook("top", a.A + b + "px", "object-key-init")
    }), clearTimeout(a.F), a.F = cc11001100_hook("a.F", setTimeout(() => {
      ap(a, "idle");
      O(a.j, {
        display: cc11001100_hook("display", "none", "object-key-init")
      });
    }, 500), "assign"));
  }
  function Tp(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    "idle" === a.v && (O(a.j, {
      transition: cc11001100_hook("transition", "", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init"),
      opacity: cc11001100_hook("opacity", "0", "object-key-init"),
      top: cc11001100_hook("top", a.A - b + "px", "object-key-init")
    }), clearTimeout(a.F), a.F = cc11001100_hook("a.F", setTimeout(() => {
      ap(a, "displayed");
      O(a.j, {
        transition: cc11001100_hook("transition", "all 500ms ease-in", "object-key-init"),
        opacity: cc11001100_hook("opacity", "1", "object-key-init"),
        top: cc11001100_hook("top", a.A + "px", "object-key-init")
      });
    }, 10), "assign"));
  }
  var Up = cc11001100_hook("Up", class extends Mn {
    constructor(a, b, c, d, e) {
      var f = cc11001100_hook("f", ej, "var-init"),
        g = cc11001100_hook("g", Jh(Eh), "var-init");
      super(a, b, c);
      this.C = cc11001100_hook("this.C", e, "assign");
      this.H = cc11001100_hook("this.H", g, "assign");
      this.v = cc11001100_hook("this.v", "idle", "assign");
      this.A = cc11001100_hook("this.A", this.F = cc11001100_hook("this.F", 0, "assign"), "assign");
      this.B = cc11001100_hook("this.B", null, "assign");
      this.G = cc11001100_hook("this.G", 0, "assign");
      this.position = cc11001100_hook("this.position", 3 === d ? "left" : "right", "assign");
      new Rp(a, b, c, this.position, () => {
        $o(this, -30);
        ap(this, "dismissed");
      });
      ap(this, "idle");
      O(c, {
        display: cc11001100_hook("display", "none", "object-key-init")
      });
      const h = cc11001100_hook("h", f.O(273, () => {
        Sp(this);
      }), "var-init");
      E(a, "load", h);
      Q(this, () => H(a, "load", h));
      const l = cc11001100_hook("l", f.O(267, () => {
        this.B = cc11001100_hook("this.B", null, "assign");
        Sp(this);
      }), "var-init");
      E(b, "resize", l);
      Q(this, () => H(b, "resize", l));
      const k = cc11001100_hook("k", f.O(268, bc(() => {
        const m = cc11001100_hook("m", U(this.l), "var-init");
        Sp(this, this.C.height / 3 * Math.sign(this.G - m));
        this.G = cc11001100_hook("this.G", m, "assign");
      })), "var-init");
      E(b, "scroll", k, dc);
      Q(this, () => H(b, "scroll", k));
    }
  }, "var-init");
  var Vp = cc11001100_hook("Vp", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    verifyAndProcessConfig(a, b) {
      if (3 !== this.j && 4 !== this.j) return !1;
      const c = cc11001100_hook("c", new vm(), "var-init");
      if (!um(c, b)) return !1;
      b = cc11001100_hook("b", a.document.createElement("ins"), "assign");
      b.className = cc11001100_hook("b.className", "adsbygoogle", "assign");
      a.document.body.appendChild(b);
      const d = cc11001100_hook("d", c.B || {}, "var-init");
      d.google_ad_client = cc11001100_hook("d.google_ad_client", c.m, "assign");
      d.google_ad_width = cc11001100_hook("d.google_ad_width", c.A, "assign");
      d.google_ad_height = cc11001100_hook("d.google_ad_height", c.v, "assign");
      d.google_reactive_ad_format = cc11001100_hook("d.google_reactive_ad_format", this.j, "assign");
      Wm(b, d, a);
      return !0;
    }
  }, "var-init");
  class Wp {
    verifyAndProcessConfig(a, b, c) {
      const d = cc11001100_hook("d", He(a), "var-init");
      if (d.wasReactiveAdConfigReceived[8]) return !1;
      const e = cc11001100_hook("e", new vm(), "var-init");
      if (!um(e, b)) return !1;
      d.wasReactiveAdConfigReceived[8] = cc11001100_hook("d.wasReactiveAdConfigReceived[8]", !0, "assign");
      if (!e.l && !Jo(R(Lo), c)) return !1;
      b = cc11001100_hook("b", Xc("INS"), "assign");
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
      Wm(b, c, a);
      return !0;
    }
  }
  ;
  class Xp {
    configProcessorForAdFormat(a) {
      switch (a) {
        case 1:
        case 2:
          return new Zm(a);
        case 3:
        case 4:
          return Jh(Gh) ? new Vp(a) : null;
        case 8:
          return R(Wp);
        case 9:
          return R(Zo);
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
            e = cc11001100_hook("e", Dm(a, f), "assign");
            c = cc11001100_hook("c", new jo(c, a, e, d), "assign");
            new no(a, c, b.google_reactive_fill_message);
            break a;
          case 3:
          case 4:
            new bp(a, new Up(c, a, d, f, new xc(b.google_ad_width, b.google_ad_height)));
            break a;
          case 8:
            new Mp(a, c, "on" == b.google_adtest, new xc(b.google_ad_width, b.google_ad_height), d, e, b.google_reactive_fill_message);
            break a;
          case 9:
            f = cc11001100_hook("f", b.google_rasc, "assign");
            if (void 0 === f || null === f) var g = cc11001100_hook("g", null, "var-init");else try {
              g = cc11001100_hook("g", po(f), "assign");
            } catch (h) {
              ij("rasf_fsi_ama", {}, .1), g = cc11001100_hook("g", null, "assign");
            }
            g = cc11001100_hook("g", g || new oo(), "assign");
            new Xo(a, c, g, "on" == b.google_adtest, d, e);
        }
      }
    }
  }
  ;
  class Yp {}
  ;
  function Zp(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", R(Ih), "var-init");
    b.j = cc11001100_hook("b.j", (c, d) => ve(5, a, () => !1)(c, d, 1), "assign");
    b.l = cc11001100_hook("b.l", (c, d) => ve(6, a, () => 0)(c, d, 1), "assign");
    b.v = cc11001100_hook("b.v", (c, d) => ve(7, a, () => "")(c, d, 1), "assign");
    b.A = cc11001100_hook("b.A", (c, d) => ve(8, a, () => [])(c, d, 1), "assign");
    b.m = cc11001100_hook("b.m", () => {
      ve(15, a, () => {})(1);
    }, "assign");
  }
  ;
  function $p(a) {
    cc11001100_hook("a", a, "function-parameter");
    ej.Db(b => {
      b.shv = cc11001100_hook("b.shv", String(a), "assign");
      b.mjsv = cc11001100_hook("b.mjsv", "m202302230101", "assign");
      const c = cc11001100_hook("c", R(xe).j(), "var-init");
      u.google_ad_modifications || (u.google_ad_modifications = cc11001100_hook("u.google_ad_modifications", {}, "assign"));
      var d = cc11001100_hook("d", u.google_ad_modifications, "var-init");
      d.eids || (d.eids = cc11001100_hook("d.eids", [], "assign"));
      b.eid = cc11001100_hook("b.eid", c.concat(d.eids).join(","), "assign");
    });
  }
  ;
  var aq = cc11001100_hook("aq", "undefined" === typeof sttc ? void 0 : sttc, "var-init");
  function bq() {
    var a = cc11001100_hook("a", ej, "var-init");
    try {
      return Vb(aq, ee), new qm(JSON.parse(aq));
    } catch (b) {
      a.Qa(838, b instanceof Error ? b : Error(String(b)), void 0, c => {
        c.jspb = cc11001100_hook("c.jspb", String(aq), "assign");
      });
    }
    return new qm();
  }
  ;
  gj(210, () => {
    var a = cc11001100_hook("a", bq(), "var-init"),
      b = cc11001100_hook("b", C(a, 2), "var-init");
    $p(null == b ? "" : b);
    a = cc11001100_hook("a", Fb(a, 6), "assign");
    Vb(tm, fe);
    tm = cc11001100_hook("tm", a, "assign");
    a = cc11001100_hook("a", u.ggeac || (u.ggeac = cc11001100_hook("u.ggeac", {}, "assign")), "assign");
    we(R(xe), a);
    Zp(a);
    R(Yp);
    R(Ih).m();
    a = cc11001100_hook("a", new Xp(), "assign");
    {
      u.google_llp || (u.google_llp = cc11001100_hook("u.google_llp", {}, "assign"));
      b = cc11001100_hook("b", u.google_llp, "assign");
      let c = cc11001100_hook("c", b[1], "var-init");
      if (!c) {
        const {
          promise: d,
          resolve: e
        } = cc11001100_hook("", new im(), "var-init");
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
}).call(this, "[2021,\"r20230301\",\"r20110914\",null,null,null,null,\".google.cn\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759842,44759876,44759927,44777877]]");