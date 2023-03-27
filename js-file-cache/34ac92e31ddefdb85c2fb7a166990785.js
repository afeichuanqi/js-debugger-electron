(function () {
  /*
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  */
  var m,
    aa = function (a) {
      var b = cc11001100_hook("b", 0, "var-init");
      return function () {
        return b < a.length ? {
          done: cc11001100_hook("done", !1, "object-key-init"),
          value: cc11001100_hook("value", a[b++], "object-key-init")
        } : {
          done: cc11001100_hook("done", !0, "object-key-init")
        };
      };
    },
    ba = cc11001100_hook("ba", "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = cc11001100_hook("a[b]", c.value, "assign");
      return a;
    }, "var-init"),
    ca = function (a) {
      a = cc11001100_hook("a", ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], "assign");
      for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) {
        var c = cc11001100_hook("c", a[b], "var-init");
        if (c && c.Math == Math) return c;
      }
      throw Error("a");
    },
    da = cc11001100_hook("da", ca(this), "var-init"),
    q = function (a, b) {
      if (b) a: {
        var c = cc11001100_hook("c", da, "var-init");
        a = cc11001100_hook("a", a.split("."), "assign");
        for (var d = cc11001100_hook("d", 0, "var-init"); d < a.length - 1; d++) {
          var e = cc11001100_hook("e", a[d], "var-init");
          if (!(e in c)) break a;
          c = cc11001100_hook("c", c[e], "assign");
        }
        a = cc11001100_hook("a", a[a.length - 1], "assign");
        d = cc11001100_hook("d", c[a], "assign");
        b = cc11001100_hook("b", b(d), "assign");
        b != d && null != b && ba(c, a, {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          value: cc11001100_hook("value", b, "object-key-init")
        });
      }
    };
  q("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.sf = cc11001100_hook("this.sf", f, "assign");
      ba(this, "description", {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        value: cc11001100_hook("value", g, "object-key-init")
      });
    };
    b.prototype.toString = cc11001100_hook("b.prototype.toString", function () {
      return this.sf;
    }, "assign");
    var c = cc11001100_hook("c", "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", "var-init"),
      d = cc11001100_hook("d", 0, "var-init"),
      e = function (f) {
        if (this instanceof e) throw new TypeError("b");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  q("Symbol.iterator", function (a) {
    if (a) return a;
    a = cc11001100_hook("a", Symbol("Symbol.iterator"), "assign");
    for (var b = cc11001100_hook("b", "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) {
      var d = cc11001100_hook("d", da[b[c]], "var-init");
      "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        value: function () {
          return ea(aa(this));
        }
      });
    }
    return a;
  });
  q("Symbol.asyncIterator", function (a) {
    return a ? a : Symbol("Symbol.asyncIterator");
  });
  var ea = function (a) {
      a = cc11001100_hook("a", {
        next: cc11001100_hook("next", a, "object-key-init")
      }, "assign");
      a[Symbol.iterator] = cc11001100_hook("a[Symbol.iterator]", function () {
        return this;
      }, "assign");
      return a;
    },
    r = function (a) {
      var b = cc11001100_hook("b", "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator], "var-init");
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: cc11001100_hook("next", aa(a), "object-key-init")
      };
      throw Error("c`" + String(a));
    },
    u = function (a) {
      if (!(a instanceof Array)) {
        a = cc11001100_hook("a", r(a), "assign");
        for (var b, c = cc11001100_hook("c", [], "var-init"); !(b = cc11001100_hook("b", a.next(), "assign")).done;) c.push(b.value);
        a = cc11001100_hook("a", c, "assign");
      }
      return a;
    },
    fa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ha = cc11001100_hook("ha", "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = cc11001100_hook("c", 1, "var-init"); c < arguments.length; c++) {
        var d = cc11001100_hook("d", arguments[c], "var-init");
        if (d) for (var e in d) fa(d, e) && (a[e] = cc11001100_hook("a[e]", d[e], "assign"));
      }
      return a;
    }, "var-init");
  q("Object.assign", function (a) {
    return a || ha;
  });
  var ia = cc11001100_hook("ia", "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = cc11001100_hook("b.prototype", a, "assign");
      return new b();
    }, "var-init"),
    ja;
  if ("function" == typeof Object.setPrototypeOf) ja = cc11001100_hook("ja", Object.setPrototypeOf, "assign");else {
    var ka;
    a: {
      var la = cc11001100_hook("la", {
          a: cc11001100_hook("a", !0, "object-key-init")
        }, "var-init"),
        ma = cc11001100_hook("ma", {}, "var-init");
      try {
        ma.__proto__ = cc11001100_hook("ma.__proto__", la, "assign");
        ka = cc11001100_hook("ka", ma.a, "assign");
        break a;
      } catch (a) {}
      ka = cc11001100_hook("ka", !1, "assign");
    }
    ja = cc11001100_hook("ja", ka ? function (a, b) {
      a.__proto__ = cc11001100_hook("a.__proto__", b, "assign");
      if (a.__proto__ !== b) throw new TypeError("d`" + a);
      return a;
    } : null, "assign");
  }
  var oa = cc11001100_hook("oa", ja, "var-init"),
    v = function (a, b) {
      a.prototype = cc11001100_hook("a.prototype", ia(b.prototype), "assign");
      a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign");
      if (oa) oa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = cc11001100_hook("d", Object.getOwnPropertyDescriptor(b, c), "var-init");
        d && Object.defineProperty(a, c, d);
      } else a[c] = cc11001100_hook("a[c]", b[c], "assign");
      a.nh = cc11001100_hook("a.nh", b.prototype, "assign");
    },
    pa = function () {
      this.Kb = cc11001100_hook("this.Kb", !1, "assign");
      this.Ra = cc11001100_hook("this.Ra", null, "assign");
      this.fe = cc11001100_hook("this.fe", void 0, "assign");
      this.ca = cc11001100_hook("this.ca", 1, "assign");
      this.za = cc11001100_hook("this.za", this.Ta = cc11001100_hook("this.Ta", 0, "assign"), "assign");
      this.ud = cc11001100_hook("this.ud", this.Z = cc11001100_hook("this.Z", null, "assign"), "assign");
    },
    qa = function (a) {
      if (a.Kb) throw new TypeError("f");
      a.Kb = cc11001100_hook("a.Kb", !0, "assign");
    };
  pa.prototype.Pb = cc11001100_hook("pa.prototype.Pb", function (a) {
    this.fe = cc11001100_hook("this.fe", a, "assign");
  }, "assign");
  pa.prototype.Wb = cc11001100_hook("pa.prototype.Wb", function (a) {
    this.Z = cc11001100_hook("this.Z", {
      ze: cc11001100_hook("ze", a, "object-key-init"),
      Qe: cc11001100_hook("Qe", !0, "object-key-init")
    }, "assign");
    this.ca = cc11001100_hook("this.ca", this.Ta || this.za, "assign");
  }, "assign");
  pa.prototype.return = cc11001100_hook("pa.prototype.return", function (a) {
    this.Z = cc11001100_hook("this.Z", {
      return: cc11001100_hook("return", a, "object-key-init")
    }, "assign");
    this.ca = cc11001100_hook("this.ca", this.za, "assign");
  }, "assign");
  pa.prototype.Za = cc11001100_hook("pa.prototype.Za", function (a) {
    this.ca = cc11001100_hook("this.ca", a, "assign");
  }, "assign");
  var sa = function (a, b, c) {
      c = cc11001100_hook("c", a.ud.splice(c || 0)[0], "assign");
      (c = cc11001100_hook("c", a.Z = cc11001100_hook("a.Z", a.Z || c, "assign"), "assign")) ? c.Qe ? a.ca = cc11001100_hook("a.ca", a.Ta || a.za, "assign") : void 0 != c.Za && a.za < c.Za ? (a.ca = cc11001100_hook("a.ca", c.Za, "assign"), a.Z = cc11001100_hook("a.Z", null, "assign")) : a.ca = cc11001100_hook("a.ca", a.za, "assign") : a.ca = cc11001100_hook("a.ca", b, "assign");
    },
    ua = function (a) {
      this.m = cc11001100_hook("this.m", new pa(), "assign");
      this.Ug = cc11001100_hook("this.Ug", a, "assign");
    };
  ua.prototype.Pb = cc11001100_hook("ua.prototype.Pb", function (a) {
    qa(this.m);
    if (this.m.Ra) return va(this, this.m.Ra.next, a, this.m.Pb);
    this.m.Pb(a);
    return wa(this);
  }, "assign");
  var xa = function (a, b) {
    qa(a.m);
    var c = cc11001100_hook("c", a.m.Ra, "var-init");
    if (c) return va(a, "return" in c ? c["return"] : function (d) {
      return {
        value: cc11001100_hook("value", d, "object-key-init"),
        done: cc11001100_hook("done", !0, "object-key-init")
      };
    }, b, a.m.return);
    a.m.return(b);
    return wa(a);
  };
  ua.prototype.Wb = cc11001100_hook("ua.prototype.Wb", function (a) {
    qa(this.m);
    if (this.m.Ra) return va(this, this.m.Ra["throw"], a, this.m.Pb);
    this.m.Wb(a);
    return wa(this);
  }, "assign");
  var va = function (a, b, c, d) {
      try {
        var e = cc11001100_hook("e", b.call(a.m.Ra, c), "var-init");
        if (!(e instanceof Object)) throw new TypeError("e`" + e);
        if (!e.done) return a.m.Kb = cc11001100_hook("a.m.Kb", !1, "assign"), e;
        var f = cc11001100_hook("f", e.value, "var-init");
      } catch (g) {
        return a.m.Ra = cc11001100_hook("a.m.Ra", null, "assign"), a.m.Wb(g), wa(a);
      }
      a.m.Ra = cc11001100_hook("a.m.Ra", null, "assign");
      d.call(a.m, f);
      return wa(a);
    },
    wa = function (a) {
      for (; a.m.ca;) try {
        var b = cc11001100_hook("b", a.Ug(a.m), "var-init");
        if (b) return a.m.Kb = cc11001100_hook("a.m.Kb", !1, "assign"), {
          value: cc11001100_hook("value", b.value, "object-key-init"),
          done: cc11001100_hook("done", !1, "object-key-init")
        };
      } catch (c) {
        a.m.fe = cc11001100_hook("a.m.fe", void 0, "assign"), a.m.Wb(c);
      }
      a.m.Kb = cc11001100_hook("a.m.Kb", !1, "assign");
      if (a.m.Z) {
        b = cc11001100_hook("b", a.m.Z, "assign");
        a.m.Z = cc11001100_hook("a.m.Z", null, "assign");
        if (b.Qe) throw b.ze;
        return {
          value: cc11001100_hook("value", b.return, "object-key-init"),
          done: cc11001100_hook("done", !0, "object-key-init")
        };
      }
      return {
        value: cc11001100_hook("value", void 0, "object-key-init"),
        done: cc11001100_hook("done", !0, "object-key-init")
      };
    },
    ya = function (a) {
      this.next = cc11001100_hook("this.next", function (b) {
        return a.Pb(b);
      }, "assign");
      this.throw = cc11001100_hook("this.throw", function (b) {
        return a.Wb(b);
      }, "assign");
      this.return = cc11001100_hook("this.return", function (b) {
        return xa(a, b);
      }, "assign");
      this[Symbol.iterator] = cc11001100_hook("this[Symbol.iterator]", function () {
        return this;
      }, "assign");
    },
    za = function (a) {
      function b(d) {
        cc11001100_hook("d", d, "function-parameter");
        return a.next(d);
      }
      function c(d) {
        cc11001100_hook("d", d, "function-parameter");
        return a.throw(d);
      }
      return new Promise(function (d, e) {
        function f(g) {
          cc11001100_hook("g", g, "function-parameter");
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
        }
        f(a.next());
      });
    },
    Aa = function (a) {
      this[Symbol.asyncIterator] = cc11001100_hook("this[Symbol.asyncIterator]", function () {
        return this;
      }, "assign");
      this[Symbol.iterator] = cc11001100_hook("this[Symbol.iterator]", function () {
        return a;
      }, "assign");
      this.next = cc11001100_hook("this.next", function (b) {
        return Promise.resolve(a.next(b));
      }, "assign");
      void 0 !== a["throw"] && (this["throw"] = cc11001100_hook("this[\"throw\"]", function (b) {
        return Promise.resolve(a["throw"](b));
      }, "assign"));
      void 0 !== a["return"] && (this["return"] = cc11001100_hook("this[\"return\"]", function (b) {
        return Promise.resolve(a["return"](b));
      }, "assign"));
    },
    x = function () {
      for (var a = cc11001100_hook("a", Number(this), "var-init"), b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a, "var-init"); c < arguments.length; c++) b[c - a] = cc11001100_hook("b[c - a]", arguments[c], "assign");
      return b;
    };
  q("Promise", function (a) {
    function b() {
      this.Ja = cc11001100_hook("this.Ja", null, "assign");
    }
    function c(g) {
      cc11001100_hook("g", g, "function-parameter");
      return g instanceof e ? g : new e(function (h) {
        h(g);
      });
    }
    if (a) return a;
    b.prototype.oe = cc11001100_hook("b.prototype.oe", function (g) {
      if (null == this.Ja) {
        this.Ja = cc11001100_hook("this.Ja", [], "assign");
        var h = cc11001100_hook("h", this, "var-init");
        this.pe(function () {
          h.Wf();
        });
      }
      this.Ja.push(g);
    }, "assign");
    var d = cc11001100_hook("d", da.setTimeout, "var-init");
    b.prototype.pe = cc11001100_hook("b.prototype.pe", function (g) {
      d(g, 0);
    }, "assign");
    b.prototype.Wf = cc11001100_hook("b.prototype.Wf", function () {
      for (; this.Ja && this.Ja.length;) {
        var g = cc11001100_hook("g", this.Ja, "var-init");
        this.Ja = cc11001100_hook("this.Ja", [], "assign");
        for (var h = cc11001100_hook("h", 0, "var-init"); h < g.length; ++h) {
          var k = cc11001100_hook("k", g[h], "var-init");
          g[h] = cc11001100_hook("g[h]", null, "assign");
          try {
            k();
          } catch (l) {
            this.Ef(l);
          }
        }
      }
      this.Ja = cc11001100_hook("this.Ja", null, "assign");
    }, "assign");
    b.prototype.Ef = cc11001100_hook("b.prototype.Ef", function (g) {
      this.pe(function () {
        throw g;
      });
    }, "assign");
    var e = function (g) {
      this.xb = cc11001100_hook("this.xb", 0, "assign");
      this.Tb = cc11001100_hook("this.Tb", void 0, "assign");
      this.qb = cc11001100_hook("this.qb", [], "assign");
      this.Te = cc11001100_hook("this.Te", !1, "assign");
      var h = cc11001100_hook("h", this.ld(), "var-init");
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.ld = cc11001100_hook("e.prototype.ld", function () {
      function g(l) {
        cc11001100_hook("l", l, "function-parameter");
        return function (p) {
          k || (k = cc11001100_hook("k", !0, "assign"), l.call(h, p));
        };
      }
      var h = cc11001100_hook("h", this, "var-init"),
        k = cc11001100_hook("k", !1, "var-init");
      return {
        resolve: cc11001100_hook("resolve", g(this.bh), "object-key-init"),
        reject: cc11001100_hook("reject", g(this.Rd), "object-key-init")
      };
    }, "assign");
    e.prototype.bh = cc11001100_hook("e.prototype.bh", function (g) {
      if (g === this) this.Rd(new TypeError("g"));else if (g instanceof e) this.gh(g);else {
        a: switch (typeof g) {
          case "object":
            var h = cc11001100_hook("h", null != g, "var-init");
            break a;
          case "function":
            h = cc11001100_hook("h", !0, "assign");
            break a;
          default:
            h = cc11001100_hook("h", !1, "assign");
        }
        h ? this.ah(g) : this.Be(g);
      }
    }, "assign");
    e.prototype.ah = cc11001100_hook("e.prototype.ah", function (g) {
      var h = cc11001100_hook("h", void 0, "var-init");
      try {
        h = cc11001100_hook("h", g.then, "assign");
      } catch (k) {
        this.Rd(k);
        return;
      }
      "function" == typeof h ? this.hh(h, g) : this.Be(g);
    }, "assign");
    e.prototype.Rd = cc11001100_hook("e.prototype.Rd", function (g) {
      this.hf(2, g);
    }, "assign");
    e.prototype.Be = cc11001100_hook("e.prototype.Be", function (g) {
      this.hf(1, g);
    }, "assign");
    e.prototype.hf = cc11001100_hook("e.prototype.hf", function (g, h) {
      if (0 != this.xb) throw Error("h`" + g + "`" + h + "`" + this.xb);
      this.xb = cc11001100_hook("this.xb", g, "assign");
      this.Tb = cc11001100_hook("this.Tb", h, "assign");
      2 === this.xb && this.eh();
      this.Xf();
    }, "assign");
    e.prototype.eh = cc11001100_hook("e.prototype.eh", function () {
      var g = cc11001100_hook("g", this, "var-init");
      d(function () {
        if (g.Lg()) {
          var h = cc11001100_hook("h", da.console, "var-init");
          "undefined" !== typeof h && h.error(g.Tb);
        }
      }, 1);
    }, "assign");
    e.prototype.Lg = cc11001100_hook("e.prototype.Lg", function () {
      if (this.Te) return !1;
      var g = cc11001100_hook("g", da.CustomEvent, "var-init"),
        h = cc11001100_hook("h", da.Event, "var-init"),
        k = cc11001100_hook("k", da.dispatchEvent, "var-init");
      if ("undefined" === typeof k) return !0;
      "function" === typeof g ? g = cc11001100_hook("g", new g("unhandledrejection", {
        cancelable: cc11001100_hook("cancelable", !0, "object-key-init")
      }), "assign") : "function" === typeof h ? g = cc11001100_hook("g", new h("unhandledrejection", {
        cancelable: cc11001100_hook("cancelable", !0, "object-key-init")
      }), "assign") : (g = cc11001100_hook("g", da.document.createEvent("CustomEvent"), "assign"), g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = cc11001100_hook("g.promise", this, "assign");
      g.reason = cc11001100_hook("g.reason", this.Tb, "assign");
      return k(g);
    }, "assign");
    e.prototype.Xf = cc11001100_hook("e.prototype.Xf", function () {
      if (null != this.qb) {
        for (var g = cc11001100_hook("g", 0, "var-init"); g < this.qb.length; ++g) f.oe(this.qb[g]);
        this.qb = cc11001100_hook("this.qb", null, "assign");
      }
    }, "assign");
    var f = cc11001100_hook("f", new b(), "var-init");
    e.prototype.gh = cc11001100_hook("e.prototype.gh", function (g) {
      var h = cc11001100_hook("h", this.ld(), "var-init");
      g.lc(h.resolve, h.reject);
    }, "assign");
    e.prototype.hh = cc11001100_hook("e.prototype.hh", function (g, h) {
      var k = cc11001100_hook("k", this.ld(), "var-init");
      try {
        g.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    }, "assign");
    e.prototype.then = cc11001100_hook("e.prototype.then", function (g, h) {
      function k(n, w) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("w", w, "function-parameter");
        return "function" == typeof n ? function (A) {
          try {
            l(n(A));
          } catch (y) {
            p(y);
          }
        } : w;
      }
      var l,
        p,
        t = cc11001100_hook("t", new e(function (n, w) {
          l = cc11001100_hook("l", n, "assign");
          p = cc11001100_hook("p", w, "assign");
        }), "var-init");
      this.lc(k(g, l), k(h, p));
      return t;
    }, "assign");
    e.prototype.catch = cc11001100_hook("e.prototype.catch", function (g) {
      return this.then(void 0, g);
    }, "assign");
    e.prototype.lc = cc11001100_hook("e.prototype.lc", function (g, h) {
      function k() {
        switch (l.xb) {
          case 1:
            g(l.Tb);
            break;
          case 2:
            h(l.Tb);
            break;
          default:
            throw Error("i`" + l.xb);
        }
      }
      var l = cc11001100_hook("l", this, "var-init");
      null == this.qb ? f.oe(k) : this.qb.push(k);
      this.Te = cc11001100_hook("this.Te", !0, "assign");
    }, "assign");
    e.resolve = cc11001100_hook("e.resolve", c, "assign");
    e.reject = cc11001100_hook("e.reject", function (g) {
      return new e(function (h, k) {
        k(g);
      });
    }, "assign");
    e.race = cc11001100_hook("e.race", function (g) {
      return new e(function (h, k) {
        for (var l = cc11001100_hook("l", r(g), "var-init"), p = cc11001100_hook("p", l.next(), "var-init"); !p.done; p = cc11001100_hook("p", l.next(), "assign")) c(p.value).lc(h, k);
      });
    }, "assign");
    e.all = cc11001100_hook("e.all", function (g) {
      var h = cc11001100_hook("h", r(g), "var-init"),
        k = cc11001100_hook("k", h.next(), "var-init");
      return k.done ? c([]) : new e(function (l, p) {
        function t(A) {
          cc11001100_hook("A", A, "function-parameter");
          return function (y) {
            n[A] = cc11001100_hook("n[A]", y, "assign");
            w--;
            0 == w && l(n);
          };
        }
        var n = cc11001100_hook("n", [], "var-init"),
          w = cc11001100_hook("w", 0, "var-init");
        do n.push(void 0), w++, c(k.value).lc(t(n.length - 1), p), k = cc11001100_hook("k", h.next(), "assign"); while (!k.done);
      });
    }, "assign");
    return e;
  });
  q("Array.prototype.find", function (a) {
    return a ? a : function (b, c) {
      a: {
        var d = cc11001100_hook("d", this, "var-init");
        d instanceof String && (d = cc11001100_hook("d", String(d), "assign"));
        for (var e = cc11001100_hook("e", d.length, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < e; f++) {
          var g = cc11001100_hook("g", d[f], "var-init");
          if (b.call(c, g, f, d)) {
            b = cc11001100_hook("b", g, "assign");
            break a;
          }
        }
        b = cc11001100_hook("b", void 0, "assign");
      }
      return b;
    };
  });
  q("WeakMap", function (a) {
    function b() {}
    function c(k) {
      cc11001100_hook("k", k, "function-parameter");
      var l = cc11001100_hook("l", typeof k, "var-init");
      return "object" === l && null !== k || "function" === l;
    }
    function d(k) {
      cc11001100_hook("k", k, "function-parameter");
      if (!fa(k, f)) {
        var l = cc11001100_hook("l", new b(), "var-init");
        ba(k, f, {
          value: cc11001100_hook("value", l, "object-key-init")
        });
      }
    }
    function e(k) {
      cc11001100_hook("k", k, "function-parameter");
      var l = cc11001100_hook("l", Object[k], "var-init");
      l && (Object[k] = cc11001100_hook("Object[k]", function (p) {
        if (p instanceof b) return p;
        Object.isExtensible(p) && d(p);
        return l(p);
      }, "assign"));
    }
    if (function () {
      if (!a || !Object.seal) return !1;
      try {
        var k = cc11001100_hook("k", Object.seal({}), "var-init"),
          l = cc11001100_hook("l", Object.seal({}), "var-init"),
          p = cc11001100_hook("p", new a([[k, 2], [l, 3]]), "var-init");
        if (2 != p.get(k) || 3 != p.get(l)) return !1;
        p.delete(k);
        p.set(l, 4);
        return !p.has(k) && 4 == p.get(l);
      } catch (t) {
        return !1;
      }
    }()) return a;
    var f = cc11001100_hook("f", "$jscomp_hidden_" + Math.random(), "var-init");
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = cc11001100_hook("g", 0, "var-init"),
      h = function (k) {
        this.Jb = cc11001100_hook("this.Jb", (g += cc11001100_hook("g", Math.random() + 1, "assign")).toString(), "assign");
        if (k) {
          k = cc11001100_hook("k", r(k), "assign");
          for (var l; !(l = cc11001100_hook("l", k.next(), "assign")).done;) l = cc11001100_hook("l", l.value, "assign"), this.set(l[0], l[1]);
        }
      };
    h.prototype.set = cc11001100_hook("h.prototype.set", function (k, l) {
      if (!c(k)) throw Error("j");
      d(k);
      if (!fa(k, f)) throw Error("k`" + k);
      k[f][this.Jb] = cc11001100_hook("k[f][this.Jb]", l, "assign");
      return this;
    }, "assign");
    h.prototype.get = cc11001100_hook("h.prototype.get", function (k) {
      return c(k) && fa(k, f) ? k[f][this.Jb] : void 0;
    }, "assign");
    h.prototype.has = cc11001100_hook("h.prototype.has", function (k) {
      return c(k) && fa(k, f) && fa(k[f], this.Jb);
    }, "assign");
    h.prototype.delete = cc11001100_hook("h.prototype.delete", function (k) {
      return c(k) && fa(k, f) && fa(k[f], this.Jb) ? delete k[f][this.Jb] : !1;
    }, "assign");
    return h;
  });
  q("Map", function (a) {
    if (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var h = cc11001100_hook("h", Object.seal({
            x: cc11001100_hook("x", 4, "object-key-init")
          }), "var-init"),
          k = cc11001100_hook("k", new a(r([[h, "s"]])), "var-init");
        if ("s" != k.get(h) || 1 != k.size || k.get({
          x: cc11001100_hook("x", 4, "object-key-init")
        }) || k.set({
          x: cc11001100_hook("x", 4, "object-key-init")
        }, "t") != k || 2 != k.size) return !1;
        var l = cc11001100_hook("l", k.entries(), "var-init"),
          p = cc11001100_hook("p", l.next(), "var-init");
        if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
        p = cc11001100_hook("p", l.next(), "assign");
        return p.done || 4 != p.value[0].x || "t" != p.value[1] || !l.next().done ? !1 : !0;
      } catch (t) {
        return !1;
      }
    }()) return a;
    var b = cc11001100_hook("b", new WeakMap(), "var-init"),
      c = function (h) {
        this.Fb = cc11001100_hook("this.Fb", {}, "assign");
        this.Ba = cc11001100_hook("this.Ba", f(), "assign");
        this.size = cc11001100_hook("this.size", 0, "assign");
        if (h) {
          h = cc11001100_hook("h", r(h), "assign");
          for (var k; !(k = cc11001100_hook("k", h.next(), "assign")).done;) k = cc11001100_hook("k", k.value, "assign"), this.set(k[0], k[1]);
        }
      };
    c.prototype.set = cc11001100_hook("c.prototype.set", function (h, k) {
      h = cc11001100_hook("h", 0 === h ? 0 : h, "assign");
      var l = cc11001100_hook("l", d(this, h), "var-init");
      l.list || (l.list = cc11001100_hook("l.list", this.Fb[l.id] = cc11001100_hook("this.Fb[l.id]", [], "assign"), "assign"));
      l.M ? l.M.value = cc11001100_hook("l.M.value", k, "assign") : (l.M = cc11001100_hook("l.M", {
        next: cc11001100_hook("next", this.Ba, "object-key-init"),
        Ea: cc11001100_hook("Ea", this.Ba.Ea, "object-key-init"),
        head: cc11001100_hook("head", this.Ba, "object-key-init"),
        key: cc11001100_hook("key", h, "object-key-init"),
        value: cc11001100_hook("value", k, "object-key-init")
      }, "assign"), l.list.push(l.M), this.Ba.Ea.next = cc11001100_hook("this.Ba.Ea.next", l.M, "assign"), this.Ba.Ea = cc11001100_hook("this.Ba.Ea", l.M, "assign"), this.size++);
      return this;
    }, "assign");
    c.prototype.delete = cc11001100_hook("c.prototype.delete", function (h) {
      h = cc11001100_hook("h", d(this, h), "assign");
      return h.M && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.Fb[h.id], h.M.Ea.next = cc11001100_hook("h.M.Ea.next", h.M.next, "assign"), h.M.next.Ea = cc11001100_hook("h.M.next.Ea", h.M.Ea, "assign"), h.M.head = cc11001100_hook("h.M.head", null, "assign"), this.size--, !0) : !1;
    }, "assign");
    c.prototype.clear = cc11001100_hook("c.prototype.clear", function () {
      this.Fb = cc11001100_hook("this.Fb", {}, "assign");
      this.Ba = cc11001100_hook("this.Ba", this.Ba.Ea = cc11001100_hook("this.Ba.Ea", f(), "assign"), "assign");
      this.size = cc11001100_hook("this.size", 0, "assign");
    }, "assign");
    c.prototype.has = cc11001100_hook("c.prototype.has", function (h) {
      return !!d(this, h).M;
    }, "assign");
    c.prototype.get = cc11001100_hook("c.prototype.get", function (h) {
      return (h = cc11001100_hook("h", d(this, h).M, "assign")) && h.value;
    }, "assign");
    c.prototype.entries = cc11001100_hook("c.prototype.entries", function () {
      return e(this, function (h) {
        return [h.key, h.value];
      });
    }, "assign");
    c.prototype.keys = cc11001100_hook("c.prototype.keys", function () {
      return e(this, function (h) {
        return h.key;
      });
    }, "assign");
    c.prototype.values = cc11001100_hook("c.prototype.values", function () {
      return e(this, function (h) {
        return h.value;
      });
    }, "assign");
    c.prototype.forEach = cc11001100_hook("c.prototype.forEach", function (h, k) {
      for (var l = cc11001100_hook("l", this.entries(), "var-init"), p; !(p = cc11001100_hook("p", l.next(), "assign")).done;) p = cc11001100_hook("p", p.value, "assign"), h.call(k, p[1], p[0], this);
    }, "assign");
    c.prototype[Symbol.iterator] = cc11001100_hook("c.prototype[Symbol.iterator]", c.prototype.entries, "assign");
    var d = function (h, k) {
        var l = cc11001100_hook("l", k && typeof k, "var-init");
        "object" == l || "function" == l ? b.has(k) ? l = cc11001100_hook("l", b.get(k), "assign") : (l = cc11001100_hook("l", "" + ++g, "assign"), b.set(k, l)) : l = cc11001100_hook("l", "p_" + k, "assign");
        var p = cc11001100_hook("p", h.Fb[l], "var-init");
        if (p && fa(h.Fb, l)) for (h = cc11001100_hook("h", 0, "assign"); h < p.length; h++) {
          var t = cc11001100_hook("t", p[h], "var-init");
          if (k !== k && t.key !== t.key || k === t.key) return {
            id: cc11001100_hook("id", l, "object-key-init"),
            list: cc11001100_hook("list", p, "object-key-init"),
            index: cc11001100_hook("index", h, "object-key-init"),
            M: cc11001100_hook("M", t, "object-key-init")
          };
        }
        return {
          id: cc11001100_hook("id", l, "object-key-init"),
          list: cc11001100_hook("list", p, "object-key-init"),
          index: cc11001100_hook("index", -1, "object-key-init"),
          M: cc11001100_hook("M", void 0, "object-key-init")
        };
      },
      e = function (h, k) {
        var l = cc11001100_hook("l", h.Ba, "var-init");
        return ea(function () {
          if (l) {
            for (; l.head != h.Ba;) l = cc11001100_hook("l", l.Ea, "assign");
            for (; l.next != l.head;) return l = cc11001100_hook("l", l.next, "assign"), {
              done: cc11001100_hook("done", !1, "object-key-init"),
              value: cc11001100_hook("value", k(l), "object-key-init")
            };
            l = cc11001100_hook("l", null, "assign");
          }
          return {
            done: cc11001100_hook("done", !0, "object-key-init"),
            value: cc11001100_hook("value", void 0, "object-key-init")
          };
        });
      },
      f = function () {
        var h = cc11001100_hook("h", {}, "var-init");
        return h.Ea = cc11001100_hook("h.Ea", h.next = cc11001100_hook("h.next", h.head = cc11001100_hook("h.head", h, "assign"), "assign"), "assign");
      },
      g = cc11001100_hook("g", 0, "var-init");
    return c;
  });
  q("Number.isFinite", function (a) {
    return a ? a : function (b) {
      return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
    };
  });
  q("Number.isNaN", function (a) {
    return a ? a : function (b) {
      return "number" === typeof b && isNaN(b);
    };
  });
  var Ba = function (a, b) {
    a instanceof String && (a += cc11001100_hook("a", "", "assign"));
    var c = cc11001100_hook("c", 0, "var-init"),
      d = cc11001100_hook("d", !1, "var-init"),
      e = cc11001100_hook("e", {
        next: function () {
          if (!d && c < a.length) {
            var f = cc11001100_hook("f", c++, "var-init");
            return {
              value: cc11001100_hook("value", b(f, a[f]), "object-key-init"),
              done: cc11001100_hook("done", !1, "object-key-init")
            };
          }
          d = cc11001100_hook("d", !0, "assign");
          return {
            done: cc11001100_hook("done", !0, "object-key-init"),
            value: cc11001100_hook("value", void 0, "object-key-init")
          };
        }
      }, "var-init");
    e[Symbol.iterator] = cc11001100_hook("e[Symbol.iterator]", function () {
      return e;
    }, "assign");
    return e;
  };
  q("Array.prototype.entries", function (a) {
    return a ? a : function () {
      return Ba(this, function (b, c) {
        return [b, c];
      });
    };
  });
  q("Array.prototype.keys", function (a) {
    return a ? a : function () {
      return Ba(this, function (b) {
        return b;
      });
    };
  });
  q("Array.from", function (a) {
    return a ? a : function (b, c, d) {
      c = cc11001100_hook("c", null != c ? c : function (h) {
        return h;
      }, "assign");
      var e = cc11001100_hook("e", [], "var-init"),
        f = cc11001100_hook("f", "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator], "var-init");
      if ("function" == typeof f) {
        b = cc11001100_hook("b", f.call(b), "assign");
        for (var g = cc11001100_hook("g", 0, "var-init"); !(f = cc11001100_hook("f", b.next(), "assign")).done;) e.push(c.call(d, f.value, g++));
      } else for (f = cc11001100_hook("f", b.length, "assign"), g = cc11001100_hook("g", 0, "assign"); g < f; g++) e.push(c.call(d, b[g], g));
      return e;
    };
  });
  q("Number.isInteger", function (a) {
    return a ? a : function (b) {
      return Number.isFinite(b) ? b === Math.floor(b) : !1;
    };
  });
  q("Array.prototype.values", function (a) {
    return a ? a : function () {
      return Ba(this, function (b, c) {
        return c;
      });
    };
  });
  q("Array.prototype.fill", function (a) {
    return a ? a : function (b, c, d) {
      var e = cc11001100_hook("e", this.length || 0, "var-init");
      0 > c && (c = cc11001100_hook("c", Math.max(0, e + c), "assign"));
      if (null == d || d > e) d = cc11001100_hook("d", e, "assign");
      d = cc11001100_hook("d", Number(d), "assign");
      0 > d && (d = cc11001100_hook("d", Math.max(0, e + d), "assign"));
      for (c = cc11001100_hook("c", Number(c || 0), "assign"); c < d; c++) this[c] = cc11001100_hook("this[c]", b, "assign");
      return this;
    };
  });
  var Ca = function (a) {
    return a ? a : Array.prototype.fill;
  };
  q("Int8Array.prototype.fill", Ca);
  q("Uint8Array.prototype.fill", Ca);
  q("Uint8ClampedArray.prototype.fill", Ca);
  q("Int16Array.prototype.fill", Ca);
  q("Uint16Array.prototype.fill", Ca);
  q("Int32Array.prototype.fill", Ca);
  q("Uint32Array.prototype.fill", Ca);
  q("Float32Array.prototype.fill", Ca);
  q("Float64Array.prototype.fill", Ca);
  q("Set", function (a) {
    if (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var c = cc11001100_hook("c", Object.seal({
            x: cc11001100_hook("x", 4, "object-key-init")
          }), "var-init"),
          d = cc11001100_hook("d", new a(r([c])), "var-init");
        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
          x: cc11001100_hook("x", 4, "object-key-init")
        }) != d || 2 != d.size) return !1;
        var e = cc11001100_hook("e", d.entries(), "var-init"),
          f = cc11001100_hook("f", e.next(), "var-init");
        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
        f = cc11001100_hook("f", e.next(), "assign");
        return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
      } catch (g) {
        return !1;
      }
    }()) return a;
    var b = function (c) {
      this.sa = cc11001100_hook("this.sa", new Map(), "assign");
      if (c) {
        c = cc11001100_hook("c", r(c), "assign");
        for (var d; !(d = cc11001100_hook("d", c.next(), "assign")).done;) this.add(d.value);
      }
      this.size = cc11001100_hook("this.size", this.sa.size, "assign");
    };
    b.prototype.add = cc11001100_hook("b.prototype.add", function (c) {
      c = cc11001100_hook("c", 0 === c ? 0 : c, "assign");
      this.sa.set(c, c);
      this.size = cc11001100_hook("this.size", this.sa.size, "assign");
      return this;
    }, "assign");
    b.prototype.delete = cc11001100_hook("b.prototype.delete", function (c) {
      c = cc11001100_hook("c", this.sa.delete(c), "assign");
      this.size = cc11001100_hook("this.size", this.sa.size, "assign");
      return c;
    }, "assign");
    b.prototype.clear = cc11001100_hook("b.prototype.clear", function () {
      this.sa.clear();
      this.size = cc11001100_hook("this.size", 0, "assign");
    }, "assign");
    b.prototype.has = cc11001100_hook("b.prototype.has", function (c) {
      return this.sa.has(c);
    }, "assign");
    b.prototype.entries = cc11001100_hook("b.prototype.entries", function () {
      return this.sa.entries();
    }, "assign");
    b.prototype.values = cc11001100_hook("b.prototype.values", function () {
      return this.sa.values();
    }, "assign");
    b.prototype.keys = cc11001100_hook("b.prototype.keys", b.prototype.values, "assign");
    b.prototype[Symbol.iterator] = cc11001100_hook("b.prototype[Symbol.iterator]", b.prototype.values, "assign");
    b.prototype.forEach = cc11001100_hook("b.prototype.forEach", function (c, d) {
      var e = cc11001100_hook("e", this, "var-init");
      this.sa.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    }, "assign");
    return b;
  });
  q("Object.entries", function (a) {
    return a ? a : function (b) {
      var c = cc11001100_hook("c", [], "var-init"),
        d;
      for (d in b) fa(b, d) && c.push([d, b[d]]);
      return c;
    };
  });
  q("Object.values", function (a) {
    return a ? a : function (b) {
      var c = cc11001100_hook("c", [], "var-init"),
        d;
      for (d in b) fa(b, d) && c.push(b[d]);
      return c;
    };
  });
  q("Object.is", function (a) {
    return a ? a : function (b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
    };
  });
  q("Array.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      var d = cc11001100_hook("d", this, "var-init");
      d instanceof String && (d = cc11001100_hook("d", String(d), "assign"));
      var e = cc11001100_hook("e", d.length, "var-init");
      c = cc11001100_hook("c", c || 0, "assign");
      for (0 > c && (c = cc11001100_hook("c", Math.max(c + e, 0), "assign")); c < e; c++) {
        var f = cc11001100_hook("f", d[c], "var-init");
        if (f === b || Object.is(f, b)) return !0;
      }
      return !1;
    };
  });
  q("String.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      if (null == this) throw new TypeError("l`includes");
      if (b instanceof RegExp) throw new TypeError("m`includes");
      return -1 !== (this + "").indexOf(b, c || 0);
    };
  });
  q("Array.prototype.flat", function (a) {
    return a ? a : function (b) {
      b = cc11001100_hook("b", void 0 === b ? 1 : b, "assign");
      var c = cc11001100_hook("c", [], "var-init");
      Array.prototype.forEach.call(this, function (d) {
        Array.isArray(d) && 0 < b ? (d = cc11001100_hook("d", Array.prototype.flat.call(d, b - 1), "assign"), c.push.apply(c, d)) : c.push(d);
      });
      return c;
    };
  });
  var Da = cc11001100_hook("Da", this || self, "var-init"),
    Ea = function (a) {
      var b = cc11001100_hook("b", typeof a, "var-init");
      return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    },
    Ga = function (a) {
      var b = cc11001100_hook("b", Ea(a), "var-init");
      return "array" == b || "object" == b && "number" == typeof a.length;
    },
    Ha = function (a) {
      var b = cc11001100_hook("b", typeof a, "var-init");
      return "object" == b && null != a || "function" == b;
    },
    Ia = function (a, b) {
      function c() {}
      c.prototype = cc11001100_hook("c.prototype", b.prototype, "assign");
      a.nh = cc11001100_hook("a.nh", b.prototype, "assign");
      a.prototype = cc11001100_hook("a.prototype", new c(), "assign");
      a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign");
      a.Mh = cc11001100_hook("a.Mh", function (d, e, f) {
        for (var g = cc11001100_hook("g", Array(arguments.length - 2), "var-init"), h = cc11001100_hook("h", 2, "var-init"); h < arguments.length; h++) g[h - 2] = cc11001100_hook("g[h - 2]", arguments[h], "assign");
        return b.prototype[e].apply(d, g);
      }, "assign");
    };
  var Ja = function (a, b) {
    b = cc11001100_hook("b", Error.call(this, b ? a + ": " + b : String(a)), "assign");
    this.message = cc11001100_hook("this.message", b.message, "assign");
    "stack" in b && (this.stack = cc11001100_hook("this.stack", b.stack, "assign"));
    this.code = cc11001100_hook("this.code", a, "assign");
    this.__proto__ = cc11001100_hook("this.__proto__", Ja.prototype, "assign");
    this.name = cc11001100_hook("this.name", String(a), "assign");
  };
  v(Ja, Error);
  var Ka = function (a) {
    Ja.call(this, 1E3, 'sfr:"' + a + '"');
    this.Dg = cc11001100_hook("this.Dg", a, "assign");
    this.__proto__ = cc11001100_hook("this.__proto__", Ka.prototype, "assign");
  };
  v(Ka, Ja);
  var La = function () {
    Ja.call(this, 1003);
    this.__proto__ = cc11001100_hook("this.__proto__", La.prototype, "assign");
  };
  v(La, Ja);
  var Na = function () {
    Ja.call(this, 1009);
    this.__proto__ = cc11001100_hook("this.__proto__", Na.prototype, "assign");
  };
  v(Na, Ja);
  var Oa = function () {
    Ja.call(this, 1007);
    this.__proto__ = cc11001100_hook("this.__proto__", La.prototype, "assign");
  };
  v(Oa, Ja);
  var Pa = function () {
    Ja.call(this, 1008);
    this.__proto__ = cc11001100_hook("this.__proto__", La.prototype, "assign");
  };
  v(Pa, Ja);
  var Qa = function () {
    Ja.call(this, 1001);
    this.__proto__ = cc11001100_hook("this.__proto__", Qa.prototype, "assign");
  };
  v(Qa, Ja);
  var Ra = function (a) {
    Ja.call(this, 1004, String(a));
    this.pg = cc11001100_hook("this.pg", a, "assign");
    this.__proto__ = cc11001100_hook("this.__proto__", Ra.prototype, "assign");
  };
  v(Ra, Ja);
  var Ta = function (a) {
    Ja.call(this, 1010, a);
    this.__proto__ = cc11001100_hook("this.__proto__", Sa.prototype, "assign");
  };
  v(Ta, Ja);
  var Sa = function (a) {
    Ja.call(this, 1005, a);
    this.__proto__ = cc11001100_hook("this.__proto__", Sa.prototype, "assign");
  };
  v(Sa, Ja);
  var Ua = cc11001100_hook("Ua", Symbol("time-origin"), "var-init"),
    Va = cc11001100_hook("Va", Symbol("date"), "var-init"),
    Xa = function (a, b) {
      this.value = cc11001100_hook("this.value", a, "assign");
      this.timeline = cc11001100_hook("this.timeline", b, "assign");
    },
    Ya = function (a, b) {
      if (b.timeline !== a.timeline) throw new Oa();
      return a.value - b.value;
    };
  Xa.prototype.equals = cc11001100_hook("Xa.prototype.equals", function (a) {
    return 0 === Ya(this, a);
  }, "assign");
  Xa.prototype.maximum = cc11001100_hook("Xa.prototype.maximum", function (a) {
    if (a.timeline !== this.timeline) throw new Oa();
    return this.value >= a.value ? this : a;
  }, "assign");
  Xa.prototype.round = cc11001100_hook("Xa.prototype.round", function () {
    return new Xa(Math.round(this.value), this.timeline);
  }, "assign");
  Xa.prototype.toString = cc11001100_hook("Xa.prototype.toString", function () {
    return String(this.value);
  }, "assign");
  function Za(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Error.captureStackTrace) Error.captureStackTrace(this, Za);else {
      var c = cc11001100_hook("c", Error().stack, "var-init");
      c && (this.stack = cc11001100_hook("this.stack", c, "assign"));
    }
    a && (this.message = cc11001100_hook("this.message", String(a), "assign"));
    void 0 !== b && (this.cause = cc11001100_hook("this.cause", b, "assign"));
  }
  Ia(Za, Error);
  Za.prototype.name = cc11001100_hook("Za.prototype.name", "CustomError", "assign");
  var $a;
  function ab(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.split("%s"), "assign");
    for (var c = cc11001100_hook("c", "", "var-init"), d = cc11001100_hook("d", a.length - 1, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < d; e++) c += cc11001100_hook("c", a[e] + (e < b.length ? b[e] : "%s"), "assign");
    Za.call(this, c + a[d]);
  }
  Ia(ab, Za);
  ab.prototype.name = cc11001100_hook("ab.prototype.name", "AssertionError", "assign");
  function bb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", "Assertion failed", "var-init");
    if (c) {
      e += cc11001100_hook("e", ": " + c, "assign");
      var f = cc11001100_hook("f", d, "var-init");
    } else a && (e += cc11001100_hook("e", ": " + a, "assign"), f = cc11001100_hook("f", b, "assign"));
    throw new ab("" + e, f || []);
  }
  var D = function (a, b, c) {
      a || bb("", null, b, Array.prototype.slice.call(arguments, 2));
      return a;
    },
    cb = function (a, b, c) {
      null == a && bb("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    },
    db = function (a, b) {
      throw new ab("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    eb = function (a, b, c) {
      "number" !== typeof a && bb("Expected number but got %s: %s.", [Ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
    fb = function (a, b, c) {
      "string" !== typeof a && bb("Expected string but got %s: %s.", [Ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
    gb = function (a, b, c) {
      "function" !== typeof a && bb("Expected function but got %s: %s.", [Ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
    hb = function (a, b, c) {
      Ha(a) || bb("Expected object but got %s: %s.", [Ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
    ib = function (a, b, c) {
      Array.isArray(a) || bb("Expected array but got %s: %s.", [Ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
    kb = function (a, b, c, d) {
      a instanceof b || bb("Expected instanceof %s but got %s.", [jb(b), jb(a)], c, Array.prototype.slice.call(arguments, 3));
      return a;
    };
  function jb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
  }
  ;
  var lb = function (a, b) {
    return -1 != a.toLowerCase().indexOf(b.toLowerCase());
  };
  var mb, nb;
  a: {
    for (var qb = cc11001100_hook("qb", ["CLOSURE_FLAGS"], "var-init"), rb = cc11001100_hook("rb", Da, "var-init"), sb = cc11001100_hook("sb", 0, "var-init"); sb < qb.length; sb++) if (rb = cc11001100_hook("rb", rb[qb[sb]], "assign"), null == rb) {
      nb = cc11001100_hook("nb", null, "assign");
      break a;
    }
    nb = cc11001100_hook("nb", rb, "assign");
  }
  var tb = cc11001100_hook("tb", nb && nb[610401301], "var-init");
  mb = cc11001100_hook("mb", null != tb ? tb : !1, "assign");
  function ub() {
    var a = cc11001100_hook("a", Da.navigator, "var-init");
    return a && (a = cc11001100_hook("a", a.userAgent, "assign")) ? a : "";
  }
  var vb,
    wb = cc11001100_hook("wb", Da.navigator, "var-init");
  vb = cc11001100_hook("vb", wb ? wb.userAgentData || null : null, "assign");
  function xb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return mb ? vb ? vb.brands.some(function (b) {
      return (b = cc11001100_hook("b", b.brand, "assign")) && -1 != b.indexOf(a);
    }) : !1 : !1;
  }
  function E(a) {
    cc11001100_hook("a", a, "function-parameter");
    return -1 != ub().indexOf(a);
  }
  ;
  function yb() {
    return mb ? !!vb && 0 < vb.brands.length : !1;
  }
  function zb() {
    return yb() ? !1 : E("Opera");
  }
  function Ab() {
    return yb() ? !1 : E("Trident") || E("MSIE");
  }
  function Bb() {
    return E("Safari") && !(Cb() || (yb() ? 0 : E("Coast")) || zb() || (yb() ? 0 : E("Edge")) || (yb() ? xb("Microsoft Edge") : E("Edg/")) || (yb() ? xb("Opera") : E("OPR")) || E("Firefox") || E("FxiOS") || E("Silk") || E("Android"));
  }
  function Cb() {
    return yb() ? xb("Chromium") : (E("Chrome") || E("CriOS")) && !(yb() ? 0 : E("Edge")) || E("Silk");
  }
  function Db() {
    return E("Android") && !(Cb() || E("Firefox") || E("FxiOS") || zb() || E("Silk"));
  }
  function Eb() {
    var a = cc11001100_hook("a", ub(), "var-init");
    if (Ab()) {
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
    } else a = cc11001100_hook("a", "", "assign");
    return a;
  }
  function Fb() {
    if (yb()) {
      var a = cc11001100_hook("a", vb.brands.find(function (b) {
        return "Internet Explorer" === b.brand;
      }), "var-init");
      if (!a || !a.version) return NaN;
      a = cc11001100_hook("a", a.version.split("."), "assign");
    } else {
      a = cc11001100_hook("a", Eb(), "assign");
      if ("" === a) return NaN;
      a = cc11001100_hook("a", a.split("."), "assign");
    }
    return 0 === a.length ? NaN : Number(a[0]);
  }
  ;
  var Hb = cc11001100_hook("Hb", Array.prototype.forEach ? function (a, b) {
      D(null != a.length);
      Array.prototype.forEach.call(a, b, void 0);
    } : function (a, b) {
      for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < c; e++) e in d && b.call(void 0, d[e], e, a);
    }, "var-init"),
    Ib = cc11001100_hook("Ib", Array.prototype.map ? function (a, b) {
      D(null != a.length);
      return Array.prototype.map.call(a, b, void 0);
    } : function (a, b) {
      for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", Array(c), "var-init"), e = cc11001100_hook("e", "string" === typeof a ? a.split("") : a, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < c; f++) f in e && (d[f] = cc11001100_hook("d[f]", b.call(void 0, e[f], f, a), "assign"));
      return d;
    }, "var-init"),
    Jb = cc11001100_hook("Jb", Array.prototype.some ? function (a, b) {
      D(null != a.length);
      return Array.prototype.some.call(a, b, void 0);
    } : function (a, b) {
      for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
      return !1;
    }, "var-init");
  function Kb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Array.prototype.concat.apply([], arguments);
  }
  function Lb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    if (0 < b) {
      for (var c = cc11001100_hook("c", Array(b), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < b; d++) c[d] = cc11001100_hook("c[d]", a[d], "assign");
      return c;
    }
    return [];
  }
  function Mb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!Ga(a) || !Ga(b) || a.length != b.length) return !1;
    var d = cc11001100_hook("d", a.length, "var-init");
    c = cc11001100_hook("c", c || Nb, "assign");
    for (var e = cc11001100_hook("e", 0, "var-init"); e < d; e++) if (!c(a[e], b[e])) return !1;
    return !0;
  }
  function Nb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a === b;
  }
  function Ob(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Kb.apply([], Ib(a, b));
  }
  ;
  var Pb = function (a) {
    Pb[" "](a);
    return a;
  };
  Pb[" "] = cc11001100_hook("Pb[\" \"]", function () {}, "assign");
  var Qb = function (a, b) {
    try {
      return Pb(a[b]), !0;
    } catch (c) {}
    return !1;
  };
  var Rb = cc11001100_hook("Rb", zb(), "var-init"),
    Sb = cc11001100_hook("Sb", Ab(), "var-init"),
    Tb = cc11001100_hook("Tb", E("Edge"), "var-init"),
    Ub = cc11001100_hook("Ub", E("Gecko") && !(lb(ub(), "WebKit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"), "var-init"),
    Vb = cc11001100_hook("Vb", lb(ub(), "WebKit") && !E("Edge"), "var-init"),
    Wb = function () {
      var a = cc11001100_hook("a", Da.document, "var-init");
      return a ? a.documentMode : void 0;
    },
    Xb;
  a: {
    var Yb = cc11001100_hook("Yb", "", "var-init"),
      Zb = cc11001100_hook("Zb", function () {
        var a = cc11001100_hook("a", ub(), "var-init");
        if (Ub) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Tb) return /Edge\/([\d\.]+)/.exec(a);
        if (Sb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Vb) return /WebKit\/(\S+)/.exec(a);
        if (Rb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }(), "var-init");
    Zb && (Yb = cc11001100_hook("Yb", Zb ? Zb[1] : "", "assign"));
    if (Sb) {
      var $b = cc11001100_hook("$b", Wb(), "var-init");
      if (null != $b && $b > parseFloat(Yb)) {
        Xb = cc11001100_hook("Xb", String($b), "assign");
        break a;
      }
    }
    Xb = cc11001100_hook("Xb", Yb, "assign");
  }
  var ac = cc11001100_hook("ac", Xb, "var-init"),
    bc;
  if (Da.document && Sb) {
    var cc = cc11001100_hook("cc", Wb(), "var-init");
    bc = cc11001100_hook("bc", cc ? cc : parseInt(ac, 10) || void 0, "assign");
  } else bc = cc11001100_hook("bc", void 0, "assign");
  var dc = cc11001100_hook("dc", bc, "var-init");
  Db();
  Cb();
  Bb();
  var ec = cc11001100_hook("ec", {}, "var-init"),
    fc = cc11001100_hook("fc", null, "var-init"),
    gc = cc11001100_hook("gc", Ub || Vb || "function" == typeof Da.btoa, "var-init"),
    hc = function (a) {
      var b;
      D(Ga(a), "encodeByteArray takes an array as a parameter");
      void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
      if (!fc) {
        fc = cc11001100_hook("fc", {}, "assign");
        for (var c = cc11001100_hook("c", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), d = cc11001100_hook("d", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), e = cc11001100_hook("e", 0, "var-init"); 5 > e; e++) {
          var f = cc11001100_hook("f", c.concat(d[e].split("")), "var-init");
          ec[e] = cc11001100_hook("ec[e]", f, "assign");
          for (var g = cc11001100_hook("g", 0, "var-init"); g < f.length; g++) {
            var h = cc11001100_hook("h", f[g], "var-init"),
              k = cc11001100_hook("k", fc[h], "var-init");
            void 0 === k ? fc[h] = cc11001100_hook("fc[h]", g, "assign") : D(k === g);
          }
        }
      }
      b = cc11001100_hook("b", ec[b], "assign");
      c = cc11001100_hook("c", Array(Math.floor(a.length / 3)), "assign");
      d = cc11001100_hook("d", b[64] || "", "assign");
      for (e = cc11001100_hook("e", f = cc11001100_hook("f", 0, "assign"), "assign"); f < a.length - 2; f += cc11001100_hook("f", 3, "assign")) {
        k = cc11001100_hook("k", a[f], "assign");
        var l = cc11001100_hook("l", a[f + 1], "var-init");
        h = cc11001100_hook("h", a[f + 2], "assign");
        g = cc11001100_hook("g", b[k >> 2], "assign");
        k = cc11001100_hook("k", b[(k & 3) << 4 | l >> 4], "assign");
        l = cc11001100_hook("l", b[(l & 15) << 2 | h >> 6], "assign");
        h = cc11001100_hook("h", b[h & 63], "assign");
        c[e++] = cc11001100_hook("c[e++]", "" + g + k + l + h, "assign");
      }
      g = cc11001100_hook("g", 0, "assign");
      h = cc11001100_hook("h", d, "assign");
      switch (a.length - f) {
        case 2:
          g = cc11001100_hook("g", a[f + 1], "assign"), h = cc11001100_hook("h", b[(g & 15) << 2] || d, "assign");
        case 1:
          a = cc11001100_hook("a", a[f], "assign"), c[e] = cc11001100_hook("c[e]", "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d, "assign");
      }
      return c.join("");
    };
  var ic = cc11001100_hook("ic", "undefined" !== typeof Uint8Array, "var-init"),
    jc = cc11001100_hook("jc", !Sb && "function" === typeof Da.btoa, "var-init");
  D(!0);
  var kc = cc11001100_hook("kc", "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0, "var-init");
  function lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    D((b & 255) == b);
    ib(a, "state is only maintained on arrays.");
    if (kc) return a[kc] |= cc11001100_hook("a[kc]", b, "assign");
    if (void 0 !== a.Xa) return a.Xa |= cc11001100_hook("a.Xa", b, "assign");
    Object.defineProperties(a, {
      Xa: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return b;
  }
  var mc = cc11001100_hook("mc", Object.getOwnPropertyDescriptor(Array.prototype, "wg"), "var-init");
  Object.defineProperties(Array.prototype, {
    wg: {
      get: function () {
        function a(e, f) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("f", f, "function-parameter");
          e & b && c.push(f);
        }
        var b = cc11001100_hook("b", nc(this), "var-init"),
          c = cc11001100_hook("c", [], "var-init");
        a(1, "IS_REPEATED_FIELD");
        a(2, "IS_IMMUTABLE_ARRAY");
        a(4, "IS_API_FORMATTED");
        a(8, "ONLY_MUTABLE_VALUES");
        a(16, "MUTABLE_REFERENCES_ARE_OWNED");
        a(32, "CONSTRUCTED");
        a(64, "TRANSFERRED");
        a(128, "IS_FIXED_GROUP");
        var d = cc11001100_hook("d", c.join(","), "var-init");
        return mc ? mc.get.call(this) + "|" + d : d;
      },
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
    }
  });
  function nc(a) {
    cc11001100_hook("a", a, "function-parameter");
    ib(a, "state is only maintained on arrays.");
    a = cc11001100_hook("a", kc ? a[kc] : a.Xa, "assign");
    return null == a ? 0 : a;
  }
  function oc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    ib(a, "state is only maintained on arrays.");
    D((b & 255) == b);
    kc ? a[kc] = cc11001100_hook("a[kc]", b, "assign") : void 0 !== a.Xa ? a.Xa = cc11001100_hook("a.Xa", b, "assign") : Object.defineProperties(a, {
      Xa: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
    return a;
  }
  function pc(a) {
    cc11001100_hook("a", a, "function-parameter");
    lc(a, 16);
    return a;
  }
  function qc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    oc(b, (a | 0) & -51);
  }
  function rc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    oc(b, (a | 18) & -41);
  }
  ;
  var sc = cc11001100_hook("sc", {}, "var-init");
  function tc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var uc,
    vc = cc11001100_hook("vc", Object.freeze(oc([], 23)), "var-init");
  function wc() {}
  function xc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length, "var-init");
    (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && tc(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : (b = cc11001100_hook("b", {}, "assign"), a.push((b.g = cc11001100_hook("b.g", 1, "assign"), b)));
  }
  ;
  function yc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.displayName || a.name || "unknown type name";
  }
  function zc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a) return a;
    switch (typeof a) {
      case "string":
        return +a;
      case "number":
        return a;
    }
  }
  function Ac(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a) return a;
    switch (typeof a) {
      case "string":
        return +a;
      case "number":
        return a;
    }
  }
  ;
  var Bc = function () {
    throw Error("r");
  };
  if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
    var Cc = function () {
        throw Error("s");
      },
      Dc = cc11001100_hook("Dc", {}, "var-init");
    Object.defineProperties(Bc, (Dc[Symbol.hasInstance] = cc11001100_hook("Dc[Symbol.hasInstance]", {
      value: cc11001100_hook("value", Cc, "object-key-init"),
      configurable: cc11001100_hook("configurable", !1, "object-key-init"),
      writable: cc11001100_hook("writable", !1, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
    }, "assign"), Dc));
    D(Bc[Symbol.hasInstance] === Cc, "defineProperties did not work: was it monkey-patched?");
  }
  ;
  var Ec = function (a) {
      var b = cc11001100_hook("b", a.tb + a.Sa, "var-init");
      D(0 <= b && Number.isInteger(b) && 4294967295 > b);
      return a.ja || (a.ja = cc11001100_hook("a.ja", a.F[b] = cc11001100_hook("a.F[b]", {}, "assign"), "assign"));
    },
    Fc = function (a, b, c) {
      return -1 === b ? null : b >= a.tb ? a.ja ? a.ja[b] : void 0 : c && a.ja && (c = cc11001100_hook("c", a.ja[b], "assign"), null != c) ? c : a.F[b + a.Sa];
    },
    Hc = function (a, b, c, d) {
      if (nc(a.F) & 2) throw Error("o");
      return Gc(a, b, c, d);
    },
    Gc = function (a, b, c, d) {
      a.Ne && (a.Ne = cc11001100_hook("a.Ne", void 0, "assign"));
      if (b >= a.tb || d) return Ec(a)[b] = cc11001100_hook("Ec(a)[b]", c, "assign"), a;
      a.F[b + a.Sa] = cc11001100_hook("a.F[b + a.Sa]", c, "assign");
      (c = cc11001100_hook("c", a.ja, "assign")) && b in c && delete c[b];
      return a;
    };
  function Ic(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return a;
    D(nc(b.F) & 2 ? !!(nc(a.F) & 2) : !0);
    return a;
  }
  var Jc = function (a, b, c) {
      var d = cc11001100_hook("d", Fc(a, 3, c), "var-init");
      var e = cc11001100_hook("e", nc(a.F), "var-init"),
        f = cc11001100_hook("f", !1, "var-init");
      if (null == d || "object" !== typeof d || (f = cc11001100_hook("f", Array.isArray(d), "assign")) || d.Ob !== sc) {
        if (f) {
          var g = cc11001100_hook("g", f = cc11001100_hook("f", nc(d), "assign"), "var-init");
          0 === g && (g |= cc11001100_hook("g", e & 16, "assign"));
          g |= cc11001100_hook("g", e & 2, "assign");
          g !== f && oc(d, g);
          b = cc11001100_hook("b", new b(d), "assign");
        } else b = cc11001100_hook("b", void 0, "assign");
      } else b = cc11001100_hook("b", d, "assign");
      b !== d && null != b && Gc(a, 3, b, c);
      return Ic(b, a);
    },
    Mc = function (a) {
      var b = cc11001100_hook("b", Kc, "var-init");
      var c = cc11001100_hook("c", void 0 === c ? !1 : c, "var-init");
      b = cc11001100_hook("b", Jc(a, b, c), "assign");
      if (null == b) return b;
      if (!(nc(a.F) & 2)) {
        var d = cc11001100_hook("d", b, "var-init");
        if (nc(d.F) & 2) {
          var e = cc11001100_hook("e", Lc(d, !1), "var-init");
          e.Ne = cc11001100_hook("e.Ne", d, "assign");
          d = cc11001100_hook("d", e, "assign");
        }
        d !== b && (b = cc11001100_hook("b", d, "assign"), Gc(a, 3, b, c));
      }
      return Ic(b, a);
    },
    Oc = function (a, b) {
      return Nc(Fc(a, b), 0);
    },
    Pc = function (a, b) {
      D(null == b || "number" === typeof b, "Expected an uint32 value encoded as a number but got %s, a %s", b, Ea(b));
      Hc(a, 1, b);
    };
  function Nc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null == a ? b : a;
  }
  ;
  var Qc;
  function Rc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    D(!!(nc(b) & 16));
    Qc = cc11001100_hook("Qc", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    Qc = cc11001100_hook("Qc", void 0, "assign");
    return a;
  }
  ;
  function Vc(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (nc(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), xc(a), a;
        } else if (ic && null != a && a instanceof Uint8Array) {
          if (jc) {
            for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
            b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
            a = cc11001100_hook("a", btoa(b), "assign");
          } else a = cc11001100_hook("a", hc(a), "assign");
          return a;
        }
    }
    return a;
  }
  ;
  function Wc(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", e && 0 == a.length && nc(a) & 1 ? void 0 : Xc(a, b, c, void 0 !== d, e), "assign");else if (tc(a)) {
        var f = cc11001100_hook("f", {}, "var-init"),
          g;
        for (g in a) f[g] = cc11001100_hook("f[g]", Wc(a[g], b, c, d, e), "assign");
        a = cc11001100_hook("a", f, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }
  function Xc(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", nc(a), "var-init");
    d = cc11001100_hook("d", d ? !!(f & 16) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    for (var g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) a[g] = cc11001100_hook("a[g]", Wc(a[g], b, c, d, e), "assign");
    c(f, a);
    return a;
  }
  function Yc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.Ob === sc ? a.toJSON() : Vc(a);
  }
  function Zc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a & 128 && xc(b);
  }
  ;
  function $c(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", void 0 === c ? rc : c, "assign");
    if (null != a) {
      if (ic && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = cc11001100_hook("d", nc(a), "var-init");
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return oc(a, d | 18), a;
        a = cc11001100_hook("a", Xc(a, $c, d & 4 ? rc : c, !0, !1), "assign");
        b = cc11001100_hook("b", nc(a), "assign");
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      a.Ob === sc && (D(a.Ob === sc), nc(a.F) & 2 || (a = cc11001100_hook("a", Lc(a, !0), "assign"), lc(a.F, 18)));
      return a;
    }
  }
  function Lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    D(a.Ob === sc);
    var c = cc11001100_hook("c", a.F, "var-init"),
      d = cc11001100_hook("d", pc([]), "var-init"),
      e = cc11001100_hook("e", a.constructor.Eg, "var-init");
    e && d.push(e);
    e = cc11001100_hook("e", a.ja, "assign");
    if (e) {
      d.length = cc11001100_hook("d.length", c.length, "assign");
      var f = cc11001100_hook("f", {}, "var-init");
      d[d.length - 1] = cc11001100_hook("d[d.length - 1]", f, "assign");
    }
    0 !== (nc(c) & 128) && xc(d);
    b = cc11001100_hook("b", b || nc(a.F) & 2 ? rc : qc, "assign");
    d = cc11001100_hook("d", Rc(a.constructor, d), "assign");
    a.Oe && (d.Oe = cc11001100_hook("d.Oe", a.Oe.slice(), "assign"));
    f = cc11001100_hook("f", !!(nc(c) & 16), "assign");
    for (var g = cc11001100_hook("g", e ? c.length - 1 : c.length, "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < g; h++) Hc(d, h - a.Sa, $c(c[h], f, b), !1);
    if (e) for (var k in e) a = cc11001100_hook("a", e[k], "assign"), c = cc11001100_hook("c", +k, "assign"), D(!Number.isNaN(c), "should not have non-numeric keys in sparse objects after a constructor is called."), Hc(d, c, $c(a, f, b), !0);
    return d;
  }
  ;
  if ("undefined" !== typeof Proxy) {
    var bd = cc11001100_hook("bd", ad, "var-init");
    new Proxy({}, {
      getPrototypeOf: cc11001100_hook("getPrototypeOf", bd, "object-key-init"),
      setPrototypeOf: cc11001100_hook("setPrototypeOf", bd, "object-key-init"),
      isExtensible: cc11001100_hook("isExtensible", bd, "object-key-init"),
      preventExtensions: cc11001100_hook("preventExtensions", bd, "object-key-init"),
      getOwnPropertyDescriptor: cc11001100_hook("getOwnPropertyDescriptor", bd, "object-key-init"),
      defineProperty: cc11001100_hook("defineProperty", bd, "object-key-init"),
      has: cc11001100_hook("has", bd, "object-key-init"),
      get: cc11001100_hook("get", bd, "object-key-init"),
      set: cc11001100_hook("set", bd, "object-key-init"),
      deleteProperty: cc11001100_hook("deleteProperty", bd, "object-key-init"),
      apply: cc11001100_hook("apply", bd, "object-key-init"),
      construct: cc11001100_hook("construct", bd, "object-key-init")
    });
  }
  function ad() {
    throw Error("t");
    throw Error();
  }
  ;
  var cd = function (a, b, c, d) {
    kb(this, cd, "The message constructor should only be used by subclasses");
    D(this.constructor !== cd, "Message is an abstract class and cannot be directly constructed");
    null == a && (a = cc11001100_hook("a", Qc, "assign"));
    Qc = cc11001100_hook("Qc", void 0, "assign");
    var e = cc11001100_hook("e", this.constructor.Eg, "var-init");
    if (null == a) {
      a = cc11001100_hook("a", e ? [e] : [], "assign");
      var f = cc11001100_hook("f", 48, "var-init");
      var g = cc11001100_hook("g", !0, "var-init");
      d && (f |= cc11001100_hook("f", 128, "assign"));
      oc(a, f);
    } else {
      if (!Array.isArray(a)) throw Error("u`" + JSON.stringify(a) + "`" + Ea(a));
      if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("v");
      if (e && e !== a[0]) throw Error("w`" + e + "`" + JSON.stringify(a[0]) + "`" + Ea(a[0]));
      f = cc11001100_hook("f", lc(a, 0) | 32, "assign");
      g = cc11001100_hook("g", 0 !== (16 & f), "assign");
      if (d) {
        if (f |= cc11001100_hook("f", 128, "assign"), 0 < a.length) {
          var h = cc11001100_hook("h", a[a.length - 1], "var-init");
          if (tc(h) && "g" in h) {
            delete h.g;
            var k = cc11001100_hook("k", !0, "var-init"),
              l;
            for (l in h) {
              k = cc11001100_hook("k", !1, "assign");
              break;
            }
            k && a.pop();
          }
        }
      } else if (128 & f) throw Error();
      oc(a, f);
    }
    this.Sa = cc11001100_hook("this.Sa", e ? 0 : -1, "assign");
    this.F = cc11001100_hook("this.F", a, "assign");
    this.preventPassingToStructuredClone = cc11001100_hook("this.preventPassingToStructuredClone", wc, "assign");
    a: {
      f = cc11001100_hook("f", this.F.length, "assign");
      e = cc11001100_hook("e", f - 1, "assign");
      if (f && (f = cc11001100_hook("f", this.F[e], "assign"), tc(f))) {
        this.ja = cc11001100_hook("this.ja", f, "assign");
        this.tb = cc11001100_hook("this.tb", e - this.Sa, "assign");
        break a;
      }
      void 0 !== b && -1 < b ? (this.tb = cc11001100_hook("this.tb", Math.max(b, e + 1 - this.Sa), "assign"), this.ja = cc11001100_hook("this.ja", void 0, "assign")) : this.tb = cc11001100_hook("this.tb", Number.MAX_VALUE, "assign");
    }
    if (!d && this.ja && "g" in this.ja) throw Error("x");
    if (c) {
      b = cc11001100_hook("b", g && !0, "assign");
      d = cc11001100_hook("d", this.tb, "assign");
      var p;
      for (g = cc11001100_hook("g", 0, "assign"); g < c.length; g++) e = cc11001100_hook("e", c[g], "assign"), e < d ? (e += cc11001100_hook("e", this.Sa, "assign"), (f = cc11001100_hook("f", a[e], "assign")) ? dd(f, b) : a[e] = cc11001100_hook("a[e]", vc, "assign")) : (p || (p = cc11001100_hook("p", Ec(this), "assign")), (f = cc11001100_hook("f", p[e], "assign")) ? dd(f, b) : p[e] = cc11001100_hook("p[e]", vc, "assign"));
    }
    D(!!(nc(this.F) & 32));
  };
  m = cc11001100_hook("m", cd.prototype, "assign");
  m.toJSON = cc11001100_hook("m.toJSON", function () {
    var a = cc11001100_hook("a", this.F, "var-init");
    uc || (ib(a), a = cc11001100_hook("a", Xc(a, Yc, Zc, void 0, !1), "assign"));
    return a;
  }, "assign");
  m.wb = cc11001100_hook("m.wb", function () {
    uc = cc11001100_hook("uc", !0, "assign");
    try {
      return JSON.stringify(this.toJSON(), ed);
    } finally {
      uc = cc11001100_hook("uc", !1, "assign");
    }
  }, "assign");
  m.getExtension = cc11001100_hook("m.getExtension", function (a) {
    kb(this, a.ag);
    var b = cc11001100_hook("b", kb(this, cd), "var-init");
    return a.nd ? a.wc(b, a.nd, a.tc, !0) : a.Ue ? a.wc(b, a.tc, !0) : a.wc(b, a.tc, a.defaultValue, !0);
  }, "assign");
  m.hasExtension = cc11001100_hook("m.hasExtension", function (a) {
    D(!a.Ue, "repeated extensions don't support hasExtension");
    D(!a.Ue, "repeated extensions don't support getExtensionOrUndefined");
    kb(this, a.ag);
    var b = cc11001100_hook("b", kb(this, cd), "var-init");
    a = cc11001100_hook("a", a.nd ? a.wc(b, a.nd, a.tc, !0) : a.wc(b, a.tc, null, !0), "assign");
    return void 0 !== (null === a ? void 0 : a);
  }, "assign");
  m.clone = cc11001100_hook("m.clone", function () {
    var a = cc11001100_hook("a", kb(this, cd), "var-init");
    return Lc(a, !1);
  }, "assign");
  function dd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (Array.isArray(a)) {
      var c = cc11001100_hook("c", nc(a), "var-init"),
        d = cc11001100_hook("d", 1, "var-init");
      !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
      (c & d) !== d && oc(a, c | d);
    }
  }
  m.Ob = cc11001100_hook("m.Ob", sc, "assign");
  m.toString = cc11001100_hook("m.toString", function () {
    return this.F.toString();
  }, "assign");
  function ed(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Vc(b);
  }
  ;
  function fd(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a instanceof cd) return a.constructor.ob;
  }
  ;
  function gd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", void 0 === b ? new Set() : b, "assign");
    if (b.has(a)) return "(Recursive reference)";
    switch (typeof a) {
      case "object":
        if (a) {
          var c = cc11001100_hook("c", Object.getPrototypeOf(a), "var-init");
          switch (c) {
            case Map.prototype:
            case Set.prototype:
            case Array.prototype:
              b.add(a);
              var d = cc11001100_hook("d", "[" + Array.from(a, function (e) {
                return gd(e, b);
              }).join(", ") + "]", "var-init");
              b.delete(a);
              c !== Array.prototype && (d = cc11001100_hook("d", hd(c.constructor) + "(" + d + ")", "assign"));
              return d;
            case Object.prototype:
              return b.add(a), c = cc11001100_hook("c", "{" + Object.entries(a).map(function (e) {
                var f = cc11001100_hook("f", r(e), "var-init");
                e = cc11001100_hook("e", f.next().value, "assign");
                f = cc11001100_hook("f", f.next().value, "assign");
                return e + ": " + gd(f, b);
              }).join(", ") + "}", "assign"), b.delete(a), c;
            default:
              return d = cc11001100_hook("d", "Object", "assign"), c && c.constructor && (d = cc11001100_hook("d", hd(c.constructor), "assign")), "function" === typeof a.toString && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")";
          }
        }
        break;
      case "function":
        return "function " + hd(a);
      case "number":
        if (!Number.isFinite(a)) return String(a);
        break;
      case "bigint":
        return a.toString(10) + "n";
      case "symbol":
        return a.toString();
    }
    return JSON.stringify(a);
  }
  function hd(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.name, "var-init");
    b || (b = cc11001100_hook("b", (a = cc11001100_hook("a", /function\s+([^\(]+)/m.exec(String(a)), "assign")) ? a[1] : "(Anonymous)", "assign"));
    return b;
  }
  ;
  function id(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.Ee = cc11001100_hook("a.Ee", "function" === typeof b ? b : function () {
      return b;
    }, "assign");
    return a;
  }
  var jd = cc11001100_hook("jd", void 0, "var-init");
  (function () {
    var a = cc11001100_hook("a", Da.jspbGetTypeName, "var-init");
    Da.jspbGetTypeName = cc11001100_hook("Da.jspbGetTypeName", a ? function (b) {
      return a(b) || fd(b);
    } : fd, "assign");
  })();
  var kd = cc11001100_hook("kd", cd, "var-init");
  function ld(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      gb(a);
      if (null == b || "" == b) b = cc11001100_hook("b", kb(new a(), cd), "assign");else {
        fb(b);
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error("y`" + Ea(b) + "`" + b);
        b = cc11001100_hook("b", Rc(a, pc(b)), "assign");
      }
      return b;
    };
  }
  ;
  var md = function (a) {
    kd.call(this, a);
  };
  v(md, kd);
  var nd = cc11001100_hook("nd", ld(md), "var-init");
  md.ob = cc11001100_hook("md.ob", "ads.branding.measurement.client.serving.IntegratorMetadata", "assign");
  var od = function () {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36);
  };
  var pd = cc11001100_hook("pd", !Sb && !Bb(), "var-init"),
    qd = function (a, b) {
      if (/-[a-z]/.test(b)) return null;
      if (pd && a.dataset) {
        if (Db() && !(b in a.dataset)) return null;
        a = cc11001100_hook("a", a.dataset[b], "assign");
        return void 0 === a ? null : a;
      }
      return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase());
    }; /*
       Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */
  var rd = cc11001100_hook("rd", !1, "var-init"),
    sd = cc11001100_hook("sd", {
      set qa(a) {
        a ? console.warn("A`" + Error().stack) : rd && console.log("B");
        rd = cc11001100_hook("rd", a, "assign");
      },
      get qa() {
        return rd;
      }
    }, "var-init");
  var td = cc11001100_hook("td", "function" === typeof Symbol && Symbol.observable || "@@observable", "var-init");
  function ud(a) {
    cc11001100_hook("a", a, "function-parameter");
    setTimeout(function () {
      throw a;
    }, 0);
  }
  ;
  var vd = cc11001100_hook("vd", {
    closed: cc11001100_hook("closed", !0, "object-key-init"),
    next: function () {},
    error: function (a) {
      if (sd.qa) throw a;
      ud(a);
    },
    complete: function () {}
  }, "var-init");
  var wd = cc11001100_hook("wd", function () {
    function a(b) {
      cc11001100_hook("b", b, "function-parameter");
      this.message = cc11001100_hook("this.message", b ? b.length + " errors occurred during unsubscription:\n" + b.map(function (c, d) {
        return d + 1 + ") " + c.toString();
      }).join("\n  ") : "", "assign");
      this.name = cc11001100_hook("this.name", "UnsubscriptionError", "assign");
      this.errors = cc11001100_hook("this.errors", b, "assign");
      return this;
    }
    a.prototype = cc11001100_hook("a.prototype", Object.create(Error.prototype), "assign");
    return a;
  }(), "var-init");
  var xd = cc11001100_hook("xd", Array.isArray || function (a) {
    return a && "number" === typeof a.length;
  }, "var-init");
  function yd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "function" === typeof a;
  }
  ;
  function zd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a;
  }
  ;
  var H = function (a) {
    this.closed = cc11001100_hook("this.closed", !1, "assign");
    this.ib = cc11001100_hook("this.ib", this.yb = cc11001100_hook("this.yb", null, "assign"), "assign");
    a && (this.uf = cc11001100_hook("this.uf", !0, "assign"), this.xa = cc11001100_hook("this.xa", a, "assign"));
  };
  H.prototype.unsubscribe = cc11001100_hook("H.prototype.unsubscribe", function () {
    if (!this.closed) {
      var a = cc11001100_hook("a", this.yb, "var-init"),
        b = cc11001100_hook("b", this.uf, "var-init"),
        c = cc11001100_hook("c", this.xa, "var-init"),
        d = cc11001100_hook("d", this.ib, "var-init");
      this.closed = cc11001100_hook("this.closed", !0, "assign");
      this.ib = cc11001100_hook("this.ib", this.yb = cc11001100_hook("this.yb", null, "assign"), "assign");
      if (a instanceof H) a.remove(this);else if (null !== a) for (var e = cc11001100_hook("e", 0, "var-init"); e < a.length; ++e) a[e].remove(this);
      if (yd(c)) {
        b && (this.xa = cc11001100_hook("this.xa", void 0, "assign"));
        try {
          c.call(this);
        } catch (k) {
          var f = cc11001100_hook("f", k instanceof wd ? Ad(k.errors) : [k], "var-init");
        }
      }
      if (xd(d)) {
        e = cc11001100_hook("e", -1, "assign");
        for (var g = cc11001100_hook("g", d.length, "var-init"); ++e < g;) {
          var h = cc11001100_hook("h", d[e], "var-init");
          if (zd(h)) try {
            h.unsubscribe();
          } catch (k) {
            f = cc11001100_hook("f", f || [], "assign"), k instanceof wd ? f = cc11001100_hook("f", f.concat(Ad(k.errors)), "assign") : f.push(k);
          }
        }
      }
      if (f) throw new wd(f);
    }
  }, "assign");
  H.prototype.add = cc11001100_hook("H.prototype.add", function (a) {
    var b = cc11001100_hook("b", a, "var-init");
    if (!a) return H.EMPTY;
    switch (typeof a) {
      case "function":
        b = cc11001100_hook("b", new H(a), "assign");
      case "object":
        if (b === this || b.closed || "function" !== typeof b.unsubscribe) return b;
        if (this.closed) return b.unsubscribe(), b;
        b instanceof H || (a = cc11001100_hook("a", b, "assign"), b = cc11001100_hook("b", new H(), "assign"), b.ib = cc11001100_hook("b.ib", [a], "assign"));
        break;
      default:
        throw Error("C`" + a);
    }
    var c = cc11001100_hook("c", b.yb, "var-init");
    if (null === c) b.yb = cc11001100_hook("b.yb", this, "assign");else if (c instanceof H) {
      if (c === this) return b;
      b.yb = cc11001100_hook("b.yb", [c, this], "assign");
    } else if (-1 === c.indexOf(this)) c.push(this);else return b;
    a = cc11001100_hook("a", this.ib, "assign");
    null === a ? this.ib = cc11001100_hook("this.ib", [b], "assign") : a.push(b);
    return b;
  }, "assign");
  H.prototype.remove = cc11001100_hook("H.prototype.remove", function (a) {
    var b = cc11001100_hook("b", this.ib, "var-init");
    b && (a = cc11001100_hook("a", b.indexOf(a), "assign"), -1 !== a && b.splice(a, 1));
  }, "assign");
  var Bd = cc11001100_hook("Bd", new H(), "var-init");
  Bd.closed = cc11001100_hook("Bd.closed", !0, "assign");
  H.EMPTY = cc11001100_hook("H.EMPTY", Bd, "assign");
  function Cd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof H || a && "closed" in a && "function" === typeof a.remove && "function" === typeof a.add && "function" === typeof a.unsubscribe;
  }
  function Ad(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.reduce(function (b, c) {
      return b.concat(c instanceof wd ? c.errors : c);
    }, []);
  }
  ;
  var I = function (a, b, c) {
    H.call(this);
    this.Oc = cc11001100_hook("this.Oc", null, "assign");
    this.B = cc11001100_hook("this.B", this.ea = cc11001100_hook("this.ea", this.Nc = cc11001100_hook("this.Nc", !1, "assign"), "assign"), "assign");
    switch (arguments.length) {
      case 0:
        this.destination = cc11001100_hook("this.destination", vd, "assign");
        break;
      case 1:
        if (!a) {
          this.destination = cc11001100_hook("this.destination", vd, "assign");
          break;
        }
        if ("object" === typeof a) {
          a instanceof I ? (this.ea = cc11001100_hook("this.ea", a.ea, "assign"), this.destination = cc11001100_hook("this.destination", a, "assign"), a.add(this)) : (this.ea = cc11001100_hook("this.ea", !0, "assign"), this.destination = cc11001100_hook("this.destination", new Dd(this, a), "assign"));
          break;
        }
      default:
        this.ea = cc11001100_hook("this.ea", !0, "assign"), this.destination = cc11001100_hook("this.destination", new Dd(this, a, b, c), "assign");
    }
  };
  v(I, H);
  I.EMPTY = cc11001100_hook("I.EMPTY", H.EMPTY, "assign");
  I.create = cc11001100_hook("I.create", function (a, b, c) {
    a = cc11001100_hook("a", new I(a, b, c), "assign");
    a.ea = cc11001100_hook("a.ea", !1, "assign");
    return a;
  }, "assign");
  m = cc11001100_hook("m", I.prototype, "assign");
  m.next = cc11001100_hook("m.next", function (a) {
    this.B || this.o(a);
  }, "assign");
  m.error = cc11001100_hook("m.error", function (a) {
    this.B || (this.B = cc11001100_hook("this.B", !0, "assign"), this.U(a));
  }, "assign");
  m.complete = cc11001100_hook("m.complete", function () {
    this.B || (this.B = cc11001100_hook("this.B", !0, "assign"), this.A());
  }, "assign");
  m.unsubscribe = cc11001100_hook("m.unsubscribe", function () {
    this.closed || (this.B = cc11001100_hook("this.B", !0, "assign"), H.prototype.unsubscribe.call(this));
  }, "assign");
  m.o = cc11001100_hook("m.o", function (a) {
    this.destination.next(a);
  }, "assign");
  m.U = cc11001100_hook("m.U", function (a) {
    this.destination.error(a);
    this.unsubscribe();
  }, "assign");
  m.A = cc11001100_hook("m.A", function () {
    this.destination.complete();
    this.unsubscribe();
  }, "assign");
  var Dd = function (a, b, c, d) {
    I.call(this);
    this.zb = cc11001100_hook("this.zb", a, "assign");
    var e = cc11001100_hook("e", this, "var-init");
    if (yd(b)) var f = cc11001100_hook("f", b, "var-init");else b && (f = cc11001100_hook("f", b.next, "assign"), c = cc11001100_hook("c", b.error, "assign"), d = cc11001100_hook("d", b.complete, "assign"), b !== vd && (e = cc11001100_hook("e", Object.create(b), "assign"), Cd(b) && b.add(this.unsubscribe.bind(this)), e.unsubscribe = cc11001100_hook("e.unsubscribe", this.unsubscribe.bind(this), "assign")));
    this.wa = cc11001100_hook("this.wa", e, "assign");
    this.o = cc11001100_hook("this.o", f, "assign");
    this.U = cc11001100_hook("this.U", c, "assign");
    this.A = cc11001100_hook("this.A", d, "assign");
  };
  v(Dd, I);
  Dd.EMPTY = cc11001100_hook("Dd.EMPTY", I.EMPTY, "assign");
  Dd.create = cc11001100_hook("Dd.create", I.create, "assign");
  m = cc11001100_hook("m", Dd.prototype, "assign");
  m.next = cc11001100_hook("m.next", function (a) {
    if (!this.B && this.o) {
      var b = cc11001100_hook("b", this.zb, "var-init");
      sd.qa && b.ea ? this.Vc(b, this.o, a) && this.unsubscribe() : this.Wc(this.o, a);
    }
  }, "assign");
  m.error = cc11001100_hook("m.error", function (a) {
    if (!this.B) {
      var b = cc11001100_hook("b", this.zb, "var-init"),
        c = cc11001100_hook("c", sd.qa, "var-init");
      if (this.U) c && b.ea ? this.Vc(b, this.U, a) : this.Wc(this.U, a), this.unsubscribe();else if (b.ea) c ? (b.Oc = cc11001100_hook("b.Oc", a, "assign"), b.Nc = cc11001100_hook("b.Nc", !0, "assign")) : ud(a), this.unsubscribe();else {
        this.unsubscribe();
        if (c) throw a;
        ud(a);
      }
    }
  }, "assign");
  m.complete = cc11001100_hook("m.complete", function () {
    var a = cc11001100_hook("a", this, "var-init");
    if (!this.B) {
      var b = cc11001100_hook("b", this.zb, "var-init");
      if (this.A) {
        var c = function () {
          return a.A.call(a.wa);
        };
        sd.qa && b.ea ? this.Vc(b, c) : this.Wc(c);
      }
      this.unsubscribe();
    }
  }, "assign");
  m.Wc = cc11001100_hook("m.Wc", function (a, b) {
    try {
      a.call(this.wa, b);
    } catch (c) {
      this.unsubscribe();
      if (sd.qa) throw c;
      ud(c);
    }
  }, "assign");
  m.Vc = cc11001100_hook("m.Vc", function (a, b, c) {
    if (!sd.qa) throw Error("D");
    try {
      b.call(this.wa, c);
    } catch (d) {
      return sd.qa ? (a.Oc = cc11001100_hook("a.Oc", d, "assign"), a.Nc = cc11001100_hook("a.Nc", !0, "assign")) : ud(d), !0;
    }
    return !1;
  }, "assign");
  m.xa = cc11001100_hook("m.xa", function () {
    var a = cc11001100_hook("a", this.zb, "var-init");
    this.zb = cc11001100_hook("this.zb", this.wa = cc11001100_hook("this.wa", null, "assign"), "assign");
    a.unsubscribe();
  }, "assign");
  function Ed(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  ;
  function J() {
    return Fd(x.apply(0, arguments));
  }
  function Fd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 === a.length ? Ed : 1 === a.length ? a[0] : function (b) {
      return a.reduce(function (c, d) {
        return d(c);
      }, b);
    };
  }
  ;
  function Gd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a && "function" === typeof a.next && "function" === typeof a.error && "function" === typeof a.complete;
  }
  var Hd = function (a) {
    I.call(this);
    this.destination = cc11001100_hook("this.destination", a, "assign");
  };
  v(Hd, I);
  Hd.EMPTY = cc11001100_hook("Hd.EMPTY", I.EMPTY, "assign");
  Hd.create = cc11001100_hook("Hd.create", I.create, "assign");
  var K = function (a) {
    a && (this.Y = cc11001100_hook("this.Y", a, "assign"));
  };
  m = cc11001100_hook("m", K.prototype, "assign");
  m.pb = cc11001100_hook("m.pb", function (a) {
    var b = cc11001100_hook("b", new K(), "var-init");
    b.source = cc11001100_hook("b.source", this, "assign");
    b.operator = cc11001100_hook("b.operator", a, "assign");
    return b;
  }, "assign");
  m.subscribe = cc11001100_hook("m.subscribe", function (a, b, c) {
    var d = cc11001100_hook("d", this.operator, "var-init");
    a: {
      if (a) {
        if (a instanceof I || Gd(a) && Cd(a)) break a;
        if (Gd(a)) {
          a = cc11001100_hook("a", new Hd(a), "assign");
          break a;
        }
      }
      a = cc11001100_hook("a", a || b || c ? new I(a, b, c) : new I(vd), "assign");
    }
    d ? a.add(d.call(a, this.source)) : a.add(this.source || sd.qa && !a.ea ? this.Y(a) : this.bd(a));
    if (sd.qa && a.ea && (a.ea = cc11001100_hook("a.ea", !1, "assign"), a.Nc)) throw a.Oc;
    return a;
  }, "assign");
  m.bd = cc11001100_hook("m.bd", function (a) {
    try {
      return this.Y(a);
    } catch (e) {
      sd.qa && (a.Nc = cc11001100_hook("a.Nc", !0, "assign"), a.Oc = cc11001100_hook("a.Oc", e, "assign"));
      var b;
      a: {
        for (b = cc11001100_hook("b", a, "assign"); b;) {
          var c = cc11001100_hook("c", b.destination, "var-init"),
            d = cc11001100_hook("d", b.B, "var-init");
          if (b.closed || d) {
            b = cc11001100_hook("b", !1, "assign");
            break a;
          }
          b = cc11001100_hook("b", c && c instanceof I ? c : null, "assign");
        }
        b = cc11001100_hook("b", !0, "assign");
      }
      b ? a.error(e) : console.warn(e);
    }
  }, "assign");
  m.forEach = cc11001100_hook("m.forEach", function (a, b) {
    var c = cc11001100_hook("c", this, "var-init");
    b = cc11001100_hook("b", Id(b), "assign");
    return new b(function (d, e) {
      var f = cc11001100_hook("f", c.subscribe(function (g) {
        try {
          a(g);
        } catch (h) {
          e(h), f && f.unsubscribe();
        }
      }, e, d), "var-init");
    });
  }, "assign");
  m.Y = cc11001100_hook("m.Y", function (a) {
    var b = cc11001100_hook("b", this.source, "var-init");
    return b && b.subscribe(a);
  }, "assign");
  K.prototype[td] = cc11001100_hook("K.prototype[td]", function () {
    return this;
  }, "assign");
  K.prototype.h = cc11001100_hook("K.prototype.h", function () {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init");
    return 0 === a.length ? this : Fd(a)(this);
  }, "assign");
  K.create = cc11001100_hook("K.create", function (a) {
    return new K(a);
  }, "assign");
  function Id(a) {
    cc11001100_hook("a", a, "function-parameter");
    a || (a = cc11001100_hook("a", Promise, "assign"));
    if (!a) throw Error("E");
    return a;
  }
  ;
  var Jd = cc11001100_hook("Jd", "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator", "var-init");
  var Kd = function (a) {
    return a && "number" === typeof a.length && "function" !== typeof a;
  };
  function Ld(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a && "function" !== typeof a.subscribe && "function" === typeof a.then;
  }
  ;
  var Md = function (a) {
    return function (b) {
      for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length, "var-init"); c < d && !b.closed; c++) b.next(a[c]);
      b.complete();
    };
  };
  function Nd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      Od(a, b).catch(function (c) {
        return b.error(c);
      });
    };
  }
  function Od(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d, e, f, g, h;
    return za(new ya(new ua(function (k) {
      switch (k.ca) {
        case 1:
          k.Ta = cc11001100_hook("k.Ta", 2, "assign");
          k.za = cc11001100_hook("k.za", 3, "assign");
          var l = cc11001100_hook("l", a[Symbol.asyncIterator], "var-init");
          f = cc11001100_hook("f", void 0 !== l ? l.call(a) : new Aa(r(a)), "assign");
        case 5:
          return l = cc11001100_hook("l", f.next(), "assign"), k.ca = cc11001100_hook("k.ca", 8, "assign"), {
            value: cc11001100_hook("value", l, "object-key-init")
          };
        case 8:
          d = cc11001100_hook("d", k.fe, "assign");
          if (d.done) {
            k.Za(3);
            break;
          }
          g = cc11001100_hook("g", d.value, "assign");
          b.next(g);
          k.Za(5);
          break;
        case 3:
          k.ud = cc11001100_hook("k.ud", [k.Z], "assign");
          k.Ta = cc11001100_hook("k.Ta", 0, "assign");
          k.za = cc11001100_hook("k.za", 0, "assign");
          k.Ta = cc11001100_hook("k.Ta", 0, "assign");
          k.za = cc11001100_hook("k.za", 9, "assign");
          if (!d || d.done || !(e = cc11001100_hook("e", f.return, "assign"))) {
            k.Za(9);
            break;
          }
          l = cc11001100_hook("l", e.call(f), "assign");
          k.ca = cc11001100_hook("k.ca", 9, "assign");
          return {
            value: cc11001100_hook("value", l, "object-key-init")
          };
        case 9:
          k.ud[1] = cc11001100_hook("k.ud[1]", k.Z, "assign");
          k.Ta = cc11001100_hook("k.Ta", 0, "assign");
          k.za = cc11001100_hook("k.za", 0, "assign");
          if (c) throw c.error;
          sa(k, 10, 1);
          break;
        case 10:
          sa(k, 4);
          break;
        case 2:
          k.Ta = cc11001100_hook("k.Ta", 0, "assign");
          l = cc11001100_hook("l", k.Z.ze, "assign");
          k.Z = cc11001100_hook("k.Z", null, "assign");
          h = cc11001100_hook("h", l, "assign");
          c = cc11001100_hook("c", {
            error: cc11001100_hook("error", h, "object-key-init")
          }, "assign");
          k.Za(3);
          break;
        case 4:
          b.complete(), k.ca = cc11001100_hook("k.ca", 0, "assign");
      }
    })));
  }
  ;
  var Pd = function (a) {
    return function (b) {
      var c = cc11001100_hook("c", a[Jd](), "var-init");
      do {
        var d = cc11001100_hook("d", void 0, "var-init");
        try {
          d = cc11001100_hook("d", c.next(), "assign");
        } catch (e) {
          b.error(e);
          return;
        }
        if (d.done) {
          b.complete();
          break;
        }
        b.next(d.value);
        if (b.closed) break;
      } while (1);
      "function" === typeof c.return && b.add(function () {
        c.return && c.return();
      });
      return b;
    };
  };
  var Qd = function (a) {
    return function (b) {
      var c = cc11001100_hook("c", a[td](), "var-init");
      if ("function" !== typeof c.subscribe) throw new TypeError("F");
      return c.subscribe(b);
    };
  };
  var Rd = function (a) {
    return function (b) {
      a.then(function (c) {
        b.closed || (b.next(c), b.complete());
      }, function (c) {
        return b.error(c);
      }).then(null, ud);
      return b;
    };
  };
  var Sd = function (a) {
    if (a && "function" === typeof a[td]) return Qd(a);
    if (Kd(a)) return Md(a);
    if (Ld(a)) return Rd(a);
    if (a && "function" === typeof a[Jd]) return Pd(a);
    if (Symbol && Symbol.asyncIterator && a && "function" === typeof a[Symbol.asyncIterator]) return Nd(a);
    throw new TypeError("G`" + (zd(a) ? "an invalid object" : "'" + a + "'"));
  };
  var Td = function (a) {
    I.call(this);
    this.parent = cc11001100_hook("this.parent", a, "assign");
  };
  v(Td, I);
  Td.EMPTY = cc11001100_hook("Td.EMPTY", I.EMPTY, "assign");
  Td.create = cc11001100_hook("Td.create", I.create, "assign");
  Td.prototype.o = cc11001100_hook("Td.prototype.o", function (a) {
    this.parent.ta(a);
  }, "assign");
  Td.prototype.U = cc11001100_hook("Td.prototype.U", function (a) {
    this.parent.Pa(a);
    this.unsubscribe();
  }, "assign");
  Td.prototype.A = cc11001100_hook("Td.prototype.A", function () {
    this.parent.R();
    this.unsubscribe();
  }, "assign");
  var Ud = function (a, b, c) {
    I.call(this);
    this.parent = cc11001100_hook("this.parent", a, "assign");
    this.bf = cc11001100_hook("this.bf", b, "assign");
    this.Tg = cc11001100_hook("this.Tg", c, "assign");
  };
  v(Ud, I);
  Ud.EMPTY = cc11001100_hook("Ud.EMPTY", I.EMPTY, "assign");
  Ud.create = cc11001100_hook("Ud.create", I.create, "assign");
  Ud.prototype.o = cc11001100_hook("Ud.prototype.o", function (a) {
    this.parent.ta(this.bf, a, this.Tg, this);
  }, "assign");
  Ud.prototype.U = cc11001100_hook("Ud.prototype.U", function (a) {
    this.parent.Pa(a);
    this.unsubscribe();
  }, "assign");
  Ud.prototype.A = cc11001100_hook("Ud.prototype.A", function () {
    this.parent.R(this);
    this.unsubscribe();
  }, "assign");
  var L = function () {
    I.apply(this, arguments);
  };
  v(L, I);
  L.EMPTY = cc11001100_hook("L.EMPTY", I.EMPTY, "assign");
  L.create = cc11001100_hook("L.create", I.create, "assign");
  L.prototype.ta = cc11001100_hook("L.prototype.ta", function (a) {
    this.destination.next(a);
  }, "assign");
  L.prototype.Pa = cc11001100_hook("L.prototype.Pa", function (a) {
    this.destination.error(a);
  }, "assign");
  L.prototype.R = cc11001100_hook("L.prototype.R", function () {
    this.destination.complete();
  }, "assign");
  var M = function () {
    I.apply(this, arguments);
  };
  v(M, I);
  M.EMPTY = cc11001100_hook("M.EMPTY", I.EMPTY, "assign");
  M.create = cc11001100_hook("M.create", I.create, "assign");
  M.prototype.ta = cc11001100_hook("M.prototype.ta", function (a, b) {
    this.destination.next(b);
  }, "assign");
  M.prototype.Pa = cc11001100_hook("M.prototype.Pa", function (a) {
    this.destination.error(a);
  }, "assign");
  M.prototype.R = cc11001100_hook("M.prototype.R", function () {
    this.destination.complete();
  }, "assign");
  function Vd(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!b.closed) return a instanceof K ? a.subscribe(b) : Sd(a)(b);
  }
  ;
  function O(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a && "function" === typeof a.pb) return a.pb(b);
    throw new TypeError("H");
  }
  ;
  var Wd = function () {
    H.call(this);
  };
  v(Wd, H);
  Wd.EMPTY = cc11001100_hook("Wd.EMPTY", H.EMPTY, "assign");
  Wd.prototype.u = cc11001100_hook("Wd.prototype.u", function () {
    return this;
  }, "assign");
  var Yd = function (a, b) {
      var c = cc11001100_hook("c", x.apply(2, arguments), "var-init");
      return (null == Xd ? 0 : Xd.setInterval) ? Xd.setInterval.apply(Xd, [a, b].concat(u(c))) : setInterval.apply(null, [a, b].concat(u(c)));
    },
    Xd = cc11001100_hook("Xd", void 0, "var-init");
  var Zd = function (a, b) {
    H.call(this);
    this.da = cc11001100_hook("this.da", a, "assign");
    this.Uc = cc11001100_hook("this.Uc", b, "assign");
    this.pending = cc11001100_hook("this.pending", !1, "assign");
  };
  v(Zd, Wd);
  Zd.EMPTY = cc11001100_hook("Zd.EMPTY", Wd.EMPTY, "assign");
  m = cc11001100_hook("m", Zd.prototype, "assign");
  m.u = cc11001100_hook("m.u", function (a, b) {
    b = cc11001100_hook("b", void 0 === b ? 0 : b, "assign");
    if (this.closed) return this;
    this.state = cc11001100_hook("this.state", a, "assign");
    a = cc11001100_hook("a", this.id, "assign");
    var c = cc11001100_hook("c", this.da, "var-init");
    null != a && (this.id = cc11001100_hook("this.id", this.Rb(c, a, b), "assign"));
    this.pending = cc11001100_hook("this.pending", !0, "assign");
    this.delay = cc11001100_hook("this.delay", b, "assign");
    this.id = cc11001100_hook("this.id", this.id || this.Sb(c, this.id, b), "assign");
    return this;
  }, "assign");
  m.Sb = cc11001100_hook("m.Sb", function (a, b, c) {
    return Yd(a.flush.bind(a, this), void 0 === c ? 0 : c);
  }, "assign");
  m.Rb = cc11001100_hook("m.Rb", function (a, b, c) {
    c = cc11001100_hook("c", void 0 === c ? 0 : c, "assign");
    if (null !== c && this.delay === c && !1 === this.pending) return b;
    ((null == Xd ? void 0 : Xd.clearInterval) || clearInterval)(b);
  }, "assign");
  m.execute = cc11001100_hook("m.execute", function (a, b) {
    if (this.closed) return Error("I");
    this.pending = cc11001100_hook("this.pending", !1, "assign");
    if (a = cc11001100_hook("a", this.he(a, b), "assign")) return a;
    !1 === this.pending && null != this.id && (this.id = cc11001100_hook("this.id", this.Rb(this.da, this.id, null), "assign"));
  }, "assign");
  m.he = cc11001100_hook("m.he", function (a) {
    var b = cc11001100_hook("b", !1, "var-init"),
      c = cc11001100_hook("c", void 0, "var-init");
    try {
      this.Uc(a);
    } catch (d) {
      b = cc11001100_hook("b", !0, "assign"), c = cc11001100_hook("c", !!d && d || Error(d), "assign");
    }
    if (b) return this.unsubscribe(), c;
  }, "assign");
  m.xa = cc11001100_hook("m.xa", function () {
    var a = cc11001100_hook("a", this.id, "var-init"),
      b = cc11001100_hook("b", this.da, "var-init"),
      c = cc11001100_hook("c", b.actions, "var-init"),
      d = cc11001100_hook("d", c.indexOf(this), "var-init");
    this.state = cc11001100_hook("this.state", this.Uc = cc11001100_hook("this.Uc", null, "assign"), "assign");
    this.pending = cc11001100_hook("this.pending", !1, "assign");
    this.da = cc11001100_hook("this.da", null, "assign");
    -1 !== d && c.splice(d, 1);
    null != a && (this.id = cc11001100_hook("this.id", this.Rb(b, a, null), "assign"));
    this.delay = cc11001100_hook("this.delay", null, "assign");
  }, "assign");
  var $d = cc11001100_hook("$d", {
    now: function () {
      return ($d.Sf || Date).now();
    },
    Sf: cc11001100_hook("Sf", void 0, "object-key-init")
  }, "var-init");
  var be = function (a, b) {
    b = cc11001100_hook("b", void 0 === b ? ae : b, "assign");
    this.tf = cc11001100_hook("this.tf", a, "assign");
    this.now = cc11001100_hook("this.now", b, "assign");
  };
  be.prototype.u = cc11001100_hook("be.prototype.u", function (a, b, c) {
    b = cc11001100_hook("b", void 0 === b ? 0 : b, "assign");
    return new this.tf(this, a).u(c, b);
  }, "assign");
  var ae = cc11001100_hook("ae", $d.now, "var-init");
  var ce = function (a, b) {
    b = cc11001100_hook("b", void 0 === b ? ae : b, "assign");
    be.call(this, a, b);
    this.actions = cc11001100_hook("this.actions", [], "assign");
    this.active = cc11001100_hook("this.active", !1, "assign");
    this.Mc = cc11001100_hook("this.Mc", void 0, "assign");
  };
  v(ce, be);
  ce.prototype.flush = cc11001100_hook("ce.prototype.flush", function (a) {
    var b = cc11001100_hook("b", this.actions, "var-init");
    if (this.active) b.push(a);else {
      var c;
      this.active = cc11001100_hook("this.active", !0, "assign");
      do if (c = cc11001100_hook("c", a.execute(a.state, a.delay), "assign")) break; while (a = cc11001100_hook("a", b.shift(), "assign"));
      this.active = cc11001100_hook("this.active", !1, "assign");
      if (c) {
        for (; a = cc11001100_hook("a", b.shift(), "assign");) a.unsubscribe();
        throw c;
      }
    }
  }, "assign");
  function de(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a && "function" === typeof a.u;
  }
  ;
  function ee(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new K(function (c) {
      var d = cc11001100_hook("d", new H(), "var-init"),
        e = cc11001100_hook("e", 0, "var-init");
      d.add(b.u(function () {
        e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.u()));
      }));
      return d;
    });
  }
  ;
  function fe(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) throw Error("J");
    return new K(function (c) {
      var d = cc11001100_hook("d", new H(), "var-init");
      d.add(b.u(function () {
        var e = cc11001100_hook("e", a[Symbol.asyncIterator](), "var-init");
        d.add(b.u(function () {
          var f = cc11001100_hook("f", this, "var-init");
          e.next().then(function (g) {
            g.done ? c.complete() : (c.next(g.value), f.u());
          });
        }));
      }));
      return d;
    });
  }
  ;
  function ge(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) throw Error("J");
    return new K(function (c) {
      var d = cc11001100_hook("d", new H(), "var-init"),
        e;
      d.add(function () {
        e && "function" === typeof e.return && e.return();
      });
      d.add(b.u(function () {
        e = cc11001100_hook("e", a[Jd](), "assign");
        d.add(b.u(function () {
          if (!c.closed) {
            try {
              var f = cc11001100_hook("f", e.next(), "var-init");
              var g = cc11001100_hook("g", f.value, "var-init");
              var h = cc11001100_hook("h", f.done, "var-init");
            } catch (k) {
              c.error(k);
              return;
            }
            h ? c.complete() : (c.next(g), this.u());
          }
        }));
      }));
      return d;
    });
  }
  ;
  function he(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new K(function (c) {
      var d = cc11001100_hook("d", new H(), "var-init");
      d.add(b.u(function () {
        var e = cc11001100_hook("e", a[td](), "var-init");
        d.add(e.subscribe({
          next: function (f) {
            d.add(b.u(function () {
              return c.next(f);
            }));
          },
          error: function (f) {
            d.add(b.u(function () {
              return c.error(f);
            }));
          },
          complete: function () {
            d.add(b.u(function () {
              return c.complete();
            }));
          }
        }));
      }));
      return d;
    });
  }
  ;
  function ie(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new K(function (c) {
      var d = cc11001100_hook("d", new H(), "var-init");
      d.add(b.u(function () {
        return a.then(function (e) {
          d.add(b.u(function () {
            c.next(e);
            d.add(b.u(function () {
              return c.complete();
            }));
          }));
        }, function (e) {
          d.add(b.u(function () {
            return c.error(e);
          }));
        });
      }));
      return d;
    });
  }
  ;
  function je(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", ke, "var-init");
    if (null != a) {
      if (a && "function" === typeof a[td]) return he(a, b);
      if (Ld(a)) return ie(a, b);
      if (Kd(a)) return ee(a, b);
      if (a && "function" === typeof a[Jd] || "string" === typeof a) return ge(a, b);
      if (Symbol && Symbol.asyncIterator && "function" === typeof a[Symbol.asyncIterator]) return fe(a, b);
    }
    throw new TypeError("K`" + (null !== a && typeof a || a));
  }
  ;
  function le(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof K ? a : new K(Sd(a));
  }
  ;
  function me(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return O(b, function (c) {
        var d = cc11001100_hook("d", this, "var-init"),
          e = cc11001100_hook("e", new H(), "var-init"),
          f = cc11001100_hook("f", null, "var-init"),
          g = cc11001100_hook("g", !1, "var-init"),
          h;
        f = cc11001100_hook("f", c.subscribe({
          next: function (k) {
            return d.next(k);
          },
          error: function (k) {
            try {
              h = cc11001100_hook("h", le(a(k, me(a)(c))), "assign");
            } catch (l) {
              d.error(l);
            }
            h && (f ? (f.unsubscribe(), f = cc11001100_hook("f", null, "assign"), e.add(h.subscribe(d))) : g = cc11001100_hook("g", !0, "assign"));
          },
          complete: function () {
            return d.complete();
          }
        }), "assign");
        g ? (f.unsubscribe(), f = cc11001100_hook("f", null, "assign"), e.add(h.subscribe(d))) : e.add(f);
        return e;
      });
    };
  }
  ;
  function ne(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b ? ee(a, b) : new K(Md(a));
  }
  ;
  var oe = cc11001100_hook("oe", {}, "var-init");
  function P() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init"),
      b = cc11001100_hook("b", void 0, "var-init"),
      c = cc11001100_hook("c", void 0, "var-init"),
      d = cc11001100_hook("d", void 0, "var-init");
    de(a[a.length - 1]) && (c = cc11001100_hook("c", a.pop(), "assign"));
    "function" === typeof a[a.length - 1] && (b = cc11001100_hook("b", a.pop(), "assign"));
    if (1 === a.length) {
      var e = cc11001100_hook("e", a[0], "var-init");
      xd(e) && (a = cc11001100_hook("a", e, "assign"));
      zd(e) && Object.getPrototypeOf(e) === Object.prototype && (d = cc11001100_hook("d", Object.keys(e), "assign"), a = cc11001100_hook("a", d.map(function (f) {
        return e[f];
      }), "assign"));
    }
    return O(ne(a, c), new pe(b, d));
  }
  var pe = function (a, b) {
    this.Lc = cc11001100_hook("this.Lc", a, "assign");
    this.keys = cc11001100_hook("this.keys", b, "assign");
  };
  pe.prototype.call = cc11001100_hook("pe.prototype.call", function (a, b) {
    return b.subscribe(new qe(a, this.Lc, this.keys));
  }, "assign");
  var qe = function (a, b, c) {
    M.call(this, a);
    this.Lc = cc11001100_hook("this.Lc", b, "assign");
    this.keys = cc11001100_hook("this.keys", c, "assign");
    this.active = cc11001100_hook("this.active", 0, "assign");
    this.values = cc11001100_hook("this.values", [], "assign");
    this.Qa = cc11001100_hook("this.Qa", [], "assign");
  };
  v(qe, M);
  qe.EMPTY = cc11001100_hook("qe.EMPTY", M.EMPTY, "assign");
  qe.create = cc11001100_hook("qe.create", M.create, "assign");
  m = cc11001100_hook("m", qe.prototype, "assign");
  m.o = cc11001100_hook("m.o", function (a) {
    this.values.push(oe);
    this.Qa.push(a);
  }, "assign");
  m.A = cc11001100_hook("m.A", function () {
    var a = cc11001100_hook("a", this.Qa, "var-init"),
      b = cc11001100_hook("b", a.length, "var-init");
    if (0 === b) this.destination.complete();else {
      this.gb = cc11001100_hook("this.gb", this.active = cc11001100_hook("this.active", b, "assign"), "assign");
      for (var c = cc11001100_hook("c", 0, "var-init"); c < b; c++) this.add(Vd(a[c], new Ud(this, null, c)));
    }
  }, "assign");
  m.R = cc11001100_hook("m.R", function () {
    0 === --this.active && this.destination.complete();
  }, "assign");
  m.ta = cc11001100_hook("m.ta", function (a, b, c) {
    var d = cc11001100_hook("d", this.values, "var-init"),
      e = cc11001100_hook("e", d[c], "var-init");
    e = cc11001100_hook("e", this.gb ? e === oe ? --this.gb : this.gb : 0, "assign");
    d[c] = cc11001100_hook("d[c]", b, "assign");
    0 === e && (this.Lc ? this.wf(d) : this.destination.next(this.keys ? this.keys.reduce(function (f, g, h) {
      return f[g] = cc11001100_hook("f[g]", d[h], "assign"), f;
    }, {}) : d.slice()));
  }, "assign");
  m.wf = cc11001100_hook("m.wf", function (a) {
    try {
      var b = cc11001100_hook("b", this.Lc.apply(this, a), "var-init");
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  }, "assign");
  function re() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init"),
      b = cc11001100_hook("b", void 0, "var-init");
    "function" === typeof a[a.length - 1] && (b = cc11001100_hook("b", a.pop(), "assign"));
    1 === a.length && xd(a[0]) && (a = cc11001100_hook("a", a[0].slice(), "assign"));
    return function (c) {
      var d = cc11001100_hook("d", le([c].concat(u(a))), "var-init"),
        e = cc11001100_hook("e", new pe(b), "var-init");
      if (c && "function" === typeof c.pb) c = cc11001100_hook("c", c.pb.call(d, e), "assign");else throw new TypeError("H");
      return c;
    };
  }
  function se() {
    return re.apply(null, u(x.apply(0, arguments)));
  }
  ;
  function Q() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init"),
      b = cc11001100_hook("b", a[a.length - 1], "var-init");
    return de(b) ? (a.pop(), ee(a, b)) : ne(a);
  }
  ;
  function R(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      if ("function" !== typeof a) throw new TypeError("L");
      return O(b, new te(a));
    };
  }
  var te = function (a) {
    this.J = cc11001100_hook("this.J", a, "assign");
    this.fa = cc11001100_hook("this.fa", void 0, "assign");
  };
  te.prototype.call = cc11001100_hook("te.prototype.call", function (a, b) {
    return b.subscribe(new ue(a, this.J, this.fa));
  }, "assign");
  var ue = function (a, b, c) {
    I.call(this, a);
    this.J = cc11001100_hook("this.J", b, "assign");
    this.count = cc11001100_hook("this.count", 0, "assign");
    this.fa = cc11001100_hook("this.fa", c || this, "assign");
  };
  v(ue, I);
  ue.EMPTY = cc11001100_hook("ue.EMPTY", I.EMPTY, "assign");
  ue.create = cc11001100_hook("ue.create", I.create, "assign");
  ue.prototype.o = cc11001100_hook("ue.prototype.o", function (a) {
    try {
      var b = cc11001100_hook("b", this.J.call(this.fa, a, this.count++), "var-init");
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  }, "assign");
  function ve(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", void 0 === c ? Infinity : c, "var-init");
    if ("function" === typeof b) return function (d) {
      return d.h(ve(function (e, f) {
        return le(a(e, f)).h(R(function (g, h) {
          return b(e, g, f, h);
        }));
      }, c));
    };
    "number" === typeof b && (c = cc11001100_hook("c", b, "assign"));
    return function (d) {
      return O(d, new we(a, c));
    };
  }
  var we = function (a, b) {
    b = cc11001100_hook("b", void 0 === b ? Infinity : b, "assign");
    this.J = cc11001100_hook("this.J", a, "assign");
    this.hd = cc11001100_hook("this.hd", b, "assign");
  };
  we.prototype.call = cc11001100_hook("we.prototype.call", function (a, b) {
    return b.subscribe(new xe(a, this.J, this.hd));
  }, "assign");
  var xe = function (a, b, c) {
    c = cc11001100_hook("c", void 0 === c ? Infinity : c, "assign");
    L.call(this, a);
    this.destination = cc11001100_hook("this.destination", a, "assign");
    this.J = cc11001100_hook("this.J", b, "assign");
    this.hd = cc11001100_hook("this.hd", c, "assign");
    this.Ge = cc11001100_hook("this.Ge", !1, "assign");
    this.buffer = cc11001100_hook("this.buffer", [], "assign");
    this.index = cc11001100_hook("this.index", this.active = cc11001100_hook("this.active", 0, "assign"), "assign");
  };
  v(xe, L);
  xe.EMPTY = cc11001100_hook("xe.EMPTY", L.EMPTY, "assign");
  xe.create = cc11001100_hook("xe.create", L.create, "assign");
  xe.prototype.o = cc11001100_hook("xe.prototype.o", function (a) {
    if (this.active < this.hd) {
      var b = cc11001100_hook("b", this.index++, "var-init");
      try {
        var c = cc11001100_hook("c", this.J(a, b), "var-init");
      } catch (d) {
        this.destination.error(d);
        return;
      }
      this.active++;
      a = cc11001100_hook("a", new Td(this), "assign");
      this.destination.add(a);
      Vd(c, a);
    } else this.buffer.push(a);
  }, "assign");
  xe.prototype.A = cc11001100_hook("xe.prototype.A", function () {
    this.Ge = cc11001100_hook("this.Ge", !0, "assign");
    0 === this.active && 0 === this.buffer.length && this.destination.complete();
    this.unsubscribe();
  }, "assign");
  xe.prototype.ta = cc11001100_hook("xe.prototype.ta", function (a) {
    this.destination.next(a);
  }, "assign");
  xe.prototype.R = cc11001100_hook("xe.prototype.R", function () {
    var a = cc11001100_hook("a", this.buffer, "var-init");
    this.active--;
    0 < a.length ? this.o(a.shift()) : 0 === this.active && this.Ge && this.destination.complete();
  }, "assign");
  function ye(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", void 0 === a ? Infinity : a, "assign");
    return ve(Ed, a);
  }
  ;
  function ze() {
    return ye(1)(Q.apply(null, u(x.apply(0, arguments))));
  }
  ;
  function Ae(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", void 0 === a ? null : a, "assign");
    return function (b) {
      return O(b, new Be(a));
    };
  }
  var Be = function (a) {
    this.defaultValue = cc11001100_hook("this.defaultValue", a, "assign");
  };
  Be.prototype.call = cc11001100_hook("Be.prototype.call", function (a, b) {
    return b.subscribe(new Ce(a, this.defaultValue));
  }, "assign");
  var Ce = function (a, b) {
    I.call(this, a);
    this.defaultValue = cc11001100_hook("this.defaultValue", b, "assign");
    this.Gd = cc11001100_hook("this.Gd", !0, "assign");
  };
  v(Ce, I);
  Ce.EMPTY = cc11001100_hook("Ce.EMPTY", I.EMPTY, "assign");
  Ce.create = cc11001100_hook("Ce.create", I.create, "assign");
  Ce.prototype.o = cc11001100_hook("Ce.prototype.o", function (a) {
    this.Gd = cc11001100_hook("this.Gd", !1, "assign");
    this.destination.next(a);
  }, "assign");
  Ce.prototype.A = cc11001100_hook("Ce.prototype.A", function () {
    this.Gd && this.destination.next(this.defaultValue);
    this.destination.complete();
  }, "assign");
  function De(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return O(b, new Ee(a));
    };
  }
  var Ee = function (a) {
    this.pd = cc11001100_hook("this.pd", a, "assign");
  };
  Ee.prototype.call = cc11001100_hook("Ee.prototype.call", function (a, b) {
    return b.subscribe(new Fe(a, this.pd));
  }, "assign");
  var Fe = function (a, b) {
    M.call(this, a);
    this.pd = cc11001100_hook("this.pd", b, "assign");
    this.te = cc11001100_hook("this.te", !1, "assign");
    this.rc = cc11001100_hook("this.rc", [], "assign");
    this.index = cc11001100_hook("this.index", 0, "assign");
  };
  v(Fe, M);
  Fe.EMPTY = cc11001100_hook("Fe.EMPTY", M.EMPTY, "assign");
  Fe.create = cc11001100_hook("Fe.create", M.create, "assign");
  m = cc11001100_hook("m", Fe.prototype, "assign");
  m.ta = cc11001100_hook("m.ta", function (a, b, c, d) {
    this.destination.next(a);
    Ge(this, d);
    He(this);
  }, "assign");
  m.Pa = cc11001100_hook("m.Pa", function (a) {
    this.U(a);
  }, "assign");
  m.R = cc11001100_hook("m.R", function (a) {
    (a = cc11001100_hook("a", Ge(this, a), "assign")) && this.destination.next(a);
    He(this);
  }, "assign");
  m.o = cc11001100_hook("m.o", function (a) {
    var b = cc11001100_hook("b", this.index++, "var-init");
    try {
      var c = cc11001100_hook("c", this.pd(a, b), "var-init");
      if (c) {
        var d = cc11001100_hook("d", Vd(c, new Ud(this, a, 0)), "var-init");
        d && !d.closed && (this.destination.add(d), this.rc.push(d));
      }
    } catch (e) {
      this.destination.error(e);
    }
  }, "assign");
  m.A = cc11001100_hook("m.A", function () {
    this.te = cc11001100_hook("this.te", !0, "assign");
    He(this);
    this.unsubscribe();
  }, "assign");
  var Ge = function (a, b) {
      b.unsubscribe();
      var c = cc11001100_hook("c", a.rc.indexOf(b), "var-init");
      -1 !== c && a.rc.splice(c, 1);
      return b.bf;
    },
    He = function (a) {
      a.te && 0 === a.rc.length && a.destination.complete();
    };
  var Ie = cc11001100_hook("Ie", new K(function (a) {
    return a.complete();
  }), "var-init");
  function Je(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new K(function (b) {
      return b.error(a);
    });
  }
  ;
  function Ke(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return O(b, new Le(a));
    };
  }
  var Le = function (a) {
    this.Oa = cc11001100_hook("this.Oa", a, "assign");
    this.gg = cc11001100_hook("this.gg", void 0, "assign");
  };
  Le.prototype.call = cc11001100_hook("Le.prototype.call", function (a, b) {
    return b.subscribe(new Me(a, this.Oa, this.gg));
  }, "assign");
  var Me = function (a, b, c) {
    L.call(this, a);
    this.Oa = cc11001100_hook("this.Oa", b, "assign");
    this.values = cc11001100_hook("this.values", new Set(), "assign");
    c && this.add(Vd(c, new Td(this)));
  };
  v(Me, L);
  Me.EMPTY = cc11001100_hook("Me.EMPTY", L.EMPTY, "assign");
  Me.create = cc11001100_hook("Me.create", L.create, "assign");
  m = cc11001100_hook("m", Me.prototype, "assign");
  m.ta = cc11001100_hook("m.ta", function () {
    this.values.clear();
  }, "assign");
  m.Pa = cc11001100_hook("m.Pa", function (a) {
    this.U(a);
  }, "assign");
  m.o = cc11001100_hook("m.o", function (a) {
    this.Oa ? this.xf(a) : this.ie(a, a);
  }, "assign");
  m.xf = cc11001100_hook("m.xf", function (a) {
    var b = cc11001100_hook("b", this.destination, "var-init");
    try {
      var c = cc11001100_hook("c", this.Oa(a), "var-init");
    } catch (d) {
      b.error(d);
      return;
    }
    this.ie(c, a);
  }, "assign");
  m.ie = cc11001100_hook("m.ie", function (a, b) {
    var c = cc11001100_hook("c", this.values, "var-init");
    c.has(a) || (c.add(a), this.destination.next(b));
  }, "assign");
  function S(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return O(b, new Ne(a));
    };
  }
  var Ne = function (a) {
    this.compare = cc11001100_hook("this.compare", a, "assign");
    this.Oa = cc11001100_hook("this.Oa", void 0, "assign");
  };
  Ne.prototype.call = cc11001100_hook("Ne.prototype.call", function (a, b) {
    return b.subscribe(new Oe(a, this.compare, this.Oa));
  }, "assign");
  var Oe = function (a, b, c) {
    I.call(this, a);
    this.Oa = cc11001100_hook("this.Oa", c, "assign");
    this.Ie = cc11001100_hook("this.Ie", !1, "assign");
    "function" === typeof b && (this.compare = cc11001100_hook("this.compare", b, "assign"));
  };
  v(Oe, I);
  Oe.EMPTY = cc11001100_hook("Oe.EMPTY", I.EMPTY, "assign");
  Oe.create = cc11001100_hook("Oe.create", I.create, "assign");
  Oe.prototype.compare = cc11001100_hook("Oe.prototype.compare", function (a, b) {
    return a === b;
  }, "assign");
  Oe.prototype.o = cc11001100_hook("Oe.prototype.o", function (a) {
    try {
      var b = cc11001100_hook("b", this.Oa, "var-init");
      var c = cc11001100_hook("c", b ? b(a) : a, "var-init");
    } catch (e) {
      return this.destination.error(e);
    }
    b = cc11001100_hook("b", !1, "assign");
    if (this.Ie) try {
      var d = cc11001100_hook("d", this.compare, "var-init");
      b = cc11001100_hook("b", d(this.key, c), "assign");
    } catch (e) {
      return this.destination.error(e);
    } else this.Ie = cc11001100_hook("this.Ie", !0, "assign");
    b || (this.key = cc11001100_hook("this.key", c, "assign"), this.destination.next(a));
  }, "assign");
  function U(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return O(b, new Pe(a));
    };
  }
  var Pe = function (a) {
    this.oa = cc11001100_hook("this.oa", a, "assign");
    this.fa = cc11001100_hook("this.fa", void 0, "assign");
  };
  Pe.prototype.call = cc11001100_hook("Pe.prototype.call", function (a, b) {
    return b.subscribe(new Qe(a, this.oa, this.fa));
  }, "assign");
  var Qe = function (a, b, c) {
    I.call(this, a);
    this.oa = cc11001100_hook("this.oa", b, "assign");
    this.fa = cc11001100_hook("this.fa", c, "assign");
    this.count = cc11001100_hook("this.count", 0, "assign");
  };
  v(Qe, I);
  Qe.EMPTY = cc11001100_hook("Qe.EMPTY", I.EMPTY, "assign");
  Qe.create = cc11001100_hook("Qe.create", I.create, "assign");
  Qe.prototype.o = cc11001100_hook("Qe.prototype.o", function (a) {
    try {
      var b = cc11001100_hook("b", this.oa.call(this.fa, a, this.count++), "var-init");
    } catch (c) {
      this.destination.error(c);
      return;
    }
    b && this.destination.next(a);
  }, "assign");
  var Re = cc11001100_hook("Re", function () {
    function a() {
      this.message = cc11001100_hook("this.message", "argument out of range", "assign");
      this.name = cc11001100_hook("this.name", "ArgumentOutOfRangeError", "assign");
      return this;
    }
    a.prototype = cc11001100_hook("a.prototype", Object.create(Error.prototype), "assign");
    return a;
  }(), "var-init");
  function Se(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (isNaN(a)) throw new TypeError("M");
    if (0 > a) throw new Re();
    return function (b) {
      return 0 === a ? Ie : O(b, new Te(a));
    };
  }
  var Te = function (a) {
    this.count = cc11001100_hook("this.count", a, "assign");
  };
  Te.prototype.call = cc11001100_hook("Te.prototype.call", function (a, b) {
    return b.subscribe(new Ue(a, this.count));
  }, "assign");
  var Ue = function (a, b) {
    I.call(this, a);
    this.count = cc11001100_hook("this.count", b, "assign");
    this.yf = cc11001100_hook("this.yf", 0, "assign");
  };
  v(Ue, I);
  Ue.EMPTY = cc11001100_hook("Ue.EMPTY", I.EMPTY, "assign");
  Ue.create = cc11001100_hook("Ue.create", I.create, "assign");
  Ue.prototype.o = cc11001100_hook("Ue.prototype.o", function (a) {
    var b = cc11001100_hook("b", this.count, "var-init"),
      c = cc11001100_hook("c", ++this.yf, "var-init");
    c <= b && (this.destination.next(a), c === b && (this.destination.complete(), this.unsubscribe()));
  }, "assign");
  var Ve = cc11001100_hook("Ve", function () {
    function a() {
      this.message = cc11001100_hook("this.message", "no elements in sequence", "assign");
      this.name = cc11001100_hook("this.name", "EmptyError", "assign");
      return this;
    }
    a.prototype = cc11001100_hook("a.prototype", Object.create(Error.prototype), "assign");
    return a;
  }(), "var-init");
  function We(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", void 0 === a ? Xe : a, "assign");
    return function (b) {
      return O(b, new Ye(a));
    };
  }
  var Ye = function (a) {
    this.rd = cc11001100_hook("this.rd", a, "assign");
  };
  Ye.prototype.call = cc11001100_hook("Ye.prototype.call", function (a, b) {
    return b.subscribe(new Ze(a, this.rd));
  }, "assign");
  var Ze = function (a, b) {
    I.call(this, a);
    this.rd = cc11001100_hook("this.rd", b, "assign");
    this.Je = cc11001100_hook("this.Je", !1, "assign");
  };
  v(Ze, I);
  Ze.EMPTY = cc11001100_hook("Ze.EMPTY", I.EMPTY, "assign");
  Ze.create = cc11001100_hook("Ze.create", I.create, "assign");
  Ze.prototype.o = cc11001100_hook("Ze.prototype.o", function (a) {
    this.Je = cc11001100_hook("this.Je", !0, "assign");
    this.destination.next(a);
  }, "assign");
  Ze.prototype.A = cc11001100_hook("Ze.prototype.A", function () {
    if (this.Je) return this.destination.complete();
    try {
      var a = cc11001100_hook("a", this.rd(), "var-init");
    } catch (b) {
      a = cc11001100_hook("a", b, "assign");
    }
    this.destination.error(a);
  }, "assign");
  function Xe() {
    return new Ve();
  }
  ;
  function $e() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init");
    return function (b) {
      return ze(b, Q.apply(null, u(a)));
    };
  }
  ;
  function af(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return O(b, new bf(a, b));
    };
  }
  var bf = function (a, b) {
    this.oa = cc11001100_hook("this.oa", a, "assign");
    this.fa = cc11001100_hook("this.fa", void 0, "assign");
    this.source = cc11001100_hook("this.source", b, "assign");
  };
  bf.prototype.call = cc11001100_hook("bf.prototype.call", function (a, b) {
    return b.subscribe(new cf(a, this.oa, this.fa, this.source));
  }, "assign");
  var cf = function (a, b, c, d) {
    I.call(this, a);
    this.oa = cc11001100_hook("this.oa", b, "assign");
    this.fa = cc11001100_hook("this.fa", c, "assign");
    this.source = cc11001100_hook("this.source", d, "assign");
    this.index = cc11001100_hook("this.index", 0, "assign");
    this.fa = cc11001100_hook("this.fa", c || this, "assign");
  };
  v(cf, I);
  cf.EMPTY = cc11001100_hook("cf.EMPTY", I.EMPTY, "assign");
  cf.create = cc11001100_hook("cf.create", I.create, "assign");
  cf.prototype.R = cc11001100_hook("cf.prototype.R", function (a) {
    this.destination.next(a);
    this.destination.complete();
  }, "assign");
  cf.prototype.o = cc11001100_hook("cf.prototype.o", function (a) {
    var b = cc11001100_hook("b", !1, "var-init");
    try {
      b = cc11001100_hook("b", this.oa.call(this.fa, a, this.index++, this.source), "assign");
    } catch (c) {
      this.destination.error(c);
      return;
    }
    b || this.R(!1);
  }, "assign");
  cf.prototype.A = cc11001100_hook("cf.prototype.A", function () {
    this.R(!0);
  }, "assign");
  var df = function (a, b) {
    H.call(this);
    this.kf = cc11001100_hook("this.kf", a, "assign");
    this.Xd = cc11001100_hook("this.Xd", b, "assign");
    this.closed = cc11001100_hook("this.closed", !1, "assign");
  };
  v(df, H);
  df.EMPTY = cc11001100_hook("df.EMPTY", H.EMPTY, "assign");
  df.prototype.unsubscribe = cc11001100_hook("df.prototype.unsubscribe", function () {
    if (!this.closed) {
      this.closed = cc11001100_hook("this.closed", !0, "assign");
      var a = cc11001100_hook("a", this.kf, "var-init"),
        b = cc11001100_hook("b", a.Da, "var-init");
      this.kf = cc11001100_hook("this.kf", null, "assign");
      !b || 0 === b.length || a.B || a.closed || (a = cc11001100_hook("a", b.indexOf(this.Xd), "assign"), -1 !== a && b.splice(a, 1));
    }
  }, "assign");
  var ef = cc11001100_hook("ef", function () {
    function a() {
      this.message = cc11001100_hook("this.message", "object unsubscribed", "assign");
      this.name = cc11001100_hook("this.name", "ObjectUnsubscribedError", "assign");
      return this;
    }
    a.prototype = cc11001100_hook("a.prototype", Object.create(Error.prototype), "assign");
    return a;
  }(), "var-init");
  var V = function () {
    this.Da = cc11001100_hook("this.Da", [], "assign");
    this.Hb = cc11001100_hook("this.Hb", this.B = cc11001100_hook("this.B", this.closed = cc11001100_hook("this.closed", !1, "assign"), "assign"), "assign");
    this.Pc = cc11001100_hook("this.Pc", null, "assign");
  };
  v(V, K);
  m = cc11001100_hook("m", V.prototype, "assign");
  m.pb = cc11001100_hook("m.pb", function (a) {
    var b = cc11001100_hook("b", new ff(this, this), "var-init");
    b.operator = cc11001100_hook("b.operator", a, "assign");
    return b;
  }, "assign");
  m.next = cc11001100_hook("m.next", function (a) {
    if (this.closed) throw new ef();
    if (!this.B) {
      var b = cc11001100_hook("b", this.Da, "var-init"),
        c = cc11001100_hook("c", b.length, "var-init");
      b = cc11001100_hook("b", b.slice(), "assign");
      for (var d = cc11001100_hook("d", 0, "var-init"); d < c; d++) b[d].next(a);
    }
  }, "assign");
  m.error = cc11001100_hook("m.error", function (a) {
    if (this.closed) throw new ef();
    this.Hb = cc11001100_hook("this.Hb", !0, "assign");
    this.Pc = cc11001100_hook("this.Pc", a, "assign");
    this.B = cc11001100_hook("this.B", !0, "assign");
    var b = cc11001100_hook("b", this.Da, "var-init"),
      c = cc11001100_hook("c", b.length, "var-init");
    b = cc11001100_hook("b", b.slice(), "assign");
    for (var d = cc11001100_hook("d", 0, "var-init"); d < c; d++) b[d].error(a);
    this.Da.length = cc11001100_hook("this.Da.length", 0, "assign");
  }, "assign");
  m.complete = cc11001100_hook("m.complete", function () {
    if (this.closed) throw new ef();
    this.B = cc11001100_hook("this.B", !0, "assign");
    var a = cc11001100_hook("a", this.Da, "var-init"),
      b = cc11001100_hook("b", a.length, "var-init");
    a = cc11001100_hook("a", a.slice(), "assign");
    for (var c = cc11001100_hook("c", 0, "var-init"); c < b; c++) a[c].complete();
    this.Da.length = cc11001100_hook("this.Da.length", 0, "assign");
  }, "assign");
  m.unsubscribe = cc11001100_hook("m.unsubscribe", function () {
    this.closed = cc11001100_hook("this.closed", this.B = cc11001100_hook("this.B", !0, "assign"), "assign");
    this.Da = cc11001100_hook("this.Da", null, "assign");
  }, "assign");
  m.bd = cc11001100_hook("m.bd", function (a) {
    if (this.closed) throw new ef();
    return K.prototype.bd.call(this, a);
  }, "assign");
  m.Y = cc11001100_hook("m.Y", function (a) {
    if (this.closed) throw new ef();
    if (this.Hb) return a.error(this.Pc), H.EMPTY;
    if (this.B) return a.complete(), H.EMPTY;
    this.Da.push(a);
    return new df(this, a);
  }, "assign");
  m.V = cc11001100_hook("m.V", function () {
    var a = cc11001100_hook("a", new K(), "var-init");
    a.source = cc11001100_hook("a.source", this, "assign");
    return a;
  }, "assign");
  V.create = cc11001100_hook("V.create", function (a, b) {
    return new ff(a, b);
  }, "assign");
  var ff = function (a, b) {
    V.call(this);
    this.destination = cc11001100_hook("this.destination", a, "assign");
    this.source = cc11001100_hook("this.source", b, "assign");
  };
  v(ff, V);
  ff.create = cc11001100_hook("ff.create", V.create, "assign");
  ff.prototype.next = cc11001100_hook("ff.prototype.next", function (a) {
    var b = cc11001100_hook("b", this.destination, "var-init");
    b && b.next && b.next(a);
  }, "assign");
  ff.prototype.error = cc11001100_hook("ff.prototype.error", function (a) {
    var b = cc11001100_hook("b", this.destination, "var-init");
    b && b.error && this.destination.error(a);
  }, "assign");
  ff.prototype.complete = cc11001100_hook("ff.prototype.complete", function () {
    var a = cc11001100_hook("a", this.destination, "var-init");
    a && a.complete && this.destination.complete();
  }, "assign");
  ff.prototype.Y = cc11001100_hook("ff.prototype.Y", function (a) {
    return this.source ? this.source.subscribe(a) : H.EMPTY;
  }, "assign");
  function gf() {
    return function (a) {
      return O(a, new hf());
    };
  }
  var hf = function () {};
  hf.prototype.call = cc11001100_hook("hf.prototype.call", function (a, b) {
    return b.subscribe(new jf(a));
  }, "assign");
  var jf = function () {
    I.apply(this, arguments);
  };
  v(jf, I);
  jf.EMPTY = cc11001100_hook("jf.EMPTY", I.EMPTY, "assign");
  jf.create = cc11001100_hook("jf.create", I.create, "assign");
  jf.prototype.o = cc11001100_hook("jf.prototype.o", function () {}, "assign");
  function kf() {
    if (isNaN(1)) throw new TypeError("M");
    return function (a) {
      return O(a, new lf());
    };
  }
  var lf = function () {
    this.total = cc11001100_hook("this.total", 1, "assign");
  };
  lf.prototype.call = cc11001100_hook("lf.prototype.call", function (a, b) {
    return b.subscribe(new mf(a, this.total));
  }, "assign");
  var mf = function (a, b) {
    I.call(this, a);
    this.total = cc11001100_hook("this.total", b, "assign");
    this.df = cc11001100_hook("this.df", [], "assign");
    this.count = cc11001100_hook("this.count", 0, "assign");
  };
  v(mf, I);
  mf.EMPTY = cc11001100_hook("mf.EMPTY", I.EMPTY, "assign");
  mf.create = cc11001100_hook("mf.create", I.create, "assign");
  mf.prototype.o = cc11001100_hook("mf.prototype.o", function (a) {
    var b = cc11001100_hook("b", this.df, "var-init"),
      c = cc11001100_hook("c", this.total, "var-init"),
      d = cc11001100_hook("d", this.count++, "var-init");
    b.length < c ? b.push(a) : b[d % c] = cc11001100_hook("b[d % c]", a, "assign");
  }, "assign");
  mf.prototype.A = cc11001100_hook("mf.prototype.A", function () {
    var a = cc11001100_hook("a", this.destination, "var-init"),
      b = cc11001100_hook("b", this.count, "var-init");
    if (0 < b) for (var c = cc11001100_hook("c", this.count >= this.total ? this.total : this.count, "var-init"), d = cc11001100_hook("d", this.df, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < c; e++) {
      var f = cc11001100_hook("f", b++ % c, "var-init");
      a.next(d[f]);
    }
    a.complete();
  }, "assign");
  function nf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", 2 <= arguments.length, "var-init");
    return function (d) {
      return d.h(a ? U(function (e, f) {
        return a(e, f, d);
      }) : Ed, kf(), c ? Ae(b) : We(function () {
        return new Ve();
      }));
    };
  }
  ;
  function of(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return O(b, new pf(a));
    };
  }
  var pf = function (a) {
    this.value = cc11001100_hook("this.value", a, "assign");
  };
  pf.prototype.call = cc11001100_hook("pf.prototype.call", function (a, b) {
    return b.subscribe(new qf(a, this.value));
  }, "assign");
  var qf = function (a, b) {
    I.call(this, a);
    this.value = cc11001100_hook("this.value", b, "assign");
  };
  v(qf, I);
  qf.EMPTY = cc11001100_hook("qf.EMPTY", I.EMPTY, "assign");
  qf.create = cc11001100_hook("qf.create", I.create, "assign");
  qf.prototype.o = cc11001100_hook("qf.prototype.o", function () {
    this.destination.next(this.value);
  }, "assign");
  function rf(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", !1, "var-init");
    2 <= arguments.length && (c = cc11001100_hook("c", !0, "assign"));
    return function (d) {
      return O(d, new sf(a, b, c));
    };
  }
  var sf = function (a, b, c) {
    this.dd = cc11001100_hook("this.dd", a, "assign");
    this.seed = cc11001100_hook("this.seed", b, "assign");
    this.mg = cc11001100_hook("this.mg", void 0 === c ? !1 : c, "assign");
  };
  sf.prototype.call = cc11001100_hook("sf.prototype.call", function (a, b) {
    return b.subscribe(new tf(a, this.dd, this.seed, this.mg));
  }, "assign");
  var tf = function (a, b, c, d) {
    I.call(this, a);
    this.dd = cc11001100_hook("this.dd", b, "assign");
    this.Xc = cc11001100_hook("this.Xc", c, "assign");
    this.ke = cc11001100_hook("this.ke", d, "assign");
    this.index = cc11001100_hook("this.index", 0, "assign");
  };
  v(tf, I);
  tf.EMPTY = cc11001100_hook("tf.EMPTY", I.EMPTY, "assign");
  tf.create = cc11001100_hook("tf.create", I.create, "assign");
  tf.prototype.o = cc11001100_hook("tf.prototype.o", function (a) {
    var b = cc11001100_hook("b", this.destination, "var-init");
    if (this.ke) {
      var c = cc11001100_hook("c", this.index++, "var-init");
      try {
        var d = cc11001100_hook("d", this.dd(this.Xc, a, c), "var-init");
      } catch (e) {
        b.error(e);
        return;
      }
      this.Xc = cc11001100_hook("this.Xc", d, "assign");
      b.next(d);
    } else this.Xc = cc11001100_hook("this.Xc", a, "assign"), this.ke = cc11001100_hook("this.ke", !0, "assign"), b.next(a);
  }, "assign");
  function uf() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init"),
      b = cc11001100_hook("b", Infinity, "var-init"),
      c = cc11001100_hook("c", void 0, "var-init"),
      d = cc11001100_hook("d", a[a.length - 1], "var-init");
    de(d) ? (c = cc11001100_hook("c", a.pop(), "assign"), 1 < a.length && "number" === typeof a[a.length - 1] && (b = cc11001100_hook("b", a.pop(), "assign"))) : "number" === typeof d && (b = cc11001100_hook("b", a.pop(), "assign"));
    return !c && 1 === a.length && a[0] instanceof K ? a[0] : ye(b)(ne(a, c));
  }
  ;
  function vf() {
    return function (a) {
      return O(a, new wf());
    };
  }
  var wf = function () {};
  wf.prototype.call = cc11001100_hook("wf.prototype.call", function (a, b) {
    b.Ab++;
    a = cc11001100_hook("a", new xf(a, b), "assign");
    var c = cc11001100_hook("c", b.subscribe(a), "var-init");
    a.closed || (a.connection = cc11001100_hook("a.connection", b.connect(), "assign"));
    return c;
  }, "assign");
  var xf = function (a, b) {
    I.call(this, a);
    this.jb = cc11001100_hook("this.jb", b, "assign");
    this.connection = cc11001100_hook("this.connection", null, "assign");
  };
  v(xf, I);
  xf.EMPTY = cc11001100_hook("xf.EMPTY", I.EMPTY, "assign");
  xf.create = cc11001100_hook("xf.create", I.create, "assign");
  xf.prototype.xa = cc11001100_hook("xf.prototype.xa", function () {
    var a = cc11001100_hook("a", this.jb, "var-init");
    if (a) {
      this.jb = cc11001100_hook("this.jb", null, "assign");
      var b = cc11001100_hook("b", a.Ab, "var-init");
      0 >= b ? this.connection = cc11001100_hook("this.connection", null, "assign") : (a.Ab = cc11001100_hook("a.Ab", b - 1, "assign"), 1 < b ? this.connection = cc11001100_hook("this.connection", null, "assign") : (b = cc11001100_hook("b", this.connection, "assign"), a = cc11001100_hook("a", a.hb, "assign"), this.connection = cc11001100_hook("this.connection", null, "assign"), !a || b && a !== b || a.unsubscribe()));
    } else this.connection = cc11001100_hook("this.connection", null, "assign");
  }, "assign");
  var yf = function (a, b) {
    this.source = cc11001100_hook("this.source", a, "assign");
    this.lf = cc11001100_hook("this.lf", b, "assign");
    this.Ab = cc11001100_hook("this.Ab", 0, "assign");
    this.dc = cc11001100_hook("this.dc", !1, "assign");
  };
  v(yf, K);
  yf.create = cc11001100_hook("yf.create", K.create, "assign");
  yf.prototype.Y = cc11001100_hook("yf.prototype.Y", function (a) {
    return this.xc().subscribe(a);
  }, "assign");
  yf.prototype.xc = cc11001100_hook("yf.prototype.xc", function () {
    var a = cc11001100_hook("a", this.fc, "var-init");
    if (!a || a.B) this.fc = cc11001100_hook("this.fc", this.lf(), "assign");
    return this.fc;
  }, "assign");
  yf.prototype.connect = cc11001100_hook("yf.prototype.connect", function () {
    var a = cc11001100_hook("a", this.hb, "var-init");
    a || (this.dc = cc11001100_hook("this.dc", !1, "assign"), a = cc11001100_hook("a", this.hb = cc11001100_hook("this.hb", new H(), "assign"), "assign"), a.add(this.source.subscribe(new Bf(this.xc(), this))), a.closed && (this.hb = cc11001100_hook("this.hb", null, "assign"), a = cc11001100_hook("a", H.EMPTY, "assign")));
    return a;
  }, "assign");
  yf.prototype.cf = cc11001100_hook("yf.prototype.cf", function () {
    return vf()(this);
  }, "assign");
  var Cf,
    Df = cc11001100_hook("Df", yf.prototype, "var-init");
  Cf = cc11001100_hook("Cf", {
    operator: {
      value: cc11001100_hook("value", null, "object-key-init")
    },
    Ab: {
      value: cc11001100_hook("value", 0, "object-key-init"),
      writable: cc11001100_hook("writable", !0, "object-key-init")
    },
    fc: {
      value: cc11001100_hook("value", null, "object-key-init"),
      writable: cc11001100_hook("writable", !0, "object-key-init")
    },
    hb: {
      value: cc11001100_hook("value", null, "object-key-init"),
      writable: cc11001100_hook("writable", !0, "object-key-init")
    },
    Y: {
      value: cc11001100_hook("value", Df.Y, "object-key-init")
    },
    dc: {
      value: cc11001100_hook("value", Df.dc, "object-key-init"),
      writable: cc11001100_hook("writable", !0, "object-key-init")
    },
    xc: {
      value: cc11001100_hook("value", Df.xc, "object-key-init")
    },
    connect: {
      value: cc11001100_hook("value", Df.connect, "object-key-init")
    },
    cf: {
      value: cc11001100_hook("value", Df.cf, "object-key-init")
    }
  }, "assign");
  var Bf = function (a, b) {
    I.call(this);
    this.destination = cc11001100_hook("this.destination", a, "assign");
    this.jb = cc11001100_hook("this.jb", b, "assign");
  };
  v(Bf, I);
  Bf.EMPTY = cc11001100_hook("Bf.EMPTY", I.EMPTY, "assign");
  Bf.create = cc11001100_hook("Bf.create", I.create, "assign");
  Bf.prototype.U = cc11001100_hook("Bf.prototype.U", function (a) {
    this.xa();
    I.prototype.U.call(this, a);
  }, "assign");
  Bf.prototype.A = cc11001100_hook("Bf.prototype.A", function () {
    this.jb.dc = cc11001100_hook("this.jb.dc", !0, "assign");
    this.xa();
    I.prototype.A.call(this);
  }, "assign");
  Bf.prototype.xa = cc11001100_hook("Bf.prototype.xa", function () {
    var a = cc11001100_hook("a", this.jb, "var-init");
    if (a) {
      this.jb = cc11001100_hook("this.jb", null, "assign");
      var b = cc11001100_hook("b", a.hb, "var-init");
      a.Ab = cc11001100_hook("a.Ab", 0, "assign");
      a.fc = cc11001100_hook("a.fc", null, "assign");
      a.hb = cc11001100_hook("a.hb", null, "assign");
      b && b.unsubscribe();
    }
  }, "assign");
  function Ef(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      var c = cc11001100_hook("c", "function" === typeof a ? a : function () {
        return a;
      }, "var-init");
      var d = cc11001100_hook("d", Object.create(b, Cf), "var-init");
      d.source = cc11001100_hook("d.source", b, "assign");
      d.lf = cc11001100_hook("d.lf", c, "assign");
      return d;
    };
  }
  ;
  function Ff() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init");
    1 === a.length && xd(a[0]) && (a = cc11001100_hook("a", a[0], "assign"));
    return function (b) {
      return O(b, new Gf(a));
    };
  }
  var Gf = function (a) {
    this.Od = cc11001100_hook("this.Od", a, "assign");
  };
  Gf.prototype.call = cc11001100_hook("Gf.prototype.call", function (a, b) {
    return b.subscribe(new Hf(a, this.Od));
  }, "assign");
  var Hf = function (a, b) {
    L.call(this, a);
    this.destination = cc11001100_hook("this.destination", a, "assign");
    this.Od = cc11001100_hook("this.Od", b, "assign");
  };
  v(Hf, L);
  Hf.EMPTY = cc11001100_hook("Hf.EMPTY", L.EMPTY, "assign");
  Hf.create = cc11001100_hook("Hf.create", L.create, "assign");
  Hf.prototype.Pa = cc11001100_hook("Hf.prototype.Pa", function () {
    If(this);
  }, "assign");
  Hf.prototype.R = cc11001100_hook("Hf.prototype.R", function () {
    If(this);
  }, "assign");
  Hf.prototype.U = cc11001100_hook("Hf.prototype.U", function () {
    If(this);
    this.unsubscribe();
  }, "assign");
  Hf.prototype.A = cc11001100_hook("Hf.prototype.A", function () {
    If(this);
    this.unsubscribe();
  }, "assign");
  var If = function (a) {
    var b = cc11001100_hook("b", a.Od.shift(), "var-init");
    if (b) {
      var c = cc11001100_hook("c", new Td(a), "var-init");
      a.destination.add(c);
      Vd(b, c);
    } else a.destination.complete();
  };
  var Jf = function (a) {
    V.call(this);
    this.cd = cc11001100_hook("this.cd", a, "assign");
  };
  v(Jf, V);
  Jf.create = cc11001100_hook("Jf.create", V.create, "assign");
  Jf.prototype.Y = cc11001100_hook("Jf.prototype.Y", function (a) {
    var b = cc11001100_hook("b", V.prototype.Y.call(this, a), "var-init");
    b && !b.closed && a.next(this.cd);
    return b;
  }, "assign");
  Jf.prototype.next = cc11001100_hook("Jf.prototype.next", function (a) {
    V.prototype.next.call(this, this.cd = cc11001100_hook("this.cd", a, "assign"));
  }, "assign");
  da.Object.defineProperties(Jf.prototype, {
    value: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        if (this.Hb) throw this.Pc;
        if (this.closed) throw new ef();
        return this.cd;
      }
    }
  });
  var Kf = function (a, b, c) {
    a = cc11001100_hook("a", void 0 === a ? Infinity : a, "assign");
    b = cc11001100_hook("b", void 0 === b ? Infinity : b, "assign");
    c = cc11001100_hook("c", void 0 === c ? $d : c, "assign");
    V.call(this);
    this.qh = cc11001100_hook("this.qh", c, "assign");
    this.cc = cc11001100_hook("this.cc", [], "assign");
    this.le = cc11001100_hook("this.le", !1, "assign");
    this.ge = cc11001100_hook("this.ge", 1 > a ? 1 : a, "assign");
    this.zf = cc11001100_hook("this.zf", 1 > b ? 1 : b, "assign");
    Infinity === b ? (this.le = cc11001100_hook("this.le", !0, "assign"), this.next = cc11001100_hook("this.next", this.Ig, "assign")) : this.next = cc11001100_hook("this.next", this.Kg, "assign");
  };
  v(Kf, V);
  Kf.create = cc11001100_hook("Kf.create", V.create, "assign");
  m = cc11001100_hook("m", Kf.prototype, "assign");
  m.Ig = cc11001100_hook("m.Ig", function (a) {
    var b = cc11001100_hook("b", this.cc, "var-init");
    b.push(a);
    b.length > this.ge && b.shift();
    V.prototype.next.call(this, a);
  }, "assign");
  m.Kg = cc11001100_hook("m.Kg", function (a) {
    this.cc.push({
      time: cc11001100_hook("time", this.je(), "object-key-init"),
      value: cc11001100_hook("value", a, "object-key-init")
    });
    this.me();
    V.prototype.next.call(this, a);
  }, "assign");
  m.Y = cc11001100_hook("m.Y", function (a) {
    var b = cc11001100_hook("b", this.le, "var-init"),
      c = cc11001100_hook("c", b ? this.cc : this.me(), "var-init"),
      d = cc11001100_hook("d", c.length, "var-init");
    if (this.closed) throw new ef();
    if (this.B || this.Hb) var e = cc11001100_hook("e", H.EMPTY, "var-init");else this.Da.push(a), e = cc11001100_hook("e", new df(this, a), "assign");
    if (b) for (var f = cc11001100_hook("f", 0, "var-init"); f < d && !a.closed; f++) a.next(c[f]);else for (f = cc11001100_hook("f", 0, "assign"); f < d && !a.closed; f++) a.next(c[f].value);
    this.Hb ? a.error(this.Pc) : this.B && a.complete();
    return e;
  }, "assign");
  m.je = cc11001100_hook("m.je", function () {
    var a = cc11001100_hook("a", this.qh, "var-init");
    return a ? a.now() : $d.now();
  }, "assign");
  m.me = cc11001100_hook("m.me", function () {
    for (var a = cc11001100_hook("a", this.je(), "var-init"), b = cc11001100_hook("b", this.ge, "var-init"), c = cc11001100_hook("c", this.zf, "var-init"), d = cc11001100_hook("d", this.cc, "var-init"), e = cc11001100_hook("e", d.length, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < e && !(a - d[f].time < c);) f++;
    e > b && (f = cc11001100_hook("f", Math.max(f, e - b), "assign"));
    0 < f && d.splice(0, f);
    return d;
  }, "assign");
  function Lf(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new Kf(a, void 0, void 0), "var-init");
    return function (c) {
      return Ef(function () {
        return b;
      })(c);
    };
  }
  ;
  function Mf() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init");
    if (1 === a.length) if (xd(a[0])) a = cc11001100_hook("a", a[0], "assign");else return le(a[0]);
    return O(ne(a), new Nf());
  }
  var Nf = function () {};
  Nf.prototype.call = cc11001100_hook("Nf.prototype.call", function (a, b) {
    return b.subscribe(new Of(a));
  }, "assign");
  var Of = function (a) {
    M.call(this, a);
    this.Ib = cc11001100_hook("this.Ib", !1, "assign");
    this.Qa = cc11001100_hook("this.Qa", [], "assign");
    this.Vb = cc11001100_hook("this.Vb", [], "assign");
  };
  v(Of, M);
  Of.EMPTY = cc11001100_hook("Of.EMPTY", M.EMPTY, "assign");
  Of.create = cc11001100_hook("Of.create", M.create, "assign");
  m = cc11001100_hook("m", Of.prototype, "assign");
  m.o = cc11001100_hook("m.o", function (a) {
    this.Qa.push(a);
  }, "assign");
  m.A = cc11001100_hook("m.A", function () {
    var a = cc11001100_hook("a", this.Qa, "var-init"),
      b = cc11001100_hook("b", a.length, "var-init");
    if (0 === b) this.destination.complete();else {
      for (var c = cc11001100_hook("c", 0, "var-init"); c < b && !this.Ib; c++) {
        var d = cc11001100_hook("d", Vd(a[c], new Ud(this, null, c)), "var-init");
        this.Vb && this.Vb.push(d);
        this.add(d);
      }
      this.Qa = cc11001100_hook("this.Qa", null, "assign");
    }
  }, "assign");
  m.ta = cc11001100_hook("m.ta", function (a, b, c) {
    if (!this.Ib) {
      this.Ib = cc11001100_hook("this.Ib", !0, "assign");
      for (var d = cc11001100_hook("d", 0, "var-init"); d < this.Vb.length; d++) if (d !== c) {
        var e = cc11001100_hook("e", this.Vb[d], "var-init");
        e.unsubscribe();
        this.remove(e);
      }
      this.Vb = cc11001100_hook("this.Vb", null, "assign");
    }
    this.destination.next(b);
  }, "assign");
  m.R = cc11001100_hook("m.R", function (a) {
    this.Ib = cc11001100_hook("this.Ib", !0, "assign");
    M.prototype.R.call(this, a);
  }, "assign");
  m.Pa = cc11001100_hook("m.Pa", function (a) {
    this.Ib = cc11001100_hook("this.Ib", !0, "assign");
    M.prototype.Pa.call(this, a);
  }, "assign");
  function Pf() {
    var a = cc11001100_hook("a", void 0 === a ? Infinity : a, "var-init");
    return function (b) {
      return 0 >= a ? Ie : O(b, function (c) {
        var d = cc11001100_hook("d", this, "var-init"),
          e = cc11001100_hook("e", 0, "var-init"),
          f = cc11001100_hook("f", new H(), "var-init"),
          g,
          h = function () {
            var k = cc11001100_hook("k", !1, "var-init");
            g = cc11001100_hook("g", c.subscribe({
              next: function (l) {
                return d.next(l);
              },
              error: function (l) {
                return d.error(l);
              },
              complete: function () {
                ++e < a ? g ? (g.unsubscribe(), g = cc11001100_hook("g", null, "assign"), h()) : k = cc11001100_hook("k", !0, "assign") : d.complete();
              }
            }), "assign");
            k ? (g.unsubscribe(), g = cc11001100_hook("g", null, "assign"), h()) : f.add(g);
          };
        h();
        return f;
      });
    };
  }
  ;
  function Qf() {
    return new V();
  }
  function Rf() {
    return function (a) {
      return vf()(Ef(Qf)(a));
    };
  }
  ;
  (function () {
    function a(b) {
      cc11001100_hook("b", b, "function-parameter");
      this.message = cc11001100_hook("this.message", b, "assign");
      this.name = cc11001100_hook("this.name", "NotFoundError", "assign");
      return this;
    }
    a.prototype = cc11001100_hook("a.prototype", Object.create(Error.prototype), "assign");
    return a;
  })();
  (function () {
    function a(b) {
      cc11001100_hook("b", b, "function-parameter");
      this.message = cc11001100_hook("this.message", b, "assign");
      this.name = cc11001100_hook("this.name", "SequenceError", "assign");
      return this;
    }
    a.prototype = cc11001100_hook("a.prototype", Object.create(Error.prototype), "assign");
    return a;
  })();
  function W() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init"),
      b = cc11001100_hook("b", a[a.length - 1], "var-init");
    return de(b) ? (a.pop(), function (c) {
      return ze(a, c, b);
    }) : function (c) {
      return ze(a, c);
    };
  }
  ;
  var Sf = cc11001100_hook("Sf", 1, "var-init"),
    Tf,
    Uf = cc11001100_hook("Uf", {}, "var-init");
  function Vf(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a in Uf ? (delete Uf[a], !0) : !1;
  }
  var Wf = function (a) {
      var b = cc11001100_hook("b", Sf++, "var-init");
      Uf[b] = cc11001100_hook("Uf[b]", !0, "assign");
      Tf || (Tf = cc11001100_hook("Tf", Promise.resolve(), "assign"));
      Tf.then(function () {
        return Vf(b) && a();
      });
      return b;
    },
    Xf = function (a) {
      Vf(a);
    };
  var Zf = function () {
      return ((null == Yf ? void 0 : Yf.setImmediate) || Wf).apply(null, u(x.apply(0, arguments)));
    },
    Yf = cc11001100_hook("Yf", void 0, "var-init");
  var $f = function (a, b) {
    Zd.call(this, a, b);
    this.da = cc11001100_hook("this.da", a, "assign");
    this.Uc = cc11001100_hook("this.Uc", b, "assign");
  };
  v($f, Zd);
  $f.EMPTY = cc11001100_hook("$f.EMPTY", Zd.EMPTY, "assign");
  $f.prototype.Sb = cc11001100_hook("$f.prototype.Sb", function (a, b, c) {
    c = cc11001100_hook("c", void 0 === c ? 0 : c, "assign");
    if (null !== c && 0 < c) return Zd.prototype.Sb.call(this, a, b, c);
    a.actions.push(this);
    return a.Mc || (a.Mc = cc11001100_hook("a.Mc", Zf(a.flush.bind(a, void 0)), "assign"));
  }, "assign");
  $f.prototype.Rb = cc11001100_hook("$f.prototype.Rb", function (a, b, c) {
    c = cc11001100_hook("c", void 0 === c ? 0 : c, "assign");
    if (null !== c && 0 < c || null === c && 0 < this.delay) return Zd.prototype.Rb.call(this, a, b, c);
    0 === a.actions.length && (((null == Yf ? void 0 : Yf.clearImmediate) || Xf)(b), a.Mc = cc11001100_hook("a.Mc", void 0, "assign"));
  }, "assign");
  var ag = function () {
    ce.apply(this, arguments);
  };
  v(ag, ce);
  ag.prototype.flush = cc11001100_hook("ag.prototype.flush", function (a) {
    this.active = cc11001100_hook("this.active", !0, "assign");
    this.Mc = cc11001100_hook("this.Mc", void 0, "assign");
    var b = cc11001100_hook("b", this.actions, "var-init"),
      c,
      d = cc11001100_hook("d", -1, "var-init");
    a = cc11001100_hook("a", a || b.shift(), "assign");
    var e = cc11001100_hook("e", b.length, "var-init");
    do if (c = cc11001100_hook("c", a.execute(a.state, a.delay), "assign")) break; while (++d < e && (a = cc11001100_hook("a", b.shift(), "assign")));
    this.active = cc11001100_hook("this.active", !1, "assign");
    if (c) {
      for (; ++d < e && (a = cc11001100_hook("a", b.shift(), "assign"));) a.unsubscribe();
      throw c;
    }
  }, "assign");
  var bg = cc11001100_hook("bg", new ag($f), "var-init");
  var cg = function (a, b, c) {
    b = cc11001100_hook("b", void 0 === b ? 0 : b, "assign");
    c = cc11001100_hook("c", void 0 === c ? bg : c, "assign");
    this.source = cc11001100_hook("this.source", a, "assign");
    this.delayTime = cc11001100_hook("this.delayTime", b, "assign");
    this.da = cc11001100_hook("this.da", c, "assign");
    0 > b && (this.delayTime = cc11001100_hook("this.delayTime", 0, "assign"));
    de(c) || (this.da = cc11001100_hook("this.da", bg, "assign"));
  };
  v(cg, K);
  cg.create = cc11001100_hook("cg.create", K.create, "assign");
  cg.Tf = cc11001100_hook("cg.Tf", function (a) {
    return this.add(a.source.subscribe(a.Xd));
  }, "assign");
  cg.prototype.Y = cc11001100_hook("cg.prototype.Y", function (a) {
    return this.da.u(cg.Tf, this.delayTime, {
      source: cc11001100_hook("source", this.source, "object-key-init"),
      Xd: cc11001100_hook("Xd", a, "object-key-init")
    });
  }, "assign");
  function dg() {
    var a = cc11001100_hook("a", ke, "var-init");
    var b = cc11001100_hook("b", void 0 === b ? 0 : b, "var-init");
    return function (c) {
      return O(c, new eg(a, b));
    };
  }
  var eg = function (a, b) {
    this.da = cc11001100_hook("this.da", a, "assign");
    this.delay = cc11001100_hook("this.delay", b, "assign");
  };
  eg.prototype.call = cc11001100_hook("eg.prototype.call", function (a, b) {
    return new cg(b, this.delay, this.da).subscribe(a);
  }, "assign");
  function X(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return O(b, new fg(a));
    };
  }
  var fg = function (a) {
    this.J = cc11001100_hook("this.J", a, "assign");
  };
  fg.prototype.call = cc11001100_hook("fg.prototype.call", function (a, b) {
    return b.subscribe(new gg(a, this.J));
  }, "assign");
  var gg = function (a, b) {
    L.call(this, a);
    this.destination = cc11001100_hook("this.destination", a, "assign");
    this.J = cc11001100_hook("this.J", b, "assign");
    this.index = cc11001100_hook("this.index", 0, "assign");
  };
  v(gg, L);
  gg.EMPTY = cc11001100_hook("gg.EMPTY", L.EMPTY, "assign");
  gg.create = cc11001100_hook("gg.create", L.create, "assign");
  m = cc11001100_hook("m", gg.prototype, "assign");
  m.o = cc11001100_hook("m.o", function (a) {
    var b = cc11001100_hook("b", this.index++, "var-init");
    try {
      var c = cc11001100_hook("c", this.J(a, b), "var-init");
    } catch (d) {
      this.destination.error(d);
      return;
    }
    (a = cc11001100_hook("a", this.Cc, "assign")) && a.unsubscribe();
    a = cc11001100_hook("a", new Td(this), "assign");
    this.destination.add(a);
    this.Cc = cc11001100_hook("this.Cc", a, "assign");
    Vd(c, a);
  }, "assign");
  m.A = cc11001100_hook("m.A", function () {
    var a = cc11001100_hook("a", this.Cc, "var-init");
    a && !a.closed || L.prototype.A.call(this);
    this.unsubscribe();
  }, "assign");
  m.xa = cc11001100_hook("m.xa", function () {
    this.Cc = cc11001100_hook("this.Cc", void 0, "assign");
  }, "assign");
  m.R = cc11001100_hook("m.R", function () {
    this.Cc = cc11001100_hook("this.Cc", void 0, "assign");
    this.B && L.prototype.A.call(this);
  }, "assign");
  m.ta = cc11001100_hook("m.ta", function (a) {
    this.destination.next(a);
  }, "assign");
  function hg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", void 0 === b ? !1 : b, "assign");
    return function (c) {
      return O(c, new ig(a, b));
    };
  }
  var ig = function (a, b) {
    this.oa = cc11001100_hook("this.oa", a, "assign");
    this.Dd = cc11001100_hook("this.Dd", b, "assign");
  };
  ig.prototype.call = cc11001100_hook("ig.prototype.call", function (a, b) {
    return b.subscribe(new jg(a, this.oa, this.Dd));
  }, "assign");
  var jg = function (a, b, c) {
    I.call(this, a);
    this.oa = cc11001100_hook("this.oa", b, "assign");
    this.Dd = cc11001100_hook("this.Dd", c, "assign");
    this.index = cc11001100_hook("this.index", 0, "assign");
  };
  v(jg, I);
  jg.EMPTY = cc11001100_hook("jg.EMPTY", I.EMPTY, "assign");
  jg.create = cc11001100_hook("jg.create", I.create, "assign");
  jg.prototype.o = cc11001100_hook("jg.prototype.o", function (a) {
    var b = cc11001100_hook("b", this.destination, "var-init");
    try {
      var c = cc11001100_hook("c", this.oa(a, this.index++), "var-init");
    } catch (d) {
      b.error(d);
      return;
    }
    b = cc11001100_hook("b", this.destination, "assign");
    c ? b.next(a) : (this.Dd && b.next(a), b.complete());
  }, "assign");
  function kg() {}
  ;
  function lg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return function (d) {
      return O(d, new mg(a, b, c));
    };
  }
  var mg = function (a, b, c) {
    this.Jg = cc11001100_hook("this.Jg", a, "assign");
    this.error = cc11001100_hook("this.error", b, "assign");
    this.complete = cc11001100_hook("this.complete", c, "assign");
  };
  mg.prototype.call = cc11001100_hook("mg.prototype.call", function (a, b) {
    return b.subscribe(new ng(a, this.Jg, this.error, this.complete));
  }, "assign");
  var ng = function (a, b, c, d) {
    I.call(this, a);
    this.Yc = cc11001100_hook("this.Yc", this.Zc = cc11001100_hook("this.Zc", this.ad = cc11001100_hook("this.ad", kg, "assign"), "assign"), "assign");
    this.Zc = cc11001100_hook("this.Zc", c || kg, "assign");
    this.Yc = cc11001100_hook("this.Yc", d || kg, "assign");
    yd(b) ? (this.wa = cc11001100_hook("this.wa", this, "assign"), this.ad = cc11001100_hook("this.ad", b, "assign")) : b && (this.wa = cc11001100_hook("this.wa", b, "assign"), this.ad = cc11001100_hook("this.ad", b.next || kg, "assign"), this.Zc = cc11001100_hook("this.Zc", b.error || kg, "assign"), this.Yc = cc11001100_hook("this.Yc", b.complete || kg, "assign"));
  };
  v(ng, I);
  ng.EMPTY = cc11001100_hook("ng.EMPTY", I.EMPTY, "assign");
  ng.create = cc11001100_hook("ng.create", I.create, "assign");
  ng.prototype.o = cc11001100_hook("ng.prototype.o", function (a) {
    try {
      this.ad.call(this.wa, a);
    } catch (b) {
      this.destination.error(b);
      return;
    }
    this.destination.next(a);
  }, "assign");
  ng.prototype.U = cc11001100_hook("ng.prototype.U", function (a) {
    try {
      this.Zc.call(this.wa, a);
    } catch (b) {
      this.destination.error(b);
      return;
    }
    this.destination.error(a);
  }, "assign");
  ng.prototype.A = cc11001100_hook("ng.prototype.A", function () {
    try {
      this.Yc.call(this.wa);
    } catch (a) {
      this.destination.error(a);
      return;
    }
    return this.destination.complete();
  }, "assign");
  (function () {
    function a(b) {
      cc11001100_hook("b", b, "function-parameter");
      this.message = cc11001100_hook("this.message", "Timeout has occurred", "assign");
      this.name = cc11001100_hook("this.name", "TimeoutError", "assign");
      this.info = cc11001100_hook("this.info", void 0 === b ? null : b, "assign");
      return this;
    }
    a.prototype = cc11001100_hook("a.prototype", Object.create(Error.prototype), "assign");
    return a;
  })();
  function og() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init");
    return function (b) {
      var c;
      "function" === typeof a[a.length - 1] && (c = cc11001100_hook("c", a.pop(), "assign"));
      return O(b, new pg(a, c));
    };
  }
  var pg = function (a, b) {
    this.Qa = cc11001100_hook("this.Qa", a, "assign");
    this.J = cc11001100_hook("this.J", b, "assign");
  };
  pg.prototype.call = cc11001100_hook("pg.prototype.call", function (a, b) {
    return b.subscribe(new qg(a, this.Qa, this.J));
  }, "assign");
  var qg = function (a, b, c) {
    M.call(this, a);
    this.J = cc11001100_hook("this.J", c, "assign");
    this.gb = cc11001100_hook("this.gb", [], "assign");
    a = cc11001100_hook("a", b.length, "assign");
    this.values = cc11001100_hook("this.values", Array(a), "assign");
    for (c = cc11001100_hook("c", 0, "assign"); c < a; c++) this.gb.push(c);
    for (c = cc11001100_hook("c", 0, "assign"); c < a; c++) this.add(Vd(b[c], new Ud(this, void 0, c)));
  };
  v(qg, M);
  qg.EMPTY = cc11001100_hook("qg.EMPTY", M.EMPTY, "assign");
  qg.create = cc11001100_hook("qg.create", M.create, "assign");
  qg.prototype.ta = cc11001100_hook("qg.prototype.ta", function (a, b, c) {
    this.values[c] = cc11001100_hook("this.values[c]", b, "assign");
    b = cc11001100_hook("b", this.gb, "assign");
    0 < b.length && (c = cc11001100_hook("c", b.indexOf(c), "assign"), -1 !== c && b.splice(c, 1));
  }, "assign");
  qg.prototype.R = cc11001100_hook("qg.prototype.R", function () {}, "assign");
  qg.prototype.o = cc11001100_hook("qg.prototype.o", function (a) {
    0 === this.gb.length && (a = cc11001100_hook("a", [a].concat(u(this.values)), "assign"), this.J ? this.vf(a) : this.destination.next(a));
  }, "assign");
  qg.prototype.vf = cc11001100_hook("qg.prototype.vf", function (a) {
    try {
      var b = cc11001100_hook("b", this.J.apply(this, a), "var-init");
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  }, "assign");
  var rg = cc11001100_hook("rg", {}, "var-init"),
    sg = cc11001100_hook("sg", (rg["data-google-av-cxn"] = cc11001100_hook("rg[\"data-google-av-cxn\"]", "_avicxn_", "assign"), rg["data-google-av-cpmav"] = cc11001100_hook("rg[\"data-google-av-cpmav\"]", "_cvu_", "assign"), rg["data-google-av-metadata"] = cc11001100_hook("rg[\"data-google-av-metadata\"]", "_avm_", "assign"), rg["data-google-av-adk"] = cc11001100_hook("rg[\"data-google-av-adk\"]", "_adk_", "assign"), rg["data-google-av-btr"] = cc11001100_hook("rg[\"data-google-av-btr\"]", void 0, "assign"), rg["data-google-av-override"] = cc11001100_hook("rg[\"data-google-av-override\"]", void 0, "assign"), rg["data-google-av-dm"] = cc11001100_hook("rg[\"data-google-av-dm\"]", void 0, "assign"), rg["data-google-av-immediate"] = cc11001100_hook("rg[\"data-google-av-immediate\"]", void 0, "assign"), rg["data-google-av-aid"] = cc11001100_hook("rg[\"data-google-av-aid\"]", void 0, "assign"), rg["data-google-av-naid"] = cc11001100_hook("rg[\"data-google-av-naid\"]", void 0, "assign"), rg["data-google-av-inapp"] = cc11001100_hook("rg[\"data-google-av-inapp\"]", void 0, "assign"), rg["data-google-av-slift"] = cc11001100_hook("rg[\"data-google-av-slift\"]", void 0, "assign"), rg["data-google-av-itpl"] = cc11001100_hook("rg[\"data-google-av-itpl\"]", void 0, "assign"), rg["data-google-av-ext-cxn"] = cc11001100_hook("rg[\"data-google-av-ext-cxn\"]", void 0, "assign"), rg["data-google-av-rs"] = cc11001100_hook("rg[\"data-google-av-rs\"]", void 0, "assign"), rg["data-google-av-flags"] = cc11001100_hook("rg[\"data-google-av-flags\"]", void 0, "assign"), rg["data-google-av-turtlex"] = cc11001100_hook("rg[\"data-google-av-turtlex\"]", void 0, "assign"), rg["data-google-av-ufs-integrator-metadata"] = cc11001100_hook("rg[\"data-google-av-ufs-integrator-metadata\"]", void 0, "assign"), rg["data-google-av-vattr"] = cc11001100_hook("rg[\"data-google-av-vattr\"]", void 0, "assign"), rg), "var-init"),
    tg = cc11001100_hook("tg", {}, "var-init"),
    ug = cc11001100_hook("ug", (tg["data-google-av-adk"] = cc11001100_hook("tg[\"data-google-av-adk\"]", "googleAvAdk", "assign"), tg["data-google-av-btr"] = cc11001100_hook("tg[\"data-google-av-btr\"]", "googleAvBtr", "assign"), tg["data-google-av-cpmav"] = cc11001100_hook("tg[\"data-google-av-cpmav\"]", "googleAvCpmav", "assign"), tg["data-google-av-dm"] = cc11001100_hook("tg[\"data-google-av-dm\"]", "googleAvDm", "assign"), tg["data-google-av-ext-cxn"] = cc11001100_hook("tg[\"data-google-av-ext-cxn\"]", "googleAvExtCxn", "assign"), tg["data-google-av-immediate"] = cc11001100_hook("tg[\"data-google-av-immediate\"]", "googleAvImmediate", "assign"), tg["data-google-av-inapp"] = cc11001100_hook("tg[\"data-google-av-inapp\"]", "googleAvInapp", "assign"), tg["data-google-av-itpl"] = cc11001100_hook("tg[\"data-google-av-itpl\"]", "googleAvItpl", "assign"), tg["data-google-av-metadata"] = cc11001100_hook("tg[\"data-google-av-metadata\"]", "googleAvMetadata", "assign"), tg["data-google-av-naid"] = cc11001100_hook("tg[\"data-google-av-naid\"]", "googleAvNaid", "assign"), tg["data-google-av-override"] = cc11001100_hook("tg[\"data-google-av-override\"]", "googleAvOverride", "assign"), tg["data-google-av-rs"] = cc11001100_hook("tg[\"data-google-av-rs\"]", "googleAvRs", "assign"), tg["data-google-av-slift"] = cc11001100_hook("tg[\"data-google-av-slift\"]", "googleAvSlift", "assign"), tg["data-google-av-cxn"] = cc11001100_hook("tg[\"data-google-av-cxn\"]", "googleAvCxn", "assign"), tg["data-google-av-aid"] = cc11001100_hook("tg[\"data-google-av-aid\"]", void 0, "assign"), tg["data-google-av-flags"] = cc11001100_hook("tg[\"data-google-av-flags\"]", "googleAvFlags", "assign"), tg["data-google-av-turtlex"] = cc11001100_hook("tg[\"data-google-av-turtlex\"]", "googleAvTurtlex", "assign"), tg["data-google-av-ufs-integrator-metadata"] = cc11001100_hook("tg[\"data-google-av-ufs-integrator-metadata\"]", "googleAvUfsIntegratorMetadata", "assign"), tg["data-google-av-vattr"] = cc11001100_hook("tg[\"data-google-av-vattr\"]", "googleAvVattr", "assign"), tg), "var-init");
  function vg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (void 0 === a.j) return null;
    try {
      var c;
      var d = cc11001100_hook("d", null != (c = cc11001100_hook("c", a.j.getAttribute(b), "assign")) ? c : null, "var-init");
      if (null !== d) return d;
    } catch (g) {}
    try {
      var e = cc11001100_hook("e", sg[b], "var-init");
      if (e && (d = cc11001100_hook("d", a.j[e], "assign"), void 0 !== d)) return d;
    } catch (g) {}
    try {
      var f = cc11001100_hook("f", ug[b], "var-init");
      if (f) return qd(a.j, f);
    } catch (g) {}
    return null;
  }
  function wg(a) {
    cc11001100_hook("a", a, "function-parameter");
    return R(function (b) {
      return vg(b, a);
    });
  }
  ;
  function xg(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (yd(c)) {
      var d = cc11001100_hook("d", c, "var-init");
      c = cc11001100_hook("c", void 0, "assign");
    }
    return d ? xg(a, b, c).h(R(function (e) {
      return xd(e) ? d.apply(null, u(e)) : d(e);
    })) : new K(function (e) {
      yg(a, b, function (f) {
        1 < arguments.length ? e.next(Array.prototype.slice.call(arguments)) : e.next(f);
      }, e, c);
    });
  }
  function yg(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (a && "function" === typeof a.addEventListener && "function" === typeof a.removeEventListener) {
      a.addEventListener(b, c, e);
      var f = function () {
        return a.removeEventListener(b, c, e);
      };
    } else if (a && "function" === typeof a.Og && "function" === typeof a.Ng) a.Og(b, c), f = cc11001100_hook("f", function () {
      return a.Ng(b, c);
    }, "assign");else if (a && "function" === typeof a.addListener && "function" === typeof a.removeListener) a.addListener(b, c), f = cc11001100_hook("f", function () {
      return a.removeListener(b, c);
    }, "assign");else if (a && a.length) for (var g = cc11001100_hook("g", 0, "var-init"), h = cc11001100_hook("h", a.length, "var-init"); g < h; g++) yg(a[g], b, c, d, e);else throw new TypeError("N");
    d.add(f);
  }
  ;
  var zg = cc11001100_hook("zg", new K(kg), "var-init");
  var Ag = function (a, b) {
    Zd.call(this, a, b);
    this.da = cc11001100_hook("this.da", a, "assign");
    this.Uc = cc11001100_hook("this.Uc", b, "assign");
  };
  v(Ag, Zd);
  Ag.EMPTY = cc11001100_hook("Ag.EMPTY", Zd.EMPTY, "assign");
  Ag.prototype.u = cc11001100_hook("Ag.prototype.u", function (a, b) {
    b = cc11001100_hook("b", void 0 === b ? 0 : b, "assign");
    if (0 < b) return Zd.prototype.u.call(this, a, b);
    this.delay = cc11001100_hook("this.delay", b, "assign");
    this.state = cc11001100_hook("this.state", a, "assign");
    this.da.flush(this);
    return this;
  }, "assign");
  Ag.prototype.execute = cc11001100_hook("Ag.prototype.execute", function (a, b) {
    return 0 < b || this.closed ? Zd.prototype.execute.call(this, a, b) : this.he(a, b);
  }, "assign");
  Ag.prototype.Sb = cc11001100_hook("Ag.prototype.Sb", function (a, b, c) {
    c = cc11001100_hook("c", void 0 === c ? 0 : c, "assign");
    return null !== c && 0 < c || null === c && 0 < this.delay ? Zd.prototype.Sb.call(this, a, b, c) : a.flush(this);
  }, "assign");
  var Bg = function () {
    ce.apply(this, arguments);
  };
  v(Bg, ce);
  var ke = cc11001100_hook("ke", new Bg(Ag), "var-init");
  var Cg = cc11001100_hook("Cg", J(function (a) {
    return R(function (b) {
      return a.map(function (c) {
        return vg(b, c);
      });
    });
  }(["data-google-av-cxn", "data-google-av-turtlex"]), R(function (a) {
    var b = cc11001100_hook("b", r(a), "var-init");
    a = cc11001100_hook("a", b.next().value, "assign");
    b = cc11001100_hook("b", b.next().value, "assign");
    if (!a) {
      if (null !== b) return [];
      throw new Qa();
    }
    return a.split("|");
  })), "var-init");
  var Dg = function () {
    return J(ve(function (a) {
      return a.element.h(Cg, me(function () {
        return Q([""]);
      })).h(R(function (b) {
        return {
          Ha: cc11001100_hook("Ha", b, "object-key-init"),
          pc: cc11001100_hook("pc", a, "object-key-init")
        };
      }));
    }), Ke(function (a) {
      return a.Ha.sort().join(";");
    }), R(function (a) {
      return a.pc;
    }));
  };
  var Eg = function () {
      var a = cc11001100_hook("a", {}, "var-init");
      this.va = cc11001100_hook("this.va", (a[3] = cc11001100_hook("a[3]", [], "assign"), a[2] = cc11001100_hook("a[2]", [], "assign"), a[1] = cc11001100_hook("a[1]", [], "assign"), a), "assign");
      this.Hd = cc11001100_hook("this.Hd", !1, "assign");
    },
    Gg = function (a, b, c) {
      var d = cc11001100_hook("d", Fg(a, c), "var-init");
      a.va[c].push(b);
      d && 1 === a.va[c].length && a.flush();
    },
    Fg = function (a, b) {
      return Object.keys(a.va).map(function (c) {
        return Number(c);
      }).filter(function (c) {
        return !isNaN(c) && c > b;
      }).every(function (c) {
        return 0 === a.va[c].length;
      });
    };
  Eg.prototype.flush = cc11001100_hook("Eg.prototype.flush", function () {
    if (!this.Hd) {
      this.Hd = cc11001100_hook("this.Hd", !0, "assign");
      try {
        for (; Object.values(this.va).some(function (a) {
          return 0 < a.length;
        });) Hg(this, 3), Hg(this, 2), Hg(this, 1);
      } catch (a) {
        throw Object.values(this.va).forEach(function (b) {
          return void b.splice(0, b.length);
        }), a;
      } finally {
        this.Hd = cc11001100_hook("this.Hd", !1, "assign");
      }
    }
  }, "assign");
  var Hg = function (a, b) {
    for (; Fg(a, b) && 0 < a.va[b].length;) a.va[b][0](), a.va[b].shift();
  };
  da.Object.defineProperties(Eg.prototype, {
    ef: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return Object.values(this.va).some(function (a) {
          return 0 < a.length;
        });
      }
    }
  });
  function Ig(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return b.h(Jg(a, Ef(new V())));
    };
  }
  function Y(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return function (c) {
      return c.h(Jg(a, Lf(b)));
    };
  }
  function Jg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    function c(d) {
      cc11001100_hook("d", d, "function-parameter");
      return new K(function (e) {
        return d.subscribe(function (f) {
          Gg(a, function () {
            return void e.next(f);
          }, 3);
        }, function (f) {
          Gg(a, function () {
            return void e.error(f);
          }, 3);
        }, function () {
          Gg(a, function () {
            return void e.complete();
          }, 3);
        });
      });
    }
    return J(c, dg(), b, vf(), c);
  }
  ;
  var Z = function (a) {
    this.value = cc11001100_hook("this.value", a, "assign");
  };
  Z.prototype.V = cc11001100_hook("Z.prototype.V", function (a) {
    return Q(this.value).h(Y(a, 1));
  }, "assign");
  var Kg = function (a) {
    this.value = cc11001100_hook("this.value", a, "assign");
    this.Sd = cc11001100_hook("this.Sd", new V(), "assign");
  };
  Kg.prototype.release = cc11001100_hook("Kg.prototype.release", function () {
    this.Sd.next();
    this.Sd.complete();
    this.value = cc11001100_hook("this.value", void 0, "assign");
  }, "assign");
  da.Object.defineProperties(Kg.prototype, {
    j: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.value;
      }
    },
    released: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.Sd;
      }
    }
  });
  var Mg = function () {
      return ve(function (a) {
        return le(Lg(a)).h(Ig(a.i));
      });
    },
    Lg = function (a) {
      return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass").map(function (b) {
        return new Kg(b);
      });
    };
  function Ng(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.af, "var-init"),
      c = cc11001100_hook("c", a.document.Pg, "var-init");
    return uf(Q({}), c, b).h(R(function () {
      return a;
    }));
  }
  ;
  function Og() {
    return J(U(function (a) {
      return void 0 !== a;
    }), R(function (a) {
      return a;
    }));
  }
  ;
  function Pg() {
    return function (a) {
      var b = cc11001100_hook("b", [], "var-init");
      return a.h(U(function (c) {
        if (void 0 === c.j || b.some(function (d) {
          return d.j === c.j;
        })) return !1;
        b.push(c);
        return !0;
      }));
    };
  }
  ;
  function Qg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", void 0 === b ? Ie : b, "assign");
    return uf(Ng(a), b).h(Mg(), Pg(), Og(), Y(a.i, 1));
  }
  ;
  var Rg = function (a) {
      this.key = cc11001100_hook("this.key", a, "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", !1, "assign");
      this.valueType = cc11001100_hook("this.valueType", "boolean", "assign");
    },
    Sg = function (a) {
      this.key = cc11001100_hook("this.key", a, "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", 0, "assign");
      this.valueType = cc11001100_hook("this.valueType", "number", "assign");
    };
  var Tg = cc11001100_hook("Tg", new Rg("100006"), "var-init"),
    Ug = cc11001100_hook("Ug", new Sg("45362137"), "var-init"),
    Vg = cc11001100_hook("Vg", new Rg("45377435"), "var-init"),
    Wg = cc11001100_hook("Wg", new Rg("45372163"), "var-init"),
    Xg = cc11001100_hook("Xg", new Rg("45382077"), "var-init");
  var Yg = cc11001100_hook("Yg", new Sg("45389692"), "var-init");
  function Zg(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return function (c) {
      return new K(function (d) {
        return c.subscribe(function (e) {
          a.Ga(b, function () {
            d.next(e);
          })();
        }, function (e) {
          a.Ga(b, function () {
            d.error(e);
          })();
        }, function () {
          a.Ga(b, function () {
            d.complete();
          })();
        });
      });
    };
  }
  ;
  function $g(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.global, "assign");
    if ("undefined" === typeof a.__google_lidar_) return a.__google_lidar_ = cc11001100_hook("a.__google_lidar_", 1, "assign"), !1;
    a.__google_lidar_ = cc11001100_hook("a.__google_lidar_", Number(a.__google_lidar_) + 1, "assign");
    var b = cc11001100_hook("b", a.__google_lidar_adblocks_count_, "var-init");
    if ("number" === typeof b && 0 < b && (a = cc11001100_hook("a", a.__google_lidar_radf_, "assign"), "function" === typeof a)) try {
      a();
    } catch (c) {}
    return !0;
  }
  function ah(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.global, "var-init");
    b.osdlfm = cc11001100_hook("b.osdlfm", function () {
      return b.__google_lidar_radf_;
    }, "assign");
    if (void 0 !== b.__google_lidar_radf_) return Ie;
    b.__google_lidar_adblocks_count_ = cc11001100_hook("b.__google_lidar_adblocks_count_", 1, "assign");
    var c = cc11001100_hook("c", new V(), "var-init");
    b.__google_lidar_radf_ = cc11001100_hook("b.__google_lidar_radf_", function () {
      return void c.next(a);
    }, "assign");
    return c.h(Zg(a.s, 743));
  }
  ;
  var bh = function () {
      this.Ae = cc11001100_hook("this.Ae", {}, "assign");
    },
    ch = function (a, b) {
      a = cc11001100_hook("a", a.Ae[b.key], "assign");
      if ("proto" === b.valueType) {
        try {
          var c = cc11001100_hook("c", JSON.parse(a), "var-init");
          if (Array.isArray(c)) return c;
        } catch (d) {}
        return b.defaultValue;
      }
      return typeof a === typeof b.defaultValue ? a : b.defaultValue;
    };
  var dh = function () {
    this.ve = cc11001100_hook("this.ve", new Map(), "assign");
  };
  dh.prototype.start = cc11001100_hook("dh.prototype.start", function (a, b, c, d) {
    var e = cc11001100_hook("e", this, "var-init");
    void 0 === this.Td && (this.ue = cc11001100_hook("this.ue", d, "assign"), c = cc11001100_hook("c", $g(a), "assign"), d = cc11001100_hook("d", ah(a), "assign"), d = cc11001100_hook("d", Qg(a, d), "assign"), this.Td = cc11001100_hook("this.Td", (c ? Ie : d.h(R(function (f) {
      return Object.freeze({
        Gb: cc11001100_hook("Gb", od(), "object-key-init"),
        element: cc11001100_hook("element", new Z(f).V(a.i), "object-key-init")
      });
    }), Dg())).subscribe(function (f) {
      var g = cc11001100_hook("g", Symbol(), "var-init");
      e.ve.set(g, f);
      f.element.h(Se(1)).subscribe(function (h) {
        var k = cc11001100_hook("k", vg(h, "data-google-av-flags"), "var-init"),
          l = cc11001100_hook("l", new bh(), "var-init");
        if (null !== k) try {
          var p = cc11001100_hook("p", JSON.parse(k)[0], "var-init");
          k = cc11001100_hook("k", "", "assign");
          for (var t = cc11001100_hook("t", 0, "var-init"); t < p.length; t++) k += cc11001100_hook("k", String.fromCharCode(p.charCodeAt(t) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(t % 10)), "assign");
          l.Ae = cc11001100_hook("l.Ae", JSON.parse(k), "assign");
        } catch (ta) {}
        var n, w, A, y, C, G;
        p = cc11001100_hook("p", {
          Kf: cc11001100_hook("Kf", null != (n = cc11001100_hook("n", null == l ? void 0 : ch(l, Tg), "assign")) ? n : !1, "object-key-init"),
          cg: cc11001100_hook("cg", null != (w = cc11001100_hook("w", null == l ? void 0 : ch(l, Ug), "assign")) ? w : 0, "object-key-init"),
          dg: cc11001100_hook("dg", null != (A = cc11001100_hook("A", null == l ? void 0 : ch(l, Vg), "assign")) ? A : !1, "object-key-init"),
          dh: cc11001100_hook("dh", null != (y = cc11001100_hook("y", null == l ? void 0 : ch(l, Wg), "assign")) ? y : !1, "object-key-init"),
          ih: cc11001100_hook("ih", null != (C = cc11001100_hook("C", null == l ? void 0 : ch(l, Xg), "assign")) ? C : !1, "object-key-init"),
          Pf: cc11001100_hook("Pf", null != (G = cc11001100_hook("G", null == l ? void 0 : ch(l, Yg), "assign")) ? G : 0, "object-key-init")
        }, "assign");
        h = cc11001100_hook("h", vg(h, "data-google-av-ufs-integrator-metadata"), "assign");
        a: {
          if (null !== h) try {
            var N = cc11001100_hook("N", nd(h), "var-init");
            break a;
          } catch (ta) {}
          N = cc11001100_hook("N", new md(), "assign");
        }
        b(g, N, p);
      });
    }), "assign"), c && this.lb());
  }, "assign");
  dh.prototype.lb = cc11001100_hook("dh.prototype.lb", function () {
    var a, b;
    null == (a = cc11001100_hook("a", this.Td, "assign")) || null == (b = cc11001100_hook("b", a.unsubscribe, "assign")) || b.call(a);
    this.Td = cc11001100_hook("this.Td", void 0, "assign");
    var c;
    null == (c = cc11001100_hook("c", this.ue, "assign")) || c.call(this);
    this.ue = cc11001100_hook("this.ue", void 0, "assign");
  }, "assign");
  var eh = function (a, b) {
    this.context = cc11001100_hook("this.context", a, "assign");
    this.sb = cc11001100_hook("this.sb", b, "assign");
  };
  eh.prototype.I = cc11001100_hook("eh.prototype.I", function (a) {
    return this.sb.I(a);
  }, "assign");
  eh.prototype.O = cc11001100_hook("eh.prototype.O", function (a, b) {
    if (!this.I(b)) throw new Na();
    return new fh(this.context, this.sb, null != b ? b : void 0, a);
  }, "assign");
  var fh = function (a, b, c, d) {
    var e = cc11001100_hook("e", this, "var-init");
    this.sb = cc11001100_hook("this.sb", b, "assign");
    this.properties = cc11001100_hook("this.properties", c, "assign");
    this.url = cc11001100_hook("this.url", d, "assign");
    this.Ec = cc11001100_hook("this.Ec", !0, "assign");
    this.kb = cc11001100_hook("this.kb", new Map(), "assign");
    this.body = cc11001100_hook("this.body", void 0, "assign");
    var f;
    this.method = cc11001100_hook("this.method", null != (f = cc11001100_hook("f", null == c ? void 0 : c.Bb, "assign")) ? f : "GET", "assign");
    this.Ff = cc11001100_hook("this.Ff", a.yd().subscribe(function () {
      e.sendNow();
    }), "assign");
  };
  fh.prototype.deactivate = cc11001100_hook("fh.prototype.deactivate", function () {
    this.Ec = cc11001100_hook("this.Ec", !1, "assign");
  }, "assign");
  fh.prototype.sendNow = cc11001100_hook("fh.prototype.sendNow", function () {
    if (this.Ec) if (this.Ff.unsubscribe(), this.sb.I(this.properties)) try {
      if (0 < this.kb.size || void 0 !== this.body) {
        var a;
        this.sb.Kc(this.kb, null != (a = cc11001100_hook("a", this.body, "assign")) ? a : "", this.url);
      } else this.sb.ping(this.url);
      this.Ec = cc11001100_hook("this.Ec", !1, "assign");
    } catch (b) {} else this.Ec = cc11001100_hook("this.Ec", !1, "assign");
  }, "assign");
  function gh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", !1, "var-init");
    return new K(function (d) {
      var e = cc11001100_hook("e", a.setTimeout(function () {
        c = cc11001100_hook("c", !0, "assign");
        d.next(!0);
        d.complete();
      }, b), "var-init");
      return function () {
        c || a.clearTimeout(e);
      };
    });
  }
  ;
  var hh = function (a) {
    this.context = cc11001100_hook("this.context", a, "assign");
  };
  hh.prototype.I = cc11001100_hook("hh.prototype.I", function () {
    return !ih(this.context) && !!this.context.global.fetch;
  }, "assign");
  hh.prototype.ping = cc11001100_hook("hh.prototype.ping", function () {
    var a = cc11001100_hook("a", this, "var-init");
    return uf.apply(null, u(x.apply(0, arguments).map(function (b) {
      return le(a.context.global.fetch(b, {
        method: cc11001100_hook("method", "GET", "object-key-init"),
        cache: cc11001100_hook("cache", "no-cache", "object-key-init"),
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init")
      })).h(R(function (c) {
        return 200 === c.status;
      }));
    }))).h(af(function (b) {
      return b;
    }), nf());
  }, "assign");
  hh.prototype.Kc = cc11001100_hook("hh.prototype.Kc", function (a, b) {
    for (var c = cc11001100_hook("c", x.apply(2, arguments), "var-init"), d = cc11001100_hook("d", this, "var-init"), e = cc11001100_hook("e", new Headers(), "var-init"), f = cc11001100_hook("f", r(a.entries()), "var-init"), g = cc11001100_hook("g", f.next(), "var-init"); !g.done; g = cc11001100_hook("g", f.next(), "assign")) {
      var h = cc11001100_hook("h", r(g.value), "var-init");
      g = cc11001100_hook("g", h.next().value, "assign");
      h = cc11001100_hook("h", h.next().value, "assign");
      e.set(g, h);
    }
    uf.apply(null, u(c.map(function (k) {
      return le(d.context.global.fetch(k, {
        method: cc11001100_hook("method", "GET", "object-key-init"),
        cache: cc11001100_hook("cache", "no-cache", "object-key-init"),
        keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
        mode: cc11001100_hook("mode", "no-cors", "object-key-init"),
        headers: cc11001100_hook("headers", e, "object-key-init"),
        body: cc11001100_hook("body", b, "object-key-init")
      })).h(R(function (l) {
        return 200 === l.status;
      }));
    }))).h(af(function (k) {
      return k;
    }), nf());
  }, "assign");
  function jh(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a.global, "assign");
    if (a.PendingGetBeacon) return a.PendingGetBeacon;
  }
  var mh = function (a) {
      this.context = cc11001100_hook("this.context", a, "assign");
      if (void 0 === kh) {
        var b,
          c,
          d = cc11001100_hook("d", null == (b = cc11001100_hook("b", a.global, "assign")) ? void 0 : null == (c = cc11001100_hook("c", b.document, "assign")) ? void 0 : c.createElement("meta"), "var-init");
        try {
          d && (d.httpEquiv = cc11001100_hook("d.httpEquiv", "origin-trial", "assign"), d.content = cc11001100_hook("d.content", "A/6hmwx8DpHud613fSYYa2C2T61iC513V4BYG/pBH4zs5sGsUc9RgaPKhfk3JhHF30N/9/NntWzEq28kkrMxpgQAAABweyJvcmlnaW4iOiJodHRwczovL2FkLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUGVuZGluZ0JlYWNvbkFQSSIsImV4cGlyeSI6MTY3ODIzMzU5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "assign"), a.global.document.head.append(d));
        } catch (e) {}
        kh = cc11001100_hook("kh", d, "assign");
      }
      lh = cc11001100_hook("lh", !0, "assign");
    },
    kh;
  mh.prototype.I = cc11001100_hook("mh.prototype.I", function (a) {
    return lh && !ih(this.context) && void 0 !== jh(this.context) && !(null == a ? 0 : a.jc) && "POST" !== (null == a ? void 0 : a.Bb) && !(null == a ? 0 : a.kb) && !(null == a ? 0 : a.od);
  }, "assign");
  mh.prototype.O = cc11001100_hook("mh.prototype.O", function (a, b) {
    if (!this.I(b)) throw new Na();
    return new nh(this.context, a);
  }, "assign");
  var lh = cc11001100_hook("lh", !1, "var-init"),
    nh = function (a, b) {
      this.context = cc11001100_hook("this.context", a, "assign");
      this.Zd = cc11001100_hook("this.Zd", b, "assign");
      a = cc11001100_hook("a", jh(this.context), "assign");
      if (void 0 === a) throw Error();
      this.ee = cc11001100_hook("this.ee", new a(oh(this), {}), "assign");
    },
    oh = function (a) {
      a = cc11001100_hook("a", a.Zd, "assign");
      return ("&" === a.slice(-1)[0] ? a : a + "&") + "pbapi=1";
    };
  nh.prototype.deactivate = cc11001100_hook("nh.prototype.deactivate", function () {
    this.ee.deactivate();
  }, "assign");
  nh.prototype.sendNow = cc11001100_hook("nh.prototype.sendNow", function () {
    this.ee.sendNow();
  }, "assign");
  da.Object.defineProperties(nh.prototype, {
    url: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.Zd;
      },
      set: function (a) {
        this.Zd = cc11001100_hook("this.Zd", a, "assign");
        this.ee.setURL(oh(this));
      }
    },
    method: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return "GET";
      },
      set: function (a) {
        if ("GET" !== a) throw new Na();
      }
    }
  });
  function ph(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", qh(a), "var-init");
    return null === b ? new Z(null) : b.h(R(function (c) {
      c = cc11001100_hook("c", c.wb(), "assign");
      if (gc) c = cc11001100_hook("c", Da.btoa(c), "assign");else {
        for (var d = cc11001100_hook("d", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < c.length; f++) {
          var g = cc11001100_hook("g", c.charCodeAt(f), "var-init");
          if (255 < g) throw Error("n");
          d[e++] = cc11001100_hook("d[e++]", g, "assign");
        }
        c = cc11001100_hook("c", hc(d), "assign");
      }
      return c;
    }), Se(1), Y(a.i, 1));
  }
  ;
  function rh(a) {
    cc11001100_hook("a", a, "function-parameter");
    function b(c) {
      cc11001100_hook("c", c, "function-parameter");
      return "boolean" === typeof c || "string" === typeof c || "number" === typeof c || void 0 === c || null === c;
    }
    return b(a) ? !0 : Array.isArray(a) ? a.every(b) : "object" === typeof a ? Object.keys(a).every(function (c) {
      return "string" === typeof c;
    }) && Object.values(a).every(function (c) {
      return Array.isArray(c) ? c.every(b) : b(c);
    }) : !1;
  }
  function sh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return rh(a) ? a : String(a);
  }
  ;
  function th(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b, c, d;
    return !!a && "boolean" === typeof a.active && "function" === typeof (null == (b = cc11001100_hook("b", a.clock, "assign")) ? void 0 : b.now) && void 0 !== (null == (c = cc11001100_hook("c", a.clock, "assign")) ? void 0 : c.timeline) && !(null == (d = cc11001100_hook("d", a.C, "assign")) || !d.timestamp) && "function" === typeof a.aa && "function" === typeof a.ba && "function" === typeof a.ha && "function" === typeof a.map && "function" === typeof a.ka;
  }
  ;
  function uh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new K(function (c) {
      var d = cc11001100_hook("d", !1, "var-init"),
        e = cc11001100_hook("e", Array(b.length), "var-init");
      e.fill(void 0);
      var f = cc11001100_hook("f", new Set(), "var-init"),
        g = cc11001100_hook("g", new Set(), "var-init"),
        h = function (t, n) {
          a.ef ? (e[n] = cc11001100_hook("e[n]", t, "assign"), f.add(n), d || (d = cc11001100_hook("d", !0, "assign"), Gg(a, function () {
            d = cc11001100_hook("d", !1, "assign");
            c.next(Lb(e));
          }, 1))) : c.error(new Ra(n));
        },
        k = function (t, n) {
          g.add(n);
          f.add(n);
          Gg(a, function () {
            c.error(t);
          }, 1);
        },
        l = function (t) {
          g.add(t);
          Gg(a, function () {
            g.size === b.length && c.complete();
          }, 1);
        },
        p = cc11001100_hook("p", b.map(function (t, n) {
          return t.subscribe(function (w) {
            return void h(w, n);
          }, function (w) {
            return void k(w, n);
          }, function () {
            return void l(n);
          });
        }), "var-init");
      return function () {
        p.forEach(function (t) {
          return void t.unsubscribe();
        });
      };
    });
  }
  ;
  function vh(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    function d() {
      if (b.Va) {
        var C = cc11001100_hook("C", b.Va, "var-init"),
          G = cc11001100_hook("G", C.next, "var-init");
        var N = cc11001100_hook("N", {
          Nh: cc11001100_hook("Nh", c, "object-key-init"),
          Zh: cc11001100_hook("Zh", e, "object-key-init"),
          ai: cc11001100_hook("ai", Object.assign({}, f), "object-key-init"),
          Sh: cc11001100_hook("Sh", g, "object-key-init"),
          errorMessage: cc11001100_hook("errorMessage", h, "object-key-init"),
          Qh: cc11001100_hook("Qh", k, "object-key-init")
        }, "var-init");
        N = cc11001100_hook("N", {
          jh: cc11001100_hook("jh", 1, "object-key-init"),
          kh: cc11001100_hook("kh", 0, "object-key-init"),
          lh: cc11001100_hook("lh", 0, "object-key-init"),
          timestamp: cc11001100_hook("timestamp", Ya(b.l.now(), new Xa(0, b.l.timeline)), "object-key-init"),
          Dc: cc11001100_hook("Dc", b.Dc, "object-key-init"),
          messageType: cc11001100_hook("messageType", 2, "object-key-init"),
          Oh: cc11001100_hook("Oh", N, "object-key-init")
        }, "assign");
        G.call(C, N);
      }
    }
    for (var e = cc11001100_hook("e", Object.keys(a), "var-init"), f = cc11001100_hook("f", {}, "var-init"), g = cc11001100_hook("g", !1, "var-init"), h = cc11001100_hook("h", null, "var-init"), k = cc11001100_hook("k", null, "var-init"), l = cc11001100_hook("l", {}, "var-init"), p = cc11001100_hook("p", new Set(), "var-init"), t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", [], "var-init"), w = cc11001100_hook("w", {}, "var-init"), A = cc11001100_hook("A", r(e), "var-init"), y = cc11001100_hook("y", A.next(), "var-init"); !y.done; w = cc11001100_hook("w", {
      T: cc11001100_hook("T", w.T, "object-key-init")
    }, "assign"), y = cc11001100_hook("y", A.next(), "assign")) w.T = cc11001100_hook("w.T", y.value, "assign"), y = cc11001100_hook("y", a[w.T], "assign"), y instanceof Z ? (l[w.T] = cc11001100_hook("l[w.T]", y.value, "assign"), p.add(w.T), f[String(w.T)] = cc11001100_hook("f[String(w.T)]", sh(y.value), "assign")) : (y = cc11001100_hook("y", y.h(S(function (C, G) {
      return th(C) || th(G) ? !1 : C === G;
    }), R(function (C) {
      return function (G) {
        f[String(C.T)] = cc11001100_hook("f[String(C.T)]", sh(G), "assign");
        d();
        var N = cc11001100_hook("N", {}, "var-init");
        return N[C.T] = cc11001100_hook("N[C.T]", G, "assign"), N;
      };
    }(w)), me(function (C) {
      return function (G) {
        if (G instanceof Ra) throw new Ta(String(C.T));
        throw G;
      };
    }(w)), lg(function (C) {
      return function () {
        p.add(C.T);
      };
    }(w), function (C) {
      return function (G) {
        k = cc11001100_hook("k", String(C.T), "assign");
        h = cc11001100_hook("h", String(G), "assign");
        d();
      };
    }(w), function (C) {
      return function () {
        p.has(C.T) || (g = cc11001100_hook("g", !0, "assign"), d());
      };
    }(w))), "assign"), n.push(w.T), t.push(y));
    (a = cc11001100_hook("a", 0 < Object.keys(f).length, "assign")) && d();
    w = cc11001100_hook("w", uh(b.i, t).h(me(function (C) {
      if (C instanceof Ra) throw new Sa(String(n[C.pg]));
      throw C;
    }), R(function (C) {
      return Object.freeze(Object.assign.apply(Object, [{}, l].concat(u(C))));
    })), "assign");
    return (t = cc11001100_hook("t", 0 < t.length, "assign")) && a ? uf(Q(Object.freeze(l)), w) : t ? w : Q(Object.freeze(l));
  }
  ;
  function wh(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", xh(yh(xh(zh, Ah), Bh), Ch, Dh), "var-init");
    return a.s.Ga.bind(a.s)(733, function () {
      function f() {
        if (a.Va) {
          var l = cc11001100_hook("l", a.Va, "var-init"),
            p = cc11001100_hook("p", l.next, "var-init");
          var t = cc11001100_hook("t", {
            Uh: cc11001100_hook("Uh", [].concat(u(h.values())), "object-key-init"),
            Rh: cc11001100_hook("Rh", k, "object-key-init")
          }, "var-init");
          t = cc11001100_hook("t", {
            jh: cc11001100_hook("jh", 1, "object-key-init"),
            kh: cc11001100_hook("kh", 0, "object-key-init"),
            lh: cc11001100_hook("lh", 0, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", Ya(a.l.now(), new Xa(0, a.l.timeline)), "object-key-init"),
            Dc: cc11001100_hook("Dc", a.Dc, "object-key-init"),
            messageType: cc11001100_hook("messageType", 1, "object-key-init"),
            Th: cc11001100_hook("Th", t, "object-key-init")
          }, "assign");
          p.call(l, t);
        }
      }
      var g = cc11001100_hook("g", {}, "var-init"),
        h = cc11001100_hook("h", new Set(), "var-init"),
        k = cc11001100_hook("k", !1, "var-init");
      try {
        return b.h(me(function (l) {
          d(Object.assign({}, g, {
            error: cc11001100_hook("error", l, "object-key-init")
          }));
          return Ie;
        }), lg(function () {}, function () {}, function () {
          k = cc11001100_hook("k", !0, "assign");
          f();
        }), ve(function (l) {
          h.add(l.Gb);
          f();
          try {
            var p = cc11001100_hook("p", c(a, l), "var-init");
          } catch (n) {
            return d(Object.assign({}, g, {
              error: cc11001100_hook("error", n instanceof Error ? n : String(n), "object-key-init")
            })), Ie;
          }
          var t = cc11001100_hook("t", {}, "var-init");
          return vh(p, a, l.Gb).h(lg(function (n) {
            t = cc11001100_hook("t", n, "assign");
          }), Lf(1), vf()).h(e, me(function (n) {
            d(Object.assign({}, t, {
              error: cc11001100_hook("error", n, "object-key-init")
            }));
            return Ie;
          }), $e(void 0), R(function () {
            h.delete(l.Gb) && f();
            return !0;
          }));
        })).h(rf(function (l) {
          return l + 1;
        }, 0), me(function (l) {
          d(Object.assign({}, g, {
            error: cc11001100_hook("error", l, "object-key-init")
          }));
          return Ie;
        }));
      } catch (l) {
        return d(Object.assign({}, g, {
          error: cc11001100_hook("error", l, "object-key-init")
        })), Ie;
      }
    })();
  }
  ;
  function Eh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(X(function (c) {
      var d = cc11001100_hook("d", a(c), "var-init"),
        e = cc11001100_hook("e", b(c), "var-init"),
        f = cc11001100_hook("f", {}, "var-init");
      return d && e && f ? new K(function (g) {
        e(d, f, function (h) {
          g.next(Object.assign({}, c, {
            If: cc11001100_hook("If", h, "object-key-init")
          }));
          g.complete();
        });
        return function () {};
      }) : zg;
    }), U(function (c) {
      return c.If;
    }));
  }
  ;
  var Ch = cc11001100_hook("Ch", J(U(function (a) {
    var b = cc11001100_hook("b", a.H, "var-init"),
      c = cc11001100_hook("c", a.kc, "var-init"),
      d = cc11001100_hook("d", a.Tc, "var-init"),
      e = cc11001100_hook("e", a.cb, "var-init"),
      f = cc11001100_hook("f", a.Ya, "var-init"),
      g = cc11001100_hook("g", a.Cb, "var-init");
    return void 0 !== a.Wa && void 0 !== g && void 0 !== b && void 0 !== c && void 0 !== d && (!f || void 0 !== e);
  }), hg(function (a) {
    return !(!1 === a.Pe && void 0 !== a.qd);
  }, !1), U(function (a) {
    return !0 === a.Pe;
  }), Eh(function (a) {
    return a.Cb;
  }, function (a) {
    return a.Wa;
  }), R(function (a) {
    a.Ya ? a.cb({
      eventType: cc11001100_hook("eventType", "active-view-begin-to-render", "object-key-init"),
      eventData: cc11001100_hook("eventData", "", "object-key-init"),
      destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
    }) : a.Tc(a.kc, a).forEach(function (b) {
      a.H.O(b).sendNow();
    });
  }), Se(1), gf()), "var-init");
  function Fh(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new Map(), "var-init");
    if ("object" !== typeof a || null === a) return b;
    Object.values(a).forEach(function (c) {
      c && "function" === typeof c.ba && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()));
    });
    return b;
  }
  ;
  function Gh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Hh, "var-init"),
      d = cc11001100_hook("d", Ih, "var-init"),
      e = cc11001100_hook("e", Jh, "var-init");
    b = cc11001100_hook("b", void 0 === b ? .01 : b, "assign");
    return function (f) {
      0 < b && Math.random() <= b && (a.global.HTMLFencedFrameElement && a.global.fence && "function" === typeof a.global.fence.reportEvent && a.global.fence.reportEvent({
        eventType: cc11001100_hook("eventType", "active-view-error", "object-key-init"),
        eventData: cc11001100_hook("eventData", "", "object-key-init"),
        destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
      }), f = cc11001100_hook("f", Object.assign({}, f, {
        errorMessage: cc11001100_hook("errorMessage", f.error instanceof Error && f.error.message ? f.error.message : String(f.error), "object-key-init"),
        ye: cc11001100_hook("ye", f.error instanceof Error && f.error.stack ? String(f.error.stack) : null, "object-key-init"),
        Vf: cc11001100_hook("Vf", f.error instanceof Error && f.error.name ? String(f.error.name) : null, "object-key-init"),
        Uf: cc11001100_hook("Uf", String(a.s.pf), "object-key-init")
      }), "assign"), d(Object.assign({}, f, {
        ua: cc11001100_hook("ua", function () {
          return function (g) {
            try {
              return e(Object.assign({}, g));
            } catch (h) {
              return {};
            }
          };
        }(), "object-key-init"),
        Ha: cc11001100_hook("Ha", [c], "object-key-init")
      }), Fh(f)).forEach(function (g) {
        a.H.O(g).sendNow();
      }));
    };
  }
  ;
  var Dh = cc11001100_hook("Dh", J(R(function (a) {
    var b = cc11001100_hook("b", a.H, "var-init"),
      c = cc11001100_hook("c", a.bg, "var-init");
    if (void 0 === b || void 0 === c) return !1;
    if (void 0 !== a.qd) return !0;
    if (null === c) return !1;
    for (a = cc11001100_hook("a", 0, "assign"); a < c; a++) b.O("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(1E7 * Math.random())).sendNow();
    return !0;
  }), hg(function (a) {
    return !a;
  }), gf()), "var-init");
  var Jh = function (a) {
    return {
      id: cc11001100_hook("id", a.Pd, "object-key-init"),
      mcvt: cc11001100_hook("mcvt", a.Mb, "object-key-init"),
      p: cc11001100_hook("p", a.qc, "object-key-init"),
      asp: cc11001100_hook("asp", a.Jh, "object-key-init"),
      mtos: cc11001100_hook("mtos", a.Nb, "object-key-init"),
      tos: cc11001100_hook("tos", a.Xb, "object-key-init"),
      v: cc11001100_hook("v", a.Hf, "object-key-init"),
      bin: cc11001100_hook("bin", a.Gf, "object-key-init"),
      avms: cc11001100_hook("avms", a.Ye, "object-key-init"),
      bs: cc11001100_hook("bs", a.qe, "object-key-init"),
      mc: cc11001100_hook("mc", a.Ve, "object-key-init"),
      "if": cc11001100_hook("if", a.Of, "object-key-init"),
      vu: cc11001100_hook("vu", a.Rf, "object-key-init"),
      app: cc11001100_hook("app", a.Ma, "object-key-init"),
      mse: cc11001100_hook("mse", a.Md, "object-key-init"),
      mtop: cc11001100_hook("mtop", a.Nd, "object-key-init"),
      itpl: cc11001100_hook("itpl", a.Ed, "object-key-init"),
      adk: cc11001100_hook("adk", a.ed, "object-key-init"),
      exk: cc11001100_hook("exk", a.Lh, "object-key-init"),
      rs: cc11001100_hook("rs", a.Fa, "object-key-init"),
      la: cc11001100_hook("la", a.Se, "object-key-init"),
      cr: cc11001100_hook("cr", a.Fd, "object-key-init"),
      uach: cc11001100_hook("uach", a.ae, "object-key-init"),
      vs: cc11001100_hook("vs", a.be, "object-key-init"),
      r: cc11001100_hook("r", a.Qd, "object-key-init"),
      pay: cc11001100_hook("pay", a.kg, "object-key-init"),
      rst: cc11001100_hook("rst", a.Bf, "object-key-init"),
      rpt: cc11001100_hook("rpt", a.Af, "object-key-init"),
      isd: cc11001100_hook("isd", a.og, "object-key-init"),
      lsd: cc11001100_hook("lsd", a.yg, "object-key-init"),
      context: cc11001100_hook("context", a.Uf, "object-key-init"),
      msg: cc11001100_hook("msg", a.errorMessage, "object-key-init"),
      stack: cc11001100_hook("stack", a.ye, "object-key-init"),
      name: cc11001100_hook("name", a.Vf, "object-key-init"),
      ec: cc11001100_hook("ec", a.lg, "object-key-init"),
      sfr: cc11001100_hook("sfr", a.Wd, "object-key-init"),
      met: cc11001100_hook("met", a.Eb, "object-key-init"),
      wmsd: cc11001100_hook("wmsd", a.de, "object-key-init"),
      pv: cc11001100_hook("pv", a.Wh, "object-key-init"),
      epv: cc11001100_hook("epv", a.Ph, "object-key-init"),
      pbe: cc11001100_hook("pbe", a.Me, "object-key-init"),
      vae: cc11001100_hook("vae", a.ng, "object-key-init"),
      spb: cc11001100_hook("spb", a.mf, "object-key-init")
    };
  };
  function xh() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init");
    return function (b) {
      var c = cc11001100_hook("c", b.h(Lf(1), vf()), "var-init");
      b = cc11001100_hook("b", a.map(function (d) {
        return c.h(d, $e(!0));
      }), "assign");
      return P(b).h(Se(1), gf());
    };
  }
  ;
  function yh() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init");
    return function (b) {
      var c = cc11001100_hook("c", b.h(Lf(1), vf()), "var-init");
      b = cc11001100_hook("b", a.map(function (d) {
        return c.h(d, $e(!0));
      }), "assign");
      return uf.apply(null, u(b)).h(Se(1), gf());
    };
  }
  ;
  var Ah = function (a) {
    var b = cc11001100_hook("b", [], "var-init");
    return a.h(R(function (c) {
      var d = cc11001100_hook("d", c.H, "var-init"),
        e = cc11001100_hook("e", c.eg, "var-init"),
        f = cc11001100_hook("f", c.Xb, "var-init"),
        g = cc11001100_hook("g", c.ph, "var-init"),
        h = cc11001100_hook("h", c.ua, "var-init"),
        k = cc11001100_hook("k", c.oh, "var-init"),
        l = cc11001100_hook("l", c.Qc, "var-init"),
        p = cc11001100_hook("p", c.Yb, "var-init"),
        t = cc11001100_hook("t", c.ce, "var-init"),
        n = cc11001100_hook("n", c.He, "var-init"),
        w = cc11001100_hook("w", c.Me, "var-init"),
        A = cc11001100_hook("A", c.mf, "var-init");
      if (!c.vd || !n || void 0 === c.Nb || void 0 === f || void 0 === g || void 0 === h || void 0 === k || void 0 === p || void 0 === d) return !1;
      if (c.Ya) {
        if (void 0 === l) return !1;
        g = cc11001100_hook("g", c.cb, "assign");
        if (!g) return !1;
        g({
          eventType: cc11001100_hook("eventType", "active-view-time-on-screen", "object-key-init"),
          eventData: cc11001100_hook("eventData", "", "object-key-init"),
          destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
        });
        return !0;
      }
      if (!w && !l) return !1;
      f = cc11001100_hook("f", Fh(c), "assign");
      var y;
      t = cc11001100_hook("t", null != (y = cc11001100_hook("y", null == t ? void 0 : t.ia(f).value, "assign")) ? y : !1, "assign");
      c = cc11001100_hook("c", p(Object.assign({}, c, {
        Pd: cc11001100_hook("Pd", k, "object-key-init"),
        be: cc11001100_hook("be", t ? 4 : 3, "object-key-init"),
        Qd: cc11001100_hook("Qd", null != l ? l : "u", "object-key-init"),
        ua: cc11001100_hook("ua", h, "object-key-init"),
        Ha: cc11001100_hook("Ha", g, "object-key-init")
      }), f), "assign");
      if (w) {
        for (; b.length > g.length;) w = cc11001100_hook("w", void 0, "assign"), null == (w = cc11001100_hook("w", b.shift(), "assign")) || w.deactivate();
        c.forEach(function (C, G) {
          G >= b.length ? b.push(d.O(C)) : b[G].url = cc11001100_hook("b[G].url", C, "assign");
        });
        return A && e && void 0 !== l ? (c.forEach(function (C) {
          e.O(C).sendNow();
        }), !0) : void 0 !== l;
      }
      return A && e && void 0 !== l ? (c.forEach(function (C) {
        e.O(C).sendNow();
      }), !0) : void 0 !== l ? (c.forEach(function (C) {
        d.O(C).sendNow();
      }), !0) : !1;
    }), hg(function (c) {
      return !c;
    }), gf());
  };
  function Kh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return b.h(R(function (c) {
        a.ef || db("Assertion on queued Observable output failed");
        return c;
      }));
    };
  }
  ;
  function Lh(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return new K(function (c) {
        var d = cc11001100_hook("d", !1, "var-init"),
          e = cc11001100_hook("e", b.h(Kh(a)).subscribe(function (f) {
            d = cc11001100_hook("d", !0, "assign");
            c.next(f);
          }, c.error.bind(c), c.complete.bind(c)), "var-init");
        Gg(a, function () {
          d || c.next(null);
        }, 3);
        return e;
      });
    };
  }
  ;
  function Mh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return function (c) {
      return c.h(X(function (d) {
        return new K(function (e) {
          function f() {
            h.disconnect();
            k.unsubscribe();
          }
          var g = cc11001100_hook("g", a.MutationObserver, "var-init");
          if (g && void 0 !== d.j) {
            var h = cc11001100_hook("h", new g(function (l) {
              e.next(l);
            }), "var-init");
            h.observe(d.j, b);
            var k = cc11001100_hook("k", d.released.subscribe(f), "var-init");
            return f;
          }
        });
      }));
    };
  }
  ;
  var Nh = cc11001100_hook("Nh", {
    Ih: cc11001100_hook("Ih", 0, "object-key-init"),
    zh: cc11001100_hook("zh", 1, "object-key-init"),
    Bh: cc11001100_hook("Bh", 2, "object-key-init"),
    Ah: cc11001100_hook("Ah", 3, "object-key-init"),
    0: cc11001100_hook(0, "UNKNOWN", "object-key-init"),
    1: cc11001100_hook(1, "DEFER_MEASUREMENT", "object-key-init"),
    2: cc11001100_hook(2, "DO_NOT_DEFER_MEASUREMENT", "object-key-init"),
    3: cc11001100_hook(3, "DEFER_MEASUREMENT_AND_PING", "object-key-init")
  }, "var-init");
  function Oh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.h(Mh(a, {
      attributes: cc11001100_hook("attributes", !0, "object-key-init")
    }), Y(a.i, 1)), "var-init");
    return P([b, c.h(Y(a.i, 1), Lh(a.i))]).h(R(function (d) {
      return r(d).next().value;
    }), wg("data-google-av-dm"), R(Ph));
  }
  function Ph(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a && a in Nh ? Number(a) : 2;
  }
  ;
  function Qh(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (3 === a.Cg) return null;
    if (void 0 !== a.Qc) {
      var b = cc11001100_hook("b", !1 === a.Nf ? "n" : !1 === a.vd && a.Qc ? a.Qc : null, "var-init");
      if (null !== b) return b;
    }
    return a.uc instanceof Ka ? "msf" : a.jd instanceof La ? "c" : !1 === a.Lf ? "pv" : a.uc || a.jd ? "x" : null;
  }
  var Bh = cc11001100_hook("Bh", J(U(function (a) {
    return void 0 !== a.zc && void 0 !== a.ua && void 0 !== a.Yb && void 0 !== a.Ac && void 0 !== a.H;
  }), U(function (a) {
    return null !== Qh(a);
  }), Eh(function (a) {
    return a.hc;
  }, function (a) {
    return a.Wa;
  }), R(function (a) {
    if (a.Ya) {
      var b = cc11001100_hook("b", a.cb, "var-init");
      b && b({
        eventType: cc11001100_hook("eventType", "active-view-unmeasurable", "object-key-init"),
        eventData: cc11001100_hook("eventData", "", "object-key-init"),
        destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
      });
    } else {
      var c = cc11001100_hook("c", void 0, "var-init"),
        d = cc11001100_hook("d", Qh(a), "var-init");
      if ("x" === d) {
        var e,
          f = cc11001100_hook("f", null != (e = cc11001100_hook("e", a.uc, "assign")) ? e : a.jd, "var-init");
        f && (b = cc11001100_hook("b", f.stack, "assign"), c = cc11001100_hook("c", f.message, "assign"));
      }
      a.Yb(Object.assign({}, a, {
        Ha: cc11001100_hook("Ha", a.zc, "object-key-init"),
        ua: cc11001100_hook("ua", a.ua, "object-key-init"),
        Pd: cc11001100_hook("Pd", a.Ac, "object-key-init"),
        be: cc11001100_hook("be", 2, "object-key-init"),
        Qd: cc11001100_hook("Qd", d, "object-key-init"),
        errorMessage: cc11001100_hook("errorMessage", c, "object-key-init"),
        ye: cc11001100_hook("ye", b, "object-key-init")
      }), Fh(a)).forEach(function (g) {
        a.H.O(g).sendNow();
      });
    }
  }), Se(1), gf()), "var-init");
  function Rh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return "string" === typeof a ? encodeURIComponent(a) : "number" === typeof a ? String(a) : Array.isArray(a) ? a.map(function (c) {
      return Rh(c, b);
    }).join(",") : a instanceof Xa ? a.toString() : a && "function" === typeof a.ba ? Rh(a.ia(b).value, b) : !0 === a ? "1" : !1 === a ? "0" : void 0 === a || null === a ? null : [a.top, a.left, a.top + a.height, a.left + a.width].join();
  }
  function Sh(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", Object.entries(a).map(function (c) {
      var d = cc11001100_hook("d", r(c), "var-init");
      c = cc11001100_hook("c", d.next().value, "assign");
      d = cc11001100_hook("d", d.next().value, "assign");
      d = cc11001100_hook("d", Rh(d, b), "assign");
      return null === d ? "" : c + "=" + d;
    }).filter(function (c) {
      return "" !== c;
    }), "assign");
    return a.length ? a.join("&") : "";
  }
  ;
  function Ih(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.ua(a), "var-init"),
      d = cc11001100_hook("d", Sh(c, b), "var-init");
    return d ? Ib(a.Ha, function (e) {
      e = cc11001100_hook("e", 0 <= e.indexOf("?") ? e : e + "?", "assign");
      e = cc11001100_hook("e", 0 <= "?&".indexOf(e.slice(-1)) ? e : e + "&", "assign");
      return e + d;
    }) : a.Ha;
  }
  ;
  function Th(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ib(a, function (c) {
      if ("string" === typeof b.ae) {
        var d = cc11001100_hook("d", "&" + Sh({
          uach: cc11001100_hook("uach", b.ae, "object-key-init")
        }, new Map()), "var-init");
        return "&adurl=" == c.substring(c.length - 7) ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d;
      }
      return c;
    });
  }
  ;
  var zh = cc11001100_hook("zh", J(U(function (a) {
    return void 0 !== a.ua && void 0 !== a.zc && void 0 !== a.Yb && void 0 !== a.Ac && void 0 !== a.H;
  }), hg(function (a) {
    return void 0 === a.qd;
  }), R(function (a) {
    return Object.assign({}, a, {
      qf: cc11001100_hook("qf", Fh(a), "object-key-init")
    });
  }), U(function (a) {
    var b = cc11001100_hook("b", a.ce, "var-init"),
      c = cc11001100_hook("c", a.qf, "var-init"),
      d;
    return !!a.He && (null != (d = cc11001100_hook("d", null == b ? void 0 : b.ia(c).value, "assign")) ? d : !1);
  }), Eh(function (a) {
    return a.ic;
  }, function (a) {
    return a.Wa;
  }), R(function (a) {
    var b = cc11001100_hook("b", a.H, "var-init");
    if (a.Ya) {
      var c = cc11001100_hook("c", a.cb, "var-init");
      if (!c) return !1;
      c({
        eventType: cc11001100_hook("eventType", "active-view-viewable", "object-key-init"),
        eventData: cc11001100_hook("eventData", "", "object-key-init"),
        destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
      });
      return !0;
    }
    c = cc11001100_hook("c", a.Yb(Object.assign({}, a, {
      Ha: cc11001100_hook("Ha", a.zc, "object-key-init"),
      ua: cc11001100_hook("ua", a.ua, "object-key-init"),
      Pd: cc11001100_hook("Pd", a.Ac, "object-key-init"),
      be: cc11001100_hook("be", 4, "object-key-init"),
      Qd: cc11001100_hook("Qd", "v", "object-key-init")
    }), a.qf), "assign");
    var d = cc11001100_hook("d", a.kd, "var-init");
    d && 0 < d.length && a.Tc && a.Tc(d, a).forEach(function (e) {
      b.O(e).sendNow();
    });
    c.forEach(function (e) {
      b.O(e, {
        jc: cc11001100_hook("jc", a.Id, "object-key-init")
      }).sendNow();
    });
    return !0;
  }), hg(function (a) {
    return !a;
  }), gf()), "var-init");
  var Uh = function (a, b) {
    this.a = cc11001100_hook("this.a", a, "assign");
    this.b = cc11001100_hook("this.b", b, "assign");
    if (a.clock.timeline !== b.clock.timeline) throw Error();
  };
  Uh.prototype.aa = cc11001100_hook("Uh.prototype.aa", function (a) {
    return a instanceof Uh ? this.a.aa(a.a) && this.b.aa(a.b) : !1;
  }, "assign");
  Uh.prototype.ha = cc11001100_hook("Uh.prototype.ha", function (a) {
    var b = cc11001100_hook("b", this.a.ha(a).value, "var-init"),
      c = cc11001100_hook("c", this.b.ha(a).value, "var-init");
    return {
      timestamp: cc11001100_hook("timestamp", a, "object-key-init"),
      value: cc11001100_hook("value", [b, c], "object-key-init")
    };
  }, "assign");
  da.Object.defineProperties(Uh.prototype, {
    active: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.a.active || this.b.active;
      }
    },
    clock: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.a.clock;
      }
    },
    C: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        var a = cc11001100_hook("a", this.a.C.timestamp.maximum(this.b.C.timestamp), "var-init"),
          b = cc11001100_hook("b", this.a.C.timestamp.equals(a) ? this.a.C.value : this.a.ha(a).value, "var-init"),
          c = cc11001100_hook("c", this.b.C.timestamp.equals(a) ? this.b.C.value : this.b.ha(a).value, "var-init");
        return {
          timestamp: cc11001100_hook("timestamp", a, "object-key-init"),
          value: cc11001100_hook("value", [b, c], "object-key-init")
        };
      }
    }
  });
  var Vh = function (a, b) {
    this.input = cc11001100_hook("this.input", a, "assign");
    this.Hc = cc11001100_hook("this.Hc", b, "assign");
    this.C = cc11001100_hook("this.C", {
      timestamp: cc11001100_hook("timestamp", this.input.C.timestamp, "object-key-init"),
      value: cc11001100_hook("value", this.Hc(this.input.C.value), "object-key-init")
    }, "assign");
  };
  Vh.prototype.aa = cc11001100_hook("Vh.prototype.aa", function (a) {
    return a instanceof Vh ? this.input.aa(a.input) && this.Hc === a.Hc : !1;
  }, "assign");
  Vh.prototype.ha = cc11001100_hook("Vh.prototype.ha", function (a) {
    a = cc11001100_hook("a", this.input.ha(a), "assign");
    return {
      timestamp: cc11001100_hook("timestamp", a.timestamp, "object-key-init"),
      value: cc11001100_hook("value", this.Hc(a.value), "object-key-init")
    };
  }, "assign");
  da.Object.defineProperties(Vh.prototype, {
    active: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.input.active;
      }
    },
    clock: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.input.clock;
      }
    }
  });
  function Wh(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", void 0 === c ? function (d, e) {
      return d === e;
    } : c, "assign");
    return a.timestamp.equals(b.timestamp) && c(a.value, b.value);
  }
  ;
  var Xh = function (a, b, c) {
    this.clock = cc11001100_hook("this.clock", a, "assign");
    this.C = cc11001100_hook("this.C", b, "assign");
    this.active = cc11001100_hook("this.active", c, "assign");
  };
  Xh.prototype.aa = cc11001100_hook("Xh.prototype.aa", function (a) {
    return a instanceof Xh ? this.active === a.active && this.clock.timeline === a.clock.timeline && Wh(this.C, a.C) : !1;
  }, "assign");
  Xh.prototype.ha = cc11001100_hook("Xh.prototype.ha", function (a) {
    return {
      timestamp: cc11001100_hook("timestamp", a, "object-key-init"),
      value: cc11001100_hook("value", this.C.value + (this.active ? Ya(a, this.C.timestamp) : 0), "object-key-init")
    };
  }, "assign");
  var Yh = function () {};
  Yh.prototype.ba = cc11001100_hook("Yh.prototype.ba", function () {
    return this.ha(this.clock.now());
  }, "assign");
  Yh.prototype.ia = cc11001100_hook("Yh.prototype.ia", function (a) {
    var b;
    a = cc11001100_hook("a", null != (b = cc11001100_hook("b", a.get(this.clock.timeline), "assign")) ? b : this.clock.now(), "assign");
    return this.ha(a);
  }, "assign");
  Yh.prototype.map = cc11001100_hook("Yh.prototype.map", function (a) {
    return new Zh(this, a);
  }, "assign");
  Yh.prototype.ka = cc11001100_hook("Yh.prototype.ka", function (a) {
    return new $h(this, a);
  }, "assign");
  var $h = function () {
    Uh.apply(this, arguments);
    this.map = cc11001100_hook("this.map", Yh.prototype.map, "assign");
    this.ka = cc11001100_hook("this.ka", Yh.prototype.ka, "assign");
    this.ba = cc11001100_hook("this.ba", Yh.prototype.ba, "assign");
    this.ia = cc11001100_hook("this.ia", Yh.prototype.ia, "assign");
  };
  v($h, Uh);
  var ai = function () {
    Xh.apply(this, arguments);
    this.map = cc11001100_hook("this.map", Yh.prototype.map, "assign");
    this.ka = cc11001100_hook("this.ka", Yh.prototype.ka, "assign");
    this.ba = cc11001100_hook("this.ba", Yh.prototype.ba, "assign");
    this.ia = cc11001100_hook("this.ia", Yh.prototype.ia, "assign");
  };
  v(ai, Xh);
  var Zh = function () {
    Vh.apply(this, arguments);
    this.map = cc11001100_hook("this.map", Yh.prototype.map, "assign");
    this.ka = cc11001100_hook("this.ka", Yh.prototype.ka, "assign");
    this.ba = cc11001100_hook("this.ba", Yh.prototype.ba, "assign");
    this.ia = cc11001100_hook("this.ia", Yh.prototype.ia, "assign");
  };
  v(Zh, Vh);
  var bi = function (a, b) {
    this.C = cc11001100_hook("this.C", b, "assign");
    this.ba = cc11001100_hook("this.ba", Yh.prototype.ba, "assign");
    this.ia = cc11001100_hook("this.ia", Yh.prototype.ia, "assign");
    this.map = cc11001100_hook("this.map", Yh.prototype.map, "assign");
    this.ka = cc11001100_hook("this.ka", Yh.prototype.ka, "assign");
    this.clock = cc11001100_hook("this.clock", a, "assign");
  };
  bi.prototype.aa = cc11001100_hook("bi.prototype.aa", function (a) {
    return a.active;
  }, "assign");
  bi.prototype.ha = cc11001100_hook("bi.prototype.ha", function () {
    return this.C;
  }, "assign");
  da.Object.defineProperties(bi.prototype, {
    active: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return !1;
      }
    }
  });
  var ci = cc11001100_hook("ci", {
    left: cc11001100_hook("left", 0, "object-key-init"),
    top: cc11001100_hook("top", 0, "object-key-init"),
    width: cc11001100_hook("width", 0, "object-key-init"),
    height: cc11001100_hook("height", 0, "object-key-init")
  }, "var-init");
  function di(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height;
  }
  function ei(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      left: cc11001100_hook("left", Math.max(a.left, b.left), "object-key-init"),
      top: cc11001100_hook("top", Math.max(a.top, b.top), "object-key-init"),
      width: cc11001100_hook("width", Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)), "object-key-init"),
      height: cc11001100_hook("height", Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top)), "object-key-init")
    };
  }
  function fi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      left: cc11001100_hook("left", Math.round(a.left + b.x), "object-key-init"),
      top: cc11001100_hook("top", Math.round(a.top + b.y), "object-key-init"),
      width: cc11001100_hook("width", a.width, "object-key-init"),
      height: cc11001100_hook("height", a.height, "object-key-init")
    };
  }
  ;
  function gi(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", Object.keys(c).map(function (h) {
        return h;
      }), "var-init"),
      f = cc11001100_hook("f", e.filter(function (h) {
        var k = cc11001100_hook("k", c[h], "var-init");
        h = cc11001100_hook("h", d[h], "assign");
        return k instanceof Z && h instanceof Z && k.value === h.value;
      }), "var-init"),
      g = cc11001100_hook("g", f.reduce(function (h, k) {
        var l = cc11001100_hook("l", {}, "var-init");
        return Object.assign({}, h, (l[k] = cc11001100_hook("l[k]", c[k], "assign"), l));
      }, {}), "var-init");
    return e.reduce(function (h, k) {
      if (0 <= f.indexOf(k)) return h;
      var l = cc11001100_hook("l", {}, "var-init");
      return Object.assign({}, h, (l[k] = cc11001100_hook("l[k]", b.h(X(function (p) {
        return (p = cc11001100_hook("p", p ? c[k] : d[k], "assign")) && (p instanceof K || "function" === typeof p.pb && "function" === typeof p.subscribe) ? p : p.V(a);
      })), "assign"), l));
    }, g);
  }
  ;
  function hi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return J(R(function () {
      return !0;
    }), W(!1), Y(a, 1));
  }
  ;
  var ii = cc11001100_hook("ii", {
    xh: cc11001100_hook("xh", "asmreq", "object-key-init"),
    yh: cc11001100_hook("yh", "asmres", "object-key-init")
  }, "var-init");
  var ji = function (a) {
    kd.call(this, a);
  };
  v(ji, kd);
  ji.prototype.gf = cc11001100_hook("ji.prototype.gf", function (a) {
    Pc(this, a);
  }, "assign");
  ji.ob = cc11001100_hook("ji.ob", "tagging.common.osd.AdSpeedMetricsRequest", "assign");
  var Kc = function (a) {
    kd.call(this, a);
  };
  v(Kc, kd);
  Kc.ob = cc11001100_hook("Kc.ob", "tagging.common.osd.AdSpeedMetricsResponse.Box", "assign");
  var ki = function (a) {
    kd.call(this, a);
  };
  v(ki, kd);
  ki.prototype.gf = cc11001100_hook("ki.prototype.gf", function (a) {
    Pc(this, a);
  }, "assign");
  var li = cc11001100_hook("li", ld(ki), "var-init");
  ki.ob = cc11001100_hook("ki.ob", "tagging.common.osd.AdSpeedMetricsResponse", "assign");
  function mi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", void 0 === c ? ni(a) : c, "var-init");
    var d = cc11001100_hook("d", new MessageChannel(), "var-init");
    b = cc11001100_hook("b", b.h(R(function (f) {
      return Number(f);
    }), U(function (f) {
      return !isNaN(f) && 0 !== f;
    }), lg(function (f) {
      var g = cc11001100_hook("g", new ji(), "var-init");
      g.gf(f);
      f = cc11001100_hook("f", {
        type: cc11001100_hook("type", "asmreq", "object-key-init"),
        payload: cc11001100_hook("payload", g.wb(), "object-key-init")
      }, "assign");
      c.postMessage(f, "*", [d.port2]);
    }), Se(1)), "assign");
    var e = cc11001100_hook("e", oi(a, d.port1).h(U(function (f) {
      return "object" === typeof f.data;
    }), R(function (f) {
      var g = cc11001100_hook("g", f.data, "var-init"),
        h = cc11001100_hook("h", Object.values(ii).includes(g.type), "var-init");
      g = cc11001100_hook("g", "string" === typeof g.payload, "assign");
      if (!h || !g || "asmres" !== f.data.type) return null;
      try {
        return li(f.data.payload);
      } catch (k) {
        return null;
      }
    }), U(function (f) {
      return null !== f;
    }), R(function (f) {
      return f;
    })), "var-init");
    return b.h(X(function (f) {
      return Q(f).h(se(e));
    }), U(function (f) {
      var g = cc11001100_hook("g", r(f), "var-init");
      f = cc11001100_hook("f", g.next().value, "assign");
      g = cc11001100_hook("g", g.next().value, "assign");
      return null != Ac(Fc(g, 1)) ? Nc(Ac(Fc(g, 1)), 0) === f : !1;
    }), R(function (f) {
      f = cc11001100_hook("f", r(f), "assign");
      f.next();
      return f.next().value;
    }), Ig(a.i));
  }
  ;
  function pi(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", b.Lb.h(Se(1), X(function () {
      return mi(a, c);
    }), U(function (f) {
      var g = cc11001100_hook("g", Fc(f, 2), "var-init");
      return Nc(null == g ? g : !!g, !1) && void 0 !== Jc(f, Kc, !1) && null != zc(Fc(f, 4)) && null != zc(Fc(f, 5));
    }), Se(1), Ig(a.i)), "var-init");
    b = cc11001100_hook("b", d.h(R(function (f) {
      return {
        x: cc11001100_hook("x", Oc(Mc(f), 2), "object-key-init"),
        y: cc11001100_hook("y", Oc(Mc(f), 1), "object-key-init")
      };
    }), S(function (f, g) {
      return f.x === g.x && f.y === g.y;
    }), Y(a.i, 1)), "assign");
    var e = cc11001100_hook("e", d.h(R(function (f) {
      return Oc(f, 4);
    }), Y(a.i, 1)), "var-init");
    d = cc11001100_hook("d", d.h(R(function (f) {
      return Oc(f, 5);
    }), Y(a.i, 1)), "assign");
    return {
      og: cc11001100_hook("og", e, "object-key-init"),
      Df: cc11001100_hook("Df", b, "object-key-init"),
      yg: cc11001100_hook("yg", d, "object-key-init")
    };
  }
  ;
  function qi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.Lb.h(Se(1), R(function () {
      return a.l.now().round();
    }));
  }
  ;
  function ri(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.yd().h(R(function () {
      return "b";
    })), "var-init");
    return Mf(b, c).h(Se(1), Y(a.i, 1));
  }
  ;
  function si(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.h(R(function (c) {
      return new bi(a.l, {
        timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init"),
        value: cc11001100_hook("value", c, "object-key-init")
      });
    }));
  }
  ;
  function ti(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Math.pow(10, 2), "var-init");
    return Math.round(a * b) / b;
  }
  ;
  var ui = cc11001100_hook("ui", R(function (a) {
    return [a.value.K.width, a.value.K.height];
  }), "var-init");
  var wi = cc11001100_hook("wi", {
    S: cc11001100_hook("S", "ns", "object-key-init"),
    W: cc11001100_hook("W", ci, "object-key-init"),
    K: cc11001100_hook("K", ci, "object-key-init"),
    P: cc11001100_hook("P", new V(), "object-key-init"),
    L: cc11001100_hook("L", "ns", "object-key-init"),
    D: cc11001100_hook("D", ci, "object-key-init"),
    N: cc11001100_hook("N", ci, "object-key-init"),
    X: {
      x: cc11001100_hook("x", 0, "object-key-init"),
      y: cc11001100_hook("y", 0, "object-key-init")
    }
  }, "var-init");
  function xi(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return di(a.K, b.K) && di(a.D, b.D) && di(a.W, b.W) && di(a.N, b.N) && a.L === b.L && a.P === b.P && a.S === b.S && a.X.x === b.X.x && a.X.y === b.X.y;
  }
  ;
  function yi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      var c;
      return b.h(lg(function (d) {
        return void (c = cc11001100_hook("c", d.timestamp, "assign"));
      }), R(function (d) {
        return d.value;
      }), a, R(function (d) {
        return {
          timestamp: cc11001100_hook("timestamp", c, "object-key-init"),
          value: cc11001100_hook("value", d, "object-key-init")
        };
      }));
    };
  }
  ;
  var zi = function (a) {
      return a.N.width * a.N.height / (a.D.width * a.D.height);
    },
    Ai = cc11001100_hook("Ai", yi(J(R(function (a) {
      var b;
      return null != (b = cc11001100_hook("b", a.sc, "assign")) ? b : zi(a);
    }), R(function (a) {
      return isFinite(a) ? a : 0;
    }))), "var-init"),
    Bi = cc11001100_hook("Bi", yi(J(R(function (a) {
      var b;
      return null != (b = cc11001100_hook("b", a.sc, "assign")) ? b : zi(a);
    }), R(function (a) {
      return isFinite(a) ? a : -1;
    }))), "var-init");
  function Ci(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return 1 <= a ? !0 : 0 >= a ? !1 : a >= b;
  }
  ;
  function Di(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return b.h(og(a), R(function (c) {
        var d = cc11001100_hook("d", r(c), "var-init");
        c = cc11001100_hook("c", d.next().value, "assign");
        d = cc11001100_hook("d", d.next().value, "assign");
        return {
          timestamp: cc11001100_hook("timestamp", c.timestamp, "object-key-init"),
          value: cc11001100_hook("value", Ci(c.value, d), "object-key-init")
        };
      }));
    };
  }
  ;
  var Ei = cc11001100_hook("Ei", R(function (a) {
    if ("omid" === a.value.S) {
      if ("nio" === a.value.L) return "omio";
      if ("geo" === a.value.L) return "omgeo";
    }
    return "geo" === a.value.L || "nio" === a.value.L ? a.value.S : a.value.L;
  }), "var-init");
  function Fi() {
    return J(U(function (a, b) {
      return 0 < b;
    }), Gi, W(-1), S());
  }
  var Gi = cc11001100_hook("Gi", J(U(function (a) {
    return !isNaN(a);
  }), rf(function (a, b) {
    return isNaN(a) ? b : Math.min(a, b);
  }, NaN), S()), "var-init");
  var Hi = cc11001100_hook("Hi", yi(J(R(function (a) {
    return a.N.width * a.N.height / (a.W.width * a.W.height);
  }), R(function (a) {
    return isFinite(a) ? Math.min(1, a) : 0;
  }))), "var-init");
  function Ii(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a ? P([b, c]).h(U(function (d) {
      var e = cc11001100_hook("e", r(d), "var-init");
      d = cc11001100_hook("d", e.next().value, "assign");
      e = cc11001100_hook("e", e.next().value, "assign");
      return d.timestamp.equals(e.timestamp);
    }), R(function (d) {
      var e = cc11001100_hook("e", r(d), "var-init");
      d = cc11001100_hook("d", e.next().value, "assign");
      e = cc11001100_hook("e", e.next().value, "assign");
      return d.value > e.value ? d : e;
    })) : b;
  }
  function Ji(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      var c = cc11001100_hook("c", b.h(Ai), "var-init"),
        d = cc11001100_hook("d", b.h(Hi), "var-init");
      return a instanceof K ? a.h(X(function (e) {
        return Ii(e, c, d);
      })) : Ii(a.value, c, d);
    };
  }
  ;
  var Ki = cc11001100_hook("Ki", J(yi(R(function (a) {
    a = cc11001100_hook("a", a.sc ? a.sc * a.D.width * a.D.height / (a.K.width * a.K.height) : a.N.width * a.N.height / (a.K.width * a.K.height), "assign");
    return isFinite(a) ? a : 0;
  }))), "var-init");
  function Li(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", d.vc, "var-init"),
      f = cc11001100_hook("f", d.td, "var-init"),
      g = cc11001100_hook("g", d.rf, "var-init"),
      h = cc11001100_hook("h", d.ne, "var-init"),
      k = cc11001100_hook("k", d.Jd, "var-init"),
      l = cc11001100_hook("l", d.We, "var-init");
    d = cc11001100_hook("d", d.yc, "assign");
    b = cc11001100_hook("b", Mi(a, c, b), "assign");
    c = cc11001100_hook("c", Ni(a, c), "assign");
    var p = cc11001100_hook("p", Oi(a, e, l, b), "var-init"),
      t = cc11001100_hook("t", p.h(R(function (z) {
        return z.value;
      }), S(), Y(a, 1), rf(function (z, T) {
        return Math.max(z, T);
      }, 0)), "var-init"),
      n = cc11001100_hook("n", p.h(R(function (z) {
        return z.value;
      }), Fi(), Y(a, 1)), "var-init"),
      w = cc11001100_hook("w", b.h(Bi, R(function (z) {
        return z.value;
      }), Se(2), S(), Y(a, 1)), "var-init");
    g = cc11001100_hook("g", Pi(a, b, g, h), "assign");
    var A = cc11001100_hook("A", g.h(W(!1), S(), R(function (z) {
      return z ? k : f;
    })), "var-init");
    h = cc11001100_hook("h", p.h(Di(A), S(), Y(a, 1)), "assign");
    var y = cc11001100_hook("y", P([h, b]).h(U(function (z) {
      var T = cc11001100_hook("T", r(z), "var-init");
      z = cc11001100_hook("z", T.next().value, "assign");
      T = cc11001100_hook("T", T.next().value, "assign");
      return z.timestamp.equals(T.timestamp);
    }), R(function (z) {
      var T = cc11001100_hook("T", r(z), "var-init");
      z = cc11001100_hook("z", T.next().value, "assign");
      T = cc11001100_hook("T", T.next().value, "assign");
      return {
        visible: cc11001100_hook("visible", z.value, "object-key-init"),
        geometry: cc11001100_hook("geometry", T.value.D, "object-key-init")
      };
    }), rf(function (z, T) {
      return !T.visible && z.visible ? z : T;
    }, {
      visible: cc11001100_hook("visible", !1, "object-key-init"),
      geometry: cc11001100_hook("geometry", ci, "object-key-init")
    }), R(function (z) {
      return z.geometry;
    }), W(ci), Y(a, 1), S(di)), "var-init");
    l = cc11001100_hook("l", l instanceof K ? l.h(S(), of()) : zg, "assign");
    A = cc11001100_hook("A", P([l, A]).h(of()), "assign");
    var C = cc11001100_hook("C", b.h(U(function (z) {
        return "ns" !== z.value.S && "ns" !== z.value.L;
      }), rf(function (z) {
        return z + 1;
      }, 0), W(0), Y(a, 1)), "var-init"),
      G = cc11001100_hook("G", c.h(of(!0), W(!1), Y(a, 1)), "var-init");
    G = cc11001100_hook("G", P([d, G]).h(R(function (z) {
      var T = cc11001100_hook("T", r(z), "var-init");
      z = cc11001100_hook("z", T.next().value, "assign");
      T = cc11001100_hook("T", T.next().value, "assign");
      return z && !T;
    }), Y(a, 1)), "assign");
    var N = cc11001100_hook("N", b.h(Ki, S()), "var-init"),
      ta = cc11001100_hook("ta", N.h(R(function (z) {
        return z.value;
      }), rf(function (z, T) {
        return Math.max(z, T);
      }, 0), S(), Y(a, 1)), "var-init"),
      B = cc11001100_hook("B", N.h(R(function (z) {
        return z.value;
      }), Fi(), Y(a, 1)), "var-init");
    return {
      Vd: cc11001100_hook("Vd", l, "object-key-init"),
      Ub: cc11001100_hook("Ub", A, "object-key-init"),
      Aa: {
        Wg: cc11001100_hook("Wg", b, "object-key-init"),
        Ye: cc11001100_hook("Ye", b.h(Ei), "object-key-init"),
        qc: cc11001100_hook("qc", y.h(S(di)), "object-key-init"),
        visible: cc11001100_hook("visible", h.h(S(Wh)), "object-key-init"),
        Yd: cc11001100_hook("Yd", p.h(S(Wh)), "object-key-init"),
        Ve: cc11001100_hook("Ve", t, "object-key-init"),
        Gg: cc11001100_hook("Gg", n, "object-key-init"),
        qe: cc11001100_hook("qe", b.h(ui, S(Mb)), "object-key-init"),
        rh: cc11001100_hook("rh", N, "object-key-init"),
        Ag: cc11001100_hook("Ag", ta, "object-key-init"),
        Fg: cc11001100_hook("Fg", B, "object-key-init"),
        uc: cc11001100_hook("uc", c, "object-key-init"),
        P: cc11001100_hook("P", new Z(new V()).V(a), "object-key-init"),
        Se: cc11001100_hook("Se", g, "object-key-init"),
        vc: cc11001100_hook("vc", e, "object-key-init"),
        yc: cc11001100_hook("yc", d, "object-key-init"),
        vd: cc11001100_hook("vd", G, "object-key-init"),
        sh: cc11001100_hook("sh", C, "object-key-init"),
        xg: cc11001100_hook("xg", w, "object-key-init")
      }
    };
  }
  function Ni(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.h(U(function () {
      return !1;
    }), R(function (c) {
      return c;
    }), me(function (c) {
      return new Z(c).V(a);
    }));
  }
  function Mi(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b.h(Ff(zg), Y(a, 1)).h(S(function (d, e) {
      return Wh(d, e, xi);
    }), W({
      timestamp: cc11001100_hook("timestamp", c.now(), "object-key-init"),
      value: cc11001100_hook("value", wi, "object-key-init")
    }), Y(a, 1));
  }
  function Oi(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    c = cc11001100_hook("c", d.h(Ji(c), yi(R(function (e) {
      return ti(e);
    })), Y(a, 1)), "assign");
    return b instanceof Z ? c : P([c, b]).h(R(function (e) {
      var f = cc11001100_hook("f", r(e), "var-init");
      e = cc11001100_hook("e", f.next().value, "assign");
      f = cc11001100_hook("f", f.next().value, "assign");
      return {
        timestamp: cc11001100_hook("timestamp", f.timestamp.maximum(e.timestamp), "object-key-init"),
        value: cc11001100_hook("value", f.value ? 0 : e.value, "object-key-init")
      };
    }), S(Wh), Y(a, 10));
  }
  function Pi(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    b = cc11001100_hook("b", [b.h(R(function (e) {
      return 242500 <= e.value.D.width * e.value.D.height;
    }))], "assign");
    c instanceof K && b.push(c.h(R(function (e) {
      return !!e;
    })));
    c = cc11001100_hook("c", P(b), "assign");
    return d ? c.h(R(function (e) {
      return e.some(function (f) {
        return f;
      });
    }), W(!1), S(), Y(a, 1)) : new Z(!1).V(a);
  }
  ;
  function Qi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return 0 >= a.length ? Ie : P(a.map(function (b) {
      var c = cc11001100_hook("c", 0, "var-init");
      return b.h(R(function (d) {
        return {
          index: cc11001100_hook("index", c++, "object-key-init"),
          value: cc11001100_hook("value", d, "object-key-init")
        };
      }));
    })).h(U(function (b) {
      return b.every(function (c) {
        return c.index === b[0].index;
      });
    }), R(function (b) {
      return b.map(function (c) {
        return c.value;
      });
    }));
  }
  ;
  function Ri(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return function (c) {
      return Qi(b.map(function (d) {
        return c.h(a(d));
      }));
    };
  }
  ;
  function Si(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.ya && (a.bb = cc11001100_hook("a.bb", a.ya, "assign"));
    a.ya = cc11001100_hook("a.ya", b, "assign");
    a.bb && a.bb.value ? (b = cc11001100_hook("b", Math.max(0, Ya(b.timestamp, a.bb.timestamp)), "assign"), a.totalTime += cc11001100_hook("a.totalTime", b, "assign"), a.ga += cc11001100_hook("a.ga", b, "assign")) : a.ga = cc11001100_hook("a.ga", 0, "assign");
    return a;
  }
  function Ti(a) {
    cc11001100_hook("a", a, "function-parameter");
    return J(rf(Si, {
      totalTime: cc11001100_hook("totalTime", 0, "object-key-init"),
      ga: cc11001100_hook("ga", 0, "object-key-init")
    }), R(function (b) {
      return new ai(a, {
        timestamp: cc11001100_hook("timestamp", b.ya.timestamp, "object-key-init"),
        value: cc11001100_hook("value", b.totalTime, "object-key-init")
      }, b.ya.value);
    }));
  }
  function Ui(a) {
    cc11001100_hook("a", a, "function-parameter");
    return J(rf(Si, {
      totalTime: cc11001100_hook("totalTime", 0, "object-key-init"),
      ga: cc11001100_hook("ga", 0, "object-key-init")
    }), R(function (b) {
      return new ai(a, {
        timestamp: cc11001100_hook("timestamp", b.ya.timestamp, "object-key-init"),
        value: cc11001100_hook("value", b.ga, "object-key-init")
      }, b.ya.value);
    }));
  }
  ;
  function Vi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return J(Ui(a), R(function (b) {
      return b.map(function (c) {
        return Math.round(c);
      });
    }));
  }
  ;
  function Wi(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new ai(a, {
      timestamp: cc11001100_hook("timestamp", a.now(), "object-key-init"),
      value: cc11001100_hook("value", 0, "object-key-init")
    }, !1), "var-init");
    return J(Ui(a), rf(function (c, d) {
      return c.C.value > d.C.value ? new ai(a, c.C, !1) : d;
    }, b), R(function (c) {
      return c.map(function (d) {
        return Math.round(d);
      });
    }));
  }
  ;
  function Xi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return J(Di(Q(b)), Wi(a));
    };
  }
  ;
  function Yi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return J(yi(R(function (c) {
        return Ci(c, b);
      })), Ti(a), R(function (c) {
        return c.map(function (d) {
          return Math.round(d);
        });
      }));
    };
  }
  ;
  function Zi(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.map(function (b) {
      return b.map(function (c) {
        return [c];
      });
    }).reduce(function (b, c) {
      return b.ka(c).map(function (d) {
        return d.flat();
      });
    });
  }
  function $i(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.ka(b).map(function (c) {
      var d = cc11001100_hook("d", r(c), "var-init");
      c = cc11001100_hook("c", d.next().value, "assign");
      d = cc11001100_hook("d", d.next().value, "assign");
      return c - d;
    });
  }
  function aj(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g = cc11001100_hook("g", bj, "var-init");
    if (1 < g.length) for (var h = cc11001100_hook("h", 0, "var-init"); h < g.length - 1; h++) if (g[h] < g[h + 1]) throw Error();
    h = cc11001100_hook("h", f.h(W(void 0), X(function () {
      return d.h(Vi(a));
    }), S(function (k, l) {
      return k.aa(l);
    }), Y(b, 1)), "assign");
    f = cc11001100_hook("f", f.h(W(void 0), X(function () {
      return d.h(Wi(a));
    }), S(function (k, l) {
      return k.aa(l);
    }), Y(b, 1)), "assign");
    return {
      Nb: cc11001100_hook("Nb", e.h(W(void 0), X(function () {
        return c.h(Ri(Xi(a), g));
      }), R(Zi), S(function (k, l) {
        return k.aa(l);
      }), Y(b, 1)), "object-key-init"),
      Xb: cc11001100_hook("Xb", e.h(W(void 0), X(function () {
        return c.h(Ri(Yi(a), g), R(function (k) {
          return k.map(function (l, p) {
            return 0 < p ? $i(l, k[p - 1]) : l;
          });
        }));
      }), R(Zi), S(function (k, l) {
        return k.aa(l);
      }), Y(b, 1)), "object-key-init"),
      Mb: cc11001100_hook("Mb", f, "object-key-init"),
      Ua: cc11001100_hook("Ua", h.h(S(function (k, l) {
        return k.aa(l);
      }), Y(b, 1)), "object-key-init")
    };
  }
  ;
  var cj = function (a) {
      this.l = cc11001100_hook("this.l", a, "assign");
      this.Rc = cc11001100_hook("this.Rc", null, "assign");
      this.timeout = cc11001100_hook("this.timeout", new V(), "assign");
    },
    ej = function (a, b) {
      dj(a);
      a.Rc = cc11001100_hook("a.Rc", a.l.setTimeout(function () {
        return void a.timeout.next();
      }, b), "assign");
    },
    dj = function (a) {
      null !== a.Rc && (a.l.clearTimeout(a.Rc), a.Rc = cc11001100_hook("a.Rc", null, "assign"));
    };
  function fj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", gj.nf, "var-init"),
      f = cc11001100_hook("f", new cj(b), "var-init");
    c = cc11001100_hook("c", c.h(W(void 0), X(function () {
      dj(f);
      return d;
    })).h(R(function (g) {
      dj(f);
      var h = cc11001100_hook("h", g.C, "var-init"),
        k = cc11001100_hook("k", g.active, "var-init");
      h.value >= e || !k || (k = cc11001100_hook("k", b.now(), "assign"), k = cc11001100_hook("k", Math.max(0, Ya(k, h.timestamp)), "assign"), ej(f, Math.max(0, e - h.value - k)));
      return g.map(function (l) {
        return l >= e;
      });
    })), "assign");
    return P([c, uf(f.timeout, Q(void 0))]).h(R(function (g) {
      return r(g).next().value;
    }), hg(function (g) {
      return !g.ba().value;
    }, !0), Y(a, 1));
  }
  ;
  function hj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", d.vc, "var-init"),
      f = cc11001100_hook("f", d.td, "var-init"),
      g = cc11001100_hook("g", d.rf, "var-init"),
      h = cc11001100_hook("h", d.ne, "var-init"),
      k = cc11001100_hook("k", d.Jd, "var-init"),
      l = cc11001100_hook("l", d.We, "var-init");
    d = cc11001100_hook("d", d.yc, "assign");
    b = cc11001100_hook("b", ij(a, c, b), "assign");
    c = cc11001100_hook("c", jj(a, c), "assign");
    var p = cc11001100_hook("p", kj(a, e, l, b), "var-init"),
      t = cc11001100_hook("t", p.h(R(function (B) {
        return B.value;
      }), S(), Y(a, 1), rf(function (B, z) {
        return Math.max(B, z);
      }, 0)), "var-init"),
      n = cc11001100_hook("n", p.h(R(function (B) {
        return B.value;
      }), Fi(), Y(a, 1)), "var-init"),
      w = cc11001100_hook("w", b.h(Bi, R(function (B) {
        return B.value;
      }), Se(2), S(), Y(a, 1)), "var-init");
    g = cc11001100_hook("g", lj(a, b, g, h), "assign");
    var A = cc11001100_hook("A", g.h(W(!1), S(), R(function (B) {
      return B ? k : f;
    })), "var-init");
    h = cc11001100_hook("h", p.h(Di(A), S(), Y(a, 1)), "assign");
    var y = cc11001100_hook("y", P([h, b]).h(U(function (B) {
      var z = cc11001100_hook("z", r(B), "var-init");
      B = cc11001100_hook("B", z.next().value, "assign");
      z = cc11001100_hook("z", z.next().value, "assign");
      return B.timestamp.equals(z.timestamp);
    }), R(function (B) {
      var z = cc11001100_hook("z", r(B), "var-init");
      B = cc11001100_hook("B", z.next().value, "assign");
      z = cc11001100_hook("z", z.next().value, "assign");
      return {
        visible: cc11001100_hook("visible", B.value, "object-key-init"),
        geometry: cc11001100_hook("geometry", z.value.D, "object-key-init")
      };
    }), rf(function (B, z) {
      return !z.visible && B.visible ? B : z;
    }, {
      visible: cc11001100_hook("visible", !1, "object-key-init"),
      geometry: cc11001100_hook("geometry", ci, "object-key-init")
    }), R(function (B) {
      return B.geometry;
    }), W(ci), Y(a, 1), S(di)), "var-init");
    l = cc11001100_hook("l", l instanceof K ? l.h(S(), of()) : zg, "assign");
    A = cc11001100_hook("A", P([l, A]).h(of()), "assign");
    var C = cc11001100_hook("C", b.h(U(function (B) {
        return "ns" !== B.value.S && "ns" !== B.value.L;
      }), rf(function (B) {
        return B + 1;
      }, 0), W(0), Y(a, 1)), "var-init"),
      G = cc11001100_hook("G", c.h(of(!0), W(!1), Y(a, 1)), "var-init");
    G = cc11001100_hook("G", P([d, G]).h(R(function (B) {
      var z = cc11001100_hook("z", r(B), "var-init");
      B = cc11001100_hook("B", z.next().value, "assign");
      z = cc11001100_hook("z", z.next().value, "assign");
      return B && !z;
    }), Y(a, 1)), "assign");
    var N = cc11001100_hook("N", b.h(Ki, S()), "var-init"),
      ta = cc11001100_hook("ta", N.h(R(function (B) {
        return B.value;
      }), rf(function (B, z) {
        return Math.max(B, z);
      }, 0), S(), Y(a, 1)), "var-init");
    a = cc11001100_hook("a", N.h(R(function (B) {
      return B.value;
    }), Fi(), Y(a, 1)), "assign");
    return {
      Vd: cc11001100_hook("Vd", l, "object-key-init"),
      Ub: cc11001100_hook("Ub", A, "object-key-init"),
      Aa: {
        Wg: cc11001100_hook("Wg", b, "object-key-init"),
        Ye: cc11001100_hook("Ye", b.h(Ei), "object-key-init"),
        qc: cc11001100_hook("qc", y.h(S(di)), "object-key-init"),
        visible: cc11001100_hook("visible", h.h(S(Wh)), "object-key-init"),
        Yd: cc11001100_hook("Yd", p.h(S(Wh)), "object-key-init"),
        Ve: cc11001100_hook("Ve", t, "object-key-init"),
        Gg: cc11001100_hook("Gg", n, "object-key-init"),
        qe: cc11001100_hook("qe", b.h(ui, S(Mb)), "object-key-init"),
        rh: cc11001100_hook("rh", N, "object-key-init"),
        Ag: cc11001100_hook("Ag", ta, "object-key-init"),
        Fg: cc11001100_hook("Fg", a, "object-key-init"),
        uc: cc11001100_hook("uc", c, "object-key-init"),
        P: cc11001100_hook("P", b.h(R(function (B) {
          return B.value.P;
        })), "object-key-init"),
        Se: cc11001100_hook("Se", g, "object-key-init"),
        vc: cc11001100_hook("vc", e, "object-key-init"),
        yc: cc11001100_hook("yc", d, "object-key-init"),
        vd: cc11001100_hook("vd", G, "object-key-init"),
        sh: cc11001100_hook("sh", C, "object-key-init"),
        xg: cc11001100_hook("xg", w, "object-key-init")
      }
    };
  }
  function jj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.h(U(function () {
      return !1;
    }), R(function (c) {
      return c;
    }), me(function (c) {
      return new Z(c).V(a);
    }));
  }
  function ij(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b.h(Ff(zg), Y(a, 1)).h(S(function (d, e) {
      return Wh(d, e, xi);
    }), W({
      timestamp: cc11001100_hook("timestamp", c.now(), "object-key-init"),
      value: cc11001100_hook("value", wi, "object-key-init")
    }), Y(a, 1));
  }
  function kj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    c = cc11001100_hook("c", d.h(Ji(c), yi(R(function (e) {
      return ti(e);
    })), Y(a, 1)), "assign");
    return b instanceof Z ? c : P([c, b]).h(R(function (e) {
      var f = cc11001100_hook("f", r(e), "var-init");
      e = cc11001100_hook("e", f.next().value, "assign");
      f = cc11001100_hook("f", f.next().value, "assign");
      return {
        timestamp: cc11001100_hook("timestamp", f.timestamp.maximum(e.timestamp), "object-key-init"),
        value: cc11001100_hook("value", f.value ? 0 : e.value, "object-key-init")
      };
    }), S(Wh), Y(a, 1));
  }
  function lj(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    b = cc11001100_hook("b", [b.h(R(function (e) {
      return 242500 <= e.value.D.width * e.value.D.height;
    }))], "assign");
    c instanceof K && b.push(c.h(R(function (e) {
      return !!e;
    })));
    c = cc11001100_hook("c", P(b), "assign");
    return d ? c.h(R(function (e) {
      return e.some(function (f) {
        return f;
      });
    }), W(!1), S(), Y(a, 1)) : new Z(!1).V(a);
  }
  ;
  var mj = cc11001100_hook("mj", J(wg("data-google-av-itpl"), R(function (a) {
    return Number(a);
  }), R(function (a) {
    return isNaN(a) ? 1 : a;
  })), "var-init");
  var oj = cc11001100_hook("oj", R(nj), "var-init");
  function nj(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Number(vg(a, "data-google-av-rs")), "var-init");
    if (!isNaN(b) && 0 !== b) return b;
    var c;
    return (a = cc11001100_hook("a", null == (c = cc11001100_hook("c", a.j, "assign")) ? void 0 : c.id, "assign")) ? 0 == a.lastIndexOf("DfaVisibilityIdentifier", 0) ? 6 : 0 == a.lastIndexOf("YtKevlarVisibilityIdentifier", 0) ? 15 : 0 == a.lastIndexOf("YtSparklesVisibilityIdentifier", 0) ? 17 : 0 == a.lastIndexOf("YtKabukiVisibilityIdentifier", 0) ? 18 : 0 : 0;
  }
  ;
  function pj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(wg("data-google-av-metadata"), R(function (c) {
      if (null === c) return b(void 0);
      c = cc11001100_hook("c", c.split("&").map(function (d) {
        return d.split("=");
      }).filter(function (d) {
        return d[0] === a;
      }), "assign");
      return 0 === c.length ? b(void 0) : b(c[0].slice(1).join("="));
    }));
  }
  ;
  var qj = cc11001100_hook("qj", {
      wh: cc11001100_hook("wh", "addEventListener", "object-key-init"),
      Ch: cc11001100_hook("Ch", "getMaxSize", "object-key-init"),
      Dh: cc11001100_hook("Dh", "getScreenSize", "object-key-init"),
      Eh: cc11001100_hook("Eh", "getState", "object-key-init"),
      Fh: cc11001100_hook("Fh", "getVersion", "object-key-init"),
      Hh: cc11001100_hook("Hh", "removeEventListener", "object-key-init"),
      Gh: cc11001100_hook("Gh", "isViewable", "object-key-init")
    }, "var-init"),
    sj = function (a, b) {
      b = cc11001100_hook("b", void 0 === b ? function (f) {
        return rj(f);
      } : b, "assign");
      this.pa = cc11001100_hook("this.pa", null, "assign");
      this.qg = cc11001100_hook("this.qg", new V(), "assign");
      var c = cc11001100_hook("c", a.Cd, "var-init"),
        d = cc11001100_hook("d", !a.nb, "var-init");
      if (c && d) {
        var e = cc11001100_hook("e", a.global.top.mraid, "var-init");
        if (e) {
          this.oc = cc11001100_hook("this.oc", b(e), "assign");
          this.pa = cc11001100_hook("this.pa", e, "assign");
          this.fb = cc11001100_hook("this.fb", 3, "assign");
          return;
        }
      }
      (a = cc11001100_hook("a", a.global.mraid, "assign")) ? (this.oc = cc11001100_hook("this.oc", b(a), "assign"), this.pa = cc11001100_hook("this.pa", a, "assign"), this.fb = cc11001100_hook("this.fb", c ? d ? 2 : 1 : 0, "assign")) : (this.fb = cc11001100_hook("this.fb", -1, "assign"), this.oc = cc11001100_hook("this.oc", 2, "assign"));
    };
  sj.prototype.addEventListener = cc11001100_hook("sj.prototype.addEventListener", function (a, b) {
    return this.ub("addEventListener", a, b);
  }, "assign");
  sj.prototype.removeEventListener = cc11001100_hook("sj.prototype.removeEventListener", function (a, b) {
    return this.ub("removeEventListener", a, b);
  }, "assign");
  sj.prototype.De = cc11001100_hook("sj.prototype.De", function () {
    var a = cc11001100_hook("a", this.ub("getVersion"), "var-init");
    return "string" === typeof a ? a : "";
  }, "assign");
  sj.prototype.getState = cc11001100_hook("sj.prototype.getState", function () {
    var a = cc11001100_hook("a", this.ub("getState"), "var-init");
    return "string" === typeof a ? a : "";
  }, "assign");
  var tj = function (a) {
      a = cc11001100_hook("a", a.ub("isViewable"), "assign");
      return "boolean" === typeof a ? a : !1;
    },
    uj = function (a) {
      if (a.pa) return a = cc11001100_hook("a", a.pa.AFMA_LIDAR, "assign"), "string" === typeof a ? a : void 0;
    },
    rj = function (a) {
      return a ? a.IS_GMA_SDK ? Object.values(qj).every(function (b) {
        return "function" === typeof a[b];
      }) ? 0 : 1 : 2 : 1;
    };
  sj.prototype.ub = cc11001100_hook("sj.prototype.ub", function (a) {
    var b = cc11001100_hook("b", x.apply(1, arguments), "var-init");
    if (this.pa) try {
      return this.pa[a].apply(this.pa, u(b));
    } catch (c) {
      this.qg.next(a);
    }
  }, "assign");
  da.Object.defineProperties(sj.prototype, {
    xe: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        if (this.pa) {
          var a = cc11001100_hook("a", this.pa.AFMA_LIDAR_EXP_1, "var-init");
          return void 0 === a ? void 0 : !!a;
        }
      },
      set: function (a) {
        this.pa && (this.pa.AFMA_LIDAR_EXP_1 = cc11001100_hook("this.pa.AFMA_LIDAR_EXP_1", a, "assign"));
      }
    }
  });
  function vj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return -1 !== new sj(a).fb ? new Z(!0).V(a.i) : b.h(wg("data-google-av-inapp"), R(function (c) {
      return null !== c;
    }), Y(a.i, 1));
  }
  ;
  function wj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      ed: cc11001100_hook("ed", b.h(wg("data-google-av-adk")), "object-key-init"),
      kc: cc11001100_hook("kc", b.h(wg("data-google-av-btr"), S(), R(function (c) {
        return null === c ? [] : c.split("|").filter(function (d) {
          return "" !== d;
        });
      })), "object-key-init"),
      kd: cc11001100_hook("kd", b.h(wg("data-google-av-cpmav"), S(), R(function (c) {
        return null === c ? [] : c.split("|").filter(function (d) {
          return "" !== d;
        });
      })), "object-key-init"),
      Qf: cc11001100_hook("Qf", Oh(a, b), "object-key-init"),
      flags: cc11001100_hook("flags", b.h(wg("data-google-av-flags"), S()), "object-key-init"),
      Ma: cc11001100_hook("Ma", vj(a, b), "object-key-init"),
      Fd: cc11001100_hook("Fd", b.h(pj("cr", function (c) {
        return "1" === c;
      }), S()), "object-key-init"),
      ug: cc11001100_hook("ug", b.h(pj("omid", function (c) {
        return "1" === c;
      }), S()), "object-key-init"),
      Ed: cc11001100_hook("Ed", b.h(mj), "object-key-init"),
      metadata: cc11001100_hook("metadata", b.h(wg("data-google-av-metadata")), "object-key-init"),
      Fa: cc11001100_hook("Fa", b.h(oj), "object-key-init"),
      Ha: cc11001100_hook("Ha", b.h(Cg), "object-key-init"),
      vh: cc11001100_hook("vh", b.h(pj("la", function (c) {
        return "1" === c;
      }), S()), "object-key-init"),
      Ya: cc11001100_hook("Ya", b.h(wg("data-google-av-turtlex"), R(function (c) {
        return null !== c;
      }), S()), "object-key-init"),
      Id: cc11001100_hook("Id", b.h(wg("data-google-av-vattr"), R(function (c) {
        return null !== c;
      }), S()), "object-key-init")
    };
  }
  ;
  function xj(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    c = cc11001100_hook("c", c.h(R(function () {
      return !1;
    })), "assign");
    d = cc11001100_hook("d", P([e, d]).h(X(function (f) {
      f = cc11001100_hook("f", r(f).next().value, "assign");
      return yj(b, f);
    })), "assign");
    return uf(Q(!1), c, d).h(S(), Y(a.i, 1));
  }
  function yj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.h(R(function (c) {
      return b || 0 === c || 2 === c;
    }));
  }
  ;
  function zj(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    if (b = cc11001100_hook("b", Aj(a), "assign")) b = cc11001100_hook("b", !Bj(a, "abgcp") && !Bj(a, "abgc") && !("string" === typeof a.id && "abgb" === a.id) && !("string" === typeof a.id && "mys-abgc" === a.id) && !Bj(a, "cbb"), "assign");
    return b;
  }
  function Bj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.classList ? a.classList.contains(b) : -1 < (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Aj(a) {
    cc11001100_hook("a", a, "function-parameter");
    try {
      var b = cc11001100_hook("b", a.getBoundingClientRect(), "var-init");
      return b && 30 <= b.height && 30 <= b.width;
    } catch (c) {
      return !1;
    }
  }
  function Cj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (void 0 === a.j || !a.j.children) return a;
    for (var c = cc11001100_hook("c", Lb(a.j.children), "var-init"); c.length;) {
      var d = cc11001100_hook("d", b ? c.filter(zj) : c.filter(Aj), "var-init");
      if (1 === d.length) return new Kg(d[0]);
      if (1 < d.length) break;
      c = cc11001100_hook("c", Ob(c, function (e) {
        return Lb(e.children);
      }), "assign");
    }
    return a;
  }
  function Dj(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (c) return {
      pc: cc11001100_hook("pc", b, "object-key-init"),
      eb: cc11001100_hook("eb", Q(null), "object-key-init")
    };
    c = cc11001100_hook("c", b.element.h(R(function (f) {
      a: if (void 0 === f.j || Aj(f.j)) f = cc11001100_hook("f", {
        Ic: cc11001100_hook("Ic", f, "object-key-init"),
        eb: cc11001100_hook("eb", "mue", "object-key-init")
      }, "assign");else {
        var g = cc11001100_hook("g", Cj(f, e), "var-init");
        if (void 0 !== g.j && Aj(g.j)) f = cc11001100_hook("f", {
          Ic: cc11001100_hook("Ic", g, "object-key-init"),
          eb: cc11001100_hook("eb", "ie", "object-key-init")
        }, "assign");else {
          if (d || a.Cd) if (g = cc11001100_hook("g", a.document.querySelector(".GoogleActiveViewInnerContainer"), "assign")) {
            f = cc11001100_hook("f", {
              Ic: cc11001100_hook("Ic", new Kg(g), "object-key-init"),
              eb: cc11001100_hook("eb", "ce", "object-key-init")
            }, "assign");
            break a;
          }
          f = cc11001100_hook("f", {
            Ic: cc11001100_hook("Ic", f, "object-key-init"),
            eb: cc11001100_hook("eb", "mue", "object-key-init")
          }, "assign");
        }
      }
      return f;
    }), Rf()), "assign");
    return {
      pc: {
        Gb: cc11001100_hook("Gb", b.Gb, "object-key-init"),
        element: cc11001100_hook("element", c.h(R(function (f) {
          return f.Ic;
        })), "object-key-init")
      },
      eb: cc11001100_hook("eb", c.h(R(function (f) {
        return f.eb;
      })), "object-key-init")
    };
  }
  ;
  var Ej = cc11001100_hook("Ej", [33, 32], "var-init"),
    Fj = cc11001100_hook("Fj", J(mj, R(function (a) {
      return 0 <= Ej.indexOf(a);
    }), S()), "var-init");
  function Gj(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g = cc11001100_hook("g", c.h(R(function (k) {
        return 9 === k;
      })), "var-init"),
      h = cc11001100_hook("h", b.element.h(Fj), "var-init");
    c = cc11001100_hook("c", e.h(U(function (k) {
      return k;
    }), X(function () {
      return P([g, h]);
    }), R(function (k) {
      k = cc11001100_hook("k", r(k), "assign");
      var l = cc11001100_hook("l", k.next().value, "var-init");
      return !k.next().value || l;
    }), S()), "assign");
    f = cc11001100_hook("f", P([c, d.h(S()), f]).h(R(function (k) {
      var l = cc11001100_hook("l", r(k), "var-init");
      k = cc11001100_hook("k", l.next().value, "assign");
      var p = cc11001100_hook("p", l.next().value, "var-init");
      l = cc11001100_hook("l", l.next().value, "assign");
      return Dj(a, b, !k, p, l);
    }), Lf(1), vf()), "assign");
    d = cc11001100_hook("d", f.h(R(function (k) {
      return k.pc;
    })), "assign");
    f = cc11001100_hook("f", f.h(X(function (k) {
      return k.eb;
    }), W(null), S(), Y(a.i, 1)), "assign");
    return {
      Ca: cc11001100_hook("Ca", d, "object-key-init"),
      Eb: cc11001100_hook("Eb", f, "object-key-init")
    };
  }
  ;
  function Hj(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", void 0 === b ? !1 : b, "var-init");
    return J(X(function (c) {
      return Ij(a.document, c, b);
    }), Y(a.i, 1));
  }
  ;
  var Jj = function (a, b, c, d, e, f) {
    this.Lb = cc11001100_hook("this.Lb", b.element.h(Hj(a), Y(a.i, 1)), "assign");
    this.jf = cc11001100_hook("this.jf", xj(a, c, b.element, this.Lb, d), "assign");
    c = cc11001100_hook("c", Gj(a, b, e, d, this.jf, f), "assign");
    d = cc11001100_hook("d", c.Eb, "assign");
    this.Ca = cc11001100_hook("this.Ca", c.Ca, "assign");
    this.Eb = cc11001100_hook("this.Eb", d, "assign");
    this.de = cc11001100_hook("this.de", uf(new Z(1).V(a.i), b.element.h(Se(1), R(function () {
      return 2;
    }), Y(a.i, 1)), this.Lb.h(Se(1), R(function () {
      return 3;
    }), Y(a.i, 1)), this.jf.h(U(Boolean), Se(1), R(function () {
      return 0;
    }), Y(a.i, 1))).h(hg(function (g) {
      return 0 !== g;
    }, !0), Y(a.i, 0)), "assign");
  };
  function Kj(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new Ka(13), "var-init");
    if (1 > a.length) return {
      se: cc11001100_hook("se", Ie, "object-key-init"),
      gd: cc11001100_hook("gd", Ie, "object-key-init")
    };
    var c = cc11001100_hook("c", new V(), "var-init");
    return {
      se: cc11001100_hook("se", a.slice(1).reduce(function (d, e) {
        return d.h(me(function (f) {
          c.next(f);
          return e;
        }));
      }, a[0]).h(me(function (d) {
        c.next(d);
        return Je(b);
      }), Ef(new V()), vf()), "object-key-init"),
      gd: cc11001100_hook("gd", c, "object-key-init")
    };
  }
  ;
  var Lj = function () {};
  var Mj = function (a, b) {
    this.context = cc11001100_hook("this.context", a, "assign");
    this.mh = cc11001100_hook("this.mh", b, "assign");
  };
  v(Mj, Lj);
  Mj.prototype.Ka = cc11001100_hook("Mj.prototype.Ka", function (a, b) {
    var c = cc11001100_hook("c", this.mh.map(function (f) {
        return f.Ka(a, b);
      }), "var-init"),
      d = cc11001100_hook("d", Kj(c.map(function (f) {
        return f.La;
      })), "var-init"),
      e = cc11001100_hook("e", d.gd.h(Nj()), "var-init");
    return {
      La: cc11001100_hook("La", d.se.h(Y(this.context.i, 1)), "object-key-init"),
      Ia: cc11001100_hook("Ia", Object.assign.apply(Object, [{
        Wd: cc11001100_hook("Wd", e, "object-key-init"),
        bi: cc11001100_hook("bi", d.gd, "object-key-init")
      }].concat(u(c.map(function (f) {
        return f.Ia;
      })))), "object-key-init")
    };
  }, "assign");
  var Nj = function () {
    return rf(function (a, b) {
      b instanceof Ka ? a.push(b.Dg) : a.push(-1);
      return a;
    }, []);
  };
  var Oj = function (a, b) {
    this.x = cc11001100_hook("this.x", void 0 !== a ? a : 0, "assign");
    this.y = cc11001100_hook("this.y", void 0 !== b ? b : 0, "assign");
  };
  m = cc11001100_hook("m", Oj.prototype, "assign");
  m.clone = cc11001100_hook("m.clone", function () {
    return new Oj(this.x, this.y);
  }, "assign");
  m.toString = cc11001100_hook("m.toString", function () {
    return "(" + this.x + ", " + this.y + ")";
  }, "assign");
  m.equals = cc11001100_hook("m.equals", function (a) {
    return a instanceof Oj && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1);
  }, "assign");
  m.ceil = cc11001100_hook("m.ceil", function () {
    this.x = cc11001100_hook("this.x", Math.ceil(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.ceil(this.y), "assign");
    return this;
  }, "assign");
  m.floor = cc11001100_hook("m.floor", function () {
    this.x = cc11001100_hook("this.x", Math.floor(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.floor(this.y), "assign");
    return this;
  }, "assign");
  m.round = cc11001100_hook("m.round", function () {
    this.x = cc11001100_hook("this.x", Math.round(this.x), "assign");
    this.y = cc11001100_hook("this.y", Math.round(this.y), "assign");
    return this;
  }, "assign");
  m.translate = cc11001100_hook("m.translate", function (a, b) {
    a instanceof Oj ? (this.x += cc11001100_hook("this.x", a.x, "assign"), this.y += cc11001100_hook("this.y", a.y, "assign")) : (this.x += cc11001100_hook("this.x", Number(a), "assign"), "number" === typeof b && (this.y += cc11001100_hook("this.y", b, "assign")));
    return this;
  }, "assign");
  m.scale = cc11001100_hook("m.scale", function (a, b) {
    this.x *= cc11001100_hook("this.x", a, "assign");
    this.y *= cc11001100_hook("this.y", "number" === typeof b ? b : a, "assign");
    return this;
  }, "assign");
  var Pj = function (a, b) {
    this.width = cc11001100_hook("this.width", a, "assign");
    this.height = cc11001100_hook("this.height", b, "assign");
  };
  m = cc11001100_hook("m", Pj.prototype, "assign");
  m.clone = cc11001100_hook("m.clone", function () {
    return new Pj(this.width, this.height);
  }, "assign");
  m.toString = cc11001100_hook("m.toString", function () {
    return "(" + this.width + " x " + this.height + ")";
  }, "assign");
  m.aspectRatio = cc11001100_hook("m.aspectRatio", function () {
    return this.width / this.height;
  }, "assign");
  m.Gd = cc11001100_hook("m.Gd", function () {
    return !(this.width * this.height);
  }, "assign");
  m.ceil = cc11001100_hook("m.ceil", function () {
    this.width = cc11001100_hook("this.width", Math.ceil(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.ceil(this.height), "assign");
    return this;
  }, "assign");
  m.floor = cc11001100_hook("m.floor", function () {
    this.width = cc11001100_hook("this.width", Math.floor(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.floor(this.height), "assign");
    return this;
  }, "assign");
  m.round = cc11001100_hook("m.round", function () {
    this.width = cc11001100_hook("this.width", Math.round(this.width), "assign");
    this.height = cc11001100_hook("this.height", Math.round(this.height), "assign");
    return this;
  }, "assign");
  m.scale = cc11001100_hook("m.scale", function (a, b) {
    this.width *= cc11001100_hook("this.width", a, "assign");
    this.height *= cc11001100_hook("this.height", "number" === typeof b ? b : a, "assign");
    return this;
  }, "assign");
  var Sj = function (a) {
      return a ? new Qj(Rj(a)) : $a || ($a = cc11001100_hook("$a", new Qj(), "assign"));
    },
    Tj = function (a) {
      var b = cc11001100_hook("b", a.scrollingElement ? a.scrollingElement : Vb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement, "var-init");
      a = cc11001100_hook("a", a.parentWindow || a.defaultView, "assign");
      return Sb && a.pageYOffset != b.scrollTop ? new Oj(b.scrollLeft, b.scrollTop) : new Oj(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    Uj = function (a, b, c) {
      function d(h) {
        cc11001100_hook("h", h, "function-parameter");
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
      }
      for (var e = cc11001100_hook("e", 1, "var-init"); e < c.length; e++) {
        var f = cc11001100_hook("f", c[e], "var-init");
        if (!Ga(f) || Ha(f) && 0 < f.nodeType) d(f);else {
          a: {
            if (f && "number" == typeof f.length) {
              if (Ha(f)) {
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
          Hb(g ? Lb(f) : f, d);
        }
      }
    },
    Rj = function (a) {
      D(a, "Node cannot be null or undefined.");
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    Vj = function (a, b) {
      a && (a = cc11001100_hook("a", a.parentNode, "assign"));
      for (var c = cc11001100_hook("c", 0, "var-init"); a;) {
        D("parentNode" != a.name);
        if (b(a)) return a;
        a = cc11001100_hook("a", a.parentNode, "assign");
        c++;
      }
      return null;
    },
    Qj = function (a) {
      this.mb = cc11001100_hook("this.mb", a || Da.document || document, "assign");
    };
  m = cc11001100_hook("m", Qj.prototype, "assign");
  m.getElementsByTagName = cc11001100_hook("m.getElementsByTagName", function (a, b) {
    return (b || this.mb).getElementsByTagName(String(a));
  }, "assign");
  m.createElement = cc11001100_hook("m.createElement", function (a) {
    var b = cc11001100_hook("b", this.mb, "var-init");
    a = cc11001100_hook("a", String(a), "assign");
    "application/xhtml+xml" === b.contentType && (a = cc11001100_hook("a", a.toLowerCase(), "assign"));
    return b.createElement(a);
  }, "assign");
  m.createTextNode = cc11001100_hook("m.createTextNode", function (a) {
    return this.mb.createTextNode(String(a));
  }, "assign");
  m.appendChild = cc11001100_hook("m.appendChild", function (a, b) {
    D(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
    a.appendChild(b);
  }, "assign");
  m.append = cc11001100_hook("m.append", function (a, b) {
    Uj(Rj(a), a, arguments);
  }, "assign");
  m.canHaveChildren = cc11001100_hook("m.canHaveChildren", function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  }, "assign");
  m.removeNode = cc11001100_hook("m.removeNode", function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  }, "assign");
  m.contains = cc11001100_hook("m.contains", function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = cc11001100_hook("b", b.parentNode, "assign");
    return b == a;
  }, "assign");
  var Wj = function (a, b, c, d) {
    this.top = cc11001100_hook("this.top", a, "assign");
    this.right = cc11001100_hook("this.right", b, "assign");
    this.bottom = cc11001100_hook("this.bottom", c, "assign");
    this.left = cc11001100_hook("this.left", d, "assign");
  };
  m = cc11001100_hook("m", Wj.prototype, "assign");
  m.zd = cc11001100_hook("m.zd", function () {
    return this.right - this.left;
  }, "assign");
  m.wd = cc11001100_hook("m.wd", function () {
    return this.bottom - this.top;
  }, "assign");
  m.clone = cc11001100_hook("m.clone", function () {
    return new Wj(this.top, this.right, this.bottom, this.left);
  }, "assign");
  m.toString = cc11001100_hook("m.toString", function () {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
  }, "assign");
  m.contains = cc11001100_hook("m.contains", function (a) {
    return this && a ? a instanceof Wj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
  }, "assign");
  m.expand = cc11001100_hook("m.expand", function (a, b, c, d) {
    Ha(a) ? (this.top -= cc11001100_hook("this.top", a.top, "assign"), this.right += cc11001100_hook("this.right", a.right, "assign"), this.bottom += cc11001100_hook("this.bottom", a.bottom, "assign"), this.left -= cc11001100_hook("this.left", a.left, "assign")) : (this.top -= cc11001100_hook("this.top", a, "assign"), this.right += cc11001100_hook("this.right", Number(b), "assign"), this.bottom += cc11001100_hook("this.bottom", Number(c), "assign"), this.left -= cc11001100_hook("this.left", Number(d), "assign"));
    return this;
  }, "assign");
  m.ceil = cc11001100_hook("m.ceil", function () {
    this.top = cc11001100_hook("this.top", Math.ceil(this.top), "assign");
    this.right = cc11001100_hook("this.right", Math.ceil(this.right), "assign");
    this.bottom = cc11001100_hook("this.bottom", Math.ceil(this.bottom), "assign");
    this.left = cc11001100_hook("this.left", Math.ceil(this.left), "assign");
    return this;
  }, "assign");
  m.floor = cc11001100_hook("m.floor", function () {
    this.top = cc11001100_hook("this.top", Math.floor(this.top), "assign");
    this.right = cc11001100_hook("this.right", Math.floor(this.right), "assign");
    this.bottom = cc11001100_hook("this.bottom", Math.floor(this.bottom), "assign");
    this.left = cc11001100_hook("this.left", Math.floor(this.left), "assign");
    return this;
  }, "assign");
  m.round = cc11001100_hook("m.round", function () {
    this.top = cc11001100_hook("this.top", Math.round(this.top), "assign");
    this.right = cc11001100_hook("this.right", Math.round(this.right), "assign");
    this.bottom = cc11001100_hook("this.bottom", Math.round(this.bottom), "assign");
    this.left = cc11001100_hook("this.left", Math.round(this.left), "assign");
    return this;
  }, "assign");
  m.translate = cc11001100_hook("m.translate", function (a, b) {
    a instanceof Oj ? (this.left += cc11001100_hook("this.left", a.x, "assign"), this.right += cc11001100_hook("this.right", a.x, "assign"), this.top += cc11001100_hook("this.top", a.y, "assign"), this.bottom += cc11001100_hook("this.bottom", a.y, "assign")) : (eb(a), this.left += cc11001100_hook("this.left", a, "assign"), this.right += cc11001100_hook("this.right", a, "assign"), "number" === typeof b && (this.top += cc11001100_hook("this.top", b, "assign"), this.bottom += cc11001100_hook("this.bottom", b, "assign")));
    return this;
  }, "assign");
  m.scale = cc11001100_hook("m.scale", function (a, b) {
    b = cc11001100_hook("b", "number" === typeof b ? b : a, "assign");
    this.left *= cc11001100_hook("this.left", a, "assign");
    this.right *= cc11001100_hook("this.right", a, "assign");
    this.top *= cc11001100_hook("this.top", b, "assign");
    this.bottom *= cc11001100_hook("this.bottom", b, "assign");
    return this;
  }, "assign");
  var Xj = function (a) {
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
  };
  function Yj(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return function (c) {
      return function (d) {
        var e = cc11001100_hook("e", d.h(Ef(new V()), vf()), "var-init");
        d = cc11001100_hook("d", c.element.h(S()), "assign");
        e = cc11001100_hook("e", e.h(R(function (f) {
          return f.value;
        })), "assign");
        return P([d, e, b]).h(R(function (f) {
          var g = cc11001100_hook("g", r(f), "var-init");
          f = cc11001100_hook("f", g.next().value, "assign");
          var h = cc11001100_hook("h", g.next().value, "var-init");
          g = cc11001100_hook("g", g.next().value, "assign");
          if (void 0 === f.j) var k = cc11001100_hook("k", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init"),
            width: cc11001100_hook("width", 0, "object-key-init"),
            height: cc11001100_hook("height", 0, "object-key-init")
          }, "var-init");else {
            k = cc11001100_hook("k", f.j.getBoundingClientRect(), "assign");
            var l = cc11001100_hook("l", f.j, "var-init"),
              p = cc11001100_hook("p", a.global, "var-init"),
              t = cc11001100_hook("t", new Oj(0, 0), "var-init");
            var n = cc11001100_hook("n", (n = cc11001100_hook("n", Rj(l), "assign")) ? n.parentWindow || n.defaultView : window, "var-init");
            if (Qb(n, "parent")) {
              do {
                if (n == p) {
                  var w = cc11001100_hook("w", l, "var-init"),
                    A = cc11001100_hook("A", Rj(w), "var-init");
                  hb(w, "Parameter is required");
                  var y = cc11001100_hook("y", new Oj(0, 0), "var-init");
                  var C = cc11001100_hook("C", A ? Rj(A) : document, "var-init");
                  C = cc11001100_hook("C", !Sb || 9 <= Number(dc) || "CSS1Compat" == Sj(C).mb.compatMode ? C.documentElement : C.body, "assign");
                  w != C && (w = cc11001100_hook("w", Xj(w), "assign"), A = cc11001100_hook("A", Tj(Sj(A).mb), "assign"), y.x = cc11001100_hook("y.x", w.left + A.x, "assign"), y.y = cc11001100_hook("y.y", w.top + A.y, "assign"));
                } else y = cc11001100_hook("y", D(l), "assign"), y = cc11001100_hook("y", Xj(y), "assign"), y = cc11001100_hook("y", new Oj(y.left, y.top), "assign");
                t.x += cc11001100_hook("t.x", y.x, "assign");
                t.y += cc11001100_hook("t.y", y.y, "assign");
              } while (n && n != p && n != n.parent && (l = cc11001100_hook("l", n.frameElement, "assign")) && (n = cc11001100_hook("n", n.parent, "assign")));
            }
            k = cc11001100_hook("k", {
              top: cc11001100_hook("top", t.y, "object-key-init"),
              left: cc11001100_hook("left", t.x, "object-key-init"),
              width: cc11001100_hook("width", k.width, "object-key-init"),
              height: cc11001100_hook("height", k.height, "object-key-init")
            }, "assign");
          }
          k = cc11001100_hook("k", fi(k, h.X), "assign");
          p = cc11001100_hook("p", ei(k, h.W), "assign");
          t = cc11001100_hook("t", a.l.now(), "assign");
          n = cc11001100_hook("n", Object, "assign");
          l = cc11001100_hook("l", n.assign, "assign");
          if (2 !== g || a.nb || 0 >= p.width || 0 >= p.height) var G = cc11001100_hook("G", !1, "var-init");else try {
            var N = cc11001100_hook("N", a.document.elementFromPoint(p.left + p.width / 2, p.top + p.height / 2), "var-init");
            G = cc11001100_hook("G", N ? !Zj(N, f) : !1, "assign");
          } catch (ta) {
            G = cc11001100_hook("G", !1, "assign");
          }
          return {
            timestamp: cc11001100_hook("timestamp", t, "object-key-init"),
            value: cc11001100_hook("value", l.call(n, {}, h, {
              L: cc11001100_hook("L", "geo", "object-key-init"),
              N: cc11001100_hook("N", G ? wi.N : p, "object-key-init"),
              D: cc11001100_hook("D", k, "object-key-init")
            }), "object-key-init")
          };
        }), Ig(a.i));
      };
    };
  }
  function Zj(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", void 0 === c ? 0 : c, "assign");
    return void 0 === a.j || void 0 === b.j ? !1 : a.j === b.j || Vj(b.j, function (d) {
      return d === a.j;
    }) ? !0 : b.j.ownerDocument && b.j.ownerDocument.defaultView && b.j.ownerDocument.defaultView === b.j.ownerDocument.defaultView.top ? !1 : 10 > c && b.j.ownerDocument && b.j.ownerDocument.defaultView && b.j.ownerDocument.defaultView.frameElement ? Zj(a, new Kg(b.j.ownerDocument.defaultView.frameElement), c + 1) : !0;
  }
  ;
  function ak(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && 0 === b ? 15 : a || 1 !== b ? null : 14;
  }
  function bk(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b instanceof K ? b.h(X(function (d) {
      return (d = cc11001100_hook("d", ak(d, c), "assign")) ? Je(new Ka(d)) : a;
    })) : (b = cc11001100_hook("b", ak(b.value, c), "assign")) ? Je(new Ka(b)) : a;
  }
  ;
  function ck(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.h(Ef(new V()), vf()), "var-init");
    return X(function (d) {
      return c.h(b(d));
    });
  }
  ;
  function dk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", void 0 === c ? function () {
      var f = cc11001100_hook("f", (ek(a.global) ? a.global.innerWidth : 0) || a.zd() || 0, "var-init"),
        g = cc11001100_hook("g", (ek(a.global) ? a.global.innerHeight : 0) || a.wd() || 0, "var-init");
      return {
        left: cc11001100_hook("left", 0, "object-key-init"),
        top: cc11001100_hook("top", 0, "object-key-init"),
        width: cc11001100_hook("width", f, "object-key-init"),
        height: cc11001100_hook("height", g, "object-key-init")
      };
    } : c, "var-init");
    var d = cc11001100_hook("d", a.nb ? fk(a.document) ? a.tg ? null : Je(new Ka(5)) : Je(new Ka(4)) : Je(new Ka(3)), "var-init");
    if (d) return d;
    var e = cc11001100_hook("e", new V(), "var-init");
    return uf(Q({}), b, e).h(R(function () {
      var f = cc11001100_hook("f", gk(a, c), "var-init");
      return {
        timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init"),
        value: {
          S: cc11001100_hook("S", "iem", "object-key-init"),
          W: cc11001100_hook("W", f, "object-key-init"),
          K: cc11001100_hook("K", f, "object-key-init"),
          P: cc11001100_hook("P", e, "object-key-init"),
          X: {
            x: cc11001100_hook("x", 0, "object-key-init"),
            y: cc11001100_hook("y", 0, "object-key-init")
          }
        }
      };
    }), Y(a.i, 1));
  }
  function gk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b(), "assign");
    var c = cc11001100_hook("c", Tj(document), "var-init"),
      d = function (n, w) {
        return !!a.document.elementFromPoint(n, w);
      },
      e = cc11001100_hook("e", Math.floor(b.left - c.x), "var-init"),
      f = cc11001100_hook("f", Math.floor(b.top - c.y), "var-init"),
      g = cc11001100_hook("g", Math.floor(b.left + b.width - c.x), "var-init"),
      h = cc11001100_hook("h", Math.floor(b.top + b.height - c.y), "var-init");
    b = cc11001100_hook("b", d(e, f), "assign");
    c = cc11001100_hook("c", d(g, h), "assign");
    if (b && c) return {
      top: cc11001100_hook("top", f, "object-key-init"),
      left: cc11001100_hook("left", e, "object-key-init"),
      width: cc11001100_hook("width", g - e, "object-key-init"),
      height: cc11001100_hook("height", h - f, "object-key-init")
    };
    var k = cc11001100_hook("k", d(g, f), "var-init"),
      l = cc11001100_hook("l", d(e, h), "var-init");
    if (b) h = cc11001100_hook("h", hk(f, h, function (n) {
      return d(e, n);
    }), "assign"), g = cc11001100_hook("g", hk(e, g, function (n) {
      return d(n, f);
    }), "assign");else if (k) h = cc11001100_hook("h", hk(f, h, function (n) {
      return d(g, n);
    }), "assign"), e = cc11001100_hook("e", hk(g, e, function (n) {
      return d(n, f);
    }), "assign");else if (l) f = cc11001100_hook("f", hk(h, f, function (n) {
      return d(e, n);
    }), "assign"), g = cc11001100_hook("g", hk(e, g, function (n) {
      return d(n, h);
    }), "assign");else if (c) f = cc11001100_hook("f", hk(h, f, function (n) {
      return d(g, n);
    }), "assign"), e = cc11001100_hook("e", hk(g, e, function (n) {
      return d(n, h);
    }), "assign");else {
      var p = cc11001100_hook("p", Math.floor((e + g) / 2), "var-init"),
        t = cc11001100_hook("t", Math.floor((f + h) / 2), "var-init");
      if (!d(p, t)) return {
        left: cc11001100_hook("left", 0, "object-key-init"),
        top: cc11001100_hook("top", 0, "object-key-init"),
        width: cc11001100_hook("width", 0, "object-key-init"),
        height: cc11001100_hook("height", 0, "object-key-init")
      };
      f = cc11001100_hook("f", hk(t, f, function (n) {
        return d(p, n);
      }), "assign");
      h = cc11001100_hook("h", hk(t, h, function (n) {
        return d(p, n);
      }), "assign");
      e = cc11001100_hook("e", hk(p, e, function (n) {
        return d(n, t);
      }), "assign");
      g = cc11001100_hook("g", hk(p, g, function (n) {
        return d(n, t);
      }), "assign");
    }
    return {
      top: cc11001100_hook("top", f, "object-key-init"),
      left: cc11001100_hook("left", e, "object-key-init"),
      width: cc11001100_hook("width", g - e, "object-key-init"),
      height: cc11001100_hook("height", h - f, "object-key-init")
    };
  }
  function hk(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (c(b)) return b;
    for (var d = cc11001100_hook("d", 15, "var-init"); d--;) {
      var e = cc11001100_hook("e", Math.floor((a + b) / 2), "var-init");
      if (e === a || e === b) break;
      c(e) ? a = cc11001100_hook("a", e, "assign") : b = cc11001100_hook("b", e, "assign");
    }
    return a;
  }
  ;
  var ik = function (a, b) {
    this.context = cc11001100_hook("this.context", a, "assign");
    this.na = cc11001100_hook("this.na", b, "assign");
  };
  v(ik, Lj);
  ik.prototype.Ka = cc11001100_hook("ik.prototype.Ka", function (a, b) {
    var c = cc11001100_hook("c", ck(dk(this.context, this.na), Yj(this.context, b.Fa)), "var-init");
    return {
      La: cc11001100_hook("La", bk(a.Ca.h(c), b.Ma, 0), "object-key-init"),
      Ia: {}
    };
  }, "assign");
  var kk = function () {
      return mb && vb ? vb.mobile : !jk() && (E("iPod") || E("iPhone") || E("Android") || E("IEMobile"));
    },
    jk = function () {
      return mb && vb ? !vb.mobile && (E("iPad") || E("Android") || E("Silk")) : E("iPad") || E("Android") && !E("Mobile") || E("Silk");
    };
  var lk = function (a, b) {
    this.name = cc11001100_hook("this.name", a, "assign");
    this.value = cc11001100_hook("this.value", b, "assign");
  };
  lk.prototype.toString = cc11001100_hook("lk.prototype.toString", function () {
    return this.name;
  }, "assign");
  var mk = cc11001100_hook("mk", new lk("OFF", Infinity), "var-init"),
    nk = cc11001100_hook("nk", new lk("WARNING", 900), "var-init"),
    ok = cc11001100_hook("ok", new lk("CONFIG", 700), "var-init"),
    pk = function () {
      this.nc = cc11001100_hook("this.nc", 0, "assign");
      this.clear();
    },
    qk;
  pk.prototype.clear = cc11001100_hook("pk.prototype.clear", function () {
    this.re = cc11001100_hook("this.re", Array(this.nc), "assign");
    this.we = cc11001100_hook("this.we", -1, "assign");
    this.Re = cc11001100_hook("this.Re", !1, "assign");
  }, "assign");
  var rk = function (a, b, c) {
    this.reset(a || mk, b, c, void 0, void 0);
  };
  rk.prototype.reset = cc11001100_hook("rk.prototype.reset", function (a, b, c, d) {
    d || Date.now();
    this.Hg = cc11001100_hook("this.Hg", b, "assign");
  }, "assign");
  rk.prototype.getMessage = cc11001100_hook("rk.prototype.getMessage", function () {
    return this.Hg;
  }, "assign");
  var sk = function (a, b) {
      this.level = cc11001100_hook("this.level", null, "assign");
      this.jg = cc11001100_hook("this.jg", [], "assign");
      this.parent = cc11001100_hook("this.parent", (void 0 === b ? null : b) || null, "assign");
      this.children = cc11001100_hook("this.children", [], "assign");
      this.zg = cc11001100_hook("this.zg", {
        xd: function () {
          return a;
        }
      }, "assign");
    },
    tk = function (a) {
      if (a.level) return a.level;
      if (a.parent) return tk(a.parent);
      db("Root logger has no level set.");
      return mk;
    },
    uk = function (a, b) {
      for (; a;) a.jg.forEach(function (c) {
        c(b);
      }), a = cc11001100_hook("a", a.parent, "assign");
    },
    vk = function () {
      this.entries = cc11001100_hook("this.entries", {}, "assign");
      var a = cc11001100_hook("a", new sk(""), "var-init");
      a.level = cc11001100_hook("a.level", ok, "assign");
      this.entries[""] = cc11001100_hook("this.entries[\"\"]", a, "assign");
    },
    wk,
    xk = function (a, b) {
      var c = cc11001100_hook("c", a.entries[b], "var-init");
      if (c) return c;
      c = cc11001100_hook("c", xk(a, b.slice(0, Math.max(b.lastIndexOf("."), 0))), "assign");
      var d = cc11001100_hook("d", new sk(b, c), "var-init");
      a.entries[b] = cc11001100_hook("a.entries[b]", d, "assign");
      c.children.push(d);
      return d;
    },
    yk = function () {
      wk || (wk = cc11001100_hook("wk", new vk(), "assign"));
      return wk;
    }; /*
       SPDX-License-Identifier: Apache-2.0
       */
  var zk = cc11001100_hook("zk", [], "var-init"),
    Ak = function (a) {
      var b;
      if (b = cc11001100_hook("b", xk(yk(), "safevalues").zg, "assign")) {
        var c = cc11001100_hook("c", "A URL with content '" + a + "' was sanitized away.", "var-init"),
          d = cc11001100_hook("d", nk, "var-init");
        if (a = cc11001100_hook("a", b, "assign")) if (a = cc11001100_hook("a", b && d, "assign")) {
          a = cc11001100_hook("a", d.value, "assign");
          var e = cc11001100_hook("e", b ? tk(xk(yk(), b.xd())) : mk, "var-init");
          a = cc11001100_hook("a", a >= e.value, "assign");
        }
        if (a) {
          d = cc11001100_hook("d", d || mk, "assign");
          a = cc11001100_hook("a", xk(yk(), b.xd()), "assign");
          "function" === typeof c && (c = cc11001100_hook("c", c(), "assign"));
          qk || (qk = cc11001100_hook("qk", new pk(), "assign"));
          e = cc11001100_hook("e", qk, "assign");
          b = cc11001100_hook("b", b.xd(), "assign");
          if (0 < e.nc) {
            var f = cc11001100_hook("f", (e.we + 1) % e.nc, "var-init");
            e.we = cc11001100_hook("e.we", f, "assign");
            e.Re ? (e = cc11001100_hook("e", e.re[f], "assign"), e.reset(d, c, b), b = cc11001100_hook("b", e, "assign")) : (e.Re = cc11001100_hook("e.Re", f == e.nc - 1, "assign"), b = cc11001100_hook("b", e.re[f] = cc11001100_hook("e.re[f]", new rk(d, c, b), "assign"), "assign"));
          } else b = cc11001100_hook("b", new rk(d, c, b), "assign");
          uk(a, b);
        }
      }
    };
  -1 === zk.indexOf(Ak) && zk.push(Ak);
  var ek = function (a) {
    try {
      return !!a && null != a.location.href && Qb(a, "foo");
    } catch (b) {
      return !1;
    }
  };
  function Bk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.nb) return Je(new Ka(6));
    var c = cc11001100_hook("c", new V(), "var-init");
    return uf(Q({}), b, c).h(R(function () {
      return {
        timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init"),
        value: {
          S: cc11001100_hook("S", "geo", "object-key-init"),
          W: cc11001100_hook("W", Ck(a), "object-key-init"),
          K: cc11001100_hook("K", Dk(a, !0), "object-key-init"),
          P: cc11001100_hook("P", c, "object-key-init"),
          X: {
            x: cc11001100_hook("x", 0, "object-key-init"),
            y: cc11001100_hook("y", 0, "object-key-init")
          }
        }
      };
    }), Ig(a.i));
  }
  function Ck(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Dk(a, !1), "var-init");
    if (!a.Cd || !ek(a.global.parent) || a.global.parent === a.global) return b;
    var c = cc11001100_hook("c", new Ek(a.global.parent, a.Va), "var-init");
    c.H = cc11001100_hook("c.H", a.H, "assign");
    c = cc11001100_hook("c", Ck(c), "assign");
    a = cc11001100_hook("a", a.global.frameElement.getBoundingClientRect(), "assign");
    return ei(fi(ei(c, a), {
      x: cc11001100_hook("x", b.left - a.left, "object-key-init"),
      y: cc11001100_hook("y", b.top - a.top, "object-key-init")
    }), b);
  }
  ;
  var Fk = function (a, b) {
    this.context = cc11001100_hook("this.context", a, "assign");
    this.na = cc11001100_hook("this.na", b, "assign");
  };
  v(Fk, Lj);
  Fk.prototype.Ka = cc11001100_hook("Fk.prototype.Ka", function (a, b) {
    var c = cc11001100_hook("c", ck(Bk(this.context, this.na), Yj(this.context, b.Fa)), "var-init");
    return {
      La: cc11001100_hook("La", bk(a.Ca.h(c), b.Ma, 0), "object-key-init"),
      Ia: {}
    };
  }, "assign");
  function Gk(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", void 0 === b ? {} : b, "var-init");
    if ("function" === typeof Event) return new Event(a, b);
    if ("undefined" !== typeof document) {
      var c = cc11001100_hook("c", document.createEvent("CustomEvent"), "var-init");
      c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
      return c;
    }
    throw Error();
  }
  ;
  function Hk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return b.h(a.ResizeObserver ? Ik(a) : Jk(a), Lf(1), vf());
    };
  }
  function Ik(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return b.h(X(function (c) {
        var d = cc11001100_hook("d", a.ResizeObserver, "var-init");
        if (!d || void 0 === c.j) return Q(wi.D);
        var e = cc11001100_hook("e", new K(function (f) {
          function g() {
            void 0 !== c.j && h.unobserve(c.j);
            h.disconnect();
            k.unsubscribe();
          }
          if (void 0 === c.j) return f.complete(), function () {};
          var h = cc11001100_hook("h", new d(function (l) {
            l.forEach(function (p) {
              f.next(p);
            });
          }), "var-init");
          h.observe(c.j);
          var k = cc11001100_hook("k", c.released.subscribe(g), "var-init");
          return g;
        }).h(Zg(a.s, 736), R(function (f) {
          return f.contentRect;
        })), "var-init");
        return uf(Q(c.j.getBoundingClientRect()), e);
      }), S(di));
    };
  }
  function Jk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      var c = cc11001100_hook("c", b.h(Mh(a, {
          attributes: cc11001100_hook("attributes", !0, "object-key-init"),
          childList: cc11001100_hook("childList", !0, "object-key-init"),
          characterData: cc11001100_hook("characterData", !0, "object-key-init"),
          subtree: cc11001100_hook("subtree", !0, "object-key-init")
        })), "var-init"),
        d = cc11001100_hook("d", a.Rg, "var-init");
      c = cc11001100_hook("c", uf(b.h(R(function () {
        return Gk("resize");
      })), c, d), "assign");
      return P(b, c).h(Zg(a.s, 737), R(function (e) {
        e = cc11001100_hook("e", r(e).next().value, "assign");
        return void 0 === e.j ? void 0 : e.j.getBoundingClientRect();
      }), Og(), S(di));
    };
  }
  ;
  function Kk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Lk(a, b).h(Lf(1), vf()), "var-init");
    return function (d) {
      d = cc11001100_hook("d", d.h(X(function (e) {
        return e.element;
      }), S()), "assign");
      return P([c, d]).h(X(function (e) {
        var f = cc11001100_hook("f", r(e), "var-init");
        e = cc11001100_hook("e", f.next().value, "assign");
        f = cc11001100_hook("f", f.next().value, "assign");
        return Mk(a, e.rg, Hk(a), e.Mg, e.fg, f);
      }), Ig(a.i));
    };
  }
  function Nk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Kk(a, b), "var-init");
    return function (d) {
      var e = cc11001100_hook("e", c(Q(d)), "var-init");
      return function (f) {
        return P([f, e]).h(R(function (g) {
          var h = cc11001100_hook("h", r(g), "var-init");
          g = cc11001100_hook("g", h.next().value, "assign");
          h = cc11001100_hook("h", h.next().value, "assign");
          var k = cc11001100_hook("k", fi(h.value.D, g.value.X), "var-init"),
            l = cc11001100_hook("l", ei(fi(h.value.N, g.value.X), g.value.W), "var-init");
          return {
            timestamp: cc11001100_hook("timestamp", g.timestamp.maximum(h.timestamp), "object-key-init"),
            value: cc11001100_hook("value", Object.assign({}, g.value, {
              L: cc11001100_hook("L", "nio", "object-key-init"),
              N: cc11001100_hook("N", l, "object-key-init"),
              D: cc11001100_hook("D", k, "object-key-init")
            }), "object-key-init")
          };
        }));
      };
    };
  }
  function Ok(a) {
    cc11001100_hook("a", a, "function-parameter");
    return R(function (b) {
      return "nio" !== b.value.S ? b : Object.assign({}, b, {
        value: cc11001100_hook("value", Object.assign({}, b.value, {
          W: cc11001100_hook("W", Dk(a, !0), "object-key-init"),
          K: cc11001100_hook("K", Dk(a, !0), "object-key-init")
        }), "object-key-init")
      });
    });
  }
  function Pk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Q(b).h(a, R(function () {
      return b;
    }));
  }
  function Lk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.l.timeline !== Ua ? Je(new Ka(2)) : a.MutationObserver ? "undefined" === typeof IntersectionObserver ? Je(new Ka(0)) : new K(function (c) {
      var d = cc11001100_hook("d", new V(), "var-init"),
        e = cc11001100_hook("e", new IntersectionObserver(d.next.bind(d), {
          threshold: cc11001100_hook("threshold", [].concat(u(b)), "object-key-init")
        }), "var-init");
      c.next({
        Mg: cc11001100_hook("Mg", d.h(Zg(a.s, 735)), "object-key-init"),
        rg: cc11001100_hook("rg", e, "object-key-init"),
        fg: function () {
          var f = cc11001100_hook("f", e.takeRecords(), "var-init");
          0 < f.length && d.next(f);
        }
      });
    }).h(Se(1), Lf(1), vf()) : Je(new Ka(1));
  }
  function Qk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return je(a.sort(function (b, c) {
      return b.time - c.time;
    }));
  }
  function Mk(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    return new K(function (g) {
      function h() {
        w || (w = cc11001100_hook("w", !0, "assign"), void 0 !== f.j && b.unobserve(f.j), l.unsubscribe(), n.unsubscribe(), t.unsubscribe(), A.unsubscribe());
      }
      if (void 0 !== f.j) {
        b.observe(f.j);
        var k = cc11001100_hook("k", new Jf({
            timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init"),
            value: cc11001100_hook("value", Object.assign({}, wi, {
              S: cc11001100_hook("S", "nio", "object-key-init"),
              L: cc11001100_hook("L", "nio", "object-key-init")
            }), "object-key-init")
          }), "var-init"),
          l = cc11001100_hook("l", d.h(ve(function (y) {
            return Qk(y);
          }), U(function (y) {
            return y.target === f.j;
          }), R(function (y) {
            return {
              timestamp: cc11001100_hook("timestamp", new Xa(y.time, Ua), "object-key-init"),
              value: {
                S: cc11001100_hook("S", "nio", "object-key-init"),
                W: cc11001100_hook("W", y.rootBounds || ci, "object-key-init"),
                K: cc11001100_hook("K", y.rootBounds || Dk(a, !0), "object-key-init"),
                P: cc11001100_hook("P", p, "object-key-init"),
                L: cc11001100_hook("L", "nio", "object-key-init"),
                N: cc11001100_hook("N", y.intersectionRect, "object-key-init"),
                D: cc11001100_hook("D", y.boundingClientRect, "object-key-init"),
                X: {
                  x: cc11001100_hook("x", 0, "object-key-init"),
                  y: cc11001100_hook("y", 0, "object-key-init")
                }
              }
            };
          }), Ef(k), vf()).subscribe(g), "var-init"),
          p = cc11001100_hook("p", new V(), "var-init"),
          t = cc11001100_hook("t", p.subscribe(function () {
            e();
            g.next({
              timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init"),
              value: cc11001100_hook("value", k.value.value, "object-key-init")
            });
            void 0 !== f.j && (b.unobserve(f.j), b.observe(f.j));
          }), "var-init"),
          n = cc11001100_hook("n", Pk(c, f).subscribe(function () {
            p.next();
          }), "var-init"),
          w = cc11001100_hook("w", !1, "var-init"),
          A = cc11001100_hook("A", f.released.subscribe(function () {
            return h();
          }), "var-init");
        return h;
      }
    });
  }
  ;
  var Rk = function (a, b, c) {
    c = cc11001100_hook("c", void 0 === c ? Kk(a, b) : c, "assign");
    this.context = cc11001100_hook("this.context", a, "assign");
    this.sg = cc11001100_hook("this.sg", c, "assign");
  };
  v(Rk, Lj);
  Rk.prototype.Ka = cc11001100_hook("Rk.prototype.Ka", function (a, b) {
    return {
      La: cc11001100_hook("La", bk(a.Ca.h(this.sg, Ok(this.context)), b.Ma, 0), "object-key-init"),
      Ia: {}
    };
  }, "assign");
  function Sk(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", void 0 === f ? new sj(a) : f, "var-init");
    var g = cc11001100_hook("g", void 0 === g ? gh(a.l, 500) : g, "var-init");
    var h = cc11001100_hook("h", void 0 === h ? gh(a.l, 100) : h, "var-init");
    e = cc11001100_hook("e", Q(f).h(Tk(c), lg(function (k) {
      d.next(k.fb);
    }), Uk(a, h), Vk(a), Wk(a, e), Lf(1), vf()), "assign");
    f = cc11001100_hook("f", new V(), "assign");
    b = cc11001100_hook("b", uf(Q({}), b, f), "assign");
    return e.h(Xk(a, f, b, g, c), Y(a.i, 1));
  }
  function Wk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return J(function (c) {
      return P([c, b]);
    }, De(function (c) {
      c = cc11001100_hook("c", r(c), "assign");
      var d = cc11001100_hook("d", c.next().value, "var-init");
      return 9 !== c.next().value || tj(d) ? Q(!0) : Yk(a, d, "viewableChange").h(U(function (e) {
        return r(e).next().value;
      }), Se(1));
    }), R(function (c) {
      return r(c).next().value;
    }));
  }
  function Tk(a) {
    cc11001100_hook("a", a, "function-parameter");
    return X(function (b) {
      if (-1 === b.fb) return a.next("if"), Je(new Ka(7));
      if (0 !== b.oc) switch (b.oc) {
        case 1:
          return a.next("mm"), Je(new Ka(18));
        case 2:
          return a.next("ng"), Je(new Ka(17));
        default:
          return a.next("i"), Je(new Ka(8));
      }
      return Q(b);
    });
  }
  function Uk(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return De(function () {
      var c = cc11001100_hook("c", a.af, "var-init");
      return "complete" === Zk(a.document) ? Q(!0) : c.h(De(function () {
        return b;
      }));
    });
  }
  var Vk = function (a) {
    return X(function (b) {
      return "loading" !== b.getState() ? Q(b) : Yk(a, b, "ready").h(R(function () {
        return b;
      }));
    });
  };
  function Xk(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return X(function (f) {
      var g = cc11001100_hook("g", uj(f), "var-init");
      if ("string" !== typeof g) return e.next("nc"), Je(new Ka(9));
      void 0 !== f.xe && (f.xe = cc11001100_hook("f.xe", !0, "assign"));
      g = cc11001100_hook("g", Yk(a, f, g, $k), "assign");
      var h = cc11001100_hook("h", {
        version: cc11001100_hook("version", f.De(), "object-key-init"),
        fb: cc11001100_hook("fb", f.fb, "object-key-init")
      }, "var-init");
      g = cc11001100_hook("g", g.h(R(function (l) {
        return al.apply(null, [a, b, f, h].concat(u(l)));
      })), "assign");
      var k = cc11001100_hook("k", d.h(lg(function () {
        e.next("mt");
      }), X(function () {
        return Je(new Ka(10));
      })), "var-init");
      g = cc11001100_hook("g", Mf(g, k), "assign");
      return P([g, c]).h(R(function (l) {
        l = cc11001100_hook("l", r(l).next().value, "assign");
        return Object.assign({}, l, {
          timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init")
        });
      }));
    });
  }
  function $k(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return (null === b || "number" === typeof b) && (null === a || !!a && "number" === typeof a.height && "number" === typeof a.width && "number" === typeof a.x && "number" === typeof a.y);
  }
  function al(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    e = cc11001100_hook("e", e ? {
      left: cc11001100_hook("left", e.x, "object-key-init"),
      top: cc11001100_hook("top", e.y, "object-key-init"),
      width: cc11001100_hook("width", e.width, "object-key-init"),
      height: cc11001100_hook("height", e.height, "object-key-init")
    } : ci, "assign");
    c = cc11001100_hook("c", c.ub("getMaxSize"), "assign");
    var g = cc11001100_hook("g", null != c && "number" === typeof c.width && "number" === typeof c.height ? c : {
      width: cc11001100_hook("width", 0, "object-key-init"),
      height: cc11001100_hook("height", 0, "object-key-init")
    }, "var-init");
    c = cc11001100_hook("c", {
      left: cc11001100_hook("left", 0, "object-key-init"),
      top: cc11001100_hook("top", 0, "object-key-init"),
      width: cc11001100_hook("width", -1, "object-key-init"),
      height: cc11001100_hook("height", -1, "object-key-init")
    }, "assign");
    if (g) {
      var h = cc11001100_hook("h", Number(String(g.width)), "var-init");
      g = cc11001100_hook("g", Number(String(g.height)), "assign");
      c = cc11001100_hook("c", isNaN(h) || isNaN(g) ? c : {
        left: cc11001100_hook("left", 0, "object-key-init"),
        top: cc11001100_hook("top", 0, "object-key-init"),
        width: cc11001100_hook("width", h, "object-key-init"),
        height: cc11001100_hook("height", g, "object-key-init")
      }, "assign");
    }
    a = cc11001100_hook("a", {
      value: {
        W: cc11001100_hook("W", e, "object-key-init"),
        K: cc11001100_hook("K", c, "object-key-init"),
        S: cc11001100_hook("S", "mraid", "object-key-init"),
        P: cc11001100_hook("P", b, "object-key-init"),
        X: {
          x: cc11001100_hook("x", 0, "object-key-init"),
          y: cc11001100_hook("y", 0, "object-key-init")
        }
      },
      timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init")
    }, "assign");
    return Object.assign({}, a, d, {
      Kh: cc11001100_hook("Kh", f, "object-key-init")
    });
  }
  function Yk(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    d = cc11001100_hook("d", void 0 === d ? function () {
      return !0;
    } : d, "assign");
    return new K(function (e) {
      var f = cc11001100_hook("f", a.s.Ga(745, function () {
        e.next(x.apply(0, arguments));
      }), "var-init");
      b.addEventListener(c, f);
      return function () {
        b.removeEventListener(c, f);
      };
    }).h(U(function (e) {
      return d.apply(null, u(e));
    }));
  }
  ;
  var bl = function (a, b) {
    this.context = cc11001100_hook("this.context", a, "assign");
    this.na = cc11001100_hook("this.na", b, "assign");
  };
  v(bl, Lj);
  bl.prototype.Ka = cc11001100_hook("bl.prototype.Ka", function (a, b) {
    var c = cc11001100_hook("c", new Kf(1), "var-init"),
      d = cc11001100_hook("d", new Kf(1), "var-init"),
      e = cc11001100_hook("e", ck(Sk(this.context, this.na, c, d, b.Fa), Yj(this.context, b.Fa)), "var-init");
    return {
      La: cc11001100_hook("La", bk(a.Ca.h(e), b.Ma, 1), "object-key-init"),
      Ia: {
        Md: cc11001100_hook("Md", c.h(Y(this.context.i, 1)), "object-key-init"),
        Nd: cc11001100_hook("Nd", d.h(Y(this.context.i, 1)), "object-key-init")
      }
    };
  }, "assign");
  function cl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a);
  }
  ;
  function dl() {
    var a = cc11001100_hook("a", Error, "var-init");
    return id(function (b) {
      return b instanceof a;
    }, function () {
      return hd(a);
    });
  }
  ;
  function el(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", void 0 === c ? null : c, "var-init");
    var d = cc11001100_hook("d", new V(), "var-init"),
      e = cc11001100_hook("e", void 0, "var-init"),
      f = cc11001100_hook("f", a.Ce, "var-init"),
      g = cc11001100_hook("g", d.h(R(function () {
        return e ? Object.assign({}, e, {
          timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init")
        }) : null;
      }), U(function (k) {
        return null !== k;
      }), R(function (k) {
        return k;
      })), "var-init");
    b = cc11001100_hook("b", P([uf(f, g), b]), "assign");
    var h = cc11001100_hook("h", c, "var-init");
    return b.h(U(function (k) {
      k = cc11001100_hook("k", r(k).next().value, "assign");
      null === h && (h = cc11001100_hook("h", k.value.Cf, "assign"));
      return k.value.Cf === h;
    }), lg(function (k) {
      return void (e = cc11001100_hook("e", r(k).next().value, "assign"));
    }), R(function (k) {
      var l = cc11001100_hook("l", r(k), "var-init");
      k = cc11001100_hook("k", l.next().value, "assign");
      l = cc11001100_hook("l", l.next().value, "assign");
      try {
        var p = cc11001100_hook("p", k.value.data, "var-init"),
          t = cc11001100_hook("t", k.timestamp, "var-init"),
          n = cc11001100_hook("n", p.viewport, "var-init"),
          w,
          A,
          y = cc11001100_hook("y", Object.assign({}, n, {
            width: cc11001100_hook("width", null != (w = cc11001100_hook("w", null == n ? void 0 : n.width, "assign")) ? w : 0, "object-key-init"),
            height: cc11001100_hook("height", null != (A = cc11001100_hook("A", null == n ? void 0 : n.height, "assign")) ? A : 0, "object-key-init"),
            x: cc11001100_hook("x", 0, "object-key-init"),
            y: cc11001100_hook("y", 0, "object-key-init"),
            Xh: cc11001100_hook("Xh", n ? n.width * n.height : 0, "object-key-init")
          }), "var-init"),
          C = cc11001100_hook("C", fl(y), "var-init"),
          G = cc11001100_hook("G", p.adView, "var-init"),
          N = cc11001100_hook("N", G.measuringElement && G.containerGeometry ? fl(G.containerGeometry) : fl(G.geometry), "var-init"),
          ta = cc11001100_hook("ta", fl(G.geometry), "var-init"),
          B = cc11001100_hook("B", G.reasons.some(cl), "var-init"),
          z = cc11001100_hook("z", B ? ci : fl(G.onScreenGeometry), "var-init"),
          T;
        l && (T = cc11001100_hook("T", G.percentageInView / 100, "assign"));
        l && B && (T = cc11001100_hook("T", 0, "assign"));
        return {
          timestamp: cc11001100_hook("timestamp", t, "object-key-init"),
          value: {
            S: cc11001100_hook("S", "omid", "object-key-init"),
            W: cc11001100_hook("W", N, "object-key-init"),
            K: cc11001100_hook("K", C, "object-key-init"),
            P: cc11001100_hook("P", d, "object-key-init"),
            L: cc11001100_hook("L", "omid", "object-key-init"),
            D: cc11001100_hook("D", ta, "object-key-init"),
            X: {
              x: cc11001100_hook("x", N.left, "object-key-init"),
              y: cc11001100_hook("y", N.top, "object-key-init")
            },
            N: cc11001100_hook("N", z, "object-key-init"),
            sc: cc11001100_hook("sc", T, "object-key-init")
          }
        };
      } catch (na) {
        A = cc11001100_hook("A", na, "assign");
        p = cc11001100_hook("p", dl(), "assign");
        t = cc11001100_hook("t", jd, "assign");
        jd = cc11001100_hook("jd", void 0, "assign");
        n = cc11001100_hook("n", [], "assign");
        w = cc11001100_hook("w", p(A, n), "assign");
        !w && n && (A = cc11001100_hook("A", "Expected " + p.Ee() + ", got " + gd(A), "assign"), n.push(A));
        if (!w) {
          var Wa = cc11001100_hook("Wa", "", "var-init");
          t && (Wa = cc11001100_hook("Wa", t() + "\n", "assign"));
          throw Error("z`" + Wa + "`" + p.Ee() + "`" + n.reverse().join("\n"));
        }
        var Sc;
        p = cc11001100_hook("p", null != (Sc = cc11001100_hook("Sc", null == (Wa = cc11001100_hook("Wa", na, "assign")) ? void 0 : Wa.message, "assign")) ? Sc : "An unknown error occurred", "assign");
        Wa = cc11001100_hook("Wa", "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + p, "assign");
        throw Error(Wa);
      }
    }), Lf(1), vf());
  }
  function fl(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b, c, d, e;
    return {
      left: cc11001100_hook("left", Math.floor(null != (b = cc11001100_hook("b", null == a ? void 0 : a.x, "assign")) ? b : 0), "object-key-init"),
      top: cc11001100_hook("top", Math.floor(null != (c = cc11001100_hook("c", null == a ? void 0 : a.y, "assign")) ? c : 0), "object-key-init"),
      width: cc11001100_hook("width", Math.floor(null != (d = cc11001100_hook("d", null == a ? void 0 : a.width, "assign")) ? d : 0), "object-key-init"),
      height: cc11001100_hook("height", Math.floor(null != (e = cc11001100_hook("e", null == a ? void 0 : a.height, "assign")) ? e : 0), "object-key-init")
    };
  }
  ;
  function gl(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    c = cc11001100_hook("c", void 0 === c ? zg : c, "assign");
    var e = cc11001100_hook("e", a.i, "var-init");
    if (null === b) return Je(new Ka(20));
    if (!b.validate()) return Je(new Ka(21));
    var f;
    d = cc11001100_hook("d", hl(e, b, d).h(R(function (g) {
      var h = cc11001100_hook("h", g.value, "var-init");
      g = cc11001100_hook("g", g.timestamp, "assign");
      var k = cc11001100_hook("k", b.l, "var-init"),
        l = cc11001100_hook("l", a.l, "var-init");
      if (k.timeline !== g.timeline) throw new Pa();
      g = cc11001100_hook("g", new Xa(g.value - k.now().value + l.now().value, l.timeline), "assign");
      return f = cc11001100_hook("f", {
        value: cc11001100_hook("value", h, "object-key-init"),
        timestamp: cc11001100_hook("timestamp", g, "object-key-init")
      }, "assign");
    })), "assign");
    return uf(d, c.h(R(function () {
      return f;
    }))).h(U(function (g) {
      return void 0 !== g;
    }), R(function (g) {
      return g;
    }), Y(a.i, 1));
  }
  function hl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return el(b, c).h(Y(a, 1), R(function (d) {
      return {
        timestamp: cc11001100_hook("timestamp", d.timestamp, "object-key-init"),
        value: {
          X: {
            x: cc11001100_hook("x", d.value.D.left, "object-key-init"),
            y: cc11001100_hook("y", d.value.D.top, "object-key-init")
          },
          W: cc11001100_hook("W", d.value.N, "object-key-init"),
          K: cc11001100_hook("K", d.value.K, "object-key-init"),
          S: cc11001100_hook("S", d.value.L, "object-key-init"),
          P: cc11001100_hook("P", d.value.P, "object-key-init")
        }
      };
    }));
  }
  ;
  var il = function (a, b, c) {
    this.ab = cc11001100_hook("this.ab", a, "assign");
    this.Zb = cc11001100_hook("this.Zb", b, "assign");
    this.na = cc11001100_hook("this.na", c, "assign");
  };
  v(il, Lj);
  il.prototype.Ka = cc11001100_hook("il.prototype.Ka", function (a, b) {
    var c = cc11001100_hook("c", b.Fa, "var-init");
    b = cc11001100_hook("b", gl(this.Zb, this.ab, this.na, b.Ze), "assign");
    c = cc11001100_hook("c", ck(b, Yj(this.Zb, c)), "assign");
    return {
      La: cc11001100_hook("La", a.Ca.h(c), "object-key-init"),
      Ia: {}
    };
  }, "assign");
  var jl = function (a, b, c) {
    this.ab = cc11001100_hook("this.ab", a, "assign");
    this.Zb = cc11001100_hook("this.Zb", b, "assign");
    this.Zf = cc11001100_hook("this.Zf", c, "assign");
  };
  v(jl, Lj);
  jl.prototype.Ka = cc11001100_hook("jl.prototype.Ka", function (a, b) {
    b = cc11001100_hook("b", gl(this.Zb, this.ab, void 0, b.Ze), "assign");
    var c = cc11001100_hook("c", Nk(this.Zb, this.Zf), "var-init");
    b = cc11001100_hook("b", ck(b, c), "assign");
    return {
      La: cc11001100_hook("La", a.Ca.h(b), "object-key-init"),
      Ia: {}
    };
  }, "assign");
  function kl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.document.Sg.h(R(function (b) {
      return "visible" === b;
    }), S(), Y(a.i, 1));
  }
  ;
  var ll;
  ll = cc11001100_hook("ll", ["av.key", "js", "20230322"].slice(-1)[0], "assign");
  function ml(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d;
    return b.h(S(), X(function (e) {
      return c.h(R(function () {
        if (!d) {
          d = cc11001100_hook("d", !0, "assign");
          try {
            e.next();
          } finally {
            d = cc11001100_hook("d", !1, "assign");
          }
        }
        return !0;
      }));
    }), W(!1), Y(a.i, 1));
  }
  ;
  function nl(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.ya && (a.bb = cc11001100_hook("a.bb", a.ya, "assign"));
    a.ya = cc11001100_hook("a.ya", b, "assign");
    a.bb && a.bb.value ? (b = cc11001100_hook("b", Math.max(0, Ya(b.timestamp, a.bb.timestamp)), "assign"), a.totalTime += cc11001100_hook("a.totalTime", b, "assign"), a.ga += cc11001100_hook("a.ga", b, "assign")) : a.ga = cc11001100_hook("a.ga", 0, "assign");
    return a;
  }
  function ol() {
    return J(rf(nl, {
      totalTime: cc11001100_hook("totalTime", 0, "object-key-init"),
      ga: cc11001100_hook("ga", 0, "object-key-init")
    }), R(function (a) {
      return a.totalTime;
    }));
  }
  function pl() {
    return J(rf(nl, {
      totalTime: cc11001100_hook("totalTime", 0, "object-key-init"),
      ga: cc11001100_hook("ga", 0, "object-key-init")
    }), R(function (a) {
      return a.ga;
    }));
  }
  ;
  function ql() {
    var a;
    return J(lg(function (b) {
      return void (a = cc11001100_hook("a", b.timestamp, "assign"));
    }), pl(), R(function (b) {
      return {
        timestamp: cc11001100_hook("timestamp", a, "object-key-init"),
        value: cc11001100_hook("value", Math.round(b), "object-key-init")
      };
    }));
  }
  ;
  function rl() {
    return J(pl(), rf(function (a, b) {
      return Math.max(a, b);
    }, 0), R(function (a) {
      return Math.round(a);
    }));
  }
  ;
  function sl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return J(Di(Q(a)), rl());
  }
  ;
  function tl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return J(yi(R(function (b) {
      return Ci(b, a);
    })), ol(), R(function (b) {
      return Math.round(b);
    }));
  }
  ;
  function ul(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", bj, "var-init");
    if (1 < f.length) for (var g = cc11001100_hook("g", 0, "var-init"); g < f.length - 1; g++) if (f[g] < f[g + 1]) throw Error();
    g = cc11001100_hook("g", e.h(W(void 0), X(function () {
      return c.h(ql());
    }), S(), Y(a, 1)), "assign");
    e = cc11001100_hook("e", e.h(W(void 0), X(function () {
      return c.h(rl());
    }), S(), Y(a, 1)), "assign");
    return {
      Nb: cc11001100_hook("Nb", d.h(W(void 0), X(function () {
        return b.h(Ri(sl, f));
      }), S(Mb), Y(a, 1)), "object-key-init"),
      Xb: cc11001100_hook("Xb", d.h(W(void 0), X(function () {
        return b.h(Ri(tl, f), R(function (h) {
          return h.map(function (k, l) {
            return 0 < l ? k - h[l - 1] : k;
          });
        }));
      }), S(Mb), Y(a, 1)), "object-key-init"),
      Mb: cc11001100_hook("Mb", e, "object-key-init"),
      Ua: cc11001100_hook("Ua", g.h(S(Wh), Y(a, 1)), "object-key-init")
    };
  }
  ;
  var wl = function (a, b) {
      var c = cc11001100_hook("c", this, "var-init");
      this.l = cc11001100_hook("this.l", a, "assign");
      this.Kd = cc11001100_hook("this.Kd", this.Fc = cc11001100_hook("this.Fc", null, "assign"), "assign");
      this.Zg = cc11001100_hook("this.Zg", b.h(S()).subscribe(function (d) {
        vl(c);
        c.Kd = cc11001100_hook("c.Kd", d, "assign");
      }), "assign");
    },
    xl = function (a, b) {
      vl(a);
      a.Fc = cc11001100_hook("a.Fc", a.l.setTimeout(function () {
        var c;
        return void (null == (c = cc11001100_hook("c", a.Kd, "assign")) ? void 0 : c.next());
      }, b), "assign");
    },
    vl = function (a) {
      null !== a.Fc && a.l.clearTimeout(a.Fc);
      a.Fc = cc11001100_hook("a.Fc", null, "assign");
    };
  wl.prototype.lb = cc11001100_hook("wl.prototype.lb", function () {
    vl(this);
    this.Zg.unsubscribe();
    this.Kd = cc11001100_hook("this.Kd", null, "assign");
  }, "assign");
  function yl(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", gj.nf, "var-init");
    var g = cc11001100_hook("g", void 0 === g ? new wl(b, d) : g, "var-init");
    return new K(function (h) {
      var k = cc11001100_hook("k", c.h(W(void 0), X(function () {
        return zl(e);
      })).h(R(function (l) {
        var p = cc11001100_hook("p", l.value, "var-init");
        l = cc11001100_hook("l", l.timestamp, "assign");
        var t = cc11001100_hook("t", p.visible, "var-init");
        p = cc11001100_hook("p", p.Ua, "assign");
        var n = cc11001100_hook("n", p >= f, "var-init");
        n || !t ? vl(g) : (l = cc11001100_hook("l", Math.max(0, Ya(b.now(), l)), "assign"), xl(g, Math.max(0, f - p - l)));
        return n;
      }), rf(function (l, p) {
        return p || l;
      }, !1), S()).subscribe(h), "var-init");
      return function () {
        g.lb();
        k.unsubscribe();
      };
    }).h(hg(function (h) {
      return !h;
    }, !0), Y(a, 1));
  }
  function zl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Qi([a, a.h(ql())]).h(R(function (b) {
      var c = cc11001100_hook("c", r(b), "var-init");
      b = cc11001100_hook("b", c.next().value, "assign");
      c = cc11001100_hook("c", c.next().value, "assign");
      return {
        timestamp: cc11001100_hook("timestamp", b.timestamp, "object-key-init"),
        value: {
          visible: cc11001100_hook("visible", b.value, "object-key-init"),
          Ua: cc11001100_hook("Ua", c.value, "object-key-init")
        }
      };
    }), S(function (b, c) {
      return Wh(b, c, function (d, e) {
        return d.Ua === e.Ua && d.visible === e.visible;
      });
    }));
  }
  ;
  function Al(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", c.h(R(function (e) {
      return {
        value: cc11001100_hook("value", e, "object-key-init"),
        timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init")
      };
    }), S(Wh)), "var-init");
    return b instanceof K ? b.h(S(), X(function (e) {
      return e ? new Z({
        value: cc11001100_hook("value", !1, "object-key-init"),
        timestamp: cc11001100_hook("timestamp", a.l.now(), "object-key-init")
      }).V(a.i) : d;
    })) : !1 === b.value ? d : new Z(!1);
  }
  function Bl(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g = cc11001100_hook("g", gj, "var-init");
    b = cc11001100_hook("b", b instanceof K ? b.h(W(!1), S()) : b, "assign");
    var h = cc11001100_hook("h", !(jk() || kk()), "var-init");
    c = cc11001100_hook("c", Al(a, c, d), "assign");
    a = cc11001100_hook("a", f.Ca.h(hi(a.i)), "assign");
    return Object.assign({}, g, {
      vc: cc11001100_hook("vc", c, "object-key-init"),
      rf: cc11001100_hook("rf", e, "object-key-init"),
      ne: cc11001100_hook("ne", h, "object-key-init"),
      We: cc11001100_hook("We", b, "object-key-init"),
      yc: cc11001100_hook("yc", a, "object-key-init")
    });
  }
  ;
  function Cl() {
    var a = cc11001100_hook("a", ub(), "var-init");
    return a ? Jb("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function (b) {
      return lb(a, b);
    }) || lb(a, "OMI/") && !lb(a, "XiaoMi/") ? !0 : lb(a, "Presto") && lb(a, "Linux") && !lb(a, "X11") && !lb(a, "Android") && !lb(a, "Mobi") : !1;
  }
  ;
  function Dl() {
    var a = cc11001100_hook("a", void 0 === a ? Da : a, "var-init");
    return (a = cc11001100_hook("a", a.performance, "assign")) && a.now ? a.now() : null;
  }
  ;
  var gj = cc11001100_hook("gj", Object.freeze({
      nf: cc11001100_hook("nf", 1E3, "object-key-init"),
      td: cc11001100_hook("td", .5, "object-key-init"),
      Jd: cc11001100_hook("Jd", .3, "object-key-init")
    }), "var-init"),
    bj = cc11001100_hook("bj", Object.freeze([1, .75, gj.td, gj.Jd, 0]), "var-init"),
    Hh = cc11001100_hook("Hh", "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=" + ll, "var-init");
  function El(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      sd: cc11001100_hook("sd", .01, "object-key-init"),
      Ld: cc11001100_hook("Ld", gh(a.l, 36E5), "object-key-init"),
      na: cc11001100_hook("na", a.l.Na(100).h(Y(a.i, 1)), "object-key-init"),
      ab: cc11001100_hook("ab", b, "object-key-init")
    };
  }
  var Fl = function (a, b) {
    var c = cc11001100_hook("c", Symbol(), "var-init"),
      d = cc11001100_hook("d", Symbol(), "var-init"),
      e = cc11001100_hook("e", Symbol(), "var-init"),
      f = cc11001100_hook("f", Symbol(), "var-init"),
      g = cc11001100_hook("g", this, "var-init");
    this.Vg = cc11001100_hook("this.Vg", a, "assign");
    this.Gc = cc11001100_hook("this.Gc", b, "assign");
    this.Ke = cc11001100_hook("this.Ke", c, "assign");
    this.Cb = cc11001100_hook("this.Cb", d, "assign");
    this.hc = cc11001100_hook("this.hc", e, "assign");
    this.ic = cc11001100_hook("this.ic", f, "assign");
    this.Xe = cc11001100_hook("this.Xe", new Kf(), "assign");
    this.Bg = cc11001100_hook("this.Bg", new K(function (h) {
      var k = cc11001100_hook("k", g.Xe.subscribe(h), "var-init");
      return function () {
        k.unsubscribe();
        g.lb();
      };
    }), "assign");
    this.Mf = cc11001100_hook("this.Mf", [], "assign");
    this.md = cc11001100_hook("this.md", new Kf(), "assign");
    this.Mf.push(this.Ke, this.Cb, this.hc, this.ic);
  };
  Fl.prototype.start = cc11001100_hook("Fl.prototype.start", function (a) {
    void 0 === this.Ad && (this.Ad = cc11001100_hook("this.Ad", Gl(a, this.md.h(Y(a.i, 1)), this.Gc.sd, this.Gc.Ld, this.Gc.na, this.Gc.ab, this.Ke, this.Cb, this.hc, this.ic).subscribe(this.Xe), "assign"));
  }, "assign");
  Fl.prototype.lb = cc11001100_hook("Fl.prototype.lb", function () {
    this.md.complete();
    var a;
    null == (a = cc11001100_hook("a", this.Ad, "assign")) || a.unsubscribe();
    this.Ad = cc11001100_hook("this.Ad", void 0, "assign");
  }, "assign");
  Fl.prototype.handleEvent = cc11001100_hook("Fl.prototype.handleEvent", function () {}, "assign");
  function Gl(a, b, c, d, e, f, g, h, k, l) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    cc11001100_hook("k", k, "function-parameter");
    cc11001100_hook("l", l, "function-parameter");
    var p = cc11001100_hook("p", kl(a).h(R(function (n) {
        return !n;
      })), "var-init"),
      t = cc11001100_hook("t", new Mj(a, [new Rk(a, bj), new Fk(a, e), new ik(a, e), new jl(f, a, bj), new il(f, a, e), new bl(a, e)]), "var-init");
    return wh(a, b, function (n, w) {
      var A = cc11001100_hook("A", wj(n, w.element), "var-init"),
        y = cc11001100_hook("y", A.ed, "var-init"),
        C = cc11001100_hook("C", A.kc, "var-init"),
        G = cc11001100_hook("G", A.kd, "var-init"),
        N = cc11001100_hook("N", A.Qf, "var-init"),
        ta = cc11001100_hook("ta", A.Ma, "var-init"),
        B = cc11001100_hook("B", A.ug, "var-init"),
        z = cc11001100_hook("z", A.Ed, "var-init"),
        T = cc11001100_hook("T", A.Fd, "var-init"),
        Wa = cc11001100_hook("Wa", A.Fa, "var-init"),
        Sc = cc11001100_hook("Sc", A.Ha, "var-init"),
        na = cc11001100_hook("na", A.vh, "var-init"),
        vi = cc11001100_hook("vi", A.Ya, "var-init");
      A = cc11001100_hook("A", A.Id, "assign");
      var Gb = cc11001100_hook("Gb", new Z(w.Yf).V(n.i), "var-init"),
        ob = cc11001100_hook("ob", Gb.h(R(function (F) {
          return F.ih;
        })), "var-init"),
        Ma = cc11001100_hook("Ma", ta.h(se(B), R(function (F) {
          var Fa = cc11001100_hook("Fa", r(F), "var-init");
          F = cc11001100_hook("F", Fa.next().value, "assign");
          Fa = cc11001100_hook("Fa", Fa.next().value, "assign");
          (F = cc11001100_hook("F", F || Fa, "assign")) || ((F = cc11001100_hook("F", lb(ub(), "CrKey") || lb(ub(), "PlayStation") || lb(ub(), "Roku") || Cl() || lb(ub(), "Xbox"), "assign")) || (F = cc11001100_hook("F", ub(), "assign"), F = cc11001100_hook("F", lb(F, "AppleTV") || lb(F, "Apple TV") || lb(F, "CFNetwork") || lb(F, "tvOS"), "assign")), F || (F = cc11001100_hook("F", ub(), "assign"), F = cc11001100_hook("F", lb(F, "sdk_google_atv_x86") || lb(F, "Android TV"), "assign")));
          return F;
        })), "var-init");
      B = cc11001100_hook("B", new Jj(n, w, N, ta, Wa, ob), "assign");
      ob = cc11001100_hook("ob", Gb.h(R(function (F) {
        return F.Kf;
      })), "assign");
      ob = cc11001100_hook("ob", t.Ka(B, {
        Ma: cc11001100_hook("Ma", ta, "object-key-init"),
        Fa: cc11001100_hook("Fa", Wa, "object-key-init"),
        Ze: cc11001100_hook("Ze", ob, "object-key-init")
      }), "assign");
      var ra = cc11001100_hook("ra", ob.La, "var-init"),
        Tc = cc11001100_hook("Tc", ob.Ia, "var-init");
      ob = cc11001100_hook("ob", Tc.Md, "assign");
      var vm = cc11001100_hook("vm", Tc.Nd, "var-init");
      Tc = cc11001100_hook("Tc", Tc.Wd, "assign");
      var pb = cc11001100_hook("pb", Bl(n, T, Ma, p, na, B), "var-init");
      na = cc11001100_hook("na", hj(n.i, n.l, ra, pb), "assign");
      Ma = cc11001100_hook("Ma", ul(n.i, na.Aa.Yd, na.Aa.visible, na.Vd, na.Ub), "assign");
      var Uc = cc11001100_hook("Uc", yl(n.i, n.l, na.Ub, na.Aa.P, na.Aa.visible), "var-init");
      ra = cc11001100_hook("ra", Li(n.i, n.l, ra, pb), "assign");
      pb = cc11001100_hook("pb", aj(n.l, n.i, ra.Aa.Yd, ra.Aa.visible, ra.Vd, ra.Ub), "assign");
      var zf = cc11001100_hook("zf", {
          ce: cc11001100_hook("ce", fj(n.i, n.l, ra.Ub, pb.Mb), "object-key-init")
        }, "var-init"),
        Af = cc11001100_hook("Af", Gb.h(R(function (F) {
          return F.dg;
        }), W(!1)), "var-init");
      na = cc11001100_hook("na", gi(n.i, Af, Object.assign({}, ra.Aa, pb, zf), Object.assign({}, na.Aa, {
        ce: cc11001100_hook("ce", si(n, Uc), "object-key-init"),
        Nb: cc11001100_hook("Nb", si(n, Ma.Nb), "object-key-init"),
        Xb: cc11001100_hook("Xb", si(n, Ma.Xb), "object-key-init"),
        Mb: cc11001100_hook("Mb", si(n, Ma.Mb), "object-key-init"),
        Ua: cc11001100_hook("Ua", Ma.Ua.h(R(function (F) {
          return new bi(n.l, F);
        })), "object-key-init")
      })), "assign");
      ra = cc11001100_hook("ra", ri(n, d.h(of("t"))), "assign");
      Ma = cc11001100_hook("Ma", null !== f && f.validate(), "assign");
      Uc = cc11001100_hook("Uc", (Ma ? f.fh : zg).h(Y(n.i, 1), of("u")), "assign");
      ra = cc11001100_hook("ra", Mf(ra, Uc), "assign");
      Ma = cc11001100_hook("Ma", (Ma ? f.Le.h(Se(1), of(!0), W(!1)) : new Z(!0).V(n.i)).h(X(function (F) {
        return F ? new K(function (Fa) {
          w.Wa(g, {}, function (wm) {
            Fa.next(wm);
            Fa.complete();
          });
        }) : zg;
      }), W(!1), Y(n.i, 1)), "assign");
      Uc = cc11001100_hook("Uc", ml(n, na.P, ra.h(U(function (F) {
        return null !== F;
      }))), "assign");
      pb = cc11001100_hook("pb", Hl(n, B, y), "assign");
      zf = cc11001100_hook("zf", Il(n, ra, w.element), "assign");
      Af = cc11001100_hook("Af", pb.Df.h(W({
        x: cc11001100_hook("x", 0, "object-key-init"),
        y: cc11001100_hook("y", 0, "object-key-init")
      })), "assign");
      var zm = cc11001100_hook("zm", Gb.h(R(function (F) {
        return F.dh;
      }), W(!1), S(), lg(function (F) {
        lh = cc11001100_hook("lh", F, "assign");
      }), Y(n.i, 1)), "var-init");
      return Object.assign({}, {
        H: cc11001100_hook("H", new Z(n.H), "object-key-init"),
        Ac: cc11001100_hook("Ac", new Z("lidar2"), "object-key-init"),
        oh: cc11001100_hook("oh", new Z("lidartos"), "object-key-init"),
        Hf: cc11001100_hook("Hf", new Z(ll), "object-key-init"),
        Gf: cc11001100_hook("Gf", new Z(7), "object-key-init"),
        jd: cc11001100_hook("jd", new Z(n.validate() ? null : new La()), "object-key-init"),
        Lf: cc11001100_hook("Lf", new Z(Jl(n.document)), "object-key-init"),
        ua: cc11001100_hook("ua", new Z(Jh), "object-key-init"),
        qd: cc11001100_hook("qd", ra, "object-key-init"),
        Qc: cc11001100_hook("Qc", ra, "object-key-init"),
        Yh: cc11001100_hook("Yh", Uc, "object-key-init"),
        He: cc11001100_hook("He", Ma, "object-key-init"),
        Wa: cc11001100_hook("Wa", new Z(w.Wa), "object-key-init"),
        Cb: cc11001100_hook("Cb", new Z(h), "object-key-init"),
        hc: cc11001100_hook("hc", new Z(k), "object-key-init"),
        ic: cc11001100_hook("ic", new Z(l), "object-key-init"),
        Of: cc11001100_hook("Of", new Z(n.nb ? 1 : void 0), "object-key-init"),
        Rf: cc11001100_hook("Rf", new Z(n.Jf ? 1 : void 0), "object-key-init"),
        Ma: cc11001100_hook("Ma", ta, "object-key-init"),
        Ya: cc11001100_hook("Ya", vi, "object-key-init"),
        cb: cc11001100_hook("cb", vi.h(U(function (F) {
          return F;
        }), R(function () {
          return n.cb.bind(n);
        })), "object-key-init"),
        Md: cc11001100_hook("Md", ob.h(Y(n.i, 1)), "object-key-init"),
        Nd: cc11001100_hook("Nd", vm.h(Y(n.i, 1)), "object-key-init"),
        bg: cc11001100_hook("bg", Gb.h(R(function (F) {
          return F.cg;
        })), "object-key-init"),
        Me: cc11001100_hook("Me", zm, "object-key-init"),
        Id: cc11001100_hook("Id", A, "object-key-init"),
        ng: cc11001100_hook("ng", Gb.h(R(function (F) {
          return F.Pf;
        })), "object-key-init"),
        eg: cc11001100_hook("eg", new Z(new eh(n, new hh(n))), "object-key-init"),
        mf: cc11001100_hook("mf", new Z(lh && new mh(n).I({
          Bb: cc11001100_hook("Bb", "GET", "object-key-init")
        })), "object-key-init"),
        Nf: cc11001100_hook("Nf", w.element.h(R(function (F) {
          return null !== F;
        })), "object-key-init"),
        zc: cc11001100_hook("zc", Sc, "object-key-init"),
        ph: cc11001100_hook("ph", Sc, "object-key-init"),
        kd: cc11001100_hook("kd", G.h(W([])), "object-key-init"),
        kg: cc11001100_hook("kg", G.h(R(function (F) {
          return 0 < F.length ? !0 : null;
        }), W(null), S()), "object-key-init"),
        kc: cc11001100_hook("kc", C.h(W([]), Y(n.i, 1)), "object-key-init"),
        Vh: cc11001100_hook("Vh", Gb, "object-key-init"),
        ed: cc11001100_hook("ed", y, "object-key-init"),
        Eb: cc11001100_hook("Eb", B.Eb, "object-key-init"),
        Ed: cc11001100_hook("Ed", z.h(W(0), Y(n.i, 1)), "object-key-init"),
        Cg: cc11001100_hook("Cg", N, "object-key-init"),
        Fa: cc11001100_hook("Fa", Wa.h(W(0), Y(n.i, 1)), "object-key-init"),
        Yb: cc11001100_hook("Yb", new Z(Ih), "object-key-init"),
        Tc: cc11001100_hook("Tc", new Z(Th), "object-key-init"),
        Fd: cc11001100_hook("Fd", T, "object-key-init"),
        Pe: cc11001100_hook("Pe", B.Lb.h(hi(n.i)), "object-key-init"),
        de: cc11001100_hook("de", B.de, "object-key-init")
      }, na, {
        qc: cc11001100_hook("qc", P([na.qc, Af]).h(R(function (F) {
          var Fa = cc11001100_hook("Fa", r(F), "var-init");
          F = cc11001100_hook("F", Fa.next().value, "assign");
          Fa = cc11001100_hook("Fa", Fa.next().value, "assign");
          return fi(F, Fa);
        }), S(di)), "object-key-init")
      }, pb, {
        ae: cc11001100_hook("ae", ph(n), "object-key-init"),
        lg: cc11001100_hook("lg", zf, "object-key-init"),
        Wd: cc11001100_hook("Wd", Tc, "object-key-init")
      });
    }, Gh(a, c));
  }
  function Hl(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", void 0 === d ? Da : d, "var-init");
    var e, f;
    d = cc11001100_hook("d", (null == (e = cc11001100_hook("e", d.performance, "assign")) ? void 0 : null == (f = cc11001100_hook("f", e.timing, "assign")) ? void 0 : f.navigationStart) || 0, "assign");
    return Object.assign({}, {
      Bf: cc11001100_hook("Bf", new Z(d), "object-key-init"),
      Af: cc11001100_hook("Af", qi(a, b), "object-key-init")
    }, pi(a, b, c));
  }
  function Il(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b.h(U(function (d) {
      return null !== d;
    }), X(function () {
      return c;
    }), R(function (d) {
      var e = cc11001100_hook("e", Lg(a), "var-init");
      return 0 < e.length && 0 <= e.indexOf(d);
    }), R(function (d) {
      return !d;
    }));
  }
  ;
  var Kl = function () {
    this.pf = cc11001100_hook("this.pf", 0, "assign");
  };
  Kl.prototype.Ga = cc11001100_hook("Kl.prototype.Ga", function (a, b) {
    var c = cc11001100_hook("c", this, "var-init");
    return function () {
      var d = cc11001100_hook("d", x.apply(0, arguments), "var-init");
      c.pf = cc11001100_hook("c.pf", a, "assign");
      return b.apply(null, u(d));
    };
  }, "assign");
  var Ll = function () {
    this.s = cc11001100_hook("this.s", new Kl(), "assign");
    this.i = cc11001100_hook("this.i", new Eg(), "assign");
    this.id = cc11001100_hook("this.id", od(), "assign");
  };
  Ll.prototype.yd = cc11001100_hook("Ll.prototype.yd", function () {
    return zg;
  }, "assign");
  da.Object.defineProperties(Ll.prototype, {
    Dc: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.id;
      }
    }
  });
  var Ml = function (a) {
    var b = cc11001100_hook("b", x.apply(1, arguments), "var-init"),
      c = cc11001100_hook("c", this, "var-init");
    this.rb = cc11001100_hook("this.rb", [], "assign");
    this.rb.push(a);
    b.forEach(function (d) {
      c.rb.push(d);
    });
  };
  Ml.prototype.I = cc11001100_hook("Ml.prototype.I", function (a) {
    return this.rb.some(function (b) {
      return b.I(a);
    });
  }, "assign");
  Ml.prototype.O = cc11001100_hook("Ml.prototype.O", function (a, b) {
    for (var c = cc11001100_hook("c", 0, "var-init"); c < this.rb.length; c++) if (this.rb[c].I(b)) return this.rb[c].O(a, b);
    throw new Na();
  }, "assign");
  var Nl = function (a) {
    this.ma = cc11001100_hook("this.ma", a, "assign");
  };
  Nl.prototype.I = cc11001100_hook("Nl.prototype.I", function (a) {
    return (null == a ? 0 : a.jc) ? !0 : "POST" === (null == a ? void 0 : a.Bb) || (null == a ? 0 : a.kb) || (null == a ? 0 : a.od) ? !1 : this.ma.I();
  }, "assign");
  Nl.prototype.ping = cc11001100_hook("Nl.prototype.ping", function () {
    var a = cc11001100_hook("a", this, "var-init"),
      b = cc11001100_hook("b", Q.apply(null, u(x.apply(0, arguments))).h(ve(function (c) {
        return Ol(a, c);
      }), af(function (c) {
        return c;
      }), Lf(1)), "var-init");
    b.connect();
    return b;
  }, "assign");
  var Ol = function (a, b) {
    var c = cc11001100_hook("c", new Kf(1), "var-init");
    Pl(a.ma, b, function () {
      c.next(!0);
      c.complete();
    }, function () {
      c.next(!1);
      c.complete();
    });
    return c;
  };
  Nl.prototype.Kc = cc11001100_hook("Nl.prototype.Kc", function (a, b) {
    this.ping.apply(this, u(x.apply(2, arguments)));
  }, "assign");
  var Ql = function (a) {
    this.ma = cc11001100_hook("this.ma", a, "assign");
    this.timeline = cc11001100_hook("this.timeline", Va, "assign");
  };
  m = cc11001100_hook("m", Ql.prototype, "assign");
  m.setTimeout = cc11001100_hook("m.setTimeout", function (a, b) {
    return Number(this.ma.setTimeout(function () {
      return a();
    }, b));
  }, "assign");
  m.clearTimeout = cc11001100_hook("m.clearTimeout", function (a) {
    this.ma.clearTimeout(a);
  }, "assign");
  m.now = cc11001100_hook("m.now", function () {
    return new Xa(Date.now(), this.timeline);
  }, "assign");
  m.interval = cc11001100_hook("m.interval", function (a, b) {
    var c = cc11001100_hook("c", this.Na(a).subscribe(b), "var-init");
    return function () {
      return void c.unsubscribe();
    };
  }, "assign");
  m.Na = cc11001100_hook("m.Na", function (a) {
    return gh(this, a).h(Pf(), rf(function (b) {
      return b + 1;
    }, -1));
  }, "assign");
  m.ra = cc11001100_hook("m.ra", function () {
    return !0;
  }, "assign");
  function Rl(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Object.assign({}, a), "var-init");
    delete b.timestamp;
    return {
      timestamp: cc11001100_hook("timestamp", new Xa(a.timestamp, Va), "object-key-init"),
      value: cc11001100_hook("value", b, "object-key-init")
    };
  }
  ;
  function Sl(a) {
    cc11001100_hook("a", a, "function-parameter");
    return void 0 !== a && "number" === typeof a.x && "number" === typeof a.y && "number" === typeof a.width && "number" === typeof a.height;
  }
  ;
  var Ul = function (a, b, c) {
    c = cc11001100_hook("c", void 0 === c ? null : c, "assign");
    Ll.call(this);
    this.ma = cc11001100_hook("this.ma", a, "assign");
    this.th = cc11001100_hook("this.th", b, "assign");
    this.Va = cc11001100_hook("this.Va", c, "assign");
    this.Ud = cc11001100_hook("this.Ud", new Kf(3), "assign");
    this.Ud.h(U(function (d) {
      return "sessionStart" === d.value.type;
    }));
    this.fh = cc11001100_hook("this.fh", this.Ud.h(U(function (d) {
      return "sessionFinish" === d.value.type;
    })), "assign");
    this.Le = cc11001100_hook("this.Le", new Kf(1), "assign");
    this.uh = cc11001100_hook("this.uh", new Kf(), "assign");
    this.Ce = cc11001100_hook("this.Ce", new Kf(10), "assign");
    this.l = cc11001100_hook("this.l", new Ql(a), "assign");
    this.H = cc11001100_hook("this.H", new eh(this, new Nl(a)), "assign");
    this.vg = cc11001100_hook("this.vg", this.ma.I(), "assign");
    Tl(this);
  };
  v(Ul, Ll);
  Ul.prototype.validate = cc11001100_hook("Ul.prototype.validate", function () {
    return this.vg;
  }, "assign");
  var Tl = function (a) {
    Vl(a.ma, function (e) {
      return void a.Ud.next(Rl(e));
    }, a.th);
    a.ma.addEventListener("geometryChange", function (e) {
      if (void 0 === e) var f = cc11001100_hook("f", !1, "var-init");else {
        f = cc11001100_hook("f", e.data, "assign");
        var g;
        (g = cc11001100_hook("g", void 0 === f, "assign")) || (g = cc11001100_hook("g", f.viewport, "assign"), g = cc11001100_hook("g", void 0 === g || void 0 !== g && "number" === typeof g.width && "number" === typeof g.height, "assign"));
        g ? (f = cc11001100_hook("f", f.adView, "assign"), f = cc11001100_hook("f", void 0 !== f && "number" === typeof f.percentageInView && (void 0 === f.geometry || Sl(f.geometry)) && (void 0 === f.onScreenGeometry || Sl(f.onScreenGeometry)), "assign")) : f = cc11001100_hook("f", !1, "assign");
      }
      f ? a.Ce.next(Rl(e)) : .01 >= Math.random() && (e = cc11001100_hook("e", "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" + JSON.stringify(e), "assign"), a.H.O(e).sendNow());
    });
    for (var b = cc11001100_hook("b", {}, "var-init"), c = cc11001100_hook("c", r("loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")), "var-init"), d = cc11001100_hook("d", c.next(), "var-init"); !d.done; b = cc11001100_hook("b", {
      ac: cc11001100_hook("ac", b.ac, "object-key-init")
    }, "assign"), d = cc11001100_hook("d", c.next(), "assign")) b.ac = cc11001100_hook("b.ac", d.value, "assign"), a.ma.addEventListener(b.ac, function (e) {
      return function (f) {
        f.type === e.ac && a.uh.next(Rl(f));
      };
    }(b));
    a.ma.addEventListener("impression", function (e) {
      a.Le.next(Rl(e));
    });
  };
  da.Object.defineProperties(Ul.prototype, {
    global: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return Wl;
      }
    }
  });
  var Wl = cc11001100_hook("Wl", {}, "var-init");
  var Xl = function (a, b) {
      b = cc11001100_hook("b", b.google_js_reporting_queue = cc11001100_hook("b.google_js_reporting_queue", b.google_js_reporting_queue || [], "assign"), "assign");
      2048 > b.length && b.push(a);
    },
    Yl = function (a, b) {
      var c = cc11001100_hook("c", void 0 === c ? !1 : c, "var-init");
      var d = cc11001100_hook("d", window, "var-init"),
        e = cc11001100_hook("e", "undefined" !== typeof queueMicrotask, "var-init");
      return function () {
        c && e && queueMicrotask(function () {
          d.google_rum_task_id_counter = cc11001100_hook("d.google_rum_task_id_counter", d.google_rum_task_id_counter || 1, "assign");
          d.google_rum_task_id_counter += cc11001100_hook("d.google_rum_task_id_counter", 1, "assign");
        });
        var f = cc11001100_hook("f", Dl(), "var-init"),
          g = cc11001100_hook("g", 3, "var-init");
        try {
          var h = cc11001100_hook("h", b.apply(this, arguments), "var-init");
        } catch (l) {
          throw g = cc11001100_hook("g", 13, "assign"), l;
        } finally {
          if (d.google_measure_js_timing && f) {
            var k = cc11001100_hook("k", Dl() || 0, "var-init");
            Xl(Object.assign({}, {
              label: cc11001100_hook("label", a.toString(), "object-key-init"),
              value: cc11001100_hook("value", f, "object-key-init"),
              duration: cc11001100_hook("duration", k - f, "object-key-init"),
              type: cc11001100_hook("type", g, "object-key-init")
            }, c && e && {
              taskId: cc11001100_hook("taskId", d.google_rum_task_id_counter = cc11001100_hook("d.google_rum_task_id_counter", d.google_rum_task_id_counter || 1, "assign"), "object-key-init")
            }), d);
          }
        }
        return h;
      };
    };
  var Zl = function () {
    Kl.apply(this, arguments);
  };
  v(Zl, Kl);
  Zl.prototype.Ga = cc11001100_hook("Zl.prototype.Ga", function (a, b) {
    return Kl.prototype.Ga.call(this, a, Yl(a, b));
  }, "assign");
  var am = function () {
    for (var a = cc11001100_hook("a", r(x.apply(0, arguments)), "var-init"), b = cc11001100_hook("b", a.next(), "var-init"); !b.done; b = cc11001100_hook("b", a.next(), "assign")) if (b = cc11001100_hook("b", b.value, "assign"), b.ra()) {
      this.l = cc11001100_hook("this.l", b, "assign");
      return;
    }
    this.l = cc11001100_hook("this.l", new $l(), "assign");
  };
  m = cc11001100_hook("m", am.prototype, "assign");
  m.ra = cc11001100_hook("m.ra", function () {
    return this.l.ra();
  }, "assign");
  m.now = cc11001100_hook("m.now", function () {
    return this.l.now();
  }, "assign");
  m.setTimeout = cc11001100_hook("m.setTimeout", function (a, b) {
    return this.l.setTimeout(a, b);
  }, "assign");
  m.clearTimeout = cc11001100_hook("m.clearTimeout", function (a) {
    this.l.clearTimeout(a);
  }, "assign");
  m.interval = cc11001100_hook("m.interval", function (a, b) {
    var c = cc11001100_hook("c", this.Na(a).subscribe(b), "var-init");
    return function () {
      return void c.unsubscribe();
    };
  }, "assign");
  m.Na = cc11001100_hook("m.Na", function (a) {
    return this.l.Na(a);
  }, "assign");
  da.Object.defineProperties(am.prototype, {
    timeline: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.l.timeline;
      }
    }
  });
  var $l = function () {
    this.timeline = cc11001100_hook("this.timeline", Symbol(), "assign");
  };
  m = cc11001100_hook("m", $l.prototype, "assign");
  m.ra = cc11001100_hook("m.ra", function () {
    return !1;
  }, "assign");
  m.now = cc11001100_hook("m.now", function () {
    return new Xa(0, this.timeline);
  }, "assign");
  m.setTimeout = cc11001100_hook("m.setTimeout", function () {
    return 0;
  }, "assign");
  m.clearTimeout = cc11001100_hook("m.clearTimeout", function () {}, "assign");
  m.interval = cc11001100_hook("m.interval", function () {
    return function () {};
  }, "assign");
  m.Na = cc11001100_hook("m.Na", function () {
    return zg;
  }, "assign");
  var bm = function (a, b) {
    this.G = cc11001100_hook("this.G", a, "assign");
    this.s = cc11001100_hook("this.s", b, "assign");
  };
  m = cc11001100_hook("m", bm.prototype, "assign");
  m.setTimeout = cc11001100_hook("m.setTimeout", function (a, b) {
    return this.G.setTimeout(this.s.Ga(734, a), b);
  }, "assign");
  m.clearTimeout = cc11001100_hook("m.clearTimeout", function (a) {
    this.G.clearTimeout(a);
  }, "assign");
  m.interval = cc11001100_hook("m.interval", function (a, b) {
    var c = cc11001100_hook("c", this.Na(a).subscribe(b), "var-init");
    return function () {
      return void c.unsubscribe();
    };
  }, "assign");
  m.Na = cc11001100_hook("m.Na", function (a) {
    var b = cc11001100_hook("b", this, "var-init");
    return new K(function (c) {
      var d = cc11001100_hook("d", 0, "var-init"),
        e = cc11001100_hook("e", b.G.setInterval(function () {
          c.next(d++);
        }, a), "var-init");
      return function () {
        b.G.clearInterval(e);
      };
    });
  }, "assign");
  m.ra = cc11001100_hook("m.ra", function () {
    return !!this.G.clearTimeout && "setTimeout" in this.G && "setInterval" in this.G && !!this.G.clearInterval;
  }, "assign");
  var cm = function (a, b) {
    bm.call(this, a, b);
    this.timeline = cc11001100_hook("this.timeline", Va, "assign");
  };
  v(cm, bm);
  cm.prototype.now = cc11001100_hook("cm.prototype.now", function () {
    return new Xa(this.G.Date.now(), this.timeline);
  }, "assign");
  cm.prototype.ra = cc11001100_hook("cm.prototype.ra", function () {
    return !!this.G.Date && !!this.G.Date.now && bm.prototype.ra.call(this);
  }, "assign");
  var dm = function (a, b) {
    bm.call(this, a, b);
    this.timeline = cc11001100_hook("this.timeline", Ua, "assign");
  };
  v(dm, bm);
  dm.prototype.now = cc11001100_hook("dm.prototype.now", function () {
    return new Xa(this.G.performance.now(), this.timeline);
  }, "assign");
  dm.prototype.ra = cc11001100_hook("dm.prototype.ra", function () {
    return !!this.G.performance && !!this.G.performance.now && bm.prototype.ra.call(this);
  }, "assign");
  var em = function (a) {
    this.context = cc11001100_hook("this.context", a, "assign");
  };
  em.prototype.I = cc11001100_hook("em.prototype.I", function (a) {
    return (null == a ? 0 : a.jc) || "POST" === (null == a ? void 0 : a.Bb) || (null == a ? 0 : a.kb) || (null == a ? 0 : a.od) ? !1 : !ih(this.context);
  }, "assign");
  em.prototype.ping = cc11001100_hook("em.prototype.ping", function () {
    var a = cc11001100_hook("a", this, "var-init");
    return Q(x.apply(0, arguments).map(function (b) {
      try {
        var c = cc11001100_hook("c", a.context.global, "var-init");
        c.google_image_requests || (c.google_image_requests = cc11001100_hook("c.google_image_requests", [], "assign"));
        var d = cc11001100_hook("d", c.document, "var-init");
        d = cc11001100_hook("d", void 0 === d ? document : d, "assign");
        var e = cc11001100_hook("e", d.createElement("img"), "var-init");
        e.src = cc11001100_hook("e.src", b, "assign");
        c.google_image_requests.push(e);
        return !0;
      } catch (f) {
        return !1;
      }
    }).every(function (b) {
      return b;
    }));
  }, "assign");
  em.prototype.Kc = cc11001100_hook("em.prototype.Kc", function (a, b) {
    this.ping.apply(this, u(x.apply(2, arguments)));
  }, "assign");
  var fm = function (a) {
    this.context = cc11001100_hook("this.context", a, "assign");
  };
  fm.prototype.I = cc11001100_hook("fm.prototype.I", function (a) {
    if ((null == a ? 0 : a.jc) || "GET" === (null == a ? void 0 : a.Bb) || (null == a ? 0 : a.kb) || (null == a ? 0 : a.od)) return !1;
    var b;
    return !ih(this.context) && void 0 !== (null == (b = cc11001100_hook("b", this.context.global.navigator, "assign")) ? void 0 : b.sendBeacon);
  }, "assign");
  fm.prototype.ping = cc11001100_hook("fm.prototype.ping", function () {
    var a = cc11001100_hook("a", this, "var-init");
    return Q(x.apply(0, arguments).map(function (b) {
      var c;
      return null == (c = cc11001100_hook("c", a.context.global.navigator, "assign")) ? void 0 : c.sendBeacon(b);
    }).every(function (b) {
      return b;
    }));
  }, "assign");
  fm.prototype.Kc = cc11001100_hook("fm.prototype.Kc", function (a, b) {
    this.ping.apply(this, u(x.apply(2, arguments)));
  }, "assign");
  var gm = cc11001100_hook("gm", ["FRAME", "IMG", "IFRAME"], "var-init"),
    hm = cc11001100_hook("hm", /^[01](px)?$/, "var-init");
  function im(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "string" === typeof a ? document.getElementById(a) : a;
  }
  function jm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", !0, "var-init"),
      d = cc11001100_hook("d", !0, "var-init"),
      e = cc11001100_hook("e", void 0, "var-init"),
      f = cc11001100_hook("f", !0, "var-init");
    c = cc11001100_hook("c", void 0 === c ? !0 : c, "assign");
    d = cc11001100_hook("d", void 0 === d ? !1 : d, "assign");
    f = cc11001100_hook("f", void 0 === f ? !1 : f, "assign");
    if (a = cc11001100_hook("a", im(a), "assign")) {
      e || (e = cc11001100_hook("e", function (N, ta, B) {
        N.addEventListener(ta, B);
      }, "assign"));
      for (var g = cc11001100_hook("g", !1, "var-init"), h = function (N) {
          g || (g = cc11001100_hook("g", !0, "assign"), b(N));
        }, k, l, p = cc11001100_hook("p", 0, "var-init"); p < gm.length; ++p) if (gm[p] == a.tagName) {
        l = cc11001100_hook("l", 3, "assign");
        k = cc11001100_hook("k", [a], "assign");
        break;
      }
      k || (k = cc11001100_hook("k", a.querySelectorAll(gm.join(",")), "assign"), l = cc11001100_hook("l", 2, "assign"));
      var t = cc11001100_hook("t", 0, "var-init"),
        n = cc11001100_hook("n", 0, "var-init"),
        w = cc11001100_hook("w", a = cc11001100_hook("a", !1, "assign"), "var-init");
      p = cc11001100_hook("p", {}, "assign");
      for (var A = cc11001100_hook("A", 0, "var-init"); A < k.length; p = cc11001100_hook("p", {
        bc: cc11001100_hook("bc", p.bc, "object-key-init")
      }, "assign"), A++) {
        var y = cc11001100_hook("y", k[A], "var-init");
        if (!("IMG" != y.tagName || !y.complete || y.naturalWidth && y.naturalHeight ? hm.test(y.getAttribute("width")) && hm.test(y.getAttribute("height")) : 1)) {
          if ("IMG" == y.tagName) var C = cc11001100_hook("C", y.naturalWidth && y.naturalHeight ? !0 : !1, "var-init");else try {
            C = cc11001100_hook("C", "complete" === (y.readyState ? y.readyState : y.contentWindow && y.contentWindow.document && y.contentWindow.document.readyState) ? !0 : !1, "assign");
          } catch (N) {
            C = cc11001100_hook("C", void 0 === d ? !1 : d, "assign");
          }
          if (C) a = cc11001100_hook("a", !0, "assign");else {
            t++;
            p.bc = cc11001100_hook("p.bc", "IMG" === y.tagName, "assign");
            var G = cc11001100_hook("G", function (N) {
              return function () {
                t--;
                t || h(l);
                N.bc && (n--, !n && w && h(l));
              };
            }(p), "var-init");
            e(y, "load", G);
            p.bc && (n++, e(y, "error", G));
          }
        }
      }
      k = cc11001100_hook("k", null, "assign");
      if (0 === t && !a && "complete" === Da.document.readyState) l = cc11001100_hook("l", 5, "assign");else if (t || !a) {
        e(Da, "load", function () {
          f && n ? w = cc11001100_hook("w", !0, "assign") : h(4);
        });
        return;
      }
      c && h(l);
    }
  }
  ;
  function km(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (a) for (var d = cc11001100_hook("d", 0, "var-init"); null != a && 500 > d && !c(a); ++d) a = cc11001100_hook("a", b(a), "assign");
  }
  function lm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    km(a, function (c) {
      try {
        return c === c.parent ? null : c.parent;
      } catch (d) {}
      return null;
    }, b);
  }
  function mm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("IFRAME" == a.tagName) b(a);else {
      a = cc11001100_hook("a", a.querySelectorAll("IFRAME"), "assign");
      for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length && !b(a[c]); ++c);
    }
  }
  function nm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a.ownerDocument, "assign")) && (a.parentWindow || a.defaultView) || null;
  }
  function om(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    try {
      var d = cc11001100_hook("d", JSON.parse(c.data), "var-init");
    } catch (g) {}
    if ("object" === typeof d && d && "creativeLoad" === d.type) {
      var e = cc11001100_hook("e", nm(a), "var-init");
      if (c.source && e) {
        var f;
        lm(c.source, function (g) {
          try {
            if (g.parent === e) return f = cc11001100_hook("f", g, "assign"), !0;
          } catch (h) {}
        });
        f && mm(a, function (g) {
          if (g.contentWindow === f) return b(d), !0;
        });
      }
    }
  }
  function pm(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "string" === typeof a ? document.getElementById(a) : a;
  }
  var qm = function (a, b) {
    var c = cc11001100_hook("c", pm(a), "var-init");
    if (c) if (c.onCreativeLoad) c.onCreativeLoad(b);else {
      var d = cc11001100_hook("d", b ? [b] : [], "var-init"),
        e = function (f) {
          for (var g = cc11001100_hook("g", 0, "var-init"); g < d.length; ++g) try {
            d[g](1, f);
          } catch (h) {}
          d = cc11001100_hook("d", {
            push: function (h) {
              h(1, f);
            }
          }, "assign");
        };
      c.onCreativeLoad = cc11001100_hook("c.onCreativeLoad", function (f) {
        d.push(f);
      }, "assign");
      c.setAttribute("data-creative-load-listener", "");
      c.addEventListener("creativeLoad", function (f) {
        e(f.detail);
      });
      Da.addEventListener("message", function (f) {
        om(c, e, f);
      });
    }
  };
  var rm = function (a, b) {
      var c = cc11001100_hook("c", this, "var-init");
      this.global = cc11001100_hook("this.global", a, "assign");
      this.Jc = cc11001100_hook("this.Jc", b, "assign");
      this.Sg = cc11001100_hook("this.Sg", this.document ? uf(Q(!0), xg(this.document, "visibilitychange")).h(Zg(this.Jc.s, 748), R(function () {
        return c.document ? c.document.visibilityState : "visible";
      }), S()) : Q("visible"), "assign");
      this.Pg = cc11001100_hook("this.Pg", this.document ? xg(this.document, "DOMContentLoaded").h(Zg(this.Jc.s, 739), Se(1)) : Q(Gk("DOMContentLoaded")), "assign");
    },
    Zk = function (a) {
      return a.document ? a.document.readyState : "complete";
    },
    Jl = function (a) {
      return null !== a.document && void 0 !== a.document.visibilityState;
    };
  rm.prototype.querySelector = cc11001100_hook("rm.prototype.querySelector", function (a) {
    return this.document ? this.document.querySelector(a) : null;
  }, "assign");
  rm.prototype.querySelectorAll = cc11001100_hook("rm.prototype.querySelectorAll", function (a) {
    return this.document ? Lb(this.document.querySelectorAll(a)) : [];
  }, "assign");
  var fk = function (a) {
    return null !== a.document && "function" === typeof a.document.elementFromPoint;
  };
  rm.prototype.elementFromPoint = cc11001100_hook("rm.prototype.elementFromPoint", function (a, b) {
    if (!this.document || !fk(this)) return null;
    a = cc11001100_hook("a", this.document.elementFromPoint(a, b), "assign");
    return null === a ? null : new Kg(a);
  }, "assign");
  var Ij = function (a, b, c) {
    c = cc11001100_hook("c", void 0 === c ? !1 : c, "assign");
    if (void 0 === b.j || !a.document) return Q(b).h(Zg(a.Jc.s, 749));
    var d = cc11001100_hook("d", new Kf(1), "var-init"),
      e = function () {
        d.next(b);
      };
    c || qm(b.j, e);
    jm(b.j, e);
    return d.h(Zg(a.Jc.s, 749), Se(1));
  };
  da.Object.defineProperties(rm.prototype, {
    document: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return Qb(this.global, "document") ? this.global.document || null : null;
      }
    }
  });
  var sm = function (a) {
    kd.call(this, a);
  };
  v(sm, kd);
  sm.prototype.De = cc11001100_hook("sm.prototype.De", function () {
    return Nc(Fc(this, 2), "");
  }, "assign");
  sm.ob = cc11001100_hook("sm.ob", "wireless.mdl.UserAgentClientHints.BrandAndVersion", "assign");
  var um = function (a) {
    kd.call(this, a, -1, tm);
  };
  v(um, kd);
  var xm = function (a, b) {
      return Hc(a, 2, b);
    },
    ym = function (a, b) {
      return Hc(a, 3, b);
    },
    Am = function (a, b) {
      return Hc(a, 4, b);
    },
    Bm = function (a, b) {
      return Hc(a, 5, b);
    },
    Cm = function (a, b) {
      return Hc(a, 9, b);
    },
    Dm = function (a, b) {
      if (nc(a.F) & 2) throw Error("o");
      var c = cc11001100_hook("c", null == b ? vc : b, "var-init");
      if (null != b) {
        ib(b);
        for (var d = cc11001100_hook("d", !!b.length, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
          var f = cc11001100_hook("f", b[e], "var-init"),
            g = cc11001100_hook("g", cb(sm), "var-init");
          if (!(f instanceof g)) throw Error("q`" + yc(g) + "`" + (f && yc(f.constructor)));
          d = cc11001100_hook("d", d && !(nc(f.F) & 2), "assign");
        }
        b = cc11001100_hook("b", c, "assign");
        d = cc11001100_hook("d", (d ? 8 : 0) | 5, "assign");
        c = cc11001100_hook("c", nc(b), "assign");
        (c & d) !== d && (Object.isFrozen(b) && (b = cc11001100_hook("b", Array.prototype.slice.call(b), "assign")), oc(b, c | d));
        c = cc11001100_hook("c", b, "assign");
      }
      return Gc(a, 10, c);
    },
    Em = function (a, b) {
      return Hc(a, 11, b);
    },
    Fm = function (a, b) {
      return Hc(a, 1, b);
    },
    Gm = function (a, b) {
      return Hc(a, 7, b);
    };
  um.ob = cc11001100_hook("um.ob", "wireless.mdl.UserAgentClientHints", "assign");
  var tm = cc11001100_hook("tm", [10, 6], "var-init");
  var Hm = cc11001100_hook("Hm", "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" "), "var-init");
  function Im(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    return null != (b = cc11001100_hook("b", a.google_tag_data, "assign")) ? b : a.google_tag_data = cc11001100_hook("a.google_tag_data", {}, "assign");
  }
  function Jm(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b, c;
    return "function" === typeof (null == (b = cc11001100_hook("b", a.navigator, "assign")) ? void 0 : null == (c = cc11001100_hook("c", b.userAgentData, "assign")) ? void 0 : c.getHighEntropyValues);
  }
  function Km(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!Jm(a)) return null;
    var b = cc11001100_hook("b", Im(a), "var-init");
    if (b.uach_promise) return b.uach_promise;
    a = cc11001100_hook("a", a.navigator.userAgentData.getHighEntropyValues(Hm).then(function (c) {
      null != b.uach || (b.uach = cc11001100_hook("b.uach", c, "assign"));
      return c;
    }), "assign");
    return b.uach_promise = cc11001100_hook("b.uach_promise", a, "assign");
  }
  function Lm(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    return Em(Dm(Bm(xm(Fm(Am(Gm(Cm(ym(new um(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = cc11001100_hook("b", a.fullVersionList, "assign")) ? void 0 : b.map(function (c) {
      var d = cc11001100_hook("d", new sm(), "var-init");
      d = cc11001100_hook("d", Hc(d, 1, c.brand), "assign");
      return Hc(d, 2, c.version);
    })) || []), a.wow64 || !1);
  }
  function Mm(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b, c;
    return null != (c = cc11001100_hook("c", null == (b = cc11001100_hook("b", Km(a), "assign")) ? void 0 : b.then(function (d) {
      return Lm(d);
    }), "assign")) ? c : null;
  }
  ;
  var Ek = function (a, b, c) {
    a = cc11001100_hook("a", void 0 === a ? window : a, "assign");
    b = cc11001100_hook("b", void 0 === b ? null : b, "assign");
    c = cc11001100_hook("c", void 0 === c ? new Kl() : c, "assign");
    Ll.call(this);
    this.global = cc11001100_hook("this.global", a, "assign");
    this.Va = cc11001100_hook("this.Va", b, "assign");
    this.s = cc11001100_hook("this.s", c, "assign");
    this.Qg = cc11001100_hook("this.Qg", xg(this.global, "pagehide").h(Zg(this.s, 941)), "assign");
    this.af = cc11001100_hook("this.af", xg(this.global, "load").h(Zg(this.s, 738), Se(1)), "assign");
    this.Rg = cc11001100_hook("this.Rg", xg(this.global, "resize").h(Zg(this.s, 741)), "assign");
    this.onMessage = cc11001100_hook("this.onMessage", xg(this.global, "message").h(Zg(this.s, 740)), "assign");
    this.document = cc11001100_hook("this.document", new rm(this.global, this), "assign");
    this.l = cc11001100_hook("this.l", new am(new dm(this.G, this.s), new cm(this.G, this.s)), "assign");
    this.H = cc11001100_hook("this.H", new Ml(new mh(this), new eh(this, new hh(this)), new eh(this, new fm(this)), new eh(this, new em(this))), "assign");
  };
  v(Ek, Ll);
  var ih = function (a) {
    var b = cc11001100_hook("b", a.global, "var-init");
    return !!a.global.HTMLFencedFrameElement && !!b.fence && "function" === typeof b.fence.reportEvent;
  };
  Ek.prototype.cb = cc11001100_hook("Ek.prototype.cb", function (a) {
    ih(this) && this.global.fence.reportEvent(a);
  }, "assign");
  Ek.prototype.yd = cc11001100_hook("Ek.prototype.yd", function () {
    return this.Qg.h(Zg(this.s, 942), Y(this.i, 1), R(function () {}));
  }, "assign");
  var ni = function (a) {
      var b = cc11001100_hook("b", new Ek(a.global.top, a.Va), "var-init");
      b.H = cc11001100_hook("b.H", a.H, "assign");
      return b;
    },
    oi = function (a, b) {
      b.start();
      return xg(b, "message").h(Zg(a.s, 740));
    };
  Ek.prototype.postMessage = cc11001100_hook("Ek.prototype.postMessage", function (a, b, c) {
    c = cc11001100_hook("c", void 0 === c ? [] : c, "assign");
    this.global.postMessage(a, b, c);
  }, "assign");
  Ek.prototype.zd = cc11001100_hook("Ek.prototype.zd", function () {
    return ek(this.global) ? this.global.width : 0;
  }, "assign");
  Ek.prototype.wd = cc11001100_hook("Ek.prototype.wd", function () {
    return ek(this.global) ? this.global.height : 0;
  }, "assign");
  var Dk = function (a, b) {
    try {
      var c = cc11001100_hook("c", a.global, "var-init");
      try {
        b && (c = cc11001100_hook("c", c.top, "assign"));
        a = cc11001100_hook("a", c, "assign");
        var d = cc11001100_hook("d", jk() || kk(), "var-init");
        b && null !== a && a != a.top && (a = cc11001100_hook("a", a.top, "assign"));
        try {
          if (void 0 === d ? 0 : d) var e = cc11001100_hook("e", new Pj(a.innerWidth, a.innerHeight).round(), "var-init");else {
            var f = cc11001100_hook("f", (a || window).document, "var-init"),
              g = cc11001100_hook("g", "CSS1Compat" == f.compatMode ? f.documentElement : f.body, "var-init");
            e = cc11001100_hook("e", new Pj(g.clientWidth, g.clientHeight).round(), "assign");
          }
          var h = cc11001100_hook("h", e, "var-init");
        } catch (A) {
          h = cc11001100_hook("h", new Pj(-12245933, -12245933), "assign");
        }
        b = cc11001100_hook("b", h, "assign");
        var k = cc11001100_hook("k", b.height, "var-init"),
          l = cc11001100_hook("l", b.width, "var-init");
        if (-12245933 === l) var p = cc11001100_hook("p", new Wj(l, l, l, l), "var-init");else {
          var t = cc11001100_hook("t", Tj(Sj(c.document).mb), "var-init"),
            n = cc11001100_hook("n", t.x, "var-init"),
            w = cc11001100_hook("w", t.y, "var-init");
          p = cc11001100_hook("p", new Wj(w, n + l, w + k, n), "assign");
        }
      } catch (A) {
        p = cc11001100_hook("p", new Wj(-12245933, -12245933, -12245933, -12245933), "assign");
      }
      return {
        left: cc11001100_hook("left", p.left, "object-key-init"),
        top: cc11001100_hook("top", p.top, "object-key-init"),
        width: cc11001100_hook("width", p.zd(), "object-key-init"),
        height: cc11001100_hook("height", p.wd(), "object-key-init")
      };
    } catch (A) {
      return ci;
    }
  };
  Ek.prototype.validate = cc11001100_hook("Ek.prototype.validate", function () {
    return this.global && this.l.ra() && this.H.I();
  }, "assign");
  var qh = function (a) {
    return (a = cc11001100_hook("a", Mm(a.global), "assign")) ? le(a) : null;
  };
  da.Object.defineProperties(Ek.prototype, {
    G: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return window;
      }
    },
    nb: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return !ek(this.global.top);
      }
    },
    Cd: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.nb || this.global.top !== this.global;
      }
    },
    scrollY: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.global.scrollY;
      }
    },
    MutationObserver: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.G.MutationObserver;
      }
    },
    ResizeObserver: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return this.G.ResizeObserver;
      }
    },
    tg: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        D(!0, "Major version must be an integer");
        return 8 <= Fb();
      }
    },
    Jf: {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return "vu" in this.global || "vv" in this.global;
      }
    }
  });
  function Nm(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", new dh(), "var-init"),
      g = cc11001100_hook("g", new Fl(f, {
        sd: cc11001100_hook("sd", b, "object-key-init"),
        Ld: cc11001100_hook("Ld", c, "object-key-init"),
        na: cc11001100_hook("na", d, "object-key-init"),
        ab: cc11001100_hook("ab", e, "object-key-init")
      }), "var-init");
    g.start(a);
    var h = function (k, l, p) {
      p(!0);
    };
    f.start(a, function (k, l, p) {
      g.md.next(Object.assign({}, g.Vg.ve.get(k), {
        metadata: cc11001100_hook("metadata", l, "object-key-init"),
        Yf: cc11001100_hook("Yf", p, "object-key-init"),
        ci: cc11001100_hook("ci", k, "object-key-init"),
        Wa: cc11001100_hook("Wa", h, "object-key-init")
      }));
    }, function () {}, function () {
      g.lb();
    });
    return g.Bg;
  }
  ;
  function Om(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!b) throw Error("O`" + a);
    if ("string" !== typeof b && !(b instanceof String)) throw Error("P`" + a);
    if ("" === b.trim()) throw Error("Q`" + a);
  }
  function Pm(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) throw Error("T`functionToExecute");
  }
  function Qm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (null == b) throw Error("R`" + a);
    if ("number" !== typeof b || isNaN(b)) throw Error("S`" + a);
    if (0 > b) throw Error("U`" + a);
  }
  ;
  function Rm() {
    return /\d+\.\d+\.\d+(-.*)?/.test("1.4.3-google_20230308");
  }
  function Sm() {
    for (var a = cc11001100_hook("a", ["1", "4", "3"], "var-init"), b = cc11001100_hook("b", ["1", "0", "3"], "var-init"), c = cc11001100_hook("c", 0, "var-init"); 3 > c; c++) {
      var d = cc11001100_hook("d", parseInt(a[c], 10), "var-init"),
        e = cc11001100_hook("e", parseInt(b[c], 10), "var-init");
      if (d > e) break;else if (d < e) return !1;
    }
    return !0;
  }
  ;
  var Tm = function (a, b, c, d) {
      this.Fe = cc11001100_hook("this.Fe", a, "assign");
      this.method = cc11001100_hook("this.method", b, "assign");
      this.version = cc11001100_hook("this.version", c, "assign");
      this.args = cc11001100_hook("this.args", d, "assign");
    },
    Um = function (a) {
      return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args);
    },
    Vm = function (a) {
      return new Tm(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args);
    };
  Tm.prototype.wb = cc11001100_hook("Tm.prototype.wb", function () {
    var a = cc11001100_hook("a", {}, "var-init");
    a = cc11001100_hook("a", (a.omid_message_guid = cc11001100_hook("a.omid_message_guid", this.Fe, "assign"), a.omid_message_method = cc11001100_hook("a.omid_message_method", this.method, "assign"), a.omid_message_version = cc11001100_hook("a.omid_message_version", this.version, "assign"), a), "assign");
    void 0 !== this.args && (a.omid_message_args = cc11001100_hook("a.omid_message_args", this.args, "assign"));
    return a;
  }, "assign");
  var Wm = function (a) {
    this.Sc = cc11001100_hook("this.Sc", a, "assign");
  };
  Wm.prototype.wb = cc11001100_hook("Wm.prototype.wb", function () {
    return JSON.stringify(void 0);
  }, "assign");
  function Xm(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && (a[b] || (a[b] = cc11001100_hook("a[b]", {}, "assign")));
  }
  ;
  function Ym() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
      var b = cc11001100_hook("b", 16 * Math.random() | 0, "var-init");
      return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
    });
  }
  ;
  function Zm() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init");
    $m(function () {
      throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(u(a))))();
    }, function () {
      return console.error.apply(console, u(a));
    });
  }
  function $m(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
  }
  ;
  var an = cc11001100_hook("an", function () {
    if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
    if ("undefined" !== typeof global && global) return global;
    if ("undefined" !== typeof window && window) return window;
    if ("undefined" !== typeof globalThis && globalThis) return globalThis;
    var a = cc11001100_hook("a", Function("return this")(), "var-init");
    if (a) return a;
    throw Error("V");
  }(), "var-init");
  var bn = function (a) {
    try {
      return a.frames ? !!a.frames.omid_v1_present : !1;
    } catch (b) {
      return !1;
    }
  };
  var cn = function (a) {
    this.Sc = cc11001100_hook("this.Sc", a, "assign");
    this.handleExportedMessage = cc11001100_hook("this.handleExportedMessage", cn.prototype.hg.bind(this), "assign");
  };
  v(cn, Wm);
  cn.prototype.sendMessage = cc11001100_hook("cn.prototype.sendMessage", function (a, b) {
    b = cc11001100_hook("b", void 0 === b ? this.Sc : b, "assign");
    if (!b) throw Error("W");
    b.handleExportedMessage(a.wb(), this);
  }, "assign");
  cn.prototype.hg = cc11001100_hook("cn.prototype.hg", function (a, b) {
    if (Um(a) && this.onMessage) this.onMessage(Vm(a), b);
  }, "assign");
  function dn(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a && "undefined" !== typeof a.top && null != a.top;
  }
  function en(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a === an) return !1;
    try {
      if ("undefined" === typeof a.location.hostname) return !0;
    } catch (b) {
      return !0;
    }
    return !1;
  }
  ;
  var fn = function (a, b) {
    this.Sc = cc11001100_hook("this.Sc", b = cc11001100_hook("b", void 0 === b ? an : b, "assign"), "assign");
    var c = cc11001100_hook("c", this, "var-init");
    a.addEventListener("message", function (d) {
      if ("object" === typeof d.data) {
        var e = cc11001100_hook("e", d.data, "var-init");
        if (Um(e) && d.source && c.onMessage) c.onMessage(Vm(e), d.source);
      }
    });
  };
  v(fn, Wm);
  fn.prototype.sendMessage = cc11001100_hook("fn.prototype.sendMessage", function (a, b) {
    b = cc11001100_hook("b", void 0 === b ? this.Sc : b, "assign");
    if (!b) throw Error("W");
    b.postMessage(a.wb(), "*");
  }, "assign");
  var gn = cc11001100_hook("gn", ["omid", "v1_VerificationServiceCommunication"], "var-init"),
    hn = cc11001100_hook("hn", ["omidVerificationProperties", "serviceWindow"], "var-init");
  function jn(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.reduce(function (c, d) {
      return c && c[d];
    }, a);
  }
  ;
  var kn = function (a) {
    if (!a) {
      var b;
      "undefined" === typeof b && "undefined" !== typeof window && window && (b = cc11001100_hook("b", window, "assign"));
      b = cc11001100_hook("b", dn(b) ? b : an, "assign");
      var c = cc11001100_hook("c", void 0 === c ? bn : c, "var-init");
      a = cc11001100_hook("a", [], "assign");
      var d = cc11001100_hook("d", jn(b, hn), "var-init");
      d && a.push(d);
      a.push(dn(b) ? b.top : an);
      a: {
        a = cc11001100_hook("a", r(a), "assign");
        for (var e = cc11001100_hook("e", a.next(), "var-init"); !e.done; e = cc11001100_hook("e", a.next(), "assign")) {
          b: {
            d = cc11001100_hook("d", b, "assign");
            e = cc11001100_hook("e", e.value, "assign");
            var f = cc11001100_hook("f", c, "var-init");
            if (!en(e)) try {
              var g = cc11001100_hook("g", jn(e, gn), "var-init");
              if (g) {
                var h = cc11001100_hook("h", new cn(g), "var-init");
                break b;
              }
            } catch (k) {}
            h = cc11001100_hook("h", f(e) ? new fn(d, e) : null, "assign");
          }
          if (d = cc11001100_hook("d", h, "assign")) {
            a = cc11001100_hook("a", d, "assign");
            break a;
          }
        }
        a = cc11001100_hook("a", null, "assign");
      }
    }
    if (this.Db = cc11001100_hook("this.Db", a, "assign")) this.Db.onMessage = cc11001100_hook("this.Db.onMessage", this.ig.bind(this), "assign");else if (c = cc11001100_hook("c", (c = cc11001100_hook("c", an.omid3p, "assign")) && "function" === typeof c.registerSessionObserver && "function" === typeof c.addEventListener ? c : null, "assign")) this.Qb = cc11001100_hook("this.Qb", c, "assign");
    this.Xg = cc11001100_hook("this.Xg", this.Yg = cc11001100_hook("this.Yg", 0, "assign"), "assign");
    this.fd = cc11001100_hook("this.fd", {}, "assign");
    this.Bd = cc11001100_hook("this.Bd", [], "assign");
    this.Bc = cc11001100_hook("this.Bc", (c = cc11001100_hook("c", an.omidVerificationProperties, "assign")) ? c.injectionId : void 0, "assign");
  };
  kn.prototype.I = cc11001100_hook("kn.prototype.I", function () {
    return !(!this.Db && !this.Qb);
  }, "assign");
  var Vl = function (a, b, c) {
    Pm(b);
    a.Qb ? a.Qb.registerSessionObserver(b, c, a.Bc) : a.vb("addSessionListener", b, c, a.Bc);
  };
  kn.prototype.addEventListener = cc11001100_hook("kn.prototype.addEventListener", function (a, b) {
    Om("eventType", a);
    Pm(b);
    this.Qb ? this.Qb.addEventListener(a, b, this.Bc) : this.vb("addEventListener", b, a, this.Bc);
  }, "assign");
  var Pl = function (a, b, c, d) {
      Om("url", b);
      an.document && an.document.createElement ? ln(a, b, c, d) : a.vb("sendUrl", function (e) {
        e && c ? c() : !e && d && d();
      }, b);
    },
    ln = function (a, b, c, d) {
      var e = cc11001100_hook("e", an.document.createElement("img"), "var-init");
      a.Bd.push(e);
      var f = function (g) {
        var h = cc11001100_hook("h", a.Bd.indexOf(e), "var-init");
        0 <= h && a.Bd.splice(h, 1);
        g && g();
      };
      e.addEventListener("load", f.bind(a, c));
      e.addEventListener("error", f.bind(a, d));
      e.src = cc11001100_hook("e.src", b, "assign");
    };
  kn.prototype.setTimeout = cc11001100_hook("kn.prototype.setTimeout", function (a, b) {
    Pm(a);
    Qm("timeInMillis", b);
    if (mn()) return an.setTimeout(a, b);
    var c = cc11001100_hook("c", this.Yg++, "var-init");
    this.vb("setTimeout", a, c, b);
    return c;
  }, "assign");
  kn.prototype.clearTimeout = cc11001100_hook("kn.prototype.clearTimeout", function (a) {
    Qm("timeoutId", a);
    mn() ? an.clearTimeout(a) : this.ff("clearTimeout", a);
  }, "assign");
  kn.prototype.setInterval = cc11001100_hook("kn.prototype.setInterval", function (a, b) {
    Pm(a);
    Qm("timeInMillis", b);
    if (nn()) return an.setInterval(a, b);
    var c = cc11001100_hook("c", this.Xg++, "var-init");
    this.vb("setInterval", a, c, b);
    return c;
  }, "assign");
  kn.prototype.clearInterval = cc11001100_hook("kn.prototype.clearInterval", function (a) {
    Qm("intervalId", a);
    nn() ? an.clearInterval(a) : this.ff("clearInterval", a);
  }, "assign");
  var mn = function () {
      return "function" === typeof an.setTimeout && "function" === typeof an.clearTimeout;
    },
    nn = function () {
      return "function" === typeof an.setInterval && "function" === typeof an.clearInterval;
    };
  kn.prototype.ig = cc11001100_hook("kn.prototype.ig", function (a) {
    var b = cc11001100_hook("b", a.method, "var-init"),
      c = cc11001100_hook("c", a.Fe, "var-init");
    a = cc11001100_hook("a", a.args, "assign");
    if ("response" === b && this.fd[c]) {
      var d = cc11001100_hook("d", Rm() && Sm() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [], "var-init");
      this.fd[c].apply(this, d);
    }
    "error" === b && window.console && Zm(a);
  }, "assign");
  kn.prototype.ff = cc11001100_hook("kn.prototype.ff", function (a) {
    this.vb.apply(this, [a, null].concat(u(x.apply(1, arguments))));
  }, "assign");
  kn.prototype.vb = cc11001100_hook("kn.prototype.vb", function (a, b) {
    var c = cc11001100_hook("c", x.apply(2, arguments), "var-init");
    if (this.Db) {
      var d = cc11001100_hook("d", Ym(), "var-init");
      b && (this.fd[d] = cc11001100_hook("this.fd[d]", b, "assign"));
      var e = cc11001100_hook("e", "VerificationService." + a, "var-init");
      c = cc11001100_hook("c", Rm() && Sm() ? c : JSON.stringify(c), "assign");
      this.Db.sendMessage(new Tm(d, e, "1.4.3-google_20230308", c));
    }
  }, "assign");
  var on = cc11001100_hook("on", void 0, "var-init");
  if (on = cc11001100_hook("on", void 0 === on ? "undefined" === typeof omidExports ? null : omidExports : on, "assign")) {
    var pn = cc11001100_hook("pn", ["OmidVerificationClient"], "var-init");
    pn.slice(0, pn.length - 1).reduce(Xm, on)[pn[pn.length - 1]] = cc11001100_hook("pn.slice(0, pn.length - 1).reduce(Xm, on)[pn[pn.length - 1]]", kn, "assign");
  }
  ;
  var qn = cc11001100_hook("qn", null, "var-init");
  try {
    var rn = cc11001100_hook("rn", new kn(), "var-init");
    qn = cc11001100_hook("qn", new Ul(rn, "doubleclickbygoogle.com-omid"), "assign");
  } catch (a) {
    qn = cc11001100_hook("qn", null, "assign");
  }
  (function (a, b, c, d, e) {
    var f = cc11001100_hook("f", El(a, void 0 === e ? null : e), "var-init");
    return a.s.Ga(742, function () {
      return Nm(a, null != b ? b : f.sd, null != c ? c : f.Ld, null != d ? d : f.na, f.ab);
    })();
  })(new Ek(window, null, new Zl()), void 0, void 0, void 0, qn).subscribe();
}).call(this);