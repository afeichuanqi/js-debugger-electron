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
  function da(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", typeof a, "var-init");
    return "object" == b && null != a || "function" == b;
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = cc11001100_hook("a[ea]", ++fa, "assign"));
  }
  var ea = cc11001100_hook("ea", "closure_uid_" + (1E9 * Math.random() >>> 0), "var-init"),
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
    Qa = cc11001100_hook("Qa", -1 != ta().toLowerCase().indexOf("webkit") && !y("Edge"), "var-init");
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
        if (Qa) return /WebKit\/(\S+)/.exec(a);
        if (La) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }(), "var-init");
    Ua && (Ta = cc11001100_hook("Ta", Ua ? Ua[1] : "", "assign"));
    if (Ma) {
      var Wa = cc11001100_hook("Wa", Ra(), "var-init");
      if (null != Wa && Wa > parseFloat(Ta)) {
        Sa = cc11001100_hook("Sa", String(Wa), "assign");
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
  function B(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    eb ? b = cc11001100_hook("b", a[eb], "assign") : b = cc11001100_hook("b", a.j, "assign");
    return null == b ? 0 : b;
  }
  function gb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    eb ? a[eb] = cc11001100_hook("a[eb]", b, "assign") : void 0 !== a.j ? a.j = cc11001100_hook("a.j", b, "assign") : Object.defineProperties(a, {
      j: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return a;
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
  var pb = cc11001100_hook("pb", Object.freeze(gb([], 23)), "var-init");
  function qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a & 2) throw Error();
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
    const c = cc11001100_hook("c", B(a), "var-init");
    let d = cc11001100_hook("d", c, "var-init");
    0 === d && (d |= cc11001100_hook("d", b & 16, "assign"));
    d |= cc11001100_hook("d", b & 2, "assign");
    d !== c && gb(a, d);
  }
  ;
  function tb(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l + a.Da, "var-init");
    return a.qa || (a.qa = cc11001100_hook("a.qa", a.O[b] = cc11001100_hook("a.O[b]", {}, "assign"), "assign"));
  }
  function C(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return -1 === b ? null : b >= a.l ? a.qa ? a.qa[b] : void 0 : c && a.qa && (c = cc11001100_hook("c", a.qa[b], "assign"), null != c) ? c : a.O[b + a.Da];
  }
  function ub(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    qb(B(a.O));
    return vb(a, b, c, d);
  }
  function vb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.m && (a.m = cc11001100_hook("a.m", void 0, "assign"));
    if (b >= a.l || d) return tb(a)[b] = cc11001100_hook("tb(a)[b]", c, "assign"), a;
    a.O[b + a.Da] = cc11001100_hook("a.O[b + a.Da]", c, "assign");
    (c = cc11001100_hook("c", a.qa, "assign")) && b in c && delete c[b];
    return a;
  }
  function wb(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    let f = cc11001100_hook("f", C(a, b, d), "var-init");
    Array.isArray(f) || (f = cc11001100_hook("f", pb, "assign"));
    const g = cc11001100_hook("g", B(f), "var-init");
    g & 1 || hb(f);
    if (e) g & 2 || fb(f, 18), c & 1 || Object.freeze(f);else {
      e = cc11001100_hook("e", !(c & 2), "assign");
      const h = cc11001100_hook("h", g & 2, "var-init");
      c & 1 || !h ? e && g & 16 && !h && (a = cc11001100_hook("a", f, "assign"), eb ? a[eb] && (a[eb] &= cc11001100_hook("a[eb]", -17, "assign")) : void 0 !== a.j && (a.j &= cc11001100_hook("a.j", -17, "assign"))) : (f = cc11001100_hook("f", hb(Array.prototype.slice.call(f)), "assign"), vb(a, b, f, d));
    }
    return f;
  }
  function xb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", C(a, b), "assign");
    return null == a ? a : !!a;
  }
  function yb(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", !!(B(a.O) & 2), "var-init");
    let c = cc11001100_hook("c", wb(a, 4, 1, void 0, b), "var-init"),
      d = cc11001100_hook("d", B(c), "var-init");
    if (!(d & 4)) {
      Object.isFrozen(c) && (c = cc11001100_hook("c", hb(c.slice()), "assign"), vb(a, 4, c));
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
    !b && (d & 2 || Object.isFrozen(c)) && (c = cc11001100_hook("c", Array.prototype.slice.call(c), "assign"), fb(c, 5), vb(a, 4, c));
    return c;
  }
  function zb(a, b, c = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", xb(a, b), "assign");
    return null == a ? c : a;
  }
  function Ab(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", C(a, c, !1), "var-init");
    {
      let e = cc11001100_hook("e", !1, "var-init");
      null == d || "object" !== typeof d || (e = cc11001100_hook("e", Array.isArray(d), "assign")) || d.Bb !== lb ? e ? (sb(d, B(a.O)), b = cc11001100_hook("b", new b(d), "assign")) : b = cc11001100_hook("b", void 0, "assign") : b = cc11001100_hook("b", d, "assign");
    }
    b !== d && null != b && vb(a, c, b, !1);
    return b;
  }
  function Bb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", Ab(a, b, c), "assign");
    if (null == b) return b;
    if (!(B(a.O) & 2)) {
      const d = cc11001100_hook("d", Cb(b), "var-init");
      d !== b && (b = cc11001100_hook("b", d, "assign"), vb(a, c, b, !1));
    }
    return b;
  }
  function Db(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", B(a.O), "var-init"),
      e = cc11001100_hook("e", !!(d & 2), "var-init");
    var f = cc11001100_hook("f", e ? 1 : 2, "var-init");
    var g = cc11001100_hook("g", !!(d & 2), "var-init");
    a.j || (a.j = cc11001100_hook("a.j", {}, "assign"));
    var h = cc11001100_hook("h", a.j[c], "var-init"),
      l = cc11001100_hook("l", wb(a, c, 3, void 0, g), "var-init");
    if (h) 3 === f || g || ((g = cc11001100_hook("g", Object.isFrozen(h), "assign"), 1 !== f || g) ? 2 === f && g && (h = cc11001100_hook("h", Array.prototype.slice.call(h), "assign"), a.j[c] = cc11001100_hook("a.j[c]", h, "assign")) : Object.freeze(h)), f = cc11001100_hook("f", h, "assign");else {
      var k = cc11001100_hook("k", l, "var-init");
      h = cc11001100_hook("h", [], "assign");
      g = cc11001100_hook("g", !!(d & 2), "assign");
      l = cc11001100_hook("l", !!(B(k) & 2), "assign");
      const r = cc11001100_hook("r", k, "var-init");
      !g && l && (k = cc11001100_hook("k", Array.prototype.slice.call(k), "assign"));
      var m = cc11001100_hook("m", d | (l ? 2 : 0), "var-init");
      d = cc11001100_hook("d", l, "assign");
      let t = cc11001100_hook("t", 0, "var-init");
      for (; t < k.length; t++) {
        var n = cc11001100_hook("n", k[t], "var-init");
        var q = cc11001100_hook("q", b, "var-init");
        Array.isArray(n) ? (sb(n, m), n = cc11001100_hook("n", new q(n), "assign")) : n = cc11001100_hook("n", void 0, "assign");
        void 0 !== n && (d || (d = cc11001100_hook("d", !!(2 & B(n.O)), "assign")), h.push(n));
      }
      a.j[c] = cc11001100_hook("a.j[c]", h, "assign");
      m = cc11001100_hook("m", B(k), "assign");
      b = cc11001100_hook("b", m | 33, "assign");
      b = cc11001100_hook("b", d ? b & -9 : b | 8, "assign");
      m != b && (d = cc11001100_hook("d", k, "assign"), Object.isFrozen(d) && (d = cc11001100_hook("d", Array.prototype.slice.call(d), "assign")), gb(d, b), k = cc11001100_hook("k", d, "assign"));
      r !== k && vb(a, c, k);
      (g || 1 === f && l) && fb(h, 18);
      (g || 1 === f) && Object.freeze(h);
      f = cc11001100_hook("f", h, "assign");
    }
    a = cc11001100_hook("a", wb(a, c, 3, void 0, e), "assign");
    if (!(e || B(a) & 8)) {
      for (e = cc11001100_hook("e", 0, "assign"); e < f.length; e++) c = cc11001100_hook("c", f[e], "assign"), h = cc11001100_hook("h", Cb(c), "assign"), c !== h && (f[e] = cc11001100_hook("f[e]", h, "assign"), a[e] = cc11001100_hook("a[e]", h.O, "assign"));
      fb(a, 8);
    }
    return f;
  }
  function Eb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a: if (a = cc11001100_hook("a", C(a, b), "assign"), null != a) {
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
  ;
  let Fb;
  function Gb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Fb = cc11001100_hook("Fb", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    Fb = cc11001100_hook("Fb", void 0, "assign");
    return a;
  }
  ;
  function Hb(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (B(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), rb(a), a;
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
  function Ib(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", e && 0 == a.length && B(a) & 1 ? void 0 : Jb(a, b, c, void 0 !== d, e), "assign");else if (mb(a)) {
        const f = cc11001100_hook("f", {}, "var-init");
        for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = cc11001100_hook("f[g]", Ib(a[g], b, c, d, e), "assign"));
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function Jb(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", B(a), "var-init");
    d = cc11001100_hook("d", d ? !!(f & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) a[g] = cc11001100_hook("a[g]", Ib(a[g], b, c, d, e), "assign");
    c(f, a);
    return a;
  }
  function Kb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.Bb === lb ? a.toJSON() : Hb(a);
  }
  function Lb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && rb(b);
  }
  ;
  function Mb(a, b, c = kb) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if (cb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = cc11001100_hook("d", B(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return gb(a, d | 18), a;
        a = cc11001100_hook("a", Jb(a, Mb, d & 4 ? kb : c, !0, !1), "assign");
        b = cc11001100_hook("b", B(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.Bb === lb ? Nb(a) : a;
    }
  }
  function Ob(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    if (a = cc11001100_hook("a", a.j && a.j[c], "assign")) {
      d = cc11001100_hook("d", B(a), "assign");
      d & 2 ? d = cc11001100_hook("d", a, "assign") : (f = cc11001100_hook("f", Ea(a, Nb), "assign"), kb(d, f), Object.freeze(f), d = cc11001100_hook("d", f, "assign"));
      qb(B(b.O));
      g = cc11001100_hook("g", null == d ? pb : hb([]), "assign");
      if (null != d) {
        f = cc11001100_hook("f", !!d.length, "assign");
        for (a = cc11001100_hook("a", 0, "assign"); a < d.length; a++) {
          const h = cc11001100_hook("h", d[a], "var-init");
          f = cc11001100_hook("f", f && !(B(h.O) & 2), "assign");
          g[a] = cc11001100_hook("g[a]", h.O, "assign");
        }
        f = cc11001100_hook("f", (f ? 8 : 0) | 1, "assign");
        a = cc11001100_hook("a", B(g), "assign");
        (a & f) !== f && (Object.isFrozen(g) && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign")), gb(g, a | f));
        b.j || (b.j = cc11001100_hook("b.j", {}, "assign"));
        b.j[c] = cc11001100_hook("b.j[c]", d, "assign");
      } else b.j && (b.j[c] = cc11001100_hook("b.j[c]", void 0, "assign"));
      vb(b, c, g, e);
    } else ub(b, c, Mb(d, f, g), e);
  }
  function Nb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (B(a.O) & 2) return a;
    a = cc11001100_hook("a", Pb(a, !0), "assign");
    fb(a.O, 18);
    return a;
  }
  function Pb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.O, "var-init");
    var d = cc11001100_hook("d", ib([]), "var-init"),
      e = cc11001100_hook("e", a.constructor.messageId, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.qa, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (B(c) & 128) && rb(d);
    b = cc11001100_hook("b", b || B(a.O) & 2 ? kb : jb, "assign");
    d = cc11001100_hook("d", Gb(a.constructor, d), "assign");
    a.Lb && (d.Lb = cc11001100_hook("d.Lb", a.Lb.slice(), "assign"));
    f = cc11001100_hook("f", !!(B(c) & 16), "assign");
    const g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Ob(a, d, h - a.Da, c[h], !1, f, b);
    if (e) for (const h in e) Ob(a, d, +h, e[h], !0, f, b);
    return d;
  }
  function Cb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!(B(a.O) & 2)) return a;
    const b = cc11001100_hook("b", Pb(a, !1), "var-init");
    b.m = cc11001100_hook("b.m", a, "assign");
    return b;
  }
  ;
  var Rb = cc11001100_hook("Rb", class {
    constructor(a, b, c) {
      null == a && (a = cc11001100_hook("a", Fb, "assign"));
      Fb = cc11001100_hook("Fb", void 0, "assign");
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
      this.Da = cc11001100_hook("this.Da", d ? 0 : -1, "assign");
      this.j = cc11001100_hook("this.j", void 0, "assign");
      this.O = cc11001100_hook("this.O", a, "assign");
      a: {
        f = cc11001100_hook("f", this.O.length, "assign");
        d = cc11001100_hook("d", f - 1, "assign");
        if (f && (f = cc11001100_hook("f", this.O[d], "assign"), mb(f))) {
          this.qa = cc11001100_hook("this.qa", f, "assign");
          this.l = cc11001100_hook("this.l", d - this.Da, "assign");
          break a;
        }
        void 0 !== b && -1 < b ? (this.l = cc11001100_hook("this.l", Math.max(b, d + 1 - this.Da), "assign"), this.qa = cc11001100_hook("this.qa", void 0, "assign")) : this.l = cc11001100_hook("this.l", Number.MAX_VALUE, "assign");
      }
      if (this.qa && "g" in this.qa) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c) {
        b = cc11001100_hook("b", e && !0, "assign");
        e = cc11001100_hook("e", this.l, "assign");
        let h;
        for (d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) if (f = cc11001100_hook("f", c[d], "assign"), f < e) {
          f += cc11001100_hook("f", this.Da, "assign");
          var g = cc11001100_hook("g", a[f], "var-init");
          g ? Qb(g, b) : a[f] = cc11001100_hook("a[f]", pb, "assign");
        } else h || (h = cc11001100_hook("h", tb(this), "assign")), (g = cc11001100_hook("g", h[f], "assign")) ? Qb(g, b) : h[f] = cc11001100_hook("h[f]", pb, "assign");
      }
    }
    toJSON() {
      const a = cc11001100_hook("a", this.O, "var-init");
      var b;
      nb ? b = cc11001100_hook("b", a, "assign") : b = cc11001100_hook("b", Jb(a, Kb, Lb, void 0, !1), "assign");
      return b;
    }
  }, "var-init");
  function Qb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", B(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && gb(a, c | d);
    }
  }
  Rb.prototype.Bb = cc11001100_hook("Rb.prototype.Bb", lb, "assign");
  function Sb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Hb(b);
  }
  ;
  let Tb = cc11001100_hook("Tb", void 0, "var-init");
  function Ub(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Tb, "var-init");
    Tb = cc11001100_hook("Tb", void 0, "assign");
    if (!b(a)) throw b = cc11001100_hook("b", c ? c() + "\n" : "", "assign"), Error(b + String(a));
  }
  ;
  function Vb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", Gb(a, ib(b)), "assign");
      }
      return b;
    };
  }
  ;
  function Wb() {
    return !1;
  }
  function Xb() {
    return !0;
  }
  function Yb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function Zb(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", !1, "var-init"),
      c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }
  function $b(a) {
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
  function ac(a) {
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
  var bc = cc11001100_hook("bc", {
      capture: cc11001100_hook("capture", !0, "object-key-init")
    }, "var-init"),
    cc = cc11001100_hook("cc", {
      passive: cc11001100_hook("passive", !0, "object-key-init")
    }, "var-init"),
    dc = cc11001100_hook("dc", Zb(function () {
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
  function ec(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.passive && dc() ? a : a.capture || !1 : !1;
  }
  function D(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return a.addEventListener ? (a.addEventListener(b, c, ec(d)), !0) : !1;
  }
  function G(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return a.removeEventListener ? (a.removeEventListener(b, c, ec(d)), !0) : !1;
  }
  ;
  var fc = cc11001100_hook("fc", Ma || Qa, "var-init");
  var gc;
  function hc() {
    if (void 0 === gc) {
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
        gc = cc11001100_hook("gc", a, "assign");
      } else gc = cc11001100_hook("gc", a, "assign");
    }
    return gc;
  }
  ;
  var jc = cc11001100_hook("jc", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", b === ic ? a : "", "assign");
      }
      toString() {
        return this.j + "";
      }
    }, "var-init"),
    ic = cc11001100_hook("ic", {}, "var-init");
  function kc(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", hc(), "var-init");
    a = cc11001100_hook("a", b ? b.createScriptURL(a) : a, "assign");
    return new jc(a, ic);
  }
  ;
  var mc = cc11001100_hook("mc", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", b === lc ? a : "", "assign");
      }
      toString() {
        return this.j.toString();
      }
    }, "var-init"),
    lc = cc11001100_hook("lc", {}, "var-init"),
    nc = cc11001100_hook("nc", new mc("about:invalid#zClosurez", lc), "var-init");
  const oc = cc11001100_hook("oc", {}, "var-init");
  function pc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof qc && a.constructor === qc ? a.j : "type_error:SafeHtml";
  }
  class qc {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", b === oc ? a : "", "assign");
    }
    toString() {
      return this.j.toString();
    }
  }
  var rc = cc11001100_hook("rc", new qc(u.trustedTypes && u.trustedTypes.emptyHTML || "", oc), "var-init");
  var sc = cc11001100_hook("sc", Zb(function () {
    var a = cc11001100_hook("a", document.createElement("div"), "var-init"),
      b = cc11001100_hook("b", document.createElement("div"), "var-init");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = cc11001100_hook("b", a.firstChild.firstChild, "assign");
    a.innerHTML = cc11001100_hook("a.innerHTML", pc(rc), "assign");
    return !b.parentElement;
  }), "var-init");
  function tc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Array.prototype.reduce.call(arguments, function (b, c) {
      return b + c;
    }, 0);
  }
  function uc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return tc.apply(null, arguments) / arguments.length;
  }
  ;
  function I(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.x = cc11001100_hook("this.x", void 0 !== a ? a : 0, "assign");
    this.y = cc11001100_hook("this.y", void 0 !== b ? b : 0, "assign");
  }
  function vc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new I(a.x - b.x, a.y - b.y);
  }
  I.prototype.ceil = cc11001100_hook("I.prototype.ceil", function () {
    this.x = cc11001100_hook("this.x", Math.ceil(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.ceil(this.y), "assign");
    return this;
  }, "assign");
  I.prototype.floor = cc11001100_hook("I.prototype.floor", function () {
    this.x = cc11001100_hook("this.x", Math.floor(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.floor(this.y), "assign");
    return this;
  }, "assign");
  I.prototype.round = cc11001100_hook("I.prototype.round", function () {
    this.x = cc11001100_hook("this.x", Math.round(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.round(this.y), "assign");
    return this;
  }, "assign");
  function wc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.width = cc11001100_hook("this.width", a, "assign");
    this.height = cc11001100_hook("this.height", b, "assign");
  }
  p = cc11001100_hook("p", wc.prototype, "assign");
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
  function xc(a, b) {
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
    return a.replace(yc, function (e, f) {
      var g = cc11001100_hook("g", c[e], "var-init");
      if (g) return g;
      "#" == f.charAt(0) && (f = cc11001100_hook("f", Number("0" + f.slice(1)), "assign"), isNaN(f) || (g = cc11001100_hook("g", String.fromCharCode(f), "assign")));
      if (!g) {
        g = cc11001100_hook("g", e + " ", "assign");
        g = cc11001100_hook("g", (f = cc11001100_hook("f", hc(), "assign")) ? f.createHTML(g) : g, "assign");
        g = cc11001100_hook("g", new qc(g, oc), "assign");
        if (sc()) for (; d.lastChild;) d.removeChild(d.lastChild);
        d.innerHTML = cc11001100_hook("d.innerHTML", pc(g), "assign");
        g = cc11001100_hook("g", d.firstChild.nodeValue.slice(0, -1), "assign");
      }
      return c[e] = cc11001100_hook("c[e]", g, "assign");
    });
  }
  var yc = cc11001100_hook("yc", /&([^;\s<&]+);?/g, "var-init");
  function zc(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 0, "var-init");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; ++c) b = cc11001100_hook("b", 31 * b + a.charCodeAt(c) >>> 0, "assign");
    return b;
  }
  function Ac(a) {
    cc11001100_hook("a", a, "function-parameter");
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function Bc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  ;
  function Cc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? new Dc(Ec(a)) : la || (la = cc11001100_hook("la", new Dc(), "assign"));
  }
  function Fc(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.document, "assign");
    a = cc11001100_hook("a", Gc(a) ? a.documentElement : a.body, "assign");
    return new wc(a.clientWidth, a.clientHeight);
  }
  function Hc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.document, "var-init"),
      c = cc11001100_hook("c", 0, "var-init");
    if (b) {
      c = cc11001100_hook("c", b.body, "assign");
      var d = cc11001100_hook("d", b.documentElement, "var-init");
      if (!d || !c) return 0;
      a = cc11001100_hook("a", Fc(a).height, "assign");
      if (Gc(b) && d.scrollHeight) c = cc11001100_hook("c", d.scrollHeight != a ? d.scrollHeight : d.offsetHeight, "assign");else {
        b = cc11001100_hook("b", d.scrollHeight, "assign");
        var e = cc11001100_hook("e", d.offsetHeight, "var-init");
        d.clientHeight != e && (b = cc11001100_hook("b", c.scrollHeight, "assign"), e = cc11001100_hook("e", c.offsetHeight, "assign"));
        c = cc11001100_hook("c", b > a ? b > e ? b : e : b < e ? b : e, "assign");
      }
    }
    return c;
  }
  function Ic(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.parentWindow || a.defaultView : window;
  }
  function Jc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    function d(h) {
      cc11001100_hook("h", h, "function-parameter");
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = cc11001100_hook("e", 1, "var-init"); e < c.length; e++) {
      var f = cc11001100_hook("f", c[e], "var-init");
      if (!ba(f) || da(f) && 0 < f.nodeType) d(f);else {
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
        Ca(g ? Ha(f) : f, d);
      }
    }
  }
  function Kc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", String(b), "assign");
    "application/xhtml+xml" === a.contentType && (b = cc11001100_hook("b", b.toLowerCase(), "assign"));
    return a.createElement(b);
  }
  function Gc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "CSS1Compat" == a.compatMode;
  }
  function Lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }
  function Ec(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  function Mc(a, b, c, d) {
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
  function Dc(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.j = cc11001100_hook("this.j", a || u.document || document, "assign");
  }
  p = cc11001100_hook("p", Dc.prototype, "assign");
  p.getElementsByTagName = cc11001100_hook("p.getElementsByTagName", function (a, b) {
    return (b || this.j).getElementsByTagName(String(a));
  }, "assign");
  p.createElement = cc11001100_hook("p.createElement", function (a) {
    return Kc(this.j, a);
  }, "assign");
  p.createTextNode = cc11001100_hook("p.createTextNode", function (a) {
    return this.j.createTextNode(String(a));
  }, "assign");
  p.append = cc11001100_hook("p.append", function (a, b) {
    Jc(Ec(a), a, arguments);
  }, "assign");
  p.contains = cc11001100_hook("p.contains", Lc, "assign");
  function Nc() {
    return na && ua ? ua.mobile : !(na && ua ? !ua.mobile && (y("iPad") || y("Android") || y("Silk")) : y("iPad") || y("Android") && !y("Mobile") || y("Silk")) && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"));
  }
  ;
  var Oc = cc11001100_hook("Oc", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init"); /* 
                                                                                                                                                                                           SPDX-License-Identifier: Apache-2.0 
                                                                                                                                                                                           */
  class Pc {
    constructor(a) {
      this.hc = cc11001100_hook("this.hc", a, "assign");
    }
  }
  function Qc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new Pc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const Rc = cc11001100_hook("Rc", [Qc("data"), Qc("http"), Qc("https"), Qc("mailto"), Qc("ftp"), new Pc(a => /^[^:]*([/?#]|$)/.test(a))], "var-init");
  function Sc(a, b = Rc) {
    cc11001100_hook("a", a, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; ++c) {
      const d = cc11001100_hook("d", b[c], "var-init");
      if (d instanceof Pc && d.hc(a)) return new mc(a, lc);
    }
  }
  ;
  function Tc(a) {
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
  function Uc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Tc(a.top) ? a.top : null;
  }
  function Vc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Wc("SCRIPT", a), "var-init");
    c.src = cc11001100_hook("c.src", b instanceof jc && b.constructor === jc ? b.j : "type_error:TrustedResourceUrl", "assign");
    (b = cc11001100_hook("b", (b = cc11001100_hook("b", (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]"), "assign")) ? b.nonce || b.getAttribute("nonce") || "" : "", "assign")) && c.setAttribute("nonce", b);
    (a = cc11001100_hook("a", a.getElementsByTagName("script")[0], "assign")) && a.parentNode && a.parentNode.insertBefore(c, a);
  }
  function Xc(a, b) {
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
    bd = cc11001100_hook("bd", /^(-?[0-9.]{1,30})$/, "var-init");
  function cd(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!bd.test(a)) return null;
    a = cc11001100_hook("a", Number(a), "assign");
    return isNaN(a) ? null : a;
  }
  function J(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", ad.exec(a), "assign")) ? +a[1] : null;
  }
  var K = cc11001100_hook("K", (a, b) => {
      Zc(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    }, "var-init"),
    dd = cc11001100_hook("dd", (a, b) => {
      for (a = cc11001100_hook("a", [a], "assign"); a.length;) {
        var c = cc11001100_hook("c", a.shift(), "var-init");
        !1 !== b(c) && (c = cc11001100_hook("c", Da(c.children || c.childNodes || [], d => 1 === d.nodeType), "assign"), c.length && a.unshift(...c));
      }
    }, "var-init"),
    fd = cc11001100_hook("fd", (a, b) => {
      if ("length" in a.style) {
        a = cc11001100_hook("a", a.style, "assign");
        const c = cc11001100_hook("c", a.length, "var-init");
        for (let d = cc11001100_hook("d", 0, "var-init"); d < c; d++) {
          const e = cc11001100_hook("e", a[d], "var-init");
          b(a[e], e, a);
        }
      } else a = cc11001100_hook("a", ed(a.style.cssText), "assign"), Zc(a, b);
    }, "var-init"),
    ed = cc11001100_hook("ed", a => {
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
    gd = cc11001100_hook("gd", (a, b = () => !0) => {
      const c = cc11001100_hook("c", /!\s*important/i, "var-init");
      fd(a, (d, e) => {
        !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "");
      });
    }, "var-init");
  const hd = cc11001100_hook("hd", {
      ["http://googleads.g.doubleclick.net"]: cc11001100_hook("http://googleads.g.doubleclick.net", !0, "object-key-init"),
      ["http://pagead2.googlesyndication.com"]: cc11001100_hook("http://pagead2.googlesyndication.com", !0, "object-key-init"),
      ["https://googleads.g.doubleclick.net"]: cc11001100_hook("https://googleads.g.doubleclick.net", !0, "object-key-init"),
      ["https://pagead2.googlesyndication.com"]: cc11001100_hook("https://pagead2.googlesyndication.com", !0, "object-key-init")
    }, "var-init"),
    id = cc11001100_hook("id", /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/, "var-init"),
    jd = cc11001100_hook("jd", /.*domain\.test$/, "var-init"),
    kd = cc11001100_hook("kd", /\.prod\.google\.com(:\d+)?$/, "var-init");
  var ld = cc11001100_hook("ld", a => hd[a] || id.test(a) || jd.test(a) || kd.test(a), "var-init"),
    md = cc11001100_hook("md", a => {
      a.preventDefault ? a.preventDefault() : a.returnValue = cc11001100_hook("a.returnValue", !1, "assign");
    }, "var-init");
  function Wc(a, b = document) {
    cc11001100_hook("a", a, "function-parameter");
    return b.createElement(String(a).toLowerCase());
  }
  ;
  function nd(a) {
    cc11001100_hook("a", a, "function-parameter");
    u.google_image_requests || (u.google_image_requests = cc11001100_hook("u.google_image_requests", [], "assign"));
    const b = cc11001100_hook("b", Wc("IMG", u.document), "var-init");
    b.src = cc11001100_hook("b.src", a, "assign");
    u.google_image_requests.push(b);
  }
  ;
  function od(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    this.top = cc11001100_hook("this.top", a, "assign");
    this.right = cc11001100_hook("this.right", b, "assign");
    this.bottom = cc11001100_hook("this.bottom", c, "assign");
    this.left = cc11001100_hook("this.left", d, "assign");
  }
  p = cc11001100_hook("p", od.prototype, "assign");
  p.getWidth = cc11001100_hook("p.getWidth", function () {
    return this.right - this.left;
  }, "assign");
  p.getHeight = cc11001100_hook("p.getHeight", function () {
    return this.bottom - this.top;
  }, "assign");
  function pd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new od(a.top, a.right, a.bottom, a.left);
  }
  p.contains = cc11001100_hook("p.contains", function (a) {
    return this && a ? a instanceof od ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
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
  function qd(a, ...b) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 === b.length) return kc(a[0]);
    const c = cc11001100_hook("c", [a[0]], "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return kc(c.join(""));
  }
  ;
  function O(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if ("string" === typeof b) (b = cc11001100_hook("b", rd(a, b), "assign")) && (a.style[b] = cc11001100_hook("a.style[b]", c, "assign"));else for (var d in b) {
      c = cc11001100_hook("c", a, "assign");
      var e = cc11001100_hook("e", b[d], "var-init"),
        f = cc11001100_hook("f", rd(c, d), "var-init");
      f && (c.style[f] = cc11001100_hook("c.style[f]", e, "assign"));
    }
  }
  var sd = cc11001100_hook("sd", {}, "var-init");
  function rd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", sd[b], "var-init");
    if (!c) {
      var d = cc11001100_hook("d", Ac(b), "var-init");
      c = cc11001100_hook("c", d, "assign");
      void 0 === a.style[d] && (d = cc11001100_hook("d", (Qa ? "Webkit" : Oa ? "Moz" : Ma ? "ms" : null) + Bc(d), "assign"), void 0 !== a.style[d] && (c = cc11001100_hook("c", d, "assign")));
      sd[b] = cc11001100_hook("sd[b]", c, "assign");
    }
    return c;
  }
  function td(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Ec(a), "var-init");
    return c.defaultView && c.defaultView.getComputedStyle && (a = cc11001100_hook("a", c.defaultView.getComputedStyle(a, null), "assign")) ? a[b] || a.getPropertyValue(b) || "" : "";
  }
  function ud(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return td(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
  }
  function vd(a) {
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
  function wd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Ec(a), "var-init"),
      c = cc11001100_hook("c", new I(0, 0), "var-init");
    var d = cc11001100_hook("d", b ? Ec(b) : document, "var-init");
    d = cc11001100_hook("d", !Ma || 9 <= Number($a) || Gc(Cc(d).j) ? d.documentElement : d.body, "assign");
    if (a == d) return c;
    a = cc11001100_hook("a", vd(a), "assign");
    d = cc11001100_hook("d", Cc(b).j, "assign");
    b = cc11001100_hook("b", d.scrollingElement ? d.scrollingElement : !Qa && Gc(d) ? d.documentElement : d.body || d.documentElement, "assign");
    d = cc11001100_hook("d", d.parentWindow || d.defaultView, "assign");
    b = cc11001100_hook("b", Ma && d.pageYOffset != b.scrollTop ? new I(b.scrollLeft, b.scrollTop) : new I(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop), "assign");
    c.x = cc11001100_hook("c.x", a.left + b.x, "assign");
    c.y = cc11001100_hook("c.y", a.top + b.y, "assign");
    return c;
  }
  function xd(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (1 == a.nodeType) return a = cc11001100_hook("a", vd(a), "assign"), new I(a.left, a.top);
    a = cc11001100_hook("a", a.changedTouches ? a.changedTouches[0] : a, "assign");
    return new I(a.clientX, a.clientY);
  }
  function yd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b instanceof wc) {
      var c = cc11001100_hook("c", b.height, "var-init");
      b = cc11001100_hook("b", b.width, "assign");
    } else throw Error("missing height argument");
    a.style.width = cc11001100_hook("a.style.width", zd(b, !0), "assign");
    a.style.height = cc11001100_hook("a.style.height", zd(c, !0), "assign");
  }
  function zd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    "number" == typeof a && (a = cc11001100_hook("a", (b ? Math.round(a) : a) + "px", "assign"));
    return a;
  }
  function Ad(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Bd, "var-init");
    if ("none" != ud(a, "display")) return b(a);
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
  function Bd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.offsetWidth, "var-init"),
      c = cc11001100_hook("c", a.offsetHeight, "var-init"),
      d = cc11001100_hook("d", Qa && !b && !c, "var-init");
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = cc11001100_hook("a", vd(a), "assign"), new wc(a.right - a.left, a.bottom - a.top)) : new wc(b, c);
  }
  function Cd(a, b) {
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
  function Dd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Ma) {
      var c = cc11001100_hook("c", Cd(a, b + "Left"), "var-init"),
        d = cc11001100_hook("d", Cd(a, b + "Right"), "var-init"),
        e = cc11001100_hook("e", Cd(a, b + "Top"), "var-init");
      a = cc11001100_hook("a", Cd(a, b + "Bottom"), "assign");
      return new od(e, d, a, c);
    }
    c = cc11001100_hook("c", td(a, b + "Left"), "assign");
    d = cc11001100_hook("d", td(a, b + "Right"), "assign");
    e = cc11001100_hook("e", td(a, b + "Top"), "assign");
    a = cc11001100_hook("a", td(a, b + "Bottom"), "assign");
    return new od(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
  }
  ;
  var Ed = cc11001100_hook("Ed", a => "number" === typeof a && 0 < a, "var-init");
  class Fd {
    constructor(a, b) {
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", {}, "assign");
    }
  }
  ;
  const Gd = cc11001100_hook("Gd", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  var Hd = cc11001100_hook("Hd", class {
      constructor(a, b) {
        this.j = cc11001100_hook("this.j", a, "assign");
        this.l = cc11001100_hook("this.l", b, "assign");
      }
    }, "var-init"),
    Id = cc11001100_hook("Id", class {
      constructor(a, b) {
        this.url = cc11001100_hook("this.url", a, "assign");
        this.Mb = cc11001100_hook("this.Mb", !!b, "assign");
        this.depth = cc11001100_hook("this.depth", null, "assign");
      }
    }, "var-init");
  function Jd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function Kd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    const f = cc11001100_hook("f", [], "var-init");
    Zc(a, function (g, h) {
      (g = cc11001100_hook("g", Ld(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function Ld(a, b, c, d, e) {
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
        for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(Ld(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(Kd(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function Md(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 1, "var-init");
    for (const c in a.l) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.m.length - 1;
  }
  function Nd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
      d = cc11001100_hook("d", Md(a) - b.length, "var-init");
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
        let k = cc11001100_hook("k", Kd(h[l], a.m, ",$"), "var-init");
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
  class Od {
    constructor() {
      this.m = cc11001100_hook("this.m", "&", "assign");
      this.l = cc11001100_hook("this.l", {}, "assign");
      this.v = cc11001100_hook("this.v", 0, "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
    }
  }
  ;
  function Pd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 <= b && 1 >= b && (a.j = cc11001100_hook("a.j", b, "assign"));
  }
  function Qd(a, b, c, d = !1, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if ((d ? a.j : Math.random()) < (e || .01)) try {
      let f;
      c instanceof Od ? f = cc11001100_hook("f", c, "assign") : (f = cc11001100_hook("f", new Od(), "assign"), Zc(c, (h, l) => {
        var k = cc11001100_hook("k", f, "var-init");
        const m = cc11001100_hook("m", k.v++, "var-init");
        h = cc11001100_hook("h", Jd(l, h), "assign");
        k.j.push(m);
        k.l[m] = cc11001100_hook("k.l[m]", h, "assign");
      }));
      const g = cc11001100_hook("g", Nd(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && nd(g);
    } catch (f) {}
  }
  class Rd {
    constructor() {
      this.j = cc11001100_hook("this.j", Math.random(), "assign");
    }
  }
  ;
  let Sd = cc11001100_hook("Sd", null, "var-init");
  function Td() {
    const a = cc11001100_hook("a", u.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function Ud() {
    const a = cc11001100_hook("a", u.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class Vd {
    constructor(a, b) {
      var c = cc11001100_hook("c", Ud() || Td(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const Wd = cc11001100_hook("Wd", u.performance, "var-init"),
    Xd = cc11001100_hook("Xd", !!(Wd && Wd.mark && Wd.measure && Wd.clearMarks), "var-init"),
    Yd = cc11001100_hook("Yd", Zb(() => {
      var a;
      if (a = cc11001100_hook("a", Xd, "assign")) {
        var b;
        if (null === Sd) {
          Sd = cc11001100_hook("Sd", "", "assign");
          try {
            a = cc11001100_hook("a", "", "assign");
            try {
              a = cc11001100_hook("a", u.top.location.hash, "assign");
            } catch (c) {
              a = cc11001100_hook("a", u.location.hash, "assign");
            }
            a && (Sd = cc11001100_hook("Sd", (b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "assign")) ? b[1] : "", "assign"));
          } catch (c) {}
        }
        b = cc11001100_hook("b", Sd, "assign");
        a = cc11001100_hook("a", !!b.indexOf && 0 <= b.indexOf("1337"), "assign");
      }
      return a;
    }), "var-init");
  function Zd(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && Wd && Yd() && (Wd.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Wd.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function $d(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j = cc11001100_hook("a.j", !1, "assign");
    a.l != a.m.google_js_reporting_queue && (Yd() && Ca(a.l, Zd), a.l.length = cc11001100_hook("a.l.length", 0, "assign"));
  }
  class ae {
    constructor(a) {
      this.l = cc11001100_hook("this.l", [], "assign");
      this.m = cc11001100_hook("this.m", a || u, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.l = cc11001100_hook("this.l", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.j = cc11001100_hook("this.j", Yd() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.j) return null;
      a = cc11001100_hook("a", new Vd(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      Wd && Yd() && Wd.mark(b);
      return a;
    }
    end(a) {
      if (this.j && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Ud() || Td()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        Wd && Yd() && Wd.mark(b);
        !this.j || 2048 < this.l.length || this.l.push(a);
      }
    }
  }
  ;
  function be(a) {
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
  class ce {
    constructor(a, b = null) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
      this.B = cc11001100_hook("this.B", this.Pa, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.m = cc11001100_hook("this.m", !1, "assign");
    }
    Cb(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    v(a) {
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    xa(a, b, c) {
      let d, e;
      try {
        this.j && this.j.j ? (e = cc11001100_hook("e", this.j.start(a.toString(), 3), "assign"), d = cc11001100_hook("d", b(), "assign"), this.j.end(e)) : d = cc11001100_hook("d", b(), "assign");
      } catch (f) {
        b = cc11001100_hook("b", !0, "assign");
        try {
          Zd(e), b = cc11001100_hook("b", this.B(a, new Fd(f, {
            message: cc11001100_hook("message", be(f), "object-key-init")
          }), void 0, c), "assign");
        } catch (g) {
          this.Pa(217, g);
        }
        if (b) window.console?.error?.(f);else throw f;
      }
      return d;
    }
    P(a, b) {
      return (...c) => this.xa(a, () => b.apply(void 0, c));
    }
    Pa(a, b, c, d, e) {
      e = cc11001100_hook("e", e || "jserror", "assign");
      let f;
      try {
        const E = cc11001100_hook("E", new Od(), "var-init");
        var g = cc11001100_hook("g", E, "var-init");
        g.j.push(1);
        g.l[1] = cc11001100_hook("g.l[1]", Jd("context", a), "assign");
        b.error && b.meta && b.id || (b = cc11001100_hook("b", new Fd(b, {
          message: cc11001100_hook("message", be(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          g = cc11001100_hook("g", E, "assign");
          var h = cc11001100_hook("h", b.msg.substring(0, 512), "var-init");
          g.j.push(2);
          g.l[2] = cc11001100_hook("g.l[2]", Jd("msg", h), "assign");
        }
        var l = cc11001100_hook("l", b.meta || {}, "var-init");
        b = cc11001100_hook("b", l, "assign");
        if (this.l) try {
          this.l(b);
        } catch (Y) {}
        if (d) try {
          d(b);
        } catch (Y) {}
        d = cc11001100_hook("d", E, "assign");
        l = cc11001100_hook("l", [l], "assign");
        d.j.push(3);
        d.l[3] = cc11001100_hook("d.l[3]", l, "assign");
        d = cc11001100_hook("d", u, "assign");
        l = cc11001100_hook("l", [], "assign");
        b = cc11001100_hook("b", null, "assign");
        do {
          var k = cc11001100_hook("k", d, "var-init");
          if (Tc(k)) {
            var m = cc11001100_hook("m", k.location.href, "var-init");
            b = cc11001100_hook("b", k.document && k.document.referrer || null, "assign");
          } else m = cc11001100_hook("m", b, "assign"), b = cc11001100_hook("b", null, "assign");
          l.push(new Id(m || ""));
          try {
            d = cc11001100_hook("d", k.parent, "assign");
          } catch (Y) {
            d = cc11001100_hook("d", null, "assign");
          }
        } while (d && k != d);
        for (let Y = cc11001100_hook("Y", 0, "var-init"), ca = cc11001100_hook("ca", l.length - 1, "var-init"); Y <= ca; ++Y) l[Y].depth = cc11001100_hook("l[Y].depth", ca - Y, "assign");
        k = cc11001100_hook("k", u, "assign");
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1) for (m = cc11001100_hook("m", 1, "assign"); m < l.length; ++m) {
          var n = cc11001100_hook("n", l[m], "var-init");
          n.url || (n.url = cc11001100_hook("n.url", k.location.ancestorOrigins[m - 1] || "", "assign"), n.Mb = cc11001100_hook("n.Mb", !0, "assign"));
        }
        var q = cc11001100_hook("q", l, "var-init");
        let L = cc11001100_hook("L", new Id(u.location.href, !1), "var-init");
        k = cc11001100_hook("k", null, "assign");
        const M = cc11001100_hook("M", q.length - 1, "var-init");
        for (n = cc11001100_hook("n", M, "assign"); 0 <= n; --n) {
          var r = cc11001100_hook("r", q[n], "var-init");
          !k && Gd.test(r.url) && (k = cc11001100_hook("k", r, "assign"));
          if (r.url && !r.Mb) {
            L = cc11001100_hook("L", r, "assign");
            break;
          }
        }
        r = cc11001100_hook("r", null, "assign");
        const Va = cc11001100_hook("Va", q.length && q[M].url, "var-init");
        0 != L.depth && Va && (r = cc11001100_hook("r", q[M], "assign"));
        f = cc11001100_hook("f", new Hd(L, r), "assign");
        if (f.l) {
          q = cc11001100_hook("q", E, "assign");
          var t = cc11001100_hook("t", f.l.url || "", "var-init");
          q.j.push(4);
          q.l[4] = cc11001100_hook("q.l[4]", Jd("top", t), "assign");
        }
        var z = cc11001100_hook("z", {
          url: cc11001100_hook("url", f.j.url || "", "object-key-init")
        }, "var-init");
        if (f.j.url) {
          var F = cc11001100_hook("F", f.j.url.match(Oc), "var-init"),
            H = cc11001100_hook("H", F[1], "var-init"),
            N = cc11001100_hook("N", F[3], "var-init"),
            v = cc11001100_hook("v", F[4], "var-init");
          t = cc11001100_hook("t", "", "assign");
          H && (t += cc11001100_hook("t", H + ":", "assign"));
          N && (t += cc11001100_hook("t", "//", "assign"), t += cc11001100_hook("t", N, "assign"), v && (t += cc11001100_hook("t", ":" + v, "assign")));
          var A = cc11001100_hook("A", t, "var-init");
        } else A = cc11001100_hook("A", "", "assign");
        H = cc11001100_hook("H", E, "assign");
        z = cc11001100_hook("z", [z, {
          url: cc11001100_hook("url", A, "object-key-init")
        }], "assign");
        H.j.push(5);
        H.l[5] = cc11001100_hook("H.l[5]", z, "assign");
        Qd(this.A, e, E, this.m, c);
      } catch (E) {
        try {
          Qd(this.A, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", be(E), "object-key-init"),
            url: cc11001100_hook("url", f && f.j.url, "object-key-init")
          }, this.m, c);
        } catch (L) {}
      }
      return !0;
    }
  }
  ;
  var de = cc11001100_hook("de", a => "string" === typeof a, "var-init"),
    ee = cc11001100_hook("ee", a => void 0 === a, "var-init");
  function fe(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && "function" == typeof a.Ib && a.Ib();
  }
  ;
  function ge() {
    this.K = cc11001100_hook("this.K", this.K, "assign");
    this.L = cc11001100_hook("this.L", this.L, "assign");
  }
  ge.prototype.K = cc11001100_hook("ge.prototype.K", !1, "assign");
  ge.prototype.Ib = cc11001100_hook("ge.prototype.Ib", function () {
    this.K || (this.K = cc11001100_hook("this.K", !0, "assign"), this.za());
  }, "assign");
  function he(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    P(a, ja(fe, b));
  }
  function P(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.K ? b() : (a.L || (a.L = cc11001100_hook("a.L", [], "assign")), a.L.push(b));
  }
  ge.prototype.za = cc11001100_hook("ge.prototype.za", function () {
    if (this.L) for (; this.L.length;) this.L.shift()();
  }, "assign");
  var Q = cc11001100_hook("Q", a => {
    var b = cc11001100_hook("b", "zb", "var-init");
    if (a.zb && a.hasOwnProperty(b)) return a.zb;
    b = cc11001100_hook("b", new a(), "assign");
    return a.zb = cc11001100_hook("a.zb", b, "assign");
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
  const ne = cc11001100_hook("ne", new ae(window), "var-init");
  (a => {
    le = cc11001100_hook("le", a ?? new Rd(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    Pd(le, window.google_srt);
    me = cc11001100_hook("me", new ce(le, ne), "assign");
    me.Cb(() => {});
    me.v(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || $d(ne) : ne.j && D(window, "load", () => {
      window.google_measure_js_timing || $d(ne);
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
  const R = cc11001100_hook("R", class {
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
    yb() {
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
        this.K = cc11001100_hook("this.K", null != a.B ? a.B : !1, "assign");
        this.F = cc11001100_hook("this.F", a.K || null, "assign");
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
  function S(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = cc11001100_hook("a.google_reactive_ads_global_state.sideRailProcessedFixedElements", new Set(), "assign")), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = cc11001100_hook("a.google_reactive_ads_global_state.sideRailAvailableSpace", new Map(), "assign"))) : a.google_reactive_ads_global_state = cc11001100_hook("a.google_reactive_ads_global_state", new ue(), "assign");
    return a.google_reactive_ads_global_state;
  }
  class ue {
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
      this.floatingAdsStacking = cc11001100_hook("this.floatingAdsStacking", new ve(), "assign");
      this.sideRailProcessedFixedElements = cc11001100_hook("this.sideRailProcessedFixedElements", new Set(), "assign");
      this.sideRailAvailableSpace = cc11001100_hook("this.sideRailAvailableSpace", new Map(), "assign");
    }
  }
  var ve = cc11001100_hook("ve", class {
    constructor() {
      this.maxZIndexRestrictions = cc11001100_hook("this.maxZIndexRestrictions", {}, "assign");
      this.nextRestrictionId = cc11001100_hook("this.nextRestrictionId", 0, "assign");
      this.maxZIndexListeners = cc11001100_hook("this.maxZIndexListeners", [], "assign");
    }
  }, "var-init");
  var we = cc11001100_hook("we", 728 * 1.38, "var-init"),
    xe = cc11001100_hook("xe", a => a.innerHeight >= a.innerWidth, "var-init"),
    ye = cc11001100_hook("ye", a => {
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
    ze = cc11001100_hook("ze", (a, b) => {
      const c = cc11001100_hook("c", T(a), "var-init");
      return b ? c.scrollHeight == T(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight;
    }, "var-init"),
    Ae = cc11001100_hook("Ae", (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1, "var-init"),
    U = cc11001100_hook("U", a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset, "var-init"),
    Be = cc11001100_hook("Be", a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset, "var-init"),
    Ce = cc11001100_hook("Ce", a => {
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
    De = cc11001100_hook("De", a => {
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
        var d = cc11001100_hook("d", a.style[Ac(c)], "var-init");
        ("undefined" !== typeof d ? d : a.style[rd(a, c)]) || O(a, c, b[c]);
      });
      gd(a);
    }, "var-init");
  function Ee(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", T(a).clientWidth, "var-init");
    var d = cc11001100_hook("d", T(a).clientHeight, "var-init");
    if ("number" !== typeof c || "number" !== typeof d) throw Error("No VP width and/or height.");
    c = cc11001100_hook("c", new wc(c, d), "assign");
    d = cc11001100_hook("d", Be(a), "assign");
    a = cc11001100_hook("a", U(a), "assign");
    a = cc11001100_hook("a", Fe(a, c.width + d, c.height + a, d), "assign");
    return (te(b, a) ? new od(Math.max(b.top, a.top), Math.min(b.right, a.right), Math.min(b.bottom, a.bottom), Math.max(b.left, a.left)) : null) || Fe(0, 0, 0, 0);
  }
  function Ge(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Be(b), "var-init"),
      d = cc11001100_hook("d", U(b), "var-init");
    if (a.getBoundingClientRect) return a = cc11001100_hook("a", a.getBoundingClientRect(), "assign"), He(a) ? Fe(a.top + d, a.right + c, a.bottom + d, a.left + c) : Fe(0, 0, 0, 0);
    b = cc11001100_hook("b", b.document.createRange(), "assign");
    b.selectNodeContents(a);
    return b.collapsed ? Fe(0, 0, 0, 0) : b.getBoundingClientRect ? (a = cc11001100_hook("a", b.getBoundingClientRect(), "assign"), He(a) ? Fe(a.top + d, a.right + c, a.bottom + d, a.left + c) : Fe(0, 0, 0, 0)) : Fe(0, 0, 0, 0);
  }
  function He(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a && "number" === typeof a.top && !isNaN(a.top) && "number" === typeof a.right && !isNaN(a.right) && "number" === typeof a.bottom && !isNaN(a.bottom) && "number" === typeof a.left && !isNaN(a.left);
  }
  const Fe = cc11001100_hook("Fe", (a, b, c, d) => new od(Math.ceil(a), Math.floor(b), Math.floor(c), Math.ceil(d)), "var-init");
  function Ie(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Je(a).forEach(b, void 0);
  }
  function Je(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c; d++) b.push(a[d]);
    return b;
  }
  ;
  const Ke = cc11001100_hook("Ke", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new R(), "assign");
      if (a) for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.j.set(a, !0);
    }
    contains(a) {
      return oe(this.j, a);
    }
  }, "var-init");
  class Le {
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
  function Me(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new Le(a, b);
  }
  ;
  function Ne() {}
  Ne.prototype.next = cc11001100_hook("Ne.prototype.next", function () {
    return Oe;
  }, "assign");
  var Oe = cc11001100_hook("Oe", {
    done: cc11001100_hook("done", !0, "object-key-init"),
    value: cc11001100_hook("value", void 0, "object-key-init")
  }, "var-init");
  Ne.prototype.Aa = cc11001100_hook("Ne.prototype.Aa", function () {
    return this;
  }, "assign");
  function Pe(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof Ne) return a;
    if ("function" == typeof a.Aa) return a.Aa(!1);
    if (ba(a)) {
      let b = cc11001100_hook("b", 0, "var-init");
      const c = cc11001100_hook("c", new Ne(), "var-init");
      c.next = cc11001100_hook("c.next", function () {
        for (;;) {
          if (b >= a.length) return Oe;
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
  function Qe(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Pe(a), "assign");
    const {
      done: b,
      value: c
    } = cc11001100_hook("", a.next(), "var-init");
    return b ? null : c;
  }
  ;
  function Re(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof Se || a instanceof Te || a instanceof Ue) return a;
    if ("function" == typeof a.next) return new Se(() => a);
    if ("function" == typeof a[Symbol.iterator]) return new Se(() => a[Symbol.iterator]());
    if ("function" == typeof a.Aa) return new Se(() => a.Aa());
    throw Error("Not an iterator or iterable.");
  }
  class Se {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Aa() {
      return new Te(this.j());
    }
    [Symbol.iterator]() {
      return new Ue(this.j());
    }
    l() {
      return new Ue(this.j());
    }
  }
  class Te extends Ne {
    constructor(a) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    next() {
      return this.j.next();
    }
    [Symbol.iterator]() {
      return new Ue(this.j);
    }
    l() {
      return new Ue(this.j);
    }
  }
  class Ue extends Se {
    constructor(a) {
      super(() => a);
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    next() {
      return this.m.next();
    }
  }
  ;
  function Ve(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.l = cc11001100_hook("this.l", {}, "assign");
    this.j = cc11001100_hook("this.j", [], "assign");
    this.m = cc11001100_hook("this.m", this.size = cc11001100_hook("this.size", 0, "assign"), "assign");
    var c = cc11001100_hook("c", arguments.length, "var-init");
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = cc11001100_hook("d", 0, "var-init"); d < c; d += cc11001100_hook("d", 2, "assign")) this.set(arguments[d], arguments[d + 1]);
    } else if (a) if (a instanceof Ve) for (c = cc11001100_hook("c", We(a), "assign"), d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
  }
  p = cc11001100_hook("p", Ve.prototype, "assign");
  p.yb = cc11001100_hook("p.yb", function () {
    return this.size;
  }, "assign");
  function We(a) {
    cc11001100_hook("a", a, "function-parameter");
    Xe(a);
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
  function Xe(a) {
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
    for (var c = cc11001100_hook("c", We(this), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c.length; d++) {
      var e = cc11001100_hook("e", c[d], "var-init"),
        f = cc11001100_hook("f", this.get(e), "var-init");
      a.call(b, f, e, this);
    }
  }, "assign");
  p.keys = cc11001100_hook("p.keys", function () {
    return Re(this.Aa(!0)).l();
  }, "assign");
  p.values = cc11001100_hook("p.values", function () {
    return Re(this.Aa(!1)).l();
  }, "assign");
  p.entries = cc11001100_hook("p.entries", function () {
    const a = cc11001100_hook("a", this, "var-init");
    return Me(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  }, "assign");
  p.Aa = cc11001100_hook("p.Aa", function (a) {
    Xe(this);
    var b = cc11001100_hook("b", 0, "var-init"),
      c = cc11001100_hook("c", this.m, "var-init"),
      d = cc11001100_hook("d", this, "var-init"),
      e = cc11001100_hook("e", new Ne(), "var-init");
    e.next = cc11001100_hook("e.next", function () {
      if (c != d.m) throw Error("The map has changed since the iterator was created");
      if (b >= d.j.length) return Oe;
      var f = cc11001100_hook("f", d.j[b++], "var-init");
      return {
        value: cc11001100_hook("value", a ? f : d.l[f], "object-key-init"),
        done: cc11001100_hook("done", !1, "object-key-init")
      };
    }, "assign");
    return e;
  }, "assign");
  function Ye(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "transparent" == a || "rgba" == a.substring(0, 4) && (a = cc11001100_hook("a", a.split(","), "assign"), 4 == a.length && .5 > parseFloat(a[3])) ? !0 : !1;
  }
  function Ze() {
    Ca($e, a => {
      a.L = cc11001100_hook("a.L", null, "assign");
      a.C = cc11001100_hook("a.C", null, "assign");
    });
  }
  function af(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.D.ownerDocument) throw Error("Wrapped node should have an owner document.");
    return a.D.ownerDocument;
  }
  function bf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", af(a), "assign");
    return a.defaultView || a.parentWindow;
  }
  function cf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.m.j(a.m.l), "var-init");
    return b == a || b != a && Lc(b.D, a.D);
  }
  function df(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Je(a.D.childNodes).map(b => a.m.j(b)).filter(Yb(b => null === b));
  }
  function ef(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.j()) return null;
    const b = cc11001100_hook("b", df(a.j()), "var-init");
    a = cc11001100_hook("a", Ba(b, a), "assign");
    if (-1 == a) return null;
    for (a += cc11001100_hook("a", 1, "assign"); a < b.length; ++a) if (b[a].v() || b[a].H()) return b[a];
    return null;
  }
  function ff(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", ef(a), "var-init");
    return b ? b : a.j() ? ff(a.j()) : null;
  }
  function gf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b.push(a);
    a = cc11001100_hook("a", df(a), "assign");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < a.length; ++c) gf(a[c], b);
  }
  function hf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.l(), "var-init");
    if (0 != b.top || 0 != b.right || 0 != b.bottom || 0 != b.left) {
      var c = cc11001100_hook("c", Be(bf(a)), "var-init");
      a = cc11001100_hook("a", U(bf(a)), "assign");
      c = cc11001100_hook("c", -c, "assign");
      a = cc11001100_hook("a", -a, "assign");
      c instanceof I ? (b.left += cc11001100_hook("b.left", c.x, "assign"), b.right += cc11001100_hook("b.right", c.x, "assign"), b.top += cc11001100_hook("b.top", c.y, "assign"), b.bottom += cc11001100_hook("b.bottom", c.y, "assign")) : (b.left += cc11001100_hook("b.left", c, "assign"), b.right += cc11001100_hook("b.right", c, "assign"), "number" === typeof a && (b.top += cc11001100_hook("b.top", a, "assign"), b.bottom += cc11001100_hook("b.bottom", a, "assign")));
    }
    return b;
  }
  function V(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (1 != a.D.nodeType) return null;
    a.A = cc11001100_hook("a.A", a.A || bf(a).getComputedStyle(a.D), "assign");
    return a.A ? a.A[b] || a.A.getPropertyValue(b) || "" : "";
  }
  function jf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (void 0 !== a.F[b]) return a.F[b];
    a.F[b] = cc11001100_hook("a.F[b]", kf(a, b, c), "assign");
    return a.F[b];
  }
  function lf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (void 0 !== a.I) return a.I;
    var b = cc11001100_hook("b", V(a, "position"), "var-init");
    if ("fixed" == b || "sticky" == b) b = cc11001100_hook("b", a, "assign");else {
      var c = cc11001100_hook("c", a.j(), "var-init");
      b = cc11001100_hook("b", c && "BODY" != a.D.tagName ? (c = cc11001100_hook("c", lf(c), "assign")) || "absolute" != b && "relative" != b ? c : a : null, "assign");
    }
    a.I = cc11001100_hook("a.I", b, "assign");
    return a.I;
  }
  function mf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", lf(a), "var-init");
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
  function kf(a, b, c) {
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
        if (a.j()) return jf(a.j(), b, c);
        break;
      case "absolute":
      case "relative":
        if (e) return a;
        if (a.j()) return jf(a.j(), b, "absolute" == d);
        break;
      default:
        u.console.error("Unknown position value: " + d);
    }
    return null;
  }
  function nf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.D.scrollHeight, "var-init");
    const c = cc11001100_hook("c", a.D.clientHeight, "var-init"),
      d = cc11001100_hook("d", af(a).createElement("div"), "var-init");
    d.style.width = cc11001100_hook("d.style.width", "100%", "assign");
    d.style.height = cc11001100_hook("d.style.height", Math.max(b, c) + 100 + "px", "assign");
    d.style.clear = cc11001100_hook("d.style.clear", "both", "assign");
    a.D.appendChild(d);
    b = cc11001100_hook("b", a.D.scrollHeight > a.D.clientHeight && a.D.scrollHeight - b > a.D.clientHeight - c, "assign");
    a.D.removeChild(d);
    return b;
  }
  function of(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a.K ? a.K : "1" != V(a, "opacity") || a.j() && !of(a.j()) ? a.K = cc11001100_hook("a.K", !1, "assign") : a.K = cc11001100_hook("a.K", !0, "assign");
  }
  function pf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.l(), "assign");
    a = cc11001100_hook("a", new od(Math.max(a.top, 0), Math.max(a.right, 0), Math.max(a.bottom, 0), Math.max(a.left, 0)), "assign");
    return a.left < a.right && a.top < a.bottom;
  }
  function qf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a.B ? a.B : a.j() && qf(a.j()) || "0" == V(a, "opacity") || "none" == V(a, "display") || "hidden" == V(a, "visibility") || a.D.tagName && "input" == a.D.tagName.toLowerCase() && a.D.type && "hidden" == a.D.type ? a.B = cc11001100_hook("a.B", !0, "assign") : a.B = cc11001100_hook("a.B", !1, "assign");
  }
  function rf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b(a) ? !0 : a.j() ? rf(a.j(), b) : !1;
  }
  function sf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !rf(a, b => "hidden" == V(b, "overflow-y"));
  }
  function tf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", V(a, "position"), "assign");
    return "absolute" == a || "relative" == a;
  }
  function uf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.v() && (a = cc11001100_hook("a", parseInt(V(a, "z-index"), 10), "assign"), !isNaN(a)) ? a : 0;
  }
  function vf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return rf(a, c => !!c.D.tagName && c.D.tagName == b);
  }
  function wf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return rf(a, c => {
      c = cc11001100_hook("c", c.D, "assign");
      return !!c.id && !!c.id.match && !!c.id.match(b);
    });
  }
  function xf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return rf(a, c => {
      a: {
        c = cc11001100_hook("c", yf(c), "assign");
        for (let d = cc11001100_hook("d", 0, "var-init"); d < c.length; ++d) if (c[d].match(b)) {
          c = cc11001100_hook("c", !0, "assign");
          break a;
        }
        c = cc11001100_hook("c", !1, "assign");
      }
      return c;
    });
  }
  function yf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a.D.className, "assign")) && "function" === typeof a.split ? /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/) : [];
  }
  function zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "A" == a.D.tagName ? a.D.getAttribute("href") : (a = cc11001100_hook("a", a.j(), "assign")) ? zf(a) : null;
  }
  function Af(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (1 != a.D.nodeType) {
      var b = cc11001100_hook("b", a.j(), "var-init");
      return b ? Af(b) : 0;
    }
    const c = cc11001100_hook("c", af(a).createTextNode("A"), "var-init");
    a.D.appendChild(c);
    b = cc11001100_hook("b", a.m.j(c), "assign");
    if (!b) throw a.D.removeChild(c), Error("Unable to insert textnode");
    a = cc11001100_hook("a", b.l(), "assign");
    b.D.parentNode && b.D.parentNode.removeChild(b.D);
    return a.bottom - a.top;
  }
  function Bf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b || null == a.G) {
      if (b && !b(a)) return 0;
      let c = cc11001100_hook("c", 0, "var-init");
      if (a.H()) c = cc11001100_hook("c", a.D.textContent.trim().length, "assign");else {
        const d = cc11001100_hook("d", df(a), "var-init");
        for (let e = cc11001100_hook("e", 0, "var-init"); e < d.length; e++) c += cc11001100_hook("c", Bf(d[e], b), "assign");
      }
      b || (a.G = cc11001100_hook("a.G", c, "assign"));
      return c;
    }
    return a.G;
  }
  class Cf {
    constructor(a, b) {
      this.D = cc11001100_hook("this.D", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.B = cc11001100_hook("this.B", this.K = cc11001100_hook("this.K", this.J = cc11001100_hook("this.J", this.za = cc11001100_hook("this.za", null, "assign"), "assign"), "assign"), "assign");
      this.F = cc11001100_hook("this.F", {}, "assign");
      this.A = cc11001100_hook("this.A", this.C = cc11001100_hook("this.C", this.G = cc11001100_hook("this.G", null, "assign"), "assign"), "assign");
      new Ve();
    }
    j() {
      return this.D != this.m.l && this.D.parentNode ? this.m.j(this.D.parentNode) : null;
    }
    v() {
      return 1 == this.D.nodeType;
    }
    H() {
      return 3 == this.D.nodeType;
    }
    l() {
      if (!this.L) {
        this.C || (this.C = cc11001100_hook("this.C", Ge(this.D, bf(this)), "assign"));
        var a = cc11001100_hook("a", pd(this.C), "var-init");
        var b = cc11001100_hook("b", V(this, "position"), "var-init");
        if ("fixed" == b) a = cc11001100_hook("a", Ee(bf(this), a), "assign");else if (this.j()) {
          var c = cc11001100_hook("c", jf(this.j(), 0, "absolute" == b), "var-init");
          if (c) {
            var d = cc11001100_hook("d", c.l(), "var-init");
            c = cc11001100_hook("c", d.left, "assign");
            d = cc11001100_hook("d", d.right, "assign");
            a = cc11001100_hook("a", a.left >= d || a.right <= c ? null : Fe(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c)), "assign");
          }
          a && (b = cc11001100_hook("b", jf(this.j(), 1, "absolute" == b), "assign")) && (c = cc11001100_hook("c", b.l(), "assign"), b = cc11001100_hook("b", c.top, "assign"), c = cc11001100_hook("c", c.bottom, "assign"), a = cc11001100_hook("a", a.top >= c || a.bottom <= b ? null : Fe(Math.max(a.top, b), a.right, Math.min(a.bottom, c), a.left), "assign"));
          a = cc11001100_hook("a", a && lf(this) && "fixed" == V(lf(this), "position") ? Ee(bf(this), a) : a || new od(0, 0, 0, 0), "assign");
        }
        this.L = cc11001100_hook("this.L", a, "assign");
      }
      return pd(this.L);
    }
    Ja() {
      return !pf(this) || qf(this);
    }
    Ab() {
      var a = cc11001100_hook("a", V(this, "background-color"), "var-init");
      if (a = cc11001100_hook("a", a ? Ye(a) : !0, "assign")) a = cc11001100_hook("a", V(this, "background-image"), "assign"), a = cc11001100_hook("a", !(a && "none" != a), "assign");
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
  function Df(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(b), "var-init");
    var d = cc11001100_hook("d", a.v.get(c), "var-init");
    if ("boolean" === typeof d) return d;
    d = cc11001100_hook("d", a.A && 3 == b.nodeType ? !/\S/.test(b.data) : 1 != b.nodeType && 3 != b.nodeType && 9 != b.nodeType || b.tagName && ("SCRIPT" == b.tagName || "STYLE" == b.tagName) ? !0 : !1, "assign");
    !d && b.parentNode && b != a.l && (d = cc11001100_hook("d", Df(a, b.parentNode), "assign"));
    a.v.set(c, d);
    return d;
  }
  var Ef = cc11001100_hook("Ef", class {
      constructor(a, b) {
        this.l = cc11001100_hook("this.l", a, "assign");
        this.A = cc11001100_hook("this.A", b, "assign");
        this.v = cc11001100_hook("this.v", new R(), "assign");
        this.m = cc11001100_hook("this.m", new R(), "assign");
      }
      j(a) {
        const b = cc11001100_hook("b", w(a), "var-init"),
          c = cc11001100_hook("c", this.m.get(b), "var-init");
        if (c) return c;
        if (Df(this, a)) return null;
        a = cc11001100_hook("a", new Cf(a, this), "assign");
        this.m.set(b, a);
        return a;
      }
    }, "var-init"),
    $e = cc11001100_hook("$e", [], "var-init");
  class Ff {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
    j(a) {
      return Gf(this.m, a).contains(this.l);
    }
  }
  ;
  function Gf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(b), "var-init"),
      d = cc11001100_hook("d", a.l.get(c), "var-init");
    if (d) return d;
    b = cc11001100_hook("b", a.j(b), "assign");
    a.l.set(c, b);
    return b;
  }
  class Hf {
    constructor() {
      this.l = cc11001100_hook("this.l", new R(), "assign");
    }
  }
  ;
  function If(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", zf(b), "var-init");
    if (a.m.j(b) && null !== c) return c;
    b = cc11001100_hook("b", df(b), "assign");
    if (1 > b.length) return null;
    c = cc11001100_hook("c", If(a, b[0]), "assign");
    for (let d = cc11001100_hook("d", 1, "var-init"); d < b.length; ++d) if (If(a, b[d]) != c) return null;
    return c;
  }
  class Jf extends Hf {
    constructor(a) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j(a) {
      return new Ke(null !== If(this, a) ? [1] : []);
    }
  }
  ;
  class Kf extends Hf {
    constructor(a) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j(a) {
      a: if (3 == a.D.nodeType) var b = cc11001100_hook("b", this.m.j(a), "var-init");else {
        b = cc11001100_hook("b", !1, "assign");
        a = cc11001100_hook("a", df(a), "assign");
        for (let c of a) {
          if ((a = cc11001100_hook("a", V(c, "display"), "assign")) && "inline" != a) {
            b = cc11001100_hook("b", !1, "assign");
            break a;
          }
          Gf(this, c).contains(0) && (b = cc11001100_hook("b", !0, "assign"));
        }
      }
      return new Ke(b ? [0] : []);
    }
  }
  ;
  function Lf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Bf(b, c => !a.m.j(c));
  }
  class Mf extends Hf {
    constructor(a, b, c) {
      super();
      this.v = cc11001100_hook("this.v", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
    }
    j(a) {
      if (this.v.j(a) && !this.m.j(a) && !this.A.j(a) && 50 <= Lf(this, a)) {
        var b = cc11001100_hook("b", Af(a), "var-init");
        a = cc11001100_hook("a", a.l(), "assign");
        b = cc11001100_hook("b", a.bottom - a.top >= 2 * b || !1, "assign");
      } else b = cc11001100_hook("b", !1, "assign");
      return new Ke(b ? [3] : []);
    }
  }
  ;
  function Nf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.classList ? a.classList.contains("adsbygoogle") : Ga(a.classList ? a.classList : ("string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle");
  }
  ;
  function Of(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.m.j(b) ? rf(b, function (c) {
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
    }) || Pf(b) && 5 <= Bf(b) ? !0 : (b = cc11001100_hook("b", b.j(), "assign")) ? Gf(a, b).contains(2) : !1 : !1;
  }
  function Pf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", yf(a), "assign");
    for (let b of a) if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/)) return !0;
    return !1;
  }
  class Qf extends Hf {
    constructor(a) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
    }
    j(a) {
      return new Ke(Of(this, a) ? [2] : []);
    }
  }
  ;
  function Rf(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    Ca(a, c => {
      1 == c.D.nodeType && (Sf(c, ":before", b), Sf(c, ":after", b));
    });
    return b;
  }
  function Tf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", V(a, "content"), "assign");
    if (!a || "none" == a || /\(.*\)/.test(a)) return !1;
    /^['"].*['"]$/.test(a) && (a = cc11001100_hook("a", a.substring(1, a.length - 1), "assign"));
    return 0 < a.trim().length;
  }
  class Uf extends Cf {
    constructor(a, b) {
      super(a.D, a.m);
      this.M = cc11001100_hook("this.M", a, "assign");
      this.N = cc11001100_hook("this.N", b, "assign");
      this.A = cc11001100_hook("this.A", bf(a).getComputedStyle(a.D, this.N), "assign");
    }
    v() {
      return !1;
    }
    H() {
      return !1;
    }
    Ja() {
      if (!Tf(this) && this.Ab()) var a = cc11001100_hook("a", !0, "var-init");else if (!(a = cc11001100_hook("a", this.j().Ja() || qf(this) || !pf(this), "assign"))) {
        a = cc11001100_hook("a", Tf(this), "assign");
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
    Ab() {
      const a = cc11001100_hook("a", ud(this.j().D, "backgroundColor"), "var-init"),
        b = cc11001100_hook("b", V(this, "background-color"), "var-init");
      return null == b || b == a || Ye(b) || "fixed" != V(this, "position");
    }
    l() {
      switch (V(this, "position")) {
        case "absolute":
          var a = cc11001100_hook("a", this.j().l(), "var-init");
          const b = cc11001100_hook("b", a.top + parseInt(V(this, "top"), 10), "var-init");
          a = cc11001100_hook("a", a.left + parseInt(V(this, "left"), 10), "assign");
          let c = cc11001100_hook("c", parseInt(V(this, "width"), 10), "var-init"),
            d = cc11001100_hook("d", parseInt(V(this, "height"), 10), "var-init");
          return new od(b, a + c, b + d, a);
        case "fixed":
          return new od(0, parseInt(V(this, "width"), 10), parseInt(V(this, "height"), 10), 0);
        default:
          return this.j().l();
      }
    }
  }
  const Sf = cc11001100_hook("Sf", (a, b, c) => {
    if (":before" == b || ":after" == b) {
      var d = cc11001100_hook("d", new Uf(a, b), "var-init");
      if (!d.Ja()) switch (c.push(d), b) {
        case ":before":
          a.za = cc11001100_hook("a.za", d, "assign");
          break;
        case ":after":
          a.J = cc11001100_hook("a.J", d, "assign");
          break;
        default:
          throw Error("Unsupported pseudo type " + b);
      }
    }
  }, "var-init");
  const Vf = cc11001100_hook("Vf", new Ke("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" ")), "var-init");
  class Wf extends Hf {
    j(a) {
      var b = cc11001100_hook("b", a.D, "var-init"),
        c = cc11001100_hook("c", af(a), "var-init");
      if (3 == b.nodeType) {
        var d = cc11001100_hook("d", b.data, "var-init");
        c = cc11001100_hook("c", -1 != d.indexOf("&") ? xc(d, c) : d, "assign");
        c = cc11001100_hook("c", /\S/.test(c), "assign");
      } else c = cc11001100_hook("c", !1, "assign");
      (c = cc11001100_hook("c", c || (a instanceof Uf ? Tf(a) : !1), "assign")) || (c = cc11001100_hook("c", (b = cc11001100_hook("b", b.tagName, "assign")) && Vf.contains(b.toUpperCase()), "assign"));
      a = cc11001100_hook("a", c && !a.Ja(), "assign");
      return new Ke(a ? [6] : []);
    }
  }
  ;
  function Xf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.A || (a.A = cc11001100_hook("a.A", new Wf(), "assign"));
    return a.A;
  }
  function Yf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l || (a.l = cc11001100_hook("a.l", new Kf(new Ff(Xf(a), 6)), "assign"));
    return a.l;
  }
  function Zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m || (a.m = cc11001100_hook("a.m", new Qf(new Ff(Yf(a), 0)), "assign"));
    return a.m;
  }
  class $f {
    constructor() {
      this.v = cc11001100_hook("this.v", this.m = cc11001100_hook("this.m", this.j = cc11001100_hook("this.j", this.l = cc11001100_hook("this.l", this.A = cc11001100_hook("this.A", null, "assign"), "assign"), "assign"), "assign"), "assign");
    }
  }
  ;
  const ag = cc11001100_hook("ag", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new $f(), "assign");
    }
  }, "var-init");
  function bg(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", [], "var-init");
    for (const c of a.j) b.push(c);
    return b;
  }
  class cg {
    constructor() {
      this.j = cc11001100_hook("this.j", [], "assign");
      this.m = cc11001100_hook("this.m", new Ke(), "assign");
    }
    contains(a) {
      return this.m.contains(w(a));
    }
  }
  ;
  class dg {
    constructor(a, b, c) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
    }
    da() {
      return this.m;
    }
  }
  const fg = cc11001100_hook("fg", (a, b, c) => {
      b = cc11001100_hook("b", eg(a.za, b, c), "assign");
      const d = cc11001100_hook("d", new dg(a, 0, b++), "var-init");
      c.pa.push(d);
      for (var e of df(a)) b = cc11001100_hook("b", fg(e, b, c), "assign");
      e = cc11001100_hook("e", new dg(a, 1, b++), "assign");
      c.pa.push(e);
      c.map.set(w(a), {
        start: cc11001100_hook("start", d, "object-key-init"),
        end: cc11001100_hook("end", e, "object-key-init")
      });
      return b = cc11001100_hook("b", eg(a.J, b, c), "assign");
    }, "var-init"),
    eg = cc11001100_hook("eg", (a, b, c) => {
      if (!a) return b;
      const d = cc11001100_hook("d", new dg(a, 0, b++), "var-init"),
        e = cc11001100_hook("e", new dg(a, 1, b++), "var-init");
      c.pa.push(d);
      c.pa.push(e);
      c.map.set(w(a), {
        start: cc11001100_hook("start", d, "object-key-init"),
        end: cc11001100_hook("end", e, "object-key-init")
      });
      return b;
    }, "var-init");
  function gg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof Uf) return !0;
    if (!a.v()) return !1;
    const b = cc11001100_hook("b", a.D, "var-init"),
      c = cc11001100_hook("c", V(a, "position"), "var-init");
    if ("HTML" == b.tagName || "fixed" == c || "auto" != V(a, "z-index") && ("absolute" == c || "relative" == c)) return !0;
    a = cc11001100_hook("a", V(a, "opacity"), "assign");
    return "1" != a && "" != a ? !0 : !1;
  }
  function hg(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j.j(), "var-init");
    return b ? ig(a.l, b) : null;
  }
  class jg {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
    }
  }
  function kg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", ig(a.j, b), "var-init");
    a = cc11001100_hook("a", ig(a.j, c), "assign");
    d = cc11001100_hook("d", lg(d, a), "assign");
    if (!d) return 0;
    switch (d.sb) {
      case 0:
        return uf(b) - uf(d.ob.j);
      case 1:
        return uf(d.nb.j) - uf(c);
      case 2:
        return uf(d.nb.j) - uf(d.ob.j);
      default:
        throw Error("Unhandled adjacency.");
    }
  }
  var ng = cc11001100_hook("ng", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new mg(), "assign");
    }
  }, "var-init");
  function ig(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", w(b), "var-init");
    var d = cc11001100_hook("d", a.j.get(c), "var-init");
    if (d) return d;
    d = cc11001100_hook("d", b.j(), "assign");
    b = cc11001100_hook("b", !d || gg(b) ? new jg(b, a) : ig(a, d), "assign");
    a.j.set(c, b);
    return b;
  }
  var mg = cc11001100_hook("mg", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new R(), "assign");
    }
  }, "var-init");
  function lg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a == b) return null;
    const c = cc11001100_hook("c", new R(), "var-init");
    var d = cc11001100_hook("d", b, "var-init");
    let e;
    for (; e = cc11001100_hook("e", hg(d), "assign");) {
      if (a == e) return {
        nb: cc11001100_hook("nb", a, "object-key-init"),
        sb: cc11001100_hook("sb", 0, "object-key-init"),
        ob: cc11001100_hook("ob", d, "object-key-init")
      };
      c.set(w(e), d);
      d = cc11001100_hook("d", e, "assign");
    }
    for (; e = cc11001100_hook("e", hg(a), "assign");) {
      if (e == b) return {
        nb: cc11001100_hook("nb", a, "object-key-init"),
        sb: cc11001100_hook("sb", 1, "object-key-init"),
        ob: cc11001100_hook("ob", b, "object-key-init")
      };
      if (d = cc11001100_hook("d", c.get(w(e)), "assign")) return {
        nb: cc11001100_hook("nb", a, "object-key-init"),
        sb: cc11001100_hook("sb", 2, "object-key-init"),
        ob: cc11001100_hook("ob", d, "object-key-init")
      };
      a = cc11001100_hook("a", e, "assign");
    }
    throw Error("Contexts not in same DOM.");
  }
  ;
  function og(a, b, c, d = []) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", [].concat(a, d), "assign");
    b = cc11001100_hook("b", new pg(b, c), "assign");
    for (let e of a) e.Ab() || e.Ja() || (c = cc11001100_hook("c", b, "assign"), a = cc11001100_hook("a", e, "assign"), c.j.push(a), c.m.add(w(a)));
    return b;
  }
  class pg extends cg {
    constructor(a, b) {
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
    }
    v(a, b = !1) {
      const c = cc11001100_hook("c", a.l(), "var-init");
      b = cc11001100_hook("b", b ? bg(this) : this.j.slice(0), "assign");
      for (let f = cc11001100_hook("f", 0, "var-init"); f < b.length; ++f) {
        var d = cc11001100_hook("d", b[f], "var-init");
        if (!cf(d)) continue;
        var e = cc11001100_hook("e", d.l(), "var-init");
        if (!te(e, c)) continue;
        const g = cc11001100_hook("g", kg(this.A, d, a), "var-init");
        !(e = cc11001100_hook("e", 0 < g, "assign")) && (e = cc11001100_hook("e", 0 == g && !(d != a && Lc(d.D, a.D)), "assign")) && (e = cc11001100_hook("e", a, "assign"), tf(d) && !tf(e) ? e = cc11001100_hook("e", !0, "assign") : !tf(d) && tf(e) ? e = cc11001100_hook("e", !1, "assign") : (e = cc11001100_hook("e", this.l.map.get(w(e)), "assign"), d = cc11001100_hook("d", this.l.map.get(w(d)), "assign"), e = cc11001100_hook("e", e && d && e.end.da() < d.start.da() ? !0 : !1, "assign")));
        if (e) return !0;
      }
      return !1;
    }
  }
  ;
  class qg {
    constructor(a, b) {
      this.ic = cc11001100_hook("this.ic", a, "assign");
      this.nc = cc11001100_hook("this.nc", b, "assign");
    }
  }
  ;
  function rg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", 0, "var-init"),
      d = cc11001100_hook("d", null, "var-init");
    const e = cc11001100_hook("e", a.j.slice(0), "var-init");
    for (let f = cc11001100_hook("f", 0, "var-init"); f < e.length; ++f) {
      const g = cc11001100_hook("g", a.l.map.get(w(e[f])), "var-init");
      g.end.da() < b && g.end.da() > c && (d = cc11001100_hook("d", g, "assign"), c = cc11001100_hook("c", g.end.da(), "assign"));
    }
    return d;
  }
  class sg extends cg {
    constructor(a) {
      super();
      this.l = cc11001100_hook("this.l", a, "assign");
    }
  }
  ;
  const tg = cc11001100_hook("tg", class extends sg {
    constructor(a, b) {
      super(a);
      this.A = cc11001100_hook("this.A", b, "assign");
    }
    v(a, b = !1) {
      const c = cc11001100_hook("c", a.l(), "var-init"),
        d = cc11001100_hook("d", mf(a), "var-init");
      b = cc11001100_hook("b", b ? bg(this) : this.j.slice(0), "assign");
      for (let e = cc11001100_hook("e", 0, "var-init"); e < b.length; ++e) {
        const f = cc11001100_hook("f", b[e], "var-init");
        if (cf(f) && (d || !(0 < kg(this.A, a, f))) && te(b[e].l(), c)) return !0;
      }
      return !1;
    }
  }, "var-init");
  const ug = cc11001100_hook("ug", class {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      this.j = cc11001100_hook("this.j", c, "assign");
    }
  }, "var-init");
  const vg = cc11001100_hook("vg", class {
    constructor(a, b, c, d, e, f, g, h) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.R = cc11001100_hook("this.R", c, "assign");
      this.T = cc11001100_hook("this.T", d, "assign");
      this.v = cc11001100_hook("this.v", e, "assign");
      this.m = cc11001100_hook("this.m", f, "assign");
      this.j = cc11001100_hook("this.j", g, "assign");
      this.B = cc11001100_hook("this.B", h, "assign");
    }
  }, "var-init");
  const wg = cc11001100_hook("wg", class {
    constructor(a, b, c, d) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.v = cc11001100_hook("this.v", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
    }
  }, "var-init");
  class xg {
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
  const yg = cc11001100_hook("yg", class {
    constructor(a, b) {
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b || null, "assign");
    }
  }, "var-init");
  function zg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (0 != a.m) throw Error("Already resolved/rejected.");
  }
  var Cg = cc11001100_hook("Cg", class {
    constructor() {
      this.j = cc11001100_hook("this.j", new Ag(this), "assign");
      this.m = cc11001100_hook("this.m", 0, "assign");
    }
    resolve(a) {
      zg(this);
      this.m = cc11001100_hook("this.m", 1, "assign");
      this.A = cc11001100_hook("this.A", a, "assign");
      Bg(this.j);
    }
    l(a) {
      zg(this);
      this.m = cc11001100_hook("this.m", 2, "assign");
      this.v = cc11001100_hook("this.v", a, "assign");
      Bg(this.j);
    }
  }, "var-init");
  function Bg(a) {
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
  var Ag = cc11001100_hook("Ag", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    then(a, b) {
      if (this.l) throw Error("Then functions already set.");
      this.l = cc11001100_hook("this.l", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
      Bg(this);
    }
  }, "var-init");
  function Dg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", new Cg(), "var-init");
    a.j(new yg(function () {
      d.resolve(b());
    }, c));
    return d.j;
  }
  function Eg(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j(new yg(function () {
      b.resolve(c);
    }, d));
  }
  function Fg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.j(new yg(function () {
      b.l("n");
    }, "rrej"));
  }
  var Gg = cc11001100_hook("Gg", class {}, "var-init");
  class Hg {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }
  ;
  function Ig(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new Cg(), "var-init");
    a.j.j(new yg(function () {
      Jg(a, b, c);
    }, "idom"));
    return c.j;
  }
  function Kg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Dg(a.j, function () {
      return new ag();
    }, "icla");
  }
  function Lg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", new Cg(), "var-init");
    Mg(a, b, new Hg(c.j)).then(function (e) {
      Ng(a, b).then(function (f) {
        Og(a, b, e).then(function (g) {
          d.resolve(new ug(f, g, e));
        });
      });
    });
    return d.j;
  }
  function Pg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", new Cg(), "var-init");
    Ig(a, b).then(function (e) {
      Kg(a).then(function (f) {
        Lg(a, e, f).then(function (g) {
          Eg(a.j, d, new wg(e, g, f, c));
        }, x(d.l, d));
      }, x(d.l, d));
    }, x(d.l, d));
    return d.j;
  }
  function Jg(a, b, c) {
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
          var h = cc11001100_hook("h", new Ef(d, !0).j(d), "var-init");
          if (h) {
            var l = cc11001100_hook("l", new ng(), "var-init");
            Qg(a, h).then(function (k) {
              $e = cc11001100_hook("$e", k, "assign");
              Rg(a, h).then(function (m) {
                c.resolve(new vg(b, e, f, g, h, k, m, l));
              });
            });
          } else c.l("nt");
        }
      }
    } else c.l("b");
  }
  function Qg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Dg(a.j, function () {
      const c = cc11001100_hook("c", [], "var-init");
      gf(b, c);
      return c;
    }, "iflt");
  }
  function Rg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Dg(a.j, function () {
      const c = cc11001100_hook("c", {
        map: cc11001100_hook("map", new R(), "object-key-init"),
        pa: cc11001100_hook("pa", [], "object-key-init")
      }, "var-init");
      fg(b, 0, c);
      return c;
    }, "intm");
  }
  function Mg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Dg(a.j, function () {
      var d = cc11001100_hook("d", b.m, "var-init");
      const e = cc11001100_hook("e", new tg(b.j, b.B), "var-init"),
        f = cc11001100_hook("f", new Ff(Xf(c.j), 6), "var-init");
      for (let h of d) if (f.j(h)) {
        d = cc11001100_hook("d", e, "assign");
        var g = cc11001100_hook("g", h, "var-init");
        d.j.push(g);
        d.m.add(w(g));
      }
      return e;
    }, "ivis");
  }
  function Ng(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Dg(a.j, function () {
      var c = cc11001100_hook("c", Rf(b.m), "var-init");
      return og(b.m, b.j, b.B, c);
    }, "ibck");
  }
  function Og(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return Dg(a.j, function () {
      var d = cc11001100_hook("d", b.j, "var-init");
      const e = cc11001100_hook("e", new R(), "var-init");
      var f = cc11001100_hook("f", 0, "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"); g < d.pa.length; ++g) {
        var h = cc11001100_hook("h", d.pa[g], "var-init"),
          l = cc11001100_hook("l", h.j, "var-init"),
          k;
        if (k = cc11001100_hook("k", 1 == h.l, "assign")) k = cc11001100_hook("k", V(l, "float"), "assign"), k = cc11001100_hook("k", "left" == k || "right" == k, "assign");
        k && (l = cc11001100_hook("l", l.l().bottom, "assign"), l > f && (f = cc11001100_hook("f", l, "assign")));
        e.set(w(h), f);
      }
      f = cc11001100_hook("f", new R(), "assign");
      g = cc11001100_hook("g", Number.MAX_VALUE, "assign");
      for (h = cc11001100_hook("h", d.pa.length - 1, "assign"); 0 <= h; --h) l = cc11001100_hook("l", d.pa[h], "assign"), k = cc11001100_hook("k", l.j, "assign"), 0 == l.l && c.contains(k) && (k = cc11001100_hook("k", k.l().top, "assign"), k < g && (g = cc11001100_hook("g", k, "assign"))), f.set(w(l), g);
      d = cc11001100_hook("d", new R(), "assign");
      g = cc11001100_hook("g", qe(e), "assign");
      for (h = cc11001100_hook("h", 0, "assign"); h < g.length; ++h) {
        l = cc11001100_hook("l", e.get(g[h]), "assign");
        k = cc11001100_hook("k", f.get(g[h]), "assign");
        if ("number" !== typeof k) throw Error("No entry in minSubsequentTopBounds for terminal UID!");
        d.set(g[h], new qg(l, k));
      }
      return d;
    }, "irel");
  }
  var Sg = cc11001100_hook("Sg", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
  }, "var-init");
  function Tg(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    Ie(a.getElementsByTagName("p"), function (c) {
      100 <= Ug(c) && b.push(c);
    });
    return b;
  }
  function Ug(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = cc11001100_hook("b", 0, "var-init");
    Ie(a.childNodes, function (c) {
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
  const Xg = cc11001100_hook("Xg", class {
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
      a = cc11001100_hook("a", Wg(this, a), "assign");
      "number" === typeof this.l && (b = cc11001100_hook("b", this.l, "assign"), 0 > b && (b += cc11001100_hook("b", a.length, "assign")), a = cc11001100_hook("a", 0 <= b && b < a.length ? [a[b]] : [], "assign"));
      if ("number" === typeof this.m) {
        b = cc11001100_hook("b", [], "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
          var d = cc11001100_hook("d", Tg(a[c]), "var-init"),
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
  class Zg {
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
  function $g(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", [], "var-init");
    for (const e of a.j) b(e) ? d.push(e) : c(e);
    return new ah(d);
  }
  function bh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new ah(a.j.slice(0).sort(b));
  }
  function ch(a, b = 1) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.j.slice(0), "assign");
    const c = cc11001100_hook("c", new Zg(b), "var-init");
    Ja(a, () => c.next());
    return new ah(a);
  }
  const ah = cc11001100_hook("ah", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a.slice(0), "assign");
    }
    forEach(a) {
      this.j.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new ah(Da(this.j, a));
    }
    apply(a) {
      return new ah(a(this.j.slice(0)));
    }
    get(a) {
      return this.j[a];
    }
    add(a) {
      const b = cc11001100_hook("b", this.j.slice(0), "var-init");
      b.push(a);
      return new ah(b);
    }
  }, "var-init");
  var eh = cc11001100_hook("eh", class extends Rb {
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
      Tb: b,
      Oc: c,
      Yc: d,
      wc: e
    }) {
      this.A = cc11001100_hook("this.A", a, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
      this.v = cc11001100_hook("this.v", new ah(b || []), "assign");
      this.j = cc11001100_hook("this.j", e, "assign");
      this.m = cc11001100_hook("this.m", d, "assign");
    }
  }
  ;
  var gh = cc11001100_hook("gh", a => {
      var b = cc11001100_hook("b", a.split("~").filter(c => 0 < c.length), "var-init");
      a = cc11001100_hook("a", new R(), "assign");
      for (const c of b) b = cc11001100_hook("b", c.indexOf("."), "assign"), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
      return a;
    }, "var-init"),
    ih = cc11001100_hook("ih", a => {
      var b = cc11001100_hook("b", hh(a), "var-init");
      a = cc11001100_hook("a", [], "assign");
      for (let c of b) b = cc11001100_hook("b", String(c.Ta), "assign"), a.push(c.Ma + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
      return a.join("~");
    }, "var-init");
  const hh = cc11001100_hook("hh", a => {
      const b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", a.v, "var-init");
      c && c.j.length && b.push({
        Ma: cc11001100_hook("Ma", "a", "object-key-init"),
        Ta: cc11001100_hook("Ta", jh(c), "object-key-init")
      });
      null != a.l && b.push({
        Ma: cc11001100_hook("Ma", "as", "object-key-init"),
        Ta: cc11001100_hook("Ta", a.l, "object-key-init")
      });
      null != a.m && b.push({
        Ma: cc11001100_hook("Ma", "i", "object-key-init"),
        Ta: cc11001100_hook("Ta", String(a.m), "object-key-init")
      });
      null != a.j && b.push({
        Ma: cc11001100_hook("Ma", "rp", "object-key-init"),
        Ta: cc11001100_hook("Ta", String(a.j), "object-key-init")
      });
      b.sort(function (d, e) {
        return d.Ma.localeCompare(e.Ma);
      });
      b.unshift({
        Ma: cc11001100_hook("Ma", "t", "object-key-init"),
        Ta: cc11001100_hook("Ta", kh(a.A), "object-key-init")
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
      null != Eb(a, 2) && (b.o = cc11001100_hook("b.o", Eb(a, 2), "assign"));
      null != Eb(a, 5) && (b.p = cc11001100_hook("b.p", Eb(a, 5), "assign"));
      return b;
    }, "var-init");
  var mh = cc11001100_hook("mh", class extends Rb {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return ub(this, 1, a);
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
    rh = cc11001100_hook("rh", new nh(1243), "var-init"),
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
    return Q(vh).j(a.j, a.defaultValue);
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
    Yg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = cc11001100_hook("b.style.display", "block", "assign"));
  }
  function yh(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a && a.parentNode) {
      const b = cc11001100_hook("b", a.parentNode, "var-init");
      b.removeChild(a);
      Yg(b) && (b.style.display = cc11001100_hook("b.style.display", b.getAttribute("data-init-display") || "none", "assign"));
    }
  }
  ;
  var Ah = cc11001100_hook("Ah", (a, b, c) => {
    if (wh(ph)) {
      var d = cc11001100_hook("d", zh(b, c), "var-init");
      if (d.Ha) {
        for (c = cc11001100_hook("c", b = cc11001100_hook("b", d.Ha, "assign"), "assign"); c = cc11001100_hook("c", d.aa(c), "assign");) b = cc11001100_hook("b", c, "assign");
        d = cc11001100_hook("d", {
          anchor: cc11001100_hook("anchor", b, "object-key-init"),
          position: cc11001100_hook("position", d.ib, "object-key-init")
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
          Ha: cc11001100_hook("Ha", Ch(a.previousSibling, c), "object-key-init"),
          aa: cc11001100_hook("aa", e => Ch(e.previousSibling, c), "object-key-init"),
          ib: cc11001100_hook("ib", 0, "object-key-init")
        };
      case 2:
        return {
          Ha: cc11001100_hook("Ha", Ch(a.lastChild, c), "object-key-init"),
          aa: cc11001100_hook("aa", e => Ch(e.previousSibling, c), "object-key-init"),
          ib: cc11001100_hook("ib", 0, "object-key-init")
        };
      case 3:
        return {
          Ha: cc11001100_hook("Ha", Ch(a.nextSibling, d), "object-key-init"),
          aa: cc11001100_hook("aa", e => Ch(e.nextSibling, d), "object-key-init"),
          ib: cc11001100_hook("ib", 3, "object-key-init")
        };
      case 1:
        return {
          Ha: cc11001100_hook("Ha", Ch(a.firstChild, d), "object-key-init"),
          aa: cc11001100_hook("aa", e => Ch(e.nextSibling, d), "object-key-init"),
          ib: cc11001100_hook("ib", 3, "object-key-init")
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
        ea: cc11001100_hook("ea", [1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !1, "object-key-init"),
        la: cc11001100_hook("la", 2, "object-key-init"),
        ja: cc11001100_hook("ja", 4, "object-key-init")
      },
      HEADER: {
        ea: cc11001100_hook("ea", [0, 3, 1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !1, "object-key-init"),
        la: cc11001100_hook("la", 1, "object-key-init"),
        ja: cc11001100_hook("ja", 3, "object-key-init")
      },
      NAV: {
        ea: cc11001100_hook("ea", [0, 3], "object-key-init"),
        ka: cc11001100_hook("ka", !1, "object-key-init"),
        la: cc11001100_hook("la", 1, "object-key-init"),
        ja: cc11001100_hook("ja", 3, "object-key-init")
      },
      H1: {
        ea: cc11001100_hook("ea", [0], "object-key-init"),
        ka: cc11001100_hook("ka", !1, "object-key-init"),
        la: cc11001100_hook("la", 1, "object-key-init"),
        ja: cc11001100_hook("ja", 2, "object-key-init")
      },
      IMG: {
        ea: cc11001100_hook("ea", [0, 3], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      DIV: {
        ea: cc11001100_hook("ea", [0, 3, 1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      TABLE: {
        ea: cc11001100_hook("ea", [0, 3], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      TD: {
        ea: cc11001100_hook("ea", [1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      ASIDE: {
        ea: cc11001100_hook("ea", [0, 3, 1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      LI: {
        ea: cc11001100_hook("ea", [1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      },
      SECTION: {
        ea: cc11001100_hook("ea", [0, 3, 1, 2], "object-key-init"),
        ka: cc11001100_hook("ka", !0, "object-key-init"),
        la: cc11001100_hook("la", 0, "object-key-init"),
        ja: cc11001100_hook("ja", 1, "object-key-init")
      }
    }, "var-init"),
    Fh = cc11001100_hook("Fh", a => ({
      ea: cc11001100_hook("ea", a.ea.slice(0), "object-key-init"),
      ka: cc11001100_hook("ka", a.ka, "object-key-init"),
      la: cc11001100_hook("la", a.la, "object-key-init"),
      ja: cc11001100_hook("ja", a.ja, "object-key-init")
    }), "var-init"),
    Gh = cc11001100_hook("Gh", (a, b) => {
      const c = cc11001100_hook("c", Fh(a), "var-init");
      c.ea = cc11001100_hook("c.ea", Da(a.ea, d => b[d]), "assign");
      return c;
    }, "var-init");
  function Hh(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length - 1, "var-init"),
      c = cc11001100_hook("c", new Ne(), "var-init");
    c.next = cc11001100_hook("c.next", function () {
      return 0 > b ? Oe : {
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
      aa() {
        for (var a = cc11001100_hook("a", Qe(this.l), "var-init"); null !== a; a = cc11001100_hook("a", Qe(this.l), "assign")) {
          var b = cc11001100_hook("b", a.j, "var-init");
          if (1 != b.D.nodeType) b = cc11001100_hook("b", null, "assign");else {
            var c = cc11001100_hook("c", Eh[b.D.tagName], "var-init");
            c ? (a = cc11001100_hook("a", Gh(c, 0 == a.l ? Ih : 0 < df(a.j).length ? Jh : Kh), "assign"), b = cc11001100_hook("b", {
              node: cc11001100_hook("node", b, "object-key-init"),
              tb: cc11001100_hook("tb", a, "object-key-init"),
              identifier: {}
            }, "assign")) : b = cc11001100_hook("b", null, "assign");
          }
          if (b && (a = cc11001100_hook("a", b.node.l().getWidth(), "assign"), c = cc11001100_hook("c", this.m, "assign"), null == a || null == c ? 0 : a >= c * this.j.v && a <= c * this.j.l)) return a = cc11001100_hook("a", new Cg(), "assign"), a.resolve(b), a.j;
        }
        b = cc11001100_hook("b", new Cg(), "assign");
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
      const c = cc11001100_hook("c", Xc(a, b), "var-init");
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
      if (a !== a.top) return Uc(a) ? 3 : 16;
      if (!(488 > T(a).clientWidth)) return 4;
      if (!(a.innerHeight >= a.innerWidth)) return 5;
      const f = cc11001100_hook("f", T(a).clientWidth, "var-init");
      if (!f || (f - c) / f > d) a = cc11001100_hook("a", 6, "assign");else {
        if (c = cc11001100_hook("c", "true" != e.google_full_width_responsive, "assign")) a: {
          c = cc11001100_hook("c", b.parentElement, "assign");
          for (b = cc11001100_hook("b", T(a).clientWidth, "assign"); c; c = cc11001100_hook("c", c.parentElement, "assign")) if ((d = cc11001100_hook("d", Xc(c, a), "assign")) && (e = cc11001100_hook("e", J(d.width), "assign")) && !(e >= b) && "visible" != d.overflow) {
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
          c = cc11001100_hook("c", Xc(b, a), "assign");
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
    c = cc11001100_hook("c", (c = cc11001100_hook("c", b.parentElement, "assign")) ? (c = cc11001100_hook("c", Xc(c, a), "assign")) ? c.direction : "" : "", "assign");
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
      this.Ka = cc11001100_hook("this.Ka", a, "assign");
      this.m = cc11001100_hook("this.m", b, "assign");
    }
    height() {
      return this.m;
    }
    j(a) {
      return 300 < a && 300 < this.m ? this.Ka : Math.min(1200, Math.round(a));
    }
    l() {}
  }, "var-init");
  var Wh = cc11001100_hook("Wh", (a, b, c, d = e => e) => {
      let e;
      return a.style && a.style[c] && d(a.style[c]) || (e = cc11001100_hook("e", Xc(a, b), "assign")) && e[c] && d(e[c]) || null;
    }, "var-init"),
    Xh = cc11001100_hook("Xh", a => b => b.Ka <= a, "var-init"),
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
      var c = cc11001100_hook("c", Wh(b, a, "height", J), "var-init");
      if (c) return c;
      var d = cc11001100_hook("d", b.style.height, "var-init");
      b.style.height = cc11001100_hook("b.style.height", "inherit", "assign");
      c = cc11001100_hook("c", Wh(b, a, "height", J), "assign");
      b.style.height = cc11001100_hook("b.style.height", d, "assign");
      if (c) return c;
      c = cc11001100_hook("c", Infinity, "assign");
      do (d = cc11001100_hook("d", b.style && J(b.style.height), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")), (d = cc11001100_hook("d", Wh(b, a, "maxHeight", J), "assign")) && (c = cc11001100_hook("c", Math.min(c, d), "assign")); while ((b = cc11001100_hook("b", b.parentElement, "assign")) && "HTML" != b.tagName);
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
        e = cc11001100_hook("e", Ac(d.uc), "var-init");
      a[e] = cc11001100_hook("a[e]", d.value, "assign");
    }
  }
  function di(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", [], "var-init");
    if (c = cc11001100_hook("c", c && c.j(), "assign")) a.Ua.className = cc11001100_hook("a.Ua.className", c.join(" "), "assign");
    a = cc11001100_hook("a", a.Ca, "assign");
    a.className = cc11001100_hook("a.className", "adsbygoogle", "assign");
    a.setAttribute("data-ad-client", b);
    d.length && a.setAttribute("data-ad-channel", d.join("+"));
  }
  function ei(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.vb || !1, "var-init");
    const d = cc11001100_hook("d", new Dc(a).createElement("DIV"), "var-init"),
      e = cc11001100_hook("e", d.style, "var-init");
    e.width = cc11001100_hook("e.width", "100%", "assign");
    e.height = cc11001100_hook("e.height", "auto", "assign");
    e.clear = cc11001100_hook("e.clear", c ? "both" : "none", "assign");
    c = cc11001100_hook("c", d.style, "assign");
    c.textAlign = cc11001100_hook("c.textAlign", "center", "assign");
    b.hb && ci(c, b.hb);
    a = cc11001100_hook("a", new Dc(a).createElement("INS"), "assign");
    c = cc11001100_hook("c", a.style, "assign");
    c.display = cc11001100_hook("c.display", "block", "assign");
    c.margin = cc11001100_hook("c.margin", "auto", "assign");
    c.backgroundColor = cc11001100_hook("c.backgroundColor", "transparent", "assign");
    b.Db && (c.marginTop = cc11001100_hook("c.marginTop", b.Db, "assign"));
    b.ub && (c.marginBottom = cc11001100_hook("c.marginBottom", b.ub, "assign"));
    b.bb && ci(c, b.bb);
    d.appendChild(a);
    return {
      Ua: cc11001100_hook("Ua", d, "object-key-init"),
      Ca: cc11001100_hook("Ca", a, "object-key-init")
    };
  }
  ;
  function fi(a, b = !1) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.na) return a.na;
    if (b = cc11001100_hook("b", a.C(b), "assign")) Ze(), !a.j && b && (a.j = cc11001100_hook("a.j", b.l(), "assign"));
    return b;
  }
  function gi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.K.node || null;
  }
  function hi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", gi(a), "assign")) && a.v() ? Yg(a.D) : !1;
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
      this.K = cc11001100_hook("this.K", a.l, "assign");
      this.l = cc11001100_hook("this.l", a.v, "assign");
      this.j = cc11001100_hook("this.j", this.na = cc11001100_hook("this.na", null, "assign"), "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.L = cc11001100_hook("this.L", new Ke(qe(a.j.j)), "assign");
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
      this.j = cc11001100_hook("this.j", new Ke(), "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
    }
    build() {}
  }, "var-init");
  function li(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ia(a.m, b);
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
        for (var b = cc11001100_hook("b", 0, "var-init"); b < this.v.length; ++b) if (vf(a, this.v[b])) return [6];
        for (b = cc11001100_hook("b", 0, "assign"); b < this.l.length; ++b) if (wf(a, this.l[b])) return [6];
        for (b = cc11001100_hook("b", 0, "assign"); b < this.m.length; ++b) if (xf(a, this.m[b])) return [6];
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
    return b => !!(b.ab & a);
  }
  class W extends Vh {
    constructor(a, b, c, d = !1) {
      super(a, b);
      this.ab = cc11001100_hook("this.ab", c, "assign");
      this.ec = cc11001100_hook("this.ec", d, "assign");
    }
    pb() {
      return this.ab;
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
    a.sa && b++;
    a.ta && b++;
    if (3 > b) return {
      ya: cc11001100_hook("ya", "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.", "object-key-init")
    };
    b = cc11001100_hook("b", a.Ba.split(","), "assign");
    const c = cc11001100_hook("c", a.ta.split(","), "var-init");
    a = cc11001100_hook("a", a.sa.split(","), "assign");
    if (b.length !== c.length || b.length !== a.length) return {
      ya: cc11001100_hook("ya", 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"', "object-key-init")
    };
    if (2 < b.length) return {
      ya: cc11001100_hook("ya", "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`, "object-key-init")
    };
    const d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", [], "var-init");
    for (let g = cc11001100_hook("g", 0, "var-init"); g < b.length; g++) {
      var f = cc11001100_hook("f", Number(c[g]), "var-init");
      if (Number.isNaN(f) || 0 === f) return {
        ya: cc11001100_hook("ya", `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`, "object-key-init")
      };
      d.push(f);
      f = cc11001100_hook("f", Number(a[g]), "assign");
      if (Number.isNaN(f) || 0 === f) return {
        ya: cc11001100_hook("ya", `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`, "object-key-init")
      };
      e.push(f);
    }
    return {
      ta: cc11001100_hook("ta", d, "object-key-init"),
      sa: cc11001100_hook("sa", e, "object-key-init"),
      Ob: cc11001100_hook("Ob", b, "object-key-init")
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
    Zc(a.split("_"), c => {
      b += cc11001100_hook("b", c.substr(0, 2), "assign");
    });
    return b;
  }
  ;
  const Ai = cc11001100_hook("Ai", Ka("script"), "var-init");
  class Bi {
    constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, m = null, n = null) {
      this.C = cc11001100_hook("this.C", a, "assign");
      this.J = cc11001100_hook("this.J", b, "assign");
      this.ab = cc11001100_hook("this.ab", c, "assign");
      this.j = cc11001100_hook("this.j", d, "assign");
      this.I = cc11001100_hook("this.I", e, "assign");
      this.l = cc11001100_hook("this.l", f, "assign");
      this.m = cc11001100_hook("this.m", g, "assign");
      this.K = cc11001100_hook("this.K", h, "assign");
      this.L = cc11001100_hook("this.L", l, "assign");
      this.v = cc11001100_hook("this.v", k, "assign");
      this.A = cc11001100_hook("this.A", m, "assign");
      this.G = cc11001100_hook("this.G", n, "assign");
      this.H = cc11001100_hook("this.H", this.F = cc11001100_hook("this.F", this.B = cc11001100_hook("this.B", null, "assign"), "assign"), "assign");
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
        return Math.min(1200, Math.max(this.Ka, Math.round(a)));
      }
    }, "var-init"),
    Gi = cc11001100_hook("Gi", (a, b) => {
      Ei(a, b);
      if ("pedestal" == b.google_content_recommendation_ui_type) return new Bi(9, new Di(a, Math.floor(a * b.google_phwr)));
      var c = cc11001100_hook("c", Nc(), "var-init");
      468 > a ? c ? (c = cc11001100_hook("c", a - 8 - 8, "assign"), c = cc11001100_hook("c", Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * ti.mobile_banner_image_sidebyside + ui.mobile_banner_image_sidebyside) + 96), "assign"), a = cc11001100_hook("a", {
        Sa: cc11001100_hook("Sa", a, "object-key-init"),
        Ra: cc11001100_hook("Ra", c, "object-key-init"),
        sa: cc11001100_hook("sa", 1, "object-key-init"),
        ta: cc11001100_hook("ta", 12, "object-key-init"),
        Ba: cc11001100_hook("Ba", "mobile_banner_image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", xi(a), "assign"), a = cc11001100_hook("a", {
        Sa: cc11001100_hook("Sa", a.width, "object-key-init"),
        Ra: cc11001100_hook("Ra", a.height, "object-key-init"),
        sa: cc11001100_hook("sa", 1, "object-key-init"),
        ta: cc11001100_hook("ta", 13, "object-key-init"),
        Ba: cc11001100_hook("Ba", "image_sidebyside", "object-key-init")
      }, "assign")) : (a = cc11001100_hook("a", xi(a), "assign"), a = cc11001100_hook("a", {
        Sa: cc11001100_hook("Sa", a.width, "object-key-init"),
        Ra: cc11001100_hook("Ra", a.height, "object-key-init"),
        sa: cc11001100_hook("sa", 4, "object-key-init"),
        ta: cc11001100_hook("ta", 2, "object-key-init"),
        Ba: cc11001100_hook("Ba", "image_stacked", "object-key-init")
      }, "assign"));
      Fi(b, a);
      return new Bi(9, new Di(a.Sa, a.Ra));
    }, "var-init"),
    Hi = cc11001100_hook("Hi", (a, b) => {
      Ei(a, b);
      var c = cc11001100_hook("c", wi({
        ta: cc11001100_hook("ta", b.google_content_recommendation_rows_num, "object-key-init"),
        sa: cc11001100_hook("sa", b.google_content_recommendation_columns_num, "object-key-init"),
        Ba: cc11001100_hook("Ba", b.google_content_recommendation_ui_type, "object-key-init")
      }), "var-init");
      if (c.ya) a = cc11001100_hook("a", {
        Sa: cc11001100_hook("Sa", 0, "object-key-init"),
        Ra: cc11001100_hook("Ra", 0, "object-key-init"),
        sa: cc11001100_hook("sa", 0, "object-key-init"),
        ta: cc11001100_hook("ta", 0, "object-key-init"),
        Ba: cc11001100_hook("Ba", "image_stacked", "object-key-init"),
        ya: cc11001100_hook("ya", c.ya, "object-key-init")
      }, "assign");else {
        var d = cc11001100_hook("d", 2 === c.Ob.length && 468 <= a ? 1 : 0, "var-init");
        var e = cc11001100_hook("e", c.Ob[d], "var-init");
        e = cc11001100_hook("e", 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e, "assign");
        var f = cc11001100_hook("f", vi[e], "var-init");
        let g = cc11001100_hook("g", c.sa[d], "var-init");
        for (; a / g < f && 1 < g;) g--;
        f = cc11001100_hook("f", g, "assign");
        d = cc11001100_hook("d", c.ta[d], "assign");
        c = cc11001100_hook("c", Math.floor(((a - 8 * f - 8) / f * ti[e] + ui[e]) * d + 8 * d + 8), "assign");
        a = cc11001100_hook("a", 1500 < a ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          yc: cc11001100_hook("yc", "Calculated slot width is too large: " + a, "object-key-init")
        } : 1500 < c ? {
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          yc: cc11001100_hook("yc", "Calculated slot height is too large: " + c, "object-key-init")
        } : {
          width: cc11001100_hook("width", a, "object-key-init"),
          height: cc11001100_hook("height", c, "object-key-init")
        }, "assign");
        a = cc11001100_hook("a", {
          Sa: cc11001100_hook("Sa", a.width, "object-key-init"),
          Ra: cc11001100_hook("Ra", a.height, "object-key-init"),
          sa: cc11001100_hook("sa", f, "object-key-init"),
          ta: cc11001100_hook("ta", d, "object-key-init"),
          Ba: cc11001100_hook("Ba", e, "object-key-init")
        }, "assign");
      }
      if (a.ya) throw new Ci(a.ya);
      Fi(b, a);
      return new Bi(9, new Di(a.Sa, a.Ra));
    }, "var-init");
  function Ei(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) throw new Ci("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
  }
  function Fi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.google_content_recommendation_ui_type = cc11001100_hook("a.google_content_recommendation_ui_type", b.Ba, "assign");
    a.google_content_recommendation_columns_num = cc11001100_hook("a.google_content_recommendation_columns_num", b.sa, "assign");
    a.google_content_recommendation_rows_num = cc11001100_hook("a.google_content_recommendation_rows_num", b.ta, "assign");
  }
  ;
  class Ii extends Vh {
    j() {
      return this.Ka;
    }
    l(a, b, c) {
      Uh(a, c);
      b.google_ad_resize || (c.style.height = cc11001100_hook("c.style.height", this.height() + "px", "assign"), b.rpe = cc11001100_hook("b.rpe", !0, "assign"));
    }
  }
  ;
  const Ji = cc11001100_hook("Ji", {
    "image-top": cc11001100_hook("image-top", a => 600 >= a ? 284 + .414 * (a - 250) : 429, "object-key-init"),
    "image-middle": cc11001100_hook("image-middle", a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500), "object-key-init"),
    "image-side": cc11001100_hook("image-side", a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500), "object-key-init"),
    "text-only": cc11001100_hook("text-only", a => 500 >= a ? 187 - .228 * (a - 250) : 130, "object-key-init"),
    "in-article": cc11001100_hook("in-article", a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200, "object-key-init")
  }, "var-init");
  var Ki = cc11001100_hook("Ki", class extends Vh {
      j() {
        return Math.min(1200, this.Ka);
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
      d = cc11001100_hook("d", Ji[f], "assign");
      if (!d) throw new Ci("Invalid data-ad-layout value: " + f);
      c = cc11001100_hook("c", Yh(c, b), "assign");
      b = cc11001100_hook("b", T(b).clientWidth, "assign");
      b = cc11001100_hook("b", "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a)), "assign");
      return new Bi(11, "in-article" == f ? new Ki(a, b) : new Vh(a, b));
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
  const Ti = cc11001100_hook("Ti", new ae(u), "var-init");
  (a => {
    Ri = cc11001100_hook("Ri", a || new Rd(), "assign");
    "number" !== typeof u.google_srt && (u.google_srt = cc11001100_hook("u.google_srt", Math.random(), "assign"));
    Pd(Ri, u.google_srt);
    Si = cc11001100_hook("Si", new ce(Ri, Ti), "assign");
    Si.v(!0);
    "complete" == u.document.readyState ? u.google_measure_js_timing || $d(Ti) : Ti.j && D(u, "load", () => {
      u.google_measure_js_timing || $d(Ti);
    });
  })();
  var Ui = cc11001100_hook("Ui", (a, b, c) => Si.xa(a, b, c), "var-init"),
    Vi = cc11001100_hook("Vi", (a, b) => Si.P(a, b), "var-init"),
    Wi = cc11001100_hook("Wi", (a, b, c) => {
      const d = cc11001100_hook("d", Q(ke).j(), "var-init");
      !b.eid && d.length && (b.eid = cc11001100_hook("b.eid", d.toString(), "assign"));
      Qd(Ri, a, b, !0, c);
    }, "var-init");
  var Xi = cc11001100_hook("Xi", (a, b, c, d, e) => {
      "false" == e.google_full_width_responsive ? c = cc11001100_hook("c", {
        ha: cc11001100_hook("ha", a, "object-key-init"),
        ia: cc11001100_hook("ia", 1, "object-key-init")
      }, "assign") : "autorelaxed" == b && e.google_full_width_responsive || "auto" == b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (b = cc11001100_hook("b", Qh(c, d, a, .3, e), "assign"), !0 !== b ? e = cc11001100_hook("e", b, "assign") : "true" == e.google_full_width_responsive || Nh(d, c) ? (e = cc11001100_hook("e", T(c).clientWidth, "assign"), b = cc11001100_hook("b", e - a, "assign"), e = cc11001100_hook("e", e && 0 <= b ? !0 : e ? -10 > b ? 11 : 0 > b ? 14 : 12 : 10, "assign")) : e = cc11001100_hook("e", 9, "assign"), c = cc11001100_hook("c", !0 !== e ? {
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
    $i = cc11001100_hook("$i", (a, b, c, d, e) => {
      const {
        ha: f,
        ia: g
      } = cc11001100_hook("", Ui(247, () => Xi(a, b, c, d, e)), "var-init");
      var h = cc11001100_hook("h", !0 === g, "var-init");
      const l = cc11001100_hook("l", J(d.style.width), "var-init"),
        k = cc11001100_hook("k", J(d.style.height), "var-init"),
        {
          Na: m,
          Ia: n,
          pb: q,
          Nb: r
        } = cc11001100_hook("", Yi(f, b, c, d, e, h), "var-init");
      h = cc11001100_hook("h", Zi(b, q), "assign");
      var t;
      const z = cc11001100_hook("z", (t = cc11001100_hook("t", Wh(d, c, "marginLeft", J), "assign")) ? t + "px" : "", "var-init"),
        F = cc11001100_hook("F", (t = cc11001100_hook("t", Wh(d, c, "marginRight", J), "assign")) ? t + "px" : "", "var-init");
      t = cc11001100_hook("t", Wh(d, c, "zIndex") || "", "assign");
      return new Bi(h, m, q, null, r, g, n, z, F, k, l, t);
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
        Na: q,
        Ia: r
      } = cc11001100_hook("", Ui(248, () => {
        var t;
        a: if (f) {
          if (e.gfwrnh && (t = cc11001100_hook("t", J(e.gfwrnh), "assign"))) {
            t = cc11001100_hook("t", {
              Na: cc11001100_hook("Na", new Ii(a, t), "object-key-init"),
              Ia: cc11001100_hook("Ia", !0, "object-key-init")
            }, "assign");
            break a;
          }
          t = cc11001100_hook("t", a / 1.2, "assign");
          var z = cc11001100_hook("z", Math, "var-init");
          var F = cc11001100_hook("F", z.min, "var-init");
          if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var H = cc11001100_hook("H", Infinity, "var-init");else {
            H = cc11001100_hook("H", d, "assign");
            let v = cc11001100_hook("v", Infinity, "var-init");
            do {
              var N = cc11001100_hook("N", Wh(H, c, "height", J), "var-init");
              N && (v = cc11001100_hook("v", Math.min(v, N), "assign"));
              (N = cc11001100_hook("N", Wh(H, c, "maxHeight", J), "assign")) && (v = cc11001100_hook("v", Math.min(v, N), "assign"));
            } while ((H = cc11001100_hook("H", H.parentElement, "assign")) && "HTML" != H.tagName);
            H = cc11001100_hook("H", v, "assign");
          }
          z = cc11001100_hook("z", F.call(z, t, H), "assign");
          if (z < .5 * t || 100 > z) z = cc11001100_hook("z", t, "assign");
          t = cc11001100_hook("t", {
            Na: cc11001100_hook("Na", new Ii(a, Math.floor(z)), "object-key-init"),
            Ia: cc11001100_hook("Ia", z < t ? 102 : !0, "object-key-init")
          }, "assign");
        } else t = cc11001100_hook("t", {
          Na: cc11001100_hook("Na", n, "object-key-init"),
          Ia: cc11001100_hook("Ia", 100, "object-key-init")
        }, "assign");
        return t;
      }), "var-init");
      return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
        Na: cc11001100_hook("Na", aj(a, c, d, q, e), "object-key-init"),
        Ia: cc11001100_hook("Ia", !1, "object-key-init"),
        pb: cc11001100_hook("pb", b, "object-key-init"),
        Nb: cc11001100_hook("Nb", g, "object-key-init")
      } : {
        Na: cc11001100_hook("Na", q, "object-key-init"),
        Ia: cc11001100_hook("Ia", r, "object-key-init"),
        pb: cc11001100_hook("pb", b, "object-key-init"),
        Nb: cc11001100_hook("Nb", g, "object-key-init")
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
      const f = cc11001100_hook("f", e.google_ad_height || Wh(c, b, "height", J), "var-init");
      b = cc11001100_hook("b", Ni(a, b, c, f, e).size(), "assign");
      return b.Ka * b.height() > a * d.height() ? new W(b.Ka, b.height(), 1) : d;
    }, "var-init");
  var bj = cc11001100_hook("bj", (a, b, c, d, e) => {
    var f;
    (f = cc11001100_hook("f", T(b).clientWidth, "assign")) ? 488 > T(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = cc11001100_hook("e.google_full_width_responsive_allowed", !0, "assign"), Uh(b, c), f = cc11001100_hook("f", {
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
    if (!0 !== h || a == g) return new Bi(12, new Vh(a, d), null, null, !0, h, 100);
    const {
      Na: l,
      Ia: k,
      pb: m
    } = cc11001100_hook("", Yi(g, "auto", b, c, e, !0), "var-init");
    return new Bi(1, l, m, 2, !0, h, k);
  }, "var-init");
  const cj = cc11001100_hook("cj", (a, b, c, d, e) => {
    const f = cc11001100_hook("f", d.google_ad_height || Wh(c, e, "height", J), "var-init");
    switch (a) {
      case 5:
        const {
          ha: g,
          ia: h
        } = cc11001100_hook("", Ui(247, () => Xi(b, d.google_ad_format, e, c, d)), "var-init");
        !0 === h && b != g && Uh(e, c);
        !0 === h ? d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !0, "assign") : (d.google_full_width_responsive_allowed = cc11001100_hook("d.google_full_width_responsive_allowed", !1, "assign"), d.gfwrnwer = cc11001100_hook("d.gfwrnwer", h, "assign"));
        return Gi(g, d);
      case 9:
        return Hi(b, d);
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
        d = cc11001100_hook("d", af(b), "var-init"),
        e = cc11001100_hook("e", ei(d, {
          Db: cc11001100_hook("Db", "10px", "object-key-init"),
          ub: cc11001100_hook("ub", "10px", "object-key-init"),
          vb: cc11001100_hook("vb", this.v, "object-key-init")
        }), "var-init");
      e.Ua.className = cc11001100_hook("e.Ua.className", "google-auto-placed", "assign");
      const f = cc11001100_hook("f", e.Ca, "var-init");
      var g = cc11001100_hook("g", f.style, "var-init");
      g.display = cc11001100_hook("g.display", "inline-block", "assign");
      g.boxSizing = cc11001100_hook("g.boxSizing", "border-box", "assign");
      g.width = cc11001100_hook("g.width", "100%", "assign");
      g.height = cc11001100_hook("g.height", a ? "auto" : "100px", "assign");
      g.backgroundColor = cc11001100_hook("g.backgroundColor", "#f60", "assign");
      g.border = cc11001100_hook("g.border", "#000 solid 1px", "assign");
      c && (g = cc11001100_hook("g", d.createElement("span"), "assign"), g.style.fontSize = cc11001100_hook("g.style.fontSize", "small", "assign"), g.appendChild(d.createTextNode(c)), f.appendChild(g));
      c = cc11001100_hook("c", e.Ua, "assign");
      e = cc11001100_hook("e", e.Ca, "assign");
      Ah(c, b.D, Dh[this.l]);
      if (a) try {
        this.F(e, Ic());
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
        e = cc11001100_hook("e", a.offsetWidth || (c.google_ad_resize || !1) && Wh(a, b, "width", J) || c.google_ad_width || 0, "var-init");
      4 === d && (c.google_ad_format = cc11001100_hook("c.google_ad_format", "auto", "assign"), d = cc11001100_hook("d", 1, "assign"));
      var f = cc11001100_hook("f", (f = cc11001100_hook("f", cj(d, e, a, c, b), "assign")) ? f : $i(e, c.google_ad_format, b, a, c), "var-init");
      f.size().l(b, c, a);
      null != f.ab && (c.google_responsive_formats = cc11001100_hook("c.google_responsive_formats", f.ab, "assign"));
      null != f.I && (c.google_safe_for_responsive_override = cc11001100_hook("c.google_safe_for_responsive_override", f.I, "assign"));
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
      null != f.K && (c.gfwroml = cc11001100_hook("c.gfwroml", f.K, "assign"));
      null != f.L && (c.gfwromr = cc11001100_hook("c.gfwromr", f.L, "assign"));
      null != f.v && (c.gfwroh = cc11001100_hook("c.gfwroh", f.v, "assign"));
      null != f.A && (c.gfwrow = cc11001100_hook("c.gfwrow", f.A, "assign"));
      null != f.G && (c.gfwroz = cc11001100_hook("c.gfwroz", f.G, "assign"));
      null != f.B && (c.gml = cc11001100_hook("c.gml", f.B, "assign"));
      null != f.F && (c.gmr = cc11001100_hook("c.gmr", f.F, "assign"));
      null != f.H && (c.gzi = cc11001100_hook("c.gzi", f.H, "assign"));
      e = cc11001100_hook("e", Uc(window) || window, "assign");
      yi(e.location, "google_responsive_dummy_ad") && (Ga([1, 2, 3, 4, 5, 6, 7, 8], f.C) || 1 === f.j) && 2 !== f.j && (e = cc11001100_hook("e", JSON.stringify({
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
        Ze();
      }
    }
  }
  var ej = cc11001100_hook("ej", class extends ki {
    build() {
      return new dj(this);
    }
  }, "var-init");
  new Ke(["comments"]);
  new Ke(["allcomments"]);
  new Ke(["post-container", "post", "type-post"]);
  var gj = cc11001100_hook("gj", (a, b, c) => {
      const d = cc11001100_hook("d", [], "var-init");
      a.map(e => fj(e, b, c)).forEach(e => Ia(d, e));
      return d;
    }, "var-init"),
    fj = cc11001100_hook("fj", (a, b, c) => {
      const d = cc11001100_hook("d", a.tb.ea, "var-init"),
        e = cc11001100_hook("e", a.node, "var-init");
      if (!e) return [];
      const f = cc11001100_hook("f", [], "var-init");
      e.j() && Ga(d, 0) && f.push(0);
      Ga(d, 1) && f.push(1);
      Ga(d, 2) && (!Ga(d, 1) || 0 < df(e).length) && f.push(2);
      e.j() && Ga(d, 3) && f.push(3);
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
          return a.start.da();
        case 1:
          return a.start.da() + 1;
        case 2:
          return a.end.da();
        case 3:
          return a.end.da() + 1;
      }
      return -1;
    }, "var-init"),
    ij = cc11001100_hook("ij", (a, b) => {
      a = cc11001100_hook("a", gi(b) ? a.map.get(w(gi(b))) : void 0, "assign");
      if (!a) return -1;
      switch (b.l) {
        case 0:
          return a.start.da() - .1;
        case 3:
          return a.end.da() + .1;
        case 1:
          return a.start.da() + .1;
        case 2:
          return a.end.da() - .1;
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
    return Dg(a.v, () => {
      const c = cc11001100_hook("c", [], "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < a.l.length; ++d) {
        const e = cc11001100_hook("e", a.l[d].j(b), "var-init");
        Ia(c, e);
        if (0 < e.length) break;
      }
      return c;
    }, "flap");
  }
  function mj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Dg(a.v, () => {
      if (0 == a.j.length) var c = cc11001100_hook("c", [], "var-init");else {
        var d = cc11001100_hook("d", Math.floor(ij(a.A, b)), "var-init");
        if ((d = cc11001100_hook("d", -1 != d ? d + b.B() + "|" + b.v + "|10px|10px" : null, "assign")) && oe(a.m, d)) c = cc11001100_hook("c", a.m.get(d), "assign");else {
          var e = cc11001100_hook("e", [], "var-init"),
            f = cc11001100_hook("f", fi(b), "var-init");
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
  function nj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", new Cg(), "var-init");
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
      this.m = cc11001100_hook("this.m", new R(), "assign");
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
      const b = cc11001100_hook("b", ze(this.l, !0), "var-init");
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
        if (!b.j.Ja()) {
          if ((0 == b.l ? hf(b.j).top : hf(b.j).bottom) <= this.m) break;
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
      this.l = cc11001100_hook("this.l", new R(), "assign");
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
      e = cc11001100_hook("e", !e && a.D.scrollHeight > a.D.clientHeight && sf(a), "assign");
      c = cc11001100_hook("c", a.j(), "assign");
      c = cc11001100_hook("c", !c || this.j(c), "assign");
      a = cc11001100_hook("a", e && c ? !0 : e ? nf(a) : c && !nf(a), "assign");
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
      return (a = cc11001100_hook("a", gi(a), "assign")) && mf(a, this.l) ? [11] : [];
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
      var c = cc11001100_hook("c", Ha(b.document.querySelectorAll(".google-auto-placed")), "var-init");
      const d = cc11001100_hook("d", Ha(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")), "var-init"),
        e = cc11001100_hook("e", Ha(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")), "var-init");
      var f;
      (f = cc11001100_hook("f", yj(b), "assign")) || (f = cc11001100_hook("f", Ha(b.document.querySelectorAll("div[id^=div-gpt-ad]")), "assign"));
      f = cc11001100_hook("f", f.concat(Ha(b.document.querySelectorAll("iframe[id^=google_ads_iframe]"))), "assign");
      const g = cc11001100_hook("g", Ha(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")), "var-init"),
        h = cc11001100_hook("h", Ha(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), "var-init"),
        l = cc11001100_hook("l", Ha(b.document.querySelectorAll("div.googlepublisherpluginad")), "var-init"),
        k = cc11001100_hook("k", Ha(b.document.querySelectorAll("html > ins.adsbygoogle")), "var-init");
      let m = cc11001100_hook("m", [].concat(Ha(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ha(b.document.querySelectorAll("body ins.adsbygoogle"))), "var-init");
      b = cc11001100_hook("b", [], "assign");
      for (const [n, q] of [[a.Sc, c], [a.Kb, d], [a.Vc, e], [a.Tc, f], [a.Wc, g], [a.Rc, h], [a.Uc, l], [a.Xc, k]]) a = cc11001100_hook("a", q, "assign"), !1 === n ? b = cc11001100_hook("b", b.concat(a), "assign") : m = cc11001100_hook("m", m.concat(a), "assign");
      a = cc11001100_hook("a", zj(m), "assign");
      c = cc11001100_hook("c", zj(b), "assign");
      a = cc11001100_hook("a", a.slice(0), "assign");
      for (const n of c) for (c = cc11001100_hook("c", 0, "assign"); c < a.length; c++) (n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
      return a;
    }, "var-init"),
    Cj = cc11001100_hook("Cj", a => {
      const b = cc11001100_hook("b", yj(Ic(Ec(a))) || [], "var-init");
      return !!Mc(a, c => {
        if (!da(c) || 1 != c.nodeType) return !1;
        const d = cc11001100_hook("d", c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector, "var-init");
        return !d || Ga(b, c) || Fa($c(Bj), e => d.call(c, e));
      }, !1, 20);
    }, "var-init");
  const yj = cc11001100_hook("yj", a => {
      const b = cc11001100_hook("b", xj(a), "var-init");
      return b ? Da(Ea(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null;
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
  var Dj = cc11001100_hook("Dj", Si.P(453, Aj), "var-init");
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
        Kb: cc11001100_hook("Kb", !1, "object-key-init")
      }, a), "var-init"),
      c = cc11001100_hook("c", Be(a), "var-init"),
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
    }).filter(Yb(e => null === e));
  }
  function Gj(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ea(a, () => new wj());
  }
  ;
  class Jj {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", Dj({}, c).map(x(a.j, a)).filter(Yb(d => null === d)), "assign");
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
      var b = cc11001100_hook("b", rg(this.l, a), "var-init");
      if (!b) return [];
      const c = cc11001100_hook("c", this.m.j(b.start.j), "var-init");
      b = cc11001100_hook("b", b.end.da(), "assign");
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
      const b = cc11001100_hook("b", yf(a), "var-init"),
        c = cc11001100_hook("c", af(a), "var-init");
      for (const d of b) if (1 == c.getElementsByClassName(d).length) return [];
      return 150 >= a.l().getHeight() ? [13] : [];
    }
  }
  ;
  class Nj {
    j(a) {
      return a && !a.Ja() && of(a) ? [] : [3];
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
    aa() {
      const a = cc11001100_hook("a", new Cg(), "var-init");
      this.l.j(new yg(x(this.m, this, a), "p"));
      return a.j;
    }
    m(a) {
      Oj(this, a) || this.A.aa().then(x(this.B, this, a), x(a.l, a));
    }
    B(a, b) {
      b = cc11001100_hook("b", gj([b], this.C, this.v), "assign");
      Ia(this.j, b);
      Oj(this, a) || this.l.j(new yg(x(this.m, this, a), "p"));
    }
  }
  ;
  class Qj {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a.filter(b => hi(b)), "assign");
      this.l = cc11001100_hook("this.l", a.filter(b => !hi(b)), "assign");
    }
    aa() {
      return this.j.shift() || this.l.shift() || null;
    }
  }
  ;
  class Rj {}
  ;
  function Sj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.j(new yg(() => {
      const c = cc11001100_hook("c", a.j ? a.j.aa() : null, "var-init");
      c ? Tj(a, b, c) : a.A.aa().then(x(a.B, a, b), x(a.F, a, b));
    }, "r"));
  }
  function Tj(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.v && a.v.apply(c);
    a.m ? nj(a.m, c).then(function (d) {
      0 == d.length ? (0 < a.j.j.length || (a.j = cc11001100_hook("a.j", null, "assign")), Eg(a.l, b, c, "rres")) : (a.C.push(new Rj()), Sj(a, b));
    }) : Eg(a.l, b, c, "rres");
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
    aa() {
      const a = cc11001100_hook("a", new Cg(), "var-init");
      Sj(this, a);
      return a.j;
    }
    B(a, b) {
      this.j = cc11001100_hook("this.j", b, "assign");
      Sj(this, a);
    }
    F(a) {
      Fg(this.l, a);
    }
  }
  ;
  class Vj {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    aa() {
      const a = cc11001100_hook("a", new Cg(), "var-init");
      this.j.aa().then(b => {
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
      return a && Ga(this.l, a.D) ? [18] : [];
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
    Ca(Yj, function (d) {
      b.match(d.hostname) && (d = cc11001100_hook("d", a.document.getElementById(d.cc), "assign")) && c.push(d);
    });
    return c;
  }, "var-init");
  function ak(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.j(new yg(function () {
      if (a.j) {
        if (a.m.j(a.j)) {
          var c = cc11001100_hook("c", a.j, "var-init");
          a.j = cc11001100_hook("a.j", ff(a.j), "assign");
          b.resolve(c);
        } else {
          a: {
            c = cc11001100_hook("c", a.j, "assign");
            const d = cc11001100_hook("d", df(c), "var-init");
            for (let e = cc11001100_hook("e", 0, "var-init"); e < d.length; ++e) if (d[e].v()) {
              c = cc11001100_hook("c", d[e], "assign");
              break a;
            }
            c = cc11001100_hook("c", ff(c), "assign");
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
    aa() {
      var a = cc11001100_hook("a", new Cg(), "var-init");
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
      ea: cc11001100_hook("ea", [3], "object-key-init"),
      ka: cc11001100_hook("ka", !1, "object-key-init"),
      la: cc11001100_hook("la", 0, "object-key-init"),
      ja: cc11001100_hook("ja", 1, "object-key-init")
    }, "var-init"),
    ek = cc11001100_hook("ek", new Ke(["LI", "TR", "TD", "TH"]), "var-init");
  function fk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.l.j(new yg(function () {
      a.A.aa().then(x(a.v, a, b), x(a.m, a, b));
    }, "para"));
  }
  const gk = cc11001100_hook("gk", class {
    constructor(a, b, c) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.j = cc11001100_hook("this.j", new ck(c), "assign");
    }
    aa() {
      var a = cc11001100_hook("a", new Cg(), "var-init");
      fk(this, a);
      return a.j;
    }
    v(a, b) {
      var c = cc11001100_hook("c", this.j, "var-init");
      if (c.j.length) {
        var d = cc11001100_hook("d", c.j[c.j.length - 1], "var-init");
        var e = cc11001100_hook("e", c.l, "var-init");
        const f = cc11001100_hook("f", e.l.map.get(w(b)), "var-init");
        (e = cc11001100_hook("e", f ? rg(e, f.start.da()) : null, "assign")) ? (e = cc11001100_hook("e", e.start.j, "assign"), d = cc11001100_hook("d", d == e || d != e && Lc(d.D, e.D), "assign")) : d = cc11001100_hook("d", !0, "assign");
      } else d = cc11001100_hook("d", !0, "assign");
      d ? c.j.push(b) : c.j = cc11001100_hook("c.j", [b], "assign");
      b = cc11001100_hook("b", this.j, "assign");
      (b = cc11001100_hook("b", 3 <= b.j.length ? b.j[b.j.length - 3 + 1] : null, "assign")) && !ek.contains(b.D.tagName) ? a.resolve({
        node: cc11001100_hook("node", b, "object-key-init"),
        tb: cc11001100_hook("tb", Fh(dk), "object-key-init"),
        identifier: {}
      }) : fk(this, a);
    }
    m(a) {
      a.l("na");
    }
  }, "var-init");
  const hk = cc11001100_hook("hk", class extends Gg {
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
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = cc11001100_hook("a", function () {
      var e = cc11001100_hook("e", Kc(document, "IFRAME"), "var-init");
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
          var e = cc11001100_hook("e", c.Gb, "var-init");
          c.Gb = cc11001100_hook("c.Gb", null, "assign");
          e();
        }
      }, "assign");
      return function (e) {
        d.next = cc11001100_hook("d.next", {
          Gb: cc11001100_hook("Gb", e, "object-key-init")
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
        "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && (xa() || !y("Edge")) && u.Window.prototype.setImmediate == u.setImmediate ? (jk || (jk = cc11001100_hook("jk", kk(), "assign")), jk(a)) : u.setImmediate(a);
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
  var vk = cc11001100_hook("vk", class extends Gg {
    constructor(a, b, c) {
      var d = cc11001100_hook("d", new ik(), "var-init");
      super();
      this.K = cc11001100_hook("this.K", a, "assign");
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
          0 < this.m.length && this.K.setTimeout(x(this.F, this), 0);
        } finally {
          this.A = cc11001100_hook("this.A", !1, "assign"), this.v && this.v.j(Date.now() - this.l.j);
        }
      }
    }
  }, "var-init");
  function wk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", new Cg(), "var-init"),
      d = cc11001100_hook("d", b.K ? new vk(a, ja(Ui, b.j ? "lr:apf:" + b.j : "lr:apf"), b.F) : new hk(), "var-init");
    d.j(new yg(function () {
      Pg(new Sg(d), a, b).then(function (e) {
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
              k.v || (l = cc11001100_hook("l", new Ff(Yf(k), 0), "assign"), k.j || (k.j = cc11001100_hook("k.j", new Jf(new Ff(Yf(k), 0)), "assign")), k.v = cc11001100_hook("k.v", new Mf(l, new Ff(k.j, 1), new Ff(Zf(k), 2)), "assign"));
              m = cc11001100_hook("m", new gk(d, new bk(d, m, new Ff(k.v, 3)), e.v.j), "assign");
              break a;
            default:
              m = cc11001100_hook("m", l.A, "assign");
              var n = cc11001100_hook("n", l.j.pa, "var-init");
              l = cc11001100_hook("l", e.j, "assign");
              k = cc11001100_hook("k", 1 == k ? Hh(n) : Pe(n), "assign");
              m = cc11001100_hook("m", new Lh(m, k, l), "assign");
          }
        }
        m = cc11001100_hook("m", new Vj(new Pj(d, m)), "assign");
        k = cc11001100_hook("k", new Wj(f.j, g.m), "assign");
        l = cc11001100_hook("l", new oj(d, f.j), "assign");
        e.j.B && kj(l, new rj(f.j, f.T));
        n = cc11001100_hook("n", Zj(f.l), "assign");
        h = cc11001100_hook("h", kj(kj(kj(kj(l, new Xj(n)), new Kj(g.j, new Ff(Zf(h.j), 2))), new Mj()), new uj(f.v, new tj(g.j))), "assign");
        n = cc11001100_hook("n", new mi(), "assign");
        Ia(n.l, ni);
        n = cc11001100_hook("n", li(li(n, oi), pi), "assign");
        Ia(n.v, ri);
        Ia(n.l, qi);
        h = cc11001100_hook("h", jj(kj(kj(h, li(n, qi)), new vj(f.R * f.T)), new Nj()), "assign");
        var q = cc11001100_hook("q", e.j, "var-init"),
          r = cc11001100_hook("r", e.l.A, "var-init");
        n = cc11001100_hook("n", Math.max(r * q.v, q.minWidth), "assign");
        q = cc11001100_hook("q", r * q.l, "assign");
        n = cc11001100_hook("n", void 0 !== n ? n : 0, "assign");
        q = cc11001100_hook("q", void 0 !== q ? q : Infinity, "assign");
        if (0 > n || 0 > q) throw Error("apf::wf");
        jj(jj(jj(h, 0 >= n && Infinity === q ? null : new xg(n, q)), new Jj(f.v.m, e.j.C, f.l)), new pj([g.j, g.l]));
        0 < e.j.m && jj(l, new qj(f.l, e.j.m));
        Eg(d, c, new Uj(d, m, k, l), "itres");
      }, x(c.l, c));
    }, "i"));
    return c.j;
  }
  ;
  class xk {
    constructor(a) {
      this.j = cc11001100_hook("this.j", new Ke(a), "assign");
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
  var zk = cc11001100_hook("zk", class extends Rb {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Bk = cc11001100_hook("Bk", class extends Rb {
      constructor(a) {
        super(a, -1, Ak);
      }
    }, "var-init"),
    Ak = cc11001100_hook("Ak", [3, 4], "var-init");
  var Ck = cc11001100_hook("Ck", class extends Rb {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Ek = cc11001100_hook("Ek", class extends Rb {
      constructor(a) {
        super(a, -1, Dk);
      }
    }, "var-init"),
    Dk = cc11001100_hook("Dk", [6, 7, 9, 10, 11], "var-init");
  var Gk = cc11001100_hook("Gk", class extends Rb {
      constructor(a) {
        super(a, -1, Fk);
      }
    }, "var-init"),
    Hk = cc11001100_hook("Hk", Vb(Gk), "var-init"),
    Fk = cc11001100_hook("Fk", [1, 2, 5, 7], "var-init");
  ih(new fh(0, {}));
  ih(new fh(1, {}));
  class Ik {
    constructor() {
      var a = cc11001100_hook("a", qd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`, "var-init");
      this.j = cc11001100_hook("this.j", null, "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.A = cc11001100_hook("this.A", Math.random(), "assign");
      this.m = cc11001100_hook("this.m", this.Pa, "assign");
      this.B = cc11001100_hook("this.B", a, "assign");
    }
    Cb(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    v(a) {
      this.l = cc11001100_hook("this.l", a, "assign");
    }
    Pa(a, b, c = .01, d, e = "jserror") {
      if ((this.l ? this.A : Math.random()) > c) return !1;
      b.error && b.meta && b.id || (b = cc11001100_hook("b", new Fd(b, {
        context: cc11001100_hook("context", a, "object-key-init"),
        id: cc11001100_hook("id", e, "object-key-init")
      }), "assign"));
      if (d || this.j) b.meta = cc11001100_hook("b.meta", {}, "assign"), this.j && this.j(b.meta), d && d(b.meta);
      u.google_js_errors = cc11001100_hook("u.google_js_errors", u.google_js_errors || [], "assign");
      u.google_js_errors.push(b);
      u.error_rep_loaded || (Vc(u.document, this.B), u.error_rep_loaded = cc11001100_hook("u.error_rep_loaded", !0, "assign"));
      return !1;
    }
    xa(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.m(a, d, .01, c, "jserror")) throw d;
      }
    }
    P(a, b) {
      return (...c) => this.xa(a, () => b.apply(void 0, c));
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
        const f = cc11001100_hook("f", Ud(), "var-init");
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
            duration: cc11001100_hook("duration", (Ud() || 0) - f, "object-key-init"),
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
      new Ik().Pa(c, d);
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
    a && (c.Db = cc11001100_hook("c.Db", C(a, 1), "assign"), c.ub = cc11001100_hook("c.ub", C(a, 2), "assign"), c.vb = cc11001100_hook("c.vb", !!xb(a, 3), "assign"));
    b && (c.hb = cc11001100_hook("c.hb", Pk(Db(b, zk, 3)), "assign"), c.bb = cc11001100_hook("c.bb", Pk(Db(b, zk, 4)), "assign"));
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
      c.Ca.setAttribute("data-ad-format", "auto");
      di(c, a, b);
      return c;
    }
  }, "var-init");
  const Tk = cc11001100_hook("Tk", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    l(a, b, c, d) {
      var e = cc11001100_hook("e", 0 < Db(this.j, Bk, 9).length ? Db(this.j, Bk, 9)[0] : null, "var-init"),
        f = cc11001100_hook("f", Qk(Bb(this.j, Ck, 3), e), "var-init");
      if (!e) return null;
      if (e = cc11001100_hook("e", C(e, 1), "assign")) {
        d = cc11001100_hook("d", d.document, "assign");
        var g = cc11001100_hook("g", c.tagName, "var-init");
        c = cc11001100_hook("c", new Dc(d).createElement(g), "assign");
        c.style.clear = cc11001100_hook("c.style.clear", f.vb ? "both" : "none", "assign");
        "A" == g && (c.style.display = cc11001100_hook("c.style.display", "block", "assign"));
        c.style.padding = cc11001100_hook("c.style.padding", "0px", "assign");
        c.style.margin = cc11001100_hook("c.style.margin", "0px", "assign");
        f.hb && ci(c.style, f.hb);
        d = cc11001100_hook("d", new Dc(d).createElement("INS"), "assign");
        f.bb && ci(d.style, f.bb);
        c.appendChild(d);
        f = cc11001100_hook("f", {
          Ua: cc11001100_hook("Ua", c, "object-key-init"),
          Ca: cc11001100_hook("Ca", d, "object-key-init")
        }, "assign");
        f.Ca.setAttribute("data-ad-type", "text");
        f.Ca.setAttribute("data-native-settings-key", e);
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
    var b = cc11001100_hook("b", a.G, "var-init");
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
      this.G = cc11001100_hook("this.G", c, "assign");
      this.Pb = cc11001100_hook("this.Pb", d, "assign");
      e || new mh();
      this.m = cc11001100_hook("this.m", f, "assign");
      this.F = cc11001100_hook("this.F", g, "assign");
      this.C = cc11001100_hook("this.C", h, "assign");
      (this.K = cc11001100_hook("this.K", l, "assign")) && Bb(l, eh, 1) && Bb(l, eh, 1);
      this.I = cc11001100_hook("this.I", [], "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.B = cc11001100_hook("this.B", new R(), "assign");
      this.A = cc11001100_hook("this.A", this.l = cc11001100_hook("this.l", null, "assign"), "assign");
    }
    da() {
      return this.F;
    }
  }
  ;
  var al = cc11001100_hook("al", a => {
    switch (a.Pb) {
      case 0:
      case 1:
        var b = cc11001100_hook("b", a.K, "var-init");
        null == b ? a = cc11001100_hook("a", null, "assign") : (a = cc11001100_hook("a", Bb(b, eh, 1), "assign"), null == a ? a = cc11001100_hook("a", null, "assign") : (b = cc11001100_hook("b", C(b, 2), "assign"), a = cc11001100_hook("a", null == b ? null : new fh(0, {
          Tb: cc11001100_hook("Tb", [a], "object-key-init"),
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
      this.La = cc11001100_hook("this.La", c, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
    }
    fill(a, b) {
      var c = cc11001100_hook("c", this.ra, "var-init");
      if (a = cc11001100_hook("a", c.L.l(a, b, this.j, c.m), "assign")) {
        b = cc11001100_hook("b", a.Ua, "assign");
        if (this.ra.v) throw Error("AMA:AP:AP");
        Ah(b, this.j, this.ra.j.j);
        c = cc11001100_hook("c", this.ra, "assign");
        c.v = cc11001100_hook("c.v", !0, "assign");
        wh(oh) && (c.l && yh(c.l), c.l = cc11001100_hook("c.l", null, "assign"));
        null != b && c.I.push(b);
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
              } catch (z) {
                throw yh(m), z;
              }
              l.l = cc11001100_hook("l.l", q, "assign");
            }
            (h = cc11001100_hook("h", h.l, "assign")) && d.push({
              tc: cc11001100_hook("tc", f, "object-key-init"),
              cb: cc11001100_hook("cb", g, "object-key-init"),
              na: cc11001100_hook("na", h, "object-key-init")
            });
          }
        }
        if (0 < d.length) for (q = cc11001100_hook("q", U(b), "assign"), n = cc11001100_hook("n", Be(b), "assign"), e = cc11001100_hook("e", 0, "assign"); e < d.length; e++) {
          const {
            tc: z,
            cb: F,
            na: H
          } = cc11001100_hook("", d[e], "var-init");
          f = cc11001100_hook("f", gl(H, n, q), "assign");
          c.push(new dl(z, F, f));
        }
        q = cc11001100_hook("q", c, "assign");
      } else {
        q = cc11001100_hook("q", [], "assign");
        n = cc11001100_hook("n", [], "assign");
        try {
          const z = cc11001100_hook("z", [], "var-init");
          for (let F = cc11001100_hook("F", 0, "var-init"); F < a.length; F++) {
            var r = cc11001100_hook("r", a[F], "var-init"),
              t = cc11001100_hook("t", Xk(r), "var-init");
            t && z.push({
              kb: cc11001100_hook("kb", r, "object-key-init"),
              cb: cc11001100_hook("cb", t, "object-key-init")
            });
          }
          for (t = cc11001100_hook("t", 0, "assign"); t < z.length; t++) {
            r = cc11001100_hook("r", n, "assign");
            g = cc11001100_hook("g", r.push, "assign");
            {
              l = cc11001100_hook("l", z[t], "assign");
              k = cc11001100_hook("k", l.cb, "assign");
              m = cc11001100_hook("m", l.kb, "assign");
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
          d = cc11001100_hook("d", Be(b), "assign");
          for (g = cc11001100_hook("g", 0, "assign"); g < n.length; g++) e = cc11001100_hook("e", gl(n[g], d, c), "assign"), f = cc11001100_hook("f", z[g], "assign"), q.push(new dl(f.kb, f.cb, e));
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
    return !Fa(a, d => te(d, c));
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
    return c => hl(b, c.La);
  }
  function kl(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.length) return Wb;
    const b = cc11001100_hook("b", new xk(a), "var-init");
    return c => b.contains(c.Pb);
  }
  function ll(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 >= a) return Xb;
    const c = cc11001100_hook("c", T(b).scrollHeight - a, "var-init");
    return function (d) {
      return d.La.j <= c;
    };
  }
  const ml = cc11001100_hook("ml", (a, b) => b.La.j >= a, "var-init"),
    nl = cc11001100_hook("nl", (a, b, c) => {
      c = cc11001100_hook("c", c.La.m, "assign");
      return a <= c && c <= b;
    }, "var-init");
  var ol = cc11001100_hook("ol", class {
    Fa(a) {
      return jl(a);
    }
    Ga() {
      return 9;
    }
  }, "var-init");
  var pl = cc11001100_hook("pl", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Fa(a) {
      return ll(this.j, a);
    }
    Ga() {
      return 13;
    }
  }, "var-init");
  var ql = cc11001100_hook("ql", class {
    Fa(a) {
      const b = cc11001100_hook("b", T(a).clientHeight, "var-init");
      return b ? ja(ml, b + U(a)) : Wb;
    }
    Ga() {
      return 12;
    }
  }, "var-init");
  var rl = cc11001100_hook("rl", class {
    constructor(a) {
      this.j = cc11001100_hook("this.j", a, "assign");
    }
    Fa() {
      return kl(this.j);
    }
    Ga() {
      return 1;
    }
  }, "var-init");
  var sl = cc11001100_hook("sl", class {
    Fa() {
      return Yb(Wk);
    }
    Ga() {
      return 7;
    }
  }, "var-init");
  var tl = cc11001100_hook("tl", class {
    constructor(a, b) {
      this.minWidth = cc11001100_hook("this.minWidth", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
    }
    Fa() {
      return ja(nl, this.minWidth, this.j);
    }
    Ga() {
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
      this.j = cc11001100_hook("this.j", new R(), "assign");
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
      this.j = cc11001100_hook("this.j", new R(), "assign");
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
    const b = cc11001100_hook("b", null.dd.filter(c => qe(c.wb).every(d => c.wb.get(d) === a.get(d))), "var-init");
    return 0 === b.length ? (null.Bc.push(19), null) : b.reduce((c, d) => c.wb.yb() > d.wb.yb() ? c : d, b[0]);
  }
  function Il(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", cl(a), "assign");
    if (null == a.j) return null.Bc.push(18), null;
    a = cc11001100_hook("a", a.j.value, "assign");
    if (oe(null.Jb, a)) return null.Jb.get(a);
    var b = cc11001100_hook("b", gh(a), "var-init");
    b = cc11001100_hook("b", Hl(b), "assign");
    null.Jb.set(a, b);
    return b;
  }
  ;
  function Jl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 == a.j.length ? a : bh(a, (b, c) => (Il(b)?.vc ?? Number.MAX_VALUE) - (Il(c)?.vc ?? Number.MAX_VALUE));
  }
  function Kl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Math, "var-init");
    const d = cc11001100_hook("d", b.j, "var-init"),
      e = cc11001100_hook("e", b.ra.j.j, "var-init");
    c = cc11001100_hook("c", b.La.j + 200 * c.min.call(c, 20, 0 == e || 3 == e ? Gl(d.parentElement) : Gl(d)), "assign");
    a = cc11001100_hook("a", a.j, "assign");
    0 > a.j && (a.j = cc11001100_hook("a.j", T(a.l).scrollHeight || 0, "assign"));
    b = cc11001100_hook("b", a.j - b.La.j, "assign");
    return c + (1E3 < b ? 0 : 2 * (1E3 - b));
  }
  function Ll(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 == b.j.length ? b : bh(b, (c, d) => Kl(a, c) - Kl(a, d));
  }
  function Ml(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return bh(b, (c, d) => {
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
    for (var d of b.v) c = cc11001100_hook("c", $g(c, d.Fa(a.j), Pl(d.Ga())), "assign");
    d = cc11001100_hook("d", c = cc11001100_hook("c", c.apply(il(a.j)), "assign"), "assign");
    for (const e of b.l) d = cc11001100_hook("d", $g(d, e.Fa(a.j), Ql(e.Ga())), "assign");
    switch (b.m) {
      case 1:
        d = cc11001100_hook("d", Ll(a.l, d), "assign");
        break;
      case 2:
        d = cc11001100_hook("d", Ml(a.l, d), "assign");
        break;
      case 3:
        const e = cc11001100_hook("e", Q(El), "var-init");
        d = cc11001100_hook("d", Jl(d), "assign");
        c.forEach(f => {
          Cl(e, f);
          null?.cd(f);
        });
        d.forEach(f => Dl(e, f));
    }
    b.A && (d = cc11001100_hook("d", ch(d, zc(a.j.location.href + a.j.localStorage.google_experiment_mod)), "assign"));
    1 === b.j?.length && yl(a.v, b.j[0], {
      Qc: cc11001100_hook("Qc", c.j.length, "object-key-init"),
      bd: cc11001100_hook("bd", d.j.length, "object-key-init")
    });
    return d.j.slice(0);
  }
  class Rl {
    constructor(a, b) {
      this.m = cc11001100_hook("this.m", new ah(a), "assign");
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
      D(a, "message", e);
      let f = cc11001100_hook("f", !1, "var-init");
      return () => {
        let g = cc11001100_hook("g", !1, "var-init");
        f || (f = cc11001100_hook("f", !0, "assign"), g = cc11001100_hook("g", G(a, "message", e), "assign"));
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
    return Sl(a, "fullscreen", d.P(952, (e, f) => {
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
    Qd(a.B, "fullscreen_tag", b, !1, .25);
  }
  class am extends ge {
    constructor(a, b, c, d) {
      super();
      this.slotType = cc11001100_hook("this.slotType", 1, "assign");
      this.pubWin = cc11001100_hook("this.pubWin", a, "assign");
      this.Hb = cc11001100_hook("this.Hb", b, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
      this.B = cc11001100_hook("this.B", d, "assign");
      this.j = cc11001100_hook("this.j", 1, "assign");
      this.v = cc11001100_hook("this.v", new Wl(), "assign");
      this.l = cc11001100_hook("this.l", new Wl(), "assign");
      this.m = cc11001100_hook("this.m", new Wl(), "assign");
    }
    Ha() {
      const a = cc11001100_hook("a", Vl(this.pubWin, this.Hb, b => {
        if ("adError" === b.eventType) this.m.resolve(), this.j = cc11001100_hook("this.j", 0, "assign");else if ("adReady" === b.eventType && 1 === this.j) b.slotType !== this.slotType && ($l(this, {
          cur_st: cc11001100_hook("cur_st", this.j, "object-key-init"),
          evt: cc11001100_hook("evt", b.eventType, "object-key-init"),
          adp_tp: cc11001100_hook("adp_tp", b.slotType, "object-key-init")
        }), this.j = cc11001100_hook("this.j", 0, "assign")), this.v.resolve(), this.j = cc11001100_hook("this.j", 2, "assign");else if ("adClosed" === b.eventType && 2 === this.j) this.l.resolve(b.result), this.j = cc11001100_hook("this.j", 3, "assign");else if ("adClosed" !== b.eventType || 3 !== this.j) $l(this, {
          cur_st: cc11001100_hook("cur_st", this.j, "object-key-init"),
          evt: cc11001100_hook("evt", b.eventType, "object-key-init")
        }), this.j = cc11001100_hook("this.j", 0, "assign");
      }, this.A), "var-init");
      P(this, a);
    }
  }
  function bm(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a = cc11001100_hook("a", new am(a, b, c, d), "assign");
    a.Ha();
    return a;
  }
  ;
  var dm = cc11001100_hook("dm", class extends Rb {
      constructor(a) {
        super(a, -1, cm);
      }
    }, "var-init"),
    cm = cc11001100_hook("cm", [19], "var-init");
  function em(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", S(a)?.tagSpecificState[1], "assign");
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
        da(c) && (a.B = cc11001100_hook("a.B", c, "assign"));
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
          a.j = cc11001100_hook("a.j", {}, "assign");
          for (d of b.fillMessage) a.j[d.key] = cc11001100_hook("a.j[d.key]", d.value, "assign");
        }
        a.A = cc11001100_hook("a.A", b.adWidth, "assign");
        a.v = cc11001100_hook("a.v", b.adHeight, "assign");
        Ed(a.A) && Ed(a.v) || Wi("rctnosize", b);
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
    return "fixed" !== ud(a, "position") ? null : "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= Ad(a).width && 1 >= Ad(a).height ? null : a;
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
  Ma || za();
  function rm(a = []) {
    const b = cc11001100_hook("b", Date.now(), "var-init");
    return Da(a, c => 36E5 > b - c);
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
      if (!Array.isArray(c) || Fa(c, d => !Number.isInteger(d))) return a.removeItem("__lsv__"), [];
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
    return null !== Mc(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c), !0);
  }
  function Cm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Mc(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position, !0);
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
    return `${a.position}-${Em(a.R)}x${Em(a.T)}-${Em(a.scrollY + a.Qa)}Y`;
  }
  function Gm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return `f-${Fm({
      position: cc11001100_hook("position", a.position, "object-key-init"),
      Qa: cc11001100_hook("Qa", a.Qa, "object-key-init"),
      scrollY: cc11001100_hook("scrollY", 0, "object-key-init"),
      R: cc11001100_hook("R", a.R, "object-key-init"),
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
    const d = cc11001100_hook("d", S(c.W).sideRailProcessedFixedElements, "var-init");
    if (!d.has(a)) {
      var e = cc11001100_hook("e", a.getBoundingClientRect(), "var-init");
      if (e) {
        var f = cc11001100_hook("f", Math.max(e.top - 10, 0), "var-init"),
          g = cc11001100_hook("g", Math.min(e.bottom + 10, c.T), "var-init"),
          h = cc11001100_hook("h", Math.max(e.left - 10, 0), "var-init");
        e = cc11001100_hook("e", Math.min(e.right + 10, c.R), "assign");
        for (var l = cc11001100_hook("l", .3 * c.R, "var-init"); f <= g; f += cc11001100_hook("f", 10, "assign")) {
          if (0 < e && h < l) {
            var k = cc11001100_hook("k", Gm({
              position: cc11001100_hook("position", "left", "object-key-init"),
              Qa: cc11001100_hook("Qa", f, "object-key-init"),
              R: cc11001100_hook("R", c.R, "object-key-init"),
              T: cc11001100_hook("T", c.T, "object-key-init")
            }), "var-init");
            b.set(k, Hm(b.get(k), h));
          }
          if (h < c.R && e > c.R - l) {
            k = cc11001100_hook("k", Gm({
              position: cc11001100_hook("position", "right", "object-key-init"),
              Qa: cc11001100_hook("Qa", f, "object-key-init"),
              R: cc11001100_hook("R", c.R, "object-key-init"),
              T: cc11001100_hook("T", c.T, "object-key-init")
            }), "assign");
            const m = cc11001100_hook("m", c.R - e, "var-init");
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
    c.adsbygoogle || (c.adsbygoogle = cc11001100_hook("c.adsbygoogle", [], "assign"), Vc(c.document, qd`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
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
    const d = cc11001100_hook("d", Kc(document, "INS"), "var-init");
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
      const c = cc11001100_hook("c", S(a), "var-init");
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
      this.l = cc11001100_hook("this.l", this.v.P(264, c => {
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
      this.G = cc11001100_hook("this.G", c, "assign");
      this.progress = cc11001100_hook("this.progress", 0, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
      this.L = cc11001100_hook("this.L", !1, "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.A = cc11001100_hook("this.A", new Nm(x(this.I, this), d), "assign");
    }
    I(a) {
      if (this.L) this.A.j = cc11001100_hook("this.A.j", !1, "assign");else {
        null === this.l && (this.l = cc11001100_hook("this.l", a, "assign"));
        this.progress = cc11001100_hook("this.progress", (a - this.l) / this.G, "assign");
        1 <= this.progress && (this.progress = cc11001100_hook("this.progress", 1, "assign"));
        a = cc11001100_hook("a", this.v ? this.v(this.progress) : this.progress, "assign");
        this.m = cc11001100_hook("this.m", [], "assign");
        for (let b = cc11001100_hook("b", 0, "var-init"); b < this.j.length; b++) this.m.push((this.B[b] - this.j[b]) * a + this.j[b]);
        this.K();
        1 == this.progress && (this.A.j = cc11001100_hook("this.A.j", !1, "assign"), this.C());
      }
    }
    C() {}
    K() {}
    reset(a, b, c) {
      this.l = cc11001100_hook("this.l", null, "assign");
      this.j = cc11001100_hook("this.j", a, "assign");
      this.B = cc11001100_hook("this.B", b, "assign");
      this.G = cc11001100_hook("this.G", c, "assign");
      this.progress = cc11001100_hook("this.progress", 0, "assign");
    }
  }
  ;
  class Um extends Tm {
    constructor(a, b, c, d, e, f, g, h) {
      super([b], [c], d, f);
      this.H = cc11001100_hook("this.H", a, "assign");
      this.J = cc11001100_hook("this.J", e, "assign");
      this.F = cc11001100_hook("this.F", g ? g : null, "assign");
      this.v = cc11001100_hook("this.v", h || null, "assign");
    }
    K() {
      const a = cc11001100_hook("a", {}, "var-init");
      a[this.J] = cc11001100_hook("a[this.J]", this.m[0] + "px", "assign");
      O(this.H, a);
    }
    C() {
      this.F && this.F();
    }
  }
  ;
  function Vm(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.j && G(a.j, a.l, a.m, bc);
  }
  class Wm extends ge {
    constructor(a, b, c) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
      this.l = cc11001100_hook("this.l", b, "assign");
      this.m = cc11001100_hook("this.m", c, "assign");
      D(this.j, this.l, this.m, bc);
      P(this, () => void Vm(this));
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
    a.G = cc11001100_hook("a.G", new Wm(a.v, "mousemove", x(a.Y, a)), "assign");
    he(a, a.G);
    a.H = cc11001100_hook("a.H", new Wm(a.v, "touchmove", x(a.Y, a)), "assign");
    he(a, a.H);
    a.F = cc11001100_hook("a.F", new Wm(a.v, "mouseup", x(a.Z, a)), "assign");
    he(a, a.F);
    a.I = cc11001100_hook("a.I", new Wm(a.v, "touchend", x(a.Z, a)), "assign");
    he(a, a.I);
  }
  function $m(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.touches && a.touches[0] || a, "assign");
    return new I(a.clientX, a.clientY);
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
    a.H && Vm(a.H);
    a.F && Vm(a.F);
    a.I && Vm(a.I);
  }
  class an extends ge {
    constructor(a, b, c) {
      super();
      this.v = cc11001100_hook("this.v", a, "assign");
      this.target = cc11001100_hook("this.target", b, "assign");
      this.handle = cc11001100_hook("this.handle", c || b, "assign");
      this.C = cc11001100_hook("this.C", this.B = cc11001100_hook("this.B", this.M = cc11001100_hook("this.M", !1, "assign"), "assign"), "assign");
      this.A = cc11001100_hook("this.A", this.j = cc11001100_hook("this.j", this.l = cc11001100_hook("this.l", this.m = cc11001100_hook("this.m", this.I = cc11001100_hook("this.I", this.F = cc11001100_hook("this.F", this.H = cc11001100_hook("this.H", this.G = cc11001100_hook("this.G", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
      this.ga = cc11001100_hook("this.ga", new Wm(this.handle, "mousedown", d => {
        0 == d.button && Ym(this, d);
      }), "assign");
      he(this, this.ga);
      this.oa = cc11001100_hook("this.oa", new Wm(this.handle, "touchstart", d => Ym(this, d)), "assign");
      he(this, this.oa);
      this.fa = cc11001100_hook("this.fa", new Wm(this.handle, "click", d => {
        this.M ? this.M = cc11001100_hook("this.M", !1, "assign") : d.stopPropagation();
      }), "assign");
      he(this, this.fa);
    }
    N() {
      if (this.m && this.l && this.j) {
        var a = cc11001100_hook("a", this.m, "var-init"),
          b = cc11001100_hook("b", vc(this.j, this.l), "var-init");
        var c = cc11001100_hook("c", new I(a.x + b.x, a.y + b.y), "var-init");
        a = cc11001100_hook("a", this.target, "assign");
        c instanceof I ? (b = cc11001100_hook("b", c.x, "assign"), c = cc11001100_hook("c", c.y, "assign")) : (b = cc11001100_hook("b", c, "assign"), c = cc11001100_hook("c", void 0, "assign"));
        a.style.left = cc11001100_hook("a.style.left", zd(b, !1), "assign");
        a.style.top = cc11001100_hook("a.style.top", zd(c, !1), "assign");
      }
    }
    U() {}
    J() {
      var a = cc11001100_hook("a", this.target, "var-init"),
        b;
      a: {
        if (fc && (b = cc11001100_hook("b", a.parentElement, "assign"))) break a;
        b = cc11001100_hook("b", a.parentNode, "assign");
        b = cc11001100_hook("b", da(b) && 1 == b.nodeType ? b : null, "assign");
      }
      var c = cc11001100_hook("c", b, "var-init");
      b = cc11001100_hook("b", xd(a), "assign");
      c = cc11001100_hook("c", xd(c), "assign");
      b = cc11001100_hook("b", new I(b.x - c.x, b.y - c.y), "assign");
      a = cc11001100_hook("a", Dd(a, "margin"), "assign");
      return vc(b, new I(a.left, a.top));
    }
    Y(a) {
      if (this.B) if (a.preventDefault(), this.j = cc11001100_hook("this.j", $m(a), "assign"), this.A.add(this.j), this.C) this.N();else {
        var b = cc11001100_hook("b", this.l, "var-init"),
          c = cc11001100_hook("c", this.j, "var-init");
        a = cc11001100_hook("a", b.x - c.x, "assign");
        b = cc11001100_hook("b", b.y - c.y, "assign");
        10 <= Math.sqrt(a * a + b * b) && (this.N(), this.C = cc11001100_hook("this.C", !0, "assign"));
      }
    }
    Z(a) {
      this.C ? (a.preventDefault(), this.j = cc11001100_hook("this.j", $m(a), "assign"), this.U()) : this.M = cc11001100_hook("this.M", !0, "assign");
      Zm(this);
    }
  }
  ;
  function bn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", cn(a), "var-init");
    Ca(a.j.maxZIndexListeners, c => c(b));
  }
  function cn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", $c(a.j.maxZIndexRestrictions), "assign");
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
      this.j = cc11001100_hook("this.j", S(a).floatingAdsStacking, "assign");
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
      "bottom" == a.j && om(a.W) && a.G.xa(405, () => kn(a, "21px", e, "ease-in"));
      b || ln(a, !0);
      c === d ? a.v = cc11001100_hook("a.v", !b, "assign") : (a.A = cc11001100_hook("a.A", !0, "assign"), c = cc11001100_hook("c", new Um(a.m, c, d, e, a.j, a.G, () => {
        a.A = cc11001100_hook("a.A", !1, "assign");
        a.v = cc11001100_hook("a.v", !b, "assign");
        b || ln(a, !0);
        b && a.ca();
        a.m.setAttribute("data-anchor-status", "dismissed");
      }, Qm), "assign"), a.X(), Sm(c));
    }
  }
  function mn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    De(b);
    K(b, {
      "background-color": cc11001100_hook("background-color", "#FAFAFA", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init"),
      position: cc11001100_hook("position", "relative", "object-key-init"),
      "z-index": cc11001100_hook("z-index", 1, "object-key-init"),
      height: cc11001100_hook("height", "5px", "object-key-init"),
      "box-shadow": cc11001100_hook("box-shadow", "top" == a.j ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px", "object-key-init")
    });
    "top" == a.j && K(a.l ?? b, {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", a.B.height + "px", "object-key-init"),
      width: cc11001100_hook("width", "100%", "object-key-init")
    });
    const c = cc11001100_hook("c", Wc("SPAN", a.W.document), "var-init");
    c.appendChild(nn(a));
    const d = cc11001100_hook("d", e => {
      e.target === c && (e.preventDefault && e.preventDefault(), e.stopImmediatePropagation && e.stopImmediatePropagation(), e.stopPropagation && e.stopPropagation());
    }, "var-init");
    D(c, "click", d);
    P(a, () => G(c, "click", d));
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
    const g = cc11001100_hook("g", a.W.document, "var-init"),
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
    K(b, {
      display: cc11001100_hook("display", "block", "object-key-init"),
      width: cc11001100_hook("width", "80px", "object-key-init"),
      height: cc11001100_hook("height", "45px", "object-key-init"),
      [a.j]: cc11001100_hook(a.j, "0", "object-key-init"),
      left: cc11001100_hook("left", "0%", "object-key-init"),
      marginLeft: cc11001100_hook("marginLeft", "0px", "object-key-init"),
      "pointer-events": cc11001100_hook("pointer-events", "none", "object-key-init")
    });
    gd(c);
  }
  function pn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.A) {
      var b = cc11001100_hook("b", parseInt(a.m.style[a.j], 10), "var-init");
      if (b) {
        a.A = cc11001100_hook("a.A", !0, "assign");
        const c = cc11001100_hook("c", -b / .1, "var-init");
        "bottom" == a.j && om(a.W) && a.G.xa(404, () => kn(a, "0px", c, "ease-out"));
        ln(a, !1);
        b = cc11001100_hook("b", new Um(a.m, b, 0, c, a.j, a.G, () => {
          a.A = cc11001100_hook("a.A", !1, "assign");
          a.v = cc11001100_hook("a.v", !1, "assign");
          qn(a);
          a.m.setAttribute("data-anchor-status", "displayed");
          a.m.setAttribute("data-anchor-shown", !0);
          ln(a, !1);
        }, Rm), "assign");
        a.Y();
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
    Qd(a.Z, "flgr", {
      i: cc11001100_hook("i", b, "object-key-init"),
      dc: cc11001100_hook("dc", a.v ? "1" : "0", "object-key-init"),
      fdc: cc11001100_hook("fdc", c ? "1" : "0", "object-key-init"),
      ds: cc11001100_hook("ds", a.H ? "1" : "0", "object-key-init"),
      expId: cc11001100_hook("expId", a.ga, "object-key-init"),
      sc: cc11001100_hook("sc", a.U ? "1" : "0", "object-key-init"),
      off: cc11001100_hook("off", d, "object-key-init"),
      vw: cc11001100_hook("vw", T(a.W).clientWidth, "object-key-init"),
      req: cc11001100_hook("req", a.M.src, "object-key-init"),
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
    O(a.M, {
      transition: cc11001100_hook("transition", c / 1E3 + "s", "object-key-init"),
      "transition-timing-function": cc11001100_hook("transition-timing-function", d, "object-key-init"),
      "margin-top": cc11001100_hook("margin-top", b, "object-key-init")
    });
  }
  function qn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.ba();
    a.ba = cc11001100_hook("a.ba", () => {}, "assign");
  }
  function tn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("bottom" !== a.j && "top" !== a.j) throw Error("unsupported reactive type");
    const c = cc11001100_hook("c", f => {
        f.preventDefault();
        a.A || (a.J = cc11001100_hook("a.J", !0, "assign"), a.v ? pn(a) : jn(a, a.H), sn(a, "c", !a.v, 0));
      }, "var-init"),
      d = cc11001100_hook("d", a.C, "var-init");
    D(d, "click", c);
    P(a, () => G(d, "click", c));
    a.l && (D(a.l, "click", c), P(a, () => a.l && G(a.l, "click", c)));
    O(b, {
      opacity: cc11001100_hook("opacity", 1, "object-key-init")
    });
    var e = cc11001100_hook("e", a.W.document, "var-init");
    e && (a.m = cc11001100_hook("a.m", b, "assign"), a.ma && (a.N = cc11001100_hook("a.N", new ("top" == a.j ? un : vn)(a, e, a.B.height, b, a.C), "assign"), he(a, a.N)), e = cc11001100_hook("e", {
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      left: cc11001100_hook("left", "0px", "object-key-init")
    }, "assign"), e[a.j] = cc11001100_hook("e[a.j]", -a.B.height - 30 + "px", "assign"), O(b, e), K(b, {
      overflow: cc11001100_hook("overflow", "visible", "object-key-init"),
      background: cc11001100_hook("background", "#FAFAFA", "object-key-init")
    }), dn(a.oa, f => {
      const g = cc11001100_hook("g", null == a.V ? 2147483647 : a.V, "var-init");
      O(b, {
        zIndex: cc11001100_hook("zIndex", null == f ? g : Math.min(f, g), "object-key-init")
      });
    }), pn(a));
  }
  class wn extends ge {
    constructor(a, b, c, d, e, f, g, h, l, k, m) {
      super();
      this.F = cc11001100_hook("this.F", a, "assign");
      this.W = cc11001100_hook("this.W", b, "assign");
      this.M = cc11001100_hook("this.M", c, "assign");
      this.B = cc11001100_hook("this.B", d, "assign");
      this.ca = cc11001100_hook("this.ca", f || (() => {}), "assign");
      this.ba = cc11001100_hook("this.ba", g || (() => {}), "assign");
      this.G = cc11001100_hook("this.G", h, "assign");
      this.Z = cc11001100_hook("this.Z", l, "assign");
      this.X = cc11001100_hook("this.X", k, "assign");
      this.Y = cc11001100_hook("this.Y", m, "assign");
      P(this, () => jn(this, !0));
      this.C = cc11001100_hook("this.C", Wc("INS", b.document), "assign");
      P(this, () => this.C = cc11001100_hook("this.C", null, "assign"));
      this.l = cc11001100_hook("this.l", null, "assign");
      HTMLElement.prototype.attachShadow && !this.G.xa(1013, () => {
        this.l = cc11001100_hook("this.l", Wc("DIV", b.document), "assign");
        this.l.className = cc11001100_hook("this.l.className", "grippy-host", "assign");
        this.l.attachShadow({
          mode: cc11001100_hook("mode", "closed", "object-key-init")
        }).appendChild(this.C);
        P(this, () => this.l = cc11001100_hook("this.l", null, "assign"));
        return !0;
      }) && (this.l = cc11001100_hook("this.l", null, "assign"));
      this.v = cc11001100_hook("this.v", this.A = cc11001100_hook("this.A", !1, "assign"), "assign");
      this.I = cc11001100_hook("this.I", 0, "assign");
      this.j = cc11001100_hook("this.j", e, "assign");
      this.J = cc11001100_hook("this.J", !1, "assign");
      this.m = cc11001100_hook("this.m", this.N = cc11001100_hook("this.N", null, "assign"), "assign");
      this.T = cc11001100_hook("this.T", b.innerHeight, "assign");
      this.U = cc11001100_hook("this.U", "true" === this.F.scroll_detached, "assign");
      this.H = cc11001100_hook("this.H", "true" === this.F.dismissable, "assign");
      this.ma = cc11001100_hook("this.ma", "true" === this.F.draggable || "top" != this.j, "assign");
      this.ga = cc11001100_hook("this.ga", this.F.expId || "", "assign");
      this.fa = cc11001100_hook("this.fa", this.F.qemId || "", "assign");
      a = cc11001100_hook("a", parseInt(this.F.z_index_override, 10), "assign");
      this.V = cc11001100_hook("this.V", isNaN(a) ? null : a, "assign");
      this.oa = cc11001100_hook("this.oa", new en(b), "assign");
      !this.H && u.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(() => {
        const n = cc11001100_hook("n", this.W.innerHeight, "var-init");
        if (2 > Math.abs(n - 460) || 2 > Math.abs(n - 529)) n < this.T && 2 > Math.abs(U(this.W) - this.I - 68) && (this.J = cc11001100_hook("this.J", !0, "assign"), this.v && pn(this)), this.T = cc11001100_hook("this.T", n, "assign");
      }, 300);
      mn(this, this.C);
    }
  }
  class xn extends an {
    constructor(a, b, c, d, e) {
      super(b, d, e);
      this.ca = cc11001100_hook("this.ca", a, "assign");
      this.X = cc11001100_hook("this.X", c, "assign");
    }
    U() {
      var a = cc11001100_hook("a", this.ca, "var-init");
      if (!a.A) {
        const b = cc11001100_hook("b", parseInt(a.m.style[a.j], 10), "var-init");
        b >= -(a.B.height / 2) ? (pn(a), sn(a, "d", !1, b)) : (jn(a, a.H), sn(a, "d", !0, b));
      }
    }
    N() {
      if (null !== this.m && null !== this.l && null !== this.j) {
        var a = cc11001100_hook("a", this.V(this.m.y, vc(this.j, this.l).y), "var-init");
        0 < a && (a = cc11001100_hook("a", 0, "assign"));
        a < -this.X && (a = cc11001100_hook("a", -this.X, "assign"));
        var b = cc11001100_hook("b", {}, "var-init");
        b[this.ba()] = cc11001100_hook("b[this.ba()]", a + "px", "assign");
        O(this.target, b);
      }
    }
  }
  class un extends xn {
    J() {
      return new I(0, parseInt(this.target.style.top, 10));
    }
    V(a, b) {
      return b - a;
    }
    ba() {
      return "top";
    }
  }
  class vn extends xn {
    J() {
      return new I(0, parseInt(this.target.style.bottom, 10));
    }
    V(a, b) {
      return a - b;
    }
    ba() {
      return "bottom";
    }
  }
  ;
  function yn(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (!a.M) {
      a.M = cc11001100_hook("a.M", [], "assign");
      for (var e = cc11001100_hook("e", a.m.parentElement, "var-init"); e;) {
        a.M.push(e);
        if (a.Z(e)) break;
        e = cc11001100_hook("e", e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null, "assign");
      }
    }
    e = cc11001100_hook("e", a.M.slice(), "assign");
    !c && a.Z(e[e.length - 1]) && e.pop();
    let f;
    if (d) for (c = cc11001100_hook("c", e.length - 1, "assign"); 0 <= c; --c) (f = cc11001100_hook("f", e[c], "assign")) && b.call(a, f, c, e);else for (c = cc11001100_hook("c", 0, "assign"); c < e.length; ++c) (f = cc11001100_hook("f", e[c], "assign")) && b.call(a, f, c, e);
  }
  var zn = cc11001100_hook("zn", class extends ge {
    constructor(a, b, c) {
      super();
      this.m = cc11001100_hook("this.m", a, "assign");
      this.j = cc11001100_hook("this.j", b, "assign");
      this.l = cc11001100_hook("this.l", c, "assign");
      this.M = cc11001100_hook("this.M", null, "assign");
      P(this, () => this.M = cc11001100_hook("this.M", null, "assign"));
    }
    Z(a) {
      return this.l === a;
    }
  }, "var-init");
  function An(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    null !== b && null !== cd(a.getAttribute("width")) && a.setAttribute("width", b);
    null !== c && null !== cd(a.getAttribute("height")) && a.setAttribute("height", c);
    null !== b && (a.style.width = cc11001100_hook("a.style.width", b + "px", "assign"));
    null !== c && (a.style.height = cc11001100_hook("a.style.height", c + "px", "assign"));
  }
  ;
  function Bn(a) {
    cc11001100_hook("a", a, "function-parameter");
    Cn(a);
    const b = cc11001100_hook("b", a.j.innerWidth, "var-init");
    a = cc11001100_hook("a", Ad(a.m).height || +a.m.height || 0, "assign");
    return new wc(b, a);
  }
  function Dn(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.ba) {
      var b = cc11001100_hook("b", a.l, "var-init");
      b && (b.style.display = cc11001100_hook("b.style.display", "none", "assign"));
      En(a, a.V, !0, !0);
      a.ba = cc11001100_hook("a.ba", !1, "assign");
    }
  }
  function Fn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.I = cc11001100_hook("a.I", "touchcancel", "assign");
    u.setTimeout(a.B.P(274, () => {
      "touchcancel" === a.I && (a.H = cc11001100_hook("a.H", 0, "assign"), a.N = cc11001100_hook("a.N", !1, "assign"), Gn(a));
    }), 1E3);
  }
  function Hn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b && b.touches) {
      a.I = cc11001100_hook("a.I", "touchend", "assign");
      var c = cc11001100_hook("c", b.touches.length, "var-init");
      2 > c ? u.setTimeout(a.B.P(256, () => {
        "touchend" === a.I && (a.H = cc11001100_hook("a.H", c, "assign"), a.N = cc11001100_hook("a.N", !1, "assign"), Gn(a));
      }), 1E3) : (a.H = cc11001100_hook("a.H", c, "assign"), Gn(a));
      !a.G || .05 > Math.abs(ye(a.j) - 1) || jn(a.v, !0);
    }
  }
  function In(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j, "var-init");
    G(b, "orientationchange", a.Ea);
    G(b, "resize", a.Va);
    G(b, "scroll", a.fb);
    G(b, "touchcancel", a.gb);
    G(b, "touchend", a.jb);
    G(b, "touchmove", a.lb);
    G(b, "touchstart", a.mb);
  }
  function Jn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j, "var-init");
    D(b, "orientationchange", a.Ea);
    D(b, "resize", a.Va);
    D(b, "scroll", a.fb);
    D(b, "touchcancel", a.gb);
    D(b, "touchend", a.jb);
    D(b, "touchmove", a.lb);
    D(b, "touchstart", a.mb);
    P(a, () => In(a));
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
    b = cc11001100_hook("b", new wn(b, a.j, a.m, a.C, a.A, () => {
      if (!a.ma) {
        a.ma = cc11001100_hook("a.ma", !0, "assign");
        In(a);
        var c = cc11001100_hook("c", a.l, "var-init");
        c && c.parentNode && c.parentNode.removeChild(c);
        En(a, a.V, !0, !0);
        c && (c.style.display = cc11001100_hook("c.style.display", "none", "assign"));
      }
    }, () => void Mn(a), a.B, a.zc, () => {
      a.U || (a.U = cc11001100_hook("a.U", !0, "assign"), Nn(a, null));
    }, () => {
      a.U && (a.U = cc11001100_hook("a.U", !1, "assign"), Nn(a, null));
    }), "assign");
    he(a, b);
    return b;
  }
  function Mn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.Sb && !a.Ya && (a.Ya = cc11001100_hook("a.Ya", !0, "assign"), a.B.xa(257, () => {
      const b = cc11001100_hook("b", {
          msg_type: cc11001100_hook("msg_type", "manual-send-view", "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", a.m.contentWindow, "var-init");
      c && c.postMessage(a.j.JSON.stringify(b), "*");
    }));
  }
  function On(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.Oa()) return !1;
    if (!a.G && a.ca) switch (a.A) {
      case "bottom":
        return a.J >= a.Ac || a.va;
      case "top":
        return a.J > Pn(a);
    }
    return .05 > Math.abs(ye(a.j) - 1);
  }
  function Qn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l, "var-init");
    if (b && a.m.parentElement) {
      yd(b, a.Y);
      var c = cc11001100_hook("c", a.j.innerWidth, "var-init");
      T(a.j).scrollWidth > c ? b.style.width = cc11001100_hook("b.style.width", c, "assign") : b.style.width = cc11001100_hook("b.style.width", "100%", "assign");
      Rn(a);
    }
  }
  function Sn(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l, "var-init");
    if (b) {
      var c = cc11001100_hook("c", a.v, "var-init"),
        d = cc11001100_hook("d", c.W, "var-init"),
        e = cc11001100_hook("e", U(d), "var-init");
      10 > Math.abs(e - c.I) || (d = cc11001100_hook("d", e + 10 + T(d).clientHeight > ze(d), "assign"), d = cc11001100_hook("d", 10 > e || d, "assign"), c.U || c.J || c.A || (c.v || d ? c.v && d && pn(c) : jn(c, !1)), c.I = cc11001100_hook("c.I", e, "assign"));
      a.ba || (c = cc11001100_hook("c", En, "assign"), Cn(a), e = cc11001100_hook("e", Dd(a.j.document.body, "padding"), "assign"), "bottom" == a.A && (e.bottom += cc11001100_hook("e.bottom", a.Y.height + 25, "assign")), c(a, e), b.style.display = cc11001100_hook("b.style.display", "block", "assign"), a.ba = cc11001100_hook("a.ba", !0, "assign"));
    }
  }
  function Tn(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.Za = cc11001100_hook("a.Za", !0, "assign");
    if (!a.G && On(a) && (a.fa || !a.oa)) {
      var b = cc11001100_hook("b", a.l, "var-init");
      b && (Qn(a), yn(a, c => {
        De(c);
      }, !0), tn(a.v, b), Sn(a), a.G = cc11001100_hook("a.G", !0, "assign"), (a = cc11001100_hook("a", a.m.contentWindow, "assign")) && Ul(a, "ig", {
        rr: cc11001100_hook("rr", "vis-aa", "object-key-init")
      }, "*", 2));
    }
  }
  function En(a, b, c = !0, d = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const e = cc11001100_hook("e", a.F.top - b.top, "var-init"),
      f = cc11001100_hook("f", U(a.j), "var-init");
    f < e && !d || (d = cc11001100_hook("d", a.j.document.body, "assign"), d.style.paddingTop = cc11001100_hook("d.style.paddingTop", b.top + "px", "assign"), d.style.paddingRight = cc11001100_hook("d.style.paddingRight", b.right + "px", "assign"), d.style.paddingBottom = cc11001100_hook("d.style.paddingBottom", b.bottom + "px", "assign"), d.style.paddingLeft = cc11001100_hook("d.style.paddingLeft", b.left + "px", "assign"), a.F = cc11001100_hook("a.F", b, "assign"), c && a.j.scrollTo(0, f - e));
  }
  function Rn(a) {
    cc11001100_hook("a", a, "function-parameter");
    yn(a, b => {
      yd(b, a.C);
      b.style.width = cc11001100_hook("b.style.width", "100%", "assign");
    }, !1, !0);
    a.m.style.display = cc11001100_hook("a.m.style.display", "block", "assign");
    a.m.style.margin = cc11001100_hook("a.m.style.margin", "0 auto", "assign");
    if (a.rb) {
      const b = cc11001100_hook("b", a.l, "var-init");
      dd(b, c => {
        gd(c, d => c === b && /display|bottom/i.test(d) ? !1 : !0);
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
    !a.X || a.ma || 2 <= a.H && a.N || !On(a) ? Dn(a) : (Tn(a), Sn(a));
  }
  function Nn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.ba ? Pn(a, a.U) : a.V.top, "var-init");
    if ("top" === a.A && a.j.document.body && a.X && a.v && a.G && a.F.top !== c && 0 !== b) {
      var d = cc11001100_hook("d", pd(a.F), "var-init");
      null === b ? (d.top = cc11001100_hook("d.top", c, "assign"), En(a, d)) : (0 < b && a.F.top > c && (d.top = cc11001100_hook("d.top", Math.max(c, a.F.top - b), "assign"), En(a, d, !1)), 0 > b && a.F.top < c && (d.top = cc11001100_hook("d.top", Math.min(c, a.F.top - b), "assign"), En(a, d, !1)));
    }
  }
  function Pn(a, b = !1) {
    cc11001100_hook("a", a, "function-parameter");
    return b ? a.V.top + 30 : a.V.top + 30 + a.Y.height - 5;
  }
  class Un extends zn {
    constructor(a, b, c, d) {
      var e = cc11001100_hook("e", Si, "var-init"),
        f = cc11001100_hook("f", Ri, "var-init");
      super(a, b, d);
      this.B = cc11001100_hook("this.B", e, "assign");
      this.zc = cc11001100_hook("this.zc", f, "assign");
      this.J = cc11001100_hook("this.J", this.ua = cc11001100_hook("this.ua", this.eb = cc11001100_hook("this.eb", 0, "assign"), "assign"), "assign");
      this.ma = cc11001100_hook("this.ma", this.qb = cc11001100_hook("this.qb", !1, "assign"), "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.N = cc11001100_hook("this.N", this.X = cc11001100_hook("this.X", !1, "assign"), "assign");
      this.I = cc11001100_hook("this.I", null, "assign");
      this.V = cc11001100_hook("this.V", Dd(b.document.body, "padding"), "assign");
      this.F = cc11001100_hook("this.F", Dd(b.document.body, "padding"), "assign");
      this.H = cc11001100_hook("this.H", 0, "assign");
      this.Za = cc11001100_hook("this.Za", this.G = cc11001100_hook("this.G", !1, "assign"), "assign");
      this.ba = cc11001100_hook("this.ba", !0, "assign");
      this.A = cc11001100_hook("this.A", c, "assign");
      this.C = cc11001100_hook("this.C", Bn(this), "assign");
      this.Y = cc11001100_hook("this.Y", null, "assign");
      this.ca = cc11001100_hook("this.ca", this.oa = cc11001100_hook("this.oa", this.fa = cc11001100_hook("this.fa", this.Ya = cc11001100_hook("this.Ya", this.rb = cc11001100_hook("this.rb", this.Sb = cc11001100_hook("this.Sb", !1, "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
      this.Ac = cc11001100_hook("this.Ac", Fc(b || window).height / 2, "assign");
      this.Wa = cc11001100_hook("this.Wa", Fc(b || window).height, "assign");
      this.Xa = cc11001100_hook("this.Xa", Hc(b), "assign");
      this.U = cc11001100_hook("this.U", this.va = cc11001100_hook("this.va", !1, "assign"), "assign");
      Dn(this);
      this.Ea = cc11001100_hook("this.Ea", this.B.P(266, () => {
        Gn(this);
      }), "assign");
      this.Va = cc11001100_hook("this.Va", this.B.P(267, () => {
        Gn(this);
      }), "assign");
      this.fb = cc11001100_hook("this.fb", this.B.P(268, () => {
        if (this.G && this.l && this.v) {
          var g = cc11001100_hook("g", this.v, "var-init");
          g.I = cc11001100_hook("g.I", U(g.W), "assign");
        }
        g = cc11001100_hook("g", U(this.j), "assign");
        const h = cc11001100_hook("h", g - this.eb, "var-init");
        Nn(this, h);
        this.ca && (0 < h && (this.J += cc11001100_hook("this.J", h, "assign")), this.va = cc11001100_hook("this.va", this.Xa - g <= this.Wa, "assign"), this.eb = cc11001100_hook("this.eb", g, "assign"));
        Gn(this);
      }), "assign");
      this.gb = cc11001100_hook("this.gb", this.B.P(269, () => {
        Fn(this);
      }), "assign");
      this.jb = cc11001100_hook("this.jb", this.B.P(270, g => {
        Hn(this, g);
      }), "assign");
      this.lb = cc11001100_hook("this.lb", this.B.P(271, g => {
        if (g && g.touches) {
          this.I = cc11001100_hook("this.I", "touchmove", "assign");
          this.H = cc11001100_hook("this.H", g.touches.length, "assign");
          this.N = cc11001100_hook("this.N", !0, "assign");
          Gn(this);
          if (!this.qb && g.touches && 0 != g.touches.length && g.touches[0]) {
            g = cc11001100_hook("g", g.touches[0].pageY, "assign");
            var h = cc11001100_hook("h", g - this.ua, "var-init");
            this.ua = cc11001100_hook("this.ua", g, "assign");
            g = cc11001100_hook("g", h, "assign");
          } else g = cc11001100_hook("g", 0, "assign");
          0 < g && (this.J += cc11001100_hook("this.J", g, "assign"));
          Nn(this, g);
        }
      }), "assign");
      this.mb = cc11001100_hook("this.mb", this.B.P(272, g => {
        g && g.touches && g.touches[0] && (this.I = cc11001100_hook("this.I", "touchstart", "assign"), this.H = cc11001100_hook("this.H", g.touches.length, "assign"), this.N = cc11001100_hook("this.N", !1, "assign"), Gn(this), this.ua = cc11001100_hook("this.ua", g.touches[0].pageY, "assign"), this.qb = cc11001100_hook("this.qb", (g = cc11001100_hook("g", g.target, "assign")) && "top" == this.A && this.X && this.v && rn(this.v) && 1 === g.nodeType ? Lc(rn(this.v), g) : !1, "assign"));
      }), "assign");
      this.wa = cc11001100_hook("this.wa", this.B.P(273, () => {
        this.ga();
      }), "assign");
      D(a, "load", this.wa);
      P(this, () => G(a, "load", this.wa));
    }
    ga() {
      if (this.fa) return !1;
      this.fa = cc11001100_hook("this.fa", !0, "assign");
      G(this.m, "load", this.wa);
      if (this.oa && !this.Za) return !1;
      Gn(this);
      return !0;
    }
    Oa() {
      return xe(this.j);
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
      return Nf(a);
    }
    ga() {
      if (!super.ga()) return !1;
      const a = cc11001100_hook("a", em(this.j, "top" === this.A ? 3 : 2), "var-init");
      a && a.displayAdLoadedContent(!this.ca);
      return !0;
    }
    Oa() {
      if (this.C.width > we) {
        var a = cc11001100_hook("a", this.j, "var-init");
        var b = cc11001100_hook("b", this.C.width, "var-init");
        a = cc11001100_hook("a", a.innerWidth >= b && a.innerHeight >= (b > we ? 650 : 0), "assign");
      } else a = cc11001100_hook("a", super.Oa(), "assign");
      return a;
    }
  }
  ;
  function Xn(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    try {
      if (!ld(c.origin) || a.A && !Ae(c, a.A.contentWindow)) return;
    } catch (f) {
      return;
    }
    const d = cc11001100_hook("d", b.msg_type, "var-init");
    let e;
    "string" === typeof d && (e = cc11001100_hook("e", a.Va[d], "assign")) && a.I.xa(168, () => {
      e.call(a, b, c);
    });
  }
  class Yn extends ge {
    constructor(a, b, c, d, e = {}) {
      super();
      this.j = cc11001100_hook("this.j", a, "assign");
      this.A = cc11001100_hook("this.A", b, "assign");
      this.I = cc11001100_hook("this.I", c, "assign");
      this.Oa = cc11001100_hook("this.Oa", d, "assign");
      this.Va = cc11001100_hook("this.Va", {}, "assign");
      this.mb = cc11001100_hook("this.mb", this.I.P(168, (f, g) => void Xn(this, f, g)), "assign");
      this.rb = cc11001100_hook("this.rb", this.I.P(169, (f, g) => {
        Qd(this.Oa, "ras::xsf", {
          c: cc11001100_hook("c", g.data.substring(0, 500), "object-key-init"),
          u: cc11001100_hook("u", this.j.location.href.substring(0, 500), "object-key-init")
        }, !0, .1);
        return !0;
      }), "assign");
      this.oa = cc11001100_hook("this.oa", [], "assign");
      this.ba(this.Va, e);
      this.oa.push(Sl(this.j, "sth", this.mb, this.rb));
    }
    za() {
      for (const a of this.oa) a();
      this.oa.length = cc11001100_hook("this.oa.length", 0, "assign");
      super.za();
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
      if ((b = cc11001100_hook("b", a.l, "assign")) && !a.v) {
        for (var d in Vn) !Vn.hasOwnProperty(d) || d in c || (c[d] = cc11001100_hook("c[d]", Vn[d], "assign"));
        a.Sb = cc11001100_hook("a.Sb", "true" === c.use_manual_view || "top" === a.A || !!S(a.j).wasReactiveAdConfigReceived[2], "assign");
        a.rb = cc11001100_hook("a.rb", "true" === c.use_important, "assign");
        if (d = cc11001100_hook("d", c.af_l, "assign")) a.oa = cc11001100_hook("a.oa", "true" === d, "assign");
        a.ca = cc11001100_hook("a.ca", "true" === c.wait_for_scroll || "top" == a.A, "assign");
        Kn(a, c);
        a.v = cc11001100_hook("a.v", Ln(a, c), "assign");
        c = cc11001100_hook("c", a.C.height + 5, "assign");
        "bottom" == a.A && om(a.j) && (c += cc11001100_hook("c", 20, "assign"));
        a.Y = cc11001100_hook("a.Y", new wc(a.C.width, c), "assign");
        a.va = cc11001100_hook("a.va", a.Wa >= a.Xa, "assign");
        c = cc11001100_hook("c", a.l, "assign");
        d = cc11001100_hook("d", a.v && rn(a.v), "assign");
        c && d && ("top" == a.A ? c.appendChild(d) : c.insertBefore(d, c.firstChild));
        Jn(a);
        a.X = cc11001100_hook("a.X", !0, "assign");
        b.setAttribute("data-anchor-status", "ready-to-display");
      }
      Tn(this.l);
    }
    ba(a) {
      a.dismiss = cc11001100_hook("a.dismiss", $b(() => {
        var b = cc11001100_hook("b", this.l, "var-init");
        b.v && jn(b.v, !0);
      }), "assign");
    }
  }
  ;
  var ao = cc11001100_hook("ao", class extends Rb {
      constructor(a) {
        super(a);
      }
    }, "var-init"),
    bo = cc11001100_hook("bo", Vb(ao), "var-init");
  function co(a) {
    cc11001100_hook("a", a, "function-parameter");
    eo(a, !1);
    const b = cc11001100_hook("b", a.l, "var-init");
    yn(a, c => {
      K(c, fo);
      De(c);
    }, !0);
    a.m.setAttribute("width", "");
    a.m.setAttribute("height", "");
    O(a.m, fo);
    O(a.m, go);
    O(b, ho);
    De(b);
    De(a.m);
  }
  function eo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.l, "var-init");
    b ? io(a, c) : (K(c, {
      display: cc11001100_hook("display", "none", "object-key-init")
    }), a.v && K(a.v, {
      display: cc11001100_hook("display", "none", "object-key-init")
    }), a.B && (u.clearInterval(a.B), a.B = cc11001100_hook("a.B", 0, "assign")), jo(a));
  }
  function ko(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.l, "var-init");
    if (!b) return !1;
    var d = cc11001100_hook("d", gi(b), "var-init");
    if (!d || !d.v()) return !1;
    d = cc11001100_hook("d", d.D, "assign");
    if (!d) return !1;
    a.v = cc11001100_hook("a.v", a.j.document.createElement("ins"), "assign");
    K(a.v, {
      display: cc11001100_hook("display", "inline-block", "object-key-init"),
      width: cc11001100_hook("width", "100%", "object-key-init")
    });
    Ah(a.v, d, Dh[b.l]);
    a.C();
    K(c, {
      position: cc11001100_hook("position", "absolute", "object-key-init")
    });
    eo(a, !0);
    return !0;
  }
  function io(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    K(b, {
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
    const b = cc11001100_hook("b", a.l, "var-init"),
      c = cc11001100_hook("c", a.j.innerHeight, "var-init");
    K(b, {
      height: cc11001100_hook("height", c + "px", "object-key-init")
    });
    a.j.scrollTo(0, wd(a.v).y);
    b && (K(b, {
      top: cc11001100_hook("top", "0", "object-key-init")
    }), a.v && K(a.v, {
      height: cc11001100_hook("height", c + "px", "object-key-init")
    }), K(b, {
      position: cc11001100_hook("position", "fixed", "object-key-init")
    }), a.A.body && "hidden" != a.A.body.style.overflow && (a.F = cc11001100_hook("a.F", a.A.body.style.overflow, "assign"), a.G = cc11001100_hook("a.G", a.A.documentElement.style.overflow, "assign"), a.A.body.style.overflow = cc11001100_hook("a.A.body.style.overflow", "hidden", "assign"), a.A.documentElement.style.overflow = cc11001100_hook("a.A.documentElement.style.overflow", "hidden", "assign")));
  }
  class mo extends zn {
    constructor(a, b, c) {
      super(a, b, c);
      this.F = cc11001100_hook("this.F", null, "assign");
      this.B = cc11001100_hook("this.B", 0, "assign");
      this.G = cc11001100_hook("this.G", null, "assign");
      this.I = cc11001100_hook("this.I", 0, "assign");
      this.A = cc11001100_hook("this.A", b.document, "assign");
      this.v = cc11001100_hook("this.v", null, "assign");
      this.H = cc11001100_hook("this.H", 0, "assign");
      co(this);
    }
    C() {
      if ("hidden" != this.A.body.style.overflow && "fixed" != this.A.body.style.position) {
        var a = cc11001100_hook("a", this.l, "var-init");
        const b = cc11001100_hook("b", this.j.innerHeight, "var-init");
        if (this.H < b) {
          const c = cc11001100_hook("c", {
            height: cc11001100_hook("height", b + "px", "object-key-init")
          }, "var-init");
          K(a, c);
          this.v && K(this.v, c);
          this.H = cc11001100_hook("this.H", b, "assign");
        }
        (a = cc11001100_hook("a", this.l, "assign")) && this.v && (this.I = cc11001100_hook("this.I", wd(this.v).y, "assign"), a.style.top != this.I + "px" && K(a, {
          top: cc11001100_hook("top", this.I + "px", "object-key-init")
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
      b = cc11001100_hook("b", Db(b, Ek, 1), "assign");
      var d = cc11001100_hook("d", [], "var-init");
      for (var e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
        var f = cc11001100_hook("f", b[e], "var-init");
        var g = cc11001100_hook("g", e, "var-init"),
          h = cc11001100_hook("h", a, "var-init"),
          l = cc11001100_hook("l", Bb(f, eh, 1), "var-init");
        if (l) {
          var k;
          if (k = cc11001100_hook("k", l, "assign")) {
            var m = cc11001100_hook("m", C(k, 7), "var-init");
            if (C(k, 1) || k.getId() || 0 < yb(k).length) {
              m = cc11001100_hook("m", yb(k), "assign");
              var n = cc11001100_hook("n", C(k, 3), "var-init"),
                q = cc11001100_hook("q", C(k, 1), "var-init"),
                r = cc11001100_hook("r", "", "var-init");
              q && (r += cc11001100_hook("r", q, "assign"));
              n && (r += cc11001100_hook("r", "#" + Vg(n), "assign"));
              if (m) for (n = cc11001100_hook("n", 0, "assign"); n < m.length; n++) r += cc11001100_hook("r", "." + Vg(m[n]), "assign");
              k = cc11001100_hook("k", (m = cc11001100_hook("m", r, "assign")) ? new Xg(m, Eb(k, 2), Eb(k, 5), Ok(C(k, 6))) : null, "assign");
            } else k = cc11001100_hook("k", m ? new Xg(m, Eb(k, 2), Eb(k, 5), Ok(C(k, 6))) : null, "assign");
          } else k = cc11001100_hook("k", null, "assign");
          (m = cc11001100_hook("m", k, "assign")) ? (k = cc11001100_hook("k", Rk[C(f, 2)], "assign"), r = cc11001100_hook("r", void 0 === k ? null : k, "assign"), null === r ? f = cc11001100_hook("f", null, "assign") : (k = cc11001100_hook("k", (k = cc11001100_hook("k", Bb(f, Ck, 3), "assign")) ? xb(k, 3) : null, "assign"), m = cc11001100_hook("m", new Vk(m, r), "assign"), r = cc11001100_hook("r", wb(f, 10, 0, !1, !!(B(f.O) & 2)).slice(0), "assign"), null != Eb(l, 5) && r.push(1), l = cc11001100_hook("l", Eb(f, 12), "assign"), r = cc11001100_hook("r", void 0 !== Ab(f, mh, 4) ? Bb(f, mh, 4) : null, "assign"), f = cc11001100_hook("f", 1 == C(f, 8) ? new $k(m, new Sk(Qk(Bb(f, Ck, 3), null)), k, 0, r, h, g, l, f) : 2 == C(f, 8) ? new $k(m, new Tk(f), k, 1, r, h, g, l, f) : null, "assign"))) : f = cc11001100_hook("f", null, "assign");
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
        node: cc11001100_hook("node", new Ef(c, !1).j(a.j) || void 0, "object-key-init"),
        tb: cc11001100_hook("tb", void 0, "object-key-init"),
        identifier: {}
      }, "assign");
      if (!c.node) throw Error("amac:n");
      b = cc11001100_hook("b", el(a.ra.j.j), "assign");
      if (null === b) throw Error("amac:p");
      return (c = cc11001100_hook("c", new ej(c, b).build(), "assign")) ? {
        kb: cc11001100_hook("kb", c, "object-key-init"),
        Cc: cc11001100_hook("Cc", a.La.j, "object-key-init")
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
    const b = cc11001100_hook("b", ze(a, !0), "var-init"),
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
      F = cc11001100_hook("F", Infinity, "var-init"),
      H = cc11001100_hook("H", null, "var-init");
    var N = cc11001100_hook("N", Aj({
      Kb: cc11001100_hook("Kb", !1, "object-key-init")
    }, a), "var-init");
    for (const M of N) {
      N = cc11001100_hook("N", M.getBoundingClientRect(), "assign");
      const Va = cc11001100_hook("Va", b - (N.bottom + f), "var-init");
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
                const Y = cc11001100_hook("Y", String(E.google_ad_format), "var-init");
                if (Y && Y.match) {
                  const ca = cc11001100_hook("ca", Y.match(/(\d+)x(\d+)/i), "var-init");
                  if (ca) {
                    const ob = cc11001100_hook("ob", parseInt(ca[1], 10), "var-init"),
                      Pa = cc11001100_hook("Pa", parseInt(ca[2], 10), "var-init");
                    if (0 < ob && 0 < Pa) {
                      var L = cc11001100_hook("L", {
                        width: cc11001100_hook("width", ob, "object-key-init"),
                        height: cc11001100_hook("height", Pa, "object-key-init")
                      }, "var-init");
                      break b;
                    }
                  }
                }
              } catch (Y) {}
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
      M.className && -1 != M.className.indexOf("google-auto-placed") ? (t += cc11001100_hook("t", 1, "assign"), M.className && -1 != M.className.indexOf("pedestal_container") && (H = cc11001100_hook("H", v, "assign"))) : (z = cc11001100_hook("z", Math.min(z, Va), "assign"), n.push(N), r += cc11001100_hook("r", 1, "assign"), h.push(v), m.push(v * A));
      F = cc11001100_hook("F", Math.min(F, Va), "assign");
      q.push(N);
    }
    z = cc11001100_hook("z", Infinity === z ? null : z, "assign");
    F = cc11001100_hook("F", Infinity === F ? null : F, "assign");
    f = cc11001100_hook("f", qo(n), "assign");
    q = cc11001100_hook("q", qo(q), "assign");
    h = cc11001100_hook("h", ro(b, h), "assign");
    n = cc11001100_hook("n", ro(b, g), "assign");
    m = cc11001100_hook("m", ro(b * c, m), "assign");
    L = cc11001100_hook("L", ro(b * c, k), "assign");
    return new so(a, {
      bc: cc11001100_hook("bc", e, "object-key-init"),
      Rb: cc11001100_hook("Rb", b, "object-key-init"),
      qc: cc11001100_hook("qc", c, "object-key-init"),
      oc: cc11001100_hook("oc", d, "object-key-init"),
      Qb: cc11001100_hook("Qb", r, "object-key-init"),
      Eb: cc11001100_hook("Eb", t, "object-key-init"),
      Fb: cc11001100_hook("Fb", to(g), "object-key-init"),
      Xb: cc11001100_hook("Xb", to(l), "object-key-init"),
      Wb: cc11001100_hook("Wb", to(k), "object-key-init"),
      mc: cc11001100_hook("mc", f, "object-key-init"),
      lc: cc11001100_hook("lc", q, "object-key-init"),
      kc: cc11001100_hook("kc", z, "object-key-init"),
      jc: cc11001100_hook("jc", F, "object-key-init"),
      ac: cc11001100_hook("ac", h, "object-key-init"),
      Zb: cc11001100_hook("Zb", n, "object-key-init"),
      Vb: cc11001100_hook("Vb", m, "object-key-init"),
      Ub: cc11001100_hook("Ub", L, "object-key-init"),
      rc: cc11001100_hook("rc", H, "object-key-init")
    });
  }
  function uo(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", po(a), "assign");
    return ((a.j.Fb || 0) * (a.j.Qb + a.j.Eb) + b) / (a.j.Rb + b);
  }
  function vo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Nc() && !(900 <= T(a.l).clientWidth), "var-init"),
      d = cc11001100_hook("d", Da([], e => Ga(a.m, e)).join(","), "var-init");
    return {
      wpc: cc11001100_hook("wpc", "", "object-key-init"),
      su: cc11001100_hook("su", b, "object-key-init"),
      eid: cc11001100_hook("eid", d, "object-key-init"),
      doc: cc11001100_hook("doc", a.j.bc, "object-key-init"),
      pg_h: cc11001100_hook("pg_h", Z(a.j.Rb), "object-key-init"),
      pg_w: cc11001100_hook("pg_w", Z(a.j.qc), "object-key-init"),
      pg_hs: cc11001100_hook("pg_hs", Z(a.j.oc), "object-key-init"),
      c: cc11001100_hook("c", Z(a.j.Qb), "object-key-init"),
      aa_c: cc11001100_hook("aa_c", Z(a.j.Eb), "object-key-init"),
      av_h: cc11001100_hook("av_h", Z(a.j.Fb), "object-key-init"),
      av_w: cc11001100_hook("av_w", Z(a.j.Xb), "object-key-init"),
      av_a: cc11001100_hook("av_a", Z(a.j.Wb), "object-key-init"),
      s: cc11001100_hook("s", Z(a.j.mc), "object-key-init"),
      all_s: cc11001100_hook("all_s", Z(a.j.lc), "object-key-init"),
      b: cc11001100_hook("b", Z(a.j.kc), "object-key-init"),
      all_b: cc11001100_hook("all_b", Z(a.j.jc), "object-key-init"),
      d: cc11001100_hook("d", Z(a.j.ac), "object-key-init"),
      all_d: cc11001100_hook("all_d", Z(a.j.Zb), "object-key-init"),
      ard: cc11001100_hook("ard", Z(a.j.Vb), "object-key-init"),
      all_ard: cc11001100_hook("all_ard", Z(a.j.Ub), "object-key-init"),
      pd_h: cc11001100_hook("pd_h", Z(a.j.rc), "object-key-init"),
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
    return uc.apply(null, Da(a, b => 0 < b)) || null;
  }
  function ro(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 >= a ? null : tc.apply(null, b) / a;
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
  function Z(a) {
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
    if (a.ma) Promise.resolve(!1);else {
      a.ma = cc11001100_hook("a.ma", !0, "assign");
      b = cc11001100_hook("b", Ce(b), "assign");
      a.ca = cc11001100_hook("a.ca", "true" === b["i-fvs"], "assign");
      var c = cc11001100_hook("c", b.i_expid, "var-init");
      c && (a.N = cc11001100_hook("a.N", c, "assign"));
      b.qid && (a.Y = cc11001100_hook("a.Y", b.qid, "assign"));
      a.F = cc11001100_hook("a.F", parseFloat(b.den_lim) || 0, "assign");
      b = cc11001100_hook("b", parseInt(b.sti_lt, 10), "assign");
      isNaN(b) || (a.V = cc11001100_hook("a.V", b, "assign"));
      a.J = cc11001100_hook("a.J", !0, "assign");
      if (Ao(a)) Promise.resolve(!1);else {
        var d = cc11001100_hook("d", new Wl(), "var-init"),
          e = cc11001100_hook("e", () => {
            Bo(a, {
              nip: cc11001100_hook("nip", 1, "object-key-init"),
              ph: cc11001100_hook("ph", ze(a.j, !0), "object-key-init"),
              vh: cc11001100_hook("vh", a.j.innerHeight, "object-key-init"),
              iplt: cc11001100_hook("iplt", Date.now() - a.U, "object-key-init"),
              ama: cc11001100_hook("ama", a.M, "object-key-init"),
              url: cc11001100_hook("url", a.j.location ? a.j.location.href : void 0, "object-key-init")
            }, .1);
            a.G.push("Could not locate a suitable placement in the content below the fold.");
            fm(a.j, a.G);
            d.resolve(!1);
          }, "var-init"),
          f = cc11001100_hook("f", (g, h) => {
            Bo(a, {
              iplt: cc11001100_hook("iplt", Date.now() - a.U, "object-key-init"),
              ama: cc11001100_hook("ama", a.M, "object-key-init"),
              y: cc11001100_hook("y", h, "object-key-init")
            }, .01);
            d.resolve(Co(a, g));
          }, "var-init");
        a.U = cc11001100_hook("a.U", Date.now(), "assign");
        a.M ? (b = cc11001100_hook("b", no(a.j, a.Ea), "assign")) && a.J && !Ao(a) ? f(b.kb, b.Cc) : (Bo(a, {
          amacerr: cc11001100_hook("amacerr", 1, "object-key-init")
        }, .1), e()) : oo(a.j).then(g => {
          if (a.J && !Ao(a)) return g.aa().then(h => {
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
    return a.ca ? !1 : S(a.j).wasReactiveAdVisible[8] ? (Bo(a, {
      vigs: cc11001100_hook("vigs", 1, "object-key-init")
    }, .1), !0) : !1;
  }
  function Bo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", b || {}, "assign");
    a.Y && (b.qid = cc11001100_hook("b.qid", a.Y, "assign"));
    a.N && (b.eid = cc11001100_hook("b.eid", a.N, "assign"));
    a.l && (b.tsl = cc11001100_hook("b.tsl", Date.now() - a.l, "assign"));
    a.X && (b.tslo = cc11001100_hook("b.tslo", Date.now() - a.X, "assign"), b.tl = cc11001100_hook("b.tl", a.va, "assign"));
    a.A.src && (b.req = cc11001100_hook("b.req", a.A.src, "assign"));
    Wi("sci_evt", b, c);
  }
  function Co(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Do(a) && Eo(a) && ko(a.m, b) && (a.l = cc11001100_hook("a.l", Date.now(), "assign"), Fo(a), a.ca ? Go(a) : a.Z.call(a.j, () => Ho(a)));
    fm(a.j, a.G);
    return !!a.l;
  }
  function Io(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.H = cc11001100_hook("a.H", !0, "assign");
    a.v = cc11001100_hook("a.v", !1, "assign");
    eo(a.m, !1);
    a.B && (G(a.j, "orientationchange", a.B), a.B = cc11001100_hook("a.B", null, "assign"));
    a.C && (G(a.j, "resize", a.C), a.C = cc11001100_hook("a.C", null, "assign"));
  }
  function Do(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j.innerHeight, "var-init");
    if (!b) return !1;
    var c = cc11001100_hook("c", a.j, "var-init");
    c = cc11001100_hook("c", T(c).scrollWidth <= T(c).clientWidth, "assign");
    let d;
    if (!xe(a.j)) return Bo(a, {
      lnd: cc11001100_hook("lnd", 1, "object-key-init")
    }, .1), a.G.push("Landscape is not supported"), !1;
    if (a.F && (d = cc11001100_hook("d", uo(a.j, b), "assign")) > a.F) return Bo(a, Object.assign({
      den: cc11001100_hook("den", d, "object-key-init"),
      lim: cc11001100_hook("lim", a.F, "object-key-init")
    }, vo(po(a.j), a.j.location.hostname)), 1), a.G.push(`Insertion would cause ad density greater than ${100 * a.F}%.`), !1;
    c || Bo(a, {
      Zc: cc11001100_hook("Zc", 1, "object-key-init")
    }, .1);
    return !0;
  }
  function Eo(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.fa ? !0 : wo(Q(yo), a.ga);
  }
  function Fo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.B = cc11001100_hook("a.B", Vi(519, () => {
      !a.H && a.v && Bo(a, {
        tto: cc11001100_hook("tto", Date.now() - a.l, "object-key-init"),
        por: cc11001100_hook("por", xe(a.j) ? 1 : 0, "object-key-init")
      }, .1);
    }), "assign");
    D(a.j, "orientationchange", a.B);
    a.C = cc11001100_hook("a.C", Vi(520, () => {
      a.H || (a.m.C(), a.v && Bo(a, {
        ttre: cc11001100_hook("ttre", Date.now() - a.l, "object-key-init")
      }, .1));
    }), "assign");
    D(a.j, "resize", a.C);
  }
  function Go(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.ua || (a.A.contentWindow.postMessage(JSON.stringify({
      msg_type: cc11001100_hook("msg_type", "i-view", "object-key-init")
    }), "https://googleads.g.doubleclick.net"), a.ua = cc11001100_hook("a.ua", !0, "assign"));
  }
  function Ho(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.H) if (Ao(a)) Io(a);else {
      var b = cc11001100_hook("b", a.m.l.getBoundingClientRect().top, "var-init"),
        c = cc11001100_hook("c", a.j.innerHeight, "var-init");
      a.m.C();
      .5 <= (c - b) / c && Go(a);
      b < c && (S(a.j).wasReactiveAdVisible[9] = cc11001100_hook("S(a.j).wasReactiveAdVisible[9]", !0, "assign"), a.fa || xo(Q(yo), a.ga), a.wa = cc11001100_hook("a.wa", !0, "assign"));
      0 >= b ? (0 <= a.V && Jo(a), Bo(a, {
        sice: cc11001100_hook("sice", !0, "object-key-init"),
        vh: cc11001100_hook("vh", c, "object-key-init"),
        gvto: cc11001100_hook("gvto", b, "object-key-init")
      }, .1)) : a.Z && a.Z.call(a.j, () => Ho(a));
    }
  }
  function Jo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.X = cc11001100_hook("a.X", Date.now(), "assign");
    a.v = cc11001100_hook("a.v", !0, "assign");
    a.va++;
    lo(a.m);
    u.setTimeout(() => {
      if (a.v) {
        a.v = cc11001100_hook("a.v", !1, "assign");
        var b = cc11001100_hook("b", a.m, "var-init");
        const c = cc11001100_hook("c", b.l, "var-init");
        K(c, {
          top: cc11001100_hook("top", wd(b.v).y + "px", "object-key-init")
        });
        K(c, {
          position: cc11001100_hook("position", "absolute", "object-key-init")
        });
        jo(b);
      }
    }, Math.max(0, a.V));
  }
  class Ko extends Zn {
    constructor(a, b, c, d, e, f) {
      super(a, b);
      this.ga = cc11001100_hook("this.ga", f, "assign");
      this.fa = cc11001100_hook("this.fa", d, "assign");
      this.H = cc11001100_hook("this.H", !1, "assign");
      this.N = cc11001100_hook("this.N", null, "assign");
      this.ca = cc11001100_hook("this.ca", this.J = cc11001100_hook("this.J", this.ma = cc11001100_hook("this.ma", !1, "assign"), "assign"), "assign");
      this.G = cc11001100_hook("this.G", [], "assign");
      this.v = cc11001100_hook("this.v", !1, "assign");
      this.va = cc11001100_hook("this.va", this.X = cc11001100_hook("this.X", this.l = cc11001100_hook("this.l", 0, "assign"), "assign"), "assign");
      this.C = cc11001100_hook("this.C", this.B = cc11001100_hook("this.B", this.Y = cc11001100_hook("this.Y", null, "assign"), "assign"), "assign");
      this.Z = cc11001100_hook("this.Z", u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || u.msRequestAnimationFrame, "assign");
      this.ua = cc11001100_hook("this.ua", !1, "assign");
      this.m = cc11001100_hook("this.m", new mo(b, a, e), "assign");
      this.wa = cc11001100_hook("this.wa", !1, "assign");
      this.U = cc11001100_hook("this.U", this.V = cc11001100_hook("this.V", 0, "assign"), "assign");
      this.M = cc11001100_hook("this.M", zb(c, 1, !1), "assign");
      this.Ea = cc11001100_hook("this.Ea", Bb(c, Gk, 2), "assign");
      this.F = cc11001100_hook("this.F", 0, "assign");
    }
    ba(a) {
      a["sti-fill"] = cc11001100_hook("a[\"sti-fill\"]", b => {
        zo(this, b);
      }, "assign");
      a["i-no"] = cc11001100_hook("a[\"i-no\"]", () => {
        this.J = cc11001100_hook("this.J", !1, "assign");
        !this.wa && this.l && Io(this);
      }, "assign");
    }
  }
  ;
  class Lo extends im {
    constructor() {
      super();
      this.K = cc11001100_hook("this.K", !1, "assign");
      this.C = cc11001100_hook("this.C", null, "assign");
      this.L = cc11001100_hook("this.L", !1, "assign");
    }
    F(a) {
      this.K = cc11001100_hook("this.K", !!a.enableAma, "assign");
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
      var d = cc11001100_hook("d", S(a), "var-init");
      if (d.wasReactiveAdConfigReceived[9]) return !1;
      const e = cc11001100_hook("e", new Lo(), "var-init");
      if (!hm(e, b)) return !1;
      d.wasReactiveAdConfigReceived[9] = cc11001100_hook("d.wasReactiveAdConfigReceived[9]", !0, "assign");
      if (!e.l && !wo(Q(yo), c)) return !1;
      b = cc11001100_hook("b", Kc(document, "INS"), "assign");
      b.className = cc11001100_hook("b.className", "adsbygoogle", "assign");
      K(b, {
        display: cc11001100_hook("display", "none", "object-key-init")
      });
      a.document.documentElement.appendChild(b);
      c = cc11001100_hook("c", e.B || {}, "assign");
      c.google_ad_client = cc11001100_hook("c.google_ad_client", e.m, "assign");
      c.google_ad_height = cc11001100_hook("c.google_ad_height", T(a).clientHeight || 0, "assign");
      c.google_ad_width = cc11001100_hook("c.google_ad_width", T(a).clientWidth || 0, "assign");
      c.google_reactive_ad_format = cc11001100_hook("c.google_reactive_ad_format", 9, "assign");
      d = cc11001100_hook("d", new ao(), "assign");
      ub(d, 1, e.K);
      if (e.C) {
        var f = cc11001100_hook("f", e.C, "var-init");
        qb(B(d.O));
        null == f && (f = cc11001100_hook("f", void 0, "assign"));
        vb(d, 2, f);
      }
      e.L && ub(d, 3, !0);
      a: {
        nb = cc11001100_hook("nb", !0, "assign");
        try {
          var g = cc11001100_hook("g", JSON.stringify(d.toJSON(), Sb), "var-init");
          break a;
        } finally {
          nb = cc11001100_hook("nb", !1, "assign");
        }
        g = cc11001100_hook("g", void 0, "assign");
      }
      c.google_rasc = cc11001100_hook("c.google_rasc", g, "assign");
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
    ba(a) {
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
      O(a.body, {
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
      O(a.body, "top", -this.l + "px");
    }
  }
  ;
  function So(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.l, "var-init");
    if (c) if (b) {
      b = cc11001100_hook("b", a.B, "assign");
      if (null == b.j) {
        var d = cc11001100_hook("d", b.l, "var-init");
        const e = cc11001100_hook("e", d.j.nextRestrictionId++, "var-init");
        d.j.maxZIndexRestrictions[e] = cc11001100_hook("d.j.maxZIndexRestrictions[e]", 2147483646, "assign");
        bn(d);
        b.j = cc11001100_hook("b.j", e, "assign");
      }
      K(c, {
        display: cc11001100_hook("display", "block", "object-key-init")
      });
      a.A.body && !a.v && (a.v = cc11001100_hook("a.v", Ro(a.A, a.j), "assign"));
      c.setAttribute("tabindex", "0");
      c.setAttribute("aria-hidden", "false");
      a.A.body.setAttribute("aria-hidden", "true");
    } else b = cc11001100_hook("b", a.B, "assign"), null != b.j && (d = cc11001100_hook("d", b.l, "assign"), delete d.j.maxZIndexRestrictions[b.j], bn(d), b.j = cc11001100_hook("b.j", null, "assign")), K(c, {
      display: cc11001100_hook("display", "none", "object-key-init")
    }), a.v && (a.v(), a.v = cc11001100_hook("a.v", null, "assign")), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true");
  }
  function To(a) {
    cc11001100_hook("a", a, "function-parameter");
    So(a, !1);
    const b = cc11001100_hook("b", a.l, "var-init");
    b && (yn(a, c => {
      K(c, Uo);
      De(c);
    }, !0), a.m.setAttribute("width", ""), a.m.setAttribute("height", ""), O(a.m, Uo), O(a.m, Vo), O(b, Wo), O(b, {
      background: cc11001100_hook("background", "transparent", "object-key-init")
    }), K(b, {
      display: cc11001100_hook("display", "none", "object-key-init"),
      position: cc11001100_hook("position", "fixed", "object-key-init")
    }), De(b), De(a.m));
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
      return Nf(a);
    }
  }
  ;
  function Zo(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.match(Oc), "assign");
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
    if (Fa(["data-google-vignette", "data-google-interstitial"], f => "false" === b.getAttribute(f) || !1)) return !1;
    const d = cc11001100_hook("d", b.href, "var-init"),
      e = cc11001100_hook("e", d && (d.match(Oc)[3] || null), "var-init");
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
      0 <= Ba(b, d) || b.push(d);
    }
    return b;
  }
  class fp {
    constructor(a) {
      this.j = cc11001100_hook("this.j", null, "assign");
      this.m = cc11001100_hook("this.m", a.match(Oc)[3] || "", "assign");
      this.v = cc11001100_hook("this.v", Zo(a), "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
    }
  }
  var cp = cc11001100_hook("cp", /^(www\.|m\.|mobile\.)*/i, "var-init");
  function gp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.l?.setAttribute("data-vignette-loaded", "true");
  }
  function hp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.Wa && (b.qid = cc11001100_hook("b.qid", a.Wa, "assign"));
    a.wa && (b.eid = cc11001100_hook("b.eid", a.wa, "assign"));
    a.ga && (b.lnk = cc11001100_hook("b.lnk", a.ga.substring(0, 100), "assign"), a.v.l || (b.inter = cc11001100_hook("b.inter", "1", "assign")));
    const d = cc11001100_hook("d", Ud(), "var-init");
    d && (b.ns = cc11001100_hook("b.ns", String(d), "assign"));
    b.fs = cc11001100_hook("b.fs", String(Td() - a.N), "assign");
    b.req = cc11001100_hook("b.req", a.A.src, "assign");
    b.ptt = cc11001100_hook("b.ptt", 9, "assign");
    null != a.B && (b.comm = cc11001100_hook("b.comm", !0, "assign"));
    Qd(a.Oa, "ia_evt", b, !0, c);
  }
  function ip(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.B && (Xl(a.B).then(() => {
      gp(a.M);
      jp(a);
    }), Yl(a.B).then(() => void kp(a)), Zl(a.B).then(() => {
      a.fa = cc11001100_hook("a.fa", !0, "assign");
    }));
  }
  function lp(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a.m) {
      a.m = cc11001100_hook("a.m", a.I.P(527, c => {
        mp(a, c);
      }), "assign");
      if (null !== a.m) {
        const c = cc11001100_hook("c", a.m, "var-init");
        D(a.j.document, "click", d => {
          c(d);
        }, bc);
      }
      var b = cc11001100_hook("b", a.j.frames, "var-init");
      for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) try {
        a.Ya(b[c].frameElement) || D(b[c].document, "click", a.m, bc);
      } catch (d) {}
    }
  }
  function jp(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.H || (a.H = cc11001100_hook("a.H", Td(), "assign"), hp(a, {
      aflvr: cc11001100_hook("aflvr", !0, "object-key-init"),
      al: cc11001100_hook("al", a.H - a.N, "object-key-init")
    }, .01));
  }
  function kp(a) {
    cc11001100_hook("a", a, "function-parameter");
    hp(a, {
      dis: cc11001100_hook("dis", Date.now() - a.C, "object-key-init"),
      dha: cc11001100_hook("dha", Number(a.Y), "object-key-init")
    }, .01);
    if (a.Y) np(a) ? a.j.history.back() : op(a);else if (u.setTimeout(() => {
      op(a);
    }, 1E3), a.l) {
      var b = cc11001100_hook("b", Date.now(), "var-init");
      a.j.addEventListener("pagehide", () => {
        hp(a, {
          pg_hid: cc11001100_hook("pg_hid", Date.now() - b, "object-key-init")
        }, .01);
      });
      a.V && (a.ca = cc11001100_hook("a.ca", !1, "assign"));
      pp(a, a.l.href);
    }
  }
  function np(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 !== a.j.location.hash.indexOf("google_vignette");
  }
  function op(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.C && (a.ua = cc11001100_hook("a.ua", !0, "assign"), a.m && (G(a.j.document, "click", a.m), a.m = cc11001100_hook("a.m", null, "assign")), a.G && a.G.parentNode && (a.G.parentNode.removeChild(a.G), a.G = cc11001100_hook("a.G", null, "assign")), a.F && a.F.parentNode && (a.F.parentNode.removeChild(a.F), a.F = cc11001100_hook("a.F", null, "assign")), So(a.M, !1), a.Xa());
  }
  function pp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.j.location, "assign");
    b = cc11001100_hook("b", Sc(b, Rc) || nc, "assign");
    if (b instanceof mc) var c = cc11001100_hook("c", b instanceof mc && b.constructor === mc ? b.j : "type_error:SafeUrl", "var-init");else {
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
    np(a) || (a.j.location.hash = cc11001100_hook("a.j.location.hash", "google_vignette", "assign"));
    a.V = cc11001100_hook("a.V", a.I.P(526, () => {
      a.ca && (np(a) ? (hp(a, {
        fnv: cc11001100_hook("fnv", 1, "object-key-init")
      }, .01), pp(a, a.l.href)) : (a.qb(), op(a)));
    }), "assign");
    u.setTimeout(ja(D, a.j, "hashchange", a.V), 0);
  }
  function rp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", Td(), "var-init"),
      d = cc11001100_hook("d", !S(a.j).wasReactiveAdVisible[9], "var-init");
    b = cc11001100_hook("b", ep(a.v, b), "assign");
    const e = cc11001100_hook("e", .05 > Math.abs(ye(a.j) - 1), "var-init"),
      f = cc11001100_hook("f", a.J.width < a.J.height === xe(a.j), "var-init");
    return 864E5 > c - a.N && a.Z && !a.fa && !np(a) && !!a.H && (a.gb || d) && !b.length && e && f;
  }
  function sp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Wc("LINK", a.j.document), "assign");
    a.setAttribute("rel", c);
    a.setAttribute("href", b);
    return a;
  }
  function tp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.G = cc11001100_hook("a.G", sp(a, b, "prerender"), "assign");
    a.F = cc11001100_hook("a.F", sp(a, b, "prefetch"), "assign");
    a.j.document.body.appendChild(a.G);
    a.j.document.body.appendChild(a.F);
  }
  function up(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (b = cc11001100_hook("b", b.target, "assign"); b;) {
      if ("nodeName" in b && "A" === b.nodeName) {
        if (dp(a.v, b, b.ownerDocument !== a.j.document)) return b;
        break;
      }
      b = cc11001100_hook("b", "parentElement" in b ? b.parentElement : null, "assign");
    }
    return null;
  }
  function mp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b && !b.defaultPrevented && !a.C && !a.K && !a.l) {
      var c = cc11001100_hook("c", up(a, b), "var-init");
      c && (rp(a, c) ? (a.l = cc11001100_hook("a.l", c, "assign"), md(b), b.preventDefault = cc11001100_hook("b.preventDefault", () => b && (b.preventDefaultTriggered = cc11001100_hook("b.preventDefaultTriggered", !0, "assign")), "assign"), u.setTimeout(x(a.lb, a, b), 0)) : vp(a, c, !1));
    }
  }
  function vp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", a.j, "var-init");
    var e = cc11001100_hook("e", S(d), "var-init");
    const f = cc11001100_hook("f", a.J.width < a.J.height !== xe(a.j), "var-init");
    e = cc11001100_hook("e", {
      zm: cc11001100_hook("zm", Number(.05 > Math.abs(ye(d) - 1)), "object-key-init"),
      sz: cc11001100_hook("sz", Number(f), "object-key-init"),
      fc: cc11001100_hook("fc", Number(a.Z), "object-key-init"),
      vp: cc11001100_hook("vp", Number(np(a)), "object-key-init"),
      al: cc11001100_hook("al", Number(!!a.H), "object-key-init"),
      fsi: cc11001100_hook("fsi", Number(!!e.wasReactiveAdVisible[9]), "object-key-init"),
      ag: cc11001100_hook("ag", Number(864E5 > Td() - a.N), "object-key-init")
    }, "assign");
    c && (e.wsdojl = cc11001100_hook("e.wsdojl", !0, "assign"));
    f && (e.rs_sz = cc11001100_hook("e.rs_sz", `${a.J.width}x${a.J.height}`, "assign"), e.cr_sz = cc11001100_hook("e.cr_sz", `${d.innerWidth}x${d.innerHeight}`, "assign"));
    b = cc11001100_hook("b", ep(a.v, b), "assign");
    b.length && (e.sw = cc11001100_hook("e.sw", b.join(), "assign"));
    a.ma && (e.ts = cc11001100_hook("e.ts", a.ma, "assign"));
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
      this.J = cc11001100_hook("this.J", e, "assign");
      this.H = cc11001100_hook("this.H", NaN, "assign");
      this.ua = cc11001100_hook("this.ua", !1, "assign");
      this.l = cc11001100_hook("this.l", null, "assign");
      this.Y = cc11001100_hook("this.Y", !1, "assign");
      this.Z = cc11001100_hook("this.Z", !0, "assign");
      this.fa = cc11001100_hook("this.fa", !1, "assign");
      this.ca = cc11001100_hook("this.ca", !0, "assign");
      this.ga = cc11001100_hook("this.ga", null, "assign");
      this.C = cc11001100_hook("this.C", 0, "assign");
      this.m = cc11001100_hook("this.m", this.G = cc11001100_hook("this.G", this.F = cc11001100_hook("this.F", null, "assign"), "assign"), "assign");
      this.V = cc11001100_hook("this.V", void 0, "assign");
      this.ma = cc11001100_hook("this.ma", null, "assign");
      this.wa = cc11001100_hook("this.wa", f.i_expid ?? null, "assign");
      this.N = cc11001100_hook("this.N", Td(), "assign");
      this.gb = cc11001100_hook("this.gb", "true" === f["i-fvs"], "assign");
      this.Wa = cc11001100_hook("this.Wa", f.qid ?? null, "assign");
      this.v = cc11001100_hook("this.v", new fp(a.location.href), "assign");
      this.jb = cc11001100_hook("this.jb", "true" === f.iobs && "IntersectionObserver" in this.j, "assign");
      this.qb = cc11001100_hook("this.qb", $b(() => void hp(this, {
        tth: cc11001100_hook("tth", Date.now() - this.C, "object-key-init")
      }, .01)), "assign");
      $o(this.v, f.stop_word?.split(";") ?? null);
      this.B = cc11001100_hook("this.B", h ? bm(a, b.contentWindow, c, g) : null, "assign");
      ip(this);
      lp(this);
    }
    ba(a, b) {
      a["i-blur"] = cc11001100_hook("a[\"i-blur\"]", () => {
        this.Y = cc11001100_hook("this.Y", !0, "assign");
        this.V && (this.ca = cc11001100_hook("this.ca", !0, "assign"));
      }, "assign");
      a["i-no"] = cc11001100_hook("a[\"i-no\"]", c => {
        this.Z = cc11001100_hook("this.Z", !1, "assign");
        this.ma = cc11001100_hook("this.ma", c.i_tslv ? c.i_tslv : null, "assign");
      }, "assign");
      b.fullscreenApi || (a["i-adframe-load"] = cc11001100_hook("a[\"i-adframe-load\"]", () => {
        gp(this.M);
        const c = cc11001100_hook("c", Q(vh).l(uh.j, uh.defaultValue), "var-init");
        0 < c ? setTimeout(() => jp(this), c) : jp(this);
      }, "assign"), a["i-dismiss"] = cc11001100_hook("a[\"i-dismiss\"]", () => {
        kp(this);
      }, "assign"), a.i_iif = cc11001100_hook("a.i_iif", () => {
        this.fa = cc11001100_hook("this.fa", !0, "assign");
      }, "assign"));
    }
    za() {
      super.za();
      np(this) && pp(this, this.l.href);
      this.m && (G(this.j.document, "click", this.m), this.m = cc11001100_hook("this.m", null, "assign"));
    }
    Xa() {}
    Ya() {
      return !1;
    }
    lb(a) {
      if (!this.C && this.l && !this.K) {
        a = cc11001100_hook("a", !!a.preventDefaultTriggered, "assign");
        var b = cc11001100_hook("b", dp(this.v, this.l, this.l.ownerDocument !== this.j.document), "var-init");
        !a && b && rp(this, this.l) ? this.Za() ? (hp(this, {
          lif: cc11001100_hook("lif", Td(), "object-key-init"),
          lase: cc11001100_hook("lase", this.H, "object-key-init"),
          latt: cc11001100_hook("latt", !!this.M.l?.getAttribute("data-vignette-loaded"), "object-key-init"),
          t: cc11001100_hook("t", 9, "object-key-init")
        }, .1), this.C = cc11001100_hook("this.C", Date.now(), "assign"), S(this.j).wasReactiveAdVisible[8] = cc11001100_hook("S(this.j).wasReactiveAdVisible[8]", !0, "assign"), this.ga = cc11001100_hook("this.ga", this.l.href.substring(0, 100), "assign"), this.jb || (this.B ? u.IntersectionObserver || Tl(this.B.Hb, "fullscreen", {
          eventType: cc11001100_hook("eventType", "visible", "object-key-init")
        }, "*") : this.A.contentWindow.postMessage(JSON.stringify({
          msg_type: cc11001100_hook("msg_type", "i-view", "object-key-init")
        }), "*")), tp(this, this.l.href), qp(this), D(this.j, "pagehide", this.I.P(528, () => {
          this.ua || hp(this, {
            ttr: cc11001100_hook("ttr", Date.now() - this.C, "object-key-init")
          }, .01);
          op(this);
        })), So(this.M, !0)) : pp(this, this.l.href) : (vp(this, this.l, a), a ? this.l = cc11001100_hook("this.l", null, "assign") : pp(this, this.l.href));
      }
    }
    Za() {
      return !0;
    }
  }, "var-init");
  function xp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b || a.j.document, "assign");
    if (!b.getElementById("vignette-style-id")) {
      var c = cc11001100_hook("c", Cc(b).createElement("STYLE"), "var-init");
      c.id = cc11001100_hook("c.id", "vignette-style-id", "assign");
      c.textContent = cc11001100_hook("c.textContent", "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}", "assign");
      b.head.appendChild(c);
      a.U.push(c);
    }
  }
  function yp(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    let d = cc11001100_hook("d", 0, "var-init");
    for (let e = cc11001100_hook("e", b.links.length, "var-init"); 0 <= e; e--) {
      const f = cc11001100_hook("f", b.links[e], "var-init");
      f && (f.classList.remove("google_vignette_inst"), dp(a.v, f, c) && !ep(a.v, f).length && (d++, f.classList.add("google_vignette_inst")));
    }
    return d;
  }
  class zp extends wp {
    constructor(a, b, c, d, e, f, g) {
      super(a, b, Si, new Yo(a, b, e), d, g);
      this.fb = cc11001100_hook("this.fb", f, "assign");
      this.U = cc11001100_hook("this.U", [], "assign");
      this.X = cc11001100_hook("this.X", 0, "assign");
      this.Ea = cc11001100_hook("this.Ea", yi(this.j.location, "google_ia_debug"), "assign");
      this.eb = cc11001100_hook("this.eb", c, "assign");
      this.Ea && (this.va(), this.X = cc11001100_hook("this.X", u.setInterval(x(this.va, this), 5E3), "assign"));
    }
    Xa() {
      if (this.Ea) {
        for (let b = cc11001100_hook("b", 0, "var-init"); b < this.U.length; ++b) {
          var a = cc11001100_hook("a", this.U[b], "var-init");
          (a = cc11001100_hook("a", a.ownerNode || a.owningElement || a, "assign")) && a.parentNode && a.parentNode.removeChild(a);
        }
        this.U = cc11001100_hook("this.U", [], "assign");
        this.X && u.clearInterval(this.X);
      }
    }
    va() {
      let a = cc11001100_hook("a", yp(this, this.j.document, !1), "var-init");
      xp(this);
      var b = cc11001100_hook("b", this.j.frames, "var-init");
      for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) try {
        a += cc11001100_hook("a", yp(this, b[c].document, !0), "assign"), xp(this, b[c].document);
      } catch (d) {}
      b = cc11001100_hook("b", em(this.j, 1), "assign");
      null != b && b.setLinksInstrumented(a);
    }
    Za() {
      return this.eb || xo(Q(yo), this.fb);
    }
    Ya(a) {
      return /aswift_[0-9]+/.test(a.id);
    }
  }
  ;
  function Ap(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.l.document.createElement("span"), "var-init"),
      c = cc11001100_hook("c", Math.round((Bp(a) - 50) / 2), "var-init");
    K(b, {
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
    D(b, "click", d);
    P(a, () => G(b, "click", d));
    return b;
  }
  function Cp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Number(Ad(a.j).height || a.j.height);
  }
  function Bp(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Number(Ad(a.j).width || a.j.width);
  }
  function Dp(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.l.document, "var-init");
    const c = cc11001100_hook("c", b.createElementNS("http://www.w3.org/2000/svg", "svg"), "var-init");
    K(c, {
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
      K(a, {
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
    "dismissed" !== a.v && (a.v = cc11001100_hook("a.v", b, "assign"), a.l.setAttribute("data-side-rail-status", a.v));
  }
  function Fp(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("dismissed" === a.v) var c = cc11001100_hook("c", !1, "var-init");else {
      c = cc11001100_hook("c", a.l, "assign");
      var d = cc11001100_hook("d", a.j, "var-init");
      var e = cc11001100_hook("e", a.position, "var-init");
      var f = cc11001100_hook("f", a.j.innerWidth, "var-init"),
        g = cc11001100_hook("g", a.j.innerHeight, "var-init"),
        h = cc11001100_hook("h", new Set([c]), "var-init"),
        l = cc11001100_hook("l", a.B.width + 15, "var-init"),
        k = cc11001100_hook("k", a.B.height + 35, "var-init");
      if (1200 > f || 650 > g) e = cc11001100_hook("e", null, "assign");else {
        var m = cc11001100_hook("m", S(d).sideRailAvailableSpace, "var-init"),
          n = cc11001100_hook("n", {
            W: cc11001100_hook("W", d, "object-key-init"),
            R: cc11001100_hook("R", f, "object-key-init"),
            T: cc11001100_hook("T", g, "object-key-init"),
            xb: cc11001100_hook("xb", h, "object-key-init")
          }, "var-init"),
          q = cc11001100_hook("q", `f-${Em(n.R)}x${Em(n.T)}`, "var-init");
        if (!m.has(q)) {
          m.set(q, 0);
          S(n.W).sideRailProcessedFixedElements.clear();
          q = cc11001100_hook("q", new Set([...Array.from(n.W.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...n.xb]), "assign");
          for (var r of Dm(n.W)) Bm(r, q) || Im(r, m, n);
        }
        n = cc11001100_hook("n", [], "assign");
        q = cc11001100_hook("q", .9 * g, "assign");
        var t = cc11001100_hook("t", U(d), "var-init"),
          z = cc11001100_hook("z", r = cc11001100_hook("r", (g - q) / 2, "assign"), "var-init"),
          F = cc11001100_hook("F", q / 7, "var-init");
        for (let Va = cc11001100_hook("Va", 0, "var-init"); 8 > Va; Va++) {
          var H = cc11001100_hook("H", n, "var-init"),
            N = cc11001100_hook("N", H.push, "var-init");
          c: {
            var v = cc11001100_hook("v", z, "var-init");
            var A = cc11001100_hook("A", e, "var-init"),
              E = cc11001100_hook("E", m, "var-init"),
              L = cc11001100_hook("L", {
                W: cc11001100_hook("W", d, "object-key-init"),
                R: cc11001100_hook("R", f, "object-key-init"),
                T: cc11001100_hook("T", g, "object-key-init"),
                xb: cc11001100_hook("xb", h, "object-key-init")
              }, "var-init");
            const Y = cc11001100_hook("Y", Gm({
                position: cc11001100_hook("position", A, "object-key-init"),
                Qa: cc11001100_hook("Qa", v, "object-key-init"),
                R: cc11001100_hook("R", L.R, "object-key-init"),
                T: cc11001100_hook("T", L.T, "object-key-init")
              }), "var-init"),
              ca = cc11001100_hook("ca", Fm({
                position: cc11001100_hook("position", A, "object-key-init"),
                Qa: cc11001100_hook("Qa", v, "object-key-init"),
                scrollY: cc11001100_hook("scrollY", t, "object-key-init"),
                R: cc11001100_hook("R", L.R, "object-key-init"),
                T: cc11001100_hook("T", L.T, "object-key-init")
              }), "var-init");
            if (E.has(ca)) {
              v = cc11001100_hook("v", Hm(E.get(Y), E.get(ca)), "assign");
              break c;
            }
            const ob = cc11001100_hook("ob", "left" === A ? 20 : L.R - 20, "var-init");
            let Pa = cc11001100_hook("Pa", ob, "var-init");
            A = cc11001100_hook("A", .3 * L.R / 5 * ("left" === A ? 1 : -1), "assign");
            for (let Li = cc11001100_hook("Li", 0, "var-init"); 6 > Li; Li++) {
              const Yc = cc11001100_hook("Yc", lm(L.W.document, Math.round(Pa), Math.round(v)), "var-init");
              var M = cc11001100_hook("M", Bm(Yc, L.xb), "var-init");
              const Mi = cc11001100_hook("Mi", Cm(Yc, L.W), "var-init");
              if (!M && null !== Mi) {
                Im(Mi, E, L);
                E.delete(ca);
                break;
              }
              M || (M = cc11001100_hook("M", Yc.offsetHeight >= .25 * L.T, "assign"), M = cc11001100_hook("M", Yc.offsetWidth >= .9 * L.R && M, "assign"));
              if (M) E.set(ca, Math.round(Math.abs(Pa - ob) + 20));else if (Pa !== ob) Pa -= cc11001100_hook("Pa", A, "assign"), A /= cc11001100_hook("A", 2, "assign");else {
                E.set(ca, 0);
                break;
              }
              Pa += cc11001100_hook("Pa", A, "assign");
            }
            v = cc11001100_hook("v", Hm(E.get(Y), E.get(ca)), "assign");
          }
          N.call(H, v);
          z += cc11001100_hook("z", F, "assign");
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
          offsetY: cc11001100_hook("offsetY", f + g[r] * d, "object-key-init")
        }, "assign"), q.width >= l && q.height >= k) {
          m = cc11001100_hook("m", q, "assign");
          break;
        }
        e = cc11001100_hook("e", m, "assign");
      }
      e ? (l = cc11001100_hook("l", Math.round(e.width - a.B.width - 15), "assign"), a.A = cc11001100_hook("a.A", Math.min(a.A ?? l, l), "assign"), a.offsetY = cc11001100_hook("a.offsetY", Math.round(e.offsetY), "assign"), K(c, {
        margin: cc11001100_hook("margin", "0px", "object-key-init"),
        padding: cc11001100_hook("padding", "0px", "object-key-init"),
        position: cc11001100_hook("position", "fixed", "object-key-init"),
        [a.position]: cc11001100_hook(a.position, a.A + "px", "object-key-init"),
        top: cc11001100_hook("top", a.offsetY + "px", "object-key-init"),
        transition: cc11001100_hook("transition", "all 500ms ease-in", "object-key-init"),
        overflow: cc11001100_hook("overflow", "visible", "object-key-init")
      }), a.F || K(c, {
        "z-index": cc11001100_hook("z-index", "2147483647", "object-key-init")
      }), c = cc11001100_hook("c", !0, "assign")) : c = cc11001100_hook("c", !1, "assign");
    }
    c ? Gp(a, b) : No(a, b);
  }
  function No(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    "displayed" === a.v && (K(a.l, {
      transition: cc11001100_hook("transition", "all 500ms ease-in", "object-key-init"),
      opacity: cc11001100_hook("opacity", "0", "object-key-init"),
      top: cc11001100_hook("top", a.offsetY + b + "px", "object-key-init")
    }), clearTimeout(a.C), a.C = cc11001100_hook("a.C", setTimeout(() => {
      Oo(a, "idle");
      K(a.l, {
        display: cc11001100_hook("display", "none", "object-key-init")
      });
    }, 500), "assign"));
  }
  function Gp(a, b = 0) {
    cc11001100_hook("a", a, "function-parameter");
    "idle" === a.v && (K(a.l, {
      transition: cc11001100_hook("transition", "", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init"),
      opacity: cc11001100_hook("opacity", "0", "object-key-init"),
      top: cc11001100_hook("top", a.offsetY - b + "px", "object-key-init")
    }), clearTimeout(a.C), a.C = cc11001100_hook("a.C", setTimeout(() => {
      Oo(a, "displayed");
      K(a.l, {
        transition: cc11001100_hook("transition", "all 500ms ease-in", "object-key-init"),
        opacity: cc11001100_hook("opacity", "1", "object-key-init"),
        top: cc11001100_hook("top", a.offsetY + "px", "object-key-init")
      });
    }, 10), "assign"));
  }
  var Hp = cc11001100_hook("Hp", class extends zn {
    constructor(a, b, c, d, e, f, g) {
      super(a, b, c);
      this.B = cc11001100_hook("this.B", e, "assign");
      this.F = cc11001100_hook("this.F", g, "assign");
      this.v = cc11001100_hook("this.v", "idle", "assign");
      this.offsetY = cc11001100_hook("this.offsetY", this.C = cc11001100_hook("this.C", 0, "assign"), "assign");
      this.A = cc11001100_hook("this.A", null, "assign");
      this.G = cc11001100_hook("this.G", 0, "assign");
      this.position = cc11001100_hook("this.position", 3 === d ? "left" : "right", "assign");
      new Ep(a, b, c, this.position, () => {
        No(this, -30);
        Oo(this, "dismissed");
      });
      Oo(this, "idle");
      K(c, {
        display: cc11001100_hook("display", "none", "object-key-init")
      });
      const h = cc11001100_hook("h", f.P(273, () => {
        Fp(this);
      }), "var-init");
      D(a, "load", h);
      P(this, () => G(a, "load", h));
      const l = cc11001100_hook("l", f.P(267, () => {
        this.A = cc11001100_hook("this.A", null, "assign");
        Fp(this);
      }), "var-init");
      D(b, "resize", l);
      P(this, () => G(b, "resize", l));
      const k = cc11001100_hook("k", f.P(268, ac(() => {
        const m = cc11001100_hook("m", U(this.j), "var-init");
        Fp(this, this.B.height / 3 * Math.sign(this.G - m));
        this.G = cc11001100_hook("this.G", m, "assign");
      })), "var-init");
      D(b, "scroll", k, cc);
      P(this, () => G(b, "scroll", k));
      this.F && dn(this.F, m => {
        K(c, {
          "z-index": cc11001100_hook("z-index", String(m || 2147483647), "object-key-init")
        });
      });
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
      const d = cc11001100_hook("d", S(a), "var-init");
      if (d.wasReactiveAdConfigReceived[8]) return !1;
      const e = cc11001100_hook("e", new im(), "var-init");
      if (!hm(e, b)) return !1;
      d.wasReactiveAdConfigReceived[8] = cc11001100_hook("d.wasReactiveAdConfigReceived[8]", !0, "assign");
      if (!e.l && !wo(Q(yo), c)) return !1;
      b = cc11001100_hook("b", Wc("INS"), "assign");
      b.className = cc11001100_hook("b.className", "adsbygoogle", "assign");
      K(b, {
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
          return Q(Jp);
        case 9:
          return Q(Mo);
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
            new Po(a, new Hp(c, a, d, f, new wc(b.google_ad_width, b.google_ad_height), Si, wh(rh) ? new en(a) : void 0));
            break a;
          case 8:
            new zp(a, c, "on" == b.google_adtest, new wc(b.google_ad_width, b.google_ad_height), d, e, b.google_reactive_fill_message);
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
    const b = cc11001100_hook("b", Q(vh), "var-init");
    b.j = cc11001100_hook("b.j", (c, d) => ie(5, a, () => !1)(c, d, 1), "assign");
    b.l = cc11001100_hook("b.l", (c, d) => ie(6, a, () => 0)(c, d, 1), "assign");
    b.v = cc11001100_hook("b.v", (c, d) => ie(7, a, () => "")(c, d, 1), "assign");
    b.A = cc11001100_hook("b.A", (c, d) => ie(8, a, () => [])(c, d, 1), "assign");
    b.m = cc11001100_hook("b.m", () => {
      ie(15, a, () => {})(1);
    }, "assign");
  }
  ;
  function Np({
    Yb: a,
    xc: b
  }) {
    return a || ("dev" === b ? "dev" : "");
  }
  ;
  function Op(a) {
    cc11001100_hook("a", a, "function-parameter");
    Si.Cb(b => {
      b.shv = cc11001100_hook("b.shv", String(a), "assign");
      b.mjsv = cc11001100_hook("b.mjsv", Np({
        Yb: cc11001100_hook("Yb", "m202303210101", "object-key-init"),
        xc: cc11001100_hook("xc", a, "object-key-init")
      }), "assign");
      const c = cc11001100_hook("c", Q(ke).j(), "var-init");
      u.google_ad_modifications || (u.google_ad_modifications = cc11001100_hook("u.google_ad_modifications", {}, "assign"));
      var d = cc11001100_hook("d", u.google_ad_modifications, "var-init");
      d.eids || (d.eids = cc11001100_hook("d.eids", [], "assign"));
      b.eid = cc11001100_hook("b.eid", c.concat(d.eids).join(","), "assign");
    });
  }
  ;
  var Pp = cc11001100_hook("Pp", "undefined" === typeof sttc ? void 0 : sttc, "var-init");
  function Qp() {
    var a = cc11001100_hook("a", Si, "var-init");
    try {
      return Ub(Pp, de), new dm(JSON.parse(Pp));
    } catch (b) {
      a.Pa(838, b instanceof Error ? b : Error(String(b)), void 0, c => {
        c.jspb = cc11001100_hook("c.jspb", String(Pp), "assign");
      });
    }
    return new dm();
  }
  ;
  Ui(210, () => {
    var a = cc11001100_hook("a", Qp(), "var-init"),
      b = cc11001100_hook("b", C(a, 2), "var-init");
    Op(null == b ? "" : b);
    a = cc11001100_hook("a", zb(a, 6), "assign");
    Ub(gm, ee);
    gm = cc11001100_hook("gm", a, "assign");
    a = cc11001100_hook("a", u.ggeac || (u.ggeac = cc11001100_hook("u.ggeac", {}, "assign")), "assign");
    je(Q(ke), a);
    Mp(a);
    Q(Lp);
    Q(vh).m();
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
}).call(this, "[2021,\"r20230322\",\"r20110914\",null,null,null,null,\".google.cn\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759842,44777877,44759927,44759876]]");