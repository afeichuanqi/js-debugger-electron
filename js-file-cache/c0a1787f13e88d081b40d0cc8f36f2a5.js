(function () {
  /* 
  Copyright The Closure Library Authors. 
  SPDX-License-Identifier: Apache-2.0 
  */
  function aa(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 0, "var-init");
    return function () {
      return b < a.length ? {
        done: cc11001100_hook("done", !1, "object-key-init"),
        value: cc11001100_hook("value", a[b++], "object-key-init")
      } : {
        done: cc11001100_hook("done", !0, "object-key-init")
      };
    };
  }
  var ba = cc11001100_hook("ba", "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = cc11001100_hook("a[b]", c.value, "assign");
    return a;
  }, "var-init");
  function ca(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], "assign");
    for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) {
      var c = cc11001100_hook("c", a[b], "var-init");
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var da = cc11001100_hook("da", ca(this), "var-init"),
    ea = cc11001100_hook("ea", "function" === typeof Symbol && "symbol" === typeof Symbol("x"), "var-init"),
    n = cc11001100_hook("n", {}, "var-init"),
    fa = cc11001100_hook("fa", {}, "var-init");
  function ha(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!c || null != a) {
      c = cc11001100_hook("c", fa[b], "assign");
      if (null == c) return a[b];
      c = cc11001100_hook("c", a[c], "assign");
      return void 0 !== c ? c : a[b];
    }
  }
  function ia(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (b) a: {
      var d = cc11001100_hook("d", a.split("."), "var-init");
      a = cc11001100_hook("a", 1 === d.length, "assign");
      var e = cc11001100_hook("e", d[0], "var-init"),
        f;
      !a && e in n ? f = cc11001100_hook("f", n, "assign") : f = cc11001100_hook("f", da, "assign");
      for (e = cc11001100_hook("e", 0, "assign"); e < d.length - 1; e++) {
        var g = cc11001100_hook("g", d[e], "var-init");
        if (!(g in f)) break a;
        f = cc11001100_hook("f", f[g], "assign");
      }
      d = cc11001100_hook("d", d[d.length - 1], "assign");
      c = cc11001100_hook("c", ea && "es6" === c ? f[d] : null, "assign");
      b = cc11001100_hook("b", b(c), "assign");
      null != b && (a ? ba(n, d, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        value: cc11001100_hook("value", b, "object-key-init")
      }) : b !== c && (void 0 === fa[d] && (a = cc11001100_hook("a", 1E9 * Math.random() >>> 0, "assign"), fa[d] = cc11001100_hook("fa[d]", ea ? da.Symbol(d) : "$jscp$" + a + "$" + d, "assign")), ba(f, fa[d], {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        value: cc11001100_hook("value", b, "object-key-init")
      })));
    }
  }
  ia("Symbol", function (a) {
    function b(f) {
      cc11001100_hook("f", f, "function-parameter");
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, g) {
      cc11001100_hook("f", f, "function-parameter");
      cc11001100_hook("g", g, "function-parameter");
      this.h = cc11001100_hook("this.h", f, "assign");
      ba(this, "description", {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        value: cc11001100_hook("value", g, "object-key-init")
      });
    }
    if (a) return a;
    c.prototype.toString = cc11001100_hook("c.prototype.toString", function () {
      return this.h;
    }, "assign");
    var d = cc11001100_hook("d", "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", "var-init"),
      e = cc11001100_hook("e", 0, "var-init");
    return b;
  }, "es6");
  function ja(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.raw = cc11001100_hook("a.raw", a, "assign");
  }
  function q(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", "undefined" != typeof n.Symbol && n.Symbol.iterator && a[n.Symbol.iterator], "var-init");
    if (b) return b.call(a);
    if ("number" == typeof a.length) return {
      next: cc11001100_hook("next", aa(a), "object-key-init")
    };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  var ka = cc11001100_hook("ka", "function" == typeof Object.create ? Object.create : function (a) {
      function b() {}
      b.prototype = cc11001100_hook("b.prototype", a, "assign");
      return new b();
    }, "var-init"),
    la;
  if (ea && "function" == typeof Object.setPrototypeOf) la = cc11001100_hook("la", Object.setPrototypeOf, "assign");else {
    var ma;
    a: {
      var pa = cc11001100_hook("pa", {
          a: cc11001100_hook("a", !0, "object-key-init")
        }, "var-init"),
        qa = cc11001100_hook("qa", {}, "var-init");
      try {
        qa.__proto__ = cc11001100_hook("qa.__proto__", pa, "assign");
        ma = cc11001100_hook("ma", qa.a, "assign");
        break a;
      } catch (a) {}
      ma = cc11001100_hook("ma", !1, "assign");
    }
    la = cc11001100_hook("la", ma ? function (a, b) {
      a.__proto__ = cc11001100_hook("a.__proto__", b, "assign");
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null, "assign");
  }
  var ra = cc11001100_hook("ra", la, "var-init");
  function u(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.prototype = cc11001100_hook("a.prototype", ka(b.prototype), "assign");
    a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign");
    if (ra) ra(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
      var d = cc11001100_hook("d", Object.getOwnPropertyDescriptor(b, c), "var-init");
      d && Object.defineProperty(a, c, d);
    } else a[c] = cc11001100_hook("a[c]", b[c], "assign");
    a.Wa = cc11001100_hook("a.Wa", b.prototype, "assign");
  }
  function sa() {
    for (var a = cc11001100_hook("a", Number(this), "var-init"), b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a, "var-init"); c < arguments.length; c++) b[c - a] = cc11001100_hook("b[c - a]", arguments[c], "assign");
    return b;
  }
  ia("Number.isFinite", function (a) {
    return a ? a : function (b) {
      return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
    };
  }, "es6");
  ia("Number.isInteger", function (a) {
    return a ? a : function (b) {
      return ha(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1;
    };
  }, "es6");
  ia("Object.is", function (a) {
    return a ? a : function (b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
    };
  }, "es6");
  ia("Array.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      var d = cc11001100_hook("d", this, "var-init");
      d instanceof String && (d = cc11001100_hook("d", String(d), "assign"));
      var e = cc11001100_hook("e", d.length, "var-init");
      c = cc11001100_hook("c", c || 0, "assign");
      for (0 > c && (c = cc11001100_hook("c", Math.max(c + e, 0), "assign")); c < e; c++) {
        var f = cc11001100_hook("f", d[c], "var-init");
        if (f === b || ha(Object, "is").call(Object, f, b)) return !0;
      }
      return !1;
    };
  }, "es7");
  ia("String.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
      if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      return -1 !== this.indexOf(b, c || 0);
    };
  }, "es6");
  var v = cc11001100_hook("v", this || self, "var-init");
  function ta(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  ;
  var va;
  var wa,
    xa = cc11001100_hook("xa", "undefined" !== typeof TextEncoder, "var-init");
  function ya(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", !1, "var-init");
    b = cc11001100_hook("b", void 0 === b ? !1 : b, "assign");
    if (xa) {
      if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
      a = cc11001100_hook("a", (wa || (wa = cc11001100_hook("wa", new TextEncoder(), "assign"))).encode(a), "assign");
    } else {
      for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", new Uint8Array(3 * a.length), "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) {
        var f = cc11001100_hook("f", a.charCodeAt(e), "var-init");
        if (128 > f) d[c++] = cc11001100_hook("d[c++]", f, "assign");else {
          if (2048 > f) d[c++] = cc11001100_hook("d[c++]", f >> 6 | 192, "assign");else {
            if (55296 <= f && 57343 >= f) {
              if (56319 >= f && e < a.length) {
                var g = cc11001100_hook("g", a.charCodeAt(++e), "var-init");
                if (56320 <= g && 57343 >= g) {
                  f = cc11001100_hook("f", 1024 * (f - 55296) + g - 56320 + 65536, "assign");
                  d[c++] = cc11001100_hook("d[c++]", f >> 18 | 240, "assign");
                  d[c++] = cc11001100_hook("d[c++]", f >> 12 & 63 | 128, "assign");
                  d[c++] = cc11001100_hook("d[c++]", f >> 6 & 63 | 128, "assign");
                  d[c++] = cc11001100_hook("d[c++]", f & 63 | 128, "assign");
                  continue;
                } else e--;
              }
              if (b) throw Error("Found an unpaired surrogate");
              f = cc11001100_hook("f", 65533, "assign");
            }
            d[c++] = cc11001100_hook("d[c++]", f >> 12 | 224, "assign");
            d[c++] = cc11001100_hook("d[c++]", f >> 6 & 63 | 128, "assign");
          }
          d[c++] = cc11001100_hook("d[c++]", f & 63 | 128, "assign");
        }
      }
      a = cc11001100_hook("a", c === d.length ? d : d.subarray(0, c), "assign");
    }
    return a;
  }
  ;
  function za(a) {
    cc11001100_hook("a", a, "function-parameter");
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  ;
  var Aa, Ba;
  a: {
    for (var Ca = cc11001100_hook("Ca", ["CLOSURE_FLAGS"], "var-init"), Da = cc11001100_hook("Da", v, "var-init"), Fa = cc11001100_hook("Fa", 0, "var-init"); Fa < Ca.length; Fa++) if (Da = cc11001100_hook("Da", Da[Ca[Fa]], "assign"), null == Da) {
      Ba = cc11001100_hook("Ba", null, "assign");
      break a;
    }
    Ba = cc11001100_hook("Ba", Da, "assign");
  }
  var Ga = cc11001100_hook("Ga", Ba && Ba[610401301], "var-init");
  Aa = cc11001100_hook("Aa", null != Ga ? Ga : !1, "assign");
  function Ha() {
    var a = cc11001100_hook("a", v.navigator, "var-init");
    return a && (a = cc11001100_hook("a", a.userAgent, "assign")) ? a : "";
  }
  var Ja,
    Ka = cc11001100_hook("Ka", v.navigator, "var-init");
  Ja = cc11001100_hook("Ja", Ka ? Ka.userAgentData || null : null, "assign");
  function La(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Aa ? Ja ? Ja.brands.some(function (b) {
      return (b = cc11001100_hook("b", b.brand, "assign")) && -1 != b.indexOf(a);
    }) : !1 : !1;
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 != Ha().indexOf(a);
  }
  ;
  function Na() {
    return Aa ? !!Ja && 0 < Ja.brands.length : !1;
  }
  function Oa() {
    return Na() ? La("Chromium") : (w("Chrome") || w("CriOS")) && !(Na() ? 0 : w("Edge")) || w("Silk");
  }
  ;
  function Pa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Qa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Ra(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"), f = cc11001100_hook("f", "string" === typeof a ? a.split("") : a, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < c; g++) if (g in f) {
      var h = cc11001100_hook("h", f[g], "var-init");
      b.call(void 0, h, g, a) && (d[e++] = cc11001100_hook("d[e++]", h, "assign"));
    }
    return d;
  }
  function Sa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", Array(c), "var-init"), e = cc11001100_hook("e", "string" === typeof a ? a.split("") : a, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < c; f++) f in e && (d[f] = cc11001100_hook("d[f]", b.call(void 0, e[f], f, a), "assign"));
    return d;
  }
  function Ta(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a: {
      for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
        b = cc11001100_hook("b", e, "assign");
        break a;
      }
      b = cc11001100_hook("b", -1, "assign");
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Ua(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", Pa(a, b), "assign");
    0 <= b && Array.prototype.splice.call(a, b, 1);
  }
  function Va(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", 1, "var-init"); c < arguments.length; c++) {
      var d = cc11001100_hook("d", arguments[c], "var-init");
      var e = cc11001100_hook("e", typeof d, "var-init");
      e = cc11001100_hook("e", "object" != e ? e : d ? Array.isArray(d) ? "array" : e : "null", "assign");
      if ("array" == e || "object" == e && "number" == typeof d.length) {
        e = cc11001100_hook("e", a.length || 0, "assign");
        var f = cc11001100_hook("f", d.length || 0, "var-init");
        a.length = cc11001100_hook("a.length", e + f, "assign");
        for (var g = cc11001100_hook("g", 0, "var-init"); g < f; g++) a[e + g] = cc11001100_hook("a[e + g]", d[g], "assign");
      } else a.push(d);
    }
  }
  function Wa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.sort(b || Xa);
  }
  function Xa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a > b ? 1 : a < b ? -1 : 0;
  }
  ;
  function ab(a) {
    cc11001100_hook("a", a, "function-parameter");
    ab[" "](a);
    return a;
  }
  ab[" "] = cc11001100_hook("ab[\" \"]", function () {}, "assign");
  var bb = cc11001100_hook("bb", Na() ? !1 : w("Opera"), "var-init"),
    cb = cc11001100_hook("cb", Na() ? !1 : w("Trident") || w("MSIE"), "var-init"),
    db = cc11001100_hook("db", w("Edge"), "var-init"),
    eb = cc11001100_hook("eb", w("Gecko") && !(-1 != Ha().toLowerCase().indexOf("webkit") && !w("Edge")) && !(w("Trident") || w("MSIE")) && !w("Edge"), "var-init"),
    fb = cc11001100_hook("fb", -1 != Ha().toLowerCase().indexOf("webkit") && !w("Edge"), "var-init");
  function gb() {
    var a = cc11001100_hook("a", v.document, "var-init");
    return a ? a.documentMode : void 0;
  }
  var hb;
  a: {
    var ib = cc11001100_hook("ib", "", "var-init"),
      lb = cc11001100_hook("lb", function () {
        var a = cc11001100_hook("a", Ha(), "var-init");
        if (eb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (db) return /Edge\/([\d\.]+)/.exec(a);
        if (cb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (fb) return /WebKit\/(\S+)/.exec(a);
        if (bb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }(), "var-init");
    lb && (ib = cc11001100_hook("ib", lb ? lb[1] : "", "assign"));
    if (cb) {
      var mb = cc11001100_hook("mb", gb(), "var-init");
      if (null != mb && mb > parseFloat(ib)) {
        hb = cc11001100_hook("hb", String(mb), "assign");
        break a;
      }
    }
    hb = cc11001100_hook("hb", ib, "assign");
  }
  var nb = cc11001100_hook("nb", hb, "var-init"),
    ob;
  if (v.document && cb) {
    var pb = cc11001100_hook("pb", gb(), "var-init");
    ob = cc11001100_hook("ob", pb ? pb : parseInt(nb, 10) || void 0, "assign");
  } else ob = cc11001100_hook("ob", void 0, "assign");
  var qb = cc11001100_hook("qb", ob, "var-init");
  !w("Android") || Oa();
  Oa();
  var rb = cc11001100_hook("rb", w("Safari") && !(Oa() || (Na() ? 0 : w("Coast")) || (Na() ? 0 : w("Opera")) || (Na() ? 0 : w("Edge")) || (Na() ? La("Microsoft Edge") : w("Edg/")) || (Na() ? La("Opera") : w("OPR")) || w("Firefox") || w("FxiOS") || w("Silk") || w("Android")) && !(w("iPhone") && !w("iPod") && !w("iPad") || w("iPad") || w("iPod")), "var-init");
  var sb = cc11001100_hook("sb", {}, "var-init"),
    tb = cc11001100_hook("tb", null, "var-init"),
    ub = cc11001100_hook("ub", eb || fb || !rb && !cb && "function" == typeof v.atob, "var-init");
  function vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
    wb();
    b = cc11001100_hook("b", sb[b], "assign");
    for (var c = cc11001100_hook("c", Array(Math.floor(a.length / 3)), "var-init"), d = cc11001100_hook("d", b[64] || "", "var-init"), e = cc11001100_hook("e", 0, "var-init"), f = cc11001100_hook("f", 0, "var-init"); e < a.length - 2; e += cc11001100_hook("e", 3, "assign")) {
      var g = cc11001100_hook("g", a[e], "var-init"),
        h = cc11001100_hook("h", a[e + 1], "var-init"),
        k = cc11001100_hook("k", a[e + 2], "var-init"),
        l = cc11001100_hook("l", b[g >> 2], "var-init");
      g = cc11001100_hook("g", b[(g & 3) << 4 | h >> 4], "assign");
      h = cc11001100_hook("h", b[(h & 15) << 2 | k >> 6], "assign");
      k = cc11001100_hook("k", b[k & 63], "assign");
      c[f++] = cc11001100_hook("c[f++]", l + g + h + k, "assign");
    }
    l = cc11001100_hook("l", 0, "assign");
    k = cc11001100_hook("k", d, "assign");
    switch (a.length - e) {
      case 2:
        l = cc11001100_hook("l", a[e + 1], "assign"), k = cc11001100_hook("k", b[(l & 15) << 2] || d, "assign");
      case 1:
        a = cc11001100_hook("a", a[e], "assign"), c[f] = cc11001100_hook("c[f]", b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d, "assign");
    }
    return c.join("");
  }
  function xb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (ub) return v.atob(a);
    var b = cc11001100_hook("b", "", "var-init");
    yb(a, function (c) {
      b += cc11001100_hook("b", String.fromCharCode(c), "assign");
    });
    return b;
  }
  function yb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    function c(k) {
      cc11001100_hook("k", k, "function-parameter");
      for (; d < a.length;) {
        var l = cc11001100_hook("l", a.charAt(d++), "var-init"),
          m = cc11001100_hook("m", tb[l], "var-init");
        if (null != m) return m;
        if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
    }
    wb();
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
  function wb() {
    if (!tb) {
      tb = cc11001100_hook("tb", {}, "assign");
      for (var a = cc11001100_hook("a", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), b = cc11001100_hook("b", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), c = cc11001100_hook("c", 0, "var-init"); 5 > c; c++) {
        var d = cc11001100_hook("d", a.concat(b[c].split("")), "var-init");
        sb[c] = cc11001100_hook("sb[c]", d, "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < d.length; e++) {
          var f = cc11001100_hook("f", d[e], "var-init");
          void 0 === tb[f] && (tb[f] = cc11001100_hook("tb[f]", e, "assign"));
        }
      }
    }
  }
  ;
  var zb = cc11001100_hook("zb", "undefined" !== typeof Uint8Array, "var-init"),
    Ab = cc11001100_hook("Ab", !cb && "function" === typeof v.btoa, "var-init"),
    Bb,
    Cb = cc11001100_hook("Cb", {}, "var-init");
  var y = cc11001100_hook("y", 0, "var-init"),
    Db = cc11001100_hook("Db", 0, "var-init");
  function Eb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 0 > a, "var-init");
    a = cc11001100_hook("a", Math.abs(a), "assign");
    var c = cc11001100_hook("c", a >>> 0, "var-init");
    a = cc11001100_hook("a", Math.floor((a - c) / 4294967296), "assign");
    b && (c = cc11001100_hook("c", q(Fb(c, a)), "assign"), b = cc11001100_hook("b", c.next().value, "assign"), a = cc11001100_hook("a", c.next().value, "assign"), c = cc11001100_hook("c", b, "assign"));
    y = cc11001100_hook("y", c >>> 0, "assign");
    Db = cc11001100_hook("Db", a >>> 0, "assign");
  }
  var Gb = cc11001100_hook("Gb", "function" === typeof BigInt, "var-init");
  function Fb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", ~b, "assign");
    a ? a = cc11001100_hook("a", ~a + 1, "assign") : b += cc11001100_hook("b", 1, "assign");
    return [a, b];
  }
  ;
  function Ib(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.i = cc11001100_hook("this.i", a >>> 0, "assign");
    this.h = cc11001100_hook("this.h", b >>> 0, "assign");
  }
  function Jb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) return Kb || (Kb = cc11001100_hook("Kb", new Ib(0, 0), "assign"));
    if (!/^-?\d+$/.test(a)) return null;
    if (16 > a.length) Eb(Number(a));else if (Gb) a = cc11001100_hook("a", BigInt(a), "assign"), y = cc11001100_hook("y", Number(a & BigInt(4294967295)) >>> 0, "assign"), Db = cc11001100_hook("Db", Number(a >> BigInt(32) & BigInt(4294967295)), "assign");else {
      var b = cc11001100_hook("b", +("-" === a[0]), "var-init");
      Db = cc11001100_hook("Db", y = cc11001100_hook("y", 0, "assign"), "assign");
      for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", b, "var-init"), e = cc11001100_hook("e", (c - b) % 6 + b, "var-init"); e <= c; d = cc11001100_hook("d", e, "assign"), e += cc11001100_hook("e", 6, "assign")) d = cc11001100_hook("d", Number(a.slice(d, e)), "assign"), Db *= cc11001100_hook("Db", 1E6, "assign"), y = cc11001100_hook("y", 1E6 * y + d, "assign"), 4294967296 <= y && (Db += cc11001100_hook("Db", y / 4294967296 | 0, "assign"), y %= cc11001100_hook("y", 4294967296, "assign"));
      b && (b = cc11001100_hook("b", q(Fb(y, Db)), "assign"), a = cc11001100_hook("a", b.next().value, "assign"), b = cc11001100_hook("b", b.next().value, "assign"), y = cc11001100_hook("y", a, "assign"), Db = cc11001100_hook("Db", b, "assign"));
    }
    return new Ib(y, Db);
  }
  var Kb;
  function Lb() {
    this.h = cc11001100_hook("this.h", [], "assign");
  }
  Lb.prototype.length = cc11001100_hook("Lb.prototype.length", function () {
    return this.h.length;
  }, "assign");
  Lb.prototype.end = cc11001100_hook("Lb.prototype.end", function () {
    var a = cc11001100_hook("a", this.h, "var-init");
    this.h = cc11001100_hook("this.h", [], "assign");
    return a;
  }, "assign");
  function Mb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (; 0 < c || 127 < b;) a.h.push(b & 127 | 128), b = cc11001100_hook("b", (b >>> 7 | c << 25) >>> 0, "assign"), c >>>= cc11001100_hook("c", 7, "assign");
    a.h.push(b);
  }
  function Nb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (; 127 < b;) a.h.push(b & 127 | 128), b >>>= cc11001100_hook("b", 7, "assign");
    a.h.push(b);
  }
  function Ob(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (0 <= b) Nb(a, b);else {
      for (var c = cc11001100_hook("c", 0, "var-init"); 9 > c; c++) a.h.push(b & 127 | 128), b >>= cc11001100_hook("b", 7, "assign");
      a.h.push(1);
    }
  }
  ;
  function Pb() {
    this.j = cc11001100_hook("this.j", [], "assign");
    this.i = cc11001100_hook("this.i", 0, "assign");
    this.h = cc11001100_hook("this.h", new Lb(), "assign");
  }
  function Qb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    0 !== b.length && (a.j.push(b), a.i += cc11001100_hook("a.i", b.length, "assign"));
  }
  function Rb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Nb(a.h, 8 * b + 2);
    b = cc11001100_hook("b", a.h.end(), "assign");
    Qb(a, b);
    b.push(a.i);
    return b;
  }
  function Sb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.pop(), "var-init");
    for (c = cc11001100_hook("c", a.i + a.h.length() - c, "assign"); 127 < c;) b.push(c & 127 | 128), c >>>= cc11001100_hook("c", 7, "assign"), a.i++;
    b.push(c);
    a.i++;
  }
  function Tb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b = cc11001100_hook("b", b.U, "assign")) {
      Qb(a, a.h.end());
      for (var c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) Qb(a, b[c].h(Cb) || Bb || (Bb = cc11001100_hook("Bb", new Uint8Array(0), "assign")));
    }
  }
  function Ub(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Nb(a.h, 8 * b + 2);
    Nb(a.h, c.length);
    Qb(a, a.h.end());
    Qb(a, c);
  }
  ;
  var z = cc11001100_hook("z", "function" === typeof n.Symbol && "symbol" === typeof (0, n.Symbol)() ? (0, n.Symbol)() : void 0, "var-init");
  function Vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (z) return a[z] |= cc11001100_hook("a[z]", b, "assign");
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
  function Wb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    z ? a[z] && (a[z] &= cc11001100_hook("a[z]", ~b, "assign")) : void 0 !== a.h && (a.h &= cc11001100_hook("a.h", ~b, "assign"));
  }
  function A(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    z ? b = cc11001100_hook("b", a[z], "assign") : b = cc11001100_hook("b", a.h, "assign");
    return null == b ? 0 : b;
  }
  function D(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    z ? a[z] = cc11001100_hook("a[z]", b, "assign") : void 0 !== a.h ? a.h = cc11001100_hook("a.h", b, "assign") : Object.defineProperties(a, {
      h: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return a;
  }
  function Xb(a) {
    cc11001100_hook("a", a, "function-parameter");
    Vb(a, 1);
    return a;
  }
  function Yb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!(A(a) & 2);
  }
  function Zb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    D(b, (a | 0) & -51);
  }
  function $b(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    D(b, (a | 18) & -41);
  }
  ;
  var ac = cc11001100_hook("ac", {}, "var-init");
  function bc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var cc = cc11001100_hook("cc", Object.freeze(D([], 23)), "var-init");
  function E(a) {
    cc11001100_hook("a", a, "function-parameter");
    dc(A(a.l));
  }
  function dc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a & 2) throw Error();
  }
  function ec(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && bc(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : (b = cc11001100_hook("b", {}, "assign"), a.push((b.g = cc11001100_hook("b.g", 1, "assign"), b)));
  }
  ;
  function fc(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", !1, "var-init");
    if (null != a && "object" === typeof a && !(e = cc11001100_hook("e", Array.isArray(a), "assign")) && a.V === ac) return a;
    if (!e) return c ? d & 2 ? (a = cc11001100_hook("a", b[gc], "assign")) ? b = cc11001100_hook("b", a, "assign") : (a = cc11001100_hook("a", new b(), "assign"), Vb(a.l, 18), b = cc11001100_hook("b", b[gc] = cc11001100_hook("b[gc]", a, "assign"), "assign")) : b = cc11001100_hook("b", new b(), "assign") : b = cc11001100_hook("b", void 0, "assign"), b;
    hc(a, d);
    return new b(a);
  }
  function hc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", A(a), "var-init"),
      d = cc11001100_hook("d", c, "var-init");
    0 === d && (d |= cc11001100_hook("d", b & 16, "assign"));
    d |= cc11001100_hook("d", b & 2, "assign");
    d !== c && D(a, d);
  }
  var gc = cc11001100_hook("gc", "function" === typeof n.Symbol && "symbol" === typeof (0, n.Symbol)() ? (0, n.Symbol)() : "di", "var-init");
  function ic(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.i + a.I, "var-init");
    return a.D || (a.D = cc11001100_hook("a.D", a.l[b] = cc11001100_hook("a.l[b]", {}, "assign"), "assign"));
  }
  function F(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return -1 === b ? null : b >= a.i ? a.D ? a.D[b] : void 0 : c && a.D && (c = cc11001100_hook("c", a.D[b], "assign"), null != c) ? c : a.l[b + a.I];
  }
  function G(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.j && (a.j = cc11001100_hook("a.j", void 0, "assign"));
    if (b >= a.i || d) return ic(a)[b] = cc11001100_hook("ic(a)[b]", c, "assign"), a;
    a.l[b + a.I] = cc11001100_hook("a.l[b + a.I]", c, "assign");
    (c = cc11001100_hook("c", a.D, "assign")) && b in c && delete c[b];
    return a;
  }
  function jc(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", F(a, b, d), "var-init");
    Array.isArray(f) || (f = cc11001100_hook("f", cc, "assign"));
    var g = cc11001100_hook("g", A(f), "var-init");
    g & 1 || Xb(f);
    if (e) g & 2 || Vb(f, 18), c & 1 || Object.freeze(f);else {
      e = cc11001100_hook("e", !(c & 2), "assign");
      var h = cc11001100_hook("h", g & 2, "var-init");
      c & 1 || !h ? e && g & 16 && !h && Wb(f, 16) : (f = cc11001100_hook("f", Xb(Array.prototype.slice.call(f)), "assign"), G(a, b, f, d));
    }
    return f;
  }
  function kc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", F(a, b), "assign");
    return null == a ? a : !!a;
  }
  function H(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    E(a);
    c !== d ? G(a, b, c) : G(a, b, void 0, !1);
    return a;
  }
  function lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) {
      var e = cc11001100_hook("e", b[d], "var-init");
      null != F(a, e) && (0 !== c && G(a, c, void 0, !1), c = cc11001100_hook("c", e, "assign"));
    }
    return c;
  }
  function mc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", A(a.l), "var-init");
    dc(d);
    var e = cc11001100_hook("e", F(a, c), "var-init");
    b = cc11001100_hook("b", nc(fc(e, b, !0, d)), "assign");
    e !== b && G(a, c, b);
    return b;
  }
  function oc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", void 0 === d ? !1 : d, "var-init");
    var e = cc11001100_hook("e", F(a, c, d), "var-init");
    b = cc11001100_hook("b", fc(e, b, !1, A(a.l)), "assign");
    b !== e && null != b && G(a, c, b, d);
    e = cc11001100_hook("e", b, "assign");
    if (null == e) return e;
    Yb(a.l) || (b = cc11001100_hook("b", nc(e), "assign"), b !== e && (e = cc11001100_hook("e", b, "assign"), G(a, c, e, d)));
    return e;
  }
  function pc(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", !!(e & 2), "var-init");
    a.h || (a.h = cc11001100_hook("a.h", {}, "assign"));
    var g = cc11001100_hook("g", a.h[c], "var-init"),
      h = cc11001100_hook("h", jc(a, c, 3, void 0, f), "var-init");
    if (!g) {
      var k = cc11001100_hook("k", h, "var-init");
      g = cc11001100_hook("g", [], "assign");
      f = cc11001100_hook("f", !!(e & 2), "assign");
      h = cc11001100_hook("h", !!(A(k) & 2), "assign");
      var l = cc11001100_hook("l", k, "var-init");
      !f && h && (k = cc11001100_hook("k", Array.prototype.slice.call(k), "assign"));
      var m = cc11001100_hook("m", e | (h ? 2 : 0), "var-init");
      e = cc11001100_hook("e", h, "assign");
      for (var p = cc11001100_hook("p", 0, "var-init"); p < k.length; p++) {
        var r = cc11001100_hook("r", k[p], "var-init");
        var O = cc11001100_hook("O", b, "var-init");
        Array.isArray(r) ? (hc(r, m), r = cc11001100_hook("r", new O(r), "assign")) : r = cc11001100_hook("r", void 0, "assign");
        void 0 !== r && (e = cc11001100_hook("e", e || !!(2 & A(r.l)), "assign"), g.push(r));
      }
      a.h[c] = cc11001100_hook("a.h[c]", g, "assign");
      m = cc11001100_hook("m", A(k), "assign");
      b = cc11001100_hook("b", m | 33, "assign");
      b = cc11001100_hook("b", e ? b & -9 : b | 8, "assign");
      m != b && (e = cc11001100_hook("e", k, "assign"), Object.isFrozen(e) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign")), D(e, b), k = cc11001100_hook("k", e, "assign"));
      l !== k && G(a, c, k);
      (f || d && h) && Vb(g, 18);
      d && Object.freeze(g);
      return g;
    }
    f || (f = cc11001100_hook("f", Object.isFrozen(g), "assign"), d && !f ? Object.freeze(g) : !d && f && (g = cc11001100_hook("g", Array.prototype.slice.call(g), "assign"), a.h[c] = cc11001100_hook("a.h[c]", g, "assign")));
    return g;
  }
  function qc(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    E(a);
    var e = cc11001100_hook("e", null == c ? cc : Xb([]), "var-init");
    if (null != c) {
      for (var f = cc11001100_hook("f", !!c.length, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < c.length; g++) {
        var h = cc11001100_hook("h", c[g], "var-init");
        f = cc11001100_hook("f", f && !Yb(h.l), "assign");
        e[g] = cc11001100_hook("e[g]", h.l, "assign");
      }
      f = cc11001100_hook("f", (f ? 8 : 0) | 1, "assign");
      g = cc11001100_hook("g", A(e), "assign");
      (g & f) !== f && (Object.isFrozen(e) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign")), D(e, g | f));
      a.h || (a.h = cc11001100_hook("a.h", {}, "assign"));
      a.h[b] = cc11001100_hook("a.h[b]", c, "assign");
    } else a.h && (a.h[b] = cc11001100_hook("a.h[b]", void 0, "assign"));
    return G(a, b, e, d);
  }
  function rc(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", A(a.l), "var-init");
    dc(e);
    e = cc11001100_hook("e", pc(a, c, b, !1, e), "assign");
    c = cc11001100_hook("c", null != d ? d : new c(), "assign");
    a = cc11001100_hook("a", jc(a, b, 2, void 0, !1), "assign");
    e.push(c);
    a.push(c.l);
    Yb(c.l) && Wb(a, 8);
    return c;
  }
  function J(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return H(a, b, c, 0);
  }
  function sc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == a ? b : a;
  }
  function tc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return sc(F(a, b), "");
  }
  function K(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return sc(kc(a, b), !1);
  }
  ;
  var uc;
  function vc(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (A(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), ec(a), a;
        } else if (zb && null != a && a instanceof Uint8Array) {
          if (Ab) {
            for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
            b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
            a = cc11001100_hook("a", btoa(b), "assign");
          } else a = cc11001100_hook("a", vb(a), "assign");
          return a;
        }
    }
    return a;
  }
  ;
  function wc(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", xc(a, b, c, void 0 !== d), "assign");else if (bc(a)) {
        var e = cc11001100_hook("e", {}, "var-init"),
          f;
        for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = cc11001100_hook("e[f]", wc(a[f], b, c, d), "assign"));
        a = cc11001100_hook("a", e, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function xc(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", A(a), "var-init");
    d = cc11001100_hook("d", d ? !!(e & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (var f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) a[f] = cc11001100_hook("a[f]", wc(a[f], b, c, d), "assign");
    c(e, a);
    return a;
  }
  function yc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.V === ac ? a.toJSON() : vc(a);
  }
  function zc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && ec(b);
  }
  ;
  function Ac(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", void 0 === c ? $b : c, "assign");
    if (null != a) {
      if (zb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = cc11001100_hook("d", A(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return D(a, d | 18), a;
        a = cc11001100_hook("a", xc(a, Ac, d & 4 ? $b : c, !0), "assign");
        b = cc11001100_hook("b", A(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.V === ac ? Bc(a) : a;
    }
  }
  function Cc(a, b, c, d, e, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    (a = cc11001100_hook("a", a.h && a.h[c], "assign")) ? (d = cc11001100_hook("d", A(a), "assign"), d & 2 ? d = cc11001100_hook("d", a, "assign") : (f = cc11001100_hook("f", Sa(a, Bc), "assign"), $b(d, f), Object.freeze(f), d = cc11001100_hook("d", f, "assign")), qc(b, c, d, e)) : (d = cc11001100_hook("d", Ac(d, f, g), "assign"), E(b), G(b, c, d, e));
  }
  function Bc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (Yb(a.l)) return a;
    a = cc11001100_hook("a", Dc(a, !0), "assign");
    Vb(a.l, 18);
    return a;
  }
  function Dc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.l, "var-init"),
      d = cc11001100_hook("d", [], "var-init");
    Vb(d, 16);
    var e = cc11001100_hook("e", a.constructor.messageId, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.D, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (A(c) & 128) && ec(d);
    b = cc11001100_hook("b", b || Yb(a.l) ? $b : Zb, "assign");
    f = cc11001100_hook("f", a.constructor, "assign");
    uc = cc11001100_hook("uc", d, "assign");
    d = cc11001100_hook("d", new f(d), "assign");
    uc = cc11001100_hook("uc", void 0, "assign");
    a.U && (d.U = cc11001100_hook("d.U", a.U.slice(), "assign"));
    f = cc11001100_hook("f", !!(A(c) & 16), "assign");
    for (var g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Cc(a, d, h - a.I, c[h], !1, f, b);
    if (e) for (var k in e) Cc(a, d, +k, e[k], !0, f, b);
    return d;
  }
  function nc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Yb(a.l)) return a;
    var b = cc11001100_hook("b", Dc(a, !1), "var-init");
    b.j = cc11001100_hook("b.j", a, "assign");
    return b;
  }
  ;
  function M(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    null == a && (a = cc11001100_hook("a", uc, "assign"));
    uc = cc11001100_hook("uc", void 0, "assign");
    var e = cc11001100_hook("e", this.constructor.messageId, "var-init");
    if (null == a) {
      a = cc11001100_hook("a", e ? [e] : [], "assign");
      var f = cc11001100_hook("f", 48, "var-init");
      var g = cc11001100_hook("g", !0, "var-init");
      d && (f |= cc11001100_hook("f", 128, "assign"));
      D(a, f);
    } else {
      if (!Array.isArray(a)) throw Error();
      if (e && e !== a[0]) throw Error();
      f = cc11001100_hook("f", Vb(a, 0) | 32, "assign");
      g = cc11001100_hook("g", 0 !== (16 & f), "assign");
      if (d) {
        if (!(f & 128) && 0 < a.length) {
          var h = cc11001100_hook("h", a[a.length - 1], "var-init");
          if (bc(h) && "g" in h) {
            f |= cc11001100_hook("f", 128, "assign");
            delete h.g;
            var k = cc11001100_hook("k", !0, "var-init"),
              l;
            for (l in h) {
              k = cc11001100_hook("k", !1, "assign");
              break;
            }
            k && a.pop();
          } else throw Error();
        }
      } else if (128 & f) throw Error();
      D(a, f);
    }
    this.I = cc11001100_hook("this.I", e ? 0 : -1, "assign");
    this.h = cc11001100_hook("this.h", void 0, "assign");
    this.l = cc11001100_hook("this.l", a, "assign");
    a: {
      f = cc11001100_hook("f", this.l.length, "assign");
      e = cc11001100_hook("e", f - 1, "assign");
      if (f && (f = cc11001100_hook("f", this.l[e], "assign"), bc(f))) {
        this.D = cc11001100_hook("this.D", f, "assign");
        this.i = cc11001100_hook("this.i", e - this.I, "assign");
        break a;
      }
      void 0 !== b && -1 < b ? (this.i = cc11001100_hook("this.i", Math.max(b, e + 1 - this.I), "assign"), this.D = cc11001100_hook("this.D", void 0, "assign")) : this.i = cc11001100_hook("this.i", Number.MAX_VALUE, "assign");
    }
    if (!d && this.D && "g" in this.D) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
    if (c) {
      b = cc11001100_hook("b", g && !0, "assign");
      d = cc11001100_hook("d", this.i, "assign");
      var m;
      for (g = cc11001100_hook("g", 0, "assign"); g < c.length; g++) e = cc11001100_hook("e", c[g], "assign"), e < d ? (e += cc11001100_hook("e", this.I, "assign"), (f = cc11001100_hook("f", a[e], "assign")) ? Ec(f, b) : a[e] = cc11001100_hook("a[e]", cc, "assign")) : (m || (m = cc11001100_hook("m", ic(this), "assign")), (f = cc11001100_hook("f", m[e], "assign")) ? Ec(f, b) : m[e] = cc11001100_hook("m[e]", cc, "assign"));
    }
  }
  M.prototype.toJSON = cc11001100_hook("M.prototype.toJSON", function () {
    return xc(this.l, yc, zc);
  }, "assign");
  function Ec(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", A(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && D(a, c | d);
    }
  }
  M.prototype.V = cc11001100_hook("M.prototype.V", ac, "assign");
  M.prototype.toString = cc11001100_hook("M.prototype.toString", function () {
    return this.l.toString();
  }, "assign");
  function Fc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (c) {
      var d = cc11001100_hook("d", {}, "var-init"),
        e;
      for (e in c) {
        if (Object.prototype.hasOwnProperty.call(c, e)) {
          var f = cc11001100_hook("f", c[e], "var-init"),
            g = cc11001100_hook("g", f.La, "var-init");
          g || (d.J = cc11001100_hook("d.J", f.Ta || f.Va.M, "assign"), f.qa ? (d.N = cc11001100_hook("d.N", Gc(f.qa), "assign"), g = cc11001100_hook("g", function (h) {
            return function (k, l, m) {
              return h.J(k, l, m, h.N);
            };
          }(d), "assign")) : f.Ca ? (d.O = cc11001100_hook("d.O", Hc(f.va.ba, f.Ca), "assign"), g = cc11001100_hook("g", function (h) {
            return function (k, l, m) {
              return h.J(k, l, m, h.O);
            };
          }(d), "assign")) : g = cc11001100_hook("g", d.J, "assign"), f.La = cc11001100_hook("f.La", g, "assign"));
          g(b, a, f.va);
        }
        d = cc11001100_hook("d", {
          J: cc11001100_hook("J", d.J, "object-key-init"),
          N: cc11001100_hook("N", d.N, "object-key-init"),
          O: cc11001100_hook("O", d.O, "object-key-init")
        }, "assign");
      }
    }
    Tb(b, a);
  }
  function Ic(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a[b], "var-init");
    "function" == typeof c && 0 === c.length && (c = cc11001100_hook("c", c(), "assign"), a[b] = cc11001100_hook("a[b]", c, "assign"));
    return Array.isArray(c) && (Jc in c || Kc in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0;
  }
  var Lc = cc11001100_hook("Lc", (0, n.Symbol)(), "var-init");
  function Gc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a[Lc], "var-init");
    if (!b) {
      var c = cc11001100_hook("c", Mc(a), "var-init");
      b = cc11001100_hook("b", function (d, e) {
        return Nc(d, e, c);
      }, "assign");
      a[Lc] = cc11001100_hook("a[Lc]", b, "assign");
    }
    return b;
  }
  function Hc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a[Lc], "var-init");
    c || (c = cc11001100_hook("c", function (d, e) {
      return Fc(d, e, b);
    }, "assign"), a[Lc] = cc11001100_hook("a[Lc]", c, "assign"));
    return c;
  }
  var Kc = cc11001100_hook("Kc", (0, n.Symbol)(), "var-init");
  function Oc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.push(b);
  }
  function Pc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.push(b, c.M);
  }
  function Qc(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", Gc(d), "var-init"),
      f = cc11001100_hook("f", Mc(d).ba, "var-init"),
      g = cc11001100_hook("g", c.M, "var-init");
    a.push(b, function (h, k, l) {
      return g(h, k, l, f, e);
    });
  }
  function Rc(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g = cc11001100_hook("g", Hc(d, f), "var-init"),
      h = cc11001100_hook("h", c.M, "var-init");
    a.push(b, function (k, l, m) {
      return h(k, l, m, d, g);
    });
  }
  function Mc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a[Kc], "var-init");
    if (b) return b;
    b = cc11001100_hook("b", a[Kc] = cc11001100_hook("a[Kc]", [], "assign"), "assign");
    var c = cc11001100_hook("c", Oc, "var-init"),
      d = cc11001100_hook("d", Pc, "var-init"),
      e = cc11001100_hook("e", Qc, "var-init"),
      f = cc11001100_hook("f", Rc, "var-init");
    b.ba = cc11001100_hook("b.ba", a[0], "assign");
    var g = cc11001100_hook("g", 1, "var-init");
    if (a.length > g && "number" !== typeof a[g]) {
      var h = cc11001100_hook("h", a[g++], "var-init");
      c(b, h);
    }
    for (; g < a.length;) {
      c = cc11001100_hook("c", a[g++], "assign");
      for (var k = cc11001100_hook("k", g + 1, "var-init"); k < a.length && "number" !== typeof a[k];) k++;
      h = cc11001100_hook("h", a[g++], "assign");
      k -= cc11001100_hook("k", g, "assign");
      switch (k) {
        case 0:
          d(b, c, h);
          break;
        case 1:
          (k = cc11001100_hook("k", Ic(a, g), "assign")) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
          break;
        case 2:
          k = cc11001100_hook("k", b, "assign");
          var l = cc11001100_hook("l", g++, "var-init");
          l = cc11001100_hook("l", Ic(a, l), "assign");
          e(k, c, h, l, a[g++]);
          break;
        case 3:
          f(b, c, h, a[g++], a[g++], a[g++]);
          break;
        case 4:
          f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
          break;
        default:
          throw Error("unexpected number of binary field arguments: " + k);
      }
    }
    Jc in a && Kc in a && (a.length = cc11001100_hook("a.length", 0, "assign"));
    return b;
  }
  var Jc = cc11001100_hook("Jc", (0, n.Symbol)(), "var-init");
  function Nc(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var d = cc11001100_hook("d", c.length, "var-init"), e = cc11001100_hook("e", 1 == d % 2, "var-init"), f = cc11001100_hook("f", e ? 1 : 0, "var-init"); f < d; f += cc11001100_hook("f", 2, "assign")) (0, c[f + 1])(b, a, c[f]);
    Fc(a, b, e ? c[0] : void 0);
  }
  function Sc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      Ua: cc11001100_hook("Ua", a, "object-key-init"),
      M: cc11001100_hook("M", b, "object-key-init")
    };
  }
  function Tc(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    b = cc11001100_hook("b", oc(b, d, c), "assign");
    null != b && (c = cc11001100_hook("c", Rb(a, c), "assign"), e(b, a), Sb(a, c));
  }
  var N = cc11001100_hook("N", Sc(function (a, b, c) {
      if (0 !== a.h()) return !1;
      a = cc11001100_hook("a", a.A(), "assign");
      J(b, c, a);
      return !0;
    }, function (a, b, c) {
      b = cc11001100_hook("b", F(b, c), "assign");
      null != b && ("string" === typeof b && Jb(b), null != b && (Nb(a.h, 8 * c), "number" === typeof b ? (a = cc11001100_hook("a", a.h, "assign"), Eb(b), Mb(a, y, Db)) : (c = cc11001100_hook("c", Jb(b), "assign"), Mb(a.h, c.i, c.h))));
    }), "var-init"),
    Uc = cc11001100_hook("Uc", Sc(function (a, b, c) {
      if (0 !== a.h() && 2 !== a.h()) return !1;
      a.F(jc(b, c, 0, !1, Yb(b.l)));
      return !0;
    }, function (a, b, c) {
      b = cc11001100_hook("b", jc(b, c, 0, !1, Yb(b.l)), "assign");
      if (null != b && b.length) {
        c = cc11001100_hook("c", Rb(a, c), "assign");
        for (var d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) Ob(a.h, b[d]);
        Sb(a, c);
      }
    }), "var-init"),
    Vc = cc11001100_hook("Vc", Sc(function (a, b, c) {
      if (0 !== a.h()) return !1;
      a = cc11001100_hook("a", a.u(), "assign");
      H(b, c, a, 0);
      return !0;
    }, function (a, b, c) {
      b = cc11001100_hook("b", F(b, c), "assign");
      null != b && null != b && (Nb(a.h, 8 * c), Ob(a.h, b));
    }), "var-init"),
    P = cc11001100_hook("P", Sc(function (a, b, c) {
      if (0 !== a.h()) return !1;
      a = cc11001100_hook("a", a.m(), "assign");
      H(b, c, a, !1);
      return !0;
    }, function (a, b, c) {
      b = cc11001100_hook("b", kc(b, c), "assign");
      null != b && (Nb(a.h, 8 * c), a.h.h.push(b ? 1 : 0));
    }), "var-init"),
    Wc = cc11001100_hook("Wc", Sc(function (a, b, c) {
      if (2 !== a.h()) return !1;
      a = cc11001100_hook("a", a.j(), "assign");
      E(b);
      jc(b, c, 2, !1, !1).push(a);
      return !0;
    }, function (a, b, c) {
      var d = cc11001100_hook("d", Yb(b.l), "var-init"),
        e = cc11001100_hook("e", jc(b, c, 1, !1, d), "var-init"),
        f = cc11001100_hook("f", A(e), "var-init");
      if (!(f & 4)) {
        Object.isFrozen(e) && (e = cc11001100_hook("e", Xb(e.slice()), "assign"), G(b, c, e, !1));
        for (var g = cc11001100_hook("g", 0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); g < e.length; g++) {
          var k = cc11001100_hook("k", e[g], "var-init");
          null != k && (e[h++] = cc11001100_hook("e[h++]", k, "assign"));
        }
        h < g && (e.length = cc11001100_hook("e.length", h, "assign"));
        f |= cc11001100_hook("f", 5, "assign");
        d && (f |= cc11001100_hook("f", 18, "assign"));
        D(e, f);
        f & 2 && Object.freeze(e);
      }
      !d && (f & 2 || Object.isFrozen(e)) && (e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign"), Vb(e, 5), G(b, c, e, !1));
      b = cc11001100_hook("b", e, "assign");
      if (null != b) for (d = cc11001100_hook("d", 0, "assign"); d < b.length; d++) e = cc11001100_hook("e", b[d], "assign"), null != e && Ub(a, c, ya(e));
    }), "var-init"),
    Xc = cc11001100_hook("Xc", Sc(function (a, b, c) {
      if (2 !== a.h()) return !1;
      a = cc11001100_hook("a", a.j(), "assign");
      H(b, c, a, "");
      return !0;
    }, function (a, b, c) {
      b = cc11001100_hook("b", F(b, c), "assign");
      null != b && Ub(a, c, ya(b));
    }), "var-init"),
    Yc = cc11001100_hook("Yc", Sc(function (a, b, c, d, e) {
      if (2 !== a.h()) return !1;
      a.i(mc(b, d, c), e);
      return !0;
    }, Tc), "var-init"),
    Zc = cc11001100_hook("Zc", Sc(function (a, b, c, d, e) {
      if (2 !== a.h()) return !1;
      a.i(rc(b, c, d), e);
      return !0;
    }, function (a, b, c, d, e) {
      var f = cc11001100_hook("f", A(b.l), "var-init"),
        g = cc11001100_hook("g", !!(f & 2), "var-init");
      d = cc11001100_hook("d", pc(b, d, c, g, f), "assign");
      b = cc11001100_hook("b", jc(b, c, 3, void 0, g), "assign");
      if (!(g || A(b) & 8)) {
        for (g = cc11001100_hook("g", 0, "assign"); g < d.length; g++) {
          f = cc11001100_hook("f", d[g], "assign");
          var h = cc11001100_hook("h", nc(f), "var-init");
          f !== h && (d[g] = cc11001100_hook("d[g]", h, "assign"), b[g] = cc11001100_hook("b[g]", h.l, "assign"));
        }
        Vb(b, 8);
      }
      if (null != d) for (g = cc11001100_hook("g", 0, "assign"); g < d.length; g++) b = cc11001100_hook("b", Rb(a, c), "assign"), e(d[g], a), Sb(a, b);
    }), "var-init"),
    $c = cc11001100_hook("$c", Sc(function (a, b, c, d, e, f) {
      if (2 !== a.h()) return !1;
      var g = cc11001100_hook("g", a.i, "var-init");
      (f = cc11001100_hook("f", lc(b, f), "assign")) && f !== c && (E(b), G(b, f, void 0, !1));
      b = cc11001100_hook("b", mc(b, d, c), "assign");
      g.call(a, b, e);
      return !0;
    }, Tc), "var-init"),
    Q = cc11001100_hook("Q", Sc(function (a, b, c) {
      if (0 !== a.h()) return !1;
      a = cc11001100_hook("a", a.o(), "assign");
      H(b, c, a, 0);
      return !0;
    }, function (a, b, c) {
      b = cc11001100_hook("b", F(b, c), "assign");
      null != b && (b = cc11001100_hook("b", parseInt(b, 10), "assign"), Nb(a.h, 8 * c), Ob(a.h, b));
    }), "var-init");
  function R(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function () {
      var b = cc11001100_hook("b", new Pb(), "var-init");
      Nc(this, b, Mc(a));
      Qb(b, b.h.end());
      for (var c = cc11001100_hook("c", new Uint8Array(b.i), "var-init"), d = cc11001100_hook("d", b.j, "var-init"), e = cc11001100_hook("e", d.length, "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < e; g++) {
        var h = cc11001100_hook("h", d[g], "var-init");
        c.set(h, f);
        f += cc11001100_hook("f", h.length, "assign");
      }
      b.j = cc11001100_hook("b.j", [c], "assign");
      return c;
    };
  }
  ;
  function ad(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", !1, "var-init"),
      c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }
  function bd(a) {
    cc11001100_hook("a", a, "function-parameter");
    function b() {
      d = cc11001100_hook("d", v.setTimeout(c, 1E3), "assign");
      var g = cc11001100_hook("g", f, "var-init");
      f = cc11001100_hook("f", [], "assign");
      a.apply(void 0, g);
    }
    function c() {
      d = cc11001100_hook("d", 0, "assign");
      e && (e = cc11001100_hook("e", !1, "assign"), b());
    }
    var d = cc11001100_hook("d", 0, "var-init"),
      e = cc11001100_hook("e", !1, "var-init"),
      f = cc11001100_hook("f", [], "var-init");
    return function (g) {
      f = cc11001100_hook("f", arguments, "assign");
      d ? e = cc11001100_hook("e", !0, "assign") : b();
    };
  }
  ;
  var cd = cc11001100_hook("cd", ad(function () {
    var a = cc11001100_hook("a", !1, "var-init");
    try {
      var b = cc11001100_hook("b", Object.defineProperty({}, "passive", {
        get: function () {
          a = cc11001100_hook("a", !0, "assign");
        }
      }), "var-init");
      v.addEventListener("test", null, b);
    } catch (c) {}
    return a;
  }), "var-init");
  function dd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.passive && cd() ? a : a.capture || !1 : !1;
  }
  function ed(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.addEventListener && a.addEventListener(b, c, dd(d));
  }
  function fd(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.removeEventListener && a.removeEventListener(b, c, dd());
  }
  ;
  var gd = cc11001100_hook("gd", cb || fb, "var-init");
  function hd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c in a) if (b.call(void 0, a[c], c, a)) return c;
  }
  function id(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var b in a) delete a[b];
  }
  ;
  var jd;
  function kd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.h = cc11001100_hook("this.h", b === ld ? a : "", "assign");
  }
  kd.prototype.toString = cc11001100_hook("kd.prototype.toString", function () {
    return this.h + "";
  }, "assign");
  var ld = cc11001100_hook("ld", {}, "var-init");
  function md(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (void 0 === jd) {
      var b = cc11001100_hook("b", null, "var-init");
      var c = cc11001100_hook("c", v.trustedTypes, "var-init");
      if (c && c.createPolicy) {
        try {
          b = cc11001100_hook("b", c.createPolicy("goog#html", {
            createHTML: cc11001100_hook("createHTML", ta, "object-key-init"),
            createScript: cc11001100_hook("createScript", ta, "object-key-init"),
            createScriptURL: cc11001100_hook("createScriptURL", ta, "object-key-init")
          }), "assign");
        } catch (d) {
          v.console && v.console.error(d.message);
        }
        jd = cc11001100_hook("jd", b, "assign");
      } else jd = cc11001100_hook("jd", b, "assign");
    }
    a = cc11001100_hook("a", (b = cc11001100_hook("b", jd, "assign")) ? b.createScriptURL(a) : a, "assign");
    return new kd(a, ld);
  }
  ;
  function nd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Array.prototype.reduce.call(arguments, function (b, c) {
      return b + c;
    }, 0);
  }
  function od(a) {
    cc11001100_hook("a", a, "function-parameter");
    return nd.apply(null, arguments) / arguments.length;
  }
  ;
  function pd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.x = cc11001100_hook("this.x", void 0 !== a ? a : 0, "assign");
    this.y = cc11001100_hook("this.y", void 0 !== b ? b : 0, "assign");
  }
  pd.prototype.ceil = cc11001100_hook("pd.prototype.ceil", function () {
    this.x = cc11001100_hook("this.x", Math.ceil(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.ceil(this.y), "assign");
    return this;
  }, "assign");
  pd.prototype.floor = cc11001100_hook("pd.prototype.floor", function () {
    this.x = cc11001100_hook("this.x", Math.floor(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.floor(this.y), "assign");
    return this;
  }, "assign");
  pd.prototype.round = cc11001100_hook("pd.prototype.round", function () {
    this.x = cc11001100_hook("this.x", Math.round(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.round(this.y), "assign");
    return this;
  }, "assign");
  function qd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.width = cc11001100_hook("this.width", a, "assign");
    this.height = cc11001100_hook("this.height", b, "assign");
  }
  qd.prototype.aspectRatio = cc11001100_hook("qd.prototype.aspectRatio", function () {
    return this.width / this.height;
  }, "assign");
  qd.prototype.isEmpty = cc11001100_hook("qd.prototype.isEmpty", function () {
    return !(this.width * this.height);
  }, "assign");
  qd.prototype.ceil = cc11001100_hook("qd.prototype.ceil", function () {
    this.width = cc11001100_hook("this.width", Math.ceil(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.ceil(this.height), "assign");
    return this;
  }, "assign");
  qd.prototype.floor = cc11001100_hook("qd.prototype.floor", function () {
    this.width = cc11001100_hook("this.width", Math.floor(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.floor(this.height), "assign");
    return this;
  }, "assign");
  qd.prototype.round = cc11001100_hook("qd.prototype.round", function () {
    this.width = cc11001100_hook("this.width", Math.round(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.round(this.height), "assign");
    return this;
  }, "assign");
  function rd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (; a && 1 != a.nodeType;) a = cc11001100_hook("a", b ? a.nextSibling : a.previousSibling, "assign");
    return a;
  }
  function sd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    if (gd && (b = cc11001100_hook("b", a.parentElement, "assign"))) return b;
    b = cc11001100_hook("b", a.parentNode, "assign");
    a = cc11001100_hook("a", typeof b, "assign");
    return ("object" == a && null != b || "function" == a) && 1 == b.nodeType ? b : null;
  }
  function td(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  function ud(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", vd, "var-init");
    a && (a = cc11001100_hook("a", a.parentNode, "assign"));
    for (var c = cc11001100_hook("c", 0, "var-init"); a && 6 >= c;) {
      if (b(a)) return a;
      a = cc11001100_hook("a", a.parentNode, "assign");
      c++;
    }
    return null;
  }
  function wd(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a || v.document || document, "assign");
  }
  wd.prototype.contains = cc11001100_hook("wd.prototype.contains", function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }, "assign");
  var xd = cc11001100_hook("xd", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init");
  function yd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? decodeURI(a) : a;
  }
  ;
  function zd(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b;
      if (b = cc11001100_hook("b", !!a && null != a.location.href, "assign")) a: {
        try {
          ab(a.foo);
          b = cc11001100_hook("b", !0, "assign");
          break a;
        } catch (c) {}
        b = cc11001100_hook("b", !1, "assign");
      }
      return b;
    } catch (c) {
      return !1;
    }
  }
  function Ad(a) {
    cc11001100_hook("a", a, "function-parameter");
    return zd(a.top) ? a.top : null;
  }
  function Bd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function Cd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return hd(a, function (c, d) {
      return Object.prototype.hasOwnProperty.call(a, d) && b(c, d);
    });
  }
  function Dd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    if (0 == b) return 0;
    for (var c = cc11001100_hook("c", 305419896, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c ^= cc11001100_hook("c", (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295, "assign");
    return 0 < c ? c : 4294967296 + c;
  }
  function Ed(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a && a.toString && a.toString(), "assign");
    return "string" === typeof a && -1 != a.indexOf("[native code]");
  }
  function Fd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", void 0 === b ? document : b, "assign");
    return b.createElement(String(a).toLowerCase());
  }
  ;
  function Gd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    Hd(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
  }
  function Hd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    e = cc11001100_hook("e", void 0 === e ? !1 : e, "assign");
    a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
    var f = cc11001100_hook("f", Fd("IMG", a.document), "var-init");
    if (c || d) {
      var g = function (h) {
        c && c(h);
        d && Ua(a.google_image_requests, f);
        fd(f, "load", g);
        fd(f, "error", g);
      };
      ed(f, "load", g);
      ed(f, "error", g);
    }
    e && (f.attributionSrc = cc11001100_hook("f.attributionSrc", "", "assign"));
    f.src = cc11001100_hook("f.src", b, "assign");
    a.google_image_requests.push(f);
  }
  function Id(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", void 0 === b ? !1 : b, "var-init");
    var c = cc11001100_hook("c", "https://pagead2.googlesyndication.com/pagead/gen_204?id=reportingobserver", "var-init");
    Bd(a, function (d, e) {
      d && (c += cc11001100_hook("c", "&" + e + "=" + encodeURIComponent(d), "assign"));
    });
    Jd(c, b);
  }
  function Jd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", window, "var-init");
    b = cc11001100_hook("b", void 0 === b ? !1 : b, "assign");
    var d = cc11001100_hook("d", void 0 === d ? !1 : d, "var-init");
    c.fetch ? (b = cc11001100_hook("b", {
      keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
      credentials: cc11001100_hook("credentials", "include", "object-key-init"),
      redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
      method: cc11001100_hook("method", "get", "object-key-init"),
      mode: cc11001100_hook("mode", "no-cors", "object-key-init")
    }, "assign"), d && (b.mode = cc11001100_hook("b.mode", "cors", "assign"), b.headers = cc11001100_hook("b.headers", {
      "Attribution-Reporting-Eligible": cc11001100_hook("Attribution-Reporting-Eligible", "event-source", "object-key-init")
    }, "assign")), c.fetch(a, b)) : Gd(c, a, void 0, b, d);
  }
  ;
  function Kd(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    this.left = cc11001100_hook("this.left", a, "assign");
    this.top = cc11001100_hook("this.top", b, "assign");
    this.width = cc11001100_hook("this.width", c, "assign");
    this.height = cc11001100_hook("this.height", d, "assign");
  }
  Kd.prototype.contains = cc11001100_hook("Kd.prototype.contains", function (a) {
    return a instanceof pd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height;
  }, "assign");
  Kd.prototype.ceil = cc11001100_hook("Kd.prototype.ceil", function () {
    this.left = cc11001100_hook("this.left", Math.ceil(this.left), "assign");
    this.top = cc11001100_hook("this.top", Math.ceil(this.top), "assign");
    this.width = cc11001100_hook("this.width", Math.ceil(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.ceil(this.height), "assign");
    return this;
  }, "assign");
  Kd.prototype.floor = cc11001100_hook("Kd.prototype.floor", function () {
    this.left = cc11001100_hook("this.left", Math.floor(this.left), "assign");
    this.top = cc11001100_hook("this.top", Math.floor(this.top), "assign");
    this.width = cc11001100_hook("this.width", Math.floor(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.floor(this.height), "assign");
    return this;
  }, "assign");
  Kd.prototype.round = cc11001100_hook("Kd.prototype.round", function () {
    this.left = cc11001100_hook("this.left", Math.round(this.left), "assign");
    this.top = cc11001100_hook("this.top", Math.round(this.top), "assign");
    this.width = cc11001100_hook("this.width", Math.round(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.round(this.height), "assign");
    return this;
  }, "assign");
  var Ld = cc11001100_hook("Ld", void 0, "var-init");
  Ld = cc11001100_hook("Ld", void 0 === Ld ? v : Ld, "assign");
  var Md = cc11001100_hook("Md", Ld.context || Ld.AMP_CONTEXT_DATA, "var-init");
  if (!Md) try {
    Md = cc11001100_hook("Md", Ld.parent.context || Ld.parent.AMP_CONTEXT_DATA, "assign");
  } catch (a) {}
  var Nd,
    Od,
    Pd = cc11001100_hook("Pd", !!((null == (Nd = cc11001100_hook("Nd", Md, "assign")) ? 0 : Nd.pageViewId) && (null == (Od = cc11001100_hook("Od", Md, "assign")) ? 0 : Od.canonicalUrl) && Md) && v != v.top, "var-init"); /* 
                                                                                                                                                                                                                            SPDX-License-Identifier: Apache-2.0 
                                                                                                                                                                                                                            */
  function Qd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", sa.apply(1, arguments), "var-init");
    if (0 === b.length) return md(a[0]);
    for (var c = cc11001100_hook("c", [a[0]], "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return md(c.join(""));
  }
  ;
  function Rd(a) {
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
  function Sd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.offsetWidth, "var-init"),
      c = cc11001100_hook("c", a.offsetHeight, "var-init"),
      d = cc11001100_hook("d", fb && !b && !c, "var-init");
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = cc11001100_hook("a", Rd(a), "assign"), new qd(a.right - a.left, a.bottom - a.top)) : new qd(b, c);
  }
  ;
  function Td(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", void 0 === c ? {} : c, "var-init");
    this.error = cc11001100_hook("this.error", a, "assign");
    this.context = cc11001100_hook("this.context", b.context, "assign");
    this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
    this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
    this.meta = cc11001100_hook("this.meta", c, "assign");
  }
  ;
  var Ud = cc11001100_hook("Ud", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
  function Vd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.h = cc11001100_hook("this.h", a, "assign");
    this.i = cc11001100_hook("this.i", b, "assign");
  }
  function Wd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.url = cc11001100_hook("this.url", a, "assign");
    this.da = cc11001100_hook("this.da", !!b, "assign");
    this.depth = cc11001100_hook("this.depth", null, "assign");
  }
  ;
  function Xd() {
    this.j = cc11001100_hook("this.j", "&", "assign");
    this.i = cc11001100_hook("this.i", {}, "assign");
    this.m = cc11001100_hook("this.m", 0, "assign");
    this.h = cc11001100_hook("this.h", [], "assign");
  }
  function Yd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }
  function Zd(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", [], "var-init");
    Bd(a, function (g, h) {
      (g = cc11001100_hook("g", $d(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function $d(a, b, c, d, e) {
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
        for (var f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push($d(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(Zd(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a));
  }
  function ae(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
      d = cc11001100_hook("d", be(a) - b.length, "var-init");
    if (0 > d) return "";
    a.h.sort(function (m, p) {
      return m - p;
    });
    b = cc11001100_hook("b", null, "assign");
    for (var e = cc11001100_hook("e", "", "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < a.h.length; f++) for (var g = cc11001100_hook("g", a.h[f], "var-init"), h = cc11001100_hook("h", a.i[g], "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < h.length; k++) {
      if (!d) {
        b = cc11001100_hook("b", null == b ? g : b, "assign");
        break;
      }
      var l = cc11001100_hook("l", Zd(h[k], a.j, ",$"), "var-init");
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
    a = cc11001100_hook("a", "", "assign");
    null != b && (a = cc11001100_hook("a", e + "trn=" + b, "assign"));
    return c + a;
  }
  function be(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 1, "var-init"),
      c;
    for (c in a.i) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
    return 3997 - b - a.j.length - 1;
  }
  ;
  function ce() {
    this.h = cc11001100_hook("this.h", Math.random(), "assign");
  }
  function de() {
    var a = cc11001100_hook("a", ee, "var-init"),
      b = cc11001100_hook("b", window.google_srt, "var-init");
    0 <= b && 1 >= b && (a.h = cc11001100_hook("a.h", b, "assign"));
  }
  function fe(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (((void 0 === d ? 0 : d) ? a.h : Math.random()) < (e || .01)) try {
      if (c instanceof Xd) var f = cc11001100_hook("f", c, "var-init");else f = cc11001100_hook("f", new Xd(), "assign"), Bd(c, function (h, k) {
        var l = cc11001100_hook("l", f, "var-init"),
          m = cc11001100_hook("m", l.m++, "var-init");
        h = cc11001100_hook("h", Yd(k, h), "assign");
        l.h.push(m);
        l.i[m] = cc11001100_hook("l.i[m]", h, "assign");
      });
      var g = cc11001100_hook("g", ae(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
      g && Gd(v, g);
    } catch (h) {}
  }
  ;
  var ge = cc11001100_hook("ge", null, "var-init");
  function he() {
    var a = cc11001100_hook("a", void 0 === a ? v : a, "var-init");
    return (a = cc11001100_hook("a", a.performance, "assign")) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function ie() {
    var a = cc11001100_hook("a", void 0 === a ? v : a, "var-init");
    return (a = cc11001100_hook("a", a.performance, "assign")) && a.now ? a.now() : null;
  }
  ;
  function je(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    this.label = cc11001100_hook("this.label", a, "assign");
    this.type = cc11001100_hook("this.type", b, "assign");
    this.value = cc11001100_hook("this.value", c, "assign");
    this.duration = cc11001100_hook("this.duration", void 0 === d ? 0 : d, "assign");
    this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
    this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
  }
  ;
  var T = cc11001100_hook("T", v.performance, "var-init"),
    ke = cc11001100_hook("ke", !!(T && T.mark && T.measure && T.clearMarks), "var-init"),
    le = cc11001100_hook("le", ad(function () {
      var a;
      if (a = cc11001100_hook("a", ke, "assign")) {
        var b;
        if (null === ge) {
          ge = cc11001100_hook("ge", "", "assign");
          try {
            a = cc11001100_hook("a", "", "assign");
            try {
              a = cc11001100_hook("a", v.top.location.hash, "assign");
            } catch (c) {
              a = cc11001100_hook("a", v.location.hash, "assign");
            }
            a && (ge = cc11001100_hook("ge", (b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "assign")) ? b[1] : "", "assign"));
          } catch (c) {}
        }
        b = cc11001100_hook("b", ge, "assign");
        a = cc11001100_hook("a", !!b.indexOf && 0 <= b.indexOf("1337"), "assign");
      }
      return a;
    }), "var-init");
  function me(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.u = cc11001100_hook("this.u", [], "assign");
    this.h = cc11001100_hook("this.h", b || v, "assign");
    var c = cc11001100_hook("c", null, "var-init");
    b && (b.google_js_reporting_queue = cc11001100_hook("b.google_js_reporting_queue", b.google_js_reporting_queue || [], "assign"), this.u = cc11001100_hook("this.u", b.google_js_reporting_queue, "assign"), c = cc11001100_hook("c", b.google_measure_js_timing, "assign"));
    this.i = cc11001100_hook("this.i", le() || (null != c ? c : Math.random() < a), "assign");
  }
  me.prototype.F = cc11001100_hook("me.prototype.F", function () {
    this.i = cc11001100_hook("this.i", !1, "assign");
    this.u != this.h.google_js_reporting_queue && (le() && Qa(this.u, ne), this.u.length = cc11001100_hook("this.u.length", 0, "assign"));
  }, "assign");
  me.prototype.G = cc11001100_hook("me.prototype.G", function (a) {
    !this.i || 2048 < this.u.length || this.u.push(a);
  }, "assign");
  function ne(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && T && le() && (T.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), T.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  }
  function oe(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    a.i && a.G(new je(b, c, d, void 0 === e ? 0 : e));
  }
  me.prototype.start = cc11001100_hook("me.prototype.start", function (a, b) {
    if (!this.i) return null;
    a = cc11001100_hook("a", new je(a, b, ie() || he()), "assign");
    b = cc11001100_hook("b", "goog_" + a.label + "_" + a.uniqueId + "_start", "assign");
    T && le() && T.mark(b);
    return a;
  }, "assign");
  me.prototype.end = cc11001100_hook("me.prototype.end", function (a) {
    if (this.i && "number" === typeof a.value) {
      a.duration = cc11001100_hook("a.duration", (ie() || he()) - a.value, "assign");
      var b = cc11001100_hook("b", "goog_" + a.label + "_" + a.uniqueId + "_end", "var-init");
      T && le() && T.mark(b);
      this.G(a);
    }
  }, "assign");
  function pe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.i) {
      var c = cc11001100_hook("c", a.start("243", 3), "var-init");
      try {
        b();
      } catch (d) {
        throw ne(c), d;
      }
      a.end(c);
    } else b();
  }
  ;
  function qe() {
    var a = cc11001100_hook("a", re, "var-init");
    this.o = cc11001100_hook("this.o", ee, "assign");
    this.j = cc11001100_hook("this.j", null, "assign");
    this.F = cc11001100_hook("this.F", this.h, "assign");
    this.i = cc11001100_hook("this.i", void 0 === a ? null : a, "assign");
    this.m = cc11001100_hook("this.m", !1, "assign");
  }
  qe.prototype.u = cc11001100_hook("qe.prototype.u", function (a) {
    this.j = cc11001100_hook("this.j", a, "assign");
  }, "assign");
  qe.prototype.A = cc11001100_hook("qe.prototype.A", function (a) {
    this.m = cc11001100_hook("this.m", a, "assign");
  }, "assign");
  qe.prototype.L = cc11001100_hook("qe.prototype.L", function (a, b) {
    try {
      if (this.i && this.i.i) {
        var c = cc11001100_hook("c", this.i.start(a.toString(), 3), "var-init");
        var d = cc11001100_hook("d", b(), "var-init");
        this.i.end(c);
      } else d = cc11001100_hook("d", b(), "assign");
    } catch (g) {
      b = cc11001100_hook("b", !0, "assign");
      try {
        ne(c), b = cc11001100_hook("b", this.F(a, new Td(g, {
          message: cc11001100_hook("message", se(g), "object-key-init")
        }), void 0, void 0), "assign");
      } catch (h) {
        this.h(217, h);
      }
      if (b) {
        var e, f;
        null == (e = cc11001100_hook("e", window.console, "assign")) || null == (f = cc11001100_hook("f", e.error, "assign")) || f.call(e, g);
      } else throw g;
    }
    return d;
  }, "assign");
  qe.prototype.ea = cc11001100_hook("qe.prototype.ea", function (a, b) {
    var c = cc11001100_hook("c", this, "var-init");
    return function () {
      var d = cc11001100_hook("d", sa.apply(0, arguments), "var-init");
      return c.L(a, function () {
        return b.apply(void 0, d);
      });
    };
  }, "assign");
  qe.prototype.h = cc11001100_hook("qe.prototype.h", function (a, b, c, d, e) {
    e = cc11001100_hook("e", e || "jserror", "assign");
    try {
      var f = cc11001100_hook("f", new Xd(), "var-init");
      f.h.push(1);
      f.i[1] = cc11001100_hook("f.i[1]", Yd("context", a), "assign");
      b.error && b.meta && b.id || (b = cc11001100_hook("b", new Td(b, {
        message: cc11001100_hook("message", se(b), "object-key-init")
      }), "assign"));
      if (b.msg) {
        var g = cc11001100_hook("g", b.msg.substring(0, 512), "var-init");
        f.h.push(2);
        f.i[2] = cc11001100_hook("f.i[2]", Yd("msg", g), "assign");
      }
      var h = cc11001100_hook("h", b.meta || {}, "var-init");
      if (this.j) try {
        this.j(h);
      } catch (t) {}
      if (d) try {
        d(h);
      } catch (t) {}
      b = cc11001100_hook("b", [h], "assign");
      f.h.push(3);
      f.i[3] = cc11001100_hook("f.i[3]", b, "assign");
      d = cc11001100_hook("d", v, "assign");
      b = cc11001100_hook("b", [], "assign");
      g = cc11001100_hook("g", null, "assign");
      do {
        var k = cc11001100_hook("k", d, "var-init");
        if (zd(k)) {
          var l = cc11001100_hook("l", k.location.href, "var-init");
          g = cc11001100_hook("g", k.document && k.document.referrer || null, "assign");
        } else l = cc11001100_hook("l", g, "assign"), g = cc11001100_hook("g", null, "assign");
        b.push(new Wd(l || ""));
        try {
          d = cc11001100_hook("d", k.parent, "assign");
        } catch (t) {
          d = cc11001100_hook("d", null, "assign");
        }
      } while (d && k != d);
      l = cc11001100_hook("l", 0, "assign");
      for (var m = cc11001100_hook("m", b.length - 1, "var-init"); l <= m; ++l) b[l].depth = cc11001100_hook("b[l].depth", m - l, "assign");
      k = cc11001100_hook("k", v, "assign");
      if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1) for (m = cc11001100_hook("m", 1, "assign"); m < b.length; ++m) {
        var p = cc11001100_hook("p", b[m], "var-init");
        p.url || (p.url = cc11001100_hook("p.url", k.location.ancestorOrigins[m - 1] || "", "assign"), p.da = cc11001100_hook("p.da", !0, "assign"));
      }
      var r = cc11001100_hook("r", new Wd(v.location.href, !1), "var-init");
      k = cc11001100_hook("k", null, "assign");
      var O = cc11001100_hook("O", b.length - 1, "var-init");
      for (p = cc11001100_hook("p", O, "assign"); 0 <= p; --p) {
        var L = cc11001100_hook("L", b[p], "var-init");
        !k && Ud.test(L.url) && (k = cc11001100_hook("k", L, "assign"));
        if (L.url && !L.da) {
          r = cc11001100_hook("r", L, "assign");
          break;
        }
      }
      L = cc11001100_hook("L", null, "assign");
      var Ya = cc11001100_hook("Ya", b.length && b[O].url, "var-init");
      0 != r.depth && Ya && (L = cc11001100_hook("L", b[O], "assign"));
      var S = cc11001100_hook("S", new Vd(r, L), "var-init");
      if (S.i) {
        var Hb = cc11001100_hook("Hb", S.i.url || "", "var-init");
        f.h.push(4);
        f.i[4] = cc11001100_hook("f.i[4]", Yd("top", Hb), "assign");
      }
      var ua = cc11001100_hook("ua", {
        url: cc11001100_hook("url", S.h.url || "", "object-key-init")
      }, "var-init");
      if (S.h.url) {
        var Ia = cc11001100_hook("Ia", S.h.url.match(xd), "var-init"),
          Za = cc11001100_hook("Za", Ia[1], "var-init"),
          na = cc11001100_hook("na", Ia[3], "var-init"),
          oa = cc11001100_hook("oa", Ia[4], "var-init");
        r = cc11001100_hook("r", "", "assign");
        Za && (r += cc11001100_hook("r", Za + ":", "assign"));
        na && (r += cc11001100_hook("r", "//", "assign"), r += cc11001100_hook("r", na, "assign"), oa && (r += cc11001100_hook("r", ":" + oa, "assign")));
        var $a = cc11001100_hook("$a", r, "var-init");
      } else $a = cc11001100_hook("$a", "", "assign");
      ua = cc11001100_hook("ua", [ua, {
        url: cc11001100_hook("url", $a, "object-key-init")
      }], "assign");
      f.h.push(5);
      f.i[5] = cc11001100_hook("f.i[5]", ua, "assign");
      fe(this.o, e, f, this.m, c);
    } catch (t) {
      try {
        fe(this.o, e, {
          context: cc11001100_hook("context", "ecmserr", "object-key-init"),
          rctx: cc11001100_hook("rctx", a, "object-key-init"),
          msg: cc11001100_hook("msg", se(t), "object-key-init"),
          url: cc11001100_hook("url", S && S.h.url, "object-key-init")
        }, this.m, c);
      } catch (I) {}
    }
    return !0;
  }, "assign");
  function se(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.toString(), "var-init");
    a.name && -1 == b.indexOf(a.name) && (b += cc11001100_hook("b", ": " + a.name, "assign"));
    a.message && -1 == b.indexOf(a.message) && (b += cc11001100_hook("b", ": " + a.message, "assign"));
    if (a.stack) {
      a = cc11001100_hook("a", a.stack, "assign");
      var c = cc11001100_hook("c", b, "var-init");
      try {
        -1 == a.indexOf(c) && (a = cc11001100_hook("a", c + "\n" + a, "assign"));
        for (var d; a != d;) d = cc11001100_hook("d", a, "assign"), a = cc11001100_hook("a", a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1"), "assign");
        b = cc11001100_hook("b", a.replace(RegExp("\n *", "g"), "\n"), "assign");
      } catch (e) {
        b = cc11001100_hook("b", c, "assign");
      }
    }
    return b;
  }
  ;
  function te() {}
  ;
  var ee,
    ue,
    re = cc11001100_hook("re", new me(1, window), "var-init");
  (function (a) {
    ee = cc11001100_hook("ee", null != a ? a : new ce(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    de();
    ue = cc11001100_hook("ue", new qe(), "assign");
    ue.u(function () {});
    ue.A(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || re.F() : re.i && ed(window, "load", function () {
      window.google_measure_js_timing || re.F();
    });
  })();
  function ve(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return ue.ea(a, b);
  }
  ;
  function we(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a);
  }
  u(we, M);
  var xe = cc11001100_hook("xe", [we, 1, Q, 2, Q, 3, Xc, 4, Xc, 5, Xc, 6, P], "var-init");
  we.prototype.v = cc11001100_hook("we.prototype.v", R(xe), "assign");
  function ye(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a, -1, ze);
  }
  u(ye, M);
  var ze = cc11001100_hook("ze", [2], "var-init"),
    Ae = cc11001100_hook("Ae", [ye, 1, Q, 2, Zc, xe], "var-init");
  ye.prototype.v = cc11001100_hook("ye.prototype.v", R(Ae), "assign");
  function Be(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a);
  }
  u(Be, M);
  Be.prototype.getName = cc11001100_hook("Be.prototype.getName", function () {
    return tc(this, 1);
  }, "assign");
  var Ce = cc11001100_hook("Ce", [5], "var-init"),
    De = cc11001100_hook("De", [Be, 1, Xc, 2, Q, 3, N, 4, N, 5, $c, Ae, Ce], "var-init");
  Be.prototype.v = cc11001100_hook("Be.prototype.v", R(De), "assign");
  function Ee(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a, -1, He);
  }
  u(Ee, M);
  var He = cc11001100_hook("He", [1], "var-init");
  Ee.prototype.v = cc11001100_hook("Ee.prototype.v", R([Ee, 1, Zc, De]), "assign");
  var Ie = cc11001100_hook("Ie", ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]), "var-init");
  function Je() {
    var a = cc11001100_hook("a", void 0 === a ? "jserror" : a, "var-init");
    var b = cc11001100_hook("b", void 0 === b ? .01 : b, "var-init");
    var c = cc11001100_hook("c", void 0 === c ? Qd(Ie) : c, "var-init");
    this.j = cc11001100_hook("this.j", a, "assign");
    this.i = cc11001100_hook("this.i", null, "assign");
    this.m = cc11001100_hook("this.m", !1, "assign");
    this.G = cc11001100_hook("this.G", Math.random(), "assign");
    this.o = cc11001100_hook("this.o", b, "assign");
    this.F = cc11001100_hook("this.F", this.h, "assign");
    this.H = cc11001100_hook("this.H", c, "assign");
  }
  Je.prototype.u = cc11001100_hook("Je.prototype.u", function (a) {
    this.i = cc11001100_hook("this.i", a, "assign");
  }, "assign");
  Je.prototype.A = cc11001100_hook("Je.prototype.A", function (a) {
    this.m = cc11001100_hook("this.m", a, "assign");
  }, "assign");
  Je.prototype.h = cc11001100_hook("Je.prototype.h", function (a, b, c, d, e) {
    c = cc11001100_hook("c", void 0 === c ? this.o : c, "assign");
    e = cc11001100_hook("e", void 0 === e ? this.j : e, "assign");
    if ((this.m ? this.G : Math.random()) > c) return !1;
    b.error && b.meta && b.id || (b = cc11001100_hook("b", new Td(b, {
      context: cc11001100_hook("context", a, "object-key-init"),
      id: cc11001100_hook("id", e, "object-key-init")
    }), "assign"));
    if (d || this.i) b.meta = cc11001100_hook("b.meta", {}, "assign"), this.i && this.i(b.meta), d && d(b.meta);
    v.google_js_errors = cc11001100_hook("v.google_js_errors", v.google_js_errors || [], "assign");
    v.google_js_errors.push(b);
    if (!v.error_rep_loaded) {
      b = cc11001100_hook("b", v.document, "assign");
      a = cc11001100_hook("a", Fd("SCRIPT", b), "assign");
      c = cc11001100_hook("c", this.H, "assign");
      a.src = cc11001100_hook("a.src", c instanceof kd && c.constructor === kd ? c.h : "type_error:TrustedResourceUrl", "assign");
      var f, g;
      (f = cc11001100_hook("f", (c = cc11001100_hook("c", null == (g = cc11001100_hook("g", (f = cc11001100_hook("f", (a.ownerDocument && a.ownerDocument.defaultView || window).document, "assign")).querySelector, "assign")) ? void 0 : g.call(f, "script[nonce]"), "assign")) ? c.nonce || c.getAttribute("nonce") || "" : "", "assign")) && a.setAttribute("nonce", f);
      (f = cc11001100_hook("f", b.getElementsByTagName("script")[0], "assign")) && f.parentNode && f.parentNode.insertBefore(a, f);
      v.error_rep_loaded = cc11001100_hook("v.error_rep_loaded", !0, "assign");
    }
    return !1;
  }, "assign");
  Je.prototype.L = cc11001100_hook("Je.prototype.L", function (a, b) {
    try {
      return b();
    } catch (c) {
      if (!this.F(a, c, this.o, void 0, this.j)) throw c;
    }
  }, "assign");
  Je.prototype.ea = cc11001100_hook("Je.prototype.ea", function (a, b) {
    var c = cc11001100_hook("c", this, "var-init");
    return function () {
      var d = cc11001100_hook("d", sa.apply(0, arguments), "var-init");
      return c.L(a, function () {
        return b.apply(void 0, d);
      });
    };
  }, "assign");
  function Ke(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    a.visibilityState ? b = cc11001100_hook("b", "visibilitychange", "assign") : a.mozVisibilityState ? b = cc11001100_hook("b", "mozvisibilitychange", "assign") : a.webkitVisibilityState && (b = cc11001100_hook("b", "webkitvisibilitychange", "assign"));
    return b;
  }
  ;
  function Le(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a, -1, Me);
  }
  u(Le, M);
  var Me = cc11001100_hook("Me", [15], "var-init"),
    Ne = cc11001100_hook("Ne", [Le, 4, P, 5, P, 1, P, 2, P, 3, Vc, 7, P, 8, P, 9, P, 12, P, 10, P, 13, P, 14, P, 16, P, 17, P, 15, Uc, 18, P, 19, P], "var-init");
  Le.prototype.v = cc11001100_hook("Le.prototype.v", R(Ne), "assign");
  function Oe(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a);
  }
  u(Oe, M);
  Oe.prototype.getCorrelator = cc11001100_hook("Oe.prototype.getCorrelator", function () {
    return sc(F(this, 1), 0);
  }, "assign");
  Oe.prototype.setCorrelator = cc11001100_hook("Oe.prototype.setCorrelator", function (a) {
    return J(this, 1, a);
  }, "assign");
  var Pe = cc11001100_hook("Pe", [Oe, 1, N, 2, Q, 3, Xc, 4, Xc, 5, Xc, 6, N], "var-init");
  Oe.prototype.v = cc11001100_hook("Oe.prototype.v", R(Pe), "assign");
  function Qe(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a);
  }
  u(Qe, M);
  Qe.prototype.v = cc11001100_hook("Qe.prototype.v", R([Qe, 1, Yc, Pe, 2, Yc, Ne]), "assign");
  function Re(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a._google_rum_ns_ = cc11001100_hook("a._google_rum_ns_", a._google_rum_ns_ || {}, "assign");
  }
  function Se(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Re(a), "assign");
    return a.pq = cc11001100_hook("a.pq", a.pq || [], "assign");
  }
  ;
  function Te() {
    if (!v._google_rum_ns_) return !1;
    var a = cc11001100_hook("a", Re(v), "var-init");
    return !(!a.raf || !a.ric);
  }
  function Ue() {
    var a = cc11001100_hook("a", Re(v), "var-init");
    a.raf = cc11001100_hook("a.raf", a.raf || [], "assign");
    a.ric = cc11001100_hook("a.ric", a.ric || [], "assign");
    return {
      ya: cc11001100_hook("ya", a.raf, "object-key-init"),
      za: cc11001100_hook("za", a.ric, "object-key-init")
    };
  }
  ;
  function Ve(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    Bd(b, function (d, e) {
      var f = cc11001100_hook("f", c && c[e], "var-init");
      !d && 0 !== d || f || (a += cc11001100_hook("a", "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), "assign"), c && (c[e] = cc11001100_hook("c[e]", !0, "assign")));
    });
    return a;
  }
  function We(a, b, c, d, e, f, g, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    function k(m) {
      cc11001100_hook("m", m, "function-parameter");
      var p = cc11001100_hook("p", m[0], "var-init");
      m = cc11001100_hook("m", m[1], "assign");
      var r = cc11001100_hook("r", p.length + m.length + 2, "var-init");
      8E3 < l.m + l.j + r && Xe(l);
      l.R.push([p, m]);
      l.j += cc11001100_hook("l.j", r, "assign");
      6E3 <= l.m + l.j && Xe(l);
      return 0;
    }
    f = cc11001100_hook("f", void 0 === f ? Infinity : f, "assign");
    g = cc11001100_hook("g", void 0 === g ? !1 : g, "assign");
    me.call(this, a, h);
    var l = cc11001100_hook("l", this, "var-init");
    this.H = cc11001100_hook("this.H", 0, "assign");
    this.X = cc11001100_hook("this.X", f, "assign");
    this.ga = cc11001100_hook("this.ga", b, "assign");
    this.W = cc11001100_hook("this.W", c, "assign");
    this.fa = cc11001100_hook("this.fa", d, "assign");
    this.ha = cc11001100_hook("this.ha", e, "assign");
    a = cc11001100_hook("a", this.h.navigator, "assign");
    this.aa = cc11001100_hook("this.aa", !("csi.gstatic.com" !== this.W || !a || !a.sendBeacon), "assign");
    this.A = cc11001100_hook("this.A", {}, "assign");
    this.S = cc11001100_hook("this.S", {}, "assign");
    this.h.performance && this.h.performance.now || V(this, "dat", 1);
    a && a.deviceMemory && V(this, "dmc", a.deviceMemory);
    this.h === this.h.top && V(this, "top", 1);
    this.ia = cc11001100_hook("this.ia", !g, "assign");
    this.Y = cc11001100_hook("this.Y", function () {
      l.h.setTimeout(function () {
        return Xe(l);
      }, 1100);
    }, "assign");
    this.P = cc11001100_hook("this.P", [], "assign");
    this.Z = cc11001100_hook("this.Z", function () {
      V(l, "uet", 2);
      for (var m = cc11001100_hook("m", q(l.P), "var-init"), p = cc11001100_hook("p", m.next(), "var-init"); !p.done; p = cc11001100_hook("p", m.next(), "assign")) {
        p = cc11001100_hook("p", p.value, "assign");
        try {
          p();
        } catch (O) {}
      }
      m = cc11001100_hook("m", l.h, "assign");
      var r = cc11001100_hook("r", void 0 === r ? {} : r, "var-init");
      "function" === typeof window.CustomEvent ? p = cc11001100_hook("p", new CustomEvent("rum_blp", r), "assign") : (p = cc11001100_hook("p", document.createEvent("CustomEvent"), "assign"), p.initCustomEvent("rum_blp", !!r.bubbles, !!r.cancelable, r.detail));
      m.dispatchEvent(p);
      Xe(l);
      null != l.A.uet && (l.m -= cc11001100_hook("l.m", l.A.uet.length + 5, "assign"), delete l.A.uet);
    }, "assign");
    this.T = cc11001100_hook("this.T", bd(function () {
      Xe(l);
    }), "assign");
    this.ja = cc11001100_hook("this.ja", function () {
      var m = cc11001100_hook("m", l.h.document, "var-init");
      (null != m.hidden ? m.hidden : null != m.mozHidden ? m.mozHidden : null != m.webkitHidden && m.webkitHidden) && l.T();
    }, "assign");
    this.K = cc11001100_hook("this.K", this.h.setTimeout(function () {
      return Xe(l);
    }, 5E3), "assign");
    this.o = cc11001100_hook("this.o", {}, "assign");
    this.m = cc11001100_hook("this.m", b.length + c.length + d.length + e.length + 3, "assign");
    this.j = cc11001100_hook("this.j", 0, "assign");
    Qa(this.u, function (m) {
      return Ye(l, m);
    });
    this.R = cc11001100_hook("this.R", [], "assign");
    b = cc11001100_hook("b", Se(this.h), "assign");
    Qa(b, function (m) {
      return k(m);
    });
    b.length = cc11001100_hook("b.length", 0, "assign");
    b.push = cc11001100_hook("b.push", k, "assign");
    V(this, "puid", (this.H + 1).toString(36) + "~" + Date.now().toString(36));
    Ze(this);
  }
  u(We, me);
  function $e(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.P.push(b);
  }
  function Ze(a) {
    cc11001100_hook("a", a, "function-parameter");
    "complete" === a.h.document.readyState ? a.h.setTimeout(function () {
      return Xe(a);
    }, 0) : ed(a.h, "load", a.Y);
    var b = cc11001100_hook("b", Ke(a.h.document), "var-init");
    "undefined" !== typeof b && ed(a.h, b, a.ja);
    ed(a.h, "pagehide", a.Z);
  }
  function V(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", String(c), "assign");
    a.m = cc11001100_hook("a.m", null != a.A[b] ? a.m + (c.length - a.A[b].length) : a.m + (b.length + c.length + 2), "assign");
    a.A[b] = cc11001100_hook("a.A[b]", c, "assign");
  }
  function af(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", "ec=" + b, "var-init");
    a.S[c] || (bf(a, "ec", b, !1), 1E3 > c.length && (a.S[c] = cc11001100_hook("a.S[c]", !0, "assign")));
  }
  function bf(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    e = cc11001100_hook("e", void 0 === e ? "" : e, "assign");
    var f = cc11001100_hook("f", null == a.o[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.o[b].length, "var-init");
    8E3 < a.m + a.j + f && (Xe(a), f = cc11001100_hook("f", b.length + c.length + 2, "assign"));
    a.o[b] = cc11001100_hook("a.o[b]", d && null != a.o[b] ? a.o[b] + ((void 0 === e ? "" : e) + c) : c, "assign");
    a.j += cc11001100_hook("a.j", f, "assign");
    6E3 <= a.m + a.j && Xe(a);
  }
  function Xe(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.i && a.ia) {
      try {
        a.j && (cf(a, a.o), a.H === a.X && a.F());
      } catch (b) {
        new Je().h(358, b);
      }
      a.o = cc11001100_hook("a.o", {}, "assign");
      a.j = cc11001100_hook("a.j", 0, "assign");
      a.u.length = cc11001100_hook("a.u.length", 0, "assign");
      a.h.clearTimeout(a.K);
      a.K = cc11001100_hook("a.K", 0, "assign");
    }
  }
  function df(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.ga + "//" + a.W + a.fa + a.ha, "var-init"),
      d = cc11001100_hook("d", {}, "var-init");
    c = cc11001100_hook("c", Ve(c, a.A, d), "assign");
    c = cc11001100_hook("c", Ve(c, b, d), "assign");
    b = cc11001100_hook("b", a.h, "assign");
    b.google_timing_params && (c = cc11001100_hook("c", Ve(c, b.google_timing_params, d), "assign"), b.google_timing_params = cc11001100_hook("b.google_timing_params", void 0, "assign"));
    Qa(a.R, function (e) {
      var f = cc11001100_hook("f", q(e), "var-init");
      e = cc11001100_hook("e", f.next().value, "assign");
      f = cc11001100_hook("f", f.next().value, "assign");
      var g = cc11001100_hook("g", {}, "var-init");
      c = cc11001100_hook("c", Ve(c, (g[e] = cc11001100_hook("g[e]", f, "assign"), g)), "assign");
    });
    a.R.length = cc11001100_hook("a.R.length", 0, "assign");
    return c;
  }
  function cf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.H++;
    b = cc11001100_hook("b", df(a, b), "assign");
    var c = cc11001100_hook("c", !1, "var-init");
    try {
      c = cc11001100_hook("c", !!(a.aa && a.h.navigator && a.h.navigator.sendBeacon(b, null)), "assign");
    } catch (d) {
      a.aa = cc11001100_hook("a.aa", !1, "assign");
    }
    c || Gd(a.h, b);
    V(a, "puid", (a.H + 1).toString(36) + "~" + Date.now().toString(36));
  }
  function ef(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    bf(a, "met." + b, c, void 0 === d ? !1 : d, void 0 === e ? "~" : e);
  }
  function ff(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", "" + a, "var-init");
    Bd(b, function (d, e) {
      null != d && (c += cc11001100_hook("c", "." + e + "_" + d, "assign"));
    });
    return c;
  }
  function gf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", ff(b, c), "assign");
    var d = cc11001100_hook("d", {}, "var-init");
    b = cc11001100_hook("b", (d["met." + b] = cc11001100_hook("d[\"met.\" + b]", c, "assign"), d), "assign");
    cf(a, b);
  }
  function Ye(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", "met." + b.type, "var-init"),
      d = cc11001100_hook("d", "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value, "var-init"),
      e = cc11001100_hook("e", Math.round(b.duration), "var-init");
    b = cc11001100_hook("b", b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "") + (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : ""), "assign");
    bf(a, c, b, !0, "~");
  }
  We.prototype.G = cc11001100_hook("We.prototype.G", function (a) {
    this.i && this.H < this.X && (me.prototype.G.call(this, a), Ye(this, a));
  }, "assign");
  We.prototype.F = cc11001100_hook("We.prototype.F", function () {
    me.prototype.F.call(this);
    this.h.clearTimeout(this.K);
    this.j = cc11001100_hook("this.j", this.K = cc11001100_hook("this.K", 0, "assign"), "assign");
    this.o = cc11001100_hook("this.o", {}, "assign");
    id(this.S);
    id(this.A);
    fd(this.h, "load", this.Y);
    fd(this.h, "pagehide", this.Z);
  }, "assign");
  var hf = cc11001100_hook("hf", {
      self: cc11001100_hook("self", 1, "object-key-init"),
      "same-origin-ancestor": cc11001100_hook("same-origin-ancestor", 2, "object-key-init"),
      "same-origin-descendant": cc11001100_hook("same-origin-descendant", 3, "object-key-init"),
      "same-origin": cc11001100_hook("same-origin", 4, "object-key-init"),
      "cross-origin-ancestor": cc11001100_hook("cross-origin-ancestor", 5, "object-key-init"),
      "cross-origin-descendant": cc11001100_hook("cross-origin-descendant", 6, "object-key-init"),
      "cross-origin-unreachable": cc11001100_hook("cross-origin-unreachable", 7, "object-key-init"),
      "multiple-contexts": cc11001100_hook("multiple-contexts", 8, "object-key-init")
    }, "var-init"),
    jf = cc11001100_hook("jf", {
      script: cc11001100_hook("script", 1, "object-key-init"),
      layout: cc11001100_hook("layout", 2, "object-key-init")
    }, "var-init"),
    kf = cc11001100_hook("kf", {
      iframe: cc11001100_hook("iframe", 1, "object-key-init"),
      embed: cc11001100_hook("embed", 2, "object-key-init"),
      object: cc11001100_hook("object", 3, "object-key-init")
    }, "var-init");
  function lf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new ye(), "var-init");
    H(b, 1, hf[a.name], 0);
    Qa(a.attribution, function (c) {
      var d = cc11001100_hook("d", new we(), "var-init");
      H(d, 1, jf[c.name], 0);
      H(d, 2, kf[c.containerType], 0);
      "string" === typeof c.containerId && H(d, 6, 0 == c.containerId.lastIndexOf("google_ads_iframe", 0), !1);
      rc(b, 2, we, d);
    });
    return b;
  }
  function mf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", vb(b.v(), 4), "assign");
    var c = cc11001100_hook("c", {}, "var-init");
    gf(a, 6, (c[1] = cc11001100_hook("c[1]", b, "assign"), c));
  }
  function nf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b.PerformanceLongTaskTiming && b.PerformanceObserver) {
      var c = cc11001100_hook("c", 0, "var-init");
      new b.PerformanceObserver(ve(246, function (d, e) {
        var f = cc11001100_hook("f", new Ee(), "var-init");
        Qa(d.getEntries(), function (g) {
          var h = cc11001100_hook("h", new Be(), "var-init");
          J(h, 3, Math.round(g.startTime));
          J(h, 4, Math.round(g.duration));
          g = cc11001100_hook("g", lf(g), "assign");
          E(h);
          null == g && (g = cc11001100_hook("g", void 0, "assign"));
          E(h);
          var k = cc11001100_hook("k", lc(h, Ce), "var-init");
          k && 5 !== k && null != g && G(h, k, void 0, !1);
          G(h, 5, g);
          rc(f, 1, Be, h);
        });
        mf(a, f);
        10 <= ++c && e.disconnect();
      })).observe({
        type: cc11001100_hook("type", "longtask", "object-key-init"),
        buffered: cc11001100_hook("buffered", !0, "object-key-init")
      });
    }
  }
  ;
  function of(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a);
  }
  u(of, M);
  var pf = cc11001100_hook("pf", [of, 1, Xc, 2, N], "var-init");
  of.prototype.v = cc11001100_hook("of.prototype.v", R(pf), "assign");
  function qf(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a, -1, rf);
  }
  u(qf, M);
  var rf = cc11001100_hook("rf", [3], "var-init");
  qf.prototype.v = cc11001100_hook("qf.prototype.v", R([qf, 1, Xc, 2, P, 3, Zc, pf, 4, N]), "assign");
  function sf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", v, "var-init");
    b = cc11001100_hook("b", void 0 === b ? v : b, "assign");
    this.m = cc11001100_hook("this.m", a, "assign");
    this.h = cc11001100_hook("this.h", b, "assign");
    this.i = cc11001100_hook("this.i", 0, "assign");
    var c;
    this.j = cc11001100_hook("this.j", null != (null == (c = cc11001100_hook("c", this.h.navigator, "assign")) ? void 0 : c.sendBeacon), "assign");
  }
  function tf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", void 0 === c ? 0 : c, "assign");
    var d = cc11001100_hook("d", a.h !== a.h.top, "var-init"),
      e = cc11001100_hook("e", b.slice(a.i), "var-init");
    b = cc11001100_hook("b", e.splice(0, 250 - a.i), "assign");
    if (d && a.j && b) {
      d = cc11001100_hook("d", new qf(), "assign");
      d = cc11001100_hook("d", H(d, 1, a.m, ""), "assign");
      e = cc11001100_hook("e", H(d, 2, !!e.length, !1), "assign");
      e = cc11001100_hook("e", qc(e, 3, b), "assign");
      c = cc11001100_hook("c", J(e, 4, c), "assign");
      c = cc11001100_hook("c", vb(c.v(), 4), "assign");
      try {
        var f;
        a.j && (null == (f = cc11001100_hook("f", a.h.navigator, "assign")) || f.sendBeacon("https://pagead2.googlesyndication.com/pagead/gen_204?id=urind", c));
      } catch (g) {
        a.j = cc11001100_hook("a.j", !1, "assign");
      }
      a.i += cc11001100_hook("a.i", b.length, "assign");
    }
  }
  ;
  function uf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.timestamp, "var-init");
    return Math.round(a.position).toString(36) + "." + Math.round(b).toString(36);
  }
  function vf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", this, "var-init");
    this.j = cc11001100_hook("this.j", -1, "assign");
    this.m = cc11001100_hook("this.m", -Infinity, "assign");
    this.h = cc11001100_hook("this.h", [], "assign");
    this.i = cc11001100_hook("this.i", a, "assign");
    this.o = cc11001100_hook("this.o", 0, "assign");
    this.A = cc11001100_hook("this.A", ve(456, function () {
      return wf(b);
    }), "assign");
    this.u = cc11001100_hook("this.u", function () {
      return xf(b);
    }, "assign");
  }
  vf.prototype.install = cc11001100_hook("vf.prototype.install", function () {
    v.performance && (wf(this), ed(v, "scroll", this.A, {
      passive: cc11001100_hook("passive", !0, "object-key-init")
    }), $e(this.i, this.u));
  }, "assign");
  function wf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", v.pageYOffset || 0, "var-init"),
      c = cc11001100_hook("c", ie() || 0, "var-init");
    if (100 < Math.abs(b - a.j) || 200 < c - a.m) a.j = cc11001100_hook("a.j", b, "assign"), a.m = cc11001100_hook("a.m", c, "assign"), 400 <= a.h.push({
      position: cc11001100_hook("position", b, "object-key-init"),
      timestamp: cc11001100_hook("timestamp", c, "object-key-init")
    }) && (xf(a), 8 <= a.o && (fd(v, "scroll", a.A), Ua(a.i.P, a.u)));
  }
  function xf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.h.length && (ef(a.i, 12, Sa(a.h, uf).join("~")), a.h = cc11001100_hook("a.h", [], "assign"), a.o++);
  }
  ;
  function yf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", void 0 === a ? window : a, "assign");
    a = cc11001100_hook("a", a.googletag, "assign");
    return (null == a ? 0 : a.apiReady) ? a : void 0;
  }
  ;
  function zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", yf(a), "var-init");
    return b ? Ra(Sa(b.pubads().getSlots(), function (c) {
      return a.document.getElementById(c.getSlotElementId());
    }), function (c) {
      return null != c;
    }) : null;
  }
  function W(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.document.querySelectorAll(b), "assign");
    b = cc11001100_hook("b", a.length, "assign");
    if (0 < b) {
      for (var c = cc11001100_hook("c", Array(b), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c[d] = cc11001100_hook("c[d]", a[d], "assign");
      a = cc11001100_hook("a", c, "assign");
    } else a = cc11001100_hook("a", [], "assign");
    return a;
  }
  function Af(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    a = cc11001100_hook("a", q(a), "assign");
    for (var c = cc11001100_hook("c", a.next(), "var-init"); !c.done; c = cc11001100_hook("c", a.next(), "assign")) {
      c = cc11001100_hook("c", c.value, "assign");
      for (var d = cc11001100_hook("d", !0, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
        var f = cc11001100_hook("f", b[e], "var-init");
        if (f.contains(c)) {
          d = cc11001100_hook("d", !1, "assign");
          break;
        }
        if (c.contains(f)) {
          d = cc11001100_hook("d", !1, "assign");
          b[e] = cc11001100_hook("b[e]", c, "assign");
          break;
        }
      }
      d && b.push(c);
    }
    return b;
  }
  ;
  function Bf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.document, "assign");
    var b = cc11001100_hook("b", {}, "var-init");
    a && (b = cc11001100_hook("b", "CSS1Compat" == a.compatMode ? a.documentElement : a.body, "assign"));
    return b || {};
  }
  ;
  function Cf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.j = cc11001100_hook("this.j", a, "assign");
    this.h = cc11001100_hook("this.h", b, "assign");
    this.i = cc11001100_hook("this.i", "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" "), "assign");
  }
  function Df(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", (Aa && Ja ? Ja.mobile : !(Aa && Ja ? !Ja.mobile && (w("iPad") || w("Android") || w("Silk")) : w("iPad") || w("Android") && !w("Mobile") || w("Silk")) && (w("iPod") || w("iPhone") || w("Android") || w("IEMobile"))) && !(900 <= Bf(a.j).clientWidth), "var-init"),
      d = cc11001100_hook("d", Ra([], function (e) {
        return 0 <= Pa(a.i, e);
      }).join(","), "var-init");
    return {
      wpc: cc11001100_hook("wpc", "", "object-key-init"),
      su: cc11001100_hook("su", b, "object-key-init"),
      eid: cc11001100_hook("eid", d, "object-key-init"),
      doc: cc11001100_hook("doc", a.h.ta, "object-key-init"),
      pg_h: cc11001100_hook("pg_h", X(a.h.Ha), "object-key-init"),
      pg_w: cc11001100_hook("pg_w", X(a.h.Ja), "object-key-init"),
      pg_hs: cc11001100_hook("pg_hs", X(a.h.Ia), "object-key-init"),
      c: cc11001100_hook("c", X(a.h.Ba), "object-key-init"),
      aa_c: cc11001100_hook("aa_c", X(a.h.ma), "object-key-init"),
      av_h: cc11001100_hook("av_h", X(a.h.oa), "object-key-init"),
      av_w: cc11001100_hook("av_w", X(a.h.pa), "object-key-init"),
      av_a: cc11001100_hook("av_a", X(a.h.na), "object-key-init"),
      s: cc11001100_hook("s", X(a.h.Ga), "object-key-init"),
      all_s: cc11001100_hook("all_s", X(a.h.Fa), "object-key-init"),
      b: cc11001100_hook("b", X(a.h.Ea), "object-key-init"),
      all_b: cc11001100_hook("all_b", X(a.h.Da), "object-key-init"),
      d: cc11001100_hook("d", X(a.h.sa), "object-key-init"),
      all_d: cc11001100_hook("all_d", X(a.h.ra), "object-key-init"),
      ard: cc11001100_hook("ard", X(a.h.la), "object-key-init"),
      all_ard: cc11001100_hook("all_ard", X(a.h.ka), "object-key-init"),
      pd_h: cc11001100_hook("pd_h", X(a.h.Ka), "object-key-init"),
      dt: cc11001100_hook("dt", c ? "m" : "d", "object-key-init")
    };
  }
  function Ef(a) {
    cc11001100_hook("a", a, "function-parameter");
    return od.apply(null, Ra(a, function (b) {
      return 0 < b;
    })) || null;
  }
  function Ff(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 0 >= a ? null : nd.apply(null, b) / a;
  }
  function Gf(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var b = cc11001100_hook("b", Infinity, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < a.length - 1; c++) for (var d = cc11001100_hook("d", c + 1, "var-init"); d < a.length; d++) {
      var e = cc11001100_hook("e", a[c], "var-init"),
        f = cc11001100_hook("f", a[d], "var-init");
      e = cc11001100_hook("e", Math.max(Math.max(0, e.left - f.right, f.left - e.right), Math.max(0, e.top - f.bottom, f.top - e.bottom)), "assign");
      0 < e && (b = cc11001100_hook("b", Math.min(e, b), "assign"));
    }
    return Infinity !== b ? b : null;
  }
  function X(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null == a ? null : ha(Number, "isInteger").call(Number, a) ? a.toString() : a.toFixed(3);
  }
  ;
  function Hf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", navigator, "var-init");
    c = cc11001100_hook("c", c.getBattery && c.getBattery(), "assign");
    null != c && c.then ? c.then(function (d) {
      var e = cc11001100_hook("e", d.level, "var-init"),
        f = cc11001100_hook("f", d.charging, "var-init");
      setTimeout(function () {
        b(100 * e | 0, 100 * d.level | 0, f || d.charging);
      }, a);
    }) : b();
  }
  ;
  var If = cc11001100_hook("If", /^.+\.((googlesyndication|googletagservices)\.com|doubleclick\.net)$/, "var-init"),
    Jf = cc11001100_hook("Jf", /^(aswift_\d+|google_ads_iframe_.+)$/, "var-init"),
    Kf = cc11001100_hook("Kf", /^div-gpt-ad-.+$/, "var-init"),
    Lf = cc11001100_hook("Lf", ["ZGl2LnRhYm9vbGE=", "ZGl2Lk9VVEJSQUlO"], "var-init");
  function Mf(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) return "";
    var b = cc11001100_hook("b", Math.floor(Math.random() * a.length), "var-init");
    return b.toString(36) + encodeURIComponent(a.charAt(b)) + "." + Dd(a).toString(36);
  }
  function Nf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", yd(za(a).match(xd)[3] || null), "assign")) ? a.toLowerCase() : "";
  }
  function Of(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 10 <= a.offsetWidth && 10 <= a.offsetHeight;
  }
  function vd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a && 1 === a.nodeType && "DIV" === a.nodeName ? Kf.test(a.id) || a.hasAttribute("data-google-query-id") : !1;
  }
  function Pf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    if (!a.body) return b;
    var c = cc11001100_hook("c", a.body, "var-init");
    a = cc11001100_hook("a", c.getElementsByTagName("script"), "assign");
    for (var d = cc11001100_hook("d", a.length, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < d; e++) {
      var f = cc11001100_hook("f", a[e], "var-init"),
        g = cc11001100_hook("g", f.src, "var-init");
      g && (f = cc11001100_hook("f", (void 0 !== f.nextElementSibling ? f.nextElementSibling : rd(f.nextSibling, !0)) || sd(f), "assign")) && "DIV" === f.nodeName && Of(f) && (g = cc11001100_hook("g", Nf(g), "assign")) && !If.test(g) && b.push(new Qf(f, g));
    }
    if (!c.querySelectorAll) return b;
    Qa(Lf, function (h) {
      for (var k = cc11001100_hook("k", c.querySelectorAll(xb(h)), "var-init"), l = cc11001100_hook("l", k.length, "var-init"), m = cc11001100_hook("m", 0, "var-init"); m < l; m++) {
        var p = cc11001100_hook("p", k[m], "var-init");
        Of(p) && b.push(new Qf(p, h));
      }
    });
    return b;
  }
  function Qf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    this.id = cc11001100_hook("this.id", b, "assign");
    this.h = cc11001100_hook("this.h", void 0 === c ? null : c, "assign");
    var d = cc11001100_hook("d", td(a), "var-init");
    b = cc11001100_hook("b", new pd(0, 0), "assign");
    c = cc11001100_hook("c", d ? td(d) : document, "assign");
    c = cc11001100_hook("c", !cb || 9 <= Number(qb) || "CSS1Compat" == (c ? new wd(td(c)) : va || (va = cc11001100_hook("va", new wd(), "assign"))).h.compatMode ? c.documentElement : c.body, "assign");
    if (a != c) {
      c = cc11001100_hook("c", Rd(a), "assign");
      var e = cc11001100_hook("e", (d ? new wd(td(d)) : va || (va = cc11001100_hook("va", new wd(), "assign"))).h, "var-init");
      d = cc11001100_hook("d", e.scrollingElement ? e.scrollingElement : fb || "CSS1Compat" != e.compatMode ? e.body || e.documentElement : e.documentElement, "assign");
      e = cc11001100_hook("e", e.parentWindow || e.defaultView, "assign");
      d = cc11001100_hook("d", cb && e.pageYOffset != d.scrollTop ? new pd(d.scrollLeft, d.scrollTop) : new pd(e.pageXOffset || d.scrollLeft, e.pageYOffset || d.scrollTop), "assign");
      b.x = cc11001100_hook("b.x", c.left + d.x, "assign");
      b.y = cc11001100_hook("b.y", c.top + d.y, "assign");
    }
    b: {
      c = cc11001100_hook("c", td(a), "assign");
      if (c.defaultView && c.defaultView.getComputedStyle && (c = cc11001100_hook("c", c.defaultView.getComputedStyle(a, null), "assign"))) {
        c = cc11001100_hook("c", c.display || c.getPropertyValue("display") || "", "assign");
        break b;
      }
      c = cc11001100_hook("c", "", "assign");
    }
    c || (c = cc11001100_hook("c", a.currentStyle ? a.currentStyle.display : null, "assign"));
    if ("none" != (c || a.style && a.style.display)) a = cc11001100_hook("a", Sd(a), "assign");else {
      c = cc11001100_hook("c", a.style, "assign");
      d = cc11001100_hook("d", c.display, "assign");
      e = cc11001100_hook("e", c.visibility, "assign");
      var f = cc11001100_hook("f", c.position, "var-init");
      c.visibility = cc11001100_hook("c.visibility", "hidden", "assign");
      c.position = cc11001100_hook("c.position", "absolute", "assign");
      c.display = cc11001100_hook("c.display", "inline", "assign");
      a = cc11001100_hook("a", Sd(a), "assign");
      c.display = cc11001100_hook("c.display", d, "assign");
      c.position = cc11001100_hook("c.position", f, "assign");
      c.visibility = cc11001100_hook("c.visibility", e, "assign");
    }
    a = cc11001100_hook("a", new Kd(b.x, b.y, a.width, a.height), "assign");
    this.top = cc11001100_hook("this.top", a.top, "assign");
    this.left = cc11001100_hook("this.left", a.left, "assign");
    this.width = cc11001100_hook("this.width", a.width, "assign");
    this.height = cc11001100_hook("this.height", a.height, "assign");
  }
  function Rf(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", Ad(a), "assign");
    if (!a) return null;
    var b = cc11001100_hook("b", a.document, "var-init");
    a = cc11001100_hook("a", Pf(b), "assign");
    var c = cc11001100_hook("c", [], "var-init");
    Va(c, b.getElementsByTagName("iframe"));
    for (b = cc11001100_hook("b", 0, "assign"); b < Math.min(c.length, 50); b++) {
      var d = cc11001100_hook("d", c[b], "var-init"),
        e = cc11001100_hook("e", d.src ? za(d.src) : "", "var-init"),
        f = cc11001100_hook("f", d.id || d.name || "", "var-init");
      if (!Jf.test(f)) try {
        var g = cc11001100_hook("g", d.contentDocument || d.contentWindow.document, "var-init");
        if (e && "about:blank" !== d.src) Va(a, Pf(g)), Va(c, g.getElementsByTagName("iframe"));else {
          var h = cc11001100_hook("h", null, "var-init"),
            k = cc11001100_hook("k", void 0 !== d.previousElementSibling ? d.previousElementSibling : rd(d.previousSibling, !1), "var-init");
          if (k && "SCRIPT" === k.nodeName && k.src) {
            var l = cc11001100_hook("l", Nf(k.src), "var-init");
            h = cc11001100_hook("h", If.test(l) ? null : l, "assign");
          }
          ((h = cc11001100_hook("h", h || f, "assign")) || !ud(d)) && Of(d) && a.push(new Qf(d, h));
        }
      } catch (p) {
        h = cc11001100_hook("h", Nf(e), "assign"), e = cc11001100_hook("e", (e = cc11001100_hook("e", yd(e.match(xd)[5] || null), "assign")) && "/" === e.charAt(0) ? e.split("/", 2)[1] : "", "assign"), Of(d) && !If.test(h) && a.push(new Qf(d, h || f, e));
      }
    }
    Wa(a, function (p, r) {
      return p.top !== r.top ? p.top - r.top : p.left - r.left;
    });
    var m = cc11001100_hook("m", null, "var-init");
    return Ra(a, function (p) {
      if (null != m && p.top + p.height <= m.top + m.height && p.left + p.width <= m.left + m.width) return !1;
      m = cc11001100_hook("m", p, "assign");
      return !0;
    });
  }
  ;
  var Sf = cc11001100_hook("Sf", !1, "var-init");
  function Tf(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    function d(m) {
      cc11001100_hook("m", m, "function-parameter");
      Sf && (b.push(m - f), f = cc11001100_hook("f", m, "assign"), l && (c.push(g || 0), h || (g = cc11001100_hook("g", 0, "assign"), h = cc11001100_hook("h", l(k), "assign"))), e(d));
    }
    if (!Sf) {
      Sf = cc11001100_hook("Sf", !0, "assign");
      var e = cc11001100_hook("e", a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame, "var-init");
      if (Ed(e)) {
        var f,
          g,
          h,
          k,
          l = cc11001100_hook("l", a.requestIdleCallback, "var-init");
        l && (k = cc11001100_hook("k", function (m) {
          g = cc11001100_hook("g", m.timeRemaining(), "assign");
          h = cc11001100_hook("h", 0, "assign");
        }, "assign"));
        e(function (m) {
          f = cc11001100_hook("f", m, "assign");
          l && (h = cc11001100_hook("h", l(k), "assign"));
          e(d);
        });
      }
    }
  }
  ;
  function Uf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 0, "var-init"),
      c = cc11001100_hook("c", 0, "var-init"),
      d,
      e,
      f;
    a = cc11001100_hook("a", null != (f = cc11001100_hook("f", null == (d = cc11001100_hook("d", a.performance, "assign")) ? void 0 : null == (e = cc11001100_hook("e", d.getEntriesByType, "assign")) ? void 0 : e.call(d, "paint"), "assign")) ? f : [], "assign");
    d = cc11001100_hook("d", q(a), "assign");
    for (e = cc11001100_hook("e", d.next(), "assign"); !e.done; e = cc11001100_hook("e", d.next(), "assign")) switch (e = cc11001100_hook("e", e.value, "assign"), f = cc11001100_hook("f", e.startTime, "assign"), e.name) {
      case "first-paint":
        b = cc11001100_hook("b", f, "assign");
        break;
      case "first-contentful-paint":
        c = cc11001100_hook("c", f, "assign");
    }
    return {
      xa: cc11001100_hook("xa", b, "object-key-init"),
      wa: cc11001100_hook("wa", c, "object-key-init")
    };
  }
  ;
  function Vf(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a, -1, Wf);
  }
  u(Vf, M);
  var Wf = cc11001100_hook("Wf", [1], "var-init"),
    Xf = cc11001100_hook("Xf", [Vf, 1, Wc, 2, N, 3, Q], "var-init");
  Vf.prototype.v = cc11001100_hook("Vf.prototype.v", R(Xf), "assign");
  function Yf(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a);
  }
  u(Yf, M);
  Yf.prototype.v = cc11001100_hook("Yf.prototype.v", R([Yf, 1, Q, 2, Q, 3, Q, 4, N, 5, N, 6, N, 7, N, 8, N, 9, N, 10, N, 11, N, 12, N, 13, N, 14, N, 15, N, 16, N, 17, N, 18, N, 19, N, 20, N, 21, Yc, Xf, 22, P, 23, Q, 24, N, 25, P]), "assign");
  function Zf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new RegExp("/pagead/js/(r\\d+|dev)/r\\d+/(.*/)?" + a + "(_fy20\\d\\d)?\\.js");
  }
  var Y = cc11001100_hook("Y", {}, "var-init"),
    $f = cc11001100_hook("$f", {}, "var-init"),
    Z = cc11001100_hook("Z", {}, "var-init"),
    ag = cc11001100_hook("ag", {}, "var-init"),
    bg = cc11001100_hook("bg", {}, "var-init"),
    cg = cc11001100_hook("cg", {}, "var-init"),
    dg = cc11001100_hook("dg", {}, "var-init"),
    eg = cc11001100_hook("eg", {}, "var-init"),
    fg = cc11001100_hook("fg", {}, "var-init"),
    gg = cc11001100_hook("gg", {}, "var-init"),
    hg = cc11001100_hook("hg", {}, "var-init"),
    ig = cc11001100_hook("ig", [{
      C: cc11001100_hook("C", RegExp("^https?://((tpc|pagead2)\\.googlesyndication\\.com|static\\.googleadsserving\\.cn)/pagead/"), "object-key-init"),
      resources: cc11001100_hook("resources", (Y[1] = cc11001100_hook("Y[1]", /adsbygoogle\.js/, "assign"), Y[2] = cc11001100_hook("Y[2]", /show_ads\.js/, "assign"), Y[3] = cc11001100_hook("Y[3]", /show_ads_impl(_with_ama)?(_fy20\d\d)?\.js/, "assign"), Y[21] = cc11001100_hook("Y[21]", /js\/r\d+\/r\d+\/osd\.js/, "assign"), Y[22] = cc11001100_hook("Y[22]", /\/osd\.js/, "assign"), Y[7] = cc11001100_hook("Y[7]", /activeview\/osd_listener\.js/, "assign"), Y[8] = cc11001100_hook("Y[8]", /lidar\.js/, "assign"), Y[4] = cc11001100_hook("Y[4]", /imgad\?id=/, "assign"), Y[24] = cc11001100_hook("Y[24]", /js\/(r\d+|dev)\/r\d+\/rum\.js/, "assign"), Y[25] = cc11001100_hook("Y[25]", /js\/rum\.js/, "assign"), Y[33] = cc11001100_hook("Y[33]", /\/pagead\/adview\?ai=/, "assign"), Y[61] = cc11001100_hook("Y[61]", /\/pagead\/managed\/js\/config_2_5__\d+\.json\?domain=/, "assign"), Y[62] = cc11001100_hook("Y[62]", /\/pagead\/managed\/js\/config_12_5__\d+\.json\?domain=/, "assign"), Y[60] = cc11001100_hook("Y[60]", /\/pagead\/ppub_config/, "assign"), Y[67] = cc11001100_hook("Y[67]", /pagead\/managed\/js\/gpt\/m\d+\/pubads_impl(_fy\d+)?\.js/, "assign"), Y[69] = cc11001100_hook("Y[69]", /pagead\/managed\/js\/gpt\.js\?.*gmeid=\d+.*/, "assign"), Y[10] = cc11001100_hook("Y[10]", Zf("m_js_controller"), "assign"), Y[9] = cc11001100_hook("Y[9]", Zf("abg_lite"), "assign"), Y[65] = cc11001100_hook("Y[65]", Zf("spam_signals_bundle"), "assign"), Y[66] = cc11001100_hook("Y[66]", Zf("bgl"), "assign"), Y[30] = cc11001100_hook("Y[30]", Zf("window_focus"), "assign"), Y[75] = cc11001100_hook("Y[75]", Zf("interstitial_ad_frame"), "assign"), Y[76] = cc11001100_hook("Y[76]", Zf("fullscreen_api_adapter"), "assign"), Y), "object-key-init"),
      B: cc11001100_hook("B", 28, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com\//, "object-key-init"),
      resources: cc11001100_hook("resources", ($f[4] = cc11001100_hook("$f[4]", /pageadimg(\/imgad)?\?id=/, "assign"), $f[23] = cc11001100_hook("$f[23]", /(daca_images\/)?simgad\/\d+/, "assign"), $f[29] = cc11001100_hook("$f[29]", /icore_images\/\d+/, "assign"), $f[11] = cc11001100_hook("$f[11]", /pub-config\/r\d+\/ca-pub-\d+\.js/, "assign"), $f[16] = cc11001100_hook("$f[16]", /\/safeframe\/\d+-\d+-\d+\/html\/container\.html/, "assign"), $f[17] = cc11001100_hook("$f[17]", /\/safeframe\/\d+-\d+-\d+\/js\/ext\.js/, "assign"), $f[31] = cc11001100_hook("$f[31]", /\/sadbundle\//, "assign"), $f[32] = cc11001100_hook("$f[32]", /(\/pcs)?\/activeview\?(xai|avi)=/, "assign"), $f), "object-key-init"),
      B: cc11001100_hook("B", 39, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https?:\/\/\w+\.g\.doubleclick\.net/, "object-key-init"),
      resources: cc11001100_hook("resources", (Z[59] = cc11001100_hook("Z[59]", /\/tag\/js\/gpt\.js/, "assign"), Z[68] = cc11001100_hook("Z[68]", /\/pagead\/managed\/js\/gpt\.js\?.*gmeid=\d+.*/, "assign"), Z[14] = cc11001100_hook("Z[14]", /\/gpt\/pubads_impl_\d+\.js/, "assign"), Z[67] = cc11001100_hook("Z[67]", /pagead\/managed\/js\/gpt\/m\d+\/pubads_impl(_fy\d+)?\.js/, "assign"), Z[43] = cc11001100_hook("Z[43]", /\/gpt\/pubads_impl_core_\d+\.js/, "assign"), Z[15] = cc11001100_hook("Z[15]", /\/gampad\/ads\?/, "assign"), Z[34] = cc11001100_hook("Z[34]", /\/pcs\/view\?xai=/, "assign"), Z[36] = cc11001100_hook("Z[36]", /^https?:\/\/cm\.g\./, "assign"), Z[5] = cc11001100_hook("Z[5]", /pagead\/ads\?/, "assign"), Z[12] = cc11001100_hook("Z[12]", /pagead\/html\/.*\/zrt_lookup\.html/, "assign"), Z[33] = cc11001100_hook("Z[33]", /\/pagead\/adview\?ai=/, "assign"), Z[61] = cc11001100_hook("Z[61]", /\/pagead\/managed\/js\/config_2_5__\d+\.json\?domain=/, "assign"), Z[62] = cc11001100_hook("Z[62]", /\/pagead\/managed\/js\/config_12_5__\d+\.json\?domain=/, "assign"), Z[60] = cc11001100_hook("Z[60]", /\/pagead\/ppub_config/, "assign"), Z[70] = cc11001100_hook("Z[70]", /\/td\/sts/, "assign"), Z[71] = cc11001100_hook("Z[71]", /\/td\/sjs/, "assign"), Z[72] = cc11001100_hook("Z[72]", /\/td\/bts/, "assign"), Z[73] = cc11001100_hook("Z[73]", /\/td\/bjs/, "assign"), Z[74] = cc11001100_hook("Z[74]", /\/td\/adfetch\/gda\?/, "assign"), Z), "object-key-init"),
      B: cc11001100_hook("B", 40, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https?:\/\/www\.googletagservices\.com/, "object-key-init"),
      resources: cc11001100_hook("resources", (ag[13] = cc11001100_hook("ag[13]", /\/tag\/js\/gpt\.js/, "assign"), ag[37] = cc11001100_hook("ag[37]", /\/dcmads\.js/, "assign"), ag[38] = cc11001100_hook("ag[38]", /\/dcm\/impl_v\d+\.js/, "assign"), ag[77] = cc11001100_hook("ag[77]", /\/activeview\/js\/current\/rx_lidar\.js/, "assign"), ag), "object-key-init"),
      B: cc11001100_hook("B", 42, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https?:\/\/fonts\.googleapis\.com\/css/, "object-key-init"),
      resources: cc11001100_hook("resources", (bg[18] = cc11001100_hook("bg[18]", /[?&]family=/, "assign"), bg), "object-key-init"),
      B: cc11001100_hook("B", 27, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https?:\/\/fonts\.gstatic\.com/, "object-key-init"),
      resources: cc11001100_hook("resources", (cg[19] = cc11001100_hook("cg[19]", /\/s\//, "assign"), cg[20] = cc11001100_hook("cg[20]", /\/l\//, "assign"), cg), "object-key-init"),
      B: cc11001100_hook("B", 27, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https:\/\/[\w.]+.2mdn.net/, "object-key-init"),
      resources: cc11001100_hook("resources", (dg[31] = cc11001100_hook("dg[31]", /\/sadbundle\//, "assign"), dg), "object-key-init"),
      B: cc11001100_hook("B", 41, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}/, "object-key-init"),
      resources: cc11001100_hook("resources", (eg[46] = cc11001100_hook("eg[46]", /\/adsid\/integrator\.json/, "assign"), eg[47] = cc11001100_hook("eg[47]", /\/adsid\/integrator\.js/, "assign"), eg[48] = cc11001100_hook("eg[48]", /\/adsid\/integrator\.sync\.js/, "assign"), eg), "object-key-init"),
      B: cc11001100_hook("B", 45, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https?:\/\/cdn\.ampproject\.org/, "object-key-init"),
      resources: cc11001100_hook("resources", (fg[49] = cc11001100_hook("fg[49]", /\/rtv\/\d{15,20}\/amp4ads-host-v0\.js\b/, "assign"), fg[50] = cc11001100_hook("fg[50]", /\.org\/amp4ads-host-v0\.js\b/, "assign"), fg), "object-key-init"),
      B: cc11001100_hook("B", 51, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https?:\/\/imasdk.googleapis.com/, "object-key-init"),
      resources: cc11001100_hook("resources", (gg[54] = cc11001100_hook("gg[54]", /js\/sdkloader\/ima3.js/, "assign"), gg[55] = cc11001100_hook("gg[55]", /js\/core\/bridge3.*html/, "assign"), gg[56] = cc11001100_hook("gg[56]", /js\/sdkloader\/loader.js/, "assign"), gg[57] = cc11001100_hook("gg[57]", /js\/sdkloader\/vpaid_adapter.js/, "assign"), gg), "object-key-init"),
      B: cc11001100_hook("B", 58, "object-key-init")
    }, {
      C: cc11001100_hook("C", /^https?:\/\/fundingchoicesmessages\.google\.com/, "object-key-init"),
      resources: cc11001100_hook("resources", (hg[64] = cc11001100_hook("hg[64]", /\/i\/.*\?ers=\d.*/, "assign"), hg), "object-key-init"),
      B: cc11001100_hook("B", 63, "object-key-init")
    }, {
      C: cc11001100_hook("C", /./, "object-key-init"),
      resources: {},
      B: cc11001100_hook("B", 27, "object-key-init")
    }], "var-init"),
    jg = cc11001100_hook("jg", {}, "var-init"),
    kg = cc11001100_hook("kg", [{
      C: cc11001100_hook("C", /^https?:\/\//, "object-key-init"),
      resources: cc11001100_hook("resources", (jg[26] = cc11001100_hook("jg[26]", function (a) {
        return Pd && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(a);
      }, "assign"), jg), "object-key-init"),
      B: cc11001100_hook("B", 27, "object-key-init")
    }], "var-init");
  function lg(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (a) {
      case "beacon":
        return 1;
      case "css":
        return 2;
      case "fetch":
        return 4;
      case "iframe":
        return 5;
      case "img":
        return 6;
      case "link":
        return 7;
      case "navigation":
        return 8;
      case "object":
        return 9;
      case "script":
        return 10;
      case "subdocument":
        return 11;
      case "svg":
        return 12;
      case "xmlhttprequest":
        return 13;
      default:
        return 0;
    }
  }
  var mg = cc11001100_hook("mg", {
      woff: cc11001100_hook("woff", 1, "object-key-init"),
      woff2: cc11001100_hook("woff2", 2, "object-key-init"),
      eot: cc11001100_hook("eot", 3, "object-key-init"),
      ttf: cc11001100_hook("ttf", 4, "object-key-init")
    }, "var-init"),
    ng = cc11001100_hook("ng", /^https?:\/\/[^/?#]*\b(google(adservices|tag(manager|services)|apis|usercontent|syndication)?|doubleclick|gstatic|2mdn|cdn.ampproject)\./, "var-init"),
    og = cc11001100_hook("og", {}, "var-init"),
    pg = cc11001100_hook("pg", (og[1] = cc11001100_hook("og[1]", !0, "assign"), og[4] = cc11001100_hook("og[4]", !0, "assign"), og[13] = cc11001100_hook("og[13]", !0, "assign"), og), "var-init");
  function qg(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    d = cc11001100_hook("d", void 0 === d ? !1 : d, "assign");
    var e = cc11001100_hook("e", ng.test(a) ? 1 : 0, "var-init"),
      f = cc11001100_hook("f", 1 != e, "var-init"),
      g = cc11001100_hook("g", Ta(f ? kg : ig, function (h) {
        return h.C.test(a);
      }), "var-init");
    if (!g) return null;
    g = cc11001100_hook("g", Cd(g.resources, function (h) {
      return "function" === typeof h ? h(a) : h.test(a);
    }) || g.B, "assign");
    return !g || f && 2 != b && pg[c] && (!d || 13 != c) ? null : {
      ua: cc11001100_hook("ua", e, "object-key-init"),
      id: cc11001100_hook("id", parseInt(g, 10), "object-key-init")
    };
  }
  function rg(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g = cc11001100_hook("g", lg(a.initiatorType), "var-init"),
      h = cc11001100_hook("h", qg((void 0 === f ? "" : f) || a.name, d, g, e), "var-init");
    if (h) {
      d = cc11001100_hook("d", b.push, "assign");
      f = cc11001100_hook("f", h.id, "assign");
      h = cc11001100_hook("h", h.ua, "assign");
      var k = cc11001100_hook("k", new Yf(), "var-init");
      k = cc11001100_hook("k", H(k, 1, f, 0), "assign");
      k = cc11001100_hook("k", H(k, 3, h, 0), "assign");
      g = cc11001100_hook("g", H(k, 2, g, 0), "assign");
      g = cc11001100_hook("g", J(g, 4, Math.round(a.startTime)), "assign");
      g = cc11001100_hook("g", J(g, 7, Math.round(a.duration)), "assign");
      k = cc11001100_hook("k", a.name, "assign");
      try {
        if (e) {
          e = cc11001100_hook("e", 125, "assign");
          var l = cc11001100_hook("l", /[\?#;]/.exec(k), "var-init");
          l && -1 != l.index && l.index < e && (e = cc11001100_hook("e", l.index, "assign"));
          J(g, 24, Dd(k.substr(0, e)));
        }
      } catch (m) {}
      if (1 == h || 26 == f) {
        l = cc11001100_hook("l", J(g, 5, Math.round(a.fetchStart)), "assign");
        J(l, 6, Math.round(a.responseEnd));
        b: {
          e = cc11001100_hook("e", a.name, "assign");
          f = cc11001100_hook("f", sc(F(g, 1), 0), "assign");
          l = cc11001100_hook("l", new Vf(), "assign");
          switch (f) {
            case 18:
              if (e = cc11001100_hook("e", e.match(/[?&]family=([^&]+)/), "assign")) if (e = cc11001100_hook("e", v.decodeURIComponent(e[1]).split("|"), "assign"), null == e) E(l), G(l, 1, cc);else {
                f = cc11001100_hook("f", A(e), "assign");
                if (!(f & 4)) {
                  if (f & 2 || Object.isFrozen(e)) e = cc11001100_hook("e", Array.prototype.slice.call(e), "assign");
                  for (h = cc11001100_hook("h", 0, "assign"); h < e.length; h++) e[h] = cc11001100_hook("e[h]", e[h], "assign");
                  D(e, f | 5);
                }
                E(l);
                G(l, 1, e);
              }
              break;
            case 19:
              if (e = cc11001100_hook("e", e.match(/\/s\/(\w+)\/v(\d+)\/[^.\/]+\.(\w+)$/), "assign")) f = cc11001100_hook("f", v.parseInt(e[2], 10), "assign"), f = cc11001100_hook("f", J(l, 2, f), "assign"), f = cc11001100_hook("f", H(f, 3, mg[e[3]] || 0, 0), "assign"), e = cc11001100_hook("e", e[1], "assign"), E(f), jc(f, 1, 2, !1, !1).push(e);
              break;
            case 20:
              if (f = cc11001100_hook("f", e.match(/[?&]skey=([^&]+)/), "assign")) f = cc11001100_hook("f", f[1], "assign"), E(l), jc(l, 1, 2, !1, !1).push(f);
              if (e = cc11001100_hook("e", e.match(/[?&]v=v(\d+)/), "assign")) e = cc11001100_hook("e", v.parseInt(e[1], 10), "assign"), J(l, 2, e);
              break;
            default:
              break b;
          }
          E(g);
          null == l && (l = cc11001100_hook("l", void 0, "assign"));
          G(g, 21, l);
        }
        a.responseStart && (H(g, 22, !0, !1), a.domainLookupStart != a.domainLookupEnd && (l = cc11001100_hook("l", J(g, 8, Math.round(a.domainLookupStart)), "assign"), J(l, 9, Math.round(a.domainLookupEnd))), a.connectStart != a.connectEnd && (l = cc11001100_hook("l", J(g, 10, Math.round(a.connectStart)), "assign"), J(l, 11, Math.round(a.connectEnd)), a.secureConnectionStart && J(g, 12, Math.round(a.secureConnectionStart))), l = cc11001100_hook("l", J(g, 13, Math.round(a.requestStart)), "assign"), J(l, 14, Math.round(a.responseStart)), void 0 !== a.transferSize && (l = cc11001100_hook("l", J(g, 15, a.transferSize), "assign"), l = cc11001100_hook("l", J(l, 17, a.decodedBodySize || 0), "assign"), J(l, 16, a.encodedBodySize || 0), 0 < a.transferSize ? H(g, 23, a.transferSize > (a.encodedBodySize || 0) ? 3 : 2, 0) : H(g, 23, 1, 0)), a.redirectStart && (l = cc11001100_hook("l", J(g, 18, Math.round(a.redirectStart)), "assign"), J(l, 19, Math.round(a.redirectEnd))), c && window.performance.timing && J(g, 20, c));
      }
      d.call(b, g);
    }
  }
  function sg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.performance && a.performance.timing && a != v && null != v.performance && null != v.performance.timing ? a.performance.timing.navigationStart - v.performance.timing.navigationStart : 0;
  }
  function tg(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (d && d.length) {
      var f = cc11001100_hook("f", [], "var-init"),
        g = cc11001100_hook("g", !1, "var-init");
      d = cc11001100_hook("d", q(d), "assign");
      for (var h = cc11001100_hook("h", d.next(), "var-init"); !h.done; h = cc11001100_hook("h", d.next(), "assign")) h = cc11001100_hook("h", h.value, "assign"), "resource" === h.entryType ? rg(h, f, sg(b), c, e) : "navigation" !== h.entryType || g || (rg(h, f, sg(b), c, e, b.location ? b.location.href : ""), g = cc11001100_hook("g", !0, "assign"));
      b = cc11001100_hook("b", Sa(f, function (k) {
        return vb(k.v(), 4);
      }).join("~"), "assign");
      ef(a, 7, b, !0);
    }
  }
  function ug(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Sa(a.performance && a.performance.getEntriesByType ? a.performance.getEntriesByType("resource") : [], function (b) {
      var c = cc11001100_hook("c", (b && b.name || "").replace(/\?.*$/, ""), "var-init"),
        d = cc11001100_hook("d", new of(), "var-init");
      c = cc11001100_hook("c", H(d, 1, c, ""), "assign");
      return J(c, 2, b.startTime);
    });
  }
  ;
  function vg(a) {
    cc11001100_hook("a", a, "function-parameter");
    M.call(this, a);
  }
  u(vg, M);
  vg.prototype.getTime = cc11001100_hook("vg.prototype.getTime", function () {
    return sc(F(this, 1), 0);
  }, "assign");
  vg.prototype.v = cc11001100_hook("vg.prototype.v", R([vg, 1, N, 2, Q]), "assign");
  var wg = cc11001100_hook("wg", window == window.top ? 32 : 16, "var-init"),
    xg = cc11001100_hook("xg", {
      unloadEventStart: cc11001100_hook("unloadEventStart", 2, "object-key-init"),
      unloadEventEnd: cc11001100_hook("unloadEventEnd", 3, "object-key-init"),
      redirectStart: cc11001100_hook("redirectStart", 4, "object-key-init"),
      redirectEnd: cc11001100_hook("redirectEnd", 5, "object-key-init"),
      fetchStart: cc11001100_hook("fetchStart", 6, "object-key-init"),
      domainLookupStart: cc11001100_hook("domainLookupStart", 7, "object-key-init"),
      domainLookupEnd: cc11001100_hook("domainLookupEnd", 8, "object-key-init"),
      connectStart: cc11001100_hook("connectStart", 9, "object-key-init"),
      connectEnd: cc11001100_hook("connectEnd", 10, "object-key-init"),
      secureConnectionStart: cc11001100_hook("secureConnectionStart", 11, "object-key-init"),
      requestStart: cc11001100_hook("requestStart", 12, "object-key-init"),
      responseStart: cc11001100_hook("responseStart", 13, "object-key-init"),
      responseEnd: cc11001100_hook("responseEnd", 14, "object-key-init"),
      domLoading: cc11001100_hook("domLoading", 15, "object-key-init"),
      domInteractive: cc11001100_hook("domInteractive", 16, "object-key-init"),
      domContentLoadedEventStart: cc11001100_hook("domContentLoadedEventStart", 17, "object-key-init"),
      domContentLoadedEventEnd: cc11001100_hook("domContentLoadedEventEnd", 18, "object-key-init"),
      domComplete: cc11001100_hook("domComplete", 19, "object-key-init"),
      loadEventStart: cc11001100_hook("loadEventStart", 20, "object-key-init"),
      loadEventEnd: cc11001100_hook("loadEventEnd", 21, "object-key-init")
    }, "var-init");
  function yg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", oc(a, Oe, 1), "assign")) ? sc(F(a, 2), 0) : 0;
  }
  function zg(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", oc(a, Le, 2), "var-init");
    if (!b) {
      var c = cc11001100_hook("c", b = cc11001100_hook("b", new Le(), "assign"), "var-init");
      E(a);
      null == c && (c = cc11001100_hook("c", void 0, "assign"));
      G(a, 2, c);
    }
    a = cc11001100_hook("a", yg(a), "assign");
    2 == a && (c = cc11001100_hook("c", H(b, 7, !0, !1), "assign"), c = cc11001100_hook("c", H(c, 9, !0, !1), "assign"), H(c, 10, !0, !1));
    2 !== a && 3 !== a || H(b, 17, !0, !1);
    return b;
  }
  function Ag(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    2 !== sc(F(b, 2), 0) || Re(v).chp || V(a, "chm", 1);
    b.getCorrelator() && V(a, "c", b.getCorrelator());
    tc(b, 5) && V(a, "e", tc(b, 5));
    V(a, "ctx", sc(F(b, 2), 0));
    V(a, "gqid", tc(b, 3));
    V(a, "qqid", tc(b, 4));
  }
  function Bg(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new Qe(v.google_rum_config || null), "var-init"),
      c = cc11001100_hook("c", zg(b), "var-init"),
      d = cc11001100_hook("d", jc(c, 15, 0, !1, Yb(c.l)), "var-init"),
      e = cc11001100_hook("e", oc(b, Oe, 1) || new Oe(), "var-init");
    d.length && H(e, 5, d.join(), "");
    Ag(a, e);
    d = cc11001100_hook("d", new sf(tc(e, 4)), "assign");
    var f = cc11001100_hook("f", v.google_js_reporting_queue, "var-init");
    if (f) {
      var g = function (h) {
        a.G(h);
        ne(h);
      };
      f.push = cc11001100_hook("f.push", g, "assign");
      Qa(f, g);
      f.length = cc11001100_hook("f.length", 0, "assign");
    }
    $e(a, function () {
      var h = cc11001100_hook("h", ie(), "var-init");
      h && oe(a, "24", 1, h, 0);
    });
    Cg(v, a, b, e, c, d);
    2 === yg(b) && Dg() && Cg(v.parent, a, b, e, c, d);
  }
  function Dg() {
    var a = cc11001100_hook("a", v.parent, "var-init");
    return zd(a) && a !== a.top && null != a.document.querySelector("iframe#ad_iframe");
  }
  function Cg(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    (K(e, 12) || K(e, 9) && .1 > Math.random()) && nf(b, a);
    var g = cc11001100_hook("g", yg(c), "var-init"),
      h = cc11001100_hook("h", null, "var-init");
    if (K(e, 7) && a.PerformanceObserver) {
      h = cc11001100_hook("h", new a.PerformanceObserver(function (k) {
        tg(b, a, g, null == k ? void 0 : k.getEntries(), K(e, 13));
      }), "assign");
      try {
        try {
          h.observe({
            type: cc11001100_hook("type", "resource", "object-key-init"),
            buffered: cc11001100_hook("buffered", !0, "object-key-init")
          }), h.observe({
            type: cc11001100_hook("type", "navigation", "object-key-init"),
            buffered: cc11001100_hook("buffered", !0, "object-key-init")
          });
        } catch (k) {
          h.observe({
            entryTypes: cc11001100_hook("entryTypes", ["resource", "navigation"], "object-key-init")
          });
        }
        $e(b, function () {
          var k, l;
          tg(b, a, g, null == (l = cc11001100_hook("l", (k = cc11001100_hook("k", h, "assign")).takeRecords, "assign")) ? void 0 : l.call(k), K(e, 13));
        });
        1 == g && Eg(a, b, e, g, h);
      } catch (k) {}
    }
    $e(b, function () {
      if (K(e, 18) && K(e, 19)) {
        var k;
        tf(f, ug(a), null != (k = cc11001100_hook("k", ie(), "assign")) ? k : 0);
      } else K(e, 18) && tf(f, ug(a));
    });
    a == a.top && K(e, 14) && new vf(b).install();
    Fg(b, a, e, g, h, f);
    K(e, 17) && Gg(b, a, d);
  }
  function Fg(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g = cc11001100_hook("g", ve(113, function () {
      K(c, 10) && Hg(a, b);
      Ig(a, b);
      Jg(a, b, c, d, e, f);
      if (1 == d && K(c, 16)) {
        var h = cc11001100_hook("h", Bf(b), "var-init");
        h = cc11001100_hook("h", h.scrollHeight == Bf(b).clientHeight ? h.offsetHeight : h.scrollHeight, "assign");
        var k = cc11001100_hook("k", Bf(b).scrollWidth, "var-init"),
          l = cc11001100_hook("l", Bf(b).scrollHeight, "var-init"),
          m = cc11001100_hook("m", "unknown", "var-init");
        b && b.document && b.document.readyState && (m = cc11001100_hook("m", b.document.readyState, "assign"));
        var p = cc11001100_hook("p", void 0 === b.pageYOffset ? (b.document.documentElement || b.document.body.parentNode || b.document.body).scrollTop : b.pageYOffset, "var-init"),
          r = cc11001100_hook("r", [], "var-init"),
          O = cc11001100_hook("O", [], "var-init"),
          L = cc11001100_hook("L", [], "var-init"),
          Ya = cc11001100_hook("Ya", [], "var-init"),
          S = cc11001100_hook("S", [], "var-init"),
          Hb = cc11001100_hook("Hb", [], "var-init"),
          ua = cc11001100_hook("ua", [], "var-init"),
          Ia = cc11001100_hook("Ia", 0, "var-init"),
          Za = cc11001100_hook("Za", 0, "var-init"),
          na = cc11001100_hook("na", Infinity, "var-init"),
          oa = cc11001100_hook("oa", Infinity, "var-init"),
          $a = cc11001100_hook("$a", null, "var-init"),
          t = cc11001100_hook("t", {
            Aa: cc11001100_hook("Aa", !1, "object-key-init")
          }, "var-init"),
          I = cc11001100_hook("I", W(b, ".google-auto-placed"), "var-init"),
          x = cc11001100_hook("x", W(b, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"), "var-init"),
          B = cc11001100_hook("B", W(b, "ins.adsbygoogle[data-ad-format=autorelaxed]"), "var-init");
        var Ea = cc11001100_hook("Ea", (zf(b) || W(b, "div[id^=div-gpt-ad]")).concat(W(b, "iframe[id^=google_ads_iframe]")), "var-init");
        var Lg = cc11001100_hook("Lg", W(b, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"), "var-init"),
          Mg = cc11001100_hook("Mg", W(b, "ins.adsbygoogle-ablated-ad-slot"), "var-init"),
          Ng = cc11001100_hook("Ng", W(b, "div.googlepublisherpluginad"), "var-init"),
          Og = cc11001100_hook("Og", W(b, "html > ins.adsbygoogle"), "var-init"),
          C = cc11001100_hook("C", [].concat(W(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), W(b, "body ins.adsbygoogle")), "var-init"),
          U = cc11001100_hook("U", [], "var-init");
        t = cc11001100_hook("t", q([[t.Na, I], [t.Aa, x], [t.Qa, B], [t.Oa, Ea], [t.Ra, Lg], [t.Ma, Mg], [t.Pa, Ng], [t.Sa, Og]]), "assign");
        for (I = cc11001100_hook("I", t.next(), "assign"); !I.done; I = cc11001100_hook("I", t.next(), "assign")) x = cc11001100_hook("x", q(I.value), "assign"), I = cc11001100_hook("I", x.next().value, "assign"), x = cc11001100_hook("x", x.next().value, "assign"), !1 === I ? U = cc11001100_hook("U", U.concat(x), "assign") : C = cc11001100_hook("C", C.concat(x), "assign");
        C = cc11001100_hook("C", Af(C), "assign");
        t = cc11001100_hook("t", Af(U), "assign");
        U = cc11001100_hook("U", C.slice(0), "assign");
        C = cc11001100_hook("C", q(t), "assign");
        for (t = cc11001100_hook("t", C.next(), "assign"); !t.done; t = cc11001100_hook("t", C.next(), "assign")) for (t = cc11001100_hook("t", t.value, "assign"), I = cc11001100_hook("I", 0, "assign"); I < U.length; I++) (t.contains(U[I]) || U[I].contains(t)) && U.splice(I, 1);
        U = cc11001100_hook("U", q(U), "assign");
        for (C = cc11001100_hook("C", U.next(), "assign"); !C.done; C = cc11001100_hook("C", U.next(), "assign")) {
          C = cc11001100_hook("C", C.value, "assign");
          t = cc11001100_hook("t", C.getBoundingClientRect(), "assign");
          I = cc11001100_hook("I", h - (t.bottom + p), "assign");
          if (C.className && -1 != C.className.indexOf("adsbygoogle-ablated-ad-slot")) {
            x = cc11001100_hook("x", C.getAttribute("google_element_uid"), "assign");
            B = cc11001100_hook("B", b.google_sv_map, "assign");
            if (!x || !B || !B[x]) continue;
            a: {
              x = cc11001100_hook("x", B[x], "assign");
              B = cc11001100_hook("B", Number(x.google_ad_width), "assign");
              Ea = cc11001100_hook("Ea", Number(x.google_ad_height), "assign");
              if (!(0 < B && 0 < Ea)) {
                b: {
                  try {
                    var jb = cc11001100_hook("jb", String(x.google_ad_format), "var-init");
                    if (jb && jb.match) {
                      var kb = cc11001100_hook("kb", jb.match(/(\d+)x(\d+)/i), "var-init");
                      if (kb) {
                        var Fe = cc11001100_hook("Fe", parseInt(kb[1], 10), "var-init"),
                          Ge = cc11001100_hook("Ge", parseInt(kb[2], 10), "var-init");
                        if (0 < Fe && 0 < Ge) {
                          var Ma = cc11001100_hook("Ma", {
                            width: cc11001100_hook("width", Fe, "object-key-init"),
                            height: cc11001100_hook("height", Ge, "object-key-init")
                          }, "var-init");
                          break b;
                        }
                      }
                    }
                  } catch (Ug) {}
                  Ma = cc11001100_hook("Ma", null, "assign");
                }
                if (!Ma) {
                  x = cc11001100_hook("x", null, "assign");
                  break a;
                }
                B = cc11001100_hook("B", 0 < B ? B : Ma.width, "assign");
                Ea = cc11001100_hook("Ea", 0 < Ea ? Ea : Ma.height, "assign");
              }
              x = cc11001100_hook("x", {
                width: cc11001100_hook("width", B, "object-key-init"),
                height: cc11001100_hook("height", Ea, "object-key-init")
              }, "assign");
            }
            x = cc11001100_hook("x", (B = cc11001100_hook("B", x, "assign")) ? B.height : 0, "assign");
            B = cc11001100_hook("B", B ? B.width : 0, "assign");
          } else if (x = cc11001100_hook("x", t.bottom - t.top, "assign"), B = cc11001100_hook("B", t.right - t.left, "assign"), 1 >= x || 1 >= B) continue;
          r.push(x);
          L.push(B);
          Ya.push(x * B);
          C.className && -1 != C.className.indexOf("google-auto-placed") ? (Za += cc11001100_hook("Za", 1, "assign"), C.className && -1 != C.className.indexOf("pedestal_container") && ($a = cc11001100_hook("$a", x, "assign"))) : (na = cc11001100_hook("na", Math.min(na, I), "assign"), Hb.push(t), Ia += cc11001100_hook("Ia", 1, "assign"), O.push(x), S.push(x * B));
          oa = cc11001100_hook("oa", Math.min(oa, I), "assign");
          ua.push(t);
        }
        na = cc11001100_hook("na", Infinity === na ? null : na, "assign");
        oa = cc11001100_hook("oa", Infinity === oa ? null : oa, "assign");
        Ma = cc11001100_hook("Ma", Gf(Hb), "assign");
        ua = cc11001100_hook("ua", Gf(ua), "assign");
        O = cc11001100_hook("O", Ff(h, O), "assign");
        jb = cc11001100_hook("jb", Ff(h, r), "assign");
        S = cc11001100_hook("S", Ff(h * k, S), "assign");
        kb = cc11001100_hook("kb", Ff(h * k, Ya), "assign");
        h = cc11001100_hook("h", new Cf(b, {
          ta: cc11001100_hook("ta", m, "object-key-init"),
          Ha: cc11001100_hook("Ha", h, "object-key-init"),
          Ja: cc11001100_hook("Ja", k, "object-key-init"),
          Ia: cc11001100_hook("Ia", l, "object-key-init"),
          Ba: cc11001100_hook("Ba", Ia, "object-key-init"),
          ma: cc11001100_hook("ma", Za, "object-key-init"),
          oa: cc11001100_hook("oa", Ef(r), "object-key-init"),
          pa: cc11001100_hook("pa", Ef(L), "object-key-init"),
          na: cc11001100_hook("na", Ef(Ya), "object-key-init"),
          Ga: cc11001100_hook("Ga", Ma, "object-key-init"),
          Fa: cc11001100_hook("Fa", ua, "object-key-init"),
          Ea: cc11001100_hook("Ea", na, "object-key-init"),
          Da: cc11001100_hook("Da", oa, "object-key-init"),
          sa: cc11001100_hook("sa", O, "object-key-init"),
          ra: cc11001100_hook("ra", jb, "object-key-init"),
          la: cc11001100_hook("la", S, "object-key-init"),
          ka: cc11001100_hook("ka", kb, "object-key-init"),
          Ka: cc11001100_hook("Ka", $a, "object-key-init")
        }), "assign");
        h = cc11001100_hook("h", Df(h, b.location.hostname), "assign");
        k = cc11001100_hook("k", "ca", "assign");
        te.ca && te.hasOwnProperty(k) || (k = cc11001100_hook("k", new te(), "assign"), te.ca = cc11001100_hook("te.ca", k, "assign"));
        k = cc11001100_hook("k", [], "assign");
        !h.eid && k.length && (h.eid = cc11001100_hook("h.eid", k.toString(), "assign"));
        fe(ee, "ama_stats", h, !0, 1);
      }
    }), "var-init");
    "complete" != b.document.readyState ? ed(b, "load", function () {
      b.setTimeout(g, 0);
    }) : g();
  }
  function Gg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (b.ReportingObserver) {
      var d = cc11001100_hook("d", tc(c, 4), "var-init"),
        e = cc11001100_hook("e", c.getCorrelator(), "var-init"),
        f = cc11001100_hook("f", ["HeavyAdIntervention"], "var-init"),
        g = function (k) {
          var l = cc11001100_hook("l", k.type, "var-init"),
            m = cc11001100_hook("m", k.body, "var-init");
          k = cc11001100_hook("k", m.id, "assign");
          var p = cc11001100_hook("p", m.message, "var-init"),
            r = cc11001100_hook("r", m.anticipatedRemoval, "var-init"),
            O = cc11001100_hook("O", m.sourceFile, "var-init"),
            L = cc11001100_hook("L", m.lineNumber, "var-init");
          m = cc11001100_hook("m", m.columnNumber, "assign");
          !ha(f, "includes").call(f, k) && .1 < Math.random() || (l = cc11001100_hook("l", {
            qqid: cc11001100_hook("qqid", String(d), "object-key-init"),
            c: cc11001100_hook("c", String(e), "object-key-init"),
            t: cc11001100_hook("t", l, "object-key-init"),
            rid: cc11001100_hook("rid", k, "object-key-init"),
            ar: cc11001100_hook("ar", void 0 != r ? String(r.getTime()) : null, "object-key-init"),
            ln: cc11001100_hook("ln", void 0 != L ? String(L) : null, "object-key-init"),
            cn: cc11001100_hook("cn", void 0 != m ? String(m) : null, "object-key-init"),
            src: cc11001100_hook("src", O || null, "object-key-init"),
            msg: cc11001100_hook("msg", p, "object-key-init")
          }, "assign"), Id(l));
        },
        h = cc11001100_hook("h", new b.ReportingObserver(function (k) {
          Qa(k, g);
        }, {
          buffered: cc11001100_hook("buffered", !0, "object-key-init")
        }), "var-init");
      h.observe();
      $e(a, function () {
        var k;
        Qa(null == (k = cc11001100_hook("k", h.takeRecords, "assign")) ? void 0 : k.call(h), g);
        h.disconnect();
      });
    }
  }
  function Ig(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.google_rum_values || Re(b).rv, "var-init");
    b.google_rum_values = cc11001100_hook("b.google_rum_values", void 0, "assign");
    Re(b).rv = cc11001100_hook("Re(b).rv", void 0, "assign");
    if (c && !(0 > c.dt) && (b = cc11001100_hook("b", b.performance && b.performance.timing, "assign"))) {
      var d = cc11001100_hook("d", c.dt - b.navigationStart, "var-init");
      Bd(c, function (e, f) {
        if (-1 != e && "number" === typeof e) {
          switch (f) {
            case "dt":
              e = cc11001100_hook("e", d, "assign");
              break;
            case "bdt":
              e = cc11001100_hook("e", d - e, "assign");
              break;
            default:
              e = cc11001100_hook("e", d + e, "assign");
          }
          oe(a, f, 4, e);
        }
      });
    }
  }
  function Jg(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    K(c, 1) && Kg(a, b);
    K(c, 2) && 0 < sc(F(c, 3), 0) && Pg(a, sc(F(c, 3), 0));
    K(c, 7) && Qg(a, b, c, d, e);
    K(c, 8) && .1 > Math.random() && pe(a, function () {
      return Rg(a, b);
    });
    K(c, 18) && tf(f, ug(b));
  }
  function Qg(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f;
    tg(a, b, d, null == (f = cc11001100_hook("f", e.takeRecords, "assign")) ? void 0 : f.call(e), K(c, 13));
  }
  function Sg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", ie(), "var-init");
    if (d && (b.length || c.length)) {
      var e = cc11001100_hook("e", {}, "var-init");
      d = cc11001100_hook("d", (e[3] = cc11001100_hook("e[3]", d.toString(36), "assign"), e), "assign");
      b.length && (d[1] = cc11001100_hook("d[1]", Sa(b, function (f) {
        f = cc11001100_hook("f", Math.min(Math.max(f, 0), 4095), "assign");
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[f >> 6] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[f & 63];
      }).join(""), "assign"));
      c.length && (d[2] = cc11001100_hook("d[2]", Sa(c, function (f) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[Math.min(Math.max(f, 0), 63) | 0];
      }).join(""), "assign"));
      ef(a, 5, ff(5, d), !0, ".");
    }
  }
  function Tg(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (Te()) {
      var b = cc11001100_hook("b", Ue(), "var-init"),
        c = cc11001100_hook("c", b.ya, "var-init"),
        d = cc11001100_hook("d", b.za, "var-init"),
        e = cc11001100_hook("e", ve(400, function () {
          c.length || d.length ? (Sg(a, c, d), c.length = cc11001100_hook("c.length", 0, "assign"), d.length = cc11001100_hook("d.length", 0, "assign"), v.setTimeout(e, 1E4)) : (c.push = cc11001100_hook("c.push", function () {
            return 0;
          }, "assign"), d.push = cc11001100_hook("d.push", function () {
            return 0;
          }, "assign"));
        }), "var-init");
      v.setTimeout(e, 1E4);
    }
  }
  function Kg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", [], "var-init"),
      d = cc11001100_hook("d", [], "var-init");
    Tf(b, c, d);
    b.setTimeout(ve(400, function () {
      Sf = cc11001100_hook("Sf", !1, "assign");
      Sg(a, c, d);
    }), 1E4);
  }
  function Pg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Hf(b, function (c, d, e) {
      if (null != c && null != d && null != e) {
        var f = cc11001100_hook("f", {}, "var-init");
        f[1] = cc11001100_hook("f[1]", b, "assign");
        f[2] = cc11001100_hook("f[2]", c, "assign");
        f[3] = cc11001100_hook("f[3]", d, "assign");
        f[4] = cc11001100_hook("f[4]", e, "assign");
        gf(a, 8, f);
      }
    });
  }
  function Hg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.performance && b.performance.timing, "var-init");
    if (c) {
      var d = cc11001100_hook("d", c.navigationStart, "var-init");
      0 < d && (oe(a, "1", 1, d), Bd(xg, function (f, g) {
        g = cc11001100_hook("g", c[g], "assign");
        0 < g && oe(a, String(f), 1, g - d);
      }));
      var e = cc11001100_hook("e", Uf(b), "var-init");
      b = cc11001100_hook("b", e.xa, "assign");
      e = cc11001100_hook("e", e.wa, "assign");
      b && oe(a, "22", 1, b);
      e && oe(a, "23", 1, e);
    }
  }
  function Rg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b = cc11001100_hook("b", Rf(b), "assign")) 10 < b.length && (b.length = cc11001100_hook("b.length", 10, "assign")), af(a, Sa(b, function (c) {
      var d = cc11001100_hook("d", Mf(c.id) + (c.h ? "_" + Mf(c.h) : ""), "var-init"),
        e = cc11001100_hook("e", Math.floor(c.top).toString(36), "var-init"),
        f = cc11001100_hook("f", Math.floor(c.left).toString(36), "var-init"),
        g = cc11001100_hook("g", Math.floor(c.width).toString(36), "var-init");
      c = cc11001100_hook("c", Math.floor(c.height).toString(36), "assign");
      return d + "_" + e + "_" + f + "_" + g + "_" + c;
    }).join("~"));
  }
  function Eg(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", Ke(a.document), "var-init");
    f && ed(a, f, function () {
      var g = cc11001100_hook("g", ie(), "var-init");
      if (g) {
        var h = cc11001100_hook("h", a.document, "var-init");
        h = cc11001100_hook("h", h.prerendering ? 3 : {
          visible: cc11001100_hook("visible", 1, "object-key-init"),
          hidden: cc11001100_hook("hidden", 2, "object-key-init"),
          prerender: cc11001100_hook("prerender", 3, "object-key-init"),
          preview: cc11001100_hook("preview", 4, "object-key-init"),
          unloaded: cc11001100_hook("unloaded", 5, "object-key-init")
        }[h.visibilityState || h.webkitVisibilityState || h.mozVisibilityState || ""] || 0, "assign");
        if (1 == h || 2 == h) {
          var k = cc11001100_hook("k", new vg(), "var-init");
          g = cc11001100_hook("g", J(k, 1, Math.round(g)), "assign");
          g = cc11001100_hook("g", H(g, 2, h, 0), "assign");
          g = cc11001100_hook("g", vb(g.v(), 4), "assign");
          if (K(c, 7)) {
            var l;
            tg(b, a, d, null == (l = cc11001100_hook("l", e.takeRecords, "assign")) ? void 0 : l.call(e), K(c, 13));
          }
          oe(b, "1", 11, g);
          2 == h && "function" === typeof b.T && b.T();
        }
      }
    });
  }
  ;
  ue.L(112, function () {
    var a = cc11001100_hook("a", new We(1, "https:", "csi.gstatic.com", "/csi?v=2&s=pagead&action=", "csi_pagead", wg), "var-init");
    a.i = cc11001100_hook("a.i", !0, "assign");
    Bg(a);
    Tg(a);
  });
}).call(this);