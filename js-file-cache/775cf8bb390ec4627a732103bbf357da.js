(function () {
  'use strict';

  /*
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  */
  var k = cc11001100_hook("k", this || self, "var-init");
  var l, m;
  a: {
    for (var n = cc11001100_hook("n", ["CLOSURE_FLAGS"], "var-init"), p = cc11001100_hook("p", k, "var-init"), q = cc11001100_hook("q", 0, "var-init"); q < n.length; q++) if (p = cc11001100_hook("p", p[n[q]], "assign"), null == p) {
      m = cc11001100_hook("m", null, "assign");
      break a;
    }
    m = cc11001100_hook("m", p, "assign");
  }
  var r = cc11001100_hook("r", m && m[610401301], "var-init");
  l = cc11001100_hook("l", null != r ? r : !1, "assign");
  var t;
  const u = cc11001100_hook("u", k.navigator, "var-init");
  t = cc11001100_hook("t", u ? u.userAgentData || null : null, "assign");
  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    return l ? t ? t.brands.some(({
      brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1;
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    a: {
      if (b = cc11001100_hook("b", k.navigator, "assign")) if (b = cc11001100_hook("b", b.userAgent, "assign")) break a;
      b = cc11001100_hook("b", "", "assign");
    }
    return -1 != b.indexOf(a);
  }
  ;
  function x() {
    return l ? !!t && 0 < t.brands.length : !1;
  }
  function y() {
    return x() ? v("Chromium") : (w("Chrome") || w("CriOS")) && !(x() ? 0 : w("Edge")) || w("Silk");
  }
  ;
  var aa = cc11001100_hook("aa", x() ? !1 : w("Trident") || w("MSIE"), "var-init");
  !w("Android") || y();
  y();
  w("Safari") && (y() || (x() ? 0 : w("Coast")) || (x() ? 0 : w("Opera")) || (x() ? 0 : w("Edge")) || (x() ? v("Microsoft Edge") : w("Edg/")) || x() && v("Opera"));
  var z = cc11001100_hook("z", {}, "var-init"),
    A = cc11001100_hook("A", null, "var-init");
  var B = cc11001100_hook("B", "undefined" !== typeof Uint8Array, "var-init");
  const ba = cc11001100_hook("ba", !aa && "function" === typeof k.btoa, "var-init");
  const C = cc11001100_hook("C", Symbol(), "var-init");
  function D(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (C) return a[C] |= cc11001100_hook("a[C]", b, "assign");
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
  function E(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    C ? b = cc11001100_hook("b", a[C], "assign") : b = cc11001100_hook("b", a.j, "assign");
    return null == b ? 0 : b;
  }
  function F(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    C ? a[C] = cc11001100_hook("a[C]", b, "assign") : void 0 !== a.j ? a.j = cc11001100_hook("a.j", b, "assign") : Object.defineProperties(a, {
      j: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return a;
  }
  function I(a) {
    cc11001100_hook("a", a, "function-parameter");
    D(a, 16);
    return a;
  }
  function ca(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    F(b, (a | 0) & -51);
  }
  function J(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    F(b, (a | 18) & -41);
  }
  ;
  var K = cc11001100_hook("K", {}, "var-init");
  function L(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var M = cc11001100_hook("M", Object.freeze(F([], 23)), "var-init");
  function N(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && L(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
  function da(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? a : !!a;
  }
  ;
  function ea(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.m + a.u, "var-init");
    return a.o || (a.o = cc11001100_hook("a.o", a.l[b] = cc11001100_hook("a.l[b]", {}, "assign"), "assign"));
  }
  function fa(a, b, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return -1 === b ? null : b >= a.m ? a.o ? a.o[b] : void 0 : d && a.o && (d = cc11001100_hook("d", a.o[b], "assign"), null != d) ? d : a.l[b + a.u];
  }
  function O(a, b, d, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.v && (a.v = cc11001100_hook("a.v", void 0, "assign"));
    b >= a.m || c ? ea(a)[b] = cc11001100_hook("ea(a)[b]", d, "assign") : (a.l[b + a.u] = cc11001100_hook("a.l[b + a.u]", d, "assign"), (a = cc11001100_hook("a", a.o, "assign")) && b in a && delete a[b]);
  }
  function ha(a, b, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var c = cc11001100_hook("c", fa(a, d, !1), "var-init");
    var f = cc11001100_hook("f", !1, "var-init");
    if (null == c || "object" !== typeof c || (f = cc11001100_hook("f", Array.isArray(c), "assign")) || c.A !== K) {
      if (f) {
        f = cc11001100_hook("f", E(a.l), "assign");
        const e = cc11001100_hook("e", E(c), "var-init");
        let g = cc11001100_hook("g", e, "var-init");
        0 === g && (g |= cc11001100_hook("g", f & 16, "assign"));
        g |= cc11001100_hook("g", f & 2, "assign");
        g !== e && F(c, g);
        b = cc11001100_hook("b", new b(c), "assign");
      } else b = cc11001100_hook("b", void 0, "assign");
    } else b = cc11001100_hook("b", c, "assign");
    b !== c && null != b && O(a, d, b, !1);
    c = cc11001100_hook("c", b, "assign");
    if (null == c) return c;
    E(a.l) & 2 || (b = cc11001100_hook("b", c, "assign"), E(b.l) & 2 && (f = cc11001100_hook("f", ia(b, !1), "assign"), f.v = cc11001100_hook("f.v", b, "assign"), b = cc11001100_hook("b", f, "assign")), b !== c && (c = cc11001100_hook("c", b, "assign"), O(a, d, c, !1)));
    return c;
  }
  function ja(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? !1 : a;
  }
  ;
  let P;
  function ka(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    P = cc11001100_hook("P", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    P = cc11001100_hook("P", void 0, "assign");
    return a;
  }
  ;
  function la(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (E(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), N(a), a;
        } else if (B && null != a && a instanceof Uint8Array) {
          if (ba) {
            for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
            b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
            a = cc11001100_hook("a", btoa(b), "assign");
          } else {
            void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
            if (!A) {
              A = cc11001100_hook("A", {}, "assign");
              for (var d = cc11001100_hook("d", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), c = cc11001100_hook("c", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), f = cc11001100_hook("f", 0, "var-init"); 5 > f; f++) {
                var e = cc11001100_hook("e", d.concat(c[f].split("")), "var-init");
                z[f] = cc11001100_hook("z[f]", e, "assign");
                for (var g = cc11001100_hook("g", 0, "var-init"); g < e.length; g++) {
                  var h = cc11001100_hook("h", e[g], "var-init");
                  void 0 === A[h] && (A[h] = cc11001100_hook("A[h]", g, "assign"));
                }
              }
            }
            b = cc11001100_hook("b", z[b], "assign");
            d = cc11001100_hook("d", Array(Math.floor(a.length / 3)), "assign");
            c = cc11001100_hook("c", b[64] || "", "assign");
            for (f = cc11001100_hook("f", e = cc11001100_hook("e", 0, "assign"), "assign"); e < a.length - 2; e += cc11001100_hook("e", 3, "assign")) {
              var G = cc11001100_hook("G", a[e], "var-init"),
                H = cc11001100_hook("H", a[e + 1], "var-init");
              h = cc11001100_hook("h", a[e + 2], "assign");
              g = cc11001100_hook("g", b[G >> 2], "assign");
              G = cc11001100_hook("G", b[(G & 3) << 4 | H >> 4], "assign");
              H = cc11001100_hook("H", b[(H & 15) << 2 | h >> 6], "assign");
              h = cc11001100_hook("h", b[h & 63], "assign");
              d[f++] = cc11001100_hook("d[f++]", g + G + H + h, "assign");
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
  function ma(a, b, d, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", Q(a, b, d, void 0 !== c), "assign");else if (L(a)) {
        const f = cc11001100_hook("f", {}, "var-init");
        for (let e in a) f[e] = cc11001100_hook("f[e]", ma(a[e], b, d, c), "assign");
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", b(a, c), "assign");
      return a;
    }
  }
  function Q(a, b, d, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const f = cc11001100_hook("f", E(a), "var-init");
    c = cc11001100_hook("c", c ? !!(f & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) a[e] = cc11001100_hook("a[e]", ma(a[e], b, d, c), "assign");
    d(f, a);
    return a;
  }
  function na(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.A === K ? a.toJSON() : la(a);
  }
  function oa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && N(b);
  }
  ;
  function pa(a, b, d = J) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if (B && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const c = cc11001100_hook("c", E(a), "var-init");
        if (c & 2) return a;
        if (b && !(c & 32) && (c & 16 || 0 === c)) return F(a, c | 18), a;
        a = cc11001100_hook("a", Q(a, pa, c & 4 ? J : d, !0), "assign");
        b = cc11001100_hook("b", E(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.A === K ? qa(a) : a;
    }
  }
  function ra(a, b, d, c, f, e, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    if (a = cc11001100_hook("a", a.j && a.j[d], "assign")) {
      c = cc11001100_hook("c", E(a), "assign");
      c & 2 ? c = cc11001100_hook("c", a, "assign") : (e = cc11001100_hook("e", Array.prototype.map.call(a, qa, void 0), "assign"), J(c, e), Object.freeze(e), c = cc11001100_hook("c", e, "assign"));
      if (E(b.l) & 2) throw Error();
      null == c ? e = cc11001100_hook("e", M, "assign") : (e = cc11001100_hook("e", [], "assign"), D(e, 1));
      g = cc11001100_hook("g", e, "assign");
      if (null != c) {
        e = cc11001100_hook("e", !!c.length, "assign");
        for (a = cc11001100_hook("a", 0, "assign"); a < c.length; a++) {
          const h = cc11001100_hook("h", c[a], "var-init");
          e = cc11001100_hook("e", e && !(E(h.l) & 2), "assign");
          g[a] = cc11001100_hook("g[a]", h.l, "assign");
        }
        e = cc11001100_hook("e", (e ? 8 : 0) | 1, "assign");
        a = cc11001100_hook("a", E(g), "assign");
        (a & e) !== e && (Object.isFrozen(g) && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign")), F(g, a | e));
        b.j || (b.j = cc11001100_hook("b.j", {}, "assign"));
        b.j[d] = cc11001100_hook("b.j[d]", c, "assign");
      } else b.j && (b.j[d] = cc11001100_hook("b.j[d]", void 0, "assign"));
      O(b, d, g, f);
    } else {
      c = cc11001100_hook("c", pa(c, e, g), "assign");
      if (E(b.l) & 2) throw Error();
      O(b, d, c, f);
    }
  }
  function qa(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (E(a.l) & 2) return a;
    a = cc11001100_hook("a", ia(a, !0), "assign");
    D(a.l, 18);
    return a;
  }
  function ia(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const d = cc11001100_hook("d", a.l, "var-init");
    var c = cc11001100_hook("c", I([]), "var-init"),
      f = cc11001100_hook("f", a.constructor.j, "var-init");
    f && c.push(f);
    f = cc11001100_hook("f", a.o, "assign");
    if (f) {
      c.length = cc11001100_hook("c.length", d.length, "assign");
      var e = cc11001100_hook("e", {}, "var-init");
      c[c.length - 1] = cc11001100_hook("c[c.length - 1]", e, "assign");
    }
    0 !== (E(d) & 128) && N(c);
    b = cc11001100_hook("b", b || E(a.l) & 2 ? J : ca, "assign");
    c = cc11001100_hook("c", ka(a.constructor, c), "assign");
    a.B && (c.B = cc11001100_hook("c.B", a.B.slice(), "assign"));
    e = cc11001100_hook("e", !!(E(d) & 16), "assign");
    const g = cc11001100_hook("g", f ? d.length - 1 : d.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) ra(a, c, h - a.u, d[h], !1, e, b);
    if (f) for (const h in f) ra(a, c, +h, f[h], !0, e, b);
    return c;
  }
  ;
  var R = cc11001100_hook("R", class {
    constructor(a, b, d) {
      null == a && (a = cc11001100_hook("a", P, "assign"));
      P = cc11001100_hook("P", void 0, "assign");
      var c = cc11001100_hook("c", this.constructor.j, "var-init");
      if (null == a) {
        a = cc11001100_hook("a", c ? [c] : [], "assign");
        var f = cc11001100_hook("f", !0, "var-init");
        F(a, 48);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (c && c !== a[0]) throw Error();
        var e = cc11001100_hook("e", D(a, 0) | 32, "var-init");
        f = cc11001100_hook("f", 0 !== (16 & e), "assign");
        if (128 & e) throw Error();
        F(a, e);
      }
      this.u = cc11001100_hook("this.u", c ? 0 : -1, "assign");
      this.j = cc11001100_hook("this.j", void 0, "assign");
      this.l = cc11001100_hook("this.l", a, "assign");
      a: {
        e = cc11001100_hook("e", this.l.length, "assign");
        c = cc11001100_hook("c", e - 1, "assign");
        if (e && (e = cc11001100_hook("e", this.l[c], "assign"), L(e))) {
          this.o = cc11001100_hook("this.o", e, "assign");
          this.m = cc11001100_hook("this.m", c - this.u, "assign");
          break a;
        }
        void 0 !== b && -1 < b ? (this.m = cc11001100_hook("this.m", Math.max(b, c + 1 - this.u), "assign"), this.o = cc11001100_hook("this.o", void 0, "assign")) : this.m = cc11001100_hook("this.m", Number.MAX_VALUE, "assign");
      }
      if (this.o && "g" in this.o) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (d) {
        b = cc11001100_hook("b", f && !0, "assign");
        f = cc11001100_hook("f", this.m, "assign");
        let h;
        for (c = cc11001100_hook("c", 0, "assign"); c < d.length; c++) if (e = cc11001100_hook("e", d[c], "assign"), e < f) {
          e += cc11001100_hook("e", this.u, "assign");
          var g = cc11001100_hook("g", a[e], "var-init");
          g ? sa(g, b) : a[e] = cc11001100_hook("a[e]", M, "assign");
        } else h || (h = cc11001100_hook("h", ea(this), "assign")), (g = cc11001100_hook("g", h[e], "assign")) ? sa(g, b) : h[e] = cc11001100_hook("h[e]", M, "assign");
      }
    }
    toJSON() {
      return Q(this.l, na, oa);
    }
  }, "var-init");
  function sa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var d = cc11001100_hook("d", E(a), "var-init"),
        c = cc11001100_hook("c", 1, "var-init");
      !b || d & 2 || (c |= cc11001100_hook("c", 16, "assign"));
      (d & c) !== c && F(a, d | c);
    }
  }
  R.prototype.A = cc11001100_hook("R.prototype.A", K, "assign");
  R.prototype.toString = cc11001100_hook("R.prototype.toString", function () {
    return this.l.toString();
  }, "assign");
  var ua = cc11001100_hook("ua", class extends R {
      constructor(a) {
        super(a, -1, ta);
      }
    }, "var-init"),
    ta = cc11001100_hook("ta", [17], "var-init");
  var wa = cc11001100_hook("wa", class extends R {
      constructor(a) {
        super(a, -1, va);
      }
    }, "var-init"),
    va = cc11001100_hook("va", [27], "var-init");
  var xa = cc11001100_hook("xa", function (a) {
    return b => {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        b = cc11001100_hook("b", ka(a, I(b)), "assign");
      }
      return b;
    };
  }(class extends R {
    constructor(a) {
      super(a);
    }
  }), "var-init");
  let S = cc11001100_hook("S", [], "var-init");
  const T = cc11001100_hook("T", () => {
    const a = cc11001100_hook("a", S, "var-init");
    S = cc11001100_hook("S", [], "assign");
    for (const b of a) try {
      b();
    } catch (d) {}
  }, "var-init");
  var ya = cc11001100_hook("ya", a => {
    var b = cc11001100_hook("b", window, "var-init");
    "complete" === b.document.readyState ? (S.push(a), 1 == S.length && (window.Promise ? Promise.resolve().then(T) : window.setImmediate ? setImmediate(T) : setTimeout(T, 0))) : b.addEventListener("load", a);
  }, "var-init");
  let U = cc11001100_hook("U", null, "var-init");
  function za() {
    const a = cc11001100_hook("a", k.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function Aa() {
    const a = cc11001100_hook("a", k.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class Ba {
    constructor(a, b) {
      var d = cc11001100_hook("d", Aa() || za(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", d, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const V = cc11001100_hook("V", k.performance, "var-init"),
    Ca = cc11001100_hook("Ca", !!(V && V.mark && V.measure && V.clearMarks), "var-init"),
    W = cc11001100_hook("W", function (a) {
      let b = cc11001100_hook("b", !1, "var-init"),
        d;
      return function () {
        b || (d = cc11001100_hook("d", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
        return d;
      };
    }(() => {
      var a;
      if (a = cc11001100_hook("a", Ca, "assign")) {
        var b;
        if (null === U) {
          U = cc11001100_hook("U", "", "assign");
          try {
            a = cc11001100_hook("a", "", "assign");
            try {
              a = cc11001100_hook("a", k.top.location.hash, "assign");
            } catch (d) {
              a = cc11001100_hook("a", k.location.hash, "assign");
            }
            a && (U = cc11001100_hook("U", (b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "assign")) ? b[1] : "", "assign"));
          } catch (d) {}
        }
        b = cc11001100_hook("b", U, "assign");
        a = cc11001100_hook("a", !!b.indexOf && 0 <= b.indexOf("1337"), "assign");
      }
      return a;
    }), "var-init");
  function Da(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && V && W() && (V.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), V.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  class Ea {
    constructor() {
      var a = cc11001100_hook("a", window, "var-init");
      this.j = cc11001100_hook("this.j", [], "assign");
      this.v = cc11001100_hook("this.v", a || k, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.j = cc11001100_hook("this.j", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.m = cc11001100_hook("this.m", W() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.m) return null;
      a = cc11001100_hook("a", new Ba(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      V && W() && V.mark(b);
      return a;
    }
    end(a) {
      if (this.m && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Aa() || za()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        V && W() && V.mark(b);
        !this.m || 2048 < this.j.length || this.j.push(a);
      }
    }
  }
  ;
  const X = cc11001100_hook("X", new Ea(), "var-init");
  var Fa = cc11001100_hook("Fa", () => {
    window.google_measure_js_timing || (X.m = cc11001100_hook("X.m", !1, "assign"), X.j != X.v.google_js_reporting_queue && (W() && Array.prototype.forEach.call(X.j, Da, void 0), X.j.length = cc11001100_hook("X.j.length", 0, "assign")));
  }, "var-init");
  "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
  if ("complete" == window.document.readyState) Fa();else if (X.m) {
    var Ga = cc11001100_hook("Ga", () => {
        Fa();
      }, "var-init"),
      Y = cc11001100_hook("Y", window, "var-init");
    Y.addEventListener && Y.addEventListener.call(Y, "load", Ga, !1);
  }
  ;
  function Z(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.getElementsByTagName("META"), "assign");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < a.length; ++d) if (a[d].getAttribute("name") === b) return a[d].getAttribute("content") || "";
    return "";
  }
  ;
  function Ha(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!(0 < a.j.length)) {
      var b = cc11001100_hook("b", Z(a.body, "environment"), "var-init");
      for (const d of b.split("|")) d && a.j.push(d);
    }
  }
  function Ia(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ha(a);
    return 0 <= a.j.indexOf("amp");
  }
  var Ja = cc11001100_hook("Ja", class {
    constructor(a) {
      this.body = cc11001100_hook("this.body", a, "assign");
      this.j = cc11001100_hook("this.j", [], "assign");
      Z(a, "sampling_mod");
      var b = cc11001100_hook("b", Z(a, "namespace"), "var-init");
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
      Ha(this);
    }
    addEventListener(a, b) {
      this.body.addEventListener(a, b);
    }
  }, "var-init");
  function Ka(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b) {
      b = cc11001100_hook("b", JSON.parse(b), "assign");
      for (const d in b) b.hasOwnProperty(d) && a.set(d, b[d]);
    }
  }
  var La = cc11001100_hook("La", class {
    constructor() {
      this.j = cc11001100_hook("this.j", {}, "assign");
    }
    clear() {
      this.j = cc11001100_hook("this.j", {}, "assign");
    }
    set(a, b) {
      this.j[a] = cc11001100_hook("this.j[a]", b, "assign");
    }
    get(a) {
      return this.j[a];
    }
  }, "var-init");
  function Ma({
    threshold: a,
    target: b,
    C: d,
    D: c
  }) {
    if (window.IntersectionObserver) {
      var f = cc11001100_hook("f", !1, "var-init");
      new IntersectionObserver(e => {
        0 !== e.length && e[0].isIntersecting && (!f && d && d(), f = cc11001100_hook("f", !0, "assign"), c && c());
      }, {
        threshold: cc11001100_hook("threshold", a, "object-key-init")
      }).observe(b);
    }
  }
  ;
  var Na = cc11001100_hook("Na", class {
    constructor() {
      this.channel = cc11001100_hook("this.channel", 1, "assign");
      (this.j = cc11001100_hook("this.j", !(!window.mys || !window.mys.pingback), "assign")) && this.setData(43, Date.now() - window.mys.pingback.getBaseTime());
    }
    setAttribute(a, b) {
      this.j && window.mys.pingback.setAttribute(a, b);
    }
    setData(a, b) {
      this.j && window.mys.pingback.setData(a, b, this.channel);
    }
    send(a) {
      this.j && window.mys.pingback.send(a);
    }
    tick(a, b) {
      this.j && (this.setData(a, Date.now() - window.mys.pingback.getBaseTime()), this.send(b));
    }
  }, "var-init");
  var Oa = cc11001100_hook("Oa", class {
    constructor(a) {
      this.context = cc11001100_hook("this.context", a, "assign");
      this.v = cc11001100_hook("this.v", new La(), "assign");
      this.pingback = cc11001100_hook("this.pingback", new Na(), "assign");
    }
    j() {}
  }, "var-init");
  var Pa = cc11001100_hook("Pa", class extends Oa {}, "var-init");
  function Qa(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.m || (a.m = cc11001100_hook("a.m", !0, "assign"), Ma({
      threshold: cc11001100_hook("threshold", .9, "object-key-init"),
      target: cc11001100_hook("target", document.querySelector(".x-layout"), "object-key-init"),
      C: cc11001100_hook("C", () => {
        const b = cc11001100_hook("b", document.querySelector(".x-layout"), "var-init");
        b && b.classList.add("web-on-show");
      }, "object-key-init")
    }));
  }
  var Ra = cc11001100_hook("Ra", class extends Pa {
    constructor(a) {
      super(a);
      this.m = cc11001100_hook("this.m", !1, "assign");
    }
    j() {
      setTimeout(() => {
        ya(() => {
          Qa(this);
        });
      }, 0);
    }
  }, "var-init");
  (function (a) {
    var b = cc11001100_hook("b", document.getElementById("mys-content"), "var-init");
    if (b) {
      b = cc11001100_hook("b", new Ja(b), "assign");
      var d = cc11001100_hook("d", new a(b), "var-init");
      Ka(d.v, Z(b.body, "runtime_data"));
      a = cc11001100_hook("a", xa(Z(b.body, "render_config") || "[]"), "assign");
      var c;
      Ia(b) || (null == (c = cc11001100_hook("c", ha(ha(a, wa, 1), ua, 10), "assign")) ? 0 : ja(da(fa(c, 16)))) || (c = cc11001100_hook("c", mys.engine ? mys.engine.stage() : 0, "assign"), 0 === (c & 1) && b.addEventListener("overallStart", () => {}), 0 !== (c & 4) && d.j(), b.addEventListener("browserStart", () => {}), b.addEventListener("browserReady", () => {
        d.j();
      }), b.addEventListener("browserQuiet", () => {}));
    }
  })(class extends Ra {});
}).call(this);