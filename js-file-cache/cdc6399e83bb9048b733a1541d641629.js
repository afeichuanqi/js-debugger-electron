(function () {
  /*
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  */
  var p = cc11001100_hook("p", this || self, "var-init");
  function aa(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.s, "assign");
    const b = cc11001100_hook("b", encodeURIComponent, "var-init");
    let c = cc11001100_hook("c", "", "var-init");
    a.platform && (c += cc11001100_hook("c", "&uap=" + b(a.platform), "assign"));
    a.platformVersion && (c += cc11001100_hook("c", "&uapv=" + b(a.platformVersion), "assign"));
    a.uaFullVersion && (c += cc11001100_hook("c", "&uafv=" + b(a.uaFullVersion), "assign"));
    a.architecture && (c += cc11001100_hook("c", "&uaa=" + b(a.architecture), "assign"));
    a.model && (c += cc11001100_hook("c", "&uam=" + b(a.model), "assign"));
    a.bitness && (c += cc11001100_hook("c", "&uab=" + b(a.bitness), "assign"));
    a.fullVersionList && (c += cc11001100_hook("c", "&uafvl=" + b(a.fullVersionList.map(d => b(d.brand) + ";" + b(d.version)).join("|")), "assign"));
    "undefined" !== typeof a.wow64 && (c += cc11001100_hook("c", "&uaw=" + Number(a.wow64), "assign"));
    return c;
  }
  function ba(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.h ? a.m.slice(0, a.h.index) + b + a.m.slice(a.h.index) : a.m + b;
  }
  function ca(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", "&act=1&ri=1", "var-init");
    a.i && a.s && (b += cc11001100_hook("b", aa(a), "assign"));
    return ba(a, b);
  }
  function da(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.i && a.j || a.o ? 1 == b ? a.i ? a.j : ba(a, "&dct=1") : 2 == b ? ba(a, "&ri=2") : ba(a, "&ri=16") : a.m;
  }
  var ea = cc11001100_hook("ea", class {
    constructor({
      url: a,
      W: b
    }) {
      this.m = cc11001100_hook("this.m", a, "assign");
      this.s = cc11001100_hook("this.s", b, "assign");
      b = cc11001100_hook("b", /[?&]dsh=1(&|$)/.test(a), "assign");
      this.i = cc11001100_hook("this.i", !b && /[?&]ae=1(&|$)/.test(a), "assign");
      this.o = cc11001100_hook("this.o", !b && /[?&]ae=2(&|$)/.test(a), "assign");
      if ((this.h = cc11001100_hook("this.h", /[?&]adurl=([^&]*)/.exec(a), "assign")) && this.h[1]) {
        let c;
        try {
          c = cc11001100_hook("c", decodeURIComponent(this.h[1]), "assign");
        } catch (d) {
          c = cc11001100_hook("c", null, "assign");
        }
        this.j = cc11001100_hook("this.j", c, "assign");
      }
    }
  }, "var-init");
  var q = cc11001100_hook("q", class {
    constructor(a, b) {
      this.h = cc11001100_hook("this.h", b === ha ? a : "", "assign");
    }
    toString() {
      return this.h.toString();
    }
  }, "var-init");
  q.prototype.i = cc11001100_hook("q.prototype.i", !0, "assign");
  var ia;
  try {
    new URL("s://g"), ia = cc11001100_hook("ia", !0, "assign");
  } catch (a) {
    ia = cc11001100_hook("ia", !1, "assign");
  }
  var ka = cc11001100_hook("ka", ia, "var-init"),
    ha = cc11001100_hook("ha", {}, "var-init"),
    la = cc11001100_hook("la", new q("about:invalid#zClosurez", ha), "var-init");
  function ma(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a: {
      const c = cc11001100_hook("c", a.length, "var-init"),
        d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init");
      for (let f = cc11001100_hook("f", 0, "var-init"); f < c; f++) if (f in d && b.call(void 0, d[f], f, a)) {
        b = cc11001100_hook("b", f, "assign");
        break a;
      }
      b = cc11001100_hook("b", -1, "assign");
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  ;
  var na, oa;
  a: {
    for (var pa = cc11001100_hook("pa", ["CLOSURE_FLAGS"], "var-init"), qa = cc11001100_hook("qa", p, "var-init"), ra = cc11001100_hook("ra", 0, "var-init"); ra < pa.length; ra++) if (qa = cc11001100_hook("qa", qa[pa[ra]], "assign"), null == qa) {
      oa = cc11001100_hook("oa", null, "assign");
      break a;
    }
    oa = cc11001100_hook("oa", qa, "assign");
  }
  var sa = cc11001100_hook("sa", oa && oa[610401301], "var-init");
  na = cc11001100_hook("na", null != sa ? sa : !1, "assign");
  var r;
  const ta = cc11001100_hook("ta", p.navigator, "var-init");
  r = cc11001100_hook("r", ta ? ta.userAgentData || null : null, "assign");
  function ua(a) {
    cc11001100_hook("a", a, "function-parameter");
    return na ? r ? r.brands.some(({
      brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1;
  }
  function u(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    a: {
      if (b = cc11001100_hook("b", p.navigator, "assign")) if (b = cc11001100_hook("b", b.userAgent, "assign")) break a;
      b = cc11001100_hook("b", "", "assign");
    }
    return -1 != b.indexOf(a);
  }
  ;
  function v() {
    return na ? !!r && 0 < r.brands.length : !1;
  }
  function va() {
    return v() ? ua("Chromium") : (u("Chrome") || u("CriOS")) && !(v() ? 0 : u("Edge")) || u("Silk");
  }
  ;
  function wa(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", !1, "var-init"),
      c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }
  ;
  function xa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!(b instanceof q || b instanceof q)) {
      b = cc11001100_hook("b", "object" == typeof b && b.i ? b.h.toString() : String(b), "assign");
      b: {
        var c = cc11001100_hook("c", b, "var-init");
        if (ka) {
          try {
            var d = cc11001100_hook("d", new URL(c), "var-init");
          } catch (f) {
            c = cc11001100_hook("c", "https:", "assign");
            break b;
          }
          c = cc11001100_hook("c", d.protocol, "assign");
        } else c: {
          d = cc11001100_hook("d", document.createElement("a"), "assign");
          try {
            d.href = cc11001100_hook("d.href", c, "assign");
          } catch (f) {
            c = cc11001100_hook("c", void 0, "assign");
            break c;
          }
          c = cc11001100_hook("c", d.protocol, "assign");
          c = cc11001100_hook("c", ":" === c || "" === c ? "https:" : c, "assign");
        }
      }
      "javascript:" === c && (b = cc11001100_hook("b", "about:invalid#zClosurez", "assign"));
      b = cc11001100_hook("b", new q(b, ha), "assign");
    }
    a.href = cc11001100_hook("a.href", b instanceof q && b.constructor === q ? b.h : "type_error:SafeUrl", "assign");
  }
  ; /*
    SPDX-License-Identifier: Apache-2.0
    */
  class ya {
    constructor(a) {
      this.da = cc11001100_hook("this.da", a, "assign");
    }
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new ya(b => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const za = cc11001100_hook("za", new ya(a => /^[^:]*([/?#]|$)/.test(a)), "var-init");
  var Aa = cc11001100_hook("Aa", w("http"), "var-init"),
    Ba = cc11001100_hook("Ba", w("https"), "var-init"),
    Ca = cc11001100_hook("Ca", w("ftp"), "var-init"),
    Da = cc11001100_hook("Da", w("mailto"), "var-init"),
    Ea = cc11001100_hook("Ea", w("intent"), "var-init"),
    Fa = cc11001100_hook("Fa", w("market"), "var-init"),
    Ha = cc11001100_hook("Ha", w("itms"), "var-init"),
    Ia = cc11001100_hook("Ia", w("itms-appss"), "var-init");
  const Ja = cc11001100_hook("Ja", [w("data"), Aa, Ba, Da, Ca, za], "var-init");
  function Ka(a, b = Ja) {
    cc11001100_hook("a", a, "function-parameter");
    for (let c = cc11001100_hook("c", 0, "var-init"); c < b.length; ++c) {
      const d = cc11001100_hook("d", b[c], "var-init");
      if (d instanceof ya && d.da(a)) return new q(a, ha);
    }
  }
  function La(a, b = Ja) {
    cc11001100_hook("a", a, "function-parameter");
    return Ka(a, b) || la;
  }
  ;
  function Ma() {
    return u("iPhone") && !u("iPod") && !u("iPad");
  }
  ;
  function Na(a) {
    cc11001100_hook("a", a, "function-parameter");
    Na[" "](a);
    return a;
  }
  Na[" "] = cc11001100_hook("Na[\" \"]", function () {}, "assign");
  var Oa = cc11001100_hook("Oa", v() ? !1 : u("Trident") || u("MSIE"), "var-init"),
    Pa = cc11001100_hook("Pa", Ma(), "var-init"),
    Qa = cc11001100_hook("Qa", u("iPad"), "var-init");
  var Ra = cc11001100_hook("Ra", Ma() || u("iPod"), "var-init"),
    Sa = cc11001100_hook("Sa", u("iPad"), "var-init");
  !u("Android") || va();
  va();
  u("Safari") && (va() || (v() ? 0 : u("Coast")) || (v() ? 0 : u("Opera")) || (v() ? 0 : u("Edge")) || (v() ? ua("Microsoft Edge") : u("Edg/")) || v() && ua("Opera"));
  var Ta = cc11001100_hook("Ta", {}, "var-init"),
    Ua = cc11001100_hook("Ua", null, "var-init");
  function Va(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
    if (!Ua) {
      Ua = cc11001100_hook("Ua", {}, "assign");
      for (var c = cc11001100_hook("c", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), d = cc11001100_hook("d", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), f = cc11001100_hook("f", 0, "var-init"); 5 > f; f++) {
        var e = cc11001100_hook("e", c.concat(d[f].split("")), "var-init");
        Ta[f] = cc11001100_hook("Ta[f]", e, "assign");
        for (var g = cc11001100_hook("g", 0, "var-init"); g < e.length; g++) {
          var h = cc11001100_hook("h", e[g], "var-init");
          void 0 === Ua[h] && (Ua[h] = cc11001100_hook("Ua[h]", g, "assign"));
        }
      }
    }
    b = cc11001100_hook("b", Ta[b], "assign");
    c = cc11001100_hook("c", Array(Math.floor(a.length / 3)), "assign");
    d = cc11001100_hook("d", b[64] || "", "assign");
    for (f = cc11001100_hook("f", e = cc11001100_hook("e", 0, "assign"), "assign"); e < a.length - 2; e += cc11001100_hook("e", 3, "assign")) {
      var m = cc11001100_hook("m", a[e], "var-init"),
        k = cc11001100_hook("k", a[e + 1], "var-init");
      h = cc11001100_hook("h", a[e + 2], "assign");
      g = cc11001100_hook("g", b[m >> 2], "assign");
      m = cc11001100_hook("m", b[(m & 3) << 4 | k >> 4], "assign");
      k = cc11001100_hook("k", b[(k & 15) << 2 | h >> 6], "assign");
      h = cc11001100_hook("h", b[h & 63], "assign");
      c[f++] = cc11001100_hook("c[f++]", g + m + k + h, "assign");
    }
    g = cc11001100_hook("g", 0, "assign");
    h = cc11001100_hook("h", d, "assign");
    switch (a.length - e) {
      case 2:
        g = cc11001100_hook("g", a[e + 1], "assign"), h = cc11001100_hook("h", b[(g & 15) << 2] || d, "assign");
      case 1:
        a = cc11001100_hook("a", a[e], "assign"), c[f] = cc11001100_hook("c[f]", b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d, "assign");
    }
    return c.join("");
  }
  ;
  var Wa = cc11001100_hook("Wa", "undefined" !== typeof Uint8Array, "var-init");
  const Xa = cc11001100_hook("Xa", !Oa && "function" === typeof p.btoa, "var-init");
  const x = cc11001100_hook("x", Symbol(), "var-init");
  function y(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (x) return a[x] |= cc11001100_hook("a[x]", b, "assign");
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
  function Ya(a) {
    cc11001100_hook("a", a, "function-parameter");
    x ? a[x] && (a[x] &= cc11001100_hook("a[x]", -17, "assign")) : void 0 !== a.h && (a.h &= cc11001100_hook("a.h", -17, "assign"));
  }
  function z(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    x ? b = cc11001100_hook("b", a[x], "assign") : b = cc11001100_hook("b", a.h, "assign");
    return null == b ? 0 : b;
  }
  function A(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    x ? a[x] = cc11001100_hook("a[x]", b, "assign") : void 0 !== a.h ? a.h = cc11001100_hook("a.h", b, "assign") : Object.defineProperties(a, {
      h: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
  }
  function Za(a) {
    cc11001100_hook("a", a, "function-parameter");
    y(a, 1);
    return a;
  }
  function C(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!(z(a) & 2);
  }
  function D(a) {
    cc11001100_hook("a", a, "function-parameter");
    y(a, 18);
    return a;
  }
  function $a(a) {
    cc11001100_hook("a", a, "function-parameter");
    y(a, 16);
    return a;
  }
  function ab(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    A(b, (a | 0) & -51);
  }
  function bb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    A(b, (a | 18) & -41);
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
  A(gb, 23);
  fb = cc11001100_hook("fb", Object.freeze(gb), "assign");
  class ib {
    constructor(a) {
      this.R = cc11001100_hook("this.R", 0, "assign");
      this.P = cc11001100_hook("this.P", a, "assign");
    }
    next() {
      return this.R < this.P.length ? {
        done: cc11001100_hook("done", !1, "object-key-init"),
        value: cc11001100_hook("value", this.P[this.R++], "object-key-init")
      } : {
        done: cc11001100_hook("done", !0, "object-key-init"),
        value: cc11001100_hook("value", void 0, "object-key-init")
      };
    }
    [Symbol.iterator]() {
      return this;
    }
  }
  function jb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && db(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : a.push({
      g: cc11001100_hook("g", 1, "object-key-init")
    });
  }
  ;
  function kb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    let f = cc11001100_hook("f", !1, "var-init");
    if (null != a && "object" === typeof a && !(f = cc11001100_hook("f", Array.isArray(a), "assign")) && a.I === cb) return a;
    if (!f) return c ? d & 2 ? (a = cc11001100_hook("a", b[qb], "assign")) ? b = cc11001100_hook("b", a, "assign") : (a = cc11001100_hook("a", new b(), "assign"), D(a.l), b = cc11001100_hook("b", b[qb] = cc11001100_hook("b[qb]", a, "assign"), "assign")) : b = cc11001100_hook("b", new b(), "assign") : b = cc11001100_hook("b", void 0, "assign"), b;
    rb(a, d);
    return new b(a);
  }
  function rb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", z(a), "var-init");
    let d = cc11001100_hook("d", c, "var-init");
    0 === d && (d |= cc11001100_hook("d", b & 16, "assign"));
    d |= cc11001100_hook("d", b & 2, "assign");
    d !== c && A(a, d);
  }
  const qb = cc11001100_hook("qb", Symbol(), "var-init");
  function sb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Array.from(a.h.keys()).sort(tb);
  }
  function ub(a, b = vb) {
    cc11001100_hook("a", a, "function-parameter");
    const c = cc11001100_hook("c", sb(a), "var-init");
    for (let d = cc11001100_hook("d", 0, "var-init"); d < c.length; d++) {
      const f = cc11001100_hook("f", c[d], "var-init"),
        e = cc11001100_hook("e", a.h.get(c[d]), "var-init");
      c[d] = cc11001100_hook("c[d]", [b(f), b(e)], "assign");
    }
    return c;
  }
  function wb(a, b = vb) {
    cc11001100_hook("a", a, "function-parameter");
    const c = cc11001100_hook("c", [], "var-init");
    a = cc11001100_hook("a", a.h.entries(), "assign");
    for (var d; !(d = cc11001100_hook("d", a.next(), "assign")).done;) d = cc11001100_hook("d", d.value, "assign"), d[0] = cc11001100_hook("d[0]", b(d[0]), "assign"), d[1] = cc11001100_hook("d[1]", b(d[1]), "assign"), c.push(d);
    return c;
  }
  var E = cc11001100_hook("E", class {
    constructor(a, b, c, d = xb) {
      c = cc11001100_hook("c", z(a), "assign");
      c |= cc11001100_hook("c", 32, "assign");
      A(a, c);
      this.i = cc11001100_hook("this.i", c, "assign");
      this.j = cc11001100_hook("this.j", (this.m = cc11001100_hook("this.m", b, "assign")) ? yb : zb, "assign");
      this.s = cc11001100_hook("this.s", d, "assign");
      this.h = cc11001100_hook("this.h", b = cc11001100_hook("b", new Map(), "assign"), "assign");
      for (d = cc11001100_hook("d", 0, "assign"); d < a.length; d++) c = cc11001100_hook("c", a[d], "assign"), b.set(c[0], c[1]);
      this.size = cc11001100_hook("this.size", b.size, "assign");
    }
    entries() {
      const a = cc11001100_hook("a", sb(this), "var-init");
      for (let b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) {
        const c = cc11001100_hook("c", a[b], "var-init");
        a[b] = cc11001100_hook("a[b]", [c, this.get(c)], "assign");
      }
      return new ib(a);
    }
    keys() {
      const a = cc11001100_hook("a", sb(this), "var-init");
      return new ib(a);
    }
    values() {
      const a = cc11001100_hook("a", sb(this), "var-init");
      for (let b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) a[b] = cc11001100_hook("a[b]", this.get(a[b]), "assign");
      return new ib(a);
    }
    forEach(a, b) {
      const c = cc11001100_hook("c", sb(this), "var-init");
      for (let d = cc11001100_hook("d", 0, "var-init"); d < c.length; d++) {
        const f = cc11001100_hook("f", c[d], "var-init");
        a.call(b, this.get(f), f, this);
      }
    }
    set(a, b) {
      if (this.i & 2) throw Error("Cannot mutate an immutable Map");
      const c = cc11001100_hook("c", this.h, "var-init");
      if (null == b) return c.delete(a), this;
      c.set(a, this.j(b, this.m, this.o, this.i));
      this.size = cc11001100_hook("this.size", c.size, "assign");
      return this;
    }
    get(a) {
      const b = cc11001100_hook("b", this.h, "var-init");
      if (b.has(a)) {
        var c = cc11001100_hook("c", b.get(a), "var-init"),
          d = cc11001100_hook("d", this.i, "var-init"),
          f = cc11001100_hook("f", this.m, "var-init");
        f && Array.isArray(c) && d & 16 && $a(c);
        d = cc11001100_hook("d", this.j(c, f, this.o, d), "assign");
        d !== c && b.set(a, d);
        return d;
      }
    }
    has(a) {
      return this.h.has(a);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  }, "var-init");
  function tb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", "" + a, "assign");
    b = cc11001100_hook("b", "" + b, "assign");
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function yb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a = cc11001100_hook("a", kb(a, b, !0, d), "assign");
    c && (a = cc11001100_hook("a", Ab(a), "assign"));
    return a;
  }
  function zb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function xb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function vb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  ;
  function Bb(a) {
    cc11001100_hook("a", a, "function-parameter");
    const b = cc11001100_hook("b", a.i + a.v, "var-init");
    return a.u || (a.u = cc11001100_hook("a.u", a.l[b] = cc11001100_hook("a.l[b]", {}, "assign"), "assign"));
  }
  function F(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return -1 === b ? null : b >= a.i ? a.u ? a.u[b] : void 0 : c && a.u && (c = cc11001100_hook("c", a.u[b], "assign"), null != c) ? c : a.l[b + a.v];
  }
  function G(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (z(a.l) & 2) throw Error();
    return H(a, b, c, d);
  }
  function H(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j && (a.j = cc11001100_hook("a.j", void 0, "assign"));
    if (b >= a.i || d) return Bb(a)[b] = cc11001100_hook("Bb(a)[b]", c, "assign"), a;
    a.l[b + a.v] = cc11001100_hook("a.l[b + a.v]", c, "assign");
    (c = cc11001100_hook("c", a.u, "assign")) && b in c && delete c[b];
    return a;
  }
  function Cb(a, b, c, d, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    let e = cc11001100_hook("e", F(a, b, d), "var-init");
    Array.isArray(e) || (e = cc11001100_hook("e", fb, "assign"));
    const g = cc11001100_hook("g", z(e), "var-init");
    g & 1 || Za(e);
    if (f) g & 2 || D(e), c & 1 || Object.freeze(e);else {
      f = cc11001100_hook("f", !(c & 2), "assign");
      const h = cc11001100_hook("h", g & 2, "var-init");
      c & 1 || !h ? f && g & 16 && !h && Ya(e) : (e = cc11001100_hook("e", Za(Array.prototype.slice.call(e)), "assign"), H(a, b, e, d));
    }
    return e;
  }
  function Db(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", C(a.l), "var-init");
    let d = cc11001100_hook("d", Cb(a, b, 1, !1, c), "var-init"),
      f = cc11001100_hook("f", z(d), "var-init");
    if (!(f & 4)) {
      Object.isFrozen(d) && (d = cc11001100_hook("d", Za(d.slice()), "assign"), H(a, b, d, !1));
      let e = cc11001100_hook("e", 0, "var-init"),
        g = cc11001100_hook("g", 0, "var-init");
      for (; e < d.length; e++) {
        const h = cc11001100_hook("h", d[e], "var-init");
        null != h && (d[g++] = cc11001100_hook("d[g++]", h, "assign"));
      }
      g < e && (d.length = cc11001100_hook("d.length", g, "assign"));
      f |= cc11001100_hook("f", 5, "assign");
      c && (f |= cc11001100_hook("f", 18, "assign"));
      A(d, f);
      f & 2 && Object.freeze(d);
    }
    !c && (f & 2 || Object.isFrozen(d)) && (d = cc11001100_hook("d", Array.prototype.slice.call(d), "assign"), y(d, 5), H(a, b, d, !1));
    return d;
  }
  let Eb;
  function Fb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    {
      const g = cc11001100_hook("g", C(a.l), "var-init");
      b: {
        var d = cc11001100_hook("d", F(a, b), "var-init"),
          f = cc11001100_hook("f", g, "var-init"),
          e = cc11001100_hook("e", !1, "var-init");
        if (null == d) {
          if (f) {
            a = cc11001100_hook("a", Eb || (Eb = cc11001100_hook("Eb", new E(D([])), "assign")), "assign");
            break b;
          }
          d = cc11001100_hook("d", [], "assign");
        } else if (d.constructor === E) {
          if (0 == (d.i & 2) || f) {
            a = cc11001100_hook("a", d, "assign");
            break b;
          }
          d = cc11001100_hook("d", wb(d), "assign");
        } else Array.isArray(d) ? e = cc11001100_hook("e", C(d), "assign") : d = cc11001100_hook("d", [], "assign");
        if (f) {
          if (!d.length) {
            a = cc11001100_hook("a", Eb || (Eb = cc11001100_hook("Eb", new E(D([])), "assign")), "assign");
            break b;
          }
          e || (e = cc11001100_hook("e", !0, "assign"), D(d));
        } else if (e) for (e = cc11001100_hook("e", !1, "assign"), d = cc11001100_hook("d", Array.prototype.slice.call(d), "assign"), f = cc11001100_hook("f", 0, "assign"); f < d.length; f++) {
          const h = cc11001100_hook("h", d[f] = cc11001100_hook("d[f]", Array.prototype.slice.call(d[f]), "assign"), "var-init");
          Array.isArray(h[1]) && (h[1] = cc11001100_hook("h[1]", D(h[1]), "assign"));
        }
        e || (z(d) & 32 ? Ya(d) : z(a.l) & 16 && $a(d));
        e = cc11001100_hook("e", new E(d, c), "assign");
        H(a, b, e, !1);
        a = cc11001100_hook("a", e, "assign");
      }
      null == a ? c = cc11001100_hook("c", a, "assign") : (!g && c && (a.o = cc11001100_hook("a.o", !0, "assign")), c = cc11001100_hook("c", a, "assign"));
    }
    return c;
  }
  function I(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    const d = cc11001100_hook("d", F(a, c, !1), "var-init");
    b = cc11001100_hook("b", kb(d, b, !1, z(a.l)), "assign");
    b !== d && null != b && H(a, c, b, !1);
    return b;
  }
  function K(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    b = cc11001100_hook("b", I(a, b, c), "assign");
    if (null == b) return b;
    if (!C(a.l)) {
      const d = cc11001100_hook("d", Ab(b), "var-init");
      d !== b && (b = cc11001100_hook("b", d, "assign"), H(a, c, b, !1));
    }
    return b;
  }
  function Gb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", z(a.l), "var-init"),
      c = cc11001100_hook("c", !!(b & 2), "var-init");
    var d = cc11001100_hook("d", Hb, "var-init"),
      f = cc11001100_hook("f", !!(b & 2), "var-init");
    a.h || (a.h = cc11001100_hook("a.h", {}, "assign"));
    var e = cc11001100_hook("e", a.h[7], "var-init");
    var g = cc11001100_hook("g", Cb(a, 7, 3, void 0, f), "var-init");
    if (e) f || (f = cc11001100_hook("f", Object.isFrozen(e), "assign"), c && !f ? Object.freeze(e) : !c && f && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign"), a.h[7] = cc11001100_hook("a.h[7]", e, "assign")));else {
      var h = cc11001100_hook("h", g, "var-init");
      e = cc11001100_hook("e", [], "assign");
      f = cc11001100_hook("f", !!(b & 2), "assign");
      g = cc11001100_hook("g", !!(z(h) & 2), "assign");
      const l = cc11001100_hook("l", h, "var-init");
      !f && g && (h = cc11001100_hook("h", Array.prototype.slice.call(h), "assign"));
      var m = cc11001100_hook("m", b | (g ? 2 : 0), "var-init");
      b = cc11001100_hook("b", g, "assign");
      let t = cc11001100_hook("t", 0, "var-init");
      for (; t < h.length; t++) {
        var k = cc11001100_hook("k", h[t], "var-init");
        var n = cc11001100_hook("n", d, "var-init");
        Array.isArray(k) ? (rb(k, m), k = cc11001100_hook("k", new n(k), "assign")) : k = cc11001100_hook("k", void 0, "assign");
        void 0 !== k && (b || (b = cc11001100_hook("b", !!(2 & z(k.l)), "assign")), e.push(k));
      }
      a.h[7] = cc11001100_hook("a.h[7]", e, "assign");
      m = cc11001100_hook("m", z(h), "assign");
      d = cc11001100_hook("d", m | 33, "assign");
      d = cc11001100_hook("d", b ? d & -9 : d | 8, "assign");
      m != d && (b = cc11001100_hook("b", h, "assign"), Object.isFrozen(b) && (b = cc11001100_hook("b", Array.prototype.slice.call(b), "assign")), A(b, d), h = cc11001100_hook("h", b, "assign"));
      l !== h && H(a, 7, h);
      (f || c && g) && D(e);
      c && Object.freeze(e);
    }
    a = cc11001100_hook("a", Cb(a, 7, 3, void 0, c), "assign");
    if (!(c || z(a) & 8)) {
      for (c = cc11001100_hook("c", 0, "assign"); c < e.length; c++) f = cc11001100_hook("f", e[c], "assign"), g = cc11001100_hook("g", Ab(f), "assign"), f !== g && (e[c] = cc11001100_hook("e[c]", g, "assign"), a[c] = cc11001100_hook("a[c]", g.l, "assign"));
      y(a, 8);
    }
    return e;
  }
  function Ib(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (z(a.l) & 2) throw Error();
    var f = cc11001100_hook("f", null == c ? fb : Za([]), "var-init");
    if (null != c) {
      var e = cc11001100_hook("e", !!c.length, "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"); g < c.length; g++) {
        const h = cc11001100_hook("h", c[g], "var-init");
        e = cc11001100_hook("e", e && !C(h.l), "assign");
        f[g] = cc11001100_hook("f[g]", h.l, "assign");
      }
      e = cc11001100_hook("e", (e ? 8 : 0) | 1, "assign");
      g = cc11001100_hook("g", z(f), "assign");
      (g & e) !== e && (Object.isFrozen(f) && (f = cc11001100_hook("f", Array.prototype.slice.call(f), "assign")), A(f, g | e));
      a.h || (a.h = cc11001100_hook("a.h", {}, "assign"));
      a.h[b] = cc11001100_hook("a.h[b]", c, "assign");
    } else a.h && (a.h[b] = cc11001100_hook("a.h[b]", void 0, "assign"));
    return H(a, b, f, d);
  }
  function L(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == a ? b : a;
  }
  function M(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return L(F(a, b), "");
  }
  function N(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", F(a, b), "assign");
    return L(null == a ? a : !!a, !1);
  }
  function Q(a, b, c = 0) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return L(F(a, b), c);
  }
  ;
  let Jb;
  function Kb(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (z(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), jb(a), a;
        } else {
          if (Wa && null != a && a instanceof Uint8Array) {
            if (Xa) {
              for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
              b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
              a = cc11001100_hook("a", btoa(b), "assign");
            } else a = cc11001100_hook("a", Va(a), "assign");
            return a;
          }
          if (a instanceof E) return ub(a);
        }
    }
    return a;
  }
  ;
  function Lb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", Mb(a, b, c, void 0 !== d), "assign");else if (db(a)) {
        const f = cc11001100_hook("f", {}, "var-init");
        for (let e in a) f[e] = cc11001100_hook("f[e]", Lb(a[e], b, c, d), "assign");
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function Mb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    const f = cc11001100_hook("f", z(a), "var-init");
    d = cc11001100_hook("d", d ? !!(f & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) a[e] = cc11001100_hook("a[e]", Lb(a[e], b, c, d), "assign");
    c(f, a);
    return a;
  }
  function Nb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Lb(a, Ob, Pb);
  }
  function Ob(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.I === cb ? a.toJSON() : a instanceof E ? ub(a, Nb) : Kb(a);
  }
  function Pb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && jb(b);
  }
  ;
  function Qb(a, b, c = bb) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null != a) {
      if (Wa && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = cc11001100_hook("d", z(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return A(a, d | 18), a;
        a = cc11001100_hook("a", Mb(a, Qb, d & 4 ? bb : c, !0), "assign");
        b = cc11001100_hook("b", z(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      a.I === cb ? a = cc11001100_hook("a", Rb(a), "assign") : a instanceof E && (b = cc11001100_hook("b", D(wb(a, Qb)), "assign"), a = cc11001100_hook("a", new E(b, a.m, a.j, a.s), "assign"));
      return a;
    }
  }
  function Sb(a, b, c, d, f, e, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    (a = cc11001100_hook("a", a.h && a.h[c], "assign")) ? (d = cc11001100_hook("d", z(a), "assign"), d & 2 ? d = cc11001100_hook("d", a, "assign") : (e = cc11001100_hook("e", Array.prototype.map.call(a, Rb, void 0), "assign"), bb(d, e), Object.freeze(e), d = cc11001100_hook("d", e, "assign")), Ib(b, c, d, f)) : G(b, c, Qb(d, e, g), f);
  }
  function Rb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (C(a.l)) return a;
    a = cc11001100_hook("a", Tb(a, !0), "assign");
    D(a.l);
    return a;
  }
  function Tb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", a.l, "var-init");
    var d = cc11001100_hook("d", $a([]), "var-init"),
      f = cc11001100_hook("f", a.constructor.h, "var-init");
    f && d.push(f);
    f = cc11001100_hook("f", a.u, "assign");
    if (f) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      d.fill(void 0, d.length, c.length);
      var e = cc11001100_hook("e", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", e, "assign");
    }
    0 !== (z(c) & 128) && jb(d);
    b = cc11001100_hook("b", b || C(a.l) ? bb : ab, "assign");
    e = cc11001100_hook("e", a.constructor, "assign");
    Jb = cc11001100_hook("Jb", d, "assign");
    d = cc11001100_hook("d", new e(d), "assign");
    Jb = cc11001100_hook("Jb", void 0, "assign");
    a.T && (d.T = cc11001100_hook("d.T", a.T.slice(), "assign"));
    e = cc11001100_hook("e", !!(z(c) & 16), "assign");
    const g = cc11001100_hook("g", f ? c.length - 1 : c.length, "var-init");
    for (let h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Sb(a, d, h - a.v, c[h], !1, e, b);
    if (f) for (const h in f) Sb(a, d, +h, f[h], !0, e, b);
    return d;
  }
  function Ab(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!C(a.l)) return a;
    const b = cc11001100_hook("b", Tb(a, !1), "var-init");
    b.j = cc11001100_hook("b.j", a, "assign");
    return b;
  }
  ;
  function Ub(a) {
    cc11001100_hook("a", a, "function-parameter");
    eb = cc11001100_hook("eb", !0, "assign");
    try {
      return JSON.stringify(a.toJSON(), Vb);
    } finally {
      eb = cc11001100_hook("eb", !1, "assign");
    }
  }
  var S = cc11001100_hook("S", class {
    constructor(a, b, c) {
      null == a && (a = cc11001100_hook("a", Jb, "assign"));
      Jb = cc11001100_hook("Jb", void 0, "assign");
      var d = cc11001100_hook("d", this.constructor.h, "var-init");
      if (null == a) {
        a = cc11001100_hook("a", d ? [d] : [], "assign");
        var f = cc11001100_hook("f", !0, "var-init");
        A(a, 48);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (d && d !== a[0]) throw Error();
        var e = cc11001100_hook("e", y(a, 0) | 32, "var-init");
        f = cc11001100_hook("f", 0 !== (16 & e), "assign");
        if (128 & e) throw Error();
        A(a, e);
      }
      this.v = cc11001100_hook("this.v", d ? 0 : -1, "assign");
      this.h = cc11001100_hook("this.h", void 0, "assign");
      this.l = cc11001100_hook("this.l", a, "assign");
      a: {
        e = cc11001100_hook("e", this.l.length, "assign");
        d = cc11001100_hook("d", e - 1, "assign");
        if (e && (e = cc11001100_hook("e", this.l[d], "assign"), db(e))) {
          this.u = cc11001100_hook("this.u", e, "assign");
          this.i = cc11001100_hook("this.i", d - this.v, "assign");
          break a;
        }
        void 0 !== b && -1 < b ? (this.i = cc11001100_hook("this.i", Math.max(b, d + 1 - this.v), "assign"), this.u = cc11001100_hook("this.u", void 0, "assign")) : this.i = cc11001100_hook("this.i", Number.MAX_VALUE, "assign");
      }
      if (this.u && "g" in this.u) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c) {
        b = cc11001100_hook("b", f && !0, "assign");
        f = cc11001100_hook("f", this.i, "assign");
        let h;
        for (d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) if (e = cc11001100_hook("e", c[d], "assign"), e < f) {
          e += cc11001100_hook("e", this.v, "assign");
          var g = cc11001100_hook("g", a[e], "var-init");
          g ? Wb(g, b) : a[e] = cc11001100_hook("a[e]", fb, "assign");
        } else h || (h = cc11001100_hook("h", Bb(this), "assign")), (g = cc11001100_hook("g", h[e], "assign")) ? Wb(g, b) : h[e] = cc11001100_hook("h[e]", fb, "assign");
      }
    }
    toJSON() {
      const a = cc11001100_hook("a", this.l, "var-init");
      return eb ? a : Mb(a, Ob, Pb);
    }
  }, "var-init");
  function Wb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", z(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && A(a, c | d);
    }
  }
  S.prototype.I = cc11001100_hook("S.prototype.I", cb, "assign");
  S.prototype.toString = cc11001100_hook("S.prototype.toString", function () {
    return this.l.toString();
  }, "assign");
  function Vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Kb(b);
  }
  ;
  var Xb = cc11001100_hook("Xb", class extends S {
    constructor() {
      super();
    }
  }, "var-init");
  var Yb = cc11001100_hook("Yb", class extends S {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Zb = cc11001100_hook("Zb", class extends S {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var Hb = cc11001100_hook("Hb", class extends S {
    constructor(a) {
      super(a);
    }
    A() {
      return M(this, 3);
    }
    V(a) {
      G(this, 5, a);
    }
  }, "var-init");
  var T = cc11001100_hook("T", class extends S {
    constructor(a) {
      super(a);
    }
    A() {
      return M(this, 1);
    }
    V(a) {
      G(this, 2, a);
    }
  }, "var-init");
  var $b = cc11001100_hook("$b", class extends S {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var bc = cc11001100_hook("bc", class extends S {
      constructor(a) {
        super(a, -1, ac);
      }
    }, "var-init"),
    ac = cc11001100_hook("ac", [6, 7], "var-init");
  var dc = cc11001100_hook("dc", class extends S {
      constructor(a) {
        super(a, -1, cc);
      }
    }, "var-init"),
    cc = cc11001100_hook("cc", [17], "var-init");
  var ec = cc11001100_hook("ec", class extends S {
    constructor(a) {
      super(a);
    }
  }, "var-init");
  var fc = cc11001100_hook("fc", class extends S {
    constructor() {
      super();
    }
  }, "var-init");
  var gc = cc11001100_hook("gc", {
      capture: cc11001100_hook("capture", !0, "object-key-init")
    }, "var-init"),
    hc = cc11001100_hook("hc", {
      passive: cc11001100_hook("passive", !0, "object-key-init")
    }, "var-init"),
    ic = cc11001100_hook("ic", wa(function () {
      let a = cc11001100_hook("a", !1, "var-init");
      try {
        const b = cc11001100_hook("b", Object.defineProperty({}, "passive", {
          get: function () {
            a = cc11001100_hook("a", !0, "assign");
          }
        }), "var-init");
        p.addEventListener("test", null, b);
      } catch (b) {}
      return a;
    }), "var-init");
  function jc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.passive && ic() ? a : a.capture || !1 : !1;
  }
  function U(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.addEventListener && a.addEventListener(b, c, jc(d));
  }
  ;
  function kc() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36);
  }
  ;
  var lc = cc11001100_hook("lc", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init");
  function mc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.indexOf("#"), "var-init");
    0 > b && (b = cc11001100_hook("b", a.length, "assign"));
    var c = cc11001100_hook("c", a.indexOf("?"), "var-init");
    if (0 > c || c > b) {
      c = cc11001100_hook("c", b, "assign");
      var d = cc11001100_hook("d", "", "var-init");
    } else d = cc11001100_hook("d", a.substring(c + 1, b), "assign");
    return [a.slice(0, c), d, a.slice(b)];
  }
  function nc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b ? a ? a + "&" + b : b : a;
  }
  function oc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!b) return a;
    a = cc11001100_hook("a", mc(a), "assign");
    a[1] = cc11001100_hook("a[1]", nc(a[1], b), "assign");
    return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
  }
  function pc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (Array.isArray(b)) for (var d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) pc(a, String(b[d]), c);else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
  }
  function qc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init"),
      c;
    for (c in a) pc(c, a[c], b);
    return b.join("&");
  }
  function rc() {
    var a = cc11001100_hook("a", kc(), "var-init");
    a = cc11001100_hook("a", null != a ? "=" + encodeURIComponent(String(a)) : "", "assign");
    return oc("https://pagead2.googlesyndication.com/pagead/gen_204", "zx" + a);
  }
  var sc = cc11001100_hook("sc", /#|$/, "var-init");
  function tc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.search(sc), "var-init");
    a: {
      var d = cc11001100_hook("d", 0, "var-init");
      for (var f = cc11001100_hook("f", b.length, "var-init"); 0 <= (d = cc11001100_hook("d", a.indexOf(b, d), "assign")) && d < c;) {
        var e = cc11001100_hook("e", a.charCodeAt(d - 1), "var-init");
        if (38 == e || 63 == e) if (e = cc11001100_hook("e", a.charCodeAt(d + f), "assign"), !e || 61 == e || 38 == e || 35 == e) break a;
        d += cc11001100_hook("d", f + 1, "assign");
      }
      d = cc11001100_hook("d", -1, "assign");
    }
    if (0 > d) return null;
    f = cc11001100_hook("f", a.indexOf("&", d), "assign");
    if (0 > f || f > c) f = cc11001100_hook("f", c, "assign");
    d += cc11001100_hook("d", b.length + 1, "assign");
    return decodeURIComponent(a.slice(d, -1 !== f ? f : 0).replace(/\+/g, " "));
  }
  function uc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", mc(a), "assign");
    var c = cc11001100_hook("c", a[1], "var-init"),
      d = cc11001100_hook("d", [], "var-init");
    c && c.split("&").forEach(function (f) {
      var e = cc11001100_hook("e", f.indexOf("="), "var-init");
      b.hasOwnProperty(0 <= e ? f.slice(0, e) : f) || d.push(f);
    });
    a[1] = cc11001100_hook("a[1]", nc(d.join("&"), qc(b)), "assign");
    return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
  }
  ;
  function vc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  var wc = cc11001100_hook("wc", a => {
    a.preventDefault ? a.preventDefault() : a.returnValue = cc11001100_hook("a.returnValue", !1, "assign");
  }, "var-init");
  let xc = cc11001100_hook("xc", [], "var-init");
  const Cc = cc11001100_hook("Cc", () => {
    const a = cc11001100_hook("a", xc, "var-init");
    xc = cc11001100_hook("xc", [], "assign");
    for (const b of a) try {
      b();
    } catch (c) {}
  }, "var-init");
  var Dc = cc11001100_hook("Dc", a => {
      xc.push(a);
      1 == xc.length && (window.Promise ? Promise.resolve().then(Cc) : window.setImmediate ? setImmediate(Cc) : setTimeout(Cc, 0));
    }, "var-init"),
    Ec = cc11001100_hook("Ec", a => {
      var b = cc11001100_hook("b", V, "var-init");
      "complete" === b.readyState || "interactive" === b.readyState ? Dc(a) : b.addEventListener("DOMContentLoaded", a);
    }, "var-init"),
    Fc = cc11001100_hook("Fc", a => {
      var b = cc11001100_hook("b", window, "var-init");
      "complete" === b.document.readyState ? Dc(a) : b.addEventListener("load", a);
    }, "var-init");
  function Gc(a = document) {
    return a.createElement("img");
  }
  ;
  function Hc(a, b, c = null, d = !1) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ic(a, b, c, d);
  }
  function Ic(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
    const f = cc11001100_hook("f", Gc(a.document), "var-init");
    if (c || d) {
      const e = cc11001100_hook("e", g => {
        c && c(g);
        if (d) {
          g = cc11001100_hook("g", a.google_image_requests, "assign");
          const h = cc11001100_hook("h", Array.prototype.indexOf.call(g, f, void 0), "var-init");
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        f.removeEventListener && f.removeEventListener("load", e, jc());
        f.removeEventListener && f.removeEventListener("error", e, jc());
      }, "var-init");
      U(f, "load", e);
      U(f, "error", e);
    }
    f.src = cc11001100_hook("f.src", b, "assign");
    a.google_image_requests.push(f);
  }
  function Jc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c;
    if (c = cc11001100_hook("c", a.navigator, "assign")) c = cc11001100_hook("c", a.navigator.userAgent, "assign"), c = cc11001100_hook("c", /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1, "assign");
    c && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : Hc(a, b, void 0, !1);
  }
  ;
  let Kc = cc11001100_hook("Kc", 0, "var-init");
  function Lc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Mc(a, document.currentScript), "assign")) && a.getAttribute("data-jc-version") || "unknown";
  }
  function Mc(a, b = null) {
    cc11001100_hook("a", a, "function-parameter");
    return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`);
  }
  function Nc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!(.01 < Math.random())) {
      const b = cc11001100_hook("b", Mc(a, document.currentScript), "var-init");
      a = cc11001100_hook("a", `https://${b && "true" === b.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Lc(a)}&sample=${.01}`, "assign");
      Jc(window, a);
    }
  }
  ;
  var V = cc11001100_hook("V", document, "var-init"),
    W = cc11001100_hook("W", window, "var-init");
  const Oc = cc11001100_hook("Oc", [Aa, Ba, Da, Ca, za, Fa, Ha, Ea, Ia], "var-init");
  function Pc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a instanceof q) return a;
    const c = cc11001100_hook("c", La(a, Oc), "var-init");
    c === la && b(a);
    return c;
  }
  var Qc = cc11001100_hook("Qc", a => {
    var b = cc11001100_hook("b", `${"http:" === W.location.protocol ? "http:" : "https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`, "var-init");
    return c => {
      c = cc11001100_hook("c", qc({
        id: cc11001100_hook("id", "unsafeurl", "object-key-init"),
        ctx: cc11001100_hook("ctx", a, "object-key-init"),
        url: cc11001100_hook("url", c, "object-key-init")
      }), "assign");
      c = cc11001100_hook("c", oc(b, c), "assign");
      navigator.sendBeacon && navigator.sendBeacon(c, "");
    };
  }, "var-init");
  var Rc = cc11001100_hook("Rc", a => {
    var b = cc11001100_hook("b", V, "var-init");
    try {
      return b.querySelectorAll("*[" + a + "]");
    } catch (c) {
      return [];
    }
  }, "var-init");
  class Sc {
    constructor(a, b) {
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", {}, "assign");
    }
  }
  ;
  const Tc = cc11001100_hook("Tc", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  var Uc = cc11001100_hook("Uc", class {
      constructor(a, b) {
        this.h = cc11001100_hook("this.h", a, "assign");
        this.i = cc11001100_hook("this.i", b, "assign");
      }
    }, "var-init"),
    Vc = cc11001100_hook("Vc", class {
      constructor(a, b) {
        this.url = cc11001100_hook("this.url", a, "assign");
        this.U = cc11001100_hook("this.U", !!b, "assign");
        this.depth = cc11001100_hook("this.depth", null, "assign");
      }
    }, "var-init");
  function Wc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    const c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function Xc(a, b, c, d, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    const e = cc11001100_hook("e", [], "var-init");
    vc(a, function (g, h) {
      (g = cc11001100_hook("g", Yc(g, b, c, d, f), "assign")) && e.push(h + "=" + g);
    });
    return e.join(b);
  }
  function Yc(a, b, c, d, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (null == a) return "";
    b = cc11001100_hook("b", b || "&", "assign");
    c = cc11001100_hook("c", c || ",$", "assign");
    "string" == typeof c && (c = cc11001100_hook("c", c.split(""), "assign"));
    if (a instanceof Array) {
      if (d = cc11001100_hook("d", d || 0, "assign"), d < c.length) {
        const e = cc11001100_hook("e", [], "var-init");
        for (let g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) e.push(Yc(a[g], b, c, d + 1, f));
        return e.join(c[d]);
      }
    } else if ("object" == typeof a) return f = cc11001100_hook("f", f || 0, "assign"), 2 > f ? encodeURIComponent(Xc(a, b, c, d, f + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function Zc(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b = cc11001100_hook("b", 1, "var-init");
    for (const c in a.i) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.j.length - 1;
  }
  function $c(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    let c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
      d = cc11001100_hook("d", Zc(a) - b.length, "var-init");
    if (0 > d) return "";
    a.h.sort(function (e, g) {
      return e - g;
    });
    b = cc11001100_hook("b", null, "assign");
    let f = cc11001100_hook("f", "", "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < a.h.length; e++) {
      const g = cc11001100_hook("g", a.h[e], "var-init"),
        h = cc11001100_hook("h", a.i[g], "var-init");
      for (let m = cc11001100_hook("m", 0, "var-init"); m < h.length; m++) {
        if (!d) {
          b = cc11001100_hook("b", null == b ? g : b, "assign");
          break;
        }
        let k = cc11001100_hook("k", Xc(h[m], a.j, ",$"), "var-init");
        if (k) {
          k = cc11001100_hook("k", f + k, "assign");
          if (d >= k.length) {
            d -= cc11001100_hook("d", k.length, "assign");
            c += cc11001100_hook("c", k, "assign");
            f = cc11001100_hook("f", a.j, "assign");
            break;
          }
          b = cc11001100_hook("b", null == b ? g : b, "assign");
        }
      }
    }
    a = cc11001100_hook("a", "", "assign");
    null != b && (a = cc11001100_hook("a", f + "trn=" + b, "assign"));
    return c + a;
  }
  class ad {
    constructor() {
      this.j = cc11001100_hook("this.j", "&", "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.m = cc11001100_hook("this.m", 0, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
    }
  }
  ;
  function bd() {
    var a = cc11001100_hook("a", cd, "var-init"),
      b = cc11001100_hook("b", window.google_srt, "var-init");
    0 <= b && 1 >= b && (a.h = cc11001100_hook("a.h", b, "assign"));
  }
  function dd(a, b, c, d = !1, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if ((d ? a.h : Math.random()) < (f || .01)) try {
      let e;
      c instanceof ad ? e = cc11001100_hook("e", c, "assign") : (e = cc11001100_hook("e", new ad(), "assign"), vc(c, (h, m) => {
        var k = cc11001100_hook("k", e, "var-init");
        const n = cc11001100_hook("n", k.m++, "var-init");
        h = cc11001100_hook("h", Wc(m, h), "assign");
        k.h.push(n);
        k.i[n] = cc11001100_hook("k.i[n]", h, "assign");
      }));
      const g = cc11001100_hook("g", $c(e, "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && Hc(p, g);
    } catch (e) {}
  }
  class ed {
    constructor() {
      this.h = cc11001100_hook("this.h", Math.random(), "assign");
    }
  }
  ;
  let fd = cc11001100_hook("fd", null, "var-init");
  function gd() {
    const a = cc11001100_hook("a", p.performance, "var-init");
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function hd() {
    const a = cc11001100_hook("a", p.performance, "var-init");
    return a && a.now ? a.now() : null;
  }
  ;
  class id {
    constructor(a, b) {
      var c = cc11001100_hook("c", hd() || gd(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
  }
  ;
  const X = cc11001100_hook("X", p.performance, "var-init"),
    jd = cc11001100_hook("jd", !!(X && X.mark && X.measure && X.clearMarks), "var-init"),
    kd = cc11001100_hook("kd", wa(() => {
      var a;
      if (a = cc11001100_hook("a", jd, "assign")) {
        var b;
        if (null === fd) {
          fd = cc11001100_hook("fd", "", "assign");
          try {
            a = cc11001100_hook("a", "", "assign");
            try {
              a = cc11001100_hook("a", p.top.location.hash, "assign");
            } catch (c) {
              a = cc11001100_hook("a", p.location.hash, "assign");
            }
            a && (fd = cc11001100_hook("fd", (b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "assign")) ? b[1] : "", "assign"));
          } catch (c) {}
        }
        b = cc11001100_hook("b", fd, "assign");
        a = cc11001100_hook("a", !!b.indexOf && 0 <= b.indexOf("1337"), "assign");
      }
      return a;
    }), "var-init");
  function ld(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && X && kd() && (X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  class md {
    constructor() {
      var a = cc11001100_hook("a", window, "var-init");
      this.i = cc11001100_hook("this.i", [], "assign");
      this.j = cc11001100_hook("this.j", a || p, "assign");
      let b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.i = cc11001100_hook("this.i", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.h = cc11001100_hook("this.h", kd() || (null != b ? b : 1 > Math.random()), "assign");
    }
    start(a, b) {
      if (!this.h) return null;
      a = cc11001100_hook("a", new id(a, b), "assign");
      b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_start`, "assign");
      X && kd() && X.mark(b);
      return a;
    }
    end(a) {
      if (this.h && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (hd() || gd()) - a.value, "assign");
        var b = cc11001100_hook("b", `goog_${a.label}_${a.uniqueId}_end`, "var-init");
        X && kd() && X.mark(b);
        !this.h || 2048 < this.i.length || this.i.push(a);
      }
    }
  }
  ;
  function nd(a) {
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
  function od(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    let d, f;
    try {
      a.h && a.h.h ? (f = cc11001100_hook("f", a.h.start(b.toString(), 3), "assign"), d = cc11001100_hook("d", c(), "assign"), a.h.end(f)) : d = cc11001100_hook("d", c(), "assign");
    } catch (e) {
      c = cc11001100_hook("c", !0, "assign");
      try {
        ld(f), c = cc11001100_hook("c", a.s(b, new Sc(e, {
          message: cc11001100_hook("message", nd(e), "object-key-init")
        }), void 0, void 0), "assign");
      } catch (g) {
        a.o(217, g);
      }
      if (c) {
        let g, h;
        null == (g = cc11001100_hook("g", window.console, "assign")) || null == (h = cc11001100_hook("h", g.error, "assign")) || h.call(g, e);
      } else throw e;
    }
    return d;
  }
  function pd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", qd, "var-init");
    return (...d) => od(c, a, () => b.apply(void 0, d));
  }
  class rd {
    constructor(a = null) {
      this.j = cc11001100_hook("this.j", cd, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.s = cc11001100_hook("this.s", this.o, "assign");
      this.h = cc11001100_hook("this.h", a, "assign");
      this.m = cc11001100_hook("this.m", !1, "assign");
    }
    pinger() {
      return this.j;
    }
    o(a, b, c, d, f) {
      f = cc11001100_hook("f", f || "jserror", "assign");
      let e;
      try {
        const O = cc11001100_hook("O", new ad(), "var-init");
        var g = cc11001100_hook("g", O, "var-init");
        g.h.push(1);
        g.i[1] = cc11001100_hook("g.i[1]", Wc("context", a), "assign");
        b.error && b.meta && b.id || (b = cc11001100_hook("b", new Sc(b, {
          message: cc11001100_hook("message", nd(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          g = cc11001100_hook("g", O, "assign");
          var h = cc11001100_hook("h", b.msg.substring(0, 512), "var-init");
          g.h.push(2);
          g.i[2] = cc11001100_hook("g.i[2]", Wc("msg", h), "assign");
        }
        var m = cc11001100_hook("m", b.meta || {}, "var-init");
        b = cc11001100_hook("b", m, "assign");
        if (this.i) try {
          this.i(b);
        } catch (J) {}
        if (d) try {
          d(b);
        } catch (J) {}
        d = cc11001100_hook("d", O, "assign");
        m = cc11001100_hook("m", [m], "assign");
        d.h.push(3);
        d.i[3] = cc11001100_hook("d.i[3]", m, "assign");
        d = cc11001100_hook("d", p, "assign");
        m = cc11001100_hook("m", [], "assign");
        let Ga;
        b = cc11001100_hook("b", null, "assign");
        do {
          var k = cc11001100_hook("k", d, "var-init");
          try {
            var n;
            if (n = cc11001100_hook("n", !!k && null != k.location.href, "assign")) b: {
              try {
                Na(k.foo);
                n = cc11001100_hook("n", !0, "assign");
                break b;
              } catch (J) {}
              n = cc11001100_hook("n", !1, "assign");
            }
            var l = cc11001100_hook("l", n, "var-init");
          } catch (J) {
            l = cc11001100_hook("l", !1, "assign");
          }
          l ? (Ga = cc11001100_hook("Ga", k.location.href, "assign"), b = cc11001100_hook("b", k.document && k.document.referrer || null, "assign")) : (Ga = cc11001100_hook("Ga", b, "assign"), b = cc11001100_hook("b", null, "assign"));
          m.push(new Vc(Ga || ""));
          try {
            d = cc11001100_hook("d", k.parent, "assign");
          } catch (J) {
            d = cc11001100_hook("d", null, "assign");
          }
        } while (d && k != d);
        for (let J = cc11001100_hook("J", 0, "var-init"), yc = cc11001100_hook("yc", m.length - 1, "var-init"); J <= yc; ++J) m[J].depth = cc11001100_hook("m[J].depth", yc - J, "assign");
        k = cc11001100_hook("k", p, "assign");
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == m.length - 1) for (l = cc11001100_hook("l", 1, "assign"); l < m.length; ++l) {
          var t = cc11001100_hook("t", m[l], "var-init");
          t.url || (t.url = cc11001100_hook("t.url", k.location.ancestorOrigins[l - 1] || "", "assign"), t.U = cc11001100_hook("t.U", !0, "assign"));
        }
        var B = cc11001100_hook("B", m, "var-init");
        let lb = cc11001100_hook("lb", new Vc(p.location.href, !1), "var-init");
        k = cc11001100_hook("k", null, "assign");
        const nb = cc11001100_hook("nb", B.length - 1, "var-init");
        for (t = cc11001100_hook("t", nb, "assign"); 0 <= t; --t) {
          var P = cc11001100_hook("P", B[t], "var-init");
          !k && Tc.test(P.url) && (k = cc11001100_hook("k", P, "assign"));
          if (P.url && !P.U) {
            lb = cc11001100_hook("lb", P, "assign");
            break;
          }
        }
        P = cc11001100_hook("P", null, "assign");
        const Jd = cc11001100_hook("Jd", B.length && B[nb].url, "var-init");
        0 != lb.depth && Jd && (P = cc11001100_hook("P", B[nb], "assign"));
        e = cc11001100_hook("e", new Uc(lb, P), "assign");
        if (e.i) {
          B = cc11001100_hook("B", O, "assign");
          var R = cc11001100_hook("R", e.i.url || "", "var-init");
          B.h.push(4);
          B.i[4] = cc11001100_hook("B.i[4]", Wc("top", R), "assign");
        }
        var ob = cc11001100_hook("ob", {
          url: cc11001100_hook("url", e.h.url || "", "object-key-init")
        }, "var-init");
        if (e.h.url) {
          var pb = cc11001100_hook("pb", e.h.url.match(lc), "var-init"),
            fa = cc11001100_hook("fa", pb[1], "var-init"),
            zc = cc11001100_hook("zc", pb[3], "var-init"),
            Ac = cc11001100_hook("Ac", pb[4], "var-init");
          R = cc11001100_hook("R", "", "assign");
          fa && (R += cc11001100_hook("R", fa + ":", "assign"));
          zc && (R += cc11001100_hook("R", "//", "assign"), R += cc11001100_hook("R", zc, "assign"), Ac && (R += cc11001100_hook("R", ":" + Ac, "assign")));
          var Bc = cc11001100_hook("Bc", R, "var-init");
        } else Bc = cc11001100_hook("Bc", "", "assign");
        fa = cc11001100_hook("fa", O, "assign");
        ob = cc11001100_hook("ob", [ob, {
          url: cc11001100_hook("url", Bc, "object-key-init")
        }], "assign");
        fa.h.push(5);
        fa.i[5] = cc11001100_hook("fa.i[5]", ob, "assign");
        dd(this.j, f, O, this.m, c);
      } catch (O) {
        try {
          dd(this.j, f, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", nd(O), "object-key-init"),
            url: cc11001100_hook("url", e && e.h.url, "object-key-init")
          }, this.m, c);
        } catch (Ga) {}
      }
      return !0;
    }
  }
  ;
  class sd {}
  ;
  let cd, qd;
  const Y = cc11001100_hook("Y", new md(), "var-init");
  var td = cc11001100_hook("td", () => {
    window.google_measure_js_timing || (Y.h = cc11001100_hook("Y.h", !1, "assign"), Y.i != Y.j.google_js_reporting_queue && (kd() && Array.prototype.forEach.call(Y.i, ld, void 0), Y.i.length = cc11001100_hook("Y.i.length", 0, "assign")));
  }, "var-init");
  (a => {
    cd = cc11001100_hook("cd", null != a ? a : new ed(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    bd();
    qd = cc11001100_hook("qd", new rd(Y), "assign");
    qd.i = cc11001100_hook("qd.i", b => {
      const c = cc11001100_hook("c", Kc, "var-init");
      0 !== c && (b.jc = cc11001100_hook("b.jc", String(c), "assign"), b.shv = cc11001100_hook("b.shv", Lc(c), "assign"));
    }, "assign");
    qd.m = cc11001100_hook("qd.m", !0, "assign");
    "complete" == window.document.readyState ? td() : Y.h && U(window, "load", () => {
      td();
    });
  })();
  var Z = cc11001100_hook("Z", (a, b) => pd(a, b), "var-init"),
    ud = cc11001100_hook("ud", a => {
      var b = cc11001100_hook("b", sd, "var-init");
      var c = cc11001100_hook("c", "S", "var-init");
      b.S && b.hasOwnProperty(c) || (c = cc11001100_hook("c", new b(), "assign"), b.S = cc11001100_hook("b.S", c, "assign"));
      b = cc11001100_hook("b", [], "assign");
      !a.eid && b.length && (a.eid = cc11001100_hook("a.eid", b.toString(), "assign"));
      dd(cd, "gdn-asoch", a, !0);
    }, "var-init");
  function vd(a = window) {
    return a;
  }
  ;
  var wd = cc11001100_hook("wd", (a, b) => {
      b = cc11001100_hook("b", M(a, 2) || b, "assign");
      if (!b) return "";
      if (N(a, 13)) return b;
      const c = cc11001100_hook("c", /[?&]adurl=([^&]+)/.exec(b), "var-init");
      if (!c) return b;
      const d = cc11001100_hook("d", [b.slice(0, c.index + 1)], "var-init");
      Fb(a, 4).forEach((f, e) => {
        d.push(encodeURIComponent(e) + "=" + encodeURIComponent(f) + "&");
      });
      d.push(b.slice(c.index + 1));
      return d.join("");
    }, "var-init"),
    xd = cc11001100_hook("xd", (a, b = []) => {
      b = cc11001100_hook("b", 0 < b.length ? b : Rc("data-asoch-targets"), "assign");
      a = cc11001100_hook("a", Fb(a, 1, bc), "assign");
      const c = cc11001100_hook("c", [], "var-init");
      for (let h = cc11001100_hook("h", 0, "var-init"); h < b.length; ++h) {
        var d = cc11001100_hook("d", b[h].getAttribute("data-asoch-targets"), "var-init"),
          f = cc11001100_hook("f", d.split(","), "var-init"),
          e = cc11001100_hook("e", !0, "var-init");
        for (let m of f) if (!a.has(m)) {
          e = cc11001100_hook("e", !1, "assign");
          break;
        }
        if (e) {
          e = cc11001100_hook("e", a.get(f[0]), "assign");
          for (d = cc11001100_hook("d", 1, "assign"); d < f.length; ++d) {
            var g = cc11001100_hook("g", a.get(f[d]), "var-init");
            e = cc11001100_hook("e", Tb(e, !1).toJSON(), "assign");
            g = cc11001100_hook("g", g.toJSON(), "assign");
            const m = cc11001100_hook("m", Math.max(e.length, g.length), "var-init");
            for (let k = cc11001100_hook("k", 0, "var-init"); k < m; ++k) null == e[k] && (e[k] = cc11001100_hook("e[k]", g[k], "assign"));
            e = cc11001100_hook("e", new bc(e), "assign");
          }
          f = cc11001100_hook("f", Fb(e, 4), "assign");
          null != F(e, 5) && f.set("nb", Q(e, 5, 0).toString());
          c.push({
            element: cc11001100_hook("element", b[h], "object-key-init"),
            data: cc11001100_hook("data", e, "object-key-init")
          });
        } else ud({
          type: cc11001100_hook("type", 1, "object-key-init"),
          data: cc11001100_hook("data", d, "object-key-init")
        });
      }
      return c;
    }, "var-init"),
    Ad = cc11001100_hook("Ad", (a, b, c, d) => {
      c = cc11001100_hook("c", wd(b, c), "assign");
      if (0 !== c.length) {
        if ("2" === tc(c, "ase") && 1087 !== d) {
          let e;
          if (609 === d) e = cc11001100_hook("e", 4, "assign");else {
            var f;
            e = cc11001100_hook("e", (null == (f = cc11001100_hook("f", V.featurePolicy, "assign")) ? 0 : f.allowedFeatures().includes("attribution-reporting")) ? 6 : 5, "assign");
          }
          f = cc11001100_hook("f", "", "assign");
          yd(c) ? f = cc11001100_hook("f", zd(ca(new ea({
            url: cc11001100_hook("url", c, "object-key-init")
          })), "nis", e.toString()), "assign") : c = cc11001100_hook("c", zd(c, "nis", e.toString()), "assign");
          a.setAttribute("attributionsrc", f);
        }
        xa(a, Pc(c, Qc(d)));
        a.target || (a.target = cc11001100_hook("a.target", null != F(b, 11) ? M(b, 11) : "_top", "assign"));
      }
    }, "var-init"),
    Bd = cc11001100_hook("Bd", a => {
      for (const b of a) if (a = cc11001100_hook("a", b.data, "assign"), "A" == b.element.tagName && !N(a, 1)) {
        const c = cc11001100_hook("c", b.element, "var-init");
        Ad(c, a, c.href, 609);
      }
    }, "var-init"),
    yd = cc11001100_hook("yd", a => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a), "var-init"),
    Cd = cc11001100_hook("Cd", a => {
      const b = cc11001100_hook("b", p.oneAfmaInstance, "var-init");
      if (b) for (const c of a) if ((a = cc11001100_hook("a", c.data, "assign")) && void 0 !== I(a, $b, 8)) {
        const d = cc11001100_hook("d", M(K(a, $b, 8), 4), "var-init");
        if (d) {
          b.fetchAppStoreOverlay(d, void 0, M(K(a, $b, 8), 6));
          break;
        }
      }
    }, "var-init"),
    Dd = cc11001100_hook("Dd", (a, b = 500) => {
      const c = cc11001100_hook("c", [], "var-init"),
        d = cc11001100_hook("d", [], "var-init");
      for (var f of a) (a = cc11001100_hook("a", f.data, "assign")) && void 0 !== I(a, T, 12) && (d.push(K(a, T, 12)), c.push(K(a, T, 12).A()));
      f = cc11001100_hook("f", (e, g) => {
        if (g) for (const h of d) g[h.A()] && h.V(!0);
      }, "assign");
      a = cc11001100_hook("a", p.oneAfmaInstance, "assign");
      for (const e of c) {
        let g;
        null == (g = cc11001100_hook("g", a, "assign")) || g.canOpenAndroidApp(e, f, () => {}, b);
      }
    }, "var-init"),
    Fd = cc11001100_hook("Fd", (a, b, c, d, f) => {
      if (!b || void 0 === I(b, $b, 8)) return !1;
      const e = cc11001100_hook("e", K(b, $b, 8), "var-init");
      let g = cc11001100_hook("g", M(e, 2), "var-init");
      Fb(b, 10).forEach((k, n) => {
        var l = cc11001100_hook("l", g, "var-init");
        n = cc11001100_hook("n", encodeURIComponent(n), "assign");
        const t = cc11001100_hook("t", encodeURIComponent(k), "var-init");
        k = cc11001100_hook("k", new RegExp("[?&]" + n + "=([^&]+)"), "assign");
        const B = cc11001100_hook("B", k.exec(l), "var-init");
        console.log(B);
        n = cc11001100_hook("n", n + "=" + t, "assign");
        g = cc11001100_hook("g", B ? l.replace(k, B[0].charAt(0) + n) : l.replace("?", "?" + n + "&"), "assign");
      });
      Ed(b) && N(b, 15) && !/[?&]label=/.test(c) && (c = cc11001100_hook("c", zd(c, "label", "deep_link_fallback"), "assign"));
      const h = cc11001100_hook("h", k => d.openStoreOverlay(k, void 0, M(e, 6)), "var-init"),
        m = cc11001100_hook("m", k => Jc(W, k), "var-init");
      return d.redirectForStoreU2({
        clickUrl: cc11001100_hook("clickUrl", c, "object-key-init"),
        trackingUrl: cc11001100_hook("trackingUrl", M(e, 3), "object-key-init"),
        finalUrl: cc11001100_hook("finalUrl", g, "object-key-init"),
        pingFunc: cc11001100_hook("pingFunc", f ? m : d.click, "object-key-init"),
        openFunc: cc11001100_hook("openFunc", (null == a ? 0 : N(a, 1)) ? h : d.openIntentOrNativeApp, "object-key-init"),
        isExternalClickUrl: cc11001100_hook("isExternalClickUrl", N(b, 13), "object-key-init")
      });
    }, "var-init"),
    Hd = cc11001100_hook("Hd", (a, b, c, d, f, e, g, h = !1) => {
      f = cc11001100_hook("f", N(f, 15), "assign");
      const m = cc11001100_hook("m", yd(e), "var-init");
      !a || !b || f && m || (e = cc11001100_hook("e", h ? Gd(e) : Gd(e, g.click), "assign"));
      e && e.startsWith("intent:") ? g.openIntentOrNativeApp(e) : c ? d ? g.openBrowser(e) : g.openChromeCustomTab(e) : g.openSystemBrowser(e, {
        useFirstPackage: cc11001100_hook("useFirstPackage", !0, "object-key-init"),
        useRunningProcess: cc11001100_hook("useRunningProcess", !0, "object-key-init")
      });
    }, "var-init"),
    Gd = cc11001100_hook("Gd", (a, b = null) => {
      if (null !== b) {
        const c = cc11001100_hook("c", new ea({
          url: cc11001100_hook("url", a, "object-key-init")
        }), "var-init");
        if (c.i && c.j || c.o) return b(ca(c)), da(c, 1);
      } else return ({
        W: b
      } = cc11001100_hook("", {}, "assign")), b = cc11001100_hook("b", new ea({
        url: cc11001100_hook("url", a, "object-key-init"),
        W: cc11001100_hook("W", b, "object-key-init")
      }), "assign"), b.i && b.j || b.o ? navigator.sendBeacon ? navigator.sendBeacon(ca(b), "") ? da(b, 1) : da(b, 2) : da(b, 0) : a;
      return a;
    }, "var-init"),
    Id = cc11001100_hook("Id", (a, b = !0, c = !1) => {
      let d = cc11001100_hook("d", !1, "var-init");
      c && W.navigator && W.navigator.sendBeacon && (d = cc11001100_hook("d", W.navigator.sendBeacon(a), "assign"));
      d || (b && W.fetch ? W.fetch(a, {
        method: cc11001100_hook("method", "GET", "object-key-init"),
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      }).then(f => {
        f.ok || Hc(W, a);
      }) : Hc(W, a));
    }, "var-init"),
    zd = cc11001100_hook("zd", (a, b, c) => {
      b = cc11001100_hook("b", encodeURIComponent(String(b)), "assign");
      c = cc11001100_hook("c", encodeURIComponent(String(c)), "assign");
      return a.replace("?", "?" + b + "=" + c + "&");
    }, "var-init"),
    Ed = cc11001100_hook("Ed", a => {
      for (const b of Gb(a)) if (3 === Q(b, 1, 0) && M(b, 2)) return !0;
      return !1;
    }, "var-init");
  var Kd = cc11001100_hook("Kd", (a, b) => a && (a = cc11001100_hook("a", a.match(b + "=([^&]+)"), "assign")) && 2 == a.length ? a[1] : "", "var-init");
  var Ld = cc11001100_hook("Ld", class extends S {
    constructor() {
      super();
    }
  }, "var-init");
  function Md(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return G(a, 2, b);
  }
  function Nd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return G(a, 3, b);
  }
  function Od(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return G(a, 4, b);
  }
  function Pd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return G(a, 5, b);
  }
  function Qd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return G(a, 9, b);
  }
  function Rd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ib(a, 10, b);
  }
  function Sd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return G(a, 11, b);
  }
  function Td(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return G(a, 1, b);
  }
  function Ud(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return G(a, 7, b);
  }
  var Wd = cc11001100_hook("Wd", class extends S {
      constructor() {
        super(void 0, -1, Vd);
      }
    }, "var-init"),
    Vd = cc11001100_hook("Vd", [10, 6], "var-init");
  const Xd = cc11001100_hook("Xd", "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" "), "var-init");
  function Yd(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    return null != (b = cc11001100_hook("b", a.google_tag_data, "assign")) ? b : a.google_tag_data = cc11001100_hook("a.google_tag_data", {}, "assign");
  }
  function Zd(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b, c;
    return "function" === typeof (null == (b = cc11001100_hook("b", a.navigator, "assign")) ? void 0 : null == (c = cc11001100_hook("c", b.userAgentData, "assign")) ? void 0 : c.getHighEntropyValues);
  }
  function $d() {
    var a = cc11001100_hook("a", window, "var-init");
    if (!Zd(a)) return null;
    const b = cc11001100_hook("b", Yd(a), "var-init");
    if (b.uach_promise) return b.uach_promise;
    a = cc11001100_hook("a", a.navigator.userAgentData.getHighEntropyValues(Xd).then(c => {
      null != b.uach || (b.uach = cc11001100_hook("b.uach", c, "assign"));
      return c;
    }), "assign");
    return b.uach_promise = cc11001100_hook("b.uach_promise", a, "assign");
  }
  function ae(a) {
    cc11001100_hook("a", a, "function-parameter");
    let b;
    return Sd(Rd(Pd(Md(Td(Od(Ud(Qd(Nd(new Wd(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = cc11001100_hook("b", a.fullVersionList, "assign")) ? void 0 : b.map(c => {
      var d = cc11001100_hook("d", new Ld(), "var-init");
      d = cc11001100_hook("d", G(d, 1, c.brand), "assign");
      return G(d, 2, c.version);
    })) || []), a.wow64 || !1);
  }
  function be() {
    let a, b;
    return null != (b = cc11001100_hook("b", null == (a = cc11001100_hook("a", $d(), "assign")) ? void 0 : a.then(c => ae(c)), "assign")) ? b : null;
  }
  ;
  function ce(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (const b of a) if ("A" == b.element.tagName) {
      a = cc11001100_hook("a", b.element, "assign");
      const c = cc11001100_hook("c", b.data, "var-init");
      null == F(c, 2) && G(c, 2, a.href);
    }
  }
  function de(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return ma(a, c => c.element === b);
  }
  function ee(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ec(Z(556, () => {
      new fe(a || {});
    }));
  }
  function ge(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (!N(d, 13)) {
      var f = cc11001100_hook("f", c.href, "var-init");
      var e = cc11001100_hook("e", /[?&]adurl=([^&]+)/.exec(f), "var-init");
      f = cc11001100_hook("f", e ? [f.slice(0, e.index), f.slice(e.index)] : [f, ""], "assign");
      for (xa(c, Pc(f[0], Qc(557))); !c.id;) if (e = cc11001100_hook("e", "asoch-id-" + kc(), "assign"), !V.getElementById(e)) {
        c.id = cc11001100_hook("c.id", e, "assign");
        break;
      }
      e = cc11001100_hook("e", c.id, "assign");
      "function" === typeof window.xy && window.xy(b, c, V.body);
      "function" === typeof window.mb && window.mb(c);
      "function" === typeof window.bgz && window.bgz(e);
      "function" === typeof window.ja && window.ja(e, d ? Q(d, 5, 0) : 0);
      "function" === typeof window.vti && window.vti(e);
      a.o && "function" === typeof window.ss && (a.N ? window.ss(e, 1, a.o) : window.ss(a.o, 1));
      0 < f.length && (a = cc11001100_hook("a", 0 < a.C.length && (null == d || null == F(d, 19)) ? c.href + "&uach=" + encodeURIComponent(a.C) + f[1] : c.href + f[1], "assign"), xa(c, Pc(a, Qc(557))));
    }
  }
  async function he(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    let f = cc11001100_hook("f", "", "var-init");
    var e = cc11001100_hook("e", p.oneAfmaInstance, "var-init");
    if (e && (b.preventDefault(), f = cc11001100_hook("f", (await e.appendClickSignalsAsync(c.href)) || "", "assign"), a.K && (e = cc11001100_hook("e", await e.getNativeClickMeta(), "assign")))) {
      if (e.customClickGestureEligible) return;
      f = cc11001100_hook("f", zd(f, "nas", e.encodedNas), "assign");
    }
    ie(a, b, c, d, f);
  }
  function ie(a, b, c, d, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    const e = cc11001100_hook("e", N(a.i, 2), "var-init"),
      g = cc11001100_hook("g", e && 300 < Date.now() - a.M, "var-init"),
      h = cc11001100_hook("h", p.oneAfmaInstance, "var-init");
    h ? (wc(b), (() => {
      let m = cc11001100_hook("m", h.logScionEventAndAddParam(f), "var-init");
      if (!a.s && d && void 0 !== I(d, T, 12)) {
        var k = cc11001100_hook("k", K(d, T, 12).A(), "var-init");
        if (0 < Gb(d).length) for (const n of Gb(d));
        N(K(d, T, 12), 2) ? (h.click(m), h.openAndroidApp(k), k = cc11001100_hook("k", !0, "assign")) : k = cc11001100_hook("k", !1, "assign");
      } else k = cc11001100_hook("k", !1, "assign");
      k || Fd(a.B, d, m, h, a.Y) || Hd(e, g, a.aa, a.s, d, m, h, a.Z);
    })()) : (N(a.i, 21) && c.href && "_blank" !== c.target && (a.m = cc11001100_hook("a.m", tc(c.href, "ai") || "", "assign")) && (a.j = cc11001100_hook("a.j", "clicked", "assign")), b = cc11001100_hook("b", window, "assign"), a.X && b.pawsig && "function" === typeof b.pawsig.clk ? b.pawsig.clk(c) : g && (b = cc11001100_hook("b", "2" === tc(c.href, "ase") && yd(c.href) ? Gd(c.href, () => {}) : a.ba ? Gd(c.href, m => {
      W.fetch(m, {
        method: cc11001100_hook("method", "GET", "object-key-init"),
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      });
    }) : Gd(c.href), "assign"), b !== c.href && xa(c, Pc(b, Qc(599)))));
    g && (a.M = cc11001100_hook("a.M", Date.now(), "assign"));
    Nc(a.L);
  }
  var fe = cc11001100_hook("fe", class {
    constructor(a) {
      this.s = cc11001100_hook("this.s", Ra || Pa || Sa || Qa, "assign");
      var b = cc11001100_hook("b", Rc("data-asoch-meta"), "var-init");
      if (1 !== b.length) ud({
        type: cc11001100_hook("type", 2, "object-key-init"),
        data: cc11001100_hook("data", b.length, "object-key-init")
      });else {
        this.L = cc11001100_hook("this.L", 70, "assign");
        this.i = cc11001100_hook("this.i", new dc(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []), "assign");
        this.J = cc11001100_hook("this.J", a["extra-meta"] ? new dc(JSON.parse(a["extra-meta"])) : null, "assign");
        this.K = cc11001100_hook("this.K", "true" === a["is-fsn"], "assign");
        this.B = cc11001100_hook("this.B", a["ios-store-overlay-config"] ? new ec(JSON.parse(a["ios-store-overlay-config"])) : null, "assign");
        this.aa = cc11001100_hook("this.aa", "true" === a["use-cct-over-browser"], "assign");
        this.Y = cc11001100_hook("this.Y", "true" === a["send-ac-click-ping-by-js"], "assign");
        this.O = cc11001100_hook("this.O", "true" === a["correct-redirect-url-for-och-15-click"], "assign");
        this.Z = cc11001100_hook("this.Z", "true" === a["send-click-ping-by-js-in-och"], "assign");
        this.X = cc11001100_hook("this.X", "true" === a["enable-paw"], "assign");
        this.ba = cc11001100_hook("this.ba", "true" === a["async-using-fetch"], "assign");
        this.j = cc11001100_hook("this.j", this.m = cc11001100_hook("this.m", "", "assign"), "assign");
        this.F = cc11001100_hook("this.F", this.D = cc11001100_hook("this.D", -1, "assign"), "assign");
        this.C = cc11001100_hook("this.C", "", "assign");
        b = cc11001100_hook("b", be(), "assign");
        null != b && b.then(d => {
          d = cc11001100_hook("d", Ub(d), "assign");
          for (var f = cc11001100_hook("f", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < d.length; g++) {
            var h = cc11001100_hook("h", d.charCodeAt(g), "var-init");
            255 < h && (f[e++] = cc11001100_hook("f[e++]", h & 255, "assign"), h >>= cc11001100_hook("h", 8, "assign"));
            f[e++] = cc11001100_hook("f[e++]", h, "assign");
          }
          this.C = cc11001100_hook("this.C", Va(f, 3), "assign");
        });
        this.h = cc11001100_hook("this.h", xd(this.i), "assign");
        this.ca = cc11001100_hook("this.ca", Number(a["deeplink-and-android-app-validation-timeout"]) || 500, "assign");
        this.M = cc11001100_hook("this.M", -Infinity, "assign");
        this.o = cc11001100_hook("this.o", M(this.i, 5) || "", "assign");
        this.N = cc11001100_hook("this.N", N(this.i, 11), "assign");
        this.J && (this.N = cc11001100_hook("this.N", N(this.J, 11), "assign"));
        this.H = cc11001100_hook("this.H", this.G = cc11001100_hook("this.G", null, "assign"), "assign");
        N(this.i, 3) || (Bd(this.h), G(this.i, 3, !0));
        ce(this.h);
        a = cc11001100_hook("a", p.oneAfmaInstance, "assign");
        !this.s && a && Dd(this.h, this.ca);
        var c;
        if (a && (null == (c = cc11001100_hook("c", this.B, "assign")) ? 0 : N(c, 2))) switch (c = cc11001100_hook("c", () => {
          const d = cc11001100_hook("d", L(F(this.B, 4), 0), "var-init");
          0 < d ? p.setTimeout(() => {
            Cd(this.h);
          }, d) : Cd(this.h);
        }, "assign"), Q(this.B, 3, 0)) {
          case 1:
            a.runOnOnShowEvent(c);
            break;
          case 2:
            Fc(c);
            break;
          default:
            Cd(this.h);
        }
        U(V, "click", Z(557, d => {
          a: if (!d.defaultPrevented || this.G === d) {
            for (var f, e, g = cc11001100_hook("g", d.target, "var-init"); (!f || !e) && g;) {
              e || "A" != g.tagName || (e = cc11001100_hook("e", g, "assign"));
              var h = cc11001100_hook("h", g.hasAttribute("data-asoch-targets"), "var-init"),
                m = cc11001100_hook("m", g.hasAttribute("data-asoch-fixed-value"), "var-init");
              if (!f) if (m) f = cc11001100_hook("f", new bc(JSON.parse(g.getAttribute("data-asoch-fixed-value")) || []), "assign");else if ("A" == g.tagName || h) if (h = cc11001100_hook("h", h && "true" === g.getAttribute("data-asoch-is-dynamic") ? xd(this.i, [g]) : this.h, "assign"), h = cc11001100_hook("h", de(h, g), "assign")) f = cc11001100_hook("f", h.data, "assign");
              g = cc11001100_hook("g", g.parentElement, "assign");
            }
            if (g = cc11001100_hook("g", f && !N(f, 1), "assign")) {
              if (d.defaultPrevented) {
                var k = cc11001100_hook("k", e, "var-init"),
                  n = cc11001100_hook("n", f, "var-init");
                if (this.G === d && this.H) {
                  e = cc11001100_hook("e", new Zb(this.H), "assign");
                  f = cc11001100_hook("f", M(n, 9), "assign");
                  var l = cc11001100_hook("l", "", "var-init");
                  switch (Q(e, 4, 1)) {
                    case 2:
                      if (L(F(e, 2), 0)) l = cc11001100_hook("l", "blocked_fast_click", "assign");else if (M(e, 1) || M(e, 7)) l = cc11001100_hook("l", "blocked_border_click", "assign");
                      break;
                    case 3:
                      l = cc11001100_hook("l", V, "assign"), l = cc11001100_hook("l", l.getElementById ? l.getElementById("common_15click_anchor") : null, "assign"), "function" === typeof window.copfcChm && l && (n = cc11001100_hook("n", Tb(n, !1), "assign"), G(n, 5, 12), Fb(n, 4).set("nb", 12 .toString()), (g = cc11001100_hook("g", de(this.h, l), "assign")) ? g.data = cc11001100_hook("g.data", n, "assign") : this.h.push({
                        element: cc11001100_hook("element", l, "object-key-init"),
                        data: cc11001100_hook("data", n, "object-key-init")
                      }), !this.O && k && (ge(this, d, k, n), G(n, 2, k.href)), window.copfcChm(d, wd(n, l.href), null, void 0 !== I(e, Yb, 10) ? Ub(K(e, Yb, 10)) : null), this.O && ge(this, d, l, n)), l = cc11001100_hook("l", "onepointfiveclick_first_click", "assign");
                  }
                  f && l && Id(f + "&label=" + l, !1);
                  Nc(this.L);
                }
                break a;
              }
              h = cc11001100_hook("h", f, "assign");
              for (l of Db(h, 6)) Id(l);
            }
            if (e && g) {
              f = cc11001100_hook("f", g ? f : null, "assign");
              (l = cc11001100_hook("l", de(this.h, e), "assign")) ? l = cc11001100_hook("l", l.data, "assign") : (l = cc11001100_hook("l", new bc(), "assign"), G(l, 2, e.href), G(l, 11, e.target || "_top"), this.h.push({
                element: cc11001100_hook("element", e, "object-key-init"),
                data: cc11001100_hook("data", l, "object-key-init")
              }));
              Ad(e, f || l, M(l, 2), 557);
              ge(this, d, e, f);
              for (n of Db(this.i, 17)) l = cc11001100_hook("l", n, "assign"), g = cc11001100_hook("g", V.body, "assign"), h = cc11001100_hook("h", {}, "assign"), "function" === typeof window.CustomEvent ? m = cc11001100_hook("m", new CustomEvent(l, h), "assign") : (m = cc11001100_hook("m", document.createEvent("CustomEvent"), "assign"), m.initCustomEvent(l, !!h.bubbles, !!h.cancelable, h.detail)), g.dispatchEvent(m);
              if (null == f ? 0 : null != F(f, 19)) {
                n = cc11001100_hook("n", new Xb(), "assign");
                G(n, 1, Q(f, 5, 0));
                l = cc11001100_hook("l", Kd(e.href, "nx"), "assign");
                "" != l && G(n, 2, +l);
                l = cc11001100_hook("l", Kd(e.href, "ny"), "assign");
                "" != l && G(n, 3, +l);
                l = cc11001100_hook("l", Kd(e.href, "bg"), "assign");
                "" != l && G(n, 4, l);
                l = cc11001100_hook("l", Kd(e.href, "nm"), "assign");
                "" != l && G(n, 5, +l);
                l = cc11001100_hook("l", Kd(e.href, "mb"), "assign");
                "" != l && G(n, 6, +l);
                l = cc11001100_hook("l", M(f, 19), "assign");
                g = cc11001100_hook("g", null != F(f, 20) ? L(F(f, 20), 0) : null, "assign");
                n = cc11001100_hook("n", Ub(n), "assign");
                h = cc11001100_hook("h", this.C, "assign");
                m = cc11001100_hook("m", vd(p), "assign");
                const t = cc11001100_hook("t", new fc(), "var-init");
                G(t, 1, l);
                null !== g && G(t, 2, g);
                null !== h && G(t, 3, h);
                G(t, 4, n);
                null == m || null == (k = cc11001100_hook("k", m.fence, "assign")) || k.reportEvent({
                  eventType: cc11001100_hook("eventType", "click", "object-key-init"),
                  eventData: cc11001100_hook("eventData", JSON.stringify(t), "object-key-init"),
                  destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
                });
              }
              N(this.i, 16) || this.K ? he(this, d, e, f) : (k = cc11001100_hook("k", "", "assign"), (n = cc11001100_hook("n", p.oneAfmaInstance, "assign")) && (k = cc11001100_hook("k", n.appendClickSignals(e.href), "assign")), ie(this, d, e, f, k));
            }
          }
        }), gc);
        !a && N(this.i, 21) && (U(W, "pagehide", Z(1037, () => {
          if (this.m && this.j && (this.j += cc11001100_hook("this.j", "+pagehide", "assign"), this.F = cc11001100_hook("this.F", Date.now(), "assign"), -1 !== this.D)) {
            var d = cc11001100_hook("d", {
              id: cc11001100_hook("id", "visibilityBeforePagehide", "object-key-init"),
              payload: cc11001100_hook("payload", this.j, "object-key-init"),
              delay: cc11001100_hook("delay", this.F - this.D, "object-key-init"),
              isios: cc11001100_hook("isios", this.s, "object-key-init"),
              clickstring: cc11001100_hook("clickstring", this.m, "object-key-init")
            }, "var-init");
            Id(uc(rc(), d), !1, !0);
          }
        })), U(V, "visibilitychange", Z(1067, () => {
          if ("visible" === V.visibilityState) this.m = cc11001100_hook("this.m", this.j = cc11001100_hook("this.j", "", "assign"), "assign"), this.F = cc11001100_hook("this.F", this.D = cc11001100_hook("this.D", -1, "assign"), "assign");else if ("hidden" === V.visibilityState && this.j && this.m) {
            this.D = cc11001100_hook("this.D", Date.now(), "assign");
            var d = cc11001100_hook("d", {
              id: cc11001100_hook("id", "visibilityhidden", "object-key-init"),
              payload: cc11001100_hook("payload", this.j, "object-key-init"),
              isios: cc11001100_hook("isios", this.s, "object-key-init"),
              clickstring: cc11001100_hook("clickstring", this.m, "object-key-init")
            }, "var-init");
            Id(uc(rc(), d), !1, !0);
          }
        })));
        this.o && "function" === typeof window.ss && U(V.body, "mouseover", Z(626, () => {
          window.ss(this.o, 0);
        }), hc);
        "function" === typeof window.ivti && window.ivti(window);
        c = cc11001100_hook("c", window, "assign");
        c.googqscp && "function" === typeof c.googqscp.registerCallback && c.googqscp.registerCallback((d, f) => {
          this.G = cc11001100_hook("this.G", d, "assign");
          this.H = cc11001100_hook("this.H", f, "assign");
        });
      }
    }
  }, "var-init");
  var je = cc11001100_hook("je", Z(555, a => ee(a)), "var-init");
  Kc = cc11001100_hook("Kc", 70, "assign");
  const ke = cc11001100_hook("ke", Mc(70, document.currentScript), "var-init");
  if (null == ke) throw Error("JSC not found 70");
  const le = cc11001100_hook("le", {}, "var-init"),
    me = cc11001100_hook("me", ke.attributes, "var-init");
  for (let a = cc11001100_hook("a", me.length - 1, "var-init"); 0 <= a; a--) {
    const b = cc11001100_hook("b", me[a].name, "var-init");
    0 === b.indexOf("data-jcp-") && (le[b.substring(9)] = cc11001100_hook("le[b.substring(9)]", me[a].value, "assign"));
  }
  je(le);
}).call(this);