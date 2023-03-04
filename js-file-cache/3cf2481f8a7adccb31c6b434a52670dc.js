!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = cc11001100_hook("module.exports", t(), "assign") : "function" == typeof haDef && haDef.amd ? haDef(t) : (e = cc11001100_hook("e", "undefined" != typeof globalThis ? globalThis : e || self, "assign")).agconnect = cc11001100_hook("(e = \"undefined\" != typeof globalThis ? globalThis : e || self).agconnect", t(), "assign");
}(this, function () {
  "use strict";

  var e = cc11001100_hook("e", new (function () {
      function e() {
        this.servicesIdentifierMap = cc11001100_hook("this.servicesIdentifierMap", new Map(), "assign"), this.registeredService = cc11001100_hook("this.registeredService", new Map(), "assign");
      }
      return e.prototype.registryService = cc11001100_hook("e.prototype.registryService", function (e) {
        var t = cc11001100_hook("t", e.name, "var-init");
        this.registeredService.has(t) || this.registeredService.set(t, e);
      }, "assign"), e.prototype.unregistryService = cc11001100_hook("e.prototype.unregistryService", function (e) {}, "assign"), e.prototype.getService = cc11001100_hook("e.prototype.getService", function (e, t, n) {
        void 0 === n && (n = cc11001100_hook("n", "[DEFAULT_CATEGORY]", "assign"));
        var r = cc11001100_hook("r", this.servicesIdentifierMap.get(n), "var-init");
        if (null == r) r = cc11001100_hook("r", new Map(), "assign"), this.servicesIdentifierMap.set(n, r);else if (null != (o = cc11001100_hook("o", r.get(e), "assign"))) return o;
        var i = cc11001100_hook("i", this.registeredService.get(e), "var-init");
        if (null != i) {
          var o = cc11001100_hook("o", i.serviceFactory(t), "var-init");
          return r.set(e, o), o;
        }
        return null;
      }, "assign"), e;
    }())(), "var-init"),
    t = cc11001100_hook("t", new (function () {
      function t() {}
      return t.prototype.registerApiProvider = cc11001100_hook("t.prototype.registerApiProvider", function (e, t, n) {
        this[e] = cc11001100_hook("this[e]", function () {
          for (var e = cc11001100_hook("e", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < arguments.length; n++) e[n] = cc11001100_hook("e[n]", arguments[n], "assign");
          return t(e);
        }, "assign"), null != n && function e(t, n) {
          if (!(n instanceof Object)) return n;
          switch (n.constructor) {
            case Array:
              t = cc11001100_hook("t", [], "assign");
              break;
            case Object:
              void 0 === t && (t = cc11001100_hook("t", {}, "assign"));
              break;
            case Date:
              return new Date(n.getTime());
            default:
              return n;
          }
          for (var r in n) n.hasOwnProperty(r) && (t[r] = cc11001100_hook("t[r]", e(t[r], n[r]), "assign"));
          return t;
        }(this[e], n);
      }, "assign"), t.prototype.registerInternalService = cc11001100_hook("t.prototype.registerInternalService", function (t) {
        e.registryService(t);
      }, "assign"), t.prototype.getService = cc11001100_hook("t.prototype.getService", function (t, n, r) {
        return e.getService(t, n, r);
      }, "assign"), t;
    }())(), "var-init"),
    n = cc11001100_hook("n", "[DEFAULT_CATEGORY]", "var-init"),
    r = cc11001100_hook("r", function () {
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        this.factory = cc11001100_hook("this.factory", e, "assign");
      }
      return e.prototype.get = cc11001100_hook("e.prototype.get", function () {
        return null == this.instance && (this.instance = cc11001100_hook("this.instance", this.factory(), "assign")), this.instance;
      }, "assign"), e;
    }(), "var-init"),
    i = cc11001100_hook("i", function () {
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        this.instanceMap = cc11001100_hook("this.instanceMap", {}, "assign"), this.factory = cc11001100_hook("this.factory", e, "assign");
      }
      return e.prototype.get = cc11001100_hook("e.prototype.get", function (e) {
        if (e && Array.isArray(e) && e.length >= 1) return this.instanceMap[e[0]] || (this.instanceMap[e[0]] = cc11001100_hook("this.instanceMap[e[0]]", this.factory(e), "assign")), this.instanceMap[e[0]];
        var t = cc11001100_hook("t", new Array(), "var-init");
        return t[0] = cc11001100_hook("t[0]", "[DEFAULT_CATEGORY]", "assign"), this.get(t);
      }, "assign"), e;
    }(), "var-init"),
    o = cc11001100_hook("o", {}.toString, "var-init"),
    a = function (e) {
      return o.call(e).slice(8, -1);
    },
    s = cc11001100_hook("s", "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, "var-init");
  function c(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e(t = cc11001100_hook("t", {
      exports: {}
    }, "assign"), t.exports), t.exports;
  }
  var u = cc11001100_hook("u", c(function (e) {
    var t = cc11001100_hook("t", e.exports = cc11001100_hook("e.exports", {
      version: cc11001100_hook("version", "2.6.12", "object-key-init")
    }, "assign"), "var-init");
    "number" == typeof __e && (__e = cc11001100_hook("__e", t, "assign"));
  }), "var-init");
  u.version;
  var l = cc11001100_hook("l", c(function (e) {
      var t = cc11001100_hook("t", e.exports = cc11001100_hook("e.exports", "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), "assign"), "var-init");
      "number" == typeof __g && (__g = cc11001100_hook("__g", t, "assign"));
    }), "var-init"),
    f = cc11001100_hook("f", c(function (e) {
      var t = cc11001100_hook("t", l["__core-js_shared__"] || (l["__core-js_shared__"] = cc11001100_hook("l[\"__core-js_shared__\"]", {}, "assign")), "var-init");
      (e.exports = cc11001100_hook("e.exports", function (e, n) {
        return t[e] || (t[e] = cc11001100_hook("t[e]", void 0 !== n ? n : {}, "assign"));
      }, "assign"))("versions", []).push({
        version: cc11001100_hook("version", u.version, "object-key-init"),
        mode: cc11001100_hook("mode", "global", "object-key-init"),
        copyright: cc11001100_hook("copyright", "© 2020 Denis Pushkarev (zloirock.ru)", "object-key-init")
      });
    }), "var-init"),
    p = cc11001100_hook("p", 0, "var-init"),
    h = cc11001100_hook("h", Math.random(), "var-init"),
    d = function (e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++p + h).toString(36));
    },
    g = cc11001100_hook("g", c(function (e) {
      var t = cc11001100_hook("t", f("wks"), "var-init"),
        n = cc11001100_hook("n", l.Symbol, "var-init"),
        r = cc11001100_hook("r", "function" == typeof n, "var-init");
      (e.exports = cc11001100_hook("e.exports", function (e) {
        return t[e] || (t[e] = cc11001100_hook("t[e]", r && n[e] || (r ? n : d)("Symbol." + e), "assign"));
      }, "assign")).store = cc11001100_hook("(e.exports = function (e) {\n  return t[e] || (t[e] = r && n[e] || (r ? n : d)(\"Symbol.\" + e));\n}).store", t, "assign");
    }), "var-init"),
    v = cc11001100_hook("v", g("toStringTag"), "var-init"),
    m = cc11001100_hook("m", "Arguments" == a(function () {
      return arguments;
    }()), "var-init"),
    E = function (e) {
      var t, n, r;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = cc11001100_hook("n", function (e, t) {
        try {
          return e[t];
        } catch (e) {}
      }(t = cc11001100_hook("t", Object(e), "assign"), v), "assign")) ? n : m ? a(t) : "Object" == (r = cc11001100_hook("r", a(t), "assign")) && "function" == typeof t.callee ? "Arguments" : r;
    },
    y = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    S = function (e) {
      if (!y(e)) throw TypeError(e + " is not an object!");
      return e;
    },
    T = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    w = cc11001100_hook("w", !T(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7;
        }
      }).a;
    }), "var-init"),
    C = cc11001100_hook("C", l.document, "var-init"),
    A = cc11001100_hook("A", y(C) && y(C.createElement), "var-init"),
    b = function (e) {
      return A ? C.createElement(e) : {};
    },
    I = cc11001100_hook("I", !w && !T(function () {
      return 7 != Object.defineProperty(b("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    }), "var-init"),
    P = function (e, t) {
      if (!y(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = cc11001100_hook("n", e.toString, "assign")) && !y(r = cc11001100_hook("r", n.call(e), "assign"))) return r;
      if ("function" == typeof (n = cc11001100_hook("n", e.valueOf, "assign")) && !y(r = cc11001100_hook("r", n.call(e), "assign"))) return r;
      if (!t && "function" == typeof (n = cc11001100_hook("n", e.toString, "assign")) && !y(r = cc11001100_hook("r", n.call(e), "assign"))) return r;
      throw TypeError("Can't convert object to primitive value");
    },
    O = cc11001100_hook("O", Object.defineProperty, "var-init"),
    _ = cc11001100_hook("_", {
      f: cc11001100_hook("f", w ? Object.defineProperty : function (e, t, n) {
        if (S(e), t = cc11001100_hook("t", P(t, !0), "assign"), S(n), I) try {
          return O(e, t, n);
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = cc11001100_hook("e[t]", n.value, "assign")), e;
      }, "object-key-init")
    }, "var-init"),
    N = function (e, t) {
      return {
        enumerable: cc11001100_hook("enumerable", !(1 & e), "object-key-init"),
        configurable: cc11001100_hook("configurable", !(2 & e), "object-key-init"),
        writable: cc11001100_hook("writable", !(4 & e), "object-key-init"),
        value: cc11001100_hook("value", t, "object-key-init")
      };
    },
    R = cc11001100_hook("R", w ? function (e, t, n) {
      return _.f(e, t, N(1, n));
    } : function (e, t, n) {
      return e[t] = cc11001100_hook("e[t]", n, "assign"), e;
    }, "var-init"),
    L = cc11001100_hook("L", {}.hasOwnProperty, "var-init"),
    $ = function (e, t) {
      return L.call(e, t);
    },
    D = cc11001100_hook("D", f("native-function-to-string", Function.toString), "var-init"),
    k = cc11001100_hook("k", c(function (e) {
      var t = cc11001100_hook("t", d("src"), "var-init"),
        n = cc11001100_hook("n", ("" + D).split("toString"), "var-init");
      u.inspectSource = cc11001100_hook("u.inspectSource", function (e) {
        return D.call(e);
      }, "assign"), (e.exports = cc11001100_hook("e.exports", function (e, r, i, o) {
        var a = cc11001100_hook("a", "function" == typeof i, "var-init");
        a && ($(i, "name") || R(i, "name", r)), e[r] !== i && (a && ($(i, t) || R(i, t, e[r] ? "" + e[r] : n.join(String(r)))), e === l ? e[r] = cc11001100_hook("e[r]", i, "assign") : o ? e[r] ? e[r] = cc11001100_hook("e[r]", i, "assign") : R(e, r, i) : (delete e[r], R(e, r, i)));
      }, "assign"))(Function.prototype, "toString", function () {
        return "function" == typeof this && this[t] || D.call(this);
      });
    }), "var-init"),
    U = cc11001100_hook("U", {}, "var-init");
  U[g("toStringTag")] = cc11001100_hook("U[g(\"toStringTag\")]", "z", "assign"), U + "" != "[object z]" && k(Object.prototype, "toString", function () {
    return "[object " + E(this) + "]";
  }, !0);
  var M = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    },
    x = function (e, t, n) {
      if (M(e), void 0 === t) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    V = function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = cc11001100_hook("s", e & V.F, "var-init"),
        c = cc11001100_hook("c", e & V.G, "var-init"),
        f = cc11001100_hook("f", e & V.S, "var-init"),
        p = cc11001100_hook("p", e & V.P, "var-init"),
        h = cc11001100_hook("h", e & V.B, "var-init"),
        d = cc11001100_hook("d", c ? l : f ? l[t] || (l[t] = cc11001100_hook("l[t]", {}, "assign")) : (l[t] || {}).prototype, "var-init"),
        g = cc11001100_hook("g", c ? u : u[t] || (u[t] = cc11001100_hook("u[t]", {}, "assign")), "var-init"),
        v = cc11001100_hook("v", g.prototype || (g.prototype = cc11001100_hook("g.prototype", {}, "assign")), "var-init");
      for (r in c && (n = cc11001100_hook("n", t, "assign")), n) o = cc11001100_hook("o", ((i = cc11001100_hook("i", !s && d && void 0 !== d[r], "assign")) ? d : n)[r], "assign"), a = cc11001100_hook("a", h && i ? x(o, l) : p && "function" == typeof o ? x(Function.call, o) : o, "assign"), d && k(d, r, o, e & V.U), g[r] != o && R(g, r, a), p && v[r] != o && (v[r] = cc11001100_hook("v[r]", o, "assign"));
    };
  l.core = cc11001100_hook("l.core", u, "assign"), V.F = cc11001100_hook("V.F", 1, "assign"), V.G = cc11001100_hook("V.G", 2, "assign"), V.S = cc11001100_hook("V.S", 4, "assign"), V.P = cc11001100_hook("V.P", 8, "assign"), V.B = cc11001100_hook("V.B", 16, "assign"), V.W = cc11001100_hook("V.W", 32, "assign"), V.U = cc11001100_hook("V.U", 64, "assign"), V.R = cc11001100_hook("V.R", 128, "assign");
  var H,
    F,
    j,
    B = cc11001100_hook("B", V, "var-init"),
    G = function (e, t, n, r) {
      if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
      return e;
    },
    W = function (e, t, n, r) {
      try {
        return r ? t(S(n)[0], n[1]) : t(n);
      } catch (t) {
        var i = cc11001100_hook("i", e.return, "var-init");
        throw void 0 !== i && S(i.call(e)), t;
      }
    },
    Y = cc11001100_hook("Y", {}, "var-init"),
    K = cc11001100_hook("K", g("iterator"), "var-init"),
    q = cc11001100_hook("q", Array.prototype, "var-init"),
    z = function (e) {
      return void 0 !== e && (Y.Array === e || q[K] === e);
    },
    J = cc11001100_hook("J", Math.ceil, "var-init"),
    X = cc11001100_hook("X", Math.floor, "var-init"),
    Q = function (e) {
      return isNaN(e = cc11001100_hook("e", +e, "assign")) ? 0 : (e > 0 ? X : J)(e);
    },
    Z = cc11001100_hook("Z", Math.min, "var-init"),
    ee = function (e) {
      return e > 0 ? Z(Q(e), 9007199254740991) : 0;
    },
    te = cc11001100_hook("te", g("iterator"), "var-init"),
    ne = cc11001100_hook("ne", u.getIteratorMethod = cc11001100_hook("u.getIteratorMethod", function (e) {
      if (null != e) return e[te] || e["@@iterator"] || Y[E(e)];
    }, "assign"), "var-init"),
    re = cc11001100_hook("re", c(function (e) {
      var t = cc11001100_hook("t", {}, "var-init"),
        n = cc11001100_hook("n", {}, "var-init"),
        r = cc11001100_hook("r", e.exports = cc11001100_hook("e.exports", function (e, r, i, o, a) {
          var s,
            c,
            u,
            l,
            f = cc11001100_hook("f", a ? function () {
              return e;
            } : ne(e), "var-init"),
            p = cc11001100_hook("p", x(i, o, r ? 2 : 1), "var-init"),
            h = cc11001100_hook("h", 0, "var-init");
          if ("function" != typeof f) throw TypeError(e + " is not iterable!");
          if (z(f)) {
            for (s = cc11001100_hook("s", ee(e.length), "assign"); s > h; h++) if ((l = cc11001100_hook("l", r ? p(S(c = cc11001100_hook("c", e[h], "assign"))[0], c[1]) : p(e[h]), "assign")) === t || l === n) return l;
          } else for (u = cc11001100_hook("u", f.call(e), "assign"); !(c = cc11001100_hook("c", u.next(), "assign")).done;) if ((l = cc11001100_hook("l", W(u, p, c.value, r), "assign")) === t || l === n) return l;
        }, "assign"), "var-init");
      r.BREAK = cc11001100_hook("r.BREAK", t, "assign"), r.RETURN = cc11001100_hook("r.RETURN", n, "assign");
    }), "var-init"),
    ie = cc11001100_hook("ie", g("species"), "var-init"),
    oe = function (e, t) {
      var n,
        r = cc11001100_hook("r", S(e).constructor, "var-init");
      return void 0 === r || null == (n = cc11001100_hook("n", S(r)[ie], "assign")) ? t : M(n);
    },
    ae = function (e, t, n) {
      var r = cc11001100_hook("r", void 0 === n, "var-init");
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n);
        case 1:
          return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    },
    se = cc11001100_hook("se", l.document, "var-init"),
    ce = cc11001100_hook("ce", se && se.documentElement, "var-init"),
    ue = cc11001100_hook("ue", l.process, "var-init"),
    le = cc11001100_hook("le", l.setImmediate, "var-init"),
    fe = cc11001100_hook("fe", l.clearImmediate, "var-init"),
    pe = cc11001100_hook("pe", l.MessageChannel, "var-init"),
    he = cc11001100_hook("he", l.Dispatch, "var-init"),
    de = cc11001100_hook("de", 0, "var-init"),
    ge = cc11001100_hook("ge", {}, "var-init"),
    ve = function () {
      var e = cc11001100_hook("e", +this, "var-init");
      if (ge.hasOwnProperty(e)) {
        var t = cc11001100_hook("t", ge[e], "var-init");
        delete ge[e], t();
      }
    },
    me = function (e) {
      ve.call(e.data);
    };
  le && fe || (le = cc11001100_hook("le", function (e) {
    for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 1, "var-init"); arguments.length > n;) t.push(arguments[n++]);
    return ge[++de] = cc11001100_hook("ge[++de]", function () {
      ae("function" == typeof e ? e : Function(e), t);
    }, "assign"), H(de), de;
  }, "assign"), fe = cc11001100_hook("fe", function (e) {
    delete ge[e];
  }, "assign"), "process" == a(ue) ? H = cc11001100_hook("H", function (e) {
    ue.nextTick(x(ve, e, 1));
  }, "assign") : he && he.now ? H = cc11001100_hook("H", function (e) {
    he.now(x(ve, e, 1));
  }, "assign") : pe ? (j = cc11001100_hook("j", (F = cc11001100_hook("F", new pe(), "assign")).port2, "assign"), F.port1.onmessage = cc11001100_hook("F.port1.onmessage", me, "assign"), H = cc11001100_hook("H", x(j.postMessage, j, 1), "assign")) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (H = cc11001100_hook("H", function (e) {
    l.postMessage(e + "", "*");
  }, "assign"), l.addEventListener("message", me, !1)) : H = cc11001100_hook("H", "onreadystatechange" in b("script") ? function (e) {
    ce.appendChild(b("script")).onreadystatechange = cc11001100_hook("ce.appendChild(b(\"script\")).onreadystatechange", function () {
      ce.removeChild(this), ve.call(e);
    }, "assign");
  } : function (e) {
    setTimeout(x(ve, e, 1), 0);
  }, "assign"));
  var Ee = cc11001100_hook("Ee", {
      set: cc11001100_hook("set", le, "object-key-init"),
      clear: cc11001100_hook("clear", fe, "object-key-init")
    }, "var-init"),
    ye = cc11001100_hook("ye", Ee.set, "var-init"),
    Se = cc11001100_hook("Se", l.MutationObserver || l.WebKitMutationObserver, "var-init"),
    Te = cc11001100_hook("Te", l.process, "var-init"),
    we = cc11001100_hook("we", l.Promise, "var-init"),
    Ce = cc11001100_hook("Ce", "process" == a(Te), "var-init");
  function Ae(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t, n;
    this.promise = cc11001100_hook("this.promise", new e(function (e, r) {
      if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
      t = cc11001100_hook("t", e, "assign"), n = cc11001100_hook("n", r, "assign");
    }), "assign"), this.resolve = cc11001100_hook("this.resolve", M(t), "assign"), this.reject = cc11001100_hook("this.reject", M(n), "assign");
  }
  var be = cc11001100_hook("be", {
      f: function (e) {
        return new Ae(e);
      }
    }, "var-init"),
    Ie = function (e) {
      try {
        return {
          e: cc11001100_hook("e", !1, "object-key-init"),
          v: cc11001100_hook("v", e(), "object-key-init")
        };
      } catch (e) {
        return {
          e: cc11001100_hook("e", !0, "object-key-init"),
          v: cc11001100_hook("v", e, "object-key-init")
        };
      }
    },
    Pe = cc11001100_hook("Pe", l.navigator, "var-init"),
    Oe = cc11001100_hook("Oe", Pe && Pe.userAgent || "", "var-init"),
    _e = function (e, t, n) {
      for (var r in t) k(e, r, t[r], n);
      return e;
    },
    Ne = cc11001100_hook("Ne", _.f, "var-init"),
    Re = cc11001100_hook("Re", g("toStringTag"), "var-init"),
    Le = function (e, t, n) {
      e && !$(e = cc11001100_hook("e", n ? e : e.prototype, "assign"), Re) && Ne(e, Re, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        value: cc11001100_hook("value", t, "object-key-init")
      });
    },
    $e = cc11001100_hook("$e", g("species"), "var-init"),
    De = function (e) {
      var t = cc11001100_hook("t", l[e], "var-init");
      w && t && !t[$e] && _.f(t, $e, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        get: function () {
          return this;
        }
      });
    },
    ke = cc11001100_hook("ke", g("iterator"), "var-init"),
    Ue = cc11001100_hook("Ue", !1, "var-init");
  try {
    var Me = cc11001100_hook("Me", [7][ke](), "var-init");
    Me.return = cc11001100_hook("Me.return", function () {
      Ue = cc11001100_hook("Ue", !0, "assign");
    }, "assign"), Array.from(Me, function () {
      throw 2;
    });
  } catch (tc) {}
  var xe,
    Ve,
    He,
    Fe,
    je = function (e, t) {
      if (!t && !Ue) return !1;
      var n = cc11001100_hook("n", !1, "var-init");
      try {
        var r = cc11001100_hook("r", [7], "var-init"),
          i = cc11001100_hook("i", r[ke](), "var-init");
        i.next = cc11001100_hook("i.next", function () {
          return {
            done: cc11001100_hook("done", n = cc11001100_hook("n", !0, "assign"), "object-key-init")
          };
        }, "assign"), r[ke] = cc11001100_hook("r[ke]", function () {
          return i;
        }, "assign"), e(r);
      } catch (e) {}
      return n;
    },
    Be = cc11001100_hook("Be", Ee.set, "var-init"),
    Ge = cc11001100_hook("Ge", function () {
      var e,
        t,
        n,
        r = function () {
          var r, i;
          for (Ce && (r = cc11001100_hook("r", Te.domain, "assign")) && r.exit(); e;) {
            i = cc11001100_hook("i", e.fn, "assign"), e = cc11001100_hook("e", e.next, "assign");
            try {
              i();
            } catch (r) {
              throw e ? n() : t = cc11001100_hook("t", void 0, "assign"), r;
            }
          }
          t = cc11001100_hook("t", void 0, "assign"), r && r.enter();
        };
      if (Ce) n = cc11001100_hook("n", function () {
        Te.nextTick(r);
      }, "assign");else if (!Se || l.navigator && l.navigator.standalone) {
        if (we && we.resolve) {
          var i = cc11001100_hook("i", we.resolve(void 0), "var-init");
          n = cc11001100_hook("n", function () {
            i.then(r);
          }, "assign");
        } else n = cc11001100_hook("n", function () {
          ye.call(l, r);
        }, "assign");
      } else {
        var o = cc11001100_hook("o", !0, "var-init"),
          a = cc11001100_hook("a", document.createTextNode(""), "var-init");
        new Se(r).observe(a, {
          characterData: cc11001100_hook("characterData", !0, "object-key-init")
        }), n = cc11001100_hook("n", function () {
          a.data = cc11001100_hook("a.data", o = cc11001100_hook("o", !o, "assign"), "assign");
        }, "assign");
      }
      return function (r) {
        var i = cc11001100_hook("i", {
          fn: cc11001100_hook("fn", r, "object-key-init"),
          next: cc11001100_hook("next", void 0, "object-key-init")
        }, "var-init");
        t && (t.next = cc11001100_hook("t.next", i, "assign")), e || (e = cc11001100_hook("e", i, "assign"), n()), t = cc11001100_hook("t", i, "assign");
      };
    }(), "var-init"),
    We = cc11001100_hook("We", l.TypeError, "var-init"),
    Ye = cc11001100_hook("Ye", l.process, "var-init"),
    Ke = cc11001100_hook("Ke", Ye && Ye.versions, "var-init"),
    qe = cc11001100_hook("qe", Ke && Ke.v8 || "", "var-init"),
    ze = cc11001100_hook("ze", l.Promise, "var-init"),
    Je = cc11001100_hook("Je", "process" == E(Ye), "var-init"),
    Xe = function () {},
    Qe = cc11001100_hook("Qe", Ve = cc11001100_hook("Ve", be.f, "assign"), "var-init"),
    Ze = cc11001100_hook("Ze", !!function () {
      try {
        var e = cc11001100_hook("e", ze.resolve(1), "var-init"),
          t = cc11001100_hook("t", (e.constructor = cc11001100_hook("e.constructor", {}, "assign"))[g("species")] = cc11001100_hook("(e.constructor = {})[g(\"species\")]", function (e) {
            e(Xe, Xe);
          }, "assign"), "var-init");
        return (Je || "function" == typeof PromiseRejectionEvent) && e.then(Xe) instanceof t && 0 !== qe.indexOf("6.6") && -1 === Oe.indexOf("Chrome/66");
      } catch (e) {}
    }(), "var-init"),
    et = function (e) {
      var t;
      return !(!y(e) || "function" != typeof (t = cc11001100_hook("t", e.then, "assign"))) && t;
    },
    tt = function (e, t) {
      if (!e._n) {
        e._n = cc11001100_hook("e._n", !0, "assign");
        var n = cc11001100_hook("n", e._c, "var-init");
        Ge(function () {
          for (var r = cc11001100_hook("r", e._v, "var-init"), i = cc11001100_hook("i", 1 == e._s, "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = function (t) {
              var n,
                o,
                a,
                s = cc11001100_hook("s", i ? t.ok : t.fail, "var-init"),
                c = cc11001100_hook("c", t.resolve, "var-init"),
                u = cc11001100_hook("u", t.reject, "var-init"),
                l = cc11001100_hook("l", t.domain, "var-init");
              try {
                s ? (i || (2 == e._h && it(e), e._h = cc11001100_hook("e._h", 1, "assign")), !0 === s ? n = cc11001100_hook("n", r, "assign") : (l && l.enter(), n = cc11001100_hook("n", s(r), "assign"), l && (l.exit(), a = cc11001100_hook("a", !0, "assign"))), n === t.promise ? u(We("Promise-chain cycle")) : (o = cc11001100_hook("o", et(n), "assign")) ? o.call(n, c, u) : c(n)) : u(r);
              } catch (e) {
                l && !a && l.exit(), u(e);
              }
            }; n.length > o;) a(n[o++]);
          e._c = cc11001100_hook("e._c", [], "assign"), e._n = cc11001100_hook("e._n", !1, "assign"), t && !e._h && nt(e);
        });
      }
    },
    nt = function (e) {
      Be.call(l, function () {
        var t,
          n,
          r,
          i = cc11001100_hook("i", e._v, "var-init"),
          o = cc11001100_hook("o", rt(e), "var-init");
        if (o && (t = cc11001100_hook("t", Ie(function () {
          Je ? Ye.emit("unhandledRejection", i, e) : (n = cc11001100_hook("n", l.onunhandledrejection, "assign")) ? n({
            promise: cc11001100_hook("promise", e, "object-key-init"),
            reason: cc11001100_hook("reason", i, "object-key-init")
          }) : (r = cc11001100_hook("r", l.console, "assign")) && r.error && r.error("Unhandled promise rejection", i);
        }), "assign"), e._h = cc11001100_hook("e._h", Je || rt(e) ? 2 : 1, "assign")), e._a = cc11001100_hook("e._a", void 0, "assign"), o && t.e) throw t.v;
      });
    },
    rt = function (e) {
      return 1 !== e._h && 0 === (e._a || e._c).length;
    },
    it = function (e) {
      Be.call(l, function () {
        var t;
        Je ? Ye.emit("rejectionHandled", e) : (t = cc11001100_hook("t", l.onrejectionhandled, "assign")) && t({
          promise: cc11001100_hook("promise", e, "object-key-init"),
          reason: cc11001100_hook("reason", e._v, "object-key-init")
        });
      });
    },
    ot = function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      t._d || (t._d = cc11001100_hook("t._d", !0, "assign"), (t = cc11001100_hook("t", t._w || t, "assign"))._v = cc11001100_hook("(t = t._w || t)._v", e, "assign"), t._s = cc11001100_hook("t._s", 2, "assign"), t._a || (t._a = cc11001100_hook("t._a", t._c.slice(), "assign")), tt(t, !0));
    },
    at = function (e) {
      var t,
        n = cc11001100_hook("n", this, "var-init");
      if (!n._d) {
        n._d = cc11001100_hook("n._d", !0, "assign"), n = cc11001100_hook("n", n._w || n, "assign");
        try {
          if (n === e) throw We("Promise can't be resolved itself");
          (t = cc11001100_hook("t", et(e), "assign")) ? Ge(function () {
            var r = cc11001100_hook("r", {
              _w: cc11001100_hook("_w", n, "object-key-init"),
              _d: cc11001100_hook("_d", !1, "object-key-init")
            }, "var-init");
            try {
              t.call(e, x(at, r, 1), x(ot, r, 1));
            } catch (e) {
              ot.call(r, e);
            }
          }) : (n._v = cc11001100_hook("n._v", e, "assign"), n._s = cc11001100_hook("n._s", 1, "assign"), tt(n, !1));
        } catch (e) {
          ot.call({
            _w: cc11001100_hook("_w", n, "object-key-init"),
            _d: cc11001100_hook("_d", !1, "object-key-init")
          }, e);
        }
      }
    };
  Ze || (ze = cc11001100_hook("ze", function (e) {
    G(this, ze, "Promise", "_h"), M(e), xe.call(this);
    try {
      e(x(at, this, 1), x(ot, this, 1));
    } catch (e) {
      ot.call(this, e);
    }
  }, "assign"), (xe = cc11001100_hook("xe", function (e) {
    this._c = cc11001100_hook("this._c", [], "assign"), this._a = cc11001100_hook("this._a", void 0, "assign"), this._s = cc11001100_hook("this._s", 0, "assign"), this._d = cc11001100_hook("this._d", !1, "assign"), this._v = cc11001100_hook("this._v", void 0, "assign"), this._h = cc11001100_hook("this._h", 0, "assign"), this._n = cc11001100_hook("this._n", !1, "assign");
  }, "assign")).prototype = cc11001100_hook("(xe = function (e) {\n  this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;\n}).prototype", _e(ze.prototype, {
    then: function (e, t) {
      var n = cc11001100_hook("n", Qe(oe(this, ze)), "var-init");
      return n.ok = cc11001100_hook("n.ok", "function" != typeof e || e, "assign"), n.fail = cc11001100_hook("n.fail", "function" == typeof t && t, "assign"), n.domain = cc11001100_hook("n.domain", Je ? Ye.domain : void 0, "assign"), this._c.push(n), this._a && this._a.push(n), this._s && tt(this, !1), n.promise;
    },
    catch: function (e) {
      return this.then(void 0, e);
    }
  }), "assign"), He = cc11001100_hook("He", function () {
    var e = cc11001100_hook("e", new xe(), "var-init");
    this.promise = cc11001100_hook("this.promise", e, "assign"), this.resolve = cc11001100_hook("this.resolve", x(at, e, 1), "assign"), this.reject = cc11001100_hook("this.reject", x(ot, e, 1), "assign");
  }, "assign"), be.f = cc11001100_hook("be.f", Qe = cc11001100_hook("Qe", function (e) {
    return e === ze || e === Fe ? new He(e) : Ve(e);
  }, "assign"), "assign")), B(B.G + B.W + B.F * !Ze, {
    Promise: cc11001100_hook("Promise", ze, "object-key-init")
  }), Le(ze, "Promise"), De("Promise"), Fe = cc11001100_hook("Fe", u.Promise, "assign"), B(B.S + B.F * !Ze, "Promise", {
    reject: function (e) {
      var t = cc11001100_hook("t", Qe(this), "var-init");
      return (0, t.reject)(e), t.promise;
    }
  }), B(B.S + B.F * !Ze, "Promise", {
    resolve: function (e) {
      return function (e, t) {
        if (S(e), y(t) && t.constructor === e) return t;
        var n = cc11001100_hook("n", be.f(e), "var-init");
        return (0, n.resolve)(t), n.promise;
      }(this, e);
    }
  }), B(B.S + B.F * !(Ze && je(function (e) {
    ze.all(e).catch(Xe);
  })), "Promise", {
    all: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", Qe(t), "var-init"),
        r = cc11001100_hook("r", n.resolve, "var-init"),
        i = cc11001100_hook("i", n.reject, "var-init"),
        o = cc11001100_hook("o", Ie(function () {
          var n = cc11001100_hook("n", [], "var-init"),
            o = cc11001100_hook("o", 0, "var-init"),
            a = cc11001100_hook("a", 1, "var-init");
          re(e, !1, function (e) {
            var s = cc11001100_hook("s", o++, "var-init"),
              c = cc11001100_hook("c", !1, "var-init");
            n.push(void 0), a++, t.resolve(e).then(function (e) {
              c || (c = cc11001100_hook("c", !0, "assign"), n[s] = cc11001100_hook("n[s]", e, "assign"), --a || r(n));
            }, i);
          }), --a || r(n);
        }), "var-init");
      return o.e && i(o.v), n.promise;
    },
    race: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", Qe(t), "var-init"),
        r = cc11001100_hook("r", n.reject, "var-init"),
        i = cc11001100_hook("i", Ie(function () {
          re(e, !1, function (e) {
            t.resolve(e).then(n.resolve, r);
          });
        }), "var-init");
      return i.e && r(i.v), n.promise;
    }
  });
  var st = cc11001100_hook("st", Math.floor, "var-init");
  B(B.S, "Number", {
    isInteger: function (e) {
      return !y(e) && isFinite(e) && st(e) === e;
    }
  });
  var ct = cc11001100_hook("ct", {
      f: cc11001100_hook("f", {}.propertyIsEnumerable, "object-key-init")
    }, "var-init"),
    ut = cc11001100_hook("ut", Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return "String" == a(e) ? e.split("") : Object(e);
    }, "var-init"),
    lt = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    },
    ft = function (e) {
      return ut(lt(e));
    },
    pt = cc11001100_hook("pt", Object.getOwnPropertyDescriptor, "var-init"),
    ht = cc11001100_hook("ht", {
      f: cc11001100_hook("f", w ? pt : function (e, t) {
        if (e = cc11001100_hook("e", ft(e), "assign"), t = cc11001100_hook("t", P(t, !0), "assign"), I) try {
          return pt(e, t);
        } catch (e) {}
        if ($(e, t)) return N(!ct.f.call(e, t), e[t]);
      }, "object-key-init")
    }, "var-init"),
    dt = function (e, t) {
      if (S(e), !y(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
    },
    gt = cc11001100_hook("gt", {
      set: cc11001100_hook("set", Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, n) {
        try {
          (n = cc11001100_hook("n", x(Function.call, ht.f(Object.prototype, "__proto__").set, 2), "assign"))(e, []), t = cc11001100_hook("t", !(e instanceof Array), "assign");
        } catch (e) {
          t = cc11001100_hook("t", !0, "assign");
        }
        return function (e, r) {
          return dt(e, r), t ? e.__proto__ = cc11001100_hook("e.__proto__", r, "assign") : n(e, r), e;
        };
      }({}, !1) : void 0), "object-key-init"),
      check: cc11001100_hook("check", dt, "object-key-init")
    }.set, "var-init"),
    vt = function (e, t, n) {
      var r,
        i = cc11001100_hook("i", t.constructor, "var-init");
      return i !== n && "function" == typeof i && (r = cc11001100_hook("r", i.prototype, "assign")) !== n.prototype && y(r) && gt && gt(e, r), e;
    },
    mt = cc11001100_hook("mt", Math.max, "var-init"),
    Et = cc11001100_hook("Et", Math.min, "var-init"),
    yt = function (e, t) {
      return (e = cc11001100_hook("e", Q(e), "assign")) < 0 ? mt(e + t, 0) : Et(e, t);
    },
    St = function (e) {
      return function (t, n, r) {
        var i,
          o = cc11001100_hook("o", ft(t), "var-init"),
          a = cc11001100_hook("a", ee(o.length), "var-init"),
          s = cc11001100_hook("s", yt(r, a), "var-init");
        if (e && n != n) {
          for (; a > s;) if ((i = cc11001100_hook("i", o[s++], "assign")) != i) return !0;
        } else for (; a > s; s++) if ((e || s in o) && o[s] === n) return e || s || 0;
        return !e && -1;
      };
    },
    Tt = cc11001100_hook("Tt", f("keys"), "var-init"),
    wt = function (e) {
      return Tt[e] || (Tt[e] = cc11001100_hook("Tt[e]", d(e), "assign"));
    },
    Ct = cc11001100_hook("Ct", St(!1), "var-init"),
    At = cc11001100_hook("At", wt("IE_PROTO"), "var-init"),
    bt = function (e, t) {
      var n,
        r = cc11001100_hook("r", ft(e), "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", [], "var-init");
      for (n in r) n != At && $(r, n) && o.push(n);
      for (; t.length > i;) $(r, n = cc11001100_hook("n", t[i++], "assign")) && (~Ct(o, n) || o.push(n));
      return o;
    },
    It = cc11001100_hook("It", "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), "var-init"),
    Pt = cc11001100_hook("Pt", It.concat("length", "prototype"), "var-init"),
    Ot = cc11001100_hook("Ot", {
      f: cc11001100_hook("f", Object.getOwnPropertyNames || function (e) {
        return bt(e, Pt);
      }, "object-key-init")
    }, "var-init"),
    _t = cc11001100_hook("_t", "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff", "var-init"),
    Nt = cc11001100_hook("Nt", "[" + _t + "]", "var-init"),
    Rt = cc11001100_hook("Rt", RegExp("^" + Nt + Nt + "*"), "var-init"),
    Lt = cc11001100_hook("Lt", RegExp(Nt + Nt + "*$"), "var-init"),
    $t = function (e, t, n) {
      var r = cc11001100_hook("r", {}, "var-init"),
        i = cc11001100_hook("i", T(function () {
          return !!_t[e]() || "​" != "​"[e]();
        }), "var-init"),
        o = cc11001100_hook("o", r[e] = cc11001100_hook("r[e]", i ? t(Dt) : _t[e], "assign"), "var-init");
      n && (r[n] = cc11001100_hook("r[n]", o, "assign")), B(B.P + B.F * i, "String", r);
    },
    Dt = cc11001100_hook("Dt", $t.trim = cc11001100_hook("$t.trim", function (e, t) {
      return e = cc11001100_hook("e", String(lt(e)), "assign"), 1 & t && (e = cc11001100_hook("e", e.replace(Rt, ""), "assign")), 2 & t && (e = cc11001100_hook("e", e.replace(Lt, ""), "assign")), e;
    }, "assign"), "var-init"),
    kt = cc11001100_hook("kt", $t, "var-init"),
    Ut = cc11001100_hook("Ut", Object.keys || function (e) {
      return bt(e, It);
    }, "var-init"),
    Mt = cc11001100_hook("Mt", w ? Object.defineProperties : function (e, t) {
      S(e);
      for (var n, r = cc11001100_hook("r", Ut(t), "var-init"), i = cc11001100_hook("i", r.length, "var-init"), o = cc11001100_hook("o", 0, "var-init"); i > o;) _.f(e, n = cc11001100_hook("n", r[o++], "assign"), t[n]);
      return e;
    }, "var-init"),
    xt = cc11001100_hook("xt", wt("IE_PROTO"), "var-init"),
    Vt = function () {},
    Ht = function () {
      var e,
        t = cc11001100_hook("t", b("iframe"), "var-init"),
        n = cc11001100_hook("n", It.length, "var-init");
      for (t.style.display = cc11001100_hook("t.style.display", "none", "assign"), ce.appendChild(t), t.src = cc11001100_hook("t.src", "javascript:", "assign"), (e = cc11001100_hook("e", t.contentWindow.document, "assign")).open(), e.write("<script>document.F=Object<\/script>"), e.close(), Ht = cc11001100_hook("Ht", e.F, "assign"); n--;) delete Ht.prototype[It[n]];
      return Ht();
    },
    Ft = cc11001100_hook("Ft", Object.create || function (e, t) {
      var n;
      return null !== e ? (Vt.prototype = cc11001100_hook("Vt.prototype", S(e), "assign"), n = cc11001100_hook("n", new Vt(), "assign"), Vt.prototype = cc11001100_hook("Vt.prototype", null, "assign"), n[xt] = cc11001100_hook("n[xt]", e, "assign")) : n = cc11001100_hook("n", Ht(), "assign"), void 0 === t ? n : Mt(n, t);
    }, "var-init"),
    jt = cc11001100_hook("jt", Ot.f, "var-init"),
    Bt = cc11001100_hook("Bt", ht.f, "var-init"),
    Gt = cc11001100_hook("Gt", _.f, "var-init"),
    Wt = cc11001100_hook("Wt", kt.trim, "var-init"),
    Yt = cc11001100_hook("Yt", l.Number, "var-init"),
    Kt = cc11001100_hook("Kt", Yt, "var-init"),
    qt = cc11001100_hook("qt", Yt.prototype, "var-init"),
    zt = cc11001100_hook("zt", "Number" == a(Ft(qt)), "var-init"),
    Jt = cc11001100_hook("Jt", "trim" in String.prototype, "var-init"),
    Xt = function (e) {
      var t = cc11001100_hook("t", P(e, !1), "var-init");
      if ("string" == typeof t && t.length > 2) {
        var n,
          r,
          i,
          o = cc11001100_hook("o", (t = cc11001100_hook("t", Jt ? t.trim() : Wt(t, 3), "assign")).charCodeAt(0), "var-init");
        if (43 === o || 45 === o) {
          if (88 === (n = cc11001100_hook("n", t.charCodeAt(2), "assign")) || 120 === n) return NaN;
        } else if (48 === o) {
          switch (t.charCodeAt(1)) {
            case 66:
            case 98:
              r = cc11001100_hook("r", 2, "assign"), i = cc11001100_hook("i", 49, "assign");
              break;
            case 79:
            case 111:
              r = cc11001100_hook("r", 8, "assign"), i = cc11001100_hook("i", 55, "assign");
              break;
            default:
              return +t;
          }
          for (var a, s = cc11001100_hook("s", t.slice(2), "var-init"), c = cc11001100_hook("c", 0, "var-init"), u = cc11001100_hook("u", s.length, "var-init"); c < u; c++) if ((a = cc11001100_hook("a", s.charCodeAt(c), "assign")) < 48 || a > i) return NaN;
          return parseInt(s, r);
        }
      }
      return +t;
    };
  if (!Yt(" 0o1") || !Yt("0b1") || Yt("+0x1")) {
    Yt = cc11001100_hook("Yt", function (e) {
      var t = cc11001100_hook("t", arguments.length < 1 ? 0 : e, "var-init"),
        n = cc11001100_hook("n", this, "var-init");
      return n instanceof Yt && (zt ? T(function () {
        qt.valueOf.call(n);
      }) : "Number" != a(n)) ? vt(new Kt(Xt(t)), n, Yt) : Xt(t);
    }, "assign");
    for (var Qt, Zt = cc11001100_hook("Zt", w ? jt(Kt) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), "var-init"), en = cc11001100_hook("en", 0, "var-init"); Zt.length > en; en++) $(Kt, Qt = cc11001100_hook("Qt", Zt[en], "assign")) && !$(Yt, Qt) && Gt(Yt, Qt, Bt(Kt, Qt));
    Yt.prototype = cc11001100_hook("Yt.prototype", qt, "assign"), qt.constructor = cc11001100_hook("qt.constructor", Yt, "assign"), k(l, "Number", Yt);
  }
  var tn = function (e) {
      return Object(lt(e));
    },
    nn = cc11001100_hook("nn", Array.isArray || function (e) {
      return "Array" == a(e);
    }, "var-init"),
    rn = cc11001100_hook("rn", g("species"), "var-init"),
    on = function (e, t) {
      return new (function (e) {
        var t;
        return nn(e) && ("function" != typeof (t = cc11001100_hook("t", e.constructor, "assign")) || t !== Array && !nn(t.prototype) || (t = cc11001100_hook("t", void 0, "assign")), y(t) && null === (t = cc11001100_hook("t", t[rn], "assign")) && (t = cc11001100_hook("t", void 0, "assign"))), void 0 === t ? Array : t;
      }(e))(t);
    },
    an = function (e, t) {
      var n = cc11001100_hook("n", 1 == e, "var-init"),
        r = cc11001100_hook("r", 2 == e, "var-init"),
        i = cc11001100_hook("i", 3 == e, "var-init"),
        o = cc11001100_hook("o", 4 == e, "var-init"),
        a = cc11001100_hook("a", 6 == e, "var-init"),
        s = cc11001100_hook("s", 5 == e || a, "var-init"),
        c = cc11001100_hook("c", t || on, "var-init");
      return function (t, u, l) {
        for (var f, p, h = cc11001100_hook("h", tn(t), "var-init"), d = cc11001100_hook("d", ut(h), "var-init"), g = cc11001100_hook("g", x(u, l, 3), "var-init"), v = cc11001100_hook("v", ee(d.length), "var-init"), m = cc11001100_hook("m", 0, "var-init"), E = cc11001100_hook("E", n ? c(t, v) : r ? c(t, 0) : void 0, "var-init"); v > m; m++) if ((s || m in d) && (p = cc11001100_hook("p", g(f = cc11001100_hook("f", d[m], "assign"), m, h), "assign"), e)) if (n) E[m] = cc11001100_hook("E[m]", p, "assign");else if (p) switch (e) {
          case 3:
            return !0;
          case 5:
            return f;
          case 6:
            return m;
          case 2:
            E.push(f);
        } else if (o) return !1;
        return a ? -1 : i || o ? o : E;
      };
    },
    sn = function (e, t) {
      return !!e && T(function () {
        t ? e.call(null, function () {}, 1) : e.call(null);
      });
    },
    cn = cc11001100_hook("cn", an(3), "var-init");
  B(B.P + B.F * !sn([].some, !0), "Array", {
    some: function (e) {
      return cn(this, e, arguments[1]);
    }
  });
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
  
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
  
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
  var un = function (e, t) {
    return (un = cc11001100_hook("un", Object.setPrototypeOf || {
      __proto__: cc11001100_hook("__proto__", [], "object-key-init")
    } instanceof Array && function (e, t) {
      e.__proto__ = cc11001100_hook("e.__proto__", t, "assign");
    } || function (e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = cc11001100_hook("e[n]", t[n], "assign"));
    }, "assign"))(e, t);
  };
  function ln(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    function n() {
      this.constructor = cc11001100_hook("this.constructor", e, "assign");
    }
    un(e, t), e.prototype = cc11001100_hook("e.prototype", null === t ? Object.create(t) : (n.prototype = cc11001100_hook("n.prototype", t.prototype, "assign"), new n()), "assign");
  }
  function fn(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return new (n || (n = cc11001100_hook("n", Promise, "assign")))(function (i, o) {
      function a(e) {
        cc11001100_hook("e", e, "function-parameter");
        try {
          c(r.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        cc11001100_hook("e", e, "function-parameter");
        try {
          c(r.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function c(e) {
        cc11001100_hook("e", e, "function-parameter");
        e.done ? i(e.value) : new n(function (t) {
          t(e.value);
        }).then(a, s);
      }
      c((r = cc11001100_hook("r", r.apply(e, t || []), "assign")).next());
    });
  }
  function pn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r,
      i,
      o,
      a = cc11001100_hook("a", {
        label: cc11001100_hook("label", 0, "object-key-init"),
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: cc11001100_hook("trys", [], "object-key-init"),
        ops: cc11001100_hook("ops", [], "object-key-init")
      }, "var-init");
    return o = cc11001100_hook("o", {
      next: cc11001100_hook("next", s(0), "object-key-init"),
      throw: cc11001100_hook("throw", s(1), "object-key-init"),
      return: cc11001100_hook("return", s(2), "object-key-init")
    }, "assign"), "function" == typeof Symbol && (o[Symbol.iterator] = cc11001100_hook("o[Symbol.iterator]", function () {
      return this;
    }, "assign")), o;
    function s(o) {
      cc11001100_hook("o", o, "function-parameter");
      return function (s) {
        return function (o) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; a;) try {
            if (n = cc11001100_hook("n", 1, "assign"), r && (i = cc11001100_hook("i", 2 & o[0] ? r.return : o[0] ? r.throw || ((i = cc11001100_hook("i", r.return, "assign")) && i.call(r), 0) : r.next, "assign")) && !(i = cc11001100_hook("i", i.call(r, o[1]), "assign")).done) return i;
            switch (r = cc11001100_hook("r", 0, "assign"), i && (o = cc11001100_hook("o", [2 & o[0], i.value], "assign")), o[0]) {
              case 0:
              case 1:
                i = cc11001100_hook("i", o, "assign");
                break;
              case 4:
                return a.label++, {
                  value: cc11001100_hook("value", o[1], "object-key-init"),
                  done: cc11001100_hook("done", !1, "object-key-init")
                };
              case 5:
                a.label++, r = cc11001100_hook("r", o[1], "assign"), o = cc11001100_hook("o", [0], "assign");
                continue;
              case 7:
                o = cc11001100_hook("o", a.ops.pop(), "assign"), a.trys.pop();
                continue;
              default:
                if (!(i = cc11001100_hook("i", a.trys, "assign"), (i = cc11001100_hook("i", i.length > 0 && i[i.length - 1], "assign")) || 6 !== o[0] && 2 !== o[0])) {
                  a = cc11001100_hook("a", 0, "assign");
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = cc11001100_hook("a.label", o[1], "assign");
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = cc11001100_hook("a.label", i[1], "assign"), i = cc11001100_hook("i", o, "assign");
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = cc11001100_hook("a.label", i[2], "assign"), a.ops.push(o);
                  break;
                }
                i[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            o = cc11001100_hook("o", t.call(e, a), "assign");
          } catch (e) {
            o = cc11001100_hook("o", [6, e], "assign"), r = cc11001100_hook("r", 0, "assign");
          } finally {
            n = cc11001100_hook("n", i = cc11001100_hook("i", 0, "assign"), "assign");
          }
          if (5 & o[0]) throw o[1];
          return {
            value: cc11001100_hook("value", o[0] ? o[1] : void 0, "object-key-init"),
            done: cc11001100_hook("done", !0, "object-key-init")
          };
        }([o, s]);
      };
    }
  }
  function hn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (hn = cc11001100_hook("hn", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, "assign"))(e);
  }
  !function (e, t) {
    var n = cc11001100_hook("n", (u.Object || {})[e] || Object[e], "var-init"),
      r = cc11001100_hook("r", {}, "var-init");
    r[e] = cc11001100_hook("r[e]", t(n), "assign"), B(B.S + B.F * T(function () {
      n(1);
    }), "Object", r);
  }("keys", function () {
    return function (e) {
      return Ut(tn(e));
    };
  });
  var dn = cc11001100_hook("dn", [].slice, "var-init");
  B(B.P + B.F * T(function () {
    ce && dn.call(ce);
  }), "Array", {
    slice: function (e, t) {
      var n = cc11001100_hook("n", ee(this.length), "var-init"),
        r = cc11001100_hook("r", a(this), "var-init");
      if (t = cc11001100_hook("t", void 0 === t ? n : t, "assign"), "Array" == r) return dn.call(this, e, t);
      for (var i = cc11001100_hook("i", yt(e, n), "var-init"), o = cc11001100_hook("o", yt(t, n), "var-init"), s = cc11001100_hook("s", ee(o - i), "var-init"), c = cc11001100_hook("c", new Array(s), "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < s; u++) c[u] = cc11001100_hook("c[u]", "String" == r ? this.charAt(i + u) : this[i + u], "assign");
      return c;
    }
  });
  var gn = cc11001100_hook("gn", an(0), "var-init"),
    vn = cc11001100_hook("vn", sn([].forEach, !0), "var-init");
  B(B.P + B.F * !vn, "Array", {
    forEach: function (e) {
      return gn(this, e, arguments[1]);
    }
  });
  var mn = cc11001100_hook("mn", St(!1), "var-init"),
    En = cc11001100_hook("En", [].indexOf, "var-init"),
    yn = cc11001100_hook("yn", !!En && 1 / [1].indexOf(1, -0) < 0, "var-init");
  B(B.P + B.F * (yn || !sn(En)), "Array", {
    indexOf: function (e) {
      return yn ? En.apply(this, arguments) || 0 : mn(this, e, arguments[1]);
    }
  });
  var Sn = cc11001100_hook("Sn", an(2), "var-init");
  B(B.P + B.F * !sn([].filter, !0), "Array", {
    filter: function (e) {
      return Sn(this, e, arguments[1]);
    }
  });
  var Tn,
    wn = cc11001100_hook("wn", ct.f, "var-init"),
    Cn = cc11001100_hook("Cn", (Tn = cc11001100_hook("Tn", !0, "assign"), function (e) {
      for (var t, n = cc11001100_hook("n", ft(e), "var-init"), r = cc11001100_hook("r", Ut(n), "var-init"), i = cc11001100_hook("i", r.length, "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", [], "var-init"); i > o;) t = cc11001100_hook("t", r[o++], "assign"), w && !wn.call(n, t) || a.push(Tn ? [t, n[t]] : n[t]);
      return a;
    }), "var-init");
  B(B.S, "Object", {
    entries: function (e) {
      return Cn(e);
    }
  });
  var An,
    bn = cc11001100_hook("bn", "header", "var-init"),
    In = cc11001100_hook("In", "events_common", "var-init"),
    Pn = cc11001100_hook("Pn", "events", "var-init"),
    On = cc11001100_hook("On", "event", "var-init"),
    _n = cc11001100_hook("_n", "debugMode", "var-init"),
    Nn = cc11001100_hook("Nn", "routePolicy", "var-init"),
    Rn = cc11001100_hook("Rn", "terminalName", "var-init"),
    Ln = cc11001100_hook("Ln", "App-Id", "var-init"),
    $n = cc11001100_hook("$n", "App-Ver", "var-init"),
    Dn = cc11001100_hook("Dn", "Sdk-Name", "var-init"),
    kn = cc11001100_hook("kn", "Device-Type", "var-init"),
    Un = cc11001100_hook("Un", "servicetag", "var-init"),
    Mn = cc11001100_hook("Mn", "Package-Name", "var-init"),
    xn = cc11001100_hook("xn", "Request-Id", "var-init"),
    Vn = cc11001100_hook("Vn", "x-hasdk-debug", "var-init"),
    Hn = cc11001100_hook("Hn", "x-hasdk-token", "var-init"),
    Fn = cc11001100_hook("Fn", "x-hasdk-log-region", "var-init"),
    jn = cc11001100_hook("jn", "x-hasdk-resourceid", "var-init"),
    Bn = cc11001100_hook("Bn", "x-hasdk-productid", "var-init"),
    Gn = cc11001100_hook("Gn", "x-hasdk-clientid", "var-init"),
    Wn = cc11001100_hook("Wn", "_openness_log_tag", "var-init"),
    Yn = cc11001100_hook("Yn", "_openness_config_tag", "var-init"),
    Kn = cc11001100_hook("Kn", "$StartType", "var-init"),
    qn = cc11001100_hook("qn", "$StartScene", "var-init"),
    zn = cc11001100_hook("zn", "$PrevActivityName", "var-init"),
    Jn = cc11001100_hook("Jn", "$PrevActivityId", "var-init"),
    Xn = cc11001100_hook("Xn", "$CurActivityName", "var-init"),
    Qn = cc11001100_hook("Qn", "$CurActivityId", "var-init"),
    Zn = cc11001100_hook("Zn", "$PrePageId", "var-init"),
    er = cc11001100_hook("er", "$CurrPageId", "var-init"),
    tr = cc11001100_hook("tr", "$UrlParams", "var-init"),
    nr = cc11001100_hook("nr", "$Duration", "var-init"),
    rr = cc11001100_hook("rr", "Edge", "var-init"),
    ir = cc11001100_hook("ir", "IE", "var-init"),
    or = cc11001100_hook("or", "Firefox", "var-init"),
    ar = cc11001100_hook("ar", "Chrome", "var-init"),
    sr = cc11001100_hook("sr", "Opera", "var-init"),
    cr = cc11001100_hook("cr", "Safari", "var-init"),
    ur = cc11001100_hook("ur", 64, "var-init"),
    lr = cc11001100_hook("lr", 100, "var-init"),
    fr = cc11001100_hook("fr", 128, "var-init"),
    pr = cc11001100_hook("pr", 256, "var-init"),
    hr = cc11001100_hook("hr", 30720, "var-init"),
    dr = cc11001100_hook("dr", 2048, "var-init"),
    gr = cc11001100_hook("gr", 100, "var-init"),
    vr = cc11001100_hook("vr", 204800, "var-init"),
    mr = cc11001100_hook("mr", 50, "var-init"),
    Er = cc11001100_hook("Er", 25, "var-init"),
    yr = cc11001100_hook("yr", /^[a-zA-Z_$][A-Za-z0-9_]*$/, "var-init"),
    Sr = cc11001100_hook("Sr", /^[a-zA-Z][A-Za-z0-9_]*$/, "var-init"),
    Tr = cc11001100_hook("Tr", /^[a-zA-Z_$][A-Za-z0-9_]*$/, "var-init"),
    wr = cc11001100_hook("wr", {
      value: cc11001100_hook("value", 5e3, "object-key-init"),
      label: cc11001100_hook("label", "5s", "object-key-init")
    }, "var-init"),
    Cr = cc11001100_hook("Cr", {
      value: cc11001100_hook("value", 18e6, "object-key-init"),
      label: cc11001100_hook("label", "5h", "object-key-init")
    }, "var-init");
  !function (e) {
    e[e.BEACON = cc11001100_hook("e.BEACON", 1, "assign")] = cc11001100_hook("e[e.BEACON = 1]", "BEACON", "assign"), e[e.AJAX = cc11001100_hook("e.AJAX", 2, "assign")] = cc11001100_hook("e[e.AJAX = 2]", "AJAX", "assign"), e[e.IMG = cc11001100_hook("e.IMG", 3, "assign")] = cc11001100_hook("e[e.IMG = 3]", "IMG", "assign"), e[e.WXREQUEST = cc11001100_hook("e.WXREQUEST", 4, "assign")] = cc11001100_hook("e[e.WXREQUEST = 4]", "WXREQUEST", "assign");
  }(An || (An = cc11001100_hook("An", {}, "assign")));
  var Ar,
    br = cc11001100_hook("br", 0, "var-init"),
    Ir = cc11001100_hook("Ir", 1, "var-init"),
    Pr = cc11001100_hook("Pr", 2, "var-init"),
    Or = cc11001100_hook("Or", 3, "var-init"),
    _r = cc11001100_hook("_r", 5, "var-init"),
    Nr = cc11001100_hook("Nr", "0", "var-init"),
    Rr = cc11001100_hook("Rr", "1", "var-init"),
    Lr = cc11001100_hook("Lr", 1, "var-init"),
    $r = cc11001100_hook("$r", 60, "var-init"),
    Dr = cc11001100_hook("Dr", 30, "var-init"),
    kr = cc11001100_hook("kr", 1e3, "var-init");
  !function (e) {
    e.AES_CBC_NETWORK = cc11001100_hook("e.AES_CBC_NETWORK", "AES_CBC_NETWORK", "assign"), e.AES_CBC_STORAGE = cc11001100_hook("e.AES_CBC_STORAGE", "AES_CBC_STORAGE", "assign");
  }(Ar || (Ar = cc11001100_hook("Ar", {}, "assign")));
  var Ur = cc11001100_hook("Ur", "HW_ha_eventSessionName", "var-init"),
    Mr = cc11001100_hook("Mr", "HW_ha_analyticsEnabled", "var-init"),
    xr = cc11001100_hook("xr", "HW_ha_restrictionEnabled", "var-init"),
    Vr = cc11001100_hook("Vr", "HW_ha_restrictionShared", "var-init"),
    Hr = cc11001100_hook("Hr", "HW_ha_isFirstRun", "var-init"),
    Fr = cc11001100_hook("Fr", {
      CN: cc11001100_hook("CN", "HW_ha_pubKeyCN", "object-key-init"),
      DE: cc11001100_hook("DE", "HW_ha_pubKeyDE", "object-key-init"),
      RU: cc11001100_hook("RU", "HW_ha_pubKeyRU", "object-key-init"),
      SG: cc11001100_hook("SG", "HW_ha_pubKeySG", "object-key-init")
    }, "var-init"),
    jr = cc11001100_hook("jr", {
      CN: cc11001100_hook("CN", "HW_ha_workKeyCN", "object-key-init"),
      DE: cc11001100_hook("DE", "HW_ha_workKeyDE", "object-key-init"),
      RU: cc11001100_hook("RU", "HW_ha_workKeyRU", "object-key-init"),
      SG: cc11001100_hook("SG", "HW_ha_workKeySG", "object-key-init")
    }, "var-init"),
    Br = cc11001100_hook("Br", {
      CREATEPAYMENTINFO: cc11001100_hook("CREATEPAYMENTINFO", "$CreatePaymentInfo", "object-key-init"),
      ADDPRODUCT2CART: cc11001100_hook("ADDPRODUCT2CART", "$AddProduct2Cart", "object-key-init"),
      ADDPRODUCT2WISHLIST: cc11001100_hook("ADDPRODUCT2WISHLIST", "$AddProduct2WishList", "object-key-init"),
      STARTAPP: cc11001100_hook("STARTAPP", "$StartApp", "object-key-init"),
      STARTCHECKOUT: cc11001100_hook("STARTCHECKOUT", "$StartCheckout", "object-key-init"),
      VIEWCAMPAIGN: cc11001100_hook("VIEWCAMPAIGN", "$ViewCampaign", "object-key-init"),
      VIEWCHECKOUTSTEP: cc11001100_hook("VIEWCHECKOUTSTEP", "$ViewCheckoutStep", "object-key-init"),
      WINVIRTUALCOIN: cc11001100_hook("WINVIRTUALCOIN", "$WinVirtualCoin", "object-key-init"),
      COMPLETEPURCHASE: cc11001100_hook("COMPLETEPURCHASE", "$CompletePurchase", "object-key-init"),
      OBTAINLEADS: cc11001100_hook("OBTAINLEADS", "$ObtainLeads", "object-key-init"),
      JOINUSERGROUP: cc11001100_hook("JOINUSERGROUP", "$JoinUserGroup", "object-key-init"),
      COMPLETELEVEL: cc11001100_hook("COMPLETELEVEL", "$CompleteLevel", "object-key-init"),
      STARTLEVEL: cc11001100_hook("STARTLEVEL", "$StartLevel", "object-key-init"),
      UPGRADELEVEL: cc11001100_hook("UPGRADELEVEL", "$UpgradeLevel", "object-key-init"),
      SIGNIN: cc11001100_hook("SIGNIN", "$SignIn", "object-key-init"),
      SIGNOUT: cc11001100_hook("SIGNOUT", "$SignOut", "object-key-init"),
      SUBMITSCORE: cc11001100_hook("SUBMITSCORE", "$SubmitScore", "object-key-init"),
      CREATEORDER: cc11001100_hook("CREATEORDER", "$CreateOrder", "object-key-init"),
      REFUNDORDER: cc11001100_hook("REFUNDORDER", "$RefundOrder", "object-key-init"),
      DELPRODUCTFROMCART: cc11001100_hook("DELPRODUCTFROMCART", "$DelProductFromCart", "object-key-init"),
      SEARCH: cc11001100_hook("SEARCH", "$Search", "object-key-init"),
      VIEWCONTENT: cc11001100_hook("VIEWCONTENT", "$ViewContent", "object-key-init"),
      UPDATECHECKOUTOPTION: cc11001100_hook("UPDATECHECKOUTOPTION", "$UpdateCheckoutOption", "object-key-init"),
      SHARECONTENT: cc11001100_hook("SHARECONTENT", "$ShareContent", "object-key-init"),
      REGISTERACCOUNT: cc11001100_hook("REGISTERACCOUNT", "$RegisterAccount", "object-key-init"),
      CONSUMEVIRTUALCOIN: cc11001100_hook("CONSUMEVIRTUALCOIN", "$ConsumeVirtualCoin", "object-key-init"),
      STARTTUTORIAL: cc11001100_hook("STARTTUTORIAL", "$StartTutorial", "object-key-init"),
      COMPLETETUTORIAL: cc11001100_hook("COMPLETETUTORIAL", "$CompleteTutorial", "object-key-init"),
      OBTAINACHIEVEMENT: cc11001100_hook("OBTAINACHIEVEMENT", "$ObtainAchievement", "object-key-init"),
      VIEWPRODUCT: cc11001100_hook("VIEWPRODUCT", "$ViewProduct", "object-key-init"),
      VIEWPRODUCTLIST: cc11001100_hook("VIEWPRODUCTLIST", "$ViewProductList", "object-key-init"),
      VIEWSEARCHRESULT: cc11001100_hook("VIEWSEARCHRESULT", "$ViewSearchResult", "object-key-init"),
      UPDATEMEMBERSHIPLEVEL: cc11001100_hook("UPDATEMEMBERSHIPLEVEL", "$UpdateMembershipLevel", "object-key-init"),
      FILTRATEPRODUCT: cc11001100_hook("FILTRATEPRODUCT", "$FiltrateProduct", "object-key-init"),
      VIEWCATEGORY: cc11001100_hook("VIEWCATEGORY", "$ViewCategory", "object-key-init"),
      UPDATEORDER: cc11001100_hook("UPDATEORDER", "$UpdateOrder", "object-key-init"),
      CANCELORDER: cc11001100_hook("CANCELORDER", "$CancelOrder", "object-key-init"),
      COMPLETEORDER: cc11001100_hook("COMPLETEORDER", "$CompleteOrder", "object-key-init"),
      CANCELCHECKOUT: cc11001100_hook("CANCELCHECKOUT", "$CancelCheckout", "object-key-init"),
      OBTAINVOUCHER: cc11001100_hook("OBTAINVOUCHER", "$ObtainVoucher", "object-key-init"),
      CONTACTCUSTOMSERVICE: cc11001100_hook("CONTACTCUSTOMSERVICE", "$ContactCustomService", "object-key-init"),
      NOVICEGUIDESTART: cc11001100_hook("NOVICEGUIDESTART", "$NoviceGuideStart", "object-key-init"),
      NOVICEGUIDEEND: cc11001100_hook("NOVICEGUIDEEND", "$NoviceGuideEnd", "object-key-init"),
      STARTGAME: cc11001100_hook("STARTGAME", "$StartGame", "object-key-init"),
      ENDGAME: cc11001100_hook("ENDGAME", "$EndGame", "object-key-init"),
      WINPROPS: cc11001100_hook("WINPROPS", "$WinProps", "object-key-init"),
      EXCHANGEGOODS: cc11001100_hook("EXCHANGEGOODS", "$ExchangeGoods", "object-key-init"),
      VIEWHOUSELIST: cc11001100_hook("VIEWHOUSELIST", "$ViewHouseList", "object-key-init"),
      VIEWHOUSEDETAIL: cc11001100_hook("VIEWHOUSEDETAIL", "$ViewHouseDetail", "object-key-init"),
      INVITE: cc11001100_hook("INVITE", "$Invite", "object-key-init"),
      RATE: cc11001100_hook("RATE", "$Rate", "object-key-init"),
      CONSUMEPROPS: cc11001100_hook("CONSUMEPROPS", "$ConsumeProps", "object-key-init"),
      ADDFRIEND: cc11001100_hook("ADDFRIEND", "$AddFriend", "object-key-init"),
      ADDBLACKLIST: cc11001100_hook("ADDBLACKLIST", "$AddBlacklist", "object-key-init"),
      VIEWFRIENDLIST: cc11001100_hook("VIEWFRIENDLIST", "$ViewFriendList", "object-key-init"),
      QUITUSERGROUP: cc11001100_hook("QUITUSERGROUP", "$QuitUserGroup", "object-key-init"),
      CREATEUSERGROUP: cc11001100_hook("CREATEUSERGROUP", "$CreateUserGroup", "object-key-init"),
      DISBANDUSERGROUP: cc11001100_hook("DISBANDUSERGROUP", "$DisbandUserGroup", "object-key-init"),
      UPGRADEUSERGROUP: cc11001100_hook("UPGRADEUSERGROUP", "$UpgradeUserGroup", "object-key-init"),
      VIEWUSERGROUP: cc11001100_hook("VIEWUSERGROUP", "$ViewUserGroup", "object-key-init"),
      JOINTEAM: cc11001100_hook("JOINTEAM", "$JoinTeam", "object-key-init"),
      SENDMESSAGE: cc11001100_hook("SENDMESSAGE", "$SendMessage", "object-key-init"),
      LEARNSKILL: cc11001100_hook("LEARNSKILL", "$LearnSkill", "object-key-init"),
      USESKILL: cc11001100_hook("USESKILL", "$UseSkill", "object-key-init"),
      GETEQUIPMENT: cc11001100_hook("GETEQUIPMENT", "$GetEquipment", "object-key-init"),
      LOSEEQUIPMENT: cc11001100_hook("LOSEEQUIPMENT", "$LoseEquipment", "object-key-init"),
      ENHANCEEQUIPMENT: cc11001100_hook("ENHANCEEQUIPMENT", "$EnhanceEquipment", "object-key-init"),
      SWITCHCLASS: cc11001100_hook("SWITCHCLASS", "$SwitchClass", "object-key-init"),
      ACCEPTTASK: cc11001100_hook("ACCEPTTASK", "$AcceptTask", "object-key-init"),
      FINISHTASK: cc11001100_hook("FINISHTASK", "$FinishTask", "object-key-init"),
      ATTENDACTIVITY: cc11001100_hook("ATTENDACTIVITY", "$AttendActivity", "object-key-init"),
      FINISHCUTSCENE: cc11001100_hook("FINISHCUTSCENE", "$FinishCutscene", "object-key-init"),
      SKIPCUTSCENE: cc11001100_hook("SKIPCUTSCENE", "$SkipCutscene", "object-key-init"),
      GETPET: cc11001100_hook("GETPET", "$GetPet", "object-key-init"),
      LOSEPET: cc11001100_hook("LOSEPET", "$LosePet", "object-key-init"),
      ENHANCEPET: cc11001100_hook("ENHANCEPET", "$EnhancePet", "object-key-init"),
      GETMOUNT: cc11001100_hook("GETMOUNT", "$GetMount", "object-key-init"),
      LOSEMOUNT: cc11001100_hook("LOSEMOUNT", "$LoseMount", "object-key-init"),
      ENHANCEMOUNT: cc11001100_hook("ENHANCEMOUNT", "$EnhanceMount", "object-key-init"),
      CREATEROLE: cc11001100_hook("CREATEROLE", "$CreateRole", "object-key-init"),
      SIGNINROLE: cc11001100_hook("SIGNINROLE", "$SignInRole", "object-key-init"),
      SIGNOUTROLE: cc11001100_hook("SIGNOUTROLE", "$SignOutRole", "object-key-init"),
      STARTBATTLE: cc11001100_hook("STARTBATTLE", "$StartBattle", "object-key-init"),
      ENDBATTLE: cc11001100_hook("ENDBATTLE", "$EndBattle", "object-key-init"),
      STARTDUNGEON: cc11001100_hook("STARTDUNGEON", "$StartDungeon", "object-key-init"),
      FINISHDUNGEON: cc11001100_hook("FINISHDUNGEON", "$FinishDungeon", "object-key-init"),
      VIEWPACKAGE: cc11001100_hook("VIEWPACKAGE", "$ViewPackage", "object-key-init"),
      REDEEM: cc11001100_hook("REDEEM", "$Redeem", "object-key-init"),
      MODIFYSETTING: cc11001100_hook("MODIFYSETTING", "$ModifySetting", "object-key-init"),
      WATCHVIDEO: cc11001100_hook("WATCHVIDEO", "$WatchVideo", "object-key-init"),
      CLICKMESSAGE: cc11001100_hook("CLICKMESSAGE", "$ClickMessage", "object-key-init"),
      DRAWCARD: cc11001100_hook("DRAWCARD", "$DrawCard", "object-key-init"),
      VIEWCARDLIST: cc11001100_hook("VIEWCARDLIST", "$ViewCardList", "object-key-init"),
      BINDACCOUNT: cc11001100_hook("BINDACCOUNT", "$BindAccount", "object-key-init"),
      STARTEXERCISE: cc11001100_hook("STARTEXERCISE", "$StartExercise", "object-key-init"),
      ENDEXERCISE: cc11001100_hook("ENDEXERCISE", "$EndExercise", "object-key-init"),
      STARTPLAYMEDIA: cc11001100_hook("STARTPLAYMEDIA", "$StartPlayMedia", "object-key-init"),
      ENDPLAYMEDIA: cc11001100_hook("ENDPLAYMEDIA", "$EndPlayMedia", "object-key-init"),
      STARTEXAMINE: cc11001100_hook("STARTEXAMINE", "$StartExamine", "object-key-init"),
      ENDEXAMINE: cc11001100_hook("ENDEXAMINE", "$EndExamine", "object-key-init"),
      CHECKIN: cc11001100_hook("CHECKIN", "$CheckIn", "object-key-init"),
      COMPENSATION: cc11001100_hook("COMPENSATION", "$Compensation", "object-key-init"),
      POST: cc11001100_hook("POST", "$Post", "object-key-init"),
      SHAREAPP: cc11001100_hook("SHAREAPP", "$ShareApp", "object-key-init"),
      BINDDEVICE: cc11001100_hook("BINDDEVICE", "$BindDevice", "object-key-init"),
      UNBINDDEVICE: cc11001100_hook("UNBINDDEVICE", "$UnBindDevice", "object-key-init"),
      RESERVEMAINTENANCE: cc11001100_hook("RESERVEMAINTENANCE", "$ReserveMaintenance", "object-key-init"),
      DEVICEMISSINGREPORT: cc11001100_hook("DEVICEMISSINGREPORT", "$DeviceMissingReport", "object-key-init"),
      MODULARCLICK: cc11001100_hook("MODULARCLICK", "$ModularClick", "object-key-init"),
      PAGEVIEW: cc11001100_hook("PAGEVIEW", "$PageView", "object-key-init"),
      STARTBOOKING: cc11001100_hook("STARTBOOKING", "$StartBooking", "object-key-init"),
      LEARNTARGET: cc11001100_hook("LEARNTARGET", "$LearnTarget", "object-key-init"),
      LANGUAGETEST: cc11001100_hook("LANGUAGETEST", "$LanguageTest", "object-key-init"),
      STARTTRAINING: cc11001100_hook("STARTTRAINING", "$StartTraining", "object-key-init"),
      ENDTRAINING: cc11001100_hook("ENDTRAINING", "$EndTraining", "object-key-init"),
      REGISTERACTIVITY: cc11001100_hook("REGISTERACTIVITY", "$RegisterActivity", "object-key-init"),
      EXITACTIVITY: cc11001100_hook("EXITACTIVITY", "$ExitActivity", "object-key-init"),
      COMPLETEACTIVITY: cc11001100_hook("COMPLETEACTIVITY", "$CompleteActivity", "object-key-init"),
      FOLLOWCONTENT: cc11001100_hook("FOLLOWCONTENT", "$FollowContent", "object-key-init"),
      ENTERACCOUNTOPENING: cc11001100_hook("ENTERACCOUNTOPENING", "$EnterAccountOpening", "object-key-init"),
      SUBMITACCOUNTOPENING: cc11001100_hook("SUBMITACCOUNTOPENING", "$SubmitAccountOpening", "object-key-init"),
      BANDCARD: cc11001100_hook("BANDCARD", "$BandCard", "object-key-init"),
      BANKTRANSFERIN: cc11001100_hook("BANKTRANSFERIN", "$BankTransferIn", "object-key-init"),
      BANKTRANSFEROUT: cc11001100_hook("BANKTRANSFEROUT", "$BankTransferOut", "object-key-init"),
      VIEWSTOCKDETAIL: cc11001100_hook("VIEWSTOCKDETAIL", "$ViewStockDetail", "object-key-init"),
      TRADESTOCKS: cc11001100_hook("TRADESTOCKS", "$TradeStocks", "object-key-init"),
      VIEWFINANCEPAGE: cc11001100_hook("VIEWFINANCEPAGE", "$ViewFinancePage", "object-key-init"),
      PURCHASEFINANCE: cc11001100_hook("PURCHASEFINANCE", "$PurchaseFinance", "object-key-init"),
      REDEMPTIONFINANCE: cc11001100_hook("REDEMPTIONFINANCE", "$RedemptionFinance", "object-key-init"),
      FUNDTRADING: cc11001100_hook("FUNDTRADING", "$FundTrading", "object-key-init"),
      FIXEDINVESTMENT: cc11001100_hook("FIXEDINVESTMENT", "$Fixedinvestment", "object-key-init"),
      APPLYNEW: cc11001100_hook("APPLYNEW", "$ApplyNew", "object-key-init"),
      VIEWINFORMATIONSECTION: cc11001100_hook("VIEWINFORMATIONSECTION", "$ViewInformationSection", "object-key-init"),
      VIEWINFORMATION: cc11001100_hook("VIEWINFORMATION", "$ViewInformation", "object-key-init"),
      DISPLAYVOUCHER: cc11001100_hook("DISPLAYVOUCHER", "$DisplayVoucher", "object-key-init"),
      BOOKCOURSE: cc11001100_hook("BOOKCOURSE", "$BookCourse", "object-key-init"),
      LEARNCOURSES: cc11001100_hook("LEARNCOURSES", "$LearnCourses", "object-key-init"),
      TRYOUT: cc11001100_hook("TRYOUT", "$Tryout", "object-key-init"),
      ANSWER: cc11001100_hook("ANSWER", "$Answer", "object-key-init"),
      VIEWFUNDPAGE: cc11001100_hook("VIEWFUNDPAGE", "$ViewFundPage", "object-key-init"),
      CLICKPURCHASE: cc11001100_hook("CLICKPURCHASE", "$ClickPurchase", "object-key-init"),
      ENABLEMEMBER: cc11001100_hook("ENABLEMEMBER", "$EnableMember", "object-key-init"),
      CANCELMEMBER: cc11001100_hook("CANCELMEMBER", "$CancelMember", "object-key-init"),
      COMMENTCONTENT: cc11001100_hook("COMMENTCONTENT", "$CommentContent", "object-key-init"),
      LIKECONTENT: cc11001100_hook("LIKECONTENT", "$LikeContent", "object-key-init"),
      DELETEPRODUCT2WISHLIST: cc11001100_hook("DELETEPRODUCT2WISHLIST", "$DeleteProduct2WishList", "object-key-init"),
      ADCLICK: cc11001100_hook("ADCLICK", "$AdClick", "object-key-init"),
      ADDISPLAY: cc11001100_hook("ADDISPLAY", "$AdDisplay", "object-key-init"),
      VIPSUC: cc11001100_hook("VIPSUC", "$VipSuc", "object-key-init"),
      REGISTERFAILED: cc11001100_hook("REGISTERFAILED", "$RegisterFailed", "object-key-init"),
      VIPCLICK: cc11001100_hook("VIPCLICK", "$VipClick", "object-key-init"),
      VIPFAILED: cc11001100_hook("VIPFAILED", "$VipFailed", "object-key-init"),
      IMPROVEINFORMATION: cc11001100_hook("IMPROVEINFORMATION", "$ImproveInformation", "object-key-init")
    }, "var-init"),
    Gr = cc11001100_hook("Gr", {
      JOINABTASK: cc11001100_hook("JOINABTASK", "$JoinABTask", "object-key-init"),
      FIRST_OPEN: cc11001100_hook("FIRST_OPEN", "$AppFirstOpen", "object-key-init"),
      ENTER_SCREEN: cc11001100_hook("ENTER_SCREEN", "$EnterScreen", "object-key-init"),
      EXIT_SCREEN: cc11001100_hook("EXIT_SCREEN", "$ExitScreen", "object-key-init"),
      ADD_QUICK_APP: cc11001100_hook("ADD_QUICK_APP", "$AddQuickApp", "object-key-init"),
      HA_NOTIFICATION_DISPLAY: cc11001100_hook("HA_NOTIFICATION_DISPLAY", "$HA_NOTIFICATION_DISPLAY", "object-key-init"),
      DisplayNotification: cc11001100_hook("DisplayNotification", "$DisplayNotification", "object-key-init"),
      HA_NOTIFICATION_CLICK: cc11001100_hook("HA_NOTIFICATION_CLICK", "$HA_NOTIFICATION_CLICK", "object-key-init"),
      ClickNotification: cc11001100_hook("ClickNotification", "$ClickNotification", "object-key-init"),
      HA_NOTIFICATION_CLEAR: cc11001100_hook("HA_NOTIFICATION_CLEAR", "$HA_NOTIFICATION_CLEAR", "object-key-init"),
      ClearNotification: cc11001100_hook("ClearNotification", "$ClearNotification", "object-key-init"),
      HA_APP_INSTALL: cc11001100_hook("HA_APP_INSTALL", "$HA_APP_INSTALL", "object-key-init"),
      InstallApp: cc11001100_hook("InstallApp", "$InstallApp", "object-key-init"),
      HA_APP_START: cc11001100_hook("HA_APP_START", "$HA_APP_START", "object-key-init"),
      LaunchApp: cc11001100_hook("LaunchApp", "$LaunchApp", "object-key-init"),
      HA_APP_UPDATE: cc11001100_hook("HA_APP_UPDATE", "$HA_APP_UPDATE", "object-key-init"),
      UpdateApp: cc11001100_hook("UpdateApp", "$UpdateApp", "object-key-init"),
      HA_FIRST_OPEN: cc11001100_hook("HA_FIRST_OPEN", "$HA_FIRST_OPEN", "object-key-init"),
      AppFirstOpen: cc11001100_hook("AppFirstOpen", "$AppFirstOpen", "object-key-init"),
      HA_SCREEN_ENTER: cc11001100_hook("HA_SCREEN_ENTER", "$HA_SCREEN_ENTER", "object-key-init"),
      EnterScreen: cc11001100_hook("EnterScreen", "$EnterScreen", "object-key-init"),
      HA_SCREEN_EXIT: cc11001100_hook("HA_SCREEN_EXIT", "$HA_SCREEN_EXIT", "object-key-init"),
      ExitScreen: cc11001100_hook("ExitScreen", "$ExitScreen", "object-key-init"),
      HA_CLEAR_DATA: cc11001100_hook("HA_CLEAR_DATA", "$HA_CLEAR_DATA", "object-key-init"),
      ClearData: cc11001100_hook("ClearData", "$ClearData", "object-key-init"),
      HA_CLEAR_CACHE: cc11001100_hook("HA_CLEAR_CACHE", "$HA_CLEAR_CACHE", "object-key-init"),
      ClearCache: cc11001100_hook("ClearCache", "$ClearCache", "object-key-init"),
      HA_APP_UNINSTALL: cc11001100_hook("HA_APP_UNINSTALL", "$HA_APP_UNINSTALL", "object-key-init"),
      UninstallApp: cc11001100_hook("UninstallApp", "$UninstallApp", "object-key-init"),
      InAppPurchase: cc11001100_hook("InAppPurchase", "$InAppPurchase", "object-key-init"),
      RequestAd: cc11001100_hook("RequestAd", "$RequestAd", "object-key-init"),
      DisplayAd: cc11001100_hook("DisplayAd", "$DisplayAd", "object-key-init"),
      ClickAd: cc11001100_hook("ClickAd", "$ClickAd", "object-key-init"),
      STOP_ANALYTICS_COLLECTION: cc11001100_hook("STOP_ANALYTICS_COLLECTION", "$StopAnalyticsCollection", "object-key-init"),
      AppError: cc11001100_hook("AppError", "$AppError", "object-key-init"),
      AppPushToken: cc11001100_hook("AppPushToken", "$AppPushToken", "object-key-init"),
      CampaignPushClick: cc11001100_hook("CampaignPushClick", "$CampaignPushClick", "object-key-init"),
      SignIn: cc11001100_hook("SignIn", "$SignIn", "object-key-init"),
      SignOut: cc11001100_hook("SignOut", "$SignOut", "object-key-init"),
      ObtainAdAward: cc11001100_hook("ObtainAdAward", "$ObtainAdAward", "object-key-init")
    }, "var-init"),
    Wr = cc11001100_hook("Wr", [Gr.SignIn, Gr.SignOut, Gr.JOINABTASK], "var-init"),
    Yr = cc11001100_hook("Yr", {}, "var-init");
  Yr[Br.WINVIRTUALCOIN] = cc11001100_hook("Yr[Br.WINVIRTUALCOIN]", {
    VIRTUALCURRNAME: cc11001100_hook("VIRTUALCURRNAME", "$VirtualCurrName", "object-key-init"),
    LEVEL: cc11001100_hook("LEVEL", "$Level", "object-key-init"),
    ENTRY: cc11001100_hook("ENTRY", "$Entry", "object-key-init")
  }, "assign"), Yr[Br.CONSUMEVIRTUALCOIN] = cc11001100_hook("Yr[Br.CONSUMEVIRTUALCOIN]", {
    VIRTUALCURRNAME: cc11001100_hook("VIRTUALCURRNAME", "$VirtualCurrName", "object-key-init"),
    LEVEL: cc11001100_hook("LEVEL", "$Level", "object-key-init"),
    ENTRY: cc11001100_hook("ENTRY", "$Entry", "object-key-init")
  }, "assign"), Yr[Br.COMPLETEPURCHASE] = cc11001100_hook("Yr[Br.COMPLETEPURCHASE]", {
    LEVEL: cc11001100_hook("LEVEL", "$Level", "object-key-init"),
    ENTRY: cc11001100_hook("ENTRY", "$Entry", "object-key-init"),
    PURCHASEENTRY: cc11001100_hook("PURCHASEENTRY", "$PurchaseEntry", "object-key-init")
  }, "assign"), Yr[Br.NOVICEGUIDEEND] = cc11001100_hook("Yr[Br.NOVICEGUIDEEND]", {
    RESULT: cc11001100_hook("RESULT", "$Result", "object-key-init")
  }, "assign"), Yr[Br.ENDGAME] = cc11001100_hook("Yr[Br.ENDGAME]", {
    RESULT: cc11001100_hook("RESULT", "$Result", "object-key-init"),
    DURATION: cc11001100_hook("DURATION", "$Duration", "object-key-init")
  }, "assign"), Yr[Br.WINPROPS] = cc11001100_hook("Yr[Br.WINPROPS]", {
    PROPS: cc11001100_hook("PROPS", "$Props", "object-key-init"),
    LEVEL: cc11001100_hook("LEVEL", "$Level", "object-key-init"),
    ENTRY: cc11001100_hook("ENTRY", "$Entry", "object-key-init"),
    QUANTITY: cc11001100_hook("QUANTITY", "$Quantity", "object-key-init")
  }, "assign"), Yr[Br.CONSUMEPROPS] = cc11001100_hook("Yr[Br.CONSUMEPROPS]", {
    PROPS: cc11001100_hook("PROPS", "$Props", "object-key-init"),
    LEVEL: cc11001100_hook("LEVEL", "$Level", "object-key-init"),
    ENTRY: cc11001100_hook("ENTRY", "$Entry", "object-key-init"),
    QUANTITY: cc11001100_hook("QUANTITY", "$Quantity", "object-key-init")
  }, "assign"), Yr[Br.ADDPRODUCT2CART] = cc11001100_hook("Yr[Br.ADDPRODUCT2CART]", {
    ORDERID: cc11001100_hook("ORDERID", "$OrderId", "object-key-init"),
    BRAND: cc11001100_hook("BRAND", "$Brand", "object-key-init"),
    CATEGORY: cc11001100_hook("CATEGORY", "$Category", "object-key-init"),
    SOURCE: cc11001100_hook("SOURCE", "$Source", "object-key-init"),
    MEDIUM: cc11001100_hook("MEDIUM", "$Medium", "object-key-init"),
    PROMOTIONNAME: cc11001100_hook("PROMOTIONNAME", "$PromotionName", "object-key-init"),
    CONTENT: cc11001100_hook("CONTENT", "$Content", "object-key-init"),
    KEYWORDS: cc11001100_hook("KEYWORDS", "$Keywords", "object-key-init"),
    MATERIALNAME: cc11001100_hook("MATERIALNAME", "$MaterialName", "object-key-init"),
    MATERIALSLOT: cc11001100_hook("MATERIALSLOT", "$MaterialSlot", "object-key-init")
  }, "assign");
  var Kr = function (e) {
      return function (t, n) {
        var r,
          i,
          o = cc11001100_hook("o", String(lt(t)), "var-init"),
          a = cc11001100_hook("a", Q(n), "var-init"),
          s = cc11001100_hook("s", o.length, "var-init");
        return a < 0 || a >= s ? e ? "" : void 0 : (r = cc11001100_hook("r", o.charCodeAt(a), "assign")) < 55296 || r > 56319 || a + 1 === s || (i = cc11001100_hook("i", o.charCodeAt(a + 1), "assign")) < 56320 || i > 57343 ? e ? o.charAt(a) : r : e ? o.slice(a, a + 2) : i - 56320 + (r - 55296 << 10) + 65536;
      };
    },
    qr = cc11001100_hook("qr", Kr(!0), "var-init"),
    zr = function (e, t, n) {
      return t + (n ? qr(e, t).length : 1);
    },
    Jr = cc11001100_hook("Jr", RegExp.prototype.exec, "var-init"),
    Xr = function (e, t) {
      var n = cc11001100_hook("n", e.exec, "var-init");
      if ("function" == typeof n) {
        var r = cc11001100_hook("r", n.call(e, t), "var-init");
        if ("object" != typeof r) throw new TypeError("RegExp exec method returned something other than an Object or null");
        return r;
      }
      if ("RegExp" !== E(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
      return Jr.call(e, t);
    },
    Qr = function () {
      var e = cc11001100_hook("e", S(this), "var-init"),
        t = cc11001100_hook("t", "", "var-init");
      return e.global && (t += cc11001100_hook("t", "g", "assign")), e.ignoreCase && (t += cc11001100_hook("t", "i", "assign")), e.multiline && (t += cc11001100_hook("t", "m", "assign")), e.unicode && (t += cc11001100_hook("t", "u", "assign")), e.sticky && (t += cc11001100_hook("t", "y", "assign")), t;
    },
    Zr = cc11001100_hook("Zr", RegExp.prototype.exec, "var-init"),
    ei = cc11001100_hook("ei", String.prototype.replace, "var-init"),
    ti = cc11001100_hook("ti", Zr, "var-init"),
    ni = cc11001100_hook("ni", function () {
      var e = cc11001100_hook("e", /a/, "var-init"),
        t = cc11001100_hook("t", /b*/g, "var-init");
      return Zr.call(e, "a"), Zr.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
    }(), "var-init"),
    ri = cc11001100_hook("ri", void 0 !== /()??/.exec("")[1], "var-init");
  (ni || ri) && (ti = cc11001100_hook("ti", function (e) {
    var t,
      n,
      r,
      i,
      o = cc11001100_hook("o", this, "var-init");
    return ri && (n = cc11001100_hook("n", new RegExp("^" + o.source + "$(?!\\s)", Qr.call(o)), "assign")), ni && (t = cc11001100_hook("t", o.lastIndex, "assign")), r = cc11001100_hook("r", Zr.call(o, e), "assign"), ni && r && (o.lastIndex = cc11001100_hook("o.lastIndex", o.global ? r.index + r[0].length : t, "assign")), ri && r && r.length > 1 && ei.call(r[0], n, function () {
      for (i = cc11001100_hook("i", 1, "assign"); i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = cc11001100_hook("r[i]", void 0, "assign"));
    }), r;
  }, "assign"));
  var ii = cc11001100_hook("ii", ti, "var-init");
  B({
    target: cc11001100_hook("target", "RegExp", "object-key-init"),
    proto: cc11001100_hook("proto", !0, "object-key-init"),
    forced: cc11001100_hook("forced", ii !== /./.exec, "object-key-init")
  }, {
    exec: cc11001100_hook("exec", ii, "object-key-init")
  });
  var oi = cc11001100_hook("oi", g("species"), "var-init"),
    ai = cc11001100_hook("ai", !T(function () {
      var e = cc11001100_hook("e", /./, "var-init");
      return e.exec = cc11001100_hook("e.exec", function () {
        var e = cc11001100_hook("e", [], "var-init");
        return e.groups = cc11001100_hook("e.groups", {
          a: cc11001100_hook("a", "7", "object-key-init")
        }, "assign"), e;
      }, "assign"), "7" !== "".replace(e, "$<a>");
    }), "var-init"),
    si = cc11001100_hook("si", function () {
      var e = cc11001100_hook("e", /(?:)/, "var-init"),
        t = cc11001100_hook("t", e.exec, "var-init");
      e.exec = cc11001100_hook("e.exec", function () {
        return t.apply(this, arguments);
      }, "assign");
      var n = cc11001100_hook("n", "ab".split(e), "var-init");
      return 2 === n.length && "a" === n[0] && "b" === n[1];
    }(), "var-init"),
    ci = function (e, t, n) {
      var r = cc11001100_hook("r", g(e), "var-init"),
        i = cc11001100_hook("i", !T(function () {
          var t = cc11001100_hook("t", {}, "var-init");
          return t[r] = cc11001100_hook("t[r]", function () {
            return 7;
          }, "assign"), 7 != ""[e](t);
        }), "var-init"),
        o = cc11001100_hook("o", i ? !T(function () {
          var t = cc11001100_hook("t", !1, "var-init"),
            n = cc11001100_hook("n", /a/, "var-init");
          return n.exec = cc11001100_hook("n.exec", function () {
            return t = cc11001100_hook("t", !0, "assign"), null;
          }, "assign"), "split" === e && (n.constructor = cc11001100_hook("n.constructor", {}, "assign"), n.constructor[oi] = cc11001100_hook("n.constructor[oi]", function () {
            return n;
          }, "assign")), n[r](""), !t;
        }) : void 0, "var-init");
      if (!i || !o || "replace" === e && !ai || "split" === e && !si) {
        var a = cc11001100_hook("a", /./[r], "var-init"),
          s = cc11001100_hook("s", n(lt, r, ""[e], function (e, t, n, r, o) {
            return t.exec === ii ? i && !o ? {
              done: cc11001100_hook("done", !0, "object-key-init"),
              value: cc11001100_hook("value", a.call(t, n, r), "object-key-init")
            } : {
              done: cc11001100_hook("done", !0, "object-key-init"),
              value: cc11001100_hook("value", e.call(n, t, r), "object-key-init")
            } : {
              done: cc11001100_hook("done", !1, "object-key-init")
            };
          }), "var-init"),
          c = cc11001100_hook("c", s[0], "var-init"),
          u = cc11001100_hook("u", s[1], "var-init");
        k(String.prototype, e, c), R(RegExp.prototype, r, 2 == t ? function (e, t) {
          return u.call(e, this, t);
        } : function (e) {
          return u.call(e, this);
        });
      }
    },
    ui = cc11001100_hook("ui", Math.max, "var-init"),
    li = cc11001100_hook("li", Math.min, "var-init"),
    fi = cc11001100_hook("fi", Math.floor, "var-init"),
    pi = cc11001100_hook("pi", /\$([$&`']|\d\d?|<[^>]*>)/g, "var-init"),
    hi = cc11001100_hook("hi", /\$([$&`']|\d\d?)/g, "var-init");
  ci("replace", 2, function (e, t, n, r) {
    return [function (r, i) {
      var o = cc11001100_hook("o", e(this), "var-init"),
        a = cc11001100_hook("a", null == r ? void 0 : r[t], "var-init");
      return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i);
    }, function (e, t) {
      var o = cc11001100_hook("o", r(n, e, this, t), "var-init");
      if (o.done) return o.value;
      var a = cc11001100_hook("a", S(e), "var-init"),
        s = cc11001100_hook("s", String(this), "var-init"),
        c = cc11001100_hook("c", "function" == typeof t, "var-init");
      c || (t = cc11001100_hook("t", String(t), "assign"));
      var u = cc11001100_hook("u", a.global, "var-init");
      if (u) {
        var l = cc11001100_hook("l", a.unicode, "var-init");
        a.lastIndex = cc11001100_hook("a.lastIndex", 0, "assign");
      }
      for (var f = cc11001100_hook("f", [], "var-init");;) {
        var p = cc11001100_hook("p", Xr(a, s), "var-init");
        if (null === p) break;
        if (f.push(p), !u) break;
        "" === String(p[0]) && (a.lastIndex = cc11001100_hook("a.lastIndex", zr(s, ee(a.lastIndex), l), "assign"));
      }
      for (var h, d = cc11001100_hook("d", "", "var-init"), g = cc11001100_hook("g", 0, "var-init"), v = cc11001100_hook("v", 0, "var-init"); v < f.length; v++) {
        p = cc11001100_hook("p", f[v], "assign");
        for (var m = cc11001100_hook("m", String(p[0]), "var-init"), E = cc11001100_hook("E", ui(li(Q(p.index), s.length), 0), "var-init"), y = cc11001100_hook("y", [], "var-init"), T = cc11001100_hook("T", 1, "var-init"); T < p.length; T++) y.push(void 0 === (h = cc11001100_hook("h", p[T], "assign")) ? h : String(h));
        var w = cc11001100_hook("w", p.groups, "var-init");
        if (c) {
          var C = cc11001100_hook("C", [m].concat(y, E, s), "var-init");
          void 0 !== w && C.push(w);
          var A = cc11001100_hook("A", String(t.apply(void 0, C)), "var-init");
        } else A = cc11001100_hook("A", i(m, s, E, y, w, t), "assign");
        E >= g && (d += cc11001100_hook("d", s.slice(g, E) + A, "assign"), g = cc11001100_hook("g", E + m.length, "assign"));
      }
      return d + s.slice(g);
    }];
    function i(e, t, r, i, o, a) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      var s = cc11001100_hook("s", r + e.length, "var-init"),
        c = cc11001100_hook("c", i.length, "var-init"),
        u = cc11001100_hook("u", hi, "var-init");
      return void 0 !== o && (o = cc11001100_hook("o", tn(o), "assign"), u = cc11001100_hook("u", pi, "assign")), n.call(a, u, function (n, a) {
        var u;
        switch (a.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return t.slice(0, r);
          case "'":
            return t.slice(s);
          case "<":
            u = cc11001100_hook("u", o[a.slice(1, -1)], "assign");
            break;
          default:
            var l = cc11001100_hook("l", +a, "var-init");
            if (0 === l) return n;
            if (l > c) {
              var f = cc11001100_hook("f", fi(l / 10), "var-init");
              return 0 === f ? n : f <= c ? void 0 === i[f - 1] ? a.charAt(1) : i[f - 1] + a.charAt(1) : n;
            }
            u = cc11001100_hook("u", i[l - 1], "assign");
        }
        return void 0 === u ? "" : u;
      });
    }
  });
  var di = cc11001100_hook("di", g("match"), "var-init"),
    gi = function (e) {
      var t;
      return y(e) && (void 0 !== (t = cc11001100_hook("t", e[di], "assign")) ? !!t : "RegExp" == a(e));
    },
    vi = cc11001100_hook("vi", Math.min, "var-init"),
    mi = cc11001100_hook("mi", [].push, "var-init"),
    Ei = cc11001100_hook("Ei", "length", "var-init"),
    yi = cc11001100_hook("yi", !T(function () {
      RegExp(4294967295, "y");
    }), "var-init");
  ci("split", 2, function (e, t, n, r) {
    var i;
    return i = cc11001100_hook("i", "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[Ei] || 2 != "ab".split(/(?:ab)*/)[Ei] || 4 != ".".split(/(.?)(.?)/)[Ei] || ".".split(/()()/)[Ei] > 1 || "".split(/.?/)[Ei] ? function (e, t) {
      var r = cc11001100_hook("r", String(this), "var-init");
      if (void 0 === e && 0 === t) return [];
      if (!gi(e)) return n.call(r, e, t);
      for (var i, o, a, s = cc11001100_hook("s", [], "var-init"), c = cc11001100_hook("c", (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), "var-init"), u = cc11001100_hook("u", 0, "var-init"), l = cc11001100_hook("l", void 0 === t ? 4294967295 : t >>> 0, "var-init"), f = cc11001100_hook("f", new RegExp(e.source, c + "g"), "var-init"); (i = cc11001100_hook("i", ii.call(f, r), "assign")) && !((o = cc11001100_hook("o", f.lastIndex, "assign")) > u && (s.push(r.slice(u, i.index)), i[Ei] > 1 && i.index < r[Ei] && mi.apply(s, i.slice(1)), a = cc11001100_hook("a", i[0][Ei], "assign"), u = cc11001100_hook("u", o, "assign"), s[Ei] >= l));) f.lastIndex === i.index && f.lastIndex++;
      return u === r[Ei] ? !a && f.test("") || s.push("") : s.push(r.slice(u)), s[Ei] > l ? s.slice(0, l) : s;
    } : "0".split(void 0, 0)[Ei] ? function (e, t) {
      return void 0 === e && 0 === t ? [] : n.call(this, e, t);
    } : n, "assign"), [function (n, r) {
      var o = cc11001100_hook("o", e(this), "var-init"),
        a = cc11001100_hook("a", null == n ? void 0 : n[t], "var-init");
      return void 0 !== a ? a.call(n, o, r) : i.call(String(o), n, r);
    }, function (e, t) {
      var o = cc11001100_hook("o", r(i, e, this, t, i !== n), "var-init");
      if (o.done) return o.value;
      var a = cc11001100_hook("a", S(e), "var-init"),
        s = cc11001100_hook("s", String(this), "var-init"),
        c = cc11001100_hook("c", oe(a, RegExp), "var-init"),
        u = cc11001100_hook("u", a.unicode, "var-init"),
        l = cc11001100_hook("l", (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (yi ? "y" : "g"), "var-init"),
        f = cc11001100_hook("f", new c(yi ? a : "^(?:" + a.source + ")", l), "var-init"),
        p = cc11001100_hook("p", void 0 === t ? 4294967295 : t >>> 0, "var-init");
      if (0 === p) return [];
      if (0 === s.length) return null === Xr(f, s) ? [s] : [];
      for (var h = cc11001100_hook("h", 0, "var-init"), d = cc11001100_hook("d", 0, "var-init"), g = cc11001100_hook("g", [], "var-init"); d < s.length;) {
        f.lastIndex = cc11001100_hook("f.lastIndex", yi ? d : 0, "assign");
        var v,
          m = cc11001100_hook("m", Xr(f, yi ? s : s.slice(d)), "var-init");
        if (null === m || (v = cc11001100_hook("v", vi(ee(f.lastIndex + (yi ? 0 : d)), s.length), "assign")) === h) d = cc11001100_hook("d", zr(s, d, u), "assign");else {
          if (g.push(s.slice(h, d)), g.length === p) return g;
          for (var E = cc11001100_hook("E", 1, "var-init"); E <= m.length - 1; E++) if (g.push(m[E]), g.length === p) return g;
          d = cc11001100_hook("d", h = cc11001100_hook("h", v, "assign"), "assign");
        }
      }
      return g.push(s.slice(h)), g;
    }];
  });
  var Si = cc11001100_hook("Si", an(1), "var-init");
  B(B.P + B.F * !sn([].map, !0), "Array", {
    map: function (e) {
      return Si(this, e, arguments[1]);
    }
  });
  for (var Ti, wi = cc11001100_hook("wi", d("typed_array"), "var-init"), Ci = cc11001100_hook("Ci", d("view"), "var-init"), Ai = cc11001100_hook("Ai", !(!l.ArrayBuffer || !l.DataView), "var-init"), bi = cc11001100_hook("bi", Ai, "var-init"), Ii = cc11001100_hook("Ii", 0, "var-init"), Pi = cc11001100_hook("Pi", "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","), "var-init"); Ii < 9;) (Ti = cc11001100_hook("Ti", l[Pi[Ii++]], "assign")) ? (R(Ti.prototype, wi, !0), R(Ti.prototype, Ci, !0)) : bi = cc11001100_hook("bi", !1, "assign");
  var Oi = cc11001100_hook("Oi", {
      ABV: cc11001100_hook("ABV", Ai, "object-key-init"),
      CONSTR: cc11001100_hook("CONSTR", bi, "object-key-init"),
      TYPED: cc11001100_hook("TYPED", wi, "object-key-init"),
      VIEW: cc11001100_hook("VIEW", Ci, "object-key-init")
    }, "var-init"),
    _i = function (e) {
      if (void 0 === e) return 0;
      var t = cc11001100_hook("t", Q(e), "var-init"),
        n = cc11001100_hook("n", ee(t), "var-init");
      if (t !== n) throw RangeError("Wrong length!");
      return n;
    },
    Ni = function (e) {
      for (var t = cc11001100_hook("t", tn(this), "var-init"), n = cc11001100_hook("n", ee(t.length), "var-init"), r = cc11001100_hook("r", arguments.length, "var-init"), i = cc11001100_hook("i", yt(r > 1 ? arguments[1] : void 0, n), "var-init"), o = cc11001100_hook("o", r > 2 ? arguments[2] : void 0, "var-init"), a = cc11001100_hook("a", void 0 === o ? n : yt(o, n), "var-init"); a > i;) t[i++] = cc11001100_hook("t[i++]", e, "assign");
      return t;
    },
    Ri = cc11001100_hook("Ri", c(function (e, t) {
      var n = cc11001100_hook("n", Ot.f, "var-init"),
        r = cc11001100_hook("r", _.f, "var-init"),
        i = cc11001100_hook("i", l.ArrayBuffer, "var-init"),
        o = cc11001100_hook("o", l.DataView, "var-init"),
        a = cc11001100_hook("a", l.Math, "var-init"),
        s = cc11001100_hook("s", l.RangeError, "var-init"),
        c = cc11001100_hook("c", l.Infinity, "var-init"),
        u = cc11001100_hook("u", i, "var-init"),
        f = cc11001100_hook("f", a.abs, "var-init"),
        p = cc11001100_hook("p", a.pow, "var-init"),
        h = cc11001100_hook("h", a.floor, "var-init"),
        d = cc11001100_hook("d", a.log, "var-init"),
        g = cc11001100_hook("g", a.LN2, "var-init"),
        v = cc11001100_hook("v", w ? "_b" : "buffer", "var-init"),
        m = cc11001100_hook("m", w ? "_l" : "byteLength", "var-init"),
        E = cc11001100_hook("E", w ? "_o" : "byteOffset", "var-init");
      function y(e, t, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var r,
          i,
          o,
          a = cc11001100_hook("a", new Array(n), "var-init"),
          s = cc11001100_hook("s", 8 * n - t - 1, "var-init"),
          u = cc11001100_hook("u", (1 << s) - 1, "var-init"),
          l = cc11001100_hook("l", u >> 1, "var-init"),
          v = cc11001100_hook("v", 23 === t ? p(2, -24) - p(2, -77) : 0, "var-init"),
          m = cc11001100_hook("m", 0, "var-init"),
          E = cc11001100_hook("E", e < 0 || 0 === e && 1 / e < 0 ? 1 : 0, "var-init");
        for ((e = cc11001100_hook("e", f(e), "assign")) != e || e === c ? (i = cc11001100_hook("i", e != e ? 1 : 0, "assign"), r = cc11001100_hook("r", u, "assign")) : (r = cc11001100_hook("r", h(d(e) / g), "assign"), e * (o = cc11001100_hook("o", p(2, -r), "assign")) < 1 && (r--, o *= cc11001100_hook("o", 2, "assign")), (e += cc11001100_hook("e", r + l >= 1 ? v / o : v * p(2, 1 - l), "assign")) * o >= 2 && (r++, o /= cc11001100_hook("o", 2, "assign")), r + l >= u ? (i = cc11001100_hook("i", 0, "assign"), r = cc11001100_hook("r", u, "assign")) : r + l >= 1 ? (i = cc11001100_hook("i", (e * o - 1) * p(2, t), "assign"), r += cc11001100_hook("r", l, "assign")) : (i = cc11001100_hook("i", e * p(2, l - 1) * p(2, t), "assign"), r = cc11001100_hook("r", 0, "assign"))); t >= 8; a[m++] = cc11001100_hook("a[m++]", 255 & i, "assign"), i /= cc11001100_hook("i", 256, "assign"), t -= cc11001100_hook("t", 8, "assign"));
        for (r = cc11001100_hook("r", r << t | i, "assign"), s += cc11001100_hook("s", t, "assign"); s > 0; a[m++] = cc11001100_hook("a[m++]", 255 & r, "assign"), r /= cc11001100_hook("r", 256, "assign"), s -= cc11001100_hook("s", 8, "assign"));
        return a[--m] |= cc11001100_hook("a[--m]", 128 * E, "assign"), a;
      }
      function S(e, t, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var r,
          i = cc11001100_hook("i", 8 * n - t - 1, "var-init"),
          o = cc11001100_hook("o", (1 << i) - 1, "var-init"),
          a = cc11001100_hook("a", o >> 1, "var-init"),
          s = cc11001100_hook("s", i - 7, "var-init"),
          u = cc11001100_hook("u", n - 1, "var-init"),
          l = cc11001100_hook("l", e[u--], "var-init"),
          f = cc11001100_hook("f", 127 & l, "var-init");
        for (l >>= cc11001100_hook("l", 7, "assign"); s > 0; f = cc11001100_hook("f", 256 * f + e[u], "assign"), u--, s -= cc11001100_hook("s", 8, "assign"));
        for (r = cc11001100_hook("r", f & (1 << -s) - 1, "assign"), f >>= cc11001100_hook("f", -s, "assign"), s += cc11001100_hook("s", t, "assign"); s > 0; r = cc11001100_hook("r", 256 * r + e[u], "assign"), u--, s -= cc11001100_hook("s", 8, "assign"));
        if (0 === f) f = cc11001100_hook("f", 1 - a, "assign");else {
          if (f === o) return r ? NaN : l ? -c : c;
          r += cc11001100_hook("r", p(2, t), "assign"), f -= cc11001100_hook("f", a, "assign");
        }
        return (l ? -1 : 1) * r * p(2, f - t);
      }
      function C(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
      }
      function A(e) {
        cc11001100_hook("e", e, "function-parameter");
        return [255 & e];
      }
      function b(e) {
        cc11001100_hook("e", e, "function-parameter");
        return [255 & e, e >> 8 & 255];
      }
      function I(e) {
        cc11001100_hook("e", e, "function-parameter");
        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
      }
      function P(e) {
        cc11001100_hook("e", e, "function-parameter");
        return y(e, 52, 8);
      }
      function O(e) {
        cc11001100_hook("e", e, "function-parameter");
        return y(e, 23, 4);
      }
      function N(e, t, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        r(e.prototype, t, {
          get: function () {
            return this[n];
          }
        });
      }
      function L(e, t, n, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var i = cc11001100_hook("i", _i(+n), "var-init");
        if (i + t > e[m]) throw s("Wrong index!");
        var o = cc11001100_hook("o", e[v]._b, "var-init"),
          a = cc11001100_hook("a", i + e[E], "var-init"),
          c = cc11001100_hook("c", o.slice(a, a + t), "var-init");
        return r ? c : c.reverse();
      }
      function $(e, t, n, r, i, o) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        var a = cc11001100_hook("a", _i(+n), "var-init");
        if (a + t > e[m]) throw s("Wrong index!");
        for (var c = cc11001100_hook("c", e[v]._b, "var-init"), u = cc11001100_hook("u", a + e[E], "var-init"), l = cc11001100_hook("l", r(+i), "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < t; f++) c[u + f] = cc11001100_hook("c[u + f]", l[o ? f : t - f - 1], "assign");
      }
      if (Oi.ABV) {
        if (!T(function () {
          i(1);
        }) || !T(function () {
          new i(-1);
        }) || T(function () {
          return new i(), new i(1.5), new i(NaN), "ArrayBuffer" != i.name;
        })) {
          for (var D, k = cc11001100_hook("k", (i = cc11001100_hook("i", function (e) {
              return G(this, i), new u(_i(e));
            }, "assign")).prototype = cc11001100_hook("(i = function (e) {\n  return G(this, i), new u(_i(e));\n}).prototype", u.prototype, "assign"), "var-init"), U = cc11001100_hook("U", n(u), "var-init"), M = cc11001100_hook("M", 0, "var-init"); U.length > M;) (D = cc11001100_hook("D", U[M++], "assign")) in i || R(i, D, u[D]);
          k.constructor = cc11001100_hook("k.constructor", i, "assign");
        }
        var x = cc11001100_hook("x", new o(new i(2)), "var-init"),
          V = cc11001100_hook("V", o.prototype.setInt8, "var-init");
        x.setInt8(0, 2147483648), x.setInt8(1, 2147483649), !x.getInt8(0) && x.getInt8(1) || _e(o.prototype, {
          setInt8: function (e, t) {
            V.call(this, e, t << 24 >> 24);
          },
          setUint8: function (e, t) {
            V.call(this, e, t << 24 >> 24);
          }
        }, !0);
      } else i = cc11001100_hook("i", function (e) {
        G(this, i, "ArrayBuffer");
        var t = cc11001100_hook("t", _i(e), "var-init");
        this._b = cc11001100_hook("this._b", Ni.call(new Array(t), 0), "assign"), this[m] = cc11001100_hook("this[m]", t, "assign");
      }, "assign"), o = cc11001100_hook("o", function (e, t, n) {
        G(this, o, "DataView"), G(e, i, "DataView");
        var r = cc11001100_hook("r", e[m], "var-init"),
          a = cc11001100_hook("a", Q(t), "var-init");
        if (a < 0 || a > r) throw s("Wrong offset!");
        if (a + (n = cc11001100_hook("n", void 0 === n ? r - a : ee(n), "assign")) > r) throw s("Wrong length!");
        this[v] = cc11001100_hook("this[v]", e, "assign"), this[E] = cc11001100_hook("this[E]", a, "assign"), this[m] = cc11001100_hook("this[m]", n, "assign");
      }, "assign"), w && (N(i, "byteLength", "_l"), N(o, "buffer", "_b"), N(o, "byteLength", "_l"), N(o, "byteOffset", "_o")), _e(o.prototype, {
        getInt8: function (e) {
          return L(this, 1, e)[0] << 24 >> 24;
        },
        getUint8: function (e) {
          return L(this, 1, e)[0];
        },
        getInt16: function (e) {
          var t = cc11001100_hook("t", L(this, 2, e, arguments[1]), "var-init");
          return (t[1] << 8 | t[0]) << 16 >> 16;
        },
        getUint16: function (e) {
          var t = cc11001100_hook("t", L(this, 2, e, arguments[1]), "var-init");
          return t[1] << 8 | t[0];
        },
        getInt32: function (e) {
          return C(L(this, 4, e, arguments[1]));
        },
        getUint32: function (e) {
          return C(L(this, 4, e, arguments[1])) >>> 0;
        },
        getFloat32: function (e) {
          return S(L(this, 4, e, arguments[1]), 23, 4);
        },
        getFloat64: function (e) {
          return S(L(this, 8, e, arguments[1]), 52, 8);
        },
        setInt8: function (e, t) {
          $(this, 1, e, A, t);
        },
        setUint8: function (e, t) {
          $(this, 1, e, A, t);
        },
        setInt16: function (e, t) {
          $(this, 2, e, b, t, arguments[2]);
        },
        setUint16: function (e, t) {
          $(this, 2, e, b, t, arguments[2]);
        },
        setInt32: function (e, t) {
          $(this, 4, e, I, t, arguments[2]);
        },
        setUint32: function (e, t) {
          $(this, 4, e, I, t, arguments[2]);
        },
        setFloat32: function (e, t) {
          $(this, 4, e, O, t, arguments[2]);
        },
        setFloat64: function (e, t) {
          $(this, 8, e, P, t, arguments[2]);
        }
      });
      Le(i, "ArrayBuffer"), Le(o, "DataView"), R(o.prototype, Oi.VIEW, !0), t.ArrayBuffer = cc11001100_hook("t.ArrayBuffer", i, "assign"), t.DataView = cc11001100_hook("t.DataView", o, "assign");
    }), "var-init"),
    Li = cc11001100_hook("Li", wt("IE_PROTO"), "var-init"),
    $i = cc11001100_hook("$i", Object.prototype, "var-init"),
    Di = cc11001100_hook("Di", Object.getPrototypeOf || function (e) {
      return e = cc11001100_hook("e", tn(e), "assign"), $(e, Li) ? e[Li] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? $i : null;
    }, "var-init"),
    ki = cc11001100_hook("ki", g("unscopables"), "var-init"),
    Ui = cc11001100_hook("Ui", Array.prototype, "var-init");
  null == Ui[ki] && R(Ui, ki, {});
  var Mi = function (e) {
      Ui[ki][e] = cc11001100_hook("Ui[ki][e]", !0, "assign");
    },
    xi = function (e, t) {
      return {
        value: cc11001100_hook("value", t, "object-key-init"),
        done: cc11001100_hook("done", !!e, "object-key-init")
      };
    },
    Vi = cc11001100_hook("Vi", {}, "var-init");
  R(Vi, g("iterator"), function () {
    return this;
  });
  var Hi = function (e, t, n) {
      e.prototype = cc11001100_hook("e.prototype", Ft(Vi, {
        next: cc11001100_hook("next", N(1, n), "object-key-init")
      }), "assign"), Le(e, t + " Iterator");
    },
    Fi = cc11001100_hook("Fi", g("iterator"), "var-init"),
    ji = cc11001100_hook("ji", !([].keys && "next" in [].keys()), "var-init"),
    Bi = function () {
      return this;
    },
    Gi = function (e, t, n, r, i, o, a) {
      Hi(n, t, r);
      var s,
        c,
        u,
        l = function (e) {
          if (!ji && e in d) return d[e];
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this, e);
          };
        },
        f = cc11001100_hook("f", t + " Iterator", "var-init"),
        p = cc11001100_hook("p", "values" == i, "var-init"),
        h = cc11001100_hook("h", !1, "var-init"),
        d = cc11001100_hook("d", e.prototype, "var-init"),
        g = cc11001100_hook("g", d[Fi] || d["@@iterator"] || i && d[i], "var-init"),
        v = cc11001100_hook("v", g || l(i), "var-init"),
        m = cc11001100_hook("m", i ? p ? l("entries") : v : void 0, "var-init"),
        E = cc11001100_hook("E", "Array" == t && d.entries || g, "var-init");
      if (E && (u = cc11001100_hook("u", Di(E.call(new e())), "assign")) !== Object.prototype && u.next && (Le(u, f, !0), "function" != typeof u[Fi] && R(u, Fi, Bi)), p && g && "values" !== g.name && (h = cc11001100_hook("h", !0, "assign"), v = cc11001100_hook("v", function () {
        return g.call(this);
      }, "assign")), (ji || h || !d[Fi]) && R(d, Fi, v), Y[t] = cc11001100_hook("Y[t]", v, "assign"), Y[f] = cc11001100_hook("Y[f]", Bi, "assign"), i) if (s = cc11001100_hook("s", {
        values: cc11001100_hook("values", p ? v : l("values"), "object-key-init"),
        keys: cc11001100_hook("keys", o ? v : l("keys"), "object-key-init"),
        entries: cc11001100_hook("entries", m, "object-key-init")
      }, "assign"), a) for (c in s) c in d || k(d, c, s[c]);else B(B.P + B.F * (ji || h), t, s);
      return s;
    },
    Wi = cc11001100_hook("Wi", Gi(Array, "Array", function (e, t) {
      this._t = cc11001100_hook("this._t", ft(e), "assign"), this._i = cc11001100_hook("this._i", 0, "assign"), this._k = cc11001100_hook("this._k", t, "assign");
    }, function () {
      var e = cc11001100_hook("e", this._t, "var-init"),
        t = cc11001100_hook("t", this._k, "var-init"),
        n = cc11001100_hook("n", this._i++, "var-init");
      return !e || n >= e.length ? (this._t = cc11001100_hook("this._t", void 0, "assign"), xi(1)) : xi(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
    }, "values"), "var-init");
  Y.Arguments = cc11001100_hook("Y.Arguments", Y.Array, "assign"), Mi("keys"), Mi("values"), Mi("entries");
  var Yi = cc11001100_hook("Yi", [].copyWithin || function (e, t) {
    var n = cc11001100_hook("n", tn(this), "var-init"),
      r = cc11001100_hook("r", ee(n.length), "var-init"),
      i = cc11001100_hook("i", yt(e, r), "var-init"),
      o = cc11001100_hook("o", yt(t, r), "var-init"),
      a = cc11001100_hook("a", arguments.length > 2 ? arguments[2] : void 0, "var-init"),
      s = cc11001100_hook("s", Math.min((void 0 === a ? r : yt(a, r)) - o, r - i), "var-init"),
      c = cc11001100_hook("c", 1, "var-init");
    for (o < i && i < o + s && (c = cc11001100_hook("c", -1, "assign"), o += cc11001100_hook("o", s - 1, "assign"), i += cc11001100_hook("i", s - 1, "assign")); s-- > 0;) o in n ? n[i] = cc11001100_hook("n[i]", n[o], "assign") : delete n[i], i += cc11001100_hook("i", c, "assign"), o += cc11001100_hook("o", c, "assign");
    return n;
  }, "var-init");
  c(function (e) {
    if (w) {
      var t = cc11001100_hook("t", l, "var-init"),
        n = cc11001100_hook("n", T, "var-init"),
        r = cc11001100_hook("r", B, "var-init"),
        i = cc11001100_hook("i", Oi, "var-init"),
        o = cc11001100_hook("o", Ri, "var-init"),
        a = cc11001100_hook("a", x, "var-init"),
        s = cc11001100_hook("s", G, "var-init"),
        c = cc11001100_hook("c", N, "var-init"),
        u = cc11001100_hook("u", R, "var-init"),
        f = cc11001100_hook("f", _e, "var-init"),
        p = cc11001100_hook("p", Q, "var-init"),
        h = cc11001100_hook("h", ee, "var-init"),
        v = cc11001100_hook("v", _i, "var-init"),
        m = cc11001100_hook("m", yt, "var-init"),
        S = cc11001100_hook("S", P, "var-init"),
        C = cc11001100_hook("C", $, "var-init"),
        A = cc11001100_hook("A", E, "var-init"),
        b = cc11001100_hook("b", y, "var-init"),
        I = cc11001100_hook("I", tn, "var-init"),
        O = cc11001100_hook("O", z, "var-init"),
        L = cc11001100_hook("L", Ft, "var-init"),
        D = cc11001100_hook("D", Di, "var-init"),
        k = cc11001100_hook("k", Ot.f, "var-init"),
        U = cc11001100_hook("U", ne, "var-init"),
        M = cc11001100_hook("M", d, "var-init"),
        V = cc11001100_hook("V", g, "var-init"),
        H = cc11001100_hook("H", an, "var-init"),
        F = cc11001100_hook("F", St, "var-init"),
        j = cc11001100_hook("j", oe, "var-init"),
        W = cc11001100_hook("W", Wi, "var-init"),
        K = cc11001100_hook("K", Y, "var-init"),
        q = cc11001100_hook("q", je, "var-init"),
        J = cc11001100_hook("J", De, "var-init"),
        X = cc11001100_hook("X", Ni, "var-init"),
        Z = cc11001100_hook("Z", Yi, "var-init"),
        te = cc11001100_hook("te", _, "var-init"),
        re = cc11001100_hook("re", ht, "var-init"),
        ie = cc11001100_hook("ie", te.f, "var-init"),
        ae = cc11001100_hook("ae", re.f, "var-init"),
        se = cc11001100_hook("se", t.RangeError, "var-init"),
        ce = cc11001100_hook("ce", t.TypeError, "var-init"),
        ue = cc11001100_hook("ue", t.Uint8Array, "var-init"),
        le = cc11001100_hook("le", Array.prototype, "var-init"),
        fe = cc11001100_hook("fe", o.ArrayBuffer, "var-init"),
        pe = cc11001100_hook("pe", o.DataView, "var-init"),
        he = cc11001100_hook("he", H(0), "var-init"),
        de = cc11001100_hook("de", H(2), "var-init"),
        ge = cc11001100_hook("ge", H(3), "var-init"),
        ve = cc11001100_hook("ve", H(4), "var-init"),
        me = cc11001100_hook("me", H(5), "var-init"),
        Ee = cc11001100_hook("Ee", H(6), "var-init"),
        ye = cc11001100_hook("ye", F(!0), "var-init"),
        Se = cc11001100_hook("Se", F(!1), "var-init"),
        Te = cc11001100_hook("Te", W.values, "var-init"),
        we = cc11001100_hook("we", W.keys, "var-init"),
        Ce = cc11001100_hook("Ce", W.entries, "var-init"),
        Ae = cc11001100_hook("Ae", le.lastIndexOf, "var-init"),
        be = cc11001100_hook("be", le.reduce, "var-init"),
        Ie = cc11001100_hook("Ie", le.reduceRight, "var-init"),
        Pe = cc11001100_hook("Pe", le.join, "var-init"),
        Oe = cc11001100_hook("Oe", le.sort, "var-init"),
        Ne = cc11001100_hook("Ne", le.slice, "var-init"),
        Re = cc11001100_hook("Re", le.toString, "var-init"),
        Le = cc11001100_hook("Le", le.toLocaleString, "var-init"),
        $e = cc11001100_hook("$e", V("iterator"), "var-init"),
        ke = cc11001100_hook("ke", V("toStringTag"), "var-init"),
        Ue = cc11001100_hook("Ue", M("typed_constructor"), "var-init"),
        Me = cc11001100_hook("Me", M("def_constructor"), "var-init"),
        xe = cc11001100_hook("xe", i.CONSTR, "var-init"),
        Ve = cc11001100_hook("Ve", i.TYPED, "var-init"),
        He = cc11001100_hook("He", i.VIEW, "var-init"),
        Fe = cc11001100_hook("Fe", H(1, function (e, t) {
          return Ke(j(e, e[Me]), t);
        }), "var-init"),
        Be = cc11001100_hook("Be", n(function () {
          return 1 === new ue(new Uint16Array([1]).buffer)[0];
        }), "var-init"),
        Ge = cc11001100_hook("Ge", !!ue && !!ue.prototype.set && n(function () {
          new ue(1).set({});
        }), "var-init"),
        We = function (e, t) {
          var n = cc11001100_hook("n", p(e), "var-init");
          if (n < 0 || n % t) throw se("Wrong offset!");
          return n;
        },
        Ye = function (e) {
          if (b(e) && Ve in e) return e;
          throw ce(e + " is not a typed array!");
        },
        Ke = function (e, t) {
          if (!b(e) || !(Ue in e)) throw ce("It is not a typed array constructor!");
          return new e(t);
        },
        qe = function (e, t) {
          return ze(j(e, e[Me]), t);
        },
        ze = function (e, t) {
          for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", t.length, "var-init"), i = cc11001100_hook("i", Ke(e, r), "var-init"); r > n;) i[n] = cc11001100_hook("i[n]", t[n++], "assign");
          return i;
        },
        Je = function (e, t, n) {
          ie(e, t, {
            get: function () {
              return this._d[n];
            }
          });
        },
        Xe = function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            c = cc11001100_hook("c", I(e), "var-init"),
            u = cc11001100_hook("u", arguments.length, "var-init"),
            l = cc11001100_hook("l", u > 1 ? arguments[1] : void 0, "var-init"),
            f = cc11001100_hook("f", void 0 !== l, "var-init"),
            p = cc11001100_hook("p", U(c), "var-init");
          if (null != p && !O(p)) {
            for (s = cc11001100_hook("s", p.call(c), "assign"), r = cc11001100_hook("r", [], "assign"), t = cc11001100_hook("t", 0, "assign"); !(o = cc11001100_hook("o", s.next(), "assign")).done; t++) r.push(o.value);
            c = cc11001100_hook("c", r, "assign");
          }
          for (f && u > 2 && (l = cc11001100_hook("l", a(l, arguments[2], 2), "assign")), t = cc11001100_hook("t", 0, "assign"), n = cc11001100_hook("n", h(c.length), "assign"), i = cc11001100_hook("i", Ke(this, n), "assign"); n > t; t++) i[t] = cc11001100_hook("i[t]", f ? l(c[t], t) : c[t], "assign");
          return i;
        },
        Qe = function () {
          for (var e = cc11001100_hook("e", 0, "var-init"), t = cc11001100_hook("t", arguments.length, "var-init"), n = cc11001100_hook("n", Ke(this, t), "var-init"); t > e;) n[e] = cc11001100_hook("n[e]", arguments[e++], "assign");
          return n;
        },
        Ze = cc11001100_hook("Ze", !!ue && n(function () {
          Le.call(new ue(1));
        }), "var-init"),
        et = function () {
          return Le.apply(Ze ? Ne.call(Ye(this)) : Ye(this), arguments);
        },
        tt = cc11001100_hook("tt", {
          copyWithin: function (e, t) {
            return Z.call(Ye(this), e, t, arguments.length > 2 ? arguments[2] : void 0);
          },
          every: function (e) {
            return ve(Ye(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function (e) {
            return X.apply(Ye(this), arguments);
          },
          filter: function (e) {
            return qe(this, de(Ye(this), e, arguments.length > 1 ? arguments[1] : void 0));
          },
          find: function (e) {
            return me(Ye(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          findIndex: function (e) {
            return Ee(Ye(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          forEach: function (e) {
            he(Ye(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function (e) {
            return Se(Ye(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          includes: function (e) {
            return ye(Ye(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          join: function (e) {
            return Pe.apply(Ye(this), arguments);
          },
          lastIndexOf: function (e) {
            return Ae.apply(Ye(this), arguments);
          },
          map: function (e) {
            return Fe(Ye(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          reduce: function (e) {
            return be.apply(Ye(this), arguments);
          },
          reduceRight: function (e) {
            return Ie.apply(Ye(this), arguments);
          },
          reverse: function () {
            for (var e, t = cc11001100_hook("t", Ye(this).length, "var-init"), n = cc11001100_hook("n", Math.floor(t / 2), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n;) e = cc11001100_hook("e", this[r], "assign"), this[r++] = cc11001100_hook("this[r++]", this[--t], "assign"), this[t] = cc11001100_hook("this[t]", e, "assign");
            return this;
          },
          some: function (e) {
            return ge(Ye(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function (e) {
            return Oe.call(Ye(this), e);
          },
          subarray: function (e, t) {
            var n = cc11001100_hook("n", Ye(this), "var-init"),
              r = cc11001100_hook("r", n.length, "var-init"),
              i = cc11001100_hook("i", m(e, r), "var-init");
            return new (j(n, n[Me]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, h((void 0 === t ? r : m(t, r)) - i));
          }
        }, "var-init"),
        nt = function (e, t) {
          return qe(this, Ne.call(Ye(this), e, t));
        },
        rt = function (e) {
          Ye(this);
          var t = cc11001100_hook("t", We(arguments[1], 1), "var-init"),
            n = cc11001100_hook("n", this.length, "var-init"),
            r = cc11001100_hook("r", I(e), "var-init"),
            i = cc11001100_hook("i", h(r.length), "var-init"),
            o = cc11001100_hook("o", 0, "var-init");
          if (i + t > n) throw se("Wrong length!");
          for (; o < i;) this[t + o] = cc11001100_hook("this[t + o]", r[o++], "assign");
        },
        it = cc11001100_hook("it", {
          entries: function () {
            return Ce.call(Ye(this));
          },
          keys: function () {
            return we.call(Ye(this));
          },
          values: function () {
            return Te.call(Ye(this));
          }
        }, "var-init"),
        ot = function (e, t) {
          return b(e) && e[Ve] && "symbol" != typeof t && t in e && String(+t) == String(t);
        },
        at = function (e, t) {
          return ot(e, t = cc11001100_hook("t", S(t, !0), "assign")) ? c(2, e[t]) : ae(e, t);
        },
        st = function (e, t, n) {
          return !(ot(e, t = cc11001100_hook("t", S(t, !0), "assign")) && b(n) && C(n, "value")) || C(n, "get") || C(n, "set") || n.configurable || C(n, "writable") && !n.writable || C(n, "enumerable") && !n.enumerable ? ie(e, t, n) : (e[t] = cc11001100_hook("e[t]", n.value, "assign"), e);
        };
      xe || (re.f = cc11001100_hook("re.f", at, "assign"), te.f = cc11001100_hook("te.f", st, "assign")), r(r.S + r.F * !xe, "Object", {
        getOwnPropertyDescriptor: cc11001100_hook("getOwnPropertyDescriptor", at, "object-key-init"),
        defineProperty: cc11001100_hook("defineProperty", st, "object-key-init")
      }), n(function () {
        Re.call({});
      }) && (Re = cc11001100_hook("Re", Le = cc11001100_hook("Le", function () {
        return Pe.call(this);
      }, "assign"), "assign"));
      var ct = cc11001100_hook("ct", f({}, tt), "var-init");
      f(ct, it), u(ct, $e, it.values), f(ct, {
        slice: cc11001100_hook("slice", nt, "object-key-init"),
        set: cc11001100_hook("set", rt, "object-key-init"),
        constructor: function () {},
        toString: cc11001100_hook("toString", Re, "object-key-init"),
        toLocaleString: cc11001100_hook("toLocaleString", et, "object-key-init")
      }), Je(ct, "buffer", "b"), Je(ct, "byteOffset", "o"), Je(ct, "byteLength", "l"), Je(ct, "length", "e"), ie(ct, ke, {
        get: function () {
          return this[Ve];
        }
      }), e.exports = cc11001100_hook("e.exports", function (e, o, a, c) {
        var l = cc11001100_hook("l", e + ((c = cc11001100_hook("c", !!c, "assign")) ? "Clamped" : "") + "Array", "var-init"),
          f = cc11001100_hook("f", "get" + e, "var-init"),
          p = cc11001100_hook("p", "set" + e, "var-init"),
          d = cc11001100_hook("d", t[l], "var-init"),
          g = cc11001100_hook("g", d || {}, "var-init"),
          m = cc11001100_hook("m", d && D(d), "var-init"),
          E = cc11001100_hook("E", !d || !i.ABV, "var-init"),
          y = cc11001100_hook("y", {}, "var-init"),
          S = cc11001100_hook("S", d && d.prototype, "var-init"),
          T = function (e, t) {
            ie(e, t, {
              get: function () {
                return function (e, t) {
                  var n = cc11001100_hook("n", e._d, "var-init");
                  return n.v[f](t * o + n.o, Be);
                }(this, t);
              },
              set: function (e) {
                return function (e, t, n) {
                  var r = cc11001100_hook("r", e._d, "var-init");
                  c && (n = cc11001100_hook("n", (n = cc11001100_hook("n", Math.round(n), "assign")) < 0 ? 0 : n > 255 ? 255 : 255 & n, "assign")), r.v[p](t * o + r.o, n, Be);
                }(this, t, e);
              },
              enumerable: cc11001100_hook("enumerable", !0, "object-key-init")
            });
          };
        E ? (d = cc11001100_hook("d", a(function (e, t, n, r) {
          s(e, d, l, "_d");
          var i,
            a,
            c,
            f,
            p = cc11001100_hook("p", 0, "var-init"),
            g = cc11001100_hook("g", 0, "var-init");
          if (b(t)) {
            if (!(t instanceof fe || "ArrayBuffer" == (f = cc11001100_hook("f", A(t), "assign")) || "SharedArrayBuffer" == f)) return Ve in t ? ze(d, t) : Xe.call(d, t);
            i = cc11001100_hook("i", t, "assign"), g = cc11001100_hook("g", We(n, o), "assign");
            var m = cc11001100_hook("m", t.byteLength, "var-init");
            if (void 0 === r) {
              if (m % o) throw se("Wrong length!");
              if ((a = cc11001100_hook("a", m - g, "assign")) < 0) throw se("Wrong length!");
            } else if ((a = cc11001100_hook("a", h(r) * o, "assign")) + g > m) throw se("Wrong length!");
            c = cc11001100_hook("c", a / o, "assign");
          } else c = cc11001100_hook("c", v(t), "assign"), i = cc11001100_hook("i", new fe(a = cc11001100_hook("a", c * o, "assign")), "assign");
          for (u(e, "_d", {
            b: cc11001100_hook("b", i, "object-key-init"),
            o: cc11001100_hook("o", g, "object-key-init"),
            l: cc11001100_hook("l", a, "object-key-init"),
            e: cc11001100_hook("e", c, "object-key-init"),
            v: cc11001100_hook("v", new pe(i), "object-key-init")
          }); p < c;) T(e, p++);
        }), "assign"), S = cc11001100_hook("S", d.prototype = cc11001100_hook("d.prototype", L(ct), "assign"), "assign"), u(S, "constructor", d)) : n(function () {
          d(1);
        }) && n(function () {
          new d(-1);
        }) && q(function (e) {
          new d(), new d(null), new d(1.5), new d(e);
        }, !0) || (d = cc11001100_hook("d", a(function (e, t, n, r) {
          var i;
          return s(e, d, l), b(t) ? t instanceof fe || "ArrayBuffer" == (i = cc11001100_hook("i", A(t), "assign")) || "SharedArrayBuffer" == i ? void 0 !== r ? new g(t, We(n, o), r) : void 0 !== n ? new g(t, We(n, o)) : new g(t) : Ve in t ? ze(d, t) : Xe.call(d, t) : new g(v(t));
        }), "assign"), he(m !== Function.prototype ? k(g).concat(k(m)) : k(g), function (e) {
          e in d || u(d, e, g[e]);
        }), d.prototype = cc11001100_hook("d.prototype", S, "assign"), S.constructor = cc11001100_hook("S.constructor", d, "assign"));
        var w = cc11001100_hook("w", S[$e], "var-init"),
          C = cc11001100_hook("C", !!w && ("values" == w.name || null == w.name), "var-init"),
          I = cc11001100_hook("I", it.values, "var-init");
        u(d, Ue, !0), u(S, Ve, l), u(S, He, !0), u(S, Me, d), (c ? new d(1)[ke] == l : ke in S) || ie(S, ke, {
          get: function () {
            return l;
          }
        }), y[l] = cc11001100_hook("y[l]", d, "assign"), r(r.G + r.W + r.F * (d != g), y), r(r.S, l, {
          BYTES_PER_ELEMENT: cc11001100_hook("BYTES_PER_ELEMENT", o, "object-key-init")
        }), r(r.S + r.F * n(function () {
          g.of.call(d, 1);
        }), l, {
          from: cc11001100_hook("from", Xe, "object-key-init"),
          of: cc11001100_hook("of", Qe, "object-key-init")
        }), "BYTES_PER_ELEMENT" in S || u(S, "BYTES_PER_ELEMENT", o), r(r.P, l, tt), J(l), r(r.P + r.F * Ge, l, {
          set: cc11001100_hook("set", rt, "object-key-init")
        }), r(r.P + r.F * !C, l, it), S.toString != Re && (S.toString = cc11001100_hook("S.toString", Re, "assign")), r(r.P + r.F * n(function () {
          new d(1).slice();
        }), l, {
          slice: cc11001100_hook("slice", nt, "object-key-init")
        }), r(r.P + r.F * (n(function () {
          return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString();
        }) || !n(function () {
          S.toLocaleString.call([1, 2]);
        })), l, {
          toLocaleString: cc11001100_hook("toLocaleString", et, "object-key-init")
        }), K[l] = cc11001100_hook("K[l]", C ? w : I, "assign"), C || u(S, $e, I);
      }, "assign");
    } else e.exports = cc11001100_hook("e.exports", function () {}, "assign");
  })("Uint8", 1, function (e) {
    return function (t, n, r) {
      return e(this, t, n, r);
    };
  });
  var Ki = cc11001100_hook("Ki", c(function (e) {
    var t = cc11001100_hook("t", d("meta"), "var-init"),
      n = cc11001100_hook("n", _.f, "var-init"),
      r = cc11001100_hook("r", 0, "var-init"),
      i = cc11001100_hook("i", Object.isExtensible || function () {
        return !0;
      }, "var-init"),
      o = cc11001100_hook("o", !T(function () {
        return i(Object.preventExtensions({}));
      }), "var-init"),
      a = function (e) {
        n(e, t, {
          value: {
            i: cc11001100_hook("i", "O" + ++r, "object-key-init"),
            w: {}
          }
        });
      },
      s = cc11001100_hook("s", e.exports = cc11001100_hook("e.exports", {
        KEY: cc11001100_hook("KEY", t, "object-key-init"),
        NEED: cc11001100_hook("NEED", !1, "object-key-init"),
        fastKey: function (e, n) {
          if (!y(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!$(e, t)) {
            if (!i(e)) return "F";
            if (!n) return "E";
            a(e);
          }
          return e[t].i;
        },
        getWeak: function (e, n) {
          if (!$(e, t)) {
            if (!i(e)) return !0;
            if (!n) return !1;
            a(e);
          }
          return e[t].w;
        },
        onFreeze: function (e) {
          return o && s.NEED && i(e) && !$(e, t) && a(e), e;
        }
      }, "assign"), "var-init");
  }), "var-init");
  Ki.KEY, Ki.NEED, Ki.fastKey, Ki.getWeak, Ki.onFreeze;
  var qi = cc11001100_hook("qi", {
      f: cc11001100_hook("f", g, "object-key-init")
    }, "var-init"),
    zi = cc11001100_hook("zi", _.f, "var-init"),
    Ji = function (e) {
      var t = cc11001100_hook("t", u.Symbol || (u.Symbol = cc11001100_hook("u.Symbol", l.Symbol || {}, "assign")), "var-init");
      "_" == e.charAt(0) || e in t || zi(t, e, {
        value: cc11001100_hook("value", qi.f(e), "object-key-init")
      });
    },
    Xi = cc11001100_hook("Xi", {
      f: cc11001100_hook("f", Object.getOwnPropertySymbols, "object-key-init")
    }, "var-init"),
    Qi = cc11001100_hook("Qi", Ot.f, "var-init"),
    Zi = cc11001100_hook("Zi", {}.toString, "var-init"),
    eo = cc11001100_hook("eo", "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], "var-init"),
    to = cc11001100_hook("to", {
      f: function (e) {
        return eo && "[object Window]" == Zi.call(e) ? function (e) {
          try {
            return Qi(e);
          } catch (e) {
            return eo.slice();
          }
        }(e) : Qi(ft(e));
      }
    }, "var-init"),
    no = cc11001100_hook("no", Ki.KEY, "var-init"),
    ro = cc11001100_hook("ro", ht.f, "var-init"),
    io = cc11001100_hook("io", _.f, "var-init"),
    oo = cc11001100_hook("oo", to.f, "var-init"),
    ao = cc11001100_hook("ao", l.Symbol, "var-init"),
    so = cc11001100_hook("so", l.JSON, "var-init"),
    co = cc11001100_hook("co", so && so.stringify, "var-init"),
    uo = cc11001100_hook("uo", g("_hidden"), "var-init"),
    lo = cc11001100_hook("lo", g("toPrimitive"), "var-init"),
    fo = cc11001100_hook("fo", {}.propertyIsEnumerable, "var-init"),
    po = cc11001100_hook("po", f("symbol-registry"), "var-init"),
    ho = cc11001100_hook("ho", f("symbols"), "var-init"),
    go = cc11001100_hook("go", f("op-symbols"), "var-init"),
    vo = cc11001100_hook("vo", Object.prototype, "var-init"),
    mo = cc11001100_hook("mo", "function" == typeof ao && !!Xi.f, "var-init"),
    Eo = cc11001100_hook("Eo", l.QObject, "var-init"),
    yo = cc11001100_hook("yo", !Eo || !Eo.prototype || !Eo.prototype.findChild, "var-init"),
    So = cc11001100_hook("So", w && T(function () {
      return 7 != Ft(io({}, "a", {
        get: function () {
          return io(this, "a", {
            value: cc11001100_hook("value", 7, "object-key-init")
          }).a;
        }
      })).a;
    }) ? function (e, t, n) {
      var r = cc11001100_hook("r", ro(vo, t), "var-init");
      r && delete vo[t], io(e, t, n), r && e !== vo && io(vo, t, r);
    } : io, "var-init"),
    To = function (e) {
      var t = cc11001100_hook("t", ho[e] = cc11001100_hook("ho[e]", Ft(ao.prototype), "assign"), "var-init");
      return t._k = cc11001100_hook("t._k", e, "assign"), t;
    },
    wo = cc11001100_hook("wo", mo && "symbol" == typeof ao.iterator ? function (e) {
      return "symbol" == typeof e;
    } : function (e) {
      return e instanceof ao;
    }, "var-init"),
    Co = function (e, t, n) {
      return e === vo && Co(go, t, n), S(e), t = cc11001100_hook("t", P(t, !0), "assign"), S(n), $(ho, t) ? (n.enumerable ? ($(e, uo) && e[uo][t] && (e[uo][t] = cc11001100_hook("e[uo][t]", !1, "assign")), n = cc11001100_hook("n", Ft(n, {
        enumerable: cc11001100_hook("enumerable", N(0, !1), "object-key-init")
      }), "assign")) : ($(e, uo) || io(e, uo, N(1, {})), e[uo][t] = cc11001100_hook("e[uo][t]", !0, "assign")), So(e, t, n)) : io(e, t, n);
    },
    Ao = function (e, t) {
      S(e);
      for (var n, r = cc11001100_hook("r", function (e) {
          var t = cc11001100_hook("t", Ut(e), "var-init"),
            n = cc11001100_hook("n", Xi.f, "var-init");
          if (n) for (var r, i = cc11001100_hook("i", n(e), "var-init"), o = cc11001100_hook("o", ct.f, "var-init"), a = cc11001100_hook("a", 0, "var-init"); i.length > a;) o.call(e, r = cc11001100_hook("r", i[a++], "assign")) && t.push(r);
          return t;
        }(t = cc11001100_hook("t", ft(t), "assign")), "var-init"), i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", r.length, "var-init"); o > i;) Co(e, n = cc11001100_hook("n", r[i++], "assign"), t[n]);
      return e;
    },
    bo = function (e) {
      var t = cc11001100_hook("t", fo.call(this, e = cc11001100_hook("e", P(e, !0), "assign")), "var-init");
      return !(this === vo && $(ho, e) && !$(go, e)) && (!(t || !$(this, e) || !$(ho, e) || $(this, uo) && this[uo][e]) || t);
    },
    Io = function (e, t) {
      if (e = cc11001100_hook("e", ft(e), "assign"), t = cc11001100_hook("t", P(t, !0), "assign"), e !== vo || !$(ho, t) || $(go, t)) {
        var n = cc11001100_hook("n", ro(e, t), "var-init");
        return !n || !$(ho, t) || $(e, uo) && e[uo][t] || (n.enumerable = cc11001100_hook("n.enumerable", !0, "assign")), n;
      }
    },
    Po = function (e) {
      for (var t, n = cc11001100_hook("n", oo(ft(e)), "var-init"), r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); n.length > i;) $(ho, t = cc11001100_hook("t", n[i++], "assign")) || t == uo || t == no || r.push(t);
      return r;
    },
    Oo = function (e) {
      for (var t, n = cc11001100_hook("n", e === vo, "var-init"), r = cc11001100_hook("r", oo(n ? go : ft(e)), "var-init"), i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); r.length > o;) !$(ho, t = cc11001100_hook("t", r[o++], "assign")) || n && !$(vo, t) || i.push(ho[t]);
      return i;
    };
  mo || (k((ao = cc11001100_hook("ao", function () {
    if (this instanceof ao) throw TypeError("Symbol is not a constructor!");
    var e = cc11001100_hook("e", d(arguments.length > 0 ? arguments[0] : void 0), "var-init"),
      t = function (n) {
        this === vo && t.call(go, n), $(this, uo) && $(this[uo], e) && (this[uo][e] = cc11001100_hook("this[uo][e]", !1, "assign")), So(this, e, N(1, n));
      };
    return w && yo && So(vo, e, {
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      set: cc11001100_hook("set", t, "object-key-init")
    }), To(e);
  }, "assign")).prototype, "toString", function () {
    return this._k;
  }), ht.f = cc11001100_hook("ht.f", Io, "assign"), _.f = cc11001100_hook("_.f", Co, "assign"), Ot.f = cc11001100_hook("Ot.f", to.f = cc11001100_hook("to.f", Po, "assign"), "assign"), ct.f = cc11001100_hook("ct.f", bo, "assign"), Xi.f = cc11001100_hook("Xi.f", Oo, "assign"), w && k(vo, "propertyIsEnumerable", bo, !0), qi.f = cc11001100_hook("qi.f", function (e) {
    return To(g(e));
  }, "assign")), B(B.G + B.W + B.F * !mo, {
    Symbol: cc11001100_hook("Symbol", ao, "object-key-init")
  });
  for (var _o = cc11001100_hook("_o", "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), "var-init"), No = cc11001100_hook("No", 0, "var-init"); _o.length > No;) g(_o[No++]);
  for (var Ro = cc11001100_hook("Ro", Ut(g.store), "var-init"), Lo = cc11001100_hook("Lo", 0, "var-init"); Ro.length > Lo;) Ji(Ro[Lo++]);
  B(B.S + B.F * !mo, "Symbol", {
    for: function (e) {
      return $(po, e += cc11001100_hook("e", "", "assign")) ? po[e] : po[e] = cc11001100_hook("po[e]", ao(e), "assign");
    },
    keyFor: function (e) {
      if (!wo(e)) throw TypeError(e + " is not a symbol!");
      for (var t in po) if (po[t] === e) return t;
    },
    useSetter: function () {
      yo = cc11001100_hook("yo", !0, "assign");
    },
    useSimple: function () {
      yo = cc11001100_hook("yo", !1, "assign");
    }
  }), B(B.S + B.F * !mo, "Object", {
    create: function (e, t) {
      return void 0 === t ? Ft(e) : Ao(Ft(e), t);
    },
    defineProperty: cc11001100_hook("defineProperty", Co, "object-key-init"),
    defineProperties: cc11001100_hook("defineProperties", Ao, "object-key-init"),
    getOwnPropertyDescriptor: cc11001100_hook("getOwnPropertyDescriptor", Io, "object-key-init"),
    getOwnPropertyNames: cc11001100_hook("getOwnPropertyNames", Po, "object-key-init"),
    getOwnPropertySymbols: cc11001100_hook("getOwnPropertySymbols", Oo, "object-key-init")
  });
  var $o = cc11001100_hook("$o", T(function () {
    Xi.f(1);
  }), "var-init");
  B(B.S + B.F * $o, "Object", {
    getOwnPropertySymbols: function (e) {
      return Xi.f(tn(e));
    }
  }), so && B(B.S + B.F * (!mo || T(function () {
    var e = cc11001100_hook("e", ao(), "var-init");
    return "[null]" != co([e]) || "{}" != co({
      a: cc11001100_hook("a", e, "object-key-init")
    }) || "{}" != co(Object(e));
  })), "JSON", {
    stringify: function (e) {
      for (var t, n, r = cc11001100_hook("r", [e], "var-init"), i = cc11001100_hook("i", 1, "var-init"); arguments.length > i;) r.push(arguments[i++]);
      if (n = cc11001100_hook("n", t = cc11001100_hook("t", r[1], "assign"), "assign"), (y(t) || void 0 !== e) && !wo(e)) return nn(t) || (t = cc11001100_hook("t", function (e, t) {
        if ("function" == typeof n && (t = cc11001100_hook("t", n.call(this, e, t), "assign")), !wo(t)) return t;
      }, "assign")), r[1] = cc11001100_hook("r[1]", t, "assign"), co.apply(so, r);
    }
  }), ao.prototype[lo] || R(ao.prototype, lo, ao.prototype.valueOf), Le(ao, "Symbol"), Le(Math, "Math", !0), Le(l.JSON, "JSON", !0);
  var Do = function (e, t, n) {
    t in e ? _.f(e, t, N(0, n)) : e[t] = cc11001100_hook("e[t]", n, "assign");
  };
  B(B.S + B.F * !je(function (e) {
    Array.from(e);
  }), "Array", {
    from: function (e) {
      var t,
        n,
        r,
        i,
        o = cc11001100_hook("o", tn(e), "var-init"),
        a = cc11001100_hook("a", "function" == typeof this ? this : Array, "var-init"),
        s = cc11001100_hook("s", arguments.length, "var-init"),
        c = cc11001100_hook("c", s > 1 ? arguments[1] : void 0, "var-init"),
        u = cc11001100_hook("u", void 0 !== c, "var-init"),
        l = cc11001100_hook("l", 0, "var-init"),
        f = cc11001100_hook("f", ne(o), "var-init");
      if (u && (c = cc11001100_hook("c", x(c, s > 2 ? arguments[2] : void 0, 2), "assign")), null == f || a == Array && z(f)) for (n = cc11001100_hook("n", new a(t = cc11001100_hook("t", ee(o.length), "assign")), "assign"); t > l; l++) Do(n, l, u ? c(o[l], l) : o[l]);else for (i = cc11001100_hook("i", f.call(o), "assign"), n = cc11001100_hook("n", new a(), "assign"); !(r = cc11001100_hook("r", i.next(), "assign")).done; l++) Do(n, l, u ? W(i, c, [r.value, l], !0) : r.value);
      return n.length = cc11001100_hook("n.length", l, "assign"), n;
    }
  });
  var ko = cc11001100_hook("ko", Kr(!0), "var-init");
  Gi(String, "String", function (e) {
    this._t = cc11001100_hook("this._t", String(e), "assign"), this._i = cc11001100_hook("this._i", 0, "assign");
  }, function () {
    var e,
      t = cc11001100_hook("t", this._t, "var-init"),
      n = cc11001100_hook("n", this._i, "var-init");
    return n >= t.length ? {
      value: cc11001100_hook("value", void 0, "object-key-init"),
      done: cc11001100_hook("done", !0, "object-key-init")
    } : (e = cc11001100_hook("e", ko(t, n), "assign"), this._i += cc11001100_hook("this._i", e.length, "assign"), {
      value: cc11001100_hook("value", e, "object-key-init"),
      done: cc11001100_hook("done", !1, "object-key-init")
    });
  });
  for (var Uo = cc11001100_hook("Uo", g("iterator"), "var-init"), Mo = cc11001100_hook("Mo", g("toStringTag"), "var-init"), xo = cc11001100_hook("xo", Y.Array, "var-init"), Vo = cc11001100_hook("Vo", {
      CSSRuleList: cc11001100_hook("CSSRuleList", !0, "object-key-init"),
      CSSStyleDeclaration: cc11001100_hook("CSSStyleDeclaration", !1, "object-key-init"),
      CSSValueList: cc11001100_hook("CSSValueList", !1, "object-key-init"),
      ClientRectList: cc11001100_hook("ClientRectList", !1, "object-key-init"),
      DOMRectList: cc11001100_hook("DOMRectList", !1, "object-key-init"),
      DOMStringList: cc11001100_hook("DOMStringList", !1, "object-key-init"),
      DOMTokenList: cc11001100_hook("DOMTokenList", !0, "object-key-init"),
      DataTransferItemList: cc11001100_hook("DataTransferItemList", !1, "object-key-init"),
      FileList: cc11001100_hook("FileList", !1, "object-key-init"),
      HTMLAllCollection: cc11001100_hook("HTMLAllCollection", !1, "object-key-init"),
      HTMLCollection: cc11001100_hook("HTMLCollection", !1, "object-key-init"),
      HTMLFormElement: cc11001100_hook("HTMLFormElement", !1, "object-key-init"),
      HTMLSelectElement: cc11001100_hook("HTMLSelectElement", !1, "object-key-init"),
      MediaList: cc11001100_hook("MediaList", !0, "object-key-init"),
      MimeTypeArray: cc11001100_hook("MimeTypeArray", !1, "object-key-init"),
      NamedNodeMap: cc11001100_hook("NamedNodeMap", !1, "object-key-init"),
      NodeList: cc11001100_hook("NodeList", !0, "object-key-init"),
      PaintRequestList: cc11001100_hook("PaintRequestList", !1, "object-key-init"),
      Plugin: cc11001100_hook("Plugin", !1, "object-key-init"),
      PluginArray: cc11001100_hook("PluginArray", !1, "object-key-init"),
      SVGLengthList: cc11001100_hook("SVGLengthList", !1, "object-key-init"),
      SVGNumberList: cc11001100_hook("SVGNumberList", !1, "object-key-init"),
      SVGPathSegList: cc11001100_hook("SVGPathSegList", !1, "object-key-init"),
      SVGPointList: cc11001100_hook("SVGPointList", !1, "object-key-init"),
      SVGStringList: cc11001100_hook("SVGStringList", !1, "object-key-init"),
      SVGTransformList: cc11001100_hook("SVGTransformList", !1, "object-key-init"),
      SourceBufferList: cc11001100_hook("SourceBufferList", !1, "object-key-init"),
      StyleSheetList: cc11001100_hook("StyleSheetList", !0, "object-key-init"),
      TextTrackCueList: cc11001100_hook("TextTrackCueList", !1, "object-key-init"),
      TextTrackList: cc11001100_hook("TextTrackList", !1, "object-key-init"),
      TouchList: cc11001100_hook("TouchList", !1, "object-key-init")
    }, "var-init"), Ho = cc11001100_hook("Ho", Ut(Vo), "var-init"), Fo = cc11001100_hook("Fo", 0, "var-init"); Fo < Ho.length; Fo++) {
    var jo,
      Bo = cc11001100_hook("Bo", Ho[Fo], "var-init"),
      Go = cc11001100_hook("Go", Vo[Bo], "var-init"),
      Wo = cc11001100_hook("Wo", l[Bo], "var-init"),
      Yo = cc11001100_hook("Yo", Wo && Wo.prototype, "var-init");
    if (Yo && (Yo[Uo] || R(Yo, Uo, xo), Yo[Mo] || R(Yo, Mo, Bo), Y[Bo] = cc11001100_hook("Y[Bo]", xo, "assign"), Go)) for (jo in Wi) Yo[jo] || k(Yo, jo, Wi[jo], !0);
  }
  var Ko = cc11001100_hook("Ko", Date.prototype, "var-init"),
    qo = cc11001100_hook("qo", Ko.toString, "var-init"),
    zo = cc11001100_hook("zo", Ko.getTime, "var-init");
  new Date(NaN) + "" != "Invalid Date" && k(Ko, "toString", function () {
    var e = cc11001100_hook("e", zo.call(this), "var-init");
    return e == e ? qo.call(this) : "Invalid Date";
  }), w && "g" != /./g.flags && _.f(RegExp.prototype, "flags", {
    configurable: cc11001100_hook("configurable", !0, "object-key-init"),
    get: cc11001100_hook("get", Qr, "object-key-init")
  });
  var Jo = cc11001100_hook("Jo", /./.toString, "var-init"),
    Xo = function (e) {
      k(RegExp.prototype, "toString", e, !0);
    };
  function Qo(e) {
    cc11001100_hook("e", e, "function-parameter");
    return null == e || "" === e;
  }
  function Zo(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "string" == typeof e && !Qo(e);
  }
  function ea(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (!Zo(e)) return t && t(), !1;
    for (var n = cc11001100_hook("n", !1, "var-init"), r = cc11001100_hook("r", (e = cc11001100_hook("e", e.replace(/,$/gi, ""), "assign")).split(","), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) Qo(r[i]) ? t && t(i) : 0 === i && (n = cc11001100_hook("n", !0, "assign"));
    return n;
  }
  T(function () {
    return "/a/b" != Jo.call({
      source: cc11001100_hook("source", "a", "object-key-init"),
      flags: cc11001100_hook("flags", "b", "object-key-init")
    });
  }) ? Xo(function () {
    var e = cc11001100_hook("e", S(this), "var-init");
    return "/".concat(e.source, "/", "flags" in e ? e.flags : !w && e instanceof RegExp ? Qr.call(e) : void 0);
  }) : "toString" != Jo.name && Xo(function () {
    return Jo.call(this);
  }), ci("match", 1, function (e, t, n, r) {
    return [function (n) {
      var r = cc11001100_hook("r", e(this), "var-init"),
        i = cc11001100_hook("i", null == n ? void 0 : n[t], "var-init");
      return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
    }, function (e) {
      var t = cc11001100_hook("t", r(n, e, this), "var-init");
      if (t.done) return t.value;
      var i = cc11001100_hook("i", S(e), "var-init"),
        o = cc11001100_hook("o", String(this), "var-init");
      if (!i.global) return Xr(i, o);
      var a = cc11001100_hook("a", i.unicode, "var-init");
      i.lastIndex = cc11001100_hook("i.lastIndex", 0, "assign");
      for (var s, c = cc11001100_hook("c", [], "var-init"), u = cc11001100_hook("u", 0, "var-init"); null !== (s = cc11001100_hook("s", Xr(i, o), "assign"));) {
        var l = cc11001100_hook("l", String(s[0]), "var-init");
        c[u] = cc11001100_hook("c[u]", l, "assign"), "" === l && (i.lastIndex = cc11001100_hook("i.lastIndex", zr(o, ee(i.lastIndex), a), "assign")), u++;
      }
      return 0 === u ? null : c;
    }];
  }), B(B.P, "Array", {
    fill: cc11001100_hook("fill", Ni, "object-key-init")
  }), Mi("fill");
  var ta = cc11001100_hook("ta", new (function () {
    function e() {}
    return e.prototype.create = cc11001100_hook("e.prototype.create", function () {
      var e = cc11001100_hook("e", Math.floor(Math.random() * (Math.pow(2, 12) - 1 - 0 + 1)) + 0, "var-init"),
        t = cc11001100_hook("t", Math.floor(Math.random() * (Math.pow(2, 32) - 1 - 0 + 1)) + 0, "var-init"),
        n = cc11001100_hook("n", Math.floor(Math.random() * (Math.pow(2, 16) - 1 - 0 + 1)) + 0, "var-init"),
        r = cc11001100_hook("r", Math.floor(Math.random() * (Math.pow(2, 6) - 1 - 0 + 1)) + 0, "var-init"),
        i = cc11001100_hook("i", Math.floor(Math.random() * (Math.pow(2, 8) - 1 - 0 + 1)) + 0, "var-init"),
        o = cc11001100_hook("o", (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 18)) * (1 << 30), "var-init");
      function a(e, t, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        n = cc11001100_hook("n", n || "0", "assign");
        for (var r = cc11001100_hook("r", t - (e = cc11001100_hook("e", String(e), "assign")).length, "var-init"); r > 0; r >>>= cc11001100_hook("r", 1, "assign"), n += cc11001100_hook("n", n, "assign")) 1 & r && (e = cc11001100_hook("e", n + e, "assign"));
        return e;
      }
      return [a(t.toString(16), 8), a(n.toString(16), 4), a((16384 | e).toString(16), 4), a((128 | r).toString(16), 2), a(i.toString(16), 2), a(o.toString(16), 12)].join("");
    }, "assign"), e;
  }())(), "var-init");
  B(B.S, "Array", {
    isArray: cc11001100_hook("isArray", nn, "object-key-init")
  });
  var na = cc11001100_hook("na", _.f, "var-init"),
    ra = cc11001100_hook("ra", Ot.f, "var-init"),
    ia = cc11001100_hook("ia", l.RegExp, "var-init"),
    oa = cc11001100_hook("oa", ia, "var-init"),
    aa = cc11001100_hook("aa", ia.prototype, "var-init"),
    sa = cc11001100_hook("sa", /a/g, "var-init"),
    ca = cc11001100_hook("ca", /a/g, "var-init"),
    ua = cc11001100_hook("ua", new ia(sa) !== sa, "var-init");
  if (w && (!ua || T(function () {
    return ca[g("match")] = cc11001100_hook("ca[g(\"match\")]", !1, "assign"), ia(sa) != sa || ia(ca) == ca || "/a/i" != ia(sa, "i");
  }))) {
    ia = cc11001100_hook("ia", function (e, t) {
      var n = cc11001100_hook("n", this instanceof ia, "var-init"),
        r = cc11001100_hook("r", gi(e), "var-init"),
        i = cc11001100_hook("i", void 0 === t, "var-init");
      return !n && r && e.constructor === ia && i ? e : vt(ua ? new oa(r && !i ? e.source : e, t) : oa((r = cc11001100_hook("r", e instanceof ia, "assign")) ? e.source : e, r && i ? Qr.call(e) : t), n ? this : aa, ia);
    }, "assign");
    for (var la = function (e) {
        (e in ia) || na(ia, e, {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          get: function () {
            return oa[e];
          },
          set: function (t) {
            oa[e] = cc11001100_hook("oa[e]", t, "assign");
          }
        });
      }, fa = cc11001100_hook("fa", ra(oa), "var-init"), pa = cc11001100_hook("pa", 0, "var-init"); fa.length > pa;) la(fa[pa++]);
    aa.constructor = cc11001100_hook("aa.constructor", ia, "assign"), ia.prototype = cc11001100_hook("ia.prototype", aa, "assign"), k(l, "RegExp", ia);
  }
  function ha(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (void 0 === t && (t = cc11001100_hook("t", [], "assign")), void 0 === n && (n = cc11001100_hook("n", !1, "assign")), "object" !== hn(e)) return e;
    if (Array.isArray(e)) {
      for (var r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length; i++) -1 === t.indexOf(e[i]) && r.push(ha(e[i]));
      return r;
    }
    if (null != e && e.constructor !== RegExp) {
      var o = cc11001100_hook("o", {}, "var-init");
      for (var a in e) (n || "function" != typeof e[a]) && -1 === t.indexOf(a) && (o[a] = cc11001100_hook("o[a]", ha(e[a]), "assign"));
      return o;
    }
    return e;
  }
  function da(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return null != e && Object.prototype.hasOwnProperty.call(e, t);
  }
  function ga(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return -1 !== e.indexOf(t);
  }
  De("RegExp");
  var va = cc11001100_hook("va", new (function () {
    function e() {
      this.sessionDuration = cc11001100_hook("this.sessionDuration", 18e5, "assign"), this.minSessionDuration = cc11001100_hook("this.minSessionDuration", 3e4, "assign"), this.defaultEventParams = cc11001100_hook("this.defaultEventParams", {}, "assign"), this.expiryTimeInfinity = cc11001100_hook("this.expiryTimeInfinity", -1, "assign"), this.keyList = cc11001100_hook("this.keyList", [], "assign"), this.dataList = cc11001100_hook("this.dataList", {}, "assign"), this.initCompletedAt = cc11001100_hook("this.initCompletedAt", 0, "assign"), this.initPromise = cc11001100_hook("this.initPromise", null, "assign");
    }
    return e.prototype.init = cc11001100_hook("e.prototype.init", function () {
      return fn(this, void 0, void 0, function () {
        var e, t, n, r, i;
        return pn(this, function (o) {
          switch (o.label) {
            case 0:
              return this.initPromise ? [2] : [4, ls.hiMigration.migrate()];
            case 1:
              return o.sent(), e = cc11001100_hook("e", this.initKeyNameList(), "assign"), t = cc11001100_hook("t", this, "assign"), [4, this.clearInvalidKey(e)];
            case 2:
              t.keyList = cc11001100_hook("t.keyList", o.sent(), "assign"), n = cc11001100_hook("n", 0, "assign"), o.label = cc11001100_hook("o.label", 3, "assign");
            case 3:
              return n < this.keyList.length ? (r = cc11001100_hook("r", this.keyList[n], "assign"), [4, ls.hiStorage.getSavedObject(r)]) : [3, 6];
            case 4:
              if (i = cc11001100_hook("i", o.sent() || {}, "assign"), !this.isValidStoredItem(i)) return [3, 5];
              -1 != this.initNoRefreshKeyList().indexOf(r) ? this.dataList[r] = cc11001100_hook("this.dataList[r]", i, "assign") : this.saveClientValue(r, i.value), o.label = cc11001100_hook("o.label", 5, "assign");
            case 5:
              return n++, [3, 3];
            case 6:
              return this.initCompletedAt = cc11001100_hook("this.initCompletedAt", new Date().getTime(), "assign"), ls.sendTask.processEventsReceivedAfterLaunch(), [2];
          }
        });
      });
    }, "assign"), e.prototype.clearInvalidKey = cc11001100_hook("e.prototype.clearInvalidKey", function (e) {
      return fn(this, void 0, void 0, function () {
        var t, n;
        return pn(this, function (r) {
          switch (r.label) {
            case 0:
              t = cc11001100_hook("t", 0, "assign"), r.label = cc11001100_hook("r.label", 1, "assign");
            case 1:
              return t < e.length ? (n = cc11001100_hook("n", e[t], "assign"), [4, ls.hiStorage.isKeyExist(n)]) : [3, 4];
            case 2:
              r.sent() || (e.splice(t, 1), t--), r.label = cc11001100_hook("r.label", 3, "assign");
            case 3:
              return t++, [3, 1];
            case 4:
              return [2, e];
          }
        });
      });
    }, "assign"), e.prototype.handleSessionValue = cc11001100_hook("e.prototype.handleSessionValue", function (e, t) {
      void 0 === e && (e = cc11001100_hook("e", !0, "assign")), void 0 === t && (t = cc11001100_hook("t", !1, "assign"));
      var n = cc11001100_hook("n", this.getSessionValue(), "var-init"),
        r = cc11001100_hook("r", e ? ta.create() + "_" + new Date().getTime() : n || ta.create() + "_" + new Date().getTime(), "var-init"),
        i = cc11001100_hook("i", ls.sendTask.getCurFocusStateSessionDuration(!e && !Qo(n) && !t), "var-init");
      this.saveClientValue(Ur, r, i), n !== r && (ls.sendTask.upLoadService.isInit = cc11001100_hook("ls.sendTask.upLoadService.isInit", !1, "assign"));
    }, "assign"), e.prototype.getSessionValue = cc11001100_hook("e.prototype.getSessionValue", function () {
      return this.getClientValue(Ur);
    }, "assign"), e.prototype.setSessionDuration = cc11001100_hook("e.prototype.setSessionDuration", function (e) {
      Number.isInteger(e) && (this.sessionDuration = cc11001100_hook("this.sessionDuration", e, "assign"), this.handleSessionValue());
    }, "assign"), e.prototype.setBackgroundSessionDuration = cc11001100_hook("e.prototype.setBackgroundSessionDuration", function (e) {
      Number.isInteger(e) && (this.minSessionDuration = cc11001100_hook("this.minSessionDuration", e, "assign"), this.handleSessionValue());
    }, "assign"), e.prototype.getClientExpire = cc11001100_hook("e.prototype.getClientExpire", function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      return this.isValidStoredItem(this.dataList[e], function () {
        Qo(t.dataList[e]) || t.removeClientValue(e);
      }) ? this.dataList[e].expiryTime : 0;
    }, "assign"), e.prototype.getClientValue = cc11001100_hook("e.prototype.getClientValue", function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      return this.isValidStoredItem(this.dataList[e], function () {
        Qo(t.dataList[e]) || t.removeClientValue(e);
      }) ? this.dataList[e].value : "";
    }, "assign"), e.prototype.removeClientValue = cc11001100_hook("e.prototype.removeClientValue", function (e) {
      delete this.dataList[e], ls.hiStorage.removeItem(e);
      var t = cc11001100_hook("t", this.keyList.indexOf(e), "var-init");
      -1 !== t && delete this.keyList[t];
    }, "assign"), e.prototype.isKeyExist = cc11001100_hook("e.prototype.isKeyExist", function (e) {
      return !!this.getClientValue(e);
    }, "assign"), e.prototype.saveClientValue = cc11001100_hook("e.prototype.saveClientValue", function (e, t, n) {
      this.dataList[e] = cc11001100_hook("this.dataList[e]", {
        value: cc11001100_hook("value", t, "object-key-init"),
        expiryTime: cc11001100_hook("expiryTime", this.makeExpiryTime(n), "object-key-init")
      }, "assign"), ls.hiStorage.saveClientValue(e, t, n), -1 == this.keyList.indexOf(e) && this.keyList.push(e);
    }, "assign"), e.prototype.isValidStoredItem = cc11001100_hook("e.prototype.isValidStoredItem", function (e, t) {
      return null === e || "" === e || void 0 === (n = cc11001100_hook("n", "string" == typeof e ? JSON.parse(e) : e, "assign")) || isNaN(n.expiryTime) || !1 === da(n, "value") ? (t && t(), !1) : !(n.expiryTime !== this.expiryTimeInfinity && n.expiryTime < new Date().getTime()) || (t && t(), !1);
      var n;
    }, "assign"), e.prototype.makeExpiryTime = cc11001100_hook("e.prototype.makeExpiryTime", function (e) {
      var t = cc11001100_hook("t", new Date().getTime() + 31536e6, "var-init");
      return e && !isNaN(e) && e > 0 && (t = cc11001100_hook("t", new Date().getTime() + e, "assign")), t;
    }, "assign"), e.prototype.initKeyNameList = cc11001100_hook("e.prototype.initKeyNameList", function () {
      return ["HW_ha_clientOaidFlag", "HW_ha_serverOaidFlag", "HW_ha_pushTokenFlag", "HW_ha_getConfigTime", Hr, "HW_ha_isTestDevice", "HW_ha_isNewUser", Ur, "HW_ha_appVersion", "HW_ha_saltExpire", "HW_ha_wxAppId", Fr.CN, Fr.DE, Fr.RU, Fr.SG, jr.CN, jr.DE, jr.RU, jr.SG, "HW_ha_eventUploadPolicy", "HW_ha_disableEvents", "HW_ha_apiChannel", "HW_ha_firstOpenTime", "HW_ha_existShortcut", "HW_ha_existUserId", Mr, Vr, xr];
    }, "assign"), e.prototype.initNoRefreshKeyList = cc11001100_hook("e.prototype.initNoRefreshKeyList", function () {
      return [Ur, "HW_ha_saltExpire", Fr.CN, Fr.DE, Fr.RU, Fr.SG, jr.CN, jr.DE, jr.RU, jr.SG];
    }, "assign"), e;
  }())(), "var-init");
  kt("trim", function (e) {
    return function () {
      return e(this, 3);
    };
  }), B(B.S, "Date", {
    now: function () {
      return new Date().getTime();
    }
  });
  var ma = cc11001100_hook("ma", Object.assign, "var-init"),
    Ea = cc11001100_hook("Ea", !ma || T(function () {
      var e = cc11001100_hook("e", {}, "var-init"),
        t = cc11001100_hook("t", {}, "var-init"),
        n = cc11001100_hook("n", Symbol(), "var-init"),
        r = cc11001100_hook("r", "abcdefghijklmnopqrst", "var-init");
      return e[n] = cc11001100_hook("e[n]", 7, "assign"), r.split("").forEach(function (e) {
        t[e] = cc11001100_hook("t[e]", e, "assign");
      }), 7 != ma({}, e)[n] || Object.keys(ma({}, t)).join("") != r;
    }) ? function (e, t) {
      for (var n = cc11001100_hook("n", tn(e), "var-init"), r = cc11001100_hook("r", arguments.length, "var-init"), i = cc11001100_hook("i", 1, "var-init"), o = cc11001100_hook("o", Xi.f, "var-init"), a = cc11001100_hook("a", ct.f, "var-init"); r > i;) for (var s, c = cc11001100_hook("c", ut(arguments[i++]), "var-init"), u = cc11001100_hook("u", o ? Ut(c).concat(o(c)) : Ut(c), "var-init"), l = cc11001100_hook("l", u.length, "var-init"), f = cc11001100_hook("f", 0, "var-init"); l > f;) s = cc11001100_hook("s", u[f++], "assign"), w && !a.call(c, s) || (n[s] = cc11001100_hook("n[s]", c[s], "assign"));
      return n;
    } : ma, "var-init");
  B(B.S + B.F, "Object", {
    assign: cc11001100_hook("assign", Ea, "object-key-init")
  });
  var ya = cc11001100_hook("ya", {
      code: cc11001100_hook("code", "CE-001", "object-key-init"),
      message: cc11001100_hook("message", "Cannot find agcgw/url from agconnect-service.json.", "object-key-init")
    }, "var-init"),
    Sa = cc11001100_hook("Sa", {
      code: cc11001100_hook("code", "PE-002", "object-key-init"),
      message: cc11001100_hook("message", "Length of $1 exceeds the limit. Max Length is $2.", "object-key-init")
    }, "var-init"),
    Ta = cc11001100_hook("Ta", {
      code: cc11001100_hook("code", "PE-003", "object-key-init"),
      message: cc11001100_hook("message", "$1 missed.", "object-key-init")
    }, "var-init"),
    wa = cc11001100_hook("wa", {
      code: cc11001100_hook("code", "PE-004", "object-key-init"),
      message: cc11001100_hook("message", "$1 is reserved.", "object-key-init")
    }, "var-init"),
    Ca = cc11001100_hook("Ca", {
      code: cc11001100_hook("code", "PE-005", "object-key-init"),
      message: cc11001100_hook("message", "Too many $1 parameters. Max number of parameters is $2.", "object-key-init")
    }, "var-init"),
    Aa = cc11001100_hook("Aa", {
      code: cc11001100_hook("code", "PE-006", "object-key-init"),
      message: cc11001100_hook("message", "$1 is invalid.", "object-key-init")
    }, "var-init"),
    ba = cc11001100_hook("ba", {
      code: cc11001100_hook("code", "PE-007", "object-key-init"),
      message: cc11001100_hook("message", "The size exceeds the limit, the maximum size is $1.", "object-key-init")
    }, "var-init"),
    Ia = cc11001100_hook("Ia", {
      code: cc11001100_hook("code", "IE-004", "object-key-init"),
      message: cc11001100_hook("message", "Missing agconnect sdk.", "object-key-init")
    }, "var-init"),
    Pa = cc11001100_hook("Pa", {
      code: cc11001100_hook("code", "IE-006", "object-key-init"),
      message: cc11001100_hook("message", "The Analytics Kit is disabled.", "object-key-init")
    }, "var-init"),
    Oa = cc11001100_hook("Oa", {
      code: cc11001100_hook("code", "SE-001", "object-key-init"),
      message: cc11001100_hook("message", "Failed to initialize the Analytics Kit.", "object-key-init")
    }, "var-init"),
    _a = cc11001100_hook("_a", {
      code: cc11001100_hook("code", "SE-002", "object-key-init"),
      message: cc11001100_hook("message", "Failed to obtain AAID from hms core sdk.", "object-key-init")
    }, "var-init"),
    Na = cc11001100_hook("Na", {
      code: cc11001100_hook("code", "SE-003", "object-key-init"),
      message: cc11001100_hook("message", "Failed to obtain token from agconnect sdk.", "object-key-init")
    }, "var-init"),
    Ra = cc11001100_hook("Ra", function () {
      function e() {}
      return e.checkString = cc11001100_hook("e.checkString", function (e, t, n, r) {
        return Qo(n) ? (ls.hiLog.warn(e, Ta.code, Ta.message, {
          $1: cc11001100_hook("$1", t, "object-key-init")
        }), !1) : !(String(n).length > r) || (ls.hiLog.warn(e, Sa.code, Sa.message, {
          $1: cc11001100_hook("$1", t, "object-key-init"),
          $2: cc11001100_hook("$2", r, "object-key-init")
        }), !1);
      }, "assign"), e.checkPattern = cc11001100_hook("e.checkPattern", function (e, t, n, r) {
        return !!r.test(n) || (ls.hiLog.warn(e, Aa.code, Aa.message, {
          $1: cc11001100_hook("$1", t, "object-key-init")
        }), !1);
      }, "assign"), e.checkReserve = cc11001100_hook("e.checkReserve", function (e, t, n, r) {
        for (var i in r) if (n === r[i]) return ls.hiLog.warn(e, wa.code, wa.message, {
          $1: cc11001100_hook("$1", t, "object-key-init")
        }), !1;
        return !0;
      }, "assign"), e.checkLength = cc11001100_hook("e.checkLength", function (e, t, n, r) {
        return !(n > r) || (ls.hiLog.warn(e, Ca.code, Ca.message, {
          $1: cc11001100_hook("$1", t, "object-key-init"),
          $2: cc11001100_hook("$2", r, "object-key-init")
        }), !1);
      }, "assign"), e.checkSwitchIsOpen = cc11001100_hook("e.checkSwitchIsOpen", function (e, t) {
        return !!t || (ls.hiLog.warn(e, Pa.code, Pa.message), !1);
      }, "assign"), e.checkExceedMaxSize = cc11001100_hook("e.checkExceedMaxSize", function (e, t, n, r) {
        return !(n > r) || (ls.hiLog.warn(e, ba.code, ba.message, {
          $1: cc11001100_hook("$1", t, "object-key-init")
        }), !1);
      }, "assign"), e.checkEmpty = cc11001100_hook("e.checkEmpty", function (e, t, n) {
        return !Qo(n) || (ls.hiLog.warn(e, Ta.code, Ta.message, {
          $1: cc11001100_hook("$1", t, "object-key-init")
        }), !1);
      }, "assign"), e;
    }(), "var-init"),
    La = cc11001100_hook("La", "1.0", "var-init"),
    $a = cc11001100_hook("$a", "web", "var-init"),
    Da = cc11001100_hook("Da", "hianalytics", "var-init"),
    ka = cc11001100_hook("ka", "Analytics", "var-init"),
    Ua = cc11001100_hook("Ua", "aaid", "var-init"),
    Ma = cc11001100_hook("Ma", "token", "var-init"),
    xa = cc11001100_hook("xa", an(5), "var-init"),
    Va = cc11001100_hook("Va", !0, "var-init");
  "find" in [] && Array(1).find(function () {
    Va = cc11001100_hook("Va", !1, "assign");
  }), B(B.P + B.F * Va, "Array", {
    find: function (e) {
      return xa(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), Mi("find");
  var Ha = cc11001100_hook("Ha", new (function () {
      function e() {
        this.attributesCollectors = cc11001100_hook("this.attributesCollectors", [], "assign");
      }
      return e.prototype.register = cc11001100_hook("e.prototype.register", function (e) {
        this.attributesCollectors.push(e);
      }, "assign"), e.prototype.collectAll = cc11001100_hook("e.prototype.collectAll", function () {
        return fn(this, void 0, void 0, function () {
          var e, t, n, r;
          return pn(this, function (i) {
            switch (i.label) {
              case 0:
                e = cc11001100_hook("e", {}, "assign"), t = cc11001100_hook("t", 0, "assign"), n = cc11001100_hook("n", this.attributesCollectors, "assign"), i.label = cc11001100_hook("i.label", 1, "assign");
              case 1:
                return t < n.length ? [4, n[t].doCollect()] : [3, 4];
              case 2:
                r = cc11001100_hook("r", i.sent(), "assign"), Object.assign(e, r), i.label = cc11001100_hook("i.label", 3, "assign");
              case 3:
                return t++, [3, 1];
              case 4:
                return [2, e];
            }
          });
        });
      }, "assign"), e.prototype.collect = cc11001100_hook("e.prototype.collect", function (e) {
        return fn(this, void 0, void 0, function () {
          var t, n;
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return t = cc11001100_hook("t", {}, "assign"), n = cc11001100_hook("n", {}, "assign"), this.attributesCollectors.some(function (t, r) {
                  return t.key === e && (n = cc11001100_hook("n", t, "assign"), !0);
                }), n.doCollect ? [4, n.doCollect()] : [3, 2];
              case 1:
                t = cc11001100_hook("t", r.sent(), "assign"), r.label = cc11001100_hook("r.label", 2, "assign");
              case 2:
                return [2, t];
            }
          });
        });
      }, "assign"), e.prototype.syncCollect = cc11001100_hook("e.prototype.syncCollect", function (e) {
        return fn(this, void 0, void 0, function () {
          var t, n;
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return t = cc11001100_hook("t", {}, "assign"), (n = cc11001100_hook("n", this.attributesCollectors.find(function (t) {
                  return t.key === e;
                }), "assign")) && n.doCollect ? [4, n.doCollect()] : [3, 2];
              case 1:
                t = cc11001100_hook("t", r.sent(), "assign"), r.label = cc11001100_hook("r.label", 2, "assign");
              case 2:
                return [2, t];
            }
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    Fa = cc11001100_hook("Fa", new (function () {
      function e() {
        this.tag = cc11001100_hook("this.tag", "AaidCollector", "assign"), this.key = cc11001100_hook("this.key", Ua, "assign"), this.cache = cc11001100_hook("this.cache", null, "assign");
      }
      return e.prototype.doCollect = cc11001100_hook("e.prototype.doCollect", function () {
        return fn(this, void 0, void 0, function () {
          var e;
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return this.cache && this.cache[this.key] ? [3, 2] : (this.cache = cc11001100_hook("this.cache", this.cache || {}, "assign"), [4, ls.hiAgcUtil.getAaid(this.tag)]);
              case 1:
                (e = cc11001100_hook("e", t.sent(), "assign")) && (this.cache[this.key] = cc11001100_hook("this.cache[this.key]", e, "assign")), t.label = cc11001100_hook("t.label", 2, "assign");
              case 2:
                return [2, this.cache];
            }
          });
        });
      }, "assign"), e.prototype.getAaid = cc11001100_hook("e.prototype.getAaid", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.doCollect()];
              case 1:
                return e.sent(), [2, this.cache[Ua] || ""];
            }
          });
        });
      }, "assign"), e.prototype.refreshAaid = cc11001100_hook("e.prototype.refreshAaid", function () {
        return fn(this, void 0, void 0, function () {
          var e;
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return delete this.cache[Ua], [4, ls.hiAgcUtil.deleteAaid()];
              case 1:
                return t.sent(), [4, this.doCollect()];
              case 2:
                return (e = cc11001100_hook("e", t.sent(), "assign"))[Ua] && (os.addConfig("aaid", e[Ua]), os.setIsTestDevice(), va.removeClientValue("HW_ha_isNewUser")), [2];
            }
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    ja = cc11001100_hook("ja", /"/g, "var-init"),
    Ba = function (e, t, n, r) {
      var i = cc11001100_hook("i", String(lt(e)), "var-init"),
        o = cc11001100_hook("o", "<" + t, "var-init");
      return "" !== n && (o += cc11001100_hook("o", " " + n + '="' + String(r).replace(ja, "&quot;") + '"', "assign")), o + ">" + i + "</" + t + ">";
    };
  !function (e, t) {
    var n = cc11001100_hook("n", {}, "var-init");
    n[e] = cc11001100_hook("n[e]", t(Ba), "assign"), B(B.P + B.F * T(function () {
      var t = cc11001100_hook("t", ""[e]('"'), "var-init");
      return t !== t.toLowerCase() || t.split('"').length > 3;
    }), "String", n);
  }("anchor", function (e) {
    return function (t) {
      return e(this, "a", "name", t);
    };
  });
  var Ga = cc11001100_hook("Ga", Object.is || function (e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  }, "var-init");
  ci("search", 1, function (e, t, n, r) {
    return [function (n) {
      var r = cc11001100_hook("r", e(this), "var-init"),
        i = cc11001100_hook("i", null == n ? void 0 : n[t], "var-init");
      return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
    }, function (e) {
      var t = cc11001100_hook("t", r(n, e, this), "var-init");
      if (t.done) return t.value;
      var i = cc11001100_hook("i", S(e), "var-init"),
        o = cc11001100_hook("o", String(this), "var-init"),
        a = cc11001100_hook("a", i.lastIndex, "var-init");
      Ga(a, 0) || (i.lastIndex = cc11001100_hook("i.lastIndex", 0, "assign"));
      var s = cc11001100_hook("s", Xr(i, o), "var-init");
      return Ga(i.lastIndex, a) || (i.lastIndex = cc11001100_hook("i.lastIndex", a, "assign")), null === s ? -1 : s.index;
    }];
  });
  var Wa = function (e, t) {
      if (!y(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
      return e;
    },
    Ya = cc11001100_hook("Ya", _.f, "var-init"),
    Ka = cc11001100_hook("Ka", Ki.fastKey, "var-init"),
    qa = cc11001100_hook("qa", w ? "_s" : "size", "var-init"),
    za = function (e, t) {
      var n,
        r = cc11001100_hook("r", Ka(t), "var-init");
      if ("F" !== r) return e._i[r];
      for (n = cc11001100_hook("n", e._f, "assign"); n; n = cc11001100_hook("n", n.n, "assign")) if (n.k == t) return n;
    },
    Ja = cc11001100_hook("Ja", {
      getConstructor: function (e, t, n, r) {
        var i = cc11001100_hook("i", e(function (e, o) {
          G(e, i, t, "_i"), e._t = cc11001100_hook("e._t", t, "assign"), e._i = cc11001100_hook("e._i", Ft(null), "assign"), e._f = cc11001100_hook("e._f", void 0, "assign"), e._l = cc11001100_hook("e._l", void 0, "assign"), e[qa] = cc11001100_hook("e[qa]", 0, "assign"), null != o && re(o, n, e[r], e);
        }), "var-init");
        return _e(i.prototype, {
          clear: function () {
            for (var e = cc11001100_hook("e", Wa(this, t), "var-init"), n = cc11001100_hook("n", e._i, "var-init"), r = cc11001100_hook("r", e._f, "var-init"); r; r = cc11001100_hook("r", r.n, "assign")) r.r = cc11001100_hook("r.r", !0, "assign"), r.p && (r.p = cc11001100_hook("r.p", r.p.n = cc11001100_hook("r.p.n", void 0, "assign"), "assign")), delete n[r.i];
            e._f = cc11001100_hook("e._f", e._l = cc11001100_hook("e._l", void 0, "assign"), "assign"), e[qa] = cc11001100_hook("e[qa]", 0, "assign");
          },
          delete: function (e) {
            var n = cc11001100_hook("n", Wa(this, t), "var-init"),
              r = cc11001100_hook("r", za(n, e), "var-init");
            if (r) {
              var i = cc11001100_hook("i", r.n, "var-init"),
                o = cc11001100_hook("o", r.p, "var-init");
              delete n._i[r.i], r.r = cc11001100_hook("r.r", !0, "assign"), o && (o.n = cc11001100_hook("o.n", i, "assign")), i && (i.p = cc11001100_hook("i.p", o, "assign")), n._f == r && (n._f = cc11001100_hook("n._f", i, "assign")), n._l == r && (n._l = cc11001100_hook("n._l", o, "assign")), n[qa]--;
            }
            return !!r;
          },
          forEach: function (e) {
            Wa(this, t);
            for (var n, r = cc11001100_hook("r", x(e, arguments.length > 1 ? arguments[1] : void 0, 3), "var-init"); n = cc11001100_hook("n", n ? n.n : this._f, "assign");) for (r(n.v, n.k, this); n && n.r;) n = cc11001100_hook("n", n.p, "assign");
          },
          has: function (e) {
            return !!za(Wa(this, t), e);
          }
        }), w && Ya(i.prototype, "size", {
          get: function () {
            return Wa(this, t)[qa];
          }
        }), i;
      },
      def: function (e, t, n) {
        var r,
          i,
          o = cc11001100_hook("o", za(e, t), "var-init");
        return o ? o.v = cc11001100_hook("o.v", n, "assign") : (e._l = cc11001100_hook("e._l", o = cc11001100_hook("o", {
          i: cc11001100_hook("i", i = cc11001100_hook("i", Ka(t, !0), "assign"), "object-key-init"),
          k: cc11001100_hook("k", t, "object-key-init"),
          v: cc11001100_hook("v", n, "object-key-init"),
          p: cc11001100_hook("p", r = cc11001100_hook("r", e._l, "assign"), "object-key-init"),
          n: cc11001100_hook("n", void 0, "object-key-init"),
          r: cc11001100_hook("r", !1, "object-key-init")
        }, "assign"), "assign"), e._f || (e._f = cc11001100_hook("e._f", o, "assign")), r && (r.n = cc11001100_hook("r.n", o, "assign")), e[qa]++, "F" !== i && (e._i[i] = cc11001100_hook("e._i[i]", o, "assign"))), e;
      },
      getEntry: cc11001100_hook("getEntry", za, "object-key-init"),
      setStrong: function (e, t, n) {
        Gi(e, t, function (e, n) {
          this._t = cc11001100_hook("this._t", Wa(e, t), "assign"), this._k = cc11001100_hook("this._k", n, "assign"), this._l = cc11001100_hook("this._l", void 0, "assign");
        }, function () {
          for (var e = cc11001100_hook("e", this._k, "var-init"), t = cc11001100_hook("t", this._l, "var-init"); t && t.r;) t = cc11001100_hook("t", t.p, "assign");
          return this._t && (this._l = cc11001100_hook("this._l", t = cc11001100_hook("t", t ? t.n : this._t._f, "assign"), "assign")) ? xi(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = cc11001100_hook("this._t", void 0, "assign"), xi(1));
        }, n ? "entries" : "values", !n, !0), De(t);
      }
    }, "var-init");
  !function (e, t, n, r, i, o) {
    var a = cc11001100_hook("a", l[e], "var-init"),
      s = cc11001100_hook("s", a, "var-init"),
      c = cc11001100_hook("c", i ? "set" : "add", "var-init"),
      u = cc11001100_hook("u", s && s.prototype, "var-init"),
      f = cc11001100_hook("f", {}, "var-init"),
      p = function (e) {
        var t = cc11001100_hook("t", u[e], "var-init");
        k(u, e, "delete" == e || "has" == e ? function (e) {
          return !(o && !y(e)) && t.call(this, 0 === e ? 0 : e);
        } : "get" == e ? function (e) {
          return o && !y(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
        } : "add" == e ? function (e) {
          return t.call(this, 0 === e ? 0 : e), this;
        } : function (e, n) {
          return t.call(this, 0 === e ? 0 : e, n), this;
        });
      };
    if ("function" == typeof s && (o || u.forEach && !T(function () {
      new s().entries().next();
    }))) {
      var h = cc11001100_hook("h", new s(), "var-init"),
        d = cc11001100_hook("d", h[c](o ? {} : -0, 1) != h, "var-init"),
        g = cc11001100_hook("g", T(function () {
          h.has(1);
        }), "var-init"),
        v = cc11001100_hook("v", je(function (e) {
          new s(e);
        }), "var-init"),
        m = cc11001100_hook("m", !o && T(function () {
          for (var e = cc11001100_hook("e", new s(), "var-init"), t = cc11001100_hook("t", 5, "var-init"); t--;) e[c](t, t);
          return !e.has(-0);
        }), "var-init");
      v || ((s = cc11001100_hook("s", t(function (t, n) {
        G(t, s, e);
        var r = cc11001100_hook("r", vt(new a(), t, s), "var-init");
        return null != n && re(n, i, r[c], r), r;
      }), "assign")).prototype = cc11001100_hook("(s = t(function (t, n) {\n  G(t, s, e);\n  var r = vt(new a(), t, s);\n  return null != n && re(n, i, r[c], r), r;\n})).prototype", u, "assign"), u.constructor = cc11001100_hook("u.constructor", s, "assign")), (g || m) && (p("delete"), p("has"), i && p("get")), (m || d) && p(c), o && u.clear && delete u.clear;
    } else s = cc11001100_hook("s", r.getConstructor(t, e, i, c), "assign"), _e(s.prototype, n), Ki.NEED = cc11001100_hook("Ki.NEED", !0, "assign");
    Le(s, e), f[e] = cc11001100_hook("f[e]", s, "assign"), B(B.G + B.W + B.F * (s != a), f), o || r.setStrong(s, e, i);
  }("Map", function (e) {
    return function () {
      return e(this, arguments.length > 0 ? arguments[0] : void 0);
    };
  }, {
    get: function (e) {
      var t = cc11001100_hook("t", Ja.getEntry(Wa(this, "Map"), e), "var-init");
      return t && t.v;
    },
    set: function (e, t) {
      return Ja.def(Wa(this, "Map"), 0 === e ? 0 : e, t);
    }
  }, Ja, !0);
  var Xa,
    Qa,
    Za,
    es = cc11001100_hook("es", function () {
      function e() {}
      return e.parse = cc11001100_hook("e.parse", function (t) {
        var n, r, i, o, a, s, c, u, l, f, p, h;
        if ("function" == typeof URL) return new URL(t);
        var d = cc11001100_hook("d", {
            hash: cc11001100_hook("hash", "", "object-key-init"),
            host: cc11001100_hook("host", "", "object-key-init"),
            hostname: cc11001100_hook("hostname", "", "object-key-init"),
            href: cc11001100_hook("href", "", "object-key-init"),
            origin: cc11001100_hook("origin", "", "object-key-init"),
            password: cc11001100_hook("password", "", "object-key-init"),
            pathname: cc11001100_hook("pathname", "", "object-key-init"),
            port: cc11001100_hook("port", "", "object-key-init"),
            protocol: cc11001100_hook("protocol", "", "object-key-init"),
            search: cc11001100_hook("search", "", "object-key-init"),
            searchParams: cc11001100_hook("searchParams", new Map(), "object-key-init"),
            username: cc11001100_hook("username", "", "object-key-init")
          }, "var-init"),
          g = cc11001100_hook("g", t.match(/^(http:|https:)\/\/(.+[:][^/]+[@])?([^:/]+)([:]\d+)?([^#?]+)?([?])?([^#]+)?([#].+)?$/), "var-init");
        return null == g || (g = cc11001100_hook("g", g.map(function (e) {
          return Qo(e) ? "" : e;
        }), "assign"), d.hash = cc11001100_hook("d.hash", null !== (n = cc11001100_hook("n", e.parseHash(g), "assign")) && void 0 !== n ? n : "", "assign"), d.host = cc11001100_hook("d.host", null !== (r = cc11001100_hook("r", e.parseHost(g), "assign")) && void 0 !== r ? r : "", "assign"), d.hostname = cc11001100_hook("d.hostname", null !== (i = cc11001100_hook("i", e.parseHostName(g), "assign")) && void 0 !== i ? i : "", "assign"), d.href = cc11001100_hook("d.href", null !== (o = cc11001100_hook("o", e.parseHref(g), "assign")) && void 0 !== o ? o : "", "assign"), d.origin = cc11001100_hook("d.origin", null !== (a = cc11001100_hook("a", e.parseOrigin(g), "assign")) && void 0 !== a ? a : "", "assign"), d.password = cc11001100_hook("d.password", null !== (s = cc11001100_hook("s", e.parsePassword(g), "assign")) && void 0 !== s ? s : "", "assign"), d.pathname = cc11001100_hook("d.pathname", null !== (c = cc11001100_hook("c", e.parsePathname(g), "assign")) && void 0 !== c ? c : "", "assign"), d.port = cc11001100_hook("d.port", null !== (u = cc11001100_hook("u", e.parsePort(g), "assign")) && void 0 !== u ? u : "", "assign"), d.protocol = cc11001100_hook("d.protocol", null !== (l = cc11001100_hook("l", e.parseProtocol(g), "assign")) && void 0 !== l ? l : "", "assign"), d.search = cc11001100_hook("d.search", null !== (f = cc11001100_hook("f", e.parseSearch(g), "assign")) && void 0 !== f ? f : "", "assign"), d.searchParams = cc11001100_hook("d.searchParams", null !== (p = cc11001100_hook("p", e.parseSearchParams(g), "assign")) && void 0 !== p ? p : new Map(), "assign"), d.username = cc11001100_hook("d.username", null !== (h = cc11001100_hook("h", e.parseUsername(g), "assign")) && void 0 !== h ? h : "", "assign")), d;
      }, "assign"), e.parseHash = cc11001100_hook("e.parseHash", function (e) {
        return e[8];
      }, "assign"), e.parseHost = cc11001100_hook("e.parseHost", function (e) {
        return e[3] + e[4];
      }, "assign"), e.parseHostName = cc11001100_hook("e.parseHostName", function (e) {
        return e[3];
      }, "assign"), e.parseHref = cc11001100_hook("e.parseHref", function (e) {
        return e[0];
      }, "assign"), e.parseOrigin = cc11001100_hook("e.parseOrigin", function (e) {
        return e[1] + "//" + e[3] + e[4];
      }, "assign"), e.parsePassword = cc11001100_hook("e.parsePassword", function (e) {
        return Qo(e[2]) ? "" : e[2].replace("@", "").split(":")[1];
      }, "assign"), e.parsePathname = cc11001100_hook("e.parsePathname", function (e) {
        return e[5];
      }, "assign"), e.parsePort = cc11001100_hook("e.parsePort", function (e) {
        return Qo(e[4]) ? "" : e[4].replace(":", "");
      }, "assign"), e.parseProtocol = cc11001100_hook("e.parseProtocol", function (e) {
        return e[1];
      }, "assign"), e.parseSearch = cc11001100_hook("e.parseSearch", function (e) {
        return e[6] + e[7];
      }, "assign"), e.parseSearchParams = cc11001100_hook("e.parseSearchParams", function (e) {
        if (Qo(e[7])) return new Map();
        var t = cc11001100_hook("t", e[7].split("&").map(function (e) {
            return e.split("=");
          }), "var-init"),
          n = cc11001100_hook("n", new Map(), "var-init");
        for (var r in t) {
          var i = cc11001100_hook("i", t[r], "var-init");
          n.set(i[0], decodeURIComponent(i[1]));
        }
        return n;
      }, "assign"), e.parseUsername = cc11001100_hook("e.parseUsername", function (e) {
        return Qo(e[2]) ? "" : e[2].replace("@", "").split(":")[0];
      }, "assign"), e;
    }(), "var-init"),
    ts = cc11001100_hook("ts", new (function () {
      function e() {}
      return e.prototype.getPageIdByUrl = cc11001100_hook("e.prototype.getPageIdByUrl", function (e) {
        if (!os.urlClusteringOptions.enabled) {
          var t = cc11001100_hook("t", e.indexOf("?"), "var-init");
          return -1 === t ? e : e.slice(0, t);
        }
        var n = cc11001100_hook("n", e, "var-init");
        if (!/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(e)) return e;
        var r = cc11001100_hook("r", this.getUrlInfos(n), "var-init"),
          i = cc11001100_hook("i", os.urlClusteringOptions, "var-init");
        if (!0 === i.removeProtocol && (r.protocol = cc11001100_hook("r.protocol", "", "assign")), !0 === i.removeOrigin && (r.origin = cc11001100_hook("r.origin", "", "assign"), r.protocol = cc11001100_hook("r.protocol", "", "assign")), !0 === i.removeAnchor && (r.anchor = cc11001100_hook("r.anchor", "", "assign"), r.anchorParams = cc11001100_hook("r.anchorParams", "", "assign")), i.removeAllParams) r.urlParams = cc11001100_hook("r.urlParams", "", "assign"), r.anchorParams = cc11001100_hook("r.anchorParams", "", "assign");else {
          var o = cc11001100_hook("o", this.removeParamValues(i, r), "var-init");
          r.urlParams = cc11001100_hook("r.urlParams", this.generateParams(o.urlParams), "assign"), Qo(r.anchorParams) ? r.anchorParams = cc11001100_hook("r.anchorParams", "", "assign") : r.anchorParams = cc11001100_hook("r.anchorParams", this.generateParams(o.anchorParams), "assign");
        }
        return n = cc11001100_hook("n", this.generatePageId(r), "assign"), n = cc11001100_hook("n", this.matchUrlPatterns(n, i), "assign");
      }, "assign"), e.prototype.removeParamValues = cc11001100_hook("e.prototype.removeParamValues", function (e, t) {
        var n = cc11001100_hook("n", this.getParams(t.urlParams), "var-init"),
          r = cc11001100_hook("r", this.getParams(t.anchorParams), "var-init"),
          i = cc11001100_hook("i", [], "var-init"),
          o = cc11001100_hook("o", [], "var-init");
        if (Object.prototype.hasOwnProperty.call(e.removeParams, "params")) {
          var a = cc11001100_hook("a", e.removeParams.params, "var-init");
          for (var s in a) !0 === a[s].removeValuesOnly ? "search" === a[s].position ? n[s] = cc11001100_hook("n[s]", "", "assign") : "anchor" === a[s].position ? r[s] = cc11001100_hook("r[s]", "", "assign") : "both" === a[s].position && (n[s] = cc11001100_hook("n[s]", "", "assign"), r[s] = cc11001100_hook("r[s]", "", "assign")) : "search" === a[s].position ? i.push(s) : "anchor" === a[s].position ? o.push(s) : "both" === a[s].position && (i.push(s), o.push(s));
        }
        if (da(e.removeParams, "removeValuesOnly") && !0 === e.removeParams.removeValuesOnly) {
          for (var s in n) -1 === i.indexOf(s) && (n[s] = cc11001100_hook("n[s]", "", "assign"));
          for (var s in r) -1 === o.indexOf(s) && (r[s] = cc11001100_hook("r[s]", "", "assign"));
        }
        return {
          urlParams: cc11001100_hook("urlParams", n, "object-key-init"),
          anchorParams: cc11001100_hook("anchorParams", r, "object-key-init")
        };
      }, "assign"), e.prototype.generateParams = cc11001100_hook("e.prototype.generateParams", function (e) {
        var t = cc11001100_hook("t", [], "var-init");
        for (var n in e) t.push(n + "=" + e[n]);
        return t.join("&");
      }, "assign"), e.prototype.generatePageId = cc11001100_hook("e.prototype.generatePageId", function (e) {
        var t = cc11001100_hook("t", "", "var-init");
        return e.protocol && (t += cc11001100_hook("t", e.protocol + "//", "assign")), e.origin && (t += cc11001100_hook("t", e.origin, "assign")), e.path && (t += cc11001100_hook("t", e.path, "assign")), e.urlParams && (t += cc11001100_hook("t", "?" + e.urlParams, "assign")), e.anchor && (t += cc11001100_hook("t", "#" + e.anchor, "assign"), e.anchorParams && (t += cc11001100_hook("t", "?" + e.anchorParams, "assign"))), t;
      }, "assign"), e.prototype.matchUrlPatterns = cc11001100_hook("e.prototype.matchUrlPatterns", function (e, t) {
        var n = cc11001100_hook("n", t.urlPatterns, "var-init"),
          r = cc11001100_hook("r", t.urlSeparators, "var-init"),
          i = cc11001100_hook("i", e, "var-init");
        r = cc11001100_hook("r", "[" + r + "]", "assign");
        var o = cc11001100_hook("o", new RegExp(r), "var-init");
        for (var a in n) {
          for (var s = cc11001100_hook("s", n[a], "var-init"), c = cc11001100_hook("c", s.split(/\{\w+\}/g), "var-init"), u = cc11001100_hook("u", 0, "var-init"), l = cc11001100_hook("l", 0, "var-init"), f = cc11001100_hook("f", !1, "var-init");;) {
            var p = cc11001100_hook("p", i.indexOf(c[u], l), "var-init");
            if (-1 === p) {
              f = cc11001100_hook("f", !1, "assign");
              break;
            }
            if (0 === u && 0 !== p) {
              f = cc11001100_hook("f", !1, "assign");
              break;
            }
            if (l = cc11001100_hook("l", p + c[u].length, "assign"), c.length >= u && l > i.length) {
              f = cc11001100_hook("f", !0, "assign");
              break;
            }
            var h = cc11001100_hook("h", i, "var-init");
            c.length > u && (h = cc11001100_hook("h", c[u + 1], "assign"));
            var d = cc11001100_hook("d", i.indexOf(h, l), "var-init");
            if (!(f = cc11001100_hook("f", null === i.substr(l, d - l).match(o), "assign"))) {
              f = cc11001100_hook("f", !1, "assign");
              break;
            }
            if (u + 1 >= c.length) {
              f = cc11001100_hook("f", !0, "assign");
              break;
            }
            u++;
          }
          f && (i = cc11001100_hook("i", s, "assign"));
        }
        return i;
      }, "assign"), e.prototype.getUrlInfos = cc11001100_hook("e.prototype.getUrlInfos", function (e) {
        var t = cc11001100_hook("t", es.parse(e), "var-init"),
          n = cc11001100_hook("n", {}, "var-init");
        n.protocol = cc11001100_hook("n.protocol", t.protocol, "assign"), n.origin = cc11001100_hook("n.origin", t.host, "assign"), n.path = cc11001100_hook("n.path", t.pathname, "assign"), n.urlParams = cc11001100_hook("n.urlParams", "" === t.search ? "" : t.search.split("?")[1], "assign");
        var r = cc11001100_hook("r", "" === t.hash ? "" : t.hash.split("#")[1], "var-init");
        return n.anchor = cc11001100_hook("n.anchor", "" === r ? "" : r.split("?")[0], "assign"), n.anchorParams = cc11001100_hook("n.anchorParams", "" === r ? "" : r.split("?")[1], "assign"), n;
      }, "assign"), e.prototype.getParams = cc11001100_hook("e.prototype.getParams", function (e) {
        var t = cc11001100_hook("t", {}, "var-init");
        if ("" === e || null == e) return t;
        var n = cc11001100_hook("n", e.split("&"), "var-init");
        for (var r in n) {
          var i = cc11001100_hook("i", {
            key: cc11001100_hook("key", n[r].split("=")[0], "object-key-init"),
            value: cc11001100_hook("value", n[r].split("=")[1], "object-key-init")
          }, "var-init");
          t[i.key] = cc11001100_hook("t[i.key]", i.value, "assign");
        }
        return t;
      }, "assign"), e;
    }())(), "var-init");
  !function (e) {
    e.OFF = cc11001100_hook("e.OFF", "OFF", "assign"), e.INFO = cc11001100_hook("e.INFO", "INFO", "assign"), e.WARN = cc11001100_hook("e.WARN", "WARN", "assign"), e.ERROR = cc11001100_hook("e.ERROR", "ERROR", "assign");
  }(Xa || (Xa = cc11001100_hook("Xa", {}, "assign"))), function (e) {
    e.CN = cc11001100_hook("e.CN", "CN", "assign"), e.DE = cc11001100_hook("e.DE", "DE", "assign"), e.RU = cc11001100_hook("e.RU", "RU", "assign"), e.SG = cc11001100_hook("e.SG", "SG", "assign");
  }(Qa || (Qa = cc11001100_hook("Qa", {}, "assign"))), function (e) {
    e.ISFULLLEVEL = cc11001100_hook("e.ISFULLLEVEL", "is_full_level", "assign"), e.ISMEMBER = cc11001100_hook("e.ISMEMBER", "is_member", "assign"), e.USERLEVEL = cc11001100_hook("e.USERLEVEL", "user_level", "assign");
  }(Za || (Za = cc11001100_hook("Za", {}, "assign")));
  var ns = cc11001100_hook("ns", new (function () {
      function e() {
        this.tag = cc11001100_hook("this.tag", "TokenCollector", "assign"), this.key = cc11001100_hook("this.key", Ma, "assign"), this.cache = cc11001100_hook("this.cache", null, "assign");
      }
      return e.prototype.doCollect = cc11001100_hook("e.prototype.doCollect", function () {
        return fn(this, void 0, void 0, function () {
          var e;
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return this.cache = cc11001100_hook("this.cache", this.cache || {}, "assign"), [4, ls.hiAgcUtil.getToken(this.tag)];
              case 1:
                return (e = cc11001100_hook("e", t.sent(), "assign")) && (this.cache[this.key] = cc11001100_hook("this.cache[this.key]", e, "assign")), [2, this.cache];
            }
          });
        });
      }, "assign"), e.prototype.getToken = cc11001100_hook("e.prototype.getToken", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.doCollect()];
              case 1:
                return e.sent(), [2, this.cache[Ma] || ""];
            }
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    rs = cc11001100_hook("rs", new function () {
      this.debugMode = cc11001100_hook("this.debugMode", !1, "assign"), this.terminalName = cc11001100_hook("this.terminalName", "", "assign"), this.logDisabled = cc11001100_hook("this.logDisabled", !1, "assign"), this.logLevel = cc11001100_hook("this.logLevel", Xa.INFO, "assign"), this.routePolicy = cc11001100_hook("this.routePolicy", null, "assign");
    }(), "var-init"),
    is = cc11001100_hook("is", "Cannot find valid $1 from agconnect-service.json.", "var-init"),
    os = cc11001100_hook("os", new (function () {
      function e() {
        this.tag = cc11001100_hook("this.tag", "GlobalSetting", "assign"), this.clientConfig = cc11001100_hook("this.clientConfig", {}, "assign"), this.serverConfig = cc11001100_hook("this.serverConfig", {}, "assign"), this.externalConfig = cc11001100_hook("this.externalConfig", {}, "assign"), this.userProfiles = cc11001100_hook("this.userProfiles", {}, "assign"), this.prevScreenName = cc11001100_hook("this.prevScreenName", "", "assign"), this.currentScreenName = cc11001100_hook("this.currentScreenName", "", "assign"), this.reportType = cc11001100_hook("this.reportType", -1, "assign"), this.pageEntryTime = cc11001100_hook("this.pageEntryTime", 0, "assign"), this.logLevel = cc11001100_hook("this.logLevel", Xa.INFO, "assign"), this.urlClusteringOptions = cc11001100_hook("this.urlClusteringOptions", {}, "assign"), this.campaignPushInfo = cc11001100_hook("this.campaignPushInfo", null, "assign"), this.isBackground = cc11001100_hook("this.isBackground", !1, "assign"), this.eventUploadPolicy = cc11001100_hook("this.eventUploadPolicy", {}, "assign");
      }
      return e.prototype.init = cc11001100_hook("e.prototype.init", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return this.updateAnalyticsUrl(), [2];
          });
        });
      }, "assign"), e.prototype.initDebugMode = cc11001100_hook("e.prototype.initDebugMode", function (e, t) {
        os.addConfig(_n, e), e && t ? ((t = cc11001100_hook("t", t.trim(), "assign")).length > 30 && (ls.hiLog.warn(ka, Sa.code, Sa.message, {
          $1: cc11001100_hook("$1", "terminalName", "object-key-init"),
          $2: cc11001100_hook("$2", 30, "object-key-init")
        }), t = cc11001100_hook("t", t.substring(0, 30), "assign")), os.addConfig(Rn, t)) : os.addConfig(Rn, "");
      }, "assign"), e.prototype.initLogLevel = cc11001100_hook("e.prototype.initLogLevel", function (e, t) {
        e ? os.logLevel = cc11001100_hook("os.logLevel", Xa.OFF, "assign") : ga(Object.keys(Xa), t.toUpperCase()) ? os.logLevel = cc11001100_hook("os.logLevel", t.toUpperCase(), "assign") : os.logLevel = cc11001100_hook("os.logLevel", Xa.INFO, "assign");
      }, "assign"), e.prototype.initDisableEvents = cc11001100_hook("e.prototype.initDisableEvents", function () {
        return fn(this, void 0, void 0, function () {
          var e, t, n, r;
          return pn(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, ls.hiClient.isOnline()];
              case 1:
                return i.sent() ? (e = cc11001100_hook("e", "", "assign"), [4, os.getHaSdkToken()]) : [2];
              case 2:
                return (t = cc11001100_hook("t", i.sent(), "assign")) ? (n = cc11001100_hook("n", ls.hiEncryptSendData.generateDisableEventsHttpHeader({
                  sdkToken: cc11001100_hook("sdkToken", t, "object-key-init")
                }), "assign"), (r = cc11001100_hook("r", {}, "assign")).method = cc11001100_hook("(r = {}).method", "get", "assign"), r.url = cc11001100_hook("r.url", os.getConfig("analyticsUrl") + "/analytics/api/events/online", "assign"), ls.hiEncryptSendData.getOnlineAndDisableEvents(e, n, r).then(function (e) {
                  e.disable_evts && va.saveClientValue("HW_ha_disableEvents", e.disable_evts);
                }), [2]) : [2];
            }
          });
        });
      }, "assign"), e.prototype.initServerOaidFlag = cc11001100_hook("e.prototype.initServerOaidFlag", function () {
        return fn(this, void 0, void 0, function () {
          var e, t, n, r;
          return pn(this, function (i) {
            switch (i.label) {
              case 0:
                return os.getRoutePolicy() !== Qa.DE ? [2, !0] : (e = cc11001100_hook("e", va.getClientValue("HW_ha_getConfigTime"), "assign"), !Qo(e) && Date.now() - Number(e) <= 864e5 ? (t = cc11001100_hook("t", va.getClientValue("HW_ha_serverOaidFlag") || "false", "assign"), [2, Promise.resolve("true" === t)]) : (n = cc11001100_hook("n", "", "assign"), [4, os.getHaSdkToken()]));
              case 1:
                return (r = cc11001100_hook("r", i.sent(), "assign")) ? [2, new Promise(function (e, t) {
                  var i = cc11001100_hook("i", ls.hiEncryptSendData.generateOaidFlagHttpHeader({
                      sdkToken: cc11001100_hook("sdkToken", r, "object-key-init")
                    }), "var-init"),
                    o = cc11001100_hook("o", {
                      method: cc11001100_hook("method", "get", "object-key-init")
                    }, "var-init");
                  o.url = cc11001100_hook("o.url", os.getConfig("analyticsUrl") + "/analytics/api/config?config_key=oaid_flag", "assign"), ls.hiEncryptSendData.getServerOaidFlag(n, i, o).then(function (t) {
                    var n;
                    va.saveClientValue("HW_ha_getConfigTime", String(Date.now()));
                    var r = cc11001100_hook("r", null !== (n = cc11001100_hook("n", t.configList, "assign")) && void 0 !== n ? n : [], "var-init"),
                      i = cc11001100_hook("i", r[0] && "true" === r[0].config_value, "var-init");
                    va.saveClientValue("HW_ha_serverOaidFlag", String(i), 864e5), e(i);
                  }).catch(function () {
                    va.saveClientValue("HW_ha_serverOaidFlag", String(!1), 864e5), e(!1);
                  });
                })] : [2, !1];
            }
          });
        });
      }, "assign"), e.prototype.initPrevScreen = cc11001100_hook("e.prototype.initPrevScreen", function () {
        for (var e, t = cc11001100_hook("t", ls.sendTask.eventModels.length - 1, "var-init"); t >= 0; t--) {
          var n = cc11001100_hook("n", ls.sendTask.eventModels[t], "var-init");
          if (n.event === Gr.EXIT_SCREEN) {
            e = cc11001100_hook("e", n, "assign");
            break;
          }
        }
        e && this.setCurrentScreen(e.properties[er]);
      }, "assign"), e.prototype.getAAID = cc11001100_hook("e.prototype.getAAID", function () {
        var e = cc11001100_hook("e", this.getConfig(Ua), "var-init");
        return e || (ls.hiLog.error(ka, _a.code, _a.message), "");
      }, "assign"), e.prototype.getConfigs = cc11001100_hook("e.prototype.getConfigs", function () {
        return Object.assign({}, this.serverConfig, this.clientConfig, this.externalConfig);
      }, "assign"), e.prototype.getConfig = cc11001100_hook("e.prototype.getConfig", function (e) {
        var t, n;
        return null !== (n = cc11001100_hook("n", null !== (t = cc11001100_hook("t", this.externalConfig[e], "assign")) && void 0 !== t ? t : this.clientConfig[e], "assign")) && void 0 !== n ? n : this.serverConfig[e];
      }, "assign"), e.prototype.addConfig = cc11001100_hook("e.prototype.addConfig", function (e, t) {
        this.externalConfig[e] = cc11001100_hook("this.externalConfig[e]", t, "assign");
      }, "assign"), e.prototype.removeConfig = cc11001100_hook("e.prototype.removeConfig", function (e) {
        delete this.externalConfig[e];
      }, "assign"), e.prototype.resolveTerminalName = cc11001100_hook("e.prototype.resolveTerminalName", function () {
        var e;
        return fn(this, void 0, void 0, function () {
          var t, n;
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return t = cc11001100_hook("t", "", "assign"), this.getConfig(_n) ? 0 !== (t = cc11001100_hook("t", null !== (e = cc11001100_hook("e", this.getConfig(Rn), "assign")) && void 0 !== e ? e : "", "assign")).length ? [3, 2] : [4, Fa.getAaid()] : [3, 2];
              case 1:
                (n = cc11001100_hook("n", r.sent(), "assign")) && (t = cc11001100_hook("t", n.substring(0, 8), "assign")), r.label = cc11001100_hook("r.label", 2, "assign");
              case 2:
                return [2, t];
            }
          });
        });
      }, "assign"), e.prototype.setUserProfile = cc11001100_hook("e.prototype.setUserProfile", function (e, t) {
        if (Ra.checkString(ka, "user name", e, pr) && Ra.checkPattern(ka, "user name", e, Sr)) if (null !== t) {
          if (Ra.checkString(ka, "user value", t, pr)) if (da(this.userProfiles, e)) this.userProfiles[e] = cc11001100_hook("this.userProfiles[e]", t, "assign");else {
            var n = cc11001100_hook("n", Object.keys(this.userProfiles).length + 1, "var-init");
            Ra.checkLength(ka, "User Profile", n, Er) && (this.userProfiles[e] = cc11001100_hook("this.userProfiles[e]", t, "assign"));
          }
        } else delete this.userProfiles[e];
      }, "assign"), e.prototype.getUserProfiles = cc11001100_hook("e.prototype.getUserProfiles", function (e) {
        return fn(this, void 0, void 0, function () {
          var t, n, r, i;
          return pn(this, function (o) {
            switch (o.label) {
              case 0:
                return t = cc11001100_hook("t", {}, "assign"), e ? (r = cc11001100_hook("r", (n = cc11001100_hook("n", Object, "assign")).assign, "assign"), i = cc11001100_hook("i", [t], "assign"), [4, ls.hiClientProperty.generateUserCommonProperty()]) : [3, 2];
              case 1:
                return t = cc11001100_hook("t", r.apply(n, i.concat([o.sent()])), "assign"), [3, 3];
              case 2:
                t = cc11001100_hook("t", Object.assign(t, this.userProfiles), "assign"), o.label = cc11001100_hook("o.label", 3, "assign");
              case 3:
                return [2, t];
            }
          });
        });
      }, "assign"), e.prototype.pageStart = cc11001100_hook("e.prototype.pageStart", function (e) {
        if (Ra.checkString(ka, "screenName", e, pr)) {
          this.pageEntryTime = cc11001100_hook("this.pageEntryTime", new Date().getTime(), "assign");
          var t = cc11001100_hook("t", {}, "var-init");
          t[tr] = cc11001100_hook("t[tr]", -1 === e.indexOf("?") ? "" : e.slice(e.indexOf("?") + 1), "assign"), t[zn] = cc11001100_hook("t[zn]", ts.getPageIdByUrl(this.currentScreenName), "assign"), t[Xn] = cc11001100_hook("t[Xn]", ts.getPageIdByUrl(e), "assign"), t[Jn] = cc11001100_hook("t[Jn]", t[zn], "assign"), t[Qn] = cc11001100_hook("t[Qn]", t[Xn], "assign"), e !== this.currentScreenName && (this.prevScreenName = cc11001100_hook("this.prevScreenName", this.currentScreenName, "assign"), this.currentScreenName = cc11001100_hook("this.currentScreenName", e, "assign"));
          fs.onEvent(Gr.ENTER_SCREEN, t, {
            immediately: cc11001100_hook("immediately", !1, "object-key-init"),
            isReserved: cc11001100_hook("isReserved", !0, "object-key-init")
          });
        }
      }, "assign"), e.prototype.setPrevScreenName = cc11001100_hook("e.prototype.setPrevScreenName", function (e) {
        this.prevScreenName = cc11001100_hook("this.prevScreenName", e, "assign");
      }, "assign"), e.prototype.setCurrentScreen = cc11001100_hook("e.prototype.setCurrentScreen", function (e) {
        this.currentScreenName = cc11001100_hook("this.currentScreenName", e, "assign");
      }, "assign"), e.prototype.setPageEntryTime = cc11001100_hook("e.prototype.setPageEntryTime", function (e) {
        this.pageEntryTime = cc11001100_hook("this.pageEntryTime", e, "assign");
      }, "assign"), e.prototype.getPageEntryTime = cc11001100_hook("e.prototype.getPageEntryTime", function () {
        return this.pageEntryTime;
      }, "assign"), e.prototype.pageEnd = cc11001100_hook("e.prototype.pageEnd", function (e) {
        if (Ra.checkString(ka, "screenName", e, pr) && this.getPageEntryTime()) {
          var t = cc11001100_hook("t", new Date().getTime() - this.getPageEntryTime(), "var-init"),
            n = cc11001100_hook("n", {}, "var-init");
          n[nr] = cc11001100_hook("n[nr]", t, "assign"), n[Xn] = cc11001100_hook("n[Xn]", ts.getPageIdByUrl(e), "assign"), n[Qn] = cc11001100_hook("n[Qn]", n[Xn], "assign");
          fs.onEvent(Gr.EXIT_SCREEN, n, {
            immediately: cc11001100_hook("immediately", !1, "object-key-init"),
            isReserved: cc11001100_hook("isReserved", !0, "object-key-init")
          });
        }
      }, "assign"), e.prototype.setReportType = cc11001100_hook("e.prototype.setReportType", function (e) {
        this.reportType = cc11001100_hook("this.reportType", e, "assign");
      }, "assign"), e.prototype.getReportType = cc11001100_hook("e.prototype.getReportType", function () {
        return this.reportType;
      }, "assign"), e.prototype.generateClientKey = cc11001100_hook("e.prototype.generateClientKey", function (e) {
        return ("HW_" + e + "_" + this.getConfig("appId")).replace(/\./g, "_");
      }, "assign"), e.prototype.checkRoutePolicy = cc11001100_hook("e.prototype.checkRoutePolicy", function (e) {
        var t = cc11001100_hook("t", ls.hiAgcUtil.getConfig().service.analytics, "var-init");
        if (!os.getConfig(Nn)) return ls.hiLog.warn(ka, "", "Invalid routePolicy!"), !1;
        if (!ea(t.collector_url, function (t) {
          null == t ? !e && ls.hiLog.warn(ka, ya.code, "Cannot find valid service/analytics/collector_url from agconnect-service.json.") : !e && ls.hiLog.warn(ka, ya.code, "Cannot find valid service/analytics/collector_url[$1] from agconnect-service.json.", {
            $1: cc11001100_hook("$1", t, "object-key-init")
          });
        })) return !1;
        if (os.getConfig("routePolicyUsed")) {
          var n = cc11001100_hook("n", Object.keys(Qa), "var-init"),
            r = function (r) {
              var i = cc11001100_hook("i", "collector_url_" + n[r].toLowerCase(), "var-init");
              if (!ea(t[i], function (n) {
                null == n ? e && null != t[i] || ls.hiLog.warn(ka, ya.code, "Cannot find valid service/analytics/$1 from agconnect-service.json.", {
                  $1: cc11001100_hook("$1", i, "object-key-init")
                }) : e && null != t[i] || ls.hiLog.warn(ka, ya.code, "Cannot find valid service/analytics/$1[$2] from agconnect-service.json.", {
                  $1: cc11001100_hook("$1", i, "object-key-init"),
                  $2: cc11001100_hook("$2", n, "object-key-init")
                });
              })) return {
                value: cc11001100_hook("value", !1, "object-key-init")
              };
            };
          for (var i in n) {
            var o = cc11001100_hook("o", r(i), "var-init");
            if ("object" === hn(o)) return o.value;
          }
        }
        return !0;
      }, "assign"), e.prototype.getHaSdkToken = cc11001100_hook("e.prototype.getHaSdkToken", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2, ns.getToken()];
          });
        });
      }, "assign"), e.prototype.setRoutePolicy = cc11001100_hook("e.prototype.setRoutePolicy", function (e, t) {
        return "" === (e = cc11001100_hook("e", (e = cc11001100_hook("e", null != e ? e : "", "assign")).toUpperCase(), "assign")) ? os.addConfig(Nn, "UNKNOWN") : da(Qa, e) ? os.addConfig(Nn, e) : os.addConfig(Nn, null), os.addConfig("routePolicyUsed", "" !== e), !!this.checkRoutePolicy(t);
      }, "assign"), e.prototype.getRoutePolicy = cc11001100_hook("e.prototype.getRoutePolicy", function () {
        var e,
          t = cc11001100_hook("t", this.getConfig(Nn), "var-init");
        return "UNKNOWN" === t ? null !== (e = cc11001100_hook("e", ls.hiAgcUtil.getConfig().region, "assign")) && void 0 !== e ? e : "" : t;
      }, "assign"), e.prototype.updateAnalyticsUrl = cc11001100_hook("e.prototype.updateAnalyticsUrl", function () {
        var e;
        return fn(this, void 0, void 0, function () {
          var t, n, r;
          return pn(this, function (i) {
            switch (i.label) {
              case 0:
                return t = cc11001100_hook("t", this, "assign"), [4, Ha.syncCollect("serverConfig")];
              case 1:
                return t.serverConfig = cc11001100_hook("t.serverConfig", i.sent(), "assign"), n = cc11001100_hook("n", this.serverConfig.analyticsUrl, "assign"), null == (r = cc11001100_hook("r", os.getConfig(Nn), "assign")) ? n = cc11001100_hook("n", "", "assign") : "UNKNOWN" !== r && (n = cc11001100_hook("n", null !== (e = cc11001100_hook("e", this.serverConfig.collectorUrls[r.toUpperCase()], "assign")) && void 0 !== e ? e : "", "assign")), os.addConfig("analyticsUrl", n), ls.hiSendData.setUrl(n), [2];
            }
          });
        });
      }, "assign"), e.prototype.checkAgcConfig = cc11001100_hook("e.prototype.checkAgcConfig", function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = cc11001100_hook("a", ls.hiAgcUtil.getConfig(), "var-init");
        Zo(null === (t = cc11001100_hook("t", null === (e = cc11001100_hook("e", null == a ? void 0 : a.service, "assign")) || void 0 === e ? void 0 : e.analytics, "assign")) || void 0 === t ? void 0 : t.resource_id) || ls.hiLog.warn(ka, "", is, {
          $1: cc11001100_hook("$1", "service/analytics/resource_id", "object-key-init")
        }), Zo(null === (n = cc11001100_hook("n", null == a ? void 0 : a.client, "assign")) || void 0 === n ? void 0 : n.product_id) || ls.hiLog.warn(ka, "", is, {
          $1: cc11001100_hook("$1", "client/product_id", "object-key-init")
        }), Zo(null === (r = cc11001100_hook("r", null == a ? void 0 : a.client, "assign")) || void 0 === r ? void 0 : r.app_id) || ls.hiLog.warn(ka, "", is, {
          $1: cc11001100_hook("$1", "client/app_id", "object-key-init")
        }), Zo(null === (i = cc11001100_hook("i", null == a ? void 0 : a.client, "assign")) || void 0 === i ? void 0 : i.client_id) || ls.hiLog.warn(ka, "", is, {
          $1: cc11001100_hook("$1", "client/client_id", "object-key-init")
        });
        var s = cc11001100_hook("s", null === (o = cc11001100_hook("o", null == a ? void 0 : a.client, "assign")) || void 0 === o ? void 0 : o.package_name, "var-init");
        null == s || Zo(s) || ls.hiLog.warn(ka, "", is, {
          $1: cc11001100_hook("$1", "client/package_name", "object-key-init")
        });
        var c = cc11001100_hook("c", null == a ? void 0 : a.region, "var-init");
        return null == c || Zo(c) && Qa[c] || ls.hiLog.warn(ka, "", is, {
          $1: cc11001100_hook("$1", "region", "object-key-init")
        }), os.setRoutePolicy(rs.routePolicy, !1);
      }, "assign"), e.prototype.getNewUserFlag = cc11001100_hook("e.prototype.getNewUserFlag", function () {
        if ("false" === va.getClientValue("HW_ha_isNewUser")) return 0;
        var e = cc11001100_hook("e", Number(va.getClientValue("HW_ha_firstOpenTime")), "var-init"),
          t = cc11001100_hook("t", new Date(e).toDateString() === new Date().toDateString(), "var-init");
        return t || va.saveClientValue("HW_ha_isNewUser", "false"), t ? 1 : 0;
      }, "assign"), e.prototype.setIsTestDevice = cc11001100_hook("e.prototype.setIsTestDevice", function () {
        var e = cc11001100_hook("e", os.getConfig(_n), "var-init"),
          t = cc11001100_hook("t", "true" === va.getClientValue("HW_ha_isTestDevice") || e ? "true" : "false", "var-init");
        "true" === t && va.saveClientValue("HW_ha_isTestDevice", t);
      }, "assign"), e.prototype.isTestDevice = cc11001100_hook("e.prototype.isTestDevice", function () {
        return "true" === va.getClientValue("HW_ha_isTestDevice") ? 1 : 0;
      }, "assign"), e;
    }())(), "var-init"),
    as = cc11001100_hook("as", {
      ON_SCHEDULED_TIME_POLICY: cc11001100_hook("ON_SCHEDULED_TIME_POLICY", 5, "object-key-init"),
      ON_CACHE_THRESHOLD_POLICY: cc11001100_hook("ON_CACHE_THRESHOLD_POLICY", 30, "object-key-init")
    }, "var-init"),
    ss = cc11001100_hook("ss", function () {
      function e() {
        this.reportPolicyDefault = cc11001100_hook("this.reportPolicyDefault", as, "assign");
      }
      return e.prototype.eventUploadPolicyLaunch = cc11001100_hook("e.prototype.eventUploadPolicyLaunch", function () {
        ls.sendTask.uploadData(!0, Gr.LaunchApp);
      }, "assign"), e.prototype.eventUploadPolicyThreshold = cc11001100_hook("e.prototype.eventUploadPolicyThreshold", function () {
        var e = cc11001100_hook("e", this.getEventUploadPolicy(), "var-init");
        if (e.ON_CACHE_THRESHOLD_POLICY) {
          if (e.ON_CACHE_THRESHOLD_POLICY < Dr) return;
          if (e.ON_CACHE_THRESHOLD_POLICY > kr) return;
          ls.sendTask.eventModels.filter(function (e) {
            return e.event !== Gr.STOP_ANALYTICS_COLLECTION && e.sendState === Ir || e.sendState === _r;
          }).length >= e.ON_CACHE_THRESHOLD_POLICY && ls.sendTask.uploadData(!1, "");
        }
      }, "assign"), e.prototype.eventUploadPolicyScheduleTime = cc11001100_hook("e.prototype.eventUploadPolicyScheduleTime", function () {
        var e,
          t = cc11001100_hook("t", this.getEventUploadPolicy(), "var-init");
        if (os.getConfig(_n)) e = cc11001100_hook("e", 1e3, "assign");else {
          if (!t.ON_SCHEDULED_TIME_POLICY) return;
          if (t.ON_SCHEDULED_TIME_POLICY < Lr) return;
          if (t.ON_SCHEDULED_TIME_POLICY > $r) return;
          e = cc11001100_hook("e", 1e3 * t.ON_SCHEDULED_TIME_POLICY, "assign");
        }
        ls.sendTask.setHeartbeatFunc(e);
      }, "assign"), e.prototype.eventUploadPolicyBackground = cc11001100_hook("e.prototype.eventUploadPolicyBackground", function () {}, "assign"), e.prototype.logUploadPolicyLaunch = cc11001100_hook("e.prototype.logUploadPolicyLaunch", function () {
        var e = cc11001100_hook("e", this.getEventUploadPolicy(), "var-init");
        ls.hiAutoReport.isLaunchUpload() && e.ON_APP_LAUNCH_POLICY && e.ON_APP_LAUNCH_POLICY > 0 && ls.sendLogTask.uploadData();
      }, "assign"), e.prototype.logUploadPolicyThreshold = cc11001100_hook("e.prototype.logUploadPolicyThreshold", function () {
        var e = cc11001100_hook("e", this.getEventUploadPolicy(), "var-init");
        if (e.ON_CACHE_THRESHOLD_POLICY) {
          if (e.ON_CACHE_THRESHOLD_POLICY < Dr) return;
          if (e.ON_CACHE_THRESHOLD_POLICY > kr) return;
          ls.sendLogTask.logRecords.filter(function (e) {
            return e.sendState === Ir || e.sendState === _r;
          }).length >= e.ON_CACHE_THRESHOLD_POLICY && ls.sendLogTask.uploadData();
        }
      }, "assign"), e.prototype.logUploadPolicyScheduleTime = cc11001100_hook("e.prototype.logUploadPolicyScheduleTime", function () {
        var e,
          t = cc11001100_hook("t", this.getEventUploadPolicy(), "var-init");
        if (os.getConfig(_n)) e = cc11001100_hook("e", 1e3, "assign");else {
          if (!t.ON_SCHEDULED_TIME_POLICY) return;
          if (t.ON_SCHEDULED_TIME_POLICY < Lr) return;
          if (t.ON_SCHEDULED_TIME_POLICY > $r) return;
          e = cc11001100_hook("e", 1e3 * t.ON_SCHEDULED_TIME_POLICY, "assign");
        }
        ls.sendLogTask.setHeartbeatFunc(e);
      }, "assign"), e.prototype.logUploadPolicyBackground = cc11001100_hook("e.prototype.logUploadPolicyBackground", function () {}, "assign"), e.prototype.getUploadMaxCount = cc11001100_hook("e.prototype.getUploadMaxCount", function () {
        var e = cc11001100_hook("e", this.getEventUploadPolicy(), "var-init");
        return -1 === e.ON_CACHE_THRESHOLD_POLICY ? 300 : Math.min(300, e.ON_CACHE_THRESHOLD_POLICY);
      }, "assign"), e.prototype.getEventUploadPolicy = cc11001100_hook("e.prototype.getEventUploadPolicy", function () {
        var e = cc11001100_hook("e", va.getClientValue("HW_ha_eventUploadPolicy"), "var-init");
        return Qo(e) && (e = cc11001100_hook("e", this.reportPolicyDefault, "assign"), va.saveClientValue("HW_ha_eventUploadPolicy", e)), e;
      }, "assign"), e;
    }(), "var-init");
  new ss();
  var cs = cc11001100_hook("cs", function () {
      function e() {}
      return e.prototype.queryAllModels = cc11001100_hook("e.prototype.queryAllModels", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2, this.generateEventModels()];
          });
        });
      }, "assign"), e.prototype.queryModels = cc11001100_hook("e.prototype.queryModels", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            return [2, this.generateEventModels(void 0, e)];
          });
        });
      }, "assign"), e.prototype.saveModel = cc11001100_hook("e.prototype.saveModel", function (e, t) {
        return fn(this, void 0, void 0, function () {
          var n, r;
          return pn(this, function (i) {
            switch (i.label) {
              case 0:
                return n = cc11001100_hook("n", ha(t, ["sendState", "collectionUrl", "routePolicy"]), "assign"), r = cc11001100_hook("r", JSON.stringify(n), "assign"), [4, ls.hiDBStorage.saveClientValue(e, r, !0)];
              case 1:
                return i.sent(), [2];
            }
          });
        });
      }, "assign"), e.prototype.removeModel = cc11001100_hook("e.prototype.removeModel", function (e) {
        ls.hiDBStorage.removeItem(e, !0);
      }, "assign"), e.prototype.removeModels = cc11001100_hook("e.prototype.removeModels", function (e) {
        ls.hiDBStorage.removeItems(e, !0);
      }, "assign"), e.prototype.removeAllModels = cc11001100_hook("e.prototype.removeAllModels", function () {
        ls.hiDBStorage.removeAllItems(!0);
      }, "assign"), e.prototype.generateEventModels = cc11001100_hook("e.prototype.generateEventModels", function (e, t) {
        return fn(this, void 0, void 0, function () {
          var e, t, n, r, i, o;
          return pn(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, ls.hiDBStorage.getAllClientValue(!0)];
              case 1:
                for (e = cc11001100_hook("e", a.sent(), "assign"), t = cc11001100_hook("t", [], "assign"), n = cc11001100_hook("n", 0, "assign"); n < e.length; n++) r = cc11001100_hook("r", e[n], "assign"), i = cc11001100_hook("i", r, "assign"), null != (o = cc11001100_hook("o", JSON.parse(i), "assign")).id && t.push(o);
                return [2, t];
            }
          });
        });
      }, "assign"), e;
    }(), "var-init"),
    us = cc11001100_hook("us", function () {
      function e() {}
      return e.prototype.getDatabase = cc11001100_hook("e.prototype.getDatabase", function () {}, "assign"), e.prototype.getAllClientValue = cc11001100_hook("e.prototype.getAllClientValue", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2, Promise.resolve([""])];
          });
        });
      }, "assign"), e.prototype.getClientValues = cc11001100_hook("e.prototype.getClientValues", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2, Promise.resolve([""])];
          });
        });
      }, "assign"), e.prototype.getClientValue = cc11001100_hook("e.prototype.getClientValue", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2, Promise.resolve("")];
          });
        });
      }, "assign"), e.prototype.isKeyExist = cc11001100_hook("e.prototype.isKeyExist", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2, Promise.resolve(!1)];
          });
        });
      }, "assign"), e.prototype.saveClientValue = cc11001100_hook("e.prototype.saveClientValue", function (e, t, n) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2];
          });
        });
      }, "assign"), e.prototype.removeItem = cc11001100_hook("e.prototype.removeItem", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2];
          });
        });
      }, "assign"), e.prototype.removeItems = cc11001100_hook("e.prototype.removeItems", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2];
          });
        });
      }, "assign"), e.prototype.removeAllItems = cc11001100_hook("e.prototype.removeAllItems", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2];
          });
        });
      }, "assign"), e;
    }(), "var-init"),
    ls = cc11001100_hook("ls", new (function () {
      function e() {
        this.hiAnalytics = cc11001100_hook("this.hiAnalytics", {}, "assign"), this.hiLog = cc11001100_hook("this.hiLog", {}, "assign"), this.hiAutoReport = cc11001100_hook("this.hiAutoReport", {}, "assign"), this.hiEncryptSendData = cc11001100_hook("this.hiEncryptSendData", {}, "assign"), this.hiSendData = cc11001100_hook("this.hiSendData", {}, "assign"), this.hiClient = cc11001100_hook("this.hiClient", {}, "assign"), this.hiClientProperty = cc11001100_hook("this.hiClientProperty", {}, "assign"), this.hiStorage = cc11001100_hook("this.hiStorage", {}, "assign"), this.hiDBStorage = cc11001100_hook("this.hiDBStorage", {}, "assign"), this.hiFileStorage = cc11001100_hook("this.hiFileStorage", {}, "assign"), this.hiMigration = cc11001100_hook("this.hiMigration", {}, "assign"), this.sendLogTask = cc11001100_hook("this.sendLogTask", {}, "assign"), this.sendTask = cc11001100_hook("this.sendTask", {}, "assign"), this.sendPolicy = cc11001100_hook("this.sendPolicy", {}, "assign"), this.hiEncrypt = cc11001100_hook("this.hiEncrypt", {}, "assign"), this.hiKeyStore = cc11001100_hook("this.hiKeyStore", {}, "assign"), this.hiAgcUtil = cc11001100_hook("this.hiAgcUtil", {}, "assign"), this.hiEventModelsAdapter = cc11001100_hook("this.hiEventModelsAdapter", {}, "assign"), this.setSendPolicy(new ss()), this.setHiEventModelsAdapter(new cs()), this.setHiDBStorage(new us());
      }
      return e.prototype.setHiAnalytics = cc11001100_hook("e.prototype.setHiAnalytics", function (e) {
        this.hiAnalytics = cc11001100_hook("this.hiAnalytics", e, "assign");
      }, "assign"), e.prototype.setHiLog = cc11001100_hook("e.prototype.setHiLog", function (e) {
        this.hiLog = cc11001100_hook("this.hiLog", e, "assign");
      }, "assign"), e.prototype.setHiAutoReport = cc11001100_hook("e.prototype.setHiAutoReport", function (e) {
        this.hiAutoReport = cc11001100_hook("this.hiAutoReport", e, "assign");
      }, "assign"), e.prototype.setHiEncryptSendData = cc11001100_hook("e.prototype.setHiEncryptSendData", function (e) {
        this.hiEncryptSendData = cc11001100_hook("this.hiEncryptSendData", e, "assign"), this.setHiSendData(e);
      }, "assign"), e.prototype.setHiSendData = cc11001100_hook("e.prototype.setHiSendData", function (e) {
        this.hiSendData = cc11001100_hook("this.hiSendData", e, "assign");
      }, "assign"), e.prototype.setHiClient = cc11001100_hook("e.prototype.setHiClient", function (e) {
        this.hiClient = cc11001100_hook("this.hiClient", e, "assign");
      }, "assign"), e.prototype.setHiClientProperty = cc11001100_hook("e.prototype.setHiClientProperty", function (e) {
        this.hiClientProperty = cc11001100_hook("this.hiClientProperty", e, "assign");
      }, "assign"), e.prototype.setHiStorage = cc11001100_hook("e.prototype.setHiStorage", function (e) {
        this.hiStorage = cc11001100_hook("this.hiStorage", e, "assign");
      }, "assign"), e.prototype.setHiDBStorage = cc11001100_hook("e.prototype.setHiDBStorage", function (e) {
        this.hiDBStorage = cc11001100_hook("this.hiDBStorage", e, "assign");
      }, "assign"), e.prototype.setHiFileStorage = cc11001100_hook("e.prototype.setHiFileStorage", function (e) {
        this.hiFileStorage = cc11001100_hook("this.hiFileStorage", e, "assign");
      }, "assign"), e.prototype.setHiMigration = cc11001100_hook("e.prototype.setHiMigration", function (e) {
        this.hiMigration = cc11001100_hook("this.hiMigration", e, "assign");
      }, "assign"), e.prototype.setSendLogTask = cc11001100_hook("e.prototype.setSendLogTask", function (e) {
        this.sendLogTask = cc11001100_hook("this.sendLogTask", e, "assign");
      }, "assign"), e.prototype.setSendTask = cc11001100_hook("e.prototype.setSendTask", function (e) {
        this.sendTask = cc11001100_hook("this.sendTask", e, "assign");
      }, "assign"), e.prototype.setSendPolicy = cc11001100_hook("e.prototype.setSendPolicy", function (e) {
        this.sendPolicy = cc11001100_hook("this.sendPolicy", e, "assign");
      }, "assign"), e.prototype.setHiEncrypt = cc11001100_hook("e.prototype.setHiEncrypt", function (e) {
        this.hiEncrypt = cc11001100_hook("this.hiEncrypt", e, "assign");
      }, "assign"), e.prototype.setHiKeyStore = cc11001100_hook("e.prototype.setHiKeyStore", function (e) {
        this.hiKeyStore = cc11001100_hook("this.hiKeyStore", e, "assign");
      }, "assign"), e.prototype.setHiAgcUtil = cc11001100_hook("e.prototype.setHiAgcUtil", function (e) {
        this.hiAgcUtil = cc11001100_hook("this.hiAgcUtil", e, "assign");
      }, "assign"), e.prototype.setHiEventModelsAdapter = cc11001100_hook("e.prototype.setHiEventModelsAdapter", function (e) {
        this.hiEventModelsAdapter = cc11001100_hook("this.hiEventModelsAdapter", e, "assign");
      }, "assign"), e;
    }())(), "var-init"),
    fs = cc11001100_hook("fs", new (function () {
      function e() {
        this.eventsReceived = cc11001100_hook("this.eventsReceived", [], "assign"), this.initialized = cc11001100_hook("this.initialized", !1, "assign"), this.reportFlag = cc11001100_hook("this.reportFlag", !0, "assign");
      }
      return e.prototype.init = cc11001100_hook("e.prototype.init", function () {
        var e = cc11001100_hook("e", va.getClientValue(Mr), "var-init");
        null == e || 0 === e.length ? va.saveClientValue(Mr, String(this.reportFlag)) : this.reportFlag = cc11001100_hook("this.reportFlag", e === String(!0), "assign");
      }, "assign"), e.prototype.setAnalyticsEnabled = cc11001100_hook("e.prototype.setAnalyticsEnabled", function (e) {
        if (this.reportFlag !== e && (this.reportFlag = cc11001100_hook("this.reportFlag", e, "assign"), va.saveClientValue(Mr, String(e)), !e)) {
          var t = cc11001100_hook("t", va.getClientValue(xr), "var-init");
          "true" !== t && "false" !== t || va.saveClientValue(xr, String(!0));
          var n = cc11001100_hook("n", va.getClientValue(Vr), "var-init");
          "true" !== n && "false" !== n || va.saveClientValue(Vr, String(!0)), ls.hiEventModelsAdapter.removeAllModels(), this.onEvent(Gr.STOP_ANALYTICS_COLLECTION, {}, {
            isReserved: cc11001100_hook("isReserved", !0, "object-key-init"),
            forceReport: cc11001100_hook("forceReport", !0, "object-key-init"),
            immediately: cc11001100_hook("immediately", !0, "object-key-init")
          });
        }
      }, "assign"), e.prototype.setRestrictionEnabled = cc11001100_hook("e.prototype.setRestrictionEnabled", function (e) {
        if (this.reportFlag && (va.saveClientValue(xr, String(e)), e)) {
          this.onEvent(Gr.STOP_ANALYTICS_COLLECTION, {}, {
            isReserved: cc11001100_hook("isReserved", !0, "object-key-init"),
            forceReport: cc11001100_hook("forceReport", !0, "object-key-init"),
            immediately: cc11001100_hook("immediately", !0, "object-key-init")
          });
          var t = cc11001100_hook("t", va.getClientValue(Vr), "var-init");
          "true" !== t && "false" !== t || va.saveClientValue(Vr, String(e));
        }
      }, "assign"), e.prototype.isRestrictionEnabled = cc11001100_hook("e.prototype.isRestrictionEnabled", function () {
        var e = cc11001100_hook("e", va.getClientValue(Mr), "var-init"),
          t = cc11001100_hook("t", va.getClientValue(xr), "var-init");
        return "" !== t ? "true" === t : "true" !== e;
      }, "assign"), e.prototype.setRestrictionShared = cc11001100_hook("e.prototype.setRestrictionShared", function (e) {
        this.reportFlag ? os.getRoutePolicy() === Qa.CN ? this.isRestrictionEnabled() ? ls.hiLog.warn(ka, "", "Cannot set restriction_shared because restriction_enabled is true!") : va.saveClientValue(Vr, String(e)) : ls.hiLog.warn(ka, "", "Cannot set restriction_shared because routePolicy is not CN!") : ls.hiLog.warn(ka, "", "Cannot set restriction_shared because analytics_enabled is false!");
      }, "assign"), e.prototype.isRestrictionShared = cc11001100_hook("e.prototype.isRestrictionShared", function () {
        return os.getRoutePolicy() !== Qa.CN || !this.reportFlag || os.getRoutePolicy() !== Qa.CN || !!this.isRestrictionEnabled() || "true" === va.getClientValue(Vr);
      }, "assign"), e.prototype.checkEventLength = cc11001100_hook("e.prototype.checkEventLength", function (e) {
        return !!Ra.checkString(ka, "eventId", e, pr);
      }, "assign"), e.prototype.checkIsPredineEvents = cc11001100_hook("e.prototype.checkIsPredineEvents", function (e) {
        var t = cc11001100_hook("t", !1, "var-init"),
          n = cc11001100_hook("n", Br, "var-init");
        for (var r in n) {
          if (e === n[r]) {
            t = cc11001100_hook("t", !0, "assign");
            break;
          }
        }
        return t;
      }, "assign"), e.prototype.getEventParams = cc11001100_hook("e.prototype.getEventParams", function (e, t) {
        void 0 === t && (t = cc11001100_hook("t", {}, "assign"));
        var n = cc11001100_hook("n", {}, "var-init");
        for (var r in this.putEventParams(n, t, e, !1), this.putEventParams(n, va.defaultEventParams, e, !0), n) null == n[r] && delete n[r];
        var i = cc11001100_hook("i", Object.keys(n), "var-init");
        if (i.length > dr) {
          ls.hiLog.warn(ka, Ca.code, Ca.message, {
            $1: cc11001100_hook("$1", "Event", "object-key-init"),
            $2: cc11001100_hook("$2", dr, "object-key-init")
          });
          for (var o = cc11001100_hook("o", i.slice(dr), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < o.length; a++) {
            delete n[r = cc11001100_hook("r", o[a], "assign")];
          }
        }
        return n;
      }, "assign"), e.prototype.putEventParams = cc11001100_hook("e.prototype.putEventParams", function (e, t, n, r) {
        if (r && n) return e;
        for (var i in t) r && da(e, i) || Ra.checkString(ka, "params key", i, pr) && (n || Ra.checkPattern(ka, "params key", i, Tr)) && (e[i] = cc11001100_hook("e[i]", t[i], "assign"));
        return e;
      }, "assign"), e.prototype.checkEventIsValid = cc11001100_hook("e.prototype.checkEventIsValid", function (e, t) {
        return !!this.checkEventLength(e) && !(!t && !Ra.checkReserve(ka, "eventId", e, Gr)) && !!(this.checkIsPredineEvents(e) || t || Ra.checkPattern(ka, "eventId", e, yr)) && (!this.isDisableEvent(e) || (ls.hiLog.info("The event is disabled: " + e), !1));
      }, "assign"), e.prototype.processEventsReceived = cc11001100_hook("e.prototype.processEventsReceived", function () {
        var e = cc11001100_hook("e", this, "var-init");
        0 !== this.eventsReceived.length && (this.reportFlag ? this.eventsReceived.forEach(function (t) {
          var n = cc11001100_hook("n", t.eventId, "var-init"),
            r = cc11001100_hook("r", t.param, "var-init"),
            i = cc11001100_hook("i", t.config, "var-init");
          i.isReserved = cc11001100_hook("i.isReserved", Wr.some(function (e) {
            return e === n;
          }), "assign"), e.onEvent(n, r, i);
        }) : ls.hiLog.warn(ka, Pa.code, Pa.message), this.eventsReceived.length = cc11001100_hook("this.eventsReceived.length", 0, "assign"));
      }, "assign"), e.prototype.onEventCallback = cc11001100_hook("e.prototype.onEventCallback", function (e, t, n) {
        void 0 === t && (t = cc11001100_hook("t", {}, "assign")), void 0 === n && (n = cc11001100_hook("n", {}, "assign")), this.initialized ? this.reportFlag ? this.onEvent(e, t, n) : ls.hiLog.warn(ka, Pa.code, Pa.message) : (this.eventsReceived.length >= 300 && (this.eventsReceived.length = cc11001100_hook("this.eventsReceived.length", 0, "assign")), this.eventsReceived.push({
          eventId: cc11001100_hook("eventId", e, "object-key-init"),
          param: cc11001100_hook("param", t, "object-key-init"),
          config: cc11001100_hook("config", n, "object-key-init")
        }));
      }, "assign"), e.prototype.onEvent = cc11001100_hook("e.prototype.onEvent", function (e, t, n) {
        void 0 === t && (t = cc11001100_hook("t", {}, "assign")), void 0 === n && (n = cc11001100_hook("n", {}, "assign"));
        var r = cc11001100_hook("r", n.isReserved || !1, "var-init"),
          i = cc11001100_hook("i", n.forceReport || !1, "var-init");
        if (this.checkEventIsValid(e, r) && (i || Ra.checkSwitchIsOpen(ka, this.reportFlag))) {
          var o = cc11001100_hook("o", this.getEventParams(r, t), "var-init"),
            a = cc11001100_hook("a", vr / 1024 + "KB", "var-init"),
            s = cc11001100_hook("s", JSON.stringify(o).length, "var-init");
          if (Ra.checkExceedMaxSize(ka, a, s, vr)) {
            o.$TaskId = cc11001100_hook("o.$TaskId", "", "assign");
            var c = cc11001100_hook("c", {}, "var-init");
            c[Zn] = cc11001100_hook("c[Zn]", ts.getPageIdByUrl(os.prevScreenName), "assign"), c[er] = cc11001100_hook("c[er]", ts.getPageIdByUrl(os.currentScreenName), "assign"), this.putEventParams(o, c, r, !1);
            var u = cc11001100_hook("u", n.eventtime || new Date().getTime(), "var-init");
            ls.sendTask.onEvent(e, o, "oper", u, n);
          }
        }
      }, "assign"), e.prototype.addDefaultEventParams = cc11001100_hook("e.prototype.addDefaultEventParams", function (e) {
        if (null != e) {
          if ("object" === hn(e)) {
            var t = cc11001100_hook("t", {}, "var-init");
            for (var n in e) {
              null == (r = cc11001100_hook("r", e[n], "assign")) ? delete va.defaultEventParams[n] : t[n] = cc11001100_hook("t[n]", r, "assign");
            }
            for (var n in t) {
              var r = cc11001100_hook("r", t[n], "var-init");
              if (this.validateDefaultParam(n, r)) {
                if (!da(va.defaultEventParams, n)) {
                  var i = cc11001100_hook("i", Object.keys(va.defaultEventParams).length + 1, "var-init");
                  if (!Ra.checkLength(ka, "default event", i, gr)) continue;
                }
                va.defaultEventParams[n] = cc11001100_hook("va.defaultEventParams[n]", r, "assign");
              }
            }
          } else ls.hiLog.warn(ka, Aa.code, Aa.message, {
            $1: cc11001100_hook("$1", "default event params", "object-key-init")
          });
        } else va.defaultEventParams = cc11001100_hook("va.defaultEventParams", {}, "assign");
      }, "assign"), e.prototype.validateDefaultParam = cc11001100_hook("e.prototype.validateDefaultParam", function (e, t) {
        return !!Ra.checkString(ka, "default event params key", e, pr) && !!Ra.checkPattern(ka, "default event params key", e, Tr) && (!("string" == typeof t && t.length > pr) || (ls.hiLog.warn(ka, Sa.code, Sa.message, {
          $1: cc11001100_hook("$1", "default event params value", "object-key-init"),
          $2: cc11001100_hook("$2", pr, "object-key-init")
        }), !1));
      }, "assign"), e.prototype.isDisableEvent = cc11001100_hook("e.prototype.isDisableEvent", function (e) {
        var t = cc11001100_hook("t", va.getClientValue("HW_ha_disableEvents"), "var-init");
        return "object" === hn(t) && t instanceof Array && -1 !== t.indexOf(e);
      }, "assign"), e.prototype.writeLog = cc11001100_hook("e.prototype.writeLog", function (e, t) {
        return fn(this, void 0, void 0, function () {
          var n, r, i, o, a, s, c, u, l, f;
          return pn(this, function (p) {
            return null == e || Qo(t) ? (ls.hiLog.warn(ka, Aa.code, Aa.message, {
              $1: cc11001100_hook("$1", null == e ? "logConfig" : "content", "object-key-init")
            }), [2]) : "string" != typeof t ? (ls.hiLog.warn(ka, Aa.code, Aa.message, {
              $1: cc11001100_hook("$1", "content", "object-key-init")
            }), [2]) : (n = cc11001100_hook("n", e.region, "assign"), r = cc11001100_hook("r", e.projectId, "assign"), i = cc11001100_hook("i", e.groupId, "assign"), o = cc11001100_hook("o", e.streamId, "assign"), a = cc11001100_hook("a", e.tags, "assign"), Ra.checkString(ka, "region", n, fr) && Ra.checkString(ka, "projectId", r, fr) && Ra.checkString(ka, "groupId", i, fr) && Ra.checkString(ka, "streamId", o, fr) ? (null != a && "object" === hn(a) || (ls.hiLog.warn(ka, Aa.code, Aa.message, {
              $1: cc11001100_hook("$1", "tags", "object-key-init")
            }), a = cc11001100_hook("a", {}, "assign")), s = cc11001100_hook("s", {}, "assign"), (c = cc11001100_hook("c", Object.entries(a || {}).filter(function (e) {
              var t = cc11001100_hook("t", e[0], "var-init"),
                n = cc11001100_hook("n", e[1], "var-init");
              return !!Ra.checkString(ka, "tag key", t, ur) && !!Ra.checkPattern(ka, "tag key", t, Sr) && !!Ra.checkString(ka, "tag value", n, pr);
            }), "assign")).length > mr && ls.hiLog.warn(ka, Ca.code, Ca.message, {
              $1: cc11001100_hook("$1", "tags", "object-key-init"),
              $2: cc11001100_hook("$2", mr, "object-key-init")
            }), c.slice(0, mr).forEach(function (e) {
              var t = cc11001100_hook("t", e[0], "var-init"),
                n = cc11001100_hook("n", e[1], "var-init");
              s[t] = cc11001100_hook("s[t]", n, "assign");
            }), t.length > hr && (ls.hiLog.warn(ka, Sa.code, Sa.message, {
              $1: cc11001100_hook("$1", "content", "object-key-init"),
              $2: cc11001100_hook("$2", hr, "object-key-init")
            }), t = cc11001100_hook("t", t.substring(0, hr), "assign")), u = cc11001100_hook("u", os.getConfig(Nn), "assign"), l = cc11001100_hook("l", ls.hiAgcUtil.getConfig().region || "", "assign"), f = cc11001100_hook("f", {
              region: cc11001100_hook("region", n, "object-key-init"),
              projectId: cc11001100_hook("projectId", r, "object-key-init"),
              groupId: cc11001100_hook("groupId", i, "object-key-init"),
              streamId: cc11001100_hook("streamId", o, "object-key-init"),
              tags: cc11001100_hook("tags", s, "object-key-init"),
              id: cc11001100_hook("id", ta.create(), "object-key-init"),
              content: cc11001100_hook("content", t, "object-key-init"),
              type: cc11001100_hook("type", "maint", "object-key-init"),
              eventtime: cc11001100_hook("eventtime", new Date().getTime(), "object-key-init"),
              collectionUrl: cc11001100_hook("collectionUrl", os.getConfig("analyticsUrl"), "object-key-init"),
              routePolicy: cc11001100_hook("routePolicy", "UNKNOWN" === u ? l : u, "object-key-init"),
              sendState: cc11001100_hook("sendState", br, "object-key-init")
            }, "assign"), ls.sendLogTask.writeLog(f), [2]) : [2]);
          });
        });
      }, "assign"), e.prototype.onReport = cc11001100_hook("e.prototype.onReport", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return ls.sendTask.uploadData(!1, ""), ls.sendLogTask.uploadData(), [2];
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    ps = cc11001100_hook("ps", new (function () {
      function e() {
        this.userId = cc11001100_hook("this.userId", "", "assign"), this.clientId = cc11001100_hook("this.clientId", "", "assign");
      }
      return e.prototype.init = cc11001100_hook("e.prototype.init", function () {}, "assign"), e.prototype.setUserId = cc11001100_hook("e.prototype.setUserId", function (e) {
        var t = cc11001100_hook("t", this.isValidUserId(e), "var-init");
        t && va.saveClientValue("HW_ha_existUserId", null != e ? Rr : Nr), (e = cc11001100_hook("e", t && null != e ? String(e) : "", "assign")) !== this.userId && va.handleSessionValue(), this.userId = cc11001100_hook("this.userId", e || "", "assign");
      }, "assign"), e.prototype.isValidUserId = cc11001100_hook("e.prototype.isValidUserId", function (e) {
        return null == e || ("string" != typeof e && "number" != typeof e ? (ls.hiLog.warn(ka, "", Aa.message, {
          $1: cc11001100_hook("$1", "userId", "object-key-init")
        }), !1) : !!Ra.checkString(ka, "userId", e, pr));
      }, "assign"), e.prototype.setSessionDuration = cc11001100_hook("e.prototype.setSessionDuration", function (e) {
        return e < wr.value && (ls.hiLog.warn(ka, ba.code, "session duration less than minimum $1.", {
          $1: cc11001100_hook("$1", wr.label, "object-key-init")
        }), e = cc11001100_hook("e", wr.value, "assign")), e > Cr.value && (ls.hiLog.warn(ka, ba.code, "session duration greater than maximum $1.", {
          $1: cc11001100_hook("$1", Cr.label, "object-key-init")
        }), e = cc11001100_hook("e", Cr.value, "assign")), va.setSessionDuration(e);
      }, "assign"), e.prototype.setBackgroundSessionDuration = cc11001100_hook("e.prototype.setBackgroundSessionDuration", function (e) {
        return e < wr.value && (ls.hiLog.warn(ka, ba.code, "min session duration less than minimum $1.", {
          $1: cc11001100_hook("$1", wr.label, "object-key-init")
        }), e = cc11001100_hook("e", wr.value, "assign")), e > Cr.value && (ls.hiLog.warn(ka, ba.code, "min session duration greater than maximum $1.", {
          $1: cc11001100_hook("$1", Cr.label, "object-key-init")
        }), e = cc11001100_hook("e", Cr.value, "assign")), va.setBackgroundSessionDuration(e);
      }, "assign"), e.prototype.getUserInfo = cc11001100_hook("e.prototype.getUserInfo", function (e) {
        var t = cc11001100_hook("t", (void 0 === e ? {} : e).routePolicy, "var-init"),
          n = cc11001100_hook("n", void 0 === t ? "" : t, "var-init");
        return fn(this, void 0, void 0, function () {
          var e, t, r, i, o, a, s, c, u, l;
          return pn(this, function (f) {
            switch (f.label) {
              case 0:
                return e = cc11001100_hook("e", os.getAAID(), "assign"), [4, ls.hiClient.getSystemOaidFlag()];
              case 1:
                return t = cc11001100_hook("t", f.sent(), "assign"), (i = cc11001100_hook("i", t, "assign")) ? [4, ls.hiClient.getClientOaidFlag()] : [3, 3];
              case 2:
                i = cc11001100_hook("i", f.sent(), "assign"), f.label = cc11001100_hook("f.label", 3, "assign");
              case 3:
                return r = cc11001100_hook("r", i, "assign"), (o = cc11001100_hook("o", t, "assign")) ? [4, ls.hiClient.getServerOaidFlag(n)] : [3, 5];
              case 4:
                o = cc11001100_hook("o", f.sent(), "assign"), f.label = cc11001100_hook("f.label", 5, "assign");
              case 5:
                return a = cc11001100_hook("a", {
                  systemOaidFlag: cc11001100_hook("systemOaidFlag", t, "object-key-init"),
                  clientOaidFlag: cc11001100_hook("clientOaidFlag", r, "object-key-init"),
                  serverOaidFlag: cc11001100_hook("serverOaidFlag", o, "object-key-init")
                }, "assign"), c = cc11001100_hook("c", {
                  aaid: cc11001100_hook("aaid", e, "object-key-init"),
                  userid: cc11001100_hook("userid", this.userId, "object-key-init")
                }, "assign"), [4, ls.hiClientProperty.generateUserCommonProperty(a)];
              case 6:
                return c.properties = cc11001100_hook("c.properties", f.sent(), "assign"), c.events_global_properties = cc11001100_hook("c.events_global_properties", os.userProfiles, "assign"), s = cc11001100_hook("s", c, "assign"), [3, 11];
              case 7:
                return (void 0).oaid = cc11001100_hook("(void 0).oaid", f.sent(), "assign"), u = cc11001100_hook("u", s, "assign"), [4, ls.hiClient.getOaidSource()];
              case 8:
                return u.oaid_source = cc11001100_hook("u.oaid_source", f.sent(), "assign"), [3, 10];
              case 9:
                s.oaid = cc11001100_hook("s.oaid", "", "assign"), s.oaid_source = cc11001100_hook("s.oaid_source", "", "assign"), f.label = cc11001100_hook("f.label", 10, "assign");
              case 10:
              case 11:
                return [3, 15];
              case 12:
                return (void 0).oaid = cc11001100_hook("(void 0).oaid", f.sent(), "assign"), l = cc11001100_hook("l", s, "assign"), [4, ls.hiClient.getOaidSource()];
              case 13:
                return l.oaid_source = cc11001100_hook("l.oaid_source", f.sent(), "assign"), [3, 15];
              case 14:
                s.oaid = cc11001100_hook("s.oaid", "", "assign"), s.oaid_source = cc11001100_hook("s.oaid_source", "", "assign"), f.label = cc11001100_hook("f.label", 15, "assign");
              case 15:
                return [2, s];
            }
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    hs = cc11001100_hook("hs", new (function () {
      function e() {
        this.autoReport = cc11001100_hook("this.autoReport", {}, "assign"), this.hiStorage = cc11001100_hook("this.hiStorage", {}, "assign"), this.hiClient = cc11001100_hook("this.hiClient", {}, "assign");
      }
      return e.prototype.init = cc11001100_hook("e.prototype.init", function () {
        this.autoReport = cc11001100_hook("this.autoReport", ls.hiAutoReport, "assign"), this.hiStorage = cc11001100_hook("this.hiStorage", ls.hiStorage, "assign"), this.hiClient = cc11001100_hook("this.hiClient", ls.hiClient, "assign");
      }, "assign"), e.prototype.reportFirstOpenEvent = cc11001100_hook("e.prototype.reportFirstOpenEvent", function (e) {
        void 0 === e && (e = cc11001100_hook("e", !1, "assign"));
        var t = cc11001100_hook("t", new Date().getTime(), "var-init");
        va.saveClientValue("HW_ha_firstOpenTime", String(t));
        var n = cc11001100_hook("n", {
            eventtime: cc11001100_hook("eventtime", t, "object-key-init"),
            immediately: cc11001100_hook("immediately", !1, "object-key-init"),
            isReserved: cc11001100_hook("isReserved", !0, "object-key-init")
          }, "var-init"),
          r = cc11001100_hook("r", {}, "var-init"),
          i = cc11001100_hook("i", e ? "clearCachedData" : ls.hiClient.getStartType(), "var-init");
        null != i && (r[Kn] = cc11001100_hook("r[Kn]", i, "assign"));
        var o = cc11001100_hook("o", ls.hiClient.getStartScene(), "var-init");
        null != o && (r[qn] = cc11001100_hook("r[qn]", o, "assign")), fs.onEvent(Gr.FIRST_OPEN, r, n);
      }, "assign"), e.prototype.reportLaunchAppEvent = cc11001100_hook("e.prototype.reportLaunchAppEvent", function (e) {
        void 0 === e && (e = cc11001100_hook("e", !1, "assign"));
        var t = cc11001100_hook("t", {}, "var-init"),
          n = cc11001100_hook("n", e ? "clearCachedData" : ls.hiClient.getStartType(), "var-init");
        null != n && (t[Kn] = cc11001100_hook("t[Kn]", n, "assign"));
        var r = cc11001100_hook("r", ls.hiClient.getStartScene(), "var-init");
        null != r && (t[qn] = cc11001100_hook("t[qn]", r, "assign")), fs.onEvent(Gr.LaunchApp, t, {
          immediately: cc11001100_hook("immediately", !1, "object-key-init"),
          isReserved: cc11001100_hook("isReserved", !0, "object-key-init")
        });
      }, "assign"), e.prototype.reportPageEntryEvent = cc11001100_hook("e.prototype.reportPageEntryEvent", function () {
        this.reportPageEntryEventAsync();
      }, "assign"), e.prototype.reportPageEntryEventAsync = cc11001100_hook("e.prototype.reportPageEntryEventAsync", function () {
        return fn(this, void 0, void 0, function () {
          var e, t, n, r, i;
          return pn(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, ls.hiAnalytics.initPromise];
              case 1:
                return o.sent(), e = cc11001100_hook("e", {}, "assign"), t = cc11001100_hook("t", new Date().getTime(), "assign"), os.setPageEntryTime(t), n = cc11001100_hook("n", os.currentScreenName, "assign"), r = cc11001100_hook("r", ls.hiClient.getHref(), "assign"), os.setPrevScreenName(os.currentScreenName), os.setCurrentScreen(r), e[tr] = cc11001100_hook("e[tr]", -1 === r.indexOf("?") ? "" : r.slice(r.indexOf("?") + 1), "assign"), e[zn] = cc11001100_hook("e[zn]", n, "assign"), e[Xn] = cc11001100_hook("e[Xn]", ts.getPageIdByUrl(r), "assign"), e[Jn] = cc11001100_hook("e[Jn]", e[zn], "assign"), e[Qn] = cc11001100_hook("e[Qn]", e[Xn], "assign"), i = cc11001100_hook("i", {
                  immediately: cc11001100_hook("immediately", !1, "object-key-init"),
                  isReserved: cc11001100_hook("isReserved", !0, "object-key-init")
                }, "assign"), fs.onEvent(Gr.ENTER_SCREEN, e, i), [2];
            }
          });
        });
      }, "assign"), e.prototype.reportPageExitEvent = cc11001100_hook("e.prototype.reportPageExitEvent", function () {
        var e = cc11001100_hook("e", os.getPageEntryTime(), "var-init");
        if (e) {
          var t = cc11001100_hook("t", {}, "var-init"),
            n = cc11001100_hook("n", new Date().getTime() - e, "var-init");
          t[Xn] = cc11001100_hook("t[Xn]", ts.getPageIdByUrl(os.currentScreenName), "assign"), t[Qn] = cc11001100_hook("t[Qn]", t[Xn], "assign"), t[nr] = cc11001100_hook("t[nr]", n, "assign");
          fs.onEvent(Gr.EXIT_SCREEN, t, {
            immediately: cc11001100_hook("immediately", !0, "object-key-init"),
            isReserved: cc11001100_hook("isReserved", !0, "object-key-init")
          });
        }
      }, "assign"), e.prototype.reportCampaignPushInfoEvent = cc11001100_hook("e.prototype.reportCampaignPushInfoEvent", function () {
        var e = cc11001100_hook("e", os.campaignPushInfo, "var-init");
        if (e) {
          var t = cc11001100_hook("t", {}, "var-init");
          t.$CampaignPushInfo = cc11001100_hook("t.$CampaignPushInfo", JSON.stringify(e), "assign"), t.$JobId = cc11001100_hook("t.$JobId", e.jobId, "assign"), t.$ActivityId = cc11001100_hook("t.$ActivityId", e.activityId, "assign");
          fs.onEvent(Gr.CampaignPushClick, t, {
            immediately: cc11001100_hook("immediately", !1, "object-key-init"),
            isReserved: cc11001100_hook("isReserved", !0, "object-key-init")
          });
        }
      }, "assign"), e.prototype.computeLoadTime = cc11001100_hook("e.prototype.computeLoadTime", function () {}, "assign"), e.prototype.stateChanged = cc11001100_hook("e.prototype.stateChanged", function () {}, "assign"), e;
    }())(), "var-init"),
    ds = cc11001100_hook("ds", new (function () {
      function e() {
        this.eventListeners = cc11001100_hook("this.eventListeners", [], "assign");
      }
      return e.prototype.addListener = cc11001100_hook("e.prototype.addListener", function (e) {
        this.eventListeners.push(e);
      }, "assign"), e.prototype.init = cc11001100_hook("e.prototype.init", function () {
        return fn(this, void 0, void 0, function () {
          var e, t;
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                e = cc11001100_hook("e", 0, "assign"), t = cc11001100_hook("t", this.eventListeners, "assign"), n.label = cc11001100_hook("n.label", 1, "assign");
              case 1:
                return e < t.length ? [4, t[e].init()] : [3, 4];
              case 2:
                n.sent(), n.label = cc11001100_hook("n.label", 3, "assign");
              case 3:
                return e++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    gs = cc11001100_hook("gs", new (function () {
      function e() {}
      return e.prototype.init = cc11001100_hook("e.prototype.init", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (n) {
            return e && e.forEach(function (e) {
              Ha.register(e);
            }), t && t.forEach(function (e) {
              ds.addListener(e);
            }), ds.init(), [2];
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    vs = cc11001100_hook("vs", new (function () {
      function e() {
        this.key = cc11001100_hook("this.key", "serverConfig", "assign"), this.cache = cc11001100_hook("this.cache", null, "assign");
      }
      return e.prototype.doCollect = cc11001100_hook("e.prototype.doCollect", function () {
        return fn(this, void 0, void 0, function () {
          var e, t, n;
          return pn(this, function (r) {
            if (!this.cache) {
              for (n in e = cc11001100_hook("e", ls.hiAgcUtil.getConfig(), "assign"), t = cc11001100_hook("t", {}, "assign"), Qa) t[n] = cc11001100_hook("t[n]", this.getUrl(e.service.analytics["collector_url_" + n.toLowerCase()]), "assign");
              this.cache = cc11001100_hook("this.cache", {
                productId: cc11001100_hook("productId", e.client.product_id, "object-key-init"),
                appId: cc11001100_hook("appId", e.client.app_id, "object-key-init"),
                clientId: cc11001100_hook("clientId", e.client.client_id, "object-key-init"),
                packageName: cc11001100_hook("packageName", e.client.package_name || e.client.app_id, "object-key-init"),
                resourceId: cc11001100_hook("resourceId", e.service.analytics.resource_id, "object-key-init"),
                collectorUrls: cc11001100_hook("collectorUrls", t, "object-key-init"),
                analyticsUrl: cc11001100_hook("analyticsUrl", this.getUrl(e.service.analytics.collector_url), "object-key-init")
              }, "assign");
            }
            return [2, this.cache];
          });
        });
      }, "assign"), e.prototype.getUrl = cc11001100_hook("e.prototype.getUrl", function (e) {
        if (null != e && "string" != typeof e) return "";
        var t = cc11001100_hook("t", (null != e ? e : "").split(",")[0], "var-init");
        return /^https?:\/\//.test(t) || (t = cc11001100_hook("t", "https://" + t, "assign")), "" !== t && ls.sendTask.isServerWebV3() && (t += cc11001100_hook("t", "/webv3", "assign")), t;
      }, "assign"), e;
    }())(), "var-init"),
    ms = cc11001100_hook("ms", new (function () {
      function e() {}
      return e.prototype.init = cc11001100_hook("e.prototype.init", function () {
        hs.init(), fs.init();
      }, "assign"), e.prototype.onEvent = cc11001100_hook("e.prototype.onEvent", function () {}, "assign"), e;
    }())(), "var-init"),
    Es = cc11001100_hook("Es", new function () {
      this.enabled = cc11001100_hook("this.enabled", !1, "assign"), this.removeProtocol = cc11001100_hook("this.removeProtocol", !0, "assign"), this.removeOrigin = cc11001100_hook("this.removeOrigin", !1, "assign"), this.removeAllParams = cc11001100_hook("this.removeAllParams", !0, "assign"), this.removeParams = cc11001100_hook("this.removeParams", {
        removeValuesOnly: cc11001100_hook("removeValuesOnly", !0, "object-key-init"),
        params: {}
      }, "assign"), this.removeAnchor = cc11001100_hook("this.removeAnchor", !0, "assign"), this.urlPatterns = cc11001100_hook("this.urlPatterns", [], "assign"), this.urlSeparators = cc11001100_hook("this.urlSeparators", ":/.?=&#", "assign");
    }(), "var-init"),
    ys = cc11001100_hook("ys", function () {
      function e(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", this, "var-init");
        ls.setHiAnalytics(this), this.preConfigPromise = cc11001100_hook("this.preConfigPromise", this.preConfig(e, t), "assign"), this.preStoragePromise = cc11001100_hook("this.preStoragePromise", va.init(), "assign"), this.initPromise = cc11001100_hook("this.initPromise", this.initSDK(e), "assign"), this.initPromise.then(function () {
          ls.hiLog.info("init success"), n.initDone();
        }).catch(function (e) {
          ls.hiLog.warn(ka, Oa.code, Oa.message);
        });
      }
      return e.prototype.preConfig = cc11001100_hook("e.prototype.preConfig", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, ls.hiAgcUtil.init()];
              case 1:
                return e.sent(), os.initDebugMode(rs.debugMode, rs.terminalName), os.initLogLevel(rs.logDisabled, rs.logLevel), os.urlClusteringOptions = cc11001100_hook("os.urlClusteringOptions", JSON.parse(JSON.stringify(Es)), "assign"), os.addConfig("launchAppTime", new Date().getTime()), [2, os.checkAgcConfig()];
            }
          });
        });
      }, "assign"), e.prototype.initDone = cc11001100_hook("e.prototype.initDone", function () {
        fs.initialized = cc11001100_hook("fs.initialized", !0, "assign"), fs.processEventsReceived(), ls.sendPolicy.eventUploadPolicyScheduleTime(), ls.sendPolicy.logUploadPolicyScheduleTime(), setTimeout(function () {
          ls.sendPolicy.eventUploadPolicyLaunch(), ls.sendPolicy.logUploadPolicyLaunch();
        }, 50), setInterval(function () {
          ls.sendPolicy.eventUploadPolicyThreshold(), ls.sendPolicy.logUploadPolicyThreshold();
        }, 1e3);
      }, "assign"), e.prototype.initSDK = cc11001100_hook("e.prototype.initSDK", function (e) {
        return fn(this, void 0, void 0, function () {
          var e, t;
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                return ls.hiAutoReport.initAutoEvents(), [4, this.preConfigPromise];
              case 1:
                return n.sent() ? [4, this.preStoragePromise] : [2, Promise.reject()];
              case 2:
                return n.sent(), os.campaignPushInfo = cc11001100_hook("os.campaignPushInfo", ls.hiClient.getCampaignPushInfo(), "assign"), [4, gs.init([vs, Fa], [ms])];
              case 3:
                return n.sent(), [4, os.init()];
              case 4:
                return n.sent(), ps.init(), [4, ls.sendTask.init()];
              case 5:
                return n.sent(), [4, ls.sendLogTask.init()];
              case 6:
                return n.sent(), os.initPrevScreen(), ls.hiAutoReport.initEventTriggers(), [4, Ha.collect(Ua)];
              case 7:
                return (e = cc11001100_hook("e", n.sent(), "assign"))[Ua] && (os.addConfig("aaid", e[Ua]), os.setIsTestDevice()), null == (t = cc11001100_hook("t", va.getClientValue(Hr), "assign")) || "" === t ? (hs.reportFirstOpenEvent(), va.saveClientValue(Hr, "true")) : "true" === t && va.saveClientValue(Hr, "false"), os.getNewUserFlag(), va.getSessionValue() || hs.reportLaunchAppEvent(), hs.reportCampaignPushInfoEvent(), [2];
            }
          });
        });
      }, "assign"), e.prototype.destroySDK = cc11001100_hook("e.prototype.destroySDK", function () {}, "assign"), e.prototype.setAnalyticsEnabled = cc11001100_hook("e.prototype.setAnalyticsEnabled", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return t.sent(), fs.setAnalyticsEnabled(e), [2];
            }
          });
        });
      }, "assign"), e.prototype.setRestrictionEnabled = cc11001100_hook("e.prototype.setRestrictionEnabled", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return t.sent(), fs.setRestrictionEnabled(e), [2];
            }
          });
        });
      }, "assign"), e.prototype.isRestrictionEnabled = cc11001100_hook("e.prototype.isRestrictionEnabled", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return e.sent(), [2, fs.isRestrictionEnabled()];
            }
          });
        });
      }, "assign"), e.prototype.setRestrictionShared = cc11001100_hook("e.prototype.setRestrictionShared", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return t.sent(), fs.setRestrictionShared(e), [2];
            }
          });
        });
      }, "assign"), e.prototype.isRestrictionShared = cc11001100_hook("e.prototype.isRestrictionShared", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return e.sent(), [2, fs.isRestrictionShared()];
            }
          });
        });
      }, "assign"), e.prototype.setUserId = cc11001100_hook("e.prototype.setUserId", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return t.sent(), fs.reportFlag ? (ps.setUserId(e), [2]) : [2];
            }
          });
        });
      }, "assign"), e.prototype.setUserProfile = cc11001100_hook("e.prototype.setUserProfile", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return n.sent(), fs.reportFlag ? (os.setUserProfile(e, t), [2]) : [2];
            }
          });
        });
      }, "assign"), e.prototype.getUserProfiles = cc11001100_hook("e.prototype.getUserProfiles", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return t.sent(), fs.reportFlag ? [2, os.getUserProfiles(e)] : [2, {}];
            }
          });
        });
      }, "assign"), e.prototype.pageStart = cc11001100_hook("e.prototype.pageStart", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return t.sent(), fs.reportFlag ? (os.pageStart(e), [2]) : [2];
            }
          });
        });
      }, "assign"), e.prototype.pageEnd = cc11001100_hook("e.prototype.pageEnd", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return t.sent(), fs.reportFlag ? (os.pageEnd(e), [2]) : [2];
            }
          });
        });
      }, "assign"), e.prototype.setSessionDuration = cc11001100_hook("e.prototype.setSessionDuration", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.preConfigPromise];
              case 1:
                return t.sent(), fs.reportFlag ? (Number.isInteger(e) && ps.setSessionDuration(e), [2]) : [2];
            }
          });
        });
      }, "assign"), e.prototype.onEvent = cc11001100_hook("e.prototype.onEvent", function (e, t) {
        return fn(this, void 0, void 0, function () {
          var n;
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return r.sent(), fs.reportFlag ? (n = cc11001100_hook("n", {
                  isReserved: cc11001100_hook("isReserved", Wr.some(function (t) {
                    return t === e;
                  }), "object-key-init")
                }, "assign"), fs.onEvent(e, t, n), [2]) : (ls.hiLog.warn(ka, Pa.code, Pa.message), [2]);
            }
          });
        });
      }, "assign"), e.prototype.setAppVersion = cc11001100_hook("e.prototype.setAppVersion", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.preConfigPromise];
              case 1:
                return t.sent(), fs.reportFlag ? Ra.checkString(ka, "app version", e, lr) ? (os.addConfig("appVersion", e), [2]) : [2] : [2];
            }
          });
        });
      }, "assign"), e.prototype.getAAID = cc11001100_hook("e.prototype.getAAID", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return e.sent(), [2, os.getAAID()];
            }
          });
        });
      }, "assign"), e.prototype.addDefaultEventParams = cc11001100_hook("e.prototype.addDefaultEventParams", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return t.sent(), fs.reportFlag ? (fs.addDefaultEventParams(e), [2]) : [2];
            }
          });
        });
      }, "assign"), e.prototype.writeLog = cc11001100_hook("e.prototype.writeLog", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return n.sent(), fs.reportFlag ? (fs.writeLog(e, t), [2]) : (ls.hiLog.warn(ka, Pa.code, Pa.message), [2]);
            }
          });
        });
      }, "assign"), e.prototype.setRoutePolicy = cc11001100_hook("e.prototype.setRoutePolicy", function (e) {
        return fn(this, void 0, void 0, function () {
          var t, n;
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.initPromise];
              case 1:
                return r.sent(), t = cc11001100_hook("t", os.getRoutePolicy(), "assign"), os.setRoutePolicy(e), n = cc11001100_hook("n", os.getRoutePolicy(), "assign"), t === n ? [2] : (fs.reportFlag || ls.sendTask.clearData(t), [4, os.updateAnalyticsUrl()]);
              case 2:
                return r.sent(), [2];
            }
          });
        });
      }, "assign"), e.prototype.setReportPolicies = cc11001100_hook("e.prototype.setReportPolicies", function (e) {
        return fn(this, void 0, void 0, function () {
          var t;
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.preConfigPromise];
              case 1:
                return n.sent(), t = cc11001100_hook("t", {}, "assign"), "number" != typeof e.ON_SCHEDULED_TIME_POLICY ? t.ON_SCHEDULED_TIME_POLICY = cc11001100_hook("t.ON_SCHEDULED_TIME_POLICY", as.ON_SCHEDULED_TIME_POLICY, "assign") : e.ON_SCHEDULED_TIME_POLICY < Lr ? t.ON_SCHEDULED_TIME_POLICY = cc11001100_hook("t.ON_SCHEDULED_TIME_POLICY", Lr, "assign") : e.ON_SCHEDULED_TIME_POLICY > $r ? t.ON_SCHEDULED_TIME_POLICY = cc11001100_hook("t.ON_SCHEDULED_TIME_POLICY", $r, "assign") : t.ON_SCHEDULED_TIME_POLICY = cc11001100_hook("t.ON_SCHEDULED_TIME_POLICY", e.ON_SCHEDULED_TIME_POLICY, "assign"), "number" != typeof e.ON_CACHE_THRESHOLD_POLICY ? t.ON_CACHE_THRESHOLD_POLICY = cc11001100_hook("t.ON_CACHE_THRESHOLD_POLICY", as.ON_CACHE_THRESHOLD_POLICY, "assign") : e.ON_CACHE_THRESHOLD_POLICY < Dr ? t.ON_CACHE_THRESHOLD_POLICY = cc11001100_hook("t.ON_CACHE_THRESHOLD_POLICY", Dr, "assign") : e.ON_CACHE_THRESHOLD_POLICY > kr ? t.ON_CACHE_THRESHOLD_POLICY = cc11001100_hook("t.ON_CACHE_THRESHOLD_POLICY", kr, "assign") : t.ON_CACHE_THRESHOLD_POLICY = cc11001100_hook("t.ON_CACHE_THRESHOLD_POLICY", e.ON_CACHE_THRESHOLD_POLICY, "assign"), va.saveClientValue("HW_ha_eventUploadPolicy", t), [2];
            }
          });
        });
      }, "assign"), e.prototype.onReport = cc11001100_hook("e.prototype.onReport", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.preConfigPromise];
              case 1:
                return e.sent(), [2, fs.onReport()];
            }
          });
        });
      }, "assign"), e;
    }(), "var-init"),
    Ss = function (e, t, n, r) {
      r && (r.$1 && (n = cc11001100_hook("n", n.replace("$1", r.$1), "assign")), r.$2 && (n = cc11001100_hook("n", n.replace("$2", r.$2), "assign")));
      var i = cc11001100_hook("i", [], "var-init");
      return e && i.push(e), t && i.push(t), n && i.push(n), Ts + " => " + i.join("|");
    },
    Ts = cc11001100_hook("Ts", "OpennessSDK", "var-init"),
    ws = cc11001100_hook("ws", new (function () {
      function e() {}
      return e.prototype.info = cc11001100_hook("e.prototype.info", function (e, t) {
        if (ga(this.generateLevels(os.logLevel), Xa.INFO)) {
          var n = cc11001100_hook("n", Ss(null, null, e, t), "var-init");
          this.printInfo(n);
        }
      }, "assign"), e.prototype.warn = cc11001100_hook("e.prototype.warn", function (e, t, n, r) {
        if (ga(this.generateLevels(os.logLevel), Xa.WARN)) {
          var i = cc11001100_hook("i", Ss(e, t, n, r), "var-init");
          this.printWarn(i), r && r.$error && this.printError(r.$error);
        }
      }, "assign"), e.prototype.error = cc11001100_hook("e.prototype.error", function (e, t, n, r) {
        if (ga(this.generateLevels(os.logLevel), Xa.ERROR)) {
          var i = cc11001100_hook("i", Ss(e, t, n, r), "var-init");
          this.printError(i), r && r.$error && this.printError(r.$error);
        }
      }, "assign"), e.prototype.generateLevels = cc11001100_hook("e.prototype.generateLevels", function (e) {
        return e === Xa.INFO ? [Xa.INFO, Xa.WARN, Xa.ERROR] : e === Xa.WARN ? [Xa.WARN, Xa.ERROR] : e === Xa.ERROR ? [Xa.ERROR] : [];
      }, "assign"), e.prototype.printInfo = cc11001100_hook("e.prototype.printInfo", function (e) {
        console.info(e);
      }, "assign"), e.prototype.printWarn = cc11001100_hook("e.prototype.printWarn", function (e) {
        console.warn(e);
      }, "assign"), e.prototype.printError = cc11001100_hook("e.prototype.printError", function (e) {
        console.error(e);
      }, "assign"), e;
    }())(), "var-init"),
    Cs = cc11001100_hook("Cs", [].slice, "var-init"),
    As = cc11001100_hook("As", {}, "var-init"),
    bs = function (e, t, n) {
      if (!(t in As)) {
        for (var r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t; i++) r[i] = cc11001100_hook("r[i]", "a[" + i + "]", "assign");
        As[t] = cc11001100_hook("As[t]", Function("F,a", "return new F(" + r.join(",") + ")"), "assign");
      }
      return As[t](e, n);
    },
    Is = cc11001100_hook("Is", Function.bind || function (e) {
      var t = cc11001100_hook("t", M(this), "var-init"),
        n = cc11001100_hook("n", Cs.call(arguments, 1), "var-init"),
        r = function () {
          var i = cc11001100_hook("i", n.concat(Cs.call(arguments)), "var-init");
          return this instanceof r ? bs(t, i.length, i) : ae(t, i, e);
        };
      return y(t.prototype) && (r.prototype = cc11001100_hook("r.prototype", t.prototype, "assign")), r;
    }, "var-init");
  B(B.P, "Function", {
    bind: cc11001100_hook("bind", Is, "object-key-init")
  });
  var Ps = cc11001100_hook("Ps", new (function () {
      function e() {}
      return e.prototype.initAutoEvents = cc11001100_hook("e.prototype.initAutoEvents", function () {
        this.attachEventListener(window, "DOMContentLoaded", hs.reportPageEntryEvent.bind(hs)), this.attachEventListener(window, "beforeunload", hs.reportPageExitEvent.bind(hs)), this.attachEventListener(window, "load", hs.computeLoadTime.bind(hs)), this.attachEventListener(document, "visibilitychange", hs.stateChanged.bind(hs));
      }, "assign"), e.prototype.attachEventListener = cc11001100_hook("e.prototype.attachEventListener", function (e, t, n) {
        var r = cc11001100_hook("r", this, "var-init");
        e.attachEvent ? e.attachEvent("on" + t, function () {
          n.apply(r);
        }) : e.addEventListener(t, function () {
          n.apply(r);
        }, !1);
      }, "assign"), e.prototype.initEventTriggers = cc11001100_hook("e.prototype.initEventTriggers", function () {}, "assign"), e.prototype.isLaunchUpload = cc11001100_hook("e.prototype.isLaunchUpload", function () {
        return !1;
      }, "assign"), e;
    }())(), "var-init"),
    Os = cc11001100_hook("Os", new (function () {
      function e() {
        this.url = cc11001100_hook("this.url", "", "assign"), this.sendFun = cc11001100_hook("this.sendFun", {}, "assign"), this.sendFun[An.AJAX] = cc11001100_hook("this.sendFun[An.AJAX]", this.sendByAjax, "assign"), this.sendFun[An.BEACON] = cc11001100_hook("this.sendFun[An.BEACON]", this.sendByBeacon, "assign"), this.sendFun[An.IMG] = cc11001100_hook("this.sendFun[An.IMG]", this.sendByImg, "assign");
      }
      return e.prototype.onEvent = cc11001100_hook("e.prototype.onEvent", function (e, t, n) {
        (n = cc11001100_hook("n", n || {}, "assign")).async = cc11001100_hook("(n = n || {}).async", n.async || !0, "assign");
        var r = cc11001100_hook("r", n && n.mode, "var-init");
        return r && this.sendFun[r] ? this.sendFun[r].call(this, e, t, n) : this.smartSend(e, t, n);
      }, "assign"), e.prototype.smartSend = cc11001100_hook("e.prototype.smartSend", function (e, t, n) {
        return "undefined" != typeof fetch && (null == n ? void 0 : n.async) ? this.sendByBeacon(e, t, n) : window.XMLHttpRequest ? this.sendByAjax(e, t, n) : this.sendByImg(e, t, n);
      }, "assign"), e.prototype.sendByBeacon = cc11001100_hook("e.prototype.sendByBeacon", function (e, t, n) {
        if ("undefined" != typeof fetch) {
          var r = cc11001100_hook("r", (null == n ? void 0 : n.url) || this.url, "var-init"),
            i = cc11001100_hook("i", new Headers(t), "var-init");
          return new Promise(function (t, n) {
            fetch(r, {
              method: cc11001100_hook("method", "POST", "object-key-init"),
              body: cc11001100_hook("body", JSON.stringify(e), "object-key-init"),
              headers: cc11001100_hook("headers", i, "object-key-init")
            }).then(function (e) {
              e.ok ? t() : n(e.statusText);
            }).catch(function (e) {
              n(e);
            });
          });
        }
        return Promise.reject(new Error("missing fetch method"));
      }, "assign"), e.prototype.sendByAjax = cc11001100_hook("e.prototype.sendByAjax", function (e, t, n) {
        var r = cc11001100_hook("r", this, "var-init");
        return void 0 === t && (t = cc11001100_hook("t", {}, "assign")), new Promise(function (i, o) {
          var a = cc11001100_hook("a", (null == n ? void 0 : n.url) || r.url, "var-init");
          if (window.XMLHttpRequest && a) {
            var s = cc11001100_hook("s", new XMLHttpRequest(), "var-init");
            if (s.onabort = cc11001100_hook("s.onabort", function () {
              o(new Error("The request was aborted!"));
            }, "assign"), s.onerror = cc11001100_hook("s.onerror", function () {
              o(new Error("An error occurred during the transaction!"));
            }, "assign"), s.ontimeout = cc11001100_hook("s.ontimeout", function () {
              o(new Error("Timeout!"));
            }, "assign"), s.onload = cc11001100_hook("s.onload", function () {
              i();
            }, "assign"), n && "get" === String(n.method).toLocaleLowerCase()) {
              for (var c in s.open("GET", a + "?" + e, !0), t) s.setRequestHeader(c, t[c]);
              s.send();
            } else {
              var u = cc11001100_hook("u", n && n.async, "var-init");
              for (var c in s.open("POST", a, null == u || u), t) s.setRequestHeader(c, t[c]);
              s.send(JSON.stringify(e));
            }
          } else o(new Error("url is missing"));
        });
      }, "assign"), e.prototype.sendByImg = cc11001100_hook("e.prototype.sendByImg", function (e, t, n) {
        return Promise.reject(new Error("not supported"));
      }, "assign"), e.prototype.setUrl = cc11001100_hook("e.prototype.setUrl", function (e) {
        this.url = cc11001100_hook("this.url", e, "assign");
      }, "assign"), e;
    }())(), "var-init"),
    _s = cc11001100_hook("_s", new (function () {
      function e() {}
      return e.prototype.getReferrer = cc11001100_hook("e.prototype.getReferrer", function () {
        return document && document.referrer;
      }, "assign"), e.prototype.getHref = cc11001100_hook("e.prototype.getHref", function () {
        return window && window.location.href;
      }, "assign"), e.prototype.getHost = cc11001100_hook("e.prototype.getHost", function () {
        return window && window.location.host;
      }, "assign"), e.prototype.getDefaultTitle = cc11001100_hook("e.prototype.getDefaultTitle", function () {
        return document && document.title;
      }, "assign"), e.prototype.getUAType = cc11001100_hook("e.prototype.getUAType", function () {
        var e = cc11001100_hook("e", navigator.userAgent, "var-init");
        return e.match(/AppleWebKit.*Mobile.*/) ? -1 !== e.indexOf(" wv") ? 2 : 1 : 0;
      }, "assign"), e.prototype.getStartType = cc11001100_hook("e.prototype.getStartType", function () {
        var e;
        try {
          var t = cc11001100_hook("t", os.campaignPushInfo, "var-init");
          return null !== (e = cc11001100_hook("e", null == t ? void 0 : t.source, "assign")) && void 0 !== e ? e : es.parse(this.getReferrer()).origin;
        } catch (e) {
          return "";
        }
      }, "assign"), e.prototype.getStartScene = cc11001100_hook("e.prototype.getStartScene", function () {
        return null;
      }, "assign"), e.prototype.getLibType = cc11001100_hook("e.prototype.getLibType", function () {
        return "Web";
      }, "assign"), e.prototype.getOaid = cc11001100_hook("e.prototype.getOaid", function () {
        return Promise.resolve("");
      }, "assign"), e.prototype.getOaidSource = cc11001100_hook("e.prototype.getOaidSource", function () {
        return Promise.resolve("");
      }, "assign"), e.prototype.getClientOaidFlag = cc11001100_hook("e.prototype.getClientOaidFlag", function () {
        return Promise.resolve(!1);
      }, "assign"), e.prototype.getServerOaidFlag = cc11001100_hook("e.prototype.getServerOaidFlag", function () {
        return Promise.resolve(!1);
      }, "assign"), e.prototype.getSystemOaidFlag = cc11001100_hook("e.prototype.getSystemOaidFlag", function () {
        return Promise.resolve(!1);
      }, "assign"), e.prototype.getCampaignPushInfo = cc11001100_hook("e.prototype.getCampaignPushInfo", function () {
        try {
          var e = cc11001100_hook("e", es.parse(this.getHref()), "var-init");
          if (!(null == e ? void 0 : e.searchParams)) return null;
          var t = cc11001100_hook("t", e.searchParams.get("$CampaignPushInfo"), "var-init");
          if (!t) return null;
          var n = cc11001100_hook("n", JSON.parse(t), "var-init");
          return n && 0 !== Object.keys(n).length ? n : null;
        } catch (e) {
          return ls.hiLog.warn(ka, "", e.message), null;
        }
      }, "assign"), e.prototype.isOnline = cc11001100_hook("e.prototype.isOnline", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2, !0];
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    Ns = cc11001100_hook("Ns", _.f, "var-init"),
    Rs = cc11001100_hook("Rs", Function.prototype, "var-init"),
    Ls = cc11001100_hook("Ls", /^\s*function ([^ (]*)/, "var-init");
  "name" in Rs || w && Ns(Rs, "name", {
    configurable: cc11001100_hook("configurable", !0, "object-key-init"),
    get: function () {
      try {
        return ("" + this).match(Ls)[1];
      } catch (e) {
        return "";
      }
    }
  });
  var $s = cc11001100_hook("$s", new (function () {
      function e() {
        this.infoMap = cc11001100_hook("this.infoMap", {
          browser: cc11001100_hook("browser", ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera"], "object-key-init"),
          os: cc11001100_hook("os", ["Windows", "Linux", "Mac OS", "Android", "HarmonyOS", "Ubuntu", "iOS"], "object-key-init")
        }, "assign");
      }
      return e.prototype.getMatchMap = cc11001100_hook("e.prototype.getMatchMap", function (e) {
        return {
          Windows: cc11001100_hook("Windows", e.indexOf("windows") > -1, "object-key-init"),
          Linux: cc11001100_hook("Linux", e.indexOf("linux") > -1 || e.indexOf("x11") > -1, "object-key-init"),
          "Mac OS": cc11001100_hook("Mac OS", e.indexOf("macintosh") > -1, "object-key-init"),
          Android: cc11001100_hook("Android", e.indexOf("android") > -1 || e.indexOf("adr") > -1, "object-key-init"),
          HarmonyOS: cc11001100_hook("HarmonyOS", e.indexOf("harmonyos") > -1, "object-key-init"),
          Ubuntu: cc11001100_hook("Ubuntu", e.indexOf("ubuntu") > -1, "object-key-init"),
          iOS: cc11001100_hook("iOS", e.indexOf("like mac os x") > -1, "object-key-init")
        };
      }, "assign"), e.prototype.getMatchInfo = cc11001100_hook("e.prototype.getMatchInfo", function (e) {
        var t = cc11001100_hook("t", "", "var-init"),
          n = cc11001100_hook("n", this.getMatchMap(e), "var-init");
        for (var r in this.infoMap) for (var i = cc11001100_hook("i", 0, "var-init"); i < this.infoMap[r].length; i++) {
          var o = cc11001100_hook("o", this.infoMap[r][i], "var-init");
          n[o] && (t = cc11001100_hook("t", o, "assign"));
        }
        return t;
      }, "assign"), e.prototype.getOSName = cc11001100_hook("e.prototype.getOSName", function (e) {
        return this.getMatchInfo(e);
      }, "assign"), e.prototype.getOsVersion = cc11001100_hook("e.prototype.getOsVersion", function (e) {
        var t = cc11001100_hook("t", "", "var-init"),
          n = cc11001100_hook("n", {
            Windows: function () {
              var t = cc11001100_hook("t", e.replace(/^.*windows nt ([\d.]+);.*$/, "$1"), "var-init"),
                n = cc11001100_hook("n", [{
                  version: cc11001100_hook("version", "6.4", "object-key-init"),
                  name: cc11001100_hook("name", "10", "object-key-init")
                }, {
                  version: cc11001100_hook("version", "6.3", "object-key-init"),
                  name: cc11001100_hook("name", "8.1", "object-key-init")
                }, {
                  version: cc11001100_hook("version", "6.2", "object-key-init"),
                  name: cc11001100_hook("name", "8", "object-key-init")
                }, {
                  version: cc11001100_hook("version", "6.1", "object-key-init"),
                  name: cc11001100_hook("name", "7", "object-key-init")
                }, {
                  version: cc11001100_hook("version", "6.0", "object-key-init"),
                  name: cc11001100_hook("name", "Vista", "object-key-init")
                }, {
                  version: cc11001100_hook("version", "5.2", "object-key-init"),
                  name: cc11001100_hook("name", "XP", "object-key-init")
                }, {
                  version: cc11001100_hook("version", "5.1", "object-key-init"),
                  name: cc11001100_hook("name", "XP", "object-key-init")
                }, {
                  version: cc11001100_hook("version", "5.0", "object-key-init"),
                  name: cc11001100_hook("name", "2000", "object-key-init")
                }].find(function (e) {
                  return e.version === t;
                }), "var-init");
              return n && n.name || t;
            },
            Android: function () {
              return e.replace(/^.*android ([\d.]+);.*$/, "$1");
            },
            HarmonyOS: function () {
              return e.replace(/^.*harmonyos ([\d.]+);.*$/, "$1");
            },
            iOS: function () {
              return e.replace(/^.*os ([\d_]+) like.*$/, "$1").replace(/_/g, ".");
            },
            "Mac OS": function () {
              return e.replace(/^.*mac os x ([\d_]+).*$/, "$1").replace(/_/g, ".");
            }
          }, "var-init"),
          r = cc11001100_hook("r", this.getOSName(e), "var-init");
        return n[r] && (t = cc11001100_hook("t", n[r](), "assign")) === e && (t = cc11001100_hook("t", "", "assign")), t;
      }, "assign"), e.prototype.getBrowserInfo = cc11001100_hook("e.prototype.getBrowserInfo", function () {
        var e,
          t = cc11001100_hook("t", {}, "var-init"),
          n = cc11001100_hook("n", navigator.userAgent.toLowerCase(), "var-init");
        return (e = cc11001100_hook("e", n.match(/edge\/([\d.]+)/), "assign")) ? t.edge = cc11001100_hook("t.edge", e[1], "assign") : (e = cc11001100_hook("e", n.match(/rv:([\d.]+)\) like gecko/), "assign")) || (e = cc11001100_hook("e", n.match(/msie ([\d.]+)/), "assign")) ? t.ie = cc11001100_hook("t.ie", e[1], "assign") : (e = cc11001100_hook("e", n.match(/firefox\/([\d.]+)/), "assign")) ? t.firefox = cc11001100_hook("t.firefox", e[1], "assign") : (e = cc11001100_hook("e", n.match(/chrome\/([\d.]+)/), "assign")) ? t.chrome = cc11001100_hook("t.chrome", e[1], "assign") : (e = cc11001100_hook("e", n.match(/opera.([\d.]+)/), "assign")) ? t.opera = cc11001100_hook("t.opera", e[1], "assign") : (e = cc11001100_hook("e", n.match(/version\/([\d.]+).*safari/), "assign")) && (t.safari = cc11001100_hook("t.safari", e[1], "assign")), t.chrome ? {
          broswer: cc11001100_hook("broswer", ar, "object-key-init"),
          version: cc11001100_hook("version", t.chrome, "object-key-init")
        } : t.opera ? {
          broswer: cc11001100_hook("broswer", sr, "object-key-init"),
          version: cc11001100_hook("version", t.opera, "object-key-init")
        } : t.safari ? {
          broswer: cc11001100_hook("broswer", cr, "object-key-init"),
          version: cc11001100_hook("version", t.safari, "object-key-init")
        } : t.edge ? {
          broswer: cc11001100_hook("broswer", rr, "object-key-init"),
          version: cc11001100_hook("version", t.edge, "object-key-init")
        } : t.ie ? {
          broswer: cc11001100_hook("broswer", ir, "object-key-init"),
          version: cc11001100_hook("version", t.ie, "object-key-init")
        } : t.firefox ? {
          broswer: cc11001100_hook("broswer", or, "object-key-init"),
          version: cc11001100_hook("version", t.firefox, "object-key-init")
        } : {
          broswer: cc11001100_hook("broswer", "", "object-key-init"),
          version: cc11001100_hook("version", "0", "object-key-init")
        };
      }, "assign"), e.prototype.generateUserCommonProperty = cc11001100_hook("e.prototype.generateUserCommonProperty", function () {
        return fn(this, void 0, void 0, function () {
          var e, t, n, r, i;
          return pn(this, function (o) {
            switch (o.label) {
              case 0:
                return this.immutableProperties || (e = cc11001100_hook("e", navigator.userAgent.toLowerCase(), "assign"), t = cc11001100_hook("t", navigator.language.split("-").join("_").toLocaleUpperCase(), "assign"), n = cc11001100_hook("n", this.getBrowserInfo(), "assign"), this.immutableProperties = cc11001100_hook("this.immutableProperties", {
                  _model: cc11001100_hook("_model", n.broswer, "object-key-init"),
                  _lib_ver: cc11001100_hook("_lib_ver", "6.9.9-301", "object-key-init"),
                  _lib_name: cc11001100_hook("_lib_name", "hianalytics", "object-key-init"),
                  _lib_type: cc11001100_hook("_lib_type", ls.hiClient.getLibType(), "object-key-init"),
                  _sys_language: cc11001100_hook("_sys_language", t, "object-key-init"),
                  _os: cc11001100_hook("_os", this.getOSName(e), "object-key-init"),
                  _os_ver: cc11001100_hook("_os_ver", this.getOsVersion(e), "object-key-init"),
                  _screen_height: cc11001100_hook("_screen_height", window && window.screen.height || 0, "object-key-init"),
                  _screen_width: cc11001100_hook("_screen_width", window && window.screen.width || 0, "object-key-init"),
                  _browser: cc11001100_hook("_browser", n.broswer, "object-key-init"),
                  _browser_version: cc11001100_hook("_browser_version", n.version, "object-key-init"),
                  _browser_language: cc11001100_hook("_browser_language", t, "object-key-init"),
                  _first_open_time: cc11001100_hook("_first_open_time", va.getClientValue("HW_ha_firstOpenTime"), "object-key-init"),
                  _is_testdevice: cc11001100_hook("_is_testdevice", os.isTestDevice(), "object-key-init"),
                  _package_name: cc11001100_hook("_package_name", os.getConfig("appId") || "", "object-key-init")
                }, "assign")), i = cc11001100_hook("i", {
                  _new_user_flag: cc11001100_hook("_new_user_flag", os.getNewUserFlag(), "object-key-init"),
                  _signed: cc11001100_hook("_signed", Number(va.getClientValue("HW_ha_existUserId") || Nr), "object-key-init"),
                  _restriction_enabled: cc11001100_hook("_restriction_enabled", String(fs.isRestrictionEnabled()), "object-key-init")
                }, "assign"), [4, os.resolveTerminalName()];
              case 1:
                return i._terminal_name = cc11001100_hook("i._terminal_name", o.sent(), "assign"), i._app_ver = cc11001100_hook("i._app_ver", os.getConfig("appVersion") || "1.0.0", "assign"), r = cc11001100_hook("r", i, "assign"), os.getRoutePolicy() === Qa.CN && (r._restriction_shared = cc11001100_hook("r._restriction_shared", String(fs.isRestrictionShared()), "assign")), [2, Object.assign(r, this.immutableProperties)];
            }
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    Ds = cc11001100_hook("Ds", new (function () {
      function e() {}
      return e.prototype.getClientValue = cc11001100_hook("e.prototype.getClientValue", function (e) {
        return fn(this, void 0, void 0, function () {
          var t;
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.getSavedObject(e)];
              case 1:
                return t = cc11001100_hook("t", n.sent(), "assign"), 0 === Object.keys(t).length ? [2, Promise.resolve("")] : [2, Promise.resolve(t.value)];
            }
          });
        });
      }, "assign"), e.prototype.getSavedObject = cc11001100_hook("e.prototype.getSavedObject", function (e) {
        return fn(this, void 0, void 0, function () {
          var t,
            n,
            r = cc11001100_hook("r", this, "var-init");
          return pn(this, function (i) {
            return null === (t = cc11001100_hook("t", localStorage.getItem(e), "assign")) ? [2, Promise.resolve({})] : va.isValidStoredItem(t, function () {
              return fn(r, void 0, void 0, function () {
                return pn(this, function (t) {
                  return localStorage.getItem(e) && localStorage.removeItem(e), [2];
                });
              });
            }) ? "object" !== hn(n = cc11001100_hook("n", JSON.parse(t), "assign")) ? [2, Promise.resolve({})] : [2, Promise.resolve(n)] : [2, Promise.resolve({})];
          });
        });
      }, "assign"), e.prototype.getSavedString = cc11001100_hook("e.prototype.getSavedString", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            return [2, Promise.resolve(localStorage.getItem(e) || "")];
          });
        });
      }, "assign"), e.prototype.isKeyExist = cc11001100_hook("e.prototype.isKeyExist", function (e) {
        return fn(this, void 0, void 0, function () {
          var t;
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.getClientValue(e)];
              case 1:
                return t = cc11001100_hook("t", n.sent(), "assign"), [2, Promise.resolve(!!t)];
            }
          });
        });
      }, "assign"), e.prototype.saveClientValue = cc11001100_hook("e.prototype.saveClientValue", function (e, t, n) {
        return fn(this, void 0, void 0, function () {
          var r;
          return pn(this, function (i) {
            return r = cc11001100_hook("r", va.makeExpiryTime(n), "assign"), localStorage.setItem(e, JSON.stringify({
              value: cc11001100_hook("value", t, "object-key-init"),
              expiryTime: cc11001100_hook("expiryTime", r, "object-key-init")
            })), [2, Promise.resolve()];
          });
        });
      }, "assign"), e.prototype.removeItem = cc11001100_hook("e.prototype.removeItem", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.getClientValue(e)];
              case 1:
                return "" !== t.sent() && localStorage.removeItem(e), [2];
            }
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    ks = cc11001100_hook("ks", "ID", "var-init"),
    Us = cc11001100_hook("Us", "CONTENT", "var-init"),
    Ms = cc11001100_hook("Ms", new (function () {
      function e() {}
      return e.prototype.getDatabase = cc11001100_hook("e.prototype.getDatabase", function () {
        return fn(this, void 0, void 0, function () {
          var e = cc11001100_hook("e", this, "var-init");
          return pn(this, function (t) {
            return [2, new Promise(function (t, n) {
              if (e.database) t(e.database);else {
                var r = cc11001100_hook("r", window.indexedDB.open("EventModels.db", 1), "var-init");
                r.onerror = cc11001100_hook("r.onerror", function (e) {
                  ls.hiLog.error(ka, "", "open indexedDB failed");
                }, "assign"), r.onsuccess = cc11001100_hook("r.onsuccess", function (r) {
                  try {
                    e.database = cc11001100_hook("e.database", r.target.result, "assign"), t(e.database);
                  } catch (e) {
                    n(e);
                  }
                }, "assign"), r.onupgradeneeded = cc11001100_hook("r.onupgradeneeded", function (t) {
                  e.database = cc11001100_hook("e.database", t.target.result, "assign");
                  try {
                    e.database.objectStoreNames.contains("EVENTS") || e.database.createObjectStore("EVENTS", {
                      keyPath: cc11001100_hook("keyPath", ks, "object-key-init")
                    });
                  } catch (e) {
                    n(e);
                  }
                }, "assign");
              }
            })];
          });
        });
      }, "assign"), e.prototype.getAllClientValue = cc11001100_hook("e.prototype.getAllClientValue", function (e) {
        return fn(this, void 0, void 0, function () {
          var t = cc11001100_hook("t", this, "var-init");
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.getDatabase()];
              case 1:
                return null == n.sent() ? [2, []] : [2, new Promise(function (n, r) {
                  var i = cc11001100_hook("i", [], "var-init");
                  t.database.transaction("EVENTS").objectStore("EVENTS").openCursor().onsuccess = cc11001100_hook("t.database.transaction(\"EVENTS\").objectStore(\"EVENTS\").openCursor().onsuccess", function (r) {
                    var o = cc11001100_hook("o", r.target.result, "var-init");
                    if (o) {
                      var a = cc11001100_hook("a", o.value, "var-init");
                      Qo(a[Us]) && t.removeItem(a[ks], e), i.push(a[Us]), o.continue();
                    } else n(i);
                  }, "assign");
                })];
            }
          });
        });
      }, "assign"), e.prototype.getClientValues = cc11001100_hook("e.prototype.getClientValues", function (e, t) {
        return fn(this, void 0, void 0, function () {
          var n = cc11001100_hook("n", this, "var-init");
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.getDatabase()];
              case 1:
                return null == r.sent() ? [2, []] : [2, new Promise(function (r, i) {
                  var o = cc11001100_hook("o", [], "var-init");
                  n.database.transaction("EVENTS").objectStore("EVENTS").getAll(e).onsuccess = cc11001100_hook("n.database.transaction(\"EVENTS\").objectStore(\"EVENTS\").getAll(e).onsuccess", function (e) {
                    var i = cc11001100_hook("i", e.target.result, "var-init");
                    if (i) {
                      var a = cc11001100_hook("a", i.value, "var-init");
                      Qo(a[Us]) && n.removeItem(a[ks], t), o.push(a[Us]), i.continue();
                    } else r(o);
                  }, "assign");
                })];
            }
          });
        });
      }, "assign"), e.prototype.getClientValue = cc11001100_hook("e.prototype.getClientValue", function (e, t) {
        return fn(this, void 0, void 0, function () {
          var t = cc11001100_hook("t", this, "var-init");
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.getDatabase()];
              case 1:
                return null == n.sent() ? [2, ""] : [2, new Promise(function (n, r) {
                  var i = cc11001100_hook("i", t.database.transaction("EVENTS").objectStore("EVENTS").get(e), "var-init");
                  i.onerror = cc11001100_hook("i.onerror", function (e) {
                    return n("");
                  }, "assign"), i.onsuccess = cc11001100_hook("i.onsuccess", function (e) {
                    var t;
                    return n((null === (t = cc11001100_hook("t", null == i ? void 0 : i.result, "assign")) || void 0 === t ? void 0 : t.content) || "");
                  }, "assign");
                })];
            }
          });
        });
      }, "assign"), e.prototype.isKeyExist = cc11001100_hook("e.prototype.isKeyExist", function (e, t) {
        return fn(this, void 0, void 0, function () {
          var n;
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.getClientValue(e, t)];
              case 1:
                return n = cc11001100_hook("n", r.sent(), "assign"), [2, Promise.resolve(!!n)];
            }
          });
        });
      }, "assign"), e.prototype.saveClientValue = cc11001100_hook("e.prototype.saveClientValue", function (e, t, n) {
        return fn(this, void 0, void 0, function () {
          var n, r, i;
          return pn(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, this.getDatabase()];
              case 1:
                return null == o.sent() ? [2] : ((n = cc11001100_hook("n", {}, "assign"))[ks] = cc11001100_hook("(n = {})[ks]", e, "assign"), n[Us] = cc11001100_hook("n[Us]", t, "assign"), r = cc11001100_hook("r", this.database.transaction(["EVENTS"], "readwrite").objectStore("EVENTS"), "assign"), (i = cc11001100_hook("i", r.get(e), "assign")).onsuccess = cc11001100_hook("(i = r.get(e)).onsuccess", function (e) {
                  var t = cc11001100_hook("t", i.result, "var-init"),
                    o = cc11001100_hook("o", null != t && Us in t ? r.put(n) : r.add(n), "var-init");
                  o.onsuccess = cc11001100_hook("o.onsuccess", function () {
                    return Promise.resolve();
                  }, "assign"), o.onerror = cc11001100_hook("o.onerror", function (e) {
                    return Promise.reject(e.target.error);
                  }, "assign");
                }, "assign"), i.onerror = cc11001100_hook("i.onerror", function (e) {
                  return Promise.reject(e.target.error);
                }, "assign"), [2, Promise.resolve()]);
            }
          });
        });
      }, "assign"), e.prototype.removeItem = cc11001100_hook("e.prototype.removeItem", function (e, t) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.getDatabase()];
              case 1:
                return null == t.sent() || this.database.transaction(["EVENTS"], "readwrite").objectStore("EVENTS").delete(e), [2];
            }
          });
        });
      }, "assign"), e.prototype.removeItems = cc11001100_hook("e.prototype.removeItems", function (e, t) {
        return fn(this, void 0, void 0, function () {
          var n;
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.getDatabase()];
              case 1:
                if (null == r.sent()) return [2];
                for (n = cc11001100_hook("n", 0, "assign"); n < e.length; n++) this.removeItem(e[n], t);
                return [2];
            }
          });
        });
      }, "assign"), e.prototype.removeAllItems = cc11001100_hook("e.prototype.removeAllItems", function (e) {
        return fn(this, void 0, void 0, function () {
          var e = cc11001100_hook("e", this, "var-init");
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.getDatabase()];
              case 1:
                return null == t.sent() ? [2] : [2, new Promise(function (t, n) {
                  e.database.transaction("EVENTS", "readwrite").objectStore("EVENTS").clear();
                })];
            }
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    xs = cc11001100_hook("xs", function () {
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        this.type = cc11001100_hook("this.type", "", "assign"), this.event = cc11001100_hook("this.event", "", "assign"), this.properties = cc11001100_hook("this.properties", {}, "assign"), this.eventtime = cc11001100_hook("this.eventtime", 0, "assign"), this.event_session_name = cc11001100_hook("this.event_session_name", "", "assign"), this.first_session_event = cc11001100_hook("this.first_session_event", "", "assign"), this.id = cc11001100_hook("this.id", "", "assign"), this.sendState = cc11001100_hook("this.sendState", br, "assign"), this.collectionUrl = cc11001100_hook("this.collectionUrl", "", "assign"), this.routePolicy = cc11001100_hook("this.routePolicy", "", "assign"), this.id = cc11001100_hook("this.id", null != e ? e : ta.create(), "assign");
      }
      return e.toMemoryEventModel = cc11001100_hook("e.toMemoryEventModel", function (e) {
        return ha(e, ["properties", "eventtime", "event_session_name", "first_session_event"]);
      }, "assign"), e.toStorageEventModel = cc11001100_hook("e.toStorageEventModel", function (e) {
        return ha(e, ["sendState"]);
      }, "assign"), e;
    }(), "var-init"),
    Vs = cc11001100_hook("Vs", new (function () {
      function e() {
        this.headAppId = cc11001100_hook("this.headAppId", "", "assign"), this.timestamp = cc11001100_hook("this.timestamp", 0, "assign"), this.serviceTag = cc11001100_hook("this.serviceTag", Yn, "assign"), this.serviceId = cc11001100_hook("this.serviceId", "hmshioperqrt", "assign"), this.reqID = cc11001100_hook("this.reqID", "", "assign"), this.productId = cc11001100_hook("this.productId", "", "assign");
      }
      return e.prototype.setHeadAppId = cc11001100_hook("e.prototype.setHeadAppId", function (e) {
        this.headAppId = cc11001100_hook("this.headAppId", e, "assign");
      }, "assign"), e.prototype.setTimestamp = cc11001100_hook("e.prototype.setTimestamp", function (e) {
        this.timestamp = cc11001100_hook("this.timestamp", e, "assign");
      }, "assign"), e.prototype.setServiceTag = cc11001100_hook("e.prototype.setServiceTag", function (e) {
        this.serviceTag = cc11001100_hook("this.serviceTag", e, "assign");
      }, "assign"), e.prototype.setServiceId = cc11001100_hook("e.prototype.setServiceId", function (e) {
        this.serviceId = cc11001100_hook("this.serviceId", e, "assign");
      }, "assign"), e.prototype.setReqID = cc11001100_hook("e.prototype.setReqID", function (e) {
        this.reqID = cc11001100_hook("this.reqID", e, "assign");
      }, "assign"), e.prototype.setProductId = cc11001100_hook("e.prototype.setProductId", function (e) {
        this.productId = cc11001100_hook("this.productId", e, "assign");
      }, "assign"), e.prototype.getEventHead = cc11001100_hook("e.prototype.getEventHead", function () {
        return {
          protocol_version: cc11001100_hook("protocol_version", "1", "object-key-init"),
          serviceid: cc11001100_hook("serviceid", this.serviceId, "object-key-init"),
          appid: cc11001100_hook("appid", this.headAppId, "object-key-init"),
          timestamp: cc11001100_hook("timestamp", this.timestamp, "object-key-init"),
          servicetag: cc11001100_hook("servicetag", this.serviceTag, "object-key-init"),
          requestid: cc11001100_hook("requestid", this.reqID, "object-key-init"),
          productid: cc11001100_hook("productid", this.productId, "object-key-init")
        };
      }, "assign"), e;
    }())(), "var-init");
  var Hs = cc11001100_hook("Hs", La, "var-init"),
    Fs = cc11001100_hook("Fs", $a, "var-init"),
    js = cc11001100_hook("js", Da, "var-init"),
    Bs = cc11001100_hook("Bs", function () {
      function e() {
        this.sessionFlag = cc11001100_hook("this.sessionFlag", "", "assign"), this.eventUploadData = cc11001100_hook("this.eventUploadData", {}, "assign"), this.isInit = cc11001100_hook("this.isInit", !1, "assign");
      }
      return e.prototype.getEvent = cc11001100_hook("e.prototype.getEvent", function (e, t, n, r, i) {
        var o,
          a,
          s,
          c = cc11001100_hook("c", new xs(), "var-init");
        c.properties = cc11001100_hook("c.properties", t, "assign"), c.event = cc11001100_hook("c.event", e, "assign"), c.eventtime = cc11001100_hook("c.eventtime", r, "assign"), c.type = cc11001100_hook("c.type", n, "assign"), c.first_session_event = cc11001100_hook("c.first_session_event", String(!this.isInit), "assign"), c.event_session_name = cc11001100_hook("c.event_session_name", (Qo(s = cc11001100_hook("s", va.getSessionValue(), "assign")) && (va.handleSessionValue(!0, !1), s = cc11001100_hook("s", va.getSessionValue(), "assign")), s), "assign"), c.sendState = cc11001100_hook("c.sendState", Ir, "assign"), c.collectionUrl = cc11001100_hook("c.collectionUrl", null !== (o = cc11001100_hook("o", i.url, "assign")) && void 0 !== o ? o : os.getConfig("analyticsUrl"), "assign");
        var u = cc11001100_hook("u", null !== (a = cc11001100_hook("a", i.region, "assign")) && void 0 !== a ? a : os.getConfig(Nn), "var-init"),
          l = cc11001100_hook("l", ls.hiAgcUtil.getConfig().region || "", "var-init");
        c.routePolicy = cc11001100_hook("c.routePolicy", "UNKNOWN" === u ? l : u, "assign");
        var f = cc11001100_hook("f", ls.hiAgcUtil.getABTestProvider(), "var-init");
        if (f) {
          var p = cc11001100_hook("p", c, "var-init"),
            h = cc11001100_hook("h", {
              tag: cc11001100_hook("tag", ka, "object-key-init"),
              type: cc11001100_hook("type", n, "object-key-init"),
              source: cc11001100_hook("source", On, "object-key-init")
            }, "var-init");
          f.onEvent(e, p, h);
        }
        return this.isInit || (this.isInit = cc11001100_hook("this.isInit", !0, "assign")), c;
      }, "assign"), e.prototype.generateHttpHeader = cc11001100_hook("e.prototype.generateHttpHeader", function (e) {
        var t = cc11001100_hook("t", void 0 === e ? {} : e, "var-init"),
          n = cc11001100_hook("n", t.reqId, "var-init"),
          r = cc11001100_hook("r", void 0 === n ? "" : n, "var-init"),
          i = cc11001100_hook("i", t.logRegion, "var-init"),
          o = cc11001100_hook("o", void 0 === i ? "" : i, "var-init"),
          a = cc11001100_hook("a", t.sdkToken, "var-init"),
          s = cc11001100_hook("s", void 0 === a ? "" : a, "var-init"),
          c = cc11001100_hook("c", t.supportDebugMode, "var-init"),
          u = cc11001100_hook("u", void 0 === c || c, "var-init"),
          l = cc11001100_hook("l", {}, "var-init");
        return l[Ln] = cc11001100_hook("l[Ln]", os.getConfig("appId"), "assign"), l[Bn] = cc11001100_hook("l[Bn]", os.getConfig("productId"), "assign"), l[jn] = cc11001100_hook("l[jn]", os.getConfig("resourceId"), "assign"), l[$n] = cc11001100_hook("l[$n]", Hs, "assign"), l[kn] = cc11001100_hook("l[kn]", Fs, "assign"), l[Un] = cc11001100_hook("l[Un]", o ? Wn : Yn, "assign"), l[Mn] = cc11001100_hook("l[Mn]", os.getConfig("packageName"), "assign"), l[xn] = cc11001100_hook("l[xn]", r, "assign"), l[Dn] = cc11001100_hook("l[Dn]", js, "assign"), l[Gn] = cc11001100_hook("l[Gn]", os.getConfig("clientId"), "assign"), o && (l[Fn] = cc11001100_hook("l[Fn]", encodeURIComponent(o), "assign")), u && (l[Vn] = cc11001100_hook("l[Vn]", String(os.getConfig(_n)), "assign")), l[Hn] = cc11001100_hook("l[Hn]", s, "assign"), l;
      }, "assign"), e.prototype.generateEventUploadData = cc11001100_hook("e.prototype.generateEventUploadData", function (e, t) {
        var n;
        return fn(this, void 0, void 0, function () {
          var r, i, o, a;
          return pn(this, function (s) {
            switch (s.label) {
              case 0:
                return Vs.setHeadAppId(os.getConfig("appId")), Vs.setProductId(os.getConfig("productId")), Vs.setTimestamp(new Date().getTime()), Vs.setReqID(t), r = cc11001100_hook("r", Vs.getEventHead(), "assign"), (i = cc11001100_hook("i", {}, "assign"))[Pn] = cc11001100_hook("(i = {})[Pn]", e.map(function (e) {
                  return ha(e, ["id", "sendState", "collectionUrl", "routePolicy"]);
                }), "assign"), o = cc11001100_hook("o", null === (n = cc11001100_hook("n", null == e ? void 0 : e[0], "assign")) || void 0 === n ? void 0 : n.routePolicy, "assign"), [4, ps.getUserInfo({
                  routePolicy: cc11001100_hook("routePolicy", o, "object-key-init")
                })];
              case 1:
                return a = cc11001100_hook("a", s.sent(), "assign"), i[In] = cc11001100_hook("i[In]", a, "assign"), this.eventUploadData[bn] = cc11001100_hook("this.eventUploadData[bn]", r, "assign"), this.eventUploadData[On] = cc11001100_hook("this.eventUploadData[On]", i, "assign"), [2, this.eventUploadData];
            }
          });
        });
      }, "assign"), e.prototype.generateLogPayload = cc11001100_hook("e.prototype.generateLogPayload", function (e, t) {
        var n = cc11001100_hook("n", {
            protocol_version: cc11001100_hook("protocol_version", "1", "object-key-init"),
            serviceid: cc11001100_hook("serviceid", "hmshimaintqrt", "object-key-init"),
            appid: cc11001100_hook("appid", os.getConfig("appId"), "object-key-init"),
            timestamp: cc11001100_hook("timestamp", new Date().getTime(), "object-key-init"),
            servicetag: cc11001100_hook("servicetag", Wn, "object-key-init"),
            requestid: cc11001100_hook("requestid", t, "object-key-init"),
            productid: cc11001100_hook("productid", os.getConfig("productId"), "object-key-init")
          }, "var-init"),
          r = cc11001100_hook("r", [], "var-init");
        return e.forEach(function (e) {
          var t,
            n,
            i = cc11001100_hook("i", r.find(function (t) {
              var n = cc11001100_hook("n", t.events_common, "var-init");
              return n.projectId === e.projectId && n.groupId === e.groupId && n.streamId === e.streamId;
            }), "var-init");
          i ? (i.events_common.tags = cc11001100_hook("i.events_common.tags", e.tags, "assign"), i.events.push({
            eventtime: cc11001100_hook("eventtime", String(e.eventtime), "object-key-init"),
            event: cc11001100_hook("event", "$WriteLog", "object-key-init"),
            properties: cc11001100_hook("properties", (t = cc11001100_hook("t", {}, "assign"), t[Jn] = cc11001100_hook("t[Jn]", ts.getPageIdByUrl(os.prevScreenName), "assign"), t[Qn] = cc11001100_hook("t[Qn]", ts.getPageIdByUrl(os.currentScreenName), "assign"), t.$Content = cc11001100_hook("t.$Content", e.content, "assign"), t), "object-key-init")
          })) : r.push({
            events_common: {
              projectId: cc11001100_hook("projectId", e.projectId, "object-key-init"),
              groupId: cc11001100_hook("groupId", e.groupId, "object-key-init"),
              streamId: cc11001100_hook("streamId", e.streamId, "object-key-init"),
              tags: cc11001100_hook("tags", e.tags, "object-key-init")
            },
            events: cc11001100_hook("events", [{
              eventtime: cc11001100_hook("eventtime", String(e.eventtime), "object-key-init"),
              event: cc11001100_hook("event", "$WriteLog", "object-key-init"),
              properties: cc11001100_hook("properties", (n = cc11001100_hook("n", {}, "assign"), n[Jn] = cc11001100_hook("n[Jn]", ts.getPageIdByUrl(os.prevScreenName), "assign"), n[Qn] = cc11001100_hook("n[Qn]", ts.getPageIdByUrl(os.currentScreenName), "assign"), n.$Content = cc11001100_hook("n.$Content", e.content, "assign"), n), "object-key-init")
            }], "object-key-init")
          });
        }), {
          header: cc11001100_hook("header", n, "object-key-init"),
          event: cc11001100_hook("event", r, "object-key-init")
        };
      }, "assign"), e.prototype.getUploadEventModels = cc11001100_hook("e.prototype.getUploadEventModels", function (e, t) {
        var n;
        n = cc11001100_hook("n", e === Gr.STOP_ANALYTICS_COLLECTION ? ls.sendTask.eventModels.filter(function (e) {
          return e.event === Gr.STOP_ANALYTICS_COLLECTION && e.sendState === Ir;
        }) : e === Gr.LaunchApp ? t ? ls.sendTask.eventModels.filter(function (e) {
          var t = cc11001100_hook("t", e.sendState === Ir, "var-init"),
            n = cc11001100_hook("n", e.sendState === _r, "var-init");
          return -1 != [Gr.LaunchApp, Gr.FIRST_OPEN, Gr.ENTER_SCREEN, Gr.EXIT_SCREEN].indexOf(e.event) && (t || n);
        }) : ls.sendTask.eventModels.filter(function (t) {
          var n = cc11001100_hook("n", t.sendState === Ir, "var-init"),
            r = cc11001100_hook("r", t.sendState === _r, "var-init"),
            i = cc11001100_hook("i", t.event !== Gr.STOP_ANALYTICS_COLLECTION, "var-init");
          return t.event === e && (i && n || r);
        }) : t ? ls.sendTask.eventModels.filter(function (t) {
          var n = cc11001100_hook("n", t.sendState === Ir, "var-init"),
            r = cc11001100_hook("r", t.sendState === _r, "var-init"),
            i = cc11001100_hook("i", t.event !== Gr.STOP_ANALYTICS_COLLECTION, "var-init");
          return t.event === e && (i && n || r);
        }) : ls.sendTask.eventModels.filter(function (e) {
          var t = cc11001100_hook("t", e.sendState === Ir, "var-init"),
            n = cc11001100_hook("n", e.sendState === _r, "var-init");
          return e.event !== Gr.STOP_ANALYTICS_COLLECTION && t || n;
        }), "assign");
        var r = cc11001100_hook("r", os.getConfig("analyticsUrl"), "var-init"),
          i = cc11001100_hook("i", "", "var-init"),
          o = cc11001100_hook("o", n.filter(function (e) {
            var t = cc11001100_hook("t", e.collectionUrl, "var-init"),
              n = cc11001100_hook("n", t !== r && ("" === i || t === i), "var-init");
            return n && "" === i && (i = cc11001100_hook("i", e.collectionUrl, "assign")), n;
          }), "var-init");
        return o.length > 0 && (n = cc11001100_hook("n", o, "assign")), n = cc11001100_hook("n", n.filter(function (e) {
          var t = cc11001100_hook("t", !0, "var-init");
          return fs.isDisableEvent(e.event) && (t = cc11001100_hook("t", !1, "assign"), ls.sendTask.eventModels = cc11001100_hook("ls.sendTask.eventModels", ls.sendTask.eventModels.filter(function (t) {
            return t.id !== e.id;
          }), "assign"), ls.hiEventModelsAdapter.removeModel(e.id)), t;
        }), "assign");
      }, "assign"), e.prototype.getUploadLogModels = cc11001100_hook("e.prototype.getUploadLogModels", function () {
        var e = cc11001100_hook("e", ls.sendLogTask.logRecords.filter(function (e) {
            return e.sendState === Ir || e.sendState === _r;
          }), "var-init"),
          t = cc11001100_hook("t", os.getConfig("analyticsUrl"), "var-init"),
          n = cc11001100_hook("n", "", "var-init"),
          r = cc11001100_hook("r", e.filter(function (e) {
            var r = cc11001100_hook("r", e.collectionUrl !== t && ("" === n || e.collectionUrl === n), "var-init");
            return r && "" === n && (n = cc11001100_hook("n", e.collectionUrl, "assign")), r;
          }), "var-init");
        return r.length > 0 && (e = cc11001100_hook("e", r, "assign")), e;
      }, "assign"), e;
    }(), "var-init"),
    Gs = cc11001100_hook("Gs", !1, "var-init"),
    Ws = cc11001100_hook("Ws", new (function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }
      return ln(t, e), t.prototype.saveEventModel = cc11001100_hook("t.prototype.saveEventModel", function (e) {
        return e.event === Gr.EXIT_SCREEN && ls.hiEventModelsAdapter.saveModel(e.id, e), Promise.resolve();
      }, "assign"), t.prototype.dtmProcessAspect = cc11001100_hook("t.prototype.dtmProcessAspect", function (e, t, n) {
        void 0 === n && (n = cc11001100_hook("n", {}, "assign"));
        var r = cc11001100_hook("r", !1, "var-init");
        if (n.isCallBack || !1) return r;
        if ("undefined" != typeof window && window.hmscore_dtm) if (n.isReserved || !1) {
          var i = cc11001100_hook("i", window.hmscore_dtm.logAutoEvent, "var-init");
          "function" == typeof i && i(e, t);
        } else {
          var o = cc11001100_hook("o", window.hmscore_dtm.logEvent, "var-init");
          "function" == typeof o && o(e, t) && (r = cc11001100_hook("r", !0, "assign"));
        }
        return r;
      }, "assign"), t;
    }(function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }
      return ln(t, e), t.prototype.init = cc11001100_hook("t.prototype.init", function () {
        return fn(this, void 0, void 0, function () {
          var e;
          return pn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, ls.hiEventModelsAdapter.queryAllModels(!0)];
              case 1:
                return 0 == (e = cc11001100_hook("e", t.sent(), "assign")).length || this.generateEventModels(e), [2];
            }
          });
        });
      }, "assign"), t.prototype.generateEventModels = cc11001100_hook("t.prototype.generateEventModels", function (e) {
        this.eventModels = cc11001100_hook("this.eventModels", this.eventModels.concat(e.map(function (e) {
          var t = cc11001100_hook("t", new xs(), "var-init");
          Object.assign(t, e), t.sendState = cc11001100_hook("t.sendState", Ir, "assign"), t.collectionUrl = cc11001100_hook("t.collectionUrl", os.getConfig("analyticsUrl"), "assign");
          var n = cc11001100_hook("n", os.getConfig(Nn), "var-init"),
            r = cc11001100_hook("r", ls.hiAgcUtil.getConfig().region || "", "var-init");
          return t.routePolicy = cc11001100_hook("t.routePolicy", "UNKNOWN" === n ? r : n, "assign"), t;
        })), "assign");
      }, "assign"), t.prototype.doEventSendDone = cc11001100_hook("t.prototype.doEventSendDone", function (t, n) {
        void 0 === n && (n = cc11001100_hook("n", !1, "assign")), e.prototype.doEventSendDone.call(this, t, n);
        var r = cc11001100_hook("r", this.eventModels.filter(function (e) {
          return e.sendState === Or;
        }).map(function (e) {
          return e.id;
        }), "var-init");
        ls.hiEventModelsAdapter.removeModels(r);
      }, "assign"), t.prototype.doEventSendFail = cc11001100_hook("t.prototype.doEventSendFail", function (t, n) {
        if (e.prototype.doEventSendFail.call(this, t, n), n || os.getConfig(_n)) {
          var r = cc11001100_hook("r", this.eventModels.filter(function (e) {
            return e.sendState === _r;
          }).map(function (e) {
            return e.id;
          }), "var-init");
          ls.hiEventModelsAdapter.removeModels(r);
        }
      }, "assign"), t.prototype.saveEventModel = cc11001100_hook("t.prototype.saveEventModel", function (e) {
        return ls.hiEventModelsAdapter.saveModel(e.id, e);
      }, "assign"), t.prototype.removeAllEventModels = cc11001100_hook("t.prototype.removeAllEventModels", function () {
        ls.hiEventModelsAdapter.removeAllModels();
      }, "assign"), t.prototype.removeEventModels = cc11001100_hook("t.prototype.removeEventModels", function (e) {
        var t = cc11001100_hook("t", this.eventModels.filter(function (t) {
          return null == e || t.routePolicy === e;
        }).map(function (e) {
          return e.id;
        }), "var-init");
        ls.hiEventModelsAdapter.removeModels(t);
      }, "assign"), t.prototype.generateFinalUploadEventData = cc11001100_hook("t.prototype.generateFinalUploadEventData", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            return [2, e];
          });
        });
      }, "assign"), t.prototype.isServerWebV3 = cc11001100_hook("t.prototype.isServerWebV3", function () {
        return !0;
      }, "assign"), t;
    }(function () {
      function e() {
        this.eventModels = cc11001100_hook("this.eventModels", [], "assign"), this.upLoadService = cc11001100_hook("this.upLoadService", new Bs(), "assign");
      }
      return e.prototype.init = cc11001100_hook("e.prototype.init", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2];
          });
        });
      }, "assign"), e.prototype.uploadData = cc11001100_hook("e.prototype.uploadData", function (e, t) {
        return void 0 === e && (e = cc11001100_hook("e", !1, "assign")), fn(this, void 0, void 0, function () {
          var n,
            r,
            i,
            o,
            a,
            s,
            c,
            u = cc11001100_hook("u", this, "var-init");
          return pn(this, function (l) {
            switch (l.label) {
              case 0:
                return [4, ls.hiClient.isOnline()];
              case 1:
                return l.sent() && (fs.reportFlag || e && t === Gr.STOP_ANALYTICS_COLLECTION) ? 0 === this.eventModels.length ? [2] : [4, this.getAaidAndAuthInfo()] : [2];
              case 2:
                return n = cc11001100_hook("n", l.sent(), "assign"), r = cc11001100_hook("r", n.isValid, "assign"), n.aaid, i = cc11001100_hook("i", n.authInfo, "assign"), r && i ? [4, this.generateFinalUploadInfos(e, t, i)] : [2];
              case 3:
                if (0 === (o = cc11001100_hook("o", l.sent(), "assign")).length) return [2];
                for (a = cc11001100_hook("a", function (t) {
                  0 === t ? s.sendEventData(e, o[t]) : setTimeout(function () {
                    u.sendEventData(e, o[t]);
                  }, 200 * t);
                }, "assign"), s = cc11001100_hook("s", this, "assign"), c = cc11001100_hook("c", 0, "assign"); c < o.length; c++) a(c);
                return [2];
            }
          });
        });
      }, "assign"), e.prototype.sendEventData = cc11001100_hook("e.prototype.sendEventData", function (e, t) {
        var n = cc11001100_hook("n", this, "var-init"),
          r = cc11001100_hook("r", t.finalUploadEventData, "var-init"),
          i = cc11001100_hook("i", t.uploadEventDataEventModels, "var-init"),
          o = cc11001100_hook("o", t.isOtherCollectionUrl, "var-init"),
          a = cc11001100_hook("a", t.config, "var-init"),
          s = cc11001100_hook("s", t.uploadDataHeader, "var-init");
        ls.hiSendData.onEvent(r, s, a).then(function (t) {
          ls.hiLog.info("resultCode: 200"), n.setEventModelsStatus(i, Or), n.doEventSendDone(i, e), n.eventModels = cc11001100_hook("n.eventModels", n.eventModels.filter(function (e) {
            return e.sendState !== Or;
          }), "assign");
        }).catch(function () {
          n.setEventModelsStatus(i, _r), n.doEventSendFail(i, o), (o || os.getConfig(_n)) && (n.eventModels = cc11001100_hook("n.eventModels", n.eventModels.filter(function (e) {
            return e.sendState !== _r;
          }), "assign"));
        });
      }, "assign"), e.prototype.chunkEventModels = cc11001100_hook("e.prototype.chunkEventModels", function (e) {
        for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", ls.sendPolicy.getUploadMaxCount(), "var-init"), r = cc11001100_hook("r", Math.ceil(e.length / n), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r; i++) {
          var o = cc11001100_hook("o", e.slice(i * n, (i + 1) * n), "var-init");
          t.push(o);
        }
        return t;
      }, "assign"), e.prototype.generateFinalUploadInfos = cc11001100_hook("e.prototype.generateFinalUploadInfos", function (e, t, n) {
        return void 0 === e && (e = cc11001100_hook("e", !1, "assign")), fn(this, void 0, void 0, function () {
          var r, i, o, a, s, c, u, l, f, p, h, d, g;
          return pn(this, function (v) {
            switch (v.label) {
              case 0:
                if (r = cc11001100_hook("r", [], "assign"), 0 === (i = cc11001100_hook("i", this.upLoadService.getUploadEventModels(t, e), "assign")).length) return [2, r];
                o = cc11001100_hook("o", this.backupEventModelStatus(i), "assign"), this.setEventModelsStatus(i, Pr), "", a = cc11001100_hook("a", this.upLoadService.generateHttpHeader({
                  reqId: cc11001100_hook("reqId", "", "object-key-init"),
                  sdkToken: cc11001100_hook("sdkToken", n, "object-key-init")
                }), "assign"), s = cc11001100_hook("s", this.chunkEventModels(i), "assign"), c = cc11001100_hook("c", 0, "assign"), v.label = cc11001100_hook("v.label", 1, "assign");
              case 1:
                return c < s.length ? [4, this.getUploadEventDataEventModels(s[c])] : [3, 6];
              case 2:
                return u = cc11001100_hook("u", v.sent(), "assign"), this.revertEventModelStatus(u, s[c], o), l = cc11001100_hook("l", u[0], "assign"), f = cc11001100_hook("f", os.getConfig("analyticsUrl") !== l.collectionUrl, "assign"), p = cc11001100_hook("p", {
                  mode: cc11001100_hook("mode", os.getReportType(), "object-key-init"),
                  url: cc11001100_hook("url", l.collectionUrl, "object-key-init"),
                  async: cc11001100_hook("async", !e, "object-key-init")
                }, "assign"), h = cc11001100_hook("h", ta.create(), "assign"), [4, this.upLoadService.generateEventUploadData(u, h)];
              case 3:
                return d = cc11001100_hook("d", v.sent(), "assign"), this.uploadDataAppendEventHeader(d, l), [4, this.generateFinalUploadEventData(d)];
              case 4:
                if ("string" == typeof (g = cc11001100_hook("g", v.sent(), "assign")) && Qo(g)) return [3, 5];
                a[xn] = cc11001100_hook("a[xn]", h, "assign"), r.push(ha({
                  finalUploadEventData: cc11001100_hook("finalUploadEventData", g, "object-key-init"),
                  uploadEventDataEventModels: cc11001100_hook("uploadEventDataEventModels", u, "object-key-init"),
                  config: cc11001100_hook("config", p, "object-key-init"),
                  isOtherCollectionUrl: cc11001100_hook("isOtherCollectionUrl", f, "object-key-init"),
                  uploadDataHeader: cc11001100_hook("uploadDataHeader", a, "object-key-init")
                })), v.label = cc11001100_hook("v.label", 5, "assign");
              case 5:
                return c++, [3, 1];
              case 6:
                return [2, r];
            }
          });
        });
      }, "assign"), e.prototype.backupEventModelStatus = cc11001100_hook("e.prototype.backupEventModelStatus", function (e) {
        for (var t = cc11001100_hook("t", {}, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
          var r = cc11001100_hook("r", e[n], "var-init");
          t[r.id] = cc11001100_hook("t[r.id]", r.sendState, "assign");
        }
        return t;
      }, "assign"), e.prototype.revertEventModelStatus = cc11001100_hook("e.prototype.revertEventModelStatus", function (e, t, n) {
        if (e.length !== t.length) for (var r = cc11001100_hook("r", e.map(function (e) {
            return e.id;
          }), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) {
          var o = cc11001100_hook("o", t[i], "var-init");
          -1 === r.indexOf(o.id) && this.setEventModelsStatus([o], n[o.id]);
        }
      }, "assign"), e.prototype.getUploadEventDataEventModels = cc11001100_hook("e.prototype.getUploadEventDataEventModels", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            return [2, e];
          });
        });
      }, "assign"), e.prototype.getAaidAndAuthInfo = cc11001100_hook("e.prototype.getAaidAndAuthInfo", function () {
        return fn(this, void 0, void 0, function () {
          var e, t, n;
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return (e = cc11001100_hook("e", os.getAAID(), "assign")) ? [3, 2] : [4, Ha.collect(Ua)];
              case 1:
                if (!(t = cc11001100_hook("t", r.sent(), "assign"))[Ua]) return [2, {
                  isValid: cc11001100_hook("isValid", !1, "object-key-init")
                }];
                os.addConfig("aaid", t[Ua]), os.setIsTestDevice(), e = cc11001100_hook("e", os.getAAID(), "assign"), r.label = cc11001100_hook("r.label", 2, "assign");
              case 2:
                return [4, os.getHaSdkToken()];
              case 3:
                return (n = cc11001100_hook("n", r.sent(), "assign")) ? [2, {
                  aaid: cc11001100_hook("aaid", e, "object-key-init"),
                  authInfo: cc11001100_hook("authInfo", n, "object-key-init"),
                  isValid: cc11001100_hook("isValid", !0, "object-key-init")
                }] : [2, {
                  isValid: cc11001100_hook("isValid", !1, "object-key-init")
                }];
            }
          });
        });
      }, "assign"), e.prototype.uploadDataAppendEventHeader = cc11001100_hook("e.prototype.uploadDataAppendEventHeader", function (e, t) {}, "assign"), e.prototype.generateFinalUploadEventData = cc11001100_hook("e.prototype.generateFinalUploadEventData", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            return [2, e];
          });
        });
      }, "assign"), e.prototype.doEventSendDone = cc11001100_hook("e.prototype.doEventSendDone", function (e, t) {}, "assign"), e.prototype.doEventSendFail = cc11001100_hook("e.prototype.doEventSendFail", function (e, t) {}, "assign"), e.prototype.dtmProcessAspect = cc11001100_hook("e.prototype.dtmProcessAspect", function (e, t, n) {
        return !1;
      }, "assign"), e.prototype.onEvent = cc11001100_hook("e.prototype.onEvent", function (e, t, n, r, i) {
        var o,
          a = cc11001100_hook("a", this, "var-init");
        void 0 === i && (i = cc11001100_hook("i", {}, "assign")), t = cc11001100_hook("t", t || {}, "assign");
        var s = cc11001100_hook("s", i.immediately || !1, "var-init");
        if (!this.dtmProcessAspect(e, t, i) && "" !== (null !== (o = cc11001100_hook("o", i.url, "assign")) && void 0 !== o ? o : os.getConfig("analyticsUrl"))) {
          var c = cc11001100_hook("c", this.upLoadService.getEvent(e, t, n, r, i), "var-init");
          this.pushEventModel(c);
          var u = cc11001100_hook("u", this.saveEventModel(c), "var-init");
          s && u.then(function () {
            a.uploadData(s, e).then(function (e) {}).catch(function (e) {});
          });
        }
      }, "assign"), e.prototype.setHeartbeatFunc = cc11001100_hook("e.prototype.setHeartbeatFunc", function (e) {
        var t = cc11001100_hook("t", this, "var-init");
        this.timer = cc11001100_hook("this.timer", setTimeout(function () {
          Gs || (Gs = cc11001100_hook("Gs", !0, "assign"), t.uploadData(!1, "").then(function (e) {
            Gs = cc11001100_hook("Gs", !1, "assign"), ls.sendPolicy.eventUploadPolicyScheduleTime();
          }).catch(function (e) {
            Gs = cc11001100_hook("Gs", !1, "assign"), ls.sendPolicy.eventUploadPolicyScheduleTime();
          }));
        }, e), "assign");
      }, "assign"), e.prototype.setEventModelsStatus = cc11001100_hook("e.prototype.setEventModelsStatus", function (e, t, n) {
        var r = cc11001100_hook("r", e.map(function (e) {
          return e.id;
        }), "var-init");
        this.eventModels.forEach(function (e) {
          -1 !== r.indexOf(e.id) && (void 0 !== n && e.sendState !== n || (e.sendState = cc11001100_hook("e.sendState", t, "assign")));
        });
      }, "assign"), e.prototype.processEventsReceivedAfterLaunch = cc11001100_hook("e.prototype.processEventsReceivedAfterLaunch", function () {
        "false" === va.getClientValue(Mr) && (this.eventModels.length = cc11001100_hook("this.eventModels.length", 0, "assign"), this.removeAllEventModels());
      }, "assign"), e.prototype.clearData = cc11001100_hook("e.prototype.clearData", function (e) {
        this.removeEventModels(e), this.eventModels = cc11001100_hook("this.eventModels", this.eventModels.filter(function (t) {
          return null != e && t.routePolicy !== e;
        }), "assign");
      }, "assign"), e.prototype.getCurFocusStateSessionDuration = cc11001100_hook("e.prototype.getCurFocusStateSessionDuration", function (e) {
        return os.isBackground ? va.minSessionDuration : va.sessionDuration;
      }, "assign"), e.prototype.pushEventModel = cc11001100_hook("e.prototype.pushEventModel", function (e) {
        this.eventModels.push(e);
      }, "assign"), e.prototype.saveEventModel = cc11001100_hook("e.prototype.saveEventModel", function (e) {
        return Promise.resolve();
      }, "assign"), e.prototype.removeEventModels = cc11001100_hook("e.prototype.removeEventModels", function (e) {}, "assign"), e.prototype.removeAllEventModels = cc11001100_hook("e.prototype.removeAllEventModels", function () {}, "assign"), e.prototype.isServerWebV3 = cc11001100_hook("e.prototype.isServerWebV3", function () {
        return !0;
      }, "assign"), e.prototype.isServerWebEvent = cc11001100_hook("e.prototype.isServerWebEvent", function () {
        return !1;
      }, "assign"), e;
    }())))(), "var-init"),
    Ys = cc11001100_hook("Ys", new (function () {
      function e() {}
      return e.prototype.getClientValue = cc11001100_hook("e.prototype.getClientValue", function (e) {
        var t = cc11001100_hook("t", new RegExp("(^|;)[ ]*" + e + "=([^;]*)").exec(document.cookie), "var-init");
        return Promise.resolve(t ? decodeURIComponent(t[2]) : "");
      }, "assign"), e.prototype.getSavedObject = cc11001100_hook("e.prototype.getSavedObject", function (e) {
        return fn(this, void 0, void 0, function () {
          var t, n;
          return pn(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.getClientValue(e)];
              case 1:
                return t = cc11001100_hook("t", r.sent(), "assign"), n = cc11001100_hook("n", va.makeExpiryTime(31536e6), "assign"), [2, Promise.resolve({
                  value: cc11001100_hook("value", t, "object-key-init"),
                  expiryTime: cc11001100_hook("expiryTime", n, "object-key-init")
                })];
            }
          });
        });
      }, "assign"), e.prototype.getSavedString = cc11001100_hook("e.prototype.getSavedString", function (e) {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (t) {
            return [2, this.getClientValue(e)];
          });
        });
      }, "assign"), e.prototype.isKeyExist = cc11001100_hook("e.prototype.isKeyExist", function (e) {
        return fn(this, void 0, void 0, function () {
          var t;
          return pn(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.getClientValue(e)];
              case 1:
                return t = cc11001100_hook("t", n.sent(), "assign"), [2, Promise.resolve(!!t)];
            }
          });
        });
      }, "assign"), e.prototype.saveClientValue = cc11001100_hook("e.prototype.saveClientValue", function (e, t, n, r, i, o) {
        var a = cc11001100_hook("a", new Date(), "var-init");
        return e !== Mr && e !== xr || (n = cc11001100_hook("n", 31536e6, "assign")), n && a.setTime(a.getTime() + n), document.cookie = cc11001100_hook("document.cookie", e + "=" + encodeURIComponent(t) + (n ? ";expires=" + a.toUTCString() : "") + ";path=" + (r || "/") + (i ? ";domain=" + i : "") + (o ? ";secure" : ""), "assign"), Promise.resolve();
      }, "assign"), e.prototype.removeItem = cc11001100_hook("e.prototype.removeItem", function (e) {
        return document.cookie = cc11001100_hook("document.cookie", e + "=;path=/;expires=" + new Date(0).toUTCString(), "assign"), Promise.resolve();
      }, "assign"), e.prototype.getAllItems = cc11001100_hook("e.prototype.getAllItems", function () {
        return fn(this, void 0, void 0, function () {
          var e, t;
          return pn(this, function (n) {
            return e = cc11001100_hook("e", document.cookie.split(/;\s/g), "assign"), t = cc11001100_hook("t", {}, "assign"), e.forEach(function (e) {
              var n = cc11001100_hook("n", e.split("=")[0].trim(), "var-init");
              -1 !== n.search(new RegExp("^HW_")) && (t[n] = cc11001100_hook("t[n]", e.split("=")[1], "assign"));
            }), [2, Promise.resolve(t)];
          });
        });
      }, "assign"), e;
    }())(), "var-init"),
    Ks = cc11001100_hook("Ks", new (function () {
      function e() {}
      return e.prototype.migrate = cc11001100_hook("e.prototype.migrate", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.migrateCookie2LocalStorage()];
              case 1:
                return e.sent(), [2, Promise.resolve()];
            }
          });
        });
      }, "assign"), e.prototype.migrateCookie2LocalStorage = cc11001100_hook("e.prototype.migrateCookie2LocalStorage", function () {
        return fn(this, void 0, void 0, function () {
          var e, t, n, r, i, o, a;
          return pn(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, Ys.getAllItems()];
              case 1:
                for (n in e = cc11001100_hook("e", s.sent(), "assign"), t = cc11001100_hook("t", [], "assign"), e) t.push(n);
                r = cc11001100_hook("r", 0, "assign"), s.label = cc11001100_hook("s.label", 2, "assign");
              case 2:
                return r < t.length ? (i = cc11001100_hook("i", t[r], "assign"), o = cc11001100_hook("o", this.getSavedKey(i), "assign"), a = cc11001100_hook("a", o === Hr ? "true" : e[i], "assign"), [4, ls.hiStorage.saveClientValue(o, a, this.getDuration(i))]) : [3, 5];
              case 3:
                s.sent(), Ys.removeItem(i), s.label = cc11001100_hook("s.label", 4, "assign");
              case 4:
                return r++, [3, 2];
              case 5:
                return [2];
            }
          });
        });
      }, "assign"), e.prototype.getSavedKey = cc11001100_hook("e.prototype.getSavedKey", function (e) {
        var t = cc11001100_hook("t", ls.hiAgcUtil.getConfig().client.app_id, "var-init"),
          n = cc11001100_hook("n", e, "var-init");
        return n === "HW_ha_" + t ? n = cc11001100_hook("n", Hr, "assign") : n === "HW_hid_" + t ? n = cc11001100_hook("n", Ur, "assign") : "HW_analytics_enabled" === n ? n = cc11001100_hook("n", Mr, "assign") : "HW_ha_restriction_enabled" === n && (n = cc11001100_hook("n", xr, "assign")), n;
      }, "assign"), e.prototype.getDuration = cc11001100_hook("e.prototype.getDuration", function (e) {
        var t = cc11001100_hook("t", 31536e6, "var-init");
        return e === Ur && (t = cc11001100_hook("t", va.sessionDuration, "assign")), t;
      }, "assign"), e;
    }())(), "var-init"),
    qs = cc11001100_hook("qs", !1, "var-init"),
    zs = cc11001100_hook("zs", function () {
      function e() {
        this.logRecords = cc11001100_hook("this.logRecords", [], "assign"), this.timerId = cc11001100_hook("this.timerId", 0, "assign"), this.upLoadService = cc11001100_hook("this.upLoadService", new Bs(), "assign");
      }
      return e.prototype.init = cc11001100_hook("e.prototype.init", function () {
        return fn(this, void 0, void 0, function () {
          return pn(this, function (e) {
            return [2];
          });
        });
      }, "assign"), e.prototype.uploadData = cc11001100_hook("e.prototype.uploadData", function () {
        return fn(this, void 0, void 0, function () {
          var e,
            t,
            n,
            r = cc11001100_hook("r", this, "var-init");
          return pn(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, ls.hiClient.isOnline()];
              case 1:
                return i.sent() && fs.reportFlag ? 0 === this.logRecords.length ? [2] : [4, os.getHaSdkToken()] : [2];
              case 2:
                return (e = cc11001100_hook("e", i.sent(), "assign")) ? (t = cc11001100_hook("t", {
                  mode: cc11001100_hook("mode", os.getReportType(), "object-key-init"),
                  url: cc11001100_hook("url", os.getConfig("analyticsUrl"), "object-key-init")
                }, "assign"), n = cc11001100_hook("n", {}, "assign"), this.logRecords.forEach(function (e) {
                  var t = cc11001100_hook("t", e.sendState, "var-init");
                  if (t === Ir || t === _r) {
                    var r = cc11001100_hook("r", e.region, "var-init");
                    n[r] = cc11001100_hook("n[r]", n[r] || [], "assign"), n[r].push(e);
                  }
                }), Object.entries(n).forEach(function (n) {
                  for (var i = cc11001100_hook("i", n[0], "var-init"), o = cc11001100_hook("o", n[1], "var-init"), a = cc11001100_hook("a", r.chunkLogDatas(o), "var-init"), s = function (n) {
                      var o = cc11001100_hook("o", a[n], "var-init");
                      if (0 === o.length) return {
                        value: cc11001100_hook("value", void 0, "object-key-init")
                      };
                      var s = cc11001100_hook("s", ta.create(), "var-init"),
                        c = cc11001100_hook("c", r.upLoadService.generateLogPayload(o, s), "var-init"),
                        u = cc11001100_hook("u", r.generateFinalUploadLogData(c), "var-init");
                      if ("string" == typeof u && Qo(u)) return {
                        value: cc11001100_hook("value", void 0, "object-key-init")
                      };
                      var l = cc11001100_hook("l", r.upLoadService.generateHttpHeader({
                        reqId: cc11001100_hook("reqId", s, "object-key-init"),
                        logRegion: cc11001100_hook("logRegion", i, "object-key-init"),
                        supportDebugMode: cc11001100_hook("supportDebugMode", !1, "object-key-init"),
                        sdkToken: cc11001100_hook("sdkToken", e, "object-key-init")
                      }), "var-init");
                      o.forEach(function (e) {
                        return e.sendState = cc11001100_hook("e.sendState", Pr, "assign");
                      }), ls.hiSendData.onEvent(u, l, t).then(function () {
                        ls.hiLog.info("upload log successfully, resultCode: 200"), o.forEach(function (e) {
                          return e.sendState = cc11001100_hook("e.sendState", Or, "assign");
                        }), r.doLogSendDone(o), r.logRecords = cc11001100_hook("r.logRecords", r.logRecords.filter(function (e) {
                          return e.sendState !== Or;
                        }), "assign");
                      }, function () {
                        o.forEach(function (e) {
                          return e.sendState = cc11001100_hook("e.sendState", _r, "assign");
                        }), r.doLogSendFail(o);
                      });
                    }, c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
                    var u = cc11001100_hook("u", s(c), "var-init");
                    if ("object" === hn(u)) return u.value;
                  }
                }), [2]) : [2];
            }
          });
        });
      }, "assign"), e.prototype.chunkLogDatas = cc11001100_hook("e.prototype.chunkLogDatas", function (e) {
        var t = cc11001100_hook("t", ls.sendPolicy.getUploadMaxCount(), "var-init");
        return [e.slice(0, t)];
      }, "assign"), e.prototype.generateFinalUploadLogData = cc11001100_hook("e.prototype.generateFinalUploadLogData", function (e) {
        return e;
      }, "assign"), e.prototype.setHeartbeatFunc = cc11001100_hook("e.prototype.setHeartbeatFunc", function (e) {
        var t = cc11001100_hook("t", this, "var-init");
        this.timerId = cc11001100_hook("this.timerId", setTimeout(function () {
          qs || (qs = cc11001100_hook("qs", !0, "assign"), t.uploadData().then(function (e) {
            qs = cc11001100_hook("qs", !1, "assign"), ls.sendPolicy.logUploadPolicyScheduleTime();
          }).catch(function (e) {
            qs = cc11001100_hook("qs", !1, "assign"), ls.sendPolicy.logUploadPolicyScheduleTime();
          }));
        }, e), "assign");
      }, "assign"), e.prototype.writeLog = cc11001100_hook("e.prototype.writeLog", function (e) {
        e.sendState = cc11001100_hook("e.sendState", Ir, "assign"), this.logRecords.push(e), this.saveLogModel(e);
      }, "assign"), e.prototype.doLogSendDone = cc11001100_hook("e.prototype.doLogSendDone", function (e) {}, "assign"), e.prototype.doLogSendFail = cc11001100_hook("e.prototype.doLogSendFail", function (e) {}, "assign"), e.prototype.saveLogModel = cc11001100_hook("e.prototype.saveLogModel", function (e) {}, "assign"), e;
    }(), "var-init");
  new zs();
  var Js,
    Xs,
    Qs = cc11001100_hook("Qs", new (function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }
      return ln(t, e), t;
    }(zs))(), "var-init");
  !function (e) {
    e[e.DEBUG = cc11001100_hook("e.DEBUG", 0, "assign")] = cc11001100_hook("e[e.DEBUG = 0]", "DEBUG", "assign"), e[e.VERBOSE = cc11001100_hook("e.VERBOSE", 1, "assign")] = cc11001100_hook("e[e.VERBOSE = 1]", "VERBOSE", "assign"), e[e.INFO = cc11001100_hook("e.INFO", 2, "assign")] = cc11001100_hook("e[e.INFO = 2]", "INFO", "assign"), e[e.WARN = cc11001100_hook("e.WARN", 3, "assign")] = cc11001100_hook("e[e.WARN = 3]", "WARN", "assign"), e[e.ERROR = cc11001100_hook("e.ERROR", 4, "assign")] = cc11001100_hook("e[e.ERROR = 4]", "ERROR", "assign"), e[e.SILENT = cc11001100_hook("e.SILENT", 5, "assign")] = cc11001100_hook("e[e.SILENT = 5]", "SILENT", "assign");
  }(Xs || (Xs = cc11001100_hook("Xs", {}, "assign")));
  var Zs,
    ec,
    tc = cc11001100_hook("tc", function () {
      function e() {
        var t = cc11001100_hook("t", this, "var-init");
        this.moduleName = cc11001100_hook("this.moduleName", "", "assign"), this.logLevel = cc11001100_hook("this.logLevel", Xs.VERBOSE, "assign"), this.userLogProvider = cc11001100_hook("this.userLogProvider", null, "assign"), this.logProvider = cc11001100_hook("this.logProvider", function (n, r) {
          for (var i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", 2, "var-init"); o < arguments.length; o++) i[o - 2] = cc11001100_hook("i[o - 2]", arguments[o], "assign");
          if (!(r < t.logLevel)) {
            var a = cc11001100_hook("a", e.consoleType[r], "var-init");
            if (!a) throw new Error("invalid logType: " + r);
            console[a]("[Module:" + n + "] [" + new Date().toISOString() + "] | ", i.toString());
          }
        }, "assign");
      }
      return e.createLogger = cc11001100_hook("e.createLogger", function (t) {
        for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.logInstanceArray, "var-init"); n < r.length; n++) {
          var i = cc11001100_hook("i", r[n], "var-init");
          if (i.moduleName == t) return i;
        }
        var o = cc11001100_hook("o", new e(), "var-init");
        return o.moduleName = cc11001100_hook("o.moduleName", t, "assign"), e.logInstanceArray.push(o), o;
      }, "assign"), e.prototype.setLogProvider = cc11001100_hook("e.prototype.setLogProvider", function (e) {
        if ("function" != typeof e) throw new Error("logProvider must be set as a function");
        this.logProvider = cc11001100_hook("this.logProvider", e, "assign");
      }, "assign"), e.prototype.setUserLogProvider = cc11001100_hook("e.prototype.setUserLogProvider", function (e) {
        this.userLogProvider = cc11001100_hook("this.userLogProvider", e, "assign");
      }, "assign"), e.prototype.debug = cc11001100_hook("e.prototype.debug", function () {
        for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
        this.doLog(Xs.DEBUG, e);
      }, "assign"), e.prototype.log = cc11001100_hook("e.prototype.log", function () {
        for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
        this.doLog(Xs.VERBOSE, e);
      }, "assign"), e.prototype.info = cc11001100_hook("e.prototype.info", function () {
        for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
        this.doLog(Xs.INFO, e);
      }, "assign"), e.prototype.warn = cc11001100_hook("e.prototype.warn", function () {
        for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
        this.doLog(Xs.WARN, e);
      }, "assign"), e.prototype.error = cc11001100_hook("e.prototype.error", function () {
        for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
        this.doLog(Xs.ERROR, e);
      }, "assign"), e.prototype.doLog = cc11001100_hook("e.prototype.doLog", function (e) {
        for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 1, "var-init"); n < arguments.length; n++) t[n - 1] = cc11001100_hook("t[n - 1]", arguments[n], "assign");
        this.userLogProvider && this.userLogProvider(this.moduleName, e, t), this.logProvider(this.moduleName, e, t);
      }, "assign"), e.consoleType = cc11001100_hook("e.consoleType", ((Js = cc11001100_hook("Js", {}, "assign"))[Xs.DEBUG] = cc11001100_hook("(Js = {})[Xs.DEBUG]", "log", "assign"), Js[Xs.VERBOSE] = cc11001100_hook("Js[Xs.VERBOSE]", "log", "assign"), Js[Xs.SILENT] = cc11001100_hook("Js[Xs.SILENT]", "log", "assign"), Js[Xs.INFO] = cc11001100_hook("Js[Xs.INFO]", "info", "assign"), Js[Xs.WARN] = cc11001100_hook("Js[Xs.WARN]", "warn", "assign"), Js[Xs.ERROR] = cc11001100_hook("Js[Xs.ERROR]", "error", "assign"), Js), "assign"), e.logInstanceArray = cc11001100_hook("e.logInstanceArray", [], "assign"), e;
    }(), "var-init"),
    nc = function (e, t) {
      return (nc = cc11001100_hook("nc", Object.setPrototypeOf || {
        __proto__: cc11001100_hook("__proto__", [], "object-key-init")
      } instanceof Array && function (e, t) {
        e.__proto__ = cc11001100_hook("e.__proto__", t, "assign");
      } || function (e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = cc11001100_hook("e[n]", t[n], "assign"));
      }, "assign"))(e, t);
    },
    rc = cc11001100_hook("rc", function (e) {
      function t(n, r, i) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        var o = cc11001100_hook("o", this, "var-init"),
          a = cc11001100_hook("a", n.code + t.COLON + n.message, "var-init");
        return i && (a = cc11001100_hook("a", i + t.DASH + a, "assign")), r && (r.message ? a = cc11001100_hook("a", a + t.COMMA + r.message, "assign") : "string" == typeof r && (a = cc11001100_hook("a", a + t.COMMA + r, "assign"))), (o = cc11001100_hook("o", e.call(this, a) || this, "assign")).__proto__ = cc11001100_hook("(o = e.call(this, a) || this).__proto__", t.prototype, "assign"), o.code = cc11001100_hook("o.code", n.code, "assign"), o.message = cc11001100_hook("o.message", n.message, "assign"), r && (r.message ? o.message = cc11001100_hook("o.message", n.message + t.COMMA + r.message, "assign") : "string" == typeof r && (o.message = cc11001100_hook("o.message", n.message + t.COMMA + r, "assign"))), o.msg = cc11001100_hook("o.msg", o.message, "assign"), o;
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
          this.constructor = cc11001100_hook("this.constructor", e, "assign");
        }
        nc(e, t), e.prototype = cc11001100_hook("e.prototype", null === t ? Object.create(t) : (n.prototype = cc11001100_hook("n.prototype", t.prototype, "assign"), new n()), "assign");
      }(t, e), t.COLON = cc11001100_hook("t.COLON", ": ", "assign"), t.COMMA = cc11001100_hook("t.COMMA", ", ", "assign"), t.DASH = cc11001100_hook("t.DASH", "-", "assign"), t;
    }(Error), "var-init"),
    ic = cc11001100_hook("ic", function () {
      function e() {}
      return e.AGC_INNER_ERROR = cc11001100_hook("e.AGC_INNER_ERROR", {
        code: cc11001100_hook("code", 1e4, "object-key-init"),
        message: cc11001100_hook("message", "agc inner error", "object-key-init")
      }, "assign"), e.NETWORK_REQUEST_ERROR = cc11001100_hook("e.NETWORK_REQUEST_ERROR", {
        code: cc11001100_hook("code", 10001, "object-key-init"),
        message: cc11001100_hook("message", "agc network request error", "object-key-init")
      }, "assign"), e.GET_AAID_ERROR = cc11001100_hook("e.GET_AAID_ERROR", {
        code: cc11001100_hook("code", 10002, "object-key-init"),
        message: cc11001100_hook("message", "agc get aaid error", "object-key-init")
      }, "assign"), e.ABTEST_LOAD_EXPERIMENTS_ERROR = cc11001100_hook("e.ABTEST_LOAD_EXPERIMENTS_ERROR", {
        code: cc11001100_hook("code", 10003, "object-key-init"),
        message: cc11001100_hook("message", "abtest load experiments error", "object-key-init")
      }, "assign"), e.ABTEST_SAVE_EXPERIMENTS_ERROR = cc11001100_hook("e.ABTEST_SAVE_EXPERIMENTS_ERROR", {
        code: cc11001100_hook("code", 10004, "object-key-init"),
        message: cc11001100_hook("message", "abtest save experiments error", "object-key-init")
      }, "assign"), e.ABTEST_REPLACE_EXPERIMENTS_ERROR = cc11001100_hook("e.ABTEST_REPLACE_EXPERIMENTS_ERROR", {
        code: cc11001100_hook("code", 10005, "object-key-init"),
        message: cc11001100_hook("message", "abtest repalce experiments error", "object-key-init")
      }, "assign"), e.FAIL_TO_GET_STORAGE_SERVICE = cc11001100_hook("e.FAIL_TO_GET_STORAGE_SERVICE", {
        code: cc11001100_hook("code", 10006, "object-key-init"),
        message: cc11001100_hook("message", "get agcStorage service failed", "object-key-init")
      }, "assign"), e.FAIL_TO_GET_NETWORK_SERVICE = cc11001100_hook("e.FAIL_TO_GET_NETWORK_SERVICE", {
        code: cc11001100_hook("code", 10007, "object-key-init"),
        message: cc11001100_hook("message", "get agcNetwork service failed", "object-key-init")
      }, "assign"), e.REMOVE_TOKEN_FAILED = cc11001100_hook("e.REMOVE_TOKEN_FAILED", {
        code: cc11001100_hook("code", 10008, "object-key-init"),
        message: cc11001100_hook("message", "remove client token faild", "object-key-init")
      }, "assign"), e.GET_TOKEN_FAILED = cc11001100_hook("e.GET_TOKEN_FAILED", {
        code: cc11001100_hook("code", 10009, "object-key-init"),
        message: cc11001100_hook("message", "get client token faild", "object-key-init")
      }, "assign"), e.AGC_INIT_ERROR = cc11001100_hook("e.AGC_INIT_ERROR", {
        code: cc11001100_hook("code", 10010, "object-key-init"),
        message: cc11001100_hook("message", "AGCInstance init error", "object-key-init")
      }, "assign"), e.FAIL_TO_GET_CRIDENTIAL_SERVICE = cc11001100_hook("e.FAIL_TO_GET_CRIDENTIAL_SERVICE", {
        code: cc11001100_hook("code", 10011, "object-key-init"),
        message: cc11001100_hook("message", "get agcCredential service failed", "object-key-init")
      }, "assign"), e.WEBSOCKET_NOT_SUPPORT = cc11001100_hook("e.WEBSOCKET_NOT_SUPPORT", {
        code: cc11001100_hook("code", 10012, "object-key-init"),
        message: cc11001100_hook("message", "websocket is not support", "object-key-init")
      }, "assign"), e.WEBSOCKET_ERROR = cc11001100_hook("e.WEBSOCKET_ERROR", {
        code: cc11001100_hook("code", 10013, "object-key-init"),
        message: cc11001100_hook("message", "websocket error", "object-key-init")
      }, "assign"), e;
    }(), "var-init"),
    oc = cc11001100_hook("oc", tc.createLogger("agconnectInstance"), "var-init"),
    ac = cc11001100_hook("ac", function () {
      function e(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        this.appVersion = cc11001100_hook("this.appVersion", "", "assign"), this._config = cc11001100_hook("this._config", null, "assign"), this._customCredentialsProvider = cc11001100_hook("this._customCredentialsProvider", null, "assign"), this._customAuthProvider = cc11001100_hook("this._customAuthProvider", null, "assign"), this.cryptImpl = cc11001100_hook("this.cryptImpl", void 0, "assign"), this.option = cc11001100_hook("this.option", null, "assign"), this.repo_ = cc11001100_hook("this.repo_", e, "assign"), this.name_ = cc11001100_hook("this.name_", t || n, "assign");
      }
      return e.prototype.name = cc11001100_hook("e.prototype.name", function () {
        return this.name_;
      }, "assign"), e.prototype.configInstance = cc11001100_hook("e.prototype.configInstance", function (e) {
        return this._config = cc11001100_hook("this._config", e, "assign"), this;
      }, "assign"), e.prototype.config = cc11001100_hook("e.prototype.config", function () {
        return this.checkBeforeSetKey(), this._config;
      }, "assign"), e.prototype.setApiKey = cc11001100_hook("e.prototype.setApiKey", function (e) {
        this.checkBeforeSetKey(), this._config.client.api_key = cc11001100_hook("this._config.client.api_key", e, "assign");
      }, "assign"), e.prototype.setClientSecret = cc11001100_hook("e.prototype.setClientSecret", function (e) {
        this.checkBeforeSetKey(), this._config.client.client_secret = cc11001100_hook("this._config.client.client_secret", e, "assign");
      }, "assign"), e.prototype.setClientId = cc11001100_hook("e.prototype.setClientId", function (e) {
        this.checkBeforeSetKey(), this._config.client.client_id = cc11001100_hook("this._config.client.client_id", e, "assign");
      }, "assign"), e.prototype.getService = cc11001100_hook("e.prototype.getService", function (e) {
        return this.repo_.getService(e, this, this.name_);
      }, "assign"), e.prototype.setCustomCredentialsProvider = cc11001100_hook("e.prototype.setCustomCredentialsProvider", function (e) {
        return e ? e.getToken ? 1 != e.getToken.length ? (oc.error("the customCredentialsProvider getToken method must contain single parameter：forceRefresh."), !1) : (this._customCredentialsProvider = cc11001100_hook("this._customCredentialsProvider", e, "assign"), !0) : (oc.error("the customCredentialsProvider must contain getToken method."), !1) : (this._customCredentialsProvider = cc11001100_hook("this._customCredentialsProvider", e, "assign"), !0);
      }, "assign"), e.prototype.setCustomAuthProvider = cc11001100_hook("e.prototype.setCustomAuthProvider", function (e) {
        return e ? e.getToken ? 1 != e.getToken.length ? (oc.error("the customAuthProvider getToken method must contain single parameter：forceRefresh."), !1) : (this._customAuthProvider = cc11001100_hook("this._customAuthProvider", e, "assign"), !0) : (oc.error("the customAuthProvider must contain getToken method."), !1) : (this._customAuthProvider = cc11001100_hook("this._customAuthProvider", e, "assign"), !0);
      }, "assign"), e.prototype.getCustomCredentialsProvider = cc11001100_hook("e.prototype.getCustomCredentialsProvider", function () {
        return this._customCredentialsProvider;
      }, "assign"), e.prototype.getCustomAuthProvider = cc11001100_hook("e.prototype.getCustomAuthProvider", function () {
        return this._customAuthProvider;
      }, "assign"), e.prototype.setCryptImp = cc11001100_hook("e.prototype.setCryptImp", function (e) {
        return e ? e.decrypt && e.decrypt instanceof Function && e.encrypt && e.encrypt instanceof Function ? (this.cryptImpl = cc11001100_hook("this.cryptImpl", e, "assign"), !0) : (oc.error("the crypt is not exist necessary methods."), !1) : (oc.error("the crypt is not available."), !1);
      }, "assign"), e.prototype.setAppVersion = cc11001100_hook("e.prototype.setAppVersion", function (e) {
        this.appVersion = cc11001100_hook("this.appVersion", e, "assign");
      }, "assign"), e.prototype.setOption = cc11001100_hook("e.prototype.setOption", function (e) {
        this.option = cc11001100_hook("this.option", e, "assign");
      }, "assign"), e.prototype.addHttpToUrl = cc11001100_hook("e.prototype.addHttpToUrl", function (e) {
        return e && !e.startsWith("https://") ? "https://" + e : e;
      }, "assign"), e.prototype.getGwUrl = cc11001100_hook("e.prototype.getGwUrl", function () {
        return null != this.option ? this.option.routePolicy == Number(1) ? this.addHttpToUrl(this._config.agcgw_all.CN) : this.option.routePolicy == Number(2) ? this.addHttpToUrl(this._config.agcgw_all.DE) : this.option.routePolicy == Number(3) ? this.addHttpToUrl(this._config.agcgw_all.RU) : this.option.routePolicy == Number(4) ? this.addHttpToUrl(this._config.agcgw_all.SG) : this.addHttpToUrl(this._config.agcgw.url) : this.addHttpToUrl(this._config.agcgw.url);
      }, "assign"), e.prototype.getGwBackUrl = cc11001100_hook("e.prototype.getGwBackUrl", function () {
        return null != this.option ? 1 == this.option.routePolicy ? this.addHttpToUrl(this._config.agcgw_all.CN_back) : 2 == this.option.routePolicy ? this.addHttpToUrl(this._config.agcgw_all.DE_back) : 3 == this.option.routePolicy ? this.addHttpToUrl(this._config.agcgw_all.RU_back) : 4 == this.option.routePolicy ? this.addHttpToUrl(this._config.agcgw_all.SG_back) : this.addHttpToUrl(this._config.agcgw.backurl) : this.addHttpToUrl(this._config.agcgw.backurl);
      }, "assign"), e.prototype.getAppVersion = cc11001100_hook("e.prototype.getAppVersion", function () {
        return this.appVersion;
      }, "assign"), e.prototype.getCryptImp = cc11001100_hook("e.prototype.getCryptImp", function () {
        return this.cryptImpl;
      }, "assign"), e.prototype.checkBeforeSetKey = cc11001100_hook("e.prototype.checkBeforeSetKey", function () {
        if (null == this._config) throw new rc(ic.AGC_INIT_ERROR, {
          message: cc11001100_hook("message", "AGCInstance not configurated. call agconnect.instance().configInstance() to configure the agconnect.", "object-key-init")
        }, "instance");
        if (!this._config.agcgw || !this._config.client) throw new rc(ic.AGC_INIT_ERROR, {
          message: cc11001100_hook("message", "AGCInstance config is invalid.", "object-key-init")
        }, "instance");
      }, "assign"), e;
    }(), "var-init"),
    sc = cc11001100_hook("sc", new i(function (e) {
      return new ac(t, e[0]);
    }), "var-init");
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
  
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
  
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  !function (e) {
    e[e.UNKNOWN = cc11001100_hook("e.UNKNOWN", 0, "assign")] = cc11001100_hook("e[e.UNKNOWN = 0]", "UNKNOWN", "assign"), e[e.CHINA = cc11001100_hook("e.CHINA", 1, "assign")] = cc11001100_hook("e[e.CHINA = 1]", "CHINA", "assign"), e[e.GERMANY = cc11001100_hook("e.GERMANY", 2, "assign")] = cc11001100_hook("e[e.GERMANY = 2]", "GERMANY", "assign"), e[e.RUSSIA = cc11001100_hook("e.RUSSIA", 3, "assign")] = cc11001100_hook("e[e.RUSSIA = 3]", "RUSSIA", "assign"), e[e.SINGAPORE = cc11001100_hook("e.SINGAPORE", 4, "assign")] = cc11001100_hook("e[e.SINGAPORE = 4]", "SINGAPORE", "assign");
  }(Zs || (Zs = cc11001100_hook("Zs", {}, "assign"))), ec = cc11001100_hook("ec", {
    AGCRoutePolicy: cc11001100_hook("AGCRoutePolicy", Zs, "object-key-init")
  }, "assign"), t.registerApiProvider("instance", function (e) {
    return sc.get(e);
  }, ec);
  var cc = cc11001100_hook("cc", function () {
      function e() {
        this.storage = cc11001100_hook("this.storage", {}, "assign");
      }
      return e.getInstance = cc11001100_hook("e.getInstance", function (t, n) {
        return e.memoryInsMap.has(t) && e.memoryInsMap.get(t) || e.memoryInsMap.set(t, new e()), e.memoryInsMap.get(t);
      }, "assign"), e.prototype.get = cc11001100_hook("e.prototype.get", function (e) {
        return Promise.resolve(this.storage[e]);
      }, "assign"), e.prototype.remove = cc11001100_hook("e.prototype.remove", function (e) {
        return delete this.storage[e], Promise.resolve();
      }, "assign"), e.prototype.set = cc11001100_hook("e.prototype.set", function (e, t) {
        return this.storage[e] = cc11001100_hook("this.storage[e]", t, "assign"), Promise.resolve();
      }, "assign"), e.memoryInsMap = cc11001100_hook("e.memoryInsMap", new Map(), "assign"), e;
    }(), "var-init"),
    uc = cc11001100_hook("uc", function () {
      function e() {
        this.encryptImpl = cc11001100_hook("this.encryptImpl", void 0, "assign");
      }
      return e.prototype.setEncryptImp = cc11001100_hook("e.prototype.setEncryptImp", function (e) {
        this.encryptImpl = cc11001100_hook("this.encryptImpl", e, "assign");
      }, "assign"), e.prototype.decrypt = cc11001100_hook("e.prototype.decrypt", function (e) {
        return null != this.encryptImpl && null != this.encryptImpl && null != e && null != e ? this.encryptImpl.decrypt(e) : e;
      }, "assign"), e.prototype.encrypt = cc11001100_hook("e.prototype.encrypt", function (e) {
        return null != this.encryptImpl && null != this.encryptImpl && null != e && null != e ? this.encryptImpl.encrypt(e) : e;
      }, "assign"), e;
    }(), "var-init"),
    lc = cc11001100_hook("lc", function () {
      function e() {
        this.DB_NAME = cc11001100_hook("this.DB_NAME", "agcLocalStorageDb", "assign"), this.OBJECT_STORE_NAME = cc11001100_hook("this.OBJECT_STORE_NAME", "agc", "assign"), this.KEY_PATH = cc11001100_hook("this.KEY_PATH", "agcStorage", "assign"), this.VERSION = cc11001100_hook("this.VERSION", 1, "assign"), this.agcCryptImpl = cc11001100_hook("this.agcCryptImpl", new uc(), "assign");
      }
      return e.getInstance = cc11001100_hook("e.getInstance", function (t, n) {
        if (!window.indexedDB) throw tc.createLogger("AGCStorageService").error("Your environment doesn't support a stable version of IndexedDB."), new rc(ic.FAIL_TO_GET_STORAGE_SERVICE, {
          message: cc11001100_hook("message", "Your environment doesn't support a stable version of IndexedDB.", "object-key-init")
        });
        e.indexedDBInsMap.has(t) && e.indexedDBInsMap.get(t) || e.indexedDBInsMap.set(t, new e());
        var r = cc11001100_hook("r", e.indexedDBInsMap.get(t), "var-init");
        return r.agcCryptImpl.setEncryptImp(n), r;
      }, "assign"), e.prototype.initIndexedDb = cc11001100_hook("e.prototype.initIndexedDb", function (e) {
        var t = cc11001100_hook("t", this, "var-init");
        return window.indexedDB ? new Promise(function (n, r) {
          var i = cc11001100_hook("i", window.indexedDB.open(t.DB_NAME, t.VERSION), "var-init"),
            o = cc11001100_hook("o", t, "var-init");
          i.onupgradeneeded = cc11001100_hook("i.onupgradeneeded", function (e) {
            var t = cc11001100_hook("t", e.target.result, "var-init");
            try {
              t.objectStoreNames.contains(o.OBJECT_STORE_NAME) || t.createObjectStore(o.OBJECT_STORE_NAME, {
                keyPath: cc11001100_hook("keyPath", o.KEY_PATH, "object-key-init")
              });
            } catch (e) {
              r(e);
            }
          }, "assign"), i.onsuccess = cc11001100_hook("i.onsuccess", function (t) {
            try {
              n(t.target.result.transaction([o.OBJECT_STORE_NAME], e).objectStore(o.OBJECT_STORE_NAME));
            } catch (e) {
              r(e);
            }
          }, "assign"), i.onerror = cc11001100_hook("i.onerror", function (e) {
            r(e.target.error);
          }, "assign");
        }) : Promise.reject(new rc(ic.FAIL_TO_GET_STORAGE_SERVICE, {
          message: cc11001100_hook("message", "Your environment doesn't support a stable version of IndexedDB.", "object-key-init")
        }, "storage"));
      }, "assign"), e.prototype.get = cc11001100_hook("e.prototype.get", function (e) {
        if (!e) return Promise.reject(new Error("get key is null"));
        var t = cc11001100_hook("t", this, "var-init");
        return this.initIndexedDb("readonly").then(function (n) {
          return new Promise(function (r, i) {
            try {
              var o = cc11001100_hook("o", n.get(e), "var-init");
              o.onsuccess = cc11001100_hook("o.onsuccess", function () {
                var e = cc11001100_hook("e", o.result, "var-init");
                r(null != e && "value" in e ? t.agcCryptImpl.decrypt(e.value) : e);
              }, "assign"), o.onerror = cc11001100_hook("o.onerror", function (e) {
                i(e.target.error);
              }, "assign");
            } catch (e) {
              i(e);
            }
          });
        }).catch(function (e) {
          return Promise.reject(e);
        });
      }, "assign"), e.prototype.set = cc11001100_hook("e.prototype.set", function (e, t) {
        if (!e || !t) return Promise.reject(new Error("set key or value is null"));
        var n = cc11001100_hook("n", {}, "var-init"),
          r = cc11001100_hook("r", {}, "var-init");
        n[this.KEY_PATH] = cc11001100_hook("n[this.KEY_PATH]", e, "assign"), r.value = cc11001100_hook("r.value", this.agcCryptImpl.encrypt(t), "assign");
        var i = cc11001100_hook("i", Object.assign(r, n), "var-init");
        return this.initIndexedDb("readwrite").then(function (t) {
          try {
            var n = cc11001100_hook("n", t.get(e), "var-init");
            return n.onsuccess = cc11001100_hook("n.onsuccess", function () {
              var e = cc11001100_hook("e", n.result, "var-init"),
                r = cc11001100_hook("r", null != e && "value" in e ? t.put(i) : t.add(i), "var-init");
              r.onsuccess = cc11001100_hook("r.onsuccess", function () {
                return Promise.resolve();
              }, "assign"), r.onerror = cc11001100_hook("r.onerror", function (e) {
                return Promise.reject(e.target.error);
              }, "assign");
            }, "assign"), n.onerror = cc11001100_hook("n.onerror", function (e) {
              return Promise.reject(e.target.error);
            }, "assign"), Promise.resolve();
          } catch (e) {
            return Promise.reject(e);
          }
        }).catch(function (e) {
          return Promise.reject(e);
        });
      }, "assign"), e.prototype.remove = cc11001100_hook("e.prototype.remove", function (e) {
        return e ? this.initIndexedDb("readwrite").then(function (t) {
          try {
            var n = cc11001100_hook("n", t.delete(e), "var-init");
            return n.onsuccess = cc11001100_hook("n.onsuccess", function () {
              return Promise.resolve();
            }, "assign"), n.onerror = cc11001100_hook("n.onerror", function (e) {
              return Promise.reject(e.target.error);
            }, "assign"), Promise.resolve();
          } catch (e) {
            return Promise.reject(e);
          }
        }).catch(function (e) {
          return Promise.reject(e);
        }) : Promise.reject(new Error("remove key is null"));
      }, "assign"), e.indexedDBInsMap = cc11001100_hook("e.indexedDBInsMap", new Map(), "assign"), e;
    }(), "var-init"),
    fc = cc11001100_hook("fc", function () {
      function e() {
        this.agcCryptImpl = cc11001100_hook("this.agcCryptImpl", new uc(), "assign");
      }
      return e.getInstance = cc11001100_hook("e.getInstance", function (t, n) {
        if (!e.isSessionStorageAvailable()) throw tc.createLogger("AGCStorageService").error("Your environment doesn't support a stable version of sessionStorage."), new rc(ic.FAIL_TO_GET_STORAGE_SERVICE, {
          message: cc11001100_hook("message", "Your environment doesn't support a stable version of sessionStorage.", "object-key-init")
        });
        !e.sessionMap.has(t) && e.sessionMap.get(t) || e.sessionMap.set(t, new e());
        var r = cc11001100_hook("r", e.sessionMap.get(t), "var-init");
        return r.agcCryptImpl.setEncryptImp(n), r;
      }, "assign"), e.isSessionStorageAvailable = cc11001100_hook("e.isSessionStorageAvailable", function () {
        try {
          return sessionStorage.setItem("agctestKey", "testValue"), sessionStorage.removeItem("agctestKey"), !0;
        } catch (e) {
          return !1;
        }
      }, "assign"), e.prototype.get = cc11001100_hook("e.prototype.get", function (e) {
        if (!e) return Promise.reject(new Error("key is null"));
        try {
          var t = cc11001100_hook("t", sessionStorage.getItem(e), "var-init");
          return Promise.resolve("" === t ? null : this.agcCryptImpl.decrypt(t));
        } catch (e) {
          return Promise.reject(e);
        }
      }, "assign"), e.prototype.set = cc11001100_hook("e.prototype.set", function (e, t) {
        if (!e || !t) return Promise.reject(new Error("key or value is null"));
        try {
          return sessionStorage.setItem(e, this.agcCryptImpl.encrypt(t)), Promise.resolve();
        } catch (e) {
          return Promise.reject(e);
        }
      }, "assign"), e.prototype.remove = cc11001100_hook("e.prototype.remove", function (e) {
        if (!e) return Promise.reject(new Error("key is null"));
        try {
          return sessionStorage.removeItem(e), Promise.resolve();
        } catch (e) {
          return Promise.reject(e);
        }
      }, "assign"), e.sessionMap = cc11001100_hook("e.sessionMap", new Map(), "assign"), e;
    }(), "var-init"),
    pc = cc11001100_hook("pc", function () {
      function e() {
        this.agcCryptImpl = cc11001100_hook("this.agcCryptImpl", new uc(), "assign");
      }
      return e.getInstance = cc11001100_hook("e.getInstance", function (t, n) {
        e.MiniProgramStorageMap.has(t) && e.MiniProgramStorageMap.get(t) || e.MiniProgramStorageMap.set(t, new e());
        var r = cc11001100_hook("r", e.MiniProgramStorageMap.get(t), "var-init");
        return r.agcCryptImpl.setEncryptImp(n), r;
      }, "assign"), e.prototype.get = cc11001100_hook("e.prototype.get", function (e) {
        var t = cc11001100_hook("t", this, "var-init");
        return new Promise(function (n, r) {
          try {
            wx.getStorage({
              key: cc11001100_hook("key", e, "object-key-init"),
              success: function (e) {
                n(e ? t.agcCryptImpl.decrypt(e.data) : void 0);
              },
              fail: function (e) {
                n(void 0);
              }
            });
          } catch (e) {
            r(e);
          }
        });
      }, "assign"), e.prototype.set = cc11001100_hook("e.prototype.set", function (e, t) {
        var n = cc11001100_hook("n", this, "var-init");
        return new Promise(function (r, i) {
          try {
            wx.setStorage({
              key: cc11001100_hook("key", e, "object-key-init"),
              data: cc11001100_hook("data", n.agcCryptImpl.encrypt(t), "object-key-init"),
              success: function () {
                r();
              },
              fail: function (e) {
                i(e);
              }
            });
          } catch (e) {
            i(e);
          }
        });
      }, "assign"), e.prototype.remove = cc11001100_hook("e.prototype.remove", function (e) {
        return new Promise(function (t, n) {
          try {
            wx.removeStorage({
              key: cc11001100_hook("key", e, "object-key-init"),
              success: function () {
                t();
              },
              fail: function (e) {
                n(e);
              }
            });
          } catch (e) {
            n(e);
          }
        });
      }, "assign"), e.MiniProgramStorageMap = cc11001100_hook("e.MiniProgramStorageMap", new Map(), "assign"), e;
    }(), "var-init"),
    hc = cc11001100_hook("hc", "undefined" == typeof window && "object" == typeof wx, "var-init"),
    dc = cc11001100_hook("dc", function () {
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        this.name = cc11001100_hook("this.name", n, "assign"), e && (this.name = cc11001100_hook("this.name", e, "assign"));
      }
      return e.prototype.getStorageInstance = cc11001100_hook("e.prototype.getStorageInstance", function (e, t) {
        var n;
        if (hc) return pc.getInstance(this.name, t);
        switch (e) {
          case 2:
            n = cc11001100_hook("n", cc.getInstance(this.name, t), "assign");
            break;
          case 0:
            n = cc11001100_hook("n", lc.getInstance(this.name, t), "assign");
            break;
          case 1:
            n = cc11001100_hook("n", fc.getInstance(this.name, t), "assign");
            break;
          default:
            n = cc11001100_hook("n", cc.getInstance(this.name, t), "assign");
        }
        return n;
      }, "assign"), e.prototype.createPersistentStorage = cc11001100_hook("e.prototype.createPersistentStorage", function () {
        return hc ? pc.getInstance(this.name) : lc.getInstance(this.name);
      }, "assign"), e.prototype.createTemporaryStorage = cc11001100_hook("e.prototype.createTemporaryStorage", function () {
        return hc ? pc.getInstance(this.name) : fc.getInstance(this.name);
      }, "assign"), e.prototype.createMemoryStorage = cc11001100_hook("e.prototype.createMemoryStorage", function () {
        return hc ? pc.getInstance(this.name) : cc.getInstance(this.name);
      }, "assign"), e;
    }(), "var-init");
  t.registerInternalService({
    name: cc11001100_hook("name", "AGCStorageService", "object-key-init"),
    serviceFactory: function (e) {
      return new dc(e.name());
    }
  });
  var gc = function (e, t) {
      return function () {
        for (var n = cc11001100_hook("n", new Array(arguments.length), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) n[r] = cc11001100_hook("n[r]", arguments[r], "assign");
        return e.apply(t, n);
      };
    },
    vc = cc11001100_hook("vc", Object.prototype.toString, "var-init");
  function mc(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "[object Array]" === vc.call(e);
  }
  function Ec(e) {
    cc11001100_hook("e", e, "function-parameter");
    return void 0 === e;
  }
  function yc(e) {
    cc11001100_hook("e", e, "function-parameter");
    return null !== e && "object" == typeof e;
  }
  function Sc(e) {
    cc11001100_hook("e", e, "function-parameter");
    if ("[object Object]" !== vc.call(e)) return !1;
    var t = cc11001100_hook("t", Object.getPrototypeOf(e), "var-init");
    return null === t || t === Object.prototype;
  }
  function Tc(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "[object Function]" === vc.call(e);
  }
  function wc(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (null != e) if ("object" != typeof e && (e = cc11001100_hook("e", [e], "assign")), mc(e)) for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) t.call(null, e[n], n, e);else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
  }
  var Cc = cc11001100_hook("Cc", {
    isArray: cc11001100_hook("isArray", mc, "object-key-init"),
    isArrayBuffer: function (e) {
      return "[object ArrayBuffer]" === vc.call(e);
    },
    isBuffer: function (e) {
      return null !== e && !Ec(e) && null !== e.constructor && !Ec(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    },
    isFormData: function (e) {
      return "undefined" != typeof FormData && e instanceof FormData;
    },
    isArrayBufferView: function (e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
    },
    isString: function (e) {
      return "string" == typeof e;
    },
    isNumber: function (e) {
      return "number" == typeof e;
    },
    isObject: cc11001100_hook("isObject", yc, "object-key-init"),
    isPlainObject: cc11001100_hook("isPlainObject", Sc, "object-key-init"),
    isUndefined: cc11001100_hook("isUndefined", Ec, "object-key-init"),
    isDate: function (e) {
      return "[object Date]" === vc.call(e);
    },
    isFile: function (e) {
      return "[object File]" === vc.call(e);
    },
    isBlob: function (e) {
      return "[object Blob]" === vc.call(e);
    },
    isFunction: cc11001100_hook("isFunction", Tc, "object-key-init"),
    isStream: function (e) {
      return yc(e) && Tc(e.pipe);
    },
    isURLSearchParams: function (e) {
      return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
    },
    isStandardBrowserEnv: function () {
      return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
    },
    forEach: cc11001100_hook("forEach", wc, "object-key-init"),
    merge: function e() {
      var t = cc11001100_hook("t", {}, "var-init");
      function n(n, r) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        Sc(t[r]) && Sc(n) ? t[r] = cc11001100_hook("t[r]", e(t[r], n), "assign") : Sc(n) ? t[r] = cc11001100_hook("t[r]", e({}, n), "assign") : mc(n) ? t[r] = cc11001100_hook("t[r]", n.slice(), "assign") : t[r] = cc11001100_hook("t[r]", n, "assign");
      }
      for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", arguments.length, "var-init"); r < i; r++) wc(arguments[r], n);
      return t;
    },
    extend: function (e, t, n) {
      return wc(t, function (t, r) {
        e[r] = cc11001100_hook("e[r]", n && "function" == typeof t ? gc(t, n) : t, "assign");
      }), e;
    },
    trim: function (e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    },
    stripBOM: function (e) {
      return 65279 === e.charCodeAt(0) && (e = cc11001100_hook("e", e.slice(1), "assign")), e;
    }
  }, "var-init");
  function Ac(e) {
    cc11001100_hook("e", e, "function-parameter");
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var bc = function (e, t, n) {
    if (!t) return e;
    var r;
    if (n) r = cc11001100_hook("r", n(t), "assign");else if (Cc.isURLSearchParams(t)) r = cc11001100_hook("r", t.toString(), "assign");else {
      var i = cc11001100_hook("i", [], "var-init");
      Cc.forEach(t, function (e, t) {
        null != e && (Cc.isArray(e) ? t += cc11001100_hook("t", "[]", "assign") : e = cc11001100_hook("e", [e], "assign"), Cc.forEach(e, function (e) {
          Cc.isDate(e) ? e = cc11001100_hook("e", e.toISOString(), "assign") : Cc.isObject(e) && (e = cc11001100_hook("e", JSON.stringify(e), "assign")), i.push(Ac(t) + "=" + Ac(e));
        }));
      }), r = cc11001100_hook("r", i.join("&"), "assign");
    }
    if (r) {
      var o = cc11001100_hook("o", e.indexOf("#"), "var-init");
      -1 !== o && (e = cc11001100_hook("e", e.slice(0, o), "assign")), e += cc11001100_hook("e", (-1 === e.indexOf("?") ? "?" : "&") + r, "assign");
    }
    return e;
  };
  function Ic() {
    this.handlers = cc11001100_hook("this.handlers", [], "assign");
  }
  Ic.prototype.use = cc11001100_hook("Ic.prototype.use", function (e, t, n) {
    return this.handlers.push({
      fulfilled: cc11001100_hook("fulfilled", e, "object-key-init"),
      rejected: cc11001100_hook("rejected", t, "object-key-init"),
      synchronous: cc11001100_hook("synchronous", !!n && n.synchronous, "object-key-init"),
      runWhen: cc11001100_hook("runWhen", n ? n.runWhen : null, "object-key-init")
    }), this.handlers.length - 1;
  }, "assign"), Ic.prototype.eject = cc11001100_hook("Ic.prototype.eject", function (e) {
    this.handlers[e] && (this.handlers[e] = cc11001100_hook("this.handlers[e]", null, "assign"));
  }, "assign"), Ic.prototype.forEach = cc11001100_hook("Ic.prototype.forEach", function (e) {
    Cc.forEach(this.handlers, function (t) {
      null !== t && e(t);
    });
  }, "assign");
  var Pc = cc11001100_hook("Pc", Ic, "var-init"),
    Oc = function (e, t) {
      Cc.forEach(e, function (n, r) {
        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = cc11001100_hook("e[t]", n, "assign"), delete e[r]);
      });
    },
    _c = function (e, t, n, r, i) {
      return e.config = cc11001100_hook("e.config", t, "assign"), n && (e.code = cc11001100_hook("e.code", n, "assign")), e.request = cc11001100_hook("e.request", r, "assign"), e.response = cc11001100_hook("e.response", i, "assign"), e.isAxiosError = cc11001100_hook("e.isAxiosError", !0, "assign"), e.toJSON = cc11001100_hook("e.toJSON", function () {
        return {
          message: cc11001100_hook("message", this.message, "object-key-init"),
          name: cc11001100_hook("name", this.name, "object-key-init"),
          description: cc11001100_hook("description", this.description, "object-key-init"),
          number: cc11001100_hook("number", this.number, "object-key-init"),
          fileName: cc11001100_hook("fileName", this.fileName, "object-key-init"),
          lineNumber: cc11001100_hook("lineNumber", this.lineNumber, "object-key-init"),
          columnNumber: cc11001100_hook("columnNumber", this.columnNumber, "object-key-init"),
          stack: cc11001100_hook("stack", this.stack, "object-key-init"),
          config: cc11001100_hook("config", this.config, "object-key-init"),
          code: cc11001100_hook("code", this.code, "object-key-init")
        };
      }, "assign"), e;
    },
    Nc = function (e, t, n, r, i) {
      var o = cc11001100_hook("o", new Error(e), "var-init");
      return _c(o, t, n, r, i);
    },
    Rc = cc11001100_hook("Rc", Cc.isStandardBrowserEnv() ? {
      write: function (e, t, n, r, i, o) {
        var a = cc11001100_hook("a", [], "var-init");
        a.push(e + "=" + encodeURIComponent(t)), Cc.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), Cc.isString(r) && a.push("path=" + r), Cc.isString(i) && a.push("domain=" + i), !0 === o && a.push("secure"), document.cookie = cc11001100_hook("document.cookie", a.join("; "), "assign");
      },
      read: function (e) {
        var t = cc11001100_hook("t", document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")), "var-init");
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function (e) {
        this.write(e, "", Date.now() - 864e5);
      }
    } : {
      write: function () {},
      read: function () {
        return null;
      },
      remove: function () {}
    }, "var-init"),
    Lc = cc11001100_hook("Lc", ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"], "var-init"),
    $c = cc11001100_hook("$c", Cc.isStandardBrowserEnv() ? function () {
      var e,
        t = cc11001100_hook("t", /(msie|trident)/i.test(navigator.userAgent), "var-init"),
        n = cc11001100_hook("n", document.createElement("a"), "var-init");
      function r(e) {
        cc11001100_hook("e", e, "function-parameter");
        var r = cc11001100_hook("r", e, "var-init");
        return t && (n.setAttribute("href", r), r = cc11001100_hook("r", n.href, "assign")), n.setAttribute("href", r), {
          href: cc11001100_hook("href", n.href, "object-key-init"),
          protocol: cc11001100_hook("protocol", n.protocol ? n.protocol.replace(/:$/, "") : "", "object-key-init"),
          host: cc11001100_hook("host", n.host, "object-key-init"),
          search: cc11001100_hook("search", n.search ? n.search.replace(/^\?/, "") : "", "object-key-init"),
          hash: cc11001100_hook("hash", n.hash ? n.hash.replace(/^#/, "") : "", "object-key-init"),
          hostname: cc11001100_hook("hostname", n.hostname, "object-key-init"),
          port: cc11001100_hook("port", n.port, "object-key-init"),
          pathname: cc11001100_hook("pathname", "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname, "object-key-init")
        };
      }
      return e = cc11001100_hook("e", r(window.location.href), "assign"), function (t) {
        var n = cc11001100_hook("n", Cc.isString(t) ? r(t) : t, "var-init");
        return n.protocol === e.protocol && n.host === e.host;
      };
    }() : function () {
      return !0;
    }, "var-init"),
    Dc = function (e) {
      return new Promise(function (t, n) {
        var r = cc11001100_hook("r", e.data, "var-init"),
          i = cc11001100_hook("i", e.headers, "var-init"),
          o = cc11001100_hook("o", e.responseType, "var-init");
        Cc.isFormData(r) && delete i["Content-Type"];
        var a = cc11001100_hook("a", new XMLHttpRequest(), "var-init");
        if (e.auth) {
          var s = cc11001100_hook("s", e.auth.username || "", "var-init"),
            c = cc11001100_hook("c", e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "", "var-init");
          i.Authorization = cc11001100_hook("i.Authorization", "Basic " + btoa(s + ":" + c), "assign");
        }
        var u,
          l,
          f = cc11001100_hook("f", (u = cc11001100_hook("u", e.baseURL, "assign"), l = cc11001100_hook("l", e.url, "assign"), u && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(l) ? function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
          }(u, l) : l), "var-init");
        function p() {
          if (a) {
            var r = cc11001100_hook("r", "getAllResponseHeaders" in a ? function (e) {
                var t,
                  n,
                  r,
                  i = cc11001100_hook("i", {}, "var-init");
                return e ? (Cc.forEach(e.split("\n"), function (e) {
                  if (r = cc11001100_hook("r", e.indexOf(":"), "assign"), t = cc11001100_hook("t", Cc.trim(e.substr(0, r)).toLowerCase(), "assign"), n = cc11001100_hook("n", Cc.trim(e.substr(r + 1)), "assign"), t) {
                    if (i[t] && Lc.indexOf(t) >= 0) return;
                    i[t] = cc11001100_hook("i[t]", "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n, "assign");
                  }
                }), i) : i;
              }(a.getAllResponseHeaders()) : null, "var-init"),
              i = cc11001100_hook("i", {
                data: cc11001100_hook("data", o && "text" !== o && "json" !== o ? a.response : a.responseText, "object-key-init"),
                status: cc11001100_hook("status", a.status, "object-key-init"),
                statusText: cc11001100_hook("statusText", a.statusText, "object-key-init"),
                headers: cc11001100_hook("headers", r, "object-key-init"),
                config: cc11001100_hook("config", e, "object-key-init"),
                request: cc11001100_hook("request", a, "object-key-init")
              }, "var-init");
            !function (e, t, n) {
              var r = cc11001100_hook("r", n.config.validateStatus, "var-init");
              n.status && r && !r(n.status) ? t(Nc("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
            }(t, n, i), a = cc11001100_hook("a", null, "assign");
          }
        }
        if (a.open(e.method.toUpperCase(), bc(f, e.params, e.paramsSerializer), !0), a.timeout = cc11001100_hook("a.timeout", e.timeout, "assign"), "onloadend" in a ? a.onloadend = cc11001100_hook("a.onloadend", p, "assign") : a.onreadystatechange = cc11001100_hook("a.onreadystatechange", function () {
          a && 4 === a.readyState && (0 !== a.status || a.responseURL && 0 === a.responseURL.indexOf("file:")) && setTimeout(p);
        }, "assign"), a.onabort = cc11001100_hook("a.onabort", function () {
          a && (n(Nc("Request aborted", e, "ECONNABORTED", a)), a = cc11001100_hook("a", null, "assign"));
        }, "assign"), a.onerror = cc11001100_hook("a.onerror", function () {
          n(Nc("Network Error", e, null, a)), a = cc11001100_hook("a", null, "assign");
        }, "assign"), a.ontimeout = cc11001100_hook("a.ontimeout", function () {
          var t = cc11001100_hook("t", "timeout of " + e.timeout + "ms exceeded", "var-init");
          e.timeoutErrorMessage && (t = cc11001100_hook("t", e.timeoutErrorMessage, "assign")), n(Nc(t, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", a)), a = cc11001100_hook("a", null, "assign");
        }, "assign"), Cc.isStandardBrowserEnv()) {
          var h = cc11001100_hook("h", (e.withCredentials || $c(f)) && e.xsrfCookieName ? Rc.read(e.xsrfCookieName) : void 0, "var-init");
          h && (i[e.xsrfHeaderName] = cc11001100_hook("i[e.xsrfHeaderName]", h, "assign"));
        }
        "setRequestHeader" in a && Cc.forEach(i, function (e, t) {
          void 0 === r && "content-type" === t.toLowerCase() ? delete i[t] : a.setRequestHeader(t, e);
        }), Cc.isUndefined(e.withCredentials) || (a.withCredentials = cc11001100_hook("a.withCredentials", !!e.withCredentials, "assign")), o && "json" !== o && (a.responseType = cc11001100_hook("a.responseType", e.responseType, "assign")), "function" == typeof e.onDownloadProgress && a.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && a.upload && a.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
          a && (a.abort(), n(e), a = cc11001100_hook("a", null, "assign"));
        }), r || (r = cc11001100_hook("r", null, "assign")), a.send(r);
      });
    },
    kc = cc11001100_hook("kc", {
      "Content-Type": cc11001100_hook("Content-Type", "application/x-www-form-urlencoded", "object-key-init")
    }, "var-init");
  function Uc(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    !Cc.isUndefined(e) && Cc.isUndefined(e["Content-Type"]) && (e["Content-Type"] = cc11001100_hook("e[\"Content-Type\"]", t, "assign"));
  }
  var Mc,
    xc = cc11001100_hook("xc", {
      transitional: {
        silentJSONParsing: cc11001100_hook("silentJSONParsing", !0, "object-key-init"),
        forcedJSONParsing: cc11001100_hook("forcedJSONParsing", !0, "object-key-init"),
        clarifyTimeoutError: cc11001100_hook("clarifyTimeoutError", !1, "object-key-init")
      },
      adapter: cc11001100_hook("adapter", (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (Mc = cc11001100_hook("Mc", Dc, "assign")), Mc), "object-key-init"),
      transformRequest: cc11001100_hook("transformRequest", [function (e, t) {
        return Oc(t, "Accept"), Oc(t, "Content-Type"), Cc.isFormData(e) || Cc.isArrayBuffer(e) || Cc.isBuffer(e) || Cc.isStream(e) || Cc.isFile(e) || Cc.isBlob(e) ? e : Cc.isArrayBufferView(e) ? e.buffer : Cc.isURLSearchParams(e) ? (Uc(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : Cc.isObject(e) || t && "application/json" === t["Content-Type"] ? (Uc(t, "application/json"), function (e, t, n) {
          if (Cc.isString(e)) try {
            return (t || JSON.parse)(e), Cc.trim(e);
          } catch (e) {
            if ("SyntaxError" !== e.name) throw e;
          }
          return (n || JSON.stringify)(e);
        }(e)) : e;
      }], "object-key-init"),
      transformResponse: cc11001100_hook("transformResponse", [function (e) {
        var t = cc11001100_hook("t", this.transitional, "var-init"),
          n = cc11001100_hook("n", t && t.silentJSONParsing, "var-init"),
          r = cc11001100_hook("r", t && t.forcedJSONParsing, "var-init"),
          i = cc11001100_hook("i", !n && "json" === this.responseType, "var-init");
        if (i || r && Cc.isString(e) && e.length) try {
          return JSON.parse(e);
        } catch (e) {
          if (i) {
            if ("SyntaxError" === e.name) throw _c(e, this, "E_JSON_PARSE");
            throw e;
          }
        }
        return e;
      }], "object-key-init"),
      timeout: cc11001100_hook("timeout", 0, "object-key-init"),
      xsrfCookieName: cc11001100_hook("xsrfCookieName", "XSRF-TOKEN", "object-key-init"),
      xsrfHeaderName: cc11001100_hook("xsrfHeaderName", "X-XSRF-TOKEN", "object-key-init"),
      maxContentLength: cc11001100_hook("maxContentLength", -1, "object-key-init"),
      maxBodyLength: cc11001100_hook("maxBodyLength", -1, "object-key-init"),
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      }
    }, "var-init");
  xc.headers = cc11001100_hook("xc.headers", {
    common: {
      Accept: cc11001100_hook("Accept", "application/json, text/plain, */*", "object-key-init")
    }
  }, "assign"), Cc.forEach(["delete", "get", "head"], function (e) {
    xc.headers[e] = cc11001100_hook("xc.headers[e]", {}, "assign");
  }), Cc.forEach(["post", "put", "patch"], function (e) {
    xc.headers[e] = cc11001100_hook("xc.headers[e]", Cc.merge(kc), "assign");
  });
  var Vc = cc11001100_hook("Vc", xc, "var-init"),
    Hc = function (e, t, n) {
      var r = cc11001100_hook("r", this || Vc, "var-init");
      return Cc.forEach(n, function (n) {
        e = cc11001100_hook("e", n.call(r, e, t), "assign");
      }), e;
    },
    Fc = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  function jc(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.cancelToken && e.cancelToken.throwIfRequested();
  }
  var Bc = function (e) {
      return jc(e), e.headers = cc11001100_hook("e.headers", e.headers || {}, "assign"), e.data = cc11001100_hook("e.data", Hc.call(e, e.data, e.headers, e.transformRequest), "assign"), e.headers = cc11001100_hook("e.headers", Cc.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), "assign"), Cc.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
        delete e.headers[t];
      }), (e.adapter || Vc.adapter)(e).then(function (t) {
        return jc(e), t.data = cc11001100_hook("t.data", Hc.call(e, t.data, t.headers, e.transformResponse), "assign"), t;
      }, function (t) {
        return Fc(t) || (jc(e), t && t.response && (t.response.data = cc11001100_hook("t.response.data", Hc.call(e, t.response.data, t.response.headers, e.transformResponse), "assign"))), Promise.reject(t);
      });
    },
    Gc = function (e, t) {
      t = cc11001100_hook("t", t || {}, "assign");
      var n = cc11001100_hook("n", {}, "var-init"),
        r = cc11001100_hook("r", ["url", "method", "data"], "var-init"),
        i = cc11001100_hook("i", ["headers", "auth", "proxy", "params"], "var-init"),
        o = cc11001100_hook("o", ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"], "var-init"),
        a = cc11001100_hook("a", ["validateStatus"], "var-init");
      function s(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return Cc.isPlainObject(e) && Cc.isPlainObject(t) ? Cc.merge(e, t) : Cc.isPlainObject(t) ? Cc.merge({}, t) : Cc.isArray(t) ? t.slice() : t;
      }
      function c(r) {
        cc11001100_hook("r", r, "function-parameter");
        Cc.isUndefined(t[r]) ? Cc.isUndefined(e[r]) || (n[r] = cc11001100_hook("n[r]", s(void 0, e[r]), "assign")) : n[r] = cc11001100_hook("n[r]", s(e[r], t[r]), "assign");
      }
      Cc.forEach(r, function (e) {
        Cc.isUndefined(t[e]) || (n[e] = cc11001100_hook("n[e]", s(void 0, t[e]), "assign"));
      }), Cc.forEach(i, c), Cc.forEach(o, function (r) {
        Cc.isUndefined(t[r]) ? Cc.isUndefined(e[r]) || (n[r] = cc11001100_hook("n[r]", s(void 0, e[r]), "assign")) : n[r] = cc11001100_hook("n[r]", s(void 0, t[r]), "assign");
      }), Cc.forEach(a, function (r) {
        r in t ? n[r] = cc11001100_hook("n[r]", s(e[r], t[r]), "assign") : r in e && (n[r] = cc11001100_hook("n[r]", s(void 0, e[r]), "assign"));
      });
      var u = cc11001100_hook("u", r.concat(i).concat(o).concat(a), "var-init"),
        l = cc11001100_hook("l", Object.keys(e).concat(Object.keys(t)).filter(function (e) {
          return -1 === u.indexOf(e);
        }), "var-init");
      return Cc.forEach(l, c), n;
    },
    Wc = cc11001100_hook("Wc", "axios@0.21.4", "var-init"),
    Yc = cc11001100_hook("Yc", "sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==", "var-init"),
    Kc = cc11001100_hook("Kc", {}, "var-init"),
    qc = cc11001100_hook("qc", {
      type: cc11001100_hook("type", "range", "object-key-init"),
      registry: cc11001100_hook("registry", !0, "object-key-init"),
      raw: cc11001100_hook("raw", "axios@^0.21.1", "object-key-init"),
      name: cc11001100_hook("name", "axios", "object-key-init"),
      escapedName: cc11001100_hook("escapedName", "axios", "object-key-init"),
      rawSpec: cc11001100_hook("rawSpec", "^0.21.1", "object-key-init"),
      saveSpec: cc11001100_hook("saveSpec", null, "object-key-init"),
      fetchSpec: cc11001100_hook("fetchSpec", "^0.21.1", "object-key-init")
    }, "var-init"),
    zc = cc11001100_hook("zc", ["/@agconnect/network"], "var-init"),
    Jc = cc11001100_hook("Jc", "https://mirrors.tools.huawei.com/npm/axios/-/axios-0.21.4.tgz", "var-init"),
    Xc = cc11001100_hook("Xc", "c67b90dc0568e5c1cf2b0b858c43ba28e2eda575", "var-init"),
    Qc = cc11001100_hook("Qc", "/devcloud/ws/sGwpK/workspace/j_TIOJB8ON/HiAnalyticsSDK-JS/node_modules/@agconnect/network", "var-init"),
    Zc = cc11001100_hook("Zc", {
      name: cc11001100_hook("name", "Matt Zabriskie", "object-key-init")
    }, "var-init"),
    eu = cc11001100_hook("eu", {
      "./lib/adapters/http.js": cc11001100_hook("./lib/adapters/http.js", "./lib/adapters/xhr.js", "object-key-init")
    }, "var-init"),
    tu = cc11001100_hook("tu", {
      url: cc11001100_hook("url", "https://github.com/axios/axios/issues", "object-key-init")
    }, "var-init"),
    nu = cc11001100_hook("nu", [{
      path: cc11001100_hook("path", "./dist/axios.min.js", "object-key-init"),
      threshold: cc11001100_hook("threshold", "5kB", "object-key-init")
    }], "var-init"),
    ru = cc11001100_hook("ru", {
      "follow-redirects": cc11001100_hook("follow-redirects", "^1.14.0", "object-key-init")
    }, "var-init"),
    iu = cc11001100_hook("iu", "Promise based HTTP client for the browser and node.js", "var-init"),
    ou = cc11001100_hook("ou", {
      coveralls: cc11001100_hook("coveralls", "^3.0.0", "object-key-init"),
      "es6-promise": cc11001100_hook("es6-promise", "^4.2.4", "object-key-init"),
      grunt: cc11001100_hook("grunt", "^1.3.0", "object-key-init"),
      "grunt-banner": cc11001100_hook("grunt-banner", "^0.6.0", "object-key-init"),
      "grunt-cli": cc11001100_hook("grunt-cli", "^1.2.0", "object-key-init"),
      "grunt-contrib-clean": cc11001100_hook("grunt-contrib-clean", "^1.1.0", "object-key-init"),
      "grunt-contrib-watch": cc11001100_hook("grunt-contrib-watch", "^1.0.0", "object-key-init"),
      "grunt-eslint": cc11001100_hook("grunt-eslint", "^23.0.0", "object-key-init"),
      "grunt-karma": cc11001100_hook("grunt-karma", "^4.0.0", "object-key-init"),
      "grunt-mocha-test": cc11001100_hook("grunt-mocha-test", "^0.13.3", "object-key-init"),
      "grunt-ts": cc11001100_hook("grunt-ts", "^6.0.0-beta.19", "object-key-init"),
      "grunt-webpack": cc11001100_hook("grunt-webpack", "^4.0.2", "object-key-init"),
      "istanbul-instrumenter-loader": cc11001100_hook("istanbul-instrumenter-loader", "^1.0.0", "object-key-init"),
      "jasmine-core": cc11001100_hook("jasmine-core", "^2.4.1", "object-key-init"),
      karma: cc11001100_hook("karma", "^6.3.2", "object-key-init"),
      "karma-chrome-launcher": cc11001100_hook("karma-chrome-launcher", "^3.1.0", "object-key-init"),
      "karma-firefox-launcher": cc11001100_hook("karma-firefox-launcher", "^2.1.0", "object-key-init"),
      "karma-jasmine": cc11001100_hook("karma-jasmine", "^1.1.1", "object-key-init"),
      "karma-jasmine-ajax": cc11001100_hook("karma-jasmine-ajax", "^0.1.13", "object-key-init"),
      "karma-safari-launcher": cc11001100_hook("karma-safari-launcher", "^1.0.0", "object-key-init"),
      "karma-sauce-launcher": cc11001100_hook("karma-sauce-launcher", "^4.3.6", "object-key-init"),
      "karma-sinon": cc11001100_hook("karma-sinon", "^1.0.5", "object-key-init"),
      "karma-sourcemap-loader": cc11001100_hook("karma-sourcemap-loader", "^0.3.8", "object-key-init"),
      "karma-webpack": cc11001100_hook("karma-webpack", "^4.0.2", "object-key-init"),
      "load-grunt-tasks": cc11001100_hook("load-grunt-tasks", "^3.5.2", "object-key-init"),
      minimist: cc11001100_hook("minimist", "^1.2.0", "object-key-init"),
      mocha: cc11001100_hook("mocha", "^8.2.1", "object-key-init"),
      sinon: cc11001100_hook("sinon", "^4.5.0", "object-key-init"),
      "terser-webpack-plugin": cc11001100_hook("terser-webpack-plugin", "^4.2.3", "object-key-init"),
      typescript: cc11001100_hook("typescript", "^4.0.5", "object-key-init"),
      "url-search-params": cc11001100_hook("url-search-params", "^0.10.0", "object-key-init"),
      webpack: cc11001100_hook("webpack", "^4.44.2", "object-key-init"),
      "webpack-dev-server": cc11001100_hook("webpack-dev-server", "^3.11.0", "object-key-init")
    }, "var-init"),
    au = cc11001100_hook("au", ["xhr", "http", "ajax", "promise", "node"], "var-init"),
    su = cc11001100_hook("su", {
      type: cc11001100_hook("type", "git", "object-key-init"),
      url: cc11001100_hook("url", "git+https://github.com/axios/axios.git", "object-key-init")
    }, "var-init"),
    cu = cc11001100_hook("cu", {
      build: cc11001100_hook("build", "NODE_ENV=production grunt build", "object-key-init"),
      coveralls: cc11001100_hook("coveralls", "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js", "object-key-init"),
      examples: cc11001100_hook("examples", "node ./examples/server.js", "object-key-init"),
      fix: cc11001100_hook("fix", "eslint --fix lib/**/*.js", "object-key-init"),
      postversion: cc11001100_hook("postversion", "git push && git push --tags", "object-key-init"),
      preversion: cc11001100_hook("preversion", "npm test", "object-key-init"),
      start: cc11001100_hook("start", "node ./sandbox/server.js", "object-key-init"),
      test: cc11001100_hook("test", "grunt test", "object-key-init"),
      version: cc11001100_hook("version", "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json", "object-key-init")
    }, "var-init"),
    uu = cc11001100_hook("uu", "dist/axios.min.js", "var-init"),
    lu = cc11001100_hook("lu", {
      _from: cc11001100_hook("_from", "axios@^0.21.1", "object-key-init"),
      _id: cc11001100_hook("_id", Wc, "object-key-init"),
      _inBundle: cc11001100_hook("_inBundle", !1, "object-key-init"),
      _integrity: cc11001100_hook("_integrity", Yc, "object-key-init"),
      _location: cc11001100_hook("_location", "/axios", "object-key-init"),
      _phantomChildren: cc11001100_hook("_phantomChildren", Kc, "object-key-init"),
      _requested: cc11001100_hook("_requested", qc, "object-key-init"),
      _requiredBy: cc11001100_hook("_requiredBy", zc, "object-key-init"),
      _resolved: cc11001100_hook("_resolved", Jc, "object-key-init"),
      _shasum: cc11001100_hook("_shasum", Xc, "object-key-init"),
      _spec: cc11001100_hook("_spec", "axios@^0.21.1", "object-key-init"),
      _where: cc11001100_hook("_where", Qc, "object-key-init"),
      author: cc11001100_hook("author", Zc, "object-key-init"),
      browser: cc11001100_hook("browser", eu, "object-key-init"),
      bugs: cc11001100_hook("bugs", tu, "object-key-init"),
      bundleDependencies: cc11001100_hook("bundleDependencies", !1, "object-key-init"),
      bundlesize: cc11001100_hook("bundlesize", nu, "object-key-init"),
      dependencies: cc11001100_hook("dependencies", ru, "object-key-init"),
      deprecated: cc11001100_hook("deprecated", !1, "object-key-init"),
      description: cc11001100_hook("description", iu, "object-key-init"),
      devDependencies: cc11001100_hook("devDependencies", ou, "object-key-init"),
      homepage: cc11001100_hook("homepage", "https://axios-http.com", "object-key-init"),
      jsdelivr: cc11001100_hook("jsdelivr", "dist/axios.min.js", "object-key-init"),
      keywords: cc11001100_hook("keywords", au, "object-key-init"),
      license: cc11001100_hook("license", "MIT", "object-key-init"),
      main: cc11001100_hook("main", "index.js", "object-key-init"),
      name: cc11001100_hook("name", "axios", "object-key-init"),
      repository: cc11001100_hook("repository", su, "object-key-init"),
      scripts: cc11001100_hook("scripts", cu, "object-key-init"),
      typings: cc11001100_hook("typings", "./index.d.ts", "object-key-init"),
      unpkg: cc11001100_hook("unpkg", uu, "object-key-init"),
      version: cc11001100_hook("version", "0.21.4", "object-key-init")
    }, "var-init"),
    fu = cc11001100_hook("fu", function (e) {
      return e && e.default || e;
    }(Object.freeze({
      __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
      _from: cc11001100_hook("_from", "axios@^0.21.1", "object-key-init"),
      _id: cc11001100_hook("_id", Wc, "object-key-init"),
      _inBundle: cc11001100_hook("_inBundle", !1, "object-key-init"),
      _integrity: cc11001100_hook("_integrity", Yc, "object-key-init"),
      _location: cc11001100_hook("_location", "/axios", "object-key-init"),
      _phantomChildren: cc11001100_hook("_phantomChildren", Kc, "object-key-init"),
      _requested: cc11001100_hook("_requested", qc, "object-key-init"),
      _requiredBy: cc11001100_hook("_requiredBy", zc, "object-key-init"),
      _resolved: cc11001100_hook("_resolved", Jc, "object-key-init"),
      _shasum: cc11001100_hook("_shasum", Xc, "object-key-init"),
      _spec: cc11001100_hook("_spec", "axios@^0.21.1", "object-key-init"),
      _where: cc11001100_hook("_where", Qc, "object-key-init"),
      author: cc11001100_hook("author", Zc, "object-key-init"),
      browser: cc11001100_hook("browser", eu, "object-key-init"),
      bugs: cc11001100_hook("bugs", tu, "object-key-init"),
      bundleDependencies: cc11001100_hook("bundleDependencies", !1, "object-key-init"),
      bundlesize: cc11001100_hook("bundlesize", nu, "object-key-init"),
      dependencies: cc11001100_hook("dependencies", ru, "object-key-init"),
      deprecated: cc11001100_hook("deprecated", !1, "object-key-init"),
      description: cc11001100_hook("description", iu, "object-key-init"),
      devDependencies: cc11001100_hook("devDependencies", ou, "object-key-init"),
      homepage: cc11001100_hook("homepage", "https://axios-http.com", "object-key-init"),
      jsdelivr: cc11001100_hook("jsdelivr", "dist/axios.min.js", "object-key-init"),
      keywords: cc11001100_hook("keywords", au, "object-key-init"),
      license: cc11001100_hook("license", "MIT", "object-key-init"),
      main: cc11001100_hook("main", "index.js", "object-key-init"),
      name: cc11001100_hook("name", "axios", "object-key-init"),
      repository: cc11001100_hook("repository", su, "object-key-init"),
      scripts: cc11001100_hook("scripts", cu, "object-key-init"),
      typings: cc11001100_hook("typings", "./index.d.ts", "object-key-init"),
      unpkg: cc11001100_hook("unpkg", uu, "object-key-init"),
      version: cc11001100_hook("version", "0.21.4", "object-key-init"),
      default: cc11001100_hook("default", lu, "object-key-init")
    })), "var-init"),
    pu = cc11001100_hook("pu", {}, "var-init");
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
    pu[e] = cc11001100_hook("pu[e]", function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    }, "assign");
  });
  var hu = cc11001100_hook("hu", {}, "var-init"),
    du = cc11001100_hook("du", fu.version.split("."), "var-init");
  function gu(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", t ? t.split(".") : du, "var-init"), r = cc11001100_hook("r", e.split("."), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < 3; i++) {
      if (n[i] > r[i]) return !0;
      if (n[i] < r[i]) return !1;
    }
    return !1;
  }
  pu.transitional = cc11001100_hook("pu.transitional", function (e, t, n) {
    var r = cc11001100_hook("r", t && gu(t), "var-init");
    function i(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return "[Axios v" + fu.version + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
    }
    return function (n, o, a) {
      if (!1 === e) throw new Error(i(o, " has been removed in " + t));
      return r && !hu[o] && (hu[o] = cc11001100_hook("hu[o]", !0, "assign"), console.warn(i(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, o, a);
    };
  }, "assign");
  var vu = cc11001100_hook("vu", {
      isOlderVersion: cc11001100_hook("isOlderVersion", gu, "object-key-init"),
      assertOptions: function (e, t, n) {
        if ("object" != typeof e) throw new TypeError("options must be an object");
        for (var r = cc11001100_hook("r", Object.keys(e), "var-init"), i = cc11001100_hook("i", r.length, "var-init"); i-- > 0;) {
          var o = cc11001100_hook("o", r[i], "var-init"),
            a = cc11001100_hook("a", t[o], "var-init");
          if (a) {
            var s = cc11001100_hook("s", e[o], "var-init"),
              c = cc11001100_hook("c", void 0 === s || a(s, o, e), "var-init");
            if (!0 !== c) throw new TypeError("option " + o + " must be " + c);
          } else if (!0 !== n) throw Error("Unknown option " + o);
        }
      },
      validators: cc11001100_hook("validators", pu, "object-key-init")
    }, "var-init"),
    mu = cc11001100_hook("mu", vu.validators, "var-init");
  function Eu(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.defaults = cc11001100_hook("this.defaults", e, "assign"), this.interceptors = cc11001100_hook("this.interceptors", {
      request: cc11001100_hook("request", new Pc(), "object-key-init"),
      response: cc11001100_hook("response", new Pc(), "object-key-init")
    }, "assign");
  }
  Eu.prototype.request = cc11001100_hook("Eu.prototype.request", function (e) {
    "string" == typeof e ? (e = cc11001100_hook("e", arguments[1] || {}, "assign")).url = cc11001100_hook("(e = arguments[1] || {}).url", arguments[0], "assign") : e = cc11001100_hook("e", e || {}, "assign"), (e = cc11001100_hook("e", Gc(this.defaults, e), "assign")).method ? e.method = cc11001100_hook("e.method", e.method.toLowerCase(), "assign") : this.defaults.method ? e.method = cc11001100_hook("e.method", this.defaults.method.toLowerCase(), "assign") : e.method = cc11001100_hook("e.method", "get", "assign");
    var t = cc11001100_hook("t", e.transitional, "var-init");
    void 0 !== t && vu.assertOptions(t, {
      silentJSONParsing: cc11001100_hook("silentJSONParsing", mu.transitional(mu.boolean, "1.0.0"), "object-key-init"),
      forcedJSONParsing: cc11001100_hook("forcedJSONParsing", mu.transitional(mu.boolean, "1.0.0"), "object-key-init"),
      clarifyTimeoutError: cc11001100_hook("clarifyTimeoutError", mu.transitional(mu.boolean, "1.0.0"), "object-key-init")
    }, !1);
    var n = cc11001100_hook("n", [], "var-init"),
      r = cc11001100_hook("r", !0, "var-init");
    this.interceptors.request.forEach(function (t) {
      "function" == typeof t.runWhen && !1 === t.runWhen(e) || (r = cc11001100_hook("r", r && t.synchronous, "assign"), n.unshift(t.fulfilled, t.rejected));
    });
    var i,
      o = cc11001100_hook("o", [], "var-init");
    if (this.interceptors.response.forEach(function (e) {
      o.push(e.fulfilled, e.rejected);
    }), !r) {
      var a = cc11001100_hook("a", [Bc, void 0], "var-init");
      for (Array.prototype.unshift.apply(a, n), a = cc11001100_hook("a", a.concat(o), "assign"), i = cc11001100_hook("i", Promise.resolve(e), "assign"); a.length;) i = cc11001100_hook("i", i.then(a.shift(), a.shift()), "assign");
      return i;
    }
    for (var s = cc11001100_hook("s", e, "var-init"); n.length;) {
      var c = cc11001100_hook("c", n.shift(), "var-init"),
        u = cc11001100_hook("u", n.shift(), "var-init");
      try {
        s = cc11001100_hook("s", c(s), "assign");
      } catch (e) {
        u(e);
        break;
      }
    }
    try {
      i = cc11001100_hook("i", Bc(s), "assign");
    } catch (e) {
      return Promise.reject(e);
    }
    for (; o.length;) i = cc11001100_hook("i", i.then(o.shift(), o.shift()), "assign");
    return i;
  }, "assign"), Eu.prototype.getUri = cc11001100_hook("Eu.prototype.getUri", function (e) {
    return e = cc11001100_hook("e", Gc(this.defaults, e), "assign"), bc(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
  }, "assign"), Cc.forEach(["delete", "get", "head", "options"], function (e) {
    Eu.prototype[e] = cc11001100_hook("Eu.prototype[e]", function (t, n) {
      return this.request(Gc(n || {}, {
        method: cc11001100_hook("method", e, "object-key-init"),
        url: cc11001100_hook("url", t, "object-key-init"),
        data: cc11001100_hook("data", (n || {}).data, "object-key-init")
      }));
    }, "assign");
  }), Cc.forEach(["post", "put", "patch"], function (e) {
    Eu.prototype[e] = cc11001100_hook("Eu.prototype[e]", function (t, n, r) {
      return this.request(Gc(r || {}, {
        method: cc11001100_hook("method", e, "object-key-init"),
        url: cc11001100_hook("url", t, "object-key-init"),
        data: cc11001100_hook("data", n, "object-key-init")
      }));
    }, "assign");
  });
  var yu = cc11001100_hook("yu", Eu, "var-init");
  function Su(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.message = cc11001100_hook("this.message", e, "assign");
  }
  Su.prototype.toString = cc11001100_hook("Su.prototype.toString", function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, "assign"), Su.prototype.__CANCEL__ = cc11001100_hook("Su.prototype.__CANCEL__", !0, "assign");
  var Tu = cc11001100_hook("Tu", Su, "var-init");
  function wu(e) {
    cc11001100_hook("e", e, "function-parameter");
    if ("function" != typeof e) throw new TypeError("executor must be a function.");
    var t;
    this.promise = cc11001100_hook("this.promise", new Promise(function (e) {
      t = cc11001100_hook("t", e, "assign");
    }), "assign");
    var n = cc11001100_hook("n", this, "var-init");
    e(function (e) {
      n.reason || (n.reason = cc11001100_hook("n.reason", new Tu(e), "assign"), t(n.reason));
    });
  }
  wu.prototype.throwIfRequested = cc11001100_hook("wu.prototype.throwIfRequested", function () {
    if (this.reason) throw this.reason;
  }, "assign"), wu.source = cc11001100_hook("wu.source", function () {
    var e;
    return {
      token: cc11001100_hook("token", new wu(function (t) {
        e = cc11001100_hook("e", t, "assign");
      }), "object-key-init"),
      cancel: cc11001100_hook("cancel", e, "object-key-init")
    };
  }, "assign");
  var Cu = cc11001100_hook("Cu", wu, "var-init");
  function Au(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new yu(e), "var-init"),
      n = cc11001100_hook("n", gc(yu.prototype.request, t), "var-init");
    return Cc.extend(n, yu.prototype, t), Cc.extend(n, t), n;
  }
  var bu = cc11001100_hook("bu", Au(Vc), "var-init");
  bu.Axios = cc11001100_hook("bu.Axios", yu, "assign"), bu.create = cc11001100_hook("bu.create", function (e) {
    return Au(Gc(bu.defaults, e));
  }, "assign"), bu.Cancel = cc11001100_hook("bu.Cancel", Tu, "assign"), bu.CancelToken = cc11001100_hook("bu.CancelToken", Cu, "assign"), bu.isCancel = cc11001100_hook("bu.isCancel", Fc, "assign"), bu.all = cc11001100_hook("bu.all", function (e) {
    return Promise.all(e);
  }, "assign"), bu.spread = cc11001100_hook("bu.spread", function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  }, "assign"), bu.isAxiosError = cc11001100_hook("bu.isAxiosError", function (e) {
    return "object" == typeof e && !0 === e.isAxiosError;
  }, "assign");
  var Iu = cc11001100_hook("Iu", bu, "var-init"),
    Pu = cc11001100_hook("Pu", bu, "var-init");
  Iu.default = cc11001100_hook("Iu.default", Pu, "assign");
  var Ou = cc11001100_hook("Ou", Iu, "var-init"),
    _u = cc11001100_hook("_u", c(function (e, t) {
      !function (n, r) {
        var i = cc11001100_hook("i", "model", "var-init"),
          o = cc11001100_hook("o", "name", "var-init"),
          a = cc11001100_hook("a", "type", "var-init"),
          s = cc11001100_hook("s", "vendor", "var-init"),
          c = cc11001100_hook("c", "version", "var-init"),
          u = cc11001100_hook("u", "mobile", "var-init"),
          l = cc11001100_hook("l", "tablet", "var-init"),
          f = cc11001100_hook("f", "smarttv", "var-init"),
          p = function (e) {
            for (var t = cc11001100_hook("t", {}, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) t[e[n].toUpperCase()] = cc11001100_hook("t[e[n].toUpperCase()]", e[n], "assign");
            return t;
          },
          h = function (e, t) {
            return "string" == typeof e && -1 !== d(t).indexOf(d(e));
          },
          d = function (e) {
            return e.toLowerCase();
          },
          g = function (e, t) {
            if ("string" == typeof e) return e = cc11001100_hook("e", e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), "assign"), void 0 === t ? e : e.substring(0, 255);
          },
          v = function (e, t) {
            for (var n, r, i, o, a, s, c = cc11001100_hook("c", 0, "var-init"); c < t.length && !a;) {
              var u = cc11001100_hook("u", t[c], "var-init"),
                l = cc11001100_hook("l", t[c + 1], "var-init");
              for (n = cc11001100_hook("n", r = cc11001100_hook("r", 0, "assign"), "assign"); n < u.length && !a;) if (a = cc11001100_hook("a", u[n++].exec(e), "assign")) for (i = cc11001100_hook("i", 0, "assign"); i < l.length; i++) s = cc11001100_hook("s", a[++r], "assign"), "object" == typeof (o = cc11001100_hook("o", l[i], "assign")) && o.length > 0 ? 2 === o.length ? "function" == typeof o[1] ? this[o[0]] = cc11001100_hook("this[o[0]]", o[1].call(this, s), "assign") : this[o[0]] = cc11001100_hook("this[o[0]]", o[1], "assign") : 3 === o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = cc11001100_hook("this[o[0]]", s ? s.replace(o[1], o[2]) : void 0, "assign") : this[o[0]] = cc11001100_hook("this[o[0]]", s ? o[1].call(this, s, o[2]) : void 0, "assign") : 4 === o.length && (this[o[0]] = cc11001100_hook("this[o[0]]", s ? o[3].call(this, s.replace(o[1], o[2])) : void 0, "assign")) : this[o] = cc11001100_hook("this[o]", s || void 0, "assign");
              c += cc11001100_hook("c", 2, "assign");
            }
          },
          m = function (e, t) {
            for (var n in t) if ("object" == typeof t[n] && t[n].length > 0) {
              for (var r = cc11001100_hook("r", 0, "var-init"); r < t[n].length; r++) if (h(t[n][r], e)) return "?" === n ? void 0 : n;
            } else if (h(t[n], e)) return "?" === n ? void 0 : n;
            return e;
          },
          E = cc11001100_hook("E", {
            ME: cc11001100_hook("ME", "4.90", "object-key-init"),
            "NT 3.11": cc11001100_hook("NT 3.11", "NT3.51", "object-key-init"),
            "NT 4.0": cc11001100_hook("NT 4.0", "NT4.0", "object-key-init"),
            2e3: cc11001100_hook(2e3, "NT 5.0", "object-key-init"),
            XP: cc11001100_hook("XP", ["NT 5.1", "NT 5.2"], "object-key-init"),
            Vista: cc11001100_hook("Vista", "NT 6.0", "object-key-init"),
            7: cc11001100_hook(7, "NT 6.1", "object-key-init"),
            8: cc11001100_hook(8, "NT 6.2", "object-key-init"),
            8.1: cc11001100_hook(8.1, "NT 6.3", "object-key-init"),
            10: cc11001100_hook(10, ["NT 6.4", "NT 10.0"], "object-key-init"),
            RT: cc11001100_hook("RT", "ARM", "object-key-init")
          }, "var-init"),
          y = cc11001100_hook("y", {
            browser: cc11001100_hook("browser", [[/\b(?:crmo|crios)\/([\w\.]+)/i], [c, [o, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [c, [o, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [o, c], [/opios[\/ ]+([\w\.]+)/i], [c, [o, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [c, [o, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [o, c], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [c, [o, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [c, [o, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [c, [o, "WeChat"]], [/konqueror\/([\w\.]+)/i], [c, [o, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [c, [o, "IE"]], [/yabrowser\/([\w\.]+)/i], [c, [o, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[o, /(.+)/, "$1 Secure Browser"], c], [/\bfocus\/([\w\.]+)/i], [c, [o, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [c, [o, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [c, [o, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [c, [o, "Dolphin"]], [/coast\/([\w\.]+)/i], [c, [o, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [c, [o, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [c, [o, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[o, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[o, /(.+)/, "$1 Browser"], c], [/(comodo_dragon)\/([\w\.]+)/i], [[o, /_/g, " "], c], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [o, c], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [o], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[o, "Facebook"], c], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [o, c], [/\bgsa\/([\w\.]+) .*safari\//i], [c, [o, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [c, [o, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[o, "Chrome WebView"], c], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [c, [o, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [o, c], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [c, [o, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [c, o], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [o, [c, m, {
              "1.0": cc11001100_hook("1.0", "/8", "object-key-init"),
              1.2: cc11001100_hook(1.2, "/1", "object-key-init"),
              1.3: cc11001100_hook(1.3, "/3", "object-key-init"),
              "2.0": cc11001100_hook("2.0", "/412", "object-key-init"),
              "2.0.2": cc11001100_hook("2.0.2", "/416", "object-key-init"),
              "2.0.3": cc11001100_hook("2.0.3", "/417", "object-key-init"),
              "2.0.4": cc11001100_hook("2.0.4", "/419", "object-key-init"),
              "?": cc11001100_hook("?", "/", "object-key-init")
            }]], [/(webkit|khtml)\/([\w\.]+)/i], [o, c], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[o, "Netscape"], c], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [c, [o, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [o, c]], "object-key-init"),
            cpu: cc11001100_hook("cpu", [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", d]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", d]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", d]]], "object-key-init"),
            device: cc11001100_hook("device", [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [i, [s, "Samsung"], [a, l]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [i, [s, "Samsung"], [a, u]], [/\((ip(?:hone|od)[\w ]*);/i], [i, [s, "Apple"], [a, u]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [i, [s, "Apple"], [a, l]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [i, [s, "Huawei"], [a, l]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [i, [s, "Huawei"], [a, u]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[i, /_/g, " "], [s, "Xiaomi"], [a, u]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[i, /_/g, " "], [s, "Xiaomi"], [a, l]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [i, [s, "OPPO"], [a, u]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [i, [s, "Vivo"], [a, u]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [i, [s, "Realme"], [a, u]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [i, [s, "Motorola"], [a, u]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [i, [s, "Motorola"], [a, l]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [i, [s, "LG"], [a, l]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [i, [s, "LG"], [a, u]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [i, [s, "Lenovo"], [a, l]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[i, /_/g, " "], [s, "Nokia"], [a, u]], [/(pixel c)\b/i], [i, [s, "Google"], [a, l]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [i, [s, "Google"], [a, u]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [i, [s, "Sony"], [a, u]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[i, "Xperia Tablet"], [s, "Sony"], [a, l]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [i, [s, "OnePlus"], [a, u]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [i, [s, "Amazon"], [a, l]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[i, /(.+)/g, "Fire Phone $1"], [s, "Amazon"], [a, u]], [/(playbook);[-\w\),; ]+(rim)/i], [i, s, [a, l]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [i, [s, "BlackBerry"], [a, u]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [i, [s, "ASUS"], [a, l]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [i, [s, "ASUS"], [a, u]], [/(nexus 9)/i], [i, [s, "HTC"], [a, l]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [s, [i, /_/g, " "], [a, u]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [i, [s, "Acer"], [a, l]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [i, [s, "Meizu"], [a, u]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [i, [s, "Sharp"], [a, u]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [s, i, [a, u]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [s, i, [a, l]], [/(surface duo)/i], [i, [s, "Microsoft"], [a, l]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [i, [s, "Fairphone"], [a, u]], [/(u304aa)/i], [i, [s, "AT&T"], [a, u]], [/\bsie-(\w*)/i], [i, [s, "Siemens"], [a, u]], [/\b(rct\w+) b/i], [i, [s, "RCA"], [a, l]], [/\b(venue[\d ]{2,7}) b/i], [i, [s, "Dell"], [a, l]], [/\b(q(?:mv|ta)\w+) b/i], [i, [s, "Verizon"], [a, l]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [i, [s, "Barnes & Noble"], [a, l]], [/\b(tm\d{3}\w+) b/i], [i, [s, "NuVision"], [a, l]], [/\b(k88) b/i], [i, [s, "ZTE"], [a, l]], [/\b(nx\d{3}j) b/i], [i, [s, "ZTE"], [a, u]], [/\b(gen\d{3}) b.+49h/i], [i, [s, "Swiss"], [a, u]], [/\b(zur\d{3}) b/i], [i, [s, "Swiss"], [a, l]], [/\b((zeki)?tb.*\b) b/i], [i, [s, "Zeki"], [a, l]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[s, "Dragon Touch"], i, [a, l]], [/\b(ns-?\w{0,9}) b/i], [i, [s, "Insignia"], [a, l]], [/\b((nxa|next)-?\w{0,9}) b/i], [i, [s, "NextBook"], [a, l]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[s, "Voice"], i, [a, u]], [/\b(lvtel\-)?(v1[12]) b/i], [[s, "LvTel"], i, [a, u]], [/\b(ph-1) /i], [i, [s, "Essential"], [a, u]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [i, [s, "Envizen"], [a, l]], [/\b(trio[-\w\. ]+) b/i], [i, [s, "MachSpeed"], [a, l]], [/\btu_(1491) b/i], [i, [s, "Rotor"], [a, l]], [/(shield[\w ]+) b/i], [i, [s, "Nvidia"], [a, l]], [/(sprint) (\w+)/i], [s, i, [a, u]], [/(kin\.[onetw]{3})/i], [[i, /\./g, " "], [s, "Microsoft"], [a, u]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [i, [s, "Zebra"], [a, l]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [i, [s, "Zebra"], [a, u]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [s, i, [a, "console"]], [/droid.+; (shield) bui/i], [i, [s, "Nvidia"], [a, "console"]], [/(playstation [345portablevi]+)/i], [i, [s, "Sony"], [a, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [i, [s, "Microsoft"], [a, "console"]], [/smart-tv.+(samsung)/i], [s, [a, f]], [/hbbtv.+maple;(\d+)/i], [[i, /^/, "SmartTV"], [s, "Samsung"], [a, f]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[s, "LG"], [a, f]], [/(apple) ?tv/i], [s, [i, "Apple TV"], [a, f]], [/crkey/i], [[i, "Chromecast"], [s, "Google"], [a, f]], [/droid.+aft(\w)( bui|\))/i], [i, [s, "Amazon"], [a, f]], [/\(dtv[\);].+(aquos)/i], [i, [s, "Sharp"], [a, f]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[s, g], [i, g], [a, f]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[a, f]], [/((pebble))app/i], [s, i, [a, "wearable"]], [/droid.+; (glass) \d/i], [i, [s, "Google"], [a, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [i, [s, "Zebra"], [a, "wearable"]], [/(quest( 2)?)/i], [i, [s, "Facebook"], [a, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [s, [a, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [i, [a, u]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [i, [a, l]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[a, l]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[a, u]], [/(android[-\w\. ]{0,9});.+buil/i], [i, [s, "Generic"]]], "object-key-init"),
            engine: cc11001100_hook("engine", [[/windows.+ edge\/([\w\.]+)/i], [c, [o, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [c, [o, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [o, c], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [c, o]], "object-key-init"),
            os: cc11001100_hook("os", [[/microsoft (windows) (vista|xp)/i], [o, c], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [o, [c, m, E]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[o, "Windows"], [c, m, E]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[c, /_/g, "."], [o, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[o, "Mac OS"], [c, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [c, o], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [o, c], [/\(bb(10);/i], [c, [o, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [c, [o, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [c, [o, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [c, [o, "webOS"]], [/crkey\/([\d\.]+)/i], [c, [o, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[o, "Chromium OS"], c], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [o, c], [/(sunos) ?([\w\.\d]*)/i], [[o, "Solaris"], c], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [o, c]], "object-key-init")
          }, "var-init"),
          S = function (e, t) {
            if ("object" == typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), !(this instanceof S)) return new S(e, t).getResult();
            var r = cc11001100_hook("r", e || (void 0 !== n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""), "var-init"),
              i = cc11001100_hook("i", t ? function (e, t) {
                var n = cc11001100_hook("n", {}, "var-init");
                for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = cc11001100_hook("n[r]", t[r].concat(e[r]), "assign") : n[r] = cc11001100_hook("n[r]", e[r], "assign");
                return n;
              }(y, t) : y, "var-init");
            return this.getBrowser = cc11001100_hook("this.getBrowser", function () {
              var e = cc11001100_hook("e", {
                name: cc11001100_hook("name", void 0, "object-key-init"),
                version: cc11001100_hook("version", void 0, "object-key-init")
              }, "var-init");
              return v.call(e, r, i.browser), e.major = cc11001100_hook("e.major", function (e) {
                return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0;
              }(e.version), "assign"), e;
            }, "assign"), this.getCPU = cc11001100_hook("this.getCPU", function () {
              var e = cc11001100_hook("e", {
                architecture: cc11001100_hook("architecture", void 0, "object-key-init")
              }, "var-init");
              return v.call(e, r, i.cpu), e;
            }, "assign"), this.getDevice = cc11001100_hook("this.getDevice", function () {
              var e = cc11001100_hook("e", {
                vendor: cc11001100_hook("vendor", void 0, "object-key-init"),
                model: cc11001100_hook("model", void 0, "object-key-init"),
                type: cc11001100_hook("type", void 0, "object-key-init")
              }, "var-init");
              return v.call(e, r, i.device), e;
            }, "assign"), this.getEngine = cc11001100_hook("this.getEngine", function () {
              var e = cc11001100_hook("e", {
                name: cc11001100_hook("name", void 0, "object-key-init"),
                version: cc11001100_hook("version", void 0, "object-key-init")
              }, "var-init");
              return v.call(e, r, i.engine), e;
            }, "assign"), this.getOS = cc11001100_hook("this.getOS", function () {
              var e = cc11001100_hook("e", {
                name: cc11001100_hook("name", void 0, "object-key-init"),
                version: cc11001100_hook("version", void 0, "object-key-init")
              }, "var-init");
              return v.call(e, r, i.os), e;
            }, "assign"), this.getResult = cc11001100_hook("this.getResult", function () {
              return {
                ua: cc11001100_hook("ua", this.getUA(), "object-key-init"),
                browser: cc11001100_hook("browser", this.getBrowser(), "object-key-init"),
                engine: cc11001100_hook("engine", this.getEngine(), "object-key-init"),
                os: cc11001100_hook("os", this.getOS(), "object-key-init"),
                device: cc11001100_hook("device", this.getDevice(), "object-key-init"),
                cpu: cc11001100_hook("cpu", this.getCPU(), "object-key-init")
              };
            }, "assign"), this.getUA = cc11001100_hook("this.getUA", function () {
              return r;
            }, "assign"), this.setUA = cc11001100_hook("this.setUA", function (e) {
              return r = cc11001100_hook("r", "string" == typeof e && e.length > 255 ? g(e, 255) : e, "assign"), this;
            }, "assign"), this.setUA(r), this;
          };
        S.VERSION = cc11001100_hook("S.VERSION", "1.0.2", "assign"), S.BROWSER = cc11001100_hook("S.BROWSER", p([o, c, "major"]), "assign"), S.CPU = cc11001100_hook("S.CPU", p(["architecture"]), "assign"), S.DEVICE = cc11001100_hook("S.DEVICE", p([i, s, a, "console", u, f, l, "wearable", "embedded"]), "assign"), S.ENGINE = cc11001100_hook("S.ENGINE", S.OS = cc11001100_hook("S.OS", p([o, c]), "assign"), "assign"), e.exports && (t = cc11001100_hook("t", e.exports = cc11001100_hook("e.exports", S, "assign"), "assign")), t.UAParser = cc11001100_hook("t.UAParser", S, "assign");
        var T = cc11001100_hook("T", void 0 !== n && (n.jQuery || n.Zepto), "var-init");
        if (T && !T.ua) {
          var w = cc11001100_hook("w", new S(), "var-init");
          T.ua = cc11001100_hook("T.ua", w.getResult(), "assign"), T.ua.get = cc11001100_hook("T.ua.get", function () {
            return w.getUA();
          }, "assign"), T.ua.set = cc11001100_hook("T.ua.set", function (e) {
            w.setUA(e);
            var t = cc11001100_hook("t", w.getResult(), "var-init");
            for (var n in t) T.ua[n] = cc11001100_hook("T.ua[n]", t[n], "assign");
          }, "assign");
        }
      }("object" == typeof window ? window : s);
    }).UAParser, "var-init"),
    Nu = function (e, t) {
      return (Nu = cc11001100_hook("Nu", Object.setPrototypeOf || {
        __proto__: cc11001100_hook("__proto__", [], "object-key-init")
      } instanceof Array && function (e, t) {
        e.__proto__ = cc11001100_hook("e.__proto__", t, "assign");
      } || function (e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = cc11001100_hook("e[n]", t[n], "assign"));
      }, "assign"))(e, t);
    };
  function Ru(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function n() {
      this.constructor = cc11001100_hook("this.constructor", e, "assign");
    }
    Nu(e, t), e.prototype = cc11001100_hook("e.prototype", null === t ? Object.create(t) : (n.prototype = cc11001100_hook("n.prototype", t.prototype, "assign"), new n()), "assign");
  }
  var Lu = cc11001100_hook("Lu", function (e) {
      function t(t) {
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", e.call(this) || this, "var-init");
        return n.CancelToken = cc11001100_hook("n.CancelToken", Ou.CancelToken, "assign"), Ou.defaults.timeout = cc11001100_hook("Ou.defaults.timeout", 5e3, "assign"), null == t && null == t || (Ou.defaults.adapter = cc11001100_hook("Ou.defaults.adapter", t, "assign")), n;
      }
      return Ru(t, e), t.prototype.getAxiosIns = cc11001100_hook("t.prototype.getAxiosIns", function () {
        return Ou;
      }, "assign"), t.prototype.sendRequest = cc11001100_hook("t.prototype.sendRequest", function (e, t, n, r, i) {
        return function (e, t, n, r) {
          return new (n || (n = cc11001100_hook("n", Promise, "assign")))(function (i, o) {
            function a(e) {
              cc11001100_hook("e", e, "function-parameter");
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              cc11001100_hook("e", e, "function-parameter");
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              cc11001100_hook("e", e, "function-parameter");
              var t;
              e.done ? i(e.value) : (t = cc11001100_hook("t", e.value, "assign"), t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(a, s);
            }
            c((r = cc11001100_hook("r", r.apply(e, t || []), "assign")).next());
          });
        }(this, void 0, void 0, function () {
          var o, a;
          return function (e, t) {
            var n,
              r,
              i,
              o,
              a = cc11001100_hook("a", {
                label: cc11001100_hook("label", 0, "object-key-init"),
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: cc11001100_hook("trys", [], "object-key-init"),
                ops: cc11001100_hook("ops", [], "object-key-init")
              }, "var-init");
            return o = cc11001100_hook("o", {
              next: cc11001100_hook("next", s(0), "object-key-init"),
              throw: cc11001100_hook("throw", s(1), "object-key-init"),
              return: cc11001100_hook("return", s(2), "object-key-init")
            }, "assign"), "function" == typeof Symbol && (o[Symbol.iterator] = cc11001100_hook("o[Symbol.iterator]", function () {
              return this;
            }, "assign")), o;
            function s(o) {
              cc11001100_hook("o", o, "function-parameter");
              return function (s) {
                return function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a;) try {
                    if (n = cc11001100_hook("n", 1, "assign"), r && (i = cc11001100_hook("i", 2 & o[0] ? r.return : o[0] ? r.throw || ((i = cc11001100_hook("i", r.return, "assign")) && i.call(r), 0) : r.next, "assign")) && !(i = cc11001100_hook("i", i.call(r, o[1]), "assign")).done) return i;
                    switch (r = cc11001100_hook("r", 0, "assign"), i && (o = cc11001100_hook("o", [2 & o[0], i.value], "assign")), o[0]) {
                      case 0:
                      case 1:
                        i = cc11001100_hook("i", o, "assign");
                        break;
                      case 4:
                        return a.label++, {
                          value: cc11001100_hook("value", o[1], "object-key-init"),
                          done: cc11001100_hook("done", !1, "object-key-init")
                        };
                      case 5:
                        a.label++, r = cc11001100_hook("r", o[1], "assign"), o = cc11001100_hook("o", [0], "assign");
                        continue;
                      case 7:
                        o = cc11001100_hook("o", a.ops.pop(), "assign"), a.trys.pop();
                        continue;
                      default:
                        if (!((i = cc11001100_hook("i", (i = cc11001100_hook("i", a.trys, "assign")).length > 0 && i[i.length - 1], "assign")) || 6 !== o[0] && 2 !== o[0])) {
                          a = cc11001100_hook("a", 0, "assign");
                          continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                          a.label = cc11001100_hook("a.label", o[1], "assign");
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          a.label = cc11001100_hook("a.label", i[1], "assign"), i = cc11001100_hook("i", o, "assign");
                          break;
                        }
                        if (i && a.label < i[2]) {
                          a.label = cc11001100_hook("a.label", i[2], "assign"), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = cc11001100_hook("o", t.call(e, a), "assign");
                  } catch (e) {
                    o = cc11001100_hook("o", [6, e], "assign"), r = cc11001100_hook("r", 0, "assign");
                  } finally {
                    n = cc11001100_hook("n", i = cc11001100_hook("i", 0, "assign"), "assign");
                  }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: cc11001100_hook("value", o[0] ? o[1] : void 0, "object-key-init"),
                    done: cc11001100_hook("done", !0, "object-key-init")
                  };
                }([o, s]);
              };
            }
          }(this, function (s) {
            switch (s.label) {
              case 0:
                return this.checkParam(t) ? (o = cc11001100_hook("o", {
                  url: cc11001100_hook("url", t, "object-key-init"),
                  method: cc11001100_hook("method", e, "object-key-init"),
                  transformResponse: cc11001100_hook("transformResponse", null == i ? void 0 : i.transformResponse, "object-key-init"),
                  headers: cc11001100_hook("headers", r, "object-key-init"),
                  timeout: cc11001100_hook("timeout", null == i ? void 0 : i.timeout, "object-key-init"),
                  responseType: cc11001100_hook("responseType", null == i ? void 0 : i.responseType, "object-key-init"),
                  onUploadProgress: cc11001100_hook("onUploadProgress", null == i ? void 0 : i.onUploadProgress, "object-key-init"),
                  onDownloadProgress: cc11001100_hook("onDownloadProgress", null == i ? void 0 : i.onDownloadProgress, "object-key-init"),
                  validateStatus: cc11001100_hook("validateStatus", null == i ? void 0 : i.validateStatus, "object-key-init"),
                  cancelToken: cc11001100_hook("cancelToken", null == i ? void 0 : i.cancelToken, "object-key-init")
                }, "assign"), "PUT" != e && "POST" != e || (o.data = cc11001100_hook("o.data", n, "assign")), "GET" != e && "DELETE" != e || (o.params = cc11001100_hook("o.params", n, "assign")), i && i.throwOriginException ? [2, Ou.request(o)] : [4, Ou.request(o).catch(function (e) {
                  return Promise.reject(new rc(ic.NETWORK_REQUEST_ERROR, e, "network"));
                })]) : [2, Promise.reject(new rc(ic.NETWORK_REQUEST_ERROR, {
                  message: cc11001100_hook("message", "url is illegal", "object-key-init")
                }, "network"))];
              case 1:
                return a = cc11001100_hook("a", s.sent(), "assign"), [2, Promise.resolve(a)];
            }
          });
        });
      }, "assign"), t;
    }(function () {
      function e() {
        this.CancelToken = cc11001100_hook("this.CancelToken", void 0, "assign");
      }
      return e.prototype.post = cc11001100_hook("e.prototype.post", function (e, t, n, r) {
        return this.sendRequest("POST", e, t, n, r);
      }, "assign"), e.prototype.get = cc11001100_hook("e.prototype.get", function (e, t, n, r) {
        return this.sendRequest("GET", e, t, n, r);
      }, "assign"), e.prototype.delete = cc11001100_hook("e.prototype.delete", function (e, t, n, r) {
        return this.sendRequest("DELETE", e, t, n, r);
      }, "assign"), e.prototype.put = cc11001100_hook("e.prototype.put", function (e, t, n, r) {
        return this.sendRequest("PUT", e, t, n, r);
      }, "assign"), e.prototype.checkParam = cc11001100_hook("e.prototype.checkParam", function (e) {
        return !(!e || e.match(/\s/g) || !e.match(/^(ht)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?/));
      }, "assign"), e;
    }()), "var-init"),
    $u = cc11001100_hook("$u", function () {
      function e() {}
      return e.prototype.getPlatform = cc11001100_hook("e.prototype.getPlatform", function () {
        return "";
      }, "assign"), e.prototype.getPlatformVersion = cc11001100_hook("e.prototype.getPlatformVersion", function () {
        return "";
      }, "assign"), e.prototype.getPackageName = cc11001100_hook("e.prototype.getPackageName", function () {
        return "";
      }, "assign"), e.prototype.getAppVersion = cc11001100_hook("e.prototype.getAppVersion", function () {
        return "";
      }, "assign"), e.prototype.getLanguage = cc11001100_hook("e.prototype.getLanguage", function () {
        return "";
      }, "assign"), e.prototype.getScript = cc11001100_hook("e.prototype.getScript", function () {
        return "";
      }, "assign"), e.prototype.getCountry = cc11001100_hook("e.prototype.getCountry", function () {
        return "";
      }, "assign"), e.prototype.getSystemInfo = cc11001100_hook("e.prototype.getSystemInfo", function () {
        return {
          name: cc11001100_hook("name", "", "object-key-init"),
          version: cc11001100_hook("version", "", "object-key-init")
        };
      }, "assign"), e.prototype.getBrowsersInfo = cc11001100_hook("e.prototype.getBrowsersInfo", function () {
        return {
          name: cc11001100_hook("name", "", "object-key-init"),
          version: cc11001100_hook("version", "", "object-key-init")
        };
      }, "assign"), e;
    }(), "var-init"),
    Du = cc11001100_hook("Du", function (e) {
      function n(n) {
        cc11001100_hook("n", n, "function-parameter");
        var r = cc11001100_hook("r", e.call(this) || this, "var-init");
        return r.logger = cc11001100_hook("r.logger", tc.createLogger("AGCPlatformInfoService"), "assign"), r.instance = cc11001100_hook("r.instance", n || t.instance(), "assign"), r;
      }
      return Ru(n, e), n.prototype.getPlatform = cc11001100_hook("n.prototype.getPlatform", function () {
        return "JS-SDK";
      }, "assign"), n.prototype.getAppVersion = cc11001100_hook("n.prototype.getAppVersion", function () {
        return this.instance.getAppVersion();
      }, "assign"), n.prototype.getLanguage = cc11001100_hook("n.prototype.getLanguage", function () {
        var e;
        return (e = cc11001100_hook("e", navigator.languages && navigator.languages[0] ? navigator.languages[0] : navigator.language, "assign")).toLowerCase().length > 2 ? e.toLowerCase().substr(0, 2) : "";
      }, "assign"), n.prototype.getSystemInfo = cc11001100_hook("n.prototype.getSystemInfo", function () {
        var e = cc11001100_hook("e", "", "var-init"),
          t = cc11001100_hook("t", "", "var-init");
        try {
          var n = cc11001100_hook("n", navigator.userAgent, "var-init"),
            r = cc11001100_hook("r", new _u(), "var-init");
          r.setUA(n);
          var i = cc11001100_hook("i", r.getResult(), "var-init");
          e = cc11001100_hook("e", i.os.name, "assign"), t = cc11001100_hook("t", i.os.version, "assign");
        } catch (e) {
          this.logger.warn("get system info failed");
        }
        return "Mac OS" === e && (e = cc11001100_hook("e", "Macintosh", "assign")), {
          name: cc11001100_hook("name", e, "object-key-init"),
          version: cc11001100_hook("version", t, "object-key-init")
        };
      }, "assign"), n.prototype.getBrowsersInfo = cc11001100_hook("n.prototype.getBrowsersInfo", function () {
        var e = cc11001100_hook("e", "", "var-init"),
          t = cc11001100_hook("t", "", "var-init");
        try {
          var n = cc11001100_hook("n", navigator.userAgent, "var-init"),
            r = cc11001100_hook("r", new _u(), "var-init");
          r.setUA(n);
          var i = cc11001100_hook("i", r.getResult(), "var-init");
          e = cc11001100_hook("e", i.browser.name, "assign"), t = cc11001100_hook("t", i.browser.version, "assign");
        } catch (e) {
          this.logger.warn("get browser info failed");
        }
        return {
          name: cc11001100_hook("name", e, "object-key-init"),
          version: cc11001100_hook("version", t, "object-key-init")
        };
      }, "assign"), n;
    }($u), "var-init"),
    ku = cc11001100_hook("ku", function () {
      function e() {
        this.logger = cc11001100_hook("this.logger", tc.createLogger("AGCWebSocketService"), "assign");
      }
      return e.prototype.getReadyState = cc11001100_hook("e.prototype.getReadyState", function () {
        return this.websocket ? Number(this.websocket.readyState) : null;
      }, "assign"), e.prototype.send = cc11001100_hook("e.prototype.send", function (e, t, n) {
        try {
          if (this.websocket) {
            if (this.websocket.send(e), t) return t();
          } else if (n) return n();
        } catch (e) {
          if (this.logger.error(e), n) return n();
        }
      }, "assign"), e.prototype.close = cc11001100_hook("e.prototype.close", function (e, t, n, r) {
        try {
          if (this.websocket) {
            if (this.websocket.close(e, t), n) return n();
          } else if (r) return r();
        } catch (e) {
          if (this.logger.error(e), r) return r();
        }
      }, "assign"), e.prototype.onOpen = cc11001100_hook("e.prototype.onOpen", function (e) {
        if (!this.websocket) throw new rc(ic.WEBSOCKET_ERROR, {
          message: cc11001100_hook("message", "webSocket connect fail", "object-key-init")
        }, "network");
        this.websocket.onopen = cc11001100_hook("this.websocket.onopen", e, "assign");
      }, "assign"), e.prototype.onMessage = cc11001100_hook("e.prototype.onMessage", function (e) {
        if (!this.websocket) throw new rc(ic.WEBSOCKET_ERROR, {
          message: cc11001100_hook("message", "webSocket connect fail", "object-key-init")
        }, "network");
        this.websocket.onmessage = cc11001100_hook("this.websocket.onmessage", function (t) {
          e && e(t.data);
        }, "assign");
      }, "assign"), e.prototype.onClose = cc11001100_hook("e.prototype.onClose", function (e) {
        if (!this.websocket) throw new rc(ic.WEBSOCKET_ERROR, {
          message: cc11001100_hook("message", "webSocket connect fail", "object-key-init")
        }, "network");
        this.websocket.onclose = cc11001100_hook("this.websocket.onclose", function (t) {
          e && e(t.code, t.reason, t.wasClean);
        }, "assign");
      }, "assign"), e.prototype.onError = cc11001100_hook("e.prototype.onError", function (e) {
        if (!this.websocket) throw new rc(ic.WEBSOCKET_ERROR, {
          message: cc11001100_hook("message", "webSocket connect fail", "object-key-init")
        }, "network");
        this.websocket.onerror = cc11001100_hook("this.websocket.onerror", function (t) {
          e && e(t);
        }, "assign");
      }, "assign"), e;
    }(), "var-init"),
    Uu = cc11001100_hook("Uu", function (e) {
      function t() {
        var t = cc11001100_hook("t", e.call(this) || this, "var-init");
        if (t.WebSocketImpl = cc11001100_hook("t.WebSocketImpl", "MozWebSocket" in window ? MozWebSocket : WebSocket, "assign"), !t.WebSocketImpl) throw new rc(ic.WEBSOCKET_NOT_SUPPORT, {
          message: cc11001100_hook("message", "Sorry, your browser does not support WebSockets.", "object-key-init")
        }, "network");
        return t;
      }
      return Ru(t, e), t.prototype.connect = cc11001100_hook("t.prototype.connect", function (e, t, n) {
        if (this.websocket && 3 != this.websocket.readyState && (this.websocket.close(), this.websocket = cc11001100_hook("this.websocket", null, "assign")), this.websocket = cc11001100_hook("this.websocket", new this.WebSocketImpl(e, n), "assign"), !this.websocket) throw new rc(ic.WEBSOCKET_ERROR, {
          message: cc11001100_hook("message", "webSocket create fail", "object-key-init")
        }, "network");
        return Promise.resolve();
      }, "assign"), t;
    }(ku), "var-init");
  function Mu(e) {
    cc11001100_hook("e", e, "function-parameter");
    return new Promise(function (t, n) {
      var r,
        i = cc11001100_hook("i", e.method && e.method.toUpperCase() || "GET", "var-init"),
        o = cc11001100_hook("o", {
          method: cc11001100_hook("method", i, "object-key-init"),
          header: cc11001100_hook("header", e.headers, "object-key-init"),
          url: cc11001100_hook("url", e.url, "object-key-init"),
          dataType: cc11001100_hook("dataType", e.transformResponse ? "text" : "json", "object-key-init"),
          success: function (r) {
            var i = cc11001100_hook("i", r.data, "var-init");
            e.transformResponse && (i = cc11001100_hook("i", e.transformResponse[0](r.data), "assign"));
            var o = cc11001100_hook("o", {
              data: cc11001100_hook("data", i, "object-key-init"),
              status: cc11001100_hook("status", r.statusCode, "object-key-init"),
              statusText: cc11001100_hook("statusText", r.errMsg, "object-key-init"),
              headers: cc11001100_hook("headers", r.header, "object-key-init"),
              config: cc11001100_hook("config", e, "object-key-init")
            }, "var-init");
            e.validateStatus && e.validateStatus(r.statusCode) || !e.validateStatus && 200 == r.statusCode ? t(o) : n({
              message: cc11001100_hook("message", r.errMsg, "object-key-init"),
              code: cc11001100_hook("code", r.statusCode, "object-key-init"),
              response: cc11001100_hook("response", o, "object-key-init")
            });
          },
          fail: function (e) {
            n({
              message: cc11001100_hook("message", e.errMsg, "object-key-init"),
              response: {}
            });
          },
          complete: function () {
            r = cc11001100_hook("r", void 0, "assign");
          }
        }, "var-init");
      e.timeout ? o.timeout = cc11001100_hook("o.timeout", e.timeout, "assign") : o.timeout = cc11001100_hook("o.timeout", 5e3, "assign"), e.responseType && (o.responseType = cc11001100_hook("o.responseType", e.responseType, "assign")), e.cancelToken && e.cancelToken.promise.then(function (e) {
        r && (r.abort && r.abort(), n(e), r = cc11001100_hook("r", void 0, "assign"));
      }), "PUT" == i || "POST" == i ? o.data = cc11001100_hook("o.data", e.data, "assign") : "GET" != i && "DELETE" != i || (o.data = cc11001100_hook("o.data", e.params, "assign")), r = cc11001100_hook("r", wx.request(o), "assign");
    });
  }
  var xu = cc11001100_hook("xu", function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }
      return Ru(t, e), t.prototype.connect = cc11001100_hook("t.prototype.connect", function (e, t, n) {
        return this.websocket && 3 != this.websocket.readyState && (this.websocket.close(), this.websocket = cc11001100_hook("this.websocket", null, "assign")), this.websocket = cc11001100_hook("this.websocket", wx.connectSocket({
          url: cc11001100_hook("url", e, "object-key-init"),
          header: cc11001100_hook("header", t, "object-key-init"),
          protocols: cc11001100_hook("protocols", n, "object-key-init")
        }), "assign"), this.websocket ? Promise.resolve() : (this.logger.error("webSocket create fail"), Promise.reject(new rc(ic.WEBSOCKET_ERROR, {
          message: cc11001100_hook("message", "webSocket create failed", "object-key-init")
        }, "network")));
      }, "assign"), t.prototype.send = cc11001100_hook("t.prototype.send", function (e, t, n) {
        this.websocket ? this.websocket.send({
          data: cc11001100_hook("data", e, "object-key-init"),
          success: cc11001100_hook("success", t, "object-key-init"),
          fail: cc11001100_hook("fail", n, "object-key-init")
        }) : n && n();
      }, "assign"), t.prototype.close = cc11001100_hook("t.prototype.close", function (e, t, n, r) {
        this.websocket ? this.websocket.close({
          code: cc11001100_hook("code", e, "object-key-init"),
          reason: cc11001100_hook("reason", t, "object-key-init"),
          success: cc11001100_hook("success", n, "object-key-init"),
          fail: cc11001100_hook("fail", r, "object-key-init")
        }) : r && r();
      }, "assign"), t.prototype.onOpen = cc11001100_hook("t.prototype.onOpen", function (e) {
        this.websocket ? this.websocket.onOpen(e) : this.logger.error("webSocket connect failed");
      }, "assign"), t.prototype.onMessage = cc11001100_hook("t.prototype.onMessage", function (e) {
        this.websocket ? this.websocket.onMessage(function (t) {
          e && e(t.data);
        }) : this.logger.error("webSocket connect failed");
      }, "assign"), t.prototype.onClose = cc11001100_hook("t.prototype.onClose", function (e) {
        this.websocket ? this.websocket.onClose(function (t) {
          e && e(t.code, t.reason, t.wasClean);
        }) : this.logger.error("webSocket connect failed");
      }, "assign"), t.prototype.onError = cc11001100_hook("t.prototype.onError", function (e) {
        this.websocket ? this.websocket.onError(e) : this.logger.error("webSocket connect failed");
      }, "assign"), t;
    }(ku), "var-init"),
    Vu = cc11001100_hook("Vu", function (e) {
      function t() {
        var t = cc11001100_hook("t", null !== e && e.apply(this, arguments) || this, "var-init");
        return t.logger = cc11001100_hook("t.logger", tc.createLogger("AGCPlatformInfoService"), "assign"), t;
      }
      return Ru(t, e), t.prototype.getPlatform = cc11001100_hook("t.prototype.getPlatform", function () {
        return "JS-SDK-Mini-Program";
      }, "assign"), t.prototype.getPlatformVersion = cc11001100_hook("t.prototype.getPlatformVersion", function () {
        try {
          return wx.getSystemInfoSync().system;
        } catch (e) {
          return this.logger.error("getLanguage:fail,", e.message), "";
        }
      }, "assign"), t.prototype.getAppVersion = cc11001100_hook("t.prototype.getAppVersion", function () {
        try {
          return wx.getAccountInfoSync().miniProgram.version;
        } catch (e) {
          return this.logger.error("getAppVersion:fail,", e.message), "";
        }
      }, "assign"), t.prototype.getLanguage = cc11001100_hook("t.prototype.getLanguage", function () {
        try {
          var e = cc11001100_hook("e", wx.getSystemInfoSync().language, "var-init");
          return e.toLowerCase().length > 2 ? e.toLowerCase().substr(0, 2) : "";
        } catch (e) {
          return this.logger.error("getLanguage:fail,", e.message), "";
        }
      }, "assign"), t;
    }($u), "var-init"),
    Hu = cc11001100_hook("Hu", "undefined" == typeof window && "object" == typeof wx, "var-init"),
    Fu = cc11001100_hook("Fu", t, "var-init");
  Fu.registerInternalService({
    name: cc11001100_hook("name", "AGCNetworkService", "object-key-init"),
    serviceFactory: function (e) {
      return Hu ? new Lu(Mu) : new Lu();
    }
  }), Fu.registerInternalService({
    name: cc11001100_hook("name", "AGCWebSocketService", "object-key-init"),
    serviceFactory: function (e) {
      return Hu ? new xu() : new Uu();
    }
  }), Fu.registerInternalService({
    name: cc11001100_hook("name", "AGCPlatformInfoService", "object-key-init"),
    serviceFactory: function (e) {
      return Hu ? new Vu() : new Du(e);
    }
  });
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
  
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
  
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  var ju = function (e, t) {
    return (ju = cc11001100_hook("ju", Object.setPrototypeOf || {
      __proto__: cc11001100_hook("__proto__", [], "object-key-init")
    } instanceof Array && function (e, t) {
      e.__proto__ = cc11001100_hook("e.__proto__", t, "assign");
    } || function (e, t) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = cc11001100_hook("e[n]", t[n], "assign"));
    }, "assign"))(e, t);
  };
  function Bu(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return new (n || (n = cc11001100_hook("n", Promise, "assign")))(function (i, o) {
      function a(e) {
        cc11001100_hook("e", e, "function-parameter");
        try {
          c(r.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        cc11001100_hook("e", e, "function-parameter");
        try {
          c(r.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function c(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t;
        e.done ? i(e.value) : (t = cc11001100_hook("t", e.value, "assign"), t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
      c((r = cc11001100_hook("r", r.apply(e, t || []), "assign")).next());
    });
  }
  function Gu(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r,
      i,
      o,
      a = cc11001100_hook("a", {
        label: cc11001100_hook("label", 0, "object-key-init"),
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: cc11001100_hook("trys", [], "object-key-init"),
        ops: cc11001100_hook("ops", [], "object-key-init")
      }, "var-init");
    return o = cc11001100_hook("o", {
      next: cc11001100_hook("next", s(0), "object-key-init"),
      throw: cc11001100_hook("throw", s(1), "object-key-init"),
      return: cc11001100_hook("return", s(2), "object-key-init")
    }, "assign"), "function" == typeof Symbol && (o[Symbol.iterator] = cc11001100_hook("o[Symbol.iterator]", function () {
      return this;
    }, "assign")), o;
    function s(o) {
      cc11001100_hook("o", o, "function-parameter");
      return function (s) {
        return function (o) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; a;) try {
            if (n = cc11001100_hook("n", 1, "assign"), r && (i = cc11001100_hook("i", 2 & o[0] ? r.return : o[0] ? r.throw || ((i = cc11001100_hook("i", r.return, "assign")) && i.call(r), 0) : r.next, "assign")) && !(i = cc11001100_hook("i", i.call(r, o[1]), "assign")).done) return i;
            switch (r = cc11001100_hook("r", 0, "assign"), i && (o = cc11001100_hook("o", [2 & o[0], i.value], "assign")), o[0]) {
              case 0:
              case 1:
                i = cc11001100_hook("i", o, "assign");
                break;
              case 4:
                return a.label++, {
                  value: cc11001100_hook("value", o[1], "object-key-init"),
                  done: cc11001100_hook("done", !1, "object-key-init")
                };
              case 5:
                a.label++, r = cc11001100_hook("r", o[1], "assign"), o = cc11001100_hook("o", [0], "assign");
                continue;
              case 7:
                o = cc11001100_hook("o", a.ops.pop(), "assign"), a.trys.pop();
                continue;
              default:
                if (!((i = cc11001100_hook("i", (i = cc11001100_hook("i", a.trys, "assign")).length > 0 && i[i.length - 1], "assign")) || 6 !== o[0] && 2 !== o[0])) {
                  a = cc11001100_hook("a", 0, "assign");
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = cc11001100_hook("a.label", o[1], "assign");
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = cc11001100_hook("a.label", i[1], "assign"), i = cc11001100_hook("i", o, "assign");
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = cc11001100_hook("a.label", i[2], "assign"), a.ops.push(o);
                  break;
                }
                i[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            o = cc11001100_hook("o", t.call(e, a), "assign");
          } catch (e) {
            o = cc11001100_hook("o", [6, e], "assign"), r = cc11001100_hook("r", 0, "assign");
          } finally {
            n = cc11001100_hook("n", i = cc11001100_hook("i", 0, "assign"), "assign");
          }
          if (5 & o[0]) throw o[1];
          return {
            value: cc11001100_hook("value", o[0] ? o[1] : void 0, "object-key-init"),
            done: cc11001100_hook("done", !0, "object-key-init")
          };
        }([o, s]);
      };
    }
  }
  var Wu = cc11001100_hook("Wu", function () {
      function e() {
        this.TWO_MINUTES_EARLY = cc11001100_hook("this.TWO_MINUTES_EARLY", 12e4, "assign"), this.ONE_HOUR = cc11001100_hook("this.ONE_HOUR", 36e5, "assign"), this.expiration = cc11001100_hook("this.expiration", 0, "assign"), this.tokenString = cc11001100_hook("this.tokenString", "", "assign"), this.issuedAt = cc11001100_hook("this.issuedAt", "0", "assign"), this.notBefore = cc11001100_hook("this.notBefore", "0", "assign"), this.lastRefreshTime = cc11001100_hook("this.lastRefreshTime", 0, "assign");
      }
      return e.prototype.constructFromJson = cc11001100_hook("e.prototype.constructFromJson", function (e) {
        this.expiration = cc11001100_hook("this.expiration", e.expiration, "assign"), this.issuedAt = cc11001100_hook("this.issuedAt", e.issuedAt, "assign"), this.tokenString = cc11001100_hook("this.tokenString", e.tokenString, "assign"), this.notBefore = cc11001100_hook("this.notBefore", e.notBefore, "assign"), this.lastRefreshTime = cc11001100_hook("this.lastRefreshTime", e.lastRefreshTime, "assign");
      }, "assign"), e.prototype.isValid = cc11001100_hook("e.prototype.isValid", function () {
        var e = cc11001100_hook("e", new Date().getTime(), "var-init"),
          t = cc11001100_hook("t", this.lastRefreshTime + 1e3 * this.expiration - this.TWO_MINUTES_EARLY, "var-init");
        return null != this.tokenString && e <= t;
      }, "assign"), e.prototype.allowRefresh = cc11001100_hook("e.prototype.allowRefresh", function () {
        return new Date().getTime() - this.lastRefreshTime > this.ONE_HOUR;
      }, "assign"), e;
    }(), "var-init"),
    Yu = cc11001100_hook("Yu", function (e) {
      function t(t) {
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", e.call(this, t) || this, "var-init");
        return n.REQUEST_URL = cc11001100_hook("n.REQUEST_URL", "/agc/apigw/oauth2/v1/token", "assign"), n.useJwt = cc11001100_hook("n.useJwt", 0, "assign"), n;
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
          this.constructor = cc11001100_hook("this.constructor", e, "assign");
        }
        ju(e, t), e.prototype = cc11001100_hook("e.prototype", null === t ? Object.create(t) : (n.prototype = cc11001100_hook("n.prototype", t.prototype, "assign"), new n()), "assign");
      }(t, e), t.prototype.getBody = cc11001100_hook("t.prototype.getBody", function () {
        return {
          grant_type: cc11001100_hook("grant_type", "client_credentials", "object-key-init"),
          client_id: cc11001100_hook("client_id", this.getHeaderClientId(), "object-key-init"),
          client_secret: cc11001100_hook("client_secret", this.getClientSecret(), "object-key-init"),
          useJwt: cc11001100_hook("useJwt", this.getUseJwt(), "object-key-init")
        };
      }, "assign"), t.prototype.getUrl = cc11001100_hook("t.prototype.getUrl", function () {
        return this.getAgcgwUrl() + this.REQUEST_URL;
      }, "assign"), t.prototype.setUseJwt = cc11001100_hook("t.prototype.setUseJwt", function (e) {
        this.useJwt = cc11001100_hook("this.useJwt", e, "assign");
      }, "assign"), t.prototype.getUseJwt = cc11001100_hook("t.prototype.getUseJwt", function () {
        return this.useJwt;
      }, "assign"), t;
    }(function () {
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        this.sdkPlatform = cc11001100_hook("this.sdkPlatform", "", "assign"), this.sdkPlatformVersion = cc11001100_hook("this.sdkPlatformVersion", "", "assign"), this.sdkType = cc11001100_hook("this.sdkType", "JS", "assign"), this.packageName = cc11001100_hook("this.packageName", "", "assign"), this.appVersion = cc11001100_hook("this.appVersion", "", "assign"), this.headerProductId = cc11001100_hook("this.headerProductId", "", "assign"), this.headerAppId = cc11001100_hook("this.headerAppId", "", "assign"), this.headerClientId = cc11001100_hook("this.headerClientId", "", "assign"), this.clientSecret = cc11001100_hook("this.clientSecret", "", "assign"), this.agcgwUrl = cc11001100_hook("this.agcgwUrl", "", "assign"), this.agcgwBackUrl = cc11001100_hook("this.agcgwBackUrl", "", "assign"), this.agcConfig = cc11001100_hook("this.agcConfig", null, "assign"), this.instance = cc11001100_hook("this.instance", null, "assign"), this.sdkServiceName = cc11001100_hook("this.sdkServiceName", "agconnect-credential", "assign"), this.sdkVersion = cc11001100_hook("this.sdkVersion", "1.3.1", "assign"), this.setAGCInstance(e);
      }
      return e.prototype.setAGCInstance = cc11001100_hook("e.prototype.setAGCInstance", function (e) {
        if (!e) throw new rc(ic.AGC_INNER_ERROR, {
          message: cc11001100_hook("message", "set AGCInstance using null or undefined object", "object-key-init")
        }, "CredentialsService");
        this.instance = cc11001100_hook("this.instance", e, "assign"), this.agcConfig = cc11001100_hook("this.agcConfig", null, "assign");
      }, "assign"), e.prototype.getHeaderClientId = cc11001100_hook("e.prototype.getHeaderClientId", function () {
        return this.initConfig() ? this.headerClientId : "";
      }, "assign"), e.prototype.getClientSecret = cc11001100_hook("e.prototype.getClientSecret", function () {
        return this.initConfig() ? this.clientSecret : "";
      }, "assign"), e.prototype.getAgcgwUrl = cc11001100_hook("e.prototype.getAgcgwUrl", function () {
        return this.initConfig() ? this.agcgwUrl : "";
      }, "assign"), e.prototype.getHeader = cc11001100_hook("e.prototype.getHeader", function () {
        if (!this.initConfig()) return "";
        var e = cc11001100_hook("e", this.instance.getService("AGCPlatformInfoService"), "var-init");
        return e && (this.sdkPlatform = cc11001100_hook("this.sdkPlatform", e.getPlatform(), "assign"), this.sdkPlatformVersion = cc11001100_hook("this.sdkPlatformVersion", e.getPlatformVersion(), "assign"), this.packageName = cc11001100_hook("this.packageName", e.getPackageName(), "assign"), this.appVersion = cc11001100_hook("this.appVersion", e.getAppVersion(), "assign")), {
          sdkVersion: cc11001100_hook("sdkVersion", this.sdkVersion, "object-key-init"),
          sdkPlatform: cc11001100_hook("sdkPlatform", this.sdkPlatform, "object-key-init"),
          sdkServiceName: cc11001100_hook("sdkServiceName", this.sdkServiceName, "object-key-init"),
          sdkPlatformVersion: cc11001100_hook("sdkPlatformVersion", this.sdkPlatformVersion, "object-key-init"),
          sdkType: cc11001100_hook("sdkType", this.sdkType, "object-key-init"),
          packageName: cc11001100_hook("packageName", this.packageName, "object-key-init"),
          appVersion: cc11001100_hook("appVersion", this.appVersion, "object-key-init"),
          app_id: cc11001100_hook("app_id", this.headerAppId, "object-key-init"),
          client_id: cc11001100_hook("client_id", this.headerClientId, "object-key-init"),
          productId: cc11001100_hook("productId", this.headerProductId, "object-key-init"),
          "Content-Type": cc11001100_hook("Content-Type", "application/json;charset=UTF-8", "object-key-init")
        };
      }, "assign"), e.prototype.initConfig = cc11001100_hook("e.prototype.initConfig", function () {
        if (!this.instance) throw new rc(ic.AGC_INNER_ERROR, {
          message: cc11001100_hook("message", "set AGCInstance using null or undefined object", "object-key-init")
        }, "CredentialsService");
        return null == this.agcConfig && (this.agcConfig = cc11001100_hook("this.agcConfig", this.instance.config(), "assign"), this.headerProductId = cc11001100_hook("this.headerProductId", this.agcConfig.client.product_id, "assign"), this.headerClientId = cc11001100_hook("this.headerClientId", this.agcConfig.client.client_id, "assign"), this.headerAppId = cc11001100_hook("this.headerAppId", this.agcConfig.client.app_id, "assign"), this.clientSecret = cc11001100_hook("this.clientSecret", this.agcConfig.client.client_secret, "assign"), this.agcgwUrl = cc11001100_hook("this.agcgwUrl", this.instance.getGwUrl(), "assign"), this.agcgwBackUrl = cc11001100_hook("this.agcgwBackUrl", this.instance.getGwBackUrl(), "assign")), !0;
      }, "assign"), e;
    }()), "var-init"),
    Ku = cc11001100_hook("Ku", function () {
      function e() {}
      return e.getInstance = cc11001100_hook("e.getInstance", function () {
        return e.instance || (e.instance = cc11001100_hook("e.instance", new e(), "assign")), e.instance;
      }, "assign"), e.prototype.getStorage = cc11001100_hook("e.prototype.getStorage", function (e) {
        var t = cc11001100_hook("t", e.getService("AGCStorageService"), "var-init");
        if (null != t) return t.getStorageInstance(0, e.getCryptImp());
        qu.error("Get AGC storage Service failed.");
      }, "assign"), e;
    }(), "var-init"),
    qu = cc11001100_hook("qu", tc.createLogger("CredentialsService"), "var-init"),
    zu = cc11001100_hook("zu", function () {
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        this.instance = cc11001100_hook("this.instance", e || t.instance(), "assign");
      }
      return e.prototype.removeToken = cc11001100_hook("e.prototype.removeToken", function () {
        if (this.instance.getCustomCredentialsProvider()) return Promise.resolve();
        var e = cc11001100_hook("e", this.getCredentialStoreKey(), "var-init"),
          t = cc11001100_hook("t", Ku.getInstance().getStorage(this.instance), "var-init");
        return t ? t.remove(e).catch(function (e) {
          return e instanceof rc ? Promise.reject(e) : Promise.reject(new rc(ic.REMOVE_TOKEN_FAILED, e, "CredentialsService"));
        }) : Promise.reject(new rc(ic.FAIL_TO_GET_STORAGE_SERVICE, null, "CredentialsService"));
      }, "assign"), e.prototype.getToken = cc11001100_hook("e.prototype.getToken", function (e) {
        return Bu(this, void 0, void 0, function () {
          var t,
            n,
            r,
            i,
            o,
            a = cc11001100_hook("a", this, "var-init");
          return Gu(this, function (s) {
            switch (s.label) {
              case 0:
                return this.instance.getCustomCredentialsProvider() ? (t = cc11001100_hook("t", new Wu(), "assign"), [4, this.instance.getCustomCredentialsProvider().getToken(!!e)]) : [3, 2];
              case 1:
                return (n = cc11001100_hook("n", s.sent(), "assign")) && n.tokenString && n.expiration ? isNaN(Number(n.expiration)) || Number(n.expiration) <= 0 ? (qu.error("the customCredentialsProvider getToken must return valid expiration."), [2, Promise.reject(new rc(ic.GET_TOKEN_FAILED, {
                  message: cc11001100_hook("message", "the customCredentialsProvider getToken must return valid expiration", "object-key-init")
                }, "CredentialsService"))]) : (t.tokenString = cc11001100_hook("t.tokenString", n.tokenString, "assign"), t.expiration = cc11001100_hook("t.expiration", n.expiration, "assign"), t.lastRefreshTime = cc11001100_hook("t.lastRefreshTime", new Date().getTime(), "assign"), [2, Promise.resolve(t)]) : (qu.error("the customCredentialsProvider getToken method must contain return value: tokenString, expiration."), [2, Promise.reject(new rc(ic.GET_TOKEN_FAILED, {
                  message: cc11001100_hook("message", "the customCredentialsProvider getToken method must contain return value: tokenString, expiration", "object-key-init")
                }, "CredentialsService"))]);
              case 2:
                return r = cc11001100_hook("r", this.getCredentialStoreKey(), "assign"), (i = cc11001100_hook("i", Ku.getInstance().getStorage(this.instance), "assign")) ? (o = cc11001100_hook("o", new Wu(), "assign"), [2, i.get(r).then(function (t) {
                  return Bu(a, void 0, void 0, function () {
                    var n, a;
                    return Gu(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return t ? o.constructFromJson(JSON.parse(t)) : o = cc11001100_hook("o", null, "assign"), o && o.isValid() ? e && o.allowRefresh() ? [4, this.requestToken()] : [3, 3] : [3, 4];
                        case 1:
                          return n = cc11001100_hook("n", s.sent(), "assign"), [4, i.set(r, JSON.stringify(n))];
                        case 2:
                          return s.sent(), [2, Promise.resolve(n)];
                        case 3:
                          return [2, Promise.resolve(o)];
                        case 4:
                          return [4, this.requestToken()];
                        case 5:
                          return a = cc11001100_hook("a", s.sent(), "assign"), [4, i.set(r, JSON.stringify(a))];
                        case 6:
                          return s.sent(), [2, Promise.resolve(a)];
                      }
                    });
                  });
                }).catch(function (e) {
                  return e instanceof rc ? Promise.reject(e) : Promise.reject(new rc(ic.GET_TOKEN_FAILED, e, "CredentialsService"));
                })]) : [2, Promise.reject(new rc(ic.FAIL_TO_GET_STORAGE_SERVICE, null, "CredentialsService"))];
            }
          });
        });
      }, "assign"), e.prototype.getCredentialStoreKey = cc11001100_hook("e.prototype.getCredentialStoreKey", function () {
        return this.instance.name() === n ? "agcClientToken:" + this.instance.config().client.client_id : "agcClientToken_" + this.instance.name() + ":" + this.instance.config().client.client_id;
      }, "assign"), e.prototype.requestToken = cc11001100_hook("e.prototype.requestToken", function () {
        return Bu(this, void 0, void 0, function () {
          var e, t;
          return Gu(this, function (n) {
            return (e = cc11001100_hook("e", this.instance.getService("AGCNetworkService"), "assign")) ? ((t = cc11001100_hook("t", new Yu(this.instance), "assign")).setUseJwt(1), [2, e.post(t.getUrl(), t.getBody(), t.getHeader()).then(function (e) {
              if (e.data.ret && 0 != e.data.ret.code) return Promise.reject(new rc({
                code: cc11001100_hook("code", e.data.ret.code, "object-key-init"),
                message: cc11001100_hook("message", e.data.ret.msg, "object-key-init")
              }, null, "CredentialsService"));
              var t = cc11001100_hook("t", new Wu(), "var-init");
              return t.tokenString = cc11001100_hook("t.tokenString", e.data.access_token, "assign"), t.expiration = cc11001100_hook("t.expiration", e.data.expires_in, "assign"), t.lastRefreshTime = cc11001100_hook("t.lastRefreshTime", new Date().getTime(), "assign"), Promise.resolve(t);
            })]) : [2, Promise.reject(new rc(ic.FAIL_TO_GET_NETWORK_SERVICE, null, "CredentialsService"))];
          });
        });
      }, "assign"), e;
    }(), "var-init");
  t.registerInternalService({
    name: cc11001100_hook("name", "CredentialsService", "object-key-init"),
    serviceFactory: function (e) {
      return new zu(e);
    }
  });
  var Ju,
    Xu = cc11001100_hook("Xu", function () {
      function e() {
        this.storageImpl = cc11001100_hook("this.storageImpl", void 0, "assign");
      }
      return e.prototype.getAaid = cc11001100_hook("e.prototype.getAaid", function (t) {
        /*! *****************************************************************************
          Copyright (c) Microsoft Corporation.
        
          Permission to use, copy, modify, and/or distribute this software for any
          purpose with or without fee is hereby granted.
        
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
          REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
          AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
          LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
          OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          PERFORMANCE OF THIS SOFTWARE.
          ***************************************************************************** */
        return function (e, t, n, r) {
          return new (n || (n = cc11001100_hook("n", Promise, "assign")))(function (i, o) {
            function a(e) {
              cc11001100_hook("e", e, "function-parameter");
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              cc11001100_hook("e", e, "function-parameter");
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              cc11001100_hook("e", e, "function-parameter");
              var t;
              e.done ? i(e.value) : (t = cc11001100_hook("t", e.value, "assign"), t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(a, s);
            }
            c((r = cc11001100_hook("r", r.apply(e, t || []), "assign")).next());
          });
        }(this, void 0, void 0, function () {
          var r, i, o, a, s;
          return function (e, t) {
            var n,
              r,
              i,
              o,
              a = cc11001100_hook("a", {
                label: cc11001100_hook("label", 0, "object-key-init"),
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: cc11001100_hook("trys", [], "object-key-init"),
                ops: cc11001100_hook("ops", [], "object-key-init")
              }, "var-init");
            return o = cc11001100_hook("o", {
              next: cc11001100_hook("next", s(0), "object-key-init"),
              throw: cc11001100_hook("throw", s(1), "object-key-init"),
              return: cc11001100_hook("return", s(2), "object-key-init")
            }, "assign"), "function" == typeof Symbol && (o[Symbol.iterator] = cc11001100_hook("o[Symbol.iterator]", function () {
              return this;
            }, "assign")), o;
            function s(o) {
              cc11001100_hook("o", o, "function-parameter");
              return function (s) {
                return function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a;) try {
                    if (n = cc11001100_hook("n", 1, "assign"), r && (i = cc11001100_hook("i", 2 & o[0] ? r.return : o[0] ? r.throw || ((i = cc11001100_hook("i", r.return, "assign")) && i.call(r), 0) : r.next, "assign")) && !(i = cc11001100_hook("i", i.call(r, o[1]), "assign")).done) return i;
                    switch (r = cc11001100_hook("r", 0, "assign"), i && (o = cc11001100_hook("o", [2 & o[0], i.value], "assign")), o[0]) {
                      case 0:
                      case 1:
                        i = cc11001100_hook("i", o, "assign");
                        break;
                      case 4:
                        return a.label++, {
                          value: cc11001100_hook("value", o[1], "object-key-init"),
                          done: cc11001100_hook("done", !1, "object-key-init")
                        };
                      case 5:
                        a.label++, r = cc11001100_hook("r", o[1], "assign"), o = cc11001100_hook("o", [0], "assign");
                        continue;
                      case 7:
                        o = cc11001100_hook("o", a.ops.pop(), "assign"), a.trys.pop();
                        continue;
                      default:
                        if (!((i = cc11001100_hook("i", (i = cc11001100_hook("i", a.trys, "assign")).length > 0 && i[i.length - 1], "assign")) || 6 !== o[0] && 2 !== o[0])) {
                          a = cc11001100_hook("a", 0, "assign");
                          continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                          a.label = cc11001100_hook("a.label", o[1], "assign");
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          a.label = cc11001100_hook("a.label", i[1], "assign"), i = cc11001100_hook("i", o, "assign");
                          break;
                        }
                        if (i && a.label < i[2]) {
                          a.label = cc11001100_hook("a.label", i[2], "assign"), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = cc11001100_hook("o", t.call(e, a), "assign");
                  } catch (e) {
                    o = cc11001100_hook("o", [6, e], "assign"), r = cc11001100_hook("r", 0, "assign");
                  } finally {
                    n = cc11001100_hook("n", i = cc11001100_hook("i", 0, "assign"), "assign");
                  }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: cc11001100_hook("value", o[0] ? o[1] : void 0, "object-key-init"),
                    done: cc11001100_hook("done", !0, "object-key-init")
                  };
                }([o, s]);
              };
            }
          }(this, function (c) {
            switch (c.label) {
              case 0:
                r = cc11001100_hook("r", tc.createLogger("ClientInfoService"), "assign"), c.label = cc11001100_hook("c.label", 1, "assign");
              case 1:
                return c.trys.push([1, 5,, 6]), i = cc11001100_hook("i", "agcAaid_" + t.name() + ":" + t.config().client.client_id, "assign"), t.name() === n && (i = cc11001100_hook("i", "agcAaid:" + t.config().client.client_id, "assign")), null == (o = cc11001100_hook("o", t.getService("AGCStorageService"), "assign")) ? (r.error("Get AGC storage Service failed."), [2, Promise.reject(new rc(ic.GET_AAID_ERROR, {
                  message: cc11001100_hook("message", "get AGC storage Service failed", "object-key-init")
                }, "util"))]) : (this.storageImpl || (this.storageImpl = cc11001100_hook("this.storageImpl", o.getStorageInstance(e.persistence), "assign")), [4, this.storageImpl.get(i).catch(function (e) {
                  return r.error("get aaid failed", e.message), Promise.reject(new rc(ic.GET_AAID_ERROR, {
                    message: cc11001100_hook("message", "get aaid from storage failed", "object-key-init")
                  }, "util"));
                })]);
              case 2:
                return null != (a = cc11001100_hook("a", c.sent(), "assign")) && null != a && "" != a ? [3, 4] : (a = cc11001100_hook("a", this.getRandomString(), "assign"), [4, this.storageImpl.set(i, a).catch(function (e) {
                  return r.error("get aaid failed", e.message), Promise.reject(new rc(ic.GET_AAID_ERROR, {
                    message: cc11001100_hook("message", "save aaid to storage failed", "object-key-init")
                  }, "util"));
                })]);
              case 3:
                c.sent(), c.label = cc11001100_hook("c.label", 4, "assign");
              case 4:
                return [2, a];
              case 5:
                return s = cc11001100_hook("s", c.sent(), "assign"), r.error("get aaid failed", s.message), [2, Promise.reject(new rc(ic.GET_AAID_ERROR, s, "util"))];
              case 6:
                return [2];
            }
          });
        });
      }, "assign"), e.prototype.getRandomString = cc11001100_hook("e.prototype.getRandomString", function () {
        var e = cc11001100_hook("e", "0123456789abcdef", "var-init"),
          t = cc11001100_hook("t", e.length, "var-init");
        return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g, function () {
          return e.charAt(Math.floor(Math.random() * t));
        });
      }, "assign"), e.persistence = cc11001100_hook("e.persistence", 0, "assign"), e.INSTANCE = cc11001100_hook("e.INSTANCE", new e(), "assign"), e;
    }(), "var-init"),
    Qu = cc11001100_hook("Qu", function () {
      function e() {}
      return e.getEnvironmentIns = cc11001100_hook("e.getEnvironmentIns", function () {
        return e.instance;
      }, "assign"), e.prototype.isBrowser = cc11001100_hook("e.prototype.isBrowser", function () {
        return "object" == typeof self && self.self === self;
      }, "assign"), e.prototype.isNodeJS = cc11001100_hook("e.prototype.isNodeJS", function () {
        try {
          return "[object process]" === Object.prototype.toString.call(global.process);
        } catch (e) {
          return !1;
        }
      }, "assign"), e.prototype.isReactNative = cc11001100_hook("e.prototype.isReactNative", function () {
        return "object" == typeof navigator && "ReactNative" === navigator.product;
      }, "assign"), e.prototype.isQuickApp = cc11001100_hook("e.prototype.isQuickApp", function () {
        try {
          return global && "fastapp" in global;
        } catch (e) {
          return !1;
        }
      }, "assign"), e.instance = cc11001100_hook("e.instance", new e(), "assign"), e;
    }(), "var-init"),
    Zu = cc11001100_hook("Zu", function () {
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        this.instance = cc11001100_hook("this.instance", e || t.instance(), "assign");
      }
      return e.prototype.getAaid = cc11001100_hook("e.prototype.getAaid", function () {
        return Xu.INSTANCE.getAaid(this.instance);
      }, "assign"), e.prototype.getEnvironmentUtil = cc11001100_hook("e.prototype.getEnvironmentUtil", function () {
        return Qu.getEnvironmentIns();
      }, "assign"), e;
    }(), "var-init");
  function el(e) {
    cc11001100_hook("e", e, "function-parameter");
    return null != e;
  }
  !function (e) {
    e.ObserverImpl = cc11001100_hook("e.ObserverImpl", function (e, t, n) {
      if ("function" == typeof e || el(t) || el(n)) this.next = cc11001100_hook("this.next", e, "assign"), this.error = cc11001100_hook("this.error", t || null, "assign"), this.complete = cc11001100_hook("this.complete", n || null, "assign");else {
        var r = cc11001100_hook("r", e, "var-init");
        this.next = cc11001100_hook("this.next", r.next || null, "assign"), this.error = cc11001100_hook("this.error", r.error || null, "assign"), this.complete = cc11001100_hook("this.complete", r.complete || null, "assign");
      }
    }, "assign");
  }(Ju || (Ju = cc11001100_hook("Ju", {}, "assign"))), t.registerInternalService({
    name: cc11001100_hook("name", "ClientInfoService", "object-key-init"),
    serviceFactory: function (e) {
      return new Zu(e);
    }
  });
  var tl = cc11001100_hook("tl", new (function () {
    function e() {}
    return e.prototype.init = cc11001100_hook("e.prototype.init", function () {
      return fn(this, void 0, void 0, function () {
        return pn(this, function (e) {
          return [2];
        });
      });
    }, "assign"), e.prototype.getConfig = cc11001100_hook("e.prototype.getConfig", function () {
      return t.instance().config();
    }, "assign"), e.prototype.getToken = cc11001100_hook("e.prototype.getToken", function (e) {
      return fn(this, void 0, void 0, function () {
        var n;
        return pn(this, function (r) {
          switch (r.label) {
            case 0:
              if (!(n = cc11001100_hook("n", t.instance().getService("CredentialsService"), "assign"))) return [3, 5];
              r.label = cc11001100_hook("r.label", 1, "assign");
            case 1:
              return r.trys.push([1, 3,, 4]), [4, n.getToken()];
            case 2:
              return [2, r.sent().tokenString];
            case 3:
              return r.sent(), ls.hiLog.error(e, Na.code, Na.message), [2, ""];
            case 4:
              return [3, 6];
            case 5:
              return ls.hiLog.warn(e, Ia.code, Ia.message), [2, ""];
            case 6:
              return [2];
          }
        });
      });
    }, "assign"), e.prototype.getAaid = cc11001100_hook("e.prototype.getAaid", function (e) {
      return fn(this, void 0, void 0, function () {
        var n;
        return pn(this, function (r) {
          try {
            return null != (n = cc11001100_hook("n", t.instance().getService("ClientInfoService"), "assign")) ? [2, n.getAaid()] : (ls.hiLog.warn(e, Ia.code, Ia.message), [2, ""]);
          } catch (t) {
            return ls.hiLog.error(e, _a.code, _a.message), [2, ""];
          }
          return [2];
        });
      });
    }, "assign"), e.prototype.deleteAaid = cc11001100_hook("e.prototype.deleteAaid", function () {
      return fn(this, void 0, void 0, function () {
        return pn(this, function (e) {
          return [2];
        });
      });
    }, "assign"), e.prototype.getPushToken = cc11001100_hook("e.prototype.getPushToken", function () {
      return fn(this, void 0, void 0, function () {
        return pn(this, function (e) {
          return [2, ""];
        });
      });
    }, "assign"), e.prototype.getOaid = cc11001100_hook("e.prototype.getOaid", function () {
      return fn(this, void 0, void 0, function () {
        return pn(this, function (e) {
          return [2, ""];
        });
      });
    }, "assign"), e.prototype.getOaidFlag = cc11001100_hook("e.prototype.getOaidFlag", function () {
      return fn(this, void 0, void 0, function () {
        return pn(this, function (e) {
          return [2, !0];
        });
      });
    }, "assign"), e.prototype.getABTestProvider = cc11001100_hook("e.prototype.getABTestProvider", function () {
      var e = cc11001100_hook("e", t.instance().getService("ABTestService"), "var-init");
      if (null !== e) return e.getABtestInstance("REMOTE_CONFIG") ? e : null;
    }, "assign"), e;
  }())(), "var-init");
  ls.setHiLog(ws), ls.setHiSendData(Os), ls.setSendLogTask(Qs), ls.setSendTask(Ws), ls.setHiAutoReport(Ps), ls.setHiStorage(Ds), ls.setHiDBStorage(Ms), ls.setHiClientProperty($s), ls.setHiClient(_s), ls.setHiMigration(Ks), ls.setHiAgcUtil(tl);
  var nl = cc11001100_hook("nl", function () {
      function e() {}
      return e.prototype.onEventCallback = cc11001100_hook("e.prototype.onEventCallback", function (e, t) {
        var n = cc11001100_hook("n", {
          eventtime: cc11001100_hook("eventtime", new Date().getTime(), "object-key-init"),
          isCallBack: cc11001100_hook("isCallBack", !0, "object-key-init")
        }, "var-init");
        fs.onEventCallback(e, t, n);
      }, "assign"), e;
    }(), "var-init"),
    rl = cc11001100_hook("rl", new r(function () {
      return new ys();
    }), "var-init"),
    il = cc11001100_hook("il", new r(function () {
      return new nl();
    }), "var-init"),
    ol = cc11001100_hook("ol", {
      InitSettings: cc11001100_hook("InitSettings", rs, "object-key-init"),
      RoutePolicy: cc11001100_hook("RoutePolicy", Qa, "object-key-init"),
      LogLevel: cc11001100_hook("LogLevel", Xa, "object-key-init"),
      UrlClusteringOptions: cc11001100_hook("UrlClusteringOptions", Es, "object-key-init"),
      UserProfileType: cc11001100_hook("UserProfileType", Za, "object-key-init"),
      EventName: cc11001100_hook("EventName", Br, "object-key-init"),
      ParamName: {
        STORENAME: cc11001100_hook("STORENAME", "$StoreName", "object-key-init"),
        BRAND: cc11001100_hook("BRAND", "$Brand", "object-key-init"),
        CATEGORY: cc11001100_hook("CATEGORY", "$Category", "object-key-init"),
        PRODUCTID: cc11001100_hook("PRODUCTID", "$ProductId", "object-key-init"),
        PRODUCTNAME: cc11001100_hook("PRODUCTNAME", "$ProductName", "object-key-init"),
        PRODUCTFEATURE: cc11001100_hook("PRODUCTFEATURE", "$ProductFeature", "object-key-init"),
        PRICE: cc11001100_hook("PRICE", "$Price", "object-key-init"),
        QUANTITY: cc11001100_hook("QUANTITY", "$Quantity", "object-key-init"),
        REVENUE: cc11001100_hook("REVENUE", "$Revenue", "object-key-init"),
        CURRNAME: cc11001100_hook("CURRNAME", "$CurrName", "object-key-init"),
        PLACEID: cc11001100_hook("PLACEID", "$PlaceId", "object-key-init"),
        DESTINATION: cc11001100_hook("DESTINATION", "$Destination", "object-key-init"),
        ENDDATE: cc11001100_hook("ENDDATE", "$EndDate", "object-key-init"),
        BOOKINGDAYS: cc11001100_hook("BOOKINGDAYS", "$BookingDays", "object-key-init"),
        PASSENGERSNUMBER: cc11001100_hook("PASSENGERSNUMBER", "$PassengersNumber", "object-key-init"),
        BOOKINGROOMS: cc11001100_hook("BOOKINGROOMS", "$BookingRooms", "object-key-init"),
        ORIGINATINGPLACE: cc11001100_hook("ORIGINATINGPLACE", "$OriginatingPlace", "object-key-init"),
        BEGINDATE: cc11001100_hook("BEGINDATE", "$BeginDate", "object-key-init"),
        TRANSACTIONID: cc11001100_hook("TRANSACTIONID", "$TransactionId", "object-key-init"),
        CLASS: cc11001100_hook("CLASS", "$Class", "object-key-init"),
        CLICKID: cc11001100_hook("CLICKID", "$ClickId", "object-key-init"),
        PROMOTIONNAME: cc11001100_hook("PROMOTIONNAME", "$PromotionName", "object-key-init"),
        CONTENT: cc11001100_hook("CONTENT", "$Content", "object-key-init"),
        EXTENDPARAM: cc11001100_hook("EXTENDPARAM", "$ExtendParam", "object-key-init"),
        MATERIALNAME: cc11001100_hook("MATERIALNAME", "$MaterialName", "object-key-init"),
        MATERIALSLOT: cc11001100_hook("MATERIALSLOT", "$MaterialSlot", "object-key-init"),
        MEDIUM: cc11001100_hook("MEDIUM", "$Medium", "object-key-init"),
        SOURCE: cc11001100_hook("SOURCE", "$Source", "object-key-init"),
        KEYWORDS: cc11001100_hook("KEYWORDS", "$Keywords", "object-key-init"),
        OPTION: cc11001100_hook("OPTION", "$Option", "object-key-init"),
        STEP: cc11001100_hook("STEP", "$Step", "object-key-init"),
        VIRTUALCURRNAME: cc11001100_hook("VIRTUALCURRNAME", "$VirtualCurrName", "object-key-init"),
        VOUCHER: cc11001100_hook("VOUCHER", "$Voucher", "object-key-init"),
        PLACE: cc11001100_hook("PLACE", "$Place", "object-key-init"),
        SHIPPING: cc11001100_hook("SHIPPING", "$Shipping", "object-key-init"),
        TAXFEE: cc11001100_hook("TAXFEE", "$TaxFee", "object-key-init"),
        USERGROUPID: cc11001100_hook("USERGROUPID", "$UserGroupId", "object-key-init"),
        LEVELNAME: cc11001100_hook("LEVELNAME", "$LevelName", "object-key-init"),
        RESULT: cc11001100_hook("RESULT", "$Result", "object-key-init"),
        ROLENAME: cc11001100_hook("ROLENAME", "$RoleName", "object-key-init"),
        LEVELID: cc11001100_hook("LEVELID", "$LevelId", "object-key-init"),
        CHANNEL: cc11001100_hook("CHANNEL", "$Channel", "object-key-init"),
        SCORE: cc11001100_hook("SCORE", "$Score", "object-key-init"),
        SEARCHKEYWORDS: cc11001100_hook("SEARCHKEYWORDS", "$SearchKeywords", "object-key-init"),
        CONTENTTYPE: cc11001100_hook("CONTENTTYPE", "$ContentType", "object-key-init"),
        ACHIEVEMENTID: cc11001100_hook("ACHIEVEMENTID", "$AchievementId", "object-key-init"),
        FLIGHTNO: cc11001100_hook("FLIGHTNO", "$FlightNo", "object-key-init"),
        POSITIONID: cc11001100_hook("POSITIONID", "$PositionId", "object-key-init"),
        PRODUCTLIST: cc11001100_hook("PRODUCTLIST", "$ProductList", "object-key-init"),
        ACOUNTTYPE: cc11001100_hook("ACOUNTTYPE", "$AcountType", "object-key-init"),
        EVTRESULT: cc11001100_hook("EVTRESULT", "$EvtResult", "object-key-init"),
        PREVLEVEL: cc11001100_hook("PREVLEVEL", "$PrevLevel", "object-key-init"),
        CURRVLEVEL: cc11001100_hook("CURRVLEVEL", "$CurrvLevel", "object-key-init"),
        VOUCHERS: cc11001100_hook("VOUCHERS", "$Vouchers", "object-key-init"),
        MATERIALSLOTTYPE: cc11001100_hook("MATERIALSLOTTYPE", "$MaterialSlotType", "object-key-init"),
        LISTID: cc11001100_hook("LISTID", "$ListId", "object-key-init"),
        FILTERS: cc11001100_hook("FILTERS", "$Filters", "object-key-init"),
        SORTS: cc11001100_hook("SORTS", "$Sorts", "object-key-init"),
        ORDERID: cc11001100_hook("ORDERID", "$OrderId", "object-key-init"),
        PAYTYPE: cc11001100_hook("PAYTYPE", "$PayType", "object-key-init"),
        REASON: cc11001100_hook("REASON", "$Reason", "object-key-init"),
        EXPIREDATE: cc11001100_hook("EXPIREDATE", "$ExpireDate", "object-key-init"),
        VOUCHERTYPE: cc11001100_hook("VOUCHERTYPE", "$VoucherType", "object-key-init"),
        SERVICETYPE: cc11001100_hook("SERVICETYPE", "$ServiceType", "object-key-init"),
        DETAILS: cc11001100_hook("DETAILS", "$Details", "object-key-init"),
        COMMENTTYPE: cc11001100_hook("COMMENTTYPE", "$CommentType", "object-key-init"),
        REGISTMETHOD: cc11001100_hook("REGISTMETHOD", "$RegistMethod", "object-key-init"),
        FEATURE: cc11001100_hook("FEATURE", "$Feature", "object-key-init"),
        ROOMS: cc11001100_hook("ROOMS", "$Rooms", "object-key-init"),
        SALEPRICE: cc11001100_hook("SALEPRICE", "$SalePrice", "object-key-init"),
        RENTFEE: cc11001100_hook("RENTFEE", "$RentFee", "object-key-init"),
        RENTTYPE: cc11001100_hook("RENTTYPE", "$RentType", "object-key-init"),
        ACTIVITYNAME: cc11001100_hook("ACTIVITYNAME", "$ActivityName", "object-key-init"),
        ACTIVITYTYPE: cc11001100_hook("ACTIVITYTYPE", "$ActivityType", "object-key-init"),
        AMOUNT: cc11001100_hook("AMOUNT", "$Amount", "object-key-init"),
        BALANCE: cc11001100_hook("BALANCE", "$Balance", "object-key-init"),
        BATTLENAME: cc11001100_hook("BATTLENAME", "$BattleName", "object-key-init"),
        BATTLETYPE: cc11001100_hook("BATTLETYPE", "$BattleType", "object-key-init"),
        CARDLIST: cc11001100_hook("CARDLIST", "$CardList", "object-key-init"),
        CLASSLIMIT: cc11001100_hook("CLASSLIMIT", "$ClassLimit", "object-key-init"),
        COMBAT: cc11001100_hook("COMBAT", "$Combat", "object-key-init"),
        CUTSCENENAME: cc11001100_hook("CUTSCENENAME", "$CutsceneName", "object-key-init"),
        DAMAGE: cc11001100_hook("DAMAGE", "$Damage", "object-key-init"),
        DIFFICULTY: cc11001100_hook("DIFFICULTY", "$Difficulty", "object-key-init"),
        DISCOUNT: cc11001100_hook("DISCOUNT", "$Discount", "object-key-init"),
        DUNGEONNAME: cc11001100_hook("DUNGEONNAME", "$DungeonName", "object-key-init"),
        DURATION: cc11001100_hook("DURATION", "$Duration", "object-key-init"),
        ENHANCETYPE: cc11001100_hook("ENHANCETYPE", "$EnhanceType", "object-key-init"),
        EQUIPMENTID: cc11001100_hook("EQUIPMENTID", "$EquipmentId", "object-key-init"),
        EQUIPMENTLEVEL: cc11001100_hook("EQUIPMENTLEVEL", "$EquipmentLevel", "object-key-init"),
        EQUIPMENTNAME: cc11001100_hook("EQUIPMENTNAME", "$EquipmentName", "object-key-init"),
        FIRSTCREATE: cc11001100_hook("FIRSTCREATE", "$FirstCreate", "object-key-init"),
        FIRSTPAY: cc11001100_hook("FIRSTPAY", "$FirstPay", "object-key-init"),
        FIRSTSIGNIN: cc11001100_hook("FIRSTSIGNIN", "$FirstSignIn", "object-key-init"),
        FRIENDNUMBER: cc11001100_hook("FRIENDNUMBER", "$FriendNumber", "object-key-init"),
        GIFTNAME: cc11001100_hook("GIFTNAME", "$GiftName", "object-key-init"),
        GIFTTYPE: cc11001100_hook("GIFTTYPE", "$GiftType", "object-key-init"),
        INVITER: cc11001100_hook("INVITER", "$Inviter", "object-key-init"),
        ISFREE: cc11001100_hook("ISFREE", "$IsFree", "object-key-init"),
        ISTOPLEVEL: cc11001100_hook("ISTOPLEVEL", "$IsTopLevel", "object-key-init"),
        ITEMLIST: cc11001100_hook("ITEMLIST", "$ItemList", "object-key-init"),
        LEFTPULLSFORGUARANTEE: cc11001100_hook("LEFTPULLSFORGUARANTEE", "$LeftPullsForGuarantee", "object-key-init"),
        LEVELBEFORE: cc11001100_hook("LEVELBEFORE", "$LevelBefore", "object-key-init"),
        LEVELLIMIT: cc11001100_hook("LEVELLIMIT", "$LevelLimit", "object-key-init"),
        MEMBERS: cc11001100_hook("MEMBERS", "$Members", "object-key-init"),
        MESSAGETITLE: cc11001100_hook("MESSAGETITLE", "$MessageTitle", "object-key-init"),
        MESSAGETYPE: cc11001100_hook("MESSAGETYPE", "$MessageType", "object-key-init"),
        MOUNTDEFAULTNAME: cc11001100_hook("MOUNTDEFAULTNAME", "$MountDefaultName", "object-key-init"),
        MOUNTID: cc11001100_hook("MOUNTID", "$MountId", "object-key-init"),
        MOUNTLEVEL: cc11001100_hook("MOUNTLEVEL", "$MountLevel", "object-key-init"),
        MVP: cc11001100_hook("MVP", "$MVP", "object-key-init"),
        NEWCLASS: cc11001100_hook("NEWCLASS", "$NewClass", "object-key-init"),
        NEWVALUE: cc11001100_hook("NEWVALUE", "$NewValue", "object-key-init"),
        NUMBEROFCARDS: cc11001100_hook("NUMBEROFCARDS", "$NumberOfCards", "object-key-init"),
        NUMBEROFDRAWING: cc11001100_hook("NUMBEROFDRAWING", "$NumberOfDrawing", "object-key-init"),
        OLDCLASS: cc11001100_hook("OLDCLASS", "$OldClass", "object-key-init"),
        OLDVALUE: cc11001100_hook("OLDVALUE", "$OldValue", "object-key-init"),
        OPERATION: cc11001100_hook("OPERATION", "$Operation", "object-key-init"),
        PACKAGETYPE: cc11001100_hook("PACKAGETYPE", "$PackageType", "object-key-init"),
        PARTICIPANTS: cc11001100_hook("PARTICIPANTS", "$Participants", "object-key-init"),
        PETDEFAULTNAME: cc11001100_hook("PETDEFAULTNAME", "$PetDefaultName", "object-key-init"),
        PETID: cc11001100_hook("PETID", "$PetId", "object-key-init"),
        PETLEVEL: cc11001100_hook("PETLEVEL", "$PetLevel", "object-key-init"),
        QUALITY: cc11001100_hook("QUALITY", "$Quality", "object-key-init"),
        RANKING: cc11001100_hook("RANKING", "$Ranking", "object-key-init"),
        REWARD: cc11001100_hook("REWARD", "$Reward", "object-key-init"),
        ROLECLASS: cc11001100_hook("ROLECLASS", "$RoleClass", "object-key-init"),
        ROLECOMBAT: cc11001100_hook("ROLECOMBAT", "$RoleCombat", "object-key-init"),
        ROLEGENDER: cc11001100_hook("ROLEGENDER", "$RoleGender", "object-key-init"),
        SERVER: cc11001100_hook("SERVER", "$Server", "object-key-init"),
        SKILLLEVEL: cc11001100_hook("SKILLLEVEL", "$SkillLevel", "object-key-init"),
        SKILLLEVELBEFORE: cc11001100_hook("SKILLLEVELBEFORE", "$SkillLevelBefore", "object-key-init"),
        SKILLNAME: cc11001100_hook("SKILLNAME", "$SkillName", "object-key-init"),
        TASKNAME: cc11001100_hook("TASKNAME", "$TaskName", "object-key-init"),
        TASKTYPE: cc11001100_hook("TASKTYPE", "$TaskType", "object-key-init"),
        TOTALAFTERCHANGE: cc11001100_hook("TOTALAFTERCHANGE", "$TotalAfterChange", "object-key-init"),
        TYPE: cc11001100_hook("TYPE", "$Type", "object-key-init"),
        USERGROUPLEVEL: cc11001100_hook("USERGROUPLEVEL", "$UserGroupLevel", "object-key-init"),
        USERGROUPNAME: cc11001100_hook("USERGROUPNAME", "$UserGroupName", "object-key-init"),
        VIDEONAME: cc11001100_hook("VIDEONAME", "$VideoName", "object-key-init"),
        VIDEOTYPE: cc11001100_hook("VIDEOTYPE", "$VideoType", "object-key-init"),
        VIPLEVEL: cc11001100_hook("VIPLEVEL", "$VIPLevel", "object-key-init"),
        WINREASON: cc11001100_hook("WINREASON", "$WinReason", "object-key-init"),
        VIPTYPE: cc11001100_hook("VIPTYPE", "$VIPType", "object-key-init"),
        VIPSTATUS: cc11001100_hook("VIPSTATUS", "$VIPStatus", "object-key-init"),
        VIPEXPIREDATE: cc11001100_hook("VIPEXPIREDATE", "$VIPExpireDate", "object-key-init"),
        ENTER: cc11001100_hook("ENTER", "$Enter", "object-key-init"),
        STARTDATE: cc11001100_hook("STARTDATE", "$StartDate", "object-key-init"),
        EFFECTIVETIME: cc11001100_hook("EFFECTIVETIME", "$EffectiveTime", "object-key-init"),
        NAME: cc11001100_hook("NAME", "$Name", "object-key-init"),
        MODE: cc11001100_hook("MODE", "$Mode", "object-key-init"),
        SUBJECT: cc11001100_hook("SUBJECT", "$Subject", "object-key-init"),
        ACCURACY: cc11001100_hook("ACCURACY", "$Accuracy", "object-key-init"),
        CONTENTLENGTH: cc11001100_hook("CONTENTLENGTH", "$ContentLength", "object-key-init"),
        REMARK: cc11001100_hook("REMARK", "$Remark", "object-key-init"),
        DAYS: cc11001100_hook("DAYS", "$Days", "object-key-init"),
        POSTID: cc11001100_hook("POSTID", "$PostId", "object-key-init"),
        ENTRY: cc11001100_hook("ENTRY", "$Entry", "object-key-init"),
        INFORMATIONTYPE: cc11001100_hook("INFORMATIONTYPE", "$InformationType", "object-key-init"),
        INFORMATION: cc11001100_hook("INFORMATION", "$Information", "object-key-init"),
        TASKID: cc11001100_hook("TASKID", "$TaskId", "object-key-init"),
        LEVEL: cc11001100_hook("LEVEL", "$Level", "object-key-init"),
        CONTENTNAME: cc11001100_hook("CONTENTNAME", "$ContentName", "object-key-init"),
        PAGENAME: cc11001100_hook("PAGENAME", "$PageName", "object-key-init"),
        PROPS: cc11001100_hook("PROPS", "$Props", "object-key-init"),
        PURCHASEENTRY: cc11001100_hook("PURCHASEENTRY", "$PurchaseEntry", "object-key-init"),
        ARRIVALDATE: cc11001100_hook("ARRIVALDATE", "$ArrivalDate", "object-key-init"),
        BINDDURATION: cc11001100_hook("BINDDURATION", "$BindDuration", "object-key-init"),
        BUYERTYPE: cc11001100_hook("BUYERTYPE", "$BuyerType", "object-key-init"),
        CONFIGURATION: cc11001100_hook("CONFIGURATION", "$Configuration", "object-key-init"),
        DEALERNAME: cc11001100_hook("DEALERNAME", "$DealerName", "object-key-init"),
        DEVICETYPE: cc11001100_hook("DEVICETYPE", "$DeviceType", "object-key-init"),
        DEVICENAME: cc11001100_hook("DEVICENAME", "$DeviceName", "object-key-init"),
        ENERGY: cc11001100_hook("ENERGY", "$Energy", "object-key-init"),
        ISLOAN: cc11001100_hook("ISLOAN", "$IsLoan", "object-key-init"),
        LOANCHANNEL: cc11001100_hook("LOANCHANNEL", "$LoanChannel", "object-key-init"),
        LOANPRODUCTNAME: cc11001100_hook("LOANPRODUCTNAME", "$LoanProductName", "object-key-init"),
        MODEL: cc11001100_hook("MODEL", "$Model", "object-key-init"),
        OCCURREDDATE: cc11001100_hook("OCCURREDDATE", "$OccurredDate", "object-key-init"),
        REPAYMENTMETHOD: cc11001100_hook("REPAYMENTMETHOD", "$RepaymentMethod", "object-key-init"),
        SEAT: cc11001100_hook("SEAT", "$Seat", "object-key-init"),
        SERIES: cc11001100_hook("SERIES", "$Series", "object-key-init"),
        ACTION: cc11001100_hook("ACTION", "$Action", "object-key-init"),
        PAGE: cc11001100_hook("PAGE", "$Page", "object-key-init"),
        INDEX: cc11001100_hook("INDEX", "$Index", "object-key-init"),
        MODULE: cc11001100_hook("MODULE", "$Module", "object-key-init"),
        SOURCEPAGENAME: cc11001100_hook("SOURCEPAGENAME", "$SourcePageName", "object-key-init"),
        CITY: cc11001100_hook("CITY", "$City", "object-key-init"),
        FROMCITY: cc11001100_hook("FROMCITY", "$FromCity", "object-key-init"),
        TOCITY: cc11001100_hook("TOCITY", "$ToCity", "object-key-init"),
        DEPARTUREDATE: cc11001100_hook("DEPARTUREDATE", "$DepartureDate", "object-key-init"),
        RETURNDATE: cc11001100_hook("RETURNDATE", "$ReturnDate", "object-key-init"),
        TRIPTYPE: cc11001100_hook("TRIPTYPE", "$TripType", "object-key-init"),
        SEARCHHOTEL: cc11001100_hook("SEARCHHOTEL", "$SearchHotel", "object-key-init"),
        SPECIALTICKET: cc11001100_hook("SPECIALTICKET", "$SpecialTicket", "object-key-init"),
        HASBABY: cc11001100_hook("HASBABY", "$HasBaby", "object-key-init"),
        HASCHILDREN: cc11001100_hook("HASCHILDREN", "$HasChildren", "object-key-init"),
        COUNTRY: cc11001100_hook("COUNTRY", "$Country", "object-key-init"),
        STAR: cc11001100_hook("STAR", "$Star", "object-key-init"),
        CHECKINDATE: cc11001100_hook("CHECKINDATE", "$CheckinDate", "object-key-init"),
        CHECKOUTDATE: cc11001100_hook("CHECKOUTDATE", "$CheckoutDate", "object-key-init"),
        ALDULTCOUNT: cc11001100_hook("ALDULTCOUNT", "$AldultCount", "object-key-init"),
        BABYCOUNT: cc11001100_hook("BABYCOUNT", "$BabyCount", "object-key-init"),
        CHILDRENCOUNT: cc11001100_hook("CHILDRENCOUNT", "$ChildrenCount", "object-key-init"),
        FROM: cc11001100_hook("FROM", "$From", "object-key-init"),
        CARMODE: cc11001100_hook("CARMODE", "$CarMode", "object-key-init"),
        CARTIME: cc11001100_hook("CARTIME", "$CarTime", "object-key-init"),
        FLIGHTID: cc11001100_hook("FLIGHTID", "$FlightID", "object-key-init"),
        SEARCHRESULT: cc11001100_hook("SEARCHRESULT", "$SearchResult", "object-key-init"),
        PRODUCT: cc11001100_hook("PRODUCT", "$Product", "object-key-init"),
        DEPARTURETIME: cc11001100_hook("DEPARTURETIME", "$DepartureTime", "object-key-init"),
        ARRIVETIME: cc11001100_hook("ARRIVETIME", "$ArriveTime", "object-key-init"),
        DEPARTUREAIRPORT: cc11001100_hook("DEPARTUREAIRPORT", "$DepartureAirport", "object-key-init"),
        ARRIVEEAIRPORT: cc11001100_hook("ARRIVEEAIRPORT", "$ArriveeAirport", "object-key-init"),
        AIRLINE: cc11001100_hook("AIRLINE", "$Airline", "object-key-init"),
        FLIGHTTYPE: cc11001100_hook("FLIGHTTYPE", "$FlightType", "object-key-init"),
        DIRECTFLIGHT: cc11001100_hook("DIRECTFLIGHT", "$DirectFlight", "object-key-init"),
        TRAINTYPE: cc11001100_hook("TRAINTYPE", "$TrainType", "object-key-init"),
        FROMSTATION: cc11001100_hook("FROMSTATION", "$FromStation", "object-key-init"),
        BEDTYPE: cc11001100_hook("BEDTYPE", "$BedType", "object-key-init"),
        BREAKFAST: cc11001100_hook("BREAKFAST", "$Breakfast", "object-key-init"),
        ARRIVEDATE: cc11001100_hook("ARRIVEDATE", "$ArriveDate", "object-key-init"),
        TRAINID: cc11001100_hook("TRAINID", "$TrainID", "object-key-init"),
        HOTELID: cc11001100_hook("HOTELID", "$HotelID", "object-key-init"),
        HOTELNAME: cc11001100_hook("HOTELNAME", "$HotelName", "object-key-init"),
        TRIPTAG: cc11001100_hook("TRIPTAG", "$TripTag", "object-key-init"),
        HOTELTYPE: cc11001100_hook("HOTELTYPE", "$HotelType", "object-key-init"),
        CABIN: cc11001100_hook("CABIN", "$Cabin", "object-key-init"),
        ROOMTYPE: cc11001100_hook("ROOMTYPE", "$RoomType", "object-key-init"),
        CARTYPE: cc11001100_hook("CARTYPE", "$CarType", "object-key-init"),
        SUPPLIER: cc11001100_hook("SUPPLIER", "$Supplier", "object-key-init"),
        STUDENTCOUNT: cc11001100_hook("STUDENTCOUNT", "$StudentCount", "object-key-init"),
        ROOMCOUNT: cc11001100_hook("ROOMCOUNT", "$RoomCount", "object-key-init"),
        PERSONCOUNT: cc11001100_hook("PERSONCOUNT", "$PersonCount", "object-key-init"),
        VOUCHERID: cc11001100_hook("VOUCHERID", "$VoucherID", "object-key-init"),
        VOUCHERNAME: cc11001100_hook("VOUCHERNAME", "$VoucherName", "object-key-init"),
        VOUCHERPRICE: cc11001100_hook("VOUCHERPRICE", "$VoucherPrice", "object-key-init"),
        USERTYPE: cc11001100_hook("USERTYPE", "$UserType", "object-key-init"),
        TARGET: cc11001100_hook("TARGET", "$Target", "object-key-init"),
        ISCOMPELETED: cc11001100_hook("ISCOMPELETED", "$IsCompeleted", "object-key-init"),
        USERLEVEL: cc11001100_hook("USERLEVEL", "$UserLevel", "object-key-init"),
        TIME: cc11001100_hook("TIME", "$Time", "object-key-init"),
        DISTANCE: cc11001100_hook("DISTANCE", "$Distance", "object-key-init"),
        CALORIECONSUMED: cc11001100_hook("CALORIECONSUMED", "$CalorieConsumed", "object-key-init"),
        PROGRESS: cc11001100_hook("PROGRESS", "$Progress", "object-key-init"),
        SOURCEPAGE: cc11001100_hook("SOURCEPAGE", "$SourcePage", "object-key-init"),
        MULTIPLEACCOUNTS: cc11001100_hook("MULTIPLEACCOUNTS", "$MultipleAccounts", "object-key-init"),
        ACCOUNTTYPE: cc11001100_hook("ACCOUNTTYPE", "$AccountType", "object-key-init"),
        FAILUREREASON: cc11001100_hook("FAILUREREASON", "$FailureReason", "object-key-init"),
        AUTHORITY: cc11001100_hook("AUTHORITY", "$Authority", "object-key-init"),
        CARDTYPE: cc11001100_hook("CARDTYPE", "$CardType", "object-key-init"),
        ISSUEBANK: cc11001100_hook("ISSUEBANK", "$IssueBank", "object-key-init"),
        TRANSFORMAMOUNT: cc11001100_hook("TRANSFORMAMOUNT", "$TransformAmount", "object-key-init"),
        BANKNAME: cc11001100_hook("BANKNAME", "$BankName", "object-key-init"),
        ANK_NAME: cc11001100_hook("ANK_NAME", "bank_name", "object-key-init"),
        SOURCEMODULE: cc11001100_hook("SOURCEMODULE", "$SourceModule", "object-key-init"),
        STOCKCODE: cc11001100_hook("STOCKCODE", "$Stockcode", "object-key-init"),
        STOCKNAME: cc11001100_hook("STOCKNAME", "$Stockname", "object-key-init"),
        MARKETCODE: cc11001100_hook("MARKETCODE", "$MarketCode", "object-key-init"),
        MARKETNAME: cc11001100_hook("MARKETNAME", "$MarketName", "object-key-init"),
        VIEWTYPE: cc11001100_hook("VIEWTYPE", "$ViewType", "object-key-init"),
        TRENDCYCLE: cc11001100_hook("TRENDCYCLE", "$TrendCycle", "object-key-init"),
        TRANSACTIONTYPE: cc11001100_hook("TRANSACTIONTYPE", "$TransactionType", "object-key-init"),
        CURRENCY: cc11001100_hook("CURRENCY", "$Currency", "object-key-init"),
        MONEY: cc11001100_hook("MONEY", "$Money", "object-key-init"),
        FINANCEID: cc11001100_hook("FINANCEID", "$FinanceId", "object-key-init"),
        FINANCENAME: cc11001100_hook("FINANCENAME", "$FinanceName", "object-key-init"),
        FINANCETYPE: cc11001100_hook("FINANCETYPE", "$FinanceType", "object-key-init"),
        FINANCERATE: cc11001100_hook("FINANCERATE", "$FinanceRate", "object-key-init"),
        FINANCETIMELIMIT: cc11001100_hook("FINANCETIMELIMIT", "$FinanceTimeLimit", "object-key-init"),
        FINANCEAMOUNTMIN: cc11001100_hook("FINANCEAMOUNTMIN", "$FinanceAmountMin", "object-key-init"),
        FINANCERISKLEV: cc11001100_hook("FINANCERISKLEV", "$FinanceRiskLev", "object-key-init"),
        PURCHASEAMOUNT: cc11001100_hook("PURCHASEAMOUNT", "$PurchaseAmount", "object-key-init"),
        HANDLINGFEES: cc11001100_hook("HANDLINGFEES", "$HandlingFees", "object-key-init"),
        REDEMPTIONAMOUNT: cc11001100_hook("REDEMPTIONAMOUNT", "$RedemptionAmount", "object-key-init"),
        RETURNAMOUNT: cc11001100_hook("RETURNAMOUNT", "$ReturnAmount", "object-key-init"),
        FUNDCODE: cc11001100_hook("FUNDCODE", "$FundCode", "object-key-init"),
        FUNDTYPE: cc11001100_hook("FUNDTYPE", "$FundType", "object-key-init"),
        FUNDNAME: cc11001100_hook("FUNDNAME", "$FundName", "object-key-init"),
        FUNDRISKLEV: cc11001100_hook("FUNDRISKLEV", "$FundRiskLev", "object-key-init"),
        CHARGERATE: cc11001100_hook("CHARGERATE", "$ChargeRate", "object-key-init"),
        PAYMENTMETHOD: cc11001100_hook("PAYMENTMETHOD", "$PaymentMethod", "object-key-init"),
        FIXEDCYCLE: cc11001100_hook("FIXEDCYCLE", "$FixedCycle", "object-key-init"),
        ENTRANCE: cc11001100_hook("ENTRANCE", "$Entrance", "object-key-init"),
        CODE: cc11001100_hook("CODE", "$code", "object-key-init"),
        NEWSTOPIC: cc11001100_hook("NEWSTOPIC", "$NewsTopic", "object-key-init"),
        INFORMATIONSOURCE: cc11001100_hook("INFORMATIONSOURCE", "$InformationSource", "object-key-init"),
        COMMENTSNUMBER: cc11001100_hook("COMMENTSNUMBER", "$CommentsNumber", "object-key-init"),
        FORWARDINGNUMBER: cc11001100_hook("FORWARDINGNUMBER", "$forwardingNumber", "object-key-init"),
        LIKES: cc11001100_hook("LIKES", "$Likes", "object-key-init"),
        TITLE: cc11001100_hook("TITLE", "$Title", "object-key-init"),
        SEARCHTYPE: cc11001100_hook("SEARCHTYPE", "$SearchType", "object-key-init"),
        SOURCELOCATION: cc11001100_hook("SOURCELOCATION", "$SourceLocation", "object-key-init"),
        LOCATION: cc11001100_hook("LOCATION", "$Location", "object-key-init"),
        ID: cc11001100_hook("ID", "$Id", "object-key-init"),
        PLAYMODE: cc11001100_hook("PLAYMODE", "$PlayMode", "object-key-init"),
        LISTS: cc11001100_hook("LISTS", "$Lists", "object-key-init"),
        ADLOCATION: cc11001100_hook("ADLOCATION", "$Adlocation", "object-key-init"),
        ADCATEGORY: cc11001100_hook("ADCATEGORY", "$AdCategory", "object-key-init"),
        ADTHEME: cc11001100_hook("ADTHEME", "$AdTheme", "object-key-init"),
        BUTTONNAME: cc11001100_hook("BUTTONNAME", "$ButtonName", "object-key-init"),
        USERID: cc11001100_hook("USERID", "$UserID", "object-key-init"),
        PAGECATEGORY: cc11001100_hook("PAGECATEGORY", "$PageCategory", "object-key-init"),
        RATING: cc11001100_hook("RATING", "$Rating", "object-key-init"),
        PERFORMANCE: cc11001100_hook("PERFORMANCE", "$Performance", "object-key-init"),
        TRADINGRULES: cc11001100_hook("TRADINGRULES", "$TradingRules", "object-key-init"),
        PORTFOLIO: cc11001100_hook("PORTFOLIO", "$Portfolio", "object-key-init"),
        INVESTMENTMANAGER: cc11001100_hook("INVESTMENTMANAGER", "$InvestmentManager", "object-key-init"),
        FUNDSIZE: cc11001100_hook("FUNDSIZE", "$FundSize", "object-key-init"),
        VIPMONEY: cc11001100_hook("VIPMONEY", "$VipMoney", "object-key-init"),
        VIPLOCATION: cc11001100_hook("VIPLOCATION", "$VipLocation", "object-key-init"),
        VIPFAILED: cc11001100_hook("VIPFAILED", "$VipFailed", "object-key-init"),
        SECTION: cc11001100_hook("SECTION", "$Section", "object-key-init")
      }
    }, "var-init");
  return t.registerApiProvider("analytics", function () {
    return rl.get();
  }, ol), function (e) {
    e.registerApiProvider("hmscore_analytics", function () {
      return il.get();
    });
  }(t), t;
});
!function (e, t) {
  void 0 === e.csdn && (e.csdn = cc11001100_hook("e.csdn", {}, "assign")), e.csdn.reportCryptoJS = cc11001100_hook("e.csdn.reportCryptoJS", function () {
    var e = cc11001100_hook("e", e || function (e, t) {
      var o;
      if ("undefined" != typeof window && window.crypto && (o = cc11001100_hook("o", window.crypto, "assign")), "undefined" != typeof self && self.crypto && (o = cc11001100_hook("o", self.crypto, "assign")), "undefined" != typeof globalThis && globalThis.crypto && (o = cc11001100_hook("o", globalThis.crypto, "assign")), !o && "undefined" != typeof window && window.msCrypto && (o = cc11001100_hook("o", window.msCrypto, "assign")), !o && "undefined" != typeof global && global.crypto && (o = cc11001100_hook("o", global.crypto, "assign")), !o && "function" == typeof require) try {
        o = cc11001100_hook("o", require("crypto"), "assign");
      } catch (e) {}
      var r = function () {
          if (o) {
            if ("function" == typeof o.getRandomValues) try {
              return o.getRandomValues(new Uint32Array(1))[0];
            } catch (e) {}
            if ("function" == typeof o.randomBytes) try {
              return o.randomBytes(4).readInt32LE();
            } catch (e) {}
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        },
        n = cc11001100_hook("n", Object.create || function () {
          function e() {}
          return function (t) {
            var o;
            return e.prototype = cc11001100_hook("e.prototype", t, "assign"), o = cc11001100_hook("o", new e(), "assign"), e.prototype = cc11001100_hook("e.prototype", null, "assign"), o;
          };
        }(), "var-init"),
        i = cc11001100_hook("i", {}, "var-init"),
        c = cc11001100_hook("c", i.lib = cc11001100_hook("i.lib", {}, "assign"), "var-init"),
        a = cc11001100_hook("a", c.Base = cc11001100_hook("c.Base", function () {
          return {
            extend: function (e) {
              var t = cc11001100_hook("t", n(this), "var-init");
              return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = cc11001100_hook("t.init", function () {
                t.$super.init.apply(this, arguments);
              }, "assign")), t.init.prototype = cc11001100_hook("t.init.prototype", t, "assign"), t.$super = cc11001100_hook("t.$super", this, "assign"), t;
            },
            create: function () {
              var e = cc11001100_hook("e", this.extend(), "var-init");
              return e.init.apply(e, arguments), e;
            },
            init: function () {},
            mixIn: function (e) {
              for (var t in e) e.hasOwnProperty(t) && (this[t] = cc11001100_hook("this[t]", e[t], "assign"));
              e.hasOwnProperty("toString") && (this.toString = cc11001100_hook("this.toString", e.toString, "assign"));
            },
            clone: function () {
              return this.init.prototype.extend(this);
            }
          };
        }(), "assign"), "var-init"),
        s = cc11001100_hook("s", c.WordArray = cc11001100_hook("c.WordArray", a.extend({
          init: function (e, t) {
            e = cc11001100_hook("e", this.words = cc11001100_hook("this.words", e || [], "assign"), "assign"), this.sigBytes = cc11001100_hook("this.sigBytes", void 0 != t ? t : 4 * e.length, "assign");
          },
          toString: function (e) {
            return (e || u).stringify(this);
          },
          concat: function (e) {
            var t = cc11001100_hook("t", this.words, "var-init"),
              o = cc11001100_hook("o", e.words, "var-init"),
              r = cc11001100_hook("r", this.sigBytes, "var-init"),
              n = cc11001100_hook("n", e.sigBytes, "var-init");
            if (this.clamp(), r % 4) for (var i = cc11001100_hook("i", 0, "var-init"); i < n; i++) {
              var c = cc11001100_hook("c", o[i >>> 2] >>> 24 - i % 4 * 8 & 255, "var-init");
              t[r + i >>> 2] |= cc11001100_hook("t[r + i >>> 2]", c << 24 - (r + i) % 4 * 8, "assign");
            } else for (var a = cc11001100_hook("a", 0, "var-init"); a < n; a += cc11001100_hook("a", 4, "assign")) t[r + a >>> 2] = cc11001100_hook("t[r + a >>> 2]", o[a >>> 2], "assign");
            return this.sigBytes += cc11001100_hook("this.sigBytes", n, "assign"), this;
          },
          clamp: function () {
            var t = cc11001100_hook("t", this.words, "var-init"),
              o = cc11001100_hook("o", this.sigBytes, "var-init");
            t[o >>> 2] &= cc11001100_hook("t[o >>> 2]", 4294967295 << 32 - o % 4 * 8, "assign"), t.length = cc11001100_hook("t.length", e.ceil(o / 4), "assign");
          },
          clone: function () {
            var e = cc11001100_hook("e", a.clone.call(this), "var-init");
            return e.words = cc11001100_hook("e.words", this.words.slice(0), "assign"), e;
          },
          random: function (e) {
            for (var t = cc11001100_hook("t", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e; o += cc11001100_hook("o", 4, "assign")) t.push(r());
            return new s.init(t, e);
          }
        }), "assign"), "var-init"),
        d = cc11001100_hook("d", i.enc = cc11001100_hook("i.enc", {}, "assign"), "var-init"),
        u = cc11001100_hook("u", d.Hex = cc11001100_hook("d.Hex", {
          stringify: function (e) {
            for (var t = cc11001100_hook("t", e.words, "var-init"), o = cc11001100_hook("o", e.sigBytes, "var-init"), r = cc11001100_hook("r", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < o; n++) {
              var i = cc11001100_hook("i", t[n >>> 2] >>> 24 - n % 4 * 8 & 255, "var-init");
              r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16));
            }
            return r.join("");
          },
          parse: function (e) {
            for (var t = cc11001100_hook("t", e.length, "var-init"), o = cc11001100_hook("o", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t; r += cc11001100_hook("r", 2, "assign")) o[r >>> 3] |= cc11001100_hook("o[r >>> 3]", parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4, "assign");
            return new s.init(o, t / 2);
          }
        }, "assign"), "var-init"),
        l = cc11001100_hook("l", d.Latin1 = cc11001100_hook("d.Latin1", {
          stringify: function (e) {
            for (var t = cc11001100_hook("t", e.words, "var-init"), o = cc11001100_hook("o", e.sigBytes, "var-init"), r = cc11001100_hook("r", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < o; n++) {
              var i = cc11001100_hook("i", t[n >>> 2] >>> 24 - n % 4 * 8 & 255, "var-init");
              r.push(String.fromCharCode(i));
            }
            return r.join("");
          },
          parse: function (e) {
            for (var t = cc11001100_hook("t", e.length, "var-init"), o = cc11001100_hook("o", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t; r++) o[r >>> 2] |= cc11001100_hook("o[r >>> 2]", (255 & e.charCodeAt(r)) << 24 - r % 4 * 8, "assign");
            return new s.init(o, t);
          }
        }, "assign"), "var-init"),
        p = cc11001100_hook("p", d.Utf8 = cc11001100_hook("d.Utf8", {
          stringify: function (e) {
            try {
              return decodeURIComponent(escape(l.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function (e) {
            return l.parse(unescape(encodeURIComponent(e)));
          }
        }, "assign"), "var-init"),
        f = cc11001100_hook("f", c.BufferedBlockAlgorithm = cc11001100_hook("c.BufferedBlockAlgorithm", a.extend({
          reset: function () {
            this._data = cc11001100_hook("this._data", new s.init(), "assign"), this._nDataBytes = cc11001100_hook("this._nDataBytes", 0, "assign");
          },
          _append: function (e) {
            "string" == typeof e && (e = cc11001100_hook("e", p.parse(e), "assign")), this._data.concat(e), this._nDataBytes += cc11001100_hook("this._nDataBytes", e.sigBytes, "assign");
          },
          _process: function (t) {
            var o,
              r = cc11001100_hook("r", this._data, "var-init"),
              n = cc11001100_hook("n", r.words, "var-init"),
              i = cc11001100_hook("i", r.sigBytes, "var-init"),
              c = cc11001100_hook("c", this.blockSize, "var-init"),
              a = cc11001100_hook("a", 4 * c, "var-init"),
              d = cc11001100_hook("d", i / a, "var-init");
            d = cc11001100_hook("d", t ? e.ceil(d) : e.max((0 | d) - this._minBufferSize, 0), "assign");
            var u = cc11001100_hook("u", d * c, "var-init"),
              l = cc11001100_hook("l", e.min(4 * u, i), "var-init");
            if (u) {
              for (var p = cc11001100_hook("p", 0, "var-init"); p < u; p += cc11001100_hook("p", c, "assign")) this._doProcessBlock(n, p);
              o = cc11001100_hook("o", n.splice(0, u), "assign"), r.sigBytes -= cc11001100_hook("r.sigBytes", l, "assign");
            }
            return new s.init(o, l);
          },
          clone: function () {
            var e = cc11001100_hook("e", a.clone.call(this), "var-init");
            return e._data = cc11001100_hook("e._data", this._data.clone(), "assign"), e;
          },
          _minBufferSize: cc11001100_hook("_minBufferSize", 0, "object-key-init")
        }), "assign"), "var-init"),
        g = cc11001100_hook("g", (c.Hasher = cc11001100_hook("c.Hasher", f.extend({
          cfg: cc11001100_hook("cfg", a.extend(), "object-key-init"),
          init: function (e) {
            this.cfg = cc11001100_hook("this.cfg", this.cfg.extend(e), "assign"), this.reset();
          },
          reset: function () {
            f.reset.call(this), this._doReset();
          },
          update: function (e) {
            return this._append(e), this._process(), this;
          },
          finalize: function (e) {
            return e && this._append(e), this._doFinalize();
          },
          blockSize: cc11001100_hook("blockSize", 16, "object-key-init"),
          _createHelper: function (e) {
            return function (t, o) {
              return new e.init(o).finalize(t);
            };
          },
          _createHmacHelper: function (e) {
            return function (t, o) {
              return new g.HMAC.init(e, o).finalize(t);
            };
          }
        }), "assign"), i.algo = cc11001100_hook("i.algo", {}, "assign")), "var-init");
      return i;
    }(Math), "var-init");
    return e;
  }(), "assign");
}(window), function (e, t) {
  !function (e) {
    (function (t) {
      function o(e, t, o, r, n, i, c) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        var a = cc11001100_hook("a", e + (t & o | ~t & r) + n + c, "var-init");
        return (a << i | a >>> 32 - i) + t;
      }
      function r(e, t, o, r, n, i, c) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        var a = cc11001100_hook("a", e + (t & r | o & ~r) + n + c, "var-init");
        return (a << i | a >>> 32 - i) + t;
      }
      function n(e, t, o, r, n, i, c) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        var a = cc11001100_hook("a", e + (t ^ o ^ r) + n + c, "var-init");
        return (a << i | a >>> 32 - i) + t;
      }
      function i(e, t, o, r, n, i, c) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        var a = cc11001100_hook("a", e + (o ^ (t | ~r)) + n + c, "var-init");
        return (a << i | a >>> 32 - i) + t;
      }
      var c = cc11001100_hook("c", e, "var-init"),
        a = cc11001100_hook("a", c.lib, "var-init"),
        s = cc11001100_hook("s", a.WordArray, "var-init"),
        d = cc11001100_hook("d", a.Hasher, "var-init"),
        u = cc11001100_hook("u", c.algo, "var-init"),
        l = cc11001100_hook("l", [], "var-init");
      !function () {
        for (var e = cc11001100_hook("e", 0, "var-init"); e < 64; e++) l[e] = cc11001100_hook("l[e]", 4294967296 * t.abs(t.sin(e + 1)) | 0, "assign");
      }();
      var p = cc11001100_hook("p", u.MD5 = cc11001100_hook("u.MD5", d.extend({
        _doReset: function () {
          this._hash = cc11001100_hook("this._hash", new s.init([1732584193, 4023233417, 2562383102, 271733878]), "assign");
        },
        _doProcessBlock: function (e, t) {
          for (var c = cc11001100_hook("c", 0, "var-init"); c < 16; c++) {
            var a = cc11001100_hook("a", t + c, "var-init"),
              s = cc11001100_hook("s", e[a], "var-init");
            e[a] = cc11001100_hook("e[a]", 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), "assign");
          }
          var d = cc11001100_hook("d", this._hash.words, "var-init"),
            u = cc11001100_hook("u", e[t + 0], "var-init"),
            p = cc11001100_hook("p", e[t + 1], "var-init"),
            f = cc11001100_hook("f", e[t + 2], "var-init"),
            g = cc11001100_hook("g", e[t + 3], "var-init"),
            h = cc11001100_hook("h", e[t + 4], "var-init"),
            m = cc11001100_hook("m", e[t + 5], "var-init"),
            w = cc11001100_hook("w", e[t + 6], "var-init"),
            _ = cc11001100_hook("_", e[t + 7], "var-init"),
            v = cc11001100_hook("v", e[t + 8], "var-init"),
            k = cc11001100_hook("k", e[t + 9], "var-init"),
            C = cc11001100_hook("C", e[t + 10], "var-init"),
            x = cc11001100_hook("x", e[t + 11], "var-init"),
            y = cc11001100_hook("y", e[t + 12], "var-init"),
            b = cc11001100_hook("b", e[t + 13], "var-init"),
            S = cc11001100_hook("S", e[t + 14], "var-init"),
            E = cc11001100_hook("E", e[t + 15], "var-init"),
            I = cc11001100_hook("I", d[0], "var-init"),
            T = cc11001100_hook("T", d[1], "var-init"),
            O = cc11001100_hook("O", d[2], "var-init"),
            D = cc11001100_hook("D", d[3], "var-init");
          I = cc11001100_hook("I", o(I, T, O, D, u, 7, l[0]), "assign"), D = cc11001100_hook("D", o(D, I, T, O, p, 12, l[1]), "assign"), O = cc11001100_hook("O", o(O, D, I, T, f, 17, l[2]), "assign"), T = cc11001100_hook("T", o(T, O, D, I, g, 22, l[3]), "assign"), I = cc11001100_hook("I", o(I, T, O, D, h, 7, l[4]), "assign"), D = cc11001100_hook("D", o(D, I, T, O, m, 12, l[5]), "assign"), O = cc11001100_hook("O", o(O, D, I, T, w, 17, l[6]), "assign"), T = cc11001100_hook("T", o(T, O, D, I, _, 22, l[7]), "assign"), I = cc11001100_hook("I", o(I, T, O, D, v, 7, l[8]), "assign"), D = cc11001100_hook("D", o(D, I, T, O, k, 12, l[9]), "assign"), O = cc11001100_hook("O", o(O, D, I, T, C, 17, l[10]), "assign"), T = cc11001100_hook("T", o(T, O, D, I, x, 22, l[11]), "assign"), I = cc11001100_hook("I", o(I, T, O, D, y, 7, l[12]), "assign"), D = cc11001100_hook("D", o(D, I, T, O, b, 12, l[13]), "assign"), O = cc11001100_hook("O", o(O, D, I, T, S, 17, l[14]), "assign"), T = cc11001100_hook("T", o(T, O, D, I, E, 22, l[15]), "assign"), I = cc11001100_hook("I", r(I, T, O, D, p, 5, l[16]), "assign"), D = cc11001100_hook("D", r(D, I, T, O, w, 9, l[17]), "assign"), O = cc11001100_hook("O", r(O, D, I, T, x, 14, l[18]), "assign"), T = cc11001100_hook("T", r(T, O, D, I, u, 20, l[19]), "assign"), I = cc11001100_hook("I", r(I, T, O, D, m, 5, l[20]), "assign"), D = cc11001100_hook("D", r(D, I, T, O, C, 9, l[21]), "assign"), O = cc11001100_hook("O", r(O, D, I, T, E, 14, l[22]), "assign"), T = cc11001100_hook("T", r(T, O, D, I, h, 20, l[23]), "assign"), I = cc11001100_hook("I", r(I, T, O, D, k, 5, l[24]), "assign"), D = cc11001100_hook("D", r(D, I, T, O, S, 9, l[25]), "assign"), O = cc11001100_hook("O", r(O, D, I, T, g, 14, l[26]), "assign"), T = cc11001100_hook("T", r(T, O, D, I, v, 20, l[27]), "assign"), I = cc11001100_hook("I", r(I, T, O, D, b, 5, l[28]), "assign"), D = cc11001100_hook("D", r(D, I, T, O, f, 9, l[29]), "assign"), O = cc11001100_hook("O", r(O, D, I, T, _, 14, l[30]), "assign"), T = cc11001100_hook("T", r(T, O, D, I, y, 20, l[31]), "assign"), I = cc11001100_hook("I", n(I, T, O, D, m, 4, l[32]), "assign"), D = cc11001100_hook("D", n(D, I, T, O, v, 11, l[33]), "assign"), O = cc11001100_hook("O", n(O, D, I, T, x, 16, l[34]), "assign"), T = cc11001100_hook("T", n(T, O, D, I, S, 23, l[35]), "assign"), I = cc11001100_hook("I", n(I, T, O, D, p, 4, l[36]), "assign"), D = cc11001100_hook("D", n(D, I, T, O, h, 11, l[37]), "assign"), O = cc11001100_hook("O", n(O, D, I, T, _, 16, l[38]), "assign"), T = cc11001100_hook("T", n(T, O, D, I, C, 23, l[39]), "assign"), I = cc11001100_hook("I", n(I, T, O, D, b, 4, l[40]), "assign"), D = cc11001100_hook("D", n(D, I, T, O, u, 11, l[41]), "assign"), O = cc11001100_hook("O", n(O, D, I, T, g, 16, l[42]), "assign"), T = cc11001100_hook("T", n(T, O, D, I, w, 23, l[43]), "assign"), I = cc11001100_hook("I", n(I, T, O, D, k, 4, l[44]), "assign"), D = cc11001100_hook("D", n(D, I, T, O, y, 11, l[45]), "assign"), O = cc11001100_hook("O", n(O, D, I, T, E, 16, l[46]), "assign"), T = cc11001100_hook("T", n(T, O, D, I, f, 23, l[47]), "assign"), I = cc11001100_hook("I", i(I, T, O, D, u, 6, l[48]), "assign"), D = cc11001100_hook("D", i(D, I, T, O, _, 10, l[49]), "assign"), O = cc11001100_hook("O", i(O, D, I, T, S, 15, l[50]), "assign"), T = cc11001100_hook("T", i(T, O, D, I, m, 21, l[51]), "assign"), I = cc11001100_hook("I", i(I, T, O, D, y, 6, l[52]), "assign"), D = cc11001100_hook("D", i(D, I, T, O, g, 10, l[53]), "assign"), O = cc11001100_hook("O", i(O, D, I, T, C, 15, l[54]), "assign"), T = cc11001100_hook("T", i(T, O, D, I, p, 21, l[55]), "assign"), I = cc11001100_hook("I", i(I, T, O, D, v, 6, l[56]), "assign"), D = cc11001100_hook("D", i(D, I, T, O, E, 10, l[57]), "assign"), O = cc11001100_hook("O", i(O, D, I, T, w, 15, l[58]), "assign"), T = cc11001100_hook("T", i(T, O, D, I, b, 21, l[59]), "assign"), I = cc11001100_hook("I", i(I, T, O, D, h, 6, l[60]), "assign"), D = cc11001100_hook("D", i(D, I, T, O, x, 10, l[61]), "assign"), O = cc11001100_hook("O", i(O, D, I, T, f, 15, l[62]), "assign"), T = cc11001100_hook("T", i(T, O, D, I, k, 21, l[63]), "assign"), d[0] = cc11001100_hook("d[0]", d[0] + I | 0, "assign"), d[1] = cc11001100_hook("d[1]", d[1] + T | 0, "assign"), d[2] = cc11001100_hook("d[2]", d[2] + O | 0, "assign"), d[3] = cc11001100_hook("d[3]", d[3] + D | 0, "assign");
        },
        _doFinalize: function () {
          var e = cc11001100_hook("e", this._data, "var-init"),
            o = cc11001100_hook("o", e.words, "var-init"),
            r = cc11001100_hook("r", 8 * this._nDataBytes, "var-init"),
            n = cc11001100_hook("n", 8 * e.sigBytes, "var-init");
          o[n >>> 5] |= cc11001100_hook("o[n >>> 5]", 128 << 24 - n % 32, "assign");
          var i = cc11001100_hook("i", t.floor(r / 4294967296), "var-init"),
            c = cc11001100_hook("c", r, "var-init");
          o[15 + (n + 64 >>> 9 << 4)] = cc11001100_hook("o[15 + (n + 64 >>> 9 << 4)]", 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), "assign"), o[14 + (n + 64 >>> 9 << 4)] = cc11001100_hook("o[14 + (n + 64 >>> 9 << 4)]", 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), "assign"), e.sigBytes = cc11001100_hook("e.sigBytes", 4 * (o.length + 1), "assign"), this._process();
          for (var a = cc11001100_hook("a", this._hash, "var-init"), s = cc11001100_hook("s", a.words, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < 4; d++) {
            var u = cc11001100_hook("u", s[d], "var-init");
            s[d] = cc11001100_hook("s[d]", 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), "assign");
          }
          return a;
        },
        clone: function () {
          var e = cc11001100_hook("e", d.clone.call(this), "var-init");
          return e._hash = cc11001100_hook("e._hash", this._hash.clone(), "assign"), e;
        }
      }), "assign"), "var-init");
      c.MD5 = cc11001100_hook("c.MD5", d._createHelper(p), "assign"), c.HmacMD5 = cc11001100_hook("c.HmacMD5", d._createHmacHelper(p), "assign");
    })(Math), e.MD5;
  }(e.csdn.reportCryptoJS);
}(window), function (e) {
  var t, o, r, n, i, c, a, s, d, u, l, p, f, g, h, m;
  i = cc11001100_hook("i", [], "assign"), t = cc11001100_hook("t", {
    DELAY: cc11001100_hook("DELAY", 500, "object-key-init"),
    API_VERSION: cc11001100_hook("API_VERSION", "0.6.0", "object-key-init"),
    SERVER_URL: cc11001100_hook("SERVER_URL", "https://event.csdn.net/", "object-key-init")
  }, "assign"), p = cc11001100_hook("p", ["utm_source"], "assign"), s = cc11001100_hook("s", {
    scroll: cc11001100_hook("scroll", t.SERVER_URL + "logstores/csdn-pc-sc/track_ua.gif?APIVersion=" + t.API_VERSION, "object-key-init"),
    pv: cc11001100_hook("pv", t.SERVER_URL + "logstores/csdn-pc-tracking-pageview/track_ua.gif?APIVersion=" + t.API_VERSION, "object-key-init"),
    click: cc11001100_hook("click", t.SERVER_URL + "logstores/csdn-pc-tracking-page-click/track_ua.gif?APIVersion=" + t.API_VERSION, "object-key-init"),
    view: cc11001100_hook("view", t.SERVER_URL + "logstores/csdn-pc-tracking-page-exposure/track", "object-key-init")
  }, "assign"), n = cc11001100_hook("n", {
    SCROLL: cc11001100_hook("SCROLL", "scroll", "object-key-init"),
    PV: cc11001100_hook("PV", "pv", "object-key-init"),
    VIEW: cc11001100_hook("VIEW", "view", "object-key-init"),
    DELAY_VIEW: cc11001100_hook("DELAY_VIEW", "delay_view", "object-key-init"),
    CLICK: cc11001100_hook("CLICK", "click", "object-key-init")
  }, "assign"), a = cc11001100_hook("a", {
    SKIPPED_AND_VISIBLE: cc11001100_hook("SKIPPED_AND_VISIBLE", "0", "object-key-init"),
    VISIBLE: cc11001100_hook("VISIBLE", "1", "object-key-init")
  }, "assign");
  var w = cc11001100_hook("w", {
      agcgw: {
        backurl: cc11001100_hook("backurl", "connect-drcn.hispace.hicloud.com", "object-key-init"),
        url: cc11001100_hook("url", "connect-drcn.dbankcloud.cn", "object-key-init"),
        websocketbackurl: cc11001100_hook("websocketbackurl", "connect-ws-drcn.hispace.dbankcloud.com", "object-key-init"),
        websocketurl: cc11001100_hook("websocketurl", "connect-ws-drcn.hispace.dbankcloud.cn", "object-key-init")
      },
      agcgw_all: {
        CN: cc11001100_hook("CN", "connect-drcn.dbankcloud.cn", "object-key-init"),
        CN_back: cc11001100_hook("CN_back", "connect-drcn.hispace.hicloud.com", "object-key-init"),
        DE: cc11001100_hook("DE", "connect-dre.dbankcloud.cn", "object-key-init"),
        DE_back: cc11001100_hook("DE_back", "connect-dre.hispace.hicloud.com", "object-key-init"),
        RU: cc11001100_hook("RU", "connect-drru.hispace.dbankcloud.ru", "object-key-init"),
        RU_back: cc11001100_hook("RU_back", "connect-drru.hispace.dbankcloud.cn", "object-key-init"),
        SG: cc11001100_hook("SG", "connect-dra.dbankcloud.cn", "object-key-init"),
        SG_back: cc11001100_hook("SG_back", "connect-dra.hispace.hicloud.com", "object-key-init")
      },
      websocketgw_all: {
        CN: cc11001100_hook("CN", "connect-ws-drcn.hispace.dbankcloud.cn", "object-key-init"),
        CN_back: cc11001100_hook("CN_back", "connect-ws-drcn.hispace.dbankcloud.com", "object-key-init"),
        DE: cc11001100_hook("DE", "connect-ws-dre.hispace.dbankcloud.cn", "object-key-init"),
        DE_back: cc11001100_hook("DE_back", "connect-ws-dre.hispace.dbankcloud.com", "object-key-init"),
        RU: cc11001100_hook("RU", "connect-ws-drru.hispace.dbankcloud.ru", "object-key-init"),
        RU_back: cc11001100_hook("RU_back", "connect-ws-drru.hispace.dbankcloud.cn", "object-key-init"),
        SG: cc11001100_hook("SG", "connect-ws-dra.hispace.dbankcloud.cn", "object-key-init"),
        SG_back: cc11001100_hook("SG_back", "connect-ws-dra.hispace.dbankcloud.com", "object-key-init")
      },
      client: {
        cp_id: cc11001100_hook("cp_id", "2850086000385095620", "object-key-init"),
        product_id: cc11001100_hook("product_id", "3629892982708167306", "object-key-init"),
        client_id: cc11001100_hook("client_id", "616369439914343296", "object-key-init"),
        client_secret: cc11001100_hook("client_secret", "30380A55D88C6AB552ABEF7E0A7202B4CC2832366DDB85D2EAB4F07F45AF0641", "object-key-init"),
        project_id: cc11001100_hook("project_id", "3629892982708167306", "object-key-init"),
        app_id: cc11001100_hook("app_id", "243650030996486022", "object-key-init"),
        api_key: cc11001100_hook("api_key", "CwEAAAAAmqEcCqKqyJnZCn/9gY9gr9axVLJKF2NCx9xcNUvx5gIc6VMyzUSH7tZvGnbf8qSf0W0vrUvQ4whevbzkbxJDuFZFlcA=", "object-key-init")
      },
      oauth_client: {
        client_id: cc11001100_hook("client_id", "107532021", "object-key-init"),
        client_type: cc11001100_hook("client_type", 7, "object-key-init")
      },
      app_info: {
        app_id: cc11001100_hook("app_id", "243650030996486022", "object-key-init")
      },
      service: {
        analytics: {
          collector_url: cc11001100_hook("collector_url", "datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn", "object-key-init"),
          collector_url_ru: cc11001100_hook("collector_url_ru", "datacollector-drru.dt.dbankcloud.ru,datacollector-drru.dt.hicloud.com", "object-key-init"),
          collector_url_sg: cc11001100_hook("collector_url_sg", "datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn", "object-key-init"),
          collector_url_de: cc11001100_hook("collector_url_de", "datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn", "object-key-init"),
          collector_url_cn: cc11001100_hook("collector_url_cn", "datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn", "object-key-init"),
          resource_id: cc11001100_hook("resource_id", "p1", "object-key-init"),
          channel_id: cc11001100_hook("channel_id", "", "object-key-init")
        },
        edukit: {
          edu_url: cc11001100_hook("edu_url", "edukit.edu.cloud.huawei.com.cn", "object-key-init"),
          dh_url: cc11001100_hook("dh_url", "edukit.edu.cloud.huawei.com.cn", "object-key-init")
        },
        search: {
          url: cc11001100_hook("url", "https://search-drcn.cloud.huawei.com", "object-key-init")
        },
        cloudstorage: {
          storage_url_sg_back: cc11001100_hook("storage_url_sg_back", "https://agc-storage-dra.cloud.huawei.asia", "object-key-init"),
          storage_url_ru_back: cc11001100_hook("storage_url_ru_back", "https://agc-storage-drru.cloud.huawei.ru", "object-key-init"),
          storage_url_ru: cc11001100_hook("storage_url_ru", "https://agc-storage-drru.cloud.huawei.ru", "object-key-init"),
          storage_url_de_back: cc11001100_hook("storage_url_de_back", "https://agc-storage-dre.cloud.huawei.eu", "object-key-init"),
          storage_url_de: cc11001100_hook("storage_url_de", "https://ops-dre.agcstorage.link", "object-key-init"),
          storage_url: cc11001100_hook("storage_url", "https://agc-storage-drcn.platform.dbankcloud.cn", "object-key-init"),
          storage_url_sg: cc11001100_hook("storage_url_sg", "https://ops-dra.agcstorage.link", "object-key-init"),
          storage_url_cn_back: cc11001100_hook("storage_url_cn_back", "https://agc-storage-drcn.cloud.huawei.com.cn", "object-key-init"),
          storage_url_cn: cc11001100_hook("storage_url_cn", "https://agc-storage-drcn.platform.dbankcloud.cn", "object-key-init")
        },
        ml: {
          mlservice_url: cc11001100_hook("mlservice_url", "ml-api-drcn.ai.dbankcloud.com,ml-api-drcn.ai.dbankcloud.cn", "object-key-init")
        }
      },
      region: cc11001100_hook("region", "CN", "object-key-init"),
      configuration_version: cc11001100_hook("configuration_version", "3.0", "object-key-init")
    }, "var-init"),
    _ = cc11001100_hook("_", {
      region: cc11001100_hook("region", "cn-north-4", "object-key-init"),
      projectId: cc11001100_hook("projectId", "06981375190026432f77c01bfca33e32", "object-key-init"),
      groupId: cc11001100_hook("groupId", "dadde766-b087-42da-8e67-d2499a520ee7", "object-key-init"),
      tags: {
        userAgent: cc11001100_hook("userAgent", window.navigator.userAgent, "object-key-init")
      }
    }, "var-init"),
    v = cc11001100_hook("v", {
      PV: cc11001100_hook("PV", "f5e1a97a-cfee-4925-aca4-63a2a882f03b", "object-key-init"),
      CLICK: cc11001100_hook("CLICK", "5b9d7a3e-e8f7-44e1-93ab-751c02ed7e10", "object-key-init"),
      VIEW: cc11001100_hook("VIEW", "f8e601e5-6b79-4d4d-8022-5b7c0650aa24", "object-key-init")
    }, "var-init"),
    k = cc11001100_hook("k", {
      PV: cc11001100_hook("PV", Object.assign({}, _, {
        streamId: cc11001100_hook("streamId", v.PV, "object-key-init")
      }), "object-key-init"),
      CLICK: cc11001100_hook("CLICK", Object.assign({}, _, {
        streamId: cc11001100_hook("streamId", v.CLICK, "object-key-init")
      }), "object-key-init"),
      VIEW: cc11001100_hook("VIEW", Object.assign({}, _, {
        streamId: cc11001100_hook("streamId", v.VIEW, "object-key-init")
      }), "object-key-init")
    }, "var-init");
  if (r = cc11001100_hook("r", {
    isCSDNApp: function () {
      var e = cc11001100_hook("e", !!window.navigator.userAgent.toLowerCase().match(/(csdn)/i), "var-init"),
        t = cc11001100_hook("t", r.getCookie("X-App-ID") || "", "var-init");
      return e || "CSDN-APP" == t || "CSDN-EDU" == t;
    },
    guid: function () {
      return +new Date() + "-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = cc11001100_hook("t", 16 * Math.random() | 0, "var-init");
        return ("x" == e ? t : 3 & t | 8).toString(16);
      });
    },
    setLogIdCookie: function (e) {
      if (-1 !== ["pv", "click", "view"].indexOf(e)) {
        var t = cc11001100_hook("t", "log_Id_" + e, "var-init"),
          o = cc11001100_hook("o", r.getCookie(t) || 0, "var-init");
        try {
          o = cc11001100_hook("o", parseInt(o), "assign"), "number" == typeof o && isNaN(o) || o >= 1e8 ? r.setCookie(t, 1, 31536e7) : r.setCookie(t, ++o, 31536e7);
        } catch (e) {
          void 0;
        }
      }
    },
    getRequest: function () {
      for (var e = cc11001100_hook("e", new Object(), "var-init"), t = cc11001100_hook("t", window.location.href.split("?")[1] || "", "var-init"), o = cc11001100_hook("o", t.split("&"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < o.length; r++) {
        var n = cc11001100_hook("n", o[r].split("=")[0], "var-init"),
          i = cc11001100_hook("i", o[r].split("=")[1], "var-init");
        n && i && (e[n] = cc11001100_hook("e[n]", unescape(i), "assign"));
      }
      return e;
    },
    initUTM: function () {
      l = cc11001100_hook("l", {}, "assign");
      var e = cc11001100_hook("e", r.getRequest(), "var-init"),
        t = cc11001100_hook("t", r.isCSDNApp(), "var-init");
      if ("{}" !== JSON.stringify(e)) {
        for (var o in e) 0 == o.indexOf("utm_") && e.hasOwnProperty(o) && (void 0, 0 == o.indexOf("utm_source") ? (r.setCookie("c_" + o, e[o], 864e5), t && r.setCookie(o + "_app", e[o], 864e5)) : (r.setCookie("c_" + o, e[o], 36e5), t && r.setCookie(o + "_app", e[o], 36e5)));
        for (var o in p) if (p.hasOwnProperty(o)) {
          var n = cc11001100_hook("n", p[o], "var-init"),
            i = cc11001100_hook("i", e[p[o]], "var-init");
          i ? (r.setCookie(n, i, 36e5), l[n] = cc11001100_hook("l[n]", i, "assign")) : l[n] = cc11001100_hook("l[n]", "", "assign");
        }
      } else for (var o in p) if (p.hasOwnProperty(o)) {
        var n = cc11001100_hook("n", p[o], "var-init"),
          i = cc11001100_hook("i", r.getCookie(n), "var-init");
        l[n] = cc11001100_hook("l[n]", i, "assign");
      }
      return l;
    },
    initTraceInfo: function () {
      for (var e = cc11001100_hook("e", ["blog", "bbs", "download", "ask", "edu", "biwen"], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) window.location.host.indexOf(e[t] + ".csdn.net") > -1 && (r.setCookie("c_page_id", "", -1), r.setCookie("c_mod", "", -1));
    },
    preserveTraceInfo: function (e) {
      e.mod && r.setCookie("c_mod", e.mod, 36e5), e.page_id ? r.setCookie("c_page_id", e.page_id, 36e5) : r.setCookie("c_page_id", "default", 36e5);
    },
    getTimestamp: function () {
      return Math.round(new Date() / 1e3);
    },
    getXPath: function (e) {
      if ("" !== e.id) return '//*[@id="' + e.id + '"]';
      if (e == document.body) return "/html/" + e.tagName.toLowerCase();
      if (!e.parentNode) return "";
      for (var t = cc11001100_hook("t", 1, "var-init"), o = cc11001100_hook("o", e.parentNode.childNodes, "var-init"), r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", o.length, "var-init"); r < n; r++) {
        var i = cc11001100_hook("i", o[r], "var-init");
        if (i == e) return arguments.callee(e.parentNode) + "/" + e.tagName.toLowerCase() + "[" + t + "]";
        1 == i.nodeType && i.tagName == e.tagName && t++;
      }
    },
    getScreen: function () {
      return window.screen.width + "*" + window.screen.height;
    },
    getCookie: function (e) {
      var t,
        o = cc11001100_hook("o", new RegExp("(^| )" + e + "=([^;]*)(;|$)"), "var-init");
      return (t = cc11001100_hook("t", document.cookie.match(o), "assign")) ? unescape(t[2]) : "";
    },
    getFuzzyCookie: function (e) {
      var t,
        o = cc11001100_hook("o", new RegExp(e + "[A-Za-z0-9_]+=([^;]*);", "ig"), "var-init");
      return (t = cc11001100_hook("t", document.cookie.match(o), "assign")) ? t.join("") : "";
    },
    checkoutUtm: function () {
      var e = cc11001100_hook("e", [], "var-init"),
        t = cc11001100_hook("t", [], "var-init"),
        o = cc11001100_hook("o", window.location.href.split("?")[1] || "", "var-init");
      if (o.length) {
        e = cc11001100_hook("e", o.split("&"), "assign");
        for (var r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) 0 == e[r].indexOf("utm_") && t.push(e[r].split("=")[0]);
      }
      return t;
    },
    setCookie: function (e, t, o) {
      var r = cc11001100_hook("r", new Date(), "var-init");
      r.setTime(r.getTime() + o), document.cookie = cc11001100_hook("document.cookie", e + "=" + escape(t) + ";expires=" + r.toGMTString() + ";path=/ ; domain=." + this.topDomain(window.location.host), "assign");
    },
    setUserSegment: function () {
      var e = cc11001100_hook("e", (null != (_ref1 = cc11001100_hook("_ref1", /(; )?(uuid_tt_dd|_javaeye_cookie_id_)=([^;]+)/.exec(window.document.cookie), "assign")) ? _ref1[3] : void 0) || "", "var-init"),
        t = cc11001100_hook("t", e ? e.substring(e.length - 6) % 16 : 0, "var-init");
      r.setCookie("c_segment", t);
    },
    setfirstPageInfo: function () {
      if (r.getCookie("c_first_ref") && r.getCookie("c_first_ref").indexOf(".csdn.net") > -1) return void r.setCookie("c_first_ref", "default");
      var e = cc11001100_hook("e", new RegExp(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/), "var-init"),
        t = cc11001100_hook("t", window.document.referrer ? window.document.referrer.match(e)[0] : "default", "var-init");
      [".csdn.net", "wx.tenpay.com", "graph.qq.com", "openapi.baidu.com", "api.weibo.com", "account.dcloud.net.cn/oauth", "github.com/login/oauth", "passport.gitcode.net"].some(function (e) {
        return e.indexOf("/") > -1 ? (window.document.referrer || "default").indexOf(e) > -1 : t.indexOf(e) > -1;
      }) && (t = cc11001100_hook("t", "default", "assign"));
      var o = cc11001100_hook("o", "11_" + new Date().getTime() + "." + r.randomNum(6), "var-init");
      return "default" != t ? (r.setCookie("c_first_ref", t), r.setCookie("c_first_page", window.location.href), void r.setCookie("c_dsid", o, 18e5)) : r.getCookie("c_first_ref") && window.document.referrer ? void 0 : (r.setCookie("c_first_ref", "default"), r.setCookie("c_first_page", window.location.href), void r.setCookie("c_dsid", o, 18e5));
    },
    randomNum: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), o = cc11001100_hook("o", ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e; r++) {
        var n = cc11001100_hook("n", Math.floor(10 * Math.random()), "var-init");
        t[r] = cc11001100_hook("t[r]", o[n], "assign");
      }
      return t.join("");
    },
    initDefaultCookie: function () {
      var e,
        t = cc11001100_hook("t", (null != (e = cc11001100_hook("e", /(; )?(uuid_tt_dd|_javaeye_cookie_id_)=([^;]+)/.exec(window.document.cookie), "assign")) ? e[3] : void 0) || "", "var-init"),
        o = cc11001100_hook("o", r.getCookie("dc_session_id"), "var-init"),
        n = cc11001100_hook("n", r.getCookie("c_dsid"), "var-init");
      t || (t = cc11001100_hook("t", "11_" + r.randomNum(11) + "-" + new Date().getTime() + "-" + r.randomNum(6), "assign"), r.setCookie("uuid_tt_dd", t, 15768e7)), o || (o = cc11001100_hook("o", "11_" + new Date().getTime() + "." + r.randomNum(6), "assign"), r.setCookie("dc_session_id", o, 18e5)), n || (n = cc11001100_hook("n", "11_" + new Date().getTime() + "." + r.randomNum(6), "assign"), r.setCookie("c_dsid", n, 18e5));
    },
    refreshDcSessionId: function () {
      var e = cc11001100_hook("e", r.getCookie("dc_session_id"), "var-init");
      e && r.setCookie("dc_session_id", e, 18e5);
      var t = cc11001100_hook("t", r.getCookie("c_dsid"), "var-init");
      return t && r.setCookie("c_dsid", t, 18e5), e;
    },
    cCookieAppSuffix: function () {
      var e = cc11001100_hook("e", r.getFuzzyCookie("c_dl"), "var-init"),
        t = cc11001100_hook("t", r.isCSDNApp(), "var-init");
      if (t) {
        !window.document.referrer && r.getCookie("utm_medium_app") && r.setCookie("c_utm_medium", r.getCookie("utm_medium_app"), 36e5);
      }
      if (t && e) try {
        for (var o = cc11001100_hook("o", e.split(";").map(function (e) {
            return e ? e.split("=")[0] : "";
          }).filter(function (e) {
            return e;
          }), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < o.length;) {
          var i = cc11001100_hook("i", o[n], "var-init");
          (function (e, t) {
            var o = cc11001100_hook("o", e.length, "var-init");
            return e.substring(o - t.length, o) === t;
          })(i, "_app") || r.setCookie(i + "_app", r.getCookie(i), 2592e6), n++;
        }
      } catch (e) {
        void 0;
      }
    },
    initLTS: function () {
      if (agconnect) {
        agconnect.instance().configInstance(w), m = cc11001100_hook("m", agconnect.analytics(), "assign"), m.setReportPolicies({
          ON_SCHEDULED_TIME_POLICY: cc11001100_hook("ON_SCHEDULED_TIME_POLICY", 2, "object-key-init")
        });
        try {
          m.initPromise.then(function () {
            m.onReport();
          });
        } catch (e) {}
      }
    },
    analyticsWriteLog: function (e, t, o) {
      if (m && e && k[e]) {
        for (var r = cc11001100_hook("r", o || ["cid", "uid", "sid", "dc_sid", "did", "utm", "platform", "un"], "var-init"), n = cc11001100_hook("n", {}, "var-init"), i = cc11001100_hook("i", JSON.parse(JSON.stringify(t)), "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < r.length; c++) Object.prototype.hasOwnProperty.call(t, r[c]) && (n[r[c]] = cc11001100_hook("n[r[c]]", t[r[c]], "assign"), delete i[r[c]]);
        var a = cc11001100_hook("a", {
          config: cc11001100_hook("config", Object.assign({}, k[e], {
            tags: cc11001100_hook("tags", Object.assign({}, k[e].tags, n), "object-key-init")
          }), "object-key-init"),
          data: cc11001100_hook("data", i, "object-key-init")
        }, "var-init");
        m.writeLog(a.config, JSON.stringify(a.data)), "VIEW" !== e && m.onReport();
      }
    },
    initData: function () {
      r.initLTS(), r.initDefaultCookie(), r.setfirstPageInfo(), r.initTraceInfo(), r.setUserSegment();
      var t,
        o,
        n,
        i = cc11001100_hook("i", (null != (t = cc11001100_hook("t", /(; )?(uuid_tt_dd|_javaeye_cookie_id_)=([^;]+)/.exec(window.document.cookie), "assign")) ? t[3] : void 0) || "", "var-init"),
        s = cc11001100_hook("s", r.refreshDcSessionId(), "var-init");
      if (c = cc11001100_hook("c", {
        cid: cc11001100_hook("cid", i, "object-key-init"),
        sid: cc11001100_hook("sid", s || "", "object-key-init"),
        pid: cc11001100_hook("pid", window.location.host.split(".csdn.net")[0], "object-key-init"),
        uid: cc11001100_hook("uid", r.getCookie("UserName"), "object-key-init"),
        did: cc11001100_hook("did", r.getCookie("X-Device-ID") || i || "", "object-key-init"),
        dc_sid: cc11001100_hook("dc_sid", r.getCookie("dc_sid"), "object-key-init"),
        ref: cc11001100_hook("ref", window.document.referrer || ("(null)" === r.getCookie("refer_app") ? "" : r.getCookie("refer_app")), "object-key-init"),
        curl: cc11001100_hook("curl", window.location.href, "object-key-init"),
        dest: cc11001100_hook("dest", "", "object-key-init"),
        cfg: {
          viewStrategy: cc11001100_hook("viewStrategy", a.VISIBLE, "object-key-init")
        }
      }, "assign"), n = cc11001100_hook("n", r.initUTM(), "assign"), r.cCookieAppSuffix(), e("meta[name=report]").attr("content")) try {
        o = cc11001100_hook("o", JSON.parse(e("meta[name=report]").attr("content")), "assign"), d = cc11001100_hook("d", e.extend(!0, {}, o), "assign");
        for (var u = cc11001100_hook("u", Object.prototype.hasOwnProperty, "var-init"), l = cc11001100_hook("l", ["percent"], "var-init"), p = cc11001100_hook("p", 0, "var-init"); p < l.length; p++) u.call(o, l[p]) && delete o[l[p]];
      } catch (e) {
        o = cc11001100_hook("o", {}, "assign"), d = cc11001100_hook("d", {}, "assign"), void 0;
      } else o = cc11001100_hook("o", {}, "assign");
      if (o.extra) {
        var f = cc11001100_hook("f", r.parseExtra(o), "var-init");
        f && (o.extra = cc11001100_hook("o.extra", f, "assign"));
      }
      return c = cc11001100_hook("c", e.extend({}, c, {
        utm: cc11001100_hook("utm", n.utm_source, "object-key-init")
      }, o), "assign"), r.preserveTraceInfo(c), c;
    },
    tos: function () {
      var e, t, o, r;
      e = cc11001100_hook("e", +new Date() / 1e3 | 0, "assign"), o = cc11001100_hook("o", null != (t = cc11001100_hook("t", /\bdc_tos=([^;]*)(?:$|;)/.exec(document.cookie), "assign")) ? t[1] : void 0, "assign");
      try {
        r = cc11001100_hook("r", e - parseInt(o, 36), "assign");
      } catch (e) {
        void 0, r = cc11001100_hook("r", -1, "assign");
      }
      return document.cookie = cc11001100_hook("document.cookie", "dc_tos=" + e.toString(36) + " ; expires=" + new Date(1e3 * (e + 14400)).toGMTString() + " ; max-age=14400 ; path=/ ; domain=." + this.topDomain(window.location.host), "assign"), r;
    },
    topDomain: function (e) {
      return /\.?([a-z0-9\-]+\.[a-z0-9\-]+)(:\d+)?$/.exec(e)[1];
    },
    copyArr: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e.length; o++) t.push(e[o]);
      return t;
    },
    isView: function (e, t) {
      var o = cc11001100_hook("o", this, "var-init");
      if (!e) return !1;
      var r = cc11001100_hook("r", this.getElementBottom(e), "var-init"),
        n = cc11001100_hook("n", r + e.offsetHeight, "var-init");
      return a.VISIBLE == t ? o.scrollTop() < r && r < o.scrollTop() + o.windowHeight() || o.scrollTop() < n && n < o.scrollTop() + o.windowHeight() : a.SKIPPED_AND_VISIBLE == t ? r <= o.scrollTop() + o.windowHeight() || o.scrollTop() < r && r < o.scrollTop() + o.windowHeight() || o.scrollTop() < n && n < o.scrollTop() + o.windowHeight() : void 0;
    },
    scrollTop: function () {
      return Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    },
    windowHeight: function () {
      return "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight;
    },
    getElementTop: function (t) {
      if ("undefined" != typeof jQuery) return e(t).offset().top;
      var o = cc11001100_hook("o", t.offsetTop, "var-init");
      for (t = cc11001100_hook("t", t.offsetParent, "assign"); null != t;) o += cc11001100_hook("o", t.offsetTop, "assign"), t = cc11001100_hook("t", t.offsetParent, "assign");
      return o;
    },
    getElementBottom: function (t) {
      if ("undefined" != typeof jQuery) return e(t).offset().top + e(t).height();
      var o = cc11001100_hook("o", t.offsetTop, "var-init");
      for (t = cc11001100_hook("t", t.offsetParent, "assign"); null != t;) o += cc11001100_hook("o", t.offsetTop, "assign"), t = cc11001100_hook("t", t.offsetParent, "assign");
      return o;
    },
    url2Obj: function (e) {
      var t = cc11001100_hook("t", {}, "var-init"),
        o = cc11001100_hook("o", e.split("&"), "var-init");
      for (var r in o) t.hasOwnProperty(r) && (t[o[r].split("=")[0]] = cc11001100_hook("t[o[r].split(\"=\")[0]]", decodeURIComponent(o[r].split("=")[1]), "assign"));
      return t;
    },
    fixParamConTop: function (t, o) {
      return t.con.split(",top_") > -1 ? t : (t.con = cc11001100_hook("t.con", t.con + ",top_" + e(o).offset().top, "assign"), t);
    },
    urlParamsToObj: function (e) {
      var t = cc11001100_hook("t", {}, "var-init");
      return e.replace(/([^=&#]+)=([^&#]*)/g, function () {
        t[arguments[1]] = cc11001100_hook("t[arguments[1]]", arguments[2], "assign");
      }), t;
    },
    objToUrlParams: function (t) {
      var o = cc11001100_hook("o", "", "var-init");
      return e.each(t, function (e) {
        o += cc11001100_hook("o", "&" + e + "=" + t[e], "assign");
      }), o.substr(1);
    },
    trackOrderSource: function () {
      var e = cc11001100_hook("e", document.referrer, "var-init");
      if (e) {
        var t = cc11001100_hook("t", document.createElement("a"), "var-init");
        t.href = cc11001100_hook("t.href", e, "assign");
        var o = cc11001100_hook("o", ["passport", "order.csdn.net", "wx.tenpay.com", "cart.csdn.net"], "var-init"),
          n = cc11001100_hook("n", [/(^https:\/\/mall\.csdn\.net(:[0-9]{1,5})?\/cart$)/], "var-init"),
          i = cc11001100_hook("i", !1, "var-init");
        try {
          for (var c = cc11001100_hook("c", 0, "var-init"); c < o.length; c++) t.hostname.indexOf(o[c]) > -1 && (i = cc11001100_hook("i", !0, "assign"));
          for (var c = cc11001100_hook("c", 0, "var-init"); c < n.length; c++) n[c].test(e) && (i = cc11001100_hook("i", !0, "assign"));
        } catch (e) {
          i = cc11001100_hook("i", !1, "assign");
        }
        if (!i) {
          if (r.getCookie("c_ref") === e) return;
          t.hostname.indexOf(".csdn.net") > -1 ? (r.setCookie("c_pref", r.getCookie("c_ref")), r.setCookie("c_ref", e)) : (r.setCookie("c_pref", r.getCookie("c_ref")), r.setCookie("c_ref", e.split("?")[0]));
        }
      } else window.navigator.userAgent.toLowerCase().indexOf("csdn") < 0 && (r.setCookie("c_pref", "default"), r.setCookie("c_ref", "default"));
    },
    parseExtra: function (e) {
      if (!Object.prototype.hasOwnProperty.call(e, "extra")) return "";
      var t = cc11001100_hook("t", Object.prototype.toString.call(e.extra).slice(8, -1), "var-init");
      if ("Object" === t) return e.extra;
      if ("String" !== t || !e.extra) return {};
      try {
        return JSON.parse(e.extra);
      } catch (t) {
        void 0;
      }
    },
    assignExtra: function (t) {
      if (t && (t.extra || c.extra)) {
        var o = cc11001100_hook("o", r.parseExtra(t), "var-init");
        return o = cc11001100_hook("o", e.extend(!0, {}, c.extra || {}, o || {}), "assign"), JSON.stringify(o);
      }
    },
    getSortObjectMD5: function (e) {
      var o = cc11001100_hook("o", JSON.parse(JSON.stringify(e)), "var-init");
      if ("Object" !== Object.prototype.toString.call(o).slice(8, -1)) return "";
      try {
        o.APIVersion = cc11001100_hook("o.APIVersion", t.API_VERSION, "assign");
        var r = cc11001100_hook("r", [], "var-init");
        for (var n in o) o.hasOwnProperty(n) && r.push(n);
        r = cc11001100_hook("r", r.sort(), "assign");
        var i = cc11001100_hook("i", r.reduce(function (e, t) {
          return e += cc11001100_hook("e", "&" + t + "=" + o[t], "assign");
        }, "").substring(1), "var-init");
        return csdn.reportCryptoJS.MD5(i).toString();
      } catch (e) {
        return void 0, "";
      }
    },
    reportScroll: function (t) {
      var o = cc11001100_hook("o", e.extend(!0, {}, c, t), "var-init");
      try {
        var i = cc11001100_hook("i", r.assignExtra(t || {}), "var-init");
        i && (o.extra = cc11001100_hook("o.extra", i, "assign"));
      } catch (e) {
        t && t.extra && (o.extra = cc11001100_hook("o.extra", t.extra, "assign")), void 0;
      }
      o.tos = cc11001100_hook("o.tos", r.tos(), "assign"), o.adb = cc11001100_hook("o.adb", r.getCookie("c_adb") || 0, "assign"), o.curl = cc11001100_hook("o.curl", window.location.href, "assign");
      var a = cc11001100_hook("a", r.getFuzzyCookie("c_"), "var-init");
      a && (o.cCookie = cc11001100_hook("o.cCookie", a, "assign")), o.t = cc11001100_hook("o.t", r.getTimestamp(), "assign"), o.screen = cc11001100_hook("o.screen", r.getScreen(), "assign"), o.un = cc11001100_hook("o.un", r.getCookie("UN") || r.getCookie("UserName"), "assign"), o.urn = cc11001100_hook("o.urn", f || r.guid(), "assign"), o.vType = cc11001100_hook("o.vType", r.getCookie("p_uid") || "", "assign"), delete o.cfg, delete o.dest, e.ajax({
        url: cc11001100_hook("url", s[n.SCROLL], "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !1, "object-key-init")
        },
        contentType: cc11001100_hook("contentType", "text/plain;charset=UTF-8", "object-key-init"),
        data: cc11001100_hook("data", o, "object-key-init"),
        success: function () {},
        error: function () {
          void 0;
        }
      });
    },
    windowFocusChange: function (e) {
      "loading" !== document.readyState ? g = cc11001100_hook("g", document.hasFocus(), "assign") : window.addEventListener("DOMContentLoaded", function () {
        g = cc11001100_hook("g", document.hasFocus(), "assign"), e();
      }, !0);
      var t = function (o) {
        o.target === window && (g = cc11001100_hook("g", !0, "assign"), e()), window.removeEventListener("focus", t, !0);
      };
      return window.addEventListener("focus", t, !0), g && e(), g;
    }
  }, "assign"), o = cc11001100_hook("o", {
    timer: cc11001100_hook("timer", 0, "object-key-init"),
    checkTimer: cc11001100_hook("checkTimer", 0, "object-key-init"),
    getFullSpm: function (e) {
      var t = cc11001100_hook("t", e.split(".").length, "var-init");
      if (2 === t || 3 === t) {
        var o = cc11001100_hook("o", document.querySelector('meta[name="report"]'), "var-init"),
          r = cc11001100_hook("r", o && o.getAttribute("content") || "{}", "var-init"),
          n = cc11001100_hook("n", JSON.parse(r), "var-init");
        return n.spm ? n.spm + "." + e : e;
      }
      return e;
    },
    reportUserAction: function (t, o) {
      var n = cc11001100_hook("n", this, "var-init");
      t = cc11001100_hook("t", t || ["1px"], "assign"), h = cc11001100_hook("h", !1, "assign"), r.windowFocusChange(function () {
        g && !h && (r.reportScroll({
          eleTop: cc11001100_hook("eleTop", 1, "object-key-init")
        }), h = cc11001100_hook("h", !0, "assign"));
      }), e(function () {
        setTimeout(function () {
          n.reportPercent(function (e) {
            h || (r.reportScroll({
              eleTop: cc11001100_hook("eleTop", e, "object-key-init")
            }), h = cc11001100_hook("h", !0, "assign"));
          }, {
            scrollBar: cc11001100_hook("scrollBar", !0, "object-key-init"),
            range: cc11001100_hook("range", t, "object-key-init"),
            el: cc11001100_hook("el", o || "", "object-key-init"),
            scope: cc11001100_hook("scope", "tenPrecentScrollEvent", "object-key-init")
          });
        }, 800);
      });
    },
    reportPercent: function (t, o) {
      o = cc11001100_hook("o", o || {}, "assign");
      for (var n = cc11001100_hook("n", o.range || [25, 50, 75, 100], "var-init"), i = cc11001100_hook("i", {}, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < n.length; c++) i[n[c]] = cc11001100_hook("i[n[c]]", !1, "assign");
      o.scope = cc11001100_hook("o.scope", o.scope || "precentScrollEvent", "assign"), !o.el && window[o.scope] && e(o.el || window).off("scroll", window[o.scope]), window[o.scope] = cc11001100_hook("window[o.scope]", function () {
        var c,
          a = cc11001100_hook("a", 0, "var-init"),
          s = cc11001100_hook("s", 0, "var-init"),
          d = cc11001100_hook("d", !!o.scrollBar || !1, "var-init");
        if (o.el) {
          var u = cc11001100_hook("u", e(o.el), "var-init");
          u.length && (c = cc11001100_hook("c", d ? u.scrollTop() : u.scrollTop() + u.height(), "assign"), a = cc11001100_hook("a", c / u[0].scrollHeight * 100, "assign"));
        } else c = cc11001100_hook("c", d ? r.scrollTop() : r.scrollTop() + r.windowHeight(), "assign"), a = cc11001100_hook("a", c / document.documentElement.scrollHeight * 100, "assign");
        for (var l = cc11001100_hook("l", 0, "var-init"); l < n.length; l++) {
          var p = cc11001100_hook("p", n[l], "var-init"),
            f = cc11001100_hook("f", a, "var-init");
          if ("string" == typeof p && p.indexOf("px") > -1 && (p = cc11001100_hook("p", +p.replace("px", ""), "assign"), f = cc11001100_hook("f", c, "assign")), f >= p) {
            if (l === n.length - 1) {
              s = cc11001100_hook("s", p, "assign");
              break;
            }
            if (f < ("string" == typeof n[l + 1] && n[l + 1].indexOf("px") > -1 ? +n[l + 1].replace("px", "") : n[l + 1])) {
              s = cc11001100_hook("s", p, "assign");
              break;
            }
          }
        }
        if (s) for (var g = cc11001100_hook("g", 0, "var-init"); g < n.length; g++) {
          var h = cc11001100_hook("h", n[g], "var-init"),
            m = cc11001100_hook("m", "string" == typeof h && h.indexOf("px") > -1 ? +h.replace("px", "") : h, "var-init");
          m <= s && !i[h] && (i[h] = cc11001100_hook("i[h]", !0, "assign"), t && t(m));
        }
        n.every(function (e) {
          return i[e];
        }) && e(o.el || window).off("scroll", window[o.scope]) && delete window[o.scope];
      }, "assign"), window[o.scope](), e(o.el || window).on("scroll", window[o.scope]);
    },
    reportServerLts: function (e, t) {
      if (e && t) {
        if (e === n.VIEW || e === n.DELAY_VIEW) {
          var o = cc11001100_hook("o", window.navigator.userAgent, "var-init"),
            i = cc11001100_hook("i", "PC", "var-init");
          o.toLowerCase().indexOf("csdnedu") > -1 ? i = cc11001100_hook("i", "CSDNEDU", "assign") : o.toLowerCase().indexOf("csdnapp") > -1 ? i = cc11001100_hook("i", "CSDNApp", "assign") : o.toLowerCase().indexOf("mobile") > -1 && (i = cc11001100_hook("i", "mobile", "assign")), t.platform = cc11001100_hook("t.platform", i, "assign"), t.log_id = cc11001100_hook("t.log_id", r.getCookie("log_Id_" + n.VIEW), "assign");
        }
        r.analyticsWriteLog("VIEW", t);
      }
    },
    reportServer: function (o, c) {
      r.refreshDcSessionId(), void 0 !== o && void 0 !== c && i.push(c);
      var a = cc11001100_hook("a", r.copyArr(i), "var-init");
      if (0 != a.length) {
        i = cc11001100_hook("i", [], "assign");
        var d = cc11001100_hook("d", {
          __source__: cc11001100_hook("__source__", "csdn", "object-key-init"),
          __logs__: cc11001100_hook("__logs__", a, "object-key-init")
        }, "var-init");
        if (r.setLogIdCookie(n.VIEW), o === n.VIEW || o === n.DELAY_VIEW) {
          var u = cc11001100_hook("u", window.navigator.userAgent, "var-init"),
            l = cc11001100_hook("l", "PC", "var-init");
          u.toLowerCase().indexOf("csdnedu") > -1 ? l = cc11001100_hook("l", "CSDNEDU", "assign") : u.toLowerCase().indexOf("csdnapp") > -1 ? l = cc11001100_hook("l", "CSDNApp", "assign") : u.toLowerCase().indexOf("mobile") > -1 && (l = cc11001100_hook("l", "mobile", "assign")), d.__tags__ = cc11001100_hook("d.__tags__", {
            useragent: cc11001100_hook("useragent", u, "object-key-init"),
            platform: cc11001100_hook("platform", l, "object-key-init"),
            log_id: cc11001100_hook("log_id", r.getCookie("log_Id_" + n.VIEW), "object-key-init")
          }, "assign");
        }
        e.ajax({
          url: cc11001100_hook("url", s[n.VIEW], "object-key-init"),
          type: cc11001100_hook("type", "POST", "object-key-init"),
          crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !1, "object-key-init")
          },
          contentType: cc11001100_hook("contentType", "text/plain;charset=UTF-8", "object-key-init"),
          headers: {
            "x-log-apiversion": cc11001100_hook("x-log-apiversion", t.API_VERSION, "object-key-init"),
            "x-log-bodyrawsize": cc11001100_hook("x-log-bodyrawsize", "1234", "object-key-init")
          },
          data: cc11001100_hook("data", JSON.stringify(d), "object-key-init"),
          success: function () {},
          error: function () {
            void 0;
          }
        });
      }
    },
    reportServerDelay: function (e, o) {
      i.push(o);
      var r = cc11001100_hook("r", this, "var-init");
      r.timer && clearTimeout(r.timer), r.timer = cc11001100_hook("r.timer", setTimeout(function () {
        r.reportServer(n.DELAY_VIEW);
      }, t.DELAY), "assign");
    },
    reportView: function (t, o, i) {
      if (!t) return void void 0;
      t.spm && (t.spm = cc11001100_hook("t.spm", this.getFullSpm(t.spm), "assign"));
      var a = cc11001100_hook("a", e.extend(!0, {}, c, t), "var-init");
      try {
        var s = cc11001100_hook("s", r.assignExtra(t), "var-init");
        s && (a.extra = cc11001100_hook("a.extra", s, "assign"));
      } catch (e) {
        t && t.extra && (a.extra = cc11001100_hook("a.extra", t.extra, "assign")), void 0;
      }
      var d = cc11001100_hook("d", r.getFuzzyCookie("c_"), "var-init");
      a.t = cc11001100_hook("a.t", r.getTimestamp() + "", "assign"), a.eleTop = cc11001100_hook("a.eleTop", o ? o.offset().top + "" : "", "assign"), delete a.cfg, d && (a.cCookie = cc11001100_hook("a.cCookie", d, "assign")), a.__time__ = cc11001100_hook("a.__time__", r.getTimestamp(), "assign"), a.curl = cc11001100_hook("a.curl", window.location.href, "assign"), this.reportServerLts(n.VIEW, a), void 0 === i ? this.reportServerDelay(n.VIEW, a) : this.reportServer(n.VIEW, a), "function" == typeof csdn.afterReportView && csdn.afterReportView(o, t);
    },
    reportClick: function (t, o) {
      r.refreshDcSessionId();
      var i = cc11001100_hook("i", e.extend(!0, {}, c, t), "var-init");
      t.spm || (i.spm = cc11001100_hook("i.spm", "", "assign"));
      try {
        var a = cc11001100_hook("a", r.assignExtra(t), "var-init");
        a && (i.extra = cc11001100_hook("i.extra", a, "assign"));
      } catch (e) {
        t && t.extra && (i.extra = cc11001100_hook("i.extra", t.extra, "assign")), void 0;
      }
      i.spm = cc11001100_hook("i.spm", this.getFullSpm(i.spm), "assign"), i.t = cc11001100_hook("i.t", r.getTimestamp(), "assign"), i.elePath = cc11001100_hook("i.elePath", o ? r.getXPath(o[0]) + "" : "", "assign"), i.eleTop = cc11001100_hook("i.eleTop", void 0 !== i.eleTop ? i.eleTop : o ? o.offset().top + "" : "", "assign"), i.trace && r.preserveTraceInfo(i);
      var d = cc11001100_hook("d", r.getFuzzyCookie("c_"), "var-init");
      d && (i.cCookie = cc11001100_hook("i.cCookie", d, "assign")), i.curl = cc11001100_hook("i.curl", window.location.href, "assign"), delete i.cfg, r.setLogIdCookie(n.CLICK), i.log_id = cc11001100_hook("i.log_id", r.getCookie("log_Id_" + n.CLICK), "assign"), i.sign = cc11001100_hook("i.sign", r.getSortObjectMD5(i), "assign"), r.analyticsWriteLog("CLICK", i), e.ajax({
        url: cc11001100_hook("url", s[n.CLICK], "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !1, "object-key-init")
        },
        contentType: cc11001100_hook("contentType", "text/plain;charset=UTF-8", "object-key-init"),
        data: cc11001100_hook("data", i, "object-key-init"),
        success: function () {},
        error: function () {
          void 0;
        }
      });
    },
    reportPageView: function (t) {
      var o = cc11001100_hook("o", e.extend(!0, {}, c, t), "var-init"),
        i = cc11001100_hook("i", this, "var-init");
      try {
        var a = cc11001100_hook("a", r.assignExtra(t || {}), "var-init");
        a && (o.extra = cc11001100_hook("o.extra", a, "assign"));
      } catch (e) {
        t && t.extra && (o.extra = cc11001100_hook("o.extra", t.extra, "assign")), void 0;
      }
      d && d.percent && (u && clearTimeout(u), u = cc11001100_hook("u", setTimeout(function () {
        i.reportPercent(function (e) {
          i.reportClick({
            spm: cc11001100_hook("spm", "3001.7333", "object-key-init"),
            eleTop: cc11001100_hook("eleTop", e, "object-key-init")
          });
        });
      }, 1e3), "assign")), this.reportUserAction(), f = cc11001100_hook("f", r.guid(), "assign"), o.tos = cc11001100_hook("o.tos", r.tos(), "assign"), o.adb = cc11001100_hook("o.adb", r.getCookie("c_adb") || 0, "assign"), o.curl = cc11001100_hook("o.curl", window.location.href, "assign");
      var l = cc11001100_hook("l", r.getFuzzyCookie("c_"), "var-init");
      l && (o.cCookie = cc11001100_hook("o.cCookie", l, "assign")), o.t = cc11001100_hook("o.t", r.getTimestamp(), "assign"), o.screen = cc11001100_hook("o.screen", r.getScreen(), "assign"), o.un = cc11001100_hook("o.un", r.getCookie("UN") || r.getCookie("UserName"), "assign"), o.urn = cc11001100_hook("o.urn", f, "assign"), o.vType = cc11001100_hook("o.vType", r.getCookie("p_uid") || "", "assign"), delete o.cfg, delete o.dest, r.setLogIdCookie(n.PV), o.log_id = cc11001100_hook("o.log_id", r.getCookie("log_Id_" + n.PV), "assign"), o.sign = cc11001100_hook("o.sign", r.getSortObjectMD5(o), "assign"), r.analyticsWriteLog("PV", o), e.ajax({
        url: cc11001100_hook("url", s[n.PV], "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !1, "object-key-init")
        },
        contentType: cc11001100_hook("contentType", "text/plain;charset=UTF-8", "object-key-init"),
        data: cc11001100_hook("data", o, "object-key-init"),
        success: function () {},
        error: function () {
          void 0;
        }
      });
    },
    viewCheck: function () {
      var t = cc11001100_hook("t", this, "var-init");
      clearTimeout(t.checkTimer), t.checkTimer = cc11001100_hook("t.checkTimer", setTimeout(function () {
        r.refreshDcSessionId(), e("[data-report-view]").each(function () {
          var o = cc11001100_hook("o", e(this), "var-init"),
            n = cc11001100_hook("n", o.data("reportView"), "var-init"),
            i = cc11001100_hook("i", e.extend({}, c, n), "var-init");
          n.spm || (i.spm = cc11001100_hook("i.spm", "", "assign")), i.spm = cc11001100_hook("i.spm", t.getFullSpm(i.spm), "assign"), i.curl = cc11001100_hook("i.curl", window.location.href, "assign"), r.isView(o.get(0), i.cfg.viewStrategy) && (csdn.report.reportView(i, o), o.removeData("reportView"), o.removeAttr("data-report-view"));
        });
      }, 200), "assign");
    },
    isView: function (e) {
      return r.isView(e);
    },
    addSpmToHref: function (e) {
      var t = cc11001100_hook("t", e, "var-init"),
        o = cc11001100_hook("o", this, "var-init"),
        n = cc11001100_hook("n", t.data("reportQuery") || "", "var-init"),
        i = cc11001100_hook("i", t.length && t[0].hash ? t[0].hash.split("#").map(function (e) {
          return e.split("?")[0];
        }) : [], "var-init"),
        c = cc11001100_hook("c", i.length && -1 === i[i.length - 1].indexOf("/"), "var-init");
      if (n) {
        var a = cc11001100_hook("a", t.attr("href"), "var-init"),
          s = cc11001100_hook("s", a, "var-init"),
          d = cc11001100_hook("d", {}, "var-init");
        -1 !== a.indexOf("?") && (s = cc11001100_hook("s", a.split("?")[0], "assign"), d = cc11001100_hook("d", r.urlParamsToObj(a.split("?")[1]), "assign")), c && (s = cc11001100_hook("s", a.split("#")[0], "assign"), -1 !== s.indexOf("?") && (d = cc11001100_hook("d", Object.assign({}, d, r.urlParamsToObj(s.split("?")[1])), "assign"), s = cc11001100_hook("s", a.split("?")[0], "assign")));
        var u = cc11001100_hook("u", r.urlParamsToObj(n), "var-init");
        if ((n.indexOf("spm") > -1 || n.indexOf("SPM") > -1) && (u.spm = cc11001100_hook("u.spm", u.spm || u.SPM, "assign"), u.spm = cc11001100_hook("u.spm", o.getFullSpm(u.spm), "assign")), c) {
          var l = cc11001100_hook("l", i.pop(), "var-init");
          s += cc11001100_hook("s", i.join("#") + "?" + r.objToUrlParams(Object.assign(d, u)) + "#" + l, "assign");
        } else s += cc11001100_hook("s", "?" + r.objToUrlParams(Object.assign(d, u)), "assign");
        t.attr("href", s);
      }
    }
  }, "assign"), void 0 === window.csdn && (window.csdn = cc11001100_hook("window.csdn", {}, "assign")), csdn.report) return void void 0;
  r.trackOrderSource(), window.csdn.report = cc11001100_hook("window.csdn.report", o, "assign"), c = cc11001100_hook("c", r.initData(), "assign"), c.disabled || csdn.report.reportPageView(), e(function () {
    var t = cc11001100_hook("t", csdn.report, "var-init");
    e(document).on("click", "[data-report-click]", function () {
      var o = cc11001100_hook("o", e(this).data("reportClick"), "var-init");
      t.reportClick(o, e(this));
    }), t.viewCheck(e("[data-report-view]")), e(window).on("scroll", function () {
      t.viewCheck(e("[data-report-view]"));
    }), e(document).on("contextmenu", "a[data-report-query]", function () {
      t.addSpmToHref(e(this));
    }), e(document).on("click", "a[data-report-query]", function () {
      t.addSpmToHref(e(this));
    }), e(document).on("click", "a[href]", function () {
      var o = cc11001100_hook("o", e(this), "var-init"),
        r = cc11001100_hook("r", o.attr("href"), "var-init");
      if (function (e) {
        return !(!/^https:\/\/|^http:\/\//gi.test(e) || "/" === e || e.indexOf(".csdn.net") > -1 || e.indexOf(".iteye.com") > -1);
      }(r)) {
        var n = cc11001100_hook("n", {
          mod: cc11001100_hook("mod", "1583921753_001", "object-key-init"),
          dest: cc11001100_hook("dest", r, "object-key-init")
        }, "var-init");
        t.reportClick(n, o);
      }
    });
  });
}(jQuery);