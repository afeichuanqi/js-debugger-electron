(function () {
  'use strict';

  /*
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  */
  var k = cc11001100_hook("k", this || self, "var-init");
  function l(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.split("."), "assign");
    var d = cc11001100_hook("d", k, "var-init");
    a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
    for (var c; a.length && (c = cc11001100_hook("c", a.shift(), "assign"));) a.length || void 0 === b ? d[c] && d[c] !== Object.prototype[c] ? d = cc11001100_hook("d", d[c], "assign") : d = cc11001100_hook("d", d[c] = cc11001100_hook("d[c]", {}, "assign"), "assign") : d[c] = cc11001100_hook("d[c]", b, "assign");
  }
  ;
  var m, n;
  a: {
    for (var p = cc11001100_hook("p", ["CLOSURE_FLAGS"], "var-init"), q = cc11001100_hook("q", k, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < p.length; r++) if (q = cc11001100_hook("q", q[p[r]], "assign"), null == q) {
      n = cc11001100_hook("n", null, "assign");
      break a;
    }
    n = cc11001100_hook("n", q, "assign");
  }
  var t = cc11001100_hook("t", n && n[610401301], "var-init");
  m = cc11001100_hook("m", null != t ? t : !1, "assign");
  var u;
  const v = cc11001100_hook("v", k.navigator, "var-init");
  u = cc11001100_hook("u", v ? v.userAgentData || null : null, "assign");
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    return m ? u ? u.brands.some(({
      brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1;
  }
  function x(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    a: {
      if (b = cc11001100_hook("b", k.navigator, "assign")) if (b = cc11001100_hook("b", b.userAgent, "assign")) break a;
      b = cc11001100_hook("b", "", "assign");
    }
    return -1 != b.indexOf(a);
  }
  ;
  function y() {
    return m ? !!u && 0 < u.brands.length : !1;
  }
  function z() {
    return y() ? w("Chromium") : (x("Chrome") || x("CriOS")) && !(y() ? 0 : x("Edge")) || x("Silk");
  }
  ;
  var aa = cc11001100_hook("aa", y() ? !1 : x("Trident") || x("MSIE"), "var-init");
  !x("Android") || z();
  z();
  x("Safari") && (z() || (y() ? 0 : x("Coast")) || (y() ? 0 : x("Opera")) || (y() ? 0 : x("Edge")) || (y() ? w("Microsoft Edge") : x("Edg/")) || y() && w("Opera"));
  var A = cc11001100_hook("A", {}, "var-init"),
    B = cc11001100_hook("B", null, "var-init");
  var C = cc11001100_hook("C", "undefined" !== typeof Uint8Array, "var-init");
  const ba = cc11001100_hook("ba", !aa && "function" === typeof k.btoa, "var-init");
  const D = cc11001100_hook("D", Symbol(), "var-init");
  function E(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (D) return a[D] |= cc11001100_hook("a[D]", b, "assign");
    if (void 0 !== a.i) return a.i |= cc11001100_hook("a.i", b, "assign");
    Object.defineProperties(a, {
      i: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return b;
  }
  function H(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    D ? b = cc11001100_hook("b", a[D], "assign") : b = cc11001100_hook("b", a.i, "assign");
    return null == b ? 0 : b;
  }
  function I(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    D ? a[D] = cc11001100_hook("a[D]", b, "assign") : void 0 !== a.i ? a.i = cc11001100_hook("a.i", b, "assign") : Object.defineProperties(a, {
      i: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return a;
  }
  function J(a) {
    cc11001100_hook("a", a, "function-parameter");
    E(a, 16);
    return a;
  }
  function ca(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    I(b, (a | 0) & -51);
  }
  function K(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    I(b, (a | 18) & -41);
  }
  ;
  var L = cc11001100_hook("L", {}, "var-init");
  function M(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var N = cc11001100_hook("N", Object.freeze(I([], 23)), "var-init");
  function O(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && M(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
  function P(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.j + a.s, "var-init");
    return a.o || (a.o = cc11001100_hook("a.o", a.l[b] = cc11001100_hook("a.l[b]", {}, "assign"), "assign"));
  }
  function Q(a, b, d, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.m && (a.m = cc11001100_hook("a.m", void 0, "assign"));
    b >= a.j || c ? P(a)[b] = cc11001100_hook("P(a)[b]", d, "assign") : (a.l[b + a.s] = cc11001100_hook("a.l[b + a.s]", d, "assign"), (a = cc11001100_hook("a", a.o, "assign")) && b in a && delete a[b]);
  }
  function R(a, b, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var c = cc11001100_hook("c", -1 === d ? null : d >= a.j ? a.o ? a.o[d] : void 0 : a.l[d + a.s], "var-init");
    var f = cc11001100_hook("f", !1, "var-init");
    if (null == c || "object" !== typeof c || (f = cc11001100_hook("f", Array.isArray(c), "assign")) || c.u !== L) {
      if (f) {
        f = cc11001100_hook("f", H(a.l), "assign");
        const e = cc11001100_hook("e", H(c), "var-init");
        let g = cc11001100_hook("g", e, "var-init");
        0 === g && (g |= cc11001100_hook("g", f & 16, "assign"));
        g |= cc11001100_hook("g", f & 2, "assign");
        g !== e && I(c, g);
        b = cc11001100_hook("b", new b(c), "assign");
      } else b = cc11001100_hook("b", void 0, "assign");
    } else b = cc11001100_hook("b", c, "assign");
    b !== c && null != b && Q(a, d, b, !1);
    c = cc11001100_hook("c", b, "assign");
    if (null == c) return c;
    H(a.l) & 2 || (b = cc11001100_hook("b", c, "assign"), H(b.l) & 2 && (f = cc11001100_hook("f", S(b, !1), "assign"), f.m = cc11001100_hook("f.m", b, "assign"), b = cc11001100_hook("b", f, "assign")), b !== c && (c = cc11001100_hook("c", b, "assign"), Q(a, d, c, !1)));
    return c;
  }
  ;
  let T;
  function da(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    T = cc11001100_hook("T", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    T = cc11001100_hook("T", void 0, "assign");
    return a;
  }
  ;
  function ea(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (H(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), O(a), a;
        } else if (C && null != a && a instanceof Uint8Array) {
          if (ba) {
            for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
            b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
            a = cc11001100_hook("a", btoa(b), "assign");
          } else {
            void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
            if (!B) {
              B = cc11001100_hook("B", {}, "assign");
              for (var d = cc11001100_hook("d", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), c = cc11001100_hook("c", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), f = cc11001100_hook("f", 0, "var-init"); 5 > f; f++) {
                var e = cc11001100_hook("e", d.concat(c[f].split("")), "var-init");
                A[f] = cc11001100_hook("A[f]", e, "assign");
                for (var g = cc11001100_hook("g", 0, "var-init"); g < e.length; g++) {
                  var h = cc11001100_hook("h", e[g], "var-init");
                  void 0 === B[h] && (B[h] = cc11001100_hook("B[h]", g, "assign"));
                }
              }
            }
            b = cc11001100_hook("b", A[b], "assign");
            d = cc11001100_hook("d", Array(Math.floor(a.length / 3)), "assign");
            c = cc11001100_hook("c", b[64] || "", "assign");
            for (f = cc11001100_hook("f", e = cc11001100_hook("e", 0, "assign"), "assign"); e < a.length - 2; e += cc11001100_hook("e", 3, "assign")) {
              var F = cc11001100_hook("F", a[e], "var-init"),
                G = cc11001100_hook("G", a[e + 1], "var-init");
              h = cc11001100_hook("h", a[e + 2], "assign");
              g = cc11001100_hook("g", b[F >> 2], "assign");
              F = cc11001100_hook("F", b[(F & 3) << 4 | G >> 4], "assign");
              G = cc11001100_hook("G", b[(G & 15) << 2 | h >> 6], "assign");
              h = cc11001100_hook("h", b[h & 63], "assign");
              d[f++] = cc11001100_hook("d[f++]", g + F + G + h, "assign");
            }
            g = cc11001100_hook("g", 0, "assign");
            h = cc11001100_hook("h", c, "assign");
            switch (a.length - e) {
              case 2:
                g = cc11001100_hook("g", a[e + 1], "assign"), h = cc11001100_hook("h", b[(g & 15) << 2] || c, "assign");
              case 1:
                a = cc11001100_hook("a", a[e], "assign"), d[f] = cc11001100_hook("d[f]", b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + c, "assign");
            }
            a = cc11001100_hook("a", d.join(""), "assign");
          }
          return a;
        }
    }
    return a;
  }
  ;
  function fa(a, b, d, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", U(a, b, d, void 0 !== c), "assign");else if (M(a)) {
        const f = cc11001100_hook("f", {}, "var-init");
        for (let e in a) f[e] = cc11001100_hook("f[e]", fa(a[e], b, d, c), "assign");
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", b(a, c), "assign");
      return a;
    }
  }
  function U(a, b, d, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const f = cc11001100_hook("f", H(a), "var-init");
    c = cc11001100_hook("c", c ? !!(f & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) a[e] = cc11001100_hook("a[e]", fa(a[e], b, d, c), "assign");
    d(f, a);
    return a;
  }
  function ha(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.u === L ? a.toJSON() : ea(a);
  }
  function ia(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && O(b);
  }
  ;
  function ja(a, b, d = K) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if (C && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const c = cc11001100_hook("c", H(a), "var-init");
        if (c & 2) return a;
        if (b && !(c & 32) && (c & 16 || 0 === c)) return I(a, c | 18), a;
        a = cc11001100_hook("a", U(a, ja, c & 4 ? K : d, !0), "assign");
        b = cc11001100_hook("b", H(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.u === L ? ka(a) : a;
    }
  }
  function la(a, b, d, c, f, e, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    if (a = cc11001100_hook("a", a.i && a.i[d], "assign")) {
      c = cc11001100_hook("c", H(a), "assign");
      c & 2 ? c = cc11001100_hook("c", a, "assign") : (e = cc11001100_hook("e", Array.prototype.map.call(a, ka, void 0), "assign"), K(c, e), Object.freeze(e), c = cc11001100_hook("c", e, "assign"));
      if (H(b.l) & 2) throw Error();
      null == c ? e = cc11001100_hook("e", N, "assign") : (e = cc11001100_hook("e", [], "assign"), E(e, 1));
      g = cc11001100_hook("g", e, "assign");
      if (null != c) {
        e = cc11001100_hook("e", !!c.length, "assign");
        for (a = cc11001100_hook("a", 0, "assign"); a < c.length; a++) {
          const h = cc11001100_hook("h", c[a], "var-init");
          e = cc11001100_hook("e", e && !(H(h.l) & 2), "assign");
          g[a] = cc11001100_hook("g[a]", h.l, "assign");
        }
        e = cc11001100_hook("e", (e ? 8 : 0) | 1, "assign");
        a = cc11001100_hook("a", H(g), "assign");
        (a & e) !== e && (Object.isFrozen(g) && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign")), I(g, a | e));
        b.i || (b.i = cc11001100_hook("b.i", {}, "assign"));
        b.i[d] = cc11001100_hook("b.i[d]", c, "assign");
      } else b.i && (b.i[d] = cc11001100_hook("b.i[d]", void 0, "assign"));
      Q(b, d, g, f);
    } else {
      c = cc11001100_hook("c", ja(c, e, g), "assign");
      if (H(b.l) & 2) throw Error();
      Q(b, d, c, f);
    }
  }
  function ka(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (H(a.l) & 2) return a;
    a = cc11001100_hook("a", S(a, !0), "assign");
    E(a.l, 18);
    return a;
  }
  function S(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const d = cc11001100_hook("d", a.l, "var-init");
    var c = cc11001100_hook("c", J([]), "var-init"),
      f = cc11001100_hook("f", a.constructor.i, "var-init");
    f && c.push(f);
    f = cc11001100_hook("f", a.o, "assign");
    if (f) {
      c.length = cc11001100_hook("c.length", d.length, "assign");
      var e = cc11001100_hook("e", {}, "var-init");
      c[c.length - 1] = cc11001100_hook("c[c.length - 1]", e, "assign");
    }
    0 !== (H(d) & 128) && O(c);
    b = cc11001100_hook("b", b || H(a.l) & 2 ? K : ca, "assign");
    c = cc11001100_hook("c", da(a.constructor, c), "assign");
    a.v && (c.v = cc11001100_hook("c.v", a.v.slice(), "assign"));
    e = cc11001100_hook("e", !!(H(d) & 16), "assign");
    const g = cc11001100_hook("g", f ? d.length - 1 : d.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) la(a, c, h - a.s, d[h], !1, e, b);
    if (f) for (const h in f) la(a, c, +h, f[h], !0, e, b);
    return c;
  }
  ;
  var V = cc11001100_hook("V", class {
    constructor(a, b, d) {
      null == a && (a = cc11001100_hook("a", T, "assign"));
      T = cc11001100_hook("T", void 0, "assign");
      var c = cc11001100_hook("c", this.constructor.i, "var-init");
      if (null == a) {
        a = cc11001100_hook("a", c ? [c] : [], "assign");
        var f = cc11001100_hook("f", !0, "var-init");
        I(a, 48);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (c && c !== a[0]) throw Error();
        var e = cc11001100_hook("e", E(a, 0) | 32, "var-init");
        f = cc11001100_hook("f", 0 !== (16 & e), "assign");
        if (128 & e) throw Error();
        I(a, e);
      }
      this.s = cc11001100_hook("this.s", c ? 0 : -1, "assign");
      this.i = cc11001100_hook("this.i", void 0, "assign");
      this.l = cc11001100_hook("this.l", a, "assign");
      a: {
        e = cc11001100_hook("e", this.l.length, "assign");
        c = cc11001100_hook("c", e - 1, "assign");
        if (e && (e = cc11001100_hook("e", this.l[c], "assign"), M(e))) {
          this.o = cc11001100_hook("this.o", e, "assign");
          this.j = cc11001100_hook("this.j", c - this.s, "assign");
          break a;
        }
        void 0 !== b && -1 < b ? (this.j = cc11001100_hook("this.j", Math.max(b, c + 1 - this.s), "assign"), this.o = cc11001100_hook("this.o", void 0, "assign")) : this.j = cc11001100_hook("this.j", Number.MAX_VALUE, "assign");
      }
      if (this.o && "g" in this.o) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (d) {
        b = cc11001100_hook("b", f && !0, "assign");
        f = cc11001100_hook("f", this.j, "assign");
        let h;
        for (c = cc11001100_hook("c", 0, "assign"); c < d.length; c++) if (e = cc11001100_hook("e", d[c], "assign"), e < f) {
          e += cc11001100_hook("e", this.s, "assign");
          var g = cc11001100_hook("g", a[e], "var-init");
          g ? ma(g, b) : a[e] = cc11001100_hook("a[e]", N, "assign");
        } else h || (h = cc11001100_hook("h", P(this), "assign")), (g = cc11001100_hook("g", h[e], "assign")) ? ma(g, b) : h[e] = cc11001100_hook("h[e]", N, "assign");
      }
    }
    toJSON() {
      return U(this.l, ha, ia);
    }
  }, "var-init");
  function ma(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var d = cc11001100_hook("d", H(a), "var-init"),
        c = cc11001100_hook("c", 1, "var-init");
      !b || d & 2 || (c |= cc11001100_hook("c", 16, "assign"));
      (d & c) !== c && I(a, d | c);
    }
  }
  V.prototype.u = cc11001100_hook("V.prototype.u", L, "assign");
  V.prototype.toString = cc11001100_hook("V.prototype.toString", function () {
    return this.l.toString();
  }, "assign");
  function na(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", da(a, J(b)), "assign");
      }
      return b;
    };
  }
  ;
  var pa = cc11001100_hook("pa", class extends V {
      constructor(a) {
        super(a, -1, oa);
      }
    }, "var-init"),
    oa = cc11001100_hook("oa", [17], "var-init");
  var ra = cc11001100_hook("ra", class extends V {
      constructor(a) {
        super(a, -1, qa);
      }
    }, "var-init"),
    qa = cc11001100_hook("qa", [27], "var-init");
  var ta = cc11001100_hook("ta", class extends V {
      constructor(a) {
        super(a, -1, sa);
      }
    }, "var-init"),
    sa = cc11001100_hook("sa", [8], "var-init");
  var ua = cc11001100_hook("ua", na(class extends V {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  var wa = cc11001100_hook("wa", na(class extends V {
      constructor(a) {
        super(a, -1, va);
      }
    }), "var-init"),
    va = cc11001100_hook("va", [1, 2, 3], "var-init");
  function W(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.getElementsByTagName("META"), "assign");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; ++d) if (a[d].getAttribute("name") === b) return a[d].getAttribute("content") || "";
    return "";
  }
  ;
  function X(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.body, "assign");
    var d = cc11001100_hook("d", {
      detail: cc11001100_hook("detail", void 0, "object-key-init")
    }, "var-init");
    let c;
    "function" === typeof window.CustomEvent ? c = cc11001100_hook("c", new CustomEvent(b, d), "assign") : (c = cc11001100_hook("c", document.createEvent("CustomEvent"), "assign"), c.initCustomEvent(b, !!d.bubbles, !!d.cancelable, d.detail));
    a.dispatchEvent(c);
  }
  var xa = cc11001100_hook("xa", class {
    constructor(a) {
      this.body = cc11001100_hook("this.body", a, "assign");
      this.i = cc11001100_hook("this.i", [], "assign");
      W(a, "sampling_mod");
      var b = cc11001100_hook("b", W(a, "namespace"), "var-init");
      if (!b) {
        b = cc11001100_hook("b", "ns-" + (0, Math.random)().toString(36).substr(2, 5), "assign");
        a: {
          var d = cc11001100_hook("d", a.getElementsByTagName("META"), "var-init");
          for (let c = cc11001100_hook("c", 0, "var-init"); c < d.length; ++c) if ("namespace" === d[c].getAttribute("name") && d[c].getAttribute("index") === 0 .toString()) {
            d[c].setAttribute("content", b);
            break a;
          }
          d = cc11001100_hook("d", a.querySelector("#mys-meta"), "assign");
          d || (d = cc11001100_hook("d", document.createElement("div"), "assign"), d.id = cc11001100_hook("d.id", "mys-meta", "assign"), d.style.position = cc11001100_hook("d.style.position", "absolute", "assign"), d.style.display = cc11001100_hook("d.style.display", "none", "assign"), a.appendChild(d));
          a = cc11001100_hook("a", document.createElement("META"), "assign");
          a.setAttribute("name", "namespace");
          a.setAttribute("content", b);
          a.setAttribute("index", 0 .toString());
          d.appendChild(a);
        }
      }
      if (!(0 < this.i.length)) {
        a = cc11001100_hook("a", W(this.body, "environment"), "assign");
        for (const c of a.split("|")) c && this.i.push(c);
      }
    }
    addEventListener(a, b) {
      this.body.addEventListener(a, b);
    }
  }, "var-init");
  function ya(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", document, "var-init");
    a = cc11001100_hook("a", String(a), "assign");
    "application/xhtml+xml" === b.contentType && (a = cc11001100_hook("a", a.toLowerCase(), "assign"));
    return b.createElement(a);
  }
  ;
  function za(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (1 >= a.j.offsetWidth || 1 >= a.j.offsetHeight) return !1;
    a.i.remove();
    X(a.context, "spanReady");
    return !0;
  }
  var Aa = cc11001100_hook("Aa", class {
    constructor(a) {
      this.context = cc11001100_hook("this.context", a, "assign");
      this.m = cc11001100_hook("this.m", {
        D: cc11001100_hook("D", !1, "object-key-init"),
        C: cc11001100_hook("C", 100, "object-key-init")
      }, "assign");
      this.j = cc11001100_hook("this.j", ya("SPAN"), "assign");
      this.i = cc11001100_hook("this.i", ya("DIV"), "assign");
      this.j.style.fontSize = cc11001100_hook("this.j.style.fontSize", "6px", "assign");
      this.j.textContent = cc11001100_hook("this.j.textContent", "go", "assign");
      this.i.style.position = cc11001100_hook("this.i.style.position", "absolute", "assign");
      this.i.style.top = cc11001100_hook("this.i.style.top", "100%", "assign");
      this.i.style.left = cc11001100_hook("this.i.style.left", "100%", "assign");
      this.i.style.width = cc11001100_hook("this.i.style.width", "1px", "assign");
      this.i.style.height = cc11001100_hook("this.i.style.height", "0", "assign");
      this.i.style.overflow = cc11001100_hook("this.i.style.overflow", "hidden", "assign");
      this.i.style.visibility = cc11001100_hook("this.i.style.visibility", "hidden", "assign");
      this.i.appendChild(this.j);
    }
    wait() {
      if (!this.m.D && (X(this.context, "spanStart"), this.context.body.appendChild(this.i), !za(this))) return new Promise(a => {
        const b = cc11001100_hook("b", setInterval(() => {
          za(this) && (clearInterval(b), a());
        }, this.m.C), "var-init");
      });
    }
  }, "var-init");
  var Ba = cc11001100_hook("Ba", class {
    constructor(a, b) {
      this.context = cc11001100_hook("this.context", a, "assign");
      this.i = cc11001100_hook("this.i", R(b, ra, 1) || new ra(), "assign");
      R(b, ta, 12) || new ta();
      R(this.i, pa, 10) || new pa();
    }
  }, "var-init");
  function Ca(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m.length = cc11001100_hook("a.m.length", 0, "assign");
    a.j = cc11001100_hook("a.j", !0, "assign");
  }
  function Da(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.i = cc11001100_hook("a.i", !0, "assign");
    const d = cc11001100_hook("d", () => {
      a.j = cc11001100_hook("a.j", !1, "assign");
      const c = cc11001100_hook("c", a.m.shift(), "var-init");
      return void 0 === c ? (a.i = cc11001100_hook("a.i", !1, "assign"), Promise.resolve()) : Da(a, c());
    }, "var-init");
    return b ? b.then(d, () => {
      if (a.j) return d();
      a.i = cc11001100_hook("a.i", !1, "assign");
      return Promise.reject();
    }) : d();
  }
  function Ea(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (const d of b) a.m.push(d);
    if (!a.i) return Da(a);
  }
  var Fa = cc11001100_hook("Fa", class {
    constructor() {
      this.j = cc11001100_hook("this.j", this.i = cc11001100_hook("this.i", !1, "assign"), "assign");
      this.m = cc11001100_hook("this.m", [], "assign");
    }
  }, "var-init");
  function Ga(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", W(a.context.body, "render_config") || "[]", "var-init");
    b = cc11001100_hook("b", ua(b), "assign");
    return new Ba(a.context, b);
  }
  function Ha(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ca(a.A);
    return Ea(a.A, [() => {
      let b;
      a.j || (a.j = cc11001100_hook("a.j", Ga(a), "assign"));
      b = cc11001100_hook("b", new Aa(a.context).wait(), "assign");
      X(a.context, "browserStart");
      X(a.context, "browserStartEnd");
      a.i &= cc11001100_hook("a.i", -31, "assign");
      a.i |= cc11001100_hook("a.i", 2, "assign");
      return b;
    }, () => {
      X(a.context, "browserReady");
      X(a.context, "browserReadyEnd");
      a.i |= cc11001100_hook("a.i", 4, "assign");
      X(a.context, "overallReady");
    }, () => {
      X(a.context, "browserQuiet");
      X(a.context, "browserQuietEnd");
      a.i |= cc11001100_hook("a.i", 8, "assign");
    }]);
  }
  function Ia(a) {
    cc11001100_hook("a", a, "function-parameter");
    wa(W(a.context.body, "engine_msg") || "[]");
    return Ha(a) || Promise.resolve();
  }
  var Y = cc11001100_hook("Y", class {
    constructor(a, b) {
      this.A = cc11001100_hook("this.A", new Fa(), "assign");
      this.i = cc11001100_hook("this.i", 0, "assign");
      this.context = cc11001100_hook("this.context", new xa(b), "assign");
    }
    B() {
      return this.i;
    }
    m() {
      this.i &= cc11001100_hook("this.i", -31, "assign");
      this.i |= cc11001100_hook("this.i", 1, "assign");
      let a = cc11001100_hook("a", 0, "var-init");
      const b = cc11001100_hook("b", this.context.body, "var-init");
      b.addEventListener("browserRender", () => {
        ++a;
        if (1 === a) X(this.context, "overallStart"), Ia(this).then(() => {
          X(this.context, "overallQuiet");
        });else {
          var d = cc11001100_hook("d", b.clientHeight, "var-init");
          b.clientWidth && d && (this.j || (this.j = cc11001100_hook("this.j", Ga(this), "assign")), Ia(this));
        }
      });
    }
  }, "var-init");
  let Z;
  l("mys.engine.init", (a, b) => {
    Z = cc11001100_hook("Z", new Y(a, b), "assign");
    Z.m();
  });
  l("mys.engine.stage", () => {
    let a;
    return (null == (a = cc11001100_hook("a", Z, "assign")) ? void 0 : a.i) || 0;
  });
  l("mys.Engine", Y);
  l("mys.Engine.prototype.i", Y.prototype.m);
  l("mys.Engine.prototype.s", Y.prototype.B);
}).call(this);