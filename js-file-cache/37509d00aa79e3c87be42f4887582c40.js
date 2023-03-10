define("@baidu/pc-tts-player/dist/tts.amd", ["exports"], function (t) {
  "use strict";

  function e(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (; t.parentElement;) {
      if (t.classList.contains(e)) return !0;
      t = cc11001100_hook("t", t.parentElement, "assign");
    }
    return !1;
  }
  function o(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    (function (t, e) {
      for (var o = cc11001100_hook("o", t.childNodes, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < o.length; i++) if (o[i] === e) return !0;
      return !1;
    })(t, e) && t.removeChild(e);
  }
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    return void 0 === t && (t = cc11001100_hook("t", 0, "assign")), new Promise(function (e) {
      window.setTimeout(e, t);
    });
  }
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    "function" == typeof t.stopPropagation ? t.stopPropagation() : t.cancelBubble = cc11001100_hook("t.cancelBubble", !0, "assign");
  }
  function r(t, e, i) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return void 0 === e && (e = cc11001100_hook("e", {}, "assign")), void 0 === i && (i = cc11001100_hook("i", 5e3, "assign")), new Promise(function (n, r) {
      t = cc11001100_hook("t", function (t) {
        return t + (t.indexOf("?") >= 0 ? "&" : "?");
      }(t), "assign");
      var A = cc11001100_hook("A", "JSONP_" + Qu++, "var-init");
      window[A] = cc11001100_hook("window[A]", function (t) {
        n(t), clearTimeout(s), delete window[A], o(document.body, c);
      }, "assign");
      var a = cc11001100_hook("a", al(MA(MA({}, e), {
          callback: cc11001100_hook("callback", A, "object-key-init")
        })), "var-init"),
        s = cc11001100_hook("s", window.setTimeout(function () {
          o(document.body, c), r({
            errorType: cc11001100_hook("errorType", ol.NET_WORK_ERROR, "object-key-init"),
            data: {
              url: cc11001100_hook("url", t, "object-key-init")
            }
          });
        }, i), "var-init");
      t += cc11001100_hook("t", a, "assign");
      var c = cc11001100_hook("c", document.createElement("script"), "var-init");
      c.src = cc11001100_hook("c.src", t, "assign"), document.body.appendChild(c);
    });
  }
  var A = cc11001100_hook("A", "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, "var-init"),
    a = function (t) {
      return t && t.Math == Math && t;
    },
    s = cc11001100_hook("s", a("object" == typeof globalThis && globalThis) || a("object" == typeof window && window) || a("object" == typeof self && self) || a("object" == typeof A && A) || function () {
      return this;
    }() || Function("return this")(), "var-init"),
    c = cc11001100_hook("c", {
      exports: {}
    }, "var-init"),
    l = cc11001100_hook("l", s, "var-init"),
    u = function (t, e) {
      try {
        Object.defineProperty(l, t, {
          value: cc11001100_hook("value", e, "object-key-init"),
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init")
        });
      } catch (o) {
        l[t] = cc11001100_hook("l[t]", e, "assign");
      }
      return e;
    },
    h = cc11001100_hook("h", u, "var-init"),
    p = cc11001100_hook("p", "__core-js_shared__", "var-init"),
    d = cc11001100_hook("d", s[p] || h(p, {}), "var-init"),
    f = cc11001100_hook("f", d, "var-init");
  (c.exports = cc11001100_hook("c.exports", function (t, e) {
    return f[t] || (f[t] = cc11001100_hook("f[t]", void 0 !== e ? e : {}, "assign"));
  }, "assign"))("versions", []).push({
    version: cc11001100_hook("version", "3.16.2", "object-key-init"),
    mode: cc11001100_hook("mode", "global", "object-key-init"),
    copyright: cc11001100_hook("copyright", "© 2021 Denis Pushkarev (zloirock.ru)", "object-key-init")
  });
  var g,
    m,
    v = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    E = cc11001100_hook("E", v, "var-init"),
    y = function (t) {
      return Object(E(t));
    },
    w = cc11001100_hook("w", y, "var-init"),
    b = cc11001100_hook("b", {}.hasOwnProperty, "var-init"),
    C = cc11001100_hook("C", Object.hasOwn || function (t, e) {
      return b.call(w(t), e);
    }, "var-init"),
    x = cc11001100_hook("x", 0, "var-init"),
    I = cc11001100_hook("I", Math.random(), "var-init"),
    _ = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++x + I).toString(36);
    },
    T = cc11001100_hook("T", s, "var-init"),
    R = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    B = function (t, e) {
      return arguments.length < 2 ? R(T[t]) : T[t] && T[t][e];
    },
    O = cc11001100_hook("O", B("navigator", "userAgent") || "", "var-init"),
    S = cc11001100_hook("S", s, "var-init"),
    U = cc11001100_hook("U", O, "var-init"),
    k = cc11001100_hook("k", S.process, "var-init"),
    L = cc11001100_hook("L", S.Deno, "var-init"),
    P = cc11001100_hook("P", k && k.versions || L && L.version, "var-init"),
    V = cc11001100_hook("V", P && P.v8, "var-init");
  V ? m = cc11001100_hook("m", (g = cc11001100_hook("g", V.split("."), "assign"))[0] < 4 ? 1 : g[0] + g[1], "assign") : U && (!(g = cc11001100_hook("g", U.match(/Edge\/(\d+)/), "assign")) || g[1] >= 74) && (g = cc11001100_hook("g", U.match(/Chrome\/(\d+)/), "assign")) && (m = cc11001100_hook("m", g[1], "assign"));
  var D = cc11001100_hook("D", m && +m, "var-init"),
    Q = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    N = cc11001100_hook("N", D, "var-init"),
    M = cc11001100_hook("M", Q, "var-init"),
    j = cc11001100_hook("j", !!Object.getOwnPropertySymbols && !M(function () {
      var t = cc11001100_hook("t", Symbol(), "var-init");
      return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && N && 41 > N;
    }), "var-init"),
    K = cc11001100_hook("K", j && !Symbol.sham && "symbol" == typeof Symbol.iterator, "var-init"),
    q = cc11001100_hook("q", s, "var-init"),
    F = cc11001100_hook("F", c.exports, "var-init"),
    Z = cc11001100_hook("Z", C, "var-init"),
    G = cc11001100_hook("G", _, "var-init"),
    Y = cc11001100_hook("Y", j, "var-init"),
    W = cc11001100_hook("W", K, "var-init"),
    J = cc11001100_hook("J", F("wks"), "var-init"),
    H = cc11001100_hook("H", q.Symbol, "var-init"),
    X = cc11001100_hook("X", W ? H : H && H.withoutSetter || G, "var-init"),
    z = function (t) {
      return Z(J, t) && (Y || "string" == typeof J[t]) || (J[t] = cc11001100_hook("J[t]", Y && Z(H, t) ? H[t] : X("Symbol." + t), "assign")), J[t];
    },
    $ = cc11001100_hook("$", {}, "var-init");
  $[z("toStringTag")] = cc11001100_hook("$[z(\"toStringTag\")]", "z", "assign");
  var te = cc11001100_hook("te", "[object z]" === String($), "var-init"),
    ee = cc11001100_hook("ee", {
      exports: {}
    }, "var-init"),
    oe = cc11001100_hook("oe", !Q(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1];
    }), "var-init"),
    ie = cc11001100_hook("ie", {}, "var-init"),
    ne = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    re = cc11001100_hook("re", ne, "var-init"),
    Ae = cc11001100_hook("Ae", s.document, "var-init"),
    ae = cc11001100_hook("ae", re(Ae) && re(Ae.createElement), "var-init"),
    se = function (t) {
      return ae ? Ae.createElement(t) : {};
    },
    ce = cc11001100_hook("ce", se, "var-init"),
    le = cc11001100_hook("le", !oe && !Q(function () {
      return 7 != Object.defineProperty(ce("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    }), "var-init"),
    ue = cc11001100_hook("ue", ne, "var-init"),
    he = function (t) {
      if (!ue(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    pe = cc11001100_hook("pe", B, "var-init"),
    de = cc11001100_hook("de", K ? function (t) {
      return "symbol" == typeof t;
    } : function (t) {
      var e = cc11001100_hook("e", pe("Symbol"), "var-init");
      return "function" == typeof e && Object(t) instanceof e;
    }, "var-init"),
    fe = cc11001100_hook("fe", ne, "var-init"),
    ge = cc11001100_hook("ge", ne, "var-init"),
    me = cc11001100_hook("me", de, "var-init"),
    ve = function (t, e) {
      var o, i;
      if ("string" === e && "function" == typeof (o = cc11001100_hook("o", t.toString, "assign")) && !fe(i = cc11001100_hook("i", o.call(t), "assign"))) return i;
      if ("function" == typeof (o = cc11001100_hook("o", t.valueOf, "assign")) && !fe(i = cc11001100_hook("i", o.call(t), "assign"))) return i;
      if ("string" !== e && "function" == typeof (o = cc11001100_hook("o", t.toString, "assign")) && !fe(i = cc11001100_hook("i", o.call(t), "assign"))) return i;
      throw TypeError("Can't convert object to primitive value");
    },
    Ee = cc11001100_hook("Ee", z("toPrimitive"), "var-init"),
    ye = function (t, e) {
      if (!ge(t) || me(t)) return t;
      var o,
        i = cc11001100_hook("i", t[Ee], "var-init");
      if (void 0 !== i) {
        if (void 0 === e && (e = cc11001100_hook("e", "default", "assign")), o = cc11001100_hook("o", i.call(t, e), "assign"), !ge(o) || me(o)) return o;
        throw TypeError("Can't convert object to primitive value");
      }
      return void 0 === e && (e = cc11001100_hook("e", "number", "assign")), ve(t, e);
    },
    we = cc11001100_hook("we", de, "var-init"),
    be = function (t) {
      var e = cc11001100_hook("e", ye(t, "string"), "var-init");
      return we(e) ? e : String(e);
    },
    Ce = cc11001100_hook("Ce", oe, "var-init"),
    xe = cc11001100_hook("xe", le, "var-init"),
    Ie = cc11001100_hook("Ie", he, "var-init"),
    _e = cc11001100_hook("_e", be, "var-init"),
    Te = cc11001100_hook("Te", Object.defineProperty, "var-init");
  ie.f = cc11001100_hook("ie.f", Ce ? Te : function (t, e, o) {
    if (Ie(t), e = cc11001100_hook("e", _e(e), "assign"), Ie(o), xe) try {
      return Te(t, e, o);
    } catch (t) {}
    if ("get" in o || "set" in o) throw TypeError("Accessors not supported");
    return "value" in o && (t[e] = cc11001100_hook("t[e]", o.value, "assign")), t;
  }, "assign");
  var Re = function (t, e) {
      return {
        enumerable: cc11001100_hook("enumerable", !(1 & t), "object-key-init"),
        configurable: cc11001100_hook("configurable", !(2 & t), "object-key-init"),
        writable: cc11001100_hook("writable", !(4 & t), "object-key-init"),
        value: cc11001100_hook("value", e, "object-key-init")
      };
    },
    Be = cc11001100_hook("Be", ie, "var-init"),
    Oe = cc11001100_hook("Oe", Re, "var-init"),
    Se = cc11001100_hook("Se", oe ? function (t, e, o) {
      return Be.f(t, e, Oe(1, o));
    } : function (t, e, o) {
      return t[e] = cc11001100_hook("t[e]", o, "assign"), t;
    }, "var-init"),
    Ue = cc11001100_hook("Ue", d, "var-init"),
    ke = cc11001100_hook("ke", Function.toString, "var-init");
  "function" != typeof Ue.inspectSource && (Ue.inspectSource = cc11001100_hook("Ue.inspectSource", function (t) {
    return ke.call(t);
  }, "assign"));
  var Le,
    Pe,
    Ve,
    De = cc11001100_hook("De", Ue.inspectSource, "var-init"),
    Qe = cc11001100_hook("Qe", De, "var-init"),
    Ne = cc11001100_hook("Ne", s.WeakMap, "var-init"),
    Me = cc11001100_hook("Me", "function" == typeof Ne && /native code/.test(Qe(Ne)), "var-init"),
    je = cc11001100_hook("je", c.exports, "var-init"),
    Ke = cc11001100_hook("Ke", _, "var-init"),
    qe = cc11001100_hook("qe", je("keys"), "var-init"),
    Fe = function (t) {
      return qe[t] || (qe[t] = cc11001100_hook("qe[t]", Ke(t), "assign"));
    },
    Ze = cc11001100_hook("Ze", {}, "var-init"),
    Ge = cc11001100_hook("Ge", Me, "var-init"),
    Ye = cc11001100_hook("Ye", ne, "var-init"),
    We = cc11001100_hook("We", Se, "var-init"),
    Je = cc11001100_hook("Je", C, "var-init"),
    He = cc11001100_hook("He", d, "var-init"),
    Xe = cc11001100_hook("Xe", Fe, "var-init"),
    ze = cc11001100_hook("ze", Ze, "var-init"),
    $e = cc11001100_hook("$e", "Object already initialized", "var-init"),
    to = cc11001100_hook("to", s.WeakMap, "var-init");
  if (Ge || He.state) {
    var eo = cc11001100_hook("eo", He.state || (He.state = cc11001100_hook("He.state", new to(), "assign")), "var-init"),
      oo = cc11001100_hook("oo", eo.get, "var-init"),
      io = cc11001100_hook("io", eo.has, "var-init"),
      no = cc11001100_hook("no", eo.set, "var-init");
    Le = cc11001100_hook("Le", function (t, e) {
      if (io.call(eo, t)) throw new TypeError($e);
      return e.facade = cc11001100_hook("e.facade", t, "assign"), no.call(eo, t, e), e;
    }, "assign"), Pe = cc11001100_hook("Pe", function (t) {
      return oo.call(eo, t) || {};
    }, "assign"), Ve = cc11001100_hook("Ve", function (t) {
      return io.call(eo, t);
    }, "assign");
  } else {
    var ro = cc11001100_hook("ro", Xe("state"), "var-init");
    ze[ro] = cc11001100_hook("ze[ro]", !0, "assign"), Le = cc11001100_hook("Le", function (t, e) {
      if (Je(t, ro)) throw new TypeError($e);
      return e.facade = cc11001100_hook("e.facade", t, "assign"), We(t, ro, e), e;
    }, "assign"), Pe = cc11001100_hook("Pe", function (t) {
      return Je(t, ro) ? t[ro] : {};
    }, "assign"), Ve = cc11001100_hook("Ve", function (t) {
      return Je(t, ro);
    }, "assign");
  }
  var Ao = cc11001100_hook("Ao", {
      set: cc11001100_hook("set", Le, "object-key-init"),
      get: cc11001100_hook("get", Pe, "object-key-init"),
      has: cc11001100_hook("has", Ve, "object-key-init"),
      enforce: function (t) {
        return Ve(t) ? Pe(t) : Le(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var o;
          if (!Ye(e) || (o = cc11001100_hook("o", Pe(e), "assign")).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return o;
        };
      }
    }, "var-init"),
    ao = cc11001100_hook("ao", s, "var-init"),
    so = cc11001100_hook("so", Se, "var-init"),
    co = cc11001100_hook("co", C, "var-init"),
    lo = cc11001100_hook("lo", u, "var-init"),
    uo = cc11001100_hook("uo", De, "var-init"),
    ho = cc11001100_hook("ho", Ao.get, "var-init"),
    po = cc11001100_hook("po", Ao.enforce, "var-init"),
    fo = cc11001100_hook("fo", String(String).split("String"), "var-init");
  (ee.exports = cc11001100_hook("ee.exports", function (t, e, o, i) {
    var n,
      r = cc11001100_hook("r", !!i && !!i.unsafe, "var-init"),
      A = cc11001100_hook("A", !!i && !!i.enumerable, "var-init"),
      a = cc11001100_hook("a", !!i && !!i.noTargetGet, "var-init");
    "function" == typeof o && ("string" != typeof e || co(o, "name") || so(o, "name", e), (n = cc11001100_hook("n", po(o), "assign")).source || (n.source = cc11001100_hook("n.source", fo.join("string" == typeof e ? e : ""), "assign"))), t !== ao ? (r ? !a && t[e] && (A = cc11001100_hook("A", !0, "assign")) : delete t[e], A ? t[e] = cc11001100_hook("t[e]", o, "assign") : so(t, e, o)) : A ? t[e] = cc11001100_hook("t[e]", o, "assign") : lo(e, o);
  }, "assign"))(Function.prototype, "toString", function () {
    return "function" == typeof this && ho(this).source || uo(this);
  });
  var go = cc11001100_hook("go", {}.toString, "var-init"),
    mo = function (t) {
      return go.call(t).slice(8, -1);
    },
    vo = cc11001100_hook("vo", te, "var-init"),
    Eo = cc11001100_hook("Eo", mo, "var-init"),
    yo = cc11001100_hook("yo", z("toStringTag"), "var-init"),
    wo = cc11001100_hook("wo", "Arguments" == Eo(function () {
      return arguments;
    }()), "var-init"),
    bo = cc11001100_hook("bo", vo ? Eo : function (t) {
      var e, o, i;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (o = cc11001100_hook("o", function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = cc11001100_hook("e", Object(t), "assign"), yo), "assign")) ? o : wo ? Eo(e) : "Object" == (i = cc11001100_hook("i", Eo(e), "assign")) && "function" == typeof e.callee ? "Arguments" : i;
    }, "var-init"),
    Co = cc11001100_hook("Co", bo, "var-init"),
    xo = cc11001100_hook("xo", te ? {}.toString : function () {
      return "[object " + Co(this) + "]";
    }, "var-init"),
    Io = cc11001100_hook("Io", te, "var-init"),
    _o = cc11001100_hook("_o", ee.exports, "var-init"),
    To = cc11001100_hook("To", xo, "var-init");
  Io || _o(Object.prototype, "toString", To, {
    unsafe: cc11001100_hook("unsafe", !0, "object-key-init")
  });
  var Ro = cc11001100_hook("Ro", {}, "var-init"),
    Bo = cc11001100_hook("Bo", {}, "var-init"),
    Oo = cc11001100_hook("Oo", {}.propertyIsEnumerable, "var-init"),
    So = cc11001100_hook("So", Object.getOwnPropertyDescriptor, "var-init"),
    Uo = cc11001100_hook("Uo", So && !Oo.call({
      1: cc11001100_hook(1, 2, "object-key-init")
    }, 1), "var-init");
  Bo.f = cc11001100_hook("Bo.f", Uo ? function (t) {
    var e = cc11001100_hook("e", So(this, t), "var-init");
    return !!e && e.enumerable;
  } : Oo, "assign");
  var ko = cc11001100_hook("ko", mo, "var-init"),
    Lo = cc11001100_hook("Lo", "".split, "var-init"),
    Po = cc11001100_hook("Po", Q(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == ko(t) ? Lo.call(t, "") : Object(t);
    } : Object, "var-init"),
    Vo = cc11001100_hook("Vo", Po, "var-init"),
    Do = cc11001100_hook("Do", v, "var-init"),
    Qo = function (t) {
      return Vo(Do(t));
    },
    No = cc11001100_hook("No", oe, "var-init"),
    Mo = cc11001100_hook("Mo", Bo, "var-init"),
    jo = cc11001100_hook("jo", Re, "var-init"),
    Ko = cc11001100_hook("Ko", Qo, "var-init"),
    qo = cc11001100_hook("qo", be, "var-init"),
    Fo = cc11001100_hook("Fo", C, "var-init"),
    Zo = cc11001100_hook("Zo", le, "var-init"),
    Go = cc11001100_hook("Go", Object.getOwnPropertyDescriptor, "var-init");
  Ro.f = cc11001100_hook("Ro.f", No ? Go : function (t, e) {
    if (t = cc11001100_hook("t", Ko(t), "assign"), e = cc11001100_hook("e", qo(e), "assign"), Zo) try {
      return Go(t, e);
    } catch (t) {}
    return Fo(t, e) ? jo(!Mo.f.call(t, e), t[e]) : void 0;
  }, "assign");
  var Yo = cc11001100_hook("Yo", {}, "var-init"),
    Wo = cc11001100_hook("Wo", Math.ceil, "var-init"),
    Jo = cc11001100_hook("Jo", Math.floor, "var-init"),
    Ho = function (t) {
      return isNaN(t = cc11001100_hook("t", +t, "assign")) ? 0 : (t > 0 ? Jo : Wo)(t);
    },
    Xo = cc11001100_hook("Xo", Ho, "var-init"),
    zo = cc11001100_hook("zo", Math.min, "var-init"),
    $o = function (t) {
      return t > 0 ? zo(Xo(t), 9007199254740991) : 0;
    },
    ti = cc11001100_hook("ti", Ho, "var-init"),
    ei = cc11001100_hook("ei", Math.max, "var-init"),
    oi = cc11001100_hook("oi", Math.min, "var-init"),
    ii = function (t, e) {
      var o = cc11001100_hook("o", ti(t), "var-init");
      return 0 > o ? ei(o + e, 0) : oi(o, e);
    },
    ni = cc11001100_hook("ni", Qo, "var-init"),
    ri = cc11001100_hook("ri", $o, "var-init"),
    Ai = cc11001100_hook("Ai", ii, "var-init"),
    ai = function (t) {
      return function (e, o, i) {
        var n,
          r = cc11001100_hook("r", ni(e), "var-init"),
          A = cc11001100_hook("A", ri(r.length), "var-init"),
          a = cc11001100_hook("a", Ai(i, A), "var-init");
        if (t && o != o) {
          for (; A > a;) if ((n = cc11001100_hook("n", r[a++], "assign")) != n) return !0;
        } else for (; A > a; a++) if ((t || a in r) && r[a] === o) return t || a || 0;
        return !t && -1;
      };
    },
    si = cc11001100_hook("si", {
      includes: cc11001100_hook("includes", ai(!0), "object-key-init"),
      indexOf: cc11001100_hook("indexOf", ai(!1), "object-key-init")
    }, "var-init"),
    ci = cc11001100_hook("ci", C, "var-init"),
    li = cc11001100_hook("li", Qo, "var-init"),
    ui = cc11001100_hook("ui", si.indexOf, "var-init"),
    hi = cc11001100_hook("hi", Ze, "var-init"),
    pi = function (t, e) {
      var o,
        i = cc11001100_hook("i", li(t), "var-init"),
        n = cc11001100_hook("n", 0, "var-init"),
        r = cc11001100_hook("r", [], "var-init");
      for (o in i) !ci(hi, o) && ci(i, o) && r.push(o);
      for (; e.length > n;) ci(i, o = cc11001100_hook("o", e[n++], "assign")) && (~ui(r, o) || r.push(o));
      return r;
    },
    di = cc11001100_hook("di", ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], "var-init"),
    fi = cc11001100_hook("fi", pi, "var-init"),
    gi = cc11001100_hook("gi", di.concat("length", "prototype"), "var-init");
  Yo.f = cc11001100_hook("Yo.f", Object.getOwnPropertyNames || function (t) {
    return fi(t, gi);
  }, "assign");
  var mi = cc11001100_hook("mi", {}, "var-init");
  mi.f = cc11001100_hook("mi.f", Object.getOwnPropertySymbols, "assign");
  var vi = cc11001100_hook("vi", Yo, "var-init"),
    Ei = cc11001100_hook("Ei", mi, "var-init"),
    yi = cc11001100_hook("yi", he, "var-init"),
    wi = cc11001100_hook("wi", B("Reflect", "ownKeys") || function (t) {
      var e = cc11001100_hook("e", vi.f(yi(t)), "var-init"),
        o = cc11001100_hook("o", Ei.f, "var-init");
      return o ? e.concat(o(t)) : e;
    }, "var-init"),
    bi = cc11001100_hook("bi", C, "var-init"),
    Ci = cc11001100_hook("Ci", wi, "var-init"),
    xi = cc11001100_hook("xi", Ro, "var-init"),
    Ii = cc11001100_hook("Ii", ie, "var-init"),
    _i = cc11001100_hook("_i", Q, "var-init"),
    Ti = cc11001100_hook("Ti", /#|\.prototype\./, "var-init"),
    Ri = function (t, e) {
      var o = cc11001100_hook("o", Oi[Bi(t)], "var-init");
      return o == Ui || o != Si && ("function" == typeof e ? _i(e) : !!e);
    },
    Bi = cc11001100_hook("Bi", Ri.normalize = cc11001100_hook("Ri.normalize", function (t) {
      return String(t).replace(Ti, ".").toLowerCase();
    }, "assign"), "var-init"),
    Oi = cc11001100_hook("Oi", Ri.data = cc11001100_hook("Ri.data", {}, "assign"), "var-init"),
    Si = cc11001100_hook("Si", Ri.NATIVE = cc11001100_hook("Ri.NATIVE", "N", "assign"), "var-init"),
    Ui = cc11001100_hook("Ui", Ri.POLYFILL = cc11001100_hook("Ri.POLYFILL", "P", "assign"), "var-init"),
    ki = cc11001100_hook("ki", Ri, "var-init"),
    Li = cc11001100_hook("Li", s, "var-init"),
    Pi = cc11001100_hook("Pi", Ro.f, "var-init"),
    Vi = cc11001100_hook("Vi", Se, "var-init"),
    Di = cc11001100_hook("Di", ee.exports, "var-init"),
    Qi = cc11001100_hook("Qi", u, "var-init"),
    Ni = function (t, e) {
      for (var o = cc11001100_hook("o", Ci(e), "var-init"), i = cc11001100_hook("i", Ii.f, "var-init"), n = cc11001100_hook("n", xi.f, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < o.length; r++) {
        var A = cc11001100_hook("A", o[r], "var-init");
        bi(t, A) || i(t, A, n(e, A));
      }
    },
    Mi = cc11001100_hook("Mi", ki, "var-init"),
    ji = function (t, e) {
      var o,
        i,
        n,
        r,
        A,
        a = cc11001100_hook("a", t.target, "var-init"),
        s = cc11001100_hook("s", t.global, "var-init"),
        c = cc11001100_hook("c", t.stat, "var-init");
      if (o = cc11001100_hook("o", s ? Li : c ? Li[a] || Qi(a, {}) : (Li[a] || {}).prototype, "assign")) for (i in e) {
        if (r = cc11001100_hook("r", e[i], "assign"), n = cc11001100_hook("n", t.noTargetGet ? (A = cc11001100_hook("A", Pi(o, i), "assign")) && A.value : o[i], "assign"), !Mi(s ? i : a + (c ? "." : "#") + i, t.forced) && void 0 !== n) {
          if (typeof r == typeof n) continue;
          Ni(r, n);
        }
        (t.sham || n && n.sham) && Vi(r, "sham", !0), Di(o, i, r, t);
      }
    },
    Ki = cc11001100_hook("Ki", s.Promise, "var-init"),
    qi = cc11001100_hook("qi", ee.exports, "var-init"),
    Fi = cc11001100_hook("Fi", ne, "var-init"),
    Zi = cc11001100_hook("Zi", he, "var-init"),
    Gi = function (t) {
      if (!Fi(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    },
    Yi = cc11001100_hook("Yi", Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var t,
        e = cc11001100_hook("e", !1, "var-init"),
        o = cc11001100_hook("o", {}, "var-init");
      try {
        (t = cc11001100_hook("t", Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, "assign")).call(o, []), e = cc11001100_hook("e", o instanceof Array, "assign");
      } catch (t) {}
      return function (o, i) {
        return Zi(o), Gi(i), e ? t.call(o, i) : o.__proto__ = cc11001100_hook("o.__proto__", i, "assign"), o;
      };
    }() : void 0), "var-init"),
    Wi = cc11001100_hook("Wi", ie.f, "var-init"),
    Ji = cc11001100_hook("Ji", C, "var-init"),
    Hi = cc11001100_hook("Hi", z("toStringTag"), "var-init"),
    Xi = function (t, e, o) {
      t && !Ji(t = cc11001100_hook("t", o ? t : t.prototype, "assign"), Hi) && Wi(t, Hi, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        value: cc11001100_hook("value", e, "object-key-init")
      });
    },
    zi = cc11001100_hook("zi", B, "var-init"),
    $i = cc11001100_hook("$i", ie, "var-init"),
    tn = cc11001100_hook("tn", oe, "var-init"),
    en = cc11001100_hook("en", z("species"), "var-init"),
    on = function (t) {
      var e = cc11001100_hook("e", zi(t), "var-init"),
        o = cc11001100_hook("o", $i.f, "var-init");
      tn && e && !e[en] && o(e, en, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        get: function () {
          return this;
        }
      });
    },
    nn = function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    },
    rn = cc11001100_hook("rn", {}, "var-init"),
    An = cc11001100_hook("An", rn, "var-init"),
    an = cc11001100_hook("an", z("iterator"), "var-init"),
    sn = cc11001100_hook("sn", Array.prototype, "var-init"),
    cn = cc11001100_hook("cn", nn, "var-init"),
    ln = function (t, e, o) {
      if (cn(t), void 0 === e) return t;
      switch (o) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (o) {
            return t.call(e, o);
          };
        case 2:
          return function (o, i) {
            return t.call(e, o, i);
          };
        case 3:
          return function (o, i, n) {
            return t.call(e, o, i, n);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    un = cc11001100_hook("un", bo, "var-init"),
    hn = cc11001100_hook("hn", rn, "var-init"),
    pn = cc11001100_hook("pn", z("iterator"), "var-init"),
    dn = cc11001100_hook("dn", he, "var-init"),
    fn = cc11001100_hook("fn", he, "var-init"),
    gn = function (t) {
      return void 0 !== t && (An.Array === t || sn[an] === t);
    },
    mn = cc11001100_hook("mn", $o, "var-init"),
    vn = cc11001100_hook("vn", ln, "var-init"),
    En = function (t) {
      return null != t ? t[pn] || t["@@iterator"] || hn[un(t)] : void 0;
    },
    yn = function (t) {
      var e = cc11001100_hook("e", t.return, "var-init");
      return void 0 !== e ? dn(e.call(t)).value : void 0;
    },
    wn = function (t, e) {
      this.stopped = cc11001100_hook("this.stopped", t, "assign"), this.result = cc11001100_hook("this.result", e, "assign");
    },
    bn = cc11001100_hook("bn", z("iterator"), "var-init"),
    Cn = cc11001100_hook("Cn", !1, "var-init");
  try {
    var xn = cc11001100_hook("xn", 0, "var-init"),
      In = cc11001100_hook("In", {
        next: function () {
          return {
            done: cc11001100_hook("done", !!xn++, "object-key-init")
          };
        },
        "return": function () {
          Cn = cc11001100_hook("Cn", !0, "assign");
        }
      }, "var-init");
    In[bn] = cc11001100_hook("In[bn]", function () {
      return this;
    }, "assign"), Array.from(In, function () {
      throw 2;
    });
  } catch (t) {}
  var _n,
    Tn,
    Rn,
    Bn,
    On = cc11001100_hook("On", he, "var-init"),
    Sn = cc11001100_hook("Sn", nn, "var-init"),
    Un = cc11001100_hook("Un", z("species"), "var-init"),
    kn = cc11001100_hook("kn", B("document", "documentElement"), "var-init"),
    Ln = cc11001100_hook("Ln", /(?:ipad|iphone|ipod).*applewebkit/i.test(O), "var-init"),
    Pn = cc11001100_hook("Pn", "process" == mo(s.process), "var-init"),
    Vn = cc11001100_hook("Vn", s, "var-init"),
    Dn = cc11001100_hook("Dn", Q, "var-init"),
    Qn = cc11001100_hook("Qn", ln, "var-init"),
    Nn = cc11001100_hook("Nn", kn, "var-init"),
    Mn = cc11001100_hook("Mn", se, "var-init"),
    jn = cc11001100_hook("jn", Ln, "var-init"),
    Kn = cc11001100_hook("Kn", Pn, "var-init"),
    qn = cc11001100_hook("qn", Vn.setImmediate, "var-init"),
    Fn = cc11001100_hook("Fn", Vn.clearImmediate, "var-init"),
    Zn = cc11001100_hook("Zn", Vn.process, "var-init"),
    Gn = cc11001100_hook("Gn", Vn.MessageChannel, "var-init"),
    Yn = cc11001100_hook("Yn", Vn.Dispatch, "var-init"),
    Wn = cc11001100_hook("Wn", 0, "var-init"),
    Jn = cc11001100_hook("Jn", {}, "var-init"),
    Hn = cc11001100_hook("Hn", "onreadystatechange", "var-init");
  try {
    _n = cc11001100_hook("_n", Vn.location, "assign");
  } catch (t) {}
  var Xn = function (t) {
      if (Jn.hasOwnProperty(t)) {
        var e = cc11001100_hook("e", Jn[t], "var-init");
        delete Jn[t], e();
      }
    },
    zn = function (t) {
      return function () {
        Xn(t);
      };
    },
    $n = function (t) {
      Xn(t.data);
    },
    tr = function (t) {
      Vn.postMessage(String(t), _n.protocol + "//" + _n.host);
    };
  qn && Fn || (qn = cc11001100_hook("qn", function (t) {
    for (var e = cc11001100_hook("e", [], "var-init"), o = cc11001100_hook("o", arguments.length, "var-init"), i = cc11001100_hook("i", 1, "var-init"); o > i;) e.push(arguments[i++]);
    return Jn[++Wn] = cc11001100_hook("Jn[++Wn]", function () {
      ("function" == typeof t ? t : Function(t)).apply(void 0, e);
    }, "assign"), Tn(Wn), Wn;
  }, "assign"), Fn = cc11001100_hook("Fn", function (t) {
    delete Jn[t];
  }, "assign"), Kn ? Tn = cc11001100_hook("Tn", function (t) {
    Zn.nextTick(zn(t));
  }, "assign") : Yn && Yn.now ? Tn = cc11001100_hook("Tn", function (t) {
    Yn.now(zn(t));
  }, "assign") : Gn && !jn ? (Bn = cc11001100_hook("Bn", (Rn = cc11001100_hook("Rn", new Gn(), "assign")).port2, "assign"), Rn.port1.onmessage = cc11001100_hook("Rn.port1.onmessage", $n, "assign"), Tn = cc11001100_hook("Tn", Qn(Bn.postMessage, Bn, 1), "assign")) : Vn.addEventListener && "function" == typeof postMessage && !Vn.importScripts && _n && "file:" !== _n.protocol && !Dn(tr) ? (Tn = cc11001100_hook("Tn", tr, "assign"), Vn.addEventListener("message", $n, !1)) : Tn = cc11001100_hook("Tn", Hn in Mn("script") ? function (t) {
    Nn.appendChild(Mn("script")).onreadystatechange = cc11001100_hook("Nn.appendChild(Mn(\"script\")).onreadystatechange", function () {
      Nn.removeChild(this), Xn(t);
    }, "assign");
  } : function (t) {
    setTimeout(zn(t), 0);
  }, "assign"));
  var er,
    or,
    ir,
    nr,
    rr,
    Ar,
    ar,
    sr,
    cr = cc11001100_hook("cr", {
      set: cc11001100_hook("set", qn, "object-key-init"),
      clear: cc11001100_hook("clear", Fn, "object-key-init")
    }, "var-init"),
    lr = cc11001100_hook("lr", s, "var-init"),
    ur = cc11001100_hook("ur", /ipad|iphone|ipod/i.test(O) && void 0 !== lr.Pebble, "var-init"),
    hr = cc11001100_hook("hr", /web0s(?!.*chrome)/i.test(O), "var-init"),
    pr = cc11001100_hook("pr", s, "var-init"),
    dr = cc11001100_hook("dr", Ro.f, "var-init"),
    fr = cc11001100_hook("fr", cr.set, "var-init"),
    gr = cc11001100_hook("gr", Ln, "var-init"),
    mr = cc11001100_hook("mr", ur, "var-init"),
    vr = cc11001100_hook("vr", hr, "var-init"),
    Er = cc11001100_hook("Er", Pn, "var-init"),
    yr = cc11001100_hook("yr", pr.MutationObserver || pr.WebKitMutationObserver, "var-init"),
    wr = cc11001100_hook("wr", pr.document, "var-init"),
    br = cc11001100_hook("br", pr.process, "var-init"),
    Cr = cc11001100_hook("Cr", pr.Promise, "var-init"),
    xr = cc11001100_hook("xr", dr(pr, "queueMicrotask"), "var-init"),
    Ir = cc11001100_hook("Ir", xr && xr.value, "var-init");
  Ir || (er = cc11001100_hook("er", function () {
    var t, e;
    for (Er && (t = cc11001100_hook("t", br.domain, "assign")) && t.exit(); or;) {
      e = cc11001100_hook("e", or.fn, "assign"), or = cc11001100_hook("or", or.next, "assign");
      try {
        e();
      } catch (t) {
        throw or ? nr() : ir = cc11001100_hook("ir", void 0, "assign"), t;
      }
    }
    ir = cc11001100_hook("ir", void 0, "assign"), t && t.enter();
  }, "assign"), gr || Er || vr || !yr || !wr ? !mr && Cr && Cr.resolve ? ((ar = cc11001100_hook("ar", Cr.resolve(void 0), "assign")).constructor = cc11001100_hook("(ar = Cr.resolve(void 0)).constructor", Cr, "assign"), sr = cc11001100_hook("sr", ar.then, "assign"), nr = cc11001100_hook("nr", function () {
    sr.call(ar, er);
  }, "assign")) : nr = cc11001100_hook("nr", Er ? function () {
    br.nextTick(er);
  } : function () {
    fr.call(pr, er);
  }, "assign") : (rr = cc11001100_hook("rr", !0, "assign"), Ar = cc11001100_hook("Ar", wr.createTextNode(""), "assign"), new yr(er).observe(Ar, {
    characterData: cc11001100_hook("characterData", !0, "object-key-init")
  }), nr = cc11001100_hook("nr", function () {
    Ar.data = cc11001100_hook("Ar.data", rr = cc11001100_hook("rr", !rr, "assign"), "assign");
  }, "assign")));
  var _r = cc11001100_hook("_r", Ir || function (t) {
      var e = cc11001100_hook("e", {
        fn: cc11001100_hook("fn", t, "object-key-init"),
        next: cc11001100_hook("next", void 0, "object-key-init")
      }, "var-init");
      ir && (ir.next = cc11001100_hook("ir.next", e, "assign")), or || (or = cc11001100_hook("or", e, "assign"), nr()), ir = cc11001100_hook("ir", e, "assign");
    }, "var-init"),
    Tr = cc11001100_hook("Tr", {}, "var-init"),
    Rr = cc11001100_hook("Rr", nn, "var-init"),
    Br = function (t) {
      var e, o;
      this.promise = cc11001100_hook("this.promise", new t(function (t, i) {
        if (void 0 !== e || void 0 !== o) throw TypeError("Bad Promise constructor");
        e = cc11001100_hook("e", t, "assign"), o = cc11001100_hook("o", i, "assign");
      }), "assign"), this.resolve = cc11001100_hook("this.resolve", Rr(e), "assign"), this.reject = cc11001100_hook("this.reject", Rr(o), "assign");
    };
  Tr.f = cc11001100_hook("Tr.f", function (t) {
    return new Br(t);
  }, "assign");
  var Or,
    Sr,
    Ur,
    kr,
    Lr = cc11001100_hook("Lr", he, "var-init"),
    Pr = cc11001100_hook("Pr", ne, "var-init"),
    Vr = cc11001100_hook("Vr", Tr, "var-init"),
    Dr = cc11001100_hook("Dr", s, "var-init"),
    Qr = cc11001100_hook("Qr", "object" == typeof window, "var-init"),
    Nr = cc11001100_hook("Nr", ji, "var-init"),
    Mr = cc11001100_hook("Mr", s, "var-init"),
    jr = cc11001100_hook("jr", B, "var-init"),
    Kr = cc11001100_hook("Kr", Ki, "var-init"),
    qr = cc11001100_hook("qr", ee.exports, "var-init"),
    Fr = function (t, e, o) {
      for (var i in e) qi(t, i, e[i], o);
      return t;
    },
    Zr = cc11001100_hook("Zr", Yi, "var-init"),
    Gr = cc11001100_hook("Gr", Xi, "var-init"),
    Yr = cc11001100_hook("Yr", on, "var-init"),
    Wr = cc11001100_hook("Wr", ne, "var-init"),
    Jr = cc11001100_hook("Jr", nn, "var-init"),
    Hr = function (t, e, o) {
      if (!(t instanceof e)) throw TypeError("Incorrect " + (o ? o + " " : "") + "invocation");
      return t;
    },
    Xr = cc11001100_hook("Xr", De, "var-init"),
    zr = function (t, e, o) {
      var i,
        n,
        r,
        A,
        a,
        s,
        c,
        l = cc11001100_hook("l", o && o.that, "var-init"),
        u = cc11001100_hook("u", !(!o || !o.AS_ENTRIES), "var-init"),
        h = cc11001100_hook("h", !(!o || !o.IS_ITERATOR), "var-init"),
        p = cc11001100_hook("p", !(!o || !o.INTERRUPTED), "var-init"),
        d = cc11001100_hook("d", vn(e, l, 1 + u + p), "var-init"),
        f = function (t) {
          return i && yn(i), new wn(!0, t);
        },
        g = function (t) {
          return u ? (fn(t), p ? d(t[0], t[1], f) : d(t[0], t[1])) : p ? d(t, f) : d(t);
        };
      if (h) i = cc11001100_hook("i", t, "assign");else {
        if ("function" != typeof (n = cc11001100_hook("n", En(t), "assign"))) throw TypeError("Target is not iterable");
        if (gn(n)) {
          for (r = cc11001100_hook("r", 0, "assign"), A = cc11001100_hook("A", mn(t.length), "assign"); A > r; r++) if ((a = cc11001100_hook("a", g(t[r]), "assign")) && a instanceof wn) return a;
          return new wn(!1);
        }
        i = cc11001100_hook("i", n.call(t), "assign");
      }
      for (s = cc11001100_hook("s", i.next, "assign"); !(c = cc11001100_hook("c", s.call(i), "assign")).done;) {
        try {
          a = cc11001100_hook("a", g(c.value), "assign");
        } catch (t) {
          throw yn(i), t;
        }
        if ("object" == typeof a && a && a instanceof wn) return a;
      }
      return new wn(!1);
    },
    $r = function (t, e) {
      if (!e && !Cn) return !1;
      var o = cc11001100_hook("o", !1, "var-init");
      try {
        var i = cc11001100_hook("i", {}, "var-init");
        i[bn] = cc11001100_hook("i[bn]", function () {
          return {
            next: function () {
              return {
                done: cc11001100_hook("done", o = cc11001100_hook("o", !0, "assign"), "object-key-init")
              };
            }
          };
        }, "assign"), t(i);
      } catch (t) {}
      return o;
    },
    tA = function (t, e) {
      var o,
        i = cc11001100_hook("i", On(t).constructor, "var-init");
      return void 0 === i || null == (o = cc11001100_hook("o", On(i)[Un], "assign")) ? e : Sn(o);
    },
    eA = cc11001100_hook("eA", cr.set, "var-init"),
    oA = cc11001100_hook("oA", _r, "var-init"),
    iA = function (t, e) {
      if (Lr(t), Pr(e) && e.constructor === t) return e;
      var o = cc11001100_hook("o", Vr.f(t), "var-init");
      return o.resolve(e), o.promise;
    },
    nA = function (t, e) {
      var o = cc11001100_hook("o", Dr.console, "var-init");
      o && o.error && (1 === arguments.length ? o.error(t) : o.error(t, e));
    },
    rA = cc11001100_hook("rA", Tr, "var-init"),
    AA = function (t) {
      try {
        return {
          error: cc11001100_hook("error", !1, "object-key-init"),
          value: cc11001100_hook("value", t(), "object-key-init")
        };
      } catch (t) {
        return {
          error: cc11001100_hook("error", !0, "object-key-init"),
          value: cc11001100_hook("value", t, "object-key-init")
        };
      }
    },
    aA = cc11001100_hook("aA", Ao, "var-init"),
    sA = cc11001100_hook("sA", ki, "var-init"),
    cA = cc11001100_hook("cA", Qr, "var-init"),
    lA = cc11001100_hook("lA", Pn, "var-init"),
    uA = cc11001100_hook("uA", D, "var-init"),
    hA = cc11001100_hook("hA", z("species"), "var-init"),
    pA = cc11001100_hook("pA", "Promise", "var-init"),
    dA = cc11001100_hook("dA", aA.get, "var-init"),
    fA = cc11001100_hook("fA", aA.set, "var-init"),
    gA = cc11001100_hook("gA", aA.getterFor(pA), "var-init"),
    mA = cc11001100_hook("mA", Kr && Kr.prototype, "var-init"),
    vA = cc11001100_hook("vA", Kr, "var-init"),
    EA = cc11001100_hook("EA", mA, "var-init"),
    yA = cc11001100_hook("yA", Mr.TypeError, "var-init"),
    wA = cc11001100_hook("wA", Mr.document, "var-init"),
    bA = cc11001100_hook("bA", Mr.process, "var-init"),
    CA = cc11001100_hook("CA", rA.f, "var-init"),
    xA = cc11001100_hook("xA", CA, "var-init"),
    IA = cc11001100_hook("IA", !!(wA && wA.createEvent && Mr.dispatchEvent), "var-init"),
    _A = cc11001100_hook("_A", "function" == typeof PromiseRejectionEvent, "var-init"),
    TA = cc11001100_hook("TA", "unhandledrejection", "var-init"),
    RA = cc11001100_hook("RA", !1, "var-init"),
    BA = cc11001100_hook("BA", sA(pA, function () {
      var t = cc11001100_hook("t", Xr(vA), "var-init"),
        e = cc11001100_hook("e", t !== String(vA), "var-init");
      if (!e && 66 === uA) return !0;
      if (uA >= 51 && /native code/.test(t)) return !1;
      var o = cc11001100_hook("o", new vA(function (t) {
          t(1);
        }), "var-init"),
        i = function (t) {
          t(function () {}, function () {});
        };
      return (o.constructor = cc11001100_hook("o.constructor", {}, "assign"))[hA] = cc11001100_hook("(o.constructor = {})[hA]", i, "assign"), !(RA = cc11001100_hook("RA", o.then(function () {}) instanceof i, "assign")) || !e && cA && !_A;
    }), "var-init"),
    OA = cc11001100_hook("OA", BA || !$r(function (t) {
      vA.all(t).catch(function () {});
    }), "var-init"),
    SA = function (t) {
      var e;
      return !(!Wr(t) || "function" != typeof (e = cc11001100_hook("e", t.then, "assign"))) && e;
    },
    UA = function (t, e) {
      if (!t.notified) {
        t.notified = cc11001100_hook("t.notified", !0, "assign");
        var o = cc11001100_hook("o", t.reactions, "var-init");
        oA(function () {
          for (var t = cc11001100_hook("t", p.value, "var-init"), i = cc11001100_hook("i", 1 == p.state, "var-init"), n = cc11001100_hook("n", 0, "var-init"); o.length > n;) {
            var r,
              A,
              a,
              s = cc11001100_hook("s", o[n++], "var-init"),
              c = cc11001100_hook("c", i ? s.ok : s.fail, "var-init"),
              l = cc11001100_hook("l", s.resolve, "var-init"),
              u = cc11001100_hook("u", s.reject, "var-init"),
              h = cc11001100_hook("h", s.domain, "var-init");
            try {
              c ? (i || (2 === p.rejection && VA(p), p.rejection = cc11001100_hook("p.rejection", 1, "assign")), !0 === c ? r = cc11001100_hook("r", t, "assign") : (h && h.enter(), r = cc11001100_hook("r", c(t), "assign"), h && (h.exit(), a = cc11001100_hook("a", !0, "assign"))), r === s.promise ? u(yA("Promise-chain cycle")) : (A = cc11001100_hook("A", SA(r), "assign")) ? A.call(r, l, u) : l(r)) : u(t);
            } catch (p) {
              h && !a && h.exit(), u(p);
            }
          }
          p.reactions = cc11001100_hook("p.reactions", [], "assign"), p.notified = cc11001100_hook("p.notified", !1, "assign"), e && !p.rejection && LA(p);
        });
      }
    },
    kA = function (t, e, o) {
      var i, n;
      IA ? ((i = cc11001100_hook("i", wA.createEvent("Event"), "assign")).promise = cc11001100_hook("(i = wA.createEvent(\"Event\")).promise", e, "assign"), i.reason = cc11001100_hook("i.reason", o, "assign"), i.initEvent(t, !1, !0), Mr.dispatchEvent(i)) : i = cc11001100_hook("i", {
        promise: cc11001100_hook("promise", e, "object-key-init"),
        reason: cc11001100_hook("reason", o, "object-key-init")
      }, "assign"), !_A && (n = cc11001100_hook("n", Mr["on" + t], "assign")) ? n(i) : t === TA && nA("Unhandled promise rejection", o);
    },
    LA = function (t) {
      eA.call(Mr, function () {
        var e,
          o = cc11001100_hook("o", t.facade, "var-init"),
          i = cc11001100_hook("i", t.value, "var-init");
        if (PA(t) && (e = cc11001100_hook("e", AA(function () {
          lA ? bA.emit("unhandledRejection", i, o) : kA(TA, o, i);
        }), "assign"), t.rejection = cc11001100_hook("t.rejection", lA || PA(t) ? 2 : 1, "assign"), e.error)) throw e.value;
      });
    },
    PA = function (t) {
      return 1 !== t.rejection && !t.parent;
    },
    VA = function (t) {
      eA.call(Mr, function () {
        var e = cc11001100_hook("e", t.facade, "var-init");
        lA ? bA.emit("rejectionHandled", e) : kA("rejectionhandled", e, t.value);
      });
    },
    DA = function (t, e, o) {
      return function (i) {
        t(e, i, o);
      };
    },
    QA = function (t, e, o) {
      t.done || (t.done = cc11001100_hook("t.done", !0, "assign"), o && (t = cc11001100_hook("t", o, "assign")), t.value = cc11001100_hook("t.value", e, "assign"), t.state = cc11001100_hook("t.state", 2, "assign"), UA(t, !0));
    },
    NA = function (t, e, o) {
      if (!t.done) {
        t.done = cc11001100_hook("t.done", !0, "assign"), o && (t = cc11001100_hook("t", o, "assign"));
        try {
          if (t.facade === e) throw yA("Promise can't be resolved itself");
          var i = cc11001100_hook("i", SA(e), "var-init");
          i ? oA(function () {
            var e = cc11001100_hook("e", {
              done: cc11001100_hook("done", !1, "object-key-init")
            }, "var-init");
            try {
              i.call(o, DA(NA, e, t), DA(QA, e, t));
            } catch (o) {
              QA(e, o, t);
            }
          }) : (t.value = cc11001100_hook("t.value", e, "assign"), t.state = cc11001100_hook("t.state", 1, "assign"), UA(t, !1));
        } catch (e) {
          QA({
            done: cc11001100_hook("done", !1, "object-key-init")
          }, e, t);
        }
      }
    };
  if (BA && (EA = cc11001100_hook("EA", (vA = cc11001100_hook("vA", function (t) {
    Hr(this, vA, pA), Jr(t), Or.call(this);
    var e = cc11001100_hook("e", dA(this), "var-init");
    try {
      t(DA(NA, e), DA(QA, e));
    } catch (t) {
      QA(e, t);
    }
  }, "assign")).prototype, "assign"), (Or = cc11001100_hook("Or", function () {
    fA(this, {
      type: cc11001100_hook("type", pA, "object-key-init"),
      done: cc11001100_hook("done", !1, "object-key-init"),
      notified: cc11001100_hook("notified", !1, "object-key-init"),
      parent: cc11001100_hook("parent", !1, "object-key-init"),
      reactions: cc11001100_hook("reactions", [], "object-key-init"),
      rejection: cc11001100_hook("rejection", !1, "object-key-init"),
      state: cc11001100_hook("state", 0, "object-key-init"),
      value: cc11001100_hook("value", void 0, "object-key-init")
    });
  }, "assign")).prototype = cc11001100_hook("(Or = function () {\n  fA(this, {\n    type: pA,\n    done: !1,\n    notified: !1,\n    parent: !1,\n    reactions: [],\n    rejection: !1,\n    state: 0,\n    value: void 0\n  });\n}).prototype", Fr(EA, {
    then: function (t, e) {
      var o = cc11001100_hook("o", gA(this), "var-init"),
        i = cc11001100_hook("i", CA(tA(this, vA)), "var-init");
      return i.ok = cc11001100_hook("i.ok", "function" != typeof t || t, "assign"), i.fail = cc11001100_hook("i.fail", "function" == typeof e && e, "assign"), i.domain = cc11001100_hook("i.domain", lA ? bA.domain : void 0, "assign"), o.parent = cc11001100_hook("o.parent", !0, "assign"), o.reactions.push(i), 0 != o.state && UA(o, !1), i.promise;
    },
    "catch": function (t) {
      return this.then(void 0, t);
    }
  }), "assign"), Sr = cc11001100_hook("Sr", function () {
    var t = cc11001100_hook("t", new Or(), "var-init"),
      e = cc11001100_hook("e", dA(t), "var-init");
    this.promise = cc11001100_hook("this.promise", t, "assign"), this.resolve = cc11001100_hook("this.resolve", DA(NA, e), "assign"), this.reject = cc11001100_hook("this.reject", DA(QA, e), "assign");
  }, "assign"), rA.f = cc11001100_hook("rA.f", CA = cc11001100_hook("CA", function (t) {
    return t === vA || t === Ur ? new Sr(t) : xA(t);
  }, "assign"), "assign"), "function" == typeof Kr && mA !== Object.prototype)) {
    kr = cc11001100_hook("kr", mA.then, "assign"), RA || (qr(mA, "then", function (t, e) {
      var o = cc11001100_hook("o", this, "var-init");
      return new vA(function (t, e) {
        kr.call(o, t, e);
      }).then(t, e);
    }, {
      unsafe: cc11001100_hook("unsafe", !0, "object-key-init")
    }), qr(mA, "catch", EA.catch, {
      unsafe: cc11001100_hook("unsafe", !0, "object-key-init")
    }));
    try {
      delete mA.constructor;
    } catch (t) {}
    Zr && Zr(mA, EA);
  }
  Nr({
    global: cc11001100_hook("global", !0, "object-key-init"),
    wrap: cc11001100_hook("wrap", !0, "object-key-init"),
    forced: cc11001100_hook("forced", BA, "object-key-init")
  }, {
    Promise: cc11001100_hook("Promise", vA, "object-key-init")
  }), Gr(vA, pA, !1), Yr(pA), Ur = cc11001100_hook("Ur", jr(pA), "assign"), Nr({
    target: cc11001100_hook("target", pA, "object-key-init"),
    stat: cc11001100_hook("stat", !0, "object-key-init"),
    forced: cc11001100_hook("forced", BA, "object-key-init")
  }, {
    reject: function (t) {
      var e = cc11001100_hook("e", CA(this), "var-init");
      return e.reject.call(void 0, t), e.promise;
    }
  }), Nr({
    target: cc11001100_hook("target", pA, "object-key-init"),
    stat: cc11001100_hook("stat", !0, "object-key-init"),
    forced: cc11001100_hook("forced", BA, "object-key-init")
  }, {
    resolve: function (t) {
      return iA(this, t);
    }
  }), Nr({
    target: cc11001100_hook("target", pA, "object-key-init"),
    stat: cc11001100_hook("stat", !0, "object-key-init"),
    forced: cc11001100_hook("forced", OA, "object-key-init")
  }, {
    all: function (t) {
      var e = cc11001100_hook("e", this, "var-init"),
        o = cc11001100_hook("o", CA(e), "var-init"),
        i = cc11001100_hook("i", o.resolve, "var-init"),
        n = cc11001100_hook("n", o.reject, "var-init"),
        r = cc11001100_hook("r", AA(function () {
          var o = cc11001100_hook("o", Jr(e.resolve), "var-init"),
            r = cc11001100_hook("r", [], "var-init"),
            A = cc11001100_hook("A", 0, "var-init"),
            a = cc11001100_hook("a", 1, "var-init");
          zr(t, function (t) {
            var s = cc11001100_hook("s", A++, "var-init"),
              c = cc11001100_hook("c", !1, "var-init");
            r.push(void 0), a++, o.call(e, t).then(function (t) {
              c || (c = cc11001100_hook("c", !0, "assign"), r[s] = cc11001100_hook("r[s]", t, "assign"), --a || i(r));
            }, n);
          }), --a || i(r);
        }), "var-init");
      return r.error && n(r.value), o.promise;
    },
    race: function (t) {
      var e = cc11001100_hook("e", this, "var-init"),
        o = cc11001100_hook("o", CA(e), "var-init"),
        i = cc11001100_hook("i", o.reject, "var-init"),
        n = cc11001100_hook("n", AA(function () {
          var n = cc11001100_hook("n", Jr(e.resolve), "var-init");
          zr(t, function (t) {
            n.call(e, t).then(o.resolve, i);
          });
        }), "var-init");
      return n.error && i(n.value), o.promise;
    }
  });
  var MA = function () {
      return (MA = cc11001100_hook("MA", Object.assign || function (t) {
        for (var e, o = cc11001100_hook("o", 1, "var-init"), i = cc11001100_hook("i", arguments.length, "var-init"); i > o; o++) for (var n in e = cc11001100_hook("e", arguments[o], "assign")) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = cc11001100_hook("t[n]", e[n], "assign"));
        return t;
      }, "assign")).apply(this, arguments);
    },
    jA = cc11001100_hook("jA", mo, "var-init"),
    KA = cc11001100_hook("KA", Array.isArray || function (t) {
      return "Array" == jA(t);
    }, "var-init"),
    qA = cc11001100_hook("qA", ne, "var-init"),
    FA = cc11001100_hook("FA", KA, "var-init"),
    ZA = cc11001100_hook("ZA", z("species"), "var-init"),
    GA = function (t) {
      var e;
      return FA(t) && ("function" != typeof (e = cc11001100_hook("e", t.constructor, "assign")) || e !== Array && !FA(e.prototype) ? qA(e) && null === (e = cc11001100_hook("e", e[ZA], "assign")) && (e = cc11001100_hook("e", void 0, "assign")) : e = cc11001100_hook("e", void 0, "assign")), void 0 === e ? Array : e;
    },
    YA = function (t, e) {
      return new (GA(t))(0 === e ? 0 : e);
    },
    WA = cc11001100_hook("WA", ln, "var-init"),
    JA = cc11001100_hook("JA", Po, "var-init"),
    HA = cc11001100_hook("HA", y, "var-init"),
    XA = cc11001100_hook("XA", $o, "var-init"),
    zA = cc11001100_hook("zA", YA, "var-init"),
    $A = cc11001100_hook("$A", [].push, "var-init"),
    ta = function (t) {
      var e = cc11001100_hook("e", 1 == t, "var-init"),
        o = cc11001100_hook("o", 2 == t, "var-init"),
        i = cc11001100_hook("i", 3 == t, "var-init"),
        n = cc11001100_hook("n", 4 == t, "var-init"),
        r = cc11001100_hook("r", 6 == t, "var-init"),
        A = cc11001100_hook("A", 7 == t, "var-init"),
        a = cc11001100_hook("a", 5 == t || r, "var-init");
      return function (s, c, l, u) {
        for (var h, p, d = cc11001100_hook("d", HA(s), "var-init"), f = cc11001100_hook("f", JA(d), "var-init"), g = cc11001100_hook("g", WA(c, l, 3), "var-init"), m = cc11001100_hook("m", XA(f.length), "var-init"), v = cc11001100_hook("v", 0, "var-init"), E = cc11001100_hook("E", u || zA, "var-init"), y = cc11001100_hook("y", e ? E(s, m) : o || A ? E(s, 0) : void 0, "var-init"); m > v; v++) if ((a || v in f) && (p = cc11001100_hook("p", g(h = cc11001100_hook("h", f[v], "assign"), v, d), "assign"), t)) if (e) y[v] = cc11001100_hook("y[v]", p, "assign");else if (p) switch (t) {
          case 3:
            return !0;
          case 5:
            return h;
          case 6:
            return v;
          case 2:
            $A.call(y, h);
        } else switch (t) {
          case 4:
            return !1;
          case 7:
            $A.call(y, h);
        }
        return r ? -1 : i || n ? n : y;
      };
    },
    ea = cc11001100_hook("ea", {
      forEach: cc11001100_hook("forEach", ta(0), "object-key-init"),
      map: cc11001100_hook("map", ta(1), "object-key-init"),
      filter: cc11001100_hook("filter", ta(2), "object-key-init"),
      some: cc11001100_hook("some", ta(3), "object-key-init"),
      every: cc11001100_hook("every", ta(4), "object-key-init"),
      find: cc11001100_hook("find", ta(5), "object-key-init"),
      findIndex: cc11001100_hook("findIndex", ta(6), "object-key-init"),
      filterReject: cc11001100_hook("filterReject", ta(7), "object-key-init")
    }, "var-init"),
    oa = cc11001100_hook("oa", Q, "var-init"),
    ia = cc11001100_hook("ia", D, "var-init"),
    na = cc11001100_hook("na", z("species"), "var-init"),
    ra = function (t) {
      return ia >= 51 || !oa(function () {
        var e = cc11001100_hook("e", [], "var-init");
        return (e.constructor = cc11001100_hook("e.constructor", {}, "assign"))[na] = cc11001100_hook("(e.constructor = {})[na]", function () {
          return {
            foo: cc11001100_hook("foo", 1, "object-key-init")
          };
        }, "assign"), 1 !== e[t](Boolean).foo;
      });
    },
    Aa = cc11001100_hook("Aa", ea.map, "var-init");
  ji({
    target: cc11001100_hook("target", "Array", "object-key-init"),
    proto: cc11001100_hook("proto", !0, "object-key-init"),
    forced: cc11001100_hook("forced", !ra("map"), "object-key-init")
  }, {
    map: function (t) {
      return Aa(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var aa = cc11001100_hook("aa", Q, "var-init"),
    sa = function (t, e) {
      var o = cc11001100_hook("o", [][t], "var-init");
      return !!o && aa(function () {
        o.call(null, e || function () {
          throw 1;
        }, 1);
      });
    },
    ca = cc11001100_hook("ca", ji, "var-init"),
    la = cc11001100_hook("la", Qo, "var-init"),
    ua = cc11001100_hook("ua", [].join, "var-init"),
    ha = cc11001100_hook("ha", Po != Object, "var-init"),
    pa = cc11001100_hook("pa", sa("join", ","), "var-init");
  ca({
    target: cc11001100_hook("target", "Array", "object-key-init"),
    proto: cc11001100_hook("proto", !0, "object-key-init"),
    forced: cc11001100_hook("forced", ha || !pa, "object-key-init")
  }, {
    join: function (t) {
      return ua.call(la(this), void 0 === t ? "," : t);
    }
  });
  var da = cc11001100_hook("da", {
      CSSRuleList: cc11001100_hook("CSSRuleList", 0, "object-key-init"),
      CSSStyleDeclaration: cc11001100_hook("CSSStyleDeclaration", 0, "object-key-init"),
      CSSValueList: cc11001100_hook("CSSValueList", 0, "object-key-init"),
      ClientRectList: cc11001100_hook("ClientRectList", 0, "object-key-init"),
      DOMRectList: cc11001100_hook("DOMRectList", 0, "object-key-init"),
      DOMStringList: cc11001100_hook("DOMStringList", 0, "object-key-init"),
      DOMTokenList: cc11001100_hook("DOMTokenList", 1, "object-key-init"),
      DataTransferItemList: cc11001100_hook("DataTransferItemList", 0, "object-key-init"),
      FileList: cc11001100_hook("FileList", 0, "object-key-init"),
      HTMLAllCollection: cc11001100_hook("HTMLAllCollection", 0, "object-key-init"),
      HTMLCollection: cc11001100_hook("HTMLCollection", 0, "object-key-init"),
      HTMLFormElement: cc11001100_hook("HTMLFormElement", 0, "object-key-init"),
      HTMLSelectElement: cc11001100_hook("HTMLSelectElement", 0, "object-key-init"),
      MediaList: cc11001100_hook("MediaList", 0, "object-key-init"),
      MimeTypeArray: cc11001100_hook("MimeTypeArray", 0, "object-key-init"),
      NamedNodeMap: cc11001100_hook("NamedNodeMap", 0, "object-key-init"),
      NodeList: cc11001100_hook("NodeList", 1, "object-key-init"),
      PaintRequestList: cc11001100_hook("PaintRequestList", 0, "object-key-init"),
      Plugin: cc11001100_hook("Plugin", 0, "object-key-init"),
      PluginArray: cc11001100_hook("PluginArray", 0, "object-key-init"),
      SVGLengthList: cc11001100_hook("SVGLengthList", 0, "object-key-init"),
      SVGNumberList: cc11001100_hook("SVGNumberList", 0, "object-key-init"),
      SVGPathSegList: cc11001100_hook("SVGPathSegList", 0, "object-key-init"),
      SVGPointList: cc11001100_hook("SVGPointList", 0, "object-key-init"),
      SVGStringList: cc11001100_hook("SVGStringList", 0, "object-key-init"),
      SVGTransformList: cc11001100_hook("SVGTransformList", 0, "object-key-init"),
      SourceBufferList: cc11001100_hook("SourceBufferList", 0, "object-key-init"),
      StyleSheetList: cc11001100_hook("StyleSheetList", 0, "object-key-init"),
      TextTrackCueList: cc11001100_hook("TextTrackCueList", 0, "object-key-init"),
      TextTrackList: cc11001100_hook("TextTrackList", 0, "object-key-init"),
      TouchList: cc11001100_hook("TouchList", 0, "object-key-init")
    }, "var-init"),
    fa = cc11001100_hook("fa", ea.forEach, "var-init"),
    ga = cc11001100_hook("ga", s, "var-init"),
    ma = cc11001100_hook("ma", da, "var-init"),
    va = cc11001100_hook("va", sa("forEach") ? [].forEach : function (t) {
      return fa(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }, "var-init"),
    Ea = cc11001100_hook("Ea", Se, "var-init");
  for (var ya in ma) {
    var wa = cc11001100_hook("wa", ga[ya], "var-init"),
      ba = cc11001100_hook("ba", wa && wa.prototype, "var-init");
    if (ba && ba.forEach !== va) try {
      Ea(ba, "forEach", va);
    } catch (t) {
      ba.forEach = cc11001100_hook("ba.forEach", va, "assign");
    }
  }
  var Ca = cc11001100_hook("Ca", ea.filter, "var-init");
  ji({
    target: cc11001100_hook("target", "Array", "object-key-init"),
    proto: cc11001100_hook("proto", !0, "object-key-init"),
    forced: cc11001100_hook("forced", !ra("filter"), "object-key-init")
  }, {
    filter: function (t) {
      return Ca(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var xa,
    Ia = cc11001100_hook("Ia", {
      pcTtsFixContainer: cc11001100_hook("pcTtsFixContainer", "_2lMH_", "object-key-init"),
      pcTtsContainer: cc11001100_hook("pcTtsContainer", "_29hoo", "object-key-init"),
      pcTtsSmall: cc11001100_hook("pcTtsSmall", "adJuL", "object-key-init"),
      pcTtsProgressBarContainer: cc11001100_hook("pcTtsProgressBarContainer", "_24ewg", "object-key-init"),
      pcTtsVoiceChooseLeftIcon: cc11001100_hook("pcTtsVoiceChooseLeftIcon", "_2hDe0", "object-key-init"),
      pcTtsVoiceChooseRightIcon: cc11001100_hook("pcTtsVoiceChooseRightIcon", "_3Boe7", "object-key-init"),
      pcTtsVoiceChooseIcon: cc11001100_hook("pcTtsVoiceChooseIcon", "_3dS1j", "object-key-init"),
      pcTtsShowingChoose: cc11001100_hook("pcTtsShowingChoose", "_1g-Xw", "object-key-init"),
      pcTtsIcon: cc11001100_hook("pcTtsIcon", "_3mirU", "object-key-init"),
      pcTtsDisableIcon: cc11001100_hook("pcTtsDisableIcon", "_3AfHm", "object-key-init"),
      pcTtsEnableIcon: cc11001100_hook("pcTtsEnableIcon", "_2SZq2", "object-key-init"),
      pcTtsActiveIcon: cc11001100_hook("pcTtsActiveIcon", "_1Lxea", "object-key-init"),
      pcTtsBackgroundContainer: cc11001100_hook("pcTtsBackgroundContainer", "_27VLw", "object-key-init"),
      pcTtsFront: cc11001100_hook("pcTtsFront", "_1fb4H", "object-key-init"),
      pcTtsBackground: cc11001100_hook("pcTtsBackground", "vPGr9", "object-key-init"),
      pcTtsInfo: cc11001100_hook("pcTtsInfo", "DGD48", "object-key-init"),
      pcTtsImageContainer: cc11001100_hook("pcTtsImageContainer", "_1Zy0R", "object-key-init"),
      pcTtsImageWrapper: cc11001100_hook("pcTtsImageWrapper", "_1Uq60", "object-key-init"),
      pcTtsImage: cc11001100_hook("pcTtsImage", "mS2cs", "object-key-init"),
      pcTtsPlaying: cc11001100_hook("pcTtsPlaying", "G-kl-", "object-key-init"),
      pcTtsPlayingAni: cc11001100_hook("pcTtsPlayingAni", "_1Swet", "object-key-init"),
      pcTtsLoading: cc11001100_hook("pcTtsLoading", "_2c_jp", "object-key-init"),
      pcTtsLoadingAni: cc11001100_hook("pcTtsLoadingAni", "_1BB3Z", "object-key-init"),
      pcTtsTitle: cc11001100_hook("pcTtsTitle", "yxuhE", "object-key-init"),
      pcTtsTitleDefault: cc11001100_hook("pcTtsTitleDefault", "_1-JZp", "object-key-init"),
      pcTtsCloseBtn: cc11001100_hook("pcTtsCloseBtn", "_2_rJ6", "object-key-init"),
      pcTtsTools: cc11001100_hook("pcTtsTools", "_3dXp6", "object-key-init"),
      pcTtsPlayIcon: cc11001100_hook("pcTtsPlayIcon", "_2CGLg", "object-key-init"),
      pcTtsContinueIcon: cc11001100_hook("pcTtsContinueIcon", "_3yeus", "object-key-init"),
      pcTtsNextIcon: cc11001100_hook("pcTtsNextIcon", "_1keAE", "object-key-init"),
      pcTtsVoiceChangeIcon: cc11001100_hook("pcTtsVoiceChangeIcon", "_1MRZ3", "object-key-init"),
      pcTtsVoiceColumnIcon: cc11001100_hook("pcTtsVoiceColumnIcon", "_3pr3i", "object-key-init"),
      pcTtsMuted: cc11001100_hook("pcTtsMuted", "_2nEKW", "object-key-init"),
      pcTtsVoiceSubIcon: cc11001100_hook("pcTtsVoiceSubIcon", "_3rM0s", "object-key-init"),
      pcTtsProgressContainer: cc11001100_hook("pcTtsProgressContainer", "_2emlj", "object-key-init"),
      pcTtsProgressBarInner: cc11001100_hook("pcTtsProgressBarInner", "xsQyG", "object-key-init"),
      pcTtsCurrentTimeText: cc11001100_hook("pcTtsCurrentTimeText", "_2I2N3", "object-key-init"),
      pcTtsEndTimeText: cc11001100_hook("pcTtsEndTimeText", "xIoYh", "object-key-init"),
      pcTtsVoiceColumnContainer: cc11001100_hook("pcTtsVoiceColumnContainer", "_3FpGf", "object-key-init"),
      pcTtsVoiceColumn: cc11001100_hook("pcTtsVoiceColumn", "_1Lv75", "object-key-init"),
      pcTtsVoiceBar: cc11001100_hook("pcTtsVoiceBar", "_26Shv", "object-key-init"),
      pcTtsVoiceActiveBar: cc11001100_hook("pcTtsVoiceActiveBar", "_2iH-v", "object-key-init"),
      pcTtsVoicePoint: cc11001100_hook("pcTtsVoicePoint", "NZ1fB", "object-key-init"),
      pcTtsVoiceChooseContainer: cc11001100_hook("pcTtsVoiceChooseContainer", "_1M48y", "object-key-init"),
      pcTtsVoiceChooseNotice: cc11001100_hook("pcTtsVoiceChooseNotice", "_3g6Hz", "object-key-init"),
      pcTtsVoiceChooseTitle: cc11001100_hook("pcTtsVoiceChooseTitle", "_2rUmK", "object-key-init"),
      pcTtsVoiceChooseTips: cc11001100_hook("pcTtsVoiceChooseTips", "_16XCR", "object-key-init"),
      pcTtsVoiceChooseCloseBtn: cc11001100_hook("pcTtsVoiceChooseCloseBtn", "_3uiQc", "object-key-init"),
      pcTtsVoiceItem: cc11001100_hook("pcTtsVoiceItem", "nWBd1", "object-key-init"),
      pcTtsVoiceItemActive: cc11001100_hook("pcTtsVoiceItemActive", "_13Usk", "object-key-init"),
      pcTtsVoiceItemHoverBorder: cc11001100_hook("pcTtsVoiceItemHoverBorder", "VY6Gt", "object-key-init"),
      pcTtsVoiceChecked: cc11001100_hook("pcTtsVoiceChecked", "PY9AU", "object-key-init"),
      pcTtsVoiceItemTitle: cc11001100_hook("pcTtsVoiceItemTitle", "_3OUcG", "object-key-init"),
      pcTtsVoicesContainer: cc11001100_hook("pcTtsVoicesContainer", "_1ljTf", "object-key-init"),
      pcTtsVoiceItemImage: cc11001100_hook("pcTtsVoiceItemImage", "mH2VU", "object-key-init")
    }, "var-init");
  xa = cc11001100_hook("xa", '._2lMH_{bottom:0;left:50%;margin:auto 0;position:fixed;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:100%;z-index:100000}._29hoo{-webkit-box-orient:vertical;-webkit-box-direction:normal;background-color:#fff;border-radius:12px;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.3);box-shadow:0 2px 10px 0 rgba(0,0,0,.3);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:102px;padding-top:16px;position:absolute;width:368px}._29hoo.adJuL{width:288px}._29hoo.adJuL ._24ewg{width:50px}._29hoo.adJuL ._2hDe0{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoBAMAAABtB+WqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQAAAEdwTJ2dnQAAAPT09E5OTgAAAAAAANra2sXFxYKCgunp6f///8jW898AAAAMdFJOU2YAol3wfEAN0L2T4VOWEqYAAABeSURBVCjPYxBPZkACZoUMxQwowJwhAVWAjcEAVYCZgc4gcgEqn9XHAVUg5MwENAUn0BU0UFkBw5zTaK5cc0YBVYDpzCE0JTq0UoIWHgwqExgGEmAkGIwkhZHo0JMlAE9xHOcjkapKAAAAAElFTkSuQmCC);left:0}._29hoo.adJuL ._2hDe0:hover{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAMAAACo9wirAAAANlBMVEUAAACDg4Pv7+8AAAAAAAA7OzsKCgrLy8sAAADKysqvr681NTXg4OC8vLyoqKhra2tlZWX///+X5qddAAAAEXRSTlOZwfWSZKib4Abf0qfr2M+3tXPw/HAAAABWSURBVDjL7dS5EYAwEENR7QEYm0v9N0sF7A7DkIB/+hQLxQ2XmRc4whyGMMNva/UIfVBq4lwTn8dnPr3oLXFUcokcO0lBlHxroQgT3dC7+zGWnlh6gyfN0QQRsAhCegAAAABJRU5ErkJggg==);cursor:pointer}._29hoo.adJuL ._3Boe7{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoBAMAAABtB+WqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQAAAEdwTJ2dnQAAAPT09E5OTgAAAAAAANra2sXFxYKCgunp6f///8jW898AAAAMdFJOU2YAol3wfEAN0L2T4VOWEqYAAABdSURBVCjPYxBPZkACZoUMxQwowJwhAVWAjcEAVYCZgY6AayqaAMuRAFQBzjOuaEp60JVw0EjJnpOofKYzp1AFdM4ooCk4RG0FLGgKGDidGAYaYCQYjCSFkejQkyUATP8cFT8mlqYAAAAASUVORK5CYII=);right:0}._29hoo.adJuL ._3Boe7:hover{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAMAAACo9wirAAAAPFBMVEUAAACEhITw8PAAAAAAAAA7OzsKCgrLy8sAAACvr6+AgIA1NTXt7e3g4ODKysq8vLyoqKhra2tlZWX////7b8t+AAAAE3RSTlOZwfWSZKib4AbSv6fz69/Yz7e1HqwOCgAAAFdJREFUOMvt1LkRgDAQQ1HhXcAHt/rvlQq8Sj0DL/2KheyGLvMMR8hhCBm+5ykNocQ0I3JSLJZDLtaBFi1c7GRBYCJ5iz4N3KvoSKLj2ip+PSayPDF5gy/hQgSHo210UwAAAABJRU5ErkJggg==);cursor:pointer}._29hoo.adJuL ._3dS1j{background-position:0 0;background-repeat:no-repeat;background-size:cover;height:20px;position:absolute;top:65px;width:16px}._29hoo._1g-Xw{height:238px}._29hoo ._3mirU{display:block;opacity:.8}._29hoo ._3AfHm{cursor:default;opacity:.3}._29hoo ._1Lxea,._29hoo ._2SZq2:hover{cursor:pointer;opacity:1}._29hoo ._1Lxea{position:relative}._29hoo ._1Lxea:after{background-color:hsla(0,0%,100%,.1);background-size:cover;border-radius:8px;content:"";display:block;height:22px;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:22px}._29hoo ._27VLw{border-radius:12px;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:1}._29hoo ._1fb4H{background-color:rgba(51,51,51,.6);border-radius:12px;z-index:2}._29hoo ._1fb4H,._29hoo .vPGr9{bottom:0;left:0;position:absolute;right:0;top:0}._29hoo .vPGr9{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-size:cover;-webkit-filter:blur(15px);filter:blur(15px);overflow:hidden;z-index:1}._29hoo .DGD48{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:12px;padding:0 32px 0 16px;position:relative;z-index:3}._29hoo ._1Zy0R{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;height:38px;margin-right:8px;position:relative;width:38px}._29hoo ._1Zy0R:after{border:1px solid hsla(0,0%,100%,.1);border-radius:8px;content:"";display:block;height:100%;left:-1px;position:absolute;top:-1px;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;z-index:1000}._29hoo ._1Uq60{border-radius:8px;display:block;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}._29hoo .mS2cs{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;height:auto}._29hoo._2c_jp ._1BB3Z,._29hoo.G-kl- ._1Swet,._29hoo .mS2cs{border-radius:8px;left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:100%}._29hoo._2c_jp ._1BB3Z,._29hoo.G-kl- ._1Swet{background-color:rgba(0,0,0,.5);height:100%;z-index:5}._29hoo._2c_jp ._1BB3Z:after,._29hoo.G-kl- ._1Swet:after{background-position:0 0;background-repeat:no-repeat;background-size:cover;content:"";display:block;height:24px;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:24px;z-index:10}._29hoo.G-kl- ._1Swet:after{background-image:url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAACGFjVEwAAAAyAAAAAFKsK/YAAAI3UExURQAAAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2m75XIAAAC8dFJOUwADBAUGBwgJCgsMDQ4PEBIUFRgZGhscHiAhIyQnKCkqLC0wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUtMTU5QUVJUVVhaW1xdXl9gYWJjZWZnaGlqbG1ub3BxcnN0dXZ3eHp7fH1+f4CChIeMj5CWmpygpaipsLGys7S2t7i5u7y9v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dy8/X4+vv88Ja11gAAABpmY1RMAAAAAAAAAFQAAABUAAAAAAAAAAAAAQAZAACZwS3YAAAAvUlEQVRYw+3YsQqDMBSFYTd3VycDvkC7OHQQ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)}._29hoo._2c_jp ._1BB3Z:after{background-image:url(https://b.bdstatic.com/searchbox/icms/searchbox/img/pc_tts_loading.gif)}._29hoo .yxuhE{-webkit-box-orient:vertical;-webkit-line-clamp:2;color:#fff;display:-webkit-box;font-size:14px;line-height:1.5;margin-bottom:-5px;margin-top:-5px;overflow:hidden;position:relative;text-align:left;text-overflow:ellipsis;width:100%}._29hoo .yxuhE._1-JZp{height:34px}._29hoo .yxuhE._1-JZp:after{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAAAiAgMAAADJ+j9BAAAADFBMVEX///////////8AAAD1GyhhAAAABHRSTlMIFxkA9E5SmAAAAEpJREFUeAFjkFpFGXBgyKLQhAkMqygEC6hswqgJoyZQnqopz1n/KQQfqGbCqAmEY3MJARMIp6iV+E0gJlXT04RRE0ZNoDxVU56zACOCwvuGsq9tAAAAAElFTkSuQmCC);background-size:cover;border-radius:2px;content:"";display:block;height:34px;left:0;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:258px}._29hoo .yxuhE:hover{cursor:pointer}._29hoo ._2_rJ6{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURf///0dwTP///////////////////////////////////////////////zbjKbUAAAANdFJOUwEAJPI6552cStiLq2Woe3PGAAAAnUlEQVQY02WQsQkCYQyFc1d4gk1uBIu/ECwsXOAGOXABwQUEF7AQXECcx0rQ4ni7mPdyyImp8vFBXhJrJ2W/MD9lt14GnN8V+7q/EHAgFBAaUNX9swvwI1XBVtOoJAhUEsppMEgIQknkBgug+0JBZpnCgVc1QozaY5fAjJmUZbhLWW7VSlluRXULeCg81CZgddWhfqfx8QH+95BJfQBZdj+u6kgOxQAAAABJRU5ErkJggg==) 50% no-repeat;background-size:12px 12px;height:12px;opacity:.8;padding:6px;position:absolute;right:2px;top:2px;width:12px;z-index:3}._29hoo ._3dXp6{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;justify-content:space-between;padding:0 16px;position:relative;width:100%;z-index:4}._29hoo ._2CGLg{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwA0Ycd2Bxv26quMELfWnE+dQo3gAAABUUlEQVRIx51WgbKEIAhUEzGt5P+/9oF5U/muknPmZm6ShWVF0Jh+QUnLGhHjuqQC5mVlNyOdFs4uP5iDb9bsnaM0jL8LA66aTN42C7B+qnD31T7IZvSh++rFyxT+21vewPSFcE7MM9r+s8Pvfj6xsaPlOO52qyFsvH1BWPbvn+T2HOPEKsQX+4qIB2PmuL0dKbOaTglMrzUgXlsaEAnDq70JSBE+9JIZWKklmhl5OS9bWrxQLseVmUneM/Cdo11B0Tp1SkkWM9ElAynYrelCeMmCaOaU8ZCrLqnP2eyeiDqhEEzpz+wBwJyKULajACtJLUQwCgCixawUzSjARFrrbxgg3pGjDAMW1lkNUFNSJ62WVX1w6tJQF5+6vPUX6PaKws0VVTcBfZsZa2RwNLL6X9Uq9c1YFERNu9cPFP3I0g9F/dgVWrrBrn86/PA4GXn+/AFGkx/SqKgjjQAAAABJRU5ErkJggg==) 0 0 no-repeat;background-size:cover;height:24px;width:24px}._29hoo ._2CGLg._3yeus{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUdwTP///////////////////////////////////////////////////////////////////4ZSzFsAAAARdFJOUwAvjcq7GmDq9gcQpXfWbUt8rYduugAAAVJJREFUSMedVtm2wyAIdBfUNOH/f7Zo0tvEaxbKOXmJDAyrKtULzsZNESBOzsyobiSFDLQTyCFdqOOyabN19rJhljM3GJqKLXrTQF1sg4ehvq+Hsfjub6lWrP+vr/kAzIBwMswz6v534L/Oj7l6x7Y6WoH95tMcYubjA0Kz/ddVul/sY8fKxxv9hohfxpyffFdSZmV3AbjbHkD3FwZGAq9uxQPF1exCZNQDMURLKwwj0xNAYiZpjaB0dQI7jxBljYLDP0bgasPlQVS+JRPhm65V1haPg8JYAlRzz0h9hsfqAae5xq7HAE5elwxd88mM8QzQjw5yhdVEUZ0CWOHgPtLUvgvAcXSqdWAvV4BDFzgCOUBMSRy0OK3iwolbQ9x84vYeDpC7GiDxiIqXgHzNiBeZQumqlC9j8bqXXyjyK0t+Kcqv3RqZ7GKXPx1+eJw8ef68AR8+IxSCShR0AAAAAElFTkSuQmCC) 0 0 no-repeat;background-size:cover;height:24px;width:24px}._29hoo ._1keAE{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTP///////////////////////////////////////////////////4sGkswAAAANdFJOUwDkIfZNbtYMgDqjBsifXeqhAAAAa0lEQVQoz2NgoAZgClWAsx1FgMTkuxYbYAKyF4HE2bt3M2ECd++Cibt3l6MLXHRAE7h7SwFN4K4pusDdQ+gCl7vRBO5eU0ATuCuOLnCFoIA4AUMxrD1EwOnonkPxvi16AGEEIUYgY0QD5QAA86Ojm4AZawAAAAAASUVORK5CYII=) 0 0 no-repeat;background-size:16px 16px;height:16px;width:16px}._29hoo ._1MRZ3{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwAuT2UdlcfjBBBDrPm8gNZg1wMaAAABAklEQVQ4y5VT27aFIAiMvISXlP//2g1uSys662weWthMOAy0LL9FAAjvKBpPHN6gjtsGN4pV8U2w7fvUGDsDhQXYwsn+xFd+vS440nskInfkjig9CHw3HDmwikeLRPnoDjET4ZNAp0WBD9oV8cijcoUI870s+knwMgkj1xjI3CH4UoKqiWAqaQW6lT2SMi5IJ5yL8vmaO5h90SZVWuFo31ZFxlOHcLQlXheNXdrnVfOU56M0voWbrfbN5kEwzg4T61kNKpsgBBhLYefZJNkmIcRp8fhs/iSIC95JgE7A84/YdAI32p32X0K9E9ir1UgEHgpbUhgLdQi72iqjbraFf/3vH4MNEHFb8PieAAAAAElFTkSuQmCC) 0 0 no-repeat;background-size:16px 16px;height:16px;width:16px}._29hoo ._3pr3i{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURf///0dwTP///////////////////////////////////////////////////////yMjVUcAAAAPdFJOU4AADOlNOyGxX8Fs0ouV4LpVCSQAAADaSURBVCjPldE7CsJAEAbgOYCwjhixsRAFwcJC7IN4gOAJJJWdwcZeLxA8geANPIF4BE9gZS/GIMHH72Y3SCaVTrffso9/hrhQ9DM4vgRnHwuonHARMIKEKeB+oUpUAgbKQGfB5EHXq2khfDRJ6fVjzBYCHEglREtOYXbmOvpkt1II38z7Ww5aWLJ65qCMI3v3HDhY8yTJQQ07CVXM5ZEGDvLSAEP5bJjoe6/mpysDOlkPR5Ml2mZZVOTbtNE2g5vth4toY6A7th3ruoUWpiJBS1wYVNv/e7bf+gChqIbKQjrjggAAAABJRU5ErkJggg==) 0 0 no-repeat;background-size:16px 16px;height:16px;width:16px}._29hoo._2nEKW ._3pr3i,._29hoo._2nEKW ._3rM0s{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAgOUKff3Uw5ZkGG04BtCnEPntSkMex8CpinNcVEgwIfTJsybGR/lLAAAAyklEQVQ4y72SSQ6DMAxFTRLmQJlbWqCT73/GmkQ0i+IsuuBJIMR/8IMJHE/39sa6xHrh4yoJEVGx+SRwJWDi/oVEsyPMamV8UCym4FeYcSNMKjBClmZ2TWlPZ7XlpQawQozNna4zgZG9dQ6IWwFOwFJCEaMRXOtX0DXiCRIq7fYFSKnxQscVGME8vb6FFYoBESPpEZ5W+KvCv0j/Z/KDspOUwI7aInIJez+rpcwprtDRqoAYhVEGfkfJ3ChG8CsKwKuEGnzIdoHD+QDqhx659rKf7AAAAABJRU5ErkJggg==)}._29hoo ._3rM0s{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURf///0dwTP///////////////////////////////////////////////////////yMjVUcAAAAPdFJOU4AADOlNOyGxX8Fs0ouV4LpVCSQAAADaSURBVCjPldE7CsJAEAbgOYCwjhixsRAFwcJC7IN4gOAJJJWdwcZeLxA8geANPIF4BE9gZS/GIMHH72Y3SCaVTrffso9/hrhQ9DM4vgRnHwuonHARMIKEKeB+oUpUAgbKQGfB5EHXq2khfDRJ6fVjzBYCHEglREtOYXbmOvpkt1II38z7Ww5aWLJ65qCMI3v3HDhY8yTJQQ07CVXM5ZEGDvLSAEP5bJjoe6/mpysDOlkPR5Ml2mZZVOTbtNE2g5vth4toY6A7th3ruoUWpiJBS1wYVNv/e7bf+gChqIbKQjrjggAAAABJRU5ErkJggg==) 0 0 no-repeat;background-size:16px 16px;bottom:10px;height:16px;left:50%;position:absolute;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:16px}._29hoo ._2emlj{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-negative:0;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-shrink:0;flex-shrink:0;-webkit-justify-content:space-between;justify-content:space-between}._29hoo ._24ewg{background-color:hsla(0,0%,100%,.16);border-radius:1px;height:2px;margin-right:8px;position:relative;width:126px}._29hoo .xsQyG{background-color:hsla(0,0%,100%,.6);border-radius:1px;height:100%;left:0;position:absolute;top:0}._29hoo ._2I2N3,._29hoo .xIoYh{color:hsla(0,0%,100%,.7);cursor:default;font-size:12px;font-weight:200;line-height:1;width:32px}._29hoo ._3FpGf{position:relative}._29hoo ._1Lv75{background:#333;border-radius:12px;bottom:26px;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.3);box-shadow:0 2px 10px 0 rgba(0,0,0,.3);display:none;height:116px;width:30px;z-index:4}._29hoo ._1Lv75,._29hoo ._26Shv{left:50%;position:absolute;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}._29hoo ._26Shv{background-color:hsla(210,1%,72%,.3);border-radius:2px;bottom:31px;cursor:pointer;height:75px;width:4px}._29hoo ._2iH-v{border-radius:2px;left:0;width:100%}._29hoo ._2iH-v,._29hoo .NZ1fB{background-color:#fff;bottom:0;position:absolute}._29hoo .NZ1fB{border-radius:50%;cursor:pointer;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;z-index:1}._29hoo .NZ1fB:hover{-webkit-transform:translate(-50%) scale(1.6);-ms-transform:translate(-50%) scale(1.6);transform:translate(-50%) scale(1.6)}._29hoo ._2I2N3{margin-right:8px}._29hoo ._1M48y{-webkit-box-orient:vertical;background:rgba(0,0,0,.2);-webkit-box-sizing:border-box;box-sizing:border-box;display:none;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:124px;margin-bottom:12px;padding:12px 16px 0 12px;position:relative;z-index:3}._29hoo ._1M48y,._29hoo ._3g6Hz{-webkit-box-direction:normal;width:100%}._29hoo ._3g6Hz{-webkit-box-orient:horizontal;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._29hoo ._2rUmK{color:#fff;font-size:14px;line-height:1;margin-right:6px}._29hoo ._16XCR{color:#fff;font-size:12px;font-weight:200;line-height:14px;opacity:.7}._29hoo ._3uiQc{background:hsla(0,0%,100%,.1);border-radius:9px;color:#fff;cursor:pointer;font-size:12px;font-weight:400;height:18px;line-height:18px;position:absolute;right:8px;text-align:center;top:16px;width:40px}._29hoo .nWBd1{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;width:56px}._29hoo .nWBd1._13Usk .PY9AU,._29hoo .nWBd1._13Usk .VY6Gt{display:block}._29hoo .nWBd1._13Usk ._3OUcG{opacity:1}._29hoo .nWBd1:hover .VY6Gt{display:block}._29hoo .nWBd1:hover ._3OUcG{opacity:1}._29hoo .nWBd1:not(:last-child){margin-right:14px}._29hoo .VY6Gt{border:2px solid #315efb;border-radius:10px;-webkit-box-sizing:content-box;box-sizing:content-box;display:none;height:50px;left:50%;position:absolute;top:-3px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:50px}._29hoo ._1ljTf{-ms-overflow-style:none;-webkit-box-orient:horizontal;-webkit-box-direction:normal;scrollbar-height:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:70px;overflow-x:scroll;overflow-y:visible;padding-top:16px;scrollbar-width:none}._29hoo ._1ljTf::-webkit-scrollbar{background:transparent;height:0;width:0}._29hoo .mH2VU{border-radius:8px;height:48px;margin-bottom:8px;width:48px}._29hoo .PY9AU{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTDNf/TNg/TFf/DFf/DVh/zdp/zFe/DFf/DFe/DNe/TFf/DJe/DZi/zFe+////7XF/aW5/cfU/mqL/Ddj+5Ss/e3x/lXfZe0AAAAOdFJOUwBbRfvuGguX2vV0wLYvfoQSDAAAAL1JREFUKM9tklkWwyAIRZ1BY8mc/S+1YDOo6fswx/siIKjUTz5ljA6z9qqWB0unLFSWjlTJmYsnamX1+T/1suWMj2/DBTago+vKC/AB2/JpHNmJoc88j8UgrXLZbxWfqMRCwcext5wGJTWtvN8bTqicfBYmc83ZwJJCnKXiHCrfVYp3FcHJz4Zsc8PJPBfcj+nh0hOgP0rSRPfmKE1UxvY8fs6BdE68R2iaaPh5hh7gnpZLoXknQcOAOIC58BembBh83jJfWAAAAABJRU5ErkJggg==") no-repeat 0 0;background-size:cover;display:none;height:14px;position:absolute;right:0;top:-7px;width:14px}._29hoo ._3OUcG{color:#fff;font-size:13px;font-weight:200;line-height:1;opacity:.7;white-space:nowrap}@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){._29hoo ._1Zy0R:after{border-radius:16px;height:200%;left:0;top:0;-webkit-transform:scale(.5) translate(-1px,-1px);-ms-transform:scale(.5) translate(-1px,-1px);transform:scale(.5) translate(-1px,-1px);width:200%}}@media (-webkit-min-device-pixel-ratio:2.9),(min-device-pixel-ratio:2.9){._29hoo ._1Zy0R:after{border-radius:24px;height:300%;left:0;top:0;-webkit-transform:scale(.3333) translate(-1px,-1px);-ms-transform:scale(.3333) translate(-1px,-1px);transform:scale(.3333) translate(-1px,-1px);width:300%}}', "assign"), "undefined" != typeof document && document.getElementById("tts-player-css") || function (t) {
    if (t && "undefined" != typeof document) {
      var e = cc11001100_hook("e", document.head || document.getElementsByTagName("head")[0], "var-init"),
        o = cc11001100_hook("o", document.createElement("style"), "var-init");
      o.type = cc11001100_hook("o.type", "text/css", "assign"), o.dataset.for = cc11001100_hook("o.dataset.for", "result", "assign"), o.id = cc11001100_hook("o.id", "tts-player-css", "assign"), e.appendChild(o), o.styleSheet ? o.styleSheet.cssText = cc11001100_hook("o.styleSheet.cssText", t, "assign") : o.appendChild(document.createTextNode(t));
    }
  }(xa);
  var _a = cc11001100_hook("_a", ne, "var-init"),
    Ta = cc11001100_hook("Ta", Yi, "var-init"),
    Ra = cc11001100_hook("Ra", ne, "var-init"),
    Ba = cc11001100_hook("Ba", mo, "var-init"),
    Oa = cc11001100_hook("Oa", z("match"), "var-init"),
    Sa = cc11001100_hook("Sa", de, "var-init"),
    Ua = function (t) {
      if (Sa(t)) throw TypeError("Cannot convert a Symbol value to a string");
      return String(t);
    },
    ka = cc11001100_hook("ka", he, "var-init"),
    La = function () {
      var t = cc11001100_hook("t", ka(this), "var-init"),
        e = cc11001100_hook("e", "", "var-init");
      return t.global && (e += cc11001100_hook("e", "g", "assign")), t.ignoreCase && (e += cc11001100_hook("e", "i", "assign")), t.multiline && (e += cc11001100_hook("e", "m", "assign")), t.dotAll && (e += cc11001100_hook("e", "s", "assign")), t.unicode && (e += cc11001100_hook("e", "u", "assign")), t.sticky && (e += cc11001100_hook("e", "y", "assign")), e;
    },
    Pa = cc11001100_hook("Pa", {}, "var-init"),
    Va = cc11001100_hook("Va", Q, "var-init"),
    Da = cc11001100_hook("Da", s.RegExp, "var-init");
  Pa.UNSUPPORTED_Y = cc11001100_hook("Pa.UNSUPPORTED_Y", Va(function () {
    var t = cc11001100_hook("t", Da("a", "y"), "var-init");
    return t.lastIndex = cc11001100_hook("t.lastIndex", 2, "assign"), null != t.exec("abcd");
  }), "assign"), Pa.BROKEN_CARET = cc11001100_hook("Pa.BROKEN_CARET", Va(function () {
    var t = cc11001100_hook("t", Da("^r", "gy"), "var-init");
    return t.lastIndex = cc11001100_hook("t.lastIndex", 2, "assign"), null != t.exec("str");
  }), "assign");
  var Qa = cc11001100_hook("Qa", Q, "var-init"),
    Na = cc11001100_hook("Na", s.RegExp, "var-init"),
    Ma = cc11001100_hook("Ma", Qa(function () {
      var t = cc11001100_hook("t", Na(".", "s"), "var-init");
      return !(t.dotAll && t.exec("\n") && "s" === t.flags);
    }), "var-init"),
    ja = cc11001100_hook("ja", Q, "var-init"),
    Ka = cc11001100_hook("Ka", s.RegExp, "var-init"),
    qa = cc11001100_hook("qa", ja(function () {
      var t = cc11001100_hook("t", Ka("(?<a>b)", "g"), "var-init");
      return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
    }), "var-init"),
    Fa = cc11001100_hook("Fa", oe, "var-init"),
    Za = cc11001100_hook("Za", s, "var-init"),
    Ga = cc11001100_hook("Ga", ki, "var-init"),
    Ya = function (t, e, o) {
      var i, n;
      return Ta && "function" == typeof (i = cc11001100_hook("i", e.constructor, "assign")) && i !== o && _a(n = cc11001100_hook("n", i.prototype, "assign")) && n !== o.prototype && Ta(t, n), t;
    },
    Wa = cc11001100_hook("Wa", Se, "var-init"),
    Ja = cc11001100_hook("Ja", ie.f, "var-init"),
    Ha = cc11001100_hook("Ha", Yo.f, "var-init"),
    Xa = function (t) {
      var e;
      return Ra(t) && (void 0 !== (e = cc11001100_hook("e", t[Oa], "assign")) ? !!e : "RegExp" == Ba(t));
    },
    za = cc11001100_hook("za", Ua, "var-init"),
    $a = cc11001100_hook("$a", La, "var-init"),
    ts = cc11001100_hook("ts", Pa, "var-init"),
    es = cc11001100_hook("es", ee.exports, "var-init"),
    os = cc11001100_hook("os", Q, "var-init"),
    is = cc11001100_hook("is", C, "var-init"),
    ns = cc11001100_hook("ns", Ao.enforce, "var-init"),
    rs = cc11001100_hook("rs", on, "var-init"),
    As = cc11001100_hook("As", Ma, "var-init"),
    as = cc11001100_hook("as", qa, "var-init"),
    ss = cc11001100_hook("ss", z("match"), "var-init"),
    cs = cc11001100_hook("cs", Za.RegExp, "var-init"),
    ls = cc11001100_hook("ls", cs.prototype, "var-init"),
    us = cc11001100_hook("us", /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/, "var-init"),
    hs = cc11001100_hook("hs", /a/g, "var-init"),
    ps = cc11001100_hook("ps", /a/g, "var-init"),
    ds = cc11001100_hook("ds", new cs(hs) !== hs, "var-init"),
    fs = cc11001100_hook("fs", ts.UNSUPPORTED_Y, "var-init"),
    gs = cc11001100_hook("gs", Fa && (!ds || fs || As || as || os(function () {
      return ps[ss] = cc11001100_hook("ps[ss]", !1, "assign"), cs(hs) != hs || cs(ps) == ps || "/a/i" != cs(hs, "i");
    })), "var-init");
  if (Ga("RegExp", gs)) {
    for (var ms = function (t, e) {
        var o,
          i,
          n,
          r,
          A,
          a,
          s = cc11001100_hook("s", this instanceof ms, "var-init"),
          c = cc11001100_hook("c", Xa(t), "var-init"),
          l = cc11001100_hook("l", void 0 === e, "var-init"),
          u = cc11001100_hook("u", [], "var-init"),
          h = cc11001100_hook("h", t, "var-init");
        if (!s && c && l && t.constructor === ms) return t;
        if ((c || t instanceof ms) && (t = cc11001100_hook("t", t.source, "assign"), l && (e = cc11001100_hook("e", ("flags" in h) ? h.flags : $a.call(h), "assign"))), t = cc11001100_hook("t", void 0 === t ? "" : za(t), "assign"), e = cc11001100_hook("e", void 0 === e ? "" : za(e), "assign"), h = cc11001100_hook("h", t, "assign"), As && ("dotAll" in hs) && (i = cc11001100_hook("i", !!e && e.indexOf("s") > -1, "assign")) && (e = cc11001100_hook("e", e.replace(/s/g, ""), "assign")), o = cc11001100_hook("o", e, "assign"), fs && ("sticky" in hs) && (n = cc11001100_hook("n", !!e && e.indexOf("y") > -1, "assign")) && (e = cc11001100_hook("e", e.replace(/y/g, ""), "assign")), as && (t = cc11001100_hook("t", (r = cc11001100_hook("r", function (t) {
          for (var e, o = cc11001100_hook("o", t.length, "var-init"), i = cc11001100_hook("i", 0, "var-init"), n = cc11001100_hook("n", "", "var-init"), r = cc11001100_hook("r", [], "var-init"), A = cc11001100_hook("A", {}, "var-init"), a = cc11001100_hook("a", !1, "var-init"), s = cc11001100_hook("s", !1, "var-init"), c = cc11001100_hook("c", 0, "var-init"), l = cc11001100_hook("l", "", "var-init"); o >= i; i++) {
            if ("\\" === (e = cc11001100_hook("e", t.charAt(i), "assign"))) e += cc11001100_hook("e", t.charAt(++i), "assign");else if ("]" === e) a = cc11001100_hook("a", !1, "assign");else if (!a) switch (!0) {
              case "[" === e:
                a = cc11001100_hook("a", !0, "assign");
                break;
              case "(" === e:
                us.test(t.slice(i + 1)) && (i += cc11001100_hook("i", 2, "assign"), s = cc11001100_hook("s", !0, "assign")), n += cc11001100_hook("n", e, "assign"), c++;
                continue;
              case ">" === e && s:
                if ("" === l || is(A, l)) throw new SyntaxError("Invalid capture group name");
                A[l] = cc11001100_hook("A[l]", !0, "assign"), r.push([l, c]), s = cc11001100_hook("s", !1, "assign"), l = cc11001100_hook("l", "", "assign");
                continue;
            }
            s ? l += cc11001100_hook("l", e, "assign") : n += cc11001100_hook("n", e, "assign");
          }
          return [n, r];
        }(t), "assign"))[0], "assign"), u = cc11001100_hook("u", r[1], "assign")), A = cc11001100_hook("A", Ya(cs(t, e), s ? this : ls, ms), "assign"), (i || n || u.length) && (a = cc11001100_hook("a", ns(A), "assign"), i && (a.dotAll = cc11001100_hook("a.dotAll", !0, "assign"), a.raw = cc11001100_hook("a.raw", ms(function (t) {
          for (var e, o = cc11001100_hook("o", t.length, "var-init"), i = cc11001100_hook("i", 0, "var-init"), n = cc11001100_hook("n", "", "var-init"), r = cc11001100_hook("r", !1, "var-init"); o >= i; i++) "\\" !== (e = cc11001100_hook("e", t.charAt(i), "assign")) ? r || "." !== e ? ("[" === e ? r = cc11001100_hook("r", !0, "assign") : "]" === e && (r = cc11001100_hook("r", !1, "assign")), n += cc11001100_hook("n", e, "assign")) : n += cc11001100_hook("n", "[\\s\\S]", "assign") : n += cc11001100_hook("n", e + t.charAt(++i), "assign");
          return n;
        }(t), o), "assign")), n && (a.sticky = cc11001100_hook("a.sticky", !0, "assign")), u.length && (a.groups = cc11001100_hook("a.groups", u, "assign"))), t !== h) try {
          Wa(A, "source", "" === h ? "(?:)" : h);
        } catch (t) {}
        return A;
      }, vs = function (t) {
        (t in ms) || Ja(ms, t, {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          get: function () {
            return cs[t];
          },
          set: function (e) {
            cs[t] = cc11001100_hook("cs[t]", e, "assign");
          }
        });
      }, Es = cc11001100_hook("Es", Ha(cs), "var-init"), ys = cc11001100_hook("ys", 0, "var-init"); Es.length > ys;) vs(Es[ys++]);
    ls.constructor = cc11001100_hook("ls.constructor", ms, "assign"), ms.prototype = cc11001100_hook("ms.prototype", ls, "assign"), es(Za, "RegExp", ms);
  }
  rs("RegExp");
  var ws,
    bs = cc11001100_hook("bs", pi, "var-init"),
    Cs = cc11001100_hook("Cs", di, "var-init"),
    xs = cc11001100_hook("xs", Object.keys || function (t) {
      return bs(t, Cs);
    }, "var-init"),
    Is = cc11001100_hook("Is", ie, "var-init"),
    _s = cc11001100_hook("_s", he, "var-init"),
    Ts = cc11001100_hook("Ts", xs, "var-init"),
    Rs = cc11001100_hook("Rs", oe ? Object.defineProperties : function (t, e) {
      _s(t);
      for (var o, i = cc11001100_hook("i", Ts(e), "var-init"), n = cc11001100_hook("n", i.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"); n > r;) Is.f(t, o = cc11001100_hook("o", i[r++], "assign"), e[o]);
      return t;
    }, "var-init"),
    Bs = cc11001100_hook("Bs", he, "var-init"),
    Os = cc11001100_hook("Os", Rs, "var-init"),
    Ss = cc11001100_hook("Ss", di, "var-init"),
    Us = cc11001100_hook("Us", Ze, "var-init"),
    ks = cc11001100_hook("ks", kn, "var-init"),
    Ls = cc11001100_hook("Ls", se, "var-init"),
    Ps = cc11001100_hook("Ps", Fe("IE_PROTO"), "var-init"),
    Vs = function () {},
    Ds = function (t) {
      return "<script>" + t + "</script>";
    },
    Qs = function (t) {
      t.write(Ds("")), t.close();
      var e = cc11001100_hook("e", t.parentWindow.Object, "var-init");
      return t = cc11001100_hook("t", null, "assign"), e;
    },
    Ns = function () {
      try {
        ws = cc11001100_hook("ws", new ActiveXObject("htmlfile"), "assign");
      } catch (t) {}
      var t, e;
      Ns = cc11001100_hook("Ns", "undefined" != typeof document ? document.domain && ws ? Qs(ws) : ((e = cc11001100_hook("e", Ls("iframe"), "assign")).style.display = cc11001100_hook("(e = Ls(\"iframe\")).style.display", "none", "assign"), ks.appendChild(e), e.src = cc11001100_hook("e.src", String("javascript:"), "assign"), (t = cc11001100_hook("t", e.contentWindow.document, "assign")).open(), t.write(Ds("document.F=Object")), t.close(), t.F) : Qs(ws), "assign");
      for (var o = cc11001100_hook("o", Ss.length, "var-init"); o--;) delete Ns.prototype[Ss[o]];
      return Ns();
    };
  Us[Ps] = cc11001100_hook("Us[Ps]", !0, "assign");
  var Ms = cc11001100_hook("Ms", Object.create || function (t, e) {
      var o;
      return null !== t ? (Vs.prototype = cc11001100_hook("Vs.prototype", Bs(t), "assign"), o = cc11001100_hook("o", new Vs(), "assign"), Vs.prototype = cc11001100_hook("Vs.prototype", null, "assign"), o[Ps] = cc11001100_hook("o[Ps]", t, "assign")) : o = cc11001100_hook("o", Ns(), "assign"), void 0 === e ? o : Os(o, e);
    }, "var-init"),
    js = cc11001100_hook("js", Ua, "var-init"),
    Ks = cc11001100_hook("Ks", La, "var-init"),
    qs = cc11001100_hook("qs", Pa, "var-init"),
    Fs = cc11001100_hook("Fs", c.exports, "var-init"),
    Zs = cc11001100_hook("Zs", Ms, "var-init"),
    Gs = cc11001100_hook("Gs", Ao.get, "var-init"),
    Ys = cc11001100_hook("Ys", Ma, "var-init"),
    Ws = cc11001100_hook("Ws", qa, "var-init"),
    Js = cc11001100_hook("Js", RegExp.prototype.exec, "var-init"),
    Hs = cc11001100_hook("Hs", Fs("native-string-replace", String.prototype.replace), "var-init"),
    Xs = cc11001100_hook("Xs", Js, "var-init"),
    zs = cc11001100_hook("zs", function () {
      var t = cc11001100_hook("t", /a/, "var-init"),
        e = cc11001100_hook("e", /b*/g, "var-init");
      return Js.call(t, "a"), Js.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex;
    }(), "var-init"),
    $s = cc11001100_hook("$s", qs.UNSUPPORTED_Y || qs.BROKEN_CARET, "var-init"),
    tc = cc11001100_hook("tc", void 0 !== /()??/.exec("")[1], "var-init");
  (zs || tc || $s || Ys || Ws) && (Xs = cc11001100_hook("Xs", function (t) {
    var e,
      o,
      i,
      n,
      r,
      A,
      a,
      s = cc11001100_hook("s", this, "var-init"),
      c = cc11001100_hook("c", Gs(s), "var-init"),
      l = cc11001100_hook("l", js(t), "var-init"),
      u = cc11001100_hook("u", c.raw, "var-init");
    if (u) return u.lastIndex = cc11001100_hook("u.lastIndex", s.lastIndex, "assign"), e = cc11001100_hook("e", Xs.call(u, l), "assign"), s.lastIndex = cc11001100_hook("s.lastIndex", u.lastIndex, "assign"), e;
    var h = cc11001100_hook("h", c.groups, "var-init"),
      p = cc11001100_hook("p", $s && s.sticky, "var-init"),
      d = cc11001100_hook("d", Ks.call(s), "var-init"),
      f = cc11001100_hook("f", s.source, "var-init"),
      g = cc11001100_hook("g", 0, "var-init"),
      m = cc11001100_hook("m", l, "var-init");
    if (p && (-1 === (d = cc11001100_hook("d", d.replace("y", ""), "assign")).indexOf("g") && (d += cc11001100_hook("d", "g", "assign")), m = cc11001100_hook("m", l.slice(s.lastIndex), "assign"), s.lastIndex > 0 && (!s.multiline || s.multiline && "\n" !== l.charAt(s.lastIndex - 1)) && (f = cc11001100_hook("f", "(?: " + f + ")", "assign"), m = cc11001100_hook("m", " " + m, "assign"), g++), o = cc11001100_hook("o", new RegExp("^(?:" + f + ")", d), "assign")), tc && (o = cc11001100_hook("o", new RegExp("^" + f + "$(?!\\s)", d), "assign")), zs && (i = cc11001100_hook("i", s.lastIndex, "assign")), n = cc11001100_hook("n", Js.call(p ? o : s, m), "assign"), p ? n ? (n.input = cc11001100_hook("n.input", n.input.slice(g), "assign"), n[0] = cc11001100_hook("n[0]", n[0].slice(g), "assign"), n.index = cc11001100_hook("n.index", s.lastIndex, "assign"), s.lastIndex += cc11001100_hook("s.lastIndex", n[0].length, "assign")) : s.lastIndex = cc11001100_hook("s.lastIndex", 0, "assign") : zs && n && (s.lastIndex = cc11001100_hook("s.lastIndex", s.global ? n.index + n[0].length : i, "assign")), tc && n && n.length > 1 && Hs.call(n[0], o, function () {
      for (r = cc11001100_hook("r", 1, "assign"); r < arguments.length - 2; r++) void 0 === arguments[r] && (n[r] = cc11001100_hook("n[r]", void 0, "assign"));
    }), n && h) for (n.groups = cc11001100_hook("n.groups", A = cc11001100_hook("A", Zs(null), "assign"), "assign"), r = cc11001100_hook("r", 0, "assign"); r < h.length; r++) A[(a = cc11001100_hook("a", h[r], "assign"))[0]] = cc11001100_hook("A[(a = h[r])[0]]", n[a[1]], "assign");
    return n;
  }, "assign"));
  var ec = cc11001100_hook("ec", Xs, "var-init");
  ji({
    target: cc11001100_hook("target", "RegExp", "object-key-init"),
    proto: cc11001100_hook("proto", !0, "object-key-init"),
    forced: cc11001100_hook("forced", /./.exec !== ec, "object-key-init")
  }, {
    exec: cc11001100_hook("exec", ec, "object-key-init")
  });
  var oc = cc11001100_hook("oc", ee.exports, "var-init"),
    ic = cc11001100_hook("ic", he, "var-init"),
    nc = cc11001100_hook("nc", Ua, "var-init"),
    rc = cc11001100_hook("rc", Q, "var-init"),
    Ac = cc11001100_hook("Ac", La, "var-init"),
    ac = cc11001100_hook("ac", "toString", "var-init"),
    sc = cc11001100_hook("sc", RegExp.prototype, "var-init"),
    cc = cc11001100_hook("cc", sc.toString, "var-init"),
    lc = cc11001100_hook("lc", rc(function () {
      return "/a/b" != cc.call({
        source: cc11001100_hook("source", "a", "object-key-init"),
        flags: cc11001100_hook("flags", "b", "object-key-init")
      });
    }), "var-init"),
    uc = cc11001100_hook("uc", cc.name != ac, "var-init");
  (lc || uc) && oc(RegExp.prototype, ac, function () {
    var t = cc11001100_hook("t", ic(this), "var-init"),
      e = cc11001100_hook("e", nc(t.source), "var-init"),
      o = cc11001100_hook("o", t.flags, "var-init");
    return "/" + e + "/" + nc(void 0 === o && t instanceof RegExp && !("flags" in sc) ? Ac.call(t) : o);
  }, {
    unsafe: cc11001100_hook("unsafe", !0, "object-key-init")
  });
  var hc = cc11001100_hook("hc", ee.exports, "var-init"),
    pc = cc11001100_hook("pc", ec, "var-init"),
    dc = cc11001100_hook("dc", Q, "var-init"),
    fc = cc11001100_hook("fc", z, "var-init"),
    gc = cc11001100_hook("gc", Se, "var-init"),
    mc = cc11001100_hook("mc", fc("species"), "var-init"),
    vc = cc11001100_hook("vc", RegExp.prototype, "var-init"),
    Ec = function (t, e, o, i) {
      var n = cc11001100_hook("n", fc(t), "var-init"),
        r = cc11001100_hook("r", !dc(function () {
          var e = cc11001100_hook("e", {}, "var-init");
          return e[n] = cc11001100_hook("e[n]", function () {
            return 7;
          }, "assign"), 7 != ""[t](e);
        }), "var-init"),
        A = cc11001100_hook("A", r && !dc(function () {
          var e = cc11001100_hook("e", !1, "var-init"),
            o = cc11001100_hook("o", /a/, "var-init");
          return "split" === t && ((o = cc11001100_hook("o", {}, "assign")).constructor = cc11001100_hook("(o = {}).constructor", {}, "assign"), o.constructor[mc] = cc11001100_hook("o.constructor[mc]", function () {
            return o;
          }, "assign"), o.flags = cc11001100_hook("o.flags", "", "assign"), o[n] = cc11001100_hook("o[n]", /./[n], "assign")), o.exec = cc11001100_hook("o.exec", function () {
            return e = cc11001100_hook("e", !0, "assign"), null;
          }, "assign"), o[n](""), !e;
        }), "var-init");
      if (!r || !A || o) {
        var a = cc11001100_hook("a", /./[n], "var-init"),
          s = cc11001100_hook("s", e(n, ""[t], function (t, e, o, i, n) {
            var A = cc11001100_hook("A", e.exec, "var-init");
            return A === pc || A === vc.exec ? r && !n ? {
              done: cc11001100_hook("done", !0, "object-key-init"),
              value: cc11001100_hook("value", a.call(e, o, i), "object-key-init")
            } : {
              done: cc11001100_hook("done", !0, "object-key-init"),
              value: cc11001100_hook("value", t.call(o, e, i), "object-key-init")
            } : {
              done: cc11001100_hook("done", !1, "object-key-init")
            };
          }), "var-init");
        hc(String.prototype, t, s[0]), hc(vc, n, s[1]);
      }
      i && gc(vc[n], "sham", !0);
    },
    yc = cc11001100_hook("yc", Ho, "var-init"),
    wc = cc11001100_hook("wc", Ua, "var-init"),
    bc = cc11001100_hook("bc", v, "var-init"),
    Cc = function (t) {
      return function (e, o) {
        var i,
          n,
          r = cc11001100_hook("r", wc(bc(e)), "var-init"),
          A = cc11001100_hook("A", yc(o), "var-init"),
          a = cc11001100_hook("a", r.length, "var-init");
        return 0 > A || A >= a ? t ? "" : void 0 : (i = cc11001100_hook("i", r.charCodeAt(A), "assign")) < 55296 || i > 56319 || A + 1 === a || (n = cc11001100_hook("n", r.charCodeAt(A + 1), "assign")) < 56320 || n > 57343 ? t ? r.charAt(A) : i : t ? r.slice(A, A + 2) : n - 56320 + (i - 55296 << 10) + 65536;
      };
    },
    xc = cc11001100_hook("xc", {
      codeAt: cc11001100_hook("codeAt", Cc(!1), "object-key-init"),
      charAt: cc11001100_hook("charAt", Cc(!0), "object-key-init")
    }, "var-init"),
    Ic = cc11001100_hook("Ic", xc.charAt, "var-init"),
    _c = function (t, e, o) {
      return e + (o ? Ic(t, e).length : 1);
    },
    Tc = cc11001100_hook("Tc", mo, "var-init"),
    Rc = cc11001100_hook("Rc", ec, "var-init"),
    Bc = function (t, e) {
      var o = cc11001100_hook("o", t.exec, "var-init");
      if ("function" == typeof o) {
        var i = cc11001100_hook("i", o.call(t, e), "var-init");
        if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
        return i;
      }
      if ("RegExp" !== Tc(t)) throw TypeError("RegExp#exec called on incompatible receiver");
      return Rc.call(t, e);
    },
    Oc = cc11001100_hook("Oc", he, "var-init"),
    Sc = cc11001100_hook("Sc", $o, "var-init"),
    Uc = cc11001100_hook("Uc", Ua, "var-init"),
    kc = cc11001100_hook("kc", v, "var-init"),
    Lc = cc11001100_hook("Lc", _c, "var-init"),
    Pc = cc11001100_hook("Pc", Bc, "var-init");
  Ec("match", function (t, e, o) {
    return [function (e) {
      var o = cc11001100_hook("o", kc(this), "var-init"),
        i = cc11001100_hook("i", null == e ? void 0 : e[t], "var-init");
      return void 0 !== i ? i.call(e, o) : new RegExp(e)[t](Uc(o));
    }, function (t) {
      var i = cc11001100_hook("i", Oc(this), "var-init"),
        n = cc11001100_hook("n", Uc(t), "var-init"),
        r = cc11001100_hook("r", o(e, i, n), "var-init");
      if (r.done) return r.value;
      if (!i.global) return Pc(i, n);
      var A = cc11001100_hook("A", i.unicode, "var-init");
      i.lastIndex = cc11001100_hook("i.lastIndex", 0, "assign");
      for (var a, s = cc11001100_hook("s", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); null !== (a = cc11001100_hook("a", Pc(i, n), "assign"));) {
        var l = cc11001100_hook("l", Uc(a[0]), "var-init");
        s[c] = cc11001100_hook("s[c]", l, "assign"), "" === l && (i.lastIndex = cc11001100_hook("i.lastIndex", Lc(n, Sc(i.lastIndex), A), "assign")), c++;
      }
      return 0 === c ? null : s;
    }];
  });
  var Vc = cc11001100_hook("Vc", y, "var-init"),
    Dc = cc11001100_hook("Dc", Math.floor, "var-init"),
    Qc = cc11001100_hook("Qc", "".replace, "var-init"),
    Nc = cc11001100_hook("Nc", /\$([$&'`]|\d{1,2}|<[^>]*>)/g, "var-init"),
    Mc = cc11001100_hook("Mc", /\$([$&'`]|\d{1,2})/g, "var-init"),
    jc = cc11001100_hook("jc", Ec, "var-init"),
    Kc = cc11001100_hook("Kc", Q, "var-init"),
    qc = cc11001100_hook("qc", he, "var-init"),
    Fc = cc11001100_hook("Fc", Ho, "var-init"),
    Zc = cc11001100_hook("Zc", $o, "var-init"),
    Gc = cc11001100_hook("Gc", Ua, "var-init"),
    Yc = cc11001100_hook("Yc", v, "var-init"),
    Wc = cc11001100_hook("Wc", _c, "var-init"),
    Jc = function (t, e, o, i, n, r) {
      var A = cc11001100_hook("A", o + t.length, "var-init"),
        a = cc11001100_hook("a", i.length, "var-init"),
        s = cc11001100_hook("s", Mc, "var-init");
      return void 0 !== n && (n = cc11001100_hook("n", Vc(n), "assign"), s = cc11001100_hook("s", Nc, "assign")), Qc.call(r, s, function (r, s) {
        var c;
        switch (s.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return t;
          case "`":
            return e.slice(0, o);
          case "'":
            return e.slice(A);
          case "<":
            c = cc11001100_hook("c", n[s.slice(1, -1)], "assign");
            break;
          default:
            var l = cc11001100_hook("l", +s, "var-init");
            if (0 === l) return r;
            if (l > a) {
              var u = cc11001100_hook("u", Dc(l / 10), "var-init");
              return 0 === u ? r : a >= u ? void 0 === i[u - 1] ? s.charAt(1) : i[u - 1] + s.charAt(1) : r;
            }
            c = cc11001100_hook("c", i[l - 1], "assign");
        }
        return void 0 === c ? "" : c;
      });
    },
    Hc = cc11001100_hook("Hc", Bc, "var-init"),
    Xc = cc11001100_hook("Xc", z("replace"), "var-init"),
    zc = cc11001100_hook("zc", Math.max, "var-init"),
    $c = cc11001100_hook("$c", Math.min, "var-init"),
    tl = cc11001100_hook("tl", "$0" === "a".replace(/./, "$0"), "var-init"),
    el = cc11001100_hook("el", !!/./[Xc] && "" === /./[Xc]("a", "$0"), "var-init");
  jc("replace", function (t, e, o) {
    var i = cc11001100_hook("i", el ? "$" : "$0", "var-init");
    return [function (t, o) {
      var i = cc11001100_hook("i", Yc(this), "var-init"),
        n = cc11001100_hook("n", null == t ? void 0 : t[Xc], "var-init");
      return void 0 !== n ? n.call(t, i, o) : e.call(Gc(i), t, o);
    }, function (t, n) {
      var r = cc11001100_hook("r", qc(this), "var-init"),
        A = cc11001100_hook("A", Gc(t), "var-init");
      if ("string" == typeof n && -1 === n.indexOf(i) && -1 === n.indexOf("$<")) {
        var a = cc11001100_hook("a", o(e, r, A, n), "var-init");
        if (a.done) return a.value;
      }
      var s = cc11001100_hook("s", "function" == typeof n, "var-init");
      s || (n = cc11001100_hook("n", Gc(n), "assign"));
      var c = cc11001100_hook("c", r.global, "var-init");
      if (c) {
        var l = cc11001100_hook("l", r.unicode, "var-init");
        r.lastIndex = cc11001100_hook("r.lastIndex", 0, "assign");
      }
      for (var u = cc11001100_hook("u", [], "var-init");;) {
        var h = cc11001100_hook("h", Hc(r, A), "var-init");
        if (null === h) break;
        if (u.push(h), !c) break;
        "" === Gc(h[0]) && (r.lastIndex = cc11001100_hook("r.lastIndex", Wc(A, Zc(r.lastIndex), l), "assign"));
      }
      for (var p, d = cc11001100_hook("d", "", "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < u.length; g++) {
        h = cc11001100_hook("h", u[g], "assign");
        for (var m = cc11001100_hook("m", Gc(h[0]), "var-init"), v = cc11001100_hook("v", zc($c(Fc(h.index), A.length), 0), "var-init"), E = cc11001100_hook("E", [], "var-init"), y = cc11001100_hook("y", 1, "var-init"); y < h.length; y++) E.push(void 0 === (p = cc11001100_hook("p", h[y], "assign")) ? p : String(p));
        var w = cc11001100_hook("w", h.groups, "var-init");
        if (s) {
          var b = cc11001100_hook("b", [m].concat(E, v, A), "var-init");
          void 0 !== w && b.push(w);
          var C = cc11001100_hook("C", Gc(n.apply(void 0, b)), "var-init");
        } else C = cc11001100_hook("C", Jc(m, A, v, E, w, n), "assign");
        v >= f && (d += cc11001100_hook("d", A.slice(f, v) + C, "assign"), f = cc11001100_hook("f", v + m.length, "assign"));
      }
      return d + A.slice(f);
    }];
  }, !!Kc(function () {
    var t = cc11001100_hook("t", /./, "var-init");
    return t.exec = cc11001100_hook("t.exec", function () {
      var t = cc11001100_hook("t", [], "var-init");
      return t.groups = cc11001100_hook("t.groups", {
        a: cc11001100_hook("a", "7", "object-key-init")
      }, "assign"), t;
    }, "assign"), "7" !== "".replace(t, "$<a>");
  }) || !tl || el);
  var ol,
    il,
    nl,
    rl,
    Al,
    al = function (t) {
      var e = cc11001100_hook("e", "", "var-init");
      for (var o in t) e += cc11001100_hook("e", o + "=" + t[o] + "&", "assign");
      return e;
    },
    sl = function (t) {
      var e = cc11001100_hook("e", Math.floor(t / 60), "var-init"),
        o = cc11001100_hook("o", Math.floor(t - 60 * e), "var-init");
      return (10 > e ? "0" + e : e) + ":" + (10 > o ? "0" + o : o);
    };
  !function (t) {
    t.NET_WORK_ERROR = cc11001100_hook("t.NET_WORK_ERROR", "netWorkError", "assign"), t.LOAD_ERROR = cc11001100_hook("t.LOAD_ERROR", "loadError", "assign"), t.UPDATE_VOICE_ERROR = cc11001100_hook("t.UPDATE_VOICE_ERROR", "updateVoiceError", "assign"), t.UNKNOWN_ERROR = cc11001100_hook("t.UNKNOWN_ERROR", "unknownError", "assign"), t.COMMON_ERROR = cc11001100_hook("t.COMMON_ERROR", "commonError", "assign");
  }(ol || (ol = cc11001100_hook("ol", {}, "assign"))), function (t) {
    t.LOAD_VOICES = cc11001100_hook("t.LOAD_VOICES", "loadVoices", "assign"), t.PLAY_END = cc11001100_hook("t.PLAY_END", "playEnd", "assign"), t.PAUSE = cc11001100_hook("t.PAUSE", "pause", "assign"), t.PLAY = cc11001100_hook("t.PLAY", "play", "assign"), t.START_PLAY = cc11001100_hook("t.START_PLAY", "startPlay", "assign"), t.DISABLE_NEXT = cc11001100_hook("t.DISABLE_NEXT", "disableNext", "assign"), t.ENABLE_NEXT = cc11001100_hook("t.ENABLE_NEXT", "enableNext", "assign"), t.UPDATE_DURATION = cc11001100_hook("t.UPDATE_DURATION", "updateDuration", "assign"), t.CHANGE_ID = cc11001100_hook("t.CHANGE_ID", "changeId", "assign"), t.CHANGE_PARAGRAPH = cc11001100_hook("t.CHANGE_PARAGRAPH", "changeParagraph", "assign"), t.ERROR = cc11001100_hook("t.ERROR", "error", "assign"), t.LOAD_SOURCE_START = cc11001100_hook("t.LOAD_SOURCE_START", "loadSourceStart", "assign"), t.LOAD_SOURCE_COMPLETE = cc11001100_hook("t.LOAD_SOURCE_COMPLETE", "loadSourceComplete", "assign");
  }(il || (il = cc11001100_hook("il", {}, "assign"))), function (t) {
    t.PAUSE_CLICK = cc11001100_hook("t.PAUSE_CLICK", "pauseClick", "assign"), t.CONTINUE_CLICK = cc11001100_hook("t.CONTINUE_CLICK", "continueClick", "assign"), t.NEXT_CLICK = cc11001100_hook("t.NEXT_CLICK", "nextClick", "assign"), t.VOICE_CHANGE_CLICK = cc11001100_hook("t.VOICE_CHANGE_CLICK", "voiceChangeClick", "assign"), t.VOICE_COLUMN_CLICK = cc11001100_hook("t.VOICE_COLUMN_CLICK", "voiceColumnClick", "assign"), t.CLOSE_CLICK = cc11001100_hook("t.CLOSE_CLICK", "closeClick", "assign"), t.VOLUME_CHANGE = cc11001100_hook("t.VOLUME_CHANGE", "volumeChange", "assign"), t.VOICE_CHOOSE = cc11001100_hook("t.VOICE_CHOOSE", "voiceChoose", "assign"), t.CLICK_TITLE = cc11001100_hook("t.CLICK_TITLE", "clickTitle", "assign"), t.SHOW_PLAYER = cc11001100_hook("t.SHOW_PLAYER", "showPlayer", "assign");
  }(nl || (nl = cc11001100_hook("nl", {}, "assign"))), function (t) {
    t.PLAY_END = cc11001100_hook("t.PLAY_END", "playEnd", "assign"), t.CHANGE_PARAGRAPH = cc11001100_hook("t.CHANGE_PARAGRAPH", "changeParagraph", "assign"), t.START_PLAY = cc11001100_hook("t.START_PLAY", "startPlay", "assign"), t.PLAY_CLICK = cc11001100_hook("t.PLAY_CLICK", "playClick", "assign"), t.PAUSE_CLICK = cc11001100_hook("t.PAUSE_CLICK", "pauseClick", "assign"), t.PLAY = cc11001100_hook("t.PLAY", "play", "assign"), t.PAUSE = cc11001100_hook("t.PAUSE", "pause", "assign"), t.CLICK_TITLE = cc11001100_hook("t.CLICK_TITLE", "clickTitle", "assign"), t.ERROR = cc11001100_hook("t.ERROR", "error", "assign");
  }(rl || (rl = cc11001100_hook("rl", {}, "assign"))), function (t) {
    t.SHOW = cc11001100_hook("t.SHOW", "1", "assign"), t.CLICK = cc11001100_hook("t.CLICK", "2", "assign"), t.DURATION = cc11001100_hook("t.DURATION", "8", "assign");
  }(Al || (Al = cc11001100_hook("Al", {}, "assign")));
  var cl = cc11001100_hook("cl", "data:image/png;base64,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", "var-init"),
    ll = cc11001100_hook("ll", function () {
      function t(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if (this._el = cc11001100_hook("this._el", document.querySelector(t.rootSelector), "assign"), this.top = cc11001100_hook("this.top", t.top, "assign"), this.right = cc11001100_hook("this.right", t.right, "assign"), this.bottom = cc11001100_hook("this.bottom", t.bottom, "assign"), this.left = cc11001100_hook("this.left", t.left, "assign"), this._smallRight = cc11001100_hook("this._smallRight", t.smallRight, "assign"), this._rootClassName = cc11001100_hook("this._rootClassName", t.rootClassName || "", "assign"), this._enableSmallPosition = cc11001100_hook("this._enableSmallPosition", t.enableSmallPosition, "assign"), this._maxWidth = cc11001100_hook("this._maxWidth", t.maxWidth || "100%", "assign"), this._watchSmallWidth = cc11001100_hook("this._watchSmallWidth", t.smallWidth, "assign"), this.duration = cc11001100_hook("this.duration", 0, "assign"), this.image = cc11001100_hook("this.image", cl, "assign"), this.title = cc11001100_hook("this.title", "", "assign"), this.volume = cc11001100_hook("this.volume", 1, "assign"), this._imageEl = cc11001100_hook("this._imageEl", null, "assign"), this._eventEmitter = cc11001100_hook("this._eventEmitter", e, "assign"), this.prefixClass = cc11001100_hook("this.prefixClass", "pcTts", "assign"), this._isPlaying = cc11001100_hook("this._isPlaying", !1, "assign"), this._disableNext = cc11001100_hook("this._disableNext", !0, "assign"), this._showingVoiceColumn = cc11001100_hook("this._showingVoiceColumn", !1, "assign"), this._renderedVoices = cc11001100_hook("this._renderedVoices", !1, "assign"), this.isRendered = cc11001100_hook("this.isRendered", !1, "assign"), this.isRendering = cc11001100_hook("this.isRendering", !1, "assign"), this._preVolume = cc11001100_hook("this._preVolume", this.volume, "assign"), this._pointHeight = cc11001100_hook("this._pointHeight", 8, "assign"), !this._el) throw new Error("Tts Player UI init fail!");
      }
      return t.prototype.editPosition = cc11001100_hook("t.prototype.editPosition", function (t) {
        this._playerContainerEl && (this.left = cc11001100_hook("this.left", t.left || this.left, "assign"), this.top = cc11001100_hook("this.top", t.top || this.top, "assign"), this.bottom = cc11001100_hook("this.bottom", t.bottom || this.bottom, "assign"), this.right = cc11001100_hook("this.right", t.right || this.right, "assign"), this._playerContainerEl.style.left = cc11001100_hook("this._playerContainerEl.style.left", this.left, "assign"), this._playerContainerEl.style.top = cc11001100_hook("this._playerContainerEl.style.top", this.top, "assign"), this._playerContainerEl.style.right = cc11001100_hook("this._playerContainerEl.style.right", this.right, "assign"), this._playerContainerEl.style.bottom = cc11001100_hook("this._playerContainerEl.style.bottom", this.bottom, "assign"));
      }, "assign"), t.prototype.hide = cc11001100_hook("t.prototype.hide", function () {
        this._changeShowingChooseDialog(!1), this._closeVoiceColumn(), this._el.style.display = cc11001100_hook("this._el.style.display", "none", "assign");
      }, "assign"), t.prototype.show = cc11001100_hook("t.prototype.show", function () {
        "none" === this._el.style.display && (this._el.style.display = cc11001100_hook("this._el.style.display", "", "assign"), this._eventEmitter.emit(nl.SHOW_PLAYER));
      }, "assign"), t.prototype._watchResize = cc11001100_hook("t.prototype._watchResize", function () {
        var t = cc11001100_hook("t", this, "var-init");
        window.addEventListener("resize", function () {
          t.judgeSmallWidth();
        });
      }, "assign"), t.prototype.judgeSmallWidth = cc11001100_hook("t.prototype.judgeSmallWidth", function () {
        var t = cc11001100_hook("t", this.getStyle("Small"), "var-init");
        window.innerWidth < this._watchSmallWidth ? (this._enableSmallPosition && (this._playerContainerEl.style.right = cc11001100_hook("this._playerContainerEl.style.right", this._smallRight, "assign")), this._playerContainerEl.classList.toggle(t, !0)) : (this._playerContainerEl.style.right = cc11001100_hook("this._playerContainerEl.style.right", this.right, "assign"), this._playerContainerEl.classList.toggle(t, !1));
      }, "assign"), t.prototype.getStyle = cc11001100_hook("t.prototype.getStyle", function (t) {
        var e = cc11001100_hook("e", "" + this.prefixClass + t, "var-init");
        return Ia[e];
      }, "assign"), t.prototype.render = cc11001100_hook("t.prototype.render", function () {
        var t = cc11001100_hook("t", this, "var-init");
        if (!this.isRendered && !this.isRendering) {
          this.isRendering = cc11001100_hook("this.isRendering", !0, "assign");
          var e = cc11001100_hook("e", this.getStyle.bind(this), "var-init"),
            o = cc11001100_hook("o", this._rootClassName ? this._rootClassName : e("FixContainer"), "var-init");
          this._el.innerHTML = cc11001100_hook("this._el.innerHTML", '\n            <div class="' + o + '" style="max-width: ' + this._maxWidth + ';">\n                <div class="' + e("Container") + '"\n                    style="' + this._getContainerOptionStyle() + '"\n                >\n                <div class="' + e("Info") + '">\n                    <div class="' + e("ImageContainer") + '">\n                        <div class="' + e("ImageWrapper") + '">\n                            <img src="' + this.image + '" class="' + e("Image") + '"/>\n                        </div>\n                        <div class="' + e("PlayingAni") + '">\n                        </div>\n                        <div class="' + e("LoadingAni") + '"></div>\n                    </div>\n                    <div class="' + e("Title") + " " + e("TitleDefault") + '">\n                        ' + this.title + '\n                    </div>\n                </div>\n                <div class="' + e("VoiceChooseContainer") + '">\n                    <div class="' + e("VoiceChooseNotice") + '">\n                        <div class="' + e("VoiceChooseTitle") + '">选择朗读音色</div>\n                        <div class="' + e("VoiceChooseTips") + '">支持多选，交替朗读</div>\n                    </div>\n                    <div class="' + e("VoiceChooseLeftIcon") + " " + e("VoiceChooseIcon") + '"></div>\n                    <div class="' + e("VoiceChooseRightIcon") + " " + e("VoiceChooseIcon") + '"></div>\n                    <div class="' + e("VoicesContainer") + '">\n                    </div>\n                </div>\n                <div class="' + e("Tools") + '">\n                    <a class="' + e("PlayIcon") + " " + e("Icon") + " " + e("EnableIcon") + '" title="播放/暂停"></a>\n                    <a class="' + e("NextIcon") + " " + e("Icon") + '" title="下一首"></a>\n                    <div class="' + e("ProgressContainer") + '">\n                        <div class="' + e("CurrentTimeText") + '">00:00</div>\n                        <div class="' + e("ProgressBarContainer") + '">\n                            <div class="' + e("ProgressBarInner") + '"></div>\n                        </div>\n                        <div class="' + e("EndTimeText") + '">00:00</div>\n                    </div>\n                    <a class="' + e("VoiceChangeIcon") + " " + e("EnableIcon") + " " + e("Icon") + '" title="音色调整"></a>\n                    <div class="' + e("VoiceColumnContainer") + '">\n                        <a class="' + e("VoiceColumnIcon") + " " + e("EnableIcon") + " " + e("Icon") + '" title="音量调整"></a>\n                        <div class="' + e("VoiceColumn") + '">\n                            <div class="' + e("VoiceBar") + '">\n                                <div class="' + e("VoicePoint") + '" style="width: ' + this._pointHeight + "px; height: " + this._pointHeight + 'px;"></div>\n                                <div class="' + e("VoiceActiveBar") + '"></div>\n                            </div>\n                            <a class="' + e("VoiceSubIcon") + " " + e("EnableIcon") + " " + e("Icon") + '" title="静音"></a>\n                        </div>\n                    </div>\n                </div>\n                <div class="' + e("Front") + '"></div>\n                <div class="' + e("BackgroundContainer") + '">\n                    <div class="' + e("Background") + '"></div>\n                </div>\n                <a class="' + e("CloseBtn") + " " + e("EnableIcon") + " " + e("Icon") + '}" title="关闭"></a>\n            </div>\n            </div>', "assign"), i().then(function () {
            t._eventsInit(), t._renderVoices(), t.judgeSmallWidth(), t.isRendered = cc11001100_hook("t.isRendered", !0, "assign"), t._eventEmitter.emit(nl.SHOW_PLAYER);
          });
        }
      }, "assign"), t.prototype.initVoiceList = cc11001100_hook("t.prototype.initVoiceList", function (t) {
        this._voiceList = cc11001100_hook("this._voiceList", t, "assign"), this._isInitVoiceList = cc11001100_hook("this._isInitVoiceList", !0, "assign"), this._renderedVoices && this._updateVoices();
      }, "assign"), t.prototype._renderVoices = cc11001100_hook("t.prototype._renderVoices", function () {
        var t = cc11001100_hook("t", this, "var-init"),
          e = cc11001100_hook("e", this._voiceList.map(function (e) {
            return t._renderVoiceItem(e);
          }), "var-init");
        this._voicesEl.innerHTML = cc11001100_hook("this._voicesEl.innerHTML", e.join(""), "assign"), this._renderedVoices = cc11001100_hook("this._renderedVoices", !0, "assign");
      }, "assign"), t.prototype._updateVoices = cc11001100_hook("t.prototype._updateVoices", function () {
        var t = cc11001100_hook("t", this, "var-init");
        this._voiceList.forEach(function (e) {
          t._voicesEl.querySelector("div[data-onlineid='" + e.onlineId + "']").classList.toggle(t.getStyle("VoiceItemActive"), e.isSelected);
        });
      }, "assign"), t.prototype._renderVoiceItem = cc11001100_hook("t.prototype._renderVoiceItem", function (t) {
        var e = cc11001100_hook("e", this.getStyle.bind(this), "var-init");
        return '<div class="' + [e("VoiceItem"), t.isSelected ? e("VoiceItemActive") : ""].join(" ") + '" data-onlineid="' + t.onlineId + '">\n            <img class="' + e("VoiceItemImage") + '" src="' + t.coverImg + '" alt="">\n            <div class="' + e("VoiceItemHoverBorder") + '"></div>\n            <div class="' + e("VoiceChecked") + '"></div>\n            <div class="' + e("VoiceItemTitle") + '">' + t.displayName + "</div>\n        </div>";
      }, "assign"), t.prototype._eventsInit = cc11001100_hook("t.prototype._eventsInit", function () {
        this._bindElements(), this._bindPlayerEvents(), this._bindDomEvents();
      }, "assign"), t.prototype._bindElements = cc11001100_hook("t.prototype._bindElements", function () {
        var t = cc11001100_hook("t", this.getStyle.bind(this), "var-init");
        this._playerContainerEl = cc11001100_hook("this._playerContainerEl", this._el.querySelector("." + t("Container")), "assign"), this._imageEl = cc11001100_hook("this._imageEl", this._el.querySelector("." + t("Image")), "assign"), this._titleEl = cc11001100_hook("this._titleEl", this._el.querySelector("." + t("Title")), "assign"), this._backgroundEl = cc11001100_hook("this._backgroundEl", this._el.querySelector("." + t("Background")), "assign"), this._playIconEl = cc11001100_hook("this._playIconEl", this._el.querySelector("." + t("PlayIcon")), "assign"), this._nextIconEl = cc11001100_hook("this._nextIconEl", this._el.querySelector("." + t("NextIcon")), "assign"), this._voiceChangeIconEl = cc11001100_hook("this._voiceChangeIconEl", this._el.querySelector("." + t("VoiceChangeIcon")), "assign"), this._voiceColumnIconEl = cc11001100_hook("this._voiceColumnIconEl", this._el.querySelector("." + t("VoiceColumnIcon")), "assign"), this._voiceMuteIconEl = cc11001100_hook("this._voiceMuteIconEl", this._el.querySelector("." + t("VoiceSubIcon")), "assign"), this._closeIconEl = cc11001100_hook("this._closeIconEl", this._el.querySelector("." + t("CloseBtn")), "assign"), this._curTimeEl = cc11001100_hook("this._curTimeEl", this._el.querySelector("." + t("CurrentTimeText")), "assign"), this._endTimeEl = cc11001100_hook("this._endTimeEl", this._el.querySelector("." + t("EndTimeText")), "assign"), this._voiceColumnPointEl = cc11001100_hook("this._voiceColumnPointEl", this._el.querySelector("." + t("VoicePoint")), "assign"), this._voiceActiveBarEl = cc11001100_hook("this._voiceActiveBarEl", this._el.querySelector("." + t("VoiceActiveBar")), "assign"), this._voiceBar = cc11001100_hook("this._voiceBar", this._el.querySelector("." + t("VoiceBar")), "assign"), this._voiceColumn = cc11001100_hook("this._voiceColumn", this._el.querySelector("." + t("VoiceColumn")), "assign"), this._progressBarInnerEl = cc11001100_hook("this._progressBarInnerEl", this._el.querySelector("." + t("ProgressBarInner")), "assign"), this._progressContainerEl = cc11001100_hook("this._progressContainerEl", this._el.querySelector("." + t("ProgressBarContainer")), "assign"), this._voiceChooseDialogEl = cc11001100_hook("this._voiceChooseDialogEl", this._el.querySelector("." + t("VoiceChooseContainer")), "assign"), this._voiceChooseLeftIcon = cc11001100_hook("this._voiceChooseLeftIcon", this._el.querySelector("." + t("VoiceChooseLeftIcon")), "assign"), this._voiceChooseRightIcon = cc11001100_hook("this._voiceChooseRightIcon", this._el.querySelector("." + t("VoiceChooseRightIcon")), "assign"), this._voicesEl = cc11001100_hook("this._voicesEl", this._el.querySelector("." + t("VoicesContainer")), "assign");
      }, "assign"), t.prototype._changeResourceStyle = cc11001100_hook("t.prototype._changeResourceStyle", function (t) {
        this.image = cc11001100_hook("this.image", t.image || cl, "assign"), this._imageEl.src = cc11001100_hook("this._imageEl.src", this.image, "assign"), this._setImageStyle(), this._titleEl.innerText = cc11001100_hook("this._titleEl.innerText", t.title, "assign"), this._titleEl.classList.toggle(this.getStyle("TitleDefault"), !t.title), this._endTimeEl.innerText = cc11001100_hook("this._endTimeEl.innerText", sl(+t.duration), "assign"), this._curTimeEl.innerText = cc11001100_hook("this._curTimeEl.innerText", sl(0), "assign"), this.duration = cc11001100_hook("this.duration", +t.duration, "assign"), this._progressBarInnerEl.style.width = cc11001100_hook("this._progressBarInnerEl.style.width", "0", "assign");
      }, "assign"), t.prototype._bindPlayerEvents = cc11001100_hook("t.prototype._bindPlayerEvents", function () {
        var t = cc11001100_hook("t", this, "var-init");
        this._eventEmitter.on(il.START_PLAY, function () {
          t._changePlayState(!0), t._changeLoadingState(!1);
        }), this._eventEmitter.on(il.LOAD_SOURCE_COMPLETE, function (e) {
          var o = cc11001100_hook("o", e.playItem, "var-init");
          t._changeResourceStyle(o);
        }), this._eventEmitter.on(il.LOAD_SOURCE_START, function () {
          t.show(), t._changeLoadingState(!0), t._changePlayState(!1), t._changeResourceStyle({
            image: cc11001100_hook("image", "", "object-key-init"),
            duration: cc11001100_hook("duration", "", "object-key-init"),
            title: cc11001100_hook("title", "", "object-key-init"),
            titleList: cc11001100_hook("titleList", [], "object-key-init"),
            contentList: cc11001100_hook("contentList", [], "object-key-init"),
            id: cc11001100_hook("id", "", "object-key-init")
          });
        }), this._eventEmitter.on(il.PLAY_END, function () {
          t._changePlayState(!1);
        }), this._eventEmitter.on(il.UPDATE_DURATION, function (e) {
          var o = cc11001100_hook("o", e / t.duration, "var-init");
          o = cc11001100_hook("o", o > 1 ? 1 : o, "assign"), 0 === t.duration && (o = cc11001100_hook("o", 0, "assign")), t._curTimeEl.innerText = cc11001100_hook("t._curTimeEl.innerText", sl(o >= 1 ? t.duration : e), "assign"), t._progressBarInnerEl.style.width = cc11001100_hook("t._progressBarInnerEl.style.width", 100 * o + "%", "assign");
        }), this._eventEmitter.on(il.DISABLE_NEXT, function () {
          t._disableNext = cc11001100_hook("t._disableNext", !0, "assign"), t._nextIconEl.classList.toggle(t.getStyle("EnableIcon"), !1), t._nextIconEl.classList.toggle(t.getStyle("DisableIcon"), !0);
        }), this._eventEmitter.on(il.ENABLE_NEXT, function () {
          t._disableNext = cc11001100_hook("t._disableNext", !1, "assign"), t._nextIconEl.classList.toggle(t.getStyle("EnableIcon"), !0), t._nextIconEl.classList.toggle(t.getStyle("DisableIcon"), !1);
        }), this._eventEmitter.on(il.PLAY, function () {
          t._changePlayState(!0);
        }), this._eventEmitter.on(il.PAUSE, function () {
          t._changePlayState(!1);
        });
      }, "assign"), t.prototype._bindDomEvents = cc11001100_hook("t.prototype._bindDomEvents", function () {
        var t = cc11001100_hook("t", this, "var-init");
        this._titleEl.addEventListener("click", function (e) {
          n(e), t._eventEmitter.emit(nl.CLICK_TITLE);
        }), this._voicesEl.addEventListener("click", function (o) {
          n(o);
          var i = cc11001100_hook("i", o.target, "var-init"),
            r = cc11001100_hook("r", t.getStyle("VoiceItem"), "var-init");
          if (e(i, r)) {
            for (var A = cc11001100_hook("A", function (t, e) {
                for (; t.parentElement;) {
                  if (t.classList.contains(e)) return t;
                  t = cc11001100_hook("t", t.parentElement, "assign");
                }
                return null;
              }(i, r).dataset.onlineid, "var-init"), a = cc11001100_hook("a", 0, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < t._voiceList.length; s++) if (t._voiceList[s].onlineId + "" === A) {
              a = cc11001100_hook("a", s, "assign");
              break;
            }
            t._voiceList[a].isSelected = cc11001100_hook("t._voiceList[a].isSelected", !t._voiceList[a].isSelected, "assign"), 0 === t._voiceList.filter(function (t) {
              return t.isSelected;
            }).length ? t._voiceList[a].isSelected = cc11001100_hook("t._voiceList[a].isSelected", !0, "assign") : t._eventEmitter.emit(nl.VOICE_CHOOSE, t._voiceList[a]);
          }
        }), this._voiceMuteIconEl.addEventListener("click", function (e) {
          n(e), t._changeVolumeStyle(t.volume > 0 ? 0 : t._preVolume);
        }), this._voiceChangeIconEl.addEventListener("click", function (e) {
          n(e), t._changeShowingChooseDialog(!t._showingVoiceChooseDialog), t._closeVoiceColumn(), t._eventEmitter.emit(nl.VOICE_CHANGE_CLICK);
        }), this._voiceChooseLeftIcon.addEventListener("click", function (e) {
          n(e), t._voicesEl.scrollTo({
            left: cc11001100_hook("left", 0, "object-key-init"),
            behavior: cc11001100_hook("behavior", "smooth", "object-key-init")
          });
        }), this._voiceChooseRightIcon.addEventListener("click", function (e) {
          n(e), t._voicesEl.scrollTo({
            left: cc11001100_hook("left", 1e3, "object-key-init"),
            behavior: cc11001100_hook("behavior", "smooth", "object-key-init")
          });
        }), this._playIconEl.addEventListener("click", function (e) {
          n(e), t._eventEmitter.emit(t._isPlaying ? nl.PAUSE_CLICK : nl.CONTINUE_CLICK);
        }), this._nextIconEl.addEventListener("click", function (e) {
          n(e), t._disableNext || t._eventEmitter.emit(nl.NEXT_CLICK);
        }), this._voiceColumnIconEl.addEventListener("click", function (e) {
          n(e), t._showingVoiceColumn ? t._closeVoiceColumn() : t._showVoiceColumn(), t._changeShowingChooseDialog(!1), t._eventEmitter.emit(nl.VOICE_COLUMN_CLICK);
        }), this._closeIconEl.addEventListener("click", function (e) {
          n(e), t._eventEmitter.emit(nl.CLOSE_CLICK);
        }), this._voiceBar.addEventListener("click", function (o) {
          n(o), e(o.target, t.getStyle("VoicePoint")) || t._calVolumeChange(o.y);
        }), this._voiceColumnPointEl.addEventListener("mousedown", function (e) {
          n(e), t._voiceColumnTouching = cc11001100_hook("t._voiceColumnTouching", !0, "assign");
        }), document.body.parentElement.addEventListener("mousemove", function (e) {
          t._voiceColumnTouching && t._calVolumeChange(e.y);
        }), document.body.parentElement.addEventListener("mouseup", function () {
          t._voiceColumnTouching = cc11001100_hook("t._voiceColumnTouching", !1, "assign");
        }), this._imageEl.addEventListener("load", function (e) {
          n(e), t._setImageStyle();
        }), this._watchResize();
      }, "assign"), t.prototype._calVolumeChange = cc11001100_hook("t.prototype._calVolumeChange", function (t) {
        var e = cc11001100_hook("e", this._voiceBar.getBoundingClientRect(), "var-init"),
          o = cc11001100_hook("o", e.bottom - t, "var-init");
        0 >= o ? o = cc11001100_hook("o", 0, "assign") : o > e.height - this._pointHeight && (o = cc11001100_hook("o", e.height - this._pointHeight, "assign")), this._voiceColumnPointEl.style.bottom = cc11001100_hook("this._voiceColumnPointEl.style.bottom", o + "px", "assign"), this._voiceActiveBarEl.style.height = cc11001100_hook("this._voiceActiveBarEl.style.height", o + this._pointHeight + "px", "assign");
        var i = cc11001100_hook("i", o / (e.height - this._pointHeight), "var-init");
        this.volume = cc11001100_hook("this.volume", i, "assign"), this._changeMuteState(0 === this.volume), this._eventEmitter.emit(nl.VOLUME_CHANGE, i);
      }, "assign"), t.prototype._changeVolumeStyle = cc11001100_hook("t.prototype._changeVolumeStyle", function (t) {
        var e = cc11001100_hook("e", (this._voiceBar.getBoundingClientRect().height - this._pointHeight) * t, "var-init");
        this._voiceColumnPointEl.style.bottom = cc11001100_hook("this._voiceColumnPointEl.style.bottom", e + "px", "assign"), this._voiceActiveBarEl.style.height = cc11001100_hook("this._voiceActiveBarEl.style.height", e + this._pointHeight + "px", "assign"), this._preVolume = cc11001100_hook("this._preVolume", this.volume, "assign"), this.volume = cc11001100_hook("this.volume", t, "assign"), this._changeMuteState(0 === this.volume), this._eventEmitter.emit(nl.VOLUME_CHANGE, t);
      }, "assign"), t.prototype._changeMuteState = cc11001100_hook("t.prototype._changeMuteState", function (t) {
        this._playerContainerEl.classList.toggle(this.getStyle("Muted"), t);
      }, "assign"), t.prototype._changeLoadingState = cc11001100_hook("t.prototype._changeLoadingState", function (t) {
        this._isLoading = cc11001100_hook("this._isLoading", t, "assign"), this._playerContainerEl.classList.toggle(this.getStyle("Loading"), t);
      }, "assign"), t.prototype._changePlayState = cc11001100_hook("t.prototype._changePlayState", function (t) {
        this._playIconEl.classList.toggle(this.getStyle("ContinueIcon"), !t), this._playerContainerEl.classList.toggle(this.getStyle("Playing"), t), this._isPlaying = cc11001100_hook("this._isPlaying", t, "assign");
      }, "assign"), t.prototype._changeShowingChooseDialog = cc11001100_hook("t.prototype._changeShowingChooseDialog", function (t) {
        this._voiceChooseDialogEl && this._playerContainerEl && this._voiceChangeIconEl && (this._showingVoiceChooseDialog = cc11001100_hook("this._showingVoiceChooseDialog", t, "assign"), this._voiceChooseDialogEl.style.display = cc11001100_hook("this._voiceChooseDialogEl.style.display", t ? "flex" : "none", "assign"), this._playerContainerEl.classList.toggle(this.getStyle("ShowingChoose"), this._showingVoiceChooseDialog), this._voiceChangeIconEl.classList.toggle(this.getStyle("ActiveIcon"), this._showingVoiceChooseDialog));
      }, "assign"), t.prototype._showVoiceColumn = cc11001100_hook("t.prototype._showVoiceColumn", function () {
        var t = cc11001100_hook("t", this, "var-init");
        if ("block" !== this._voiceColumn.style.display) {
          this._voiceColumnIconEl.classList.toggle(this.getStyle("ActiveIcon"), !0), this._voiceColumn.style.display = cc11001100_hook("this._voiceColumn.style.display", "block", "assign"), this._showingVoiceColumn = cc11001100_hook("this._showingVoiceColumn", !0, "assign"), i().then(function () {
            var e = cc11001100_hook("e", t._voiceBar.getBoundingClientRect(), "var-init"),
              o = cc11001100_hook("o", e.height * t.volume, "var-init");
            o >= e.height - t._pointHeight && (o = cc11001100_hook("o", e.height - t._pointHeight, "assign")), t._voiceColumnPointEl.style.bottom = cc11001100_hook("t._voiceColumnPointEl.style.bottom", o + "px", "assign"), t._voiceActiveBarEl.style.height = cc11001100_hook("t._voiceActiveBarEl.style.height", e.height * t.volume + "px", "assign");
          });
          var o = function n(o) {
            var i = cc11001100_hook("i", o.target, "var-init");
            t._voiceColumnTouching || e(i, t.getStyle("VoiceColumn")) || (t._closeVoiceColumn(), document.body.parentElement.removeEventListener("click", n));
          };
          i().then(function () {
            document.body.parentElement.addEventListener("click", o);
          });
        }
      }, "assign"), t.prototype._closeVoiceColumn = cc11001100_hook("t.prototype._closeVoiceColumn", function () {
        this._voiceColumnIconEl && this._voiceColumn && (this._showingVoiceColumn = cc11001100_hook("this._showingVoiceColumn", !1, "assign"), this._voiceColumn.style.display = cc11001100_hook("this._voiceColumn.style.display", "none", "assign"), this._voiceColumnIconEl.classList.remove(this.getStyle("ActiveIcon")));
      }, "assign"), t.prototype._setImageStyle = cc11001100_hook("t.prototype._setImageStyle", function () {
        var t = cc11001100_hook("t", "", "var-init"),
          e = cc11001100_hook("e", "", "var-init");
        this._imageEl.naturalWidth / this._imageEl.naturalHeight > 1 ? (t = cc11001100_hook("t", "auto", "assign"), e = cc11001100_hook("e", "100%", "assign")) : (t = cc11001100_hook("t", "100%", "assign"), e = cc11001100_hook("e", "auto", "assign")), this._imageEl.style.width = cc11001100_hook("this._imageEl.style.width", t, "assign"), this._imageEl.style.height = cc11001100_hook("this._imageEl.style.height", e, "assign"), this._backgroundEl.style.backgroundImage = cc11001100_hook("this._backgroundEl.style.backgroundImage", "url(" + this.image + ")", "assign");
      }, "assign"), t.prototype._getContainerOptionStyle = cc11001100_hook("t.prototype._getContainerOptionStyle", function () {
        return function (t) {
          var e = cc11001100_hook("e", "", "var-init");
          for (var o in t) t[o] && (e += cc11001100_hook("e", o + ": " + t[o] + ";", "assign"));
          return e;
        }({
          top: cc11001100_hook("top", this.top, "object-key-init"),
          right: cc11001100_hook("right", this.right, "object-key-init"),
          bottom: cc11001100_hook("bottom", this.bottom, "object-key-init"),
          left: cc11001100_hook("left", this.left, "object-key-init")
        });
      }, "assign"), t;
    }(), "var-init"),
    ul = cc11001100_hook("ul", y, "var-init"),
    hl = cc11001100_hook("hl", ii, "var-init"),
    pl = cc11001100_hook("pl", $o, "var-init"),
    dl = cc11001100_hook("dl", Ms, "var-init"),
    fl = cc11001100_hook("fl", ie, "var-init"),
    gl = cc11001100_hook("gl", z("unscopables"), "var-init"),
    ml = cc11001100_hook("ml", Array.prototype, "var-init");
  null == ml[gl] && fl.f(ml, gl, {
    configurable: cc11001100_hook("configurable", !0, "object-key-init"),
    value: cc11001100_hook("value", dl(null), "object-key-init")
  });
  var vl = function (t) {
      ml[gl][t] = cc11001100_hook("ml[gl][t]", !0, "assign");
    },
    El = cc11001100_hook("El", vl, "var-init");
  ji({
    target: cc11001100_hook("target", "Array", "object-key-init"),
    proto: cc11001100_hook("proto", !0, "object-key-init")
  }, {
    fill: function (t) {
      for (var e = cc11001100_hook("e", ul(this), "var-init"), o = cc11001100_hook("o", pl(e.length), "var-init"), i = cc11001100_hook("i", arguments.length, "var-init"), n = cc11001100_hook("n", hl(i > 1 ? arguments[1] : void 0, o), "var-init"), r = cc11001100_hook("r", i > 2 ? arguments[2] : void 0, "var-init"), A = cc11001100_hook("A", void 0 === r ? o : hl(r, o), "var-init"); A > n;) e[n++] = cc11001100_hook("e[n++]", t, "assign");
      return e;
    }
  }), El("fill");
  var yl,
    wl,
    bl,
    Cl = cc11001100_hook("Cl", !Q(function () {
      function t() {}
      return t.prototype.constructor = cc11001100_hook("t.prototype.constructor", null, "assign"), Object.getPrototypeOf(new t()) !== t.prototype;
    }), "var-init"),
    xl = cc11001100_hook("xl", C, "var-init"),
    Il = cc11001100_hook("Il", y, "var-init"),
    _l = cc11001100_hook("_l", Cl, "var-init"),
    Tl = cc11001100_hook("Tl", Fe("IE_PROTO"), "var-init"),
    Rl = cc11001100_hook("Rl", Object.prototype, "var-init"),
    Bl = cc11001100_hook("Bl", _l ? Object.getPrototypeOf : function (t) {
      return t = cc11001100_hook("t", Il(t), "assign"), xl(t, Tl) ? t[Tl] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Rl : null;
    }, "var-init"),
    Ol = cc11001100_hook("Ol", Q, "var-init"),
    Sl = cc11001100_hook("Sl", Bl, "var-init"),
    Ul = cc11001100_hook("Ul", Se, "var-init"),
    kl = cc11001100_hook("kl", C, "var-init"),
    Ll = cc11001100_hook("Ll", z("iterator"), "var-init"),
    Pl = cc11001100_hook("Pl", !1, "var-init");
  [].keys && ("next" in (bl = cc11001100_hook("bl", [].keys(), "assign")) ? (wl = cc11001100_hook("wl", Sl(Sl(bl)), "assign")) !== Object.prototype && (yl = cc11001100_hook("yl", wl, "assign")) : Pl = cc11001100_hook("Pl", !0, "assign")), (null == yl || Ol(function () {
    var t = cc11001100_hook("t", {}, "var-init");
    return yl[Ll].call(t) !== t;
  })) && (yl = cc11001100_hook("yl", {}, "assign")), kl(yl, Ll) || Ul(yl, Ll, function () {
    return this;
  });
  var Vl = cc11001100_hook("Vl", {
      IteratorPrototype: cc11001100_hook("IteratorPrototype", yl, "object-key-init"),
      BUGGY_SAFARI_ITERATORS: cc11001100_hook("BUGGY_SAFARI_ITERATORS", Pl, "object-key-init")
    }, "var-init"),
    Dl = cc11001100_hook("Dl", Vl.IteratorPrototype, "var-init"),
    Ql = cc11001100_hook("Ql", Ms, "var-init"),
    Nl = cc11001100_hook("Nl", Re, "var-init"),
    Ml = cc11001100_hook("Ml", Xi, "var-init"),
    jl = cc11001100_hook("jl", rn, "var-init"),
    Kl = function () {
      return this;
    },
    ql = cc11001100_hook("ql", ji, "var-init"),
    Fl = function (t, e, o) {
      var i = cc11001100_hook("i", e + " Iterator", "var-init");
      return t.prototype = cc11001100_hook("t.prototype", Ql(Dl, {
        next: cc11001100_hook("next", Nl(1, o), "object-key-init")
      }), "assign"), Ml(t, i, !1), jl[i] = cc11001100_hook("jl[i]", Kl, "assign"), t;
    },
    Zl = cc11001100_hook("Zl", Bl, "var-init"),
    Gl = cc11001100_hook("Gl", Yi, "var-init"),
    Yl = cc11001100_hook("Yl", Xi, "var-init"),
    Wl = cc11001100_hook("Wl", Se, "var-init"),
    Jl = cc11001100_hook("Jl", ee.exports, "var-init"),
    Hl = cc11001100_hook("Hl", rn, "var-init"),
    Xl = cc11001100_hook("Xl", Vl.IteratorPrototype, "var-init"),
    zl = cc11001100_hook("zl", Vl.BUGGY_SAFARI_ITERATORS, "var-init"),
    $l = cc11001100_hook("$l", z("iterator"), "var-init"),
    tu = cc11001100_hook("tu", "keys", "var-init"),
    eu = cc11001100_hook("eu", "values", "var-init"),
    ou = cc11001100_hook("ou", "entries", "var-init"),
    iu = function () {
      return this;
    },
    nu = function (t, e, o, i, n, r, A) {
      Fl(o, e, i);
      var a,
        s,
        c,
        l = function (t) {
          if (t === n && f) return f;
          if (!zl && t in p) return p[t];
          switch (t) {
            case tu:
            case eu:
            case ou:
              return function () {
                return new o(this, t);
              };
          }
          return function () {
            return new o(this);
          };
        },
        u = cc11001100_hook("u", e + " Iterator", "var-init"),
        h = cc11001100_hook("h", !1, "var-init"),
        p = cc11001100_hook("p", t.prototype, "var-init"),
        d = cc11001100_hook("d", p[$l] || p["@@iterator"] || n && p[n], "var-init"),
        f = cc11001100_hook("f", !zl && d || l(n), "var-init"),
        g = cc11001100_hook("g", "Array" == e && p.entries || d, "var-init");
      if (g && (a = cc11001100_hook("a", Zl(g.call(new t())), "assign"), Xl !== Object.prototype && a.next && (Zl(a) !== Xl && (Gl ? Gl(a, Xl) : "function" != typeof a[$l] && Wl(a, $l, iu)), Yl(a, u, !0))), n == eu && d && d.name !== eu && (h = cc11001100_hook("h", !0, "assign"), f = cc11001100_hook("f", function () {
        return d.call(this);
      }, "assign")), p[$l] !== f && Wl(p, $l, f), Hl[e] = cc11001100_hook("Hl[e]", f, "assign"), n) if (s = cc11001100_hook("s", {
        values: cc11001100_hook("values", l(eu), "object-key-init"),
        keys: cc11001100_hook("keys", r ? f : l(tu), "object-key-init"),
        entries: cc11001100_hook("entries", l(ou), "object-key-init")
      }, "assign"), A) for (c in s) (zl || h || !(c in p)) && Jl(p, c, s[c]);else ql({
        target: cc11001100_hook("target", e, "object-key-init"),
        proto: cc11001100_hook("proto", !0, "object-key-init"),
        forced: cc11001100_hook("forced", zl || h, "object-key-init")
      }, s);
      return s;
    },
    ru = cc11001100_hook("ru", Qo, "var-init"),
    Au = cc11001100_hook("Au", vl, "var-init"),
    au = cc11001100_hook("au", rn, "var-init"),
    su = cc11001100_hook("su", Ao, "var-init"),
    cu = cc11001100_hook("cu", nu, "var-init"),
    lu = cc11001100_hook("lu", "Array Iterator", "var-init"),
    uu = cc11001100_hook("uu", su.set, "var-init"),
    hu = cc11001100_hook("hu", su.getterFor(lu), "var-init"),
    pu = cc11001100_hook("pu", cu(Array, "Array", function (t, e) {
      uu(this, {
        type: cc11001100_hook("type", lu, "object-key-init"),
        target: cc11001100_hook("target", ru(t), "object-key-init"),
        index: cc11001100_hook("index", 0, "object-key-init"),
        kind: cc11001100_hook("kind", e, "object-key-init")
      });
    }, function () {
      var t = cc11001100_hook("t", hu(this), "var-init"),
        e = cc11001100_hook("e", t.target, "var-init"),
        o = cc11001100_hook("o", t.kind, "var-init"),
        i = cc11001100_hook("i", t.index++, "var-init");
      return !e || i >= e.length ? (t.target = cc11001100_hook("t.target", void 0, "assign"), {
        value: cc11001100_hook("value", void 0, "object-key-init"),
        done: cc11001100_hook("done", !0, "object-key-init")
      }) : "keys" == o ? {
        value: cc11001100_hook("value", i, "object-key-init"),
        done: cc11001100_hook("done", !1, "object-key-init")
      } : "values" == o ? {
        value: cc11001100_hook("value", e[i], "object-key-init"),
        done: cc11001100_hook("done", !1, "object-key-init")
      } : {
        value: cc11001100_hook("value", [i, e[i]], "object-key-init"),
        done: cc11001100_hook("done", !1, "object-key-init")
      };
    }, "values"), "var-init");
  au.Arguments = cc11001100_hook("au.Arguments", au.Array, "assign"), Au("keys"), Au("values"), Au("entries");
  var du = cc11001100_hook("du", xc.charAt, "var-init"),
    fu = cc11001100_hook("fu", Ua, "var-init"),
    gu = cc11001100_hook("gu", Ao, "var-init"),
    mu = cc11001100_hook("mu", nu, "var-init"),
    vu = cc11001100_hook("vu", "String Iterator", "var-init"),
    Eu = cc11001100_hook("Eu", gu.set, "var-init"),
    yu = cc11001100_hook("yu", gu.getterFor(vu), "var-init");
  mu(String, "String", function (t) {
    Eu(this, {
      type: cc11001100_hook("type", vu, "object-key-init"),
      string: cc11001100_hook("string", fu(t), "object-key-init"),
      index: cc11001100_hook("index", 0, "object-key-init")
    });
  }, function () {
    var t,
      e = cc11001100_hook("e", yu(this), "var-init"),
      o = cc11001100_hook("o", e.string, "var-init"),
      i = cc11001100_hook("i", e.index, "var-init");
    return i >= o.length ? {
      value: cc11001100_hook("value", void 0, "object-key-init"),
      done: cc11001100_hook("done", !0, "object-key-init")
    } : (t = cc11001100_hook("t", du(o, i), "assign"), e.index += cc11001100_hook("e.index", t.length, "assign"), {
      value: cc11001100_hook("value", t, "object-key-init"),
      done: cc11001100_hook("done", !1, "object-key-init")
    });
  });
  var wu = cc11001100_hook("wu", s, "var-init"),
    bu = cc11001100_hook("bu", da, "var-init"),
    Cu = cc11001100_hook("Cu", pu, "var-init"),
    xu = cc11001100_hook("xu", Se, "var-init"),
    Iu = cc11001100_hook("Iu", z, "var-init"),
    _u = cc11001100_hook("_u", Iu("iterator"), "var-init"),
    Tu = cc11001100_hook("Tu", Iu("toStringTag"), "var-init"),
    Ru = cc11001100_hook("Ru", Cu.values, "var-init");
  for (var Bu in bu) {
    var Ou = cc11001100_hook("Ou", wu[Bu], "var-init"),
      Su = cc11001100_hook("Su", Ou && Ou.prototype, "var-init");
    if (Su) {
      if (Su[_u] !== Ru) try {
        xu(Su, _u, Ru);
      } catch (t) {
        Su[_u] = cc11001100_hook("Su[_u]", Ru, "assign");
      }
      if (Su[Tu] || xu(Su, Tu, Bu), bu[Bu]) for (var Uu in Cu) if (Su[Uu] !== Cu[Uu]) try {
        xu(Su, Uu, Cu[Uu]);
      } catch (t) {
        Su[Uu] = cc11001100_hook("Su[Uu]", Cu[Uu], "assign");
      }
    }
  }
  var ku = cc11001100_hook("ku", ji, "var-init"),
    Lu = cc11001100_hook("Lu", ea.find, "var-init"),
    Pu = cc11001100_hook("Pu", vl, "var-init"),
    Vu = cc11001100_hook("Vu", "find", "var-init"),
    Du = cc11001100_hook("Du", !0, "var-init");
  Vu in [] && Array(1).find(function () {
    Du = cc11001100_hook("Du", !1, "assign");
  }), ku({
    target: cc11001100_hook("target", "Array", "object-key-init"),
    proto: cc11001100_hook("proto", !0, "object-key-init"),
    forced: cc11001100_hook("forced", Du, "object-key-init")
  }, {
    find: function (t) {
      return Lu(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), Pu(Vu);
  var Qu = cc11001100_hook("Qu", 0, "var-init"),
    Nu = function () {
      for (var t = cc11001100_hook("t", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) t[e] = cc11001100_hook("t[e]", arguments[e], "assign");
    },
    Mu = function () {
      for (var t = cc11001100_hook("t", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) t[e] = cc11001100_hook("t[e]", arguments[e], "assign");
    },
    ju = function () {
      for (var t = cc11001100_hook("t", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) t[e] = cc11001100_hook("t[e]", arguments[e], "assign");
    },
    Ku = cc11001100_hook("Ku", "tts_playerid", "var-init"),
    qu = function () {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    },
    Fu = cc11001100_hook("Fu", function () {
      function t(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        this.isPaused = cc11001100_hook("this.isPaused", !0, "assign"), this.curPlayItem = cc11001100_hook("this.curPlayItem", null, "assign"), this.curAudioIndex = cc11001100_hook("this.curAudioIndex", [0, 0], "assign"), this._contentCacheIndex = cc11001100_hook("this._contentCacheIndex", [0, 0], "assign"), this.curVoiceItem = cc11001100_hook("this.curVoiceItem", null, "assign"), this._loadOvertime = cc11001100_hook("this._loadOvertime", t.loadOvertime || 5e3, "assign"), this._eventEmitter = cc11001100_hook("this._eventEmitter", e, "assign"), this._maxCacheNum = cc11001100_hook("this._maxCacheNum", 4, "assign"), this.volume = cc11001100_hook("this.volume", 1, "assign"), this._sourceItems = cc11001100_hook("this._sourceItems", [], "assign"), this._getVoiceListApi = cc11001100_hook("this._getVoiceListApi", t.getVoiceListApi || "https://mbd.baidu.com/newspage/api/getpcvoicelist", "assign"), this._editVoiceListApi = cc11001100_hook("this._editVoiceListApi", t.editVoiceListApi || "https://mbd.baidu.com/newspage/api/updateuservoice", "assign"), this._userVoiceList = cc11001100_hook("this._userVoiceList", t.voiceList || [], "assign"), this._overtimeTimeout = cc11001100_hook("this._overtimeTimeout", null, "assign"), this._playItemPromise = cc11001100_hook("this._playItemPromise", null, "assign"), this._isPlayEnd = cc11001100_hook("this._isPlayEnd", !1, "assign"), this._isCaching = cc11001100_hook("this._isCaching", !1, "assign"), this._playDuration = cc11001100_hook("this._playDuration", 0, "assign"), this._editFunc = cc11001100_hook("this._editFunc", t.editFunc, "assign"), this._isFirstPlay = cc11001100_hook("this._isFirstPlay", !0, "assign"), this._audioLoadOvertime = cc11001100_hook("this._audioLoadOvertime", t.audioLoadOvertime || 15e3, "assign"), this._userVoiceList.length > 0 && this._initVoiceList(t.voiceList || []), this._init();
      }
      return t.prototype._editVoices = cc11001100_hook("t.prototype._editVoices", function (t) {
        var e = cc11001100_hook("e", this, "var-init");
        return new Promise(function (o, i) {
          r(e._editVoiceListApi, {
            voiceIds: cc11001100_hook("voiceIds", t, "object-key-init")
          }).then(function (t) {
            0 == +t.errno ? o() : (Mu(t), i("update voices failed"));
          });
        });
      }, "assign"), t.isSupport = cc11001100_hook("t.isSupport", function () {
        return t = cc11001100_hook("t", window.navigator.userAgent, "assign"), e = cc11001100_hook("e", t.indexOf("MSIE "), "assign"), o = cc11001100_hook("o", t.indexOf("Trident/"), "assign"), !(e > 0 || o > 0 || window.navigator.userAgent.match(/(iPad)/) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1);
        var t, e, o;
      }, "assign"), t.prototype._safariInit = cc11001100_hook("t.prototype._safariInit", function () {
        if (qu()) {
          var t = cc11001100_hook("t", document.createElement("audio"), "var-init");
          t.muted = cc11001100_hook("t.muted", !0, "assign"), t.autoplay = cc11001100_hook("t.autoplay", !0, "assign"), t.src = cc11001100_hook("t.src", "https://mbdp02.bdstatic.com/static/mp3/nothing.mp3", "assign"), this._safariAudio = cc11001100_hook("this._safariAudio", t, "assign"), document.body.appendChild(this._safariAudio);
        }
      }, "assign"), t.prototype._safariPlay = cc11001100_hook("t.prototype._safariPlay", function () {
        if (qu() && this._isFirstPlay) try {
          this._safariAudio.play(), o(this._safariAudio.parentElement, this._safariAudio), this._isFirstPlay = cc11001100_hook("this._isFirstPlay", !1, "assign");
        } catch (t) {
          Mu(t);
        }
      }, "assign"), t.prototype.getCurIndex = cc11001100_hook("t.prototype.getCurIndex", function () {
        if (!this.curPlayItem) return -2;
        for (var t = cc11001100_hook("t", this.curPlayItem.id, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < this._sourceItems.length; e++) if (this._sourceItems[e].id === t) return e;
        return -2;
      }, "assign"), t.prototype.hasNext = cc11001100_hook("t.prototype.hasNext", function () {
        return !!this.curPlayItem && !!this._sourceItems[this.getCurIndex() + 1];
      }, "assign"), t.prototype.playNextTts = cc11001100_hook("t.prototype.playNextTts", function () {
        Nu("开始播放下一首, 是否含有下一首:", this.hasNext()), this.hasNext() ? this.play(this._sourceItems[this.getCurIndex() + 1].id) : this._isPlayEnd = cc11001100_hook("this._isPlayEnd", !0, "assign");
      }, "assign"), t.prototype.changeVolume = cc11001100_hook("t.prototype.changeVolume", function (t) {
        this.curAudioEl && (this.curAudioEl.volume = cc11001100_hook("this.curAudioEl.volume", t, "assign"));
      }, "assign"), t.prototype._getPlayItem = cc11001100_hook("t.prototype._getPlayItem", function (t, e) {
        for (var o = cc11001100_hook("o", 0, "var-init"); o < this._sourceItems.length; o++) if (this._sourceItems[o].id === t) return this.loadSource(this._sourceItems[o], e).then(function (e) {
          return Nu("获取资源信息成功", e), e || Promise.reject({
            errorType: cc11001100_hook("errorType", ol.LOAD_ERROR, "object-key-init"),
            data: {
              id: cc11001100_hook("id", t, "object-key-init")
            }
          });
        });
        return Promise.reject({
          errorType: cc11001100_hook("errorType", ol.LOAD_ERROR, "object-key-init"),
          data: {
            msg: cc11001100_hook("msg", "id is not found!", "object-key-init"),
            id: cc11001100_hook("id", t, "object-key-init")
          }
        });
      }, "assign"), t.prototype._resetData = cc11001100_hook("t.prototype._resetData", function (t) {
        this._isPlayEnd = cc11001100_hook("this._isPlayEnd", !1, "assign"), this._isCaching = cc11001100_hook("this._isCaching", !1, "assign"), this._playDuration = cc11001100_hook("this._playDuration", t ? 0 : this._playDuration, "assign"), this._playStartTime = cc11001100_hook("this._playStartTime", new Date(), "assign"), this._eventEmitter.emit(il.LOAD_SOURCE_COMPLETE, {
          playItem: {
            id: cc11001100_hook("id", "", "object-key-init"),
            titleList: cc11001100_hook("titleList", [], "object-key-init"),
            contentList: cc11001100_hook("contentList", [], "object-key-init"),
            title: cc11001100_hook("title", "", "object-key-init"),
            image: cc11001100_hook("image", "", "object-key-init"),
            duration: cc11001100_hook("duration", 0, "object-key-init")
          }
        }), null !== this._overtimeTimeout && (clearTimeout(this._overtimeTimeout), this._overtimeTimeout = cc11001100_hook("this._overtimeTimeout", null, "assign")), this._pauseAudioEl(), this._cancelCalDuration();
      }, "assign"), t.prototype._initPlayItem = cc11001100_hook("t.prototype._initPlayItem", function (t, e, o, i) {
        var n = cc11001100_hook("n", this, "var-init");
        i = cc11001100_hook("i", void 0 === i ? 0 : i, "assign");
        var r = cc11001100_hook("r", null, "var-init"),
          A = cc11001100_hook("A", 0 === (o = cc11001100_hook("o", void 0 === o ? 0 : o, "assign")), "var-init");
        return this._getPlayItem(t, e).then(function (t) {
          n._eventEmitter.emit(il.LOAD_SOURCE_COMPLETE, {
            playItem: cc11001100_hook("playItem", t, "object-key-init")
          }), n.curPlayItem = cc11001100_hook("n.curPlayItem", t, "assign"), n._audioCache = cc11001100_hook("n._audioCache", new Array(n.curPlayItem.contentList.length + 1).fill(function () {
            return 0;
          }).map(function (t, e) {
            return new Array(0 === e ? n.curPlayItem.titleList.length : n.curPlayItem.contentList[e - 1].length);
          }), "assign");
          var e = cc11001100_hook("e", A ? n.curPlayItem.titleList.map(function (t) {
            return n._loadAudio(t);
          }) : [], "var-init");
          return n.curAudioIndex = cc11001100_hook("n.curAudioIndex", [o, i], "assign"), n.curPlayItem.contentList.length ? (n._contentCacheIndex = cc11001100_hook("n._contentCacheIndex", A ? n._moveToNextPos(0, 0, n.curPlayItem.contentList) : [o - 1, i], "assign"), r = cc11001100_hook("r", n._cacheContent(), "assign")) : r = cc11001100_hook("r", Promise.resolve(), "assign"), ju("first contentCacheIndex", n._contentCacheIndex), Promise.all(e);
        }).then(function (e) {
          return Nu("获取标题成功", t), n._audioCache[0] = cc11001100_hook("n._audioCache[0]", e, "assign"), r;
        }).then(function () {
          Nu("第一段正文加载完毕");
          var t = cc11001100_hook("t", n._moveToNextPos(o, i, n._audioCache), "var-init"),
            e = cc11001100_hook("e", t[0], "var-init"),
            r = cc11001100_hook("r", t[1], "var-init");
          n._setCurAudioEl(e, r), n._startWatchDuration();
        });
      }, "assign"), t.prototype._startWatchDuration = cc11001100_hook("t.prototype._startWatchDuration", function () {
        var t = cc11001100_hook("t", this, "var-init");
        null !== this._durationInterval && window.clearInterval(this._durationInterval), this._durationInterval = cc11001100_hook("this._durationInterval", window.setInterval(function () {
          var e = cc11001100_hook("e", t._calDuration(), "var-init");
          void 0 !== e && t._eventEmitter.emit(il.UPDATE_DURATION, e);
        }, 200), "assign");
      }, "assign"), t.prototype.play = cc11001100_hook("t.prototype.play", function (t, e, o, n) {
        var r = cc11001100_hook("r", this, "var-init");
        if (this._isLoading && void 0 !== o) ju("尝试播放id失败: ", t, "原因：loading中");else {
          var A = cc11001100_hook("A", this.curPlayItem && this.curPlayItem.id, "var-init"),
            a = cc11001100_hook("a", this.curPlayItem, "var-init"),
            s = cc11001100_hook("s", !1, "var-init");
          this._isLoading = cc11001100_hook("this._isLoading", !0, "assign"), Nu("开始播放id: ", t, "当前播放id: ", A, "当前播放状态:", this.isPaused), t !== A || this.isPaused || e === this.curVoiceItem ? (t !== A && this._eventEmitter.emit(il.CHANGE_ID, t), this._resetData(void 0 === o && void 0 === n), this._eventEmitter.emit(il.LOAD_SOURCE_START), this._safariPlay(), this._overtimeTimeout = cc11001100_hook("this._overtimeTimeout", window.setTimeout(function () {
            Mu("prepare failed", r._loadOvertime), s = cc11001100_hook("s", !0, "assign"), r._emitError(ol.NET_WORK_ERROR, {
              id: cc11001100_hook("id", t, "object-key-init")
            }), r._isLoading = cc11001100_hook("r._isLoading", !1, "assign");
          }, this._loadOvertime), "assign"), this._initPlayItem(t, e, o, n).then(function () {
            return i(20);
          }).then(function () {
            return s ? void 0 : (clearTimeout(r._overtimeTimeout), r._isLoading = cc11001100_hook("r._isLoading", !1, "assign"), r._playNextPart());
          }).then(function () {
            r._eventEmitter.emit(il.START_PLAY, {
              curPlayItem: cc11001100_hook("curPlayItem", r.curPlayItem, "object-key-init"),
              lastPlayItem: cc11001100_hook("lastPlayItem", a, "object-key-init")
            }), r._eventEmitter.emit(r.hasNext() ? il.ENABLE_NEXT : il.DISABLE_NEXT), r._eventEmitter.emit(il.CHANGE_PARAGRAPH, o);
          }).catch(function (e) {
            Mu("play " + t + " failed :", e), r._isLoading = cc11001100_hook("r._isLoading", !1, "assign"), s || (clearTimeout(r._overtimeTimeout), e.errorType ? r._emitError(e.errorType, MA(MA({}, e.data), {
              id: cc11001100_hook("id", t, "object-key-init")
            })) : r._emitError(ol.UNKNOWN_ERROR, {
              error: cc11001100_hook("error", e, "object-key-init"),
              id: cc11001100_hook("id", t, "object-key-init")
            }));
          })) : ju("开始播放失败 - 正在播放当前资源");
        }
      }, "assign"), t.prototype._calDuration = cc11001100_hook("t.prototype._calDuration", function () {
        var t = cc11001100_hook("t", this.curAudioIndex, "var-init"),
          e = cc11001100_hook("e", t[0], "var-init"),
          o = cc11001100_hook("o", t[1], "var-init");
        if (this._audioCache[e] && this._audioCache[e][o]) {
          var i = cc11001100_hook("i", this._audioCache[e][o], "var-init");
          return Math.floor(this._playDuration + i.currentTime);
        }
      }, "assign"), t.prototype._cancelCalDuration = cc11001100_hook("t.prototype._cancelCalDuration", function () {
        clearInterval(this._durationInterval);
      }, "assign"), t.prototype._cacheContent = cc11001100_hook("t.prototype._cacheContent", function (t, e) {
        var o,
          i = cc11001100_hook("i", this, "var-init"),
          n = cc11001100_hook("n", this.curPlayItem.contentList, "var-init"),
          r = cc11001100_hook("r", this._playStartTime, "var-init");
        return void 0 !== t && void 0 !== e || (o = cc11001100_hook("o", this._contentCacheIndex, "assign"), t = cc11001100_hook("t", o[0], "assign"), e = cc11001100_hook("e", o[1], "assign")), Nu("开始缓存:", t + 1, e, "playingItem: ", this.curAudioIndex[0], this.curAudioIndex[1], "diff:", this._getCacheDiff()), this._getAudioItem(t + 1, e) || 0 > e ? void Nu(t + 1, e, "已经缓存或无缓存内容") : new Promise(function (o) {
          i._getCacheDiff() <= i._maxCacheNum ? function () {
            if (n[t] && n[t][e]) {
              var A = cc11001100_hook("A", n[t][e], "var-init");
              i._loadAudio(A).then(function (n) {
                if (i._playStartTime !== r) return ju("load complete but content is changed, src:", i._getTexFromAudioSrc(A)), Promise.reject({
                  errorType: cc11001100_hook("errorType", ol.COMMON_ERROR, "object-key-init"),
                  id: cc11001100_hook("id", i.curPlayItem.id, "object-key-init")
                });
                i._audioCache[t + 1][e] = cc11001100_hook("i._audioCache[t + 1][e]", n, "assign");
                var a = cc11001100_hook("a", i._moveToNextPos(t, e + 1, i.curPlayItem.contentList), "var-init"),
                  s = cc11001100_hook("s", a[0], "var-init"),
                  c = cc11001100_hook("c", a[1], "var-init");
                i._contentCacheIndex = cc11001100_hook("i._contentCacheIndex", [s, c], "assign"), -1 !== s && -1 !== c && i._cacheContent(s, c), Nu("缓存成功:", t + 1, e, i._getTexFromAudioSrc(A)), o();
              }).catch(function (t) {
                if (!t || t.errorType !== ol.COMMON_ERROR) throw new Error(t);
              });
            }
          }() : ju("缓存最大值已满(" + i._maxCacheNum + ")，暂不缓存");
        });
      }, "assign"), t.prototype.continue = cc11001100_hook("t.prototype.continue", function () {
        this._isPlayEnd ? this.replay() : this._playAudioEl();
      }, "assign"), t.prototype.replay = cc11001100_hook("t.prototype.replay", function () {
        this.play(this.curPlayItem.id);
      }, "assign"), t.prototype.pause = cc11001100_hook("t.prototype.pause", function () {
        this._pauseAudioEl(!0);
      }, "assign"), t.prototype._getAudioItem = cc11001100_hook("t.prototype._getAudioItem", function (t, e) {
        return this._audioCache[t] && this._audioCache[t][e] ? this._audioCache[t][e] : null;
      }, "assign"), t.prototype._getCacheDiff = cc11001100_hook("t.prototype._getCacheDiff", function () {
        for (var t = cc11001100_hook("t", this.curAudioIndex, "var-init"), e = cc11001100_hook("e", t[0], "var-init"), o = cc11001100_hook("o", t[1], "var-init"), i = cc11001100_hook("i", 0, "var-init"), n = cc11001100_hook("n", e, "var-init"); n < this._audioCache.length; n++) for (var r = cc11001100_hook("r", this._audioCache[n], "var-init"), A = cc11001100_hook("A", n === e ? o : 0, "var-init"); A < r.length; A++) this._audioCache[n] && this._audioCache[n][A] && i++;
        return i;
      }, "assign"), t.prototype._getTexFromAudioSrc = cc11001100_hook("t.prototype._getTexFromAudioSrc", function (t) {
        return function (t, e) {
          t = cc11001100_hook("t", t.replace(/[\[\]]/g, "\\$&"), "assign");
          var o = cc11001100_hook("o", new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e), "var-init");
          return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null;
        }("tex", t);
      }, "assign"), t.prototype._moveToNextPos = cc11001100_hook("t.prototype._moveToNextPos", function (t, e, o) {
        for (var i = cc11001100_hook("i", t, "var-init"); i < o.length; i++) if (o[i]) {
          for (var n = cc11001100_hook("n", e, "var-init"); e < o[i].length; n++) if (o[i][n]) return [i, n];
          e = cc11001100_hook("e", 0, "assign");
        }
        return [-1, -1];
      }, "assign"), t.prototype._playNextPart = cc11001100_hook("t.prototype._playNextPart", function () {
        var t = cc11001100_hook("t", this, "var-init"),
          e = cc11001100_hook("e", this.curAudioEl, "var-init");
        return e && e.addEventListener("ended", function o() {
          var i = cc11001100_hook("i", t.curAudioIndex, "var-init"),
            n = cc11001100_hook("n", i[0], "var-init"),
            r = cc11001100_hook("r", i[1], "var-init");
          t._playDuration += cc11001100_hook("t._playDuration", t.curAudioEl.duration, "assign");
          var A = cc11001100_hook("A", t._moveToNextPos(n, r + 1, t._audioCache), "var-init"),
            a = cc11001100_hook("a", A[0], "var-init"),
            s = cc11001100_hook("s", A[1], "var-init");
          -1 !== a && -1 !== s ? (Nu("播放音频", [a, s], t._getTexFromAudioSrc(t._audioCache[a][s].src)), t._setCurAudioEl(a, s), t._playNextPart(), t._cacheContent(), a !== n && t._eventEmitter.emit(il.CHANGE_PARAGRAPH, a)) : (t._eventEmitter.emit(il.PLAY_END, t.curPlayItem), t._pauseAudioEl(!0), t.playNextTts(), Nu("play end", t.curPlayItem)), e && e.removeEventListener("ended", o);
        }), this._playAudioEl().catch(function (t) {
          return Mu("start play audio failed", t), Promise.reject(t);
        });
      }, "assign"), t.prototype._setCurAudioEl = cc11001100_hook("t.prototype._setCurAudioEl", function (t, e) {
        this.curAudioIndex = cc11001100_hook("this.curAudioIndex", [t, e], "assign"), this.curAudioEl = cc11001100_hook("this.curAudioEl", this._audioCache[t][e], "assign");
      }, "assign"), t.prototype._loadAudio = cc11001100_hook("t.prototype._loadAudio", function (t, e) {
        var i,
          n = cc11001100_hook("n", this, "var-init");
        void 0 === e && (e = cc11001100_hook("e", 3, "assign"));
        var r = cc11001100_hook("r", !1, "var-init");
        return new Promise(function (A, a) {
          !function s() {
            var c = cc11001100_hook("c", document.createElement("audio"), "var-init");
            c.src = cc11001100_hook("c.src", t, "assign"), c.load(), c.muted = cc11001100_hook("c.muted", !0, "assign"), c.preload = cc11001100_hook("c.preload", "auto", "assign"), i = cc11001100_hook("i", window.setTimeout(function () {
              r = cc11001100_hook("r", !0, "assign"), o(document.body, c), --e <= 0 ? (Mu("audio load failed", c.src), a({
                errorType: cc11001100_hook("errorType", ol.LOAD_ERROR, "object-key-init"),
                data: {
                  src: cc11001100_hook("src", c.src, "object-key-init")
                }
              })) : (Nu("audio load timeout", "retrying", "retry last time", e, "text", n._getTexFromAudioSrc(t)), s());
            }, n._audioLoadOvertime), "assign"), c.addEventListener("canplaythrough", function () {
              r || (o(document.body, c), clearTimeout(i), A(c));
            }), document.body.appendChild(c);
          }();
        });
      }, "assign"), t.prototype.loadVoices = cc11001100_hook("t.prototype.loadVoices", function () {
        var t = cc11001100_hook("t", this, "var-init");
        return this._userVoiceList.length > 0 ? Promise.resolve() : (Nu("开始获取音色信息", this._getVoiceListApi), r(this._getVoiceListApi).then(function (e) {
          if (e && 0 != +e.errno) return Promise.reject({
            errorType: cc11001100_hook("errorType", ol.LOAD_ERROR, "object-key-init"),
            data: {}
          });
          Nu("获取音色信息成功", e.data.voiceList);
          var o = cc11001100_hook("o", e.data.voiceList.map(function (t) {
            return {
              displayName: cc11001100_hook("displayName", t.display_name, "object-key-init"),
              onlineId: cc11001100_hook("onlineId", t.online_id, "object-key-init"),
              displayIndex: cc11001100_hook("displayIndex", t.display_index, "object-key-init"),
              coverImg: cc11001100_hook("coverImg", t.cover_img, "object-key-init"),
              isSelected: cc11001100_hook("isSelected", !!+t.is_selected, "object-key-init"),
              speakerId: cc11001100_hook("speakerId", t.speaker_id, "object-key-init")
            };
          }), "var-init");
          t._initVoiceList(o);
        }).catch(function (e) {
          throw e.errorType ? t._emitError(e.errorType, e.data) : t._emitError(ol.UNKNOWN_ERROR, {
            error: cc11001100_hook("error", e, "object-key-init")
          }), new Error(e);
        }));
      }, "assign"), t.prototype._emitError = cc11001100_hook("t.prototype._emitError", function (t, e) {
        void 0 === e && (e = cc11001100_hook("e", {}, "assign")), Mu("errorType: " + t, e), e.error && console.error(e.error), this._eventEmitter.emit(il.ERROR, {
          errorType: cc11001100_hook("errorType", t, "object-key-init"),
          data: cc11001100_hook("data", e, "object-key-init")
        });
      }, "assign"), t.prototype._changeToNextVoice = cc11001100_hook("t.prototype._changeToNextVoice", function () {
        for (var t = cc11001100_hook("t", this.curVoiceIndex, "var-init"), e = cc11001100_hook("e", 1, "var-init"); e <= this._userVoiceList.length; e++) {
          var o = cc11001100_hook("o", (t + e) % this._userVoiceList.length, "var-init");
          if (this._userVoiceList[o].isSelected) {
            this.curVoiceIndex = cc11001100_hook("this.curVoiceIndex", o, "assign"), this.curVoiceItem = cc11001100_hook("this.curVoiceItem", this._userVoiceList[o], "assign");
            break;
          }
        }
        return this.curVoiceItem;
      }, "assign"), t.prototype.addItems = cc11001100_hook("t.prototype.addItems", function (t) {
        var e = cc11001100_hook("e", this, "var-init");
        t.forEach(function (t) {
          e._sourceItems.find(function (e) {
            return t.id === e.id;
          }) || (e._sourceItems.push(t), e._isPlayEnd = cc11001100_hook("e._isPlayEnd", !1, "assign"));
        }), this._eventEmitter.emit(this.hasNext() ? il.ENABLE_NEXT : il.DISABLE_NEXT);
      }, "assign"), t.prototype.updateItems = cc11001100_hook("t.prototype.updateItems", function (t) {
        var e = cc11001100_hook("e", this, "var-init");
        this._sourceItems = cc11001100_hook("this._sourceItems", [], "assign"), t.forEach(function (t) {
          e._sourceItems.find(function (e) {
            return e.id === t.id;
          }) || (e._sourceItems.push(t), e._isPlayEnd = cc11001100_hook("e._isPlayEnd", !1, "assign"));
        }), this._eventEmitter.emit(this.hasNext() ? il.ENABLE_NEXT : il.DISABLE_NEXT);
      }, "assign"), t.prototype.loadSource = cc11001100_hook("t.prototype.loadSource", function (t, e) {
        return e || (e = cc11001100_hook("e", this._changeToNextVoice(), "assign")), Nu("开始获取音频资源", "\n", "资源信息: ", t, "\n", "音色信息", e), r(t.requestUrl, MA(MA({}, t.requestParams), {
          tone: cc11001100_hook("tone", e.onlineId, "object-key-init")
        })).then(function (e) {
          var o = cc11001100_hook("o", e.data.length > 0 ? e.data[0] : e.data, "var-init");
          return e && 0 != +e.errno ? Promise.reject({
            errorType: cc11001100_hook("errorType", ol.LOAD_ERROR, "object-key-init"),
            data: {
              sourceItem: cc11001100_hook("sourceItem", t, "object-key-init")
            }
          }) : o ? {
            id: cc11001100_hook("id", o.nid, "object-key-init"),
            titleList: cc11001100_hook("titleList", o.titleList || [], "object-key-init"),
            contentList: cc11001100_hook("contentList", o.contentList || [], "object-key-init"),
            title: cc11001100_hook("title", o.title, "object-key-init"),
            image: cc11001100_hook("image", o.image, "object-key-init"),
            duration: cc11001100_hook("duration", o.duration, "object-key-init"),
            logParams: cc11001100_hook("logParams", t.logParams || {}, "object-key-init")
          } : null;
        });
      }, "assign"), t.prototype._playAudioEl = cc11001100_hook("t.prototype._playAudioEl", function () {
        var t = cc11001100_hook("t", this, "var-init");
        return this._isLoading ? Promise.resolve() : this.curAudioEl ? (this.curAudioEl.muted = cc11001100_hook("this.curAudioEl.muted", !1, "assign"), new Promise(function (e, o) {
          t.changeVolume(t.volume), t.curAudioEl.play().then(function () {
            t.isPaused = cc11001100_hook("t.isPaused", !1, "assign"), t._eventEmitter.emit(il.PLAY, t.curPlayItem), t._writePlayingCookie(), e();
          }).catch(function (t) {
            Mu("play error!"), o(t);
          });
        })) : (this.isPaused = cc11001100_hook("this.isPaused", !0, "assign"), Promise.resolve());
      }, "assign"), t.prototype._pauseAudioEl = cc11001100_hook("t.prototype._pauseAudioEl", function (t) {
        void 0 === t && (t = cc11001100_hook("t", !1, "assign")), this.curAudioEl ? this.isPaused || (this.curAudioEl.pause(), this.isPaused = cc11001100_hook("this.isPaused", !0, "assign"), t && this._eventEmitter.emit(il.PAUSE, this.curPlayItem)) : this.isPaused = cc11001100_hook("this.isPaused", !0, "assign");
      }, "assign"), t.prototype._registerPlayerId = cc11001100_hook("t.prototype._registerPlayerId", function () {
        this._playerId = cc11001100_hook("this._playerId", Date.now().toString() + Math.floor(1e3 * Math.random()).toString(), "assign");
      }, "assign"), t.prototype._writePlayingCookie = cc11001100_hook("t.prototype._writePlayingCookie", function () {
        document.cookie = cc11001100_hook("document.cookie", "tts_playerid=" + escape(this._playerId) + ";path=/;domain=baidu.com", "assign");
      }, "assign"), t.prototype._watchPlayingId = cc11001100_hook("t.prototype._watchPlayingId", function () {
        var t = cc11001100_hook("t", this, "var-init");
        setInterval(function () {
          var e,
            o,
            i = cc11001100_hook("i", (o = cc11001100_hook("o", new RegExp("(^| )" + Ku + "=([^;]*)(;|$)"), "assign"), (e = cc11001100_hook("e", document.cookie.match(o), "assign")) ? unescape(e[2]) : ""), "var-init");
          t._playerId === i || t.isPaused || t._pauseAudioEl(!0);
        }, 300);
      }, "assign"), t.prototype._initVoiceList = cc11001100_hook("t.prototype._initVoiceList", function (t) {
        this._userVoiceList = cc11001100_hook("this._userVoiceList", t, "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < t.length; e++) 1 == +t[e].isSelected && (this.curVoiceItem = cc11001100_hook("this.curVoiceItem", t[e], "assign"), this.curVoiceIndex = cc11001100_hook("this.curVoiceIndex", e, "assign"));
        this._eventEmitter.emit(il.LOAD_VOICES, t);
      }, "assign"), t.prototype._init = cc11001100_hook("t.prototype._init", function () {
        var t = cc11001100_hook("t", this, "var-init");
        this._eventEmitter.on(nl.VOLUME_CHANGE, function (e) {
          t.changeVolume(e), t.volume = cc11001100_hook("t.volume", e, "assign");
        }), this._eventEmitter.on(nl.CONTINUE_CLICK, function () {
          t.continue();
        }), this._eventEmitter.on(nl.PAUSE_CLICK, function () {
          t.pause();
        }), this._eventEmitter.on(nl.NEXT_CLICK, function () {
          t.playNextTts();
        }), this._eventEmitter.on(nl.VOICE_CHOOSE, function (e) {
          for (var o = cc11001100_hook("o", [], "var-init"), i = cc11001100_hook("i", e.isSelected, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t._userVoiceList.length; n++) {
            var r = cc11001100_hook("r", t._userVoiceList[n], "var-init");
            r.isSelected && r.onlineId !== e.onlineId && o.push(r.onlineId);
          }
          i && o.push(e.onlineId), Nu("更新后的音色列表：", o);
          var A = function () {
            var n = cc11001100_hook("n", 0, "var-init");
            t._userVoiceList.forEach(function (t) {
              for (var e = cc11001100_hook("e", !1, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < o.length; i++) t.onlineId === o[i] && (n = cc11001100_hook("n", i, "assign"), e = cc11001100_hook("e", !0, "assign"));
              t.isSelected = cc11001100_hook("t.isSelected", e, "assign");
            }), t._eventEmitter.emit(il.LOAD_VOICES, t._userVoiceList), (i || e.onlineId === t.curVoiceItem.onlineId) && (i ? (t.curVoiceIndex = cc11001100_hook("t.curVoiceIndex", n, "assign"), t.curVoiceItem = cc11001100_hook("t.curVoiceItem", e, "assign")) : t._changeToNextVoice(), t.play(t.curPlayItem.id, t.curVoiceItem, t.curAudioIndex[0], t.curAudioIndex[1]));
          };
          t._editFunc ? t._editFunc(o, A.bind(t)) : t._editVoices(o).then(A.bind(t)).catch(function () {
            t._emitError(ol.UPDATE_VOICE_ERROR, {
              voiceIds: cc11001100_hook("voiceIds", o, "object-key-init")
            });
          });
        }), this._registerPlayerId(), this._watchPlayingId(), this._safariInit();
      }, "assign"), t;
    }(), "var-init"),
    Zu = cc11001100_hook("Zu", be, "var-init"),
    Gu = cc11001100_hook("Gu", ie, "var-init"),
    Yu = cc11001100_hook("Yu", Re, "var-init"),
    Wu = cc11001100_hook("Wu", ji, "var-init"),
    Ju = cc11001100_hook("Ju", ii, "var-init"),
    Hu = cc11001100_hook("Hu", Ho, "var-init"),
    Xu = cc11001100_hook("Xu", $o, "var-init"),
    zu = cc11001100_hook("zu", y, "var-init"),
    $u = cc11001100_hook("$u", YA, "var-init"),
    th = function (t, e, o) {
      var i = cc11001100_hook("i", Zu(e), "var-init");
      i in t ? Gu.f(t, i, Yu(0, o)) : t[i] = cc11001100_hook("t[i]", o, "assign");
    },
    eh = cc11001100_hook("eh", ra("splice"), "var-init"),
    oh = cc11001100_hook("oh", Math.max, "var-init"),
    ih = cc11001100_hook("ih", Math.min, "var-init"),
    nh = cc11001100_hook("nh", 9007199254740991, "var-init"),
    rh = cc11001100_hook("rh", "Maximum allowed length exceeded", "var-init");
  Wu({
    target: cc11001100_hook("target", "Array", "object-key-init"),
    proto: cc11001100_hook("proto", !0, "object-key-init"),
    forced: cc11001100_hook("forced", !eh, "object-key-init")
  }, {
    splice: function (t, e) {
      var o,
        i,
        n,
        r,
        A,
        a,
        s = cc11001100_hook("s", zu(this), "var-init"),
        c = cc11001100_hook("c", Xu(s.length), "var-init"),
        l = cc11001100_hook("l", Ju(t, c), "var-init"),
        u = cc11001100_hook("u", arguments.length, "var-init");
      if (0 === u ? o = cc11001100_hook("o", i = cc11001100_hook("i", 0, "assign"), "assign") : 1 === u ? (o = cc11001100_hook("o", 0, "assign"), i = cc11001100_hook("i", c - l, "assign")) : (o = cc11001100_hook("o", u - 2, "assign"), i = cc11001100_hook("i", ih(oh(Hu(e), 0), c - l), "assign")), c + o - i > nh) throw TypeError(rh);
      for (n = cc11001100_hook("n", $u(s, i), "assign"), r = cc11001100_hook("r", 0, "assign"); i > r; r++) (A = cc11001100_hook("A", l + r, "assign")) in s && th(n, r, s[A]);
      if (n.length = cc11001100_hook("n.length", i, "assign"), i > o) {
        for (r = cc11001100_hook("r", l, "assign"); c - i > r; r++) a = cc11001100_hook("a", r + o, "assign"), (A = cc11001100_hook("A", r + i, "assign")) in s ? s[a] = cc11001100_hook("s[a]", s[A], "assign") : delete s[a];
        for (r = cc11001100_hook("r", c, "assign"); r > c - i + o; r--) delete s[r - 1];
      } else if (o > i) for (r = cc11001100_hook("r", c - i, "assign"); r > l; r--) a = cc11001100_hook("a", r + o - 1, "assign"), (A = cc11001100_hook("A", r + i - 1, "assign")) in s ? s[a] = cc11001100_hook("s[a]", s[A], "assign") : delete s[a];
      for (r = cc11001100_hook("r", 0, "assign"); o > r; r++) s[r + l] = cc11001100_hook("s[r + l]", arguments[r + 2], "assign");
      return s.length = cc11001100_hook("s.length", c - i + o, "assign"), n;
    }
  });
  var Ah = cc11001100_hook("Ah", function () {
      function t() {
        this._eventMap = cc11001100_hook("this._eventMap", {}, "assign");
      }
      return t.prototype.checkEventNameExist = cc11001100_hook("t.prototype.checkEventNameExist", function (t) {
        return void 0 !== this._eventMap[t];
      }, "assign"), t.prototype.checkCallbackExist = cc11001100_hook("t.prototype.checkCallbackExist", function (t, e) {
        if (this.checkEventNameExist(t)) for (var o = cc11001100_hook("o", this.getEvents(t), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < o.length; i++) if (o[i].callback === e) return !0;
        return !1;
      }, "assign"), t.prototype.getEvents = cc11001100_hook("t.prototype.getEvents", function (t) {
        return this.checkEventNameExist(t) ? this._eventMap[t] : void 0;
      }, "assign"), t.prototype.on = cc11001100_hook("t.prototype.on", function (t, e) {
        this.checkEventNameExist(t) || (this._eventMap[t] = cc11001100_hook("this._eventMap[t]", [], "assign")), this._eventMap[t].push({
          callback: cc11001100_hook("callback", e, "object-key-init"),
          isOnce: cc11001100_hook("isOnce", !1, "object-key-init")
        });
      }, "assign"), t.prototype.off = cc11001100_hook("t.prototype.off", function (t, e) {
        if (this.checkCallbackExist(t, e)) for (var o = cc11001100_hook("o", this.getEvents(t), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < o.length; i++) o[i].callback === e && o.splice(i, 1);
      }, "assign"), t.prototype.once = cc11001100_hook("t.prototype.once", function (t, e) {
        this.checkEventNameExist(t) || (this._eventMap[t] = cc11001100_hook("this._eventMap[t]", [], "assign")), this._eventMap[t].push({
          callback: cc11001100_hook("callback", e, "object-key-init"),
          isOnce: cc11001100_hook("isOnce", !0, "object-key-init")
        });
      }, "assign"), t.prototype.emit = cc11001100_hook("t.prototype.emit", function (t, e) {
        if (void 0 === e && (e = cc11001100_hook("e", {}, "assign")), this.checkEventNameExist(t)) for (var o = cc11001100_hook("o", this._eventMap[t], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < o.length; i++) {
          var n = cc11001100_hook("n", o[i], "var-init");
          n.callback(e), n.isOnce && o.splice(i, 1);
        }
      }, "assign"), t.prototype.remove = cc11001100_hook("t.prototype.remove", function (t) {
        delete this._eventMap[t];
      }, "assign"), t;
    }(), "var-init"),
    ah = cc11001100_hook("ah", oe, "var-init"),
    sh = cc11001100_hook("sh", Q, "var-init"),
    ch = cc11001100_hook("ch", xs, "var-init"),
    lh = cc11001100_hook("lh", mi, "var-init"),
    uh = cc11001100_hook("uh", Bo, "var-init"),
    hh = cc11001100_hook("hh", y, "var-init"),
    ph = cc11001100_hook("ph", Po, "var-init"),
    dh = cc11001100_hook("dh", Object.assign, "var-init"),
    fh = cc11001100_hook("fh", Object.defineProperty, "var-init"),
    gh = cc11001100_hook("gh", !dh || sh(function () {
      if (ah && 1 !== dh({
        b: cc11001100_hook("b", 1, "object-key-init")
      }, dh(fh({}, "a", {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: function () {
          fh(this, "b", {
            value: cc11001100_hook("value", 3, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
          });
        }
      }), {
        b: cc11001100_hook("b", 2, "object-key-init")
      })).b) return !0;
      var t = cc11001100_hook("t", {}, "var-init"),
        e = cc11001100_hook("e", {}, "var-init"),
        o = cc11001100_hook("o", Symbol(), "var-init"),
        i = cc11001100_hook("i", "abcdefghijklmnopqrst", "var-init");
      return t[o] = cc11001100_hook("t[o]", 7, "assign"), i.split("").forEach(function (t) {
        e[t] = cc11001100_hook("e[t]", t, "assign");
      }), 7 != dh({}, t)[o] || ch(dh({}, e)).join("") != i;
    }) ? function (t) {
      for (var e = cc11001100_hook("e", hh(t), "var-init"), o = cc11001100_hook("o", arguments.length, "var-init"), i = cc11001100_hook("i", 1, "var-init"), n = cc11001100_hook("n", lh.f, "var-init"), r = cc11001100_hook("r", uh.f, "var-init"); o > i;) for (var A, a = cc11001100_hook("a", ph(arguments[i++]), "var-init"), s = cc11001100_hook("s", n ? ch(a).concat(n(a)) : ch(a), "var-init"), c = cc11001100_hook("c", s.length, "var-init"), l = cc11001100_hook("l", 0, "var-init"); c > l;) A = cc11001100_hook("A", s[l++], "assign"), ah && !r.call(a, A) || (e[A] = cc11001100_hook("e[A]", a[A], "assign"));
      return e;
    } : dh, "var-init");
  ji({
    target: cc11001100_hook("target", "Object", "object-key-init"),
    stat: cc11001100_hook("stat", !0, "object-key-init"),
    forced: cc11001100_hook("forced", Object.assign !== gh, "object-key-init")
  }, {
    assign: cc11001100_hook("assign", gh, "object-key-init")
  });
  var mh = cc11001100_hook("mh", new (function () {
      function t(t) {
        cc11001100_hook("t", t, "function-parameter");
        void 0 === t && (t = cc11001100_hook("t", {}, "assign")), this.baseUrl = cc11001100_hook("this.baseUrl", "https://hpd.baidu.com/v.gif", "assign"), this.baseParams = cc11001100_hook("this.baseParams", t || {}, "assign");
      }
      return t.prototype.send = cc11001100_hook("t.prototype.send", function (t) {
        var e = cc11001100_hook("e", Object.assign({}, this.baseParams, t), "var-init");
        new Image().src = cc11001100_hook("new Image().src", this.baseUrl + "?" + al(e), "assign");
      }, "assign"), t.prototype.updateBaseParams = cc11001100_hook("t.prototype.updateBaseParams", function (t) {
        Object.assign(this.baseParams, t);
      }, "assign"), t;
    }())(), "var-init"),
    vh = cc11001100_hook("vh", function () {
      function t(t) {
        cc11001100_hook("t", t, "function-parameter");
        this._ownEmitter = cc11001100_hook("this._ownEmitter", new Ah(), "assign"), this._bindEmitEvents(), this.ui = cc11001100_hook("this.ui", new ll(t.uiOptions, this._ownEmitter), "assign"), this.core = cc11001100_hook("this.core", new Fu(t.coreOptions, this._ownEmitter), "assign"), this._logOptions = cc11001100_hook("this._logOptions", t.logOptions, "assign"), this.initLog(), this.events = cc11001100_hook("this.events", new Ah(), "assign"), this.inited = cc11001100_hook("this.inited", !1, "assign"), this.initing = cc11001100_hook("this.initing", !1, "assign"), this._initPromise = cc11001100_hook("this._initPromise", null, "assign"), this.version = cc11001100_hook("this.version", "0.3.6", "assign"), this._bindLogEvents();
      }
      return t.prototype._bindEmitEvents = cc11001100_hook("t.prototype._bindEmitEvents", function () {
        var t = cc11001100_hook("t", this, "var-init");
        this._ownEmitter.on(il.CHANGE_PARAGRAPH, function (e) {
          t.events.emit(rl.CHANGE_PARAGRAPH, e);
        }), this._ownEmitter.on(il.CHANGE_ID, function () {
          t.events.emit(il.CHANGE_ID);
        }), this._ownEmitter.on(nl.CONTINUE_CLICK, function (e) {
          t.events.emit(rl.PLAY_CLICK, e);
        }), this._ownEmitter.on(nl.PAUSE_CLICK, function (e) {
          t.events.emit(rl.PAUSE_CLICK, e);
        }), this._ownEmitter.on(nl.CLICK_TITLE, function () {
          t.events.emit(rl.CLICK_TITLE, t.core.curPlayItem);
        }), this._ownEmitter.on(nl.CLOSE_CLICK, function () {
          t.ui.hide(), t.core.pause();
        }), this._ownEmitter.on(il.LOAD_VOICES, function (e) {
          t.ui.initVoiceList(e);
        }), this._ownEmitter.on(il.PLAY_END, function (e) {
          t.events.emit(rl.PLAY_END, e);
        }), this._ownEmitter.on(il.START_PLAY, function (e) {
          t.events.emit(rl.START_PLAY, e);
        }), this._ownEmitter.on(il.PLAY, function (e) {
          t.events.emit(rl.PLAY, e), t.ui.show();
        }), this._ownEmitter.on(il.PAUSE, function (e) {
          t.events.emit(rl.PAUSE, e);
        }), this._ownEmitter.on(il.ERROR, function (e) {
          t.events.emit(rl.ERROR, e);
        });
      }, "assign"), t.prototype._bindLogEvents = cc11001100_hook("t.prototype._bindLogEvents", function () {
        var t = cc11001100_hook("t", this, "var-init");
        this._ownEmitter.on(il.PLAY_END, function () {
          t.sendDurationLog();
        }), this._ownEmitter.on(il.PAUSE, function () {
          t.sendDurationLog();
        }), this._ownEmitter.on(il.CHANGE_ID, function () {
          t.sendDurationLog();
        }), this._ownEmitter.on(il.START_PLAY, function () {
          t._startTime = cc11001100_hook("t._startTime", new Date().getTime(), "assign");
        }), this._ownEmitter.on(nl.CONTINUE_CLICK, function () {
          t.sendLog(Al.CLICK, "tts_play_button", "play"), t._startTime = cc11001100_hook("t._startTime", new Date().getTime(), "assign");
        }), this._ownEmitter.on(nl.PAUSE_CLICK, function () {
          t.sendLog(Al.CLICK, "tts_play_button", "pause");
        }), this._ownEmitter.on(nl.NEXT_CLICK, function () {
          t.sendLog(Al.CLICK, "tts_next_button");
        }), this._ownEmitter.on(nl.VOICE_CHANGE_CLICK, function () {
          t.sendLog(Al.CLICK, "tts_voice_change");
        }), this._ownEmitter.on(nl.VOICE_COLUMN_CLICK, function () {
          t.sendLog(Al.CLICK, "tts_volume");
        }), this._ownEmitter.on(nl.CLICK_TITLE, function () {
          t.sendLog(Al.CLICK, "tts_news_title");
        }), this._ownEmitter.on(nl.CLOSE_CLICK, function () {
          t.sendLog(Al.CLICK, "tts_player_close");
        }), this._ownEmitter.on(nl.VOICE_CHOOSE, function (e) {
          t.sendLog(Al.CLICK, e.speakerId, e.isSelected ? "choose" : "cancel");
        }), this._ownEmitter.on(nl.SHOW_PLAYER, function () {
          t.sendLog(Al.SHOW, "tts_player_show");
        });
      }, "assign"), t.prototype.pause = cc11001100_hook("t.prototype.pause", function () {
        this.core.pause();
      }, "assign"), t.prototype.continue = cc11001100_hook("t.prototype.continue", function () {
        this.core.continue();
      }, "assign"), t.prototype.hide = cc11001100_hook("t.prototype.hide", function () {
        var t = cc11001100_hook("t", this, "var-init");
        this.init().then(function () {
          t.ui.hide(), t.core.pause();
        }), this.ui.hide(), this.core.pause();
      }, "assign"), t.prototype.show = cc11001100_hook("t.prototype.show", function () {
        var t = cc11001100_hook("t", this, "var-init");
        this.init().then(function () {
          t.ui.show();
        });
      }, "assign"), t.prototype.init = cc11001100_hook("t.prototype.init", function () {
        var t = cc11001100_hook("t", this, "var-init");
        return this.inited || this.initing ? this._initPromise : Fu.isSupport() ? (this.initing = cc11001100_hook("this.initing", !0, "assign"), this._initPromise = cc11001100_hook("this._initPromise", this.core.loadVoices().then(function () {
          t.initing = cc11001100_hook("t.initing", !1, "assign"), t.inited = cc11001100_hook("t.inited", !0, "assign");
        }).catch(function (t) {
          Mu("获取音色列表失败", t);
        }), "assign"), this._initPromise) : Promise.reject("player is not support this browser");
      }, "assign"), t.prototype.sendDurationLog = cc11001100_hook("t.prototype.sendDurationLog", function () {
        if (this._logOptions && this._logOptions.durationTid && this.core.curPlayItem) {
          var t = cc11001100_hook("t", this.core.curPlayItem.logParams || {}, "var-init"),
            e = cc11001100_hook("e", Math.round((Date.now() - this._startTime) / 1e3), "var-init");
          if (0 >= e || e > +this.core.curPlayItem.duration) return;
          mh.send({
            tid: cc11001100_hook("tid", this._logOptions.durationTid, "object-key-init"),
            logInfo: cc11001100_hook("logInfo", "tts_play", "object-key-init"),
            cst: cc11001100_hook("cst", Al.DURATION, "object-key-init"),
            ct: cc11001100_hook("ct", "2", "object-key-init"),
            r: cc11001100_hook("r", Date.now(), "object-key-init"),
            startTime: cc11001100_hook("startTime", this._startTime, "object-key-init"),
            endTime: cc11001100_hook("endTime", Date.now(), "object-key-init"),
            nid: cc11001100_hook("nid", this.core.curPlayItem.id, "object-key-init"),
            duration: cc11001100_hook("duration", e, "object-key-init"),
            logExtra: cc11001100_hook("logExtra", encodeURIComponent(JSON.stringify(MA({
              type: cc11001100_hook("type", this.core.curVoiceItem.speakerId, "object-key-init")
            }, t))), "object-key-init")
          }), this._startTime = cc11001100_hook("this._startTime", new Date().getTime(), "assign");
        }
      }, "assign"), t.prototype.sendLog = cc11001100_hook("t.prototype.sendLog", function (t, e, o) {
        if (void 0 === e && (e = cc11001100_hook("e", "", "assign")), void 0 === o && (o = cc11001100_hook("o", "", "assign")), this._logOptions) {
          var i = cc11001100_hook("i", "", "var-init"),
            n = cc11001100_hook("n", "", "var-init");
          switch (t) {
            case Al.CLICK:
              i = cc11001100_hook("i", this._logOptions.clickTid, "assign"), n = cc11001100_hook("n", "tts_click", "assign");
              break;
            case Al.SHOW:
              i = cc11001100_hook("i", this._logOptions.showTid, "assign"), n = cc11001100_hook("n", "tts_show", "assign");
          }
          var r = cc11001100_hook("r", this.core.curPlayItem && this.core.curPlayItem.logParams || {}, "var-init");
          mh.send({
            tid: cc11001100_hook("tid", i, "object-key-init"),
            logInfo: cc11001100_hook("logInfo", n, "object-key-init"),
            cst: cc11001100_hook("cst", t, "object-key-init"),
            ct: cc11001100_hook("ct", "2", "object-key-init"),
            logExtra: cc11001100_hook("logExtra", encodeURIComponent(JSON.stringify(MA({
              type: cc11001100_hook("type", e, "object-key-init"),
              value: cc11001100_hook("value", o, "object-key-init")
            }, r))), "object-key-init"),
            r: cc11001100_hook("r", Date.now(), "object-key-init")
          });
        }
      }, "assign"), t.prototype.initLog = cc11001100_hook("t.prototype.initLog", function () {
        var t = cc11001100_hook("t", this._logOptions, "var-init");
        t || (t = cc11001100_hook("t", {
          logFrom: cc11001100_hook("logFrom", "", "object-key-init"),
          clickTid: cc11001100_hook("clickTid", "", "object-key-init"),
          sid: cc11001100_hook("sid", "", "object-key-init"),
          showTid: cc11001100_hook("showTid", "", "object-key-init"),
          durationTid: cc11001100_hook("durationTid", "", "object-key-init")
        }, "assign")), mh.updateBaseParams({
          logFrom: cc11001100_hook("logFrom", t.logFrom || "", "object-key-init"),
          ct: cc11001100_hook("ct", 2, "object-key-init"),
          sid: cc11001100_hook("sid", t.sid, "object-key-init"),
          ssid: cc11001100_hook("ssid", "", "object-key-init"),
          logid: cc11001100_hook("logid", "", "object-key-init")
        });
      }, "assign"), t.prototype.addItems = cc11001100_hook("t.prototype.addItems", function (t) {
        return this.core.addItems(t);
      }, "assign"), t.prototype.playItem = cc11001100_hook("t.prototype.playItem", function (t) {
        var e = cc11001100_hook("e", this, "var-init");
        return this.init().then(function () {
          e.core.play(t);
        });
      }, "assign"), t.prototype.playNext = cc11001100_hook("t.prototype.playNext", function () {
        return this.core.playNextTts();
      }, "assign"), t.prototype.render = cc11001100_hook("t.prototype.render", function () {
        var t = cc11001100_hook("t", this, "var-init");
        this.init().then(function () {
          t.ui.render();
        });
      }, "assign"), t.prototype.on = cc11001100_hook("t.prototype.on", function () {
        for (var t = cc11001100_hook("t", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) t[e] = cc11001100_hook("t[e]", arguments[e], "assign");
        return this.events.on.apply(this.events, t);
      }, "assign"), t.prototype.off = cc11001100_hook("t.prototype.off", function () {
        for (var t = cc11001100_hook("t", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) t[e] = cc11001100_hook("t[e]", arguments[e], "assign");
        return this.events.off.apply(this.events, t);
      }, "assign"), t.prototype.once = cc11001100_hook("t.prototype.once", function () {
        for (var t = cc11001100_hook("t", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) t[e] = cc11001100_hook("t[e]", arguments[e], "assign");
        return this.events.once.apply(this.events, t);
      }, "assign"), t.prototype.editPosition = cc11001100_hook("t.prototype.editPosition", function (t) {
        this.ui.editPosition(t);
      }, "assign"), t.prototype.updateItems = cc11001100_hook("t.prototype.updateItems", function (t) {
        this.core.updateItems(t);
      }, "assign"), t;
    }(), "var-init");
  t.TtsPlayer = cc11001100_hook("t.TtsPlayer", vh, "assign"), Object.defineProperty(t, "__esModule", {
    value: cc11001100_hook("value", !0, "object-key-init")
  });
}), define("@baidu/pc-tts-player", ["@baidu/pc-tts-player/dist/tts.amd"], function (t) {
  return t;
});